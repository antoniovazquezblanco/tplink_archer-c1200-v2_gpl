LuaQ               <      H@  "� A   ��  b� �   ��  �� �    �  A�"�� @�A��A�   � !      �     � aB      � �  ��      �     ���      �    !     �    EC D��DC�D���D��D���C     �     ��� # �       require    luci.tools.debug 	   luci.sys    cloud.cloud_error    luci.model.uci    cursor 	   ERR_CODE    ERR_MSG    luci.fs    newFirmware    legalDevice    illegalDevice    stopConnect    heartBeatInterval    run        
       >   E   � @ �@@�@    ��   ��@ �@@A�AA��AM����M�A@�M��� �M�A@ ��� �
   BHB "B 
� J @��@��@�D@
�J @��@��@B�D@@�
   BH� ����  H ���C  W�"B 
� J @��@��@�D@
  �DH "B c  # �       params 
   attribute    fwUpdateType    displayType    retainedMessageBar    content    msgId     print D   Can not find fwUpdateType/displayType/retainedMsgBar/content/msgId. 
   ERROR_MSG    ERROR_PARAMETER_INVALID 	   	      firmware, update type:    , display type:    , retain msg bar:    , content:    ERROR_NONE 
   fork_exec    cloud_getFwList                         ,       E   �   � @�@  �@ ��  �  �  � �
�  A[�"A 
 J�@A�@��@��D@c  # �       print    notifyEvent:legalDevice    /tmp/cloud 	   /illegal    unlink 
   ERROR_MSG    ERROR_NONE 	                       .   b    
�   E   � @ �@@M�@ �� @ �@@��@�@ ��   � A�@ �@ � � �  ������� �D� � ��  �������@�D� @�� @ �@@��@Ȁ 
  �B[�"� A   �
  C[��� "A��HA A� ��	�A� @�� �A b��Y  ������ [ " �A  ���A �� � ����A���D���� ����A��A�D����� � ��������D���� �������A�D�@��C��J @��� bA J� � ��A�AE�BD��J�� ��A�AE�ABD�� B �J  @�� bA  �@B �J  @��A bA @��F �J  @��� bA �� G �J  @��A bA ��� �@�J  @��� � ��bA c  # �        params 
   attribute     illegalType    print    illegalType can not be nil 
   ERROR_MSG    ERROR_PARAMETER_INVALID 	   	      /tmp/cloud    isdirectory    mkdir 	   /illegal 	       io    open    w    write 	   tostring    close    ERROR_NONE    ERROR_FILE_OP    unlink    Device ID doesn't exist. '   Device ID, mac and hwId doesn't match. 	   %   Get device basic information failed. 	   +   Device with ths same ID is already online. 	      Unsupported illegal type:                     d   r    :   E   � @ �@@M�@@�� @ �@@��@M�@ �� @ �@@� A�@ ��   �@AȀ �@ � � �  ���� ��@�D� � ��  ���� ����D� ��� @ �@@��@� @ �@�� �
   AAH� � W��"A 
   AAH ��W��"A 
� J @��@A�@A�D@c  # �       params 
   attribute     reconnectTime    reason    print $   reconnectTime/reason can not be nil 
   ERROR_MSG    ERROR_PARAMETER_INVALID 	   	      reconnectTime:    reason:    ERROR_NONE                     t   �    ,   E   � @ �@@M�@ �� @ �@@��@�@ ��   � A�@ �@ � � �  ������� �D� � ��  �������@�D� ��� @ �@@��@�   � �� [ A�@ � � 
  �A �B BD �c  # �       params 
   attribute  	   interval    print    interval can not be nil 
   ERROR_MSG    ERROR_PARAMETER_INVALID 	   	   
   interval:    ERROR_NONE                     �   �    6   E   M @ ���@@ M @� ��@@ ��@ @ ��   ��@�  �@ � � �  �@�������D� � ��  �@����� �D� c  �  �@@ ����� M @@��@  � �� ��    � [ � ��   ���� @A@ @��A�@ � ��  c  # �        params    event    print 4   notifyEvent data/params/params.event can not be nil 
   ERROR_MSG    ERROR_PARAMETER_INVALID 	   	      type 	   function "   Do not support notifyEvent event:                             