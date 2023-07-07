(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează informații relevante cu privire la conexiunea WAN (Internet)."
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Adresa fizică unică atribuită portului Internet al routerului  (WAN)."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Adresa IP atribuită portului Internet al routerului (WAN). Dacă adresa IP este prezentată ca 0.0.0.0, aceasta indică lipsa de acces la Internet"
			},{
				type: "name",
				title: "Mască Subrețea",
				content: "Acest parametru delimitează porțiunea de rețea și porțiunea gazdă (Host) a unei adrese IP."
			},{
				type: "name",
				title: "Default Gateway",
				content: "Adresa IP folosită pentru a conecta routerul la rețea."
			},{
				type: "name",
				title: "DNS Primar/DNS Secundar",
				content: "Domain Name System (DNS) traduce nume de gazde și domenii de Internet în adrese IP. Informațiile acestor servere DNS sunt atribuite de furnizorul serviciilor de Internet (ISP)."
			},{
				type: "name",
				title: "Tipul Conexiunii",
				content: "Tipul curent de conectare al portului Internet (WAN)."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Adresa fizică unică atribuită portului Internet al routerului  (WAN)."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Adresa IPv6 atribuită portului Internet al routerului (WAN)."
			},{
				type: "name",
				title: "Default Gateway",
				content: "Adresa IP folosită pentru a conecta routerul la rețea."
			},{
				type: "name",
				title: "DNS Primar/DNS Secundar",
				content: "Domain Name System (DNS) traduce nume de gazde și domenii de Internet în adrese IP. Informațiile acestor servere DNS sunt atribuite de furnizorul serviciilor de Internet (ISP)."
			},{
				type: "name",
				title: "Tipul Conexiunii",
				content: "Tipul curent de conectare al portului Internet (WAN)."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Wireless",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează informații relevante despre rețeaua wireless."
			},{
				type: "name",
				title: "Nume Rețea Wireless (SSID)",
				content: "Numele rețelei wireless, de asemenea, cunoscut sub numele de SSID (Service Set Identifier)."
			},{
				type: "name",
				title: "Emisie Wireless",
				content: "Starea curentă (Pornită sau Oprită) a rețelei wireless."
			},{
				type: "name",
				title: "Mod",
				content: "Modul wireless curent."
			},{
				type: "name",
				title: "Lățime Canal",
				content: "Lățimea de bandă a canalului rețelei wireless."
			},{
				type: "name",
				title: "Canal",
				content: "Canalul wireless curent și frecvența corespunzătoare (în GHz)."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Adresa MAC a interfeței wireless a routerului."
			},{
				type: "name",
				id: "status_wds",
				title: "Stare WDS",
				content: "Starea curentă (Activat sau Dezactivat) a modului WDS."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează informații despre porturile Ethernet (LAN)."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Adresa fizică unică atribuită portului Ethernet al routerului (LAN)."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Adresa IPv4 asociată portului Ethernet (LAN) al routerului."
			},{
				type: "name",
				title: "Mască Subrețea",
				content: "Acest parametru delimitează porțiunea de rețea și porțiunea gazdă (Host) a unei adrese IP."
			},{
				type: "name",
				title: "DHCP",
				content: "Afișează dacă serverul DHCP al routerului este activ pentru dispozitivele din porturile LAN sau nu."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Adresa fizică unică atribuită portului Ethernet al routerului (LAN)."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Adresa IPv6 asociată portului Ethernet (LAN) al routerului."
			},{
				type: "name",
				title: "Adresă Link-local",
				content: "Adresa IPv6 link-local pentru interfața LAN."
			},{
				type: "name",
				title: "Mod de alocare",
				content: "Tipul de adresă IPv6 pentru interfața LAN."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Guest Network 2.4GHz/5GHz",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează informații despre rețeaua wireless pentru oaspeți (Guest Network)."
			},{
				type: "name",
				title: "Nume Rețea Wireless (SSID)",
				content: "Numele rețelei wireless pentru oaspeți (Guest Network)."
			},{
				type: "name",
				title: "Ascunde SSID",
				content: "Afișează dacă numele rețelei Guest Network (SSID) este ascuns sau nu."
			},{
				type: "name",
				title: "Emisie Wireless",
				content: "Starea curentă (Pornită sau Oprită) a rețelei guest."
			},{
				type: "name",
				title: "Permite comunicarea între clienți",
				content: "Afișează dacă toate dispozitivele din rețeaua Guest Network au sau nu permisiunea de a comunica între ele."
			}]
		},
		STATUS_USB: {
			TITLE: "Dispozitive USB",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează informații curente despre dispozitivele de stocare USB și/sau imprimantele conectate la router prin intermediul porturilor USB."
			},{
				type: "name",
				title: "Imprimantă",
				content: "Nume imprimantă conectată."
			},{
				type: "name",
				title: "Dispozitiv de Stocare USB",
				content: "Numele dispozitivului de stocare USB conectat la router."
			},{
				type: "name",
				title: "Spațiu Total",
				content: "Capacitatea de stocare totală a dispozitivului USB conectat."
			},{
				type: "name",
				title: "Spațiu Liber",
				content: "Capacitatea de stocare disponibilă a dispozitivului USB conectat."
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Performanță",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează informații despre performanța routerului curent."
			},{
				type: "name",
				title: "Încărcare Procesor",
				content: "Nivelul de solicitare la care este supus procesorul."
			},{
				type: "name",
				title: "Utilizare Memorie",
				content: "Utilizarea curentă a memoriei."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Utilizatori Rețea Cablu",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează informațiile aferente tuturor dispozitivelor cu fir care sunt conectate la rețea."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Utilizatori Wireless",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează informațiile aferente tuturor dispozitivelor wireless care sunt conectate la rețea."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Tipul Conexiunii la Internet: IP Static"
			},{
				type: "paragraph",
				content: "Selectați acest tip dacă furnizorul dumneavoastră de Internet vă oferă următorii parametri de conectare: o anumită adresă IP (fixă), Subnet Mask, Gateway, DNS."
			},{
				type: "name",
				title: "Adresa IP/Subnet Mask/Default Gateway/DNS Primar/DNS Secundar",
				content: "Introduceți informațiile oferite de furnizorul dumneavoastră de Internet (ISP)."
			},{
				type: "name",
				title: "Dimensiune MTU",
				content: "Dimensiunea MTU (Maximum Transmission Unit) implicită și uzuală pentru majoritatea rețelelor Ethernet este de 1500 Bytes. Nu este recomandat să modificați dimensiunea implicită MTU, cu excepția cazului în care furnizorul dumneavoastră de Internet solicită acest lucru."
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: IP Dinamic"
			},{
				type: "paragraph",
				content: "Selectați acest mod dacă ISP-ul vă furnizează conexiunea la Internet cu ajutorul unui server DHCP."
			},{
				type: "name",
				title: "Adresa IP/Subnet Mask/Default Gateway/DNS Primar/DNS Secundar",
				content: "Acești parametri sunt alocați automat de serverul DHCP al la furnizorului dumneavoastră de Internet."
			},{
				type: "name",
				title: "Reînnoire",
				content: "Apăsați pe acest buton pentru a obține noi parametri IP de la serverul DHCP."
			},{
				type: "name",
				title: "Eliberare",
				content: "Apăsați pe acest buton pentru a elibera parametrii IP alocați de serverul DHCP al furnizorului de Internet."
			},{
				type: "name",
				title: "Folosește următoarele adrese DNS",
				content: "Dacă furnizorul dumneavoastră de Internet oferă una sau două adrese DNS, selectați această casetă și introduceți DNS-ul Primar și DNS-ul Secundar în câmpurile corespunzătoare. În caz contrar, adresele DNS vor fi alocate automat de furnizorul dumneavoastră de Internet."
			},{
				type: "name",
				title: "Dimensiune MTU",
				content: "Dimensiunea MTU (Maximum Transmission Unit) implicită și uzuală pentru majoritatea rețelelor Ethernet este de 1500 Bytes. Nu este recomandat să modificați dimensiunea implicită MTU, cu excepția cazului în care furnizorul dumneavoastră de Internet solicită acest lucru."
			},{
				type: "name",
				title: "Nume Gazdă",
				content: "Introduceți o valoare în acest câmp pentru a specifica numele de gazdă al routerului (Host Name)."
			},{
				type: "name",
				title: "Obține IP folosind Unicast DHCP",
				content: "Selectați această casetă dacă serverul DHCP al furnizorului dumneavoastră de Internet nu are suport pentru aplicațiile de broadcast și nu se poate obține adresa IP automat."
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: PPPoE"
			},{
				type: "paragraph",
				content: "Selectați acest tip dacă utilizați serviciul DSL (Digital Subscriber Line), fiind prevăzut cu un nume de utilizator și o parolă de la furnizorul dumneavoastră de Internet."
			},{
				type: "name",
				title: "Utilizator/Parolă",
				content: "Introduceți Utilizatorul și Parola, oferite de furnizorul dumneavoastră de servicii Internet. Aceste câmpuri trebuie completate exact cum sunt înscrise în contract."
			},{
				type: "name",
				title: "Adresă IP/DNS Primar/DNS Secundar",
				content: "Acești parametri sunt alocați automat de serverul DHCP al furnizorului dumneavoastră de Internet ."
			},{
				type: "name",
				title: "Conexiune Secundară (Niciuna, IP Dinamic, IP Static)",
				children: [{
					type: "name",
					title: "Niciuna",
					content: "Selectați dacă nu este prevăzută o conexiune secundară."
				},{
					type: "name",
					title: "IP Dinamic",
					content: "Selectați această opțiune dacă adresele IP și Subnet Mask sunt furnizate automat de furnizorul de servicii Internet.",
					children: [{
						type: "name",
						title: "Reînnoire",
						content: "Apăsați acest buton pentru a obține noi parametri IP de la furnizorul dumneavoastră de Internet."
					},{
						type: "name",
						title: "Eliberare",
						content: "Apăsați pe acest buton pentru a elibera parametrii IP alocați de serverul DHCP al furnizorului de Internet."
					}]
				},{
					type: "name",
					title: "IP Static",
					content: "Selectați dacă ISP-ul v-a furnizat adresa IP si Subnet Mask, apoi introduceți aceste informații în câmpurile corespunzătoare."
				}]
			},{
				type: "name",
				title: "Dimensiune MTU",
				content: "Dimensiunea MTU (Maximum Transmission Unit) tipică pentru rețelele Ethernet este 1480 Bytes.",
				children: [{
					type: "note",
					title: "Notă",
					content: "În situații rare, furnizorul dumneavoastră de Internet vă poate solicita ajustarea dimensiunii MTU pentru o performanță mai bună a conexiunii. Nu este indicat să modificați valoarea decât dacă este absolut necesar."
				}]
			},{
				type: "name",
				title: "Nume Serviciu/Nume Concentrator Acces",
				content: "În mod implicit, câmpurile pentru Numele Serviciului și Numele Concentratorului de Acces sunt necompletate. Aceste câmpuri nu trebuie configurate decât dacă furnizorul dumneavoastră de Internet solicită acest lucru."
			},{
				type: "name",
				title: "Detectare Interval Online",
				content: "Introduceți o valoare cuprinsă între 0 și 120 (secunde) pentru care routerul detectează activitatea Concentratorului de Acces la fiecare interval. Valoarea implicită este 10."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Dacă furnizorul dumneavoastră de Internet oferă o anumită adresă IP (fixă), selectați Folosește următoarea adresă IP și introduceți adresa IP în câmpul respectiv. În caz contrar selectați Obține Automat de la furnizorul de Internet pentru a obține automat o adresă IP alocată de server."
			},{
				type: "name",
				title: "Adresă DNS/DNS Primar/DNS Secundar",
				content: "Dacă furnizorul dumneavoastră de Internet oferă anumite adrese IP DNS (fixe), selectați Utilizați Următoarea Adresă DNS și introduceți adresa (adresele) în câmpurile DNS Primar și DNS Secundar; în caz contrar selectați Obține Automat de la furnizorul de Internet pentru a obține automat o adresă IP alocată de server."
			},{
				type: "name",
				title: "Mod de Conectare",
				content: "Selectați un mod de conectare corespunzător tipului dumneavoastră de conexiune la Internet.",
				children: [{
					type: "name",
					title: "Automat",
					content: "În acest mod, conexiunea la Internet se realizează automat de fiecare dată cand aceasta se deconecteaza."
				},{
					type: "name",
					title: "La Cerere",
					content: "În acest mod, conexiunea la Internet va fi oprită automat după o perioadă de inactivitate specificată (Timp Maxim de Inactivitate). Conexiunea este restabilită atunci când încercați să accesați Internetul din nou."
				},{
					type: "name",
					title: "Programat",
					content: "În acest mod, conexiunea la Internet este stabilită doar într-un anumit interval de timp. Dacă este selectată această opțiune, introduceți ora de început și ora de încheiere; ambele sunt în formatul OO:MM."
				},{
					type: "name",
					title: "Manual",
					content: "În acest mod, conexiunea la Internet este controlată manual apăsând pe butonul Deconectare sau Conectare. Acest mod suportă de asemenea functia Timp Maxim de Inactivitate.  Introduceți în câmpul Timp Maxim de Inactivitate un timp maxim (în minute) pentru care conexiunea la Internet poate fi inactivă înainte de a fi încheiată. Valoarea implicită este de 15 minute. Dacă doriți sa se mențină activă conexiunea la Internet în orice moment, introduceți 0 (zero)."
				},{
					type: "note",
					title: "Notă",
					content: "Modul de conectare Programat va intra în vigoare numai în momentul în care timpul sistemului din meniul Avansat > Unelte Sistem > Setări Oră este configurat."
				}]
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: BigPond Cable"
			},{
				type: "paragraph",
				content: "Selectați acest tip dacă furnizorul dumneavoastră de Internet oferă conexiune BigPond Cable."
			},{
				type: "name",
				title: "Utilizator/Parolă",
				content: "Introduceți Utilizatorul și Parola, oferite de furnizorul dumneavoastră de servicii Internet. Aceste câmpuri trebuie completate exact cum sunt înscrise în contract."
			},{
				type: "name",
				title: "Server Autentificare",
				content: "Introduceți adresa IP a serverului de autentificare sau numele de gazdă."
			},{
				type: "name",
				title: "Domeniu Autentificare",
				content: "Introduceți sufixul numelui de domeniu al serverului (bazat pe locația dumneavoastră). De exemplu, nsw.bigpond.net.au pentru NSW/ACT, vic.bigpond.net.au pentru VIC/TAS/WA/SA/NT, sau qld.bigpond.net.au pentru QLD."
			},{
				type: "name",
				title: "Dimensiune MTU",
				content: "Dimensiunea MTU (Maximum Transmission Unit) implicită și uzuală pentru majoritatea rețelelor Ethernet este de 1500 Bytes. Nu este recomandat să modificați dimensiunea implicită MTU, cu excepția cazului în care furnizorul dumneavoastră de Internet solicită acest lucru."
			},{
				type: "name",
				title: "Mod de Conectare",
				content: "Selectați un mod de conectare corespunzător tipului dumneavoastră de conexiune la Internet.",
				children: [{
					type: "name",
					title: "Automat",
					content: "În acest mod, conexiunea la Internet se realizează automat de fiecare dată cand aceasta se deconecteaza."
				},{
					type: "name",
					title: "La Cerere",
					content: "În acest mod, conexiunea la Internet va fi oprită automat după o perioadă de inactivitate specificată (Timp Maxim de Inactivitate). Conexiunea este restabilită atunci când încercați să accesați Internetul din nou."
				},{
					type: "name",
					title: "Manual",
					content: "În acest mod, conexiunea la Internet este controlată manual apăsând pe butonul Deconectare sau Conectare. Acest mod suportă de asemenea functia Timp Maxim de Inactivitate.  Introduceți în câmpul Timp Maxim de Inactivitate un timp maxim (în minute) pentru care conexiunea la Internet poate fi inactivă înainte de a fi încheiată. Valoarea implicită este de 15 minute. Dacă doriți sa se mențină activă conexiunea la Internet în orice moment, introduceți 0 (zero)."
				}]
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Selectaţi acest tip dacă vă conectaţi la un Server VPN L2TP/PPTP, fiind prevăzut cu un Nume de Utilizator,  Parolă și Adresă IP/Nume Domeniu a/al serverului furnizorului dumneavoastră de Internet."
			},{
				type: "name",
				title: "Utilizator/Parolă",
				content: "Introduceți Utilizatorul și Parola, oferite de furnizorul dumneavoastră de servicii Internet. Aceste câmpuri trebuie completate exact cum sunt înscrise în contract."
			},{
				type: "name",
				title: "Adresă IP/DNS Primar/DNS Secundar",
				content: "Aceşti parametri vor fi automat atribuiți de serverul DHCP al furnizorului dumneavoastră de Internet."
			},{
				type: "name",
				title: "Conexiune Secundară (IP Dinamic sau IP Static)",
				children: [{
					type: "name",
					title: "IP Dinamic",
					content: "Selectați această opțiune dacă adresele IP și Subnet Mask sunt furnizate automat de furnizorul de servicii Internet."
				},{
					type: "name",
					title: "IP Static",
					content: "Selectați acestă opțiune dacă adresele IP, Subnet Mask, Gateway și DNS sunt specificate în contract de furnizorul de servicii de Internet, iar apoi tastați aceste date în câmpurile aferente."
				}]
			},{
				type: "name",
				title: "IP Server VPN/Nume Domeniu",
				content: "Tastați Adresa IP a serverului VPN sau Numele de Domeniu oferit de furnizorul de Internet."
			},{
				type: "name",
				title: "Dimensiune MTU",
				content: "Valoarea uzuală și implicită a dimensiunii MTU (Maximum Transmission Unit) pentru majoritatea rețelelor Ethernet este 1460 Bytes pentru L2TP sau 1420 Bytes pentru PPTP. NU este recomandat să schimbați valoarea MTU decât dacă v-a fost solicitat de ISP."
			},{
				type: "name",
				title: "Mod de Conectare",
				content: "Selectați un mod de conectare corespunzător tipului dumneavoastră de conexiune la Internet.",
				children: [{
					type: "name",
					title: "Automat",
					content: "În acest mod, conexiunea la Internet se realizează automat de fiecare dată cand aceasta se deconecteaza."
				},{
					type: "name",
					title: "La Cerere",
					content: "În acest mod, conexiunea la Internet va fi oprită automat după o perioadă de inactivitate specificată (Timp Maxim de Inactivitate). Conexiunea este restabilită atunci când încercați să accesați Internetul din nou."
				},{
					type: "name",
				title: "Manual",
				content: "În acest mod, conexiunea la Internet este controlată manual apăsând pe butonul Deconectare sau Conectare. Acest mod suportă de asemenea functia Timp Maxim de Inactivitate.  Introduceți în câmpul Timp Maxim de Inactivitate un timp maxim (în minute) pentru care conexiunea la Internet poate fi inactivă înainte de a fi încheiată. Valoarea implicită este de 15 minute. Dacă doriți sa se mențină activă conexiunea la Internet în orice moment, introduceți 0 (zero)."
				}]
			},{
				type:"paragraph",
				content:"Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "Clonare MAC",
			CONTENT: [{
				type: "name",
				title: "Utilizează adresa MAC implicită",
				content: "NU schimbați adresa MAC a routerului în cazul în care furnizorul de Internet asociază adresa dumneavoastră IP de această adresă MAC."
			},{
				type: "name",
				title: "Utilizează adresa MAC a computerului dumneavoastră",
				content: "Selectaţi pentru a copia adresa MAC a computerului care este conectat la router, în cazul în care furnizorul dumneavoastră de Internet leagă Adresa IP alocată de adresa MAC a computerului."
			},{
				type: "name",
				title: "Utilizează o adresă MAC personalizată",
				content: "Introduceţi Adresa MAC manual, în cazul în care furnizorul dumneavoastră de Internet leagă adresa IP alocată de o adresă MAC specificată."
			},{
				type:"paragraph",
				content:"Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "Adresă MAC",
				content: "Adresa fizică unică atribuită portului Ethernet al routerului (LAN)."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Afișează adresa IP a routerului, care este folosită pentru accesarea paginii de management a routerului, această adresă poate fi modificată."
			},{
				type: "name",
				title: "Mască Subrețea",
				content: "Selectați un identificator din lista pe verticală pentru a fi folosit de portul LAN ca să ruteze traficul intern si extern sau introduceți un nou subnet mask în formatul zecimal cu puncte."
			},{
				type: "note",
				title: "Notă",
				content: "Dacă noua adresă IP LAN nu se află în același subnet cu cea veche, Intervalul de Adrese IP alocat de serverul DHCP va fi configurat automat. Cu toate acestea, funcțiile Virtual Server si DMZ nu vor funcționa corespunzător până când nu sunt reconfigurate."
			},{
				type:"paragraph",
				content:"Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		IPTV:{
			TITLE: "Setări",
			CONTENT: [{
					type: "name",
					title: "IGMP Proxy",
					content: "Selectați versiunea IGMP (Internet Group Management Protocol) Proxy, V2 sau V3, în funcție de furnizorul dumneavoastră de Internet."
				},{
					type: "name",
					title: "Versiune IGMP",
					content: "Selectați versiunea IGMP Proxy, V2 sau V3, în funcție de ISP-ul dumneavoastră."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Selectați pentru a activa funcția IPTV."
				},
				{
					type: "name",
					title: "Mod",
					content: "Selectaţi modul corespunzător în funcţie de furnizorul dumneavoastră de Internet.",
					children: [
						{
							type: "name",
							title: "Bridge",
							content:"Dacă furnizorul dumneavoastră de Internet nu este listat şi nu sunt necesari alți parametri, puteţi pur şi simplu să selectaţi acest mod şi să configurați caracteristicile portului LAN al routerului.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Alocați portul LAN pentru a stabili dacă funcționează ca furnizor de Internet sau ca furnizor IPTV"
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Selectaţi dacă furnizorul de servicii de internet este din Rusia şi dacă parametrii necesari sunt prestabiliţi, inclusiv ID-urile şi prioritatea pentru Internet/Telefon prin IP/IPTV VLAN şi caracteristicile legate de porturile LAN (1/2/3/4).",
							children: [{
								type: "name",
								title: "IPTV Multicast VLAN ID/Prioritate",
								content: "Aveţi posibilitatea să activaţi caracteristica multicast IPTV cum doriți şi configurați VLAN ID şi Prioritatea în funcţie de furnizorul dumneavoastră de Internet."
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Selectaţi dacă furnizorul dumneavoastră de Internet este ExStream din Singapore şi parametrii necesari sunt predeterminați, inclusiv Internet/ID-uri Vlan IPTV, prioritate şi caracteristicile portului LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malaysia-Unifi",
							content: "Selectaţi dacă furnizorul dumneavoastră de Internet este Unifi din Malaezia şi parametrii necesari sunt predeterminați, inclusiv Internet/ID-uri Vlan IPTV, prioritate şi caracteristicile portului LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malaysia-Maxis",
							content: "Selectaţi dacă furnizorul dumneavoastră de Internet este Maxis din Malaysia şi parametrii necesari sunt predeterminați, inclusiv Internet/ID-uri Vlan IPTV, Prioritate şi caracteristicile portului LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Portugalia-MEO",
							content: "Selectează dacă furnizorul tău de servicii Internet este Portugalia-MEO și parametrii necesari sunt prestabiliți, inclusiv Prioritatea și VLAN ID pentru Internet și proprietățile porturilor LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Portugalia-Vodafone",
							content: "Selectează dacă furnizorul tău de servicii Internet este Portugalia-Vodafone și parametrii necesari sunt prestabiliți, incluzând Prioritatea și VLAN ID pentru Internet/IP-Phone/IPTV. Poți realoca funcțiile porturilor LAN după cum este necesar (Furnizor de Internet/Furnizor de IPTV/Furnizor IP-Phone/Furnizor de Internet și IPTV)."
						},
						{
							type: "name",
							title: "Personalizat",
							content: "Selectați dacă furnizorul dumneavoastră de Internet nu este listat, dar care oferă parametrii necesari, inclusiv Internet/Telefon-IP/ID-uri Vlan IPTV, Prioritate și caracteristicile portului LAN (1/2/3/4).",
							children: [{
								type: "name",
								title: "Internet/Telefon-IP/ID VLAN IPTV/Prioritate",
								content: "Configurați ID-urile VLAN și Prioritațile după cum v-a fost precizat de ISP."
							},{
								type: "name",
								title: "802.11Q Tag",
								content: "Selectați dacă să se eticheteze pachetele de Internet cu 802.11Q"
							},{
								type: "name",
								title: "IPTV Multicast VLAN ID/Prioritate",
								content: "Aveţi posibilitatea să activaţi caracteristica multicast IPTV cum doriți şi configurați VLAN ID şi Prioritatea în funcţie de furnizorul dumneavoastră de Internet."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Asociați portul LAN cu modul de funcționare furnizor Internet, furnizor Telefon-IP sau furnizor IPTV."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Apăsați butonul Salvare pentru a salva toate setările."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Setări",
			CONTENT: [{
				type: "name",
				title: "Server DHCP",
				content: "În mod implicit, serverul DHCP (Dynamic Host Configuration Protocol) este activat; se alocă dinamic parametrii TCP/IP pentru dispozitive client, din intervalul de adrese IP. NU dezactivați serverul DHCP, decât dacă aveți alt server DHCP sau doriți să alocați manual parametrii TCP/IP pentru fiecare dispozitiv client din rețea."
			},{
				type: "name",
				title: "Interval Adrese IP",
				content: "Introduceți un interval de adrese IP care pot fi acordate clienților."
			},{
				type: "name",
				title: "Durată alocare adresă IP",
				content: "Introduceți durata de timp pentru care o adresă IP este acordată clientului, valoare cuprinsă între 1 și 2880 minute. Valoarea implicită este 120 minute."
			},{
				type: "name",
				title: "Default Gateway",
				content: "Introduceți adresă IP pentru LAN. (Opțional)"
			},{
				type: "name",
				title: "DNS Primar/DNS Secundar",
				content: "Introduceți acești parametri oferiți de furnizorul dumneavoastră de Internet."
			},{
				type:"paragraph",
				content:"Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Rezervare Adrese IP",
			CONTENT: [{
				type: "paragraph",
				content: "Puteți rezerva manual o adresă IP pentru un client care este conectat la router. Odată rezervată, adresa IP va fi atribuită numai aceluiași client de către serverul DHCP."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Afișează adresa MAC a clientului cu adresa IP rezervată de serverul DHCP."
			},{
				type: "name",
				title: "Adresă IP Rezervată",
				content: "Afișează adresa IP rezervată a clientului"
			},{
				type: "name",
				title: "Descriere",
				content: "Afișează o descriere a dispozitivului client."
			},{
				type: "name",
				title: "Stare",
				content: "Afișează starea curentă (Activat sau Dezactivat) a dispozitivului client"
			},{
				type: "name",
				title: "Modificare",
				content: "Afișează opțiuni pentru modificarea sau ștergerea clientului corespunzător."
			},{
				type: "step",
				title: "Pentru a rezerva o adresă IP",
				content:[
					"1. Apasă Adaugă.",
					"2. Introduceți adresa MAC a clientului dorit.",
					"3. Introduceți adresa IP pe care doriți să o rezervați pentru client.",
					"4. Introduceți o descriere pentru client.",
					"5. Selectați Activare.",
					"6. Apăsați OK."
				]
			},{
				type: "step",
				title: "Pentru a modifica sau șterge un client existent",
				content: "În tabel, apăsați pe pictogramele Editare sau Șterge, care corespund clientului pe care doriți să-l modificați sau să-l ștergeți."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "Listă Clienți DHCP",
			CONTENT: [{
				type: "name",
				title: "Număr Clienți",
				content: "Afișează numărul clienților DHCP asociați."
			},{
				type: "name",
				title: "Nume Client",
				content: "Afișează numele clientului DHCP."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Afișează adresa MAC"
			},{
				type: "name",
				title: "Adresă IP Alocată",
				content: "Afișează adresa IP alocată clientului de către serverul DHCP."
			},{
				type: "name",
				title: "Timp Alocare",
				content: "Afișați timpul rămas pentru adresa IP acordată clientului."
			},{
				type: "name",
				title: "Actualizare",
				content: "Apasă pentru a actualiza lista cu Clienți DHCP."
			}]
		},

		DDNS: {
			TITLE: "DNS Dinamic",
			CONTENT: [{
				type: "paragraph",
				content: "DNS Dinamic (Domain Name System) vă permite să asociați un nume de domeniu fix cu o adresă IP dinamică de Internet. Această funcție este utilă atunci când găzduiți propriul site web, server FTP, sau alt server din spatele routerului. Înainte de a configura această funcție, trebuie să vă înregistrați la un furnizor de servicii DDNS cum ar fi www.dyndns.com. Apoi introduceți informațiile de înregistrare."
			},{
				type: "step",
				title: "Pentru a configura un DNS Dinamic",
				content: [
					"1. Selectați furnizorul de servicii DDNS.",
					"2. Introduceți Numele de Utilizator și Parola contului DDNS.",
					"3. Introduceți numele de domeniu înregistrat la furnizorul de servicii DNS Dinamic.",
					"4. Selectați intervalul de timp în care vor fi trimise cererile DNS Dinamic.",
					"5. Dacă furnizorul de servicii este NO-IP, selectați Asociere IP WAN pentru a va asigura că numele de domeniu este asociat cu adresa IP WAN a acestui router.",
					"6. Faceți clic pe Conectare și Salvare."
				]
			},{
				type: "note",
				title:"Notă",
				content: "Dacă doriți să utilizați un nou cont DDNS, vă rugăm să vă deconectați și să vă reautentificați cu noul cont."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "DNS Dinamic",
			CONTENT: [{
				type: "paragraph",
				content: "DNS Dinamic (Domain Name System) vă permite să asociați un nume de domeniu fix cu o adresă IP dinamică de Internet. Această funcție este utilă atunci când găzduiți propriul site web, server FTP, sau alt server din spatele routerului. Înainte de a configura această funcție, trebuie să vă înregistrați la un furnizor de servicii DDNS cum ar fi www.dyndns.com. Apoi introduceți informațiile de înregistrare."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Listă Nume Domeniu",
			CONTENT: [{
				type: "paragraph",
				content: "Acest tabel afișează conturile DNS Dinamic care sunt înregistrate în ID-ul tău TP-Link."
			},{
				type:"step",
				title: "Pentru a înregistra un nou nume de domeniu",
				content: [
					"1. Apăsați Înregistrare.",
					"2. Introduceți numele de domeniu.",
					"3. Apăsați Salvare."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Rutare Statică",
			CONTENT: [{
				type: "paragraph",
				content: "Rutarea statică este folosită pentru a prestabili traseul pentru pachetele cu informații de rețea, astfel încât să poată ajunge la o anumită gazdă sau rețea."
			},{
				type: "step",
				title: "Pentru a configura rutarea statică",
				content: [
					"1. Apasă Adaugă.",
					"2. Rețeaua Destinație - Introduceți o adresă IP în format zecimal cu puncte pentru a asocia ruta statică pentru această intrare.",
					"3. Subnet Mask - Introduceți masca de rețea în format zecimal cu puncte pentru a determina zona de rețea și zona de gazde a adresei IP.",
					"4. Default Gateway - Introduceți adresa IP a gateway-ului în format zecimal cu puncte pentru a conecta routerul la rețea sau client.",
					"5. Interfață - Selectați LAN sau WAN pentru a specifica tipul de rețea destinație.",
					"6. Descriere - Introduceți o descriere scurtă pentru această intrare.",
					"7. Selectați Activare.",
					"8. Apăsați OK."
				]
			},{
				type: "step",
				title: "Pentru a modifica sau șterge o înregistrare existentă",
				content: "În tabel, apăsați pe pictogramele Editare sau Șterge, care corespund clientului pe care doriți să-l modificați sau să-l ștergeți."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Tabela de Rutare a Sistemului",
			CONTENT: [{
				type: "paragraph",
				content: "Tabela de Rutare a Sistemului afișează toate intrările de traseu valabile care sunt în uz."
			},{
				type: "paragraph",
				content: "Apăsați pe Actualizare pentru a actualiza tabela de rutare."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Setări",
			CONTENT: [{
				type: "name",
				title: "Regiune",
				content: "Selectați regiunea din listă. Dacă țara sau regiunea dumneavoastră nu este listată, este posibil ca în această regiune/țară să fie restricționată utilizarea echipamentelor wireless."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Wireless 2.4GHz",
			CONTENT: [{
				type: "name",
				title: "Activare Emisie WiFi",
				content: "Selectați această casetă pentru a activa emisia în banda de frecvență de 2,4 GHz."
			},{
				type: "name",
				title: "Nume Rețea Wireless (SSID)",
				content: "Puteți utiliza numele implicit al rețelei wireless, sau puteți crea un nume nou (maximum 32 de caractere). Acest câmp este case-sensitive."
			},{
				type: "name",
				title: "Ascunde SSID",
				content: "Bifați această casetă dacă doriți să ascundeți numele rețelei wireless (SSID) în lista rețelelor wireless detectabile."
			},{
				type: "name",
				title: "Securitate",
				content: "Selectați una dintre următoarele opțiuni de securitate:",
				children: [{
					type: "name",
					title: "Fără Securitate",
					content: "Selectați această opțiune pentru a dezactiva securitatea wireless. Este foarte recomandat să activați securitatea wireless pentru a proteja rețeaua dumneavoastră împotriva accesului neautorizat."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "Selectați această opțiune pentru a activa metoda de autentificare standard, bazată pe metoda Pre-shared Key (PSK), numită și passphrase. Aceasta este opțiunea recomandată. Dacă este selectată, configurați următoarele.",
					children: [{
						type: "name",
						title: "Versiune",
						content: "Selectați o versiune de securitate pentru rețeaua wireless.",
						children: [{
							type: "name",
							title: "Automat",
							content: "Această opțiune suportă implementări multiple ale standardului WPA (Wi-Fi Protected Access), cum ar fi WPA și WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Această opțiune suportă doar criptare TKIP care oferă un nivel bun de securitate."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Această opțiune suportă criptare AES, care oferă un nivel mai bun de securitate decât WPA-PSK și este recomandată."
						}]
					},{
						type: "name",
						title: "Criptare",
						content: "Selectați un tip de criptare: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), sau Automat (atât pentru TKIP și AES). Nu este recomandat să utilizați criptarea TKIP dacă routerul funcționează în modul 802.11n, deoarece criptarea TKIP nu este suportată de standardul 802.11n. Dacă este selectat TKIP, funcția WPS va fi dezactivată."
					},{
						type: "name",
						title: "Parolă",
						content: "Creați o parolă care să folosească între 8 și 63 caractere ASCII, sau între 8 și 64 caractere hexadecimale (0-9, af, AF)"
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Enterprise",
					content: "Selectați această opțiune pentru a activa metoda de autentificare mai avansată folosind un server RADIUS (Remote Authentication Dial In User Service). Dacă folosiți acest tip de securitate, funcția WPS va fi dezactivată.",
					children: [{
						type: "name",
						title: "Versiune",
						content: "Selectați o versiune de securitate pentru rețeaua wireless.",
						children:[{
							type: "name",
							title: "Automat",
							content: "Această opțiune suportă implementări multiple ale standardului WPA (Wi-Fi Protected Access), cum ar fi WPA și WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Această opțiune suportă doar criptare TKIP care oferă un nivel bun de securitate."
						},{
							type: "name",
							title: "WPA2",
							content: "Această opțiune suportă criptare AES, care oferă un nivel mai bun de securitate decât WPA-PSK și este recomandată."
						}]
					},{
						type: "name",
						title: "Criptare",
						content: "Selectați un tip de criptare: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), sau Automat (atât pentru TKIP și AES). Nu este recomandat să utilizați criptarea TKIP dacă routerul funcționează în modul 802.11n, deoarece criptarea TKIP nu este suportată de standardul 802.11n. Dacă este selectat TKIP, funcția WPS va fi dezactivată."
					},{
						type: "name",
						title: "IP Server RADIUS",
						content: "Introduceți adresa IP a serverului RADIUS."
					},{
						type: "name",
						title: "Port RADIUS",
						content: "Introduceți numărul portului pentru serverul RADIUS."
					},{
						type: "name",
						title: "Parolă RADIUS",
						content: "Introduceți parola serverului RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Selectați această opțiune pentru a activa metoda de autentificare de bază dacă unul dintre dintre dispozitivele client pot accesa rețeaua wireless numai prin metoda WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Tip",
						content: "Selectați un tip de autentificare pentru rețeaua wireless. Valoarea implicită este Automat. Această valoare alege automat metoda Open System sau Shared Key bazat pe capacitatea și cererea de acces a clientului wireless."
					},{
						type: "name",
						title: "Format cheie WEP",
						content: "Se utilizează în format ASCII sau Hexadecimal. Formatul ASCII este o combinație de caractere alfanumerice. Formatul Hexadecimal este o combinație de numere (0-9) și literele (A-F, a-f)."
					},{
						type: "name",
						title: "Tip cheie",
						content: "Selectați lungimea cheii WEP.",
						children: [{
							type: "name",
							title: "64-bit",
							content: "Vă permite să introduceți 10 caractere hexadecimale (0-9, A-F, a-f) sau 5 caractere ASCII în câmpul Valoare Cheie."
						},{
							type: "name",
							title: "128-bit",
							content: "Vă permite să introduceți 26 caractere hexadecimale (0-9, A-F, a-f) sau 13 caractere ASCII în câmpul Valoare Cheie."
						}]
					},{
						type: "name",
						title: "Valoare cheie",
						content: "Introduceți cheia WEP în câmpul corespunzător."
					}]
				}]
			},{
				type: "name",
				title: "Mod",
				content: "Selectați un modul de transmisie mixt."
			},{
				type: "name",
				title: "Lățime Canal",
				content: "Selectați lățimea canalului (lățime de bandă) pentru rețeaua wireless de 2,4 GHz."
			},{
				type: "name",
				title: "Canal",
				content: "Selectați canalul de operare pentru rețeaua în banda de 2.4 GHz. Este recomandat să mențineți valoarea canalului Auto dacă nu întâmpinați probleme intermitente ale conexiunii wireless."
			},{
				type: "name",
				title: "Putere Transmisie",
				content: "Selectați Ridicată, Medie sau Scăzută pentru a specifica puterea de emisie. Opțiunea recomandată și implicită este Ridicată."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Wireless 5GHz",
			CONTENT: [{
				type: "name",
				title: "Activare Emisie WiFi",
				content: "Selectați această casetă pentru a activa emisia în banda de frecvență de 5GHz."
			},{
				type: "name",
				title: "Nume Rețea Wireless (SSID)",
				content: "Puteți utiliza numele implicit al rețelei wireless, sau puteți crea un nume nou (maximum 32 de caractere). Acest câmp este case-sensitive."
			},{
				type: "name",
				title: "Ascunde SSID",
				content: "Selectați această casetă dacă doriți să ascundeți numele rețelei wireless (SSID) în lista rețelelor wireless detectabile."
			},{
				type: "name",
				title: "Securitate",
				content: "Selectați una dintre următoarele opțiuni de securitate:",
				children: [{
					type: "name",
					title: "Fără Securitate",
					content: "Selectați această opțiune pentru a dezactiva securitatea wireless. Este foarte recomandat să activați securitatea wireless pentru a proteja rețeaua dumneavoastră împotriva accesului neautorizat."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "Selectați această opțiune pentru a activa metoda de autentificare standard, bazată pe metoda Pre-shared Key (PSK), numită și passphrase. Aceasta este opțiunea recomandată. Dacă este selectată, configurați următoarele.",
					children: [{
						type: "name",
						title: "Versiune",
						content: "Selectați o versiune de securitate pentru rețeaua wireless.",
						children: [{
							type: "name",
							title: "Automat",
							content: "Această opțiune suportă implementări multiple ale standardului WPA (Wi-Fi Protected Access), cum ar fi WPA și WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Această opțiune suportă doar criptare TKIP care oferă un nivel bun de securitate."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Această opțiune suportă criptare AES, care oferă un nivel mai bun de securitate decât WPA-PSK și este recomandată."
						}]
					},{
						type: "name",
						title: "Criptare",
						content: "Selectați un tip de criptare: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), sau Automat (atât pentru TKIP și AES). Nu este recomandat să utilizați criptarea TKIP dacă routerul funcționează în modul 802.11n, deoarece criptarea TKIP nu este suportată de standardul 802.11n. Dacă este selectat TKIP, funcția WPS va fi dezactivată."
					},{
						type: "name",
						title: "Parolă",
						content: "Creați o parolă care să folosească între 8 și 63 caractere ASCII, sau între 8 și 64 caractere hexadecimale (0-9, af, AF)"
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Enterprise",
					content: "Selectați această opțiune pentru a activa metoda de autentificare mai avansată folosind un server RADIUS (Remote Authentication Dial In User Service). Dacă folosiți acest tip de securitate, funcția WPS va fi dezactivată.",
					children: [{
						type: "name",
						title: "Versiune",
						content: "Selectați o versiune de securitate pentru rețeaua wireless.",
						children: [{
							type: "name",
							title: "Automat",
							content: "Această opțiune suportă implementări multiple ale standardului WPA (Wi-Fi Protected Access), cum ar fi WPA și WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Această opțiune suportă doar criptare TKIP care oferă un nivel bun de securitate."
						},{
							type: "name",
							title: "WPA2",
							content: "Această opțiune suportă criptare AES, care oferă un nivel mai bun de securitate decât WPA-PSK și este recomandată."
						}]
					},{
						type: "name",
						title: "Criptare",
						content: "Selectați un tip de criptare: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), sau Automat (atât pentru TKIP și AES). Nu este recomandat să utilizați criptarea TKIP dacă routerul funcționează în modul 802.11n, deoarece criptarea TKIP nu este suportată de standardul 802.11n. Dacă este selectat TKIP, funcția WPS va fi dezactivată."
					},{
						type: "name",
						title: "IP Server RADIUS",
						content: "Introduceți adresa IP a serverului RADIUS."
					},{
						type: "name",
						title: "Port RADIUS",
						content: "Introduceți numărul portului pentru serverul RADIUS."
					},{
						type: "name",
						title: "Parolă RADIUS",
						content: "Introduceți parola serverului RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Selectați această opțiune pentru a activa metoda de autentificare de bază dacă unul dintre dintre dispozitivele client pot accesa rețeaua wireless numai prin metoda WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Tip",
						content: "Selectați un tip de autentificare pentru rețeaua wireless. Valoarea implicită este Automat. Această valoare alege automat metoda Open System sau Shared Key bazat pe capacitatea și cererea de acces a clientului wireless."
					},{
						type: "name",
						title: "Format cheie WEP",
						content: "Se utilizează în format ASCII sau Hexadecimal. Formatul ASCII este o combinație de caractere alfanumerice. Formatul Hexadecimal este o combinație de numere (0-9) și literele (A-F, a-f)."
					},{
						type: "name",
						title: "Tip cheie",
						content: "Selectați lungimea cheii WEP.",
						children:[{
							type: "name",
							title: "64-bit",
							content: "Vă permite să introduceți 10 caractere hexadecimale (0-9, A-F, a-f) sau 5 caractere ASCII în câmpul Valoare Cheie."
						},{
							type: "name",
							title: "128-bit",
							content: "Vă permite să introduceți 26 caractere hexadecimale (0-9, A-F, a-f) sau 13 caractere ASCII în câmpul Valoare Cheie."
						}]
					},{
						type: "name",
						title: "Valoare cheie",
						content: "Introduceți cheia WEP în câmpul corespunzător."
					}]
				}]
			},{
				type: "name",
				title: "Mod",
				content: "Selectați un modul de transmisie mixt."
			},{
				type: "name",
				title: "Lățime Canal",
				content: "Selectați lățimea canalului (lățime de bandă) pentru rețeaua wireless de 5GHz."
			},{
				type: "name",
				title: "Canal",
				content: "Selectați canalul de operare pentru rețeaua în banda de 5GHz. Este recomandat să mențineți valoarea canalului Auto dacă nu întâmpinați probleme intermitente ale conexiunii wireless."
			},{
				type: "name",
				title: "Putere Transmisie",
				content: "Selectați Ridicată, Medie sau Scăzută pentru a specifica puterea de emisie. Opțiunea recomandată și implicită este Ridicată."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		WPS: {	
			TITLE: "PIN Router",
			CONTENT: [{
				type: "paragraph",
				content: "Alte dispozitive se pot conecta la router prin metoda WPS folosind PIN-ul routerului."
			},{
				type: "name",
				title: "PIN Router",
				content: "Comutați în poziția Pornit pentru a permite dispozitivelor wireless să se conecteze la router folosind codul PIN (Personal Identification Number) al acestuia."
			},{
				type: "name",
				title: "PIN",
				content: "Afișează PIN-ul routerului. PIN-ul implicit poate fi gasit pe eticheta routerului. Apăsați Generează pentru a genera un nou PIN aleator, sau apăsați Implicit pentru schimba PIN-ul curent cu PIN-ul implicit din fabrică."
			}]
		},

		WPS_WIZARD: {
			TITLE: "Configurare WPS",
			CONTENT:[{
				type: "name",
				title: "Push Button (Recomandat)",
				content: "Selectați această metodă de configurare pentru a permite conectarea cu ușurință a oricărui dispozitiv WPS la rețeaua wireless apasând butonul fizic \"WPS\" de pe router sau apasând butonul virtual \"Conectare\"."
			},{
				type: "name",
				title: "PIN",
				content: "Selectați această metodă de configurare pentru a adăuga manual un dispozitiv prin introducerea codului PIN WPS în meniul terminalului mobil și apoi apăsați butonul Conectare."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Terminale Wireless  Active",
			CONTENT: [{
				type: "name",
				title: "Număr Clienți",
				content: "Afișează numărul clienților wireless asociați."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Afișează adresa MAC a clientului wireless asociat."
			},{
				type: "name",
				title: "Tipul Conexiunii",
				content: "Afișează banda de frecvență radio (2.4GHz sau 5GHz) a clientului wireless asociat."
			},{
				type: "name",
				title: "Securitate",
				content: "Afișează tipul de securitate al clientului wireless asociat."
			},{
				type: "name",
				title: "Pachete Primite",
				content: "Afișează numărul de pachete primite de clientul wireless asociat."
			},{
				type: "name",
				title: "Pachete Trimise",
				content: "Afișează numărul de pachete trimise de clientul wireless asociat."
			},{
				type: "paragraph",
				content: "Apăsați butonul Actualizare pentru a actualiza informațiile de pe această pagină."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Setări",
			CONTENT: [{
				type: "paragraph",
				content: "Funcția Guest Network permite crearea unei rețele wireless separate, cu un nume de rețea separat (SSID) și o parolă separată, pe care clienții tip Guests o pot folosi pentru a accesa, wireless, Internetul."
			},{
				type: "name",
				title: "Permite comunicarea între clienți",
				content: "Bifați această casetă pentru a permite utilizatorilor conectați la rețeaua Guest Network să poată comunica între ei."
			},{
				type: "name",
				title: "Permite clienților tip Guest accesul în rețeaua locală",
				content: "Bifați această casetă pentru a permite dispozitivelor conectate wireless la rețeaua Guest Network accesul la documentele și imprimantele partajate în rețeaua locală."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "Wireless 2,4 GHz/5 GHz",
			CONTENT: [{
				type: "name",
				title: "Activare Guest Network",
				content: "Bifați această casetă pentru a activa funcția Guest Network."
			},{
				type: "name",
				title: "Nume Rețea Wireless (SSID)",
				content: "Puteți utiliza numele implicit al rețelei wireless Guest Network, sau puteți crea un nume nou (maximum 32 de caractere)."
			},{
				type: "name",
				title: "Ascunde SSID",
				content: "Bifați această casetă dacă doriți să ascundeți numele rețelei wireless Guest Network (SSID) în lista rețelelor wireless detectabile."
			},{
				type: "name",
				title: "Securitate",
				content: "Dacă nu activați actualizarea parolei, selectați una dintre următoarele metode de securitate:",
				children: [{
					type: "name",
					title: "Fără Securitate",
					content: "Selectați această opțiune pentru a dezactiva securitatea wireless. Este foarte recomandat să activați securitatea wireless pentru a proteja rețeaua Guest împotriva accesului neautorizat."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "Selectați această opțiune pentru a activa metoda de autentificare standard, bazată pe metoda Pre-shared Key (PSK), numită și passphrase. Dacă selectați opțiunea, configurați următoarele.",
					children: [{
						type: "name",
						title: "Versiune",
						content: "Selectați o versiune de securitate pentru rețeaua Guest.",
						children: [{
							type: "name",
							title: "Automat",
							content: "Această opțiune suportă implementări multiple ale standardului WPA (Wi-Fi Protected Access), cum ar fi WPA și WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Această opțiune suportă doar criptare TKIP care oferă un nivel bun de securitate."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Această opțiune suportă criptare AES, care oferă un nivel mai bun de securitate decât WPA-PSK și este recomandată."
						}]
					},{
						type: "name",
						title: "Criptare",
						content: "Selectați un tip de criptare: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), sau Automat (atât pentru TKIP și AES). Nu este recomandat să utilizați criptarea TKIP dacă routerul funcționează în modul 802.11n, deoarece criptarea TKIP nu este suportată de standardul 802.11n. Dacă este selectat TKIP, funcția WPS va fi dezactivată."
					}]
			}]},{
				type: "name",
				title: "Parolă",
				content: "Alegeți parola generată automat sau creați o parolă între 8 și 63 caractere ASCII sau între 8 și 64 caractere hexadecimale (0-9, a-f, A-F)"
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},

		NAT: {
			TITLE: "Application Layer Gateway(ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG permite aplicarea unor filtre personalizate pentru traversarea NAT (Network Address Translation), astfel încât gateway-ul să poată asigura translatări de adrese și porturi pentru anumite protocoale de \"control/data\" ale nivelului Aplicație, cum ar fi: FTP, TFTP, H323, etc.. Activarea funcției ALG este recomandată."
			},{
				type: "name",
				title: "Activează FTP ALG",
				content: "Dacă este selectat, permite clienților si serverelor FTP (File Transfer Protocol) transferul de date prin NAT."
			},{
				type: "name",
				title: "Activează TFTP ALG",
				content: "Dacă este selectat, permite clienților si serverelor TFTP (Trivial File Transfer Protocol) transferul de date prin NAT."
			},{
				type: "name",
				title: "Activează H323 ALG",
				content: "Dacă este selectat, permite utilizatorilor Microsoft NetMeeting sa comunice prin NAT."
			},{
				type: "name",
				title: "Activează RTSP ALG",
				content: "Dacă este selectat, permite clienților Media Player comunicarea cu serverele de streaming media prin NAT."
			},{
				type: "name",
				title: "Activează PPTP Passthrough",
				content: "Dacă este selectat, permite sesiunilor Point-to-Point folosirea unui tunel printr-o rețea IP."
			},{
				type: "name",
				title: "Activează L2TP Passthrough",
				content: "Dacă este selectat, permite sesiunilor Layer 2 Point-to-Point folosirea unui tunel printr-o rețea IP."
			},{
				type: "name",
				title: "Activează IPSec Passthrough",
				content: "Dacă este selectat, permite Internet Protocol Security (IPSec) folosirea unui tunel printr-o rețea IP. IPSec folosește servicii de securitate criptografice pentru a asigura comunicarea privată și sigură prin intermediul unei rețele IP."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Servere Virtuale",
			CONTENT: [{
				type: "paragraph",
				content: "Serverele Virtuale sunt folosite pentru a permite accesul din Internet către anumite servicii din rețeaua locală. Un server virtual este definit ca un port extern și toate cererile din Internet către acest port extern vor fi redirecționate către un computer specific, care trebuie să fie configurat cu o adresă IP statică sau rezervată."
			},{
				type: "name",
				title: "Tip Serviciu",
				content: "Afișează numele serverului virtual."
			},{
				type: "name",
				title: "Port Extern",
				content: "Afișează numărul portului sau al unui interval de porturi, utilizate de serverul virtual."
			},{
				type: "name",
				title: "IP Intern",
				content: "Afișează adresa IP a computerului care rulează serviciul."
			},{
				type: "name",
				title: "Port Intern",
				content: "Afișează numărul portului utilizat de computerul pe care ruleaza aplicația."
			},{
				type: "name",
				title: "Protocol",
				content: "Afișează protocolul utilizat pentru serviciul respectiv: TCP, UDP, sau Toate (Toate protocoalele suportate de router)."
			},{
				type: "name",
				title: "Stare",
				content: "Afișează starea curentă (activat sau dezactivat) a regulii de filtrare respective."
			},{
				type: "name",
				title: "Modificare",
				content: "Afișează opțiunile pentru Modifică sau Șterge ale regulii corespunzătoare."
			},{
				type: "step",
				title: "Pentru a seta o regulă tip Servere Virtuale",
				content: [
					"1. Apasă Adaugă.",
					"2. Apăsați butonul Vizualizați Serviciile Existente pentru a selecta un serviciu din listă și pentru a completa automat numărul portului corespunzător în câmpul Port Extern și Port Intern. În cazul în care serviciul nu este listat, introduceți numărul portului extern (de ex. 21) sau un interval de porturi (de ex. 21-25). Lăsați câmpul Port Intern gol în cazul în care este identic cu câmpul Port Extern sau introduceți numărul portului dorit (de ex. 21) în cazul în care Portul Extern este un singur port. În câmpul IP Intern introduceți adresa IP a computerului care rulează serviciul, în format zecimal cu puncte.",
					"3. Selectați protocolul utilizat de serviciu: TCP, UDP, sau Toate din lista care apare în meniul Protocol.",
					"4. Selectați Activează.",
					"5. Apăsați butonul OK."
				]
			},{
				type: "step",
				title: "Pentru a modifica/șterge o regulă din meniul Servere Virtuale",
				content: "În tabel, apăsați pe pictogramele Editare sau Șterge, care corespund cu regula pe care doriți să o modificați/ștergeți."
			},{
				type: "step",
				title: "Pentru a șterge mai multe reguli",
				content: "Selectați toate regulile pe care doriți să le ștergeți apoi apăsați pictograma Șterge poziționată deasupra tabelului."
			},{
				type: "note",
				title: "Notă",
				content: "Dacă dispozitivul local gazduieste mai multe tipuri de servicii, trebuie să creați câte o regulă pentru fiecare."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Declanșare port",
			CONTENT: [{
				type: "paragraph",
				content: "Declanșare Port (Port Triggering) se utilizează pentru a transmite traficul pe un anumit port pentru un anumit server din rețea."
			},{
				type: "name",
				title: "Aplicație",
				content: "Afișează numele aplicației."
			},{
				type: "name",
				title: "Port Declanșator",
				content: "Afișează portul de ieșire folosit pentru a declanșa o regulă de filtrare a unei conexiuni."
			},{
				type: "name",
				title: "Protocol Declanșator",
				content: "Afișează protocolul folosit de porturile declanșatoare. TCP, UDP sau Toate (Toate protocoalele suportate de router)."
			},{
				type: "name",
				title: "Port Extern",
				content: "Afișează portul sau porturile utilizate de sistemul de la distanță. Un răspuns folosind unul dintre aceste porturi va fi transmis la computerul care a declanșat această regulă. Puteți introduce cel mult 5 grupe de porturi (sau intervale de porturi). Fiecare grup de porturi trebuie să fie separate cu \",\" (virgulă), de exemplu, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Protocol Extern",
				content: "Afișează protocolul utilizat pentru portul de intrare: TCP, UDP, sau Toate (Toate protocoalele suportate de router)."
			},{
				type: "name",
				title: "Stare",
				content: "Afișează starea curentă (activat sau dezactivat) a regulii de filtrare respective."
			},{
				type: "name",
				title: "Modificare",
				content: "Afișează opțiunile pentru Modifică sau Șterge ale regulii corespunzătoare."
			},{
				type: "step",
				title: "Pentru a configura o regulă Declanșare Port (Port Triggering)",
				content: [{
					type: "note",
					title: "Notă",
					content: "Fiecare regulă poate fi utilizată doar de către un singur client,  în același timp."
				},
					"1. Apasă Adaugă.",
					"2. Apăsați butonul Vizualizare Aplicațiile Existente pentru a selecta o aplicație din listă, în acest mod, valorile implicite vor fi completate automat, în câmpurile corespunzătoare. Dacă doriți să adăugați o aplicație nelistată, completați câmpurile: Applicație, Port Declanșator, Protocol Declanșator, Port Extern și Protocol Extern.",	
					"3. Selectați Activează.",
					"4. Apăsați butonul OK."
				]
			},{
				type: "step",
				title: "Pentru a modifica sau șterge o regulă Declanșare Port (Port Triggering)",
				content: "În tabel, apăsați pe pictogramele Editare sau Șterge, care corespund cu regula pe care doriți să o modificați/ștergeți."
			},{
				type: "step",
				title: "Pentru a șterge mai multe reguli Declanșare Port (Port Triggering)",
				content: "În tabel, selectați toate regulile pe care doriți să le ștergeți, apăsați Șterge, deasupra tabelului."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "Funcția DMZ (Zona Demilitarizata) permite Host-ului local sa fie expus la Internet pentru un serviciu special, cum ar fi jocuri pe Internet sau video conferințe. Practic, funcția DMZ permite unui singur computer din rețeaua locală să deschidă toate porturile sale. Acest computer trebuie să fie configurat cu o adresă IP statică și are funcția \"Client DHCP\" dezactivată."
			},{
				type: "step",
				title: "Pentru a atribui unui computer sau unui server funcția DMZ",
				content: [
					"1. Apăsați pe Activare DMZ.",
					"2. În câmpul Adresa IP a gazdei DMZ, introduceți adresa IP a unui computer local pentru a-l configura ca fiind gazdă DMZ.",
					"3. Apăsați Salvare."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Funcția Universal Plug-and-Play (UPnP) este activă în mod implicit, pentru a permite dispozitivelor de rețea, cum ar fi computerele,  să se descopere și să comunice între ele în mod automat,  în rețeaua locală."
			},{
				type: "paragraph",
				content: "Lista Servicii UPnP afișează informațiile dispozitivului UPnP."
			},{
				type: "name",
				title: "Descriere Serviciu",
				content: "Afișează o scurtă descriere a dispozitivului local, care a inițiat cererea UPnP."
			},{
				type: "name",
				title: "Port Extern",
				content: "Afișează portul extern care este deschis de dispozitivul local."
			},{
				type: "name",
				title: "Protocol",
				content: "Afișează tipul protocolului de rețea care este utilizat de dispozitivul local."
			},{
				type: "name",
				title: "Adresa IP internă",
				content: "Afișează adresa IP a dispozitivului local."
			},{
				type: "name",
				title: "Port Intern",
				content: "Afișează portul intern care este deschis de dispozitivul local."
			},{
				type: "paragraph",
				content: "Apăsați pe Actualizare pentru a actualiza Lista de Servere UPnP."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Setări Dispozitiv",
			CONTENT: [{
				type: "paragraph",
				content: "Meniul Setări Dispozitiv afișează informații referitoare la orice dispozitiv de stocare USB conectat în portul USB."
			},{
				type: "name",
				title: "Scanare",
				content: "De obicei routerul detectează automat toate dispozitivele USB noi atașate. Dacă nu se întâmplă acest lucru, apăsați acest buton pentru a scana și detecta eventualele dispozitive atașate și pentru a actualiza informațiile afișate."
			},{
				type: "name",
				title: "Volum",
				content: "Afișează numele volumului de stocare conectat."
			},{
				type: "name",
				title: "Capacitate",
				content: "Afișează capacitatea totală de stocare a dispozitivului USB."
			},{
				type: "name",
				title: "Spațiu Liber",
				content: "Afișează spațiul liber al dispozitivului de stocare USB."
			},{
				type: "name",
				title: "Deconectare în Siguranța",
				content: "Apăsați acest buton pentru a deconecta în siguranță dispozitivul de stocare USB, înainte de a îl extrage din portul USB al routerului."
			},{
				type: "paragraph",
				content: "Vă rugăm să rețineți că butonul Deconectare în Siguranță va apărea doar atunci când un dispozitiv USB este conectat la router folosind portul USB. De asemenea, țineți cont de faptul că nu puteți utiliza această funcție dacă documentele aflate pe dispozitivul de stocare USB sunt în curs de accesare."
			},{
				type: "name",
				title: "Activ",
				content: "Această opțiune apare doar atunci când există un dispozitiv de stocare USB conectat la router. Selectați această opțiune pentru a permite partajarea fișierelor de pe dispozitivul USB."
			},{
				type: "step",
				title: "Pentru a configura un Server de fișiere",
				content: [
				"1. Ataşaţi dispozitivul de stocare USB la portul USB al routerului utilizând un cablu USB.",
				"2. Noul dispozitiv USB atașat ar trebui să fie detectat automat de router și să afișeze informațiile în secțiunea Setări Dispozitiv. Dacă nu este afișat automat, apăsați pe Scanare.",
				"3. Selectați Activ pentru a permite partajarea de fișiere."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Cont Partajare",
			CONTENT: [{
				type: "name",
				title: "Cont",
				content: "Puteți să selectați Folosire cont implicit, pentru a vă conecta la fișierele partajate sau Folosire cont nou și introduceți următoarele informații, pentru a crea un cont nou de utilizator."
			},{
				type: "name",
				title: "Utilizator/Parolă",
				content: "Introduceți un sir de până la 15 caractere alfanumerice. Numele de utilizator trebuie să înceapă cu o literă. Aceste câmpuri sunt case-sensitive."
			},{
				type: "name",
				title: "Confirmare parolă",
				content: "Reintroduceți parola pentru a vă asigura că nu există greșeli. Acest câmp este, de asemenea, case-sensitive."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Setări Partajare",
			CONTENT: [{
				type: "name",
				title: "Nume Server Rețea/Media",
				content: "Afișează numele utilizat pentru a accesa dispozitivul de stocare USB conectat."
			},{
				type: "name",
				title: "Activare",
				content: "Selectați pentru a activa metoda de acces."
			},{
				type: "name",
				title: "Modalitate Acces",
				content: "Există trei metode de acces pentru a permite accesul la dispozitivul de stocare USB atașat. Puteți alege una sau mai multe metode de acces prin selectarea casetei corespunzătoare.",
				children: [{
					type: "name",
					title: "Rețea Locală",
					content: "Dacă este activată, utilizatorii din rețea pot accesa mediul de stocare USB folosind o adresa IP asociata (ex. \\\\192.168.0.1)."
				},{
					type: "name",
					title: "FTP",
					content: "Dacă este activat, clientii FTP din rețeaua locală pot accesa dispozitivul de stocare USB folosind adresa IP alocată, urmat de numărul portului serverului FTP (de ex. ftp://192.168.0.1:21)."
				},{
					type: "name",
					title: "FTP (Via Internet)",
					content: "Dacă este activată, utilizatorii pot accesa de la distanță unitatea de stocare USB prin FTP pe Internet. Această caracteristică suportă atât descărcarea, cât și încărcarea fișierelor. Pentru a schimba numărul portului serverului FTP, introduceți numărul portului și apăsați pe Salvare pentru a aplica modificările."
				}]
			},{
				type: "name",
				title: "Cale",
				content: "Afișează adresa utilizată pentru a accesa dispozitivul de stocare USB."
			},{
				type: "name",
				title: "Port",
				content: "Afişează numărul portului serverului FTP. Utilizaţi valoarea implicită 21 sau o valoare între 1024 şi 65535."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Partajare Fișiere",
			CONTENT: [{
				type: "name",
				title: "Partajare Completă",
				content: "Selectați Pornit pentru a partaja toate fișierele dispozitivului de stocare USB sau selectați Oprit pentru a partaja doar fișierele selectate."
			},{
				type: "name",
				title: "Activare Autentificare",
				content: "Este recomandată activarea acestei opțiuni pentru a permite autentificarea utilizatorilor prin introducearea unui Utilizator și a unei Parole valide, pentru a avea acces la fișierele partajate."
			},{
				type: "name",
				title: "Nume Fișier",
				content: "Afișează numele fișierului partajat."
			},{
				type: "name",
				title: "Cale Fișier",
				content: "Afișează calea către fișierul partajat."
			},{
				type: "name",
				title: "Partajare Media",
				content: "Indică dacă fișierul partajat poate fi accesat ca document media sau nu."
			},{
				type: "name",
				title: "Nume Volum Stocare",
				content: "Afișează numele volumului de stocare."
			},{
				type: "name",
				title: "Stare",
				content: "Afișează starea fișierului partajat prin indicatorul bec."
			},{
				type: "name",
				title: "Modificare",
				content: "Afișează opțiunile pentru a putea Modifica și a Șterge fișierele partajate."
			},{
				type: "name",
				title: "Căutare",
				content: "Apăsați acest buton pentru a căuta și selecta un fișier pe care doriți să îl partajați."
			},{
				type: "name",
				title: "Permite Acces Guest Network",
				content: "Selectați această opțiune pentru a permite clienților conectați la rețeaua Guest Network accesarea fișierelor partajate."
			},{
				type: "name",
				title: "Activare Autentificare",
				content: "Selectați această opțiune pentru a se solicita un Utilizator și o Parolă clienților care doresc să acceseze fișierele partajate."
			},{
				type: "name",
				title: "Permite Editare",
				content: "Selectați această opțiune pentru a permite utilizatorilor posibilitatea de a modifica/șterge conținutul partajat."
			},{
				type: "name",
				title: "Activare Partajare Media",
				content: "Selectați această opțiune pentru a partaja documente media."
			},{
				type: "name",
				title:"Actualizare",
				content: "Apăsați pentru a actualiza lista fișierelor partajate."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Print Server",
			CONTENT: [{
				type: "name",
				title:"Print Server",
				content: "Comutați Pornit pentru a activa funcția de print server."
			},{
				type: "name",
				title:"Nume Imprimantă",
				content: "Afișează numele imprimantei conectate la router."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Control Parental",
			CONTENT: [{
				type: "paragraph",
				content: "Cu ajutorul funcției Control Parental, puteți bloca site-uri web nepotrivite, explicite și dăunătoare. Puteți restricționa accesul în anumite momente ale zilei (de exemplu, facebook sau youtube în timpul efectuării temei de acasă). În același timp, puteți proteja fiecare dispozitiv din rețeaua dumneavoastră împotriva malware-ului și phishing-lui printr-un punct de control central."
			},{
				type: "name",
				title: "Control Parental",
				content: "Comutați Pornit pentru a activa funcția de Control Parental."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Dispozitive Sub Control Parental",
			CONTENT: [{
				type: "name",
				title: "Nume Dispozitiv",
				content: "Afișează numele tuturor dispozitivelor conectate sub Control Parental."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Afișează adresa MAC a tuturor dispozitivelor conectate sub Control Parental"
			},{
				type: "name",
				title: "Perioadă Acces Internet",
				content: "Afișează perioada de timp cu restricții de acces. Programul se aplică pe baza orei setate în router, care poate fi setată în \"Unelte Sistem -> Setări oră\"."
			},{
				type: "name",
				title: "Descriere",
				content: "Afișează o scurtă descriere a dispozitivului conectat. Aceasta este o setare opțională."
			},{
				type: "name",
				title: "Stare",
				content: "Afișează starea curentă (Activat sau Dezactivat) a Controlului Parental pentru dispozitivul aferent."
			},{
				type: "name",
				title: "Modificare",
				content: "Afișează opțiunile pentru Modificare sau Ștergere a dispozitivului aferent."
			},{
				type: "step",
				title: "Pentru a restricționa un dispozitiv nou",
				content: [
					"1. Apasă Adaugă.",
					"2. Apăsați Vizualizare Dispozitive Existente pentru a alege un dispozitiv din Listă Acces Dispozitive, sau introduceți manual Nume Dispozitiv și Adresa MAC pentru a adăuga un dispozitiv care nu este conectat.",
					"3. Apăsați pe pictograma Perioadă Acces Internet pentru a specifica perioada de timp în care se aplice restricția.",
					"4. Introduceți o scurtă descriere în câmpul Descriere. (Opțional)",
					"5. Selectați Activare.",
					"6. Apăsați OK."
				]
			},{
				type: "paragraph",
				content: "Pentru a modifica/șterge o intrare a Controlului Parental, apăsați pictograma Editare pentru a edita informația sau pictograma Șterge pentru a elimina intrarea respectivă."
			},{
				type: "paragraph",
				content: "Pentru a șterge intrări multiple, selectați toate intrările dorite și apăsați butonul Șterge poziționat deasupra tabelului."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Restricții Conținut",
			CONTENT: [{
				type: "name",
				title: "Listă Interziceri",
				content: "Conține cuvinte-cheie care vor fi folosite pentru a bloca orice acces la site-urile web, pentru dispozitivele  specificate în lista de Control Parental.",
				children: [{
					type: "paragraph",
					content: "Apăsați butonul Adaugă un Cuvânt-Cheie Nou pentru a adăuga un cuvânt-cheie în Listă Interziceri. Pentru a șterge un cuvânt-cheie, apăsați pe pictograma (-) a cuvântului-cheie pe care doriți să-l ștergeți."
				}]
			},{
				type: "name",
				title: "Listă Permisiuni",
				content: "Conține adrese web, pe care dispozitivele specificate în lista Control Parental au permisiunea de a le accesa.",
				children: [{
					type: "paragraph",
					content: "Apăsați butonul Adaugă Nume Domeniu pentru a adăuga un site web în Listă Permisiuni. Pentru a șterge un site web, apăsați pe pictograma (-) a site-ului web pe care doriți să-l ștergeți."
				}]
			},{
				type: "paragraph",
				content: "Cuvintele Cheie pot fi adrese web, de exemplu:  www.mail.google.com sau www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "Quality of Service (QoS) ajuta la prioritizarea traficului pe Internet după nevoile dumneavoastră. Puteți preciza nivelul de prioritate al unui dispozitiv sau a unei aplicații în lista de reguli QoS."
			},{
				type: "name",
				title: "Activare QoS",
				content: "Bifați caseta pentru a activa funcția QoS."
			},{
				type: "name",
				title: "Lațime bandă Upload",
				content: "Introduceți lățimea de bandă maximă pentru upload, oferită de furnizorul dumneavoastră de Internet (ISP)."
			},{
				type: "name",
				title: "Lațime bandă Download",
				content: "Introduceți lățimea de bandă maximă pentru download, oferită de furnizorul dumneavoastră de Internet (ISP)."
			},{
				type: "name",
				title: "Prioritate Ridicată",
				content: "Se specifică un procent pentru traficul de prioritate ridicată."
			},{
				type: "name",
				title: "Prioritate Medie",
				content: "Se specifică un procent pentru traficul de prioritate medie."
			},{
				type: "name",
				title: "Prioritate Scăzută",
				content: "Se specifică un procent pentru traficul de  prioritate scăzută."
			},{
				type: "note",
				title: "Notă",
				content: "Nivelul maxim (procentual) al tuturor prioritaților este 1."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		QOS_RULE: {
			TITLE: "Listă Reguli QoS",
			CONTENT: [{
				type: "name",
				title: "Tip",
				content: "Selectați un tip pentu adăugare în lista cu reguli QoS."
			},{
				type: "step",
				title: "Ca să configurați o regulă pentru prioritate ridicată/medie/scazută După Dispozitiv",
				content: [
					"1. Apasă Adaugă.",
					"2. Selectează După Dispozitiv.",
					"3. Apăsați butonul Vizualizare Dispozitive Existente pentru a selecta dispozitivul dorit din Listă Acces Dispozitive, sau puteți introduce manual un nume de dispozitiv și adresa MAC în câmpurile Nume Dispozitiv și Adresă MAC.",
					"4. Apăsați butonul OK."
				]
			},{
				type: "step",
				title: "Ca să configurați o regulă pentru prioritate ridicată/medie/scăzută După Aplicație",
				content: [
					"1. Apasă Adaugă.",
					"2. Selectați După Aplicație.",
					"3. Selectați aplicația dorită din Lista de aplicații, sau puteți personaliza o aplicație configurând numele, protocolul și portul destinație (1-65535) în câmpurile corespunzătoare, puteți introduce un singur port sau un interval de porturi, folosiți virgula pentru separare (ex. 21,36-105,111).",
					"4. Apăsați butonul OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Actualizare Bază de Date",
			CONTENT: [{
				type: "name",
				title: "Fișier Nou Bază de Date",
				content: "Apăsați butonul Căutare pentru a localiza noul fișier cu baza de date. Selectați fișierul și apăsați butonul Actualizare pentru a actualiza baza de date la o versiune mai nouă."
			},{
				type: "name",
				title: "Versiune Bază de Date",
				content: "Afișează versiunea curentă a bazei de date."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Firewall",
			CONTENT: [{
				type: "name",
				title: "Funcția SPI Firewall",
				content: "Firewall cu inspectie de pachete (SPI) previne atacurile cibernetice și validează traficul care trece prin router pe baza protocolului."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "Protecție DoS",
			CONTENT: [{
				type: "name",
				title: "Protecție DoS",
				content: "Denial of Service (DoS) Protejază rețeaua LAN împotriva atacurilor DoS care suprasolicită rețeaua cu cereri de tip server."
			},{
				type: "name",
				title: "Filtrare Atac ICMP-FLOOD",
				content: "Activați această funcție pentru a preveni atacul de tip Internet Control Message Protocol (ICMP) FLOOD.",
				children: [{
					type: "name",
					title: "Oprit",
					content: "Fără protecție."
				},{
					type: "name",
					title: "Scăzută",
					content: "Nivel scăzut de protecție. Are un impact redus asupra performanței routerului."
				},{
					type: "name",
					title: "Medie",
					content: "Nivel moderat de protecție. Are un impact abia perceptibil asupra performanței routerului."
				},{
					type: "name",
					title: "Ridicată",
					content: "Nivel înalt de protecție. Are un impact vizibil asupra performanței routerului."
				}]
			},{
				type: "name",
				title: "Filtrare Atac UDP-FLOOD",
				content: "Activați pentru a preveni atacul de tip User Datagram Protocol(UDP) Flood."
			},{
				type: "name",
				title: "Filtrare Atac TCP-SYN-FLOOD",
				content: "Activați pentru a preveni atacul de tip Transmission Control Protocol-Synchronize (TCP-SYN) Flood."
			},{
				type: "name",
				title: "Ignorare Pachete Ping către portul WAN",
				content: "Blochează pachetele ping către adresa WAN a routerului."
			},{
				type: "name",
				title: "Interzicere Pachete Ping de la portul LAN",
				content: "Blochează pachetele ping către adresa LAN a routerului."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Listă Gazde Blocate pentru DoS",
			CONTENT: [{
				type: "name",
				title: "Listă Gazde Blocate pentru DoS",
				content: "Listează adresa IP și adresa MAC a surselor de atac DoS blocate."
			},{
				type: "step",
				title: "Pentru a șterge o intrare",
				content: "În Listă Gazde, selectați intrarea pe care doriți să o ștergeți și apăsați butonul Șterge."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Controlul Accesului",
			CONTENT: [{
				type: "paragraph",
				content: "Controlul accesului este utilizat pentru a permite sau bloca anumite computere și alte dispozitive să acceseze rețeaua dumneavoastră. Când un dispozitiv este blocat, acesta nu este capabil să comunice cu alte dispozitive sau să se conecteze la Internet."
			},{
				type: "paragraph",
				content: "Pentru a utiliza funcția Controlul Accesului, activați această caracteristică și specificați lista de interziceri sau lista de permisiuni. În cazul în care controlul accesului este dezactivat (Oprit), tuturor dispozitivelor, inclusiv celor de pe lista de interziceri, li se va permite conectarea."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Mod Acces",
			CONTENT: [{
				type: "name",
				title: "Listă Interziceri",
				content: "Numai dispozitivelor din Lista de Interziceri le va fi interzis accesul la rețea."
			},{
				type: "name",
				title: "Listă Permisiuni",
				content: "Numai dispozitivelor din Lista de Permisiuni le va fi permis accesul la rețea."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Dispozitive Active",
			CONTENT: [{
				type: "name",
				title: "Nume Dispozitiv",
				content: "Arată numele dispozitivului conectat."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Arată adresa IP a dispozitivului conectat."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Arată adresa MAC a dispozitivului conectat."
			},{
				type: "name",
				title: "Tipul Conexiunii",
				content: "Arată tipul de conexiune pentru dispozitivului conectat."
			},{
				type: "step",
				title: "Pentru a bloca un dispozitiv",
				content: "În tabelul Dispozitive Active, apăsați pe pictograma Blocare din coloana Modificare care corespunde dispozitivului pe care doriți să-l blocați."
			},{
				type: "step",
				title: "Pentru a bloca mai multe dispozitive",
				content: "În tabelul Dispozitive Active, selectați toate dispozitivele pe care doriți să le blocați și apăsați pe Blocare. Dispozitivul va fi adăugat automat în Lista de Interziceri sau în Lista de Permisiuni."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Dispozitive in lista Interziceri/Permisiuni",
			CONTENT: [{
				type: "step",
				title: "Pentru a adăuga un dispozitiv în Lista interziceri/permisiuni",
				content: [
					"1. Apasă Adaugă.",
					"2. Introduceți Numele Dispozitivului.",
					"3. Introduceți adresa MAC a dispozitivului.",
					"4. Apăsați butonul OK."
				]
			},{
				type: "step",
				title: "Pentru a modifica sau adăuga un dispozitiv în lista interziceri/permisiuni",
				content: "În tabelul de  Interziceri/Permisiuni, apăsați pictogramele Editare sau Ștergere corespunzătoare cu dispozitivul pe care doriți sa îl modificați/ștergeți."
			},{
				type: "step",
				title: "Pentru a șterge dispozitive multiple din lista interziceri/permisiuni",
				content: "Din Lista Interziceri/Permisiuni, selectați toate dispozitivele pe care doriți să le ștergeți și apăsați pe Șterge."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Setări",
			CONTENT: [{
				type: "paragraph",
				content: "Funcția Asociere ARP (Address Resolution Protocol) este utilă pentru a controla accesul unui anumit dispozitiv din rețea prin asocierea adresei IP cu adresa MAC. Funcția Asociere ARP, de asemenea, interzice alte dispozitive să utilizeze o anumită adresă IP."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "Listă ARP",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează adresele MAC și adresele IP ale dispozitivelor conectate în prezent."
			},{
				type: "name",
				title: "Număr Intrări ARP",
				content: "Afișează numărul total de dispozitive care sunt în prezent conectate la router."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Arată adresa MAC a dispozitivului conectat."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Afișează adresa IP alocată dispozitivului conectat."
			},{
				type: "name",
				title: "Asociat",
				content: "Indică dacă adresele MAC și IP sunt asociate sau nu."
			},{
				type: "name",
				title: "Modificare",
				content: "Afișează opțiunile de a Asocia sau Șterge intrarea respectivă din listă."
			},{
				type: "note",
				title: "Notă",
				content: "Nu puteți asocia aceeași adresă IP pentru mai mult de o adresă MAC."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Listă Asocieri",
			CONTENT: [{
				type: "step",
				title: "Ca să configurați un dispozitiv folosind ARP binding",
				content: [
					"1. Apasă Adaugă.",
					"2. Introduceți Adresa MAC a dispozitivului.",
					"3. Introduceți o Adresă IP pe care doriți să o asociați cu Adresa MAC de mai sus.",
					"4. Introduceți o Descriere pentru acest dispozitiv. (Opțional)",
					"5. Selectați Activare.",
					"6. Apăsați OK."
				]
			},{
				type: "step",
				title: "Ca să modificați sau să ștergi o intare din listă",
				content: "În Lista de Asocieri, apăsați pe pictograma Modifică sau pe pictograma Șterge care corespunde intrării pe care doriți să o modificați sau să o ștergeți."
			},{
				type: "step",
				title: "Ca să ștergeți mai multe intrări",
				content: "În Listă Asocieri, selectați toate intrările pe care doriți să le ștergeți și apăsați pe Șterge."
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Selectați opțunea Pornit sau Oprit pentru a activa sau dezactiva protocolul IPv6."
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: IP Static",
			},{
				type: "name",
				title: "IP Static",
				content: "Selectați această opțiune dacă furnizorul dumneavoastră de Internet folosește alocare IPv6 Statică."
			},{
				type: "name",
				title: "Adresă IPv6/Default Gateway/DNS Primar/DNS Secundar",
				content: "Introduceți acești parametri așa cum v-au fost oferiți de furnizorul de Internet (ISP)."
			},{
				type: "name",
				title: "Dimensiune MTU",
				content: "Dimensiunea MTU (Maximum Transmission Unit) implicită și uzuală pentru majoritatea rețelelor Ethernet este de 1500 Bytes. Nu este recomandat să modificați dimensiunea implicită MTU, cu excepția cazului în care furnizorul dumneavoastră de Internet solicită acest lucru."
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: IP Dinamic",
			},{
				type: "name",
				title: "IP Dinamic",
				content: "Selectați această opțiune dacă furnizorul dumneavoastră de Internet folosește alocare IPv6 Dinamică."
			},{
				type: "name",
				title: "Adresă IPv6/DNS Primar/DNS Secundar",
				content: "Acești parametri sunt atribuiți automat de serverul DHCPv6 al furnizorului dumneavoastră de Internet."
			},{
				type: "name",
				title: "Reînnoire",
				content: "Apăsați acest buton pentru a primi alti parametri IPv6 de la serverul DHCPv6 al furnizorului dumneavoastră de Internet."
			},{
				type: "name",
				title: "Eliberare",
				content: "Apăsați acest buton pentru a elibera adresa IPv6 actuală, alocată de serverul DHCPv6 al furnizorului dumneavoastră de Internet."
			},{
				type: "name",
				title: "Obține Adresa IPv6",
				content: "Selectați DHCPv6 pentru a obține o adresă IPv6 ne-temporară sau SLAAC pentru a obține o adresă IPv6 generată de router, după cum v-a fost precizat de ISP."
			},{
				type: "name",
				title: "Delegare prefix",
				content: "Selectați Activare pentru a primi o delegare de prefix de la serverul DHCPv6 al ISP-ului, sau Dezactivare, pentru a atribui manual prefixul. Clienții din LAN vor genera o adresă IPv6 cu acest prefix."
			},{
				type: "name",
				title: "Adresă DNS",
				content: "Selectați opțiunea \"Obține automat de la ISP\" sau \"Folosește următoarele adrese DNS\". Daca opțunea \"Folosește următoarele adrese DNS\" este selectată, introduceți manual adresele DNS oferite de furnizorul de Internet."
			},{
				type: "name",
				title: "DNS Primar/DNS Secundar",
				content: "Tastați acești parametri manual sau îi puteți obține automat de la furnizorul dumneavoastră de Internet."
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Selectați această opțiune dacă furnizorul dumneavoastră  de Internet folosește tipul de conexiune PPPoEv6 și vă oferă un Utilizator și o Parolă."
			},{
				type: "name",
				title: "Utilizator/Parolă",
				content: "Introduceți informațiile oferite de furnizorul dumneavoastră de Internet."
			},{
				type: "name",
				title: "Adresă IPv6",
				content: "Aceasta va fi atribuită de serverul DHCPv6 după introducerea Utilizatorului, a Parolei și apăsarea butonului Conectare."
			},{
				type: "name",
				title: "Adresă DNS",
				content: "Selectați opțiunea \"Obține automat de la ISP\" sau \"Folosește următoarele adrese DNS\". Daca opțunea \"Folosește următoarele adrese DNS\" este selectată, introduceți manual adresele DNS oferite de furnizorul de Internet."
			},{
				type: "name",
				title: "Obține Adresa IPv6",
				content: "Selectați DHCPv6 pentru a obține o adresă IPv6 ne-temporară, sau SLAAC pentru a obține o adresă IPv6 generată de router, sau \"Specificată de ISP\" pentru a introduce adresa IPv6 manual, după cum v-a fost precizat de ISP."
			},{
				type: "name",
				title: "Delegare prefix",
				content: "Selectați Activare pentru a primi o delegare de prefix de la serverul DHCPv6 al ISP-ului, sau Dezactivare, pentru a atribui manual prefixul. Clienții din LAN vor genera o adresă IPv6 cu acest prefix."
			},{
				type: "name",
				title: "Conectare",
				content: "Apăsați acest buton pentru a realiza conectarea la Internet."
			},{
				type: "name",
				title: "Deconectare",
				content: "Apăsați acest buton pentru a vă deconecta de la Internet."
			},{
				type: "title",
				title: "Tipul conexiunii la Internet: Tunel 6to4"
			},{
				type: "name",
				title: "Tunel 6to4",
				content: "Selectați acest tip de conexiune dacă furnizorul de Internet folosește implementarea 6to4 pentru atribuirea adreselor."
			},{
				type: "name",
				title: "Adresă IPv4/Subnet Mask IPv4/Default Gateway IPv4/Adresă Tunel",
				content: "Acești parametri vor fi generați automat prin intermediul portului WAN după apăsarea butonului Conectare."
			},{
				type: "name",
				title: "Folosește următorul server DNS",
				content: "Selectați această casetă pentru a introduce manual serverul DNS primar și/sau serverul DNS secundar."
			},{
				type: "name",
				title: "Conectare",
				content: "Apăsați acest buton pentru a realiza conectarea la Internet."
			},{
				type: "name",
				title: "Deconectare",
				content: "Apăsați acest buton pentru a vă deconecta de la Internet."
			},{
				type: "title",
				title: "Tip Conexiune Internet: Pass-Through (Bridge)"
			},{
				type: "paragraph",
				content: "Selectați această opțiune dacă furnizorul de Internet  implementează Pass Through (Bridge) în rețea. Pentru acest tip de conexiune nu este nevoie de configurare."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Exceptând Pass-Through (Bridge), celelalte 6 tipuri de conexiuni la Internet necesită configurare IPv6."
			},{
				type: "name",
				title: "Mod de alocare",
				content: "Selectați modul potrivit, în funcție de furnizorul de Internet.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Pentru a aloca automat adrese IP clienților LAN.",
					children: [{
						type: "name",
						title: "Prefix Adresă",
						content: "Introduceți prefixul de adresă alocat de furnizorul de Internet."
					},{
						type: "name",
						title: "Timp Eliberare",
						content: "Această opțiune indică timpul valid rămas pentru o adresă IP deja alocată. Implicit această opțiune este păstrată la valoarea de 86400 secunde, dar ea poate fi schimbată dacă furnizorul de Internet solicită aces lucru."
					},{
						type: "name",
						title: "Adresă",
						content: "Această opțiune reprezintă adresa IP alocată automat prin DHCPv6 de furnizorul de Internet."
					}]
				},{
					type: "name",
					title: "SLAAC+Stateless DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefix Adresă",
						content: "Introduceți prefixul de adresă alocat de furnizorul de Internet."
					},{
						type: "name",
						title: "Adresă",
						content: "Este adresa IP atribuită automat de ISP."
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefix Adresă",
						content: "Introduceți prefixul de adresă alocat de furnizorul de Internet."
					},{
						type: "name",
						title: "Adresă",
						content: "Este adresa IP atribuită automat de ISP."
					}]
				}]
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "Clonare MAC",
			CONTENT: [{
				type: "name",
				title: "Utilizează adresa MAC implicită",
				content: "NU schimbați adresa MAC a routerului în cazul în care furnizorul de Internet asociază adresa dumneavoastră IP de această adresă MAC."
			},{
				type: "name",
				title: "Utilizează adresa MAC a computerului dumneavoastră",
				content: "Selectaţi pentru a copia adresa MAC a computerului care este conectat la router, în cazul în care furnizorul dumneavoastră de Internet leagă Adresa IP alocată de adresa MAC a computerului."
			},{
				type: "name",
				title: "Utilizează o adresă MAC personalizată",
				content: "Introduceţi Adresa MAC manual, în cazul în care furnizorul dumneavoastră de Internet leagă adresa IP alocată de o adresă MAC specificată."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Setări oră",
			CONTENT: [{
				type: "step",
				title: "Pentru sincronizarea automată a orei",
				content: [
					"1. În câmpul Setează Ora, selectați Obține automat din Internet.",
					"2. Selectați Ora Locală din listă",
					"3. În câmpul Server NTP I, introduceți adresa IP sau numele de domeniu al serverului NTP dorit.",
					"4. În câmpul Server NTP II, introduceți adresa IP sau numele de domeniu al serverului NTP secundar (Opțional)",
					"5. Apăsați Obține.",
					"6. Click pe Salvare."
				]
			},{
				type: "step",
				title: "Pentru setarea manuală a datei și a orei",
				content: [
					"1. În câmpul Setează ora, selecați Manual.",
					"2. Introduceți Data curentă.",
					"3. Introduceți Ora curentă (În format de 24 de ore, ex. 16:00:00 este 04:00PM).",
					"4. Apăsați Salvare."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Ora de vară",
			CONTENT: [{
				type: "step",
				title: "Pentru a seta ora de vară",
				content: [
					"1. Apăsați Activează ora de vară.",
					"2. Selectați Început oră de vară în funcție de fusul orar în care vă aflați.",
					"3. Selectați Sfarșit oră de vară în funcție de fusul orar în care vă aflați.",
					"4. Apăsați Salvare."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Diagnosticare",
			CONTENT: [{
				type: "paragraph",
				content: "Routerul vă oferă posibilitatea de a folosi uneltele Ping și Traceroute pentru a vă ajuta să depanați problemele de conectivitate. Unlealta Ping trimite pachete către o destinație IP sau Nume de Domeniu și interpretează rezultatele primite, cum ar fi numărul de pachete trimise/primite, și timpul necesar pentru primirea răspunsului de la destinație. Unealta Traceroute trimite pachete către o destinație IP sau un Nume de Domeniu și afișează numărul de hop-uri și timpul necesar pachetelor să ajungă la destinație."
			},{
				type: "paragraph",
				content: "Se pot folosi uneltele ping sau traceroute către un dispozitiv, pe baza adresei IP sau a numelui de domeniu, cum ar fi google.com, yahoo.com, etc."
			},{
				type: "step",
				title: "Pentru a diagnostica folosind Ping",
				content: [
					"1. Introduceți Adresa IP a destinației sau Numele de Domeniu.",
					"2. Apăsați pictograma Săgeată pentru a deschide meniul avansat și specificați numărul de pachete trimise și dimensiunea pachetelor. (Opțional)",
					"3. Apăsați Start."
				]
			},{
				type: "step",
				title: "Pentru a diagnostica folosind Traceroute",
				content: [
					"1. Introduceți Adresa IP a destinației sau Numele de Domeniu.",
					"2. Apăsați pictograma Săgeată pentru a deschide meniul avansat si specificați numărul de hop-uri (până la care să se ajungă) in câmpul Traceroute Max TTL (Time To Live). Valoarea implicită este 20 (Opțional)",
					"3. Apăsați Start."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Actualizare Firmware",
			CONTENT: [{
				type: "paragraph",
				content: "Înainte de a actualiza firmware-ul routerului, trebuie să descărcați ultima versiune de firmware de pe site-ul  <a class=\"link\" target=\"_blank\" href=\"http://www.tp-link.ro/support/\">TP-Link Support</a> în calculatorul dumneavoastră."
			},{
				type: "step",
				title: "IMPORTANT: Pentru a preveni eșecul actualizării, luați in considerare următoarele precauții:",
				content: [
					"Asigurați-vă că ultima versiune de firmware se potrivește cu versiunea hardware (care este afișată pe pagina Actualizare Firmware).",
					"Asigurați-vă că aveți o conexiune stabilă între router și computer. NU este recomandat să faceți actualizarea folosind conexiunea wireless.",
					"Deconectați orice dispozitiv de stocare conectat la router înainte de actualizare pentru a preveni pierderea de date.",
					"Pastrați o copie a configurației routerului.",
					"Nu opriți routerul în timpul procesului de actualizare a versiunii firmware."
				]
			},{
				type: "step",
				title: "Pentru a actualiza versiunea firmware a routerului",
				content: [
					"1. Apăsați Căutare.",
					"2. Localizați și selectați fișierul firmware descărcat.",
					"3. Apăsați Actualizare."
				]
			},{
				type: "paragraph",
				content: "Procesul de actualizare durează câteva minute. NU opriți routerul în timpul procesului de actualizare."
			}]
		},
		
		BACKUP: {	
			TITLE: "Copie de Siguranță",
			CONTENT: [{
				type: "paragraph",
				content: "Este recomandat să salvați configurațiile, în caz că aveți nevoie să restaurați routerul la o configurație precedentă sau de la setările din fabrică."
			},{
				type: "paragraph",
				content: "Apăsați Copie de siguranță pentru a salva configurația actuală în computer. Alegeți o locație sigură în care să salvați copia de siguranță, de unde îl puteți restaura ulterior, dacă este nevoie."
			}]
		},
		
		RESTORE: {
			TITLE: "Restaurare",
			CONTENT: [{
				type: "step",
				title: "Pentru a restaura configurația salvată",
				content: [
					"1. Apăsați Căutare.",
					"2. Localizați și selectați configurația salvată.",
					"3. Apăsați Restaurare."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Restaurare Setări Fabrică",
			CONTENT: [{
				type: "paragraph",
				content: "Apăsați Restaurare Setări Fabrică pentru a reseta routerul la setările inițiale."
			},{
				type: "note",
				title: "Notă",
				content: [
					"1. Restaurarea la setările din fabrică va șterge toate setările configurate pe router. Pentru a vă reautentifica în pagina de management a routerului folosiți numele și parola implicită admin.",
					"2. Vă rugăm să nu opriți routerul în timpul procesului de salvare a configurației sau a restaurării configurației."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Administrare Conturi",
			CONTENT: [{
				type: "paragraph",
				content: "Această pagină vă permite să schimbați Utilizatorul și/sau Parola și să alegeți o adresă de email pentru recuperarea Parolei."
			},{
				type: "name",
				title: "Utilizator vechi",
				content: "Tastați Utilizatorul curent."
			},{
				type: "name",
				title: "Parolă Veche",
				content: "Tastați  Parola curenta."
			},{
				type: "name",
				title: "Utilizator Nou",
				content: "Tastați numele de Utilizator nou."
			},{
				type: "name",
				title: "Parolă nouă",
				content: "Tastați  Parola nouă."
			},{
				type: "name",
				title: "Confirmare Parolă Nouă",
				content: "Tastați Parola nouă din nou."
			},{
				type: "note",
				title: "Notă",
				content: "Dacă decideți să schimbați Utilizatorul curent și Parola folosită pentru a vă autentifica în meniul routerului, este recomandat să notați noile informații într-o locație sigură."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Recuperare Parolă",
			CONTENT: [{
				type: "name",
				title: "Activare Recuperare Parolă",
				content: "Este recomandat să activați funcția Recuperare Parolă, care vă ajută să resetați parola și numele cu ajutorul emailului."
			},{
				type: "name",
				title: "De La",
				content: "Introduceți o adresă de email validă care să fie folosită pentru trimiterea emailurilor."
			},{
				type: "name",
				title: "Către",
				content: "Introduceți adresa de email la care doriți să primiți emailul."
			},{
				type: "name",
				title: "Server SMTP",
				content: "Introduceți adresa serverului SMTP pe care routerul o folosește să trimită codul de verificare prin email."
			},{
				type: "name",
				title: "Activare Autentificare",
				content: "Selectați Permite Autentificarea dacă este necesară autentificarea cu serverul de email pentru a trimite emailul, și completați Utilizatorul și Parola în câmpurile corespunzătoare. Aceste câmpuri sunt case-sesitive."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Management Local",
			CONTENT: [{
				type: "paragraph",
				content: "Această secțiune vă permite să limitați numărul de dispozitive din rețeaua locală care pot accesa routerul, folosind autentificarea bazată pe adresa MAC."
			},{
				type: "name",
				title: "Acces pentru toate dispozitivele conectate la rețeaua locală",
				content: "Comutați pe Pornit pentru a permite administrarea pentru toate dispozitivele conectate la rețeaua locală, sau Oprit pentru a permite administrarea unui dispozitiv anume."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Afișează adresa MAC a dispozitivului selectat pentru a avea acces."
			},{
				type: "name",
				title: "Descriere",
				content: "Afișează descrierea dispozitivului selectat pentru a avea acces."
			},{
				type: "name",
				title: "Stare",
				content: "Afișează starea curentă a dispozitivului selectat pentru a avea acces (activat sau dezactivat)."
			},{
				type: "name",
				title: "Modificare",
				content: "Vă oferă posibilitatea să Modificați sau să Stergeți dispozitivul corespunzător din lista."
			},{
				type: "step",
				title: "Pentru a adăuga un dispozitiv în listă",
				content: [
					"1. Apasă Adaugă.",
					"2. Apăsați Vizualizare Dispozitive Existente pentru a adăuga un dispozitiv existent sau introduceți adresa MAC a dispozitivului în câmpul Adresă MAC.",
					"3. Introduceți o Descriere pentru dispozitivul respectiv.",
					"4. Selectați Activează.",
					"5. Apăsați butonul OK."
				]
			},{
				type: "step",
				title: "Pentru a modifica sau șterge un dispozitiv din listă",
				content: "În tabel, apăsați pictogramele Editare sau Ștergere corespunzătoare cu dispozitivul pe care doriți sa îl modificați/ștergeți."
			},{
				type: "step",
				title: "Pentru a șterge dispozitive multiple",
				content: "Selectați toate dispozitivele pe care doriți să le ștergeți apoi apăsați Șterge"
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Management de la Distanță",
			CONTENT: [{
				type: "paragraph",
				content: "Funcția de Management de la distanță vă permite să accesați și să configurați routerul de la distanță, prin Internet."
			},{
				type: "name",
				title: "Dezactivare Management de la Distanță",
				content: "Selectați această opțiune pentru a dezactiva managementul de la distanță."
			},{
				type: "name",
				title: "Activare Management de la Distanță  pentru toate dispozitivele",
				content: "Selectați această opțiune pentru a permite managementul de la distanță pentru toate adresele IP. Dacă este selectată această opțiune completați câmpul Port Management Web."
			},{
				type: "name",
				title: "Activare Management de la Distanță pentru dispozitivele specificate",
				content: "Selectați această opțiune pentru a permite managementul de la distanță pentru o anumită adresă IP. Dacă este selectată această opțiune, completați câmpurile Port Management Web și Adresă IP pentru managementul de la distanță."
			},{
				type: "name",
				title: "Port Management Web",
				content: "Introduceți numărul portului care este folosit pentru accesarea interfeței de management web în condiții de securitate sporită. Alegeți o valoare cuprinsă  între 1024 și 65535. În mod normal browserul web folosește portul HTTP standard (80). Portul implicit și comun este 8080 care este un port alternativ al serviciului HTTP."
			},{
				type: "name",
				title: "Adresă IP pentru Management de la Distanță",
				content: "Introduceți o adresă IP validă sau un interval de adrese cărora să le fie permis accesul la router. Dacă este introdusă valoarea 255.255.255.255, oricărei adrese IP îi este permis accesul."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Jurnal Sistem",
			CONTENT: [{
				type: "paragraph",
				content: "Pagina jurnalului de sistem afișează o listă a celor mai recente activități (evenimente) ale routerului. Se poate defini ce tipuri de jurnale și/sau nivelul jurnalelor pe care doriți să le vedeți. Această pagină conține funcția Email care se poate configura să trimită automat documentele jurnal către o adresă de email anume, sau să exporte documentele jurnal către un computer."
			},{
				type: "name",
				title: "Tip",
				content: "Selectați tipul jurnalului de sistem care să fie afișat."
			},{
				type: "name",
				title: "Nivel",
				content: "Selectați nivelul jurnalului de sistem care să fie afișat."
			},{
				type: "name",
				title: "Actualizare",
				content: "Apăsați această pictogramă pentru actualizarea jurnalului de sistem."
			},{
				type: "name",
				title: "Șterge Tot",
				content: "Apăsați această pictogramă pentru a șterge toate jurnalele de sistem."
			},{
				type: "name",
				title: "Salvare jurnal",
				content: "Apăsați acest buton pentru a descărca toate jurnalele de sistem în computerul dumneavoastră."
			},{
				type: "name",
				title: "Setări Mail",
				content: "Apăsați acest buton pentru a configura setările de email pentru jurnalele de sistem."
			},{
				type: "step",
				title: "Pentru a configura setările funcției Email pentru jurnalele de sistem",
				content: [
					"1. Apăsați Setări Mail.",
					"2. De La - Introduceți o adresă de email validă care să fie folosită pentru trimiterea emailurilor.",
					"3. Către - Introduceți adresa de email la care doriți să primiți datele.",
					"4. Serverul SMTP - Introduceți adresa serverului SMTP pe care routerul o folosește să trimită jurnalele de sistem prin email.",
					{
						content: "5. Permite Autentificare - Selectați această opțiune dacă serverul SMTP necesită autentificare pentru trimiterea de emailuri.",
						children: [{
							type: "name",
							title: "Nume de utilizator",
							content: "Introduceți numele de utilizator pentru serverul SMTP. Acest câmp este case-sensitive."
						},{
							type: "name",
							title: "Parolă",
							content: "Introduceți parola pentru serverul SMTP. Acest câmp este case-sensitive."
						}]
					},{
						content: "6. Activează Mail Automat - Selectați această opțiune pentru a specifica la ce oră a zilei să fie trimis automat jurnalul de sistem.",
						children: [{
							type: "paragraph",
							content: "Pentru a trimite jurnalul de sistem zilnic la o anumită oră, introduceți Ora (HH) și Minute (MM) în format 24 de ore, ex. 16:00 este 4PM."
						},{
							type: "paragraph",
							content: "Pentru a trimite jurnalul de sistem la o anumită oră sau interval de timp, introduceți numărul de ore."
						}]
					},
					"7. Apăsați Salvare."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Statistici Trafic",
			CONTENT: [{
				type: "paragraph",
				content: "Pagina statisticilor de trafic afișează traficul de date efectuat pe LAN, WAN și WLAN. Este afișat numărul de pachete trimise și primite."
			},{
				type: "name",
				title: "Statistici Trafic",
				content: "Comutați pe Pornit pentru a afișa informațiile statistice."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Listă statistici trafic",
			CONTENT: [{
				type: "name",
				title: "Adresă IP/Adresă MAC",
				content: "Afișează adresa IP și adresa MAC a clientului asociat."
			},{
				type: "name",
				title: "Total Pachete",
				content: "Afișează numărul total de pachete trimise și primite de dispozitivul client de la începutul sesiunii, sau de la ultima resetare a contorului."
			},{
				type: "name",
				title: "Total Bytes",
				content: "Afișează numărul total de bytes trimiși și primiți de dispozitivul client de la începutul sesiunii, sau de la ultima repornire a contorului."
			},{
				type: "name",
				title: "Pachete Curente",
				content: "Afișează numărul curent de pachete trimise și primite într-un interval de timp precizat."
			},{
				type: "name",
				title: "Bytes curenți",
				content: "Afișează numărul curent de bytes trimiși sau primiți într-un interval de timp precizat."
			},{
				type: "name",
				title: "Modificare",
				content: "Afișează opțiunile de a Reseta (la zero) și de a Șterge statistica corespunzătoare din listă."
			},{
				type: "name",
				title: "Actualizare",
				content: "Apăsați pentru a actualiza informațiile statistice pe pagină."
			},{
				type: "name",
				title: "Resetare Completă",
				content: "Apăsați pentru a reseta toate valorile statistice din lista, la zero."
			},{
				type: "name",
				title: "Șterge Tot",
				content: "Apăsați pentru a șterge toate informațiile statistice din listă."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "Wireless 2,4 GHz/5 GHz",
			CONTENT: [{
				type: "name",
				title: "Beacon Interval",
				content: "Introduceți o valoare între 40 și 1000 în milisecunde pentru a determina durata dintre pachetele beacon care sunt difuzate de router pentru a sincroniza rețeaua wireless. Valoarea implicită este de 100 de milisecunde."
			},{
				type: "name",
				title: "RTS Threshold",
				content: "Introduceți o valoare între 1 și 2346 pentru a determina dimensiunea pachetului de transmitere a datelor prin intermediul routerului. În mod implicit, valoarea (pragul) RTS Threshold (Request to Send)  este 2346. Dacă dimensiunea pachetului este mai mare decât pragul prestabilit, routerul trimite cadre RTS unei anumite stații de recepție și negociază trimiterea unui cadru de date, sau pachetul va fi trimis imediat."
			},{
				type: "name",
				title: "DTIM Interval",
				content: "Această valoare determină intervalul Mesajului de Indicare a traficului de livrare (DTIM). Introduceți o valoare între 1 și 15 Intervale Beacon. Valoarea implicită este de 1, indică faptul că Intervalul DTIM este egal cu Beacon Interval."
			},{
				type: "name",
				title: "Group Key Update Period",
				content: "Introduceți numărul de secunde (minim 30) pentru a controla intervalul de timp pentru reînnoirea automată a cheii de criptare. Implicit este 0, indicând fără reînnoire cheie."
			},{
				type: "name",
				title: "Funcția WMM",
				content: "Funcția WMM garantează trimiterea pachetelor ce au o prioritate ridicată, preferențial. Acesta este activată implicit și foarte recomandată."
			},{
				type: "name",
				title: "Funcția Short GI",
				content: "Această funcţie este activată în mod implicit și este recomandată pentru a creşte capacitatea de date prin reducerea timpului Guard Interval (GI)"
			},{
				type: "name",
				title: "Funcția Izolare AP",
				content: "Dacă doriți să izolați și să restricționați toate dispozitivele wireless conectate la rețea să interacționeze între ele, dar să puteți accesa Internetul, bifați casuța Activare Izolare AP."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "TX Beamforming este o tehnologie de optimizare a fluxului de date wireless, care concentrează transmisia semnalului către dispozitive. Dacă se activează, această funcție va optimiza transmisia pentru îmbunătățirea traficului wireless și pentru a mări acoperirea Wi-Fi."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "Activare WDS Bridging",
				content: "Activați funcția WDS Bridging (Wireless Distribution System)  pentru a permite routerului să facă o \"punte\" cu un alt Access Point (AP) într-o rețea locală wireless (WLAN). Dacă această funcție este activată, configurați următoarele:",
				children: [{
					type: "name",
					title: "SSID (de pus în bridge)",
					content: "Introduceți SSID-ul pentru WAP-ul (Wireless Access Point) la care routerul se va conecta in modul client sau folosiși funcția Scanare pentru a afișa toate rețelele disponibile."
				},{
					type: "name",
					title: "Scanare",
					content: "Apăsați acest buton pentru a scana și afișa SSID, BSSID, puterea semnalului, canalul și informațiile legate de securitate ale tuturor rețelelor wireless disponibile în zonă."
				},{
					type: "name",
					title: "Adresă MAC (de pus în bridge)",
					content: "Introduceți adresa MAC (BSSID) a access point-ului wireless (la care routerul se va conecta în modul client), folosind 12 caractere hexadecimale (0-9, a-f, A-F) separate de cratime. Dacă selectați AP-ul cu ajutorul funcției Scanare, adresa MAC este completată automat."
				},{
					type: "name",
					title: "Securitate",
					content: "Selectați modul de securitate al access point-ului selectat:  Fără Securitate, WPA-PSK/WPA2-PSK sau WEP. Dacă selectați AP-ul dorit cu ajutorul funcției Scanare, câmpul de securitate este completat automat.",
					children: [{
						type: "name",
						title: "Parolă",
						content: "Această opțiune este disponibilă când tipul de securitate este WPA-PSK/WPA2-PSK sau WEP. Introduceți parola care securizează Access Point-ul selectat."
					},{
						type: "name",
						title: "Tip Autentificare",
						content: "Această opțiune este disponibilă când tipul de securitate este WEP (Wired Equivalent Privacy). Selectați modul de autentificare corespunzător (Auto, Open System sau Shared Key) folosit de access point-ul selectat."
					},{
						type: "name",
						title: "Format cheie WEP",
						content: "Această opțiune este disponibilă numai când tipul de securitate este WEP. Selectați formatul cheii (ASCII sau Hexadecimal) folosit de către AP-ul selectat."
					}]
				}]
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Selectați căsuța Activare WPS și apăsați Salvare pentru a activa funcția WPS (WI-FI Protected Setup) care vă permite să configurați cu ușurință și să conectați dispozitivele activate WPS prin apăsarea unui buton."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Selectați căsuța  Activare NAT si apăsați Salvează, pentru a activa funcția NAT (Translatarea adresei de rețea)"
			},{
				type: "note",
				title: "Notă",
				content: "Când funcția NAT este dezactivată, configurația din NAT Forwarding nu va avea efect."
			},{
				type: "name",
				title: "NAT Boost",
				content: "Selectați căsuța Activează NAT Boost și apasă salvează pentru a vă asigura că routerul furnizeaza cea mai mare rată de transfer."
			},{
				type: "note",
				title: "Notă",
				content: "Dacă NAT Boost este activat, QoS și Statisticile de Trafic vor fi dezactivate automat."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "Setări Nivel Protecție DoS",
			CONTENT: [{
				type: "paragraph",
				content: "Nivelul de protecție DoS protejază routerul de atacuri ICMP-FLOOD, UDP-FLOOD și TCP-FLOOD."
			},{
				type: "name",
				title: "Nivel Pachete ICMP-FLOOD",
				content: "Introduceți o valoare între 5 și 7200 pachete ICMP pentru a activa protecția ICMP-FLOOD, de îndată ce numărul de pachete depășește valoarea stabilită."
			},{
				type: "name",
				title: "Nivel Pachete UDP-FLOOD",
				content: "Introduceți o valoare cuprinsă între 5 și 7200 pachete UDP pentru a activa protecția UDP-FLOOD, de îndată ce numarul de pachete depașește valoarea stabilită."
			},{
				type: "name",
				title: "Nivel Pachete TCP-FLOOD",
				content: "Introduceți o valoare cuprinsa între 5 și 7200 pachete TCP-SYN pentru a activa protecția TCP-SYN-FLOOD, de îndată ce numarul de pachete depășește valoarea stabilita."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Duplex",
			CONTENT: [{
				type: "name",
				title: "Duplex",
				content: "Selectați tipul functiei Duplex din listă."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Activare Mod Noapte",
				content: "Selectaţi această casetă pentru a stinge LED-urile pe perioada Modului noapte, fără a afecta performanţa routerului."
			},{
				type: "name",
				title: "Interval Mod Noapte",
				content: "Specificaţi o perioadă de timp pentru care este valabil modul noapte."
			},{
				type: "paragraph",
				content: "Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		OPEN_VPN:{
			TITLE: "Open VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Cu ajutorul OpenVPN, puteți utiliza Internetul pentru a accesa în siguranță rețeaua personală atunci când sunteți în altă locație. Pentru a utiliza serviciul VPN, trebuie să configurați serviciul DNS Dinamic (recomandat) sau să atribuiți o adresă IP statică pentru portul WAN al routerului. Ora sistemului (System Time) trebuie să fie sincronizată prin Internet."
			},{
				type: "name",
				title: "Activare server VPN",
				content: "Selectaţi această casetă pentru a activa serverul OpenVPN."
			},{
				type: "name",
				title: "Tip Serviciu",
				content: "Selectaţi protocolul de comunicaţii pentru serverul OpenVPN: UDP sau TCP."
			},{
				type: "name",
				title: "Port serviciu",
				content: "Introduceți un număr al portului de comunicare între 1024 și 65535. Portul acestui serviciu comun și implicit este 1194."
			},{
				type: "name",
				title: "Subreţea/mască de reţea VPN",
				content: "Introduceţi un interval de adrese IP ce pot fi acordate clienţilor de către serverul OpenVPN."
			},{
				type: "name",
				title: "Acces client",
				content: "Selectaţi tipul de acces pentru clientul dvs. OpenVPN.",
				children: [{
					type: "name",
					title: "Doar reţeaua de domiciliu",
					content: "Clienţii pot accesa doar routerul şi reţeaua LAN. Ruta implicită a clientului nu se va schimba."
				},{
					type: "name",
					title: "Internet şi reţeaua de domiciliu",
					content: "Clienții pot accesa rețeaua personală și siteuri pe Internet sau servicii care au o limitare geografică, atunci când sunt în afara țării. Ruta implicită (default route) a clientului va fi modificată."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Certificat",
			CONTENT: [{
				type: "paragraph",
				content: "Utilizaţi certificatul pentru informaţii şi pentru identificarea conexiunii VPN pentru computerul la distanţă."
			},{
				type: "name",
				title: "Generează",
				content: "Faceţi clic pentru a genera un certificat nou."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Fişier configuraţie",
			CONTENT: [{
				type: "paragraph",
				content: "Clienții remote vor folosi fișierul de configurare pentru a avea acces la routerul dumneavoastră."
			},{
				type: "name",
				title: "Exportare",
				content: "Faceţi clic pe acest buton pentru a salva fişierul de configurare OpenVPN ce trebuie utilizat la adăugarea unei noi conexiuni VPN."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "Ghid de instalare a clientului VPN",
			CONTENT: [{
				type: "step",
				title: "Pentru a activa şi conecta dispozitive client la serverul OpenVPN:",
				content:[{
					type: "paragraph",
					content: "Înainte de a configura serverul OpenVPN, vă rugăm să configurați serviciul DNS Dinamic (recomandat) sau să alocați o adresă IP statică pentru portul WAN. Asigurați-vă că portul extern al setărilor NAT nu este portul de serviciu și că ora sistemului este corectă."
				},
					"1. Selectați Activare Server VPN.",
					"2. Configurați parametrii serverului OpenVPN (Tip Serviciu, Port Serviciu, Acces Client și Subnet/Netmask VPN) apoi apăsați Salvare.",
					"3. Apăsați Export pentru a salva fișierul de configurare.",
					"4. Pe dispozitivele client, descărcați și instalați aplicația client OpenVPN de la<a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Platformele oficiale suportate includ Windows, Mac OSX, Linux.",
					"5. Lansați aplicația client OpenVPN și adăugați o nouă conexiune VPN folosind fișierul de configurare salvat pentru a conecta dispozitivul client la serverul VPN."
				]},{
					type: "note",
					title: "Notă",
					content: "Pentru a afla mai multe despre clienţi OpenVPN, vizitaţi <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Cu  VPN PPTP, puteți utiliza Internetul pentru a accesa în siguranță rețeaua personală atunci când sunteți în altă locație. Această funcție poate fi plocată de ISP. Pentru a utiliza serviciul VPN, trebuie să configurați serviciul DNS Dinamic (recomandat) sau să atribuiți o adresă IP statică pentru portul WAN al routerului, iar ora sistemului să fie sincronizată prin Internet."
			},{
				type: "name",
				title: "Activare server VPN",
				content: "Selectaţi această casetă pentru a activa serverul PPTP VPN."
			},{
				type: "name",
				title: "Adresă IP client",
				content: "Introduceţi un interval de adrese IP (maximum 10 clienţi) ce pot fi acordate clienţilor de către serverul PPTP VPN."
			},{
				type: "name",
				title: "Permite acces Samba (Network Place)",
				content: "Selectați pentru a permite clientului VPN accesul la serverul local Samba."
			},{
				type: "name",
				title: "Permite NetBIOS passthrough",
				content: "Selectați pentru a permite clientului VPN accesul la serverul Samba folosind numele NetBIOS."
			},{
				type: "name",
				title: "Permite conexiuni necriptate",
				content: "Selectați pentru a permite conexiunile necriptate la serverul dvs VPN."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Listă conturi",
			CONTENT: [{
				type: "paragraph",
				content: "În acest tabel sunt afișate conturile care pot fi utilizate pentru a se conecta la serverul PPTP VPN de către clienți de la distanță."
			},{
				type: "step",
				title: "Pentru a adăuga un cont PPTP VPN",
				content: [
					"1. Apasă Adaugă.",
					"2. Introduceţi numele de utilizator şi parola pentru a autentifica clienţii pe serverul PPTP VPN.",
					"3. Apăsați OK."
				]
			},{
				type: "step",
				title: "Pentru a modifica sau șterge un cont existent",
				content: "În tabel, faceți clic pe pictograma Editare sau pictograma Coș de gunoi care corespunde cu contul pe care doriți să le modificați sau să le ștergeți."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "Ghid de instalare a clientului VPN",
			CONTENT: [{
				type: "step",
				title: "Pentru a activa şi conecta dispozitive client la serverul PPTP VPN:",
				content:[{
					type: "paragraph",
					content: "Înainte de a configura serverul PPTP VPN, vă rugăm să configurați serviciul DNS Dinamic (recomandat) sau să atribuiți o adresă IP statică pentru portul WAN. Asigurați-vă că portul extern al setărilor NAT nu este 1723 și ora sistemului este sincronizată prin Internet."
				},
					"1. Selectați Activare Server VPN.",
					"2. Configurați parametrii de server PPTP VPN și apăsați Salvare.",
					"3. Pe dispozitivele client, creați o conexiune PPTP VPN. Platformele oficiale suportate includ Windows, Mac OSX, Linux, iOS și Android.",
					"4. Lansați serviciul PPTP VPN, adăugați o conexiune nouă și introduceți numele de domeniu al serviciului DDNS sau adresa IP statică atribuită portului WAN, pentru a conecta dispozitivul client la serverul PPTP VPN."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "Conexiuni VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Această pagină afişează clienţii conectaţi în prezent la serverele OpenVPN şi PPTP VPN găzduite pe router."
			},{
				type: "paragraph",
				content: "Faceţi clic pe pictograma Minus pentru a deconecta clientul corespunzător."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Stare Internet",
				content: "Afișează starea curentă a conexiunii realizată de router la Internet."
			},{
				type: "name",
				title: "Tipul Conexiunii",
				content: "Afișează tipul conexiunii la Internet."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Afișează adresa IP curentă atribuită routerului."
			},{
				type: "name",
				title: "Conexiune Secundară/Adresa IP",
				content: "Afișează tipul de conexiune secundară și adresa IP."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Router",
			CONTENT: [{
				type: "title",
				title: "Wireless 2,4 GHz/5 GHz"
			},{
				type: "name",
				title: "SSID",
				content: "Afișează numele curent al rețelei wireless pentru banda de frecvență aferentă (2.4GHz/5GHz)."
			},{
				type: "name",
				title: "Canal",
				content: "Afișează canalul wireless în care rețeaua 2.4GHz/5GHz emite."
			},{
				type: "name",
				title: "MAC",
				content: "Afișează adresa MAC curentă a rețelei wireless în banda de frecvență de 2.4GHz/5GHz."
			},{
				type: "title",
				title: "Reţea oaspete 2,4 GHz/5 GHz"
			},{
				type: "name",
				title: "Stare",
				content: "Afișează starea rețelei wireless Guest Network (Activată/Dezactivată)."
			},{
				type: "name",
				title: "SSID",
				content: "Afișează numele rețelei Guest Network."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Clienți Fir/Wireless",
			CONTENT: [{
				type: "name",
				title: "Nume",
				content: "Afișează numele clientului conectat la router."
			},{
				type: "name",
				title: "Adresă IP",
				content: "Afișează adresa IP utilizată de client."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Afișează adresa MAC a clientului."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Imprimantă",
			CONTENT: [{
				type: "name",
				title: "Nume",
				content: "Afișează numele imprimantei conectate la router în portul USB."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "Dispozitiv de Stocare USB",
			CONTENT: [{
				type: "name",
				title: "Dispozitiv de Stocare USB",
				content: "Afișează marca dispozitivului de stocare USB conectat la router."
			},{
				type: "name",
				title: "Spațiu Total",
				content: "Afișează capacitatea totală a dispozitivului de stocare USB conectat la router."
			},{
				type: "name",
				title: "Spațiu Liber",
				content: "Afișează spațiul liber al dispozitivului de stocare USB."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Detectare Automată",
				content: "Apăsați acest buton pentru ca routerul să detecteze automat tipul conexiunii la Internet"
			},{
				type: "note",
				title: "Notă",
				content: "Dacă nu sunteți sigur ce tip de conexiune la Internet utilizați, folosiți funcția Detectare Automată sau contactați furnizorul dumneavoastra de Servicii Internet pentru mai multe informații."
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: IP Static",
			},{
				type: "name",
				title: "Adresa IP/Subnet Mask/Default Gateway/DNS Primar/DNS Secundar",
				content: "Introduceți informațiile oferite de furnizorul dumneavoastră de Internet (ISP)."
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: IP Dinamic",
			},{
				type: "name",
				title: "Nu clonați adresa MAC/Clonați adresa MAC a computerului dumneavoastră",
				content: "Puteți selecta între a clona sau a nu clona adresa MAC, în funcție de cerințele furnizorului dumneavoastră de Internet."
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: PPPoE",
			},{
				type: "name",
				title: "Utilizator/Parolă",
				content: "Introduceți Utilizatorul și Parola, oferite de furnizorul dumneavoastră de servicii Internet. Aceste câmpuri trebuie completate exact cum sunt înscrise în contract."
			},{
				type: "title",
				title: "Tipul Conexiunii la Internet: L2TP/PPTP",
			},{
				type: "name",
				title: "Utilizator/Parolă",
				content: "Introduceți Utilizatorul și Parola, oferite de furnizorul dumneavoastră de servicii Internet. Aceste câmpuri trebuie completate exact cum sunt înscrise în contract."
			},{
				type: "name",
				title: "Conexiune Secundară (IP Dinamic sau IP Static)",
				children: [{
					type: "name",
					title: "IP Dinamic",
					content: "Selectați această opțiune dacă adresele IP și Subnet Mask sunt furnizate automat de furnizorul de servicii Internet."
				},{
					type: "name",
					title: "IP Static",
					content: "Selectați dacă ISP-ul v-a furnizat adresa IP si Subnet Mask, apoi introduceți aceste informații în câmpurile corespunzătoare."
				}]
			},{
				type: "name",
				title: "IP Server VPN/Nume Domeniu",
				content: "Tastați Adresa IP a serverului VPN sau Numele de Domeniu oferit de furnizorul de Internet."
			},{
				type:"paragraph",
				content:"Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Setări Wireless",
			CONTENT: [{
				type: "name",
				title: "Activare Emisie WiFi",
				content: "Bifați această casetă pentru a activa emisia în banda de frecvență aferentă (2.4GHz/5GHz)."
			},{
				type: "name",
				title: "Nume Rețea Wireless (SSID)",
				content: "Puteți lăsa numele rețelei Wireless (SSID) implicit sau puteți tasta un nou nume pentru rețeaua dumneavoastră Wireless (maximum 32 de caractere)."
			},{
				type: "name",
				title: "Ascunde SSID",
				content: "Bifați această casetă dacă doriți să nu fie afișat numele rețelei dumneavoastră Wireless (SSID) în lista rețelelor Wireless detectabile."
			},{
				type: "name",
				title: "Parolă",
				content: "Creați o parolă care să folosească între 8 și 63 caractere ASCII, sau între 8 și 64 caractere hexadecimale. Acest câmp este case-sensitive."
			},{
				type:"paragraph",
				content:"Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Setări Dispozitiv",
			CONTENT: [{
				type: "paragraph",
				content: "Meniul Setări Dispozitiv afișează informații referitoare la orice dispozitiv de stocare USB conectat în portul USB."
			},{
				type: "name",
				title: "Scanare",
				content: "De obicei routerul detectează automat toate dispozitivele USB noi atașate. Dacă nu se întâmplă acest lucru, apăsați acest buton pentru a scana și detecta eventualele dispozitive atașate și pentru a actualiza informațiile afișate."
			},{
				type: "name",
				title: "Volum",
				content: "Afișează numele volumului de stocare conectat."
			},{
				type: "name",
				title: "Capacitate",
				content: "Afișează capacitatea totală de stocare a dispozitivului USB."
			},{
				type: "name",
				title: "Spațiu Liber",
				content: "Afișează spațiul liber al dispozitivului de stocare USB."
			},{
				type: "name",
				title: "Deconectare în Siguranța",
				content: "Apăsați acest buton pentru a deconecta în siguranță dispozitivul de stocare USB, înainte de a îl extrage din portul USB al routerului.",
				children: [{
					type: "paragraph",
					content: "Vă rugăm să rețineți că butonul Deconectare în Siguranță va apărea doar atunci când un dispozitiv USB este conectat la router folosind portul USB. De asemenea, țineți cont de faptul că nu puteți utiliza această funcție dacă documentele aflate pe dispozitivul de stocare USB sunt în curs de accesare."
				}]
			},{
				type: "name",
				title: "Stare",
				content: "Această opțiune apare doar atunci când există un dispozitiv de stocare USB conectat la router. Selectați această opțiune pentru a permite partajarea fișierelor de pe dispozitivul USB."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Setări Partajare",
			CONTENT: [{
				type: "name",
				title: "Nume Server Rețea/Media",
				content: "Afișează numele utilizat pentru a accesa dispozitivul de stocare USB conectat."
			},{
				type:"paragraph",
				content:"Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Partajare Fișiere",
			CONTENT: [{
				type: "name",
				title: "Partajare Completă",
				content: "Selectați Pornit pentru a partaja toate fișierele dispozitivului de stocare USB sau selectați Oprit pentru a partaja doar fișierele selectate."
			},{
				type: "name",
				title: "Activare Autentificare",
				content: "Este recomandată activarea acestei opțiuni pentru a solicita autentificarea utilizatorilor prin introducearea unui Utilizator și a unei Parole valide, pentru a avea acces la fișierele partajate."
			},{
				type: "name",
				title: "Nume Fișier",
				content: "Afișează numele fișierului partajat."
			},{
				type: "name",
				title: "Cale Fișier",
				content: "Afișează calea către fișierul partajat."
			},{
				type: "name",
				title: "Partajare Media",
				content: "Indică dacă fișierul partajat poate fi accesat ca document media sau nu."
			},{
				type: "name",
				title: "Nume Volum Stocare",
				content: "Afișează numele volumului de stocare."
			},{
				type: "name",
				title: "Stare",
				content: "Afișează starea fișierului partajat prin indicatorul bec."
			},{
				type: "name",
				title: "Modificare",
				content: "Afișează opțiunile pentru a Modifica și a Șterge fișierele partajate."
			},{
				type: "name",
				title: "Adaugă",
				content: "Apăsați acest buton pentru a crea o nouă intrare."
			},{
				type: "name",
				title: "Șterge",
				content: "Apăsați acest buton pentru a elimina din tabel intrarea selectată."
			},{
				type: "name",
				title: "Căutare",
				content: "Apăsați acest buton pentru a căuta și selecta un fișier pe care doriți să îl partajați."
			},{
				type: "name",
				title: "Permite Acces Guest Network",
				content: "Selectați această opțiune pentru a permite clienților conectați la rețeaua Guest Network accesarea fișierelor partajate."
			},{
				type: "name",
				title: "Activare Autentificare",
				content: "Selectați această opțiune pentru a se solicita un Utilizator și o Parolă clienților care doresc să acceseze fișierele partajate."
			},{
				type: "name",
				title: "Permite Editare",
				content: "Selectați această opțiune pentru a permite utilizatorilor posibilitatea de a modifica/șterge conținutul partajat."
			},{
				type: "name",
				title: "Activare Partajare Media",
				content: "Selectați această opțiune pentru a partaja documente media."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Print Server",
			CONTENT: [{
				type: "name",
				title: "Print Server",
				content: "Comutați Pornit pentru a activa funcția de print server."
			},{
				type: "name",
				title: "Nume Imprimantă",
				content: "Afișează numele imprimantei conectate la router."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Control Parental",
			CONTENT: [{
				type: "name",
				title: "Control Parental",
				content: "Bifați Pornit pentru a activa funcția Control Parental. În mod implicit, această funcție este dezactivată."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Dispozitive Sub Control Parental",
			CONTENT: [{
				type: "paragraph",
				content: "Afișează lista dispozitivelor aflate sub Control Parental."
			},{
				type: "name",
				title: "Nume Dispozitiv",
				content: "Afișează numele tuturor dispozitivelor conectate sub Control Parental."
			},{
				type: "name",
				title: "Adresă MAC",
				content: "Afișează adresa MAC a tuturor dispozitivelor conectate sub Control Parental"
			},{
				type: "name",
				title: "Perioadă Acces Internet",
				content: "Afișează perioada de timp cu restricții de acces. Programul se aplică pe baza orei setate în router, care poate fi setată în \"Unelte Sistem -> Setări oră\"."
			},{
				type: "name",
				title: "Descriere",
				content: "Afișează o scurtă descriere a dispozitivului conectat. Aceasta este o setare opțională."
			},{
				type: "name",
				title: "Stare",
				content: "Afișează starea curentă (Activat sau Dezactivat) a Controlului Parental pentru dispozitivul aferent."
			},{
				type: "name",
				title: "Modificare",
				content: "Afișează opțiunile pentru Modificare sau Ștergere a dispozitivului aferent."
			},{
				type: "step",
				title: "Pentru a restricționa un dispozitiv nou",
				content:[
					"1. Apasă Adaugă.",
					"2. Apăsați Vizualizare Dispozitive Existente pentru a alege un dispozitiv din Listă Acces Dispozitive, sau introduceți manual Nume Dispozitiv și Adresa MAC pentru a adăuga un dispozitiv care nu este conectat.",
					"3. Apăsați pe pictograma Perioadă Acces Internet pentru a specifica perioada de timp în care se aplice restricția.",
					"4. Introduceți o scurtă descriere în câmpul Descriere. (Opțional)",
					"5. Selectați Activare.",
					"6. Apăsați OK."
				]
			},{
				type: "paragraph",
				content: "Pentru a modifica/șterge o intrare a Controlului Parental, apăsați pictograma Editare pentru a edita informația sau pictograma Șterge pentru a elimina intrarea respectivă."
			},{
				type: "paragraph",
				content: "Pentru a șterge intrări multiple, selectați toate intrările dorite și apăsați butonul Șterge poziționat deasupra tabelului."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Guest Network 2.4GHz/5GHz",
			CONTENT: [{
				type: "paragraph",
				content: "Funcția Guest Network permite crearea unei rețele wireless separate, cu un nume de rețea separat (SSID) și o parolă separată, pe care clienții tip Guests o pot folosi pentru a accesa, wireless, Internetul."
			},{
				type: "name",
				title: "Permite comunicarea între clienți",
				content: "Bifați această casetă pentru a permite utilizatorilor conectați la rețeaua Guest Network să poată comunica între ei."
			},{
				type: "name",
				title: "Permite clienților tip Guest accesul în rețeaua locală",
				content: "Bifați această casetă pentru a permite dispozitivelor conectate wireless la rețeaua Guest Network accesul la documentele și imprimantele partajate în rețeaua locală."
			},{
				type: "name",
				title: "Activare Guest Network",
				content: "Bifați această casetă pentru a activa funcția Guest Network."
			},{
				type: "name",
				title: "Nume Rețea Wireless (SSID)",
				content: "Puteți utiliza numele implicit al rețelei wireless Guest Network, sau puteți crea un nume nou (maximum 32 de caractere)."
			},{
				type: "name",
				title: "Ascunde SSID",
				content: "Bifați această casetă dacă doriți să ascundeți numele rețelei wireless Guest Network (SSID) în lista rețelelor wireless detectabile."
			},{
				type: "name",
				title: "Parolă",
				content: "Alegeți parola generată automat sau creați o parolă între 8 și 63 caractere ASCII sau între 8 și 64 caractere hexadecimale (0-9, a-f, A-F)"
			},{
				type:"paragraph",
				content:"Apăsați butonul Salvare pentru a salva toate setările."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"Serviciul TP-Link Cloud vă permite să monitorizați rețeaua dumneavoastră în timp real, de la distanță și să accesați sau să vă gestionați dispozitivele TP-Link prin Internet, de oriunde și oricând."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Informații cont",
			CONTENT:[{
				type:"paragraph",
				content:"Afișează informații despre ID-ul tău TP-Link. Poți edita informațiile contului folosind butonul Editare."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Informații dispozitiv",
			CONTENT:[{
				type:"paragraph",
				content:"Afișează informațiile dispozitivului, incluzând contul cloud care gestionează dispozitivul."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Asociere conturi",
			CONTENT:[{
				type:"paragraph",
				content:"Acest tabel afișează toate conturile cloud care sunt asociate cu dispozitivul în acest moment."
			},{
				type:"step",
				title:"Pentru a asocia un cont de utilizator",
				content:["1. Apasă Asociază.",
				"2. Introduceți emailul înregistrat pe care doriți să îl asociați.",
				"3. Apăsați Salvare."]
			}]

		}

	};
})(jQuery);

