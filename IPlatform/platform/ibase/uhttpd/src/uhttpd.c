/*
 * uhttpd - Tiny single-threaded httpd - Main component
 *
 *   Copyright (C) 2010 Jo-Philipp Wich <xm@subsignal.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

#include "uhttpd.h"
#include "uhttpd-utils.h"
#include "uhttpd-file.h"

#include <time.h>
//#include "uci.h"

#ifdef HAVE_CGI
#include "uhttpd-cgi.h"
#endif

#ifdef HAVE_LUA
#include "uhttpd-lua.h"
#endif

#ifdef HAVE_TLS
#include "uhttpd-tls.h"
#endif

#define CONFIG_FILE		"/www/webpages/app.manifest"
time_t m_modified_time;

const char * http_methods[] = { "GET", "POST", "HEAD", "PUT", };
const char * http_versions[] = { "HTTP/0.9", "HTTP/1.0", "HTTP/1.1", };

static int run = 1;
static char webpage_time[64];

static void uh_sigterm(int sig)
{
	run = 0;
}

static void uh_config_parse(struct config *conf)
{
	FILE *c;
	char line[512];
	char *col1 = NULL;
	char *col2 = NULL;
	char *eol  = NULL;

	const char *path = conf->file ? conf->file : "/etc/httpd.conf";


	if ((c = fopen(path, "r")) != NULL)
	{
		memset(line, 0, sizeof(line));

		while (fgets(line, sizeof(line) - 1, c))
		{
			if ((line[0] == '/') && (strchr(line, ':') != NULL))
			{
				if (!(col1 = strchr(line, ':')) || (*col1++ = 0) ||
				    !(col2 = strchr(col1, ':')) || (*col2++ = 0) ||
					!(eol = strchr(col2, '\n')) || (*eol++  = 0))
				{
					continue;
				}

				if (!uh_auth_add(line, col1, col2))
				{
					fprintf(stderr,
							"Notice: No password set for user %s, ignoring "
							"authentication on %s\n", col1, line
					);
				}
			}
			else if (!strncmp(line, "I:", 2))
			{
				if (!(col1 = strchr(line, ':')) || (*col1++ = 0) ||
				    !(eol = strchr(col1, '\n')) || (*eol++  = 0))
				{
				   	continue;
				}

				if (!uh_index_add(strdup(col1)))
				{
					fprintf(stderr,
					        "Unable to add index filename %s: "
					        "Out of memory\n", col1
					);
				}
			}
			else if (!strncmp(line, "E404:", 5))
			{
				if (!(col1 = strchr(line, ':')) || (*col1++ = 0) ||
				    !(eol = strchr(col1, '\n')) || (*eol++  = 0))
				{
					continue;
				}

				conf->error_handler = strdup(col1);
			}
#ifdef HAVE_CGI
			else if ((line[0] == '*') && (strchr(line, ':') != NULL))
			{
				if (!(col1 = strchr(line, '*')) || (*col1++ = 0) ||
				    !(col2 = strchr(col1, ':')) || (*col2++ = 0) ||
				    !(eol = strchr(col2, '\n')) || (*eol++  = 0))
				{
					continue;
				}

				if (!uh_interpreter_add(col1, col2))
				{
					fprintf(stderr,
							"Unable to add interpreter %s for extension %s: "
							"Out of memory\n", col2, col1
					);
				}
			}
#endif
		}

		fclose(c);
	}
}

static void uh_listener_cb(struct uloop_fd *u, unsigned int events);

static int uh_socket_bind(const char *host, const char *port,
                          struct addrinfo *hints, int do_tls,
                          struct config *conf)
{
	int sock = -1;
	int yes = 1;
	int status;
	int bound = 0;

#ifdef linux
	int tcp_ka_idl, tcp_ka_int, tcp_ka_cnt;
#endif

	struct listener *l = NULL;
	struct addrinfo *addrs = NULL, *p = NULL;

	if ((status = getaddrinfo(host, port, hints, &addrs)) != 0)
	{
		fprintf(stderr, "getaddrinfo(): %s\n", gai_strerror(status));
	}

	/* try to bind a new socket to each found address */
	for (p = addrs; p; p = p->ai_next)
	{
		/* get the socket */
		if ((sock = socket(p->ai_family, p->ai_socktype, p->ai_protocol)) == -1)
		{
			perror("socket()");
			goto error;
		}

		/* "address already in use" */
		if (setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &yes, sizeof(yes)))
		{
			perror("setsockopt()");
			goto error;
		}

		/* TCP keep-alive */
		if (conf->tcp_keepalive > 0)
		{
#ifdef linux
			tcp_ka_idl = 1;
			tcp_ka_cnt = 3;
			tcp_ka_int = conf->tcp_keepalive;
#endif

			if (setsockopt(sock, SOL_SOCKET, SO_KEEPALIVE, &yes, sizeof(yes))
#ifdef linux
			    || setsockopt(sock, SOL_TCP, TCP_KEEPIDLE,  &tcp_ka_idl, sizeof(tcp_ka_idl))
			    || setsockopt(sock, SOL_TCP, TCP_KEEPINTVL, &tcp_ka_int, sizeof(tcp_ka_int))
			    || setsockopt(sock, SOL_TCP, TCP_KEEPCNT,   &tcp_ka_cnt, sizeof(tcp_ka_cnt))
#endif
				)
			{
			    fprintf(stderr, "Notice: Unable to enable TCP keep-alive: %s\n",
			    	strerror(errno));
			}
		}

		/* required to get parallel v4 + v6 working */
		if (p->ai_family == AF_INET6)
		{
			if (setsockopt(sock, IPPROTO_IPV6, IPV6_V6ONLY, &yes, sizeof(yes)) == -1)
			{
				perror("setsockopt()");
				goto error;
			}
		}

		/* bind */
		if (bind(sock, p->ai_addr, p->ai_addrlen) == -1)
		{
			perror("bind()");
			goto error;
		}

		/* listen */
		if (listen(sock, UH_LIMIT_CLIENTS) == -1)
		{
			perror("listen()");
			goto error;
		}

		/* add listener to global list */
		if (!(l = uh_listener_add(sock, conf)))
		{
			fprintf(stderr, "uh_listener_add(): Failed to allocate memory\n");
			goto error;
		}

#ifdef HAVE_TLS
		/* init TLS */
		l->tls = do_tls ? conf->tls : NULL;
#endif

		/* add socket to uloop */
		fd_cloexec(sock);
		uh_ufd_add(&l->fd, uh_listener_cb, ULOOP_READ);

		bound++;
		continue;

		error:
		if (sock > 0)
			close(sock);
	}

	freeaddrinfo(addrs);

	return bound;
}

static struct http_request * uh_http_header_parse(struct client *cl,
												  char *buffer, int buflen)
{
	char *method  = buffer;
	char *path    = NULL;
	char *version = NULL;

	char *headers = NULL;
	char *hdrname = NULL;
	char *hdrdata = NULL;

	int i;
	int hdrcount = 0;

	struct http_request *req = &cl->request;


	/* terminate initial header line */
	if ((headers = strfind(buffer, buflen, "\r\n", 2)) != NULL)
	{
		buffer[buflen-1] = 0;

		*headers++ = 0;
		*headers++ = 0;

		/* find request path */
		if ((path = strchr(buffer, ' ')) != NULL)
			*path++ = 0;

		/* find http version */
		if ((path != NULL) && ((version = strchr(path, ' ')) != NULL))
			*version++ = 0;


		/* check method */
		if (method && !strcmp(method, "GET"))
			req->method = UH_HTTP_MSG_GET;
		else if (method && !strcmp(method, "POST"))
			req->method = UH_HTTP_MSG_POST;
		else if (method && !strcmp(method, "HEAD"))
			req->method = UH_HTTP_MSG_HEAD;
		else if (method && !strcmp(method, "PUT"))
			req->method = UH_HTTP_MSG_PUT;
		else
		{
			/* invalid method */
			uh_http_response(cl, 405, "Method Not Allowed");
			return NULL;
		}

		/* check path */
		if (!path || !strlen(path))
		{
			/* malformed request */
			uh_http_response(cl, 400, "Bad Request");
			return NULL;
		}
		else
		{
			req->url = path;
		}

		/* check version */
		if (version && !strcmp(version, "HTTP/0.9"))
			req->version = UH_HTTP_VER_0_9;
		else if (version && !strcmp(version, "HTTP/1.0"))
			req->version = UH_HTTP_VER_1_0;
		else if (version && !strcmp(version, "HTTP/1.1"))
			req->version = UH_HTTP_VER_1_1;
		else
		{
			/* unsupported version */
			uh_http_response(cl, 400, "Bad Request");
			return NULL;
		}

		D("SRV: %s %s %s\n",
		  http_methods[req->method], req->url, http_versions[req->version]);

		/* process header fields */
		for (i = (int)(headers - buffer); i < buflen; i++)
		{
			/* found eol and have name + value, push out header tuple */
			if (hdrname && hdrdata && (buffer[i] == '\r' || buffer[i] == '\n'))
			{
				buffer[i] = 0;

				/* store */
				if ((hdrcount + 1) < array_size(req->headers))
				{
					D("SRV: HTTP: %s: %s\n", hdrname, hdrdata);

					req->headers[hdrcount++] = hdrname;
					req->headers[hdrcount++] = hdrdata;

					hdrname = hdrdata = NULL;
				}

				/* too large */
				else
				{
					D("SRV: HTTP: header too big (too many headers)\n");
					uh_http_response(cl, 413, "Request Entity Too Large");
					return NULL;
				}
			}

			/* have name but no value and found a colon, start of value */
			else if (hdrname && !hdrdata &&
					 ((i+1) < buflen) && (buffer[i] == ':'))
			{
				buffer[i] = 0;
				hdrdata = &buffer[i+1];

				while ((hdrdata + 1) < (buffer + buflen) && *hdrdata == ' ')
					hdrdata++;
			}

			/* have no name and found [A-Za-z], start of name */
			else if (!hdrname && isalpha(buffer[i]))
			{
				hdrname = &buffer[i];
			}
		}

		/* valid enough */
		req->redirect_status = 200;
		return req;
	}

	/* Malformed request */
	uh_http_response(cl, 400, "Bad Request");
	return NULL;
}

static bool uh_http_header_check_method(const char *buf, ssize_t rlen)
{
	int i;

	for (i = 0; i < sizeof(http_methods)/sizeof(http_methods[0]); i++)
		if (!strncmp(buf, http_methods[i], min(rlen, strlen(http_methods[i]))))
			return true;

	return false;
}


static struct http_request * uh_http_header_recv(struct client *cl)
{
	char *bufptr = cl->httpbuf.buf;
	char *idxptr = NULL;

	ssize_t blen = sizeof(cl->httpbuf.buf)-1;
	ssize_t rlen = 0;

	memset(bufptr, 0, sizeof(cl->httpbuf.buf));

	while (blen > 0)
	{
		/* receive data */
		ensure_out(rlen = uh_tcp_recv(cl, bufptr, blen));
		D("SRV: Client(%d) peek(%d) = %d\n", cl->fd.fd, blen, rlen);

		if (rlen <= 0)
		{
			D("SRV: Client(%d) dead [%s]\n", cl->fd.fd, strerror(errno));
			return NULL;
		}

		/* first read attempt, check for valid method signature */
		if ((bufptr == cl->httpbuf.buf) &&
		    !uh_http_header_check_method(bufptr, rlen))
		{
			D("SRV: Client(%d) no valid HTTP method, abort\n", cl->fd.fd);
			uh_http_response(cl, 400, "Bad Request");
			return NULL;
		}

		blen -= rlen;
		bufptr += rlen;

		if ((idxptr = strfind(cl->httpbuf.buf, sizeof(cl->httpbuf.buf),
							  "\r\n\r\n", 4)))
		{
			/* header read complete ... */
			cl->httpbuf.ptr = idxptr + 4;
			cl->httpbuf.len = bufptr - cl->httpbuf.ptr;

			return uh_http_header_parse(cl, cl->httpbuf.buf,
										(cl->httpbuf.ptr - cl->httpbuf.buf));
		}
	}

	/* request entity too large */
	D("SRV: HTTP: header too big (buffer exceeded)\n");
	uh_http_response(cl, 413, "Request Entity Too Large");

out:
	return NULL;
}

#if defined(HAVE_LUA) || defined(HAVE_CGI)
static int uh_path_match(const char *prefix, const char *url)
{
	if ((strstr(url, prefix) == url) &&
		((prefix[strlen(prefix)-1] == '/') ||
		 (strlen(url) == strlen(prefix))   ||
		 (url[strlen(prefix)] == '/')))
	{
		return 1;
	}

	return 0;
}
#endif

static bool uh_dispatch_request(struct client *cl, struct http_request *req)
{
	struct path_info *pin;
#ifdef HAVE_CGI
	struct interpreter *ipr = NULL;
#endif
	struct config *conf = cl->server->conf;

#ifdef CLOUD_SUPPORT
	char cmd[1000];
	int retCode;
	int guest;
	int isguest = 0;
	/*when the cmd exec success, means the ip is from guestnetwork*/
	sprintf(cmd,"ubus call client_mgmt get {\\\"request_type\\\":0} | "
		"grep -A 4 %s |"
		"grep \'\"GUEST\"\'",sa_straddr(&cl->peeraddr));
	retCode = system(cmd);
	guest = WEXITSTATUS(retCode);
	if(guest == 0)
	{
		isguest = 1;
		char tmp_path[128];
		memset(tmp_path, 0, sizeof(tmp_path));
		sprintf(tmp_path, "webpages/init.%shtml", webpage_time);
		if( 
			uh_path_match("webpages/pages", req->url) || 
			uh_path_match("webpages/login.html", req->url) || 
			uh_path_match(tmp_path, req->url)
			)
		{
			return false;
		}
	}
#endif
#ifdef HAVE_LUA
	/* Lua request? */
	if (conf->lua_state &&
		uh_path_match(conf->lua_prefix, req->url))
	{
		return conf->lua_request(cl, conf->lua_state);
	}
	else
#endif

#ifdef HAVE_UBUS
	/* ubus request? */
	if (conf->ubus_state &&
		uh_path_match(conf->ubus_prefix, req->url))
	{
		return conf->ubus_request(cl, conf->ubus_state);
	}
	else
#endif

	/* dispatch request */
	if ((pin = uh_path_lookup(cl, req->url)) != NULL)
	{
		/* auth ok? */
		if (!pin->redirected && uh_auth_check(cl, req, pin))
		{
#ifdef HAVE_CGI
			if (uh_path_match(conf->cgi_prefix, pin->name) ||
				(ipr = uh_interpreter_lookup(pin->phys)) != NULL)
			{
#ifdef CLOUD_SUPPORT
				if(isguest)
				{
					if(!( 
						strstr(req->url, "stok=/wan_error") || 
						strstr(req->url, "stok=/upgrade")
						))
					{
						return false;
					}
				}
#endif
				return uh_cgi_request(cl, pin, ipr);
			}
#endif
#ifdef CLOUD_SUPPORT
			if(isguest)
			{
				char tmp_path[128];
				memset(tmp_path, 0, sizeof(tmp_path));
				sprintf(tmp_path, "webpages/init.%shtml", webpage_time);
				if( 
					strstr(pin->phys, "webpages/pages") || 
					strstr(pin->phys, "webpages/login.html") || 
					strstr(pin->phys, tmp_path)
					)
				{
					return false;
				}
			}
#endif
			return uh_file_request(cl, pin);
		}
	}

	/* 404 - pass 1 */
	else
	{
		/* Try to invoke an error handler */
		if ((pin = uh_path_lookup(cl, conf->error_handler)) != NULL)
		{
			/* auth ok? */
			if (uh_auth_check(cl, req, pin))
			{
				req->redirect_status = 404;
#ifdef HAVE_CGI
				if (uh_path_match(conf->cgi_prefix, pin->name) ||
					(ipr = uh_interpreter_lookup(pin->phys)) != NULL)
				{
					return uh_cgi_request(cl, pin, ipr);
				}
#endif
				return uh_file_request(cl, pin);
			}
		}

		/* 404 - pass 2 */
		else
		{
			uh_http_sendhf(cl, 404, "Not Found", "No such file or directory");
		}
	}

	return false;
}

static void uh_socket_cb(struct uloop_fd *u, unsigned int events);

static void uh_listener_cb(struct uloop_fd *u, unsigned int events)
{
	int new_fd;
	struct listener *serv;
	struct client *cl;
	struct config *conf;

	struct sockaddr_in6 sa;
	socklen_t sl = sizeof(sa);

	serv = container_of(u, struct listener, fd);
	conf = serv->conf;

	/* defer client if maximum number of requests is exceeded */
	if (serv->n_clients >= conf->max_requests)
		return;

	/* handle new connections */
	if ((new_fd = accept(u->fd, (struct sockaddr *)&sa, &sl)) != -1)
	{
		D("SRV: Server(%d) accept => Client(%d)\n", u->fd, new_fd);

		/* add to global client list */
		if ((cl = uh_client_add(new_fd, serv, &sa)) != NULL)
		{
			/* add client socket to global fdset */
			uh_ufd_add(&cl->fd, uh_socket_cb, ULOOP_READ);
			fd_cloexec(cl->fd.fd);

#ifdef HAVE_TLS
			/* setup client tls context */
			if (conf->tls)
			{
				if (conf->tls_accept(cl) < 1)
				{
					D("SRV: Client(%d) SSL handshake failed, drop\n", new_fd);

					/* remove from global client list */
					uh_http_response(cl, 400, "Bad Request");
					uh_client_remove(cl);
					return;
				}
			}
#endif
		}

		/* insufficient resources */
		else
		{
			fprintf(stderr, "uh_client_add(): Cannot allocate memory\n");
			close(new_fd);
		}
	}
}

static void uh_client_cb(struct client *cl, unsigned int events);

static void uh_rpipe_cb(struct uloop_fd *u, unsigned int events)
{
	struct client *cl = container_of(u, struct client, rpipe);

	D("SRV: Client(%d) rpipe readable\n", cl->fd.fd);

	uh_client_cb(cl, ULOOP_WRITE);
}

static void uh_socket_cb(struct uloop_fd *u, unsigned int events)
{
	struct client *cl = container_of(u, struct client, fd);

	D("SRV: Client(%d) socket readable\n", cl->fd.fd);

	uh_client_cb(cl, ULOOP_READ);
}

#if defined(HAVE_CGI) || defined(HAVE_LUA) || defined(HAVE_UBUS)
static void uh_child_cb(struct uloop_process *p, int rv)
{
	struct client *cl = container_of(p, struct client, proc);

	D("SRV: Client(%d) child(%d) dead\n", cl->fd.fd, cl->proc.pid);

	uh_client_cb(cl, ULOOP_READ | ULOOP_WRITE);
}

static void uh_kill9_cb(struct uloop_timeout *t)
{
	struct client *cl = container_of(t, struct client, timeout);

	if (!kill(cl->proc.pid, 0))
	{
		D("SRV: Client(%d) child(%d) kill(SIGKILL)...\n",
		  cl->fd.fd, cl->proc.pid);

		kill(cl->proc.pid, SIGKILL);
	}
}

static void uh_timeout_cb(struct uloop_timeout *t)
{
	struct client *cl = container_of(t, struct client, timeout);

	D("SRV: Client(%d) child(%d) timed out\n", cl->fd.fd, cl->proc.pid);

	if (!kill(cl->proc.pid, 0))
	{
		D("SRV: Client(%d) child(%d) kill(SIGTERM)...\n",
		  cl->fd.fd, cl->proc.pid);

		kill(cl->proc.pid, SIGTERM);

		cl->timeout.cb = uh_kill9_cb;
		uloop_timeout_set(&cl->timeout, 1000);
	}
}
#endif

static void uh_client_cb(struct client *cl, unsigned int events)
{
	int i;
	struct config *conf;
	struct http_request *req;

	conf = cl->server->conf;

	D("SRV: Client(%d) enter callback\n", cl->fd.fd);

	/* undispatched yet */
	if (!cl->dispatched)
	{
		/* we have no headers yet and this was a write event, ignore... */
		if (!(events & ULOOP_READ))
		{
			D("SRV: Client(%d) ignoring write event before headers\n", cl->fd.fd);
			return;
		}

		/* attempt to receive and parse headers */
		if (!(req = uh_http_header_recv(cl)))
		{
			D("SRV: Client(%d) failed to receive header\n", cl->fd.fd);
			uh_client_shutdown(cl);
			return;
		}

		/* process expect headers */
		foreach_header(i, req->headers)
		{
			if (strcasecmp(req->headers[i], "Expect"))
				continue;

			if (strcasecmp(req->headers[i+1], "100-continue"))
			{
				D("SRV: Client(%d) unknown expect header (%s)\n",
				  cl->fd.fd, req->headers[i+1]);

				uh_http_response(cl, 417, "Precondition Failed");
				uh_client_shutdown(cl);
				return;
			}
			else
			{
				D("SRV: Client(%d) sending HTTP/1.1 100 Continue\n", cl->fd.fd);

				uh_http_sendf(cl, NULL, "HTTP/1.1 100 Continue\r\n\r\n");
				cl->httpbuf.len = 0; /* client will re-send the body */
				break;
			}
		}

		/* RFC1918 filtering */
		if (conf->rfc1918_filter &&
			sa_rfc1918(&cl->peeraddr) && !sa_rfc1918(&cl->servaddr))
		{
			uh_http_sendhf(cl, 403, "Forbidden",
						   "Rejected request from RFC1918 IP "
						   "to public server address");

			uh_client_shutdown(cl);
			return;
		}

		/* dispatch request */
		if (!uh_dispatch_request(cl, req))
		{
			D("SRV: Client(%d) failed to dispach request\n", cl->fd.fd);
			uh_client_shutdown(cl);
			return;
		}

		/* request handler spawned a pipe, register handler */
		if (cl->rpipe.fd > -1)
		{
			D("SRV: Client(%d) pipe(%d) spawned\n", cl->fd.fd, cl->rpipe.fd);

			uh_ufd_add(&cl->rpipe, uh_rpipe_cb, ULOOP_READ);
		}

		/* request handler spawned a child, register handler */
#if defined(HAVE_CGI) || defined(HAVE_LUA) || defined(HAVE_UBUS)
		if (cl->proc.pid)
		{
			D("SRV: Client(%d) child(%d) spawned\n", cl->fd.fd, cl->proc.pid);

			cl->proc.cb = uh_child_cb;
			uloop_process_add(&cl->proc);

			cl->timeout.cb = uh_timeout_cb;
			uloop_timeout_set(&cl->timeout, conf->script_timeout * 1000);
		}
#endif

		/* header processing complete */
		D("SRV: Client(%d) dispatched\n", cl->fd.fd);
		cl->dispatched = true;
	}

	if (!cl->cb(cl))
	{
		D("SRV: Client(%d) response callback signalized EOF\n", cl->fd.fd);
		uh_client_shutdown(cl);
		return;
	}
}

#ifdef HAVE_TLS
static int uh_inittls(struct config *conf)
{
	/* library handle */
	void *lib;

	/* already loaded */
	if (conf->tls != NULL)
		return 0;

	/* load TLS plugin */
	if (!(lib = dlopen("uhttpd_tls.so", RTLD_LAZY | RTLD_GLOBAL)))
	{
		fprintf(stderr,
				"Notice: Unable to load TLS plugin - disabling SSL support! "
				"(Reason: %s)\n", dlerror()
		);

		return 1;
	}
	else
	{
		/* resolve functions */
		if (!(conf->tls_init   = dlsym(lib, "uh_tls_ctx_init"))      ||
		    !(conf->tls_cert   = dlsym(lib, "uh_tls_ctx_cert"))      ||
		    !(conf->tls_key    = dlsym(lib, "uh_tls_ctx_key"))       ||
		    !(conf->tls_free   = dlsym(lib, "uh_tls_ctx_free"))      ||
		    !(conf->tls_accept = dlsym(lib, "uh_tls_client_accept")) ||
		    !(conf->tls_close  = dlsym(lib, "uh_tls_client_close"))  ||
		    !(conf->tls_recv   = dlsym(lib, "uh_tls_client_recv"))   ||
		    !(conf->tls_send   = dlsym(lib, "uh_tls_client_send")))
		{
			fprintf(stderr,
					"Error: Failed to lookup required symbols "
					"in TLS plugin: %s\n", dlerror()
			);
			exit(1);
		}

		/* init SSL context */
		if (!(conf->tls = conf->tls_init()))
		{
			fprintf(stderr, "Error: Failed to initalize SSL context\n");
			exit(1);
		}
	}

	return 0;
}
#endif

#ifdef HAVE_LUA
static int uh_initlua(struct config *conf)
{
	/* library handle */
	void *lib;

	/* already loaded */
	if (conf->lua_state != NULL)
		return 0;

	/* load Lua plugin */
	if (!(lib = dlopen("uhttpd_lua.so", RTLD_LAZY | RTLD_GLOBAL)))
	{
		fprintf(stderr,
				"Notice: Unable to load Lua plugin - disabling Lua support! "
				"(Reason: %s)\n", dlerror());

		return 1;
	}
	else
	{
		/* resolve functions */
		if (!(conf->lua_init    = dlsym(lib, "uh_lua_init"))    ||
		    !(conf->lua_close   = dlsym(lib, "uh_lua_close"))   ||
		    !(conf->lua_request = dlsym(lib, "uh_lua_request")))
		{
			fprintf(stderr,
					"Error: Failed to lookup required symbols "
					"in Lua plugin: %s\n", dlerror()
			);
			exit(1);
		}

		/* init Lua runtime if handler is specified */
		if (conf->lua_handler)
		{
			/* default lua prefix */
			if (!conf->lua_prefix)
				conf->lua_prefix = "/lua";

			conf->lua_state = conf->lua_init(conf);
		}
	}

	return 0;
}
#endif

#ifdef HAVE_UBUS
static int uh_initubus(struct config *conf)
{
	/* library handle */
	void *lib;

	/* already loaded */
	if (conf->ubus_state != NULL)
		return 0;

	/* load ubus plugin */
	if (!(lib = dlopen("uhttpd_ubus.so", RTLD_LAZY | RTLD_GLOBAL)))
	{
		fprintf(stderr,
				"Notice: Unable to load ubus plugin - disabling ubus support! "
				"(Reason: %s)\n", dlerror());

		return 1;
	}
	else if (conf->ubus_prefix)
	{
		/* resolve functions */
		if (!(conf->ubus_init    = dlsym(lib, "uh_ubus_init"))    ||
		    !(conf->ubus_close   = dlsym(lib, "uh_ubus_close"))   ||
		    !(conf->ubus_request = dlsym(lib, "uh_ubus_request")))
		{
			fprintf(stderr,
					"Error: Failed to lookup required symbols "
					"in ubus plugin: %s\n", dlerror()
			);
			exit(1);
		}

		/* initialize ubus */
		conf->ubus_state = conf->ubus_init(conf);
	}

	return 0;
}
#endif

static int get_modified_time(char *ctm)
{
	FILE *f = NULL;
	int err = 1;

	FILE *fp_webpagesTime = NULL;
	char manifest_path[128];
	memset(webpage_time, 0, sizeof(webpage_time));
	fp_webpagesTime = fopen("/etc/webpage_time", "r");
	if(fp_webpagesTime)
	{
		fgets(webpage_time, sizeof(webpage_time)-2, fp_webpagesTime);
		if (strlen(webpage_time) > 0)
		{
			webpage_time[strlen(webpage_time)] = '.';
		}	
		fclose(fp_webpagesTime);
	}

	f = fopen(CONFIG_FILE, "r");

	if(!f)
	{
		memset(manifest_path, 0, 128);
		sprintf(manifest_path, "/www/webpages/app.%smanifest", webpage_time);
		f = fopen(manifest_path, "r");
		if(!f)
		{
			return err;
		}
	}
	while (!feof(f))
	{
		if(fgets(ctm, 30, f) == NULL)
			continue;
		if (ctm[0] != '#' || ctm[5] != '.' || ctm[8] != '.' ||
			ctm[11] != '-' || ctm[14] != ':')
			continue;
		err = 0;
		break;
	}
	
	fclose(f);
	return err;
}

int main (int argc, char **argv)
{
	/* working structs */
	struct addrinfo hints;
	struct sigaction sa;
	struct config conf;

	/* maximum file descriptor number */
	int cur_fd = 0;

#ifdef HAVE_TLS
	int tls = 0;
	int keys = 0;
#endif

	int bound = 0;
	int nofork = 0;

	/* args */
	int opt;
	char addr[128];
	char *port = NULL;

	/*the compile time*/
	char ctm[30];
	int err;

	memset(ctm, 0, 30);
	err = get_modified_time(ctm);
	if(err ==0)
	{
		struct tm m_tm;

		sscanf(ctm, "#%d.%d.%d-%d:%d:%d", &m_tm.tm_year, &m_tm.tm_mon, &m_tm.tm_mday,
			&m_tm.tm_hour, &m_tm.tm_min, &m_tm.tm_sec);
		m_tm.tm_year -= 1900;
		m_tm.tm_mon -= 1;
		m_tm.tm_isdst = -1;
		m_modified_time = mktime(&m_tm);
	}
	else
		m_modified_time = time(NULL);

	/* handle SIGPIPE, SIGINT, SIGTERM */
	sa.sa_flags = 0;
	sigemptyset(&sa.sa_mask);

	sa.sa_handler = SIG_IGN;
	sigaction(SIGPIPE, &sa, NULL);

	sa.sa_handler = uh_sigterm;
	sigaction(SIGINT,  &sa, NULL);
	sigaction(SIGTERM, &sa, NULL);

	/* prepare addrinfo hints */
	memset(&hints, 0, sizeof(hints));
	hints.ai_family   = AF_UNSPEC;
	hints.ai_socktype = SOCK_STREAM;
	hints.ai_flags    = AI_PASSIVE;

	/* parse args */
	memset(&conf, 0, sizeof(conf));

	uloop_init();

	while ((opt = getopt(argc, argv,
						 "fSDRC:K:E:I:p:s:h:c:l:L:d:r:m:n:x:i:t:T:A:u:U:")) > 0)
	{
		switch(opt)
		{
			/* [addr:]port */
			case 'p':
			case 's':
				memset(addr, 0, sizeof(addr));

				if ((port = strrchr(optarg, ':')) != NULL)
				{
					if ((optarg[0] == '[') && (port > optarg) && (port[-1] == ']'))
						memcpy(addr, optarg + 1,
							min(sizeof(addr), (int)(port - optarg) - 2));
					else
						memcpy(addr, optarg,
							min(sizeof(addr), (int)(port - optarg)));

					port++;
				}
				else
				{
					port = optarg;
				}

#ifdef HAVE_TLS
				if (opt == 's')
				{
					if (uh_inittls(&conf))
					{
						fprintf(stderr,
							"Notice: TLS support is disabled, "
							"ignoring '-s %s'\n", optarg
						);
						continue;
					}

					tls = 1;
				}
#endif

				/* bind sockets */
				bound += uh_socket_bind(addr[0] ? addr : NULL, port, &hints,
				                        (opt == 's'), &conf);
				break;

#ifdef HAVE_TLS
			/* certificate */
			case 'C':
				if (!uh_inittls(&conf))
				{
					if (conf.tls_cert(conf.tls, optarg) < 1)
					{
						fprintf(stderr,
								"Error: Invalid certificate file given\n");
						exit(1);
					}

					keys++;
				}

				break;

			/* key */
			case 'K':
				if (!uh_inittls(&conf))
				{
					if (conf.tls_key(conf.tls, optarg) < 1)
					{
						fprintf(stderr,
								"Error: Invalid private key file given\n");
						exit(1);
					}

					keys++;
				}

				break;
#else
			case 'C':
			case 'K':
				fprintf(stderr,
				        "Notice: TLS support not compiled, ignoring -%c\n",
				        opt);
				break;
#endif

			/* docroot */
			case 'h':
				if (! realpath(optarg, conf.docroot))
				{
					fprintf(stderr, "Error: Invalid directory %s: %s\n",
							optarg, strerror(errno));
					exit(1);
				}
				break;

			/* error handler */
			case 'E':
				if ((strlen(optarg) == 0) || (optarg[0] != '/'))
				{
					fprintf(stderr, "Error: Invalid error handler: %s\n",
							optarg);
					exit(1);
				}
				conf.error_handler = optarg;
				break;

			/* index file */
			case 'I':
				if ((strlen(optarg) == 0) || (optarg[0] == '/'))
				{
					fprintf(stderr, "Error: Invalid index page: %s\n",
							optarg);
					exit(1);
				}
				uh_index_add(optarg);
				break;

			/* don't follow symlinks */
			case 'S':
				conf.no_symlinks = 1;
				break;

			/* don't list directories */
			case 'D':
				conf.no_dirlists = 1;
				break;

			case 'R':
				conf.rfc1918_filter = 1;
				break;

			case 'n':
				conf.max_requests = atoi(optarg);
				break;

#ifdef HAVE_CGI
			/* cgi prefix */
			case 'x':
				conf.cgi_prefix = optarg;
				break;

			/* interpreter */
			case 'i':
				if ((optarg[0] == '.') && (port = strchr(optarg, '=')))
				{
					*port++ = 0;
					uh_interpreter_add(optarg, port);
				}
				else
				{
					fprintf(stderr, "Error: Invalid interpreter: %s\n",
							optarg);
					exit(1);
				}
				break;
#else
			case 'x':
			case 'i':
				fprintf(stderr,
				        "Notice: CGI support not compiled, ignoring -%c\n",
				        opt);
				break;
#endif

#ifdef HAVE_LUA
			/* lua prefix */
			case 'l':
				conf.lua_prefix = optarg;
				break;

			/* lua handler */
			case 'L':
				conf.lua_handler = optarg;
				break;
#else
			case 'l':
			case 'L':
				fprintf(stderr,
				        "Notice: Lua support not compiled, ignoring -%c\n",
				        opt);
				break;
#endif

#ifdef HAVE_UBUS
			/* ubus prefix */
			case 'u':
				conf.ubus_prefix = optarg;
				break;

			/* ubus socket */
			case 'U':
				conf.ubus_socket = optarg;
				break;
#else
			case 'u':
			case 'U':
				fprintf(stderr,
				        "Notice: UBUS support not compiled, ignoring -%c\n",
				        opt);
				break;
#endif

#if defined(HAVE_CGI) || defined(HAVE_LUA)
			/* script timeout */
			case 't':
				conf.script_timeout = atoi(optarg);
				break;
#endif

			/* network timeout */
			case 'T':
				conf.network_timeout = atoi(optarg);
				break;

			/* tcp keep-alive */
			case 'A':
				conf.tcp_keepalive = atoi(optarg);
				break;

			/* no fork */
			case 'f':
				nofork = 1;
				break;

			/* urldecode */
			case 'd':
				if ((port = malloc(strlen(optarg)+1)) != NULL)
				{
					/* "decode" plus to space to retain compat */
					for (opt = 0; optarg[opt]; opt++)
						if (optarg[opt] == '+')
							optarg[opt] = ' ';
					/* opt now contains strlen(optarg) -- no need to re-scan */
					memset(port, 0, opt+1);
					if (uh_urldecode(port, opt, optarg, opt) < 0)
					    fprintf(stderr, "uhttpd: invalid encoding\n");

					printf("%s", port);
					free(port);
					exit(0);
				}
				break;

			/* basic auth realm */
			case 'r':
				conf.realm = optarg;
				break;

			/* md5 crypt */
			case 'm':
				printf("%s\n", crypt(optarg, "$1$"));
				exit(0);
				break;

			/* config file */
			case 'c':
				conf.file = optarg;
				break;

			default:
				fprintf(stderr,
					"Usage: %s -p [addr:]port [-h docroot]\n"
					"	-f              Do not fork to background\n"
					"	-c file         Configuration file, default is '/etc/httpd.conf'\n"
					"	-p [addr:]port  Bind to specified address and port, multiple allowed\n"
#ifdef HAVE_TLS
					"	-s [addr:]port  Like -p but provide HTTPS on this port\n"
					"	-C file         ASN.1 server certificate file\n"
					"	-K file         ASN.1 server private key file\n"
#endif
					"	-h directory    Specify the document root, default is '.'\n"
					"	-E string       Use given virtual URL as 404 error handler\n"
					"	-I string       Use given filename as index for directories, multiple allowed\n"
					"	-S              Do not follow symbolic links outside of the docroot\n"
					"	-D              Do not allow directory listings, send 403 instead\n"
					"	-R              Enable RFC1918 filter\n"
					"	-n count        Maximum allowed number of concurrent requests\n"
#ifdef HAVE_LUA
					"	-l string       URL prefix for Lua handler, default is '/lua'\n"
					"	-L file         Lua handler script, omit to disable Lua\n"
#endif
#ifdef HAVE_UBUS
					"	-u string       URL prefix for HTTP/JSON handler\n"
					"	-U file         Override ubus socket path\n"
#endif
#ifdef HAVE_CGI
					"	-x string       URL prefix for CGI handler, default is '/cgi-bin'\n"
					"	-i .ext=path    Use interpreter at path for files with the given extension\n"
#endif
#if defined(HAVE_CGI) || defined(HAVE_LUA) || defined(HAVE_UBUS)
					"	-t seconds      CGI, Lua and UBUS script timeout in seconds, default is 60\n"
#endif
					"	-T seconds      Network timeout in seconds, default is 30\n"
					"	-d string       URL decode given string\n"
					"	-r string       Specify basic auth realm\n"
					"	-m string       MD5 crypt given string\n"
					"\n", argv[0]
				);

				exit(1);
		}
	}

#ifdef HAVE_TLS
	if ((tls == 1) && (keys < 2))
	{
		fprintf(stderr, "Error: Missing private key or certificate file\n");
		exit(1);
	}
#endif

	if (bound < 1)
	{
		fprintf(stderr, "Error: No sockets bound, unable to continue\n");
		exit(1);
	}

	/* default docroot */
	if (!conf.docroot[0] && !realpath(".", conf.docroot))
	{
		fprintf(stderr, "Error: Can not determine default document root: %s\n",
			strerror(errno));
		exit(1);
	}

	/* default realm */
	if (!conf.realm)
		conf.realm = "Protected Area";

	/* config file */
	uh_config_parse(&conf);

	/* default max requests */
	if (conf.max_requests <= 0)
		conf.max_requests = 3;

	/* default network timeout */
	if (conf.network_timeout <= 0)
		conf.network_timeout = 30;

	/* default index files */
	if (!uh_index_files)
	{
		//add for cache bug
		if (strlen(webpage_time) > 0)
		{
			char tmp_path[128];
			memset(tmp_path, 0, sizeof(tmp_path));
			sprintf(tmp_path, "index.%shtml", webpage_time);
			uh_index_add(tmp_path);
		}

		uh_index_add("index.html");
		uh_index_add("index.htm");
		uh_index_add("default.html");
		uh_index_add("default.htm");
		
	}

#if defined(HAVE_CGI) || defined(HAVE_LUA) || defined(HAVE_UBUS)
	/* default script timeout */
	if (conf.script_timeout <= 0)
		conf.script_timeout = 60;
#endif

#ifdef HAVE_CGI
	/* default cgi prefix */
	if (!conf.cgi_prefix)
		conf.cgi_prefix = "/cgi-bin";
#endif

#ifdef HAVE_LUA
	/* initialize Lua runtime */
	if (conf.lua_handler)
		uh_initlua(&conf);
#endif

#ifdef HAVE_UBUS
	/* initialize ubus client */
	if (conf.ubus_prefix)
		uh_initubus(&conf);
#endif

	/* fork (if not disabled) */
	if (!nofork)
	{
		switch (fork())
		{
			case -1:
				perror("fork()");
				exit(1);

			case 0:
				/* daemon setup */
				if (chdir("/"))
					perror("chdir()");

				if ((cur_fd = open("/dev/null", O_WRONLY)) > -1)
					dup2(cur_fd, 0);

				if ((cur_fd = open("/dev/null", O_RDONLY)) > -1)
					dup2(cur_fd, 1);

				if ((cur_fd = open("/dev/null", O_RDONLY)) > -1)
					dup2(cur_fd, 2);

				break;

			default:
				exit(0);
		}
	}

	/* server main loop */
	uloop_run();

#ifdef HAVE_LUA
	/* destroy the Lua state */
	if (conf.lua_state != NULL)
		conf.lua_close(conf.lua_state);
#endif

#ifdef HAVE_UBUS
	/* destroy the ubus state */
	if (conf.ubus_state != NULL)
		conf.ubus_close(conf.ubus_state);
#endif

	return 0;
}
