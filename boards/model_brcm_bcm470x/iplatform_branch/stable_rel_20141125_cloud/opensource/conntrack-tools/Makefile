#
# Copyright (C) 2009-2011 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=conntrack-tools
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tar.bz2
PKG_SOURCE_URL:= \
	http://www.netfilter.org/projects/conntrack-tools/files \
	ftp://ftp.netfilter.org/pub/conntrack-tools \
	http://mirrors.evolva.ro/netfilter.org/conntrack-tools
PKG_MD5SUM:=5add24d4761baf17af630d5627a71752

PKG_FIXUP:=autoreconf
PKG_INSTALL:=1

include $(INCLUDE_DIR)/package.mk

define Package/conntrack-tools
  SECTION:=TP-LINK
  CATEGORY:=TP-LINK iplatform apps
  DEPENDS:=+libnetfilter-conntrack
  SUBMENU:=Firewall
  TITLE:=Connection tracking userspace tools
  URL:=http://conntrack-tools.netfilter.org/
endef

define Package/conntrack-tools/description
 The conntrack-tools are a set of free software userspace tools for Linux
 that allow system administrators interact with the Connection Tracking
 System, which is the module that provides stateful packet inspection for
 iptables. The conntrack-tools are the userspace daemon conntrackd and the
 command line interface conntrack.
endef

define Package/conntrack-tools/conffiles
/etc/conntrackd/conntrackd.conf
endef

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	$(CP) ./src/* $(PKG_BUILD_DIR)
endef

define Package/conntrack-tools/install
	$(INSTALL_DIR) $(1)/etc/conntrackd
	$(INSTALL_CONF) \
		$(PKG_BUILD_DIR)/doc/stats/conntrackd.conf \
		$(1)/etc/conntrackd/
	$(INSTALL_DIR) $(1)/usr/sbin
	$(INSTALL_BIN) \
		$(PKG_INSTALL_DIR)/usr/sbin/conntrack \
		$(PKG_INSTALL_DIR)/usr/sbin/conntrackd \
		$(1)/usr/sbin/
endef

$(eval $(call BuildPackage,conntrack-tools))
