#!/bin/bash

cd boards/model_brcm_bcm470x/build

make PRODUCT_NAME=c1200v2_us iplatform_prep
make PRODUCT_NAME=c1200v2_us iplatform_menuconfig
make PRODUCT_NAME=c1200v2_us sdk_menuconfig
make PRODUCT_NAME=c1200v2_us sdk 
make PRODUCT_NAME=c1200v2_us iplatform
