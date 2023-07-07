/**
 * Copyright (c) 2016, TP-Link Co.,Ltd.
 * Author:      zhaosheng <zhaosheng@tp-link.net>
 * Created:     2016-05-01
 * Updated:     2016-05-01
 *
 */

#ifndef CLOUD_KIT_H
#define CLOUD_KIT_H

#include "cloud_hc_t.h"

/**
 * The function shall respond the request from the cloud.
 * @param request the json string of the request.
 * @param response the json string of the response to be returned.
 * Note:
 *      1. *response will be freed in SDK.
 */
void tlcc_respond_cloud(const char* request, char** response);

/**
 * The function shall build the request of helloCloud.
 * @param request the json string of the request to be returned.
 * Note:
 *      1. *request will be freed in SDK.
 *      2. In case using default 3-step handshake, do not implement this.
 *
 * WARNING:
 *      THIS API WILL BE REMOVED FORM CLOUD-SDK ON 5/31/2016
 *      STRONGLY RECOMMEND NOT TO USE 
 */
void tlcc_build_request_of_hello_cloud(char** request);

/**
 * The function shall receive the response of helloCloud.
 * @param response the json string of the response.
 * Note:
 *      1. In case using default 3-step handshake, do not implement this.
 *
 * WARNING:
 *      THIS API WILL BE REMOVED FORM CLOUD-SDK ON 5/31/2016
 *      STRONGLY RECOMMEND NOT TO USE 
 */
void tlcc_recv_response_of_hello_cloud(const char* response);

/**
 * The function shall build the request of helloCloud.
 * @param request the struct tlcc_connect_request_t to be returned.
 * Note:
 *      1. *request will be freed in SDK.
 *      2. In case using default 3-step handshake, do not implement this.
 */
void tlcc_build_request_of_hello_cloud_v2(tlcc_connect_request_t** request);

/**
 * The function shall receive the response of helloCloud.
 * @param response the json string of the response.
 * Note:
 *      1. In case using default 3-step handshake, do not implement this.
 */
void tlcc_recv_response_of_hello_cloud_v2(const tlcc_connect_response_t* response);

/**
 * The function shall free the memory malloced by kit.
 * @param   ptr         pointer to the memory malloced by kit
 *
 */
void tlcc_free_fn(void *ptr);

#endif
