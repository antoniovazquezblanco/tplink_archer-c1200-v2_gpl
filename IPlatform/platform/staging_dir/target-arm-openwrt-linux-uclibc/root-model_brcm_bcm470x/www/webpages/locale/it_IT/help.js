(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra informazioni rilevanti sulla connessione Internet WAN (Wide Area Network)."
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "L'indirizzo fisico univoco assegnato alla porta Internet (WAN) del router."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "L'indirizzo IPv4 assegnato alla porta Internet (WAN) del router. Se l'indirizzo IP viene visualizzato come 0.0.0.0, indica che non c'è alcun accesso a Internet."
			},{
				type: "name",
				title: "Subnet mask",
				content: "Questo parametro determina la porzione di rete e la porzione host di un indirizzo IP."
			},{
				type: "name",
				title: "Gateway predefinito",
				content: "L'indirizzo IP utilizzato per collegare il router alla rete."
			},{
				type: "name",
				title: "DNS primario/DNS secondario",
				content: "Il Domain Name System (DNS) traduce i nomi host e i domini Internet in indirizzi IP. Le informazioni dei server DNS sono assegnate dal provider di servizi Internet (ISP)."
			},{
				type: "name",
				title: "Tipo di connessione",
				content: "Il tipo di connessione corrente della porta Internet (WAN)."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "L'indirizzo fisico univoco assegnato alla porta Internet (WAN) del router."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "L'indirizzo IPv6 assegnato alla porta internet (WAN) del router."
			},{
				type: "name",
				title: "Gateway predefinito",
				content: "L'indirizzo IP utilizzato per collegare il router alla rete."
			},{
				type: "name",
				title: "DNS primario/DNS secondario",
				content: "Il Domain Name System (DNS) traduce i nomi host e i domini Internet in indirizzi IP. Le informazioni dei server DNS sono assegnate dal provider di servizi Internet (ISP)."
			},{
				type: "name",
				title: "Tipo di connessione",
				content: "Il tipo di connessione corrente della porta Internet (WAN)."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Wireless",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra le informazioni relative alla rete wireless."
			},{
				type: "name",
				title: "Nome di rete wireless (SSID)",
				content: "Il nome della rete wireless, noto anche come SSID (Service Set Identifier)."
			},{
				type: "name",
				title: "Wireless",
				content: "Lo stato corrente (Acceso o Spento) della rete wireless."
			},{
				type: "name",
				title: "Modalità",
				content: "La modalità wireless corrente."
			},{
				type: "name",
				title: "Ampiezza Canale",
				content: "La larghezza di banda di canale della rete wireless."
			},{
				type: "name",
				title: "Canale",
				content: "Il canale wireless corrente e la sua frequenza corrispondente (GHz)."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "L'indirizzo MAC dell'access point wireless integrato nel router."
			},{
				type: "name",
				id: "status_wds",
				title: "Stato WDS",
				content: "Lo stato corrente (abilitato o disabilitato) della modalità WDS."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra le informazioni relative alle porte Ethernet (LAN)."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "L'indirizzo fisico univoco assegnato alla porta Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "L'indirizzo IPv4 assegnato alla porta Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Subnet mask",
				content: "Questo parametro determina la porzione di rete e la porzione host di un indirizzo IP."
			},{
				type: "name",
				title: "DHCP",
				content: "Mostra se il server DHCP integrato del router è attivo o non attivo per i dispositivi presenti sulle porte LAN."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "L'indirizzo fisico univoco assegnato alla porta Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "L'indirizzo IPv6 assegnato alla porta Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Indirizzo locale del collegamento",
				content: "L'indirizzo del collegamento IPv6 per l'interfaccia LAN."
			},{
				type: "name",
				title: "Tipo assegnato",
				content: "Il tipo di indirizzo IPv6 per l'interfaccia LAN."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Rete Ospiti",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra le informazioni relative alla rete wireless ospiti."
			},{
				type: "name",
				title: "Nome di rete wireless (SSID)",
				content: "Il nome di rete wireless (SSID) della rete ospiti."
			},{
				type: "name",
				title: "Nascondi SSID",
				content: "Mostra se il nome di rete wireless (SSID) della Rete Opsiti è visibile o nascosto."
			},{
				type: "name",
				title: "Wireless",
				content: "Lo stato corrente (Acceso o Spento) della rete ospiti."
			},{
				type: "name",
				title: "Consenti agli ospiti di vedersi fra loro",
				content: "Mostra se tutti i dispositivi della rete ospiti possono comunicare tra loro oppure no."
			}]
		},
		STATUS_USB: {
			TITLE: "Dispositivi USB",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra le informazioni dei dispositivi di storage USB e/o stampanti collegati al router tramite le porte USB."
			},{
				type: "name",
				title: "Stampante",
				content: "Il nome della stampante collegata."
			},{
				type: "name",
				title: "Disco USB",
				content: "Il nome del disco USB collegato al router."
			},{
				type: "name",
				title: "Totale",
				content: "La capacità di storage totale del dispositivo di storage USB collegato."
			},{
				type: "name",
				title: "Disponibile",
				content: "La capacità di storage disponibile del dispositivo USB collegato. "
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Prestazioni",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra le prestazioni correnti del router."
			},{
				type: "name",
				title: "Carico CPU",
				content: "L'utilizzo corrente della CPU."
			},{
				type: "name",
				title: "Utilizzo memoria",
				content: "L'utilizzo corrente della memoria."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Client cablati",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra le informazioni di tutti i dispositivi cablati che sono attualmente collegati alla rete."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Client wireless",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra le informazioni di tutti i dispositivi wireless che sono attualmente connessi alla rete."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Tipo di connessione Internet: IP statico"
			},{
				type: "paragraph",
				content: "Selezionate questo tipo se siete in possesso di un indirizzo IP specifico (fisso), subnet mask, gateway e parametri DNS forniti dall'ISP."
			},{
				type: "name",
				title: "Indirizzo IP/Subnet mask/Gateway predefinito/DNS primario/DNS secondario",
				content: "Immettete le informazioni fornite dall'ISP."
			},{
				type: "name",
				title: "Dimensione MTU",
				content: "La dimensione tipica di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.500 Byte. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
			},{
				type: "title",
				title: "Tipo di connessione Internet: IP dinamico"
			},{
				type: "paragraph",
				content: "Selezionate questo tipo se utilizzate una connessione al server DHCP fornita dall'ISP."
			},{
				type: "name",
				title: "Indirizzo IP/Subnet mask/Gateway predefinito/DNS primario/DNS secondario",
				content: "Questi parametri vengono assegnati automaticamente dal server DHCP dell'ISP."
			},{
				type: "name",
				title: "Rinnova",
				content: "Fate clic sul pulsante per ottenere nuovi parametri IP dal server DHCP."
			},{
				type: "name",
				title: "Rilascia",
				content: "Fate clic sul pulsante per rilasciare tutti gli indirizzi IP assegnati dal server DHCP."
			},{
				type: "name",
				title: "Utilizza i seguenti indirizzi DNS",
				content: "Se l'ISP fornisce uno o due indirizzi DNS, selezionate la casella di controllo e immettete gli indirizzi DNS primario e secondario nei campi corrispondenti. In caso contrario, gli indirizzi DNS verranno assegnati dinamicamente dall'ISP."
			},{
				type: "name",
				title: "Dimensione MTU",
				content: "La dimensione tipica di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.500 Byte. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
			},{
				type: "name",
				title: "Nome host",
				content: "Immettete un valore in questo campo per specificare il nome host del router."
			},{
				type: "name",
				title: "Ottieni IP utilizzando DHCP unicast",
				content: "Selezionate questa casella di controllo se il server DHCP dell'ISP non supporta le applicazioni di broadcast e non è possibile ottenere l'indirizzo IP in modo dinamico."
			},{
				type: "title",
				title: "Tipo di connessione Internet: PPPoE"
			},{
				type: "paragraph",
				content: "Selezionate questo tipo se utilizzate il servizio DSL (Digital Subscriber Line) e disponete di un nome utente e una password forniti dall'ISP."
			},{
				type: "name",
				title: "Nome utente/password",
				content: "Immettete il nome utente e la password forniti dall'ISP. I campi fanno distinzione tra maiuscole e minuscole."
			},{
				type: "name",
				title: "Indirizzo IP/DNS primario/DNS secondario",
				content: "Questi parametri vengono assegnati automaticamente dal server DHCP dell'ISP."
			},{
				type: "name",
				title: "Connessione secondaria (Nessuna, IP dinamico, IP statico)",
				children: [{
					type: "name",
					title: "Nessuno",
					content: "Selezionate se non viene fornita alcuna connessione secondaria."
				},{
					type: "name",
					title: "IP dinamico",
					content: "Selezionate se l'indirizzo IP e la subnet mask vengono assegnati automaticamente dall'ISP.",
					children: [{
						type: "name",
						title: "Rinnova",
						content: "Fate clic sul pulsante per rinnovare i parametri IP forniti dall'ISP."
					},{
						type: "name",
						title: "Rilascia",
						content: "Fate clic sul pulsante per rilasciare i parametri IP assegnati."
					}]
				},{
					type: "name",
					title: "IP statico",
					content: "Selezionate se indirizzo IP e subnet mask sono forniti dall'ISP, e immettete le informazioni nei campi corrispondenti."
				}]
			},{
				type: "name",
				title: "Dimensione MTU",
				content: "La dimensione tipica dell'MTU (Maximum Transmission Unit) delle reti Ethernet è 1.480 byte.",
				children: [{
					type: "note",
					title: "Nota",
					content: "In rari casi l'ISP può richiedere di modificare la dimensione MTU per migliorare le prestazioni della rete. Vi consigliamo di non modificare il valore, a meno che non sia assolutamente necessario."
				}]
			},{
				type: "name",
				title: "Nome servizio/Nome concentratore di accessi",
				content: "Di default, Service Name e Access Concentrator (AC) Name vengono lasciati vuoti. Questi campi non devono essere configurati se non richiesto dal proprio ISP."
			},{
				type: "name",
				title: "Rileva intervallo online",
				content: "Immettete il valore dell'intervallo, compreso tra 0 e 120 (in secondi), che determina ogni quanto tempo il router rileva Access Concentrator online. Il valore di default è 10."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "Se l'ISP fornisce un indirizzo IP specifico (fisso), selezionate Utilizza il seguente indirizzo IP e immettete l'indirizzo IP nel campo. In caso contrario, selezionate Ottieni dinamicamente da ISP per ottenere automaticamente un indirizzo IP assegnato dal server."
			},{
				type: "name",
				title: "Indirizzo DNS/DNS primario/DNS secondario",
				content: "Se l'ISP fornisce indirizzi IP DNS specifici (fissi), selezionate Utilizza il seguente indirizzo DNS e immettete gli indirizzi rispettivamente nei campi DNS primario e DNS secondario. In caso contrario, selezionate Ottieni dinamicamente da ISP per ottenere automaticamente gli indirizzi IP DSN assegnati dal server. "
			},{
				type: "name",
				title: "Modalità di connessione",
				content: "Selezionate una modalità di connessione appropriata per l'accesso a Internet.",
				children: [{
					type: "name",
					title: "Automatica",
					content: "In questa modalità, la connessione a Internet viene ristabilita automaticamente dopo ogni disconnessione."
				},{
					type: "name",
					title: "Su richiesta",
					content: "In questa modalità, la connessione Internet viene terminata automaticamente dopo un periodo di tempo di inattività specificato (Max Idle Time). La connessione verrà ristabilita quando  tenterete di accedere nuovamente a Internet."
				},{
					type: "name",
					title: "Basata sul tempo",
					content: "In questa modalità, la connessione Internet viene stabilita solo in un periodo di tempo specifico. Se l'opzione è selezionata, immettete ora di inizio e di fine in formato HH:MM."
				},{
					type: "name",
					title: "Manuale",
					content: "In questa modalità, la connessione a Internet è controllata manualmente facendo clic sul pulsante Connetti o Disconnetti. Questa modalità supporta anche la funzione Max Idle Time. Nel campo Max Idle Time immettete il tempo massimo (in minuti) di inattività della connessione a Internet prima che venga terminata. Il valore di default è 15 minuti. Se desiderate che la connessione a Internet rimanga sempre attiva, immettete 0 (zero)."
				},{
					type: "note",
					title: "Nota",
					content: "La modalità di connessione basata sul tempo avrà effetto solo se l'Ora di sistema è impostata su Avanzate → Utilità di sistema → Impostazioni data/ora."
				}]
			},{
				type: "title",
				title: "Tipo di connessione Internet: cavo BigPond"
			},{
				type: "paragraph",
				content: "Selezionate questo tipo se l'ISP fornisce una connessione tramite cavo BigPond."
			},{
				type: "name",
				title: "Nome utente/password",
				content: "Immettete il nome utente e la password forniti dall'ISP. I campi fanno distinzione tra maiuscole e minuscole."
			},{
				type: "name",
				title: "Server  di autentic.",
				content: "Immettete l'indirizzo IP o hostname del server di autenticazione."
			},{
				type: "name",
				title: "Dominio di autentic.",
				content: "Immettete il suffisso del nome di dominio del server (in base alla posizione geografica).  Ad esempio, nsw.bigpond.net.au per  NSW/ACT, vic.bigpond.net.au per  VIC/TAS/WA/SA/NT, o qld.bigpond.net.au per QLD."
			},{
				type: "name",
				title: "Dimensione MTU",
				content: "La dimensione tipica di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.500 Byte. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
			},{
				type: "name",
				title: "Modalità di connessione",
				content: "Selezionate una modalità di connessione appropriata per l'accesso a Internet.",
				children: [{
					type: "name",
					title: "Automatica",
					content: "In questa modalità, la connessione a Internet viene ristabilita automaticamente dopo ogni disconnessione."
				},{
					type: "name",
					title: "Su richiesta",
					content: "In questa modalità, la connessione Internet viene terminata automaticamente dopo un periodo di tempo di inattività specificato (Max Idle Time). La connessione verrà ristabilita quando  tenterete di accedere nuovamente a Internet."
				},{
					type: "name",
					title: "Manuale",
					content: "In questa modalità, la connessione a Internet è controllata manualmente facendo clic sul pulsante Connetti o Disconnetti. Questa modalità supporta anche la funzione Max Idle Time. Nel campo Max Idle Time immettete il tempo massimo (in minuti) di inattività della connessione a Internet prima che venga terminata. Il valore di default è 15 minuti. Se desiderate che la connessione a Internet rimanga sempre attiva, immettete 0 (zero)."
				}]
			},{
				type: "title",
				title: "Tipo di connessione Internet: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Selezionate questo tipo se vi connettete a un server VPN L2TP/PPTP e disponete di nome utente, password e indirizzo IP/nome di dominio del server forniti dall'ISP."
			},{
				type: "name",
				title: "Nome utente/password",
				content: "Immettete il nome utente e la password forniti dall'ISP. I campi fanno distinzione tra maiuscole e minuscole."
			},{
				type: "name",
				title: "Indirizzo IP/DNS primario/DNS secondario",
				content: "Questi parametri vengono assegnati automaticamente dal server DHCP dell'ISP."
			},{
				type: "name",
				title: "Connessione secondaria (IP dinamico o statico)",
				children: [{
					type: "name",
					title: "IP dinamico",
					content: "Selezionate se l'indirizzo IP e la subnet mask vengono assegnati automaticamente dall'ISP."
				},{
					type: "name",
					title: "IP statico",
					content: "Selezionate se indirizzo IP, subnet mask, gateway e indirizzi DNS sono forniti dall'ISP, e immettete le informazioni nei campi corrispondenti."
				}]
			},{
				type: "name",
				title: "VPN Server IP/Nome Dominio",
				content: "Immettete indirizzo IP o nome di dominio del server VPN fornito dall'ISP."
			},{
				type: "name",
				title: "Dimensione MTU",
				content: "La tipica dimensione di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.460 byte per L2TP o 1.420 per PPTP. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
			},{
				type: "name",
				title: "Modalità di connessione",
				content: "Selezionate una modalità di connessione appropriata per l'accesso a Internet.",
				children: [{
					type: "name",
					title: "Automatica",
					content: "In questa modalità, la connessione a Internet viene ristabilita automaticamente dopo ogni disconnessione."
				},{
					type: "name",
					title: "Su richiesta",
					content: "In questa modalità, la connessione Internet viene terminata automaticamente dopo un periodo di tempo di inattività specificato (Max Idle Time). La connessione verrà ristabilita quando  tenterete di accedere nuovamente a Internet."
				},{
					type: "name",
				title: "Manuale",
				content: "In questa modalità, la connessione a Internet è controllata manualmente facendo clic sul pulsante Connetti o Disconnetti. Questa modalità supporta anche la funzione Max Idle Time. Nel campo Max Idle Time immettete il tempo massimo (in minuti) di inattività della connessione a Internet prima che venga terminata. Il valore di default è 15 minuti. Se desiderate che la connessione a Internet rimanga sempre attiva, immettete 0 (zero)."
				}]
			},{
				type:"paragraph",
				content:"Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "Clona MAC",
			CONTENT: [{
				type: "name",
				title: "Utilizza indirizzo MAC predefinito",
				content: "NON modificate l'indirizzo MAC di default del router, per evitare l'insorgere di problemi nel caso in cui l'ISP vincoli l'indirizzo IP assegnato all'indirizzo MAC."
			},{
				type: "name",
				title: "Utilizza indirizzo MAC computer corrente",
				content: "Selezionate per copiare l'indirizzo MAC corrente del computer connesso al router, nel caso in cui l'ISP vincoli l'indirizzo IP assegnato all'indirizzo MAC del computer."
			},{
				type: "name",
				title: "Utilizza indirizzo MAC personalizzato",
				content: "Immettete l'indirizzo MAC manualmente, nel caso in cui l'ISP vincoli l'indirizzo IP assegnato a un indirizzo MAC specifico."
			},{
				type:"paragraph",
				content:"Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "Indirizzo MAC",
				content: "L'indirizzo fisico univoco assegnato alla porta Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "Mostra l'indirizzo IP di default del router che viene utilizzato per accedere alla pagina di gestione Web del router."
			},{
				type: "name",
				title: "Subnet mask",
				content: "Selezionate un identificativo assegnato utilizzato dalla porta LAN per instradare il traffico interno e esterno dall'elenco a discesa o inserite una nuova subnet mask in formato decimale puntato."
			},{
				type: "note",
				title: "Nota",
				content: "Se il nuovo indirizzo IP della LAN non si trova nella stessa subnet in cui si trova quello vecchio, il pool di indirizzi IP nel server DHCP verrà configurato automaticamente; tuttavia, il server virtuale e l'host DMZ host non avranno effetto finché non saranno riconfigurati."
			},{
				type:"paragraph",
				content:"Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		IPTV:{
			TITLE: "Impostazioni",
			CONTENT: [{
					type: "name",
					title: "Proxy IGMP",
					content: "Selezionate la versione proxy IGMP (Internet Group Management Protocol), V2 o V3, secondo le indicazioni dell'ISP."
				},{
					type: "name",
					title: "Versione IGMP",
					content: "Selezionate la versione del Proxy IGMP (V2 o V3), in base alle richieste del vostro ISP."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Selezionate per attivare la funzione IPTV."
				},
				{
					type: "name",
					title: "Modalità",
					content: "Selezionate la modalità appropriata in base all'ISP.",
					children: [
						{
							type: "name",
							title: "Bridge",
							content:"Se l'ISP non compare nell'elenco e non servono altri parametri, potete semplicemente selezionare questa modalità e configurare le funzioni della porta LAN del router.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Assegnate la porta LAN come funzione di provider Internet o provider IPTV."
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Selezionalo se il tuo ISP è in Russia e i parametri necessari sono predeterminati, incluse le funzionalità Internet/IP-Phone/ID IPTV VLAN e Priorità e Porta LAN (1/2/3/4).",
							children: [{
								type: "name",
								title: "ID VLAN multicast IPTV/Priorità",
								content: "Potete attivare la funzionalità multicast IPTV e configurare l'ID VLAN e la priorità secondo le indicazioni dell'ISP."
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Selezionate se il proprio ISP è ExStream di Singapore e i parametri necessari sono predeterminati, compresi Internet/ID e priorità VLAN IPTV e porta LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malaysia-Unifi",
							content: "Selezionate se il proprio ISP è Unifi Malaysia e i parametri necessari sono predeterminati, compresi Internet/ID VLAN e priorità e porta LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malaysia-Maxis",
							content: "Selezionate se il proprio ISP è Maxis Malaysia e i parametri necessari sono predeterminati, compresi Internet/telefono IP/ID e priorità VLAN IPTV e porta LAN (1/2/3/4). "
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Selezionate se il vostro ISP è Portugal-MEO e i parametri necessari sono predeterminati, inclusi ID VLAN, Priorità e le funzioni delle porte LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Selezionate se il vostro ISP è Portugal-Vodafone e i parametri necessari sono predeterminati, inclusi Internet/IP-Phone/IPTV VLAN ID e Priorità. Potete riassegnare alle vostre porte LAN le loro rispettive funzioni secondo necessità (fornitore Internet/ fornitore IPTV/ fornitore IP-Phone/ fornitore Internet-IPTV)."
						},
						{
							type: "name",
							title: "Personalizzato",
							content: "Selezionate se il proprio ISP non è elencato ma fornisce i parametri necessari, compresi  Internet/IP-Phone/IPTV VLAN ID e Priorità, caratteristiche porta LAN (1/2/3/4). ",
							children: [{
								type: "name",
								title: "Internet/Telefono IP/ID VLAN IPTV/ Priorità",
								content: "Configurate ID e priorità VLAN come previsto dal vostro ISP."
							},{
								type: "name",
								title: "Tag 802.11Q",
								content: "Selezionate per taggare i pacchetti Internet con 802.11Q."
							},{
								type: "name",
								title: "ID VLAN multicast IPTV/Priorità",
								content: "Potete attivare la funzionalità multicast IPTV e configurare l'ID VLAN e la priorità secondo le indicazioni dell'ISP."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Assegnate la porta LAN come funzione di provider Internet, di  telefonia IP o IPTV."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Fate clic su Salva per salvare tutte le impostazioni."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Impostazioni",
			CONTENT: [{
				type: "name",
				title: "Server DHCP",
				content: "Di default il server DHCP (Dynamic Host Configuration Protocol) è abilitato; assegna in modo dinamico i parametri TCP/IP ai dispositivi client dal pool di indirizzi IP. NON disabilitate il server DHCP a meno che non disponiate di un altro server DHCP o desideriate assegnare manualmente i parametri TCP/IP ad ogni dispositivo client della rete."
			},{
				type: "name",
				title: "Pool di indirizzi IP",
				content: "Immettete l'intervallo di indirizzi IP che possono essere assegnati ai client. "
			},{
				type: "name",
				title: "Durata lease indirizzo",
				content: "Immettete la durata di un indirizzo IP al client, che deve essere compresa tra 1 ei 2.880 minuti. Il valore di default è 120 minuti."
			},{
				type: "name",
				title: "Gateway predefinito",
				content: "Immettete l'indirizzo IP della LAN (facoltativo)."
			},{
				type: "name",
				title: "DNS primario/DNS secondario",
				content: "Immettete i parametri forniti dall'ISP. (facoltativo)."
			},{
				type:"paragraph",
				content:"Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Riserva Indirizzi",
			CONTENT: [{
				type: "paragraph",
				content: "Potete riservare manualmente un indirizzo IP per un client che si connette al router. Una volta riservato, l'indirizzo IP verrà assegnato dal server DHCP sempre allo stesso client."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "Mostra l'indirizzo MAC del client con indirizzo IP DHCP riservato."
			},{
				type: "name",
				title: "Indirizzo IP riservato",
				content: "Mostra l'indirizzo IP riservato del client."
			},{
				type: "name",
				title: "Descrizione",
				content: "Mostra una descrizione del dispositivo client."
			},{
				type: "name",
				title: "Stato",
				content: "Mostra lo stato corrente (abilitato o disabilitato) del dispositivo client. "
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per modificare o eliminare il client corrispondente."
			},{
				type: "step",
				title: "Per prenotare un indirizzo IP",
				content:[
					"1. Fate clic su Aggiungi.",
					"2. Immettete l'indirizzo MAC del client desiderato.",
					"3. Immettete l'indirizzo IP che desiderate riservare per il client.",
					"4. Immettete una descrizione del client.",
					"5. Selezionate Abilita.",
					"6. Fate clic su OK."
				]
			},{
				type: "step",
				title: "Per modificare o eliminare un client esistente",
				content: "Nella tabella, fate clic su Modifica o su Cestino per modificare o eliminare il dispositivo corrispondente. "
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "Elenco client DHCP",
			CONTENT: [{
				type: "name",
				title: "Numero cliente",
				content: "Mostra il numero di client DHCP associati."
			},{
				type: "name",
				title: "Nome client",
				content: "Mostra il nome del client DHCP."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "Mostra l'indirizzo MAC."
			},{
				type: "name",
				title: "Indirizzo IP assegnato",
				content: "Mostra l'indirizzo IP assegnato al client dal server DHCP."
			},{
				type: "name",
				title: "Durata lease",
				content: "Mostra la durata rimanente dell'indirizzo IP del client."
			},{
				type: "name",
				title: "Aggiorna",
				content: "Fate clic per aggiornare l'elenco DHCP Client."
			}]
		},

		DDNS: {
			TITLE: "DNS dinamico",
			CONTENT: [{
				type: "paragraph",
				content: "DNS Dinamico (Domain Name System) vi permette di assegnare un host fisso e un nome dominio ad un indirizzo IP Internet dinamico. Quando fate hosting di siti website, server FTP o altri server, è utile farlo alle spalle del router. Per iniziare, dovete iscrivervi ad un fornitore di account DNS Dinamico come www.dyndns.com, quindi immettere le informazioni della vostra registrazione."
			},{
				type: "step",
				title: "Per impostare un DNS dinamico",
				content: [
					"1. Selezionate il provider di servizi DDNS.",
					"2. Immettete il nome utente e la password dell'account DDNS.",
					"3. Immettete il nome dominio che avete registrato con il fornitore DNS Dinamico.",
					"4. Selezionate l'intervallo di tempo dopo il quale verrà inviata la richiesta di aggiornamento del DNS Dinamico.",
					"5. Se il vostro fornitore è NO-IP, selezionate WAN IP Binding per assicurarvi che il nome dominio sia legato all'IP WAN di questo router.",
					"6. Fate clic su Login e Salva."
				]
			},{
				type: "note",
				title:"Nota",
				content: "Se volete usare un nuovo account DDNS, fate prima logout e poi login con il nuovo account."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "DNS dinamico",
			CONTENT: [{
				type: "paragraph",
				content: "DNS Dinamico (Domain Name System) vi permette di assegnare un host fisso e un nome dominio ad un indirizzo IP Internet dinamico. Quando fate hosting di siti website, server FTP o altri server, è utile farlo alle spalle del router. Per iniziare, dovete iscrivervi ad un fornitore di account DNS Dinamico come www.dyndns.com, quindi immettere le informazioni della vostra registrazione."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Elenco Nomi Dominio",
			CONTENT: [{
				type: "paragraph",
				content: "Questa tabella mostra i nomi dominio DNS Dinamico che sono registrati sul vostro TP-Link ID."
			},{
				type:"step",
				title: "Registra un nuovo nome dominio",
				content: [
					"1. Fate clic su Registra.",
					"2. Immettete il nome dominio.",
					"3. Fate clic su Salva."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Routing statico",
			CONTENT: [{
				type: "paragraph",
				content: "Il routing statico viene utilizzato per predeterminare un percorso fisso per i pacchetti di informazioni di rete per raggiungere un host o una rete specifica."
			},{
				type: "step",
				title: "Per impostare un routing statico",
				content: [
					"1. Fate clic su Aggiungi.",
					"2. Rete di destinazione - Immettete un indirizzo IP in formato decimale puntato per assegnare il percorso statico a questa voce.",
					"3. Subnet mask - Immettete una subnet mask in formato decimale puntato per determinare la porzione di rete e di host dell'indirizzo IP.",
					"4. Gateway di default - Immettete un indirizzo IP gateway in formato decimale puntato per collegare il router alla rete o all'host.",
					"5. Interfaccia - Selezionate LAN o WAN per specificare il tipo di rete di destinazione.",
					"6. Descrizione - Immettete una breve descrizione di questa voce.",
					"7. Selezionate Abilita.",
					"8. Fate clic su OK."
				]
			},{
				type: "step",
				title: "Per modificare o eliminare un voce esistente",
				content: "Nella tabella, fate clic sull'icona Modifica o Cestino per modificare o eliminare la voce corrispondente."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Tabella di routing del sistema",
			CONTENT: [{
				type: "paragraph",
				content: "La tabella di routing del sistema mostra tutte le voci delle route valide attualmente in uso."
			},{
				type: "paragraph",
				content: "Fate clic su Aggiorna per aggiornare la tabella di routing."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Impostazioni",
			CONTENT: [{
				type: "name",
				title: "Regione",
				content: "Selezionate la regione dal menu a discesa. Se il paese o la regione non è elencato, potrebbe non essere possibile utilizzare la radio wireless in quel paese."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Wireless 2.4GHz",
			CONTENT: [{
				type: "name",
				title: "Abilita wireless",
				content: "Selezionate la casella di controllo per abilitare la frequenza wireless 2.4GHz."
			},{
				type: "name",
				title: "Nome di rete wireless (SSID)",
				content: "Potete lasciare il nome di default della rete (SSID), oppure immettere un nuovo nome (fino a 32 caratteri). Il campo fa distinzione tra maiuscole e minuscole."
			},{
				type: "name",
				title: "Nascondi SSID",
				content: "Selezionate la casella se desiderate nascondere il nome della rete 2.4GHz (SSID) dall'elenco delle reti Wi-Fi."
			},{
				type: "name",
				title: "Sicurezza",
				content: "Selezionate una delle seguenti opzioni di sicurezza:",
				children: [{
					type: "name",
					title: "Nessuna sicurezza",
					content: "Selezionate l'opzione per disabilitare la sicurezza wireless. Vi consigliamo di attivare la sicurezza wireless per proteggere la rete wireless da accessi non autorizzati."
				},{
					type: "name",
					title: "WPA/WPA2-Personale",
					content: "Selezionate l'opzione per abilitare il metodo di autenticazione standard basato sull'utilizzo di una chiave già condivisa (PSK), detta anche passphrase. Opzione consigliata. Se selezionata, configurate quanto segue.",
					children: [{
						type: "name",
						title: "Versione",
						content: "Selezionate una versione di sicurezza per la rete wireless.",
						children: [{
							type: "name",
							title: "Automatica",
							content: "L'opzione supporta implementazioni multiple del WPA (Wi-Fi Protected Access) standard, come WPA e WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "L'opzione supporta solo la crittografia TKIP che offre un buon livello di sicurezza."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "L'opzione supporta la crittografia AES che garantisce un miglior livello di sicurezza rispetto a WPA-PSK ed è consigliata."
						}]
					},{
						type: "name",
						title: "Crittografia",
						content: "Selezionate un tipo di crittografia di sicurezza: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), o Automatica (per TKIP e AES). Consigliamo di NON utilizzare la crittografia TKIP se il router funziona in modalità 802.11n, perché non è supportata dalle specifiche 802.11n. Se selezionate TKIP, la funzione WPS sarà disabilitata."
					},{
						type: "name",
						title: "Password",
						content: "Immettete in questo campo una password wireless composta di 8-63 caratteri ASCII, o 8-64 caratteri esadecimali."
					}]
				},{
					type: "name",
					title: "WPA / WPA2-Enterprise",
					content: "Selezionate l'opzione per abilitare il metodo di autenticazione più avanzato utilizzando un server RADIUS (Remote Authentication Dial In User Service). Se l'opzione è selezionata, la funzione WPS sarà disabilitata.",
					children: [{
						type: "name",
						title: "Versione",
						content: "Selezionate una versione di sicurezza per la rete wireless.",
						children:[{
							type: "name",
							title: "Automatica",
							content: "L'opzione supporta implementazioni multiple del WPA (Wi-Fi Protected Access) standard, come WPA e WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "L'opzione supporta solo la crittografia TKIP che offre un buon livello di sicurezza."
						},{
							type: "name",
							title: "WPA2",
							content: "L'opzione supporta la crittografia AES che garantisce un miglior livello di sicurezza rispetto a WPA-PSK ed è consigliata."
						}]
					},{
						type: "name",
						title: "Crittografia",
						content: "Selezionate un tipo di crittografia di sicurezza: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) o Automatica (per TKIP e AES). Consigliamo di NON utilizzare la crittografia TKIP se il router funziona in modalità 802.11n, perché non è supportata dalle specifiche 802.11n. Se selezionate TKIP, la funzione WPS sarà disabilitata."
					},{
						type: "name",
						title: "IP server RADIUS",
						content: "Immettete l'indirizzo IP del server RADIUS."
					},{
						type: "name",
						title: "Porta RADIUS",
						content: "Immettete il numero di porta del server RADIUS."
					},{
						type: "name",
						title: "Password RADIUS",
						content: "Immettete la password condivisa del server RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Selezionate l'opzione per abilitare il metodo di autenticazione di base se uno dei dispositivi client può accedere alla rete wireless solo utilizzando il protocollo WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Tipo",
						content: "Selezionate un tipo di autenticazione per la rete wireless. Il valore di default è Automatica, che sceglie automaticamente tra Sistema aperto o Chiave condivisa in base alla capacità e alla richiesta di accesso del client wireless."
					},{
						type: "name",
						title: "Formato chiave WEP",
						content: "Utilizzate il formato ASCII o selezionate Esadecimale. Il formato ASCII è una combinazione di caratteri alfabetici e numerici. Il formato esadecimale è una combinazione di numeri (0-9) e lettere (A-F, a-f)."
					},{
						type: "name",
						title: "Tipo di chiave",
						content: "Selezionate la lunghezza della chiave WEP.",
						children: [{
							type: "name",
							title: "64 bit",
							content: "Permette di inserire 10 cifre esadecimali (0-9, A-F, a-f) o 5 caratteri ASCII nel campo Valore WEP."
						},{
							type: "name",
							title: "128 bit",
							content: "Permette di inserire 26 cifre esadecimali (0-9, A-F, a-f) o 13 caratteri ASCII nel campo Valore WEP."
						}]
					},{
						type: "name",
						title: "Valore chiave",
						content: "Immettete la chiave WEP nel rispettivo campo."
					}]
				}]
			},{
				type: "name",
				title: "Modalità",
				content: "Selezionate una modalità di trasmissione mista."
			},{
				type: "name",
				title: "Ampiezza Canale",
				content: "Selezionate l'ampiezza di canale per la rete wireless 2.4GHz."
			},{
				type: "name",
				title: "Canale",
				content: "Selezionate un canale operativo per la rete wireless 2.4GHz. Se non si verificano problemi di instabilità wireless, vi consigliamo di lasciare l'impostazione Automatica."
			},{
				type: "name",
				title: "Potenza di trasmissione",
				content: "Selezionate Alta, Media o Bassa per specificare la potenza di trasmissione dati. L'impostazione predefinita è Alta."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Wireless 5GHz",
			CONTENT: [{
				type: "name",
				title: "Abilita wireless",
				content: "Selezionate la casella di controllo per abilitare il wireless 5GHz."
			},{
				type: "name",
				title: "Nome di rete wireless (SSID)",
				content: "Potete lasciare il nome di default della rete (SSID), oppure immettere un nuovo nome (fino a 32 caratteri). Il campo fa distinzione tra maiuscole e minuscole."
			},{
				type: "name",
				title: "Nascondi SSID",
				content: "Seleziona la casella se desiderate nascondere il nome della rete 5GHz (SSID) dall'elenco delle reti Wi-Fi."
			},{
				type: "name",
				title: "Sicurezza",
				content: "Selezionate una delle seguenti opzioni di sicurezza:",
				children: [{
					type: "name",
					title: "Nessuna sicurezza",
					content: "Selezionate l'opzione per disabilitare la sicurezza wireless. Vi consigliamo di attivare la sicurezza wireless per proteggere la rete wireless da accessi non autorizzati."
				},{
					type: "name",
					title: "WPA/WPA2-Personale",
					content: "Selezionate l'opzione per abilitare il metodo di autenticazione standard basato sull'utilizzo di una chiave già condivisa (PSK), detta anche passphrase. Opzione consigliata. Se selezionata, configurate quanto segue.",
					children: [{
						type: "name",
						title: "Versione",
						content: "Selezionate una versione di sicurezza per la rete wireless.",
						children: [{
							type: "name",
							title: "Automatica",
							content: "L'opzione supporta implementazioni multiple del WPA (Wi-Fi Protected Access) standard, come WPA e WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "L'opzione supporta solo la crittografia TKIP che offre un buon livello di sicurezza."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "L'opzione supporta la crittografia AES che garantisce un miglior livello di sicurezza rispetto a WPA-PSK ed è consigliata."
						}]
					},{
						type: "name",
						title: "Crittografia",
						content: "Selezionate un tipo di crittografia di sicurezza: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) o Automatica (per TKIP e AES). Consigliamo di NON utilizzare la crittografia TKIP se il router funziona in modalità 802.11n, perché non è supportata dalle specifiche 802.11n. Se selezionate TKIP, la funzione WPS sarà disabilitata."
					},{
						type: "name",
						title: "Password",
						content: "Immettete in questo campo una password wireless composta di 8-63 caratteri ASCII, o 8-64 caratteri esadecimali."
					}]
				},{
					type: "name",
					title: "WPA / WPA2-Enterprise",
					content: "Selezionate l'opzione per abilitare il metodo di autenticazione più avanzato utilizzando un server RADIUS (Remote Authentication Dial In User Service). Se l'opzione è selezionata, la funzione WPS sarà disabilitata.",
					children: [{
						type: "name",
						title: "Versione",
						content: "Selezionate una versione di sicurezza per la rete wireless.",
						children: [{
							type: "name",
							title: "Automatica",
							content: "L'opzione supporta implementazioni multiple del WPA (Wi-Fi Protected Access) standard, come WPA e WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "L'opzione supporta solo la crittografia TKIP che offre un buon livello di sicurezza."
						},{
							type: "name",
							title: "WPA2",
							content: "L'opzione supporta la crittografia AES che garantisce un miglior livello di sicurezza rispetto a WPA-PSK ed è consigliata."
						}]
					},{
						type: "name",
						title: "Crittografia",
						content: "Selezionate un tipo di crittografia di sicurezza: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) o Automatica (per TKIP e AES). Consigliamo di NON utilizzare la crittografia TKIP se il router funziona in modalità 802.11n, perché non è supportata dalle specifiche 802.11n. Se selezionate TKIP, la funzione WPS sarà disabilitata."
					},{
						type: "name",
						title: "IP server RADIUS",
						content: "Immettete l'indirizzo IP del server RADIUS."
					},{
						type: "name",
						title: "Porta RADIUS",
						content: "Immettete il numero di porta del server RADIUS."
					},{
						type: "name",
						title: "Password RADIUS",
						content: "Immettete la password condivisa del server RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Selezionate l'opzione per abilitare il metodo di autenticazione di base se uno dei dispositivi client può accedere alla rete wireless solo utilizzando il protocollo WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Tipo",
						content: "Selezionate un tipo di autenticazione per la rete wireless. Il valore di default è Automatica, che sceglie automaticamente tra Sistema aperto o Chiave condivisa in base alla capacità e alla richiesta di accesso del client wireless."
					},{
						type: "name",
						title: "Formato chiave WEP",
						content: "Utilizzate il formato ASCII o selezionate Esadecimale. Il formato ASCII è una combinazione di caratteri alfabetici e numerici. Il formato esadecimale è una combinazione di numeri (0-9) e lettere (A-F, a-f)."
					},{
						type: "name",
						title: "Tipo di chiave",
						content: "Selezionate la lunghezza della chiave WEP.",
						children:[{
							type: "name",
							title: "64 bit",
							content: "Permette di inserire 10 cifre esadecimali (0-9, A-F, a-f) o 5 caratteri ASCII nel campo Valore WEP."
						},{
							type: "name",
							title: "128 bit",
							content: "Permette di inserire 26 cifre esadecimali (0-9, A-F, a-f) o 13 caratteri ASCII nel campo Valore WEP."
						}]
					},{
						type: "name",
						title: "Valore chiave",
						content: "Immettete la chiave WEP nel rispettivo campo."
					}]
				}]
			},{
				type: "name",
				title: "Modalità",
				content: "Selezionate una modalità di trasmissione mista."
			},{
				type: "name",
				title: "Ampiezza Canale",
				content: "Selezionate l'amiezza del canale per la rete wireless 5GHz."
			},{
				type: "name",
				title: "Canale",
				content: "Selezionate un canale operativo per la rete wireless 5GHz. Se non si verificano problemi di instabilità wireless, vi consigliamo di lasciare l'impostazione Automatica."
			},{
				type: "name",
				title: "Potenza di trasmissione",
				content: "Selezionate Alta, Media o Bassa per specificare la potenza di trasmissione dati. L'impostazione predefinita è Alta."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		WPS: {	
			TITLE: "PIN del router",
			CONTENT: [{
				type: "paragraph",
				content: "Altri dispositivi possono connettersi a questo router tramite WPS con il PIN del router."
			},{
				type: "name",
				title: "PIN del router",
				content: "Abilita/disabilita la connessione dei dispositivi wireless al router tramite il PIN (Personal Identification Number) del router."
			},{
				type: "name",
				title: "PIN",
				content: "Mostra il PIN del router. Il PIN di default è riportato sull'etichetta del router. Fate clic su Genera per generare un nuovo codice PIN in modo casuale o fate clic su di default per ripristinare il PIN di default in fabbrica."
			}]
		},

		WPS_WIZARD: {
			TITLE: "Procedura guidata WPS",
			CONTENT:[{
				type: "name",
				title: "Pulsante (consigliata)",
				content: "Selezionate questo metodo di impostazione per abilitare la funzionalità WPS, che permette di collegare facilmente qualsiasi dispositivo WPS alla rete wireless utilizzando il pulsante WPS o il pulsante Connetti."
			},{
				type: "name",
				title: "PIN",
				content: "Selezionate questo metodo di impostazione per aggiungere manualmente un dispositivo immettendo nel campo il PIN WPS del dispositivo wireless e facendo clic su Connetti."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Stazioni Wireless Online",
			CONTENT: [{
				type: "name",
				title: "Numero cliente",
				content: "Mostra il numero del client wireless associato."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "Mostra l'indirizzo MAC del client wireless associato."
			},{
				type: "name",
				title: "Tipo di connessione",
				content: "Mostra la frequenza wireless (2.4GHz o 5GHz) del client wireless associato."
			},{
				type: "name",
				title: "Sicurezza",
				content: "Mostra il tipo di sicurezza del client wireless associato."
			},{
				type: "name",
				title: "Pacchetti ricevuti",
				content: "Mostra il numero di pacchetti ricevuti dal client wireless associato."
			},{
				type: "name",
				title: "Pacchetti inviati",
				content: "Mostra il numero di pacchetti inviati dal client wireless associato."
			},{
				type: "paragraph",
				content: "Fate clic su Aggiorna per aggiornare le informazioni della pagina."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Impostazioni",
			CONTENT: [{
				type: "paragraph",
				content: "La rete opspiti consente di impostare una rete separata con nome di rete wireless (SSID) e password separati che gli ospiti possono utilizzare per accedere alla rete wireless."
			},{
				type: "name",
				title: "Consenti agli ospiti di vedersi fra loro",
				content: "Selezionate la casella di controllo per consentire ai dispositivi wireless sulla rete ospiti di vedersi."
			},{
				type: "name",
				title: "Consenti agli ospiti di accedere alla rete locale",
				content: "Selezionate la casella di controllo per consentire ai dispositivi wireless sulla rete ospiti di accedere alle condivisioni e alle stampanti della rete locale. "
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "Wireless 2,4 GHz/5 GHz",
			CONTENT: [{
				type: "name",
				title: "Abilita Rete Ospiti",
				content: "Selezionate la casella di controllo per abilitare la funzione Rete Ospiti."
			},{
				type: "name",
				title: "Nome di rete wireless (SSID)",
				content: "Usate il nome rete Ospiti (SSID) di default o create un nuovo nome (fino a 32 caratteri)."
			},{
				type: "name",
				title: "Nascondi SSID",
				content: "Selezionate la casella se desiderate nascondere il nome rete ospiti SSID dall'elenco delle reti Wi-Fi."
			},{
				type: "name",
				title: "Sicurezza",
				content: "Se scegliete di non aggiornare mai la password, selezionate una delle seguenti opzioni di sicurezza:",
				children: [{
					type: "name",
					title: "Nessuna sicurezza",
					content: "Selezionate l'opzione per disabilitare la sicurezza wireless. Vi consigliamo vivamente di attivare la sicurezza wireless per proteggere la rete ospiti da accessi non autorizzati."
				},{
					type: "name",
					title: "WPA/WPA2-Personale",
					content: "Selezionate l'opzione per abilitare il metodo di autenticazione standard basato sull'utilizzo di una chiave già condivisa (PSK), detta anche passphrase. Se selezionata, configurate quanto segue.",
					children: [{
						type: "name",
						title: "Versione",
						content: "Selezionate una versione di sicurezza per la rete ospiti.",
						children: [{
							type: "name",
							title: "Automatica",
							content: "L'opzione supporta implementazioni multiple del WPA (Wi-Fi Protected Access) standard, come WPA e WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "L'opzione supporta solo la crittografia TKIP che offre un buon livello di sicurezza."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "L'opzione supporta la crittografia AES che garantisce un miglior livello di sicurezza rispetto a WPA-PSK ed è consigliata."
						}]
					},{
						type: "name",
						title: "Crittografia",
						content: "Selezionate un tipo di crittografia di sicurezza: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) o Automatica (per TKIP e AES). Consigliamo di NON utilizzare la crittografia TKIP se il router funziona in modalità 802.11n, perché non è supportata dalle specifiche 802.11n. Se selezionate TKIP, la funzione WPS sarà disabilitata."
					}]
			}]},{
				type: "name",
				title: "Password",
				content: "Utilizzate la password generata in modo casuale o create una password composta da 8-63 caratteri ASCII o 8-64 caratteri esadecimali (0-9, a-f, A-F)."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},

		NAT: {
			TITLE: "Gateway di livello applicazione (ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG consente di collegare al gateway i filtri trasversali NAT (Network Address Translation) per supportare la traduzione dell'indirizzo e della porta per alcuni protocolli di livello di applicazione \"control/data\": FTP, TFTP, H323 ecc. È raccomandata l'abilitazione ALG."
			},{
				type: "name",
				title: "Abilita ALG FTP",
				content: "Se selezionata, permette ai client e ai server FTP (File Transfer Protocol) di trasferire i dati via NAT."
			},{
				type: "name",
				title: "Abilita ALG TFTP",
				content: "Se selezionata, permette ai client e ai server TFTP (Trivial File Transfer Protocol) di trasferire i dati via NAT."
			},{
				type: "name",
				title: "Abilita ALG H323",
				content: "Se selezionata, permette ai client Microsoft NetMeeting di comunicare via NAT."
			},{
				type: "name",
				title: "Abilita ALG RTSP",
				content: "Se selezionata, permette ai lettori multimediali client di comunicare con i server di flussi multimediali via NAT."
			},{
				type: "name",
				title: "Abilita passthrough PPTP",
				content: "Se selezionata, permette il tunneling delle sessioni point-to-point attraverso una rete IP e il passaggio attraverso il router."
			},{
				type: "name",
				title: "Abilita passthrough L2TP",
				content: "Se selezionata, permette il tunneling delle sessioni point-to-point layer 2 attraverso una rete IP e il passaggio attraverso il router."
			},{
				type: "name",
				title: "Abilita passthrough IPSec",
				content: "Se selezionata, permette il tunneling dei criteri IPSec (Internet Protocol security) attraverso una rete IP e il passaggio attraverso il router. IPSec utilizza i servizi crittografici di sicurezza per garantire comunicazioni private e sicure sulle reti IP."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Server Virtuali",
			CONTENT: [{
				type: "paragraph",
				content: "I server virtuali vengono utilizzati per impostare i servizi pubblici sulla rete locale. Un server virtuale è definito come una porta esterna, e tutte le richieste da Internet a questa porta esterna saranno reindirizzate a un computer designato, configurato con un indirizzo IP statico o riservato."
			},{
				type: "name",
				title: "Tipo di servizio",
				content: "Mostra il nome del server virtuale."
			},{
				type: "name",
				title: "Porta esterna",
				content: "Mostra il numero di porta o un intervallo di porte utilizzate dal server virtuale."
			},{
				type: "name",
				title: "IP interno",
				content: "Mostra l'indirizzo IP del computer che esegue l'applicazione di servizio."
			},{
				type: "name",
				title: "Porta interna",
				content: "Mostra il numero di porta del computer che esegue l'applicazione di servizio."
			},{
				type: "name",
				title: "Protocollo",
				content: "Mostra il protocollo utilizzato per l'applicazione di servizio: TCP, UDP o All (tutti i protocolli supportati dal router)."
			},{
				type: "name",
				title: "Stato",
				content: "Mostra lo stato corrente (abilitato o disabilitato) della regola di filtro specifica. "
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per modificare o eliminare la regola corrispondente."
			},{
				type: "step",
				title: "Per impostare una regola di server virtuale",
				content: [
					"1. Fate clic su Aggiungi.",
					"2. Fate clic su Mostra Servizi Esistenti per selezionare un servizio dall'elenco per popolare automaticamente il numero di porta appropriato nei campi Porta esterna e Porta interna. Se il servizio non è presente nell'elenco, immettete il numero della porta esterna (ad es.  21) o un intervallo di porte (ad es. 21-25). Lasciate vuoto il campo Porta interna se è uguale a Porta esterna, oppure immettete un numero di porta specifico (ad es. 21) se la porta esterna è una sola. Inserite l'indirizzo IP del computer che esegue l'applicazione di servizio in formato decimale puntato nel campo IP interno.",
					"3. Selezionate un protocollo per l'applicazione di servizio: TCP, UDP o All dall'elenco a discesa dei Protocolli.",
					"4. Selezionate Abilita.",
					"5. Fate clic su OK."
				]
			},{
				type: "step",
				title: "Per modificare o eliminare una regola di server virtuale",
				content: "Nella tabella, fate clic sull'icona Modifica o Cestino corrispondente alla regola che desiderate modificare o eliminare."
			},{
				type: "step",
				title: "Per eliminare più regole",
				content: "Selezionate tutte le regole che desiderate eliminare e fate clic su Elimina sopra la tabella."
			},{
				type: "note",
				title: "Nota",
				content: "Se il dispositivo host locale ospita più di un tipo di servizio disponibile, è necessario creare una regola per ogni servizio."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Port Triggering",
			CONTENT: [{
				type: "paragraph",
				content: "Attivazione porte è utilizzata per inoltrare il traffico su una determinata porta a un server specifico della rete."
			},{
				type: "name",
				title: "Applicazione",
				content: "Mostra il nome dell'applicazione."
			},{
				type: "name",
				title: "Port Triggering",
				content: "Mostra la porta del traffico in uscita utilizzata per attivare una regola di filtro di una connessione in uscita."
			},{
				type: "name",
				title: "Protocollo di attivazione",
				content: "Mostra il protocollo utilizzato per l'attivazione porte. TCP, UDP o All (tutti i protocolli supportati dal router)."
			},{
				type: "name",
				title: "Porta esterna",
				content: "Mostra la porta o l'intervallo di porte utilizzate dal sistema remoto. Tramite una di queste porte sarà inoltrata una risposta al PC che attiva la regola. Potete immettere al massimo 5 gruppi di porte (o sezioni di porte). Ogni gruppo di porte deve essere separato da \",\" (virgola), ad esempio, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Protocollo esterno",
				content: "Mostra il protocollo utilizzato per la porta in ingresso: TCP, UDP o All (tutti i protocolli supportati dal router)."
			},{
				type: "name",
				title: "Stato",
				content: "Mostra lo stato corrente (abilitato o disabilitato) della regola di filtro specifica. "
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per modificare o eliminare la regola corrispondente."
			},{
				type: "step",
				title: "Per impostare una regola di attivazione porte",
				content: [{
					type: "note",
					title: "Nota",
					content: "Ogni regola può essere utilizzata da un solo host per volta."
				},
					"1. Fate clic su Aggiungi.",
					"2. Fate clic su Mostra applicazioni esistenti per selezionare un'applicazione dall'elenco e popolare automaticamente i campi con i valori predefiniti appropriati. Se desiderate aggiungere un'applicazione non inclusa nell'elenco, immettete manualmente Applicazione, Porta Triggering, Protocollo Triggering, Porta Esterna e Protocollo Esterno.",	
					"3. Selezionate Abilita.",
					"4. Fate clic su OK."
				]
			},{
				type: "step",
				title: "Per modificare o eliminare una regola di Attivazione porte",
				content: "Nella tabella, fate clic sull'icona Modifica o Cestino corrispondente alla regola che desiderate modificare o eliminare."
			},{
				type: "step",
				title: "Per eliminare più regole di Attivazione porte",
				content: "Nella tabella, selezionate tutte le regole che desiderate eliminare, quindi fate clic su Elimina, sopra la tabella."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "La funzione di host DMZ (Demilitarized Zone) consente a un host locale di essere accessibile via Internet per un servizio con un fine particolare, ad esempio giochi online o videoconferenze. In genere la DMZ consente a un singolo computer della LAN di aprire tutte le porte. Il computer deve essere configurato con un indirizzo IP statico e avere la funzione client DHCP disabilitata."
			},{
				type: "step",
				title: "Per assegnare a un computer o un server la funzione di server DMZ",
				content: [
					"1. Selezionate Abilita DMZ.",
					"2. Nel campo Indirizzo IP host DMZ, immettete l'indirizzo IP del computer locale che desiderate configurare come host DMZ.",
					"3. Fate clic su Salva."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Per impostazione predefinita, la funzione UPnP (Universal Plug-and-Play) è abilitata e consente a tutti i dispositivi, quali computer e appliance Internet, di scoprirsi  e comunicare tra loro sulla rete locale automaticamente."
			},{
				type: "paragraph",
				content: "L'elenco dei servizi UPnP mostra le informazioni sul dispositivo UPnP."
			},{
				type: "name",
				title: "Descrizione del servizio",
				content: "Mostra una breve descrizione dell'host locale che avvia la richiesta UPnP."
			},{
				type: "name",
				title: "Porta esterna",
				content: "Mostra la porta esterna aperta dall'host locale."
			},{
				type: "name",
				title: "Protocollo",
				content: "Mostra il tipo di protocollo di rete utilizzato dall'host locale."
			},{
				type: "name",
				title: "Indirizzo IP interno",
				content: "Mostra l'indirizzo IP dell'host locale."
			},{
				type: "name",
				title: "Porta interna",
				content: "Mostra la porta interna aperta dall'host locale. "
			},{
				type: "paragraph",
				content: "Fate clic su Aggiorna per aggiornare l'elenco dei server UPnP."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Impostazioni dispositivo",
			CONTENT: [{
				type: "paragraph",
				content: "La pagina Impostazioni dispositivo visualizza le informazioni di qualsiasi dispositivo di storage USB collegato tramite la porta USB."
			},{
				type: "name",
				title: "Scansiona",
				content: "Solitamente il router rileva automaticamente qualsiasi dispositivo appena collegato. Se ciò non avviene, fate clic sul pulsante per eseguire l'analisi di ogni nuovo dispositivo connesso e aggiornare la pagina con le informazioni aggiornate."
			},{
				type: "name",
				title: "Volume",
				content: "Mostra il nome del volume USB."
			},{
				type: "name",
				title: "Capacità",
				content: "Mostra la capacità di storage totale del dispositivo USB. "
			},{
				type: "name",
				title: "Spazio libero",
				content: "Mostra lo spazio di storage corrente disponibile. "
			},{
				type: "name",
				title: "Rimozione sicura",
				content: "Fate clic sul pulsante per disconnettere in modo sicuro il dispositivo di storage USB prima di scollegarlo fisicamente dal router."
			},{
				type: "paragraph",
				content: "Il pulsante Rimozione sicura appare solo quando vi è un dispositivo di storage USB collegato al router, e non sarà possibile smontare il dispositivo USB mentre il volume corrente è occupato."
			},{
				type: "name",
				title: "Attivo",
				content: "Questa casella di controllo appare solo quando vi è un dispositivo di storage USB collegato al router. Selezionate per abilitare la condivisione di file del dispositivo USB."
			},{
				type: "step",
				title: "Per impostare un file server",
				content: [
				"1. Collegate il dispositivo storage USB alla porta USB del router tramite un cavo USB.",
				"2. Il nuovo dispositivo USB dovrebbe essere rilevato automaticamente dal router e le relative informazioni visualizzate nella sezione Impostazioni dispositivo. In caso contrario, fate clic su Scansiona.",
				"3. Selezionate Attiva per attivare la condivisione di file."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Account di condivisione",
			CONTENT: [{
				type: "name",
				title: "Account",
				content: "È possibile selezionare Utilizza account di default per accedere ai file e alle cartelle condivise o Utilizza nuovo account e immettere le seguenti informazioni per creare un nuovo account utente."
			},{
				type: "name",
				title: "Nome utente/password",
				content: "Immettete una stringa alfanumerica composta da un massimo di 15 caratteri. Il nome utente deve iniziare con una lettera dell'alfabeto. I campi fanno distinzione tra maiuscole e minuscole."
			},{
				type: "name",
				title: "Conferma Password",
				content: "Immettete nuovamente la password per confermare che non ci siano errori di battitura. Il campo fa distinzione tra maiuscole e minuscole."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Impostazioni di condivisione",
			CONTENT: [{
				type: "name",
				title: "Nome rete/server multimediale",
				content: "Mostra il nome utilizzato per accedere al dispositivo di storage USB collegato."
			},{
				type: "name",
				title: "Abilita",
				content: "Selezionate per abilitare il metodo di accesso."
			},{
				type: "name",
				title: "Metodo di accesso",
				content: "Esistono tre metodi di accesso al dispositivo di storage USB collegato. È possibile scegliere uno o più metodi di accesso selezionando la casella di controllo corrispondente.",
				children: [{
					type: "name",
					title: "Risorse di rete",
					content: "Se abilitato, gli utenti della rete possono accedere al dispositivo di storage USB utilizzando un indirizzo IP assegnato (ad es. \\\\192.168.0.1)."
				},{
					type: "name",
					title: "FTP",
					content: "Se abilitato, i client FTP sulla rete locale possono accedere al dispositivo di storage USB utilizzando l'indirizzo IP assegnato, seguito dal numero di porta del server FTP (ad es. ftp://192.168.0.1:21)."
				},{
					type: "name",
					title: "FTP (via Internet)",
					content: "Se abilitato, gli utenti possono accedere da remoto all'unità di storage USB tramite FTP via Internet. La funzione supporta download e upload dei file. Per cambiare il numero di porta del server FTP, immettete un numero di porta e fate clic su Salva per applicare le modifiche."
				}]
			},{
				type: "name",
				title: "Collegamento",
				content: "Mostra l'indirizzo utilizzato per accedere al dispositivo storage USB condiviso."
			},{
				type: "name",
				title: "Porta",
				content: "Visualizza il numero di porta del server FTP. Utilizza il valore predefinito 21 o un valore compreso tra 1024 e 65535."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Condivisione cartella",
			CONTENT: [{
				type: "name",
				title: "Condividi tutte",
				content: "Attivate per condividere tutti i file e le cartelle o disattivate per condividere solo le cartelle selezionate."
			},{
				type: "name",
				title: "Abilita autenticazione",
				content: "Vi consigliamo di abilitare l'autenticazione per richiedere agli utenti di inserire nome utente e password validi per accedere alle cartelle di condivisione."
			},{
				type: "name",
				title: "Nome cartella",
				content: "Mostra il nome della cartella condivisa."
			},{
				type: "name",
				title: "Percorso cartella",
				content: "Mostra il percorso della cartella condivisa."
			},{
				type: "name",
				title: "Condivisione file multimediali",
				content: "Indica se la cartella condivisa può essere utilizzata o meno per condividere file multimediali."
			},{
				type: "name",
				title: "Nome volume",
				content: "Mostra il nome del volume condiviso."
			},{
				type: "name",
				title: "Stato",
				content: "Mostra lo stato della cartella condivisa per mezzo dall'indicatore a lampadina."
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per modificare o eliminare la cartella condivisa corrispondente."
			},{
				type: "name",
				title: "Sfoglia",
				content: "Fate clic per cercare una cartella di condivisione."
			},{
				type: "name",
				title: "Consenti Accesso a Rete Ospiti",
				content: "Selezionate per consentire ai client sulla rete ospiti di accedere alle cartelle condivise."
			},{
				type: "name",
				title: "Abilita autenticazione",
				content: "Selezionate per richiedere agli utenti di accedere alle cartelle condivise con un nome utente e una password validi."
			},{
				type: "name",
				title: "Attiva accesso in scrittura",
				content: "Selezionate per consentire agli utenti di apportare modifiche al contenuto della cartella."
			},{
				type: "name",
				title: "Attiva condivisione file multimediali",
				content: "Selezionate per abilitare la condivisione multimediale."
			},{
				type: "name",
				title:"Aggiorna",
				content: "Fate clic per aggiornare l'elenco delle cartelle di condivisione."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Server di stampa",
			CONTENT: [{
				type: "name",
				title:"Server di stampa",
				content: "Attivate per abilitare la funzione di server di stampa."
			},{
				type: "name",
				title:"Nome stampante",
				content: "Mostra il nome della stampante collegata al router."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Parental Control",
			CONTENT: [{
				type: "paragraph",
				content: "Con il Parental Control, è possibile bloccare siti Web inappropriati, espliciti e dannosi; limitare l'accesso per determinate ore del giorno (ad esempio, Facebook o YouTube durante l'orario di lavoro) e, al tempo stesso, proteggere tutti i dispositivi della rete domestica contro malware e phishing attraverso un punto di controllo centrale."
			},{
				type: "name",
				title: "Parental Control",
				content: "Attivate per abilitare la funzione Parental Control."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Dispositivi sottoposti al Parental Control",
			CONTENT: [{
				type: "name",
				title: "Nome dispositivo",
				content: "Mostra il nome di tutti i dispositivi client connessi che sono attualmente sottoposti al Parental Control."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "Mostra l'indirizzo MAC di tutti i dispositivi client connessi che sono attualmente sottoposti al Parental Control. "
			},{
				type: "name",
				title: "Tempo d'accesso a Internet",
				content: "Mostra i periodi con accesso limitato. La schedulazione temporale si basa sull'ora di sistema del router che può essere impostato in \"Strumenti Sistema -> Impostazioni Tempo\"."
			},{
				type: "name",
				title: "Descrizione",
				content: "Mostra una breve descrizione del dispositivo connesso."
			},{
				type: "name",
				title: "Stato",
				content: "Mostra lo stato corrente (abilitato o disabilitato) del Parental Control del dispositivo corrispondente. "
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per modificare o eliminare il dispositivo corrispondente."
			},{
				type: "step",
				title: "Per limitare un nuovo dispositivo client",
				content: [
					"1. Fate clic su Aggiungi.",
					"2. Fate clic su Mostra dispositivi esistenti e scegliere un dispositivo attualmente collegato dall'elenco dei dispositivi di accesso; oppure, immettete il nome del dispositivo e l'indirizzo MAC manualmente per aggiungere un dispositivo non collegato.",
					"3. Fate clic sull'icona Tempo di Accesso a Internet per specificare un periodo di tempo durante il quale si applicherà la restrizione.",
					"4. Immettete una breve descrizione nel campo Descrizione (facoltativa).",
					"5. Selezionate Abilita.",
					"6. Fate clic su OK."
				]
			},{
				type: "paragraph",
				content: "Per modificare o eliminare una voce del Parental Control, fate clic su Modifica per modificare le informazioni o su Cestino per rimuovere la voce corrispondente."
			},{
				type: "paragraph",
				content: "Per eliminare più voci, selezionate tutte le voci e fate clic su Elimina, sopra la tabella."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Restrizione sul contenuto",
			CONTENT: [{
				type: "name",
				title: "Black list",
				content: "Contiene le parole chiave che saranno utilizzate per bloccare l'accesso a qualsiasi sito Web richiesto dai dispositivi client specificati nell'elenco Controlli genitori.",
				children: [{
					type: "paragraph",
					content: "Fate clic su Aggiungi Nuova Parola Chiave per aggiungere una parola chiave alla black list. Per eliminare una parola chiave, fate clic sul segno meno (-) a fianco della parola chiave che desiderate eliminare."
				}]
			},{
				type: "name",
				title: "White list",
				content: "Contiene gli indirizzi dei siti Web a cui i dispositivi client specificati nell'elenco Parental Control sono autorizzati ad accedere.",
				children: [{
					type: "paragraph",
					content: "Fate clic su Aggiungi nuovo nome di dominio per aggiungere un sito Web alla white list. Per eliminare un sito Web, fate clic sul segno meno (-) a fianco del sito Web che desiderate eliminare."
				}]
			},{
				type: "paragraph",
				content: "Le parole chiave possono essere anche i nomi di dominio, ad esempio, www.mail.google.com o www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "La qualità del servizio (QoS) aiuta a definire la priorità del traffico Internet in base alle proprie esigenze. Nell'elenco delle regole QoS è possibile specificare il livello di priorità di un dispositivo o un'applicazione."
			},{
				type: "name",
				title: "Abilita QoS",
				content: "Selezionate la casella per abilitare la funzione QoS."
			},{
				type: "name",
				title: "Banda in Upload",
				content: "Inserite la banda massima di upload fornita dal proprio ISP. "
			},{
				type: "name",
				title: "Banda in Download",
				content: "Immettete la banda massima di download fornita dal proprio ISP."
			},{
				type: "name",
				title: "Priorità alta",
				content: "Specificate una percentuale per il traffico con priorità alta."
			},{
				type: "name",
				title: "Priorità media",
				content: "Specificate una percentuale per il traffico con priorità media."
			},{
				type: "name",
				title: "Priorità bassa",
				content: "Specificate una percentuale per il traffico con priorità bassa."
			},{
				type: "note",
				title: "Nota",
				content: "Il livello massimo (percentuale) di tutte le priorità è 1."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		QOS_RULE: {
			TITLE: "Elenco regole QoS",
			CONTENT: [{
				type: "name",
				title: "Tipo",
				content: "Selezionate un tipo da aggiungere all'elenco delle regole QoS."
			},{
				type: "step",
				title: "Per impostare una regola per la priorità alta/media/bassa per dispositivo",
				content: [
					"1. Fate clic su Aggiungi.",
					"2. Selezionate Per Dispositivo.",
					"3. Fate clic su Mostra Dispositivi Esistenti per selezionare il dispositivo desiderato dalla Lista Dispositivi di Accesso, oppure immettete il nome del dispositivo e il suo indirizzo MAC manualmente nei campi Nome dispositivo e Indirizzo MAC.",
					"4. Fate clic su OK."
				]
			},{
				type: "step",
				title: "Per impostare una regola per la priorità alta/media/bassa per applicazione",
				content: [
					"1. Fate clic su Aggiungi.",
					"2. Selezionate Per applicazione.",
					"3. Selezionate l'applicazione desiderata dalla Lista Applicazioni o potete customizzare un applicazione configurando nome, protocollo e porta di destinatione (1-65535) nei campi corrispondenti, potete immettere una porta singola, più porte o un range di porte, usando le virgole per separare (es. 21,36-105,111).",
					"4. Fate clic su OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Aggiornamento Database",
			CONTENT: [{
				type: "name",
				title: "Nuovo File Database",
				content: "Fate clic su Sfoglia per individuare il nuovo database. Selezionate e fate clic su Aggiorna per aggiornare il database a una versione più recente."
			},{
				type: "name",
				title: "Versione Database",
				content: "Mostra la versione di database corrente."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Firewall",
			CONTENT: [{
				type: "name",
				title: "Firewall SPI",
				content: "Il firewall SPI (Stateful Packet Inspection) previene gli attacchi informatici e convalida il traffico passante dal router in base al protocollo."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "Protezione DoS",
			CONTENT: [{
				type: "name",
				title: "Protezione DoS",
				content: "La protezione DoS (Denial of Service) protegge la LAN dagli attacchi DoS, impedendo il blocco del server causato dal numero eccessivo di richieste."
			},{
				type: "name",
				title: "Filtro attacco ICMP-FLOOD",
				content: "Attivate per prevenire attacchi flood ICMP (Internet Control Message Protocol).",
				children: [{
					type: "name",
					title: "Disattivo",
					content: "Nessuna protezione."
				},{
					type: "name",
					title: "Basso",
					content: "Livello basso di protezione e impatto basso sulle prestazioni del router."
				},{
					type: "name",
					title: "Medio",
					content: "Livello moderato di protezione e impatto moderato sulle prestazioni del router."
				},{
					type: "name",
					title: "Alto",
					content: "Livello alto di protezione e impatto notevole sulle prestazioni del router."
				}]
			},{
				type: "name",
				title: "Filtro attacco UDP-FLOOD",
				content: "Attivate per prevenire attacchi flood UDP (User Datagram Protocol)."
			},{
				type: "name",
				title: "Filtro attacco TCP-SYN-FLOOD",
				content: "Attivate per prevenire attacchi flood TCP-SYN (Transmission Control Protocol-Synchronize)."
			},{
				type: "name",
				title: "Ignora pacchetti ping da porta WAN",
				content: "Consente di ignorare i pacchetti ping provenienti dalla porta WAN."
			},{
				type: "name",
				title: "Vieta pacchetti ping da porta LAN",
				content: "Consente di vietare i pacchetti ping provenienti dalla porta WAN."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Elenco host DoS bloccati",
			CONTENT: [{
				type: "name",
				title: "Elenco host DoS bloccati",
				content: "Elenca gli indirizzi IP e MAC di qualsiasi fonte di attacco DoS bloccato."
			},{
				type: "step",
				title: "Per eliminare una voce",
				content: "Nell'elenco Host, selezionate la voce che volete eliminare e fate clic su Elimina, sopra la tabella."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Controllo Accesso",
			CONTENT: [{
				type: "paragraph",
				content: "Controllo Accessi viene usato per autorizzare o bloccare l'accesso alla vostra rete da parte di determinati computer e altri dispositivi. Quando un dispositivo è bloccato non può comunicare con altri dispositivi ne può navigare in Internet."
			},{
				type: "paragraph",
				content: "Per utilizzare Access Control, abilitate la funzione e specificate una black list o una white list. Se Access Control è disabilitato (Off), tutti i dispositivi, compresi quelli sulla black list, possono connettersi."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Modalità di accesso",
			CONTENT: [{
				type: "name",
				title: "Black list",
				content: "L'accesso alla rete verrà negato solo ai dispositivi in black list."
			},{
				type: "name",
				title: "White list",
				content: "L'accesso alla rete verrà garantito solo ai dispositivi in white list."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Dispositivi online",
			CONTENT: [{
				type: "name",
				title: "Nome dispositivo",
				content: "Mostra il nome del dispositivo connesso."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "Mostra l'indirizzo IP del dispositivo connesso."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "Mostra l'indirizzo MAC del dispositivo connesso."
			},{
				type: "name",
				title: "Tipo di connessione",
				content: "Mostra il tipo di connessione del dispositivo connesso."
			},{
				type: "step",
				title: "Per bloccare un dispositivo",
				content: "Nella tabella Dispositivi Online, nella colonna Modifica, fate clic sull'icona Blocca corrispondente al dispositivo che desiderate bloccare."
			},{
				type: "step",
				title: "Per bloccare più dispositivi",
				content: "Nella tabella Dispositivi online, selezionate tutti i dispositivi che desiderate bloccare, quindi fate clic su Blocca, sopra la tabella.  Il dispositivo verrà aggiunto automaticamente all'elenco dei dispositivi black list o white list."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Dispositivi in Blacklist/Whitelist",
			CONTENT: [{
				type: "step",
				title: "Per aggiungere un dispositivo alla black list o alla white list",
				content: [
					"1. Fate clic su Aggiungi.",
					"2. Immettete il nome del dispositivo.",
					"3. Immettete l'indirizzo MAC del dispositivo.",
					"4. Fate clic su OK."
				]
			},{
				type: "step",
				title: "Per modificare o eliminare un dispositivo nella black list/white list",
				content: "Nella tabella Black list/White list, fate clic su Modifica o su Cestino in corrispondenza del dispositivo che desiderate modificare o eliminare."
			},{
				type: "step",
				title: "Per eliminare più dispositivi nella black list/white list",
				content: "Nella tabella Black list/White list, selezionate tutti i dispositivi che desiderate eliminare, quindi fate clic su Elimina, sopra la tabella."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Impostazioni",
			CONTENT: [{
				type: "paragraph",
				content: "La funzione ARP (Address Resolution Protocol) binding permette di controllare l'accesso di un computer specifico della LAN associando l'indirizzo IP e l'indirizzo MAC del dispositivo. ARP binding impedisce inoltre ad altri dispositivi di utilizzare un indirizzo IP specifico."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "Elenco ARP",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra gli indirizzi MAC e IP dei dispositivi attualmente connessi."
			},{
				type: "name",
				title: "Numero voce ARP",
				content: "Mostra il numero totale di dispositivi attualmente connessi al router."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "Mostra l'indirizzo MAC del dispositivo connesso."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "Mostra l'indirizzo IP assegnato al dispositivo connesso."
			},{
				type: "name",
				title: "Associato",
				content: "Indica se gli indirizzi MAC e IP sono associati o meno."
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per associare o eliminare la voce corrispondente nell'elenco."
			},{
				type: "note",
				title: "Nota",
				content: "Non è possibile associare lo stesso indirizzo IP a più indirizzi MAC."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Elenco associazioni",
			CONTENT: [{
				type: "step",
				title: "Per impostare un dispositivo con ARP binding",
				content: [
					"1. Fate clic su Aggiungi.",
					"2. Immettete l'indirizzo MAC del dispositivo.",
					"3. Immettete un indirizzo IP che desiderate associare all'indirizzo MAC di cui sopra.",
					"4. Immettete una descrizione del dispositivo (facoltativa).",
					"5. Selezionate Abilita.",
					"6. Fate clic su OK."
				]
			},{
				type: "step",
				title: "Per modificare o eliminare una voce",
				content: "Nell'elenco Associazioni, fate clic sull'icona Modifica o sull'icona del Cestino che corrisponde alla voce che desiderate modificare o cancellare."
			},{
				type: "step",
				title: "Per eliminare più voci",
				content: "Nell'elenco Associazioni, selezionate tutte le voci che desiderate eliminare, quindi fate clic su Elimina, sopra la tabella."
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Selezionate per abilitare (On) o disabilitare (Off) la funzione IPv6 del router."
			},{
				type: "title",
				title: "Tipo di connessione Internet: IP statico",
			},{
				type: "name",
				title: "IP statico",
				content: "Selezionate questo tipo se l'ISP utilizza l'assegnazione di un indirizzo statico IPv6."
			},{
				type: "name",
				title: "Indirizzo IPv6/Gateway predefinito/DNS primario/DNS secondario",
				content: "Immettete i parametri forniti dall'ISP."
			},{
				type: "name",
				title: "Dimensione MTU",
				content: "La dimensione tipica di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.500 Byte. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
			},{
				type: "title",
				title: "Tipo di connessione Internet: IP dinamico",
			},{
				type: "name",
				title: "IP dinamico",
				content: "Selezionate questo tipo se l'ISP utilizza l'assegnazione dinamica dell'indirizzo IPv6."
			},{
				type: "name",
				title: "Indirizzo IPv6/DNS primario/DNS secondario",
				content: "Questi parametri vengono assegnati automaticamente dal server DHCPv6 dell'ISP."
			},{
				type: "name",
				title: "Rinnova",
				content: "Fate clic sul pulsante per ottenere nuovi parametri IPv6 dal server DHCPv6 dell'ISP."
			},{
				type: "name",
				title: "Rilascia",
				content: "Fate clic sul pulsante per rilasciare tutti gli indirizzi IPv6 assegnati dal server DHCPv6 dell'ISP."
			},{
				type: "name",
				title: "Ottieni indirizzo IPv6",
				content: "Selezionate DHCPv6 per ottenere un indirizzo IPv6 non temporaneo oppure SLAAC per ottenere un indirizzo IPv6 generato dal router advertisement packet, in base al vostro ISP."
			},{
				type: "name",
				title: "Delega di prefisso",
				content: "Selezionate Abilita per ottenere una Delegazione Prefisso dal Server DHCPv6 dall'ISP, o Disabilita per designare un prefisso indirizzo manualmente. I Client nella LAN genereranno un indirizzo IPv6 con questo prefisso."
			},{
				type: "name",
				title: "Indirizzo DNS",
				content: "Selezionate per ottenere in modo dinamico l'indirizzo dall'ISP oppure utilizzate il seguente indirizzo DNS. Se utilizzate il seguente indirizzo DNS, immettete manualmente l'indirizzo DNS fornito dall'ISP."
			},{
				type: "name",
				title: "DNS primario/DNS secondario",
				content: "Immettete i parametri manualmente oppure otteneteli dinamicamente dall'ISP."
			},{
				type: "title",
				title: "Tipo di connessione Internet: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Selezionate questo tipo se l'ISP utilizza PPPoEv6 e fornisce un nome utente e una password."
			},{
				type: "name",
				title: "Nome utente/password",
				content: "Immettete i parametri forniti dall'ISP."
			},{
				type: "name",
				title: "Indirizzo IPv6",
				content: "L'indirizzo verrà assegnato automaticamente dal server DHCPv6 dell'ISP, dopo che avrete inserito nome utente e password e fatto clic su Connetti."
			},{
				type: "name",
				title: "Indirizzo DNS",
				content: "Selezionate per ottenere in modo dinamico l'indirizzo dall'ISP oppure utilizzate il seguente indirizzo DNS. Se utilizzate il seguente indirizzo DNS, immettete manualmente l'indirizzo DNS fornito dall'ISP."
			},{
				type: "name",
				title: "Ottieni indirizzo IPv6",
				content: "Selezionate DHCPv6 per ottenere un indirizzo IPv6 non temporaneo, SLAAC per ottenere un indirizzo IPv6 generato dal router advertisement packet, oppure Specificato dall'ISP per immettere manualmente l'indirizzo IPv6, secondo il vostro ISP."
			},{
				type: "name",
				title: "Delega di prefisso",
				content: "Selezionate Abilita per ottenere una Delegazione Prefisso dal Server DHCPv6 dall'ISP, o Disabilita per designare un prefisso indirizzo manualmente. I Client nella LAN genereranno un indirizzo IPv6 con questo prefisso."
			},{
				type: "name",
				title: "Connetti",
				content: "Fate clic sul pulsante per connettervi a  Internet."
			},{
				type: "name",
				title: "Disconnetti",
				content: "Fate clic sul pulsante per disconnettervi da  Internet."
			},{
				type: "title",
				title: "Tipo di connessione Internet: tunnel 6to4"
			},{
				type: "name",
				title: "tunnel 6to4",
				content: "Selezionate questo tipo se l'ISP utilizza la distribuzione 6to4 per assegnare gli indirizzi."
			},{
				type: "name",
				title: "Indirizzo IPv4/Subnet mask IPv4/Gateway predefinito IPv4/Indirizzo tunnel",
				content: "Questi parametri saranno generati dinamicamente dalle informazioni IPv4 della porta WAN dopo che avrete fatto clic su Connetti."
			},{
				type: "name",
				title: "Utilizza il seguente server DNS",
				content: "Selezionate la casella di controllo per immettere manualmente il DNS primario e/o il DNS secondario come indicato dal vostro ISP."
			},{
				type: "name",
				title: "Connetti",
				content: "Fate clic sul pulsante per connettervi a  Internet."
			},{
				type: "name",
				title: "Disconnetti",
				content: "Fate clic sul pulsante per disconnettervi da  Internet."
			},{
				type: "title",
				title: "Tipo di connessione Internet: Pass-Through (Bridge)"
			},{
				type: "paragraph",
				content: "Selezionate questo tipo se l'ISP utilizza la  distribuzione di rete pass-through (bridge). Per questo tipo di connessione non è richiesta alcuna configurazione."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Tranne Pass-Through (bridge), gli altri 6 tipi di connessione Internet richiedono la configurazione di IPv6."
			},{
				type: "name",
				title: "Tipo assegnato",
				content: "Selezionate quello appropriato in base all'ISP.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Per assegnare automaticamente gli indirizzi IP ai client della LAN.",
					children: [{
						type: "name",
						title: "Prefisso indirizzo",
						content: "Immettete il prefisso indirizzo fornito dall'ISP."
					},{
						type: "name",
						title: "Durata rilascio",
						content: "La durata di validità dell'indirizzo IP assegnato espressa in secondi. Mantenete l'impostazione predefinita di 86.400 secondi o modificatela se richiesto dall'ISP."
					},{
						type: "name",
						title: "Indirizzo",
						content: "È l'indirizzo IP assegnato automaticamente dal server DHCPv6 dell'ISP."
					}]
				},{
					type: "name",
					title: "SLAAC + Stateless DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefisso indirizzo",
						content: "Immettete il prefisso indirizzo fornito dall'ISP."
					},{
						type: "name",
						title: "Indirizzo",
						content: "Questo è l'indirizzo IP assegnato automaticamente dall'ISP."
					}]
				},{
					type: "name",
					title: "SLAAC + RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefisso indirizzo",
						content: "Immettete il prefisso indirizzo fornito dall'ISP."
					},{
						type: "name",
						title: "Indirizzo",
						content: "Questo è l'indirizzo IP assegnato automaticamente dall'ISP."
					}]
				}]
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "Clona MAC",
			CONTENT: [{
				type: "name",
				title: "Utilizza indirizzo MAC predefinito",
				content: "NON modificate l'indirizzo MAC di default del router, per evitare l'insorgere di problemi nel caso in cui l'ISP vincoli l'indirizzo IP assegnato all'indirizzo MAC."
			},{
				type: "name",
				title: "Utilizza indirizzo MAC computer corrente",
				content: "Selezionate per copiare l'indirizzo MAC corrente del computer connesso al router, nel caso in cui l'ISP vincoli l'indirizzo IP assegnato all'indirizzo MAC del computer."
			},{
				type: "name",
				title: "Utilizza indirizzo MAC personalizzato",
				content: "Immettete l'indirizzo MAC manualmente, nel caso in cui l'ISP vincoli l'indirizzo IP assegnato a un indirizzo MAC specifico."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Impostazione data/ora",
			CONTENT: [{
				type: "step",
				title: "Per sincronizzare automaticamente l'ora",
				content: [
					"1. Nel campo Imposta Ora, selezionate Ottieni Automaticamente da Internet.",
					"2. Selezionate il fuso orario locale dal menu a discesa.",
					"3. Nel campo Server NTP I, immettete l'indirizzo IP o il nome del dominio del server NTP desiderato.",
					"4. Nel campo Server NTP II, immettete l'indirizzo IP o il nome di dominio del secondo server NTP (facoltativo).",
					"5. Fate clic su Ottieni.",
					"6. Fate clic su Salva."
				]
			},{
				type: "step",
				title: "Per impostare manualmente la data e l'ora",
				content: [
					"1. Nel campo Imposta ora, selezionate Manualmente.",
					"2. Immettete la data corrente.",
					"3. Selezionate l'ora corrente (nel formato a 24 ore, ad es. 16.00.00 equivale a 04:00 PM).",
					"4. Fate clic su Salva."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Impostazioneoralegale",
			CONTENT: [{
				type: "step",
				title: "Per impostare l'ora legale",
				content: [
					"1. Selezionate Attiva ora legale.",
					"2. Selezionate la data e l'ora in cui avrà inizio l'ora legale nel vostro fuso orario locale.",
					"3. Selezionate la data e l'ora in cui avrà termine l'ora legale nel vostro fuso orario locale.",
					"4. Fate clic su Salva."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Diagnostica",
			CONTENT: [{
				type: "paragraph",
				content: "Il router fornisce gli strumenti Ping e Traceroute che consentono di risolvere i problemi di connettività di rete. Lo strumento Ping invia i pacchetti a un indirizzo IP o un nome di dominio di destinazione e registra i risultati, come ad esempio il numero di pacchetti inviati e ricevuti e il tempo di andata e ritorno. Lo strumento Traceroute invia i pacchetti a un indirizzo IP o un nome di dominio di destinazione e visualizza il numero di hop e il tempo impiegati per raggiungere la destinazione."
			},{
				type: "paragraph",
				content: "Potete utilizzare gli strumenti Ping e Traceroute con un dispositivo locale tramite l'indirizzo IP o un nome di dominio, come google.com, yahoo.com, ecc."
			},{
				type: "step",
				title: "Per eseguire una diagnosi con Ping",
				content: [
					"1. Immettete l'indirizzo IP o il nome di dominio di destinazione.",
					"2. Fate clic sull'icona Freccia per aprire il menu Avanzate e specificate il conteggio dei ping e la dimensione del pacchetto ping (facoltativo).",
					"3. Fate clic su Start."
				]
			},{
				type: "step",
				title: "Per eseguire una diagnosi con Traceroute",
				content: [
					"1. Immettete l'indirizzo IP o il nome di dominio di destinazione.",
					"2. Fate clic sull'icona Freccia per aprire il menu Avanzate e specificare il numero di hop (da raggiungere) nel campo Traceroute Max TTL (Time to Live). Di default è 20 (facoltativo).",
					"3. Fate clic su Start."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Aggiornamento Firmware",
			CONTENT: [{
				type: "paragraph",
				content: "Prima di aggiornare il firmware del router scaricate l'ultimo aggiornamento firmware dal sito Web <a class=\"link\" target=\"blank\" href=\"http://www.tp-link.com/it/Support/\">TP-Link Support</a>."
			},{
				type: "step",
				title: "IMPORTANTE: Per evitare il fallimento dell'aggiornamento, procedete come segue:",
				content: [
					"Assicuratevi che il firmware più recente corrisponda alla versione hardware (come mostrato alla pagina Aggiornamento Firmware).",
					"Assicuratevi di utilizzare una connessione stabile tra il router e il computer. Consigliamo di NON aggiornare il firmware in modalità wireless.",
					"Rimuovete tutti i dispositivi di storage USB collegati al router prima di iniziare l'aggiornamento del firmware per evitare perdite di dati.",
					"Eseguite il backup della configurazione del router.",
					"NON spegnete il router durante l'aggiornamento firmware."
				]
			},{
				type: "step",
				title: "Per aggiornare il firmware del router",
				content: [
					"1. Fate clic su Sfoglia.",
					"2. Selezionate il file del firmware scaricato.",
					"3. Fate clic su Aggiorna."
				]
			},{
				type: "paragraph",
				content: "Il processo di aggiornamento richiede alcuni minuti prima di essere completato. NON spegnete il router durante l'aggiornamento."
			}]
		},
		
		BACKUP: {	
			TITLE: "Backup",
			CONTENT: [{
				type: "paragraph",
				content: "Vi consigliamo di eseguire il backup delle configurazioni correnti, nel caso in cui fosse necessario ripristinare il sistema a uno stato precedente o alle impostazioni di fabbrica."
			},{
				type: "paragraph",
				content: "Fate clic su Backup per salvare le configurazioni correnti sul computer. Assicuratevi di salvare il file di backup in una posizione sicura, che vi permetta di ripristinare facilmente il router in seguito, se necessario."
			}]
		},
		
		RESTORE: {
			TITLE: "Ripristino",
			CONTENT: [{
				type: "step",
				title: "Per ripristinare da un backup",
				content: [
					"1. Fate clic su Sfoglia.",
					"2. Selezionate il file di backup.",
					"3. Fate clic su Ripristina."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Ripristino Impostazione di Default",
			CONTENT: [{
				type: "paragraph",
				content: "Fate clic su Ripristino Impostazioni di Default per ripristinare le impostazioni di fabbrica del router."
			},{
				type: "note",
				title: "Nota",
				content: [
					"1. Il Factory Restore cancellerà tutte le impostazioni che avete effettuato nel router. Per rieffettuare login alla pagina di gestione del router, usate admin sia come username che come password.",
					"2. NON spegnete il router durante il backup o il processo di ripristino."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Gestione account",
			CONTENT: [{
				type: "paragraph",
				content: "Questa pagina vi permette di modificare il nome utente e/o la password di accesso e di impostare un indirizzo email per il recupero della password."
			},{
				type: "name",
				title: "Vecchia Username",
				content: "Immettete il nome utente corrente."
			},{
				type: "name",
				title: "Vecchia password",
				content: "Immettete la password corrente."
			},{
				type: "name",
				title: "Nuova usrname",
				content: "Immettete il nuovo nome utente."
			},{
				type: "name",
				title: "Nuova Password",
				content: "Immettete la nuova password."
			},{
				type: "name",
				title: "Confermate la nuova password",
				content: "Immettete nuovamente la password."
			},{
				type: "note",
				title: "Nota",
				content: "Se decidete di cambiare il nome utente e la password correnti utilizzati per accedere al router, assicuratevi di scrivere le nuove informazioni di accesso in un luogo sicuro."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Recupero password",
			CONTENT: [{
				type: "name",
				title: "Abilita Recupero password",
				content: "Si consiglia di abilitare la funzione Ripristino Password, che vi aiuta a resettare le vostre username e password via email."
			},{
				type: "name",
				title: "Da",
				content: "Immettete un indirizzo email valido da utilizzare per la posta in uscita."
			},{
				type: "name",
				title: "A",
				content: "Immettete un indirizzo email valido da utilizzare per la posta in arrivo."
			},{
				type: "name",
				title: "Server SMTP",
				content: "Immettete l'indirizzo del server SMTP che il router usa per inviare il codice di  verifica via email."
			},{
				type: "name",
				title: "Abilita autenticazione",
				content: "Selezionate Abilita Autenticazione se il server di posta in uscita richiede l'autenticazione per l'invio di email, e immettete il nome utente e la password nei campi corrispondenti. I campi fanno distinzione tra maiuscole e minuscole."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Gestione Locale",
			CONTENT: [{
				type: "paragraph",
				content: "Questa sezione permette di limitare il numero di dispositivi client della LAN a cui è consentito di accedere al router utilizzando l'autenticazione basata sull'indirizzo MAC."
			},{
				type: "name",
				title: "Accesso per tutti i dispositivi connessi alla LAN",
				content: "Attivate per abilitare la gestione locale di tutti i dispositivi connessi alla LAN o disattivate per abilitare la gestione di un dispositivo specifico."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "Mostra l'indirizzo MAC del dispositivo con accesso limitato."
			},{
				type: "name",
				title: "Descrizione",
				content: "Mostra la descrizione del dispositivo con accesso limitato."
			},{
				type: "name",
				title: "Stato",
				content: "Mostra lo stato corrente del dispositivo con accesso limitato (abilitato o disabilitato)."
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per modificare o eliminare il dispositivo corrispondente dell'elenco."
			},{
				type: "step",
				title: "Per aggiungere un dispositivo client all'elenco",
				content: [
					"1. Fate clic su Aggiungi.",
					"2. Fate clic su Mostra Dispositivi Esistenti e scegliete un dispositivo esistente o immettete l'indirizzo MAC di un dispositivo nel campo Indirizzo MAC. ",
					"3. Immettete una descrizione del  dispositivo.",
					"4. Selezionate Abilita.",
					"5. Fate clic su OK."
				]
			},{
				type: "step",
				title: "Per modificare o eliminare un dispositivo dell'elenco",
				content: "Nella tabella, fate clic su Modifica o su Cestino per modificare o eliminare il dispositivo corrispondente. "
			},{
				type: "step",
				title: "Per eliminare più dispositivi",
				content: "Selezionate tutti i dispositivi che desiderate eliminare, quindi fate clic su Elimina, sopra la tabella."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Gestione remota",
			CONTENT: [{
				type: "paragraph",
				content: "La funzionalità Gestione Remota consente di accedere e configurare il router in remoto tramite Internet."
			},{
				type: "name",
				title: "Disabilita gestione remota",
				content: "Selezionate l'opzione per disabilitare la gestione remota."
			},{
				type: "name",
				title: "Abilita gestione remota per tutti i dispositivi",
				content: "Selezionate l'opzione per abilitare la gestione remota di tutti gli indirizzi IP. Se selezionata, compilate il campo Porta di gestione Web."
			},{
				type: "name",
				title: "Abilita gestione remota per i dispositivi specificati",
				content: "Selezionate l'opzione per abilitare la gestione remota di un indirizzo IP specifico. Se selezionata, compilate i campi Porta di Gestione Web e Indirizzo IP di Gestione Remota."
			},{
				type: "name",
				title: "Porta di Gestione Web",
				content: "Immettete il numero di porta compreso tra 1024 e 65535 che viene utilizzato per accedere all'interfaccia di gestione Web del router con maggiore sicurezza. Normalmente, i browser web utilizzano la porta di servizio HTTP standard 80. La porta di servizio comune predefinita è 8080, che è una porta di servizio alternativa di HTTP."
			},{
				type: "name",
				title: "Indirizzo IP di Gestione Remota",
				content: "Immettete un indirizzo IP o intervallo di indirizzi IP valido per poter accedere al router."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Log di sistema",
			CONTENT: [{
				type: "paragraph",
				content: "La pagina Log di Sistema visualizza un elenco delle attività (eventi) più recenti del router. Potete definire i tipi di registri e/o il livello di registri che desiderate visualizzare. La pagina permette inoltre di configurare l'indirizzo email a cui inviare automaticamente i file di registro, o di esportare i file di registro su un computer."
			},{
				type: "name",
				title: "Tipo",
				content: "Selezionate il tipo di log di sistem da visualizzare."
			},{
				type: "name",
				title: "Livello",
				content: "Selezionate il livello di log di sistem da visualizzare."
			},{
				type: "name",
				title: "Aggiorna",
				content: "Fate clic sull'icona per aggiornare i log di sistema."
			},{
				type: "name",
				title: "Elimina tutto",
				content: "Fate clic sull'icona per eliminare tutti i log di sistema."
			},{
				type: "name",
				title: "Salva registro",
				content: "Fate clic sul pulsante per scaricare tutti i log di sistema sul computer locale."
			},{
				type: "name",
				title: "Impostazioni Mail",
				content: "Fate clic sul pulsante per configurare le impostazioni di posta elettronica per i log di sistema."
			},{
				type: "step",
				title: "Per configurare le impostazioni di posta elettronica per i registri di sistema",
				content: [
					"1. Fate clic su Impostazioni Mail.",
					"2. Da - Immettete un indirizzo email valido da utilizzare per la posta in uscita.",
					"3. A - Immettete un indirizzo email valido da utilizzare per la posta in arrivo.",
					"4. Server SMTP - Immettete l'indirizzo del server SMTP che il router utilizza per inviare i log di sistema via email.",
					{
						content: "5. Abilita autenticazione - Selezionate questa opzione se il server SMTP richiede l'autenticazione per l'invio di email.",
						children: [{
							type: "name",
							title: "Nome utente",
							content: "Immettete il nome utente per il server SMTP. Il campo fa distinzione tra maiuscole e minuscole."
						},{
							type: "name",
							title: "Password",
							content: "Immettete la password per il server SMTP. Il campo fa distinzione tra maiuscole e minuscole."
						}]
					},{
						content: "6. Abilita posta automatica - Selezionate questa opzione per specificare a che ora del giorno devono essere inviati automaticamente i log di sistema.",
						children: [{
							type: "paragraph",
							content: "Per inviare ogni giorno i log di sistema a un'ora specifica, immettete l'ora (HH) e i minuti (MM) nel formato a 24 ore, ad es. 16:00 è 4 PM."
						},{
							type: "paragraph",
							content: "Per inviare i log di sistema a determinati orario o intervallo di tempo, immettete le ore."
						}]
					},
					"7. Fate clic su Salva."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Statistiche di traffico",
			CONTENT: [{
				type: "paragraph",
				content: "La pagina Statistiche di Traffico mostra il traffico di rete LAN, WAN e WLAN di pacchetti inviati e ricevuti."
			},{
				type: "name",
				title: "Statistiche di traffico",
				content: "Attivate per visualizzare le informazioni statistiche."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Elenco statistiche di traffico",
			CONTENT: [{
				type: "name",
				title: "Indirizzo IP/Indirizzo MAC",
				content: "Mostra l'indirizzo IP e l'indirizzo MAC del dispositivo client associato."
			},{
				type: "name",
				title: "Totale pacchetti",
				content: "Mostra il numero totale di pacchetti trasmessi e ricevuti dal dispositivo client dall'inizio della sessione o dall'ultimo reset del contatore."
			},{
				type: "name",
				title: "Totale byte",
				content: "Mostra il numero totale di byte trasmessi e ricevuti dal dispositivo client dall'inizio della sessione o dall'ultima reset del contatore."
			},{
				type: "name",
				title: "Pacchetti correnti",
				content: "Mostra il numero corrente di pacchetti trasmessi e ricevuti in un intervallo di tempo specifico."
			},{
				type: "name",
				title: "Byte correnti",
				content: "Mostra il numero corrente di byte trasmessi e ricevuti in un intervallo di tempo specifico."
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per azzerare o eliminare le statistiche corrispondenti dall'elenco."
			},{
				type: "name",
				title: "Aggiorna",
				content: "Fate clic per aggiornare le informazioni statistiche sulla pagina."
			},{
				type: "name",
				title: "Reset Totale",
				content: "Fate clic per azzerare tutti i valori statistici dell'elenco."
			},{
				type: "name",
				title: "Elimina tutto",
				content: "Fate clic per eliminare tutte le informazioni statistiche della lista."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "Wireless 2,4 GHz/5 GHz",
			CONTENT: [{
				type: "name",
				title: "Intervallo beacon",
				content: "Immettete un valore compreso tra 40 e 1000 millisecondi per determinare la durata tra i pacchetti beacon trasmessi dal router per sincronizzare la rete wireless. Il valore di default è 100 millisecondi."
			},{
				type: "name",
				title: "Soglia RTS",
				content: "Immettete un valore compreso tra 1 e 2346 per determinare la dimensione dei pacchetti  trasmessi tramite il router. Di default, la dimensione soglia RTS (Request to Send) è 2346. Se la dimensione del pacchetto è superiore alla soglia prefissata, il router invia i frame di richiesta di invio a una particolare stazione ricevente e negozia l'invio di un frame di dati, oppure il pacchetto verrà inviato immediatamente."
			},{
				type: "name",
				title: "Intervallo DTIM",
				content: "Questo valore determina l'intervallo DTIM (Delivery Traffic Indication Message). Immettete un valore compreso tra 1 e 15 millisecondi.  Il valore di default è 1 e indica che l'intervallo DTIM è uguale all'intervallo beacon."
			},{
				type: "name",
				title: "Periodo di aggiornamento chiavi di gruppo",
				content: "Immettete il numero di secondi (minimo 30) dell'intervallo di tempo per il rinnovo automatico della chiave di crittografia. Il valore di default è 0 e indica che le chiavi non vengono rinnovate."
			},{
				type: "name",
				title: "Funzione WMM",
				content: "La funzione WMM garantisce che i pacchetti con messaggi ad alta priorità vengano trasmessi prima degli altri. È abilitata per impostazione predefinita ed è altamente raccomandata."
			},{
				type: "name",
				title: "Funzione Short GI",
				content: "Questa funzione è abilitata per impostazione predefinita ed è raccomanda per aumentare la capacità di dati riducendo l'intervallo di guardia."
			},{
				type: "name",
				title: "Funzione AP Isolation",
				content: "Se desiderate impedire a tutti i dispositivi wireless connessi in rete di interagire tra loro, rimanendo però in grado di accedere a Internet, selezionate la casella di controllo Abilita Isolamento AP."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "TX Beamforming è una tecnica di processamento di segnale usata per la trasmissione direzionale del segnale. Se abilitato, viene usato nella trasmissione dati per rinforzare il segnale Wi-Fi ed aumentare la copertura Wi-Fi."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "Abilita WDS Bridging",
				content: "Abilitate la funzione Bridging WDS (Wireless Distribution System) per consentire al router di effettuare il bridging un altro access point (AP) in una rete locale wireless (WLAN). Se la funzione è abilitata, configurate quanto segue:",
				children: [{
					type: "name",
					title: "SSID (per connessione con bridging)",
					content: "Immettete l'SSID del WAP (Wireless Access Point) a cui il router si connetterà come client o utilizzate la funzione Survey per trovare tutte le reti disponibili."
				},{
					type: "name",
					title: "Rilevamento",
					content: "Fate clic sul pulsante per eseguire la scansione e visualizzare SSID, BSSID, potenza del segnale, canale e informazioni di sicurezza di tutte le reti wireless disponibili. Una volta che una rete è selezionata, i campi SSID, Indirizzo MAC e Sicurezza saranno popolati automaticamente."
				},{
					type: "name",
					title: "Indirizzo MAC (per connessione bridge)",
					content: "Immettete l'indirizzo MAC (BSSID) composto da 12 caratteri esadecimali (0-9, a-f, A-F) separati da trattini dell'access point wireless a cui il router si connetterà come client. Se scegliete l'AP desiderato tramite la funzione Survey, il campo Indirizzo MAC viene popolato automaticamente."
				},{
					type: "name",
					title: "Sicurezza",
					content: "Selezionate il tipo di sicurezza per per l'access point tra No, WPA-PSK/WPA2-PSK o WEP. Se scegliete l'AP tramite la funzione Survey, il campo Sicurezza viene popolato automaticamente.",
					children: [{
						type: "name",
						title: "Password",
						content: "Questa opzione è disponibile se il tipo di sicurezza è WPA-PSK/WPA2-PSK o WEP. Immettete la password di sicurezza dell'access point selezionato."
					},{
						type: "name",
						title: "Tipo autent.",
						content: "Questa opzione è disponibile solo se il tipo di sicurezza è WEP (Wired Equivalent Privacy). Selezionate il tipo di autenticazione appropriato (Automatica, Sistema aperto o Chiave condivisa) utilizzato dal access point selezionato."
					},{
						type: "name",
						title: "Formato chiave WEP",
						content: "Questa opzione è disponibile solo se il tipo di sicurezza è WEP. Selezionate il formato della chiave (ASCII o esadecimale) utilizzato dall'AP selezionato."
					}]
				}]
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Selezionate la casella di controllo Abilita WPS e fate clic su Salva per abilitare la funzione WPS (Wi-Fi Protected Setup), che permette di impostare facilmente e collegare i dispositivi abilitati WPS premendo il pulsante WPS."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Selezionate la casella di controllo Abilita NAT e fate clic su Salva per abilitare la funzione NAT (Network Address Translation)."
			},{
				type: "note",
				title: "Nota",
				content: "Quando NAT è disabilitata, le configurazioni di NAT Forwarding non avranno effetto."
			},{
				type: "name",
				title: "Incremento NAT",
				content: "Selezionate la casella di controllo Abilita NAT Boost e fate clic su Salva per garantire la migliore velocità effettiva del router."
			},{
				type: "note",
				title: "Nota",
				content: "Se NAT Boost è abilitato, le opzioni QoS e Statistiche di Traffico vengono disabilitate automaticamente."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "Impostazione Livello DoS Protection",
			CONTENT: [{
				type: "paragraph",
				content: "Il Livello di Protezione DoS protegge il router dagli attacchi flood ICMP, UDP e TCP."
			},{
				type: "name",
				title: "Livello pacchetti ICMP-FLOOD",
				content: "Immettete un valore ICMP compreso tra 5 e 7200 pacchetti per attivare la protezione  ICMP-FLOOD quando il numero di pacchetti supera il valore soglia prefissato."
			},{
				type: "name",
				title: "Livello pacchetti UDP-FLOOD",
				content: "Immettete un valore UDP compreso tra 5 e 7200 pacchetti per attivare la protezione UDP-FLOOD quando il numero di pacchetti supera il valore soglia prefissato."
			},{
				type: "name",
				title: "Livello pacchetti TCP-FLOOD",
				content: "Immettete un valore TCP-SYN compreso tra 5 e 7200 pacchetti per attivare la protezione TCP-SYN-FLOOD quando il numero di pacchetti supera il valore soglia prefissato."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Duplex",
			CONTENT: [{
				type: "name",
				title: "Duplex",
				content: "Selezionate il tipo duplex dall'elenco a discesa."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Attiva modalità notturna",
				content: "Selezionare questa casella di controllo per spegnere i LED durante il Periodo Modaltà notte senza influire sulle prestazioni del router."
			},{
				type: "name",
				title: "Modalità notturna",
				content: "Specifica un periodo di tempo durante il quale si applica la modalità notte."
			},{
				type: "paragraph",
				content: "Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "Con OpenVPN potete usare Internet per accedere in sicurezza alla vostra rete quando siete fuori casa. Per usare il Servizio VPN, dovete configurare il servizio DNS Dinamico (consigliato) o assegnare un IP statico alla porta WAN del router. L'orario del sistema dovrebbe essere sincronizzato con Internet."
			},{
				type: "name",
				title: "Abilita server VPN",
				content: "Seleziona questa casella di controllo per abilitare il server OpenVPN."
			},{
				type: "name",
				title: "Tipo di servizio",
				content: "Seleziona il protocollo di comunicazione per il server OpenVPN: UDP o TCP."
			},{
				type: "name",
				title: "Porta di servizio",
				content: "Immettete un numero porta di comunicazione compreso fra 1024 e 65535. La porta di servizio comune e di default è 1194."
			},{
				type: "name",
				title: "Subnet/Netmask VPN",
				content: "Inserisci l'intervallo di indirizzi IP che possono essere dedicati ai client dal server OpenVPN."
			},{
				type: "name",
				title: "Accesso client",
				content: "Selezionare il tipo di accesso per il client OpenVPN.",
				children: [{
					type: "name",
					title: "Solo rete domestica",
					content: "I client possono accedere solo al router e alla LAN. La route predefinita del client non cambia."
				},{
					type: "name",
					title: "Internet e rete domestica",
					content: "I client possono accedere alla rete di casa, a servizi Internet o a servizi con limitazioni geografiche quando siete fuori dal vostro Paese. La route di default del client verrà alterata."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Certificato",
			CONTENT: [{
				type: "paragraph",
				content: "Utilizza il certificato per le informazioni e l'identità della connessione VPN per il computer remoto."
			},{
				type: "name",
				title: "Genera",
				content: "Clicca per generare un nuovo certificato."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "File di configurazione",
			CONTENT: [{
				type: "paragraph",
				content: "I client remoti useranno il file di configurazione per accedere al vostro router."
			},{
				type: "name",
				title: "Esporta",
				content: "Clicca questo pulsante per salvare il file di configurazione OpenVPN da utilizzare per aggiungere una nuova connessione VPN."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "Guida all'installazione del client VPN",
			CONTENT: [{
				type: "step",
				title: "Per abilitare e collegare i dispositivi client al server OpenVPN:",
				content:[{
					type: "paragraph",
					content: "Prima di configurare il server OpenVPN,  configurate il servizio DNS Dinamico (consigliato) o assegnate un indirizzo IP statico alla porta WAN. Assicuratevi che la porta esterna delle impostazioni NAT non sia la porta di servizio e che l'orario del sistema sia sincronizzato con Internet."
				},
					"1. Selezionate Abilita Server VPN.",
					"2. Configurate i parametri del server OpenVPN (Tipo di Servizio, Porta di Servizio, Accesso Client e VPN Subnet/Netmask) e fate clic su Salva.",
					"3. Fate clic su Esporta per salvare il file di configurazione.",
					"4. Nei vostri dispositivi client scaricate e installate l'utility client OpenVPN da <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Le piattaforme ufficiali supportate includono Windows, Mac OSX, Linux.",
					"5. Lanciate l'utility client OpenVPN e aggiungete una nuova connessione VPN usando il file di configurazione salvato per connettere i vostri dispositivi client al server VPN."
				]},{
					type: "note",
					title: "Nota",
					content: "Per maggiori informazioni sui client OpenVPN, visita <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Con VPN PPTP potete usare Internet per accedere facilmente e rapidamente alla vostra rete quando siete fuori casa. Ciò può essere impedito da qualche ISP. Per usare il Servizio VPN, dovete configurare il servizio DNS Dinamico (consigliato) o assegnare un IP statico alla porta WAN del router. L'orario del sistema dovrebbe essere sincronizzato con Internet."
			},{
				type: "name",
				title: "Abilita server VPN",
				content: "Seleziona questa casella di controllo per abilitare il server PPTP VPN."
			},{
				type: "name",
				title: "Indirizzo IP client",
				content: "Inserisci l'intervallo di indirizzi IP (fino a 10 client) che possono essere dedicati ai client dal server PPTP VPN."
			},{
				type: "name",
				title: "Consenti l'accesso a Samba (Network Place)",
				content: "Selezionate per permettere al client VPN l'accesso al vostro server Samba locale."
			},{
				type: "name",
				title: "Consenti NetBIOS passthrough",
				content: "Selezionate per permettere al client VPN l'accesso al vostro server Samba locale usando il nome NetBIOS."
			},{
				type: "name",
				title: "Consenti connessioni senza crittografia",
				content: "Selezionate per consentire connessioni non criptate al vostro server VPN."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Lista Account",
			CONTENT: [{
				type: "paragraph",
				content: "Questa tabella mostra gli account che possono essere usati per connettersi al server VPN PPTP dai client remoti."
			},{
				type: "step",
				title: "Per aggiungere un account VPN PPTP",
				content: [
					"1. Fate clic su Aggiungi.",
					"2. Inserisci il nome utente e la password per autenticare i client al server PPTP VPN.",
					"3. Fate clic su OK."
				]
			},{
				type: "step",
				title: "Per modificare o eliminare un account esistente",
				content: "Nella tabella, fate clic su Edita o Elimina in corrispondenza dell'account che desiderate modificare o eliminare."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "Guida all'installazione del client VPN",
			CONTENT: [{
				type: "step",
				title: "Per abilitare e collegare i dispositivi client al server PPTP VPN:",
				content:[{
					type: "paragraph",
					content: "Prima di configurare il server VPN PPTP,  configurate il servizio DNS Dinamico (consigliato) o assegnate un indirizzo IP statico alla porta WAN. Assicuratevi che la porta esterna delle impostazioni NAT non sia 1723 e che l'orario del sistema sia sincronizzato con Internet."
				},
					"1. Selezionate Abilita Server VPN.",
					"2. Configurate i parametri del server VPN PPTP e fate clic su Salva.",
					"3. Nei vostri dispositivi client create una connessione VPN PPTP. Le piattaforme ufficiali supportate includono Windows, Mac OSX, Linux, iOS e Android.",
					"4. Lanciate il programma VPN PPTP, aggiungete una nuova connessione e immettete il nome dominio del servizio DDNS registrato o un indirizzo IP statico assegnato alla porta WAN, per connettere il vostro dispositivo client al server VPN PPTP."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "Connessioni VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Questa pagina visualizza i client correntemente connessi ai server OpenVPN e PPTP VPN ospitati sul router."
			},{
				type: "paragraph",
				content: "Clicca l'icona del meno per scollegare il client corrispondente."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Stato Internet",
				content: "Mostra lo stato corrente della connessione Internet del router."
			},{
				type: "name",
				title: "Tipo di connessione",
				content: "Mostra il tipo di connessione Internet."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "Mostra l'indirizzo IP Internet corrente assegnato al router."
			},{
				type: "name",
				title: "Connessione secondaria/Indirizzo IP",
				content: "Mostra il tipo di connessione secondaria e l'indirizzo IP."
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
				content: "Mostra il nome della rete wireless corrente della frequenza 2.4GHz/5GHz."
			},{
				type: "name",
				title: "Canale",
				content: "Mostra il canale trasmesso dalla rete wireless 2.4GHz/5GHz."
			},{
				type: "name",
				title: "MAC",
				content: "Mostra l'indirizzo MAC corrente della rete wireless 2.4GHz/5GHz."
			},{
				type: "title",
				title: "Rete guest 2,4 GHz/5 GHz"
			},{
				type: "name",
				title: "Stato",
				content: "Mostra se la rete wireless ospiti 2.4GHz/5GHz è abilitata o disabilitata."
			},{
				type: "name",
				title: "SSID",
				content: "Mostra il nome di rete wireless della rete ospiti."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Client Cablati/Wireless",
			CONTENT: [{
				type: "name",
				title: "Nome",
				content: "Mostra il nome del client connesso al router."
			},{
				type: "name",
				title: "Indirizzo IP",
				content: "Mostra l'indirizzo IP assegnato al client."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "Mostra l'indirizzo MAC del client."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Stampante",
			CONTENT: [{
				type: "name",
				title: "Nome",
				content: "Mostra il nome della stampante collegata al router tramite la porta USB."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "Disco USB",
			CONTENT: [{
				type: "name",
				title: "Disco USB",
				content: "Mostra il nome del disco USB collegato al router."
			},{
				type: "name",
				title: "Totale",
				content: "Mostra la capacità totale del dispositivo di storage USB collegato."
			},{
				type: "name",
				title: "Disponibile",
				content: "Mostra la capacità disponibile del dispositivo di storage USB collegato."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Rilevamento automatico",
				content: "Fate clic sul pulsante per fare in modo che il router rilevi automaticamente il tipo di connessione Internet corrente."
			},{
				type: "note",
				title: "Nota",
				content: "Se non siete sicuri di conoscere il tipo di connessione Internet, utilizzate la funzione Survey automatico o contattate il vostro ISP per assistenza."
			},{
				type: "title",
				title: "Tipo di connessione Internet: IP statico",
			},{
				type: "name",
				title: "Indirizzo IP/Subnet mask/Gateway predefinito/DNS primario/DNS secondario",
				content: "Immettete le informazioni fornite dall'ISP."
			},{
				type: "title",
				title: "Tipo di connessione Internet: IP dinamico",
			},{
				type: "name",
				title: "NON clonare indirizzo MAC/Clona indirizzo MAC del computer corrente",
				content: "Selezionate se clonare il vostro indirizzo MAC o meno, in base al vostro ISP."
			},{
				type: "title",
				title: "Tipo di connessione Internet: PPPoE",
			},{
				type: "name",
				title: "Nome utente/password",
				content: "Immettete il nome utente e la password forniti dall'ISP. I campi fanno distinzione tra maiuscole e minuscole."
			},{
				type: "title",
				title: "Tipo di connessione Internet: L2TP/PPTP",
			},{
				type: "name",
				title: "Nome utente/password",
				content: "Immettete il nome utente e la password forniti dall'ISP. I campi fanno distinzione tra maiuscole e minuscole."
			},{
				type: "name",
				title: "Connessione secondaria (IP dinamico o statico)",
				children: [{
					type: "name",
					title: "IP dinamico",
					content: "Selezionate se l'indirizzo IP e la subnet mask vengono assegnati automaticamente dall'ISP."
				},{
					type: "name",
					title: "IP statico",
					content: "Selezionate se indirizzo IP e subnet mask sono forniti dall'ISP, e immettete le informazioni nei campi corrispondenti."
				}]
			},{
				type: "name",
				title: "VPN Server IP/Nome Dominio",
				content: "Immettete indirizzo IP o nome di dominio del server VPN fornito dall'ISP."
			},{
				type:"paragraph",
				content:"Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Impostazioni wireless",
			CONTENT: [{
				type: "name",
				title: "Abilita wireless",
				content: "Selezionate la casella di controllo per abilitare la radio wireless 2.4GHz/5GHz."
			},{
				type: "name",
				title: "Nome di rete wireless (SSID)",
				content: "Potete lasciare il nome di rete wireless di default (SSID) o immettere un nuovo nome (fino a 32 caratteri). Il campo fa distinzione tra maiuscole e minuscole."
			},{
				type: "name",
				title: "Nascondi SSID",
				content: "Selezionate la casella se desiderate nascondere il nome di rete 2.4GHz/5GHz (SSID) nell'elenco delle reti wi-fi. "
			},{
				type: "name",
				title: "Password",
				content: "Immettete una password wireless composta di 8-63 caratteri ASCII, o 8-64 caratteri esadecimali. Il campo fa distinzione tra maiuscole e minuscole."
			},{
				type:"paragraph",
				content:"Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Impostazioni dispositivo",
			CONTENT: [{
				type: "paragraph",
				content: "La pagina Impostazioni dispositivo visualizza le informazioni di qualsiasi dispositivo di storage USB collegato tramite la porta USB."
			},{
				type: "name",
				title: "Scansiona",
				content: "Solitamente il router rileva automaticamente qualsiasi dispositivo appena collegato. Se ciò non avviene, fate clic sul pulsante per eseguire l'analisi di ogni nuovo dispositivo connesso e aggiornare la pagina con le informazioni aggiornate."
			},{
				type: "name",
				title: "Volume",
				content: "Mostra il nome del volume USB."
			},{
				type: "name",
				title: "Capacità",
				content: "Mostra la capacità di storage totale del dispositivo USB. "
			},{
				type: "name",
				title: "Spazio libero",
				content: "Mostra lo spazio di storage corrente disponibile. "
			},{
				type: "name",
				title: "Rimozione sicura",
				content: "Fate clic sul pulsante per disconnettere in modo sicuro il dispositivo di storage USB prima di scollegarlo fisicamente dal router.",
				children: [{
					type: "paragraph",
					content: "Il pulsante Rimozione sicura appare solo quando vi è un dispositivo di storage USB collegato al router, e non sarà possibile smontare il dispositivo USB mentre il volume corrente è occupato."
				}]
			},{
				type: "name",
				title: "Stato",
				content: "Questa casella di controllo appare solo quando vi è un dispositivo di storage USB collegato al router. Selezionate per abilitare la condivisione di file del dispositivo USB."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Impostazioni di condivisione",
			CONTENT: [{
				type: "name",
				title: "Nome rete/server multimediale",
				content: "Mostra il nome utilizzato per accedere al dispositivo di storage USB collegato."
			},{
				type:"paragraph",
				content:"Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Condivisione cartella",
			CONTENT: [{
				type: "name",
				title: "Condividi tutte",
				content: "Attivate per condividere tutti i file e le cartelle o disattivate per condividere solo le cartelle selezionate."
			},{
				type: "name",
				title: "Abilita autenticazione",
				content: "Vi consigliamo di abilitare l'autenticazione per richiedere agli utenti di immettere un nome utente e una password validi per accedere alle cartelle di condivisione."
			},{
				type: "name",
				title: "Nome cartella",
				content: "Mostra il nome della cartella condivisa."
			},{
				type: "name",
				title: "Percorso cartella",
				content: "Mostra il percorso della cartella condivisa."
			},{
				type: "name",
				title: "Condivisione file multimediali",
				content: "Indica se la cartella condivisa può essere utilizzata o meno per condividere file multimediali."
			},{
				type: "name",
				title: "Nome volume",
				content: "Mostra il nome del volume condiviso."
			},{
				type: "name",
				title: "Stato",
				content: "Mostra lo stato della cartella condivisa per mezzo dall'indicatore a lampadina."
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per modificare o eliminare la cartella condivisa corrispondente."
			},{
				type: "name",
				title: "Aggiungi",
				content: "Fate clic sul pulsante per creare una nuova voce."
			},{
				type: "name",
				title: "Elimina",
				content: "Fate clic sul pulsante per rimuovere la voce selezionata dalla tabella."
			},{
				type: "name",
				title: "Sfoglia",
				content: "Fate clic per cercare una cartella condivisa."
			},{
				type: "name",
				title: "Consenti Accesso a Rete Ospiti",
				content: "Selezionate per consentire ai client sulla rete ospiti di accedere alle cartelle condivise."
			},{
				type: "name",
				title: "Abilita autenticazione",
				content: "Selezionate per richiedere agli utenti di accedere alle cartelle condivise con un nome utente e una password validi."
			},{
				type: "name",
				title: "Attiva accesso in scrittura",
				content: "Selezionate per consentire agli utenti di apportare modifiche al contenuto della cartella."
			},{
				type: "name",
				title: "Attiva condivisione file multimediali",
				content: "Selezionate per abilitare la condivisione multimediale."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Server di stampa",
			CONTENT: [{
				type: "name",
				title: "Server di stampa",
				content: "Attivate per abilitare la funzione di server di stampa."
			},{
				type: "name",
				title: "Nome stampante",
				content: "Mostra il nome della stampante collegata al router."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Parental Control",
			CONTENT: [{
				type: "name",
				title: "Parental Control",
				content: "Attivate per abilitare la funzione Parental Control. Per impostazione predefinita, la funzione è disattivata."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Dispositivi sottoposti al Parental Control",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra l'elenco dei dispositivi sottoposti al Parental Control."
			},{
				type: "name",
				title: "Nome dispositivo",
				content: "Mostra il nome di tutti i dispositivi client connessi che sono attualmente sottoposti al Parental Control."
			},{
				type: "name",
				title: "Indirizzo MAC",
				content: "Mostra l'indirizzo MAC di tutti i dispositivi client connessi che sono attualmente sottoposti al Parental Control."
			},{
				type: "name",
				title: "Tempo d'accesso a Internet",
				content: "Mostra i periodi con accesso limitato. La schedulazione temporale si basa sull'ora di sistema del router che può essere impostato in \"Strumenti Sistema -> Impostazioni Tempo\"."
			},{
				type: "name",
				title: "Descrizione",
				content: "Mostra una breve descrizione del dispositivo connesso. Si tratta di un'impostazione facoltativa."
			},{
				type: "name",
				title: "Stato",
				content: "Mostra lo stato corrente (abilitato o disabilitato) del Parental Control del dispositivo corrispondente. "
			},{
				type: "name",
				title: "Modifica",
				content: "Mostra le opzioni per modificare o eliminare il dispositivo corrispondente."
			},{
				type: "step",
				title: "Per limitare un nuovo dispositivo client",
				content:[
					"1. Fate clic su Aggiungi.",
					"2. Fate clic su Mostra dispositivi esistenti e scegliere un dispositivo attualmente collegato dall'elenco dei dispositivi di accesso; oppure, immettete il nome del dispositivo e l'indirizzo MAC manualmente per aggiungere un dispositivo non collegato.",
					"3. Fate clic sull'icona Tempo di Accesso a Internet per specificare un periodo di tempo durante il quale si applicherà la restrizione.",
					"4. Immettete una breve descrizione nel campo Descrizione (facoltativa).",
					"5. Selezionate Abilita.",
					"6. Fate clic su OK."
				]
			},{
				type: "paragraph",
				content: "Per modificare o eliminare una voce del Parental Control, fate clic su Modifica per modificare le informazioni o su Cestino per rimuovere la voce corrispondente."
			},{
				type: "paragraph",
				content: "Per eliminare più voci, selezionate tutte le voci e fate clic su Elimina, sopra la tabella."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Rete Ospiti",
			CONTENT: [{
				type: "paragraph",
				content: "La rete opspiti consente di impostare una rete separata con nome di rete wireless (SSID) e password separati che gli ospiti possono utilizzare per accedere alla rete wireless."
			},{
				type: "name",
				title: "Consenti agli ospiti di vedersi fra loro",
				content: "Selezionate la casella di controllo per consentire ai dispositivi wireless sulla rete ospiti di vedersi."
			},{
				type: "name",
				title: "Consenti agli ospiti di accedere alla rete locale",
				content: "Selezionate la casella di controllo per consentire ai dispositivi wireless sulla rete ospiti di accedere alle condivisioni e alle stampanti della rete locale. "
			},{
				type: "name",
				title: "Abilita Rete Ospiti",
				content: "Selezionate la casella di controllo per abilitare la funzione Rete Ospiti."
			},{
				type: "name",
				title: "Nome di rete wireless (SSID)",
				content: "Usate il nome rete Ospiti (SSID) di default o create un nuovo nome (fino a 32 caratteri)."
			},{
				type: "name",
				title: "Nascondi SSID",
				content: "Selezionate la casella se desiderate nascondere il nome rete ospiti SSID dall'elenco delle reti Wi-Fi."
			},{
				type: "name",
				title: "Password",
				content: "Utilizzate la password generata in modo casuale o create una password composta da 8-63 caratteri ASCII o 8-64 caratteri esadecimali (0-9, a-f, A-F)."
			},{
				type:"paragraph",
				content:"Fate clic su Salva per salvare tutte le impostazioni."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"Il servizio TP-Link Cloud vi permette di monitorare da remoto la vostra rete in tempo reale, di accedere e gestire i vostri dispositivi TP-Link da Internet in ogni momento e luogo."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Informazioni Account",
			CONTENT:[{
				type:"paragraph",
				content:"Mostra le informazioni del vostro TP-Link ID. Potete editare le informazioni dell'account facendo clic sull'icona Edit."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Informazioni Dispositivo",
			CONTENT:[{
				type:"paragraph",
				content:"Mostra le informazioni relative al vostro dispositivo, incluso l'account cloud che sta gestendo il dispositivo."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Account Legati",
			CONTENT:[{
				type:"paragraph",
				content:"Questa tabella mostra tutti gli account cloud che sono legate al dispositivo."
			},{
				type:"step",
				title:"Per legare un account utente",
				content:["1. Fate clic su Lega.",
				"2. Immettete l'email registrata che volete legare.",
				"3. Fate clic su Salva."]
			}]

		}

	};
})(jQuery);

