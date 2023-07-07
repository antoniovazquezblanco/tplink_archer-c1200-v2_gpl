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
* Source file: KB_ShiftBmp                                           *
* Dimensions:  60 * 28                                               *
* NumColors:   32bpp: 16777216 + 256                                 *
*                                                                    *
**********************************************************************
*/

#include <stdlib.h>

#include "GUI.h"

#ifndef GUI_CONST_STORAGE
  #define GUI_CONST_STORAGE const
#endif

extern GUI_CONST_STORAGE GUI_BITMAP bmKB_ShiftBmp;

static GUI_CONST_STORAGE unsigned long _acKB_ShiftBmp[] = {
  0xF9B5B2A4, 0x6EB5B2A4, 0x12B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x11B5B2A4, 0x6EB5B2A4, 0xF9B5B2A4,
  0x6FB5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x77B5B2A4,
  0x12B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x12B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B9B7A9, 0x00ECEBE8, 0x00ECEBE7, 0x00B9B7A9, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00BAB7AA, 0x00F0EFEC, 0x00FDFDFD, 0x00FDFDFD, 0x00F0EFEC, 0x00BAB7AA, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00BBB9AC, 0x00F1F1EE, 0x00FCFCFC, 0x00CAC8BE, 0x00CAC8BE, 0x00FCFCFC, 0x00F1F1EE, 0x00BBB9AC, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00BDBAAD, 0x00F3F3F0, 0x00FCFCFB, 0x00C8C6BC, 0x00B5B2A4, 0x00B5B2A4, 0x00C8C6BC, 0x00FCFCFB, 0x00F3F3F0, 0x00BDBAAD, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00BEBBAF, 0x00F5F4F2, 0x00FBFBFA, 0x00C6C4B9, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00C6C4B9, 0x00FBFBFA, 0x00F5F4F2, 0x00BEBBAF, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00BFBCB0, 0x00F6F6F4, 0x00FAFAF9, 0x00C5C3B8, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00C5C2B7, 0x00FAFAF9, 0x00F6F6F4, 0x00BFBCB0, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00C1BEB2, 0x00F7F7F6, 0x00FFFFFF, 0x00E5E4E0, 0x00D8D6CE, 0x00CDCBC2, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00CDCBC2, 0x00D8D6CE, 0x00E5E4E0, 0x00FFFFFF, 0x00F7F7F6, 0x00C1BEB2, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00F3F3F0, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00E9E8E4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00E9E8E4, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00F3F3F1, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B7B4A6, 0x00BAB7AA, 0x00BAB7AA, 0x00BAB7AA, 0x00EFEEEB, 0x00E9E8E4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00E9E8E4, 0x00EFEEEB, 0x00BAB7AA, 0x00BAB7AA, 0x00BAB7AA, 0x00B7B4A6, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00EEEDEA, 0x00E9E8E4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00E9E8E4, 0x00EEEDEA, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00EEEDEA, 0x00E9E8E4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00E9E8E4, 0x00EEEDEA, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00EBEAE7, 0x00F5F4F3, 0x00D8D6CE, 0x00D8D6CE, 0x00D8D6CE, 0x00D8D6CE, 0x00F5F4F3, 0x00EBEAE7, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00C9C7BD, 0x00F9F8F7, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00FFFFFF, 0x00F9F8F7, 0x00C9C7BD, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4,
  0x12B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x12B5B2A4,
  0x6FB5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x76B5B2A4,
  0xF9B5B2A4, 0x6EB5B2A4, 0x11B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 
        0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x00B5B2A4, 0x11B5B2A4, 0x6EB5B2A4, 0xF9B5B2A4
};

GUI_CONST_STORAGE GUI_BITMAP bmKB_ShiftBmp = {
  60, // xSize
  28, // ySize
  240, // BytesPerLine
  32, // BitsPerPixel
  (unsigned char *)_acKB_ShiftBmp,  // Pointer to picture data
  NULL,  // Pointer to palette
  GUI_DRAW_BMP8888
};

/*************************** End of file ****************************/
