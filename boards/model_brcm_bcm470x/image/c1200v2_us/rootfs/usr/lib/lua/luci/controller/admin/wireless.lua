LuaQ               l      H@  "� A   ��  b� ��� ��� �    � A H� �� �B"A�A H� �� � B H� �� �ć�Ĉ�D��ĉ�D��Ċ�D��ċ�D��Č��F���F���Ǝ��F���Ə��F���Ɛ��F���Ƒ��F���ƒ�  	 �B       ��	 �  �
 ��     �B
 �    
 �B    ��
 �    � ��    �B �     �B    �� �       �   �   �  � ��   �B �  �B �� � � ��       �   � ��B �       �   � # � 7      require    luci.model.wireless    luci.model.uci    cursor    luci.tools.debug    module    luci.controller.admin.wireless    package    seeall 	   	   	   	   	   	      wireless_2g    wireless_5g 	   guest_2g 	   guest_5g    syspara_2g    syspara_5g    region    guest    syspara_wps 
   macfilter    wps_pin     maclist    devlist 
   survey_2g 
   survey_5g    statistics    wps_connect 	   tmp_read    tmp_read_guest    tmp_set    tmp_set_guest    index    wireless_dispatch    wireless_index    wireless_wps_pin    wireless_wps_connect    wireless_statistics    wireless_survey_2g    wireless_survey_5g    wireless_devlist    wireless_maclist    tmp_read_ath    set_ath    wireless_tmp_read    wireless_tmp_read_guest    get_trans_table    wireless_tmp_set    wireless_tmp_set_guest        2   4            E  �@  Ȁ  _@ ��  �  �  "�  ���# �       entry    admin 	   wireless    call    wireless_index    leaf                     9   O    P   @ @ Y@    �H@  ��@ �@    ��@  ��  � �  �� ��   �@�@ ��@  � �   @A� ��� @ �I  c �   ��J� @���� M �@ ���@ ��A  �� b������@   ��@�� ��  ��� ������A� @�@A�@���� �� ��@���  b� � �E � �A � H� � Ȃ _A [ �J� @���� b� FA��  b���# # �       form     
   operation    type    string    write    region    APCFG    read     luci    controller    admin 	   wireless 
   wireless_    wireless_2g    wireless_5g 	   guest_2g 	   guest_5g    guest                     T   _             @@  �@ "�� @    �   A�  �   b� �   �@@� A�@ �@ �   �@@��A� � �@ # �       luci    http 
   formvalue    wireless_dispatch    prepare_content    application/json    write_json                     d   �    C   @ @ �@@ �   ����  E �A  ��  _A   E  �� M � @ �@� � ��A  �A�����M�A@ ��A� ��A  ā���  ����� B�� "B���"� [  B�@��@B�@ � ��@��@��M@ ���B ���"B ��Ɓ�� [������C������C���HB ���� ��c # �       option 
   wps_label    APCFG    wps_pin 	   generate    default    on    off 
   read_data    write    read    data    wps_cmd    ap_pin    lock_2g    disable    lock_5g 	   pin_lock                     �   �    
Y   @ @ �   �@@Ȁ   H�  � A ����@  Ā��	� �� ����A�FABȁ �b� ���B� � � ��� C�FABȁ �b� ���B���@� @�FAB�A �b� ��
��� ��@�@ Y  @�M�����@���AB� [���  �� ��AB [���  �A ȁ �� ��D� �� � � �   �� �AE�A  �F�Eb� � �@��Q���@��FABb� �@�E�  D��D�F�D� �c # �       option    APCFG    wps_pin    wps_timeout 	   disabled    wps_status    ok    pin    method    wps_cmd    status     pbc    cancel    connect        file    require    io    popen    tp_wps_led &    close 
   read_data 	�  
   available    success    timeout     data                     �   �    1   @ @ Y@    �H@  �  Ȁ  �  H �A �@ �   ���  	� E  �  M@� @ ��� @�� B�" � ����BEC ���D�������D�����D�����D������D���DAށ  ��� �A����āŊ�A��� # �    
   operation    read    2.4GHz    5GHz    Guest 2.4GHz    Guest 5GHz    APCFG    load    ipairs 
   assoclist 	      mac    type    encryption 	   security    rxpkts    tx_packets    txpkts    rx_packets 	   operator    success    timeout     data                     �   �       J   @ � b�� � � � ��@� 	� I  �� �     ��  � � A�  �@��  Ā��� ĀĀ���  # �       APCFG 	   scanlist 	   list_cmp    table    sort 	   operator    read    success    timeout     data        �   �        � @ � � K��  ��@  � � �  # �       signal                                 �   �       J   @ � b�� � � � ��@� 	  I� �� �     ��  � � A�  �@��  Ā��� ĀĀ���  # �       APCFG 	   scanlist 	   list_cmp    table    sort 	   operator    read    success    timeout     data        �   �        � @ � � K��  ��@  � � �  # �       signal                                 �      `   A   �@  b� ��@ �@    ���  �   HA �� �� �@ 
   B"�� I� �  M�@@ �@B��Y   � ���� ⁀ �A    ��    � ��B"� B    �  A � b ��  � �� � E�@E�	@
 ���  �� ���@ �ރ   ��C  ��� �� @D�D���Ĉŉ@��@D�D����^�   �A ��b��� �D�  D���� D���� D���� �������^�  @�� ā ��A���AF�ā�� # �       require    luci.model.client_mgmt 
   operation    read    Wireless 2GHz    Wireless 5GHz    Guest 2GHz    Guest 5GHz    APCFG    load    get_client_list 
   assoclist    ipairs    mac 
   wire_type    type 	      ip    0.0.0.0    name    UNKNOW 	   hostname 	   operator    success    timeout     data                       D   Y   @ @ Y@    �H@  ��  ��  �� � A   AA J  @��b�� �  �    M@� @ ��� @�F�� � ��B  � �b� ���
��� ���  �F��� �b� �� �M � @ �@�  �A�  �� b� @���D b� ��FB���b�����  ��@�  �F����b���� �� ��F���B  � �b� ��F��B � b� B���A    ��  �B �B ������ƌ����� # �    
   operation    read    require    luci.model.uci    cursor    index    APCFG    load    maclist_read 	   tonumber    remove    maclist_remove    update    insert 
   luci.json    decode    new    maclist_check    maclist_insert    maclist_update    get_profile 	   wireless    max_mac_filter 
   max_rules    success    timeout     data    others                     F  �   =  E� D@@�D@@�D@��D@@�D@��D@@��� �@@��@@��@���@@��@���@@��@   [� � A � ��
   AB"��   �B"� �B  �J� @A@A�B J @A@A�B� ��J�@A@A�B J @A@A�B� J� @A@A�� ���AC�����A�
   BCJ�F��� �HC b��YB    �HB  ����C [ �C ����B    ��B  ��� ��D@ �ĀĈ  ���Ĉ�����H ��� ₀
��C� �  "��M��@ ��D@ ���Ċ  �ĀĊJ�F���  H� b������C A� �� �����@ �� Ƌ  ��@Ƌ�D ���� ������� ����D �����������H � Ȅ ⃀�C    ��� 
��C� �� � "��D    �� J�F���  H�  b��D@�J�F��� � H�  b���@��� 	�D�D�D�ƁJ�F���  H b��D@�J�F���  HE b��D@�J�F���  H� b��YD    �H D@�J�F���  H� b��YD    �HD  D@����D�D�D���J�F���  H b��D@�J�F���  HE b��D@�J�F���  H� b��YD    �H D@�J�F���  H� b��YD    �HD  D@���F 	���D���ƁJ�F��� � H b���@�J�F��� � HE b���@�J�F��� � H� b��YD    �H �@�J�F��� � H� b��YD    �HD  �@������D�� ��J�F��� � H b���@�J�F��� � HE b���@�J�F��� � H� b��YD    �H �@�J�F��� � H� b��YD    �HD  �@��E�  D�D� �c # � %      enSecurity        ssid    secMode    pskCfg    wpaCfg    wepCfg 	   basicCfg    ap    APCFG    scan_driver    if2g 	      if5g    get 	   wireless    access    on    off 	   disabled    hardSwitchEn    enable    enableBand    1    0    encryption    none    psk_key 	   wep_key1 
   wpaCfg_ip    server    0.0.0.0    wpaCfg_passwd    wpa_key    success    data                     �  �   6   �   � @A  [  ��  ��� �@ �   � @A  [  � �� �@ ��� @A���   � @A  [  �� ��� �@ �����  B���   � @A  [  �A ��� �@  ���� �B@��   � @A  [  � �A� �@ �   � @A  [  �� ��� �@ # �       set 	   wireless    encryption    secMode    ssid    psk    psk_key    pskCfg    wep 	   wep_key1    wepCfg    wpa    server 
   wpaCfg_ip    wpa_key    wpaCfg_passwd                     �  �           I   $  #   # �       tmp_read_ath                     �  �           I � $  #   # �       tmp_read_ath                     �  �    	   E   �� � @������ ������� ����  � �� � M C � � M@C@ � � D �ހ  @�c  # �       ssid    secMode    encryption    pskCfg    psk_key    wepCfg 	   wep_key1    wpaCfg_passwd    wpa_key 
   wpaCfg_ip    server    pairs                          �     m   H   �   ��@��� �@  �@  ��@�� �   ��� ���AA� � ���AA�� �����AA�� � ���AA� �AB �B 
�� �AC Ā��AC �C@ �� ć  �ĀÇ�  ��@�  H �� B ����AD��A�� ��D Ā���D �C@ �� ć  �ĀÇ�  ��@�  H �� B ����AD��A����AB  E �� �A �  �� �  �  ��@� �� �AD��A����AB �E �� �A �  �� �  �  ��@� �� �AD��A�� ����� �A �A  �AF�� # �       /etc/init.d/wireless restart    ap    APCFG    scan_driver    if2g 	      if5g    dev2g    dev5g 
   operation    set    wireless_2g    enable 	   enable2g    on    disabled_all    off    write    wireless_5g 	   enable5g    set_2g    get_trans_table    set_5g    error operation    success                       5   	f   H   �   ��@��� �@  �@  ��@�� � � �� �@��  �  �� �@� ��A  ����@B ����� �� �H� � � � �@ ��� �� �H� � � B �@ ��C ����� �� �H� �� � � �@ ��� �� �H� �� � B �@ � �� �H� � ��  �C �@ � �� �H� �� ��  �C �@ ����A  � ��@  [  �@�����A �� ��@ � [  �@�� ��  � �@ � �� �H� �@��   �@�� G��@��@  ��E��  # �       /etc/init.d/wireless restart    ap    APCFG    scan_driver    if2g 	      if5g 
   operation    set 	   enable2g    on 	   wireless    enable    off 	   enable5g    access    set_2g    set_ath    set_5g    error operation    commit    fork    success                             