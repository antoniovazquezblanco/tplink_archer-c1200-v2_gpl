/*********************************************************************
*                SEGGER Microcontroller GmbH & Co. KG                *
*        Solutions for real time microcontroller applications        *
*                           www.segger.com                           *
**********************************************************************
*                                                                    *
* C-file generated by                                                *
*                                                                    *
*        Bitmap Converter for emWin (Demo version) V5.24.            *
*        Compiled Jan 27 2014, 08:56:32                              *
*        (c) 1998 - 2013 Segger Microcontroller GmbH && Co. KG       *
*                                                                    *
*        May not be used in a product                                *
*                                                                    *
**********************************************************************
*                                                                    *
* Source file: on_dis                                                *
* Dimensions:  46 * 30                                               *
* NumColors:   32bpp: 16777216 + 256                                 *
*                                                                    *
**********************************************************************
*/

#include <stdlib.h>

#include "GUI.h"

#ifndef GUI_CONST_STORAGE
  #define GUI_CONST_STORAGE const
#endif

extern GUI_CONST_STORAGE GUI_BITMAP bmon_dis;

static GUI_CONST_STORAGE unsigned long _acon_dis[] = {
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xE5DCDCDC, 0x92DCDCDC, 0x54DCDCDC, 0x27DCDCDC, 0x0FDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x0FDCDCDC, 0x24DCDCDC, 0x53DCDCDC, 0x92DCDCDC, 0xE5DCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 
        0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC,
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xCFDCDCDC, 0x50DCDCDC, 0x03DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x02DCDCDC, 0x50DCDCDC, 0xCFDCDCDC, 0xFF000000, 0xFF000000, 
        0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xF7DCDCDC, 0x6DDCDCDC, 0x02DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00E0E0E0, 0x00EAEAEA, 0x00F2F2F2, 0x00FAFAFA, 0x00FEFEFE, 0x00FEFEFE, 0x00F9F9F9, 0x00EFEFEF, 0x00E1E1E1, 0x00D6D6D6, 0x00D7D7D7, 0x00DBDBDB, 0x02DCDCDC, 0x6CDCDCDC, 0xF7DCDCDC, 
        0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xE4DCDCDC, 0x30DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00E3E3E3, 0x00F4F4F4, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00EEEEEE, 0x00D4D4D4, 0x00D3D3D3, 0x00DADADA, 0x30DCDCDC, 
        0xE4DCDCDC, 0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xE3DCDCDC, 0x1FDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DCDCDC, 0x00DCDCDC, 0x00EFEFEF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00E0E0E0, 0x00CBCBCB, 0x00D7D7D7, 
        0x1FDBDBDB, 0xE3DCDCDC, 0xFF000000, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xF6DCDCDC, 0x2FDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DEDEDE, 0x00F6F6F6, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00EAEAEA, 0x00C4C4C4, 
        0x00D5D5D5, 0x2FDBDBDB, 0xF6DCDCDC, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0x6CDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00F6F6F6, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00E9E9E9, 
        0x00C0C0C0, 0x00D5D5D5, 0x6CDBDBDB, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xCDDCDCDC, 0x02DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00EFEFEF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00D7D7D7, 0x00C0C0C0, 0x02D7D7D7, 0xCDDCDCDC, 0xFF000000,
  0xFFDCDCDC, 0x50DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00E3E3E3, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FEFEFE, 0x00B8B8B8, 0x00C9C9C9, 0x4FD9D9D9, 0xFF000000,
  0xE4DCDCDC, 0x02DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00F5F5F5, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00E3E3E3, 0x00B2B2B2, 0x02D3D3D3, 0xE4DCDCDC,
  0x93DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00E1E1E1, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00ACACAC, 0x00C6C6C6, 0x92D8D8D8,
  0x53DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00EBEBEB, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00C4C4C4, 0x00B6B6B6, 0x50D3D3D3,
  0x27DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00F3F3F3, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00DEDEDE, 0x00A6A6A6, 0x25CCCCCC,
  0x0EDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00FAFAFA, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00F1F1F1, 0x00999999, 0x0DC7C7C7,
  0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00FEFEFE, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FCFCFC, 0x00909090, 0x00C4C4C4,
  0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00FEFEFE, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FCFCFC, 0x008C8C8C, 0x00C1C1C1,
  0x0EDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00F9F9F9, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00F1F1F1, 0x008C8C8C, 0x0CBFBFBF,
  0x27DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00F0F0F0, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00DBDBDB, 0x00909090, 0x23C0C0C0,
  0x53DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00E4E4E4, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00BBBBBB, 0x00989898, 0x4BC0C0C0,
  0x93DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00D7D7D7, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00949494, 0x00A6A6A6, 0x8ABEBEBE,
  0xE4DCDCDC, 0x02DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00D6D6D6, 0x00EEEEEE, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FFFFFF, 0x00DDDDDD, 0x00878787, 0x02B6B6B6, 0xDDB0B0B0,
  0xFFDCDCDC, 0x50DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DADADA, 0x00D4D4D4, 0x00FFFFFF, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00FEFEFE, 0x00989898, 0x00999999, 0x48BDBDBD, 0xFD000000,
  0xFFDCDCDC, 0xCDDCDCDC, 0x02DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00D3D3D3, 0x00E0E0E0, 
        0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 
        0x00C6C6C6, 0x00878787, 0x02B2B2B2, 0xC5B6B6B6, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0x6CDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DADADA, 0x00CBCBCB, 
        0x00EBEBEB, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00E0E0E0, 
        0x00828282, 0x00A1A1A1, 0x63BDBDBD, 0xFD000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xF5DCDCDC, 0x2FDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00D7D7D7, 
        0x00C5C5C5, 0x00E9E9E9, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00E0E0E0, 0x00848484, 
        0x00999999, 0x29BBBBBB, 0xEF868686, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xE3DCDCDC, 0x1FDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DBDBDB, 
        0x00D5D5D5, 0x00BFBFBF, 0x00D6D6D6, 0x00FEFEFE, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FEFEFE, 0x00C6C6C6, 0x00828282, 0x00999999, 
        0x1BBABABA, 0xDCAAAAAA, 0xFE000000, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xE4DCDCDC, 0x2EDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DBDBDB, 0x00D5D5D5, 0x00C0C0C0, 0x00B8B8B8, 0x00E4E4E4, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00DEDEDE, 0x00989898, 0x00878787, 0x00A1A1A1, 0x28BBBBBB, 
        0xDDA9A9A9, 0xFE000000, 0xFF000000, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xF6DCDCDC, 0x6CDCDCDC, 0x02DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DCDCDC, 0x00DBDBDB, 0x00D7D7D7, 0x00C9C9C9, 0x00B2B2B2, 0x00A9A9A9, 0x00BFBFBF, 0x00DEDEDE, 0x00F2F2F2, 0x00FCFCFC, 0x00FCFCFC, 0x00F1F1F1, 0x00DBDBDB, 0x00B5B5B5, 0x00919191, 0x00878787, 0x00999999, 0x02B2B2B2, 0x63BDBDBD, 0xEF868686, 
        0xFE000000, 0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xCEDCDCDC, 0x50DCDCDC, 0x03DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DADADA, 0x00D3D3D3, 0x00C6C6C6, 0x00B7B7B7, 0x00A7A7A7, 0x00999999, 0x008F8F8F, 0x008C8C8C, 0x008C8C8C, 0x008F8F8F, 0x00999999, 0x00A7A7A7, 0x02B7B7B7, 0x48BDBDBD, 0xC5B6B6B6, 0xFD000000, 0xFF000000, 
        0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000,
  0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xFFDCDCDC, 0xE5DCDCDC, 0x92DCDCDC, 0x53DCDCDC, 0x26DCDCDC, 0x0EDCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 
        0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DCDCDC, 0x00DADADA, 0x00D7D7D7, 0x00CFCFCF, 0x00C8C8C8, 0x00C4C4C4, 0x00C1C1C1, 0x0CBFBFBF, 0x20C0C0C0, 0x4AC0C0C0, 0x89C0C0C0, 0xE0B4B4B4, 0xFD000000, 0xFF000000, 0xFF000000, 0xFF000000, 
        0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000, 0xFF000000
};

GUI_CONST_STORAGE GUI_BITMAP bmon_dis = {
  46, // xSize
  30, // ySize
  184, // BytesPerLine
  32, // BitsPerPixel
  (unsigned char *)_acon_dis,  // Pointer to picture data
  NULL,  // Pointer to palette
  GUI_DRAW_BMP8888
};

/*************************** End of file ****************************/