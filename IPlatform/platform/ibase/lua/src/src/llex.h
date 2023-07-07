/*
** $Id: llex.h,v 1.58.1.1 2007/12/27 13:02:25 roberto Exp $
** Lexical Analyzer
** See Copyright Notice in lua.h
*/

#ifndef llex_h
#define llex_h

#include "lobject.h"
#include "lzio.h"


#define FIRST_RESERVED	257

/* maximum length of a reserved word */
#define TOKEN_LEN	(sizeof("function")/sizeof(char))


/*
* WARNING: if you change the order of this enumeration,
* grep "ORDER RESERVED"
*/
enum RESERVED {
  /* terminal symbols denoted by reserved words */
  TK_DO = FIRST_RESERVED, TK_END,
  TK_BREAK, TK_ELSEIF, TK_FOR, TK_FUNCTION, TK_IF, TK_ELSE, TK_IN,
  TK_LOCAL, TK_NIL, TK_NOT, TK_OR, TK_AND, TK_WHILE, TK_THEN,
  TK_FALSE, TK_TRUE, TK_REPEAT, TK_UNTIL, TK_RETURN,
  /* other terminal symbols */
  TK_DOTS, TK_LE, TK_GE, TK_EQ, TK_NE, TK_NUMBER, TK_CONCAT,
  TK_STRING, TK_EOS, TK_NAME, TK_INT
#ifdef LNUM_COMPLEX
  , TK_NUMBER2   /* imaginary constants: Ni */ 
#endif
};

/* number of reserved words */
#define NUM_RESERVED	(cast(int, TK_RETURN-FIRST_RESERVED+1))


/* SemInfo is a local data structure of 'llex.c', used for carrying a string
 * or a number. A separate token (TK_*) will tell, how to interpret the data.
 */      
typedef union {
  lua_Number r;
  lua_Integer i;
  TString *ts;
} SemInfo;  /* semantics information */


typedef struct Token {
  int token;
  SemInfo seminfo;
} Token;


typedef struct LexState {
  int current;  /* current character (charint) */
  int linenumber;  /* input line counter */
  int lastline;  /* line of last token `consumed' */
  Token t;  /* current token */
  Token lookahead;  /* look ahead token */
  struct FuncState *fs;  /* `FuncState' is private to the parser */
  struct lua_State *L;
  ZIO *z;  /* input stream */
  Mbuffer *buff;  /* buffer for tokens */
  TString *source;  /* current source name */
  char decpoint;  /* locale decimal point */
} LexState;


LUAI_FUNC void luaX_init (lua_State *L);
LUAI_FUNC void luaX_setinput (lua_State *L, LexState *ls, ZIO *z,
                              TString *source);
LUAI_FUNC TString *luaX_newstring (LexState *ls, const char *str, size_t l);
LUAI_FUNC void luaX_next (LexState *ls);
LUAI_FUNC void luaX_lookahead (LexState *ls);
LUAI_FUNC void luaX_lexerror (LexState *ls, const char *msg, int token);
LUAI_FUNC void luaX_syntaxerror (LexState *ls, const char *s);
LUAI_FUNC const char *luaX_token2str (LexState *ls, int token);


#endif
