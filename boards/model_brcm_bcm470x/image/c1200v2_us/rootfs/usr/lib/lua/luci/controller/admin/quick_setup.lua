LuaQ                     H@    ΐ@"@  H@ " A   b   Θΐ ’ Α   β !  A !A      Α EΑ  Α  Ϋ  ΧΑΔΕ   ΒDBEίA ΑD Ϋ Β ΧΑΔAFΕ Β  FΒFBGEΒ  DGDΒGDHΒ  BHHΒHΕΒ  ΔIΔBIΔIΓ  ΓIJCJEΓ  DJDΓJDKίA ΑDΑ  Ϋ  ΧΑΑΛΕ  LBLE DLDΒLDMDBM  MΒMίAΑD‘    ‘Α   A ‘     ‘A Α Α  Ε  B  A BΔB  AB BΔΑΕA  B  A BΔΑΕA  B  AΒ BΔΑα     Β αΑ   ΒΑ α Β #  A      module "   luci.controller.admin.quick_setup    package    seeall    require 	   luci.sys 
   luci.util    luci.model.controller    luci.tools.debug    updateonly_and_prefix    get_wire_type    luci.controller.admin    time    controller    .timesetting    target 	   dispatch    forms    form 	   settings    prefix    time_    network 	   .network 
   limit_key    network_conntype    wan_ipv4_status 	   network_    limit    status    wan_ipv4_dynamic    network_dhcp_    dhcp    wan_ipv4_staticip    network_static_    static    wan_ipv4_pppoe    network_pppoe_    pppoe    wan_ipv4_l2tp    network_l2tp_    l2tp    wan_ipv4_pptp    network_pptp_    pptp 	   wireless 
   .wireless    wireless_dispatch    wireless_2g    wireless_2g_    wireless_5g    wireless_5g_    wireless_5g_region_enable    on    region    region_    read    write    check_internet    check_router    quick_setup    cb    .super    _index    index 	                  @       Ω   ΐA  [" [  W    ώ@  [ "ΐ [ W   @ώ#            ipairs    pairs                        (        
     @ H@  " A  ΐ  b @ Α b @ Ϋ  ’ ΐA ΐΐΑA Β Θ ΩA    ΘA γ   ό  £  #  
      getenv    REMOTE_ADDR    require    luci.model.client_mgmt    get_client_list    ipairs    ip 
   wire_type    wired 	   wireless                     L   g    6   E   @  ’ D   Α  
  β @	Β  @Α" @BΑ BA  b ΐΑ  @ 	B  	   A  Βb   ΐCΒΓΓBΫ  β  Γ  @D [ ΓΐΔΓ"D      ^   ϋή  ΐυΪ    Ϋ  γ  #     
   wire_type    get_wire_type    pairs    require    controller    target    type 	   function    forms    form 
   operation    read    success    updateonly_and_prefix    data    prefix                     i       Q   E     Α   
  β ΐ  @Βΐ" @Bΐ BB   AB  " @A@ B  @ 	B  	 B  B       @Α"
@ΓAYC    @ΓΑY  ΐ BΐC ΐ CBMB@  ΐCBΓΓΑ    βEC	ΕC"    Γ
ή  ύΑC   β  Δ  @D [ ΔΐΔC"D        τή  @ξΪ    Ϋ  γ  #        pairs    target    require    controller    type 	   function    forms 
   limit_key    limit    form    region 
   operation    write    match 	   ^%s(.*)$    prefix    success    updateonly_and_prefix    data                            
   J   @ ΐ @  b Mΐ   I@  I  c  #        call    online-test 	                                   A   @  b @ΐ b ΐΐ ’ M A  @    £  #        require    luci.model.internet 	   Internet    status 
   connected                     Ν   Ο       J   @ ΐ   Ϋ   d c   #     	   dispatch                     Ρ   Σ        
     @ A@  $  #   #        _index 	   dispatch                     Υ   Χ            E  @  Θ  _@ ΐ  Θ  ’  "  Α#        entry    admin    quick_setup    call    _index    leaf                             