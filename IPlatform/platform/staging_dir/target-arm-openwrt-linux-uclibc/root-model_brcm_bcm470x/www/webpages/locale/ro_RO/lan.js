(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			EMAIL: 						"Email",
			FORGET_PASSWORD: 			"Ați uitat parola?",
			LOGIN: 						"Autentificare",
			BEGIN: 						"Să începem",
			IMPORTANT_UPDATE_INFO: 		"Pentru a evita conflictul cu un alt echipament conectat, adresa IP a routerului a fost actualizată la",
			CONTINUE: 					"Continuați",

			IMPORTANT_NOTICE: 			"Anunț important",
			OR: 						", sunteți sigur că doriți să continuați să vizitați",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Apăsați și țineți apăsat butonul Reset timp de %SECONDS% secunde pentru a reveni la setările din fabrică ale routerului.",
			FORGET_PASSWORD_INFO_1: 	"În cazul în care funcția de recuperare a parolei este activată, un cod de verificare va fi trimis la adresa de e-mail desemnată pentru resetarea Utilizatorului și a Parolei.",
			FORGET_PASSWORD_SEND_FAILED:"Încercare de trimitere a codului eșuată! Vă rugăm să verificați conexiunea la Internet.",

			VERIFICATION_CODE: 			"Cod de verificare",

			RECEIVE_CODE: 				"Trimite cod",

			CONFIRM: 					"Confirmare",
			WELCOME: 					"Bine ați venit la TP-Link %model%. Vă rugăm să vă autentificați.",
			SEC: 						"s",

			USER_CONFLICT: 				"Conflict la autentificare!",
			FIRST_TIME: 				"Vă rugăm să configurați echipamentul %PRODUCT% pentru a se conecta la Internet. Pentru a începe, creați o parolă a dispozitivului pentru a putea gestiona %PRODUCT%.",
			FIRST_TIME1: 				"Vă rugăm să creați o parolă de administrator pentru a putea administra echipamentul %model%.",
			USER_CONFLICT_INFO: 		"Utilizatorul %USER% cu host-ul %HOST% (%IP%/%MAC%) este deja conectat la router. Va rugăm să încercați mai târziu.",
			USER_CONFLICT_INFO_2: 		"Utilizatorul %USER% (%IP%) este deja conectat la router. Nu vă puteți conecta în același timp. Vă rugăm să încercați mai târziu.",
			USER_CONFLICT_INFO_3: "V jednu chvíli se může přihlásit pouze jedno zařízení. Chcete pokračovat a vynutit odhlášení jiného zařízení?",
			
			LOGIN_FAILED: 				"Autentificare eșuată!",
			LOGIN_FAILED_COUNT: 		"Autentificarea a eșuat de %num1 ori și mai aveți %num2 încercări rămase.",
			NO_COOKIE: 					"Cookie-urile trebuie să fie activate pentru autentificare. Vă rugăm să activați cookie-urile sau să opriți navigarea privată/incognito.", 

			FORGET_PASSWORD_NOTE: 		"Dacă nu ați configurat funcția de recuperare a parolei, puteți apăsa și menține apăsat butonul Reset timp de %SECONDS% secunde pentru a reveni la setările din fabrică ale routerului."
		},
		INIT: {
			PASSWORD: 					"Parolă",
			CONFIRM_PASSWORD:				"Confirmare parolă",
			BEGIN: 						"Să începem",
			IMPORTANT_UPDATE_INFO: 		"Pentru a evita conflictul cu dispozitivul la care se conectează, adresa IP a routerului a fost actualizată la",
			CONTINUE: 					"Următorul",

			IMPORTANT_NOTICE: 			"Anunț important",
			OR: 						", sunteți sigur că doriți să continuați să vizitați",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Confirmare",

			SEC: 						"s",

			USER_CONFLICT: 				"Conflict autentificare!",
			
			USER_CONFLICT_INFO: 		"Utilizatorul %USER% cu terminalul  %HOST% (%IP%/%MAC%) este în prezent autentificat în router. Nu vă puteți autentifica în același timp. Vă rugăm să încercați din nou mai târziu.",
			USER_CONFLICT_INFO_2: 		"Utilizatorul % USER% (%IP%) este în prezent autentificat în router. Nu vă puteți autentifica în același timp. Vă rugăm să încercați din nou mai târziu.",
			
			LOGIN_FAILED: 				"Eroare autentificare!",
			LOGIN_FAILED_COUNT: 		"Autentificarea a eșuat de %num1 ori și mai aveți %num2 încercări rămase.",
			NO_COOKIE: 					"Cookie-urile trebuie să fie activate pentru autentificare. Vă rugăm să activați cookie-urile sau să opriți navigarea privată/incognito.", 

			INIT_NOTE_TITLE: 			"Dragă client,",
			INIT_NOTE_CONTENT: 			"Vă rugăm să configurați echipamentul %PRODUCT% pentru a se conecta la Internet. Pentru a începe, creați o parolă a dispozitivului pentru a putea gestiona %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Versiune firmware:",
			FEATURE: 						"Modificări și erori corectate:",
			TITLE: 							"Este detectată o nouă actualizarea firmware .",
			UPGRADE_NOW: 					"Actualizează acum",
			REMIND: 						"Amintește-mi mai târziu",
			NOTICE:    						"Salut, un nou firmware este disponibil pentru router.",
			NEVER: 							"Ignorați această versiune"
			
		},

		WAN_ERROR: {
			TITLE: 							"Eroare conexiune WAN!",
			STATUS: 						"Stare",
			INFO: 							"Informații",
			SETUP: 							"Configurați o conexiune la Internet",
			NEVER: 							"Nu îmi mai aminti"
		},

		OFFLINE_ERROR:{
			TITLE: "Oops... Nu am putut accesa serverul cloud.",
			NOTE1: "1. Asigurați-vă că aveți acces la Internet.",
			NOTE2: "2. Serverul cloud este inaccesibil momentan. Vă rugăm să reîncercați mai târziu.",
			NOTE3: "3. Dacă problema persistă, vă rugăm să contactați <a target=\"_blank\" id=\"support\">suportul tehnic TP-Link</a>.",
			ERROR: "Eroare"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Versiune Firmware:",
			HARDWARE_VERSION: 				"Versiune Hardware:",
			HELP_SUPPORT: 					"Asistență",
			FAQ: 							"FAQ (Întrebări frecvente)",
			CONFIRM_REBOOT: 				"Sunteți sigur că doriți să reporniți routerul?",
			CONFIRM_LOGOUT: 				"Sunteți sigur că doriți să vă deconectați?",
			UPGRADE_ALERT_1: 				"Versiunea actuală de firmware nu dispune de suport pentru serviciul TP-Link cloud. Vă recomandăm să descărcați ultimul firmware de pe site-ul www.tp-link.com și să îl actualizați.",
			UPGRADE_ALERT_2: 				"Versiunea actuală de firmware nu dispune de suport pentru serviciul TP-Link cloud. Vă recomandăm să actualizați firmware-ul apăsând pictograma Actualizare din colțul dreapta sus.",
			ACCOUNT_UNLOGIN: 				"Cont",

			REBOOTING: 						"Repornire... <br/>Vă rugăm să nu utilizați routerul în timpul procesului de repornire.",

			HELP_APP: 					"Aplicația",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Scanează codul QR pentru a descărca aplicația TP-Link Tether",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Administrează rețeaua ta de pe orice dispozitiv mobil.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Control deplin direct din palma ta."
		},

		NAV: {
			QUICK_SETUP: 				"Configurare rapidă",
			BASIC: 						"Simplu",
			ADVANCED: 					"Avansat"
		},

		CONTROL: {
			LOGIN: 						"Autentificare",
			LOGOUT: 					"Deconectare",
			UPDATE: 					"Actualizare",
			REBOOT: 					"Repornire",
			LED: 						"LED",
			LED_ON: 					"LED Pornit",
			LED_OFF: 					"LED Oprit",
			LED_DISABLED: 				"Pe perioada modului noapte starea LED-ului nu poate fi modificată"
		},

		LANGUAGE: {
			EN_US: 						"Engleză",
			ZH_CN: 						"Română"
		},

		REGION: {
			ALBANIA: 					"Albania",
			ALGERIA: 					"Algeria",
			AMERICAN_SAMOA: 			"American Samoa",
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
			BELARUS: 					"Belarus",
			BELGIUM: 					"Belgium",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Berumuda",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnia and Herzegowina",
			BRAZIL: 					"Brazil",
			BRUNEI_DARUSSALAM: 			"Brunei Darussalam",
			BULGARIA: 					"Bulgaria",
			CAMBODIA: 					"Cambodia",
			CANADA: 					"Canada",
			CAYMAN_ISLANDS: 			"Cayman Islands",
			CHILE: 						"Chile",
			CHINA: 						"People's Republic of China",
			COLOMBIA: 					"Colombia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Croatia",
			CYPRUS: 					"Cyprus",
			CZECH_REPUBLIC: 			"Czech Republic",
			DENMARK: 					"Denmark",
			DOMINICAN_REPUBLIC: 		"Dominican Republic",
			ECUADOR: 					"Ecuador",
			EGYPT: 						"Egypt",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estonia",
			ETHIOPIA: 					"Ethiopia",
			FAEROE_ISLANDS: 			"Faeroe Islands",
			FINLAND: 					"Finland",
			FRANCE: 					"France",
			FRENCH_GUIANA: 				"French Guiana",
			FRENCH_POLYNESIA: 			"French Polynesia",
			GEORGIA: 					"Georgia",
			GERMANY: 					"Germany",
			GREECE: 					"Greece",
			GREENLAND: 					"Greenland",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong S.A.R., P.R.C.",
			HUNGARY: 					"Hungary",
			ICELAND: 					"Iceland",
			INDIA: 						"India",
			INDONESIA: 					"Indonesia",
			IRAN: 						"Iran",
			IRAQ: 						"Iraq",
			IRELAND: 					"Ireland",
			ISRAEL: 					"Israel",
			ITALY: 						"Italy",
			JAMAICA: 					"Jamaica",

			JAPAN: 						"Japan",
			JAPAN_1: 					"Japan 1",
			JAPAN_2: 					"Japan 2",
			JAPAN_3: 					"Japan 3",
			JAPAN_4: 					"Japan 4",
			JAPAN_5: 					"Japan 5",
			JAPAN_6: 					"Japan 6",

			JORDAN: 					"Jordan",
			KAZAKHSTAN: 				"Kazakhstan",
			KENYA: 						"Kenya",

			NORTH_KOREA: 				"North Korea",
			KOREA_REPUBLIC: 			"Korea Republic",
			KOREA_REPUBLIC_3: 			"Korea Republic 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Latvia",
			LEBANON: 					"Lebanon",
			LIBYA: 						"Libya",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Lithuania",
			LUXEMBOURG: 				"Luxembourg",
			MACAU: 						"Macau SAR",
			MACEDONIA: 					"the Former Yugoslav Republic of Macedonia",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malaysia",
			MALDIVES: 					"Maldives",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinique",
			MAURITIUS: 					"Mauritius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Mexico",
			MONACO: 					"Principality of Monaco",
			MONGOLIA: 					"Mongolia",
			MOROCCO: 					"Morocco",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Netherlands",
			NETHERLANDS_ANTILLES: 		"Netherlands-Antilles",

			NEW_ZEALAND: 				"New Zealand",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Norway",
			NORTHERN_MARIANA_ISLANDS: 	"Northern Mariana Islands",
			OMAN: 						"Oman",
			PAKISTAN: 					"Islamic Republic of Pakistan",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua New Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Peru",
			PHILIPPINES: 				"Republic of the Philippines",
			POLAND: 					"Poland",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Reunion",
			ROMANIA: 					"Romania",
			RUSSIA: 					"Singapore-ExStream",
			RWANDA: 					"Rwanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Saudi Arabia",
			SINGAPORE: 					"Singapore",
			SLOVAK_REPUBLIC: 			"Slovak Republic",
			SLOVENIA: 					"Slovenia",
			SOUTH_AFRICA: 				"South Africa",
			SPAIN: 						"Spain",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Suriname",
			SWEDEN: 					"Sweden",
			SWITZERLAND: 				"Switzerland",
			SYRIA: 						"Syria",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tanzania",
			THAILAND: 					"Thailand",
			TRINIDAD_TOBAGO: 			"Trinidad y Tobago",
			TUNISIA: 					"Tunisia",
			TURKEY: 					"Turkey",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ukraine",
			UNITED_ARAB_EMIRATES: 		"United Arab Emirates",
			UNITED_KINGDOM: 			"United Kingdom",
			UNITED_STATES: 				"United States",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Uzbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Viet Nam",
			VIRGIN_ISLANDS: 			"Virgin Islands(U.S.)",
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
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midway Island,Samoa",
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
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azores, Cape Verde Is",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwich Mean Time, Dublin, London",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlin, Stockholm, Rome, Bern, Brussels",
			ATHENS_HELSINKI: 			"(GMT+02:00) Athens, Helsinki, Eastern Europe, Israel",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh, Moscow",

			TEHERAN: 					"(GMT+03:30) Teheran",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Ekaterinburg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Calcutta, Bombay, New Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Beijing, Hong Kong, Perth, Singapore",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Solomon Is., New Caledonia",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamchatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Aplicație",
			GAME:						"Joc",
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
			DAY: 						"Zi",

			MONDAY: 					"Luni",
			TUESDAY: 					"Marți",
			WEDNESDAY: 					"Miercuri",
			THURSDAY: 					"Joi",
			FRIDAY: 					"Vineri",
			SATURDAY: 					"Sâmbătă",
			SUNDAY: 					"Duminică",
			
			MON: 						"Lun.",
			TUES: 						"Mar.",
			WED: 						"Mie.",
			THUR: 						"Joi.",
			FRI: 						"Vin.",
			SAT: 						"Sâm.",
			SUN: 						"Dum.",

			JAN: 						"Ian.",
			FEB: 						"Feb.",
			MAR: 						"Mar.",
			APR: 						"Apr.",
			MAY: 						"Mai.",
			JUN: 						"Iun.",
			JUL: 						"Iul.",
			AUG: 						"Aug.",
			SEP: 						"Sep.",
			OCT: 						"Oct.",
			NOV: 						"Noi.",
			DEC: 						"Dec."

		},

		HOUR: {
			AM_1: 						"1a.m.",
			AM_2: 						"2a.m.",
			AM_3: 						"3a.m.",
			AM_4: 						"4a.m.",
			AM_5: 						"5a.m.",
			AM_6: 						"6a.m.",
			AM_7: 						"7a.m.",
			AM_8: 						"8a.m.",
			AM_9: 						"9a.m.",
			AM_10: 						"10a.m.",
			AM_11: 						"11a.m.",
			AM_12: 						"12a.m.",
			PM_1: 						"1p.m.",
			PM_2: 						"2p.m.",
			PM_3: 						"3p.m.",
			PM_4: 						"4p.m.",
			PM_5: 						"5p.m.",
			PM_6: 						"6p.m.",
			PM_7: 						"7p.m.",
			PM_8: 						"8p.m.",
			PM_9: 						"9p.m.",
			PM_10: 						"10p.m.",
			PM_11: 						"11p.m.",
			PM_12: 						"12p.m."
		},

		ORDER: {
			"1ST": 						"1",
			"2ND": 						"2",
			"3RD": 						"3",
			"4TH": 						"4",
			"5TH": 						"5",
			"1ST_": 					"1",

			TH: 						"th"
		},

		GRID: {
			CLIENT_NUMBER: 				"Număr Clienți",

			ID: 						"ID",
			MODIFY: 					"Modificare",
			STATUS: 					"Stare",
			ENABLE: 					"Activare",

			OPERATION: 					"Operațiune",
			CHOOSE: 					"Alege",
			DESCRIPTION: 				"Descriere",
			

			AUTO_REFRESH: 				"Actualizare Automată",
			REFRESH: 					"Actualizare",
			NUMBER: 					"Număr",
			ENABLED: 					"Activat",
			DISABLED: 					"Dezactivat",
			ACTIVE: 					"Activ",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Adaugă",
			CHOOSE: 					"Alege",
			EDIT: 						"Editează",
			DELETE: 					"Șterge",
			DELETE_ALL: 				"Șterge Tot",
			REMOVE: 					"Elimină",
			RESET: 						"Resetare",
			RESET_ALL: 					"Resetare Completă",
			DETECT: 					"Detectare",
			ENABLE: 					"Activare",
			DISABLE: 					"Dezactivare",
			CLEAR: 						"Șterge",

			REFRESH: 					"Actualizare",
			SEARCH: 					"Caută...",
			BROWSE: 					"Căutare",

			SAVE: 						"Salvare",
			BACK: 						"Înapoi",

			PREV: 						"Precedentul",
			NEXT: 						"Următorul",
			FINISH: 					"Terminare",
			
			ON: 						"Pornit",
			OFF: 						"Oprit",
			LOW: 						"Scăzută",
			MIDDLE: 					"Medie",
			HIGH: 						"Ridicată",
			
			OK: 						"OK",
			CANCEL: 					"Revocare",

			YES: 						"Da",
			NO: 						"Nu",
			
			CONNECTED: 					"Conectat",
			CONNECTING: 				"Conectare",
			DISCONNECTING: 				"Deconectare",
			DISCONNECTED: 				"Deconectat",

			PASSWORD_HINT: 				"Parolă",
			FILEBUTTONTEXT: 			"Căutare",
			FILEBLANKTEXT: 				"Vă rugăm să alegeți un fișier.",
			NOSELECTEDTEXT: 			"Selectați opțiunile.",

			ADD_A_NEW_KEYWORD: 			"Adaugă un cuvânt-cheie nou",

			SUCCESSED: 					"Succes!",
			FORM_SAVED: 				"Salvat",
			FORM_FAILED: 				"Eroare",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Salvat",
			GRID_FAILED: 				"Eroare",
			GRID_NONE_SELECT: 			"Vă rugăm să selectați cel puțin o intrare.",
			GRID_DELETE_COMFIRM: 		"Sunteți sigur că doriți să ștergeți aceste intrări?",
			GRID_DELETE_ALL_COMFIRM: 	"Sunteți sigur că doriți să ștergeți toate intrările?",
			GRID_MAX_RULES: 			"Maximul numărului de intrări depășit.",
			KEYWORD_MAX_OVERFLOW: 		"Numărul de cuvinte cheie a depășit limita maximă.",

			NOTE: 						"Notă:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Format incorect.",
			BLANKTEXT: 					"Acest câmp este necesar.",

			EMAIL: 						"Format email invalid.",
			NUMBER: 					"Format incorect.",

			NUMBER_MIN: 				"Valoare incorectă. Vă rugăm să introduceți un număr mai mare de %min.",
			NUMBER_MAX: 				"Valoare incorectă. Vă rugăm să introduceți un număr mai mic de %max.",

			NUMBER_MIN_MAX: 			"Valoare incorectă. Vă rugăm să introduceți un număr între %min și %max.",
			HEX: 						"Acest câmp trebuie să fie un număr hexadecimal.",

			IP: 						"Format incorect.",

			IP_NO_ALL_ZERO:				"Adresa nu trebuie să fie 0.0.0.0.",
			IP_NO_LOOP:					"Adresa nu trebuie să fie de tip loopback.",
			IP_NO_D_TYPE:				"Adresa nu trebuie să fie un IP de clasă D.",
			IP_NO_E_TYPE:				"Adresa nu trebuie să fie un IP de clasă E.",
			IP_NO_ALL_ONE:				"Adresa nu trebuie să fie 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"Adresa nu trebuie să înceapă cu 255.",
			IP_NO_FIRST_ZERO:			"Adresa nu trebuie să înceapă cu 0.",
			MASK_NO_ALL_ONE:			"Subnet Mask nu poate fi 255.255.255.255.",

			IPV6: 						"Format incorect.",
			IPV6_NOT_GLOBAL:			"Format incorect.",
			IPV6_NOT_PREFIX:			"Format incorect.",
			IP_DOMAIN: 					"Format incorect.",
			IPV6_DOMAIN: 				"Format incorect.",
			MAC: 						"Format incorect.",
			MULTI_MAC:					"Format incorect.",
			DATE: 						"Format incorect.",
			DATE_INVALID: 				"Vă rugăm să introduceți o dată cuprinsă între 01/01/1970 și 12/31/2030.",
			MASK: 						"Format incorect.",
			DOMAIN: 					"Format incorect.",
			STRING_DOMAIN:              "Format incorect.",
			USER: 						"Format incorect.",
			NOTE: 						"Format incorect.",
			PWD: 						"Format incorect.",
			SSID: 						"Format incorect.",
			NAME:						"Format incorect.",
			ASCII_VISIBLE:				"Format incorect.",
			STRING_VISIBLE:				"Format incorect.",
			STRING_VISIBLE_NO_COMMA:    "Format incorect.",
			STRING_VISIBLE_ALLOW_BLANK: "Format incorect.",
			NAME_SPECIAL: 				"Vă rugăm să introduceți 4-15 caractere alfanumerice, - și _.",
			VPN_NAME_PWD: 				"Vă rugăm să introduceți 1-15 caractere alfanumerice, - și _."	
			
		},


		ERROR: {			
			"00000001":					"Tip de fișier incorect.",
			"00000002":					"Eroare Checksum.",
			"00000003":					"Fișierul este prea mare.",
			"00000004":					"Eroare încărcare.",
			"00000005":					"Eroare repornire.",
			"00000006":					"Eroare necunoscută.",
			"00000007":					"Acest element există deja. Vă rugăm să introduceți altul.",

			"00000009":					"Vă rugăm să folosiți valoarea implicită 21 sau să introduceți o valoare cuprinsă între 1024 și 65535.",
			"00000010":					"Portul trebuie să fie un număr.",

			"00000011":					"Numele utilizatorului trebuie să fie același cu cel folosit în câmpul De La.",
			"00000012": 				"Numele utilizatorului trebuie să înceapă cu o literă.",

			"00000021":					"Format incorect.",

			"00000032": 				"Valoarea trebuie să fie mai mică decât cea de referință.",
			"00000033": 				"Valoarea trebuie să fie mai mică decât cele de referință.",
			"00000034": 				"Valoare invalidă, vă rugăm să introduceți un număr cuprins între 5 și 7200.",

			"00000039": 				"Va rugăm să folosiți valoarea implicită 0 sau să introduceți o valoare cuprinsă între 30 și 86400.",
			"00000040": 				"Sunt necesare SSID și adresa MAC.",

			"00000042": 				"Vă rugăm să folosiți valoarea implicită 80 sau să introduceți o valoare cuprinsă între 1024 și 65535.",

			"00000045": 				"Default Gateway și adresa IP LAN trebuie să fie în același subnet. Va rugăm să încercați din nou.",

			"00000047": 				"Intervalul de adrese IP și adresa IP LAN trebuie să fie în același subnet. Vă rugăm să încercați din nou.",

			
			"00000049":					"Rețeaua Destinație este incorectă.",

			"00000050": 				"Adresă IP a Serverului DNS greșită. Introduceți o altă adresă IP.",
			"00000051": 				"Această adresă MAC există. Vă rugăm să introduceți altă adresă.",
			"00000052": 				"Această adresă IP este folosită. Vă rugăm să introduceți altă adresă.",

			"00000053": 				"Adresa de inceput nu trebuie să fie mai mare decât adresa de sfârșit. <br/>Vă rugăm să o reintroduceți.",

			"00000054": 				"Intervalul de adrese IP și adresa IP LAN trebuie să fie în același subnet. Vă rugăm să încercați din nou.",

			"00000055": 				"Adresa IP nu poate să fie identică cu adresa LAN.",

			"00000056": 				"Adresa IP pentru management de la distanță și adresa IP LAN nu pot fi în același subnet. Vă rugăm să introduceți altă adresă IP.",

			"00000057": 				"Parola PSK incorectă, vă rugăm să o introduceți din nou.",
			"00000058": 				"Parola WEP incorectă, vă rugăm să o introduceți din nou.",

			"00000059": 				"Subnet Mask și adresa IP LAN sunt incorecte, vă rugăm să introduceți altele, valide.",

			"00000060": 				"Adresa IP WAN și adresa IP LAN nu pot fi în același subnet. <br/>Vă rugăm să introduceți altă adresă IP.",

			"00000061": 				"Ora de începere trebuie să fie mai devreme decât ora de încheiere.",

			"00000062": 				"Acest câmp este necesar.",
			"00000063": 				"Acest câmp este necesar.",

			"00000064": 				"Nu se poate bloca adresa MAC a Host-ului.",
			"00000065": 				"Acest element este în conflict cu elementele existente, vă rugăm să verificați.",
			
			"00000066": 				"Parola trebuie să folosească între 8 și 63 caractere sau 64 caractere hexadecimale.",
			"00000067": 				"Parola trebuie să folosească 10 caractere hexadecimale.",
			"00000068": 				"Parola trebuie să folosească 5 caractere ASCII.",
			"00000069": 				"Parola trebuie să folosească 26 caractere hexadecimale.",
			"00000070": 				"Parola trebuie să folosească 13 caractere ASCII.",
			"00000071": 				"Parola trebuie să folosească 32 caractere hexazecimale.",
			"00000072": 				"Parola trebuie să folosească 16 caractere ASCII.",
			"00000073": 				"Parola trebuie să folosească mai puțin de 64 caractere.",

			"00000074": 				"Tip de fișier incorect.",

			"00000075": 				"Lungimea codului PIN trebuie să fie de 8 caractere.",

			"00000076": 				"În conflict cu valori existente, vă rugăm să verificați setările Port declanșator și  Protocol declanșator.",
			"00000077": 				"Adresa IP nu poate fi identică cu adresa IP LAN.",
			"00000078": 				"Adresa IP a Host-ului nu poate fi aceeași cu adresa IP LAN.",

			"00000080": 				"Parolă incorectă. Te rugăm să încerci din nou.",

			"00000088": 				"Această operațiune nu este permisă prin management de la distanță.",
			"00000089": 				"Ați depășit  %num încercări, vă rugăm să reîncercați în două ore.",

			"00000090": 				"Destinația nu poate fi adresa IP LAN.",
			"00000091": 				"Destinația nu poate fi adresa IP WAN",

			"00000092": 				"Adresa IP și adresa IP LAN nu trebuie să fie în același subnet. <br/>Vă rugăm să încercați din nou.",
			"00000093": 				"Adresa IP WAN și adresa IP LAN nu pot fi în același subnet. <br/>Vă rugăm să introduceți altă adresă IP.",

			"00000094": 				"VLAN ID-urile nu pot fi la fel.",
			"00000095": 				"Este necesar cel puțin un port de Internet.",

			"00000096": 				"Cuvântul deja există.",

			"00000097": 				"Configurările efectuate în banda de 2.4GHz vor avea efect doar după ce butonul WiFi va fi în poziția Pornit.",
			"00000098": 				"Configurările efectuate în banda de 5GHz vor avea efect doar după ce butonul WiFi va fi în poziția Pornit.",
			"00000099": 				"Configurările efectuate în benzile de frecvență 2.4GHz și 5GHz vor avea efect doar după ce butonul WiFi va fi în poziția Pornit.",

			"00000100": 				"Configurarea rețelei wireless în banda de frecvență de 5GHz nu este disponibilă din cauza restricțiilor din regiunea/țara dumneavoastră.",

			"00000101": 				"Funcția wireless este oprită. Dacă doriți să utilizați această funcție, vă rugăm să o porniți de la butonul WiFi.",
			"00000102": 				"Funcția wireless este oprită. Dacă doriți să utilizați această funcție, vă rugăm să o porniți de la butonul WiFi.",

			"00000103": 				"Funcția wireless este oprită. Dacă doriți să utilizați această funcție, vă rugăm să o porniți de la butonul WiFi.",
			"00000104": 				"Funcția wireless este dezactivată.",

			"00000105": 				"Funcțiile QoS și IPTV nu pot fi active simultan.",

			"00000106": 				"Adresa IP nu poate fi identică cu adresa IP LAN.",
			
			"00000107": 				"Destinația există deja.",

			"00000110": 				"Adresa IP și adresa IP LAN trebuie fie în același subnet.",
			
			"00000111": 				"Funcțiile QoS și <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> nu pot fi activate simultan.",
			"00000112": 				"Funcția WDS poate funcționa în banda de 2.4GHz sau în banda de 5GHz. Deasemenea, rețeaua Guest nu este disponibilă în banda WDS.",
			"00000113": 				"Funcțiile WDS și Guest Network nu pot fi activate în același timp.",
			"00000114": 				"Funcțiile Statistici Trafic și <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> nu pot fi active simultan.",
			"00000115": 				"Funcțiile IPTV și <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> nu pot fi active simultan.",

			"00000117": 				"Acest Nume de Domeniu deja există.",
			"00000118": 				"Numarul de Nume de Domeniu a depășit limita.",
			"00000119":				"Funcția NAT Boost va f dezactivată dacă <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> sau <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Statistici Trafic</a> este activă.",

			"00000120": 				"Parola trebuie să folosească 5 sau 13 caractere ASCII.",
			"00000121": 				"Parola trebuie să folosească 10 sau 26 caractere hexadecimale.",
			"00000122": 				"Numele de utilizator și parola sunt necompletate, doriți să continuați?",
			"00000123": 				"Salvare... <br/>Vă rugăm să nu utilizați routerul în acest timp.",
			"00000124": 				"PIN-ul routerului este blocat din cauza încercărilor repetate folosind un PIN greșit. Vă rugăm să generați un PIN nou.",

			"00000125": 				"Numărul regulilor QoS a depășit limita permisă.",
			"00000126": 				"Dimensiunea fișierului a depășit limita permisă.",
			"00000127": 				"Conținutul fișierului este incorect.",
			"00000128": 				"Vă rugăm să selectați cel puțin o aplicație.",
			"00000129": 				"Vă rugăm să selectați cel puțin un port fizic.",
			"00000130":					"Funcția WPS este dezactivată.",
			"00000131": 				"Adresa serverului NTP nu trebuie să fie adresa loopback.",
			"00000132": 				"Modul switch a eșuat. Vă rugam să încercați mai târziu sau reporniți routerul.",
			"00000133": 				"Adresa IP a gazdei DMZ este invalidă. Vă rugăm să introduceți o adresă validă.",
			"00000134":  				"Adresa IP internă este invalidă. Vă rugăm să introduceți o adresă validă.",
			"00000135": 				"Eroare fișier firmware.",
			"00000136": 				"Eroare fișier backup.",
			"00000137": 				"Utilizatorul este necompletat, sigur doriți să continuați?",
			"00000138": 				"Parola este necompletată, sigur doriți să continuați?",
			"00000139": 				"Parametrii de recuperare a parolei sunt incorecți.",
			"00000140": 				"Cod incorect.",
			"00000141": 				"Recuperarea parolei este dezactivată.",
			"00000142": 				"Nu s-a reușit trimiterea codului. Vă rugăm să verificați conexiunea la Internet.",
			"00000143": 				"Adresa de email este invalidă.",
			"00000144": 				"Mesaj email invalid.",
			"00000145": 				"Gazda nu a fost găsită.",
			"00000146": 				"Eroare autentificare.",
			"00000147": 				"Portul trebuie să fie cuprins între 1 și 65535.",
			"00000148": 				"Pentru intervalul porturilor, numărul portului de început trebuie să fie mai mic decât cel de sfârșit. Vă rugăm introduceți din nou.",
			"00000149": 				"Numărul portului se suprapune. Vă rugăm introduceți din nou.",
			"00000150": 				"Subnet Mask și adresa IP WAN sunt incorecte, vă rugăm să introduceți altele, valide.",
			"00000151": 				"Vă rugăm să selectați cel puțin o zi.",
			"00000152": 				"Vă rugăm să setați timpul de acces la Internet.",
			"00000213":					"Adresa IP a serverului DNS și adresa IP LAN nu pot fi în aceeași subrețea.<br/>Vă rugăm să introduceți alta.",
			"10000139": 				"Fără conexiune la Internet",
			"10000140": 				"Cererea a expirat. Vă rugăm să verificați conexiunea la Internet și încercați din nou mai târziu.",
			"10000158": 				"Portul WAN este deconectat.",
			"10000159": 				"Conexiunea la Internet nu poate fi stabilită . Vă rugăm să contactați furnizorul de servicii de Internet sau încercați din nou mai târziu.",
			"10000160": 				"Nu a fost obținută adresa IP de la serverul DHCP. Vă rugăm să verificați tipul de conexiune WAN sau încercați din nou mai târziu.",
			"10000161": 				"Autentificarea PPPoE nu a avut succes. Vă rugăm să verificați numele de utilizator și parola.",
			"10000162": 				"Conexiunea la serverul PPPoE nu poate fi stabilită.",

			"10000164": 				"Autentificarea PPPoE nu a avut succes. Vă rugăm să verificați numele de utilizator și parola.",
			"10000165": 				"Conexiunea la serverul PPTP nu poate fi stabilită.",

			"10000167": 				"Autentificarea PPPoE nu a avut succes. Vă rugăm să verificați numele de utilizator și parola.",
			"10000168": 				"Conexiunea la serverul L2TP nu poate fi stabilită.",
			"10000169": 				"Eroare necunoscută. Vă rugăm să încercați din nou mai târziu.",
			"10000172": 				"Conexiunea a eșuat.",

			"10000185": 				"Eroare sistem.",	
			"10000186": 				"Eroare fișier firmware.",	
			"10000187": 				"Eroare descărcare firmware.",	
			"10000188": 				"Eroare actualizare firmware.",	
			"10000191": 				"Nu se poate descărca fișierul firmware.",
			"10000192": 				"Eroare actualizare firmware.",
			"10000193": 				"Conexiunea la server nu poate fi stabilită.",	
			"10000194": 				"Nu se poate conecta la serverul cloud. Vă rugăm să încercați din nou mai târziu.",
			"10000195": 				"Nu puteți seta parola din nou pentru că deja ați setat o parolă.",
			
			"E3002":                    "Timp cerere expirat.", 
			"E10000": 					"Eroare.",
			"E20002": 					"Timp cerere expirat.",
			"E20003": 					"Serverul cloud este suprasolicitat. Vă rugăm să încercați din nou mai târziu.",
			"E20107": 					"Introducere invalidă.",
			"E20200": 					"Format email invalid.",
			"E20502": 					"Nu s-a reușit asocierea dispozitivului. Vă rugăm să încercați din nou mai târziu.",
			"E20503": 					"Nu s-a reușit dezasocierea dispozitivului. Vă rugăm să încercați din nou mai târziu.",
			"E20506": 					"Operațiunea nu a reușit. Dispozitivul este deja asociat cu alt cont cloud.",
			"E20507": 					"Acest dispozitiv este dezasociat de cont.",
			"E20508": 					"Numărul de conturi asociate a atins limita maximă.",
			"E20509": 					"Conturile de tip utilizator nu au dreptul de a asocia utilizatori noi.",
			"E20571": 					"Dispozitivul este offline.",
			"E20580": 					"Operațiunea nu a reușit. Dispozitivul nu este asociat cu contul.",
			"E20600": 					"Acest email nu este înregistrat.",
			"E20601": 					"Nume de utilizator sau parolă incorectă.",
			"E20602": 					"Acest cont nu este încă activat.",
			"E20603": 					"Acest email este deja înregistrat.",
			"E20604": 					"Nume utilizator invalid. Vă rugăm să introduceți o adresă de email sau un număr de telefon.",
			"E20606": 					"Trimitere email de activare cont nereușită.",
			"E20615": 					"Parolă invalidă. Vă rugăm să introduceți 6-32 caractere ASCII fără spații.",
			"E20616": 					"Parolă invalidă. Vă rugăm să introduceți 6-32 caractere ASCII fără spații.",
			"E20617": 					"Acest cont nu există.",
			"E20618": 					"Acest cont nu există.",
			"E20620": 					"Nume invalid. Vă rugăm să introduceți 1-64 caractere.",
			"E20661": 					"Acest cont va fi blocat pentru două ore din cauza încercărilor de autentificare excesive (20 de încercări în jumătate de oră).",
			"E20662": 					"Acest dispozitiv este blocat. În următoarele 24 de ore dispozitivul nu va răspunde la nicio cerere de verificare de cod.",
			"E20671": 					"Contul nu se poate verifica.",
			"E20672": 					"Contul nu se poate verifica. Linkul de activare a contului a expirat. Vă rugăm să trimiteți o cerere nouă.",
			"E20673": 					"Linkul de resetare a parolei a expirat. Vă rugăm să trimiteți o nouă cerere.",
			"E20674": 					"Parola nu se poate reseta.",
			"E20675": 					"Contul este autentificat în altă parte.",
			"E22000": 					"Introducere invalidă.",
			"E22001": 					"Numele de domeniu este deja înregistrat.",
			"E22002": 					"Numărul numelor de domeniu înregistrate a depășit limita maximă.",
			"E22003": 					"Numărul numelor de domeniu asociate a atins limita maximă.",
			"E22004": 					"Numele de domeniu este asociat cu alt dispozitiv.",
			"E22006": 					"Eroare sistem. Vă rugăm să încercați din nou mai târziu.",
			"E22007": 					"Numele de domeniu conține cuvinte sensibile. Vă rugăm să încercați alt nume de domeniu.",
			"E22008": 					"Numele de domeniu nu există.",

			"E50101": 					"Portul WAN este deconectat.",
			"E50102": 					"Nu s-a reușit conectarea la Internet. Vă rugăm să contactați furnizorul de servicii Internet sau să încercați din nou mai târziu.",
			"E50103": 					"Nu a fost obținută adresa IP de la serverul DHCP. Vă rugăm să verificați tipul de conexiune WAN sau încercați din nou mai târziu.",
			"E50111": 					"Autentificarea PPPoE nu a avut succes. Vă rugăm să verificați numele de utilizator și parola.",
			"E50112": 					"Conexiunea la serverul PPPoE nu poate fi stabilită.",
			"E50121": 					"Autentificarea PPPoE nu a avut succes. Vă rugăm să verificați numele de utilizator și parola.",
			"E50122": 					"Conexiunea la serverul PPTP nu poate fi stabilită.",
			"E50131": 					"Autentificarea PPPoE nu a avut succes. Vă rugăm să verificați numele de utilizator și parola.",
			"E50132": 					"Conexiunea la serverul L2TP nu poate fi stabilită.",
			"E50140": 					"Eroare necunoscută. Vă rugăm să încercați din nou mai târziu.",
			"E51215": 					"Cererea a expirat. Vă rugăm să verificați conexiunea la Internet și încercați din nou mai târziu.",
			"E_CLOUD_SERVER": 			"Eroare de server. Vă rugăm să încercați din nou mai târziu.",
			"E5000": 					"Nu se poate conecta la serverul cloud.",
			"E5001": 					"ID-ul TP-Link (email) este incorect sau dispozitivul tău este offline și doar administratorul (%email) are acces în modul offline.",
			"E5002": 					"Parolă incorectă."
		},

		MENU: {
			STATUS: 					"Stare",
			NETWORK: 					"Rețea",
			NETWORK_MAP: 				"Hartă Rețea",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"Server DHCP",
			DYNAMIC_DNS: 				"DNS Dinamic",
			ADVANCED_ROUTING: 			"Rutare Avansată",

			WIRELESS: 					"Wireless",
			WIRELESS_SETTINGS: 			"Setări Wireless",
			WDSBRIDGING: 				"Punte WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"Filtrare MAC",
			WIRE_STATISTICS: 			"Statistici",
			
			
			GUEST_NETWORK: 				"Guest Network 2.4GHz/5GHz",
			WIRELESS_SETTINGS: 			"Setări Wireless",
			STORAGE_SHARING: 			"Partajare mediu stocare",
			NAT_FORWARDING: 			"NAT Forwarding",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Servere Virtuale",
			PORT_TRIGGERING: 			"Declanșare port",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Setări USB",
			BASIC_SET: 					"Setări de bază",
			DISK_SET: 					"Setări Dispozitiv",
			FOLDER_SHARING: 			"Acces Partajare",
			STORAGE_SHARING: 			"Partajare mediu stocare",
			FTP_SERVER: 				"Server FTP",
			MEDIA_SERVER: 				"Server Media",
			PRINT_SERVER: 				"Print Server",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Control Parental",
			
			QOS:  						"QoS",
			DATABASE:  					"Bază de date",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Hartă",
			SB_MAP: 					"Hartă",
			SB_BANDWIDTH:  				"Lățime Bandă",
			SB_PRIORITY: 				"Prioritate",
			SB_STATISTICS: 				"Statistici",

			
			SECURITY: 					"Securitate",
			SETTINGS: 					"Setări",
			ACCESS_CONTROL: 			"Controlul Accesului",
			IP_MAC_BINDING: 			"Asociere IP&MAC",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Unelte Sistem",
			TIME_SETTINGS: 				"Setări oră",
			DIAGNOSTIC: 				"Diagnosticare",
			FIRMWARE_UPGRADE: 			"Actualizare Firmware",
			BACKUP_RESTORE: 			"Copie de siguranța și Restaurare",
			ADMINISTRATION: 			"Administrare",
			SYSTEM_LOG: 				"Jurnal Sistem",
			STATISTICS: 				"Statistici Trafic",
			SYSTEM_PARAMETERS: 			"Parametri Sistem",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"Server VPN",
			OPEN_VPN: 					"Open VPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"Conexiuni VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Regiune și Oră Locală",
			INTERNET_CONNECTION_TYPE: 	"Tipul Conexiunii la Internet",
			WIRELESS_SETTINGS: 			"Setări Wireless",
			SUMMARY: 					"Sumar",
			SETUP_COMPLETE: 			"Testează conexiunea la Internet",
			SETUP_COMPLETE_CLOUD: 			"Serviciul TP-Link Cloud",

			EXIT: 						"Ieșire",
			NEXT: 						"Următorul",
			SAVE: 						"Salvare",
			FINISH: 					"Terminare",
			OK: 						"OK",
			NONE: 						"Detectare eșuată.",

			REGION: 					"Regiune",
			TIME_ZONE: 					"Ora locală",

			AUTO_DETECT: 				"Detectare Automată",
			DYNAMIC_IP: 				"IP Dinamic",
			STATIC_IP: 					"IP Static",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Dacă nu sunteți sigur ce tip de conexiune la Internet utilizați, apăsați butonul \"Detectare Automată\" sau contactați furnizorul dumneavoastră de Internet (ISP) pentru asistență.",

			DYNAMIC_IP_INFO: 			"Dacă furnizorul Dumneavoastră de Internet permite accesul doar unei singure adrese MAC, va trebui să clonați acea Adresă MAC pentru a permite accesul la Internet și altor dispozitive. Dacă nu sunteți sigur, selectați NU clonați adresa MAC.",
			MAC_CLONE_NO: 				"NU clonați adresa MAC",
			MAC_CLONE_YES: 				"Clonați Adresa MAC a computerului conectat",
			MAC_CLONE_NOTE: 			"Dacă optați pentru clonarea adresei MAC, înainte de a apăsa butonul \"Următorul\", asigurați-vă că adresa MAC a computerului conectat este cea înregistrată în baza de date a furnizorului dumneavoastră de Internet.",

			PPPOE_INFO: 				"Vă rugăm să introduceți Utilizatorul si Parola pentru contul PPPoE.",
			
			STATIC_IP_INFO: 			"Vă rugăm să introduceți informațiile IP necesare.",

			L2TP_INFO: 					"Vă rugăm să introduceți Utilizatorul si Parola pentru contul L2TP.",
			PPTP_INFO: 					"Vă rugăm să introduceți Utilizatorul si Parola pentru contul PPTP.",
			
			USERNAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			SERVER_IP_ADDRESS_NAME: 	"IP Server VPN/Nume Domeniu",
			IP_ADDRESS: 				"Adresă IP",
			SUBNET_MASK: 				"Mască Subrețea",
			DEFAULT_GATEWAY: 			"Default Gateway",
			PRIMARY_DNS: 				"DNS Primar",
			SECOND_DNS: 				"DNS Secundar",
			OPTIONAL: 					"(Opțional)",
			
			ON: 						"Pornit",
			OFF: 						"Oprit",
			WIRELESS_24GHZ: 			"Wireless 2.4GHz",
			WIRELESS_5GHZ: 				"Wireless 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Activare Emisie WiFi",
			NAME_SSID: 					"Nume Rețea Wireless (SSID)",

			SUMMARY_INFO1: 				"Înainte de a apăsa butonul <strong>Următorul</strong> trebuie să reconectați dispozitivele WiFi la noua rețea wireless.",
			SUMMARY_INFO2: 				"Numele si Parola rețelei wireless s-au modificat astfel:",
			SUMMARY_INFO3: 				"Asigurați-vă că v-ați conectat la noua rețea wireless.",

			WIRELESS_24GHZ_SSID: 		"Nume rețea wireless 2.4GHz (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Parolă rețea wireless 2.4GHz",
			WIRELESS_5GHZ_SSID: 		"Nume rețea wireless 5GHz (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Parolă rețea wireless 5GHz",

			SORRY: 						"Eroare.",
			SUCCESS: 					"Succes!",
			TEST_INTERNET_SUCCESS_INFO: "Succes! Apăsați Terminare pentru a încheia procesul de configurare rapidă.",

			TEST_INTERNET_FAILED_INFO_0:"Vă rugăm să verificați dacă toți parametrii din \"Configurare rapidă\" sunt valizi. Dacă toți parametrii din \"Configurare rapidă\" sunt valizi, vă rugăm să reporniți modemul, așteptați două minute, apoi apăsați Testează conexiunea la Internet. Dacă nu folosiți un modem, vă recomandăm să contactați furnizorul de servicii Internet (ISP) pentru asistență.",
			TEST_INTERNET_FAILED_INFO_1: "Oops... Conexiunea la Internet nu a fost configurată cu succes.<br/>1. Asigurați-vă că toate cablurile sunt conectate corespunzător.<br/>2. Apăsați Înapoi și verificați dacă informațiile conexiunii la Internet sunt corecte.<br/>3. Contactați suportul tehnic oferit de noi dacă problema persistă.",
			SUMMARY_INFO4: 				"Ne pare rău! Am detectat ca nu ați reconectat dispozitivele WiFi la noua rețea wireless. Vă rugăm sa le reconectați și apoi apăsați <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Felicitări!",
			COMPLETE_INFO_0: 			"Ați completat procesul de Configurare Rapidă.",
			COMPLETE_INFO_1:			"Apăsați butonul Testează Conexiunea la Internet de mai jos, apoi apăsați butonul Finalizare.",
			COMPLETE_INFO_2: 			"Nu sunteți autentificat în contul TP-Link Cloud. Vă puteți autentifica mai târziu din Simplu > TP-Link Cloud.",
			TEST_INTERNET: 				"Testează conexiunea la Internet",

			
			RESET_USER_TITLE: 			"Creare utilizator nou si parolă nouă",
			NEW_USERNAME: 				"Utilizator Nou",
			NEW_PASSWORD: 				"Parolă nouă",
			CONFIRM_PASSWORD: 			"Confirmare Parolă Nouă",
			
			NO_ACCOUNT: 				"Nu ai ID TP-Link?",
			REGISTER_NOW: 				"Înregistrează-te acum",
			REGISTER_SKIP: 				"Autentifică-mă mai târziu",
			LOGIN: 						"Autentificare",
			REGISTER_NEW:				"Înregistrați un cont nou",
			COMPLETE_INFO_EMAIL_PREFIX: "ID-ul tău TP-Link este:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Vă recomandăm să vă autentificați folosind acest cont pentru o administrare facilă a dispozitivului și pentru alte funcții TP-Link Cloud.",

			INTERNET_OK: 				"Felicitări! Conexiunea a fost configurată cu succes. Navigare plăcută.",
			CLOUD_WIZARD: 				"Pentru mai multe funcții Cloud TP-Link, te rugăm să te autentifici cu <a class=\"link\" href=\"#\">ID-ul TP-Link</a>.",
			ACCOUNT_DESP:               "Cu ID TP-Link, poți:", 
			ACCOUNT_DESP_SUB1:          "Accesați dispozitivele și serverele locale (FTP, HTTP, etc.) de oriunde prin Internet",
			ACCOUNT_DESP_SUB2:          "Mențineți firmwareul actualizat cu ajutorul funcției Actualizare Online",
	        ACCOUNT_DESP_SUB3:          "Gestionați dispozitive multiple cu un singur cont",
			
			CONFIRM: 					"Confirmare"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Stare Internet",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Tipul Conexiunii",
			SECONDARY_CONN: 			"Conexiune Secundară",

			POOR_CONNECTED: 			"Conexiune slabă",
			UNPLUGGED: 					"Portul WAN este deconectat.",
			
			CONNECTED: 					"Conectat",
			DISCONNECTED: 				"Deconectat",

			INTERNET_IP_ADDR: 			"Adresă IP",
			
			IP_ADDR: 					"Adresă IP",
			MAC_ADDR: 					"Adresă MAC",
			GATEWAY: 					"Gateway",

			AUTO: 						"Automat",
			
			ROUTER: 					"Router",
			WIRELESS_CLIENTS: 			"Utilizatori Wireless",
			HOST_CLIENTS: 				"Clienți Gazdă",
			GUEST_CLIENTS: 				"Utilizatori tip Guest",
			WIRE_CLIENTS: 				"Utilizatori Rețea Cablu",
			PRINTER: 					"Imprimantă",
			USB_DISK: 					"Dispozitiv de Stocare USB",
			WIRELESS: 					"Wireless",
			NAME: 						"Nume",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Canal",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Wireless 2.4GHz",
			WIRELESS_5GHZ: 				"Wireless 5GHz",
			
			GUEST_24GHZ: 				"Guest Network 2.4GHz",
			GUEST_5GHZ: 				"Guest Network 5GHz",
			
			STATUS: 					"Stare",
			TOTAL: 						"Spațiu Total",
			AVAILABLE: 					"Spațiu Liber",
			GB: 						"GB",
			BRAND: 						"Marcă",

			DYNAMIC_IP: 				"IP Dinamic",
			STATIC_IP: 					"IP Static",
			SUBNET_MASK: 				"Mască Subrețea",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Tunel 6to4",
			NONE: 						"Niciuna"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Detectare Automată",
			INTERNET_CONN_TYPE: 		"Tipul Conexiunii la Internet",
			DYNAMIC_IP: 				"IP Dinamic",
			STATIC_IP: 					"IP Static",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"Portul WAN este deconectat.",
			NONE: 						"Niciuna",
			DETECT_FAIL: 				"Detectare Automată Eșuată",
			SECONDARY_CONN: 			"Conexiune Secundară",

			DYNAMIC_YES: 				"NU clonați adresa MAC",
			DYNAMIC_NO: 				"Clonați Adresa MAC a computerului conectat",
			
			IP_ADDR: 					"Adresă IP",
			SUBNET_MASK: 				"Mască Subrețea",
			DEFAULT_GATEWAY: 			"Default Gateway",
			PRIMARY_DNS: 				"DNS Primar",
			SECOND_DNS: 				"DNS Secundar",
			OPTIONAL: 					"(Opțional)",
			USER_NAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			SERVER_IP_ADDR_NAME: 		"IP Server VPN/Nume Domeniu",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Dacă nu sunteți sigur ce tip de conexiune la Internet utilizați, apăsați butonul \"Detectare Automată\" sau contactați furnizorul dumneavoastră de Internet (ISP) pentru asistență."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Setări Wireless",
			MODE_2G: 					"Wireless 2.4GHz",
			MODE_5G: 					"Wireless 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nume Rețea Wireless (SSID)",
			WIRELESS_PASSWORD: 			"Parolă",
			ENABLE_WIRELESS: 			"Activare Emisie WiFi",
			SAVE: 						"Salvare",
			ENCRYPTION_2G_NOTICE:		"Criptarea în banda de frecvență de 2.4GHz este %s.",
			ENCRYPTION_5G_NOTICE:		"Criptarea în banda de frecvență de 5GHz este %s.",
			ENCRYPTION_2G_NO: 			"Rețeaua 2.4GHz nu este criptată.",
			ENCRYPTION_5G_NO: 			"Rețeaua 5GHz nu este criptată.",
			ENCRYPTION_SURE: 			"Sunteți sigur că doriți să continuați?",

			HIDE_SSID: 					"Ascunde SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Setări de bază",
			TITIL_NEW:					"Cont și Dispozitiv Stocare",
			DISK_SET:					"Setări Dispozitiv",

			SELFLY_REMOVE:				"Deconectare în Siguranța",
			SCANING:					"Scanare...",
			SCAN_RESULT:				"%n dispozitive de stocare detectate",
			
			DISKS:						"Dispozitive Stocare",
			USERS: 						"Conturi Utilizator",
			DEVICENAME: 				"Nume Dispozitiv",
			VOLUMN: 					"Volum",

			USBSPACE: 					"Spațiu Utilizat",
			FREESPACE: 					"Spațiu Liber",
			STATUS: 					"Stare",
			INACT: 						"Dezactivați",
			USAGE: 						"Folosire",
			CAPACITY: 					"Capacitate",
			OPERATION: 					"Operațiune",
			
			ACC: 						"Administrare Conturi",
			USERNAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			USE_LOGIN: 					"Folosire utilizator autentificare",
			SCAN: 						"Scanare",
			ENJECT_ALL: 				"Deconectează Tot",
			ENJECT: 					"Deconectează",
			ADD_USER: 					"Adăugare Utilizator",
			AUTH: 						"Autoritate",


			LOCATION: 					"Locație",
			MOBILE_ISP: 				"ISP Mobil",
			DIAL_NUMBER: 				"Număr apelare",
			APN: 						"APN",
			USERNAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			MTU_SIZE: 					"Dimensiune MTU",
			OPTIONAL: 					"(Opțional)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Control Parental",

			DEVICE_CTR: 				"Dispozitive Sub Control Parental",
			ID: 						"ID",
			DEVICE: 					"Nume Dispozitiv",
			MAC_ADDRESS: 				"Adresă MAC",
			TIME: 						"Perioadă Acces Internet",
			DESCRIPTION: 				"Descriere",
			ENABLE: 					"Activare",
			ENABLE_THIS_ENTRY: 			"Activare",
			OPTIONAL: 					"(Opțional)",
			BTN_VIEW: 					"Vizualizare Dispozitive Existente",
			ACCESS_DEVICES_LIST: 		"Listă Acces Dispozitive",
			OPT: 						"Operațiune",
			STATUS: 					"Stare"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Guest Network 2.4GHz/5GHz",
			MODE_2G: 					"Wireless 2.4GHz",
			MODE_5G: 					"Wireless 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nume Rețea Wireless (SSID)",
			WIRELESS_PASSWORD: 			"Parolă",
			ENABLE_WIRELESS: 			"Activare Guest Network",
			SAVE:						"Salvare",
			HIDE_SSID: 					"Ascunde SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Cont Cloud",
			OFFLINE_NOTE_TITLE: 		"Dispozitivul este offline.",
			LOGIN_NOTE_TITLE: 			"Oops..",
			LOGIN_OFFLINE_NOTE: 		"Dispozitivul este offline. Vă rugăm să verificați configurația WAN și a rețelei pentru a vă asigura că setările corespunzătoare sunt introduse corect.",

			EMAIL: 						"Email",
			PASSWORD: 					"Parolă",
			FORGET_PASSWORD: 			"Ați uitat parola?",

			CLOUD_WIZARD: 				"Pentru mai multe funcții Cloud TP-Link, te rugăm să te autentifici cu <a class=\"link\" href=\"#\">ID-ul TP-Link</a>.",
			NO_ACCOUNT: 				"Nu ai ID TP-Link?",
			REGISTER_NOW: 				"Înregistrează-te acum"
		},
		STATUS: {
			TITLE: 						"Stare",
			INTERNET:					"Internet",
			WIRELESS:					"Wireless",
			LAN:						"LAN",
			USB_TITLE:					"Dispozitive USB",
			PERFORMANCE: 				"Performanță",
			GUEST_NETWORK: 				"Guest Network 2.4GHz/5GHz",
			ACCESS_DEVICES: 			"Dispozitive Acces",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Tipul Conexiunii",

			MAC_ADDRESS: 				"Adresă MAC",
			IP_ADDRESS: 				"Adresă IP",
			RELEASE: 					"Eliberare",
			RENEW: 						"Reînnoire",
			
			DYNAMIC_IP: 				"IP Dinamic",
			STATIC_IP: 					"IP Static",
			SUBNET_MASK: 				"Mască Subrețea",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Tunel 6to4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass-Through (Bridge)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Niciuna",
			
			DEFAULT_GATEWAY: 			"Default Gateway",
			DNS: 						"Server DNS",
			MAC: 						"Adresă MAC",
			WDS_STATUS: 				"Stare WDS",
			
			IPV6_ADDRESS: 				"Adresă IP",
			PRIMARY_DNS: 				"DNS Primar",
			SECOND_DNS: 				"DNS Secundar",

			RADIO: 						"Emisie Wireless",

			NAME_SSID: 					"Nume (SSID)",
			NETWORK_NAME_SSID:			"Nume Rețea Wireless (SSID)",
			HIDE_SSID: 					"Ascunde SSID",
			MODE: 						"Mod",
			CHANNEL: 					"Canal",
			CHANNEL_WIDTH: 				"Lățime Canal",
			AUTO: 						"Automat",
			CURRENT_CHANNEL: 			"Canal curent",

			WDS: 						"Stare WDS",
			WIRED_CLIENTS: 				"Utilizatori Rețea Cablu",
			WIRELESS_CLIENTS: 			"Utilizatori Wireless",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Adresă Link-local",
			ASSIGN_TYPE: 				"Mod de alocare",

			ALLOW_TO_SEE_EACH: 			"Permite comunicarea între clienți",

			TOTAL: 						"Spațiu Total:",
			AVAILABLE: 					"Spațiu Liber:",

			USB: 						"Dispozitiv de Stocare USB",
			PRINTER: 					"Imprimantă",

			CPU_LOAD: 					"Încărcare Procesor",
			MEMORY_USAGE: 				"Utilizare Memorie",

			IP_ADDR_P: 					"Adresă IP",
			MAC_ADDR_P: 				"Adresă MAC",
			CONN_TYPE_P: 				"Tipul Conexiunii",

			DISABLED: 					"Dezactivat",
			INIT: 						"Init",
			SCAN: 						"Scanare",
			AUTH: 						"Auth",
			ASSOC: 						"Assoc",
			RUN: 						"Run",
			HOST: 						"Host",
			GUEST: 						"Guest",

			ON: 						"Pornit",
			OFF: 						"Oprit"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Tipul Conexiunii la Internet",
			INTERNET_MAC_ADDRESS: 		"Adresă MAC",
			
			CONNECT: 					"Conectare",
			DISCONNECT: 				"Deconectare",
			
			IP_ADDR: 					"Adresă IP",
			
			USE_DEFAULT_MAC: 			"Utilizează adresa MAC implicită",
			USE_COMPUTER_MAC: 			"Utilizează adresa MAC a computerului dumneavoastră",
			USE_CUSTOM_MAC: 			"Utilizează o adresă MAC personalizată",
			MAC_CLONE: 					"Clonare MAC",
			
			CONFIG: 					"Configurație",
			
			IP_ADDRESS: 				"Adresă IP",
			SUBNET_MASK: 				"Mască Subrețea",
			DEFAULT_GATEWAY: 			"Default Gateway",
			
			MANUAL_DNS: 				"DNS Manual",
			PRIMARY_DNS: 				"DNS Primar",
			SECOND_DNS: 				"DNS Secundar",
			
			RENEW: 						"Reînnoire",
			RELEASE: 					"Eliberare",
			VIEW_MODE: 					"Mod vizualizare",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Obține automat de la  ISP",
			USE_FOLLOW_IP_ADDR: 		"Folosește următoarea adresă IP",
			USE_FOLLOW_DNS_ADDR: 		"Folosește următoarele adrese DNS",
			USE_FOLLOW_DNS_SERVER: 		"Folosește următorul server DNS",
			
			BASIC: 						"Simplu",
			ADVANCED: 					"Avansat",
			
			DNS_ADDR_MODE: 				"Adresă DNS",
			MTU_SIZE: 					"Dimensiune MTU",
			MTU_1500: 					"bytes. (Valoarea implicită este 1500, nu schimbați decât dacă este necesar.)",
			MTU_1480: 					"bytes. (Valoarea implicită este 1480, nu schimbați decât dacă este necesar.)",
			MTU_1460: 					"bytes. (Valoarea implicită este 1460, nu schimbați decât dacă este necesar.)",
			MTU_1420: 					"bytes. (Valoarea implicită este 1420, nu schimbați decât dacă este necesar.)",
			
			HOST_NAME: 					"Nume Gazdă",

			HOST_NAME_CONFIRM: 			"Numele Host-ului conține caractere nepermise care pot determina un comportament neașteptat al sistemului. Sigur doriți să continuați?",

			GET_IP_WITH_UNICAST_DHCP: 	"Obține IP folosind Unicast DHCP (În general nu este necesar.)",
			OPTIONAL: 					"(Opțional)",
			
			STATIC_IP: 					"IP Static",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			
			INTERNET_IP_ADDR: 			"Adresă IP",
			INTERNET_DNS: 				"DNS Internet",
			SECONDARY_CONN: 			"Conexiune Secundară",
			NONE: 						"Niciuna",
			INTERNET_PRIMARY_DNS:		"DNS Primar",
			INTERNET_SECONDARY_DNS: 	"DNS Secundar",
			
			DYNAMIC_IP: 				"IP Dinamic",
			DYNAMIC_IP_v6: 				"IP dinamic (SLAAC/DHCPv6)",
			STATIC_IP: 					"IP Static",
			SERVICE_NAME: 				"Nume Serviciu",
			ACCESS_CONCENTRATOR_NAME:  	"Nume Concentrator de Acces",
			DETECT_ONLINE_INTERVAL: 	"Detectare Interval Online",
			INTERVAL_TIPS: 				"secunde. (0-120. Implicit este 10)",
			IP_ADDR_MODE:  				"Adresă IP",
			CONN_MODE: 					"Mod de Conectare",
			DHCP_LINK_UNPLUGGED: 		"Portul WAN este deconectat.",
			
			AUTO: 						"Automat",
			ON_DEMAND: 					"La Cerere",
			TIME_BASED: 				"Programat",
			MANUALLY: 					"Manual",
			MAX_IDLE_TIME: 				"Timp maxim de inactivitate",
			MAX_IDLE_TIME_TIPS: 		"minute. (0 reprezintă mereu activ.)",
			PERIOD_OF_TIME: 			"Perioada de timp",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"BigPond Cable",
			AUTH_SERVER: 				"Server Autentificare",
			AUTH_DOMAIN: 				"Domeniu Autentificare",
			L2TP: 						"L2TP",
			GATEWAY: 					"Gateway",
			SERVER_IP_ADDR_NAME: 		"IP Server VPN/Nume Domeniu",
			PPTP: 						"PPTP",
			TO: 						"până la",
			
			TUNNEL_6TO4: 				"Tunel 6to4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Obține adresă IPv6 non-temporară",
			GET_PREFIX_DELEGATION: 		"Obține delegare prefix IPv6",
			IPV6_ADDR: 					"Adresă IPv6",

			GET_IPV6_WAY: 				"Obține Adresa IPv6",
			AUTOMATICALLY: 				"Obține automat",
			SPECIFIED_BY_ISP: 			"Specificată de ISP",

			IPV6_ADDR_PREFIX: 			"Prefix adresă IPv6",
			NONE_TEMPORARY: 			"Non-Temporar",

			PREFIX_DELEGATION: 			"Delegare prefix",
			ENABLE: 					"Activare",
			DISABLE: 					"Dezactivare",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Lungime mască IPv4",
			CONFIG_TYPE: 				"Tip Configurare",
			RD6_PREFIX: 				"Prefix 6RD",
			RD6_PREFIX_LENGTH: 			"Lungime Prefix 6RD",
			REPLY_IPV4_ADDR: 			"Adresă IPv4 Border Relay",
			MANUAL: 					"Manual",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass-Through (Bridge)",
			LOCAL_IPV6: 				"Local IPv6 Address",
			PEER_IPV6: 					"Peer IPv6 Address",
			TUNNEL_ADDR: 				"Adresă tunel",
			IPV4_NETMASK: 				"IPv4 Netmask",
			CUSTOM: 					"Personalizat",
		    AFTR_NAME: 					"Nume AFTR",
			PPP_SHARE_V6:				"PPPoE aceeași sesiune cu conexiune IPv4",
			PPP_SHARE_V4:				"PPPoE aceeași sesiune cu conexiune IPv6",

			
			
			IPV4_ADDR: 					"Adresă IPv4",
			IPV4_MASK: 					"Subnet Mask IPv4",
			IPV4_GATEWAY: 				"Default Gateway IPv4",
			TUNNEL_ADDR: 				"Adresă tunel",

			DUPLEX: 					"Duplex",
			AUTO_NEGOTIATION: 			"Auto Negociere",
			FULL_DUPLEX_1000: 			"1000Mbps full duplex",
			HALF_DUPLEX_1000:			"1000Mbps half duplex",
			FULL_DUPLEX_100: 			"100Mbps full duplex",
			HALF_DUPLEX_100: 			"100Mbps half duplex",
			FULL_DUPLEX_10: 			"10Mbps full duplex",
			HALF_DUPLEX_10: 			"10Mbps half duplex"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"Adresă MAC",
			IP_ADDRESS: 				"Adresă IP",
			SUBNET_MASK: 				"Mască Subrețea",
			CUSTOM: 					"Personalizat",

			IGMP: 						"Activare IGMP Proxy",
			

			ASSIGNED_TYPE: 				"Mod de alocare",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Stateless DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Prefix Adresă",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Adresă",
			DELEFATED: 					"Delegat",
			STATIC: 					"Static",
			SITE_PREFIX: 				"Prefix site",
			SITE_PREFIX_LEN: 			"Lungime Prefix Site",

			PREFIX_TYPE:  				"Tip configurare Prefix Site",
			LAN_IPV6_ADDR:  			"Adreă LAN IPV6",

			RELEASE_TIME: 				"Timp Eliberare",
			RELEASE_TIME_TIP: 			"secunde. (Valoarea implicită este 86400, nu schimbați decât dacă este necesar.)",
			ADDRESS:					"Adresă",
			SAVE: 						"Salvare",

			REBOOT_TIP: 				"Incărcare pagină configurare nouă. <br/> Vă rugăm să așteptați..."

		},

		IPTV:{
			TITLE: 						"Setări",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Activează  IPTV", 
			MODE:  						"Mod",
			IGMP_PROXY: 				"IGMP Proxy",
			IGMP_VERSION: 				"Versiune IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Bridge",
			BASIC: 						"Personalizat",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Singapore-ExStream",
			UNIFY:  					"Malaysia-Unifi",
			MAXIS:  					"Malaysia-Maxis",
			MEO:						"Portugalia-MEO",
	   		VDF:						"Portugalia-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internet",
			IP_PHONE: 					"Telefon-IP", 

			Q_TAG: 						"802.1Q Tag",
			ENABLE: 					"Activare",
			
			INTERNET_VLAN_ID: 			"ID VLAN Internet",
			INTERNET_VLAN_PRIORITY: 	"Prioritate VLAN Internet",
			IP_PHONE_VLAN_ID: 			"ID VLAN Telefon-IP",
			IP_PHONE_VLAN_PRIORITY: 	"Prioritate VLAN Telefon-IP",
			IPTV_VLAN_ID: 				"ID VLAN IPTV",
			IPTV_VLAN_PRIORITY: 		"Prioritate VLAN IPTV",
			IPTV_MULTI_VLAN_ID: 		"ID VLAN IPTV Multicast",
			IPTV_MULTI_VLAN_PRIORITY: 	"Prioritate VLAN IPTV Multicast"
		},

		DHCP_SERVER: {
			TITLE: 						"Server DHCP",
			
			SETTINGS: 					"Setări",

			DHCP_SERVER: 				"Server DHCP",
			ENABLE_DHCP_SERVER: 		"Activare Server DHCP",

			IP_ADDR_POOL: 				"Interval Adrese IP",
			LEASETIME: 					"Durată alocare adresă IP",
			LEASENOTE: 					"minute. (1-2880. Valoarea implicită este 120.)",
			
			GATEWAY: 					"Default Gateway",
			DOMAIN: 					"Domeniu Implicit",
			PRIMARYDNS: 				"DNS Primar",
			SECONDARYDNS: 				"DNS Secundar",

			OPTIONAL: 					"(Opțional)",

			CLIENTSLIST: 				"Listă Clienți DHCP",
			CLIENT_NUMBER: 				"Număr Clienți",
			CLIENT_NAME: 				"Nume Client",
			MAC_ADDR: 					"Adresă MAC",
			ASSIGNED_IP: 				"Adresă IP Alocată",
			LEASE_TIME: 				"Timp Alocare",

			RESERVATION: 				"Rezervare Adrese IP",

			RESERVED_IP: 				"Adresă IP Rezervată",
			IP_ADDRESS: 				"Adresă IP",
			DESCRIPTION: 				"Descriere",

			CLIENTSLIST: 				"Listă Clienți DHCP",
			CLIENT_NUMBER: 				"Număr Clienți",

			ENABLE: 					"Activare",
			ENABLE_THIS_ENTRY: 			"Activare"
			
		},

		DDNS: {
			DDNS: 						"DNS Dinamic",
			SERVICEPROVIDER: 			"Furnizor Serviciu",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Înregistrare…",
			USERNAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			DOMAIN_NAME_LIST: 			"Listă Nume Domeniu",
			DOMAIN_NAME: 				"Nume Domeniu",
			LOGIN: 						"Autentificare",
			LOGIN_SAVE: 				"Autentificare și Salvare", 
			LOGOUT: 					"Deconectare",
			STATU_SUCCESS:				"Succes!",
			UPDATE_INTERVAL:			"Interval Actualizare",
			ONE_HOUR:					"O oră",
			SIX_HOUR:					"6 ore",
			TWETEEN_HOUR:				"12 ore",
			ONE_DAY:					"O zi",
			TWO_DAY:					"2 zile",
			THREE_DAY:					"3 zile",
			NEVER:						"Niciodată",
			UPDATE:						"Actualizare",
			STATU_INCORRENT:			"Nume de utilizator sau parolă incorectă.",
			STATU_ERR_DOMAIN:			"Eroare nume domeniu",
			WAN_IP_BIND: 				"Asociere WAN IP",
			CURRENT_DOMAIN: 			"Nume de Domeniu Actual",
			REGISTER: 					"Înregistrare",
			BIND: 						"Asociază",
			UNBIND: 					"Dezasociere",
			TITLE: 						"DDNS Indisponibil",
			CONTENT: 					"Pentru a utiliza serviciul nostru avansat TP-Link DDNS, te rugăm să te  <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">Autentifici</a> cu ID-ul tău TP-Link, sau alege un alt furnizor de servicii DDNS.",
			STATU_NO_LAUNCH:			"Nu se lansează",
			STATU_FAIL_DDNS: 			"Eroare actualizare DDNS.",
			STATU_FAIL_NOIP: 			"Eroare actualizare NO-IP.",
			DISABLE: 					"Dezactivare",
			ENABLE: 					"Activare",	
			STATU_NO_LAUNCH:			"Eroare actualizare DDNS.",
			STATU_CONN:					"Conectare",
			WAN_IP_BIND: 				"Asociere WAN IP",
			TIME: 						"Dată înregistrare",
			BOUND: 						"Asociat",
			FREE: 						"Gratuit",
			SORRY: 						"Eroare.",
			UNBIND_NOTE:          		"Dacă doriți să asociați %domain% cu dispozitivul dumneavoastră, vă rugăm să dezasociați mai întâi numele de domeniu actual."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Rutare Avansată",
			STATIC_ROUTING: 			"Rutare Statică",

			DESTINATION_NETWORK:		"Rețea Destinație",
			SUBNET_MASK: 				"Mască Subrețea",
			DEFAULT_GATEWAY: 			"Default Gateway",
			DESCRIPTION: 				"Descriere",
			
			SYSTEM_ROUTING_TABLE: 		"Tabela de Rutare a Sistemului",
			CLIENT_NUMBER: 				"Număr rute active",

			GATEWAY: 					"Gateway",
			INTERFACE: 					"Interfața",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Activare",
			ENABLE_THIS_ENTRY: 			"Activare"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Setări",
			NOT_SUPPORT_5G: 			"În regiunea selectată puteți folosi doar banda de 2.4GHz. Asigurați-vă că ați selectat corect regiunea.",

			REGION: 					"Regiune",
			NOTICE:  					"Pentru a utiliza funcția wireless, butonul wireless trebuie sa fie in poziția Pornit.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Setări Wireless",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Activare Emisie WiFi",

			WIRELESS_NETWORK_NAME: 		"Nume Rețea Wireless (SSID)",
			WIRELESS_PASSWORD: 			"Parolă",
			HIDE_SSID: 					"Ascunde SSID",

			SECURITY: 					"Securitate",
			NO_SECURITY: 				"Fără Securitate",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - Personal (Recomandat)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Versiune",

			AUTO: 						"Automat",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Criptare",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Mod",
			MODE_B:  					"802.11b only",
			MODE_G:  					"802.11g only",
			MODE_N:  					"802.11n only",
			MODE_BG:  					"802.11b/g mixed",
			MODE_GN: 					"802.11g/n mixed",
			MODE_BGN:  					"802.11b/g/n mixed",

			MODE_A_5: 					"802.11a only",
			MODE_AN_5: 					"802.11a/n mixed",
			MODE_N_5: 					"802.11n only",
			MODE_AC_5:					"802.11ac only",
			MODE_NAC_5:					"802.11n/ac mixed",
			MODE_ANAC_5:				"802.11a/n/ac mixed",


			CHANNEL_WIDTH: 				"Lățime Canal",
			CHANNEL: 					"Canal",

			TRANSMIT_POWER: 			"Putere Transmisie",

			RADIUS_SERVER_IP: 			"IP Server RADIUS",
			RADIUS_PORT: 				"Port RADIUS",
			RADIUS_PASSWORD: 			"Parolă RADIUS",

			TYPE: 						"Tip",
			OPEN_SYSTEM: 				"Open System",
			SHARED_KEY: 				"Shared Key",

			KEY_SELECTED: 				"Cheie Selectată",
			KEY1: 						"Cheia1",
			KEY2: 						"Cheia2",
			KEY3: 						"Cheia3",
			KEY4: 						"Cheia4",

			WEP_KEY_FORMAT: 			"Format cheie WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimal",

			KEY_TYPE: 					"Tip cheie",
			BIT64: 						"64-bit",
			BIT128: 					"128-bit",
			BIT152: 					"152-bit",

			KEY_VALUE: 					"Valoare cheie",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Scăzută",
			MIDDLE: 					"Medie",
			HIGH: 						"Ridicată"
		},

		WPS: {

			TITLE2: 					"PIN Router",
			ROUTERS_PIN_INFO: 			"Alte dispozitive se pot conecta la router folosind codul PIN al acestuia.",
			ENABLE_ROUTE_PIN: 			"PIN Router",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Generează",
			DFT: 						"Implicit",

			TITLE: 						"Configurare WPS",
			SELECT_SETUP: 				"Selectează o metodă de conectare",
			PUSH_BTN: 					"Push Button (Recomandat)",
			PUSH_DES: 					"Apasă butonul fizic \"Push Button\" de pe router sau apasă butonul virtual \"Conectare\" de pe această pagină.",
			CONNECT: 					"Conectare",
			CANCEL: 					"Revocare",

			RESULT_HEAD: 				"Clientul wireless",
			RESULT_END: 				"a fost adăugat cu succes în rețea.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Nu a fost găsit",
			ENTER_CLIENT_PIN: 			"Introduceți PIN-ul clientului",
			SWITCH_NOTE:				"Pentru a utiliza WPS, trebuie să porniți mai întâi funcția wireless.",
			SWITCH_NOTE2:				"Pentru a utiliza WPS, trebuie să configurați mai întâi parametrii wireless.",
			STATUS_PIN_ERROR: 			"PIN WPS incorect? Vă rugăm să verificați dacă este corect.",
			STATUS_ERROR: 				"Eroare.",
			STATUS_CONN_ERROR: 			"Conexiunea a eșuat.",
			STATUS_CONNING: 			"Se conectează ...",
			STATUS_CANCEL: 				"Conexiune anulată.",
			
			NOTE: 						"Notă:",
			
			STATUS_CONN_OVERLAP: 		"Conexiunea a eșuat(OVERLAP).",
			STATUS_CONN_TIMEOUT: 		"Conexiunea a eșuat(TIMEOUT).",
			STATUS_CONN_INACT: 			"Conexiune inactivă."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Terminale Wireless  Active",
			CLIENT_NUMBER: 				"Număr Clienți",
			MAC_ADDRESS: 				"Adresă MAC",
			CONN_TYPE: 					"Tipul Conexiunii",
			SECURITY: 					"Securitate",
			RECEIVED_PACKETS: 			"Pachete Primite",
			SEND_PACKETS: 				"Pachete Trimise"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Setări",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Permite comunicarea între clienți",
			
			ALLOW_LOCAL: 				"Permite clienților tip Guest accesul în rețeaua locală",
			
			WIRELESS: 					"Wireless",
			WIRELESS_24G_RADIO: 		"Wireless 2.4GHz",
			WIRELESS_5G_RADIO: 			"Wireless 5GHz",
			ENABLE_GUEST: 				"Activare Guest Network",

			NAME_SSID: 					"Nume Rețea Wireless (SSID)",
			HIDE_SSID: 					"Ascunde SSID",

			SECURITY: 					"Securitate",
			NO_SECURITY: 				"Fără Securitate",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal",

			VERSION: 					"Versiune",
			AUTO: 						"Automat",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Criptare",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Parolă"
		},

		NAT:{
			SETTINGS: 					"NAT Hardware",
			STATUS: 					"NAT Hardware",
			
			ALG_TITLE: 					"Application Layer Gateway(ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP Passthrough",
			L2TP_ALG: 					"L2TP Passthrough",
			IPSEC_ALG: 					"IPSec Passthrough",

			ENABLE_FTP_ALG: 			"Activează FTP ALG",
			ENABLE_TFTP_ALG: 			"Activează TFTP ALG",
			ENABLE_H323_ALG: 			"Activează H323 ALG",
			ENABLE_RTSP_ALG: 			"Activează RTSP ALG",
			ENABLE_PPTP_ALG: 			"Activează PPTP Passthrough",
			ENABLE_L2TP_ALG: 			"Activează L2TP Passthrough",
			ENABLE_IPSEC_ALG: 			"Activează IPSec Passthrough",
			NAT_ENABLE_NOTICE: 			"Notă: Configurația nu va avea efect până când funcția NAT nu este activată."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Servere Virtuale",

			SERVICE_NAME: 				"Tip Serviciu",
			EXTERNAL_PORT: 				"Port Extern",
			INTERNAL_IP: 				"IP Intern",
			INTERNAL_PORT: 				"Port Intern",
			PROTOCAL: 					"Protocol",

			BTN_VIEW: 					"Vizualizați Serviciile Existente",

			EXSITTING_SERVICE: 			"Servicii Existente",
			
			PROTOCAL_ALL: 				"TOATE",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX sau XX)",
			EXT_PORT_TIPS: 				"(XX sau XX-XX, 1-65535)",
			INT_PORT_TIPS: 				"(XX sau necompletat, 1-65535)",

			NOTICE:						"În conflict cu portul pentru management de la distanță. Sigur doriți să continuați?",

			ENABLE_THIS_ENTRY: 			"Activare",
			OPERATION: 					"Operațiune",
			CHOOSE: 					"Alege",
			NAT_ENABLE_NOTICE: 			"Notă: Configurația nu va avea efect până când funcția NAT nu este activată."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Declanșare port",
			APPLICATION: 				"Aplicație",
			TRIGGER_PORT: 				"Port Declanșator",
			TRIGGER_PROTOCOL: 			"Protocol Declanșator",

			EXTERNAL_PORTS: 			"Port Extern",
			EXTERNAL_PROTOCOL: 			"Protocol Extern",

			BTN_VIEW: 					"Vizualizați Aplicațiile Existente",

			EXSITTING_APPLICATION: 		"Aplicații Existente",
			APPLICATION_NAME: 			"Nume Aplicație",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX or XX-XX,1-65535,cel mult 5 perechi)",
			
			ENABLE_THIS_ENTRY: 			"Activare",
			OPERATION: 					"Operațiune",
			
			PROTOCAL_ALL: 				"TOATE",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Notă: Configurația nu va avea efect până când funcția NAT nu este activată."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Activare DMZ",
			HARDWARESTATUS: 			"Adresa IP a gazdei DMZ",
			NAT_ENABLE_NOTICE: 			"Notă: Configurația nu va avea efect până când funcția NAT nu este activată."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Listă Servicii UPnP",
			CLIENT_NUMBER: 				"Număr Clienți",
			SERVICE: 					"Descriere Serviciu",
			EXTERNAL_PORT: 				"Port Extern",
			PROTOCAL: 					"Protocol",
			IP_ADDR: 					"Adresa IP internă",
			INTERNAL_PORT: 				"Port Intern",
			NAT_ENABLE_NOTICE: 			"Notă: Configurația nu va avea efect până când funcția NAT nu este activată."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"Modem USB 3G/4G",
			LOCATION: 					"Regiune",
			MOBILE_ISP: 				"ISP Mobil",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Mod de Conectare",
			CONNECT_ON_DEMAND: 			"Conectare la cerere",
			CONNECT_AUTOMATICALLY: 		"Conectare automată",
			CONNECT_MANUALLY: 			"Conectare manuală",
			MAX_IDLE_TIME: 				"Timp maxim de inactivitate",
			CONNECTION_TIP: 			"Modalitatea actuală de acces la Internet este WAN Preferred.",
			IDLE_TIME_TIP: 				"Modalitatea de conectare și Timpul maxim de inactivitate nu pot fi setate manual.",
			MINUTES: 					"minute. (0 înseamnă conexiune activată permanent.)",

			AUTHENTICATION_TYPE: 		"Tip Autentificare",
			AUTO: 						"Automat",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"Implicit este Auto, nu schimbați decât dacă este necesar.",

			CONNECT: 					"Conectare",
			DISCONNECT: 				"Deconectare",

			SET_TIP: 					"Setați Dial Number, APN, Nume și Parola manual.",
			DIAL_NUMBER: 				"Număr apelare",
			APN: 						"APN",
			USERNAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			OPTIONAL: 					"(Opțional)",
			MTU_SIZE: 					"Dimensiune MTU",
			MTU_SIZE_TIP: 				"Valoarea implicită este 1480, nu schimbați decât dacă este necesar",

			USE_FOLLOW_DNS_SERVER: 		"Folosește următoarele servere DNS",
			PRIMARY_DNS: 				"DNS Primar",
			SECOND_DNS: 				"DNS Secundar",

			UNPLUGGED: 					"Niciun modem USB conectat",
			IDENTIFYING: 				"Identificare...",
			IDENTIFY_SUCCESS: 			"Identificat cu succes"
		},

		DISK_SETTING: {
			DISK_SET: 					"Setări Dispozitiv",
			SCAN: 						"Scanare",
			SELFLY_REMOVE: 				"Deconectare în Siguranța",
			SCAN_RESULT: 				"%n dispozitive de stocare detectate",
			NOT_FOUND: 					"Nu a fost găsit",
			SELFLY_REMOVE: 				"Deconectare în Siguranța",
			
			VOLUMN: 					"Volum",
			CAPACITY: 					"Capacitate",
			FREESPACE: 					"Spațiu Liber",
			USBSPACE: 					"Spațiu Utilizat",
			
			STATUS: 					"Stare",
			INACT: 						"Dezactivați",
			ACTIVE: 					"Activ",
			
			USAGE: 						"Folosire",
			CAPACITY: 					"Capacitate",
			OPERATION: 					"Operațiune",	
			
			ACC: 						"Administrare Conturi", 	 	
			USERNAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			USE_LOGIN: 					"Folosire utilizator autentificare",
			SCAN: 						"Scanare",
			ENJECT_ALL: 				"Deconectează Tot",
			ENJECT: 					"Deconectează",
			ADD_USER: 					"Adăugare Utilizator",
			AUTH: 						"Autoritate"
		},

		FOLDER: {
			TITLE: 						"Setări Partajare",
			ACCOUNT_TITLE: 				"Cont Partajare",
			ACCOUNT:					"Cont",
			AC_NOTE: 					"Pregătire cont pentru partajare de conținut. Se poate folosi contul de autentificare pe router sau se poate crea unul nou.",
			
			AC_LOGIN: 					"Folosire cont implicit",
			AC_FOLLOW: 					"Folosire cont nou",

			USERNAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",
			CONFIRM: 					"Confirmare parolă",

			SHARING_SETTING: 			"Setări Partajare",
			SERVER_NAME: 				"Nume Server Rețea/Media",

			METHOD: 					"Modalitate Acces",
			LINK: 						"Cale",
			PORT: 						"Port",

			NETWORK_NEIGHBORHOOD: 		"Rețea Locală",
			FTP: 						"FTP",
			FTPEX: 						"FTP (Via Internet)",

			SHARE_FOLDER: 				"Partajare Fișiere",
			SHAREING_ALL: 				"Partajare Completă",
			NOTE:  						"Selectați Pornit pentru a partaja toate fișierele dispozitivului de stocare USB sau păstrați Oprit pentru a partaja doar fișierele selectate.", 
			ENABLE_AUTHENTICATION: 		"Activare Autentificare",
			SHAREING_FOLDER: 			"Fișiere Partajate",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Cale Fișier",
			VOLUMN_NAME: 				"Nume Volum Stocare",

			SHARE_NAME: 				"Nume Fișier",
			FOLDER_PATH: 				"Cale Fișier",
			MEDIA_SHARING: 				"Partajare Media",
			STATUS: 					"Stare",

			GUEST_ACCESS: 				"Permite Acces Guest Network",
			ENABLE_AUTHENTICATION: 		"Activare Autentificare",
			ENABLE_WRITE_ACCESS: 		"Permite Editare",
			ENABLE_MEDIA_SHARE: 		"Activare Partajare Media",
			
			BROWSE: 					"Căutare",
			BROWSE_TITLE: 				"Selectați un fișier",

			NO_VOLUMN:					"Niciun Volum",
			
			NOTICE: 					"Sigur doriți să părăsiți pagina actuală pentru pagina Dynamic DNS? Apăsați butonul Salvare pentru a salva și părăsi pagina actuală. Apăsați butonul Părăsire pentru a părăsi pagina actuală fără salvare. Apăsați Revocare pentru a rămâne.",
			NO_CHANGE_NOTICE: 			"Sigur doriți să părăsiți pagina actuală pentru pagina Dynamic DNS?",

			SAVE_FAILED_NOTICE: 		"Salvare eșuată",
			CONTINUE: 					"Părăsire",
			CONTINUE_SAVE: 				"Salvare",
			CANCLE: 					"Revocare",

			ENABLE: 					"Activare"

		},

		PRINT:{
			TITLE: 						"Print Server",
			NAME: 						"Nume Imprimantă",
			ENABLE_PRINT_SERVER: 		"Print Server",
			NONE: 						"Niciuna",
			
			NOTE_TITLE: 				"Notă:",
			STEP1: 						"Pasul1:",
			STEP2: 						"Pasul2:",
			STEP3: 						"Pasul3:",

			NOTE1: 						"Instalați driverul imprimantei pe computerul dumneavoastră.",
			NOTE2: 						"Conectați imprimanta la portul USB al routerului prin intermediul unui cablu USB.",
			NOTE3: 						"Instalați aplicația TP-Link USB Printer Controller Utility. Vă rugăm să o descărcați de pe site-ul nostru oficial: <a class=\"link\" href=\"%SUPPORT%\" target=\"blank\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Control Parental",
			STATUS: 					"Stare",
			UNKNOWN: 					"Necunoscut",

			DEVICE_CTR: 				"Dispozitive Sub Control Parental",
			DEVICE: 					"Nume Dispozitiv",
			MAC_ADDRESS: 				"Adresă MAC",
			TIME: 						"Perioadă Acces Internet",
			DESCRIPTION: 				"Descriere",
			
			ENABLE_THIS_ENTRY: 			"Activare",
			OPTIONAL: 					"(Opțional)",
			BTN_VIEW: 					"Vizualizare Dispozitive Existente",
			
			DEVICE_LIST: 				"Listă Acces Dispozitive",
			SYSTEM_TIME: 				"Ora Sistemului",
			
			RESTR: 						"Restricții Conținut",
			MODE: 						"Restricție",
			BLACKMODE: 					"Listă Interziceri",
			WHITEMODE: 					"Listă Permisiuni",
			ACCESS_DEVICES_LIST: 		"Listă Acces Dispozitive",
			
			CHOOSE: 					"Alege",
			ADD_A_NEW_KEYWORD: 			"Adaugă un cuvânt-cheie nou",
			ADD_A_NEW_DOMAIN_NAME: 		"Adaugă Nume Domeniu Nou"
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
			OTHERS: 					"Altele",

			DEVICE: 					"Dispozitiv",
			RATE: 						"Rată",
			APPLICATION: 				"Aplicație",

			NAME: 						"Nume",
			MAC_ADDRESS: 				"Adresă MAC",
			IP_ADDRESS: 				"Adresă IP",


			DEVICES: 					"Dispozitive"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Lățime Bandă",
			TEST_BANDWIDTH: 			">Testare Lățime Bandă",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Activare streamboost",
			UP_LIMITATION: 				"Limită Upload(Mbps)",
			DOWN_LIMITATION: 			"Limită Download(Mbps)",
			RUN_BANDWIDTH_TEST: 		"Efectuează Test Bandwidth",
			TESTING: 					"Testare",
			TEST_FAILED: 				"Testare Eșuată",
			TEST_SUCCEED: 				"Testare Reușită",
			ENABLE_AUTOMATIC_TEST: 		"Activează Testare Automată",
			KEEP_UP_TO_DATE: 			"Menține StreamBoost actualizat",
			ENABLE_AUTOMATIC_UPDATE: 	"Permite actualizare automată"

		},

		PRIORITY:{
			PRIORITY: 					"Prioritate",
			PRIORITY_TIPS: 				"Prioritatea permite modificarea importanței unui dispozitiv față de altul. Este utilă când dispozitivele folosesc o lățime de bandă limitată cu aplicații din aceeași clasificare.",
			ALL_DEVICE: 				"Toate dispozitivele",
			ACTIVE_DEVICE: 				"Dispozitiv Activ",
			SAVE: 						"Salvare",
			ID: 						"ID",
			DEVICE: 					"Dispozitiv",
			TYPE: 						"Tip",
			MAC_ADDRESS: 				"Adresă MAC",
			STICK: 						"Stick"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Statistici",
			UP_TIME: 					"Timp pornire",
			DOWNLOADS: 					"Descărcări",
			LAST_DAY: 					"Ultima zi",
			LAST_WEEK: 					"Ultima săptămână",
			LAST_MONTH: 				"Ultima lună",
			ALL_LAN_HOSTS: 				"Toate host-urile din LAN",
			OTHER: 						"Altele"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Firewall",
			ENABLE_SPI: 				"Funcția SPI Firewall",

			DOS_PROTECTION: 			"Protecție DoS",
			ENABLE_DOS: 				"Protecție DoS",
			
			OFF: 						"Oprit",
			LOW: 						"Scăzută",
			MIDDLE: 					"Medie",
			HIGH: 						"Ridicată",

			ICMP: 						"Filtrare Atac ICMP-FLOOD",
			UDP: 						"Filtrare Atac UDP-FLOOD",
			TCP: 						"Filtrare Atac TCP-SYN-FLOOD",
			ENABLE_DOS_TIP:             "Funcțiile Protecția DoS și Statistici Trafic trebuie sa fie activate în același timp.",

			IGNORE: 					"Ignorare Pachete Ping către portul WAN",
			FORBID: 					"Interzicere Pachete Ping de la portul LAN",

			BLOCK_DOS: 					"Listă Gazde Blocate pentru DoS",
			HOST_NUMBER: 				"Număr Gazde",
			IP_ADDRESS: 				"Adresă IP",
			MAC_ADDRESS: 				"Adresă MAC"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Controlul Accesului",
			ENABLE_ACCESS: 				"Controlul Accesului",

			ACCESS_MODE: 				"Mod Acces",
			DEFAULT_ACCESS_MODE: 		"Mod Acces Implicit",
			BLACK_LIST: 				"Listă Interziceri",
			WHITE_LIST: 				"Listă Permisiuni",
			
			WIRED:						"Cablu",
			WIRELESS:					"Wireless",

			DEVICE_ONLINE: 				"Dispozitive Active",
			NAME: 						"Nume Dispozitiv",
			IP_ADDRESS: 				"Adresă IP",
			MAC_ADDRESS: 				"Adresă MAC",
			CONN_TYPE: 					"Tipul Conexiunii",

			BLOCK: 						"Blocare",

			DEVICE_IN_WHITE: 			"Dispozitive în Lista de Permisiuni",
			DEVICE_IN_BLACK: 			"Dispozitive în Lista de Interziceri"
		},

		IP_MAC:{
			TITLE: 						"Setări",
			ENABLE_ARP: 				"Asociere ARP (ARP Binding)",

			ARP_LIST: 					"Listă ARP",
			ARP_NUM: 					"Număr Intrări ARP",

			MAC_ADDRESS: 				"Adresă MAC",
			IP_ADDRESS: 				"Adresă IP",
			BOUND: 						"Asociat",
			UNBOUND: 					"Neasociat",

			BINDING_LIST: 				"Listă Asocieri",
			DESCRIPTION: 				"Descriere",
			OPTIONAL: 					"(Opțional)",
			ENABLE_THIS_ENTRY: 			"Activare"
		},

		TIMESET: {
			TITLE: 						"Setări oră",
			ZONE: 						"Ora locală",
			DATE: 						"Data",
			DATEFORMAT: 				"LL/ZZ/AAAA",
			TIME: 						"Ora",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"Server NTP  I",
			NTP2: 						"Server NTP  II",
			OPTIONAL: 					"(Opțional)",

			CURRENT_TIME:  				"Ora curentă",
			SET_TIME: 					"Setează Ora",
			AUTOMATIC: 					"Obține automat de pe Internet",
			MANUAL: 					"Manual",
			AUTOMATIC_BTN: 				"Obține",


			GETGMT: 					"Obține GMT",

			
			GETGMT_SUCCESS: 			"Actualizare cu succes a orei, de la serverul NTP",
			GETGMT_TIMEOUT: 			"Actualizare eșuată a orei, de la serverul NTP (Time Out)",
			GETGMT_WAIT: 				"Așteptare",
			
			M: 							"L",
			W: 							"S",
			D: 							"Z",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Ora de vară",
			ENABLE_DAYLIGHT: 			"Activează ora de vară",
			START: 						"Început",
			END: 						"Sfârșit",

			RUNNING_STATUS: 			"Stare de funcționare",
			DOWN: 						"Ora de vară este utlizată",
			UP: 						"Ora de vară nu este utilizată"
		},

		DIAG:{
			TITLE: 						"Diagnosticare",
			DIAGNOSTIC_TOOL: 			"Unealtă Diagnosticare",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"Adresa IP/Nume Domeniu",
			COUNT: 						"Număr Pachete Trimise",
			
			BASIC: 						"Simplu",
			ADVANCED: 					"Avansat",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Dimensiune Pachet Ping",
			PKTUNIT: 					"(4-1472 Bytes)",

			TIMEOUT: 					"Timp expirare Ping",
			TIMOUTUNIT: 				"(100-2000 Milisecunde)",

			TTL: 						"Traceroute Max TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Început",
			STOP: 						"Stop"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Firmwareul dumneavoastră este actualizat",
			TITLE: 						"Actualizare Firmware",
			INFO: 						"Informații dispozitiv",
			REMOTE_TITLE: 				"Actualizare on-line",
			LOCAL_TITLE: 				"Actualizare locală",

			NEWFILE: 					"Fișier Firmware Nou",
			FIRMWAREVERSION: 			"Versiune Firmware",
			HARDWAREVERSION: 			"Versiune Hardware",
			LATESTVERSION: 				"Ultima versiune",
			CONFIRM_CONTENT:			"Doriți să actualizați firmware-ul?",
			WARNING:					"Firmware-ul se actualizează... <br/> Pentru a evita orice deteriorare, vă rugăm să mențineți routerul pornit și să nu îl utilizați în timpul procesului de actualizare de firmware.",
			REBOOTING: 					"Repornire... <br/>  Pentru a evita orice deteriorare, vă rugăm să mențineți routerul pornit și să nu îl utilizați în timpul procesului de actualizare de firmware.",
			DO_NOT_OPERATE: 			"Firmware-ul se actualizează... <br/> Pentru a evita orice deteriorare, vă rugăm să mențineți routerul pornit și să nu îl utilizați în timpul procesului de actualizare de firmware.",
			FIRMWARE_UPDATING_NOTE: 	"1.Actualizare Firmware...<br/> Pentru a evita orice deteriorare, vă rugăm să mențineți routerul alimentat și să nu utilizați routerul în timpul procesului de actualizare firmware.",
			REBOOTING_NOTE: 			"2.Repornire...<br/> Pentru a evita orice deteriorare, vă rugăm să mențineți routerul alimentat și să nu utilizați routerul în timpul procesului de actualizare firmware.",
			SCREEN_UPDATING_NOTE: 		"3.Actualizare Display...<br/> Pentru a evita orice deteriorare, vă rugăm să mențineți routerul alimentat și să nu utilizați routerul în timpul procesului de actualizare firmware.",
			UPGRADE_FAILED: 			"Eroare actualizare.",
			UPGRADE: 					"Actualizare",
			CHECK: 						"Verificare",
			DOWNLOADING: 				"Se descarcă... <br/> Pentru a evita orice deteriorare, vă rugăm să mențineți routerul pornit și să nu îl utilizați în timpul procesului de actualizare de firmware.",
			UPGRADE_INOF: 				" Pentru a evita orice deteriorare, vă rugăm să mențineți routerul pornit.",
			NOTE: 						"Notă:",
			NO_UPGRADE: 				"Aceasta este ultima versiune",

			UPGRADING: 					"Se actualizează...<br/> Pentru a evita orice deteriorare, vă rugăm să mențineți routerul pornit și să nu îl utilizați în timpul procesului de actualizare de firmware.",
			RETRY: 						"Reîncercare",
			CANCEL: 					"Revocare",
			ILEGAL_DEVICE:              "Acest dispozitiv nu poate fi identificat. Vă rugăm să contactați suportul tehnic TP-Link.",
			UPGRADE_FAIL: 				"Nu se poate actualiza. Vă rugăm să încercați din nou mai târziu.",
            CONFIG_RESET_NOTE:          "Setările actuale se vor pierde după actualizarea la această versiune.",
			CHECK_UPGRADE: 				"Verificare actualizări."
		},

		BACKUP:{
			BACKUP: 					"Copie de Siguranță",
			BACKUPTIP: 					"Salvează o copie a setărilor curente.",

			RESTORE: 					"Restaurare",
			RESTORETIP: 				"Revenire la setările salvate într-un fișier.",
			
			RESTORE_WARN:				"Routerul restaurează configurația... <br/>Vă rugăm să nu utilizați routerul în acest timp.",
			RESTORE_CONFIRM_CONTENT: 	"Sigur doriți să restabiliți setările routerului din fișierul de siguranță?",
			
			FILE: 						"Fișier",

			FACTORY: 					"Restaurare Setări Fabrică",
			FACTORYTIP: 				"Resetează toate setările la valorile implicite.",
			RESETTIP:					"Restaurați toate setările la valorile implicite, cu excepția datelor de autentificare și a informatiilor contului cloud.",
			FACTORY_CONFIRM_CONTENT:	"Sunteți sigur că doriți să reveniți la setările din fabrică ale routerului?",
			FACTORY_WARN:				"Routerul restaurează configurația... <br/>Vă rugăm să nu utilizați routerul în acest timp.",
			
			BACKUPBTN: 					"Copie de Siguranță",
			RESTOREBTN: 				"Restaurare",
			RESETBTN:					"Restaurare",
			FACTORYBTN: 				"Restaurare Setări Fabrică"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Administrare Conturi",
			
			OLDUSER: 					"Utilizator vechi",
			OLDPWD: 					"Parolă Veche",

			NEWUSER: 					"Utilizator Nou",
			NEWPWD: 					"Parolă nouă",
			CONFIRM: 					"Confirmare Parolă Nouă",

			RECOVERYINFO: 				"Recuperare Parolă",
			ENABLE_PASSWORD_RECOVERY: 	"Activare Recuperare Parolă",
			FROM: 						"De La",
			TO: 						"Către",
			SMTP_SERVER: 				"Server SMTP",
			
			ENABLE_AUTHENTICATION: 		"Activare Autentificare",
			USERNAME: 					"Nume de utilizator",
			PASSWORD: 					"Parolă",

			TEST_MAIL: 					"Testare Mail",

			LOCAL:						"Management Local",
			LOCAL_MAC_AUTH: 			"Autentificare locală pe bază de MAC",
			ACCESS: 					"Acces pentru toate dispozitivele conectate la rețeaua locală",
			ACCESS_TIPS: 				"Selectați Pornit pentru a permite tuturor dispozitivelor din LAN să poată administra routerul sau selectați Oprit, pentru a permite administrarea numai dispozitivelor specificate.",
			
			MAC_ADDRESS: 				"Adresă MAC",
			VIEW_BTN: 					"Vizualizare Dispozitive Existente",
			DESCRIPTION: 				"Descriere",

			EXIST_DEVICE:               "Dispozitive Existente",

			OPTIONAL: 					"(Opțional)",
			ENABLE_THIS_ENTRY: 			"Activare",

			DEVICE_NAME:				"Nume Dispozitiv",
			IP_ADDRESS:					"Adresă IP",
			

			REMOTE: 					"Management de la Distanță",
			DISABLE_REMOTE_MANAGEMENR: 	"Dezactivare Management de la Distanță",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Activare Management de la Distanță  pentru toate dispozitivele",
			ENABLE_REMOTE_MANAGEMENR: 	"Activare Management de la Distanță pentru dispozitivele specificate",
			WEB: 						"Port Management Web",

			NOTICE:						"În conflict cu portul utilizat de Serverele Virtuale! Sigur doriți să continuați?",

			REMOTEIP: 					"Adresă IP pentru Management de la Distanță",
			REMOTEIPNOTE: 				"(Introduceți 255.255.255.255 pentru orice adresă IP)"
			
		},

		SYSLOG:{
			TITLE: 						"Jurnal Sistem",
			LOG_FILTER: 				"Filtrare jurnal:",
			
			TYPE_EQ: 					"Tip=",
			
			ALL: 						"TOATE",

			FIREWALL: 					"Firewall", 
			NAT: 						"NAT",
			DDNS: 						"DNS Dinamic",
			UPNP:						"UPnP",
			IMB:            			"Asociere IP&MAC",
			IPTV:						"IPTV",
			DHCPS:						"Server DHCP",
			IGMP_PROXY:					"IGMP Proxy",
			DOMAIN_LOGIN:				"Autentificare domeniu",
			BASIC_SECURITY: 			"Securitate de bază",
			PARENTAL_CONTROL: 			"Control Parental",
			ACCESS_CONTROL: 			"Controlul Accesului",
			DOS_PROTECTION: 			"Protecție DoS",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Statistici Trafic",
			TIME_SETTINGS: 				"Setări oră",
			ACCOUNT_MANAGEMENT: 		"Administrare Conturi",
			LOCAL_MANAGEMENT: 			"Management Local",
			REMOTE_MANAGEMENT: 			"Management de la Distanță",
			LOCALE: 					"Informații locale",
			FACTORY_RESET: 				"Restaurare Setări Fabrică",
			LED_CONTROLLER: 			"Controler LED",
			NETWORK: 					"Rețea",
			USBSHARE: 					"Partajare USB",
			AND: 						"și",
			LEVEL: 						"Nivel",
			EMERGENCY:					"URGENȚĂ",
			ALERT:						"ALERTĂ",
			CRITICAL:					"CRITIC",
			ERROR: 						"EROARE",
			WARNING: 					"AVERTIZARE",
			NOTICE: 					"NOTĂ",
			INFO: 						"INFO",
			DEBUG: 						"DEBUG",

			INDEX: 						"Index",
			TYPE: 						"Tip",
			TIME: 						"Ora",
			LEVEL_COL:					"Nivel",

			CONTENT: 					"Conținut Jurnal",
			
			MAIL_LOG: 					"Trimite Jurnal pe Mail",
			SAVE_LOG: 					"Salvare Jurnal",

			SEND_OK: 					"Trimitere cu succes",
			SEND_FAILED: 				"Trimitere eșuată",

			MAIL_SETTING: 				"Setări Mail",

 			FROM: 						"De La",
 			TO: 						"Către",
 			SMTP_SERVER: 				"Server SMTP",
 			ENABLE_AUTHENTICATION: 		"Activare Autentificare",

 			USERNAME: 					"Nume de utilizator",
 			PASSWORD: 					"Parolă",
 			CONFIRM_PASSWORD: 			"Confirmare parolă",

 			AUTO_MAIL: 					"Activează Mail Automat",
 			LOG_AT: 					"Notifică la",
 			HH_MM: 						"(HH:MM) zilnic",

 			LOG_EVERY: 					"Notifică la fiecare",
 			HOURS: 						"ore"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Setări",
			STATUS: 					"Activare QoS",
			UPBANDWIDTH: 				"Lațime bandă Upload",
			DOWNBANDWIDTH: 				"Lațime bandă Download",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Test Viteză",
			RULE_LIST: 					"Listă Reguli QoS",
			RULE: 						"Regulă QoS",
			ID: 						"ID",
			NAME: 						"Nume",
			TYPE: 						"Tip",
			DETAIL: 					"Detalii",
			PRIORITY: 					"Prioritate",

			APPLICATION: 				"Aplicație",
			APPLICATION_LIST: 			"Listă aplicații",
			CUSTOM_APP: 				"Aplicație personalizată",
			MAC_ADDR: 					"Adresă MAC",
			MAC_ADDR_P: 				"MAC:",
			IP_ADDR: 					"Adresă IP",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Port Fizic",

			LOW: 						"Scăzută",
			MIDDLE: 					"Medie",
			HIGH: 						"Ridicată",

			PROTO: 						"Protocol",
			PORT: 						"Port",
			PROTO_P: 					"Protocol:",
			PORT_P: 					"Port:",
			PORT_TIPS: 					"(XX or XX-XX,1-65535,cel mult 5 perechi)",

			ALL: 						"TOATE",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Personalizat",

			WIFI_HOME: 					"GAZDA-WiFi",
			WIFI_GUEST: 				"OASPETE-WiFi",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Actualizare Bază de Date",

			NEWFILE: 					"Fișier Nou Bază de Date",
			FIRMWAREVERSION: 			"Versiune Bază de Date",
			CONFIRM_CONTENT:			"Sunteți sigur că doriți să actualizați baza de date?",
			WARNING:					"Baza de date se actualizează... <br/>Vă rugăm să nu utilizați routerul în acest timp.",
			
			UPGRADE: 					"Actualizare",

			SERVICE_RESTART: 			"Serviciul QoS repornește",
			
			TYPE: 						"Tip",
			BY_DEVICE: 					"După Dispozitiv",
			BY_APP: 					"După Aplicație",
			BY_PHY: 					"După Portul Fizic",

			HIGH_PRIORITY_LBL: 			"Prioritate Ridicată:",
			MIDDLE_PRIORITY_LBL: 		"Prioritate Medie:",
			LOW_PRIORITY_LBL: 			"Prioritate Scăzută:",

			HIGH_PRIORITY: 				"Prioritate Ridicată",
			MIDDLE_PRIORITY: 			"Prioritate Medie",
			LOW_PRIORITY: 				"Prioritate Scăzută"

		},

		APPLICATION:{
			APP_LIST: 					"Listă aplicații",
			GAME_LIST: 					"Listă jocuri",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Statistici Trafic",
			ENABLE_STATISTICS: 			"Statistici Trafic",

			TITLE: 						"Listă statistici trafic",
			IP_MAC: 					"Adresă IP/Adresă MAC",
			TPKT: 						"Total Pachete",
			TBYTE: 						"Total Bytes",
			CPKT: 						"Pachete Curente",
			CBYTE: 						"Bytes curenți",
			CICMP: 						"ICMP Tx Curent",
			CUDP: 						"UDP Tx Curent",
			CSYN: 						"SYN Tx Curent",
			
			DELETE_CONFIRM: 			"Sunteți sigur că doriți să ștergeți statisticile de trafic?",
			DELETE_ALL_CONFIRM: 		"Sunteți sigur că doriți să ștergeți toate statisticile de trafic?",

			RESET_ALL: 					"Resetare Completă"
		},

		SYSPARA:{
			W24G: 						"Wireless 2.4GHz",
			W5G: 						"Wireless 5GHz",
			SWITCH_NOTICE:  			"Funcția wireless este oprită. Dacă doriți să utilizați această funcție, vă rugăm să o porniți de la butonul WiFi.",

			ENABLE_TIPS: 				"Funcția wireless este dezactivată.",

			BEACON: 					"Beacon Interval",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS Threshold",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Fragmentation Threshold",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM Interval",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Group Key Update Period",
			GROUPUNIT: 					"secunde",
			
			
			WMM_FEATURE: 				"Funcția WMM",
			WMM: 						"Activează WMM",

			GI_FEATURE: 				"Funcția Short GI",
			GI: 						"Activează Short GI",

			AP_FEATURE: 				"Funcția Izolare AP",
			AP: 						"Activează Izolare AP",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Activează  TxBF",

			WDS_FEATURE: 				"Punte WDS",
			WDS: 						"Activare WDS Bridging",
			
			SSID_BRIDEGE: 				"SSID (de pus în bridge)",
			SURVEY: 					"Scanare",

			SN: 						"SN",
			MAC_ADDRESS: 				"Adresă MAC",
			SSID: 						"SSID",
			SIGNAL: 					"Semnal",
			CHANNEL: 					"Canal",
			SECURITY: 					"Securitate",
			CHOSEN: 					"Ales",
			AP_NUMBER:					"Număr AP",

			TOTAL: 						"Număr total de obiecte",

			MAC: 						"Adresă MAC (de pus în bridge)",
			MACUNIT: 					"Examplu: 00-1D-0F-11-22-33",

			SECURITY: 					"Securitate",
			NO: 						"Nu",
			NONE: 						"Fără Securitate",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Parolă",
			
			AUTH_TYPE: 					"Tip Autentificare",
			AUTO: 						"Automat",
			OPEN: 						"Open System",
			SHARED: 					"Shared Key",

			WEP_INDEX: 					"Index WEP",
			KEY1: 						"Cheia1",
			KEY2: 						"Cheia2",
			KEY3: 						"Cheia3",
			KEY4: 						"Cheia4",

			WEP_KEY_FORMAT: 			"Format cheie WEP",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimal",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Activare WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Activare NAT",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"Activare NAT Boost",
			
			MEDIA_SERVER: 				"Server Media",
			SCAN_INTERVAL: 				"Interval Scanare Automată (Ore)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Setări Nivel Protecție DoS",

			ICMP: 						"Nivel Pachete ICMP-FLOOD",
			UDP: 						"Nivel Pachete UDP-FLOOD",
			TCP: 						"Nivel Pachete TCP-FLOOD",

			WDS_MODE: 					"Mod WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Scăzută",
			MIDDLE: 					"Medie",
			HIGH: 						"Ridicată",

			TO: 						"până la",
			NOTICE_NAT_REBOOT: 			"Repornire... <br/>Vă rugăm să nu utilizați routerul în timpul procesului de repornire.",

			NOTICE_NAT_BOOST: 			"Modificarea funcției NAT Boost va duce la repornirea echipamentului, sunteți sigur că doriți să continuați?",
			NOTICE:						"Canalul routerului dumneavoastră nu este același cu canalul utilizat de Access Point-ul conectat prin funcția bridge. Doriți să îl schimbați?",

			UNIT: 						"(5-7200)Pachete/Sec",
			LED: 						"LED",
			NIGHT_MODE: 				"Mod noapte",
			PERIOD_NIGHT_TIME: 			"Interval Mod Noapte",
			ENABLE: 					"Activare Mod Noapte",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "LED-ul este stins. Dacă doriţi să folosiţi această funcţie, faceţi clic pe LED-ul din partea din dreapta sus a paginii.",
			NOTE2:                      "Perioada modului de noapte se aplică în funcţie de ora sistemului routerului. Asiguraţi-vă că aţi setat deja Ora routerului."
		},
		VPN:{
			OPEN_VPN: 					"Open VPN",
			NO_CERT_NOTE: 				"Niciun certificat în prezent, <b>Generaţi</b> unul înainte de a activa serverul VPN.",
			NO_CERT_NOTE2: 				"Niciun certificat în prezent, <b>Generaţi</b> unul înainte de a exporta configuraţia.",
			ENABLE_VPN_SERVER: 			"Activare server VPN",
			SERVICE_TYPE: 				"Tip Serviciu",
			SERVICE_PORT: 				"Port serviciu",
			VPN_SUBNET: 				"Subreţea/mască de reţea VPN",
			CLIENTS_ACCESS: 			"Acces client",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Doar reţeaua de domiciliu",
			INTERNET_HOME: 				"Internet şi reţeaua de domiciliu",
			CERT_STR: 					"Niciun certificat în prezent, faceţi clic pe OK pentru a genera unul şi salvaţi configuraţia.",
			CERT_STR2: 					"Niciun certificat în prezent, faceţi clic pe OK pentru a genera unul şi exportaţi configuraţia.",
			CONF_FILE: 					"Fişier configuraţie", 
			EXPORT_CONF_FILE: 			"Exportaţi configuraţia.",
			EXPORT: 					"Exportare",

			INSTALL_GUIDE: 				"Ghid de instalare a clientului VPN",
			INSTALL_STEP: 				"Pentru a activa şi conecta dispozitive client la serverul OpenVPN:",
			INSTALL_NOTICE:				"Înainte de a configura serverul OpenVPN, configuraţi serviciul DNS dinamic (recomandat) sau alocaţi o adresă IP statică pentru portul WAN. Şi asiguraţi-vă că Ora sistemului este corectă.",
			INSTALL_NOTE1: 				"Selectaţi Activare server VPN.",
			INSTALL_NOTE2: 				"Înainte de a configura serverul OpenVPN, vă rugăm să configurați serviciul DNS Dinamic (recomandat) sau să alocați o adresă IP statică pentru portul WAN. Asigurați-vă că portul extern al setărilor NAT nu este portul de serviciu, că serviciul DMZ este dezactivat și că ora sistemului este corectă.",
			INSTALL_NOTE3: 				"Faceţi clic pe Exportare pentru a salva fişierul de configurare.",
			INSTALL_NOTE4: 				"Pe dispozitivele dvs. client, descărcaţi şi instalaţi utilitarul client OpenVPN de la adresa <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Printre platformele acceptate oficial se numără Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Lansaţi utilitarul client OpenVPN şi adăugaţi o nouă conexiune VPN, folosind fişierul de configurare salvat pentru a conecta dispozitivul client la serverul VPN.",
			NOTE: 						"Pentru a afla mai multe despre clienţi OpenVPN, vizitaţi <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Adresă IP client",
			ACCOUNT_USERNAME: 			"Nume de utilizator",
			ACCOUNT_PASSWORD: 			"Parolă",
			CLIENT_IP_NOTE: 			"(maximum 10 clienţi)",
			SAME_SUBNET_NOTE: 			"Adresa IP client și adresa IP LAN nu poate fi în aceeași subrețea.",
			CONFLICT_WITH_DHCP: 		"Adresa IP client intră în conflict cu grupul de adrese IP DHCP.",
			CONFLICT_WITH_RESERVED: 	"Adresa IP client intră în conflict cu adresele IP rezervate.",
			CONFLICT_WITH_OPENVPN: 		"Adresa IP client și adresa IP OpenVPN nu poate fi în aceeași subrețea.",
			SAME_SUBNET_NOTE2: 			"Subreţeaua/masca de reţea VPN şi adresa IP LAN nu pot fi în aceeaşi subreţea.",
			CONFLICT_WITH_DHCP2: 		"Adresa VPN Subnet/Netmask intră în conflict cu grupul de adrese IP DHCP.",
			CONFLICT_WITH_RESERVED2: 	"Adresa VPN Subnet/Netmask intră în conflict cu adresele IP rezervate.",
			CONFLICT_WITH_PPTPVPN: 		"Adresa VPN Subnet/Netmask și adresele IP PPTP VPN nu pot fi în aceeași subrețea.",
			VPN_MASK_ERROR: 			"Masca subrețea nu poate fi mai mare de 255.255.255.248.",
			ACCOUNT_LIST: 				"Listă cont (până la 16 utilizatori)",
			ADVANCED_SETTING: 			"Avansat",
			ALLOW_SAMBA: 				"Permite acces Samba (Network Place)",
			ALLOW_NETBIOS: 				"Permite NetBIOS passthrough",
			ALLOW_UNENCRYPTED_CONN: 	"Permite conexiuni necriptate",
			USERNAME_CONFLICT: 			"Acest nume de utilizator există deja.",
			
			CONNECT_PPTP: 				"Pentru a activa şi conecta dispozitive client la serverul PPTP VPN:",
			CONNECT_NOTICE:				"Înainte de a configura serverul PPTP VPN, configuraţi serviciul DNS dinamic (recomandat) sau alocaţi o adresă IP statică pentru portul WAN. În plus, asiguraţi-vă că portul extern din setările NAT nu este 1723 şi că DMZ este dezactivat, precum şi că Ora sistemului este corectă.",
			CONNECT_NOTE1: 				"Selectaţi Activare server VPN.",
			CONNECT_NOTE2: 				"Configuraţi parametrii serverului PPTP VPN şi faceţi clic pe Salvare.",
			CONNECT_NOTE3: 				"Pe dispozitivele dvs. client, creaţi o conexiune PPTP VPN. Printre platformele acceptate oficial se numără Windows, Mac OSX, Linux, iOS şi Android.",
			CONNECT_NOTE4: 				"Lansaţi programul PPTP VPN, adăugaţi o conexiune nouă şi introduceţi numele de domeniu al serviciului DDNS înregistrat sau adresa IP statică alocată portului WAN, pentru a conecta dispozitivul client la serverul PPTP VPN.",
			
			GENERATE_CERT: 				"Certificat",
			GENERATE_NEW_CERT: 			"Generaţi certificatul.",
			GENERATE: 					"Generează",
			GENERATE_TIPS: 				"Se generează certificatul...<br/>Va dura câteva minute, vă rugăm să aşteptaţi.",
			CERT_SUCCESS: 				"Succes",
			CERT_FAIL: 					"Proces eşuat, vă rugăm să încercaţi din nou.",
			
			VPN_CONNECTIONS: 			"Conexiuni VPN",
			OPEN_VPN_CONNECTIONS: 		"Conexiune OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"Conexiune PPTP VPN",
			USER:				"Utilizator",
			REMOTE_IP:			"IP la distanță",
			ASSIGNED_IP:			"IP Alocat"
		}
	};
})(jQuery);

