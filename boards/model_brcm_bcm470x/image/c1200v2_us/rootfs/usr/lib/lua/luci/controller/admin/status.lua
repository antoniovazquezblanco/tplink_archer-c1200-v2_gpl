LuaQ               �      H@  ��  ��@"@�  H@ "� A  �� b� �  �� �� �   �  HA "� @�Bb�� � ��  E�  ��Ȃ ��D���Dć�� Ȃ �B� D���B�E�  ��� ��D���DBŇ��Ȃ � H �C ȃ �B�D���B��E�  ��� ��D���DBǇ� Ȃ � �B D���B��E�  ���B ��D���Dć� Ȃ � H	 �C	 �B D���B�a       B�	 aB  ��  ��   �  ��	 �    � �
 �B    �B
 �    � 
 ��  �   � ��
 � � �B  ��B �� C  EC  ��	 D��C����C  EC  �
 D��C����C  E�  �C
 D��D�̘C�����C  E�  �C
 D��D�̘C����C  E�  �C
 D��D�ƘC�����C  EC  ��
 D��C�����  EC  �C D��C�EC  � D��C�����!�    � !�    ! C # � :      module    luci.controller.admin.status    package    seeall    require 
   luci.util    ubus    luci.model.controller    luci.tools.debug    luci.model.uci    cursor    luci.controller.admin    network    controller 	   .network    target 	   dispatch    forms    status_all 	   wireless 
   .wireless    wireless_dispatch    wireless_2g    wireless_5g 	   guest_2g 	   guest_5g    guest    usb 
   .usbshare    usbshare_dispatch    disk_status    printer_status    status    .status    perf    access_devices_wired    access_devices_wireless_host    access_devices_wireless_guest    get_all    get_perf_fallback 	   get_perf    get_access_devices    get_internet_status    tmp_get_internet_status    get_tmp_conn_status    get_tmp_status    all    .super    cb    args    wired    host 	   internet    tmp_status    read    conn_status    _index    index        /   @    /   E   � � �@  �@@� ���  
  � �� ��   � @��"� @B� B@��@�[ �  b� ���  @��B �����M��  ��B  �� �B �� �C��  ���B�  ��   ހ  ���    �� � �  # �    
   operation    read    pairs    controller    require    target    form    forms    success    assert    data 	       update                     B   Q      <      A   @@� ��  b� ���  ����@� �@ �� B�A "��  � ��� B�� "��  � ��� B�A "��  � ��� B�� "��  � ��� B�A "��  � ���A  �B � � C � � �C � � D � �� ���D ���� ���D �@    ��� � �#  # �       io    open    /proc/meminfo    read    *a    close    total 	   tonumber    match    MemTotal:%s*(%d+)    free    MemFree:%s*(%d+)    buffers    Buffers:%s*(%d+)    cached    
Cached:%s*(%d+)    swapcached    SwapCached:%s*(%d+)    used 	                        S   e      
:      A   @@� ��  b� ���  ����@� �@ ƀAH� � �@��  ��B [ "�  ��@  ���B��    � � � �B � �ހ  ����C �@    ��� ���� D �@    ��� �����B  AC � � �C � �����@D ���� ��@D �@    ��� ���#  # �       io    open    /proc/stat    read    *l    close    gmatch    %d+ 	   	   tonumber    total 	       ipairs    idle 	      iowait 	      busy                     g   �    
0   J   b�� �   �@@��� ���� � � ��� ��@�@ � � 
� "�� @��� �A bA�J� b�� ���A����@ ��A    ��� ��� �B����@ ��A    ��    B@O�N��"� �@E�  D�D���c # �       math    floor    used 	d      total    require    nixio 
   nanosleep 	    	 ��	      busy 
   cpu_usage 
   mem_usage                     �   �    .   J   Y@  � �J � @ � b�� C   J   Y   ��J   F@� Ȁ  �  E  b��Y   ����  � � �@��� ���� �@��� ��  A� �  b� �@� Ȁ � ����   @��� �  �� �@C� �@ �� �   �  �   # �       connect    call    system_perf    status 
   cpu_usage 	d   
   mem_usage    require 	   nixio.fs    access    /etc/init.d/system-monitor    x 	   luci.sys 
   fork_exec #   /etc/init.d/system-monitor restart    get_perf_fallback                     �   �    8   �   �   A  � ���  �@    ��   ��  �� H�  A� A  � � H �A A �� � �H� YA    �H �A ���@��  ��� @�B₀�  ����A@���� �� @CCC��@�CC�@CDC�@�BC��� ���  ���  # �       require    luci.model.client_mgmt    get_client_list    wired    2.4G    5G    guest    GUEST 
   NON_GUEST    ipairs 	   contains 
   wire_type 	   	   hostname    ipaddr    ip    macaddr    mac                     �   �     
N      H@  "� A   ��  b� @�� b�� �   �@  � �� � � A��� �   �  �   �   ���   �@�H� �� �   �   �� �J  FA��A � EB  D�b��� ��     �����@  � ��@  �@C��  ��� � �� �� "��M��@ ��C �@AA �� b�  �� �EA  D�C�c ��EA  DAD�c ��M��@ ��D� �EA  D�D�c � �EA  D�D�c # �       require 	   luci.sys    luci.model.internet 	   Internet    connect    call    network.interface.wan    status    device    network.device    name    link    internet_status 
   unplugged 
   connected    online-test 	       poor_connected    connecting    disconnected                     �       �      H@  "� A   ��  b� @�� b�� �   � AA H� �� ����@    ��  � � �@  � ��  �@�  � � � �
�   ��
� �B�� �   "��  ��@AC�� ��B� H �B  �B�����     �� D�@  � �A  �Ĉ# � "� F� �� b��M�D@ ��� ���B � �� @E� ��A  ��ň� ���A  ��ň� ��M F@ � ��	��A ��F��  ���@G ��G� ���G  �A �A  �AȈ� ����HH	 ⁀ �AI�A �� Ɓ�H�	 ⁀�  � ��A  �ʈ� � ��A  �Aʈ� �A  �AȈ�  ��A ��F��  ���@G� ��A  āʈ� ����HH	 ⁀ �AI�A �� Ɓ�H�	 ⁀�  � ��A  �ʈ� � ��A  �Aʈ� �A  āʈ� # � +      require 	   luci.sys    luci.model.internet 	   Internet    get    network    wan 	   wan_type        connect    call    network.interface.wan    status    device    network.device    name    link    internet_status 
   unplugged 
   connected    online-test 	       online    poor_connected    connecting    io    open    /tmp/connecterror    r     dhcp 
   fork_call .   sleep 6 && echo 'error' > /tmp/connecterror & 
   detecting    upgrade    read    *a    close    match    [.]*auth_failed[.]* 	   pwderror 	   isperror    offline                            
            A�  b�� @�� @��   #  # �       ret    conn_status    tmp_get_internet_status    internet_status                     !  O    x      H@  "� A   ��  b� �   ��  �� � A   AA"�� E  ��� ��� ��AH ⁀�@ �B�"� Z�@ �F��b� ��B�� ��� �B  @��  �B�H� � � ₀
  CC�� � D "��C    �� D��C�  � D��D��� �E H "� C    �C D� �E H� "� C    �C D� �E HC "� C    �C D�D�G�
  CC�C ȃ � "��C    �� D� �E HC	 "� D� �E H�	 "� D�  @ �DAJ�  �D�J��   @ �D˕  �DA˕  H� "� @�K� b� �  �C �� ��L�� [�DA��c # � 4      require    luci.sys.config    luci.model.nwcache    luci.model.accountmgnt    cloud_account_exist    is_dft_cfg    init    get_network    lan    get_interface    ipaddr    mac    netmask    get    network 
   conn_type    wan 	   wan_type    disconnected    ip_addr    0.0.0.0 	   mac_addr 	   hostname    getsysinfo    product_name        product    device_name    company    FIRM    traffice_supported    off    traffice_enabled    tfstats    switch    enable    hardware_ver    HARDVERSION    software_ver    SOFTVERSION    factory_default    1    0    login_mode    emailandpass 	   password 	   luci.sys    exec    network_get_firm wan 
   luci.util    trim    def_mac                     l  n      J   @ � � � �   d �c   # �    	   dispatch                     p  r       
     @ A@  $  #   # �       _index 	   dispatch                     t  v           E  �@  Ȁ  _@ ��  �  �  "�  ���# �       entry    admin    status    call    _index    leaf                             