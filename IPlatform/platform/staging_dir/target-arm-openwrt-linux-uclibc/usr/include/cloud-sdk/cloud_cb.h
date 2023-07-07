/**
 * Copyright (c) 2016, TP-Link Co.,Ltd.
 * Author:      zhaosheng <zhaosheng@tp-link.net>
 * Created:     2016-05-01
 * Updated:     2016-05-01
 *
 */

#ifndef CLOUD_CB_H
#define CLOUD_CB_H

#include "error_code.h"
#include "cloud_hc_t.h"

/**
 * tlcc_XXX stands for TP-Link Cloud Client.
 */

/**
 * The function is a callback to respond the request from the cloud.
 * @param request the json string of the request.
 * @param response the json string of the response to be returned.
 * Note:
 *      1. *response will be freed in SDK.
 */
typedef void (*tlcc_cloud_request_cb)(const char* request, char** response);

/**
 * The structure is a callback for helloCloud.
 *
 * WARNING:
 *      THIS API WILL BE REMOVED FORM CLOUD-SDK ON 5/31/2016
 *      STRONGLY RECOMMEND NOT TO USE 
 */
typedef struct tlcc_hello_cloud_t {
    /**
     * The function is a callback to build the request of helloCloud.
     * @param request the json string of the request to be returned.
     * Note:
     *      1. *request will be freed in SDK.
     */
    void (*tlcc_build_request_cb)(char** request);
    
    /**
     * The function is a callback to receive the response of helloCloud.
     * @param response the json string of the response.
     */
    void (*tlcc_recv_response_cb)(const char* response);
} tlcc_hello_cloud_t;

/**
 * The structure is a callback for helloCloud.
 */
typedef struct tlcc_hello_cloud_t_v2 {
    /**
     * The function is a callback to build the request of helloCloud.
     * @param request the json string of the request to be returned.
     * Note:
     *      1. *request will be freed in SDK.
     */
    void (*tlcc_build_request_cb)(tlcc_connect_request_t** request);
    
    /**
     * The function is a callback to receive the response of helloCloud.
     * @param response the json string of the response.
     */
    void (*tlcc_recv_response_cb)(const tlcc_connect_response_t* response);
} tlcc_hello_cloud_t_v2;

/**
 * The function shall register the tlcc_cloud_request_cb callback function.
 * @param callback the tlcc_cloud_request_cb callback function.
 * @param hello_cloud the structure of callbacks for helloCloud.
 * @return 0 on success; negative on error.
 * Note:
 *      1. if NULL == hello_cloud, default to 3-step handshake.
 *
 * WARNING:
 *      THIS API WILL BE REMOVED FORM CLOUD-SDK ON 5/31/2016
 *      STRONGLY RECOMMEND NOT TO USE 
 */
int tlcc_register_callback(tlcc_cloud_request_cb callback,
                            tlcc_hello_cloud_t* hello_cloud);

/**
 * The function shall register the tlcc_cloud_request_cb callback function.
 * @param callback the tlcc_cloud_request_cb callback function.
 * @param hello_cloud the structure of callbacks for helloCloud.
 * @return 0 on success; negative on error.
 * Note:
 *      1. if NULL == hello_cloud, default to 3-step handshake.
 */
int tlcc_register_callback_v2(tlcc_cloud_request_cb callback,
                            tlcc_hello_cloud_t_v2* hello_cloud);

/**
 * The function shall register the tlcc_cloud_request_cb callback function.
 * @return 0 on success; negative on error.
 */
int tlcc_unregister_callback();

#endif
