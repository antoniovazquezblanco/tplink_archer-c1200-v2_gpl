(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			EMAIL: 						"E-mail",
			FORGET_PASSWORD: 			"Glemt adgangskode?",
			LOGIN: 						"Login",
			BEGIN: 						"Lad os komme i gang",
			IMPORTANT_UPDATE_INFO: 		"For at undgå en konflikt med front-end-enheden, er din routers IP-adresse blevet opdateret til",
			CONTINUE: 					"Fortsæt",

			IMPORTANT_NOTICE: 			"Vigtig meddelelse",
			OR: 						", er du sikker på, at du vil fortsætte og besøge",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Tryk på og hold knappen Nulstil nede i %SECONDS% sekunder for at gendanne routerens fabriksindstillinger.",
			FORGET_PASSWORD_INFO_1: 	"Hvis Genoprettelse af adgangskode er aktiveret. En bekræftelseskode bliver sendt til den angivne e-mailadresse for nulstilling af brugernavn og adgangskode.",
			FORGET_PASSWORD_SEND_FAILED:"Kunne ikke sende koden! Kontroller din internetforbindelse.",

			VERIFICATION_CODE: 			"Bekræftelseskode",

			RECEIVE_CODE: 				"Send kode",

			CONFIRM: 					"Bekræft",
			WELCOME: 					"Velkommen til TP-Link %model%. Log på.",
			SEC: 						"s",

			USER_CONFLICT: 				"Login konflikt!",
			FIRST_TIME: 				"Konfigurer din %PRODUCT% til at oprette forbindelse til internettet først. Begynd med at oprette en adgangskode til at administrere dit %PRODUCT%.",
			FIRST_TIME1: 				"Opret en administratoradgangskode for at administrere din %model%.",
			USER_CONFLICT_INFO: 		"Bruger %USER% med host %HOST% (%IP%/%MAC%) er aktuelt logget på routeren. Du kan ikke logge på på samme tid. Prøv igen senere.",
			USER_CONFLICT_INFO_2: 		"Bruger %USER% (%IP%) er aktuelt logget på routeren. Du kan ikke logge på på samme tid. Prøv igen senere.",
			USER_CONFLICT_INFO_3: "Kun én enhed kan logge på en gang. Ønsker du at fortsætte og tvinge den anden enhed til at logge ud?",
			
			LOGIN_FAILED: 				"Login mislykkedes!",
			LOGIN_FAILED_COUNT: 		"Login mislykkedes %num1 gange og du har stadig %num2 forsøg tilbage.",
			NO_COOKIE: 					"Cookies skal være aktiveret for at logge på. Aktiver cookies eller sluk for browsertilstanden privat/Inkognito.", 

			FORGET_PASSWORD_NOTE: 		"Hvis du ikke har konfigureret til funktionen Genoprettelse af adgangskoder. Du kan trykke på og holde knappen Nulstil nede i %SECONDS% sekunder for at gendanne routerens fabriksindstillinger."
		},
		INIT: {
			PASSWORD: 					"Adgangskode",
			CONFIRM_PASSWORD:				"Bekræft adgangskode",
			BEGIN: 						"Lad os komme i gang",
			IMPORTANT_UPDATE_INFO: 		"For at undgå en konflikt med front-end-enheden, er din routers IP-adresse blevet opdateret til",
			CONTINUE: 					"Næste",

			IMPORTANT_NOTICE: 			"Vigtig meddelelse",
			OR: 						", er du sikker på, at du vil fortsætte og besøge",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Bekræft",

			SEC: 						"s",

			USER_CONFLICT: 				"Login konflikt!",
			
			USER_CONFLICT_INFO: 		"Bruger %USER% med host %HOST% (%IP%/%MAC%) er aktuelt logget på routeren. Du kan ikke logge på, på samme tid. Prøv igen senere.",
			USER_CONFLICT_INFO_2: 		"Bruger %USER% (%IP%) er aktuelt logget på routeren. Du kan ikke logge på, på samme tid. Prøv igen senere.",
			
			LOGIN_FAILED: 				"Login mislykkedes!",
			LOGIN_FAILED_COUNT: 		"Login mislykkedes %num1 gange og du har stadig %num2 forsøg tilbage.",
			NO_COOKIE: 					"Cookies skal være aktiveret for at logge på. Aktiver cookies eller sluk for browsertilstanden privat/Inkognito.", 

			INIT_NOTE_TITLE: 			"Kære kunde,",
			INIT_NOTE_CONTENT: 			"Konfigurer din %PRODUCT% til at oprette forbindelse til internettet først. Begynd med at oprette en adgangskode til at administrere dit %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Firmwareversion: ",
			FEATURE: 						"Ændringer og fejlrettelser: ",
			TITLE: 							"Tilgængelig firmwareopgradering er registreret.",
			UPGRADE_NOW: 					"Opgrader nu",
			REMIND: 						"Påmind mig senere",
			NOTICE:    						"Hej, en ny firmware er tilgængelig for din router.",
			NEVER: 							"Ignorer denne version"
			
		},

		WAN_ERROR: {
			TITLE: 							"WAN-forbindelsesfejl!",
			STATUS: 						"Status",
			INFO: 							"Oplysninger",
			SETUP: 							"Opsætning af en internetforbindelse",
			NEVER: 							"Påmind mig ikke igen"
		},

		OFFLINE_ERROR:{
			TITLE: "Hovsa... Vi kan ikke oprette forbindelse med skyserveren.",
			NOTE1: "1. Sørg for at du har internetadgang.",
			NOTE2: "2. Skyserveren er midlertidigt utilgængelig. Opdater siden senere.",
			NOTE3: "3. Hvis problemet stadig opstår, skal du kontakte <a target=\"_blank\" id=\"support\">TP-Link technical support</a>.",
			ERROR: "Fejl"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Firmwareversion:",
			HARDWARE_VERSION: 				"Hardwareversion:",
			HELP_SUPPORT: 					"Support",
			FAQ: 							"OFTE STILLEDE SPØRGSMÅL",
			CONFIRM_REBOOT: 				"Er du sikker på, at du vil genstarte routeren?",
			CONFIRM_LOGOUT: 				"Er du sikker på, at du vil logge af?",
			UPGRADE_ALERT_1: 				"Den aktuelle firmware understøtter ikke TP-Link sky-service. Vi anbefaler at du downloader den nyeste firmware på www.tp-link.com og opdatere den.",
			UPGRADE_ALERT_2: 				"Den aktuelle firmware understøtter ikke TP-Link sky-service. Vi anbefaler, at du opdaterer firmware ved at klikke på ikonet Opdater i øverste højre hjørne.",
			ACCOUNT_UNLOGIN: 				"Konto",

			REBOOTING: 						"Genstarter... <br/>Brug ikke under genstart.",

			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Scan QR-kode for at hente TP-Link Tether app",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Administrer dit netværk nemt fra enhver mobil enhed.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Fuld kontrol i din hule hånd."
		},

		NAV: {
			QUICK_SETUP: 				"Hurtig opsætning",
			BASIC: 						"Grundlæggende",
			ADVANCED: 					"Avanceret"
		},

		CONTROL: {
			LOGIN: 						"Login",
			LOGOUT: 					"Log af",
			UPDATE: 					"Opdater",
			REBOOT: 					"Genstart",
			LED: 						"Lysdiode",
			LED_ON: 					"Lysdiode tændt",
			LED_OFF: 					"Lysdiode slukket",
			LED_DISABLED: 				"LED-status kan ikke ændres i tidsrummet med nattilstand"
		},

		LANGUAGE: {
			EN_US: 						"Engelsk",
			ZH_CN: 						"Kinesisk (forenklet)"
		},

		REGION: {
			ALBANIA: 					"Albanien",
			ALGERIA: 					"Algeriet",
			AMERICAN_SAMOA: 			"Amerikansk Samoa",
			ARGENTINA: 					"Argentina",
			ARMENIA: 					"Armenien",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australien",
			AUSTRIA: 					"Østrig",
			AZERBAIJAN: 				"Aserbajdsjan",
			BAHAMAS: 					"Bahamas",
			BAHRAIN: 					"Bahrain",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Hviderusland",
			BELGIUM: 					"Belgien",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Berumuda",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnien og Hercegovina",
			BRAZIL: 					"Brasilien",
			BRUNEI_DARUSSALAM: 			"Brunei",
			BULGARIA: 					"Bulgarien",
			CAMBODIA: 					"Cambodja",
			CANADA: 					"Canada",
			CAYMAN_ISLANDS: 			"Cayman Øerne",
			CHILE: 						"Chile",
			CHINA: 						"Folkerepublikken Kina",
			COLOMBIA: 					"Colombia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Kroatien",
			CYPRUS: 					"Cypern",
			CZECH_REPUBLIC: 			"Tjekkiet",
			DENMARK: 					"Danmark",
			DOMINICAN_REPUBLIC: 		"Dominikanske Republik",
			ECUADOR: 					"Ecuador",
			EGYPT: 						"Egypten",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estland",
			ETHIOPIA: 					"Etiopien",
			FAEROE_ISLANDS: 			"Færøerne",
			FINLAND: 					"Finland",
			FRANCE: 					"Frankrig",
			FRENCH_GUIANA: 				"Fransk Guyana",
			FRENCH_POLYNESIA: 			"Fransk Polynesien",
			GEORGIA: 					"Georgien",
			GERMANY: 					"Tyskland",
			GREECE: 					"Grækenland",
			GREENLAND: 					"Grønland",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hongkong",
			HUNGARY: 					"Ungarn",
			ICELAND: 					"Island",
			INDIA: 						"Indien",
			INDONESIA: 					"Indonesien",
			IRAN: 						"Iran",
			IRAQ: 						"Irak",
			IRELAND: 					"Irland",
			ISRAEL: 					"Israel",
			ITALY: 						"Italien",
			JAMAICA: 					"Jamaica",

			JAPAN: 						"Japan",
			JAPAN_1: 					"Japan 1",
			JAPAN_2: 					"Japan 2",
			JAPAN_3: 					"Japan 3",
			JAPAN_4: 					"Japan 4",
			JAPAN_5: 					"Japan 5",
			JAPAN_6: 					"Japan 6",

			JORDAN: 					"Jordan",
			KAZAKHSTAN: 				"Kasakhstan",
			KENYA: 						"Kenya",

			NORTH_KOREA: 				"Nordkorea",
			KOREA_REPUBLIC: 			"Republikken Korea",
			KOREA_REPUBLIC_3: 			"Republikken Korea 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Letland",
			LEBANON: 					"Libanon",
			LIBYA: 						"Libyen",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Litauen",
			LUXEMBOURG: 				"Luxembourg",
			MACAU: 						"Macao",
			MACEDONIA: 					"Den Tidligere Jugoslaviske Republik Makedonien",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malaysia",
			MALDIVES: 					"Maldiverne",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinique",
			MAURITIUS: 					"Mauritius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Mexico",
			MONACO: 					"Fyrstendømmet Monaco",
			MONGOLIA: 					"Mongoliet",
			MOROCCO: 					"Marokko",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Nederlandene",
			NETHERLANDS_ANTILLES: 		"Nederlandske Antiller",

			NEW_ZEALAND: 				"New Zealand",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Norge",
			NORTHERN_MARIANA_ISLANDS: 	"Nordlige Marianaøer",
			OMAN: 						"Oman",
			PAKISTAN: 					"Islamiske Republik Pakistan",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua Ny Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Peru",
			PHILIPPINES: 				"Republikken Filippinerne",
			POLAND: 					"Polen",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Réunion",
			ROMANIA: 					"Rumænien",
			RUSSIA: 					"Rusland",
			RWANDA: 					"Rwanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Saudi-arabien",
			SINGAPORE: 					"Singapore",
			SLOVAK_REPUBLIC: 			"Slovakiet",
			SLOVENIA: 					"Slovenien",
			SOUTH_AFRICA: 				"Sydafrika",
			SPAIN: 						"Spanien",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Surinam",
			SWEDEN: 					"Sverige",
			SWITZERLAND: 				"Schweiz",
			SYRIA: 						"Syrien",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tanzania",
			THAILAND: 					"Thailand",
			TRINIDAD_TOBAGO: 			"Trinidad og Tobago",
			TUNISIA: 					"Tunesien",
			TURKEY: 					"Tyrkiet",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ukraine",
			UNITED_ARAB_EMIRATES: 		"Forenede Arabiske Emirater",
			UNITED_KINGDOM: 			"Storbritannien",
			UNITED_STATES: 				"USA",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Usbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnam",
			VIRGIN_ISLANDS: 			"Jomfruøerne (USA)",
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
			M_INDONESIA:                                                  "Indonesien",
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
			M_LUXEMBOURG:                                                 "Luxembourg",
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
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midwayøerne, Samoa",
			HAWAII: 					"(GMT-10:00) Hawaii",
			ALASKA: 					"(GMT-09:00) Alaska",
			PACIFIC_TIME: 				"(GMT-08:00) Stillehavstid",
			MOUNTAIN_TIME: 				"(GMT-07:00) Mountain Time (USA Canada)",
			CENTRAL_TIME: 				"(GMT-06:00) Central Time (USA Canada)",
			EASTERN_TIME: 				"(GMT-05:00) Eastern Time (USA Canada)",
			CARACAS:					"(GMT-04:30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04:00) Atlantic Time (Canada)",
			NEWFOUNDLAND: 				"(GMT-03:30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brasilia, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Midt-Atlantisk",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azorerne, Kap Verde øerne",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwich Mean Time, Dublin, London",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlin, Stockholm, Rom, Bern, Bruxelles",
			ATHENS_HELSINKI: 			"(GMT+02:00) Athen, Helsinki, Østeuropa, Israel",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Bagdad, Kuwait, Nairobi, Riyadh, Moskva",

			TEHERAN: 					"(GMT+03:30) Teheran",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Ekaterinburg.",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Calcutta, Bombay, New Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Beijing, Hong Kong, Perth, Singapore",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Salomonøerne, Ny Kaledonien",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamchatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Anvendelse",
			GAME:						"SPIL",
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

			MONDAY: 					"Mandag",
			TUESDAY: 					"Tirsdag",
			WEDNESDAY: 					"Onsdag",
			THURSDAY: 					"Torsdag",
			FRIDAY: 					"Fredag",
			SATURDAY: 					"Lørdag",
			SUNDAY: 					"Søndag",
			
			MON: 						"Man.",
			TUES: 						"Tir.",
			WED: 						"Ons.",
			THUR: 						"Tor.",
			FRI: 						"Fre.",
			SAT: 						"Lør.",
			SUN: 						"Søn.",

			JAN: 						"Jan.",
			FEB: 						"Feb.",
			MAR: 						"Mar.",
			APR: 						"Apr.",
			MAY: 						"Maj",
			JUN: 						"Jun.",
			JUL: 						"Jul.",
			AUG: 						"Aug.",
			SEP: 						"Sep.",
			OCT: 						"Okt.",
			NOV: 						"Nov.",
			DEC: 						"Dec."

		},

		HOUR: {
			AM_1: 						"kl. 1:00",
			AM_2: 						"kl. 2:00",
			AM_3: 						"kl. 3:00",
			AM_4: 						"kl. 4:00",
			AM_5: 						"kl. 5:00",
			AM_6: 						"kl. 6:00",
			AM_7: 						"kl. 7:00",
			AM_8: 						"kl. 8:00",
			AM_9: 						"kl. 9:00",
			AM_10: 						"kl. 10:00",
			AM_11: 						"kl. 11:00",
			AM_12: 						"kl. 12:00",
			PM_1: 						"kl. 13:00",
			PM_2: 						"kl. 14:00",
			PM_3: 						"kl. 15:00",
			PM_4: 						"kl. 16:00",
			PM_5: 						"kl. 17:00",
			PM_6: 						"kl. 18:00",
			PM_7: 						"kl. 19:00",
			PM_8: 						"kl. 20:00",
			PM_9: 						"kl. 21:00",
			PM_10: 						"kl. 22:00",
			PM_11: 						"kl. 23:00",
			PM_12: 						"kl. 24:00"
		},

		ORDER: {
			"1ST": 						"Første",
			"2ND": 						"Anden",
			"3RD": 						"Tredje",
			"4TH": 						"Fjerde",
			"5TH": 						"Sidste",
			"1ST_": 					"1",

			TH: 						"."
		},

		GRID: {
			CLIENT_NUMBER: 				"Klientnummer",

			ID: 						"ID",
			MODIFY: 					"Ændre",
			STATUS: 					"Status",
			ENABLE: 					"Aktiver",

			OPERATION: 					"Drift",
			CHOOSE: 					"Vælg",
			DESCRIPTION: 				"Beskrivelse",
			

			AUTO_REFRESH: 				"Automatisk opdatering",
			REFRESH: 					"Opdater",
			NUMBER: 					"Antal",
			ENABLED: 					"Aktiveret",
			DISABLED: 					"Deaktiveret",
			ACTIVE: 					"Aktiv",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Tilføj",
			CHOOSE: 					"Vælg",
			EDIT: 						"Rediger",
			DELETE: 					"Slet",
			DELETE_ALL: 				"Slet alle",
			REMOVE: 					"Fjern",
			RESET: 						"Nulstil",
			RESET_ALL: 					"Nulstil alle",
			DETECT: 					"Registrer",
			ENABLE: 					"Aktiver",
			DISABLE: 					"Deaktiver",
			CLEAR: 						"Ryd",

			REFRESH: 					"Opdater",
			SEARCH: 					"Søg...",
			BROWSE: 					"Gennemse",

			SAVE: 						"Gem",
			BACK: 						"Tilbage",

			PREV: 						"Forr.",
			NEXT: 						"Næste",
			FINISH: 					"Afslut",
			
			ON: 						"Tændt",
			OFF: 						"Slukket",
			LOW: 						"Lav",
			MIDDLE: 					"Midt",
			HIGH: 						"Høj",
			
			OK: 						"OK",
			CANCEL: 					"Annuller",

			YES: 						"Ja",
			NO: 						"Nej",
			
			CONNECTED: 					"Tilsluttet",
			CONNECTING: 				"Tilslutter",
			DISCONNECTING: 				"Afbryder",
			DISCONNECTED: 				"Ikke tilsluttet",

			PASSWORD_HINT: 				"Adgangskode",
			FILEBUTTONTEXT: 			"Gennemse",
			FILEBLANKTEXT: 				"Vælg en fil.",
			NOSELECTEDTEXT: 			"Vælg indstillinger.",

			ADD_A_NEW_KEYWORD: 			"Tilføj et nyt søgeord",

			SUCCESSED: 					"Succes!",
			FORM_SAVED: 				"Gemt",
			FORM_FAILED: 				"Mislykket",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Gemt",
			GRID_FAILED: 				"Mislykket",
			GRID_NONE_SELECT: 			"Vælg mindst én post.",
			GRID_DELETE_COMFIRM: 		"Er du sikker på, at du vil slette disse poster?",
			GRID_DELETE_ALL_COMFIRM: 	"Er du sikker på, at du vil slette alle posterne?",
			GRID_MAX_RULES: 			"Maksimum antal  poster overskredet.",
			KEYWORD_MAX_OVERFLOW: 		"Der er for mange søgeord.",

			NOTE: 						"Bemærk:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Ugyldigt format.",
			BLANKTEXT: 					"Dette felt er obligatorisk.",

			EMAIL: 						"Ugyldigt e-mailformat.",
			NUMBER: 					"Ugyldigt format.",

			NUMBER_MIN: 				"Ugyldig værdi. Indtast et nummer større end %min.",
			NUMBER_MAX: 				"Ugyldig værdi. Indtast et nummer mindre end %max.",

			NUMBER_MIN_MAX: 			"Ugyldig værdi. Indtast et tal mellem %min og %max.",
			HEX: 						"Dette felt skal være et hexadecimalt tal.",

			IP: 						"Ugyldigt format.",

			IP_NO_ALL_ZERO:				"Adressen bør ikke være 0.0.0.0.",
			IP_NO_LOOP:					"Adressen bør ikke være en tilbagekoblingsadresse.",
			IP_NO_D_TYPE:				"Adressen bør ikke være en klasse D IP.",
			IP_NO_E_TYPE:				"Adressen bør ikke være en klasse E IP.",
			IP_NO_ALL_ONE:				"Adressen bør ikke være 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"Adressen bør ikke starte med 255.",
			IP_NO_FIRST_ZERO:			"Adressen bør ikke starte med 0.",
			MASK_NO_ALL_ONE:			"Masken kan ikke være 255.255.255.255.",

			IPV6: 						"Ugyldigt format.",
			IPV6_NOT_GLOBAL:			"Ugyldigt format.",
			IPV6_NOT_PREFIX:			"Ugyldigt format.",
			IP_DOMAIN: 					"Ugyldigt format.",
			IPV6_DOMAIN: 				"Ugyldigt format.",
			MAC: 						"Ugyldigt format.",
			MULTI_MAC:					"Ugyldigt format.",
			DATE: 						"Ugyldigt format.",
			DATE_INVALID: 				"Indtast en dato mellem 01/01/1970 og 12/31/2030.",
			MASK: 						"Ugyldigt format.",
			DOMAIN: 					"Ugyldigt format.",
			STRING_DOMAIN:              "Ugyldigt format.",
			USER: 						"Ugyldigt format.",
			NOTE: 						"Ugyldigt format.",
			PWD: 						"Ugyldigt format.",
			SSID: 						"Ugyldigt format.",
			NAME:						"Ugyldigt format.",
			ASCII_VISIBLE:				"Ugyldigt format.",
			STRING_VISIBLE:				"Ugyldigt format.",
			STRING_VISIBLE_NO_COMMA:    "Ugyldigt format.",
			STRING_VISIBLE_ALLOW_BLANK: "Ugyldigt format.",
			NAME_SPECIAL: 				"Indtast 4-15 alfanumeriske tegn, tal - og _.",
			VPN_NAME_PWD: 				"Indtast 1-15 alfanumeriske tegn, tal - og _."	
			
		},


		ERROR: {			
			"00000001":					"Ugyldig filtype.",
			"00000002":					"Checksumfejl.",
			"00000003":					"Filen er for stor.",
			"00000004":					"Fejl ved overførsel.",
			"00000005":					"Genstart-fejl.",
			"00000006":					"Ukendt fejl.",
			"00000007":					"Elementet findes allerede. Indtast en anden.",

			"00000009":					"Brug standardværdien 21, eller indtast en værdi mellem 1024 og 65535.",
			"00000010":					"Porten skal være et tal.",

			"00000011":					"Brugernavn skal være det samme som Fra-værdien.",
			"00000012": 				"Brugernavnet skal begynde med et bogstav.",

			"00000021":					"Ugyldigt format.",

			"00000032": 				"Værdien skal være mindre end lav.",
			"00000033": 				"Værdien skal være mindre end midt og lav.",
			"00000034": 				"Ugyldig værdi. Indtast et tal mellem 5 og 7200.",

			"00000039": 				"Brug standardværdien 0, eller indtast en værdi mellem 30 og 86400.",
			"00000040": 				"SSID-og MAC-adresse er påkrævet.",

			"00000042": 				"Brug standardværdien 80, eller indtast en værdi mellem 1024 og 65535.",

			"00000045": 				"Standard Gateway og LAN IP-adresse skal være i samme undernet. Indtast igen.",

			"00000047": 				"IP-adresse og LAN IP-adresse skal være i samme undernet. Indtast igen.",

			
			"00000049":					"Netværksdestination er ugyldig.",

			"00000050": 				"Dårlig IP-adresse for DNS-server. Indtast en anden IP-adresse.",
			"00000051": 				"Denne MAC-adresse findes allerede. Indtast en anden.",
			"00000052": 				"Denne IP-adresse findes allerede. Indtast en anden.",

			"00000053": 				"Startadressen bør ikke være større end slutadressen. <br/>Indtast igen.",

			"00000054": 				"IP-adressepulje og LAN IP-adresse skal være i samme undernet. Indtast igen.",

			"00000055": 				"IP kan ikke være den samme som LAN-adressen.",

			"00000056": 				"Den fjerne IP-adresse og den aktuelle LAN IP-adresse skal ikke være i samme undernet. Indtast en anden.",

			"00000057": 				"Ugyldig PSK-adgangskode, indtast igen.",
			"00000058": 				"Ugyldig WEP-adgangskode, indtast igen.",

			"00000059": 				"Ugyldig undernetmaske og LAN-IP-adresse, indtast en gyldig en.",

			"00000060": 				"WAN IP-adresse og LAN IP-adresse skal være i samme undernet. <br/>Indtast en anden.",

			"00000061": 				"Begyndelsestidspunktet skal være tidligere end sluttidspunktet.",

			"00000062": 				"Dette felt er obligatorisk.",
			"00000063": 				"Dette felt er obligatorisk.",

			"00000064": 				"Kan ikke blokere for hostens MAC-adresse.",
			"00000065": 				"Dette element er i strid med eksisterende elementer. Kontroller.",
			
			"00000066": 				"Adgangskoden skal være 8 til 63 tegn eller 64 hexadecimale cifre.",
			"00000067": 				"Adgangskoden skal være 10 hexadecimale cifre.",
			"00000068": 				"Adgangskoden skal være 5 ASCII-tegn.",
			"00000069": 				"Adgangskoden skal være 26 hexadecimale cifre.",
			"00000070": 				"Adgangskoden skal være 13 ASCII-tegn.",
			"00000071": 				"Adgangskoden skal være 32 hexadecimale cifre.",
			"00000072": 				"Adgangskoden skal være 16 ASCII-tegn.",
			"00000073": 				"Adgangskoden skal være mindre end 64 tegn.",

			"00000074": 				"Ugyldig filtype.",

			"00000075": 				"Længden på pinkoden skal være 8.",

			"00000076": 				"Indtastningen er i konflikt med eksistende elementer. Kontroller udløser-porten og udløser- protokollen.",
			"00000077": 				"IP-adressen kan ikke være den samme som LAN-IP-adressen.",
			"00000078": 				"Host IP-adressen kan ikke være den samme som LAN-IP-adressen.",

			"00000080": 				"Adgangskoder passer ikke. Prøv igen.",

			"00000088": 				"Denne funktion er ikke tilladt for fjernadministration.",
			"00000089": 				"Du har overskredet %num forsøg. Prøv igen om to timer.",

			"00000090": 				"Destinationen kan ikke være en LAN IP-adresse.",
			"00000091": 				"Destinationen kan ikke være en WAN IP-adresse.",

			"00000092": 				"IP-adressen og LAN IP-adressen skal ikke være i samme undernet. <br/>Indtast igen.",
			"00000093": 				"IP-adressen og WAN IP-adressen skal ikke være i samme undernet. <br/>Indtast igen.",

			"00000094": 				"VLAN-id'er kan ikke være de samme.",
			"00000095": 				"Mindst én internetport kræves.",

			"00000096": 				"Nøgleordet findes allerede.",

			"00000097": 				"Konfigurationer til 2,4 GHz båndet vil ikke træde i kraft før knappen for trådløs forbindelse er tændt (ON).",
			"00000098": 				"Konfigurationer til 5GHz båndet vil ikke træde i kraft før knappen for trådløs forbindelse er tændt (ON).",
			"00000099": 				"Konfigurationer til 2,4 GHz og 5 GHz båndene vil ikke træde i kraft før knappen for trådløs forbindelse er tændt (ON).",

			"00000100": 				"5GHz netværkskonfigurationen er ikke tilgængelig pga. begrænsninger i dit område/land.",

			"00000101": 				"Den trådløse funktion er slået fra. Hvis du vil bruge denne funktion. Tryk på knappen for trådløs forbindelse.",
			"00000102": 				"Den trådløse funktion er slået fra. Hvis du vil bruge denne funktion. Tryk på knappen for trådløs forbindelse.",

			"00000103": 				"Den trådløse funktion er slået fra. Hvis du vil bruge denne funktion. Tryk på knappen for trådløs forbindelse.",
			"00000104": 				"Den trådløse funktion er deaktiveret.",

			"00000105": 				"QoS og IPTV kan ikke aktiveres på samme tid.",

			"00000106": 				"IP-adressen kan ikke være den samme som LAN-IP-adressen.",
			
			"00000107": 				"Destinationen findes allerede.",

			"00000110": 				"IP-adressen og LAN IP-adressen bør være i samme undernet.",
			
			"00000111": 				"QoS og <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> kan ikke aktiveres på samme tid.",
			"00000112": 				"WDS-funktionen kan arbejde enten på 2,4 GHz eller 5 GHz-båndet. Gæstenetværket er heller ikke tilgængeligt på WDS-båndet.",
			"00000113": 				"WDS og gæstenetværket kan ikke aktiveres på samme tid.",
			"00000114": 				"Statistik over trafik og <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> kan ikke aktiveres på samme tid.",
			"00000115": 				"IPTV og <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> kan ikke aktiveres på samme tid.",

			"00000117": 				"Domænenavnet findes allerede.",
			"00000118": 				"Antallet af domænenavne har overskredet grænsen.",
			"00000119":				"NAT Boost vil blive deaktiveret, når enten <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> eller <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Statistik over trafik</a> er aktiveret.",

			"00000120": 				"Adgangskoden skal være 5 eller 13 ASCII-tegn.",
			"00000121": 				"Adgangskoden skal være 10 eller 26 hexadecimale cifre.",
			"00000122": 				"Brugernavn og adgangskode er tomme, er du sikker på, at du vil fortsætte?",
			"00000123": 				"Gemmer...  <br/>Brug ikke under processen.",
			"00000124": 				"Routerens PIN er låst på grund af gentagne forbindelser med forkerte kode. Opret en ny.",

			"00000125": 				"Antallet af QoS-regler har overskredet grænsen.",
			"00000126": 				"Filstørrelsen har overskredet grænsen.",
			"00000127": 				"Indholdet af filen er forkert.",
			"00000128": 				"Vælg mindst ét program.",
			"00000129": 				"Vælg mindst én fysisk port.",
			"00000130":					"WPS-funktionen er deaktiveret.",
			"00000131": 				"NTP-serveren bør ikke være en tilbagekoblingsadresse.",
			"00000132": 				"Ændring af tilstand mislykkedes. Prøv igen senere, eller genstart din router.",
			"00000133": 				"Ugyldig DMZ Host-IP-adresse. Indtast en gyldig en.",
			"00000134":  				"Ugyldig intern IP. Indtast en gyldig en.",
			"00000135": 				"Fejl med firmwarefilen.",
			"00000136": 				"Fejl med backupfilen.",
			"00000137": 				"Brugernavn er tomt, er du sikker på at du vil fortsætte?",
			"00000138": 				"Adgangskode er tomt, er du sikker på at du vil fortsætte?",
			"00000139": 				"Forkerte parametre for gendannelse af adgangskode.",
			"00000140": 				"Forkert kode.",
			"00000141": 				"Gendannelse af adgangskode er deaktiveret.",
			"00000142": 				"Kunne ikke sende koden. Kontroller din internetforbindelse.",
			"00000143": 				"Ugyldig e-mailadresse.",
			"00000144": 				"Ugyldig e-mail meddelelse.",
			"00000145": 				"Kunne ikke finde vært.",
			"00000146": 				"Godkendelse mislykkedes.",
			"00000147": 				"Porten skal være mellem 1 og 65535.",
			"00000148": 				"For et portinterval, bør startportnummeret være mindre end slutportnummeret. Indtast igen.",
			"00000149": 				"Portnummer overlapper. Indtast igen.",
			"00000150": 				"Ugyldig undernetmaske og WAN-IP-adresse, indtast en gyldig en.",
			"00000151": 				"Vælg mindst en dag.",
			"00000152": 				"Indstil adgangstid for internettid.",
			"00000213":					"DNS-serverens IP-adressen og LAN IP-adressen kan ikke være i samme undernet. <br/>Indtast en anden.",
			"10000139": 				"Ingen internetforbindelse",
			"10000140": 				"Anmodning fik timeout. Kontroller din Internet forbindelse, og prøv igen senere.",
			"10000158": 				"WAN-porten er afbrudt.",
			"10000159": 				"Kunne ikke oprette forbindelse til internettet. Kontakt din internetudbyder og prøv igen senere. ",
			"10000160": 				"Kunne ikke hente IP-adresse fra DHCP-serveren. Kontroller din Internetforbindelsestype og prøv igen senere.",
			"10000161": 				"PPPoE-godkendelse mislykkedes. Kontroller dit brugernavn og adgangskode.",
			"10000162": 				"Kunne ikke oprette forbindelse til PPPoE-serveren.",

			"10000164": 				"PPTP-godkendelse mislykkedes. Kontroller dit brugernavn og adgangskode.",
			"10000165": 				"Kunne ikke oprette forbindelse til PPTP-serveren.",

			"10000167": 				"L2TP-godkendelse mislykkedes. Kontroller dit brugernavn og adgangskode.",
			"10000168": 				"Kunne ikke oprette forbindelse til L2TP-serveren.",
			"10000169": 				"Ukendt fejl. Prøv igen senere.",
			"10000172": 				"Forbindelsesfejl.",

			"10000185": 				"Systemfejl.",	
			"10000186": 				"Fejl med firmwarefilen.",	
			"10000187": 				"Firmware downloadfejl.",	
			"10000188": 				"Firmware opgraderingsfejl.",	
			"10000191": 				"Kan ikke downloade firmwarefilen.",
			"10000192": 				"Firmware opgraderingsfejl.",
			"10000193": 				"Der kunne ikke oprettes forbindelse til serveren.",	
			"10000194": 				"Kunne ikke oprette forbindelse til sky-serveren. Prøv igen senere.",
			"10000195": 				"Du kan ikke indstille adgangskoden igen, fordi du allerede har en.",
			
			"E3002":                    "Anmodning fik timeout.", 
			"E10000": 					"Almindelig fejl.",
			"E20002": 					"Anmodning fik timeout.",
			"E20003": 					"Skyserveren er optaget. Prøv igen senere.",
			"E20107": 					"Ugyldigt input.",
			"E20200": 					"Ugyldigt e-mailformat.",
			"E20502": 					"Kunne ikke binde enheden. Prøv igen senere.",
			"E20503": 					"Ude af stand til ophæve binding for enheden. Prøv igen senere.",
			"E20506": 					"Handlingen mislykkedes. Enheden er allerede bundet til en skykonto.",
			"E20507": 					"Denne enhed er ikke bundet til kontoen.",
			"E20508": 					"Antallet af bundne konti har allerede nået den maksimale grænse.",
			"E20509": 					"Brugerkonti ikke har ret til at binde nye brugere.",
			"E20571": 					"Denne enhed er offline.",
			"E20580": 					"Handlingen mislykkedes. Denne konto er ikke bundet til enheden.",
			"E20600": 					"Denne e-mail er ikke registreret.",
			"E20601": 					"Forkert brugernavn eller adgangskode.",
			"E20602": 					"Denne konto er endnu ikke aktiveret.",
			"E20603": 					"Denne email er allerede registreret.",
			"E20604": 					"Ugyldigt brugernavn. Indtast en e-mailadresse eller telefonnummer.",
			"E20606": 					"Kan ikke sende aktiveringse-mailen.",
			"E20615": 					"Ugyldig adgangskode. Indtast 6-32 ASCII tegn uden mellemrum.",
			"E20616": 					"Ugyldig adgangskode. Indtast 6-32 ASCII tegn uden mellemrum.",
			"E20617": 					"Denne konto findes ikke.",
			"E20618": 					"Denne konto findes ikke.",
			"E20620": 					"Ugyldigt øgenavn. Indtast 1-64 tegn.",
			"E20661": 					"Denne konto bliver spærret i 2 timer pga. for mange logon-forsøg (20 gange i en halv time).",
			"E20662": 					"Enheden er låst. I de næste 24 timer, vil enheden ikke reagerer på nogen anmodning om godkendelseskoder.",
			"E20671": 					"Det er ikke muligt at verificere kontoen.",
			"E20672": 					"Det er ikke muligt at verificere kontoen. Kontoens aktiveringslink er udløbet. Indsend en ny ansøgning.",
			"E20673": 					"Linket til nulstilling af adgangskode er udløbet. Indsend en ny ansøgning.",
			"E20674": 					"Kan ikke nulstille adgangskoden.",
			"E20675": 					"Denne konto er i øjeblikket logget ind andre steder.",
			"E22000": 					"Ugyldigt input.",
			"E22001": 					"Domænenavnet er allerede registreret.",
			"E22002": 					"Antallet af registrerede domænenavne har allerede overskredet den øvre grænse.",
			"E22003": 					"Antallet af bundne domænenavne har allerede overskredet den øvre grænse.",
			"E22004": 					"Dette domænenavn er allerede bundet til en anden enhed.",
			"E22006": 					"Systemfejl. Prøv igen senere.",
			"E22007": 					"Domænenavn indeholder følsomme ord. Prøv en anden en.",
			"E22008": 					"Domænenavn findes ikke.",

			"E50101": 					"WAN-porten er afbrudt.",
			"E50102": 					"Kunne ikke oprette forbindelse til internettet. Kontakt din internetudbyder og prøv igen senere.",
			"E50103": 					"Kunne ikke hente IP-adresse fra DHCP-serveren. Kontroller din Internetforbindelsestype og prøv igen senere.",
			"E50111": 					"PPPoE-godkendelse mislykkedes. Kontroller dit brugernavn og adgangskode.",
			"E50112": 					"Kunne ikke oprette forbindelse til PPPoE-serveren.",
			"E50121": 					"PPTP-godkendelse mislykkedes. Kontroller dit brugernavn og adgangskode.",
			"E50122": 					"Kunne ikke oprette forbindelse til PPTP-serveren.",
			"E50131": 					"L2TP-godkendelse mislykkedes. Kontroller dit brugernavn og adgangskode.",
			"E50132": 					"Kunne ikke oprette forbindelse til L2TP-serveren.",
			"E50140": 					"Ukendt fejl. Prøv igen senere.",
			"E51215": 					"Anmodning fik timeout. Kontroller din Internet forbindelse, og prøv igen senere.",
			"E_CLOUD_SERVER": 			"Serverfejl. Prøv igen senere.",
			"E5000": 					"Kan ikke oprette forbindelse til skyserveren.",
			"E5001": 					"Forkert TP-Link-id (e-mail). Eller din enhed er offline, og kun admin (%email) har offline adgang.",
			"E5002": 					"Forkert adgangskode."
		},

		MENU: {
			STATUS: 					"Status",
			NETWORK: 					"Netværk",
			NETWORK_MAP: 				"Netværksoversigt",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP-server",
			DYNAMIC_DNS: 				"Dynamisk DNS",
			ADVANCED_ROUTING: 			"Avanceret routing",

			WIRELESS: 					"Trådløs",
			WIRELESS_SETTINGS: 			"Trådløse indstillinger",
			WDSBRIDGING: 				"WDS-bridging",
			WPS: 						"WPS",
			MACFILTERING: 				"MAC-filtrering",
			WIRE_STATISTICS: 			"Statistik",
			
			
			GUEST_NETWORK: 				"Gæstenetværk",
			WIRELESS_SETTINGS: 			"Trådløse indstillinger",
			STORAGE_SHARING: 			"Lagerdeling",
			NAT_FORWARDING: 			"NAT-videresendelse",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Virtuelle servere",
			PORT_TRIGGERING: 			"Portudløsning",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"USB-indstillinger",
			BASIC_SET: 					"Grundlæggende indstillinger",
			DISK_SET: 					"Enhedsindstillinger",
			FOLDER_SHARING: 			"Delt adgang",
			STORAGE_SHARING: 			"Lagerdeling",
			FTP_SERVER: 				"FTP-server",
			MEDIA_SERVER: 				"Medie-server",
			PRINT_SERVER: 				"Printerserver",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Forældrekontrol",
			
			QOS:  						"QoS",
			DATABASE:  					"Database",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Oversigt",
			SB_MAP: 					"Oversigt",
			SB_BANDWIDTH:  				"Båndbredde",
			SB_PRIORITY: 				"Prioritet",
			SB_STATISTICS: 				"Statistik",

			
			SECURITY: 					"Sikkerhed",
			SETTINGS: 					"Indstillinger",
			ACCESS_CONTROL: 			"Adgangskontrol",
			IP_MAC_BINDING: 			"IP&MAC-binding",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Systemværktøjer",
			TIME_SETTINGS: 				"indstilling af tid",
			DIAGNOSTIC: 				"Fejlfinding",
			FIRMWARE_UPGRADE: 			"Opgradering af firmware",
			BACKUP_RESTORE: 			"Backup og gendannelse",
			ADMINISTRATION: 			"Administration",
			SYSTEM_LOG: 				"Systemlog",
			STATISTICS: 				"Statistik over trafik",
			SYSTEM_PARAMETERS: 			"Systemparametre",
			ACCOUNT: 					"TP-Link Sky",
			
			VPN: 						"VPN-server",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"VPN-forbindelser"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Region og tidszone",
			INTERNET_CONNECTION_TYPE: 	"Internetforbindelsestype",
			WIRELESS_SETTINGS: 			"Trådløse indstillinger",
			SUMMARY: 					"Oversigt",
			SETUP_COMPLETE: 			"Test din internetforbindelse",
			SETUP_COMPLETE_CLOUD: 			"TP-Link skyservice",

			EXIT: 						"Afslut",
			NEXT: 						"Næste",
			SAVE: 						"Gem",
			FINISH: 					"Afslut",
			OK: 						"OK",
			NONE: 						"Registrering mislykkedes.",

			REGION: 					"Location (Placering)",
			TIME_ZONE: 					"Tidszone",

			AUTO_DETECT: 				"Automatisk registrering",
			DYNAMIC_IP: 				"Dynamisk IP",
			STATIC_IP: 					"Statisk IP",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Hvis du ikke er sikker på, hvilken type internetforbindelse du har, kan du bruge Automatisk identifikation eller kontakte din internetudbyder (ISP) for hjælp.",

			DYNAMIC_IP_INFO: 			"Hvis din internetudbyder kun tillader adgang til internettet til en bestemt MAC-adresse, skal du klone den MAC-adresse for at få adgang til andre enheder. Hvis du ikke er sikker, skal du vælge Klon IKKE MAC-adressen.",
			MAC_CLONE_NO: 				"Klon IKKE MAC-adressen",
			MAC_CLONE_YES: 				"Klon computerens aktuelle MAC-adresse",
			MAC_CLONE_NOTE: 			"Hvis du vælger Klon MAC-adressen. Sørg for at MAC-adressen på denne computer er registreret hos din internetudbyder, inden du klikker på Næste.",

			PPPOE_INFO: 				"Indtast dit PPPoE-brugernavn og adgangskode.",
			
			STATIC_IP_INFO: 			"Indtast dine IP-oplysninger.",

			L2TP_INFO: 					"Indtast dit L2TP-brugernavn og adgangskode.",
			PPTP_INFO: 					"Indtast dit PPTP-brugernavn og adgangskode.",
			
			USERNAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			SERVER_IP_ADDRESS_NAME: 	"VPN-server IP/domænenavn",
			IP_ADDRESS: 				"IP-adresse",
			SUBNET_MASK: 				"Undernetmaske",
			DEFAULT_GATEWAY: 			"Standard gateway",
			PRIMARY_DNS: 				"Primær DNS",
			SECOND_DNS: 				"Sekundær DNS",
			OPTIONAL: 					"(Valgfri)",
			
			ON: 						"Tændt",
			OFF: 						"Slukket",
			WIRELESS_24GHZ: 			"Trådløs 2,4 GHz",
			WIRELESS_5GHZ: 				"Trådløs 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Aktiver trådløs radio",
			NAME_SSID: 					"SSID (Navn på trådløst netværk)",

			SUMMARY_INFO1: 				"Du skal tilslutte din trådløse enheder til det nye trådløse netværk inden du klikker på knappen <strong>Next (Næste)</strong>.",
			SUMMARY_INFO2: 				"Dit trådløse navn og adgangskode er blevet modificeret som nedenfor:",
			SUMMARY_INFO3: 				"Sørg for at du er forbundet til det nye trådløse netværk.",

			WIRELESS_24GHZ_SSID: 		"SSID (Navn på trådløst 2,4GHz netværk)",
			WIRELESS_24GHZ_PASSWORD: 	"Adgangskode for 2,4GHz trådløst netværk:",
			WIRELESS_5GHZ_SSID: 		"SSID (Navn på trådløst 5GHz netværk)",
			WIRELESS_5GHZ_PASSWORD: 	"Adgangskode for 5GHz trådløst netværk:",

			SORRY: 						"Mislykket.",
			SUCCESS: 					"Succes!",
			TEST_INTERNET_SUCCESS_INFO: "Klik på Finish (Afslut) for at afslutte Hurtig opsætning.",

			TEST_INTERNET_FAILED_INFO_0:"Kontroller at alle parametre for hurtig opsætning er korrekte og prøv igen. Hvis alle parametre for hurtig opsætning er korrekte. Genstart dit modem, vent 2 minutter, og klik på Test internetforbindelse én gang mere. Hvis du ikke bruger et modem, kan du kontakte din internetudbyder for at få hjælp.",
			TEST_INTERNET_FAILED_INFO_1: "Hovsa... Internetforbindelsen er ikke konfigureret korrekt.<br />1. Kontrollér, at alle kabler er tilsluttet korrekt.<br />2. Klik på Back (Tilbage) og kontroller, at oplysningerne om internetforbindelsen er korrekte.<br />3. Kontakt vores teknisk support hvis problemet stadig består.",
			SUMMARY_INFO4: 				"Beklager! Vi ser opdager, at du ikke har tilsluttet din trådløse enhed til den nye trådløse netværk. Du skal gøre dette og derefter klikke på <strong>OK </strong>.",
                                         
			CONGRATULARIONS: 			"Tillykke!",
			COMPLETE_INFO_0: 			"Du har fuldført processen for hurtig opsætning.",
			COMPLETE_INFO_1:			"Klik på Test internetforbindelse nedenfor og klik derefter på Finish (Afslut).",
			COMPLETE_INFO_2: 			"Du er ikke logget på din TP-Link skykonto. Du kan logge på senere fra Basic > TP-Link Cloud.",
			TEST_INTERNET: 				"Test din internetforbindelse",

			
			RESET_USER_TITLE: 			"Opret et nyt brugernavn og adgangskode",
			NEW_USERNAME: 				"Nyt brugernavn",
			NEW_PASSWORD: 				"Ny adgangskode",
			CONFIRM_PASSWORD: 			"Bekræft ny adgangskode",
			
			NO_ACCOUNT: 				"Ingen TP-Link-id?",
			REGISTER_NOW: 				"Tilmeld dig nu",
			REGISTER_SKIP: 				"Log på senere",
			LOGIN: 						"Log på",
			REGISTER_NEW:				"Registrer en ny konto",
			COMPLETE_INFO_EMAIL_PREFIX: "Din TP-Link-id er:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Vi anbefaler på det kraftigste, at du logger på via denne konto for nem styring af alle enheder og flere TP-Link sky-funktioner.",

			INTERNET_OK: 				"Tillykke! Opsætning af netværk færdig. Nyd internettet.",
			CLOUD_WIZARD: 				"For flere TP-Link Cloud-funktioner, skal du logge ind med din <a class=\"link\" href=\"#\"> TP-Link ID </a>.",
			ACCOUNT_DESP:               "Med en TP-Link-id, kan du:", 
			ACCOUNT_DESP_SUB1:          "Vælg din enhed og lokale servere (FTP, HTTP osv.) hvor som helst via internettet",
			ACCOUNT_DESP_SUB2:          "Hold altid din firmware opdateret med funktionen Online opgradering",
	        ACCOUNT_DESP_SUB3:          "Administrer flere enheder med kun én konto",
			
			CONFIRM: 					"Bekræft"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Internetstatus",

			GHZ24: 						"2,4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Forbindelsestype",
			SECONDARY_CONN: 			"Sekundær forbindelse",

			POOR_CONNECTED: 			"Dårlig forbindelse",
			UNPLUGGED: 					"WAN-porten er afbrudt.",
			
			CONNECTED: 					"Tilsluttet",
			DISCONNECTED: 				"Afbrudt",

			INTERNET_IP_ADDR: 			"IP-adresse",
			
			IP_ADDR: 					"IP-adresse",
			MAC_ADDR: 					"MAC-adresse",
			GATEWAY: 					"Gateway",

			AUTO: 						"Auto",
			
			ROUTER: 					"Router",
			WIRELESS_CLIENTS: 			"Trådløse klienter",
			HOST_CLIENTS: 				"Host-klienter",
			GUEST_CLIENTS: 				"Gæsteklienter",
			WIRE_CLIENTS: 				"Kablede klienter",
			PRINTER: 					"Printer",
			USB_DISK: 					"USB-disk",
			WIRELESS: 					"Trådløs",
			NAME: 						"Navn",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Kanal",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Trådløs 2,4 GHz",
			WIRELESS_5GHZ: 				"Trådløs 5GHz",
			
			GUEST_24GHZ: 				"Gæstenetværk 2,4GHz",
			GUEST_5GHZ: 				"Gæstenetværk 5GHz",
			
			STATUS: 					"Status",
			TOTAL: 						"Total",
			AVAILABLE: 					"Tilgængelig",
			GB: 						"GB",
			BRAND: 						"Mærke",

			DYNAMIC_IP: 				"Dynamisk IP",
			STATIC_IP: 					"Statisk IP",
			SUBNET_MASK: 				"Undernetmaske",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond-kabel",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4-tunnel",
			NONE: 						"Ingen"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Automatisk registrering",
			INTERNET_CONN_TYPE: 		"Internetforbindelsestype",
			DYNAMIC_IP: 				"Dynamisk IP",
			STATIC_IP: 					"Statisk IP",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond-kabel",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"Dhcp",
			UNPLUGGED: 					"WAN-porten er afbrudt.",
			NONE: 						"Ingen",
			DETECT_FAIL: 				"Automatisk identifikation mislykkedes",
			SECONDARY_CONN: 			"Sekundær forbindelse",

			DYNAMIC_YES: 				"Klon IKKE MAC-adressen",
			DYNAMIC_NO: 				"Klon computerens aktuelle MAC-adresse",
			
			IP_ADDR: 					"IP-adresse",
			SUBNET_MASK: 				"Undernetmaske",
			DEFAULT_GATEWAY: 			"Standard gateway",
			PRIMARY_DNS: 				"Primær DNS",
			SECOND_DNS: 				"Sekundær DNS",
			OPTIONAL: 					"(Valgfri)",
			USER_NAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			SERVER_IP_ADDR_NAME: 		"VPN-server IP/domænenavn",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Hvis du ikke er sikker på, hvilken type internetforbindelse du har, kan du bruge Automatisk identifikation eller kontakte din internetudbyder (ISP) for hjælp."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Trådløse indstillinger",
			MODE_2G: 					"Trådløs 2,4 GHz",
			MODE_5G: 					"Trådløs 5GHz",
			WIRELESS_NETWORK_NAME: 		"SSID (Navn på trådløst netværk)",
			WIRELESS_PASSWORD: 			"Adgangskode",
			ENABLE_WIRELESS: 			"Aktiver trådløs radio",
			SAVE: 						"Gem",
			ENCRYPTION_2G_NOTICE:		"2,4 GHz kryptering er %s.",
			ENCRYPTION_5G_NOTICE:		"5GHz kryptering er %s.",
			ENCRYPTION_2G_NO: 			"2,4 GHz trådløst netværk er ikke krypteret.",
			ENCRYPTION_5G_NO: 			"5GHz trådløst netværk er ikke krypteret.",
			ENCRYPTION_SURE: 			"Er du sikker på, at du vil fortsætte?",

			HIDE_SSID: 					"Skjul SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Grundlæggende indstillinger",
			TITIL_NEW:					"Disk&Account",
			DISK_SET:					"Enhedsindstillinger",

			SELFLY_REMOVE:				"Sikker fjernelse",
			SCANING:					"Scanning...",
			SCAN_RESULT:				"Fandt %n diske",
			
			DISKS:						"Diske",
			USERS: 						"Brugerkonto",
			DEVICENAME: 				"Enhedsnavn",
			VOLUMN: 					"Volumen",

			USBSPACE: 					"Brugt plads",
			FREESPACE: 					"Ledig plads",
			STATUS: 					"Status",
			INACT: 						"Inaktiver",
			USAGE: 						"Brug",
			CAPACITY: 					"Kapacitet",
			OPERATION: 					"Drift",
			
			ACC: 						"Kontostyring",
			USERNAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			USE_LOGIN: 					"Brug Login bruger",
			SCAN: 						"Scan",
			ENJECT_ALL: 				"Skub alle ud",
			ENJECT: 					"Skub ud",
			ADD_USER: 					"Tilføj bruger",
			AUTH: 						"Autoritet",


			LOCATION: 					"Location (Placering)",
			MOBILE_ISP: 				"Mobil-ISP",
			DIAL_NUMBER: 				"Ring til nummeret",
			APN: 						"APN",
			USERNAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			MTU_SIZE: 					"MTU-størrelse (i bytes)",
			OPTIONAL: 					"(Valgfri)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Forældrekontrol",

			DEVICE_CTR: 				"Enheder med forældrekontrol",
			ID: 						"ID",
			DEVICE: 					"Enhedsnavn",
			MAC_ADDRESS: 				"MAC-adresse",
			TIME: 						"Internet-tid",
			DESCRIPTION: 				"Beskrivelse",
			ENABLE: 					"Aktiver",
			ENABLE_THIS_ENTRY: 			"Aktiver",
			OPTIONAL: 					"(Valgfri)",
			BTN_VIEW: 					"See eksisterende enheder",
			ACCESS_DEVICES_LIST: 		"Enhedsliste",
			OPT: 						"Drift",
			STATUS: 					"Status"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Gæstenetværk",
			MODE_2G: 					"Trådløs 2,4 GHz",
			MODE_5G: 					"Trådløs 5GHz",
			WIRELESS_NETWORK_NAME: 		"SSID (Navn på trådløst netværk)",
			WIRELESS_PASSWORD: 			"Adgangskode",
			ENABLE_WIRELESS: 			"Aktiver gæstenetværk",
			SAVE:						"Gem",
			HIDE_SSID: 					"Skjul SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Sky-konto",
			OFFLINE_NOTE_TITLE: 		"Enheden er offline",
			LOGIN_NOTE_TITLE: 			"Hovsa...",
			LOGIN_OFFLINE_NOTE: 		"Enheden er offline. Kontroller WAN og netværkskonfiguration for at sikre at de relevante indstillinger er indtastet korrekt.",

			EMAIL: 						"E-mail",
			PASSWORD: 					"Adgangskode",
			FORGET_PASSWORD: 			"Glemt adgangskode?",

			CLOUD_WIZARD: 				"For flere TP-Link Cloud-funktioner, skal du logge ind med din <a class=\"link\" href=\"#\"> TP-Link ID </a>.",
			NO_ACCOUNT: 				"Ingen TP-Link-id?",
			REGISTER_NOW: 				"Tilmeld dig nu"
		},
		STATUS: {
			TITLE: 						"Status",
			INTERNET:					"Internet",
			WIRELESS:					"Trådløs",
			LAN:						"LAN",
			USB_TITLE:					"USB-enheder",
			PERFORMANCE: 				"Ydeevne",
			GUEST_NETWORK: 				"Gæstenetværk",
			ACCESS_DEVICES: 			"Få adgang til enheder",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2,4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Forbindelsestype",

			MAC_ADDRESS: 				"MAC-adresse",
			IP_ADDRESS: 				"IP-adresse",
			RELEASE: 					"Udgivelse",
			RENEW: 						"Forny",
			
			DYNAMIC_IP: 				"Dynamisk IP",
			STATIC_IP: 					"Statisk IP",
			SUBNET_MASK: 				"Undernetmaske",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond-kabel",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4-tunnel",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Passthrough (Bro)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Ingen",
			
			DEFAULT_GATEWAY: 			"Standard gateway",
			DNS: 						"DNS-server",
			MAC: 						"MAC-adresse",
			WDS_STATUS: 				"WDS-status",
			
			IPV6_ADDRESS: 				"IP-adresse",
			PRIMARY_DNS: 				"Primær DNS",
			SECOND_DNS: 				"Sekundær DNS",

			RADIO: 						"Trådløs radio",

			NAME_SSID: 					"Navn (SSID)",
			NETWORK_NAME_SSID:			"SSID (Navn på trådløst netværk)",
			HIDE_SSID: 					"Skjul SSID",
			MODE: 						"Tilstand",
			CHANNEL: 					"Kanal",
			CHANNEL_WIDTH: 				"Kanalbredde",
			AUTO: 						"Auto",
			CURRENT_CHANNEL: 			"Aktuelle kanal",

			WDS: 						"WDS-status",
			WIRED_CLIENTS: 				"Kablede klienter",
			WIRELESS_CLIENTS: 			"Trådløse klienter",

			ENABLE_DHCP: 				"Dhcp",
			LINKADDR:					"Link til lokal adresse",
			ASSIGN_TYPE: 				"Tildelt type",

			ALLOW_TO_SEE_EACH: 			"Giv gæsterne mulighed for at se hinanden",

			TOTAL: 						"Total:",
			AVAILABLE: 					"Tilgængelig:",

			USB: 						"USB-disk",
			PRINTER: 					"Printer",

			CPU_LOAD: 					"CPU-belastning",
			MEMORY_USAGE: 				"Brug af hukommelse",

			IP_ADDR_P: 					"IP-adresse:",
			MAC_ADDR_P: 				"MAC-adresse:",
			CONN_TYPE_P: 				"Forbindelsestype:",

			DISABLED: 					"Deaktiveret",
			INIT: 						"Init",
			SCAN: 						"Scan",
			AUTH: 						"Tilladelse",
			ASSOC: 						"Assoc",
			RUN: 						"Kør",
			HOST: 						"Vært",
			GUEST: 						"Gæst",

			ON: 						"Tændt",
			OFF: 						"Slukket"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Internetforbindelsestype",
			INTERNET_MAC_ADDRESS: 		"MAC-adresse",
			
			CONNECT: 					"Tilslut",
			DISCONNECT: 				"Afbryd",
			
			IP_ADDR: 					"IP-adresse",
			
			USE_DEFAULT_MAC: 			"Brug standard MAC-adresse",
			USE_COMPUTER_MAC: 			"Brug computerens aktuelle MAC-adresse",
			USE_CUSTOM_MAC: 			"Brug brugerdefineret MAC-adresse",
			MAC_CLONE: 					"MAC-klone",
			
			CONFIG: 					"Konfig",
			
			IP_ADDRESS: 				"IP-adresse",
			SUBNET_MASK: 				"Undernetmaske",
			DEFAULT_GATEWAY: 			"Standard gateway",
			
			MANUAL_DNS: 				"Manuel DNS",
			PRIMARY_DNS: 				"Primær DNS",
			SECOND_DNS: 				"Sekundær DNS",
			
			RENEW: 						"Forny",
			RELEASE: 					"Udgivelse",
			VIEW_MODE: 					"Visningstilstand",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Få dynamisk fra internetudbyder",
			USE_FOLLOW_IP_ADDR: 		"Brug følgende IP-adresse",
			USE_FOLLOW_DNS_ADDR: 		"Brug følgende DNS-adresser",
			USE_FOLLOW_DNS_SERVER: 		"Brug følgende DNS-server",
			
			BASIC: 						"Grundlæggende",
			ADVANCED: 					"Avanceret",
			
			DNS_ADDR_MODE: 				"DNS-adresse",
			MTU_SIZE: 					"MTU-størrelse",
			MTU_1500: 					"byte. (Standard er 1500 og bør ikke ændres medmindre det er nødvendigt.)",
			MTU_1480: 					"byte. (Standard er 1480 og bør ikke ændres medmindre det er nødvendigt.)",
			MTU_1460: 					"byte. (Standard er 1460 og bør ikke ændres medmindre det er nødvendigt.)",
			MTU_1420: 					"byte. (Standard er 1420 og bør ikke ændres medmindre det er nødvendigt.)",
			
			HOST_NAME: 					"Navn på host",

			HOST_NAME_CONFIRM: 			"Navnet på hosten indeholder ulovlige tegn, der kan forårsage uventet systemadfærd. Er du sikker på, at du vil fortsætte?",

			GET_IP_WITH_UNICAST_DHCP: 	"Få IP ved hjælp af Unicast DHCP (Det er normalt ikke nødvendigt.)",
			OPTIONAL: 					"(Valgfri)",
			
			STATIC_IP: 					"Statisk IP",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			
			INTERNET_IP_ADDR: 			"IP-adresse",
			INTERNET_DNS: 				"Internet DNS",
			SECONDARY_CONN: 			"Sekundær forbindelse",
			NONE: 						"Ingen",
			INTERNET_PRIMARY_DNS:		"Primær DNS",
			INTERNET_SECONDARY_DNS: 	"Sekundær DNS",
			
			DYNAMIC_IP: 				"Dynamisk IP",
			DYNAMIC_IP_v6: 				"Dynamisk IP (SLAAC/DHCPv6)",
			STATIC_IP: 					"Statisk IP",
			SERVICE_NAME: 				"Navn på tjeneste",
			ACCESS_CONCENTRATOR_NAME:  	"Få adgang til koncentratornavn",
			DETECT_ONLINE_INTERVAL: 	"Bestem online interval",
			INTERVAL_TIPS: 				"sekunder. (0-120. Standardindstillingen er 10.)",
			IP_ADDR_MODE:  				"IP-adresse",
			CONN_MODE: 					"Forbindelsestilstand",
			DHCP_LINK_UNPLUGGED: 		"WAN-porten er afbrudt.",
			
			AUTO: 						"Auto",
			ON_DEMAND: 					"Efter behov",
			TIME_BASED: 				"Tidsbaserede",
			MANUALLY: 					"Manuelt",
			MAX_IDLE_TIME: 				"Maks. inaktiv periode",
			MAX_IDLE_TIME_TIPS: 		"minutter. (0 betyder altid aktiv.)",
			PERIOD_OF_TIME: 			"Tidsperiode",
			TIME_TIPS: 					"(TT:MM)",
			BIGPOND_CABLE: 				"BigPond-kabel",
			AUTH_SERVER: 				"Tilladelse Server",
			AUTH_DOMAIN: 				"Tilladelse Domæne",
			L2TP: 						"L2TP",
			GATEWAY: 					"Gateway",
			SERVER_IP_ADDR_NAME: 		"VPN-server IP/domænenavn",
			PPTP: 						"PPTP",
			TO: 						"til",
			
			TUNNEL_6TO4: 				"6to4-tunnel",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Hent ikke-midlertidig IPv6-adresse",
			GET_PREFIX_DELEGATION: 		"Hent  IPv6 præfiks delegation",
			IPV6_ADDR: 					"IPv6-adresse",

			GET_IPV6_WAY: 				"Hent IPv6-adresse",
			AUTOMATICALLY: 				"Få automatisk",
			SPECIFIED_BY_ISP: 			"Specificeret af ISP",

			IPV6_ADDR_PREFIX: 			"Præfiks for IPv6-adresse",
			NONE_TEMPORARY: 			"Ikke-midlertidig",

			PREFIX_DELEGATION: 			"Præfiks delegation",
			ENABLE: 					"Aktiver",
			DISABLE: 					"Deaktiver",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Maskelængde i IPv4",
			CONFIG_TYPE: 				"Konfigurationstype",
			RD6_PREFIX: 				"Præfiks for 6RD",
			RD6_PREFIX_LENGTH: 			"Præfikslængde i 6RD",
			REPLY_IPV4_ADDR: 			"Grænsesvar for IPv4-adresse",
			MANUAL: 					"Manuel",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Passthrough (Bro)",
			LOCAL_IPV6: 				"Hent IpV6-adresse",
			PEER_IPV6: 					"Peer IpV6-adresse",
			TUNNEL_ADDR: 				"Tunnel-adresse",
			IPV4_NETMASK: 				"IPv4-netmaske",
			CUSTOM: 					"Brugerdefineret",
		    AFTR_NAME: 					"AFTR-navn",
			PPP_SHARE_V6:				"PPPoE samme session med IPv4-forbindelse",
			PPP_SHARE_V4:				"PPPoE samme session med IPv6-forbindelse",

			
			
			IPV4_ADDR: 					"IPv4-adresse",
			IPV4_MASK: 					"IPv4-undernetmaske",
			IPV4_GATEWAY: 				"IPv4- standard gateway",
			TUNNEL_ADDR: 				"Tunnel-adresse",

			DUPLEX: 					"Dupleks",
			AUTO_NEGOTIATION: 			"Automatisk forhandling",
			FULL_DUPLEX_1000: 			"1000 Mbps fuld duplex",
			HALF_DUPLEX_1000:			"1000 Mbps halv duplex",
			FULL_DUPLEX_100: 			"100 Mbps fuld duplex",
			HALF_DUPLEX_100: 			"100 Mbps halv duplex",
			FULL_DUPLEX_10: 			"10 Mbps fuld duplex",
			HALF_DUPLEX_10: 			"10 Mbps halv duplex"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"MAC-adresse",
			IP_ADDRESS: 				"IP-adresse",
			SUBNET_MASK: 				"Undernetmaske",
			CUSTOM: 					"Brugerdefineret",

			IGMP: 						"Aktiver IGMP Proxy",
			

			ASSIGNED_TYPE: 				"Tildelt type",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+tilstandsfri DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Præfiks for adresse",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Adresse",
			DELEFATED: 					"Delegeret",
			STATIC: 					"Statisk",
			SITE_PREFIX: 				"Webstedspræfiks",
			SITE_PREFIX_LEN: 			"Længde af webstedspræfiks",

			PREFIX_TYPE:  				"Konfigurationstype af webstedspræfiks",
			LAN_IPV6_ADDR:  			"LAN IPV6-adresse",

			RELEASE_TIME: 				"Udløsningstid",
			RELEASE_TIME_TIP: 			"sekunder. (Standard er 86400 og bør ikke ændres medmindre det er nødvendigt.)",
			ADDRESS:					"Adresse",
			SAVE: 						"Gem",

			REBOOT_TIP: 				"Routeren springer til den nye login-side. <br/> vent venligst..."

		},

		IPTV:{
			TITLE: 						"Indstillinger",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Aktiverer IPTV", 
			MODE:  						"Tilstand",
			IGMP_PROXY: 				"IGMP Proxy",
			IGMP_VERSION: 				"IGMP-version",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Bro",
			BASIC: 						"Brugerdefineret",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Rusland",
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
			IP_PHONE: 					"IP-telefon", 

			Q_TAG: 						"802.1Q tag",
			ENABLE: 					"Aktiver",
			
			INTERNET_VLAN_ID: 			"Internet VLAN-ID",
			INTERNET_VLAN_PRIORITY: 	"Internet VLAN-prioritet",
			IP_PHONE_VLAN_ID: 			"IP-telefon VLAN-ID",
			IP_PHONE_VLAN_PRIORITY: 	"IP-telefon VLAN-prioritet",
			IPTV_VLAN_ID: 				"IPTV VLAN-ID",
			IPTV_VLAN_PRIORITY: 		"IPTV VLAN-prioritet",
			IPTV_MULTI_VLAN_ID: 		"IPTV Multicast VLAN-ID",
			IPTV_MULTI_VLAN_PRIORITY: 	"IPTV Multicast VLAN-prioritet"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP-server",
			
			SETTINGS: 					"Indstillinger",

			DHCP_SERVER: 				"DHCP-server",
			ENABLE_DHCP_SERVER: 		"Aktiver DHCP-server",

			IP_ADDR_POOL: 				"IP-adressepulje",
			LEASETIME: 					"Låneperiode for adresse",
			LEASENOTE: 					"minutter. (1-2880. Standardværdien er 120.)",
			
			GATEWAY: 					"Standard gateway",
			DOMAIN: 					"Standarddomæne",
			PRIMARYDNS: 				"Primær DNS",
			SECONDARYDNS: 				"Sekundær DNS",

			OPTIONAL: 					"(Valgfri)",

			CLIENTSLIST: 				"DHCP klientliste",
			CLIENT_NUMBER: 				"Klientnummer",
			CLIENT_NAME: 				"Klientnavn",
			MAC_ADDR: 					"MAC-adresse",
			ASSIGNED_IP: 				"tildelte IP-adresse",
			LEASE_TIME: 				"Låneperiode",

			RESERVATION: 				"Adressereservering",

			RESERVED_IP: 				"Reserveret IP-adresse",
			IP_ADDRESS: 				"IP-adresse",
			DESCRIPTION: 				"Beskrivelse",

			CLIENTSLIST: 				"DHCP klientliste",
			CLIENT_NUMBER: 				"Klientnummer",

			ENABLE: 					"Aktiver",
			ENABLE_THIS_ENTRY: 			"Aktiver"
			
		},

		DDNS: {
			DDNS: 						"Dynamisk DNS",
			SERVICEPROVIDER: 			"Serviceudbyder",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"Ikke-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Registrer her...",
			USERNAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			DOMAIN_NAME_LIST: 			"Liste over domænenavne",
			DOMAIN_NAME: 				"Domænenavn",
			LOGIN: 						"Login",
			LOGIN_SAVE: 				"Log ind og gem", 
			LOGOUT: 					"Log af",
			STATU_SUCCESS:				"Succes!",
			UPDATE_INTERVAL:			"Opdateringsinterval",
			ONE_HOUR:					"1 time",
			SIX_HOUR:					"6 timer",
			TWETEEN_HOUR:				"12 timer",
			ONE_DAY:					"1 dag",
			TWO_DAY:					"2 dage",
			THREE_DAY:					"3 dage",
			NEVER:						"Aldrig",
			UPDATE:						"Opdater",
			STATU_INCORRENT:			"Forkert brugernavn eller adgangskode.",
			STATU_ERR_DOMAIN:			"Domænenavnfejl",
			WAN_IP_BIND: 				"WAN IP-binding",
			CURRENT_DOMAIN: 			"Aktuelt domænenavn",
			REGISTER: 					"Registrer",
			BIND: 						"Bind",
			UNBIND: 					"Fjern binding",
			TITLE: 						"DDNS utilgængelig",
			CONTENT: 					"For at bruge vores fremragende TP-Link DDNS-service, skal du <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">Logge på</a> med din TP-Link-id, eller vælge en anden udbyder.",
			STATU_NO_LAUNCH:			"Starter ikke",
			STATU_FAIL_DDNS: 			"Kunne ikke opdatere DDNS.",
			STATU_FAIL_NOIP: 			"Kunne ikke opdatere NO-IP.",
			DISABLE: 					"Deaktiver",
			ENABLE: 					"Aktiver",	
			STATU_NO_LAUNCH:			"Kunne ikke opdatere DDNS.",
			STATU_CONN:					"Tilslutter",
			WAN_IP_BIND: 				"WAN IP-binding",
			TIME: 						"Registreret dato",
			BOUND: 						"Bundet",
			FREE: 						"Gratis",
			SORRY: 						"Mislykket.",
			UNBIND_NOTE:          		"Hvis du vil binde %domain% til din enhed, skal du fjerne bindingen til det aktuelle domænenavn først."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Avanceret routing",
			STATIC_ROUTING: 			"Statisk routing",

			DESTINATION_NETWORK:		"Netværksdestination",
			SUBNET_MASK: 				"Undernetmaske",
			DEFAULT_GATEWAY: 			"Standard gateway",
			DESCRIPTION: 				"Beskrivelse",
			
			SYSTEM_ROUTING_TABLE: 		"Routing-tabel for system",
			CLIENT_NUMBER: 				"Aktivt rutenummer.",

			GATEWAY: 					"Gateway",
			INTERFACE: 					"Grænseflade",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Aktiver",
			ENABLE_THIS_ENTRY: 			"Aktiver"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Indstillinger",
			NOT_SUPPORT_5G: 			"Regionen understøtter kun 2,4 GHz. Sørg for at du vælger den rigtige region.",

			REGION: 					"Location (Placering)",
			NOTICE:  					"For at bruge den trådløse funktion, skal den trådløse hardware være tændt.",
			
			MODE_2G:					"2,4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Trådløse indstillinger",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Aktiver trådløs radio",

			WIRELESS_NETWORK_NAME: 		"SSID (Navn på trådløst netværk)",
			WIRELESS_PASSWORD: 			"Adgangskode",
			HIDE_SSID: 					"Skjul SSID",

			SECURITY: 					"Sikkerhed",
			NO_SECURITY: 				"Ingen sikkerhed",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-personlig (anbefales)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2-Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Version",

			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Kryptering",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Tilstand",
			MODE_B:  					"Kun 802.11b",
			MODE_G:  					"Kun 802.11g",
			MODE_N:  					"Kun 802.11n",
			MODE_BG:  					"Blandet 802.11b/g",
			MODE_GN: 					"Blandet 802.11g/n",
			MODE_BGN:  					"Blandet 802.11b/g/n",

			MODE_A_5: 					"Kun 802.11a",
			MODE_AN_5: 					"Blandet 802.11a/n",
			MODE_N_5: 					"Kun 802.11n",
			MODE_AC_5:					"Kun 802.11ac",
			MODE_NAC_5:					"Blandet 802.11n/ac",
			MODE_ANAC_5:				"Blandet 802.11a/n/ac",


			CHANNEL_WIDTH: 				"Kanalbredde",
			CHANNEL: 					"Kanal",

			TRANSMIT_POWER: 			"Transmissionsstyrke",

			RADIUS_SERVER_IP: 			"RADIUS Server-IP",
			RADIUS_PORT: 				"RADIUS-port",
			RADIUS_PASSWORD: 			"RADIUS adgangskode",

			TYPE: 						"Type",
			OPEN_SYSTEM: 				"Åbent system",
			SHARED_KEY: 				"Delt nøgle",

			KEY_SELECTED: 				"Nøgle valgt",
			KEY1: 						"Key1",
			KEY2: 						"Key2",
			KEY3: 						"Key3",
			KEY4: 						"Key4",

			WEP_KEY_FORMAT: 			"Format af WEP-nøgle",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimal",

			KEY_TYPE: 					"Nøgletype",
			BIT64: 						"64 Bit",
			BIT128: 					"128 Bit",
			BIT152: 					"152 Bit",

			KEY_VALUE: 					"Nøgleværdi",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Lav",
			MIDDLE: 					"Midt",
			HIGH: 						"Høj"
		},

		WPS: {

			TITLE2: 					"Routerens PIN-kode",
			ROUTERS_PIN_INFO: 			"Andre enheder kan oprette forbindelse til denne router gennem WPS med routerens PIN-kode.",
			ENABLE_ROUTE_PIN: 			"Routerens PIN-kode",
			ROUTE_PIN: 					"PIN-kode",
			GENERAL: 					"Opret",
			DFT: 						"Standard",

			TITLE: 						"WPS-guide",
			SELECT_SETUP: 				"Vælg en installationsmetode",
			PUSH_BTN: 					"Trykknap (anbefales)",
			PUSH_DES: 					"Tryk på en fysisk knap på routeren eller klik på Tilslut software på denne side.",
			CONNECT: 					"Tilslut",
			CANCEL: 					"Annuller",

			RESULT_HEAD: 				"Den trådløse klient",
			RESULT_END: 				"er blevet føjet til netværket.",

			PIN_NUMBER: 				"PIN-kode",
			
			PIN_BTN: 					"PIN-kode",
			NOT_FOUND: 					"Ikke fundet",
			ENTER_CLIENT_PIN: 			"Angiv klientens PIN-kode",
			SWITCH_NOTE:				"For at bruge WPS, skal du først aktivere den trådløse funktion.",
			SWITCH_NOTE2:				"For at bruge WPS-guiden, skal du først konfigurere de rigtige trådløse parametre.",
			STATUS_PIN_ERROR: 			"Ugyldig WPS PIN-kode? Kontroller at den er korrekt.",
			STATUS_ERROR: 				"Fejl.",
			STATUS_CONN_ERROR: 			"Forbindelsesfejl.",
			STATUS_CONNING: 			"Tilslutter...",
			STATUS_CANCEL: 				"Forbindelsen afbrudt.",
			
			NOTE: 						"Bemærk:",
			
			STATUS_CONN_OVERLAP: 		"Forbindelsesfejl(OVERLAP).",
			STATUS_CONN_TIMEOUT: 		"Forbindelsesfejl(TIMEOUT).",
			STATUS_CONN_INACT: 			"Forbindelse inaktiv."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Trådløse stationer online",
			CLIENT_NUMBER: 				"Klientnummer",
			MAC_ADDRESS: 				"MAC-adresse",
			CONN_TYPE: 					"Forbindelsestype",
			SECURITY: 					"Sikkerhed",
			RECEIVED_PACKETS: 			"Modtagne pakker",
			SEND_PACKETS: 				"Sendte pakker"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Indstillinger",
			
			MODE_2G: 					"2,4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Giv gæsterne mulighed for at se hinanden",
			
			ALLOW_LOCAL: 				"Giv gæsterne mulighed for at få adgang til mit lokale netværk",
			
			WIRELESS: 					"Trådløs",
			WIRELESS_24G_RADIO: 		"Trådløs 2,4 GHz",
			WIRELESS_5G_RADIO: 			"Trådløs 5GHz",
			ENABLE_GUEST: 				"Aktiver gæstenetværk",

			NAME_SSID: 					"SSID (Navn på trådløst netværk)",
			HIDE_SSID: 					"Skjul SSID",

			SECURITY: 					"Sikkerhed",
			NO_SECURITY: 				"Ingen sikkerhed",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-personlig",

			VERSION: 					"Version",
			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Kryptering",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Adgangskode"
		},

		NAT:{
			SETTINGS: 					"Hardware NAT",
			STATUS: 					"Hardware NAT",
			
			ALG_TITLE: 					"Gateway til programlaget (ALG)",

			FTP_ALG: 					"FTP-ALG",
			TFTP_ALG: 					"TFTP-ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP-passthrough",
			L2TP_ALG: 					"L2TP-passthrough",
			IPSEC_ALG: 					"IPSec-passthrough",

			ENABLE_FTP_ALG: 			"Aktiver FTP-ALG",
			ENABLE_TFTP_ALG: 			"Aktiver TFTP-ALG",
			ENABLE_H323_ALG: 			"Aktiver H323 ALG",
			ENABLE_RTSP_ALG: 			"Aktiver RTSP-ALG",
			ENABLE_PPTP_ALG: 			"Aktiver PPTP-passthrough",
			ENABLE_L2TP_ALG: 			"Aktiver L2TP-passthrough",
			ENABLE_IPSEC_ALG: 			"Aktiver IPSec-passthrough",
			NAT_ENABLE_NOTICE: 			"Bemærk: Dine konfigurationer vil ikke træde i kraft før NAT-funktionen er aktiveret."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Virtuelle servere",

			SERVICE_NAME: 				"Tjenestetype",
			EXTERNAL_PORT: 				"Ekstern port",
			INTERNAL_IP: 				"Intern IP",
			INTERNAL_PORT: 				"Intern port",
			PROTOCAL: 					"Protokol",

			BTN_VIEW: 					"See eksisterende tjenester",

			EXSITTING_SERVICE: 			"Eksisterende tjenester",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX eller XX)",
			EXT_PORT_TIPS: 				"(XX eller XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX eller blank ,1-65535)",

			NOTICE:						"I konflikt med porten for fjernadministration. Er du sikker på, at du vil fortsætte?",

			ENABLE_THIS_ENTRY: 			"Aktiver",
			OPERATION: 					"Drift",
			CHOOSE: 					"Vælg",
			NAT_ENABLE_NOTICE: 			"Bemærk: Dine konfigurationer vil ikke træde i kraft før NAT-funktionen er aktiveret."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Portudløsning",
			APPLICATION: 				"Anvendelse",
			TRIGGER_PORT: 				"Portudløsning",
			TRIGGER_PROTOCOL: 			"Udløsningsprotokol",

			EXTERNAL_PORTS: 			"Ekstern port",
			EXTERNAL_PROTOCOL: 			"Ekstern protokol",

			BTN_VIEW: 					"Se eksisterende programmer",

			EXSITTING_APPLICATION: 		"Eksisterende programmer",
			APPLICATION_NAME: 			"Programnavn",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX eller XX-XX,1-65535, højst 5 par)",
			
			ENABLE_THIS_ENTRY: 			"Aktiver",
			OPERATION: 					"Drift",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Bemærk: Dine konfigurationer vil ikke træde i kraft før NAT-funktionen er aktiveret."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Aktiverer DMZ",
			HARDWARESTATUS: 			"DMZ Host-IP-adresse.",
			NAT_ENABLE_NOTICE: 			"Bemærk: Dine konfigurationer vil ikke træde i kraft før NAT-funktionen er aktiveret."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"UPnP-tjenesteliste",
			CLIENT_NUMBER: 				"Klientnummer",
			SERVICE: 					"Servicebeskrivelse",
			EXTERNAL_PORT: 				"Ekstern port",
			PROTOCAL: 					"Protokol",
			IP_ADDR: 					"Intern IP-adresse",
			INTERNAL_PORT: 				"Intern port",
			NAT_ENABLE_NOTICE: 			"Bemærk: Dine konfigurationer vil ikke træde i kraft før NAT-funktionen er aktiveret."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"3G/4G USB-modem",
			LOCATION: 					"Location (Placering)",
			MOBILE_ISP: 				"Mobil-ISP",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Forbindelsestilstand",
			CONNECT_ON_DEMAND: 			"Forbindelse på efterspørgsel",
			CONNECT_AUTOMATICALLY: 		"Automatisk forbindelse",
			CONNECT_MANUALLY: 			"Manuel forbindelse",
			MAX_IDLE_TIME: 				"Maks. inaktiv periode",
			CONNECTION_TIP: 			"Den nuværende internetadgang er foretrukket WAN.",
			IDLE_TIME_TIP: 				"Forbindelsestilstanden og maksimal inaktive periode kunne ikke indstilles manuelt.",
			MINUTES: 					"minutter. (0 betyder at forbindelsen altid er tilsluttet.)",

			AUTHENTICATION_TYPE: 		"Godkendelsestype",
			AUTO: 						"Auto",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"Standard er autumatisk og bør ikke ændres medmindre det er nødvendigt.",

			CONNECT: 					"Tilslut",
			DISCONNECT: 				"Afbryd",

			SET_TIP: 					"Indstil nummeret der ringes til, APN, brugernavn og adgangskode manuelt.",
			DIAL_NUMBER: 				"Ring til nummeret",
			APN: 						"APN",
			USERNAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			OPTIONAL: 					"(Valgfri)",
			MTU_SIZE: 					"MTU-størrelse (i bytes)",
			MTU_SIZE_TIP: 				"Standard er 1480 og bør ikke ændres medmindre det er nødvendigt",

			USE_FOLLOW_DNS_SERVER: 		"Brug de følgende DNS-servere",
			PRIMARY_DNS: 				"Primær DNS",
			SECOND_DNS: 				"Sekundær DNS",

			UNPLUGGED: 					"Intet USB-modem tilsluttet",
			IDENTIFYING: 				"Identifikation...",
			IDENTIFY_SUCCESS: 			"Identifikation lykkedes"
		},

		DISK_SETTING: {
			DISK_SET: 					"Enhedsindstillinger",
			SCAN: 						"Scan",
			SELFLY_REMOVE: 				"Sikker fjernelse",
			SCAN_RESULT: 				"Fandt %n diske",
			NOT_FOUND: 					"Ikke fundet",
			SELFLY_REMOVE: 				"Sikker fjernelse",
			
			VOLUMN: 					"Volumen",
			CAPACITY: 					"Kapacitet",
			FREESPACE: 					"Ledig plads",
			USBSPACE: 					"Brugt plads",
			
			STATUS: 					"Status",
			INACT: 						"Inaktiver",
			ACTIVE: 					"Aktiv",
			
			USAGE: 						"Brug",
			CAPACITY: 					"Kapacitet",
			OPERATION: 					"Drift",	
			
			ACC: 						"Kontostyring", 	 	
			USERNAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			USE_LOGIN: 					"Brug Login bruger",
			SCAN: 						"Scan",
			ENJECT_ALL: 				"Skub alle ud",
			ENJECT: 					"Skub ud",
			ADD_USER: 					"Tilføj bruger",
			AUTH: 						"Autoritet"
		},

		FOLDER: {
			TITLE: 						"Indstillingerne for deling",
			ACCOUNT_TITLE: 				"Kontodeling",
			ACCOUNT:					"Konto",
			AC_NOTE: 					"Forbered en konto for at dele indhold. Du kan bruge login-kontoen, eller oprette en ny.",
			
			AC_LOGIN: 					"Brug standardkontoen",
			AC_FOLLOW: 					"Brug en ny konto",

			USERNAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",
			CONFIRM: 					"Bekræft adgangskode",

			SHARING_SETTING: 			"Indstillingerne for deling",
			SERVER_NAME: 				"Navn på netværk/Medie-server",

			METHOD: 					"Adgangsmetode",
			LINK: 						"Link",
			PORT: 						"Port",

			NETWORK_NEIGHBORHOOD: 		"Netværks nabolag",
			FTP: 						"FTP",
			FTPEX: 						"FTP (via internet)",

			SHARE_FOLDER: 				"Mappedeling",
			SHAREING_ALL: 				"Del alt",
			NOTE:  						"Aktiver for at dele filer og mapper eller deaktiver for kun at dele de angivne mapper.", 
			ENABLE_AUTHENTICATION: 		"Aktiverer godkendelse",
			SHAREING_FOLDER: 			"Deling af mapper",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Sti til mappe",
			VOLUMN_NAME: 				"Drevnavn",

			SHARE_NAME: 				"Mappenavn",
			FOLDER_PATH: 				"Sti til mappe",
			MEDIA_SHARING: 				"Mediedeling",
			STATUS: 					"Status",

			GUEST_ACCESS: 				"Tillad adgang for gæstenetværket",
			ENABLE_AUTHENTICATION: 		"Aktiverer godkendelse",
			ENABLE_WRITE_ACCESS: 		"Tillad skriveadgang",
			ENABLE_MEDIA_SHARE: 		"Tillad mediedeling",
			
			BROWSE: 					"Gennemse",
			BROWSE_TITLE: 				"Vælg en mappe",

			NO_VOLUMN:					"Intet drev",
			
			NOTICE: 					"Er du sikker på, at du vil forlade den dynamiske DNS-side? Tryk på Gem for at gemme og afslutte. Tryk på Forlad for at afslutte uden at gemme. Tryk på Annuller for at blive.",
			NO_CHANGE_NOTICE: 			"Er du sikker på, at du vil forlade den dynamiske DNS-side?",

			SAVE_FAILED_NOTICE: 		"Kunne ikke gemme",
			CONTINUE: 					"Forlad",
			CONTINUE_SAVE: 				"Gem",
			CANCLE: 					"Annuller",

			ENABLE: 					"Aktiver"

		},

		PRINT:{
			TITLE: 						"Printerserver",
			NAME: 						"Printernavn",
			ENABLE_PRINT_SERVER: 		"Printerserver",
			NONE: 						"Ingen",
			
			NOTE_TITLE: 				"Bemærk:",
			STEP1: 						"Trin1:",
			STEP2: 						"Trin2:",
			STEP3: 						"Trin3:",

			NOTE1: 						"Installer printerdriveren på computeren",
			NOTE2: 						"Tilslut USB-printeren til USB-porten på routeren via et USB-kabel.",
			NOTE3: 						"Installer TP-Link USB-printerens kontrolprogram. Du kan downloade den fra vores officielle hjemmeside: <a class=\"link\" target=\"_blank\" href=\"%SUPPORT%\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Forældrekontrol",
			STATUS: 					"Status",
			UNKNOWN: 					"Ukendt",

			DEVICE_CTR: 				"Enheder med forældrekontrol",
			DEVICE: 					"Enhedsnavn",
			MAC_ADDRESS: 				"MAC-adresse",
			TIME: 						"Internet-tid",
			DESCRIPTION: 				"Beskrivelse",
			
			ENABLE_THIS_ENTRY: 			"Aktiver",
			OPTIONAL: 					"(Valgfri)",
			BTN_VIEW: 					"See eksisterende enheder",
			
			DEVICE_LIST: 				"Enhedsliste",
			SYSTEM_TIME: 				"Systemtid",
			
			RESTR: 						"Indholdsbegrænsning",
			MODE: 						"Begrænsning",
			BLACKMODE: 					"Sortliste",
			WHITEMODE: 					"Hvidliste",
			ACCESS_DEVICES_LIST: 		"Få adgang til enhedslisten",
			
			CHOOSE: 					"Vælg",
			ADD_A_NEW_KEYWORD: 			"Tilføj et nyt søgeord",
			ADD_A_NEW_DOMAIN_NAME: 		"Tilføj et nyt domænenavn"
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
			OTHERS: 					"Andre",

			DEVICE: 					"Enhed",
			RATE: 						"Frekvens",
			APPLICATION: 				"Anvendelse",

			NAME: 						"Navn",
			MAC_ADDRESS: 				"MAC-adresse",
			IP_ADDRESS: 				"IP-adresse",


			DEVICES: 					"Enheder"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Båndbredde",
			TEST_BANDWIDTH: 			">Test båndbredde",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Aktiverer streamboost",
			UP_LIMITATION: 				"Forøg begrænsning (Mbps)",
			DOWN_LIMITATION: 			"Formindsk begrænsning (Mbps)",
			RUN_BANDWIDTH_TEST: 		"Kør test af båndbredde",
			TESTING: 					"Testning",
			TEST_FAILED: 				"Test mislykkedes",
			TEST_SUCCEED: 				"Test lykkedes",
			ENABLE_AUTOMATIC_TEST: 		"Aktiverer automatisk test",
			KEEP_UP_TO_DATE: 			"Hold StreamBoost opdateret",
			ENABLE_AUTOMATIC_UPDATE: 	"Aktiverer automatisk opdatering"

		},

		PRIORITY:{
			PRIORITY: 					"Prioritet",
			PRIORITY_TIPS: 				"Prioritet gør det muligt at ændre vigtigheden af én enhed over en anden. Dette er nyttigt, når enheden konkurrerer om begrænset båndbredde med programmer af samme klassifikation.",
			ALL_DEVICE: 				"Alle enheder",
			ACTIVE_DEVICE: 				"Aktive enheder",
			SAVE: 						"Gem",
			ID: 						"ID",
			DEVICE: 					"Enhed",
			TYPE: 						"Type",
			MAC_ADDRESS: 				"MAC-adresse",
			STICK: 						"Stav"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Statistik",
			UP_TIME: 					"Oppetid",
			DOWNLOADS: 					"Download",
			LAST_DAY: 					"Sidste dag",
			LAST_WEEK: 					"Sidste uge",
			LAST_MONTH: 				"Sidste måned",
			ALL_LAN_HOSTS: 				"Alle LAN-hoster",
			OTHER: 						"Andre"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Firewall",
			ENABLE_SPI: 				"SPI-firewall",

			DOS_PROTECTION: 			"DoS beskyttelse",
			ENABLE_DOS: 				"DoS beskyttelse",
			
			OFF: 						"Slukket",
			LOW: 						"Lav",
			MIDDLE: 					"Midt",
			HIGH: 						"Høj",

			ICMP: 						"ICMP-FLOOD angrebsfiltrering",
			UDP: 						"UDP-FLOOD angrebsfiltrering",
			TCP: 						"TCP-SYN-FLOOD angrebsfiltrering",
			ENABLE_DOS_TIP:             "DoS beskyttelse og statistik over trafik skal være aktiveret på samme tid.",

			IGNORE: 					"Ignorer Ping-pakke fra WAN-port",
			FORBID: 					"Forbyd Ping-pakke fra LAN-port",

			BLOCK_DOS: 					"Blokeret DoS host-liste",
			HOST_NUMBER: 				"Host-nummer",
			IP_ADDRESS: 				"IP-adresse",
			MAC_ADDRESS: 				"MAC-adresse"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Adgangskontrol",
			ENABLE_ACCESS: 				"Adgangskontrol",

			ACCESS_MODE: 				"Adgangstilstand",
			DEFAULT_ACCESS_MODE: 		"Standard adgangstilstand",
			BLACK_LIST: 				"Sortliste",
			WHITE_LIST: 				"Hvidliste",
			
			WIRED:						"Kabelforbundet",
			WIRELESS:					"Trådløs",

			DEVICE_ONLINE: 				"Enheder online",
			NAME: 						"Enhedsnavn",
			IP_ADDRESS: 				"IP-adresse",
			MAC_ADDRESS: 				"MAC-adresse",
			CONN_TYPE: 					"Forbindelsestype",

			BLOCK: 						"Bloker",

			DEVICE_IN_WHITE: 			"Enheder på hvidliste",
			DEVICE_IN_BLACK: 			"Enheder på sortliste"
		},

		IP_MAC:{
			TITLE: 						"Indstillinger",
			ENABLE_ARP: 				"ARP-binding",

			ARP_LIST: 					"ARP-liste",
			ARP_NUM: 					"ARP-nummer",

			MAC_ADDRESS: 				"MAC-adresse",
			IP_ADDRESS: 				"IP-adresse",
			BOUND: 						"Bundet",
			UNBOUND: 					"Ubundet",

			BINDING_LIST: 				"Bindingsliste",
			DESCRIPTION: 				"Beskrivelse",
			OPTIONAL: 					"(Valgfri)",
			ENABLE_THIS_ENTRY: 			"Aktiver"
		},

		TIMESET: {
			TITLE: 						"indstilling af tid",
			ZONE: 						"Tidszone",
			DATE: 						"Dato",
			DATEFORMAT: 				"MM/DD/ÅÅÅÅ",
			TIME: 						"Tid",
			TIMEFORMAT: 				"(TT/MM/SS)",
			NTP1: 						"NTP-Server I",
			NTP2: 						"NTP-Server II",
			OPTIONAL: 					"(Valgfri)",

			CURRENT_TIME:  				"Aktuel tid",
			SET_TIME: 					"Indstil tiden",
			AUTOMATIC: 					"Hent automatisk fra internettet",
			MANUAL: 					"Manuelt",
			AUTOMATIC_BTN: 				"Hent",


			GETGMT: 					"Hent GMT",

			
			GETGMT_SUCCESS: 			"Hent tid fra NTP-Server lykkedes",
			GETGMT_TIMEOUT: 			"Timeout af Hent tid fra NTP-Server",
			GETGMT_WAIT: 				"Venter",
			
			M: 							"M",
			W: 							"W",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Sommertid",
			ENABLE_DAYLIGHT: 			"Aktiver sommertid",
			START: 						"Start",
			END: 						"Slut",

			RUNNING_STATUS: 			"Driftsstatus",
			DOWN: 						"Sommertid er nede",
			UP: 						"Sommertid er oppe"
		},

		DIAG:{
			TITLE: 						"Fejlfinding",
			DIAGNOSTIC_TOOL: 			"Fejlfindingsværktøj",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"IP-adresse/domænenavn",
			COUNT: 						"Antal ping",
			
			BASIC: 						"Grundlæggende",
			ADVANCED: 					"Avanceret",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Størrelse af pingpakke",
			PKTUNIT: 					"(4-1472 Bytes)",

			TIMEOUT: 					"Timeout af ping",
			TIMOUTUNIT: 				"(100-2000 Millisekunder)",

			TTL: 						"Traceroute maks. TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Start",
			STOP: 						"Stop"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Din firmware er opdateret",
			TITLE: 						"Opgradering af firmware",
			INFO: 						"Enhedsoplysninger",
			REMOTE_TITLE: 				"Online-opgradering.",
			LOCAL_TITLE: 				"Lokal opgradering",

			NEWFILE: 					"Ny firmwarefil",
			FIRMWAREVERSION: 			"Firmwareversion",
			HARDWAREVERSION: 			"Hardwareversion",
			LATESTVERSION: 				"Seneste udgave",
			CONFIRM_CONTENT:			"Ønsker du at opgradere firmwaren?",
			WARNING:					"Opgradering af firmware... <br/> For at undgå beskadigelse skal du holde routeren tændt og ikke betjene routeren under firmwareopgraderingen.",
			REBOOTING: 					"Genstarter... <br/> For at undgå beskadigelse skal du holde routeren tændt og ikke betjene routeren under firmwareopgraderingen.",
			DO_NOT_OPERATE: 			"Opgradering af firmware... <br/> For at undgå beskadigelse skal du holde routeren tændt og ikke betjene routeren under firmwareopgraderingen.",
			FIRMWARE_UPDATING_NOTE: 	"1. Firmwareopdatering...<br/> For at undgå skader skal du lade routeren være tændt og ikke bruge routeren mens firmwareopgraderingen foregår.",
			REBOOTING_NOTE: 			"2. Genstarter...<br/> For at undgå skader skal du lade routeren være tændt og ikke bruge routeren mens firmwareopgraderingen foregår.",
			SCREEN_UPDATING_NOTE: 		"3. Opdatering af skærmen...<br/> For at undgå skader skal du lade routeren være tændt og ikke bruge routeren mens firmwareopgraderingen foregår.",
			UPGRADE_FAILED: 			"Opgradering mislykkedes.",
			UPGRADE: 					"Opgrader",
			CHECK: 						"Kontroller",
			DOWNLOADING: 				"Downloading...<br/> For at undgå beskadigelse skal du holde routeren tændt og ikke betjene routeren under firmwareopgraderingen.",
			UPGRADE_INOF: 				"For at undgå beskadigelse skal du holde routeren tændt.",
			NOTE: 						"Bemærk:",
			NO_UPGRADE: 				"Dette er den seneste version",

			UPGRADING: 					"Opgradering...<br/> For at undgå beskadigelse skal du holde routeren tændt og ikke betjene routeren under firmwareopgraderingen.",
			RETRY: 						"Forsøg igen",
			CANCEL: 					"Annuller",
			ILEGAL_DEVICE:              "Kunne ikke identificere enheden. Kontakt TP-Link teknisk support.",
			UPGRADE_FAIL: 				"Kunne ikke opgradere. Prøv igen senere.",
            CONFIG_RESET_NOTE:          "Dine aktuelle indstillinger vil gå tabt efter opgradering til denne version.",
			CHECK_UPGRADE: 				"Søg efter opgraderinger"
		},

		BACKUP:{
			BACKUP: 					"Backup",
			BACKUPTIP: 					"Gem en kopi af dine aktuelle indstillinger.",

			RESTORE: 					"Gendan",
			RESTORETIP: 				"Gendan gemte indstillinger fra en fil.",
			
			RESTORE_WARN:				"Gendan router... <br/>Brug ikke under processen.",
			RESTORE_CONFIRM_CONTENT: 	"Er du sikker på du vil gendanne routeren fra backup-filen?",
			
			FILE: 						"Fil",

			FACTORY: 					"Gendannelse af fabriksindstillingerne",
			FACTORYTIP: 				"Genindlæs alle konfigurationsindstillinger til deres standardværdier.",
			RESETTIP:					"Gendan alle indstillinger til standardværdier, undtagen dit login og skykontooplysninger.",
			FACTORY_CONFIRM_CONTENT:	"Er du sikker på du vil gendanne routeren til fabriksværdierne?",
			FACTORY_WARN:				"Gendan router... <br/>Brug ikke under processen.",
			
			BACKUPBTN: 					"Backup",
			RESTOREBTN: 				"Gendan",
			RESETBTN:					"Gendan",
			FACTORYBTN: 				"Gendannelse af fabriksindstillingerne"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Kontostyring",
			
			OLDUSER: 					"Gamle brugernavn",
			OLDPWD: 					"Gamle adgangskode",

			NEWUSER: 					"Nyt brugernavn",
			NEWPWD: 					"Ny adgangskode",
			CONFIRM: 					"Bekræft ny adgangskode",

			RECOVERYINFO: 				"Gendannelse af adgangskode",
			ENABLE_PASSWORD_RECOVERY: 	"Aktiver gendannelse af adgangskoder",
			FROM: 						"Fra",
			TO: 						"Til",
			SMTP_SERVER: 				"SMTP-server",
			
			ENABLE_AUTHENTICATION: 		"Aktiverer godkendelse",
			USERNAME: 					"Brugernavn",
			PASSWORD: 					"Adgangskode",

			TEST_MAIL: 					"Test mail",

			LOCAL:						"Lokalstyring",
			LOCAL_MAC_AUTH: 			"Lokal MAC-godkendelse",
			ACCESS: 					"Adgang for alle LAN-tilsluttede enheder",
			ACCESS_TIPS: 				"Aktiver for at aktivere styring af alle enheder på LAN eller deaktiver for at aktivere styring af en bestemt enhed.",
			
			MAC_ADDRESS: 				"MAC-adresse",
			VIEW_BTN: 					"See eksisterende enheder",
			DESCRIPTION: 				"Beskrivelse",

			EXIST_DEVICE:               "Eksisterende enheder",

			OPTIONAL: 					"(Valgfri)",
			ENABLE_THIS_ENTRY: 			"Aktiver",

			DEVICE_NAME:				"Enhedsnavn",
			IP_ADDRESS:					"IP-adresse",
			

			REMOTE: 					"Fjernadministration",
			DISABLE_REMOTE_MANAGEMENR: 	"Deaktiver fjernadministration",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Aktiverer fjernadministration for alle enheder",
			ENABLE_REMOTE_MANAGEMENR: 	"Aktiverer fjernadministration for specifikke enheder",
			WEB: 						"Port for web-administration",

			NOTICE:						"I konflikt med den virtuelle serverport! Er du sikker på, at du vil fortsætte?",

			REMOTEIP: 					"IP-adresse for fjernadministration",
			REMOTEIPNOTE: 				"(Indtast 255.255.255.255 for alle)"
			
		},

		SYSLOG:{
			TITLE: 						"Systemlog",
			LOG_FILTER: 				"Logfilter:",
			
			TYPE_EQ: 					"Type=",
			
			ALL: 						"ALL",

			FIREWALL: 					"Firewall", 
			NAT: 						"NAT",
			DDNS: 						"Dynamisk DNS",
			UPNP:						"UPnP",
			IMB:            			"IP&MAC-binding",
			IPTV:						"IPTV",
			DHCPS:						"DHCP-server",
			IGMP_PROXY:					"IGMP Proxy",
			DOMAIN_LOGIN:				"Domæne-logon",
			BASIC_SECURITY: 			"Grundlæggende sikkerhed",
			PARENTAL_CONTROL: 			"Forældrekontrol",
			ACCESS_CONTROL: 			"Adgangskontrol",
			DOS_PROTECTION: 			"DoS beskyttelse",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Statistik over trafik",
			TIME_SETTINGS: 				"indstilling af tid",
			ACCOUNT_MANAGEMENT: 		"Kontostyring",
			LOCAL_MANAGEMENT: 			"Lokalstyring",
			REMOTE_MANAGEMENT: 			"Fjernadministration",
			LOCALE: 					"Lokal",
			FACTORY_RESET: 				"Nulstilling til fabriksindstillinger",
			LED_CONTROLLER: 			"Led-controller",
			NETWORK: 					"Netværk",
			USBSHARE: 					"USB-deling",
			AND: 						"og",
			LEVEL: 						"Niveau",
			EMERGENCY:					"NØDSITUATION",
			ALERT:						"ALARM",
			CRITICAL:					"KRITISK",
			ERROR: 						"FEJL",
			WARNING: 					"ADVARSEL",
			NOTICE: 					"BEMÆRK",
			INFO: 						"INFO",
			DEBUG: 						"FEJLFINDING",

			INDEX: 						"Indeks",
			TYPE: 						"Type",
			TIME: 						"Tid",
			LEVEL_COL:					"Niveau",

			CONTENT: 					"Logindhold",
			
			MAIL_LOG: 					"E-maillog",
			SAVE_LOG: 					"Gem logfil",

			SEND_OK: 					"Send OK",
			SEND_FAILED: 				"Afsendelse mislykkedes",

			MAIL_SETTING: 				"E-mail-indstillinger",

 			FROM: 						"Fra",
 			TO: 						"Til",
 			SMTP_SERVER: 				"SMTP-server",
 			ENABLE_AUTHENTICATION: 		"Aktiverer godkendelse",

 			USERNAME: 					"Brugernavn",
 			PASSWORD: 					"Adgangskode",
 			CONFIRM_PASSWORD: 			"Bekræft adgangskode",

 			AUTO_MAIL: 					"Aktiverer automatisk mail",
 			LOG_AT: 					"Log på",
 			HH_MM: 						"(TT:MM) hvar dag",

 			LOG_EVERY: 					"Log hver",
 			HOURS: 						"timer"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Indstillinger",
			STATUS: 					"Aktiverer QoS",
			UPBANDWIDTH: 				"Upload båndbredde",
			DOWNBANDWIDTH: 				"Download båndbredde",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Test af hastighed",
			RULE_LIST: 					"QoS-regelliste",
			RULE: 						"QoS-regel",
			ID: 						"ID",
			NAME: 						"Navn",
			TYPE: 						"Type",
			DETAIL: 					"Detaljer",
			PRIORITY: 					"Prioritet",

			APPLICATION: 				"Anvendelse",
			APPLICATION_LIST: 			"Programliste",
			CUSTOM_APP: 				"Brugerdefineret program",
			MAC_ADDR: 					"MAC-adresse",
			MAC_ADDR_P: 				"Mac:",
			IP_ADDR: 					"IP-adresse",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Fysisk port",

			LOW: 						"Lav",
			MIDDLE: 					"Midt",
			HIGH: 						"Høj",

			PROTO: 						"Protokol",
			PORT: 						"Port",
			PROTO_P: 					"Protokol:",
			PORT_P: 					"Port:",
			PORT_TIPS: 					"(XX eller XX-XX,1-65535, højst 5 par)",

			ALL: 						"ALL",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Brugerdefineret",

			WIFI_HOME: 					"WIFI-HOST",
			WIFI_GUEST: 				"WIFI-GÆST",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Opgradering af database",

			NEWFILE: 					"Ny databasefil",
			FIRMWAREVERSION: 			"Databaseversion",
			CONFIRM_CONTENT:			"Er du sikker på, at du vil opdatere databasen?",
			WARNING:					"Opdatering af databasen... <br/>Brug ikke under processen.",
			
			UPGRADE: 					"Opgrader",

			SERVICE_RESTART: 			"Genstart af QoS-tjeneste",
			
			TYPE: 						"Type",
			BY_DEVICE: 					"Efter enhed",
			BY_APP: 					"Efter program",
			BY_PHY: 					"Efter fysisk port",

			HIGH_PRIORITY_LBL: 			"Høj prioritet:",
			MIDDLE_PRIORITY_LBL: 		"Mellemste prioritet:",
			LOW_PRIORITY_LBL: 			"Lav prioritet:",

			HIGH_PRIORITY: 				"Høj prioritet",
			MIDDLE_PRIORITY: 			"Mellemste prioritet",
			LOW_PRIORITY: 				"Lav prioritet"

		},

		APPLICATION:{
			APP_LIST: 					"Programliste",
			GAME_LIST: 					"Spilliste",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Statistik over trafik",
			ENABLE_STATISTICS: 			"Statistik over trafik",

			TITLE: 						"Liste for Statistik over trafik",
			IP_MAC: 					"IP-adresse/MAC-adresse",
			TPKT: 						"Samlede antal pakker",
			TBYTE: 						"Samlet antal bytes",
			CPKT: 						"Aktuelle pakker",
			CBYTE: 						"Aktuelle bytes",
			CICMP: 						"Aktuelle ICMP-Tx",
			CUDP: 						"Aktuelle UDP-Tx",
			CSYN: 						"Aktuelle SYN-Tx",
			
			DELETE_CONFIRM: 			"Er du sikker på at du vil slette statistik over trafik?",
			DELETE_ALL_CONFIRM: 		"Er du sikker på at du vil slette alle statistikker over trafik?",

			RESET_ALL: 					"Nulstil alle"
		},

		SYSPARA:{
			W24G: 						"Trådløs 2,4 GHz",
			W5G: 						"Trådløs 5GHz",
			SWITCH_NOTICE:  			"Den trådløse funktion er slået fra. Hvis du vil bruge denne funktion. Tryk på knappen for trådløs forbindelse.",

			ENABLE_TIPS: 				"Den trådløse funktion er deaktiveret.",

			BEACON: 					"Statusinterval",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS-tærskel",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Fragmenteringstærskel",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM-interval",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Opdateringsinterval for gruppenøgle",
			GROUPUNIT: 					"sekunder",
			
			
			WMM_FEATURE: 				"WMM-funktioner",
			WMM: 						"Aktiverer WMM",

			GI_FEATURE: 				"Kort GI-funktion",
			GI: 						"Aktiverer kort GI",

			AP_FEATURE: 				"AP isolationsfunktion",
			AP: 						"Aktiver AP-isolation",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Aktiverer TxBF",

			WDS_FEATURE: 				"WDS-bridging",
			WDS: 						"Aktiver WDS-bridging",
			
			SSID_BRIDEGE: 				"SSID (som der skal dannes bro til)",
			SURVEY: 					"Oversigt",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC-adresse",
			SSID: 						"SSID",
			SIGNAL: 					"Signal",
			CHANNEL: 					"Kanal",
			SECURITY: 					"Sikkerhed",
			CHOSEN: 					"Valgt",
			AP_NUMBER:					"AP-antal",

			TOTAL: 						"Samlede elementer",

			MAC: 						"MAC-adressen (som der skal dannes bro til)",
			MACUNIT: 					"Eksempel: 00-1D-0F-11-22-33",

			SECURITY: 					"Sikkerhed",
			NO: 						"Nej",
			NONE: 						"Ingen sikkerhed",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Adgangskode",
			
			AUTH_TYPE: 					"Tilladelse Type",
			AUTO: 						"Auto",
			OPEN: 						"Åbent system",
			SHARED: 					"Delt nøgle",

			WEP_INDEX: 					"WEP-indeks",
			KEY1: 						"Key1",
			KEY2: 						"Key2",
			KEY3: 						"Key3",
			KEY4: 						"Key4",

			WEP_KEY_FORMAT: 			"Format af WEP-nøgle",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimal",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Aktiverer WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Aktiverer NAT",
			
			NAT_BOOST: 					"NAT-boost",
			ENABLE_NAT_BOOST: 			"Aktiver NAT-boost",
			
			MEDIA_SERVER: 				"Medie-server",
			SCAN_INTERVAL: 				"Auto Scanningsinterval (timer)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Indstillinger for DoS-beskyttelsesniveau",

			ICMP: 						"ICMP-FLOOD Pakkeniveau",
			UDP: 						"UDP-FLOOD Pakkeniveau",
			TCP: 						"TCP-FLOOD Pakkeniveau",

			WDS_MODE: 					"WDS-tilstand",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Lav",
			MIDDLE: 					"Midt",
			HIGH: 						"Høj",

			TO: 						"til",
			NOTICE_NAT_REBOOT: 			"Genstarter... <br/>Brug ikke under genstart.",

			NOTICE_NAT_BOOST: 			"Ændring af NAT-boost vil medføre genstart af denne enhed. Er du sikker på, at du vil fortsætte?",
			NOTICE:						"Din routers kanal er ikke den samme som AP-kanalen. Ønsker du at ændre dette?",

			UNIT: 						"(5-7200)pakker/sek.",
			LED: 						"Lysdiode",
			NIGHT_MODE: 				"Nattilstand",
			PERIOD_NIGHT_TIME: 			"Periode for nattetilstand",
			ENABLE: 					"Aktiver nattilstand",
			HH_MM: 						"(TT:MM)",
			NIGHT_MODE_NOTE:            "Din LED er slukket. Hvis du ønsker at bruge denne funktion, skal du klikke på LED'en øverst til højre på siden.",
			NOTE2:                      "Tidsperioden for nattilstand er baseret på routerens systemtid. Sørg for at du allerede har indstillet tiden på routeren."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Intet certifikat i øjeblikket, <b>Opret</b> et før aktivering af VPN-serveren.",
			NO_CERT_NOTE2: 				"Intet certifikat i øjeblikket, <b>Opret</b> et før eksport af konfigurationen.",
			ENABLE_VPN_SERVER: 			"Aktiver VPN-server",
			SERVICE_TYPE: 				"Tjenestetype",
			SERVICE_PORT: 				"Tjenesteport",
			VPN_SUBNET: 				"VPN-undernet/Netmaske",
			CLIENTS_ACCESS: 			"Klientadgang",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Kun hjemmenetværk",
			INTERNET_HOME: 				"Internet og hjemmenetværk",
			CERT_STR: 					"Intet certifikat i øjeblikket, klik på OK for at oprette et og gemme din konfiguration.",
			CERT_STR2: 					"Intet certifikat i øjeblikket, klik på OK for at oprette et og eksportere din konfiguration.",
			CONF_FILE: 					"Konfigurationsfil", 
			EXPORT_CONF_FILE: 			"Eksporter konfigurationen.",
			EXPORT: 					"Eksporter",

			INSTALL_GUIDE: 				"Installationsvejledning for VPN-klient",
			INSTALL_STEP: 				"Sådan aktiveres og tilsluttes din klientenheder til OpenVPN-serveren:",
			INSTALL_NOTICE:				"Før du kan konfigurere OpenVPN-serveren, skal du konfigurere dynamisk DNS-Service (anbefales) eller tildele en statisk IP-adresse til Wan-porten. Og sørge for at systemtiden er korrekt.",
			INSTALL_NOTE1: 				"Vælg Aktiver VPN-server.",
			INSTALL_NOTE2: 				"Før du kan konfigurere OpenVPN-serveren, skal du konfigurere dynamisk DNS-Service (anbefales) eller tildele en statisk IP-adresse til Wan-porten. Og sørg for at din eksterne port for NAT-indstillinger ikke er serviceporten og at DMZ er deaktiveret, og at din systemtid er korrekt.",
			INSTALL_NOTE3: 				"Klik på Eksporter for at gemme konfigurationsfilen.",
			INSTALL_NOTE4: 				"På dine klientenheder, skal du downloade og installere OpenVPN-klientværktøjet fra  <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> De officielt understøttede platforme såsom Windows, Mac OSX og Linux.",
			INSTALL_NOTE5: 				"Start af OpenVPN-klientværktøjet og tilføje en ny VPN-forbindelse ved hjælp af den gemte konfigurationsfil for at tilslutte enheden til VPN-serveren.",
			NOTE: 						"For at få mere at vide om OpenVPN klienter, kan du besøge <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Klient IP-adresse",
			ACCOUNT_USERNAME: 			"Brugernavn",
			ACCOUNT_PASSWORD: 			"Adgangskode",
			CLIENT_IP_NOTE: 			"(op til 10 klienter)",
			SAME_SUBNET_NOTE: 			"Klientens IP-adresse og LAN IP-adressen kan ikke være i samme undernet.",
			CONFLICT_WITH_DHCP: 		"Klientens IP-adresse er i konflikt med DHCP IP-adressegruppen.",
			CONFLICT_WITH_RESERVED: 	"Klientens IP-adresse er i konflikt med den reserverede IP-adresse.",
			CONFLICT_WITH_OPENVPN: 		"Klientens IP-adresse og OpenVPN IP-adressen kan ikke være i samme undernet.",
			SAME_SUBNET_NOTE2: 			"VPN-undernet/Netmaske og LAN IP-adressen kan ikke være i samme undernet.",
			CONFLICT_WITH_DHCP2: 		"VPN-undernet/Netmaske er i konflikt med DHCP IP-adressegruppen.",
			CONFLICT_WITH_RESERVED2: 	"VPN-undernet/Netmaske er i konflikt med den reserverede IP-adresse.",
			CONFLICT_WITH_PPTPVPN: 		"VPN-undernet/Netmaske og PPTP VPN IP-adressen kan ikke være i samme undernet.",
			VPN_MASK_ERROR: 			"Netmasken kan ikke være større end 255.255.255.248.",
			ACCOUNT_LIST: 				"Kontoliste (op til 16 brugere)",
			ADVANCED_SETTING: 			"Avanceret",
			ALLOW_SAMBA: 				"Lad adgang for Samba (netværkslokalitet)",
			ALLOW_NETBIOS: 				"Tillad NetBIOS passthrough",
			ALLOW_UNENCRYPTED_CONN: 	"Tillad ukrypterede forbindelser",
			USERNAME_CONFLICT: 			"Brugernavnet findes allerede.",
			
			CONNECT_PPTP: 				"Sådan aktiveres og tilsluttes din klientenheder til PPTP VPN-serveren:",
			CONNECT_NOTICE:				"Før du kan konfigurere PPTP VPN-serveren, skal du konfigurere dynamisk DNS-Service (anbefales) eller tildele en statisk IP-adresse til WAN-porten. Og sørg for at din eksterne port for NAT-indstillinger ikke er 1723 og at DMZ er deaktiveret, og at din systemtid er korrekt.",
			CONNECT_NOTE1: 				"Vælg Aktiver VPN-server.",
			CONNECT_NOTE2: 				"Konfigurer PPTP VPN-serverens parametre og klik på Gem.",
			CONNECT_NOTE3: 				"På dine klientenheder, kan du oprette en PPTP VPN-forbindelse. De officielt understøttede platforme inkluderer Windows, Mac OSX, Linux, iOS, og Android.",
			CONNECT_NOTE4: 				"Start PPTP VPN-programet, tilføje en ny forbindelse og indtast domænenavnet på den registrerede DDNS-tjeneste eller den statiske IP-adresse, som er tildelt WAN-porten, for at tilslutte enheden til PPTP VPN-serveren.",
			
			GENERATE_CERT: 				"Certifikat",
			GENERATE_NEW_CERT: 			"Opret certifikatet.",
			GENERATE: 					"Opret",
			GENERATE_TIPS: 				"Opretter certifikatet...<br/>Det vil tage et par minutter, vent venligst.",
			CERT_SUCCESS: 				"Succes",
			CERT_FAIL: 					"Det mislykkedes, prøv igen.",
			
			VPN_CONNECTIONS: 			"VPN-forbindelser",
			OPEN_VPN_CONNECTIONS: 		"OpenVPN-forbindelse",
			PPTP_VPN_CONNECTIONS: 		"PPTP VPN-forbindelse",
			USER:				"Bruger",
			REMOTE_IP:			"Fjern-IP",
			ASSIGNED_IP:			"Tildelt IP-adresse"
		}
	};
})(jQuery);

