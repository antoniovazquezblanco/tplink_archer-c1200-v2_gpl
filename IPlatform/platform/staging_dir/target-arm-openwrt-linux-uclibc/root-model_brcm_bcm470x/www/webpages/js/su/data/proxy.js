// JavaScript Document
(function($){

$.su.Proxy = function(options){
	var defaults = {
		xtype: "proxy",
		url: null,
		async: true,
		timeout: 10*1000,
		reader: {
			url: null,
			root: "data",
			type: null,
			timeout: null
		},
		writer: {
			url: null,
			root: "data",
			type: null,
			timeout: null
		},
		type: "POST",
		dataType: "json",
		eventId: null
	};

	var settings = $.extend(defaults, options);
	
	//reader
	settings.reader.url = settings.reader.url || settings.url;
	settings.reader.type = settings.reader.type || settings.type;
	settings.reader.timeout = settings.reader.timeout || settings.timeout;
	settings.reader.type = settings.reader.type.toUpperCase();
	//writer
	settings.writer.url = settings.writer.url || settings.url;
	settings.writer.type = settings.writer.type || settings.type;
	settings.writer.timeout = settings.writer.timeout || settings.timeout;
	settings.writer.type = settings.writer.type.toUpperCase();
	

	$.extend(this, settings);
	this.isProxy = true;
};

$.su.Proxy.prototype.read = function(data, callback, callback_fail, callback_error, triggerEvent, scope){
	var data = $.extend({
		"operation": "read"
	}, data);
	
	var me = scope || this,
		operation = "read";
	return $.ajax({
		url: me.reader.url,
		type: me.reader.type,
		timeout: me.reader.timeout,
		dataType: me.dataType,
		async: me.async,
		cache: false,
		data: data,
		traditional: true,
		success: function(data, status, xhr){
			if (data.success){
				me.callbackSuccess(data, callback, triggerEvent, operation, status, xhr, scope);
			}else{
				//进入配置失败机制
				me.callbackFail(data, callback_fail, triggerEvent, operation, status, xhr, scope);
			};
			if(me.eventId){
				//修改当前事件标志位，当所有事件均被点燃，触发对应事件
				$.su.app.runningModule.fire(me.eventId);
			}
		},
		error: function(xhr, status, type){
			me.callbackError(callback_error, triggerEvent, operation, scope, xhr, status, type);
			if(me.eventId){
				//修改当前事件标志位，当所有事件均被点燃，触发对应事件
				$.su.app.runningModule.fire(me.eventId);
			}
		}
	});
};

$.su.Proxy.prototype.write = function(data, callback, callback_fail, callback_error, triggerEvent, scope){
	var data = $.extend({
		"operation": "write"
	}, data);
	
	var me = scope || this,
		operation = "write";
	return $.ajax({
		url: me.writer.url,
		type: me.writer.type,
		timeout: me.writer.timeout,
		dataType: me.dataType,
		cache: false,
		async: me.async,
		data: data,
		traditional: true,
		success: function(data, status, xhr){
			if (data.success){
				me.callbackSuccess(data, callback, triggerEvent, operation, status, xhr, scope);
			}else{
				//进入配置失败机制
				me.callbackFail(data, callback_fail, triggerEvent, operation, status, xhr, scope);
			};
			if(me.eventId){
				//修改当前事件标志位，当所有事件均被点燃，触发对应事件
				$.su.app.runningModule.fire(me.eventId);
			}
		},
		error: function(xhr, status, type){
			me.callbackError(callback_error, triggerEvent, operation, scope, xhr, status, type);
			if(me.eventId){
				//修改当前事件标志位，当所有事件均被点燃，触发对应事件
				$.su.app.runningModule.fire(me.eventId);
			}
		}
	});
};

$.su.Proxy.prototype.callbackSuccess = function(data, callback, triggerEvent, operation, status, xhr, scope){
	var me = scope || this,
		callback = callback || function(){},
		triggerEvent = triggerEvent === false ? false: true;
	var root = operation == "read" ? me.reader.root : me.writer.root,
		ev_type = "ev_" + operation,
		result = null;
	if (root){
		result = data[root];
	}
	else{
		result = data;
	};

	callback.call(me, result, data.others, status, xhr);
	if (triggerEvent){
		$(me).trigger(ev_type, [result, data.others, status, xhr]);
	};
};

$.su.Proxy.prototype.callbackFail = function(data, callback_fail, triggerEvent, operation, status, xhr, scope){
	var me = scope || this,
		callback_fail = callback_fail || function(){},
		triggerEvent = triggerEvent === false ? false: true;
	switch(data.errorcode){
		case "timeout":
			location.href = "/";
			break;
		case "user conflict":
			if ($.su.app && $.su.app.errorOperation && $.su.app.errorOperation.userConflict){
				$.su.app.errorOperation.userConflict();
			};
			break;
		case "permission denied":
			if ($.su.app && $.su.app.errorOperation && $.su.app.errorOperation.denied){
				$.su.app.errorOperation.denied();
			};
			break;
		default:	
	};
				
	callback_fail.call(me, data.errorcode, data.others, data.data);
	$(me).trigger("ev_failed", [data.errorcode, data.others, data.data]);
};

$.su.Proxy.prototype.callbackError = function(callback_error, triggerEvent, operation, scope, xhr, status, type){
	var me = scope || this,
		callback_error = callback_error || function(){},
		triggerEvent = triggerEvent === false ? false: true;
	var url = operation == "read" ? me.reader.url : me.writer.url;
	
	if (!me.preventErrorDefault){
	};
	if(operation == "read"){
		callback_error.call(me, xhr, status, type, url);
	}
	else{
		callback_error.call(me, xhr, status, type);
	}
	$(me).trigger("ev_error", [xhr, status, type, url]);
};


})(jQuery);