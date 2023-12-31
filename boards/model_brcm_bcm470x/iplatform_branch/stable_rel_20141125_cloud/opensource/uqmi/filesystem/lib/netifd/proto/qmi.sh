#!/bin/sh

. /lib/functions.sh
. ../netifd-proto.sh
. /usr/lib/modem/usbmodem_log.sh
init_proto "$@"

proto_qmi_init_config() {
    proto_config_add_string "device"
    proto_config_add_string "apn"   
    proto_config_add_string "auth"
    proto_config_add_string "username"
    proto_config_add_string "password"
    proto_config_add_string "ipaddr"
    proto_config_add_string "hostname"
    proto_config_add_string "clientid"
    proto_config_add_boolean "broadcast"
    proto_config_add_string "reqopts"
    syslog $LOG_PROTO_INIT "proto=qmi"
}

proto_qmi_setup() {
    local interface="$1"
    local iface="$2"
    local lastip=/var/run/udhcpc-$iface.ip

    local device apn auth username password ipaddr hostname clientid broadcast reqopts cid pdh
    json_get_vars device apn auth username password ipaddr hostname clientid broadcast reqopts

    local pinlock=$(uci get modem.modemisp.pinlock)
	syslog $LOG_PROTO_SETUP "start running proto_setup,proto=qmi"
	syslog $LOG_PROTO_SETUP "interface=$interface iface=$iface device=$device apn=$apn auth=$auth username=$username ipaddr=$ipaddr hostname=$hostname clientid=$clientid broadcast=$broadcast reqopts=$reqopts pinlock=$pinlock"
    [ -e "$device" ] || {
        echo "qmi[$$]" "Control device not valid"
        proto_set_available "$interface" 0
		syslog $LOG_PROTO_SETUP "control device not valid,exit 1"
        return 1
    }

    [ -n "$apn" ] || {
        proto_notify_error "$interface" NO_APN
        proto_block_restart "$interface"
		syslog $LOG_PROTO_SETUP "no APN specified,exit 1"
        return 1
    }

    
    if [ $pinlock -ne 0 -a $pinlock -ne 4 ]; then
        proto_notify_error "$interface" PIN_FAILED
        proto_block_restart "$interface"
		syslog $LOG_PROTO_SETUP "pin status is not ready,pinlock=$pinlock,exit 1"
        return 1
    fi

    #get signal strength
	local sig_res=""
	sig_res=$(uqmi -d ${device} --get-signal-info 2>/dev/null)
	#echo "sig_res:$sig_res*****************************" >>/dev/console
	[ -z $sig_res] || {
		rssi=$(echo "$sig_res" | awk '{
		if($0 ~ /rssi/ )
		{
			split($0,arr_tmp,":")
			split(arr_tmp[2],arr,",")
			print(arr[1])
		}
		}')
		rssi=$(echo "$rssi" | sed 's/ //g')
		sig_flag=$(expr match $rssi "-[0-9]*$")
		if [ $sig_flag -gt 0 ];then
			uci set modem.modemisp.modem_signal=$rssi
			uci commit modem
		fi
		#syslog $LOG_GET_SIGNAL "uqmi" "$sig_res" "$rssi"
	}
	syslog $LOG_GET_SIGNAL "uqmi -d ${device} --get-signal-info $sig_res rssi=$rssi"
    case $auth in
    "0" )
        authentype="none"
        ;;
    "1" )
        authentype="pap"
        ;;
    "2" )
        authentype="chap"
        ;;
    esac

    uqmi -d $device --stop-network 0xffffffff --autoconnect
    uqmi -d $device --get-serving-system
    uqmi -d $device --wda-set-data-format 802.3
	syslog $LOG_PROTO_SETUP "run 'uqmi -d $device --get-serving-system' to get server system"
	local get_server_tims=0
    while uqmi -d "$device" --get-serving-system | grep '"searching"' > /dev/null; do
		if [ $get_server_tims -gt 30 ];then
			#echo "times of getting server system more than 20,fail">>/dev/console
			syslog $LOG_PROTO_SETUP "times of getting server system more than 30,fail"
			break
		fi
		get_server_tims=$(($get_server_tims+1))
		syslog $LOG_PROTO_SETUP "searching. times:$get_server_tims"
		echo "searching" >>/dev/console
        sleep 3
    done
	get_server_tims=0
	while uqmi -d "$device" --get-serving-system | grep '"not_registered"' > /dev/null; do
		if [ $get_server_tims -gt 30 ];then
			#echo "times of getting server system more than 20,fail">>/dev/console
			syslog $LOG_PROTO_SETUP "times of getting server system more than 30,fail"
			break
		fi
		get_server_tims=$(($get_server_tims+1))
		syslog $LOG_PROTO_SETUP "not_registered. times:$get_server_tims"
		echo "not_registered" >>/dev/console
        sleep 3
    done
	echo "registered success" >>/dev/console
	syslog $LOG_PROTO_SETUP "server register succeed"
    qmiclientid=`uqmi -d $device --get-client-id wds`
    setclientid="wds,$qmiclientid"
	echo "qmiclientid=$qmiclientid" >>/dev/console
	syslog $LOG_PROTO_SETUP "clientid=$qmiclientid"
    pdh=`uqmi -s -d $device --set-client-id wds,"$qmiclientid" --start-network "$apn" \
    ${authentype:+--auth-type $authentype} \
    ${username:+--username $username} \
    ${password:+--password $password} --autoconnect`
	syslog $LOG_PROTO_SETUP "run uqmi --start-network,retval=$pdh"
	[ $? -ne 0 ] && {
		echo "Unable to connect, check APN and authentication" >>/dev/console
		echo "pdh=$pdh">>/dev/console
	}

    [ -z $iface ] || iface="wwan0"
    ifconfig $iface up

    local opt dhcpopts
    for opt in $reqopts; do
        append dhcpopts "-O $opt"
    done
    [ "$broadcast" = 1 ] && broadcast="-B" || broadcast=
    [ -n "$clientid" ] && clientid="-x 0x3d:${clientid//:/}" || clientid="-C"
    # get the last ipaddr
    [ -f $lastip ] && ipaddr=$(cat $lastip)
    vendorid="MSFT 5.0"

    proto_export "INTERFACE=$interface"
    proto_export "IFNAME=$iface"
    proto_run_command "$interface" udhcpc \
        -p /var/run/udhcpc-$iface.pid \
        -s /lib/netifd/dhcp.script \
        -O 33 -O 121 -O 249 \
        -f -R -a -t 0 -i "$iface" \
        ${ipaddr:+-r $ipaddr} \
        ${hostname:+-H $hostname} \
        ${vendorid:+-V "$vendorid"} \
        $clientid $broadcast $dhcpopts
}

proto_qmi_teardown() {
	local interface="$1"
	local ifname=""
	local device
	json_get_vars device
	uqmi -d $device --stop-network 0xffffffff --autoconnect
	uqmi -d $device --set-autoconnect disable
	qmiclientid=`uqmi -d $device --get-client-id wds`
	setclientid="wds,$qmiclientid"
	uqmi -d $device --set-client-id $setclientid --release-client-id wds
	proto_kill_command "$interface" 15
	syslog $LOG_PROTO_TEARDOWN "proto=qmi device=$device interface=$interface"
}

add_protocol qmi

