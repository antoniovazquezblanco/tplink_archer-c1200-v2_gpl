#
# Copyright (C) 2006-2012 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=openssl
PKG_VERSION:=1.0.1e
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=http://www.openssl.org/source/ \
	ftp://ftp.funet.fi/pub/crypt/mirrors/ftp.openssl.org/source \
	ftp://ftp.sunet.se/pub/security/tools/net/openssl/source/
PKG_MD5SUM:=66bf6f10f060d561929de96f9dfe5b8c

PKG_LICENSE:=SSLEAY OPENSSL
PKG_LICENSE_FILES:=LICENSE
PKG_BUILD_DEPENDS:=ocf-crypto-headers
PKG_CONFIG_DEPENDS:=CONFIG_OPENSSL_ENGINE_CRYPTO CONFIG_OPENSSL_ENGINE_DIGEST

include $(INCLUDE_DIR)/package.mk

define Package/openssl/Default
  TITLE:=Open source SSL toolkit
  URL:=http://www.openssl.org/
endef

define Package/libopenssl/config
source "$(SOURCE)/Config.in"
endef

define Package/openssl/Default/description
The OpenSSL Project is a collaborative effort to develop a robust,
commercial-grade, full-featured, and Open Source toolkit implementing the Secure
Sockets Layer (SSL v2/v3) and Transport Layer Security (TLS v1) protocols as well
as a full-strength general purpose cryptography library.
endef

define Package/libopenssl
$(call Package/openssl/Default)
  SECTION:=TP-LINK
  CATEGORY:=TP-LINK iplatform apps
  SUBMENU:=SSL
  DEPENDS:=+zlib
  TITLE+= (libraries)
  MENU:=1
endef

define Package/libopenssl/description
$(call Package/openssl/Default/description)
This package contains the OpenSSL shared libraries, needed by other programs.
endef

define Package/openssl-util
  $(call Package/openssl/Default)
  SECTION:=TP-LINK
  CATEGORY:=TP-LINK iplatform apps
  SUBMENU:=SSL
  DEPENDS:=+libopenssl
  TITLE+= (utility)
endef

define Package/openssl-util/conffiles
/etc/ssl/openssl.cnf
endef

define Package/openssl-util/description
$(call Package/openssl/Default/description)
This package contains the OpenSSL command-line utility.
endef


OPENSSL_NO_CIPHERS:= no-idea no-md2 no-mdc2 no-rc5 no-sha0 no-smime \
	no-rmd160 no-aes192 no-ripemd no-camellia no-ans1 no-krb5
OPENSSL_OPTIONS:= shared no-ec no-err no-hw zlib-dynamic no-sse2

ifdef CONFIG_OPENSSL_ENGINE_CRYPTO
  OPENSSL_OPTIONS += -DHAVE_CRYPTODEV
  ifdef CONFIG_OPENSSL_ENGINE_DIGEST
    OPENSSL_OPTIONS += -DUSE_CRYPTODEV_DIGESTS
  endif
else
  OPENSSL_OPTIONS += no-engines
endif

ifeq ($(CONFIG_x86_64),y)
  OPENSSL_TARGET:=linux-x86_64
else
  OPENSSL_OPTIONS+=no-sse2
  ifeq ($(CONFIG_mips)$(CONFIG_mipsel),y)
    OPENSSL_TARGET:=linux-mips-openwrt
  else
    ifeq ($(CONFIG_OPENSSL_CPU_ARMV7),y)
      OPENSSL_TARGET:=linux-armv4-openwrt
    else
      OPENSSL_TARGET:=linux-generic-openwrt
      OPENSSL_OPTIONS+=no-perlasm
    endif
  endif
endif

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	$(CP) ./src/* $(PKG_BUILD_DIR)
endef

define Build/Configure
	(cd $(PKG_BUILD_DIR); \
		./Configure $(OPENSSL_TARGET) \
			--prefix=/usr \
			--openssldir=/etc/ssl \
			$(TARGET_CPPFLAGS) \
			$(TARGET_LDFLAGS) -ldl \
			-DOPENSSL_SMALL_FOOTPRINT \
			$(OPENSSL_NO_CIPHERS) \
			$(OPENSSL_OPTIONS) \
	)
endef

TARGET_CFLAGS += $(FPIC)

define Build/Compile	
	# XXX: OpenSSL "make depend" will look for installed headers before its own,
	# so remove installed stuff first
	-$(SUBMAKE) -j1 clean-staging
	$(MAKE) -C $(PKG_BUILD_DIR) \
		MAKEDEPPROG="$(TARGET_CROSS)gcc" \
		OPENWRT_OPTIMIZATION_FLAGS="$(TARGET_CFLAGS)" \
		$(OPENSSL_MAKEFLAGS) \
		depend
	$(_SINGLE)$(MAKE) -C $(PKG_BUILD_DIR) \
		CC="$(TARGET_CC)" \
		AR="$(TARGET_CROSS)ar r" \
		RANLIB="$(TARGET_CROSS)ranlib" \
		OPENWRT_OPTIMIZATION_FLAGS="$(TARGET_CFLAGS)" \
		$(OPENSSL_MAKEFLAGS) \
		all
	$(MAKE) -C $(PKG_BUILD_DIR) \
		CC="$(TARGET_CC)" \
		AR="$(TARGET_CROSS)ar r" \
		RANLIB="$(TARGET_CROSS)ranlib" \
		OPENWRT_OPTIMIZATION_FLAGS="$(TARGET_CFLAGS)" \
		$(OPENSSL_MAKEFLAGS) \
		build-shared
	# Work around openssl build bug to link libssl.so with libcrypto.so.
	-rm $(PKG_BUILD_DIR)/libssl.so.*.*.*
	$(MAKE) -C $(PKG_BUILD_DIR) \
		CC="$(TARGET_CC)" \
		OPENWRT_OPTIMIZATION_FLAGS="$(TARGET_CFLAGS)" \
		$(OPENSSL_MAKEFLAGS) \
		do_linux-shared
	$(MAKE) -C $(PKG_BUILD_DIR) \
		CC="$(TARGET_CC)" \
		INSTALL_PREFIX="$(PKG_INSTALL_DIR)" \
		$(OPENSSL_MAKEFLAGS) \
		install
endef

define Build/InstallDev
	$(INSTALL_DIR) $(1)/usr/include
	$(CP) $(PKG_INSTALL_DIR)/usr/include/openssl $(1)/usr/include/
	$(INSTALL_DIR) $(1)/usr/lib/
	$(CP) $(PKG_INSTALL_DIR)/usr/lib/lib{crypto,ssl}.{a,so*} $(1)/usr/lib/
	$(INSTALL_DIR) $(1)/usr/lib/pkgconfig
	$(CP) $(PKG_INSTALL_DIR)/usr/lib/pkgconfig/{openssl,libcrypto,libssl}.pc $(1)/usr/lib/pkgconfig/
	[ -n "$(TARGET_LDFLAGS)" ] && $(SED) 's#$(TARGET_LDFLAGS)##g' $(1)/usr/lib/pkgconfig/{openssl,libcrypto,libssl}.pc || true
endef

define Package/libopenssl/install
	$(INSTALL_DIR) $(1)/usr/lib
	$(INSTALL_DATA) $(PKG_INSTALL_DIR)/usr/lib/libcrypto.so.* $(1)/usr/lib/
	$(INSTALL_DATA) $(PKG_INSTALL_DIR)/usr/lib/libssl.so.* $(1)/usr/lib/
endef

define Package/openssl-util/install
	$(INSTALL_DIR) $(1)/etc/ssl
	$(CP) $(PKG_INSTALL_DIR)/etc/ssl/openssl.cnf $(1)/etc/ssl/
	$(INSTALL_DIR) $(1)/etc/ssl/certs
	$(INSTALL_DIR) $(1)/etc/ssl/private
	chmod 0700 $(1)/etc/ssl/private
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_INSTALL_DIR)/usr/bin/openssl $(1)/usr/bin/
endef

$(eval $(call BuildPackage,libopenssl))
$(eval $(call BuildPackage,openssl-util))
