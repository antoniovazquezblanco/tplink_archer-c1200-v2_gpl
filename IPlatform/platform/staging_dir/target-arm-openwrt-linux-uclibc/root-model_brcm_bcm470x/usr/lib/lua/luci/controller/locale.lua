--[[
Copyright(c) 2008-2014 Shenzhen TP-LINK Technologies Co.Ltd.

File    :  locale.lua
Details :  Get the locale info.
Author  :  Zhang Zhongwei <zhangzhongwei@tp-link.net>
Version :  1.0.0
Date    :  13 May, 2014
]]--

module("luci.controller.locale", package.seeall)


local nixio = require "nixio"
local uci   = require "luci.model.uci"
local dbg   = require "luci.tools.debug"
local ctl   = require "luci.model.controller"
local log   = require("luci.model.log").Log(283)

local LOCALECFG = "locale"                   -- Config file name.

function log_dbg(msgid, ...)
    log(msgid, ...)
end

function get_sysinfo(formvals)
    local uci_r = uci.cursor()
    local select_permission
    select_permission = uci_r:get_profile("region","select_permission") or "yes"

    local data = {
        locale = uci_r:get(LOCALECFG, "sysinfo", "default") or "en_US",
        force  = uci_r:get(LOCALECFG, "sysinfo", "force") == "true" and true or false,
        model  = uci_r:get(LOCALECFG, "sysinfo", "model") or "AC1900",
        region_select_permission = select_permission
    }
    
    if data.force then
        return data
    end

    local locale = uci_r:get(LOCALECFG, "sysinfo", "locale")
    -- Check whether language has been changed by user.
    if locale then
        -- just do nothing
    else
        -- Get the explorer language.  (e.g. "en-US")
        local web_lang = luci.http.getenv("HTTP_ACCEPT_LANGUAGE") or ""
        local pos      = web_lang:find(",") or 1
        web_lang       = web_lang:sub(1, pos - 1)

        -- Check whether the language package is existed.
        if web_lang and web_lang ~= "" then
            -- Change "en-US" to "en_US".
            locale = web_lang:gsub('-', '_')
            log(2, locale)  -- explorer language is XXX
        else
            -- set default locale
            locale = data.locale
        end
    end

    local file_path  = "/www/webpages/locale/" .. locale .. "/lan.js"

    -- Check the path to determined whether the language is supported.
    if nixio.fs.stat(file_path) then
        data.locale = locale
    end

    -- uci_r:set(LOCALECFG, "sysinfo", "locale", data.locale)
    -- uci_r:commit(LOCALECFG)
    log(51, data.locale)  -- language change to XXX

    return data
end

function get_sysinfo_mobile(formvals)
  local uci_r = uci.cursor()
    local data = {
        locale = "en_US",
        force  = uci_r:get(LOCALECFG, "sysinfo", "force") == "true" and true or false,
		model  = uci_r:get(LOCALECFG, "sysinfo", "model") or "AC1900"
        ---model  = cfgtool.getsysinfo("product_name") or "AC1900"
    }
    
    if data.force then
        return data
    end

    local locale = uci_r:get(LOCALECFG, "sysinfo", "default")
	
    if locale then
    
        -- Check whether language has been changed by user.
        -- Only only In webmobile multi-language
		-- data.locale = locale    
    else
    
        -- Get the explorer language.  (e.g. "en-US")
        local web_lang = luci.http.getenv("HTTP_ACCEPT_LANGUAGE") or ""
        local pos      = web_lang:find(",") or 1
        web_lang       = web_lang:sub(1, pos - 1)

        -- Check whether the language package is existed.
        if web_lang and web_lang ~= "" then
        
            -- Change "en-US" to "en_US".
            locale = web_lang:gsub('-', '_')
            --only In webmobile multi-language local file_path  = "/www/webmobile/locale/" .. lang .. "/locale.json"
            log(2, locale)  -- explorer language is XXX

            -- Check the path to determined whether the language is supported.
            --[[ only In webmobile multi-language
			if nixio.fs.stat(file_path) then
                data.locale = locale
            end
			]]--
        end
         --[[ only In webmobile multi-language
        uci_r:set(LOCALECFG, "sysinfo", "locale", data.locale)
        uci_r:commit(LOCALECFG)
        log(51, data.locale)  
	]]--
		-- language change to XXX
        -- log(601)   -- save success
    end
     --[[ webmobile only one language ]]--
	local file_path  = "/www/webmobile/locale/" .. locale .. "/locale.json"
	
	if nixio.fs.stat(file_path) then
		data.locale = locale
    end
	
    return data
end



function set_sysinfo(formvals)
    local uci_r = uci.cursor()

    -- Check whether support multi languages.
    local force = uci_r:get(LOCALECFG, "sysinfo", "force")
    if force and force == "true" then
        log(201)  -- locale change is forbidden
        return false, "locale change is forbidden"
    end

    local locale = formvals.locale or ""
    locale = (locale == "") and "en_US" or locale

    if not locale:match("^[%w_]+$") then
        return false, "invalid args"
    end

    uci_r:set(LOCALECFG, "sysinfo", "locale", locale)
    uci_r:commit(LOCALECFG)

    log(51, locale)  -- locale change to XXX
    -- log(601)  -- save success
    return true
end

function get_region_list(formvals)
	local data = {
        {value = "bg_BG", name = "BG_BG"},
        {value = "cs_CZ", name = "CS_CZ"},
        {value = "da_DK", name = "DA_DK"},
        {value = "de_DE", name = "DE_DE"},
        {value = "en_US", name = "EN_US"},
        {value = "es_ES", name = "ES_ES"},
        {value = "fi_FI", name = "FI_FI"},
        {value = "fr_FR", name = "FR_FR"},
        {value = "it_IT", name = "IT_IT"},
        {value = "ko_KR", name = "KO_KR"},
        {value = "nl_NL", name = "NL_NL"},
        {value = "no_NO", name = "NO_NO"},
        {value = "pl_PL", name = "PL_PL"},
        {value = "pt_PT", name = "PT_PT"},
        {value = "ro_RO", name = "RO_RO"},
        {value = "ru_RU", name = "RU_RU"},
        {value = "sk_SK", name = "SK_SK"},
        {value = "sv_SE", name = "SV_SE"},
        {value = "th_TH", name = "TH_TH"},
        {value = "tr_TR", name = "TR_TR"},
        {value = "uk_UA", name = "UK_UA"},
        {value = "vi_VN", name = "VI_VN"},
        {value = "zh_TW", name = "ZH_TW"}
	}
	
	return data
end

function multilangs()
	local uci_r = uci.cursor()
	return function(multilang_list, i)
	i = i + 1
	local multilang = multilang_list[i]
	if multilang then
		local lang_code, lang_name, no_autodetect
		= multilang:match("^([^:]*):([^:]*):([^:]*)$")
		no_autodetect = no_autodetect == "y" and true or nil
		return i, lang_code, lang_name, no_autodetect
	end
end, uci_r:get_profile("multilang", "lang"), 0
end

function read_multilangs()
	local data = {}
	
	for _, lang_code, lang_name, no_autodetect in multilangs() do
		data[#data + 1] = {
			value = lang_code,
			name = lang_name,
			no_autodetect = no_autodetect
		}
	end
	
	return data
end


--- Dispatch table
local dispatch_tbl = {
    lang = {
        ["read"]  = {cb = get_sysinfo},
        ["write"] = {cb = set_sysinfo}
    },
	multilang = {
		[".super"] = {cb = read_multilangs}
	},
	mobile_lan = {
        ["read"]  = {cb = get_sysinfo_mobile},
        ["write"] = {cb = set_sysinfo}
	},
	list = {
		["read"]  = {cb = get_region_list},
	}
}

function dispatch(http_form)
    return ctl.dispatch(dispatch_tbl, http_form)
end

function _index()
    return ctl._index(dispatch)
end

--- Module entrance
function index()
    entry({"locale"}, call("_index")).leaf = true
end
