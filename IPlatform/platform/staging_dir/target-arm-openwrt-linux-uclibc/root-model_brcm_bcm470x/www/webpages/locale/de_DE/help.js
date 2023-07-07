(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Zeigt Informationen zu Ihrer WAN(Internet)-Verbindung an."
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "Die Hardwareadresse des Internet(WAN)-Ports Ihres Routers."
			},{
				type: "name",
				title: "IP-Adresse",
				content: "Die öffentliche IP-Adresse Ihres Routers. Lautet diese 0.0.0.0, hat Ihr Router keine Internetverbindung."
			},{
				type: "name",
				title: "Subnetzmaske",
				content: "Zeigt an, welcher Teil Ihrer IP-Adresse das Netz und welcher den Host identifiziert. Standardwert: 255.255.255.0."
			},{
				type: "name",
				title: "Standardgateway",
				content: "Die IP-Adresse, über die Ihr Router den Weg ins Internet findet."
			},{
				type: "name",
				title: "Haupt-DNS-Server/Backup-DNS-Server",
				content: "Der Domänennamenservice (DNS) wandelt Hostnamen/Domänennamen in IP-Adressen um. Deren Adressen bekommt Ihr Router automatisch von Ihrem Internetdiensteanbieter mitgeteilt."
			},{
				type: "name",
				title: "Verbindungstyp",
				content: "Der Verbindungstyp des Internet(WAN)-Ports."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "Die Hardwareadresse des Internet(WAN)-Ports Ihres Routers."
			},{
				type: "name",
				title: "IP-Adresse",
				content: "Die öffentliche IPv6-Adresse Ihres Routers."
			},{
				type: "name",
				title: "Standardgateway",
				content: "Die IP-Adresse, über die Ihr Router den Weg ins Internet findet."
			},{
				type: "name",
				title: "Haupt-DNS-Server/Backup-DNS-Server",
				content: "Der Domänennamenservice (DNS) wandelt Hostnamen/Domänennamen in IP-Adressen um. Deren Adressen bekommt Ihr Router automatisch von Ihrem Internetdiensteanbieter mitgeteilt."
			},{
				type: "name",
				title: "Verbindungstyp",
				content: "Der Verbindungstyp des Internet(WAN)-Ports."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "WLAN",
			CONTENT: [{
				type: "paragraph",
				content: "Zeigt Informationen zu Ihrem WLAN an."
			},{
				type: "name",
				title: "WLAN-Name (SSID)",
				content: "Der Name Ihres WLANs, auch als SSID (Service Set Identifier) bekannt."
			},{
				type: "name",
				title: "WLAN aktivieren",
				content: "Aktueller WLAN-Status (Ein oder Aus)."
			},{
				type: "name",
				title: "Modus",
				content: "Aktueller WLAN-Modus."
			},{
				type: "name",
				title: "Kanalbreite",
				content: "Die Bandbreite, die Ihr WLAN belegt."
			},{
				type: "name",
				title: "Kanal",
				content: "Der aktuell verwendete WLAN-Kanal und die zugehörige Frequenz (in GHz)."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "Die Hardwareadresse der WLAN-Einheit Ihres Routers."
			},{
				type: "name",
				id: "status_wds",
				title: "WDS-Status",
				content: "Zeigt an, ob WDS aktiv ist."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Zeigt Informationen zu Ihrer LAN-Verbindung an."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "Die Hardwareadresse der LAN-Ports Ihres Routers."
			},{
				type: "name",
				title: "IP-Adresse",
				content: "Die LAN-IPv4-Adresse des Routers."
			},{
				type: "name",
				title: "Subnetzmaske",
				content: "Zeigt an, welcher Teil Ihrer IP-Adresse das Netz und welcher den Host identifiziert. Standardwert: 255.255.255.0."
			},{
				type: "name",
				title: "DHCP",
				content: "Zeigt an, ob der DHCP-Dienst Ihres Routers aktiv ist."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "Die Hardwareadresse der LAN-Ports Ihres Routers."
			},{
				type: "name",
				title: "IP-Adresse",
				content: "Die LAN-IPv6-Adresse des Routers."
			},{
				type: "name",
				title: "Link-lokale Adresse",
				content: "IPv6-Link-Adresse des LAN-Ports."
			},{
				type: "name",
				title: "Zugewiesener Typ",
				content: "Der IPv6-Adresstyp der LAN-Schnittstelle."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Gastnetz",
			CONTENT: [{
				type: "paragraph",
				content: "Zeigt Informationen zum Gast-WLAN an."
			},{
				type: "name",
				title: "WLAN-Name (SSID)",
				content: "Der Name (SSID) Ihres Gastnetzes."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Zeigt an, ob Ihr Gast-WLAN versteckt ist."
			},{
				type: "name",
				title: "WLAN aktivieren",
				content: "Aktueller Gast-WLAN-Status (Ein oder Aus)."
			},{
				type: "name",
				title: "Gäste dürfen einander sehen",
				content: "Zeigt, ob die Geräte in Ihrem Gast-WLAN miteinander kommunizieren können."
			}]
		},
		STATUS_USB: {
			TITLE: "USB-Geräte",
			CONTENT: [{
				type: "paragraph",
				content: "Zeigt Informationen zu den aktuell angeschlossenen USB-Geräten (Speichermedien oder Drucker) an."
			},{
				type: "name",
				title: "Drucker",
				content: "Name des angeschlossenen Druckers."
			},{
				type: "name",
				title: "USB-Datenträger",
				content: "Name des angeschlossenen USB-Datenträgers."
			},{
				type: "name",
				title: "Gesamt",
				content: "Die Gesamtkapazität des angeschlossenen USB-Datenträgers."
			},{
				type: "name",
				title: "Verfügbar",
				content: "Der freie Speicherplatz auf dem angeschlossenen USB-Datenträger."
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Performance",
			CONTENT: [{
				type: "paragraph",
				content: "Zeigt Informationen zur aktuellen Routerperformance."
			},{
				type: "name",
				title: "CPU-Last",
				content: "Die aktuelle Prozessorauslastung."
			},{
				type: "name",
				title: "Speichernutzung",
				content: "Aktuelle Arbeitsspeicherbelegung."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Kabelgebundene Teilnehmer",
			CONTENT: [{
				type: "paragraph",
				content: "Zeigt Informationen zu den angeschlossenen Ethernetgeräten an."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "WLAN-Teilnehmer",
			CONTENT: [{
				type: "paragraph",
				content: "Zeigt Informationen zu den verbundenen WLAN-Geräten an."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Internetverbindungstyp: Statische IP-Adresse"
			},{
				type: "paragraph",
				content: "Wählen Sie dies aus, wenn Ihr Internetdiensteanbieter Ihnen eine statische IP-Konfiguration bereitgestellt hat (bestehend aus IP-Adresse, Subnetzmaske, Gateway- und DNS-Serveradresse(n))."
			},{
				type: "name",
				title: "IP-Adresse, Subnetzmaske, Standardgateway, Haupt-/Backup-DNS-Server",
				content: "Geben Sie hier die von Ihrem Internetdiensteanbieter vorgegebenen Werte ein."
			},{
				type: "name",
				title: "MTU-Größe",
				content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1500 Byte. Wir empfehlen, diese nicht zu ändern, es sei denn, Sie wurden angewiesen, dies zu tun."
			},{
				type: "title",
				title: "Internetverbindungstyp: Dynamische IP-Adresse"
			},{
				type: "paragraph",
				content: "Wählen Sie diesen Typ aus, wenn Ihr Internetdiensteanbieter Ihnen Ihre IP-Adresse über DHCP bereitstellt."
			},{
				type: "name",
				title: "IP-Adresse, Subnetzmaske, Standardgateway, Haupt-/Backup-DNS-Server",
				content: "Diese Informationen werden vom DHCP-Server Ihres Internetdiensteanbieters automatisch gesetzt."
			},{
				type: "name",
				title: "Erneuern",
				content: "Klicken Sie hier, um Ihre IP-Konfiguration zu erneuern."
			},{
				type: "name",
				title: "Zurückgeben",
				content: "Klicken Sie hier, um Ihre aktuelle IP-Konfiguration zurückzugeben."
			},{
				type: "name",
				title: "Folgende DNS-Serveradressen benutzen",
				content: "Bietet Ihr Internetdiensteanbieter DNS-Serveradressen, setzen Sie hier einen Haken und geben Sie sie hier ein. Ansonsten werden die Adressen automatisch zugewiesen."
			},{
				type: "name",
				title: "MTU-Größe",
				content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1500 Byte. Wir empfehlen, diese nicht zu ändern, es sei denn, Sie wurden angewiesen, dies zu tun."
			},{
				type: "name",
				title: "Hostname",
				content: "Der Wert, den Sie hier eingeben, spezifiziert den Hostnamen Ihres Routers."
			},{
				type: "name",
				title: "IP-Konfiguration mittels Unicast abfragen",
				content: "Wählen Sie diese Option, wenn der DHCP-Server Ihres Internetdiensteanbieters keine Broadcastanwendungen unterstützt und Sie daher keine IP-Konfiguration bekommen (wird selten benötigt)."
			},{
				type: "title",
				title: "Internetverbindungstyp: PPPoE"
			},{
				type: "paragraph",
				content: "Wählen Sie diesen Typ aus, wenn Sie DSL haben und hierfür einen Benutzernamen und ein Passwort von Ihrem Internetdiensteanbieter bekommen haben."
			},{
				type: "name",
				title: "Benutzername/Passwort",
				content: "Geben Sie hier die von Ihrem Internetdiensteanbieter vorgegebenen Zugangsdaten ein. Achten Sie hier auf Groß- und Kleinschreibung."
			},{
				type: "name",
				title: "IP-Adresse/Haupt-DNS-Server/Backup-DNS-Server",
				content: "Diese Parameter werden bei der Einwahl automatisch eingestellt."
			},{
				type: "name",
				title: "Zweitverbindung (Keine, Dynamische IP-Adresse, Statische IP-Adresse)",
				children: [{
					type: "name",
					title: "Nicht vorhanden",
					content: "Wählen Sie dies aus, wenn Sie keine Zweitverbindung verwenden."
				},{
					type: "name",
					title: "Dynamische IP-Adresse",
					content: "Wählen Sie dies aus, wenn IP-Adresse und Subnetzmaske von Ihrem Internetdiensteanbieter automatisch vergeben werden.",
					children: [{
						type: "name",
						title: "Erneuern",
						content: "Klicken Sie hier, um Ihre IP-Konfiguration zu erneuern."
					},{
						type: "name",
						title: "Zurückgeben",
						content: "Klicken Sie hier, um Ihre aktuelle IP-Konfiguration zurückzugeben."
					}]
				},{
					type: "name",
					title: "Statische IP-Adresse",
					content: "Wählen Sie dies aus, sofern Sie Ihre Konfiguration von Ihrem Internetdiensteanbieter von Hand eintragen müssen."
				}]
			},{
				type: "name",
				title: "MTU-Größe",
				content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1480 Byte.",
				children: [{
					type: "note",
					title: "Hinweis",
					content: "In seltenen Fällen muss dieser Wert angepasst werden. Wir empfehlen, dies nicht zu tun, solange Ihr Internetdiensteanbieter dies Ihnen nicht vorschreibt."
				}]
			},{
				type: "name",
				title: "Dienstname/AC-Name",
				content: "Diese Felder können frei bleiben, wenn Ihr Internetdiensteanbieter Ihnen nichts Anderslautendes sagt."
			},{
				type: "name",
				title: "Intervall für Online-Erkennung",
				content: "Geben Sie ein Intervall von 0 bis 120 Sekunden ein, in dem der Router den Access Concentrator erkennen soll. Standardwert: 10"
			},{
				type: "name",
				title: "IP-Adresse",
				content: "Bekommen Sie von Ihrem Internetdiensteanbieter eine feste IP-Adresse zugewiesen, wählen Sie Folgende IP-Adresse verwenden und geben Sie sie hier ein. Ansonsten wählen Sie IP-Adresse dynamisch abfragen."
			},{
				type: "name",
				title: "DNS-Serveradresse/Haupt-/Backup-DNS-Server",
				content: "Bekommen Sie von Ihrem Internetdiensteanbieter eine feste DNS-Serveradresse zugewiesen, wählen Sie Folgende DNS-Serveradresse(n) verwenden und geben Sie sie hier ein. Ansonsten wählen Sie DNS-Serveradresse dynamisch abfragen."
			},{
				type: "name",
				title: "Verbindungsmodus",
				content: "Wählen Sie hier den von Ihnen gewünschten Internetverbindungsmodus aus.",
				children: [{
					type: "name",
					title: "Automatisch",
					content: "Automatische Wiederverbindung, wenn die Internetverbindung getrennt wird."
				},{
					type: "name",
					title: "Bei Bedarf",
					content: "Werden für eine gewisse Zeit (Maximale Leerlaufzeit) keine Internetdaten über Ihren Router übertragen, wird die Verbindung getrennt. Bei einer erneuten Verbindungsanfrage wird sie automatisch wiederhergestellt."
				},{
					type: "name",
					title: "Zeitbasierend",
					content: "Sie definieren eine Start- und eine Endzeit (im Format HH:MM). Zu diesen Zeitpunkten wird Ihre Internetverbindung hergestellt bzw. getrennt."
				},{
					type: "name",
					title: "Manuell",
					content: "Zum Herstellen und Trennen Ihrer Internetverbindung bedarf es eines Klicks in der Weboberfläche. Definieren Sie eine Maximale Leerlaufzeit, wird die Verbindung auch getrennt, wenn über dieses Zeitintervall keine Internetdaten durch Ihren Router gegangen sind. Standardwert hierfür: 15 Minuten. Deaktivieren Sie die Maximale Leerlaufzeit, indem Sie den Wert 0 setzen."
				},{
					type: "note",
					title: "Hinweis",
					content: "Die Zeitbasierende Verbindung funktioniert nur, wenn die Systemzeit unter Erweitert → Systemtools → Zeiteinstellungen konfiguriert ist."
				}]
			},{
				type: "title",
				title: "Internetverbindungstyp: BigPond-Cable"
			},{
				type: "paragraph",
				content: "Verwenden Sie diese Option für Bigpond-Cable-Anbieter."
			},{
				type: "name",
				title: "Benutzername/Passwort",
				content: "Geben Sie hier die von Ihrem Internetdiensteanbieter vorgegebenen Zugangsdaten ein. Achten Sie hier auf Groß- und Kleinschreibung."
			},{
				type: "name",
				title: "Authentifizierungsserver",
				content: "IP-Adresse oder Hostname des Authentifizierungsservers."
			},{
				type: "name",
				title: "Authentifizierungsdomäne",
				content: "Das Domänennamensuffix Ihres Standortes. Beispiel: nsw.bigpond.net.au für NSW/ACT, vic.bigpond.net.au für VIC/TAS/WA/SA/NT und qld.bigpond.net.au für QLD."
			},{
				type: "name",
				title: "MTU-Größe",
				content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1500 Byte. Wir empfehlen, diese nicht zu ändern, es sei denn, Sie wurden angewiesen, dies zu tun."
			},{
				type: "name",
				title: "Verbindungsmodus",
				content: "Wählen Sie hier den von Ihnen gewünschten Internetverbindungsmodus aus.",
				children: [{
					type: "name",
					title: "Automatisch",
					content: "Automatische Wiederverbindung, wenn die Internetverbindung getrennt wird."
				},{
					type: "name",
					title: "Bei Bedarf",
					content: "Werden für eine gewisse Zeit (Maximale Leerlaufzeit) keine Internetdaten über Ihren Router übertragen, wird die Verbindung getrennt. Bei einer erneuten Verbindungsanfrage wird sie automatisch wiederhergestellt."
				},{
					type: "name",
					title: "Manuell",
					content: "Zum Herstellen und Trennen Ihrer Internetverbindung bedarf es eines Klicks in der Weboberfläche. Definieren Sie eine Maximale Leerlaufzeit, wird die Verbindung auch getrennt, wenn über dieses Zeitintervall keine Internetdaten durch Ihren Router gegangen sind. Standardwert hierfür: 15 Minuten. Deaktivieren Sie die Maximale Leerlaufzeit, indem Sie den Wert 0 setzen."
				}]
			},{
				type: "title",
				title: "Internetverbindungstyp: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Wählen Sie diesen Typ, wenn Sie sich mit einem L2TP-/PPTP-VPN-Server verbinden möchten und mit Benutzernamen, Passwort und IP-Adresse/Domänennamen ausgestattet sind."
			},{
				type: "name",
				title: "Benutzername/Passwort",
				content: "Geben Sie hier die von Ihrem Internetdiensteanbieter vorgegebenen Zugangsdaten ein. Achten Sie hier auf Groß- und Kleinschreibung."
			},{
				type: "name",
				title: "IP-Adresse/Haupt-DNS-Server/Backup-DNS-Server",
				content: "Diese Parameter werden automatisch von Ihrem Internetdiensteanbieter zugewiesen."
			},{
				type: "name",
				title: "Zweitverbindung (Dynamische oder Statische IP-Adresse)",
				children: [{
					type: "name",
					title: "Dynamische IP-Adresse",
					content: "Wählen Sie dies aus, wenn IP-Adresse und Subnetzmaske von Ihrem Internetdiensteanbieter automatisch vergeben werden."
				},{
					type: "name",
					title: "Statische IP-Adresse",
					content: "Wählen Sie dies, wenn Sie IP-Adresse, Subnetzmaske, Standardgateway und DNS-Serveradressen von Ihrem Internetdiensteanbieter bekommen haben und geben Sie diese in die passenden Felder ein."
				}]
			},{
				type: "name",
				title: "IP-Adresse/Domänenname des VPN-Servers",
				content: "Geben Sie hier die Adresse des VPN-Servers ein, so wie Sie sie von Ihrem Internetdiensteanbieter erhalten haben."
			},{
				type: "name",
				title: "MTU-Größe",
				content: "Die Standard-MTU(Maximal Transmission Unit)-Größe für L2TP beträgt 1460B. Für PPTP 1420 Byte. Es wird empfohlen, diesen Wert nur bei Erfordernis zu ändern."
			},{
				type: "name",
				title: "Verbindungsmodus",
				content: "Wählen Sie hier den von Ihnen gewünschten Internetverbindungsmodus aus.",
				children: [{
					type: "name",
					title: "Automatisch",
					content: "Automatische Wiederverbindung, wenn die Internetverbindung getrennt wird."
				},{
					type: "name",
					title: "Bei Bedarf",
					content: "Werden für eine gewisse Zeit (Maximale Leerlaufzeit) keine Internetdaten über Ihren Router übertragen, wird die Verbindung getrennt. Bei einer erneuten Verbindungsanfrage wird sie automatisch wiederhergestellt."
				},{
					type: "name",
				title: "Manuell",
				content: "Zum Herstellen und Trennen Ihrer Internetverbindung bedarf es eines Klicks in der Weboberfläche. Definieren Sie eine Maximale Leerlaufzeit, wird die Verbindung auch getrennt, wenn über dieses Zeitintervall keine Internetdaten durch Ihren Router gegangen sind. Standardwert hierfür: 15 Minuten. Deaktivieren Sie die Maximale Leerlaufzeit, indem Sie den Wert 0 setzen."
				}]
			},{
				type:"paragraph",
				content:"Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "MAC-Adresse klonen",
			CONTENT: [{
				type: "name",
				title: "Standard-MAC-Adresse verwenden",
				content: "Standard-MAC-Adresse des Routers wiederherstellen."
			},{
				type: "name",
				title: "MAC-Adresse dieses Computers verwenden",
				content: "Hiermit kopieren Sie die MAC-Adresse Ihres Computers. Sinnvoll, wenn Ihr Computer bisher direkt an das Internet angeschlossen war (ohne Router) und Ihr Internetdiensteanbieter sich diese MAC-Adresse gemerkt hat."
			},{
				type: "name",
				title: "Benutzerdefinierte MAC-Adresse verwenden",
				content: "Geben Sie die gewünschte MAC-Adresse von Hand ein."
			},{
				type:"paragraph",
				content:"Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "MAC-Adresse",
				content: "Die Hardwareadresse der LAN-Ports Ihres Routers."
			},{
				type: "name",
				title: "IP-Adresse",
				content: "Zeigt die Standard-IP-Adresse des Routers, über die Sie sich in die Weboberfläche einloggen können. Kann überschrieben werden."
			},{
				type: "name",
				title: "Subnetzmaske",
				content: "Wählen Sie aus der Drop-Down-Liste eine Subnetzmaske aus oder geben Sie eine neue ein."
			},{
				type: "note",
				title: "Hinweis",
				content: "Befindet die neue LAN-IP-Adresse sich in einem anderen Subnetz als die alte, wird die Konfiguration des DHCP-Servers automatisch angepasst. Virtuelle Server und DMZ-Host müssen in diesem Fall hingegen neu konfiguriert werden."
			},{
				type:"paragraph",
				content:"Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		IPTV:{
			TITLE: "Einstellungen",
			CONTENT: [{
					type: "name",
					title: "IGMP-Proxy",
					content: "Wählen Sie die IGMP(Internet Group Management Protocol)-Proxy-Version aus (entweder V2 oder V3, Vorgabe Ihres Internetdiensteanbieters)."
				},{
					type: "name",
					title: "IGMP-Version",
					content: "IGMP-Proxy-Version auswählen, entweder V2 oder V3, je nach Vorgabe Ihres Internetdiensteanbieters."
				},
				{
					type: "name",
					title: "IPTV",
					content: "IPTV aktivieren."
				},
				{
					type: "name",
					title: "Modus",
					content: "Wählen Sie einen der sechs folgenden Modi gemäß den Vorgaben Ihres Anbieters aus:",
					children: [
						{
							type: "name",
							title: "Bridge",
							content:"Ist Ihr Internetdiensteanbieter nicht gelistet und keine weiteren Parameter vorgegeben, wählen Sie einfach diesen Modus aus und konfigurieren die LAN-Ports Ihres Routers.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Wählen Sie aus, ob ein LAN-Port für Internet oder für IPTV verwendet werden soll."
							}]
						},
						{
							type: "name",
							title: "Russland",
							content: "Wählen Sie diese Option, wenn Ihr Internetdienstanbieter wie in Russland die notwendigen Parameter wie Internet/IP-Phone/IPTV, VLAN-IDs und Priorität, sowie die Funktionen für die LAN-Anschlüsse 1/2/3/4, vorgibt.",
							children: [{
								type: "name",
								title: "IPTV-Multicast-VLAN-ID/Priorität",
								content: "Aktivieren Sie IPTV-Multicast und setzen Sie VLAN-ID und Priorität gemäß den Vorgaben Ihres Internetdiensteanbieters."
							}]
						},
						{
							type: "name",
							title: "Singapur-ExStream",
							content: "Wählen Sie dies für den singapurischen Anbieter \"ExStream\" mit vordefinierten Parametern: Internet/IP-Phone/IPTV-VLAN-IDs und Priorität. Konfigurieren Sie dann die LAN-Ports 1 bis 4."
						},
						{
							type: "name",
							title: "Malaysia-Unifi",
							content: "Wählen Sie dies für den malaysischen Anbieter \"Unifi\" mit vordefinierten Parametern: Internet/IP-Phone/IPTV-VLAN-IDs und Priorität. Konfigurieren Sie dann die LAN-Ports 1 bis 4."
						},
						{
							type: "name",
							title: "Malaysia-Maxis",
							content: "Wählen Sie dies für den malaysischen Anbieter \"Maxis\" mit vordefinierten Parametern: Internet/IP-Phone/IPTV-VLAN-IDs und Priorität. Konfigurieren Sie dann die LAN-Ports 1 bis 4."
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Wählen Sie dies, falls Ihr Internetdiensteanbieter MEO in Portugal ist und die notwendigen Parameter Internet-VLAN-ID und -Priorität sowie LAN(1/2/3/4)-Portfunktionen vorgegeben sind."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Wählen Sie dies, falls Ihr Internetdiensteanbieter Vodafone in Portugal ist und die notwendigen Parameter Internet-/IP-Telefon-/IPTV-VLAN-IDs sowie Priorität vorgegeben sind. Sie können die Funktionen der LAN-Ports gemäß Ihren Ansprüchen konfigurieren (Internet/IPTV/IP-Telefon/IPTV)."
						},
						{
							type: "name",
							title: "Benutzerdefiniert",
							content: "Wählen Sie dies, wenn Ihr Internetdiensteanbieter nicht in der Liste aufgeführt ist und Ihnen die erforderlichen Parameter vorliegen: Internet/IP-Phone/IPTV-VLAN-IDs und Priorität. Konfigurieren Sie dann die LAN-Ports 1 bis 4.",
							children: [{
								type: "name",
								title: "Internet/IP-Telefon/IPTV-VLAN-ID/Priorität",
								content: "Konfigurieren Sie die VLAN-IDs und -Prioritäten gemäß den Vorgaben Ihres Internetdiensteanbieters."
							},{
								type: "name",
								title: "802.11Q-Tag",
								content: "Bitte auswählen wenn die Internetpakete gemäß 802.11Q getaggt werden sollen."
							},{
								type: "name",
								title: "IPTV-Multicast-VLAN-ID/Priorität",
								content: "Aktivieren Sie IPTV-Multicast und setzen Sie VLAN-ID und Priorität gemäß den Vorgaben Ihres Internetdiensteanbieters."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Wählen Sie aus, ob ein LAN-Port für Internet oder für IPTV verwendet werden soll."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Einstellungen",
			CONTENT: [{
				type: "name",
				title: "DHCP-Server",
				content: "Standardmäßig ist der DHCP(Dynamic Host Configuration Protocol)-Server aktiviert. Dann weist er den Clients im Netz die TCP/IP-Konfigurationen automatisch zu. IP-Adressen werden dabei aus dem IP-Adresspool vergeben. Deaktivieren Sie den DHCP-Server nicht, wenn Sie keinen anderen aktiven DHCP-Server im Netz haben und Sie Ihre IP-Konfigurationen nicht alle von Hand vornehmen möchten."
			},{
				type: "name",
				title: "IP-Adresspool",
				content: "Geben Sie den IP-Adressbereich an, der für DHCP-Clients reserviert werden soll."
			},{
				type: "name",
				title: "Adresshaltezeit",
				content: "Geben Sie die Dauer an, für die ein Client seine IP-Konfiguration behalten kann (1 bis 2880 Minuten, Standardwert: 120 Minuten)."
			},{
				type: "name",
				title: "Standardgateway",
				content: "Geben Sie hier die LAN-IP-Adresse ein (optional)."
			},{
				type: "name",
				title: "Haupt-DNS-Server/Backup-DNS-Server",
				content: "(optional) Hier können Sie DNS-Serveradressen eingeben."
			},{
				type:"paragraph",
				content:"Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Adressreservierung",
			CONTENT: [{
				type: "paragraph",
				content: "Sie können IP-Adressen von mit dem Routern verbundenen Geräten reservieren. Eine reservierte IP-Adresse wird nur dem Gerät zugewiesen, dem sie zugeordnet ist."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "MAC-Adresse des Gerätes, für das eine IP-Adresse reserviert ist."
			},{
				type: "name",
				title: "Reservierte IP-Adresse",
				content: "Die IP-Adresse, die für dieses Gerät reserviert ist."
			},{
				type: "name",
				title: "Beschreibung",
				content: "Eine frei wählbare Beschreibung für das Gerät (z.B. Blu-ray-Player)."
			},{
				type: "name",
				title: "Status",
				content: "Aktueller Status (aktiviert oder deaktiviert) des Gerätes."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Optionen zum Löschen oder Bearbeiten eines Eintrags."
			},{
				type: "step",
				title: "So reservieren Sie eine IP-Adresse:",
				content:[
					"1. Klicken Sie Hinzufügen.",
					"2. Geben Sie die MAC-Adresse des betreffenden Gerätes ein.",
					"3. Geben Sie die zu reservierende IP-Adresse ein.",
					"4. Vergeben Sie eine kurze Beschreibung, damit Sie den Eintrag wiedererkennen können.",
					"5. Wählen Sie Aktivieren.",
					"6. Klicken Sie OK."
				]
			},{
				type: "step",
				title: "Bearbeiten oder Löschen eines Eintrages",
				content: "Klicken Sie in der Zeile des Gerätes Bearbeiten oder Löschen."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "DHCP-Clientliste",
			CONTENT: [{
				type: "name",
				title: "Clientanzahl",
				content: "Laufende Nummer des DHCP-Clients."
			},{
				type: "name",
				title: "Clientname",
				content: "Hostname des DHCP-Clients."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "MAC-Adresse des DHCP-Clients."
			},{
				type: "name",
				title: "Zugewiesene IP-Adresse",
				content: "Die IP-Adresse, die dem DHCP-Client zugewiesen wurde."
			},{
				type: "name",
				title: "Adresshaltezeit",
				content: "Die verbleibende Zeit, die der Client seine IP-Konfiguration behalten kann."
			},{
				type: "name",
				title: "Neu laden",
				content: "Ansicht der DHCP-Clientliste aktualisieren."
			}]
		},

		DDNS: {
			TITLE: "Dynamisches DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamisches DNS (Dynamisches Domänennamensystem) ordnet Ihre dynamische Internet IP-Adresse einem festen, unveränderlichen Hostnamen zu. Dies ist hilfreich, wenn Sie in Ihrem lokalen Netz einen Server (z.B. FTP) betreiben. Hierfür müssen Sie sich zunächst bei einem DDNS-Anbieter wie <a href='http://www.dyndns.com'>www.dyndns.com</a> anmelden."
			},{
				type: "step",
				title: "So richten Sie Dynamisches DNS ein:",
				content: [
					"1. Wählen Sie den DDNS-Anbieter, bei dem Sie sich registriert haben, aus.",
					"2. Geben Sie Benutzernamen und Passwort Ihres DDNS-Kontos ein.",
					"3. Geben Sie Ihren beim DDNS-Anbieter registrierten Domänennamen ein.",
					"4. Wählen Sie das DDNS-Aktualisierungsintervall aus.",
					"5. Haben Sie No-IP gewählt, aktivieren Sie WAN-IP-Binding, um sicherzustellen, dass der Domänenname mit der WAN-IP-Adresse Ihres Routers assoziiert ist.",
					"6. Klicken Sie Einloggen und Speichern."
				]
			},{
				type: "note",
				title:"Hinweis",
				content: "Benutzen Sie bereits ein DDNS-Konto, so loggen Sie sich bitte zunächst aus diesem aus, bevor Sie das neue verwenden."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "Dynamisches DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamisches DNS (Dynamisches Domänennamensystem) ordnet Ihre dynamische Internet IP-Adresse einem festen, unveränderlichen Hostnamen zu. Dies ist hilfreich, wenn Sie in Ihrem lokalen Netz einen Server (z.B. FTP) betreiben. Hierfür müssen Sie sich zunächst bei einem DDNS-Anbieter wie <a href='http://www.dyndns.com'>www.dyndns.com</a> anmelden."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Liste der Domänennamen",
			CONTENT: [{
				type: "paragraph",
				content: "Diese Tabelle zeigt die mit Ihrer TP-Link-ID assoziierten Dynamic-DNS-Domänennamen."
			},{
				type:"step",
				title: "Registrierung eines neuen Domänennamens",
				content: [
					"1. Klicken Sie Registrieren.",
					"2. Geben Sie den Domänennamen ein.",
					"3. Klicken Sie Speichern."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Statisches Routing",
			CONTENT: [{
				type: "paragraph",
				content: "Statisches Routing legt eine Route fest, die Datenpakete gehen müssen, um ihr Ziel zu erreichen."
			},{
				type: "step",
				title: "Einrichtung des Statischen Routings",
				content: [
					"1. Klicken Sie Hinzufügen.",
					"2. Zielnetz - Geben Sie eine Zielnetzadresse ein.",
					"3. Subnetzmaske - Geben Sie die Subnetzmaske des Zielnetzes ein.",
					"4. Standardgateway - Geben Sie die IP-Adresse des Gateways ein, über den das Zielnetz zu erreichen ist.",
					"5. Schnittstelle - Wählen Sie LAN oder WAN, um die für das Zielnetz zu verwendende Schnittstelle zu definieren.",
					"6. Beschreibung - Eine kurze Beschreibung für diesen Eintrag.",
					"7. Wählen Sie Aktivieren.",
					"8. Klicken Sie OK."
				]
			},{
				type: "step",
				title: "Bearbeiten oder Löschen eines Eintrages",
				content: "Klicken Sie in der Tabelle Bearbeiten oder Löschen, um einen Eintrag zu bearbeiten oder zu löschen."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Systemroutingtabelle",
			CONTENT: [{
				type: "paragraph",
				content: "Die Systemroutingtabelle zeigt alle aktuell verwendeten gültigen Routen an."
			},{
				type: "paragraph",
				content: "Klicken Sie Neu laden, um die Ansicht der Routingtabelle zu aktualisieren."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Einstellungen",
			CONTENT: [{
				type: "name",
				title: "Standort",
				content: "Wählen Sie aus der Drop-Down-Liste den Standort des Routers aus. Ist Ihr Standort nicht aufgeführt, wenden Sie sich an die zuständigen Behörden, um zu klären, ob der WLAN-Betrieb erlaubt ist."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "2,4GHz-WLAN",
			CONTENT: [{
				type: "name",
				title: "WLAN aktivieren",
				content: "2,4GHz-WLAN aktivieren."
			},{
				type: "name",
				title: "WLAN-Name (SSID)",
				content: "Sie können die Standard-SSID belassen oder einen eigenen Namen vergeben (max. 32 Zeichen lang). Hier wird zwischen Groß- und Kleinschreibung unterschieden."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Wählen Sie diese Option, um Ihr 2,4GHz-WLAN zu verstecken."
			},{
				type: "name",
				title: "Sicherheit",
				content: "Wählen Sie hier eine der folgenden Optionen:",
				children: [{
					type: "name",
					title: "Nicht vorhanden",
					content: "Hiermit deaktivieren Sie Ihre WLAN-Verschlüsselung. Es wird wärmstens empfohlen, Ihr WLAN nur verschlüsselt zu betreiben."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "(empfohlen) Authentifizierung basierend auf einem Passwort (PSK). Bitte beachten Sie die weiteren auszufüllenden Felder für diese Option.",
					children: [{
						type: "name",
						title: "Version",
						content: "Sicherheitsversion Ihres WLANs.",
						children: [{
							type: "name",
							title: "Automatisch",
							content: "Wählt automatisch zwischen WPA und WPA2, je nach Fähigkeiten des Clientgerätes."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "WPA-PSK, recht sicher."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "WPA2-PSK, besser als WPA-PSK (empfohlen)."
						}]
					},{
						type: "name",
						title: "Verschlüsselung",
						content: "Sie haben die Wahl zwischen TKIP (Temporal Key Integrity Protocol) und AES (Advanced Encryption Standard). Die Option Automatisch nimmt Ihnen diese Wahl ab. TKIP wird NICHT empfohlen, wenn Ihr Router im 802.11n-Modus läuft, da TKIP in der 802.11n-Spezifikation nicht vorgesehen ist. Ist TKIP gewählt, funktioniert zudem kein WPS."
					},{
						type: "name",
						title: "Passwort",
						content: "Geben Sie ein aus 8 bis 63 ASCII- oder 8 bis 64 Hexadezimal-Zeichen bestehendes Passwort ein."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Enterprise",
					content: "Professionelle Authentifizierungsmethode, die einen RADIUS(Remote Authentication Dial In User Service)-Server benutzt. Ist dies aktiviert, wird vom Router kein WPS unterstützt.",
					children: [{
						type: "name",
						title: "Version",
						content: "Sicherheitsversion Ihres WLANs.",
						children:[{
							type: "name",
							title: "Automatisch",
							content: "Wählt automatisch zwischen WPA und WPA2, je nach Fähigkeiten des Clientgerätes."
						},{
							type: "name",
							title: "WPA",
							content: "WPA-PSK, recht sicher."
						},{
							type: "name",
							title: "WPA2",
							content: "WPA2-PSK, besser als WPA-PSK (empfohlen)."
						}]
					},{
						type: "name",
						title: "Verschlüsselung",
						content: "Sie haben die Wahl zwischen TKIP (Temporal Key Integrity Protocol) und AES (Advanced Encryption Standard). Die Option Automatisch nimmt Ihnen diese Wahl ab. TKIP wird NICHT empfohlen, wenn Ihr Router im 802.11n-Modus läuft, da TKIP in der 802.11n-Spezifikation nicht vorgesehen ist. Ist TKIP gewählt, funktioniert zudem kein WPS."
					},{
						type: "name",
						title: "IP-Adresse des RADIUS-Servers",
						content: "Geben Sie hier die IP-Adresse des Authentifizierungsservers ein."
					},{
						type: "name",
						title: "RADIUS-Port",
						content: "Nummer des Ports, auf dem der RADIUS-Dienst läuft."
					},{
						type: "name",
						title: "RADIUS-Passwort",
						content: "Das Passwort, mit dem Sie sich am RADIUS-Server authentifizieren müssen."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "(nicht empfohlen) Wählen Sie diese veraltete Authentifizierungsmethode nur dann aus, wenn Ihre WLAN-Geräte kein WPA(2) unterstützen.",
					children: [{
						type: "name",
						title: "Typ",
						content: "Wählen Sie einen Authentifizierungstyp für Ihr WLAN. Standardwert ist Automatisch, wodurch automatisch zwischen Offen und Shared-Key gewählt wird."
					},{
						type: "name",
						title: "WEP-Schlüsselformat",
						content: "Entweder ASCII oder Hexadezimal. ASCII erlaubt alle ASCII-Zeichen, während Hexadezimal nur Hexadezimalzeichen (0..9, a..f) unterstützt."
					},{
						type: "name",
						title: "Schlüsseltyp",
						content: "Die Länge des WEP-Schlüssels.",
						children: [{
							type: "name",
							title: "64 Bit",
							content: "Benötigt 10 Hexadezimal- oder 5 ASCII-Zeichen."
						},{
							type: "name",
							title: "128 Bit",
							content: "Benötigt 26 Hexadezimal- oder 13 ASCII-Zeichen."
						}]
					},{
						type: "name",
						title: "Schlüssel",
						content: "Geben Sie hier den WEP-Schlüssel ein."
					}]
				}]
			},{
				type: "name",
				title: "Modus",
				content: "Wählen Sie einen Übertragungsmodus aus."
			},{
				type: "name",
				title: "Kanalbreite",
				content: "Die von Ihrem 2,4GHz-WLAN verwendete Bandbreite pro Kanal."
			},{
				type: "name",
				title: "Kanal",
				content: "Wählen Sie den zu verwendenden 2,4GHz-Kanal aus. Es wird empfohlen, die Standardeinstellung (Auto) beizubehalten, sofern keine anderen Gründe dagegensprechen."
			},{
				type: "name",
				title: "Sendeleistung",
				content: "Wählen Sie zwischen Hoch, Mittel oder Niedrig. Der Standardwert ist Hoch (empfohlen)."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "5GHz-WLAN",
			CONTENT: [{
				type: "name",
				title: "WLAN aktivieren",
				content: "5GHz-WLAN aktivieren."
			},{
				type: "name",
				title: "WLAN-Name (SSID)",
				content: "Siekönnen die Standard-SSID belassen oder einen eigenen Namen vergeben (max. 32 Zeichen lang). Hier wird zwischen Groß- und Kleinschreibung unterschieden."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Wählen Sie diese Option, um Ihr 5GHz-WLAN zu verstecken."
			},{
				type: "name",
				title: "Sicherheit",
				content: "Wählen Sie hier eine der folgenden Optionen:",
				children: [{
					type: "name",
					title: "Nicht vorhanden",
					content: "Hiermit deaktivieren Sie Ihre WLAN-Verschlüsselung. Es wird wärmstens empfohlen, Ihr WLAN nur verschlüsselt zu betreiben."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "(empfohlen) Authentifizierung basierend auf einem Passwort (PSK). Bitte beachten Sie die weiteren auszufüllenden Felder für diese Option.",
					children: [{
						type: "name",
						title: "Version",
						content: "Sicherheitsversion Ihres WLANs.",
						children: [{
							type: "name",
							title: "Automatisch",
							content: "Wählt automatisch zwischen WPA und WPA2, je nach Fähigkeiten des Clientgerätes."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "WPA-PSK, recht sicher."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "WPA2-PSK, besser als WPA-PSK (empfohlen)."
						}]
					},{
						type: "name",
						title: "Verschlüsselung",
						content: "Sie haben die Wahl zwischen TKIP (Temporal Key Integrity Protocol) und AES (Advanced Encryption Standard). Die Option Automatisch nimmt Ihnen diese Wahl ab. TKIP wird NICHT empfohlen, wenn Ihr Router im 802.11n-Modus läuft, da TKIP in der 802.11n-Spezifikation nicht vorgesehen ist. Ist TKIP gewählt, funktioniert zudem kein WPS."
					},{
						type: "name",
						title: "Passwort",
						content: "Geben Sie ein aus 8 bis 63 ASCII- oder 8 bis 64 Hexadezimal-Zeichen bestehendes Passwort ein."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Enterprise",
					content: "Professionelle Authentifizierungsmethode, die einen RADIUS(Remote Authentication Dial In User Service)-Server benutzt. Ist dies aktiviert, wird vom Router kein WPS unterstützt.",
					children: [{
						type: "name",
						title: "Version",
						content: "Sicherheitsversion Ihres WLANs.",
						children: [{
							type: "name",
							title: "Automatisch",
							content: "Wählt automatisch zwischen WPA und WPA2, je nach Fähigkeiten des Clientgerätes."
						},{
							type: "name",
							title: "WPA",
							content: "WPA-PSK, recht sicher."
						},{
							type: "name",
							title: "WPA2",
							content: "WPA2-PSK, besser als WPA-PSK (empfohlen)."
						}]
					},{
						type: "name",
						title: "Verschlüsselung",
						content: "Sie haben die Wahl zwischen TKIP (Temporal Key Integrity Protocol) und AES (Advanced Encryption Standard). Die Option Automatisch nimmt Ihnen diese Wahl ab. TKIP wird NICHT empfohlen, wenn Ihr Router im 802.11n-Modus läuft, da TKIP in der 802.11n-Spezifikation nicht vorgesehen ist. Ist TKIP gewählt, funktioniert zudem kein WPS."
					},{
						type: "name",
						title: "IP-Adresse des RADIUS-Servers",
						content: "Geben Sie hier die IP-Adresse des Authentifizierungsservers ein."
					},{
						type: "name",
						title: "RADIUS-Port",
						content: "Nummer des Ports, auf dem der RADIUS-Dienst läuft."
					},{
						type: "name",
						title: "RADIUS-Passwort",
						content: "Das Passwort, mit dem Sie sich am RADIUS-Server authentifizieren müssen."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "(nicht empfohlen) Wählen Sie diese veraltete Authentifizierungsmethode nur dann aus, wenn Ihre WLAN-Geräte kein WPA(2) unterstützen.",
					children: [{
						type: "name",
						title: "Typ",
						content: "Wählen Sie einen Authentifizierungstyp für Ihr WLAN. Standardwert ist Automatisch, wodurch automatisch zwischen Offen und Shared-Key gewählt wird."
					},{
						type: "name",
						title: "WEP-Schlüsselformat",
						content: "Entweder ASCII oder Hexadezimal. ASCII erlaubt alle ASCII-Zeichen, während Hexadezimal nur Hexadezimalzeichen (0..9, a..f) unterstützt."
					},{
						type: "name",
						title: "Schlüsseltyp",
						content: "Die Länge des WEP-Schlüssels.",
						children:[{
							type: "name",
							title: "64 Bit",
							content: "Benötigt 10 Hexadezimal- oder 5 ASCII-Zeichen."
						},{
							type: "name",
							title: "128 Bit",
							content: "Benötigt 26 Hexadezimal- oder 13 ASCII-Zeichen."
						}]
					},{
						type: "name",
						title: "Schlüssel",
						content: "Geben Sie hier den WEP-Schlüssel ein."
					}]
				}]
			},{
				type: "name",
				title: "Modus",
				content: "Wählen Sie einen Übertragungsmodus aus."
			},{
				type: "name",
				title: "Kanalbreite",
				content: "Die von Ihrem 5GHz-WLAN verwendete Bandbreite pro Kanal."
			},{
				type: "name",
				title: "Kanal",
				content: "Wählen Sie den zu verwendenden 5GHz-Kanal aus. Es wird empfohlen, die Standardeinstellung (Auto) beizubehalten, sofern keine anderen Gründe dagegensprechen."
			},{
				type: "name",
				title: "Sendeleistung",
				content: "Wählen Sie zwischen Hoch, Mittel oder Niedrig. Der Standardwert ist Hoch (empfohlen)."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		WPS: {	
			TITLE: "Router-PIN",
			CONTENT: [{
				type: "paragraph",
				content: "Sie können Ihre WLAN-Geräte unter Verwendung der WPS-PIN des Routers mit Ihrem WLAN verbinden."
			},{
				type: "name",
				title: "Router-PIN",
				content: "Erlauben, dass Geräte sich mittels Router-PIN-Eingabe mit Ihrem WLAN verbinden."
			},{
				type: "name",
				title: "PIN",
				content: "Die WPS-PIN des Routers. Die Standard-PIN kann auf dem Aufkleber auf dem Gerät gefunden werden. Klicken Sie Erzeugen, um eine neue PIN zu errechnen und Standard-PIN, um die Original-PIN wiederherzustellen."
			}]
		},

		WPS_WIZARD: {
			TITLE: "WPS-Assistent",
			CONTENT:[{
				type: "name",
				title: "Tastendruck (empfohlen)",
				content: "Erlauben, dass Geräte sich mittels WPS-Tastendruck verbinden (empfohlen)."
			},{
				type: "name",
				title: "PIN",
				content: "Wählen Sie diese Methode, um ein Gerät mittels Eingabe von dessen PIN in den Router, gefolgt von einem Klick auf Verbinden, mit dem WLAN zu verbinden."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Verbundene WLAN-Geräte",
			CONTENT: [{
				type: "name",
				title: "Clientanzahl",
				content: "Laufende Nummer des WLAN-Clients."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "Die MAC-Adresse des WLAN-Gerätes"
			},{
				type: "name",
				title: "Verbindungstyp",
				content: "Zeigt an, ob das Gerät über 2,4 oder 5GHz verbunden ist."
			},{
				type: "name",
				title: "Sicherheit",
				content: "Vom WLAN-Client verwendeter Sicherheitstyp."
			},{
				type: "name",
				title: "Empfangene Pakete",
				content: "Anzahl der vom Gerät empfangenen IP-Pakete."
			},{
				type: "name",
				title: "Gesendete Pakete",
				content: "Anzahl der vom Gerät gesendeten IP-Pakete."
			},{
				type: "paragraph",
				content: "Klicken Sie Aktualisieren, um die Informationen neu zu laden."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Einstellungen",
			CONTENT: [{
				type: "paragraph",
				content: "Errichten Sie ein Gast-WLAN, können Sie Ihre Gäste von Ihrem lokalen Netz fernhalten, indem diese einen anderen WLAN-Namen und ein anderes Passwort verwenden."
			},{
				type: "name",
				title: "Gäste dürfen einander sehen",
				content: "Aktivieren Sie dies, um alle Gastnetzteilnehmer einander sichtbar zu machen."
			},{
				type: "name",
				title: "Gästen Zugriff auf mein lokales Netz ermöglichen",
				content: "Gästen Zugriff auf lokale Ressourcen wie Netzfreigaben und Drucker gewähren."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "2,4GHz-/5GHz-WLAN",
			CONTENT: [{
				type: "name",
				title: "Gastnetz aktivieren",
				content: "Aktivieren des Gastnetzes."
			},{
				type: "name",
				title: "WLAN-Name (SSID)",
				content: "Gast-WLAN-Name, kann frei gewählt werden (1 bis 32 Zeichen)."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Hiermit können Sie Ihr Gast-WLAN unsichtbar machen."
			},{
				type: "name",
				title: "Sicherheit",
				content: "Haben Sie entschieden, dass das Passwort nie erneuert wird, wählen Sie eine der folgenden Sicherheitsoptionen:",
				children: [{
					type: "name",
					title: "Nicht vorhanden",
					content: "Hiermit deaktivieren Sie Ihre WLAN-Verschlüsselung. Es wird wärmstens empfohlen, Ihr Gast-WLAN nur verschlüsselt zu betreiben."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "Aktivieren der Standardauthentifizierung basierend auf einem Passwort (PSK). Dies ist die Standard-Verschlüsselungsmethode in Heim-WLANs und umfasst folgende Parameter:",
					children: [{
						type: "name",
						title: "Version",
						content: "Sicherheitsversion Ihres Gast-WLANs.",
						children: [{
							type: "name",
							title: "Automatisch",
							content: "Wählt automatisch zwischen WPA und WPA2, je nach Fähigkeiten des Clientgerätes."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "WPA-PSK, recht sicher."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "WPA2-PSK, besser als WPA-PSK (empfohlen)."
						}]
					},{
						type: "name",
						title: "Verschlüsselung",
						content: "Sie haben die Wahl zwischen TKIP (Temporal Key Integrity Protocol) und AES (Advanced Encryption Standard). Die Option Automatisch nimmt Ihnen diese Wahl ab. TKIP wird NICHT empfohlen, wenn Ihr Router im 802.11n-Modus läuft, da TKIP in der 802.11n-Spezifikation nicht vorgesehen ist. Ist TKIP gewählt, funktioniert zudem kein WPS."
					}]
			}]},{
				type: "name",
				title: "Passwort",
				content: "Hier haben Sie die Möglichkeit, ein eigenes Passwort aus 8 bis 63 ASCII-Zeichen oder 8 bis 64 Hexadezimalzeichen zu erstellen."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},

		NAT: {
			TITLE: "Applikation-Layer-Gateway (ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG erlaubt benutzerdefinierte NAT(Network Address Translation)-Filter, die den Betrieb von Anwendungen wie FTP, TFTP, H323 usw. ermöglichen. Es wird empfohlen, das ALG zu benutzen."
			},{
				type: "name",
				title: "FTP-ALG aktivieren",
				content: "Ermöglicht den Dateitransfer mittels FTP (File Transfer Protocol) durch Ihren NAT-Router."
			},{
				type: "name",
				title: "TFTP-ALG aktivieren",
				content: "Ermöglicht den Dateitransfer mittels TFTP (Trivial File Transfer Protocol) durch Ihren NAT-Router."
			},{
				type: "name",
				title: "H323-ALG aktivieren",
				content: "Ermöglicht Microsoft NetMeeting im NAT-Betrieb."
			},{
				type: "name",
				title: "RTSP-ALG aktivieren",
				content: "Erlaubt Windows-Mediaplayer-Clients, mit Streaming-Servern zu kommunizieren."
			},{
				type: "name",
				title: "PPTP-Passthrough aktivieren",
				content: "Erlaubt die Tunnelung von Punkt-zu-Punkt-Sitzungen durch IP-Netze."
			},{
				type: "name",
				title: "L2TP-Passthrough aktivieren",
				content: "Erlaubt die Tunnelung von Layer-2-Punkt-zu-Punkt-Sitzungen durch IP-Netze."
			},{
				type: "name",
				title: "IPsec-Passthrough aktivieren",
				content: "Erlaubt die Tunnelung von IPsec(Internet Protocol security)-Verbindungen durch IP-Netze. IPsec verwendet eine starke Verschlüsselung, um Ihre Daten sicher durck IP-Netze zu transportieren."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Virtuelle Server",
			CONTENT: [{
				type: "paragraph",
				content: "Virtuelle Server werden verwendet, um Dienste aus dem lokalen Netz auch im Internet verfügbar zu machen. Bei der Konfiguration eines Virtuellen Servers geben Sie einen externen Port(bereich) und eine lokale IP-Adresse an. Verbindungsanfragen auf diesem Port werden dann an die angegebene lokale IP-Adresse weitergereicht. Naturgemäß muss diese IP-Adresse statisch sein (von Hand konfiguriert oder im DHCP-Server reserviert)."
			},{
				type: "name",
				title: "Diensttyp",
				content: "Name des Virtuellen Servers."
			},{
				type: "name",
				title: "Externer Port",
				content: "Vom Virtuellen Server verwendeter Port(bereich)."
			},{
				type: "name",
				title: "Interne IP-Adresse",
				content: "Lokale IP-Adresse des Servers, auf dem der Dienst des Virtuellen Servers läuft."
			},{
				type: "name",
				title: "Interner Port",
				content: "Port, auf dem der Dienst des Virtuellen Servers läuft."
			},{
				type: "name",
				title: "Protokoll",
				content: "Das Protokoll, das der Dienst benutzt: TCP, UDP oder Alle (alle vom Router unterstützten Protokolle)."
			},{
				type: "name",
				title: "Status",
				content: "Aktueller Status der Regel (aktiviert oder deaktiviert)."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Hier haben Sie die Möglichkeit, einen Virtuellen Server zu Bearbeiten oder zu Löschen."
			},{
				type: "step",
				title: "Einrichten eines Virtuellen Servers",
				content: [
					"1. Klicken Sie Hinzufügen.",
					"2. Ist Ihre Applikation in der Drop-Down-Liste Gebräuchliche Dienste zu finden, wählen Sie sie dort aus. Dann werden die Felder Externer Port und Interner Port automatisch befüllt. Ansonsten tragen Sie die Portnummer(n) bitte selbst von Hand ein (Beispiel: 21-25). Lassen Sie das Feld Interner Port frei, wird der externe Port in dieses Feld übernommen. Geben Sie zum Schluss die IP-Adresse des Servers in das Feld Interne IP-Adresse ein.",
					"3. Wählen Sie das für Ihre Applikation zu verwendende Protokoll: TCP, UDP oder Alle.",
					"4. Wählen Sie als Status Aktivieren.",
					"5. Klicken Sie OK."
				]
			},{
				type: "step",
				title: "So bearbeiten/löschen Sie einen Virtuellen Server:",
				content: "Klicken Sie in der Tabelle Bearbeiten oder Löschen, um einen Eintrag zu bearbeiten oder zu löschen."
			},{
				type: "step",
				title: "Löschen mehrerer Virtueller Server:",
				content: "Wählen Sie alle zu löschenden Einträge aus und klicken Sie oberhalb der Tabelle Löschen."
			},{
				type: "note",
				title: "Hinweis",
				content: "Laufen auf Ihrem Server mehrere Dienste, die Sie über das Internet zugänglich machen wollen, benötigen Sie pro Dienst einen Eintrag in der Tabelle der Virtuellen Server."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Port-Triggering",
			CONTENT: [{
				type: "paragraph",
				content: "Port Triggering wird verwendet, damit bestimmte Applikationen trotz Einsatzes eines NAT-Routers funktionieren."
			},{
				type: "name",
				title: "Applikation",
				content: "Name der Applikation."
			},{
				type: "name",
				title: "Triggerport",
				content: "Port, auf dem eine ausgehende Verbindung das Inkrafttreten der Triggerregel auslöst."
			},{
				type: "name",
				title: "Triggerprotokoll",
				content: "Das Protokoll, das auf dem Triggerport verwendet wird: TCP, UDP oder Alle (alle vom Router unterstützten Protokolle)."
			},{
				type: "name",
				title: "Externer Port",
				content: "Der Port(bereich), der durch die Regel für den Trigger-PC geöffnet werden soll. Sie können hier bis zu 5 Portgruppen angeben. Diese müssen durch Kommata getrennt werden. Beispiel: 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Externes Protokoll",
				content: "Das Protokoll, das die eingehenden Verbindungen verwenden dürfen: TCP, UDP oder Alle (alle vom Router unterstützten Protokolle)."
			},{
				type: "name",
				title: "Status",
				content: "Aktueller Status der Regel (aktiviert oder deaktiviert)."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Hier haben Sie die Möglichkeit, einen Virtuellen Server zu Bearbeiten oder zu Löschen."
			},{
				type: "step",
				title: "So richten Sie eine Porttriggeringregel ein:",
				content: [{
					type: "note",
					title: "Hinweis",
					content: "Jede Regel kann nur von einem LAN-Teilnehmer zugleich benutzt werden."
				},
					"1. Klicken Sie Hinzufügen.",
					"2. Klicken Sie Gebräuchliche Applikationen, um die Felder Applikation, Triggerport, Triggerprotokoll, Externer Port und Externes Protokoll automatisch auszufüllen oder füllen Sie sie von Hand aus.",	
					"3. Wählen Sie als Status Aktivieren.",
					"4. Klicken Sie OK."
				]
			},{
				type: "step",
				title: "So bearbeiten/löschen Sie eine Porttriggeringregel:",
				content: "Klicken Sie in der Tabelle Bearbeiten oder Löschen, um einen Eintrag zu bearbeiten oder zu löschen."
			},{
				type: "step",
				title: "Löschen mehrerer Porttriggeringregeln:",
				content: "Wählen Sie alle zu löschenden Einträge aus und klicken Sie oberhalb der Tabelle Löschen."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "Die Funktion DMZ(Demilitarisierte Zone)-Host macht ein Gerät in Ihrem lokalen Netz aus dem Internet komplett sichtbar. Dies ist hilfreich für Internetgaming oder Videokonferenzen. Naturgemäß muss diese IP-Adresse statisch sein (von Hand konfiguriert oder im DHCP-Server reserviert)."
			},{
				type: "step",
				title: "So machen Sie einen Computer zum DMZ-Server:",
				content: [
					"1. Klicken Sie DMZ aktivieren.",
					"2. In das Feld IP-Adresse des DMZ-Hosts geben Sie die IP-Adresse eines lokalen Computers ein.",
					"3. Klicken Sie Speichern."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Standardmäßig ist Universal Plug-and-Play (UPnP) aktiviert, damit UPnP-Geräte ohne weitere Konfigurationsschritte miteinander kommunizieren können."
			},{
				type: "paragraph",
				content: "Die UPnP-Serviceliste zeigt Ihnen Informationen zu den aktiven UPnP-Geräten in Ihrem Netz."
			},{
				type: "name",
				title: "Dienstbeschreibung",
				content: "Kurze Beschreibung des Hosts, der die UPnP-Anfrage gestellt hat."
			},{
				type: "name",
				title: "Externer Port",
				content: "Externer, für den Host zu öffnender Port."
			},{
				type: "name",
				title: "Protokoll",
				content: "Das vom Host verwendete Protokoll."
			},{
				type: "name",
				title: "Interne IP-Adresse",
				content: "IP-Adresse des lokalen Gerätes."
			},{
				type: "name",
				title: "Interner Port",
				content: "Interner, für den Host zu öffnender Port."
			},{
				type: "paragraph",
				content: "Klicken Sie Aktualisieren, um die Ansicht neu zu laden."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Geräteeinstellungen",
			CONTENT: [{
				type: "paragraph",
				content: "Auf der Seite Geräteeinstellungen sehen Sie Informationen zu am USB-Port angeschlossenen Geräten."
			},{
				type: "name",
				title: "Suchen",
				content: "Normalerweise findet der Router neu angeschlossene USB-Geräte automatisch. Mit dieser Schaltfläche können Sie angeschlossene USB-Geräte manuell erkennen lassen."
			},{
				type: "name",
				title: "Partition",
				content: "Zeigt den Namen der Partition."
			},{
				type: "name",
				title: "Kapazität",
				content: "Gesamtkapazität des USB-Datenträgers"
			},{
				type: "name",
				title: "Freier Speicherplatz",
				content: "Aktuell verfügbarer Speicherplatz auf dem USB-Datenträger."
			},{
				type: "name",
				title: "Sicher entfernen",
				content: "Klicken Sie hier, bevor Sie das USB-Gerät physisch vom Router entfernen."
			},{
				type: "paragraph",
				content: "Die Schaltfläche Sicher entfernen erscheint nur, wenn ein USB-Datenträger an den Router angeschlossen ist. Ein Entfernen ist nicht möglich, solange das USB-Gerät in Verwendung ist."
			},{
				type: "name",
				title: "Aktiv",
				content: "Diese Option erscheint nur, wenn ein USB-Datenträger an den Router angeschlossen ist. Aktiviert die Freigabe des USB-Geräts."
			},{
				type: "step",
				title: "Einrichtung eines Fileservers",
				content: [
				"1. Schließen Sie einen USB-Datenträger an Ihren Router an.",
				"2. Stellen Sie sicher, dass das Gerät unter Geräteeinstellungen aufgeführt wird.",
				"3. Wählen Sie Dateifreigabe aktivieren."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Benutzerkonto",
			CONTENT: [{
				type: "name",
				title: "Benutzerkonto",
				content: "Sie können entweder Standardaccount oder Neues Benutzerkonto wählen."
			},{
				type: "name",
				title: "Benutzername/Passwort",
				content: "Geben Sie einen Benutzernamen, der Buchstaben, Ziffern und Unterstriche enthalten darf, ein. Der Benutzername muss mit einem Buchstaben beginnen und darf nicht länger als 15 Zeichen sein. Es wird zwischen Groß- und Kleinschreibung unterschieden."
			},{
				type: "name",
				title: "Passwort bestätigen",
				content: "Geben Sie Ihr Passwort hier erneut ein, um Tippfehler auszuschließen."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Freigabeeinstellungen",
			CONTENT: [{
				type: "name",
				title: "Servername",
				content: "Der Name, unter dem der angeschlossene USB-Datenträger erreichbar ist."
			},{
				type: "name",
				title: "Aktivieren",
				content: "Zugriff zulassen."
			},{
				type: "name",
				title: "Zugriffsmethode",
				content: "Es existieren drei Möglichkeiten, auf den angeschlossenen USB-Datenträger zuzugreifen. Wählen Sie von diesen mindestens eine aus.",
				children: [{
					type: "name",
					title: "Samba/UNC",
					content: "Ist dies aktiviert, können Benutzer im Dateibrowser auf den angeschlossenen USB-Datenträger zugreifen, z.B. über \\\\192.168.0.1."
				},{
					type: "name",
					title: "FTP",
					content: "Ermöglicht den Zugriff über FTP (z.B. ftp://192.168.0.1)."
				},{
					type: "name",
					title: "FTP (über Internet)",
					content: "Ermöglicht den FTP-Zugriff vom Internet aus. Die Standard-Portnummer lautet 21. Hier haben Sie die Möglichkeit, die Portnummer zu ändern. Klicken Sie Speichern, um Ihre Änderungen zu übernehmen."
				}]
			},{
				type: "name",
				title: "Link",
				content: "Stellt einen Link zum Öffnen des Datenträgers zur Verfügung."
			},{
				type: "name",
				title: "Port",
				content: "Zeigt die Portnummer des FTP-Servers an. Verwenden Sie den vorgegebenen Wert 21 oder geben Sie einen Wert zwischen 1024 und 65535 ein."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Ordnerfreigabe",
			CONTENT: [{
				type: "name",
				title: "Komplett freigeben",
				content: "Ermöglicht die Freigabe des ganzen USB-Datenträgers. Möchten Sie nur einzelne Ordner freigeben, deaktivieren Sie diese Option."
			},{
				type: "name",
				title: "Authentifizierung aktivieren",
				content: "Es wird empfohlen, die Authentifizierung zu aktivieren, so dass jeder, der auf den Datenträger zugreifen möchte, Benutzernamen und Passwort braucht."
			},{
				type: "name",
				title: "Ordnername",
				content: "Name des freigegebenen Ordners."
			},{
				type: "name",
				title: "Ordnerpfad",
				content: "Der Pfad zu dem freigegebenen Ordner."
			},{
				type: "name",
				title: "Medienfreigabe",
				content: "Erlaubt dem Mediaserver die Verwendung dieses Ordners."
			},{
				type: "name",
				title: "Datenträgername",
				content: "Name des freigegebenen Datenträgers."
			},{
				type: "name",
				title: "Status",
				content: "Zeigt den Status des freigegebenen Ordners an."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Bearbeiten oder Löschen einer Freigabe."
			},{
				type: "name",
				title: "Durchsuchen",
				content: "Klicken Sie hier, um einen freizugebenden Ordner herauszusuchen."
			},{
				type: "name",
				title: "Zugriff vom Gastnetz zulassen",
				content: "Bestimmt, ob die Teilnehmer Ihres Gastnetzes Zugriff auf die Freigabe bekommen."
			},{
				type: "name",
				title: "Authentifizierung aktivieren",
				content: "Ist dies aktiviert, müssen Benutzer einen Namen und ein Passwort eingeben, um Zugriff auf die freigegebenen Ordner zu erhalten (empfohlen)."
			},{
				type: "name",
				title: "Schreibzugriff erlauben",
				content: "Erlaubt dem Benutzer das Verändern von Datenträgerinhalten."
			},{
				type: "name",
				title: "Medienfreigabe erlauben",
				content: "Erlaubt dem Mediaserver die Verwendung dieses Ordners."
			},{
				type: "name",
				title:"Neu laden",
				content: "Aktualisiert die Anzeige der freigegebenen Ordner."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Printserver",
			CONTENT: [{
				type: "name",
				title:"Printserver",
				content: "Aktivieren/Deaktivieren der Printserverfunktion."
			},{
				type: "name",
				title:"Druckername",
				content: "Name des angeschlossenen Druckers."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Kindersicherung",
			CONTENT: [{
				type: "paragraph",
				content: "Die Kindersicherung erlaubt Ihnen, den Internetzugang bestimmter Geräte (z.B. des PCs Ihres Kindes) nach Webadresse und nach Uhrzeit einzuschränken."
			},{
				type: "name",
				title: "Kindersicherung",
				content: "Aktivieren/Deaktivieren der Kindersicherung."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Der Kindersicherung unterliegende Geräte",
			CONTENT: [{
				type: "name",
				title: "Gerätename",
				content: "Namen der von der Kindersicherung betroffenen Clientgeräte."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "MAC-Adressen aller Geräte, für die die Kindersicherung gilt."
			},{
				type: "name",
				title: "Zeitfenster für Internetzugriff",
				content: "Zeitrahmen, für den die Kindersicherung gilt. Basiert auf der Router-Systemzeit, die unter \"System-Tools -> Zeiteinstellungen\" konfiguriert werden kann."
			},{
				type: "name",
				title: "Beschreibung",
				content: "Kurze Beschreibung des Gerätes."
			},{
				type: "name",
				title: "Status",
				content: "Aktueller Status (aktiviert oder deaktiviert) der Kindersicherungsregel für dieses Gerät."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Bearbeiten oder Löschen eines Geräteeintrags."
			},{
				type: "step",
				title: "So sperren Sie den Internetzugang für ein neues Gerät:",
				content: [
					"1. Klicken Sie Hinzufügen.",
					"2. Klicken Sie Existierende Geräte anzeigen und wählen Sie aus der Liste der verbundenen Geräte das zu konfigurierende heraus. Oder Sie geben den Gerätenamen und die MAC-Adresse von Hand ein.",
					"3. Klicken Sie Internetzugriffszeitfenster, um die Zeit des Internetzugriffs einzuschränken.",
					"4. Vergeben Sie eine kurze Beschreibung (optional).",
					"5. Wählen Sie Aktivieren.",
					"6. Klicken Sie OK."
				]
			},{
				type: "paragraph",
				content: "Klicken Sie in der Tabelle Bearbeiten oder Löschen, um einen Eintrag zu bearbeiten oder zu löschen."
			},{
				type: "paragraph",
				content: "Um mehrere Einträge zu löschen, wählen Sie diese aus und klicken Sie über der Tabelle auf Löschen."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Contentfilter",
			CONTENT: [{
				type: "name",
				title: "Blacklist",
				content: "Webseiten mit den eingegebenen Schlüsselwörtern in der Adresse werden von in der Kindersicherungsliste enthaltenen Geräten nicht geladen.",
				children: [{
					type: "paragraph",
					content: "Klicken Sie Schlüsselwort hinzufügen, um ein Schlüsselwort zur Blacklist hinzuzufügen. Um eines zu löschen, klicken Sie für dieses Schlüsselwort (-)."
				}]
			},{
				type: "name",
				title: "Whitelist",
				content: "Nur Webseiten, deren Adresse eines der angegebenen Schlüsselwörter enthält, sind für die in der Kindersicherungsliste enthaltenen Geräte zugänglich.",
				children: [{
					type: "paragraph",
					content: "Klicken Sie Neuen Domänennamen hinzufügen, um eine neue Domäne zur Whitelist hinzuzufügen. Um eine zu löschen, klicken Sie für diese Domäne (-)."
				}]
			},{
				type: "paragraph",
				content: "Schlüsselwörter können auch Domänennamen sein, z.B. www.example.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "Quality of Service (QoS) priorisiert den Internetdatenverkehr laut Ihren Vorgaben. Sie können die Priorität nach Gerät oder Applikation steuern lassen."
			},{
				type: "name",
				title: "QoS aktivieren",
				content: "Hiermit aktivieren Sie QoS."
			},{
				type: "name",
				title: "Upload-Datenrate",
				content: "Geben Sie hier die maximal mögliche Uploadgeschwindigkeit Ihrer Leitung ein."
			},{
				type: "name",
				title: "Download-Datenrate",
				content: "Geben Sie hier die maximal mögliche Downloadgeschwindigkeit Ihrer Leitung ein."
			},{
				type: "name",
				title: "Hohe Priorität",
				content: "Geben Sie hier einen relativen Anteil für Datenverkehr hoher Priorität an."
			},{
				type: "name",
				title: "Mitlere Priorität",
				content: "Geben Sie hier einen relativen Anteil für Datenverkehr mittlerer Priorität an."
			},{
				type: "name",
				title: "Niedrige Priorität",
				content: "Geben Sie hier einen relativen Anteil für Datenverkehr niedriger Priorität an."
			},{
				type: "note",
				title: "Hinweis",
				content: "Die Summe aller Prioritäten muss 1 sein."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		QOS_RULE: {
			TITLE: "QoS-Regelliste",
			CONTENT: [{
				type: "name",
				title: "Typ",
				content: "Wählen Sie einen Typ aus, den Sie zur QoS-Regelliste hinzufügen möchten."
			},{
				type: "step",
				title: "So richten Sie eine gerätebezogene Regel für hohe/mittlere/niedrige Priorität ein:",
				content: [
					"1. Klicken Sie Hinzufügen.",
					"2. Wählen Sie Gerätebezogen.",
					"3. Klicken Sie Existierende Geräte anzeigen, um Ihr Gerät aus der Liste der Zugriffsgeräte aus oder geben Sie ein Kombination aus Gerätenamen und MAC-Adresse von Hand ein.",
					"4. Klicken Sie OK."
				]
			},{
				type: "step",
				title: "So richten Sie eine anwendungsbezogene Regel für hohe/mittlere/niedrige Priorität ein:",
				content: [
					"1. Klicken Sie Hinzufügen.",
					"2. Wählen Sie Anwendungsbezogen.",
					"3. Wählen Sie die gewünschte Anwendung aus der Applikationsliste aus oder geben Sie Namen, Protokoll und Zielport (1..65535) in die entsprechenden Felder ein. Sie können einen einzelnen Port oder einen Portbereich eingeben. Trennen Sie diese mittels Kommata voneinander. Beispiel: 21,36-105,111.",
					"4. Klicken Sie OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Datenbank-Upgrade",
			CONTENT: [{
				type: "name",
				title: "Neue Datenbank-Datei",
				content: "Klicken Sie Durchsuchen, um die Datei auszuwählen. Klicken Sie Upgrade, um den Vorgang zu starten."
			},{
				type: "name",
				title: "Datenbankversion",
				content: "Zeigt die aktuell installierte Version der Datenbank an."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Firewall",
			CONTENT: [{
				type: "name",
				title: "SPI-Firewall",
				content: "Die SPI-Firewall verhindert bestimmte Angriffe, indem Sie den Inhalt der eingehenden Pakete untersucht."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "DoS-Schutz",
			CONTENT: [{
				type: "name",
				title: "DoS-Schutz",
				content: "Der DoS-Schutz schützt Ihr lokales Netz vor massenhaften unsinnigen Serveranfragen."
			},{
				type: "name",
				title: "Schutz vor ICMP-FLOOD-Angriffen",
				content: "Schützt vor Angriffen über das Internet Control Message Protocol (ICMP).",
				children: [{
					type: "name",
					title: "Aus",
					content: "Kein Schutz."
				},{
					type: "name",
					title: "Niedrig",
					content: "Geringer Schutz, geringer Einfluss auf die Router-Performance."
				},{
					type: "name",
					title: "Mittel",
					content: "Moderater Schutz, eventuell merklicher Einfluss auf die Router-Performance."
				},{
					type: "name",
					title: "Hoch",
					content: "Hoher Schutz, merklicher Einfluss auf die Router-Performance."
				}]
			},{
				type: "name",
				title: "Schutz vor UDP-FLOOD-Angriffen",
				content: "Schützt vor Angriffen über das User Datagram Protocol (UDP)."
			},{
				type: "name",
				title: "Schutz vor TCP-SYN-FLOOD-Angriffen",
				content: "Schützt vor Angriffen über das Transmission Control Protocol-Synchronize (TCP-SYN)."
			},{
				type: "name",
				title: "Ping-Pakete auf den WAN-Port ignorieren",
				content: "Beantwortet Echo-Anfragen auf den WAN-Port nicht."
			},{
				type: "name",
				title: "Ping-Pakete von LAN-Seite ignorieren",
				content: "Beantwortet Echo-Anfragen auf die LAN-Ports nicht."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Liste blockierter DoS-Hosts",
			CONTENT: [{
				type: "name",
				title: "Liste blockierter DoS-Hosts",
				content: "Liste der IP- und MAC-Adressen, die aufgrund von DoS-Angriffen negativ aufgefallen sind und blockiert wurden."
			},{
				type: "step",
				title: "Löschen eines Eintrags",
				content: "Wählen Sie in der Hostliste den zu löschenden Eintrag aus und klicken Sie über der Tabelle Löschen."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Kindersicherung",
			CONTENT: [{
				type: "paragraph",
				content: "Die Kindersicherung dient dazu, bestimmte Zugriffe zu unterbinden."
			},{
				type: "paragraph",
				content: "Um die Zugriffskontrolle zu benutzen, aktivieren Sie sie und geben Sie an, ob Sie black- oder whitelisten möchten. Ist die Zugriffskontrolle deaktiviert, können auch geblacklistete Geräte das Netz nutzen."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Zugriffsmodus",
			CONTENT: [{
				type: "name",
				title: "Blacklist",
				content: "Bis auf die gelisteten Geräte können alle Geräte das Netz nutzen."
			},{
				type: "name",
				title: "Whitelist",
				content: "Nur die gelisteten Geräte haben Zugriff auf Ihr Netz."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Verbundene Geräte",
			CONTENT: [{
				type: "name",
				title: "Gerätename",
				content: "Name des verbundenen Gerätes."
			},{
				type: "name",
				title: "IP-Adresse",
				content: "IP-Adresse des verbundenen Gerätes."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "MAC-Adresse des verbundenen Gerätes."
			},{
				type: "name",
				title: "Verbindungstyp",
				content: "Verbindungstyp des verbundenen Gerätes."
			},{
				type: "step",
				title: "Blockieren eines Gerätes",
				content: "In der Tabelle Geräte online klicken Sie in der richtigen Zeile auf Blockieren in der Spalte Bearbeiten."
			},{
				type: "step",
				title: "Blockieren mehrerer Geräte",
				content: "Wählen Sie in der Tabelle Geräte online alle zu blockierenden Geräte aus und klicken Sie über der Tabelle Blockieren. Diese Geräte werden dann zur Black- bzw. Whitelist hinzugefügt."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Geräte in Blacklist/Whitelist",
			CONTENT: [{
				type: "step",
				title: "So blacklisten/whitelisten Sie ein Gerät:",
				content: [
					"1. Klicken Sie Hinzufügen.",
					"2. Geben Sie den Gerätenamen ein.",
					"3. Geben Sie die MAC-Adresse des Gerätes ein.",
					"4. Klicken Sie OK."
				]
			},{
				type: "step",
				title: "Bearbeiten oder Löschen eines Eintrages",
				content: "Klicken Sie in der Blacklist/Whitelist Bearbeiten oder Löschen, um einen Eintrag zu bearbeiten oder zu löschen."
			},{
				type: "step",
				title: "Bearbeiten oder Löschen mehrerer Einträge",
				content: "Wählen Sie in der Tabelle Blacklist/Whitelist alle zu löschenden Geräte aus und klicken Sie über der Tabelle Löschen."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Einstellungen",
			CONTENT: [{
				type: "paragraph",
				content: "Eine ARP(Address Resolution Protocol)-Bindung ist hilfreich bei der Zugriffskontrolle eines bestimmten Computers, wenn Sie dessen IP- und MAC-Adresse fest miteinander assoziieren wollen. ARP-Binding verhindert, dass andere Geräte die angegebene IP-Adresse benutzen."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "ARP-List",
			CONTENT: [{
				type: "paragraph",
				content: "Zeigt die MAC- und IP-Adressen der aktuell angeschlossenen Geräte an."
			},{
				type: "name",
				title: "Anzahl ARP-Einträge",
				content: "Die Gesamtanzahl der aktuell mit dem Router verbundenen Geräte."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "MAC-Adresse des verbundenen Gerätes."
			},{
				type: "name",
				title: "IP-Adresse",
				content: "Die IP-Adresse, die dem Gerät zugewiesen ist."
			},{
				type: "name",
				title: "Gebunden",
				content: "Zeigt an, ob die Kombination aus MAC- und IP -Adresse gebunden ist."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Hier finden Sie Optionen, um eine Kombination zu Binden oder zu Löschen."
			},{
				type: "note",
				title: "Hinweis",
				content: "Ein und die selbe IP-Adresse kann nicht gleichzeitig mehreren MAC-Adressen zugeordnet sein."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Bindungsliste",
			CONTENT: [{
				type: "step",
				title: "So richten Sie eine ARP-Bindung ein:",
				content: [
					"1. Klicken Sie Hinzufügen.",
					"2. Geben Sie die MAC-Adresse des Gerätes ein.",
					"3. Geben Sie eine mit diesem Gerät zu assoziierende IP-Adresse ein.",
					"4. Vergeben Sie eine Beschreibung für das Gerät (optional).",
					"5. Wählen Sie Aktivieren.",
					"6. Klicken Sie OK."
				]
			},{
				type: "step",
				title: "So bearbeiten oder löschen Sie einen Eintrag:",
				content: "Klicken Sie in der Liste der Bindungen für den entsprechenden Eintrag Bearbeiten oder Löschen."
			},{
				type: "step",
				title: "Löschen mehrerer Einträge:",
				content: "Wählen Sie aus der List der Bindungen alle zu löschenden Einträge aus und klicken Sie dann über der Tabelle Löschen."
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Aktivieren oder Deaktivieren der IPv6-Unterstützung durch den Router."
			},{
				type: "title",
				title: "Internetverbindungstyp: Statische IP-Adresse",
			},{
				type: "name",
				title: "Statische IP-Adresse",
				content: "Wählen Sie dies aus, wenn Ihr Internetdiensteanbieter statische IPv6-Konfigurationen bereitstellt."
			},{
				type: "name",
				title: "IPv6-Adresse/Standardgateway/Haupt-DNS-Server/Backup-DNS-Server",
				content: "Geben Sie hier die Informationen ein, die Ihnen Ihr Internetdiensteanbieter gegeben hat."
			},{
				type: "name",
				title: "MTU-Größe",
				content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1500 Byte. Wir empfehlen, diese nicht zu ändern, es sei denn, Sie wurden angewiesen, dies zu tun."
			},{
				type: "title",
				title: "Internetverbindungstyp: Dynamische IP-Adresse",
			},{
				type: "name",
				title: "Dynamische IP-Adresse",
				content: "Wählen Sie dies aus, wenn Ihr Internetdiensteanbieter dynamische IPv6-Konfigurationen bereitstellt."
			},{
				type: "name",
				title: "IPv6-Adresse/Haupt-DNS-Server/Backup-DNS-Server",
				content: "Diese Informationen werden vom DHCPv6-Server Ihres Internetdiensteanbieters automatisch gesetzt."
			},{
				type: "name",
				title: "Erneuern",
				content: "Klicken Sie hier, um Ihre IP-Konfiguration zu erneuern."
			},{
				type: "name",
				title: "Zurückgeben",
				content: "Klicken Sie hier, um Ihre aktuelle IP-Konfiguration zurückzugeben."
			},{
				type: "name",
				title: "IPv6-Adresse abrufen",
				content: "Wählen Sie DHCPv6, um eine nicht-temporäre IPv6-Adresse zu erhalten oder SLAAC, um eine IPv6-Adresse aus dem Router-Advertisement-Paket zu generieren."
			},{
				type: "name",
				title: "Präfix-Delegation",
				content: "Aktivieren Sie dies, um eine Präfixdelegation vom DHCPv6-Server Ihres Internetdiensteanbieters zu erhalten. Deaktivieren Sie dies, um ein Adresspräfix von Hand einzugeben. Mit diesem Präfix erzeugen lokale Clients ihre IPv6-Adressen."
			},{
				type: "name",
				title: "DNS-Serveradresse",
				content: "Wählen Sie Dynamisch vom Anbieter beziehen oder Folgende DNS-Serveradresse verwenden. Benutzen Sie zweitere Option, geben Sie die DNS-Serveradressen bitte von Hand ein."
			},{
				type: "name",
				title: "Haupt-DNS-Server/Backup-DNS-Server",
				content: "Geben Sie diese Parameter von Hand ein oder lassen Sie den Router sie automatisch von Ihrem Anbieter abrufen."
			},{
				type: "title",
				title: "Internetverbindungstyp: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Wählen Sie dies aus, wenn Sie DSL haben und hierfür einen Benutzernamen und ein Passwort von Ihrem Internetdiensteanbieter bekommen haben."
			},{
				type: "name",
				title: "Benutzername/Passwort",
				content: "Geben Sie hier die Anmeldeinformationen von Ihrem Internetdiensteanbieter ein. Hierbei wird zwischen Groß- und Kleinschreibung unterschieden."
			},{
				type: "name",
				title: "IPv6-Adresse",
				content: "Diese wird automatisch eingestellt, nachdem Sie die Einwahldaten korrekt hinterlegt haben und die Verbindung hergestellt wurde."
			},{
				type: "name",
				title: "DNS-Serveradresse",
				content: "Wählen Sie Dynamisch vom Anbieter beziehen oder Folgende DNS-Serveradresse verwenden. Benutzen Sie zweitere Option, geben Sie die DNS-Serveradressen bitte von Hand ein."
			},{
				type: "name",
				title: "IPv6-Adresse abrufen",
				content: "Wählen Sie DHCPv6, um eine nicht-temporäre IPv6-Adresse zu erhalten oder SLAAC, um eine IPv6-Adresse aus dem Router-Advertisement-Paket zu generieren oder Vom ISP vorgegeben, um die von Ihrem Internetdiensteanbieter vorgegebene IPv6-Adresse von Hand einzutragen."
			},{
				type: "name",
				title: "Präfix-Delegation",
				content: "Aktivieren Sie dies, um eine Präfixdelegation vom DHCPv6-Server Ihres Internetdiensteanbieters zu erhalten. Deaktivieren Sie dies, um ein Adresspräfix von Hand einzugeben. Mit diesem Präfix erzeugen lokale Clients ihre IPv6-Adressen."
			},{
				type: "name",
				title: "Verbinden",
				content: "Herstellen einer Internetverbindung."
			},{
				type: "name",
				title: "Trennen",
				content: "Trennen der Internetverbindung."
			},{
				type: "title",
				title: "Internetverbindungytyp: 6to4-Tunnel"
			},{
				type: "name",
				title: "6to4-Tunnel",
				content: "Wählen Sie dies aus, wenn Ihr Internetdiensteanbeter für die Adresszuweisung 6to4-Deployment verwendet."
			},{
				type: "name",
				title: "IPv4-Adresse/IPv4-Subnetzmaske/IPv4-Standardgateway/Tunneladresse",
				content: "Diese Parameter werden dynamisch erzeugt, wenn Sie Verbinden klicken."
			},{
				type: "name",
				title: "Folgende DNS-Server verwenden",
				content: "Wählen Sie dies aus, um Haupt- (und optional Backup-)DNS-Server von Hand anzugeben."
			},{
				type: "name",
				title: "Verbinden",
				content: "Herstellen einer Internetverbindung."
			},{
				type: "name",
				title: "Trennen",
				content: "Trennen der Internetverbindung."
			},{
				type: "title",
				title: "Internetverbindungstyp: Passthrough (Bridge)"
			},{
				type: "paragraph",
				content: "Wählen Sie dies, wenn Ihr Internetdiensteanbieter Passthrough(Bridge)-Netzdeployment verwendet. Für diesen Verbindungstyp bedarf es keinerkei Parameter."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Außer Passthrough (Bridge) verlangt jeder Internetverbindungstyp eine IP-Konfiguration."
			},{
				type: "name",
				title: "Zugewiesener Typ",
				content: "Wählen Sie hier den von Ihrem Internetdiensteanbieter vorgegebenen Typ aus.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Weist Geräten im lokalen Netz automatisch IPv6-Adressen zu.",
					children: [{
						type: "name",
						title: "Adressenpräfix",
						content: "Geben Sie hier das von Ihrem Internetdiensteanbieter vorgegebene Präfix an."
					},{
						type: "name",
						title: "Adresshaltezeit",
						content: "Die Zeitdauer, für die ein DHCP-Client seine Konfiguration behalten darf (in Sekunden, Standardwert: 86400)."
					},{
						type: "name",
						title: "Adresse",
						content: "Die vom Internetdiensteanbieter automatisch zugewiesene IPv6-Adresse."
					}]
				},{
					type: "name",
					title: "SLAAC + Zustandsloses DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Adressenpräfix",
						content: "Geben Sie hier das von Ihrem Internetdiensteanbieter vorgegebene Präfix an."
					},{
						type: "name",
						title: "Adresse",
						content: "Die von Ihrem Internetdiensteanbieter automatisch zugewiesene IP-Adresse."
					}]
				},{
					type: "name",
					title: "SLAAC + RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Adressenpräfix",
						content: "Geben Sie hier das von Ihrem Internetdiensteanbieter vorgegebene Präfix an."
					},{
						type: "name",
						title: "Adresse",
						content: "Die von Ihrem Internetdiensteanbieter automatisch zugewiesene IP-Adresse."
					}]
				}]
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "MAC-Adresse klonen",
			CONTENT: [{
				type: "name",
				title: "Standard-MAC-Adresse verwenden",
				content: "Standard-MAC-Adresse des Routers wiederherstellen."
			},{
				type: "name",
				title: "MAC-Adresse dieses Computers verwenden",
				content: "Hiermit kopieren Sie die MAC-Adresse Ihres Computers. Sinnvoll, wenn Ihr Computer bisher direkt an das Internet angeschlossen war (ohne Router) und Ihr Internetdiensteanbieter sich diese MAC-Adresse gemerkt hat."
			},{
				type: "name",
				title: "Benutzerdefinierte MAC-Adresse verwenden",
				content: "Geben Sie die gewünschte MAC-Adresse von Hand ein."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Uhrzeiteinstellungen",
			CONTENT: [{
				type: "step",
				title: "So lassen Sie die Routerzeit automatisch einstellen:",
				content: [
					"1. Im Feld Uhrzeit setzen wählen Sie Uhrzeit automatisch aus dem Internet abrufen.",
					"2. Wählen Sie die an Ihrem Standort gültige Zeitzone aus der Drop-Down-Liste.",
					"3. Geben Sie in das Feld NTP-Server I die Adresse eines NTP-Servers ein.",
					"4. Geben Sie in das Feld NTP-Server II die Adresse eines weiteren NTP-Servers ein (optional).",
					"5. Klicken Sie Abrufen.",
					"6. Klicken Sie Speichern."
				]
			},{
				type: "step",
				title: "So setzen Sie die Routerzeit von Hand:",
				content: [
					"1. Im Feld Uhrzeit setzen wählen Sie Manuell.",
					"2. Geben Sie das aktuelle Datum ein.",
					"3. Geben Sie die aktuelle Uhrzeit (im 24-Stunden-Format) ein.",
					"4. Klicken Sie Speichern."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Sommerzeit",
			CONTENT: [{
				type: "step",
				title: "So konfigurieren Sie die Sommerzeit:",
				content: [
					"1. Aktivieren Sie Sommerzeit verwenden.",
					"2. Wählen Sie Startdatum und -uhrzeit der Sommerzeit.",
					"3. Wählen Sie Enddatum und -uhrzeit der Sommerzeit.",
					"4. Klicken Sie Speichern."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Diagnose",
			CONTENT: [{
				type: "paragraph",
				content: "Ihr Router verfügt über ein Ping- und ein Traceroute-Diagnosetool zur Erkennung von Verbindungsproblemen. Das Ping-Tool schickt Pakete an das angegebene Ziel und wertet die Antwortpakete aus hinsichtlich Erfolgsquote und Antwortzeit. Das Traceroute-Tool schickt Pakete an das angegebene Ziel und zeigt IP-Adresse und Antwortzeit der Zwischenschritte an."
			},{
				type: "paragraph",
				content: "Ziele von Ping und Traceroute können mittels IP-Adresse oder Domänenname angegeben werden."
			},{
				type: "step",
				title: "Diagnose mittels Ping",
				content: [
					"1. Geben Sie IP-Adresse oder Hostname des Ziels ein.",
					"2. (optional) Klicken Sie auf den Pfeil, um das Erweiterte Menü zu öffnen und Anzahl und Größe der Ping-Pakete zu bestimmen.",
					"3. Klicken Sie Start."
				]
			},{
				type: "step",
				title: "Diagnose mittels Traceroute",
				content: [
					"1. Geben Sie IP-Adresse oder Hostname des Ziels ein.",
					"2. (optional) Klicken Sie auf den Pfeil, um das Erweiterte Menü zu öffnen und die maximale Anzahl Hops (to be reached) in das Feld Traceroute-TTL (Time to Live) ein. Standardwert: 20.",
					"3. Klicken Sie Start."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Firmware-Upgrade",
			CONTENT: [{
				type: "paragraph",
				content: "Um die Firmware Ihres Routers zu aktualisieren, laden Sie sich diese zunächst von unserer <a class=\"link\" target=\"_blank\" href=\"http://www.tp-link.com.de/Support/\">TP-Link Support</a> auf Ihren Computer herunter."
			},{
				type: "step",
				title: "WICHTIG! Um Schäden beim Upgrade zu vermeiden, beachten Sie:",
				content: [
					"Die Firmwaredatei muss zur Hardwareversion Ihres Routers passen (auf der Downloadseite angegeben).",
					"Stellen Sie sicher, dass die Verbindung zu Ihrem Router stabil ist. Führen Sie das Firmwareupgrade nicht über eine Drahtlosverbindung durch.",
					"Entfernen Sie vor dem Upgrade ein eventuell an den Router angeschlossenes USB-Gerät, um Datenverluste zu vermeiden.",
					"Sichern Sie Ihre Routerkonfiguration.",
					"Trennen Sie den Router während des Firmwareupgrades nicht von der Versorgungsspannung."
				]
			},{
				type: "step",
				title: "Upgrade der Routerfirmware",
				content: [
					"1. Klicken Sie Durchsuchen.",
					"2. Wählen Sie die Firmwaredatei aus.",
					"3. Klicken Sie Upgrade."
				]
			},{
				type: "paragraph",
				content: "Das Upgrade dauert einige Minuten. Schalten Sie Ihren Router in dieser Zeit bitte NICHT ab."
			}]
		},
		
		BACKUP: {	
			TITLE: "Speichern",
			CONTENT: [{
				type: "paragraph",
				content: "Es wird empfohlen, Ihre fertige Routerkonfiguration zu speichern, damit Sie Ihren Router schnell wieder einsatzbereit haben, sollte dieser einmal zurückgesetzt oder ausgetauscht werden."
			},{
				type: "paragraph",
				content: "Klicken Sie Sichern, um Ihre Routerkonfiguration in einer Datei auf Ihrem Computer zu speichern. Bewahren Sie die Datei an einem sicheren Ort auf."
			}]
		},
		
		RESTORE: {
			TITLE: "Wiederherstellen",
			CONTENT: [{
				type: "step",
				title: "So stellen Sie eine gesicherte Routerkonfiguration wieder her:",
				content: [
					"1. Klicken Sie Durchsuchen.",
					"2. Wählen Sie die Konfigurationsdatei aus.",
					"3. Klicken Sie Wiederherstellen."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Werkseinstellungen wiederherstellen",
			CONTENT: [{
				type: "paragraph",
				content: "Klicken Sie Wiederherstellen, um Ihren Router auf Werkseinstellungen zurückzusetzen."
			},{
				type: "note",
				title: "Hinweis",
				content: [
					"1. Beim Zurücksetzen Ihres Geräts gehen prinzipbedingt alle Einstellungen verloren. Loggen Sie sich anschließend mit admin als Benutzername und Passwort ein.",
					"2. Schalten Sie beim Speichern oder Wiederherstellen den Router nicht aus."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Benutzerkonten",
			CONTENT: [{
				type: "paragraph",
				content: "Auf dieser Seite können Sie die Zugangsdaten zur Weboberfläche Ihres Routers ändern sowie eine E-Mail-Adresse hinterlegen, um sich das Passwort zusenden zu lassen, sollten Sie es einmal vergessen haben."
			},{
				type: "name",
				title: "Alter Benutzername",
				content: "Geben Sie hier den aktuell gültigen Benutzernamen ein."
			},{
				type: "name",
				title: "Altes Passwort",
				content: "Geben Sie hier das aktuell gültige Passwort ein."
			},{
				type: "name",
				title: "Neuer Benutzername",
				content: "Geben Sie hier den neuen Benutzernamen ein."
			},{
				type: "name",
				title: "Neues Passwort",
				content: "Geben Sie hier das neue Passwort ein."
			},{
				type: "name",
				title: "Neues Passwort bestätigen",
				content: "Geben Sie hier erneut das neue Passwort ein."
			},{
				type: "note",
				title: "Hinweis",
				content: "Ändern Sie die Zugansgdaten, stellen Sie sicher, dass Sie diese nicht vergessen."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Passwortwiederherstellung",
			CONTENT: [{
				type: "name",
				title: "Passwortwiederherstellung aktivieren",
				content: "Es wird wärmstens empfohlen, die Passwortwiederherstellung zu aktivieren, damit Sie mit dieser Benutzernamen und Passwort per E-Mail zurücksetzen können."
			},{
				type: "name",
				title: "Von",
				content: "Geben Sie hier eine gültige Absender-E-Mail-Adresse ein."
			},{
				type: "name",
				title: "An",
				content: "Geben Sie hier die E-Mail-Adresse ein, an die Sie Ihr Passwort verschicken lassen möchten."
			},{
				type: "name",
				title: "SMTP-Server",
				content: "Geben Sie die Adresse des SMTP-Servers ein, über den der Router den Überprüfungscode schickt."
			},{
				type: "name",
				title: "Authentifizierung aktivieren",
				content: "Wählen Sie dies aus, wenn Ihr SMTP-Server zum E-Mail-Schicken eine Authentifizierung verlangt (sehr gebräuchlich). Geben Sie hierzu Benutzernamen und Passwort ein. Achten Sie auf Groß- und Kleinschreibung."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Lokale Verwaltung",
			CONTENT: [{
				type: "paragraph",
				content: "Hier können Sie die Geräte, die Zugriff auf die Weboberfläche haben sollen, anhand Ihrer MAC-Adressen beschränken."
			},{
				type: "name",
				title: "Zugriff für alle lokalen Geräte erlauben",
				content: "Allen Geräten im lokalen Netz Zugriff auf die Weboberfläche gewähren. Ist dies deaktiviert, müssen Sie mindestens ein Gerät zuzlassen, um sich nicht selbst auszusperren."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "Die MAC-Adresse des konfigurierten Gerätes."
			},{
				type: "name",
				title: "Beschreibung",
				content: "Eine Beschreibung des Gerätes."
			},{
				type: "name",
				title: "Status",
				content: "Gibt an, ob das Gerät zugelassen oder gesperrt ist."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Hier haben Sie die Möglichkeit, Einträge zu Bearbeiten und zu Löschen."
			},{
				type: "step",
				title: "So fügen Sie ein neues Gerät zur Liste hinzu:",
				content: [
					"1. Klicken Sie Hinzufügen.",
					"2. Klicken Sie Existierende Geräte, um eines auszuwählen oder spezifizieren Sie das Gerät durch manuelle Eingabe der MAC-Adresse.",
					"3. Vergeben Sie eine Beschreibung.",
					"4. Wählen Sie als Status Aktivieren.",
					"5. Klicken Sie OK."
				]
			},{
				type: "step",
				title: "So bearbeiten oder löschen Sie ein in der Liste befindliches Gerät:",
				content: "Klicken Sie in der Tabelle Bearbeiten oder Löschen, um einen Eintrag zu bearbeiten oder zu löschen."
			},{
				type: "step",
				title: "Löschen mehrerer Geräte",
				content: "Wählen Sie alle zu löschenden Geräte aus und klicken Sie dann auf Löschen."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Fernwartung",
			CONTENT: [{
				type: "paragraph",
				content: "Mittels Fernwartung können Sie auch über das Internet die Weboberfläche Ihres Routers erreichen."
			},{
				type: "name",
				title: "Fernwartung deaktivieren",
				content: "Hiermit deaktivieren Sie die Fernwartung."
			},{
				type: "name",
				title: "Fernwartung für alle Geräte zugänglich machen",
				content: "Diese Option erlaubt die Fernwartung von allen IP-Adressen. Wenn aktiviert, muss auch das Feld Portnummer für Fernwartung ausgefüllt sein."
			},{
				type: "name",
				title: "Fernwartung nur für angegebene Geräte zulassen",
				content: "Diese Option erlaubt die Fernwartung nur von den angegebenen IP-Adressen. Wenn aktiviert, muss auch das Feld Portnummer für Fernwartung ausgefüllt sein."
			},{
				type: "name",
				title: "Fernwartungsport",
				content: "Geben Sie eine Portnummer aus dem Bereich von 1024 bis 65535 ein. Über diese ist die Weboberfläche des Routers dann erreichbar. Normalerweise verwenden Webbrowser den Standard-HTTP-Port 80. Alternativ verwendet HTTP auch den Port 8080."
			},{
				type: "name",
				title: "Für Fernwartung zugelassene IP-Adresse",
				content: "Geben Sie hier eine gültige IP-Adresse oder einen IP-Adressbereich ein, für den/die der Zugriff auf den Router erlaubt sein soll. Der Wert 255.255.255.255 erlaubt allen IP-Adressen den Zugriff."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Systemprotokoll",
			CONTENT: [{
				type: "paragraph",
				content: "Die Seite Systemprotokoll zeigt eine Protokollierung der letzten Routeraktivitäten (oder Ereignisse). Sie können definieren, welche Arten von Vorkommnissen angezeigt werden sollen. Sie können Sich das Protokoll auch regelmäßig per E-Mail zuschicken oder auf Ihren Computer exportieren lassen."
			},{
				type: "name",
				title: "Typ",
				content: "Angezeigten Typ der Einträge definieren."
			},{
				type: "name",
				title: "Ebene",
				content: "Angezeigte Wichtigkeit der Einträge definieren."
			},{
				type: "name",
				title: "Neu laden",
				content: "Protokollansicht neu laden."
			},{
				type: "name",
				title: "Protokoll löschen",
				content: "Protokoll löschen."
			},{
				type: "name",
				title: "Protokoll speichern",
				content: "Protokoll als Textdatei auf Ihren Computer herunterladen."
			},{
				type: "name",
				title: "E-Mail-Einstellungen",
				content: "Einstellungen zum Verschicken des Protokolls per E-Mail tätigen."
			},{
				type: "step",
				title: "So konfigurieren Sie die E-Mail-Einstellungen für das Systemprotokoll",
				content: [
					"1. Klicken Sie E-Mail-Einstellungen.",
					"2. Von - Geben Sie hier eine gültige Absender-E-Mail-Adresse ein.",
					"3. An - Geben Sie hier eine gültige Empfänger-E-Mail-Adresse ein.",
					"4. SMTP-Server - Die Adresse des SMTP-Servers, über den der Router das Protokoll verschicken soll.",
					{
						content: "5. Authentifizierung aktivieren - Wählen Sie dies aus, wenn Ihr SMTP-Server Authentifizierung verlangt.",
						children: [{
							type: "name",
							title: "Benutzername",
							content: "Benutzername am SMTP-Server. Achten Sie auf korrekte Groß- und Kleinschreibung."
						},{
							type: "name",
							title: "Passwort",
							content: "Zugehöriges Passwort am SMTP-Server. Achten Sie auf korrekte Groß- und Kleinschreibung."
						}]
					},{
						content: "6. Auto-Mail aktivieren - Versendet das Systemprotokoll automatisch zur angegebenen Uhrzeit.",
						children: [{
							type: "paragraph",
							content: "Um das Systemprotokoll zu einer bestimmten Uhrzeit verschicken zu lassen, verwenden Sie das 24-Stunden-Format HH:MM (für 4 Uhr nachmittags geben Sie 16:00 ein)."
						},{
							type: "paragraph",
							content: "Um das Systemprotokoll in einem bestimmten Intervall verschicken zu lassen, geben Sie dieses in Stunden ein."
						}]
					},
					"7. Klicken Sie Speichern."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Trafficstatistiken",
			CONTENT: [{
				type: "paragraph",
				content: "Die Trafficstatistiken zeigen Ihnen eine Übersicht über den LAN-, WAN- und WLAN-Datenverkehr."
			},{
				type: "name",
				title: "Trafficstatistiken",
				content: "Ein-/Ausschalten der Statistiken."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Trafficstatistikenliste",
			CONTENT: [{
				type: "name",
				title: "IP-Adresse/MAC-Adresse",
				content: "Zeigt IP- und MAC-Adressen der verbundenen Geräte an."
			},{
				type: "name",
				title: "Pakete insgesamt",
				content: "Gesamtzahl der durch dieses Gerät übertragenen Pakete."
			},{
				type: "name",
				title: "Byte insgesamt",
				content: "Durch dieses Gerät übertragene Gesamtdatenmenge."
			},{
				type: "name",
				title: "Pakete aktuell",
				content: "Anzahl der im letzten Zeitintervall durch dieses Gerät übertragenen Pakete."
			},{
				type: "name",
				title: "Byte aktuell",
				content: "Im letzten Zeitintervall durch dieses Gerät übertragene Datenmenge."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Optionen zum Rücksetzen (auf null) und Löschen der Statistikdaten zu diesem Gerät."
			},{
				type: "name",
				title: "Neu laden",
				content: "Statistikenseite neu laden."
			},{
				type: "name",
				title: "Alle zurücksetzen",
				content: "Alle Statistikdaten auf null setzen."
			},{
				type: "name",
				title: "Protokoll löschen",
				content: "Alle Statistikdaten löschen."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "2,4GHz-/5GHz-WLAN",
			CONTENT: [{
				type: "name",
				title: "Ortungsintervall",
				content: "Geben Sie einen Wert von 40 bis 1000 (Millisek.) ein. Ortungspakete werden vom Router zur Synchronisierung des WLANs ausgesendet. Standardwert ist 100."
			},{
				type: "name",
				title: "RTS-Grenzwert",
				content: "Hier können Sie den RTS(Request to Send)-Grenzwert angeben. Ist ein Paket größer als dieser Wert, sendet der Router RTS-Frames zu einer bestimmten WLAN-Geräten, um den Versand eines Datenframes abzustimmen. Standardwert: 2346."
			},{
				type: "name",
				title: "RTIM-Intervall",
				content: "Dieser Wert bezeichnet die Intervalllänge zwischen zwei aufeinanderfolgenden Delivery Traffic Indication Messages (DTIMs). Ein DTIM-Feld ist ein Countdown, der die Clients des nächsten Fensters anweist, auf Broadcasts und Multicasts zu hören. Hat der Router Broadcasts oder Multicasts für verbundene Clients gepuffert, sendet er den nächsten DTIM. Sie können diese Dauer in Ortungsintervallen (1..15) angeben. Standard ist 1, d.h. das DTIM-Intervall ist genauso lang wie ein Ortungsintervall."
			},{
				type: "name",
				title: "Gruppenschlüsselaktualisierungsintervall",
				content: "Geben Sie die Dauer des Gruppenschlüsselaktualisierungsintervalls in Sekunden an. Dieser Wert muss 0 (=deaktiviert) oder mindestens 30 betragen."
			},{
				type: "name",
				title: "WMM-Funktion",
				content: "WMM garantiert, dass Nachrichten hoher Priorität bevorzugt übertragen werden. Es wird wärmstens empfohlen, diese Option aktiviert zu lassen"
			},{
				type: "name",
				title: "Short-GI",
				content: "Die Verwendung dieser Funktion wird empfohlen, da sie die Übertragungskapazitäten auf Kosten der Schutzintervallzeit vergrößert."
			},{
				type: "name",
				title: "AP-Isolation",
				content: "Sollen Ihre WLAN-Geräte keinen Zugriff aufeinander haben, aktivieren Sie dies."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "TX-Beamforming ist eine Signalverarbeitungstechnik, die in Sensor-Arrays für gerichtete Signalübertragung verwendet wird. Ist es aktiviert, wird es am Ende der Übertragung verwendet, um das WLAN-Signal zu verstärgen und die WLAN-Abdeckung zu vergrößern."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "WDS-Bridging aktivieren",
				content: "Hiermit können Sie WDS(Wireless Distribution System)-Bridge aktivieren. Damit kann der Router mittels Bridging mehrere WLANs miteinander verbinden. Ist die Option gewählt, müssen diese Felder ausgefüllt werden:",
				children: [{
					type: "name",
					title: "zu bridgende SSID",
					content: "SSID des WLANs, zu dem der Router sich als Client verbinden soll. Dieses Feld kann auch mittels der Suchfunktion automatisch befüllt werden."
				},{
					type: "name",
					title: "Suchen",
					content: "Klicken Sie hier, um SSID, BSSID, Signalstärke, Kanal und Sicherheitsinformationen der WLANs in Ihrer Umgebung anzeigen zu lassen. Klicken Sie dann eines davon an, werden die Felder SSID, MAC-Adresse und Sicherheit automatisch ausgefüllt."
				},{
					type: "name",
					title: "zu bridgende MAC-Adresse",
					content: "Geben Sie die MAC-Adresse (BSSID) des zu verbindenden Accesspoints, bestehend aus 12 Hexadezimalzeichen (0..9, a..f) im Format AA-AA-AA-AA-AA-AA ein. Haben Sie das zu verbindende WLAN angeklickt, wird dieses Feld automatisch ausgefüllt."
				},{
					type: "name",
					title: "Sicherheit",
					content: "Der Sicherheitstyp des zu verbindenden WLANs: Keine, WPA-PSK/WPA2-PSK oder WEP. Haben Sie das zu verbindende WLAN angeklickt, wird dieses Feld automatisch ausgefüllt.",
					children: [{
						type: "name",
						title: "Passwort",
						content: "Das WLAN-Passwort im Fall, dass Sie WPA-PSK/WPA2-PSK oder WEP benutzen."
					},{
						type: "name",
						title: "Authentifizierungstyp",
						content: "Diese Option ist nur verfügbar, wenn Sie WEP (Wired Equivalent Privacy) verwenden. Wählen Sie zwischen Automatisch, Offen und Shared-Key."
					},{
						type: "name",
						title: "WEP-Schlüsselformat",
						content: "Diese Option ist nur verüfgbar, wenn Sie WEP verwenden. Wählen Sie zwischen ASCII und Hexadezimal."
					}]
				}]
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Aktivieren Sie WPS, sofern Sie WPS (Wi-FI Protected Setup) verwenden möchten, um WPS-fähige Geräte ganz einfach auf Tastendruck in Ihr Netz bringen zu können."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Aktivieren Sie NAT, um NAT (Network Address Translation) zu aktivieren."
			},{
				type: "note",
				title: "Hinweis",
				content: "Ist NAT deaktiviert, funktionieren die definierten NAT-Weiterleitungsregeln nicht."
			},{
				type: "name",
				title: "NAT-Boost",
				content: "Aktivieren Sie NAT-Boost, um Ihrem Router den bestmöglichen NAT-Durchsatz zu erlauben."
			},{
				type: "note",
				title: "Hinweis",
				content: "Ist NAT-Boost aktiviert, funktionieren die Funktionen QoS und Trafficstatistiken nicht."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "DoS-Schutzebene",
			CONTENT: [{
				type: "paragraph",
				content: "Der DoS-Schutz schützt Ihr lokales Netz vor massenhaften ICMP-, UDP- und TCP-Anfragen."
			},{
				type: "name",
				title: "ICMP-FLOOD-Pakete",
				content: "Überschreitet die aktuelle Zahl der ICMP-FLOOD-Pakete diesen Wert, blockiert der Router alle weiteren sofort. Gültige Werte sind 5 bis 7200."
			},{
				type: "name",
				title: "UDP-FLOOD-Pakete",
				content: "Überschreitet die aktuelle Zahl der UDP-FLOOD-Pakete diesen Wert, blockiert der Router alle weiteren sofort. Gültige Werte sind 5 bis 7200."
			},{
				type: "name",
				title: "TCP-FLOOD-Pakete",
				content: "Überschreitet die aktuelle Zahl der TCP-SYN-FLOOD-Pakete diesen Wert, blockiert der Router alle weiteren sofort. Gültige Werte sind 5 bis 7200."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Duplex",
			CONTENT: [{
				type: "name",
				title: "Duplex",
				content: "Wählen Sie aus der Drop-Down-Liste den Duplextyp aus."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Aktivieren",
				content: "Aktivieren Sie dieses Kontrollkästchen, um die LEDs im Nachtmodus auszuschalten. Dies betrifft nur die LEDs, der Router arbeitet normal."
			},{
				type: "name",
				title: "Nachtzeit",
				content: "Geben Sie das Zeitfenster für den Nachtmodus an."
			},{
				type: "paragraph",
				content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "Mit OpenVPN können Sie über das Internet eine sichere Verbindung zu Ihrem Heimnetz aufbauen und so auf dieses zugreifen, als befänden Sie sich wirklich zu Hause. Um den VPN-Dienst zu nutzen, konfigurieren Sie bitte Dynamisches DNS (empfohlen) oder weisen Ihrem WAN-Port eine statische IP-Adresse zu. Die Systemzeit Ihres Routers muss hierfür korrekt eingestellt sein."
			},{
				type: "name",
				title: "VPN-Server aktivieren",
				content: "Aktivieren Sie dieses Kontrollkästchen, um den OpenVPN-Server zu aktivieren."
			},{
				type: "name",
				title: "Diensttyp",
				content: "Wählen Sie das Protokoll zur Kommunikation mit dem OpenVPN-Server aus, UDP oder TCP."
			},{
				type: "name",
				title: "Serviceport",
				content: "Geben Sie für die Kommunikation eine Portnummer von 1024 bis 65535 an. Standard: 1194."
			},{
				type: "name",
				title: "VPN-Subnetz(maske)",
				content: "Geben Sie den IP-Adressbereich ein, aus dem der OpenVPN-Server IP-Adressen für Clients bereitstellen soll."
			},{
				type: "name",
				title: "Clientzugriff",
				content: "Wählen Sie den Zugangstyp für den OpenVPN-Client aus.",
				children: [{
					type: "name",
					title: "Nur Heimnetzwerk",
					content: "Jeder Client kann nur eine Verbindung mit dem Router und dem LAN herstellen. Die Standardroute des Clients wird nicht geändert."
				},{
					type: "name",
					title: "Heimnetzwerk und Internet",
					content: "Clients können auf Ihr Heimnetz und Internetdienste zugreifen, als befänden Sie sich bei Ihnen zu Hause. Damit können geografische Einschränkungen der Diensteanbieter umgangen werden. Die Standardroute des Clients wird entsprechend angepasst."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Zertifikat",
			CONTENT: [{
				type: "paragraph",
				content: "Verwenden Sie dieses Zertifikat, um Informationen über die Identität des Remotecomputers bei der VPN-Verbindung zu erhalten."
			},{
				type: "name",
				title: "Erzeugen",
				content: "Klicken Sie hierauf, um ein Zertifikat zu erzeugen."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Konfigurationsdatei",
			CONTENT: [{
				type: "paragraph",
				content: "Remote-Clients verwenden die Konfigurationsdatei für den Zugriff auf Ihren Router."
			},{
				type: "name",
				title: "Exportieren",
				content: "Klicken Sie auf diese Schaltfläche, um die OpenVPN-Konfigurationsdatei zu speichern, mit der dann eine neue VPN-Verbindung hinzugefügt werden kann."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "Anleitung zur VPN-Clientinstallation",
			CONTENT: [{
				type: "step",
				title: "So aktivieren Sie den OpenVPN auf den Clientgeräten und verbinden sich mit dem OpenVPN-Server.",
				content:[{
					type: "paragraph",
					content: "Bevor Sie den OpenVPN-Server konfigurieren, konfigurieren Sie bitte Dynamisches DNS (empfohlen) oder weisen Ihrem WAN-Port eine statische IP-Adresse zu. Stellen Sie außerdem sicher, dass der externe Port nicht für einen Virtuellen Server verwendet wird und dass die Systemzeit korrekt eingestellt ist."
				},
					"1. Aktivieren Sie den VPN-Server.",
					"2. Konfigurieren the OpenVPN-Server parameters (Diensttyp, Dienstport, Clientzugriff and VPN Subnetz/Netzmaske) and click Speichern.",
					"3. Klicken Sie Exportieren, um Ihre Konfiguration in einer Datei zu speichern.",
					"4. Laden Sie sich für Ihre Clientgeräte den OpenVPN-Client von <a class=\"link\" href=\"http://openVPN.net/index.php/download/community-downloads.html\">http://openVPN.net/index.php/download/community-downloads.html</a> herunter.<br> Unterstützte Plattformen: Windows, MacOS X, Linux.",
					"5. Starten Sie das OpenVPN-Client-Utility und erstellen Sie eine neue VPN-Verbindung unter Verwendung der zuvor gespeicherten Konfigurationsdatei, um Ihr Gerät mit dem VPN-Server zu verbinden."
				]},{
					type: "note",
					title: "Hinweis",
					content: "Um weitere Einzelheiten über OpenVPN-Clients zu erfahren, besuchen Sie <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP-VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Mit PPTP-VPN können über das Internet eine sichere Verbindung zu Ihrem Heimnetz aufbauen und so auf dieses zugreifen, als befänden Sie sich wirklich zu Hause. Wird von einigen Internetdiensteanbietern blockiert. Um den VPN-Dienst zu nutzen, konfigurieren Sie bitte Dynamisches DNS (empfohlen) oder weisen Ihrem WAN-Port eine statische IP-Adresse zu. Die Systemzeit Ihres Routers muss hierfür korrekt eingestellt sein."
			},{
				type: "name",
				title: "VPN-Server aktivieren",
				content: "Aktivieren Sie dieses Kontrollkästchen, um den PPTP-VPN-Server zu aktivieren."
			},{
				type: "name",
				title: "Client-IP-Adresse",
				content: "Geben Sie den IP-Adressbereich (für bis zu 10 Clients) ein, aus dem der PPTP-VPN-Server IP-Adressen für Clients bereitstellen soll."
			},{
				type: "name",
				title: "Zugriff über Samba (Netzwerkumgebung) zulassen",
				content: "Wählen Sie dies, um Ihrem VPN-Client Zugriff auf Ihren lokalen Samba-Server zu gewähren."
			},{
				type: "name",
				title: "NetBIOS-Passthrough zulassen",
				content: "Wählen Sie dies, um Ihrem VPN-Client Zugriff mittels NetBIOS-Namen auf Ihren lokalen Samba-Server zu gewähren."
			},{
				type: "name",
				title: "Ungesicherte Verbindungen zulassen",
				content: "Wählen Sie dies, aus, um ungesicherte Verbindungen zu Ihrem VPN-Server zuzulassen."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Liste der Benutzerkonten",
			CONTENT: [{
				type: "paragraph",
				content: "Hier sehen Sie die Benutzerkonten, mit denen man eine Verbindung zum PPTP-VPN-Server aufbauen kann."
			},{
				type: "step",
				title: "Hinzufügen eines PPTP-VPN-Kontos",
				content: [
					"1. Klicken Sie Hinzufügen.",
					"2. Geben Sie den Benutzernamen und das Kennwort für die Authentifizierung an dem PPTP-VPN-Server ein.",
					"3. Klicken Sie OK."
				]
			},{
				type: "step",
				title: "Löschen eines existierenden Kontos",
				content: "Klicken Sie in der Tabelle Bearbeiten oder auf die zugehörige Mülltonne."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "Anleitung zur VPN-Clientinstallation",
			CONTENT: [{
				type: "step",
				title: "So aktivieren Sie den OpenVPN auf den Clientgeräten und verbinden sich mit dem PPTP-VPN-Server.",
				content:[{
					type: "paragraph",
					content: "Bevor Sie den PPTP-VPN-Server konfigurieren, konfigurieren Sie bitte Dynamisches DNS (empfohlen) oder weisen Ihrem WAN-Port eine statische IP-Adresse zu. Stellen Sie außerdem sicher, dass der Port 1723 nicht für einen Virtuellen Server verwendet wird und dass die Systemzeit korrekt eingestellt ist."
				},
					"1. Aktivieren Sie den VPN-Server.",
					"2. Konfigurieren Sie die PPTP-VPN-Parameter und klicken Sie Speichern.",
					"3. Erstellen Sie auf Ihren Clientgeräten jeweils eine PPTP-VPN-Verbindung. Unterstützte Plattformen: Windows, MacOS X, Linux, iOS und Android.",
					"4. Starten Sie das PPTP-VPN-Programm und erstellen Sie eine neue VPN-Verbindung zum Domänennamen oder der statischen WAN-IP-Adresse, um Ihr Gerät mit dem PPTP-VPN-Server zu verbinden."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "VPN-Verbindungen",
			CONTENT: [{
				type: "paragraph",
				content: "Auf dieser Seite werden die Clients angezeigt, die aktuell mit den OpenVPN- und PPTP-VPN-Servern, die auf dem Router ausgeführt werden, verbunden sind."
			},{
				type: "paragraph",
				content: "Klicken Sie auf das Minussymbol, um die Verbindung des entsprechenden Clients zu trennen."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Internetverbindungsstatus",
				content: "Zeigt an, ob Ihr Router mit dem Internet verbunden ist."
			},{
				type: "name",
				title: "Verbindungstyp",
				content: "Typ Ihrer Internetverbindung."
			},{
				type: "name",
				title: "IP-Adresse",
				content: "Die aktuell dem Router zugewiesene öffentliche IP-Adresse (Internet-IP-Adresse)."
			},{
				type: "name",
				title: "Zweitverbindung/IP-Adresse",
				content: "Typ und IP-Adresse Ihrer Zweitverbindung."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Router",
			CONTENT: [{
				type: "title",
				title: "2,4GHz-/5GHz-WLAN"
			},{
				type: "name",
				title: "SSID",
				content: "Name Ihres 2,4-/5GHz-WLANs."
			},{
				type: "name",
				title: "Kanal",
				content: "Kanal, den Ihr 2,4-/5GHz-WLAN aktuell verwendet."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "MAC-Adresse der 2,4-/5GHz-WLAN-Einheit Ihres Routers."
			},{
				type: "title",
				title: "2,4GHz/5GHz – Gastnetzwerk"
			},{
				type: "name",
				title: "Status",
				content: "Zeigt an, ob Ihr 2,4-/5GHz-Gast-WLAN aktiviert ist."
			},{
				type: "name",
				title: "SSID",
				content: "Name Ihres Gast-WLANs."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Kabelgebundene/drahtlose Clients",
			CONTENT: [{
				type: "name",
				title: "Name",
				content: "Name des mit dem Router verbundenen Geräts."
			},{
				type: "name",
				title: "IP-Adresse",
				content: "Die dem Gerät zugewiesene IP-Adresse."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "Die MAC-Adresse des Gerätes."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Drucker",
			CONTENT: [{
				type: "name",
				title: "Name",
				content: "Name des an den USB-Port angeschlossenen Druckers."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "USB-Datenträger",
			CONTENT: [{
				type: "name",
				title: "USB-Datenträger",
				content: "Name des angeschlossenen Datenträgers."
			},{
				type: "name",
				title: "Gesamt",
				content: "Gesamtkapazität des USB-Datenträgers."
			},{
				type: "name",
				title: "Verfügbar",
				content: "Freier Speicherplatz auf dem USB-Datenträger."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Automatische Erkennung",
				content: "Klicken Sie hier, um den Router Ihren Internetverbindungstyp automatisch erkennen zu lassen."
			},{
				type: "note",
				title: "Hinweis",
				content: "Sind Sie sich bezüglich Ihres Internetverbindungstyps nicht sicher, versuchen Sie die Automatische Erkennung oder fragen Sie Ihren Internetdiensteanbieter."
			},{
				type: "title",
				title: "Internetverbindungstyp: Statische IP-Adresse",
			},{
				type: "name",
				title: "IP-Adresse, Subnetzmaske, Standardgateway, Haupt-/Backup-DNS-Server",
				content: "Geben Sie hier die von Ihrem Internetdiensteanbieter vorgegebenen Werte ein."
			},{
				type: "title",
				title: "Internetverbindungstyp: Dynamische IP-Adresse",
			},{
				type: "name",
				title: "MAC-Adresse NICHT klonen/MAC-Adresse des angeschlossenen Computers klonen",
				content: "Hier können Sie die MAC-Adresse klonen, sofern Ihr Internetdiensteanbieter dies erfordert."
			},{
				type: "title",
				title: "Internetverbindungstyp: PPPoE",
			},{
				type: "name",
				title: "Benutzername/Passwort",
				content: "Geben Sie hier die von Ihrem Internetdiensteanbieter vorgegebenen Zugangsdaten ein. Achten Sie hier auf Groß- und Kleinschreibung."
			},{
				type: "title",
				title: "Internetverbindungstyp: L2TP/PPTP",
			},{
				type: "name",
				title: "Benutzername/Passwort",
				content: "Geben Sie hier die von Ihrem Internetdiensteanbieter vorgegebenen Zugangsdaten ein. Achten Sie hier auf Groß- und Kleinschreibung."
			},{
				type: "name",
				title: "Zweitverbindung (Dynamische oder Statische IP-Adresse)",
				children: [{
					type: "name",
					title: "Dynamische IP-Adresse",
					content: "Wählen Sie dies aus, wenn IP-Adresse und Subnetzmaske von Ihrem Internetdiensteanbieter automatisch vergeben werden."
				},{
					type: "name",
					title: "Statische IP-Adresse",
					content: "Wählen Sie dies aus, sofern Sie Ihre Konfiguration von Ihrem Internetdiensteanbieter von Hand eintragen müssen."
				}]
			},{
				type: "name",
				title: "IP-Adresse/Domänenname des VPN-Servers",
				content: "Geben Sie hier die Adresse des VPN-Servers ein, so wie Sie sie von Ihrem Internetdiensteanbieter erhalten haben."
			},{
				type:"paragraph",
				content:"Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "WLAN-Einstellungen",
			CONTENT: [{
				type: "name",
				title: "WLAN aktivieren",
				content: "Aktivieren des 2,4-/5GHz-WLANs."
			},{
				type: "name",
				title: "WLAN-Name (SSID)",
				content: "Hier können Sie optional den WLAN-Namen (SSID) ändern. Dieser kann bis zu 32 Zeichen lang sein. Es wird zwischen Groß- und Kleinschreibung unterschieden."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Wählen Sie dies aus, um Ihr 2,4-/5GHz-WLAN zu verstecken."
			},{
				type: "name",
				title: "Passwort",
				content: "Geben Sie ein aus 8 bis 63 ASCII- oder 8 bis 64 Hexadezimal-Zeichen bestehendes Passwort ein. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
			},{
				type:"paragraph",
				content:"Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Geräteeinstellungen",
			CONTENT: [{
				type: "paragraph",
				content: "Auf der Seite Geräteeinstellungen sehen Sie Informationen zu am USB-Port angeschlossenen Geräten."
			},{
				type: "name",
				title: "Suchen",
				content: "Normalerweise findet der Router neu angeschlossene USB-Geräte automatisch. Mit dieser Schaltfläche können Sie angeschlossene USB-Geräte manuell erkennen lassen."
			},{
				type: "name",
				title: "Partition",
				content: "Zeigt den Namen der Partition."
			},{
				type: "name",
				title: "Kapazität",
				content: "Gesamtkapazität des USB-Datenträgers"
			},{
				type: "name",
				title: "Freier Speicherplatz",
				content: "Aktuell verfügbarer Speicherplatz auf dem USB-Datenträger."
			},{
				type: "name",
				title: "Sicher entfernen",
				content: "Klicken Sie hier, bevor Sie das USB-Gerät physisch vom Router entfernen.",
				children: [{
					type: "paragraph",
					content: "Die Schaltfläche Sicher entfernen erscheint nur, wenn ein USB-Datenträger an den Router angeschlossen ist. Ein Entfernen ist nicht möglich, solange das USB-Gerät in Verwendung ist."
				}]
			},{
				type: "name",
				title: "Status",
				content: "Diese Option erscheint nur, wenn ein USB-Datenträger an den Router angeschlossen ist. Aktiviert die Freigabe des USB-Geräts."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Freigabeeinstellungen",
			CONTENT: [{
				type: "name",
				title: "Servername",
				content: "Der Name, unter dem der angeschlossene USB-Datenträger erreichbar ist."
			},{
				type:"paragraph",
				content:"Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Ordnerfreigabe",
			CONTENT: [{
				type: "name",
				title: "Komplett freigeben",
				content: "Ermöglicht die Freigabe des ganzen USB-Datenträgers. Möchten Sie nur einzelne Ordner freigeben, deaktivieren Sie diese Option."
			},{
				type: "name",
				title: "Authentifizierung aktivieren",
				content: "Ist dies aktiviert, müssen Benutzer einen Namen und ein Passwort eingeben, um Zugriff auf die freigegebenen Ordner zu erhalten (empfohlen)."
			},{
				type: "name",
				title: "Ordnername",
				content: "Name des freigegebenen Ordners."
			},{
				type: "name",
				title: "Ordnerpfad",
				content: "Der Pfad zu dem freigegebenen Ordner."
			},{
				type: "name",
				title: "Medienfreigabe",
				content: "Erlaubt dem Mediaserver die Verwendung dieses Ordners."
			},{
				type: "name",
				title: "Datenträgername",
				content: "Name des freigegebenen Datenträgers."
			},{
				type: "name",
				title: "Status",
				content: "Zeigt den Status des freigegebenen Ordners an."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Bietet Optionen zum Bearbeiten und zum Löschen einer Freigabe."
			},{
				type: "name",
				title: "Hinzufügen",
				content: "Anlegen eines neuen Eintrags."
			},{
				type: "name",
				title: "Löschen",
				content: "Entfernen einer Freigabe."
			},{
				type: "name",
				title: "Durchsuchen",
				content: "Auswahl eines freizugebenden Ordners."
			},{
				type: "name",
				title: "Zugriff vom Gastnetz zulassen",
				content: "Bestimmt, ob die Teilnehmer Ihres Gastnetzes Zugriff auf die Freigabe bekommen."
			},{
				type: "name",
				title: "Authentifizierung aktivieren",
				content: "Ist dies aktiviert, müssen Benutzer einen Namen und ein Passwort eingeben, um Zugriff auf die freigegebenen Ordner zu erhalten (empfohlen)."
			},{
				type: "name",
				title: "Schreibzugriff erlauben",
				content: "Erlaubt dem Benutzer das Verändern von Datenträgerinhalten."
			},{
				type: "name",
				title: "Medienfreigabe erlauben",
				content: "Erlaubt dem Mediaserver die Verwendung dieses Ordners."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Printserver",
			CONTENT: [{
				type: "name",
				title: "Printserver",
				content: "Aktivieren/Deaktivieren der Printserverfunktion."
			},{
				type: "name",
				title: "Druckername",
				content: "Name des angeschlossenen Druckers."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Kindersicherung",
			CONTENT: [{
				type: "name",
				title: "Kindersicherung",
				content: "Aktivieren der Kindersicherung (standardmäßig deaktiviert)."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Der Kindersicherung unterliegende Geräte",
			CONTENT: [{
				type: "paragraph",
				content: "Listet die von der Kindersicherung betroffenen Geräte auf."
			},{
				type: "name",
				title: "Gerätename",
				content: "Namen der von der Kindersicherung betroffenen Clientgeräte."
			},{
				type: "name",
				title: "MAC-Adresse",
				content: "MAC-Adressen aller Geräte, für die die Kindersicherung gilt."
			},{
				type: "name",
				title: "Zeitfenster für Internetzugriff",
				content: "Zeitrahmen, für den die Kindersicherung gilt. Basiert auf der Router-Systemzeit, die unter \"System-Tools -> Zeiteinstellungen\" konfiguriert werden kann."
			},{
				type: "name",
				title: "Beschreibung",
				content: "Kurze Beschreibung des Gerätes."
			},{
				type: "name",
				title: "Status",
				content: "Aktueller Status (aktiviert oder deaktiviert) der Kindersicherungsregel für dieses Gerät."
			},{
				type: "name",
				title: "Bearbeiten",
				content: "Bearbeiten oder Löschen eines Geräteeintrags."
			},{
				type: "step",
				title: "So sperren Sie den Internetzugang für ein neues Gerät:",
				content:[
					"1. Klicken Sie Hinzufügen.",
					"2. Klicken Sie Existierende Geräte anzeigen und wählen Sie aus der Liste der verbundenen Geräte das zu konfigurierende heraus. Oder Sie geben den Gerätenamen und die MAC-Adresse von Hand ein.",
					"3. Klicken Sie Internetzugriffszeitfenster, um die Zeit des Internetzugriffs einzuschränken.",
					"4. Vergeben Sie eine kurze Beschreibung (optional).",
					"5. Wählen Sie Aktivieren.",
					"6. Klicken Sie OK."
				]
			},{
				type: "paragraph",
				content: "Klicken Sie in der Tabelle Bearbeiten oder Löschen, um einen Eintrag zu bearbeiten oder zu löschen."
			},{
				type: "paragraph",
				content: "Um mehrere Einträge zu löschen, wählen Sie diese aus und klicken Sie über der Tabelle auf Löschen."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Gastnetz",
			CONTENT: [{
				type: "paragraph",
				content: "Errichten Sie ein Gast-WLAN, können Sie Ihre Gäste von Ihrem lokalen Netz fernhalten, indem diese einen anderen WLAN-Namen und ein anderes Passwort verwenden."
			},{
				type: "name",
				title: "Gäste dürfen einander sehen",
				content: "Aktivieren Sie dies, um alle Gastnetzteilnehmer einander sichtbar zu machen."
			},{
				type: "name",
				title: "Gästen Zugriff auf mein lokales Netz ermöglichen",
				content: "Gästen Zugriff auf lokale Ressourcen wie Netzfreigaben und Drucker gewähren."
			},{
				type: "name",
				title: "Gastnetz aktivieren",
				content: "Aktivieren des Gastnetzes."
			},{
				type: "name",
				title: "WLAN-Name (SSID)",
				content: "Gast-WLAN-Name, kann frei gewählt werden (1 bis 32 Zeichen)."
			},{
				type: "name",
				title: "SSID verbergen",
				content: "Hiermit können Sie Ihr Gast-WLAN unsichtbar machen."
			},{
				type: "name",
				title: "Passwort",
				content: "Hier haben Sie die Möglichkeit, ein eigenes Passwort aus 8 bis 63 ASCII-Zeichen oder 8 bis 64 Hexadezimalzeichen zu erstellen."
			},{
				type:"paragraph",
				content:"Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link-Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"Mit TP-Links Clouddienst können Sie Ihr Netz aus der Ferne in Echtzeit überwachen sowie jederzeit von überall aus auf Ihre TP-Link-Geräte zugreifen."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Benutzerkonteninformationen",
			CONTENT:[{
				type:"paragraph",
				content:"Zeigt Informationen zu Ihrer TP-Link-ID. Durch Klick auf Bearbeiten können Sie diese verändern."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Geräteinformationen",
			CONTENT:[{
				type:"paragraph",
				content:"Zeigt Geräteinformationen wie das assoziierte Cloudkonto an."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Gebundene Benutzerkonten",
			CONTENT:[{
				type:"paragraph",
				content:"Zeigt alle aktuell mit dem Gerät assoziierten Cloudkonten an."
			},{
				type:"step",
				title:"So binden Sie ein Benutzerkonto",
				content:["1. Klicken Sie Binden.",
				"2. Geben Sie eine zuvor registrierte E-Mail-Adresse ein, um diese zu binden.",
				"3. Klicken Sie Speichern."]
			}]

		}

	};
})(jQuery);

