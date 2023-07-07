(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Nome utente",
			PASSWORD: 					"Password",
			EMAIL: 						"Email",
			FORGET_PASSWORD: 			"Password dimenticata?",
			LOGIN: 						"Login",
			BEGIN: 						"Iniziamo",
			IMPORTANT_UPDATE_INFO: 		"Per evitare il conflitto con il dispositivo front-end, l'indirizzo IP del router è stato aggiornato in",
			CONTINUE: 					"Continua",

			IMPORTANT_NOTICE: 			"Avviso importante",
			OR: 						", siete sicuri di volere continuare la visita",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Premete il pulsante Reset per %SECONDS% secondi per ripristinare le impostazioni di fabbrica del router.",
			FORGET_PASSWORD_INFO_1: 	"Se la funzione Recupero Password è abilitata, verrà inviato all'indirizzo e-mail indicato un codice di verifica per ripristinare Username e password.",
			FORGET_PASSWORD_SEND_FAILED:"Impossibile inviare il codice! Controllate la connessione a Internet.",

			VERIFICATION_CODE: 			"Codice di verifica",

			RECEIVE_CODE: 				"Invia codice",

			CONFIRM: 					"Conferma",
			WELCOME: 					"Benvenuti nel dispositivo TP-Link %model%. Fate login.",
			SEC: 						"s",

			USER_CONFLICT: 				"Conflitto Login!",
			FIRST_TIME: 				"impostate il vostro %PRODUCT% per connetterlo a Internet. Per iniziare, create una password dispositivo per gestire il vostro %PRODUCT%.",
			FIRST_TIME1: 				"Create una password da amministratore per gestire %model%.",
			USER_CONFLICT_INFO: 		"Utente %USER% con host %HOST% (%IP%/%MAC%) attualmente connesso al router. Impossibile accedere contemporaneamente con un altro utente. Riprovate più tardi.",
			USER_CONFLICT_INFO_2: 		"Utente %USER% (%IP%) attualmente connesso al router. Impossibile accedere contemporaneamente con un altro utente. Riprovate più tardi.",
			USER_CONFLICT_INFO_3: "Solo un dispositivo per volta può fare login. Volete continuare e forzare il logoff dell'altro dispositivo?",
			
			LOGIN_FAILED: 				"Login non riuscito!",
			LOGIN_FAILED_COUNT: 		"Login non riuscito per %num1 volte. Ancora %num2 tentativi rimasti.",
			NO_COOKIE: 					"Per accedere è necessario abilitare i cookie. Abilitate i cookie o disattivate la modalità di navigazione Privata/In incognito.", 

			FORGET_PASSWORD_NOTE: 		"Se la funzione Recupero password non è stata configurata, premete il pulsante Reset per %SECONDS% secondi per ripristinare le impostazioni di fabbrica del router."
		},
		INIT: {
			PASSWORD: 					"Password",
			CONFIRM_PASSWORD:				"Conferma Password",
			BEGIN: 						"Iniziamo",
			IMPORTANT_UPDATE_INFO: 		"Per evitare il conflitto con il dispositivo di front-end, l'indirizzo IP del vostro router deve essere aggiornato",
			CONTINUE: 					"Avanti",

			IMPORTANT_NOTICE: 			"Avviso importante",
			OR: 						", siete sicuri di volere continuare la visita",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Conferma",

			SEC: 						"s",

			USER_CONFLICT: 				"Conflitto Login!",
			
			USER_CONFLICT_INFO: 		"L'utente %USER% con host %HOST% (%IP%/%MAC%) è attualmente loggato al Router. Non potete fare login allo stesso tempo. Riprovate in un secondo momento.",
			USER_CONFLICT_INFO_2: 		"L'utente %USER% (%MAC%) è attualmente loggato al Router. Non potete fare login allo stesso tempo. Riprovate in un secondo momento.",
			
			LOGIN_FAILED: 				"Login Fallito!",
			LOGIN_FAILED_COUNT: 		"Login non riuscito per %num1 volte. Ancora %num2 tentativi rimasti.",
			NO_COOKIE: 					"Per accedere è necessario abilitare i cookie. Abilitate i cookie o disattivate la modalità di navigazione Privata/In incognito.", 

			INIT_NOTE_TITLE: 			"Cari Clienti,",
			INIT_NOTE_CONTENT: 			"impostate il vostro %PRODUCT% per connetterlo a Internet. Per iniziare, create una password dispositivo per gestire il vostro %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Versione Firmware: ",
			FEATURE: 						"Modifiche e Risoluzione Bug: ",
			TITLE: 							"Nuovo firmware disponibile.",
			UPGRADE_NOW: 					"Aggiorna adesso",
			REMIND: 						"Ricordamelo dopo",
			NOTICE:    						"È disponibile un nuovo firmware per il vostro router.",
			NEVER: 							"Ignora questa versione"
			
		},

		WAN_ERROR: {
			TITLE: 							"Errore connessione WAN!",
			STATUS: 						"Stato",
			INFO: 							"Informazioni",
			SETUP: 							"Impostate una connessione Internet",
			NEVER: 							"Non ricordarmelo ancora"
		},

		OFFLINE_ERROR:{
			TITLE: "Oops... Non raggiungete il server cloud.",
			NOTE1: "1. Assicuratevi di avere accesso a Internet.",
			NOTE2: "2. Il server cloud è temporaneamente inaccessibile. Aggiornate la pagina in un secondo momento.",
			NOTE3: "3. Se il problema persiste, collegatevi a <a target=\"_blank\" id=\"support\">supporto tecnico TP-Link</a>.",
			ERROR: "Errore"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Versione Firmware:",
			HARDWARE_VERSION: 				"Versione hardware:",
			HELP_SUPPORT: 					"Supporto",
			FAQ: 							"FAQ",
			CONFIRM_REBOOT: 				"Siete sicuri di volere riavviare il router?",
			CONFIRM_LOGOUT: 				"Siete sicuri di volervi disconnettere?",
			UPGRADE_ALERT_1: 				"Il firmware corrente non supporta il servizio cloud di TP-Link. Vi consigliamo di scaricare il firmware più recente da www.tp-link.it e aggiornarlo.",
			UPGRADE_ALERT_2: 				"Il firmware corrente non supporta il servizio cloud di TP-Link. Vi consigliamo di aggiornare il firmware facendo clic sull'icona Aggiorna nell'angolo superiore destro.",
			ACCOUNT_UNLOGIN: 				"Account",

			REBOOTING: 						"Riavvio in corso... <br/>Non utilizzare durante il processo di riavvio.",
			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Scansionate il codice QR per scaricare la appTether di TP-Link",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Gestite la vostra rete da qualsiasi dispositivo mobile e avete il controllo completo dal palmo della vostra mano.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			""
		},

		NAV: {
			QUICK_SETUP: 				"Quick Setup",
			BASIC: 						"Base",
			ADVANCED: 					"Avanzata"
		},

		CONTROL: {
			LOGIN: 						"Login",
			LOGOUT: 					"Logout",
			UPDATE: 					"Aggiorna",
			REBOOT: 					"Riavvio",
			LED: 						"LED",
			LED_ON: 					"LED Acceso",
			LED_OFF: 					"LED Spento",
			LED_DISABLED: 				"Lo stato dei LED non può essere cambiato quando è attivo il periodo di modalità notturna"
		},

		LANGUAGE: {
			EN_US: 						"Inglese",
			ZH_CN: 						"简体中文"
		},

		REGION: {
			ALBANIA: 					"Albania",
			ALGERIA: 					"Algeria",
			AMERICAN_SAMOA: 			"Samoa americane",
			ARGENTINA: 					"Argentina",
			ARMENIA: 					"Armenia",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australia",
			AUSTRIA: 					"Austria",
			AZERBAIJAN: 				"Azerbaijan",
			BAHAMAS: 					"Bahamas",
			BAHRAIN: 					"Bahrain",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Bielorussia",
			BELGIUM: 					"Belgio",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Bermuda",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnia ed Erzegovina",
			BRAZIL: 					"Brasile",
			BRUNEI_DARUSSALAM: 			"Brunei Darussalam",
			BULGARIA: 					"Bulgaria",
			CAMBODIA: 					"Cambogia",
			CANADA: 					"Canada",
			CAYMAN_ISLANDS: 			"Isole Cayman",
			CHILE: 						"Cile",
			CHINA: 						"Repubblica Popolare della Cina",
			COLOMBIA: 					"Colombia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Croazia",
			CYPRUS: 					"Cipro",
			CZECH_REPUBLIC: 			"Repubblica Ceca",
			DENMARK: 					"Danimarca",
			DOMINICAN_REPUBLIC: 		"Repubblica Dominicana",
			ECUADOR: 					"Ecuador",
			EGYPT: 						"Egitto",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estonia",
			ETHIOPIA: 					"Etiopia",
			FAEROE_ISLANDS: 			"Isole Faroe",
			FINLAND: 					"Finlandia",
			FRANCE: 					"Francia",
			FRENCH_GUIANA: 				"Guiana Francese",
			FRENCH_POLYNESIA: 			"Polinesia Francese",
			GEORGIA: 					"Georgia",
			GERMANY: 					"Germania",
			GREECE: 					"Grecia",
			GREENLAND: 					"Groenlandia",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadalupa",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong",
			HUNGARY: 					"Ungheria",
			ICELAND: 					"Islanda",
			INDIA: 						"India",
			INDONESIA: 					"Indonesia",
			IRAN: 						"Iran",
			IRAQ: 						"Iraq",
			IRELAND: 					"Irlanda",
			ISRAEL: 					"Israele",
			ITALY: 						"Italia",
			JAMAICA: 					"Giamaica",

			JAPAN: 						"Giappone",
			JAPAN_1: 					"Giappone 1",
			JAPAN_2: 					"Giappone 2",
			JAPAN_3: 					"Giappone 3",
			JAPAN_4: 					"Giappone 4",
			JAPAN_5: 					"Giappone 5",
			JAPAN_6: 					"Giappone 6",

			JORDAN: 					"Giordania",
			KAZAKHSTAN: 				"Kazakhstan",
			KENYA: 						"Kenya",

			NORTH_KOREA: 				"Corea del Nord",
			KOREA_REPUBLIC: 			"Corea",
			KOREA_REPUBLIC_3: 			"Corea 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Lettonia",
			LEBANON: 					"Libano",
			LIBYA: 						"Libia",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Lituania",
			LUXEMBOURG: 				"Lussemburgo",
			MACAU: 						"Macao",
			MACEDONIA: 					"Repubblica Yugoslava di Macedonia",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malesia",
			MALDIVES: 					"Maldive",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinica",
			MAURITIUS: 					"Mauritius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Messico",
			MONACO: 					"Principato di Monaco",
			MONGOLIA: 					"Mongolia",
			MOROCCO: 					"Marocco",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Paesi Bassi",
			NETHERLANDS_ANTILLES: 		"Antille Olandesi",

			NEW_ZEALAND: 				"Nuova Zelanda",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Norvegia",
			NORTHERN_MARIANA_ISLANDS: 	"Marianne Settentrionali",
			OMAN: 						"Oman",
			PAKISTAN: 					"Pakistan",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua Nuova Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Perù",
			PHILIPPINES: 				"Filippine",
			POLAND: 					"Polonia",
			PORTUGAL: 					"Portogallo",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Reunion",
			ROMANIA: 					"Romania",
			RUSSIA: 					"Singapore-ExStream",
			RWANDA: 					"Ruanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Arabia Saudita",
			SINGAPORE: 					"Singapore",
			SLOVAK_REPUBLIC: 			"Slovacchia",
			SLOVENIA: 					"Slovenia",
			SOUTH_AFRICA: 				"Sud Africa",
			SPAIN: 						"Spagna",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Suriname",
			SWEDEN: 					"Svezia",
			SWITZERLAND: 				"Svizzera",
			SYRIA: 						"Siria",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tanzania",
			THAILAND: 					"Tailandia",
			TRINIDAD_TOBAGO: 			"Trinidad e Tobago",
			TUNISIA: 					"Tunisia",
			TURKEY: 					"Turchia",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ucraina",
			UNITED_ARAB_EMIRATES: 		"Emirati Arabi Uniti",
			UNITED_KINGDOM: 			"Regno Unito",
			UNITED_STATES: 				"Stati Uniti",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Uzbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnam",
			VIRGIN_ISLANDS: 			"Isole Vergini, USA",
			YEMEN: 						"Yemen",
			ZIMBABWE: 					"Zimbabwe"
		},
		
		MODEM_ISP: {
			M_CLARO:                                                      "claro",
			M_MOVISTAR:                                                   "Movistar",
			M_PERSONAL:                                                   "Personal",
			M_ORANGE_ARMENIA:                                             "Orange Armenia",
			M_BEELINE:                                                    "Beeline",
			M_VIVACELL_MTS:                                               "Vivacell-MTS",
			M_LEBARA_MOBILE:                                              "Lebara Mobile",
			M_OPTUS:                                                      "Optus",
			M_TELSTRA:                                                    "Telstra",
			M_TELSTRA_3G_DATA_BUNDLE:                                     "Telstra 3G data bundle",
			M_TELSTRA_3G_PREPAY:                                          "Telstra 3G prepay",
			M_TELSTRA_3G_PAY_BY_TIME:                                     "Telstra 3G pay by time",
			M_VIRGIN_MOBILE:                                              "Virgin Mobile",
			M_VODAFONE:                                                   "Vodafone",
			M_HUTCHISON_3G_AUSTRIA:                           			  "Hutchison 3G Austria GmbH (3 AT)",
			M_MOBILKOM_AUSTRIA:                                   	  	  "Mobilkom Austria AG (A1)",
			M_ONE:                                                        "One",
			M_TELE_RING:                                                  "tele.ring",
			M_T_MOBILE_MAX_ONLINE:                     					  "T-Mobile, Max Online Business(Austria)",
			M_TELERING:                                                   "Telering",
			M_AZERSELL_TELEKOM:                                           "Azersell Telekom",
			M_BAKSELL:                                                    "Baksell",
			M_NAR_MOBILE:                                                 "Nar Mobile",
			M_BATELCO:                                                    "Batelco",
			M_VIVA:                                                       "Viva",
			M_ZAIN_BH:                                                    "Zain BH",
			M_TELETALK:                                                   "Teletalk",
			M_MOBISTAR:                                                   "Mobistar",
			M_PROXIMUS:                                                   "Proximus",
			M_BRASIL_TELECOM:                                             "Brasil Telecom",
			M_CLARO:                                                      "Claro",
			M_CTBC:                                                       "CTBC",
			M_OI:                                                         "Oi",
			M_SERCOMTEL:                                                  "Sercomtel",
			M_TIM:                                                        "TIM",
			M_VIVO:                                                       "Vivo",
			M_B_MOBILE:                                                   "B-Mobile",
			M_DST_MOBILE:                                                 "DST Mobile",
			M_HELLO:                                                      "Hello",
			M_METFONE:                                                    "Metfone",
			M_MFONE:                                                      "Mfone",
			M_MOBITEL:                                                    "Mobitel",
			M_QB:                                                         "QB",
			M_SMART:                                                      "Smart",
			M_BELL_NEW_STICK_:                                            "Bell(New Stick)",
			M_BELL_7_2_SIM_BASED_STICK:                                   "Bell 7.2 SIM Based stick",
			M_BELL_EVDO___NO_SIM:                                         "Bell(EVDO), NO SIM",
			M_MOBILICITY:                                                 "Mobilicity",
			M_ROGERS_1_:                                                  "Rogers(1)",
			M_ROGERS_2_:                                                  "Rogers(2)",
			M_FIDO_1_:                                                    "Fido(1)",
			M_FIDO_2_:                                                    "Fido(2)",
			M_TELUS_NEW_STICK_:                                           "Telus(New Stick)",
			M_TELUS_EVDO___NO_SIM:                                        "Telus(EVDO), NO SIM",
			M_WINDMOBILE:                                                 "WindMobile",
			M_VERIZON:                                                    "Verizon",
			M_VIDEOTRON:                                                  "Videotron",
			M_AT_T:                                                       "AT&T",
			M_T_MOBILE:                                                   "T-Mobile",
			M_BELL:                                                       "Bell",
			M_CLARO_PREPAGO:                                              "Claro Prepago",
			M_CLARO_PLAN:                                                 "Claro plan",
			M_ENTELPCS_PREPAGO:                                           "EntelPcs Prepago",
			M_ENTEL_PCS_PLAN:                                             "Entel Pcs Plan",
			M_MOVISTAR_PREPAGO:                                           "Movistar Prepago",
			M_MOVISTAR_PLAN:                                              "Movistar Plan",
			M_CHINA_TELECOM:                                              "China Telecom",
			M_CHINA_UNICOM:                                               "China Unicom",
			M_CHINA_MOBILE:                                               "China Mobile",
			M_T_MOBILE_CZ:                                                "T-Mobile CZ",
			M_TELEFONICA_O2_CZ:                                           "Telefonica O2 CZ",
			M_VODAFONE_CZ:                                                "Vodafone CZ",
			M_VODAFONE_CZ_PREPAID:                                        "Vodafone CZ prepaid",
			M_3_DK:                                                       "3.dk",
			M_CALLME:                                                     "Callme",
			M_CBB:                                                        "CBB",
			M_FULLRATE:                                                   "Fullrate",
			M_OISTER:                                                     "Oister",
			M_TDC_LTE_:                                                   "TDC(LTE)",
			M_TDC:                                                        "TDC",
			M_TELENOR:                                                    "Telenor",
			M_TELIA:                                                      "Telia",
			M_TELMORE:                                                    "Telmore",
			M_TELMEX:                                                     "Telmex",
			M_ETISALAT:                                                   "Etisalat",
			M_MOBINIL:                                                    "Mobinil",
			M_SAUNALAHTI:                                                 "Saunalahti",
			M_ELISA:                                                      "Elisa",
			M_SONERA:                                                     "Sonera",
			M_DNA:                                                        "DNA",
			M_BOUYGUES_TELECOM:                                           "Bouygues Telecom",
			M_ORANGE_M6_MOBILE_FRANCE_:                                   "Orange M6 Mobile(France)",
			M_ORANGE_ENTERPRISE_:                                         "Orange(Enterprise)",
			M_ORANGE_PERSONAL_:                                           "Orange(Personal)",
			M_SFR:                                                        "SFR",
			M_BLAU_DE:                                                    "blau.de",
			M_E_PLUS:                                                     "E-plus",
			M_O2_GERMANY_:                                                "O2(Germany)",
			M_T_MOBILE_GERMANY_:                                          "T-Mobile(Germany)",
			M_T_MOBILE_BUSINESS_GERMANY_:                                 "T-Mobile Business(Germany)",
			M_VODAFONE_GERMANY_:                                          "Vodafone(Germany)",
			M_1UND1_DE_:                                                  "1und1(DE)",
			M_KABEL_DEUTSCHLAND_MOBILE:                       			  "Kabel Deutschland Mobile (KD-Mobile)",
			M_COSMOTE:                                                    "Cosmote",
			M_WIND:                                                       "Wind",
			M_TIGO:                                                       "TIGO",
			M_CHINA_MOBILE_PEOPLES_TELEPHONE:                             "China Mobile Peoples Telephone",
			M_NETVIGATOR:                                                 "Netvigator",
			M_NEW_WORLD:                                                  "New World",
			M_ONE2FREE:                                                   "One2Free",
			M_PCCW_MOBILE:                                                "PCCW mobile",
			M_PCCW_MOBILE_3G_:                                            "PCCW Mobile(3G)",
			M_SMARTONE_VODAFONE:                                          "Smartone-Vodafone",
			M_1010_ONE2FREE_:                                             "1010(One2Free)",
			M_1010_4G_:                                                   "1010(4G)",
			M_3_HONG_KONG:                                                "3 Hong Kong",
			M_3_2G:                                                       "3 2G",
			M_DIGI__PREPAID_AND_POSTPAID_:                                "Digi (prepaid and postpaid)",
			M_INVITEL__PREPAID_AND_POSTPAID_:                             "Invitel (prepaid and postpaid)",
			M_TELENOR__PREPAID_AND_POSTPAID_:                             "Telenor (prepaid and postpaid)",
			M_T_MOBILE__PREPAID_AND_POSTPAID_:                            "T-Mobile (prepaid and postpaid)",
			M_VODAFONE__POSTPAID_:                                        "Vodafone (postpaid)",
			M_VODAFONE__PREPAID_:                                         "Vodafone (prepaid)",
			M_AIRTEL:                                                     "AirTel",
			M_BPL_MOBILE_MUMBAI:                                          "BPL Mobile Mumbai",
			M_BSNL:                                                       "BSNL",
			M_BSNL_2_:                                                    "BSNL(2)",
			M_BSNL_CELLONE:                                               "BSNL-CellOne",
			M_IDEA:                                                       "Idea",
			M_IDEA_CELLULAR:                                              "Idea Cellular",
			M_MTNL_1_:                                                    "MTNL(1)",
			M_MTNL_DELHI__CONNECT_:                                       "MTNL Delhi (Connect)",
			M_MTNL_DELHI_POST_PAID:                                       "MTNL Delhi post paid",
			M_MTNL_DELHI_PRE_PAID:                                        "MTNL Delhi pre paid",
			M_MTNL_MUMBAI_3G_POST_PAID:                                   "MTNL Mumbai 3G post paid",
			M_MTNL_MUMBAI_3G_PRE_PAID:                                    "MTNL Mumbai 3G pre paid",
			M_MTS:                                                        "MTS",
			M_ORANGE_HUTCH__GUJARAT_:                                     "Orange Hutch (Gujarat)",
			M_RELIANCE_NETCONNECT:                                        "Reliance Netconnect",
			M_SPICE_TELECOM:                                              "Spice Telecom",
			M_VODAFONE_INDIA__LIVE_:                                      "Vodafone India (Live)",
			M_TATA_DOCOMO:                                                "TATA DOCOMO",
			M_TATA_INDICOM_PHOTON_:                                       "Tata Indicom Photon+",
			M_3:                                                          "3",
			M_AHA:                                                        "Aha",
			M_AXIS:                                                       "Axis",
			M_FLEXI:                                                      "Flexi",
			M_INDOSAT:                                                    "Indosat",
			M_INDOSAT_IM2:                                                "Indosat IM2",
			M_TELKOMSEL_FLASH:                                            "Telkomsel Flash",
			M_XL:                                                         "XL",
			M_METEOR:                                                     "Meteor",
			M_O2_IRELAND_:                                                "O2(Ireland)",
			M_VODAFONE_IRELAND_:                                          "Vodafone(Ireland)",
			M_3_IRELAND:                                                  "3 Ireland",
			M_EMOBILE:                                                    "eMobile",
			M_THREE:                                                      "Three",
			M_PELEPHONE:                                                  "Pelephone",
			M_3_PIANI_DATI_:                                              "3(piani dati)",
			M_3_PIANI_VOCE_:                                              "3(piani voce)",
			M_BT_MOBILE:                                                  "BT Mobile",
			M_COOPVOCE:                                                   "Coopvoce",
			M_ERG_MOBILE:                                                 "Erg Mobile",
			M_FASTWEB:                                                    "Fastweb",
			M_NOVERCA:                                                    "Noverca",
			M_POSTE_MOBILE:                                               "Poste Mobile",
			M_TISCALI_MOBILE:                                             "Tiscali Mobile",
			M_WIND_BIZ:                                                   "Wind Biz",
			M_E_MOBILE:                                                   "E-mobile",
			M_NTT_DOCOMO_KANSAI:                                          "NTT DoCoMo Kansai",
			M_SOFTBANK:                                                   "SoftBank",
			M_ORANGE:                                                     "Orange",
			M_ZAIN:                                                       "Zain",
			M_ALTEL:                                                      "Altel",
			M_KCELL:                                                      "Kcell",
			M_TELE2:                                                      "Tele2",
			M_KTF:                                                        "KTF",
			M_SK_TELECOM:                                                 "SK Telecom",
			M_VIVA:                                                       "VIVA",
			M_WATANIYA:                                                   "Wataniya",
			M_LMT:                                                        "LMT",
			M_BITE:                                                       "Bite",
			M_P_T_LUXEMBOURG:                                             "P&T Luxembourg",
			M_VOXMOBILE:                                                  "Voxmobile",
			M_CTM:                                                        "CTM",
			M_HUTCHISON:                                                  "Hutchison",
			M_SMARTONE:                                                   "SmarTone",
			M_CELCOM:                                                     "Celcom",
			M_CELCOM_TM_2G_POSTPAID_:                                     "Celcom TM(2G Postpaid)",
			M_DIGI_1:                                                     "DiGi_1",
			M_DIGI_2:                                                     "DiGi_2",
			M_MAXIS_UNET:                                                 "Maxis_unet",
			M_MAXIS_BB:                                                   "Maxis_bb",
			M_REDTONE:                                                    "RedTone",
			M_U_MOBILE:                                                   "U-Mobile",
			M_TELCEL:                                                     "Telcel",
			M_ORANGE:                                                     "orange",
			M_MOLDCELL:                                                   "Moldcell",
			M_UNITE:                                                      "Unite",
			M_INWI:                                                       "INWI",
			M_MAROC_TELECOM:                                              "MAROC TELECOM",
			M_MEDITEL:                                                    "MEDITEL",
			M_KPN_IN:                                                     "KPN_in",
			M_KPN_POR:                                                    "KPN_por",
			M_ORANGE_NETHERLANDS_:                                        "Orange(Netherlands)",
			M_TELFORT:                                                    "Telfort",
			M_T_MOBILE_NETHERLANDS_:                                      "T-Mobile(Netherlands)",
			M_VODAFONE_NETHERLANDS_:                                      "Vodafone(Netherlands)",
			M_TELECOM:                                                    "Telecom",
			M_2_DEGREE:                                                   "2 degree",
			M_NETCOM_NORWAY:                                              "Netcom Norway",
			M_TELENOR_MOBIL_NORWAY:                                       "Telenor Mobil Norway",
			M_TALKMORE_NORWAY:                                            "Talkmore Norway",
			M_NAWRAS:                                                     "Nawras",
			M_OMANTEL:                                                    "Omantel",
			M_CLARO_PANAMA:                                               "Claro Panama",
			M_TELECEL:                                                    "Telecel",
			M_CLARO_PERU_:                                                "Claro(Peru)",
			M_MOVISTAR_TELEFONICA_1_:                                     "Movistar(Telefonica_1)",
			M_MOVISTAR_TELEFONICA_2_:                                     "Movistar(Telefonica_2)",
			M_NEXTEL:                                                     "Nextel",
			M_GLOBE_TATTOO_SONIC:                    					  "Globe Tattoo Sonic / 4G Flash (prepaid)",
			M_GLOBE_TATTOO_CONSUMABLE_PLANS:      						  "Globe Tattoo Consumable Plans / Visibility (postpaid)",
			M_PLDT_WEROAM_PLAN:                                           "PLDT WeRoam Plan",
			M_PLDT_WEROAM_PLUS:                                           "PLDT WeRoam Plus",
			M_PLDT_WEROAM_UNLIMITED:                                      "PLDT WeRoam Unlimited",
			M_SMARTBRO_PREPAID:                                           "SmartBro Prepaid",
			M_SMARTBRO_POSTPAID:                                          "SmartBro Postpaid",
			M_SUN_BROADBAND_WIRELESS_PREPAID:             				  "SUN Broadband Wireless Prepaid / Plan 350 Lite",
			M_SUN_EASY_BROADBAND:                  						  "SUN Easy Broadband, Wireless Plan 799/899",
			M_SUN_BROADBAND:                                  			  "SUN Broadband (Plan 1399)",
			M_AERO2:                                                      "Aero2",
			M_ORANGE_POLAND_:                                             "Orange(Poland)",
			M_PLAY:                                                       "PLAY",
			M_PLUS:                                                       "Plus",
			M_POLSAT:                                                     "POLSAT",
			M_OPTIMUS_KANGURU:                                            "Optimus Kanguru",
			M_VODAFONE_PORTUGAL_:                                         "Vodafone(Portugal)",
			M_TMN:                                                        "TMN",
			M_OPTIMUS:                                                    "Optimus",
			M_INDONESIA:                                                  "Indonesia",
			M_PTCL:                                                       "ptcl",
			M_WCALL:                                                      "WCALL",
			M_OOREDOO:                                                    "Ooredoo",
			M_RCS_RDS:                                                    "RCS-RDS",
			M_MEGAFON:                                                    "Megafon",
			M_SKYLINK:                                                    "Skylink",
			M_VAINAKH_TELECOM:                                            "Vainah Telecom",
			M_YOTA:                                                       "Yota",
			M_ROSTELECOM:                                                 "Rostelecom",
			M_MOBILY_PREPAID:                                             "Mobily Prepaid",
			M_MOBILY_POSTPAID:                                            "Mobily Postpaid",
			M_SAUDI_TELECOM_COMPANY:                                      "Saudi Telecom Company",
			M_M1:                                                         "M1",
			M_POWER_GRID:                                                 "Power Grid",
			M_SINGTEL:                                                    "SingTel",
			M_STARHUB_PREPAID_:                                           "StarHub(Prepaid)",
			M_STARHUB_DEFAULT_:                                           "StarHub(Default)",
			M_SLOVAK_TELEKOM:                                             "Slovak Telekom",
			M_ORANGE_SLOVENSKO:                                           "Orange Slovensko",
			M_8TA:                                                        "8ta",
			M_CELL_C__PTY__LTD:                                           "Cell C (Pty) Ltd",
			M_MTN:                                                        "MTN",
			M_VIRGIN_MOBILE:                                              "Virgin mobile",
			M_VODACOM:                                                    "Vodacom",
			M_BT_SPAIN_:                                                  "BT(Spain)",
			M_CARREFOUR_INTERNET:                                         "Carrefour Internet",
			M_EUSKALTEL_SPAIN_:                                           "Euskaltel(Spain)",
			M_MOVISTAR:                                                   "MOVISTAR",
			M_ORANGE_SPAIN_:                                              "Orange(Spain)",
			M_SIMYO_SPAIN_:                                               "Simyo(Spain)",
			M_TELECABLE_SPAIN_:                                           "Telecable(Spain)",
			M_VODAFONE_SPAIN_:                                            "Vodafone(Spain)",
			M_YOIGO:                                                      "Yoigo",
			M_DIALOG_TELEKOM:                                             "Dialog Telekom",
			M_TELIA__PRIVAT_:                                             "Telia (privat)",
			M_TELENOR__PRIVAT_:                                           "Telenor (privat)",
			M_TELENOR__PUBLIK_:                                           "Telenor (publik)",
			M_TELE2__7_2_MBIT_:                                           "Tele2 (7,2 Mbit)",
			M_3__PUBLIK_:                                                 "3 (publik)",
			M_3__PRIVAT_:                                                 "3 (privat)",
			M_HALEBOP:                                                    "Halebop",
			M_DJUICE:                                                     "Djuice",
			M_GLOCALNET:                                                  "Glocalnet",
			M_BREDBANDSBOLAGET:                                           "Bredbandsbolaget",
			M_ORANGE_SWITZERLAND_:                                        "Orange(Switzerland)",
			M_SWISSCOM:                                                   "Swisscom",
			M_SUNRISE:                                                    "Sunrise",
			M_CHUNGHUA_TELECOM:                                           "Chunghua Telecom",
			M_FAREASTONE:                                                 "FarEasTone",
			M_KG_TELECOM:                                                 "KG Telecom",
			M_MOBITAI:                                                    "MobiTai",
			M_VIBO:                                                       "Vibo",
			M_TAIWAN_MOBILE:                                              "Taiwan Mobile",
			M_TRANSASIA:                                                  "TransAsia",
			M_LUXEMBOURG:                                                 "Lussemburgo",
			M_AIS:                                                        "AIS",
			M_DTAC:                                                       "DTAC",
			M_I_MOBILE:                                                   "i-mobile",
			M_TOT:                                                        "TOT",
			M_TRUE:                                                       "TRUE",
			M_AVEA_INTERNET:                                              "Avea Internet",
			M_AVEA_ILETISIM_HIZMETLERI:                     			  "Avea Iletisim Hizmetleri A.S. (Aycell)",
			M_TURKCELL:                                                   "Turkcell",
			M_TURKCELL_3G:                                                "Turkcell 3G",
			M_TURKCELL_3G_STATIC_IP:                                      "Turkcell 3G Static IP",
			M_VODAFONE_TR:                                                "Vodafone TR",
			M_INTERTELECOM:                                               "Intertelecom",
			M_KYIVSTAR:                                                   "Kyivstar",
			M_LIFE:                                                       "Life",
			M_UTEL:                                                       "Utel",
			M_DU:                                                         "Du",
			M_AIRTEL_VODAFONE:                                            "AirTel Vodafone",
			M_ASDA_MOBILE:                                                "Asda Mobile",
			M_GIFFGAFF:                                                   "GiffGaff",
			M_JERSEY_TELECOM:                                             "Jersey Telecom",
			M_O2__CONTRACT_:                                              "O2 (Contract)",
			M_O2__PAYG_:                                                  "O2 (PAYG)",
			M_TESCO_MOBILE:                                               "Tesco Mobile",
			M_VODAFONE__CONTRACT_:                                        "Vodafone (contract)",
			M_VODAFONE__PAYG___5:                       				  "Vodafone (PAYG - 5 pounds for 250MB)",
			M_VODAFONE__PAYG___15:                       				  "Vodafone (PAYG - 15 pounds for 2GB)",
			M_VODAFONE__PAYG___15_1GB:                        			  "Vodafone (PAYG - 15 pounds for 1GB)",
			M_EE:                                                         "EE",
			M_MOVISTAR:                                                   "movistar",
			M_ALLTEL:                                                     "Alltel",
			M_SPRINT:                                                     "Sprint",
			M_VERIZON_4G_:                                                "Verizon(4G)",
			M_VIRGIN:                                                     "Virgin",
			M_DIGITEL:                                                    "DIGITEL",
			M_MOVILNET:                                                   "MOVILNET",
			M_MOBIFONE:                                                   "Mobifone",
			M_VINAPHONE:                                                  "Vinaphone",
			M_VIETTEL:                                                    "Viettel",
			M_VIETNAMOBILE:                                               "Vietnamobile"
		},

		TIME_ZONE: {
			ENIWETOK: 					"(GMT-12:00) Eniwetok, Kwajalein", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT - 11.00 h) Isole Midway, Samoa",
			HAWAII: 					"(GMT - 10.00 h) Hawaii",
			ALASKA: 					"(GMT - 09.00 h) Alaska",
			PACIFIC_TIME: 				"(GMT - 08.00 h) Costa Pacifica",
			MOUNTAIN_TIME: 				"(GMT - 07.00 h) Fuso occidentale (USA e  Canada)",
			CENTRAL_TIME: 				"(GMT - 06.00 h) Fuso centrale (USA e  Canada)",
			EASTERN_TIME: 				"(GMT - 05.00 h) Fuso orientale (USA e  Canada)",
			CARACAS:					"(GMT - 04.30 h) Caracas",
			ATLANTIC_TIME: 				"(GMT - 04.00 h) Costa atlantica  (Canada)",
			NEWFOUNDLAND: 				"(GMT - 03.30 h) Terranova",

			BRASILIA_BUENOS_AIRES: 		"(GMT - 03.00 h) Brasilia, Buenos Aires",
			MID_ATLANTIC: 				"(GMT - 02.00 h) Medioatlantico",
			AZORES_CAPE_VERDE_IS: 		"(GMT - 01.00) Azzorre, Is. di Capo Verde",
			GREENWICH_MEAN_TIME: 		"(GMT) Ora di Greenwich; Dublino, Londra",
			BERLIN_STOCKHOLM: 			"(GMT + 01.00 h) Berlino, Stoccolma, Roma, Berna, Bruxelles",
			ATHENS_HELSINKI: 			"(GMT + 02.00 h) Atene, Helsinki, Europa Orientale, Israele",
			BAGHDAD_KUWAIT: 			"(GMT + 03.00 h) Baghdad, Kuwait, Nairobi, Riyadh, Mosca",

			TEHERAN: 					"(GMT + 03.30 h) Teheran",

			ABU_DHABI: 					"(GMT + 04.00 h) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT + 04.30 h) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT + 05.00 h) Islamabad, Karachi, Ekaterinburg",

			MADRAS_CALCUTTA: 			"(GMT + 05.30 h) Madras, Calcutta, Mumbay, Nuova Delhi",
			KATMANDU: 					"(GMT + 05.45 h) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT + 06.00 h) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT + 06.30 h) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT + 07.00) Bangkok, Giacarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT + 08.00 h) Pechino, Hong Kong, Perth, Singapore",
			TOKYO_OSAKA_SAPPORO: 		"(GMT + 09.00 h) Tokyo, Osaka, Sapporo, Seoul, Yakutsk",

			ADELAIDE: 					"(GMT + 09.30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT + 10.00 h) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT + 11.00 h) Magadan, Isole Salomone, Nuova Caledonia",
			FIJI_KAMCHATKA: 			"(GMT + 12.00 h) Fiji, Kamchatka, Auckland",
			NUKU: 						"(GMT + 13.00 h) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Applicazione",
			GAME:						"GIOCO",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"Linea",
			Skype:                      "Skype",
			PPStream: 					"PPStream",
			SIP:  						"SIP",
			PPTC: 						"PPTC", 
			H323: 						"H323",
			HTTPFD: 					"HTTPFD",
			PPTP: 						"PPTP",
			L2TP:  						"L2TP",
			IPSec:                      "IPSec",
			IMAP: 						"IMAP",
			xl_others:  				"xl_others",
			Vonage:  					"Vonage",
			netTalk:  					"netTalk",
			iTalkBB: 					"iTalkBB",
			HTTP: 						"HTTP",
			MMS:  						"MMS",
			RTSP:                       "RTSP",
			WOW:						"WOW",
			LOL:						"LOL",
			SSH:						"SSH",
			TELNET:						"telnet",
			VPN:						"VPN",
			FTP:						"FTP",
			WWW:						"WWW",
			DNS:						"DNS",
			ICMP:						"ICMP",
			SMTP:						"SMTP",
			NNTP:						"NNTP",
			POP3:						"POP3",
			HTTPS:  					"HTTPS",
			BT: 						"BT",
			Emule: 						"Emule",
			Facebook: 					"Facebook",
			GTalk: 						"GTalk",
			Whatsapp: 					"WhatsApp",


			END:						""
		},

		DATE: {
			DAY: 						"Giorno",

			MONDAY: 					"Lunedì",
			TUESDAY: 					"Martedì",
			WEDNESDAY: 					"Mercoledì",
			THURSDAY: 					"Giovedì",
			FRIDAY: 					"Venerdì",
			SATURDAY: 					"Sabato",
			SUNDAY: 					"Domenica",
			
			MON: 						"Lun.",
			TUES: 						"Mar.",
			WED: 						"Mer.",
			THUR: 						"Gio.",
			FRI: 						"Ven.",
			SAT: 						"Sab.",
			SUN: 						"Dom.",

			JAN: 						"Gen.",
			FEB: 						"Feb.",
			MAR: 						"Mar.",
			APR: 						"Apr.",
			MAY: 						"Mag.",
			JUN: 						"Giu.",
			JUL: 						"Lug.",
			AUG: 						"Ago.",
			SEP: 						"Set.",
			OCT: 						"Ott.",
			NOV: 						"Nov.",
			DEC: 						"Dic."

		},

		HOUR: {
			AM_1: 						"1:00",
			AM_2: 						"2:00",
			AM_3: 						"3:00",
			AM_4: 						"4:00",
			AM_5: 						"5:00",
			AM_6: 						"6:00",
			AM_7: 						"7:00",
			AM_8: 						"8:00",
			AM_9: 						"9:00",
			AM_10: 						"10:00",
			AM_11: 						"11:00",
			AM_12: 						"12:00",
			PM_1: 						"13:00",
			PM_2: 						"14:00",
			PM_3: 						"15:00",
			PM_4: 						"16:00",
			PM_5: 						"17:00",
			PM_6: 						"18:00",
			PM_7: 						"19:00",
			PM_8: 						"20:00",
			PM_9: 						"21:00",
			PM_10: 						"22:00",
			PM_11: 						"23:00",
			PM_12: 						"0:00"
		},

		ORDER: {
			"1ST": 						"Primo",
			"2ND": 						"2°",
			"3RD": 						"3°",
			"4TH": 						"4°",
			"5TH": 						"5°",
			"1ST_": 					"1°",

			TH: 						"o"
		},

		GRID: {
			CLIENT_NUMBER: 				"Numero cliente",

			ID: 						"ID",
			MODIFY: 					"Modifica",
			STATUS: 					"Stato",
			ENABLE: 					"Abilita",

			OPERATION: 					"Operazione",
			CHOOSE: 					"Scegli",
			DESCRIPTION: 				"Descrizione",
			

			AUTO_REFRESH: 				"Aggiornamento automatico",
			REFRESH: 					"Aggiorna",
			NUMBER: 					"Numero",
			ENABLED: 					"Abilitato",
			DISABLED: 					"Disabilitato",
			ACTIVE: 					"Attivo",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Aggiungi",
			CHOOSE: 					"Scegli",
			EDIT: 						"Modifica",
			DELETE: 					"Elimina",
			DELETE_ALL: 				"Elimina tutto",
			REMOVE: 					"Rimuovi",
			RESET: 						"Resetta",
			RESET_ALL: 					"Reset Totale",
			DETECT: 					"Rileva",
			ENABLE: 					"Abilita",
			DISABLE: 					"Disabilita",
			CLEAR: 						"Pulisci",

			REFRESH: 					"Aggiorna",
			SEARCH: 					"Ricerca...",
			BROWSE: 					"Sfoglia",

			SAVE: 						"Salva",
			BACK: 						"Indietro",

			PREV: 						"Prec",
			NEXT: 						"Avanti",
			FINISH: 					"Fine",
			
			ON: 						"Attivo",
			OFF: 						"Disattivo",
			LOW: 						"Basso",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto",
			
			OK: 						"OK",
			CANCEL: 					"Cancella",

			YES: 						"Si",
			NO: 						"No",
			
			CONNECTED: 					"Connesso",
			CONNECTING: 				"Connessione in corso",
			DISCONNECTING: 				"Disconnessione in corso",
			DISCONNECTED: 				"Non connesso",

			PASSWORD_HINT: 				"Password",
			FILEBUTTONTEXT: 			"Sfoglia",
			FILEBLANKTEXT: 				"Selezionate un file.",
			NOSELECTEDTEXT: 			"Selezionate le opzioni.",

			ADD_A_NEW_KEYWORD: 			"Aggiungi Nuova Parola Chiave",

			SUCCESSED: 					"Successo!",
			FORM_SAVED: 				"Salvato",
			FORM_FAILED: 				"Salvataggio non riuscito",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Salvato",
			GRID_FAILED: 				"Salvataggio non riuscito",
			GRID_NONE_SELECT: 			"Selezionate almeno una entry.",
			GRID_DELETE_COMFIRM: 		"Siete sicuri di volere eliminare queste voci?",
			GRID_DELETE_ALL_COMFIRM: 	"Siete sicuri di volere eliminare tutte le voci?",
			GRID_MAX_RULES: 			"Numero massimo di voci superato.",
			KEYWORD_MAX_OVERFLOW: 		"Il numero di parole chiave ha superato il limite.",

			NOTE: 						"Nota:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Formato non valido.",
			BLANKTEXT: 					"Questo campo è obbligatorio.",

			EMAIL: 						"Formato e-mail non valido.",
			NUMBER: 					"Formato non valido.",

			NUMBER_MIN: 				"Valore non valido, immettete un numero maggiore di %min.",
			NUMBER_MAX: 				"Valore non valido, immettete un numero minore di%max.",

			NUMBER_MIN_MAX: 			"Valore non valido, immettete un numero compreso tra %min e %max.",
			HEX: 						"Il campo deve essere un numero esadecimale.",

			IP: 						"Formato non valido.",

			IP_NO_ALL_ZERO:				"L'indirizzo non può essere 0.0.0.0.",
			IP_NO_LOOP:					"L'indirizzo non può essere un indirizzo di loopback.",
			IP_NO_D_TYPE:				"L'indirizzo non può essere un IP di classe D.",
			IP_NO_E_TYPE:				"L'indirizzo non può essere un IP di classe E.",
			IP_NO_ALL_ONE:				"L'indirizzo non può essere 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"L'indirizzo non può iniziare con 255.",
			IP_NO_FIRST_ZERO:			"L'indirizzo non può iniziare con 0.",
			MASK_NO_ALL_ONE:			"La maschera non può essere 255.255.255.255.",

			IPV6: 						"Formato non valido.",
			IPV6_NOT_GLOBAL:			"Formato non valido.",
			IPV6_NOT_PREFIX:			"Formato non valido.",
			IP_DOMAIN: 					"Formato non valido.",
			IPV6_DOMAIN: 				"Formato non valido.",
			MAC: 						"Formato non valido.",
			MULTI_MAC:					"Formato non valido.",
			DATE: 						"Formato non valido.",
			DATE_INVALID: 				"Immettete una data compresa tra 01/01/1970 e 31/12/2030.",
			MASK: 						"Formato non valido.",
			DOMAIN: 					"Formato non valido.",
			STRING_DOMAIN:              "Formato non valido.",
			USER: 						"Formato non valido.",
			NOTE: 						"Formato non valido.",
			PWD: 						"Formato non valido.",
			SSID: 						"Formato non valido.",
			NAME:						"Formato non valido.",
			ASCII_VISIBLE:				"Formato non valido.",
			STRING_VISIBLE:				"Formato non valido.",
			STRING_VISIBLE_NO_COMMA:    "Formato non valido.",
			STRING_VISIBLE_ALLOW_BLANK: "Formato non valido.",
			NAME_SPECIAL: 				"Immettete 4-15 lettere, numeri, - e _.",
			VPN_NAME_PWD: 				"Immettete 1-15 lettere, numeri, - e _."	
			
		},


		ERROR: {			
			"00000001":					"Tipo di file non valido.",
			"00000002":					"Errore di checksum.",
			"00000003":					"Il file è troppo grande.",
			"00000004":					"Errore di Upload.",
			"00000005":					"Errore di riavvio.",
			"00000006":					"Errore sconosciuto.",
			"00000007":					"Elemento già esistente. Immettete un altro elemento.",

			"00000009":					"Utilizzate il valore predefinito 21 oppure immettete un valore compreso tra 1024 e 65535.",
			"00000010":					"La porta deve essere un numero.",

			"00000011":					"La Username deve essere lo stesso utilizzato per il valore Da.",
			"00000012": 				"La Username deve iniziare con una lettera dell'alfabeto.",

			"00000021":					"Formato non valido.",

			"00000032": 				"Il valore deve essere inferiore a Bassa.",
			"00000033": 				"Il valore deve essere inferiore a Media e Bassa.",
			"00000034": 				"Valore non valido, immettete un numero compreso tra 5 e 7200.",

			"00000039": 				"Utilizzate il valore predefinito 0 oppure immettete un valore compreso tra 30 e 86400.",
			"00000040": 				"Sono necessari SSID e MAC.",

			"00000042": 				"Utilizzate il valore predefinito 80 oppure immettete un valore compreso tra 1024 e 65535.",

			"00000045": 				"Gateway predefinito e indirizzo IP LAN devono essere nella stessa subnet. Reimmetteteli.",

			"00000047": 				"Gli indirizzi IP e IP LAN devono essere nella stessa subnet. Reimmetteteli.",

			
			"00000049":					"Destinazione di rete non valida.",

			"00000050": 				"Indirizzo IP del server DNS non valido. Immettete un altro indirizzo IP.",
			"00000051": 				"Indirizzo MAC già esistente. Immettete un altro indirizzo.",
			"00000052": 				"Indirizzo IP già esistente. Immettete un altro indirizzo.",

			"00000053": 				"L'indirizzo iniziale non può essere maggiore dell'indirizzo finale. <br/>Reimmettetelo.",

			"00000054": 				"Il pool di indirizzi IP e l'indirizzo IP LAN devono essere nella stessa subnet. Reimmetteteli.",

			"00000055": 				"L'IP non può essere uguale all'indirizzo LAN.",

			"00000056": 				"L'indirizzo IP remoto e l'indirizzo IP LAN corrente non devono essere nella stessa subnet. Immettete un altro indirizzo.",

			"00000057": 				"Password PSK non valida. Reimmettetela.",
			"00000058": 				"Password WEP non valida. Reimmettetela. ",

			"00000059": 				"Subnet mask e indirizzo IP LAN non validi. Reimmetteteli.",

			"00000060": 				"L'indirizzo IP WAN e l'indirizzo IP LAN non devono essere nella stessa subnet. <br/>Immettete un altro indirizzo.",

			"00000061": 				"L'ora di inizio deve essere precedente all'ora di fine.",

			"00000062": 				"Questo campo è obbligatorio.",
			"00000063": 				"Questo campo è obbligatorio.",

			"00000064": 				"Impossibile bloccare l'indirizzo MAC dell'host.",
			"00000065": 				"L'elemento è in conflitto con gli elementi esistenti. Controllate.",
			
			"00000066": 				"La password deve essere composta da 8-63 caratteri o 64 cifre esadecimali.",
			"00000067": 				"La password deve essere composta da 10 cifre esadecimali.",
			"00000068": 				"La password deve essere composta da 5 caratteri ASCII.",
			"00000069": 				"La password deve essere composta da 26 cifre esadecimali.",
			"00000070": 				"La password deve essere composta da 13 caratteri ASCII.",
			"00000071": 				"La password deve essere composta da 32 cifre esadecimali.",
			"00000072": 				"La password deve essere composta da 16 caratteri ASCII.",
			"00000073": 				"La password deve essere inferiore a 64 caratteri.",

			"00000074": 				"Tipo di file non valido.",

			"00000075": 				"La lunghezza del PIN deve essere di 8 caratteri.",

			"00000076": 				"La voce entra in conflitto con le voci esistenti. Verificate la porta e il protocollo di attivazione.",
			"00000077": 				"L'indirizzo IP non può essere uguale all'indirizzo IP LAN.",
			"00000078": 				"L'indirizzo IP host non può essere uguale all'indirizzo IP LAN. ",

			"00000080": 				"Le password non corrispondono. Riprovate.",

			"00000088": 				"Operazione non consentita per la gestione remota.",
			"00000089": 				"Sono stati superati %num tentativi. Riprovate tra due ore.",

			"00000090": 				"La destinazione non può essere l'indirizzo IP LAN.",
			"00000091": 				"La destinazione non può essere l'indirizzo IP WAN.",

			"00000092": 				"Indirizzo IP e indirizzo IP WAN non devono essere nella stessa subnet.  <br/>Reimmettetelo.",
			"00000093": 				"Indirizzo IP e indirizzo IP WAN non devono essere nella stessa subnet.  <br/>Reimmettetelo.",

			"00000094": 				"Gli ID VLAN non possono essere uguali.",
			"00000095": 				"è necessaria almeno una porta Internet",

			"00000096": 				"Parola chiave già esistente.",

			"00000097": 				"La configurazione della frequenza 2.4GHz non avrà effetto prima che abbiate attivato il pulsante Wi-Fi.",
			"00000098": 				"La configurazione della frequenza 5GHz non avrà effetto prima che abbiate attivato il pulsante Wi-Fi.",
			"00000099": 				"Le configurazioni delle frequenza 2.4 e 5GHz non avranno effetto prima che abbiate attivato il pulsante Wi-Fi.",

			"00000100": 				"La configurazione di rete 5GHz non è disponibile a causa delle restrizioni in vigore nella vostra regione/nazione.",

			"00000101": 				"La funzione wireless è disattivata. Se desiderate utilizzare questa funzione. Attivate il pulsante Wi-Fi.",
			"00000102": 				"La funzione wireless è disattivata. Se desiderate utilizzare questa funzione. Attivate il pulsante Wi-Fi.",

			"00000103": 				"La funzione wireless è disattivata. Se desiderate utilizzare questa funzione. Attivate il pulsante Wi-Fi.",
			"00000104": 				"La funzione wireless è disabilitata.",

			"00000105": 				"QoS e IPTV non possono essere attivati contemporaneamente.",

			"00000106": 				"L'indirizzo IP non può essere uguale all'indirizzo IP LAN.",
			
			"00000107": 				"Destinazione già esistente.",

			"00000110": 				"L'indirizzo IP e l'indirizzo IP LAN devono essere nella stessa subnet.",
			
			"00000111": 				"QoS e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">Incremento NAT</a> non possono essere abilitati contemporaneamente.",
			"00000112": 				"La funzione WDS può funzionare sia in 2.4 che in 5GHz. Inoltre, la rete ospiti non è disponibile sulla banda WDS.",
			"00000113": 				"WDS e rete ospiti non possono essere attivate contemporaneamente.",
			"00000114": 				"Le statistiche di traffico e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">Incremento NAT</a> non possono essere abilitate contemporaneamente.",
			"00000115": 				"IPTV e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> non possono essere attivati contemporaneamente.",

			"00000117": 				"Nome di dominio già esistente.",
			"00000118": 				"Il numero dei nomi di dominio ha superato il limite.",
			"00000119":				"Incremento NAT sarà disabilitato quando <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> o <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Statistiche di traffico</a> sarà abilitata.",

			"00000120": 				"La password deve essere composta da 5 o 13 caratteri ASCII. ",
			"00000121": 				"La password deve essere composta da 10 o 26 cifre esadecimali.",
			"00000122": 				"La Username e la password sono vuoti. Continuare?",
			"00000123": 				"Salvataggio in corso ... <br/>Non utilizzare durante l'operazione.",
			"00000124": 				"Il PIN del router è bloccato a causa di numerosi tentativi di connessione effettuati con un PIN errato. Generate un nuovo PIN.",

			"00000125": 				"Il numero di regole QoS ha superato il limite.",
			"00000126": 				"La dimensione del file ha superato il limite.",
			"00000127": 				"Il contenuto del file non è corretto.",
			"00000128": 				"Selezionate almeno un'applicazione. ",
			"00000129": 				"Selezionate almeno una porta fisica.",
			"00000130":					"La funzione WPS è disabilitata.",
			"00000131": 				"Il server NTP non può essere un indirizzo di loopback.",
			"00000132": 				"Scelta modalità non riuscita. Riprovate più tardi o riavviate il router.",
			"00000133": 				"Indirizzo IP host DMZ non valido. Immettete un indirizzo valido.",
			"00000134":  				"IP interno non valido. Immettete un indirizzo valido.",
			"00000135": 				"Errore file firmware.",
			"00000136": 				"Errore file di backup.",
			"00000137": 				"La username è vuota, siete sicuri di volere continuare?",
			"00000138": 				"La password è vuota, siete sicuri di volere continuare?",
			"00000139": 				"Parametri recupero password non corretti.",
			"00000140": 				"Codice non corretto.",
			"00000141": 				"Recupero Password disabilitato.",
			"00000142": 				"Invio codice fallito. Verificate la vostra connessione Internet.",
			"00000143": 				"Indirizzi email non validi.",
			"00000144": 				"Messaggio email non valido.",
			"00000145": 				"Potreste non avere trovato l'host.",
			"00000146": 				"Autenticazione fallita.",
			"00000147": 				"La porta deve essere compresa fra 1 e 65535.",
			"00000148": 				"Per il range delle porte, il numero porta iniziale deve essere inferiore al numero porta finale. Reimpostatelo.",
			"00000149": 				"Sovrapposizione numero porta. Reimpostatelo.",
			"00000150": 				"Subnet mask e indirizzo IP WAN non validi. Reimmetteteli.",
			"00000151": 				"Selezionate almeno un giorno.",
			"00000152": 				"Impostate data/ora per l'accesso a Internet.",
			"00000213":					"Indirizzo IP server DNS e indirizzo IP LAN non possono essere nella stessa subnet. <br/>Immettetene un altro.",
			"10000139": 				"Nessuna connessione Internet",
			"10000140": 				"Richiesta scaduta. Verificate la vostra connessione Internet e riprovate in un secondo momento.",
			"10000158": 				"La porta WAN è scollegata.",
			"10000159": 				"Connessione a Internet non disponibile. Contattate il vostro service provider o riprovate in un secondo momento. ",
			"10000160": 				"Non è possibile ottenere un indirizzo IP dal Server DHCP. Verificate il tipo di connessione WAN o riprovate in un secondo momento. ",
			"10000161": 				"Autenticazione PPPoE fallita. Verificate le vostre username e password.",
			"10000162": 				"Non è possibile collegarsi al server PPPoE.",

			"10000164": 				"Autenticazione PPTP fallita. Verificate le vostre username e password.",
			"10000165": 				"Non è possibile collegarsi al server PPTP.",

			"10000167": 				"Autenticazione L2TP fallita. Verificate le vostre username e password.",
			"10000168": 				"Non è possibile collegarsi al server L2TP.",
			"10000169": 				"Errore sconosciuto. Riprovate in un secondo momento.",
			"10000172": 				"Connessione non riuscita.",

			"10000185": 				"Errore di sistema.",	
			"10000186": 				"Errore file firmware.",	
			"10000187": 				"Errore download firmware.",	
			"10000188": 				"Errore aggiornamento firmware.",	
			"10000191": 				"Non è possibile scaricare il firmware.",
			"10000192": 				"Errore aggiornamento firmware.",
			"10000193": 				"Non è possibile collegarsi al server.",	
			"10000194": 				"Non è possibile connettersi al server cloud. Riprovate in un secondo momento.",
			"10000195": 				"Non potete impostare ancora la password perché ne avete impostata una.",
			
			"E3002":                    "Richiesta scaduta.", 
			"E10000": 					"Errore comune.",
			"E20002": 					"Richiesta scaduta.",
			"E20003": 					"Il server cloud è pieno. Riprovate in un secondo momento.",
			"E20107": 					"Immissione non valida.",
			"E20200": 					"Formato e-mail non valido.",
			"E20502": 					"Non è possibile legare il dispositivo. Riprovate in un secondo momento.",
			"E20503": 					"Non è possibile slegare il dispositivo. Riprovate in un secondo momento.",
			"E20506": 					"Operazione fallita. Il dispositivo è già legato ad un altro account cloud.",
			"E20507": 					"Questo dispositivo non è legato all'account.",
			"E20508": 					"Il numero di account legati ha raggiunto il limite massimo.",
			"E20509": 					"Gli account utente non hanno il diritto di legare nuovi utenti.",
			"E20571": 					"Questo dispositivo è offline.",
			"E20580": 					"Operazione fallita. Questo account non è legato al dispositivo.",
			"E20600": 					"Questa email non è registrata.",
			"E20601": 					"Username o password non corretta.",
			"E20602": 					"Questo account non è ancora attivato.",
			"E20603": 					"Questa email è già registrata.",
			"E20604": 					"Username non valida. Immettete un indirizzo email o un numero di telefono.",
			"E20606": 					"Non è possibile inviare la email per l'attivazione dell'account.",
			"E20615": 					"Password non valida. Immettete fra 6 e 32 caratteri ASCII senza spazi.",
			"E20616": 					"Password non valida. Immettete fra 6 e 32 caratteri ASCII senza spazi.",
			"E20617": 					"Questo account non esiste.",
			"E20618": 					"Questo account non esiste.",
			"E20620": 					"Nickname non valido. Immettete fra 1 e 64 caratteri.",
			"E20661": 					"Questo account verrà bloccato per 2 ore a causa dei troppi tentativi di login (20 volte in mezz'ora).",
			"E20662": 					"Il dispositivo è bloccato. Nelle prossime 24 ore, il dispositivo non risponderà a nessuna richiesta di verifica codice.",
			"E20671": 					"Non è possibile verificare l'account.",
			"E20672": 					"Non è possibile verificare l'account. Il link per l'attivazione dell'account è scaduto. Fate una nuova richiesta.",
			"E20673": 					"Il link per resettare la password è scaduto. Fate una nuova richiesta.",
			"E20674": 					"Non è possibile resettare la password.",
			"E20675": 					"Questo account è attualmente loggato altrove.",
			"E22000": 					"Immissione non valida.",
			"E22001": 					"Nome dominio già registrato.",
			"E22002": 					"Il numero dei nomi dominio registrati ha raggiunto il limite massimo.",
			"E22003": 					"Il numero dei nomi dominio legati ha raggiunto il limite massimo.",
			"E22004": 					"Questo nome dominio è già legato ad un altro dispositivo.",
			"E22006": 					"Errore di sistema. Riprovate in un secondo momento.",
			"E22007": 					"Nome dominio contiene parole sensibili. Provatene un altro.",
			"E22008": 					"Nome dominio non esiste.",

			"E50101": 					"La porta WAN è scollegata.",
			"E50102": 					"Non è possibile connettersi a Internet. Contattate il vostro service provider o riprovate in un secondo momento.",
			"E50103": 					"Non è possibile ottenere un indirizzo IP dal Server DHCP. Verificate il tipo di connessione WAN o riprovate in un secondo momento. ",
			"E50111": 					"Autenticazione PPPoE fallita. Verificate le vostre username e password.",
			"E50112": 					"Non è possibile collegarsi al server PPPoE.",
			"E50121": 					"Autenticazione PPTP fallita. Verificate le vostre username e password.",
			"E50122": 					"Non è possibile collegarsi al server PPTP.",
			"E50131": 					"Autenticazione L2TP fallita. Verificate le vostre username e password.",
			"E50132": 					"Non è possibile collegarsi al server L2TP.",
			"E50140": 					"Errore sconosciuto. Riprovate in un secondo momento.",
			"E51215": 					"Richiesta scaduta. Verificate la vostra connessione Internet e riprovate in un secondo momento.",
			"E_CLOUD_SERVER": 			"Errore server. Riprovate in un secondo momento.",
			"E5000": 					"Non abilitato a connettersi al server cloud.",
			"E5001": 					"TP-Link ID (email) non corretto, oppure il vostro dispositivo è offline e solo admin (%email) ha accesso offline.",
			"E5002": 					"Password non corretta."
		},

		MENU: {
			STATUS: 					"Stato",
			NETWORK: 					"Rete",
			NETWORK_MAP: 				"Mappa di rete",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"Server DHCP",
			DYNAMIC_DNS: 				"DNS dinamico",
			ADVANCED_ROUTING: 			"Routing avanzato",

			WIRELESS: 					"Wireless",
			WIRELESS_SETTINGS: 			"Impostazioni wireless",
			WDSBRIDGING: 				"Bridging WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"Filtro MAC",
			WIRE_STATISTICS: 			"Statistiche",
			
			
			GUEST_NETWORK: 				"Rete Ospiti",
			WIRELESS_SETTINGS: 			"Impostazioni wireless",
			STORAGE_SHARING: 			"Condivisione storage",
			NAT_FORWARDING: 			"NAT Forwarding",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Server Virtuali",
			PORT_TRIGGERING: 			"Port Triggering",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Impostazioni USB",
			BASIC_SET: 					"Impostazioni di base",
			DISK_SET: 					"Impostazioni dispositivo",
			FOLDER_SHARING: 			"Condivisione Accesso",
			STORAGE_SHARING: 			"Condivisione storage",
			FTP_SERVER: 				"Server FTP",
			MEDIA_SERVER: 				"Server Multimediale",
			PRINT_SERVER: 				"Server di stampa",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Parental Control",
			
			QOS:  						"QoS",
			DATABASE:  					"Database",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Mappa",
			SB_MAP: 					"Mappa",
			SB_BANDWIDTH:  				"Larghezza banda",
			SB_PRIORITY: 				"Priorità",
			SB_STATISTICS: 				"Statistiche",

			
			SECURITY: 					"Sicurezza",
			SETTINGS: 					"Impostazioni",
			ACCESS_CONTROL: 			"Controllo Accesso",
			IP_MAC_BINDING: 			"Binding IP e MAC",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Strumenti di sistema",
			TIME_SETTINGS: 				"Impostazione data/ora",
			DIAGNOSTIC: 				"Diagnostica",
			FIRMWARE_UPGRADE: 			"Aggiornamento Firmware",
			BACKUP_RESTORE: 			"Ripristino e backup",
			ADMINISTRATION: 			"Amministrazione",
			SYSTEM_LOG: 				"Log di sistema",
			STATISTICS: 				"Statistiche di traffico",
			SYSTEM_PARAMETERS: 			"Parametri di sistema",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"Server VPN",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"Connessioni VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Regione e fuso orario",
			INTERNET_CONNECTION_TYPE: 	"Tipo di connessione Internet",
			WIRELESS_SETTINGS: 			"Impostazioni wireless",
			SUMMARY: 					"Sommario",
			SETUP_COMPLETE: 			"Test Connessione Internet",
			SETUP_COMPLETE_CLOUD: 			"Servizio TP-Link Cloud",

			EXIT: 						"Esci",
			NEXT: 						"Avanti",
			SAVE: 						"Salva",
			FINISH: 					"Fine",
			OK: 						"OK",
			NONE: 						"Rilevazione fallita.",

			REGION: 					"Regione",
			TIME_ZONE: 					"Fuso orario",

			AUTO_DETECT: 				"Rilevamento automatico",
			DYNAMIC_IP: 				"IP dinamico",
			STATIC_IP: 					"IP statico",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Se non siete sicuri di conoscere il Tipo di connessione Internet, utilizzate la funzione Rilevamento automatico o contattate il vostro ISP per assistenza. ",

			DYNAMIC_IP_INFO: 			"Se l'ISP consente solo l'accesso Internet a un indirizzo MAC specifico, dovere clonare l'indirizzo MAC per consentire l'accesso ad altri dispositivi. Se non siete sicuri, selezionate NON clonare indirizzo MAC.",
			MAC_CLONE_NO: 				"NON clonare indirizzo MAC",
			MAC_CLONE_YES: 				"Clona indirizzo MAC computer corrente",
			MAC_CLONE_NOTE: 			"Se selezionate Clona indirizzo MAC, assicuratevi che l'indirizzo MAC del computer sia stato registrato con l'ISP prima di fare clic su Avanti.",

			PPPOE_INFO: 				"immettete Username e password PPPoE.",
			
			STATIC_IP_INFO: 			"immettete le informazioni IP.",

			L2TP_INFO: 					"immettete Username e password L2TP.",
			PPTP_INFO: 					"immettete Username e password PPTP.",
			
			USERNAME: 					"Nome utente",
			PASSWORD: 					"Password",
			SERVER_IP_ADDRESS_NAME: 	"VPN Server IP/Nome Dominio",
			IP_ADDRESS: 				"Indirizzo IP",
			SUBNET_MASK: 				"Subnet mask",
			DEFAULT_GATEWAY: 			"Gateway predefinito",
			PRIMARY_DNS: 				"DNS primario",
			SECOND_DNS: 				"DNS secondario",
			OPTIONAL: 					"(facoltativo)",
			
			ON: 						"Attivo",
			OFF: 						"Disattivo",
			WIRELESS_24GHZ: 			"Wireless 2.4GHz",
			WIRELESS_5GHZ: 				"Wireless 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Abilita wireless",
			NAME_SSID: 					"Nome di rete wireless (SSID)",

			SUMMARY_INFO1: 				"Ricollegate i dispositivi wireless alla nuova rete wireless prima di fare clic sul pulsante <strong>Avanti</strong>.",
			SUMMARY_INFO2: 				"I tuoi nome wireless e password sono stati modificati:",
			SUMMARY_INFO3: 				"Assicuratevi di essere connessi alla nuova rete wireless.",

			WIRELESS_24GHZ_SSID: 		"Nome rete wireless 2.4GHz (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Password rete wireless 2.4GHz",
			WIRELESS_5GHZ_SSID: 		"Nome rete wireless 5GHz (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Password rete wireless 5GHz",

			SORRY: 						"Operazione non riuscita.",
			SUCCESS: 					"Successo!",
			TEST_INTERNET_SUCCESS_INFO: "Fate clic su Fine per terminare il processo di impostazione rapida.",

			TEST_INTERNET_FAILED_INFO_0:"Verificate che tutti i parametri del Quick Setup siano corretti e riprovate. Se tutti i parametri del Quick Setup, riavviate il modem, attendete 2 minuti, quindi rifate clic su Prova connessione Internet. Se non utilizzate un modem, contattate il vostro ISP per assistenza.",
			TEST_INTERNET_FAILED_INFO_1: "Oops... La connessione Internet non è stata impostata con successo.<br />1. Assicuratevi che tutti i cavi siano connessi correttamente.<br />2. Fate clic su Indietro e verificate che le informazioni relative alla connessione Internet siano corrette.<br />3. Se il problema persiste, contattate il Supporto Tecnico TP-Link.",
			SUMMARY_INFO4: 				"E' stato rilevato che non avete riconnesso il dispositivo wireless alla nuova rete wireless. Fatelo e fate clic su <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Congratulazioni!",
			COMPLETE_INFO_0: 			"Avete completato il processo di Quick Setup.",
			COMPLETE_INFO_1:			"Fate clic su Prova connessione Internet, quindi fate clic su Fine. ",
			COMPLETE_INFO_2: 			"Non siete loggati al vostro account TP-Link Cloud. Potete fare login in un secondo momento da Base > TP-Link Cloud.",
			TEST_INTERNET: 				"Test Connessione Internet",

			
			RESET_USER_TITLE: 			"Impostate nuovi username e password",
			NEW_USERNAME: 				"Nuova usrname",
			NEW_PASSWORD: 				"Nuova Password",
			CONFIRM_PASSWORD: 			"Confermate la nuova password",
			
			NO_ACCOUNT: 				"Nessun TP-Link ID?",
			REGISTER_NOW: 				"Registrate Adesso",
			REGISTER_SKIP: 				"Fate login in un secondo momento",
			LOGIN: 						"Login",
			REGISTER_NEW:				"Registrate un nuovo account",
			COMPLETE_INFO_EMAIL_PREFIX: "Il vostro TP-Link ID è:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Vi consigliamo di fare login usando questo account per una facile gestione del vostro dispositivo e delle ulteriori funzioni TP-Link Cloud.",

			INTERNET_OK: 				"Congratulazioni! Avete impostato la rete con successo. Potete navigare in Internet.",
			CLOUD_WIZARD: 				"Per maggiori funzioni TP-Link Cloud, fate login con il vostro <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "Con un TP-Link ID, potete:", 
			ACCOUNT_DESP_SUB1:          "Accedere ai vostri dispositivi e server locali (FTP, HTTP, etc.) tramite Internet dovunque voi siate",
			ACCOUNT_DESP_SUB2:          "Tenere sempre aggiornato il vostro firmware con la funzione Aggiornamento Online",
	        ACCOUNT_DESP_SUB3:          "Gestire più dispositivi con un solo account",
			
			CONFIRM: 					"Conferma"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Stato Internet",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Tipo di connessione",
			SECONDARY_CONN: 			"Connessione secondaria",

			POOR_CONNECTED: 			"Connessione scadente",
			UNPLUGGED: 					"La porta WAN è scollegata.",
			
			CONNECTED: 					"Connesso",
			DISCONNECTED: 				"Disconnesso",

			INTERNET_IP_ADDR: 			"Indirizzo IP",
			
			IP_ADDR: 					"Indirizzo IP",
			MAC_ADDR: 					"Indirizzo MAC",
			GATEWAY: 					"Gateway",

			AUTO: 						"Automatica",
			
			ROUTER: 					"Router",
			WIRELESS_CLIENTS: 			"Client wireless",
			HOST_CLIENTS: 				"Client wireless",
			GUEST_CLIENTS: 				"Client ospiti",
			WIRE_CLIENTS: 				"Client cablati",
			PRINTER: 					"Stampante",
			USB_DISK: 					"Disco USB",
			WIRELESS: 					"Wireless",
			NAME: 						"Nome",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Canale",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Wireless 2.4GHz",
			WIRELESS_5GHZ: 				"Wireless 5GHz",
			
			GUEST_24GHZ: 				"Rete Ospiti 2.4GHz",
			GUEST_5GHZ: 				"Rete Ospiti 5GHz",
			
			STATUS: 					"Stato",
			TOTAL: 						"Totale",
			AVAILABLE: 					"Disponibile",
			GB: 						"GB",
			BRAND: 						"Marca",

			DYNAMIC_IP: 				"IP dinamico",
			STATIC_IP: 					"IP statico",
			SUBNET_MASK: 				"Subnet mask",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"cavo BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"tunnel 6to4",
			NONE: 						"Nessuno"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Rilevamento automatico",
			INTERNET_CONN_TYPE: 		"Tipo di connessione Internet",
			DYNAMIC_IP: 				"IP dinamico",
			STATIC_IP: 					"IP statico",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"cavo BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"La porta WAN è scollegata.",
			NONE: 						"Nessuno",
			DETECT_FAIL: 				"Rilevamento automatico non riuscito",
			SECONDARY_CONN: 			"Connessione secondaria",

			DYNAMIC_YES: 				"NON clonare indirizzo MAC",
			DYNAMIC_NO: 				"Clona indirizzo MAC computer corrente",
			
			IP_ADDR: 					"Indirizzo IP",
			SUBNET_MASK: 				"Subnet mask",
			DEFAULT_GATEWAY: 			"Gateway predefinito",
			PRIMARY_DNS: 				"DNS primario",
			SECOND_DNS: 				"DNS secondario",
			OPTIONAL: 					"(facoltativo)",
			USER_NAME: 					"Nome utente",
			PASSWORD: 					"Password",
			SERVER_IP_ADDR_NAME: 		"VPN Server IP/Nome Dominio",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Se non siete sicuri di conoscere il Tipo di connessione Internet, utilizzate la funzione Rilevamento automatico o contattate il vostro ISP per assistenza. "
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Impostazioni wireless",
			MODE_2G: 					"Wireless 2.4GHz",
			MODE_5G: 					"Wireless 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nome di rete wireless (SSID)",
			WIRELESS_PASSWORD: 			"Password",
			ENABLE_WIRELESS: 			"Abilita wireless",
			SAVE: 						"Salva",
			ENCRYPTION_2G_NOTICE:		"La crittografia 2.4GHz è %s.",
			ENCRYPTION_5G_NOTICE:		"La crittografia 5GHz è %s.",
			ENCRYPTION_2G_NO: 			"La rete wireless 2.4GHz non è crittografata.",
			ENCRYPTION_5G_NO: 			"La rete wireless 5GHz non è crittografata.",
			ENCRYPTION_SURE: 			"Siete sicuri di volere continuare?",

			HIDE_SSID: 					"Nascondi SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Impostazioni di base",
			TITIL_NEW:					"Disco e account",
			DISK_SET:					"Impostazioni dispositivo",

			SELFLY_REMOVE:				"Rimozione sicura",
			SCANING:					"Analisi in corso...",
			SCAN_RESULT:				"Trovati %n dischi",
			
			DISKS:						"Dischi",
			USERS: 						"Account utente",
			DEVICENAME: 				"Nome dispositivo",
			VOLUMN: 					"Volume",

			USBSPACE: 					"Spazio utilizzato",
			FREESPACE: 					"Spazio libero",
			STATUS: 					"Stato",
			INACT: 						"Disattiva",
			USAGE: 						"Utilizzo",
			CAPACITY: 					"Capacità",
			OPERATION: 					"Operazione",
			
			ACC: 						"Gestione account",
			USERNAME: 					"Nome utente",
			PASSWORD: 					"Password",
			USE_LOGIN: 					"Utilizza utente Login ",
			SCAN: 						"Scansiona",
			ENJECT_ALL: 				"Espelli tutti",
			ENJECT: 					"Espelli",
			ADD_USER: 					"Aggiungi utente",
			AUTH: 						"Autorità",


			LOCATION: 					"Luogo",
			MOBILE_ISP: 				"ISP mobile",
			DIAL_NUMBER: 				"Componi numero",
			APN: 						"APN",
			USERNAME: 					"Nome utente",
			PASSWORD: 					"Password",
			MTU_SIZE: 					"Dimensione MTU (in byte)",
			OPTIONAL: 					"(facoltativo)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Parental Control",

			DEVICE_CTR: 				"Dispositivi sottoposti al Parental Control",
			ID: 						"ID",
			DEVICE: 					"Nome dispositivo",
			MAC_ADDRESS: 				"Indirizzo MAC",
			TIME: 						"Tempo d'accesso a Internet",
			DESCRIPTION: 				"Descrizione",
			ENABLE: 					"Abilita",
			ENABLE_THIS_ENTRY: 			"Abilita",
			OPTIONAL: 					"(facoltativo)",
			BTN_VIEW: 					"Visualizza dispositivi esistenti",
			ACCESS_DEVICES_LIST: 		"Elenco dispositivi",
			OPT: 						"Operazione",
			STATUS: 					"Stato"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Rete Ospiti",
			MODE_2G: 					"Wireless 2.4GHz",
			MODE_5G: 					"Wireless 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nome di rete wireless (SSID)",
			WIRELESS_PASSWORD: 			"Password",
			ENABLE_WIRELESS: 			"Abilita Rete Ospiti",
			SAVE:						"Salva",
			HIDE_SSID: 					"Nascondi SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Account Cloud",
			OFFLINE_NOTE_TITLE: 		"Dispositivo Offline",
			LOGIN_NOTE_TITLE: 			"Oops...",
			LOGIN_OFFLINE_NOTE: 		"Il dispositivo è offline. Verificate la WAN e la configurazione di rete per assicurarvi che siano state immesse le impostazioni appropriate.",

			EMAIL: 						"Email",
			PASSWORD: 					"Password",
			FORGET_PASSWORD: 			"Password dimenticata?",

			CLOUD_WIZARD: 				"Per maggiori funzioni TP-Link Cloud, fate login con il vostro <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"Nessun TP-Link ID?",
			REGISTER_NOW: 				"Registrate Adesso"
		},
		STATUS: {
			TITLE: 						"Stato",
			INTERNET:					"Internet",
			WIRELESS:					"Wireless",
			LAN:						"LAN",
			USB_TITLE:					"Dispositivi USB",
			PERFORMANCE: 				"Prestazioni",
			GUEST_NETWORK: 				"Rete Ospiti",
			ACCESS_DEVICES: 			"Dispositivi di Accesso",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Tipo di connessione",

			MAC_ADDRESS: 				"Indirizzo MAC",
			IP_ADDRESS: 				"Indirizzo IP",
			RELEASE: 					"Rilascia",
			RENEW: 						"Rinnova",
			
			DYNAMIC_IP: 				"IP dinamico",
			STATIC_IP: 					"IP statico",
			SUBNET_MASK: 				"Subnet mask",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"cavo BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"tunnel 6to4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass-Through (bridge)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Nessuno",
			
			DEFAULT_GATEWAY: 			"Gateway predefinito",
			DNS: 						"Server DNS",
			MAC: 						"Indirizzo MAC",
			WDS_STATUS: 				"Stato WDS",
			
			IPV6_ADDRESS: 				"Indirizzo IP",
			PRIMARY_DNS: 				"DNS primario",
			SECOND_DNS: 				"DNS secondario",

			RADIO: 						"Wireless",

			NAME_SSID: 					"Nome (SSID)",
			NETWORK_NAME_SSID:			"Nome di rete wireless (SSID)",
			HIDE_SSID: 					"Nascondi SSID",
			MODE: 						"Modalità",
			CHANNEL: 					"Canale",
			CHANNEL_WIDTH: 				"Ampiezza Canale",
			AUTO: 						"Automatica",
			CURRENT_CHANNEL: 			"Canale corrente",

			WDS: 						"Stato WDS",
			WIRED_CLIENTS: 				"Client cablati",
			WIRELESS_CLIENTS: 			"Client wireless",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Indirizzo locale del collegamento",
			ASSIGN_TYPE: 				"Tipo assegnato",

			ALLOW_TO_SEE_EACH: 			"Consenti agli ospiti di vedersi fra loro",

			TOTAL: 						"Totale:",
			AVAILABLE: 					"Disponibile:",

			USB: 						"Disco USB",
			PRINTER: 					"Stampante",

			CPU_LOAD: 					"Carico CPU",
			MEMORY_USAGE: 				"Utilizzo memoria",

			IP_ADDR_P: 					"Indirizzo IP:",
			MAC_ADDR_P: 				"Indirizzo MAC:",
			CONN_TYPE_P: 				"Tipo di connessione:",

			DISABLED: 					"Disabilitato",
			INIT: 						"Iniz.",
			SCAN: 						"Scansiona",
			AUTH: 						"Autent.",
			ASSOC: 						"Associa",
			RUN: 						"Esegui",
			HOST: 						"Host",
			GUEST: 						"Ospiti",

			ON: 						"Attivo",
			OFF: 						"Disattivo"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Tipo di connessione Internet",
			INTERNET_MAC_ADDRESS: 		"Indirizzo MAC",
			
			CONNECT: 					"Connetti",
			DISCONNECT: 				"Disconnetti",
			
			IP_ADDR: 					"Indirizzo IP",
			
			USE_DEFAULT_MAC: 			"Utilizza indirizzo MAC predefinito",
			USE_COMPUTER_MAC: 			"Utilizza indirizzo MAC computer corrente",
			USE_CUSTOM_MAC: 			"Utilizza indirizzo MAC personalizzato",
			MAC_CLONE: 					"Clona MAC",
			
			CONFIG: 					"Config.",
			
			IP_ADDRESS: 				"Indirizzo IP",
			SUBNET_MASK: 				"Subnet mask",
			DEFAULT_GATEWAY: 			"Gateway predefinito",
			
			MANUAL_DNS: 				"DNS manuale",
			PRIMARY_DNS: 				"DNS primario",
			SECOND_DNS: 				"DNS secondario",
			
			RENEW: 						"Rinnova",
			RELEASE: 					"Rilascia",
			VIEW_MODE: 					"Modalità di visualizzazione",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Ottieni dinamicamente dall'ISP",
			USE_FOLLOW_IP_ADDR: 		"Utilizza il seguente indirizzo IP",
			USE_FOLLOW_DNS_ADDR: 		"Utilizza i seguenti indirizzi DNS",
			USE_FOLLOW_DNS_SERVER: 		"Utilizza il seguente server DNS",
			
			BASIC: 						"Base",
			ADVANCED: 					"Avanzata",
			
			DNS_ADDR_MODE: 				"Indirizzo DNS",
			MTU_SIZE: 					"Dimensione MTU",
			MTU_1500: 					"byte. (la dimensione predefinita è 1500, non cambiatela se non è necessario).",
			MTU_1480: 					"byte. (la dimensione predefinita è 1480, non cambiatela se non è necessario).",
			MTU_1460: 					"byte. (la dimensione predefinita è 1460, non cambiatela se non è necessario).",
			MTU_1420: 					"byte. (la dimensione predefinita è 1420, non cambiatela se non è necessario).",
			
			HOST_NAME: 					"Nome host",

			HOST_NAME_CONFIRM: 			"Il nome host contiene caratteri non validi che possono causare un comportamento imprevisto del sistema. Siete sicuri di volere continuare?",

			GET_IP_WITH_UNICAST_DHCP: 	"Ottenete l'IP utilizzando Unicast DHCP (solitamente non è necessario).",
			OPTIONAL: 					"(facoltativo)",
			
			STATIC_IP: 					"IP statico",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Nome utente",
			PASSWORD: 					"Password",
			
			INTERNET_IP_ADDR: 			"Indirizzo IP",
			INTERNET_DNS: 				"DNS di Internet",
			SECONDARY_CONN: 			"Connessione secondaria",
			NONE: 						"Nessuno",
			INTERNET_PRIMARY_DNS:		"DNS primario",
			INTERNET_SECONDARY_DNS: 	"DNS secondario",
			
			DYNAMIC_IP: 				"IP dinamico",
			DYNAMIC_IP_v6: 				"IP Dinamico (SLAAC/DHCPv6)",
			STATIC_IP: 					"IP statico",
			SERVICE_NAME: 				"Nome servizio",
			ACCESS_CONCENTRATOR_NAME:  	"Nome Concentratore di Accesso",
			DETECT_ONLINE_INTERVAL: 	"Rileva intervallo online",
			INTERVAL_TIPS: 				"secondi. (0-120. L'impostazione predefinita è 10).",
			IP_ADDR_MODE:  				"Indirizzo IP",
			CONN_MODE: 					"Modalità di connessione",
			DHCP_LINK_UNPLUGGED: 		"La porta WAN è scollegata.",
			
			AUTO: 						"Automatica",
			ON_DEMAND: 					"Su richiesta",
			TIME_BASED: 				"Basata sul tempo",
			MANUALLY: 					"Manuale",
			MAX_IDLE_TIME: 				"Tempo massimo di inattività ",
			MAX_IDLE_TIME_TIPS: 		"minuti (0 significa sempre attivo).",
			PERIOD_OF_TIME: 			"Periodo di tempo",
			TIME_TIPS: 					"(HH.MM)",
			BIGPOND_CABLE: 				"cavo BigPond",
			AUTH_SERVER: 				"Server  di autentic.",
			AUTH_DOMAIN: 				"Dominio di autentic.",
			L2TP: 						"L2TP",
			GATEWAY: 					"Gateway",
			SERVER_IP_ADDR_NAME: 		"VPN Server IP/Nome Dominio",
			PPTP: 						"PPTP",
			TO: 						"a",
			
			TUNNEL_6TO4: 				"tunnel 6to4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Ottieni indirizzo IPv6 non temporaneo",
			GET_PREFIX_DELEGATION: 		"Otteni delega di prefisso IPv6",
			IPV6_ADDR: 					"Indirizzo IPv6",

			GET_IPV6_WAY: 				"Ottieni indirizzo IPv6",
			AUTOMATICALLY: 				"Ottieni automaticamente",
			SPECIFIED_BY_ISP: 			"Specificato dall'ISP",

			IPV6_ADDR_PREFIX: 			"Prefisso indirizzo IPv6",
			NONE_TEMPORARY: 			"Non temporaneo",

			PREFIX_DELEGATION: 			"Delega di prefisso",
			ENABLE: 					"Abilita",
			DISABLE: 					"Disabilita",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Lunghezza maschera IPv4",
			CONFIG_TYPE: 				"Tipo di configurazione",
			RD6_PREFIX: 				"Prefisso 6RD",
			RD6_PREFIX_LENGTH: 			"Lunghezza prefisso 6RD",
			REPLY_IPV4_ADDR: 			"Indirizzo IPv4 border relay",
			MANUAL: 					"Manuale",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass-Through (bridge)",
			LOCAL_IPV6: 				"Indirizzo IPv6 locale",
			PEER_IPV6: 					"Indirizzo IPv6 peer",
			TUNNEL_ADDR: 				"Indirizzo tunnel",
			IPV4_NETMASK: 				"Netmask IPv4",
			CUSTOM: 					"Personalizzato",
		    AFTR_NAME: 					"Nome AFTR",
			PPP_SHARE_V6:				"PPPoE stessa sessione con connessione IPv4",
			PPP_SHARE_V4:				"PPPoE stessa sessione con connessione IPv6",

			
			
			IPV4_ADDR: 					"Indirizzo IPv4",
			IPV4_MASK: 					"Subnet Mask IPv4",
			IPV4_GATEWAY: 				"Gateway predefinito IPv4",
			TUNNEL_ADDR: 				"Indirizzo tunnel",

			DUPLEX: 					"Duplex",
			AUTO_NEGOTIATION: 			"Negoziazione automatica",
			FULL_DUPLEX_1000: 			"Full duplex 1000 Mbps",
			HALF_DUPLEX_1000:			"Half duplex 1000 Mbps",
			FULL_DUPLEX_100: 			"Full duplex 100 Mbps",
			HALF_DUPLEX_100: 			"Half duplex 100 Mbps",
			FULL_DUPLEX_10: 			"Full duplex 10 Mbps",
			HALF_DUPLEX_10: 			"Half duplex 10 Mbps"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"Indirizzo MAC",
			IP_ADDRESS: 				"Indirizzo IP",
			SUBNET_MASK: 				"Subnet mask",
			CUSTOM: 					"Personalizzato",

			IGMP: 						"Abilita proxy IGMP",
			

			ASSIGNED_TYPE: 				"Tipo assegnato",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC + Stateless DHCP",
			RDNSS: 						"SLAAC + RDNSS",

			PREFIX: 					"Prefisso indirizzo",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Indirizzo",
			DELEFATED: 					"Delegato",
			STATIC: 					"Statico",
			SITE_PREFIX: 				"Prefisso sito",
			SITE_PREFIX_LEN: 			"Lunghezza prefisso sito",

			PREFIX_TYPE:  				"Tipo di configurazione prefisso sito",
			LAN_IPV6_ADDR:  			"Indirizzo IPV6 LAN",

			RELEASE_TIME: 				"Durata rilascio",
			RELEASE_TIME_TIP: 			"secondi. (la dimensione predefinita è 86400, non cambiatela se non è necessario).",
			ADDRESS:					"Indirizzo",
			SAVE: 						"Salva",

			REBOOT_TIP: 				"Il router sta passando alla nuova pagina di accesso. <br/> Attendete..."

		},

		IPTV:{
			TITLE: 						"Impostazioni",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Abilita IPTV", 
			MODE:  						"Modalità",
			IGMP_PROXY: 				"Proxy IGMP",
			IGMP_VERSION: 				"Versione IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Bridge",
			BASIC: 						"Personalizzato",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Singapore-ExStream",
			UNIFY:  					"Malaysia-Unifi",
			MAXIS:  					"Malaysia-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internet",
			IP_PHONE: 					"Telefono IP", 

			Q_TAG: 						"Tag 802.1Q",
			ENABLE: 					"Abilita",
			
			INTERNET_VLAN_ID: 			"ID VLAN Internet",
			INTERNET_VLAN_PRIORITY: 	"Priorità VLAN Internet",
			IP_PHONE_VLAN_ID: 			"ID VLAN ID telefono IP",
			IP_PHONE_VLAN_PRIORITY: 	"Priorità VLAN telefono IP",
			IPTV_VLAN_ID: 				"ID VLAN IPTV",
			IPTV_VLAN_PRIORITY: 		"Priorità VLAN IPTV",
			IPTV_MULTI_VLAN_ID: 		"ID VLAN multicast IPTV",
			IPTV_MULTI_VLAN_PRIORITY: 	"Priorità VLAN multicast IPTV"
		},

		DHCP_SERVER: {
			TITLE: 						"Server DHCP",
			
			SETTINGS: 					"Impostazioni",

			DHCP_SERVER: 				"Server DHCP",
			ENABLE_DHCP_SERVER: 		"Abilita server DHCP",

			IP_ADDR_POOL: 				"Pool di indirizzi IP",
			LEASETIME: 					"Durata lease indirizzo",
			LEASENOTE: 					"minuti. (1-2880. Il valore predefinito è 120).",
			
			GATEWAY: 					"Gateway predefinito",
			DOMAIN: 					"Dominio predefinito",
			PRIMARYDNS: 				"DNS primario",
			SECONDARYDNS: 				"DNS secondario",

			OPTIONAL: 					"(facoltativo)",

			CLIENTSLIST: 				"Elenco client DHCP",
			CLIENT_NUMBER: 				"Numero cliente",
			CLIENT_NAME: 				"Nome client",
			MAC_ADDR: 					"Indirizzo MAC",
			ASSIGNED_IP: 				"Indirizzo IP assegnato",
			LEASE_TIME: 				"Durata lease",

			RESERVATION: 				"Riserva Indirizzi",

			RESERVED_IP: 				"Indirizzo IP riservato",
			IP_ADDRESS: 				"Indirizzo IP",
			DESCRIPTION: 				"Descrizione",

			CLIENTSLIST: 				"Elenco client DHCP",
			CLIENT_NUMBER: 				"Numero cliente",

			ENABLE: 					"Abilita",
			ENABLE_THIS_ENTRY: 			"Abilita"
			
		},

		DDNS: {
			DDNS: 						"DNS dinamico",
			SERVICEPROVIDER: 			"Service Provider",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Vai alla registrazione...",
			USERNAME: 					"Nome utente",
			PASSWORD: 					"Password",
			DOMAIN_NAME_LIST: 			"Elenco Nomi Dominio",
			DOMAIN_NAME: 				"Nome Dominio",
			LOGIN: 						"Login",
			LOGIN_SAVE: 				"Login e Salva", 
			LOGOUT: 					"Logout",
			STATU_SUCCESS:				"Successo!",
			UPDATE_INTERVAL:			"Intervallo di aggiornamento",
			ONE_HOUR:					"1 ora",
			SIX_HOUR:					"6 ore",
			TWETEEN_HOUR:				"12 ore",
			ONE_DAY:					"1 giorno",
			TWO_DAY:					"2 giorni",
			THREE_DAY:					"3 giorni",
			NEVER:						"Mai",
			UPDATE:						"Aggiorna",
			STATU_INCORRENT:			"Username o password non corretta.",
			STATU_ERR_DOMAIN:			"Errore nome dominio",
			WAN_IP_BIND: 				"WAN IP binding",
			CURRENT_DOMAIN: 			"Nome Dominio corrente",
			REGISTER: 					"Registra",
			BIND: 						"Legato",
			UNBIND: 					"Slegare",
			TITLE: 						"DDNS non disponibile",
			CONTENT: 					"Per usare il performante servizio DDNS di TP-Link, <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">fate login</a> con il vostro TP-Link ID, altrimenti scegliete un altro service provider.",
			STATU_NO_LAUNCH:			"Nessun avvio",
			STATU_FAIL_DDNS: 			"Aggiornamento DDNS fallito.",
			STATU_FAIL_NOIP: 			"Aggiornamento NO-IP fallito.",
			DISABLE: 					"Disabilita",
			ENABLE: 					"Abilita",	
			STATU_NO_LAUNCH:			"Aggiornamento DDNS fallito.",
			STATU_CONN:					"Connessione in corso",
			WAN_IP_BIND: 				"WAN IP binding",
			TIME: 						"Data Registrazione",
			BOUND: 						"Associato",
			FREE: 						"Libero",
			SORRY: 						"Operazione non riuscita.",
			UNBIND_NOTE:          		"Se volete legare %domain% al vostro dispositivo, prima slegate il nome dominio corrente."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Routing avanzato",
			STATIC_ROUTING: 			"Routing statico",

			DESTINATION_NETWORK:		"Destinazione rete",
			SUBNET_MASK: 				"Subnet mask",
			DEFAULT_GATEWAY: 			"Gateway predefinito",
			DESCRIPTION: 				"Descrizione",
			
			SYSTEM_ROUTING_TABLE: 		"Tabella di routing del sistema",
			CLIENT_NUMBER: 				"Numeri di route attivi",

			GATEWAY: 					"Gateway",
			INTERFACE: 					"Interfaccia",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Abilita",
			ENABLE_THIS_ENTRY: 			"Abilita"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Impostazioni",
			NOT_SUPPORT_5G: 			"La regione supporta solo 2.4GHz. Assicuratevi di selezionare la regione corretta.",

			REGION: 					"Regione",
			NOTICE:  					"Per utilizzare la funzione wireless, il dispositivo wireless deve essere acceso.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Impostazioni wireless",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Abilita wireless",

			WIRELESS_NETWORK_NAME: 		"Nome di rete wireless (SSID)",
			WIRELESS_PASSWORD: 			"Password",
			HIDE_SSID: 					"Nascondi SSID",

			SECURITY: 					"Sicurezza",
			NO_SECURITY: 				"Nessuna sicurezza",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal (scelta consigliata)",
			WPA_WPA2_ENTERPRISE: 		"WPA / WPA2-Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Versione",

			AUTO: 						"Automatica",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Crittografia",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Modalità",
			MODE_B:  					"Solo 802.11b",
			MODE_G:  					"Solo 802.11g",
			MODE_N:  					"Solo 802.11n",
			MODE_BG:  					"802.11b/g mista",
			MODE_GN: 					"802.11g/n mista",
			MODE_BGN:  					"802.11b/g/n mista ",

			MODE_A_5: 					"Solo 802.11a",
			MODE_AN_5: 					"802.11a/n mista",
			MODE_N_5: 					"Solo 802.11n",
			MODE_AC_5:					"Solo 802.11ac",
			MODE_NAC_5:					"802.11n/ac mista",
			MODE_ANAC_5:				"802.11a/n/ac mista",


			CHANNEL_WIDTH: 				"Ampiezza Canale",
			CHANNEL: 					"Canale",

			TRANSMIT_POWER: 			"Potenza di trasmissione",

			RADIUS_SERVER_IP: 			"IP server RADIUS",
			RADIUS_PORT: 				"Porta RADIUS",
			RADIUS_PASSWORD: 			"Password RADIUS",

			TYPE: 						"Tipo",
			OPEN_SYSTEM: 				"Sistema aperto",
			SHARED_KEY: 				"Chiave condivisa",

			KEY_SELECTED: 				"Chiave selezionata",
			KEY1: 						"Chiave 1",
			KEY2: 						"Chiave 2",
			KEY3: 						"Chiave 3",
			KEY4: 						"Chiave 4",

			WEP_KEY_FORMAT: 			"Formato chiave WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Esadecimale",

			KEY_TYPE: 					"Tipo di chiave",
			BIT64: 						"64 bit",
			BIT128: 					"128 bit",
			BIT152: 					"152 bit",

			KEY_VALUE: 					"Valore chiave",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Basso",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto"
		},

		WPS: {

			TITLE2: 					"PIN del router",
			ROUTERS_PIN_INFO: 			"Altri dispositivi possono connettersi a questo router tramite WPS con il PIN del router.",
			ENABLE_ROUTE_PIN: 			"PIN del router",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Genera",
			DFT: 						"Default",

			TITLE: 						"Procedura guidata WPS",
			SELECT_SETUP: 				"Selezionate un metodo di configurazione ",
			PUSH_BTN: 					"Pulsante (consigliata)",
			PUSH_DES: 					"Premete il pulsante fisico PUSH sul router o fate clic sul comando software Connetti in questa pagina.",
			CONNECT: 					"Connetti",
			CANCEL: 					"Cancella",

			RESULT_HEAD: 				"Il client wireless",
			RESULT_END: 				"è stato aggiunto alla rete.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Non trovato",
			ENTER_CLIENT_PIN: 			"Immettete il PIN del client",
			SWITCH_NOTE:				"Per utilizzare WPS, è necessario attivare prima la funzione wireless.",
			SWITCH_NOTE2:				"Per utilizzare WPS Wizard, è necessario configurare prima i parametri wireless.",
			STATUS_PIN_ERROR: 			"PIN WPS non valido? Verificare se è corretto.",
			STATUS_ERROR: 				"Errore.",
			STATUS_CONN_ERROR: 			"Connessione non riuscita.",
			STATUS_CONNING: 			"Connessione in corso...",
			STATUS_CANCEL: 				"Connessione annullata.",
			
			NOTE: 						"Nota:",
			
			STATUS_CONN_OVERLAP: 		"connessione non riuscita (SOVRAPPOSIZIONE).",
			STATUS_CONN_TIMEOUT: 		"connessione non riuscita (TIMEOUT).",
			STATUS_CONN_INACT: 			"Connessione inattiva."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Stazioni Wireless Online",
			CLIENT_NUMBER: 				"Numero cliente",
			MAC_ADDRESS: 				"Indirizzo MAC",
			CONN_TYPE: 					"Tipo di connessione",
			SECURITY: 					"Sicurezza",
			RECEIVED_PACKETS: 			"Pacchetti ricevuti",
			SEND_PACKETS: 				"Pacchetti inviati"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Impostazioni",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Consenti agli ospiti di vedersi fra loro",
			
			ALLOW_LOCAL: 				"Consenti agli ospiti di accedere alla rete locale",
			
			WIRELESS: 					"Wireless",
			WIRELESS_24G_RADIO: 		"Wireless 2.4GHz",
			WIRELESS_5G_RADIO: 			"Wireless 5GHz",
			ENABLE_GUEST: 				"Abilita Rete Ospiti",

			NAME_SSID: 					"Nome di rete wireless (SSID)",
			HIDE_SSID: 					"Nascondi SSID",

			SECURITY: 					"Sicurezza",
			NO_SECURITY: 				"Nessuna sicurezza",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personale",

			VERSION: 					"Versione",
			AUTO: 						"Automatica",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Crittografia",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Password"
		},

		NAT:{
			SETTINGS: 					"NAT Hardware",
			STATUS: 					"NAT Hardware",
			
			ALG_TITLE: 					"Gateway di livello applicazione (ALG)",

			FTP_ALG: 					"ALG FTP",
			TFTP_ALG: 					"ALG TFTP",
			H323_ALG: 					"ALG H323",
			RTSP_ALG: 					"ALG RTSP",
			PPTP_ALG: 					"Passthrough PPTP",
			L2TP_ALG: 					"Passthrough L2TP",
			IPSEC_ALG: 					"Passthrough IPSec",

			ENABLE_FTP_ALG: 			"Abilita ALG FTP",
			ENABLE_TFTP_ALG: 			"Abilita ALG TFTP",
			ENABLE_H323_ALG: 			"Abilita ALG H323",
			ENABLE_RTSP_ALG: 			"Abilita ALG RTSP",
			ENABLE_PPTP_ALG: 			"Abilita passthrough PPTP",
			ENABLE_L2TP_ALG: 			"Abilita passthrough L2TP",
			ENABLE_IPSEC_ALG: 			"Abilita passthrough IPSec",
			NAT_ENABLE_NOTICE: 			"Nota: le configurazioni non avranno effetto se la funzione NAT non è abilitata."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Server Virtuali",

			SERVICE_NAME: 				"Tipo di servizio",
			EXTERNAL_PORT: 				"Porta esterna",
			INTERNAL_IP: 				"IP interno",
			INTERNAL_PORT: 				"Porta interna",
			PROTOCAL: 					"Protocollo",

			BTN_VIEW: 					"Visualizza i servizi esistenti",

			EXSITTING_SERVICE: 			"Servizi esistenti",
			
			PROTOCAL_ALL: 				"Tutti",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX o XX)",
			EXT_PORT_TIPS: 				"(XX o XX-XX, 1-65535)",
			INT_PORT_TIPS: 				"(XX o vuoto, 1-65535)",

			NOTICE:						"Conflitto con la porta di gestione remota. Siete sicuri di volere continuare?",

			ENABLE_THIS_ENTRY: 			"Abilita",
			OPERATION: 					"Operazione",
			CHOOSE: 					"Scegli",
			NAT_ENABLE_NOTICE: 			"Nota: le configurazioni non avranno effetto se la funzione NAT non è abilitata."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Port Triggering",
			APPLICATION: 				"Applicazione",
			TRIGGER_PORT: 				"Port Triggering",
			TRIGGER_PROTOCOL: 			"Protocollo Triggering",

			EXTERNAL_PORTS: 			"Porta esterna",
			EXTERNAL_PROTOCOL: 			"Protocollo esterno",

			BTN_VIEW: 					"Visualizza applicazioni esistenti",

			EXSITTING_APPLICATION: 		"Applicazioni esistenti",
			APPLICATION_NAME: 			"Nome applicazione",
			TRIGGER_TIPS: 				"(XX, 1-65535)",
			EXTERNAL_TIPS: 				"(XX o XX-XX, 1-65535, massimo 5 coppie)",
			
			ENABLE_THIS_ENTRY: 			"Abilita",
			OPERATION: 					"Operazione",
			
			PROTOCAL_ALL: 				"Tutti",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Nota: le configurazioni non avranno effetto se la funzione NAT non è abilitata."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Abilita DMZ",
			HARDWARESTATUS: 			"Indirizzo IP host DMZ",
			NAT_ENABLE_NOTICE: 			"Nota: le configurazioni non avranno effetto se la funzione NAT non è abilitata."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Elenco servizi UPnP",
			CLIENT_NUMBER: 				"Numero cliente",
			SERVICE: 					"Descrizione del servizio",
			EXTERNAL_PORT: 				"Porta esterna",
			PROTOCAL: 					"Protocollo",
			IP_ADDR: 					"Indirizzo IP interno",
			INTERNAL_PORT: 				"Porta interna",
			NAT_ENABLE_NOTICE: 			"Nota: le configurazioni non avranno effetto se la funzione NAT non è abilitata."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"Modem USB 3G/4G",
			LOCATION: 					"Regione",
			MOBILE_ISP: 				"ISP mobile",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Modalità di connessione",
			CONNECT_ON_DEMAND: 			"Connessione a richiesta",
			CONNECT_AUTOMATICALLY: 		"Connessione automatica",
			CONNECT_MANUALLY: 			"Connessione manuale",
			MAX_IDLE_TIME: 				"Tempo massimo di inattività ",
			CONNECTION_TIP: 			"L'Accesso a Internet corrente è WAN Preferred.",
			IDLE_TIME_TIP: 				"La modalità di connessione e il tempo massimo di inattività non possono essere impostati manualmente.",
			MINUTES: 					"minuti. (0 significa che la connessione e sempre attiva).",

			AUTHENTICATION_TYPE: 		"Tipo di autenticazione",
			AUTO: 						"Automatica",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"L'impostazione predefinita è Automatica, non cambiatela se non è necessario. ",

			CONNECT: 					"Connetti",
			DISCONNECT: 				"Disconnetti",

			SET_TIP: 					"Impostate manualmente Dial Number, APN, Username e Password.",
			DIAL_NUMBER: 				"Componi numero",
			APN: 						"APN",
			USERNAME: 					"Nome utente",
			PASSWORD: 					"Password",
			OPTIONAL: 					"(facoltativo)",
			MTU_SIZE: 					"Dimensione MTU (in byte)",
			MTU_SIZE_TIP: 				"la dimensione predefinita è 1480, non cambiatela se non è necessario",

			USE_FOLLOW_DNS_SERVER: 		"Utilizza i seguenti server DNS",
			PRIMARY_DNS: 				"DNS primario",
			SECOND_DNS: 				"DNS secondario",

			UNPLUGGED: 					"Nessun modem USB connesso",
			IDENTIFYING: 				"Identificazione in corso...",
			IDENTIFY_SUCCESS: 			"Identificazione eseguita correttamente"
		},

		DISK_SETTING: {
			DISK_SET: 					"Impostazioni dispositivo",
			SCAN: 						"Scansiona",
			SELFLY_REMOVE: 				"Rimozione sicura",
			SCAN_RESULT: 				"Trovati %n dischi",
			NOT_FOUND: 					"Non trovato",
			SELFLY_REMOVE: 				"Rimozione sicura",
			
			VOLUMN: 					"Volume",
			CAPACITY: 					"Capacità",
			FREESPACE: 					"Spazio libero",
			USBSPACE: 					"Spazio utilizzato",
			
			STATUS: 					"Stato",
			INACT: 						"Disattiva",
			ACTIVE: 					"Attivo",
			
			USAGE: 						"Utilizzo",
			CAPACITY: 					"Capacità",
			OPERATION: 					"Operazione",	
			
			ACC: 						"Gestione account", 	 	
			USERNAME: 					"Nome utente",
			PASSWORD: 					"Password",
			USE_LOGIN: 					"Utilizza utente Login ",
			SCAN: 						"Scansiona",
			ENJECT_ALL: 				"Espelli tutti",
			ENJECT: 					"Espelli",
			ADD_USER: 					"Aggiungi utente",
			AUTH: 						"Autorità"
		},

		FOLDER: {
			TITLE: 						"Impostazioni di condivisione",
			ACCOUNT_TITLE: 				"Account di condivisione",
			ACCOUNT:					"Account",
			AC_NOTE: 					"Preparate un account per la condivisione di contenuti. Potete utilizzare l'account di accesso o crearne uno nuovo.",
			
			AC_LOGIN: 					"Utilizza account predefinito",
			AC_FOLLOW: 					"Utilizza nuovo account",

			USERNAME: 					"Nome utente",
			PASSWORD: 					"Password",
			CONFIRM: 					"Conferma Password",

			SHARING_SETTING: 			"Impostazioni di condivisione",
			SERVER_NAME: 				"Nome rete/server multimediale",

			METHOD: 					"Metodo di accesso",
			LINK: 						"Collegamento",
			PORT: 						"Porta",

			NETWORK_NEIGHBORHOOD: 		"Risorse di rete",
			FTP: 						"FTP",
			FTPEX: 						"FTP (via Internet)",

			SHARE_FOLDER: 				"Condivisione cartella",
			SHAREING_ALL: 				"Condividi tutte",
			NOTE:  						"Attivate per condividere tutti i file e le cartelle o disattivate per condividere solo le cartelle selezionate.", 
			ENABLE_AUTHENTICATION: 		"Abilita autenticazione",
			SHAREING_FOLDER: 			"Cartelle di condivisione",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Percorso cartella",
			VOLUMN_NAME: 				"Nome volume",

			SHARE_NAME: 				"Nome cartella",
			FOLDER_PATH: 				"Percorso cartella",
			MEDIA_SHARING: 				"Condivisione file multimediali",
			STATUS: 					"Stato",

			GUEST_ACCESS: 				"Consenti Accesso a Rete Ospiti",
			ENABLE_AUTHENTICATION: 		"Abilita autenticazione",
			ENABLE_WRITE_ACCESS: 		"Attiva accesso in scrittura",
			ENABLE_MEDIA_SHARE: 		"Attiva condivisione file multimediali",
			
			BROWSE: 					"Sfoglia",
			BROWSE_TITLE: 				"Seleziona una cartella",

			NO_VOLUMN:					"Nessun volume",
			
			NOTICE: 					"Siete sicuri di volere uscira dalla pagina DNS Dinamico? Premete Salva per salvare e uscire. Premete Esci per uscire senza salvare. Premete Annulla per rimanere.",
			NO_CHANGE_NOTICE: 			"Siete sicuri di volere uscira dalla pagina DNS Dinamico?",

			SAVE_FAILED_NOTICE: 		"Salvataggio non riuscito",
			CONTINUE: 					"Esci",
			CONTINUE_SAVE: 				"Salva",
			CANCLE: 					"Cancella",

			ENABLE: 					"Abilita"

		},

		PRINT:{
			TITLE: 						"Server di stampa",
			NAME: 						"Nome stampante",
			ENABLE_PRINT_SERVER: 		"Server di stampa",
			NONE: 						"Nessuno",
			
			NOTE_TITLE: 				"Nota:",
			STEP1: 						"Passaggio 1:",
			STEP2: 						"Passaggio 2:",
			STEP3: 						"Passaggio 3:",

			NOTE1: 						"Installate il driver della stampante sul computer",
			NOTE2: 						"Collegate la stampante USB alla porta USB del router tramite un cavo USB.",
			NOTE3: 						"Installate TP-Link USB Printer Controller Utility. Scaricatela dal nostro sito ufficiale: <a class=\"link\" target=\"_blank\" href=\"%SUPPORT%\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Parental Control",
			STATUS: 					"Stato",
			UNKNOWN: 					"Sconosciuto",

			DEVICE_CTR: 				"Dispositivi sottoposti al Parental Control",
			DEVICE: 					"Nome dispositivo",
			MAC_ADDRESS: 				"Indirizzo MAC",
			TIME: 						"Tempo d'accesso a Internet",
			DESCRIPTION: 				"Descrizione",
			
			ENABLE_THIS_ENTRY: 			"Abilita",
			OPTIONAL: 					"(facoltativo)",
			BTN_VIEW: 					"Visualizza dispositivi esistenti",
			
			DEVICE_LIST: 				"Elenco dispositivi",
			SYSTEM_TIME: 				"Ora sistema",
			
			RESTR: 						"Restrizione sul contenuto",
			MODE: 						"Restrizione",
			BLACKMODE: 					"Black list",
			WHITEMODE: 					"White list",
			ACCESS_DEVICES_LIST: 		"Elenco dispositivi di accesso",
			
			CHOOSE: 					"Scegli",
			ADD_A_NEW_KEYWORD: 			"Aggiungi Nuova Parola Chiave",
			ADD_A_NEW_DOMAIN_NAME: 		"Aggiungi nuovo nome di dominio"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Internet",
			ROUTER: 					"Router",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Altri",

			DEVICE: 					"Dispositivo",
			RATE: 						"Tasso",
			APPLICATION: 				"Applicazione",

			NAME: 						"Nome",
			MAC_ADDRESS: 				"Indirizzo MAC",
			IP_ADDRESS: 				"Indirizzo IP",


			DEVICES: 					"Dispositivi"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Larghezza banda",
			TEST_BANDWIDTH: 			">Test larghezza di banda",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Abilita streamboost",
			UP_LIMITATION: 				"Limite superiore (Mbps)",
			DOWN_LIMITATION: 			"Limite inferiore (Mbps)",
			RUN_BANDWIDTH_TEST: 		"Esegui test larghezza d banda",
			TESTING: 					"Test in corso",
			TEST_FAILED: 				"Test non riuscito",
			TEST_SUCCEED: 				"Test riuscito",
			ENABLE_AUTOMATIC_TEST: 		"Abilita test automatico",
			KEEP_UP_TO_DATE: 			"Mantieni StreamBoost aggiornato",
			ENABLE_AUTOMATIC_UPDATE: 	"Abilita aggiornamento automatico"

		},

		PRIORITY:{
			PRIORITY: 					"Priorità",
			PRIORITY_TIPS: 				"La priorità consente di modificare l'importanza di un dispositivo rispetto a un altro. L'opzione è utile se più dispositivi sono in competizione per utilizzare una banda limitata avendo la stessa classificazione.",
			ALL_DEVICE: 				"Tutti i dispositivi",
			ACTIVE_DEVICE: 				"Dispositivo attivo",
			SAVE: 						"Salva",
			ID: 						"ID",
			DEVICE: 					"Dispositivo",
			TYPE: 						"Tipo",
			MAC_ADDRESS: 				"Indirizzo MAC",
			STICK: 						"Stick"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Statistiche",
			UP_TIME: 					"Tempo di attività",
			DOWNLOADS: 					"Download",
			LAST_DAY: 					"Ultimo giorno",
			LAST_WEEK: 					"Settimana scorsa",
			LAST_MONTH: 				"Mese scorso",
			ALL_LAN_HOSTS: 				"Tutti gli host LAN",
			OTHER: 						"Altro"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Firewall",
			ENABLE_SPI: 				"Firewall SPI",

			DOS_PROTECTION: 			"Protezione DoS",
			ENABLE_DOS: 				"Protezione DoS",
			
			OFF: 						"Disattivo",
			LOW: 						"Basso",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto",

			ICMP: 						"Filtro attacco ICMP-FLOOD",
			UDP: 						"Filtro attacco UDP-FLOOD",
			TCP: 						"Filtro attacco TCP-SYN-FLOOD",
			ENABLE_DOS_TIP:             "Le funzioni Protezione DoS e Statistiche Traffico devono essere abilitate contemporaneamente.",

			IGNORE: 					"Ignora pacchetti ping da porta WAN",
			FORBID: 					"Vieta pacchetti ping da porta LAN",

			BLOCK_DOS: 					"Elenco host DoS bloccati",
			HOST_NUMBER: 				"Numero Host",
			IP_ADDRESS: 				"Indirizzo IP",
			MAC_ADDRESS: 				"Indirizzo MAC"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Controllo Accesso",
			ENABLE_ACCESS: 				"Controllo Accesso",

			ACCESS_MODE: 				"Modalità di accesso",
			DEFAULT_ACCESS_MODE: 		"Modalità di accesso predefinito",
			BLACK_LIST: 				"Black list",
			WHITE_LIST: 				"White list",
			
			WIRED:						"Cablato",
			WIRELESS:					"Wireless",

			DEVICE_ONLINE: 				"Dispositivi online",
			NAME: 						"Nome dispositivo",
			IP_ADDRESS: 				"Indirizzo IP",
			MAC_ADDRESS: 				"Indirizzo MAC",
			CONN_TYPE: 					"Tipo di connessione",

			BLOCK: 						"Blocca",

			DEVICE_IN_WHITE: 			"Dispositivi in white list",
			DEVICE_IN_BLACK: 			"Dispositivi in black list"
		},

		IP_MAC:{
			TITLE: 						"Impostazioni",
			ENABLE_ARP: 				"Binding ARP",

			ARP_LIST: 					"Elenco ARP",
			ARP_NUM: 					"Numero voce ARP",

			MAC_ADDRESS: 				"Indirizzo MAC",
			IP_ADDRESS: 				"Indirizzo IP",
			BOUND: 						"Associato",
			UNBOUND: 					"Non associato",

			BINDING_LIST: 				"Elenco associazioni",
			DESCRIPTION: 				"Descrizione",
			OPTIONAL: 					"(facoltativo)",
			ENABLE_THIS_ENTRY: 			"Abilita"
		},

		TIMESET: {
			TITLE: 						"Impostazione data/ora",
			ZONE: 						"Fuso orario",
			DATE: 						"Data",
			DATEFORMAT: 				"GG/MM/AAAA",
			TIME: 						"Ora",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"Server NTP I",
			NTP2: 						"Server NTP II",
			OPTIONAL: 					"(facoltativo)",

			CURRENT_TIME:  				"Ora corrente",
			SET_TIME: 					"Imposta ora corrente",
			AUTOMATIC: 					"Ottieni automaticamente da Internet",
			MANUAL: 					"Manuale",
			AUTOMATIC_BTN: 				"Ottieni",


			GETGMT: 					"Ottieni GMT",

			
			GETGMT_SUCCESS: 			"Ottieni ora da server NTP - operazione riuscita",
			GETGMT_TIMEOUT: 			"Ottieni ora da server NTP - tempo scaduto",
			GETGMT_WAIT: 				"Attesa",
			
			M: 							"M",
			W: 							"W",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Ora legale",
			ENABLE_DAYLIGHT: 			"Attiva ora legale",
			START: 						"Inizio",
			END: 						"Fine",

			RUNNING_STATUS: 			"Stato esecuzione",
			DOWN: 						"Ora legale disattivata",
			UP: 						"Ora legale attiva"
		},

		DIAG:{
			TITLE: 						"Diagnostica",
			DIAGNOSTIC_TOOL: 			"Strumento di Diagnostico",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"Indirizzo IP/Nome dominio",
			COUNT: 						"Conteggio ping",
			
			BASIC: 						"Base",
			ADVANCED: 					"Avanzata",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Dimensione pacchetto ping",
			PKTUNIT: 					"(4-1472 byte)",

			TIMEOUT: 					"Timeout ping",
			TIMOUTUNIT: 				"(100-2000 millisecondi)",

			TTL: 						"TTL max. Traceroute",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Inizio",
			STOP: 						"Arresto"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Il vostro firmware è da aggiornare",
			TITLE: 						"Aggiornamento Firmware",
			INFO: 						"Informazioni Dispositivo",
			REMOTE_TITLE: 				"Aggiornamento online",
			LOCAL_TITLE: 				"Aggiornamento locale",

			NEWFILE: 					"Nuovo Firmware",
			FIRMWAREVERSION: 			"Versione Firmware",
			HARDWAREVERSION: 			"Versione hardware",
			LATESTVERSION: 				"Ultima Versione",
			CONFIRM_CONTENT:			"Volete aggiornare il firmware?",
			WARNING:					"Aggioramento firmware in corso <br/> Per evitare danni, lasciate acceso il router e non compiete nessun'altra azione durante l'aggiornamento del firmware.",
			REBOOTING: 					"Riavvio in corso <br/> Per evitare danni, lasciate acceso il router e non compiete nessun'altra azione durante l'aggiornamento del firmware.",
			DO_NOT_OPERATE: 			"Aggioramento firmware in corso <br/> Per evitare danni, lasciate acceso il router e non compiete nessun'altra azione durante l'aggiornamento del firmware.",
			FIRMWARE_UPDATING_NOTE: 	"1.Aggiornamento Firmware in corso<br/> Per evitare ogni danno, lasciate il router alimentato e non usate il router durante il processo di aggiornamento firmware.",
			REBOOTING_NOTE: 			"2.Riavvio in corso<br/> Per evitare ogni danno, lasciate il router alimentato e non usate il router durante il processo di aggiornamento firmware.",
			SCREEN_UPDATING_NOTE: 		"3.Aggiornamento Schermata in corso<br/> Per evitare ogni danno, lasciate il router alimentato e non usate il router durante il processo di aggiornamento firmware..",
			UPGRADE_FAILED: 			"Upgrade fallito.",
			UPGRADE: 					"Aggiorna",
			CHECK: 						"Controlla",
			DOWNLOADING: 				"Download in corso <br/> Per evitare danni, lasciate acceso il router e non compiete nessun'altra azione durante l'aggiornamento del firmware.",
			UPGRADE_INOF: 				"Per evitare danni, lasciate acceso il router.",
			NOTE: 						"Nota:",
			NO_UPGRADE: 				"Questa è la versione più recente.",

			UPGRADING: 					"Aggioramento in corso <br/> Per evitare danni, lasciate acceso il router e non compiete nessun'altra azione durante l'aggiornamento del firmware.",
			RETRY: 						"Riprovate",
			CANCEL: 					"Cancella",
			ILEGAL_DEVICE:              "Non è possibile identificare il dispositivo. Contattate il supporto tecnico TP-Link.",
			UPGRADE_FAIL: 				"Non è possibile fare l'aggiornamento. Riprovate in un secondo momento.",
            CONFIG_RESET_NOTE:          "Le vostre impostazioni correnti andranno perse dopo che avrete aggiornato a questa versione.",
			CHECK_UPGRADE: 				"Verificate per aggiornare"
		},

		BACKUP:{
			BACKUP: 					"Backup",
			BACKUPTIP: 					"Salva una copia delle impostazioni correnti.",

			RESTORE: 					"Ripristino",
			RESTORETIP: 				"Ripristina le impostazioni salvate da un file.",
			
			RESTORE_WARN:				"Ripristino del router in corso... <br/>Non utilizzate durante il processo.",
			RESTORE_CONFIRM_CONTENT: 	"Ripristinare il router dal file di backup?",
			
			FILE: 						"File",

			FACTORY: 					"Ripristino Impostazione di Default",
			FACTORYTIP: 				"Ripristina i valori di default di tutte le impostazioni di configurazione.",
			RESETTIP:					"Riporta le impostazioni ai valori di fabbrica di default, eccetto il vostro login e le informazioni relative all'account cloud.",
			FACTORY_CONFIRM_CONTENT:	"Siete sicuri di volere ripristinare le impostazioni didefault del router?",
			FACTORY_WARN:				"Ripristino del router in corso... <br/>Non utilizzate durante il processo.",
			
			BACKUPBTN: 					"Backup",
			RESTOREBTN: 				"Ripristino",
			RESETBTN:					"Ripristino",
			FACTORYBTN: 				"Ripristino Impostazioni di Fabbrica"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Gestione account",
			
			OLDUSER: 					"Vecchia Username",
			OLDPWD: 					"Vecchia password",

			NEWUSER: 					"Nuova usrname",
			NEWPWD: 					"Nuova Password",
			CONFIRM: 					"Confermate la nuova password",

			RECOVERYINFO: 				"Recupero password",
			ENABLE_PASSWORD_RECOVERY: 	"Abilita Recupero password",
			FROM: 						"Da",
			TO: 						"A",
			SMTP_SERVER: 				"Server SMTP",
			
			ENABLE_AUTHENTICATION: 		"Abilita autenticazione",
			USERNAME: 					"Nome utente",
			PASSWORD: 					"Password",

			TEST_MAIL: 					"Test Mail",

			LOCAL:						"Gestione Locale",
			LOCAL_MAC_AUTH: 			"Autenticazione MAC locale",
			ACCESS: 					"Accesso per tutti i dispositivi connessi alla LAN",
			ACCESS_TIPS: 				"Attivate per abilitare la gestione di tutti i dispositivi connessi alla LAN o disattivate per abilitare la gestione di un dispositivo specifico.",
			
			MAC_ADDRESS: 				"Indirizzo MAC",
			VIEW_BTN: 					"Visualizza dispositivi esistenti",
			DESCRIPTION: 				"Descrizione",

			EXIST_DEVICE:               "Dispositivi esistenti",

			OPTIONAL: 					"(facoltativo)",
			ENABLE_THIS_ENTRY: 			"Abilita",

			DEVICE_NAME:				"Nome dispositivo",
			IP_ADDRESS:					"Indirizzo IP",
			

			REMOTE: 					"Gestione remota",
			DISABLE_REMOTE_MANAGEMENR: 	"Disabilita gestione remota",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Abilita gestione remota per tutti i dispositivi",
			ENABLE_REMOTE_MANAGEMENR: 	"Abilita gestione remota per i dispositivi specificati",
			WEB: 						"Porta di Gestione Web",

			NOTICE:						"Conflitto con la porta del server virtuale! Continuare?",

			REMOTEIP: 					"Indirizzo IP di Gestione Remota",
			REMOTEIPNOTE: 				"(Immettete 255.255.255.255 per tutti)"
			
		},

		SYSLOG:{
			TITLE: 						"Log di sistema",
			LOG_FILTER: 				"Filtro log:",
			
			TYPE_EQ: 					"Type=",
			
			ALL: 						"Tutti",

			FIREWALL: 					"Firewall", 
			NAT: 						"NAT",
			DDNS: 						"DNS dinamico",
			UPNP:						"UPnP",
			IMB:            			"Binding IP e MAC",
			IPTV:						"IPTV",
			DHCPS:						"Server DHCP",
			IGMP_PROXY:					"Proxy IGMP",
			DOMAIN_LOGIN:				"Accesso al dominio:",
			BASIC_SECURITY: 			"Sicurezza di base",
			PARENTAL_CONTROL: 			"Parental Control",
			ACCESS_CONTROL: 			"Controllo Accesso",
			DOS_PROTECTION: 			"Protezione DoS",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Statistiche di traffico",
			TIME_SETTINGS: 				"Impostazione data/ora",
			ACCOUNT_MANAGEMENT: 		"Gestione account",
			LOCAL_MANAGEMENT: 			"Gestione Locale",
			REMOTE_MANAGEMENT: 			"Gestione remota",
			LOCALE: 					"Locale",
			FACTORY_RESET: 				"Ripristino Impostazioni di Fabbrica",
			LED_CONTROLLER: 			"Controller LED",
			NETWORK: 					"Rete",
			USBSHARE: 					"Condivisione USB",
			AND: 						"e",
			LEVEL: 						"Livello",
			EMERGENCY:					"EMERGENCY",
			ALERT:						"ALERT",
			CRITICAL:					"CRITICAL",
			ERROR: 						"ERROR",
			WARNING: 					"WARNING",
			NOTICE: 					"NOTICE",
			INFO: 						"INFO",
			DEBUG: 						"DEBUG",

			INDEX: 						"Indice",
			TYPE: 						"Tipo",
			TIME: 						"Ora",
			LEVEL_COL:					"Livello",

			CONTENT: 					"Contenuto Log",
			
			MAIL_LOG: 					"Log Mail",
			SAVE_LOG: 					"Salva Log",

			SEND_OK: 					"Invio OK",
			SEND_FAILED: 				"Invio non riuscito",

			MAIL_SETTING: 				"Impostazioni Mail",

 			FROM: 						"Da",
 			TO: 						"A",
 			SMTP_SERVER: 				"Server SMTP",
 			ENABLE_AUTHENTICATION: 		"Abilita autenticazione",

 			USERNAME: 					"Nome utente",
 			PASSWORD: 					"Password",
 			CONFIRM_PASSWORD: 			"Conferma Password",

 			AUTO_MAIL: 					"Abilita invio mail automatico",
 			LOG_AT: 					"Ora di accesso ",
 			HH_MM: 						"(HH:MM) tutti i giorni",

 			LOG_EVERY: 					"Accedi ogni",
 			HOURS: 						"ore"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Impostazioni",
			STATUS: 					"Abilita QoS",
			UPBANDWIDTH: 				"Banda in Upload",
			DOWNBANDWIDTH: 				"Banda in Download",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Speed Test",
			RULE_LIST: 					"Elenco regole QoS",
			RULE: 						"Regola QoS",
			ID: 						"ID",
			NAME: 						"Nome",
			TYPE: 						"Tipo",
			DETAIL: 					"Dettaglio",
			PRIORITY: 					"Priorità",

			APPLICATION: 				"Applicazione",
			APPLICATION_LIST: 			"Elenco applicazioni",
			CUSTOM_APP: 				"Applicazione personalizzata",
			MAC_ADDR: 					"Indirizzo MAC",
			MAC_ADDR_P: 				"MAC:",
			IP_ADDR: 					"Indirizzo IP",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Porta fisica",

			LOW: 						"Basso",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto",

			PROTO: 						"Protocollo",
			PORT: 						"Porta",
			PROTO_P: 					"Protocollo:",
			PORT_P: 					"Porta:",
			PORT_TIPS: 					"(XX o XX-XX, 1-65535, massimo 5 coppie)",

			ALL: 						"Tutti",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Personalizzato",

			WIFI_HOME: 					"WIFI-HOST",
			WIFI_GUEST: 				"WIFI-OSPITIspiti",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Aggiornamento Database",

			NEWFILE: 					"Nuovo File Database",
			FIRMWAREVERSION: 			"Versione Database",
			CONFIRM_CONTENT:			"Aggiornare il Database?",
			WARNING:					"Aggiornamento Database in corso... <br/>Non utilizzate durante il processo.",
			
			UPGRADE: 					"Aggiorna",

			SERVICE_RESTART: 			"Riavvio servizio QoS",
			
			TYPE: 						"Tipo",
			BY_DEVICE: 					"Per dispositivo",
			BY_APP: 					"Per applicazione",
			BY_PHY: 					"Per porta fisica",

			HIGH_PRIORITY_LBL: 			"Priorità alta:",
			MIDDLE_PRIORITY_LBL: 		"Priorità media:",
			LOW_PRIORITY_LBL: 			"Priorità bassa:",

			HIGH_PRIORITY: 				"Priorità alta",
			MIDDLE_PRIORITY: 			"Priorità media",
			LOW_PRIORITY: 				"Priorità bassa"

		},

		APPLICATION:{
			APP_LIST: 					"Elenco applicazioni",
			GAME_LIST: 					"Elenco giochi",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Statistiche di traffico",
			ENABLE_STATISTICS: 			"Statistiche di traffico",

			TITLE: 						"Elenco statistiche di traffico",
			IP_MAC: 					"Indirizzo IP/Indirizzo MAC",
			TPKT: 						"Totale pacchetti",
			TBYTE: 						"Totale byte",
			CPKT: 						"Pacchetti correnti",
			CBYTE: 						"Byte correnti",
			CICMP: 						"Tx ICMP corrente",
			CUDP: 						"Tx UDP corrente",
			CSYN: 						"Tx SYN corrente",
			
			DELETE_CONFIRM: 			"Siete sicuri di volere eliminare le statistiche di traffico? ",
			DELETE_ALL_CONFIRM: 		"Siete sicuri di volere eliminare tutte le statistiche di traffico? ",

			RESET_ALL: 					"Reset Totale"
		},

		SYSPARA:{
			W24G: 						"Wireless 2.4GHz",
			W5G: 						"Wireless 5GHz",
			SWITCH_NOTICE:  			"La funzione wireless è disattivata. Se desiderate utilizzare questa funzione. Attivate il pulsante Wi-Fi.",

			ENABLE_TIPS: 				"La funzione wireless è disabilitata.",

			BEACON: 					"Intervallo beacon",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"Soglia RTS",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Soglia frammentazione",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"Intervallo DTIM",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Periodo di aggiornamento chiavi di gruppo",
			GROUPUNIT: 					"secondi",
			
			
			WMM_FEATURE: 				"Funzione WMM",
			WMM: 						"Abilita WMM",

			GI_FEATURE: 				"Funzione Short GI",
			GI: 						"Abilita Short GI",

			AP_FEATURE: 				"Funzione AP Isolation",
			AP: 						"Abilita AP Isolation",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Abilita TxBF",

			WDS_FEATURE: 				"Bridging WDS",
			WDS: 						"Abilita WDS Bridging",
			
			SSID_BRIDEGE: 				"SSID (per connessione con bridging)",
			SURVEY: 					"Rilevamento",

			SN: 						"SN",
			MAC_ADDRESS: 				"Indirizzo MAC",
			SSID: 						"SSID",
			SIGNAL: 					"Segnale",
			CHANNEL: 					"Canale",
			SECURITY: 					"Sicurezza",
			CHOSEN: 					"Scelto",
			AP_NUMBER:					"Numero AP",

			TOTAL: 						"Totale elementi",

			MAC: 						"Indirizzo MAC (per connessione bridge)",
			MACUNIT: 					"Esempio: 00-1D-0F-11-22-33",

			SECURITY: 					"Sicurezza",
			NO: 						"No",
			NONE: 						"Nessuna sicurezza",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Password",
			
			AUTH_TYPE: 					"Tipo autent.",
			AUTO: 						"Automatica",
			OPEN: 						"Sistema aperto",
			SHARED: 					"Chiave condivisa",

			WEP_INDEX: 					"Indice WEP",
			KEY1: 						"Chiave 1",
			KEY2: 						"Chiave 2",
			KEY3: 						"Chiave 3",
			KEY4: 						"Chiave 4",

			WEP_KEY_FORMAT: 			"Formato chiave WEP",
			ASC: 						"ASCII",
			HEX: 						"Esadecimale",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Abilita WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Abilita NAT",
			
			NAT_BOOST: 					"Incremento NAT",
			ENABLE_NAT_BOOST: 			"Abilita NAT Boost",
			
			MEDIA_SERVER: 				"Server Multimediale",
			SCAN_INTERVAL: 				"Intervallo di analisi automatica (ore)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Impostazione Livello DoS Protection",

			ICMP: 						"Livello pacchetti ICMP-FLOOD",
			UDP: 						"Livello pacchetti UDP-FLOOD",
			TCP: 						"Livello pacchetti TCP-FLOOD",

			WDS_MODE: 					"Modalità WDS",
			WDS1: 						"WDS 1",
			WDS2: 						"WDS 2",

			LOW: 						"Basso",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto",

			TO: 						"a",
			NOTICE_NAT_REBOOT: 			"Riavvio in corso... <br/>Non utilizzare durante il processo di riavvio.",

			NOTICE_NAT_BOOST: 			"La modifica dell'incremento NAT comporterà il riavvio del dispositivo. Siete sicuri di volere continuare?",
			NOTICE:						"Il canale del router è diverso dal canale dell'AP con bridge. Lo volete cambiare?",

			UNIT: 						"(5-7200) pacchetti/s",
			LED: 						"LED",
			NIGHT_MODE: 				"Modalità notte",
			PERIOD_NIGHT_TIME: 			"Modalità notturna",
			ENABLE: 					"Attiva modalità notturna",
			HH_MM: 						"(HH.MM)",
			NIGHT_MODE_NOTE:            "Il LED è spento. Se desideri utilizzare questa funzione, clicca sul LED nell'angolo in alto a destra della pagina.",
			NOTE2:                      "Il periodo in modalità notte entra in funzione in base all'ora di sistema del router. Verifica di avere già impostato l'orario sul router."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Nessun certificato corrente, utilizza <b>Genera</b> per generarne uno prima di abilitare il server VPN.",
			NO_CERT_NOTE2: 				"Nessun certificato corrente, utilizza <b>Genera</b> per generarne uno prima di esportare la configurazione.",
			ENABLE_VPN_SERVER: 			"Abilita server VPN",
			SERVICE_TYPE: 				"Tipo di servizio",
			SERVICE_PORT: 				"Porta di servizio",
			VPN_SUBNET: 				"Subnet/Netmask VPN",
			CLIENTS_ACCESS: 			"Accesso client",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Solo rete domestica",
			INTERNET_HOME: 				"Internet e rete domestica",
			CERT_STR: 					"Nessun certificato corrente; clicca OK per generarne uno e salvare la configurazione.",
			CERT_STR2: 					"Nessun certificato corrente; clicca OK per generarne uno ed esportare la configurazione.",
			CONF_FILE: 					"File di configurazione", 
			EXPORT_CONF_FILE: 			"Esporta la configurazione.",
			EXPORT: 					"Esporta",

			INSTALL_GUIDE: 				"Guida all'installazione del client VPN",
			INSTALL_STEP: 				"Per abilitare e collegare i dispositivi client al server OpenVPN:",
			INSTALL_NOTICE:				"Prima di configurare il server OpenVPN, configura il Servizio DNS dinamico (scelta consigliata) o assegna un indirizzo IP statico per la porta Wan. Verifica che l'Ora di sistema sia corretta.",
			INSTALL_NOTE1: 				"Seleziona Abilita server VPN.",
			INSTALL_NOTE2: 				"Prima di configurare il server OpenVPN, configurate il servizio DNS Dinamico (consigliato) o assegnate un indirizzo IP statico alla porta WAN. Assicuratevi che la porta esterna delle impostazioni NAT non sia la porta di servizio e che DMZ sia disabilitato, e che il vostro Orario di Sistema sia corretto.",
			INSTALL_NOTE3: 				"Clicca Esporta per salvare il file di configurazione.",
			INSTALL_NOTE4: 				"Sui dispositivi client, scarica e installa l'utilità client OpenVPN da <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Le piattaforma ufficiali supportate includono Windows, Mac OSX e Linux.",
			INSTALL_NOTE5: 				"Avvia l'utilità client OpenVPN e aggiungi una nuova connessione VPN utilizzando il file di configurazione salvato per collegare il dispositivo client al server VPN.",
			NOTE: 						"Per maggiori informazioni sui client OpenVPN, visita <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Indirizzo IP client",
			ACCOUNT_USERNAME: 			"Nome utente",
			ACCOUNT_PASSWORD: 			"Password",
			CLIENT_IP_NOTE: 			"(fino a 10 client)",
			SAME_SUBNET_NOTE: 			"L'indirzzo IP del client e l'indirzzo IP LAN non possono essere nella stessa subnet.",
			CONFLICT_WITH_DHCP: 		"L'indirzzo IP del client è in conflitto con il pool di indirizzi IP DHCP.",
			CONFLICT_WITH_RESERVED: 	"L'indirzzo IP del client è in conflitto con l'indirizzo IP riservato.",
			CONFLICT_WITH_OPENVPN: 		"L'indirzzo IP del client e l'indirzzo IP OpenVPN non possono essere nella stessa subnet.",
			SAME_SUBNET_NOTE2: 			"Subnet/Netmask VPN e l'indirizzo IP LAN non possono essere nella stessa subnet.",
			CONFLICT_WITH_DHCP2: 		"Subnet/Netmask della VPN sono in conflitto con il pool di indirizzi IP DHCP.",
			CONFLICT_WITH_RESERVED2: 	"Subnet/Netmask della VPN sono in conflitto con l'indirizzo IP riservato.",
			CONFLICT_WITH_PPTPVPN: 		"Subnet/Netmask della VPN e indirizzo IP della VPN PPTP non possono essere nella stessa subnet.",
			VPN_MASK_ERROR: 			"La netmask non può essere maggiore di 255.255.255.248.",
			ACCOUNT_LIST: 				"Elenco Account (fino a 16 utenti)",
			ADVANCED_SETTING: 			"Avanzata",
			ALLOW_SAMBA: 				"Consenti l'accesso a Samba (Network Place)",
			ALLOW_NETBIOS: 				"Consenti NetBIOS passthrough",
			ALLOW_UNENCRYPTED_CONN: 	"Consenti connessioni senza crittografia",
			USERNAME_CONFLICT: 			"Questa username è già esistente.",
			
			CONNECT_PPTP: 				"Per abilitare e collegare i dispositivi client al server PPTP VPN:",
			CONNECT_NOTICE:				"Prima di configurare il server VPN PPTP, configura il Servizio DNS dinamico (scelta consigliata) o assegna un indirizzo IP statico per la porta Wan. Verifica che la porta esterna delle impostazioni NAT non sia 1723 e che DMZ sia disabilitato; verifica inoltre che l'Ora di sistema sia corretta.",
			CONNECT_NOTE1: 				"Seleziona Abilita server VPN.",
			CONNECT_NOTE2: 				"Configura i parametri del server PPTP VPN e clicca Salva.",
			CONNECT_NOTE3: 				"Sui dispositivi client, crea una connessione VPN PPTP. Le piattaforme ufficiali supportate includono Windows, Mac OSX, Linux, iOS e  Android.",
			CONNECT_NOTE4: 				"Lancia il programma PPTP VPN, aggiungi una nuova connessione e inserisci il nome di dominio del servizio DDNS registrato o l'indirizzo IP statico assegnato alla porta WAN, per collegare il dispositivo client al server PPTP VPN.",
			
			GENERATE_CERT: 				"Certificato",
			GENERATE_NEW_CERT: 			"Genera il certificato.",
			GENERATE: 					"Genera",
			GENERATE_TIPS: 				"Generazione certificato...<br/>Occorre qualche minuto, attendi.",
			CERT_SUCCESS: 				"Successo",
			CERT_FAIL: 					"Operazione non riuscita, riprova.",
			
			VPN_CONNECTIONS: 			"Connessioni VPN",
			OPEN_VPN_CONNECTIONS: 		"Connessione OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"Connessione PPTP VPN",
			USER:				"Utente",
			REMOTE_IP:			"IP Remoto",
			ASSIGNED_IP:			"IP Assegnato"
		}
	};
})(jQuery);

