(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internetu",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje důležité informace o připojení k Internetu (WAN - Wide Area Network)."
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "MAC adresa",
				content: "unikátní fyzická adresa přidělena k WAN potu směrovače."
			},{
				type: "name",
				title: "IP adresa",
				content: "IPv4 adresa přidělena k WAN potu směrovače. Pokud je IP adresa zobrazena jako 0.0.0.0, znamená to, že nemáte přístup k Internetu."
			},{
				type: "name",
				title: "Maska podsítě",
				content: "tento parametr určuje síťovou část a hostitelskou část IP adresy."
			},{
				type: "name",
				title: "Výchozí brána",
				content: "IP adresa slouží k připojení směrovače k síti."
			},{
				type: "name",
				title: "Primární DNS / sekundární DNS",
				content: "Domain Name System (DNS) překládá názvy hostitelů a internetových domén na IP adresy. Informace o těchto DNS serverech jsou přiděleny poskytovatelem internetových služeb (ISP)."
			},{
				type: "name",
				title: "Typ připojení",
				content: "aktuální typ připojení WAN portu."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "MAC adresa",
				content: "unikátní fyzická adresa přidělena k WAN potu směrovače."
			},{
				type: "name",
				title: "IP adresa",
				content: "IPv6 adresa přidělena k WAN potu směrovače."
			},{
				type: "name",
				title: "Výchozí brána",
				content: "IP adresa slouží k připojení směrovače k síti."
			},{
				type: "name",
				title: "Primární DNS / sekundární DNS",
				content: "Domain Name System (DNS) překládá názvy hostitelů a internetových domén na IP adresy. Informace o těchto DNS serverech jsou přiděleny poskytovatelem internetových služeb (ISP)."
			},{
				type: "name",
				title: "Typ připojení",
				content: "aktuální typ připojení WAN portu."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Bezdrátová síť",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje příslušné informace o bezdrátové síti."
			},{
				type: "name",
				title: "Název bezdrátové sítě (SSID)",
				content: "název bezdrátové sítě, známý také jako identifikátor SSID (Service Set Identifier)."
			},{
				type: "name",
				title: "Bezdrátový vysílač",
				content: "Aktuální stav (zapnuto nebo vypnuto) bezdrátové sítě."
			},{
				type: "name",
				title: "Režim",
				content: "Aktuální režim bezdrátové sítě."
			},{
				type: "name",
				title: "Šířka kanálu",
				content: "Šířka pásma kanálu bezdrátové sítě."
			},{
				type: "name",
				title: "Kanál",
				content: "Aktuální bezdrátový kanál a jeho odpovídající frekvence (v GHz)."
			},{
				type: "name",
				title: "MAC adresa",
				content: "MAC adresa vysílače bezdrátové sítě na směrovači."
			},{
				type: "name",
				id: "status_wds",
				title: "Stav WDS",
				content: "Aktuální stav (zapnuto nebo vypnuto) režimu WDS."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje informace o ethernetových (LAN) portech."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "MAC adresa",
				content: "unikátní fyzická adresa přidělena k ethernetovému LAN potu směrovače."
			},{
				type: "name",
				title: "IP adresa",
				content: "IPv4 adresa přidělena k ethernetovému LAN potu směrovače."
			},{
				type: "name",
				title: "Maska podsítě",
				content: "tento parametr určuje síťovou část a hostitelskou část IP adresy."
			},{
				type: "name",
				title: "DHCP",
				content: "Zobrazuje, zda je integrovaný DHCP server směrovače pro zařízení na LAN portech aktivní či nikoliv."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "MAC adresa",
				content: "unikátní fyzická adresa přidělena k ethernetovému LAN potu směrovače."
			},{
				type: "name",
				title: "IP adresa",
				content: "IPv6 adresa přidělena k ethernetovému LAN potu směrovače."
			},{
				type: "name",
				title: "Link-local adresa",
				content: "Link-local adresa IPv6 pro LAN rozhraní."
			},{
				type: "name",
				title: "Typ přiřazení",
				content: "Typ IPv6 adresy pro LAN rozhraní."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Síť pro hosty",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje informace o bezdrátové síti pro hosty."
			},{
				type: "name",
				title: "Název bezdrátové sítě (SSID)",
				content: "Název bezdrátové sítě (SSID) vaší sítě pro hosty."
			},{
				type: "name",
				title: "Skrýt identifikátor SSID",
				content: "Zobrazuje, zda je název bezdrátové sítě pro hosty (SSID) skrytý či nikoliv."
			},{
				type: "name",
				title: "Bezdrátový vysílač",
				content: "Aktuální stav (zapnuto nebo vypnuto) sítě pro hosty."
			},{
				type: "name",
				title: "Povolit hostům vzájemně se vidět",
				content: "Zobrazuje, zda všechna zařízení v síti pro hosty mohou mezi sebou komunikovat či nikoliv."
			}]
		},
		STATUS_USB: {
			TITLE: "USB zařízení",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje informace o aktuálních paměťových USB zařízeních a/nebo tiskárnách připojených ke směrovači přes USB porty."
			},{
				type: "name",
				title: "Tiskárna",
				content: "Název připojené tiskárny."
			},{
				type: "name",
				title: "USB disk",
				content: "Zobrazuje název USB disku připojeného ke směrovači."
			},{
				type: "name",
				title: "Celková kapacita",
				content: "Celková kapacita paměti připojeného USB zařízení."
			},{
				type: "name",
				title: "Dostupná kapacita",
				content: "Dostupná kapacita paměti připojeného USB zařízení."
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Výkon",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje aktuální výkon směrovače."
			},{
				type: "name",
				title: "Zatížení procesoru",
				content: "Aktuální využití procesoru."
			},{
				type: "name",
				title: "Využití paměti",
				content: "Aktuální využití paměti."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Klienti kabelové sítě",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje informace o všech kabelových zařízeních, která jsou v momentálně připojena k síti."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Klienti bezdrátové sítě",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje informace o všech bezdrátových zařízeních, která jsou v momentálně připojena k síti."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Typ připojení k Internetu: Statická IP adresa"
			},{
				type: "paragraph",
				content: "Tento typ vyberte, pokud od vašeho poskytovatele internetových služeb obdržíte konkrétní (pevnou) IP adresu, parametry masky podsítě a brány DNS serveru."
			},{
				type: "name",
				title: "IP adresa / maska podsítě / výchozí brána / primární DNS / sekundární DNS",
				content: "Zadejte údaje poskytnuté vaším poskytovatelem internetových služeb."
			},{
				type: "name",
				title: "Velikost MTU",
				content: "Výchozí a typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro většinu ethernetových sítí je 1 500 bajtů. Není doporučeno měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
			},{
				type: "title",
				title: "Typ připojení k Internetu: Dynamická IP adresa:"
			},{
				type: "paragraph",
				content: "Tento typ vyberte, pokud vám poskytovatel internetových služeb zajišťuje konfiguraci připojení pomocí DHCP serveru."
			},{
				type: "name",
				title: "IP adresa / maska podsítě / výchozí brána / primární DNS / sekundární DNS",
				content: "Tyto parametry jsou automaticky přiřazeny DHCP serverem vašeho poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Obnovit",
				content: "Kliknutím na toto tlačítko získáte nové parametry IP adresy ze serveru DHCP."
			},{
				type: "name",
				title: "Uvolnit",
				content: "Kliknutím na toto tlačítko uvolníte všechny IP adresy přiřazené DHCP serverem."
			},{
				type: "name",
				title: "Použít následující adresy DNS",
				content: "V případě, že poskytovatel internetových služeb poskytne jednu nebo dvě adresy DNS, zaškrtněte toto políčko a zadejte primární  a sekundární adresu DNS do příslušných políček. V opačném případě budou adresy DNS přiřazeny dynamicky poskytovatelem internetových služeb."
			},{
				type: "name",
				title: "Velikost MTU",
				content: "Výchozí a typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro většinu ethernetových sítí je 1 500 bajtů. Není doporučeno měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
			},{
				type: "name",
				title: "Název hostitele",
				content: "Zadáním hodnoty do tohoto pole specifikujete název hostitele směrovače."
			},{
				type: "name",
				title: "Získat IP adresu pomocí jednosměrového vysílání DHCP",
				content: "Zaškrtněte toto políčko, pokud DHCP server vašeho poskytovatele internetových služeb nepodporuje vysílání aplikací a IP adresu nemůžete získat dynamicky."
			},{
				type: "title",
				title: "Typ připojení k Internetu: PPPoE"
			},{
				type: "paragraph",
				content: "Tento typ vyberte, pokud používáte službu DSL (Digital Subscriber Line-digitální účastnická linka) a od poskytovatele internetových služeb máte uživatelské jméno a heslo."
			},{
				type: "name",
				title: "Uživatelské jméno / heslo",
				content: "Zadejte uživatelské jméno a heslo získané od poskytovatele internetových služeb. Tyto údaje rozlišují malá a velká písmena."
			},{
				type: "name",
				title: "IP adresa / Primární DNS / Sekundární DNS",
				content: "Tyto parametry jsou automaticky přiřazeny DHCP serverem vašeho poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Sekundární připojení (žádné, dynamická IP, statická IP adresa)",
				children: [{
					type: "name",
					title: "Žádný",
					content: "Vyberte, pokud není k dispozici žádné sekundární připojení."
				},{
					type: "name",
					title: "Dynamická IP adresa",
					content: "Vyberte, pokud IP adresa a maska podsítě jsou přiřazeny automaticky poskytovatelem internetových služeb.",
					children: [{
						type: "name",
						title: "Obnovit",
						content: "Kliknutím na toto tlačítko obnovíte parametry IP adresy od vašeho poskytovatele internetových služeb."
					},{
						type: "name",
						title: "Uvolnit",
						content: "Kliknutím na toto tlačítko uvolníte přidělené parametry IP adresy."
					}]
				},{
					type: "name",
					title: "Statická IP adresa",
					content: "Vyberte, pokud IP adresa a maska podsítě jsou přiděleny poskytovatelem internetových služeb a zadejte tyto údaje do příslušných polí."
				}]
			},{
				type: "name",
				title: "Velikost MTU",
				content: "Typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro ethernetové sítě je 1 480 bajtů.",
				children: [{
					type: "note",
					title: "Poznámka",
					content: "V ojedinělých případech může váš poskytovatel internetových služeb od vás vyžadovat úpravu velikosti MTU pro lepší výkon sítě. Tuto hodnotu byste neměli měnit, pokud to není nezbytně nutné."
				}]
			},{
				type: "name",
				title: "Název služby / název přístupového koncentrátoru",
				content: "Ve výchozím nastavení jsou názvy služby a přístupového koncentrátora (AC) ponechány prázdné. Tato pole by neměla být konfigurována, pokud to nevyžaduje váš poskytovatel internetových služeb."
			},{
				type: "name",
				title: "Interval detekce online",
				content: "Zadejte interval mezi 0 a 120 (v sekundách), po kterém bude směrovač detekovat online přístupové koncentrátory. Výchozí hodnota je 10."
			},{
				type: "name",
				title: "IP adresa",
				content: "Pokud váš poskytovatel internetových služeb poskytuje konkrétní (pevnou) IP adresu, vyberte \"Použít tuto IP adresu\" a zadejte IP adresu do příslušného pole. V opačném případě vyberte \"Získat dynamicky od poskytovatele internetových služeb\" a IP adresa bude přiřazena automaticky serverem."
			},{
				type: "name",
				title: "Adresa DNS / primární DNS / sekundární DNS",
				content: "Pokud váš poskytovatel internetových služeb poskytuje konkrétní (pevnou) IP adresu DNS, vyberte \"Použít tuto adresu DNS\" a zadejte adresu(y) do pole Primární DNS  resp. Sekundární DNS. V opačném případě vyberte \"Získat dynamicky od poskytovatele internetových služeb\" a IP adresy DNS budou přiřazeny automaticky serverem."
			},{
				type: "name",
				title: "Typ připojení",
				content: "Vyberte odpovídající režim připojení, který určuje, jak se připojit k internetu.",
				children: [{
					type: "name",
					title: "Auto",
					content: "V tomto režimu se připojení k internetu obnoví automaticky, kdykoli je přerušeno."
				},{
					type: "name",
					title: "Na vyžádání",
					content: "V tomto režimu bude připojení k internetu ukončeno automaticky po určité době nečinnosti (max. doba nečinnosti). Připojení je znovu navázáno, poté co se pokusíte o připojení k internetu."
				},{
					type: "name",
					title: "Časový interval",
					content: "V tomto režimu je připojení k internetu navázáno pouze na určité časové rozmezí. Pokud je vybrána tato možnost, zadejte čas začátku a čas konce,oba jsou ve formátu HH: MM."
				},{
					type: "name",
					title: "Manuálně",
					content: "V tomto režimu  je připojení k internetu ovládáno manuálně kliknutím na tlačítko Připojit nebo Odpojit. Tento režim podporuje také funkci max. doby nečinnosti. Do pole max. doba nečinnosti zadejte maximální dobu (v minutách), po kterou může být připojení k internetu neaktivní, než bude ukončeno . Výchozí hodnota je 15 minut. Pokud chcete, aby připojení k internetu zůstalo aktivní po celou dobu, zadejte 0 (nula)."
				},{
					type: "note",
					title: "Poznámka",
					content: "Režim připojení \"Časový interval\" se projeví až poté, co bude systémový čas na stránce Pokročilé nastavení → Systémové nástroje → Nastavení času nakonfigurován."
				}]
			},{
				type: "title",
				title: "Typ připojení k Internetu: BigPond Cable (BigPond kabelové připojení)"
			},{
				type: "paragraph",
				content: "Tento typ vyberte, pokud váš poskytovatel internetových služeb poskytuje Bigpond kabelové připojení."
			},{
				type: "name",
				title: "Uživatelské jméno / heslo",
				content: "Zadejte uživatelské jméno a heslo získané od poskytovatele internetových služeb. Tyto údaje rozlišují malá a velká písmena."
			},{
				type: "name",
				title: "Ověř. Server",
				content: "Zadejte IP adresu nebo název hostitele ověřovacího serveru."
			},{
				type: "name",
				title: "Ověř. Doména",
				content: "Zadejte příponu názvu domény serveru (podle vaší lokality). Například nsw.bigpond.net.au pro NSW/ACT, vic.bigpond.net.au for VIC/TAS/WA/SA/NT nebo qld.bigpond.net.au pro QLD."
			},{
				type: "name",
				title: "Velikost MTU",
				content: "Výchozí a typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro většinu ethernetových sítí je 1 500 bajtů. Není doporučeno měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
			},{
				type: "name",
				title: "Typ připojení",
				content: "Vyberte odpovídající režim připojení, který určuje, jak se připojit k internetu.",
				children: [{
					type: "name",
					title: "Auto",
					content: "V tomto režimu se připojení k internetu obnoví automaticky, kdykoli je přerušeno."
				},{
					type: "name",
					title: "Na vyžádání",
					content: "V tomto režimu bude připojení k internetu ukončeno automaticky po určité době nečinnosti (max. doba nečinnosti). Připojení je znovu navázáno, poté co se pokusíte o připojení k internetu."
				},{
					type: "name",
					title: "Manuálně",
					content: "V tomto režimu  je připojení k internetu ovládáno manuálně kliknutím na tlačítko Připojit nebo Odpojit. Tento režim podporuje také funkci max. doby nečinnosti. Do pole max. doba nečinnosti zadejte maximální dobu (v minutách), po kterou může být připojení k internetu neaktivní, než bude ukončeno . Výchozí hodnota je 15 minut. Pokud chcete, aby připojení k internetu zůstalo aktivní po celou dobu, zadejte 0 (nula)."
				}]
			},{
				type: "title",
				title: "Typ připojení k Internetu: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Tento typ vyberte, pokud se připojujete k L2TP/PPTP VPN serveru a máte od poskytovatele internetových služeb uživatelské jméno, heslo a IP adresu / název domény serveru."
			},{
				type: "name",
				title: "Uživatelské jméno / heslo",
				content: "Zadejte uživatelské jméno a heslo získané od poskytovatele internetových služeb. Tyto údaje rozlišují malá a velká písmena."
			},{
				type: "name",
				title: "IP adresa / Primární DNS / Sekundární DNS",
				content: "Tyto parametry jsou automaticky přiřazeny DHCP serverem vašeho poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Sekundární připojení (Dynamická nebo statická IP adresa)",
				children: [{
					type: "name",
					title: "Dynamická IP adresa",
					content: "Vyberte, pokud IP adresa a maska podsítě jsou přiřazeny automaticky poskytovatelem internetových služeb."
				},{
					type: "name",
					title: "Statická IP adresa",
					content: "Vyberte, pokud IP adresa, maska podsítě, brána a DNS adresy jsou poskytnuty poskytovatelem internetových služeb a zadejte tyto údaje do příslušných polí."
				}]
			},{
				type: "name",
				title: "IP adresa VPN serveru / Doménové jméno",
				content: "Zadejte IP adresu nebo název domény VPN serveru poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Velikost MTU",
				content: "Výchozí a typická velikost MTU (Maximum Transmission Unit - maximální přenosová jednotka) pro většinu ethernetových sítí je 1 460 bajtů pro L2TP nebo 1420 bajtů pro PPTP. Nedoporučuje se měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
			},{
				type: "name",
				title: "Typ připojení",
				content: "Vyberte odpovídající režim připojení, který určuje, jak se připojit k internetu.",
				children: [{
					type: "name",
					title: "Auto",
					content: "V tomto režimu se připojení k internetu obnoví automaticky, kdykoli je přerušeno."
				},{
					type: "name",
					title: "Na vyžádání",
					content: "V tomto režimu bude připojení k internetu ukončeno automaticky po určité době nečinnosti (max. doba nečinnosti). Připojení je znovu navázáno, poté co se pokusíte o připojení k internetu."
				},{
					type: "name",
				title: "Manuálně",
				content: "V tomto režimu  je připojení k internetu ovládáno manuálně kliknutím na tlačítko Připojit nebo Odpojit. Tento režim podporuje také funkci max. doby nečinnosti. Do pole max. doba nečinnosti zadejte maximální dobu (v minutách), po kterou může být připojení k internetu neaktivní, než bude ukončeno . Výchozí hodnota je 15 minut. Pokud chcete, aby připojení k internetu zůstalo aktivní po celou dobu, zadejte 0 (nula)."
				}]
			},{
				type:"paragraph",
				content:"Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "Klonování MAC adresy",
			CONTENT: [{
				type: "name",
				title: "Použít výchozí MAC adresu",
				content: "NEMĚŇTE výchozí MAC adresu směrovače, v případě, že poskytovatel internetových služeb neváže přidělenou IP adresu na MAC adresu."
			},{
				type: "name",
				title: "Použít aktuální MAC adresu počítače",
				content: "Zkopírujete aktuální MAC adresu počítače, který je připojen ke směrovači, v případě, že poskytovatel internetových služeb váže přidělenou IP adresu na MAC adresu tohoto počítače."
			},{
				type: "name",
				title: "Použít vlastní MAC adresu",
				content: "Zadejte MAC adresu manuálně, v případě, že poskytovatel internetových služeb váže přidělenou IP adresu na tuto konkrétní MAC adresu."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "MAC adresa",
				content: "unikátní fyzická adresa přidělena k ethernetovému LAN potu směrovače."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazuje výchozí IP adresu směrovače, která se používá pro přihlášení na stránku webové správy směrovače, a může být změněna."
			},{
				type: "name",
				title: "Maska podsítě",
				content: "Z rozevíracího seznamu vyberte přiřazený identifikátor používaný LAN portem ke směrování interní a externí komunikace nebo zadejte novou masku podsítě v desítkovém zápisu s tečkou."
			},{
				type: "note",
				title: "Poznámka",
				content: "V případě, že nová IP adresa LAN není ve stejné podsíti se starou, fond IP adres na serveru DHCP bude automaticky nakonfigurován. Přesměrování portů a hostitel DMZ však změnu neprojeví, dokud nebudou překonfigurovány."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		IPTV:{
			TITLE: "Nastavení",
			CONTENT: [{
					type: "name",
					title: "IGMP Proxy",
					content: "Vyberte verzi IGMP (Internet Group Management Protocol) proxy, buď V2 nebo V3, podle vašeho poskytovatele internetových služeb."
				},{
					type: "name",
					title: "Verze IGMP",
					content: "Vyberte verzi IGMP Proxy, a to buď V2 nebo V3, podle vašeho ISP."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Vyberte pro aktivaci funkce IPTV."
				},
				{
					type: "name",
					title: "Režim",
					content: "Vyberte odpovídající režim podle vašeho poskytovatele internetových služeb.",
					children: [
						{
							type: "name",
							title: "Most",
							content:"Pokud váš poskytovatel internetových služeb není uveden a nejsou potřeba žádné další parametry, můžete jednoduše zvolit tento režim a nastavit vlastnosti LAN portu směrovače.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Přiřadit LAN port funkci, zda bude fungovat jako poskytovatel internetové připojení nebo jako poskytovatel IPTV."
							}]
						},
						{
							type: "name",
							title: "Rusko",
							content: "Zaškrtněte, pokud je ISP z Ruska a nutné parametry jsou určeny předem, včetně Internet/IP-telefonu/IPTV VLAN ID a priority a funkcí portu sítě LAN (1/2/3/4).",
							children: [{
								type: "name",
								title: "IPTV Multicast VLAN ID / Priorita",
								content: "Podle potřeby můžete povolit funkci vícesměrového vysílání IPTV  a nakonfigurovat ID a prioritu VLAN podle vašeho poskytovatele internetových služeb."
							}]
						},
						{
							type: "name",
							title: "Singapur-ExStream",
							content: "Vyberte v případě, že váš poskytovatel internetových služeb je ExStream ze Singapuru a potřebné parametry jsou předdefinované, včetně internetu/ IP telefonie / ID VLAN IPTV a priority a vlastností LAN (1/2/3/4) portů."
						},
						{
							type: "name",
							title: "Malajsie-Unifi",
							content: "Vyberte v případě, že váš poskytovatel internetových služeb je Unifi z Malajsie a potřebné parametry jsou předdefinované, včetně internetu/ IP telefonie / ID VLAN IPTV a priority a vlastností LAN (1/2/3/4) portů."
						},
						{
							type: "name",
							title: "Malajsie-Maxis",
							content: "Vyberte v případě, že váš poskytovatel internetových služeb je Maxis z Malajsie a potřebné parametry jsou předdefinované, včetně internetu/ IP telefonie / ID VLAN IPTV a priority a vlastností LAN (1/2/3/4) portů."
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Vyberte pokud váš poskytoval Internetu je Portugal-MEO a potřebné parametry jsou předem určeny, včetně Internet VLAN ID, priority a nastavení LAN (1/2/3/4) portů."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Vyberte pokud váš poskytoval Internetu je Portugal-Vodafone a potřebné parametry jsou předem určeny, včetně Internet/IP Phone/ IPTV VLAN ID a priority. Můžete přeřadit funkcionalitu svých LAN portů dle potřeby (Internet/IPTV/IP-Phone/Internet-IPTV)."
						},
						{
							type: "name",
							title: "Vlastní",
							content: "Vyberte v případě, že váš poskytovatel internetových služeb se nenachází na seznamu poskytovatelů, ale potřebné parametry jsou předdefinované, včetně internetu/ IP telefonie / ID VLAN IPTV a priority a vlastností LAN (1/2/3/4) portů.",
							children: [{
								type: "name",
								title: "Internet / IP telefon / IPTV VLAN ID / Priorita",
								content: "Nakonfigurujte ID a priority VLAN, jak jsou přiděleny vaším poskytovatelem internetových služeb."
							},{
								type: "name",
								title: "Značka 802.1Q",
								content: "Vyberte, zda chcete označit internetové pakety značkou 802.1Q."
							},{
								type: "name",
								title: "IPTV Multicast VLAN ID / Priorita",
								content: "Podle potřeby můžete povolit funkci vícesměrového vysílání IPTV  a nakonfigurovat ID a prioritu VLAN podle vašeho poskytovatele internetových služeb."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Zadejte portu LAN, zda bude fungovat jako poskytovatel internetové připojení, IP telefonie nebo jako poskytovatel IPTV."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Kliknutím na Uložit uložíte veškerá nastavení."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Nastavení",
			CONTENT: [{
				type: "name",
				title: "DHCP server",
				content: "Ve výchozím nastavení je server DHCP (Dynamic Host Configuration Protocol) povolen,dynamicky přiděluje parametry TCP/IP zařízením klienta z fondu IP adres. Nevypínejte DHCP server, pokud nemáte jiný DHCP server, nebo pokud nechcete manuálně přiřadit TCP/IP parametry každému klientskému zařízení v síti."
			},{
				type: "name",
				title: "Fond IP adres",
				content: "Zadejte rozsah IP adres, které lze zapůjčit klientům."
			},{
				type: "name",
				title: "Čas zapůjčení adresy",
				content: "Zadejte časový interval 1 – 2 880 minut, po který je IP adresa zapůjčena klientovi. Výchozí hodnota je 120 minut."
			},{
				type: "name",
				title: "Výchozí brána",
				content: "Zadejte IP adresu místní sítě (LAN). (Nepovinné)"
			},{
				type: "name",
				title: "Primární DNS / sekundární DNS",
				content: "Zadejte tyto parametry, které máte od poskytovatele internetových služeb. (Nepovinné)"
			},{
				type:"paragraph",
				content:"Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Rezervace adresy",
			CONTENT: [{
				type: "paragraph",
				content: "IP adresu pro klienta, který je připojen ke směrovači, můžete manuálně vyhradit. Po vyhrazení bude IP adresa přidělena DHCP serverem pouze tomuto klientovi."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje MAC adresu klienta s IP adresou vyhrazenou DHCP serverem."
			},{
				type: "name",
				title: "Rezervovaná IP adresa",
				content: "Zobrazuje vyhrazenou IP adresu klienta."
			},{
				type: "name",
				title: "Popis",
				content: "Zobrazuje popis klientského zařízení."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazuje aktuální stav (zapnuto nebo vypnuto) klientského zařízení."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti upravit nebo odstranit odpovídajícího klienta."
			},{
				type: "step",
				title: "Rezervace IP adresy",
				content:[
					"1. Klikněte na Přidat.",
					"2. Zadejte MAC adresu vašeho požadovaného klienta.",
					"3. Zadejte IP adresu, kterou chcete pro klienta vyhradit.",
					"4. Zadejte popis klienta",
					"5. Vyberte Povolit.",
					"6. Klikněte na OK."
				]
			},{
				type: "step",
				title: "Úprava nebo odstranění klienta",
				content: "V tabulce klikněte na ikonu Upravit nebo na ikonu Odstranit , která přísluší klientovi, kterého chcete upravit nebo odstranit."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "Seznam klientů DHCP",
			CONTENT: [{
				type: "name",
				title: "Číslo klienta",
				content: "Zobrazuje číslo přiřazeného klienta DHCP."
			},{
				type: "name",
				title: "Jméno klienta",
				content: "Zobrazuje jméno přiřazeného klienta DHCP."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje MAC adresu."
			},{
				type: "name",
				title: "Přiřazená IP adresa",
				content: "Zobrazuje přidělenou IP adresu klienta DHCP serverem."
			},{
				type: "name",
				title: "Čas zapůjčení",
				content: "Zobrazuje zbývající čas zapůjčení IP adresy klientovi."
			},{
				type: "name",
				title: "Obnovit",
				content: "Kliknutím na tlačítko se aktualizuje seznam klientů DHCP."
			}]
		},

		DDNS: {
			TITLE: "Dynamické DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamická DNS (Domain Name Systém) vám umožňuje přiřadit pevné host jméno a jméno domény k dynamické internetové IP adrese. To je užitečné, když provozujete svoji vlastní webovou stránku, FTP sever nebo jiný server za routerem. Pro začátek se musíte zaregistrovat u poskytovatele služby dynamické DNS, jako je např. www.dyndns.com. Poté vložte vaše registrační údaje."
			},{
				type: "step",
				title: "Nastavení Dynamické DNS",
				content: [
					"1. Vyberte poskytovatele služby DDNS.",
					"2. Zadejte uživatelské jméno a heslo vašeho DDNS účtu.",
					"3. Vložte jméno domény, kterou jste zaregistrovali u poskytovatele služby dynamické DNS.",
					"4. Zvolte časový interval, ve kterém bude odesílán požadavek na update dynamické DNS.",
					"5. Jestliže je váš poskytovatel služby NO-IP, zvolte provázání WAN IP pro zajištění, že jméno domény je provázané s WAN IP tohoto routeru.",
					"6. Klikněte na Login a Uložit."
				]
			},{
				type: "note",
				title:"Poznámka",
				content: "Chcete-li použít nový účet pro DDNS, odhlaste se a poté se znovu přihlašte pomocí nového účtu."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "Dynamické DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamická DNS (Domain Name Systém) vám umožňuje přiřadit pevné host jméno a jméno domény k dynamické internetové IP adrese. To je užitečné, když provozujete svoji vlastní webovou stránku, FTP sever nebo jiný server za routerem. Pro začátek se musíte zaregistrovat u poskytovatele služby dynamické DNS, jako je např. www.dyndns.com. Poté vložte vaše registrační údaje."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Seznám názvů domén",
			CONTENT: [{
				type: "paragraph",
				content: "Tato tabulka zobrazuje jména Dynamických DNS domén, které jsou registrovány k vašemu TP-Link ID."
			},{
				type:"step",
				title: "Registrovat nové jméno domény",
				content: [
					"1. Klikněte na Registrovat.",
					"2. Vložte jméno domény.",
					"3. Klikněte na Uložit."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Statické směrování",
			CONTENT: [{
				type: "paragraph",
				content: "Statické směrování se používá k předdefinování pevné trasy síťových informačních paketů, které mají dorazit ke konkrétnímu hostiteli nebo síti."
			},{
				type: "step",
				title: "Nastavení statického směrování",
				content: [
					"1. Klikněte na Přidat.",
					"2. Místo určení sítě - Zadejte IP adresu v desítkovém zápisu s tečkou pro přiřazení pevné cesty této položky.",
					"3. Maska podsítě - Zadejte masku podsítě v desítkovém zápisu s tečkou k určení síťové a hostitelské části IP adresy.",
					"4. Výchozí brána - Zadejte IP adresu brány v desítkovém zápisu s tečkou pro připojení směrovače k síti nebo hostiteli.",
					"5. Rozhraní - Zvolením LAN nebo WAN specifikujete typ cílové sítě.",
					"6. Popis - Zadejte stručný popis pro tento údaj.",
					"7. Vyberte Povolit.",
					"8. Klikněte na OK."
				]
			},{
				type: "step",
				title: "Úprava nebo odstranění údaje",
				content: "V tabulce klikněte na ikonu Upravit nebo na ikonu Koše u údaje, který chcete upravit nebo odstranit."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Směrovací tabulka systému",
			CONTENT: [{
				type: "paragraph",
				content: "Směrovací tabulka zobrazí všechny platné trasy, které jsou aktuálně používány."
			},{
				type: "paragraph",
				content: "Kliknutím na Obnovit směrovací tabulku aktualizujete."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Nastavení",
			CONTENT: [{
				type: "name",
				title: "Oblast",
				content: "Z rozevírací nabídky vyberte svou zemi. Pokud není vaše země nebo oblast na seznamu, můžete to znamenat, že ve vaší oblasti je použití bezdrátového vysílače omezeno."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Bezdrátová síť 2,4 GHz",
			CONTENT: [{
				type: "name",
				title: "Povolit bezdrátový vysílač",
				content: "Zaškrtnutím tohoto políčka povolíte vysílání bezdrátové sítě na frekvenci 2,4 GHz"
			},{
				type: "name",
				title: "Název bezdrátové sítě (SSID)",
				content: "Můžete ponechat výchozí název sítě (SSID) nebo zadejte nový název (až 32 znaků). Tento údaj rozlišuje velká a malá písmena."
			},{
				type: "name",
				title: "Skrýt identifikátor SSID",
				content: "Zaškrtněte toto políčko, pokud chcete skrýt název 2,4GHz sítě (SSID) v seznamu bezdrátových sítí."
			},{
				type: "name",
				title: "Zabezpečení",
				content: "Vyberte jednu z následujících možností zabezpečení:",
				children: [{
					type: "name",
					title: "Žádné zabezpečení",
					content: "Vyberte tuto možnost, pokud chcete vypnout zabezpečení bezdrátové sítě. Velmi doporučujeme aktivovat zabezpečení bezdrátové sítě pro ochranu bezdrátové sítě před neoprávněným přístupem."
				},{
					type: "name",
					title: "WPA/WPA2-osobní",
					content: "Vyberte tuto možnost a aktivujte metodu standardního ověřování na základě Pre-Shared Key (Předsdílené tajemství) (PSK), rovněž nazývané heslová fráze. Tato možnost je doporučená. Pokud je vybrána, nakonfigurujte následující.",
					children: [{
						type: "name",
						title: "Verze",
						content: "Vyberte verzi zabezpečení pro vaši bezdrátovou síť.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Tato možnost podporuje vícenásobné implementaci standardu WPA (Wi-Fi Protected Access-chráněný přístup k Wi-Fi), jako je například WPA a WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Tato možnost podporuje pouze šifrování TKIP, jež poskytuje dobrou úroveň zabezpečení."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Tato možnost podporuje šifrování AES, jež poskytuje lepší úroveň zabezpečení než WPA-PSK a je doporučeno."
						}]
					},{
						type: "name",
						title: "Šifrování",
						content: "Vyberte typ bezpečnostního šifrování: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), nebo Auto (pro obě možnosti TKIP a AES). NEDOPORUČUJEME používat šifrování TKIP, pokud směrovač pracuje v režimu 802.11n, protože TKIP specifikaci 802.11n nepodporuje. Pokud vyberete možnost TKIP, WPS funkce bude deaktivována."
					},{
						type: "name",
						title: "Heslo",
						content: "Do tohoto políčka zadejte heslo bezdrátové sítě s 8 až 63 znaky ASCII nebo 8 až 64 hexadecimálními znaky."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Enterprise",
					content: "Vyberte tuto možnost, pokud chcete aktivovat pokročilejší metodu ověřování pomocí RADIUS serveru (Remote Authentication Dial In User Service-Uživatelská vytáčená služba pro vzdálenou autentizaci). Pokud vyberete tuto možnost, WPS funkce bude deaktivována.",
					children: [{
						type: "name",
						title: "Verze",
						content: "Vyberte verzi zabezpečení pro vaši bezdrátovou síť.",
						children:[{
							type: "name",
							title: "Auto",
							content: "Tato možnost podporuje vícenásobné implementaci standardu WPA (Wi-Fi Protected Access-chráněný přístup k Wi-Fi), jako je například WPA a WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Tato možnost podporuje pouze šifrování TKIP, jež poskytuje dobrou úroveň zabezpečení."
						},{
							type: "name",
							title: "WPA2",
							content: "Tato možnost podporuje šifrování AES, jež poskytuje lepší úroveň zabezpečení než WPA-PSK a je doporučeno."
						}]
					},{
						type: "name",
						title: "Šifrování",
						content: "Vyberte typ bezpečnostního šifrování: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), nebo Auto (pro obě možnosti TKIP a AES). NEDOPORUČUJEME používat šifrování TKIP, pokud směrovač pracuje v režimu 802.11n, protože TKIP specifikaci 802.11n nepodporuje. Pokud vyberete možnost TKIP, WPS funkce bude deaktivována."
					},{
						type: "name",
						title: "IP adresa RADIUS serveru",
						content: "Zadejte IP adresu RADIUS serveru."
					},{
						type: "name",
						title: "Port RADIUS serveru",
						content: "Zadejte číslo portu RADIUS serveru."
					},{
						type: "name",
						title: "Heslo RADIUS serveru",
						content: "Zadejte sdílené heslo RADIUS serveru."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Vyberte tuto možnost aktivace základní metody ověřování, pokud se některé z vašich klientských zařízení může připojit do bezdrátové sítě pouze přes WEP (Wired Equivalent Privacy - soukromí ekvivalentní drátovým sítím).",
					children: [{
						type: "name",
						title: "Typ",
						content: "Vyberte typ ověřování pro vaši bezdrátovou síť. Výchozí nastavení je Auto, které automaticky volí mezi možností Otevřený systém nebo Sdílený klíč na základě schopnosti a žádosti o přístup bezdrátového klienta."
					},{
						type: "name",
						title: "Formát klíče WEP",
						content: "Použijte formát ASCII nebo hexadecimální. Formát ASCII je kombinací písmen a číslic. Hexadecimální formát je kombinace čísla (0-9) a písmen (A-F, a-f)."
					},{
						type: "name",
						title: "Typ klíče",
						content: "Vyberte délku klíče WEP.",
						children: [{
							type: "name",
							title: "64bitový",
							content: "Umožňuje zadat 10 hexadecimálních číslic (0-9, A-F, a-f) nebo 5 znaků ASCII do pole hodnota WEP."
						},{
							type: "name",
							title: "128bitový",
							content: "Umožňuje zadat 26 hexadecimálních číslic (0-9, A-F, a-f) nebo 13 znaků ASCII do pole hodnota WEP."
						}]
					},{
						type: "name",
						title: "Hodnota klíče",
						content: "Zadejte WEP klíč do příslušného pole."
					}]
				}]
			},{
				type: "name",
				title: "Režim",
				content: "Vyberte režim smíšeného přenosu."
			},{
				type: "name",
				title: "Šířka kanálu",
				content: "Vyberte šířku kanálu (pásma) pro 2,4GHz bezdrátovou síť."
			},{
				type: "name",
				title: "Kanál",
				content: "Vyberte provozní kanál pro 2,4GHz bezdrátovou síť. Doporučuje se ponechat kanál na Automaticky, pokud nemáte problém s přerušovaným bezdrátovým připojením."
			},{
				type: "name",
				title: "Přenosový výkon",
				content: "Vyberte hodnotu výkonu přenosu dat \"Vysoký, Střední nebo Nízký\". Výchozí a doporučená hodnota výkonu je Vysoký."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Bezdrátová síť 5 GHz",
			CONTENT: [{
				type: "name",
				title: "Povolit bezdrátový vysílač",
				content: "Zaškrtnutím tohoto políčka povolíte vysílání bezdrátové sítě na frekvenci 5 GHz"
			},{
				type: "name",
				title: "Název bezdrátové sítě (SSID)",
				content: "Můžete ponechat výchozí název sítě (SSID) nebo zadejte nový název (až 32 znaků). Tento údaj rozlišuje velká a malá písmena."
			},{
				type: "name",
				title: "Skrýt identifikátor SSID",
				content: "Zaškrtněte toto políčko, pokud chcete skrýt název 5GHz sítě (SSID) v seznamu bezdrátových sítí."
			},{
				type: "name",
				title: "Zabezpečení",
				content: "Vyberte jednu z následujících možností zabezpečení:",
				children: [{
					type: "name",
					title: "Žádné zabezpečení",
					content: "Vyberte tuto možnost, pokud chcete vypnout zabezpečení bezdrátové sítě. Velmi doporučujeme aktivovat zabezpečení bezdrátové sítě pro ochranu bezdrátové sítě před neoprávněným přístupem."
				},{
					type: "name",
					title: "WPA/WPA2-osobní",
					content: "Vyberte tuto možnost a aktivujte metodu standardního ověřování na základě Pre-Shared Key (Předsdílené tajemství) (PSK), rovněž nazývané heslová fráze. Tato možnost je doporučená. Pokud je vybrána, nakonfigurujte následující.",
					children: [{
						type: "name",
						title: "Verze",
						content: "Vyberte verzi zabezpečení pro vaši bezdrátovou síť.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Tato možnost podporuje vícenásobné implementaci standardu WPA (Wi-Fi Protected Access-chráněný přístup k Wi-Fi), jako je například WPA a WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Tato možnost podporuje pouze šifrování TKIP, jež poskytuje dobrou úroveň zabezpečení."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Tato možnost podporuje šifrování AES, jež poskytuje lepší úroveň zabezpečení než WPA-PSK a je doporučeno."
						}]
					},{
						type: "name",
						title: "Šifrování",
						content: "Vyberte typ bezpečnostního šifrování: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), nebo Auto (pro obě možnosti TKIP a AES). NEDOPORUČUJEME používat šifrování TKIP, pokud směrovač pracuje v režimu 802.11n, protože TKIP specifikaci 802.11n nepodporuje. Pokud vyberete možnost TKIP, WPS funkce bude deaktivována."
					},{
						type: "name",
						title: "Heslo",
						content: "Do tohoto políčka zadejte heslo bezdrátové sítě s 8 až 63 znaky ASCII nebo 8 až 64 hexadecimálními znaky."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Enterprise",
					content: "Vyberte tuto možnost, pokud chcete aktivovat pokročilejší metodu ověřování pomocí RADIUS serveru (Remote Authentication Dial In User Service-Uživatelská vytáčená služba pro vzdálenou autentizaci). Pokud vyberete tuto možnost, WPS funkce bude deaktivována.",
					children: [{
						type: "name",
						title: "Verze",
						content: "Vyberte verzi zabezpečení pro vaši bezdrátovou síť.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Tato možnost podporuje vícenásobné implementaci standardu WPA (Wi-Fi Protected Access-chráněný přístup k Wi-Fi), jako je například WPA a WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Tato možnost podporuje pouze šifrování TKIP, jež poskytuje dobrou úroveň zabezpečení."
						},{
							type: "name",
							title: "WPA2",
							content: "Tato možnost podporuje šifrování AES, jež poskytuje lepší úroveň zabezpečení než WPA-PSK a je doporučeno."
						}]
					},{
						type: "name",
						title: "Šifrování",
						content: "Vyberte typ bezpečnostního šifrování: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), nebo Auto (pro obě možnosti TKIP a AES). NEDOPORUČUJEME používat šifrování TKIP, pokud směrovač pracuje v režimu 802.11n, protože TKIP specifikaci 802.11n nepodporuje. Pokud vyberete možnost TKIP, WPS funkce bude deaktivována."
					},{
						type: "name",
						title: "IP adresa RADIUS serveru",
						content: "Zadejte IP adresu RADIUS serveru."
					},{
						type: "name",
						title: "Port RADIUS serveru",
						content: "Zadejte číslo portu RADIUS serveru."
					},{
						type: "name",
						title: "Heslo RADIUS serveru",
						content: "Zadejte sdílené heslo RADIUS serveru."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Vyberte tuto možnost aktivace základní metody ověřování, pokud se některé z vašich klientských zařízení může připojit do bezdrátové sítě pouze přes WEP (Wired Equivalent Privacy - soukromí ekvivalentní drátovým sítím).",
					children: [{
						type: "name",
						title: "Typ",
						content: "Vyberte typ ověřování pro vaši bezdrátovou síť. Výchozí nastavení je Auto, které automaticky volí mezi možností Otevřený systém nebo Sdílený klíč na základě schopnosti a žádosti o přístup bezdrátového klienta."
					},{
						type: "name",
						title: "Formát klíče WEP",
						content: "Použijte formát ASCII nebo hexadecimální. Formát ASCII je kombinací písmen a číslic. Hexadecimální formát je kombinace čísla (0-9) a písmen (A-F, a-f)."
					},{
						type: "name",
						title: "Typ klíče",
						content: "Vyberte délku klíče WEP.",
						children:[{
							type: "name",
							title: "64bitový",
							content: "Umožňuje zadat 10 hexadecimálních číslic (0-9, A-F, a-f) nebo 5 znaků ASCII do pole hodnota WEP."
						},{
							type: "name",
							title: "128bitový",
							content: "Umožňuje zadat 26 hexadecimálních číslic (0-9, A-F, a-f) nebo 13 znaků ASCII do pole hodnota WEP."
						}]
					},{
						type: "name",
						title: "Hodnota klíče",
						content: "Zadejte WEP klíč do příslušného pole."
					}]
				}]
			},{
				type: "name",
				title: "Režim",
				content: "Vyberte režim smíšeného přenosu."
			},{
				type: "name",
				title: "Šířka kanálu",
				content: "Vyberte šířku kanálu (pásma) pro 5GHz bezdrátovou síť."
			},{
				type: "name",
				title: "Kanál",
				content: "Vyberte provozní kanál pro 5GHz bezdrátovou síť. Doporučuje se ponechat kanál na Automaticky, pokud nemáte problém s přerušovaným bezdrátovým připojením."
			},{
				type: "name",
				title: "Přenosový výkon",
				content: "Vyberte hodnotu výkonu přenosu dat \"Vysoký, Střední nebo Nízký\". Výchozí a doporučená hodnota výkonu je Vysoký."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		WPS: {	
			TITLE: "PIN kód směrovače",
			CONTENT: [{
				type: "paragraph",
				content: "Ostatní zařízení lze připojit k tomuto směrovači pomocí WPS zadáním PIN kódu."
			},{
				type: "name",
				title: "PIN kód směrovače",
				content: "Je-li tato funkce zapnutá, bezdrátová zařízení se ke směrovači připojují pomocí kódu PIN (Personal Identification Number-osobní identifikační číslo)."
			},{
				type: "name",
				title: "PIN",
				content: "Zobrazuje PIN kód směrovače. Výchozí PIN kód najdete na štítku směrovače. Klikněte na Generovat a vygenerujte nový náhodný kód PIN nebo klikněte na Výchozí pro znovu nastavení výchozího PIN kódu z výroby."
			}]
		},

		WPS_WIZARD: {
			TITLE: "Průvodce WPS",
			CONTENT:[{
				type: "name",
				title: "Tlačítko WPS (doporučeno)",
				content: "Tuto metodu nastavení vyberte chcete-li zapnout funkci WPS pro snadné připojení libovolného zařízení s funkcí WPS k vaší bezdrátové síti pomocí tlačítka WPS nebo virtuálně pomocí tlačítka \"Připojit\" ve webové správě."
			},{
				type: "name",
				title: "PIN",
				content: "Tuto metodu nastavení vyberte, chcete-li zařízení přidat manuálně zadáním čísla PIN WPS bezdrátového zařízení do tohoto políčka a klikněte na tlačítko Připojit."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Bezdrátové stanice - online",
			CONTENT: [{
				type: "name",
				title: "Číslo klienta",
				content: "Zobrazuje číslo připojeného bezdrátového klienta."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje MAC adresu připojeného bezdrátového klienta."
			},{
				type: "name",
				title: "Typ připojení",
				content: "Zobrazuje bezdrátové frekvenční pásmo (2,4 GHz nebo 5 GHz) připojeného bezdrátového klienta."
			},{
				type: "name",
				title: "Zabezpečení",
				content: "Zobrazuje typ zabezpečení připojeného bezdrátového klienta."
			},{
				type: "name",
				title: "Přijaté pakety",
				content: "Zobrazuje počet paketů přijatých připojeným bezdrátovým klientem."
			},{
				type: "name",
				title: "Odeslané pakety",
				content: "Zobrazuje počet paketů odeslaných připojeným bezdrátovým klientem."
			},{
				type: "paragraph",
				content: "Kliknutím na tlačítko Obnovit aktualizujete informace na této stránce."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Nastavení",
			CONTENT: [{
				type: "paragraph",
				content: "Síť pro hosty umožňuje nastavit samostatnou síť se svým názvem bezdrátové sítě (SSID) a heslem, a kterou mohou hosté využívat pro přístup k vaší bezdrátové síti."
			},{
				type: "name",
				title: "Povolit hostům vzájemně se vidět",
				content: "Zaškrtnutím tohoto políčka umožníte, aby se bezdrátová zařízení v síti pro hosty vzájemně viděla."
			},{
				type: "name",
				title: "Povolit hostům přístup do mé místní sítě",
				content: "Zaškrtnutím tohoto políčka umožníte bezdrátovým zařízením v síti pro hosty přístup k vaším sdíleným datům a tiskárnám."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "2,4GHz / 5GHz bezdrátová síť",
			CONTENT: [{
				type: "name",
				title: "Povolit síť pro hosty",
				content: "Zaškrtnutím tohoto tlačítka zapnete funkci Síť pro hosty."
			},{
				type: "name",
				title: "Název bezdrátové sítě (SSID)",
				content: "Můžete ponechat výchozí název sítě pro hosty (SSID) nebo vytvořit nový název (až 32 znaků)."
			},{
				type: "name",
				title: "Skrýt identifikátor SSID",
				content: "Zaškrtněte toto políčko, pokud chcete skrýt identifikátor SSID sítě pro hosty v seznamu bezdrátových sítí."
			},{
				type: "name",
				title: "Zabezpečení",
				content: "Když zvolíte možnost bez aktualizace hesla, vyberte jednu z následujících možností zabezpečení:",
				children: [{
					type: "name",
					title: "Žádné zabezpečení",
					content: "Vyberte tuto možnost, pokud chcete vypnout zabezpečení bezdrátové sítě. Velmi doporučujeme aktivovat zabezpečení bezdrátové sítě pro ochranu sítě pro hosty před neoprávněným přístupem."
				},{
					type: "name",
					title: "WPA/WPA2-osobní",
					content: "Vyberte tuto možnost a aktivujte metodu standardního ověřování na základě Pre-Shared Key (Předsdílené tajemství) (PSK), rovněž nazývané heslová fráze. Pokud je vybrána, nakonfigurujte následující.",
					children: [{
						type: "name",
						title: "Verze",
						content: "Vyberte verzi zabezpečení pro vaši síť pro hosty.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Tato možnost podporuje vícenásobné implementaci standardu WPA (Wi-Fi Protected Access-chráněný přístup k Wi-Fi), jako je například WPA a WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Tato možnost podporuje pouze šifrování TKIP, jež poskytuje dobrou úroveň zabezpečení."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Tato možnost podporuje šifrování AES, jež poskytuje lepší úroveň zabezpečení než WPA-PSK a je doporučeno."
						}]
					},{
						type: "name",
						title: "Šifrování",
						content: "Vyberte typ bezpečnostního šifrování: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), nebo Auto (pro obě možnosti TKIP a AES). NEDOPORUČUJEME používat šifrování TKIP, pokud směrovač pracuje v režimu 802.11n, protože TKIP specifikaci 802.11n nepodporuje. Pokud vyberete možnost TKIP, WPS funkce bude deaktivována."
					}]
			}]},{
				type: "name",
				title: "Heslo",
				content: "Použijte možnost vygenerování náhodného hesla nebo si vytvořte heslo mající 8 až 63 znaků ASCII nebo 8 až 64 hexadecimálních znaků (0-9, a-f, A-F)."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},

		NAT: {
			TITLE: "Brána aplikační vrstvy (ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG umožňuje zapojení vlastních Network Address Translation (NAT) průchodových filtrů do brány, které podporují překlad adresy a portu pro určité protokoly aplikační vrstvy „příkazy/ data“: FTP, TFTP, H323 atd. Doporučuje se povolit ALG."
			},{
				type: "name",
				title: "Povolit FTP ALG",
				content: "Tato volba umožňuje klientům a serverům FTP (File Transfer Protocol) přenos dat přes NAT."
			},{
				type: "name",
				title: "Povolit TFTP ALG",
				content: "Tato volba umožňuje klientům a serverům TFTP (Trivial File Transfer Protocol) přenos dat přes NAT."
			},{
				type: "name",
				title: "Povolit H323 ALG",
				content: "Tato volba umožňuje klientům Microsoft NetMeeting komunikovat přes NAT."
			},{
				type: "name",
				title: "Povolit RTSP ALG",
				content: "Tato volba umožňuje klientům přehrávačů médií komunikovat se servery streamující média přes NAT."
			},{
				type: "name",
				title: "Povolit PPTP průchod",
				content: "Tato volba umožňuje Point-to-Point relacím tunelové propojení prostřednictvím IP sítě a průchod přes směrovač."
			},{
				type: "name",
				title: "Povolit L2TP průchod",
				content: "Tato volba umožňuje Layer 2 Point-to-Point relacím tunelové propojení prostřednictvím IP sítě a průchod přes směrovač."
			},{
				type: "name",
				title: "Povolit IPSec průchod",
				content: "Tato volba umožňuje protokolu IPSec tunelové propojení prostřednictvím IP sítě a průchod přes směrovač. IPSec používá kryptografické bezpečnostní služby k zajištění privátní a bezpečné komunikace přes IP sítě."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Přesměrování portů",
			CONTENT: [{
				type: "paragraph",
				content: "Přesměrování portů se používá k nastavení veřejné služby ve vaší místní síti. Přesměrování je definováno jako externí port a všechny požadavky z Internetu do tohoto externího portu budou přesměrovány na určený počítač, který musí být nakonfigurován se statickou nebo rezervovanou IP adresu."
			},{
				type: "name",
				title: "Typ služby",
				content: "Zobrazuje název vašeho přesměrovaného portu / služby."
			},{
				type: "name",
				title: "Externí port",
				content: "Zobrazuje číslo portu nebo rozsah portů používaných pro přesměrování."
			},{
				type: "name",
				title: "Interní IP adresa",
				content: "Zobrazuje IP adresu počítače, na kterém běží aplikace služby."
			},{
				type: "name",
				title: "Interní port",
				content: "Zobrazuje číslo portu počítače, na kterém běží aplikace služby."
			},{
				type: "name",
				title: "Protokol",
				content: "Zobrazuje protokol používaný pro aplikaci služby: TCP, UDP nebo Všechny (Všechny protokoly podporované směrovačem)."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazuje aktuální stav (zapnuto nebo vypnuto) specifického pravidla filtrování."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti Upravit nebo Odstranit příslušné pravidlo."
			},{
				type: "step",
				title: "Nastavení pravidla pro přesměrování portů",
				content: [
					"1. Klikněte na Přidat.",
					"2. Kliknutím na \"Zobrazit existující služby\" vyberte službu ze seznamu a automaticky se vyplní číslo příslušných portů v polích Externí port a  Interní port. Pokud služba není v seznamu, zadejte číslo externího portu (např. 21) nebo rozsah portů (např.21 až 25). Pokud je Interní port stejný jako Externí port nechte pole prázdné nebo zadejte konkrétní číslo portu (např. 21) v případě, že Externí port je pouze jeden. Zadejte IP adresu počítače, na kterém běží aplikace služby v tečkovaném desítkovém formátu do pole Interní IP adresa.",
					"3. Vyberte protokol pro aplikaci služby: TCP, UDP nebo Všechny zrozevíracího seznamu protokolů.",
					"4. Vyberte Povolit.",
					"5. Klikněte na OK."
				]
			},{
				type: "step",
				title: "Úprava nebo odstranění pravidla virtuálního serveru",
				content: "V tabulce klikněte na ikonu Upravit nebo na ikonu Koše u pravidla, které chcete upravit nebo odstranit."
			},{
				type: "step",
				title: "Odstranění více pravidel",
				content: "Vyberte všechna pravidla, která chcete odstranit a nad tabulkou klikněte na Odstranit."
			},{
				type: "note",
				title: "Poznámka",
				content: "Pokud vaše lokální hostitelské zařízení hostí více než jeden typ dostupných služeb, je třeba vytvořit pravidlo pro každou službu."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Port triggering",
			CONTENT: [{
				type: "paragraph",
				content: "Port triggering se používá, aby předal provoz na určitém portu na konkrétní server v síti LAN."
			},{
				type: "name",
				title: "Aplikace",
				content: "Zobrazuje název aplikace."
			},{
				type: "name",
				title: "Triggering port",
				content: "Zobrazuje odchozí port používaný ke spuštění pravidla filtrování odchozího spojení."
			},{
				type: "name",
				title: "Trigger protokol",
				content: "Zobrazuje protokol používaný pro triggering port. TCP, UDP nebo Všechny (Všechny protokoly podporované směrovačem)."
			},{
				type: "name",
				title: "Externí port",
				content: "Zobrazuje port nebo rozsah portů používaných vzdáleným systémem.  Odezva je pomocí jednoho z těchto portů předána do počítače, který toto pravidlo aktivuje.  Můžete zadat až 5 skupin portů (nebo skupiny portů). Každá skupina portů musí být oddělena \",\" (čárkou), například, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Externí protokol",
				content: "Zobrazuje protokol používaný pro příchozí port. TCP, UDP nebo Všechny (Všechny protokoly podporované směrovačem)."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazuje aktuální stav (zapnuto nebo vypnuto) specifického pravidla filtrování."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti Upravit nebo Odstranit příslušné pravidlo."
			},{
				type: "step",
				title: "Nastavení pravidla pro port triggering",
				content: [{
					type: "note",
					title: "Poznámka",
					content: "Každé pravidlo může být najednou použito pouze jedním zařízením."
				},
					"1. Klikněte na Přidat.",
					"2. Kliknutím na Zobrazit existující aplikace vyberte aplikaci ze seznamu a automaticky se vyplní výchozí hodnoty do příslušných polí . Chcete-li přidat aplikace neuvedené v seznamu, manuálně zadejte Aplikace, Triggering port, Triggering protokol, Externí port a Externí protokol.",	
					"3. Vyberte Povolit.",
					"4. Klikněte na OK."
				]
			},{
				type: "step",
				title: "Úprava nebo odstranění pravidla pro port triggering",
				content: "V tabulce klikněte na ikonu Upravit nebo na ikonu Koše u pravidla, které chcete upravit nebo odstranit."
			},{
				type: "step",
				title: "Úprava několika pravidel pro port triggering",
				content: "V tabulce vyberte všechna pravidla, která chcete odstranit a nad tabulkou klikněte na Odstranit."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "Funkce hostitel DMZ (demilitarizovaná zóna) umožňuje lokálnímu hostiteli přístup k Internetu pro specifickou službu, jako je například hraní her na internetu nebo videokonference. V podstatě DMZ umožňuje jednomu počítači v místní síti (LAN) otevřít všechny porty. Tento počítač musí mít nakonfigurovanou statickou IP adresu a musí mít vypnutou funkci DHCP klienta."
			},{
				type: "step",
				title: "Přiřazení počítače nebo serveru jako DMZ serveru",
				content: [
					"1. Klikněte na Povolit DMZ.",
					"2. V poli IP adresa hostitele DMZ zadejte IP adresu místního počítače, který bude nastavent jako hostitel DMZ.",
					"3. Klikněte na Uložit."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Ve výchozím nastavení je povolena funkce Universal Plug-and-Play (UPnP) umožňující zařízením, jako jsou počítače a zařízení s internetem vzájemné automatické vyhledání a komunikaci v lokální síti."
			},{
				type: "paragraph",
				content: "Seznam služby UPnP zobrazuje informace o zařízení UPnP."
			},{
				type: "name",
				title: "Popis služby",
				content: "Zobrazuje stručný popis lokálního hostitele, který iniciuje požadavek UPnP."
			},{
				type: "name",
				title: "Externí port",
				content: "Zobrazuje externí port, který je otevřen lokálním hostitelem."
			},{
				type: "name",
				title: "Protokol",
				content: "Zobrazuje typ síťového protokolu, který používá lokální hostitel."
			},{
				type: "name",
				title: "Interní IP adresa",
				content: "Zobrazuje IP adresu lokálního hostitele."
			},{
				type: "name",
				title: "Interní port",
				content: "Zobrazuje interní port, který je otevřen lokálním hostitelem."
			},{
				type: "paragraph",
				content: "Kliknutím na Obnovit aktualizujete seznam serverů UPnP."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Nastavení zařízení",
			CONTENT: [{
				type: "paragraph",
				content: "Obrazovka Nastavení zařízení zobrazuje příslušné informace o všech USB zařízení připojených přes USB port."
			},{
				type: "name",
				title: "Prohledat",
				content: "Směrovač obvykle automaticky najde nově připojené zařízení. Pokud nenajde, kliknutím na toto tlačítko se spustí vyhledávání nově připojeného zařízení a obnoví se obrazovka aktualizovanými informacemi."
			},{
				type: "name",
				title: "Jednotka",
				content: "Zobrazuje název USB jednotky."
			},{
				type: "name",
				title: "Kapacita",
				content: "Zobrazuje celkovou kapacitu USB jednotky."
			},{
				type: "name",
				title: "Volné místo",
				content: "Zobrazuje aktuální volnou kapacitu úložného prostoru."
			},{
				type: "name",
				title: "Bezpečně odebrat",
				content: "Kliknutím na toto tlačítko bezpečně odpojíte paměťové USB zařízení dříve než jej fyzicky odpojíte ze směrovače."
			},{
				type: "paragraph",
				content: "Tlačítko Bezpečně odebrat se objeví pouze v případě, že je paměťové zařízení USB připojeno ke směrovači a vy nebudete moci odpojit USB zařízení, když je aktuální jednotka zaneprázdněna."
			},{
				type: "name",
				title: "Aktivní",
				content: "Toto zaškrtávací políčko se zobrazí pouze v případě, že je paměťové zařízení USB připojeno ke směrovači. Touto volbou povolíte sdílení souborů na USB zařízení."
			},{
				type: "step",
				title: "Nastavení souborového serveru",
				content: [
				"1. Připojte paměťové USB zařízení do USB portu směrovače pomocí USB kabelu.",
				"2. Nově připojené USB zařízení by mělo být automaticky nalezeno směrovačem a v části Nastavení zařízení by se měly zobrazit jeho údaje. V opačném případě klikněte na Prohledat.",
				"3. Kliknutím na symbol žárovky povolíte sdílení souborů."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Účet sdílení",
			CONTENT: [{
				type: "name",
				title: "Účet",
				content: "Pro přístup ke sdíleným souborům a složkám můžete vybrat možnost Použít výchozí účet nebo Použít nový účet a vytvořit nový uživatelský účet zadáním následujících údajů."
			},{
				type: "name",
				title: "Uživatelské jméno / heslo",
				content: "Zadejte řetězec 15 alfanumerických znaků, lze využít i speciální znaky ( např. @#$%^&* ). Uživatelské jméno musí začínat písmenem. Tyto údaje rozlišují malá a velká písmena."
			},{
				type: "name",
				title: "Potvrdit heslo",
				content: "Znovu zadejte heslo kvůli možnému překlepu. Tento údaj rozlišuje velká a malá písmena."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Nastavení sdílení",
			CONTENT: [{
				type: "name",
				title: "Název síťového/mediálního serveru",
				content: "Zobrazuje název používaný pro přístup k paměťovému zařízení USB."
			},{
				type: "name",
				title: "Povolit",
				content: "Vyberte pro povolení metody přístupu."
			},{
				type: "name",
				title: "Metoda přístupu",
				content: "Existují tři metody přístupu, které umožňují přístup k připojenému paměťovému USB zařízení. Můžete si vybrat jednu nebo více metod přístupu zaškrtnutím příslušného políčka.",
				children: [{
					type: "name",
					title: "Okolní počítače",
					content: "Pokud je tato možnost aktivována, mohou uživatelé ve vaší síti přistupovat k paměťovému USB zařízení pomocí přidělené IP adresy (např. \\\\192.168.0.1)."
				},{
					type: "name",
					title: "FTP",
					content: "Pokud je aktivována tato možnost, FTP klienti v místní síti mohou přistupovat k paměťovému USB zařízení pomocí přidělené IP adresy, za níž následuje číslo portu FTP serveru (např ftp://192.168.0.1:21)"
				},{
					type: "name",
					title: "FTP (Přes Internet)",
					content: "Pokud je aktivována tato možnost, uživatelé mohou přistupovat k paměťovému USB zařízení přes FTP pomocí internetu. Tato funkce podporuje stahování i nahrávání souborů. Chcete-li změnit číslo portu FTP serveru, zadejte číslo portu a kliknutím na tlačítko Uložit se změny uloží."
				}]
			},{
				type: "name",
				title: "Odkaz",
				content: "Zobrazuje adresu pro přístup k paměťovému zařízení USB."
			},{
				type: "name",
				title: "Port",
				content: "Zobrazí číslo portu serveru FTP. Použijte výchozí hodnotu 21 nebo hodnotu mezi 1024 a 65535."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Sdílení složek",
			CONTENT: [{
				type: "name",
				title: "Sdílet vše",
				content: "Je-li aktivní, sdílíte všechny soubory a složky, je-li vypnutá, sdílíte pouze vybrané složky."
			},{
				type: "name",
				title: "Povolit ověřování",
				content: "Doporučujeme zapnout tuto funkci, která zajišťuje uživatelům přístup ke sdíleným složkám po zadání uživatelského jména a hesla."
			},{
				type: "name",
				title: "Název složky",
				content: "Zobrazuje název sdílené složky."
			},{
				type: "name",
				title: "Cesta ke složce",
				content: "Zobrazuje cestu ke sdílené složce."
			},{
				type: "name",
				title: "Sdílení médií",
				content: "Označuje, zda sdílená složka má povolené sdílení médií nebo ne."
			},{
				type: "name",
				title: "Název jednotky",
				content: "Zobrazuje název sdílené jednotky."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazuje stav sdílené složky pomocí indikátoru žárovky."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti Upravit nebo Odstranit příslušnou sdílenou složku."
			},{
				type: "name",
				title: "Procházet",
				content: "Slouží k vyhledávání sdílených složek."
			},{
				type: "name",
				title: "Povolit přístup klientům sítě pro hosty",
				content: "Umožňuje klientům sítě pro hosty přístup ke sdíleným složkám."
			},{
				type: "name",
				title: "Povolit ověřování",
				content: "Je-li zapnuta, uživatelé mohou přistupovat ke sdíleným složkám pouze s platným uživatelským jménem a heslem."
			},{
				type: "name",
				title: "Povolit možnost zápisu",
				content: "Umožňuje uživatelům provádět změny obsahu sdílené složky."
			},{
				type: "name",
				title: "Povolit sdílení médií",
				content: "Vyberte pro povolení sdílení médií."
			},{
				type: "name",
				title:"Obnovit",
				content: "Kliknutím aktualizujete seznam sdílených složek."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Tiskový server",
			CONTENT: [{
				type: "name",
				title:"Tiskový server",
				content: "Kliknutím na Zapnout povolíte funkci tiskového serveru."
			},{
				type: "name",
				title:"Název tiskárny",
				content: "Zobrazuje název vaší tiskárny připojené ke směrovači."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Rodičovská kontrola",
			CONTENT: [{
				type: "paragraph",
				content: "Prostřednictvím rodičovské kontroly můžete blokovat nevhodné, explicitní a škodlivé webové stránky omezit přístup na určitou denní dobu (například Facebook nebo YouTube během času na domácí úkol) a zároveň chránit všechna zařízení v domácí síti proti malwaru a phishingu prostřednictvím jednoho centrálního řídícího bodu."
			},{
				type: "name",
				title: "Rodičovská kontrola",
				content: "Kliknutím na Zapnout povolíte funkci rodičovské kontroly."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Zařízení pod rodičovskou kontrolou",
			CONTENT: [{
				type: "name",
				title: "Název zařízení",
				content: "Zobrazuje název všech připojených klientských zařízení, která jsou v současné době pod rodičovskou kontrolou."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje MAC adresu všech připojených klientských zařízení, která jsou v současné době pod rodičovskou kontrolou."
			},{
				type: "name",
				title: "Doba přístupu k internetu",
				content: "Zobrazuje omezení přístupu v časových intervalech.Časový harmonogram se projeví na základě systémového času routeru, který může být nastaven v \"Systémové nástroje -> Nastavení času\"."
			},{
				type: "name",
				title: "Popis",
				content: "Zobrazuje stručný popis připojeného zařízení."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazuje aktuální stav (zapnuto nebo vypnuto) rodičovské kontroly příslušného zařízení."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti Upravit nebo Odstranit příslušného zařízení."
			},{
				type: "step",
				title: "Omezení pro nové klientské zařízení",
				content: [
					"1. Klikněte na Přidat.",
					"2. Klikněte na Zobrazit existující zařízení a ze Seznamu zařízení s přístupem vyberte připojené zařízení  nebo manuálně přidejte zařízení, které není připojeno, zadáním Názvu zařízení a jeho MAC adresy.",
					"3. Klikněte na ikonu Doba přístupu k internetu a určete časový interval, po který platí omezení.",
					"4. Do pole Popis zadejte stručný popis. (Nepovinné)",
					"5. Vyberte Povolit.",
					"6. Klikněte na OK."
				]
			},{
				type: "paragraph",
				content: "Chcete-li upravit nebo odstranit rodičovskou kontrolu, jednoduchým kliknutím na ikonu Upravit  můžete údaj upravit nebo kliknutím na ikonu Odstranit příslušnou položku odstraníte."
			},{
				type: "paragraph",
				content: "Chcete-li smazat více položek, vyberte všechny položky a klikněte na tlačítko Odstranit nad tabulkou."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Omezení obsahu",
			CONTENT: [{
				type: "name",
				title: "Seznam zakázaného obsahu",
				content: "Obsahuje klíčová slova, která jsou použita k zablokování přístupu na webové stránky z klientských zařízení uvedených v seznamu rodičovské kontroly.",
				children: [{
					type: "paragraph",
					content: "Kliknutím na Přidat nové klíčové slova přidáte nové klíčové slovo na černou listinu. Chcete-li klíčové slovo odstranit, klikněte na ikonu (-) u klíčového slova, které chcete odstranit."
				}]
			},{
				type: "name",
				title: "Seznam povoleného obsahu",
				content: "Obsahuje webové adresy, jež mají na seznamu rodičovské kontroly klientských zařízení povolen přístup.",
				children: [{
					type: "paragraph",
					content: "Kliknutím na Přidat nový název domény přidáte webovou stránku na seznam povolených adres. Chcete-li webovou stránku odstranit, klikněte na ikonu (-) u webové stránky, kterou chcete odstranit."
				}]
			},{
				type: "paragraph",
				content: "Klíčová slova mohou být také názvy domén, např. www.mail.google.com nebo www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "Technologie Quality of Service (QoS) pomáhá upřednostňovat internetový provoz podle vašich potřeb. V seznamu pravidel QoS můžete určit prioritu pro jednotlivá zařízení nebo aplikace."
			},{
				type: "name",
				title: "Povolit QoS",
				content: "Zaškrtnutím tohoto políčka zapnete funkci QoS."
			},{
				type: "name",
				title: "Šířka pásma uploadu",
				content: "Zadejte maximální šířku pásma uploadu povolenou vaším poskytovatelem internetových služeb."
			},{
				type: "name",
				title: "Šířka pásma stahování",
				content: "Zadejte maximální šířku pásma stahování povolenou vaším poskytovatelem internetových služeb."
			},{
				type: "name",
				title: "Vysoká priorita",
				content: "Zadejte procento pro přenos dat vysoké priority."
			},{
				type: "name",
				title: "Střední priorita",
				content: "Zadejte procento pro přenos dat střední priority."
			},{
				type: "name",
				title: "Nízká priorita",
				content: "Zadejte procento pro přenos dat nízké priority."
			},{
				type: "note",
				title: "Poznámka",
				content: "Maximální hodnota (procento) všech priorit by měla být 1."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		QOS_RULE: {
			TITLE: "Seznam pravidel QoS",
			CONTENT: [{
				type: "name",
				title: "Typ",
				content: "Vyberte typ, který chcete přidat seznam pravidel QoS."
			},{
				type: "step",
				title: "Nastavení pravidla pro vysokou/střední/nízkou prioritu podle zařízení",
				content: [
					"1. Klikněte na Přidat.",
					"2. Vyberte Podle zařízení.",
					"3. Klikněte na \"Zobrazit existující zařízení\" a ze Seznamu zařízení s přístupem vyberte požadované zařízení nebo můžete zadat název zařízení a jeho MAC adresu manuálně do polí Název zařízení a MAC adresa.",
					"4. Klikněte na OK."
				]
			},{
				type: "step",
				title: "Nastavení pravidla pro vysokou/střední/nízkou prioritu podle aplikace",
				content: [
					"1. Klikněte na Přidat.",
					"2. Vyberte Podle aplikace.",
					"3. Vyberte požadovanou aplikaci ze seznamu aplikací, nebo můžete přizpůsobit aplikaci konfigurací názvu, protokolu a cílového portu (1-65535) do příslušných polí, můžete zadat jeden port, více porty nebo rozsah, pro oddělení použitje čárky (např 21,36-105,111).",
					"4. Klikněte na OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Upgrade databáze",
			CONTENT: [{
				type: "name",
				title: "Nový databázový soubor",
				content: "Klikněte na Procházet a vyhledejte svůj nový databázový soubor. Kliknutím na Upgradovat aktualizujete svou databázi na novější verzi."
			},{
				type: "name",
				title: "Verze databáze",
				content: "Zobrazí aktuální verzi databáze."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Brána firewall",
			CONTENT: [{
				type: "name",
				title: "SPI Firewall",
				content: "Stateful Packet Inspection firewall (SPI) zabraňuje kybernetickým útokům a ověřuje přenos dat, která procházejí přes směrovač na základě protokolu."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "Ochrana před Dos útoky",
			CONTENT: [{
				type: "name",
				title: "Ochrana před Dos útoky",
				content: "Ochrana před útoky s cílem způsobit odmítnutí služby (DoS), chrání místní síť (LAN) proti útokům DoS způsobující přehlcení vaší sítě požadavky na server."
			},{
				type: "name",
				title: "Filtrování ICMP-FLOOD útoků",
				content: "Zapněte pro ochranu před záplavovými ICMP útoky.",
				children: [{
					type: "name",
					title: "Vypnout",
					content: "Žádná ochrana."
				},{
					type: "name",
					title: "Nízké",
					content: "Nízká úroveň ochrany a malý vliv na výkon směrovače."
				},{
					type: "name",
					title: "Střední",
					content: "Střední úroveň ochrany a střední vliv na výkon směrovače."
				},{
					type: "name",
					title: "Vysoké",
					content: "Vysoká úroveň ochrany, ale znatelný vliv na výkon směrovače."
				}]
			},{
				type: "name",
				title: "Filtrování UDP-FLOOD útoků",
				content: "Zapněte pro ochranu před záplavovými UDP útoky."
			},{
				type: "name",
				title: "Filtrování TCP-SYN-FLOOD útoků",
				content: "Zapněte pro ochranu před záplavovými TCP-SYN útoky."
			},{
				type: "name",
				title: "Ignorovat paket ping z portu WAN",
				content: "Zapnout ignorování ping paketů z portu WAN"
			},{
				type: "name",
				title: "Zakázat paket ping z portu LAN",
				content: "Zapnout zákaz ping paketů z portu WAN"
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Seznam blokovaných hostitelů DoS útoků",
			CONTENT: [{
				type: "name",
				title: "Seznam blokovaných hostitelů DoS útoků",
				content: "obsahuje IP adresu a MAC adresu zablokovaných zdrojů DoS útoku."
			},{
				type: "step",
				title: "Odstranění položky",
				content: "V seznamu hostitelů vyberte položku, kterou chcete odstranit a nad tabulkou klikněte na Odstranit."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Řízení přístupu",
			CONTENT: [{
				type: "paragraph",
				content: "Řízení přístupu se používá pro povolení nebo blokování konkrétních počítačů a dalších zařízení v přístupu k síti. Když je zařízení blokováno, pak nemůže komunikovat s jiným zařízením v síti ani nelze přistoupit k Internetu."
			},{
				type: "paragraph",
				content: "Chcete-li použít řízení přístupu, povolte tuto funkci a vyplňte seznam blokovaných nebo povolených zařízení. Pokud je funkce Řízení přístupu vypnuta, všechna zařízení, včetně těch na seznamu blokovaných, mají povoleno připojit se."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Režim přístupu",
			CONTENT: [{
				type: "name",
				title: "Seznam zakázaného obsahu",
				content: "Přístup do vaší sítě bude odepřen pouze zařízením na seznamu blokovaných zařízení."
			},{
				type: "name",
				title: "Seznam povoleného obsahu",
				content: "Přístup do vaší sítě bude povolen pouze zařízením na seznamu povolených zařízení."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Zařízení online",
			CONTENT: [{
				type: "name",
				title: "Název zařízení",
				content: "Zobrazuje název připojeného zařízení."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazuje IP adresu připojeného zařízení."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje MAC adresu připojeného zařízení."
			},{
				type: "name",
				title: "Typ připojení",
				content: "Zobrazuje typ připojení připojeného zařízení."
			},{
				type: "step",
				title: "Blokování zařízení",
				content: "V tabulce \"Online zařízení\" ve sloupci Upravit klikněte na ikonu Blokovat u zařízení, které chcete blokovat."
			},{
				type: "step",
				title: "Blokování více zařízení",
				content: "V tabulce \"Online zařízení\" vyberte všechna zařízení, která chcete blokovat a nad tabulkou klikněte na Blokovat. Zařízení bude automaticky přidáno na seznam blokovaných zařízení."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Seznam blokovaných/povolených zařízení",
			CONTENT: [{
				type: "step",
				title: "Přidání zařízení na seznam blokovaných/povolených zařízení",
				content: [
					"1. Klikněte na Přidat.",
					"2. Zadejte  Název zařízení.",
					"3. Zadejte MAC adresu zařízení.",
					"4. Klikněte na OK."
				]
			},{
				type: "step",
				title: "Úprava nebo odstranění zařízení v seznamu blokovaných/povolených zařízení",
				content: "V tabulce blokovaných/povolených zařízení klikněte na ikonu Upravit nebo na ikonu Koše u zařízení, které chcete upravit nebo odstranit."
			},{
				type: "step",
				title: "Odstranění více zařízení ze seznamu blokovaných/povolených zařízení",
				content: "V tabulce se seznamem blokovaných/povolených zařízení vyberte všechna zařízení, která chcete odstranit a nad seznamem klikněte na Odstranit."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Nastavení",
			CONTENT: [{
				type: "paragraph",
				content: "Vazba ARP (Address Resolution Protocol) se používá pro řízení přístupu konkrétního počítače v místní síti (LAN) vazbou IP adresy na MAC adresu zařízení. Vazba ARP také brání jiným zařízením používat určité IP adresy."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "Seznam ARP",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje MAC adresy a IP adresy aktuálně připojených zařízení."
			},{
				type: "name",
				title: "Počet položek ARP",
				content: "Zobrazuje celkový počet zařízení, která jsou v aktuálně ke směrovači připojena."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje MAC adresu připojeného zařízení."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazuje IP adresu přidělenou k připojenému zařízení."
			},{
				type: "name",
				title: "Svázáno",
				content: "Označuje, zda MAC adresy a IP adresy jsou nebo nejsou svázány."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti Vázat nebo Odstranit příslušnou položku v seznamu."
			},{
				type: "note",
				title: "Poznámka",
				content: "Jednu IP adresu nemůžete vázat na více než jednu MAC adresu."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Seznam vazeb",
			CONTENT: [{
				type: "step",
				title: "Nastavení zařízení s vazbou ARP",
				content: [
					"1. Klikněte na Přidat.",
					"2. Zadejte MAC adresu zařízení.",
					"3. Zadejte IP adresu, kterou chcete vázat na výše uvedenou MAC adresu.",
					"4. Zadejte Popis tohoto zařízení. (Nepovinné)",
					"5. Vyberte Povolit.",
					"6. Klikněte na OK."
				]
			},{
				type: "step",
				title: "Úprava nebo odstranění položky",
				content: "V seznamu vazeb klikněte na ikonu Upravit nebo na ikonu Odstranit u položky, kterou chcete upravit nebo odstranit."
			},{
				type: "step",
				title: "Odstranění více položek",
				content: "V seznamu vazeb vyberte všechny položky, které chcete odstranit a nad seznamem I klikněte naOdstranit."
			}]
		},
		
		IPV6: {
			TITLE: "Internetu",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Vyberte, pokud chcete zapnout nebo vypnout funkci směrovače IPv6."
			},{
				type: "title",
				title: "Typ připojení k Internetu: Statická IP adresa",
			},{
				type: "name",
				title: "Statická IP adresa",
				content: "Tento typ vyberte, pokud váš poskytovatel internetových služeb používá přidělování statických IPv6 adres."
			},{
				type: "name",
				title: "IPv6 adresa/ výchozí brána / primární DNS / sekundární DNS",
				content: "Zadejte tyto parametry, které máte od poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Velikost MTU",
				content: "Výchozí a typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro většinu ethernetových sítí je 1 500 bajtů. Není doporučeno měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
			},{
				type: "title",
				title: "Typ připojení k Internetu: Dynamická IP adresa:",
			},{
				type: "name",
				title: "Dynamická IP adresa",
				content: "Tento typ vyberte, pokud váš poskytovatel internetových služeb používá přidělování dynamických IPv6 adres."
			},{
				type: "name",
				title: "IPv6 adresa / primární DNS / sekundární DNS",
				content: "Tyto parametry jsou automaticky přiřazeny DHCPv6 serverem vašeho poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Obnovit",
				content: "Kliknutím na toto tlačítko získáte nové parametry IPv6 adresy ze serveru DHCPv6 poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Uvolnit",
				content: "Kliknutím na toto tlačítko uvolníte všechny IPv6 adresy přiřazené DHCPv6 serverem poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Získat IPv6 adresu",
				content: "Vyberte DHCPv6 získat nedočasnou adresu IPv6 nebo SLAAC IPv6 adresa generovat z routeru pomocí speciálního paketu, podle vašeho ISP."
			},{
				type: "name",
				title: "Delegace prefixu",
				content: "Vyberte Povolit Získat Prefix Delegation od serveru DHCPv6 Vašeho ISP, nebo Zakázat určení předpony adresy ručně. Klienti v síti LAN bude generovat adresu IPv6 s touto předponou."
			},{
				type: "name",
				title: "Adresa DNS",
				content: "Vyberte „Získat dynamicky od poskytovatele internetových služeb“ nebo „Použít tuto adresu DNS“. Pokud vyberete „Použít tuto adresu DNS“, manuálně zadejte adresu DNS od vašeho poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Primární DNS / sekundární DNS",
				content: "Zadejte tyto parametry manuálně nebo dynamicky je získáte dynamicky od poskytovatele internetových služeb."
			},{
				type: "title",
				title: "Typ připojení k Internetu: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Tento typ vyberte, pokud váš poskytovatel internetových služeb používá PPPoEv6 a poskytl vám uživatelské jméno a heslo."
			},{
				type: "name",
				title: "Uživatelské jméno / heslo",
				content: "Zadejte tyto parametry, které máte od poskytovatele internetových služeb."
			},{
				type: "name",
				title: "IPv6 adresa",
				content: "Bude automaticky přiřazena serverem DHCPv6 poskytovatele internetových služeb po zadání uživatelského jména a hesla a kliknutí na tlačítko Připojit."
			},{
				type: "name",
				title: "Adresa DNS",
				content: "Vyberte „Získat dynamicky od poskytovatele internetových služeb“ nebo „Použít tuto adresu DNS“. Pokud vyberete „Použít tuto adresu DNS“, manuálně zadejte adresu DNS od vašeho poskytovatele internetových služeb."
			},{
				type: "name",
				title: "Získat IPv6 adresu",
				content: "Vyberte DHCPv6 získat nedočasnou adresu IPv6 nebo SLAAC IPv6 adresa generovat z routeru pomocí speciálního paketu nebo zadejte IPv6 ručně, podle vašeho ISP."
			},{
				type: "name",
				title: "Delegace prefixu",
				content: "Vyberte Povolit Získat Prefix Delegation od serveru DHCPv6 Vašeho ISP, nebo Zakázat určení předpony adresy ručně. Klienti v síti LAN bude generovat adresu IPv6 s touto předponou."
			},{
				type: "name",
				title: "Připojit",
				content: "Kliknutím na toto tlačítko se připojíte k internetu."
			},{
				type: "name",
				title: "Odpojit",
				content: "Kliknutím na toto tlačítko se odpojíte od internetu."
			},{
				type: "title",
				title: "Typ připojení k Internetu: Tunelové propojení 6to4"
			},{
				type: "name",
				title: "Tunelové propojení 6to4",
				content: "Tento typ vyberte, pokud váš poskytovatel internetových služeb používá metodu tunelové propojení 6to4 pro přidělení adresy."
			},{
				type: "name",
				title: "IPv4 adresa / IPv4 maska podsítě / IPv4 výchozí brána / adresa tunelového propojení",
				content: "Tyto parametry budou dynamicky generovány informacemi IPv4 WAN portu po kliknutí na tlačítko Připojit."
			},{
				type: "name",
				title: "Použít následující DNS server",
				content: "Zaškrtněte políčko Ručně zadat primární DNS a / nebo sekundární DNS dle Vašeho poskytovatele připojení k Internetu."
			},{
				type: "name",
				title: "Připojit",
				content: "Kliknutím na toto tlačítko se připojíte k internetu."
			},{
				type: "name",
				title: "Odpojit",
				content: "Kliknutím na toto tlačítko se odpojíte od internetu."
			},{
				type: "title",
				title: "Typ připojení k Internetu: Pass Through (Most)"
			},{
				type: "paragraph",
				content: "Tento typ vyberte, pokud váš poskytovatel internetových služeb používá Pass Through (Bridge) nasazení sítě. U tohoto typu, nejsou poskytovány žádné parametry a nejsou potřeba žádné konfigurace."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Kromě Průchodu (Mostu), ostatních 6 typů připojení k internetu vyžaduje konfiguraci parametrů IPv6 sítě LAN."
			},{
				type: "name",
				title: "Typ přiřazení",
				content: "Vyberte odpovídající typ podle vašeho poskytovatele internetových služeb.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Chcete-li automaticky přidělovat IP adresy klientům v síti LAN.",
					children: [{
						type: "name",
						title: "Prefix adresy",
						content: "Zadejte prefix adresy, jak je uvedeno vaším poskytovatel internetových služeb."
					},{
						type: "name",
						title: "Čas uvolnění",
						content: "Znamená čas, po který přidělená IP adresa zůstává platnou. Ponechte výchozích  86 400 sekund, nebo pokud to vyžaduje váš poskytovatel internetových služeb, hodnotu změňte."
					},{
						type: "name",
						title: "adresa",
						content: "Je IP adresa automaticky přidělená serverem DHCPv6 poskytovatele internetových služeb."
					}]
				},{
					type: "name",
					title: "SLAAC+ Bezstavové DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefix adresy",
						content: "Zadejte prefix adresy, jak je uvedeno vaším poskytovatel internetových služeb."
					},{
						type: "name",
						title: "adresa",
						content: "IP adresa automaticky přidělená od ISP."
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefix adresy",
						content: "Zadejte prefix adresy, jak je uvedeno vaším poskytovatel internetových služeb."
					},{
						type: "name",
						title: "adresa",
						content: "IP adresa automaticky přidělená od ISP."
					}]
				}]
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "Klonování MAC adresy",
			CONTENT: [{
				type: "name",
				title: "Použít výchozí MAC adresu",
				content: "NEMĚŇTE výchozí MAC adresu směrovače, v případě, že poskytovatel internetových služeb neváže přidělenou IP adresu na MAC adresu."
			},{
				type: "name",
				title: "Použít aktuální MAC adresu počítače",
				content: "Zkopírujete aktuální MAC adresu počítače, který je připojen ke směrovači, v případě, že poskytovatel internetových služeb váže přidělenou IP adresu na MAC adresu tohoto počítače."
			},{
				type: "name",
				title: "Použít vlastní MAC adresu",
				content: "Zadejte MAC adresu manuálně, v případě, že poskytovatel internetových služeb váže přidělenou IP adresu na tuto konkrétní MAC adresu."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Nastavení času",
			CONTENT: [{
				type: "step",
				title: "Automatická synchronizace času",
				content: [
					"1. V poli Nastavit čas vyberte Získat automaticky z internetu.",
					"2. Z rozevírací nabídky vyberte místní časové pásmo.",
					"3. V poli NTP Server I zadejte IP adresu nebo název domény vašeho požadovaného NTP serveru.",
					"4. V poli NTP Server II zadejte IP adresu nebo název domény druhého NTP serveru. (Nepovinné)",
					"5. Klikněte na Získat.",
					"6. Klikněte na Uložit."
				]
			},{
				type: "step",
				title: "Manuální nastavení data a času",
				content: [
					"1. V poli Nastavit čas vyberte Manuálně.",
					"2. Zadejte aktuální Datum.",
					"3. Zadejte aktuální Čas (v 24hodinovém formátu, např. 16:00 je 04:00PM).",
					"4. Klikněte na Uložit."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Letní čas",
			CONTENT: [{
				type: "step",
				title: "Nastavení letního času",
				content: [
					"1. Vyberte Povolit letní čas.",
					"2. Vyberte správné datum a čas přechodu na letní čas ve vašem časovém pásmu.",
					"3. Vyberte správné datum a čas přechodu na zimní čas ve vašem časovém pásmu.",
					"4. Klikněte na Uložit."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Diagnostika",
			CONTENT: [{
				type: "paragraph",
				content: "Směrovač je vybaven nástroji Ping a Traceroute, které vám pomohou vyřešit problémy s připojením k síti. Nástroj Ping odesílá pakety na cílovou IP adresu nebo název domény a zaznamenává výsledky, jako je například počet odeslaných/přijatých paketů a dobu obousměrného zpoždění. Nástroj Traceroute odesílá pakety na cílovou IP adresu nebo název domény a zobrazuje počet hopů (skoků) a čas dosažení cíle."
			},{
				type: "paragraph",
				content: "Můžete použít nástroje ping a traceroute pro lokální zařízení pomocí IP adresy nebo názvu domény, jako je google.com, yahoo.com, atd."
			},{
				type: "step",
				title: "Diagnostika pomocí nástroje Ping",
				content: [
					"1. Zadejte cílovou IP adresu nebo název domény.",
					"2. Kliknutím na ikonu šipky otevřete rozšířenou nabídku a zadejte  počet příkazů ping a velikost paketu příkazu ping. (Nepovinné)",
					"3. Klikněte na Spustit."
				]
			},{
				type: "step",
				title: "Diagnostika pomocí nástroje Traceroute",
				content: [
					"1. Zadejte cílovou IP adresu nebo název domény.",
					"2. Kliknutím na ikonu šipky otevřete rozšířenou nabídku a do pole  Traceroute Max TTL(Time to Live) zadejte počet hopů (skoků) (kterých může být dosaženo). Výchozí číslo je 20. (Nepovinné)",
					"3. Klikněte na Spustit."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Upgrade firmwaru",
			CONTENT: [{
				type: "paragraph",
				content: "Než začněte upgradovat firmware směrovače, budete muset stáhnout na svůj počítač nejnovější verzi firmwaru ze stránek podpory společnosti <a class=\"link\" target=\"_blank\" href=\"http://www.tp-link.com/cz/Support/\">TP-Link Podpora</a>."
			},{
				type: "step",
				title: "DŮLEŽITÉ: Chcete-li předejít selhání upgradu, učiňte následující:",
				content: [
					"Ujistěte se, že soubor poslední verze firmwaru je určen pro danou verzi hardwaru (jak je uvedeno na stránce Upgrade firmwaru).",
					"Ujistěte se, spojení mezi směrovačem a počítačem je stabilní. NEDOPORUČUJE SE upgradovat firmware při bezdrátovém připojení.",
					"Abyste zabránili ztrátě dat, ujistěte se, že jste před upgradem firmwaru odstranili paměťové USB zařízení připojené ke směrovači.",
					"Zálohujte si konfiguraci směrovače.",
					"V průběhu upgradu firmwaru nevypínejte směrovač."
				]
			},{
				type: "step",
				title: "Upgrade firmwaru směrovače",
				content: [
					"1. Klikněte na tlačítko Procházet.",
					"2. Vyhledejte stažený soubor firmwaru.",
					"3. Klikněte na Aktualizovat."
				]
			},{
				type: "paragraph",
				content: "Proces upgradu trvá několik minut. Během upgradování NEVYPÍNEJTE směrovač."
			}]
		},
		
		BACKUP: {	
			TITLE: "Záloha",
			CONTENT: [{
				type: "paragraph",
				content: "Doporučuje se zálohovat aktuální konfiguraci, v případě potřeby obnovení systému do předchozího stavu nebo z továrního nastavení."
			},{
				type: "paragraph",
				content: "Kliknutím na tlačítko Zálohovat uložíte aktuální konfiguraci do počítače. Uložte soubor se zálohou na bezpečné místo, ze kterého můžete načíst a obnovit směrovač později, v případě potřeby."
			}]
		},
		
		RESTORE: {
			TITLE: "Obnova",
			CONTENT: [{
				type: "step",
				title: "Obnovení ze zálohy",
				content: [
					"1. Klikněte na tlačítko Procházet.",
					"2. Vyhledejte a vyberte soubor se zálohou.",
					"3. Klikněte na tlačítko Obnovit."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Obnova do výchozího továrního nastavení",
			CONTENT: [{
				type: "paragraph",
				content: "Kliknutím na Obnova do výrobního nastavení obnovíte nastavení směrovače do výchozího nastavení z výroby."
			},{
				type: "note",
				title: "Poznámka",
				content: [
					"1. Obnova do továrního nastavení smaže veškerá nastavení, které jste v routeru nakonfigurovali. Pro přihlášení na stránku správy routeru, použijte výchozí uživatelské jméno a heslo: admin.",
					"2. Prosím nevypínejte router během procesu zálohování nebo obnovení."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Správa účtu",
			CONTENT: [{
				type: "paragraph",
				content: "Na této stránce můžete změnit své přihlašovací jméno a/nebo heslo a nastavit e-mailovou adresu pro obnovení hesla."
			},{
				type: "name",
				title: "Staré uživatelské jméno",
				content: "Zadejte své aktuální uživatelské jméno."
			},{
				type: "name",
				title: "Staré heslo",
				content: "Zadejte své aktuální heslo."
			},{
				type: "name",
				title: "Nové uživatelské jméno",
				content: "Zadejte své nové uživatelské jméno."
			},{
				type: "name",
				title: "Nové heslo",
				content: "Zadejte své nové heslo."
			},{
				type: "name",
				title: "Potvrdit nové heslo",
				content: "Zadejte své nové heslo znovu."
			},{
				type: "note",
				title: "Poznámka",
				content: "Pokud se rozhodnete změnit aktuální uživatelské jméno a heslo pro přihlášení ke směrovači, zapište si své nové přihlašovací údaje na bezpečné místo."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Obnovení hesla",
			CONTENT: [{
				type: "name",
				title: "Zapnout obnovení hesla",
				content: "Je doporučeno povolit funkci Obnovy hesla, která Vám pomůže obnovit své uživatelské jméno a heslo pomocí emailu."
			},{
				type: "name",
				title: "Od",
				content: "Zadejte platnou e-mailovou adresu, která bude použita pro odchozí e-mail."
			},{
				type: "name",
				title: "Komu",
				content: "Zadejte platnou e-mailovou adresu, která bude použita pro příchozí e-mail."
			},{
				type: "name",
				title: "SMTP server",
				content: "Zadejte adresu SMTP serveru, který router použije k odeslání ověřovacího kódu prostřednictvím e-mailu."
			},{
				type: "name",
				title: "Povolit ověřování",
				content: "Vyberte Povolit ověřování, pokud odchozí e-mailový server vyžaduje ověření pro odesílání e-mailů a vyplňte uživatelské jméno a heslo do příslušných polí. Tyto údaje rozlišují malá a velká písmena."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Místní správa",
			CONTENT: [{
				type: "paragraph",
				content: "Tato sekce umožňuje omezit počet klientských zařízení v místní síti LAN v přístupu ke směrovači prostřednictvím ověřování MAC adres."
			},{
				type: "name",
				title: "Přístup pro všechna zařízení připojená k místní síti (LAN)",
				content: "Zapněte tuto funkci, pokud chcete povolit lokální správu ze všech zařízení připojených k místní síti (LAN). Pokud bude vypnutá, povolená bude správa jen z konkrétních zařízení."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje MAC adresu zařízení s povoleným přístupem."
			},{
				type: "name",
				title: "Popis",
				content: "Zobrazuje popis zařízení s povoleným přístupem."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazuje aktuální stav zařízení s povoleným přístupem (zapnuto nebo vypnuto)."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti Upravit a Odstranit příslušné zařízení v seznamu."
			},{
				type: "step",
				title: "Přidání klientského zařízení do seznamu",
				content: [
					"1. Klikněte na Přidat.",
					"2. Kliknutím na \"Zobrazit existující zařízení\" vyberte existující zařízení  nebo zadejte MAC adresu zařízení do pole MAC adresa.",
					"3. Zadejte Popis tohoto zařízení.",
					"4. Vyberte Povolit.",
					"5. Klikněte na OK."
				]
			},{
				type: "step",
				title: "Úprava nebo odstranění zařízení v seznamu",
				content: "V tabulce klikněte na ikonu Upravit nebo na ikonu Koše u zařízení, které chcete upravit nebo odstranit."
			},{
				type: "step",
				title: "Odstranění více zařízení",
				content: "Vyberte všechna zařízení, která chcete odstranit a klikněte na Odstranit."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Vzdálená správa",
			CONTENT: [{
				type: "paragraph",
				content: "Funkce Vzdálená správa umožňuje vzdálený přístup a konfiguraci směrovače z Internetu."
			},{
				type: "name",
				title: "Vypnout vzdálenou správu",
				content: "Vyberte tuto možnost pro vypnutí vzdálené správy."
			},{
				type: "name",
				title: "Zapnout vzdálenou správu pro všechna zařízení",
				content: "Vyberte tuto možnost pro zapnutí vzdálené správy pro všechny IP adresy. Pokud tuto funkci zvolíte, zadejte údaje do pole Port webové správy."
			},{
				type: "name",
				title: "Zapnout vzdálenou správu pro určitá zařízení",
				content: "Vyberte tuto možnost pro zapnutí vzdálené správy pouze ze zadané IP adresy. Pokud tuto funkci zvolíte, zadejte údaje do polí Port webové správy a IP adresa vzdálené správy."
			},{
				type: "name",
				title: "Port webové správy",
				content: "Zadejte číslo portu, mezi 1024 a 65535, který se používá pro přístup k rozhraní webové správy směrovače s větší bezpečností. Za normálních okolností webové prohlížeče používají standardní port služby HTTP 80. Výchozí a běžný port je 8080, což je alternativní port služby HTTP."
			},{
				type: "name",
				title: "IP adresa vzdáleného zařízení",
				content: "Zadejte platnou IP adresu nebo rozsah IP adres, které mají povolen přístup ke směrovači."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Systémový protokol",
			CONTENT: [{
				type: "paragraph",
				content: "Stránka \"Systémového protokol\" zobrazuje seznam posledních činností (událostí) směrovače. Můžete určit, jaké typy protokolů a/nebo jejich úroveň, chcete zobrazit. Tato stránka nabízí také funkci e-mailu, u níž lze nastavit automatické odesílání souborů protokolu na konkrétní e-mailovou adresu nebo exportování souborů protokolu do počítače."
			},{
				type: "name",
				title: "Typ",
				content: "Vyberte typ systémového protokolu, který chcete zobrazit."
			},{
				type: "name",
				title: "Úroveň",
				content: "Vyberte úroveň systémového protokolu, kterou chcete zobrazit."
			},{
				type: "name",
				title: "Obnovit",
				content: "Kliknutím na tuto ikonu aktualizujete systémový protokol."
			},{
				type: "name",
				title: "Odstranit vše",
				content: "Kliknutím na tuto ikonu odstraníte všechny systémové protokoly."
			},{
				type: "name",
				title: "Uložit protokol",
				content: "Kliknutím na toto tlačítko stáhnete všechny soubory systémového protokolu do svého počítače."
			},{
				type: "name",
				title: "Nastavení pošty",
				content: "Kliknutím na toto tlačítko můžete nakonfigurovat nastavení e-mailu pro systémové protokoly."
			},{
				type: "step",
				title: "Konfigurace nastavení e-mailu pro systémové protokoly",
				content: [
					"1. Klikněte na Nastavení pošty.",
					"2. Od - Zadejte platnou e-mailovou adresu, která bude použita pro odchozí e-mail.",
					"3. Komu - Zadejte platnou e-mailovou adresu, která bude použita pro příchozí e-mail.",
					"4. SMTP server - Zadejte adresu SMTP serveru, který použije směrovač k odesílání systémových protokolů e-mailem.",
					{
						content: "5. Povolit ověřování - Vyberte tuto možnost, pokud SMTP server vyžaduje ověření pro odesílání e-mailů.",
						children: [{
							type: "name",
							title: "Uživatelské jméno",
							content: "Zadejte uživatelské jméno pro SMTP server. Tento údaj rozlišuje velká a malá písmena."
						},{
							type: "name",
							title: "Heslo",
							content: "Zadejte heslo pro SMTP server. Tento údaj rozlišuje velká a malá písmena."
						}]
					},{
						content: "6. Zapnout automatickou poštu - Určete, v kolik hodin by měly být automaticky odeslány systémové protokoly.",
						children: [{
							type: "paragraph",
							content: "Chcete-li posílat systémové protokoly každý den v konkretní čas, zadejte hodiny (HH) a minuty (MM) v 24hodinovém formátu , např. 16:00 je 4PM."
						},{
							type: "paragraph",
							content: "Chcete-li poslat systémový protokol v určitou hodinu nebo v časovém intervalu, zadejte počet hodin."
						}]
					},
					"7. Klikněte na Uložit."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Statistika provozu",
			CONTENT: [{
				type: "paragraph",
				content: "Stránka Statistika provozu zobrazuje síťový provoz odesílaných a přijímaných LAN, WAN a WLAN paketů."
			},{
				type: "name",
				title: "Statistika provozu",
				content: "Chcete-li statistické údaje zobrazit, zapněte ji."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Seznam statistiky provozu",
			CONTENT: [{
				type: "name",
				title: "IP adresa / MAC adresa",
				content: "Zobrazuje IP adresu a MAC adresu příslušného klientského zařízení."
			},{
				type: "name",
				title: "Celkový počet paketů",
				content: "Zobrazuje celkový počet paketů odeslaných a přijatých klientským zařízením od začátku relace nebo od posledního restartu čítače."
			},{
				type: "name",
				title: "Celkový počet bajtů",
				content: "Zobrazuje celkový počet bajtů odeslaných a přijatých klientským zařízením od začátku relace nebo od posledního restartu čítače."
			},{
				type: "name",
				title: "Aktuální počet paketů",
				content: "Zobrazuje aktuální počet paketů odeslaných a přijatých v určitém časovém intervalu."
			},{
				type: "name",
				title: "Aktuální počet bajtů",
				content: "Zobrazuje aktuální počet bajtů odeslaných a přijatých v určitém časovém intervalu."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti Resetu  (vynulování) a vymazání příslušných statistických údajů ze seznamu."
			},{
				type: "name",
				title: "Obnovit",
				content: "Kliknutím aktualizujete statistické údaje na stránce."
			},{
				type: "name",
				title: "Vynulovat vše",
				content: "Kliknutím vynulujete všechny statistické hodnoty v seznamu."
			},{
				type: "name",
				title: "Odstranit vše",
				content: "Kliknutím vymažete všechny statistické hodnoty v seznamu."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "2,4GHz / 5GHz bezdrátová síť",
			CONTENT: [{
				type: "name",
				title: "Beacon Interval (Interval výstražných signálů)",
				content: "Zadáním hodnoty mezi 40 a 1000 v milisekundách určíte interval beacon paketů, které jsou vysílány směrovačem z důvodu synchronizace bezdrátové sítě. Výchozí hodnota je 100 milisekund."
			},{
				type: "name",
				title: "RTS Threshold (Práh RTS)",
				content: "Zadáním hodnoty mezi 1 a 2346 určíte velikost paketu přenosu dat přes směrovač. Ve výchozím nastavení hodnota Threshold RTS (Request to Send)-(Požadavek na odeslání) je 2346. Pokud je velikost paketu větší než nastavená hodnota threshold, směrovač odešle určité přijímací stanici požadavek na odeslání rámců a určí odeslání datového rámce, v opačném případě bude paket odeslán okamžitě."
			},{
				type: "name",
				title: "DTIM Interval",
				content: "Tato hodnota určuje interval Delivery Traffic Indication Message (DTIM)-Zpráva indikující data k doručení. Zadejte hodnotu mezi 1 a 15 v milisekundách. Výchozí hodnota 1 znamená, že DTIM Interval je stejný jako Beacon interval."
			},{
				type: "name",
				title: "Obnovovací interval skupinového klíče",
				content: "Zadejte počet sekund (minimum 30) k ovládání časového intervalu pro automatickou obnovu šifrovacího klíče. Výchozí hodnota 0 znamená žádnou obnovu klíče."
			},{
				type: "name",
				title: "Funkce WMM",
				content: "Funkce WMM garantuje přednostní přenos paketů se zprávami vysoké priority. Ve výchozím nastavení je zapnuta (doporučeno)."
			},{
				type: "name",
				title: "Funkce Short GI",
				content: "Tato funkce, jež je ve výchozím nastavení zapnuta (doporučeno) zvyšuje kapacitu dat snížením časového intervalu Guard Interval (GI)."
			},{
				type: "name",
				title: "Funkce AP Isolation",
				content: "Pokud chcete omezit a zabránit všem bezdrátovým zařízením připojeným k síti ve vzájemné interakci, ale ponechat jim přístup internetu, zaškrtněte políčko Povolit AP Isolation."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "TX Beamforming je technika zpracování signálu používaném v senzorovém poli pro směrování přenosového signálu. Pokud je povolen, bude použit na vysílací straně za účelem posílení signálu Wi-Fi a rozšíření pokrytí Wi-Fi."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "Povolit přemotění WDS",
				content: "Funkce WDS (Wireless Distribution System) Bridging umožňuje směrovači přemostění k jinému přístupovému bodu v místní bezdrátové síti (WLAN). Pokud je tato funkce zapnuta, nakonfigurujte následující:",
				children: [{
					type: "name",
					title: "SSID (k přemostění)",
					content: "Zadejte identifikátor SSID bezdrátového přístupového bodu (WAP), ke kterému se směrovač připojí jako klient nebo použijte funkci Vyhledat, jež umožňuje vyhledat všechny dostupné sítě."
				},{
					type: "name",
					title: "Vyhledat",
					content: "Klikněte na toto tlačítko pro vyhledání a zobrazení SSID, BSSID, síly signálu, kanálu a informace o zabezpečení všech dostupných bezdrátových sítí v dosahu. Jakmile vyberete síť, parametry SSID, MAC adresa a zabezpečení se automaticky vyplní."
				},{
					type: "name",
					title: "MAC adresa (k přemostění)",
					content: "Zadejte MAC adresu (BSSID), s 12 hexadecimálními znaky (0-9, a -f, A- F) oddělenými pomlčkami, bezdrátového přístupového bodu, ke kterému se  směrovač připojí jako klient. Pokud vyberete požadovaný přístupový bod pomocí funkce Vyhledat, pole MAC adresy se automaticky vyplní."
				},{
					type: "name",
					title: "Zabezpečení",
					content: "Vyberte správný typ zabezpečení vybraného přístupového bodu Žádné, WPA-PSK/WPA2-PSK nebo WEP. Pokud vyberete požadovaný přístupový bod pomocí funkce Vyhledat, pole Zabezpečení se automaticky vyplní.",
					children: [{
						type: "name",
						title: "Heslo",
						content: "Tato možnost je aktivní, pokud zvolený typ zabezpečení je WPA-PSK/WPA2-PSK nebo WEP. Zadejte bezpečnostní heslo vybraného přístupového bodu."
					},{
						type: "name",
						title: "Ověř. Typ",
						content: "Tato možnost je aktivní pouze, pokud je zvolený typ zabezpečení WEP (Wired Equivalent Privacy). Vyberte požadovaný typ ověřování (Auto, Otevřený systém nebo Sdílený klíč) pro vybraný přístupový bod."
					},{
						type: "name",
						title: "Formát klíče WEP",
						content: "Tato možnost je aktivní pouze, pokud je zvolený typ zabezpečení WEP. Vyberte formát klíče (ASCII nebo hexadecimální) použitý pro vybraný přístupový bod."
					}]
				}]
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Zaškrtnutím políčka Povolit WPS a kliknutím na tlačítko Uložit zapnete funkci WPS (Wi-FI Protected Setup), která umožňuje snadno nastavit a připojit zařízení s WPS pouhým stiskem tlačítka."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Zaškrtnutím políčka Povolit NAT a kliknutím na tlačítko Uložit zapnete funkci NAT (Network Address Translation)."
			},{
				type: "note",
				title: "Poznámka",
				content: "Pokud je NAT vypnuto, změna konfigurace v přesměrování portů NAT se neprojeví."
			},{
				type: "name",
				title: "NAT Boost",
				content: "Zaškrtnutím políčka Povolit NAT Boost a kliknutím na tlačítko Uložit zajistíte nejlepší propustnost svého směrovače."
			},{
				type: "note",
				title: "Poznámka",
				content: "Pokud je aktivní funkce QoS nebo Traffic Statistics, nelze NAT Boost povolit."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "Nastavení úrovně ochrany před útoky DoS",
			CONTENT: [{
				type: "paragraph",
				content: "Ochrana před útoky DoS chrání směrovač před záplavovými útoky ICMP-FLOOD, UDP-FLOOD, a TCP-FLOOD."
			},{
				type: "name",
				title: "Úroveň paketů ICMP-FLOOD",
				content: "Zadejte hodnotu mezi 5 a 7200 ICMP pakety, aby se ochrana před záplavovými ICMP útoky spustila v okamžiku, když počet paketů překročí nastavenou prahovou hodnotu."
			},{
				type: "name",
				title: "Úroveň paketů UDP-FLOOD",
				content: "Zadejte hodnotu mezi 5 a 7200 UDP pakety, aby se ochrana před záplavovými UDP útoky spustila v okamžiku, když počet paketů překročí nastavenou prahovou hodnotu."
			},{
				type: "name",
				title: "Úroveň paketů TCP-FLOOD",
				content: "Zadejte hodnotu mezi 5 a 7200 TCP-SYN pakety, aby se ochrana před záplavovými TCP-SYN útoky spustila v okamžiku, když počet paketů překročí nastavenou prahovou hodnotu."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Duplex",
			CONTENT: [{
				type: "name",
				title: "Duplex",
				content: "Z rozevíracího seznamu vyberte duplex."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Povolit",
				content: "Zaškrtněte toto pole, pokud chcete vypnout kontrolku LED během Nočního režimu, aniž by byl ovlivněn výkon směrovače."
			},{
				type: "name",
				title: "Doba nočního režimu",
				content: "Zadejte časové období, během které se uplatní Noční režim."
			},{
				type: "paragraph",
				content: "Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "S OpenVPN můžete přistupovat k vaší síti zabezpečeně použitím internetu, když nejste doma. Pro použití služby VPN musíte nakonfigurovat službu dynamické DNS (doporučeno) nebo přidělit statickou IP adresu WAN portu vašeho routeru. Váš systémový čas by měl být synchronizován s internetem."
			},{
				type: "name",
				title: "Povolit Server VPN",
				content: "Zaškrtnutím tohoto pole povolíte server OpenVPN."
			},{
				type: "name",
				title: "Typ služby",
				content: "Vyberte komunikační protokol pro server OpenVPN: UDP nebo TCP."
			},{
				type: "name",
				title: "Port služby",
				content: "Vložte číslo komunikačního portu mezi 1024 a 65535. Výchozí hodnota a běžně používaný port je 1194."
			},{
				type: "name",
				title: "Maska/Podsíť VPN",
				content: "Zadejte rozsah adres IP, které je možné zapůjčit klientům serveru OpenVPN."
			},{
				type: "name",
				title: "Klientský přístup",
				content: "Vyberte typ přístupu pro vašeho klienta OpenVPN.",
				children: [{
					type: "name",
					title: "Pouze domácí síť",
					content: "Klienti mohou přistupovat pouze ke směrovači a síti LAN. Výchozí směrování klienta nebude změněno."
				},{
					type: "name",
					title: "Internet a domácí síť",
					content: "Klienti mohou přistupovat k domácí síti, internetovým stránkám a službám s omezením geografické polohy, když jste mimo svoji zemi. Výchozí klientské routy budou změněny."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Certifikát",
			CONTENT: [{
				type: "paragraph",
				content: "Použijte certifikát pro informace o připojení a identitu připojení VPN pro vzdálený počítač."
			},{
				type: "name",
				title: "Generovat",
				content: "Kliknutím vygenerujete nový certifikát."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Soubor s konfigurací",
			CONTENT: [{
				type: "paragraph",
				content: "Vzdálení klienti budou používat konfigurační soubor pro přístup k vašemu routeru."
			},{
				type: "name",
				title: "Exportovat",
				content: "Kliknutím na toto tlačítko uložíte soubor konfigurace OpenVPN, který se použije pro přidání nového připojení VPN."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "Průvodce instalací klienta VPN",
			CONTENT: [{
				type: "step",
				title: "Klientská zařízení povolíte a připojíte k serveru OpenVPN pomocí následujících kroků:",
				content:[{
					type: "paragraph",
					content: "Předtím než začnete konfigurovat OpenVPN server, prosím, nakonfigurujte službu dynamické DNS (doporučeno) nebo přidělte statickou IP adresu WAN portu. Ujistěte se, že externí port nastavení NAT není servisním portem a váš systémový čas je synchronizován s internetem."
				},
					"1. Zvolte Povolit server VPN.",
					"2. Nakonfigurujte parametry serveru OpenVPN (Typ služby, Port služby, Přístup klienta a VPN podsíť/Maska sítě) a klikněte na Uložit.",
					"3. Klikněte a Exportovat pro uložení souboru konfigurace.",
					"4. Stáhněte a naistalujte na vašem klientském zařízení OpenVPN klientskou utilitu z <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Oficiální podporované platformy zahrnují Windows, Mac OSX, Linux.",
					"5. Spusťte OpenVPN klientskou utilitu a přidejte nové VPN připojení vašeho klientského zařízení k VPN serveru použitím uloženého konfiguračního souboru."
				]},{
					type: "note",
					title: "Poznámka",
					content: "Chcete-li se dozvědět více klientech OpenVPN, navštivte stránku <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "S PPTP VPN můžete použitím internetu snadno a rychle přistupovat k vaši síti, když nejste doma. Může to být zakázáno poskytovatelem internetu. Pro použití služby VPN musíte nakonfigurovat službu dynamické DNS (doporučeno) nebo přidělit statickou IP adresu WAN portu vašeho routeru. Váš systémový čas by měl být synchronizován s internetem."
			},{
				type: "name",
				title: "Povolit Server VPN",
				content: "Zaškrtnutím tohoto pole povolíte server PPTP VPN."
			},{
				type: "name",
				title: "Adresa IP klienta",
				content: "Zadejte rozsah adres IP (až pro 10 klientů), které je možné zapůjčit klientům serveru PPTP VPN."
			},{
				type: "name",
				title: "Povolit přístup Samba (místo v síti)",
				content: "Zvolte umožnit vašim VPN klientům přistupovat k vašemu lokálnímu Samba serveru."
			},{
				type: "name",
				title: "Povolit procházení NetBIOS",
				content: "Zvolte umožnit vašim VPN klientům přistupovat k vašemu lokálnímu Samba serveru pomocí jména NetBIOS."
			},{
				type: "name",
				title: "Povolit nešifrovaná připojení",
				content: "Zvolte povolení nešifrovaných připojení k vašemu VPN serveru."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Seznam účtů",
			CONTENT: [{
				type: "paragraph",
				content: "Tato tabulka zobrazuje účty, které mohou být použity pro připojení k serveru PPTP VPN vzdálenými klienty."
			},{
				type: "step",
				title: "Přidat PPTP VPN účet",
				content: [
					"1. Klikněte na Přidat.",
					"2. Zadejte uživatelské jméno a heslo pro ověření klientů k serveru PPTP VPN.",
					"3. Klikněte na OK."
				]
			},{
				type: "step",
				title: "Upravit nebo smazat existující účet",
				content: "V této tabulce klikněte na ikonu Upravit nebo ikonu Koš, které odpovídají účtu, který si přejete upravit nebo smazat."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "Průvodce instalací klienta VPN",
			CONTENT: [{
				type: "step",
				title: "Klientská zařízení povolíte a připojíte k serveru  PPTP VPN pomocí následujících kroků:",
				content:[{
					type: "paragraph",
					content: "Předtím než začnete konfigurovat PPTP VPN server, prosím, nakonfigurujte službu dynamické DNS (doporučeno) nebo přidělte statickou IP adresu WAN portu. Ujistěte se, že externí port nastavení NAT není 1723 a váš systémový čas je synchronizován s internetem."
				},
					"1. Zvolte Povolit server VPN.",
					"2. Nakonfigurujte parametry serveru PPTP VPN a klikněte na Uložit.",
					"3. Vytvořte na vašich klientských zařízeních PPTP VPN připojení. Oficiální podporované platformy zahrnují Windows, Mac OSX, Linux, iOS a Android.",
					"4. Spusťte program PPTP VPN, přidejte nové připojení a vložte jméno domény registrované DDNS služby nebo statickou adresu přidělenou portu WAN, abyste mohli připojit klientské zařízení k PPTP VPN serveru."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "Připojení VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Tato stránka zobrazí klienty, kteří jsou aktuálně připojeni k serverům OpenVPN a PPTP VPN hostovaným na vašem směrovači."
			},{
				type: "paragraph",
				content: "Klikněte na ikonu se znaménkem mínus pro odpojení příslušného klienta."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internetu",
			CONTENT: [{
				type: "name",
				title: "Stav internetu",
				content: "Zobrazuje aktuální stav internetového připojení směrovače"
			},{
				type: "name",
				title: "Typ připojení",
				content: "Zobrazuje typ připojení k Internetu."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazuje aktuální internetovou IP adres přidělenou směrovači."
			},{
				type: "name",
				title: "Sekundární připojení / IP adresa",
				content: "Zobrazuje typ sekundárního připojení a IP adresu."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Směrovač",
			CONTENT: [{
				type: "title",
				title: "2,4GHz / 5GHz bezdrátová síť"
			},{
				type: "name",
				title: "SSID",
				content: "Zobrazuje aktuální název bezdrátové sítě s frekvenčním pásmem 2,4 GHz / 5 GHz."
			},{
				type: "name",
				title: "Kanál",
				content: "Zobrazuje kanál, kterým bezdrátová síť 2,4 GHz / 5 GHz vysílá."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje aktuální MAC adresu bezdrátové sítě 2,4 GHz / 5 GHz."
			},{
				type: "title",
				title: "2,4GHz/5GHz Síť hosta"
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazuje, zda je bezdrátový síť pro hosty 2,4 GHz / 5 GHz zapnuta nebo vypnuta."
			},{
				type: "name",
				title: "SSID",
				content: "Zobrazuje název bezdrátové sítě pro hosty."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Klienti kabelové/bezdrátové sítě",
			CONTENT: [{
				type: "name",
				title: "Název",
				content: "Zobrazuje název klienta připojeného ke směrovači."
			},{
				type: "name",
				title: "IP adresa",
				content: "Zobrazuje přiřazenou IP adresu klienta."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje MAC adresu klienta."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Tiskárna",
			CONTENT: [{
				type: "name",
				title: "Název",
				content: "Zobrazuje název tiskárny připojené ke směrovači přes USB port."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "USB disk",
			CONTENT: [{
				type: "name",
				title: "USB disk",
				content: "Zobrazuje značku USB disku připojeného ke směrovači."
			},{
				type: "name",
				title: "Celková kapacita",
				content: "Zobrazuje celkovou kapacitu USB disku."
			},{
				type: "name",
				title: "Dostupná kapacita",
				content: "Zobrazuje dostupné místo na USB disku."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internetu",
			CONTENT: [{
				type: "name",
				title: "Automaticky detekovat",
				content: "Kliknutím na toto tlačítko směrovač automaticky detekuje typ vašeho připojení k Internetu."
			},{
				type: "note",
				title: "Poznámka",
				content: "Pokud si nejste jisti, jaký typ internetového připojení máte, použijte funkci automatické detekce nebo se obraťte na svého poskytovatele internetových služeb o pomoc."
			},{
				type: "title",
				title: "Typ připojení k Internetu: Statická IP adresa",
			},{
				type: "name",
				title: "IP adresa / maska podsítě / výchozí brána / primární DNS / sekundární DNS",
				content: "Zadejte údaje poskytnuté vaším poskytovatelem internetových služeb."
			},{
				type: "title",
				title: "Typ připojení k Internetu: Dynamická IP adresa:",
			},{
				type: "name",
				title: "Neklonovat MAC adresu / klonovat aktuální MAC adresu počítače",
				content: "Vyberte, zda chcete klonovat vaši MAC adresu či nikoliv, podle instrukcí vašeho poskytovatele internetových služeb."
			},{
				type: "title",
				title: "Typ připojení k Internetu: PPPoE",
			},{
				type: "name",
				title: "Uživatelské jméno / heslo",
				content: "Zadejte uživatelské jméno a heslo získané od poskytovatele internetových služeb. Tyto údaje rozlišují malá a velká písmena."
			},{
				type: "title",
				title: "Typ připojení k Internetu: L2TP/PPTP",
			},{
				type: "name",
				title: "Uživatelské jméno / heslo",
				content: "Zadejte uživatelské jméno a heslo získané od poskytovatele internetových služeb. Tyto údaje rozlišují malá a velká písmena."
			},{
				type: "name",
				title: "Sekundární připojení (Dynamická nebo statická IP adresa)",
				children: [{
					type: "name",
					title: "Dynamická IP adresa",
					content: "Vyberte, pokud IP adresa a maska podsítě jsou přiřazeny automaticky poskytovatelem internetových služeb."
				},{
					type: "name",
					title: "Statická IP adresa",
					content: "Vyberte, pokud IP adresa a maska podsítě jsou přiděleny poskytovatelem internetových služeb a zadejte tyto údaje do příslušných polí."
				}]
			},{
				type: "name",
				title: "IP adresa VPN serveru / Doménové jméno",
				content: "Zadejte IP adresu nebo název domény VPN serveru poskytovatele internetových služeb."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Nastavení",
			CONTENT: [{
				type: "name",
				title: "Povolit bezdrátový vysílač",
				content: "Zaškrtnutím tohoto políčka povolíte bezdrátovou rádiovou frekvenci 2,4 GHz / 5 GHz."
			},{
				type: "name",
				title: "Název bezdrátové sítě (SSID)",
				content: "Můžete ponechat výchozí název bezdrátové sítě (SSID) nebo zadejte nový název (až 32 znaků). Tento údaj rozlišuje velká a malá písmena."
			},{
				type: "name",
				title: "Skrýt identifikátor SSID",
				content: "Zaškrtněte toto políčko, pokud chcete skrýt název 2,4GHz / 5GHz sítě (SSID) v seznamu bezdrátových sítí."
			},{
				type: "name",
				title: "Heslo",
				content: "Zadejte heslo bezdrátové sítě s 8 až 63 znaky ASCII nebo 8 až 64 hexadecimálními znaky. Tento údaj rozlišuje velká a malá písmena."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Nastavení zařízení",
			CONTENT: [{
				type: "paragraph",
				content: "Obrazovka Nastavení zařízení zobrazuje příslušné informace o všech USB zařízení připojených přes USB port."
			},{
				type: "name",
				title: "Prohledat",
				content: "Směrovač obvykle automaticky najde nově připojené zařízení. Pokud nenajde, kliknutím na toto tlačítko se spustí vyhledávání nově připojeného zařízení a obnoví se obrazovka aktualizovanými informacemi."
			},{
				type: "name",
				title: "Jednotka",
				content: "Zobrazuje název USB jednotky."
			},{
				type: "name",
				title: "Kapacita",
				content: "Zobrazuje celkovou kapacitu USB jednotky."
			},{
				type: "name",
				title: "Volné místo",
				content: "Zobrazuje aktuální volnou kapacitu úložného prostoru."
			},{
				type: "name",
				title: "Bezpečně odebrat",
				content: "Kliknutím na toto tlačítko bezpečně odpojíte paměťové USB zařízení dříve než jej fyzicky odpojíte ze směrovače.",
				children: [{
					type: "paragraph",
					content: "Tlačítko Bezpečně odebrat se objeví pouze v případě, že je paměťové zařízení USB připojeno ke směrovači a vy nebudete moci odpojit USB zařízení, když je aktuální jednotka zaneprázdněna."
				}]
			},{
				type: "name",
				title: "Stav",
				content: "Toto zaškrtávací políčko se zobrazí pouze v případě, že je paměťové zařízení USB připojeno ke směrovači. Touto volbou povolíte sdílení souborů na USB zařízení."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Nastavení sdílení",
			CONTENT: [{
				type: "name",
				title: "Název síťového/mediálního serveru",
				content: "Zobrazuje název používaný pro přístup k paměťovému zařízení USB."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Sdílení složek",
			CONTENT: [{
				type: "name",
				title: "Sdílet vše",
				content: "Je-li aktivní, sdílíte všechny soubory a složky, je-li vypnutá, sdílíte pouze vybrané složky."
			},{
				type: "name",
				title: "Povolit ověřování",
				content: "Doporučujeme zapnout tuto funkci, která zajišťuje uživatelům přístup ke sdíleným složkám po zadání uživatelského jména a hesla."
			},{
				type: "name",
				title: "Název složky",
				content: "Zobrazuje název sdílené složky."
			},{
				type: "name",
				title: "Cesta ke složce",
				content: "Zobrazuje cestu ke sdílené složce."
			},{
				type: "name",
				title: "Sdílení médií",
				content: "Označuje, zda sdílená složka má povolené sdílení médií nebo ne."
			},{
				type: "name",
				title: "Název jednotky",
				content: "Zobrazuje název sdílené jednotky."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazuje stav sdílené složky pomocí indikátoru žárovky."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti Upravit nebo Odstranit příslušnou sdílenou složku."
			},{
				type: "name",
				title: "Přidat",
				content: "Kliknutím na toto tlačítko přidáte novou položku."
			},{
				type: "name",
				title: "Odstranit",
				content: "Kliknutím na toto tlačítko odstraníte vybranou položku z tabulky."
			},{
				type: "name",
				title: "Procházet",
				content: "Slouží k vyhledávání sdílených složek."
			},{
				type: "name",
				title: "Povolit přístup klientům sítě pro hosty",
				content: "Umožňuje klientům sítě pro hosty přístup ke sdíleným složkám."
			},{
				type: "name",
				title: "Povolit ověřování",
				content: "Je-li zapnuta, uživatelé mohou přistupovat ke sdíleným složkám pouze s platným uživatelským jménem a heslem."
			},{
				type: "name",
				title: "Povolit možnost zápisu",
				content: "Umožňuje uživatelům provádět změny obsahu sdílené složky."
			},{
				type: "name",
				title: "Povolit sdílení médií",
				content: "Vyberte pro povolení sdílení médií."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Tiskový server",
			CONTENT: [{
				type: "name",
				title: "Tiskový server",
				content: "Kliknutím na Zapnout povolíte funkci tiskového serveru."
			},{
				type: "name",
				title: "Název tiskárny",
				content: "Zobrazuje název vaší tiskárny připojené ke směrovači."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Rodičovská kontrola",
			CONTENT: [{
				type: "name",
				title: "Rodičovská kontrola",
				content: "Zapnutím tuto funkci povolíte. Ve výchozím nastavení je tato funkce vypnuta."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Zařízení pod rodičovskou kontrolou",
			CONTENT: [{
				type: "paragraph",
				content: "Zobrazuje seznam zařízení pod rodičovskou kontrolou."
			},{
				type: "name",
				title: "Název zařízení",
				content: "Zobrazuje název všech připojených klientských zařízení, která jsou v současné době pod rodičovskou kontrolou."
			},{
				type: "name",
				title: "MAC adresa",
				content: "Zobrazuje MAC adresu všech připojených klientských zařízení, která jsou v současné době pod rodičovskou kontrolou."
			},{
				type: "name",
				title: "Doba přístupu k internetu",
				content: "Zobrazuje omezení přístupu v časových intervalech.Časový harmonogram se projeví na základě systémového času routeru, který může být nastaven v \"Systémové nástroje -> Nastavení času\"."
			},{
				type: "name",
				title: "Popis",
				content: "Zobrazuje stručný popis připojeného zařízení. Toto je volitelné nastavení."
			},{
				type: "name",
				title: "Stav",
				content: "Zobrazuje aktuální stav (zapnuto nebo vypnuto) rodičovské kontroly příslušného zařízení."
			},{
				type: "name",
				title: "Upravit",
				content: "Zobrazuje možnosti Upravit nebo Odstranit příslušného zařízení."
			},{
				type: "step",
				title: "Omezení pro nové klientské zařízení",
				content:[
					"1. Klikněte na Přidat.",
					"2. Klikněte na Zobrazit existující zařízení a ze Seznamu zařízení s přístupem vyberte připojené zařízení  nebo manuálně přidejte zařízení, které není připojeno, zadáním Názvu zařízení a jeho MAC adresy.",
					"3. Klikněte na ikonu Doba přístupu k internetu a určete časový interval, po který platí omezení.",
					"4. Do pole Popis zadejte stručný popis. (Nepovinné)",
					"5. Vyberte Povolit.",
					"6. Klikněte na OK."
				]
			},{
				type: "paragraph",
				content: "Chcete-li upravit nebo odstranit rodičovskou kontrolu, jednoduchým kliknutím na ikonu Upravit  můžete údaj upravit nebo kliknutím na ikonu Odstranit příslušnou položku odstraníte."
			},{
				type: "paragraph",
				content: "Chcete-li smazat více položek, vyberte všechny položky a klikněte na tlačítko Odstranit nad tabulkou."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Síť pro hosty",
			CONTENT: [{
				type: "paragraph",
				content: "Síť pro hosty umožňuje nastavit samostatnou síť se svým názvem bezdrátové sítě (SSID) a heslem, a kterou mohou hosté využívat pro přístup k vaší bezdrátové síti."
			},{
				type: "name",
				title: "Povolit hostům vzájemně se vidět",
				content: "Zaškrtnutím tohoto políčka umožníte, aby se bezdrátová zařízení v síti pro hosty vzájemně viděla."
			},{
				type: "name",
				title: "Povolit hostům přístup do mé místní sítě",
				content: "Zaškrtnutím tohoto políčka umožníte bezdrátovým zařízením v síti pro hosty přístup k vaším sdíleným datům a tiskárnám."
			},{
				type: "name",
				title: "Povolit síť pro hosty",
				content: "Zaškrtnutím tohoto tlačítka zapnete funkci Síť pro hosty."
			},{
				type: "name",
				title: "Název bezdrátové sítě (SSID)",
				content: "Můžete ponechat výchozí název sítě pro hosty (SSID) nebo vytvořit nový název (až 32 znaků)."
			},{
				type: "name",
				title: "Skrýt identifikátor SSID",
				content: "Zaškrtněte toto políčko, pokud chcete skrýt identifikátor SSID sítě pro hosty v seznamu bezdrátových sítí."
			},{
				type: "name",
				title: "Heslo",
				content: "Použijte možnost vygenerování náhodného hesla nebo si vytvořte heslo mající 8 až 63 znaků ASCII nebo 8 až 64 hexadecimálních znaků (0-9, a-f, A-F)."
			},{
				type:"paragraph",
				content:"Kliknutím na Uložit uložíte veškerá nastavení."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"Služba TP-Link Cloud vám dovoluje vzdáleně monitorovat vaši síť v reálném čase, přistupovat a spravovat vaše zařízení TP-Link přes internet kdykoli a kdekoli."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Informace o účtu",
			CONTENT:[{
				type:"paragraph",
				content:"Zobrazuje vaše TP-Link ID informace. Můžete upravovat informace vašeho účtu kliknutím na ikonu Upravit (Edit)."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Informace o zařízení",
			CONTENT:[{
				type:"paragraph",
				content:"Zobrazuje informace o vašem zařízení zahrnující cloud účet, který zařízení spravuje."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Provázané účty",
			CONTENT:[{
				type:"paragraph",
				content:"Tato tabulka zobrazuje všechny cloud účty, které jsou momentálně provázány s tímto zařízením."
			},{
				type:"step",
				title:"Provázat uživatelský účet",
				content:["1. Klikněte na Provázat.",
				"2. Vložte registrovaný e-mail, který chcete provázat.",
				"3. Klikněte na Uložit."]
			}]

		}

	};
})(jQuery);

