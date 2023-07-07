(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			EMAIL: 						"Email",
			FORGET_PASSWORD: 			"Wachtwoord vergeten?",
			LOGIN: 						"Inloggen",
			BEGIN: 						"Laten we beginnen",
			IMPORTANT_UPDATE_INFO: 		"Om het conflict met het front-end apparaat te voorkomen, is het IP-adres van uw router gewijzigd in",
			CONTINUE: 					"Doorgaan",

			IMPORTANT_NOTICE: 			"Belangrijke mededeling",
			OR: 						", weet u zeker dat u wilt doorgaan met bezoeken van",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Hou de Reset toets %SECONDS% seconden ingedrukt om de router naar fabrieksinstellingen terug te zetten.",
			FORGET_PASSWORD_INFO_1: 	"Als de functie Wachtwoord vergeten ingeschakeld is. Wordt een verificatiecode naar het opgegeven e-mailadres gestuurd, om de gebruikersnaam en het wachtwoord opnieuw in te stellen.",
			FORGET_PASSWORD_SEND_FAILED:"De code is niet verzonden! Controleer uw Internet verbinding.",

			VERIFICATION_CODE: 			"Verificatiecode",

			RECEIVE_CODE: 				"Stuur code",

			CONFIRM: 					"Bevestigen",
			WELCOME: 					"Welkom bij TP-Link %model%. Gelieve inloggen.",
			SEC: 						"s",

			USER_CONFLICT: 				"Inlog conflict!",
			FIRST_TIME: 				"Stel uw %PRODUCT% in om eerst verbinding te maken met het internet. Creër om te beginnen een apparaat wachtwoord om uw %PRODUCT% te beheren.",
			FIRST_TIME1: 				"Creëer een administrator wachtwoord om uw %model% te beheren.",
			USER_CONFLICT_INFO: 		"Gebruiker %USER% met host %HOST% (%IP%/%MAC%) is momenteel op de router ingelogd. U kunt niet tegelijkertijd inloggen. Probeer het later opnieuw.",
			USER_CONFLICT_INFO_2: 		"Gebruiker %USER% (%IP%) is momenteel op de router ingelogd. U kunt niet tegelijkertijd inloggen. Probeer het later opnieuw.",
			USER_CONFLICT_INFO_3: "Er kan maar één apparaat tegelijkertijd in inloggen. Wilt u doorgaan en het andere apparaat forceren uit te loggen?",
			
			LOGIN_FAILED: 				"Inloggen mislukt!",
			LOGIN_FAILED_COUNT: 		"Inloggen is %num1 maal mislukt en u hebt nog %num2 pogingen over.",
			NO_COOKIE: 					"Cookies moeten ingeschakeld zijn om in te loggen. Schakel cookies in, of zet Privé/Incognito browsen uit.", 

			FORGET_PASSWORD_NOTE: 		"Als u de functie Wachtwoord vergeten niet geconfigureerd hebt, houdt u de Reset toets %SECONDS% seconden ingedrukt om de router op fabrieksinstellingen terug te zetten."
		},
		INIT: {
			PASSWORD: 					"Wachtwoord",
			CONFIRM_PASSWORD:				"Wachtwoord bevestigen",
			BEGIN: 						"Laten we beginnen",
			IMPORTANT_UPDATE_INFO: 		"Om conflicten met het front-end apparaat te voorkomen is uw router's IP adres bijgewerkt naar",
			CONTINUE: 					"Volgende",

			IMPORTANT_NOTICE: 			"Belangrijke mededeling",
			OR: 						", weet u zeker dat u wilt doorgaan met bezoeken van",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Bevestigen",

			SEC: 						"s",

			USER_CONFLICT: 				"Login conflict!",
			
			USER_CONFLICT_INFO: 		"Gebruiker %gebruiker% met host %host% (%IP%/%MAC%) is momenteel ingelogd in de router. U kunt niet gelijktijdig inloggen. Probeer het later nogmaals.",
			USER_CONFLICT_INFO_2: 		"Gebruiker %gebruiker% (%IP%) is momenteel ingelogd op de router. U kunt niet gelijktijdig inloggen. Probeer het later nogmaals.",
			
			LOGIN_FAILED: 				"Login fout!",
			LOGIN_FAILED_COUNT: 		"Inloggen is %num1 maal mislukt en u hebt nog %num2 pogingen over.",
			NO_COOKIE: 					"Cookies moeten ingeschakeld zijn om in te loggen. Schakel cookies in, of zet Privé/Incognito browsen uit.", 

			INIT_NOTE_TITLE: 			"Geachte klant,",
			INIT_NOTE_CONTENT: 			"Stel uw %PRODUCT% in om eerst verbinding te maken met het internet. Creër om te beginnen een apparaat wachtwoord om uw %PRODUCT% te beheren."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Firmware Versie:",
			FEATURE: 						"Modificaties en Bug fixes:",
			TITLE: 							"Beschikbare firmware upgrade is gedetecteerd.",
			UPGRADE_NOW: 					"Nu upgraden",
			REMIND: 						"Herinner mij later",
			NOTICE:    						"Hi, er is een nieuwe firmware beschikbaar voor uw router.",
			NEVER: 							"Deze versie negeren"
			
		},

		WAN_ERROR: {
			TITLE: 							"WAN connectie fout!",
			STATUS: 						"Status",
			INFO: 							"Informatie",
			SETUP: 							"Een internet verbinding instellen",
			NEVER: 							"Mij niet meer herinneren"
		},

		OFFLINE_ERROR:{
			TITLE: "Oeps… We kunnen de cloud server niet benaderen.",
			NOTE1: "1. Wees er zeker van dat u toegang tot het internet heeft.",
			NOTE2: "2. De cloud server is tijdelijk ontoegankelijk. Gelieve de pagina later verversen.",
			NOTE3: "3. Als het probleem blijft aanhouden, neemt contact op met de <a target=\"_blank\" id=\"support\"> technische support van TP-Link</a>.",
			ERROR: "Fout"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Firmware versie:",
			HARDWARE_VERSION: 				"Hardware versie:",
			HELP_SUPPORT: 					"Ondersteuning",
			FAQ: 							"Vaak gestelde vragen",
			CONFIRM_REBOOT: 				"Weet u zeker dat u de router opnieuw wilt starten?",
			CONFIRM_LOGOUT: 				"Weet u zeker dat u wilt uitloggen?",
			UPGRADE_ALERT_1: 				"De huidige firmware ondersteunt geen TP-Link cloud service. Wij raden u sterk aan om de laatste firmware te downloaden op www.tp-link.com en deze te updaten.",
			UPGRADE_ALERT_2: 				"De huidige firmware ondersteunt geen TP-Link cloud service. Wij raden u sterk aan dat u de firmware update door op het Update pictogram te klikken in de rechter bovenhoek.",
			ACCOUNT_UNLOGIN: 				"Account",

			REBOOTING: 						"Opnieuw starten... <br/>A.u.b. niet bedienen tijdens het opnieuw starten.",

			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Scan de QR code om de TP-Link Tether app te downloaden",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Beheer eenvoudig uw netwerk vanaf elk mobile apparaat.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Complete controle vanuit uw handpalm."
		},

		NAV: {
			QUICK_SETUP: 				"Quick start",
			BASIC: 						"Basis",
			ADVANCED: 					"Geavanceerd"
		},

		CONTROL: {
			LOGIN: 						"Inloggen",
			LOGOUT: 					"Uitloggen",
			UPDATE: 					"Update",
			REBOOT: 					"Herstarten",
			LED: 						"LED",
			LED_ON: 					"LED Aan",
			LED_OFF: 					"LED Uit",
			LED_DISABLED: 				"De LED status kan niet gewijzigd worden tijdens de nachtmodus periode."
		},

		LANGUAGE: {
			EN_US: 						"Nederlands",
			ZH_CN: 						"???"
		},

		REGION: {
			ALBANIA: 					"Albanië",
			ALGERIA: 					"Algerije",
			AMERICAN_SAMOA: 			"Amerikaans Samoa",
			ARGENTINA: 					"Argentinië",
			ARMENIA: 					"Armenië",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australië",
			AUSTRIA: 					"Oostenrijk",
			AZERBAIJAN: 				"Azerbeidjan",
			BAHAMAS: 					"Bahama's",
			BAHRAIN: 					"Bahrein",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbodos",
			BELARUS: 					"Wit-Rusland",
			BELGIUM: 					"België",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Bermuda",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnië en Herzegowina",
			BRAZIL: 					"Brazilië",
			BRUNEI_DARUSSALAM: 			"Brunei Dar Es Salaam",
			BULGARIA: 					"Bulgarije",
			CAMBODIA: 					"Cambodja",
			CANADA: 					"Canada",
			CAYMAN_ISLANDS: 			"Kaaiman Eilanden",
			CHILE: 						"Chili",
			CHINA: 						"Volksrepubliek China",
			COLOMBIA: 					"Colombia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Kroatië",
			CYPRUS: 					"Cyprus",
			CZECH_REPUBLIC: 			"Tsjechische Republiek",
			DENMARK: 					"Denemarken",
			DOMINICAN_REPUBLIC: 		"Dominicaanse Republiek",
			ECUADOR: 					"Ecuador",
			EGYPT: 						"Egypte",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estland",
			ETHIOPIA: 					"Ethiopië",
			FAEROE_ISLANDS: 			"Faröer Eilanden",
			FINLAND: 					"Finland",
			FRANCE: 					"Frankrijk",
			FRENCH_GUIANA: 				"Frans Guyana",
			FRENCH_POLYNESIA: 			"Frans Polynesië",
			GEORGIA: 					"Georgië",
			GERMANY: 					"Duitsland",
			GREECE: 					"Griekenland",
			GREENLAND: 					"Groenland",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haïti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong S.A.R., P.R.C.",
			HUNGARY: 					"Hongarije",
			ICELAND: 					"IJsland",
			INDIA: 						"India",
			INDONESIA: 					"Indonesië",
			IRAN: 						"Iran",
			IRAQ: 						"Irak",
			IRELAND: 					"Ierland",
			ISRAEL: 					"Israël",
			ITALY: 						"Italië",
			JAMAICA: 					"Jamaica",

			JAPAN: 						"Japan",
			JAPAN_1: 					"Japan 1",
			JAPAN_2: 					"Japan 2",
			JAPAN_3: 					"Japan 3",
			JAPAN_4: 					"Japan 4",
			JAPAN_5: 					"Japan 5",
			JAPAN_6: 					"Japan 6",

			JORDAN: 					"Jordanië",
			KAZAKHSTAN: 				"Kazachstan",
			KENYA: 						"Kenia",

			NORTH_KOREA: 				"Noord-Korea",
			KOREA_REPUBLIC: 			"Republiek Korea",
			KOREA_REPUBLIC_3: 			"Republiek Korea 3",

			KUWAIT: 					"Koeweit",
			LATVIA: 					"Letland",
			LEBANON: 					"Libanon",
			LIBYA: 						"Libië",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Litouwen",
			LUXEMBOURG: 				"Luxemburg",
			MACAU: 						"Macau SAR",
			MACEDONIA: 					"Voormalige Joegoslavische Republiek Macedonië",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Maleisië",
			MALDIVES: 					"Maldiven",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinique",
			MAURITIUS: 					"Mauritius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Mexico",
			MONACO: 					"Vorstendom Monaco",
			MONGOLIA: 					"Mongolië",
			MOROCCO: 					"Marokko",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Nederland",
			NETHERLANDS_ANTILLES: 		"Nederlandse Antillen",

			NEW_ZEALAND: 				"Nieuw-Zeeland",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Noorwegen",
			NORTHERN_MARIANA_ISLANDS: 	"Noordelijke Mariana Eilanden",
			OMAN: 						"Oman",
			PAKISTAN: 					"Islamitische Republiek Pakistan",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papoea Nieuw-Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Peru",
			PHILIPPINES: 				"Republiek Filippijnen",
			POLAND: 					"Polen",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Reunion",
			ROMANIA: 					"Roemenië",
			RUSSIA: 					"Rusland",
			RWANDA: 					"Rwanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Saoedi Arabië",
			SINGAPORE: 					"Singapore",
			SLOVAK_REPUBLIC: 			"Republiek Slowakije",
			SLOVENIA: 					"Slovenië",
			SOUTH_AFRICA: 				"Zuid-Afrika",
			SPAIN: 						"Spanje",
			SRI_LANKA: 					"Saoedi Arabië",
			SURINAME: 					"Suriname",
			SWEDEN: 					"Zweden",
			SWITZERLAND: 				"Zwitserland",
			SYRIA: 						"Syrië",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tanzania",
			THAILAND: 					"Thailand",
			TRINIDAD_TOBAGO: 			"Trinidad y Tobago",
			TUNISIA: 					"Tunesië",
			TURKEY: 					"Turkije",
			UGANDA: 					"Oeganda",
			UKRAINE: 					"Oekraïne",
			UNITED_ARAB_EMIRATES: 		"Verenigde Arabische Emiraten",
			UNITED_KINGDOM: 			"Verenigd Koninkrijk",
			UNITED_STATES: 				"Verenigde Staten",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Oezbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnam",
			VIRGIN_ISLANDS: 			"Maagden Eilanden (VS)",
			YEMEN: 						"Jemen",
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
			M_INDONESIA:                                                  "Indonesië",
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
			M_LUXEMBOURG:                                                 "Luxemburg",
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
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midway Eiland, Samoa",
			HAWAII: 					"(GMT-10:00) Hawaii",
			ALASKA: 					"(GMT-09:00) Alaska",
			PACIFIC_TIME: 				"(GMT-08:00) Pacific Time",
			MOUNTAIN_TIME: 				"(GMT-07:00) Mountain Time (US Canada)",
			CENTRAL_TIME: 				"(GMT-06:00) Central Time (US Canada)",
			EASTERN_TIME: 				"(GMT-05:00) Eastern Time (US Canada)",
			CARACAS:					"(GMT-04:30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04:00) Atlantic Time (Canada)",
			NEWFOUNDLAND: 				"(GMT-03:30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brasilia, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Mid-Atlantic",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azoren, Kaapverdische eil.",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwich Mean Time, Dublin, Londen",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlijn, Stockholm, Rome, Bern, Brussel",
			ATHENS_HELSINKI: 			"(GMT+02:00) Athene, Helsinki, Oost-Europa, Israël",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Baghdad, Koeweit, Nairobi, Riyadh, Moskou",

			TEHERAN: 					"(GMT+03:30) Teheran",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kaboel",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Jekaterinenburg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Calcutta, Bombay, New Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Beijing, Hong Kong, Perth, Singapore",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Jakoetsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Solomon eil., Nieuw-Caledonië",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamtsjatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Applicatie",
			GAME:						"GAME",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"Line",
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
			DAY: 						"Dag",

			MONDAY: 					"Maandag",
			TUESDAY: 					"Dinsdag",
			WEDNESDAY: 					"Woensdag",
			THURSDAY: 					"Donderdag",
			FRIDAY: 					"Vrijdag",
			SATURDAY: 					"Zaterdag",
			SUNDAY: 					"Zondag",
			
			MON: 						"Ma",
			TUES: 						"Di",
			WED: 						"Wo",
			THUR: 						"Do",
			FRI: 						"Vr",
			SAT: 						"Za",
			SUN: 						"Zo",

			JAN: 						"Jan",
			FEB: 						"Feb",
			MAR: 						"Mrt",
			APR: 						"Apr",
			MAY: 						"Mei",
			JUN: 						"Jun",
			JUL: 						"Jul",
			AUG: 						"Aug",
			SEP: 						"Sept",
			OCT: 						"Okt",
			NOV: 						"Nov",
			DEC: 						"Dec"

		},

		HOUR: {
			AM_1: 						"01:00",
			AM_2: 						"02:00",
			AM_3: 						"03:00",
			AM_4: 						"04:00",
			AM_5: 						"05:00",
			AM_6: 						"06:00",
			AM_7: 						"07:00",
			AM_8: 						"08:00",
			AM_9: 						"09:00",
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
			PM_12: 						"24:00"
		},

		ORDER: {
			"1ST": 						"Eerste",
			"2ND": 						"2e",
			"3RD": 						"3e",
			"4TH": 						"4e",
			"5TH": 						"Laatste",
			"1ST_": 					"1e",

			TH: 						"e"
		},

		GRID: {
			CLIENT_NUMBER: 				"Cliënt nummer",

			ID: 						"ID",
			MODIFY: 					"Wijzigen",
			STATUS: 					"Status",
			ENABLE: 					"Inschakelen",

			OPERATION: 					"Werking",
			CHOOSE: 					"Kiezen",
			DESCRIPTION: 				"Beschrijving",
			

			AUTO_REFRESH: 				"Auto vernieuwen",
			REFRESH: 					"Vernieuwen",
			NUMBER: 					"Nummer",
			ENABLED: 					"Ingeschakeld",
			DISABLED: 					"Uitgeschakeld",
			ACTIVE: 					"Actief",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Toevoegen",
			CHOOSE: 					"Kiezen",
			EDIT: 						"Wijzigen",
			DELETE: 					"Verwijderen",
			DELETE_ALL: 				"Alles verwijderen",
			REMOVE: 					"Verwijderen",
			RESET: 						"Reset",
			RESET_ALL: 					"Alles resetten",
			DETECT: 					"Detecteren",
			ENABLE: 					"Inschakelen",
			DISABLE: 					"Uitschakelen",
			CLEAR: 						"Clear",

			REFRESH: 					"Vernieuwen",
			SEARCH: 					"Zoeken…",
			BROWSE: 					"Bladeren",

			SAVE: 						"Opslaan",
			BACK: 						"Terug",

			PREV: 						"Vor.",
			NEXT: 						"Volgende",
			FINISH: 					"Voltooien",
			
			ON: 						"Aan",
			OFF: 						"Uit",
			LOW: 						"Laag",
			MIDDLE: 					"Middel",
			HIGH: 						"Hoog",
			
			OK: 						"OK",
			CANCEL: 					"Annuleren",

			YES: 						"Ja",
			NO: 						"Nee",
			
			CONNECTED: 					"Verbonden",
			CONNECTING: 				"Verbinden",
			DISCONNECTING: 				"Verbreken",
			DISCONNECTED: 				"Niet verbonden",

			PASSWORD_HINT: 				"Wachtwoord",
			FILEBUTTONTEXT: 			"Bladeren",
			FILEBLANKTEXT: 				"Selecteer een bestand.",
			NOSELECTEDTEXT: 			"Selecteer opties.",

			ADD_A_NEW_KEYWORD: 			"Nieuw trefwoord toevoegen",

			SUCCESSED: 					"Succes!",
			FORM_SAVED: 				"Opgeslagen",
			FORM_FAILED: 				"Mislukt",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Opgeslagen",
			GRID_FAILED: 				"Mislukt",
			GRID_NONE_SELECT: 			"Gelieve minstens 1  invoer selecteren.",
			GRID_DELETE_COMFIRM: 		"Weet u zeker dat u deze items wilt verwijderen?",
			GRID_DELETE_ALL_COMFIRM: 	"Weet u zeker dat u alle items wilt verwijderen?",
			GRID_MAX_RULES: 			"Maximum aantal items overschreden.",
			KEYWORD_MAX_OVERFLOW: 		"Het aantal trefwoorden heeft de limiet overschreden.",

			NOTE: 						"Opmerking:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Ongeldig formaat.",
			BLANKTEXT: 					"Dit veld is verplicht.",

			EMAIL: 						"Ongeldig email formaat.",
			NUMBER: 					"Ongeldig formaat.",

			NUMBER_MIN: 				"Ongeldige waarde. Voer een getal groter dan %min in.",
			NUMBER_MAX: 				"Ongeldige waarde. Voer een getal kleiner dan %max in.",

			NUMBER_MIN_MAX: 			"Ongeldige waarde. Voer een getal tussen %min en %max.in.",
			HEX: 						"Dit veld moet een hexadecimaal getal bevatten.",

			IP: 						"Ongeldig formaat.",

			IP_NO_ALL_ZERO:				"Het adres mag niet 0.0.0.0 zijn.",
			IP_NO_LOOP:					"Het adres mag geen loopback adres zijn.",
			IP_NO_D_TYPE:				"Het adres mag geen IP klasse D zijn.",
			IP_NO_E_TYPE:				"Het adres mag geen IP klasse E zijn.",
			IP_NO_ALL_ONE:				"Het adres mag niet 255.255.255.255 zijn.",
			IP_NO_FIRST_ALL_ONE:		"Het adres mag niet met 255 beginnen.",
			IP_NO_FIRST_ZERO:			"Het adres mag niet met 0 beginnen.",
			MASK_NO_ALL_ONE:			"Het masker mag niet 255.255.255.255 zijn.",

			IPV6: 						"Ongeldig formaat.",
			IPV6_NOT_GLOBAL:			"Ongeldig formaat.",
			IPV6_NOT_PREFIX:			"Ongeldig formaat.",
			IP_DOMAIN: 					"Ongeldig formaat.",
			IPV6_DOMAIN: 				"Ongeldig formaat.",
			MAC: 						"Ongeldig formaat.",
			MULTI_MAC:					"Ongeldig formaat.",
			DATE: 						"Ongeldig formaat.",
			DATE_INVALID: 				"Voer een datum tussen 01/01/1970 en 31/12/2030 in.",
			MASK: 						"Ongeldig formaat.",
			DOMAIN: 					"Ongeldig formaat.",
			STRING_DOMAIN:              "Ongeldig formaat.",
			USER: 						"Ongeldig formaat.",
			NOTE: 						"Ongeldig formaat.",
			PWD: 						"Ongeldig formaat.",
			SSID: 						"Ongeldig formaat.",
			NAME:						"Ongeldig formaat.",
			ASCII_VISIBLE:				"Ongeldig formaat.",
			STRING_VISIBLE:				"Ongeldig formaat.",
			STRING_VISIBLE_NO_COMMA:    "Ongeldig formaat.",
			STRING_VISIBLE_ALLOW_BLANK: "Ongeldig formaat.",
			NAME_SPECIAL: 				"Vul 4-15 alfa letters, cijfers, -en_.",
			VPN_NAME_PWD: 				"Vul 1-15 alfa letters, cijfers, -en_."	
			
		},


		ERROR: {			
			"00000001":					"Ongeldig bestandstype.",
			"00000002":					"Checksum fout.",
			"00000003":					"Het bestand is te groot.",
			"00000004":					"Upload fout.",
			"00000005":					"Herstart fout.",
			"00000006":					"Onbekende fout.",
			"00000007":					"Het item is al aanwezig. Voer een ander item in.",

			"00000009":					"Gebruik de standaardwaarde 21, of voer een waarde tussen 1024 en 65535 in.",
			"00000010":					"De poort moet een getal zijn.",

			"00000011":					"Gebruikersnaam moet hetzelfde zijn als Van waarde.",
			"00000012": 				"De gebruikersnaam moet met een letter beginnen.",

			"00000021":					"Ongeldig formaat.",

			"00000032": 				"Waarde moet minder dan Laag zijn.",
			"00000033": 				"Waarde moet minder dan Middel en Laag zijn.",
			"00000034": 				"Ongeldige waarde; voer een getal tussen 5 en 7200 in.",

			"00000039": 				"Gebruik de standaardwaarde 0, of voer een waarde tussen 30 en 86400 in.",
			"00000040": 				"SSID en MAC-adres zijn vereist.",

			"00000042": 				"Gebruik de standaardwaarde 80, of voer een waarde tussen 1024 en 65535 in.",

			"00000045": 				"Standaard gateway en LAN IP-adres moeten zich in hetzelfde subnet bevinden. A.u.b. opnieuw invoeren.",

			"00000047": 				"IP-adres en LAN IP-adres moeten zich in hetzelfde subnet bevinden. A.u.b. opnieuw invoeren.",

			
			"00000049":					"Bestemming netwerk is ongeldig.",

			"00000050": 				"IP-adres van DNS server onjuist. Voer een ander IP-adres in.",
			"00000051": 				"Dit MAC-adres is al aanwezig. Voer een ander adres in.",
			"00000052": 				"Dit IP-adres is al aanwezig. Voer een ander adres in.",

			"00000053": 				"Het beginadres mag niet groter dan het eindadres zijn. <br/>A.u.b. opnieuw invoeren.",

			"00000054": 				"IP-adrespool en LAN IP-adres moeten zich in hetzelfde subnet bevinden. A.u.b. opnieuw invoeren.",

			"00000055": 				"IP mag niet hetzelfde als het LAN-adres zijn.",

			"00000056": 				"Het externe IP-adres en het huidige LAN IP-adres mogen zich niet in hetzelfde subnet bevinden. Voer een ander adres in.",

			"00000057": 				"Ongeldig PSK wachtwoord, a.u.b. opnieuw invoeren.",
			"00000058": 				"Ongeldig WEP wachtwoord, a.u.b. opnieuw invoeren.",

			"00000059": 				"Ongeldig subnetmasker en LAN IP-adres. Voer een andere waarde in.",

			"00000060": 				"WAN IP-adres en LAN IP-adres mogen niet in hetzelfde subnet zijn. <br/>Voer een andere waarde in.",

			"00000061": 				"De begintijd moet eerder dan de eindtijd zijn.",

			"00000062": 				"Dit veld is verplicht.",
			"00000063": 				"Dit veld is verplicht.",

			"00000064": 				"Het host MAC-adres kan niet worden geblokkeerd.",
			"00000065": 				"Dit item conflicteert met bestaande items, a.u.b. controleren.",
			
			"00000066": 				"Het wachtwoord moet uit 8 t/m 63 tekens of 64 hexadecimale tekens bestaan.",
			"00000067": 				"Het wachtwoord moet uit 10 hexadecimale tekens bestaan.",
			"00000068": 				"Het wachtwoord moet uit 5 ASCII tekens bestaan.",
			"00000069": 				"Het wachtwoord moet uit 26 hexadecimale tekens bestaan.",
			"00000070": 				"Het wachtwoord moet uit 13 ASCII tekens bestaan.",
			"00000071": 				"Het wachtwoord moet uit 32 hexadecimale tekens bestaan.",
			"00000072": 				"Het wachtwoord moet uit 16 ASCII tekens bestaan.",
			"00000073": 				"Het wachtwoord moet minder dan 64 tekens lang zijn.",

			"00000074": 				"Ongeldig bestandstype.",

			"00000075": 				"De PIN moet uit 8 tekens bestaan.",

			"00000076": 				"De invoer conflicteert met bestaande items, controleer trigger poort en trigger protocol.",
			"00000077": 				"IP-adres mag niet hetzelfde zijn als het LAN IP-adres.",
			"00000078": 				"Host IP-adres mag niet hetzelfde zijn als het LAN IP-adres.",

			"00000080": 				"Wachtwoorden zijn niet identiek. Probeer het opnieuw.",

			"00000088": 				"Deze bewerking is niet toegestaan voor beheer op afstand.",
			"00000089": 				"U hebt meer dan %num pogingen gehad,probeer het over twee uur nog eens.",

			"00000090": 				"De bestemming mag niet het LAN IP-adres zijn.",
			"00000091": 				"De bestemming mag niet het WAN IP-adres zijn.",

			"00000092": 				"Het IP-adres en het LAN IP-adres mogen niet in hetzelfde subnet zijn.<br/>Voer een andere waarde in.",
			"00000093": 				"Het IP-adres en het WAN IP-adres mogen niet in hetzelfde subnet zijn.<br/>Voer een andere waarde in.",

			"00000094": 				"De Vlan ID's mogen niet hetzelfde zijn.",
			"00000095": 				"Ten minste één ethernet aansluiting is vereist.",

			"00000096": 				"Het sleutelwoord is al aanwezig.",

			"00000097": 				"Configuraties uitgevoerd op de 2,4 GHz frequentieband worden pas van kracht nadat de Wi-Fi toets ingeschakeld is.",
			"00000098": 				"Configuraties uitgevoerd op de 5 GHz frequentieband worden pas van kracht nadat de Wi-Fi toets ingeschakeld is.",
			"00000099": 				"Configuraties uitgevoerd op de 2,4 GHz en 5 GHz frequentiebanden worden pas van kracht nadat de Wi-Fi toets ingeschakeld is.",

			"00000100": 				"De 5 GHz netwerk configuratie is niet beschikbaar vanwege de beperkingen in uw regio/land.",

			"00000101": 				"De draadloos functie is uitgeschakeld. Als u deze functie wilt gebruiken, moet u de Wi-Fi toets inschakelen.",
			"00000102": 				"De draadloos functie is uitgeschakeld. Als u deze functie wilt gebruiken, moet u de Wi-Fi toets inschakelen.",

			"00000103": 				"De draadloos functie is uitgeschakeld. Als u deze functie wilt gebruiken, moet u de Wi-Fi toets inschakelen.",
			"00000104": 				"De draadloos functie is uitgeschakeld.",

			"00000105": 				"QoS en IPTV kunnen niet tegelijkertijd ingeschakeld zijn.",

			"00000106": 				"IP-adres mag niet hetzelfde zijn als het LAN IP-adres.",
			
			"00000107": 				"De bestemming is al aanwezig.",

			"00000110": 				"Het IP-adres en het LAN IP-adres mogen zich niet in hetzelfde subnet bevinden.",
			
			"00000111": 				"QoS en <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> kunnen niet tegelijkertijd ingeschakeld zijn.",
			"00000112": 				"De WDS functie kan op de 2,4 GHz of 5 GHz band werken. Tevens is het Gasten netwerk niet beschikbaar op de WDS band.",
			"00000113": 				"WDS en Gasten netwerk kunnen niet tegelijkertijd ingeschakeld zijn.",
			"00000114": 				"Verkeersstatistieken en <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> kunnen niet tegelijkertijd ingeschakeld zijn.",
			"00000115": 				"IPTV en <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> kunnen niet tegelijkertijd ingeschakeld zijn.",

			"00000117": 				"De domeinnaam is al aanwezig.",
			"00000118": 				"Het aantal domeinnamen heeft de limiet overschreden.",
			"00000119":				"NAT Boost wordt uitgeschakeld wanneer ofwel <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> of <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Verkeersstatistieken</a> ingeschakeld wordt.",

			"00000120": 				"Het wachtwoord moet uit 5 of 13 ASCII-tekens bestaan.",
			"00000121": 				"Het wachtwoorde moet uit 10 of 26 hexadecimale tekens bestaan.",
			"00000122": 				"De gebruikersnaam en het wachtwoord zijn blanco. Weet u zeker dat u wilt doorgaan?",
			"00000123": 				"Opslaan… <br/>A.u.b. niet bedienen tijdens dit proces.",
			"00000124": 				"De PIN van de router is geblokkeerd vanwege herhaaldelijk verbinden m.b.v. onjuiste PIN. Maak een nieuwe aan.",

			"00000125": 				"Het aantal QoS regels heeft de limiet overschreden.",
			"00000126": 				"De bestandsgrootte heeft de limiet overschreden.",
			"00000127": 				"De inhoud van het bestand is onjuist.",
			"00000128": 				"Selecteer ten minste één applicatie.",
			"00000129": 				"Selecteer ten minste één fysieke poort.",
			"00000130":					"Uw WPS functie is uitgeschakeld.",
			"00000131": 				"NTP Server mag geen loopback adres hebben.",
			"00000132": 				"Modus wisselen mislukt. Probeer het later opnieuw, of start de router opnieuw op.",
			"00000133": 				"Ongeldig DMZ Host IP-adres. Voer een geldig adres in.",
			"00000134":  				"Ongeldig Intern IP. Voer een geldig adres in.",
			"00000135": 				"Firmware bestand fout.",
			"00000136": 				"Backup bestand fout.",
			"00000137": 				"De gebruikersnaam is blanco; weet u zeker dat u wilt doorgaan?",
			"00000138": 				"Het wachtwoord is blanco; weet u zeker dat u wilt doorgaan?",
			"00000139": 				"Onjuiste parameters voor wachtwoord opvragen.",
			"00000140": 				"Onjuiste code.",
			"00000141": 				"Wachtwoord opvragen is uitgeschakeld.",
			"00000142": 				"De code is niet verzonden. Controleer uw Internet verbinding.",
			"00000143": 				"Ongeldige e-mailadressen.",
			"00000144": 				"Ongeldig e-mailbericht.",
			"00000145": 				"Kon de host niet vinden.",
			"00000146": 				"Verificatie mislukt.",
			"00000147": 				"De poort moet tussen 1 en 65535 zijn.",
			"00000148": 				"Voor een poort reeks, dient het startende poort nummer lager te zijn dan het eind poort nummer. Gelieve nogmaals invoeren.",
			"00000149": 				"Poortnummers overlappen elkaar. Gelieve nogmaals invoeren.",
			"00000150": 				"Ongeldig subnetmasker en WAN IP-adres. Voer een andere waarde in.",
			"00000151": 				"Selecteert u minstens 1 dag.",
			"00000152": 				"Stel de Internet toegangstijd in.",
			"00000213":					"DNS server IP-adres en LAN IP-adres kunnen zich niet in hetzelfde subnet bevinden. <br/>Gelieve een andere invoeren.",
			"10000139": 				"Geen Internet verbinding",
			"10000140": 				"Time-out. Controleer uw Internet verbinding en probeer het later nogmaals.",
			"10000158": 				"De WAN poort is niet aangesloten.",
			"10000159": 				"Verbinden met het Internet mislukt. Neem contact op met uw service provider of probeer het later nogmaals.",
			"10000160": 				"Kan geen IP adres van de DHCP server verkrijgen. Controleer uw WAN verbindings type of probeer het later nogmaals.",
			"10000161": 				"PPPoE authenticatie mislukt. Controleer uw gebruikersnaam en wachtwoord.",
			"10000162": 				"Verbinden met de PPPoE server mislukt.",

			"10000164": 				"PPTP authenticatie mislukt. Controleer uw gebruikersnaam en wachtwoord.",
			"10000165": 				"Verbinden met PPTP server mislukt.",

			"10000167": 				"L2TP authenticatie mislukt. Controleer uw gebruikersnaam en wachtwoord.",
			"10000168": 				"Verbinden met L2TP server mislukt.",
			"10000169": 				"Onbekende fout. Probeer het later nogmaals.",
			"10000172": 				"Verbinden mislukt.",

			"10000185": 				"Systeem fout.",	
			"10000186": 				"Firmware bestand fout.",	
			"10000187": 				"Firmware download fout.",	
			"10000188": 				"Firmware upgrade fout.",	
			"10000191": 				"Niet in staat om het firmware bestand te downloaden.",
			"10000192": 				"Firmware upgrade fout.",
			"10000193": 				"Niet in staat om te verbinden met de server.",	
			"10000194": 				"Niet mogelijk om te verbinden met de cloud server. Probeer het later nogmaals.",
			"10000195": 				"U kunt het wachtwoord niet opnieuw instellen omdat u er al reeds één heeft ingesteld.",
			
			"E3002":                    "Time-out", 
			"E10000": 					"Voorkomende fout",
			"E20002": 					"Time-out",
			"E20003": 					"De cloud server is bezig. Probeer het later nogmaals.",
			"E20107": 					"Ongeldige invoer.",
			"E20200": 					"Ongeldig email formaat.",
			"E20502": 					"Niet mogelijk om het apparaat te binden. Probeer het later nogmaals.",
			"E20503": 					"Niet mogelijk om het apparaat de ontbinden. Probeer het later nogmaals.",
			"E20506": 					"Bewerking mislukt. Het apparaat is al reeds gebonden aan een ander cloud account.",
			"E20507": 					"Dit apparaat is ontbonden van het account.",
			"E20508": 					"Het aantal gebonden accounts heeft reeds het maximum limiet bereikt.",
			"E20509": 					"Gebruikersaccounts hebben het recht niet om nieuwe gebruikers te binden.",
			"E20571": 					"Het apparaat is offline.",
			"E20580": 					"Bewerking mislukt. Dit account is niet gebonden aan het apparaat.",
			"E20600": 					"Deze email is niet geregistreerd.",
			"E20601": 					"Gebruikersnaam of wachtwoord onjuist.",
			"E20602": 					"Dit account is nog niet geactiveerd.",
			"E20603": 					"Deze email is al reeds geregistreerd.",
			"E20604": 					"Ongeldige gebruikersnaam. Gelieve een email adres of telefoon nummer invoeren.",
			"E20606": 					"Niet mogelijk om een activatie email naar het account te versturen.",
			"E20615": 					"Ongeldig wachtwoord. Gelieve 6-32 ASCII tekens zonder spaties invoeren.",
			"E20616": 					"Ongeldig wachtwoord. Gelieve 6-32 ASCII tekens zonder spaties invoeren.",
			"E20617": 					"Dit account bestaat niet.",
			"E20618": 					"Dit account bestaat niet.",
			"E20620": 					"Ongeldige bijnaam. Gelieve 1-65 tekens invoeren.",
			"E20661": 					"Dit account wordt geblokkeerd gedurende 2 uur te wijten aan overmatig inlogpogingen (20 keer in een half uur).",
			"E20662": 					"Het apparaat is geblokkeerd. In de volgende 24 uur zal het apparaat niet reageren op elk verificatie code aanvraag.",
			"E20671": 					"Niet mogelijk om het account te verifiëren.",
			"E20672": 					"Niet mogelijk om het account te verifiëren. De account activatie link is verlopen. Gelieve een nieuwe aanvraag voorleggen.",
			"E20673": 					"Het wachtwoord reset link is verlopen. Gelieve een nieuwe aanvraag voorleggen.",
			"E20674": 					"Niet mogelijk om het wachtwoord te resetten.",
			"E20675": 					"Dit account is momenteel ergens anders ingelogd.",
			"E22000": 					"Ongeldige invoer.",
			"E22001": 					"Domeinnaam is reeds geregistreerd.",
			"E22002": 					"Het aantal geregistreerde domeinnamen heeft reeds het maximum limiet bereikt.",
			"E22003": 					"Het aantal gebonden domeinnamen heeft het maximum limiet bereikt.",
			"E22004": 					"Deze domeinnaam is al reeds gebonden aan een ander apparaat.",
			"E22006": 					"Systeem error. Probeer het later nogmaals.",
			"E22007": 					"Domein naam bevat gevoelige woorden. Gelieve een andere proberen.",
			"E22008": 					"Domeinnaam bestaat niet.",

			"E50101": 					"De WAN poort is niet aangesloten.",
			"E50102": 					"Niet mogelijk om te verbinden met het internet. Neem contact op met uw service provider of probeer het later opnieuw.",
			"E50103": 					"Kan geen IP adres van de DHCP server verkrijgen. Controleer uw WAN verbindings type of probeer het later nogmaals.",
			"E50111": 					"PPPoE authenticatie mislukt. Controleer uw gebruikersnaam en wachtwoord.",
			"E50112": 					"Verbinden met de PPPoE server mislukt.",
			"E50121": 					"PPTP authenticatie mislukt. Controleer uw gebruikersnaam en wachtwoord.",
			"E50122": 					"Verbinden met PPTP server mislukt.",
			"E50131": 					"L2TP authenticatie mislukt. Controleer uw gebruikersnaam en wachtwoord.",
			"E50132": 					"Verbinden met L2TP server mislukt.",
			"E50140": 					"Onbekende fout. Probeer het later nogmaals.",
			"E51215": 					"Time-out. Controleer uw Internet verbinding en probeer het later nogmaals.",
			"E_CLOUD_SERVER": 			"Server fout. Gelieve later nogmaals proberen.",
			"E5000": 					"Het is niet mogelijk om te verbinden met de cloud server.",
			"E5001": 					"Onjuist TP-Link ID (email.) Of uw apparaat is offline en alleen de administrator (%email) heeft offline toegang.",
			"E5002": 					"Onjuist wachtwoord."
		},

		MENU: {
			STATUS: 					"Status",
			NETWORK: 					"Netwerk",
			NETWORK_MAP: 				"Netwerk overzicht",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP server",
			DYNAMIC_DNS: 				"Dynamisch DNS",
			ADVANCED_ROUTING: 			"Geavanceerde routering",

			WIRELESS: 					"Draadloos",
			WIRELESS_SETTINGS: 			"Draadloze instellingen",
			WDSBRIDGING: 				"WDS-brug",
			WPS: 						"WPS",
			MACFILTERING: 				"MAC filterregel",
			WIRE_STATISTICS: 			"Statistieken",
			
			
			GUEST_NETWORK: 				"Gastnetwerk",
			WIRELESS_SETTINGS: 			"Draadloze instellingen",
			STORAGE_SHARING: 			"Opslag delen",
			NAT_FORWARDING: 			"NAT Forwarding",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Virtuele servers",
			PORT_TRIGGERING: 			"Poort triggering",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"USB-instellingen",
			BASIC_SET: 					"Basis instellingen",
			DISK_SET: 					"Apparaatinstellingen",
			FOLDER_SHARING: 			"Toegang delen",
			STORAGE_SHARING: 			"Opslag delen",
			FTP_SERVER: 				"FTP Server",
			MEDIA_SERVER: 				"Media server",
			PRINT_SERVER: 				"Print server",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Ouderlijk toezicht",
			
			QOS:  						"QoS",
			DATABASE:  					"Database",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Map",
			SB_MAP: 					"Map",
			SB_BANDWIDTH:  				"Bandbreedte",
			SB_PRIORITY: 				"Prioriteit",
			SB_STATISTICS: 				"Statistieken",

			
			SECURITY: 					"Beveiliging",
			SETTINGS: 					"Instellingen",
			ACCESS_CONTROL: 			"Toegangscontrole",
			IP_MAC_BINDING: 			"IP&MAC Binding",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Systeemfuncties",
			TIME_SETTINGS: 				"Tijd instellingen",
			DIAGNOSTIC: 				"Diagnose",
			FIRMWARE_UPGRADE: 			"Firmware upgrade",
			BACKUP_RESTORE: 			"Backup en terugzetten",
			ADMINISTRATION: 			"Beheer",
			SYSTEM_LOG: 				"Systeemlog",
			STATISTICS: 				"Verkeersstatistieken",
			SYSTEM_PARAMETERS: 			"Systeem parameters",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"VPN Server",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"VPN verbindingen"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Regio en tijdzone",
			INTERNET_CONNECTION_TYPE: 	"Type Internetverbinding",
			WIRELESS_SETTINGS: 			"Draadloze instellingen",
			SUMMARY: 					"Samenvatting",
			SETUP_COMPLETE: 			"Internet verbinding testen",
			SETUP_COMPLETE_CLOUD: 			"TP-Link Cloud Service",

			EXIT: 						"Afsluiten",
			NEXT: 						"Volgende",
			SAVE: 						"Opslaan",
			FINISH: 					"Voltooien",
			OK: 						"OK",
			NONE: 						"Detectie mislukt.",

			REGION: 					"Regio",
			TIME_ZONE: 					"Tijdzone",

			AUTO_DETECT: 				"Auto-detecteren",
			DYNAMIC_IP: 				"Dynamisch IP",
			STATIC_IP: 					"Statisch IP",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Als u niet zeker weet welke type Internetverbinding u heeft, maak dan gebruik van het Auto-detectie functie of neem contact op met uw ISP voor verdure hulp.",

			DYNAMIC_IP_INFO: 			"Als uw ISP alleen Internet toegang tot een specifiek MAC-adres toestaat, moet u dat MAC-adres klonen om andere apparaten toegang te geven. Als u het niet zeker weet, selecteert u NIET het MAC-adres klonen.",
			MAC_CLONE_NO: 				"NIET het MAC-adres klonen",
			MAC_CLONE_YES: 				"MAC-adres van huidige computer klonen",
			MAC_CLONE_NOTE: 			"Als u MAC-adres klonen selecteert, moet u controleren of het MAC-adres van deze computer bij uw ISP is geregistreerd voordat u op Volgende klikt.",

			PPPOE_INFO: 				"Voer uw PPPoE gebruikersnaam en wachtwoord in.",
			
			STATIC_IP_INFO: 			"Voer uw IP-gegevens in.",

			L2TP_INFO: 					"Voer uw L2TP gebruikersnaam en wachtwoord in.",
			PPTP_INFO: 					"Voer uw PPTP gebruikersnaam en wachtwoord in.",
			
			USERNAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			SERVER_IP_ADDRESS_NAME: 	"VPN Server IP/Domeinnaam",
			IP_ADDRESS: 				"IP-adres",
			SUBNET_MASK: 				"Subnetmasker",
			DEFAULT_GATEWAY: 			"Standaard gateway",
			PRIMARY_DNS: 				"Primaire DNS",
			SECOND_DNS: 				"Secundaire DNS",
			OPTIONAL: 					"(Optioneel)",
			
			ON: 						"Aan",
			OFF: 						"Uit",
			WIRELESS_24GHZ: 			"Draadloos 2,4 GHz",
			WIRELESS_5GHZ: 				"Draadloos 5 GHz",
			ENABLE_WIRELESS_RADIO: 		"Draadloze radio inschakelen",
			NAME_SSID: 					"Naam draadloos netwerk (SSID)",

			SUMMARY_INFO1: 				"Uw draadloze apparaten moeten opnieuw met het nieuwe draadloze netwerk verbinding hebben gemaakt voordat u de op de knop <strong>Volgende</strong> klikt.",
			SUMMARY_INFO2: 				"Uw draadloze netwerk naam en wachtwoord zijn gewijzigd zoals hieronder getoond",
			SUMMARY_INFO3: 				"Controleer of u met het nieuwe draadloze netwerk verbonden bent.",

			WIRELESS_24GHZ_SSID: 		"Draadloos 2,4 GHz naam (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Draadloos 2,4 GHz wachtwoord",
			WIRELESS_5GHZ_SSID: 		"Draadloos 5 GHz naam (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Draadloos 5 GHz wachtwoord",

			SORRY: 						"Mislukt.",
			SUCCESS: 					"Succes!",
			TEST_INTERNET_SUCCESS_INFO: "Geslaagd! Klik op Voltooien om snelle instellingen te voltooien.",

			TEST_INTERNET_FAILED_INFO_0:"Controleer of alle parameters van Snelle instelling correct zijn en probeer het opnieuw. Als alle parameters van Snelle instelling correct zijn, start u het modem opnieuw, wacht u 2 minuten en klikt u nogmaals op Internet verbinding testen. Als u geen modem gebruikt, moet u mogelijk met uw Internet Service Provider (ISP) contact opnemen voor hulp.",
			TEST_INTERNET_FAILED_INFO_1: "Oeps… De internetverbinding is niet succesvol geconfigureerd.<br/> 1. Wees er zeker van dat alle kabels correct aangesloten zijn.<br /> 2. Klik op Terug en verifiëer dat de internetverbinding informatie juist is.<br /> 3. Neem contact op met onze Technische Support wanneer het probleem blijft aanhouden.",
			SUMMARY_INFO4: 				"Sorry! Wij detecteren dat u uw draadloze apparaat nog niet opnieuw met het nieuwe draadloze netwerk verbonden hebt. Doe dit a.u.b. en klik daarna op <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Gefeliciteerd!",
			COMPLETE_INFO_0: 			"U heeft de Snelle instelling voltooid.",
			COMPLETE_INFO_1:			"Klik op Internet verbinding testen hieronder en daarna op Voltooien.",
			COMPLETE_INFO_2: 			"U bent niet ingelogd op uw TP-Link Cloud account. U kunt later inloggen vanuit Basic> TP-Link Cloud.",
			TEST_INTERNET: 				"Internet verbinding testen",

			
			RESET_USER_TITLE: 			"Nieuwe gebruikersnaam en wachtwoord instellen",
			NEW_USERNAME: 				"Nieuwe gebruikersnaam",
			NEW_PASSWORD: 				"Nieuw wachtwoord",
			CONFIRM_PASSWORD: 			"Nieuw wachtwoord bevestigen",
			
			NO_ACCOUNT: 				"Geen TP-Link ID?",
			REGISTER_NOW: 				"Nu registreren.",
			REGISTER_SKIP: 				"Log later in.",
			LOGIN: 						"Login",
			REGISTER_NEW:				"Een nieuw account registreren",
			COMPLETE_INFO_EMAIL_PREFIX: "Uw TP-Link ID is:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Wij raden u sterk aan dat u inlogt door gebruik te maken van dit account voor het gemakkelijk beheren van uw apparaat en meer TP-Link Cloud functies.",

			INTERNET_OK: 				"Gefeliciteerd! Netwerk succesvol ingesteld. Geniet van het internet.",
			CLOUD_WIZARD: 				"Voor meer TP-Link Cloud functies, log in met uw <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "Met een TP-Link ID kunt u:", 
			ACCOUNT_DESP_SUB1:          "Toegang krijgen tot uw apparaat en lokale servers (FTP, HTTP, etc) overal via het internet.",
			ACCOUNT_DESP_SUB2:          "Houdt uw firmware altijd up to date met de Online Upgrade functie.",
	        ACCOUNT_DESP_SUB3:          "Beheer meerdere apparaten met slechts één account.",
			
			CONFIRM: 					"Bevestigen"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Internet status",

			GHZ24: 						"2,4 GHz",
			GHZ5: 						"5 GHz",
			
			CONNECTION_TYPE: 			"Type verbinding",
			SECONDARY_CONN: 			"Secundaire verbinding",

			POOR_CONNECTED: 			"Slechte verbinding",
			UNPLUGGED: 					"Er is niets op de WAN-aansluiting aangesloten.",
			
			CONNECTED: 					"Verbonden",
			DISCONNECTED: 				"Verbroken",

			INTERNET_IP_ADDR: 			"IP-adres",
			
			IP_ADDR: 					"IP-adres",
			MAC_ADDR: 					"MAC-adres",
			GATEWAY: 					"Gateway",

			AUTO: 						"Auto",
			
			ROUTER: 					"Router",
			WIRELESS_CLIENTS: 			"Draadloze clients",
			HOST_CLIENTS: 				"Host clients",
			GUEST_CLIENTS: 				"Gast clients",
			WIRE_CLIENTS: 				"Bekabelde clients",
			PRINTER: 					"Printer",
			USB_DISK: 					"USB-schijf",
			WIRELESS: 					"Draadloos",
			NAME: 						"Naam",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Kanaal",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Draadloos 2,4 GHz",
			WIRELESS_5GHZ: 				"Draadloos 5 GHz",
			
			GUEST_24GHZ: 				"Gasten netwerk 2,4 GHz",
			GUEST_5GHZ: 				"Gasten netwerk 5 GHz",
			
			STATUS: 					"Status",
			TOTAL: 						"Totaal",
			AVAILABLE: 					"Beschikbaar",
			GB: 						"GB",
			BRAND: 						"Merk",

			DYNAMIC_IP: 				"Dynamisch IP",
			STATIC_IP: 					"Statisch IP",
			SUBNET_MASK: 				"Subnetmasker",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond kabel",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 Tunnel",
			NONE: 						"Geen"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Auto-detecteren",
			INTERNET_CONN_TYPE: 		"Type Internetverbinding",
			DYNAMIC_IP: 				"Dynamisch IP",
			STATIC_IP: 					"Statisch IP",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond kabel",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"Er is niets op de WAN-aansluiting aangesloten.",
			NONE: 						"Geen",
			DETECT_FAIL: 				"Auto-detecteren mislukt",
			SECONDARY_CONN: 			"Secundaire verbinding",

			DYNAMIC_YES: 				"NIET het MAC-adres klonen",
			DYNAMIC_NO: 				"MAC-adres van huidige computer klonen",
			
			IP_ADDR: 					"IP-adres",
			SUBNET_MASK: 				"Subnetmasker",
			DEFAULT_GATEWAY: 			"Standaard gateway",
			PRIMARY_DNS: 				"Primaire DNS",
			SECOND_DNS: 				"Secundaire DNS",
			OPTIONAL: 					"(Optioneel)",
			USER_NAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			SERVER_IP_ADDR_NAME: 		"VPN Server IP/Domeinnaam",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Als u niet zeker weet welke type Internetverbinding u heeft, maak dan gebruik van het Auto-detectie functie of neem contact op met uw ISP voor verdure hulp."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Draadloze instellingen",
			MODE_2G: 					"Draadloos 2,4 GHz",
			MODE_5G: 					"Draadloos 5 GHz",
			WIRELESS_NETWORK_NAME: 		"Naam draadloos netwerk (SSID)",
			WIRELESS_PASSWORD: 			"Wachtwoord",
			ENABLE_WIRELESS: 			"Draadloze radio inschakelen",
			SAVE: 						"Opslaan",
			ENCRYPTION_2G_NOTICE:		"2,4 G versleuteling is %s.",
			ENCRYPTION_5G_NOTICE:		"5 G versleuteling is %s.",
			ENCRYPTION_2G_NO: 			"2,4 GHz draadloos netwerk is niet versleuteld.",
			ENCRYPTION_5G_NO: 			"5 GHz draadloos netwerk is niet versleuteld.",
			ENCRYPTION_SURE: 			"Weet u zeker dat u wilt doorgaan?",

			HIDE_SSID: 					"SSID verbergen"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Basis instellingen",
			TITIL_NEW:					"Schijf en account",
			DISK_SET:					"Apparaatinstellingen",

			SELFLY_REMOVE:				"Veilig verwijderen",
			SCANING:					"Scannen…",
			SCAN_RESULT:				"%n schijven gevonden",
			
			DISKS:						"Schijven",
			USERS: 						"Gebruikersaccount",
			DEVICENAME: 				"Naam apparaat",
			VOLUMN: 					"Volume",

			USBSPACE: 					"Gebruikte ruimte",
			FREESPACE: 					"Vrije ruimte",
			STATUS: 					"Status",
			INACT: 						"Deactiveren",
			USAGE: 						"Gebruik",
			CAPACITY: 					"Capaciteit",
			OPERATION: 					"Werking",
			
			ACC: 						"Accountbeheer",
			USERNAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			USE_LOGIN: 					"Gebruik login van gebruiker",
			SCAN: 						"Scannen",
			ENJECT_ALL: 				"Alle uitwerpen",
			ENJECT: 					"Uitwerpen",
			ADD_USER: 					"Gebruiker toevoegen",
			AUTH: 						"Autoriteit",


			LOCATION: 					"Locatie",
			MOBILE_ISP: 				"Mobiel ISP",
			DIAL_NUMBER: 				"Kies nummer",
			APN: 						"APN",
			USERNAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			MTU_SIZE: 					"MTU grootte (in bytes)",
			OPTIONAL: 					"(Optioneel)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Ouderlijk toezicht",

			DEVICE_CTR: 				"Apparaten onder ouderlijk toezicht",
			ID: 						"ID",
			DEVICE: 					"Naam apparaat",
			MAC_ADDRESS: 				"MAC-adres",
			TIME: 						"Internet toegangstijd",
			DESCRIPTION: 				"Beschrijving",
			ENABLE: 					"Inschakelen",
			ENABLE_THIS_ENTRY: 			"Inschakelen",
			OPTIONAL: 					"(Optioneel)",
			BTN_VIEW: 					"Aanwezige apparaten bekijken",
			ACCESS_DEVICES_LIST: 		"Apparatenlijst",
			OPT: 						"Werking",
			STATUS: 					"Status"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Gastnetwerk",
			MODE_2G: 					"Draadloos 2,4 GHz",
			MODE_5G: 					"Draadloos 5 GHz",
			WIRELESS_NETWORK_NAME: 		"Naam draadloos netwerk (SSID)",
			WIRELESS_PASSWORD: 			"Wachtwoord",
			ENABLE_WIRELESS: 			"Gastnetwerk inschakelen",
			SAVE:						"Opslaan",
			HIDE_SSID: 					"SSID verbergen"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Cloud account",
			OFFLINE_NOTE_TITLE: 		"Apparaat offline.",
			LOGIN_NOTE_TITLE: 			"Oeps…",
			LOGIN_OFFLINE_NOTE: 		"Het apparaat is offline. Gelieve de WAN en netwerk configuraties controleren om er zeker van te zijn dat de passende instellingen juist zijn ingevoerd.",

			EMAIL: 						"Email",
			PASSWORD: 					"Wachtwoord",
			FORGET_PASSWORD: 			"Wachtwoord vergeten?",

			CLOUD_WIZARD: 				"Voor meer TP-Link Cloud functies, log in met uw <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"Geen TP-Link ID?",
			REGISTER_NOW: 				"Nu registreren."
		},
		STATUS: {
			TITLE: 						"Status",
			INTERNET:					"Internet",
			WIRELESS:					"Draadloos",
			LAN:						"LAN",
			USB_TITLE:					"USB-apparaten",
			PERFORMANCE: 				"Prestaties",
			GUEST_NETWORK: 				"Gastnetwerk",
			ACCESS_DEVICES: 			"Toegang apparaten",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2,4 GHz",
			HZ5G: 						"5 GHz",

			CONNECTION_TYPE: 			"Type verbinding",

			MAC_ADDRESS: 				"MAC-adres",
			IP_ADDRESS: 				"IP-adres",
			RELEASE: 					"Vrijgeven",
			RENEW: 						"Vernieuwen",
			
			DYNAMIC_IP: 				"Dynamisch IP",
			STATIC_IP: 					"Statisch IP",
			SUBNET_MASK: 				"Subnetmasker",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond kabel",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 Tunnel",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass-Through (Bridge)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Geen",
			
			DEFAULT_GATEWAY: 			"Standaard gateway",
			DNS: 						"DNS Server",
			MAC: 						"MAC-adres",
			WDS_STATUS: 				"WDS status",
			
			IPV6_ADDRESS: 				"IP-adres",
			PRIMARY_DNS: 				"Primaire DNS",
			SECOND_DNS: 				"Secundaire DNS",

			RADIO: 						"Draadloze radio",

			NAME_SSID: 					"Naam (SSID)",
			NETWORK_NAME_SSID:			"Naam draadloos netwerk (SSID)",
			HIDE_SSID: 					"SSID verbergen",
			MODE: 						"Modus",
			CHANNEL: 					"Kanaal",
			CHANNEL_WIDTH: 				"Kanaal breedte",
			AUTO: 						"Auto",
			CURRENT_CHANNEL: 			"Huidige kanaal",

			WDS: 						"WDS status",
			WIRED_CLIENTS: 				"Bekabelde clients",
			WIRELESS_CLIENTS: 			"Draadloze clients",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Link-local adres",
			ASSIGN_TYPE: 				"Toegewezen type",

			ALLOW_TO_SEE_EACH: 			"Gasten mogen elkaar zien",

			TOTAL: 						"Totaal",
			AVAILABLE: 					"Beschikbaar",

			USB: 						"USB-schijf",
			PRINTER: 					"Printer",

			CPU_LOAD: 					"CPU belasting",
			MEMORY_USAGE: 				"Geheugengebruik",

			IP_ADDR_P: 					"IP-adres",
			MAC_ADDR_P: 				"MAC-adres",
			CONN_TYPE_P: 				"Type verbinding",

			DISABLED: 					"Uitgeschakeld",
			INIT: 						"Init",
			SCAN: 						"Scannen",
			AUTH: 						"Ver",
			ASSOC: 						"Toew",
			RUN: 						"Start",
			HOST: 						"Host",
			GUEST: 						"Gast",

			ON: 						"Aan",
			OFF: 						"Uit"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Type Internetverbinding",
			INTERNET_MAC_ADDRESS: 		"MAC-adres",
			
			CONNECT: 					"Verbinden",
			DISCONNECT: 				"Verbreken",
			
			IP_ADDR: 					"IP-adres",
			
			USE_DEFAULT_MAC: 			"Standaard MAC-adres gebruiken",
			USE_COMPUTER_MAC: 			"MAC-adres van huidige computer gebruiken",
			USE_CUSTOM_MAC: 			"Aangepast MAC-adres gebruiken",
			MAC_CLONE: 					"MAC klonen",
			
			CONFIG: 					"Config",
			
			IP_ADDRESS: 				"IP-adres",
			SUBNET_MASK: 				"Subnetmasker",
			DEFAULT_GATEWAY: 			"Standaard gateway",
			
			MANUAL_DNS: 				"Handmatige DNS",
			PRIMARY_DNS: 				"Primaire DNS",
			SECOND_DNS: 				"Secundaire DNS",
			
			RENEW: 						"Vernieuwen",
			RELEASE: 					"Vrijgeven",
			VIEW_MODE: 					"Bekijk modus",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Krijg dynamisch van ISP",
			USE_FOLLOW_IP_ADDR: 		"Gebruik het volgende IP-adres",
			USE_FOLLOW_DNS_ADDR: 		"Gebruik de volgende DNS-adressen",
			USE_FOLLOW_DNS_SERVER: 		"Gebruik de volgende DNS server",
			
			BASIC: 						"Basis",
			ADVANCED: 					"Geavanceerd",
			
			DNS_ADDR_MODE: 				"DNS-adres",
			MTU_SIZE: 					"MTU grootte",
			MTU_1500: 					"bytes. (Standaard is 1500, niet wijzigen tenzij noodzakelijk.)",
			MTU_1480: 					"bytes. (Standaard is 1480, niet wijzigen tenzij noodzakelijk.)",
			MTU_1460: 					"bytes. (Standaard is 1460, niet wijzigen tenzij noodzakelijk.)",
			MTU_1420: 					"bytes. (Standaard is 1420, niet wijzigen tenzij noodzakelijk.)",
			
			HOST_NAME: 					"Host naam",

			HOST_NAME_CONFIRM: 			"De host-naam bevat ongeldige tekens, die onverwacht systeemgedrag kunnen veroorzaken. Weet u zeker dat u wilt doorgaan?",

			GET_IP_WITH_UNICAST_DHCP: 	"Verkrijg IP m.b.v. Unicast DHCP (is meestal niet nodig.)",
			OPTIONAL: 					"(Optioneel)",
			
			STATIC_IP: 					"Statisch IP",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			
			INTERNET_IP_ADDR: 			"IP-adres",
			INTERNET_DNS: 				"Internet DNS",
			SECONDARY_CONN: 			"Secundaire verbinding",
			NONE: 						"Geen",
			INTERNET_PRIMARY_DNS:		"Primaire DNS",
			INTERNET_SECONDARY_DNS: 	"Secundaire DNS",
			
			DYNAMIC_IP: 				"Dynamisch IP",
			DYNAMIC_IP_v6: 				"Dynamisch IP (SLAAC/DHCPv6)",
			STATIC_IP: 					"Statisch IP",
			SERVICE_NAME: 				"Service naam",
			ACCESS_CONCENTRATOR_NAME:  	"Access Concentrator naam",
			DETECT_ONLINE_INTERVAL: 	"Online interval detecteren",
			INTERVAL_TIPS: 				"seconden. (0-120. Standaard is 10.)",
			IP_ADDR_MODE:  				"IP-adres",
			CONN_MODE: 					"Verbindingsmodus",
			DHCP_LINK_UNPLUGGED: 		"Er is niets op de WAN-aansluiting aangesloten.",
			
			AUTO: 						"Auto",
			ON_DEMAND: 					"Op aanvraag",
			TIME_BASED: 				"Tijdbasis",
			MANUALLY: 					"Handmatig",
			MAX_IDLE_TIME: 				"Max. tijd inactief",
			MAX_IDLE_TIME_TIPS: 		"minuten. (0 betekent altijd actief.)",
			PERIOD_OF_TIME: 			"Periode",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"BigPond kabel",
			AUTH_SERVER: 				"Ver. Server",
			AUTH_DOMAIN: 				"Ver. Domein",
			L2TP: 						"L2TP",
			GATEWAY: 					"Gateway",
			SERVER_IP_ADDR_NAME: 		"VPN Server IP/Domeinnaam",
			PPTP: 						"PPTP",
			TO: 						"naar",
			
			TUNNEL_6TO4: 				"6to4 Tunnel",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Niet-tijdelijk IPv6 adres verkrijgen",
			GET_PREFIX_DELEGATION: 		"IPv6 voorvoegsel delegatie verkrijgen",
			IPV6_ADDR: 					"IPv6 adres",

			GET_IPV6_WAY: 				"IPv6 adres verkrijgen",
			AUTOMATICALLY: 				"Automatisch verkrijgen",
			SPECIFIED_BY_ISP: 			"Opgegeven door ISP",

			IPV6_ADDR_PREFIX: 			"IPv6 adres voorvoegsel",
			NONE_TEMPORARY: 			"Niet-tijdelijk",

			PREFIX_DELEGATION: 			"Voorvoegsel delegatie",
			ENABLE: 					"Inschakelen",
			DISABLE: 					"Uitschakelen",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"IPv4 masker lengte",
			CONFIG_TYPE: 				"Type configuratie",
			RD6_PREFIX: 				"6RD voorvoegsel",
			RD6_PREFIX_LENGTH: 			"6RD voorvoegsel lengte",
			REPLY_IPV4_ADDR: 			"Border Reply IPv4 adres",
			MANUAL: 					"Handmatig",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass-Through (Bridge)",
			LOCAL_IPV6: 				"Lokaal IPv6 adres",
			PEER_IPV6: 					"Peer IPv6 adres",
			TUNNEL_ADDR: 				"Tunnel adres",
			IPV4_NETMASK: 				"IPv4 netmasker",
			CUSTOM: 					"Aangepast",
		    AFTR_NAME: 					"AFTR naam",
			PPP_SHARE_V6:				"PPPoE zelfde sessie met IPv4 verbinding",
			PPP_SHARE_V4:				"PPPoE zelfde sessie met IPv6 verbinding",

			
			
			IPV4_ADDR: 					"IPv4 adres",
			IPV4_MASK: 					"IPv4 subnetmasker",
			IPV4_GATEWAY: 				"IPv4 standaard gateway",
			TUNNEL_ADDR: 				"Tunnel adres",

			DUPLEX: 					"Duplex",
			AUTO_NEGOTIATION: 			"Auto Negotiation",
			FULL_DUPLEX_1000: 			"1000 Mbps full duplex",
			HALF_DUPLEX_1000:			"1000 Mbps half duplex",
			FULL_DUPLEX_100: 			"100 Mbps full duplex",
			HALF_DUPLEX_100: 			"100 Mbps half duplex",
			FULL_DUPLEX_10: 			"10 Mbps full duplex",
			HALF_DUPLEX_10: 			"10 Mbps half duplex"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"MAC-adres",
			IP_ADDRESS: 				"IP-adres",
			SUBNET_MASK: 				"Subnetmasker",
			CUSTOM: 					"Aangepast",

			IGMP: 						"IGMP Proxy inschakelen",
			

			ASSIGNED_TYPE: 				"Toegewezen type",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Stateless DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Adres voorvoegsel",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Adres",
			DELEFATED: 					"Gedelegeerd",
			STATIC: 					"Statisch",
			SITE_PREFIX: 				"Site voorvoegsel",
			SITE_PREFIX_LEN: 			"Lengte site voorvoegsel",

			PREFIX_TYPE:  				"Configuratie type site voorvoegsel",
			LAN_IPV6_ADDR:  			"LAN IPv6 adres",

			RELEASE_TIME: 				"Vrijgeeftijd",
			RELEASE_TIME_TIP: 			"seconden. (Standaard is 86400, niet wijzigen tenzij noodzakelijk.)",
			ADDRESS:					"Adres",
			SAVE: 						"Opslaan",

			REBOOT_TIP: 				"De router gaat naar de nieuwe inlogpagina <br/>Even geduld…"

		},

		IPTV:{
			TITLE: 						"Instellingen",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "IPTV inschakelen", 
			MODE:  						"Modus",
			IGMP_PROXY: 				"IGMP proxy",
			IGMP_VERSION: 				"IGMP versie",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Brug",
			BASIC: 						"Aangepast",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Rusland",
			UNIFY:  					"Maleisië-Unifi",
			MAXIS:  					"Maleisië-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internet",
			IP_PHONE: 					"IP-telefoon", 

			Q_TAG: 						"802.1Q Tag",
			ENABLE: 					"Inschakelen",
			
			INTERNET_VLAN_ID: 			"Internet Vlan ID",
			INTERNET_VLAN_PRIORITY: 	"Internet Vlan prioriteit",
			IP_PHONE_VLAN_ID: 			"IP-telefoon Vlan ID",
			IP_PHONE_VLAN_PRIORITY: 	"IP-telefoon Vlan prioriteit",
			IPTV_VLAN_ID: 				"IPTV Vlan ID",
			IPTV_VLAN_PRIORITY: 		"IPTV Vlan prioriteit",
			IPTV_MULTI_VLAN_ID: 		"IPTV Multicast Vlan ID",
			IPTV_MULTI_VLAN_PRIORITY: 	"IPTV Multicast Vlan prioriteit"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP server",
			
			SETTINGS: 					"Instellingen",

			DHCP_SERVER: 				"DHCP server",
			ENABLE_DHCP_SERVER: 		"DHCP server inschakelen",

			IP_ADDR_POOL: 				"IP-adres pool",
			LEASETIME: 					"Adres lease-tijd",
			LEASENOTE: 					"minuten. (1-2880. Standaard waarde is 120.)",
			
			GATEWAY: 					"Standaard gateway",
			DOMAIN: 					"Standaard domein",
			PRIMARYDNS: 				"Primaire DNS",
			SECONDARYDNS: 				"Secundaire DNS",

			OPTIONAL: 					"(Optioneel)",

			CLIENTSLIST: 				"DHCP Client Lijst",
			CLIENT_NUMBER: 				"Cliënt nummer",
			CLIENT_NAME: 				"Naam client",
			MAC_ADDR: 					"MAC-adres",
			ASSIGNED_IP: 				"Toegewezen IP-adres",
			LEASE_TIME: 				"Lease-tijd",

			RESERVATION: 				"Adres reservering",

			RESERVED_IP: 				"Gereserveerd IP-adres",
			IP_ADDRESS: 				"IP-adres",
			DESCRIPTION: 				"Beschrijving",

			CLIENTSLIST: 				"DHCP Client Lijst",
			CLIENT_NUMBER: 				"Cliënt nummer",

			ENABLE: 					"Inschakelen",
			ENABLE_THIS_ENTRY: 			"Inschakelen"
			
		},

		DDNS: {
			DDNS: 						"Dynamisch DNS",
			SERVICEPROVIDER: 			"Service provider",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Ga naar register…",
			USERNAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			DOMAIN_NAME_LIST: 			"Lijst van domeinnamen",
			DOMAIN_NAME: 				"Domeinnaam",
			LOGIN: 						"Inloggen",
			LOGIN_SAVE: 				"Inloggen en opslaan", 
			LOGOUT: 					"Uitloggen",
			STATU_SUCCESS:				"Succes!",
			UPDATE_INTERVAL:			"Update interval",
			ONE_HOUR:					"1 uur",
			SIX_HOUR:					"6 uur",
			TWETEEN_HOUR:				"12 uur",
			ONE_DAY:					"1 dag",
			TWO_DAY:					"2 dagen",
			THREE_DAY:					"3 dagen",
			NEVER:						"Nooit",
			UPDATE:						"Update",
			STATU_INCORRENT:			"Gebruikersnaam of wachtwoord onjuist.",
			STATU_ERR_DOMAIN:			"Domeinnaam fout",
			WAN_IP_BIND: 				"WAN IP binding",
			CURRENT_DOMAIN: 			"Huidige domeinnaam",
			REGISTER: 					"Registreren",
			BIND: 						"Binden",
			UNBIND: 					"Ontbinden",
			TITLE: 						"DDNS niet beschikbaar.",
			CONTENT: 					"Om onze superieure TP-Link DDNS dienst te gebruiken, gelieve  <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">inloggen</a> met uw TP-Link ID, of kies een andere service provider.",
			STATU_NO_LAUNCH:			"Start niet",
			STATU_FAIL_DDNS: 			"DDNS is niet ge-update.",
			STATU_FAIL_NOIP: 			"NO-IP is niet ge-update.",
			DISABLE: 					"Uitschakelen",
			ENABLE: 					"Inschakelen",	
			STATU_NO_LAUNCH:			"DDNS is niet ge-update.",
			STATU_CONN:					"Verbinden",
			WAN_IP_BIND: 				"WAN IP binding",
			TIME: 						"Geregistreerde datum",
			BOUND: 						"Gebonden",
			FREE: 						"Gratis",
			SORRY: 						"Mislukt.",
			UNBIND_NOTE:          		"Als u het %domain% wilt binden aan uw apparaat, gelieve eerst de huidige domeinnaam ontbinden."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Geavanceerde routering",
			STATIC_ROUTING: 			"Statische routering",

			DESTINATION_NETWORK:		"Bestemming netwerk",
			SUBNET_MASK: 				"Subnetmasker",
			DEFAULT_GATEWAY: 			"Standaard gateway",
			DESCRIPTION: 				"Beschrijving",
			
			SYSTEM_ROUTING_TABLE: 		"Systeem routering tabel",
			CLIENT_NUMBER: 				"Aantal actieve routes",

			GATEWAY: 					"Gateway",
			INTERFACE: 					"Interface",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Inschakelen",
			ENABLE_THIS_ENTRY: 			"Inschakelen"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Instellingen",
			NOT_SUPPORT_5G: 			"De regio ondersteunt alleen 2,4 GHz. Controleer of u de juiste regio hebt geselecteerd.",

			REGION: 					"Regio",
			NOTICE:  					"Om de draadloos functie te gebruiken, moet de draadloos schakelaar ingeschakeld blijven.",
			
			MODE_2G:					"2,4 GHz",
			MODE_5G:					"5 GHz",

			WIRELESS: 					"Draadloze instellingen",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Draadloze radio inschakelen",

			WIRELESS_NETWORK_NAME: 		"Naam draadloos netwerk (SSID)",
			WIRELESS_PASSWORD: 			"Wachtwoord",
			HIDE_SSID: 					"SSID verbergen",

			SECURITY: 					"Beveiliging",
			NO_SECURITY: 				"Geen beveiliging",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - Personal (aanbevolen)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Versie",

			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Versleuteling",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Modus",
			MODE_B:  					"Alleen 802.11b",
			MODE_G:  					"Alleen 802.11g",
			MODE_N:  					"Alleen 802.11n",
			MODE_BG:  					"802.11b/g gemengd",
			MODE_GN: 					"802.11g/n gemengd",
			MODE_BGN:  					"802.11b/g/n gemengd",

			MODE_A_5: 					"Alleen 802.11a",
			MODE_AN_5: 					"802.11a/n gemengd",
			MODE_N_5: 					"Alleen 802.11n",
			MODE_AC_5:					"Alleen 802.11ac",
			MODE_NAC_5:					"802.11n/ac gemengd",
			MODE_ANAC_5:				"802.11a/n/ac gemengd",


			CHANNEL_WIDTH: 				"Kanaal breedte",
			CHANNEL: 					"Kanaal",

			TRANSMIT_POWER: 			"Zendvermogen",

			RADIUS_SERVER_IP: 			"RADIUS server IP",
			RADIUS_PORT: 				"RADIUS poort",
			RADIUS_PASSWORD: 			"RADIUS wachtwoord",

			TYPE: 						"Type",
			OPEN_SYSTEM: 				"Open systeem",
			SHARED_KEY: 				"Gedeelde sleutel",

			KEY_SELECTED: 				"Geselecteerde sleutel",
			KEY1: 						"Sleutel1",
			KEY2: 						"Sleutel2",
			KEY3: 						"Sleutel3",
			KEY4: 						"Sleutel4",

			WEP_KEY_FORMAT: 			"WEP sleutel formaat",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimaal",

			KEY_TYPE: 					"Type sleutel",
			BIT64: 						"64-bits",
			BIT128: 					"128-bits",
			BIT152: 					"152-bits",

			KEY_VALUE: 					"Sleutel waarde",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Laag",
			MIDDLE: 					"Middel",
			HIGH: 						"Hoog"
		},

		WPS: {

			TITLE2: 					"PIN van router",
			ROUTERS_PIN_INFO: 			"Andere apparaten kunnen met deze router verbinden d.m.v. WPS met de PIN-code van de router.",
			ENABLE_ROUTE_PIN: 			"PIN van router",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Genereren",
			DFT: 						"Standaard",

			TITLE: 						"WPS wizard",
			SELECT_SETUP: 				"Selecteer een instelmethode",
			PUSH_BTN: 					"Drukknop (aanbevolen)",
			PUSH_DES: 					"Druk op de fysieke drukknop op de router, of klik op de software-knop Verbinden op deze pagina.",
			CONNECT: 					"Verbinden",
			CANCEL: 					"Annuleren",

			RESULT_HEAD: 				"De draadloos client",
			RESULT_END: 				"is met succes aan het netwerk toegevoegd.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Niet gevonden",
			ENTER_CLIENT_PIN: 			"Voer de PIN-code van de client in",
			SWITCH_NOTE:				"Om WPS te gebruiken, moet u de draadloze functie eerst inschakelen.",
			SWITCH_NOTE2:				"Om WPS Wizard te gebruiken, moet u eerst de juiste draadloze parameters configureren.",
			STATUS_PIN_ERROR: 			"Ongeldige WPS PIN? Controleer of deze correct is.",
			STATUS_ERROR: 				"Fout.",
			STATUS_CONN_ERROR: 			"Verbinden mislukt.",
			STATUS_CONNING: 			"Verbinden...",
			STATUS_CANCEL: 				"Verbinden geannuleerd.",
			
			NOTE: 						"Opmerking:",
			
			STATUS_CONN_OVERLAP: 		"Verbinden mislukt (OVERLAP).",
			STATUS_CONN_TIMEOUT: 		"Verbinden mislukt (TIMEOUT).",
			STATUS_CONN_INACT: 			"Verbinding inactief."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Draadloze stations online",
			CLIENT_NUMBER: 				"Cliënt nummer",
			MAC_ADDRESS: 				"MAC-adres",
			CONN_TYPE: 					"Type verbinding",
			SECURITY: 					"Beveiliging",
			RECEIVED_PACKETS: 			"Ontvangen pakketten",
			SEND_PACKETS: 				"Verzonden pakketten"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Instellingen",
			
			MODE_2G: 					"2,4 GHz",
			MODE_5G:					"5 GHz",
			
			ALLOW_EACH: 				"Gasten mogen elkaar zien",
			
			ALLOW_LOCAL: 				"Geef gasten toegang tot mijn lokale netwerk",
			
			WIRELESS: 					"Draadloos",
			WIRELESS_24G_RADIO: 		"Draadloos 2,4 GHz",
			WIRELESS_5G_RADIO: 			"Draadloos 5 GHz",
			ENABLE_GUEST: 				"Gastnetwerk inschakelen",

			NAME_SSID: 					"Naam draadloos netwerk (SSID)",
			HIDE_SSID: 					"SSID verbergen",

			SECURITY: 					"Beveiliging",
			NO_SECURITY: 				"Geen beveiliging",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Persoonlijk",

			VERSION: 					"Versie",
			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Versleuteling",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Wachtwoord"
		},

		NAT:{
			SETTINGS: 					"Hardware NAT",
			STATUS: 					"Hardware NAT",
			
			ALG_TITLE: 					"Application Layer Gateway(ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP Doorvoer",
			L2TP_ALG: 					"L2TP Passthrough",
			IPSEC_ALG: 					"IPSec Doorvoer",

			ENABLE_FTP_ALG: 			"FTP ALG inschakelen",
			ENABLE_TFTP_ALG: 			"TFTP ALG inschakelen",
			ENABLE_H323_ALG: 			"H323 ALG inschakelen",
			ENABLE_RTSP_ALG: 			"RTSP ALG inschakelen",
			ENABLE_PPTP_ALG: 			"PPTP Passthrough inschakelen",
			ENABLE_L2TP_ALG: 			"L2TP Passthrough inschakelen",
			ENABLE_IPSEC_ALG: 			"IPSec Passthrough inschakelen",
			NAT_ENABLE_NOTICE: 			"NB: uw configuraties worden pas van kracht nadat de NAT functie ingeschakeld is."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Virtuele servers",

			SERVICE_NAME: 				"Type service",
			EXTERNAL_PORT: 				"Externe poort",
			INTERNAL_IP: 				"Intern IP",
			INTERNAL_PORT: 				"Interne poort",
			PROTOCAL: 					"Protocol",

			BTN_VIEW: 					"Bestaande services bekijken",

			EXSITTING_SERVICE: 			"Bestaande services",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX of XX)",
			EXT_PORT_TIPS: 				"(XX of XX-XX, 1-65535)",
			INT_PORT_TIPS: 				"(XX of blanco, 1-65535)",

			NOTICE:						"In conflict met de poort voor beheer op afstand. Weet u zeker dat u wilt doorgaan?",

			ENABLE_THIS_ENTRY: 			"Inschakelen",
			OPERATION: 					"Werking",
			CHOOSE: 					"Kiezen",
			NAT_ENABLE_NOTICE: 			"NB: uw configuraties worden pas van kracht nadat de NAT functie ingeschakeld is."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Poort triggering",
			APPLICATION: 				"Applicatie",
			TRIGGER_PORT: 				"Triggering poort",
			TRIGGER_PROTOCOL: 			"Triggering protocol",

			EXTERNAL_PORTS: 			"Externe poort",
			EXTERNAL_PROTOCOL: 			"Extern protocol",

			BTN_VIEW: 					"Bestaande applicaties bekijken",

			EXSITTING_APPLICATION: 		"Bestaande applicaties",
			APPLICATION_NAME: 			"Naam applicatie",
			TRIGGER_TIPS: 				"(XX, 1-65535)",
			EXTERNAL_TIPS: 				"(XX of XX-XX, 1-65535, max. 5 paren)",
			
			ENABLE_THIS_ENTRY: 			"Inschakelen",
			OPERATION: 					"Werking",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"NB: uw configuraties worden pas van kracht nadat de NAT functie ingeschakeld is."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"DMZ inschakelen",
			HARDWARESTATUS: 			"DMZ host IP-adres",
			NAT_ENABLE_NOTICE: 			"NB: uw configuraties worden pas van kracht nadat de NAT functie ingeschakeld is."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"UPnP service lijst",
			CLIENT_NUMBER: 				"Cliënt nummer",
			SERVICE: 					"Beschrijving service",
			EXTERNAL_PORT: 				"Externe poort",
			PROTOCAL: 					"Protocol",
			IP_ADDR: 					"Intern IP-adres",
			INTERNAL_PORT: 				"Interne poort",
			NAT_ENABLE_NOTICE: 			"NB: uw configuraties worden pas van kracht nadat de NAT functie ingeschakeld is."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"3G/4G-USB-modem",
			LOCATION: 					"Regio",
			MOBILE_ISP: 				"Mobiel ISP",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Verbindingsmodus",
			CONNECT_ON_DEMAND: 			"Verbinden op aanvraag",
			CONNECT_AUTOMATICALLY: 		"Automatisch verbinden",
			CONNECT_MANUALLY: 			"Handmatig verbinden",
			MAX_IDLE_TIME: 				"Max. tijd inactief",
			CONNECTION_TIP: 			"De huidige Internet toegang is WAN voorkeur.",
			IDLE_TIME_TIP: 				"De Verbindingsmodus en Max. tijd inactief konden niet handmatig worden ingesteld.",
			MINUTES: 					"minuten. (0 betekent dat de verbinding altijd ingeschakeld is.)",

			AUTHENTICATION_TYPE: 		"Verificatie type",
			AUTO: 						"Auto",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"Standaard is Auto; niet wijzigen tenzij noodzakelijk.",

			CONNECT: 					"Verbinden",
			DISCONNECT: 				"Verbreken",

			SET_TIP: 					"Kiesnummer, APN, gebruikersnaam en wachtwoord handmatig instellen.",
			DIAL_NUMBER: 				"Kies nummer",
			APN: 						"APN",
			USERNAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			OPTIONAL: 					"(Optioneel)",
			MTU_SIZE: 					"MTU grootte (in bytes)",
			MTU_SIZE_TIP: 				"Standaard is 1480, niet wijzigen tenzij noodzakelijk.",

			USE_FOLLOW_DNS_SERVER: 		"Gebruik de volgende DNS servers",
			PRIMARY_DNS: 				"Primaire DNS",
			SECOND_DNS: 				"Secundaire DNS",

			UNPLUGGED: 					"Geen USB-modem aangesloten",
			IDENTIFYING: 				"Identificeren…",
			IDENTIFY_SUCCESS: 			"Succesvol vastgesteld"
		},

		DISK_SETTING: {
			DISK_SET: 					"Apparaatinstellingen",
			SCAN: 						"Scannen",
			SELFLY_REMOVE: 				"Veilig verwijderen",
			SCAN_RESULT: 				"%n schijven gevonden",
			NOT_FOUND: 					"Niet gevonden",
			SELFLY_REMOVE: 				"Veilig verwijderen",
			
			VOLUMN: 					"Volume",
			CAPACITY: 					"Capaciteit",
			FREESPACE: 					"Vrije ruimte",
			USBSPACE: 					"Gebruikte ruimte",
			
			STATUS: 					"Status",
			INACT: 						"Deactiveren",
			ACTIVE: 					"Actief",
			
			USAGE: 						"Gebruik",
			CAPACITY: 					"Capaciteit",
			OPERATION: 					"Werking",	
			
			ACC: 						"Accountbeheer", 	 	
			USERNAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			USE_LOGIN: 					"Gebruik login van gebruiker",
			SCAN: 						"Scannen",
			ENJECT_ALL: 				"Alle uitwerpen",
			ENJECT: 					"Uitwerpen",
			ADD_USER: 					"Gebruiker toevoegen",
			AUTH: 						"Autoriteit"
		},

		FOLDER: {
			TITLE: 						"Instellingen voor delen",
			ACCOUNT_TITLE: 				"Account voor delen",
			ACCOUNT:					"Account",
			AC_NOTE: 					"Een account maken voor het delen van inhoud. U kunt het inlog account gebruiken of een nieuw account aanmaken.",
			
			AC_LOGIN: 					"Standaard account gebruiken",
			AC_FOLLOW: 					"Nieuw account aanmaken",

			USERNAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",
			CONFIRM: 					"Wachtwoord bevestigen",

			SHARING_SETTING: 			"Instellingen voor delen",
			SERVER_NAME: 				"Netwerk/Mediaserver naam",

			METHOD: 					"Toegangsmethode",
			LINK: 						"Koppeling",
			PORT: 						"Poort",

			NETWORK_NEIGHBORHOOD: 		"Netwerk omgeving",
			FTP: 						"FTP",
			FTPEX: 						"FTP (via Internet)",

			SHARE_FOLDER: 				"Mappen delen",
			SHAREING_ALL: 				"Alles delen",
			NOTE:  						"Zet Aan om alle bestanden en mappen te delen, of Uit om alleen de geselecteerde mappen te delen.", 
			ENABLE_AUTHENTICATION: 		"Verificatie inschakelen",
			SHAREING_FOLDER: 			"Mappen voor delen",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Mappad",
			VOLUMN_NAME: 				"Volume naam",

			SHARE_NAME: 				"Mapnaam",
			FOLDER_PATH: 				"Mappad",
			MEDIA_SHARING: 				"Media delen",
			STATUS: 					"Status",

			GUEST_ACCESS: 				"Toegang via Gasten netwerk toestaan",
			ENABLE_AUTHENTICATION: 		"Verificatie inschakelen",
			ENABLE_WRITE_ACCESS: 		"Schrijftoegang inschakelen",
			ENABLE_MEDIA_SHARE: 		"Media delen inschakelen",
			
			BROWSE: 					"Bladeren",
			BROWSE_TITLE: 				"Selecteer een map.",

			NO_VOLUMN:					"Geen volume",
			
			NOTICE: 					"Weet u zeker dat u de Dynamisch DNS pagina wilt verlaten? Druk op Opslaan om de pagina op te slaan en te verlaten. Druk op Verlaten om de pagina te verlaten zonder op te slaan. Druk op Annuleren om op de pagina te blijven.",
			NO_CHANGE_NOTICE: 			"Weet u zeker dat u de Dynamisch DNS pagina wilt verlaten?",

			SAVE_FAILED_NOTICE: 		"Opslaan mislukt",
			CONTINUE: 					"Verlaten",
			CONTINUE_SAVE: 				"Opslaan",
			CANCLE: 					"Annuleren",

			ENABLE: 					"Inschakelen"

		},

		PRINT:{
			TITLE: 						"Print server",
			NAME: 						"Naam printer",
			ENABLE_PRINT_SERVER: 		"Print server",
			NONE: 						"Geen",
			
			NOTE_TITLE: 				"Opmerking:",
			STEP1: 						"Stap 1:",
			STEP2: 						"Stap 2:",
			STEP3: 						"Stap 3:",

			NOTE1: 						"Installeer het printer stuurprogramma op uw computer.",
			NOTE2: 						"Sluit een USB-printer op de USB-aansluiting van de router aan m.b.v. een USB-kabel.",
			NOTE3: 						"Installeer het TP-Link USB Printer Controller hulpprogramma. Download het hulpprogramma van onze officiële website: <a class=\"link\" target=\"blank\" href=\"%SUPPORT%\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Ouderlijk toezicht",
			STATUS: 					"Status",
			UNKNOWN: 					"Onbekend",

			DEVICE_CTR: 				"Apparaten onder ouderlijk toezicht",
			DEVICE: 					"Naam apparaat",
			MAC_ADDRESS: 				"MAC-adres",
			TIME: 						"Internet toegangstijd",
			DESCRIPTION: 				"Beschrijving",
			
			ENABLE_THIS_ENTRY: 			"Inschakelen",
			OPTIONAL: 					"(Optioneel)",
			BTN_VIEW: 					"Aanwezige apparaten bekijken",
			
			DEVICE_LIST: 				"Apparatenlijst",
			SYSTEM_TIME: 				"Systeemtijd",
			
			RESTR: 						"Inhoud beperken",
			MODE: 						"Beperking",
			BLACKMODE: 					"Zwarte lijst",
			WHITEMODE: 					"Witte lijst",
			ACCESS_DEVICES_LIST: 		"Apparatenlijst openen",
			
			CHOOSE: 					"Kiezen",
			ADD_A_NEW_KEYWORD: 			"Nieuw trefwoord toevoegen",
			ADD_A_NEW_DOMAIN_NAME: 		"Nieuwe domeinnaam toevoegen"
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
			OTHERS: 					"Overige",

			DEVICE: 					"Apparaat",
			RATE: 						"Snelheid",
			APPLICATION: 				"Applicatie",

			NAME: 						"Naam",
			MAC_ADDRESS: 				"MAC-adres",
			IP_ADDRESS: 				"IP-adres",


			DEVICES: 					"Apparaten"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Bandbreedte",
			TEST_BANDWIDTH: 			">Bandbreedte testen",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Streamboost inschakelen",
			UP_LIMITATION: 				"Limiet up (Mbps)",
			DOWN_LIMITATION: 			"Limiet down (Mbps)",
			RUN_BANDWIDTH_TEST: 		"Bandbreedte test uitvoeren",
			TESTING: 					"Testen",
			TEST_FAILED: 				"Test mislukt",
			TEST_SUCCEED: 				"Test geslaagd",
			ENABLE_AUTOMATIC_TEST: 		"Automatische test inschakelen",
			KEEP_UP_TO_DATE: 			"Streamboost up-to-date houden",
			ENABLE_AUTOMATIC_UPDATE: 	"Automatische update inschakelen"

		},

		PRIORITY:{
			PRIORITY: 					"Prioriteit",
			PRIORITY_TIPS: 				"Met prioriteit kunt u de belangrijkheid van één apparaat boven die van een ander stellen. Dat is handig als apparaten moeten concurreren om beperkte bandbreedte als ze dezelfde classificatie hebben.",
			ALL_DEVICE: 				"Alle apparaten",
			ACTIVE_DEVICE: 				"Actief apparaat",
			SAVE: 						"Opslaan",
			ID: 						"ID",
			DEVICE: 					"Apparaat",
			TYPE: 						"Type",
			MAC_ADDRESS: 				"MAC-adres",
			STICK: 						"Plakken"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Statistieken",
			UP_TIME: 					"Actieve tijd",
			DOWNLOADS: 					"Items",
			LAST_DAY: 					"Afgelopen dag",
			LAST_WEEK: 					"Afgelopen week",
			LAST_MONTH: 				"Afgelopen maand",
			ALL_LAN_HOSTS: 				"Alle LAN hosts",
			OTHER: 						"Overige"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Firewall",
			ENABLE_SPI: 				"SPI firewall",

			DOS_PROTECTION: 			"DoS bescherming",
			ENABLE_DOS: 				"DoS bescherming",
			
			OFF: 						"Uit",
			LOW: 						"Laag",
			MIDDLE: 					"Middel",
			HIGH: 						"Hoog",

			ICMP: 						"ICMP-FLOOD Aanval Filtering",
			UDP: 						"UDP-FLOOD Aanval Filtering",
			TCP: 						"TCP-SYN-FLOOD Aanval Filtering",
			ENABLE_DOS_TIP:             "DoS bescherming en Verkeersstatistieken moeten tegelijkertijd ingeschakeld zijn.",

			IGNORE: 					"Ping Packet van WAN-poort negeren",
			FORBID: 					"Ping Packet van LAN-poort verbieden",

			BLOCK_DOS: 					"Lijst van geblokkeerde DoS hosts",
			HOST_NUMBER: 				"Host nummer",
			IP_ADDRESS: 				"IP-adres",
			MAC_ADDRESS: 				"MAC-adres"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Toegangscontrole",
			ENABLE_ACCESS: 				"Toegangscontrole",

			ACCESS_MODE: 				"Toegangsmodus",
			DEFAULT_ACCESS_MODE: 		"Standaard toegangsmodus",
			BLACK_LIST: 				"Zwarte lijst",
			WHITE_LIST: 				"Witte lijst",
			
			WIRED:						"Via kabel",
			WIRELESS:					"Draadloos",

			DEVICE_ONLINE: 				"Online apparaten",
			NAME: 						"Naam apparaat",
			IP_ADDRESS: 				"IP-adres",
			MAC_ADDRESS: 				"MAC-adres",
			CONN_TYPE: 					"Type verbinding",

			BLOCK: 						"Blokkeren",

			DEVICE_IN_WHITE: 			"Apparaten in witte lijst",
			DEVICE_IN_BLACK: 			"Apparaten in zwarte lijst"
		},

		IP_MAC:{
			TITLE: 						"Instellingen",
			ENABLE_ARP: 				"ARP Binding",

			ARP_LIST: 					"ARP lijst",
			ARP_NUM: 					"ARP item nummer",

			MAC_ADDRESS: 				"MAC-adres",
			IP_ADDRESS: 				"IP-adres",
			BOUND: 						"Gebonden",
			UNBOUND: 					"Niet gebonden",

			BINDING_LIST: 				"Binding lijst",
			DESCRIPTION: 				"Beschrijving",
			OPTIONAL: 					"(Optioneel)",
			ENABLE_THIS_ENTRY: 			"Inschakelen"
		},

		TIMESET: {
			TITLE: 						"Tijd instellingen",
			ZONE: 						"Tijdzone",
			DATE: 						"Datum",
			DATEFORMAT: 				"DD/MM/JJJJ",
			TIME: 						"Tijd",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"NTP server I",
			NTP2: 						"NTP server II",
			OPTIONAL: 					"(Optioneel)",

			CURRENT_TIME:  				"Huidige tijd",
			SET_TIME: 					"Tijd instellen",
			AUTOMATIC: 					"Automatisch van het Internet verkrijgen",
			MANUAL: 					"Handmatig",
			AUTOMATIC_BTN: 				"Verkrijgen",


			GETGMT: 					"GMT verkrijgen",

			
			GETGMT_SUCCESS: 			"Tijd van NTP server verkrijgen geslaagd",
			GETGMT_TIMEOUT: 			"Tijd van NTP server verkrijgen time-out",
			GETGMT_WAIT: 				"Wachten",
			
			M: 							"M",
			W: 							"W",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Zomertijd",
			ENABLE_DAYLIGHT: 			"Zomertijd inschakelen",
			START: 						"Begin",
			END: 						"Einde",

			RUNNING_STATUS: 			"Status in werking",
			DOWN: 						"Zomertijd is uitgeschakeld",
			UP: 						"Zomertijd is ingeschakeld"
		},

		DIAG:{
			TITLE: 						"Diagnose",
			DIAGNOSTIC_TOOL: 			"Diagnosefunctie",
			PING: 						"Ping",
			TRACE: 						"Traceer route",

			IPADDR: 					"IP-adres/Domeinnaam",
			COUNT: 						"Aantal pings",
			
			BASIC: 						"Basis",
			ADVANCED: 					"Geavanceerd",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Ping pakket grootte",
			PKTUNIT: 					"(4-1472 bytes)",

			TIMEOUT: 					"Ping time-out",
			TIMOUTUNIT: 				"(100-2000 milliseconden)",

			TTL: 						"Traceroute max. TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Begin",
			STOP: 						"Stop"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Uw firmware is up-tp-date",
			TITLE: 						"Firmware upgrade",
			INFO: 						"Apparaat informatie",
			REMOTE_TITLE: 				"Online upgrade",
			LOCAL_TITLE: 				"Lokale Upgrade",

			NEWFILE: 					"Nieuw firmware bestand",
			FIRMWAREVERSION: 			"Firmware versie",
			HARDWAREVERSION: 			"Hardware versie",
			LATESTVERSION: 				"Laatste versie",
			CONFIRM_CONTENT:			"Wilt u de firmware upgraden?",
			WARNING:					"Firmware is aan het upgraden… <br/> Om schade te voorkomen, gelieve de router ingeschakeld laten en  geen werkzaamheden uitvoeren op de router tijdens het firmware upgrade proces.",
			REBOOTING: 					"Herstarten… <br/> Om schade te voorkomen, gelieve de router ingeschakeld laten en geen werkzaamheden uitvoeren op de router tijdens het firmware upgrade proces.",
			DO_NOT_OPERATE: 			"Firmware is aan het upgraden… <br/> Om schade te voorkomen, gelieve de router ingeschakeld laten en  geen werkzaamheden uitvoeren op de router tijdens het firmware upgrade proces.",
			FIRMWARE_UPDATING_NOTE: 	"1. De firmware wordt geupdate...<br/> Laat de router ingeschakeld en voer geen bewerkingen uit op de router gedurende de firmware upgrade proces om schade te voorkomen.",
			REBOOTING_NOTE: 			"2. Aan het rebooten...<br/> Laat de router ingeschakeld en voer geen bewerkingen uit op de router gedurende de firmware upgrade proces om schade te voorkomen.",
			SCREEN_UPDATING_NOTE: 		"3. Scherm updaten...<br/> Laat de router ingeschakeld en voer geen bewerkingen uit op de router gedurende de firmware upgrade proces om schade te voorkomen.",
			UPGRADE_FAILED: 			"Upgrade mislukt.",
			UPGRADE: 					"Upgraden",
			CHECK: 						"Controleren",
			DOWNLOADING: 				"Aan het downloaden…<br/> Om schade te voorkomen, gelieve de router ingeschakeld laten en geen werkzaamheden uitvoeren op de router tijdens het firmware upgrade proces.",
			UPGRADE_INOF: 				"Om schade te voorkomen, gelieve de router ingeschakeld laten.",
			NOTE: 						"NB:",
			NO_UPGRADE: 				"Dit is de laatste versie",

			UPGRADING: 					"Upgraden... <br/> Om schade te voorkomen, gelieve de router ingeschakeld laten en  geen werkzaamheden uitvoeren op de router tijdens het firmware upgrade proces.",
			RETRY: 						"Opnieuw proberen",
			CANCEL: 					"Annuleren",
			ILEGAL_DEVICE:              "Niet in staat om het apparaat te identificeren. Neem contact op met TP-Link technische support.",
			UPGRADE_FAIL: 				"Niet in staat om te upgraden. Gelieve later nogmaals proberen.",
            CONFIG_RESET_NOTE:          "Uw huidige instellingen gaan verloren na het upgraden naar deze versie.",
			CHECK_UPGRADE: 				"Controleren op updates"
		},

		BACKUP:{
			BACKUP: 					"Backup",
			BACKUPTIP: 					"Een kopie van de huidige instellingen opslaan.",

			RESTORE: 					"Terugzetten",
			RESTORETIP: 				"Eerder opgeslagen instellingen terugzetten.",
			
			RESTORE_WARN:				"Router herstellen… <br/>Niet bedienen tijdens dit proces.",
			RESTORE_CONFIRM_CONTENT: 	"Weet u zeker dat u de router m.b.v. het backup-bestand wilt herstellen?",
			
			FILE: 						"Bestand",

			FACTORY: 					"Fabrieksinstellingen herstellen",
			FACTORYTIP: 				"Alle configuratie instellingen terugzetten naar de fabrieksinstellingen.",
			RESETTIP:					"Alle configuratie instellingen naar de fabriek waardes herstellen, behalve de login en cloud account informatie.",
			FACTORY_CONFIRM_CONTENT:	"Weet u zeker dat u de router naar fabrieksinstellingen wilt terugzetten?",
			FACTORY_WARN:				"Router herstellen… <br/>Niet bedienen tijdens dit proces.",
			
			BACKUPBTN: 					"Backup",
			RESTOREBTN: 				"Terugzetten",
			RESETBTN:					"Terugzetten",
			FACTORYBTN: 				"Fabriek-reset"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Accountbeheer",
			
			OLDUSER: 					"Oude gebruikersnaam",
			OLDPWD: 					"Oud wachtwoord",

			NEWUSER: 					"Nieuwe gebruikersnaam",
			NEWPWD: 					"Nieuw wachtwoord",
			CONFIRM: 					"Nieuw wachtwoord bevestigen",

			RECOVERYINFO: 				"Wachtwoord opvragen",
			ENABLE_PASSWORD_RECOVERY: 	"Wachtwoord opvragen inschakelen",
			FROM: 						"Van",
			TO: 						"Naar",
			SMTP_SERVER: 				"SMTP server",
			
			ENABLE_AUTHENTICATION: 		"Verificatie inschakelen",
			USERNAME: 					"Gebruikersnaam",
			PASSWORD: 					"Wachtwoord",

			TEST_MAIL: 					"Testmail",

			LOCAL:						"Lokaal beheer",
			LOCAL_MAC_AUTH: 			"Lokale MAC verificatie",
			ACCESS: 					"Toegang voor alle met LAN verbonden apparaten",
			ACCESS_TIPS: 				"Zet Aan om beheer van alle apparaten in het LAN mogelijk te maken, of laat Uit staan om beheer van een specifiek apparaat mogelijk te maken.",
			
			MAC_ADDRESS: 				"MAC-adres",
			VIEW_BTN: 					"Aanwezige apparaten bekijken",
			DESCRIPTION: 				"Beschrijving",

			EXIST_DEVICE:               "Aanwezige apparaten",

			OPTIONAL: 					"(Optioneel)",
			ENABLE_THIS_ENTRY: 			"Inschakelen",

			DEVICE_NAME:				"Naam apparaat",
			IP_ADDRESS:					"IP-adres",
			

			REMOTE: 					"Beheer op afstand",
			DISABLE_REMOTE_MANAGEMENR: 	"Beheer op afstand uitschakelen",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Beheer op afstand voor alle apparaten inschakelen",
			ENABLE_REMOTE_MANAGEMENR: 	"Beheer op afstand voor opgegeven apparaten inschakelen",
			WEB: 						"Webbeheer poort",

			NOTICE:						"In conflict met de virtuele server poort! Weet u zeker dat u wilt doorgaan?",

			REMOTEIP: 					"IP-adres Beheer op afstand",
			REMOTEIPNOTE: 				"(255.255.255.255 voor alle invoeren)"
			
		},

		SYSLOG:{
			TITLE: 						"Systeemlog",
			LOG_FILTER: 				"Log filter:",
			
			TYPE_EQ: 					"Type=",
			
			ALL: 						"ALL",

			FIREWALL: 					"Firewall", 
			NAT: 						"NAT",
			DDNS: 						"Dynamisch DNS",
			UPNP:						"UPnP",
			IMB:            			"IP&MAC Binding",
			IPTV:						"IPTV",
			DHCPS:						"DHCP server",
			IGMP_PROXY:					"IGMP proxy",
			DOMAIN_LOGIN:				"Domein login",
			BASIC_SECURITY: 			"Basis beveiliging",
			PARENTAL_CONTROL: 			"Ouderlijk toezicht",
			ACCESS_CONTROL: 			"Toegangscontrole",
			DOS_PROTECTION: 			"DoS bescherming",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Verkeersstatistieken",
			TIME_SETTINGS: 				"Tijd instellingen",
			ACCOUNT_MANAGEMENT: 		"Accountbeheer",
			LOCAL_MANAGEMENT: 			"Lokaal beheer",
			REMOTE_MANAGEMENT: 			"Beheer op afstand",
			LOCALE: 					"Landinstellingen",
			FACTORY_RESET: 				"Fabriek-reset",
			LED_CONTROLLER: 			"LED controller",
			NETWORK: 					"Netwerk",
			USBSHARE: 					"USB delen",
			AND: 						"en",
			LEVEL: 						"Niveau",
			EMERGENCY:					"NOODGEVAL",
			ALERT:						"ALARM",
			CRITICAL:					"KRITIEK",
			ERROR: 						"FOUT",
			WARNING: 					"WAARSCHUWING",
			NOTICE: 					"MEDEDELING",
			INFO: 						"INFO",
			DEBUG: 						"DEBUG",

			INDEX: 						"Index",
			TYPE: 						"Type",
			TIME: 						"Tijd",
			LEVEL_COL:					"Niveau",

			CONTENT: 					"Loginhoud",
			
			MAIL_LOG: 					"Log mailen",
			SAVE_LOG: 					"Log opslaan",

			SEND_OK: 					"Verzenden OK",
			SEND_FAILED: 				"Verzenden mislukt",

			MAIL_SETTING: 				"E-mail instellingen",

 			FROM: 						"Van",
 			TO: 						"Naar",
 			SMTP_SERVER: 				"SMTP server",
 			ENABLE_AUTHENTICATION: 		"Verificatie inschakelen",

 			USERNAME: 					"Gebruikersnaam",
 			PASSWORD: 					"Wachtwoord",
 			CONFIRM_PASSWORD: 			"Wachtwoord bevestigen",

 			AUTO_MAIL: 					"Auto Mail inschakelen",
 			LOG_AT: 					"Log op",
 			HH_MM: 						"(HH:MM) dagelijks",

 			LOG_EVERY: 					"Log elke",
 			HOURS: 						"uur"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Instellingen",
			STATUS: 					"QoS inschakelen",
			UPBANDWIDTH: 				"Upload bandbreedte",
			DOWNBANDWIDTH: 				"Download bandbreedte",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"kbps",
			TEST: 						"Spelheid testen",
			RULE_LIST: 					"Lijst QoS regels",
			RULE: 						"QoS regel",
			ID: 						"ID",
			NAME: 						"Naam",
			TYPE: 						"Type",
			DETAIL: 					"Detail",
			PRIORITY: 					"Prioriteit",

			APPLICATION: 				"Applicatie",
			APPLICATION_LIST: 			"Applicatielijst",
			CUSTOM_APP: 				"Aangepaste applicatie",
			MAC_ADDR: 					"MAC-adres",
			MAC_ADDR_P: 				"Mac:",
			IP_ADDR: 					"IP-adres",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Fysieke poort",

			LOW: 						"Laag",
			MIDDLE: 					"Middel",
			HIGH: 						"Hoog",

			PROTO: 						"Protocol",
			PORT: 						"Poort",
			PROTO_P: 					"Protocol:",
			PORT_P: 					"Poort:",
			PORT_TIPS: 					"(XX of XX-XX, 1-65535, max. 5 paren)",

			ALL: 						"ALL",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Aangepast",

			WIFI_HOME: 					"WIFI-HOST",
			WIFI_GUEST: 				"WIFI-GAST",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Database upgrade",

			NEWFILE: 					"Nieuw database bestand",
			FIRMWAREVERSION: 			"Database versie",
			CONFIRM_CONTENT:			"Weet u zeker dat u de database wilt updaten?",
			WARNING:					"Database updaten… <br/>Niet bedienen tijdens dit proces.",
			
			UPGRADE: 					"Upgraden",

			SERVICE_RESTART: 			"Qos service opnieuw starten",
			
			TYPE: 						"Type",
			BY_DEVICE: 					"Per apparaat",
			BY_APP: 					"Per applicatie",
			BY_PHY: 					"Per fysieke poort",

			HIGH_PRIORITY_LBL: 			"Hoge prioriteit:",
			MIDDLE_PRIORITY_LBL: 		"Middel prioriteit:",
			LOW_PRIORITY_LBL: 			"Lage prioriteit:",

			HIGH_PRIORITY: 				"Hoge prioriteit",
			MIDDLE_PRIORITY: 			"Middel prioriteit",
			LOW_PRIORITY: 				"Lage prioriteit"

		},

		APPLICATION:{
			APP_LIST: 					"Applicatielijst",
			GAME_LIST: 					"Game-lijst",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Verkeersstatistieken",
			ENABLE_STATISTICS: 			"Verkeersstatistieken",

			TITLE: 						"Verkeersstatistieken lijst",
			IP_MAC: 					"IP-adres/MAC-adres",
			TPKT: 						"Totale pakketten",
			TBYTE: 						"Totale bytes",
			CPKT: 						"Huidige pakketten",
			CBYTE: 						"Huidige bytes",
			CICMP: 						"Huidige ICMP Tx",
			CUDP: 						"Huidige UDP Tx",
			CSYN: 						"Huidige SYN Tx",
			
			DELETE_CONFIRM: 			"Weet u zeker dat u de verkeersstatistieken wilt verwijderen?",
			DELETE_ALL_CONFIRM: 		"Weet u zeker dat u alle verkeersstatistieken wilt verwijderen?",

			RESET_ALL: 					"Alles resetten"
		},

		SYSPARA:{
			W24G: 						"Draadloos 2,4 GHz",
			W5G: 						"Draadloos 5 GHz",
			SWITCH_NOTICE:  			"De draadloos functie is uitgeschakeld. Als u deze functie wilt gebruiken, moet u de Wi-Fi toets inschakelen.",

			ENABLE_TIPS: 				"De draadloos functie is uitgeschakeld.",

			BEACON: 					"Beacon interval",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS Threshold",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Fragmentatie Threshold",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM Interval",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Groepssleutel update periode",
			GROUPUNIT: 					"seconden",
			
			
			WMM_FEATURE: 				"WMM functie",
			WMM: 						"WMM inschakelen",

			GI_FEATURE: 				"Short GI functie",
			GI: 						"Short GI inschakelen",

			AP_FEATURE: 				"AP Isolation functie",
			AP: 						"AP Isolation inschakelen",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"TxBF inschakelen",

			WDS_FEATURE: 				"WDS-brug",
			WDS: 						"WDS Bridging inschakelen",
			
			SSID_BRIDEGE: 				"SSID (te bridgen)",
			SURVEY: 					"Zoeken",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC-adres",
			SSID: 						"SSID",
			SIGNAL: 					"Signaal",
			CHANNEL: 					"Kanaal",
			SECURITY: 					"Beveiliging",
			CHOSEN: 					"Gekozen",
			AP_NUMBER:					"AP nummer",

			TOTAL: 						"Totale items",

			MAC: 						"MAC-adres (te bridgen)",
			MACUNIT: 					"Voorbeeld: 00-1D-0F-11-22-33",

			SECURITY: 					"Beveiliging",
			NO: 						"Nee",
			NONE: 						"Geen beveiliging",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Wachtwoord",
			
			AUTH_TYPE: 					"Ver. type",
			AUTO: 						"Auto",
			OPEN: 						"Open systeem",
			SHARED: 					"Gedeelde sleutel",

			WEP_INDEX: 					"WEP index",
			KEY1: 						"Sleutel1",
			KEY2: 						"Sleutel2",
			KEY3: 						"Sleutel3",
			KEY4: 						"Sleutel4",

			WEP_KEY_FORMAT: 			"WEP sleutel formaat",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimaal",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"WPS inschakelen",

			NAT: 						"NAT",
			ENABLE_NAT: 				"NAT inschakelen",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"NAT Boost inschakelen",
			
			MEDIA_SERVER: 				"Media server",
			SCAN_INTERVAL: 				"Auto Scan interval (uren)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"DoS bescherming niveau instellingen",

			ICMP: 						"ICMP-FLOOD pakketten niveau",
			UDP: 						"UDP-FLOOD pakketten niveau",
			TCP: 						"TCP-FLOOD pakketten niveau",

			WDS_MODE: 					"WDS modus",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Laag",
			MIDDLE: 					"Middel",
			HIGH: 						"Hoog",

			TO: 						"naar",
			NOTICE_NAT_REBOOT: 			"Opnieuw starten... <br/>A.u.b. niet bedienen tijdens het opnieuw starten.",

			NOTICE_NAT_BOOST: 			"Bij een wijziging van NAT Boost zal dit apparaat opnieuw worden gestart. Weet u zeker dat u wilt doorgaan?",
			NOTICE:						"Het kanaal van uw router is niet hetzelfde als dat van het bridged AP. Wilt u dit wijzigen?",

			UNIT: 						"(5-7200) packets/sec",
			LED: 						"LED",
			NIGHT_MODE: 				"Nachtmodus",
			PERIOD_NIGHT_TIME: 			"Nachtmodus periode",
			ENABLE: 					"Nachtmodus inschakelen",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "Uw led is uitgeschakeld. Als u deze functie wilt gebruiken, klik dan op de led rechtsboven op de pagina.",
			NOTE2:                      "De nachtmodusperiode wordt ingeschakeld op basis van de systeemtijd van de router. Zorg dat u de tijd van de router heeft ingesteld."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Geen certificaat momenteel, <b>genereer</b> er een voordat u de VNP-server inschakelt.",
			NO_CERT_NOTE2: 				"Geen certificaat momenteel, <b>genereer</b> er een voordat u de configuratie exporteert.",
			ENABLE_VPN_SERVER: 			"VNP-server inschakelen",
			SERVICE_TYPE: 				"Type service",
			SERVICE_PORT: 				"Servicepoort",
			VPN_SUBNET: 				"VNP-subnet/-netmasker",
			CLIENTS_ACCESS: 			"Clienttoegang",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Alleen lokaal netwerk",
			INTERNET_HOME: 				"Internet en lokaal netwerk",
			CERT_STR: 					"Geen certificaat momenteel, klik op OK om er een te genereren en uw configuratie op te slaan.",
			CERT_STR2: 					"Geen certificaat momenteel, klik op OK om er een te genereren en uw configuratie te exporteren.",
			CONF_FILE: 					"Configuratiebestand", 
			EXPORT_CONF_FILE: 			"Exporteren van de configuratie.",
			EXPORT: 					"Exporteren",

			INSTALL_GUIDE: 				"Installatiehandleiding VPN-client",
			INSTALL_STEP: 				"Om uw clientapparaten te verbinden met de OpenVPN-server:",
			INSTALL_NOTICE:				"Configureer voordat u de OpenVPN-server configureert eerst de dynamische DNS-service (aanbevolen) of wijs een statisch IP-adres toe voor de WAN-poort. Zorg er ook voor dat de systeemtijd juist is.",
			INSTALL_NOTE1: 				"Klik op VPN-server inschakelen.",
			INSTALL_NOTE2: 				"Voordat u de OpenVPN server kunt configureren, configureer eerst Dynamic DNS Service (aanbevolen) of wijs een statisch IP toe aan de WAN poort. Wees er tevens zeker van dat uw externe poort van de NAT instellingen niet de service poort is en dat DMZ is uitgeschakeld. Let er ook op dat uw Systeem Tijd correct is.",
			INSTALL_NOTE3: 				"Klik op Exporteren om het configuratiebestand op te slaan.",
			INSTALL_NOTE4: 				"Download en installeer de OpenVPN-client op uw clientapparaten via <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> De officieel ondersteunde platformen zijn Windows, Mac OSX en Linux.",
			INSTALL_NOTE5: 				"Start de OpenVPN-client en voeg een nieuwe VPN-verbinding toe met behulp van het opgeslagen configuratiebestand om uw clientapparaat te verbinden met de VPN-server.",
			NOTE: 						"Ga voor meer informatie over OpenVPN-clients naar <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"IP-adres client",
			ACCOUNT_USERNAME: 			"Gebruikersnaam",
			ACCOUNT_PASSWORD: 			"Wachtwoord",
			CLIENT_IP_NOTE: 			"(tot 10 clients)",
			SAME_SUBNET_NOTE: 			"Het IP adres van de cliënt en het LAN IP adres kunnen zich niet in hetzelfde subnet bevinden.",
			CONFLICT_WITH_DHCP: 		"Het IP adres van de cliënt geeft een conflict met de DHCP IP adres pool.",
			CONFLICT_WITH_RESERVED: 	"Het IP adres van de cliënt geeft een conflict met het gereserveerde IP adres.",
			CONFLICT_WITH_OPENVPN: 		"Het IP adres van de cliënt en OPENVPN IP adres kunnen zich niet in hetzelfde subnet bevinden.",
			SAME_SUBNET_NOTE2: 			"Het VPN-subnet/-netmasker en het LAN-IP-adres mogen zich niet in hetzelfde subnet bevinden.",
			CONFLICT_WITH_DHCP2: 		"Het VPN Subnet/Netmask geeft een conflict met de DHCP IP adres pool.",
			CONFLICT_WITH_RESERVED2: 	"Het VPN Subnet/Netmask geeft een conflict met het gereserveerde IP adres.",
			CONFLICT_WITH_PPTPVPN: 		"Het VPN Subnet/Netmask en PPTP VPN IP adres kunnen zich niet in hetzelfde subnet bevinden.",
			VPN_MASK_ERROR: 			"De netmask mag niet groter zijn dan 255.255.255.248.",
			ACCOUNT_LIST: 				"Account lijst (tot 16 gebruikers)",
			ADVANCED_SETTING: 			"Geavanceerd",
			ALLOW_SAMBA: 				"Sta Samba (netwerk plaats) toegang toe",
			ALLOW_NETBIOS: 				"Sta NetBIOS doorvoer toe",
			ALLOW_UNENCRYPTED_CONN: 	"Sta onversleutelde verbindingen toe",
			USERNAME_CONFLICT: 			"Deze gebruikersnaam bestaat al. Gelieve een andere invoeren.",
			
			CONNECT_PPTP: 				"Om uw clientapparaten te verbinden met de PPTP-VPN-server:",
			CONNECT_NOTICE:				"Configureer voordat u de PPTP-VPN-server configureert eerst de dynamische DNS-service (aanbevolen) of wijs een statisch IP-adres toe voor de WAN-poort. Zorg er ook voor dat de poort van de NAS-instellingen niet 1723 is, dat DMZ is uitgeschakeld en dat de systeemtijd juist is.",
			CONNECT_NOTE1: 				"Klik op VPN-server inschakelen.",
			CONNECT_NOTE2: 				"Configureer de parameters van de PPTP-VPN-server en klik op Opslaan.",
			CONNECT_NOTE3: 				"Maak een PPTP-VPN-verbinding op uw clientapparaten. De officieel ondersteunde platform zijn Windows, Mac OSX, Linux, iOS en Android.",
			CONNECT_NOTE4: 				"Start het PPTN-VPN-programma, voeg een nieuwe verbinding toe en voer de domeinnaam in van de geregistreerde DDNS-service of het statische IP-adres dat aan de WAN-poort is toegewezen, om uw clientapparaat te verbinden met de PPTP-VPN-server.",
			
			GENERATE_CERT: 				"Certificaat",
			GENERATE_NEW_CERT: 			"Certificaat genereren.",
			GENERATE: 					"Genereren",
			GENERATE_TIPS: 				"Certificaat genereren...<br/>Dit duurt enkele minuten, een ogenblik geduld.",
			CERT_SUCCESS: 				"Succes",
			CERT_FAIL: 					"Mislukt, probeer het opnieuw.",
			
			VPN_CONNECTIONS: 			"VPN verbindingen",
			OPEN_VPN_CONNECTIONS: 		"OpenVPN-verbinding",
			PPTP_VPN_CONNECTIONS: 		"PPTP-VPN-verbinding",
			USER:				"Gebruiker",
			REMOTE_IP:			"Remote IP",
			ASSIGNED_IP:			"Toegewezen IP"
		}
	};
})(jQuery);

