(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Visar relevant information om Wide Area Network (Internet) anslutning."
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "MAC-adress",
				content: "Den unika fysiska adressen som tilldelats till Internet (WAN) port på routern."
			},{
				type: "name",
				title: "IP-adress",
				content: "IPv4-adress som tilldelats till Internet (WAN) port på routern. Om IP-adressen visas som 0.0.0.0, indikerar detta ingen tillgång till Internet."
			},{
				type: "name",
				title: "Nätmask",
				content: "Denna parameter bestämmer nätverksdelen och värd delen av en IP-adress."
			},{
				type: "name",
				title: "Standard-gateway",
				content: "Den IP-adress som används för att ansluta routern till nätverket."
			},{
				type: "name",
				title: "Primär DNS/Sekundär DNS",
				content: "DNS (Domain Name System) översätter värddatornamn och internet-domäner till IP-adresser. Information om dessa DNS-servrar tilldelas av Internet-leverantören (ISP)."
			},{
				type: "name",
				title: "Anslutningstyp",
				content: "Den aktuella typen av anslutning av Internet (WAN) porten."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "MAC-adress",
				content: "Den unika fysiska adressen som tilldelats till Internet (WAN) port på routern."
			},{
				type: "name",
				title: "IP-adress",
				content: "IPv6-adressen till Internet (WAN) porten på routern."
			},{
				type: "name",
				title: "Standard-gateway",
				content: "Den IP-adress som används för att ansluta routern till nätverket."
			},{
				type: "name",
				title: "Primär DNS/Sekundär DNS",
				content: "DNS (Domain Name System) översätter värddatornamn och internet-domäner till IP-adresser. Information om dessa DNS-servrar tilldelas av Internet-leverantören (ISP)."
			},{
				type: "name",
				title: "Anslutningstyp",
				content: "Den aktuella typen av anslutning av Internet (WAN) porten."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Trådlöst",
			CONTENT: [{
				type: "paragraph",
				content: "Visar information om det trådlösa nätverket."
			},{
				type: "name",
				title: "Namn på trådlöst nätverk (SSID)",
				content: "Namnet på det trådlösa nätverket, som även kallas SSID (Service Set Identifier)."
			},{
				type: "name",
				title: "Trådlös radio",
				content: "Aktuell status (på eller av) för det trådlösa nätverket."
			},{
				type: "name",
				title: "Läge",
				content: "Aktuellt trådlöst läge."
			},{
				type: "name",
				title: "Kanalbredd",
				content: "Kanalens bandbredd på det trådlösa nätverket."
			},{
				type: "name",
				title: "Kanal",
				content: "Den aktuella trådlösa kanalen och dess motsvarande frekvens (i GHz)."
			},{
				type: "name",
				title: "MAC-adress",
				content: "MAC-adressen för det trådlösa radionätverket på routern."
			},{
				type: "name",
				id: "status_wds",
				title: "WDS-status",
				content: "Aktuell status (aktiverat eller inaktiverat) WDS-läge."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Visar information om Ethernet-LAN-portar."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "MAC-adress",
				content: "Den unika fysiska adress som tilldelats Ethernet (LAN) port på routern."
			},{
				type: "name",
				title: "IP-adress",
				content: "IPv4-adressen till Ethernet (LAN) porten på routern."
			},{
				type: "name",
				title: "Nätmask",
				content: "Denna parameter bestämmer nätverksdelen och värd delen av en IP-adress."
			},{
				type: "name",
				title: "Dhcp",
				content: "Visar om routerns inbyggda DHCP-server är aktiv för enheter på LAN-portarna eller inte."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "MAC-adress",
				content: "Den unika fysiska adress som tilldelats Ethernet (LAN) port på routern."
			},{
				type: "name",
				title: "IP-adress",
				content: "IPv6-adressen till Ethernet (LAN) porten på routern."
			},{
				type: "name",
				title: "Länk-lokal adress",
				content: "IPv6-länkadress för LAN-gränssnitt."
			},{
				type: "name",
				title: "Tilldelad typ",
				content: "Den typ av IPv6 adress för LAN-gränssnitt."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Guest nätverk",
			CONTENT: [{
				type: "paragraph",
				content: "Visar information om det trådlösa nätverket."
			},{
				type: "name",
				title: "Namn på trådlöst nätverk (SSID)",
				content: "Det trådlösa nätverksnamnet (SSID)."
			},{
				type: "name",
				title: "Dölj SSID",
				content: "Visar om det trådlösa nätverksnamnet (SSID) är dolt eller inte."
			},{
				type: "name",
				title: "Trådlös radio",
				content: "Aktuell status (på eller av) på gästnätverket."
			},{
				type: "name",
				title: "Tillåt att gäster kan se varandra",
				content: "Visar om alla enheter på gästnätverket kan kommunicera med varandra eller inte."
			}]
		},
		STATUS_USB: {
			TITLE: "USB-enheter",
			CONTENT: [{
				type: "paragraph",
				content: "Visar information om de nuvarande USB-lagringsenheterna och/eller skrivare som är anslutna till routern via USB-portarna."
			},{
				type: "name",
				title: "Skrivare",
				content: "Namnet på den anslutna skrivaren."
			},{
				type: "name",
				title: "USB-disk",
				content: "Namnet på USB-disken som är ansluten till routern."
			},{
				type: "name",
				title: "Totalt",
				content: "Den totala lagringskapaciteten för den anslutna USB-lagringsenheten."
			},{
				type: "name",
				title: "Tillgängliga",
				content: "Det tillgängliga lagringsutrymmet på den anslutna USB-lagringsenheten."
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Prestanda",
			CONTENT: [{
				type: "paragraph",
				content: "Visar nuvarande routernas prestanda."
			},{
				type: "name",
				title: "Processorbelastning",
				content: "Nuvarande CPU användningen"
			},{
				type: "name",
				title: "Minnesanvändning",
				content: "Nuvarande minnesanvändning."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Fast klienter",
			CONTENT: [{
				type: "paragraph",
				content: "Visar information om alla trådanslutna enheter som för närvarande är anslutna till nätverket."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Trådlösa klienter",
			CONTENT: [{
				type: "paragraph",
				content: "Visar information om alla trådlösa enheter som är anslutna till nätverket."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Typ av Internet-anslutning: Statisk IP"
			},{
				type: "paragraph",
				content: "Välj det här om du har en specifik (fast) IP-adress, nätmask, gateway och DNS-parametrar av Internet-leverantören."
			},{
				type: "name",
				title: "IP-adress/Nätmask/standard-gateway/Primary DNS/Sekundär DNS",
				content: "Ange den information som tillhandahålls av internet-leverantören."
			},{
				type: "name",
				title: "MTU-storlek",
				content: "Standard och typisk MTU (Maximum Transmission Unit) storlek för de flesta Ethernet-nätverk är 1500 bytes. Det är inte rekommenderat att ändra MTU-storlek om det inte krävs av Internet-leverantören."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: Dynamisk IP"
			},{
				type: "paragraph",
				content: "Välj det här om du har en DHCP-server anslutning av din internet-leverantör."
			},{
				type: "name",
				title: "IP-adress/Nätmask/standard-gateway/Primary DNS/Sekundär DNS",
				content: "Dessa parametrar tilldelas automatiskt av DHCP-servern från din Internet-leverantör."
			},{
				type: "name",
				title: "Förnya",
				content: "Klicka på den här knappen för att få nya IP-parametrar från DHCP-servern."
			},{
				type: "name",
				title: "Släpp",
				content: "Klicka på den här knappen för att ta bort alla IP-adresser som tilldelas av DHCP-servern."
			},{
				type: "name",
				title: "Använd följande DNS-adresser",
				content: "Om internet-leverantören tillhandahåller en eller två DNS-adresser, markera kryssrutan och ange den primära DNS-och de sekundära DNS-adresserna i motsvarande fält. Annars, kommer DNS-adresserna tilldelas dynamiskt från internet-leverantören."
			},{
				type: "name",
				title: "MTU-storlek",
				content: "Standard och typisk MTU (Maximum Transmission Unit) storlek för de flesta Ethernet-nätverk är 1500 bytes. Det är inte rekommenderat att ändra MTU-storlek om det inte krävs av Internet-leverantören."
			},{
				type: "name",
				title: "Värdnamn",
				content: "Ange ett värde i det här fältet för att ange värdnamnet för routern."
			},{
				type: "name",
				title: "Få IP genom att använda Unicast DHCP",
				content: "Markera den här kryssrutan om din internet-leverantörs DHCP server inte stöder sända program och du inte kan hämta IP-adressen dynamiskt."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: PPPoE"
			},{
				type: "paragraph",
				content: "Välj denna typ om du använder DSL (Digital Subscriber Line) service och är försedd med ett användarnamn och lösenord av Internet-leverantören."
			},{
				type: "name",
				title: "Användarnamn/lösenord",
				content: "Ange det användarnamn och lösenord som du har fått av din Internet-leverantör. Dessa fält är skiftlägeskänsliga."
			},{
				type: "name",
				title: "IP-adress/Primary DNS/Sekundär DNS",
				content: "Dessa parametrar är automatiskt tilldelade av DHCP-servern på din Internet-leverantör."
			},{
				type: "name",
				title: "Ingen, dynamisk IP, Statisk IP",
				children: [{
					type: "name",
					title: "Ingen",
					content: "Välj om ingen sekundär anslutning."
				},{
					type: "name",
					title: "Dynamisk IP",
					content: "Välj om IP-adressen och nätmasken automatiskt tilldelas av Internet-leverantören.",
					children: [{
						type: "name",
						title: "Förnya",
						content: "Klicka på den här knappen för att förnya IP-parametrarna från din Internet-leverantör."
					},{
						type: "name",
						title: "Släpp",
						content: "Klicka på den här knappen för att frigöra de tilldelade IP-parametrarna."
					}]
				},{
					type: "name",
					title: "Statisk IP-adress",
					content: "Välj om IP-adress och nätmask tillhandahålls av Internet-leverantören och ange dessa uppgifter i motsvarande fält."
				}]
			},{
				type: "name",
				title: "MTU-storlek",
				content: "Den typiska MTU (Maximum Transmission Unit) för Ethernet-nätverk är 1480 bytes.",
				children: [{
					type: "note",
					title: "Obs",
					content: "I sällsynta fall kan din internet-leverantör kräva att du justerar MTU-storleken för att få bättre nätverksprestanda. Du bör inte ändra värdet om det inte är absolut nödvändigt."
				}]
			},{
				type: "name",
				title: "Servicenamn/Access Concentrator namn",
				content: "Som standard lämnas namnet på tjänsten och Access Concentrator (AC) tomt. Dessa områden bör inte konfigureras såvida det inte krävs av internet-leverantören."
			},{
				type: "name",
				title: "Upptäck Online-intervall",
				content: "Ange ett tidsintervall mellan 0 och 120 (i sekunder) som routern känner Access Concentrator online på varje intervall. Standardvärdet är 10."
			},{
				type: "name",
				title: "IP-adress",
				content: "Om din Internet-leverantör tillhandahåller en specifik (fast) IP-adress väljer du Använd följande IP-adress och ange IP-adressen i fältet. Välj annars få dynamiskt från Internet-leverantören för att få en server-tilldelad IP-adress automatiskt."
			},{
				type: "name",
				title: "DNS-adress/Primary DNS/Sekundär DNS",
				content: "Om din Internet-leverantör tillhandahåller särskilda (fasta) DNS-IP-adresser väljer du Använd följande DNS-adress och ange adress(er) till den primära DNS-och sekundär DNS respektive. Välj annars Få dynamiskt från Internet-leverantören för att få servern tilldelade DNS-IP-adressen automatiskt."
			},{
				type: "name",
				title: "Anslutningsläge",
				content: "Välj en lämplig koppling läge som avgör hur du ansluter till Internet.",
				children: [{
					type: "name",
					title: "Auto",
					content: "I det här läget återansluter Internet-anslutningen automatiskt varje gång det blir frånkopplat."
				},{
					type: "name",
					title: "På begäran",
					content: "I det här läget kommer Internet anslutning att avslutas automatiskt efter en viss tid av inaktivitet (maximal vilotid) har gått. Anslutningen återupprättas när du försöker ansluta till Internet igen."
				},{
					type: "name",
					title: "Tidsbaserade",
					content: "I det här läget, är Internet-anslutningen endast etablerad under en viss tidsperiod. Om det här alternativet väljs, ange start- och sluttid, båda är i formatet HH:MM."
				},{
					type: "name",
					title: "Manuellt",
					content: "I det här läget styrs Internet anslutning manuellt genom att klicka på Anslut eller koppla ifrån. Det här läget stöder också funktionen Max Idle Time. Ange en maximal tid (i minuter) som Internet anslutningen kan vara inaktiv innan den avslutas i fältet Max Idle Time. Standardvärdet är 15. Om du vill att Internet-anslutningen är aktiv hela tiden anger du 0 (noll)."
				},{
					type: "note",
					title: "Obs",
					content: "Det tidsbaserade anslutnings läget kommer att träda i kraft först när Systemtiden konfigureras på Avancerade → System Verktyg → Tids inställningar."
				}]
			},{
				type: "title",
				title: "Typ av Internet-anslutning: BigPond kabel"
			},{
				type: "paragraph",
				content: "Välj denna typ om din Internet-leverantör erbjuder BigPond kabelanslutning."
			},{
				type: "name",
				title: "Användarnamn/lösenord",
				content: "Ange det användarnamn och lösenord som du har fått av din Internet-leverantör. Dessa fält är skiftlägeskänsliga."
			},{
				type: "name",
				title: "Auth. Server",
				content: "Ange verifiering serverns IP-adress eller värdnamn."
			},{
				type: "name",
				title: "Auth. Domän",
				content: "Ange serverns domännamn suffix (baserat på din plats). Till exempel nsw.bigpond.net.au för NSW/ACT, vic.bigpond.net.au för VIC/TAS/WA/SA/NT eller qld.bigpond.net.au för QLD."
			},{
				type: "name",
				title: "MTU-storlek",
				content: "Standard och typisk MTU (Maximum Transmission Unit) storlek för de flesta Ethernet-nätverk är 1500 bytes. Det är inte rekommenderat att ändra MTU-storlek om det inte krävs av Internet-leverantören."
			},{
				type: "name",
				title: "Anslutningsläge",
				content: "Välj en lämplig koppling läge som avgör hur du ansluter till Internet.",
				children: [{
					type: "name",
					title: "Auto",
					content: "I det här läget återansluter Internet-anslutningen automatiskt varje gång det blir frånkopplat."
				},{
					type: "name",
					title: "På begäran",
					content: "I det här läget kommer Internet anslutning att avslutas automatiskt efter en viss tid av inaktivitet (maximal vilotid) har gått. Anslutningen återupprättas när du försöker ansluta till Internet igen."
				},{
					type: "name",
					title: "Manuellt",
					content: "I det här läget styrs Internet anslutning manuellt genom att klicka på Anslut eller koppla ifrån. Det här läget stöder också funktionen Max Idle Time. Ange en maximal tid (i minuter) som Internet anslutningen kan vara inaktiv innan den avslutas i fältet Max Idle Time. Standardvärdet är 15. Om du vill att Internet-anslutningen är aktiv hela tiden anger du 0 (noll)."
				}]
			},{
				type: "title",
				title: "Typ av Internet-anslutning: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Välj denna om du ansluter till en L2TP/PPTP VPN-server och är försedda med ett användarnamn, lösenord och IP-adress/Domän namnet på den server som din internetleverantör ger."
			},{
				type: "name",
				title: "Användarnamn/lösenord",
				content: "Ange det användarnamn och lösenord som du har fått av din Internet-leverantör. Dessa fält är skiftlägeskänsliga."
			},{
				type: "name",
				title: "IP-adress/Primary DNS/Sekundär DNS",
				content: "Dessa parametrar kommer att tilldelas automatiskt av DHCP-servern från Internet-leverantören."
			},{
				type: "name",
				title: "Dynamisk IP eller statisk IP",
				children: [{
					type: "name",
					title: "Dynamisk IP",
					content: "Välj om IP-adressen och nätmasken automatiskt tilldelas av Internet-leverantören."
				},{
					type: "name",
					title: "Statisk IP-adress",
					content: "Välj om IP-adress, nätmask, gateway och DNS-adresser tillhandahålls av Internet-leverantören och ange dessa uppgifter i motsvarande fält."
				}]
			},{
				type: "name",
				title: "VPN-server IP/domännamn",
				content: "Ange VPN-serverns IP-adress eller domännamn som du har fått av din Internet-leverantör."
			},{
				type: "name",
				title: "MTU-storlek",
				content: "Standard och typiska MTU (Maximum Transmission Unit) för de flesta Ethernet-nätverk är 1460 bytes för L2TP eller 1420 byte för PPTP. Det är inte rekommenderat att ändra MTU-storlek om det inte krävs av Internet-leverantören."
			},{
				type: "name",
				title: "Anslutningsläge",
				content: "Välj en lämplig koppling läge som avgör hur du ansluter till Internet.",
				children: [{
					type: "name",
					title: "Auto",
					content: "I det här läget återansluter Internet-anslutningen automatiskt varje gång det blir frånkopplat."
				},{
					type: "name",
					title: "På begäran",
					content: "I det här läget kommer Internet anslutning att avslutas automatiskt efter en viss tid av inaktivitet (maximal vilotid) har gått. Anslutningen återupprättas när du försöker ansluta till Internet igen."
				},{
					type: "name",
				title: "Manuellt",
				content: "I det här läget styrs Internet anslutning manuellt genom att klicka på Anslut eller koppla ifrån. Det här läget stöder också funktionen Max Idle Time. Ange en maximal tid (i minuter) som Internet anslutningen kan vara inaktiv innan den avslutas i fältet Max Idle Time. Standardvärdet är 15. Om du vill att Internet-anslutningen är aktiv hela tiden anger du 0 (noll)."
				}]
			},{
				type:"paragraph",
				content:"Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "MAC-klon",
			CONTENT: [{
				type: "name",
				title: "Använd standard MAC-adress",
				content: "Ändra INTE routerns MAC-adress, om inte internetleverantören binder den tilldelade IP-adressen till MAC-adressen."
			},{
				type: "name",
				title: "Använd styrenhetens MAC-adress",
				content: "Markera och kopiera den aktuella MAC-adressen till den dator som är ansluten till routern, om ISP binder den tilldelade IP-adressen för datorns MAC-adress."
			},{
				type: "name",
				title: "Använd egen MAC-adress",
				content: "Ange MAC-adressen manuellt, i fall ISP binder den tilldelade IP-adressen till en specifik MAC-adress."
			},{
				type:"paragraph",
				content:"Klicka på Spara för att spara alla dina inställningar."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "MAC-adress",
				content: "Den unika fysiska adress som tilldelats Ethernet (LAN) port på routern."
			},{
				type: "name",
				title: "IP-adress",
				content: "Visar routerns IP-adress som används för att logga in till routerns web management sida och kan åsidosättas."
			},{
				type: "name",
				title: "Nätmask",
				content: "Välj en tilldelad identifierare som används av LAN-porten för att skicka intern och extern trafik från listrutan eller ange en ny subnätmask i decimalform format."
			},{
				type: "note",
				title: "Obs",
				content: "Om den nya LAN-IP-adressen inte är i samma nätmask som med den gamla, kommer IP-adresser i DHCP-servern konfigureras automatiskt, men den virtuella servern och DMZ-värden kommer inte att träda i kraft förrän de konfigureras om."
			},{
				type:"paragraph",
				content:"Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		IPTV:{
			TITLE: "Inställningar",
			CONTENT: [{
					type: "name",
					title: "IGMP-Proxy",
					content: "Välj IGMP (Internet Group Management Protocol) Proxy version, antingen V2 eller V3, beroende på din Internet-leverantör."
				},{
					type: "name",
					title: "IGMP version",
					content: "Välj IGMP-proxyversion, antingen v2 eller v3, beroende på din Internet-leverantör."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Välj för att aktivera funktionen IPTV."
				},
				{
					type: "name",
					title: "Läge",
					content: "Välj rätt läge beroende på din Internet-leverantör.",
					children: [
						{
							type: "name",
							title: "Bro",
							content:"Om internet-leverantören inte visas och inga andra parametrar krävs, kan du helt enkelt välja detta läge och konfigurera LAN-port funktioner för routern.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Tilldela din LAN-port om funktionen som Internet leverantör eller som IPTV leverantören."
							}]
						},
						{
							type: "name",
							title: "Ryssland",
							content: "Välj om din internetoperatör finns i Ryssland och alla parametrar finns till hands, inklusive Internet/IP-Phone/IPTV VLAN-ID:n och Priority, samt LAN (1/2/3/4) portfunktioner.",
							children: [{
								type: "name",
								title: "IPTV Multicast VLAN-ID/prioritet",
								content: "Du kan aktivera multicast IPTV-funktion som önskas, och konfigurera VLAN-ID och prioritet enligt din Internet-leverantör."
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Välj om din internetleverantör är ExStream från Singapore och nödvändiga parametrar är förutbestämd, inklusive Internet/IPTV VLAN-id och prioritet, och LAN (1/2/ 3/4)port funktioner."
						},
						{
							type: "name",
							title: "Malaysia-Unifi",
							content: "Välj om din internetleverantör är Unifi från Malaysia och nödvändiga parametrar är förutbestämda, inklusive Internet/IPTV VLAN-identiteter och prioritet, och LAN (1/2/ 3/4) port funktioner."
						},
						{
							type: "name",
							title: "Malaysia-Maxis",
							content: "Välj om din internetleverantör är Maxis i Malaysia och nödvändiga parametrar är förutbestämda, inklusive Internet/IP-telefon/IPTV VLAN-identiteter och prioritet, och LAN (1/2/ 3/4) port funktioner."
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Välj om din ISP är Portugal-MEO och de nödvändiga parametrarna är förutbestämda, Inklusive Internet VLAN ID, Priority och LAN (1/2/3/4) portfunktioner."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Välj om din ISP är Portugal, Vodafone och de nödvändiga parametrarna är förutbestämda, inklusive Internet / IP-telefon / IPTV VLAN ID och Priority. Du kan tilldela dina LAN-portar för deras respektive behov (Internet Leverantör / leverantör IPTV / IP-telefon Leverantör / Internet IPTV leverantör)."
						},
						{
							type: "name",
							title: "Anpassad",
							content: "Välj om internet-leverantören inte visas men ger de nödvändiga parametrarna, inklusive Internet/IP-telefon/IPTV VLAN-id och prioritet, och LAN (1/2/ 3/4) port funktioner.",
							children: [{
								type: "name",
								title: "Internet/IP-telefon/IPTV VLAN-ID/prioritet",
								content: "Konfigurera VLAN-identiteter och prioriteringar som tillhandahålls av internet-leverantören."
							},{
								type: "name",
								title: "802.11Q Tag",
								content: "Markera om du vill märka Internet paket med 802.11Q."
							},{
								type: "name",
								title: "IPTV Multicast VLAN-ID/prioritet",
								content: "Du kan aktivera multicast IPTV-funktion som önskas, och konfigurera VLAN-ID och prioritet enligt din Internet-leverantör."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Tilldela din LAN-port om funktionen som Internet leverantör, IP-telefon supporter eller som IPTV leverantören."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Klicka på Spara för att spara alla dina inställningar."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Inställningar",
			CONTENT: [{
				type: "name",
				title: "DHCP-server",
				content: "Som standard är DHCP (Dynamic Host Configuration Protocol) aktiverad; den tilldelar dynamiskt TCP/IP-parametrar till klient enheter från IP-adresser. Inaktivera inte DHCP-servern om du inte har en annan DHCP-server eller manuellt vill tilldela TCP/IP-parametrar för varje klient enheten i nätverket."
			},{
				type: "name",
				title: "IP-adresser",
				content: "Ange intervallet för IP-adresser som kan lånas ut till klienterna."
			},{
				type: "name",
				title: "Adress lånetid",
				content: "Ange den tid som en IP-adress är utlånad till kund mellan 1 och 2880 minuter. Standardvärdet är 120 minuter."
			},{
				type: "name",
				title: "Standard-gateway",
				content: "Ange LAN-IP-adress. (Tillval)"
			},{
				type: "name",
				title: "Primär DNS/Sekundär DNS",
				content: "Ange dessa parametrar som tillhandahålls av internet-leverantören. (Tillval)"
			},{
				type:"paragraph",
				content:"Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Adress bokning",
			CONTENT: [{
				type: "paragraph",
				content: "Du kan reservera en IP-adress för en klient som är ansluten till routern. När reserverade tilldelas IP-adress endast till samma beställare av DHCP-servern."
			},{
				type: "name",
				title: "MAC-adress",
				content: "Visar MAC-adressen för klienten med DHCP-reserverade IP-adress."
			},{
				type: "name",
				title: "Reserverad IP-adress",
				content: "Visar klientens reserverade IP-adress."
			},{
				type: "name",
				title: "Beskrivning",
				content: "Visar en beskrivning av klientenheten."
			},{
				type: "name",
				title: "Status",
				content: "Visar aktuell status (aktiverad eller inaktiverad) i klientenheten."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ för att ändra eller ta bort motsvarande klient."
			},{
				type: "step",
				title: "Att reservera en IP-adress",
				content:[
					"1. Klicka på Lägg till.",
					"2. Ange MAC-adressen för din önskade klient.",
					"3. Ange den IP-adress som du vill reservera för klienten.",
					"4. Ange en beskrivning för klienten.",
					"5. Välj Aktivera.",
					"6. Klicka på OK."
				]
			},{
				type: "step",
				title: "För att ändra eller ta bort en befintlig kund",
				content: "I tabell, klicka på Edit-ikonen eller ikonen Papperskorgen som motsvarar den klient du vill ändra eller ta bort."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "DHCP-Klient Lista",
			CONTENT: [{
				type: "name",
				title: "Kundnummer",
				content: "Visar numret på den aktuella DHCP-klienten."
			},{
				type: "name",
				title: "Klientnamn",
				content: "Visar namnet på DHCP-klienten."
			},{
				type: "name",
				title: "MAC-adress",
				content: "Visar MAC-adressen."
			},{
				type: "name",
				title: "Tilldelad IP-adress",
				content: "Visar den reserverade IP-adressen för klienten av DHCP-servern."
			},{
				type: "name",
				title: "Lånetid",
				content: "Visar den tid som återstår av den IP-adress som är uthyrd till klienten."
			},{
				type: "name",
				title: "Uppdatera",
				content: "Klicka här för att uppdatera DHCP-klient listan."
			}]
		},

		DDNS: {
			TITLE: "Dynamisk DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Med Dynamisk DNS (Domain Name System) kan du tilldela ett fast värd- och domännamn till en dynamisk Internet-IP-adress. Det är användbart när du har en egen webbplats, FTP-server eller en annan server bakom routern. Först måste du registrera dig med en dynamisk DNS-service provider som www.dyndns.com. Ange sedan din registreringsinformation."
			},{
				type: "step",
				title: "Att sätta upp en dynamisk DNS",
				content: [
					"1. Välj din DDNS-leverantör.",
					"2. Ange användarnamnet och lösenordet för ditt DDNS-konto.",
					"3. Ange det domännamn som du har registrerat hos dynamiska DNS-service leverantör.",
					"4. Välj det tidsintervall som dynamisk DNS begäran om uppdatering  skall ske.",
					"5. Om tjänsteleverantören är NO-IP väljer du WAN IP binding där domännamnet är bundet till WAN-IP för den här routern.",
					"6. Klicka på Logga in och spara."
				]
			},{
				type: "note",
				title:"Obs",
				content: "Om du vill använda nytt DDNS-konto, logga ut och logga därefter in med det nya kontot."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "Dynamisk DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Med Dynamisk DNS (Domain Name System) kan du tilldela ett fast värd- och domännamn till en dynamisk Internet-IP-adress. Det är användbart när du har en egen webbplats, FTP-server eller en annan server bakom routern. Först måste du registrera dig med en dynamisk DNS-service provider som www.dyndns.com. Ange sedan din registreringsinformation."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Domän namn lista",
			CONTENT: [{
				type: "paragraph",
				content: "Denna tabell visar dynamiska DNS domännamn som är registrerade till TP-Link-ID."
			},{
				type:"step",
				title: "Registrera nytt domännamn",
				content: [
					"1. Klicka på Registrera.",
					"2. Skriv in domännamnet.",
					"3. Klicka på Spara."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Statisk routing",
			CONTENT: [{
				type: "paragraph",
				content: "Statisk routing används för att styra en fast väg för paket att nå en viss värd eller ett visst nätverk."
			},{
				type: "step",
				title: "Att ställa in en statisk routing",
				content: [
					"1. Klicka på Lägg till.",
					"2. Nätverket - Ange en IP-adress i decimalform format att tilldela statisk rutt för den här posten.",
					"3. Nätmask - Ange en nätmask i decimalform format för att avgöra nätverksdelen och värddelen av IP-adressen.",
					"4. Standard-gateway - Ange en gateway-IP-adress i decimalform format för att ansluta routern till nätverket eller värden.",
					"5. Gränssnitt - Välj LAN eller WAN för att ange typ av destination i nätverket.",
					"6. Beskrivning: Ange en kort beskrivning för den här posten.",
					"7. Välj Aktivera.",
					"8. Klicka på OK."
				]
			},{
				type: "step",
				title: "För att ändra eller ta bort en befintlig post",
				content: "I tabell, klicka på Edit-ikonen eller ikonen Trash (papperskorg) och den post som du vill ändra eller ta bort."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "System routingtabell",
			CONTENT: [{
				type: "paragraph",
				content: "System Routing Table visar alla giltiga routingposter som används."
			},{
				type: "paragraph",
				content: "Klicka på Uppdatera för att uppdatera routingtabell."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Inställningar",
			CONTENT: [{
				type: "name",
				title: "Placering",
				content: "Välj din region i listrutan. Om ditt land eller din region inte finns med i listan kan det begränsas till den trådlösa radion hos dig."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Trådlös 2,4 GHz",
			CONTENT: [{
				type: "name",
				title: "Aktivera trådlös radio",
				content: "Markera den här kryssrutan för att aktivera den trådlösa radiofrekven 2,4 GHz."
			},{
				type: "name",
				title: "Namn på trådlöst nätverk (SSID)",
				content: "Du kan lämna standard nätverksnamnet (SSID) som det är, eller ange ett nytt namn (max. 32 tecken). Det här fältet är skiftlägeskänsligt."
			},{
				type: "name",
				title: "Dölj SSID",
				content: "Markera den här kryssrutan om du vill dölja 2,4 GHz nätverksnamnet (SSID) från Wi-Fi -nätverket."
			},{
				type: "name",
				title: "Säkerhet",
				content: "Välj ett av följande alternativ:",
				children: [{
					type: "name",
					title: "Ingen säkerhet",
					content: "Välj det här alternativet om du vill inaktivera den trådlösa säkerheten. Det rekommenderas bestämt att du aktiverar den trådlösa säkerheten för att skyddar ditt trådlösa nätverk från obehörig åtkomst."
				},{
					type: "name",
					title: "WPA/WPA2-Personligt",
					content: "Välj det här alternativet om du vill aktivera standard autentiserings metoden baserad på en Pre-shared Key (PSK), även kallad lösenordsfras. Det här alternativet rekommenderas. Om markerad, konfigurerar du följande.",
					children: [{
						type: "name",
						title: "Version",
						content: "Välj en säkerhets version för ditt trådlösa nätverk.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Det här alternativet stöder flera genomförandet av WPA (Wi-Fi Protected Access) standard, såsom WPA och WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Det här alternativet stöder endast TKIP-kryptering som ger en bra säkerhet."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Det här alternativet stöder AES encryption som ger en bättre säkerhet än WPA-PSK och rekommenderas."
						}]
					},{
						type: "name",
						title: "Kryptering",
						content: "Välj krypteringstyp: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) eller Auto (för både TKIP och AES). Det rekommenderas inte att använda TKIP-kryptering om routern fungerar med 802.11n-läge, eftersom TKIP inte stöds av 802.11n. Om TKIP väljs,inaktiveras WPS-funktionen."
					},{
						type: "name",
						title: "Lösenord",
						content: "Ange ett lösenord för trådlöst mellan 8 och 63 ASCII-tecken, eller mellan 8 och 64 hexadecimala tecken i det här fältet."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Företag",
					content: "Välj det här alternativet om du vill aktivera den mer avancerade autentiserings metoden med en RADIUS-server (Remote Authentication Dial In User Service). Om markerad, inaktiveras WPS-funktionen.",
					children: [{
						type: "name",
						title: "Version",
						content: "Välj en säkerhets version för ditt trådlösa nätverk.",
						children:[{
							type: "name",
							title: "Auto",
							content: "Det här alternativet stöder flera genomförandet av WPA (Wi-Fi Protected Access) standard, såsom WPA och WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Det här alternativet stöder endast TKIP-kryptering som ger en bra säkerhet."
						},{
							type: "name",
							title: "WPA2",
							content: "Det här alternativet stöder AES encryption som ger en bättre säkerhet än WPA-PSK och rekommenderas."
						}]
					},{
						type: "name",
						title: "Kryptering",
						content: "Välj en krypteringstyp: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) eller Auto (för både TKIP och AES). Det rekommenderas inte att använda TKIP-kryptering om routern fungerar med 802.11n-läget, eftersom TKIP inte stöds av 802.11n. Om TKIP väljs,inaktiveras WPS-funktionen."
					},{
						type: "name",
						title: "RADIUS server IP",
						content: "Ange RADIUS-serverns IP-adress."
					},{
						type: "name",
						title: "RADIUS port",
						content: "Ange portnumret för RADIUS-servern."
					},{
						type: "name",
						title: "RADIUS lösenord",
						content: "Ange den delade lösenord för RADIUS-servern."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Välj det här alternativet om du vill aktivera den grundläggande autentisering metoden om någon av dina beställares enheter bara kan få åtkomst till det trådlösa med WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Typ",
						content: "Välj en autentiseringstyp för ditt trådlösa nätverk. Standardvärdet är Auto, som automatiskt väljer Öppet system eller Delad nyckel utifrån den kapacitet och tillgång till begäran av den trådlösa klienten."
					},{
						type: "name",
						title: "WEP nyckelformat",
						content: "Använd antingen ASCII-format eller Hexadecimal. ASCII-formatet är en kombination av alfabetiska och numeriska tecken. Hexadecimalt format är en kombination av numren(0- 9) och bokstäver (A-F, a-f)."
					},{
						type: "name",
						title: "Typ av nyckel",
						content: "Välj WEP-nyckeln.",
						children: [{
							type: "name",
							title: "64-Bitars",
							content: "Här kan du ange 10 hexadecimala siffror (0-9, A-F, a-f) eller 5 ASCII-tecken i WEP-värdet."
						},{
							type: "name",
							title: "128-Bitars",
							content: "Kan du ange 26 hexadecimala tecken (0-9, A-F, a-f) eller 13 ASCII-tecken i WEP-värdet."
						}]
					},{
						type: "name",
						title: "Nyckelvärde",
						content: "Ange WEP-nyckeln in i respektive fält."
					}]
				}]
			},{
				type: "name",
				title: "Läge",
				content: "Välj ett transmissions blandat läge."
			},{
				type: "name",
				title: "Kanalbredd",
				content: "Välj en kanalbredd (bandbredd) för det 2,4 GHz trådlösa nätverket"
			},{
				type: "name",
				title: "Kanal",
				content: "Välj en kanal för det 2,4 GHz trådlösa nätverket. Det rekommenderas att lämna kanalen Auto om du inte upplever tillfälliga trådlösa anslutningsproblem."
			},{
				type: "name",
				title: "Överföringsenergi",
				content: "Välj antingen Hög, Medel eller Låg för att ange data överföringseffekt. Den rekommenderade standardinställningen är hög."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Trådlös 5GHz",
			CONTENT: [{
				type: "name",
				title: "Aktivera trådlös radio",
				content: "Markera den här kryssrutan för att aktivera den trådlösa radiofrekven på 5GHz."
			},{
				type: "name",
				title: "Namn på trådlöst nätverk (SSID)",
				content: "Du kan lämna standard nätverksnamnet (SSID) som det är eller ange ett nytt namn (max. 32 tecken). Det här fältet är skiftlägeskänsligt."
			},{
				type: "name",
				title: "Dölj SSID",
				content: "Markera den här kryssrutan om du vill dölja 5GHz nätverksnamnet (SSID) från Wi-Fi -nätverket."
			},{
				type: "name",
				title: "Säkerhet",
				content: "Välj ett av följande alternativ:",
				children: [{
					type: "name",
					title: "Ingen säkerhet",
					content: "Välj det här alternativet om du vill inaktivera den trådlösa säkerheten. Det rekommenderas bestämt att du aktiverar den trådlösa säkerheten för att skyddar ditt trådlösa nätverk från obehörig åtkomst."
				},{
					type: "name",
					title: "WPA/WPA2-Personligt",
					content: "Välj det här alternativet om du vill aktivera standard autentiserings metoden baserad på en Pre-shared Key (PSK), även kallad lösenordsfras. Det här alternativet rekommenderas. Om markerad, konfigurerar du följande.",
					children: [{
						type: "name",
						title: "Version",
						content: "Välj en säkerhets version för ditt trådlösa nätverk.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Det här alternativet stöder flera genomförandet av WPA (Wi-Fi Protected Access) standard, såsom WPA och WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Det här alternativet stöder endast TKIP-kryptering som ger en bra säkerhet."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Det här alternativet stöder AES encryption som ger en bättre säkerhet än WPA-PSK och rekommenderas."
						}]
					},{
						type: "name",
						title: "Kryptering",
						content: "Välj en krypteringstyp: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) eller Auto (för både TKIP och AES). Det rekommenderas inte att använda TKIP-kryptering om routern fungerar med 802.11n-läget, eftersom TKIP stöds inte av 802.11n specifikation. Om TKIP väljs,inaktiveras WPS-funktionen."
					},{
						type: "name",
						title: "Lösenord",
						content: "Ange ett lösenord för trådlöst mellan 8 och 63 ASCII-tecken, eller mellan 8 och 64 hexadecimala tecken i det här fältet."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Företag",
					content: "Välj det här alternativet om du vill aktivera den mer avancerade autentiserings metoden med en RADIUS-server (Remote Authentication Dial In User Service). Om markerad, inaktiveras WPS-funktionen.",
					children: [{
						type: "name",
						title: "Version",
						content: "Välj en säkerhets version för ditt trådlösa nätverk.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Det här alternativet stöder flera genomförandet av WPA (Wi-Fi Protected Access) standard, såsom WPA och WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Det här alternativet stöder endast TKIP-kryptering som ger en bra säkerhet."
						},{
							type: "name",
							title: "WPA2",
							content: "Det här alternativet stöder AES encryption som ger en bättre säkerhet än WPA-PSK och rekommenderas."
						}]
					},{
						type: "name",
						title: "Kryptering",
						content: "Välj en krypteringstyp: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) eller Auto (för både TKIP och AES). Det rekommenderas inte att använda TKIP-kryptering om routern fungerar med 802.11n-läget, eftersom TKIP inte stöds av 802.11n. Om TKIP väljs,inaktiveras WPS-funktionen."
					},{
						type: "name",
						title: "RADIUS server IP",
						content: "Ange RADIUS-serverns IP-adress."
					},{
						type: "name",
						title: "RADIUS port",
						content: "Ange portnumret för RADIUS-servern."
					},{
						type: "name",
						title: "RADIUS lösenord",
						content: "Ange den delade lösenord för RADIUS-servern."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Välj det här alternativet om du vill aktivera den grundläggande autentisering metoden om någon av dina beställares enheter bara kan få åtkomst till det trådlösa med WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Typ",
						content: "Välj en autentiseringstyp för ditt trådlösa nätverk. Standardvärdet är Auto, som automatiskt väljer Öppet system eller Delad nyckel utifrån den kapacitet och tillgång till begäran av den trådlösa klienten."
					},{
						type: "name",
						title: "WEP nyckelformat",
						content: "Använd antingen ASCII-format eller Hexadecimal. ASCII-formatet är en kombination av alfabetiska och numeriska tecken. Hexadecimalt format är en kombination av numren(0- 9) och bokstäver (A-F, a-f)."
					},{
						type: "name",
						title: "Typ av nyckel",
						content: "Välj WEP-nyckeln.",
						children:[{
							type: "name",
							title: "64-Bitars",
							content: "Här kan du ange 10 hexadecimala siffror (0-9, A-F, a-f) eller 5 ASCII-tecken i WEP-värdet."
						},{
							type: "name",
							title: "128-Bitars",
							content: "Kan du ange 26 hexadecimala tecken (0-9, A-F, a-f) eller 13 ASCII-tecken i WEP-värdet."
						}]
					},{
						type: "name",
						title: "Nyckelvärde",
						content: "Ange WEP-nyckeln in i respektive fält."
					}]
				}]
			},{
				type: "name",
				title: "Läge",
				content: "Välj ett transmissions blandat läge."
			},{
				type: "name",
				title: "Kanalbredd",
				content: "Välj en kanalbredd (bandbredd) för det 5GHz trådlösa nätverket"
			},{
				type: "name",
				title: "Kanal",
				content: "Välj en kanal för det 5GHz trådlösa nätverket. Det rekommenderas att lämna kanalen till Auto om du inte upplever intermittent trådlösa anslutningsproblem."
			},{
				type: "name",
				title: "Överföringsenergi",
				content: "Välj antingen Hög, Medel eller Låg för att ange data överföringseffekt. Den rekommenderade standardinställningen är hög."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		WPS: {	
			TITLE: "Routerns PIN-KOD",
			CONTENT: [{
				type: "paragraph",
				content: "Andra enheter kan ansluta till routern med WPS med routerns PIN-kod."
			},{
				type: "name",
				title: "Routerns PIN-KOD",
				content: "Växla för att möjliggöra trådlösa enheter att ansluta till routern med hjälp av routerns PIN-kod (Personal Identification Number)."
			},{
				type: "name",
				title: "PIN",
				content: "Visas routerns PIN-KOD. Standard-PIN-koden finns på etiketten på routern. Klicka på knappen Generera för att generera en ny PIN-kod slumpmässigt eller klicka på Standard för att återställa den aktuella PIN-koden till den fabriksinställda PIN-Koden."
			}]
		},

		WPS_WIZARD: {
			TITLE: "WPS-guiden",
			CONTENT:[{
				type: "name",
				title: "Tryck på knappen (rekommenderas)",
				content: "Välj den här metoden att konfigurera för att aktivera WPS-funktionen för att enkelt ansluta en WPS-aktiverad enhet till ditt trådlösa nätverk med hjälp av WPS-knappen eller med hjälp av Connect-knappen."
			},{
				type: "name",
				title: "PIN",
				content: "Välj den här konfigurations metoden för att lägga till en enhet manuellt genom att ange den trådlösa enhetens WPS-PIN-kod i fältet och klicka på Anslut."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Trådlösa stationer Online",
			CONTENT: [{
				type: "name",
				title: "Kundnummer",
				content: "Visar numret på den tillhörande trådlösa klienter."
			},{
				type: "name",
				title: "MAC-adress",
				content: "Visar MAC-adressen för den associerade trådlösa klienten."
			},{
				type: "name",
				title: "Anslutningstyp",
				content: "Visar det trådlösa frekvensbandet (2,4 GHz eller 5 GHz) av de associerade trådlösa klienterna."
			},{
				type: "name",
				title: "Säkerhet",
				content: "Visar den typ av säkerhet för den associerade trådlösa klienten."
			},{
				type: "name",
				title: "Mottagna paket",
				content: "Visar antalet paket som tagits emot av en trådlös klient."
			},{
				type: "name",
				title: "Skickade paket",
				content: "Visar antalet paket som skickas av den associerade trådlösa klienten."
			},{
				type: "paragraph",
				content: "Klicka på Uppdatera för att uppdatera informationen på den här sidan."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Inställningar",
			CONTENT: [{
				type: "paragraph",
				content: "Med gästnätverk kan du installera ett separat nätverk med ett separat trådlöst nätverksnamn (SSID) och lösenord som gäster kan använda för att få åtkomst till det trådlösa nätverket."
			},{
				type: "name",
				title: "Tillåt att gäster kan se varandra",
				content: "Markera den här kryssrutan om du vill att de trådlösa enheterna på gästnätverket kan att se varandra."
			},{
				type: "name",
				title: "Ge gäster tillgång till mitt lokala nätverk",
				content: "Markera den här kryssrutan om du vill att de trådlösa enheterna på gästnätverket ska få tillgång till ditt lokala nätverks delningar och din skrivare."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "2,4 GHz/5 GHz trådlöst",
			CONTENT: [{
				type: "name",
				title: "Aktivera Gäst nätverk",
				content: "Markera den här kryssrutan för att aktivera gästnätverkets funktioner."
			},{
				type: "name",
				title: "Namn på trådlöst nätverk (SSID)",
				content: "Använd standard gästens SSID eller skapa ett nytt namn (upp till 32 tecken)."
			},{
				type: "name",
				title: "Dölj SSID",
				content: "Markera den här kryssrutan om du vill dölja gäst SSID från Wi-Fi -nätverket."
			},{
				type: "name",
				title: "Säkerhet",
				content: "När du väljer att aldrig uppdatera lösenordet väljer du ett av följande säkerhets alternativ:",
				children: [{
					type: "name",
					title: "Ingen säkerhet",
					content: "Välj det här alternativet om du vill inaktivera den trådlösa säkerheten. Det rekommenderas bestämt att ni aktiverar den trådlösa säkerheten för att skydda ditt gästnätverk från obehörig åtkomst."
				},{
					type: "name",
					title: "WPA/WPA2-Personligt",
					content: "Välj det här alternativet om du vill aktivera standard autentiserings metoden baserad på en Pre-shared Key (PSK), även kallad lösenordsfras. Om markerad, konfigurerar du följande.",
					children: [{
						type: "name",
						title: "Version",
						content: "Välj en säkerhets version för gästnätverket.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Det här alternativet stöder flera genomförandet av WPA (Wi-Fi Protected Access) standard, såsom WPA och WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Det här alternativet stöder endast TKIP-kryptering som ger en bra säkerhet."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Det här alternativet stöder AES encryption som ger en bättre säkerhet än WPA-PSK och rekommenderas."
						}]
					},{
						type: "name",
						title: "Kryptering",
						content: "Välj en krypteringstyp: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) eller Auto (för både TKIP och AES). Det rekommenderas inte att använda TKIP-kryptering om routern fungerar med 802.11n-läget, eftersom TKIP stöds inte av 802.11n specifikation. Om TKIP väljs,inaktiveras WPS-funktionen."
					}]
			}]},{
				type: "name",
				title: "Lösenord",
				content: "Använd antingen lösenordet som genereras slumpmässigt, eller skapa ett lösenord mellan 8 och 63 ASCII-tecken eller mellan 8 och 64 hexadecimala tecken (0-9, a-f, A-F)."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},

		NAT: {
			TITLE: "Applikationslager för gateway (ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG beviljar specialtillverkade Network Adress Translation (NAT) traversal filters att vara anslutna till gatewayen för att stödja adress och port översättning för vissa application layer \"kontroll/data\" protokoll: FTP, TFTP, H323 etc. aktivera ALG rekommenderas."
			},{
				type: "name",
				title: "Aktivera FTP-ALG",
				content: "Om markerad, beviljar den FTP (File Transfer Protocol) klienter och servrar att överföra data via NAT."
			},{
				type: "name",
				title: "Aktivera TFTP-ALG",
				content: "Om markerad, beviljar den TFTP (Trivial File Transfer Protocol) klienter och servrar att överföra data via NAT."
			},{
				type: "name",
				title: "Aktivera H323 ALG",
				content: "Om markerad, beviljar den Microsoft NetMeeting klienter att kommunicera via NAT."
			},{
				type: "name",
				title: "Aktivera RTSP ALG",
				content: "Om markerad, tillåter den media player klienter att kommunicera med strömmande media servrar via NAT."
			},{
				type: "name",
				title: "Aktivera PPTP-vidarekoppling",
				content: "Om markerad, beviljar den punkt-till-punkt-sessioner att tunnlas genom ett IP-nätverk och passera genom routern."
			},{
				type: "name",
				title: "Aktivera L2TP-vidarekoppling",
				content: "Om markerad, beviljar den Layer 2 punkt-till-punkt-sessioner att tunnlas genom ett IP-nätverk och passera genom routern."
			},{
				type: "name",
				title: "Aktivera IPSec-vidarekoppling",
				content: "Om markerad, beviljar den IPSec (Internet Protocol security) att tunnlas genom ett IP-nätverk och passera genom routern. IPSec använder kryptografisk säkerhets tjänster för att säkerställa privat och säker kommunikation över IP-nätverk."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Virtuella servrar",
			CONTENT: [{
				type: "paragraph",
				content: "Virtuella servrar kan användas för att konfigurera offentliga tjänster på ditt lokala nätverk. En virtuell server är definierad som en extern port, och alla förfrågningar från Internet till den externa porten dirigeras om till en tilldelad dator, som måste konfigureras med en statisk eller reserverad IP-adress."
			},{
				type: "name",
				title: "Typ av tjänst",
				content: "Visar namnet på din virtuella server."
			},{
				type: "name",
				title: "Extern port",
				content: "Visar numret på porten eller ett intervall av portar som används av den virtuella servern."
			},{
				type: "name",
				title: "Inre IP",
				content: "Visar IP-adressen för den dator som kör programmet."
			},{
				type: "name",
				title: "Intern port",
				content: "Visar numret på den port på datorn som kör tjänsten ansökan."
			},{
				type: "name",
				title: "Protokoll",
				content: "Visar det protokoll som används för service-programmet: TCP, UDP eller Alla (alla protokoll som stöds av routern)."
			},{
				type: "name",
				title: "Status",
				content: "Visar aktuell status (aktiverat eller inaktiverat) av den specifika filtrerande regeln."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ för att ändra eller ta bort motsvarande regel."
			},{
				type: "step",
				title: "Att sätta upp en virtuell server regel",
				content: [
					"1. Klicka på Lägg till.",
					"2. Klicka på Visa befintliga tjänster för att välja en tjänst i listan för att automatiskt hämta lämpligt portnummer i de Externa port och Interna Port fälten. Om tjänsten inte finns med i listan, ange det externa portnumret(t.ex. 21) Eller ett intervall av portar (t.ex. 21-25). Lämna den inre porten tom om den är samma som den externa porten eller ange ett visst portnummer (t.ex. 21) Om den externa porten är en singel port. Ange IP-adressen för den dator som kör programmet i decimalform format in i den interna IP-fältet.",
					"3. Välj ett protokoll för service-programmet: TCP, UDP, eller alla i listrutan Protokoll.",
					"4. Välj Aktivera.",
					"5. Klicka på OK."
				]
			},{
				type: "step",
				title: "För att ändra eller ta bort en virtuell server regel",
				content: "I tabellen, klicka på Edit-ikonen eller ikonen Papperskorgen som motsvarar regeln som du vill ändra eller ta bort."
			},{
				type: "step",
				title: "Ta bort flera regler",
				content: "Välj alla regler som du vill ta bort och klicka på Ta bort ovanför tabellen."
			},{
				type: "note",
				title: "Obs",
				content: "Om din lokala värd-enhet är mottagande av mer än en typ av tillgänglig tjänst måste du skapa en regel för varje tjänst."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Portutlösare",
			CONTENT: [{
				type: "paragraph",
				content: "Portutlösare används för att vidarebefordra trafik på en viss port till specifik server på nätverket."
			},{
				type: "name",
				title: "Ansökan",
				content: "Visar namnet på programmet."
			},{
				type: "name",
				title: "Aktiverings porten",
				content: "Visar den utgående trafik porten som används för att utlösa en filtrering av en utgående anslutning."
			},{
				type: "name",
				title: "Trigger protokoll",
				content: "Visar det protokoll som används för aktiverings porten. TCP, UDP eller Alla (alla protokoll som stöds av routern)."
			},{
				type: "name",
				title: "Extern port",
				content: "Visar den port eller det port-område som används av fjärrsystemet. Ett svar från en av dessa portar vidarebefordras till PC som utlöser denna regel. Du kan ange högst 5 grupper av portar (eller port avsnitte). Varje grupp av hamnar måste vara åtskilda med \" ,\" (kommatecken), till exempel, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Externa protokoll",
				content: "Visar det protokoll som ska användas för inkommande port: TCP, UDP eller ALLA (alla protokoll som stöds av routern)."
			},{
				type: "name",
				title: "Status",
				content: "Visar aktuell status (aktiverat eller inaktiverat) av den specifika filtrerande regeln."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ för att ändra eller ta bort motsvarande regel."
			},{
				type: "step",
				title: "Att sätta upp en Port Triggering regel",
				content: [{
					type: "note",
					title: "Obs",
					content: "Varje regel kan endast användas av en värd per gång."
				},
					"1. Klicka på Lägg till.",
					"2. Klicka på Visa befintliga applikationer för att välja ett program från listan för att automatiskt hämta standardvärden i motsvarande fält. Om du vill lägga till en onoterad ansökan, ange manuellt ansökan, aktivering porten, aktivering protokoll, Extern port och externa protokoll.",	
					"3. Välj Aktivera.",
					"4. Klicka på OK."
				]
			},{
				type: "step",
				title: "För att ändra eller ta bort en Port Triggering regel",
				content: "I tabellen, klicka på Edit-ikonen eller ikonen Papperskorgen som motsvarar regeln som du vill ändra eller ta bort."
			},{
				type: "step",
				title: "Att ta bort flera portutlösningsregler",
				content: "I tabellen väljer du alla regler som du vill ta bort och klicka på Ta bort ovanför tabellen."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "DMZ (Demilitarized Zone) värd funktionen tillåter en lokal värd att exponeras för Internet för en särskild tjänst, t.ex. Internet-spel och videokonferenser. I själva verket tillåter DMZ att en enda dator på ditt LAN att öppna alla sina portar. Denna dator måste konfigureras med en statisk IP-adress och ha sina DHCP-klientfunktionen avaktiverad."
			},{
				type: "step",
				title: "Tilldela en dator eller server som en DMZ-server",
				content: [
					"1. Välj Aktivera DMZ.",
					"2. I fältet IP-adress för DMZ-värd, ange IP-adressen till en lokal dator som DMZ-värden.",
					"3. Klicka på Spara."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Som standard, är Universal Plug and Play (UPnP)-funktionen aktiverad om du vill tillåta enheter, t.ex. datorer och Internet-apparater att automatiskt upptäcka och kommunicera med varandra på det lokala nätverket."
			},{
				type: "paragraph",
				content: "UPnP-Service listan visar UPnP-enhetens information."
			},{
				type: "name",
				title: "Servicebeskrivning",
				content: "Visar en kort beskrivning av den lokala värddatorn som initierar UPnP-begäran."
			},{
				type: "name",
				title: "Extern port",
				content: "Visar den externa porten som öppnas av den lokala värddatorn."
			},{
				type: "name",
				title: "Protokoll",
				content: "Visar det nätverksprotokoll som används av den lokala värden."
			},{
				type: "name",
				title: "Intern IP-adress",
				content: "Visar IP-adressen för den lokala värddatorn."
			},{
				type: "name",
				title: "Intern port",
				content: "Visar den inre porten som öppnas av den lokala värddatorn."
			},{
				type: "paragraph",
				content: "Klicka på Uppdatera för att uppdatera UPnP-server."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Enhetsinställningar",
			CONTENT: [{
				type: "paragraph",
				content: "Enhetens inställningssida visar information om anslutna USB-lagringsenhet via USB-porten."
			},{
				type: "name",
				title: "Skanna",
				content: "Vanligtvis, upptäcker routern automatiskt nya enheter. Om inte, klicka på den här knappen för att söka efter eventuella nya anslutna enheter och uppdatera sidan med den uppdaterade informationen."
			},{
				type: "name",
				title: "Volym",
				content: "Visar namnet på USB-disk."
			},{
				type: "name",
				title: "Kapacitet",
				content: "Visar den totala lagringskapaciteten för USB."
			},{
				type: "name",
				title: "Ledigt utrymme",
				content: "Visar tillgängliga lediga lagringsutrymme."
			},{
				type: "name",
				title: "Ta bort säkert",
				content: "Klicka på den här knappen för att säkert ta bort USB-lagringsenheten innan du kopplar bort den från routern."
			},{
				type: "paragraph",
				content: "Observera att knappen säker borttagning bara visas när det finns en USB-lagringsenhet ansluten till routern, och du kommer inte att kunna ta bort USB-enheten medan den aktuella volymen är upptagen."
			},{
				type: "name",
				title: "Aktiv",
				content: "Den här kryssrutan visas bara när det finns en USB-lagringsenhet som är ansluten till routern. Välj för att aktivera fildelning i USB-enheten."
			},{
				type: "step",
				title: "Att sätta upp en filserver",
				content: [
				"1. Anslut USB-lagringsenheten till USB-porten på routern med en USB-kabel.",
				"2. Den nyligen anslutna USB-enheten detekteras automatiskt av routern och visas under Device Settings. Om inte, klicka på Skanna.",
				"3. Välj Aktiv för att aktivera fildelning."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Dela konto",
			CONTENT: [{
				type: "name",
				title: "Konto",
				content: "Du kan antingen välja att använda standard konto för inloggning till delade filer och mappar eller använd ett nytt konto och ange följande för att skapa ett nytt användarkonto."
			},{
				type: "name",
				title: "Användarnamn/lösenord",
				content: "Ange ett alfanumeriskt eller under linje strängen på upp till 15 tecken. Användarnamnet måste börja med en bokstav karaktär. Dessa fält är skiftlägeskänsliga."
			},{
				type: "name",
				title: "Bekräfta lösenord",
				content: "Ange lösenordet på nytt för att bekräfta att det inte finns skrivfel. Det här fältet är också skiftlägeskänsligt."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Dela inställningar",
			CONTENT: [{
				type: "name",
				title: "Nätverk/Media Server namn",
				content: "Visar det namn som används för att få åtkomst till den anslutna USB-lagringsenheten."
			},{
				type: "name",
				title: "Aktivera",
				content: "Markera för att aktivera metoden."
			},{
				type: "name",
				title: "Gå till metoden",
				content: "Det finns tre metoder för att tillåta åtkomst till den anslutna USB-lagringsenheten. Du kan välja ett eller flera metoder genom att markera motsvarande kryssruta.",
				children: [{
					type: "name",
					title: "Nätverket",
					content: "Om aktiverad, kan användare i nätverket få åtkomst till USB-lagringsenheten med hjälp av en tilldelad IP-adress (t.ex. \\\\192.168.0.1)."
				},{
					type: "name",
					title: "FTP",
					content: "Om aktiverad, kan FTP-beställare på ditt lokala nätverk få åtkomst till USB-lagringsenheten från den tilldelade IP-adressen, följt av FTP-serverns portnummer (t.ex. ftp://192.168.0.1:21)."
				},{
					type: "name",
					title: "FTP (via Internet)",
					content: "Om det är aktiverat, kan användare med fjärråtkomst nå till USB-lagringsenhet via FTP över Internet. Den här funktionen stöder både hämta och överföra filer. För att ändra på FTP-serverns portnummer, ange ett portnummer och klicka på Spara för att spara ändringarna."
				}]
			},{
				type: "name",
				title: "Länk",
				content: "Visar den adress som används för att få åtkomst till den delade USB-lagringsenheten."
			},{
				type: "name",
				title: "Port",
				content: "Visar FTP-serverns portnummer. Använd det förvalda värdet 21 eller ett värde mellan 1024 och 65535."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Mappdelning",
			CONTENT: [{
				type: "name",
				title: "Dela alla",
				content: "Slå på för att dela alla filer och mappar eller Av för att bara dela valda mappar."
			},{
				type: "name",
				title: "Aktivera autentisering",
				content: "Det rekommenderas starkt att aktivera autentisering för att få användare att ange giltiga användarnamn och lösenord för att få åtkomst till delade mappar."
			},{
				type: "name",
				title: "Mappnamn",
				content: "Visar namnet på den delade mappen."
			},{
				type: "name",
				title: "Sökväg",
				content: "Visar sökvägen till den delade mappen."
			},{
				type: "name",
				title: "Mediedelning",
				content: "Anger om den delade mappen är tillåtna för mediedelning eller inte."
			},{
				type: "name",
				title: "Volymnamn",
				content: "Visar namnet på den delade volymen."
			},{
				type: "name",
				title: "Status",
				content: "Visar status för den delade mappen genom att lampan tänds eller släks."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ för att ändra eller ta bort motsvarande delad mapp."
			},{
				type: "name",
				title: "Bläddra",
				content: "Klicka här för att söka efter en gemensam mapp."
			},{
				type: "name",
				title: "Ge gäst tillgång till nätverket",
				content: "Välj för att tillåta klienter på gäst nätverket åtkomst till delade mappar."
			},{
				type: "name",
				title: "Aktivera autentisering",
				content: "Välj för att kräva ett giltigt användarnamn och lösenord av användare för att få åtkomst till delade mappar."
			},{
				type: "name",
				title: "Aktivera skrivåtkomst",
				content: "Välj för att tillåta användare att göra ändringar i mapp innehållet."
			},{
				type: "name",
				title: "Aktivera mediedelning",
				content: "Välj för att aktivera mediedelning."
			},{
				type: "name",
				title:"Uppdatera",
				content: "Klicka på för att uppdatera listan på delade mappar."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Skrivarservern",
			CONTENT: [{
				type: "name",
				title:"Skrivarservern",
				content: "Tryck på för att aktivera skrivarservern."
			},{
				type: "name",
				title:"Skrivarnamn",
				content: "Visar namnet på din skrivare som är ansluten till routern."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Föräldrakontroll",
			CONTENT: [{
				type: "paragraph",
				content: "Med föräldrakontroll kan du blockera olämpliga, explicit och skadliga webbplatser; begränsa åtkomst vissa tider på dagen (exempelvis Facebook eller YouTube under läxtid), och samtidigt skydda varje enhet i ditt hemnätverk mot skadlig programvara och phishing genom en central kontrollpunkt."
			},{
				type: "name",
				title: "Föräldrakontroll",
				content: "Tryck På för att aktivera funktionen föräldrakontroll."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Enheter under föräldrakontroll",
			CONTENT: [{
				type: "name",
				title: "Enhetens namn",
				content: "Visar namnet på alla anslutna klientenheter som för närvarande är under föräldrakontrollen."
			},{
				type: "name",
				title: "MAC-adress",
				content: "Visar MAC-adressen för alla anslutna klientenheter som för närvarande är under föräldrakontroll."
			},{
				type: "name",
				title: "Internet-åtkomst tid",
				content: "Visar perioder av tidsbegränsning. Tidsschemat tar effekt baserat på routerns systemtid som kan ställas in med \"Systémové nástroje -> Nastavení času\"."
			},{
				type: "name",
				title: "Beskrivning",
				content: "Visar en kort beskrivning av den anslutna enheten."
			},{
				type: "name",
				title: "Status",
				content: "Visar aktuell status (aktiverat eller inaktiverat) av Föräldrakontroll i motsvarande enhet."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ för att ändra eller ta bort motsvarande enhet."
			},{
				type: "step",
				title: "Att begränsa möjligheterna för en ny klient enheten",
				content: [
					"1. Klicka på Lägg till.",
					"2. Klicka på Visa befintliga enheter och välj en ansluten enhet i listan Anslut enheter, eller ange enhetens namn och MAC-adress för att manuellt lägga till en enhet som inte är ansluten.",
					"3. Klicka på ikonen Internet Internettid för att ange en tidsperiod under vilken begränsningen gäller.",
					"4. Ange en kort beskrivning i fältet Beskrivning. (Tillval)",
					"5. Välj Aktivera.",
					"6. Klicka på OK."
				]
			},{
				type: "paragraph",
				content: "För att ändra eller ta bort en Föräldra styrning, klicka på ikonen Edit (redigera) för att redigera informationen eller Papperskorgen för att ta bort motsvarande post."
			},{
				type: "paragraph",
				content: "Att ta bort flera poster, välj alla poster och klicka på Ta bort ovanför tabellen."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Innehåll begränsning",
			CONTENT: [{
				type: "name",
				title: "Svart lista",
				content: "Innehåller nyckelord som används för att blockera tillgång till någon webbplats via klientens enhet, som anges i föräldrakontroll listan.",
				children: [{
					type: "paragraph",
					content: "Klicka på Lägg till ett nytt sökord för att lägga till nyckelord till blacklist. För att ta bort ett nyckelord, klicka på (-) symbolen av nyckelordet som du vill ta bort."
				}]
			},{
				type: "name",
				title: "Vit lista",
				content: "Innehåller webbplatsadresser som klientenheter angivna i förteckningen Föräldrakontroll har tillgång till.",
				children: [{
					type: "paragraph",
					content: "Klicka på Lägg till nyt domännamn för att lägga till en webbplats till whitelistan. Ta bort en webbplats, klicka på (-) symbolen för den webbplats som du vill ta bort."
				}]
			},{
				type: "paragraph",
				content: "Nyckelord kan även domännamn, exempelvis www.mail.google.com eller www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "Kvalitet (QoS) hjälper till att prioritera Internet trafik baserat på dina behov. Du kan ange prioritet för en enhet eller ett program i QoS-reglerna."
			},{
				type: "name",
				title: "Aktivera QoS",
				content: "Markera den här kryssrutan för att aktivera QoS-funktion."
			},{
				type: "name",
				title: "Bandbredd uppladdning",
				content: "Ange den maximala bandbredd som erbjuds av din ISP för uppladdning."
			},{
				type: "name",
				title: "Bandbredd nedladdning",
				content: "Ange den maximala bandbredd som tillhandahålls av din ISP för nedladdning."
			},{
				type: "name",
				title: "Hög prioritet",
				content: "Ange en procentsats för trafik med hög prioritet."
			},{
				type: "name",
				title: "Medel prioritet",
				content: "Ange ett procentvärde för den mellersta prioriterade trafiken."
			},{
				type: "name",
				title: "Låg prioritet",
				content: "Ange en procentsats för låg prioritet trafik."
			},{
				type: "note",
				title: "Obs",
				content: "Det maximala beloppet (i procent) av samtliga prioriteringar är 1."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		QOS_RULE: {
			TITLE: "QoS-regel lista",
			CONTENT: [{
				type: "name",
				title: "Typ",
				content: "Välj en typ att lägga till QoS-regeln."
			},{
				type: "step",
				title: "Att sätta upp en regel för hög/mellan/låg prioritet i enheten",
				content: [
					"1. Klicka på Lägg till.",
					"2. Välj på enheten.",
					"3. Klicka på Visa befintliga enheter välj önskad enhet i listan Enheter, eller också kan du ange ett namn och dess MAC-adress manuellt i enhetens namn och MAC-adress.",
					"4. Klicka på OK."
				]
			},{
				type: "step",
				title: "Att sätta upp en regel för hög/mellan/låg prioritering beroende på program",
				content: [
					"1. Klicka på Lägg till.",
					"2. Välj By Program.",
					"3. Välj önskat program från listan över program, eller du kan anpassa ett program genom att konfigurera namn, protokoll och port (1-65535) i motsvarande fält kan du ange en enda port, flera portar och portintervall, använd kommatecken för att separera (t.ex.  21,36 -105,111).",
					"4. Klicka på OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Uppgradering av databas",
			CONTENT: [{
				type: "name",
				title: "Ny databasfil",
				content: "Klicka på Bläddra för att hitta din nya databasfil. Markera den och klicka på Upgrade för att uppgradera din databas till en nyare version."
			},{
				type: "name",
				title: "Databasversion",
				content: "Visar den aktuella databas version."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Brandvägg",
			CONTENT: [{
				type: "name",
				title: "SPI-brandvägg",
				content: "SPI-brandvägg (Stateful Packet Inspection) förhindrar attacker och konrollerar den trafik som passerar genom router baserad på protokollet."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "DoS-skydd",
			CONTENT: [{
				type: "name",
				title: "DoS-skydd",
				content: "Denial of Service (DoS) skyddar ditt nätverk mot DoS-attacker från översvämningar av nätverket med begäran från servern."
			},{
				type: "name",
				title: "Filtrering av ICMP-FLOOD attack ",
				content: "Aktivera för att förhindra översvämningsangrepp via Internet Control Message Protocol (ICMP).",
				children: [{
					type: "name",
					title: "Avstängd",
					content: "Inget skydd."
				},{
					type: "name",
					title: "låg",
					content: "Låg nivå av skydd och låg inverkan på routern."
				},{
					type: "name",
					title: "mellan",
					content: "Måttlig skyddsnivå och delvis märkbar prestandaeffekt på routern."
				},{
					type: "name",
					title: "hög",
					content: "Hög skyddsnivå men märkbar prestandaeffekt på routern."
				}]
			},{
				type: "name",
				title: "Filtrering av UDP-FLOOD attack ",
				content: "Aktivera för att förhindra UDP (User Datagram Protocol)-översvämnings angrepp."
			},{
				type: "name",
				title: "Filtrering av TCP-SYN-FLOOD attack ",
				content: "Aktivera för att förhindra överföring av Protocol-Synchronize (TCP-SYN) -översvämnings angrepp."
			},{
				type: "name",
				title: "Ignorera Pingpaket från WAN-porten",
				content: "Aktivera för att ignorera ping paket från WAN-porten."
			},{
				type: "name",
				title: "Förbjud pingpaket alltifrån LAN-port",
				content: "Att förbjuda ping paket från LAN-port."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Blockerade DoS värd lista",
			CONTENT: [{
				type: "name",
				title: "Blockerade DoS värd lista",
				content: "Visar IP-adress och MAC-adress från någon blockerade DoS-attack källa."
			},{
				type: "step",
				title: "Ta bort en post",
				content: "I listan Värd, välj den post som du vill ta bort och klicka på Ta bort ovanför tabellen."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Åtkomstkontroll",
			CONTENT: [{
				type: "paragraph",
				content: "Åtkomstkontroll används för att tillåta eller blockera vissa datorer och andra enheters åtkomst till ditt nätverk. När en enhet är blockerad, kan den få en IP-adress från routern, men det går inte att kommunicera med andra enheter eller ansluta till Internet."
			},{
				type: "paragraph",
				content: "För att använda åtkomstkontroll, aktiverar du den här funktionen och anger en blacklist och whitelist. Om tillgången är disabled (avstängd), tillåts alla enheter, inklusive de svartlistade att ansluta."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Åtkomstläge",
			CONTENT: [{
				type: "name",
				title: "Svart lista",
				content: "Endast de enheter på den svarta listan nekas åtkomst till nätverket."
			},{
				type: "name",
				title: "Vit lista",
				content: "Endast enheter på whitelisten kommer att ges tillgång till nätverket."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Enheter online",
			CONTENT: [{
				type: "name",
				title: "Enhetens namn",
				content: "Visar namnet på den anslutna enheten."
			},{
				type: "name",
				title: "IP-adress",
				content: "Visar IP-adressen på den anslutna enheten."
			},{
				type: "name",
				title: "MAC-adress",
				content: "Visar MAC-adressen på den anslutna enheten."
			},{
				type: "name",
				title: "Anslutningstyp",
				content: "Visar anslutningstypen av den anslutna enheten."
			},{
				type: "step",
				title: "Blockera en enhet",
				content: "I Enheter online, klicka på Blockera ikonen i Modifiera kolumnen som motsvarar den enhet du vill blockera."
			},{
				type: "step",
				title: "Att blockera flera enheter",
				content: "I enheter online väljer du alla enheter som du vill blockera och klicka på Blockera ovanför tabellen. Enheten kommer automatiskt finnas adderat till enheterna i Blacklist och Whitelist."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Enheter på Blacklist/Whitelist",
			CONTENT: [{
				type: "step",
				title: "Att svartlista eller whitelista en enhet",
				content: [
					"1. Klicka på Lägg till.",
					"2. Ange Enhetens namn.",
					"3. Ange MAC-adressen för enheten.",
					"4. Klicka på OK."
				]
			},{
				type: "step",
				title: "För att ändra eller ta bort en enhet i Blacklist eller Whitelist",
				content: "I blacklist eller whitelist tabellen, Klicka på Edit-ikonen eller ikonen Papperskorgen som motsvarar regeln som du vill ändra eller ta bort."
			},{
				type: "step",
				title: "Ta bort flera enheter i Blacklist eller Whitelist",
				content: "I Blacklist och Whitelist tabell väljer du alla enheter som du vill ta bort och klicka på Ta bort ovanför tabellen."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Inställningar",
			CONTENT: [{
				type: "paragraph",
				content: "ARP (Address Resolution Protocol)-bindning är användbart för att kontrollera tillgång till en specifik dator i nätverket genom att binda in IP-adress och MAC-adressen till enheten. ARP-bindande förhindrar även andra enheter från att använda en viss IP-adress."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "ARP-lista",
			CONTENT: [{
				type: "paragraph",
				content: "Visar MAC- och IP-adresser för de anslutna enheterna."
			},{
				type: "name",
				title: "ARP-nummer",
				content: "Visar det totala antalet enheter som är anslutna till routern."
			},{
				type: "name",
				title: "MAC-adress",
				content: "Visar MAC-adressen på den anslutna enheten."
			},{
				type: "name",
				title: "IP-adress",
				content: "Visar IP-adressen till den anslutna enheten."
			},{
				type: "name",
				title: "Bundna",
				content: "Anger om MAC- och IP-adresser är bundna eller inte."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ till att binda eller ta bort motsvarande post i listan."
			},{
				type: "note",
				title: "Obs",
				content: "Du kan inte binda samma IP-adress till mer än en MAC-adress."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Bindande lista",
			CONTENT: [{
				type: "step",
				title: "Att inrätta en enhet med ARP-bindning",
				content: [
					"1. Klicka på Lägg till.",
					"2. Ange MAC-adressen för enheten.",
					"3. Ange en IP-adress som du vill binda till ovanstående MAC-adress.",
					"4. Ange en beskrivning för den här enheten. (Tillval)",
					"5. Välj Aktivera.",
					"6. Klicka på OK."
				]
			},{
				type: "step",
				title: "För att ändra eller ta bort en post",
				content: "I bindningstabellen, klicka på Edit-ikonen eller ikonen Papperskorgen som motsvarar den post som du vill ändra eller ta bort."
			},{
				type: "step",
				title: "Ta bort flera poster",
				content: "I bindande listan, välj alla poster som du vill ta bort och klicka på Ta bort ovanför tabellen."
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Välj att aktivera (On) eller inaktivera (Off) IPv6 på routern."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: Statisk IP",
			},{
				type: "name",
				title: "Statisk IP-adress",
				content: "Välj denna typ om din Internet-leverantör använder statisk IPv6 adress tilldelning."
			},{
				type: "name",
				title: "IPv6 adress/Default Gateway/Primary DNS/Sekundär DNS",
				content: "Ange dessa parametrar som tillhandahålls av Internet-leverantören."
			},{
				type: "name",
				title: "MTU-storlek",
				content: "Standard och typisk MTU (Maximum Transmission Unit) storlek för de flesta Ethernet-nätverk är 1500 bytes. Det är inte rekommenderat att ändra MTU-storlek om det inte krävs av Internet-leverantören."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: Dynamisk IP",
			},{
				type: "name",
				title: "Dynamisk IP",
				content: "Välj denna typ om din Internet-leverantör använder dynamiska IPv6 adress tilldelning."
			},{
				type: "name",
				title: "IPv6 adress/Primary DNS/Sekundär DNS",
				content: "Dessa parametrar är automatiskt tilldelade av en DHCPv6-server från din Internet-leverantör."
			},{
				type: "name",
				title: "Förnya",
				content: "Klicka på den här knappen för att få nya IPv6-parametrar från en DHCPv6-server av internetleverantören."
			},{
				type: "name",
				title: "Släpp",
				content: "Klicka på den här knappen för att lossa alla IPv6-adresser som tilldelas via DHCPv6-server från internetleverantören."
			},{
				type: "name",
				title: "Få IPv6-adress",
				content: "Välj DHCPv6 för att få en icke-tillfällig IPv6-adress eller SLAAC för att få en IPv6 adress skapad av routerns annonspaket, beroende på din Internet-leverantör."
			},{
				type: "name",
				title: "Prefix delegation",
				content: "Välj aktivera om du vill få ett prefix av DHCPv6-server från ISP, eller Disable (deaktivera) för att manuellt ange ett adressprefix. Klienter i nätverket kommer att generera en IPv6 adress med detta prefix."
			},{
				type: "name",
				title: "DNS-adress",
				content: "Välj att Få dynamiskt från ISP eller Använd följande DNS-adress. Om Använd följande DNS-adress är markerad kan du manuellt ange den DNS-adress som du har fått av din Internet-leverantör."
			},{
				type: "name",
				title: "Primär DNS/Sekundär DNS",
				content: "Ange dessa parametrar manuellt eller skaffa dem dynamiskt från Internet-leverantören."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Välj denna typ om din Internet-leverantör använder PPPoEv6, och ger ett användarnamn och lösenord."
			},{
				type: "name",
				title: "Användarnamn/lösenord",
				content: "Ange dessa parametrar som tillhandahålls av internet-leverantören."
			},{
				type: "name",
				title: "IPv6-adress",
				content: "Denna adress kommer automatiskt att tilldelas av DHCPv6-servern från internetleverantören, efter du angett användarnamn och lösenord och klickat på Anslut."
			},{
				type: "name",
				title: "DNS-adress",
				content: "Välj att Få dynamiskt från ISP eller Använd följande DNS-adress. Om Använd följande DNS-adress är markerad kan du manuellt ange den DNS-adress som du har fått av din Internet-leverantör."
			},{
				type: "name",
				title: "Få IPv6-adress",
				content: "Välj DHCPv6 för att få en icke-tillfällig IPv6-adress eller SLAAC för att få en IPv6 adress skapad av routerns annonspaket, eller av manuell IPv6 adress enligt din Internet-leverantör."
			},{
				type: "name",
				title: "Prefix delegation",
				content: "Välj aktivera om du vill få ett prefix av DHCPv6-server från ISP, eller Disable (deaktivera) för att manuellt ange ett adressprefix. Klienter i nätverket kommer att generera en IPv6 adress med detta prefix."
			},{
				type: "name",
				title: "Anslut",
				content: "Klicka på den här knappen för att ansluta till Internet."
			},{
				type: "name",
				title: "Koppla loss",
				content: "Klicka på den här knappen om du vill koppla ned från Internet."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: 6till4 tunnel"
			},{
				type: "name",
				title: "6Till4 Tunnel",
				content: "Välj denna typ om din Internet-leverantör använder 6till4 deployment för att tilldela adressen."
			},{
				type: "name",
				title: "IPv4-adress/IPv4-subnät Mask/IPv4 Default Gateway/Tunnel adress",
				content: "Dessa parametrar kommer att vara dynamiskt genererade av IPv4 information från WAN-porten när du klickar du på Anslut."
			},{
				type: "name",
				title: "Använd följande DNS-server",
				content: "Markera kryssrutan för att manuellt ange den primära DNS-servern och/eller sekundär DNS-server som tillhandahålls av internet-leverantören."
			},{
				type: "name",
				title: "Anslut",
				content: "Klicka på den här knappen för att ansluta till Internet."
			},{
				type: "name",
				title: "Koppla loss",
				content: "Klicka på den här knappen om du vill koppla ned från Internet."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: Pass-Through (Bridge)"
			},{
				type: "paragraph",
				content: "Välj denna typ om din Internet-leverantör använder Pass-Through (Bridge) i nätverket. Ingen konfiguration krävs för denna typ av anslutning."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Med undantag för genomströmning(bro), kräver de andra 6 typer av Internet-anslutning IPv6-konfiguration."
			},{
				type: "name",
				title: "Tilldelad typ",
				content: "Välj en lämplig beroende på din Internet-leverantör.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Att automatiskt tilldela IP-adresser till klienter i nätverket.",
					children: [{
						type: "name",
						title: "Adress Prefix",
						content: "Ange det adress prefix som du har fått av din Internet-leverantör."
					},{
						type: "name",
						title: "Frigörelsetid",
						content: "Varaktigheten i sekunder när den tilldelade IP-adressen är giltig. Antingen behåller du standardvärdet 86400 sekunder eller ändrar det om det krävs av internet-leverantören."
					},{
						type: "name",
						title: "Adress",
						content: "Det är IP-adressen som tilldelats automatiskt av DHCPv6-server från internetleverantören."
					}]
				},{
					type: "name",
					title: "SLAAC+statslösa DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Adress Prefix",
						content: "Ange det adress prefix som du har fått av din Internet-leverantör."
					},{
						type: "name",
						title: "Adress",
						content: "Det är IP-adressen som automatiskt tilldelas av Internet-leverantören."
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Adress Prefix",
						content: "Ange det adress prefix som du har fått av din Internet-leverantör."
					},{
						type: "name",
						title: "Adress",
						content: "Det är IP-adressen som automatiskt tilldelas av Internet-leverantören."
					}]
				}]
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "MAC-klon",
			CONTENT: [{
				type: "name",
				title: "Använd standard MAC-adress",
				content: "Ändra INTE routerns MAC-adress, om inte internetleverantören binder den tilldelade IP-adressen till MAC-adressen."
			},{
				type: "name",
				title: "Använd styrenhetens MAC-adress",
				content: "Markera och kopiera den aktuella MAC-adressen till den dator som är ansluten till routern, om ISP binder den tilldelade IP-adressen för datorns MAC-adress."
			},{
				type: "name",
				title: "Använd egen MAC-adress",
				content: "Ange MAC-adressen manuellt, i fall ISP binder den tilldelade IP-adressen till en specifik MAC-adress."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Tidsinställningar",
			CONTENT: [{
				type: "step",
				title: "Att automatiskt synkronisera tid",
				content: [
					"1. I fältet Ställ in tid välj Hämta automatiskt från internet.",
					"2. Välj lokal tidszon i listrutan.",
					"3. I fältet NTP-server I anger du IP-adressen eller domännamnet för din önskade NTP-server.",
					"4. I NTP-server II anger du IP-adressen eller domännamnet för den andra NTP-servern. (Tillval)",
					"5. Klicka på Hämta.",
					"6. Klicka på Save (spara)."
				]
			},{
				type: "step",
				title: "Att manuellt ställa in datum och tid",
				content: [
					"1. I fältet Set The Time, välj Manuelly.",
					"2. Ange aktuellt datum.",
					"3. Välj aktuell tid (i 24-timmarsformat, t.ex. 16:00:00).",
					"4. Klicka på Spara."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Sommartid",
			CONTENT: [{
				type: "step",
				title: "Att ställa in sommartid",
				content: [
					"1. Välj Aktivera Enable Daylight Sommartid.",
					"2. Välj rätt datum och tid när sommartid börjar hos din lokala tidszon.",
					"3. Välj rätt datum och tid när sommartiden slutar på din lokala tidszon.",
					"4. Klicka på Spara."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Felsökning",
			CONTENT: [{
				type: "paragraph",
				content: "Routern ger Ping och Traceroute verktyg som hjälper dig att felsöka problem med nätverksanslutningen. Ping verktyget skickar paket till en mål-IP-adressen eller domännamnet och loggar resultaten, t.ex. antal paket som skickas och mottas, och round-trip. Traceroute verktyget skickar paket till en mål-IP-adressen eller domännamn och visar antalet hopp och tid för att nå destinationen."
			},{
				type: "paragraph",
				content: "Du kan pinga och traceroute en lokal enhet som IP-adress eller ett domännamn, som google.com, yahoo.com, osv."
			},{
				type: "step",
				title: "Att diagnostisera med Ping",
				content: [
					"1. Ange IP-adress eller domännamn.",
					"2. Klicka på pilen för att öppna menyn Avancerat och ange Ping antal, och Ping paketstorlek. (Tillval)",
					"3. Klicka på Start."
				]
			},{
				type: "step",
				title: "Att diagnostisera med Traceroute",
				content: [
					"1. Ange IP-adress eller domännamn.",
					"2. Klicka på pilen för att öppna menyn Avancerat och ange antal hopp (att nå) i fältet Traceroute Max TTL (livstid). Standardvärdet är 20. (Tillval)",
					"3. Klicka på Start."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Uppgradering av fast programvara",
			CONTENT: [{
				type: "paragraph",
				content: "Innan du uppgraderar den fasta programvaran för routern måste du hämta den senaste uppdateringen av firmware <a class=\"link\" target=\"blank\" href= \"http://www.tp-link.com/se/Support/\">TP-Link Support</a> webbplats till din dator. "
			},{
				type: "step",
				title: "VIKTIGT: För att förhindra upgrade failure, observera följande:",
				content: [
					"Kontrollera att den senaste programvaran är anpassad till versionen av maskinvaran (som visas på Firmware Upgrade sidan).",
					"Se till att du har en stabil anslutning mellan routern och datorn. Det rekommenderas inte att uppgradera den fasta programvaran trådlöst.",
					"Se till att du tar bort alla USB-lagringsenheter anslutna till routern före uppgraderingen av den fasta programvaran för att förhindra förlust av data.",
					"Säkerhetskopiera konfigurationen för routern.",
					"Stäng INTE av routern under uppgraderingen av den fasta programvaran."
				]
			},{
				type: "step",
				title: "Uppgradera routerns firmware ",
				content: [
					"1. Klicka på Bläddra.",
					"2. Leta upp och markera den hämtade programfilen.",
					"3. Klicka på Uppgradera."
				]
			},{
				type: "paragraph",
				content: "Uppgraderingen tar några minuter att slutföra. Stäng ABSOLUT INTE av routern när uppgraderingen pågår."
			}]
		},
		
		BACKUP: {	
			TITLE: "Säkerhetskopiering",
			CONTENT: [{
				type: "paragraph",
				content: "Det rekommenderas starkt att säkerhetskopiera dina nuvarande konfigurationer, i fall en återhämtning behövs för att återställa systemet till ett tidigare tillstånd eller från fabriksinställningarna."
			},{
				type: "paragraph",
				content: "Klicka på Säkerhetskopiering för att spara dina aktuella konfigurationer till din dator. Se till att spara säkerhetskopian till en säker plats så du kan hämta och återställa routern senare, om det behövs."
			}]
		},
		
		RESTORE: {
			TITLE: "Återställa",
			CONTENT: [{
				type: "step",
				title: "Återställa från säkerhetskopia",
				content: [
					"1. Klicka på Bläddra.",
					"2. Leta upp och markera filen.",
					"3. Klicka på Återställ."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Fabriksinställningarna återställer",
			CONTENT: [{
				type: "paragraph",
				content: "Klicka på Återställ fabriksinställningar för att återställa routern till fabriksinställningarna."
			},{
				type: "note",
				title: "Obs",
				content: [
					"1. Fabriksinställningarna raderar alla inställningar som du har konfigurerat för routern. För att logga in igen på routern använder du admin för både användarnamn och lösenord.",
					"2. Stäng INTE av routern under säkerhetskopieringen eller återställningen."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Kontohantering",
			CONTENT: [{
				type: "paragraph",
				content: "Med den här sidan kan du ändra ditt användarnamn och/eller lösenord, och att ange en e-postadress för återställning av lösenord."
			},{
				type: "name",
				title: "Gamla användarnamn",
				content: "Skriv in ditt nuvarande användarnamn."
			},{
				type: "name",
				title: "Gammalt lösenord",
				content: "Skriv in ditt nuvarande lösenord."
			},{
				type: "name",
				title: "Nya användarnamn",
				content: "Skriv in ditt nya användarnamn."
			},{
				type: "name",
				title: "Nytt lösenord",
				content: "Skriv in ditt nya lösenord."
			},{
				type: "name",
				title: "Bekräfta nytt lösenord",
				content: "Skriv in ditt nya lösenord igen."
			},{
				type: "note",
				title: "Obs",
				content: "Om du bestämmer dig för att ändra det aktuella användarnamnet och lösenordet som används för att logga in till routern, se till att skriva ner de nya inloggningsuppgifterna på en säker plats."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Lösenord återhämtning",
			CONTENT: [{
				type: "name",
				title: "Aktivera lösenord återhämtning",
				content: "Det är rekommenderas bestämt att ni aktiverar lösenord återhämtning, som kommer skicka dina borttappade eller bortglömda användarnamn och lösenord via e-post."
			},{
				type: "name",
				title: "Från",
				content: "Ange en giltig e-postadress som ska användas för utgående e-post."
			},{
				type: "name",
				title: "Till",
				content: "Ange en giltig e-postadress som ska användas för inkommande e-post."
			},{
				type: "name",
				title: "SMTP-server",
				content: "Ange SMTP-serverns -adress som routern använder för att skicka kontoinformation via e-post."
			},{
				type: "name",
				title: "Aktivera autentisering",
				content: "Välj Aktivera autentisering om utgående e-postserver kräver autentisering för att skicka e-post, och fyll i användarnamn och lösenord i motsvarande fält. Dessa fält är skiftlägeskänsliga."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Lokal hantering",
			CONTENT: [{
				type: "paragraph",
				content: "I denna sektion kan du begränsa antalet klientenheter på det lokala nätverket från åtkomst till routern med hjälp av MAC-adress-baserad autentisering."
			},{
				type: "name",
				title: "Tillträde för alla LAN-anslutna enheter",
				content: "Växla mellan på för att aktivera lokal förvaltning för alla LAN-anslutna enheter eller av för att möjliggöra förvaltning för en viss enhet."
			},{
				type: "name",
				title: "MAC-adress",
				content: "Visar MAC-adressen för den begränsade tillträde enheten."
			},{
				type: "name",
				title: "Beskrivning",
				content: "Visar en beskrivning av apparaten med de begränsade möjligheter."
			},{
				type: "name",
				title: "Status",
				content: "Visar aktuell status för enheten med begränsad åtkomst (aktiverad eller inaktiverad)."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ för att ändra och ta bort motsvarande enhet från listan."
			},{
				type: "step",
				title: "Att lägga till en klient i listan",
				content: [
					"1. Klicka på Lägg till.",
					"2. Klicka på Visa befintliga enheter för att välja en befintlig enhet eller ange MAC-adressen för en enhet i fältet MAC-adress.",
					"3. Ange en beskrivning av enheten.",
					"4. Välj Aktivera.",
					"5. Klicka på OK."
				]
			},{
				type: "step",
				title: "Ändra eller ta bort en enhet i listan",
				content: "I tabellen, Klicka på Edit -ikonen eller ikonen papperskorgen som motsvarar den enhet som du vill modifiera eller ta bort."
			},{
				type: "step",
				title: "Ta bort flera enheter",
				content: "Välj alla enheter som du vill ta bort och klicka på Ta bort."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Fjärrhantering",
			CONTENT: [{
				type: "paragraph",
				content: "Med funktionen fjärrhantering kan du komma åt och konfigurera routern via Internet."
			},{
				type: "name",
				title: "Avaktivera fjärrhantering",
				content: "Välj det här alternativet om du vill deaktivera funktionen för fjärrhantering."
			},{
				type: "name",
				title: "Aktivera funktionen för alla enheter",
				content: "Välj det här alternativet för att möjliggöra fjärrhantering för alla IP-adresser. Om alternativet väljs, ange Web Management Port."
			},{
				type: "name",
				title: "Aktivera funktionen för angivna enheter",
				content: "Välj det här alternativet för att möjliggöra fjärrhantering för en specifik IP-adress. Om alternativet väljs, ange Web Management Port och fjärrhantering IP-adress."
			},{
				type: "name",
				title: "Webbhanteringsport",
				content: "Ange portnummer mellan 1024 och 65535, som används för att få åtkomst till routerns webbaserade gränssnitt med större säkerhet. Normalt använder webbläsarna standard-HTTP-port 80. Standard och gemensam service port 8080, vilket är en alternativ port för HTTP."
			},{
				type: "name",
				title: "Remote Management IP-adress",
				content: "Ange en giltig IP-adress eller IP-intervall för att få åtkomst till routern."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Systemlogg",
			CONTENT: [{
				type: "paragraph",
				content: "I systemloggen visas en lista med de aktiviteter (händelser) i routern. Kan du definiera vilka typer av loggar och/eller nivån på loggar du vill visa. Denna sida har också e-post funktionen som du kan konfigurera för att automatiskt skicka loggfilerna till en specifik e-postadress, eller för att exportera loggfiler till en dator."
			},{
				type: "name",
				title: "Typ",
				content: "Välj den typ av systemlogg som ska visas."
			},{
				type: "name",
				title: "Nivå",
				content: "Välj den nivå av systemlogg som ska visas."
			},{
				type: "name",
				title: "Uppdatera",
				content: "Klicka på den här ikonen för att uppdatera systemets loggfil."
			},{
				type: "name",
				title: "Ta bort alla",
				content: "Klicka på den här ikonen för att ta bort alla system loggar."
			},{
				type: "name",
				title: "Spara logg",
				content: "Klicka på den här knappen för att ladda ner alla system logg filerna på din lokala dator."
			},{
				type: "name",
				title: "E-postinställningar",
				content: "Klicka på den här knappen om du vill konfigurera e-postinställningarna för system loggar."
			},{
				type: "step",
				title: "Att konfigurera e-postinställningarna för system loggar",
				content: [
					"1. Klicka på E-postinställningar.",
					"2. Från - Ange en giltig e-postadress som ska användas för utgående e-post.",
					"3. Till - Ange en giltig e-postadress som ska användas för inkommande e-post.",
					"4. SMTP-server - Ange SMTP-serveradressen som routern använder för att skicka systemets loggar via e-post.",
					{
						content: "5. Aktivera autentisering - Välj det här alternativet om SMTP-servern kräver autentisering för att skicka e-post.",
						children: [{
							type: "name",
							title: "Användarnamn",
							content: "Ange användarnamnet för SMTP-servern. Det här fältet är skiftlägeskänsligt."
						},{
							type: "name",
							title: "Lösenord",
							content: "Ange lösenord för SMTP-servern. Det här fältet är också skiftlägeskänsligt."
						}]
					},{
						content: "6. Aktivera automatisk post - Välj det här alternativet för att ange vilken tid på dagen som systemloggen ska skickas automatiskt.",
						children: [{
							type: "paragraph",
							content: "För att skicka in systemets logg varje dag vid en viss tid, ange antal timmar (HH) och minuter (MM) i 24-timmarsformat, t.ex. 16:00."
						},{
							type: "paragraph",
							content: "För att skicka in systemets logg på en specifik timme eller tidsintervall anger du antalet timmar."
						}]
					},
					"7. Klicka på Spara."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Trafikstatistik",
			CONTENT: [{
				type: "paragraph",
				content: "Trafikstatistik sidan visar nätverktrafiken i LAN, WAN, och WLAN-paket skicka och ta emot."
			},{
				type: "name",
				title: "Trafikstatistik",
				content: "Växla på för att visa den statistiska informationen."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Trafikstatistik lista",
			CONTENT: [{
				type: "name",
				title: "IP-adress eller MAC-adress",
				content: "Visar IP-adress och MAC-adress av den tillhörande klient enheten."
			},{
				type: "name",
				title: "Totala paket",
				content: "Visar det totala antalet paket som sänds och tas emot av klient enheten sedan början av sessionen eller den senaste nollställningen."
			},{
				type: "name",
				title: "Totalt antal byte",
				content: "Visar det totala antalet bytes som sänds och tas emot av klient enheten sedan början av sessionen eller den senaste nollställning."
			},{
				type: "name",
				title: "Aktuella paket",
				content: "Visar aktuellt antal paket som skickas och tas emot på ett specifikt tidsintervall."
			},{
				type: "name",
				title: "Nuvarande byte",
				content: "Visar det aktuella antalet bytes som sänds och tas emot på ett specifikt tidsintervall."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ för att återställa (till noll) och ta bort motsvarande statistik från listan."
			},{
				type: "name",
				title: "Uppdatera",
				content: "Klicka på för att uppdatera statistisk information på sidan."
			},{
				type: "name",
				title: "Nollställ alla",
				content: "Klicka på för att återställa alla värden i listan till noll."
			},{
				type: "name",
				title: "Ta bort alla",
				content: "Klicka för att ta bort alla statistiska uppgifter i listan."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "2,4 GHz/5 GHz trådlöst",
			CONTENT: [{
				type: "name",
				title: "Signalintervall",
				content: "Ange ett värde mellan 40 och 1000 i millisekunder för att bestämma varaktighet mellan paket som sänds från routern för synkronisering av det trådlösa nätverket. Standardvärdet är 100 millisekunder."
			},{
				type: "name",
				title: "RTS-gränsvärde",
				content: "Ange ett värde mellan 1 och 2346 för att fastställa paketstorleken för överföring av data via routern. Som standard, är RTS (begäran att skicka) tröskel storleken 2346. Om paketstorleken är större än det förinställda tröskelvärdet , skickar routern begäran till en viss mottagande station och därefter utförs en förhandling om sändning av en dataram, annars skickas paketet omedelbart."
			},{
				type: "name",
				title: "DTIM-intervall",
				content: "Det här värdet anger intervallet för DTIM-meddelandet (Delivery Traffic Indication). Ange ett värde mellan 1 och 15 i millisekunder. Standardvärdet är 1, anger att DTIM-intervall är detsamma som Signalintervall."
			},{
				type: "name",
				title: "Uppdateringsperiod för gruppnyckel",
				content: "Ange det antal sekunder (minst 30) för att automatiskt styra tidsintervallet för krypteringsnyckelns förnyelse. Standardvärdet är 0, som anger ingen förnyelse av nyckel."
			},{
				type: "name",
				title: "WMM-funktionen",
				content: "WMM-funktionen garanterar att paket med hög prioritet överförs med prioritet. Den är aktiverad som standard och rekommenderas starkt."
			},{
				type: "name",
				title: "Kort GI funktion",
				content: "Den här funktionen är aktiverad som standard och rekommenderas att öka data kapacitet genom att minska skyddsintervallets (GI) tid."
			},{
				type: "name",
				title: "AP Isolation funktion",
				content: "Om du vill begränsa alla trådlösa enheter som är anslutna till ditt nätverk från att samspela med varandra, men fortfarande ha tillgång till Internet markerar du Aktivera AP Isolation i rutan."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "TX Beamforming är en signalbehandlingsteknik som används i sensorsystem för riktad signalöverföring. Om aktiverad, kommer den att användas vid sändning i syfte att stärka Wi-Fi-signalen och förlänga Wi-Fi-täckningen."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "Aktivera WDS överbryggning",
				content: "Aktivera funktionen WDS (Wireless Distribution System) Bridging för att tillåta routern brygga med en annan åtkomstpunkt (AP) i ett trådlöst lokalt nätverk (WLAN). Om den här funktionen är aktiverad kan du konfigurera följande:",
				children: [{
					type: "name",
					title: "SSID (förbikopplad)",
					content: "Ange SSID för WAP (Wireless Access Point) som routern ansluter till som en klient eller använd enkät funktionen för att hitta alla tillgängliga nätverk."
				},{
					type: "name",
					title: "Undersökning",
					content: "Klicka på den här knappen för att skanna och visa SSID, BSSID, signalstyrka, kanal, och information om säkerhet för alla tillgängliga trådlösa nätverk i området. När du väljer ett nätverk, kommer SSID, MAC-adressen och säkerheten automatiskt att fyllas i."
				},{
					type: "name",
					title: "MAC-adressen (överbryggas)",
					content: "Ange den MAC-adress (BSSID) i 12 hexadecimala teckens (0-9, a-f, A-F) format separerade med bindestreck i den trådlösa accesspunkt som routern ansluter till som en klient. Om du väljer önskad AP genom undersökning funktionen, fylls MAC-adress fältet i automatiskt."
				},{
					type: "name",
					title: "Säkerhet",
					content: "Välj rätt typ av säkerhet för vald accesspunkt, nej, WPA-PSK/WPA2-PSK eller WEP. Om du väljer önskad AP genom undersöknings funktionen, fylls säkerhets fältet i automatiskt.",
					children: [{
						type: "name",
						title: "Lösenord",
						content: "Det här alternativet är tillgängligt när säkerheten är WPA-PSK/WPA2-PSK eller WEP. Ange lösenord för vald accesspunkt."
					},{
						type: "name",
						title: "Auth. Typ",
						content: "Det här alternativet är bara tillgängligt när säkerhetstypen är WEP (Wired Equivalent Privacy). Markera tillämplig autentiseringstyp (Auto, Öppet System och Delad nyckel) används för vald accesspunkt."
					},{
						type: "name",
						title: "WEP nyckelformat",
						content: "Det här alternativet är bara tillgängligt när säkerheten är WEP. Välj format (ASCII eller hexadecimal) som används av den valda AP."
					}]
				}]
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS Bridging",
			CONTENT: [{
				type: "paragraph",
				content: "Markera kryssrutan Aktivera WPS-kryssrutan och klicka på Spara för att aktivera WPS (wifi Protected Setup) funktionen som gör att du enkelt kan konfigurera och ansluta till WPS-aktiverade enheter genom att trycka på WPS-knappen."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Markera Enable NAT kryssrutan och klicka på Spara för att aktivera NAT (Network Address Translation) funktion."
			},{
				type: "note",
				title: "Obs",
				content: "När NAT är avaktiverat, kommer inte konfigurationer i NAT vidarebefordran att träda i kraft."
			},{
				type: "name",
				title: "NAT-Boost",
				content: "Markera Enable NAT Boost kryssrutan och klicka på Save för att säkerställa att routern har bästa genomströmning."
			},{
				type: "note",
				title: "Obs",
				content: "När NAT-Boost är aktiverat, inaktiveras QoS och trafikstatistik automatiskt."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "Inställningar av DoS-skyddsnivå",
			CONTENT: [{
				type: "paragraph",
				content: "DoS-skydds nivå skyddar routern från ICMP-FLOOD, UDP-FLOODoch TCP-FLOOD attacker."
			},{
				type: "name",
				title: "Nivå av ICMP-FLOOD paket ",
				content: "Ange ett värde mellan 5 och 7200 ICMP-paket för att utlösa ICMP-skydd mot översvämningar omedelbart när antalet paket överskrider det förinställda tröskelvärdet."
			},{
				type: "name",
				title: "Nivå av UDP-FLOOD paket ",
				content: "Ange ett värde mellan 5 och 7200 UDP-paket för att utlösa UDP-skydd mot översvämningar omedelbart när antalet paket överskrider det förinställda tröskelvärdet."
			},{
				type: "name",
				title: "Nivå av TCP-FLOOD paket ",
				content: "Ange ett värde mellan 5 och 7200 TCP SYN paket för att aktivera TCP-SYN-skydd mot översvämningar omedelbart när antalet paket överskrider det förinställda tröskelvärdet."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Dubbelsidig utskrift",
			CONTENT: [{
				type: "name",
				title: "Dubbelsidig utskrift",
				content: "Välj duplextyp i listrutan."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Aktivera nattläge",
				content: "Markera den här kryssrutan för att stänga av LED-lamporna under nattlägesperioden utan att det påverkar routerns prestanda."
			},{
				type: "name",
				title: "Period av nattläge",
				content: "Ange en tidsperiod då nattläget ska vara aktivt."
			},{
				type: "paragraph",
				content: "Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		OPEN_VPN:{
			TITLE: "ÖppenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "Med OpenVPN, kan du använda Internet för att säkert få tillgång till ett nätverk när du är utanför hemmet. Om du vill använda VPN-tjänst, måste du konfigurera dynamisk DNS-tjänst (rekommenderas) eller tilldela en statisk IP-adress för routerns WAN-port. Och systemtiden måste synkroniseras med Internet."
			},{
				type: "name",
				title: "Aktivera VPN-servern",
				content: "Markera den här kryssrutan för att aktivera OpenVPN-servern."
			},{
				type: "name",
				title: "Typ av tjänst",
				content: "Välj kommunikationsprotokoll för OpenVPN-servern: UDP eller TCP."
			},{
				type: "name",
				title: "Tjänstport",
				content: "Ange en kommunkationsport mellan 1024 och 65535. Standard och gemensam serviceport 1194."
			},{
				type: "name",
				title: "VPN undernät/nätmask",
				content: "Ange vilka IP-adresser som kan lånas ut till klienterna av OpenVPN-servern."
			},{
				type: "name",
				title: "Klientåtkomst",
				content: "Välj åtkomsttyp för din OpenVPN-klient.",
				children: [{
					type: "name",
					title: "Endast hemnätverk",
					content: "Klienter kan endast komma åt routern och LAN-nätverket. Klienternas förvalda routing förändras inte."
				},{
					type: "name",
					title: "Internet- och hemnätverk",
					content: "Kunderna kan få tillgång till hem-nätverket, och webbplatser eller tjänster med en geografisk begränsning när du är utanför landet. Klientens standardväg kommer att ändras."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Certifikat",
			CONTENT: [{
				type: "paragraph",
				content: "Använd certifikatet för information och identifiering av VPN-anslutning för fjärrdatorn."
			},{
				type: "name",
				title: "Generera",
				content: "Klicka för att generera ett nytt certifikat."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Konfigurationsfil",
			CONTENT: [{
				type: "paragraph",
				content: "Fjärrklienter kommer att använda konfigurationsfilen för att få tillgång till routern."
			},{
				type: "name",
				title: "Exportera",
				content: "Klicka på den här knappen för att spara OpenVPN-konfigurationsfilen som ska användas för att lägga till en ny VPN-anslutning."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "VPN-klientinstallationsguide",
			CONTENT: [{
				type: "step",
				title: "Gör så här för att aktivera och ansluta klientenheterna till OpenVPN-servern:",
				content:[{
					type: "paragraph",
					content: "Innan du konfigurerar OpenVPN server, konfigurera dynamisk DNS-tjänst (rekommenderas) eller tilldela en statisk IP-adress för WAN-porten. Och se till att din externa ports NAT inställningar inte är serviceporten , och systemet tid är synkroniserad med Internet."
				},
					"1. Välj aktivera VPN-server.",
					"2. Konfigurera OpenVPN server parametrar (typ av tjänst, serviceport, klientaccess och VPN Subnet/Nätmask och klicka på Spara.",
					"3. Klicka på Exportera om du vill spara konfigurationsfilen.",
					"4. På dina klientenheter, ladda ner och installera OpenVPN klientverktyg från <a class = \"link\"href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> De officiella plattformar som stöds är Windows, Mac OSX, Linux.",
					"5. Starta OpenVPN klientverktyg och lägg till en ny VPN-anslutning med den sparade konfigurationsfilen för att ansluta klientenhet till VPN-servern."
				]},{
					type: "note",
					title: "Obs",
					content: "Besök <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a> för att lära dig mer om OpenVPN-klienter."
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Med PPTP VPN, kan du använda Internet för att enkelt och snabbt få tillgång till ett nätverk när du är utanför hemmet. Det kan förhindras genom någon ISP. Om du vill använda VPN-tjänst, måste du konfigurera dynamisk DNS-tjänst (rekommenderas) eller tilldela en statisk IP-adress för routerns WAN-port. Och systemet tid måste synkroniseras med Internet."
			},{
				type: "name",
				title: "Aktivera VPN-servern",
				content: "Markera den här kryssrutan för att aktivera PPTP VPN-servern."
			},{
				type: "name",
				title: "Klientens IP-adress",
				content: "Ange de IP-adresser (upp till 10 klienter) som kan lånas till klienterna av PPTP VPN-servern."
			},{
				type: "name",
				title: "Tillåt Samba (Nätverksplats)",
				content: "Välj att låta din VPN-klient få tillgång till din lokala Samba-server."
			},{
				type: "name",
				title: "Tillåt NetBIOS-vidarekoppling",
				content: "Välj att tillåta VPN-klient för att få tillgång till Samba server med NetBIOS namn."
			},{
				type: "name",
				title: "Tillåt okrypterade anslutningar",
				content: "Välj att tillåta okrypterade anslutningar till VPN-servern."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Kontolista",
			CONTENT: [{
				type: "paragraph",
				content: "Denna tabell visar konton som kan användas av klienter för att ansluta till PPTP VPN-servern."
			},{
				type: "step",
				title: "För att lägga till ett PPTP VPN-konto",
				content: [
					"1. Klicka på Lägg till.",
					"2. Ange ditt användarnamn och lösenord för att autentisera klienter för PPTP VPN-servern.",
					"3. Klicka på OK."
				]
			},{
				type: "step",
				title: "Om du vill ändra eller ta bort ett befintligt konto",
				content: "I tabellen klicka på ikonen Edit (redigera)  eller papperskorgen motsvarande det konto som du vill ändra eller ta bort."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "VPN-klientinstallationsguide",
			CONTENT: [{
				type: "step",
				title: "Gör så här för att aktivera och ansluta klientenheterna till PPTP VPN-servern:",
				content:[{
					type: "paragraph",
					content: "Innan du konfigurerar PPTP VPN-servern, konfigurerar dynamisk DNS-tjänst (rekommenderas) eller tilldelar en statisk IP-adress för WAN-porten. Se till att den externa port NAT inställningar inte är 1723 och att systemets tid är synkroniserad med Internet."
				},
					"1. Välj aktivera VPN-server.",
					"2. Konfigurera PPTP VPN-server parametrar och klicka på Spara.",
					"3. På dina klientenheter , skapa en PPTP VPN-anslutning. De officiella plattformar som stöds är Windows, Mac OSX, Linux, iOS och Android.",
					"4. Starta PPTP VPN-program, lägga till en ny anslutning och ange domännamnet hos den registrerade DDNS-tjänsten eller statisk IP-adress som tilldelats till WAN-porten för att ansluta din klientenhet till PPTP VPN-servern."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "VPN-anslutningar",
			CONTENT: [{
				type: "paragraph",
				content: "På den här sidan visas de klienter som för närvarande är anslutna till OpenVPN- och PPTP VPN-servrarna som routern är värd för."
			},{
				type: "paragraph",
				content: "Klicka på minustecknet för att koppla ner motsvarande klient."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Internetstatus",
				content: "Visar aktuell status för Internet-anslutning av routern."
			},{
				type: "name",
				title: "Anslutningstyp",
				content: "Visar typen av Internet-anslutning."
			},{
				type: "name",
				title: "IP-adress",
				content: "Visar den aktuella Internet-IP-adressen som tilldelats routern."
			},{
				type: "name",
				title: "Sekundär anslutning/IP-adress",
				content: "Visar den sekundära anslutnings typen och IP-adress."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Routern",
			CONTENT: [{
				type: "title",
				title: "2,4 GHz/5 GHz trådlöst"
			},{
				type: "name",
				title: "SSID",
				content: "Visar det aktuella trådlösa nätverksnamnet för frekvensbandet 2,4 GHz/ 5GHz."
			},{
				type: "name",
				title: "Kanal",
				content: "Visar kanalen som det trådlösa 2,4 GHz/ 5GHz nätet sänder."
			},{
				type: "name",
				title: "MAC",
				content: "Visar MAC-adressen för det trådlösa 2,4 GHz/ 5GHz."
			},{
				type: "title",
				title: "2,4 GHz/5 GHz gästnätverk"
			},{
				type: "name",
				title: "Status",
				content: "Visar om det trådlösa nätverket 2,4 GHz/ 5GHz är på (enabled) eller av (disabled)."
			},{
				type: "name",
				title: "SSID",
				content: "Visar namnet på det trådlösa nätverket."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Trådanslutna/trådlösa klienter",
			CONTENT: [{
				type: "name",
				title: "Namn",
				content: "Visar namnet på -klienten ansluten till routern."
			},{
				type: "name",
				title: "IP-adress",
				content: "Visar den tilldelade IP-adressen för klienten."
			},{
				type: "name",
				title: "MAC-adress",
				content: "Visar klientens MAC-adress."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Skrivare",
			CONTENT: [{
				type: "name",
				title: "Namn",
				content: "Visar namnet på den skrivare som är ansluten till routern via USB-porten."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "USB-disk",
			CONTENT: [{
				type: "name",
				title: "USB-disk",
				content: "Visar namnet på USB-disken som är ansluten till routern."
			},{
				type: "name",
				title: "Totalt",
				content: "Visar den totala lagringskapaciteten för den anslutna USB-lagringsenheten."
			},{
				type: "name",
				title: "Tillgängliga",
				content: "Visa tillgängliga lagringskapaciteten för den anslutna USB-lagringsenheten."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Automatisk upptäckt",
				content: "Klicka på den här knappen om du vill att routern automatiskt upptäcker aktuell typ av Internet-anslutning."
			},{
				type: "note",
				title: "Obs",
				content: "Om du inte är säker på vilken typ av Internet-anslutning du har, använder den automatiska avkänningen eller kontakta leverantören för hjälp."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: Statisk IP",
			},{
				type: "name",
				title: "IP-adress/Nätmask/standard-gateway/Primary DNS/Sekundär DNS",
				content: "Ange den information som tillhandahålls av internet-leverantören."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: Dynamisk IP",
			},{
				type: "name",
				title: "Klona inte MAC-adressen/Clone styrenhetens MAC-adress",
				content: "Välj om du vill klona MAC-adressen eller inte, beroende på din Internet-leverantör."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: PPPoE",
			},{
				type: "name",
				title: "Användarnamn/lösenord",
				content: "Ange det användarnamn och lösenord som du har fått av din Internet-leverantör. Dessa fält är skiftlägeskänsliga."
			},{
				type: "title",
				title: "Typ av Internet-anslutning: L2TP/PPTP",
			},{
				type: "name",
				title: "Användarnamn/lösenord",
				content: "Ange det användarnamn och lösenord som du har fått av din Internet-leverantör. Dessa fält är skiftlägeskänsliga."
			},{
				type: "name",
				title: "Dynamisk IP eller statisk IP",
				children: [{
					type: "name",
					title: "Dynamisk IP",
					content: "Välj om IP-adressen och nätmasken automatiskt tilldelas av Internet-leverantören."
				},{
					type: "name",
					title: "Statisk IP-adress",
					content: "Välj om IP-adress och nätmask tillhandahålls av Internet-leverantören och ange dessa uppgifter i motsvarande fält."
				}]
			},{
				type: "name",
				title: "VPN-server IP/domännamn",
				content: "Ange VPN-serverns IP-adress eller domännamn som du har fått av din Internet-leverantör."
			},{
				type:"paragraph",
				content:"Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Trådlösa inställningar",
			CONTENT: [{
				type: "name",
				title: "Aktivera trådlös radio",
				content: "Markera den här kryssrutan för att aktivera 2,4 GHz/ 5GHz radiofrekvens."
			},{
				type: "name",
				title: "Namn på trådlöst nätverk (SSID)",
				content: "Du kan lämna det förvalda trådlösa nätverksnamn (SSID) som det är, eller ange ett nytt namn (max. 32 tecken). Det här fältet är skiftlägeskänsligt."
			},{
				type: "name",
				title: "Dölj SSID",
				content: "Markera den här kryssrutan om du vill dölja 2,4 GHz/ 5GHz nätverksnamnet (SSID) från Wi-Fi -nätverket."
			},{
				type: "name",
				title: "Lösenord",
				content: "Ange ett trådlöst lösenord mellan 8 och 63 ASCII-tecken, eller mellan 8 och 64 hexadecimala tecken. Det här fältet är skiftlägeskänsligt."
			},{
				type:"paragraph",
				content:"Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Enhetsinställningar",
			CONTENT: [{
				type: "paragraph",
				content: "Enhetens inställningssida visar information om anslutna USB-lagringsenhet via USB-porten."
			},{
				type: "name",
				title: "Skanna",
				content: "Vanligtvis, upptäcker routern automatiskt nya enheter. Om inte, klicka på den här knappen för att söka efter eventuella nya anslutna enheter och uppdatera sidan med den uppdaterade informationen."
			},{
				type: "name",
				title: "Volym",
				content: "Visar namnet på USB-disk."
			},{
				type: "name",
				title: "Kapacitet",
				content: "Visar den totala lagringskapaciteten för USB."
			},{
				type: "name",
				title: "Ledigt utrymme",
				content: "Visar tillgängliga lediga lagringsutrymme."
			},{
				type: "name",
				title: "Ta bort säkert",
				content: "Klicka på den här knappen för att säkert ta bort USB-lagringsenheten innan du kopplar bort den från routern.",
				children: [{
					type: "paragraph",
					content: "Observera att knappen säker borttagning bara visas när det finns en USB-lagringsenhet ansluten till routern, och du kommer inte att kunna ta bort USB-enheten medan den aktuella volymen är upptagen."
				}]
			},{
				type: "name",
				title: "Status",
				content: "Den här kryssrutan visas bara när det finns en USB-lagringsenhet som är ansluten till routern. Välj för att aktivera fildelning i USB-enheten."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Dela inställningar",
			CONTENT: [{
				type: "name",
				title: "Nätverk/Media Server namn",
				content: "Visar det namn som används för att få åtkomst till den anslutna USB-lagringsenheten."
			},{
				type:"paragraph",
				content:"Klicka på Spara för att spara alla dina inställningar."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Mappdelning",
			CONTENT: [{
				type: "name",
				title: "Dela alla",
				content: "Slå på för att dela alla filer och mappar eller Av för att bara dela valda mappar."
			},{
				type: "name",
				title: "Aktivera autentisering",
				content: "Det rekommenderas starkt att aktivera autentisering för att få användare att ange ett giltigt användarnamn och lösenord för att få åtkomst till delade mappar."
			},{
				type: "name",
				title: "Mappnamn",
				content: "Visar namnet på den delade mappen."
			},{
				type: "name",
				title: "Sökväg",
				content: "Visar sökvägen till den delade mappen."
			},{
				type: "name",
				title: "Mediedelning",
				content: "Anger om den delade mappen är tillåtna för mediedelning eller inte."
			},{
				type: "name",
				title: "Volymnamn",
				content: "Visar namnet på den delade volymen."
			},{
				type: "name",
				title: "Status",
				content: "Visar status för den delade mappen genom att lampan tänds eller släks."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ för att ändra eller ta bort motsvarande delad mapp."
			},{
				type: "name",
				title: "Lägg till",
				content: "Klicka på den här knappen för att skapa en ny post."
			},{
				type: "name",
				title: "Ta bort",
				content: "Klicka på den här knappen för att ta bort den valda posten från tabellen."
			},{
				type: "name",
				title: "Bläddra",
				content: "Klicka här för att söka efter en delad mapp."
			},{
				type: "name",
				title: "Ge gäst tillgång till nätverket",
				content: "Välj för att tillåta klienter på gäst nätverket åtkomst till delade mappar."
			},{
				type: "name",
				title: "Aktivera autentisering",
				content: "Välj för att kräva ett giltigt användarnamn och lösenord av användare för att få åtkomst till delade mappar."
			},{
				type: "name",
				title: "Aktivera skrivåtkomst",
				content: "Välj för att tillåta användare att göra ändringar i mapp innehållet."
			},{
				type: "name",
				title: "Aktivera mediedelning",
				content: "Välj för att aktivera mediedelning."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Skrivarservern",
			CONTENT: [{
				type: "name",
				title: "Skrivarservern",
				content: "Tryck på för att aktivera skrivarservern."
			},{
				type: "name",
				title: "Skrivarnamn",
				content: "Visar namnet på din skrivare som är ansluten till routern."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Föräldrakontroll",
			CONTENT: [{
				type: "name",
				title: "Föräldrakontroll",
				content: "Tryck På för att aktivera funktionen Föräldrakontroll. Funktionen är avaktiverad som standard."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Enheter under föräldrakontroll",
			CONTENT: [{
				type: "paragraph",
				content: "Visar listan över enheter under föräldrakontroll."
			},{
				type: "name",
				title: "Enhetens namn",
				content: "Visar namnet på alla anslutna klientenheter som just nu är under föräldrakontroll."
			},{
				type: "name",
				title: "MAC-adress",
				content: "Visar MAC-adressen för alla anslutna klientenheter som just nu är under föräldrakontroll."
			},{
				type: "name",
				title: "Internet-åtkomst tid",
				content: "Visar perioder av tidsbegränsning. Tidsschemat tar effekt baserat på routerns systemtid som kan ställas in med \"Systémové nástroje -> Nastavení času\"."
			},{
				type: "name",
				title: "Beskrivning",
				content: "Visar en kort beskrivning av den anslutna enheten. Det är en valfri inställning."
			},{
				type: "name",
				title: "Status",
				content: "Visar aktuell status (aktiverat eller inaktiverat) av Föräldrakontroll i motsvarande enhet."
			},{
				type: "name",
				title: "Ändra",
				content: "Visar alternativ för att ändra eller ta bort motsvarande enhet."
			},{
				type: "step",
				title: "Att begränsa möjligheterna för en ny klient enheten",
				content:[
					"1. Klicka på Lägg till.",
					"2. Klicka på Visa befintliga enheter och välj en ansluten enhet i listan Anslut enheter, eller ange enhetens namn och MAC-adress för att manuellt lägga till en enhet som inte är ansluten.",
					"3. Klicka på ikonen Internet Internettid för att ange en tidsperiod under vilken begränsningen gäller.",
					"4. Ange en kort beskrivning i fältet Beskrivning. (Tillval)",
					"5. Välj Aktivera.",
					"6. Klicka på OK."
				]
			},{
				type: "paragraph",
				content: "För att ändra eller ta bort en Föräldra styrning, klicka på ikonen Edit (redigera) för att redigera informationen eller Papperskorgen för att ta bort motsvarande post."
			},{
				type: "paragraph",
				content: "Att ta bort flera poster, välj alla poster och klicka på Ta bort ovanför tabellen."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Guest nätverk",
			CONTENT: [{
				type: "paragraph",
				content: "Med gästnätverk kan du installera ett separat nätverk med ett separat trådlöst nätverksnamn (SSID) och lösenord som gäster kan använda för att få åtkomst till det trådlösa nätverket."
			},{
				type: "name",
				title: "Tillåt att gäster kan se varandra",
				content: "Markera den här kryssrutan om du vill att de trådlösa enheterna på gästnätverket kan att se varandra."
			},{
				type: "name",
				title: "Ge gäster tillgång till mitt lokala nätverk",
				content: "Markera den här kryssrutan om du vill att de trådlösa enheterna på gästnätverket ska få tillgång till ditt lokala nätverks delningar och din skrivare."
			},{
				type: "name",
				title: "Aktivera Gäst nätverk",
				content: "Markera den här kryssrutan för att aktivera gästnätverkets funktioner."
			},{
				type: "name",
				title: "Namn på trådlöst nätverk (SSID)",
				content: "Använd standard gästens SSID eller skapa ett nytt namn (upp till 32 tecken)."
			},{
				type: "name",
				title: "Dölj SSID",
				content: "Markera den här kryssrutan om du vill dölja gäst SSID från Wi-Fi -nätverket."
			},{
				type: "name",
				title: "Lösenord",
				content: "Använd antingen lösenordet som genereras slumpmässigt, eller skapa ett lösenord mellan 8 och 63 ASCII-tecken eller mellan 8 och 64 hexadecimala tecken (0-9, a-f, A-F)."
			},{
				type:"paragraph",
				content:"Klicka på Spara för att spara alla dina inställningar."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"TP-Link molntjänst låter dig att fjärrövervaka nätverket i realtid, få åtkomst till och hantera dina TP-Link enheter från Internet när som helst och var som helst."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Kontoinformation",
			CONTENT:[{
				type:"paragraph",
				content:"Visar din TP-Link ID-information. Du kan redigera kontoinformationen genom att klicka på ikonen Edit (redigera)."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Information om enheten",
			CONTENT:[{
				type:"paragraph",
				content:"Visar enhetsinformation, inklusive moln-kontot som hanterar enheten."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Aktiverade (bundna) konton",
			CONTENT:[{
				type:"paragraph",
				content:"Denna tabell visar alla cloud konton som för närvarande är bundna till enheten."
			},{
				type:"step",
				title:"Bind ett användarkonto",
				content:["1. Klicka Bind.",
				"2. Ange den registrerade e-post som du vill binda.",
				"3. Klicka på Spara."]
			}]

		}

	};
})(jQuery);

