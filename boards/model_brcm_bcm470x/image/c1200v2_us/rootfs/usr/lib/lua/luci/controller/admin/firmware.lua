LuaQ               �      H@  ��  ��@"@�  H@ "� A  �� b� �  �� �� �   �  HA "� A �� b� � �� �� �  �  HB "� A �� b� ��C ��� �DC H� �� �B    ��� ��C ₀ ��HC � � �B    ��B � H� � �C � a  �D  �� ��  �� ��  � � �D �D �� ��   �� ��   � �     �     ��D �D �� ��     � � � �      �� ��   �	 �        ��D	 �D     ��	 �� ��	 ��      ��
 � �D
 �D        ���
 �� ��
 �� � �  �     �D �D �� � �� �� � !� a    � �	B� aE   B a� BE a�     B� E�  �� �E  � �������E   �������E  F ����Ņ��E  � �������E  	 ����Ņ��E  F	 ������D�����  �E  �	 �������E  F
 �������E  �
 ����Ņ�D�����  �E  F ����Ņ��E  F �������E  � ������D���  � � �
�E �E  �     � ��� �� �� # � D      module    luci.controller.admin.firmware    package    seeall    require    luci.model.uci 
   luci.http    luci.tools.debug 	   luci.sys    nixio    luci.model.controller    luci.fs 
   luci.util    luci.sys.config $   luci.controller.admin.cloud_account    cursor    get_profile    global    reboot_time 	K      flash_time 	�      /tmp/firmware.bin    /tmp/config.bin    /tmp/backup 	       fork_reboot    file_flash    update_fwuppercent    update_rebootflag    restore_error    config_read    config_check    config_backup    check_country    config_restore    config_reboot    config_factory    upgrade_read    set_download_inf    get_upgrade_detail    upgrade_fwup_check    upgrade_firmware 
   utfstrlen    GetShortName    tmp_get_firmware_info    invoke    fw_check_loop    fw_upgrade    tmp_upgrade_firmware    tmp_get_upgrade_info    config    read    cb    check    backup    restore    reboot    factory    upgrade    fwup_check 	   firmware    tmp_cmd    get_firmware_info    get_upgrade_info 	   dispatch    _index    index           ;     N   H   �@  ��  ��� [� A�@ �@ ���� H�  M� ���A��� "��M �@�G �� �� [  ���� [�M@���M��@��A � G��  �C[ ��"���A� @���� bĀ� 	[�M@�@�M����A� @���� b���	�D BD A� ��b� � ��  ��M �@ ���� ��   �@H� �� W��"A �  # �       /tmp/partition.txt 	       os    execute    nvrammanager -s >     io    open    r     read    *line    string    find    (.-),()    size%s*=%s*(.-)%s*Bytes    gfind    size    _ 	   tonumber    rm                      =   A            H@  "� @�@ b@� # �       require    luci.controller.admin.system    reboot                     C   H     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/firmware_status.lua    w )   check_status = {totaltime=%d, ops="%s"}
    write    string    format    close                     J   O     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/firmware_status.lua    w '   check_status = {percent=%d, ops="%s"}
    write    string    format    close                     Q   V     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/reboot_flag.lua    w &   check_status = {reboot=%d, ops="%s"}
    write    string    format    close                     X   ]     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/firmware_status.lua    w ,   check_status = {error_code="%s", ops="%s"}
    write    string    format    close                     _   b       E@  �   D� �c  # �    
   totaltime                     d   r       �   �@@��@��  �@ �   � A�@AȀ �� �   ���� Ȁ �@ A  �@� �B@��   ��� � �@ �� � �  c  # �       luci    http    prepare_content 
   text/html    fs    access    /tmp/firmware_status.lua    dofile    check_status    ops    restore    error_code                     t   �    �   J   @ � b�� �@  ��@��  �@ � � A H� �� �@    ��  M�A��� � � � HA  � ���  � ��M��@��  C BCH� ���� �H WB�"B ހ  @��� � ��@�A �@ �� � ��@�� �@ �  ��� HA �@��  � H� �@ � [�"��A� @�@B�� � ��bB �  ���  C ACHA "A 
  �FH� � "A��  C ACH "A A   �@HA ��ȁ W��"A �  C ACH� "A  HA "� @�H��� ���	 � b�  �AI���	 �A�� ��I�
 �� �� �A�����
 E� � ��H�	 �� �B  �B�� � _B  RB��A��� �A���� �A �� �A������� A� @B�@��A��� ���A�B J��� ��A �� � # � 7      cursor    os    execute (   mkdir /tmp/backupfolder >/dev/null 2>&1    get_profile    backup_restore    extern_partition     split         ipairs    luci    sys    exec .   nvrammanager -r /tmp/backupfolder/ori-backup- 	   .bin -p      >/dev/null 2>&1 \   nvrammanager -r /tmp/backupfolder/ori-backup-user-config.bin -p user-config >/dev/null 2>&1    mkdir -p /tmp/backupcfg 
   xmlToFile -   /tmp/backupfolder/ori-backup-user-config.bin    /tmp/backupcfg    accountmgnt    cloud_config    rm -f /tmp/backupcfg/config/ 3   rm -f /tmp/backupfolder/ori-backup-user-config.bin    convertFileToXml    /tmp/backupcfg/config    rm -rf /tmp/backupcfg 	   tar -cf  (    -C /tmp/backupfolder . >/dev/null 2>&1 )   rm -rf /tmp/backupfolder >/dev/null 2>&1    require    luci.model.crypto 	   enc_file    getsysinfo    product_name    dump_to_file    /tmp/backup.cry    ltn12_popen    cat /tmp/backup.cry    http    header    Content-Disposition (   attachment; filename="backup-%s-%s.bin"    date 	   %Y-%m-%d    prepare_content    application/x-bin    ltn12    pump    all    write    rm -f     ; rm -f /tmp/backup.cry                     �   �      "      H@  "� A�  @�� @ � �@ b� ��A ��  �@���  ��@� A�@ �� �� ����  ������� �@ � � �  ��  ������� �@ �   �  # �       require    luci.sys.config    luci    sys    exec )   uci get wireless.@wifi-device[0].country 
   xmlToFile (   /tmp/restore/ori-backup-user-config.bin    /tmp/ 9   uci -c /tmp/config/ get wireless.@wifi-device[0].country    call    rm -rf /tmp/config/                     �   
     J   @ � b�� �@  Ȁ  �� �@  �  � 
� H "� G �A ������ �A �A� H� �� � �A    ���M �@�
  BC[��� "��� � [�"@�M C� �J� � b� A�  ��
�QD@�4� BDJ ����D�� � "�  [  E[�� "B�B  �EH� "B B  �EHB � Ȃ W"�   M�F@� HB �� "B�	� # M � �� [�"�
�M C 
�@��� � D �b� @���� � �� @�� ������C �����D	 [ ��	 ��C �C ������	 [ �
 � �	 �C ���C �����D	 [ ��	 ��C �  ��B  �H IHB
 "B B  �H IH�
 "B 
� �JH �B "B�B  �H IH� "B B  �H IH� "B 
� �JH �B "B� H� �� B A� � b���C ��H�I� �HD �C��C ^�  @�J�@���� � bB�AB @��@�� bB @��� b� ��J� � b� �@�H@���
�@�H ��	�AB b�� Y  ��AB @��@��� bB AB @��@��� bB J�@��� � bB�AB @��@��B � ��bB AB @��@���� bB J�@��B bB A� bB� I� c ��J�@��� bB AB @��@��B � ��bB A �B Ȃ bB���
� PH "B  HB �� "B�	� # # � E      cursor    require    luci.model.crypto    luci.fs    user%-config    luci    http    prepare_content 
   text/html    get_profile    backup_restore    extern_partition     split         ipairs 	   	   dec_file    getsysinfo    product_name    dump_to_file    os    execute #   mkdir /tmp/restore >/dev/null 2>&1    ret 	   tar -xf  !    -C /tmp/restore >/dev/null 2>&1 	       restore_error    err_failed    restore    stat    /tmp/restore/ori-backup-    .bin    size    sys    exec    nvrammanager -e -p      >/dev/null 2>&1 )   nvrammanager -w /tmp/restore/ori-backup- 	   .bin -p     mkdir /tmp/restorecfg     mkdir /tmp/cloud-account-config 
   xmlToFile (   /tmp/restore/ori-backup-user-config.bin    /tmp/restorecfg .   rm -f /tmp/restore/ori-backup-user-config.bin F   nvrammanager -r /tmp/cloud-account.bin -p user-config >/dev/null 2>&1    /tmp/cloud-account.bin    /tmp/cloud-account-config    accountmgnt    cloud_config (   cp -f /tmp/cloud-account-config/config/     /tmp/restorecfg/config/    convertFileToXml    /tmp/restorecfg/config 1   rm -rf /tmp/restorecfg /tmp/cloud-account-config    check_country /   nvrammanager -e -p user-config >/dev/null 2>&1 W   nvrammanager -w /tmp/restore/ori-backup-user-config.bin -p user-config >/dev/null 2>&1    /tmp    rm -rf /tmp/restore; rm -f     call ,   [ -f /sbin/board_restore ] && board_restore    printf 
   reboot...    fork_reboot    Decry file failed    restoring file len error                          	   J   @ � �@  b@ A�  b@� I � c  # �       printf 
   reboot...    fork_reboot                       d   �   J   @ � �@  b@ A�  ��  b� @ � b�� ��  �@ �� ��  � �  I� ���� � �B � "��F�� � C H� b�� C @ �	� ��M C  ��BC �C@ �	�   �	  �  ��C�  �B�@D@��� ��D�E�B �B ���� � �� M�E ��� ���� �E ��F��� �   ���  � ��� ���E�B    �� �B ��C �B ��  ��  �� �A��� [  ���  HC �� ��� ���  HC �� ���[ �� � �� M�E ��� ���� �E���F��� ��  � ��� ���E�A�  �� �BG � ��I  �� �� � �B�� �H�B� �B� � H� �� �B    �� M C ����� HC	 ₀����	  � �M ����	  JHD
 ��Ȅ
 WĄ"D ނ   ��� ������
 �B �� ����� �B � �B��B� ��  �  � ��₀ [ �@D���� ������ �B ��� H �C ȃ  �B �� H �B���@� ���� H �C �� D �B �� H �B���L [��B��  ��� �B � �B� �� � # � 5      printf    reset to factory config    require    luci.model.uci    cursor    luci.model.accountmgnt    cloud_req.cloud_account    get    cloud_config    device_status    bind_status    need_unbind     all    true    print    complete_flag:     luci    sys    call 0   cp /etc/config/accountmgnt /tmp/accountmgnt_bak 	   tonumber 	      get_cloud_username 	   ownerAcc    type    table    unbind_device    get_password    file_flash    factory    resetconfig    get_profile    backup_restore    extern_partition    split         ipairs    os    execute    nvrammanager -e -p      >/dev/null 2>&1 !   /etc/init.d/logd stop ; logreset ,   [ -f /sbin/board_factory ] && board_factory    reloadconfig 0   cp /tmp/accountmgnt_bak /etc/config/accountmgnt    set    commit    1    set_cloudAccount 
   reboot...    fork_reboot                     f     E   E@ D@@�D�@�D@A�D�A�D@B��� �� �� � C��� �@CH� �� ��  M �� ��   @ ��@  � � A J  @���� b� @A� YA    �HA  � �E� �  ��Dȁ �� D����  ��D� �� D����  ��Dȁ �� � ��D���D����A D���� D���� ��H� H� �� �B �A ��H� �A�c # � #   	   00000000    UN 	   55530000    US 	   45550000    EU 	   43410000    CA 	   52550000    RU    require    luci.model.uci    cursor    get    quicksetup    to_show    true     (    getsysinfo    special_id    )    model    product_name    hardware_version    HARDVERSION    firmware_version    SOFTVERSION    is_default    flash_time    LOCAL_TIME 
   totaltime    set    false    commit                     �  �    8   A   �@  b� @�� b�� ��  �   �� � � ��@� � H� �@ �@� � H �@ �@� � H� �� �@��@� � H �� �@��@�  HA �� �� �@ �@�  HA � �A �@ �@� � H� �� �A �@ �@� � H� � �A �@ �@� � �@�# �       require    luci.model.uci    cursor 	   tonumber 	d      delete    cloud_config    new_firmware    upgrade_info    set    cloud_push    cloud_reply    wportal    upgrade    enable    yes    time    0    info 
   show_flag    tcsp_status    commit                     �  �   f   �   �@  �� ��@  �  F�� B E  b��� M��������  HB �A��B� ��  � ���  ���A�� � �   ��� � �A A  � ���  ���  ���A�B � �  @��� B �A � ��� � � � @�� ���  ������   @��� B H� �A��� ��B �A �  � � ���⁀ ��B Ȃ � "��J� @�� bB ��  ������ ��B �A � ���� �A �  � ��# � $      require    ubus    connect    nvram_ubus    call    getFwupPercent     percent    update_fwuppercent    flash 	       err_failed    fs    access    /tmp/firmware_status.lua    dofile    check_status    /tmp/reboot_flag.lua    flag    reboot 	   tonumber 	   	d      update_rebootflag    printf    upgrade true    luci.model.uci    cursor    get    cloud_status    client_info    fw_download_progress 
   reboot...    upgrade false 
   fork_exec    ledcli STATUS_ON                     �  �       A   � � d  c   # �       get_upgrade_detail                     �  �   &   J   @ � �@  b@ A�  @�� @ � �@ b@ J � @�� @�� �  b� Y   ��J �@ � �@ b@ J �@ � �� �  �� b@ ��J �@ � �� b@ J   @ � �  b@ I � c  # �       printf    upgrade firmware...    luci    http    prepare_content 
   text/html    fs    access 
   fork_exec    ledcli STATUS_SAN    nvrammanager -u      ledcli STATUS_ON    false                     �  �    !   V   � � �    H  �A  ȁ  �  H �B A M @@�A� @���  � b��� ���  ����@�@ ���@ ��B@�� ����  # � 	   	    	�   	�   	�   	�   	�      string    byte 	                       �  5    k   M @ @ � �   �# � �     E  ���A   @  ���� �  [ ��  ��  CA[���"��HC   ��� ��A@ �H�   � ��� � B@ �HC �� �� ��B@ �H�   � �� �@C@ �H� �� ��� � D@ �HC  � �� ��D  �H � @��@�� �C��[��D���@	� ���C����@��������� ����[ �C��� ��� H�  �C����� @� H�  ��  ���  ���� �C��@  �� ��CQ������ �B �#  # �     	    	   	      string    byte 	   	�   	�   	   	�   	�   	�   	�   	   	�   	�   	   	�   	�   	      sub    table    insert        ...                     7  N   T   A   �@@ b� ��  ��  ��  � � ��   �@�� �@ �   
�  �A"�� A�  � b� ����� �� �A    �� Ā����C� H �B ����A    �� Ā���A� C������A �� �A    �� Ā����C� H �� ����A    �� ��  H ⁀��� ������ � ����ƁCH� �B Ȃ ⁀�A    ��� ���ƁCH� � �B ⁀�A    ��� ����  # �    	   tonumber    needToCheck    require $   luci.controller.admin.cloud_account 	      call    cloud_getFwList    cursor    luci.sys.config    name    getsysinfo    product_name        version    get    cloud_config    upgrade_info    SOFTVERSION    release_log    GetShortName 	      releaseNote    bin 
   b64encode 	   isLatest    new_firmware    fw_new_notify    0    upgradeLevel    type                     U  `    
   �   � � M@�� �� � � �@� [ ���  �  �  �"�� �@    ��@ F�A�   [� d�c  # �       type    table    require    ubus    connect    cloudclient    call                     e  l       A   �@  b� ��� �   �� �@  � ���  	  � �� A	� � �# �       require $   luci.controller.admin.cloud_account    get_download_detail 	       percent                     n  s    	   �     �� �  [ ��  � � �# �       get_upgrade_detail                     u  �    	[      H@  "�  �@ "�� F�@ �  A H� b���� � B� � A ����   ���� H  �   ��
   AC[��  ��C"A�
   AC[��  ��C"A�
   AC[��  �D"A�A�"�  �@ ���"A  I� �� �AEȁ �A � �  �� [� ��  �# � � � �� ��� ��� �AEȁ �A  ��� �AEȁ �A  ��� �AEȁ �A �� � �A �� �� �AE�  ��� �  # �       require    luci.model.uci    cursor    get    cloud_config    upgrade_info    download_url    string    match    .+/([^/]*%.%w+)$    open 
   /dev/null    w+    dup    stderr    stdout    stdin    fileno 	      close    0    call    sleep 3  	   tonumber 	d      set_download_inf    /tmp/cloud_up.bin    /sbin/sysupgrade                      �  �          H@  "� @�@ b�� @ �� �I   �  c �@@A �� b� �   ��A���  B@ ��@ �@� � � � � �# � 
      require $   luci.controller.admin.cloud_account     cloud_fw_upgrade    illegel download url    get_download_progress    /tmp/cloud_up.bin    fork 	       fw_check_loop                     �  �           H@  "� @�@ b�� �� @ ��   �  �  � � �   # �       require $   luci.controller.admin.cloud_account    check_internet     fw_upgrade                     �  �    	       H@  "� H�  ��  �    A I  "A  ���A  �A� ��� �H  ��   �H@ ��  �A� � ��@��Ā ��  ������ ����  # �       require $   luci.controller.admin.cloud_account    idle    0    get_download_detail 	   tonumber    percent 	d      fail    downloading 	   tostring    status    process    upgradeTime    rebootTime                     �  �      a   
   � � � @�    EA  DA���  �   # �    	   dispatch 
   post_hook        �  �         ��� � �   � ��   �@@� � �@ � � �  # �       cmd 
   fork_exec                                 �  "          H@  � �A    �   �@ Aa    
 �  �
  
 �
       � "A 
  AAA� $ #  # �    	 	       luci    http    setfilehandler    _index 	   dispatch        �     B   �   �@  @��   
� HA  �@�   @���@ ��� �� ��  @ ��  �  �  �@�
 H�  �   �� � �Y    �� �� � �� �� �
  � ��   � �[� �@���� ���� ��   �@��@ �� ��� J A�@ �  �@�
 H�  �   �@ � ��   � ��   �@��@ # �       file_flash    upload    name    image    io    open    w 	       write    close    os    execute    rm -f  	                                   $  &           E  �@  Ȁ  _@ ��  �  �  "�  ���# �       entry    admin 	   firmware    call    _index    leaf                             