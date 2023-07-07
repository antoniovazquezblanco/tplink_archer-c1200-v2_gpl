(function($){$.su.Widget("file",{defaults:{fieldLabel:"",tips:"",cls:"",inputCls:"l",buttonText:$.su.CHAR.OPERATION.FILEBUTTONTEXT,blankText:$.su.CHAR.OPERATION.FILEBLANKTEXT,extension:"txt, ai, docx",extensionErrorText:$.su.CHAR.ERROR["00000074"]},create:function(defaults,options){var me=this;me.each(function(i,obj){var tar=$(this);if(!tar.is("input[type=file]")){return null}$.extend(this,defaults,options);var inHTML='<div class="container widget-container text-container file-container">';if(this.fieldLabel!==null){inHTML+='<div class="widget-fieldlabel-wrap '+this.labelCls+'">';inHTML+='<label class="widget-fieldlabel text-fieldlabel">'+this.fieldLabel+"</label>";if(this.fieldLabel!==""){inHTML+='<span class="widget-separator">'+this.separator+"</span>"}inHTML+="</div>"}inHTML+='<div class="file-wrap-outer widget-wrap-outer">';inHTML+='<div class="file-wrap widget-wrap">';inHTML+='<div class="widget-wrap text-wrap">';inHTML+='<span class="text-wrap-before"></span>';inHTML+='<span class="text-wrap">';inHTML+='<label class="file-text text-text '+obj.inputCls+'"></label>';inHTML+="</span>";inHTML+='<span class="text-wrap-after"></span>';inHTML+="</div>";inHTML+='<div class="button-container file-button-container inline-block">';inHTML+='<button class="file-button button-button" type="button">';inHTML+='<span class="button-button-before"></span>';inHTML+='<span class="text button-text">'+this.buttonText+"</span>";inHTML+="</button>";inHTML+="</div>";inHTML+="</div>";if(this.tips){inHTML+='<div class="widget-tips textbox-tips '+obj.tipsCls+'">';inHTML+='<div class="content tips-content"></div>';inHTML+="</div>"}inHTML+='<div class="widget-error-tips textbox-error-tips '+obj.errorTipsCls+'">';inHTML+='<span class="widget-error-tips-delta"></span>';inHTML+='<div class="widget-error-tips-wrap">';inHTML+='<div class="content error-tips-content"></div>';inHTML+="</div>";inHTML+="</div>";inHTML+="</div>";inHTML+="</div>";var container=$(inHTML);tar.replaceWith(container);container.find("div.file-wrap").append(tar.addClass("file-input").prop("single",true));container.find("div.file-wrap").append('<div class="file-text-hover"></div>')});var contaienr=$(me.parents("div.file-container").get(0));contaienr.delegate("button.file-button","click",function(e){contaienr.find("input.file-input").click()});contaienr.delegate("label.file-text","click",function(e){contaienr.find("button.file-button").click()});contaienr.find("input.file-input").on("change",function(e){var tar=$(this),value=tar.val();var p=/.+(?=\\)/g;var v=value.toString().match(p);if(v&&v[0]&&v[0].length){v=value.substring(v[0].length+1)}else{v=value}contaienr.find("label.file-text").html(v);contaienr.find("label.file-text").attr("title",v);if(value){me.file("validate")}});me.file("setTips",options.tips);return me},validate:function(me){var me=me||this,obj=me.get(0),value=me.val(),extension=obj.extension.replace(/\s/g,"");var extensions=extension.split(","),fileExtension="",extensionPass=false;if(value==""){me.file("setError",obj.blankText);extensionPass=false}else{var tmp=value.split("."),fileExtension=tmp[tmp.length-1];for(var index=0,len=extensions.length;index<len;index++){if(fileExtension===extensions[index]){extensionPass=true;break}}if(!extensionPass){me.file("setError",obj.extensionErrorText)}else{me.file("setNormal")}}me.triggerHandler("ev_validatechange",extensionPass);return extensionPass}})})(jQuery);