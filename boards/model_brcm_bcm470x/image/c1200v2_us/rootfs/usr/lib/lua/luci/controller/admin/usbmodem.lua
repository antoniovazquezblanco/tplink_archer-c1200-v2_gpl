LuaQ               +�     H@  ��  ��@"@�  H@ "� A  �� b� �  �� �� �   �  HA "� A �� b� � �� �� �  �  HB "� A �� b� @��� b� � �B �� � � �  A �� b� @��� b� �� � D H� �� �F ℀  EF"�� a  �E  �  !�  E���  � � H �F ����� �@���� � G��F� �Ɔ���  �FH���H�� E � �	 H	 HH	 _G G� ����  �I��I�E� � ���HH
 ��
 ��
 H��G _G� G��E�  DK�D�H��� �  HH �� Ȉ �G �G� D�����  �� � �G� �����H��� �@��� Ȉ H��G� �Ǉ���   HH �� H ����H�� E����� � _H�H� ����  M��I�E� � ��	�HI
 �I ȉ I��H _H� H��E�  D�M�D�I��� �  	�E	��	 �I � _I��H �H� D�����  ��N���I��� 	�@���� �	 I��H� �Ȉ���  �HO���I�	� E	����ȉ � _I�I� ����  	P��I�E	� �	 �	�
 HJ �� J �I _I� I��E�  D�P�D�I��	� �	��I� D�����  �IQ���H��	�  
��I� �ɉ�_F��� �F  �ң����F  �ң�Ɔ��F  �ң����F  �ң�Ɔ��F  �FΣ����F  Ćӣ�Ɔ��F  �ԣ�Ɔ��F  �ԣ�Ɔ��F  ��ԣ����F  �Fգ����F  ��գ����F  �֣���ņ  �Fʣ��Ȭ���ņ  �Σ��Ȭ�Ɔ�ņ  �Σ��Ȭ���ņ  ��֣��Ȭ���ņ  �ף��Ȭ�Ɔ�ņ  �Fף��Ȭ���ņ  Ćף��Ȭ�Ɔ�ņ  ��ף��Ȭ�Ɔ�ņ  Ć̣��Ȭ���ņ  �Σ��Ȭ�Ɔ��F  �Σ���ņ  �Fʣ��Ȭ���ņ  �Fأ��Ȭ�Ɔ�ņ  Ćأ��Ȭ�Ɔ�ņ  ��֣��Ȭ���ņ  �ף��Ȭ�Ɔ�ņ  �ף��Ȭ�Ɔ��F  �Σ�Ɔ��  HG �� �� �F !    �  aG ��    � � �� ��  �	�G �  �	�� �G  �	  �� ��  �  �   � �	 ���    � �   �   �    � �    � � �	  �G �G  �  �	   � ��� �� � � �G ��  H  EH  �� D��H����H  EH  �H D��H����� EH  �� D��H��E�  � D��DH^�H��EH  �H D��H�E�  � D��D�G�H����!H  �  � !�  � H !� � # �       module    luci.controller.admin.usbmodem    package    seeall    require    luci.model.uci    luci.model.controller    luci.tools.debug    luci.model.network_log 
   luci.json    io    ubus 	   luci.sys    luci.model.internet    luci.model.log    Log 	$     nixio    luci.model.checktypes 	   	   	   	   	      cursor 	   Internet    field 	   locindex 	   ispindex    check    check_range 	    	X     pincode    canbe_empty 	   ^[0-9]*$ 	      setisp  	   check_in    auto    select    manual 	   dial_num    ^[0-9*#]*$ 	?      apn    check_rangelen 	   username 	   password 	v      connectmode    demand 	   manually    authentype    0    1    2    maxidletime 	c      mtu 	@  	�  
   manualdns    on    off    primarydns    check_ipv4 
   seconddns    defaultvid    value    0000    defaultpid 
   targetvid 
   targetpid    modeswitch    proto    dhcp    cport    ttyUSB0    dport    ifname    usb0 	   message1    11111 	   message2    22222    33333 	   key_show    pinlock    false        *99#    yourapn.com    myname    modemstatus    900    1480    connectstatus    disconnected 
   connected    connecting    disconnecting    get_connstatus    check_ableconn    check_ableconn_weak    get_modemcfg    modem_connect    modem_disconnect    prase_signal    get_status_mobile    get_str_split    get_isplist    mobile_inf    read    cb    isplist 	   modemset    connect    args 	      disconnect    write 	   dispatch    _index    index        )   0         ��� A  M�   �	A  	� # ��@�@� A  �   �	A  	� # 	� # # �       0    1                     6   =          [  "� AA  @��� �� b��Y  @�AA  @��� b� @��AA  @��� b� ��@ �I� c I  c # �    	   tostring    string    find    len                     ?   C        @    �   I   �   c �# �       invalid args                     D   M        � @ � � � ���@@ �@� � ����@ ��� � � ���@ ��� M� � �� � �  @ ��   �  # �    	   dial_num    apn 	   username 	   password                     �   �    -   �   �@    � @� H�  ��  � �� � �  [�"� � ހ  ���   A  [� "��J  @@B�Y  @�[���  ��  ��  A�  � b� �@��  ��
� J � ��"A # �           pairs      	   tostring    = 	   key_show                     �          E   �   �   %  �@  � @�� ���� ��� с�D����  ����  � A� � A � ��   # �       ipairs 	    	      table    concat                                $   
     @ "�� @   �J � �  b@ H@  c  H�  ��  � A [ �� �   A M��� �@��M��  � ��A ��b� � �@ �AB@ �^�  @�# # � 
      connect 	       status    network.interface.mobile    call    disconnected     state    ipairs 	                         %       
    @ �@  Ȁ  �  "��J   F � �@   HA b���A @�M�� @ � � @��� ��� ���@ �� � �  �   �  # �       get    modem 
   modemconf    modemstatus 	   modemisp    pinlock    2    0    4 	       get_connstatus                     &  .       
    @ �@  Ȁ  �  "��J   F � �@   HA b���A @�M�� @ � � @ �� � �  �   �  # � 	      get    modem 
   modemconf    modemstatus 	   modemisp    pinlock    2    0    4                     1  U    	+      "�� J   F@� Ȁ  �  H �  b@ E   �   �   �@�H�  �� �    
   
 �  � �@��   �@�H�  �� �A    
   
 �  � �@��  
� � � � �� @B  �D�Bހ  @�c  # �       get_connstatus    set    modem 
   modemconf    connectstatus    foreach    usbmodemisp    usbmodeminfo    pairs             ;  B      J � F � �@   �@ b� C   A�  �   b @�� ��  @ ����A^�  ��# �       get_all    modem    .name    pairs                     E  L      J � F � �@   �@ b� C   A�  �   b @�� ��  @ ����A^�  ��# �       get_all    modem    .name    pairs                                 W  �   �  �   � @� � 
� ����@   ��  �@  �@ �   �  ��  ŀ  �� A  �� �@   � � �@ A    � � �� A� A  �� AA   � � AA A    � � �� �� A  �� �A   � � �A A    � � � �� A  �� �A   � � �A A    � � �� � A  �� B   � � B A    � � � A� A  �� AB   � � AB A    � � �� �� A  �� �B   � � �B A    � � � �� A  �� �B   � � �B A    � � �� � A  �� C   � � C A    � � � A� A  �� AC   � � AC A    �� � �� �� � �� ��  D@� �@ @��@� � AA @A�M@@ ��@ć � �C �D@�� ć�� 
 H "A 
� AEH� "A �� �C � �� � �� @D@� �@ @��@@� AA @A�@@ � �C � ��
 �E� �A � @��"A  ��@D�� �� A    � � �� �� A    � � � � A    � � �� A� A    � � �
 �E� �A �  @��"A 
 �E� �A B @B�"A 
 �E� �A � @��"A 
 �E� �A � @��"A 
 �E� ȁ  @�"A 
 �E� ȁ B @B�"A ����
�
 �G� "A�
 H� �A � "��A    � � ��
 H� �A  "��A    � � �
 H� �A B "��A    � � ��
 H� �A � "��A    � � �
 �E� �A � @��"A 
 �E� �A  @�"A 
 �E� �A B @B�"A 
 �E� �A � @��"A 
 �E�A ȁ � @��"A 
 �E�A ȁ B @B�"A 
 �E�A ȁ � @��"A 
 �E�A ȁ  @�"A 
 �E�A ȁ 	 @��"A 
 �E�A ȁ B	 A�	 �B�b� O��"A  � A    � J � �
 �E� ȁ 
 @�"A 
 �E�A ȁ B
 @�"A  �� A  �� �J   � � �J A    � � �
 �E� ȁ �
 @��"A  ���J � � A  �� K   � � K A    � � � A� A  �� AK   � � AK A    � � ��
 �E� ȁ  @�"A 
 �E� ȁ B @B�"A 
 �E�A ȁ � H� "A 
 �E�A ȁ  H� "A 
 �E�A ȁ B J����B�b�"A   �
 �E�A ȁ � H� "A 
 �E�A ȁ  H "A 
 �E�A ȁ B H "A 
 �E�A ȁ  @�"A 
 �E�A ȁ � H "A 
 �G� "A�
 �G�A "A�	� # # � 5      check '   wrong args............................ 	    	   locindex     	   ispindex    pincode 	   dial_num    apn 	   username 	   password    authentype    mtu    maxidletime    0    setisp    auto    select    manual 	   N   ***********/usr/lib/modem/getisp.sh locIndex ispIndex 0**********************    call 0   sh /usr/lib/modem/getisp.sh locIndex ispIndex 0    set    modem 	   modemisp    dial_num_hidden    apn_hidden    username_hidden    password_hidden 
   modemconf    commit    get    network    mobile    dialnumber    auth 
   idle_time 	   tonumber 	<      connectmode 
   conn_mode 
   manualdns    on    primarydns 
   seconddns 	   dns_mode    static    peerdns    dns    dynamic    connectable    1                     �    	 q   �   � @��� �@  @�� � 
 �@ �@  � � �   Ȁ  �  AA  b�� ����  ����A  @��� � �A � �� �  �A  ��� ��  [ �A��� B �A ��  �� M�� ���  �� �������� �B � ���  �� ������  �� ���@�@ � �� �A�� �A � �� �A�� �A �A  �� �   �@ �� 
�[�� �A ƁD[�� �  �A�� ��� HB �A�Ȁ    �� ⁀ �  ��@ �@��� 
�[�� �A ƁD[�� �  �A��A  �� �  # �       connect    get_modemcfg    network.interface.mobile    disconnect 	�  	Y  	   	   tonumber    pinlock 	      pincode 	      modemstatus 
   fork_exec )   sh /usr/lib/modem/unlock_pin.sh manual 1 )   sh /usr/lib/modem/unlock_pin.sh manual 0    reload    network    call 
   nanosleep 	    	 ��   check_ableconn                           #   
     @ "�� @  � �J � �  b@ J �F@� Ȁ  �  H �A b@ J �F�� Ȁ  b@�H� �  � � 
 [� � �@ �@B [� � �  �@��� � � �   # �       connect    set    network    mobile    connectable    0    commit    network.interface.mobile    disconnect    call    get_modemcfg                       +       [    @ � ��@@ ��@��@P� @ ��� � @�� � �@A��@�� �  ���� � ��   �  @ ��@ �  # �    	    	q   	   	   	   	d   	c                       -  �    �   � @@�@@�@��@A�@A�@��@A�@���B�@C�H@  �   ��C� H �A �H� �� �   ����  �  �@��@  � � ���@ �H� @ �ހ  @�@�   �#  �  A � 
�  �F"�� A   �J ��bA H� c @�b�� � �HA ��������A    �� �  � ���G� �A    ��  B  H �B ƂH[ ���  ₀M��@� �M�H�� �@I� �� B   �B  
  �I��	 �
 D
 "��J  F����	 �
 H� b����@ �HC  ��M�J@ �HC  �� � ��� ��� M���  �HC  �� � �� ��  �  ƃ�H�	 �D � ⃀ � �� "��  ���  � ��L"� D    �D  ��  � ��L"� D    �D  ��  � �M"� D    �D  �� D�D    �D  � D�D    �D  �� H� D ���D AD �  b@�� ��  [ 
"� HF � ��
�� �^�  ��#  # � :   
   conn_type    0    modem_status    modem_connstatus    modem_ipaddr    0.0.0.0    modem_netmask    modem_gateway    modem_pridns    modem_snddns    modem_signal    0%    modem_type        get_profile    basic    _    usb    menu    type    table    pairs    g3_g4    1    require    luci.model.nwcache    connect 	       init    mobile    get_network 	   dnsaddrs    get_current_network    network    call     current_network    MOBILE    get    modem 
   modemconf    modemstatus 	   modemisp    2    32 	      get_connstatus    prase_signal 	   tonumber 
   modeminfo    ipaddr    netmask    gwaddr 	      %      	   tostring    =                     �  �    9   A   @@� �   Ȁ  b��Y@  @ �� �� ��   ��@�    P� �� �   @��   �@� H� �� � � ��   �@� H �� � � ��   ���  Q� �A � �   @�   AA[��� �� "� �     AA[�� �� "� �   [�#�# �       string    find    :    sub 	      gsub    %c        " 	����    "                     �  /     �      H   �@  ��@� � �  ��� A���@  � �A�AB�E� DÅDAÅD�C�DAD�D�D�DAE�DAE�A�E� DƅDAF�DAD�D�F�D�F�D�F�A��E� DAǅD�G�DAD�D�G�DH�DH�A�E� D�ȅD�H�DI�DAI�D�I�D�F�A��E� DʅDAJ�DAD�D�F�DAI�DAI�A��E� D�ʅDK�DAD�DAK�DAI�DAI�A�E� D�˅DL�DAD�DAL�DAI�DAI�A�E� DʅD�L�DAD�DM�DAI�DAI�A�� �� �#  �     HA	 �A	 �A	 B	 HB	 �B	 �B	 C	 FCMb �A� @��� � b��Y  @�@�CY  � �� E  �@�Y   �Y  � ���E  � �AD � b� [�A� @��� Ȅ b��Y   �AD � b� � 	B� ZD�  �HD	 �@�A� @��� � b��Y  ��@�CY   ��  � �� E  �AD � b� ��A� @��� �D b��Y  @�AD � b�  	B� �A� @��� Ȅ b��Y  @�AD � b� [ 	B� A�A� @��� �� b��Y  @�AD � b� � 	B� ��A� @��� � b��Y  @�AD � b� � 	B� ��A� @��� �D b��Y  @�AD � b�  	B� �^C   �@�CY  � �� E  �@�Y  � ���E  � �AC  @��� bC #  # � C   !   /www/webpages/data/location.json    io    open    r     location341    location_mcc    250    location_name    RUSSIA    isp0    isp_mnc    28    99 	   isp_name 
   M_BEELINE 	   dial_num    *99#    apn    internet.beeline.ru 	   username    beeline 	   password    isp1    02 
   M_MEGAFON 	   internet    gdata    isp2    01    M_MTS    internet.mts.ru    mts    isp3    37 
   M_SKYLINK    #777        mobile    isp4    39    M_VAINAKH_TELECOM    isp5    11    M_YOTA    yota.ru    isp6    20    M_TELE2    internet.tele2.ru    isp7    M_ROSTELECOM    internet.rt.ru    lines    string    find    "location%d+"    get_str_split    "location_name"    _ 	   "isp%d+"    "isp_name"    "dial_num"    "apn"    "username"    "password"    close                     B  D      J   @ � � � �   d �c   # �    	   dispatch                     F  H       
     @ A@  $  #   # �       _index 	   dispatch                     J  L           E  �@  Ȁ  _@ ��  �  �  "�  ���# �       entry    admin 	   usbmodem    call    _index    leaf                             