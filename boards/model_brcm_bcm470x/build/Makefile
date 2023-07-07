#
# Generic Makefile to build images for various type of products.
# Author: TengFei
# Date: Aug 13th, 2014.
#

ifndef PRODUCT_NAME
$(warning "Usage - make PRODUCT_NAME=xxx target(s)")
$(warning "PRODUCT_NAME - c9v1_un ")
$(warning "Targets - toolchain iplatform_prep sdk iplatform firmware platform ")
$(error "PRODUCT_NAME is must required for any target building in Makefile!")
endif

ifeq ($(findstring c5400, $(PRODUCT_NAME)), c5400)
EXT_PREPARE := toolchain_4366
else
EXT_PREPARE :=
endif
#
# our make tool
#
SUBMAKE:=$(MAKE)

#
# path name of common dirs 
#
BUILD_DIR:=$(PWD)
CONFIG_DIR:=$(BUILD_DIR)/product_configs/$(PRODUCT_NAME)
PLATFORM_DIR:=$(BUILD_DIR)/../../../IPlatform/platform
IMAGE_DIR:=$(BUILD_DIR)/../image/$(PRODUCT_NAME)
TOOLCHAIN_DIR:=$(BUILD_DIR)/../toolchain
SDK_DIR:=$(BUILD_DIR)/../sdk

#
# basic Vars for special product
#
include $(CONFIG_DIR)/basic.config

# default target
platform:

#
# basic targets for special product
#
include $(CONFIG_DIR)/product.mk

platform: iplatform_prep sdk iplatform firmware

toolchain: 
	@if [ ! -d $(TOOLCHAIN_ROOT_DIR) ]; then \
		echo Uncompressing toolchain, please wait... && \
		tar -jxf $(TOOLCHAIN_DIR)/$(TOOLCHAIN_PACKAGE) -C $(TOOLCHAIN_DIR) ; \
	 fi
	@echo make $@ done.

toolchain_4366:
	@if [ ! -d $(TOOLCHAIN_4366_ROOT_DIR) ]; then \
		echo Uncompressing 4366 toolchain, please wait... && \
		tar -zxf $(TOOLCHAIN_DIR)/$(TOOLCHAIN_4366_PACKAGE) -C $(TOOLCHAIN_DIR) ; \
	 fi
	@echo make $@ done.

iplatform.config:
	@cp -f $(CONFIG_DIR)/iplatform.config $(PLATFORM_DIR)/.config



iplatform_prep: toolchain iplatform.config iplatform_package/symlinks sdk.config kernel.config $(EXT_PREPARE)
	@if [ "$(findstring c5400, $(PRODUCT_NAME))" == "c5400" ]; then \
		cd $(HOSTTOOLS_SRC_DIR) && $(MAKE) clean && $(MAKE) && \
		echo make hosttools done.; \
	fi

iplatform: iplatform_world

releaseGPL:
	@cd $(RELEASETOOL_DIR) && ./packGPL.py $(PRODUCT_NAME) $(SDK_DIR)/$(SDK_NAME)

%::
	$(if $(filter iplatform_%,$@),\
		@$(SUBMAKE) -C $(PLATFORM_DIR) $(patsubst iplatform_%, %, $@),\
		@$(SUBMAKE) -C $(SDK_BUILD_DIR) $@ $(SDK_FLAGS))

.PHONY: toolchain iplatform_prep iplatform platform firmware sdk \
	iplatform.config sdk.config kernel.config 
