/*
   Unix SMB/CIFS implementation.

   CLDAP server structures

   Copyright (C) Andrew Bartlett <abartlet@samba.org> 2008

   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* parser auto-generated by pidl, then hand-modified by abartlet */

#include "includes.h"
#include "../libcli/netlogon/netlogon.h"

/* Manually modified to handle the dom_sid being optional based on if it is present or all zero */
enum ndr_err_code ndr_push_NETLOGON_SAM_LOGON_REQUEST(struct ndr_push *ndr, int ndr_flags, const struct NETLOGON_SAM_LOGON_REQUEST *r)
{
	if (ndr_flags & NDR_SCALARS) {
		NDR_CHECK(ndr_push_align(ndr, 4));
		NDR_CHECK(ndr_push_uint16(ndr, NDR_SCALARS, r->request_count));
		{
			uint32_t _flags_save_string = ndr->flags;
			ndr_set_flags(&ndr->flags, LIBNDR_FLAG_STR_NULLTERM);
			NDR_CHECK(ndr_push_string(ndr, NDR_SCALARS, r->computer_name));
			ndr->flags = _flags_save_string;
		}
		{
			uint32_t _flags_save_string = ndr->flags;
			ndr_set_flags(&ndr->flags, LIBNDR_FLAG_STR_NULLTERM);
			NDR_CHECK(ndr_push_string(ndr, NDR_SCALARS, r->user_name));
			ndr->flags = _flags_save_string;
		}
		{
			uint32_t _flags_save_string = ndr->flags;
			ndr_set_flags(&ndr->flags, LIBNDR_FLAG_STR_ASCII|LIBNDR_FLAG_STR_NULLTERM);
			NDR_CHECK(ndr_push_string(ndr, NDR_SCALARS, r->mailslot_name));
			ndr->flags = _flags_save_string;
		}
		NDR_CHECK(ndr_push_samr_AcctFlags(ndr, NDR_SCALARS, r->acct_control));
		NDR_CHECK(ndr_push_uint32(ndr, NDR_SCALARS, ndr_size_dom_sid0(&r->sid, ndr->flags)));
		if (ndr_size_dom_sid0(&r->sid, ndr->flags)) {
			struct ndr_push *_ndr_sid;
			uint32_t _flags_save_DATA_BLOB = ndr->flags;
			ndr->flags &= ~LIBNDR_FLAG_NOALIGN;
			ndr_set_flags(&ndr->flags, LIBNDR_FLAG_ALIGN4);
			NDR_CHECK(ndr_push_DATA_BLOB(ndr, NDR_SCALARS, r->_pad));
			ndr->flags = _flags_save_DATA_BLOB;
			NDR_CHECK(ndr_push_subcontext_start(ndr, &_ndr_sid, 0, ndr_size_dom_sid0(&r->sid, ndr->flags)));
			NDR_CHECK(ndr_push_dom_sid0(_ndr_sid, NDR_SCALARS|NDR_BUFFERS, &r->sid));
			NDR_CHECK(ndr_push_subcontext_end(ndr, _ndr_sid, 0, ndr_size_dom_sid0(&r->sid, ndr->flags)));
		}
		NDR_CHECK(ndr_push_netlogon_nt_version_flags(ndr, NDR_SCALARS, r->nt_version));
		NDR_CHECK(ndr_push_uint16(ndr, NDR_SCALARS, r->lmnt_token));
		NDR_CHECK(ndr_push_uint16(ndr, NDR_SCALARS, r->lm20_token));
	}
	if (ndr_flags & NDR_BUFFERS) {
	}
	return NDR_ERR_SUCCESS;
}

/* Manually modified to handle the dom_sid being optional based on if it is present (size is non-zero) or not */
enum ndr_err_code ndr_pull_NETLOGON_SAM_LOGON_REQUEST(struct ndr_pull *ndr, int ndr_flags, struct NETLOGON_SAM_LOGON_REQUEST *r)
{
	if (ndr_flags & NDR_SCALARS) {
		NDR_CHECK(ndr_pull_align(ndr, 4));
		NDR_CHECK(ndr_pull_uint16(ndr, NDR_SCALARS, &r->request_count));
		{
			uint32_t _flags_save_string = ndr->flags;
			ndr_set_flags(&ndr->flags, LIBNDR_FLAG_STR_NULLTERM);
			NDR_CHECK(ndr_pull_string(ndr, NDR_SCALARS, &r->computer_name));
			ndr->flags = _flags_save_string;
		}
		{
			uint32_t _flags_save_string = ndr->flags;
			ndr_set_flags(&ndr->flags, LIBNDR_FLAG_STR_NULLTERM);
			NDR_CHECK(ndr_pull_string(ndr, NDR_SCALARS, &r->user_name));
			ndr->flags = _flags_save_string;
		}
		{
			uint32_t _flags_save_string = ndr->flags;
			ndr_set_flags(&ndr->flags, LIBNDR_FLAG_STR_ASCII|LIBNDR_FLAG_STR_NULLTERM);
			NDR_CHECK(ndr_pull_string(ndr, NDR_SCALARS, &r->mailslot_name));
			ndr->flags = _flags_save_string;
		}
		NDR_CHECK(ndr_pull_samr_AcctFlags(ndr, NDR_SCALARS, &r->acct_control));
		NDR_CHECK(ndr_pull_uint32(ndr, NDR_SCALARS, &r->sid_size));
		if (r->sid_size) {
			uint32_t _flags_save_DATA_BLOB = ndr->flags;
			struct ndr_pull *_ndr_sid;
			ndr->flags &= ~LIBNDR_FLAG_NOALIGN;
			ndr_set_flags(&ndr->flags, LIBNDR_FLAG_ALIGN4);
			NDR_CHECK(ndr_pull_DATA_BLOB(ndr, NDR_SCALARS, &r->_pad));
			ndr->flags = _flags_save_DATA_BLOB;
			NDR_CHECK(ndr_pull_subcontext_start(ndr, &_ndr_sid, 0, r->sid_size));
			NDR_CHECK(ndr_pull_dom_sid0(_ndr_sid, NDR_SCALARS|NDR_BUFFERS, &r->sid));
			NDR_CHECK(ndr_pull_subcontext_end(ndr, _ndr_sid, 0, r->sid_size));
		} else {
			ZERO_STRUCT(r->sid);
		}
		NDR_CHECK(ndr_pull_netlogon_nt_version_flags(ndr, NDR_SCALARS, &r->nt_version));
		NDR_CHECK(ndr_pull_uint16(ndr, NDR_SCALARS, &r->lmnt_token));
		NDR_CHECK(ndr_pull_uint16(ndr, NDR_SCALARS, &r->lm20_token));
	}
	if (ndr_flags & NDR_BUFFERS) {
	}
	return NDR_ERR_SUCCESS;
}

/* Manually modified to only push some parts of the structure if certain flags are set */
enum ndr_err_code ndr_push_NETLOGON_SAM_LOGON_RESPONSE_EX_with_flags(struct ndr_push *ndr, int ndr_flags, const struct NETLOGON_SAM_LOGON_RESPONSE_EX *r)
{
	{
		uint32_t _flags_save_STRUCT = ndr->flags;
		ndr_set_flags(&ndr->flags, LIBNDR_FLAG_NOALIGN);
		if (ndr_flags & NDR_SCALARS) {
			NDR_CHECK(ndr_push_align(ndr, 4));
			NDR_CHECK(ndr_push_netlogon_command(ndr, NDR_SCALARS, r->command));
			NDR_CHECK(ndr_push_uint16(ndr, NDR_SCALARS, r->sbz));
			NDR_CHECK(ndr_push_nbt_server_type(ndr, NDR_SCALARS, r->server_type));
			NDR_CHECK(ndr_push_GUID(ndr, NDR_SCALARS, &r->domain_uuid));
			NDR_CHECK(ndr_push_nbt_string(ndr, NDR_SCALARS, r->forest));
			NDR_CHECK(ndr_push_nbt_string(ndr, NDR_SCALARS, r->dns_domain));
			NDR_CHECK(ndr_push_nbt_string(ndr, NDR_SCALARS, r->pdc_dns_name));
			NDR_CHECK(ndr_push_nbt_string(ndr, NDR_SCALARS, r->domain_name));
			NDR_CHECK(ndr_push_nbt_string(ndr, NDR_SCALARS, r->pdc_name));
			NDR_CHECK(ndr_push_nbt_string(ndr, NDR_SCALARS, r->user_name));
			NDR_CHECK(ndr_push_nbt_string(ndr, NDR_SCALARS, r->server_site));
			NDR_CHECK(ndr_push_nbt_string(ndr, NDR_SCALARS, r->client_site));
			if (r->nt_version & NETLOGON_NT_VERSION_5EX_WITH_IP) {
				NDR_CHECK(ndr_push_uint8(ndr, NDR_SCALARS, ndr_size_nbt_sockaddr(&r->sockaddr, ndr->flags)));
				{
					struct ndr_push *_ndr_sockaddr;
					NDR_CHECK(ndr_push_subcontext_start(ndr, &_ndr_sockaddr, 0, ndr_size_nbt_sockaddr(&r->sockaddr, ndr->flags)));
					NDR_CHECK(ndr_push_nbt_sockaddr(_ndr_sockaddr, NDR_SCALARS|NDR_BUFFERS, &r->sockaddr));
					NDR_CHECK(ndr_push_subcontext_end(ndr, _ndr_sockaddr, 0, ndr_size_nbt_sockaddr(&r->sockaddr, ndr->flags)));
				}
			}
			if (r->nt_version & NETLOGON_NT_VERSION_WITH_CLOSEST_SITE) {
				NDR_CHECK(ndr_push_nbt_string(ndr, NDR_SCALARS, r->next_closest_site));
			}
			NDR_CHECK(ndr_push_netlogon_nt_version_flags(ndr, NDR_SCALARS, r->nt_version));
			NDR_CHECK(ndr_push_uint16(ndr, NDR_SCALARS, r->lmnt_token));
			NDR_CHECK(ndr_push_uint16(ndr, NDR_SCALARS, r->lm20_token));
		}
		if (ndr_flags & NDR_BUFFERS) {
			NDR_CHECK(ndr_push_GUID(ndr, NDR_BUFFERS, &r->domain_uuid));
		}
		ndr->flags = _flags_save_STRUCT;
	}
	return NDR_ERR_SUCCESS;
}

/* Manually modified to only pull some parts of the structure if certain flags provided */
enum ndr_err_code ndr_pull_NETLOGON_SAM_LOGON_RESPONSE_EX_with_flags(struct ndr_pull *ndr, int ndr_flags, struct NETLOGON_SAM_LOGON_RESPONSE_EX *r,
								     uint32_t nt_version_flags)
{
	{
		uint32_t _flags_save_STRUCT = ndr->flags;
		ZERO_STRUCTP(r);
		ndr_set_flags(&ndr->flags, LIBNDR_FLAG_NOALIGN);
		if (ndr_flags & NDR_SCALARS) {
			NDR_CHECK(ndr_pull_align(ndr, 4));
			NDR_CHECK(ndr_pull_netlogon_command(ndr, NDR_SCALARS, &r->command));
			NDR_CHECK(ndr_pull_uint16(ndr, NDR_SCALARS, &r->sbz));
			NDR_CHECK(ndr_pull_nbt_server_type(ndr, NDR_SCALARS, &r->server_type));
			NDR_CHECK(ndr_pull_GUID(ndr, NDR_SCALARS, &r->domain_uuid));
			NDR_CHECK(ndr_pull_nbt_string(ndr, NDR_SCALARS, &r->forest));
			NDR_CHECK(ndr_pull_nbt_string(ndr, NDR_SCALARS, &r->dns_domain));
			NDR_CHECK(ndr_pull_nbt_string(ndr, NDR_SCALARS, &r->pdc_dns_name));
			NDR_CHECK(ndr_pull_nbt_string(ndr, NDR_SCALARS, &r->domain_name));
			NDR_CHECK(ndr_pull_nbt_string(ndr, NDR_SCALARS, &r->pdc_name));
			NDR_CHECK(ndr_pull_nbt_string(ndr, NDR_SCALARS, &r->user_name));
			NDR_CHECK(ndr_pull_nbt_string(ndr, NDR_SCALARS, &r->server_site));
			NDR_CHECK(ndr_pull_nbt_string(ndr, NDR_SCALARS, &r->client_site));
			if (nt_version_flags & NETLOGON_NT_VERSION_5EX_WITH_IP) {
				NDR_CHECK(ndr_pull_uint8(ndr, NDR_SCALARS, &r->sockaddr_size));
				{
					struct ndr_pull *_ndr_sockaddr;
					NDR_CHECK(ndr_pull_subcontext_start(ndr, &_ndr_sockaddr, 0, r->sockaddr_size));
					NDR_CHECK(ndr_pull_nbt_sockaddr(_ndr_sockaddr, NDR_SCALARS|NDR_BUFFERS, &r->sockaddr));
					NDR_CHECK(ndr_pull_subcontext_end(ndr, _ndr_sockaddr, 0, r->sockaddr_size));
				}
			}
			if (nt_version_flags & NETLOGON_NT_VERSION_WITH_CLOSEST_SITE) {
				NDR_CHECK(ndr_pull_nbt_string(ndr, NDR_SCALARS, &r->next_closest_site));
			}
			NDR_CHECK(ndr_pull_netlogon_nt_version_flags(ndr, NDR_SCALARS, &r->nt_version));
			if (r->nt_version != nt_version_flags) {
				return NDR_ERR_VALIDATE;
			}
			NDR_CHECK(ndr_pull_uint16(ndr, NDR_SCALARS, &r->lmnt_token));
			NDR_CHECK(ndr_pull_uint16(ndr, NDR_SCALARS, &r->lm20_token));
		}
		if (ndr_flags & NDR_BUFFERS) {
			NDR_CHECK(ndr_pull_GUID(ndr, NDR_BUFFERS, &r->domain_uuid));
		}
		ndr->flags = _flags_save_STRUCT;
	}
	return NDR_ERR_SUCCESS;
}
