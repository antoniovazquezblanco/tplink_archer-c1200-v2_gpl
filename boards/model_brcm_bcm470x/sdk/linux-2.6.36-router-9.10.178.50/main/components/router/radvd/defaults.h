/*
 *   $Id: defaults.h 241182 2011-02-17 21:50:03Z $
 *
 *   Authors:
 *    Lars Fenneberg		<lf@elemental.net>	 
 *
 *   This software is Copyright 1996,1997 by the above mentioned author(s), 
 *   All Rights Reserved.
 *
 *   The license which is distributed with this software in the file COPYRIGHT
 *   applies to this software. If your distribution is missing this file, you
 *   may request it from <pekkas@netcore.fi>.
 *
 */

#ifndef DEFAULTS_H
#define DEFAULTS_H

#include <config.h>
#include <includes.h>
#include <radvd.h>

/* maximum message size for incoming and outgoing RSs and RAs */

#define MSG_SIZE			4096

#define MAX2(X,Y) ( (( X ) >=  ( Y )) ? ( X ) : ( Y ))


/* Router Configuration Variables: */

/* For each multicast interface: */

#define DFLT_IgnoreIfMissing		0
#define DFLT_AdvSendAdv			0
#define DFLT_MaxRtrAdvInterval		600
#define DFLT_MinRtrAdvInterval(iface)	(0.33 * (iface)->MaxRtrAdvInterval)
#define DFLT_AdvManagedFlag		0
#define DFLT_AdvOtherConfigFlag		0
#define DFLT_AdvLinkMTU			0
#define DFLT_AdvReachableTime		0
#define DFLT_AdvRetransTimer		0
#define DFLT_AdvCurHopLimit		64	/* as per RFC 1700 or the 
						   next incarnation of it :) */
#define DFLT_AdvDefaultLifetime(iface)	MAX2(1, (int)(3.0 * (iface)->MaxRtrAdvInterval))
#define DFLT_MinDelayBetweenRAs		MIN_DELAY_BETWEEN_RAS
#define DFLT_AdvDefaultPreference	0

/* Options sent with RA */

#define DFLT_AdvSourceLLAddress		1

/* Each prefix has an associated: */

#define DFLT_AdvValidLifetime		2592000 /* seconds */
#define DFLT_AdvOnLinkFlag		1
#define DFLT_AdvPreferredLifetime	604800 /* seconds */
#define DFLT_AdvAutonomousFlag		1

/* Each route has an associated: */
#define DFLT_AdvRouteLifetime(iface)	(3 * (iface)->MaxRtrAdvInterval)

#define DFLT_AdvRoutePreference		0 /* medium*/

/* Protocol (RFC2461) constants: */

/* Router constants: */

#define MAX_INITIAL_RTR_ADVERT_INTERVAL	16
#define MAX_INITIAL_RTR_ADVERTISEMENTS	3
#define MAX_FINAL_RTR_ADVERTISEMENTS	3
#define MIN_DELAY_BETWEEN_RAS		3.0
#define MIN_DELAY_BETWEEN_RAS_MIPv6     (30.0/1000.0)
#define MAX_RA_DELAY_TIME		(1000.0/2.0) /* milliseconds */

/* Host constants: */

#define MAX_RTR_SOLICITATION_DELAY	1
#define RTR_SOLICITATION_INTERVAL	4
#define MAX_RTR_SOLICITATIONS		3

/* Node constants: */

#define MAX_MULTICAST_SOLICIT		3
#define MAX_UNICAST_SOLICIT		3
#define MAX_ANYCAST_DELAY_TIME		1
#define MAX_NEIGHBOR_ADVERTISEMENT	3
#define REACHABLE_TIME			30000 /* milliseconds */
#define RETRANS_TIMER			1000 /* milliseconds */
#define DELAY_FIRST_PROBE_TIME		5
#define MIN_RANDOM_FACTOR		(1.0/2.0)
#define MAX_RANDOM_FACTOR		(3.0/2.0)

/* MAX and MIN (RFC2461), Mobile IPv6 extensions will override if in use */

#define MIN_MaxRtrAdvInterval		4
#define MAX_MaxRtrAdvInterval		1800

#define MIN_MinRtrAdvInterval		3
#define MAX_MinRtrAdvInterval(iface)	(0.75 * (iface)->MaxRtrAdvInterval)

#define MIN_AdvDefaultLifetime(iface)	(MAX2(1,(iface)->MaxRtrAdvInterval))
#define MAX_AdvDefaultLifetime		9000

#define	MIN_AdvLinkMTU			1280

#define MAX_AdvReachableTime		3600000 /* 1 hour in milliseconds */

#define MAX_AdvCurHopLimit		255

#define MAX_PrefixLen			128

/*
 * Mobile IPv6 extensions, off by default
 */

#define DFLT_AdvRouterAddr		0
#define DFLT_AdvHomeAgentFlag		0
#define DFLT_AdvIntervalOpt		0
#define DFLT_AdvHomeAgentInfo		0

/* Option types (defined also at least in glibc 2.2's netinet/icmp6.h) */

#ifndef ND_OPT_RTR_ADV_INTERVAL
#define ND_OPT_RTR_ADV_INTERVAL         7
#endif
#ifndef ND_OPT_HOME_AGENT_INFO
#define ND_OPT_HOME_AGENT_INFO          8
#endif

/* de-facto codepoint used by many implementations was '9',
   the official IANA assignment will be '24' */
#undef ND_OPT_ROUTE_INFORMATION
#define  ND_OPT_ROUTE_INFORMATION	24

struct nd_opt_route_info_local     /* route information */
  {
    uint8_t   nd_opt_ri_type;
    uint8_t   nd_opt_ri_len;
    uint8_t   nd_opt_ri_prefix_len;
    uint8_t   nd_opt_ri_flags_reserved;
    uint32_t  nd_opt_ri_lifetime;
    struct in6_addr  nd_opt_ri_prefix;
  };

/* the reserved field is 8 bits and we're interested of the middle two: 000xx000 */
#define ND_OPT_RI_PRF_SHIFT	3
#define ND_OPT_RI_PRF_MASK	(3 << ND_OPT_RI_PRF_SHIFT) /* 00011000 = 0x18 */

/* Flags */

#ifndef ND_RA_FLAG_HOME_AGENT
#define ND_RA_FLAG_HOME_AGENT		0x20
#endif
#ifndef ND_OPT_PI_FLAG_RADDR
#define ND_OPT_PI_FLAG_RADDR		0x20
#endif

/* Configurable values */

#define DFLT_HomeAgentPreference	0
#define DFLT_HomeAgentLifetime(iface)	((iface)->AdvDefaultLifetime)

/* Other */

#define MIN_MinRtrAdvInterval_MIPv6	(3.0/100.0)
#define MIN_MaxRtrAdvInterval_MIPv6	(7.0/100.0)
#define RTR_SOLICITATION_INTERVAL_MIPv6	1 /* Recommended value by MIPv6 */

#define Cautious_MaxRtrAdvInterval      (2.0/10.0)
#define Cautious_MaxRtrAdvInterval_Leeway      (2.0/100.0)

#define MIN_HomeAgentLifetime		1 /* 0 must NOT be used */
#define MAX_HomeAgentLifetime		65520 /* 18.2 hours in secs */

/* #define MAX_RTR_SOLICITATIONS This MAY be ignored by MIPv6 */

/* NEMO extensions, off by default */
#define DFLT_AdvMobRtrSupportFlag      	0

/* Flags */

#ifndef ND_OPT_HAI_FLAG_SUPPORT_MR
#if BYTE_ORDER == BIG_ENDIAN
#define ND_OPT_HAI_FLAG_SUPPORT_MR	0x8000
#else /* BYTE_ORDER == LITTLE_ENDIAN */
#define ND_OPT_HAI_FLAG_SUPPORT_MR	0x0080
#endif
#endif

#endif
