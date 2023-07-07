(function($){$.su.Widget("editor",{defaults:{columns:null,grid:null,editing:false,pluginId:"",editingId:null,form:null,successCallback:null,errorCallback:null,failCallback:null,beforeSubmit:null,items:null,content:null,fields:null},create:function(defaults,options){var me=this;me.each(function(i,obj){$.extend(this,defaults,options);var tar=$(obj),columns=obj.columns;var inHTML='<td class="editor-container" colspan="'+columns.length+'">';inHTML+='<div class="container editor-content-container"></div>';inHTML+='<div class="container editor-buttons-container">';inHTML+='<span class="form-error-tips"></span>';inHTML+='<div class="button-container submit">';inHTML+='<button type="button" class="editor-btn btn-cancel button-button">';inHTML+='<span class="button-button-before"></span>';inHTML+='<span class="button-text text">'+$.su.CHAR.OPERATION.CANCEL+"</span>";inHTML+="</button>";inHTML+="</div>";inHTML+='<div class="button-container submit">';inHTML+='<button type="button" class="editor-btn btn-submit button-button">';inHTML+='<span class="button-button-before"></span>';inHTML+='<span class="button-text text">'+$.su.CHAR.OPERATION.SAVE+"</span>";inHTML+="</button>";inHTML+="</div>";inHTML+="</div>";inHTML+="</td>";var form=$(inHTML);tar.append(form).addClass("container widget-container editor-container");var editorContentContainer=tar.find("div.editor-content-container");var fields=[];for(var index=0;index<columns.length;index++){var column=columns[index],editorType=columns[index]["editor"];if(editorType){var editor=$("<input />");editorContentContainer.append(editor);if($.type(editorType)==="string"){editor[editorType]({fieldLabel:column.text||"",name:column.name||column.dataIndex||""})}else{if(editorType.xtype){var opt=$.extend({},editorType,{fieldLabel:column.text||"",name:column.name||column.dataIndex||""});editor[editorType.xtype](opt)}else{return null}}fields.push({name:column.name||column.dataIndex||""})}}if(obj.items){for(var index=0,len=obj.items.length;index<len;index++){var item=obj.items[index],editor=$("<input />");editorContentContainer.append(editor);editor[item.xtype]($.extend({},item));fields.push({name:item.name})}}if(obj.content&&obj.content!="default"){if(!obj.fields){return}editorContentContainer.append($(obj.content).detach())}$.extend(fields,obj.fields);$.extend(options,{fields:fields});form.form(options);obj.pluginId=$.su.randomId("editor");obj.isEditor=true});me.delegate("button.btn-submit","click",function(e){e.stopPropagation();$("button.btn-submit").attr("disabled",true);var obj=me.get(0);if(obj.beforeSubmit){var t=obj.beforeSubmit();if(!t){$("button.btn-submit").attr("disabled",false);return}}me.editor("completeEdit")});me.delegate("button.btn-cancel","click",function(e){e.stopPropagation();me.editor("cancelEdit")});var grid=me.get(0).grid;if(!grid||grid.length==0||!grid.get(0).isGrid){return null}grid.delegate("a.grid-content-btn.grid-content-btn-edit","click",function(e){e.preventDefault();e.stopPropagation();var btn=$(this),tr=btn.closest("tr.grid-content-tr");if(tr.hasClass("disabled")){return}var key=btn.attr("data-key"),index=btn.attr("data-index"),editor=me;if(editor){var editorObj=editor.get(0);if(editorObj&&editorObj.isEditor){if(editorObj.editing===false){editor.editor("startEdit",key)}else{editor.editor("shake")}}}});me.css("display","none");return me},hide:function(me){var me=me||this;me.detach().css("display","none");return me},shake:function(me){var me=me||this;me.queue(function(){$(this).addClass("shaking");$(this).dequeue()});me.delay(80);me.queue(function(){$(this).removeClass("shaking");$(this).dequeue()});me.delay(80);me.queue(function(){$(this).addClass("shaking");$(this).dequeue()});me.delay(80);me.queue(function(){$(this).removeClass("shaking");$(this).dequeue()});return me},startEdit:function(me,params){var me=me||this,obj=me.get(0),editingId=params[1]||"add",grid=me.get(0).grid,gridObj=grid.get(0),store=grid.get(0).store,targetTr=null,form=me.find("td.editor-container");me.editor("hide");form.form("setNormal");obj.editing=true;obj.editingId=editingId;obj.editingIndex="add";if(editingId!="add"){var data=store.getData(editingId),editingIndex=store.getIndex(editingId);obj.editingIndex=editingIndex;obj.adding=false;if(data){form.form("loadData",data)}else{form.form("reset")}targetTr=gridObj.rows[editingIndex];if(targetTr){targetTr.addClass("editing");grid.grid("disableRow",editingIndex)}}else{me.get(0).adding=true;form.form("reset");var dataContainer=grid.find("tbody.grid-content-data"),fistTr=dataContainer.find("tr.grid-content-tr").eq(0);if(fistTr.hasClass("empty")){targetTr=fistTr}else{targetTr=me.grid("initEmptyRow");dataContainer.prepend(targetTr)}targetTr.addClass("editing add disabled")}me.insertAfter(targetTr);me.slideDown(300);me.trigger("ev_startEdit",[obj.editingIndex,obj.editingId]);return me},completeEdit:function(me){var me=me||this,form=me.find("td.editor-container"),obj=me.get(0),grid=obj.grid,listIndex=obj.editingIndex,store=grid.get(0).store,editingId=obj.editingId,len=0;if(form.form("validate")){var dNew=form.form("serialize"),dOld=null;grid.grid("runProgress");if(editingId!="add"){dOld=store.getData(editingId);store.update(editingId,{old:$.su.json.toJSONString(dOld),"new":$.su.json.toJSONString(dNew)},function(){grid.grid("prompt",true);if(obj.successCallback){obj.successCallback(arguments)}me.editor("cancelEdit")},function(){grid.grid("prompt",false);if(obj.errorCallback){obj.errorCallback(arguments)}},function(){grid.grid("prompt",false);if(obj.failCallback){obj.failCallback(arguments)}})}else{store.insert(len,{old:"add","new":$.su.json.toJSONString(dNew)},function(){grid.grid("prompt",true);if(obj.successCallback){obj.successCallback(arguments)}me.editor("cancelEdit")},function(){grid.grid("prompt",false);if(obj.errorCallback){obj.errorCallback(arguments)}},function(){grid.grid("prompt",false);if(obj.failCallback){obj.failCallback(arguments)}})}me.get(0).adding=false}else{setTimeout(function(){$("button.btn-submit").attr("disabled",false)},500)}return me},cancelEdit:function(me){var me=me||this,obj=me.get(0),grid=me.get(0).grid,gridObj=grid.get(0),editingIndex=obj.editingIndex;var tr=null;if(editingIndex!=="add"){gridObj.rows[editingIndex].removeClass("editing");grid.grid("enableRow",editingIndex)}else{grid.find("tr.grid-content-tr.add").remove()}me.editor("hide");obj.editing=false;obj.editingIndex="";grid.grid("updateRowNumber");return me},isEditing:function(me){var me=me||this;if(me.get(0).editing){return true}else{return false}},getEditingId:function(me){var me=me||this;if(me.get(0).editing){return me.get(0).editingId}else{return undefined}}})})(jQuery);