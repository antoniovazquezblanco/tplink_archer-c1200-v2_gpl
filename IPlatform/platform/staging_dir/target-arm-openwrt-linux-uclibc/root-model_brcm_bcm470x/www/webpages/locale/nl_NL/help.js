(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Toont relevante informatie over de Wide Area Network (Internet) verbinding."
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "MAC-adres",
				content: "Het unieke fysieke adres dat aan de Internet (WAN) aansluiting van de router toegewezen is."
			},{
				type: "name",
				title: "IP-adres",
				content: "Het IPv4-adres dat aan de Internet (WAN) aansluiting van de router toegewezen is. Wanneer het IP-adres als 0.0.0.0 wordt weergegeven, geeft dat aan dat er geen toegang tot het Internet is."
			},{
				type: "name",
				title: "Subnetmasker",
				content: "Deze parameter bepaalt het netwerkdeel en het hostdeel van een IP-adres."
			},{
				type: "name",
				title: "Standaard gateway",
				content: "Het IP-adres dat wordt gebruikt om de router met het netwerk te verbinden."
			},{
				type: "name",
				title: "Primaire DNS/Secundaire DNS",
				content: "Het Domain Name System (DNS) vertaalt host-namen en Internet domeinen naar IP-adressen. De informatie van deze DNS servers wordt toegewezen door de Internet Service Provider (ISP)."
			},{
				type: "name",
				title: "Type verbinding",
				content: "Het huidige type verbinding van de Internet (WAN) aansluiting."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "MAC-adres",
				content: "Het unieke fysieke adres dat aan de Internet (WAN) aansluiting van de router toegewezen is."
			},{
				type: "name",
				title: "IP-adres",
				content: "Het IPv6-adres dat aan de Internet (WAN) aansluiting van de router toegewezen is."
			},{
				type: "name",
				title: "Standaard gateway",
				content: "Het IP-adres dat wordt gebruikt om de router met het netwerk te verbinden."
			},{
				type: "name",
				title: "Primaire DNS/Secundaire DNS",
				content: "Het Domain Name System (DNS) vertaalt host-namen en Internet domeinen naar IP-adressen. De informatie van deze DNS servers wordt toegewezen door de Internet Service Provider (ISP)."
			},{
				type: "name",
				title: "Type verbinding",
				content: "Het huidige type verbinding van de Internet (WAN) aansluiting."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Draadloos",
			CONTENT: [{
				type: "paragraph",
				content: "Toont relevante informatie over het draadloze netwerk."
			},{
				type: "name",
				title: "Naam draadloos netwerk (SSID)",
				content: "De naam van het draadloze netwerk, ook SSID (Service Set Identifier) genoemd."
			},{
				type: "name",
				title: "Draadloze radio",
				content: "De huidige status (aan of uit) van het draadloze netwerk."
			},{
				type: "name",
				title: "Modus",
				content: "De huidige draadloos modus."
			},{
				type: "name",
				title: "Kanaal breedte",
				content: "De kanaal bandbreedte van het draadloze netwerk."
			},{
				type: "name",
				title: "Kanaal",
				content: "Het huidige draadloos kanaal en de bijbehorende frequentie (in GHz)."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Het MAC-adres van de draadloos netwerk radio van de router."
			},{
				type: "name",
				id: "status_wds",
				title: "WDS status",
				content: "De huidige status (in- of uitgeschakeld) van de WDS modus."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Toont informatie over de Ethernet (LAN) aansluitingen."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "MAC-adres",
				content: "Het unieke fysieke adres dat aan de Ethernet (LAN) aansluiting van de router toegewezen is."
			},{
				type: "name",
				title: "IP-adres",
				content: "Het IPv4-adres dat aan de Ethernet (LAN) aansluiting van de router toegewezen is."
			},{
				type: "name",
				title: "Subnetmasker",
				content: "Deze parameter bepaalt het netwerkdeel en het hostdeel van een IP-adres."
			},{
				type: "name",
				title: "DHCP",
				content: "Geeft aan of de ingebouwde DHCP server van de router actief is voor apparaten aan de LAN aansluitingen of niet."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "MAC-adres",
				content: "Het unieke fysieke adres dat aan de Ethernet (LAN) aansluiting van de router toegewezen is."
			},{
				type: "name",
				title: "IP-adres",
				content: "Het IPv6-adres dat aan de Ethernet (LAN) aansluiting van de router toegewezen is."
			},{
				type: "name",
				title: "Link-local adres",
				content: "Het IPv6 koppeling adres voor de LAN interface."
			},{
				type: "name",
				title: "Toegewezen type",
				content: "Het type IPv6 adres voor de LAN interface."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Gastnetwerk",
			CONTENT: [{
				type: "paragraph",
				content: "Toont informatie over het draadloze netwerk voor gasten."
			},{
				type: "name",
				title: "Naam draadloos netwerk (SSID)",
				content: "De naam van het draadloze netwerk (SSID) van uw Gasten netwerk."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Geeft aan of de naam van het draadloze netwerk (SSID) van het Gasten netwerk wordt weergegeven of verborgen."
			},{
				type: "name",
				title: "Draadloze radio",
				content: "De huidige status (aan of uit) van het Gasten netwerk."
			},{
				type: "name",
				title: "Gasten mogen elkaar zien",
				content: "Geeft aan of alle apparaten in het Gasten netwerk met elkaar mogen communiceren."
			}]
		},
		STATUS_USB: {
			TITLE: "USB-apparaten",
			CONTENT: [{
				type: "paragraph",
				content: "Toont informatie over de USB opslagapparaten en/of printers die momenteel op de USB-aansluitingen van de router aangesloten zijn."
			},{
				type: "name",
				title: "Printer",
				content: "De naam van de aangesloten printer."
			},{
				type: "name",
				title: "USB-schijf",
				content: "De naam van de USB-schijf die met de router verbonden is."
			},{
				type: "name",
				title: "Totaal",
				content: "De totale opslagcapaciteit van het verbonden USB-opslagapparaat."
			},{
				type: "name",
				title: "Beschikbaar",
				content: "De beschikbare opslagcapaciteit van het verbonden USB-opslagapparaat."
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Prestaties",
			CONTENT: [{
				type: "paragraph",
				content: "Toont de huidige prestaties van de router."
			},{
				type: "name",
				title: "CPU belasting",
				content: "Het huidige CPU-gebruik."
			},{
				type: "name",
				title: "Geheugengebruik",
				content: "Het huidige geheugengebruik."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Bekabelde clients",
			CONTENT: [{
				type: "paragraph",
				content: "Toont informatie over alle apparaten die momenteel via een kabel met het netwerk verbonden zijn."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Draadloze clients",
			CONTENT: [{
				type: "paragraph",
				content: "Toont informatie over alle draadloze apparaten die momenteel met het netwerk verbonden zijn."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Type Internetverbinding: Statisch IP"
			},{
				type: "paragraph",
				content: "Selecteer dit type als u een specifiek (vast) IP-adres, subnetmasker, gateway en DNS parameters van de ISP heeft ontvangen."
			},{
				type: "name",
				title: "IP-adres/Subnetmasker/Standaard gateway/Primaire DNS/Secundaire DNS",
				content: "Voer hier de gegevens in die u van uw ISP hebt ontvangen."
			},{
				type: "name",
				title: "MTU grootte",
				content: "De standaard en typische MTU (Maximum Transmission Unit) grootte voor de meeste Ethernet netwerken is 1500 bytes. Het wordt afgeraden de standaard MTU grootte te wijzigen, tenzij vereist door de ISP."
			},{
				type: "title",
				title: "Type Internetverbinding: Dynamisch IP"
			},{
				type: "paragraph",
				content: "Selecteer dit type als u een DHCP server verbinding van uw ISP hebt ontvangen."
			},{
				type: "name",
				title: "IP-adres/Subnetmasker/Standaard gateway/Primaire DNS/Secundaire DNS",
				content: "Deze parameters worden automatisch toegewezen door de DHCP server van uw ISP."
			},{
				type: "name",
				title: "Vernieuwen",
				content: "Klik op deze knop om nieuwe IP parameters van de DHCP server te verkrijgen."
			},{
				type: "name",
				title: "Vrijgeven",
				content: "Klik op deze knop om alle IP-adressen die door de DHCP server toegewezen zijn vrij te geven."
			},{
				type: "name",
				title: "Gebruik de volgende DNS-adressen",
				content: "Als de ISP een of twee DNS-adressen aanlevert, selecteert u dit vakje en voert u de Primaire DNS en Secundaire DNS adressen in de desbetreffende velden in; anders worden de DNS-adressen dynamisch door de ISP toegewezen."
			},{
				type: "name",
				title: "MTU grootte",
				content: "De standaard en typische MTU (Maximum Transmission Unit) grootte voor de meeste Ethernet netwerken is 1500 bytes. Het wordt afgeraden de standaard MTU grootte te wijzigen, tenzij vereist door de ISP."
			},{
				type: "name",
				title: "Host naam",
				content: "Voer een waarde in dit veld in om de host naam van de router op te geven."
			},{
				type: "name",
				title: "Verkrijg IP m.b.v. Unicast DHCP",
				content: "Selecteer dit vakje als de DHCP server van uw ISP geen broadcast applicaties ondersteunt en u het IP-adres niet dynamisch kunt verkrijgen."
			},{
				type: "title",
				title: "Type Internetverbinding: PPPoE"
			},{
				type: "paragraph",
				content: "Selecteer dit type wanneer u een DSL (Digital Subscriber Line) service gebruikt en van uw ISP een gebruikersnaam en wachtwoord heeft ontvangen."
			},{
				type: "name",
				title: "Gebruikersnaam/Wachtwoord",
				content: "Voer de gebruikersnaam en het wachtwoord in die u van uw ISP hebt ontvangen. In deze velden wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "name",
				title: "IP-adres/Primaire DNS/Secundaire DNS",
				content: "Deze parameters worden automatisch toegewezen door de DHCP server van uw ISP."
			},{
				type: "name",
				title: "Secundaire verbinding (Geen, Dynamisch IP, Statisch IP)",
				children: [{
					type: "name",
					title: "Geen",
					content: "Selecteer deze optie als er geen secundaire verbinding wordt geleverd."
				},{
					type: "name",
					title: "Dynamisch IP",
					content: "Selecteer of het IP-adres en Subnetmasker automatisch door de ISP worden toegewezen.",
					children: [{
						type: "name",
						title: "Vernieuwen",
						content: "Klik op deze knop om de IP parameters van uw ISP te vernieuwen."
					},{
						type: "name",
						title: "Vrijgeven",
						content: "Klik op deze knop om de toegewezen IP parameters vrij te geven."
					}]
				},{
					type: "name",
					title: "Statisch IP",
					content: "Selecteer of het IP-adres en subnetmasker door de ISP zijn aangeleverd en voer deze gegevens in de desbetreffende velden in."
				}]
			},{
				type: "name",
				title: "MTU grootte",
				content: "De typische MTU (Maximum Transmission Unit) grootte voor Ethernet netwerken is 1480 bytes.",
				children: [{
					type: "note",
					title: "Opmerking",
					content: "In enkele gevallen kan uw ISP u vragen de MTU grootte aan te passen t.b.v. betere netwerk prestaties. U kunt deze waarde beter niet veranderen, tenzij dat absoluut noodzakelijk is."
				}]
			},{
				type: "name",
				title: "Service naam/Access Concentrator naam",
				content: "Standaard worden de velden Service naam en Access Concentrator (AC) naam blanco gelaten. Deze velden moeten alleen worden geconfigureerd als de ISP dat vereist."
			},{
				type: "name",
				title: "Online interval detecteren",
				content: "Voer een tijdinterval tussen 0 en 120 (seconden) in waarmee de router Access Concentrator online met elke interval detecteert. De standaardwaarde is 10."
			},{
				type: "name",
				title: "IP-adres",
				content: "Als uw ISP een specifiek (vast) IP-adres aanlevert, selecteert u Gebruik het volgende IP-adres en voert u het IP-adres in het veld in; anders selecteert u Verkrijg dynamisch van ISP om een door een server toegewezen IP-adres automatisch te verkrijgen."
			},{
				type: "name",
				title: "DNS-adres/Primaire DNS/Secundaire DNS",
				content: "Als uw ISP specifieke (vaste) DNS IP-adressen heeft aangeleverd, selecteert u Gebruik de volgende DNS-adressen en voert u de adressen in respectievelijk de velden Primaire DNS en Secundaire DNS in; anders selecteert u Verkrijg dynamisch van ISP om door een server toegewezen IP-adressen automatisch te verkrijgen."
			},{
				type: "name",
				title: "Verbindingsmodus",
				content: "Selecteer een geschikte verbindingsmodus, die bepaalt hoe u met het Internet verbinding maakt.",
				children: [{
					type: "name",
					title: "Auto",
					content: "In deze modus wordt de Internet verbinding automatisch opnieuw tot stand gebracht wanneer hij verbroken is."
				},{
					type: "name",
					title: "Op aanvraag",
					content: "In deze modus wordt de Internet verbinding automatisch na een opgegeven tijd van inactiviteit (Max. tijd inactief) verbroken. De verbinding wordt opnieuw tot stand gebracht zodra u toegang tot het Internet probeert te krijgen."
				},{
					type: "name",
					title: "Tijdbasis",
					content: "In deze modus wordt de Internet verbinding alleen binnen een bepaalde periode tot stand gebracht. Als deze optie geselecteerd is, voert u de begin- en eindtijd in HH:MM formaat in."
				},{
					type: "name",
					title: "Handmatig",
					content: "In deze modus wordt de Internet verbinding handmatig tot stand gebracht of verbroken door op de knop Verbinden of Verbreken te klikken. In deze modus wordt de Max. tijd inactief functie ook ondersteund. Voer een maximum tijd (in minuten) in dat het Internet verbinding inactief kan zijn voordat hij wordt verbroken, in het veld Max. tijd inactief. De standaard waarde is 15 minuten. Als u wilt dat de Internet verbinding altijd actief blijft, voert u 0 (nul) in."
				},{
					type: "note",
					title: "Opmerking",
					content: "De Tijdbasis verbindingsmodus wordt pas van kracht als de Systeemtijd op de pagina Geavanceerd → Systeemfuncties → Tijdinstellingen geconfigureerd is."
				}]
			},{
				type: "title",
				title: "Type Internetverbinding: BigPond kabel"
			},{
				type: "paragraph",
				content: "Selecteer dit type als uw ISP een Bigpond kabelverbinding aanlevert."
			},{
				type: "name",
				title: "Gebruikersnaam/Wachtwoord",
				content: "Voer de gebruikersnaam en het wachtwoord in die u van uw ISP hebt ontvangen. In deze velden wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "name",
				title: "Ver. Server",
				content: "Voer het IP-adres of de host naam van de verificatie server in."
			},{
				type: "name",
				title: "Ver. Domein",
				content: "Voer het domeinnaam achtervoegsel (op basis van uw locatie) van de server in. Bijvoorbeeld nsw.bigpond.net.au voor NSW/ACT, vic.bigpond.net.au voor VIC/TAS/WA/SA/NT, of qld.bigpond.net.au voor QLD."
			},{
				type: "name",
				title: "MTU grootte",
				content: "De standaard en typische MTU (Maximum Transmission Unit) grootte voor de meeste Ethernet netwerken is 1500 bytes. Het wordt afgeraden de standaard MTU grootte te wijzigen, tenzij vereist door de ISP."
			},{
				type: "name",
				title: "Verbindingsmodus",
				content: "Selecteer een geschikte verbindingsmodus, die bepaalt hoe u met het Internet verbinding maakt.",
				children: [{
					type: "name",
					title: "Auto",
					content: "In deze modus wordt de Internet verbinding automatisch opnieuw tot stand gebracht wanneer hij verbroken is."
				},{
					type: "name",
					title: "Op aanvraag",
					content: "In deze modus wordt de Internet verbinding automatisch na een opgegeven tijd van inactiviteit (Max. tijd inactief) verbroken. De verbinding wordt opnieuw tot stand gebracht zodra u toegang tot het Internet probeert te krijgen."
				},{
					type: "name",
					title: "Handmatig",
					content: "In deze modus wordt de Internet verbinding handmatig tot stand gebracht of verbroken door op de knop Verbinden of Verbreken te klikken. In deze modus wordt de Max. tijd inactief functie ook ondersteund. Voer een maximum tijd (in minuten) in dat het Internet verbinding inactief kan zijn voordat hij wordt verbroken, in het veld Max. tijd inactief. De standaard waarde is 15 minuten. Als u wilt dat de Internet verbinding altijd actief blijft, voert u 0 (nul) in."
				}]
			},{
				type: "title",
				title: "Type Internetverbinding: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Selecteer dit type als u verbinding maakt met een L2TP/PPTP VPN server en een gebruikersnaam, wachtwoord en IP-adres/domeinnaam van de server van de ISP heeft ontvangen."
			},{
				type: "name",
				title: "Gebruikersnaam/Wachtwoord",
				content: "Voer de gebruikersnaam en het wachtwoord in die u van uw ISP hebt ontvangen. In deze velden wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "name",
				title: "IP-adres/Primaire DNS/Secundaire DNS",
				content: "Deze parameters worden automatisch toegewezen door de DHCP server van uw ISP."
			},{
				type: "name",
				title: "Secundaire verbinding (Dynamisch IP of Statisch IP)",
				children: [{
					type: "name",
					title: "Dynamisch IP",
					content: "Selecteer of het IP-adres en Subnetmasker automatisch door de ISP worden toegewezen."
				},{
					type: "name",
					title: "Statisch IP",
					content: "Selecteer of het IP-adres, Subnetmasker, Gateway en DNS-adressen door de ISP worden aangeleverd en voer deze gegevens in de desbetreffende velden in."
				}]
			},{
				type: "name",
				title: "VPN Server IP/Domeinnaam",
				content: "Voer het IP-adres of de domeinnaam van de VPN server aangeleverd door uw ISP in."
			},{
				type: "name",
				title: "MTU grootte",
				content: "De standaard en typische MTU (Maximum Transmission Unit) grootte voor de meeste Ethernet netwerken is 1460 bytes voor L2TP of 1420 bytes voor PPTP. Het wordt afgeraden de standaard MTU grootte te wijzigen, tenzij vereist door de ISP."
			},{
				type: "name",
				title: "Verbindingsmodus",
				content: "Selecteer een geschikte verbindingsmodus, die bepaalt hoe u met het Internet verbinding maakt.",
				children: [{
					type: "name",
					title: "Auto",
					content: "In deze modus wordt de Internet verbinding automatisch opnieuw tot stand gebracht wanneer hij verbroken is."
				},{
					type: "name",
					title: "Op aanvraag",
					content: "In deze modus wordt de Internet verbinding automatisch na een opgegeven tijd van inactiviteit (Max. tijd inactief) verbroken. De verbinding wordt opnieuw tot stand gebracht zodra u toegang tot het Internet probeert te krijgen."
				},{
					type: "name",
				title: "Handmatig",
				content: "In deze modus wordt de Internet verbinding handmatig tot stand gebracht of verbroken door op de knop Verbinden of Verbreken te klikken. In deze modus wordt de Max. tijd inactief functie ook ondersteund. Voer een maximum tijd (in minuten) in dat het Internet verbinding inactief kan zijn voordat hij wordt verbroken, in het veld Max. tijd inactief. De standaard waarde is 15 minuten. Als u wilt dat de Internet verbinding altijd actief blijft, voert u 0 (nul) in."
				}]
			},{
				type:"paragraph",
				content:"Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "MAC klonen",
			CONTENT: [{
				type: "name",
				title: "Standaard MAC-adres gebruiken",
				content: "Het standaard MAC-adres van de router NIET wijzigen, voor het geval de ISP het toegewezen IP-adres niet aan het MAC-adres bindt."
			},{
				type: "name",
				title: "MAC-adres van huidige computer gebruiken",
				content: "Selecteer deze optie om het huidige MAC-adres van de computer die met de router verbonden is te kopiëren, voor het geval dat de ISP het toegewezen IP-adres aan het MAC-adres van de computer bindt."
			},{
				type: "name",
				title: "Aangepast MAC-adres gebruiken",
				content: "Voer het MAC-adres handmatig in, voor het geval dat de ISP het toegewezen IP-adres aan het opgegeven MAC-adres bindt."
			},{
				type:"paragraph",
				content:"Klik op Opslaan om alle instellingen op te slaan."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "MAC-adres",
				content: "Het unieke fysieke adres dat aan de Ethernet (LAN) aansluiting van de router toegewezen is."
			},{
				type: "name",
				title: "IP-adres",
				content: "Toont het standaard IP-adres van de router, dat wordt gebruikt om de bij de webbeheerpagina van de router in te loggen en dat kan worden opgeheven."
			},{
				type: "name",
				title: "Subnetmasker",
				content: "Selecteer een toegewezen identificatie gebruikt door de LAN-aansluiting voor de routering van intern en extern verkeer in de keuzelijst, of voer een nieuw subnetmasker in het decimale formaat met punten in."
			},{
				type: "note",
				title: "Opmerking",
				content: "Als het nieuwe LAN IP-adres zich niet in hetzelfde subnet als het oude bevindt, wordt de IP-adres pool op de DHCP server automatisch geconfigureerd; bij Virtual Server en DMZ Host gebeurt dat pas wanneer ze opnieuw zijn geconfigureerd."
			},{
				type:"paragraph",
				content:"Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		IPTV:{
			TITLE: "Instellingen",
			CONTENT: [{
					type: "name",
					title: "IGMP proxy",
					content: "Selecteer de IGMP (Internet Group Management Protocol) proxy versie, V2 of V3, zoals opgegeven door uw ISP."
				},{
					type: "name",
					title: "IGMP versie",
					content: "Selecteer de IGMP proxy versie, ofwel V2 of V3, afhankelijk van uw ISP."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Selecteer deze optie om de IPTV functie in te schakelen."
				},
				{
					type: "name",
					title: "Modus",
					content: "Selecteer de juiste modus afhankelijk van uw ISP.",
					children: [
						{
							type: "name",
							title: "Brug",
							content:"Als uw ISP niet vermeld wordt en er geen andere parameters vereist zijn, kunt u eenvoudig deze modus selecteren en de LAN-aansluiting functies van de router configureren.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Wijs de functie van uw LAN-aansluitingen toe als Internet leverancier of IPTV leverancier."
							}]
						},
						{
							type: "name",
							title: "Rusland",
							content: "Selecteer dit als uw provider Russisch is en de benodigde parameters vooraf zijn bepaald, waaronder VLAN-ID's voor internet/VOIP/televisie, prioriteit en LAN-poortfuncties (1/2/3/4).",
							children: [{
								type: "name",
								title: "IPTV Multicast VLAN ID/Prioriteit",
								content: "U kunt de IPTV multicast functie desgewenst inschakelen en VLAN ID en Priority voor uw ISP configureren."
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Selecteer deze optie als uw ISP ExStream uit Singapore is en de vereiste parameters vooraf ingesteld zijn, inclusief Internet/IPTV VLAN ID's en Prioriteit, alsmede eigenschappen van de LAN (1/2/3/4) aansluitingen."
						},
						{
							type: "name",
							title: "Maleisië-Unifi",
							content: "Selecteer deze optie als uw ISP Unifi uit Maleisië is en de vereiste parameters vooraf ingesteld zijn, inclusief Internet/IPTV VLAN ID's en Prioriteit, alsmede eigenschappen van de LAN (1/2/3/4) aansluitingen."
						},
						{
							type: "name",
							title: "Maleisië-Maxis",
							content: "Selecteer deze optie als uw ISP Maxis uit Maleisië is en de vereiste parameters vooraf ingesteld zijn, inclusief Internet/IP-telefoon/IPTV VLAN ID's en Prioriteit, alsmede eigenschappen van de LAN (1/2/3/4) aansluitingen."
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Selecteer als uw ISP Portugal-MEO is en de benodigde parameters vooraf bepaald zijn, inclusief Internet VLAN ID,Prioriteit en LAN (1/2/3/4) poort functies."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Selecteer als uw ISP Portugal-Vodafone is en de benodigde parameters vooraf bepaald zijn, inclusief Internet/IP-telefonie/IPTV VLAN ID's en Prioriteit. U kunt de LAN poorten opnieuw toewijzen aan hun respectievelijke functies indien nodig (Internet aanbieder/IPTV aanbieder/IP-telefonie aanbieder/Internet-IPTV aanbieder)."
						},
						{
							type: "name",
							title: "Aangepast",
							content: "Selecteer deze optie als uw ISP niet vermeld wordt, maar wel de vereiste parameters aanlevert, inclusief Internet/IP-telefoon/IPTV VLAN ID's en Prioriteit, alsmede eigenschappen van de LAN (1/2/3/4) aansluitingen.",
							children: [{
								type: "name",
								title: "Internet/IP-Phone/IPTV VLAN ID/Prioriteit",
								content: "Configureer de VLAN ID's en prioriteiten zoals aangegeven door uw ISP."
							},{
								type: "name",
								title: "802.11Q Tag",
								content: "Selecteer of de Internet pakketten met 802.11Q moeten worden getagd."
							},{
								type: "name",
								title: "IPTV Multicast VLAN ID/Prioriteit",
								content: "U kunt de IPTV multicast functie desgewenst inschakelen en VLAN ID en Priority voor uw ISP configureren."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Wijs de functie van uw LAN-aansluiting toe als Internet leverancier, IP-telefoon leverancier, of IPTV leverancier."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Klik op Opslaan om alle instellingen op te slaan."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Instellingen",
			CONTENT: [{
				type: "name",
				title: "DHCP server",
				content: "Standaard is de DHCP (Dynamic Host Configuration Protocol) server ingeschakeld; deze wijst dynamisch TCP/IP parameters aan client apparaten in de IP-adres pool toe. De DHCP server NIET uitschakelen, tenzij u een andere DHCP server heeft u of u de TCP/IP parameters handmatig aan elk client apparaat in uw netwerk wilt toewijzen."
			},{
				type: "name",
				title: "IP-adres pool",
				content: "Voer de reeks IP-adressen in die aan de clients kunnen worden geleased."
			},{
				type: "name",
				title: "Adres lease-tijd",
				content: "Voer de tijdsduur dat een IP-adres aan de client wordt geleased tussen 1 en 2880 minuten in. De standaardwaarde is 120 minuten."
			},{
				type: "name",
				title: "Standaard gateway",
				content: "Voer het LAN IP-adres in. (Optioneel)"
			},{
				type: "name",
				title: "Primaire DNS/Secundaire DNS",
				content: "Voer deze parameters in zoals aangeleverd door uw ISP. (Optioneel)"
			},{
				type:"paragraph",
				content:"Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Adres reservering",
			CONTENT: [{
				type: "paragraph",
				content: "U kunt handmatig een IP-adres reserveren voor een client die met de router verbonden is. Als het gereserveerd is, wordt dat IP-adres door de DHCP server alleen aan die client toegewezen."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Toont het MAC-adres van de client met het door DHCP gereserveerde IP-adres."
			},{
				type: "name",
				title: "Gereserveerd IP-adres",
				content: "Toont het gereserveerde IP-adres van de client."
			},{
				type: "name",
				title: "Beschrijving",
				content: "Toont een beschrijving van het client apparaat."
			},{
				type: "name",
				title: "Status",
				content: "De huidige status (in- of uitgeschakeld) van het client apparaat."
			},{
				type: "name",
				title: "Wijzigen",
				content: "Toont opties voor het Wijzigen of Verwijderen van de desbetreffende client."
			},{
				type: "step",
				title: "Een IP-adres reserveren",
				content:[
					"1. Klik op Toevoegen.",
					"2. Voer het MAC-adres van de gewenste client in.",
					"3. Voer het IP-adres in dat u voor de client wilt reserveren.",
					"4. Voer een beschrijving voor de client in.",
					"5. Selecteer Inschakelen.",
					"6. Klik op OK."
				]
			},{
				type: "step",
				title: "Een bestaande client wijzigen of verwijderen",
				content: "Klik in de tabel op het symbool Wijzigen of Verwijderen voor de client die u wilt wijzigen of verwijderen."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "DHCP Client Lijst",
			CONTENT: [{
				type: "name",
				title: "Cliënt nummer",
				content: "Toont het nummer van de bijbehorende DHCP client."
			},{
				type: "name",
				title: "Naam client",
				content: "Toont de naam van de DHCP client."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Toont het MAC-adres."
			},{
				type: "name",
				title: "Toegewezen IP-adres",
				content: "Toont het aan de client door de DHCP server toegewezen IP-adres."
			},{
				type: "name",
				title: "Lease-tijd",
				content: "Toont de resterende tijd voor het IP-adres dat aan de client is geleased."
			},{
				type: "name",
				title: "Vernieuwen",
				content: "Klik hierop om de DHCP Client List te vernieuwen."
			}]
		},

		DDNS: {
			TITLE: "Dynamisch DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamisch DNS (Domain Name System) staat u toe om een vaste host en domeinnaam toe te wijzen aan een dynamisch internet IP-adres. Het is handig wanneer u uw eigen website, FTP server of andere servers achter de router host. Om te beginnen dient u zich in te schrijven bij een Dynamisch DNS service provider zoals www.dyndns.com. Vervolgens, voer uw registratie informatie in."
			},{
				type: "step",
				title: "Een dynamisch DNS instellen",
				content: [
					"1. Selecteer uw DDNS service provider.",
					"2. Voer de Gebruikersnaam en het Wachtwoord van uw DDNS account in.",
					"3. Voer de domeinnaam in welke u geregistreerd heeft met de Dynamische DNS service provider.",
					"4. Selecteer de tijd interval in welke de Dynamische DNS update verzoeken zal versturen.",
					"5. Als uw service provider NO-IP is, selecteer dan WAN IP Binding om u ervan te verzekeren dat de domeinnaam is gebonden aan het WAN IP adres van deze router.",
					"6. Klik op Login en opslaan."
				]
			},{
				type: "note",
				title:"Opmerking",
				content: "Als u een nieuw DDNS account wilt gebruiken, gelieve eerst uitloggen en daarna inloggen met het nieuwe account."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "Dynamisch DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamisch DNS (Domain Name System) staat u toe om een vaste host en domeinnaam toe te wijzen aan een dynamisch internet IP-adres. Het is handig wanneer u uw eigen website, FTP server of andere servers achter de router host. Om te beginnen dient u zich in te schrijven bij een Dynamisch DNS service provider zoals www.dyndns.com. Vervolgens, voer uw registratie informatie in."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Lijst van domeinnamen",
			CONTENT: [{
				type: "paragraph",
				content: "Deze tabel geeft de dynamische DNS domein namen weer die geregistreerd zijn op uw TP-Link ID."
			},{
				type:"step",
				title: "Een nieuwe domein naam registreren.",
				content: [
					"1. Klik Registreer.",
					"2. Voer de domeinnaam in.",
					"3. Klik op opslaan."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Statische routering",
			CONTENT: [{
				type: "paragraph",
				content: "Statische routering wordt gebruikt om vooraf een vaste route voor de netwerk informatie pakketten in te stellen, om een specifieke host of netwerk te bereiken."
			},{
				type: "step",
				title: "Een statische routering instellen",
				content: [
					"1. Klik op Toevoegen.",
					"2. Bestemming netwerk - Voer een IP-adres in decimaal formaat met punten in om de statische route voor dit item toe te wijzen.",
					"3. Subnetmasker - Voer een subnetmasker in decimaal formaat met punten in om het netwerkdeel en hostdeel van het IP-adres te bepalen.",
					"4. Standaard gateway - Voer een gateway IP-adres in decimaal formaat met punten in om de router met het netwerk of de host te verbinden.",
					"5. Interface - Selecteer LAN of WAN om het type van het Bestemming netwerk te definiëren.",
					"6. Beschrijving - Voer een beknopte beschrijving van dit item in.",
					"7. Selecteer Inschakelen.",
					"8. Klik op OK."
				]
			},{
				type: "step",
				title: "Een bestaand item wijzigen of verwijderen",
				content: "In de tabel klikt u op het Wijzigen of Verwijderen symbool bij het item dat u wilt wijzigen of verwijderen."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Systeem routering tabel",
			CONTENT: [{
				type: "paragraph",
				content: "De Systeem routering tabel toont alle geldige route items die momenteel in gebruik zijn."
			},{
				type: "paragraph",
				content: "Klik op Vernieuwen om de routering tabel te verversen."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Instellingen",
			CONTENT: [{
				type: "name",
				title: "Regio",
				content: "Selecteer uw regio in de keuzelijst. Als uw land of regio niet vermeld wordt, is het gebruik van de draadloos radio op uw locatie mogelijk beperkt."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Draadloos 2,4 GHz",
			CONTENT: [{
				type: "name",
				title: "Draadloze radio inschakelen",
				content: "Selecteer dit keuzevakje om de 2,4 GHz draadloze radio in te schakelen."
			},{
				type: "name",
				title: "Naam draadloos netwerk (SSID)",
				content: "U kunt de standaard naam van het netwerk (SSID) laten staan, of een nieuwe naam invoeren (max. 32 tekens). In dit veld wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Selecteer deze keuzevakje als u de naam van het 2,4 GHz netwerk (SSID) in de lijst van Wi-Fi netwerken wilt verbergen."
			},{
				type: "name",
				title: "Beveiliging",
				content: "Selecteer een van de volgende opties voor de beveiliging:",
				children: [{
					type: "name",
					title: "Geen beveiliging",
					content: "Selecteer deze optie om de draadloze beveiliging uit te schakelen. Het wordt met sterk aangeraden de draadloze beveiliging in te schakelen, om uw draadloze netwerk tegen toegang door onbevoegden te beschermen."
				},{
					type: "name",
					title: "WPA/WPA2-Persoonlijk",
					content: "Selecteer deze optie om de standaard verificatiemethode op basis van een Pre-shared Key (PSK) , ook passphrase genoemd, in te schakelen. Indien geselecteerd, configureert u het volgende.",
					children: [{
						type: "name",
						title: "Versie",
						content: "Selecteer een beveiliging versie voor uw draadloze netwerk.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Deze optie ondersteunt meerdere implementaties van de WPA (Wi-Fi Protected Access) standaard, zoals WPA en WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Deze optie ondersteunt alleen de TKIP versleuteling, die een goed niveau van beveiliging biedt."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Deze optie ondersteunt de AES versleuteling, die een beter niveau van beveiliging dan WPA-PSK biedt en aanbevolen wordt."
						}]
					},{
						type: "name",
						title: "Versleuteling",
						content: "Selecteer een type versleuteling: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), of Auto (voor zowel TKIP als AES). Het wordt NIET aanbevolen de TKIP versleuteling te gebruiken als de router in 802.11n modus werkt, omdat TKIP niet wordt ondersteund in de 802.11n specificatie. Als TKIP toch wordt geselecteerd, wordt de WPS functie uitgeschakeld."
					},{
						type: "name",
						title: "Wachtwoord",
						content: "Voer in deze veld een draadloos wachtwoord van 8 tot 63 ASCII tekens in, of van 8 tot 64 hexadecimale tekens."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Enterprise",
					content: "Selecteer deze optie om de meer geavanceerde verificatiemethode m.b.v. een RADIUS (Remote Authentication Dial In User Service) server in te schakelen. Indien geselecteerd, wordt de WPS functie uitgeschakeld.",
					children: [{
						type: "name",
						title: "Versie",
						content: "Selecteer een beveiliging versie voor uw draadloze netwerk.",
						children:[{
							type: "name",
							title: "Auto",
							content: "Deze optie ondersteunt meerdere implementaties van de WPA (Wi-Fi Protected Access) standaard, zoals WPA en WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Deze optie ondersteunt alleen de TKIP versleuteling, die een goed niveau van beveiliging biedt."
						},{
							type: "name",
							title: "WPA2",
							content: "Deze optie ondersteunt de AES versleuteling, die een beter niveau van beveiliging dan WPA-PSK biedt en aanbevolen wordt."
						}]
					},{
						type: "name",
						title: "Versleuteling",
						content: "Selecteer een type versleuteling: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), of Auto (voor zowel TKIP als AES). Het wordt NIET aanbevolen de TKIP versleuteling te gebruiken als de router in 802.11n modus werkt, omdat TKIP niet wordt ondersteund in de 802.11n specificatie. Als TKIP toch wordt geselecteerd, wordt de WPS functie uitgeschakeld."
					},{
						type: "name",
						title: "RADIUS server IP",
						content: "Voer het IP-adres van de RADIUS server in."
					},{
						type: "name",
						title: "RADIUS poort",
						content: "Voer het poortnummer van de RADIUS server in."
					},{
						type: "name",
						title: "RADIUS wachtwoord",
						content: "Voer het gedeelde wachtwoord voor de RADIUS server in."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Selecteer deze optie om de eenvoudige verificatiemethode in te schakelen als een of meer van uw client apparaten alleen toegang tot draadloos heeft via WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Type",
						content: "Selecteer een type verificatie voor uw draadloze netwerk. De standaardwaarde is Auto, waarbij automatisch Open systeem of Gedeelde sleutel wordt gekozen, op basis van de capaciteiten en toegangsvraag van de draadloos client."
					},{
						type: "name",
						title: "WEP sleutel formaat",
						content: "Gebruik het ASCII formaat, of selecteer Hexadecimaal. Het ASCII formaat is een combinatie van letters en cijfers. Het hexadecimale formaat is een combinatie van cijfers (0-9) en letters (A-F, a-f)."
					},{
						type: "name",
						title: "Type sleutel",
						content: "Selecteer een WEP sleutel lengte.",
						children: [{
							type: "name",
							title: "64-bits",
							content: "Biedt de mogelijkheid 10 hexadecimale tekens (0-9, A-F, a-f) of 5 ASCII tekens in het veld WEP waarde in te voeren."
						},{
							type: "name",
							title: "128-bits",
							content: "Biedt de mogelijkheid 26 hexadecimale tekens (0-9, A-F, a-f) of 13 ASCII tekens in het veld WEP waarde in te voeren."
						}]
					},{
						type: "name",
						title: "Sleutel waarde",
						content: "Voer de WEP sleutel in het desbetreffende veld in."
					}]
				}]
			},{
				type: "name",
				title: "Modus",
				content: "Selecteer een gemengde transmissiemodus."
			},{
				type: "name",
				title: "Kanaal breedte",
				content: "Selecteer een kanaal breedte (bandbreedte) voor het 2,4 GHz draadloze netwerk."
			},{
				type: "name",
				title: "Kanaal",
				content: "Selecteer een werkkanaal voor het 2,4 GHz draadloze netwerk. Aanbevolen wordt het kanaal op Auto te laten staan als u geen problemen met onderbroken draadloze verbindingen ondervindt."
			},{
				type: "name",
				title: "Zendvermogen",
				content: "Selecteer Hoog, Middel, of Laag om het zendvermogen voor data in te stellen. De standaard en aanbevolen instelling is Hoog."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Draadloos 5 GHz",
			CONTENT: [{
				type: "name",
				title: "Draadloze radio inschakelen",
				content: "Selecteer dit keuzevakje om de 5 GHz draadloze radio in te schakelen."
			},{
				type: "name",
				title: "Naam draadloos netwerk (SSID)",
				content: "U kunt de standaard naam van het netwerk (SSID) laten staan, of een nieuwe naam invoeren (max. 32 tekens). In dit veld wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Selecteer dit keuzevakje als u de naam van het 5 GHz netwerk (SSID) in de lijst van Wi-Fi netwerken wilt verbergen."
			},{
				type: "name",
				title: "Beveiliging",
				content: "Selecteer een van de volgende opties voor de beveiliging:",
				children: [{
					type: "name",
					title: "Geen beveiliging",
					content: "Selecteer deze optie om de draadloze beveiliging uit te schakelen. Het wordt met sterk aangeraden de draadloze beveiliging in te schakelen, om uw draadloze netwerk tegen toegang door onbevoegden te beschermen."
				},{
					type: "name",
					title: "WPA/WPA2-Persoonlijk",
					content: "Selecteer deze optie om de standaard verificatiemethode op basis van een Pre-shared Key (PSK) , ook passphrase genoemd, in te schakelen. Indien geselecteerd, configureert u het volgende.",
					children: [{
						type: "name",
						title: "Versie",
						content: "Selecteer een beveiliging versie voor uw draadloze netwerk.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Deze optie ondersteunt meerdere implementaties van de WPA (Wi-Fi Protected Access) standaard, zoals WPA en WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Deze optie ondersteunt alleen de TKIP versleuteling, die een goed niveau van beveiliging biedt."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Deze optie ondersteunt de AES versleuteling, die een beter niveau van beveiliging dan WPA-PSK biedt en aanbevolen wordt."
						}]
					},{
						type: "name",
						title: "Versleuteling",
						content: "Selecteer een type versleuteling: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), of Auto (voor zowel TKIP als AES). Het wordt NIET aanbevolen de TKIP versleuteling te gebruiken als de router in 802.11n modus werkt, omdat TKIP niet wordt ondersteund in de 802.11n specificatie. Als TKIP toch wordt geselecteerd, wordt de WPS functie uitgeschakeld."
					},{
						type: "name",
						title: "Wachtwoord",
						content: "Voer in deze veld een draadloos wachtwoord van 8 tot 63 ASCII tekens in, of van 8 tot 64 hexadecimale tekens."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Enterprise",
					content: "Selecteer deze optie om de meer geavanceerde verificatiemethode m.b.v. een RADIUS (Remote Authentication Dial In User Service) server in te schakelen. Indien geselecteerd, wordt de WPS functie uitgeschakeld.",
					children: [{
						type: "name",
						title: "Versie",
						content: "Selecteer een beveiliging versie voor uw draadloze netwerk.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Deze optie ondersteunt meerdere implementaties van de WPA (Wi-Fi Protected Access) standaard, zoals WPA en WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Deze optie ondersteunt alleen de TKIP versleuteling, die een goed niveau van beveiliging biedt."
						},{
							type: "name",
							title: "WPA2",
							content: "Deze optie ondersteunt de AES versleuteling, die een beter niveau van beveiliging dan WPA-PSK biedt en aanbevolen wordt."
						}]
					},{
						type: "name",
						title: "Versleuteling",
						content: "Selecteer een type versleuteling: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), of Auto (voor zowel TKIP als AES). Het wordt NIET aanbevolen de TKIP versleuteling te gebruiken als de router in 802.11n modus werkt, omdat TKIP niet wordt ondersteund in de 802.11n specificatie. Als TKIP toch wordt geselecteerd, wordt de WPS functie uitgeschakeld."
					},{
						type: "name",
						title: "RADIUS server IP",
						content: "Voer het IP-adres van de RADIUS server in."
					},{
						type: "name",
						title: "RADIUS poort",
						content: "Voer het poortnummer van de RADIUS server in."
					},{
						type: "name",
						title: "RADIUS wachtwoord",
						content: "Voer het gedeelde wachtwoord voor de RADIUS server in."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Selecteer deze optie om de eenvoudige verificatiemethode in te schakelen als een of meer van uw client apparaten alleen toegang tot draadloos heeft via WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Type",
						content: "Selecteer een type verificatie voor uw draadloze netwerk. De standaardwaarde is Auto, waarbij automatisch Open systeem of Gedeelde sleutel wordt gekozen, op basis van de capaciteiten en toegangsvraag van de draadloos client."
					},{
						type: "name",
						title: "WEP sleutel formaat",
						content: "Gebruik het ASCII formaat, of selecteer Hexadecimaal. Het ASCII formaat is een combinatie van letters en cijfers. Het hexadecimale formaat is een combinatie van cijfers (0-9) en letters (A-F, a-f)."
					},{
						type: "name",
						title: "Type sleutel",
						content: "Selecteer een WEP sleutel lengte.",
						children:[{
							type: "name",
							title: "64-bits",
							content: "Biedt de mogelijkheid 10 hexadecimale tekens (0-9, A-F, a-f) of 5 ASCII tekens in het veld WEP waarde in te voeren."
						},{
							type: "name",
							title: "128-bits",
							content: "Biedt de mogelijkheid 26 hexadecimale tekens (0-9, A-F, a-f) of 13 ASCII tekens in het veld WEP waarde in te voeren."
						}]
					},{
						type: "name",
						title: "Sleutel waarde",
						content: "Voer de WEP sleutel in het desbetreffende veld in."
					}]
				}]
			},{
				type: "name",
				title: "Modus",
				content: "Selecteer een gemengde transmissiemodus."
			},{
				type: "name",
				title: "Kanaal breedte",
				content: "Selecteer een kanaal breedte (bandbreedte) voor het 5 GHz draadloze netwerk."
			},{
				type: "name",
				title: "Kanaal",
				content: "Selecteer een werkkanaal voor het 5 GHz draadloze netwerk. Aanbevolen wordt het kanaal op Auto te laten staan als u geen problemen met onderbroken draadloze verbindingen ondervindt."
			},{
				type: "name",
				title: "Zendvermogen",
				content: "Selecteer Hoog, Middel, of Laag om het zendvermogen voor data in te stellen. De standaard en aanbevolen instelling is Hoog."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		WPS: {	
			TITLE: "PIN van router",
			CONTENT: [{
				type: "paragraph",
				content: "Andere apparaten kunnen met deze router via WPS verbinden met de PIN van de router."
			},{
				type: "name",
				title: "PIN van router",
				content: "Zet deze optie aan om draadloze apparaten toe te staan verbinding met de router te maken m.b.v de PIN (Personal Identification Number) van de router."
			},{
				type: "name",
				title: "PIN",
				content: "Toont de PIN van de router. De standaard PIN is op de label van de router vermeld. Klik op Genereren om een nieuwe willekeurige PIN te genereren, of klik op Standaard om de huidige PIN op de standaard fabriek-PIN terug te zetten. "
			}]
		},

		WPS_WIZARD: {
			TITLE: "WPS wizard",
			CONTENT:[{
				type: "name",
				title: "Drukknop (aanbevolen)",
				content: "Selecteer deze methode om de WPS functie in te schakelen, om gemakkelijk een apparaat via WPS met uw draadloze netwerk te verbinden m.b.v. de WPS toets, of virtueel m.b.v. de knop Verbinden."
			},{
				type: "name",
				title: "PIN",
				content: "Selecteer deze methode om een apparaat handmatig toe te voegen, door de WPS PIN-code van het draadloze apparaat in het veld in te voeren en daarna op Verbinden te klikken."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Draadloze stations online",
			CONTENT: [{
				type: "name",
				title: "Cliënt nummer",
				content: "Toont het nummer van de bijbehorende draadloos client."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Toont het MAC-adres van de bijbehorende draadloos client."
			},{
				type: "name",
				title: "Type verbinding",
				content: "Toont de draadloze frequentieband (2,4 GHz of 5 GHz) van de bijbehorende draadloos client."
			},{
				type: "name",
				title: "Beveiliging",
				content: "Toont het type beveiliging van de bijbehorende draadloos client."
			},{
				type: "name",
				title: "Ontvangen pakketten",
				content: "Toont het aantal pakketten ontvangen door de bijbehorende draadloos client."
			},{
				type: "name",
				title: "Verzonden pakketten",
				content: "Toont het aantal pakketten verzonden door de bijbehorende draadloos client."
			},{
				type: "paragraph",
				content: "Klik op Vernieuwen om de informatie op deze pagina te verversen."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Instellingen",
			CONTENT: [{
				type: "paragraph",
				content: "Gasten netwerk biedt de mogelijkheid een afzonderlijk netwerk met een eigen draadloos netwerk naam (SSID) en wachtwoord in te stellen, dat gasten kunnen gebruiken om toegang tot uw draadloze netwerk te krijgen."
			},{
				type: "name",
				title: "Gasten mogen elkaar zien",
				content: "Selecteer dit keuzevakje om toe te staan dat de draadloze apparaten in het Gasten netwerk elkaar kunnen zien."
			},{
				type: "name",
				title: "Geef gasten toegang tot mijn lokale netwerk",
				content: "Selecteer dit keuzevakje om de draadloze apparaten in het Gasten netwerk toegang te geven tot gedeelde mappen en printers in uw lokale netwerk."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "2,4 GHz/5 GHz draadloos",
			CONTENT: [{
				type: "name",
				title: "Gastnetwerk inschakelen",
				content: "Selecteer dit keuzevakje om een Gasten netwerk in te schakelen."
			},{
				type: "name",
				title: "Naam draadloos netwerk (SSID)",
				content: "Gebruik het standaard gasten SSID of voer een nieuwe naam in (max. 32 tekens)."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Selecteer dit vakje als u het gasten SSID niet in de Wi-Fi netwerklijst wilt weergeven."
			},{
				type: "name",
				title: "Beveiliging",
				content: "Wanneer u ervoor kiest om het wachtwoord nooit te updaten, selecteert u een van de volgende beveiligingsopties:",
				children: [{
					type: "name",
					title: "Geen beveiliging",
					content: "Selecteer deze optie om de draadloos beveiliging uit te schakelen. Het wordt sterk aangeraden de draadloos beveiliging in te schakelen, om het Gasten netwerk tegen toegang door onbevoegden te beschermen."
				},{
					type: "name",
					title: "WPA/WPA2-Persoonlijk",
					content: "Selecteer deze optie om de standaard verificatiemethode op basis van een Pre-shared Key (PSK) , ook passphrase genoemd, in te schakelen. Indien geselecteerd, configureert u het volgende:",
					children: [{
						type: "name",
						title: "Versie",
						content: "Selecteer een beveiliging versie voor uw Gasten netwerk.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Deze optie ondersteunt meerdere implementaties van de WPA (Wi-Fi Protected Access) standaard, zoals WPA en WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Deze optie ondersteunt alleen de TKIP versleuteling, die een goed niveau van beveiliging biedt."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Deze optie ondersteunt de AES versleuteling, die een beter niveau van beveiliging dan WPA-PSK biedt en aanbevolen wordt."
						}]
					},{
						type: "name",
						title: "Versleuteling",
						content: "Selecteer een type versleuteling: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), of Auto (voor zowel TKIP als AES). Het wordt NIET aanbevolen de TKIP versleuteling te gebruiken als de router in 802.11n modus werkt, omdat TKIP niet wordt ondersteund in de 802.11n specificatie. Als TKIP toch wordt geselecteerd, wordt de WPS functie uitgeschakeld."
					}]
			}]},{
				type: "name",
				title: "Wachtwoord",
				content: "Gebruik het wachtwoord dat willekeurig wordt gegenereerd, of voer een wachtwoord in van 8 t/m 63 ASCII tekens, of 8 t/m 64 hexadecimale tekens (0-9, a-f, A-F)."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},

		NAT: {
			TITLE: "Application Layer Gateway(ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG maakt het mogelijk aangepaste Network Address Translation (NAT) traversale filters op de gateway aan te sluiten, ter ondersteuning van adres- en poorttranslatie voor bepaalde applicatie-layer \"regel/data\" protocollen: FTP, TFTP, H323 enz. Inschakelen van ALG wordt aanbevolen."
			},{
				type: "name",
				title: "FTP ALG inschakelen",
				content: "Indien geselecteerd, is het FTP (File Transfer Protocol) clients en servers toegestaan data via NAT over te brengen."
			},{
				type: "name",
				title: "TFTP ALG inschakelen",
				content: "Indien geselecteerd, is het TFTP (Trivial File Transfer Protocol) clients en servers toegestaan data via NAT over te brengen."
			},{
				type: "name",
				title: "H323 ALG inschakelen",
				content: "Indien geselecteerd, is het Microsoft NetMeeting clients toegestaan via NAT te communiceren."
			},{
				type: "name",
				title: "RTSP ALG inschakelen",
				content: "Indien geselecteerd, is het mediaplayer clients toegestaan te communiceren met streaming media servers via NAT."
			},{
				type: "name",
				title: "PPTP Passthrough inschakelen",
				content: "Indien geselecteerd, is het Point-to-Point sessies toegestaan te worden getunneld door een IP-netwerk en doorgegeven naar de router."
			},{
				type: "name",
				title: "L2TP Passthrough inschakelen",
				content: "Indien geselecteerd, is het Layer 2 Point-to-Point sessies toegestaan te worden getunneld door een IP-netwerk en doorgegeven naar de router."
			},{
				type: "name",
				title: "IPSec Passthrough inschakelen",
				content: "Indien geselecteerd, is het Internet Protocol Security (IPSec) toegestaan te worden getunneld door een IP-netwerk en doorgegeven naar de router. IPSec gebruikt cryptografische beveiligingen om privé en beveiligde communicatie via IP-netwerken mogelijk te maken."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Virtuele servers",
			CONTENT: [{
				type: "paragraph",
				content: "Virtuele servers worden gebruikt om openbare diensten in uw lokale netwerk op te zetten. Een virtuele server wordt gedefinieerd als een externe poort en alle aanvragen vanaf het Internet via deze externe poort worden naar een aangewezen computer doorgestuurd, die met een statisch of gereserveerd IP-adres moet zijn geconfigureerd."
			},{
				type: "name",
				title: "Type service",
				content: "De naam van uw virtuele server."
			},{
				type: "name",
				title: "Externe poort",
				content: "Het nummer van een of een reeks poorten, gebruikt door de virtuele server."
			},{
				type: "name",
				title: "Intern IP",
				content: "Het IP-adres van de computer waarop de service applicatie draait."
			},{
				type: "name",
				title: "Interne poort",
				content: "Het poortnummer van de computer waarop de service applicatie draait."
			},{
				type: "name",
				title: "Protocol",
				content: "Het protocol dat voor de service applicatie wordt gebruikt: TCP, UDP, of Alle (alle protocollen ondersteund door de router)."
			},{
				type: "name",
				title: "Status",
				content: "Toont de huidige status (in- of uitgeschakeld) van de specifieke filterregel."
			},{
				type: "name",
				title: "Wijzigen",
				content: "Toont opties voor het Wijzigen of Verwijderen van de desbetreffende regel."
			},{
				type: "step",
				title: "Een virtuele server regel instellen",
				content: [
					"1. Klik op Toevoegen.",
					"2. Klik op Bestaande services bekijken om een service in de lijst te selecteren, om automatisch het juiste poortnummer in de velden Externe poort en Interne poort in te vullen. Als de service niet vermeld wordt, voert u het externe poortnummer in (bijv. 21), of een reeks poortnummers (bijv. 21-25). Laat de Interne poort blanco als die hetzelfde is als de Externe poort, of voer een specifiek poortnummer in (bijv. 21) als de Externe poort één poort is. Voer het IP-adres in van de computer waarop de service applicatie draait in het decimale formaat met punten in het veld Intern IP.",
					"3. Selecteer een protocol voor de service applicatie: TCP, UDP, of Alle in de keuzelijst Protocol .",
					"4. Selecteer Inschakelen.",
					"5. Klik op OK."
				]
			},{
				type: "step",
				title: "Een virtuele server regel wijzigen of verwijderen",
				content: "In de tabel klikt u op het Wijzigen of Verwijderen symbool bij de regel die u wilt wijzigen of verwijderen."
			},{
				type: "step",
				title: "Meerdere regels verwijderen",
				content: "Selecteer alle regels die u wilt verwijderen en klik op Verwijderen boven de tabel."
			},{
				type: "note",
				title: "Opmerking",
				content: "Als er op uw lokale host apparaat meer dan één type beschikbare service wordt gehost, moet u een regel voor elke service aanmaken."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Poort triggering",
			CONTENT: [{
				type: "paragraph",
				content: "Port Triggering wordt gebruikt om verkeer op een bepaalde poort door te sturen naar een specifieke server in het netwerk."
			},{
				type: "name",
				title: "Applicatie",
				content: "De naam van de applicatie."
			},{
				type: "name",
				title: "Triggering poort",
				content: "Toont de poort voor uitgaand verkeer die wordt gebruikt om een filterregel voor een uitgaande verbinding te triggeren (activeren)."
			},{
				type: "name",
				title: "Trigger protocol",
				content: "Het protocol dat voor de Triggering poort wordt gebruikt. TCP, UDP, of Alle (alle protocollen ondersteund door de router)."
			},{
				type: "name",
				title: "Externe poort",
				content: "Het nummer van een of een reeks poorten, gebruikt door het externe systeem. Een reactie via een van deze poorten wordt doorgestuurd naar de PC die deze regel triggert. U kunt maximaal 5 groepen poorten (of poort secties) invoeren. De groepen poorten moeten van elkaar worden gescheiden d.m.v. een “,” (komma), bijv. 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Extern protocol",
				content: "Toont het protocol gebruikt voor de inkomende poort: TCP, UDP, of Alle (alle protocollen ondersteund door de router)."
			},{
				type: "name",
				title: "Status",
				content: "Toont de huidige status (in- of uitgeschakeld) van de specifieke filterregel."
			},{
				type: "name",
				title: "Wijzigen",
				content: "Toont opties voor het Wijzigen of Verwijderen van de desbetreffende regel."
			},{
				type: "step",
				title: "Een Port Triggering regel instellen",
				content: [{
					type: "note",
					title: "Opmerking",
					content: "Elke regel kan maar door één host tegelijk worden gebruikt."
				},
					"1. Klik op Toevoegen.",
					"2. Klik op Bestaande applicaties bekijken om een applicatie in de lijst te selecteren en automatisch de standaard waarden in de desbetreffende velden te laten invullen. Als u een niet vermelde applicatie wilt toevoegen, voert u handmatig Applicatie, Triggering poort, Triggering protocol, Externe poort en Extern protocol in.",	
					"3. Selecteer Inschakelen.",
					"4. Klik op OK."
				]
			},{
				type: "step",
				title: "Een Port Triggering regel wijzigen of verwijderen",
				content: "In de tabel klikt u op het Wijzigen of Verwijderen symbool bij de regel die u wilt wijzigen of verwijderen."
			},{
				type: "step",
				title: "Meerdere Port Triggering regels verwijderen",
				content: "Selecteer in de tabel alle regels die u wilt verwijderen en klik op Verwijderen boven de tabel."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "De DMZ (Demilitarized Zone) host functie biedt de mogelijkheid een lokale host open te stellen aan het Internet voor een speciale service, zoals Internet gaming of video conferencing. In feite maakt DMZ het mogelijk één computer in uw LAN al zijn poorten open te laten zetten. Deze computer moet worden geconfigureerd met een statisch IP-adres en zijn DHCP client functie moet uitgeschakeld worden."
			},{
				type: "step",
				title: "Een computer of server als DMZ server aanwijzen",
				content: [
					"1. Klik op DMZ inschakelen.",
					"2. In het veld DMZ host IP-adres voert u het IP-adres van een lokale computer in die u als DMZ host wilt instellen.",
					"3. Klik op opslaan."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Standaard is de Universal Plug-and-Play (UPnP) functie ingeschakeld, zodat apparaten zoals computers en Internet apparaten elkaar automatisch kunnen vinden en met elkaar kunnen communiceren via het lokale netwerk."
			},{
				type: "paragraph",
				content: "De UPnP service lijst toont informatie over de UPnP apparaten."
			},{
				type: "name",
				title: "Beschrijving service",
				content: "Toont een beknopte beschrijving van de lokale host die de UPnP aanvraag initieert."
			},{
				type: "name",
				title: "Externe poort",
				content: "De externe poort die door de lokale host wordt geopend."
			},{
				type: "name",
				title: "Protocol",
				content: "Het type netwerkprotocol dat door de lokale host wordt gebruikt."
			},{
				type: "name",
				title: "Intern IP-adres",
				content: "Het IP-adres van de lokale host."
			},{
				type: "name",
				title: "Interne poort",
				content: "De interne poort die door de lokale host wordt geopend."
			},{
				type: "paragraph",
				content: "Klik op Vernieuwen om de UPnP Server lijst te vernieuwen."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Apparaatinstellingen",
			CONTENT: [{
				type: "paragraph",
				content: "Het scherm Apparaat instellingen toont informatie over op USB-aansluitingen aangesloten USB opslagapparaten."
			},{
				type: "name",
				title: "Scannen",
				content: "De router detecteert doorgaans automatisch als er een nieuw apparaat wordt aangesloten. Als dat niet het geval is, klikt u op deze knop om naar nieuw aangesloten apparaten te scannen en het informatiescherm te vernieuwen."
			},{
				type: "name",
				title: "Volume",
				content: "Toont de naam van het USB-volume."
			},{
				type: "name",
				title: "Capaciteit",
				content: "Toont de totale opslagcapaciteit van het USB-apparaat."
			},{
				type: "name",
				title: "Vrije ruimte",
				content: "Toont de momenteel beschikbare opslagruimte."
			},{
				type: "name",
				title: "Veilig verwijderen",
				content: "Klik op deze knop om het USB-apparaat veilig af te sluiten voordat het fysiek van de router wordt afgekoppeld."
			},{
				type: "paragraph",
				content: "De knop Veilig verwijderen verschijnt alleen als er daadwerkelijk een USB-opslagapparaat op de router aangesloten is. Bedenk ook dat u het USB-apparaat niet uit de aansluiting mag verwijderen terwijl erop geschreven of van gelezen wordt."
			},{
				type: "name",
				title: "Actief",
				content: "Dit keuzevakje verschijnt alleen als er daadwerkelijk een USB-opslagapparaat op de router aangesloten is. Selecteer dit vakje om het delen van bestanden op het USB-apparaat in te schakelen."
			},{
				type: "step",
				title: "Een bestandenserver instellen",
				content: [
				"1. Sluit een USB opslagapparaat op de USB-aansluiting van de router aan m.b.v. een USB-kabel.",
				"2. Het nieuw aangesloten USB-apparaat wordt normaal gesproken automatisch gedetecteerd door de router en de gegevens ervan verschijnen in het deel Apparaat instellingen. Als dat niet het geval is, klikt u op Scannen.",
				"3. Selecteer Actief om het delen van bestanden in te schakelen."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Account voor delen",
			CONTENT: [{
				type: "name",
				title: "Account",
				content: "U kunt kiezen voor Standaard account gebruiken om in te loggen voor gedeelde bestanden en mappen, of Nieuw account gebruiken en de volgende gegevens invoeren om een nieuw gebruikersaccount aan te maken."
			},{
				type: "name",
				title: "Gebruikersnaam/Wachtwoord",
				content: "Voer een reeks alfanumerieke tekens van max. 15 tekens lang in. De gebruikersnaam moet met een letter beginnen. Bij deze velden wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "name",
				title: "Wachtwoord bevestigen",
				content: "Voer het wachtwoord nogmaals in om te controleren of u geen typfouten heeft gemaakt. In dit veld wordt ook onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Instellingen voor delen",
			CONTENT: [{
				type: "name",
				title: "Netwerk/Mediaserver naam",
				content: "Toont de naam die wordt gebruikt om toegang te krijgen tot het aangesloten USB-opslagapparaat."
			},{
				type: "name",
				title: "Inschakelen",
				content: "Selecteren om de toegangsmethode in te schakelen."
			},{
				type: "name",
				title: "Toegangsmethode",
				content: "Er zijn drie toegangsmethoden die toegang tot het aangesloten USB opslagapparaat geven. U kunt een of meer toegangsmethoden selecteren door het bijbehorende keuzevakje aan te vinken.",
				children: [{
					type: "name",
					title: "Netwerk omgeving",
					content: "Indien ingeschakeld, krijgen gebruikers in uw netwerk toegang tot het USB-opslagapparaat m.b.v. een toegewezen IP-adres (bijv. \\\\192.168.0.1)."
				},{
					type: "name",
					title: "FTP",
					content: "Indien ingeschakeld, krijgen de FTP clients in uw lokale netwerk toegang tot het USB opslagapparaat m.b.v. het toegewezen IP-adres, gevolgd door het poortnummer van de FTP server (bijv. ftp://192.168.0.1:21)."
				},{
					type: "name",
					title: "FTP (via Internet)",
					content: "Indien ingeschakeld, krijgen gebruikers op afstand toegang tot het USB opslagapparaat m.b.v. FTP via het Internet. Deze functie ondersteunt het downloaden en uploaden van bestanden. Om het poortnummer van de FTP server te veranderen, voert u een nieuw poortnummer in en klikt u op Opslaan om de wijzigingen op te slaan."
				}]
			},{
				type: "name",
				title: "Koppeling",
				content: "Toont het adres dat wordt gebruikt voor toegang tot het gedeelde USB opslagapparaat."
			},{
				type: "name",
				title: "Poort",
				content: "Geeft het poortnummer van de FTP-server aan. Gebruik de standaardwaarde 21 of een waarde tussen 1024 en 65535."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Mappen delen",
			CONTENT: [{
				type: "name",
				title: "Alles delen",
				content: "Vink deze optie aan om alle bestanden en mappen te delen, of vink deze uit om alleen de geselecteerde mappen te delen."
			},{
				type: "name",
				title: "Verificatie inschakelen",
				content: "Het wordt sterk aanbevolen verificatie in te schakelen, zodat gebruikers een geldige gebruikersnaam en wachtwoord moeten invoeren om toegang tot de gedeelde mappen te krijgen."
			},{
				type: "name",
				title: "Mapnaam",
				content: "Toont de naam van de gedeelde map."
			},{
				type: "name",
				title: "Mappad",
				content: "Toont het pad naar de gedeelde map."
			},{
				type: "name",
				title: "Media delen",
				content: "Geeft aan of gedeelde map voor media delen mag worden gebruikt."
			},{
				type: "name",
				title: "Volume naam",
				content: "Toont de naam van het gedeelde volume."
			},{
				type: "name",
				title: "Status",
				content: "Toont de status van de gedeelde map d.m.v. een gloeilamp symbool."
			},{
				type: "name",
				title: "Wijzigen",
				content: "Toont opties voor het Wijzigen of Verwijderen van de desbetreffende gedeelde map."
			},{
				type: "name",
				title: "Bladeren",
				content: "Klik hierop om naar een gedeelde map te zoeken."
			},{
				type: "name",
				title: "Toegang via Gasten netwerk toestaan",
				content: "Selecteer deze optie als u clients in het Gasten netwerk toegang tot de gedeelde mappen wil geven."
			},{
				type: "name",
				title: "Verificatie inschakelen",
				content: "Selecteer deze optie als gebruikers een geldige gebruikersnaam en wachtwoord moeten invoeren om toegang tot de gedeelde mappen te krijgen."
			},{
				type: "name",
				title: "Schrijftoegang inschakelen",
				content: "Selecteer deze optie als u gebruikers wilt toestaan wijzigingen in de inhoud van de map aan te brengen."
			},{
				type: "name",
				title: "Media delen inschakelen",
				content: "Selecteer deze optie om het delen van media in te schakelen."
			},{
				type: "name",
				title:"Vernieuwen",
				content: "Klik hierop om de lijst van gedeelde mappen te vernieuwen."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Print server",
			CONTENT: [{
				type: "name",
				title:"Print server",
				content: "Zet deze optie aan om de Print server functie in te schakelen."
			},{
				type: "name",
				title:"Naam printer",
				content: "Toont de naam van de printer die met de router verbonden is."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Ouderlijk toezicht",
			CONTENT: [{
				type: "paragraph",
				content: "Met behulp van Ouderlijk toezicht kunt u ongepaste, expliciete en kwaadwillende websites blokkeren, de toegang tot bepaalde tijden beperken (bijv. facebook of youtube tijdens huiswerktijd) en tegelijkertijd elk apparaat in uw thuisnetwerk beschermen tegen malware en phishing vanuit één centraal punt."
			},{
				type: "name",
				title: "Ouderlijk toezicht",
				content: "Zet deze optie aan om de functie Ouderlijk toezicht in te schakelen."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Apparaten onder ouderlijk toezicht",
			CONTENT: [{
				type: "name",
				title: "Naam apparaat",
				content: "Toont de naam van alle verbonden client apparaten die momenteel onder ouderlijk toezicht staan."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Toont het MAC-adres van alle verbonden client apparaten die momenteel onder ouderlijk toezicht staan."
			},{
				type: "name",
				title: "Internet toegangstijd",
				content: "Toont de beperkte toegangstijden. Het tijdschema wordt van kracht op basis van de systeemtijd van de router, die kan worden ingesteld in \"Systeemfuncties-> Tijd instellingen\"."
			},{
				type: "name",
				title: "Beschrijving",
				content: "Een korte beschrijving van het verbonden apparaat."
			},{
				type: "name",
				title: "Status",
				content: "Toont de huidige status (in- of uitgeschakeld) van ouderlijk toezicht voor het desbetreffende apparaat."
			},{
				type: "name",
				title: "Wijzigen",
				content: "Toont opties voor het Wijzigen of Verwijderen van het desbetreffende apparaat."
			},{
				type: "step",
				title: "Beperkingen opleggen aan een nieuw client apparaat",
				content: [
					"1. Klik op Toevoegen.",
					"2. Klik op Aanwezige apparaten bekijken en kies een momenteel verbonden apparaat in de Apparatenlijst; of voer Naam apparaat en het MAC-adres handmatig in om een apparaat toe te voegen dat niet verbonden is.",
					"3. Klik op het symbool Internet toegangstijd om een periode op te geven waarvoor de beperking geldt.",
					"4. Typ een korte beschrijving in het veld  Beschrijving. (Optioneel)",
					"5. Selecteer Inschakelen.",
					"6. Klik op OK."
				]
			},{
				type: "paragraph",
				content: "Om een Ouderlijk toezicht item te wijzigen of verwijderen, klikt u op het symbool Wijzigen om de gegevens te wijzigen, of Verwijderen om het desbetreffende item te verwijderen."
			},{
				type: "paragraph",
				content: "Om meerdere items te verwijderen, selecteert u alle items en klikt u op Verwijderen boven de tabel."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Inhoud beperken",
			CONTENT: [{
				type: "name",
				title: "Zwarte lijst",
				content: "Bevat trefwoorden die zullen worden gebruikt om toegang tot bepaalde websites te blokkeren voor client apparaten vermeld in de Ouderlijk toezicht lijst.",
				children: [{
					type: "paragraph",
					content: "Klik op Nieuw trefwoord toevoegen om een trefwoord aan de zwarte lijst toe te voegen. Om een trefwoord te verwijderen, klikt u op het symbool (-) bij het trefwoord dat u wilt verwijderen."
				}]
			},{
				type: "name",
				title: "Witte lijst",
				content: "Bevat adressen van websites die client apparaten vermeld in de Ouderlijk toezicht lijst mogen bezoeken.",
				children: [{
					type: "paragraph",
					content: "Klik op Nieuwe domeinnaam toevoegen om een website aan de witte lijst toe te voegen. Om een website te verwijderen, klikt u op het symbool (-) bij de website die u wilt verwijderen."
				}]
			},{
				type: "paragraph",
				content: "Trefwoorden kunnen ook domeinnamen zijn, bijv. www.mail.google.com of www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "Met Quality of Service (QoS) kunt u de prioriteit van het Internet verkeer afstemmen op uw behoeften. U kunt de prioriteit voor een apparaat of een applicatie in de lijst QoS regels instellen."
			},{
				type: "name",
				title: "QoS inschakelen",
				content: "Klik op dit vakje om de QoS functie in te schakelen."
			},{
				type: "name",
				title: "Upload bandbreedte",
				content: "Voer de maximum upload bandbreedte in, geleverd door uw ISP."
			},{
				type: "name",
				title: "Download bandbreedte",
				content: "Voer de maximum download bandbreedte in, geleverd door uw ISP."
			},{
				type: "name",
				title: "Hoge prioriteit",
				content: "Geef een percentage voor verkeer met hoge prioriteit op."
			},{
				type: "name",
				title: "Middel prioriteit",
				content: "Geef een percentage voor verkeer met gemiddelde prioriteit op."
			},{
				type: "name",
				title: "Lage prioriteit",
				content: "Geef een percentage voor verkeer met lage prioriteit op."
			},{
				type: "note",
				title: "Opmerking",
				content: "De maximum hoeveelheid (percentage) van alle prioriteiten is 1."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		QOS_RULE: {
			TITLE: "Lijst QoS regels",
			CONTENT: [{
				type: "name",
				title: "Type",
				content: "Selecteer een type om aan de lijst van QoS regels toe te voegen."
			},{
				type: "step",
				title: "Een regel voor hoge/middel/lage prioriteit per apparaat instellen",
				content: [
					"1. Klik op Toevoegen.",
					"2. Selecteer Per apparaat.",
					"3. Klik op Aanwezige apparaten bekijken om het gewenste apparaat in de Apparatenlijst te selecteren, of voer de naam en het MAC-adres van een apparaat handmatig in de velden Naam apparaat en MAC-adres in.",
					"4. Klik op OK."
				]
			},{
				type: "step",
				title: "Een regel voor hoge/middel/lage prioriteit per applicatie instellen",
				content: [
					"1. Klik op Toevoegen.",
					"2. Selecteer Per applicatie.",
					"3. Selecteer de gewenste applicatie in de Applicatielijst, of pas een applicatie aan door naam, protocol en bestemming poort (1-65535) in de desbetreffende velden in te voeren; u kunt één poort, meerdere poorten of een reeks poorten invoeren; gebruik een komma als scheidingsteken (bijv. 21,36-105,111).",
					"4. Klik op OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Database upgrade",
			CONTENT: [{
				type: "name",
				title: "Nieuw database bestand",
				content: "Klik op Bladeren om naar het nieuwe database bestand te gaan. Selecteer en klik op Upgrade om uw database naar een nieuwere versie te upgraden."
			},{
				type: "name",
				title: "Database versie",
				content: "Toont de huidige database versie."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Firewall",
			CONTENT: [{
				type: "name",
				title: "SPI firewall",
				content: "Stateful Packet Inspection (SPI) firewall voorkomt cyberaanvallen en valideert het verkeer dat de router passeert op basis van het protocol."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "DoS bescherming",
			CONTENT: [{
				type: "name",
				title: "DoS bescherming",
				content: "Denial of Service (DoS) bescherming beschermt uw LAN tegen DoS-aanvallen door overstromen (flooding) van uw netwerk met serveraanvragen."
			},{
				type: "name",
				title: "ICMP-FLOOD Aanval Filtering",
				content: "Schakel deze optie in om de Internet Control Message Protocol (ICMP) overstromingsaanval te voorkomen.",
				children: [{
					type: "name",
					title: "Uit",
					content: "Geen bescherming."
				},{
					type: "name",
					title: "Laag",
					content: "Laag niveau van bescherming en weinig effect op de prestaties van de router."
				},{
					type: "name",
					title: "Middel",
					content: "Middelmatig niveau van bescherming en enigszins merkbaar effect op de prestaties van de router."
				},{
					type: "name",
					title: "Hoog",
					content: "Hoog niveau van bescherming en merkbaar effect op de prestaties van de router."
				}]
			},{
				type: "name",
				title: "UDP-FLOOD Aanval Filtering",
				content: "Schakel deze optie in om de User Datagram Protocol (UDP) overstromingsaanval te voorkomen."
			},{
				type: "name",
				title: "TCP-SYN-FLOOD Aanval Filtering",
				content: "Schakel deze optie in om de Transmission Control Protocol-Synchronize (TCP-SYN) overstromingsaanval te voorkomen."
			},{
				type: "name",
				title: "Ping Packet van WAN-poort negeren",
				content: "Inschakelen om ping packets van de WAN-poort te negeren"
			},{
				type: "name",
				title: "Ping Packet van LAN-poort verbieden",
				content: "Inschakelen om ping packets van de LAN-poort te verbieden."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Lijst van geblokkeerde DoS hosts",
			CONTENT: [{
				type: "name",
				title: "Lijst van geblokkeerde DoS hosts",
				content: "De lijst vermeldt het IP-adres en MAC-adres van bronnen van geblokkeerde DoS aanvallen."
			},{
				type: "step",
				title: "Een item verwijderen",
				content: "In de Lijst van hosts selecteert u het item dat u wilt verwijderen en daarna klikt u op Verwijderen boven de tabel."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Toegangscontrole",
			CONTENT: [{
				type: "paragraph",
				content: "Toegangscontrole wordt gebruikt om specifieke computers en andere apparaten toegang tot uw netwerk te geven of die juist te blokkeren. Wanneer een apparaat geblokkeerd is, kan het niet met andere apparaten communiceren of verbinding met het Internet maken."
			},{
				type: "paragraph",
				content: "Om Toegangscontrole te gebruiken, schakel u deze functie in en stelt u een zwarte en/of witte lijst in. Als Toegangscontrole uitgeschakeld is (Uit), dan is het alle apparaten, ook die op de zwarte lijst, toegestaan verbinding te maken."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Toegangsmodus",
			CONTENT: [{
				type: "name",
				title: "Zwarte lijst",
				content: "Alleen aan de apparaten op de zwarte lijst wordt de toegang tot uw netwerk ontzegd."
			},{
				type: "name",
				title: "Witte lijst",
				content: "Alleen de apparaten op de witte lijst krijgen toegang tot uw netwerk."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Online apparaten",
			CONTENT: [{
				type: "name",
				title: "Naam apparaat",
				content: "De naam van het verbonden apparaat."
			},{
				type: "name",
				title: "IP-adres",
				content: "Het IP-adres van het verbonden apparaat."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Het MAC-adres van het verbonden apparaat."
			},{
				type: "name",
				title: "Type verbinding",
				content: "Het type verbinding van het verbonden apparaat."
			},{
				type: "step",
				title: "Een apparaat blokkeren",
				content: "In de tabel Online apparaten klikt u op het symbool Blokkeren in de kolom Wijzigen die hoort bij het apparaat dat u wilt blokkeren."
			},{
				type: "step",
				title: "Meerdere apparaten blokkeren",
				content: "In de tabel Online apparaten selecteert u alle apparaten die u wilt blokkeren en daarna klikt u op Blokkeren boven de tabel. Het apparaat wordt automatisch toegevoegd aan de apparaten in de zwarte lijst."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Apparaten in zwarte / witte lijst",
			CONTENT: [{
				type: "step",
				title: "Een apparaat op de zwarte of witte lijst plaatsen",
				content: [
					"1. Klik op Toevoegen.",
					"2. Voer Naam apparaat in.",
					"3. Voer het MAC-adres van het apparaat in.",
					"4. Klik op OK."
				]
			},{
				type: "step",
				title: "Een apparaat in de zwarte / witte lijst wijzigen of eruit verwijderen",
				content: "In de tabel Zwarte/Witte lijst klikt u op het symbool Wijzigen of Verwijderen bij het apparaat dat u wilt wijzigen of verwijderen."
			},{
				type: "step",
				title: "Meerdere apparaten uit de zwarte / witte lijst verwijderen",
				content: "In de tabel Zwarte/Witte lijst selecteert u alle apparaten die u wilt verwijderen en daarna klikt u op Verwijderen boven de lijst."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Instellingen",
			CONTENT: [{
				type: "paragraph",
				content: "ARP (Address Resolution Protocol) binding is handig om de toegang voor een specifieke computer tot het LAN te bepalen, door het IP-adres en het MAC-adres van het apparaat aan elkaar te binden. ARP binding voorkomt ook dat andere apparaten een specifiek IP-adres kunnen gebruiken."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "ARP lijst",
			CONTENT: [{
				type: "paragraph",
				content: "Toont het MAC- en IP-adres van de momenteel verbonden apparaten."
			},{
				type: "name",
				title: "ARP item nummer",
				content: "Het totale aantal apparaten dat momenteel met de router verbonden is."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Het MAC-adres van het verbonden apparaat."
			},{
				type: "name",
				title: "IP-adres",
				content: "Het IP-adres dat aan het verbonden apparaat toegewezen is."
			},{
				type: "name",
				title: "Gebonden",
				content: "Geeft aan of het MAC- en IP-adres aan elkaar gebonden zijn."
			},{
				type: "name",
				title: "Wijzigen",
				content: "Toont opties voor het binden of verwijderen van het desbetreffende item uit de lijst."
			},{
				type: "note",
				title: "Opmerking",
				content: "U kunt een IP-adres niet aan meer dan één MAC-adres binden."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Binding lijst",
			CONTENT: [{
				type: "step",
				title: "Een apparaat met ARP binding instellen",
				content: [
					"1. Klik op Toevoegen.",
					"2. Voer het MAC-adres van het apparaat in.",
					"3. Voer het IP-adres in dat u aan het bovenstaande MAC-adres wilt binden.",
					"4. Voer een Beschrijving voor het apparaat in. (Optioneel)",
					"5. Selecteer Inschakelen.",
					"6. Klik op OK."
				]
			},{
				type: "step",
				title: "Een item wijzigen of verwijderen",
				content: "In de Binding lijst klikt u op het symbool Wijzigen of Verwijderen bij het item dat u wilt wijzigen of verwijderen."
			},{
				type: "step",
				title: "Meerdere items verwijderen",
				content: "In de Binding lijst selecteert u alle items die u wilt verwijderen en daarna klikt u op Verwijderen boven de lijst."
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Selecteer deze optie om de IPv6 functie van de router in te schakelen (Aan) of uit te schakelen (Uit)."
			},{
				type: "title",
				title: "Type Internetverbinding: Statisch IP",
			},{
				type: "name",
				title: "Statisch IP",
				content: "Selecteer deze type als uw ISP statische toewijzing van IPv6 adressen gebruikt."
			},{
				type: "name",
				title: "IPv6 adres/Standaard gateway/Primaire DNS/Secundaire DNS",
				content: "Voer deze parameters in zoals aangeleverd door uw ISP."
			},{
				type: "name",
				title: "MTU grootte",
				content: "De standaard en typische MTU (Maximum Transmission Unit) grootte voor de meeste Ethernet netwerken is 1500 bytes. Het wordt afgeraden de standaard MTU grootte te wijzigen, tenzij vereist door de ISP."
			},{
				type: "title",
				title: "Type Internetverbinding: Dynamisch IP",
			},{
				type: "name",
				title: "Dynamisch IP",
				content: "Selecteer dit type als uw ISP dynamische toewijzing van IPv6 adressen gebruikt."
			},{
				type: "name",
				title: "IPv6 adres/Primaire DNS/Secundaire DNS",
				content: "Deze parameters worden automatisch toegewezen door de DHCPv6 server van uw ISP."
			},{
				type: "name",
				title: "Vernieuwen",
				content: "Klik op deze knop om nieuwe IPv6 parameters van de DHCPv6 server van uw ISP te verkrijgen."
			},{
				type: "name",
				title: "Vrijgeven",
				content: "Klik op deze knop om alle IPv6 adressen die door de DHCPv6 server van de ISP toegewezen zijn vrij te geven."
			},{
				type: "name",
				title: "IPv6 adres verkrijgen",
				content: "Selecteer DHCPv6 om een niet-tijdelijk IPv6 adres te verkrijgen, of SLAAC om een IPv6 adres gegenereerd uit het router advertentiepakket te verkrijgen, afhankelijk van uw ISP."
			},{
				type: "name",
				title: "Voorvoegsel delegatie",
				content: "Selecteer Inschakelen om een voorvoegsel delegatie via DHCPv6 Server van de ISP te verkrijgen, of Uitschakelen om handmatig een adresvoorvoegsel op te geven. Clients in het LAN zullen m.b.v. dit voorvoegsel een IPv6 adres genereren."
			},{
				type: "name",
				title: "DNS-adres",
				content: "Selecteer deze optie voor Verkrijg dynamisch van ISP of Gebruik de volgende DNS-adressen. Als Gebruik de volgende DNS-adressen geselecteerd is, voert u de DNS-adressen die u van uw ISP hebt ontvangen handmatig in."
			},{
				type: "name",
				title: "Primaire DNS/Secundaire DNS",
				content: "Voer deze parameters handmatig in of laat ze dynamisch van uw ISP verkrijgen."
			},{
				type: "title",
				title: "Type Internetverbinding: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Selecteer dit type als uw ISP PPPoEv6 gebruikt en u een gebruikersnaam en wachtwoord heeft gegeven."
			},{
				type: "name",
				title: "Gebruikersnaam/Wachtwoord",
				content: "Voer deze parameters in zoals aangeleverd door uw ISP."
			},{
				type: "name",
				title: "IPv6 adres",
				content: "Dit wordt automatisch toegewezen door de DHCPv6 server van de ISP, nadat u uw gebruikersnaam en wachtwoord hebt ingevoerd en op Verbinden hebt geklikt."
			},{
				type: "name",
				title: "DNS-adres",
				content: "Selecteer deze optie voor Verkrijg dynamisch van ISP of Gebruik de volgende DNS-adressen. Als Gebruik de volgende DNS-adressen geselecteerd is, voert u de DNS-adressen die u van uw ISP hebt ontvangen handmatig in."
			},{
				type: "name",
				title: "IPv6 adres verkrijgen",
				content: "Selecteer DHCPv6 om een niet-tijdelijk IPv6 adres te verkrijgen, of SLAAC om een IPv6 adres gegenereerd uit het router advertentiepakket te verkrijgen, of Opgegeven door ISP om het IPv6 adres handmatig in te voeren, volgens opgave van uw ISP."
			},{
				type: "name",
				title: "Voorvoegsel delegatie",
				content: "Selecteer Inschakelen om een voorvoegsel delegatie via DHCPv6 Server van de ISP te verkrijgen, of Uitschakelen om handmatig een adresvoorvoegsel op te geven. Clients in het LAN zullen m.b.v. dit voorvoegsel een IPv6 adres genereren."
			},{
				type: "name",
				title: "Verbinden",
				content: "Klik op deze knop om verbinding met het Internet te maken."
			},{
				type: "name",
				title: "Verbreken",
				content: "Klik op deze knop om de Internet verbinding te verbreken."
			},{
				type: "title",
				title: "Type Internetverbinding: 6to4 Tunnel"
			},{
				type: "name",
				title: "6to4 Tunnel",
				content: "Selecteer dit type als uw ISP 6to4 gebruikt voor het toewijzen van adressen."
			},{
				type: "name",
				title: "IPv4 adres/IPv4 subnetmasker/IPv4 standaard gateway/Tunnel adres",
				content: "Deze parameters worden dynamisch gegenereerd door de IPv4 informatie van de WAN poort nadat u op Verbinden hebt geklikt."
			},{
				type: "name",
				title: "Gebruik de volgende DNS server",
				content: "Vink dit vakje aan om de primaire en/of secundaire DNS die u van uw ISP hebt ontvangen handmatig in te voeren."
			},{
				type: "name",
				title: "Verbinden",
				content: "Klik op deze knop om verbinding met het Internet te maken."
			},{
				type: "name",
				title: "Verbreken",
				content: "Klik op deze knop om de Internet verbinding te verbreken."
			},{
				type: "title",
				title: "Internet verbinding type: Pass-Through (Bridge)"
			},{
				type: "paragraph",
				content: "Selecteer dit type als uw ISP Pass Through (Bridge) netwerk inzet gebruikt. Voor dit type zijn geen parameters vermeld, omdat er geen configuratie nodig is."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Behalve voor Pass-Through (Bridge) moet voor de andere 6 typen Internet verbinding IPv6 worden geconfigureerd."
			},{
				type: "name",
				title: "Toegewezen type",
				content: "Selecteer de juiste optie afhankelijk van uw ISP.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Om automatisch IP-adressen aan de clients in het LAN toe te wijzen.",
					children: [{
						type: "name",
						title: "Adres voorvoegsel",
						content: "Voer het adres voorvoegsel in dat u van uw ISP heeft ontvangen."
					},{
						type: "name",
						title: "Vrijgeeftijd",
						content: "De tijd dat het toegewezen IP-adres geldig blijft. Laat de standaardwaarde van 86400 seconden staan, of wijzig die indien vereist door uw ISP."
					},{
						type: "name",
						title: "Adres",
						content: "Het IP-adres dat automatisch wordt toegewezen door de DHCPv6 server van de ISP."
					}]
				},{
					type: "name",
					title: "SLAAC+Stateless DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Adres voorvoegsel",
						content: "Voer het adres voorvoegsel in dat u van uw ISP heeft ontvangen."
					},{
						type: "name",
						title: "Adres",
						content: "Het IP-adres, automatisch toegewezen door de ISP."
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Adres voorvoegsel",
						content: "Voer het adres voorvoegsel in dat u van uw ISP heeft ontvangen."
					},{
						type: "name",
						title: "Adres",
						content: "Het IP-adres, automatisch toegewezen door de ISP."
					}]
				}]
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "MAC klonen",
			CONTENT: [{
				type: "name",
				title: "Standaard MAC-adres gebruiken",
				content: "Het standaard MAC-adres van de router NIET wijzigen, voor het geval de ISP het toegewezen IP-adres niet aan het MAC-adres bindt."
			},{
				type: "name",
				title: "MAC-adres van huidige computer gebruiken",
				content: "Selecteer deze optie om het huidige MAC-adres van de computer die met de router verbonden is te kopiëren, voor het geval dat de ISP het toegewezen IP-adres aan het MAC-adres van de computer bindt."
			},{
				type: "name",
				title: "Aangepast MAC-adres gebruiken",
				content: "Voer het MAC-adres handmatig in, voor het geval dat de ISP het toegewezen IP-adres aan het opgegeven MAC-adres bindt."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Tijd instellingen",
			CONTENT: [{
				type: "step",
				title: "De tijd automatisch synchroniseren",
				content: [
					"1. In het veld Tijd instellingen selecteert u Automatisch van het Internet verkrijgen.",
					"2. Selecteer uw lokale Tijdzone in de keuzelijst.",
					"3. In het veld NTP server I voert u het IP-adres of de domeinnaam van de gewenste NTP server in.",
					"4. In het veld NTP server II voert u het IP-adres of de domeinnaam van de gewenste tweede NTP server in. (Optioneel)",
					"5. Klik op Verkrijgen.",
					"6. Klik op opslaan."
				]
			},{
				type: "step",
				title: "De datum en tijd handmatig instellen",
				content: [
					"1. In het veld Tijd instellen selecteert uHandmatig.",
					"2. Voer de huidige Datum in.",
					"3. Voer de huidige Tijd in (in 24-uurs formaat, bijv. 16:00).",
					"4. Klik op Opslaan."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Zomertijd",
			CONTENT: [{
				type: "step",
				title: "Zomertijd instellen",
				content: [
					"1. Selecteer Zomertijd inschakelen.",
					"2. Selecteer de juiste Begin datum en tijd wanneer de zomertijd in uw tijdzone begint.",
					"3. Selecteer de juiste Eind datum en tijd wanneer de zomertijd in uw tijdzone eindigt.",
					"4. Klik op Opslaan."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Diagnose",
			CONTENT: [{
				type: "paragraph",
				content: "De router biedt Ping en Traceroute functies om u te helpen bij het oplossen van problemen met netwerkverbindingen. De Ping functie verzendt pakketten naar een bepaald IP-adres of domeinnaam en logt de resultaten, bijv. het aantal pakketten verzonden/ontvangen en de tijd heen en weer. De Traceroute functie verzendt pakketten naar een bepaald IP-adres of domeinnaam en toont het aantal hops en de tijd om de bestemming te bereiken."
			},{
				type: "paragraph",
				content: "U kunt een lokaal apparaat pingen en tracerouten m.b.v. het IP-adres of een domeinnaam, zoals google.com, yahoo.com, enz."
			},{
				type: "step",
				title: "Diagnose m.b.v. Ping",
				content: [
					"1. Voer het gewenste IP-adres of de Domeinnaam in.",
					"2. Klik op het pijlsymbool om het menu Geavanceerd te openen en selecteer het gewenste Aantal pings en de Ping pakket grootte. (Optioneel)",
					"3. Klik op Start."
				]
			},{
				type: "step",
				title: "Diagnose m.b.v. Traceroute",
				content: [
					"1. Voer het gewenste IP-adres of de Domeinnaam in.",
					"2. Klik op het pijlsymbool om het menu Geavanceerd te openen en selecteer het gewenste aantal (te bereiken) hops in het veld Traceroute max. TTL (Time to Live). De standaardwaarde is 20. (Optioneel)",
					"3. Klik op Start."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Firmware upgrade",
			CONTENT: [{
				type: "paragraph",
				content: "Voordat u een upgrade van de firmware van de router kunt uitvoeren, moet u de nieuwste firmware update van de <a class=\"link\" target=\"blank\" href=\"http://www.tp-link.com/nl/Support/\">TP-Link Support</a> website naar uw computer downloaden."
			},{
				type: "step",
				title: "BELANGRIJK: om mislukking van de upgrade te voorkomen, moet u op het volgende letten:",
				content: [
					"1. Zorg dat u het juiste nieuwste firmware bestand hebt voor uw hardware versie (zoals getoond op de pagina Firmware upgrade page).",
					"2. Zorg dat er een stabiele verbinding is tussen de router en uw computer. Het is NIET aan te bevelen de upgrade van de firmware draadloos uit te voeren.",
					"3. Zorg dat u een eventueel aanwezig USB-opslagapparaat uit de router verwijderd hebt vóór de firmware upgrade, om verlies van data te voorkomen.",
					"4. Maak een backup van de configuratie van uw router.",
					"5. Schakel de router tijdens de firmware upgrade niet uit."
				]
			},{
				type: "step",
				title: "De firmware van de router upgraden",
				content: [
					"1. Klik op Bladeren.",
					"2. Zoek en selecteer het gedownloade firmware bestand.",
					"3. Klik op upgrade"
				]
			},{
				type: "paragraph",
				content: "Het upgrade proces duurt enkele minuten. De router NIET uitschakelen terwijl de upgrade wordt uitgevoerd."
			}]
		},
		
		BACKUP: {	
			TITLE: "Backup",
			CONTENT: [{
				type: "paragraph",
				content: "Het wordt sterk aangeraden een backup van uw huidige configuraties te maken, voor het geval die moeten worden teruggezet om een eerdere toestand van het systeem te herstellen, of na een reset op fabrieksinstellingen."
			},{
				type: "paragraph",
				content: "Klik op Backup om uw huidige configuraties op uw computer op te slaan. Bewaar het backup bestand op een veilige plaats, zodat u het later indien nodig kunt terugzetten op de router."
			}]
		},
		
		RESTORE: {
			TITLE: "Terugzetten",
			CONTENT: [{
				type: "step",
				title: "Een backup terugzetten",
				content: [
					"1. Klik op Bladeren.",
					"2. Zoek en selecteer het backup bestand.",
					"3. Klik op Terugzetten."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Fabrieksinstellingen herstellen",
			CONTENT: [{
				type: "paragraph",
				content: "Klik op Fabrieksinstellingen herstellen om uw router op de standaard fabrieksinstellingen terug te zetten."
			},{
				type: "note",
				title: "Opmerking",
				content: [
					"1. Fabrieksinstellingen herstellen verwijdert alle instellingen die u voor de router hebt geconfigureerd. Om opnieuw in te loggen bij de beheerpagina van de router, gebruikt u het standaard \"admin\" voor de gebruikersnaam en het wachtwoord.",
					"2. De router tijdens backup of terugzetten NIET uitschakelen."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Accountbeheer",
			CONTENT: [{
				type: "paragraph",
				content: "Op deze pagina kunt u uw gebruikersnaam en/of wachtwoord voor inloggen veranderen en een e-mailadres voor het opvragen van uw wachtwoord instellen."
			},{
				type: "name",
				title: "Oude gebruikersnaam",
				content: "Typ hier uw huidige gebruikersnaam."
			},{
				type: "name",
				title: "Oud wachtwoord",
				content: "Typ hier uw huidige wachtwoord."
			},{
				type: "name",
				title: "Nieuwe gebruikersnaam",
				content: "Typ hier uw nieuwe gebruikersnaam."
			},{
				type: "name",
				title: "Nieuw wachtwoord",
				content: "Typ hier uw nieuwe wachtwoord."
			},{
				type: "name",
				title: "Nieuw wachtwoord bevestigen",
				content: "Typ hier nogmaals uw nieuwe wachtwoord."
			},{
				type: "note",
				title: "Opmerking",
				content: "Als u de huidige gebruikersnaam en het wachtwoord om in te loggen bij de router verandert, moet u de nieuwe inloggegevens opschrijven en op een veilige plaats bewaren."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Wachtwoord opvragen",
			CONTENT: [{
				type: "name",
				title: "Wachtwoord opvragen inschakelen",
				content: "U wordt met klem geadviseerd de functie Wachtwoord opvragen in te schakelen, waarmee u uw wachtwoord en gebruikersnaam via e-mail kunt opvragen."
			},{
				type: "name",
				title: "Van",
				content: "Voer een geldig e-mailadres in om te gebruiken voor uitgaande e-mail."
			},{
				type: "name",
				title: "Naar",
				content: "Voer een geldig e-mailadres in om te gebruiken voor inkomende e-mail."
			},{
				type: "name",
				title: "SMTP server",
				content: "Voer het SMTP serveradres in dat de router moet gebruiken om de verificatiecode via e-mail te versturen."
			},{
				type: "name",
				title: "Verificatie inschakelen",
				content: "Selecteer Verificatie inschakelen als de uitgaande e-mail server verificatie vereist voor het verzenden van e-mail en vul de Gebruikersnaam en het Wachtwoord in de desbetreffende velden in. Bij deze velden wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Lokaal beheer",
			CONTENT: [{
				type: "paragraph",
				content: "In dit deel kunt u het aantal client apparaten in uw LAN dat toegang tot uw router krijgt beperken d.m.v. op MAC-adressen gebaseerde verificatie."
			},{
				type: "name",
				title: "Toegang voor alle met LAN verbonden apparaten",
				content: "Zet deze optie Aan om lokaal beheer voor alle met het LAN verbonden apparaten in te schakelen, of Uit om het beheer alleen voor een specifiek apparaat mogelijk te maken."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Toont het MAC-adres van het specifieke apparaat dat toegang heeft."
			},{
				type: "name",
				title: "Beschrijving",
				content: "Een beschrijving van het specifieke apparaat dat toegang heeft."
			},{
				type: "name",
				title: "Status",
				content: "Toont de huidige status van specifieke apparaat dat toegang heeft (in- of uitgeschakeld)."
			},{
				type: "name",
				title: "Wijzigen",
				content: "Toont opties voor het Wijzigen of Verwijderen van het desbetreffende apparaat uit de lijst."
			},{
				type: "step",
				title: "Een client apparaat aan de lijst toevoegen",
				content: [
					"1. Klik op Toevoegen.",
					"2. Klik op Aanwezige apparaten bekijken om een bestaand apparaat te kiezen, of voer het MAC-adres van een apparaat in het veld MAC-adres in.",
					"3. Voer een Beschrijving voor het apparaat in.",
					"4. Selecteer Inschakelen.",
					"5. Klik op OK."
				]
			},{
				type: "step",
				title: "Een apparaat in de lijst wijzigen of eruit verwijderen",
				content: "In de tabel klikt u op het Wijzigen of Verwijderen symbool bij het apparaat dat u wilt wijzigen of verwijderen."
			},{
				type: "step",
				title: "Meerdere items verwijderen",
				content: "Selecteer alle apparaten die u wilt verwijderen en klik op Verwijderen."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Beheer op afstand",
			CONTENT: [{
				type: "paragraph",
				content: "De functie Beheer op afstand biedt de mogelijkheid de router op afstand via het Internet te benaderen en configureren."
			},{
				type: "name",
				title: "Beheer op afstand uitschakelen",
				content: "Selecteer deze optie om Beheer op afstand uit te schakelen."
			},{
				type: "name",
				title: "Beheer op afstand voor alle apparaten inschakelen",
				content: "Selecteer deze optie om Beheer op afstand voor alle IP-adressen in te schakelen. Indien geselecteerd, gaat u naar het veld Webbeheer poort."
			},{
				type: "name",
				title: "Beheer op afstand voor opgegeven apparaten inschakelen",
				content: "Selecteer deze optie om Beheer op afstand voor een specifiek IP-adres in te schakelen. Indien geselecteerd, gaat u naar de velden Webbeheer poort en IP-adres voor Beheer op afstand."
			},{
				type: "name",
				title: "Webbeheer poort",
				content: "Voer het poortnummer tussen 1024 en 65535 in dat wordt gebruikt voor toegang tot de webbeheer interface van de router met een hogere mate van beveiliging. Normaal gesproken gebruiken browsers de standaard HTTP servicepoort 80. De standaard en gebruikelijke servicepoort is 8080, een alternatieve servicepoort van HTTP."
			},{
				type: "name",
				title: "IP-adres Beheer op afstand",
				content: "Voer hier een geldig IP-adres of IP-adressenbereik in voor toegang tot de router."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Systeemlog",
			CONTENT: [{
				type: "paragraph",
				content: "De Systeemlog pagina toont een lijst van de meest recente activiteiten (gebeurtenissen) op de router. U kunt instellen welke typen logs en/of het niveau van de logs u wilt bekijken. Deze pagina bevat ook de e-mail functie die u kunt configureren om automatisch de logbestanden naar een bepaald e-mailadres te laten sturen, of de logbestanden naar een computer te exporteren."
			},{
				type: "name",
				title: "Type",
				content: "Selecteer het type systeemlog dat u wilt weergeven."
			},{
				type: "name",
				title: "Niveau",
				content: "Selecteer het niveau van de systeemlogs dat u wilt weergeven."
			},{
				type: "name",
				title: "Vernieuwen",
				content: "Klik hierop om het systeemlog te vernieuwen."
			},{
				type: "name",
				title: "Alles verwijderen",
				content: "Klik op deze symbool om alle systeemlogs te verwijderen."
			},{
				type: "name",
				title: "Log opslaan",
				content: "Klik op deze knop om alle systeemlogbestanden naar uw lokale computer te downloaden."
			},{
				type: "name",
				title: "E-mail instellingen",
				content: "Klik op deze knop om de e-mail instellingen voor systeemlogs te configureren."
			},{
				type: "step",
				title: "E-mail instellingen voor systeemlogs configureren",
				content: [
					"1. Klik op E-mail instellingen.",
					"2. Van - Voer een geldig e-mailadres in om te gebruiken voor uitgaande e-mail.",
					"3. Naar - Voer een geldig e-mailadres in om te gebruiken voor inkomende e-mail.",
					"4. SMTP server - Voer het SMTP serveradres in dat de router gebruikt om de systeemlogs via e-mail te verzenden.",
					{
						content: "5. Verificatie inschakelen - Selecteer deze optie als de SMTP server verificatie voor het verzenden van e-mail vereist.",
						children: [{
							type: "name",
							title: "Gebruikersnaam",
							content: "Voer de gebruikersnaam voor de SMTP server in. In dit veld wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
						},{
							type: "name",
							title: "Wachtwoord",
							content: "Voer het wachtwoord voor de SMTP server in. In dit veld wordt ook onderscheid gemaakt tussen hoofdletters en kleine letters."
						}]
					},{
						content: "6. Auto Mail inschakelen - Selecteer deze optie om te bepalen op welke tijd van de dag het systeemlog automatisch moet worden verzonden.",
						children: [{
							type: "paragraph",
							content: "Om het systeemlog elke dag op een bepaalde tijd te laten verzenden, voert u de uren (HH) en minuten (MM) in 24-uurs formaat in, bijv. 16:00."
						},{
							type: "paragraph",
							content: "Om het systeemlog met een specifieke tijdinterval te verzenden, voert u het aantal uren in."
						}]
					},
					"7. Klik op Opslaan."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Verkeersstatistieken",
			CONTENT: [{
				type: "paragraph",
				content: "De pagina Verkeersstatistieken toont het netwerkverkeer in de vorm van het aantal via het LAN, WAN en WLAN verzonden en ontvangen pakketten."
			},{
				type: "name",
				title: "Verkeersstatistieken",
				content: "Zet deze optie aan om de Verkeersstatistieken informatie in te schakelen."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Verkeersstatistieken lijst",
			CONTENT: [{
				type: "name",
				title: "IP-adres/MAC-adres",
				content: "Toont het IP-adres en MAC-adres van het desbetreffende client apparaat."
			},{
				type: "name",
				title: "Totale pakketten",
				content: "Toont het totale aantal pakketten dat door het client apparaat verzonden en ontvangen is sinds het begin van de sessie of de laatste reset van de teller."
			},{
				type: "name",
				title: "Totale bytes",
				content: "Toont het totale aantal bytes dat door het client apparaat verzonden en ontvangen is sinds het begin van de sessie of de laatste reset van de teller."
			},{
				type: "name",
				title: "Huidige pakketten",
				content: "Toont het totale aantal pakketten dat op een bepaald tijdstip verzonden en ontvangen is."
			},{
				type: "name",
				title: "Huidige bytes",
				content: "Toont het totale aantal bytes dat op een bepaald tijdstip verzonden en ontvangen is"
			},{
				type: "name",
				title: "Wijzigen",
				content: "Toont opties voor het Resetten (op nul) en Verwijderen van de desbetreffende statistiek uit de lijst."
			},{
				type: "name",
				title: "Vernieuwen",
				content: "Klik hierop om de statische informatie op de pagina te vernieuwen."
			},{
				type: "name",
				title: "Alles resetten",
				content: "Klik hierop om alle statische waarden in de lijst op nul terug te zetten."
			},{
				type: "name",
				title: "Alles verwijderen",
				content: "Klik hierop om alle statische informatie uit de lijst te verwijderen."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "2,4 GHz/5 GHz draadloos",
			CONTENT: [{
				type: "name",
				title: "Beacon interval",
				content: "Voer een waarde tussen 40 en 1000 milliseconden in, om de duur te bepalen tussen baken pakketten die door de router worden uitgezonden om het draadloze netwerk te synchroniseren. De standaard waarde is 100 milliseconden."
			},{
				type: "name",
				title: "RTS Threshold",
				content: "Voer een waarde tussen 1 en 2346 in, om de pakket grootte voor datatransmissie via de router in te stellen. Standaard is de grootte van de RTS (Request to Send) Threshold 2346. Als de pakket grootte groter dan de vooraf ingestelde drempelwaarde is, verzendt de router Request to Send frames naar een bepaald ontvangstation en onderhandelt over het verzenden van een data frame, of anders wordt het pakket direct verzonden."
			},{
				type: "name",
				title: "DTIM Interval",
				content: "Deze waarde bepaalt de interval voor het Delivery Traffic Indication Message (DTIM). Voer een waarde tussen 1 en 15 milliseconden in. De standaardwaarde is 1, wat aangeeft dat de DTIM Interval gelijk is aan de Beacon Interval."
			},{
				type: "name",
				title: "Groepssleutel update periode",
				content: "Voer het aantal seconden in (minimaal 30) om de tijdinterval te bepalen voor het automatisch vernieuwen van de versleutelingscode. De standaardwaarde is 0, wat geen vernieuwing betekent."
			},{
				type: "name",
				title: "WMM functie",
				content: "De WMM functie garandeert dat pakketten met hoge prioriteit berichten met voorrang worden verzonden. Deze functie is standaard ingeschakeld, wat ten zeerste aanbevolen wordt."
			},{
				type: "name",
				title: "Short GI functie",
				content: "Deze functie is standaard ingeschakeld en wordt aanbevolen om de datacapaciteit te verhogen door de Guard Interval (GI) tijd te reduceren."
			},{
				type: "name",
				title: "AP Isolation functie",
				content: "Als u wilt dat alle draadloze apparaten die met uw netwerk verbonden zijn niet met elkaar kunnen interacteren, maar wel toegang tot het Intenet hebben, selecteert u het vakje AP Isolation inschakelen."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "TX Beamforming is een signaalverwerkingstechniek wat gebruikt wordt in sensor reeksen voor directionele signaaloverdracht. Indien ingeschakeld, zal het gebruikt worden in het zendende eind om het WI-Fi signaal te versterken en de Wi-Fi dekking uit te breiden."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "WDS Bridging inschakelen",
				content: "Schakel de functie WDS (Wireless Distribution System) Bridging in om de router toe te staan als brug te fungeren voor een ander access point (AP) in een draadloos local area network (WLAN). Als deze functie ingeschakeld is, configureert u het volgende:",
				children: [{
					type: "name",
					title: "SSID (te bridgen)",
					content: "Voer het SSID van het WAP (Wireless Access Point) in waarmee de router zal verbinden als client, of gebruik de functie Zoeken om alle beschikbare netwerken weer te geven."
				},{
					type: "name",
					title: "Zoeken",
					content: "Klik op deze knop om te zoeken naar SSID, BSSID, signaalsterkte, kanaal en beveiliging informatie van alle beschikbare draadloze netwerken binnen bereik. Nadat u een netwerk hebt geselecteerd, worden SSID, MAC-adres en beveiliging automatisch ingevuld."
				},{
					type: "name",
					title: "MAC-adres (te bridgen)",
					content: "Voer het MAC-adres (BSSID) in 12 hexadecimale tekens (0-9, a,-f, A-F) in, gescheiden door liggende streepjes, van het draadloze wireless access point waarmee de router als client zal verbinden. Wanneer u het gewenste AP m.b.v. de functie Zoeken hebt geselecteerd, wordt het MAC-adres veld automatisch ingevuld."
				},{
					type: "name",
					title: "Beveiliging",
					content: "Selecteer het juiste type beveiliging voor het geselecteerde access point, Geen, WPA-PSK/WPA2-PSK of WEP. Wanneer u het gewenste AP m.b.v. de Survey functie hebt geselecteerd, wordt het Beveiliging veld automatisch ingevuld.",
					children: [{
						type: "name",
						title: "Wachtwoord",
						content: "Deze optie is beschikbaar als het type beveiliging WPA-PSK/WPA2-PSK of WEP is. Voer het wachtwoord voor het geselecteerde access point in."
					},{
						type: "name",
						title: "Ver. type",
						content: "Deze optie is alleen beschikbaar als het type beveiliging WEP (Wired Equivalent Privacy) is. Selecteer het juiste type verificatie (Auto, Open systeem of Gedeelde sleutel) dat door het geselecteerde access point wordt gebruikt."
					},{
						type: "name",
						title: "WEP sleutel formaat",
						content: "Deze optie is alleen beschikbaar als het type beveiliging WEP is. Selecteer het sleutelformaat (ASCII of hexadecimaal) dat door het geselecteerde AP wordt gebruikt."
					}]
				}]
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Selecteer het vakje WPS inschakelen en klik op Opslaan om de WPS (Wi-Fi Protected Setup) functie in te schakelen, waarmee u apparaten met WPS-functie gemakkelijk kunt instellen en verbinden door op een toets te drukken."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Selecteer het vakje NAT inschakelen en klik op Opslaan om de NAT (Network Address Translation) functie in te schakelen."
			},{
				type: "note",
				title: "Opmerking",
				content: "Als NAT uitgeschakeld is, hebben configuraties in NAT Forwarding geen effect."
			},{
				type: "name",
				title: "NAT Boost",
				content: "Selecteer het vakje NAT Boost inschakelen en klik op Opslaan om te verzekeren dat uw router de hoogste doorvoersnelheid heeft."
			},{
				type: "note",
				title: "Opmerking",
				content: "Als NAT Boost wordt ingeschakeld, worden QoS en Verkeersstatistieken automatisch uitgeschakeld."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "DoS bescherming niveau instellingen",
			CONTENT: [{
				type: "paragraph",
				content: "Het DoS beschermingsniveau bepaalt de mate waarin de router beschermd wordt tegen ICMP-FLOOD, UDP-FLOOD en TCP-FLOOD aanvallen."
			},{
				type: "name",
				title: "ICMP-FLOOD pakketten niveau",
				content: "Voer een waarde tussen 5 en 7200 ICMP pakketten in, om de ICMP-FLOOD bescherming direct in te schakelen wanneer het aantal pakketten de ingestelde drempelwaarde overschrijdt."
			},{
				type: "name",
				title: "UDP-FLOOD pakketten niveau",
				content: "Voer een waarde tussen 5 en 7200 UDP pakketten in, om de UDP-FLOOD bescherming direct in te schakelen wanneer het aantal pakketten de ingestelde drempelwaarde overschrijdt.."
			},{
				type: "name",
				title: "TCP-FLOOD pakketten niveau",
				content: "Voer een waarde tussen 5 en 7200 TCP-SYN pakketten in, om de TCP-SYN-FLOOD bescherming direct in te schakelen wanneer het aantal pakketten de ingestelde drempelwaarde overschrijdt.."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Duplex",
			CONTENT: [{
				type: "name",
				title: "Duplex",
				content: "Selecteer het duplex type in de keuzelijst."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Nachtmodus inschakelen",
				content: "Selecteer dit keuzevakje om de leds in Nachtmodus uit te schakelen zonder de prestaties van de router te beïnvloeden."
			},{
				type: "name",
				title: "Nachtmodus periode",
				content: "Geef een tijdsperiode op waarin de nachtmodus actief moet zijn."
			},{
				type: "paragraph",
				content: "Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "Met OPENVPN kunt u het internet gebruiken om veilig toegang te verkrijgen tot uw netwerk wanneer u buitenshuis bent. Om de VPN service te gebruiken dient u Dynamic DNS Service (aanbevolen) te configureren of een statisch IP adres aan uw router's WAN poort toe te wijzen. De Systeem tijd van de router dient gesynchroniseerd te worden met het internet."
			},{
				type: "name",
				title: "VNP-server inschakelen",
				content: "Selecteer dit keuzevakje om de OpenVPN-server in te schakelen."
			},{
				type: "name",
				title: "Type service",
				content: "Selecteer het communicatieprotocol voor de OpenVPN-server: UDP of TCP."
			},{
				type: "name",
				title: "Servicepoort",
				content: "Voer een communicatie poort nummer in tussen 1024 en 65535. De standaard en meest gebruikte poort is 1194."
			},{
				type: "name",
				title: "VNP-subnet/-netmasker",
				content: "Voer het IP-adresbereik in dat aan clients kan worden uitgegeven door de OpenVPN-server."
			},{
				type: "name",
				title: "Clienttoegang",
				content: "Selecteer het toegangstype voor uw OpenVPN-client.",
				children: [{
					type: "name",
					title: "Alleen lokaal netwerk",
					content: "Clients hebben alleen toegang tot de router en het lokale netwerk. De standaardroute van de client wordt niet gewijzigd."
				},{
					type: "name",
					title: "Internet en lokaal netwerk",
					content: "Cliënten kunnen toegang krijgen tot het thuis netwerk en internet sites of diensten met een geografische beperking wanneer u in het buitenland bent. De standaard route van de cliënt zal gewijzigd worden."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Certificaat",
			CONTENT: [{
				type: "paragraph",
				content: "Gebruik het certificaat voor informatie en identificatie van de VPN-verbinding op de externe computer."
			},{
				type: "name",
				title: "Genereren",
				content: "Klik om een nieuw certificaat te genereren."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Configuratiebestand",
			CONTENT: [{
				type: "paragraph",
				content: "Remote cliënten zullen de configuratie bestanden gebruiken om toegang te krijgen tot de router."
			},{
				type: "name",
				title: "Exporteren",
				content: "Klik op deze knop om het OpenVPN-configuratiebestand op te slaan, dat kan worden gebruikt om een nieuwe VPN-verbinding toe te voegen."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "Installatiehandleiding VPN-client",
			CONTENT: [{
				type: "step",
				title: "Om uw clientapparaten te verbinden met de OpenVPN-server:",
				content:[{
					type: "paragraph",
					content: "Voordat u de OpenVPN server kunt configureren, configureert u eerst Dynamic DNS Service (aanbevolen) of wijs een statisch IP adres toe aan de WAN poort. Wees er zeker van dat uw externe poort van NAT instellingen niet de service poort is en uw Systeem Tijd is gesynchroniseerd met het internet."
				},
					"1. Selecteer VPN server inschakelen.",
					"2. Configureer de OpenVPN server parameters (Service Type, Service poort, cliënt toegang en VPN subnet/netmasker) en klik op opslaan.",
					"3. Klik op exporteren om het configuratie bestand op te slaan.",
					"4. Op uw Cliënts apparaat, download en installeer de OpenVPN cliënt utility van <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> De officieel ondersteunde platforms includeren Windows, Mac OSX, Linux.",
					"5. Start de OpenVPN cliënt utility en voeg een nieuwe VPN verbinding toe door gebruik te maken van het opgeslagen configuratie bestand om uw cliënts apparaat te verbinden met de VPN server."
				]},{
					type: "note",
					title: "Opmerking",
					content: "Ga voor meer informatie over OpenVPN-clients naar <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Met PPTP VPN kunt u het internet gebruiken om snel en gemakkelijk toegang tot uw netwerk te krijgen wanneer u buitenshuis bent. Het kan zijn dat deze mogelijkheid door sommige ISP's wordt tegengehouden. Om de VPN service te gebruiken dient u Dynamic DNS Service (aanbevolen) te configureren of een statisch IP adres an uw routers WAN poort toe te wijzen. Uw Systeem Tijd dient gesynchroniseerd te zijn met het internet."
			},{
				type: "name",
				title: "VNP-server inschakelen",
				content: "Selecteer dit keuzevakje om de PPTP-VPN-server in te schakelen."
			},{
				type: "name",
				title: "IP-adres client",
				content: "Voer het IP-adresbereik (tot 10 clients) in dat aan clients kan worden uitgegeven door de PPTP-VPN-server."
			},{
				type: "name",
				title: "Sta Samba (netwerk plaats) toegang toe",
				content: "Selecteer om uw VPN cliënt toegang toe te staan tot uw lokale Samba server."
			},{
				type: "name",
				title: "Sta NetBIOS doorvoer toe",
				content: "Selecteer om uw VPN cliënten toegang tot uw Samba server toe te staan door gebruik te maken van de NetBIOS naam."
			},{
				type: "name",
				title: "Sta onversleutelde verbindingen toe",
				content: "Selecteer om onversleutelde verbindingen naar uw VPN server toe te staan."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Account lijst",
			CONTENT: [{
				type: "paragraph",
				content: "Deze tabel geeft de accounts weer die gebruikt kunnen worden om te verbinden met de PPTP VPN server door de remote clients."
			},{
				type: "step",
				title: "Om een PPTP VPN account toe te voegen.",
				content: [
					"1. Klik op Toevoegen.",
					"2. Voer de gebruikersnaam en het wachtwoord in om clients te authenticeren bij de PPTP-VPN-server.",
					"3. Klik op OK."
				]
			},{
				type: "step",
				title: "Een bestaand account bewerken of verwijderen.",
				content: "Klik in de tabel op het Bewerken icoon of het prullenbak icoon dat correspondeerd met het account dat u wenst te bewerken of te verwijderen."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "Installatiehandleiding VPN-client",
			CONTENT: [{
				type: "step",
				title: "Om uw clientapparaten te verbinden met de PPTP-VPN-server:",
				content:[{
					type: "paragraph",
					content: "Voordat u de PPTP VPN server kunt configureren, configureer gelieve eerst Dynamic DNS Service (aanbevolen) of wijs een statisch IP adres toe aan de WAN poort. Wees er zeker van dat uw externe poort van de NAT instellingen niet 1723 is en dat uw Systeem Tijd gesynchroniseerd is met het internet."
				},
					"1. Selecteer VPN server inschakelen.",
					"2. Configureer de PPTP VPN server parameters en klik op Opslaan.",
					"3. Op uw cliënts apparaat, creëer een PPTP VPN verbinding. De officiele ondersteunde platformen includeren Windows, Mac OSX, Linux, iOS en Android.",
					"4. Start het PPTP VPN programma, voeg een nieuwe verbinding toe en voer het domeinnaam in van de geregistreerde DDNS service of het statische IP adres wat toegewezen is aan de WAN poort om het apparaat van uw cliënt te verbinden met de PPTP VPN server."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "VPN verbindingen",
			CONTENT: [{
				type: "paragraph",
				content: "Deze pagina geeft de clients aan die momenteel zijn verbonden met de OpenVPN- en PPTP-VPN-servers van de router."
			},{
				type: "paragraph",
				content: "Klik op het min-pictogram om de verbinding van de overeenkomstige client te verbreken."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Internet status",
				content: "Toont de huidige status van de Internet verbinding van de router."
			},{
				type: "name",
				title: "Type verbinding",
				content: "Toont het type Internetverbinding."
			},{
				type: "name",
				title: "IP-adres",
				content: "Toont het huidige Internet IP-adres dat is toegewezen aan de router."
			},{
				type: "name",
				title: "Secundaire verbinding/IP-adres",
				content: "Toont het secundaire type verbinding en IP-adres."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Router",
			CONTENT: [{
				type: "title",
				title: "2,4 GHz/5 GHz draadloos"
			},{
				type: "name",
				title: "SSID",
				content: "Toont de huidige draadloos netwerk naam van de 2,4 GHz/5 GHz frequentieband."
			},{
				type: "name",
				title: "Kanaal",
				content: "Toont het kanaal waarop het draadloze 2,4 GHz/5 GHz netwerk uitzendt."
			},{
				type: "name",
				title: "MAC",
				content: "Toont het MAC-adres van het draadloze 2,4 GHz/5 GHz netwerk."
			},{
				type: "title",
				title: "2,4 GHz/5 GHz gastnetwerk"
			},{
				type: "name",
				title: "Status",
				content: "Geeft aan of het draadloze Gasten netwerk 2,4 GHz/5 GHz aan (ingeschakeld) of uit (uitgeschakeld) is."
			},{
				type: "name",
				title: "SSID",
				content: "Toont de draadloze netwerk naam van het Gasten netwerk"
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Bekabelde/draadloze clients",
			CONTENT: [{
				type: "name",
				title: "Naam",
				content: "Toont de naam van de client die met de router verbonden is."
			},{
				type: "name",
				title: "IP-adres",
				content: "Toont het toegewezen IP-adres van de client."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Toont het MAC-adres van de client."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Printer",
			CONTENT: [{
				type: "name",
				title: "Naam",
				content: "Toont de naam van de printer die op de router aangesloten is via een USB-aansluiting."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "USB-schijf",
			CONTENT: [{
				type: "name",
				title: "USB-schijf",
				content: "Toont het merk van de USB-schijf die op de router aangesloten is."
			},{
				type: "name",
				title: "Totaal",
				content: "Toont de totale opslagruimte van de USB-schijf."
			},{
				type: "name",
				title: "Beschikbaar",
				content: "Toont de beschikbare opslagruimte van de USB-schijf."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Auto-detecteren",
				content: "Klik op deze knop om de router automatisch uw huidige type Internetverbinding te laten bepalen."
			},{
				type: "note",
				title: "Opmerking",
				content: "Als u niet zeker weet welk type Internetverbinding u hebt, gebruikt u de functie Auto-detectie, of neemt u contact op met uw ISP voor hulp."
			},{
				type: "title",
				title: "Type Internetverbinding: Statisch IP",
			},{
				type: "name",
				title: "IP-adres/Subnetmasker/Standaard gateway/Primaire DNS/Secundaire DNS",
				content: "Voer hier de gegevens in die u van uw ISP hebt ontvangen."
			},{
				type: "title",
				title: "Type Internetverbinding: Dynamisch IP",
			},{
				type: "name",
				title: "MAC-adres NIET klonen/MAC-adres van huidige computer klonen",
				content: "Selecteer of u het MAC-adres wilt klonen of niet, afhankelijk van de instructies van uw ISP."
			},{
				type: "title",
				title: "Type Internetverbinding: PPPoE",
			},{
				type: "name",
				title: "Gebruikersnaam/Wachtwoord",
				content: "Voer de gebruikersnaam en het wachtwoord in die u van uw ISP hebt ontvangen. In deze velden wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "title",
				title: "Type Internetverbinding: L2TP/PPTP",
			},{
				type: "name",
				title: "Gebruikersnaam/Wachtwoord",
				content: "Voer de gebruikersnaam en het wachtwoord in die u van uw ISP hebt ontvangen. In deze velden wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "name",
				title: "Secundaire verbinding (Dynamisch IP of Statisch IP)",
				children: [{
					type: "name",
					title: "Dynamisch IP",
					content: "Selecteer of het IP-adres en Subnetmasker automatisch door de ISP worden toegewezen."
				},{
					type: "name",
					title: "Statisch IP",
					content: "Selecteer of het IP-adres en subnetmasker door de ISP zijn aangeleverd en voer deze gegevens in de desbetreffende velden in."
				}]
			},{
				type: "name",
				title: "VPN Server IP/Domeinnaam",
				content: "Voer het IP-adres of de domeinnaam van de VPN server aangeleverd door uw ISP in."
			},{
				type:"paragraph",
				content:"Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Draadloze instellingen",
			CONTENT: [{
				type: "name",
				title: "Draadloze radio inschakelen",
				content: "Selecteer dit keuzevakje om de 2,4 GHz/5 GHz draadloos radio in te schakelen."
			},{
				type: "name",
				title: "Naam draadloos netwerk (SSID)",
				content: "U kunt de standaard naam van het draadloze netwerk (SSID) laten zoals die is, of een nieuwe naam invoeren (max. 32 tekens). In dit veld wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Selecteer dit keuzevakje als u de naam van het 2,4 GHz/5 GHz netwerk (SSID) niet in de Wi-Fi netwerklijst wilt weergeven."
			},{
				type: "name",
				title: "Wachtwoord",
				content: "Voer een draadloos wachtwoord van 8 t/m 63 ASCII-tekens of 8 t/m 64 hexadecimale tekens in. In dit veld wordt onderscheid gemaakt tussen hoofdletters en kleine letters."
			},{
				type:"paragraph",
				content:"Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Apparaatinstellingen",
			CONTENT: [{
				type: "paragraph",
				content: "Het scherm Apparaat instellingen toont informatie over op USB-aansluitingen aangesloten USB opslagapparaten."
			},{
				type: "name",
				title: "Scannen",
				content: "De router detecteert doorgaans automatisch als er een nieuw apparaat wordt aangesloten. Als dat niet het geval is, klikt u op deze knop om naar nieuw aangesloten apparaten te scannen en het informatiescherm te vernieuwen."
			},{
				type: "name",
				title: "Volume",
				content: "Toont de naam van het USB-volume."
			},{
				type: "name",
				title: "Capaciteit",
				content: "Toont de totale opslagcapaciteit van het USB-apparaat."
			},{
				type: "name",
				title: "Vrije ruimte",
				content: "Toont de momenteel beschikbare opslagruimte."
			},{
				type: "name",
				title: "Veilig verwijderen",
				content: "Klik op deze knop om het USB-apparaat veilig af te sluiten voordat het fysiek van de router wordt afgekoppeld.",
				children: [{
					type: "paragraph",
					content: "De knop Veilig verwijderen verschijnt alleen als er daadwerkelijk een USB-opslagapparaat op de router aangesloten is. Bedenk ook dat u het USB-apparaat niet uit de aansluiting mag verwijderen terwijl erop geschreven of van gelezen wordt."
				}]
			},{
				type: "name",
				title: "Status",
				content: "Dit keuzevakje verschijnt alleen als er daadwerkelijk een USB-opslagapparaat op de router aangesloten is. Selecteer dit vakje om het delen van bestanden op het USB-apparaat in te schakelen."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Instellingen voor delen",
			CONTENT: [{
				type: "name",
				title: "Netwerk/Mediaserver naam",
				content: "Toont de naam die wordt gebruikt om toegang te krijgen tot het aangesloten USB-opslagapparaat."
			},{
				type:"paragraph",
				content:"Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Mappen delen",
			CONTENT: [{
				type: "name",
				title: "Alles delen",
				content: "Vink deze optie aan om alle bestanden en mappen te delen, of vink deze uit om alleen de geselecteerde mappen te delen."
			},{
				type: "name",
				title: "Verificatie inschakelen",
				content: "Het wordt sterk aangeraden om verificatie in te schakelen, zodat gebruikers een geldige gebruikersnaam en wachtwoord moeten invoeren om toegang tot de gedeelde mappen te krijgen."
			},{
				type: "name",
				title: "Mapnaam",
				content: "Toont de naam van de gedeelde map."
			},{
				type: "name",
				title: "Mappad",
				content: "Toont het pad naar de gedeelde map."
			},{
				type: "name",
				title: "Media delen",
				content: "Geeft aan of gedeelde map voor media delen mag worden gebruikt."
			},{
				type: "name",
				title: "Volume naam",
				content: "Toont de naam van het gedeelde volume."
			},{
				type: "name",
				title: "Status",
				content: "Toont de status van de gedeelde map d.m.v. een gloeilamp symbool."
			},{
				type: "name",
				title: "Wijzigen",
				content: "Hiermee geeft u opties weer voor het wijzigen en verwijderen van de desbetreffende gedeelde map."
			},{
				type: "name",
				title: "Toevoegen",
				content: "Klik op deze knop om een nieuw item aan te maken."
			},{
				type: "name",
				title: "Verwijderen",
				content: "Klik op deze knop om het geselecteerde item uit de tabel te verwijderen."
			},{
				type: "name",
				title: "Bladeren",
				content: "Klik hierop om naar een gedeelde map te zoeken."
			},{
				type: "name",
				title: "Toegang via Gasten netwerk toestaan",
				content: "Selecteer deze optie als u clients in het Gasten netwerk toegang tot de gedeelde mappen wil geven."
			},{
				type: "name",
				title: "Verificatie inschakelen",
				content: "Selecteer deze optie als gebruikers een geldige gebruikersnaam en wachtwoord moeten invoeren om toegang tot de gedeelde mappen te krijgen."
			},{
				type: "name",
				title: "Schrijftoegang inschakelen",
				content: "Selecteer deze optie als u gebruikers wilt toestaan wijzigingen in de inhoud van de map aan te brengen."
			},{
				type: "name",
				title: "Media delen inschakelen",
				content: "Selecteer deze optie om het delen van media in te schakelen."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Print server",
			CONTENT: [{
				type: "name",
				title: "Print server",
				content: "Zet deze optie aan om de Print server functie in te schakelen."
			},{
				type: "name",
				title: "Naam printer",
				content: "Toont de naam van de printer die met de router verbonden is."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Ouderlijk toezicht",
			CONTENT: [{
				type: "name",
				title: "Ouderlijk toezicht",
				content: "Zet Aan om de functie Ouderlijke toezicht in te schakelen. Deze functie is standaard uitgeschakeld."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Apparaten onder ouderlijk toezicht",
			CONTENT: [{
				type: "paragraph",
				content: "Toont een lijst van de apparaten die onder ouderlijk toezicht staan."
			},{
				type: "name",
				title: "Naam apparaat",
				content: "Toont de naam van alle verbonden client apparaten die momenteel onder ouderlijk toezicht staan."
			},{
				type: "name",
				title: "MAC-adres",
				content: "Toont het MAC-adres van alle verbonden client apparaten die momenteel onder ouderlijk toezicht staan."
			},{
				type: "name",
				title: "Internet toegangstijd",
				content: "Toont de beperkte toegangstijden. Het tijdschema wordt van kracht op basis van de systeemtijd van de router, die kan worden ingesteld in \"Systeemfuncties-> Tijd instellingen\"."
			},{
				type: "name",
				title: "Beschrijving",
				content: "Een korte beschrijving van het verbonden apparaat. Dit betreft een optionele instelling."
			},{
				type: "name",
				title: "Status",
				content: "Toont de huidige status (in- of uitgeschakeld) van ouderlijk toezicht voor het desbetreffende apparaat."
			},{
				type: "name",
				title: "Wijzigen",
				content: "Toont opties voor het Wijzigen of Verwijderen van het desbetreffende apparaat."
			},{
				type: "step",
				title: "Beperkingen opleggen aan een nieuw client apparaat",
				content:[
					"1. Klik op Toevoegen.",
					"2. Klik op Aanwezige apparaten bekijken en kies een momenteel verbonden apparaat in de Apparatenlijst; of voer Naam apparaat en het MAC-adres handmatig in om een apparaat toe te voegen dat niet verbonden is.",
					"3. Klik op het symbool Internet toegangstijd om een periode op te geven waarvoor de beperking geldt.",
					"4. Typ een korte beschrijving in het veld  Beschrijving. (Optioneel)",
					"5. Selecteer Inschakelen.",
					"6. Klik op OK."
				]
			},{
				type: "paragraph",
				content: "Om een Ouderlijk toezicht item te wijzigen of verwijderen, klikt u op het symbool Wijzigen om de gegevens te wijzigen, of Verwijderen om het desbetreffende item te verwijderen."
			},{
				type: "paragraph",
				content: "Om meerdere items te verwijderen, selecteert u alle items en klikt u op Verwijderen boven de tabel."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Gastnetwerk",
			CONTENT: [{
				type: "paragraph",
				content: "Gasten netwerk biedt de mogelijkheid een afzonderlijk netwerk met een eigen draadloos netwerk naam (SSID) en wachtwoord in te stellen, dat gasten kunnen gebruiken om toegang tot uw draadloze netwerk te krijgen."
			},{
				type: "name",
				title: "Gasten mogen elkaar zien",
				content: "Selecteer dit keuzevakje om toe te staan dat de draadloze apparaten in het Gasten netwerk elkaar kunnen zien."
			},{
				type: "name",
				title: "Geef gasten toegang tot mijn lokale netwerk",
				content: "Selecteer dit keuzevakje om de draadloze apparaten in het Gasten netwerk toegang te geven tot gedeelde mappen en printers in uw lokale netwerk."
			},{
				type: "name",
				title: "Gastnetwerk inschakelen",
				content: "Selecteer dit keuzevakje om een Gasten netwerk in te schakelen."
			},{
				type: "name",
				title: "Naam draadloos netwerk (SSID)",
				content: "Gebruik het standaard gasten SSID of voer een nieuwe naam in (max. 32 tekens)."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Selecteer dit vakje als u het gasten SSID niet in de Wi-Fi netwerklijst wilt weergeven."
			},{
				type: "name",
				title: "Wachtwoord",
				content: "Gebruik het wachtwoord dat willekeurig wordt gegenereerd, of voer een wachtwoord in van 8 t/m 63 ASCII tekens, of 8 t/m 64 hexadecimale tekens (0-9, a-f, A-F)."
			},{
				type:"paragraph",
				content:"Klik op Opslaan om alle instellingen op te slaan."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"TP-Link Cloud service staat u toe om op afstand uw netwerk te monitoren in echte tijd, uw TP-Link apparaten te benaderen en te beheren vanaf het internet wanneer en waar ook."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Account informatie",
			CONTENT:[{
				type:"paragraph",
				content:"Toont informatie over uw TP-Link ID. U kunt de account informatie wijzigen door op het wijzigen icoon te klikken."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Apparaat informatie",
			CONTENT:[{
				type:"paragraph",
				content:"Geeft de apparaat informatie weer, inclusief het cloud account dat het apparaat beheert."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Accounts binden",
			CONTENT:[{
				type:"paragraph",
				content:"Deze tabel geeft alle cloud accountsd weer die momenteel gebonden zijn aan het apparaat."
			},{
				type:"step",
				title:"Om een gebruikers account te binden",
				content:["1. Klik op binden",
				"2. Voer een geregistreerd email in dat u wenst te binden.",
				"3. Klik op opslaan."]
			}]

		}

	};
})(jQuery);

