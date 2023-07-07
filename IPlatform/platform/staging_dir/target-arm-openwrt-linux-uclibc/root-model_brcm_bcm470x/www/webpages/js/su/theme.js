(function($){
$.su = $.su || {};

$.su.url = function(url){
	var url = $.su.url.subs + $.su.url.stok + url;
	return url;
};

$.su.ozkerurl = function(url){
	var url = $.su.url.ozkersubs + $.su.url.stok + url;
	return url;
};

$.su.url.ozkersubs = "/cgi-bin/ozker/;stok=";

$.su.url.subs = "/cgi-bin/luci/;stok=";
/*$.su.url.stok = (function(){
	var stok = "12345",
		href = top.location.href;
	var stokPos = href.indexOf("stok=");
	if (stokPos >= 0){
		stok = href.substring(stokPos+5);
	};
	return stok;
})();*/

$.su.url.stok = "";

$.su.theme = {

	URL_LAN_CHECK: "./data/theme.json",

    DEFAULT_THEME_TYPE: "blue",

    URL_WIDGET_CSS: "themes/%CURTHEME%/css/widget.css",
    URL_IE_CSS: "themes/%CURTHEME%/css/ie.css",
    URL_STYLE_CSS: "themes/%CURTHEME%/css/style.css",
	
    curtheme: "blue"
	
};

$.su.theme.get = function(callback_success, callback_failed){
    var me = this;

	var URL_LAN_CHECK = this.URL_LAN_CHECK;

	var URL_WIDGET_CSS = this.URL_WIDGET_CSS;
	var URL_IE_CSS = this.URL_IE_CSS;
	var URL_STYLE_CSS = this.URL_STYLE_CSS;
    
    $.ajax({
    	type: "POST",
        url: URL_LAN_CHECK,
        async: false,
        dataType: "json",
        data:{
        	"operation": "read"
        },
        success: function(data){
        	if (data.success && data.data && data.data.curtheme){
        		$.su.theme.changeType(data.data);
        	}else{
                $.su.theme.setDefault();
            };
        	
            if (callback_success){
                callback_success.call(me);
            };
        },
        error: function(){
            $.su.theme.setDefault();
            if (callback_failed){
                callback_failed.call(me);
            };
        }
    });
};
$.su.theme.set = function(themeType, callback_success, callback_failed){
    var me = this;
	if (!themeType){
		return;
	}

	var URL_LAN_CHECK = this.URL_LAN_CHECK;

	var URL_WIDGET_CSS = this.URL_WIDGET_CSS;
	var URL_IE_CSS = this.URL_IE_CSS;
	var URL_STYLE_CSS = this.URL_STYLE_CSS;
	
    $.ajax({
    	type: "POST",
        url: URL_LAN_CHECK,
        async: false,
        dataType: "json",
        cache: false,
        data:{
        	"operation": "write",
        	"curtheme": themeType
        },
        success: function(data){
        	location.reload();
            if (callback_success){
                callback_success.call(me);
            };
        },
        error: function(){
            $.su.theme.setDefault();
            if (callback_failed){
                callback_failed.call(me);
            };
        }
    });
};
$.su.theme.changeType = function(data){
	var themeType = data.curtheme || this.DEFAULT_THEME_TYPE,
        force = data.force === true ? true : false;
       
	
	var URL_WIDGET_CSS = this.URL_WIDGET_CSS.replace("%CURTHEME%", themeType);
	var URL_IE_CSS = this.URL_IE_CSS.replace("%CURTHEME%", themeType);
	var URL_STYLE_CSS = this.URL_STYLE_CSS.replace("%CURTHEME%", themeType);
	

    this.curtheme = themeType;
    this.force = force;
    

	$("link#widget-css").remove();
	$("link#style-css").remove();
	//$("link#ie-css").remove();

	
	$("head").append("<link id=\"widget-css\" type=\"text/css\" rel=\"stylesheet\" href=\""+URL_WIDGET_CSS+" \"/>");
	$("head").append("<link id=\"style-css\" type=\"text/css\" rel=\"stylesheet\" href=\""+URL_STYLE_CSS+" \"/>");
	//$("head").append("<link id=\"ie-css\" type=\"text/css\" rel=\"stylesheet\" href=\""+URL_IE_CSS+" \"/>");
    //console.log("this", this)
	
};

$.su.theme.setDefault = function(){
	this.changeType({
        "curtheme": this.DEFAULT_THEME_TYPE,
        "force": false
    });
};

})(jQuery);