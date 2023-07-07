/**
 * Copyright (c) 2016, TP-Link Co.,Ltd.
 * Author:      zhaosheng <zhaosheng@tp-link.net>
 * Created:     2016-05-01
 * Updated:     2016-05-01
 *
 */

 #ifndef CLOUD_HC_T_H
 #define CLOUD_HC_T_H

/**
 * This structure is the parameter of tlcc_build_request_of_hello_cloud_v2
 * Note:
 *      1. *request will be freed in SDK.
 */
typedef struct tlcc_connect_request_t{
    char* deviceId;
    char* cloudUserName;
    char* deviceName;
    char* aliasName;
    char* deviceMac;
    char* hardwareId;
    char* deviceModel;
    char* deviceHwVer;
    char* firmwareId;
    char* oemId;
    char* fwVersion;
}tlcc_connect_request_t;

/**
 * This structure is the parameter of tlcc_recv_response_of_hello_cloud_v2
 * 
 */
typedef struct tlcc_connect_response_t{
    int errorcode;
    int tcspStatus;
    char* firmwarePage;
    char* tcspInfo;
    int illegalType;
    int stopConnect;
    int reconnectTime;
}tlcc_connect_response_t;

 #endif
