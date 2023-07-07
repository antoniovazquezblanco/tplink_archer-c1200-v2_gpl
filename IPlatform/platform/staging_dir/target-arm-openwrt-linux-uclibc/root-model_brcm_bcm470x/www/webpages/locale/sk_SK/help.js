(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazia sa relevantné informácie o (internetovom) pripojení Wide Area Network."
			},{
				type: "title",
				title: "Protokol IPv4",
			},{
				type: "name",
				title: "MAC adresa",
				content: "Unikátna fyzická adresa priradená internetovému (WAN) portu smerovača."
			},{
				type: "name",
				title: "IP adresa",
				content: "IP adresa priradená internetovému (WAN) portu smerovača. Ak sa zobrazí IP adresa ako 0.0.0.0, znamená to bez prístupu na internet."
			},{
				type: "name",
				title: "Maska podsiete",
				content: "Tento parameter určuje časť siete a hostiteľskú časť IP adresy."
			},{
				type: "name",
				title: "Predvolená brána",
				content: "IP adresa, používaná na pripojenie smerovača k sieti."
			},{
				type: "name",
				title: "Primárny DNS/Sekundárny DNS",
				content: "Systém názvov domén (DNS) prekladá hostiteľské názvy a internetové domény na IP adresy. Informácie o týchto serveroch DNS priraďuje ISP (Poskytovateľ internetových služieb)."
			},{
				type: "name",
				title: "Typ pripojenia",
				content: "Aktuálny typ pripojenia internetového portu (WAN)."
			},{
				type: "title",
				title: "Protokol IPv6",
			},{
				type: "name",
				title: "MAC adresa",
				content: "Unikátna fyzická adresa priradená internetovému (WAN) portu smerovača."
			},{
				type: "name",
				title: "IP adresa",
				content: "IP adresa protokolu IPv6 priradená internetovému (WAN) portu smerovača."
			},{
				type: "name",
				title: "Predvolená brána",
				content: "IP adresa, používaná na pripojenie smerovača k sieti."
			},{
				type: "name",
				title: "Primárny DNS/Sekundárny DNS",
				content: "Systém názvov domén (DNS) prekladá hostiteľské názvy a internetové domény na IP adresy. Informácie o týchto serveroch DNS priraďuje ISP (Poskytovateľ internetových služieb)."
			},{
				type: "name",
				title: "Typ pripojenia",
				content: "Aktuálny typ pripojenia internetového portu (WAN)."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Bezdrôtové",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazia sa relevantné informácie o bezdrôtovej sieti."
			},{
				type: "name",
				title: "Názov bezdrôtovej siete (SSID)",
				content: "Názov bezdrôtovej siete, ktorý sa tiež nazýva SSID (Nastavený identifikátor služby)."
			},{
				type: "name",
				title: "Bezdrôtový vysielač",
				content: "Aktuálny stav bezdrôtového pripojenia (zapnuté alebo vypnuté)."
			},{
				type: "name",
				title: "Režim",
				content: "Aktuálny režim bezdrôtovej siete."
			},{
				type: "name",
				title: "Šírka kanála",
				content: "Šírka pásma kanála bezdrôtovej siete."
			},{
				type: "name",
				title: "Kanál",
				content: "Aktuálny bezdrôtový kanál a jeho príslušná frekvencia (v GHz)."
			},{
				type: "name",
				title: "MAC adresa",
				content: "MAC adresa bezdrôtového sieťového vysielača v smerovači."
			},{
				type: "name",
				id: "status_wds",
				title: "Stav WDS",
				content: "Aktuálny stav režimu WDS (zapnutý alebo vypnutý)."
			}]
		},
		STATUS_LAN: {
			TITLE: "Lokálna sieť",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazia sa informácie o portoch Ethernet (LAN)."
			},{
				type: "title",
				title: "Protokol IPv4"
			},{
				type: "name",
				title: "MAC adresa",
				content: "Unikátna fyzická adresa priradená ethernetovému portu smerovača (LAN)."
			},{
				type: "name",
				title: "IP adresa",
				content: "Adresa IPv4 priradená ethernetovému portu smerovača (LAN)."
			},{
				type: "name",
				title: "Maska podsiete",
				content: "Tento parameter určuje časť siete a hostiteľskú časť IP adresy."
			},{
				type: "name",
				title: "protokol DHCP",
				content: "Zobrazí sa, či je zabudovaný server DHCP smerovača aktívny pre zariadenia na portoch LAN alebo nie."
			},{
				type: "title",
				title: "Protokol IPv6"
			},{
				type: "name",
				title: "MAC adresa",
				content: "Unikátna fyzická adresa priradená ethernetovému portu smerovača (LAN)."
			},{
				type: "name",
				title: "IP adresa",
				content: "Adresa IPv6 priradená ethernetovému portu smerovača (LAN)."
			},{
				type: "name",
				title: "Miestne pripojená adresa",
				content: "Adresa pripojenia protokolu IPv6 pre rozhranie LAN."
			},{
				type: "name",
				title: "Priradený typ",
				content: "Typ adresy IPv6 pre rozhranie LAN."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Hosťovská sieť",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazia sa informácie o bezdrôtovej sieti pre hostí."
			},{
				type: "name",
				title: "Názov bezdrôtovej siete (SSID)",
				content: "Názov bezdrôtovej siete (SSID) vašej hosťovskej siete."
			},{
				type: "name",
				title: "Skryť SSID",
				content: "Zobrazí sa, či je názov bezdrôtovej siete (SSID) hosťovskej siete skrytý alebo nie."
			},{
				type: "name",
				title: "Bezdrôtový vysielač",
				content: "Aktuálny stav hosťovskej siete (zapnutá alebo vypnutá)."
			},{
				type: "name",
				title: "Umožniť hosťom, aby sa navzájom videli",
				content: "Zobrazí sa, či všetky zariadenia v hosťovskej sieti môžu spolu navzájom komunikovať alebo nie."
			}]
		},
		STATUS_USB: {
			TITLE: "Zariadenia USB",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazia sa informácie o aktuálnych úložných zariadeniach USB alebo tlačiarňach pripojených k smerovaču portami USB."
			},{
				type: "name",
				title: "Tlačiareň",
				content: "Názov pripojenej tlačiarne."
			},{
				type: "name",
				title: "Disk USB",
				content: "Názov disku USB pripojeného k smerovaču."
			},{
				type: "name",
				title: "Celková",
				content: "Celková úložná kapacita pripojeného úložného zariadenia s rozhraním USB."
			},{
				type: "name",
				title: "Dostupná",
				content: "Celková dostupná úložná kapacita pripojeného úložného zariadenia s rozhraním USB."
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Výkon",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazí sa aktuálny výkon smerovača."
			},{
				type: "name",
				title: "Zaťaženie CPU",
				content: "Aktuálne využitie CPU."
			},{
				type: "name",
				title: "Využitie pamäte",
				content: "Aktuálne využitie pamäte."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Klienti káblovej siete",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazia sa informácie o všetkých káblových zariadeniach, ktoré sú aktuálne pripojené k sieti."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Klienti bezdrôtovej siete",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazia sa informácie o všetkých bezdrôtových zariadeniach, ktoré sú aktuálne pripojené k sieti."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "Protokol IPv4",
			CONTENT: [{
				type: "title",
				title: "Typ pripojenia do internetu: Statická IP"
			},{
				type: "paragraph",
				content: "Vyberte tento typ, ak máte konkrétnu (fixnú) IP adresu, masku podsiete, bránu a parametre DNS, ktoré vám poskytol poskytovateľ internetu (ISP)."
			},{
				type: "name",
				title: "IP adresa/Maska podsiete/Predvolená brána/Primárny DNS/Sekundárny DNS",
				content: "Zadajte informácie, ktoré vám poskytol poskytovateľ internetu (ISP)."
			},{
				type: "name",
				title: "Veľkosť MTU",
				content: "Predvolená a typická veľkosť MTU (Maximálna prenosová jednotka) pre väčšinu sietí ethernet je 1500 Bytes (1500 bajtov). Zmena predvolenej veľkosti MTU sa neodporúča, ak to nevyžaduje poskytovateľ internetu (ISP)."
			},{
				type: "title",
				title: "Typ pripojenia do internetu: Dynamická IP adresa"
			},{
				type: "paragraph",
				content: "Vyberte tento typ, ak máte od poskytovateľa internetu (ISP) pripojenie k DHCP serveru."
			},{
				type: "name",
				title: "IP adresa/Maska podsiete/Predvolená brána/Primárny DNS/Sekundárny DNS",
				content: "Tieto parametre vám automaticky priradí server DHCP od vášho poskytovateľa internetu (ISP)."
			},{
				type: "name",
				title: "Obnoviť",
				content: "Kliknite na toto tlačidlo, ak chcete získať nové parametre IP adresy zo servera DHCP."
			},{
				type: "name",
				title: "Uvoľniť",
				content: "Kliknite na toto tlačidlo, ak chcete uvoľniť všetky IP adresy, ktoré priradil server DHCP."
			},{
				type: "name",
				title: "Použiť nasledujúcu adresu DNS",
				content: "Ak poskytovateľ internetu (ISP) poskytne jednu alebo dve adresy DNS, začiarknite toto políčko a zadajte primárnu a sekundárnu adresu DNS do príslušných vstupných polí; inak adresy priradí dynamicky poskytovateľ internetu (ISP)."
			},{
				type: "name",
				title: "Veľkosť MTU",
				content: "Predvolená a typická veľkosť MTU (Maximálna prenosová jednotka) pre väčšinu sietí ethernet je 1500 Bytes (1500 bajtov). Zmena predvolenej veľkosti MTU sa neodporúča, ak to nevyžaduje poskytovateľ internetu (ISP)."
			},{
				type: "name",
				title: "Názov hostiteľa",
				content: "Do tohto poľa zadajte hodnotu na určenie názvu hostiteľa smerovača."
			},{
				type: "name",
				title: "Získať IP pomocou DHCP Unicast",
				content: "Vyberte toto začiarkavacie políčko, ak server DHCP vášho poskytovateľa internetu (ISP) nepodporuje aplikácie vysielania a IP adresu nemôžete získať dynamicky."
			},{
				type: "title",
				title: "Typ internetového pripojenia: PPPoE"
			},{
				type: "paragraph",
				content: "Vyberte tento typ, ak používate službu DSL (Linka predplatiteľa digitálnych služieb) a váš ISP vám poskytol meno a heslo."
			},{
				type: "name",
				title: "Meno/heslo",
				content: "Zadajte meno a heslo, ktoré vám poskytol ISP. Tieto polia sú citlivé na veľké a malé písmená."
			},{
				type: "name",
				title: "IP adresa/Primárny DNS/Sekundárny DNS",
				content: "Tieto parametre vám automaticky priradí server DHCP od vášho poskytovateľa internetu (ISP)."
			},{
				type: "name",
				title: "Sekundárne pripojenie (žiadne, dynamická IP, statická IP)",
				children: [{
					type: "name",
					title: "Žiadna",
					content: "Vyberte, ak nemáte žiadne sekundárne pripojenie."
				},{
					type: "name",
					title: "Dynamická IP",
					content: "Vyberte, ak vám IP adresu a masku podsiete automaticky priradí ISP.",
					children: [{
						type: "name",
						title: "Obnoviť",
						content: "Kliknutím na toto tlačidlo obnovíte parametre IP od vášho ISP."
					},{
						type: "name",
						title: "Uvoľniť",
						content: "Kliknutím na toto tlačidlo uvoľníte priradené parametre IP."
					}]
				},{
					type: "name",
					title: "Statická IP",
					content: "Vyberte, ak vám IP adresu a masku podsiete priradil ISP a zadajte tieto údaje do príslušných polí."
				}]
			},{
				type: "name",
				title: "Veľkosť MTU",
				content: "Typická veľkosť MTU (Maximálna prenosová jednotka) pre siete ethernet je 1480 bajtov.",
				children: [{
					type: "note",
					title: "Poznámka",
					content: "Vo vzácnych prípadoch vás ISP môže požiadať z dôvodu lepšieho fungovania siete o nastavenie MTU. Túto hodnotu by ste nemali meniť, ak to nie je bezpodmienečne nutné."
				}]
			},{
				type: "name",
				title: "Názov služby/Názov koncentrátora prístupu",
				content: "Predvolená možnosť je ponechať názov služby a názov koncentrátora prístupu (AC) prázdne. Tieto polia by sa nemali konfigurovať, ak to nevyžaduje ISP."
			},{
				type: "name",
				title: "Detekovať interval v stave online",
				content: "Zadajte hodnotu časového intervalu medzi 0 a 120 (v sekundách), počas ktorých smerovač zistí koncentrátora prístupu online pri každom intervale. Predvolená hodnota je 10."
			},{
				type: "name",
				title: "IP adresa",
				content: "Ak váš ISP poskytuje konkrétnu (fixnú) IP adresu, vyberte Použiť nasledujúcu IP adresu a zadajte IP adresu do poľa, inak vyberte Získať dynamicky od ISP a automaticky získate IP adresu priradenú serverom."
			},{
				type: "name",
				title: "Adresa DNS/Primárny DNS/Sekundárny DNS",
				content: "Ak vám ISP poskytol konkrétne (fixné) IP adresy DNS, vyberte Použiť nasledovnú adresu DNS a zadajte tieto príslušné adresy do polí Primárneho DNS a Sekundárneho DNS, inak vyberte Získať dynamicky od ISP a získate automaticky IP adresu priradenú serverom DNS."
			},{
				type: "name",
				title: "Režim pripojenia",
				content: "Vyberte príslušný režim pripojenia, ktorý určuje, ako sa pripojiť k internetu.",
				children: [{
					type: "name",
					title: "Automaticky",
					content: "V tomto režime sa internetové pripojenie po každom odpojení automaticky znova obnoví."
				},{
					type: "name",
					title: "Na požiadanie",
					content: "V tomto režime sa internetové pripojenie automaticky preruší po uplynutí určeného času nečinnosti (Maximálny čas nečinnosti). Pripojenie sa obnoví, keď sa pokúsite znova pristúpiť k internetu."
				},{
					type: "name",
					title: "Časovo obmedzený",
					content: "V tomto režime sa internetové pripojenie uskutočňuje iba v určitom časovom rámci. Ak vyberiete túto možnosť, zadajte čas začiatku a čas ukončenia; obidva vo formáte HH:MM."
				},{
					type: "name",
					title: "Manuálne",
					content: "V tomto režime sa internetové pripojenie ovláda ručne, kliknutím na tlačidlo Pripojiť alebo Odpojiť. V tomto režime je podporovaná aj funkcia Maximálny čas nečinnosti. Zadajte maximálny čas (v minútach), počas ktorého môže byť internetové pripojenie v nečinnosti, kým sa ukončí, do poľa Maximálny čas nečinnosti. Predvolená hodnota je 15 minút. Ak chcete, aby bolo internetové pripojenie stále aktívne, zadajte 0 (nula)."
				},{
					type: "note",
					title: "Poznámka",
					content: "Poznámka: Režim pripojenia V závislosti od času sa prejaví po nakonfigurovaní stránky Systémový čas v ponuke Pokročilé → Systémové nástroje → Časové nastavenia."
				}]
			},{
				type: "title",
				title: "Typ internetového pripojenia: Kábel BigPond"
			},{
				type: "paragraph",
				content: "Vyberte tento typ, ak váš ISP poskytuje pripojenie káblom BigPond."
			},{
				type: "name",
				title: "Meno/heslo",
				content: "Zadajte meno a heslo, ktoré vám poskytol ISP. Tieto polia sú citlivé na veľké a malé písmená."
			},{
				type: "name",
				title: "Over. Server",
				content: "Zadajte IP adresu alebo názov hostiteľa overovacieho servera."
			},{
				type: "name",
				title: "Over. Doména",
				content: "Zadajte príponu názvu domény servera (v závislosti od svojej lokality). Napríklad, nsw.bigpond.net.au pre NSW/ACT, vic.bigpond.net.au pre VIC/TAS/WA/SA/NT, alebo qld.bigpond.net.au pre QLD."
			},{
				type: "name",
				title: "Veľkosť MTU",
				content: "Predvolená a typická veľkosť MTU (Maximálna prenosová jednotka) pre väčšinu sietí ethernet je 1500 Bytes (1500 bajtov). Zmena predvolenej veľkosti MTU sa neodporúča, ak to nevyžaduje poskytovateľ internetu (ISP)."
			},{
				type: "name",
				title: "Režim pripojenia",
				content: "Vyberte príslušný režim pripojenia, ktorý určuje, ako sa pripojiť k internetu.",
				children: [{
					type: "name",
					title: "Automaticky",
					content: "V tomto režime sa internetové pripojenie po každom odpojení automaticky znova obnoví."
				},{
					type: "name",
					title: "Na požiadanie",
					content: "V tomto režime sa internetové pripojenie automaticky preruší po uplynutí určeného času nečinnosti (Maximálny čas nečinnosti). Pripojenie sa obnoví, keď sa pokúsite znova pristúpiť k internetu."
				},{
					type: "name",
					title: "Manuálne",
					content: "V tomto režime sa internetové pripojenie ovláda ručne, kliknutím na tlačidlo Pripojiť alebo Odpojiť. V tomto režime je podporovaná aj funkcia Maximálny čas nečinnosti. Zadajte maximálny čas (v minútach), počas ktorého môže byť internetové pripojenie v nečinnosti, kým sa ukončí, do poľa Maximálny čas nečinnosti. Predvolená hodnota je 15 minút. Ak chcete, aby bolo internetové pripojenie stále aktívne, zadajte 0 (nula)."
				}]
			},{
				type: "title",
				title: "Typ internetového pripojenia: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Vyberte tento typ, ak sa pripájate k VPN serveru L2TP/PPTP VPN a máte meno, heslo a IP adresu/názov domény servera od ISP."
			},{
				type: "name",
				title: "Meno/heslo",
				content: "Zadajte meno a heslo, ktoré vám poskytol ISP. Tieto polia sú citlivé na veľké a malé písmená."
			},{
				type: "name",
				title: "IP adresa/Primárny DNS/Sekundárny DNS",
				content: "Tieto parametre vám automaticky priradí server DHCP od vášho poskytovateľa internetu (ISP)."
			},{
				type: "name",
				title: "Sekundárne pripojenie (Dynamická IP alebo statická IP)",
				children: [{
					type: "name",
					title: "Dynamická IP",
					content: "Vyberte, ak vám IP adresu a masku podsiete automaticky priradí ISP."
				},{
					type: "name",
					title: "Statická IP",
					content: "Vyberte, ak IP adresu, masku podsiete, bránu a adresy DNS poskytol ISP a zadajte tieto informácie do príslušných polí."
				}]
			},{
				type: "name",
				title: "IP servera VPN/Doménové meno",
				content: "Zadajte IP adresu alebo názov domény servera VPN, ktoré vám poskytol váš ISP."
			},{
				type: "name",
				title: "Veľkosť MTU",
				content: "Predvolená a typická veľkosť MTU (Maximálna prenosová jednotka) pre väčšinu sietí ethernet je 1460 bajtov pre L2TP a 1420 bajtov pre PPTP. Zmena predvolenej veľkosti MTU sa neodporúča, ak to nevyžaduje poskytovateľ internetu (ISP)."
			},{
				type: "name",
				title: "Režim pripojenia",
				content: "Vyberte príslušný režim pripojenia, ktorý určuje, ako sa pripojiť k internetu.",
				children: [{
					type: "name",
					title: "Automaticky",
					content: "V tomto režime sa internetové pripojenie po každom odpojení automaticky znova obnoví."
				},{
					type: "name",
					title: "Na požiadanie",
					content: "V tomto režime sa internetové pripojenie automaticky preruší po uplynutí určeného času nečinnosti (Maximálny čas nečinnosti). Pripojenie sa obnoví, keď sa pokúsite znova pristúpiť k internetu."
				},{
					type: "name",
				title: "Manuálne",
				content: "V tomto režime sa internetové pripojenie ovláda ručne, kliknutím na tlačidlo Pripojiť alebo Odpojiť. V tomto režime je podporovaná aj funkcia Maximálny čas nečinnosti. Zadajte maximálny čas (v minútach), počas ktorého môže byť internetové pripojenie v nečinnosti, kým sa ukončí, do poľa Maximálny čas nečinnosti. Predvolená hodnota je 15 minút. Ak chcete, aby bolo internetové pripojenie stále aktívne, zadajte 0 (nula)."
				}]
			},{
				type:"paragraph",
				content:"Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "Klonovanie MAC adries",
			CONTENT: [{
				type: "name",
				title: "Použiť predvolenú MAC adresu",
				content: "V prípade, že ISP neviaže priradenú IP adresu s MAC adresou, nemeňte predvolenú MAC adresu smerovača."
			},{
				type: "name",
				title: "Použiť MAC adresu aktuálneho počítača",
				content: "Vyberte a týmto skopírujte aktuálnu MAC adresu počítača, ktorý je pripojený k smerovaču, v prípade, že ISP viaže priradenú IP adresu s MAC adresou počítača."
			},{
				type: "name",
				title: "Použiť vlastnú MAC adresu",
				content: "Zadajte MAC adresu ručne, v prípade, že ISP viaže priradenú IP adresu k určitej MAC adrese."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},

		LAN_IPV4: {
			TITLE: "Lokálna sieť",
			CONTENT: [{
				type: "name",
				title: "MAC adresa",
				content: "Unikátna fyzická adresa priradená ethernetovému portu smerovača (LAN)."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazí predvolenú IP adresu smerovača, ktorá sa používa na prihlásenie do webového užívateľského rozhrania, je možné ju prepísať."
			},{
				type: "name",
				title: "Maska podsiete",
				content: "Vyberte si pridelený identifikátor používaný portom LAN na prepojenie vnútorného a vonkajšieho prenosu z rozbalovacieho zoznamu alebo zadajte novú masku podsiete v desiatkovom tvare s bodkami."
			},{
				type: "note",
				title: "Poznámka",
				content: "Ak nová IP adresa LAN nie je v rovnakej podsieti ako stará, fond IP adries na serveri DHCP sa nakonfiguruje automaticky; avšak virtuálny server a hostiteľ DMZ sa neuplatnia, kým neprebehne ich opätovná konfigurácia."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		IPTV:{
			TITLE: "Nastavenie",
			CONTENT: [{
					type: "name",
					title: "Proxy IGMP",
					content: "Vyberte verziu proxy IGMP (Internet Group Management Protocol-Protokol manažmentu skupiny internetu), V2 alebo V3, podľa vášho ISP."
				},{
					type: "name",
					title: "Verzia IGMP",
					content: "Vyberte verziu IGMP Proxy, a to buď V2 alebo V3, podľa vášho ISP."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Vyberte a zapnite funkciu IPTV."
				},
				{
					type: "name",
					title: "Režim",
					content: "Vyberte príslušný režim podľa svojho ISP.",
					children: [
						{
							type: "name",
							title: "Premostenie",
							content:"Ak váš ISP nie je v zozname a nevyžadujú sa žiadne ďalšie parametre, môžete jednoducho zvoliť tento režim a nakonfigurovať funkcie portu LAN smerovača.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Priraďte svojmu portu LAN funkciu prístupu na internet alebo sprostredkovania IPTV."
							}]
						},
						{
							type: "name",
							title: "Rusko",
							content: "Vyberte, či je váš ISP z Ruska a či sú povinné parametre prednastavené vrátane internetových/IP-Phone/IPTV VLAN identifikátorov a priority a funkcií LAN (1/2/3/4) portov.",
							children: [{
								type: "name",
								title: "ID/Priorita funkcie IPTV Multicast VLAN",
								content: "Funkciu IPTV multicast môžete zapínať podľa potreby a ID a prioritu VLAN nakonfigurovať podľa vášho ISP."
							}]
						},
						{
							type: "name",
							title: "Singapur-ExStream",
							content: "Vyberte túto možnosť, ak je váš ISP spoločnosť ExStream zo Singapuru a potrebné parametre sú predvolené, vrátane internetu/identifikátorov a priority IPTV Vlan a funkcií portov LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malajzia-Unifi",
							content: "Vyberte túto možnosť, ak je váš ISP spoločnosť Unifi z Malajzie a potrebné parametre sú predvolené, vrátane internetu/identifikátorov a priority IPTV Vlan a funkcií portov LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malajzia-Maxis",
							content: "Vyberte túto možnosť, ak je váš ISP spoločnosť Maxis z Malajzie a potrebné parametre sú predvolené, vrátane internetu/IP-telefónu/identifikátorov a priority IPTV VLAN a funkcií portov LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Vyberte ak váš poskytoval Internetu je Portugal-MEO a potrebné parametre sú dopredu určené vrátane Internet VLAN ID, priority a nastavenie LAN (1/2/3/4) portov."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Vyberte ak váš poskytoval Internetu je Portugal-Vodafone a potrebné parametre sú dopredu určené vrátane Internet / IP Phone / IPTV VLAN ID a priority. Môžete preradiť funkcionalitu svojich LAN portov podľa potreby (Internet / IPTV / IP-Phone / Internet-IPTV)."
						},
						{
							type: "name",
							title: "Vlastné",
							content: "Vyberte túto možnosť, ak váš ISP nie je v zozname, ale poskytuje potrebné parametre, vrátane internetu/IP-telefónu/identifikátorov a priority IPTV VLAN a funkcií portov LAN (1/2/3/4).",
							children: [{
								type: "name",
								title: "ID/Priorita pre Internet/IP-telefón/IPTV VLAN",
								content: "Nakonfigurujte ID a priority VLAN tak, ako vám ich poskytol váš ISP."
							},{
								type: "name",
								title: "Značka 802.1Q",
								content: "Vyberte, či označovať pakety internetu značkou 802.1Q."
							},{
								type: "name",
								title: "ID/Priorita funkcie IPTV Multicast VLAN",
								content: "Funkciu IPTV multicast môžete zapínať podľa potreby a ID a prioritu VLAN nakonfigurovať podľa vášho ISP."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Priraďte svoj port LAN podľa toho, či má slúžiť na sprostredkovanie prístupu na internet, sprostredkovanie IP telefónu alebo sprostredkovanie IPTV."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Kliknutím na Uložiť uložíte všetky vaše nastavenia."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Nastavenie",
			CONTENT: [{
				type: "name",
				title: "Server DHCP",
				content: "Predvolená je možnosť zapnúť server DHCP (Dynamic Host Configuration Protocol-Dynamický hostiteľský konfiguračný protokol), dynamicky priraďuje parametre TCP/IP klientskym zariadeniam z fondu IP adries. Nevypínajte server DHCP, ak nemáte iný server DHCP, alebo ak nechcete ručne priraďovať parametre TCP/IP každému klientskemu zariadeniu vo vašej sieti."
			},{
				type: "name",
				title: "Fond adries IP",
				content: "Zadajte rozsah IP adries, ktoré je možné prenajať klientom."
			},{
				type: "name",
				title: "Čas prenájmu adresy",
				content: "Zadajte dobu trvania, na ktorú sa IP adresa prenajíma klientovi, medzi 1 až 2880 minút. Predvolená hodnota je 120 minút."
			},{
				type: "name",
				title: "Predvolená brána",
				content: "Zadajte IP adresu portu LAN. (Voliteľne)"
			},{
				type: "name",
				title: "Primárny DNS/Sekundárny DNS",
				content: "Zadajte tieto parametre, ako vám ich poskytol ISP. (Voliteľne)"
			},{
				type:"paragraph",
				content:"Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Rezervácia adries",
			CONTENT: [{
				type: "paragraph",
				content: "IP adresu môžete rezervovať ručne klientovi, ktorý je pripojený k smerovaču. Po rezervácii bude IP adresu priraďovať server DHCP iba tomu istému klientovi."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazí sa MAC adresa klienta s IP adresou rezervovanou serverom DHCP."
			},{
				type: "name",
				title: "Rezervovaná IP adresa",
				content: "Zobrazí sa rezervovaná IP adresa klienta."
			},{
				type: "name",
				title: "Popis",
				content: "Zobrazí sa popis klientskeho zariadenia."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazí sa aktuálny stav klientskeho zariadenia (zapnuté alebo vypnuté)."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti modifikovať alebo odstrániť príslušného klienta."
			},{
				type: "step",
				title: "Rezervovať IP adresu",
				content:[
					"1. Kliknite na tlačidlo pridať.",
					"2. Zadajte MAC adresu vami požadovaného klienta.",
					"3. Zadajte IP adresu, ktorú chcete rezervovať pre klienta.",
					"4. Zadajte popis pre klienta.",
					"5. Vyberte možnosť Zapnúť.",
					"6. Kliknite na tlačidlo OK."
				]
			},{
				type: "step",
				title: "Ak chcete modifikovať alebo odstrániť existujúceho klienta",
				content: "V tabuľke kliknite na ikonu Upraviť, alebo na ikonu Odstrániť, ktorá je príslušná klientovi, ktorého chcete upraviť alebo odstrániť."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "Zoznam klientov DHCP",
			CONTENT: [{
				type: "name",
				title: "Číslo klienta",
				content: "Zobrazí sa číslo prideleného klienta DHCP."
			},{
				type: "name",
				title: "Názov klienta",
				content: "Zobrazí sa názov klienta DHCP."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazí sa MAC adresa."
			},{
				type: "name",
				title: "Priradená adresa IP",
				content: "Zobrazí sa IP adresa, ktorú klientovi alokoval server DHCP."
			},{
				type: "name",
				title: "Čas prenájmu",
				content: "Zobrazí sa zostávajúci čas IP adresy prenajatej klientovi."
			},{
				type: "name",
				title: "Obnoviť",
				content: "Kliknutím aktualizujete zoznam klientov DHCP."
			}]
		},

		DDNS: {
			TITLE: "Dynamický DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamický DNS (Systém názvu domény) vám umožňuje priradiť pevný hosting a názov domény k dynamickej Internetovej IP adrese. Je užitočné, keď hosťujete svoju vlastnú stránku, FTP server alebo iný server za routerom. Pre začiatok sa potrebujete prihlásiť pomocou služby Dynamický DNS poskytovateľa, ako www.dyndns.com. Potom zadajte svoje registračné informácie."
			},{
				type: "step",
				title: "Ak chcete nastaviť dynamický DNS",
				content: [
					"1. Vyberte svojho poskytovateľa služby DDNS.",
					"2. Zadajte Meno a Heslo svojho konta DDNS.",
					"3. Zadajte názov domény, ktorú ste zaregistrovali pomocou služby Dynamický DNS.",
					"4. Zvoľte časový interval, v ktorom bude zaslaná požiadavka na aktualizáciu Dynamického DNS.",
					"5. Ak váš poskytovateľ služby je NO-IP, zvoľte spojenie WAN IP na zabezpečenie, že názov domény je pripojený k WAN IP tohto routera.",
					"6. Kliknite na Prihlásiť sa a Uložiť."
				]
			},{
				type: "note",
				title:"Poznámka",
				content: "Ak chcete použiť nový účet DDNS, najprv sa, prosím, odhláste a potom sa prihláste pomocou nového účtu."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "Dynamický DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamický DNS (Systém názvu domény) vám umožňuje priradiť pevný hosting a názov domény k dynamickej Internetovej IP adrese. Je užitočné, keď hosťujete svoju vlastnú stránku, FTP server alebo iný server za routerom. Pre začiatok sa potrebujete prihlásiť pomocou služby Dynamický DNS poskytovateľa, ako www.dyndns.com. Potom zadajte svoje registračné informácie."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Zoznam názvov domén",
			CONTENT: [{
				type: "paragraph",
				content: "Táto tabuľka uvádza názvy domén Dynamického DNS, ktoré sú registrované s vašou identifikáciou TP-Link ID."
			},{
				type:"step",
				title: "Registrácia nového názvu domény",
				content: [
					"1. Kliknite na Registrovať.",
					"2. Zadajte názov domény.",
					"3. Kliknite na Uložiť."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Statické smerovanie",
			CONTENT: [{
				type: "paragraph",
				content: "Statické smerovanie sa používa na predurčenie pevnej cesty sieťových informačných paketov na dosiahnutie určitého hostiteľa alebo siete."
			},{
				type: "step",
				title: "Ak chcete nastaviť statické smerovanie",
				content: [
					"1. Kliknite na tlačidlo pridať.",
					"2. Cieľová sieť - ak chcete priradiť statickú cestu pre túto položku, zadajte IP adresu  v desiatkovom tvare s bodkami. ",
					"3. Maska podsiete - zadajte masku podsiete v desiatkovom tvare s bodkami, čím určite časť siete a hostiteľskú časť IP adresy. ",
					"4. Predvolená brána - zadajte IP adresu brány v desiatkovom tvare s bodkami, čím pripojíte smerovač k sieti alebo hostiteľovi.",
					"5. Rozhranie - Vyberte LAN alebo WAN a určite typ cieľovej siete.",
					"6. Popis - Zadajte krátky popis tejto položky.",
					"7. Vyberte možnosť Zapnúť.",
					"8. Kliknite na tlačidlo OK."
				]
			},{
				type: "step",
				title: "Ak chcete modifikovať alebo odstrániť existujúcu položku",
				content: "V tabuľke kliknite na ikonu Upraviť, alebo na ikonu Odstrániť, ktorá je príslušná položke, ktorú chcete upraviť alebo odstrániť."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "System Routing Table (Systémová smerovacia tabuľka)：",
			CONTENT: [{
				type: "paragraph",
				content: "V systémovej tabuľke smerovania sa zobrazujú všetky položky smerovania, ktoré sa aktuálne používajú."
			},{
				type: "paragraph",
				content: "Kliknutím na príkaz Obnoviť sa aktualizuje tabuľka smerovania."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Nastavenie",
			CONTENT: [{
				type: "name",
				title: "Oblasť",
				content: "Vyberte svoju oblasť z rozbalovacej ponuky. Ak vaša krajina alebo oblasť nie je v zozname, môže to znamenať, že bezdrôtový vysielač sa vo vašej lokalite nesmie používať."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Bezdrôtové pripojenie 2,4 GHz",
			CONTENT: [{
				type: "name",
				title: "Zapnúť bezdrôtový vysielač",
				content: "Začiarknite toto políčko, ak chcete zapnúť bezdrôtovú vysielaciu frekvenciu 2,4 GHz."
			},{
				type: "name",
				title: "Názov bezdrôtovej siete (SSID)",
				content: "Môžete nechať predvolený názov siete (SSID) ako je, alebo zadať nový názov (až 32 znakov). Toto pole je citlivé na veľké a malé písmená."
			},{
				type: "name",
				title: "Skryť SSID",
				content: "Začiarknite toto políčko, ak chcete skryť názov siete (SSID) 2.4GHz zo zoznamu Wi-Fi sietí."
			},{
				type: "name",
				title: "Zabezpečenie",
				content: "Vyberte jednu z nasledovných možností zabezpečenia:",
				children: [{
					type: "name",
					title: "Bez zabezpečenia",
					content: "Vyberte túto možnosť, ak chcete vypnúť zabezpečenie bezdrôtovej siete. Dôrazne sa odporúča, aby ste zabezpečenie bezdrôtovej siete zapli a chránili tak svoju bezdrôtovú sieť pred neoprávneným prístupom."
				},{
					type: "name",
					title: "WPA/WPA2-Osobné",
					content: "Vyberte túto možnosť, čím zapnete štandardnú metódu autorizácie na základe vopred zdieľaného kľúča (PSK), ktorý sa tiež nazýva prístupová fráza. Táto možnosť sa odporúča. Ak ju vyberiete, nakonfigurujte nasledovné.",
					children: [{
						type: "name",
						title: "Verzia",
						content: "Vyberte verziu zabezpečenia pre vašu bezdrôtovú sieť.",
						children: [{
							type: "name",
							title: "Automaticky",
							content: "Pri tejto možnosti sa podporuje viacnásobná implementácia normy WPA (Wi-Fi Protected Access - chránený prístup k Wi-Fi), ako napríklad WPA a WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Pri tejto možnosti sa podporuje iba šifrovanie TKIP, ktoré poskytuje dobrú úroveň zabezpečenia."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Pri tejto možnosti sa podporuje šifrovanie AES, ktoré poskytuje lepšiu úroveň zabezpečenia než šifrovanie WPA-PSK a odporúča sa."
						}]
					},{
						type: "name",
						title: "Šifrovanie",
						content: "Vyberte typ zabezpečenia šifrovania: TKIP (Temporal Key Integrity Protocol Protokol integrity dočasného kľúča), AES (Advanced Encryption Standard-pokročilá norma šifrovania), alebo Automaticky (aj pre TKIP aj pre AES). NE odporúča sa používať šifrovanie TKIP, ak smerovač funguje v režime 802.11n, pretože šifrovanie TKIP nepodporuje špecifikácia 802.11n. Ak je vybrané šifrovanie TKIP, funkcia WPS bude vypnutá."
					},{
						type: "name",
						title: "Heslo",
						content: "Zadajte do tohto poľa heslo bezdrôtového pripojenia od 8 do 63 znakov ASCII, alebo od 8 do 64 hexadecimálnych znakov."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - korporátne",
					content: "Vyberte túto možnosť, ak chcete zapnúť pokročilejšiu metódu overenia pomocou servera RADIUS (Remote Authentication Dial In User Service). Ak je vybrané, funkcia WPS bude vypnutá.",
					children: [{
						type: "name",
						title: "Verzia",
						content: "Vyberte verziu zabezpečenia pre vašu bezdrôtovú sieť.",
						children:[{
							type: "name",
							title: "Automaticky",
							content: "Pri tejto možnosti sa podporuje viacnásobná implementácia normy WPA (Wi-Fi Protected Access - chránený prístup k Wi-Fi), ako napríklad WPA a WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Pri tejto možnosti sa podporuje iba šifrovanie TKIP, ktoré poskytuje dobrú úroveň zabezpečenia."
						},{
							type: "name",
							title: "WPA2",
							content: "Pri tejto možnosti sa podporuje šifrovanie AES, ktoré poskytuje lepšiu úroveň zabezpečenia než šifrovanie WPA-PSK a odporúča sa."
						}]
					},{
						type: "name",
						title: "Šifrovanie",
						content: "Vyberte typ zabezpečenia šifrovania: TKIP (Temporal Key Integrity Protocol Protokol integrity dočasného kľúča), AES (Advanced Encryption Standard-pokročilá norma šifrovania), alebo Automaticky (aj pre TKIP aj pre AES). NE odporúča sa používať šifrovanie TKIP, ak smerovač funguje v režime 802.11n, pretože šifrovanie TKIP nepodporuje špecifikácia 802.11n. Ak je vybrané šifrovanie TKIP, funkcia WPS bude vypnutá."
					},{
						type: "name",
						title: "IP servera RADIUS",
						content: "Zadajte IP adresu servera RADIUS."
					},{
						type: "name",
						title: "Port servera RADIUS",
						content: "Zadajte číslo portu servera RADIUS."
					},{
						type: "name",
						title: "Heslo servera RADIUS",
						content: "Zadajte zdieľané heslo servera RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Vyberte túto možnosť, čím zapnete základnú metódu autorizácie v prípade, že ktorékoľvek zo zariadení vášho klienta má prístup k bezdrôtovej sieti iba pomocou WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Typ",
						content: "Vyberte typ overenia pre vašu bezdrôtovú sieť. Predvolená možnosť je Automaticky, kedy sa automaticky zvolí Otvorený systém alebo Zdieľaný kľúč založený na schopnosti a žiadosti o prístup bezdrôtového klienta."
					},{
						type: "name",
						title: "Formáť kľúča WEP",
						content: "Alebo použite formát ASCII, alebo vyberte Hexadecimálne. Formát ASCII je kombináciou abecedných a numerických znakov. Hexadecimálny formát je kombináciou číslic (0-9) a písmen (A-F, a-f)."
					},{
						type: "name",
						title: "Typ kľúča",
						content: "Vyberte dĺžku kľúča WEP.",
						children: [{
							type: "name",
							title: "64-bitový",
							content: "Umožňuje zadať 10 hexadecimálnych znakov (0-9, A-F, a-f) alebo 5 znakov ASCII do poľa hodnoty WEP."
						},{
							type: "name",
							title: "128-bitový",
							content: "Umožňuje zadať 26 hexadecimálnych znakov (0-9, A-F, a-f) alebo 13 znakov ASCII do poľa hodnoty WEP."
						}]
					},{
						type: "name",
						title: "Hodnota kľúča",
						content: "Zadajte kľúč WEP do príslušného poľa."
					}]
				}]
			},{
				type: "name",
				title: "Režim",
				content: "Vyberte zmiešaný režim prenosu."
			},{
				type: "name",
				title: "Šírka kanála",
				content: "Vyberte šírku kanála (šírku pásma) 2,4GHz bezdrôtovej siete."
			},{
				type: "name",
				title: "Kanál",
				content: "Vyberte prevádzkový kanál pre bezdrôtovú sieť s frekvenciou 2,4 GHz. Odporúča sa ponechať kanál na možnosti Automatické, ak nemáte problém s prerušovaným bezdrôtovým pripojením."
			},{
				type: "name",
				title: "Výkon vysielača",
				content: "Vyberte možnosť Vysoký, Stredný, alebo Nízky a určite prenosový výkon dát. Predvolené a odporúčané nastavenie je Vysoký."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Bezdrôtové pripojenie 5 GHz",
			CONTENT: [{
				type: "name",
				title: "Zapnúť bezdrôtový vysielač",
				content: "Začiarknite toto políčko, ak chcete zapnúť bezdrôtovú vysielaciu frekvenciu 5 GHz."
			},{
				type: "name",
				title: "Názov bezdrôtovej siete (SSID)",
				content: "Môžete nechať predvolený názov siete (SSID) ako je, alebo zadať nový názov (až 32 znakov). Toto pole je citlivé na veľké a malé písmená."
			},{
				type: "name",
				title: "Skryť SSID",
				content: "Začiarknite toto políčko, ak chcete skryť názov siete (SSID) 5 GHz zo zoznamu Wi-Fi sietí."
			},{
				type: "name",
				title: "Zabezpečenie",
				content: "Vyberte jednu z nasledovných možností zabezpečenia:",
				children: [{
					type: "name",
					title: "Bez zabezpečenia",
					content: "Vyberte túto možnosť, ak chcete vypnúť zabezpečenie bezdrôtovej siete. Dôrazne sa odporúča, aby ste zabezpečenie bezdrôtovej siete zapli a chránili tak svoju bezdrôtovú sieť pred neoprávneným prístupom."
				},{
					type: "name",
					title: "WPA/WPA2-Osobné",
					content: "Vyberte túto možnosť, čím zapnete štandardnú metódu autorizácie na základe vopred zdieľaného kľúča (PSK), ktorý sa tiež nazýva prístupová fráza. Táto možnosť sa odporúča. Ak ju vyberiete, nakonfigurujte nasledovné.",
					children: [{
						type: "name",
						title: "Verzia",
						content: "Vyberte verziu zabezpečenia pre vašu bezdrôtovú sieť.",
						children: [{
							type: "name",
							title: "Automaticky",
							content: "Pri tejto možnosti sa podporuje viacnásobná implementácia normy WPA (Wi-Fi Protected Access - chránený prístup k Wi-Fi), ako napríklad WPA a WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Pri tejto možnosti sa podporuje iba šifrovanie TKIP, ktoré poskytuje dobrú úroveň zabezpečenia."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Pri tejto možnosti sa podporuje šifrovanie AES, ktoré poskytuje lepšiu úroveň zabezpečenia než šifrovanie WPA-PSK a odporúča sa."
						}]
					},{
						type: "name",
						title: "Šifrovanie",
						content: "Vyberte typ zabezpečenia šifrovania: TKIP (Temporal Key Integrity Protocol Protokol integrity dočasného kľúča), AES (Advanced Encryption Standard-pokročilá norma šifrovania), alebo Automaticky (aj pre TKIP aj pre AES). NE odporúča sa používať šifrovanie TKIP, ak smerovač funguje v režime 802.11n, pretože šifrovanie TKIP nepodporuje špecifikácia 802.11n. Ak je vybrané šifrovanie TKIP, funkcia WPS bude vypnutá."
					},{
						type: "name",
						title: "Heslo",
						content: "Zadajte do tohto poľa heslo bezdrôtového pripojenia od 8 do 63 znakov ASCII, alebo od 8 do 64 hexadecimálnych znakov."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - korporátne",
					content: "Vyberte túto možnosť, ak chcete zapnúť pokročilejšiu metódu overenia pomocou servera RADIUS (Remote Authentication Dial In User Service). Ak je vybrané, funkcia WPS bude vypnutá.",
					children: [{
						type: "name",
						title: "Verzia",
						content: "Vyberte verziu zabezpečenia pre vašu bezdrôtovú sieť.",
						children: [{
							type: "name",
							title: "Automaticky",
							content: "Pri tejto možnosti sa podporuje viacnásobná implementácia normy WPA (Wi-Fi Protected Access - chránený prístup k Wi-Fi), ako napríklad WPA a WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Pri tejto možnosti sa podporuje iba šifrovanie TKIP, ktoré poskytuje dobrú úroveň zabezpečenia."
						},{
							type: "name",
							title: "WPA2",
							content: "Pri tejto možnosti sa podporuje šifrovanie AES, ktoré poskytuje lepšiu úroveň zabezpečenia než šifrovanie WPA-PSK a odporúča sa."
						}]
					},{
						type: "name",
						title: "Šifrovanie",
						content: "Vyberte typ zabezpečenia šifrovania: TKIP (Temporal Key Integrity Protocol Protokol integrity dočasného kľúča), AES (Advanced Encryption Standard-pokročilá norma šifrovania), alebo Automaticky (aj pre TKIP aj pre AES). NE odporúča sa používať šifrovanie TKIP, ak smerovač funguje v režime 802.11n, pretože šifrovanie TKIP nepodporuje špecifikácia 802.11n. Ak je vybrané šifrovanie TKIP, funkcia WPS bude vypnutá."
					},{
						type: "name",
						title: "IP servera RADIUS",
						content: "Zadajte IP adresu servera RADIUS."
					},{
						type: "name",
						title: "Port servera RADIUS",
						content: "Zadajte číslo portu servera RADIUS."
					},{
						type: "name",
						title: "Heslo servera RADIUS",
						content: "Zadajte zdieľané heslo servera RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Vyberte túto možnosť, čím zapnete základnú metódu autorizácie v prípade, že ktorékoľvek zo zariadení vášho klienta má prístup k bezdrôtovej sieti iba pomocou WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Typ",
						content: "Vyberte typ overenia pre vašu bezdrôtovú sieť. Predvolená možnosť je Automaticky, kedy sa automaticky zvolí Otvorený systém alebo Zdieľaný kľúč založený na schopnosti a žiadosti o prístup bezdrôtového klienta."
					},{
						type: "name",
						title: "Formáť kľúča WEP",
						content: "Alebo použite formát ASCII, alebo vyberte Hexadecimálne. Formát ASCII je kombináciou abecedných a numerických znakov. Hexadecimálny formát je kombináciou číslic (0-9) a písmen (A-F, a-f)."
					},{
						type: "name",
						title: "Typ kľúča",
						content: "Vyberte dĺžku kľúča WEP.",
						children:[{
							type: "name",
							title: "64-bitový",
							content: "Umožňuje zadať 10 hexadecimálnych znakov (0-9, A-F, a-f) alebo 5 znakov ASCII do poľa hodnoty WEP."
						},{
							type: "name",
							title: "128-bitový",
							content: "Umožňuje zadať 26 hexadecimálnych znakov (0-9, A-F, a-f) alebo 13 znakov ASCII do poľa hodnoty WEP."
						}]
					},{
						type: "name",
						title: "Hodnota kľúča",
						content: "Zadajte kľúč WEP do príslušného poľa."
					}]
				}]
			},{
				type: "name",
				title: "Režim",
				content: "Vyberte zmiešaný režim prenosu."
			},{
				type: "name",
				title: "Šírka kanála",
				content: "Vyberte šírku kanála (šírku pásma) 5GHz bezdrôtovej siete."
			},{
				type: "name",
				title: "Kanál",
				content: "Vyberte prevádzkový kanál pre bezdrôtovú sieť s frekvenciou 5 GHz. Odporúča sa ponechať kanál na možnosti Automatický, ak nemáte problém s prerušovaným bezdrôtovým pripojením."
			},{
				type: "name",
				title: "Výkon vysielača",
				content: "Vyberte možnosť Vysoký, Stredný, alebo Nízky a určite prenosový výkon dát. Predvolené a odporúčané nastavenie je Vysoký."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		WPS: {	
			TITLE: "PIN smerovača",
			CONTENT: [{
				type: "paragraph",
				content: "Ostatné zariadenia sa môžu pripojiť k tomuto smerovaču pomocou WPS použitím kódu PIN smerovača."
			},{
				type: "name",
				title: "PIN smerovača",
				content: "Zapnutím tejto možnosti umožníte bezdrôtovým zariadeniam pripojenie k smerovaču pomocou kódu PIN (Personal Identification Number-Osobné identifikačné číslo) smerovača."
			},{
				type: "name",
				title: "Kód PIN",
				content: "Zobrazí kód PIN smerovača. Predvolený kód PIN sa nachádza na štítku na smerovači. Kliknite na možnosť Generovať, čím sa vygeneruje nový kód PIN náhodným výberom, alebo kliknite na možnosť Predvolené, čím sa aktuálny kód PIN vráti na predvolené továrenské nastavenie kódu PIN."
			}]
		},

		WPS_WIZARD: {
			TITLE: "Sprievodca WPS",
			CONTENT:[{
				type: "name",
				title: "Tlačidlom WPS (Odporúča sa)",
				content: "Vyberte túto metódu inštalácie, ak chcete zapnúť funkciu WPS a jednoducho pripájať ľubovoľné zariadenie s funkciou WPS do vašej bezdrôtovej siete pomocou tlačidla WPS, alebo prakticky pomocou tlačidla Pripojiť tu na stránke."
			},{
				type: "name",
				title: "Kód PIN",
				content: "Vyberte túto metódu inštalácie, ak chcete pridať zariadenie ručne zadaním kódu WPS PIN bezdrôtového zariadenia do poľa a kliknutím na tlačidlo Pripojiť."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Online bezdrôtové stanice",
			CONTENT: [{
				type: "name",
				title: "Číslo klienta",
				content: "Zobrazí sa číslo príslušného bezdrôtového klienta."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazí sa MAC adresa príslušného bezdrôtového klienta."
			},{
				type: "name",
				title: "Typ pripojenia",
				content: "Zobrazí sa bezdrôtové frekvenčné pásmo (2,4 GHz alebo 5 GHz) príslušného bezdrôtového klienta."
			},{
				type: "name",
				title: "Zabezpečenie",
				content: "Zobrazí sa typ zabezpečenia príslušného bezdrôtového klienta."
			},{
				type: "name",
				title: "Prijaté pakety",
				content: "Zobrazí sa počet paketov prijatých príslušným klientom bezdrôtového pripojenia."
			},{
				type: "name",
				title: "Odoslané pakety",
				content: "Zobrazí sa počet paketov odoslaných príslušným klientom bezdrôtového pripojenia."
			},{
				type: "paragraph",
				content: "Kliknutím na tlačidlo Obnoviť aktualizujete informácie na tejto strane."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Nastavenie",
			CONTENT: [{
				type: "paragraph",
				content: "Guest Network (hosťovská sieť) umožní vám nainštalovať oddelenú sieť s oddeleným názvom bezdrôtovej siete (SSID) a heslom, ktoré môžu používať hostia na prístup k vašej bezdrôtovej sieti."
			},{
				type: "name",
				title: "Umožniť hosťom, aby sa navzájom videli",
				content: "Začiarknutím tohto políčka umožníte bezdrôtovým zariadeniam v hosťovskej sieti, aby sa navzájom videli."
			},{
				type: "name",
				title: "Umožniť hosťom prístup ku svojej lokálnej sieti",
				content: "Začiarknutím tohto políčka umožníte bezdrôtovým zariadeniam, na hosťovskej sieti prístup k zdieľaným zariadeniam a tlačiarňam."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "2,4GHz/5GHz bezdrôtová sieť",
			CONTENT: [{
				type: "name",
				title: "Zapnúť hosťovskú sieť",
				content: "Začiarknutím tohto políčka zapnete funkciu hosťovskej siete."
			},{
				type: "name",
				title: "Názov bezdrôtovej siete (SSID)",
				content: "Môžete použiť predvolený názov hosťovskej siete (SSID), alebo vytvoriť nový názov (až 32 znakov)."
			},{
				type: "name",
				title: "Skryť SSID",
				content: "Začiarknite toto políčko, ak chcete skryť názov hosťovskej siete (SSID) zo zoznamu Wi-Fi sietí."
			},{
				type: "name",
				title: "Zabezpečenie",
				content: "Keď si zvolíte možnosť nikdy neaktualizovať heslo, vyberte si jednu z nasledujúcich možností zabezpečenia:",
				children: [{
					type: "name",
					title: "Bez zabezpečenia",
					content: "Vyberte túto možnosť, ak chcete vypnúť zabezpečenie bezdrôtovej siete. Dôrazne sa odporúča, aby ste zabezpečenie bezdrôtovej siete zapli a chránili tak svoju hosťovskú sieť pred neoprávneným prístupom."
				},{
					type: "name",
					title: "WPA/WPA2-Osobné",
					content: "Vyberte túto možnosť a zapnite štandardnú metódu autorizácie na základe vopred zdieľaného kľúča (PSK), ktorý sa tiež nazýva prístupová fráza. Ak ju vyberiete, nakonfigurujte nasledovné.",
					children: [{
						type: "name",
						title: "Verzia",
						content: "Vyberte verziu zabezpečenia pre vašu hosťovskú sieť.",
						children: [{
							type: "name",
							title: "Automaticky",
							content: "Pri tejto možnosti sa podporuje viacnásobná implementácia normy WPA (Wi-Fi Protected Access - chránený prístup k Wi-Fi), ako napríklad WPA a WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Pri tejto možnosti sa podporuje iba šifrovanie TKIP, ktoré poskytuje dobrú úroveň zabezpečenia."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Pri tejto možnosti sa podporuje šifrovanie AES, ktoré poskytuje lepšiu úroveň zabezpečenia než šifrovanie WPA-PSK a odporúča sa."
						}]
					},{
						type: "name",
						title: "Šifrovanie",
						content: "Vyberte typ zabezpečenia šifrovania: TKIP (Temporal Key Integrity Protocol Protokol integrity dočasného kľúča), AES (Advanced Encryption Standard-pokročilá norma šifrovania), alebo Automaticky (aj pre TKIP aj pre AES). NE odporúča sa používať šifrovanie TKIP, ak smerovač funguje v režime 802.11n, pretože šifrovanie TKIP nepodporuje špecifikácia 802.11n. Ak je vybrané šifrovanie TKIP, funkcia WPS bude vypnutá."
					}]
			}]},{
				type: "name",
				title: "Heslo",
				content: "Použite buď náhodne vygenerované heslo alebo si vytvorte heslo v dĺžke 8 až 63 znakov ASCII alebo v dĺžke 8 až 64 hexadecimálnych znakov (0-9, a-f, A-F)."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},

		NAT: {
			TITLE: "Brána aplikačnej hladiny (ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG Umožňuje vlastný Preklad sieťových adries (NAT) traverznými filtrami, ktoré sa zasunú do brány a podporujú preklad adries a portov pre protokoly „ovládania/dát“určitej hladiny aplikácií: FTP, TFTP, H323 atď. Odporúča sa zapnúť ALG."
			},{
				type: "name",
				title: "Zapnúť FTP ALG",
				content: "Ak je vybraná táto možnosť, umožňuje to klientom a serverom protokolu FTP (Protokol prenosu súborov) prenášať dáta cez NAT."
			},{
				type: "name",
				title: "Zapnúť TFTP ALG",
				content: "Ak je vybraná táto možnosť, umožňuje to klientom a serverom protokolu TFTP (Triviálny protokol prenosu súborov) prenášať dáta cez NAT."
			},{
				type: "name",
				title: "Zapnúť H323 ALG",
				content: "Ak je vybraná táto možnosť, umožňuje to klientom aplikácie Microsoft NetMeeting komunikáciu cez NAT."
			},{
				type: "name",
				title: "Zapnúť RTSP ALG",
				content: "Ak je vybraná táto možnosť, umožňuje to klientom prehrávača médií komunikovať so servermi prúdu médií cez NAT."
			},{
				type: "name",
				title: "Zapnúť prechod PPTP",
				content: "Ak je vybraná táto možnosť, umožňuje to reláciám Point-to-Point prechádzať tunelom cez sieť IP a cez smerovač."
			},{
				type: "name",
				title: "Zapnúť prechod L2TP",
				content: "Ak je vybraná táto možnosť, umožňuje to reláciám Layer 2 Point-to-Point prechádzať tunelom cez sieť IP a cez smerovač."
			},{
				type: "name",
				title: "Zapnúť prechod IPSec",
				content: "Ak je vybraná táto možnosť, umožňuje to zabezpečeniu internetového protokolu (IPSec) prechádzať tunelom cez sieť IP a cez smerovač. Na zabezpečenie súkromia a komunikácie cez siete IP používa protokol IPSec šifrovacie služby zabezpečenia."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Virtuálne servery",
			CONTENT: [{
				type: "paragraph",
				content: "Virtuálne servery sa používajú na inštaláciu verejných služieb na vašu lokálnu sieť. Virtuálny server sa definuje ako externý port a všetky požiadavky z internetu na tento externý port budú presmerované na zvláštny počítač, ktorý musí byť nakonfigurovaný so statickou alebo vyhradenou IP adresou."
			},{
				type: "name",
				title: "Typ služby",
				content: "Zobrazí sa názov vášho virtuálneho servera."
			},{
				type: "name",
				title: "Externý port",
				content: "Zobrazí sa číslo portu alebo rozsah portov, ktoré používa virtuálny server."
			},{
				type: "name",
				title: "Interná IP",
				content: "Zobrazí sa IP adresa počítača, na ktorom je spustená aplikácia služby."
			},{
				type: "name",
				title: "Interný port",
				content: "Zobrazí sa číslo portu počítača, na ktorom je spustená aplikácia služby."
			},{
				type: "name",
				title: "Protokol",
				content: "Zobrazí sa protokol, ktorý sa používa na aplikáciu služby: TCP, UDP, alebo Všetky (Všetky protokoly, ktoré smerovač podporuje)."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazí sa aktuálny stav určitého pravidla filtrovania (zapnuté alebo vypnuté)."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti Modifikovať alebo Odstrániť príslušné pravidlo."
			},{
				type: "step",
				title: "Ak chcete nastaviť pravidlo virtuálneho servera",
				content: [
					"1. Kliknite na tlačidlo pridať.",
					"2. Kliknite na položku Zobraziť existujúce služby a vyberte službu zo zoznamu, čím sa automaticky vyplní číslo príslušného portu v poliach Externý port a Interný port. Ak služba nie je v zozname, zadajte číslo externého portu (napr. 21), alebo rozsah portov (napr. 21-25). Nechajte pole Interný port prázdne, ak je rovnaké ako Externý port, alebo zadajte konkrétne číslo portu (napr. 21), ak je Externý port jediným portom. Zadajte IP adresu počítača, na ktorom je spustená aplikácia služby v desiatkovom tvare s bodkami do poľa Vnútorná IP.",
					"3. Vyberte protokol aplikácie služby: TCP, UDP, alebo Všetky z rozbaľovacieho zonamu Protokol.",
					"4. Vyberte možnosť Zapnúť.",
					"5. Kliknite na tlačidlo OK."
				]
			},{
				type: "step",
				title: "Modifikácia alebo odstránenie pravidla virtuálneho servera",
				content: "V tabuľke kliknite na ikonu Upraviť alebo na ikonu Odstrániť, ktorá je príslušná pravidlu, ktoré chcete modifikovať alebo odstrániť."
			},{
				type: "step",
				title: "Odstránenie viacerých pravidiel",
				content: "Vyberte všetky pravidlá, ktoré chcete odstrániť, kliknite na príkaz Odstrániť nad tabuľkou."
			},{
				type: "note",
				title: "Poznámka",
				content: "Ak vaše lokálne hostiteľské zariadenie hostí viac než jeden typ dostupných služieb, je potrebné pre každú službu vytvoriť pravidlo."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Spúšťanie portov",
			CONTENT: [{
				type: "paragraph",
				content: "Spúšťanie portov sa používa na presmerovanie prenosu na určitý port konkrétneho servera na sieti."
			},{
				type: "name",
				title: "Aplikácia",
				content: "Zobrazí sa názov aplikácie."
			},{
				type: "name",
				title: "Triggering Port / Spúšťajúci port",
				content: "Zobrazí sa port odchádzajúceho prenosu, ktorý sa používa na spúšťanie pravidla filtrovania odchádzajúceho pripojenia."
			},{
				type: "name",
				title: "Trigger Protocol / Spúšťajúci protokol",
				content: "Zobrazí sa protokol používaný Spúšťajúcim portom. TCP, UDP, alebo Všetky (Všetky protokoly, ktoré smerovač podporuje."
			},{
				type: "name",
				title: "Externý port",
				content: "Zobrazí sa port alebo rozsah portov, ktoré používa vzdialený systém. Do PC, ktoré spúšťa toto pravidlo, bude pomocou jedného z týchto portov presmerovaná odpoveď. Najviac môže vstupovať 5 skupín portov (alebo sekcií portov). Každá skupina portov musí byť oddelená čiarkami „,“, napríklad, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Externý protokol",
				content: "Zobrazí sa protokol používaný pre Vstupný port: TCP, UDP, alebo ALL (všetky protokoly podporované smerovačom)."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazí sa aktuálny stav určitého pravidla filtrovania (zapnuté alebo vypnuté)."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti Modifikovať alebo Odstrániť príslušné pravidlo."
			},{
				type: "step",
				title: "Nastavenie pravidla spúšťania portov",
				content: [{
					type: "note",
					title: "Poznámka",
					content: "Každé pravidlo môže súčasne používať iba jeden hostiteľ."
				},
					"1. Kliknite na tlačidlo pridať.",
					"2. Kliknite na Zobraziť existujúce aplikácie a vyberte aplikáciu zo zoznamu a do príslušných polí sa automaticky doplnia predvolené hodnoty. Ak chcete pridať aplikáciu, ktorá nie je v zozname, ručne zadajte Aplikácia, Spúšťajúci port, Spúšťajúci protokol, Externý port a EExterný protokol.",	
					"3. Vyberte možnosť Zapnúť.",
					"4. Kliknite na tlačidlo OK."
				]
			},{
				type: "step",
				title: "Modifikácia alebo odstránenie pravidla Spúšťania portov",
				content: "V tabuľke kliknite na ikonu Upraviť alebo na ikonu Odstrániť, ktorá je príslušná pravidlu, ktoré chcete modifikovať alebo odstrániť."
			},{
				type: "step",
				title: "Odstránenie viacerých pravidiel Spúšťania portov",
				content: "V tabuľke vyberte všetky pravidlá, ktoré chcete odstrániť a kliknite na príkaz Odstrániť nad tabuľkou."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "Hostiteľská funkcia DMZ (demilitarizovaná zóna) umožňuje miestnemu hostiteľovi otvoriť sa internetu kvôli službe zvláštneho účelu, ako napríklad hry cez internet alebo video konferencie. Funkcia DMZ v podstate umožňuje, aby mal jeden počítač na vašej sieti LAN otvorené všetky porty. Tento počítač je potrebné nakonfigurovať so statickou IP adresou a vypnutou klientskou funkciou DHCP."
			},{
				type: "step",
				title: "Určenie počítača alebo servera ako servera DMZ",
				content: [
					"1. Kliknite na možnosť Enable Zapnúť DMZ.",
					"2. Do poľa IP adresa hostiteľa DMZ zadajte IP adresu počítača v miestnej sieti a nakonfigurujte ho ako hostiteľa DMZ.",
					"3. Kliknite na Uložiť."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Predvolene je funkcia Universal Plug-and-Play (UPnP) určená na to, aby umožnila zariadeniam, ako napríklad počítačom a internetovým zariadeniam sa automaticky nájsť a komunikovať spolu v miestnej sieti."
			},{
				type: "paragraph",
				content: "Zoznam služby UPnP zobrazuje informácie o zariadeniach UPnP."
			},{
				type: "name",
				title: "Popis služby",
				content: "Zobrazuje krátky popis hostiteľa v miestnej sieti, ktorý iniciuje požiadavku UPnP."
			},{
				type: "name",
				title: "Externý port",
				content: "Zobrazí sa externý port, ktorý otvára hostiteľ v miestnej sieti."
			},{
				type: "name",
				title: "Protokol",
				content: "Zobrazí sa typ sieťového protokolu, ktorý používa hostiteľ v miestnej sieti."
			},{
				type: "name",
				title: "Interná IP adresa",
				content: "Zobrazí sa IP adresa hostiteľa v miestnej sieti."
			},{
				type: "name",
				title: "Interný port",
				content: "Zobrazí sa interný port, ktorý otvára hostiteľ v miestnej sieti."
			},{
				type: "paragraph",
				content: "Kliknutím na príkaz Obnoviť sa aktualizuje Zoznam servera UPnP."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Nastavenie zariadenia",
			CONTENT: [{
				type: "paragraph",
				content: "Na obrazovke Nastavenie zariadenia sa zobrazia príslušné informácie ľubovoľného, cez USB port pripojeného úložného zariadenia USB."
			},{
				type: "name",
				title: "Skenovať",
				content: "Smerovač zvyčajne automaticky detekuje akékoľvek nové pripojené zariadenie. Ak nie, kliknutím na toto tlačidlo môžete naskenovať ľubovoľné nové pripojené zariadenie a obnoviť obrazovku aktualizovanými informáciami."
			},{
				type: "name",
				title: "Disk",
				content: "Zobrazí sa názov disku USB."
			},{
				type: "name",
				title: "Kapacita",
				content: "Zobrazí sa celková úložná kapacita disku USB."
			},{
				type: "name",
				title: "Voľné miesto",
				content: "Zobrazí sa aktuálne voľné dostupné úložné miesto."
			},{
				type: "name",
				title: "Bezpečne odobrať",
				content: "Kliknutím na toto tlačidlo bezpečne odoberiete úložné zariadenie USB predtým, než ho fyzicky odpojíte od smerovača."
			},{
				type: "paragraph",
				content: "Všimnite si, že tlačidlo Bezpečne odobrať sa objaví iba vtedy, keď je k smerovaču pripojené úložné zariadenie USB a zariadenie USB sa nebude dať odobrať, ak sa práve používa."
			},{
				type: "name",
				title: "Aktívne",
				content: "Toto začiarkavacie políčko sa objaví iba vtedy, keď je k smerovaču pripojené úložné zariadenie USB. Vyberte túto možnosť, ak chcete zapnúť zdieľanie súborov USB zariadenia."
			},{
				type: "step",
				title: "Nainštalovanie súborového servera",
				content: [
				"1. Pripojte úložné zariadenie USB k portu USB smerovača pomocou kábla USB",
				"2. Nové pripojené zariadenie USB by malo byť detekované smerovačom automaticky a informácie by sa mali zobraziť v sekcii Nastavenie zariadenia. Ak to tak nie je, kliknite na príkaz Skenovať.",
				"3. Vyberte Aktívne a umožníte zdieľanie súborov."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Konto zdieľania",
			CONTENT: [{
				type: "name",
				title: "Účet",
				content: "Alebo môžete na prihlásenie k zdieľaným súborom a priečinkom vybrať možnosť Použiť predvolené konto, alebo možnosť Použiť nové konto a zadať nasledujúce údaje na vytvorenie nového používateľského konta."
			},{
				type: "name",
				title: "Meno/heslo",
				content: "Zadajte reťazec s dĺžkou 15 alfa numerických i špeciálnych znakov. Meno musí začínať alfanumerickým znakom. Tieto polia sú citlivé na veľké a malé písmená."
			},{
				type: "name",
				title: "Potvrdiť heslo",
				content: "Opätovne zadajte heslo, aby sa predišlo preklepu. Aj toto pole je citlivé na veľké a malé písmená."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Nastavenia zdieľania",
			CONTENT: [{
				type: "name",
				title: "Sieť/Názov mediálneho servera",
				content: "Zobrazí sa názov, ktorý sa používa na prístup k pripojenému úložnému zariadeniu USB."
			},{
				type: "name",
				title: "Zapnúť",
				content: "Výberom tejto možnosti zapnete prístupovú metódu."
			},{
				type: "name",
				title: "Prístupová metóda",
				content: "Na povolenie prístupu k pripojenému úložnému zariadeniu USB existujú tri prístupové metódy. Môžete si vybrať jednu alebo viaceré prístupové metódy výberom príslušného začiarkavacieho políčka.",
				children: [{
					type: "name",
					title: "Susedstvo siete",
					content: "Ak je zapnutá táto možnosť, používatelia na vašej sieti môžu pristupovať k úložnému zariadeniu USB pomocou pridelenej IP adresy (napr. \\\\192.168.0.1). "
				},{
					type: "name",
					title: "FTP",
					content: "Ak je zapnutá táto možnosť, klienti FTP na vašej miestnej sieti môžu pristupovať k vášmu úložnému zariadeniu USB pomocou priradenej IP adresy s číslom portu servera FTP za ňou (napr. ftp://192.168.0.1:21)."
				},{
					type: "name",
					title: "FTP (cez internet)",
					content: "Ak je zapnutá táto možnosť, používatelia môžu vzdialene pristupovať úložnému zariadeniu USB cez FTP pomocou internetu. Táto funkcia podporuje aj preberanie aj odovzdávanie súborov. Ak chcete zmeniť číslo portu servera FTP, zadajte číslo portu  a kliknite na príkaz Uložiť čím sa zmeny aplikujú."
				}]
			},{
				type: "name",
				title: "Prepojenie",
				content: "Zobrazí sa adresa, ktorá sa používa na prístup k zdieľanému úložnému zariadeniu USB."
			},{
				type: "name",
				title: "Port",
				content: "Zobrazuje číslo portu FTP servera. Použite predvolenú hodnotu 21 alebo hodnotu medzi 1024 a 65535."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Zdieľanie priečinkov",
			CONTENT: [{
				type: "name",
				title: "Zdieľať všetko",
				content: "Zapnite túto možnosť, ak chcete zdieľať všetky súbory a priečinky alebo ju vypnite, ak chcete zdieľať iba vybrané priečinky."
			},{
				type: "name",
				title: "Zapnúť overenie",
				content: "Dôrazne sa odporúča zapnúť overovanie a žiadať používateľov o uvedenie platného mena a hesla pre prístup k zdieľaným priečinkom."
			},{
				type: "name",
				title: "Názov priečinka",
				content: "Zobrazí sa názov zdieľaného priečinka."
			},{
				type: "name",
				title: "Cesta k priečinku",
				content: "Zobrazí sa cesta ku zdieľanému priečinku."
			},{
				type: "name",
				title: "Zdieľanie médií",
				content: "Označuje, či je v zdieľanom priečinku povolené zdieľať médiá alebo nie."
			},{
				type: "name",
				title: "Názov disku",
				content: "Zobrazí sa názov zdieľaného disku."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazí sa stav zdieľaného priečinka (žiarovka)."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti Modifikovať alebo Odstrániť príslušný zdieľaný priečinok."
			},{
				type: "name",
				title: "Prehľadávať",
				content: "Kliknutím môžete vyhľadať zdieľaný priečinok."
			},{
				type: "name",
				title: "Povoliť hosťovský prístup k sieti",
				content: "Vyberte túto možnosť, ak chcete klientom z hosťovskej siete povoliť prístup k zdieľaným priečinkom."
			},{
				type: "name",
				title: "Zapnúť overenie",
				content: "Vyberte túto možnosť, ak budete od používateľov pri prístupe k zdieľaným priečinkom platné meno a heslo."
			},{
				type: "name",
				title: "Zapnúť prístup so zápisom",
				content: "Vyberte a umožnite používateľom robiť zmeny v obsahu priečinka."
			},{
				type: "name",
				title: "Zapnúť zdieľanie médií",
				content: "Vyberte a zapnite zdieľanie médií."
			},{
				type: "name",
				title:"Obnoviť",
				content: "Kliknite a aktualizujte zoznam zdieľaného priečinka."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Tlačový server",
			CONTENT: [{
				type: "name",
				title:"Tlačový server",
				content: "Prepnite na možnosť On (zapnuté), čím zapnete funkciu tlačového servera."
			},{
				type: "name",
				title:"Názov tlačiarne",
				content: "Zobrazí sa názov vašej tlačiarne pripojenej ku smerovaču."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Rodičovská kontrola",
			CONTENT: [{
				type: "paragraph",
				content: "S rodičovskou kontrolou môžete blokovať nevhodné, výslovne uvedené a škodlivé webové lokality, zakázať prístup v určité hodiny dňa (napríklad facebook, alebo youtube počas času na domáce úlohy); a zároveň ochrániť každé zariadenie na domácej sieti proti malvéru a phishingu z jedného centrálneho bodu ovládania."
			},{
				type: "name",
				title: "Rodičovská kontrola",
				content: "Prepnite na možnosť On (zapnuté), čím zapnete funkciu rodičovská kontrola."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Zariadenia podliehajúce rodičovskej kontrole",
			CONTENT: [{
				type: "name",
				title: "Názov zariadenia",
				content: "Zobrazia sa názvy všetkých pripojených klientskych zariadení, ktoré podliehajú rodičovskej kontrole."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazia sa MAC adresy všetkých pripojených klientskych zariadení, ktoré podliehajú rodičovskej kontrole."
			},{
				type: "name",
				title: "Čas prístupu k internetu",
				content: "Zobrazuje obmedzenia prístupu v časových intervalech.Časový harmonogram sa prejaví na základe systémového času routera, ktorý môže byť nastavený v \"Systémové nástroje -> Nastavenie času\"."
			},{
				type: "name",
				title: "Popis",
				content: "Zobrazí sa stručný popis pripojeného zariadenia."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazí sa aktuálny stav rodičovskej kontroly príslušného zariadenia (zapnuté alebo vypnuté)."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti na Modifikáciu alebo Odstránenie príslušného zariadenia."
			},{
				type: "step",
				title: "Obmedzenie nového klientskeho zariadenia",
				content: [
					"1. Kliknite na tlačidlo pridať.",
					"2. Kliknite na možnosť Zobraziť existujúce zariadenia a zvoľte práve pripojené zariadenie zo Zoznamu zariadení s prístupom, alebo zadajte Názov zariadenia a MAC adresu ručne a pridáte zariadenie, ktoré nie je pripojené.",
					"3. Kliknite na ikonu Čas prístupu k internetu a určite časový úsek, počas ktorého obmedzenie platí.",
					"4. Zadajte krátky popis do Popis poľa. (Voliteľne)",
					"5. Vyberte možnosť Zapnúť.",
					"6. Kliknite na tlačidlo OK."
				]
			},{
				type: "paragraph",
				content: "Ak chcete upraviť alebo vymazať položku rodičovskej kontroly, kliknutím na ikonu Upraviť upravíte informácie a kliknutím na ikonu Odstrániť odstránite príslušnú položku."
			},{
				type: "paragraph",
				content: "Ak chcete odstrániť viaceré položky, vyberte všetky položky a kliknite na príkaz Odstrániť nad tabuľkou."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Obmedzenie obsahu",
			CONTENT: [{
				type: "name",
				title: "Čierna listina",
				content: "Obsahuje kľúčové slová, ktoré sa budú používať na blokovanie prístupu na ľubovoľnú webovú lokalitu z klientskych zariadení uvedených v zozname rodičovskej kontroly.",
				children: [{
					type: "paragraph",
					content: "Kliknite na príkaz Add a New Keyword (Pridať nové kľúčové slovo), ak chcete pridať kľúčové slovo na čiernu listinu. Ak chcete odstrániť kľúčové slovo, kliknite na ikonu (-) kľúčového slova, ktoré chcete odstrániť."
				}]
			},{
				type: "name",
				title: "Biela listina",
				content: "Obsahuje webové adresy, ku ktorým môžu pristupovať klientske zariadenia uvedené v zozname rodičovskej kontroly.",
				children: [{
					type: "paragraph",
					content: "Kliknite na príkaz Pridať nový názov domény a pridáte na bielu listinu webovú lokalitu. Ak chcete odstrániť webovú lokalitu, kliknite na ikonu (-) webovej lokality, ktorú chcete odstrániť."
				}]
			},{
				type: "paragraph",
				content: "Medzi kľúčové slová môžu patriť aj domény, napríklad, www.mail.google.com alebo www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "Funkcia Quality of Service (QoS) pomáha pri stanovovaní priorít internetového prenosu na základe vašich potrieb. Môžete určiť úroveň priority pre zariadenie alebo aplikáciu, ktoré sa nachádzajú na zozname pravidiel Qos."
			},{
				type: "name",
				title: "Zapnúť QoS",
				content: "Kliknutím na toto políčko zapnete funkciu QoS."
			},{
				type: "name",
				title: "Šírka pásma pre odovzdávanie",
				content: "Zadajte maximálnu šírku pásma pri odovzdávaní, ktorú poskytuje váš ISP (Internet Service Provider (Poskytovateľ internetu))."
			},{
				type: "name",
				title: "Šírka pásma pre preberanie",
				content: "Zadajte maximálnu šírku pásma pri preberaní, ktorú poskytuje váš ISP."
			},{
				type: "name",
				title: "Vysoká priorita",
				content: "Určite percento prenosu s vysokou prioritou."
			},{
				type: "name",
				title: "Stredná priorita",
				content: "Určite percento prenosu so strednou prioritou."
			},{
				type: "name",
				title: "Nízka priorita",
				content: "Určite percento prenosu s nízkou prioritou."
			},{
				type: "note",
				title: "Poznámka",
				content: "Maximálne množstvo (percento) všetkých priorít je 1."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		QOS_RULE: {
			TITLE: "Zoznam pravidiel QoS",
			CONTENT: [{
				type: "name",
				title: "Typ",
				content: "Vyberte typ, ktorý chcete pridať do zoznamu pravidiel QoS."
			},{
				type: "step",
				title: "Nastavenie pravidla pre vysokú/strednú/nízku prioritu podľa zariadenia",
				content: [
					"1. Kliknite na tlačidlo pridať.",
					"2. Vyberte Podľa zariadenia.",
					"3. Kliknite na Zobraziť existujúce zariadenia a vyberte požadované zariadenie zo zoznamu Zoznam prístupných zariadení, alebo môžete zadať názov zariadenia a jeho MAC adresu ručne do polí Názov zariadenia a MAC adresa.",
					"4. Kliknite na tlačidlo OK."
				]
			},{
				type: "step",
				title: "Nastavenie pravidla pre vysokú/strednú/nízku prioritu podľa aplikácie",
				content: [
					"1. Kliknite na tlačidlo pridať.",
					"2. Vyberte Podľa aplikácie.",
					"Vyberte požadovanú aplikáciu zo zoznamu aplikácií, alebo môžete prispôsobiť aplikáciu konfigurácií názvu, protokolu a cieľového portu (1-65535) do príslušných polí, môžete zadať jeden port, viac porty alebo rozsah, pre oddelenie Použitie čiarky (napr 21,36-105,111 ).",
					"4. Kliknite na tlačidlo OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Modernizácia databázy",
			CONTENT: [{
				type: "name",
				title: "Nový súbor databázy",
				content: "Kliknite na možnosť Prehľadávať a nájdite svoj nový súbor databázy. Vyberte a kliknite na príkaz Modernizovať a modernizujte svoju databázu na novšiu verziu."
			},{
				type: "name",
				title: "Verzia databázy",
				content: "Zobrazí sa aktuálna verzia databázy."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Firewall",
			CONTENT: [{
				type: "name",
				title: "Firewall SPI",
				content: "Firewall Stateful Packet Inspection (SPI) chráni pred kybernetickými útokmi a overuje prenosy, ktoré prechádzajú cez smerovač založený na protokole."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "Ochrana DoS",
			CONTENT: [{
				type: "name",
				title: "Ochrana DoS",
				content: "Ochrana Denial of Service (DoS) chráni vašu LAN sieť pred DoS útokmi, ktoré zaplavia vašu sieť požiadavkami servera."
			},{
				type: "name",
				title: "Filtrovanie útokov ICMP-FLOOD",
				content: "Zapnite túto možnosť a ochránite sa pred zaplavujúcimi útokmi protokolu Internet Control Message Protocol (ICMP).",
				children: [{
					type: "name",
					title: "Vyp",
					content: "Bez ochrany."
				},{
					type: "name",
					title: "Nízky",
					content: "Nízka úroveň ochrany a malý dopad na výkon smerovača."
				},{
					type: "name",
					title: "Stredný",
					content: "Stredná úroveň ochrany a stredný dopad na výkon smerovača."
				},{
					type: "name",
					title: "Vysoký",
					content: "Vysoká úroveň ochrany, ale zjavný dopad na výkon smerovača."
				}]
			},{
				type: "name",
				title: "Filtrovanie útokov UDP-FLOOD",
				content: "Zapnite túto možnosť a ochránite sa pred zaplavujúcimi útokmi protokolu User Datagram Protocol) (UDP)."
			},{
				type: "name",
				title: "Filtrovanie útokov TCP-SYN-FLOOD",
				content: "Zapnite túto možnosť a ochránite sa pre zaplavujúcimi útokmi protokolu Transmission Control Protocol-Synchronize (TCP-SYN)."
			},{
				type: "name",
				title: "Ignorovať paket Ping z portu WAN",
				content: "Zapnutím ignorujete pakety ping z portu WAN"
			},{
				type: "name",
				title: "Zakázať paket Ping z portu LAN",
				content: "Zapnutím zakážete pakety ping z portu LAN"
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Zoznam blokovaných hostiteľov DoS",
			CONTENT: [{
				type: "name",
				title: "Zoznam blokovaných hostiteľov DoS",
				content: "Zobrazí sa IP adresa a MAC adresa ľubovoľného blokovaného zdroja útokov DoS."
			},{
				type: "step",
				title: "Odstránenie položky",
				content: "V Zozname hostiteľov vyberte položku, ktorú chcete odstrániť a kliknite na príkaz Odstrániť nad tabuľkou."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Kontrola prístupu",
			CONTENT: [{
				type: "paragraph",
				content: "Riadenie prístupu sa používa pre povolenie alebo blokovanie konkrétnych počítačov a ďalších zariadení v prístupe k sieti. Keď je zariadenie blokované, potom nemôže komunikovať s iným zariadením v sieti ani nemožno pristúpiť k Internetu."
			},{
				type: "paragraph",
				content: "Aby ste mohli používať kontrolu prístupu, zapnite túto funkciu a určite čiernu alebo bielu listinu. Ak je kontrola prístupu vypnutá (Vyp.), všetky zariadenia, vrátane tých na čiernej listine sa môžu pripájať."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Režim prístupu",
			CONTENT: [{
				type: "name",
				title: "Čierna listina",
				content: "Iba zariadeniam na čiernej listine bude odmietnutý prístup k vašej sieti."
			},{
				type: "name",
				title: "Biela listina",
				content: "Iba zariadeniam na bielej listine bude povolený prístup k vašej sieti."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Zariadenia online",
			CONTENT: [{
				type: "name",
				title: "Názov zariadenia",
				content: "Zobrazí sa názov pripojeného zariadenia."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazí sa IP adresa pripojeného zariadenia."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazí sa MAC adresa pripojeného zariadenia."
			},{
				type: "name",
				title: "Typ pripojenia",
				content: "Zobrazí sa typ pripojenia pripojeného zariadenia."
			},{
				type: "step",
				title: "Blokovanie zariadení",
				content: "V tabuľke Zariadenia online kliknite na ikonu Blokovať v stĺpci Modifikovať, ktorá je príslušná zariadeniu, ktoré chcete blokovať."
			},{
				type: "step",
				title: "Blokovanie viacerých zariadení",
				content: "V tabuľke Zariadenia online vyberte všetky zariadenia, ktoré chcete blokovať, kliknutím na príkaz Blokovať nad tabuľkou. Zariadenie sa automaticky pridá k zariadeniam na čiernej alebo bielej listine."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Zariadenia zaradené na čiernej/bielej listine",
			CONTENT: [{
				type: "step",
				title: "Zaradenie zariadenia na čiernu alebo bielu listinu",
				content: [
					"1. Kliknite na tlačidlo pridať.",
					"2. Zadajte Názov zariadenia.",
					"3. Zadajte MAC adresu zariadenia.",
					"4. Kliknite na tlačidlo OK."
				]
			},{
				type: "step",
				title: "Ak chcete modifikovať alebo odstrániť zariadenie zaradené na čiernej/bielej listine",
				content: "V tabuľke Čierna/biela listina kliknite na ikonu Upraviť alebo Odstrániť, ktorá je príslušná zariadeniu, ktoré chcete modifikovať alebo vymazať."
			},{
				type: "step",
				title: "Ak chcete odstrániť viaceré zariadenia zaradené na čiernej/bielej listine",
				content: "V tabuľke Čierna/biela listina vyberte všetky zariadenia, ktoré chcete odstrániť, kliknutím na príkaz Odstrániť nad zoznamom."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Nastavenie",
			CONTENT: [{
				type: "paragraph",
				content: "Zviazanie ARP (Address Resolution Protocol-Protokol rozlišovania adries) je užitočné na kontrolu prístupu určitého počítača v sieti LAN zviazaním adresy IP a MAC zariadenia dohromady. Zviazanie ARP tiež bráni iným zariadeniam v používaní určitej IP adresy."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "Zoznam ARP",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazia sa adresy IP a MAC aktuálne pripojených zariadení."
			},{
				type: "name",
				title: "Číslo položky ARP",
				content: "Zobrazí sa celkový počet zariadení, ktoré sú práve pripojené k smerovaču."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazí sa MAC adresa pripojeného zariadenia."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazí sa IP adresa pridelená pripojenému zariadeniu."
			},{
				type: "name",
				title: "Zviazať",
				content: "Indikuje, či sú adresy IP a MAC zviazané alebo nie."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti na Zviazanie alebo Odstránenie príslušnej položky zo zoznamu."
			},{
				type: "note",
				title: "Poznámka",
				content: "Tú istú IP adresu nie je možné zviazať s viac než jednou MAC adresou."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Zoznam zviazaní",
			CONTENT: [{
				type: "step",
				title: "Nainštalovanie zariadenia so zviazaním ARP",
				content: [
					"1. Kliknite na tlačidlo pridať.",
					"2. Zadajte MAC adresu zariadenia.",
					"3. Zadajte IP adresu, ktorú chcete zviazať s vyššie uvedenou MAC adresou.",
					"4. Zadajte Popis tohto zariadenia. (Voliteľne)",
					"5. Vyberte možnosť Zapnúť.",
					"6. Kliknite na tlačidlo OK."
				]
			},{
				type: "step",
				title: "Ak chcete modifikovať alebo odstrániť položku",
				content: "V zozname Zoznam zviazaní, kliknite na ikonu Modifikovať, alebo na ikonu Odstrániť, ktorá je príslušná položke, ktorú chcete modifikovať alebo odstrániť."
			},{
				type: "step",
				title: "Odstránenie viacerých položiek",
				content: "V zozname Zoznam zviazaní vyberte všetky položky, ktoré chcete odstrániť, kliknite na položku Odstrániť nad zoznamom."
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Protokol IPv6",
				content: "Vybraním zapnete (Zap.) alebo vypnete (Vyp.) funkciu IPv6 smerovača."
			},{
				type: "title",
				title: "Typ pripojenia do internetu: Statická IP",
			},{
				type: "name",
				title: "Statická IP",
				content: "Vyberte tento typ, ak váš ISP používa priraďovanie adries protokolu IPv6."
			},{
				type: "name",
				title: "Adresa IPv6/Predvolená brána/Primárny DNS/Sekundárny DNS",
				content: "Zadajte tieto parametre podľa svojho ISP."
			},{
				type: "name",
				title: "Veľkosť MTU",
				content: "Predvolená a typická veľkosť MTU (Maximálna prenosová jednotka) pre väčšinu sietí ethernet je 1500 Bytes (1500 bajtov). Zmena predvolenej veľkosti MTU sa neodporúča, ak to nevyžaduje poskytovateľ internetu (ISP)."
			},{
				type: "title",
				title: "Typ pripojenia do internetu: Dynamická IP adresa",
			},{
				type: "name",
				title: "Dynamická IP",
				content: "Vyberte tento typ, ak váš ISP používa dynamické priraďovanie adries protokolu IPv6."
			},{
				type: "name",
				title: "Adresa IPv6/Primárny DNS/Sekundárny DNS",
				content: "Tieto parametre vám automaticky priradí server DHCPv6 od vášho poskytovateľa internetu (ISP)."
			},{
				type: "name",
				title: "Obnoviť",
				content: "Kliknite na toto tlačidlo, ak chcete získať nové parametre IPv6 adresy zo servera DHCPv6 vášho ISP."
			},{
				type: "name",
				title: "Uvoľniť",
				content: "Kliknite na toto tlačidlo, ak chcete uvoľniť všetky IPv6 adresy, ktoré priradil server DHCPv6 vášho ISP."
			},{
				type: "name",
				title: "Získať adresu IPv6",
				content: "Vyberte DHCPv6 získať nedočasnou adresu IPv6 alebo SLAAC IPv6 adresa generovať z routeru pomocou špeciálneho paketu, podľa vášho ISP."
			},{
				type: "name",
				title: "Delegácia predpony",
				content: "Vyberte Povoliť Získať Prefix Delegation od servera DHCPv6 Vášho ISP, alebo Zakázať určenie predpony adresy ručne. Klienti v sieti LAN bude generovať adresu IPv6 s touto predponou."
			},{
				type: "name",
				title: "Adresa DNS",
				content: "Vyberte „Získať dynamicky od ISP“ alebo „Použiť nasledovnú adresu DNS“. Ak vyberiete možnosť „Použiť nasledovnú adresu DNS“, zadajte ručne adresu DNS, ktorú ste dostali od svojho ISP."
			},{
				type: "name",
				title: "Primárny DNS/Sekundárny DNS",
				content: "Zadajte tieto parametre ručne, alebo ich získajte dynamicky od ISP."
			},{
				type: "title",
				title: "Typ internetového pripojenia: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Vyberte tento typ, ak váš ISP používa typ pripojenia PPPoEv6 a poskytol vám meno a heslo."
			},{
				type: "name",
				title: "Meno/heslo",
				content: "Zadajte tieto parametre tak, ako vám ich poskytol váš ISP."
			},{
				type: "name",
				title: "Adresa IPv6",
				content: "Bude vám automaticky priradená serverom DHCPv6 od vášho ISP, keď zadáte meno a heslo a kliknete na príkaz Pripojiť."
			},{
				type: "name",
				title: "Adresa DNS",
				content: "Vyberte „Získať dynamicky od ISP“ alebo „Použiť nasledovnú adresu DNS“. Ak vyberiete možnosť „Použiť nasledovnú adresu DNS“, zadajte ručne adresu DNS, ktorú ste dostali od svojho ISP."
			},{
				type: "name",
				title: "Získať adresu IPv6",
				content: "Vyberte DHCPv6 získať nedočasnou adresu IPv6 alebo SLAAC IPv6 adresa generovať z routeru pomocou špeciálneho paketu alebo zadajte IPv6 ručne, podľa vášho ISP."
			},{
				type: "name",
				title: "Delegácia predpony",
				content: "Vyberte Povoliť Získať Prefix Delegation od servera DHCPv6 Vášho ISP, alebo Zakázať určenie predpony adresy ručne. Klienti v sieti LAN bude generovať adresu IPv6 s touto predponou."
			},{
				type: "name",
				title: "Pripojiť",
				content: "Kliknite na toto tlačidlo, ak chcete získať internetové pripojenie."
			},{
				type: "name",
				title: "Odpojiť",
				content: "Kliknite na toto tlačidlo, ak sa chcete odpojiť od internetu."
			},{
				type: "title",
				title: "Typ internetového pripojenia: Typ 6na4 tunel"
			},{
				type: "name",
				title: "Tunel 6na4",
				content: "Vyberte tento typ, ak váš ISP používa na priradenie adresy nasadenie 6na4."
			},{
				type: "name",
				title: "Adresa IPv4/Maska podsiete IPv4/Predvolená brána IPv4/adresa tunela",
				content: "Tieto parametre sa budú dynamicky generovať z informácií IPv4 alebo portu WAN po kliknutí na príkaz Pripojiť."
			},{
				type: "name",
				title: "Použiť nasledujúci server DNS",
				content: "Označte políčko Ručne zadať primárny DNS a / alebo sekundárne DNS podľa Vášho poskytovateľa pripojenia na Internet."
			},{
				type: "name",
				title: "Pripojiť",
				content: "Kliknite na toto tlačidlo, ak chcete získať internetové pripojenie."
			},{
				type: "name",
				title: "Odpojiť",
				content: "Kliknite na toto tlačidlo, ak sa chcete odpojiť od internetu."
			},{
				type: "title",
				title: "Typ internetového pripojenia: Pass-Through (Bridge) "
			},{
				type: "paragraph",
				content: "Vyberte tento typ, ak váš ISP používa sieťové nasadenie Pass Through (Bridge). Pre tento typ sa neposkytujú žiadne parametre a nie je potrebná žiadna konfigurácia."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "Lokálna sieť",
			CONTENT: [{
				type: "paragraph",
				content: "Okrem Pass-Through (Bridge), pre ostatných 6 typov internetového pripojenia je potrebná konfigurácia IPv6."
			},{
				type: "name",
				title: "Priradený typ",
				content: "Vyberte príslušný režim podľa svojho ISP.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Na automatické priradenie IP adries klientom v sieti LAN.",
					children: [{
						type: "name",
						title: "Predpona adresy",
						content: "Zadajte predponu adresy ako vám ju poskytol váš ISP."
					},{
						type: "name",
						title: "Čas uvoľnenia",
						content: "Znamená čas, keď priradená IP adresa zostáva v platnosti. Nechajte predvolenú možnosť 86400 sekúnd, alebo ju zmeňte, ak vás o to ISP požiada."
					},{
						type: "name",
						title: "Adresa",
						content: "Je to IP adresa priradená automaticky serverom DHCPv6 od poskytovateľa ISP."
					}]
				},{
					type: "name",
					title: "SLAAC+bezstavový DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Predpona adresy",
						content: "Zadajte predponu adresy ako vám ju poskytol váš ISP."
					},{
						type: "name",
						title: "Adresa",
						content: "IP adresa automaticky pridelená od ISP."
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Predpona adresy",
						content: "Zadajte predponu adresy ako vám ju poskytol váš ISP."
					},{
						type: "name",
						title: "Adresa",
						content: "IP adresa automaticky pridelená od ISP."
					}]
				}]
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "Klonovanie MAC adries",
			CONTENT: [{
				type: "name",
				title: "Použiť predvolenú MAC adresu",
				content: "V prípade, že ISP neviaže priradenú IP adresu s MAC adresou, nemeňte predvolenú MAC adresu smerovača."
			},{
				type: "name",
				title: "Použiť MAC adresu aktuálneho počítača",
				content: "Vyberte a týmto skopírujte aktuálnu MAC adresu počítača, ktorý je pripojený k smerovaču, v prípade, že ISP viaže priradenú IP adresu s MAC adresou počítača."
			},{
				type: "name",
				title: "Použiť vlastnú MAC adresu",
				content: "Zadajte MAC adresu ručne, v prípade, že ISP viaže priradenú IP adresu k určitej MAC adrese."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Nastavenie času",
			CONTENT: [{
				type: "step",
				title: "Automatická synchronizácia času",
				content: [
					"1. V poli Nastaviť čas vyberte Získať automaticky z internetu.",
					"2. Vyberte svoju miestnu Časovú zónu z rozbalovacej ponuky.",
					"3. V poli NTP Server I zadajte IP adresu alebo názov domény vášho požadovaného servera NTP.",
					"4. V poli NTP Server II zadajte IP adresu alebo názov domény druhého servera NTP. (Voliteľne)",
					"5. Kliknite na možnosť Získať.",
					"6. Kliknite na tlačidlo Uložiť."
				]
			},{
				type: "step",
				title: "Ručné nastavenie dátumu a času",
				content: [
					"1. V poli Nastaviť čas vyberte Ručne.",
					"2. Zadajte aktuálny Dátum.",
					"3. Zadajte aktuálny Čas (V 24-hodinovom formáte, napr. 16:00:00 je 04:00PM).",
					"4. Kliknite na tlačidlo Uložiť."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Letný čas",
			CONTENT: [{
				type: "step",
				title: "Nastavenie letného času",
				content: [
					"1. Vyberte Zapnúť letný čas.",
					"2. Vyberte správny dátum Začiatku a čas, keď sa letný čas začína vo vašom časovom pásme.",
					"3. Vyberte správny dátum Ukončenia a čas, keď sa letný čas končí vo vašom časovom pásme.",
					"4. Kliknite na tlačidlo Uložiť."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Diagnostika",
			CONTENT: [{
				type: "paragraph",
				content: "Smerovač poskytuje nástroje Ping a Traceroute a pomáha tak riešiť problémy so sieťovým pripojením. Nástroj Ping odosiela pakety na cieľovú IP adresu alebo Názov domény a zapisuje výsledky, ako napríklad počet odoslaných/prijatých paketov a čas návratu potvrdenia. Nástroj Traceroute odosiela pakety na cieľovú IP adresu alebo Názov domény a zobrazuje počet uzlov a čas na dosiahnutie cieľa."
			},{
				type: "paragraph",
				content: "Nástroj ping a traceroute môžete použiť na lokálne zariadenie pomocou IP adresy alebo názvu domény, ako napríklad google.com, yahoo.com, atď."
			},{
				type: "step",
				title: "Diagnostika pomocou nástroja Ping",
				content: [
					"1. Zadajte cieľovú IP adresu alebo Názov domény.",
					"2. Kliknite na Ikonu so šípkou a otvoríte ponuku Pokročilé a určíte Počet výziev ping a Veľkosť paketu výzvy ping. (Voliteľne)",
					"3. Kliknite na Štart."
				]
			},{
				type: "step",
				title: "Diagnostika pomocou nástroja Traceroute",
				content: [
					"1. Zadajte cieľovú IP adresu alebo Názov domény.",
					"2. Kliknite na Ikonu so šípkou a otvoríte ponuku Pokročilé a určíte počet skokov (ktorý sa má dosiahnuť) v poli Maximálny čas prežitia (Čas prežitia). Predvolená hodnota je 20. (Voliteľne)",
					"3. Kliknite na Štart."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Modernizácia firmvéru",
			CONTENT: [{
				type: "paragraph",
				content: "Pred modernizáciou firmvéru smerovača bude potrebné prevziať najnovšiu aktualizáciu firmvéru zo stránok <a class=\"link\" target=\"blank\" href=\"http://www.tp-link.sk/Support/\">TP-Link Support</a> do vášho počítača."
			},{
				type: "step",
				title: "DÔLEŽITÉ: Aby ste predišli zlyhaniu modernizácie, berte ohľad na nasledovné:",
				content: [
					"Uistite sa, že súbor s najnovším firmvérom zodpovedá verzii hardvéru (uvedenej na stránke Modernizácia firmvéru).",
					"Uistite sa, že máte stabilné pripojenie medzi smerovačom a počítačom. NE odporúča sa modernizovať firmvér cez bezdrôtové pripojenie.",
					"Aby ste predišli strate údajov, uistite sa, že ste pred modernizáciou hardvéru odpojili všetky úložné zariadenia USB, ktoré boli pripojené k smerovaču.",
					"Zálohujte konfiguráciu smerovača.",
					"Počas modernizácie firmvéru smerovač nevypínajte."
				]
			},{
				type: "step",
				title: "Ak chcete aktualizovať firmvér smerovača",
				content: [
					"1. Kliknite na príkaz Prehľadávať.",
					"2. Nájdite a vyberte prevzatý súbor s firmvérom.",
					"3. Kliknite na Aktualizovať."
				]
			},{
				type: "paragraph",
				content: "Bude trvať niekoľko minút, kým sa proces modernizácie dokončí. NEODPÁJAJTE smerovač počas procesu modernizácie."
			}]
		},
		
		BACKUP: {	
			TITLE: "Zálohovanie",
			CONTENT: [{
				type: "paragraph",
				content: "Dôrazne sa odporúča zálohovať vaše aktuálne konfigurácie pre prípad, že bude potrebná záchrana na obnovenie systému do predchádzajúceho stavu, alebo z predvolených továrenských nastavení."
			},{
				type: "paragraph",
				content: "Kliknite na príkaz Zálohovať a uložíte vaše aktuálne konfigurácie do počítača. Uistite sa, že ukladáte súbor zálohy na bezpečné miesto, aby ste mohli v prípade potreby smerovač neskôr zo súboru obnoviť."
			}]
		},
		
		RESTORE: {
			TITLE: "Obnovenie",
			CONTENT: [{
				type: "step",
				title: "Obnovenie zo zálohy",
				content: [
					"1. Kliknite na príkaz Prehľadávať.",
					"2. Nájdite a vyberte záložný súbor.",
					"3. Kliknite na príkaz Obnoviť."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Obnovenie na predvolené továrenské nastavenia",
			CONTENT: [{
				type: "paragraph",
				content: "Kliknite na príkaz Obnoviť továrenské a obnovte svoj smerovač na predvolené továrenské nastavenia."
			},{
				type: "note",
				title: "Poznámka",
				content: [
					"1. Obnova do továrenského nastavenia vymaže všetky nastavenia, ktoré ste v routeru nakonfigurovali. Pre prihlásenie na stránku správy routeru, použite východiskové užívateľské meno a heslo: admin.",
					"2. Prosím nevypínajte router počas procesu zálohovania alebo obnovenia."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Správa konta",
			CONTENT: [{
				type: "paragraph",
				content: "Na tejto stránke môžete zmeniť svoje prihlasovacie meno a/alebo heslo a nastaviť e-mailovú adresu pre obnovenie hesla."
			},{
				type: "name",
				title: "Staré Meno",
				content: "Zadajte svoje súčasné meno."
			},{
				type: "name",
				title: "Staré Heslo",
				content: "Zadajte svoje súčasné heslo."
			},{
				type: "name",
				title: "Nové meno",
				content: "Zadajte svoje nové meno."
			},{
				type: "name",
				title: "Nové heslo",
				content: "Zadajte svoje nové heslo."
			},{
				type: "name",
				title: "Potvrdiť nové heslo",
				content: "Opätovne zadajte svoje nové heslo."
			},{
				type: "note",
				title: "Poznámka",
				content: "Ak sa rozhodnete zmeniť súčasné meno a heslo, ktorým ste sa prihlasovali do smerovača, určite si zapíšte nové prihlasovacie údaje na bezpečné miesto."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Obnovenie hesla",
			CONTENT: [{
				type: "name",
				title: "Zapnúť obnovenie hesla",
				content: "Je odporúčané povoliť funkciu Obnovy heslá, ktoré Vám pomôže obnoviť svoje používateľské meno a heslo pomocou emailu."
			},{
				type: "name",
				title: "Od",
				content: "Zadajte platnú e-mailovú adresu, ktorá sa má používať pre odchádzajúcu poštu."
			},{
				type: "name",
				title: "Do",
				content: "Zadajte platnú e-mailovú adresu, ktorá sa má použiť pre prichádzajúcu poštu."
			},{
				type: "name",
				title: "Server SMTP",
				content: "Zadajte adresu SMTP servera, ktorý router použije na odoslanie verifikačného kódu prostredníctvom e-mailu."
			},{
				type: "name",
				title: "Zapnúť overenie",
				content: "Vyberte možnosť Zapnúť overenie, ak server odchádzajúcej pošty vyžaduje pre odosielanie e-mailov overenie a do príslušných polí vyplňte Meno a Heslo. Tieto polia sú citlivé na veľké a malé písmená."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Miestna správa",
			CONTENT: [{
				type: "paragraph",
				content: "V tejto sekcii sa obmedzuje počet klientskych zariadení vo vašej sieti LAN, pred prístupom na smerovač pomocou overenia MAC adresy."
			},{
				type: "name",
				title: "Prístup pre všetky zariadenia pripojené pomocou LAN",
				content: "Prepnite na možnosť On (Zap.), ak chcete zapnúť lokálnu správu pre všetky zariadenia pripojené pomocou LAN alebo na možnosť Off (Vyp.), ak chcete povoliť správu pre konkrétne zariadenie."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazí sa MAC adresa zariadenia s povoleným prístupom."
			},{
				type: "name",
				title: "Popis",
				content: "Zobrazí sa popis zariadenia s povoleným prístupom."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazí sa aktuálny stav zariadenia s povoleným prístupom (zapnuté alebo vypnuté)."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti na Modifikáciu a Odstránenie príslušného zariadenia zo zoznamu."
			},{
				type: "step",
				title: "Pridanie klientskeho zariadenia do zoznamu",
				content: [
					"1. Kliknite na tlačidlo pridať.",
					"2. Kliknite na Zobraziť existujúce zariadenia a vyberte existujúce zariadenie alebo zadajte MAC adresu zariadenia do poľa MAC adresa.",
					"3. Zadajte Popis zariadenia.",
					"4. Vyberte možnosť Zapnúť.",
					"5. Kliknite na tlačidlo OK."
				]
			},{
				type: "step",
				title: "Modifikovanie alebo odstránenie zariadenia zo zoznamu",
				content: "V tabuľke kliknite na ikonu Upraviť, alebo na ikonu Odstrániť, ktorá je príslušná zariadeniu, ktoré chcete upraviť alebo odstrániť."
			},{
				type: "step",
				title: "Odstránenie viacerých zariadení",
				content: "Vyberte všetky zariadenia, ktoré chcete odstrániť, kliknite na príkaz Odstrániť."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Vzdialená správa",
			CONTENT: [{
				type: "paragraph",
				content: "Funkcia Vzdialenej správy vám umožňuje pristupovať k smerovaču a konfigurovať ho vzdialene z internetu."
			},{
				type: "name",
				title: "Vypnúť vzdialenú správu",
				content: "Vyberte túto možnosť, ak chcete vypnúť vzdialenú správu."
			},{
				type: "name",
				title: "Zapnúť vzdialenú správu zo všetkých zariadení",
				content: "Vyberte túto možnosť a zapnite tak vzdialenú správu všetkých IP adries. Ak je zvolená táto možnosť, zadajte hodnotu do poľa Port webovej správy."
			},{
				type: "name",
				title: "Zapnúť vzdialenú správu z určitých zariadení",
				content: "Vyberte túto možnosť a zapnite tak vzdialenú správu z určitej IP adresy. Ak je zvolená táto možnosť, zadajte hodnoty do polí Port webovej správy a IP adresa vzdialenej správy."
			},{
				type: "name",
				title: "Port webovej správy",
				content: "Zadajte číslo portu, medzi 1024 a 65535, ktoré sa používa na prístup k rozhraniu webovej správy smerovača so zvýšeným zabezpečením. Webové prehľadávače zvyčajne používajú štandardnú službu HTTP port 80. Predvolený a bežný port služby je 8080, čo je alternatívny služobný port protokolu HTTP."
			},{
				type: "name",
				title: "IP adresa vzdialeného manažmentu",
				content: "Zadajte platnú IP adresu alebo rozsah IP adries, ktoré môžu pristupovať k smerovaču. "
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Systémový záznam",
			CONTENT: [{
				type: "paragraph",
				content: "Stránka Systémového záznamu zobrazuje zoznam najnovších činností (udalostí) smerovača. Môžete definovať typy záznamov alebo úroveň záznamov, ktoré si chcete prezrieť. Táto stránka má aj funkciu e-mailu, ktorú môžete nakonfigurovať na automatické odosielanie súborov záznamov na určitú e-mailovú adresu, alebo exportovať súbory záznamu na počítač."
			},{
				type: "name",
				title: "Typ",
				content: "Vyberte typ systémového záznamu, ktorý sa má zobraziť."
			},{
				type: "name",
				title: "Úroveň",
				content: "Vyberte úroveň systémového záznamu, ktorý sa má zobraziť."
			},{
				type: "name",
				title: "Obnoviť",
				content: "Kliknite na túto ikonu, ak chcete aktualizovať systémový záznam."
			},{
				type: "name",
				title: "Odstrániť všetky",
				content: "Kliknutím na túto ikonu odstránite všetky systémové záznamy."
			},{
				type: "name",
				title: "Uložiť záznam",
				content: "Kliknutím na toto tlačidlo prevezmete všetky súbory systémových záznamov do svojho lokálneho počítača."
			},{
				type: "name",
				title: "Nastavenia pošty",
				content: "Kliknite na toto tlačidlo, čím nakonfigurujete e-mailové nastavenia systémových záznamov."
			},{
				type: "step",
				title: "Konfigurácia e-mailových nastavení pre systémové záznamy",
				content: [
					"1. Kliknite na Nastavenia pošty.",
					"2. Od - Zadajte platnú e-mailovú adresu, ktorá sa má používať pre odchádzajúcu poštu.",
					"3. Komu - Zadajte platnú e-mailovú adresu, ktorá sa má použiť pre prichádzajúcu poštu.",
					"4. Server SMTP - Zadajte adresu servera SMTP, ktorú smerovač používa na odosielanie systémových záznamov cez e-mail.",
					{
						content: "5. Zapnúť overovanie - Vyberte túto možnosť, ak server SMTP vyžaduje overovanie pri odosielaní e-mailov.",
						children: [{
							type: "name",
							title: "Používateľské meno",
							content: "Zadajte meno používateľa pre server SMTP. Toto pole je citlivé na veľké a malé písmená."
						},{
							type: "name",
							title: "Heslo",
							content: "Zadajte heslo pre server SMTP. Aj toto pole je citlivé na veľké a malé písmená."
						}]
					},{
						content: "6. Zapnúť automatickú poštu - Vyberte túto možnosť a určite, v ktorú hodinu dňa by sa mal automaticky odosielať systémový záznam.",
						children: [{
							type: "paragraph",
							content: "Ak chcete odosielať systémový záznam každý deň v určitý čas, zadajte Hodiny(HH) a Minúty(MM) v 24-hodinovom časovom formáte, napr. 16:00 je 4PM."
						},{
							type: "paragraph",
							content: "Ak chcete odosielať systémový záznam v konkrétnu hodinu alebo v časovom intervale, zadajte počet hours (hodín)."
						}]
					},
					"7. Kliknite na tlačidlo Uložiť."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Štatistika prenosu údajov",
			CONTENT: [{
				type: "paragraph",
				content: "Stránka štatistiky prenosu údajov zobrazuje prenos údajov cez LAN, WAN a WLAN; odosielanie a príjem paketov."
			},{
				type: "name",
				title: "Štatistika prenosu údajov",
				content: "Zapnutím tejto funkcie zobrazíte štatistické informácie."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Zoznam štatistiky prenosu údajov",
			CONTENT: [{
				type: "name",
				title: "IP adresa/MAC adresa",
				content: "Zobrazuje sa IP adresa a MAC adresa príslušného klientskeho zariadenia."
			},{
				type: "name",
				title: "Paketov celkovo",
				content: "Zobrazuje sa celkový počet paketov prenášaných a prijímaných klientskym zariadením od začiatku relácie alebo od posledného nulovania počítadla."
			},{
				type: "name",
				title: "Bajtov celkovo",
				content: "Zobrazuje sa celkový počet bajtov prenášaných a prijímaných klientskym zariadením od začiatku relácie alebo od posledného nulovania počítadla."
			},{
				type: "name",
				title: "Paketov v súčasnosti",
				content: "Zobrazuje sa súčasný počet paketov odosielaných a prijímaných v určitom časovom intervale."
			},{
				type: "name",
				title: "Bajtov v súčasnosti",
				content: "Zobrazuje sa súčasný počet bajtov odosielaných a prijímaných v určitom časovom intervale."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti na Resetovanie (na nulu) a Odstránenie príslušnej štatistiky zo zoznamu."
			},{
				type: "name",
				title: "Obnoviť",
				content: "Kliknutím aktualizujete štatistické informácie na stránke."
			},{
				type: "name",
				title: "Resetovať všetko",
				content: "Kliknutím resetujete všetky štatistické hodnoty v zozname na nulu."
			},{
				type: "name",
				title: "Odstrániť všetky",
				content: "Kliknutím odstránite všetky štatistické informácie v zozname."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "2,4GHz/5GHz bezdrôtová sieť",
			CONTENT: [{
				type: "name",
				title: "Signálny interval",
				content: "Zadajte hodnotu od 40 do 1000 v milisekundách, čím určíte čas medzi signálnymi paketmi, ktoré vysiela smerovač na synchronizáciu s bezdrôtovou sieťou. Predvolená hodnota je 100 milisekúnd."
			},{
				type: "name",
				title: "Prah RTS",
				content: "Zadajte hodnotu od 1 do 2346, čím určíte veľkosť paketu pri prenose dát cez smerovač. Ako predvolená možnosť je veľkosť prahu RTS (Request to Send) 2346. Ak je veľkosť paketu väčšia než predvolený prah, smerovač odošle určitej prijímacej stanici požiadavku na odoslanie rámcov a určí odoslanie dátového rámca, alebo ak nie, paket sa okamžite odošle."
			},{
				type: "name",
				title: "Interval DTIM",
				content: "Táto hodnota určuje interval správy Delivery Traffic Indication Message (DTIM). Zadajte hodnotu od 1 do 15 milisekúnd. Predvolená hodnota je 1 a indikuje, že interval DTIM je rovnaký ako signálny interval."
			},{
				type: "name",
				title: "Perióda aktualizácie skupinového kľúča",
				content: "Zadajte počet sekúnd (minimálne 30), čím ovládate časový interval pre automatickú obnovu šifrovacieho kľúča. Predvolená hodnota je 0, čo znamená, že kľúč sa neobnovuje."
			},{
				type: "name",
				title: "Funkcia WMM",
				content: "Funkcia WMM garantuje preferenčný prenos paketov správ s vysokou prioritou. Ako predvolená možnosť je zapnutá a dôrazne sa odporúča."
			},{
				type: "name",
				title: "Funkcia Short GI",
				content: "Táto funkcia je ako predvolená možnosť zapnutá a odporúča sa na zvýšenie dátovej kapacity skrátením času Guard Interval (GI)."
			},{
				type: "name",
				title: "Funkcia izolovania AP",
				content: "Ak chcete obmedziť a zadržať vzájomnú interakciu všetkých bezdrôtových zariadení pripojených k vašej sieti, ale zároveň aby mali prístup na internet, začiarknite políčko Zapnúť funkciu AP Isolation."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "TX Beamforming je technika spracovania signálu používanom v senzorovom poli pre smerovanie prenosového signálu. Ak je povolený, bude použitý na vysielacej strane na posilnenie signálu Wi-Fi a rozšírenie pokrytia Wi-Fi."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "Zapnúť premostenie WDS",
				content: "Zapnite funkciu WDS (Wireless Distribution System-Distribučný systém v bezdrôtovej sieti) Bridging a povolíte smerovaču premostenie s iným prístupovým bodom (AP) v lokálnej bezdrôtovej sieti (WLAN). Ak je táto funkcia zapnutá, nakonfigurujte nasledovné:",
				children: [{
					type: "name",
					title: "SSID (, ktorá sa má premostiť)",
					content: "Zadajte SSID WAP (Bezdrôtový prístupový bod), ku ktorému sa smerovač bude pripájať ako klient alebo použite funkciu Prieskum na nájdenie všetkých dostupných sietí."
				},{
					type: "name",
					title: "Prieskum",
					content: "Kliknutím na toto tlačidlo môžete skenovať a zobraziť SSID, BSSID, silu signálu, kanál a informácie o zabezpečení všetkých dostupných bezdrôtových sietí v dosahu. Keď vyberiete sieť, automaticky sa doplnia údaje SSID, MAC adresa a zabezpečenie."
				},{
					type: "name",
					title: "MAC adresa (, ktorá sa má premostiť)",
					content: "Zadajte MAC adresu (BSSID) vo formáte 12 hexadecimálnych znakov (0-9, a-f, A-F), oddelených spojovníkmi bezdrôtového prístupového bodu, ku ktorému sa pripojí smerovač ako klient. Ak si zvolíte požadovaný AP (prístupový bod) pomocou funkcie Prieskum, pole MAC adresy sa automaticky doplní."
				},{
					type: "name",
					title: "Zabezpečenie",
					content: "Vyberte správny typ zabezpečenia vybraného prístupového bodu, žiadne, WPA-PSK/WPA2-PSK alebo WEP. Ak si zvolíte požadovaný AP (prístupový bod) pomocou funkcie Prieskum, pole Zabezpečenie sa automaticky doplní.",
					children: [{
						type: "name",
						title: "Heslo",
						content: "Táto možnosť je dostupná, keď je typom zabezpečenia WPA-PSK/WPA2-PSK alebo WEP. Zadajte bezpečnostné heslo zvoleného prístupového bodu."
					},{
						type: "name",
						title: "Over. Typ",
						content: "Táto možnosť je dostupná iba keď je typ zabezpečenia WEP (Wired Equivalent Privacy). Vyberte príslušný typ overenia (Automaticky, Otvorený systém alebo zdieľaný kľúč), ktorý používa vybraný prístupový bod."
					},{
						type: "name",
						title: "Formáť kľúča WEP",
						content: "Táto možnosť je dostupná, keď je typ zabezpečenia WEP. Vyberte formát kľúča (ASCII alebo hexadecimálny), ktorý používa vybraný prístupový bod."
					}]
				}]
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Začiarknite políčko Zapnúť WPS a kliknite na príkaz Uložiť, čím zapnete funkciu WPS (Wi-FI Protected Setup), ktorá vám umožní jednoducho nainštalovať a pripojiť zariadenie so zapnutou funkciou WPS stlačením tlačidla."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Vyberte začiarkavacie políčko Zapnúť NAT a kliknite na príkaz Uložiť, čím zapnete funkciu NAT (Network Address Translation)."
			},{
				type: "note",
				title: "Poznámka",
				content: "Keď je NAT vypnuté, konfigurácie vo funkcii Presmerovanie NAT sa neuplatnia. "
			},{
				type: "name",
				title: "NAT Boost",
				content: "Vyberte začiarkavacie políčko Zapnúť NAT Boost a kliknite na príkaz Uložiť, čím zaistíte, že váš smerovač bude mať tú najlepšiu priechodnosť."
			},{
				type: "note",
				title: "Poznámka",
				content: "Ak je zapnutá funkcia NAT Boost, funkcia QoS a Štatistika prenosu údajov sa automaticky vypne."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "Nastavenie úrovne ochrany DoS",
			CONTENT: [{
				type: "paragraph",
				content: "Úroveň ochrany DoS chráni smerovač pred útokmi typu ICMP-FLOOD, UDP-FLOOD A TCP-FLOOD."
			},{
				type: "name",
				title: "Úroveň paketov ICMP-FLOOD",
				content: "Zadajte hodnotu od 5 do 7200 ICMP paketov, čím sa spustí ochrana ICMP-FLOOD hneď ako počet paketov presiahne nastavenú prahovú hodnotu."
			},{
				type: "name",
				title: "Úroveň paketov UDP-FLOOD",
				content: "Zadajte hodnotu od 5 do 7200 UDP paketov, čím sa spustí ochrana UDP-FLOOD hneď ako počet paketov presiahne nastavenú prahovú hodnotu."
			},{
				type: "name",
				title: "Úroveň paketov TCP-FLOOD",
				content: "Zadajte hodnotu od 5 do 7200 TCP-SYN paketov, čím sa spustí ochrana TCP-SYN-FLOOD hneď ako počet paketov presiahne nastavenú prahovú hodnotu."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Duplexný",
			CONTENT: [{
				type: "name",
				title: "Duplexný",
				content: "Vyberte duplexný typ z rozbaľovacieho zoznamu."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Zapnúť",
				content: "Výberom tohto začiarkavacieho políčka sa vypnú všetky indikátory LED počas obdobia nočného režimu bez obmedzenia výkonnosti smerovača."
			},{
				type: "name",
				title: "Doba trvania nočného režimu",
				content: "Nastavte časové obdobie, počas ktorého bude platiť nočný režim."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "S OpenVPN môžete použiť internet na zabezpečený prístup k vašej sieti, keď ste mimo domova. Ak chcete použiť VPN službu, je potrebné konfigurovať službu dynamického DNS (odporúčané) alebo priradiť statickú IP adresu portu WAN smerovača. A váš systémový čas by mal byť synchronizovaný s internetom."
			},{
				type: "name",
				title: "Povoliť VPN server",
				content: "Výberom tohto začiarkavacieho políčka povolíte server OpenVPN."
			},{
				type: "name",
				title: "Typ služby",
				content: "Vyberte komunikačný protokol pre server OpenVPN: UDP alebo TCP."
			},{
				type: "name",
				title: "Port služby",
				content: "Zadajte číslo komunikačného portu v rozsahu 1024 až 65535. Predvolený a bežný služobný port je 1194."
			},{
				type: "name",
				title: "Podsieť/sieťová maska VPN",
				content: "Zadajte rozsah IP adries, ktoré si môžu klienti prenajať od servera OpenVPN."
			},{
				type: "name",
				title: "Klientsky prístup",
				content: "Vyberte typ prístupu pre svojho klienta OpenVPN.",
				children: [{
					type: "name",
					title: "Iba domáca sieť",
					content: "Klienti môžu pristupovať iba k smerovaču a sieti LAN. Predvolená cesta klienta sa nezmení."
				},{
					type: "name",
					title: "Internet a domáca sieť",
					content: "Klienti môžu mať prístup k domácej sieti a internetovým stránkam alebo službám s geografickým obmedzením, keď sú mimo svojej krajiny. Predvolená routa pre klienta sa bude meniť."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Certifikát",
			CONTENT: [{
				type: "paragraph",
				content: "Použite certifikát pre informácie a identitu VPN pripojenia pre vzdialený počítač."
			},{
				type: "name",
				title: "Generovať",
				content: "Kliknutím vygenerujete nový certifikát."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Súbor s konfiguráciou",
			CONTENT: [{
				type: "paragraph",
				content: "Diaľkoví klienti použijú pre prístup k smerovaču konfiguračný súbor."
			},{
				type: "name",
				title: "Exportovať",
				content: "Kliknutím na toto tlačidlo uložíte súbor s konfiguráciou OpenVPN, ktorý sa použije na pridanie nového VPN pripojenia."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "Návod na inštaláciu VPN klienta",
			CONTENT: [{
				type: "step",
				title: "Ak chcete povoliť a pripojiť klientske zariadenia k serveru OpenVPN:",
				content:[{
					type: "paragraph",
					content: "Predtým, ako nakonfigurujete server OpenVPN, nakonfigurujte, prosím, službu dynamického DNS (odporúčané) alebo priraďte statickú IP adresu pre port WAN. A ubezpečte sa, či externý port nastavení NAT nie je servisným portom, a či váš systémový čas je synchronizovaný s internetom."
				},
					"1. Zvoľte možnosť Povoliť server VPN.",
					"2. Nakonfigurujte parametre servera OpenVPN (typ služby, servisný port, adresu klienta a VPN podsieť/masku siete) a kliknite na možnosť Uložiť.",
					"3. Kliknite na tlačidlo Exportovať, čím sa uloží konfiguračný súbor.",
					"4. Vo svojich klientských zariadeniach prevezmite a nainštalujte program pre klienta OpenVPN pomocou odkazu <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Oficiálne podporované platformy sú Windows, Mac OSX, Linux.",
					"5. Spustite program pre klienta OpenVPN a pridajte nové pripojenie VPN pomocou uloženého konfiguračného súboru, aby ste mohli pripojiť svoje klientské zariadenie k serveru VPN."
				]},{
					type: "note",
					title: "Poznámka",
					content: "Ďalšie informácie o klientoch OpenVPN nájdete na <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "S PPTP VPN môžete použiť internet na jednoduchý a rýchly prístup k vašej sieti, keď ste mimo domova. Môže byť tomu zabránené pomocou nejakých ISP. Ak chcete použiť VPN službu, je potrebné konfigurovať službu dynamického DNS (odporúčané) alebo priradiť statickú IP adresu portu WAN smerovača. A váš systémový čas by mal byť synchronizovaný s internetom."
			},{
				type: "name",
				title: "Povoliť VPN server",
				content: "Výberom tohto začiarkavacieho políčka povolíte server PPTP VPN."
			},{
				type: "name",
				title: "Klientska IP adresa",
				content: "Zadajte rozsah IP adries (až do 10 klientov), ktoré môže server PPTP VPN prenajímať klientom."
			},{
				type: "name",
				title: "Povoliť prístup Samba (sieťové miesto)",
				content: "Výberom umožníte klientovi VPN pristupovať k miestnemu serveru Samba."
			},{
				type: "name",
				title: "Povoliť priebeh NetBIOS",
				content: "Výberom umožníte klientovi VPN pristupovať k serveru Samba prostredníctvom názvu NetBIOS."
			},{
				type: "name",
				title: "Povoliť nešifrované pripojenia",
				content: "Výberom umožníte nezašifrované pripojenia k serveru VPN."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Zoznam účtov",
			CONTENT: [{
				type: "paragraph",
				content: "V tejto tabuľke sa zobrazujú účty, ktoré je možné použiť na pripojenie vzdialených klientov k serveru PPTP VPN."
			},{
				type: "step",
				title: "Pridanie účtu PPTP VPN",
				content: [
					"1. Kliknite na tlačidlo pridať.",
					"2. Zadajte meno používateľa a heslo na overovanie klientov voči serveru PPTP VPN.",
					"3. Kliknite na tlačidlo OK."
				]
			},{
				type: "step",
				title: "Upravenie alebo odstránenie existujúceho účtu",
				content: "V tabuľke kliknite na ikonu Editovať alebo na ikonu Odpad, zodpovedajúcu účtu, ktorý chcete upraviť alebo odstrániť."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "Návod na inštaláciu VPN klienta",
			CONTENT: [{
				type: "step",
				title: "Ak chcete povoliť a pripojiť klientske zariadenia k serveru PPTP VPN:",
				content:[{
					type: "paragraph",
					content: "Predtým, ako nakonfigurujete server PPTP VPN, nakonfigurujte, prosím, službu dynamického DNS (odporúčané) alebo priraďte statickú IP adresu pre port WAN. Ubezpečte sa, prosím, či externý port nastavení NAT nie je 1723, a či váš systémový čas je synchronizovaný s internetom."
				},
					"1. Zvoľte možnosť Povoliť server VPN.",
					"2. Nakonfigurujte parametre servera PPTP VPN a kliknite na možnosť Uložiť.",
					"3. Vo svojich klientských zariadeniach vytvorte pripojenie PPTP VPN. Oficiálne podporované platformy sú Windows, Mac OSX, Linux, iOS a Android.",
					"4. Spustite program PPTP VPN, pridajte nové pripojenie a zadajte názov domény registrovanej služby DDNS alebo statickú IP adresu, priradenú k portu WAN, aby ste mohli pripojiť svoje klientské zariadenia k serveru PPTP VPN."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "Pripojenia VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Na tejto stránke sa zobrazujú klienti, ktorí sú práve pripojení k serverom OpenVPN a PPTP VPN hosťovaným na smerovači."
			},{
				type: "paragraph",
				content: "Kliknutím na ikonu Mínus odpojíte daného klienta."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Stav internetu",
				content: "Zobrazí sa aktuálny stav internetového pripojenia smerovača."
			},{
				type: "name",
				title: "Typ pripojenia",
				content: "Zobrazí sa typ internetového pripojenia."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazí sa aktuálna internetová IP adresa priradená smerovaču."
			},{
				type: "name",
				title: "Sekundárne pripojenie/IP adresa",
				content: "Zobrazí sa typ sekundárneho pripojenia a IP adresa."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Smerovač",
			CONTENT: [{
				type: "title",
				title: "2,4GHz/5GHz bezdrôtová sieť"
			},{
				type: "name",
				title: "SSID",
				content: "Zobrazí sa názov aktuálnej bezdrôtovej siete v pásme 2,4 GHz / 5 GHz."
			},{
				type: "name",
				title: "Kanál",
				content: "Zobrazí sa kanál, z ktorého vysiela bezdrôtová sieť 2,4 GHz / 5 GHz."
			},{
				type: "name",
				title: "MAC",
				content: "Zobrazí sa aktuálna MAC adresa bezdrôtového pripojenia 2,4 GHz / 5 GHz."
			},{
				type: "title",
				title: "2,4GHz/5GHz hosťovská sieť"
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazí sa, či je bezdrôtová hosťovská sieť 2,4 GHz / 5 GHz zap. (zapnutá) alebo vyp. (vypnutá)."
			},{
				type: "name",
				title: "SSID",
				content: "Zobrazí sa názov bezdrôtovej hosťovskej siete ."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Klienti káblovej siete/Bezdrôtoví klienti",
			CONTENT: [{
				type: "name",
				title: "Názov",
				content: "Zobrazí sa názov klienta pripojeného ku smerovaču."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazí sa priradená IP adresa klienta."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazí sa MAC adresa klienta."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Tlačiareň",
			CONTENT: [{
				type: "name",
				title: "Názov",
				content: "Zobrazí sa názov tlačiarne pripojenej ku smerovaču."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "Disk USB",
			CONTENT: [{
				type: "name",
				title: "Disk USB",
				content: "Zobrazí sa značka disku USB pripojeného ku smerovaču."
			},{
				type: "name",
				title: "Celková",
				content: "Zobrazí sa celková kapacita disku USB."
			},{
				type: "name",
				title: "Dostupná",
				content: "Zobrazí sa dostupná kapacita disku USB."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Automatická detekcia",
				content: "Kliknutím na toto tlačidlo smerovač automaticky detekuje typ vášho súčasného internetového pripojenia."
			},{
				type: "note",
				title: "Poznámka",
				content: "Ak si nie ste istý, aký typ internetového pripojenia máte, použite funkciu Auto Detect, alebo požiadajte o pomoc svojho ISP."
			},{
				type: "title",
				title: "Typ pripojenia do internetu: Statická IP",
			},{
				type: "name",
				title: "IP adresa/Maska podsiete/Predvolená brána/Primárny DNS/Sekundárny DNS",
				content: "Zadajte informácie, ktoré vám poskytol poskytovateľ internetu (ISP)."
			},{
				type: "title",
				title: "Typ pripojenia do internetu: Dynamická IP adresa",
			},{
				type: "name",
				title: "NEklonovať MAC adresu/Klonovať MAC adresu aktuálneho počítača",
				content: "Vyberte, či klonovať svoju MAC adresu alebo nie, podľa vášho ISP."
			},{
				type: "title",
				title: "Typ internetového pripojenia: PPPoE",
			},{
				type: "name",
				title: "Meno/heslo",
				content: "Zadajte meno a heslo, ktoré vám poskytol ISP. Tieto polia sú citlivé na veľké a malé písmená."
			},{
				type: "title",
				title: "Typ internetového pripojenia: L2TP/PPTP",
			},{
				type: "name",
				title: "Meno/heslo",
				content: "Zadajte meno a heslo, ktoré vám poskytol ISP. Tieto polia sú citlivé na veľké a malé písmená."
			},{
				type: "name",
				title: "Sekundárne pripojenie (Dynamická IP alebo statická IP)",
				children: [{
					type: "name",
					title: "Dynamická IP",
					content: "Vyberte, ak vám IP adresu a masku podsiete automaticky priradí ISP."
				},{
					type: "name",
					title: "Statická IP",
					content: "Vyberte, ak vám IP adresu a masku podsiete priradil ISP a zadajte tieto údaje do príslušných polí."
				}]
			},{
				type: "name",
				title: "IP servera VPN/Doménové meno",
				content: "Zadajte IP adresu alebo názov domény servera VPN, ktoré vám poskytol váš ISP."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Nastavenie bezdrôtového prenosu",
			CONTENT: [{
				type: "name",
				title: "Zapnúť bezdrôtový vysielač",
				content: "Začiarknite toto políčko, ak chcete zapnúť bezdrôtovú vysielaciu frekvenciu 2,4 GHz / 5 GHz."
			},{
				type: "name",
				title: "Názov bezdrôtovej siete (SSID)",
				content: "Môžete nechať predvolený názov siete (SSID) ako je, alebo zadať nový názov (až 32 znakov). Toto pole je citlivé na veľké a malé písmená."
			},{
				type: "name",
				title: "Skryť SSID",
				content: "Začiarknite toto políčko, ak chcete skryť názov siete (SSID) 2,4 GHz / 5 GHz zo zoznamu Wi-Fi sietí."
			},{
				type: "name",
				title: "Heslo",
				content: "Zadajte heslo bezdrôtového pripojenia, 8 až 63 znakov ASCII alebo 8 až 64 hexadecimálnych znakov. Toto pole je citlivé na veľké a malé písmená."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Nastavenie zariadenia",
			CONTENT: [{
				type: "paragraph",
				content: "Na obrazovke Nastavenie zariadenia sa zobrazia príslušné informácie ľubovoľného, cez USB port pripojeného úložného zariadenia USB."
			},{
				type: "name",
				title: "Skenovať",
				content: "Smerovač zvyčajne automaticky detekuje akékoľvek nové pripojené zariadenie. Ak nie, kliknutím na toto tlačidlo môžete naskenovať ľubovoľné nové pripojené zariadenie a obnoviť obrazovku aktualizovanými informáciami."
			},{
				type: "name",
				title: "Disk",
				content: "Zobrazí sa názov disku USB."
			},{
				type: "name",
				title: "Kapacita",
				content: "Zobrazí sa celková úložná kapacita disku USB."
			},{
				type: "name",
				title: "Voľné miesto",
				content: "Zobrazí sa aktuálne voľné dostupné úložné miesto."
			},{
				type: "name",
				title: "Bezpečne odobrať",
				content: "Kliknutím na toto tlačidlo bezpečne odoberiete úložné zariadenie USB predtým, než ho fyzicky odpojíte od smerovača.",
				children: [{
					type: "paragraph",
					content: "Všimnite si, že tlačidlo Bezpečne odobrať sa objaví iba vtedy, keď je k smerovaču pripojené úložné zariadenie USB a zariadenie USB sa nebude dať odobrať, ak sa práve používa."
				}]
			},{
				type: "name",
				title: "Stav",
				content: "Toto začiarkavacie políčko sa objaví iba vtedy, keď je k smerovaču pripojené úložné zariadenie USB. Vyberte túto možnosť, ak chcete zapnúť zdieľanie súborov USB zariadenia."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Nastavenia zdieľania",
			CONTENT: [{
				type: "name",
				title: "Sieť/Názov mediálneho servera",
				content: "Zobrazí sa názov, ktorý sa používa na prístup k pripojenému úložnému zariadeniu USB."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Zdieľanie priečinkov",
			CONTENT: [{
				type: "name",
				title: "Zdieľať všetko",
				content: "Zapnite túto možnosť, ak chcete zdieľať všetky súbory a priečinky alebo ju vypnite, ak chcete zdieľať iba vybrané priečinky."
			},{
				type: "name",
				title: "Zapnúť overenie",
				content: "Dôrazne sa odporúča zapnúť overovanie a žiadať používateľov o uvedenie platného mena a hesla pre prístup k zdieľaným priečinkom."
			},{
				type: "name",
				title: "Názov priečinka",
				content: "Zobrazí sa názov zdieľaného priečinka."
			},{
				type: "name",
				title: "Cesta k priečinku",
				content: "Zobrazí sa cesta ku zdieľanému priečinku."
			},{
				type: "name",
				title: "Zdieľanie médií",
				content: "Označuje, či je v zdieľanom priečinku povolené zdieľať médiá alebo nie."
			},{
				type: "name",
				title: "Názov disku",
				content: "Zobrazí sa názov zdieľaného disku."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazí sa stav zdieľaného priečinka (žiarovka)."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti Modifikovať alebo Odstrániť príslušný zdieľaný priečinok."
			},{
				type: "name",
				title: "Pridať",
				content: "Kliknutím na toto tlačidlo vytvoríte novú položku."
			},{
				type: "name",
				title: "Odstrániť",
				content: "Kliknutím na toto tlačidlo odstránite vybranú položku z tabuľky."
			},{
				type: "name",
				title: "Prehľadávať",
				content: "Kliknutím môžete vyhľadať zdieľaný priečinok."
			},{
				type: "name",
				title: "Povoliť hosťovský prístup k sieti",
				content: "Vyberte túto možnosť, ak chcete klientom z hosťovskej siete povoliť prístup k zdieľaným priečinkom."
			},{
				type: "name",
				title: "Zapnúť overenie",
				content: "Vyberte túto možnosť, ak budete od používateľov pri prístupe k zdieľaným priečinkom platné meno a heslo."
			},{
				type: "name",
				title: "Zapnúť prístup so zápisom",
				content: "Vyberte a umožnite používateľom robiť zmeny v obsahu priečinka."
			},{
				type: "name",
				title: "Zapnúť zdieľanie médií",
				content: "Vyberte a zapnite zdieľanie médií."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Tlačový server",
			CONTENT: [{
				type: "name",
				title: "Tlačový server",
				content: "Prepnite na možnosť On (zapnuté), čím zapnete funkciu tlačového servera."
			},{
				type: "name",
				title: "Názov tlačiarne",
				content: "Zobrazí sa názov vašej tlačiarne pripojenej ku smerovaču."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Rodičovská kontrola",
			CONTENT: [{
				type: "name",
				title: "Rodičovská kontrola",
				content: "Prepnite na Zap, ak chcete zapnúť funkciu rodičovskej kontroly. Ako predvolená možnosť je táto funkcia vypnutá."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Zariadenia podliehajúce rodičovskej kontrole",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazí sa zoznam zariadení podliehajúcich rodičovskej kontrole."
			},{
				type: "name",
				title: "Názov zariadenia",
				content: "Zobrazia sa názvy všetkých pripojených klientskych zariadení, ktoré podliehajú rodičovskej kontrole."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazia sa MAC adresy všetkých pripojených klientskych zariadení, ktoré podliehajú rodičovskej kontrole."
			},{
				type: "name",
				title: "Čas prístupu k internetu",
				content: "Zobrazuje obmedzenia prístupu v časových intervalech.Časový harmonogram sa prejaví na základe systémového času routera, ktorý môže byť nastavený v \"Systémové nástroje -> Nastavenie času\"."
			},{
				type: "name",
				title: "Popis",
				content: "Zobrazí sa stručný popis pripojeného zariadenia. Je to voliteľné nastavenie."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazí sa aktuálny stav rodičovskej kontroly príslušného zariadenia (zapnuté alebo vypnuté)."
			},{
				type: "name",
				title: "Modifikovať",
				content: "Zobrazia sa možnosti na Modifikáciu alebo Odstránenie príslušného zariadenia."
			},{
				type: "step",
				title: "Obmedzenie nového klientskeho zariadenia",
				content:[
					"1. Kliknite na tlačidlo pridať.",
					"2. Kliknite na možnosť Zobraziť existujúce zariadenia a zvoľte práve pripojené zariadenie zo Zoznamu zariadení s prístupom, alebo zadajte Názov zariadenia a MAC adresu ručne a pridáte zariadenie, ktoré nie je pripojené.",
					"3. Kliknite na ikonu Čas prístupu k internetu a určite časový úsek, počas ktorého obmedzenie platí.",
					"4. Zadajte krátky popis do Popis poľa. (Voliteľne)",
					"5. Vyberte možnosť Zapnúť.",
					"6. Kliknite na tlačidlo OK."
				]
			},{
				type: "paragraph",
				content: "Ak chcete upraviť alebo vymazať položku rodičovskej kontroly, kliknutím na ikonu Upraviť upravíte informácie a kliknutím na ikonu Odstrániť odstránite príslušnú položku."
			},{
				type: "paragraph",
				content: "Ak chcete odstrániť viaceré položky, vyberte všetky položky a kliknite na príkaz Odstrániť nad tabuľkou."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Hosťovská sieť",
			CONTENT: [{
				type: "paragraph",
				content: "Guest Network (hosťovská sieť) umožní vám nainštalovať oddelenú sieť s oddeleným názvom bezdrôtovej siete (SSID) a heslom, ktoré môžu používať hostia na prístup k vašej bezdrôtovej sieti."
			},{
				type: "name",
				title: "Umožniť hosťom, aby sa navzájom videli",
				content: "Začiarknutím tohto políčka umožníte bezdrôtovým zariadeniam v hosťovskej sieti, aby sa navzájom videli."
			},{
				type: "name",
				title: "Umožniť hosťom prístup ku svojej lokálnej sieti",
				content: "Začiarknutím tohto políčka umožníte bezdrôtovým zariadeniam, na hosťovskej sieti prístup k zdieľaným zariadeniam a tlačiarňam."
			},{
				type: "name",
				title: "Zapnúť hosťovskú sieť",
				content: "Začiarknutím tohto políčka zapnete funkciu hosťovskej siete."
			},{
				type: "name",
				title: "Názov bezdrôtovej siete (SSID)",
				content: "Môžete použiť predvolený názov hosťovskej siete (SSID), alebo vytvoriť nový názov (až 32 znakov)."
			},{
				type: "name",
				title: "Skryť SSID",
				content: "Začiarknite toto políčko, ak chcete skryť názov hosťovskej siete (SSID) zo zoznamu Wi-Fi sietí."
			},{
				type: "name",
				title: "Heslo",
				content: "Použite buď náhodne vygenerované heslo alebo si vytvorte heslo v dĺžke 8 až 63 znakov ASCII alebo v dĺžke 8 až 64 hexadecimálnych znakov (0-9, a-f, A-F)."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložiť uložíte všetky vaše nastavenia."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"Služba TP-Link Cloud vám umožní diaľkovo monitorovať vašu sieť v reálnom čase, pristupovať a spravovať vaše zariadenia TP-Link z Internetu kedykoľvek a odkiaľkoľvek."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Informácie o účte",
			CONTENT:[{
				type:"paragraph",
				content:"Zobrazia sa vaše informácie o identifikácii TP-Link ID. Informácie o účte môžete upravovať po kliknutí na ikonu Upraviť."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Informácie o zariadení",
			CONTENT:[{
				type:"paragraph",
				content:"Zobrazí informácie o vašom zariadení, vrátane cloudového účtu, ktorý spravuje zariadenie."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Odpojiť účty",
			CONTENT:[{
				type:"paragraph",
				content:"Táto tabuľka uvádza všetky cloudové účty, ktoré sú aktuálne spojené so zariadením."
			},{
				type:"step",
				title:"Spojiť používateľský účet",
				content:["1. Kliknite na Spojiť.",
				"2. Zadajte registrovaný email, ktorý chcete spojiť.",
				"3. Kliknite na Uložiť."]
			}]

		}

	};
})(jQuery);

