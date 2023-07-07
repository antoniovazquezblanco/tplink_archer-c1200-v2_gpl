/**
 * Copyright (c) 2016, TP-Link Co.,Ltd.
 * Author:      zhaosheng <zhaosheng@tp-link.net>
 * Created:     2016-05-01
 * Updated:     2016-05-01
 *
 */

#ifndef CLOUD_API_H
#define CLOUD_API_H

#include "error_code.h"
#include "cloud_hc_t.h"

#define LINK_STATUS_DISCONNECTED	1
#define LINK_STATUS_CONNECTED		2
#define LINK_STATUS_RECONNECTING	4

/**
 * tlcc_XXX stands for TP-Link Cloud Client.
 */

/**
 * The function is a callback to receive the response from the cloud.
 * @param msg_id the message id.
 * @param response the json string of the response.
 * Note:
 *      1. the function will be called when the response arrives or time is out.
 */
typedef void (*tlcc_cloud_response_cb)(int msg_id, const char* response);

/**
 * The function shall send the request and get the response in timeout_ms ms.
 * @param request the json string of the request.
 * @param timeout_ms the time out to get the response in millisecond.
 * @param flag the flag of the request.
 * @param response the json string of the response to be returned.
 * @return 0 on success; negative on error.
 * Note:
 *      1. *response MUST be set to NULL, before the function.
 *      2. free the *response when finished.
 *      3. if 0 == flag, the function will return -1000 immediately when the
 *          connection is out, otherwise will try to reconnect immediately.
 */
int tlcc_send_request_sync(const char* request, int timeout_ms, int flag,
                            char** response);

/**
 * The function shall send the request in the asynchronous way.
 * @param request the json string of the request.
 * @param timeout_ms the time out to get the response in millisecond.
 * @param flag the flag of the request.
 * @param callback the callback function will be called when the response
 *          arrives or time is out.
 * @return the message id on success; negative on error.
 * Note:
 *      1. if 0 == flag, the function will return -1000 immediately when the
 *          connection is out, otherwise will try to reconnect immediately.
 */
int tlcc_send_request_async(const char* request, int timeout_ms, int flag,
                            tlcc_cloud_response_cb callback);

/**
 * The function shall get the response of the message id.
 * @param msg_id the message id returned by send_request_async.
 * @param response the json string of the response to be returned.
 * @return 0 on success; negative on error.
 * Note:
 *      1. *response MUST be set to NULL, before the function.
 *      2. free the *response when finished.
 */
int tlcc_get_response(int msg_id, char** response);

/**
 * The function shall let cloud-svr reconnect to the cloud.
 * @return 0 on success; negative on error.
 *
 * WARNING:
 *      THIS API WILL BE REMOVED FORM CLOUD-SDK ON 5/31/2016
 *      STRONGLY RECOMMEND NOT TO USE 
 */
int tlcc_reconnect_cloud();

/**
 * The function shall notify cloud-brd of event.
 * @return 0 on success; negative on error.
 */
int tlcc_notify_cloud_brd(int event);

/**
 * The function shall get status of link between the cloud-brd and the cloud-server.
 * @return link status on success; negative on error.
 */
int tlcc_get_link_status();

#endif
