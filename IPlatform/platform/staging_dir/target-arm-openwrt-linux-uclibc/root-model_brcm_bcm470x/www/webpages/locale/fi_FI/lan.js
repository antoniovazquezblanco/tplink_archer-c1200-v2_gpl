(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			EMAIL: 						"Sähköposti",
			FORGET_PASSWORD: 			"Unohditko salasanan?",
			LOGIN: 						"Kirjaudu sisään",
			BEGIN: 						"Aloitus",
			IMPORTANT_UPDATE_INFO: 		"Jotta vältytään ristiriidalta laitteen kanssa, reitittimen IP-osoitteeksi on vaihdettu",
			CONTINUE: 					"Jatka",

			IMPORTANT_NOTICE: 			"Tärkeä huomautus",
			OR: 						", haluatko varmasti siirtyä",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Paina Reset-painiketta %SECONDS% sekuntia palauttaaksesi reitittimen tehdasasetuksiin.",
			FORGET_PASSWORD_INFO_1: 	"Jos Salasanan palautus -ominaisuus on käytössä. Ilmoitettuun sähköpostiosoitteeseen lähetetään tarkistuskoodi, jolla voidaan nollata käyttäjätunnus ja salasana.",
			FORGET_PASSWORD_SEND_FAILED:"Koodin lähetys ei onnistunut! Tarkista internet-yhteys.",

			VERIFICATION_CODE: 			"Tarkistuskoodi",

			RECEIVE_CODE: 				"Lähetä koodi",

			CONFIRM: 					"Vahvista",
			WELCOME: 					"Tervetuloa TP-Link %model% -laitteen käyttäjäksi. Kirjaudu sisään.",
			SEC: 						"s",

			USER_CONFLICT: 				"Kirjautumisristiriita!",
			FIRST_TIME: 				"Asenna ensin %PRODUCT%, jotta voit muodostaa Internet-yhteyden. Luo aluksi laitteelle %PRODUCT% sen hallinnointisalasana.",
			FIRST_TIME1: 				"Luo valvojan salasana voidaksesi hallinnoida %model% -mallia.",
			USER_CONFLICT_INFO: 		"Käyttäjä %USER% käyttäen isäntälaitetta %HOST% (%IP%/%MAC%) on kirjautunut reitittimeen. Et voi kirjautua samanaikaisesti. Yritä uudelleen myöhemmin.",
			USER_CONFLICT_INFO_2: 		"Käyttäjä %USER% (%IP%) on kirjautunut reitittimeen. Et voi kirjautua samanaikaisesti. Yritä uudelleen myöhemmin.",
			USER_CONFLICT_INFO_3: "Vain yksi laite voi kirjautua kerrallaan. Haluatko jatkaa ja pakottaa toisen laitteen kirjautumaan ulos?",
			
			LOGIN_FAILED: 				"Kirjautumisvirhe!",
			LOGIN_FAILED_COUNT: 		"Kirjautuminen epäonnistui %num1 kertaa, ja sinulla on %num2 yritystä jäljelä.",
			NO_COOKIE: 					"Kirjautuminen edellyttää, että evästeet ovat käytössä. Ota evästeet käyttöön tai poista yksityinen/Incognito-selaustila käytöstä.", 

			FORGET_PASSWORD_NOTE: 		"Jos et ole määrittänyt Salasanan palautus -ominaisuutta. Voit painaa Reset-painiketta %SECONDS% sekuntia palauttaaksesi reitittimen tehdasasetuksiin."
		},
		INIT: {
			PASSWORD: 					"Salasana",
			CONFIRM_PASSWORD:				"Vahvista salasana",
			BEGIN: 						"Aloitus",
			IMPORTANT_UPDATE_INFO: 		"Jotta vältytään ristiriidalta laitteen kanssa, reitittimen IP-osoitteeksi on vaihdettu",
			CONTINUE: 					"Seuraava",

			IMPORTANT_NOTICE: 			"Tärkeä huomautus",
			OR: 						", haluatko varmasti siirtyä",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Vahvista",

			SEC: 						"s",

			USER_CONFLICT: 				"Kirjautumisristiriita!",
			
			USER_CONFLICT_INFO: 		"Käyttäjä %USER%, jonka isäntälaite on %HOST% (%IP%/%MAC%), on kirjautunut reitittimeen. Et voi kirjautua samanaikaisesti. Yritä uudelleen myöhemmin.",
			USER_CONFLICT_INFO_2: 		"Käyttäjä %USER% (%IP%) on tällä hetkellä kirjautunut reitittimeen. Et voi kirjautua samanaikaisesti. Yritä uudelleen myöhemmin.",
			
			LOGIN_FAILED: 				"Kirjautumisvirhe!",
			LOGIN_FAILED_COUNT: 		"Kirjautuminen epäonnistui %num1 kertaa, ja sinulla on %num2 yritystä jäljelä.",
			NO_COOKIE: 					"Kirjautuminen edellyttää, että evästeet ovat käytössä. Ota evästeet käyttöön tai poista yksityinen/Incognito-selaustila käytöstä.", 

			INIT_NOTE_TITLE: 			"Hyvä asiakas",
			INIT_NOTE_CONTENT: 			"Asenna ensin %PRODUCT%, jotta voit muodostaa Internet-yhteyden. Luo aluksi laitteelle %PRODUCT% sen hallinnointisalasana."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Laiteohjelmistoversio: ",
			FEATURE: 						"Muutokset ja korjaukset: ",
			TITLE: 							"Löydettiin laiteohjelmistopäivitys.",
			UPGRADE_NOW: 					"Päivitä heti",
			REMIND: 						"Muistuta myöhemmin",
			NOTICE:    						"Hei, reitittimellesi on saatavilla uusi laiteohjelmisto.",
			NEVER: 							"Ohita tämä versio"
			
		},

		WAN_ERROR: {
			TITLE: 							"WAN-yhteysvirhe!",
			STATUS: 						"Tila",
			INFO: 							"Tiedot",
			SETUP: 							"Määritä Internet-yhteys",
			NEVER: 							"Älä muistuta uudelleen"
		},

		OFFLINE_ERROR:{
			TITLE: "Ups... Pilvipalvelimeen ei saa yhteyttä.",
			NOTE1: "1. Varmista, että olet yhteydessä Internetiin.",
			NOTE2: "2. Pilvipalvelimeen ei tilapäisesti saa yhteyttä. Päivitä sivu myöhemmin.",
			NOTE3: "3. Jos ongelma ei ratkea, ota yhteyttä <a target=\"_blank\" id=\"support\">TP-Linkin tekniseen tukeen</a>.",
			ERROR: "Virhe"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Laiteohjelmistoversio:",
			HARDWARE_VERSION: 				"Laitteistoversio:",
			HELP_SUPPORT: 					"Tuki",
			FAQ: 							"FAQ",
			CONFIRM_REBOOT: 				"Haluatko varmasti käynnistää reitittimen uudelleen?",
			CONFIRM_LOGOUT: 				"Haluatko varmasti kirjautua ulos?",
			UPGRADE_ALERT_1: 				"Nykyinen laiteohjelmisto ei tue TP-Linkin pilvipalvelua. Suosittelemme, että lataat uusimman laiteohjelmiston osoitteesta www.tp-link.com ja päivität sen.",
			UPGRADE_ALERT_2: 				"Nykyinen laiteohjelmisto ei tue TP-Linkin pilvipalvelua. Suosittelemme, että päivität laiteohjelmiston napsauttamalla oikean ylänurkan päivityskuvaketta.",
			ACCOUNT_UNLOGIN: 				"Tili",

			REBOOTING: 						"Käynnistyy uudelleen... <br/>Älä käytä uudelleenkäynnistyksen aikana.",

			HELP_APP: 					"Käyttö",
			CHARACTERS_ILLUSTRETE_TITLE: 			"TP-Link Tether -sovellus skannaamalla QR-koodi",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Hallinnoi verkkoasi kätevästi miltä tahansa mobiililaitteesta.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Täysi hallinta kämmenelläsi."
		},

		NAV: {
			QUICK_SETUP: 				"Pika-asennus",
			BASIC: 						"Perusasetukset",
			ADVANCED: 					"Lisäasetukset"
		},

		CONTROL: {
			LOGIN: 						"Kirjaudu sisään",
			LOGOUT: 					"Kirjaudu ulos",
			UPDATE: 					"Päivitä",
			REBOOT: 					"Käynnistä uudelleen",
			LED: 						"Merkkivalo",
			LED_ON: 					"Merkkivalo palaa",
			LED_OFF: 					"Merkkivalo on sammuksissa",
			LED_DISABLED: 				"LED-valon tilaa ei voi muuttaa yötilan aikana"
		},

		LANGUAGE: {
			EN_US: 						"Englanti",
			ZH_CN: 						"简体中文"
		},

		REGION: {
			ALBANIA: 					"Albania",
			ALGERIA: 					"Algeria",
			AMERICAN_SAMOA: 			"Amerikan Samoa",
			ARGENTINA: 					"Argentiina",
			ARMENIA: 					"Armenia",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australia",
			AUSTRIA: 					"Itävalta",
			AZERBAIJAN: 				"Azerbaidžan",
			BAHAMAS: 					"Bahama",
			BAHRAIN: 					"Bahrain",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Valko-Venäjä",
			BELGIUM: 					"Belgia",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Bermuda",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnia ja Hertsegovina",
			BRAZIL: 					"Brasilia",
			BRUNEI_DARUSSALAM: 			"Brunei",
			BULGARIA: 					"Bulgaria",
			CAMBODIA: 					"Kambodža",
			CANADA: 					"Kanada",
			CAYMAN_ISLANDS: 			"Caymansaaret",
			CHILE: 						"Chile",
			CHINA: 						"Kiina (Kansantasavalta)",
			COLOMBIA: 					"Kolumbia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Kroatia",
			CYPRUS: 					"Kypros",
			CZECH_REPUBLIC: 			"Tšekin tasavalta",
			DENMARK: 					"Tanska",
			DOMINICAN_REPUBLIC: 		"Dominikaaninen tasavalta",
			ECUADOR: 					"Ecuador",
			EGYPT: 						"Egypti",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Viro",
			ETHIOPIA: 					"Etiopia",
			FAEROE_ISLANDS: 			"Färsaaret",
			FINLAND: 					"Suomi",
			FRANCE: 					"Ranska",
			FRENCH_GUIANA: 				"Ranskan Guayana",
			FRENCH_POLYNESIA: 			"Ranskan Polynesia",
			GEORGIA: 					"Georgia",
			GERMANY: 					"Saksa",
			GREECE: 					"Kreikka",
			GREENLAND: 					"Grönlanti",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hongkongin erityishallintoalue, Kiinan kansantasavalta",
			HUNGARY: 					"Unkari",
			ICELAND: 					"Islanti",
			INDIA: 						"Intia",
			INDONESIA: 					"Indonesia",
			IRAN: 						"Iran",
			IRAQ: 						"Irak",
			IRELAND: 					"Irlanti",
			ISRAEL: 					"Israel",
			ITALY: 						"Italia",
			JAMAICA: 					"Jamaika",

			JAPAN: 						"Japani",
			JAPAN_1: 					"Japani 1",
			JAPAN_2: 					"Japani 2",
			JAPAN_3: 					"Japani 3",
			JAPAN_4: 					"Japani 4",
			JAPAN_5: 					"Japani 5",
			JAPAN_6: 					"Japani 6",

			JORDAN: 					"Jordania",
			KAZAKHSTAN: 				"Kazakstan",
			KENYA: 						"Kenia",

			NORTH_KOREA: 				"Pohjois-Korea",
			KOREA_REPUBLIC: 			"Korean tasavalta",
			KOREA_REPUBLIC_3: 			"Korean tasavalta 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Latvia",
			LEBANON: 					"Libanon",
			LIBYA: 						"Libya",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Liettua",
			LUXEMBOURG: 				"Luxemburg",
			MACAU: 						"Macaon erikoishallintoalue",
			MACEDONIA: 					"Makedonia (entinen Jugoslavian tasavalta)",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malesia",
			MALDIVES: 					"Malediivit",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinique",
			MAURITIUS: 					"Mauritius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Meksiko",
			MONACO: 					"Monacon ruhtinaskunta",
			MONGOLIA: 					"Mongolia",
			MOROCCO: 					"Marokko",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Alankomaat",
			NETHERLANDS_ANTILLES: 		"Alankomaiden Antillit",

			NEW_ZEALAND: 				"Uusi-Seelanti",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Norja",
			NORTHERN_MARIANA_ISLANDS: 	"Pohjois-Mariaanit",
			OMAN: 						"Oman",
			PAKISTAN: 					"Pakistanin islamilainen tasavalta",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua-Uusi-Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Peru",
			PHILIPPINES: 				"Filippiinien tasavalta",
			POLAND: 					"Puola",
			PORTUGAL: 					"Portugali",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Réunion",
			ROMANIA: 					"Romania",
			RUSSIA: 					"Venäjä",
			RWANDA: 					"Ruanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Saudi-Arabia",
			SINGAPORE: 					"Singapore",
			SLOVAK_REPUBLIC: 			"Slovakian tasavalta",
			SLOVENIA: 					"Slovenia",
			SOUTH_AFRICA: 				"Etelä-Afrikka",
			SPAIN: 						"Espanja",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Surinam",
			SWEDEN: 					"Ruotsi",
			SWITZERLAND: 				"Sveitsi",
			SYRIA: 						"Syyria",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tansania",
			THAILAND: 					"Thaimaa",
			TRINIDAD_TOBAGO: 			"Trinidad ja Tobago",
			TUNISIA: 					"Tunisia",
			TURKEY: 					"Turkki",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ukraina",
			UNITED_ARAB_EMIRATES: 		"Arabiemiirikunnat",
			UNITED_KINGDOM: 			"Iso-Britannia",
			UNITED_STATES: 				"Yhdysvallat",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Uzbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnam",
			VIRGIN_ISLANDS: 			"Yhdysvaltain Neitsytsaaret",
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
			ENIWETOK: 					"(GMT-12:00) Enewetak, Kwajalein", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midway Island, Samoa",
			HAWAII: 					"(GMT-10:00) Havaiji",
			ALASKA: 					"(GMT-09:00) Alaska",
			PACIFIC_TIME: 				"(GMT-08:00) Tyynenmeren normaaliaika",
			MOUNTAIN_TIME: 				"(GMT-07:00) Kalliovuorten aikavyöhyke (USA ja Kanada)",
			CENTRAL_TIME: 				"(GMT-06:00) Keskiaikavyöhyke (USA ja Kanada)",
			EASTERN_TIME: 				"(GMT-05:00) Itäinen aikavyöhyke (USA ja Kanada)",
			CARACAS:					"(GMT-04:30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04:00) Atlantin aikavyöhyke (Kanada)",
			NEWFOUNDLAND: 				"(GMT-03:30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brasilia, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Keski-Atlantin aikavyöhyke",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azorit, Kap Verde",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwichin normaaliaika, Dublin, Lontoo",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berliini, Tukholma, Rooma, Bern, Bryssel",
			ATHENS_HELSINKI: 			"(GMT+02:00) Ateena, Helsinki, Itä-Eurooppa, Israel",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Bagdad, Kuwait, Nairobi, Riyadh, Moskova",

			TEHERAN: 					"(GMT+03:30) Teheran",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Ekaterinburg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Kalkutta, Mumbai, New Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Peking, Hongkong, Perth, Singapore",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokio, Osaka, Sapporo, Soul, Jakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Solamon, Uusi-Kaledonia",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fidji, Kamchatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Käyttö",
			GAME:						"PELI",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"Linja",
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
			DAY: 						"Päivä",

			MONDAY: 					"Maanantai",
			TUESDAY: 					"Tiistai",
			WEDNESDAY: 					"Keskiviikko",
			THURSDAY: 					"Torstai",
			FRIDAY: 					"Perjantai",
			SATURDAY: 					"Lauantai",
			SUNDAY: 					"Sunnuntai",
			
			MON: 						"Ma",
			TUES: 						"Ti",
			WED: 						"Ke",
			THUR: 						"To",
			FRI: 						"Pe",
			SAT: 						"La",
			SUN: 						"Su",

			JAN: 						"Tammi",
			FEB: 						"Helmi",
			MAR: 						"Maalis",
			APR: 						"Huhti",
			MAY: 						"Touko",
			JUN: 						"Kesä",
			JUL: 						"Heinä",
			AUG: 						"Elo",
			SEP: 						"Syys",
			OCT: 						"Loka",
			NOV: 						"Marras",
			DEC: 						"Joulu"

		},

		HOUR: {
			AM_1: 						"klo 1",
			AM_2: 						"klo 2",
			AM_3: 						"klo 3",
			AM_4: 						"klo 4",
			AM_5: 						"klo 5",
			AM_6: 						"klo 6",
			AM_7: 						"klo 7",
			AM_8: 						"klo 8",
			AM_9: 						"klo 9",
			AM_10: 						"klo 10",
			AM_11: 						"klo 11",
			AM_12: 						"klo 12",
			PM_1: 						"klo 13",
			PM_2: 						"klo 14",
			PM_3: 						"klo 15",
			PM_4: 						"klo 16",
			PM_5: 						"klo 17",
			PM_6: 						"klo 18",
			PM_7: 						"klo 19",
			PM_8: 						"klo 20",
			PM_9: 						"klo 21",
			PM_10: 						"klo 22",
			PM_11: 						"klo 23",
			PM_12: 						"klo 24"
		},

		ORDER: {
			"1ST": 						"Ensimmäinen",
			"2ND": 						"2",
			"3RD": 						"3",
			"4TH": 						"4",
			"5TH": 						"Viimeinen",
			"1ST_": 					"1",

			TH: 						". "
		},

		GRID: {
			CLIENT_NUMBER: 				"Asiakaslaitenumero",

			ID: 						"Tunnus",
			MODIFY: 					"Muokkaa",
			STATUS: 					"Tila",
			ENABLE: 					"Ota käyttöön",

			OPERATION: 					"Käyttö",
			CHOOSE: 					"Valitse",
			DESCRIPTION: 				"Kuvaus",
			

			AUTO_REFRESH: 				"Automaattipäivitys",
			REFRESH: 					"Päivitä",
			NUMBER: 					"Numero",
			ENABLED: 					"Käytössä",
			DISABLED: 					"Poissa käytöstä",
			ACTIVE: 					"Käytössä",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Lisää",
			CHOOSE: 					"Valitse",
			EDIT: 						"Muokkaa",
			DELETE: 					"Poista",
			DELETE_ALL: 				"Poista kaikki",
			REMOVE: 					"Poista",
			RESET: 						"Nollaa",
			RESET_ALL: 					"Palauta kaikki",
			DETECT: 					"Tunnista",
			ENABLE: 					"Ota käyttöön",
			DISABLE: 					"Poista käytöstä",
			CLEAR: 						"Clear",

			REFRESH: 					"Päivitä",
			SEARCH: 					"Etsi...",
			BROWSE: 					"Selaa",

			SAVE: 						"Tallenna",
			BACK: 						"Takaisin",

			PREV: 						"Edellinen",
			NEXT: 						"Seuraava",
			FINISH: 					"Valmis",
			
			ON: 						"Päällä",
			OFF: 						"Sammuksissa",
			LOW: 						"Matala",
			MIDDLE: 					"Keskitaso",
			HIGH: 						"Korkea",
			
			OK: 						"OK",
			CANCEL: 					"Peruuta",

			YES: 						"Kyllä",
			NO: 						"Ei",
			
			CONNECTED: 					"Yhdistetty",
			CONNECTING: 				"Yhdistetään",
			DISCONNECTING: 				"Yhteyttä katkaistaan",
			DISCONNECTED: 				"Ei kytketty",

			PASSWORD_HINT: 				"Salasana",
			FILEBUTTONTEXT: 			"Selaa",
			FILEBLANKTEXT: 				"Valitse tiedosto.",
			NOSELECTEDTEXT: 			"Valitse asetukset.",

			ADD_A_NEW_KEYWORD: 			"Lisää uusi avainsana",

			SUCCESSED: 					"Onnistui!",
			FORM_SAVED: 				"Tallennettu",
			FORM_FAILED: 				"Epäonnistui",
			GRID_ID_COLUMN: 			"Tunnus",
			GRID_SAVED: 				"Tallennettu",
			GRID_FAILED: 				"Epäonnistui",
			GRID_NONE_SELECT: 			"Valitse vähintään yksi syöte.",
			GRID_DELETE_COMFIRM: 		"Haluatko varmasti poistaa nämä syötteet?",
			GRID_DELETE_ALL_COMFIRM: 	"Haluatko varmasti poistaa kaikki syötteet?",
			GRID_MAX_RULES: 			"Suurin syötteiden määrä ylitetty.",
			KEYWORD_MAX_OVERFLOW: 		"Avainsanojen määrä ylittää raja-arvon.",

			NOTE: 						"Huomautus:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Virheellinen muoto.",
			BLANKTEXT: 					"Tämä kenttä on pakollinen.",

			EMAIL: 						"Virheellinen sähköpostin muoto.",
			NUMBER: 					"Virheellinen muoto.",

			NUMBER_MIN: 				"Virheellinen arvo, anna arvo, joka on suurempi kuin %min.",
			NUMBER_MAX: 				"Virheellinen arvo, anna arvo, joka on pienempi kuin %max.",

			NUMBER_MIN_MAX: 			"Virheellinen arvo, anna arvo, joka on välillä %min - %max.",
			HEX: 						"Tämän kentän tulisi olla heksadesimaalinen luku.",

			IP: 						"Virheellinen muoto.",

			IP_NO_ALL_ZERO:				"Osoite ei saa olla 0.0.0.0.",
			IP_NO_LOOP:					"Osoite ei saa olla silmukkaosoite.",
			IP_NO_D_TYPE:				"Osoite ei saa olla luokan D IP.",
			IP_NO_E_TYPE:				"Osoite ei saa olla luokan E IP.",
			IP_NO_ALL_ONE:				"Osoite ei saa olla 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"Osoite ei saa alkaa luvulla 255.",
			IP_NO_FIRST_ZERO:			"Osoite ei saa alkaa luvulla 0.",
			MASK_NO_ALL_ONE:			"Peite ei saa olla 255.255.255.255.",

			IPV6: 						"Virheellinen muoto.",
			IPV6_NOT_GLOBAL:			"Virheellinen muoto.",
			IPV6_NOT_PREFIX:			"Virheellinen muoto.",
			IP_DOMAIN: 					"Virheellinen muoto.",
			IPV6_DOMAIN: 				"Virheellinen muoto.",
			MAC: 						"Virheellinen muoto.",
			MULTI_MAC:					"Virheellinen muoto.",
			DATE: 						"Virheellinen muoto.",
			DATE_INVALID: 				"Anna päiväys väliltä 01/01/1970 - 12/31/2030.",
			MASK: 						"Virheellinen muoto.",
			DOMAIN: 					"Virheellinen muoto.",
			STRING_DOMAIN:              "Virheellinen muoto.",
			USER: 						"Virheellinen muoto.",
			NOTE: 						"Virheellinen muoto.",
			PWD: 						"Virheellinen muoto.",
			SSID: 						"Virheellinen muoto.",
			NAME:						"Virheellinen muoto.",
			ASCII_VISIBLE:				"Virheellinen muoto.",
			STRING_VISIBLE:				"Virheellinen muoto.",
			STRING_VISIBLE_NO_COMMA:    "Virheellinen muoto.",
			STRING_VISIBLE_ALLOW_BLANK: "Virheellinen muoto.",
			NAME_SPECIAL: 				"Anna 4-15 kirjainta, numeroa, - tai _.",
			VPN_NAME_PWD: 				"Anna 1-15 kirjainta, numeroa, - tai _."	
			
		},


		ERROR: {			
			"00000001":					"Virheellinen tiedostotyyppi.",
			"00000002":					"Tarkistussummavirhe.",
			"00000003":					"Tiedosto on liian suuri.",
			"00000004":					"Lähetysvirhe.",
			"00000005":					"Uudelleenkäynnistysvirhe.",
			"00000006":					"Tuntematon virhe.",
			"00000007":					"Kohde on jo olemassa. Anna joku muu.",

			"00000009":					"Käytä oletusarvoa 21 tai anna arvo väliltä 1024-65535.",
			"00000010":					"Portin tulee olla numero.",

			"00000011":					"Käyttäjätunnuksen on oltava sama kuin From-kentässä.",
			"00000012": 				"Käyttäjätunnuksen on alettava aakkosella.",

			"00000021":					"Virheellinen muoto.",

			"00000032": 				"Arvon on oltava pienempi kuin Matala.",
			"00000033": 				"Arvon on oltava pienempi kuin Keski ja Matala.",
			"00000034": 				"Virheellinen arvo, anna numero välillä 5-7200.",

			"00000039": 				"Käytä oletusarvoa 0 tai anna arvo väliltä 30-86400.",
			"00000040": 				"SSID ja MAC-osoite ovat pakollisia.",

			"00000042": 				"Käytä oletusarvoa 80 tai anna arvo väliltä 1024-65535.",

			"00000045": 				"Oletusyhdyskäytävän ja LAN-verkon IP-osoitteen tulee olla samassa aliverkossa. Syötä uudelleen.",

			"00000047": 				"IP-osoitteen ja LAN-verkon IP-osoitteen tulee olla samassa aliverkossa. Syötä uudelleen.",

			
			"00000049":					"Verkkokohde on virheellinen.",

			"00000050": 				"Virheellinen DNS-palvelimen IP-osoite. Anna toinen IP-osoite.",
			"00000051": 				"Tämä MAC-osoite on jo olemassa. Anna joku muu.",
			"00000052": 				"Tämä IP-osoite on jo olemassa. Anna joku muu.",

			"00000053": 				"Aloitusosoitteen ei saa olla suurempi kuin lopetusosoitteen. <br/>Syötä uudelleen.",

			"00000054": 				"IP-osoitevarannon ja LAN-verkon IP-osoitteen on oltava samassa aliverkossa. Syötä uudelleen.",

			"00000055": 				"IP ei voi olla sama kuin LAN-osoite.",

			"00000056": 				"Etä-IP-osoitteen ja nykyisen LAN-verkon IP-osoitteen ei saa olla samassa aliverkossa. Anna joku muu.",

			"00000057": 				"Virheellinen PSK-salasana, syötä uudelleen.",
			"00000058": 				"Virheellinen WEP-salasana, syötä uudelleen.",

			"00000059": 				"Virheellinen aliverkon peite ja LAN-verkon IP-osoite, anna oikeat tiedot.",

			"00000060": 				"WAN-verkon IP-osoitteen ja LAN-verkon IP-osoitteen ei saa olla samassa aliverkossa. <br/>Anna toinen.",

			"00000061": 				"Aloitusajan tulee olla lopetusaikaa aikaisempi.",

			"00000062": 				"Tämä kenttä on pakollinen.",
			"00000063": 				"Tämä kenttä on pakollinen.",

			"00000064": 				"Isäntälaitteen MAC-osoitetta ei voi estää.",
			"00000065": 				"Tämä kohde on ristiriidassa olemassa olevien kohteiden kanssa. Tarkista asia.",
			
			"00000066": 				"Salasanan tulee olla 8-63 merkkiä tai 64 heksadesimaalilukua pitkä.",
			"00000067": 				"Salasanan tulee olla 10 heksadesimaalilukua pitkä.",
			"00000068": 				"Salasanan tulee 5 ASCII-merkkiä pitkä.",
			"00000069": 				"Salasanan tulee olla 26 heksadesimaalilukua pitkä.",
			"00000070": 				"Salasanan tulee 13 ASCII-merkkiä pitkä.",
			"00000071": 				"Salasanan tulee olla 32 heksadesimaalilukua pitkä.",
			"00000072": 				"Salasanan tulee 16 ASCII-merkkiä pitkä.",
			"00000073": 				"Salasanan tulee alle 64 merkkiä pitkä.",

			"00000074": 				"Virheellinen tiedostotyyppi.",

			"00000075": 				"PIN-koodin pituus on oltava 8.",

			"00000076": 				"Syöte on ristiriidassa olemassa olevien kohteiden kanssa. Tarkista käynnistysportti ja käynnistysprotokolla.",
			"00000077": 				"IP-osoite ei saa olla sama kuin LAN-verkon IP-osoite.",
			"00000078": 				"Isäntälaitteen IP-osoite ei saa olla sama kuin LAN-verkon IP-osoite.",

			"00000080": 				"Salasanat eivät vastaa. Yritä uudelleen.",

			"00000088": 				"Tätä toimintoa ei sallita etähallinnassa.",
			"00000089": 				"Olet ylittänyt %num yritystä. Yritä uudelleen kahden tunnin kuluttua.",

			"00000090": 				"Kohde ei voi olla LAN-verkon IP-osoite.",
			"00000091": 				"Kohde ei voi olla WAN-verkon IP-osoite.",

			"00000092": 				"IP-osoitteen ja LAN-verkon IP-osoitteen ei saa olla samassa aliverkossa. <br/>Syötä uudelleen.",
			"00000093": 				"IP-osoitteen ja WAN-verkon IP-osoitteen ei saa olla samassa aliverkossa. <br/>Syötä uudelleen.",

			"00000094": 				"VLAN-tunnukset eivät voi olla samat.",
			"00000095": 				"Vaaditaan vähintään yksi Internet-portti.",

			"00000096": 				"Avainsana on jo olemassa.",

			"00000097": 				"2,4 GHz:n taajuusalueisiin tehdyt konfiguraatiot astuvat voimaan vasta, kun Wi-Fi-painike on ON.",
			"00000098": 				"5 GHz:n taajuusalueisiin tehdyt konfiguraatiot astuvat voimaan vasta, kun Wi-Fi-painike on ON.",
			"00000099": 				"2,4 ja 5 GHz:n taajuusalueisiin tehdyt konfiguraatiot astuvat voimaan vasta, kun Wi-Fi-painike on ON.",

			"00000100": 				"5 GHz:n verkkokokoonpano ei ole käytettävissä alueesi/maasi rajoitusten takia.",

			"00000101": 				"Langaton toiminto on poissa päältä. Jos haluat käyttää tätä toimintoa, kytke Wi-Fi-painike päälle.",
			"00000102": 				"Langaton toiminto on poissa päältä. Jos haluat käyttää tätä toimintoa, kytke Wi-Fi-painike päälle.",

			"00000103": 				"Langaton toiminto on poissa päältä. Jos haluat käyttää tätä toimintoa, kytke Wi-Fi-painike päälle.",
			"00000104": 				"Langaton toiminto on poissa käytöstä.",

			"00000105": 				"QoS ja IPTV eivät voi olla käytössä samaan aikaan.",

			"00000106": 				"IP-osoite ei saa olla sama kuin LAN-verkon IP-osoite.",
			
			"00000107": 				"Kohde on jo olemassa.",

			"00000110": 				"IP-osoitteen ja LAN-verkon IP-osoitteen tulee olla samassa aliverkossa.",
			
			"00000111": 				"QoS ja <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> eivät voi olla käytössä samaan aikaan.",
			"00000112": 				"WDS-toiminto voi toimia joko 2,4 GHz:n tai 5 GHz:n alueella. Lisäksi, vierasverkko ei ole käytettävissä WDS-alueella.",
			"00000113": 				"WDS ja vierasverkko eivät voi olla käytössä samaan aikaan.",
			"00000114": 				"Liikennetilastot ja <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> eivät voi olla käytössä samaan aikaan.",
			"00000115": 				"IPTV ja <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> eivät voi olla käytössä samaan aikaan.",

			"00000117": 				"Toimialueen nimi on jo olemassa.",
			"00000118": 				"Toimialueen nimien määrä ylittää raja-arvon.",
			"00000119":				"NAT Boost poistetaan käytöstä, kun joko <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> tai <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Liikennetilastot</a> on käytössä.",

			"00000120": 				"Salasanan tulee 5-13 ASCII-merkkiä pitkä.",
			"00000121": 				"Salasanan tulee olla 10-26 heksadesimaalilukua pitkä.",
			"00000122": 				"Käyttäjätunnus ja salasana ovat tyhjiä. Haluatko varmasti jatkaa?",
			"00000123": 				"Tallennetaan... <br/>Älä käytä tämän toiminnon aikana.",
			"00000124": 				"Reitittimen PIN-koodi on lukittu usean väärää PIN-koodia käyttävän yhdistysyrityksen takia. Luo uusi koodi.",

			"00000125": 				"QoS-sääntöjen määrä ylittää raja-arvon.",
			"00000126": 				"Tiedostokoko ylittää raja-arvon.",
			"00000127": 				"Tiedoston sisältö on virheellinen.",
			"00000128": 				"Valitse vähintään yksi sovellus.",
			"00000129": 				"Valitse vähintään yksi fyysinen portti.",
			"00000130":					"WPS-toiminto on poissa käytöstä.",
			"00000131": 				"NTP-palvelin ei saa olla silmukkaosoite.",
			"00000132": 				"Tilakytkinvirhe. Yritä uudelleen tai käynnistä reititin uudelleen.",
			"00000133": 				"Virheellinen DMZ-isäntälaitteen IP-osoite. Anna kelvollinen arvo.",
			"00000134":  				"Sisäinen IP-osoite ei kelpaa. Anna kelvollinen arvo.",
			"00000135": 				"Laitetiedostovirhe.",
			"00000136": 				"Varmuuskopiotiedostovirhe.",
			"00000137": 				"Käyttäjätunnus on tyhjä, haluatko varmasti jatkaa?",
			"00000138": 				"Salasana on tyhjä, haluatko varmasti jatkaa?",
			"00000139": 				"Virheelliset salasanan palautusparametrit.",
			"00000140": 				"Virheellinen koodi.",
			"00000141": 				"Salasanan palautus on poistettu käytöstä.",
			"00000142": 				"Koodia ei voitu lähettää. Tarkista Internet-yhteys.",
			"00000143": 				"Virheelliset sähköpostiosoitteet.",
			"00000144": 				"Virheellinen sähköpostiviesti.",
			"00000145": 				"Isäntää ei löytynyt.",
			"00000146": 				"Todennus epäonnistui.",
			"00000147": 				"Portin tulee olla välillä 1-65535.",
			"00000148": 				"Aloitusportin numeron tulee olla pienempi kuin lopetusportin numeron. Syötä uudelleen.",
			"00000149": 				"Porttinumerot ovat samat. Syötä uudelleen.",
			"00000150": 				"Virheellinen aliverkon peite ja WAN-verkon IP-osoite, anna oikeat tiedot.",
			"00000151": 				"Valitse vähintään yksi päivä.",
			"00000152": 				"Määritä Internetin käyttöaika.",
			"00000213":					"DNS-palvelimen IP-osoite ja LAN-verkon IP-osoite eivät voi olla samassa aliverkossa. <br/>Anna uusi.",
			"10000139": 				"Ei internet-yhteyttä",
			"10000140": 				"Pyyntö aikakatkaistu. Tarkista Internet-yhteys ja yritä myöhemmin uudelleen.",
			"10000158": 				"WAN-portti on irrotettu.",
			"10000159": 				"Internet-yhteyttä ei voi muodostaa. Ota yhteys palveluntarjoajaan tai yrityä uudelleen myöhennin. ",
			"10000160": 				"IP-osoitetta ei saada DHCP-palvelimelta. Tarkista WAN-yhteystyyppi ja yritä myöhemmin uudelleen.",
			"10000161": 				"PPPoE:n todennus epäonnistui. Tarkista käyttäjätunnus ja salasana.",
			"10000162": 				"Yhteyttä PPPoE-palvelimeen ei voitu muodostaa.",

			"10000164": 				"PPTP:n todennus epäonnistui. Tarkista käyttäjätunnus ja salasana.",
			"10000165": 				"Yhteyttä PPTP- palvelimeen ei voitu muodostaa.",

			"10000167": 				"L2TP-todennus epäonnistui. Tarkista käyttäjätunnus ja salasana.",
			"10000168": 				"Yhteyttä L2TP-palvelimeen ei voitu muodostaa.",
			"10000169": 				"Tuntematon virhe. Yritä myöhemmin uudelleen.",
			"10000172": 				"Yhteys epäonnistu",

			"10000185": 				"Järjestelmävirhe.",	
			"10000186": 				"Laitetiedostovirhe.",	
			"10000187": 				"Laiteohjelmiston latausvirhe.",	
			"10000188": 				"Laiteohjelmiston päivitysvirhe.",	
			"10000191": 				"Laiteohjelmistotiedoston lataus ei onnistu.",
			"10000192": 				"Laiteohjelmiston päivitysvirhe.",
			"10000193": 				"Yhteyttä palvelimeen ei voitu muodostaa.",	
			"10000194": 				"Pilvipalvelimeen ei voi muodostaa yhteyttä. Yritä uudelleen myöhemmin.",
			"10000195": 				"Et voi määrittää salasanaa uudelleen, koska et ole määrittänyt salasanaa.",
			
			"E3002":                    "Pyyntö aikakatkaistu.", 
			"E10000": 					"Yleinen virhe",
			"E20002": 					"Pyyntö aikakatkaistu.",
			"E20003": 					"Pilvipalvelin on varattu. Yritä myöhemmin uudelleen.",
			"E20107": 					"Virheellinen syöte.",
			"E20200": 					"Virheellinen sähköpostin muoto.",
			"E20502": 					"Laitetta ei voi sitoa. Yritä myöhemmin uudelleen.",
			"E20503": 					"Laitteen sidontaa ei voi purkaa. Yritä myöhemmin uudelleen.",
			"E20506": 					"Toiminnon suorittaminen epäonnistui. Tämä laite on jo sidottu toiseen pilvitiliin.",
			"E20507": 					"Tämän laitteen sidonta tiliin on purettu.",
			"E20508": 					"Sidottujen tilien kiintiö on täynnä.",
			"E20509": 					"Käyttäjätilillä ei ole oikeutta sitoa uusia käyttäjiä.",
			"E20571": 					"Tämä laite on offline.",
			"E20580": 					"Toiminnon suorittaminen epäonnistui. Tätä tiliä ei ole sidottu laitteeseen.",
			"E20600": 					"Tätä sähköpostia ei ole rekisteröity.",
			"E20601": 					"Virheellinen käyttäjätunnus tai salasana.",
			"E20602": 					"Tätä tiliä ei ole vielä aktivoitu.",
			"E20603": 					"Tämä sähköposti on jo rekisteröity.",
			"E20604": 					"Käyttäjätunnus ei kelpaa. Anna sähköpostiosoite tai puhelinnumero",
			"E20606": 					"Tilin aktivointisähköpostin lähetys ei onnistu.",
			"E20615": 					"Salasana ei kelpaa. Syötä 6-32 ASCII-merkkiä välilyöntejä lukuunottamatta.",
			"E20616": 					"Salasana ei kelpaa. Syötä 6-32 ASCII-merkkiä välilyöntejä lukuunottamatta.",
			"E20617": 					"Tätä tiliä ei ole olemassa.",
			"E20618": 					"Tätä tiliä ei ole olemassa.",
			"E20620": 					"Virheellinen kutsumanimi. Anna 1-64 merkkiä.",
			"E20661": 					"Tämä tili lukitaan 2 tunniksi liian monen kirjautumisyrityksen takia (20 kertaa puolessa tunnissa).",
			"E20662": 					"Laite on lukittu. Laite ei vastaa seuraavan 24 tunnin aikana mihinkään tarkistuskoodipyyntöön.",
			"E20671": 					"Tiliä ei voida tarkistaa.",
			"E20672": 					"Tiliä ei voida tarkistaa. Tilin aktivointilinkki on vanhentunut. Lähetä uusi pyyntö.",
			"E20673": 					"Salasanan nollauslinkki on vanhentunut. Lähetä uusi pyyntö.",
			"E20674": 					"Salasanaa ei voitu nollata.",
			"E20675": 					"Tälle tilille on kirjauduttu muualta.",
			"E22000": 					"Virheellinen syöte.",
			"E22001": 					"Verkkotunnus on jo rekisteröity.",
			"E22002": 					"Rekisteröityjen verkkotunnusten kiintiö on jo täynnä.",
			"E22003": 					"Sidottujen verkkotunnusten kiintiö on jo täynnä.",
			"E22004": 					"Tämä verkkotunnus on sidottu toiseen laitteeseen.",
			"E22006": 					"Järjestelmävirhe. Yritä myöhemmin uudelleen.",
			"E22007": 					"Verkkotunnus sisältää arkaluontoisia sanoja. Kokeile toista.",
			"E22008": 					"Verkkotunnusta ei ole olemassa.",

			"E50101": 					"WAN-portti on irrotettu.",
			"E50102": 					"Internet-yhteyttä ei voi muodostaa. Ota yhteys palveluntarjoajaan tai yritä uudelleen myöhemmin.",
			"E50103": 					"IP-osoitetta ei saada DHCP-palvelimelta. Tarkista WAN-yhteystyyppi ja yritä myöhemmin uudelleen.",
			"E50111": 					"PPPoE:n todennus epäonnistui. Tarkista käyttäjätunnus ja salasana.",
			"E50112": 					"Yhteyttä PPPoE-palvelimeen ei voitu muodostaa.",
			"E50121": 					"PPTP:n todennus epäonnistui. Tarkista käyttäjätunnus ja salasana.",
			"E50122": 					"Yhteyttä PPTP- palvelimeen ei voitu muodostaa.",
			"E50131": 					"L2TP-todennus epäonnistui. Tarkista käyttäjätunnus ja salasana.",
			"E50132": 					"Yhteyttä L2TP-palvelimeen ei voitu muodostaa.",
			"E50140": 					"Tuntematon virhe. Yritä myöhemmin uudelleen.",
			"E51215": 					"Pyyntö aikakatkaistu. Tarkista Internet-yhteys ja yritä myöhemmin uudelleen.",
			"E_CLOUD_SERVER": 			"Palvelinvirhe. Yritä uudelleen myöhemmin.",
			"E5000": 					"Pilvipalvelimeen ei saa yhteyttä.",
			"E5001": 					"Virheellinen TP-Link-tunnus (sähköposti). Tai laitteesi ei ole verkossa, ja vain valvoja (%email) voi käyttää sitä verkon ulkopuolella.",
			"E5002": 					"Virheellinen salasana."
		},

		MENU: {
			STATUS: 					"Tila",
			NETWORK: 					"Verkko",
			NETWORK_MAP: 				"Verkkokartta",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP-palvelin",
			DYNAMIC_DNS: 				"Dynaaminen DNS",
			ADVANCED_ROUTING: 			"Edistynyt reititys",

			WIRELESS: 					"Langaton yhteys",
			WIRELESS_SETTINGS: 			"Langattoman verkon asetukset",
			WDSBRIDGING: 				"WDS-välitili",
			WPS: 						"WPS",
			MACFILTERING: 				"MAC-suodatus",
			WIRE_STATISTICS: 			"Tilastotiedot",
			
			
			GUEST_NETWORK: 				"Vierasverkko",
			WIRELESS_SETTINGS: 			"Langattoman verkon asetukset",
			STORAGE_SHARING: 			"Tallennuslaitteen jakaminen",
			NAT_FORWARDING: 			"NAT-välitys",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Näennäispalvelimet",
			PORT_TRIGGERING: 			"Port Triggering",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"USB-asetukset",
			BASIC_SET: 					"Perusasetukset",
			DISK_SET: 					"Laitteen asetukset",
			FOLDER_SHARING: 			"Jaettujen resurssien käyttäminen",
			STORAGE_SHARING: 			"Tallennuslaitteen jakaminen",
			FTP_SERVER: 				"FTP-palvelin",
			MEDIA_SERVER: 				"Media-palvelin",
			PRINT_SERVER: 				"Tulostinpalvelin",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Lapsilukko",
			
			QOS:  						"QoS",
			DATABASE:  					"Tietokanta",

			STREAMBOOST: 				"Suoratoiston tehostus",
			MAP: 						"Kartta",
			SB_MAP: 					"Kartta",
			SB_BANDWIDTH:  				"Kaistanleveys",
			SB_PRIORITY: 				"Prioriteetti",
			SB_STATISTICS: 				"Tilastotiedot",

			
			SECURITY: 					"Suojaus",
			SETTINGS: 					"Asetukset",
			ACCESS_CONTROL: 			"Käytönohjaus",
			IP_MAC_BINDING: 			"IP- ja MAC-sidonta",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Järjestelmätyökalut",
			TIME_SETTINGS: 				"Aika-asetukset",
			DIAGNOSTIC: 				"Diagnostiikka",
			FIRMWARE_UPGRADE: 			"Laitteisto-ohjelmiston päivitys",
			BACKUP_RESTORE: 			"Varmuuskopiointi ja palauttaminen",
			ADMINISTRATION: 			"Valvonta",
			SYSTEM_LOG: 				"Järjestelmäloki",
			STATISTICS: 				"Liikennetilastot",
			SYSTEM_PARAMETERS: 			"Järjestelmäparametrit",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"VPN-palvelin",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"VPN-yhteydet"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Alue ja aikavyöhyke",
			INTERNET_CONNECTION_TYPE: 	"Internet-yhteystyyppi",
			WIRELESS_SETTINGS: 			"Langattoman verkon asetukset",
			SUMMARY: 					"Yhteenveto",
			SETUP_COMPLETE: 			"Yhteyden testaus",
			SETUP_COMPLETE_CLOUD: 			"TP-Link Cloud -palvelu",

			EXIT: 						"Poistu",
			NEXT: 						"Seuraava",
			SAVE: 						"Tallenna",
			FINISH: 					"Valmis",
			OK: 						"OK",
			NONE: 						"Tunnistus epäonnistui.",

			REGION: 					"Alue",
			TIME_ZONE: 					"Aikavyöhyke",

			AUTO_DETECT: 				"Automaattinen tunnistus",
			DYNAMIC_IP: 				"Dynaaminen IP-osoite",
			STATIC_IP: 					"Staattinen IP-osoite",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Jos et ole varma, mikä Internet-yhteystyyppisi on, käytä automaattista tunnistusta tai pyydä ISP:ltä apua.",

			DYNAMIC_IP_INFO: 			"Jos ISP sallii Internet-yhteyden vain tiettyyn MAC-osoitteeseen, sinun tulee kloonata kyseinen MAC-osoite, jotta muillakin laitteilla olisi yhteys. Jos et ole varma, valitse ÄLÄ kloonaa MAC-osoitetta.",
			MAC_CLONE_NO: 				"ÄLÄ kloonaa MAC-osoitetta",
			MAC_CLONE_YES: 				"Kloonaa tämän tietokoneen MAC-osoite",
			MAC_CLONE_NOTE: 			"Jos valitset kloonata MAC-osoitteen. Varmista, että ISP on rekisteröinyt tämän tietokoneen MAC-osoitteen, ennen kuin napsautat Seuraava.",

			PPPOE_INFO: 				"Anna PPPoE-käyttäjätunnus ja -salasana.",
			
			STATIC_IP_INFO: 			"Anna IP-tietosi.",

			L2TP_INFO: 					"Anna L2TP-käyttäjätunnus ja -salasana.",
			PPTP_INFO: 					"Anna PPTP-käyttäjätunnus ja -salasana.",
			
			USERNAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			SERVER_IP_ADDRESS_NAME: 	"VPN-palvelimen IP/toimialueen nimi",
			IP_ADDRESS: 				"IP-osoite",
			SUBNET_MASK: 				"Aliverkon peite",
			DEFAULT_GATEWAY: 			"Oletusyhdyskäytävä",
			PRIMARY_DNS: 				"Ensisijainen DNS",
			SECOND_DNS: 				"Toissijainen DNS",
			OPTIONAL: 					"(valinnainen)",
			
			ON: 						"Päällä",
			OFF: 						"Sammuksissa",
			WIRELESS_24GHZ: 			"Langaton 2,4GHz",
			WIRELESS_5GHZ: 				"Langaton 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Ota langaton radio käyttöön",
			NAME_SSID: 					"Langattoman verkon nimi (SSID)",

			SUMMARY_INFO1: 				"Langattomat laitteet on yhdistettävä uudelleen uuteen langattomaan verkkoon ennen <strong>Seuraava</strong> -painikkeen napsauttamista.",
			SUMMARY_INFO2: 				"Langattoman verkon nimi ja salasana on muutettu seuraavasti:",
			SUMMARY_INFO3: 				"Varmista, että olet yhteydessä uuteen langattomaan verkkoon.",

			WIRELESS_24GHZ_SSID: 		"Langattoman 2,4 GHz:n verkon nimi (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Langattoman 2,4 GHz:n verkon salasana:",
			WIRELESS_5GHZ_SSID: 		"Langattoman 5 GHz:n verkon nimi (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Langattoman 5 GHz:n verkon salasana:",

			SORRY: 						"Epäonnistui.",
			SUCCESS: 					"Onnistui!",
			TEST_INTERNET_SUCCESS_INFO: "Suorita pika-asennus loppuun valitsemalla Valmis.",

			TEST_INTERNET_FAILED_INFO_0:"Varmista, että pika-asennusparametrit ovat oikein, ja yritä uudelleen. Jos kaikki pika-asennusparametrit ovat oikein. Käynnistä modeemi uudelleen, odota 2 minuuttia ja napsauta vielä kerran Testaa Internet-yhteys. Jos et käytä modeemia, voit joutua pyytämään apua Internet-palveluntarjoajalta (ISP).",
			TEST_INTERNET_FAILED_INFO_1: "Ups... Internet-yhteyttä ei ole määritetty onnistuneesti.<br />1. Varmista, että kaikki kaapelit on kytketty kunnolla.<br />2. Napsauta Back ja tarkista, että Internet-yhteystiedot on annettu oikein.<br />3. Jos ongelma ei ratkea, ota yhteys tekniseen tukeemme.",
			SUMMARY_INFO4: 				"Valitamme! Huomaamme, että et ole yhdistänyt langatonta laitetta uudelleen uuteen langattomaan verkkoon. Tee niin ja napsauta <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Onnittelut!",
			COMPLETE_INFO_0: 			"Olet suorittanut pika-asennuksen loppuun.",
			COMPLETE_INFO_1:			"Napsauta alta Testaa Internet-yhteys ja napsauta sitten Valmis.",
			COMPLETE_INFO_2: 			"Et ole kirjautunut TP-Link Cloud -tilille. Voit kirjautua myöhemmin kohdasta Basic > TP-Link Cloud.",
			TEST_INTERNET: 				"Yhteyden testaus",

			
			RESET_USER_TITLE: 			"Määritä uusi käyttäjätunnus ja salasana",
			NEW_USERNAME: 				"Uusi käyttäjätunnus",
			NEW_PASSWORD: 				"Uusi salasana",
			CONFIRM_PASSWORD: 			"Vahvista uusi salasana",
			
			NO_ACCOUNT: 				"Eikö sinulla ole TP-Link-tunnusta?",
			REGISTER_NOW: 				"Rekisteröidy heti",
			REGISTER_SKIP: 				"Kirjaudu myöhemmin",
			LOGIN: 						"Kirjaudu sisään",
			REGISTER_NEW:				"Rekisteröi uusi tili",
			COMPLETE_INFO_EMAIL_PREFIX: "TP-Link-tunnuksesi on:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Suosittelemme, että kirjaudut tällä tilillä voidaksesi helposti hallinnoida laitetta ja muita TP-Link Cloud -toimintoja.",

			INTERNET_OK: 				"Onnittelut! Verkon määrittäminen onnistui. Nauti Internetistä.",
			CLOUD_WIZARD: 				"Voit käyttää muita TP-Link Cloud -toimintoja kirjautumalla <a class=\"link\" href=\"#\">TP-Link-tunnuksellasi</a>.",
			ACCOUNT_DESP:               "TP-Link-tunnuksella voit:", 
			ACCOUNT_DESP_SUB1:          "Käyttää laitettasi ja paikallisia palvelimia (FTP, HTTP jne.) mistä tahansa Internetin kautta",
			ACCOUNT_DESP_SUB2:          "Pitää laiteohjelmiston aina ajan tasalla Online Upgrade -toiminnolla",
	        ACCOUNT_DESP_SUB3:          "Hallinnoida useita laitteita yhdellä tilillä",
			
			CONFIRM: 					"Vahvista"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Internet-tila",

			GHZ24: 						"2,4 GHz",
			GHZ5: 						"5 GHz",
			
			CONNECTION_TYPE: 			"Yhteystyyppi",
			SECONDARY_CONN: 			"Toissijainen yhteys",

			POOR_CONNECTED: 			"Heikko yhteys",
			UNPLUGGED: 					"WAN-portti on irti.",
			
			CONNECTED: 					"Yhdistetty",
			DISCONNECTED: 				"Yhteys katkaistu",

			INTERNET_IP_ADDR: 			"IP-osoite",
			
			IP_ADDR: 					"IP-osoite",
			MAC_ADDR: 					"MAC-osoite",
			GATEWAY: 					"Yhdyskäytävä",

			AUTO: 						"Automaattinen",
			
			ROUTER: 					"Reititin",
			WIRELESS_CLIENTS: 			"Langattomat asiakaslaitteet",
			HOST_CLIENTS: 				"Isäntälaitteen asiakkaat",
			GUEST_CLIENTS: 				"Vieraslaitteen asiakkaat",
			WIRE_CLIENTS: 				"Langattoman verkon asiakkaat",
			PRINTER: 					"Tulostin",
			USB_DISK: 					"USB-levy",
			WIRELESS: 					"Langaton yhteys",
			NAME: 						"Nimi",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Kanava",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Langaton 2,4GHz",
			WIRELESS_5GHZ: 				"Langaton 5GHz",
			
			GUEST_24GHZ: 				"Vierasverkko 2,4 Ghz",
			GUEST_5GHZ: 				"Vierasverkko 5 Ghz",
			
			STATUS: 					"Tila",
			TOTAL: 						"Yhteensä",
			AVAILABLE: 					"Käytettävissä",
			GB: 						"Gt",
			BRAND: 						"Merkki",

			DYNAMIC_IP: 				"Dynaaminen IP-osoite",
			STATIC_IP: 					"Staattinen IP-osoite",
			SUBNET_MASK: 				"Aliverkon peite",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond-kaapeli",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4-tunneli",
			NONE: 						"Ei mitään"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Automaattinen tunnistus",
			INTERNET_CONN_TYPE: 		"Internet-yhteystyyppi",
			DYNAMIC_IP: 				"Dynaaminen IP-osoite",
			STATIC_IP: 					"Staattinen IP-osoite",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond-kaapeli",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"Dhcp",
			UNPLUGGED: 					"WAN-portti on irti.",
			NONE: 						"Ei mitään",
			DETECT_FAIL: 				"Automaattitunnistus epäonnistui",
			SECONDARY_CONN: 			"Toissijainen yhteys",

			DYNAMIC_YES: 				"ÄLÄ kloonaa MAC-osoitetta",
			DYNAMIC_NO: 				"Kloonaa tämän tietokoneen MAC-osoite",
			
			IP_ADDR: 					"IP-osoite",
			SUBNET_MASK: 				"Aliverkon peite",
			DEFAULT_GATEWAY: 			"Oletusyhdyskäytävä",
			PRIMARY_DNS: 				"Ensisijainen DNS",
			SECOND_DNS: 				"Toissijainen DNS",
			OPTIONAL: 					"(valinnainen)",
			USER_NAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			SERVER_IP_ADDR_NAME: 		"VPN-palvelimen IP/toimialueen nimi",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Jos et ole varma, mikä Internet-yhteystyyppisi on, käytä automaattista tunnistusta tai pyydä ISP:ltä apua."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Langattoman verkon asetukset",
			MODE_2G: 					"Langaton 2,4GHz",
			MODE_5G: 					"Langaton 5GHz",
			WIRELESS_NETWORK_NAME: 		"Langattoman verkon nimi (SSID)",
			WIRELESS_PASSWORD: 			"Salasana",
			ENABLE_WIRELESS: 			"Ota langaton radio käyttöön",
			SAVE: 						"Tallenna",
			ENCRYPTION_2G_NOTICE:		"2,4 GHz:n salaus on %s.",
			ENCRYPTION_5G_NOTICE:		"5 GHz:n salaus on %s.",
			ENCRYPTION_2G_NO: 			"2,4 GHz:n langaton verkko ei ole salattu.",
			ENCRYPTION_5G_NO: 			"5 GHz:n langaton verkko ei ole salattu.",
			ENCRYPTION_SURE: 			"Haluatko varmasti jatkaa?",

			HIDE_SSID: 					"Piilota SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Perusasetukset",
			TITIL_NEW:					"Levy ja tili",
			DISK_SET:					"Laitteen asetukset",

			SELFLY_REMOVE:				"Poista turvallisesti",
			SCANING:					"Skannataan...",
			SCAN_RESULT:				"Löytyi %n levyä",
			
			DISKS:						"Levyt",
			USERS: 						"Käyttäjätili",
			DEVICENAME: 				"Laitteen nimi",
			VOLUMN: 					"Asema",

			USBSPACE: 					"Käytetty tila",
			FREESPACE: 					"Vapaa tila",
			STATUS: 					"Tila",
			INACT: 						"Poista käytöstä",
			USAGE: 						"Käyttö",
			CAPACITY: 					"Kapasiteetti",
			OPERATION: 					"Käyttö",
			
			ACC: 						"Tilinhallinta",
			USERNAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			USE_LOGIN: 					"Käytä kirjautunutta käyttäjää",
			SCAN: 						"Skannaa",
			ENJECT_ALL: 				"Poista kaikki",
			ENJECT: 					"Poista",
			ADD_USER: 					"Lisää käyttäjä",
			AUTH: 						"Valtuudet",


			LOCATION: 					"Sijainti",
			MOBILE_ISP: 				"Mobiili-ISP",
			DIAL_NUMBER: 				"Soita numeroon",
			APN: 						"APN",
			USERNAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			MTU_SIZE: 					"MTU-koko (tavuissa)",
			OPTIONAL: 					"(valinnainen)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Lapsilukko",

			DEVICE_CTR: 				"Lapsilukituksen alaiset laitteet",
			ID: 						"Tunnus",
			DEVICE: 					"Laitteen nimi",
			MAC_ADDRESS: 				"MAC-osoite",
			TIME: 						"Internetin käyttöaika",
			DESCRIPTION: 				"Kuvaus",
			ENABLE: 					"Ota käyttöön",
			ENABLE_THIS_ENTRY: 			"Ota käyttöön",
			OPTIONAL: 					"(valinnainen)",
			BTN_VIEW: 					"Näytä olemassa olevat laitteet",
			ACCESS_DEVICES_LIST: 		"Laiteluettelo",
			OPT: 						"Käyttö",
			STATUS: 					"Tila"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Vierasverkko",
			MODE_2G: 					"Langaton 2,4GHz",
			MODE_5G: 					"Langaton 5GHz",
			WIRELESS_NETWORK_NAME: 		"Langattoman verkon nimi (SSID)",
			WIRELESS_PASSWORD: 			"Salasana",
			ENABLE_WIRELESS: 			"Ota vierasverkko käyttöön",
			SAVE:						"Tallenna",
			HIDE_SSID: 					"Piilota SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Pilvitili",
			OFFLINE_NOTE_TITLE: 		"Laite on offline",
			LOGIN_NOTE_TITLE: 			"Ups…",
			LOGIN_OFFLINE_NOTE: 		"Laite on offline. Tarkista WAN- ja verkkokokoonpano varmistaaksesi, että asetukset on syötetty oikein.",

			EMAIL: 						"Sähköposti",
			PASSWORD: 					"Salasana",
			FORGET_PASSWORD: 			"Unohditko salasanan?",

			CLOUD_WIZARD: 				"Voit käyttää muita TP-Link Cloud -toimintoja kirjautumalla <a class=\"link\" href=\"#\">TP-Link-tunnuksellasi</a>.",
			NO_ACCOUNT: 				"Eikö sinulla ole TP-Link-tunnusta?",
			REGISTER_NOW: 				"Rekisteröidy heti"
		},
		STATUS: {
			TITLE: 						"Tila",
			INTERNET:					"Internet",
			WIRELESS:					"Langaton yhteys",
			LAN:						"LAN",
			USB_TITLE:					"USB-laitteet",
			PERFORMANCE: 				"Suorituskyky",
			GUEST_NETWORK: 				"Vierasverkko",
			ACCESS_DEVICES: 			"Käytä laitteita",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2,4 GHz",
			HZ5G: 						"5 GHz",

			CONNECTION_TYPE: 			"Yhteystyyppi",

			MAC_ADDRESS: 				"MAC-osoite",
			IP_ADDRESS: 				"IP-osoite",
			RELEASE: 					"Vapauta",
			RENEW: 						"Uudista",
			
			DYNAMIC_IP: 				"Dynaaminen IP-osoite",
			STATIC_IP: 					"Staattinen IP-osoite",
			SUBNET_MASK: 				"Aliverkon peite",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond-kaapeli",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4-tunneli",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Läpivienti (Välitili)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Ei mitään",
			
			DEFAULT_GATEWAY: 			"Oletusyhdyskäytävä",
			DNS: 						"DNS-palvelin",
			MAC: 						"MAC-osoite",
			WDS_STATUS: 				"WDS:n tila",
			
			IPV6_ADDRESS: 				"IP-osoite",
			PRIMARY_DNS: 				"Ensisijainen DNS",
			SECOND_DNS: 				"Toissijainen DNS",

			RADIO: 						"Langaton radio",

			NAME_SSID: 					"Nimi (SSID)",
			NETWORK_NAME_SSID:			"Langattoman verkon nimi (SSID)",
			HIDE_SSID: 					"Piilota SSID",
			MODE: 						"Tila",
			CHANNEL: 					"Kanava",
			CHANNEL_WIDTH: 				"Kanavanleveys",
			AUTO: 						"Automaattinen",
			CURRENT_CHANNEL: 			"Nykyinen kanava",

			WDS: 						"WDS:n tila",
			WIRED_CLIENTS: 				"Langattoman verkon asiakkaat",
			WIRELESS_CLIENTS: 			"Langattomat asiakaslaitteet",

			ENABLE_DHCP: 				"Dhcp",
			LINKADDR:					"Link-local-osoite",
			ASSIGN_TYPE: 				"Määrätty tyyppi",

			ALLOW_TO_SEE_EACH: 			"Anna vieraiden nähdä toisensa",

			TOTAL: 						"Yhteensä:",
			AVAILABLE: 					"Käytettävissä:",

			USB: 						"USB-levy",
			PRINTER: 					"Tulostin",

			CPU_LOAD: 					"Suorittimen kuorma",
			MEMORY_USAGE: 				"Muistin käyttö",

			IP_ADDR_P: 					"IP-osoite:",
			MAC_ADDR_P: 				"MAC-osoite:",
			CONN_TYPE_P: 				"Yhteystyyppi:",

			DISABLED: 					"Poissa käytöstä",
			INIT: 						"Alusta",
			SCAN: 						"Skannaa",
			AUTH: 						"Vahvista",
			ASSOC: 						"Assoc",
			RUN: 						"Suorita",
			HOST: 						"Isäntä",
			GUEST: 						"Vieras",

			ON: 						"Päällä",
			OFF: 						"Sammuksissa"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Internet-yhteystyyppi",
			INTERNET_MAC_ADDRESS: 		"MAC-osoite",
			
			CONNECT: 					"Yhdistä",
			DISCONNECT: 				"Katkaise yhteys",
			
			IP_ADDR: 					"IP-osoite",
			
			USE_DEFAULT_MAC: 			"Käytä oletus-MAC-osoitetta",
			USE_COMPUTER_MAC: 			"Käytä tämän tietokoneen MAC-osoitetta",
			USE_CUSTOM_MAC: 			"Käytä mukautettua MAC-osoitetta",
			MAC_CLONE: 					"MAC-osoitteen kloonaus",
			
			CONFIG: 					"Kokoonpano",
			
			IP_ADDRESS: 				"IP-osoite",
			SUBNET_MASK: 				"Aliverkon peite",
			DEFAULT_GATEWAY: 			"Oletusyhdyskäytävä",
			
			MANUAL_DNS: 				"Manuaalinen DNS",
			PRIMARY_DNS: 				"Ensisijainen DNS",
			SECOND_DNS: 				"Toissijainen DNS",
			
			RENEW: 						"Uudista",
			RELEASE: 					"Vapauta",
			VIEW_MODE: 					"Näytä tila",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Hae dynaamisesti ISP:ltä",
			USE_FOLLOW_IP_ADDR: 		"Käytä seuraavaa IP-osoitetta",
			USE_FOLLOW_DNS_ADDR: 		"Käytä seuraavaa DNS-osoitetta",
			USE_FOLLOW_DNS_SERVER: 		"Käytä seuraavaa DNS-palvelinta",
			
			BASIC: 						"Perusasetukset",
			ADVANCED: 					"Lisäasetukset",
			
			DNS_ADDR_MODE: 				"DNS-osoite",
			MTU_SIZE: 					"MTU-koko",
			MTU_1500: 					"tavua. (Oletus on 1500, älä muuta ellei välttämätöntä.)",
			MTU_1480: 					"tavua. (Oletus on 1480, älä muuta ellei välttämätöntä.)",
			MTU_1460: 					"tavua. (Oletus on 1460, älä muuta ellei välttämätöntä.)",
			MTU_1420: 					"tavua. (Oletus on 1420, älä muuta ellei välttämätöntä.)",
			
			HOST_NAME: 					"Isännän nimi",

			HOST_NAME_CONFIRM: 			"Isäntänimi sisältää luvattomia merkkejä, jotka voivat saada järjestelmän käyttäytymään odottamattomasti. Haluatko varmasti jatkaa?",

			GET_IP_WITH_UNICAST_DHCP: 	"Hanki IP Unicast DHCP:llä (Tätä ei tavallisesti tarvita.)",
			OPTIONAL: 					"(valinnainen)",
			
			STATIC_IP: 					"Staattinen IP-osoite",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			
			INTERNET_IP_ADDR: 			"IP-osoite",
			INTERNET_DNS: 				"Internet DNS",
			SECONDARY_CONN: 			"Toissijainen yhteys",
			NONE: 						"Ei mitään",
			INTERNET_PRIMARY_DNS:		"Ensisijainen DNS",
			INTERNET_SECONDARY_DNS: 	"Toissijainen DNS",
			
			DYNAMIC_IP: 				"Dynaaminen IP-osoite",
			DYNAMIC_IP_v6: 				"Dynaaminen IP (SLAAC/DHCPv6)",
			STATIC_IP: 					"Staattinen IP-osoite",
			SERVICE_NAME: 				"Palvelun nimi",
			ACCESS_CONCENTRATOR_NAME:  	"Käytön keskittimen nimi",
			DETECT_ONLINE_INTERVAL: 	"Tunnista online-aikaväli",
			INTERVAL_TIPS: 				"sekuntia. (0-120. Oletusarvo on 10.)",
			IP_ADDR_MODE:  				"IP-osoite",
			CONN_MODE: 					"Yhteystila",
			DHCP_LINK_UNPLUGGED: 		"WAN-portti on irti.",
			
			AUTO: 						"Automaattinen",
			ON_DEMAND: 					"Tarpeen mukaan",
			TIME_BASED: 				"Aikapohjainen",
			MANUALLY: 					"Käsin",
			MAX_IDLE_TIME: 				"Suurin käyttämättömyysaika",
			MAX_IDLE_TIME_TIPS: 		"minuuttia. (0 tarkoittaa aina käytössä.)",
			PERIOD_OF_TIME: 			"Aikajakso",
			TIME_TIPS: 					"(hh:mm)",
			BIGPOND_CABLE: 				"BigPond-kaapeli",
			AUTH_SERVER: 				"Todennuspalvelin",
			AUTH_DOMAIN: 				"Vahvista toimialue",
			L2TP: 						"L2TP",
			GATEWAY: 					"Yhdyskäytävä",
			SERVER_IP_ADDR_NAME: 		"VPN-palvelimen IP/toimialueen nimi",
			PPTP: 						"PPTP",
			TO: 						"kohtaan",
			
			TUNNEL_6TO4: 				"6to4-tunneli",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Hanki vakituinen IPv6-osoite",
			GET_PREFIX_DELEGATION: 		"Hanki IPv6-etuliitteen siirto",
			IPV6_ADDR: 					"IPv6-osoite",

			GET_IPV6_WAY: 				"Hanki IPv6-osoite",
			AUTOMATICALLY: 				"Hanki automaattisesti",
			SPECIFIED_BY_ISP: 			"ISP määrittää",

			IPV6_ADDR_PREFIX: 			"IPv6-osoitteen etuliite",
			NONE_TEMPORARY: 			"Vakituinen",

			PREFIX_DELEGATION: 			"Etuliitteen siirto",
			ENABLE: 					"Ota käyttöön",
			DISABLE: 					"Poista käytöstä",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"IPv4-peitteen pituus",
			CONFIG_TYPE: 				"Määritystyyppi",
			RD6_PREFIX: 				"6RD-etuliite",
			RD6_PREFIX_LENGTH: 			"6RD-etuliitteen pituus",
			REPLY_IPV4_ADDR: 			"Border Reply IPv4-osoite",
			MANUAL: 					"Manuaalinen",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Läpivienti (Välitili)",
			LOCAL_IPV6: 				"Paikallinen IpV6-osoite",
			PEER_IPV6: 					"Vertaisjärjestelmän IpV6-osoite",
			TUNNEL_ADDR: 				"Tunnelin osoite",
			IPV4_NETMASK: 				"IPv4-verkkopeite",
			CUSTOM: 					"Mukautettu",
		    AFTR_NAME: 					"AFTR-nimi",
			PPP_SHARE_V6:				"PPPoE samassa istummossa IPv4-yhteyden kanssa",
			PPP_SHARE_V4:				"PPPoE samassa istummossa IPv6-yhteyden kanssa",

			
			
			IPV4_ADDR: 					"IPv4-osoite",
			IPV4_MASK: 					"IPv4-aliverkon peite",
			IPV4_GATEWAY: 				"IPv4-oletusyhdyskäytävä",
			TUNNEL_ADDR: 				"Tunnelin osoite",

			DUPLEX: 					"Kaksipuolinen",
			AUTO_NEGOTIATION: 			"Automaattinen neuvottelu",
			FULL_DUPLEX_1000: 			"1000 Mbps:n täysi kaksipuolisuus",
			HALF_DUPLEX_1000:			"1000 Mbps:n yksipuolisuus",
			FULL_DUPLEX_100: 			"100 Mbps:n täysi kaksipuolisuus",
			HALF_DUPLEX_100: 			"100 Mbps:n yksipuolisuus",
			FULL_DUPLEX_10: 			"10 Mbps:n täysi kaksipuolisuus",
			HALF_DUPLEX_10: 			"10 Mbps:n yksipuolisuus"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"MAC-osoite",
			IP_ADDRESS: 				"IP-osoite",
			SUBNET_MASK: 				"Aliverkon peite",
			CUSTOM: 					"Mukautettu",

			IGMP: 						"Ota IGMP-välityspalvelin käyttöön",
			

			ASSIGNED_TYPE: 				"Määrätty tyyppi",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+tilaton DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Osoitteen etuliite",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Osoite",
			DELEFATED: 					"Siirretty",
			STATIC: 					"Staattinen",
			SITE_PREFIX: 				"Sivuston etuliite",
			SITE_PREFIX_LEN: 			"Sivuston etuliitteen pituus",

			PREFIX_TYPE:  				"Sivuston etuliitteen määritystyyppi",
			LAN_IPV6_ADDR:  			"LAN IPv6-osoite",

			RELEASE_TIME: 				"Vapautusaika",
			RELEASE_TIME_TIP: 			"sekuntia. (Oletus on 86400, älä muuta ellei välttämätöntä.)",
			ADDRESS:					"Osoite",
			SAVE: 						"Tallenna",

			REBOOT_TIP: 				"Reititin siirtyy uudelle kirjautumissivulle. <br/> Odota..."

		},

		IPTV:{
			TITLE: 						"Asetukset",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Ota IPTV käyttöön", 
			MODE:  						"Tila",
			IGMP_PROXY: 				"IGMP-välityspalvelin",
			IGMP_VERSION: 				"IGMP-versio",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Välitili",
			BASIC: 						"Mukautettu",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Venäjä",
			UNIFY:  					"Malesia-Unifi",
			MAXIS:  					"Malesia-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internet",
			IP_PHONE: 					"IP-puhelin", 

			Q_TAG: 						"802.1Q-tunniste",
			ENABLE: 					"Ota käyttöön",
			
			INTERNET_VLAN_ID: 			"Internet VLAN -tunnus",
			INTERNET_VLAN_PRIORITY: 	"Internet VLAN -prioriteetti",
			IP_PHONE_VLAN_ID: 			"IP-puhelimen VLAN-tunnus",
			IP_PHONE_VLAN_PRIORITY: 	"IP-puhelimen VLAN-prioriteetti",
			IPTV_VLAN_ID: 				"IPTV:n VLAN -tunnus",
			IPTV_VLAN_PRIORITY: 		"IPTV VLAN -prioriteetti",
			IPTV_MULTI_VLAN_ID: 		"IPTV:n Multicast VLAN -tunnus",
			IPTV_MULTI_VLAN_PRIORITY: 	"IPTV Multicast VLAN -prioriteetti"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP-palvelin",
			
			SETTINGS: 					"Asetukset",

			DHCP_SERVER: 				"DHCP-palvelin",
			ENABLE_DHCP_SERVER: 		"Ota DHCP-palvelin käyttöön",

			IP_ADDR_POOL: 				"IP-osoitevaranto",
			LEASETIME: 					"Osoitteen vuokra-aika",
			LEASENOTE: 					"minuuttia. (1-2880. Oletusarvo on 120.",
			
			GATEWAY: 					"Oletusyhdyskäytävä",
			DOMAIN: 					"Oletustoimialue",
			PRIMARYDNS: 				"Ensisijainen DNS",
			SECONDARYDNS: 				"Toissijainen DNS",

			OPTIONAL: 					"(valinnainen)",

			CLIENTSLIST: 				"DHCP-asiakasluettelo",
			CLIENT_NUMBER: 				"Asiakaslaitenumero",
			CLIENT_NAME: 				"Asiakkaan nimi",
			MAC_ADDR: 					"MAC-osoite",
			ASSIGNED_IP: 				"Määrätty IP-osoite",
			LEASE_TIME: 				"Vuokra-aika",

			RESERVATION: 				"Osoitteen varaus",

			RESERVED_IP: 				"Varattu IP-osoite",
			IP_ADDRESS: 				"IP-osoite",
			DESCRIPTION: 				"Kuvaus",

			CLIENTSLIST: 				"DHCP-asiakasluettelo",
			CLIENT_NUMBER: 				"Asiakaslaitenumero",

			ENABLE: 					"Ota käyttöön",
			ENABLE_THIS_ENTRY: 			"Ota käyttöön"
			
		},

		DDNS: {
			DDNS: 						"Dynaaminen DNS",
			SERVICEPROVIDER: 			"Palveluntarjoaja",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Siirry rekisteröintiin...",
			USERNAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			DOMAIN_NAME_LIST: 			"Toimialueen nimiluettelo",
			DOMAIN_NAME: 				"Toimialue",
			LOGIN: 						"Kirjaudu sisään",
			LOGIN_SAVE: 				"Kirjaudu ja tallenna", 
			LOGOUT: 					"Kirjaudu ulos",
			STATU_SUCCESS:				"Onnistui!",
			UPDATE_INTERVAL:			"Päivitysaikaväli",
			ONE_HOUR:					"1 tunti",
			SIX_HOUR:					"6 tuntia",
			TWETEEN_HOUR:				"12 tuntia",
			ONE_DAY:					"1 päivä",
			TWO_DAY:					"2 päivää",
			THREE_DAY:					"3 päivää",
			NEVER:						"Ei koskaan",
			UPDATE:						"Päivitä",
			STATU_INCORRENT:			"Virheellinen käyttäjätunnus tai salasana.",
			STATU_ERR_DOMAIN:			"Virhe toimialueen nimessä",
			WAN_IP_BIND: 				"WAN IP-sidonta",
			CURRENT_DOMAIN: 			"Nykyinen verkkotunnus",
			REGISTER: 					"Rekisteröi",
			BIND: 						"Sido",
			UNBIND: 					"Irrota",
			TITLE: 						"DDNS ei ole käytettävissä",
			CONTENT: 					"Jotta voit käyttää erinomaista TP-Link DDNS -palveluamme, <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">kirjaudu sisään</a> TP-Link-tunnuksellasi tai valitse toinen palveluntarjoaja.",
			STATU_NO_LAUNCH:			"Ei käynnisty",
			STATU_FAIL_DDNS: 			"DDNS:n päivitys ei onnistunut.",
			STATU_FAIL_NOIP: 			"NO-IP:n päivitys ei onnistunut.",
			DISABLE: 					"Poista käytöstä",
			ENABLE: 					"Ota käyttöön",	
			STATU_NO_LAUNCH:			"DDNS:n päivitys ei onnistunut.",
			STATU_CONN:					"Yhdistetään",
			WAN_IP_BIND: 				"WAN IP-sidonta",
			TIME: 						"Rekisteröintipäivämäärä",
			BOUND: 						"Sidottu",
			FREE: 						"Ilmainen",
			SORRY: 						"Epäonnistui.",
			UNBIND_NOTE:          		"Jos haluat sitoa verkkotunnuksen %domain% laitteeseesi, pura ensin nykyisen verkkotunnuksen sidonta."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Edistynyt reititys",
			STATIC_ROUTING: 			"Staattinen reititys",

			DESTINATION_NETWORK:		"Verkkokohde",
			SUBNET_MASK: 				"Aliverkon peite",
			DEFAULT_GATEWAY: 			"Oletusyhdyskäytävä",
			DESCRIPTION: 				"Kuvaus",
			
			SYSTEM_ROUTING_TABLE: 		"Järjestelmän reititystaulukko",
			CLIENT_NUMBER: 				"Aktiivisten reittien määrä",

			GATEWAY: 					"Yhdyskäytävä",
			INTERFACE: 					"Liitäntä",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Ota käyttöön",
			ENABLE_THIS_ENTRY: 			"Ota käyttöön"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Asetukset",
			NOT_SUPPORT_5G: 			"Alue tukee ainoastaan 2,.4 GHz:iä. Varmista, että valitset oikeaan alueen.",

			REGION: 					"Alue",
			NOTICE:  					"Jotta voit käyttää langatonta toimintoa, langaton laitteisto on oltava päällä.",
			
			MODE_2G:					"2,4 GHz",
			MODE_5G:					"5 GHz",

			WIRELESS: 					"Langattoman verkon asetukset",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Ota langaton radio käyttöön",

			WIRELESS_NETWORK_NAME: 		"Langattoman verkon nimi (SSID)",
			WIRELESS_PASSWORD: 			"Salasana",
			HIDE_SSID: 					"Piilota SSID",

			SECURITY: 					"Suojaus",
			NO_SECURITY: 				"Ei suojausta",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal (suositellaan)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2-Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Versio",

			AUTO: 						"Automaattinen",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Salaus",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Tila",
			MODE_B:  					"802.11b",
			MODE_G:  					"Ainoastaan 802,11g",
			MODE_N:  					"Ainoastaan 802.11n",
			MODE_BG:  					"802.11 b/g",
			MODE_GN: 					"802.11g/n",
			MODE_BGN:  					"802.11b/g/n",

			MODE_A_5: 					"Ainoastaan 802.11a",
			MODE_AN_5: 					"802.11a/n yhdistetty",
			MODE_N_5: 					"Ainoastaan 802.11n",
			MODE_AC_5:					"Ainoastaan 802.11ac",
			MODE_NAC_5:					"802.11n/ac yhdistetty",
			MODE_ANAC_5:				"802.11a/n/ac yhdistetty",


			CHANNEL_WIDTH: 				"Kanavanleveys",
			CHANNEL: 					"Kanava",

			TRANSMIT_POWER: 			"Lähetysteho",

			RADIUS_SERVER_IP: 			"RADIUS-palvelimen IP-osoite",
			RADIUS_PORT: 				"RADIUS-portti",
			RADIUS_PASSWORD: 			"RADIUS-salasana",

			TYPE: 						"Tyyppi",
			OPEN_SYSTEM: 				"Avoin järjestelmä",
			SHARED_KEY: 				"Jaettu avain",

			KEY_SELECTED: 				"Avain valittu",
			KEY1: 						"Avain1",
			KEY2: 						"Avain2",
			KEY3: 						"Avain3",
			KEY4: 						"Avain4",

			WEP_KEY_FORMAT: 			"WEP-avaimen muoto",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Heksadesimaali",

			KEY_TYPE: 					"Avaimen tyyppi",
			BIT64: 						"64-bittinen",
			BIT128: 					"128-bittinen",
			BIT152: 					"152-bittinen",

			KEY_VALUE: 					"Avainarvo",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Matala",
			MIDDLE: 					"Keskitaso",
			HIGH: 						"Korkea"
		},

		WPS: {

			TITLE2: 					"Reitittimen PIN-koodi",
			ROUTERS_PIN_INFO: 			"Muut laitteet voivat muodostaa yhteyden tähän reitittimeen WPS:llä käyttäen reitittimen PIN-koodia.",
			ENABLE_ROUTE_PIN: 			"Reitittimen PIN-koodi",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Luo",
			DFT: 						"Oletus",

			TITLE: 						"Ohjattu WPS-toiminto",
			SELECT_SETUP: 				"Valitse asetusmenetelmä",
			PUSH_BTN: 					"Paina painiketta (suositellaan)",
			PUSH_DES: 					"Paina reitittimen fyysistä painiketta tai napsauta ohjelmiston Connect (Yhdistä) -painiketta tällä sivulla.",
			CONNECT: 					"Yhdistä",
			CANCEL: 					"Peruuta",

			RESULT_HEAD: 				"Langaton asiakas",
			RESULT_END: 				"on lisätty verkkoon.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Ei löydy",
			ENTER_CLIENT_PIN: 			"Anna asiakkaan PIN-koodi",
			SWITCH_NOTE:				"Jotta voit käyttää WPS:ää, langaton toiminto on kytkettävä ensin päälle.",
			SWITCH_NOTE2:				"Jotta voit käyttää ohjattua WPS-toimintoa, sinun tulee määrittää ensin langattomat parametrit.",
			STATUS_PIN_ERROR: 			"Onko WPS PIN virheellinen? Tarkista, onko se oikein.",
			STATUS_ERROR: 				"Virhe.",
			STATUS_CONN_ERROR: 			"Yhteys epäonnistu",
			STATUS_CONNING: 			"Yhdistetään...",
			STATUS_CANCEL: 				"Yhteys peruutettu.",
			
			NOTE: 						"Huomautus:",
			
			STATUS_CONN_OVERLAP: 		"Yhteys epäonnistui (LOMITTAINEN).",
			STATUS_CONN_TIMEOUT: 		"Yhteys epäonnistui (AIKAKATKAISU).",
			STATUS_CONN_INACT: 			"Yhteys ei ole käytössä."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Langattomat asemat verkossa",
			CLIENT_NUMBER: 				"Asiakaslaitenumero",
			MAC_ADDRESS: 				"MAC-osoite",
			CONN_TYPE: 					"Yhteystyyppi",
			SECURITY: 					"Suojaus",
			RECEIVED_PACKETS: 			"Vastaanotetut paketit",
			SEND_PACKETS: 				"Lähetyt paketit"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Asetukset",
			
			MODE_2G: 					"2,4 GHz",
			MODE_5G:					"5 GHz",
			
			ALLOW_EACH: 				"Anna vieraiden nähdä toisensa",
			
			ALLOW_LOCAL: 				"Anna vieraiden käyttää paikallsverkkoa",
			
			WIRELESS: 					"Langaton yhteys",
			WIRELESS_24G_RADIO: 		"Langaton 2,4GHz",
			WIRELESS_5G_RADIO: 			"Langaton 5GHz",
			ENABLE_GUEST: 				"Ota vierasverkko käyttöön",

			NAME_SSID: 					"Langattoman verkon nimi (SSID)",
			HIDE_SSID: 					"Piilota SSID",

			SECURITY: 					"Suojaus",
			NO_SECURITY: 				"Ei suojausta",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 – Personal",

			VERSION: 					"Versio",
			AUTO: 						"Automaattinen",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Salaus",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Salasana"
		},

		NAT:{
			SETTINGS: 					"Laitteisto-NAT",
			STATUS: 					"Laitteisto-NAT",
			
			ALG_TITLE: 					"ALG (Application Layer Gateway)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP-läpivienti",
			L2TP_ALG: 					"L2TP-läpivienti",
			IPSEC_ALG: 					"IPSec-läpivienti",

			ENABLE_FTP_ALG: 			"Ota FTP ALG käyttöön",
			ENABLE_TFTP_ALG: 			"Ota TFTP ALG käyttöön",
			ENABLE_H323_ALG: 			"Ota H323 ALG käyttöön",
			ENABLE_RTSP_ALG: 			"Ota RTSP ALG käyttöön",
			ENABLE_PPTP_ALG: 			"Ota PPTP-läpivienti käyttöön",
			ENABLE_L2TP_ALG: 			"Ota PPTPL2TP-läpivienti käyttöön",
			ENABLE_IPSEC_ALG: 			"Ota IPSec-läpivienti käyttöön",
			NAT_ENABLE_NOTICE: 			"Huomautus: Kokoonpanosi ei astu voimaan ennen kuin NAT-toiminto otetaan käyttöön."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Näennäispalvelimet",

			SERVICE_NAME: 				"Palvelun tyyppi",
			EXTERNAL_PORT: 				"Ulkoinen portti",
			INTERNAL_IP: 				"Sisäinen IP",
			INTERNAL_PORT: 				"Sisäinen portti",
			PROTOCAL: 					"Protokolla",

			BTN_VIEW: 					"Näytä olemassa olevat palvelut",

			EXSITTING_SERVICE: 			"Olemassa olevat palvelut",
			
			PROTOCAL_ALL: 				"KAIKKI",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX tai XX)",
			EXT_PORT_TIPS: 				"(XX tai XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX tai tyhjä,1-65535)",

			NOTICE:						"Ristiriidassa etähallintaportin kanssa. Haluatko varmasti jatkaa?",

			ENABLE_THIS_ENTRY: 			"Ota käyttöön",
			OPERATION: 					"Käyttö",
			CHOOSE: 					"Valitse",
			NAT_ENABLE_NOTICE: 			"Huomautus: Kokoonpanosi ei astu voimaan ennen kuin NAT-toiminto otetaan käyttöön."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Port Triggering",
			APPLICATION: 				"Käyttö",
			TRIGGER_PORT: 				"Triggering Port",
			TRIGGER_PROTOCOL: 			"Triggering-protokolla",

			EXTERNAL_PORTS: 			"Ulkoinen portti",
			EXTERNAL_PROTOCOL: 			"Ulkoinen protokolla",

			BTN_VIEW: 					"Näytä olemassa olevat sovellukset",

			EXSITTING_APPLICATION: 		"Olemassa olevat sovellukset",
			APPLICATION_NAME: 			"Sovelluksen nimi",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX tai XX-XX,1-65535,enintään 5 paria)",
			
			ENABLE_THIS_ENTRY: 			"Ota käyttöön",
			OPERATION: 					"Käyttö",
			
			PROTOCAL_ALL: 				"KAIKKI",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Huomautus: Kokoonpanosi ei astu voimaan ennen kuin NAT-toiminto otetaan käyttöön."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Ota DMZ käyttöön",
			HARDWARESTATUS: 			"DMZ-isännän IP-osoite",
			NAT_ENABLE_NOTICE: 			"Huomautus: Kokoonpanosi ei astu voimaan ennen kuin NAT-toiminto otetaan käyttöön."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"UPnP-palveluluettelo",
			CLIENT_NUMBER: 				"Asiakaslaitenumero",
			SERVICE: 					"Palvelun kuvaus",
			EXTERNAL_PORT: 				"Ulkoinen portti",
			PROTOCAL: 					"Protokolla",
			IP_ADDR: 					"Sisäinen IP-osoite",
			INTERNAL_PORT: 				"Sisäinen portti",
			NAT_ENABLE_NOTICE: 			"Huomautus: Kokoonpanosi ei astu voimaan ennen kuin NAT-toiminto otetaan käyttöön."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"3G/4G USB-modeemi",
			LOCATION: 					"Alue",
			MOBILE_ISP: 				"Mobiili-ISP",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Yhteystila",
			CONNECT_ON_DEMAND: 			"Yhdistä tarvittaessa",
			CONNECT_AUTOMATICALLY: 		"Yhdistä automaattisesti",
			CONNECT_MANUALLY: 			"Yhdistä manuaalisesti",
			MAX_IDLE_TIME: 				"Suurin käyttämättömyysaika",
			CONNECTION_TIP: 			"Nykyinen Internet-käyttö on WAN Preferred.",
			IDLE_TIME_TIP: 				"Yhteystilaa ja suurinta käyttämättömyysaikaa ei voi määrittää manuaalisesti.",
			MINUTES: 					"minuuttia. (0 tarkoittaa, että yhteys on aina päällä.)",

			AUTHENTICATION_TYPE: 		"Todennustyyppi",
			AUTO: 						"Automaattinen",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"Oletus on Auto, älä muuta ellei välttämätöntä.",

			CONNECT: 					"Yhdistä",
			DISCONNECT: 				"Katkaise yhteys",

			SET_TIP: 					"Määritä Soita numeroon, APN, Käyttäjätunnus ja Salasana manuaalisesti.",
			DIAL_NUMBER: 				"Soita numeroon",
			APN: 						"APN",
			USERNAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			OPTIONAL: 					"(valinnainen)",
			MTU_SIZE: 					"MTU-koko (tavuissa)",
			MTU_SIZE_TIP: 				"Oletus on 1480, älä muuta ellei välttämätöntä.",

			USE_FOLLOW_DNS_SERVER: 		"Käytä seuraavia DNS-palvelimia",
			PRIMARY_DNS: 				"Ensisijainen DNS",
			SECOND_DNS: 				"Toissijainen DNS",

			UNPLUGGED: 					"USB-modeemia ei ole kytketty",
			IDENTIFYING: 				"Tunnistetaan...",
			IDENTIFY_SUCCESS: 			"Tunnistus onnistui"
		},

		DISK_SETTING: {
			DISK_SET: 					"Laitteen asetukset",
			SCAN: 						"Skannaa",
			SELFLY_REMOVE: 				"Poista turvallisesti",
			SCAN_RESULT: 				"Löytyi %n levyä",
			NOT_FOUND: 					"Ei löydy",
			SELFLY_REMOVE: 				"Poista turvallisesti",
			
			VOLUMN: 					"Asema",
			CAPACITY: 					"Kapasiteetti",
			FREESPACE: 					"Vapaa tila",
			USBSPACE: 					"Käytetty tila",
			
			STATUS: 					"Tila",
			INACT: 						"Poista käytöstä",
			ACTIVE: 					"Käytössä",
			
			USAGE: 						"Käyttö",
			CAPACITY: 					"Kapasiteetti",
			OPERATION: 					"Käyttö",	
			
			ACC: 						"Tilinhallinta", 	 	
			USERNAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			USE_LOGIN: 					"Käytä kirjautunutta käyttäjää",
			SCAN: 						"Skannaa",
			ENJECT_ALL: 				"Poista kaikki",
			ENJECT: 					"Poista",
			ADD_USER: 					"Lisää käyttäjä",
			AUTH: 						"Valtuudet"
		},

		FOLDER: {
			TITLE: 						"Jakoasetukset",
			ACCOUNT_TITLE: 				"Jakotili",
			ACCOUNT:					"Tili",
			AC_NOTE: 					"Valmistele tili sisällön jakamiselle. Voit käyttää kirjautumistiliä tai luoda uuden.",
			
			AC_LOGIN: 					"Käytä oletustiliä",
			AC_FOLLOW: 					"Käytä uutta tiliä",

			USERNAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",
			CONFIRM: 					"Vahvista salasana",

			SHARING_SETTING: 			"Jakoasetukset",
			SERVER_NAME: 				"Verkon/mediapalvelimen nimi",

			METHOD: 					"Käyttömenetelmä",
			LINK: 						"Linkki",
			PORT: 						"Portti",

			NETWORK_NEIGHBORHOOD: 		"Verkkoympäristö",
			FTP: 						"FTP",
			FTPEX: 						"FTP (Internetin kautta)",

			SHARE_FOLDER: 				"Kansion jakaminen",
			SHAREING_ALL: 				"Jaa kaikki",
			NOTE:  						"Valitse On jakaaksesi kaikki tiedostot ja kansiot tai jätä Off jakaaksesi vain valitut kansiot.", 
			ENABLE_AUTHENTICATION: 		"Ota todennus käyttöön",
			SHAREING_FOLDER: 			"Kansioiden jakaminen",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Kansion polku",
			VOLUMN_NAME: 				"Aseman nimi",

			SHARE_NAME: 				"Kansion nimi",
			FOLDER_PATH: 				"Kansion polku",
			MEDIA_SHARING: 				"Median jakaminen",
			STATUS: 					"Tila",

			GUEST_ACCESS: 				"Salli vierasverkkokäyttö",
			ENABLE_AUTHENTICATION: 		"Ota todennus käyttöön",
			ENABLE_WRITE_ACCESS: 		"Ota kirjoitusoikeus käyttöön",
			ENABLE_MEDIA_SHARE: 		"Ota median jakaminen käyttöön",
			
			BROWSE: 					"Selaa",
			BROWSE_TITLE: 				"Valitse kansio",

			NO_VOLUMN:					"Ei asemaa",
			
			NOTICE: 					"Haluatko varmasti siirtyä dynaamisen DNS:n sivulle? Paina Tallenna tallentaaksesi ja siirtyäksesi. Paina Poistu poistuaksesi tallentamatta. Paina Peruuta jäädäksesi.",
			NO_CHANGE_NOTICE: 			"Haluatko varmasti siirtyä dynaamisen DNS:n sivulle?",

			SAVE_FAILED_NOTICE: 		"Tallennus epäonnistui",
			CONTINUE: 					"Poistu",
			CONTINUE_SAVE: 				"Tallenna",
			CANCLE: 					"Peruuta",

			ENABLE: 					"Ota käyttöön"

		},

		PRINT:{
			TITLE: 						"Tulostinpalvelin",
			NAME: 						"Tulostimen nimi",
			ENABLE_PRINT_SERVER: 		"Tulostinpalvelin",
			NONE: 						"Ei mitään",
			
			NOTE_TITLE: 				"Huomautus:",
			STEP1: 						"Vaihe 1:",
			STEP2: 						"Vaihe 2:",
			STEP3: 						"Vaihe 3:",

			NOTE1: 						"Asenna tulostimen ohjain tietokoneeseen",
			NOTE2: 						"Kytke USB-tulostin reitittimen USB-porttiin USB-kaapelilla.",
			NOTE3: 						"Asenna TP-Link USB Printer Controller -apuohjelma. Lataa se viralliselta sivustoltamme: <a class=\"link\" target=\"_blank\" href=\"%SUPPORT%\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Lapsilukko",
			STATUS: 					"Tila",
			UNKNOWN: 					"Tuntematon",

			DEVICE_CTR: 				"Lapsilukituksen alaiset laitteet",
			DEVICE: 					"Laitteen nimi",
			MAC_ADDRESS: 				"MAC-osoite",
			TIME: 						"Internetin käyttöaika",
			DESCRIPTION: 				"Kuvaus",
			
			ENABLE_THIS_ENTRY: 			"Ota käyttöön",
			OPTIONAL: 					"(valinnainen)",
			BTN_VIEW: 					"Näytä olemassa olevat laitteet",
			
			DEVICE_LIST: 				"Laiteluettelo",
			SYSTEM_TIME: 				"Järjestelmän kellonaika",
			
			RESTR: 						"Sisältörajoitus",
			MODE: 						"Rajoitus",
			BLACKMODE: 					"Musta lista",
			WHITEMODE: 					"Valkoinen lista",
			ACCESS_DEVICES_LIST: 		"Käytä laiteluetteloa",
			
			CHOOSE: 					"Valitse",
			ADD_A_NEW_KEYWORD: 			"Lisää uusi avainsana",
			ADD_A_NEW_DOMAIN_NAME: 		"Lisää uusi toimialueen nimi"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Internet",
			ROUTER: 					"Reititin",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Muut",

			DEVICE: 					"Laite",
			RATE: 						"Arvostele",
			APPLICATION: 				"Käyttö",

			NAME: 						"Nimi",
			MAC_ADDRESS: 				"MAC-osoite",
			IP_ADDRESS: 				"IP-osoite",


			DEVICES: 					"Laitteet"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Kaistanleveys",
			TEST_BANDWIDTH: 			">Testaa kaistanleveys",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Ota streamboost käyttöön",
			UP_LIMITATION: 				"Lähetysrajoitus (Mbps)",
			DOWN_LIMITATION: 			"Latausrajoitus (Mbps)",
			RUN_BANDWIDTH_TEST: 		"Suorita kaistanleveystesti",
			TESTING: 					"Testataan",
			TEST_FAILED: 				"Testiä ei läpäisty",
			TEST_SUCCEED: 				"Testi onnistui",
			ENABLE_AUTOMATIC_TEST: 		"Ota automaattinen testaus käyttöön",
			KEEP_UP_TO_DATE: 			"Pidä StreamBoost ajan tasalla",
			ENABLE_AUTOMATIC_UPDATE: 	"Ota automaattinen päivitys käyttöön"

		},

		PRIORITY:{
			PRIORITY: 					"Prioriteetti",
			PRIORITY_TIPS: 				"Prioriteetilla voit muuttaa yhden laitteen tärkeyttä toiseen nähden. Tästä on hyötyä, kun laitteet kilpailevat kaistanleveydestä saman luokan sovellusten kanssa.",
			ALL_DEVICE: 				"Kaikki laitteet",
			ACTIVE_DEVICE: 				"Aktiivinen laite",
			SAVE: 						"Tallenna",
			ID: 						"Tunnus",
			DEVICE: 					"Laite",
			TYPE: 						"Tyyppi",
			MAC_ADDRESS: 				"MAC-osoite",
			STICK: 						"Liitä"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Tilastotiedot",
			UP_TIME: 					"Käyttöaika",
			DOWNLOADS: 					"Lataukset",
			LAST_DAY: 					"Eilinen",
			LAST_WEEK: 					"Viime viikko",
			LAST_MONTH: 				"Viime kuu",
			ALL_LAN_HOSTS: 				"Kaikki LAN-isännät",
			OTHER: 						"Muu"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Palomuuri",
			ENABLE_SPI: 				"SPI-palomuuri",

			DOS_PROTECTION: 			"DoS-suojaus",
			ENABLE_DOS: 				"DoS-suojaus",
			
			OFF: 						"Sammuksissa",
			LOW: 						"Matala",
			MIDDLE: 					"Keskitaso",
			HIGH: 						"Korkea",

			ICMP: 						"ICMP-FLOOD-suojausten suodatus",
			UDP: 						"UDP-FLOOD-suojausten suodatus",
			TCP: 						"TCP-SYN-FLOOD-suojausten suodatus",
			ENABLE_DOS_TIP:             "DoS-suojaus ja Liikennetilastot on oltava käytössä samanaikaisesti.",

			IGNORE: 					"Ohita WAN-portin ping-paketti",
			FORBID: 					"Kiellä LAN-portin ping-paketti",

			BLOCK_DOS: 					"Estettyjen DoS-isäntien luettelo",
			HOST_NUMBER: 				"Isännän numero",
			IP_ADDRESS: 				"IP-osoite",
			MAC_ADDRESS: 				"MAC-osoite"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Käytönohjaus",
			ENABLE_ACCESS: 				"Käytönohjaus",

			ACCESS_MODE: 				"Käyttötila",
			DEFAULT_ACCESS_MODE: 		"Oletuskäyttötila",
			BLACK_LIST: 				"Musta lista",
			WHITE_LIST: 				"Valkoinen lista",
			
			WIRED:						"Langallinen",
			WIRELESS:					"Langaton yhteys",

			DEVICE_ONLINE: 				"Verkon laitteet",
			NAME: 						"Laitteen nimi",
			IP_ADDRESS: 				"IP-osoite",
			MAC_ADDRESS: 				"MAC-osoite",
			CONN_TYPE: 					"Yhteystyyppi",

			BLOCK: 						"Estä",

			DEVICE_IN_WHITE: 			"Valkoisen listan laitteet",
			DEVICE_IN_BLACK: 			"Mustan listan laitteet"
		},

		IP_MAC:{
			TITLE: 						"Asetukset",
			ENABLE_ARP: 				"ARP-sidonta",

			ARP_LIST: 					"ARP-luettelo",
			ARP_NUM: 					"ARP-syötenumero",

			MAC_ADDRESS: 				"MAC-osoite",
			IP_ADDRESS: 				"IP-osoite",
			BOUND: 						"Sidottu",
			UNBOUND: 					"Sitomaton",

			BINDING_LIST: 				"Sidontaluettelo",
			DESCRIPTION: 				"Kuvaus",
			OPTIONAL: 					"(valinnainen)",
			ENABLE_THIS_ENTRY: 			"Ota käyttöön"
		},

		TIMESET: {
			TITLE: 						"Aika-asetukset",
			ZONE: 						"Aikavyöhyke",
			DATE: 						"Päivämäärä",
			DATEFORMAT: 				"KK/PP/VVVV",
			TIME: 						"Aika",
			TIMEFORMAT: 				"(TT/MM/SS)",
			NTP1: 						"NTP-palvelin 1",
			NTP2: 						"NTP-palvelin II",
			OPTIONAL: 					"(valinnainen)",

			CURRENT_TIME:  				"Nykyinen aika",
			SET_TIME: 					"Aseta aika",
			AUTOMATIC: 					"Hanki automaattisesti Internetistä",
			MANUAL: 					"Käsin",
			AUTOMATIC_BTN: 				"Hanki",


			GETGMT: 					"Hanki GMT",

			
			GETGMT_SUCCESS: 			"Ajan hankkiminen NTP-palvelimelta onnistui",
			GETGMT_TIMEOUT: 			"Ajan hankkiminen NTP-palvelimelta aikakatkaistiin",
			GETGMT_WAIT: 				"Odotetaan",
			
			M: 							"K",
			W: 							"V",
			D: 							"P",
			H: 							"T",
			
			DAYLIGHT_SAVING: 			"Kesäaika",
			ENABLE_DAYLIGHT: 			"Ota kesäaika käyttöön",
			START: 						"Aloita",
			END: 						"Lopeta",

			RUNNING_STATUS: 			"Suoritustila",
			DOWN: 						"Kesäaika ei toimi",
			UP: 						"Kesäaika toimii"
		},

		DIAG:{
			TITLE: 						"Diagnostiikka",
			DIAGNOSTIC_TOOL: 			"Diagnoosityökalu",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"IP-osoite/toimialueen nimi",
			COUNT: 						"Ping-määrä",
			
			BASIC: 						"Perusasetukset",
			ADVANCED: 					"Lisäasetukset",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Ping-paketin koko",
			PKTUNIT: 					"(4-1472 tavua)",

			TIMEOUT: 					"Ping-aikakatkaisu",
			TIMOUTUNIT: 				"(100-2000 millisekuntia)",

			TTL: 						"Traceroute Max TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Aloita",
			STOP: 						"Lopeta"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Laiteohjelmistosi on ajan tasalla",
			TITLE: 						"Laitteisto-ohjelmiston päivitys",
			INFO: 						"Laitetiedot",
			REMOTE_TITLE: 				"Online-päivitys",
			LOCAL_TITLE: 				"Paikallinen päivitys",

			NEWFILE: 					"Uusi laiteohjelmistotiedosto",
			FIRMWAREVERSION: 			"Laiteohjelmaversio",
			HARDWAREVERSION: 			"Laitteistoversio",
			LATESTVERSION: 				"Viimeisin versio",
			CONFIRM_CONTENT:			"Haluatko päivittää laiteohjelmiston?",
			WARNING:					"Laiteohjelmistoa päivitetään... <br/> Vaurioiden välttämiseksi pidä reititin päällä äläkä käytä sitä laiteohjelmistopäivityksen aikana.",
			REBOOTING: 					"Käynnistyy uudelleen... <br/> Vaurioiden välttämiseksi pidä reititin päällä äläkä käytä sitä laiteohjelmistopäivityksen aikana.",
			DO_NOT_OPERATE: 			"Laiteohjelmistoa päivitetään... <br/> Vaurioiden välttämiseksi pidä reititin päällä äläkä käytä sitä laiteohjelmistopäivityksen aikana.",
			FIRMWARE_UPDATING_NOTE: 	"1. Laiteohjelmistoa päivitetään...<br/> Vaurioiden välttämiseksi pidä reititin päällä äläkä käytä sitä laiteohjelmistopäivityksen aikana.",
			REBOOTING_NOTE: 			"2. Käynnistetään uudestaan...<br/> Vaurioiden välttämiseksi pidä reititin päällä äläkä käytä sitä laiteohjelmistopäivityksen aikana.",
			SCREEN_UPDATING_NOTE: 		"3. Näyttöä päivitetään...<br/> Vaurioiden välttämiseksi pidä reititin päällä äläkä käytä sitä laiteohjelmistopäivityksen aikana.",
			UPGRADE_FAILED: 			"Päivitys epäonnistui.",
			UPGRADE: 					"Päivitä",
			CHECK: 						"Tarkista",
			DOWNLOADING: 				"Ladataan...<br/> Vaurioiden välttämiseksi pidä reititin päällä äläkä käytä sitä laiteohjelmistopäivityksen aikana.",
			UPGRADE_INOF: 				"Pidä reititin käynnissä välttyäksesi vauriot.",
			NOTE: 						"Huomautus:",
			NO_UPGRADE: 				"Tämä on uusin versio",

			UPGRADING: 					"Päivitetään...<br/> Vaurioiden välttämiseksi pidä reititin päällä äläkä käytä sitä laiteohjelmistopäivityksen aikana.",
			RETRY: 						"Yritä uudelleen",
			CANCEL: 					"Peruuta",
			ILEGAL_DEVICE:              "Laitetta ei voi tunnistaa. Ota yhteys TP-Linkin tekniseen tukeen.",
			UPGRADE_FAIL: 				"Päivitys ei onnistu. Yritä uudelleen myöhemmin.",
            CONFIG_RESET_NOTE:          "Nykyiset asetukset menetetään tähän versioon päivitettäessä.",
			CHECK_UPGRADE: 				"Tarkista päivityksen saatavuus"
		},

		BACKUP:{
			BACKUP: 					"Varmuuskopiointi",
			BACKUPTIP: 					"Tallenna kopio nykyasetuksista.",

			RESTORE: 					"Palauta",
			RESTORETIP: 				"Palauta tallennetut asetukset tiedostosta.",
			
			RESTORE_WARN:				"Reititintä palautetaan... <br/>Älä käytä laitetta tämän aikana.",
			RESTORE_CONFIRM_CONTENT: 	"Haluatko varmasti palauttaa reitittimen varmuuskopiointitiedostosta?",
			
			FILE: 						"Tiedosto",

			FACTORY: 					"Tehdasasetusten palautus",
			FACTORYTIP: 				"Palauta kaikki kokoonpanoasetukset oletusarvoihin.",
			RESETTIP:					"Palauta kaikki kokoonpanoasetukset oletusarvoihin lukuunottamatta kirjautumistietoja ja pilvitilin tietoja.",
			FACTORY_CONFIRM_CONTENT:	"Haluatko varmasti palauttaa reitittimen tehdasasetuksiin?",
			FACTORY_WARN:				"Reititintä palautetaan... <br/>Älä käytä laitetta tämän aikana.",
			
			BACKUPBTN: 					"Varmuuskopiointi",
			RESTOREBTN: 				"Palauta",
			RESETBTN:					"Palauta",
			FACTORYBTN: 				"Tehdasasetusten palauttaminen"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Tilinhallinta",
			
			OLDUSER: 					"Vanha käyttäjätunnus",
			OLDPWD: 					"Vanha salasana",

			NEWUSER: 					"Uusi käyttäjätunnus",
			NEWPWD: 					"Uusi salasana",
			CONFIRM: 					"Vahvista uusi salasana",

			RECOVERYINFO: 				"Salasanan palauttaminen",
			ENABLE_PASSWORD_RECOVERY: 	"Ota salasanojen palautus käyttöön",
			FROM: 						"Mistä",
			TO: 						"Mihin",
			SMTP_SERVER: 				"SMTP-palvelin",
			
			ENABLE_AUTHENTICATION: 		"Ota todennus käyttöön",
			USERNAME: 					"Käyttäjätunnus",
			PASSWORD: 					"Salasana",

			TEST_MAIL: 					"Testaa posti",

			LOCAL:						"Paikallinen hallinta",
			LOCAL_MAC_AUTH: 			"Paikallinen MAC-todennus",
			ACCESS: 					"Pääsy kaikille LAN-verkkoon yhdistetyille laitteille",
			ACCESS_TIPS: 				"Kytke On ottaaksesi käyttöön kaikkien LAN-verkon laitteiden hallinnan tai Off ottaaksesi käyttöön tietyn laitteen hallinnan.",
			
			MAC_ADDRESS: 				"MAC-osoite",
			VIEW_BTN: 					"Näytä olemassa olevat laitteet",
			DESCRIPTION: 				"Kuvaus",

			EXIST_DEVICE:               "Olemassa olevat laitteet",

			OPTIONAL: 					"(valinnainen)",
			ENABLE_THIS_ENTRY: 			"Ota käyttöön",

			DEVICE_NAME:				"Laitteen nimi",
			IP_ADDRESS:					"IP-osoite",
			

			REMOTE: 					"Etähallinta",
			DISABLE_REMOTE_MANAGEMENR: 	"Poista etähallinta käytöstä",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Ota etähallinta käyttöön kaikille laitteille",
			ENABLE_REMOTE_MANAGEMENR: 	"Ota etähallinta käyttöön tietyille laitteille",
			WEB: 						"Verkkohallintaportti",

			NOTICE:						"Ristiriidassa virtuaalipalvelimen portin kanssa! Haluatko varmasti jatkaa?",

			REMOTEIP: 					"Etähallinnan IP-osoite",
			REMOTEIPNOTE: 				"(Syötä kaikkiin 255.255.255.255)"
			
		},

		SYSLOG:{
			TITLE: 						"Järjestelmäloki",
			LOG_FILTER: 				"Lokisuodatin:",
			
			TYPE_EQ: 					"Tyyppi=",
			
			ALL: 						"KAIKKI",

			FIREWALL: 					"Palomuuri", 
			NAT: 						"NAT",
			DDNS: 						"Dynaaminen DNS",
			UPNP:						"UPnP",
			IMB:            			"IP- ja MAC-sidonta",
			IPTV:						"IPTV",
			DHCPS:						"DHCP-palvelin",
			IGMP_PROXY:					"IGMP-välityspalvelin",
			DOMAIN_LOGIN:				"Toimialueen kirjautuminen",
			BASIC_SECURITY: 			"Perussuojaus",
			PARENTAL_CONTROL: 			"Lapsilukko",
			ACCESS_CONTROL: 			"Käytönohjaus",
			DOS_PROTECTION: 			"DoS-suojaus",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Liikennetilastot",
			TIME_SETTINGS: 				"Aika-asetukset",
			ACCOUNT_MANAGEMENT: 		"Tilinhallinta",
			LOCAL_MANAGEMENT: 			"Paikallinen hallinta",
			REMOTE_MANAGEMENT: 			"Etähallinta",
			LOCALE: 					"Paikka",
			FACTORY_RESET: 				"Tehdasasetusten palautus",
			LED_CONTROLLER: 			"Led-ohjain",
			NETWORK: 					"Verkko",
			USBSHARE: 					"USB-osuus",
			AND: 						"ja",
			LEVEL: 						"Taso",
			EMERGENCY:					"HÄTÄ-",
			ALERT:						"ILMOITUS",
			CRITICAL:					"KRIITTINEN",
			ERROR: 						"VIRHE",
			WARNING: 					"VAROITUS",
			NOTICE: 					"HUOMAUTUS",
			INFO: 						"INFO",
			DEBUG: 						"VIRHEENKORJAUS",

			INDEX: 						"Hakemisto",
			TYPE: 						"Tyyppi",
			TIME: 						"Aika",
			LEVEL_COL:					"Taso",

			CONTENT: 					"Lokin sisältö",
			
			MAIL_LOG: 					"Postiloki",
			SAVE_LOG: 					"Tallenna loki",

			SEND_OK: 					"Lähetys OK",
			SEND_FAILED: 				"Lähetys epäonnistui",

			MAIL_SETTING: 				"Postiasetukset",

 			FROM: 						"Mistä",
 			TO: 						"Mihin",
 			SMTP_SERVER: 				"SMTP-palvelin",
 			ENABLE_AUTHENTICATION: 		"Ota todennus käyttöön",

 			USERNAME: 					"Käyttäjätunnus",
 			PASSWORD: 					"Salasana",
 			CONFIRM_PASSWORD: 			"Vahvista salasana",

 			AUTO_MAIL: 					"Ota automaattinen posti käyttöön",
 			LOG_AT: 					"Kirjaudu kohteeseen",
 			HH_MM: 						"(TT:MM) joka päivä",

 			LOG_EVERY: 					"Kirjaa joka",
 			HOURS: 						"tuntia"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Asetukset",
			STATUS: 					"Ota QoS käyttöön",
			UPBANDWIDTH: 				"Lähetyskaistanleveys",
			DOWNBANDWIDTH: 				"Latauskaistanleveys",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Nopeustesti",
			RULE_LIST: 					"QoS-sääntöluettelo",
			RULE: 						"QoS-sääntö",
			ID: 						"Tunnus",
			NAME: 						"Nimi",
			TYPE: 						"Tyyppi",
			DETAIL: 					"Yksityiskohta",
			PRIORITY: 					"Prioriteetti",

			APPLICATION: 				"Käyttö",
			APPLICATION_LIST: 			"Ohjelmaluettelo",
			CUSTOM_APP: 				"Mukautettu sovellus",
			MAC_ADDR: 					"MAC-osoite",
			MAC_ADDR_P: 				"Mac:",
			IP_ADDR: 					"IP-osoite",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Fyysinen portti",

			LOW: 						"Matala",
			MIDDLE: 					"Keskitaso",
			HIGH: 						"Korkea",

			PROTO: 						"Protokolla",
			PORT: 						"Portti",
			PROTO_P: 					"Protokolla:",
			PORT_P: 					"Portti:",
			PORT_TIPS: 					"(XX tai XX-XX,1-65535,enintään 5 paria)",

			ALL: 						"KAIKKI",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP tai UDP:",
			CUSTOM: 					"Mukautettu",

			WIFI_HOME: 					"WIFI-ISÄNTÄ",
			WIFI_GUEST: 				"WIFI-VIERAS",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Tietokannan päivitys",

			NEWFILE: 					"Uusi tietokantatiedosto",
			FIRMWAREVERSION: 			"Tietokannan versio",
			CONFIRM_CONTENT:			"Haluatko varmasti päivittää tietokannan?",
			WARNING:					"Tietokantaa päivitetään... <br/>Älä käytä laitetta tämän aikana.",
			
			UPGRADE: 					"Päivitä",

			SERVICE_RESTART: 			"QoS-palvelu käynnistyy uudelleen",
			
			TYPE: 						"Tyyppi",
			BY_DEVICE: 					"Laitteen mukaan",
			BY_APP: 					"Sovelluksen mukaan",
			BY_PHY: 					"Fyysisen portin mukaan",

			HIGH_PRIORITY_LBL: 			"Suuri prioriteetti:",
			MIDDLE_PRIORITY_LBL: 		"Keskitason prioriteetti:",
			LOW_PRIORITY_LBL: 			"Alhainen prioriteetti:",

			HIGH_PRIORITY: 				"Suuri prioriteetti",
			MIDDLE_PRIORITY: 			"Keskitason prioriteetti",
			LOW_PRIORITY: 				"Alhainen prioriteetti"

		},

		APPLICATION:{
			APP_LIST: 					"Ohjelmaluettelo",
			GAME_LIST: 					"Peliluettelo",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Liikennetilastot",
			ENABLE_STATISTICS: 			"Liikennetilastot",

			TITLE: 						"Liikennetilastoluettelo",
			IP_MAC: 					"IP-osoite/Mac-osoite",
			TPKT: 						"Paketteja kaikkiaan",
			TBYTE: 						"Tavuja kaikkiaan",
			CPKT: 						"Nykyiset paketit",
			CBYTE: 						"Nykyiset tavut",
			CICMP: 						"Nykyinen ICMP Tx",
			CUDP: 						"Nykyinen UDP Tx",
			CSYN: 						"Nykyinen SYN Tx",
			
			DELETE_CONFIRM: 			"Haluatko varmasti poistaa liikennetilastot?",
			DELETE_ALL_CONFIRM: 		"Haluatko varmasti poistaa kaikki liikennetilastot?",

			RESET_ALL: 					"Palauta kaikki"
		},

		SYSPARA:{
			W24G: 						"Langaton 2,4GHz",
			W5G: 						"Langaton 5GHz",
			SWITCH_NOTICE:  			"Langaton toiminto on poissa päältä. Jos haluat käyttää tätä toimintoa, kytke Wi-Fi-painike päälle.",

			ENABLE_TIPS: 				"Langaton toiminto on poissa käytöstä.",

			BEACON: 					"Jäljitysväli",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS-kynnys",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Pirstoutuneisuuskynnys",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM-aikaväli",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Ryhmäavaimen päivitysika",
			GROUPUNIT: 					"sekuntia",
			
			
			WMM_FEATURE: 				"WMM-ominaisuus",
			WMM: 						"Ota WMM käyttöön",

			GI_FEATURE: 				"Lyhyt GI -ominaisuus",
			GI: 						"Ota lyhyt GI käyttöön",

			AP_FEATURE: 				"AP-eristysominaisuus",
			AP: 						"Ota AP-eristys käyttöön",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Ota TxBF käyttöön",

			WDS_FEATURE: 				"WDS-välitili",
			WDS: 						"Ota WDS-välitili käyttöön",
			
			SSID_BRIDEGE: 				"SSID (välitili luotava)",
			SURVEY: 					"Kysely",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC-osoite",
			SSID: 						"SSID",
			SIGNAL: 					"Signaali",
			CHANNEL: 					"Kanava",
			SECURITY: 					"Suojaus",
			CHOSEN: 					"Valittu",
			AP_NUMBER:					"AP-numero",

			TOTAL: 						"Yhteensä",

			MAC: 						"MAC-osoite (välitili luotava)",
			MACUNIT: 					"Esimerkki: 00-1D-0F-11-22-33",

			SECURITY: 					"Suojaus",
			NO: 						"Ei",
			NONE: 						"Ei suojausta",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Salasana",
			
			AUTH_TYPE: 					"Todennustyyppi",
			AUTO: 						"Automaattinen",
			OPEN: 						"Avoin järjestelmä",
			SHARED: 					"Jaettu avain",

			WEP_INDEX: 					"WEP-indeksi",
			KEY1: 						"Avain1",
			KEY2: 						"Avain2",
			KEY3: 						"Avain3",
			KEY4: 						"Avain4",

			WEP_KEY_FORMAT: 			"WEP-avaimen muoto",
			ASC: 						"ASCII",
			HEX: 						"Heksadesimaali",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Ota WPS käyttöön",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Ota NAT käyttöön",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"Ota NAT Boost käyttöön",
			
			MEDIA_SERVER: 				"Media-palvelin",
			SCAN_INTERVAL: 				"Automaattinen skannausväli (tuntia)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"DoS-suojaustason asetukset",

			ICMP: 						"ICMP-FLOOD-pakettitaso",
			UDP: 						"UDP-FLOOD-pakettitaso",
			TCP: 						"TCP-FLOOD-pakettitaso",

			WDS_MODE: 					"WDS-tila",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Matala",
			MIDDLE: 					"Keskitaso",
			HIGH: 						"Korkea",

			TO: 						"kohtaan",
			NOTICE_NAT_REBOOT: 			"Käynnistyy uudelleen... <br/>Älä käytä uudelleenkäynnistyksen aikana.",

			NOTICE_NAT_BOOST: 			"NAT Boostin muuttaminen saa laitteen käynnistymään uudelleen. Haluatko varmasti jatkaa?",
			NOTICE:						"Reitittimesi kanava ei ole sama kuin välitilillisen AP:n kanava. Haluatko muuttaa sitä?",

			UNIT: 						"(5-7200) pakettia/s",
			LED: 						"Merkkivalo",
			NIGHT_MODE: 				"Yötila",
			PERIOD_NIGHT_TIME: 			"Yötila-aika",
			ENABLE: 					"Ota yötila käyttöön",
			HH_MM: 						"(hh:mm)",
			NIGHT_MODE_NOTE:            "LED sammutetaan. Jos haluat käyttää tätä toimintoa, napsauta sivun oikeassa yläkulmassa olevaa LED:iä.",
			NOTE2:                      "Yötila-aika alkaa reitittimen järjestelmäajan mukaisesti. Varmista, että olet määrittänyt reitittimen ajan."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Tällä hetkellä ei sertifikaattia, <b>tuota</b> sertifikaatti ennen VPN-palvelimen käyttöönottoa.",
			NO_CERT_NOTE2: 				"Tällä hetkellä ei sertifikaattia, <b>tuota</b> sertifikaatti ennen kokoonpanon vientiä.",
			ENABLE_VPN_SERVER: 			"Ota VPN-palvelin käyttöön",
			SERVICE_TYPE: 				"Palvelun tyyppi",
			SERVICE_PORT: 				"Palveluportti",
			VPN_SUBNET: 				"VPN:n aliverkon/verkon peite",
			CLIENTS_ACCESS: 			"Asiakaspääsy",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Vain kotiverkko",
			INTERNET_HOME: 				"Internet ja kotiverkko",
			CERT_STR: 					"Tällä hetkellä ei sertifikaattia, napsauta OK luodaksesi sertifikaatti ja tallenna kokoonpano.",
			CERT_STR2: 					"Tällä hetkellä ei sertifikaattia, napsauta OK luodaksesi sertifikaatti ja vie kokoonpano.",
			CONF_FILE: 					"Määritystiedosto", 
			EXPORT_CONF_FILE: 			"Vie kokoonpano.",
			EXPORT: 					"Vie",

			INSTALL_GUIDE: 				"VPN-asiakkaan asennusopas",
			INSTALL_STEP: 				"Asiakaslaitteiden käyttöönotto ja yhdistäminen OpenVPN-palvelimeen:",
			INSTALL_NOTICE:				"Ennen kuin määrität OpenVPN-palvelimen, määrtä dynaaminen DNS-palvelin (suositellaan) tai määrää WAN-portille staattinen IP-osoite. Ja varmista, että järjestelmän aika on oikea.",
			INSTALL_NOTE1: 				"Valitse Ota VPN-palvelin käyttöön.",
			INSTALL_NOTE2: 				"Ennen kuin määrität OpenVPN-palvelimen, määrtä dynaaminen DNS-palvelin (suositellaan) tai määrää WAN-portille staattinen IP-osoite. Varmista myös, että NAT-asetusten ulkoinen portti ei ole palveluportti ja että DMZ on poissa käytöstä ja että järjestelmän aika on oikea.",
			INSTALL_NOTE3: 				"Tallenna kokoonpanotiedosto napsauttamalla Vie.",
			INSTALL_NOTE4: 				"Lataa ja asenna asiakaslaitteisiin OpenVPN-asiakasohjelma osoitteesta <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Tuetut ympäristöt ovat Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Käynnistä OpenVPN-asiakasohjelma ja lisää uusi VPN-yhteys käyttäen tallennettua kokoonpanotiedostoa yhdistääksesi asiakaslaitteen VPN-palvelimeen.",
			NOTE: 						"Lisätietoja OpenVPN-asiakkaista on osoitteessa <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Asiakkaan IP-osoite",
			ACCOUNT_USERNAME: 			"Käyttäjätunnus",
			ACCOUNT_PASSWORD: 			"Salasana",
			CLIENT_IP_NOTE: 			"(enintään 10 asiakasta)",
			SAME_SUBNET_NOTE: 			"Asiakaslaitteen IP-osoite ja LAN-verkon IP-osoite eivät saa olla samassa aliverkossa.",
			CONFLICT_WITH_DHCP: 		"Asiakaslaitteen IP-osoite on ristiriidassa DHCP IP-osoiteryhmän kanssa.",
			CONFLICT_WITH_RESERVED: 	"Asiakaslaitteen IP-osoite on ristiriidassa varatun IP-osoitteen kanssa.",
			CONFLICT_WITH_OPENVPN: 		"Asiakaslaitteen IP-osoite ja OpenVPN-verkon IP-osoite eivät saa olla samassa aliverkossa.",
			SAME_SUBNET_NOTE2: 			"VPN:n aliverkon/verkon peite ja LAN-IP-osoite eivät saa olla samassa aliverkossa.",
			CONFLICT_WITH_DHCP2: 		"VPN:n aliverkon/verkon peite on ristiriidassa DHCP IP-osoiteryhmän kanssa.",
			CONFLICT_WITH_RESERVED2: 	"VPN:n aliverkon/verkon peite on ristiriidassa varatun IP-osoitteen kanssa.",
			CONFLICT_WITH_PPTPVPN: 		"VPN:n aliverkon/verkon peite ja PPTP VPN:n IP-osoite eivät saa olla samassa aliverkossa.",
			VPN_MASK_ERROR: 			"Verkon peite ei voi olla suurempi kuin 255.255.255.248.",
			ACCOUNT_LIST: 				"Tililuettelo (enintään 16 käyttäjää)",
			ADVANCED_SETTING: 			"Lisäasetukset",
			ALLOW_SAMBA: 				"Salli Samba (Network Place) -käyttö",
			ALLOW_NETBIOS: 				"Salli NetBIOS-läpilasku",
			ALLOW_UNENCRYPTED_CONN: 	"Salli salaamattomat yhteydet",
			USERNAME_CONFLICT: 			"Tämä käyttäjätunnus on jo olemassa.",
			
			CONNECT_PPTP: 				"Asiakaslaitteiden käyttöönotto ja yhdistäminen PPTP VPN -palvelimeen:",
			CONNECT_NOTICE:				"Ennen kuin määrität PPTP VPN -palvelimen, määrtä dynaaminen DNS-palvelin (suositellaan) tai määrää WAN-portille staattinen IP-osoite. Varmista myös, että NAT-asetusten ulkoinen portti ei ole 1723 ja että DMZ on poissa käytöstä ja että järjestelmän aika on oikea.",
			CONNECT_NOTE1: 				"Valitse Ota VPN-palvelin käyttöön.",
			CONNECT_NOTE2: 				"Määritä PPTP VPN -palvelimen parametrit ja napsauta Tallenna.",
			CONNECT_NOTE3: 				"Luo asiakaslaitteissa PPTP VPN -yhteys. Tuetut ympäristöt ovat Windows, Mac OSX, Linux, iOS ja Android.",
			CONNECT_NOTE4: 				"Käynnistä PPTP VPN -ohjelma, lisää uusi yhteys ja anna rekisteröidyn DDNS-palvelun WAN-portin toimialueen nimi tai staattinen IP-osoite yhdistääksesi asiakaslaitteen PPTP VPN -palvelimeen.",
			
			GENERATE_CERT: 				"Sertifikaatti",
			GENERATE_NEW_CERT: 			"Luo sertifikaatti.",
			GENERATE: 					"Luo",
			GENERATE_TIPS: 				"Sertifikaattia luodaan...<br/>Tähän menee muutama minuutti, odota.",
			CERT_SUCCESS: 				"Onnistui",
			CERT_FAIL: 					"Ei onnistunut. Yritä uudelleen.",
			
			VPN_CONNECTIONS: 			"VPN-yhteydet",
			OPEN_VPN_CONNECTIONS: 		"OpenVPN-yhteys",
			PPTP_VPN_CONNECTIONS: 		"PPTP VPN -yhteys",
			USER:				"Käyttäjä",
			REMOTE_IP:			"Etä-IP",
			ASSIGNED_IP:			"Määrätty IP"
		}
	};
})(jQuery);

