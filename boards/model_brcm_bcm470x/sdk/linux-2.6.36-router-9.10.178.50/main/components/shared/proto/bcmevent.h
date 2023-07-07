/*
 * Broadcom Event  protocol definitions
 *
 * Dependencies: proto/bcmeth.h
 *
 * Copyright (C) 2016, Broadcom. All Rights Reserved.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 *
 * <<Broadcom-WL-IPTag/Open:>>
 *
 * $Id: bcmevent.h 635200 2016-05-03 05:12:34Z $
 *
 */

/*
 * Broadcom Ethernet Events protocol defines
 *
 */

#ifndef _BCMEVENT_H_
#define _BCMEVENT_H_

#ifndef _TYPEDEFS_H_
#include <typedefs.h>
#endif
/* #include <ethernet.h> -- TODO: req., excluded to overwhelming coupling (break up ethernet.h) */
#include <proto/bcmeth.h>

/* This marks the start of a packed structure section. */
#include <packed_section_start.h>

#define BCM_EVENT_MSG_VERSION		2	/* wl_event_msg_t struct version */
#define BCM_MSG_IFNAME_MAX		16	/* max length of interface name */

/* flags */
#define WLC_EVENT_MSG_LINK		0x01	/* link is up */
#define WLC_EVENT_MSG_FLUSHTXQ		0x02	/* flush tx queue on MIC error */
#define WLC_EVENT_MSG_GROUP		0x04	/* group MIC error */
#define WLC_EVENT_MSG_UNKBSS		0x08	/* unknown source bsscfg */
#define WLC_EVENT_MSG_UNKIF		0x10	/* unknown source OS i/f */

/* these fields are stored in network order */

/* version 1 */
typedef BWL_PRE_PACKED_STRUCT struct
{
	uint16	version;
	uint16	flags;			/* see flags below */
	uint32	event_type;		/* Message (see below) */
	uint32	status;			/* Status code (see below) */
	uint32	reason;			/* Reason code (if applicable) */
	uint32	auth_type;		/* WLC_E_AUTH */
	uint32	datalen;		/* data buf */
	struct ether_addr	addr;	/* Station address (if applicable) */
	char	ifname[BCM_MSG_IFNAME_MAX]; /* name of the packet incoming interface */
} BWL_POST_PACKED_STRUCT wl_event_msg_v1_t;

/* the current version */
typedef BWL_PRE_PACKED_STRUCT struct
{
	uint16	version;
	uint16	flags;			/* see flags below */
	uint32	event_type;		/* Message (see below) */
	uint32	status;			/* Status code (see below) */
	uint32	reason;			/* Reason code (if applicable) */
	uint32	auth_type;		/* WLC_E_AUTH */
	uint32	datalen;		/* data buf */
	struct ether_addr	addr;	/* Station address (if applicable) */
	char	ifname[BCM_MSG_IFNAME_MAX]; /* name of the packet incoming interface */
	uint8	ifidx;			/* destination OS i/f index */
	uint8	bsscfgidx;		/* source bsscfg index */
} BWL_POST_PACKED_STRUCT wl_event_msg_t;

/* used by driver msgs */
typedef BWL_PRE_PACKED_STRUCT struct bcm_event {
	struct ether_header eth;
	bcmeth_hdr_t		bcm_hdr;
	wl_event_msg_t		event;
	/* data portion follows */
} BWL_POST_PACKED_STRUCT bcm_event_t;

#define BCM_MSG_LEN	(sizeof(bcm_event_t) - sizeof(bcmeth_hdr_t) - sizeof(struct ether_header))

/* Event messages */
#define WLC_E_SET_SSID		0	/* indicates status of set SSID */
#define WLC_E_JOIN		1	/* differentiates join IBSS from found (WLC_E_START) IBSS */
#define WLC_E_START		2	/* STA founded an IBSS or AP started a BSS */
#define WLC_E_AUTH		3	/* 802.11 AUTH request */
#define WLC_E_AUTH_IND		4	/* 802.11 AUTH indication */
#define WLC_E_DEAUTH		5	/* 802.11 DEAUTH request */
#define WLC_E_DEAUTH_IND	6	/* 802.11 DEAUTH indication */
#define WLC_E_ASSOC		7	/* 802.11 ASSOC request */
#define WLC_E_ASSOC_IND		8	/* 802.11 ASSOC indication */
#define WLC_E_REASSOC		9	/* 802.11 REASSOC request */
#define WLC_E_REASSOC_IND	10	/* 802.11 REASSOC indication */
#define WLC_E_DISASSOC		11	/* 802.11 DISASSOC request */
#define WLC_E_DISASSOC_IND	12	/* 802.11 DISASSOC indication */
#define WLC_E_QUIET_START	13	/* 802.11h Quiet period started */
#define WLC_E_QUIET_END		14	/* 802.11h Quiet period ended */
#define WLC_E_BEACON_RX		15	/* BEACONS received/lost indication */
#define WLC_E_LINK		16	/* generic link indication */
#define WLC_E_MIC_ERROR		17	/* TKIP MIC error occurred */
#define WLC_E_NDIS_LINK		18	/* NDIS style link indication */
#define WLC_E_ROAM		19	/* roam complete: indicate status & reason */
#define WLC_E_TXFAIL		20	/* change in dot11FailedCount (txfail) */
#define WLC_E_PMKID_CACHE	21	/* WPA2 pmkid cache indication */
#define WLC_E_RETROGRADE_TSF	22	/* current AP's TSF value went backward */
#define WLC_E_PRUNE		23	/* AP was pruned from join list for reason */
#define WLC_E_AUTOAUTH		24	/* report AutoAuth table entry match for join attempt */
#define WLC_E_EAPOL_MSG		25	/* Event encapsulating an EAPOL message */
#define WLC_E_SCAN_COMPLETE	26	/* Scan results are ready or scan was aborted */
#define WLC_E_ADDTS_IND		27	/* indicate to host addts fail/success */
#define WLC_E_DELTS_IND		28	/* indicate to host delts fail/success */
#define WLC_E_BCNSENT_IND	29	/* indicate to host of beacon transmit */
#define WLC_E_BCNRX_MSG		30	/* Send the received beacon up to the host */
#define WLC_E_BCNLOST_MSG	31	/* indicate to host loss of beacon */
#define WLC_E_ROAM_PREP		32	/* before attempting to roam association */
#define WLC_E_PFN_NET_FOUND	33	/* PFN network found event */
#define WLC_E_PFN_NET_LOST	34	/* PFN network lost event */
#define WLC_E_RESET_COMPLETE	35
#define WLC_E_JOIN_START	36
#define WLC_E_ROAM_START	37	/* roam attempt started: indicate reason */
#define WLC_E_ASSOC_START	38
#define WLC_E_IBSS_ASSOC	39
#define WLC_E_RADIO		40
#define WLC_E_PSM_WATCHDOG	41	/* PSM microcode watchdog fired */
#define WLC_E_PROBREQ_MSG       44      /* probe request received */
#define WLC_E_SCAN_CONFIRM_IND  45
#define WLC_E_PSK_SUP		46	/* WPA Handshake fail */
#define WLC_E_COUNTRY_CODE_CHANGED	47
#define	WLC_E_EXCEEDED_MEDIUM_TIME	48	/* WMMAC excedded medium time */
#define WLC_E_ICV_ERROR		49	/* WEP ICV error occurred */
#define WLC_E_UNICAST_DECODE_ERROR	50	/* Unsupported unicast encrypted frame */
#define WLC_E_MULTICAST_DECODE_ERROR	51	/* Unsupported multicast encrypted frame */
#define WLC_E_TRACE		52
#define WLC_E_IF		54	/* I/F change (for dongle host notification) */
#define WLC_E_P2P_DISC_LISTEN_COMPLETE	55	/* listen state expires */
#define WLC_E_RSSI		56	/* indicate RSSI change based on configured levels */
#define WLC_E_PFN_BEST_BATCHING	57	/* PFN best network batching event */
#define WLC_E_EXTLOG_MSG	58
#define WLC_E_ACTION_FRAME      59	/* Action frame Rx */
#define WLC_E_ACTION_FRAME_COMPLETE	60	/* Action frame Tx complete */
#define WLC_E_PRE_ASSOC_IND	61	/* assoc request received */
#define WLC_E_PRE_REASSOC_IND	62	/* re-assoc request received */
#define WLC_E_CHANNEL_ADOPTED	63
#define WLC_E_AP_STARTED	64	/* AP started */
#define WLC_E_DFS_AP_STOP	65	/* AP stopped due to DFS */
#define WLC_E_DFS_AP_RESUME	66	/* AP resumed due to DFS */
#define WLC_E_WAI_STA_EVENT	67	/* WAI stations event */
#define WLC_E_WAI_MSG 		68	/* event encapsulating an WAI message */
#define WLC_E_ESCAN_RESULT 	69	/* escan result event */
#define WLC_E_ACTION_FRAME_OFF_CHAN_COMPLETE 	70	/* action frame off channel complete */
#define WLC_E_PROBRESP_MSG	71	/* probe response received */
#define WLC_E_P2P_PROBREQ_MSG	72	/* P2P Probe request received */
#define WLC_E_DCS_REQUEST	73
#define WLC_E_FIFO_CREDIT_MAP	74	/* credits for D11 FIFOs. [AC0,AC1,AC2,AC3,BC_MC,ATIM] */
#define WLC_E_ACTION_FRAME_RX	75	/* Received action frame event WITH
					 * wl_event_rx_frame_data_t header
					 */
#define WLC_E_WAKE_EVENT	76	/* Wake Event timer fired, used for wake WLAN test mode */
#define WLC_E_RM_COMPLETE	77	/* Radio measurement complete */
#define WLC_E_HTSFSYNC		78	/* Synchronize TSF with the host */
#define WLC_E_OVERLAY_REQ	79	/* request an overlay IOCTL/iovar from the host */
#define WLC_E_CSA_COMPLETE_IND		80	/* 802.11 CHANNEL SWITCH ACTION completed */
#define WLC_E_EXCESS_PM_WAKE_EVENT	81	/* excess PM Wake Event to inform host  */
#define WLC_E_PFN_SCAN_NONE		82	/* no PFN networks around */
/* PFN BSSID network found event, conflict/share with  WLC_E_PFN_SCAN_NONE */
#define WLC_E_PFN_BSSID_NET_FOUND	82
#define WLC_E_PFN_SCAN_ALLGONE		83	/* last found PFN network gets lost */
/* PFN BSSID network lost event, conflict/share with WLC_E_PFN_SCAN_ALLGONE */
#define WLC_E_PFN_BSSID_NET_LOST	83
#define WLC_E_GTK_PLUMBED		84
#define WLC_E_ASSOC_IND_NDIS		85	/* 802.11 ASSOC indication for NDIS only */
#define WLC_E_REASSOC_IND_NDIS		86	/* 802.11 REASSOC indication for NDIS only */
#define WLC_E_ASSOC_REQ_IE		87
#define WLC_E_ASSOC_RESP_IE		88
#define WLC_E_ASSOC_RECREATED		89	/* association recreated on resume */
#define WLC_E_ACTION_FRAME_RX_NDIS	90	/* rx action frame event for NDIS only */
#define WLC_E_AUTH_REQ			91	/* authentication request received */
#define WLC_E_TDLS_PEER_EVENT		92	/* discovered peer, connected/disconnected peer */
#define WLC_E_SPEEDY_RECREATE_FAIL	93	/* fast assoc recreation failed */
#define WLC_E_NATIVE			94	/* port-specific event and payload (e.g. NDIS) */
#define WLC_E_PKTDELAY_IND		95	/* event for tx pkt delay suddently jump */
#define WLC_E_PSTA_PRIMARY_INTF_IND	99	/* psta primary interface indication */
#define WLC_E_NAN			100     /* NAN event */
#define WLC_E_BEACON_FRAME_RX		101
#define WLC_E_SERVICE_FOUND		102	/* desired service found */
#define WLC_E_GAS_FRAGMENT_RX		103	/* GAS fragment received */
#define WLC_E_GAS_COMPLETE		104	/* GAS sessions all complete */
#define WLC_E_P2PO_ADD_DEVICE		105	/* New device found by p2p offload */
#define WLC_E_P2PO_DEL_DEVICE		106	/* device has been removed by p2p offload */
#define WLC_E_WNM_STA_SLEEP		107	/* WNM event to notify STA enter sleep mode */
#define WLC_E_TXFAIL_THRESH		108	/* Indication of MAC tx failures (exhaustion of
						 * 802.11 retries) exceeding threshold(s)
						 */
#define WLC_E_PROXD			109	/* Proximity Detection event */
#define WLC_E_IBSS_COALESCE		110	/* IBSS Coalescing */
#define WLC_E_AIBSS_TXFAIL		110	/* TXFAIL event for AIBSS, re using event 110 */
#define WLC_E_BSS_LOAD			114	/* Inform host of beacon bss load */
#define WLC_E_MIMO_PWR_SAVE		115	/* Inform host MIMO PWR SAVE learning events */
#define WLC_E_LEAKY_AP_STATS	116 /* Inform host leaky Ap stats events */
#define WLC_E_ALLOW_CREDIT_BORROW 117	/* Allow or disallow wlfc credit borrowing in DHD */
#define WLC_E_MSCH			120	/* Multiple channel scheduler event */
#define WLC_E_CSA_START_IND		121
#define WLC_E_CSA_DONE_IND		122
#define WLC_E_CSA_FAILURE_IND		123
#define WLC_E_CCA_CHAN_QUAL		124	/* CCA based channel quality report */
#define WLC_E_BSSID		125	/* to report change in BSSID while roaming */
#define WLC_E_TX_STAT_ERROR		126	/* tx error indication */
#define WLC_E_BCMC_CREDIT_SUPPORT	127	/* credit check for BCMC supported */
#define WLC_E_PEER_TIMEOUT	128 /* silently drop a STA because of inactivity */
#define WLC_E_BT_WIFI_HANDOVER_REQ	130	/* Handover Request Initiated */
#define WLC_E_SPW_TXINHIBIT		131     /* Southpaw TxInhibit notification */
#define WLC_E_FBT_AUTH_REQ_IND		132	/* FBT Authentication Request Indication */
#define WLC_E_RSSI_LQM			133	/* Enhancement addition for WLC_E_RSSI */
#define WLC_E_PFN_GSCAN_FULL_RESULT		134 /* Full probe/beacon (IEs etc) results */
#define WLC_E_PFN_SWC		135 /* Significant change in rssi of bssids being tracked */
#define WLC_E_AUTHORIZED	136	/* a STA been authroized for traffic */
#define WLC_E_PROBREQ_MSG_RX	137 /* probe req with wl_event_rx_frame_data_t header */
#define WLC_E_PFN_SCAN_COMPLETE	138	/* PFN completed scan of network list */
#define WLC_E_RMC_EVENT		139	/* RMC Event */
#define WLC_E_DPSTA_INTF_IND	140	/* DPSTA interface indication */
#define WLC_E_RRM		141	/* RRM Event */
#define WLC_E_PFN_SSID_EXT	142	/* SSID EXT event */
#define WLC_E_ROAM_EXP_EVENT	143	/* Expanded roam event */
#define WLC_E_ULP			146	/* ULP entered indication */
#define WLC_E_MACDBG			147	/* Ucode debugging event */
#define WLC_E_RESERVED			148	/* reserved */
#define WLC_E_PRE_ASSOC_RSEP_IND	149	/* assoc resp received */
#define WLC_E_ID_AUTH			150	/* ID AUTH WPA2-PSK 4 WAY Handshake failure */
#define WLC_E_TKO			151     /* TCP keepalive offload */
#define WLC_E_SDB_TRANSITION            152     /* SDB mode-switch event */
#define WLC_E_NATOE_NFCT		153     /* natoe event */
#define WLC_E_TEMP_THROTTLE		154	/* Temperature throttling control event */
#define WLC_E_LINK_QUALITY		155     /* Link quality measurement complete */
#define WLC_E_BSSTRANS_RESP		156 /* BSS Transition Response received */
#define WLC_E_HE_TWT_SETUP		157	/* HE TWT Setup Complete event */
#define WLC_E_NAN_DATA_IND		158	/* NAN 2.0 data indication */
#define WLC_E_NAN_DATA_CONF		159	/* NAN 2.0 data confirmation */
#define WLC_E_RADAR_DETECTED		160	/* Radar Detected event */
#define WLC_E_RANGING_EVENT		161	/* Ranging event */
#define WLC_E_LAST			162	/* highest val + 1 for range checking */
#if (WLC_E_LAST > 162)
#error "WLC_E_LAST: Invalid value for last event; must be <= 162."
#endif /* WLC_E_LAST */

/* define an API for getting the string name of an event */
extern const char *bcmevent_get_name(uint event_type);
extern void wl_event_to_host_order(wl_event_msg_t * evt);
extern void wl_event_to_network_order(wl_event_msg_t * evt);

/* validate if the event is proper and if valid copy event header to event */
extern int is_wlc_event_frame(void *pktdata, wl_event_msg_t *event,
	uint pktlen);

/* conversion between host and network order for events */
void wl_event_to_host_order(wl_event_msg_t * evt);
void wl_event_to_network_order(wl_event_msg_t * evt);


/* Event status codes */
#define WLC_E_STATUS_SUCCESS		0	/* operation was successful */
#define WLC_E_STATUS_FAIL		1	/* operation failed */
#define WLC_E_STATUS_TIMEOUT		2	/* operation timed out */
#define WLC_E_STATUS_NO_NETWORKS	3	/* failed due to no matching network found */
#define WLC_E_STATUS_ABORT		4	/* operation was aborted */
#define WLC_E_STATUS_NO_ACK		5	/* protocol failure: packet not ack'd */
#define WLC_E_STATUS_UNSOLICITED	6	/* AUTH or ASSOC packet was unsolicited */
#define WLC_E_STATUS_ATTEMPT		7	/* attempt to assoc to an auto auth configuration */
#define WLC_E_STATUS_PARTIAL		8	/* scan results are incomplete */
#define WLC_E_STATUS_NEWSCAN		9	/* scan aborted by another scan */
#define WLC_E_STATUS_NEWASSOC		10	/* scan aborted due to assoc in progress */
#define WLC_E_STATUS_11HQUIET		11	/* 802.11h quiet period started */
#define WLC_E_STATUS_SUPPRESS		12	/* user disabled scanning (WLC_SET_SCANSUPPRESS) */
#define WLC_E_STATUS_NOCHANS		13	/* no allowable channels to scan */
#define WLC_E_STATUS_CS_ABORT		15	/* abort channel select */
#define WLC_E_STATUS_ERROR		16	/* request failed due to error */
#define WLC_E_STATUS_INVALID 0xff  /* Invalid status code to init variables. */

/* SDB transition status code */
#define WLC_E_STATUS_SDB_START          1
#define WLC_E_STATUS_SDB_COMPLETE       2

/* SDB transition reason code */
#define WLC_E_REASON_HOST_DIRECT	0
#define WLC_E_REASON_INFRA_ASSOC	1
#define WLC_E_REASON_INFRA_ROAM		2
#define WLC_E_REASON_INFRA_DISASSOC	3
#define WLC_E_REASON_NO_MODE_CHANGE_NEEDED	4

/* WLC_E_SDB_TRANSITION event data */
#define WL_MAX_BSSCFG     4
#define WL_EVENT_SDB_TRANSITION_VER     1
typedef struct wl_event_sdb_data {
	uint8 wlunit;           /* Core index */
	uint8 is_iftype;        /* Interface Type(Station, SoftAP, P2P_GO, P2P_GC */
	uint16 chanspec;        /* Interface Channel/Chanspec */
	char ssidbuf[(4 * 32) + 1];	/* SSID_FMT_BUF_LEN: ((4 * DOT11_MAX_SSID_LEN) + 1) */
} wl_event_sdb_data_t;

typedef struct wl_event_sdb_trans {
	uint8 version;          /* Event Data Version */
	uint8 rsdb_mode;
	uint8 enable_bsscfg;
	uint8 reserved;
	struct wl_event_sdb_data values[WL_MAX_BSSCFG];
} wl_event_sdb_trans_t;

/* roam reason codes */
#define WLC_E_REASON_INITIAL_ASSOC	0	/* initial assoc */
#define WLC_E_REASON_LOW_RSSI		1	/* roamed due to low RSSI */
#define WLC_E_REASON_DEAUTH		2	/* roamed due to DEAUTH indication */
#define WLC_E_REASON_DISASSOC		3	/* roamed due to DISASSOC indication */
#define WLC_E_REASON_BCNS_LOST		4	/* roamed due to lost beacons */

#define WLC_E_REASON_FAST_ROAM_FAILED	5	/* roamed due to fast roam failure */
#define WLC_E_REASON_DIRECTED_ROAM	6	/* roamed due to request by AP */
#define WLC_E_REASON_TSPEC_REJECTED	7	/* roamed due to TSPEC rejection */
#define WLC_E_REASON_BETTER_AP		8	/* roamed due to finding better AP */
#define WLC_E_REASON_MINTXRATE		9	/* roamed because at mintxrate for too long */
#define WLC_E_REASON_TXFAIL		10	/* We can hear AP, but AP can't hear us */
/* retained for precommit auto-merging errors; remove once all branches are synced */
#define WLC_E_REASON_REQUESTED_ROAM	11
#define WLC_E_REASON_BSSTRANS_REQ	11	/* roamed due to BSS Transition request by AP */
#define WLC_E_REASON_LOW_RSSI_CU		12 /* roamed due to low RSSI and Channel Usage */
#define WLC_E_REASON_RADAR_DETECTED	13	/* roamed due to radar detection by STA */

/* prune reason codes */
#define WLC_E_PRUNE_ENCR_MISMATCH	1	/* encryption mismatch */
#define WLC_E_PRUNE_BCAST_BSSID		2	/* AP uses a broadcast BSSID */
#define WLC_E_PRUNE_MAC_DENY		3	/* STA's MAC addr is in AP's MAC deny list */
#define WLC_E_PRUNE_MAC_NA		4	/* STA's MAC addr is not in AP's MAC allow list */
#define WLC_E_PRUNE_REG_PASSV		5	/* AP not allowed due to regulatory restriction */
#define WLC_E_PRUNE_SPCT_MGMT		6	/* AP does not support STA locale spectrum mgmt */
#define WLC_E_PRUNE_RADAR		7	/* AP is on a radar channel of STA locale */
#define WLC_E_RSN_MISMATCH		8	/* STA does not support AP's RSN */
#define WLC_E_PRUNE_NO_COMMON_RATES	9	/* No rates in common with AP */
#define WLC_E_PRUNE_BASIC_RATES		10	/* STA does not support all basic rates of BSS */
#define WLC_E_PRUNE_CIPHER_NA		12	/* BSS's cipher not supported */
#define WLC_E_PRUNE_KNOWN_STA		13	/* AP is already known to us as a STA */
#define WLC_E_PRUNE_WDS_PEER		15	/* AP is already known to us as a WDS peer */
#define WLC_E_PRUNE_QBSS_LOAD		16	/* QBSS LOAD - AAC is too low */
#define WLC_E_PRUNE_HOME_AP		17	/* prune home AP */
#define WLC_E_PRUNE_AUTH_RESP_MAC	20	/* suppress auth resp by MAC filter */

/* WPA failure reason codes carried in the WLC_E_PSK_SUP event */
#define WLC_E_SUP_OTHER			0	/* Other reason */
#define WLC_E_SUP_DECRYPT_KEY_DATA	1	/* Decryption of key data failed */
#define WLC_E_SUP_BAD_UCAST_WEP128	2	/* Illegal use of ucast WEP128 */
#define WLC_E_SUP_BAD_UCAST_WEP40	3	/* Illegal use of ucast WEP40 */
#define WLC_E_SUP_UNSUP_KEY_LEN		4	/* Unsupported key length */
#define WLC_E_SUP_PW_KEY_CIPHER		5	/* Unicast cipher mismatch in pairwise key */
#define WLC_E_SUP_MSG3_TOO_MANY_IE	6	/* WPA IE contains > 1 RSN IE in key msg 3 */
#define WLC_E_SUP_MSG3_IE_MISMATCH	7	/* WPA IE mismatch in key message 3 */
#define WLC_E_SUP_NO_INSTALL_FLAG	8	/* INSTALL flag unset in 4-way msg */
#define WLC_E_SUP_MSG3_NO_GTK		9	/* encapsulated GTK missing from msg 3 */
#define WLC_E_SUP_GRP_KEY_CIPHER	10	/* Multicast cipher mismatch in group key */
#define WLC_E_SUP_GRP_MSG1_NO_GTK	11	/* encapsulated GTK missing from group msg 1 */
#define WLC_E_SUP_GTK_DECRYPT_FAIL	12	/* GTK decrypt failure */
#define WLC_E_SUP_SEND_FAIL		13	/* message send failure */
#define WLC_E_SUP_DEAUTH		14	/* received FC_DEAUTH */
#define WLC_E_SUP_WPA_PSK_TMO		15	/* WPA PSK 4-way handshake timeout */
#define WLC_E_SUP_WPA_PSK_M1_TMO	16	/* WPA PSK 4-way handshake M1 timeout */
#define WLC_E_SUP_WPA_PSK_M3_TMO	17	/* WPA PSK 4-way handshake M3 timeout */


/* Ucode reason codes carried in the WLC_E_MACDBG event */
#define WLC_E_MACDBG_LIST_PSM		0	/* Dump list update for PSM registers */
#define WLC_E_MACDBG_LIST_PSMX		1	/* Dump list update for PSMx registers */
#define WLC_E_MACDBG_REGALL		2	/* Dump all registers */

/* Event data for events that include frames received over the air */
/* WLC_E_PROBRESP_MSG
 * WLC_E_P2P_PROBREQ_MSG
 * WLC_E_ACTION_FRAME_RX
 */
typedef BWL_PRE_PACKED_STRUCT struct wl_event_rx_frame_data {
	uint16	version;
	uint16	channel;	/* Matches chanspec_t format from bcmwifi_channels.h */
	int32	rssi;
	uint32	mactime;
	uint32	rate;
} BWL_POST_PACKED_STRUCT wl_event_rx_frame_data_t;

#define BCM_RX_FRAME_DATA_VERSION 1

/* WLC_E_IF event data */
typedef struct wl_event_data_if {
	uint8 ifidx;		/* RTE virtual device index (for dongle) */
	uint8 opcode;		/* see I/F opcode */
	uint8 reserved;		/* bit mask (WLC_E_IF_FLAGS_XXX ) */
	uint8 bssidx;		/* bsscfg index */
	uint8 role;		/* see I/F role */
} wl_event_data_if_t;

/* WLC_E_NATOE event data */
typedef struct wl_event_data_natoe {
	uint32 natoe_active;
	uint32 sta_ip;
	uint16 start_port;
	uint16 end_port;
} wl_event_data_natoe_t;

/* opcode in WLC_E_IF event */
#define WLC_E_IF_ADD		1	/* bsscfg add */
#define WLC_E_IF_DEL		2	/* bsscfg delete */
#define WLC_E_IF_CHANGE		3	/* bsscfg role change */

/* I/F role code in WLC_E_IF event */
#define WLC_E_IF_ROLE_STA		0	/* Infra STA */
#define WLC_E_IF_ROLE_AP		1	/* Access Point */
#define WLC_E_IF_ROLE_WDS		2	/* WDS link */
#define WLC_E_IF_ROLE_P2P_GO		3	/* P2P Group Owner */
#define WLC_E_IF_ROLE_P2P_CLIENT	4	/* P2P Client */
#define WLC_E_IF_ROLE_IBSS              8       /* IBSS */
#define WLC_E_IF_ROLE_NAN              9       /* NAN */

/* WLC_E_RSSI event data */
typedef struct wl_event_data_rssi {
	int32 rssi;
	int32 snr;
	int32 noise;
} wl_event_data_rssi_t;

/* WLC_E_IF flag */
#define WLC_E_IF_FLAGS_BSSCFG_NOIF	0x1	/* no host I/F creation needed */

/* Reason codes for LINK */
#define WLC_E_LINK_BCN_LOSS     1   /* Link down because of beacon loss */
#define WLC_E_LINK_DISASSOC     2   /* Link down because of disassoc */
#define WLC_E_LINK_ASSOC_REC    3   /* Link down because assoc recreate failed */
#define WLC_E_LINK_BSSCFG_DIS   4   /* Link down due to bsscfg down */


/* WLC_E_NDIS_LINK event data */
typedef BWL_PRE_PACKED_STRUCT struct ndis_link_parms {
	struct ether_addr peer_mac; /* 6 bytes */
	uint16 chanspec;            /* 2 bytes */
	uint32 link_speed;          /* current datarate in units of 500 Kbit/s */
	uint32 max_link_speed;      /* max possible datarate for link in units of 500 Kbit/s  */
	int32  rssi;                /* average rssi */
} BWL_POST_PACKED_STRUCT ndis_link_parms_t;

/* reason codes for WLC_E_OVERLAY_REQ event */
#define WLC_E_OVL_DOWNLOAD		0	/* overlay download request */
#define WLC_E_OVL_UPDATE_IND	1	/* device indication of host overlay update */

/* reason codes for WLC_E_TDLS_PEER_EVENT event */
#define WLC_E_TDLS_PEER_DISCOVERED		0	/* peer is ready to establish TDLS */
#define WLC_E_TDLS_PEER_CONNECTED		1
#define WLC_E_TDLS_PEER_DISCONNECTED	2

/* reason codes for WLC_E_RMC_EVENT event */
#define WLC_E_REASON_RMC_NONE		0
#define WLC_E_REASON_RMC_AR_LOST		1
#define WLC_E_REASON_RMC_AR_NO_ACK		2

#ifdef WLTDLS
/* TDLS Action Category code */
#define TDLS_AF_CATEGORY		12
/* Wi-Fi Display (WFD) Vendor Specific Category */
/* used for WFD Tunneled Probe Request and Response */
#define TDLS_VENDOR_SPECIFIC		127
/* TDLS Action Field Values */
#define TDLS_ACTION_SETUP_REQ		0
#define TDLS_ACTION_SETUP_RESP		1
#define TDLS_ACTION_SETUP_CONFIRM	2
#define TDLS_ACTION_TEARDOWN		3
#define WLAN_TDLS_SET_PROBE_WFD_IE	11
#define WLAN_TDLS_SET_SETUP_WFD_IE	12
#define WLAN_TDLS_SET_WFD_ENABLED	13
#define WLAN_TDLS_SET_WFD_DISABLED	14
#endif

/* WLC_E_RANGING_EVENT subtypes */
#define WLC_E_RANGING_RESULTS	0


/* GAS event data */
typedef BWL_PRE_PACKED_STRUCT struct wl_event_gas {
	uint16	channel;		/* channel of GAS protocol */
	uint8	dialog_token;	/* GAS dialog token */
	uint8	fragment_id;	/* fragment id */
	uint16	status_code;	/* status code on GAS completion */
	uint16 	data_len;		/* length of data to follow */
	uint8	data[1];		/* variable length specified by data_len */
} BWL_POST_PACKED_STRUCT wl_event_gas_t;

/* service discovery TLV */
typedef BWL_PRE_PACKED_STRUCT struct wl_sd_tlv {
	uint16	length;			/* length of response_data */
	uint8	protocol;		/* service protocol type */
	uint8	transaction_id;		/* service transaction id */
	uint8	status_code;		/* status code */
	uint8	data[1];		/* response data */
} BWL_POST_PACKED_STRUCT wl_sd_tlv_t;

/* service discovery event data */
typedef BWL_PRE_PACKED_STRUCT struct wl_event_sd {
	uint16	channel;		/* channel */
	uint8	count;			/* number of tlvs */
	wl_sd_tlv_t	tlv[1];		/* service discovery TLV */
} BWL_POST_PACKED_STRUCT wl_event_sd_t;

/* Note: proxd has a new API (ver 3.0) deprecates the following */

/* Reason codes for WLC_E_PROXD */
#define WLC_E_PROXD_FOUND		1	/* Found a proximity device */
#define WLC_E_PROXD_GONE		2	/* Lost a proximity device */
#define WLC_E_PROXD_START		3	/* used by: target  */
#define WLC_E_PROXD_STOP		4	/* used by: target   */
#define WLC_E_PROXD_COMPLETED		5	/* used by: initiator completed */
#define WLC_E_PROXD_ERROR		6	/* used by both initiator and target */
#define WLC_E_PROXD_COLLECT_START	7	/* used by: target & initiator */
#define WLC_E_PROXD_COLLECT_STOP	8	/* used by: target */
#define WLC_E_PROXD_COLLECT_COMPLETED	9	/* used by: initiator completed */
#define WLC_E_PROXD_COLLECT_ERROR	10	/* used by both initiator and target */
#define WLC_E_PROXD_NAN_EVENT		11	/* used by both initiator and target */
#define WLC_E_PROXD_TS_RESULTS          12      /* used by: initiator completed */

/*  proxd_event data */
typedef struct ftm_sample {
	uint32 value;	/* RTT in ns */
	int8 rssi;	/* RSSI */
} ftm_sample_t;

typedef struct ts_sample {
	uint32 t1;
	uint32 t2;
	uint32 t3;
	uint32 t4;
} ts_sample_t;

typedef BWL_PRE_PACKED_STRUCT struct proxd_event_data {
	uint16 ver;			/* version */
	uint16 mode;			/* mode: target/initiator */
	uint16 method;			/* method: rssi/TOF/AOA */
	uint8  err_code;		/* error classification */
	uint8  TOF_type;		/* one way or two way TOF */
	uint8  OFDM_frame_type;		/* legacy or VHT */
	uint8  bandwidth;		/* Bandwidth is 20, 40,80, MHZ */
	struct ether_addr peer_mac;	/* (e.g for tgt:initiator's */
	uint32 distance;		/* dst to tgt, units meter */
	uint32 meanrtt;			/* mean delta */
	uint32 modertt;			/* Mode delta */
	uint32 medianrtt;		/* median RTT */
	uint32 sdrtt;			/* Standard deviation of RTT */
	int32  gdcalcresult;		/* Software or Hardware Kind of redundant, but if */
					/* frame type is VHT, then we should do it by hardware */
	int16  avg_rssi;		/* avg rssi accroos the ftm frames */
	int16  validfrmcnt;		/* Firmware's valid frame counts */
	int32  peer_router_info;	/* Peer router information if available in TLV, */
					/* We will add this field later  */
	int32 var1;			/* average of group delay */
	int32 var2;			/* average of threshold crossing */
	int32 var3;			/* difference between group delay and threshold crossing */
					/* raw Fine Time Measurements (ftm) data */
	uint16 ftm_unit;		/* ftm cnt resolution in picoseconds , 6250ps - default */
	uint16 ftm_cnt;			/*  num of rtd measurments/length in the ftm buffer  */
	ftm_sample_t ftm_buff[1];	/* 1 ... ftm_cnt  */
} BWL_POST_PACKED_STRUCT wl_proxd_event_data_t;

typedef BWL_PRE_PACKED_STRUCT struct proxd_event_ts_results {
	uint16 ver;                     /* version */
	uint16 mode;                    /* mode: target/initiator */
	uint16 method;                  /* method: rssi/TOF/AOA */
	uint8  err_code;                /* error classification */
	uint8  TOF_type;                /* one way or two way TOF */
	uint16  ts_cnt;                 /* number of timestamp measurements */
	ts_sample_t ts_buff[1];         /* Timestamps */
} BWL_POST_PACKED_STRUCT wl_proxd_event_ts_results_t;


/* Video Traffic Interference Monitor Event */
#define INTFER_EVENT_VERSION		1
#define INTFER_STREAM_TYPE_NONTCP	1
#define INTFER_STREAM_TYPE_TCP		2
#define WLINTFER_STATS_NSMPLS		4
typedef struct wl_intfer_event {
	uint16 version;			/* version */
	uint16 status;			/* status */
	uint8 txfail_histo[WLINTFER_STATS_NSMPLS]; /* txfail histo */
} wl_intfer_event_t;

#define RRM_EVENT_VERSION		0
typedef struct wl_rrm_event {
	int16 version;
	int16 len;
	int16 cat;		/* Category */
	int16 subevent;
	char payload[1]; /* Measurement payload */
} wl_rrm_event_t;


/* WLC_E_PSTA_PRIMARY_INTF_IND event data */
typedef struct wl_psta_primary_intf_event {
	struct ether_addr prim_ea;	/* primary intf ether addr */
} wl_psta_primary_intf_event_t;

/* WLC_E_DPSTA_INTF_IND event data */
typedef enum {
	WL_INTF_PSTA = 1,
	WL_INTF_DWDS = 2
} wl_dpsta_intf_type;

typedef struct wl_dpsta_intf_event {
	wl_dpsta_intf_type intf_type;    /* dwds/psta intf register */
} wl_dpsta_intf_event_t;

/*  **********  NAN protocol events/subevents  ********** */
#define NAN_EVENT_BUFFER_SIZE 512 /* max size */
/* nan application events to the host driver */
typedef enum nan_app_events {
	WL_NAN_EVENT_START = 1,     /* NAN cluster started */
	WL_NAN_EVENT_JOIN = 2,      /* Joined to a NAN cluster */
	WL_NAN_EVENT_ROLE = 3,      /* Role or State changed */
	WL_NAN_EVENT_SCAN_COMPLETE = 4,
	WL_NAN_EVENT_DISCOVERY_RESULT = 5,
	WL_NAN_EVENT_REPLIED = 6,
	WL_NAN_EVENT_TERMINATED = 7,	/* the instance ID will be present in the ev data */
	WL_NAN_EVENT_RECEIVE = 8,
	WL_NAN_EVENT_STATUS_CHG = 9,  /* generated on any change in nan_mac status */
	WL_NAN_EVENT_MERGE = 10,      /* Merged to a NAN cluster */
	WL_NAN_EVENT_STOP = 11,       /* NAN stopped */
	WL_NAN_EVENT_P2P = 12,       /* NAN P2P EVENT */
	WL_NAN_EVENT_WINDOW_BEGIN_P2P = 13, /* Event for begin of P2P further availability window */
	WL_NAN_EVENT_WINDOW_BEGIN_MESH = 14,
	WL_NAN_EVENT_WINDOW_BEGIN_IBSS = 15,
	WL_NAN_EVENT_WINDOW_BEGIN_RANGING = 16,
	WL_NAN_EVENT_POST_DISC = 17, /* Event for post discovery data */
	WL_NAN_EVENT_DATA_IF_ADD = 18, /* Event for Data IF add */
	WL_NAN_EVENT_DATA_PEER_ADD = 19, /* Event for peer add */
	/* nan 2.0 */
	WL_NAN_EVENT_DATA_IND = 20, /* Data Indication to Host */
	WL_NAN_EVENT_DATA_CONF = 21, /* Data Response to Host */
	WL_NAN_EVENT_SDF_RX = 22,	/* entire service discovery frame */
	WL_NAN_EVENT_INVALID	/* delimiter for max value */
} nan_app_events_e;

#define IS_NAN_EVT_ON(var, evt) ((var & (1 << (evt-1))) != 0)
/*  ******************* end of NAN section *************** */

/* WLC_E_ULP event data */
#define WL_ULP_EVENT_VERSION		1
#define WL_ULP_DISABLE_CONSOLE		1	/* Disable console message on ULP entry */
#define WL_ULP_UCODE_DOWNLOAD		2       /* Download ULP ucode file */

typedef struct wl_ulp_event {
	uint16 version;
	uint16 ulp_dongle_action;
} wl_ulp_event_t;

/* TCP keepalive event data */
typedef BWL_PRE_PACKED_STRUCT struct wl_event_tko {
	uint8 index;		/* TCP connection index, 0 to max-1 */
	uint8 pad[3];		/* 4-byte struct alignment */
} BWL_POST_PACKED_STRUCT wl_event_tko_t;

typedef struct {
	uint8 radar_type;       /* one of RADAR_TYPE_XXX */
	uint16 min_pw;          /* minimum pulse-width (usec * 20) */
	uint16 max_pw;          /* maximum pulse-width (usec * 20) */
	uint16 min_pri;         /* minimum pulse repetition interval (usec) */
	uint16 max_pri;         /* maximum pulse repetition interval (usec) */
	uint16 subband;         /* subband/frequency */
} radar_detected_event_info_t;
typedef struct wl_event_radar_detect_data {

	uint32 version;
	uint16 current_chanspec; /* chanspec on which the radar is recieved */
	uint16 target_chanspec; /*  Target chanspec after detection of radar on current_chanspec */
	radar_detected_event_info_t radar_info[2];
} wl_event_radar_detect_data_t;

/* TWT Setup Completion is designed to notify the user of TWT Setup process
 * status. When 'status' field is value of BCME_OK, the user must check the
 * 'setup_cmd' field value in 'wl_twt_sdesc_t' structure that at the end of
 * the event data to see the response from the TWT Responding STA; when
 * 'status' field is value of BCME_ERROR or non BCME_OK, user must not use
 * anything from 'wl_twt_sdesc_t' structure as it is the TWT Requesting STA's
 * own TWT parameter.
 */

#define WL_TWT_SETUP_CPLT_VER	0

/* TWT Setup Completion event data */
typedef struct wl_twt_setup_cplt {
	uint16 version;
	uint16 length;	/* the byte count of fields from 'dialog' onwards */
	uint8 dialog;	/* the dialog token user supplied to the TWT setup API */
	uint8 pad[3];
	int32 status;
	/* wl_twt_sdesc_t desc; - defined in wlioctl.h */
} wl_twt_setup_cplt_t;

/* This marks the end of a packed structure section. */
#include <packed_section_end.h>

#endif /* _BCMEVENT_H_ */
