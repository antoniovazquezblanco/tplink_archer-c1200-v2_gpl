(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			EMAIL: 						"E-Mail",
			FORGET_PASSWORD: 			"Zabudli ste heslo?",
			LOGIN: 						"Prihlásiť sa",
			BEGIN: 						"Začíname",
			IMPORTANT_UPDATE_INFO: 		"Ak sa zabránilo konfliktu so zariadením front-end, IP adresa vášho smerovača bola aktualizovaná na ",
			CONTINUE: 					"Pokračovať",

			IMPORTANT_NOTICE: 			"Dôležité upozornenie",
			OR: 						", naozaj chcete pokračovať v návšteve",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Stlačte a podržte tlačidlo Reset počas %SECONDS% sekúnd a uvediete smerovač do stavu továrenských nastavení.",
			FORGET_PASSWORD_INFO_1: 	"Ak je zapnutá funkcia Obnovenia hesla. Na určenú e-mailovú adresu bude odoslaný verifikačný kód na opätovné nastavenie mena a hesla.",
			FORGET_PASSWORD_SEND_FAILED:"Odoslanie kódu zlyhalo! Skontrolujte svoje internetové pripojenie.",

			VERIFICATION_CODE: 			"Overovací kód",

			RECEIVE_CODE: 				"Odoslať kód",

			CONFIRM: 					"Potvrdiť",
			WELCOME: 					"Vitajte v zariadení TP-Link %model%. Prihláste sa, prosím.",
			SEC: 						"s",

			USER_CONFLICT: 				"Prihlasovací konflikt!",
			FIRST_TIME: 				"Nastavte si najskôr zariadenie %PRODUCT% na pripojenie na internet. Začnite tým, že vytvoríte heslo zariadenia na správu zariadenia %PRODUCT%.",
			FIRST_TIME1: 				"Vytvorte, prosím, administrátorské heslo pre správu vášho zariadenia %model%.",
			USER_CONFLICT_INFO: 		"Používateľ %USER% s hostiteľom %HOST% (%IP%/%MAC%) je práve pripojený na smerovač.",
			USER_CONFLICT_INFO_2: 		"Používateľ %USER% (%IP%) je práve pripojený na smerovač.",
			USER_CONFLICT_INFO_3: "V jednej chvíli sa môže prihlásiť iba jedno zariadenie. Chcete pokračovať a vynútiť odhlásenia iného zariadenia?",
			
			LOGIN_FAILED: 				"Prihlásenie zlyhalo!",
			LOGIN_FAILED_COUNT: 		"Prihlásenie zlyhalo %num1 krát a vám zostalo ešte %num2 pokusov.",
			NO_COOKIE: 					"Aby ste sa mohli prihlásiť, musíte mať povolené súbory cookie.", 

			FORGET_PASSWORD_NOTE: 		"Ak ste nenakonfigurovali funkciu Obnovenia hesla. Môžete stlačiť a podržať tlačidlo Reset počas %SECONDS% sekúnd a uvediete smerovač do stavu továrenských nastavení."
		},
		INIT: {
			PASSWORD: 					"Heslo",
			CONFIRM_PASSWORD:				"Potvrdiť heslo",
			BEGIN: 						"Začíname",
			IMPORTANT_UPDATE_INFO: 		"V záujme predídenia konfliktu s klientským zariadením bola IP adresa vášho smerovača aktualizovaná na",
			CONTINUE: 					"Ďalší",

			IMPORTANT_NOTICE: 			"Dôležité upozornenie",
			OR: 						", naozaj chcete pokračovať v návšteve",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Potvrdiť",

			SEC: 						"s",

			USER_CONFLICT: 				"Konflikt pri prihlásení!",
			
			USER_CONFLICT_INFO: 		"Používateľ %USER% s hostiteľom %HOST% (%IP%/%MAC%) je momentálne prihlásený na smerovači. Nemôžete sa prihlásiť zároveň s ním. Skúste to znova neskôr.",
			USER_CONFLICT_INFO_2: 		"Používateľ %USER% (%IP%) je momentálne prihlásený na smerovači. Nemôžete sa prihlásiť zároveň s ním. Skúste to znova neskôr.",
			
			LOGIN_FAILED: 				"Prihlásenie sa nepodarilo!",
			LOGIN_FAILED_COUNT: 		"Prihlásenie zlyhalo %num1 krát a vám zostalo ešte %num2 pokusov.",
			NO_COOKIE: 					"Aby ste sa mohli prihlásiť, musíte mať povolené súbory cookie.", 

			INIT_NOTE_TITLE: 			"Vážený zákazník,",
			INIT_NOTE_CONTENT: 			"Nastavte si najskôr zariadenie %PRODUCT% na pripojenie na internet. Začnite tým, že vytvoríte heslo zariadenia na správu zariadenia %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Verzia firmvéru",
			FEATURE: 						"Úpravy a opravy chýb: ",
			TITLE: 							"Zistila sa dostupná aktualizácia firmvéru.",
			UPGRADE_NOW: 					"Aktualizovať teraz",
			REMIND: 						"Pripomenúť neskôr",
			NOTICE:    						"Dobrý deň, je k dispozícii nový firmvér pre váš smerovač.",
			NEVER: 							"Ignorovať túto verziu"
			
		},

		WAN_ERROR: {
			TITLE: 							"Chyba pripojenia WAN!",
			STATUS: 						"Stav",
			INFO: 							"Informácie",
			SETUP: 							"Nastavenie pripojenia na Internet",
			NEVER: 							"Znovu už nepripomínať"
		},

		OFFLINE_ERROR:{
			TITLE: "Jejda... Cloudový server nie je dostupný.",
			NOTE1: "1. Ubezpečte sa, či máte prístup na Internet.",
			NOTE2: "2. Cloudový server je dočasne neprístupný. Obnovte, prosím, túto stránku neskôr.",
			NOTE3: "3. Ak problém stále pretrváva, pripojte sa, prosím k <a target=\"_blank\" id=\"support\">TP-Link technickej podpore</a>.",
			ERROR: "Chyba"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Verzia firmvéru",
			HARDWARE_VERSION: 				"Verzia hardvéru",
			HELP_SUPPORT: 					"Podpora",
			FAQ: 							"Často kladené otázky",
			CONFIRM_REBOOT: 				"Naozaj chcete reštartovať smerovač?",
			CONFIRM_LOGOUT: 				"Naozaj sa chcete odhlásiť?",
			UPGRADE_ALERT_1: 				"Aktuálny firmware nepodporuje TP-Link cloud služby. Dôrazne odporúčame stiahnuť najnovšiu firmware na www.tp-link.com a aktualizovať ho.",
			UPGRADE_ALERT_2: 				"Aktuálny firmware nepodporuje TP-Link cloud služby. Dôrazne odporúčame aktualizovať firmvér kliknutím na ikonu Aktualizovať v pravom hornom rohu.",
			ACCOUNT_UNLOGIN: 				"Účet",

			REBOOTING: 						"Reštartovanie ...  <br/> Prosím, nevykonávajte žiadne operácie počas reštartovania.",

			HELP_APP: 					"Aplikácia",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Pre stiahnutie aplikácie TP-Link Tether naskenujte QR kód",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Pohodlne spravujte Vašej sieť z akéhokoľvek mobilného zariadenia.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Kompletné ovládanie z dlane Vašej ruky."
		},

		NAV: {
			QUICK_SETUP: 				"Rýchle nastavenie",
			BASIC: 						"Základné",
			ADVANCED: 					"Pokročilé"
		},

		CONTROL: {
			LOGIN: 						"Prihlásiť sa",
			LOGOUT: 					"Odhlásiť",
			UPDATE: 					"Aktualizovať",
			REBOOT: 					"Reštart",
			LED: 						"LED",
			LED_ON: 					"LED Zap.",
			LED_OFF: 					"LED Vyp.",
			LED_DISABLED: 				"LED stav nemôže byť zmenený v priebehu nočnej prevádzky"
		},

		LANGUAGE: {
			EN_US: 						"Angličtina",
			ZH_CN: 						"slovenský"
		},

		REGION: {
			ALBANIA: 					"Albánsko",
			ALGERIA: 					"Alžírsko",
			AMERICAN_SAMOA: 			"Americká Samoa",
			ARGENTINA: 					"Argentína",
			ARMENIA: 					"Arménsko",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Austrália",
			AUSTRIA: 					"Rakúsko",
			AZERBAIJAN: 				"Azerbajdžan",
			BAHAMAS: 					"Bahamy",
			BAHRAIN: 					"Bahrajn",
			BANGLADESH: 				"Bangladéš",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Bielorusko",
			BELGIUM: 					"Belgicko",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Bermudy",
			BOLIVIA: 					"Bolívia",
			BOSNIA_HERZEGOWINA: 		"Bosna a Hercegovina",
			BRAZIL: 					"Brazília",
			BRUNEI_DARUSSALAM: 			"Brunej",
			BULGARIA: 					"Bulharsko",
			CAMBODIA: 					"Kambodža",
			CANADA: 					"Kanada",
			CAYMAN_ISLANDS: 			"Kajmanie ostrovy",
			CHILE: 						"Čile",
			CHINA: 						"Čínska ľudová republika",
			COLOMBIA: 					"Kolumbia",
			COSTA_RICA: 				"Kostarika",
			CROATIA: 					"Chorvátsko",
			CYPRUS: 					"Cyprus",
			CZECH_REPUBLIC: 			"Česká republika",
			DENMARK: 					"Dánsko",
			DOMINICAN_REPUBLIC: 		"Dominikánska republika",
			ECUADOR: 					"Ekvádor",
			EGYPT: 						"Egypt",
			EL_SALVADOR: 				"Salvádor",
			ESTONIA: 					"Estónsko",
			ETHIOPIA: 					"Etiópia",
			FAEROE_ISLANDS: 			"Faerské ostrovy",
			FINLAND: 					"Fínsko",
			FRANCE: 					"Francúzsko",
			FRENCH_GUIANA: 				"Francúzska Guyana",
			FRENCH_POLYNESIA: 			"Francúzska Polynézia",
			GEORGIA: 					"Gruzínsko",
			GERMANY: 					"Nemecko",
			GREECE: 					"Grécko",
			GREENLAND: 					"Grónska",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hongkong",
			HUNGARY: 					"Maďarsko",
			ICELAND: 					"Island",
			INDIA: 						"India",
			INDONESIA: 					"Indonézia",
			IRAN: 						"Irán",
			IRAQ: 						"Irak",
			IRELAND: 					"Írsko",
			ISRAEL: 					"Izrael",
			ITALY: 						"Taliansko",
			JAMAICA: 					"Jamajka",

			JAPAN: 						"Japonsko",
			JAPAN_1: 					"Japonsko 1",
			JAPAN_2: 					"Japonsko 2",
			JAPAN_3: 					"Japonsko 3",
			JAPAN_4: 					"Japonsko 4",
			JAPAN_5: 					"Japonsko 5",
			JAPAN_6: 					"Japonsko 6",

			JORDAN: 					"Jordánsko",
			KAZAKHSTAN: 				"Kazachstan",
			KENYA: 						"Keňa",

			NORTH_KOREA: 				"Severná Kórea",
			KOREA_REPUBLIC: 			"Kórejská republika",
			KOREA_REPUBLIC_3: 			"Kórejská republika 3",

			KUWAIT: 					"Kuvajt",
			LATVIA: 					"Lotyšsko",
			LEBANON: 					"Libanon",
			LIBYA: 						"Líbya",
			LIECHTENSTEIN: 				"Lichtenštajnsko",
			LITHUANIA: 					"Litva",
			LUXEMBOURG: 				"Luxembursko",
			MACAU: 						"Macao",
			MACEDONIA: 					"Macedónsko",
			MALAWI: 					"Malavi",
			MALAYSIA: 					"Malajzia",
			MALDIVES: 					"Maldivy",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinik",
			MAURITIUS: 					"Maurícius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Mexiko",
			MONACO: 					"Monako",
			MONGOLIA: 					"Mongolsko",
			MOROCCO: 					"Maroko",
			NEPAL: 						"Nepál",
			NETHERLANDS: 				"Holandsko",
			NETHERLANDS_ANTILLES: 		"Holandské Antily",

			NEW_ZEALAND: 				"Nový Zéland",
			NICARAGUA: 					"Nikaragua",
			NIGERIA: 					"Nigéria",
			NORWAY: 					"Nórsko",
			NORTHERN_MARIANA_ISLANDS: 	"Severné Mariány",
			OMAN: 						"Omán",
			PAKISTAN: 					"Pakistan",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua-Nová Guinea",
			PARAGUAY: 					"Paraguaj",
			PERU: 						"Peru",
			PHILIPPINES: 				"Filipíny",
			POLAND: 					"Poľsko",
			PORTUGAL: 					"Portugalsko",
			PUERTO_RICO: 				"Portoriko",
			QATAR: 						"Katar",
			REUNION: 					"Réunion",
			ROMANIA: 					"Rumunsko",
			RUSSIA: 					"Rusko",
			RWANDA: 					"Rwanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Saudská Arábia",
			SINGAPORE: 					"Singapur",
			SLOVAK_REPUBLIC: 			"Slovenská republika",
			SLOVENIA: 					"Slovinsko",
			SOUTH_AFRICA: 				"Juhoafrická republika",
			SPAIN: 						"Španielsko",
			SRI_LANKA: 					"Srí Lanka",
			SURINAME: 					"Surinam",
			SWEDEN: 					"Švédsko",
			SWITZERLAND: 				"Švajčiarsko",
			SYRIA: 						"Sýria",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tanzánia",
			THAILAND: 					"Thajsko",
			TRINIDAD_TOBAGO: 			"Trinidad a Tobago",
			TUNISIA: 					"Tunisko",
			TURKEY: 					"Turecko",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ukrajina",
			UNITED_ARAB_EMIRATES: 		"Spojen arabské emiráty",
			UNITED_KINGDOM: 			"Spojené kráľovstvo",
			UNITED_STATES: 				"Spojené štáty americké",
			URUGUAY: 					"Uruguaj",
			UZBEKISTAN: 				"Uzbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnam",
			VIRGIN_ISLANDS: 			"Americké Panenské Ostrovy",
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
			M_INDONESIA:                                                  "Indonézia",
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
			M_LUXEMBOURG:                                                 "Luxembursko",
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
			ENIWETOK: 					"(UTC-12:00) Eniwetok, Kwajalein", 
			MIDWAY_ISLAND_SAMOA: 		"(UTC-11:00) Midwayské ostrovy, Samoa",
			HAWAII: 					"(UTC-10:00) Havaj",
			ALASKA: 					"(UTC-09:00) Aljaška",
			PACIFIC_TIME: 				"(UTC-08:00) PT",
			MOUNTAIN_TIME: 				"(UTC-07:00) MT (časti Kanady a Spojených štátov amerických",
			CENTRAL_TIME: 				"(UTC-06:00) CT (časti Kanady a Spojených štátov amerických)",
			EASTERN_TIME: 				"(UTC-05:00) ET (časti Kanady a Spojených štátov amerických)",
			CARACAS:					"(UTC-04:30) Caracas",
			ATLANTIC_TIME: 				"(UTC-04:00) AT (Kanada)",
			NEWFOUNDLAND: 				"(UTC-03:30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(UTC-03:00) Brazília, Buenos Aires",
			MID_ATLANTIC: 				"(UTC-02:00) Stredoatlantický čas",
			AZORES_CAPE_VERDE_IS: 		"(UTC-01:00) Azory, Kapverdy",
			GREENWICH_MEAN_TIME: 		"(UTC) Dublin, Londýn",
			BERLIN_STOCKHOLM: 			"(UTC+01:00) Berlín, Štokholm, Rím, Bern, Brusel",
			ATHENS_HELSINKI: 			"(UTC+02:00) Atény, Helsinki, Východná Európa, Izrael",
			BAGHDAD_KUWAIT: 			"(UTC+03:00) Bagdad, Kuvajt, Nairobi, Rijád, Moskva",

			TEHERAN: 					"(UTC+03:30) Teherán",

			ABU_DHABI: 					"(UTC+04:00) Abú Zabí, Muscat, Kazaň, Volgograd",

			KABUL: 						"(UTC+04:30) Kábul",

			ISLAMABAD_KARACHI: 			"(UTC+05:00) Islamabád, Karáči, Jekaterinburg",

			MADRAS_CALCUTTA: 			"(UTC+05:30) Chennai, Kalkata, Bombaj, Naí Dillí",
			KATMANDU: 					"(UTC+05:45) Káthmandu",

			ALMA_ATA_DHAKA: 			"(UTC+06:00) Alma-Ata, Dháka",
			RANGOON: 					"(UTC+06:30) Rangún",

			BANGKOK_JAKARTA_HANOI: 		"(UTC+07:00) Bangkok, Jakarta, Hanoj",
			BEIJING_HONGKONG: 			"(UTC+08:00) Peking, Hongkong, Perth, Singapur",
			TOKYO_OSAKA_SAPPORO: 		"(UTC+09:00) Tokio, Osaka, Sapporo, Soul, Jakutsk",

			ADELAIDE: 					"(UTC+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(UTC+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(UTC+11:00) Magadan, Šalamúnove ostrovy, Nová Kaledónia",
			FIJI_KAMCHATKA: 			"(UTC+12:00) Fidži, Kamčatka, Auckland",
			NUKU: 						"(UTC+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Aplikácia",
			GAME:						"HRA",
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
			DAY: 						"Deň",

			MONDAY: 					"Pondelok",
			TUESDAY: 					"Utorok",
			WEDNESDAY: 					"Streda",
			THURSDAY: 					"Štvrtok",
			FRIDAY: 					"Piatok",
			SATURDAY: 					"Sobota",
			SUNDAY: 					"Nedeľa",
			
			MON: 						"Po.",
			TUES: 						"Ut.",
			WED: 						"St..",
			THUR: 						"Št.",
			FRI: 						"Pi.",
			SAT: 						"So.",
			SUN: 						"Ne.",

			JAN: 						"Jan.",
			FEB: 						"Feb.",
			MAR: 						"Mar.",
			APR: 						"Apr.",
			MAY: 						"Máj",
			JUN: 						"Jún",
			JUL: 						"Júl",
			AUG: 						"Aug.",
			SEP: 						"Sep.",
			OCT: 						"Okt.",
			NOV: 						"Nov.",
			DEC: 						"Dec."

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
			"1ST": 						"Prvý",
			"2ND": 						"2",
			"3RD": 						"3",
			"4TH": 						"4",
			"5TH": 						"Posledný",
			"1ST_": 					"1",

			TH: 						"."
		},

		GRID: {
			CLIENT_NUMBER: 				"Číslo klienta",

			ID: 						"ID",
			MODIFY: 					"Modifikovať",
			STATUS: 					"Stav",
			ENABLE: 					"Zapnúť",

			OPERATION: 					"Prevádzka",
			CHOOSE: 					"Zvoliť",
			DESCRIPTION: 				"Popis",
			

			AUTO_REFRESH: 				"Automatické obnovenie",
			REFRESH: 					"Obnoviť",
			NUMBER: 					"Číslo",
			ENABLED: 					"Zapnuté",
			DISABLED: 					"Vypnuté",
			ACTIVE: 					"Aktívne",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Pridať",
			CHOOSE: 					"Zvoliť",
			EDIT: 						"Upraviť",
			DELETE: 					"Odstrániť",
			DELETE_ALL: 				"Odstrániť všetky",
			REMOVE: 					"Odstrániť",
			RESET: 						"Resetovať",
			RESET_ALL: 					"Resetovať všetko",
			DETECT: 					"Zistiť",
			ENABLE: 					"Zapnúť",
			DISABLE: 					"Vypnúť",
			CLEAR: 						"Vymazať",

			REFRESH: 					"Obnoviť",
			SEARCH: 					"Prebieha vyhľadávanie...",
			BROWSE: 					"Prehľadávať",

			SAVE: 						"Uložiť",
			BACK: 						"Späť",

			PREV: 						"Späť",
			NEXT: 						"Ďalší",
			FINISH: 					"Dokončiť",
			
			ON: 						"Zap",
			OFF: 						"Vyp",
			LOW: 						"Nízky",
			MIDDLE: 					"Stredný",
			HIGH: 						"Vysoký",
			
			OK: 						"OK",
			CANCEL: 					"Zrušiť",

			YES: 						"Áno",
			NO: 						"Nie",
			
			CONNECTED: 					"Pripojené",
			CONNECTING: 				"Prebieha pripájanie",
			DISCONNECTING: 				"Prebieha odpájanie",
			DISCONNECTED: 				"Nepripojené",

			PASSWORD_HINT: 				"Heslo",
			FILEBUTTONTEXT: 			"Prehľadávať",
			FILEBLANKTEXT: 				"Vyberte si súbor.",
			NOSELECTEDTEXT: 			"Vyberte si možnosti.",

			ADD_A_NEW_KEYWORD: 			"Pridať nové kľúčové slovo",

			SUCCESSED: 					"Úspech!",
			FORM_SAVED: 				"Uložené",
			FORM_FAILED: 				"Test zlyhal",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Uložené",
			GRID_FAILED: 				"Test zlyhal",
			GRID_NONE_SELECT: 			"Zvoľte, prosím, aspoň jeden záznam.",
			GRID_DELETE_COMFIRM: 		"Naozaj chcete odstrániť tieto položky?",
			GRID_DELETE_ALL_COMFIRM: 	"Naozaj chcete odstrániť všetky položky?",
			GRID_MAX_RULES: 			"Prekročili ste maximálny počet položiek.",
			KEYWORD_MAX_OVERFLOW: 		"Počet kľúčových slov prekročil povolený limit.",

			NOTE: 						"Poznámka:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Neplatný formát.",
			BLANKTEXT: 					"Toto pole sa vyžaduje.",

			EMAIL: 						"Neplatný formát emailu.",
			NUMBER: 					"Neplatný formát.",

			NUMBER_MIN: 				"Neplatná hodnota. Zadajte číslo väčšie než %min.",
			NUMBER_MAX: 				"Neplatná hodnota. Zadajte číslo menšie než %max.",

			NUMBER_MIN_MAX: 			"Neplatná hodnota. Zadajte číslo od %min do %max.",
			HEX: 						"V tomto poli by malo byť hexadecimálne číslo.",

			IP: 						"Neplatný formát.",

			IP_NO_ALL_ZERO:				"Adresa by nemala byť 0.0.0.0.",
			IP_NO_LOOP:					"IP Adresa by nemala byť loopback adresa.",
			IP_NO_D_TYPE:				"IP Adresa by nemala byť triedy D.",
			IP_NO_E_TYPE:				"IP Adresa by nemala byť triedy E.",
			IP_NO_ALL_ONE:				"Adresa by nemala byť 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"Adresa by nemala začínať číslom 255.",
			IP_NO_FIRST_ZERO:			"Adresa by nemala začínať číslom 0.",
			MASK_NO_ALL_ONE:			"Maska nemôže byť v tvare 255.255.255.255.",

			IPV6: 						"Neplatný formát.",
			IPV6_NOT_GLOBAL:			"Neplatný formát.",
			IPV6_NOT_PREFIX:			"Neplatný formát.",
			IP_DOMAIN: 					"Neplatný formát.",
			IPV6_DOMAIN: 				"Neplatný formát.",
			MAC: 						"Neplatný formát.",
			MULTI_MAC:					"Neplatný formát.",
			DATE: 						"Neplatný formát.",
			DATE_INVALID: 				"Zadajte dátum medzi 1.1.1970 a 31.12.2030",
			MASK: 						"Neplatný formát.",
			DOMAIN: 					"Neplatný formát.",
			STRING_DOMAIN:              "Neplatný formát.",
			USER: 						"Neplatný formát.",
			NOTE: 						"Neplatný formát.",
			PWD: 						"Neplatný formát.",
			SSID: 						"Neplatný formát.",
			NAME:						"Neplatný formát.",
			ASCII_VISIBLE:				"Neplatný formát.",
			STRING_VISIBLE:				"Neplatný formát.",
			STRING_VISIBLE_NO_COMMA:    "Neplatný formát.",
			STRING_VISIBLE_ALLOW_BLANK: "Neplatný formát.",
			NAME_SPECIAL: 				"Prosím, zadajte 4-15 písmen, čísel alebo znaky - _.",
			VPN_NAME_PWD: 				"Prosím, zadajte 1-15 písmen, čísel alebo znaky - _."	
			
		},


		ERROR: {			
			"00000001":					"Neplatný typ súboru.",
			"00000002":					"Chyba kontrolného súčtu.",
			"00000003":					"Súbor je príliš veľký.",
			"00000004":					"Chyba pri odovzdávaní.",
			"00000005":					"Chyba pri reštartovaní.",
			"00000006":					"Neznáma chyba.",
			"00000007":					"Táto položka už existuje. Zadajte inú.",

			"00000009":					"Použite predvolenú hodnotu 21, alebo zadajte hodnotu od1024 do 65535.",
			"00000010":					"Port by mal byť zadaný číslom.",

			"00000011":					"Meno by malo byť zhodné s hodnotou Od.",
			"00000012": 				"Meno musí začínať znakom abecedy.",

			"00000021":					"Neplatný formát.",

			"00000032": 				"Hodnota musí byť nižšia, než pre nízku.",
			"00000033": 				"Hodnota musí byť nižšia, než pre strednú a nízku.",
			"00000034": 				"Neplatná hodnota, zadajte číslo medzi 5 a 7200.",

			"00000039": 				"Použite predvolenú hodnotu 0, alebo zadajte hodnotu od 30 do 86400.",
			"00000040": 				"Vyžaduje sa SSID a MAC adresa.",

			"00000042": 				"Použite predvolenú hodnotu 80, alebo zadajte hodnotu od1024 do 65535.",

			"00000045": 				"Predvolená brána a IP adresa siete LAN by mali byť v rovnakej podmaske. Zadajte inú.",

			"00000047": 				"Fond IP adries a IP adresa LAN by mali byť v tej istej podsieti, zadajte ju znova.",

			
			"00000049":					"Cieľová sieť je neplatná.",

			"00000050": 				"Zlá IP adresa servera DNS. Zadajte inú IP adresu.",
			"00000051": 				"Táto MAC adresa už existuje. Zadajte inú.",
			"00000052": 				"Táto IP adresa už existuje. Zadajte inú.",

			"00000053": 				"Počiatočná adresa by nemala byť vyššia než koncová adresa. <br/>Zadajte ich znova.",

			"00000054": 				"Fond IP adries a IP adresa LAN by mali byť v tej istej podsieti, zadajte ju znova.",

			"00000055": 				"IP nemôže byť rovnaké k adrese LAN.",

			"00000056": 				"Vzdialená IP adresa a aktuálna IP adresa LAN by nemali byť v rovnakej podsieti. Zadajte inú.",

			"00000057": 				"Neplatné heslo PSK, zadajte ho znova.",
			"00000058": 				"Neplatné heslo WEP, zadajte ho znova.",

			"00000059": 				"Neplatná maska podsiete a adresa IP LAN, zadajte platnú.",

			"00000060": 				"IP adresa WAN a IP adresa LAN by nemali byť na rovnakej podsieti. <br/>Zadajte inú.",

			"00000061": 				"Čas začiatku by mal nastať skôr než čas konca.",

			"00000062": 				"Toto pole sa vyžaduje.",
			"00000063": 				"Toto pole sa vyžaduje.",

			"00000064": 				"Nie je možné blokovať hostiteľskú MAC adresu.",
			"00000065": 				"Táto položka je v konflikte s existujúcimi položkami, skontrolujte ju..",
			
			"00000066": 				"Heslo by malo mať 8 až 63 znakov alebo 64 hexadecimálnych číslic.",
			"00000067": 				"Heslo by malo mať 10 hexadecimálnych číslic.",
			"00000068": 				"Heslo by malo mať 5 ASCII znakov.",
			"00000069": 				"Heslo by malo mať 26 hexadecimálnych číslic.",
			"00000070": 				"Heslo by malo mať 13 ASCII znakov.",
			"00000071": 				"Heslo by malo mať 32 hexadecimálnych číslic.",
			"00000072": 				"Heslo by malo mať 16 ASCII znakov.",
			"00000073": 				"Heslo by malo mať menej než 64 znakov.",

			"00000074": 				"Neplatný typ súboru.",

			"00000075": 				"Dĺžka PIN by mala byť 8.",

			"00000076": 				"Položka je v konflikte s existujúcimi položkami, skontrolujte spúšťací port a spúšťací protokol.",
			"00000077": 				"IP adresa nemôže rovnaká ako IP adresa siete LAN.",
			"00000078": 				"Hostiteľská IP adresa sa nemôže zhodovať s IP adresou LAN.",

			"00000080": 				"Heslá sa nezhodujú. Skúste to znova.",

			"00000088": 				"Táto operácia sa nesmie uskutočňovať pri vzdialenej správe.",
			"00000089": 				"Prekročili ste %num pokusov, skúste sa prihlásiť znova o dve hodiny.",

			"00000090": 				"Cieľovou hodnotou by nemala byť IP adresa LAN.",
			"00000091": 				"Cieľovou hodnotou by nemala byť IP adresa WAN",

			"00000092": 				"IP adresa a IP adresa siete LAN by nemali byť rovnaké podsieti. <br/>Zadajte inú.",
			"00000093": 				"IP adresa a IP adresa siete WAN by nemali byť rovnaké podsieti. <br/>Zadajte inú.",

			"00000094": 				"Identifikácie Vlan ID sa nemôžu zhodovať.",
			"00000095": 				"Je vyžadovaný aspoň jeden Internetový port.",

			"00000096": 				"Kľúčové slovo už existuje.",

			"00000097": 				"Konfigurácie frekvenčných pásiem 2,4 GHz sa prejavia až po tom, čo bude zapnuté tlačidlo WiFi.",
			"00000098": 				"Konfigurácie frekvenčných pásiem 5 GHz sa prejavia až po tom, čo bude zapnuté tlačidlo WiFi.",
			"00000099": 				"Konfigurácie frekvenčných pásiem 2,4GHz a 5 GHz sa prejavia až po tom, čo bude zapnuté tlačidlo WiFi.",

			"00000100": 				"Konfigurácia 5 GHz siete nie je dostupná kvôli obmedzeniam vo vašej oblasti/krajine.",

			"00000101": 				"Vaša funkcia bezdrôtového pripojenia je vypnutá. Ak chcete túto funkciu používať, zapnite ju tlačidlom WiFi",
			"00000102": 				"Vaša funkcia bezdrôtového pripojenia je vypnutá. Ak chcete túto funkciu používať, zapnite ju tlačidlom WiFi",

			"00000103": 				"Vaša funkcia bezdrôtového pripojenia je vypnutá. Ak chcete túto funkciu používať, zapnite ju tlačidlom WiFi",
			"00000104": 				"Funkcia bezdrôtového pripojenia je vypnutá.",

			"00000105": 				"Funkcie QoS a IPTV nie je možné zapnúť naraz.",

			"00000106": 				"IP adresa nemôže byť rovnaká ako IP adresa siete LAN.",
			
			"00000107": 				"Cieľová adresa už existuje.",

			"00000110": 				"IP adresa a IP adresa LAN by mali byť na rovnakej podsieti.",
			
			"00000111": 				"Funkcie QoS a <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a>  nie je možné zapnúť naraz.",
			"00000112": 				"Funkcia WDS môže fungovať v pásme 2,4 GHz alebo 5 GHz. Funkcia WDS nie je dostupná pre bezdrôtovú siet pre hostí.",
			"00000113": 				"Funkcie WDS a hosťovskej siete nie je možné zapnúť naraz.",
			"00000114": 				"Funkcie Štatistiky a <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a>  nie je možné zapnúť naraz.",
			"00000115": 				"Funkcie IPTV a <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> nie je možné zapnúť naraz.",

			"00000117": 				"Názov domény už existuje.",
			"00000118": 				"Počet názvov domén prekročil povolený limit.",
			"00000119":				"Ak je aktívna funkcia <a onclick = \"$.su.menu.advanced.goTo('qos_settings');\" src = \"void (0)\"> QoS </a> alebo <a onclick = \"$.su.menu.advanced.goTo('sysstatistics');\" src = \"void(0)\"> Traffic Statistics </a>, nie je možné NAT Boost povoliť.",

			"00000120": 				"Heslo musí byť v dĺžke 5 až 13 znakov ASCII´.",
			"00000121": 				"Heslo musí byť v dĺžke 10 až 26 hexadecimálnych znakov.",
			"00000122": 				"Polia meno a heslo sú prázdne, naozaj chcete pokračovať?",
			"00000123": 				"Prebieha ukladanie... <br/>Počas tohto procesu nepoužívajte zariadenie.",
			"00000124": 				"Kód PIN smerovača je zablokovaný z dôvodu opakovaných pokusov o pripojenie pomocou nesprávneho kódu PIN. Vygenerujte nový kód PIN.",

			"00000125": 				"Počet pravidiel QoS prekročil povolený limit.",
			"00000126": 				"Veľkosť súboru prekročila povolený limit.",
			"00000127": 				"Obsah súboru je nesprávny.",
			"00000128": 				"Vyberte minimálne jednu aplikáciu.",
			"00000129": 				"Vyberte minimálne jeden fyzický port.",
			"00000130":					"Funkcia WPS je vypnutá.",
			"00000131": 				"Server NTP by nemal byť loopback adresa.",
			"00000132": 				"Prepnutie režimu sa nepodarilo. Skúste to znovu neskôr alebo reštartujte smerovač.",
			"00000133": 				"Neplatná IP adresa hostiteľa DMZ. Zadajte platnú adresu.",
			"00000134":  				"Neplatná interná IP adresa. Zadajte platnú adresu.",
			"00000135": 				"Chybný súbor firmvéru.",
			"00000136": 				"Chyba záložného súboru.",
			"00000137": 				"Užívateľské meno je prázdne, ste si istí, že chcete pokračovať?",
			"00000138": 				"Heslo je prázdne, ste si istí, že chcete pokračovať?",
			"00000139": 				"Nesprávne parametre pre obnovenie hesla.",
			"00000140": 				"Nesprávny kód.",
			"00000141": 				"Obnovenie hesla je zakázané.",
			"00000142": 				"Nepodarilo sa odoslať kód. Skontrolujte prosím pripojenie k Internetu.",
			"00000143": 				"Neplatné e-mailové adresy.",
			"00000144": 				"Chybná e-mailová správa.",
			"00000145": 				"Nemožno nájsť hostiteľa.",
			"00000146": 				"Overenie zlyhalo.",
			"00000147": 				"Port by mal byť od 1 do 65535.",
			"00000148": 				"Pri rozsahu portov, musí byť číslo počiatočného portu menšie ako číslo koncového portu. Zadajte prosím znova.",
			"00000149": 				"Číslo portu sa prekrýva. Zadajte prosím znova.",
			"00000150": 				"Neplatná maska podsiete a adresa IP WAN, zadajte platnú.",
			"00000151": 				"Vyberte prosím aspoň jeden deň.",
			"00000152": 				"Nastavte prosím čas pre prístup k Internetu.",
			"00000213":					"IP adresa servera DNS a IP adresa LAN nemôže byť v rovnakej sieti. <br/> Zadajte, prosím, inú.",
			"10000139": 				"Žiadne pripojenie k Internetu",
			"10000140": 				"Vypršal časový limit žiadosti. Skontrolujte prosím pripojenie na Internet a skúste to znova neskôr.",
			"10000158": 				"WAN port je odpojený.",
			"10000159": 				"Nedá sa pripojiť na Internet. Obráťte sa na poskytovateľa služieb alebo to skúste znova neskôr.",
			"10000160": 				"Nemožno získať IP adresu z DHCP servera. Skontrolujte typ pripojenia WAN alebo to skúste znova neskôr.",
			"10000161": 				"Overovanie PPPoE zlyhalo. Skontrolujte prosím svoje užívateľské meno a heslo.",
			"10000162": 				"Nedá sa pripojiť k serveru PPPoE.",

			"10000164": 				"Overovanie PPTP zlyhalo. Skontrolujte prosím svoje užívateľské meno a heslo",
			"10000165": 				"Nedá sa pripojiť na server PPTP.",

			"10000167": 				"Overovanie L2TP zlyhalo. Skontrolujte prosím svoje užívateľské meno a heslo.",
			"10000168": 				"Nedá sa pripojiť k L2TP serveru.",
			"10000169": 				"Neznáma chyba. Skúste to znova neskôr.",
			"10000172": 				"Pripojenie zlyhalo.",

			"10000185": 				"Systémová chyba.",	
			"10000186": 				"Chybný súbor firmvéru.",	
			"10000187": 				"Chyba sťahovania firmvéru.",	
			"10000188": 				"Chyba aktualizácie firmvéru.",	
			"10000191": 				"Nemožno stiahnuť súbor s firmvérom.",
			"10000192": 				"Chyba aktualizácie firmvéru.",
			"10000193": 				"Nemožno sa pripojiť na server.",	
			"10000194": 				"Nie je možné spojenie s cloudovým serverom. Skúste to znova neskôr.",
			"10000195": 				"Nemôžete nastaviť heslo znova, pretože už ste nejaké nastavili.",
			
			"E3002":                    "Časový limit požiadavky uplynul.", 
			"E10000": 					"Všeobecná chyba.",
			"E20002": 					"Časový limit požiadavky uplynul.",
			"E20003": 					"Cloudový server je zaneprázdnený. Prosím, skúste to znova.",
			"E20107": 					"Neplatný vstup.",
			"E20200": 					"Neplatný formát emailu.",
			"E20502": 					"Nie je možné spojiť zariadenie. Skúste to znova, prosím.",
			"E20503": 					"Nie je možné odpojiť zariadenie. Skúste to znova, prosím.",
			"E20506": 					"Operácia zlyhala. Zariadenie je už spojené s iným cloudovým účtom.",
			"E20507": 					"Toto zariadenie je odpojené od účtu.",
			"E20508": 					"Počet spojených účtov už dosiahol maximálny limit.",
			"E20509": 					"Používateľské účty nemajú povolenie spojiť nových používateľov.",
			"E20571": 					"Toto zariadenie je odpojené.",
			"E20580": 					"Operácia zlyhala. Tento účet nie je spojený so zariadením.",
			"E20600": 					"Tento email nie je registrovaný.",
			"E20601": 					"Nesprávne používateľské meno alebo heslo",
			"E20602": 					"Tento účet nie je ešte registrovaný.",
			"E20603": 					"Tento email už je registrovaný.",
			"E20604": 					"Neplatné meno používateľa. Zadajte, prosím, emailovú adresu alebo telefónne číslo.",
			"E20606": 					"Nie je možné odoslať email týkajúci sa aktivácie účtu.",
			"E20615": 					"Neplatné heslo. Zadajte, prosím, 6-32 znakov ASCII bez medzier.",
			"E20616": 					"Neplatné heslo. Zadajte, prosím, 6-32 znakov ASCII bez medzier.",
			"E20617": 					"Tento účet neexistuje.",
			"E20618": 					"Tento účet neexistuje.",
			"E20620": 					"Neplatná prezývka. Zadajte, prosím, 1-64 znakov.",
			"E20661": 					"Tento účet bude uzamknutý na 2 hodiny v dôsledku príliš veľkého počtu pokusov o prihlásenie (20 krát v priebehu pol hodiny).",
			"E20662": 					"Zariadenie je uzamknuté. V priebehu ďalších 24 hodín, zariadenie nebude reagovať na žiadnu požiadavku o overenie kódu.",
			"E20671": 					"Nie je možné overiť účet.",
			"E20672": 					"Nie je možné overiť účet. Odkaz pre aktiváciu účtu vypršal. Podajte, prosím, novú požiadavku.",
			"E20673": 					"Odkaz pre resetovanie hesla vypršal. Podajte, prosím, novú požiadavku.",
			"E20674": 					"Nie je možné resetovať heslo.",
			"E20675": 					"Tento účet je aktuálne prihlásený inam.",
			"E22000": 					"Neplatný vstup.",
			"E22001": 					"Názov domény je už registrovaný.",
			"E22002": 					"Bol dosiahnutý maximálny limit počtu registrovaných názvov domén.",
			"E22003": 					"Bol dosiahnutý maximálny limit počtu názvov pripojených domén.",
			"E22004": 					"Tento názov domény je už pripojený k inému zariadeniu.",
			"E22006": 					"Systémová chyba. Skúste to, prosím, neskôr.",
			"E22007": 					"Názov domény pozostáva  citlivých slov. Skúste, prosím, iné.",
			"E22008": 					"Názov domény neexistuje.",

			"E50101": 					"WAN port je odpojený.",
			"E50102": 					"Nie je možné pripojiť sa k Internetu. Kontaktujte, prosím, svojho poskytovateľa služby alebo to skúste znova, prosím.",
			"E50103": 					"Nemožno získať IP adresu z DHCP servera. Skontrolujte typ pripojenia WAN alebo to skúste znova neskôr.",
			"E50111": 					"Overovanie PPPoE zlyhalo. Skontrolujte prosím svoje užívateľské meno a heslo.",
			"E50112": 					"Nedá sa pripojiť k serveru PPPoE.",
			"E50121": 					"Overovanie PPTP zlyhalo. Skontrolujte prosím svoje užívateľské meno a heslo",
			"E50122": 					"Nedá sa pripojiť na server PPTP.",
			"E50131": 					"Overovanie L2TP zlyhalo. Skontrolujte prosím svoje užívateľské meno a heslo.",
			"E50132": 					"Nedá sa pripojiť k L2TP serveru.",
			"E50140": 					"Neznáma chyba. Skúste to znova neskôr.",
			"E51215": 					"Vypršal časový limit žiadosti. Skontrolujte prosím pripojenie na Internet a skúste to znova neskôr.",
			"E_CLOUD_SERVER": 			"Chyba servera. Skúste to znova neskôr.",
			"E5000": 					"Nedá sa pripojiť ku cloud servera.",
			"E5001": 					"Nesprávna identifikácia TP-Link ID (e-mail). Alebo je vaše zariadenie offline a iba admin (%email) má prístup offline.",
			"E5002": 					"Nesprávne heslo."
		},

		MENU: {
			STATUS: 					"Stav",
			NETWORK: 					"Sieť",
			NETWORK_MAP: 				"Mapa siete",
			INTERNET: 					"Internet",

			LAN: 						"Lokálna sieť",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"Server DHCP",
			DYNAMIC_DNS: 				"Dynamický DNS",
			ADVANCED_ROUTING: 			"Pokročilé smerovanie",

			WIRELESS: 					"Bezdrôtové",
			WIRELESS_SETTINGS: 			"Nastavenie bezdrôtového prenosu",
			WDSBRIDGING: 				"Premostenie WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"Filtrovanie adresy MAC",
			WIRE_STATISTICS: 			"Štatistika",
			
			
			GUEST_NETWORK: 				"Hosťovská sieť",
			WIRELESS_SETTINGS: 			"Nastavenie bezdrôtového prenosu",
			STORAGE_SHARING: 			"Zdieľanie ukladacie priestoru",
			NAT_FORWARDING: 			"NAT - Presmerovanie",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Virtuálne servery",
			PORT_TRIGGERING: 			"Spúšťanie portov",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Nastavenie USB",
			BASIC_SET: 					"Základné nastavenia",
			DISK_SET: 					"Nastavenie zariadenia",
			FOLDER_SHARING: 			"Prístup k zdieľaniu",
			STORAGE_SHARING: 			"Zdieľanie ukladacie priestoru",
			FTP_SERVER: 				"FTP server",
			MEDIA_SERVER: 				"Server média",
			PRINT_SERVER: 				"Tlačový server",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Rodičovská kontrola",
			
			QOS:  						"QoS",
			DATABASE:  					"Databáza",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Mapa",
			SB_MAP: 					"Mapa",
			SB_BANDWIDTH:  				"Šírka pásma",
			SB_PRIORITY: 				"Priorita",
			SB_STATISTICS: 				"Štatistika",

			
			SECURITY: 					"Zabezpečenie",
			SETTINGS: 					"Nastavenie",
			ACCESS_CONTROL: 			"Kontrola prístupu",
			IP_MAC_BINDING: 			"Zviazanie adries IP a MAC",

			IPV6: 						"Protokol IPv6",
			
			
			SYSTEM_TOOLS: 				"Systémové nástroje",
			TIME_SETTINGS: 				"Nastavenie času",
			DIAGNOSTIC: 				"Diagnostika",
			FIRMWARE_UPGRADE: 			"Modernizácia firmvéru",
			BACKUP_RESTORE: 			"Zálohovanie a obnovenie",
			ADMINISTRATION: 			"Správa",
			SYSTEM_LOG: 				"Systémový záznam",
			STATISTICS: 				"Štatistika prenosu údajov",
			SYSTEM_PARAMETERS: 			"Systémové parametre",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"VPN Server",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"Pripojenia VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Oblasť a časové pásmo",
			INTERNET_CONNECTION_TYPE: 	"Typ internetového pripojenia",
			WIRELESS_SETTINGS: 			"Nastavenie bezdrôtového prenosu",
			SUMMARY: 					"Sumár",
			SETUP_COMPLETE: 			"Test Internetového pripojenia",
			SETUP_COMPLETE_CLOUD: 			"TP-Link Cloudová služba",

			EXIT: 						"Opustiť",
			NEXT: 						"Ďalší",
			SAVE: 						"Uložiť",
			FINISH: 					"Dokončiť",
			OK: 						"OK",
			NONE: 						"Detekcia zlyhala.",

			REGION: 					"Oblasť",
			TIME_ZONE: 					"Časové pásmo",

			AUTO_DETECT: 				"Automatická detekcia",
			DYNAMIC_IP: 				"Dynamická IP",
			STATIC_IP: 					"Statická IP",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Ak si nie ste istý, aký typ internetového pripojenia máte, použite funkciu Auto Detect (automatická detekcia), alebo požiadajte o pomoc svojho ISP.",

			DYNAMIC_IP_INFO: 			"Ak váš ISP umožňuje prístup na internet iba určitej MAC adrese, je potrebné naklonovať túto MAC adresu, aby sa umožnil prístup iným zariadeniam. Ak si nie ste istý, vyberte možnosť (NE)klonovať MAC adresu.",
			MAC_CLONE_NO: 				"NEklonovať MAC adresu",
			MAC_CLONE_YES: 				"Klonovať MAC adresu tohto počítača",
			MAC_CLONE_NOTE: 			"Poznámka: Ak vyberiete možnosť Klonovať MAC adresu, uistite sa, že MAC adresa tohto počítača je zaregistrovaná u vášho ISP pred kliknutím na tlačidlo Ďalej.",

			PPPOE_INFO: 				"Zadajte meno a heslo svojho pripojenia PPPoE.",
			
			STATIC_IP_INFO: 			"Zadajte informácie o vašej IP adrese.",

			L2TP_INFO: 					"Zadajte meno a heslo svojho pripojenia L2TP.",
			PPTP_INFO: 					"Zadajte meno a heslo svojho pripojenia PPTP.",
			
			USERNAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			SERVER_IP_ADDRESS_NAME: 	"IP servera VPN/Doménové meno",
			IP_ADDRESS: 				"IP adresa",
			SUBNET_MASK: 				"Maska podsiete",
			DEFAULT_GATEWAY: 			"Predvolená brána",
			PRIMARY_DNS: 				"Primárny DNS",
			SECOND_DNS: 				"Sekundárny DNS",
			OPTIONAL: 					"(Voliteľne)",
			
			ON: 						"Zap",
			OFF: 						"Vyp",
			WIRELESS_24GHZ: 			"Bezdrôtové pripojenie 2,4 GHz",
			WIRELESS_5GHZ: 				"Bezdrôtové pripojenie 5 GHz",
			ENABLE_WIRELESS_RADIO: 		"Zapnúť bezdrôtový vysielač",
			NAME_SSID: 					"Názov bezdrôtovej siete (SSID)",

			SUMMARY_INFO1: 				"Pred kliknutím na tlačidlo  <strong>Ďalej</strong> je potrebné opätovne pripojiť vaše bezdrôtové zariadenia do novej bezdrôtovej siete.",
			SUMMARY_INFO2: 				"Vaše meno a heslo do bezdrôtovej siete sa zmenilo podľa údajov nižšie Bezdrôtová sieť 2,4 GHz",
			SUMMARY_INFO3: 				"Ďalej",

			WIRELESS_24GHZ_SSID: 		"Názov bezdrôtovej siete 2,4 GHz (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Heslo bezdrôtovej siete 2,4 GHz",
			WIRELESS_5GHZ_SSID: 		"Názov bezdrôtovej siete 5 GHz (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Heslo bezdrôtovej siete 5 GHz",

			SORRY: 						"Nepodarilo se.",
			SUCCESS: 					"Úspech!",
			TEST_INTERNET_SUCCESS_INFO: "Kliknite na tlačidlo Dokončiť a ukončite proces stručnej inštalácie.",

			TEST_INTERNET_FAILED_INFO_0:"Overte všetky parametre rýchleho nastavenia a skúste to znovu. Ak sú všetky parametre rýchleho nastavenia v poriadku. Reštartujte modem, počkajte 2 minúty a ešte raz kliknite na Otestovať internetové pripojenie. Ak nepoužívate modem, možno budete musieť kontaktovať vášho ISP a požiadať o pomoc. ",
			TEST_INTERNET_FAILED_INFO_1: "Jeejda... Internetové pripojenie nie je úspešne nastavené. <br />1. Ubezpečte sa, či sú všetky káble správne pripojené.<br />2. Kliknite na Späť a overte, či sú informácie o Internetovom pripojené správne.<br />3. Kontaktujte našu Technickú podporu, ak problém stále pretrváva. ",
			SUMMARY_INFO4: 				"Prepáčte! Detekovali sme, že ste sa nepripojili svojím bezdrôtovým zariadením k novej bezdrôtovej sieti. Urobte to a potom kliknite na tlačidlo <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Gratulujeme!",
			COMPLETE_INFO_0: 			"Práve ste dokončili proces stručnej inštalácie.",
			COMPLETE_INFO_1:			"Kliknite nižšie na Otestovať internetové pripojenie a potom kliknite na tlačidlo Dokončiť.",
			COMPLETE_INFO_2: 			"Nie ste pripojení do Cloudového účtu TP-Link. Môžete sa prihlásiť neskôr z Basic > TP-Link Cloud.",
			TEST_INTERNET: 				"Test Internetového pripojenia",

			
			RESET_USER_TITLE: 			"Nastavenie nového mena a hesla",
			NEW_USERNAME: 				"Nové meno",
			NEW_PASSWORD: 				"Nové heslo",
			CONFIRM_PASSWORD: 			"Potvrdiť nové heslo",
			
			NO_ACCOUNT: 				"Nemáte identifikáciu TP-Link ID?",
			REGISTER_NOW: 				"Registrovať teraz",
			REGISTER_SKIP: 				"Prihláste sa neskôr",
			LOGIN: 						"Prihlásiť sa",
			REGISTER_NEW:				"Zaregistrovať nový účet",
			COMPLETE_INFO_EMAIL_PREFIX: "Vaša identifikácia TP-Link ID je:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Silne odporúčame, aby ste sa prihlásili pomocou tohto účtu pre zjednodušenie spravovania svojho zariadenia a viac funkcií pre TP-Link Cloud.",

			INTERNET_OK: 				"Gratulujeme! Nastavenie siete bolo úspešné. Užite si Internet.",
			CLOUD_WIZARD: 				"Ďalšie funkcie TP-Link Cloud po prihlásení pomocou vašej identifikácie <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "S identifikáciou TP-Link ID môžete:", 
			ACCOUNT_DESP_SUB1:          "Pristupovať k svojmu zariadeniu a lokálnym serverom (FTP, HTTP, atď.) kdekoľvek pomocou Internetu.",
			ACCOUNT_DESP_SUB2:          "Vždy udržujte svoj firmvér aktuálny pomocou funkcie Online aktualizácia",
	        ACCOUNT_DESP_SUB3:          "Spravujte viaceré zariadenia len s jedným účtom",
			
			CONFIRM: 					"Potvrdiť"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Stav internetu",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Typ pripojenia",
			SECONDARY_CONN: 			"Sekundárne pripojenie",

			POOR_CONNECTED: 			"Slabé pripojenie",
			UNPLUGGED: 					"Port WAN je odpojený.",
			
			CONNECTED: 					"Pripojené",
			DISCONNECTED: 				"Odpojené",

			INTERNET_IP_ADDR: 			"IP adresa",
			
			IP_ADDR: 					"IP adresa",
			MAC_ADDR: 					"MAC adresa",
			GATEWAY: 					"Brána",

			AUTO: 						"Automaticky",
			
			ROUTER: 					"Smerovač",
			WIRELESS_CLIENTS: 			"Klienti bezdrôtovej siete",
			HOST_CLIENTS: 				"Hostiteľskí klienti",
			GUEST_CLIENTS: 				"Hosťovskí klienti",
			WIRE_CLIENTS: 				"Klienti káblovej siete",
			PRINTER: 					"Tlačiareň",
			USB_DISK: 					"Disk USB",
			WIRELESS: 					"Bezdrôtové",
			NAME: 						"Názov",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Kanál",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Bezdrôtové pripojenie 2,4 GHz",
			WIRELESS_5GHZ: 				"Bezdrôtové pripojenie 5 GHz",
			
			GUEST_24GHZ: 				"Hosťovská sieť 2,4 GHz",
			GUEST_5GHZ: 				"Hosťovská sieť 5 GHz",
			
			STATUS: 					"Stav",
			TOTAL: 						"Celková",
			AVAILABLE: 					"Dostupná",
			GB: 						"GB",
			BRAND: 						"Značka",

			DYNAMIC_IP: 				"Dynamická IP",
			STATIC_IP: 					"Statická IP",
			SUBNET_MASK: 				"Maska podsiete",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Kábel BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Tunel 6na4",
			NONE: 						"Žiadna"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Automatická detekcia",
			INTERNET_CONN_TYPE: 		"Typ internetového pripojenia",
			DYNAMIC_IP: 				"Dynamická IP",
			STATIC_IP: 					"Statická IP",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"Kábel BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"protokol DHCP",
			UNPLUGGED: 					"Port WAN je odpojený.",
			NONE: 						"Žiadna",
			DETECT_FAIL: 				"Automatická detekcia zlyhala",
			SECONDARY_CONN: 			"Sekundárne pripojenie",

			DYNAMIC_YES: 				"NEklonovať MAC adresu",
			DYNAMIC_NO: 				"Klonovať MAC adresu tohto počítača",
			
			IP_ADDR: 					"IP adresa",
			SUBNET_MASK: 				"Maska podsiete",
			DEFAULT_GATEWAY: 			"Predvolená brána",
			PRIMARY_DNS: 				"Primárny DNS",
			SECOND_DNS: 				"Sekundárny DNS",
			OPTIONAL: 					"(Voliteľne)",
			USER_NAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			SERVER_IP_ADDR_NAME: 		"IP servera VPN/Doménové meno",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Ak si nie ste istý, aký typ internetového pripojenia máte, použite funkciu Auto Detect (automatická detekcia), alebo požiadajte o pomoc svojho ISP."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Nastavenie bezdrôtového prenosu",
			MODE_2G: 					"Bezdrôtové pripojenie 2,4 GHz",
			MODE_5G: 					"Bezdrôtové pripojenie 5 GHz",
			WIRELESS_NETWORK_NAME: 		"Názov bezdrôtovej siete (SSID)",
			WIRELESS_PASSWORD: 			"Heslo",
			ENABLE_WIRELESS: 			"Zapnúť bezdrôtový vysielač",
			SAVE: 						"Uložiť",
			ENCRYPTION_2G_NOTICE:		"Šifrovanie 2,4 G je %s.",
			ENCRYPTION_5G_NOTICE:		"Šifrovanie 5 G je %s.",
			ENCRYPTION_2G_NO: 			"Bezdrôtová sieť 2,4 GHz nie je šifrovaná.",
			ENCRYPTION_5G_NO: 			"Bezdrôtová sieť 5 GHz nie je šifrovaná.",
			ENCRYPTION_SURE: 			"Naozaj chcete pokračovať?",

			HIDE_SSID: 					"Skryť SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Základné nastavenia",
			TITIL_NEW:					"Disk a konto",
			DISK_SET:					"Nastavenie zariadenia",

			SELFLY_REMOVE:				"Bezpečne odobrať",
			SCANING:					"Prebieha skenovanie...",
			SCAN_RESULT:				"Počet nájdených diskov: %n",
			
			DISKS:						"Disky",
			USERS: 						"Užívateľské kontá",
			DEVICENAME: 				"Názov zariadenia",
			VOLUMN: 					"Disk",

			USBSPACE: 					"Použité miesto",
			FREESPACE: 					"Voľné miesto",
			STATUS: 					"Stav",
			INACT: 						"Neaktívny",
			USAGE: 						"Použitie",
			CAPACITY: 					"Kapacita",
			OPERATION: 					"Prevádzka",
			
			ACC: 						"Správa konta",
			USERNAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			USE_LOGIN: 					"Použiť prihlásenie používateľa",
			SCAN: 						"Skenovať",
			ENJECT_ALL: 				"Vysunúť všetky",
			ENJECT: 					"Vysunúť",
			ADD_USER: 					"Pridať používateľa",
			AUTH: 						"Autorita",


			LOCATION: 					"Poloha",
			MOBILE_ISP: 				"ISP mobilného pripojenia",
			DIAL_NUMBER: 				"Vytáčanie čísla",
			APN: 						"APN",
			USERNAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			MTU_SIZE: 					"Veľkosť MTU",
			OPTIONAL: 					"(Voliteľne)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Rodičovská kontrola",

			DEVICE_CTR: 				"Zariadenia podliehajúce rodičovskej kontrole",
			ID: 						"ID",
			DEVICE: 					"Názov zariadenia",
			MAC_ADDRESS: 				"MAC adresa",
			TIME: 						"Čas prístupu k internetu",
			DESCRIPTION: 				"Popis",
			ENABLE: 					"Zapnúť",
			ENABLE_THIS_ENTRY: 			"Zapnúť",
			OPTIONAL: 					"(Voliteľne)",
			BTN_VIEW: 					"Zobraziť existujúce zariadenia",
			ACCESS_DEVICES_LIST: 		"Zoznam zariadení",
			OPT: 						"Prevádzka",
			STATUS: 					"Stav"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Hosťovská sieť",
			MODE_2G: 					"Bezdrôtové pripojenie 2,4 GHz",
			MODE_5G: 					"Bezdrôtové pripojenie 5 GHz",
			WIRELESS_NETWORK_NAME: 		"Názov bezdrôtovej siete (SSID)",
			WIRELESS_PASSWORD: 			"Heslo",
			ENABLE_WIRELESS: 			"Zapnúť hosťovskú sieť",
			SAVE:						"Uložiť",
			HIDE_SSID: 					"Skryť SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Cloudový účet",
			OFFLINE_NOTE_TITLE: 		"Zariadenie Offline",
			LOGIN_NOTE_TITLE: 			"Jeejda...",
			LOGIN_OFFLINE_NOTE: 		"Zariadenie je offline. Skontrolujte, prosím konfiguráciu WAN a siete, aby ste sa ubezpečili, či boli vhodné nastavenia zadané správne.",

			EMAIL: 						"E-Mail",
			PASSWORD: 					"Heslo",
			FORGET_PASSWORD: 			"Zabudli ste heslo?",

			CLOUD_WIZARD: 				"Ďalšie funkcie TP-Link Cloud po prihlásení pomocou vašej identifikácie <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"Nemáte identifikáciu TP-Link ID?",
			REGISTER_NOW: 				"Registrovať teraz"
		},
		STATUS: {
			TITLE: 						"Stav",
			INTERNET:					"Internet",
			WIRELESS:					"Bezdrôtové",
			LAN:						"Lokálna sieť",
			USB_TITLE:					"Zariadenia USB",
			PERFORMANCE: 				"Výkon",
			GUEST_NETWORK: 				"Hosťovská sieť",
			ACCESS_DEVICES: 			"Prístup k zariadeniam",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Typ pripojenia",

			MAC_ADDRESS: 				"MAC adresa",
			IP_ADDRESS: 				"IP adresa",
			RELEASE: 					"Uvoľniť",
			RENEW: 						"Obnoviť",
			
			DYNAMIC_IP: 				"Dynamická IP",
			STATIC_IP: 					"Statická IP",
			SUBNET_MASK: 				"Maska podsiete",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Kábel BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Tunel 6na4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass-Through (Bridge)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Žiadna",
			
			DEFAULT_GATEWAY: 			"Predvolená brána",
			DNS: 						"DNS Server",
			MAC: 						"MAC adresa",
			WDS_STATUS: 				"Stav WDS",
			
			IPV6_ADDRESS: 				"IP adresa",
			PRIMARY_DNS: 				"Primárny DNS",
			SECOND_DNS: 				"Sekundárny DNS",

			RADIO: 						"Bezdrôtový vysielač",

			NAME_SSID: 					"Názov siete (SSID)",
			NETWORK_NAME_SSID:			"Názov bezdrôtovej siete (SSID)",
			HIDE_SSID: 					"Skryť SSID",
			MODE: 						"Režim",
			CHANNEL: 					"Kanál",
			CHANNEL_WIDTH: 				"Šírka kanála",
			AUTO: 						"Automaticky",
			CURRENT_CHANNEL: 			"Aktuálny kanál",

			WDS: 						"Stav WDS",
			WIRED_CLIENTS: 				"Klienti káblovej siete",
			WIRELESS_CLIENTS: 			"Klienti bezdrôtovej siete",

			ENABLE_DHCP: 				"protokol DHCP",
			LINKADDR:					"Miestne pripojená adresa",
			ASSIGN_TYPE: 				"Priradený typ",

			ALLOW_TO_SEE_EACH: 			"Umožniť hosťom, aby sa navzájom videli",

			TOTAL: 						"Celková",
			AVAILABLE: 					"Dostupná",

			USB: 						"Disk USB",
			PRINTER: 					"Tlačiareň",

			CPU_LOAD: 					"Zaťaženie CPU",
			MEMORY_USAGE: 				"Využitie pamäte",

			IP_ADDR_P: 					"IP adresa",
			MAC_ADDR_P: 				"MAC adresa",
			CONN_TYPE_P: 				"Typ pripojenia",

			DISABLED: 					"Vypnuté",
			INIT: 						"Akt.",
			SCAN: 						"Skenovať",
			AUTH: 						"Aut.",
			ASSOC: 						"Prip.",
			RUN: 						"Spus.",
			HOST: 						"Hostiteľ",
			GUEST: 						"Hosť",

			ON: 						"Zap",
			OFF: 						"Vyp"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"Protokol IPv4",
			IPV6: 						"Protokol IPv6",
			CONNECTION_TYPE: 			"Typ internetového pripojenia",
			INTERNET_MAC_ADDRESS: 		"MAC adresa",
			
			CONNECT: 					"Pripojiť",
			DISCONNECT: 				"Odpojiť",
			
			IP_ADDR: 					"IP adresa",
			
			USE_DEFAULT_MAC: 			"Použiť predvolenú MAC adresu",
			USE_COMPUTER_MAC: 			"Použiť MAC adresu aktuálneho počítača",
			USE_CUSTOM_MAC: 			"Použiť vlastnú MAC adresu",
			MAC_CLONE: 					"Klonovanie MAC adries",
			
			CONFIG: 					"Konfig.",
			
			IP_ADDRESS: 				"IP adresa",
			SUBNET_MASK: 				"Maska podsiete",
			DEFAULT_GATEWAY: 			"Predvolená brána",
			
			MANUAL_DNS: 				"Manuálny DNS",
			PRIMARY_DNS: 				"Primárny DNS",
			SECOND_DNS: 				"Sekundárny DNS",
			
			RENEW: 						"Obnoviť",
			RELEASE: 					"Uvoľniť",
			VIEW_MODE: 					"Zobraziť režim",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Získať dynamicky od ISP",
			USE_FOLLOW_IP_ADDR: 		"Použiť nasledovnú IP adresu",
			USE_FOLLOW_DNS_ADDR: 		"Použiť nasledujúcu adresu DNS",
			USE_FOLLOW_DNS_SERVER: 		"Použiť nasledujúci server DNS",
			
			BASIC: 						"Základné",
			ADVANCED: 					"Pokročilé",
			
			DNS_ADDR_MODE: 				"Adresa DNS",
			MTU_SIZE: 					"Veľkosť MTU",
			MTU_1500: 					"bajtov. (Predvolená hodnota je 1500, nemeňte ju, ak to nie je nutné.)",
			MTU_1480: 					"bajtov. (Predvolená hodnota je 1480, nemeňte ju, ak to nie je nutné.)",
			MTU_1460: 					"bajtov. (Predvolená hodnota je 1460, nemeňte ju, ak to nie je nutné.)",
			MTU_1420: 					"bajtov. (Predvolená hodnota je 1420, nemeňte ju, ak to nie je nutné.)",
			
			HOST_NAME: 					"Názov hostiteľa",

			HOST_NAME_CONFIRM: 			"Názov hostiteľa obsahuje neplatné znaky, ktoré môžu spôsobiť neočakávané chovanie systému. Naozaj chcete pokračovať?",

			GET_IP_WITH_UNICAST_DHCP: 	"Získať adresu IP pomocou DHCP Unicast (Zvyčajne sa nevyžaduje.)",
			OPTIONAL: 					"(Voliteľne)",
			
			STATIC_IP: 					"Statická IP",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			
			INTERNET_IP_ADDR: 			"IP adresa",
			INTERNET_DNS: 				"DNS internetu",
			SECONDARY_CONN: 			"Sekundárne pripojenie",
			NONE: 						"Žiadna",
			INTERNET_PRIMARY_DNS:		"Primárny DNS",
			INTERNET_SECONDARY_DNS: 	"Sekundárny DNS",
			
			DYNAMIC_IP: 				"Dynamická IP",
			DYNAMIC_IP_v6: 				"Dynamická IP (SLAAC / DHCPv6)",
			STATIC_IP: 					"Statická IP",
			SERVICE_NAME: 				"Názov služby",
			ACCESS_CONCENTRATOR_NAME:  	"Prístup k názvu koncentrátora",
			DETECT_ONLINE_INTERVAL: 	"Detekovať interval v stave online",
			INTERVAL_TIPS: 				"sekúnd. (0-120. Predvolená hodnota je 10.)",
			IP_ADDR_MODE:  				"IP adresa",
			CONN_MODE: 					"Režim pripojenia",
			DHCP_LINK_UNPLUGGED: 		"Port WAN je odpojený.",
			
			AUTO: 						"Automaticky",
			ON_DEMAND: 					"Na požiadanie",
			TIME_BASED: 				"Časovo obmedzený",
			MANUALLY: 					"Manuálne",
			MAX_IDLE_TIME: 				"Maximálny čas nečinnosti",
			MAX_IDLE_TIME_TIPS: 		"minút. (0 znamená stále aktívne.)",
			PERIOD_OF_TIME: 			"Časová perióda",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"Kábel BigPond",
			AUTH_SERVER: 				"Over. Server",
			AUTH_DOMAIN: 				"Over. Doména",
			L2TP: 						"L2TP",
			GATEWAY: 					"Brána",
			SERVER_IP_ADDR_NAME: 		"IP servera VPN/Doménové meno",
			PPTP: 						"PPTP",
			TO: 						"Komu",
			
			TUNNEL_6TO4: 				"Tunel 6na4",
			ENABLE_IPV6: 				"Protokol IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Získať nie dočasnú adresu IPv6",
			GET_PREFIX_DELEGATION: 		"Získať delegáciu predpony adresy IPv6",
			IPV6_ADDR: 					"Adresa IPv6",

			GET_IPV6_WAY: 				"Získať adresu IPv6",
			AUTOMATICALLY: 				"Získať automaticky",
			SPECIFIED_BY_ISP: 			"Určuje ISP",

			IPV6_ADDR_PREFIX: 			"Predpona adresy IPv6",
			NONE_TEMPORARY: 			"Nie dočasnú",

			PREFIX_DELEGATION: 			"Delegácia predpony",
			ENABLE: 					"Zapnúť",
			DISABLE: 					"Vypnúť",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Dĺžka masky IPv4",
			CONFIG_TYPE: 				"Typ konfigurácie",
			RD6_PREFIX: 				"Predpona 6RD",
			RD6_PREFIX_LENGTH: 			"Dĺžka predpony 6RD",
			REPLY_IPV4_ADDR: 			"Adresa Border Reply IPv4",
			MANUAL: 					"Ručne",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass-Through (Bridge)",
			LOCAL_IPV6: 				"Miestna adresa IPv6",
			PEER_IPV6: 					"Podobná adresa IPv6",
			TUNNEL_ADDR: 				"Adresa tunela",
			IPV4_NETMASK: 				"Maska siete IPv4",
			CUSTOM: 					"Vlastné",
		    AFTR_NAME: 					"Názov AFTR",
			PPP_SHARE_V6:				"Rovnaká relácia PPPoE s pripojením IPv4",
			PPP_SHARE_V4:				"Rovnaká relácia PPPoE s pripojením IPv6",

			
			
			IPV4_ADDR: 					"Adresa IPv4",
			IPV4_MASK: 					"Maska podsiete IPv4",
			IPV4_GATEWAY: 				"Predvolená brána IPv4",
			TUNNEL_ADDR: 				"Adresa tunela",

			DUPLEX: 					"Duplexný",
			AUTO_NEGOTIATION: 			"Automatické vyhodnotenie",
			FULL_DUPLEX_1000: 			"1000Mbps duplexný",
			HALF_DUPLEX_1000:			"1000Mbps poloduplexný",
			FULL_DUPLEX_100: 			"100Mbps duplexný",
			HALF_DUPLEX_100: 			"100Mbps poloduplexný",
			FULL_DUPLEX_10: 			"10Mbps duplexný",
			HALF_DUPLEX_10: 			"10Mbps poloduplexný"

		},

		LAN: {
			TITLE: 						"Lokálna sieť",
			LAN: 						"Lokálna sieť",
			IPV4: 						"Protokol IPv4",
			IPV6: 						"Protokol IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"MAC adresa",
			IP_ADDRESS: 				"IP adresa",
			SUBNET_MASK: 				"Maska podsiete",
			CUSTOM: 					"Vlastné",

			IGMP: 						"Zapnúť IGMP Proxy",
			

			ASSIGNED_TYPE: 				"Priradený typ",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+bezstavový DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Predpona adresy",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Adresa",
			DELEFATED: 					"Delegovaná",
			STATIC: 					"Statická",
			SITE_PREFIX: 				"Predpona stránky",
			SITE_PREFIX_LEN: 			"Dĺžka predpony stránky",

			PREFIX_TYPE:  				"Typ konfigurácie predpony stránky",
			LAN_IPV6_ADDR:  			"Adresa IPV6 siete LAN",

			RELEASE_TIME: 				"Čas uvoľnenia",
			RELEASE_TIME_TIP: 			"sekúnd. (Predvolená hodnota je 86400, nemeňte ju, ak to nie je nutné.)",
			ADDRESS:					"Adresa",
			SAVE: 						"Uložiť",

			REBOOT_TIP: 				"Smerovač prechádza na novú prihlasovaciu stránku. <br/> Čakajte prosím..."

		},

		IPTV:{
			TITLE: 						"Nastavenie",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Zapnúť IPTV", 
			MODE:  						"Režim",
			IGMP_PROXY: 				"Proxy IGMP",
			IGMP_VERSION: 				"Verzia IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Premostenie",
			BASIC: 						"Vlastné",
			EXSTREAM: 					"Singapur-ExStream",
			RUSSIA:  					"Rusko",
			UNIFY:  					"Malajzia-Unifi",
			MAXIS:  					"Malajzia-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internet",
			IP_PHONE: 					"IP-Telefón", 

			Q_TAG: 						"Značka 802.1Q",
			ENABLE: 					"Zapnúť",
			
			INTERNET_VLAN_ID: 			"ID internetovej Vlan",
			INTERNET_VLAN_PRIORITY: 	"Internetová priorita Vlan",
			IP_PHONE_VLAN_ID: 			"ID IP-telefónnej Vlan",
			IP_PHONE_VLAN_PRIORITY: 	"Priorita IP-telefónu Vlan",
			IPTV_VLAN_ID: 				"ID Vlan IPTV",
			IPTV_VLAN_PRIORITY: 		"Priorita IPTV Vlan",
			IPTV_MULTI_VLAN_ID: 		"ID Vlan IPTV Multicast",
			IPTV_MULTI_VLAN_PRIORITY: 	"Priorita IPTV Multicast Vlan"
		},

		DHCP_SERVER: {
			TITLE: 						"Server DHCP",
			
			SETTINGS: 					"Nastavenie",

			DHCP_SERVER: 				"Server DHCP",
			ENABLE_DHCP_SERVER: 		"Zapnúť server DHCP",

			IP_ADDR_POOL: 				"Fond adries IP",
			LEASETIME: 					"Čas prenájmu adresy",
			LEASENOTE: 					"minút. (1-2880. Predvolená hodnota je 120.)",
			
			GATEWAY: 					"Predvolená brána",
			DOMAIN: 					"Predvolená doména",
			PRIMARYDNS: 				"Primárny DNS",
			SECONDARYDNS: 				"Sekundárny DNS",

			OPTIONAL: 					"(Voliteľne)",

			CLIENTSLIST: 				"Zoznam klientov DHCP",
			CLIENT_NUMBER: 				"Číslo klienta",
			CLIENT_NAME: 				"Názov klienta",
			MAC_ADDR: 					"MAC adresa",
			ASSIGNED_IP: 				"Priradená adresa IP",
			LEASE_TIME: 				"Čas prenájmu",

			RESERVATION: 				"Rezervácia adries",

			RESERVED_IP: 				"Rezervovaná IP adresa",
			IP_ADDRESS: 				"IP adresa",
			DESCRIPTION: 				"Popis",

			CLIENTSLIST: 				"Zoznam klientov DHCP",
			CLIENT_NUMBER: 				"Číslo klienta",

			ENABLE: 					"Zapnúť",
			ENABLE_THIS_ENTRY: 			"Zapnúť"
			
		},

		DDNS: {
			DDNS: 						"Dynamický DNS",
			SERVICEPROVIDER: 			"Poskytovateľ služby",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP (Bez IP)：",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Prejsť na registráciu…",
			USERNAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			DOMAIN_NAME_LIST: 			"Zoznam názvov domén",
			DOMAIN_NAME: 				"Názov domény",
			LOGIN: 						"Prihlásiť sa",
			LOGIN_SAVE: 				"Prihlásiť sa a uložiť", 
			LOGOUT: 					"Odhlásiť",
			STATU_SUCCESS:				"Úspech!",
			UPDATE_INTERVAL:			"Interval aktualizácie",
			ONE_HOUR:					"1 hodina",
			SIX_HOUR:					"6 hodín",
			TWETEEN_HOUR:				"12 hodín",
			ONE_DAY:					"1 deň",
			TWO_DAY:					"2 dni",
			THREE_DAY:					"3 dni",
			NEVER:						"Nikdy",
			UPDATE:						"Aktualizovať",
			STATU_INCORRENT:			"Nesprávne používateľské meno alebo heslo",
			STATU_ERR_DOMAIN:			"Chybný názov domény",
			WAN_IP_BIND: 				"Viazanie WAN IP",
			CURRENT_DOMAIN: 			"Aktuálny názov domény",
			REGISTER: 					"Registrovať",
			BIND: 						"Zviazať",
			UNBIND: 					"Odpojiť",
			TITLE: 						"DDNS nie je prístupné",
			CONTENT: 					"Ak chcete používať našu hlavnú službu TP-Link DDNS, <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">Prihláste sa</a> pomocou svojej identity TP-Link ID, alebo si vyberte iného poskytovateľa služby.",
			STATU_NO_LAUNCH:			"Nepodarilo sa aktualizovať DDNS",
			STATU_FAIL_DDNS: 			"Nepodarilo sa aktualizovať DDNS.",
			STATU_FAIL_NOIP: 			"Nepodarilo sa aktualizovať No-IP.",
			DISABLE: 					"Vypnúť",
			ENABLE: 					"Zapnúť",	
			STATU_NO_LAUNCH:			"Nepodarilo sa aktualizovať DDNS.",
			STATU_CONN:					"Prebieha pripájanie",
			WAN_IP_BIND: 				"Viazanie WAN IP",
			TIME: 						"Dátum registrácie",
			BOUND: 						"Zviazať",
			FREE: 						"Voľné",
			SORRY: 						"Nepodarilo se.",
			UNBIND_NOTE:          		"Ak chcete pripojiť  %domain% k svojmu zariadeniu, prosím, odpojte najprv aktuálny názov domény."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Pokročilé smerovanie",
			STATIC_ROUTING: 			"Statické smerovanie",

			DESTINATION_NETWORK:		"Cieľová sieť",
			SUBNET_MASK: 				"Maska podsiete",
			DEFAULT_GATEWAY: 			"Predvolená brána",
			DESCRIPTION: 				"Popis",
			
			SYSTEM_ROUTING_TABLE: 		"System Routing Table (Systémová smerovacia tabuľka)：",
			CLIENT_NUMBER: 				"Počet aktívnych trás",

			GATEWAY: 					"Brána",
			INTERFACE: 					"Rozhranie",
			LAN: 						"Lokálna sieť",
			WAN: 						"WAN",
			ENABLE: 					"Zapnúť",
			ENABLE_THIS_ENTRY: 			"Zapnúť"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Nastavenie",
			NOT_SUPPORT_5G: 			"V tejto oblasti je podporované iba 2,4 GHz. Uistite sa, že ste si vybrali správnu oblasť.",

			REGION: 					"Oblasť",
			NOTICE:  					"Funkcia bezdrôtového pripojenia je vypnutá. Pokiaľ ju chcete použiť, stlačte tlačidlo WiFi.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Nastavenie bezdrôtového prenosu",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Zapnúť bezdrôtový vysielač",

			WIRELESS_NETWORK_NAME: 		"Názov bezdrôtovej siete (SSID)",
			WIRELESS_PASSWORD: 			"Heslo",
			HIDE_SSID: 					"Skryť SSID",

			SECURITY: 					"Zabezpečenie",
			NO_SECURITY: 				"Bez zabezpečenia",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - Osobné(Odporúča sa)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - korporátne",
			WEP: 						"WEP",

			VERSION: 					"Verzia",

			AUTO: 						"Automaticky",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Šifrovanie",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Režim",
			MODE_B:  					"iba 802.11b",
			MODE_G:  					"iba 802.11g",
			MODE_N:  					"iba 802.11n",
			MODE_BG:  					"zmiešaný 802.11b/g",
			MODE_GN: 					"zmiešaný 802.11g/n",
			MODE_BGN:  					"zmiešaný 802.11b/g/n",

			MODE_A_5: 					"iba 802.11a",
			MODE_AN_5: 					"zmiešaný 802.11a/n",
			MODE_N_5: 					"iba 802.11n",
			MODE_AC_5:					"iba 802.11ac",
			MODE_NAC_5:					"zmiešaný 802.11n/ac",
			MODE_ANAC_5:				"zmiešaný 802.11a/n/ac",


			CHANNEL_WIDTH: 				"Šírka kanála",
			CHANNEL: 					"Kanál",

			TRANSMIT_POWER: 			"Výkon vysielača",

			RADIUS_SERVER_IP: 			"IP servera RADIUS",
			RADIUS_PORT: 				"Port servera RADIUS",
			RADIUS_PASSWORD: 			"Heslo servera RADIUS",

			TYPE: 						"Typ",
			OPEN_SYSTEM: 				"Otvorený systém",
			SHARED_KEY: 				"Zdieľaný kľúč",

			KEY_SELECTED: 				"Vybraný kľúč",
			KEY1: 						"Kľúč 1",
			KEY2: 						"Kľúč 2",
			KEY3: 						"Kľúč 3",
			KEY4: 						"Kľúč 4",

			WEP_KEY_FORMAT: 			"Formáť kľúča WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimálny",

			KEY_TYPE: 					"Typ kľúča",
			BIT64: 						"64-bitový",
			BIT128: 					"128-bitový",
			BIT152: 					"152-bitový",

			KEY_VALUE: 					"Hodnota kľúča",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Nízky",
			MIDDLE: 					"Stredný",
			HIGH: 						"Vysoký"
		},

		WPS: {

			TITLE2: 					"PIN smerovača",
			ROUTERS_PIN_INFO: 			"Iné zariadenia sa môžu pripojiť k tomuto smerovaču cez WPS pomocou kódu PIN smerovača.",
			ENABLE_ROUTE_PIN: 			"PIN smerovača",
			ROUTE_PIN: 					"Kód PIN",
			GENERAL: 					"Generovať",
			DFT: 						"Predvolený",

			TITLE: 						"Sprievodca WPS",
			SELECT_SETUP: 				"Vyberte metódu inštalácie",
			PUSH_BTN: 					"Tlačidlom WPS (Odporúča sa)",
			PUSH_DES: 					"Stlačte „tlačidlo WPS“ na smerovači, alebo kliknite na softvérové tlačidlo „Pripojiť“ na tejto stránke.",
			CONNECT: 					"Pripojiť",
			CANCEL: 					"Zrušiť",

			RESULT_HEAD: 				"Bezdrôtový klient",
			RESULT_END: 				"bol úspešne pridaný do siete.",

			PIN_NUMBER: 				"Kód PIN",
			
			PIN_BTN: 					"Kód PIN",
			NOT_FOUND: 					"Nenájdené",
			ENTER_CLIENT_PIN: 			"Zadajte PIN klienta",
			SWITCH_NOTE:				"Poznámka: Aby ste mohli používať WPS, mali by ste najprv zapnúť bezdrôtové pripojenie.",
			SWITCH_NOTE2:				"Poznámka: Aby ste mohli používať WPS, mali by ste najprv správne nakonfigurovať parametre bezdrôtového pripojenia.",
			STATUS_PIN_ERROR: 			"Neplatný PIN WPS? Skontrolujte, či je zadaný správne.",
			STATUS_ERROR: 				"Chyba.",
			STATUS_CONN_ERROR: 			"Pripojenie zlyhalo.",
			STATUS_CONNING: 			"Pripája sa...",
			STATUS_CANCEL: 				"Pripojenie bolo zrušené.",
			
			NOTE: 						"Poznámka:",
			
			STATUS_CONN_OVERLAP: 		"Pripojenie zlyhalo (PREKRYTIE).",
			STATUS_CONN_TIMEOUT: 		"Pripojenie zlyhalo (VYPRŠAL ČAS).",
			STATUS_CONN_INACT: 			"Pripojenie nie je aktívne."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Online bezdrôtové stanice",
			CLIENT_NUMBER: 				"Číslo klienta",
			MAC_ADDRESS: 				"MAC adresa",
			CONN_TYPE: 					"Typ pripojenia",
			SECURITY: 					"Zabezpečenie",
			RECEIVED_PACKETS: 			"Prijaté pakety",
			SEND_PACKETS: 				"Odoslané pakety"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Nastavenie",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Umožniť hosťom, aby sa navzájom videli",
			
			ALLOW_LOCAL: 				"Umožniť hosťom prístup ku svojej lokálnej sieti",
			
			WIRELESS: 					"Bezdrôtové",
			WIRELESS_24G_RADIO: 		"Bezdrôtové pripojenie 2,4 GHz",
			WIRELESS_5G_RADIO: 			"Bezdrôtové pripojenie 5 GHz",
			ENABLE_GUEST: 				"Zapnúť hosťovskú sieť",

			NAME_SSID: 					"Názov bezdrôtovej siete (SSID)",
			HIDE_SSID: 					"Skryť SSID",

			SECURITY: 					"Zabezpečenie",
			NO_SECURITY: 				"Bez zabezpečenia",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Osobné",

			VERSION: 					"Verzia",
			AUTO: 						"Automaticky",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Šifrovanie",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Heslo"
		},

		NAT:{
			SETTINGS: 					"Hardvérová funkcia NAT",
			STATUS: 					"Hardvérová funkcia NAT",
			
			ALG_TITLE: 					"Brána aplikačnej hladiny (ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP priechod",
			L2TP_ALG: 					"L2TP Passthrough",
			IPSEC_ALG: 					"IPSec priechod",

			ENABLE_FTP_ALG: 			"Zapnúť FTP ALG",
			ENABLE_TFTP_ALG: 			"Zapnúť TFTP ALG",
			ENABLE_H323_ALG: 			"Zapnúť H323 ALG",
			ENABLE_RTSP_ALG: 			"Zapnúť RTSP ALG",
			ENABLE_PPTP_ALG: 			"Zapnúť prechod PPTP",
			ENABLE_L2TP_ALG: 			"Zapnúť prechod L2TP",
			ENABLE_IPSEC_ALG: 			"Zapnúť prechod IPSec",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnosť zmeny konfigurácie nastane potom, čo bude funkcia NAT povolená."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Virtuálne servery",

			SERVICE_NAME: 				"Typ služby",
			EXTERNAL_PORT: 				"Externý port",
			INTERNAL_IP: 				"Interná IP",
			INTERNAL_PORT: 				"Interný port",
			PROTOCAL: 					"Protokol",

			BTN_VIEW: 					"Zobraziť existujúcu službus (služby)",

			EXSITTING_SERVICE: 			"Existujúce služby",
			
			PROTOCAL_ALL: 				"VŠETKY",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX alebo XX)",
			EXT_PORT_TIPS: 				"(XX alebo XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX alebo prázdne ,1-65535)",

			NOTICE:						"V konflikte s portom vzdialenej správy. Naozaj chcete pokračovať?",

			ENABLE_THIS_ENTRY: 			"Zapnúť",
			OPERATION: 					"Prevádzka",
			CHOOSE: 					"Zvoliť",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnosť zmeny konfigurácie nastane potom, čo bude funkcia NAT povolená."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Spúšťanie portov",
			APPLICATION: 				"Aplikácia",
			TRIGGER_PORT: 				"Triggering Port / Spúšťajúci port",
			TRIGGER_PROTOCOL: 			"Triggering protokol",

			EXTERNAL_PORTS: 			"Externý port",
			EXTERNAL_PROTOCOL: 			"Externý protokol",

			BTN_VIEW: 					"Zobraziť existujúce aplikácie",

			EXSITTING_APPLICATION: 		"Existujúce aplikácie",
			APPLICATION_NAME: 			"Názov aplikácie",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX alebo XX-XX,1-65535, max. 5 párov)",
			
			ENABLE_THIS_ENTRY: 			"Zapnúť",
			OPERATION: 					"Prevádzka",
			
			PROTOCAL_ALL: 				"VŠETKY",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnosť zmeny konfigurácie nastane potom, čo bude funkcia NAT povolená."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Zapnúť DMZ",
			HARDWARESTATUS: 			"IP adresa hostiteľa DMZ",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnosť zmeny konfigurácie nastane potom, čo bude funkcia NAT povolená."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Zoznam služby UPnP",
			CLIENT_NUMBER: 				"Číslo klienta",
			SERVICE: 					"Popis služby",
			EXTERNAL_PORT: 				"Externý port",
			PROTOCAL: 					"Protokol",
			IP_ADDR: 					"Interná IP adresa",
			INTERNAL_PORT: 				"Interný port",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnosť zmeny konfigurácie nastane potom, čo bude funkcia NAT povolená."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"3G/4G USB modem",
			LOCATION: 					"Oblasť",
			MOBILE_ISP: 				"ISP mobilného pripojenia",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Režim pripojenia",
			CONNECT_ON_DEMAND: 			"Pripojiť na základe požiadavky",
			CONNECT_AUTOMATICALLY: 		"Pripojiť automaticky",
			CONNECT_MANUALLY: 			"Pripojiť manuálne",
			MAX_IDLE_TIME: 				"Maximálny čas nečinnosti",
			CONNECTION_TIP: 			"Aktuálny prístup na internet uprednostňuje sieť WAN.",
			IDLE_TIME_TIP: 				"Režim pripojenia a maximálny čas nečinnosti sa nepodarilo nastaviť manuálne.",
			MINUTES: 					"minút. (0 znamená, že pripojenie je stále aktívne.)",

			AUTHENTICATION_TYPE: 		"Typ autentifikácie",
			AUTO: 						"Automaticky",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"Predvolený spôsob je automaticky, nemeňte ho ak to nie je nevyhnutné.",

			CONNECT: 					"Pripojiť",
			DISCONNECT: 				"Odpojiť",

			SET_TIP: 					"Nastavte vytáčanie čísla, APN, meno a heslo",
			DIAL_NUMBER: 				"Vytáčanie čísla",
			APN: 						"APN",
			USERNAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			OPTIONAL: 					"(Voliteľne)",
			MTU_SIZE: 					"Veľkosť MTU",
			MTU_SIZE_TIP: 				"bajtov. (Predvolená hodnota je 1480, nemeňte ju, ak to nie je nutné.)",

			USE_FOLLOW_DNS_SERVER: 		"Použiť nasledovné adresy DNS",
			PRIMARY_DNS: 				"Primárny DNS",
			SECOND_DNS: 				"Sekundárny DNS",

			UNPLUGGED: 					"USB modem nepripojený",
			IDENTIFYING: 				"Prebieha identifikácia...",
			IDENTIFY_SUCCESS: 			"Úspešne rozpoznané"
		},

		DISK_SETTING: {
			DISK_SET: 					"Nastavenie zariadenia",
			SCAN: 						"Skenovať",
			SELFLY_REMOVE: 				"Bezpečne odobrať",
			SCAN_RESULT: 				"Počet nájdených diskov: %n",
			NOT_FOUND: 					"Nenájdené",
			SELFLY_REMOVE: 				"Bezpečne odobrať",
			
			VOLUMN: 					"Disk",
			CAPACITY: 					"Kapacita",
			FREESPACE: 					"Voľné miesto",
			USBSPACE: 					"Použité miesto",
			
			STATUS: 					"Stav",
			INACT: 						"Neaktívny",
			ACTIVE: 					"Aktívne",
			
			USAGE: 						"Použitie",
			CAPACITY: 					"Kapacita",
			OPERATION: 					"Prevádzka",	
			
			ACC: 						"Správa konta", 	 	
			USERNAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			USE_LOGIN: 					"Použiť prihlásenie používateľa",
			SCAN: 						"Skenovať",
			ENJECT_ALL: 				"Vysunúť všetky",
			ENJECT: 					"Vysunúť",
			ADD_USER: 					"Pridať používateľa",
			AUTH: 						"Autorita"
		},

		FOLDER: {
			TITLE: 						"Nastavenia zdieľania",
			ACCOUNT_TITLE: 				"Konto zdieľania",
			ACCOUNT:					"Účet",
			AC_NOTE: 					"Pripraviť konto pre obsah zdieľania. Môžete použiť prihlasovacie konto alebo vytvoriť nové.",
			
			AC_LOGIN: 					"Použiť predvolené konto",
			AC_FOLLOW: 					"Použiť nové konto",

			USERNAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",
			CONFIRM: 					"Potvrdiť heslo",

			SHARING_SETTING: 			"Nastavenia zdieľania",
			SERVER_NAME: 				"Sieť/Názov mediálneho servera",

			METHOD: 					"Prístupová metóda",
			LINK: 						"Prepojenie",
			PORT: 						"Port",

			NETWORK_NEIGHBORHOOD: 		"Susedstvo siete",
			FTP: 						"FTP",
			FTPEX: 						"FTP (cez internet)",

			SHARE_FOLDER: 				"Zdieľanie priečinkov",
			SHAREING_ALL: 				"Zdieľať všetko",
			NOTE:  						"Zapnutím budete zdieľať všetky súbory a priečinky, vypnutím budete zdieľať iba určité priečinky.", 
			ENABLE_AUTHENTICATION: 		"Zapnúť overenie",
			SHAREING_FOLDER: 			"Zdieľané priečinky",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Cesta k priečinku",
			VOLUMN_NAME: 				"Názov disku",

			SHARE_NAME: 				"Názov priečinka",
			FOLDER_PATH: 				"Cesta k priečinku",
			MEDIA_SHARING: 				"Zdieľanie médií",
			STATUS: 					"Stav",

			GUEST_ACCESS: 				"Povoliť hosťovský prístup k sieti",
			ENABLE_AUTHENTICATION: 		"Zapnúť overenie",
			ENABLE_WRITE_ACCESS: 		"Zapnúť prístup so zápisom",
			ENABLE_MEDIA_SHARE: 		"Zapnúť zdieľanie médií",
			
			BROWSE: 					"Prehľadávať",
			BROWSE_TITLE: 				"Vyberte priečinok",

			NO_VOLUMN:					"Žiadny disk",
			
			NOTICE: 					"Naozaj chcete prejsť na stránku Dynamické DNS? Stlačte Uložiť a údaje sa uložia a stránku opustíte. Stlačte Opustiť a stránku opustíte bez ukladania údajov. Ak chcete zostať, stlačte tlačidlo Zrušiť.",
			NO_CHANGE_NOTICE: 			"Naozaj chcete prejsť na stránku Dynamické DNS?",

			SAVE_FAILED_NOTICE: 		"Ukladanie sa nepodarilo",
			CONTINUE: 					"Opustiť stránku",
			CONTINUE_SAVE: 				"Uložiť",
			CANCLE: 					"Zrušiť",

			ENABLE: 					"Zapnúť"

		},

		PRINT:{
			TITLE: 						"Tlačový server",
			NAME: 						"Názov tlačiarne",
			ENABLE_PRINT_SERVER: 		"Tlačový server",
			NONE: 						"Žiadna",
			
			NOTE_TITLE: 				"Poznámka:",
			STEP1: 						"Krok č. 1:",
			STEP2: 						"Krok č. 2:",
			STEP3: 						"Krok č. 3:",

			NOTE1: 						"Nainštalujte na svoj počítač ovládač tlačiarne. Inštrukcie nájdete v návodoch k počítaču.",
			NOTE2: 						"Pripojte tlačiareň USB k portu USB smerovača pomocou kábla USB",
			NOTE3: 						"Nainštalujte pomôcku ovládača tlačiarne TP-Link USB, alebo zo zdrojového CD (len pre Windows), alebo ju prevezmite (aj pre Windows aj pre Mac OS X) z oficiálnej webovej lokality TP-Link: <a class=\"link\" target=\"blank\" href=\"%SUPPORT%\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Rodičovská kontrola",
			STATUS: 					"Stav",
			UNKNOWN: 					"Neznáme",

			DEVICE_CTR: 				"Zariadenia podliehajúce rodičovskej kontrole",
			DEVICE: 					"Názov zariadenia",
			MAC_ADDRESS: 				"MAC adresa",
			TIME: 						"Čas prístupu k internetu",
			DESCRIPTION: 				"Popis",
			
			ENABLE_THIS_ENTRY: 			"Zapnúť",
			OPTIONAL: 					"(Voliteľne)",
			BTN_VIEW: 					"Zobraziť existujúce zariadenia",
			
			DEVICE_LIST: 				"Zoznam zariadení",
			SYSTEM_TIME: 				"Systémový čas",
			
			RESTR: 						"Obmedzenie obsahu",
			MODE: 						"Obmedzenie",
			BLACKMODE: 					"Čierna listina",
			WHITEMODE: 					"Biela listina",
			ACCESS_DEVICES_LIST: 		"Zoznam zariadení s prístupom",
			
			CHOOSE: 					"Zvoliť",
			ADD_A_NEW_KEYWORD: 			"Pridať nové kľúčové slovo",
			ADD_A_NEW_DOMAIN_NAME: 		"Pridať nový názov domény"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Internet",
			ROUTER: 					"Smerovač",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Iné",

			DEVICE: 					"Zariadenie",
			RATE: 						"Ohodnotiť",
			APPLICATION: 				"Aplikácia",

			NAME: 						"Názov",
			MAC_ADDRESS: 				"MAC adresa",
			IP_ADDRESS: 				"IP adresa",


			DEVICES: 					"Zariadenia"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Šírka pásma",
			TEST_BANDWIDTH: 			">Test šírky pásma",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Zapnúť streamboost",
			UP_LIMITATION: 				"Obmedzenie pre odovzdávanie (Mb/s)",
			DOWN_LIMITATION: 			"Obmedzenie pre preberanie (Mb/s)",
			RUN_BANDWIDTH_TEST: 		"Spustiť test šírky pásma",
			TESTING: 					"Prebieha testovanie",
			TEST_FAILED: 				"Test sa nepodaril",
			TEST_SUCCEED: 				"Test bol úspešný",
			ENABLE_AUTOMATIC_TEST: 		"Zapnúť automatický test",
			KEEP_UP_TO_DATE: 			"Majte vždy najaktuálnejšiu verziu StreamBoost",
			ENABLE_AUTOMATIC_UPDATE: 	"Zapnúť automatické aktualizácie"

		},

		PRIORITY:{
			PRIORITY: 					"Priorita",
			PRIORITY_TIPS: 				"Priorita vám umožňuje nastaviť, aby jedno zariadenie malo vyššiu dôležitosť ako iné. To je vhodné vtedy, keď sa zariadenia uchádzajú o obmedzenú šírku pásma s aplikáciou rovnakej klasifikácie.",
			ALL_DEVICE: 				"Všetky zariadenia",
			ACTIVE_DEVICE: 				"Aktívne zariadenia",
			SAVE: 						"Uložiť",
			ID: 						"ID",
			DEVICE: 					"Zariadenie",
			TYPE: 						"Typ",
			MAC_ADDRESS: 				"MAC adresa",
			STICK: 						"ukazovateľ priebehu"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Štatistika",
			UP_TIME: 					"Zdieľanie",
			DOWNLOADS: 					"Preberanie",
			LAST_DAY: 					"Za posledný deň",
			LAST_WEEK: 					"Za posledný týždeň",
			LAST_MONTH: 				"Minulý mesiac",
			ALL_LAN_HOSTS: 				"Všetci hostitelia siete LAN",
			OTHER: 						"Iné"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Firewall",
			ENABLE_SPI: 				"Firewall SPI",

			DOS_PROTECTION: 			"Ochrana DoS",
			ENABLE_DOS: 				"Ochrana DoS",
			
			OFF: 						"Vyp",
			LOW: 						"Nízky",
			MIDDLE: 					"Stredný",
			HIGH: 						"Vysoký",

			ICMP: 						"Filtrovanie útokov ICMP-FLOOD",
			UDP: 						"Filtrovanie útokov UDP-FLOOD",
			TCP: 						"Filtrovanie útokov TCP-SYN-FLOOD",
			ENABLE_DOS_TIP:             "Funkcie DoS a štatistiku prenosu údajov nie je možné zapnúť naraz.",

			IGNORE: 					"Ignorovať paket Ping z portu WAN",
			FORBID: 					"Zakázať paket Ping z portu LAN",

			BLOCK_DOS: 					"Zoznam blokovaných hostiteľov DoS",
			HOST_NUMBER: 				"Číslo hostiteľa",
			IP_ADDRESS: 				"IP adresa",
			MAC_ADDRESS: 				"MAC adresa"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Kontrola prístupu",
			ENABLE_ACCESS: 				"Kontrola prístupu",

			ACCESS_MODE: 				"Režim prístupu",
			DEFAULT_ACCESS_MODE: 		"Predvolený režim prístupu",
			BLACK_LIST: 				"Čierna listina",
			WHITE_LIST: 				"Biela listina",
			
			WIRED:						"Káblové",
			WIRELESS:					"Bezdrôtové",

			DEVICE_ONLINE: 				"Zariadenia online",
			NAME: 						"Názov zariadenia",
			IP_ADDRESS: 				"IP adresa",
			MAC_ADDRESS: 				"MAC adresa",
			CONN_TYPE: 					"Typ pripojenia",

			BLOCK: 						"Blokovať",

			DEVICE_IN_WHITE: 			"Zariadenia na bielej listine",
			DEVICE_IN_BLACK: 			"Zariadenia na čiernej listine"
		},

		IP_MAC:{
			TITLE: 						"Nastavenie",
			ENABLE_ARP: 				"Zviazanie ARP",

			ARP_LIST: 					"Zoznam ARP",
			ARP_NUM: 					"Číslo položky ARP",

			MAC_ADDRESS: 				"MAC adresa",
			IP_ADDRESS: 				"IP adresa",
			BOUND: 						"Zviazať",
			UNBOUND: 					"Rozviazať",

			BINDING_LIST: 				"Zoznam zviazaní",
			DESCRIPTION: 				"Popis",
			OPTIONAL: 					"(Voliteľne)",
			ENABLE_THIS_ENTRY: 			"Zapnúť"
		},

		TIMESET: {
			TITLE: 						"Nastavenie času",
			ZONE: 						"Časové pásmo",
			DATE: 						"Dátum",
			DATEFORMAT: 				"MM/DD/RRRR",
			TIME: 						"Čas",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"NTP Server I",
			NTP2: 						"NTP Server II",
			OPTIONAL: 					"(Voliteľne)",

			CURRENT_TIME:  				"Aktuálny čas",
			SET_TIME: 					"Nastaviť čas",
			AUTOMATIC: 					"Získať automaticky z internetu",
			MANUAL: 					"Manuálne",
			AUTOMATIC_BTN: 				"Získať",


			GETGMT: 					"Prebrať UTC",

			
			GETGMT_SUCCESS: 			"Prebratie času zo servera NTP bolo úspešné",
			GETGMT_TIMEOUT: 			"Prebratie času zo servera NTP - čas vypršal",
			GETGMT_WAIT: 				"Čakanie",
			
			M: 							"M",
			W: 							"T",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Letný čas",
			ENABLE_DAYLIGHT: 			"Zapnúť letný čas",
			START: 						"Začiatok",
			END: 						"Koniec",

			RUNNING_STATUS: 			"Stav priebehu",
			DOWN: 						"Aktívny je zimný čas.",
			UP: 						"Aktívny je letný čas."
		},

		DIAG:{
			TITLE: 						"Diagnostika",
			DIAGNOSTIC_TOOL: 			"Diagnostický nástroj",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"IP servera VPN/Doménové meno",
			COUNT: 						"Počet paketov Ping",
			
			BASIC: 						"Základné",
			ADVANCED: 					"Pokročilé",
			
			COUNTUNIT: 					"(1 - 50)",

			PKT: 						"Veľkosť paketu Ping",
			PKTUNIT: 					"(4 - 1 472 Bajtov)",

			TIMEOUT: 					"Odozva Ping",
			TIMOUTUNIT: 				"(100 - 2 000 milisekúnd)",

			TTL: 						"Traceroute Max TTL",
			TTLUNIT: 					"(1 - 30)",
			
			START: 						"Začiatok",
			STOP: 						"Ukončiť."
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Váš firmvér je aktuálny",
			TITLE: 						"Modernizácia firmvéru",
			INFO: 						"Informácie o zariadení",
			REMOTE_TITLE: 				"Online aktualizácia",
			LOCAL_TITLE: 				"Lokálna aktualizácie",

			NEWFILE: 					"Nový súbor firmvéru",
			FIRMWAREVERSION: 			"Verzia firmvéru",
			HARDWAREVERSION: 			"Verzia hardvéru",
			LATESTVERSION: 				"Najnovšia verzia",
			CONFIRM_CONTENT:			"Chcete aktualizovať firmware?",
			WARNING:					"Aktualizácie firmvéru ... <br/> Aby nedošlo k poškodeniu, majte router zapnutý a počas procesu aktualizácie firmvéru router nepoužívajte.",
			REBOOTING: 					"Reštartovanie ... <br/> Aby nedošlo k poškodeniu, majte router zapnutý a počas procesu aktualizácie firmvéru router nepoužívajte.",
			DO_NOT_OPERATE: 			"Aktualizácie firmvéru ... <br/> Aby nedošlo k poškodeniu, majte router zapnutý a počas procesu aktualizácie firmvéru router nepoužívajte.",
			FIRMWARE_UPDATING_NOTE: 	"1.Aktualizácia firmvéru...<br/> Ak sa chcete vyhnúť poškodeniu smerovača, udržujte ho, prosím, zapnutý a neprevádzkujte ho, kým prebieha proces aktualizácie firmvéru.",
			REBOOTING_NOTE: 			"2.Reštartovanie...<br/> Ak sa chcete vyhnúť poškodeniu smerovača, udržujte ho, prosím, zapnutý a neprevádzkujte ho, kým prebieha proces aktualizácie firmvéru.",
			SCREEN_UPDATING_NOTE: 		"3.Aktualizácia obrazovky...<br/> Ak sa chcete vyhnúť poškodeniu smerovača, udržujte ho, prosím, zapnutý a neprevádzkujte ho, kým prebieha proces aktualizácie firmvéru.",
			UPGRADE_FAILED: 			"Upgrade se nezdařil.",
			UPGRADE: 					"Modernizácia",
			CHECK: 						"Kontrola",
			DOWNLOADING: 				"Sťahovanie ... <br/> Aby nedošlo k poškodeniu, majte router zapnutý a počas procesu aktualizácie firmvéru router nepoužívajte.",
			UPGRADE_INOF: 				"Aby nedošlo k poškodeniu, majte router zapnutý.",
			NOTE: 						"Poznámka:",
			NO_UPGRADE: 				"Toto je najnovšia verzia",

			UPGRADING: 					"Aktualizácie ... <br/> Aby nedošlo k poškodeniu, majte router zapnutý a počas procesu aktualizácie firmvéru router nepoužívajte",
			RETRY: 						"Opakovať",
			CANCEL: 					"Zrušiť",
			ILEGAL_DEVICE:              "Nemožno identifikovať zariadenia. Obráťte sa prosím na TP-Link technickú podporu.",
			UPGRADE_FAIL: 				"Nemožno aktualizovať. Prosím skúste to znova neskôr.",
            CONFIG_RESET_NOTE:          "Vaše aktuálne nastavenie budú po aktualizácii na túto verziu stratené.",
			CHECK_UPGRADE: 				"Skontrolovať aktualizácie"
		},

		BACKUP:{
			BACKUP: 					"Zálohovanie",
			BACKUPTIP: 					"Uložiť kópiu vašich aktuálnych nastavení.",

			RESTORE: 					"Obnovenie",
			RESTORETIP: 				"Obnovenie uložených nastavení zo súboru.",
			
			RESTORE_WARN:				"Prebieha obnovenie uložených nastavení... <br/>Počas tohto procesu nepoužívajte zariadenie.",
			RESTORE_CONFIRM_CONTENT: 	"Naozaj chcete smerovač obnoviť zo súboru zálohy?",
			
			FILE: 						"Súbor",

			FACTORY: 					"Obnovenie na predvolené továrenské nastavenia",
			FACTORYTIP: 				"Vrátiť všetky konfiguračné nastavenia na predvolené hodnoty.",
			RESETTIP:					"Obnoviť všetky konfiguračné nastavenia na predvolené hodnoty, s výnimkou prihlasovacích údajov a informácií o cloudovom účte.",
			FACTORY_CONFIRM_CONTENT:	"Naozaj chcete smerovač uviesť do stavu s továrenskými predvoľbami?",
			FACTORY_WARN:				"Prebieha obnovenie uložených nastavení... <br/>Počas tohto procesu nepoužívajte zariadenie.",
			
			BACKUPBTN: 					"Zálohovanie",
			RESTOREBTN: 				"Obnovenie",
			RESETBTN:					"Obnovenie",
			FACTORYBTN: 				"Obnovenie na továrenské nastavenia"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Správa konta",
			
			OLDUSER: 					"Staré Meno",
			OLDPWD: 					"Staré Heslo",

			NEWUSER: 					"Nové meno",
			NEWPWD: 					"Nové heslo",
			CONFIRM: 					"Potvrdiť nové heslo",

			RECOVERYINFO: 				"Obnovenie hesla",
			ENABLE_PASSWORD_RECOVERY: 	"Zapnúť obnovenie hesla",
			FROM: 						"Od",
			TO: 						"Do",
			SMTP_SERVER: 				"Server SMTP",
			
			ENABLE_AUTHENTICATION: 		"Zapnúť overenie",
			USERNAME: 					"Používateľské meno",
			PASSWORD: 					"Heslo",

			TEST_MAIL: 					"Testovacia pošta",

			LOCAL:						"Miestna správa",
			LOCAL_MAC_AUTH: 			"Overenie miestneho MAC",
			ACCESS: 					"Prístup pre všetky zariadenia pripojené pomocou LAN",
			ACCESS_TIPS: 				"Prepnite na Zap a zapnete správu pre všetky zariadenia na sieti LAN, alebo nechajte na Vyp a umožníte správu z určitého zariadenia.",
			
			MAC_ADDRESS: 				"MAC adresa",
			VIEW_BTN: 					"Zobraziť existujúce zariadenia",
			DESCRIPTION: 				"Popis",

			EXIST_DEVICE:               "Existujúce zariadenia",

			OPTIONAL: 					"(Voliteľne)",
			ENABLE_THIS_ENTRY: 			"Zapnúť",

			DEVICE_NAME:				"Názov zariadenia",
			IP_ADDRESS:					"IP adresa",
			

			REMOTE: 					"Vzdialená správa",
			DISABLE_REMOTE_MANAGEMENR: 	"Vypnúť vzdialenú správu",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Zapnúť vzdialenú správu zo všetkých zariadení",
			ENABLE_REMOTE_MANAGEMENR: 	"Zapnúť vzdialenú správu z určitých zariadení",
			WEB: 						"Port webovej správy",

			NOTICE:						"Pri konflikte s portom virtuálneho servera! Naozaj chcete pokračovať?",

			REMOTEIP: 					"IP adresa vzdialeného manažmentu",
			REMOTEIPNOTE: 				"(Zadajte 255.255.255.255 pre všetky)"
			
		},

		SYSLOG:{
			TITLE: 						"Systémový záznam",
			LOG_FILTER: 				"Filter záznamov:",
			
			TYPE_EQ: 					"Typ=",
			
			ALL: 						"VŠETKY",

			FIREWALL: 					"Firewall", 
			NAT: 						"NAT",
			DDNS: 						"Dynamický DNS",
			UPNP:						"UPnP",
			IMB:            			"Zviazanie adries IP a MAC",
			IPTV:						"IPTV",
			DHCPS:						"Server DHCP",
			IGMP_PROXY:					"Proxy IGMP",
			DOMAIN_LOGIN:				"Prihlásenie domény",
			BASIC_SECURITY: 			"Základné zabezpečenie",
			PARENTAL_CONTROL: 			"Rodičovská kontrola",
			ACCESS_CONTROL: 			"Kontrola prístupu",
			DOS_PROTECTION: 			"Ochrana DoS",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Štatistika prenosu údajov",
			TIME_SETTINGS: 				"Nastavenie času",
			ACCOUNT_MANAGEMENT: 		"Správa konta",
			LOCAL_MANAGEMENT: 			"Miestna správa",
			REMOTE_MANAGEMENT: 			"Vzdialená správa",
			LOCALE: 					"Miestne",
			FACTORY_RESET: 				"Uvedenie do stavu továrenských nastavení",
			LED_CONTROLLER: 			"Ovládač LED kontroliek",
			NETWORK: 					"Sieť",
			USBSHARE: 					"zdieľanie USB",
			AND: 						"a",
			LEVEL: 						"Úroveň",
			EMERGENCY:					"STAV NÚDZE",
			ALERT:						"STAV POHOTOVOSTI",
			CRITICAL:					"KRITICKÁ",
			ERROR: 						"CHYBA",
			WARNING: 					"VAROVANIE",
			NOTICE: 					"UPOZORNENIE",
			INFO: 						"INFORMÁCIA",
			DEBUG: 						"ODSTRÁNIŤ CHYBY",

			INDEX: 						"Index",
			TYPE: 						"Typ",
			TIME: 						"Čas",
			LEVEL_COL:					"Úroveň",

			CONTENT: 					"Obsah záznamu",
			
			MAIL_LOG: 					"Odoslať log",
			SAVE_LOG: 					"Uložiť záznam",

			SEND_OK: 					"Odoslanie bolo úspešné",
			SEND_FAILED: 				"Odoslanie zlyhalo",

			MAIL_SETTING: 				"Nastavenia pošty",

 			FROM: 						"Od",
 			TO: 						"Do",
 			SMTP_SERVER: 				"Server SMTP",
 			ENABLE_AUTHENTICATION: 		"Zapnúť overenie",

 			USERNAME: 					"Používateľské meno",
 			PASSWORD: 					"Heslo",
 			CONFIRM_PASSWORD: 			"Potvrdiť heslo",

 			AUTO_MAIL: 					"Zapnúť automatickú poštu",
 			LOG_AT: 					"Prihlásenie na",
 			HH_MM: 						"(HH:MM) každý deň",

 			LOG_EVERY: 					"Záznam každých",
 			HOURS: 						"hodín"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Nastavenie",
			STATUS: 					"Zapnúť QoS",
			UPBANDWIDTH: 				"Šírka pásma pre odovzdávanie",
			DOWNBANDWIDTH: 				"Šírka pásma pre preberanie",
			SPEED_M: 					"Mb/s",
			SPEED_K: 					"Kb/s",
			TEST: 						"Test rýchlosti",
			RULE_LIST: 					"Zoznam pravidiel QoS",
			RULE: 						"Pravidlo QoS",
			ID: 						"ID",
			NAME: 						"Názov",
			TYPE: 						"Typ",
			DETAIL: 					"Podrobnosti",
			PRIORITY: 					"Priorita",

			APPLICATION: 				"Aplikácia",
			APPLICATION_LIST: 			"Zoznam aplikácií",
			CUSTOM_APP: 				"Vlastná aplikácia",
			MAC_ADDR: 					"MAC adresa",
			MAC_ADDR_P: 				"MAC",
			IP_ADDR: 					"IP adresa",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Fyzický port",

			LOW: 						"Nízky",
			MIDDLE: 					"Stredný",
			HIGH: 						"Vysoký",

			PROTO: 						"Protokol",
			PORT: 						"Port",
			PROTO_P: 					"Protokol",
			PORT_P: 					"Port",
			PORT_TIPS: 					"(XX alebo XX-XX,1-65535, max. 5 párov)",

			ALL: 						"VŠETKY",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Vlastné",

			WIFI_HOME: 					"WIFI-HOSTITEĽ",
			WIFI_GUEST: 				"WIFI-HOSŤ",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Modernizácia databázy",

			NEWFILE: 					"Nový súbor databázy",
			FIRMWAREVERSION: 			"Verzia databázy",
			CONFIRM_CONTENT:			"Naozaj chcete aktualizovať databázu?",
			WARNING:					"Prebieha aktualizácia databázy... <br/>Počas tohto procesu nepoužívajte zariadenie.",
			
			UPGRADE: 					"Modernizácia",

			SERVICE_RESTART: 			"Prebieha reštartovanie služby QoS",
			
			TYPE: 						"Typ",
			BY_DEVICE: 					"Podľa zariadenia",
			BY_APP: 					"Podľa aplikácie",
			BY_PHY: 					"Podľa fyzického portu",

			HIGH_PRIORITY_LBL: 			"Vysoká priorita:",
			MIDDLE_PRIORITY_LBL: 		"Stredná priorita:",
			LOW_PRIORITY_LBL: 			"Nízka priorita:",

			HIGH_PRIORITY: 				"Vysoká priorita",
			MIDDLE_PRIORITY: 			"Stredná priorita",
			LOW_PRIORITY: 				"Nízka priorita"

		},

		APPLICATION:{
			APP_LIST: 					"Zoznam aplikácií",
			GAME_LIST: 					"Zoznam hier",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Štatistika prenosu údajov",
			ENABLE_STATISTICS: 			"Štatistika prenosu údajov",

			TITLE: 						"Zoznam štatistiky prenosu údajov",
			IP_MAC: 					"IP adresa/MAC adresa",
			TPKT: 						"Paketov celkovo",
			TBYTE: 						"Bajtov celkovo",
			CPKT: 						"Paketov v súčasnosti",
			CBYTE: 						"Bajtov v súčasnosti",
			CICMP: 						"ICMP Tx v súčasnosti",
			CUDP: 						"UDP Tx v súčasnosti",
			CSYN: 						"SYN Tx v súčasnosti",
			
			DELETE_CONFIRM: 			"Naozaj chcete odstrániť štatistiku prenosu údajov?",
			DELETE_ALL_CONFIRM: 		"Naozaj chcete odstrániť všetky štatistiky prenosu údajov?",

			RESET_ALL: 					"Resetovať všetko"
		},

		SYSPARA:{
			W24G: 						"Bezdrôtové pripojenie 2,4 GHz",
			W5G: 						"Bezdrôtové pripojenie 5 GHz",
			SWITCH_NOTICE:  			"Vaša funkcia bezdrôtového pripojenia je vypnutá. Ak chcete túto funkciu používať, zapnite ju tlačidlom WiFi",

			ENABLE_TIPS: 				"Funkcia bezdrôtového pripojenia je vypnutá.",

			BEACON: 					"Signálny interval",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"Prah RTS",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Prah fragmentácie",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"Interval DTIM",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Perióda aktualizácie skupinového kľúča",
			GROUPUNIT: 					"sekúnd",
			
			
			WMM_FEATURE: 				"Funkcia WMM",
			WMM: 						"Zapnúť WMM",

			GI_FEATURE: 				"Funkcia Short GI",
			GI: 						"Zapnúť funkciu Short GI",

			AP_FEATURE: 				"Funkcia izolovania AP",
			AP: 						"Zapnúť funkciu izolovania AP",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Zapnúť TxBF",

			WDS_FEATURE: 				"Premostenie WDS",
			WDS: 						"Zapnúť premostenie WDS",
			
			SSID_BRIDEGE: 				"SSID (, ktorá sa má premostiť)",
			SURVEY: 					"Prieskum",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC adresa",
			SSID: 						"SSID",
			SIGNAL: 					"Signál",
			CHANNEL: 					"Kanál",
			SECURITY: 					"Zabezpečenie",
			CHOSEN: 					"Vybrané",
			AP_NUMBER:					"Číslo AP",

			TOTAL: 						"Celkový počet položiek",

			MAC: 						"MAC adresa (, ktorá sa má premostiť)",
			MACUNIT: 					"Príklad: 00-1D-0F-11-22-33",

			SECURITY: 					"Zabezpečenie",
			NO: 						"Nie",
			NONE: 						"Bez zabezpečenia",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Heslo",
			
			AUTH_TYPE: 					"Over. Typ",
			AUTO: 						"Automaticky",
			OPEN: 						"Otvorený systém",
			SHARED: 					"Zdieľaný kľúč",

			WEP_INDEX: 					"Index WEP",
			KEY1: 						"Kľúč 1",
			KEY2: 						"Kľúč 2",
			KEY3: 						"Kľúč 3",
			KEY4: 						"Kľúč 4",

			WEP_KEY_FORMAT: 			"Formáť kľúča WEP",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimálny",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Zapnúť WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Zapnúť NAT",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"Zapnúť Nat Boost",
			
			MEDIA_SERVER: 				"Server média",
			SCAN_INTERVAL: 				"Interval automatického skenovania (hodín)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Nastavenie úrovne ochrany DoS",

			ICMP: 						"Úroveň paketov ICMP-FLOOD",
			UDP: 						"Úroveň paketov UDP-FLOOD",
			TCP: 						"Úroveň paketov TCP-FLOOD",

			WDS_MODE: 					"Režim WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Nízky",
			MIDDLE: 					"Stredný",
			HIGH: 						"Vysoký",

			TO: 						"Komu",
			NOTICE_NAT_REBOOT: 			"Reštartovanie ...  <br/> Prosím, nevykonávajte žiadne operácie počas reštartovania.",

			NOTICE_NAT_BOOST: 			"Modifikácia NAT Boost bude mať za následok reštart tohto zariadenia, naozaj chcete pokračovať?",
			NOTICE:						"2.Kanál vášho smerovača sa nezhoduje s premosteným kanálom AP. Chcete ho zmeniť?",

			UNIT: 						"(5-7200) paketov/sek.",
			LED: 						"LED",
			NIGHT_MODE: 				"Nočný režim",
			PERIOD_NIGHT_TIME: 			"Doba trvania nočného režimu",
			ENABLE: 					"Zapnúť",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "Indikátory LED sú vypnuté. Ak chcete používať túto funkciu, kliknite na položku LED v pravej hornej časti stránky.",
			NOTE2:                      "Obdobie nočného režimu sa uplatňuje podľa systémového času smerovača. Uistite sa, že už ste nastavili čas smerovača."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Nie je dostupný žiaden certifikát, pred zapnutím VPN servera si jeden <b>vygenerujte</b>.",
			NO_CERT_NOTE2: 				"Nie je dostupný žiaden certifikát, pred exportovaním konfigurácie si jeden <b>vygenerujte</b>.",
			ENABLE_VPN_SERVER: 			"Povoliť VPN server",
			SERVICE_TYPE: 				"Typ služby",
			SERVICE_PORT: 				"Port služby",
			VPN_SUBNET: 				"Podsieť/sieťová maska VPN",
			CLIENTS_ACCESS: 			"Klientsky prístup",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Iba domáca sieť",
			INTERNET_HOME: 				"Internet a domáca sieť",
			CERT_STR: 					"Nie je dostupný žiaden certifikát, kliknutím na OK si jeden vygenerujte a uložte konfiguráciu.",
			CERT_STR2: 					"Nie je dostupný žiaden certifikát, kliknutím na OK si jeden vygenerujte a vyexportujte konfiguráciu.",
			CONF_FILE: 					"Súbor s konfiguráciou", 
			EXPORT_CONF_FILE: 			"Exportujte konfiguráciu.",
			EXPORT: 					"Exportovať",

			INSTALL_GUIDE: 				"Návod na inštaláciu VPN klienta",
			INSTALL_STEP: 				"Ak chcete povoliť a pripojiť klientske zariadenia k serveru OpenVPN:",
			INSTALL_NOTICE:				"Než nakonfigurujete server OpenVPN, nastavte službu dynamického DNS servera (odporúča sa) alebo priraďte WAN portu statickú IP adresu. Uistite sa tiež, že systémový čas je správny.",
			INSTALL_NOTE1: 				"Vyberte položku Povoliť VPN server.",
			INSTALL_NOTE2: 				"Predtým, ako nakonfigurujete server OpenVPN, nakonfigurujte, prosím, službu dynamického DNS (odporúčané) alebo priraďte statickú IP adresu pre port WAN. A ubezpečte sa, či nastavenia externého portu NAT nie sú servisným portom, či je deaktivované DMZ a tiež, či je váš systémový čas správny.",
			INSTALL_NOTE3: 				"Kliknutím na tlačidlo Export uložte súbor s konfiguráciou.",
			INSTALL_NOTE4: 				"Na svojich klientskych zariadeniach si stiahnite a nainštalujte klientsky nástroj OpenVPN z adresy <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Oficiálne podporovanými platformami sú Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Spustite klientsky nástroj OpenVPN a pridajte nové VPN pripojenie pomocou uloženého súboru s konfiguráciou, aby ste mohli pripojiť svoje klientske zariadenie k VPN serveru.",
			NOTE: 						"Ďalšie informácie o klientoch OpenVPN nájdete na <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Klientska IP adresa",
			ACCOUNT_USERNAME: 			"Používateľské meno",
			ACCOUNT_PASSWORD: 			"Heslo",
			CLIENT_IP_NOTE: 			"(až do 10 klientov)",
			SAME_SUBNET_NOTE: 			"Klientská IP adresa a IP adresa LAN nemôžu byť na rovnakej podsieti.",
			CONFLICT_WITH_DHCP: 		"Klientská adresa je v konflikte s fondom IP adries DHCP.",
			CONFLICT_WITH_RESERVED: 	"Klientská adresa je v konflikte s rezervovanou IP adresou.",
			CONFLICT_WITH_OPENVPN: 		"Klientská IP adresa a IP adresa OpenVPN nemôžu byť na rovnakej podsieti.",
			SAME_SUBNET_NOTE2: 			"Podsieť/sieťová maska VPN a LAN IP adresa nemôžu byť v rovnakej podsieti.",
			CONFLICT_WITH_DHCP2: 		"Podsieť/maska siete VPN je v konflikte s fondom IP adries DHCP.",
			CONFLICT_WITH_RESERVED2: 	"Podsieť/maska siete VPN je v konflikte s rezervovanou IP adresou.",
			CONFLICT_WITH_PPTPVPN: 		"Podsieť/maska siete VPN a IP adresa PPTP VPN nemôžu byť na rovnakej podsieti.",
			VPN_MASK_ERROR: 			"Maska siete nemôže byť väčšia, ako 255.255.255.248.",
			ACCOUNT_LIST: 				"Zoznam účtov (až 16 používateľov)",
			ADVANCED_SETTING: 			"Pokročilé",
			ALLOW_SAMBA: 				"Povoliť prístup Samba (sieťové miesto)",
			ALLOW_NETBIOS: 				"Povoliť priebeh NetBIOS",
			ALLOW_UNENCRYPTED_CONN: 	"Povoliť nešifrované pripojenia",
			USERNAME_CONFLICT: 			"Toto používateľské meno už existuje.",
			
			CONNECT_PPTP: 				"Ak chcete povoliť a pripojiť klientske zariadenia k serveru PPTP VPN:",
			CONNECT_NOTICE:				"Než nakonfigurujete server PPTP VPN, nastavte službu dynamického DNS servera (odporúča sa) alebo priraďte WAN portu statickú IP adresu. Uistite sa tiež, že externý port nastavení NAT nie je 1723 a funkcia DMZ je vypnutá a takisto, že systémový čas je správny.",
			CONNECT_NOTE1: 				"Vyberte položku Povoliť VPN server.",
			CONNECT_NOTE2: 				"Nakonfigurujte parametre servera PPTP VPN a kliknite na tlačidlo Uložiť.",
			CONNECT_NOTE3: 				"Na svojich klientskych zariadeniach vytvorte pripojenie PPTP VPN. Oficiálne podporované platformy sú Windows, Mac OSX, Linux, iOS a Android.",
			CONNECT_NOTE4: 				"Spustite program PPTP VPN, pridajte nové pripojenie a zadajte názov domény zaregistrovanej služby DDNS alebo statickú IP adresu priradenú k WAN portu, aby ste mohli pripojiť klientske zariadenie k serveru PPTP VPN.",
			
			GENERATE_CERT: 				"Certifikát",
			GENERATE_NEW_CERT: 			"Vygenerujte certifikát.",
			GENERATE: 					"Generovať",
			GENERATE_TIPS: 				"Vytvára sa certifikát...<br/>Operácia zaberie niekoľko minút, čakajte.",
			CERT_SUCCESS: 				"Úspešné",
			CERT_FAIL: 					"Operácia zlyhala, skúste to znovu.",
			
			VPN_CONNECTIONS: 			"Pripojenia VPN",
			OPEN_VPN_CONNECTIONS: 		"Pripojenie OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"Pripojenie PPTP VPN",
			USER:				"Používateľ ",
			REMOTE_IP:			"Diaľková IP",
			ASSIGNED_IP:			"Priradená IP"
		}
	};
})(jQuery);

