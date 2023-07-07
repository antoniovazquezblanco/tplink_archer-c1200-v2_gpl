--[[
Copyright(c) 2008-2016 Shenzhen TP-LINK Technologies Co.Ltd.

File    :  theme.lua
Details :  Get the theme info.
Author  :  Zhang Zhongwei <liqiang@tp-link.net>
Version :  1.0.0
Date    :  14 June, 2016
]]--

module("luci.controller.theme", package.seeall)

local nixio = require "nixio"
local uci   = require "luci.model.uci"
local ctl   = require "luci.model.controller"
local log   = require("luci.model.log").Log(283)
local dbg   = require "luci.tools.debug"
local cfgtool = require "luci.sys.config"

local THEMECFG = "theme"


function get_sysinfo(formvals)
	local uci_r = uci.cursor()
	local lcurtheme = uci_r:get(THEMECFG, "sysinfo", "curtheme") or "blue"
	local lforce = uci_r:get(THEMECFG, "sysinfo", "force")
	
	if lforce == "false" then 
		lforce = false
	else
		lforce = true
	end
	

	local data = {
		curtheme = lcurtheme,
		force = lforce
		--curtheme = uci_r:get(THEMECFG, "sysinfo", "curtheme") or "blue",
		--force = uci_r:get(THEMECFG, "sysinfo", "force") == "false" and false or true
	}
		
	--[[
	if lcurtheme then
		data.curtheme = lcurtheme
	end
	]]--

	return data

end

function  set_sysinfo(formvals)
	local uci_r = uci.cursor()
	local lforce = uci_r:get(THEMECFG, "sysinfo", "force") == "false" and false or true
	
	if lforce and lforce == "true" then		
		return false
	end

	local ltheme = formvals.curtheme or ""
	ltheme = (ltheme == "") and "blue" or ltheme
	
	uci_r:set(THEMECFG, "sysinfo", "curtheme", ltheme)
	uci_r:commit(THEMECFG)
		
	return true
end

function get_multithemes_from_profile()
	local uci_r = uci.cursor()

	return function(multitheme_list, i)
	i = i + 1
	local multitheme = multitheme_list[i] 
	if multitheme then
		local theme_code , theme_name = multitheme:match("^([^:]*):([^:]*)$")
		return i, theme_code, theme_name
	end
	end, uci_r:get_profile("multitheme", "theme"), 0

end

function  read_multithemes()
	local	data = {}
	local	uci_r = uci.cursor()

	if uci_r:get_profile("multitheme", "theme") == nil  then 
		data[#data + 1] = {
			value = "blue",
			name = "Blue"
		}
		return data
	end

	for _, theme_code, theme_name in get_multithemes_from_profile() do
		data[#data + 1] = {
			value = theme_code,
			name = theme_name
		}
	
	end
	return data
end

--- Dispatch table
local dispatch_tbl = {
    changeTheme  = {
					["read"]  = {cb = get_sysinfo},
					["write"] = {cb = set_sysinfo},
				},
	multitheme = {
					[".super"] = {cb = read_multithemes}
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
	entry({"theme"}, call("_index")).leaf = true
end

