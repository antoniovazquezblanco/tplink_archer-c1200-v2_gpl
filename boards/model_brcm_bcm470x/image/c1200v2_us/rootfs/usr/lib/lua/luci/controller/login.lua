LuaQ               º      H@    À@"@  H@ " A   b   ÈÀ ¢ Á   â  HA " A  b  ÈÁ ¢ Á  â ÀAÃâ  H Â È C H  ÈÃ ¢ Á  â ÀCÅ â !        aD    ¡        áÄ          !    aE   	  
  	  BÅ a B aÅ  BE a  B aE  BÅ a   B aÅ  BE a     	  
   	B aE   	  
   	  BÅ a    B aÅ  BE a B E   ÅE  Æ ÄÅÅE   ÄÅDE  ÅE  F ÄÅD  ÅE   ÄÅÅE  Æ ÄÅDE  ÅE   ÄÅDE  ÅE   ÄÅD  ÅE   ÄÅÅE  Æ ÄÅDE  ÅE   ÄÅDE  ÅE  F ÄÅD¡E     

 ¡    Å
 ¡Å  #  -      module    luci.controller.login    package    seeall    require    luci.model.controller    nixio 	   nixio.fs 	   luci.sys 
   luci.util    luci.model.passwd_recovery    luci.tools.debug    luci.model.uci    cursor    accountmgnt    /var/run/luci-attempts.lock    /tmp/luci-attempts 	   	
      luci.model.accountmgnt    luci.model.asycrypto    Crypto    rsa    login 
   read_keys    read_recovery    read_vercode    check_vercode    check_factory_default    restart_wportal    set_initial_pwd    cloud_login    get_device_token    get_deviceInfo    kickoff_app    cb    read 	   password    vercode    write    initial_login 
   get_token 	   dispatch    _index    index           !       J  @ À   È@    b C   J   FÀÀ     È  Ù@    È@ b@#        open    w 	X     flock    ex    sh                     #   &        
    @ "@       #        close                     (   6     %   
     @ J  @  "@  @    #  
  "@ 
    @ J  " J b@ AÀ     b   Û    ¢@  ¢ Á@  [ " MÀA  	A  	 â@ £  #        access    r 	   readfile    loadstring    setfenv    assert    type    table                     8   >       J     b@ J  @ À   È@    b ÀÀ 
 A[  " ¢@  @Á ¢@   ¢@ #        open    w 	X  	   writeall    get_bytecode    close                     @   F       A      b  AÀÊ  ÁÊ ÀÀâ À  À@^   ý#        pairs    ltime    uptime                      H   ¯    Ý   E      È@  ¢ Á     â   HÁ  " @A YA    HA A ÀÁA ÙA    È  BÂH " GÂBÛ ¢  Á   â B  À CÃ[ " [  [Ã "C  @ C   J  b  Û¢C C  @ C  CDÀD
 ÀÀÅ  [ ÀDDÀÊ  DÐDÀÉ   [ ã Á  D â ÀÅ[ "Ä   DÃEÛ¢D DF	Æ¢ DÛ¢D   [  	DD ÀDÄ	DD@  È  £ DGÛ  ¢D  À@ÅG
D@@EH
D@@EH
Y   @ÅH
D@À@ÅH
D@@EÉ	 ÀÉ bY  À ÅÉ
DEÊ
D ÂÀ I  
 Å  c @ÅÊ b Ù   EKÛ	¢E ÅÊÈ ¢ Û KÛ	F FF@ÆÊ b F¢E  ÈE ¢ ÀLâE Á  Æ â  ÍHF  Û	Ç @GÂ b FF    F "FD@  À  HÆ "  ÆNH F Û "F  J @ÆÏ@Ð b Y  À@Ð@A bF @ÆÐ bF À I  
 Û c c  #  E      require    luci.sauth 	   luci.sys    luci.model.checktypes 	   username    admin 	   password    confirm    false    getenv    REMOTE_ADDR    check_ip_in_lan    luci.model.client_mgmt    get_mac_by_ip    assert    lan mac is nil! 	   attempts 	       failureCount    attemptsAllowed    exceeded max attempts    luci.model.accountmgnt    check  	      ltime    uptime 
   errorcode    login failed    limit    logined_user    user    logined_remote    remote    logined_ip    addr    logined_mac    get_client_by    mac    ip    logined_host 	   hostname    user conflict 	   uniqueid 	      kill    write    token    secret    luci.controller.domain_login    tips_cancel 
   luci.http    header    Set-Cookie 	   sysauth=    ;path=    SCRIPT_NAME        stok    log 	  	5      /tmp/applogin_flag    fs    access    true    kickoff_app    call    rm -f /tmp/applogin_flag                     ±   ¼     
   A   @  b @À À  b  Á ¢ Å   AA@Aß@ Á  B" FABÈ Â H bÁ  ÃÁA£ #        require    luci.model.asycrypto    Crypto    rsa    read_pubkey    n    e    uci    cursor    get    domain_login 	   checklog    firstLogin 	   username     	   password                     ¾   À       J   @ À d  c   #        recovery_read                     Â   È    
   J   @ À bÀ Y@    @  Û   ã #        vercode_get    host no found                     Ê   Ì       J   @ À @@ d  c   #        vercode_check    vercode                     Î   Ð          J   @@À b @ J   @ÀÀ b @ #  #        is_default    is_dft_cfg    cloud_ever_login    cloud_account_exist                     Ò   Ö        
     @ H@  "@ 
     @ H  "@ 
     @ HÀ  "@ #     
   fork_exec    wportalctrl -c "   echo "stop" > /tmp/wportal/status     /etc/hotplug.d/iface/99-wportal                     Ø   A   á   E       @¢ @@@  ¢@    ÈÀ   £    È@ ¢ Á   â  HÁ " @ÂA b  ÀBâ Õ HÂ " ÙA  À@Cb AB  È bBÙ  @ ZB  [ ÂCÛ¢B  @	@CDD@@ÃDD@@ÃDY   @CED@À@CED@@ÃE ÀÅ bY  À CÆDÃÆDA  b @CÇb ÇÄ H D ¢HÀ É  Ä E  ã J b  Û¢C CC  @ C  CIÀI
ÀÀÅ  [ ÀIDÀÊ IÐDÀÉ  
 [ ã Å ÄÊÄÊ DK D     Ä L Ä
  DL@Ë" D     @ÄËY    L	ÀÄÊ Ë¢D  @IÄL	DÍ¢ DÛ¢D   [  	IDÀIÄ	D  È  £  ÈÄ ¢ ÀN	 EÊ@ÅÊ âD ÀDÎ â Ù    ÅN["E  EÎH " Û 
 O[E EÅÀÅÊÅÅÀEÎ â Å"E HÅ " @P
bE A E b Ð
ÈÅ  [F ÀÂ â ÆF     ¢EDÀ£  ¢E c  #  H      is_dft_cfg     restart_wportal 	   have set    require    luci.sauth 	   luci.sys    luci.model.checktypes    getenv    REMOTE_ADDR    check_ip_in_lan    luci.model.client_mgmt    get_mac_by_ip    assert    lan mac is nil!    limit    logined_user    user    logined_remote    remote    logined_ip    addr    logined_mac    get_client_by    mac    ip    logined_host 	   hostname    luci.model.uci    cursor    get    administration    login    preempt    off    user conflict 	   attempts 	       failureCount    attemptsAllowed    exceeded max attempts    old_acc    admin    new_acc    new_pwd 	   password     	   cfm_flag    confirm    decrypt    set 	      ltime    uptime    login failed %   luci.controller.admin.administration    usbshare_update 	   uniqueid 	      kill    write    token    secret    luci.controller.domain_login    tips_cancel 
   luci.http    header    Set-Cookie 	   sysauth=    ;path=    SCRIPT_NAME    stok                     C  ¹     E      È@  ¢ Á     â   HÁ  " @A AA ÀA ÙA    ÈÁ  ÂHB " GBÛ ¢  Á  Ã â B  À Ã[ " [ C [ "C  @ C   J  b  Û¢C C  @ C  ÄÀÃC
 ÀÀÅ  [ ÀÃCDÀÊ  ÄCÐDÀÉ  Ä [ ã ÊÀÅ â A  @ É  ã Á  D â  Å[ "ÄÀEÀ  È ¢ ÀDF	 [" MÀF
 [" M G
@ [" M@G
  [" MG
À [" MÀG
 [" M H
@ [" M@H
 
	[ "Å   DH Û¢E @	ÅCÅHEÉ¢ D Û¢E   [  ÅCD ÀÅCÅDÅI	¢ E    
 DD@  È
  £ À	  H
 E  ÁÅ
 â Å# KÛ  ¢D  À@K
D@@L
D@@L
Y   @L
D@À@L
D@@ÍE ÀÅÌ bY  À Í
DÎ
DÀÁÀ I  E Û c @ÎÅ b Ù   OÛ	¢E ÎÈÅ ¢ Û EOÛ	F FF@ÎÆ b F¢E  È ¢ ÀEPâE Á   â  ÆÐH F Û	 @ÂÇ b FF    
 "FD@¤F J@Ò@ÆÒ b Y  À Ó@AF bF @ÓÆ bF À I  F Û c c  #  P      require    luci.sauth 	   luci.sys    luci.model.checktypes 	   username 	   password    confirm    false    getenv    REMOTE_ADDR    check_ip_in_lan    luci.model.client_mgmt    get_mac_by_ip    assert    lan mac is nil! 	   attempts 	       failureCount    attemptsAllowed    exceeded max attempts    decrypt $   luci.controller.admin.cloud_account    cloud_bind_and_login     luci.model.accountmgnt    cloud_acc_check 	   tonumber 	¯ÿÿ	¯ÿÿ	±ÿÿ	y¯ÿÿ	¯ÿÿ	K¯ÿÿ	¯ÿÿ 	      ltime    uptime    ownerAccount    get_last_cloud_account     
   errorcode    login failed 	   tostring    limit    logined_user    user    logined_remote    remote    logined_ip    addr    logined_mac    get_client_by    mac    ip    logined_host 	   hostname    user conflict 	   uniqueid 	      kill    write    token    secret    luci.controller.domain_login    tips_cancel 
   luci.http    header    Set-Cookie 	   sysauth=    ;path=    SCRIPT_NAME    stok    /tmp/applogin_flag    fs    access    true    kickoff_app    call    rm -f /tmp/applogin_flag                     »  Î    .      [   @  W   È   J  @ÁÀ@Á b YA  À J @AÁ bA J  @ÁÀ@Á b Y  ÀAÁ @Â ÈA bFBÈÁ b FBÈÁ bÛ FCbA E  DDÁ c #        /tmp/cloud/    cloud_token        fs    access    call    cloud_getDevToken    io    open    r    read    *line    close    token    origin_url                     Ð  Ø    !      H@  "  @ " FÀ@ È  A H bÀ@  HA Á ¢Á    â  AÂJ  @ÂÁ b "  EÁ  DA A Û ¢ DDc #        require    luci.model.uci    cursor    get    cloud_config    login 	   username    role    cloud_req.cloud_comm    TrimStr    exec    getfirm MODEL    cloudUserName 	   tonumber    model                     Û  æ     	&      H@  " @@ b À  ÅÀ  Ä@AÄ@Ä ÂAÂ  È "A ÃACÂÁCÛ  AÂ  È "A ÃACÂDÛ  AÂ  È "A#        require    ubus    connect 	   PFClient    type    tmp_app    method    token !   c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9    call    passthrough    sn 	    	   transfer 	   raw_data 	   AQABAA== )   AQACAAEABQAACAAAAAAAAAKejGoBAQYAAAAAAA==                             J   @ À   Û   d c   #     	   dispatch                     
         
     @ A@  $  #   #        _index 	   dispatch                            
      E  @  _@   ÈÀ  ¢  "  @A#        entry    login    call    _index    leaf                             