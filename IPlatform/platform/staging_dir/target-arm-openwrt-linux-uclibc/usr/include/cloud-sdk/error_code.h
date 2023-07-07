/**
 * Copyright (c) 2016, TP-Link Co.,Ltd.
 * Author:      zhaosheng <zhaosheng@tp-link.net>
 * Created:     2016-05-01
 * Updated:     2016-05-01
 *
 */

#ifndef ERROR_CODE_H
#define ERROR_CODE_H

    #define ERROR_SUCCESS               0

    #define ERROR_GENERIC               -1000
    #define ERROR_UNKNOWN               -1500


    #define ERROR_LOCAL_SERVER_INIT     -2000
    #define ERROR_LOCAL_SERVER_CONNECT  -2001
    #define ERROR_LOCAL_CLIENT_CONNECT  -2002

    #define ERROR_NO_SUCH_REQUEST       -3000
    #define ERROR_REQUEST_PROCESSING    -3001
    #define ERROR_REQUEST_TIMEOUT       -3002

    #define ERROR_NO_MORE_DATA          -4000
    #define ERROR_ALREADY_EXIST         -4001

    #define ERROR_CLOUD_SERVER_CONNECT  -5000
    #define ERROR_ILLEGAL_DEVICE        -5001
    #define ERROR_STOP_CONNECT          -5002

    #define ERROR_PARSE_JSON            -6000
    #define ERROR_PARSE_JSON_NULL       -6001
    #define ERROR_PARSE_JSON_TOO_LONG   -6002
    #define ERROR_PARSE_JSON_ID         -6003

    #define ERROR_METHOD_NOT_FOUND      -7000
    #define ERROR_PARAMS_NOT_FOUND      -7001
    #define ERROR_PARAMS_WRONG_TYPE     -7002
    #define ERROR_PARAMS_WRONG_RANGE    -7003
    #define ERROR_INVALID_PARAMS        -7004

#endif
