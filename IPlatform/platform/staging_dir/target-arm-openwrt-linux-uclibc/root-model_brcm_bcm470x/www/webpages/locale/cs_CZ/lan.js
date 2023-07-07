(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			EMAIL: 						"E-Mail",
			FORGET_PASSWORD: 			"Zapomněli jste heslo?",
			LOGIN: 						"Přihlásit",
			BEGIN: 						"Začněme",
			IMPORTANT_UPDATE_INFO: 		"Aby se zabránilo konfliktu s IP adresou na zařízení poskytovatele, IP adresa vašeho směrovače byla aktualizována na",
			CONTINUE: 					"Pokračovat",

			IMPORTANT_NOTICE: 			"Důležité oznámení",
			OR: 						"Opravdu chcete pokračovat v návštěvě adresy",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Chcete-li obnovit konfiguraci směrovače na jeho výchozí tovární nastavení, stiskněte a podržte tlačítko Reset po dobu %SECONDS% sekund.",
			FORGET_PASSWORD_INFO_1: 	"Pokud je zapnutá funkce Obnovení hesla. Na určenou e-mailovou adresu zaslán ověřovací kód sloužící k resetování uživatelského jména a hesla",
			FORGET_PASSWORD_SEND_FAILED:"Odeslání kódu se nezdařilo! Zkontrolujte své připojení k Internetu.",

			VERIFICATION_CODE: 			"Ověřovací kód",

			RECEIVE_CODE: 				"Odeslat kód",

			CONFIRM: 					"Potvrdit",
			WELCOME: 					"Vítejte v TP-Link %model%. Přihlaste se, prosím.",
			SEC: 						"s",

			USER_CONFLICT: 				"Konflikt při přihlašování!",
			FIRST_TIME: 				"Nejprve, prosím, nastavte váš %PRODUCT% pro připojení k internetu. Začněte vytvořením hesla pro řízení vašeho %PRODUCT%.",
			FIRST_TIME1: 				"Vytvořte, prosím, administrátorské heslo pro správu vašeho %model%.",
			USER_CONFLICT_INFO: 		"Uživatel %USER% s hostitelem %HOST% (%IP%/%MAC%) jsou právě přihlášeni ke směrovači.",
			USER_CONFLICT_INFO_2: 		"Uživatel %USER% (%IP%) je právě přihlášení ke směrovači.",
			USER_CONFLICT_INFO_3: "V jednu chvíli se může přihlásit pouze jedno zařízení. Chcete pokračovat a vynutit odhlášení jiného zařízení?",
			
			LOGIN_FAILED: 				"Přihlášení se nezdařilo!",
			LOGIN_FAILED_COUNT: 		"Nepodařilo se vám %num1*krát přihlásit. Zbývá vám ještě %num2 pokusů.",
			NO_COOKIE: 					"Pro přihlášení musí být povoleny soubory cookie. Prosím, povolte soubory cookies nebo vypněte privátní/inkognito režim prohlížení ve Vašem webovém prohlížeči. ", 

			FORGET_PASSWORD_NOTE: 		"Pokud jste funkci Obnovení hesla nenakonfigurovali. Můžete obnovit konfiguraci směrovače na jeho výchozí tovární nastavení, stiskněte a podržte tlačítko Reset po dobu %SECONDS% sekund."
		},
		INIT: {
			PASSWORD: 					"Heslo",
			CONFIRM_PASSWORD:				"Potvrdit heslo",
			BEGIN: 						"Začněme",
			IMPORTANT_UPDATE_INFO: 		"Abyste se vyhli konfliktu s front-end zařízením, byla IP adresa vašeho routeru obnovena na",
			CONTINUE: 					"Další",

			IMPORTANT_NOTICE: 			"Důležité oznámení",
			OR: 						"Opravdu chcete pokračovat v návštěvě adresy",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Potvrdit",

			SEC: 						"s",

			USER_CONFLICT: 				"Konflikt přihlášení!",
			
			USER_CONFLICT_INFO: 		"Uživatel %USER% s hostitelem %HOST% (%IP%/%MAC%) je momentálně přihlášen k routeru. Nemůžete se přihlásit ve stejnou dobu. Zkuste to, prosím, později znovu.",
			USER_CONFLICT_INFO_2: 		"Uživatel %USER% (%IP%) je momentálně přihlášen k routeru. Nemůžete se přihlásit ve stejnou dobu. Zkuste to, prosím, později znovu.",
			
			LOGIN_FAILED: 				"Chyba přihlášení!",
			LOGIN_FAILED_COUNT: 		"Nepodařilo se vám %num1*krát přihlásit. Zbývá vám ještě %num2 pokusů.",
			NO_COOKIE: 					"Pro přihlášení musí být povoleny soubory cookie. Prosím, povolte soubory cookies nebo vypněte privátní/inkognito režim prohlížení ve Vašem webovém prohlížeči. ", 

			INIT_NOTE_TITLE: 			"Vážený zákazníku,",
			INIT_NOTE_CONTENT: 			"Nejprve, prosím, nastavte váš %PRODUCT% pro připojení k internetu. Začněte vytvořením hesla pro řízení vašeho %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Verze firmwaru",
			FEATURE: 						"Úpravy a opravy chyb:",
			TITLE: 							"Byl detekován dostupný upgrade firmwaru.",
			UPGRADE_NOW: 					"Aktualizovat nyní",
			REMIND: 						"Připomenout později",
			NOTICE:    						"Ahoj, je dostupný nový firmware pro váš router.",
			NEVER: 							"Ignorovat tuto verzi"
			
		},

		WAN_ERROR: {
			TITLE: 							"Chyba připojení WAN!",
			STATUS: 						"Stav",
			INFO: 							"Informace",
			SETUP: 							"Nastavení připojení k Internetu",
			NEVER: 							"Znovu již nepřipomínat"
		},

		OFFLINE_ERROR:{
			TITLE: "Jejda… Cloudový server není dostupný.",
			NOTE1: "1. Ujistěte se, že máte přístup k internetu.",
			NOTE2: "2. Cloudový server je dočasně nedostupný. Prosím, obnovte stránku později.",
			NOTE3: "3. Jestliže problém stále přetrvává, kontaktujte, prosím, <a target=\"_blank\" id=\"support\">TP-Link technickou podporu</a>.",
			ERROR: "Chyba"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Verze firmwaru",
			HARDWARE_VERSION: 				"Verze hardwaru",
			HELP_SUPPORT: 					"Podpora",
			FAQ: 							"Často kladené dotazy",
			CONFIRM_REBOOT: 				"Opravdu chcete restartovat směrovač?",
			CONFIRM_LOGOUT: 				"Opravdu se chcete odhlásit?",
			UPGRADE_ALERT_1: 				"Aktuální firmware nepodporuje TP-Link cloud služby. Důrazně doporučujeme stáhnout nejnovější firmware na www.tp-link.com a aktualizovat ho.",
			UPGRADE_ALERT_2: 				"Aktuální firmware nepodporuje TP-Link cloud služby. Důrazně doporučujeme aktualizovat firmware klepnutím na ikonu Aktualizovat v pravém horním rohu.",
			ACCOUNT_UNLOGIN: 				"Účet",

			REBOOTING: 						"Restartování…  <br/>Prosím, neprovádějte žádné operace během restartování.",

			HELP_APP: 					"Aplikace",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Pro stažení aplikace TP-Link Tether naskenujte QR kód",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Pohodlně spravujte Vaší síť z jakéhokoli mobilního zařízení. ",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Kompletní ovládání z dlaně Vaší ruky."
		},

		NAV: {
			QUICK_SETUP: 				"Rychlé nastavení",
			BASIC: 						"Základní",
			ADVANCED: 					"Pokročilé nastavení"
		},

		CONTROL: {
			LOGIN: 						"Přihlásit",
			LOGOUT: 					"Odhlásit",
			UPDATE: 					"Aktualizace",
			REBOOT: 					"Restart",
			LED: 						"LED",
			LED_ON: 					"LED Zapnuto",
			LED_OFF: 					"LED Vypnuto",
			LED_DISABLED: 				"LED stav nemůže být změněn v průběhu nočního provozu"
		},

		LANGUAGE: {
			EN_US: 						"Angličtina",
			ZH_CN: 						"Čeština"
		},

		REGION: {
			ALBANIA: 					"Albánie",
			ALGERIA: 					"Alžírsko",
			AMERICAN_SAMOA: 			"Americká Samoa",
			ARGENTINA: 					"Argentina",
			ARMENIA: 					"Arménie",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Austrálie",
			AUSTRIA: 					"Rakousko",
			AZERBAIJAN: 				"Ázerbájdžán",
			BAHAMAS: 					"Bahamy",
			BAHRAIN: 					"Bahrajn",
			BANGLADESH: 				"Bangladéš",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Bělorusko",
			BELGIUM: 					"Belgie",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Bermudy",
			BOLIVIA: 					"Bolívie",
			BOSNIA_HERZEGOWINA: 		"Bosna a Hercegovina",
			BRAZIL: 					"Brazílie",
			BRUNEI_DARUSSALAM: 			"Brunej",
			BULGARIA: 					"Bulharsko",
			CAMBODIA: 					"Kambodža",
			CANADA: 					"Kanada",
			CAYMAN_ISLANDS: 			"Kajmanské ostrovy",
			CHILE: 						"Chile",
			CHINA: 						"Čína",
			COLOMBIA: 					"Kolumbie",
			COSTA_RICA: 				"Kostarika",
			CROATIA: 					"Chorvatsko",
			CYPRUS: 					"Kypr",
			CZECH_REPUBLIC: 			"Česká republika",
			DENMARK: 					"Dánsko",
			DOMINICAN_REPUBLIC: 		"Dominikánská republika",
			ECUADOR: 					"Ekvádor",
			EGYPT: 						"Egypt",
			EL_SALVADOR: 				"Salvador",
			ESTONIA: 					"Estonsko",
			ETHIOPIA: 					"Etiopie",
			FAEROE_ISLANDS: 			"Faerské ostrovy",
			FINLAND: 					"Finsko",
			FRANCE: 					"Francie",
			FRENCH_GUIANA: 				"Francouzská Guyana",
			FRENCH_POLYNESIA: 			"Francouzská Polynésie",
			GEORGIA: 					"Georgia",
			GERMANY: 					"Německo",
			GREECE: 					"Řecko",
			GREENLAND: 					"Grónsko",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hongkong",
			HUNGARY: 					"Maďarsko",
			ICELAND: 					"Island",
			INDIA: 						"Indie",
			INDONESIA: 					"Indonésie",
			IRAN: 						"Írán",
			IRAQ: 						"Irák",
			IRELAND: 					"Irsko",
			ISRAEL: 					"Izrael",
			ITALY: 						"Itálie",
			JAMAICA: 					"Jamajka",

			JAPAN: 						"Japonsko",
			JAPAN_1: 					"Japonsko 1",
			JAPAN_2: 					"Japonsko 2",
			JAPAN_3: 					"Japonsko 3",
			JAPAN_4: 					"Japonsko 4",
			JAPAN_5: 					"Japonsko 5",
			JAPAN_6: 					"Japonsko 6",

			JORDAN: 					"Jordánsko",
			KAZAKHSTAN: 				"Kazachstán",
			KENYA: 						"Keňa",

			NORTH_KOREA: 				"Severní Korea",
			KOREA_REPUBLIC: 			"Korejská republika",
			KOREA_REPUBLIC_3: 			"Korejská republika 3",

			KUWAIT: 					"Kuvajt",
			LATVIA: 					"Lotyšsko",
			LEBANON: 					"Libanon",
			LIBYA: 						"Libye",
			LIECHTENSTEIN: 				"Lichtenštejnsko",
			LITHUANIA: 					"Litva",
			LUXEMBOURG: 				"Lucembursko",
			MACAU: 						"Macau",
			MACEDONIA: 					"Makedonie",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malajsie",
			MALDIVES: 					"Maledivy",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinik",
			MAURITIUS: 					"Mauricius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Mexiko",
			MONACO: 					"Monacké knížectví",
			MONGOLIA: 					"Mongolsko",
			MOROCCO: 					"Maroko",
			NEPAL: 						"Nepál",
			NETHERLANDS: 				"Nizozemsko",
			NETHERLANDS_ANTILLES: 		"Nizozemské Antily",

			NEW_ZEALAND: 				"Nový Zéland",
			NICARAGUA: 					"Nikaragua",
			NIGERIA: 					"Nigérie",
			NORWAY: 					"Norsko",
			NORTHERN_MARIANA_ISLANDS: 	"Severní Mariany",
			OMAN: 						"Omán",
			PAKISTAN: 					"Pákistánská islámská republika",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua-Nová Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Peru",
			PHILIPPINES: 				"Filipínská republika",
			POLAND: 					"Polsko",
			PORTUGAL: 					"Portugalsko",
			PUERTO_RICO: 				"Portoriko",
			QATAR: 						"Katar",
			REUNION: 					"Réunion",
			ROMANIA: 					"Rumunsko",
			RUSSIA: 					"Rusko",
			RWANDA: 					"Rwanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Saúdská Arábie",
			SINGAPORE: 					"Singapur",
			SLOVAK_REPUBLIC: 			"Slovensko",
			SLOVENIA: 					"Slovinsko",
			SOUTH_AFRICA: 				"Jihoafrická republika",
			SPAIN: 						"Španělsko",
			SRI_LANKA: 					"Srí Lanka",
			SURINAME: 					"Surinam",
			SWEDEN: 					"Švédsko",
			SWITZERLAND: 				"Švýcarsko",
			SYRIA: 						"Sýrie",
			TAIWAN: 					"Tchaj-wan",
			TANZANIA: 					"Tanzanie",
			THAILAND: 					"Thajsko",
			TRINIDAD_TOBAGO: 			"Trinidad a Tobago",
			TUNISIA: 					"Tunisko",
			TURKEY: 					"Turecko",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ukrajina",
			UNITED_ARAB_EMIRATES: 		"Spojené arabské emiráty",
			UNITED_KINGDOM: 			"Velká Británie",
			UNITED_STATES: 				"Spojené státy",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Uzbekistán",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnam",
			VIRGIN_ISLANDS: 			"Americké Panenské ostrovy",
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
			M_INDONESIA:                                                  "Indonésie",
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
			M_LUXEMBOURG:                                                 "Lucembursko",
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
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midway, Samoa",
			HAWAII: 					"(GMT-10:00) Havaj",
			ALASKA: 					"(GMT-09:00) Aljaška",
			PACIFIC_TIME: 				"(GMT-08:00) Pacifický čas",
			MOUNTAIN_TIME: 				"(GMT-07:00) Horský standardní čas (USA a Kanada)",
			CENTRAL_TIME: 				"(GMT-06:00) Centrální standardní čas (USA a Kanada)",
			EASTERN_TIME: 				"(GMT-05:00) Východní standardní čas (USA a Kanada)",
			CARACAS:					"(GMT-04:30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04:00) Atlantický standardní čas (USA a Kanada)",
			NEWFOUNDLAND: 				"(GMT-03:30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brazílie, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Střední Atlantik",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azory, Kapverdy",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwichský střední čas, Dublin, Londýn",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlín, Stockholm, Řím, Bern, Brusel",
			ATHENS_HELSINKI: 			"(GMT+02:00) Atény, Helsinki, východní Evropa, Izrael",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Bagdád, Kuvajt, Nairobi, Rijád, Moskva",

			TEHERAN: 					"(GMT+03:30) Teherán",

			ABU_DHABI: 					"(GMT+04:00) Abú Dhabí, Maskat, Kazaň, Volgograd",

			KABUL: 						"(GMT+04:30) Kábul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islámábád, Karáčí, Jekatěrinburg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Kalkata, Bombaj, Nový Dillí",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Almaty, Dháka",
			RANGOON: 					"(GMT+06:30) Rangún",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoj",
			BEIJING_HONGKONG: 			"(GMT+08:00) Peking, HongKong, Perth, Singapur",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokio, Osaka, Sapporo, Soul, Jakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Šalamounovy ostrovy, Nová Kaledonie",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fidži, Kamčatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Aplikace",
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
			xl_others:  				"xl_ostatní",
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
			DAY: 						"Den",

			MONDAY: 					"Pondělí",
			TUESDAY: 					"Úterý",
			WEDNESDAY: 					"Středa",
			THURSDAY: 					"Čtvrtek",
			FRIDAY: 					"Pátek",
			SATURDAY: 					"Sobota",
			SUNDAY: 					"Neděle",
			
			MON: 						"Po",
			TUES: 						"Út",
			WED: 						"St",
			THUR: 						"Čt",
			FRI: 						"Pá",
			SAT: 						"So",
			SUN: 						"Ne",

			JAN: 						"Leden",
			FEB: 						"Únor",
			MAR: 						"Březen",
			APR: 						"Duben",
			MAY: 						"Květen",
			JUN: 						"Červen",
			JUL: 						"Červenec",
			AUG: 						"Srpen",
			SEP: 						"Září",
			OCT: 						"Říjen",
			NOV: 						"Listopad",
			DEC: 						"Prosinec"

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
			PM_12: 						"24:00"
		},

		ORDER: {
			"1ST": 						"První",
			"2ND": 						"2",
			"3RD": 						"3",
			"4TH": 						"4",
			"5TH": 						"Poslední",
			"1ST_": 					"1",

			TH: 						"."
		},

		GRID: {
			CLIENT_NUMBER: 				"Číslo klienta",

			ID: 						"ID",
			MODIFY: 					"Upravit",
			STATUS: 					"Stav",
			ENABLE: 					"Povolit",

			OPERATION: 					"Operace",
			CHOOSE: 					"Vybrat",
			DESCRIPTION: 				"Popis",
			

			AUTO_REFRESH: 				"Automaticky obnovit",
			REFRESH: 					"Obnovit",
			NUMBER: 					"číslo",
			ENABLED: 					"Zapnuto",
			DISABLED: 					"Vypnuto",
			ACTIVE: 					"Aktivní",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Přidat",
			CHOOSE: 					"Vybrat",
			EDIT: 						"Upravit",
			DELETE: 					"Odstranit",
			DELETE_ALL: 				"Odstranit vše",
			REMOVE: 					"Odstranit",
			RESET: 						"Resetovat",
			RESET_ALL: 					"Vynulovat vše",
			DETECT: 					"Detekovat",
			ENABLE: 					"Povolit",
			DISABLE: 					"Vypnout",
			CLEAR: 						"Clear",

			REFRESH: 					"Obnovit",
			SEARCH: 					"Hledat...",
			BROWSE: 					"Procházet",

			SAVE: 						"Uložit",
			BACK: 						"Zpět",

			PREV: 						"Předchozí",
			NEXT: 						"Další",
			FINISH: 					"Dokončit",
			
			ON: 						"Zapnout",
			OFF: 						"Vypnout",
			LOW: 						"Nízké",
			MIDDLE: 					"Střední",
			HIGH: 						"Vysoké",
			
			OK: 						"OK",
			CANCEL: 					"Zrušit",

			YES: 						"Ano",
			NO: 						"Ne",
			
			CONNECTED: 					"Připojeno",
			CONNECTING: 				"Připojování",
			DISCONNECTING: 				"Odpojování",
			DISCONNECTED: 				"Nepřipojeno",

			PASSWORD_HINT: 				"Heslo",
			FILEBUTTONTEXT: 			"Procházet",
			FILEBLANKTEXT: 				"Vyberte prosím soubor.",
			NOSELECTEDTEXT: 			"Vyberte možnosti.",

			ADD_A_NEW_KEYWORD: 			"Přidat nové klíčové slovo",

			SUCCESSED: 					"Úspěch!",
			FORM_SAVED: 				"Uloženo",
			FORM_FAILED: 				"Selhání",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Uloženo",
			GRID_FAILED: 				"Selhání",
			GRID_NONE_SELECT: 			"Vyplňte, prosím, alespoň jednu položku.",
			GRID_DELETE_COMFIRM: 		"Opravdu chcete odstranit tyto položky?",
			GRID_DELETE_ALL_COMFIRM: 	"Opravdu chcete odstranit všechny tyto položky?",
			GRID_MAX_RULES: 			"Překročen maximální počet položek.",
			KEYWORD_MAX_OVERFLOW: 		"Počet klíčových slov překročil limit.",

			NOTE: 						"Poznámka:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Neplatný formát.",
			BLANKTEXT: 					"Tuto položku je nutné vyplnit.",

			EMAIL: 						"Neplatný formát e-mailu.",
			NUMBER: 					"Neplatný formát.",

			NUMBER_MIN: 				"Neplatná hodnota. Zadejte číslo větší než  %min.",
			NUMBER_MAX: 				"Neplatná hodnota. Zadejte číslo menší než %max.",

			NUMBER_MIN_MAX: 			"Neplatná hodnota. Zadejte číslo mezi %min a %max.",
			HEX: 						"V tomto poli by mělo být zadáno hexadecimální číslo.",

			IP: 						"Neplatný formát.",

			IP_NO_ALL_ZERO:				"Adresa by neměla být 0.0.0.0.",
			IP_NO_LOOP:					"Adresa by neměla být loopback IP.",
			IP_NO_D_TYPE:				"Adresa by neměla být IP třídy D.",
			IP_NO_E_TYPE:				"Adresa by neměla být IP třídy D.",
			IP_NO_ALL_ONE:				"Adresa by neměla být 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"Adresa by neměla začínat číslem 255.",
			IP_NO_FIRST_ZERO:			"Adresa by neměla začínat 0.",
			MASK_NO_ALL_ONE:			"Maska nesmí být 255.255.255.255.",

			IPV6: 						"Neplatný formát.",
			IPV6_NOT_GLOBAL:			"Neplatný formát.",
			IPV6_NOT_PREFIX:			"Neplatný formát.",
			IP_DOMAIN: 					"Neplatný formát.",
			IPV6_DOMAIN: 				"Neplatný formát.",
			MAC: 						"Neplatný formát.",
			MULTI_MAC:					"Neplatný formát.",
			DATE: 						"Neplatný formát.",
			DATE_INVALID: 				"Zadejte datum od 01/01/1970 do 31/12/2030.",
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
			NAME_SPECIAL: 				"Prosím, zadejte 4-15 písmen, čísel nebo znaky - _ .  ",
			VPN_NAME_PWD: 				"Prosím, zadejte 1-15 písmen, čísel nebo znaky - _ .  "	
			
		},


		ERROR: {			
			"00000001":					"Neplatný typ.",
			"00000002":					"Chyba kontrolního součtu.",
			"00000003":					"Soubor je příliš velký.",
			"00000004":					"Chyba uploadu.",
			"00000005":					"Chyba restartu.",
			"00000006":					"Neznámá chyba.",
			"00000007":					"Položka již existuje. Zadejte prosím jinou.",

			"00000009":					"Použijte výchozí hodnotu 21 nebo zadejte hodnotu mezi 1024 a 65535.",
			"00000010":					"Port by měl mít číselnou hodnotu.",

			"00000011":					"Uživatelské jméno nesmí být stejné jako hodnota v poli Od.",
			"00000012": 				"Uživatelské jméno musí začínat písmenem.",

			"00000021":					"Neplatný formát.",

			"00000032": 				"Hodnota musí být menší než údaj v poli Nízká.",
			"00000033": 				"Hodnota musí být menší než údaje v poli Střední nebo Nízká.",
			"00000034": 				"Neplatná hodnota, zadejte číslo mezi 5 a 7200.",

			"00000039": 				"Použijte výchozí hodnotu 0 nebo zadejte hodnotu mezi 30 a 86400.",
			"00000040": 				"Údaje SSID a MAC adresa jsou vyžadovány.",

			"00000042": 				"Použijte výchozí hodnotu 80 nebo zadejte hodnotu mezi 1024 a 65535.",

			"00000045": 				"Výchozí brána a IP adresa LAN by měla být ve stejné podsíti. Zadejte prosím znovu.",

			"00000047": 				"IP adresa a IP adresa LAN by měly být ve stejné podsíti. Zadejte prosím parametry znovu.",

			
			"00000049":					"Cílová síť je neplatná.",

			"00000050": 				"Chybná IP adresa DNS serveru. Zadejte prosím jinou IP adresu.",
			"00000051": 				"Tato MAC adresa již existuje. Zadejte prosím jinou.",
			"00000052": 				"Tato IP adresa již existuje. Zadejte prosím jinou.",

			"00000053": 				"Počáteční adresa by neměla mít větší hodnotu než konečná adresa. <br/> Zadejte prosím znovu.",

			"00000054": 				"Fond IP adres a IP adresa LAN by měly být ve stejné podsíti. Zadejte prosím parametry znovu.",

			"00000055": 				"IP adresa nesmí být stejná s adresou LAN.",

			"00000056": 				"Vzdálená IP adresa a aktuální IP adresa LAN by neměly být ve stejné podsíti. Zadejte prosím jinou.",

			"00000057": 				"Neplatné heslo PSK. Zadejte prosím znovu.",
			"00000058": 				"Neplatné heslo WEP. Zadejte prosím znovu.",

			"00000059": 				"Neplatná maska podsítě a IP adresa LAN, zadejte prosím platné parametry.",

			"00000060": 				"IP adresa WAN a IP adresa LAN by neměly být ve stejné podsíti. <br/> Zadejte prosím jinou.",

			"00000061": 				"Čas začátku by měl být dřívější než čas ukončení.",

			"00000062": 				"Tuto položku je nutné vyplnit.",
			"00000063": 				"Tuto položku je nutné vyplnit.",

			"00000064": 				"Nelze blokovat MAC adresu hostitele.",
			"00000065": 				"Tato položka je v konfliktu s existujícími položkami. Prosim ověřte.",
			
			"00000066": 				"Heslo by mělo mít 8-63 znaků nebo 64 hexadecimální číslic.",
			"00000067": 				"Heslo by mělo mít 10 hexadecimální číslic.,",
			"00000068": 				"Heslo by mělo mít 5 ACII znaků.,",
			"00000069": 				"Heslo by mělo mít 26 hexadecimální číslic.",
			"00000070": 				"Heslo by mělo mít 13 ACII znaků.",
			"00000071": 				"Heslo by mělo mít 32 hexadecimálních číslic.",
			"00000072": 				"Heslo by mělo mít 16 ACII znaků.",
			"00000073": 				"Heslo by mělo mít méně než 64 znaků.",

			"00000074": 				"Neplatný typ.",

			"00000075": 				"Délka kód PIN by měla být 8.",

			"00000076": 				"Konflikt vstupu s existujícími položkami, zkontrolujte prosím trigger port a trigger protokol.",
			"00000077": 				"IP adresa nesmí být stejná s adresou LAN.",
			"00000078": 				"IP adresa hostitele nesmí být stejná s IP adresou LAN.",

			"00000080": 				"Hesla se neshodují. Zkuste to prosím znovu.",

			"00000088": 				"Tato operace není pro vzdálenou správu povolena.",
			"00000089": 				"Překročili jste %num pokusů, zkuste prosím znovu za dvě hodiny.",

			"00000090": 				"Cílová IP adresa nesmí být IP adresa LAN.",
			"00000091": 				"Cílová IP adresa nesmí být IP adresa WAN.",

			"00000092": 				"IP adresa a IP adresa LAN by neměly být ve stejné podsíti. <br/>Zadejte prosím znovu.",
			"00000093": 				"IP adresa WAN a IP adresa LAN by neměly být ve stejné podsíti. <br/>Zadejte prosím jinou.",

			"00000094": 				"Vlan ID nesmí být stejné.",
			"00000095": 				"Je vyžadován alespoň jeden Internetový port.",

			"00000096": 				"Klíčové slovo již existuje.",

			"00000097": 				"Konfigurace provedené na frekvenčním pásmu 2,4 GHz se projeví až poté, co bude zapnuté tlačítko Wi-Fi.",
			"00000098": 				"Konfigurace provedené na frekvenčním pásmu 5GHz se projeví až poté, co bude zapnuté tlačítko Wi-Fi.",
			"00000099": 				"Konfigurace provedené na frekvenčních pásmech 2,4 GHz a 5 GHz se projeví až poté co bude zapnuté tlačítko WiFi.",

			"00000100": 				"Konfigurace 5GHz sítě není dostupná z důvodu omezení ve vaší oblasti/zemi.",

			"00000101": 				"Funkce bezdrátového připojení je vypnutá. Pokud ji chcete použít, stiskněte tlačítko WiFi.",
			"00000102": 				"Funkce bezdrátového připojení je vypnutá. Pokud ji chcete použít, stiskněte tlačítko WiFi.",

			"00000103": 				"Funkce bezdrátového připojení je vypnutá. Pokud ji chcete použít, stiskněte tlačítko WiFi.",
			"00000104": 				"Funkce bezdrátového připojení je vypnutá.",

			"00000105": 				"QoS a IPTV funkci nelze povolit současně.",

			"00000106": 				"IP adresa nesmí být stejná s adresou LAN.",
			
			"00000107": 				"Cíl již existuje.",

			"00000110": 				"IP adresa a IP adresa LAN by neměly být ve stejné podsíti.",
			
			"00000111": 				"Funkce QoS a <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\"> NAT Boost </a> nelze povolit současně.",
			"00000112": 				"Funkce WDS funguje v obou pásmech 2,4 GHz i 5 GHz.",
			"00000113": 				"WDS a síť pro hosty nelze povolit současně.",
			"00000114": 				"Funkce Statistika provozu a <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\"> NAT Boost </a> nelze povolit současně.",
			"00000115": 				"IPTV a <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> funkci nelze povolit současně.",

			"00000117": 				"Název domény již existuje.",
			"00000118": 				"Počet názvů domén překročil limit.",
			"00000119":				"Pokud je aktivní funkce  <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> nebo  <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Traffic Statistics</a>, nelze NAT Boost povolit.",

			"00000120": 				"Heslo by mělo mít 5 nebo 13 ACII znaků.",
			"00000121": 				"Heslo by mělo mít 10 nebo 26 hexadecimálních číslic.",
			"00000122": 				"Uživatelské jméno a heslo jsou prázdné. Opravdu chcete pokračovat?",
			"00000123": 				"Ukládání...  <br/>Během tohoto procesu nic neprovádějte.",
			"00000124": 				"PIN kód směrovače se zablokoval z důvodu opakovaného chybného zadání PIN kódu. Vytvořte prosím nový.",

			"00000125": 				"Počet QoS pravidel překročil limit.",
			"00000126": 				"Velikost souboru překročila limit.",
			"00000127": 				"Obsah souboru je chybný.",
			"00000128": 				"Vyberte alespoň jednu aplikaci.",
			"00000129": 				"Vyberte alespoň jeden fyzický port.",
			"00000130":					"Funkce WPS je vypnutá.",
			"00000131": 				"Adresa NTP serveru by neměla být loopback adresa.",
			"00000132": 				"Režim se nepodařilo přepnout. Zkuste to znovu později nebo restartujte váš směrovač.",
			"00000133": 				"Neplatná IP adresa hostitele DMZ. Zadejte prosím platnou adresu.",
			"00000134":  				"Neplatná interní IP adresa. Zadejte prosím platnou adresu.",
			"00000135": 				"Chybný soubor firmwaru.",
			"00000136": 				"Chyba souboru zálohy.",
			"00000137": 				"Uživatelské jméno je prázdné, jste si jisti, že chcete pokračovat?",
			"00000138": 				"Heslo je prázdné, jste si jisti, že chcete pokračovat?",
			"00000139": 				"Nesprávné parametry pro obnovení hesla.",
			"00000140": 				"Nesprávný kód.",
			"00000141": 				"Obnovení hesla je zakázáno.",
			"00000142": 				"Nepodařilo se odeslat kód. Zkontrolujte prosím připojení k Internetu.",
			"00000143": 				"Neplatné e-mailové adresy.",
			"00000144": 				"Neplatná e-mailová zpráva.",
			"00000145": 				"Nelze najít hostitele.",
			"00000146": 				"Ověření se nezdařilo.",
			"00000147": 				"Port by měl být od 1 do 65535.",
			"00000148": 				"Při rozsahu portů, musí být číslo počátečního portu menší než číslo koncového portu. Zadejte prosím znovu.",
			"00000149": 				"Číslo portu se překrývá. Zadejte prosím znovu.",
			"00000150": 				"Neplatná maska podsítě a IP adresa WAN, zadejte prosím platné parametry.",
			"00000151": 				"Vyberte prosím alespoň jeden den.",
			"00000152": 				"Nastavte prosím čas pro přístup k Internetu.",
			"00000213":					"IP adresa DNS serveru a LAN IP adresa nemohou být ve stejné podsíti. <br/>Vložte, prosím, jinou.",
			"10000139": 				"Žádné připojení k internetu",
			"10000140": 				"Vypršel časový limit žádosti. Zkontrolujte prosím připojení k Internetu a zkuste to znovu později.",
			"10000158": 				"WAN port je odpojen.",
			"10000159": 				"Nelze se připojit k Internetu. Obraťte se na poskytovatele služeb nebo to zkuste znovu později.",
			"10000160": 				"Nelze získat IP adresu z DHCP serveru. Zkontrolujte typ připojení WAN nebo to zkuste znovu později.",
			"10000161": 				"Ověřování PPPoE se nezdařilo. Zkontrolujte prosím své uživatelské jméno a heslo.",
			"10000162": 				"Nelze se připojit k serveru PPPoE.",

			"10000164": 				"Ověřování PPTP se nezdařilo. Zkontrolujte prosím své uživatelské jméno a heslo.",
			"10000165": 				"Nelze se připojit k serveru PPTP.",

			"10000167": 				"Ověřování L2TP se nezdařilo. Zkontrolujte prosím své uživatelské jméno a heslo.",
			"10000168": 				"Nelze se připojit k L2TP serveru.",
			"10000169": 				"Neznámá chyba. Zkuste to, prosím, později.",
			"10000172": 				"Připojení se nezdařilo.",

			"10000185": 				"Systémová chyba.",	
			"10000186": 				"Chybný soubor firmwaru.",	
			"10000187": 				"Chyba stahování firmwaru.",	
			"10000188": 				"Chyba aktualizace firmwaru.",	
			"10000191": 				"Nelze stáhnout soubor s firmwarem.",
			"10000192": 				"Chyba aktualizace firmwaru.",
			"10000193": 				"Nelze se připojit k serveru.",	
			"10000194": 				"Není možné se připojit ke cloudovému serveru. Zkuste to, prosím, později znovu.",
			"10000195": 				"Není možné nastavit heslo, protože už byla nastaveno.",
			
			"E3002":                    "Čas požadavku vypršel.", 
			"E10000": 					"Obecná chyba.",
			"E20002": 					"Čas požadavku vypršel.",
			"E20003": 					"Cloudový server je zaneprázdněn. Zkuste to, prosím, později.",
			"E20107": 					"Neplatný vstup.",
			"E20200": 					"Neplatný formát e-mailu.",
			"E20502": 					"Toto zařízení není možné provázat s účtem. Zkuste to, prosím, později.",
			"E20503": 					"Provázání tohoto zařízení nelze zrušit. Zkuste to, prosím, později.",
			"E20506": 					"Akce selhala. Zařízení je již provázáno s jiným cloudovým účtem.",
			"E20507": 					"Provázaní tohoto zařízení s účtem bylo zrušeno.",
			"E20508": 					"Počet provázaných účtů dosáhl maxima.",
			"E20509": 					"Uživatelské účty nemají právo vázat nové uživatele.",
			"E20571": 					"Toto zařízení je offline.",
			"E20580": 					"Akce selhala. Tento účet není provázán se zařízením.",
			"E20600": 					"Tento email není registrován.",
			"E20601": 					"Nesprávné uživatelské jméno nebo heslo.",
			"E20602": 					"Tento účet ještě nebyl aktivován.",
			"E20603": 					"Tento email už je registrován.",
			"E20604": 					"Neplatné uživatelské jméno. Vložte, prosím, emailovou adresu nebo telefonní číslo.",
			"E20606": 					"Není možné odeslat aktivační email k účtu.",
			"E20615": 					"Neplatné heslo. Vložte, prosím, 6-32 ACII znaků bez mezer.",
			"E20616": 					"Neplatné heslo. Vložte, prosím, 6-32 ACII znaků bez mezer.",
			"E20617": 					"Tento účet neexistuje.",
			"E20618": 					"Tento účet neexistuje.",
			"E20620": 					"Neplatné uživatelské jméno. Vložte, prosím, 1-64 znaků.",
			"E20661": 					"Tento účet bude na 2 hodiny uzamčen z důvodu vysokého počtu pokusů o přihlášení (20 pokusů za půl hodiny).",
			"E20662": 					"Zařízení je uzamčeno. V příštích 24 hodinách nebude zařízení odpovídat na žádné požadavky ověření kódu.",
			"E20671": 					"Není možné ověřit účet.",
			"E20672": 					"Není možné ověřit účet. Platnost odkazu aktivace propadla. Odešlete, prosím, nový požadavek.",
			"E20673": 					"Platnost odkazu pro reset hesla propadla. Odešlete, prosím, nový požadavek.",
			"E20674": 					"Není možné resetovat heslo.",
			"E20675": 					"K tomuto účtu je momentálně přihlášen někdo jiný.",
			"E22000": 					"Neplatný vstup.",
			"E22001": 					"Jméno domény je již registrované.",
			"E22002": 					"Počet registrovaných doménových jmen již dosáhl maxima.",
			"E22003": 					"Počet provázaných doménových jmen dosáhl maxima.",
			"E22004": 					"Tohle jméno domény je již provázáno s jiným zařízením.",
			"E22006": 					"Chyba systému. Zkuste to, prosím, později.",
			"E22007": 					"Jméno domény obsahuje citlivá slova. Zkuste, prosím, jiné.",
			"E22008": 					"Jméno domény neexistuje.",

			"E50101": 					"WAN port je odpojen.",
			"E50102": 					"Není možné se připojit k internetu. Kontaktujte, prosím, vašeho poskytovatele internetu nebo to zkuste znovu.",
			"E50103": 					"Nelze získat IP adresu z DHCP serveru. Zkontrolujte typ připojení WAN nebo to zkuste znovu později.",
			"E50111": 					"Ověřování PPPoE se nezdařilo. Zkontrolujte prosím své uživatelské jméno a heslo.",
			"E50112": 					"Nelze se připojit k serveru PPPoE.",
			"E50121": 					"Ověřování PPTP se nezdařilo. Zkontrolujte prosím své uživatelské jméno a heslo.",
			"E50122": 					"Nelze se připojit k serveru PPTP.",
			"E50131": 					"Ověřování L2TP se nezdařilo. Zkontrolujte prosím své uživatelské jméno a heslo.",
			"E50132": 					"Nelze se připojit k L2TP serveru.",
			"E50140": 					"Neznámá chyba. Zkuste to, prosím, později.",
			"E51215": 					"Vypršel časový limit žádosti. Zkontrolujte prosím připojení k Internetu a zkuste to znovu později.",
			"E_CLOUD_SERVER": 			"Chyba serveru. Zkuste to, prosím, později znovu.",
			"E5000": 					"Nelze se připojit ke cloud serveru.",
			"E5001": 					"Nesprávné TP-Link ID (e-mail) nebo je vaše zařízení off-line a pouze admin (%email) má off-line přístup.",
			"E5002": 					"Nesprávné heslo"
		},

		MENU: {
			STATUS: 					"Stav",
			NETWORK: 					"Síť",
			NETWORK_MAP: 				"Mapa sítě",
			INTERNET: 					"Internetu",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP server",
			DYNAMIC_DNS: 				"Dynamické DNS",
			ADVANCED_ROUTING: 			"Pokročilé směrování",

			WIRELESS: 					"Bezdrátová síť",
			WIRELESS_SETTINGS: 			"Nastavení",
			WDSBRIDGING: 				"Přemostění WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"Filtrování MAC adres",
			WIRE_STATISTICS: 			"Statistika",
			
			
			GUEST_NETWORK: 				"Síť pro hosty",
			WIRELESS_SETTINGS: 			"Nastavení",
			STORAGE_SHARING: 			"Sdílení úložného prostoru",
			NAT_FORWARDING: 			"NAT - přesměrování",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Přesměrování portů",
			PORT_TRIGGERING: 			"Port triggering",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Nastavení USB",
			BASIC_SET: 					"Základní nastavení",
			DISK_SET: 					"Nastavení zařízení",
			FOLDER_SHARING: 			"Přístup ke sdílení",
			STORAGE_SHARING: 			"Sdílení úložného prostoru",
			FTP_SERVER: 				"FTP Server",
			MEDIA_SERVER: 				"Media Server",
			PRINT_SERVER: 				"Tiskový server",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Rodičovská kontrola",
			
			QOS:  						"QoS",
			DATABASE:  					"Databáze",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Mapa",
			SB_MAP: 					"Mapa",
			SB_BANDWIDTH:  				"Šířka pásma",
			SB_PRIORITY: 				"Priorita",
			SB_STATISTICS: 				"Statistika",

			
			SECURITY: 					"Zabezpečení",
			SETTINGS: 					"Nastavení",
			ACCESS_CONTROL: 			"Řízení přístupu",
			IP_MAC_BINDING: 			"Vazba IP a MAC adresy",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Systémové nástroje",
			TIME_SETTINGS: 				"Nastavení času",
			DIAGNOSTIC: 				"Diagnostika",
			FIRMWARE_UPGRADE: 			"Upgrade firmwaru",
			BACKUP_RESTORE: 			"Záloha a obnova",
			ADMINISTRATION: 			"Správa",
			SYSTEM_LOG: 				"Systémový protokol",
			STATISTICS: 				"Statistika provozu",
			SYSTEM_PARAMETERS: 			"Systémové parametry",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"VPN server",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"Připojení VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Oblast a časové pásmo",
			INTERNET_CONNECTION_TYPE: 	"Typ připojení k Internetu",
			WIRELESS_SETTINGS: 			"Nastavení",
			SUMMARY: 					"Souhrn",
			SETUP_COMPLETE: 			"Test Internetového připojení",
			SETUP_COMPLETE_CLOUD: 			"TP-Link Cloudová služba",

			EXIT: 						"Konec",
			NEXT: 						"Další",
			SAVE: 						"Uložit",
			FINISH: 					"Dokončit",
			OK: 						"OK",
			NONE: 						"Detekce se nezdařila.",

			REGION: 					"Oblast",
			TIME_ZONE: 					"Časové pásmo",

			AUTO_DETECT: 				"Automaticky detekovat",
			DYNAMIC_IP: 				"Dynamická IP adresa",
			STATIC_IP: 					"Statická IP adresa",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Pokud si nejste jisti, jaký typ internetového připojení máte, použijte funkci automatické detekce nebo se obraťte na svého poskytovatele internetových služeb o pomoc.",

			DYNAMIC_IP_INFO: 			"Pokud váš poskytovatel internetových služeb umožňuje přístup k internetu pouze na konkrétní MAC adresu, musíte MAC adresu naklonovat a zajistit tak přístup jiným zařízením. Pokud si nejste jisti, vyberte Neklonovat MAC adresu.",
			MAC_CLONE_NO: 				"Neklonovat MAC adresu",
			MAC_CLONE_YES: 				"Klonovat aktuální MAC adresu počítače",
			MAC_CLONE_NOTE: 			"Poznámka: Pokud zvolíte možnost Klonovat MAC adresu, před kliknutím na tlačítko Další se ujistěte, že MAC adresa počítače je registrována u vašeho poskytovatele internetových služeb.",

			PPPOE_INFO: 				"Zadejte své uživatelské jméno a heslo pro připojení PPPoE.",
			
			STATIC_IP_INFO: 			"Zadejte svou IP adresu.",

			L2TP_INFO: 					"Zadejte své uživatelské jméno a heslo pro připojení L2TP.",
			PPTP_INFO: 					"Zadejte své uživatelské jméno a heslo pro připojení PPTP.",
			
			USERNAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			SERVER_IP_ADDRESS_NAME: 	"IP adresa VPN serveru / Doménové jméno",
			IP_ADDRESS: 				"IP adresa",
			SUBNET_MASK: 				"Maska podsítě",
			DEFAULT_GATEWAY: 			"Výchozí brána",
			PRIMARY_DNS: 				"Primární DNS",
			SECOND_DNS: 				"Sekundární DNS",
			OPTIONAL: 					"(Nepovinné)",
			
			ON: 						"Zapnout",
			OFF: 						"Vypnout",
			WIRELESS_24GHZ: 			"Bezdrátová síť 2,4 GHz",
			WIRELESS_5GHZ: 				"Bezdrátová síť 5 GHz",
			ENABLE_WIRELESS_RADIO: 		"Povolit bezdrátový vysílač",
			NAME_SSID: 					"Název bezdrátové sítě (SSID)",

			SUMMARY_INFO1: 				"Dříve než kliknete na tlačítko <strong>Další</strong>, musíte znovu připojit vaše bezdrátová zařízení k nové bezdrátové sítě.",
			SUMMARY_INFO2: 				"Váš název bezdrátové sítě a heslo bylo změněno následovně:",
			SUMMARY_INFO3: 				"Ujistěte se, že jste připojeni k nové bezdrátové síti.",

			WIRELESS_24GHZ_SSID: 		"Název 2,4GHz bezdrátové sítě (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Heslo 2,4GHz bezdrátové sítě",
			WIRELESS_5GHZ_SSID: 		"Název 5GHz bezdrátové sítě (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Heslo 5GHz bezdrátové sítě",

			SORRY: 						"Nezdařilo se.",
			SUCCESS: 					"Úspěch!",
			TEST_INTERNET_SUCCESS_INFO: "Kliknutím na tlačítko Dokončit ukončíte rychlé nastavení.",

			TEST_INTERNET_FAILED_INFO_0:"Ověřte, zda jsou všechny parametry rychlého nastavení správné a zkuste to znovu. Pokud jsou všechny parametry rychlého nastavení správné. Restartujte modem, počkejte 2 minuty a klikněte na tlačítko Vyzkoušet internetové připojení ještě jednou. Pokud modem nepoužíváte, obraťte se na svého poskytovatele internetových služeb o pomoc.",
			TEST_INTERNET_FAILED_INFO_1: "Jejda… Připojení k internetu nebylo úspěšně nastaveno.<b/>1. Ujistěte se, že jsou všechny kabely řádně připojeny.<br/>2. Klikněte na Zpět a ověřte, že jsou správně zadané informace o připojení k Internetu.<br/> 3. Kontaktujte naši technickou podporu, jestliže problém stále přetrvává.",
			SUMMARY_INFO4: 				"Omlouváme se! Zjistili jsme, že jste svá bezdrátové zařízení nepřipojil do nové bezdrátové sítě. Připojte je a poté klikněte na <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Gratulujeme!",
			COMPLETE_INFO_0: 			"Dokončili jste proces rychlého nastavení.",
			COMPLETE_INFO_1:			"Níže klikněte na Vyzkoušet internetové připojení a poté klikněte na tlačítko Dokončit.",
			COMPLETE_INFO_2: 			"Nejste přihlášeni k vašemu účtu TP-Link Cloud. Můžete se přihlásit později v menu Základní > TP-Link Cloud.",
			TEST_INTERNET: 				"Test Internetového připojení",

			
			RESET_USER_TITLE: 			"Nastavení nového uživatelského jména a hesla",
			NEW_USERNAME: 				"Nové uživatelské jméno",
			NEW_PASSWORD: 				"Nové heslo",
			CONFIRM_PASSWORD: 			"Potvrdit nové heslo",
			
			NO_ACCOUNT: 				"Nemáte TP-Link ID?",
			REGISTER_NOW: 				"Registrujte se nyní",
			REGISTER_SKIP: 				"Přihlaste se později",
			LOGIN: 						"Přihlášení",
			REGISTER_NEW:				"Zaregistrovat nový účet",
			COMPLETE_INFO_EMAIL_PREFIX: "Vaše TP-Link ID je:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Důrazně doporučujeme, abyste se přihlásili pomocí tohoto účtu pro snadnou správu vašeho zařízení a využití více funkcí TP-Link Cloudu.",

			INTERNET_OK: 				"Gratulujeme! Síť byla úspěšně nastavena. Užívejte si internetu.",
			CLOUD_WIZARD: 				"Pro více TP-Link Cloud funkcí se, prosím, přihlaste vaším <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "S TP-Link ID můžete:", 
			ACCOUNT_DESP_SUB1:          "Přistupovat k vašemu zařízení a lokálním serverům (FTP, HTTP atd.) odkudkoli pomocí internetu",
			ACCOUNT_DESP_SUB2:          "Udržovat váš firmware stále aktuální s funkcí Online Upgrade",
	        ACCOUNT_DESP_SUB3:          "Ovládat několik zařízení pomocí jednoho účtu",
			
			CONFIRM: 					"Potvrdit"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internetu",
			INTERNET_STATUS:			"Stav internetu",

			GHZ24: 						"2,4 GHz",
			GHZ5: 						"5 GHz",
			
			CONNECTION_TYPE: 			"Typ připojení",
			SECONDARY_CONN: 			"Sekundární připojení",

			POOR_CONNECTED: 			"Špatné připojení",
			UNPLUGGED: 					"Port WAN je odpojen.",
			
			CONNECTED: 					"Připojeno",
			DISCONNECTED: 				"Odpojeno",

			INTERNET_IP_ADDR: 			"IP adresa",
			
			IP_ADDR: 					"IP adresa",
			MAC_ADDR: 					"MAC adresa",
			GATEWAY: 					"Brána",

			AUTO: 						"Auto",
			
			ROUTER: 					"Směrovač",
			WIRELESS_CLIENTS: 			"Klienti bezdrátové sítě",
			HOST_CLIENTS: 				"Klienti hostitele",
			GUEST_CLIENTS: 				"Klienti hosta",
			WIRE_CLIENTS: 				"Klienti kabelové sítě",
			PRINTER: 					"Tiskárna",
			USB_DISK: 					"USB disk",
			WIRELESS: 					"Bezdrátová síť",
			NAME: 						"Název",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Kanál",
			MAC: 						"MAC adresa",
			
			WIRELESS_24GHZ: 			"Bezdrátová síť 2,4 GHz",
			WIRELESS_5GHZ: 				"Bezdrátová síť 5 GHz",
			
			GUEST_24GHZ: 				"Síť pro hosty 2,4 GHz",
			GUEST_5GHZ: 				"Síť pro hosty 5 GHz",
			
			STATUS: 					"Stav",
			TOTAL: 						"Celková kapacita",
			AVAILABLE: 					"Dostupná kapacita",
			GB: 						"GB",
			BRAND: 						"Značka",

			DYNAMIC_IP: 				"Dynamická IP adresa",
			STATIC_IP: 					"Statická IP adresa",
			SUBNET_MASK: 				"Maska podsítě",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Tunelové propojení 6to4",
			NONE: 						"Žádný"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internetu",
			AUTO_DETECT: 				"Automaticky detekovat",
			INTERNET_CONN_TYPE: 		"Typ připojení k Internetu",
			DYNAMIC_IP: 				"Dynamická IP adresa",
			STATIC_IP: 					"Statická IP adresa",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"Port WAN je odpojen.",
			NONE: 						"Žádný",
			DETECT_FAIL: 				"Automatická detekce se nezdařila",
			SECONDARY_CONN: 			"Sekundární připojení",

			DYNAMIC_YES: 				"Neklonovat MAC adresu",
			DYNAMIC_NO: 				"Klonovat aktuální MAC adresu počítače",
			
			IP_ADDR: 					"IP adresa",
			SUBNET_MASK: 				"Maska podsítě",
			DEFAULT_GATEWAY: 			"Výchozí brána",
			PRIMARY_DNS: 				"Primární DNS",
			SECOND_DNS: 				"Sekundární DNS",
			OPTIONAL: 					"(Nepovinné)",
			USER_NAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			SERVER_IP_ADDR_NAME: 		"IP adresa VPN serveru / Doménové jméno",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Pokud si nejste jisti, jaký typ internetového připojení máte, použijte funkci automatické detekce nebo se obraťte na svého poskytovatele internetových služeb o pomoc."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Nastavení",
			MODE_2G: 					"Bezdrátová síť 2,4 GHz",
			MODE_5G: 					"Bezdrátová síť 5 GHz",
			WIRELESS_NETWORK_NAME: 		"Název bezdrátové sítě (SSID)",
			WIRELESS_PASSWORD: 			"Heslo",
			ENABLE_WIRELESS: 			"Povolit bezdrátový vysílač",
			SAVE: 						"Uložit",
			ENCRYPTION_2G_NOTICE:		"2,4G šifrování je %s.",
			ENCRYPTION_5G_NOTICE:		"5G šifrování je %s.",
			ENCRYPTION_2G_NO: 			"2,4GHz bezdrátová síť není šifrovaná.",
			ENCRYPTION_5G_NO: 			"5GHz bezdrátová síť není šifrovaná.",
			ENCRYPTION_SURE: 			"Opravdu chcete pokračovat?",

			HIDE_SSID: 					"Skrýt identifikátor SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Základní nastavení",
			TITIL_NEW:					"Disk a účet",
			DISK_SET:					"Nastavení zařízení",

			SELFLY_REMOVE:				"Bezpečně odebrat",
			SCANING:					"Prohledávání...",
			SCAN_RESULT:				"Nalezeno %n disků",
			
			DISKS:						"Disky",
			USERS: 						"Uživatelský účet",
			DEVICENAME: 				"Název zařízení",
			VOLUMN: 					"Jednotka",

			USBSPACE: 					"Využité místo",
			FREESPACE: 					"Volné místo",
			STATUS: 					"Stav",
			INACT: 						"Neaktivní",
			USAGE: 						"Využití",
			CAPACITY: 					"Kapacita",
			OPERATION: 					"Operace",
			
			ACC: 						"Správa účtu",
			USERNAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			USE_LOGIN: 					"Použít Přihlášení uživatele",
			SCAN: 						"Prohledat",
			ENJECT_ALL: 				"Vysunout vše",
			ENJECT: 					"Vysunout",
			ADD_USER: 					"Přidat uživatele",
			AUTH: 						"Oprávnění",


			LOCATION: 					"Umístění",
			MOBILE_ISP: 				"Poskytovatel mobilních internetových služeb",
			DIAL_NUMBER: 				"Vytáčené číslo",
			APN: 						"APN",
			USERNAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			MTU_SIZE: 					"Velikost MTU ( v bajtech )",
			OPTIONAL: 					"(Nepovinné)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Rodičovská kontrola",

			DEVICE_CTR: 				"Zařízení pod rodičovskou kontrolou",
			ID: 						"ID",
			DEVICE: 					"Název zařízení",
			MAC_ADDRESS: 				"MAC adresa",
			TIME: 						"Doba přístupu k internetu",
			DESCRIPTION: 				"Popis",
			ENABLE: 					"Povolit",
			ENABLE_THIS_ENTRY: 			"Povolit",
			OPTIONAL: 					"(Nepovinné)",
			BTN_VIEW: 					"Zobrazit existující zařízení",
			ACCESS_DEVICES_LIST: 		"Seznam zařízení",
			OPT: 						"Operace",
			STATUS: 					"Stav"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Síť pro hosty",
			MODE_2G: 					"Bezdrátová síť 2,4 GHz",
			MODE_5G: 					"Bezdrátová síť 5 GHz",
			WIRELESS_NETWORK_NAME: 		"Název bezdrátové sítě (SSID)",
			WIRELESS_PASSWORD: 			"Heslo",
			ENABLE_WIRELESS: 			"Povolit síť pro hosty",
			SAVE:						"Uložit",
			HIDE_SSID: 					"Skrýt identifikátor SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Cloudový účet",
			OFFLINE_NOTE_TITLE: 		"Zařízení je offline",
			LOGIN_NOTE_TITLE: 			"Jejda…",
			LOGIN_OFFLINE_NOTE: 		"Zařízení je offline. Zkontrolujte, prosím, konfiguraci WAN a sítě, abyste se ujistili, že jsou příslušná nastavení správně vložena.",

			EMAIL: 						"E-Mail",
			PASSWORD: 					"Heslo",
			FORGET_PASSWORD: 			"Zapomněli jste heslo?",

			CLOUD_WIZARD: 				"Pro více TP-Link Cloud funkcí se, prosím, přihlaste vaším <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"Nemáte TP-Link ID?",
			REGISTER_NOW: 				"Registrujte se nyní"
		},
		STATUS: {
			TITLE: 						"Stav",
			INTERNET:					"Internetu",
			WIRELESS:					"Bezdrátová síť",
			LAN:						"LAN",
			USB_TITLE:					"USB zařízení",
			PERFORMANCE: 				"Výkon",
			GUEST_NETWORK: 				"Síť pro hosty",
			ACCESS_DEVICES: 			"Přístup k zařízením",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2,4 GHz",
			HZ5G: 						"5 GHz",

			CONNECTION_TYPE: 			"Typ připojení",

			MAC_ADDRESS: 				"MAC adresa",
			IP_ADDRESS: 				"IP adresa",
			RELEASE: 					"Uvolnit",
			RENEW: 						"Obnovit",
			
			DYNAMIC_IP: 				"Dynamická IP adresa",
			STATIC_IP: 					"Statická IP adresa",
			SUBNET_MASK: 				"Maska podsítě",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Tunelové propojení 6to4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Průchod (Most)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Žádný",
			
			DEFAULT_GATEWAY: 			"Výchozí brána",
			DNS: 						"DNS server",
			MAC: 						"MAC adresa",
			WDS_STATUS: 				"Stav WDS",
			
			IPV6_ADDRESS: 				"IP adresa",
			PRIMARY_DNS: 				"Primární DNS",
			SECOND_DNS: 				"Sekundární DNS",

			RADIO: 						"Bezdrátový vysílač",

			NAME_SSID: 					"Název sítě (SSID)",
			NETWORK_NAME_SSID:			"Název bezdrátové sítě (SSID)",
			HIDE_SSID: 					"Skrýt identifikátor SSID",
			MODE: 						"Režim",
			CHANNEL: 					"Kanál",
			CHANNEL_WIDTH: 				"Šířka kanálu",
			AUTO: 						"Auto",
			CURRENT_CHANNEL: 			"Aktuální kanál",

			WDS: 						"Stav WDS",
			WIRED_CLIENTS: 				"Klienti kabelové sítě",
			WIRELESS_CLIENTS: 			"Klienti bezdrátové sítě",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Link-local adresa",
			ASSIGN_TYPE: 				"Typ přiřazení",

			ALLOW_TO_SEE_EACH: 			"Povolit hostům vzájemně se vidět",

			TOTAL: 						"Celková kapacita",
			AVAILABLE: 					"Dostupná kapacita",

			USB: 						"USB disk",
			PRINTER: 					"Tiskárna",

			CPU_LOAD: 					"Zatížení procesoru",
			MEMORY_USAGE: 				"Využití paměti",

			IP_ADDR_P: 					"IP adresa",
			MAC_ADDR_P: 				"MAC adresa",
			CONN_TYPE_P: 				"Typ připojení",

			DISABLED: 					"Vypnuto",
			INIT: 						"Spust.",
			SCAN: 						"Prohledat",
			AUTH: 						"Ověř.",
			ASSOC: 						"Asoc.",
			RUN: 						"Spustit",
			HOST: 						"Hostitel",
			GUEST: 						"Host",

			ON: 						"Zapnout",
			OFF: 						"Vypnout"
		},

		INTERNET: {
			TITLE: 						"Internetu",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Typ připojení k Internetu",
			INTERNET_MAC_ADDRESS: 		"MAC adresa",
			
			CONNECT: 					"Připojit",
			DISCONNECT: 				"Odpojit",
			
			IP_ADDR: 					"IP adresa",
			
			USE_DEFAULT_MAC: 			"Použít výchozí MAC adresu",
			USE_COMPUTER_MAC: 			"Použít aktuální MAC adresu počítače",
			USE_CUSTOM_MAC: 			"Použít vlastní MAC adresu",
			MAC_CLONE: 					"Klonování MAC adresy",
			
			CONFIG: 					"Konfig.",
			
			IP_ADDRESS: 				"IP adresa",
			SUBNET_MASK: 				"Maska podsítě",
			DEFAULT_GATEWAY: 			"Výchozí brána",
			
			MANUAL_DNS: 				"Manuální DNS",
			PRIMARY_DNS: 				"Primární DNS",
			SECOND_DNS: 				"Sekundární DNS",
			
			RENEW: 						"Obnovit",
			RELEASE: 					"Uvolnit",
			VIEW_MODE: 					"Režim zobrazení",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Získat dynamicky od poskytovatele internetových služeb",
			USE_FOLLOW_IP_ADDR: 		"Použít následující IP adresu",
			USE_FOLLOW_DNS_ADDR: 		"Použít následující adresy DNS",
			USE_FOLLOW_DNS_SERVER: 		"Použít následující DNS server",
			
			BASIC: 						"Základní",
			ADVANCED: 					"Pokročilé nastavení",
			
			DNS_ADDR_MODE: 				"Adresa DNS",
			MTU_SIZE: 					"Velikost MTU",
			MTU_1500: 					"bajtů. (Výchozí hodnota je 1500. Neměňte ji, pokud to není nezbytné.)",
			MTU_1480: 					"bajtů. (Výchozí hodnota je 1480. Neměňte ji, pokud to není nezbytné.)",
			MTU_1460: 					"bajtů. (Výchozí hodnota je 1460. Neměňte ji, pokud to není nezbytné.)",
			MTU_1420: 					"bajtů. (Výchozí hodnota je 1420. Neměňte ji, pokud to není nezbytné.)",
			
			HOST_NAME: 					"Název hostitele",

			HOST_NAME_CONFIRM: 			"Název hostitele obsahuje nepovolené znaky, které mohou způsobit neočekávané chování systému. Opravdu chcete pokračovat?",

			GET_IP_WITH_UNICAST_DHCP: 	"Získat IP adresu pomocí jednosměrového vysílání DHCP (Obvykle není požadováno.)",
			OPTIONAL: 					"(Nepovinné)",
			
			STATIC_IP: 					"Statická IP adresa",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			
			INTERNET_IP_ADDR: 			"IP adresa",
			INTERNET_DNS: 				"Internet DNS",
			SECONDARY_CONN: 			"Sekundární připojení",
			NONE: 						"Žádný",
			INTERNET_PRIMARY_DNS:		"Primární DNS",
			INTERNET_SECONDARY_DNS: 	"Sekundární DNS",
			
			DYNAMIC_IP: 				"Dynamická IP adresa",
			DYNAMIC_IP_v6: 				"Dynamická IP (SLAAC/DHCPv6)",
			STATIC_IP: 					"Statická IP adresa",
			SERVICE_NAME: 				"Název služby",
			ACCESS_CONCENTRATOR_NAME:  	"Název přístupového koncentrátoru",
			DETECT_ONLINE_INTERVAL: 	"Interval detekce online",
			INTERVAL_TIPS: 				"sekundy. (0-120. Výchozí číslo je 10.)",
			IP_ADDR_MODE:  				"IP adresa",
			CONN_MODE: 					"Typ připojení",
			DHCP_LINK_UNPLUGGED: 		"Port WAN je odpojen.",
			
			AUTO: 						"Auto",
			ON_DEMAND: 					"Na vyžádání",
			TIME_BASED: 				"Časový interval",
			MANUALLY: 					"Manuálně",
			MAX_IDLE_TIME: 				"Max. doba nečinnosti",
			MAX_IDLE_TIME_TIPS: 		"minuty. (0 znamená vždy aktivní.)",
			PERIOD_OF_TIME: 			"Časovém období",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"BigPond Cable",
			AUTH_SERVER: 				"Ověř. Server",
			AUTH_DOMAIN: 				"Ověř. Doména",
			L2TP: 						"L2TP",
			GATEWAY: 					"Brána",
			SERVER_IP_ADDR_NAME: 		"IP adresa VPN serveru / Doménové jméno",
			PPTP: 						"PPTP",
			TO: 						"Komu",
			
			TUNNEL_6TO4: 				"Tunelové propojení 6to4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Získat ne-dočasnou IPv6 adresu",
			GET_PREFIX_DELEGATION: 		"Získat delegaci prefixu IPv6",
			IPV6_ADDR: 					"IPv6 adresa",

			GET_IPV6_WAY: 				"Získat IPv6 adresu",
			AUTOMATICALLY: 				"Získat automaticky",
			SPECIFIED_BY_ISP: 			"Specifikováno poskytovatelem internetových služeb",

			IPV6_ADDR_PREFIX: 			"Prefix IPv6 adresy",
			NONE_TEMPORARY: 			"Ne-dočasná",

			PREFIX_DELEGATION: 			"Delegace prefixu",
			ENABLE: 					"Povolit",
			DISABLE: 					"Vypnout",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Délka masky IPv4",
			CONFIG_TYPE: 				"Typ konfigurace",
			RD6_PREFIX: 				"Prefix 6RD",
			RD6_PREFIX_LENGTH: 			"Délka prefixu 6RD",
			REPLY_IPV4_ADDR: 			"Border Relay IPv4 Address",
			MANUAL: 					"Manuální",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Průchod (Most)",
			LOCAL_IPV6: 				"Lokální IPv6 adresa",
			PEER_IPV6: 					"Peer IPv6 adresa",
			TUNNEL_ADDR: 				"Adresa tunelového propojení",
			IPV4_NETMASK: 				"Maska sítě IPv4",
			CUSTOM: 					"Vlastní",
		    AFTR_NAME: 					"Název AFTR",
			PPP_SHARE_V6:				"Stejná PPPoE relace jako připojení IPv4",
			PPP_SHARE_V4:				"Stejná PPPoE relace jako připojení IPv6",

			
			
			IPV4_ADDR: 					"IPv4 adresa",
			IPV4_MASK: 					"IPv4 maska podsítě",
			IPV4_GATEWAY: 				"IPv4 výchozí brána",
			TUNNEL_ADDR: 				"Adresa tunelového propojení",

			DUPLEX: 					"Duplex",
			AUTO_NEGOTIATION: 			"Automatické vyjednávání",
			FULL_DUPLEX_1000: 			"1000 Mbit/s plně duplexní",
			HALF_DUPLEX_1000:			"1000 Mbit/s poloduplexní",
			FULL_DUPLEX_100: 			"100 Mbit/s plně duplexní",
			HALF_DUPLEX_100: 			"100 Mbit/s poloduplexní",
			FULL_DUPLEX_10: 			"10 Mbit/s plně duplexní",
			HALF_DUPLEX_10: 			"10 Mbit/s poloduplexní"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"MAC adresa",
			IP_ADDRESS: 				"IP adresa",
			SUBNET_MASK: 				"Maska podsítě",
			CUSTOM: 					"Vlastní",

			IGMP: 						"Povolit IGMP Proxy",
			

			ASSIGNED_TYPE: 				"Typ přiřazení",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+ Bezstavové DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Prefix adresy",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"adresa",
			DELEFATED: 					"Delegovaný",
			STATIC: 					"Statická",
			SITE_PREFIX: 				"Prefix stránky",
			SITE_PREFIX_LEN: 			"Délka prefixu stránky",

			PREFIX_TYPE:  				"Typ konfigurace prefixu stránky",
			LAN_IPV6_ADDR:  			"IPv6 adresa LAN",

			RELEASE_TIME: 				"Čas uvolnění",
			RELEASE_TIME_TIP: 			"sekundy. (Výchozí hodnota je 86400. Neměňte ji, pokud to není nezbytné.)",
			ADDRESS:					"adresa",
			SAVE: 						"Uložit",

			REBOOT_TIP: 				"Směrovač otevírá stránku s novým přihlášením. <br/> Počkejte prosím..."

		},

		IPTV:{
			TITLE: 						"Nastavení",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Povolit IPTV", 
			MODE:  						"Režim",
			IGMP_PROXY: 				"IGMP Proxy",
			IGMP_VERSION: 				"Verze IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Most",
			BASIC: 						"Vlastní",
			EXSTREAM: 					"Singapur-ExStream",
			RUSSIA:  					"Rusko",
			UNIFY:  					"Malajsie-Unifi",
			MAXIS:  					"Malajsie-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internetu",
			IP_PHONE: 					"IP-Phone", 

			Q_TAG: 						"802.1Q Tag",
			ENABLE: 					"Povolit",
			
			INTERNET_VLAN_ID: 			"Internet VLAN ID",
			INTERNET_VLAN_PRIORITY: 	"Internet VLAN Priorita",
			IP_PHONE_VLAN_ID: 			"IP-Telefon VLAN ID",
			IP_PHONE_VLAN_PRIORITY: 	"IP-Phone VLAN Priorita",
			IPTV_VLAN_ID: 				"IPTV VLAN ID",
			IPTV_VLAN_PRIORITY: 		"IPTV VLAN Priorita",
			IPTV_MULTI_VLAN_ID: 		"IPTV Multicast VLAN ID",
			IPTV_MULTI_VLAN_PRIORITY: 	"IPTV Multicast VLAN Priorita"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP server",
			
			SETTINGS: 					"Nastavení",

			DHCP_SERVER: 				"DHCP server",
			ENABLE_DHCP_SERVER: 		"Povolit DHCP server",

			IP_ADDR_POOL: 				"Fond IP adres",
			LEASETIME: 					"Čas zapůjčení adresy",
			LEASENOTE: 					"minuty. (1-2880. Výchozí hodnota je 120.)",
			
			GATEWAY: 					"Výchozí brána",
			DOMAIN: 					"Výchozí doména",
			PRIMARYDNS: 				"Primární DNS",
			SECONDARYDNS: 				"Sekundární DNS",

			OPTIONAL: 					"(Nepovinné)",

			CLIENTSLIST: 				"Seznam klientů DHCP",
			CLIENT_NUMBER: 				"Číslo klienta",
			CLIENT_NAME: 				"Jméno klienta",
			MAC_ADDR: 					"MAC adresa",
			ASSIGNED_IP: 				"Přiřazená IP adresa",
			LEASE_TIME: 				"Čas zapůjčení",

			RESERVATION: 				"Rezervace adresy",

			RESERVED_IP: 				"Rezervovaná IP adresa",
			IP_ADDRESS: 				"IP adresa",
			DESCRIPTION: 				"Popis",

			CLIENTSLIST: 				"Seznam klientů DHCP",
			CLIENT_NUMBER: 				"Číslo klienta",

			ENABLE: 					"Povolit",
			ENABLE_THIS_ENTRY: 			"Povolit"
			
		},

		DDNS: {
			DDNS: 						"Dynamické DNS",
			SERVICEPROVIDER: 			"Poskytovatel služby",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Zaregistrujte se…",
			USERNAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			DOMAIN_NAME_LIST: 			"Seznám názvů domén",
			DOMAIN_NAME: 				"Název domény",
			LOGIN: 						"Přihlásit",
			LOGIN_SAVE: 				"Přihlásit se a uložit", 
			LOGOUT: 					"Odhlásit",
			STATU_SUCCESS:				"Úspěch!",
			UPDATE_INTERVAL:			"Interval aktualizace",
			ONE_HOUR:					"1 hodina",
			SIX_HOUR:					"6 hodin",
			TWETEEN_HOUR:				"12 hodin",
			ONE_DAY:					"1 den",
			TWO_DAY:					"2 dny",
			THREE_DAY:					"3 dny",
			NEVER:						"Nikdy",
			UPDATE:						"Aktualizace",
			STATU_INCORRENT:			"Nesprávné uživatelské jméno nebo heslo.",
			STATU_ERR_DOMAIN:			"Chyba v názvu domény",
			WAN_IP_BIND: 				"Vazba WAN IP",
			CURRENT_DOMAIN: 			"Aktuální jméno domény",
			REGISTER: 					"Zaregistrovat",
			BIND: 						"Provázat",
			UNBIND: 					"Zrušit provázání",
			TITLE: 						"DDNS není dostupné",
			CONTENT: 					"Pro použití nadřazené služby TP-Link DDNS se, prosím, <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">přihlaste</a> pomocí vašeho TP-Link ID nebo zvolte jiného poskytovatele služby.",
			STATU_NO_LAUNCH:			"Nepodařilo se aktualizovat DDNS",
			STATU_FAIL_DDNS: 			"Nepodařilo se aktualizovat DDNS.",
			STATU_FAIL_NOIP: 			"Nepodařilo se aktualizovat No-IP.",
			DISABLE: 					"Vypnout",
			ENABLE: 					"Povolit",	
			STATU_NO_LAUNCH:			"Nepodařilo se aktualizovat DDNS.",
			STATU_CONN:					"Připojování",
			WAN_IP_BIND: 				"Vazba WAN IP",
			TIME: 						"Datum registrace",
			BOUND: 						"Svázáno",
			FREE: 						"Zdarma",
			SORRY: 						"Nezdařilo se.",
			UNBIND_NOTE:          		"V případě, že chcete provázat %domain% s vaším zařízením, nejdříve, prosím, zrušte nejdříve dosavadní provázaní s doménou."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Pokročilé směrování",
			STATIC_ROUTING: 			"Statické směrování",

			DESTINATION_NETWORK:		"Cílová síť",
			SUBNET_MASK: 				"Maska podsítě",
			DEFAULT_GATEWAY: 			"Výchozí brána",
			DESCRIPTION: 				"Popis",
			
			SYSTEM_ROUTING_TABLE: 		"Směrovací tabulka systému",
			CLIENT_NUMBER: 				"Počet aktivních tras",

			GATEWAY: 					"Brána",
			INTERFACE: 					"Rozhraní",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Povolit",
			ENABLE_THIS_ENTRY: 			"Povolit"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Nastavení",
			NOT_SUPPORT_5G: 			"Na tomto území je podporováno pouze pásmo 2,4 GHz. Vyberte prosím správné území.",

			REGION: 					"Oblast",
			NOTICE:  					"Poznámka: Funkce bezdrátového připojení je vypnutá. Pokud ji chcete použít, stiskněte tlačítko WiFi.",
			
			MODE_2G:					"2,4 GHz",
			MODE_5G:					"5 GHz",

			WIRELESS: 					"Nastavení",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Povolit bezdrátový vysílač",

			WIRELESS_NETWORK_NAME: 		"Název bezdrátové sítě (SSID)",
			WIRELESS_PASSWORD: 			"Heslo",
			HIDE_SSID: 					"Skrýt identifikátor SSID",

			SECURITY: 					"Zabezpečení",
			NO_SECURITY: 				"Žádné zabezpečení",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - osobní (doporučeno)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Verze",

			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Šifrování",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Režim",
			MODE_B:  					"pouze 802.11b",
			MODE_G:  					"pouze 802.11g",
			MODE_N:  					"pouze 802.11n",
			MODE_BG:  					"802.11b/g",
			MODE_GN: 					"802.11g/n",
			MODE_BGN:  					"802.11b/g/n",

			MODE_A_5: 					"pouze 802.11a",
			MODE_AN_5: 					"802.11a/n",
			MODE_N_5: 					"pouze 802.11n",
			MODE_AC_5:					"pouze 802.11ac",
			MODE_NAC_5:					"802.11n/ac",
			MODE_ANAC_5:				"802.11a/n/ac",


			CHANNEL_WIDTH: 				"Šířka kanálu",
			CHANNEL: 					"Kanál",

			TRANSMIT_POWER: 			"Přenosový výkon",

			RADIUS_SERVER_IP: 			"IP adresa RADIUS serveru",
			RADIUS_PORT: 				"Port RADIUS serveru",
			RADIUS_PASSWORD: 			"Heslo RADIUS serveru",

			TYPE: 						"Typ",
			OPEN_SYSTEM: 				"Otevřený systém",
			SHARED_KEY: 				"Sdílený klíč",

			KEY_SELECTED: 				"Zvolený klíč",
			KEY1: 						"Klíč1",
			KEY2: 						"Klíč2",
			KEY3: 						"Klíč3",
			KEY4: 						"Klíč4",

			WEP_KEY_FORMAT: 			"Formát klíče WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimální",

			KEY_TYPE: 					"Typ klíče",
			BIT64: 						"64bitový",
			BIT128: 					"128bitový",
			BIT152: 					"152 Bit",

			KEY_VALUE: 					"Hodnota klíče",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Nízké",
			MIDDLE: 					"Střední",
			HIGH: 						"Vysoké"
		},

		WPS: {

			TITLE2: 					"PIN kód směrovače",
			ROUTERS_PIN_INFO: 			"Ostatní zařízení lze připojit k tomuto směrovači pomocí WPS zadáním PIN kódu",
			ENABLE_ROUTE_PIN: 			"PIN kód směrovače",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Generovat",
			DFT: 						"Výchozí",

			TITLE: 						"Průvodce WPS",
			SELECT_SETUP: 				"Vyberte způsob nastavení",
			PUSH_BTN: 					"Tlačítko WPS (doporučeno)",
			PUSH_DES: 					"Stiskněte tlačítko „WPS“ na směrovači nebo klikněte na softwarové tlačítko „Připojit“ na této stránce.",
			CONNECT: 					"Připojit",
			CANCEL: 					"Zrušit",

			RESULT_HEAD: 				"Bezdrátový klient",
			RESULT_END: 				"byl úspěšně přidán do sítě.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Nenalezeno",
			ENTER_CLIENT_PIN: 			"Zadejte klientův PIN kód",
			SWITCH_NOTE:				"Poznámka: Chcete-li použít WPS, měli byste nejprve zapnout funkci bezdrátového připojení.",
			SWITCH_NOTE2:				"Poznámka: Chcete-li použít WPS, měli byste nejprve nakonfigurovat správné parametry bezdrátového připojení.",
			STATUS_PIN_ERROR: 			"Neplatný PIN kód WPS? Zkontrolujte, zda je správný.",
			STATUS_ERROR: 				"Chyba.",
			STATUS_CONN_ERROR: 			"Připojení se nezdařilo.",
			STATUS_CONNING: 			"Připojování...",
			STATUS_CANCEL: 				"Připojení bylo zrušeno.",
			
			NOTE: 						"Poznámka:",
			
			STATUS_CONN_OVERLAP: 		"Připojení se nezdařilo (PŘEKRYTÍ).",
			STATUS_CONN_TIMEOUT: 		"Připojení se nezdařilo (ČASOVÝ LIMIT).",
			STATUS_CONN_INACT: 			"Připojení je neaktivní."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Bezdrátové stanice - online",
			CLIENT_NUMBER: 				"Číslo klienta",
			MAC_ADDRESS: 				"MAC adresa",
			CONN_TYPE: 					"Typ připojení",
			SECURITY: 					"Zabezpečení",
			RECEIVED_PACKETS: 			"Přijaté pakety",
			SEND_PACKETS: 				"Odeslané pakety"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Nastavení",
			
			MODE_2G: 					"2,4 GHz",
			MODE_5G:					"5 GHz",
			
			ALLOW_EACH: 				"Povolit hostům vzájemně se vidět",
			
			ALLOW_LOCAL: 				"Povolit hostům přístup do mé místní sítě",
			
			WIRELESS: 					"Bezdrátová síť",
			WIRELESS_24G_RADIO: 		"Bezdrátová síť 2,4 GHz",
			WIRELESS_5G_RADIO: 			"Bezdrátová síť 5 GHz",
			ENABLE_GUEST: 				"Povolit síť pro hosty",

			NAME_SSID: 					"Název bezdrátové sítě (SSID)",
			HIDE_SSID: 					"Skrýt identifikátor SSID",

			SECURITY: 					"Zabezpečení",
			NO_SECURITY: 				"Žádné zabezpečení",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-osobní",

			VERSION: 					"Verze",
			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Šifrování",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Heslo"
		},

		NAT:{
			SETTINGS: 					"Hardware NAT",
			STATUS: 					"Hardware NAT",
			
			ALG_TITLE: 					"Brána aplikační vrstvy (ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"Průchod PPTP",
			L2TP_ALG: 					"Průchod L2TP",
			IPSEC_ALG: 					"Průchod IPSec",

			ENABLE_FTP_ALG: 			"Povolit FTP ALG",
			ENABLE_TFTP_ALG: 			"Povolit TFTP ALG",
			ENABLE_H323_ALG: 			"Povolit H323 ALG",
			ENABLE_RTSP_ALG: 			"Povolit RTSP ALG",
			ENABLE_PPTP_ALG: 			"Povolit PPTP průchod",
			ENABLE_L2TP_ALG: 			"Povolit L2TP průchod",
			ENABLE_IPSEC_ALG: 			"Povolit IPSec průchod",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnost změny konfigurace nastane poté, co bude funkce NAT povolena."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Přesměrování portů",

			SERVICE_NAME: 				"Typ služby",
			EXTERNAL_PORT: 				"Externí port",
			INTERNAL_IP: 				"Interní IP adresa",
			INTERNAL_PORT: 				"Interní port",
			PROTOCAL: 					"Protokol",

			BTN_VIEW: 					"Zobrazit existující služby",

			EXSITTING_SERVICE: 			"Existující služby",
			
			PROTOCAL_ALL: 				"VŠE",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX nebo XX)",
			EXT_PORT_TIPS: 				"(XX nebo XX-XX, 1-65535)",
			INT_PORT_TIPS: 				"(XX nebo prázdné, 1-65535)",

			NOTICE:						"V konfliktu s portem pro vzdálenou správu. Opravdu chcete pokračovat?",

			ENABLE_THIS_ENTRY: 			"Povolit",
			OPERATION: 					"Operace",
			CHOOSE: 					"Vybrat",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnost změny konfigurace nastane poté, co bude funkce NAT povolena."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Port triggering",
			APPLICATION: 				"Aplikace",
			TRIGGER_PORT: 				"Triggering port",
			TRIGGER_PROTOCOL: 			"Triggering protokol",

			EXTERNAL_PORTS: 			"Externí port",
			EXTERNAL_PROTOCOL: 			"Externí protokol",

			BTN_VIEW: 					"Zobrazit existující aplikace",

			EXSITTING_APPLICATION: 		"Existující aplikace",
			APPLICATION_NAME: 			"Název aplikace",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX nebo XX-XX, 1-65535, max. 5 párů)",
			
			ENABLE_THIS_ENTRY: 			"Povolit",
			OPERATION: 					"Operace",
			
			PROTOCAL_ALL: 				"VŠE",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnost změny konfigurace nastane poté, co bude funkce NAT povolena."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Povolit DMZ",
			HARDWARESTATUS: 			"IP adresa hostitele DMZ",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnost změny konfigurace nastane poté, co bude funkce NAT povolena."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Seznam služby UPnP",
			CLIENT_NUMBER: 				"Číslo klienta",
			SERVICE: 					"Popis služby",
			EXTERNAL_PORT: 				"Externí port",
			PROTOCAL: 					"Protokol",
			IP_ADDR: 					"Interní IP adresa",
			INTERNAL_PORT: 				"Interní port",
			NAT_ENABLE_NOTICE: 			"Poznámka: Platnost změny konfigurace nastane poté, co bude funkce NAT povolena."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"3G/4G USB modem",
			LOCATION: 					"Oblast",
			MOBILE_ISP: 				"Poskytovatel mobilních internetových služeb",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Typ připojení",
			CONNECT_ON_DEMAND: 			"Připojit na požádání",
			CONNECT_AUTOMATICALLY: 		"Připojit automaticky",
			CONNECT_MANUALLY: 			"Připojit manuálně",
			MAX_IDLE_TIME: 				"Max. doba nečinnosti",
			CONNECTION_TIP: 			"Preferovaný přístup k internetu je WAN.",
			IDLE_TIME_TIP: 				"Režim připojení a max. dobu nečinnosti nelze nastavit ručně.",
			MINUTES: 					"minut. (0 znamená, že spojení je vždy zapnuté.)",

			AUTHENTICATION_TYPE: 		"Typ ověřování",
			AUTO: 						"Auto",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"Výchozí hodnota je Automaticky. Neměňte ji, pokud to není nezbytné.",

			CONNECT: 					"Připojit",
			DISCONNECT: 				"Odpojit",

			SET_TIP: 					"Nastavit vytáčené číslo, APN, uživatelské jméno a heslo manuálně.",
			DIAL_NUMBER: 				"Vytáčené číslo",
			APN: 						"APN",
			USERNAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			OPTIONAL: 					"(Nepovinné)",
			MTU_SIZE: 					"Velikost MTU ( v bajtech )",
			MTU_SIZE_TIP: 				"Výchozí hodnota je 1480. Neměňte ji, pokud to není nezbytné.",

			USE_FOLLOW_DNS_SERVER: 		"Použít následující adresy DNS",
			PRIMARY_DNS: 				"Primární DNS",
			SECOND_DNS: 				"Sekundární DNS",

			UNPLUGGED: 					"Není připojen žádný USB modem",
			IDENTIFYING: 				"Probíhá identifikace...",
			IDENTIFY_SUCCESS: 			"Identifikováno úspěšně"
		},

		DISK_SETTING: {
			DISK_SET: 					"Nastavení zařízení",
			SCAN: 						"Prohledat",
			SELFLY_REMOVE: 				"Bezpečně odebrat",
			SCAN_RESULT: 				"Nalezeno %n disků",
			NOT_FOUND: 					"Nenalezeno",
			SELFLY_REMOVE: 				"Bezpečně odebrat",
			
			VOLUMN: 					"Jednotka",
			CAPACITY: 					"Kapacita",
			FREESPACE: 					"Volné místo",
			USBSPACE: 					"Využité místo",
			
			STATUS: 					"Stav",
			INACT: 						"Neaktivní",
			ACTIVE: 					"Aktivní",
			
			USAGE: 						"Využití",
			CAPACITY: 					"Kapacita",
			OPERATION: 					"Operace",	
			
			ACC: 						"Správa účtu", 	 	
			USERNAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			USE_LOGIN: 					"Použít Přihlášení uživatele",
			SCAN: 						"Prohledat",
			ENJECT_ALL: 				"Vysunout vše",
			ENJECT: 					"Vysunout",
			ADD_USER: 					"Přidat uživatele",
			AUTH: 						"Oprávnění"
		},

		FOLDER: {
			TITLE: 						"Nastavení sdílení",
			ACCOUNT_TITLE: 				"Účet sdílení",
			ACCOUNT:					"Účet",
			AC_NOTE: 					"Připravte si účet pro sdílení obsahu. Můžete použít přihlašovací účet nebo vytvořit nový.",
			
			AC_LOGIN: 					"Použít výchozí účet",
			AC_FOLLOW: 					"Použít nový  účet",

			USERNAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",
			CONFIRM: 					"Potvrdit heslo",

			SHARING_SETTING: 			"Nastavení sdílení",
			SERVER_NAME: 				"Název síťového/mediálního serveru",

			METHOD: 					"Metoda přístupu",
			LINK: 						"Odkaz",
			PORT: 						"Port",

			NETWORK_NEIGHBORHOOD: 		"Okolní počítače",
			FTP: 						"FTP",
			FTPEX: 						"FTP (Přes Internet)",

			SHARE_FOLDER: 				"Sdílení složek",
			SHAREING_ALL: 				"Sdílet vše",
			NOTE:  						"Je-li aktivní, sdílíte všechny soubory a složky, je-li vypnutá, sdílíte pouze vybrané složky.", 
			ENABLE_AUTHENTICATION: 		"Povolit ověřování",
			SHAREING_FOLDER: 			"Sdílené složky",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Cesta ke složce",
			VOLUMN_NAME: 				"Název jednotky",

			SHARE_NAME: 				"Název složky",
			FOLDER_PATH: 				"Cesta ke složce",
			MEDIA_SHARING: 				"Sdílení médií",
			STATUS: 					"Stav",

			GUEST_ACCESS: 				"Povolit přístup klientům sítě pro hosty",
			ENABLE_AUTHENTICATION: 		"Povolit ověřování",
			ENABLE_WRITE_ACCESS: 		"Povolit možnost zápisu",
			ENABLE_MEDIA_SHARE: 		"Povolit sdílení médií",
			
			BROWSE: 					"Procházet",
			BROWSE_TITLE: 				"Vyberte složku",

			NO_VOLUMN:					"Žádná jednotka",
			
			NOTICE: 					"Opravdu chcete přejít na stránku Dynamické DNS? Chcete-li uložit změny a opustit stránku, stiskněte tlačítko Uložit. Chcete-li opustit stránku bez uložení změn, stiskněte tlačítko Ukončit. Stisknutím tlačítka Storno zůstanete na stránce.",
			NO_CHANGE_NOTICE: 			"Opravdu chcete přejít na stránku Dynamické DNS?",

			SAVE_FAILED_NOTICE: 		"Uložení se nezdařilo",
			CONTINUE: 					"Opustit stránku",
			CONTINUE_SAVE: 				"Uložit",
			CANCLE: 					"Zrušit",

			ENABLE: 					"Povolit"

		},

		PRINT:{
			TITLE: 						"Tiskový server",
			NAME: 						"Název tiskárny",
			ENABLE_PRINT_SERVER: 		"Tiskový server",
			NONE: 						"Žádný",
			
			NOTE_TITLE: 				"Poznámka:",
			STEP1: 						"Krok 1:",
			STEP2: 						"Krok 2:",
			STEP3: 						"Krok 3:",

			NOTE1: 						"Nainstalujte ovladač tiskárny do vašeho počítače. Postupujte dle pokynů v uživatelské příručce výrobce počítače.",
			NOTE2: 						"Připojte USB tiskárnu do USB portu směrovače pomocí USB kabelu.",
			NOTE3: 						"Nainstalujte utilitu TP-Link pro ovládání USB tiskárny a to buď ze zdrojového CD disku (pouze pro Windows), nebo si ji stáhněte (pro Windows i Mac OS X) z oficiálních webových stránek TP-Link: <a class=\"link\" href=\"%SUPPORT%\" target=\"_blank\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Rodičovská kontrola",
			STATUS: 					"Stav",
			UNKNOWN: 					"Neznámé",

			DEVICE_CTR: 				"Zařízení pod rodičovskou kontrolou",
			DEVICE: 					"Název zařízení",
			MAC_ADDRESS: 				"MAC adresa",
			TIME: 						"Doba přístupu k internetu",
			DESCRIPTION: 				"Popis",
			
			ENABLE_THIS_ENTRY: 			"Povolit",
			OPTIONAL: 					"(Nepovinné)",
			BTN_VIEW: 					"Zobrazit existující zařízení",
			
			DEVICE_LIST: 				"Seznam zařízení",
			SYSTEM_TIME: 				"Systémový čas",
			
			RESTR: 						"Omezení obsahu",
			MODE: 						"Omezení",
			BLACKMODE: 					"Seznam zakázaného obsahu",
			WHITEMODE: 					"Seznam povoleného obsahu",
			ACCESS_DEVICES_LIST: 		"Seznam zařízení s přístupem",
			
			CHOOSE: 					"Vybrat",
			ADD_A_NEW_KEYWORD: 			"Přidat nové klíčové slovo",
			ADD_A_NEW_DOMAIN_NAME: 		"Přidat nový název domény"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Internetu",
			ROUTER: 					"Směrovač",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Jiné",

			DEVICE: 					"Zařízení",
			RATE: 						"Rychlost",
			APPLICATION: 				"Aplikace",

			NAME: 						"Název",
			MAC_ADDRESS: 				"MAC adresa",
			IP_ADDRESS: 				"IP adresa",


			DEVICES: 					"Zařízení"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Šířka pásma",
			TEST_BANDWIDTH: 			">Test šířky pásma",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Zapnout streamboost",
			UP_LIMITATION: 				"Omezení uploadu (Mbit/s)",
			DOWN_LIMITATION: 			"Omezení stahování (Mbit/s)",
			RUN_BANDWIDTH_TEST: 		"Spustit test šířky pásma",
			TESTING: 					"Testování",
			TEST_FAILED: 				"Test se nezdařil",
			TEST_SUCCEED: 				"Test proběhl úspěšně",
			ENABLE_AUTOMATIC_TEST: 		"Zapnout automatický test",
			KEEP_UP_TO_DATE: 			"Aktualizovat StreamBoost",
			ENABLE_AUTOMATIC_UPDATE: 	"Zapnout automatickou aktualizaci"

		},

		PRIORITY:{
			PRIORITY: 					"Priorita",
			PRIORITY_TIPS: 				"Priorita vám umožňuje upřednostnit jedno zařízení před druhým. Lze použít, když zařízení soutěží o omezenou šířkou pásma s aplikací se stejnou třídou.",
			ALL_DEVICE: 				"Všechna zařízení",
			ACTIVE_DEVICE: 				"Aktivní zařízení",
			SAVE: 						"Uložit",
			ID: 						"ID",
			DEVICE: 					"Zařízení",
			TYPE: 						"Typ",
			MAC_ADDRESS: 				"MAC adresa",
			STICK: 						"Ukazatel průběhu"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Statistika",
			UP_TIME: 					"Doba provozu",
			DOWNLOADS: 					"Stahování",
			LAST_DAY: 					"Minulý den",
			LAST_WEEK: 					"Minulý týden",
			LAST_MONTH: 				"Minulý měsíc",
			ALL_LAN_HOSTS: 				"Všichni LAN hostitelé",
			OTHER: 						"Jiné"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Brána firewall",
			ENABLE_SPI: 				"SPI Firewall",

			DOS_PROTECTION: 			"Ochrana před Dos útoky",
			ENABLE_DOS: 				"Ochrana před Dos útoky",
			
			OFF: 						"Vypnout",
			LOW: 						"Nízké",
			MIDDLE: 					"Střední",
			HIGH: 						"Vysoké",

			ICMP: 						"Filtrování ICMP-FLOOD útoků",
			UDP: 						"Filtrování UDP-FLOOD útoků",
			TCP: 						"Filtrování TCP-SYN-FLOOD útoků",
			ENABLE_DOS_TIP:             "Funkce ochrany proti DoS útokům a Statistika provozu nelze povolit současně.",

			IGNORE: 					"Ignorovat paket ping z portu WAN",
			FORBID: 					"Zakázat paket ping z portu LAN",

			BLOCK_DOS: 					"Seznam blokovaných hostitelů DoS útoků",
			HOST_NUMBER: 				"Číslo hostitele",
			IP_ADDRESS: 				"IP adresa",
			MAC_ADDRESS: 				"MAC adresa"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Řízení přístupu",
			ENABLE_ACCESS: 				"Řízení přístupu",

			ACCESS_MODE: 				"Režim přístupu",
			DEFAULT_ACCESS_MODE: 		"Výchozí režim přístupu",
			BLACK_LIST: 				"Seznam zakázaného obsahu",
			WHITE_LIST: 				"Seznam povoleného obsahu",
			
			WIRED:						"Kabelové připojení",
			WIRELESS:					"Bezdrátová síť",

			DEVICE_ONLINE: 				"Zařízení online",
			NAME: 						"Název zařízení",
			IP_ADDRESS: 				"IP adresa",
			MAC_ADDRESS: 				"MAC adresa",
			CONN_TYPE: 					"Typ připojení",

			BLOCK: 						"Blokovat",

			DEVICE_IN_WHITE: 			"Zařízení na seznamu povolených zařízení",
			DEVICE_IN_BLACK: 			"Zařízení na seznamu zakázaných zařízení"
		},

		IP_MAC:{
			TITLE: 						"Nastavení",
			ENABLE_ARP: 				"Vazba ARP",

			ARP_LIST: 					"Seznam ARP",
			ARP_NUM: 					"Počet položek ARP",

			MAC_ADDRESS: 				"MAC adresa",
			IP_ADDRESS: 				"IP adresa",
			BOUND: 						"Svázáno",
			UNBOUND: 					"Nesvázáno",

			BINDING_LIST: 				"Seznam vazeb",
			DESCRIPTION: 				"Popis",
			OPTIONAL: 					"(Nepovinné)",
			ENABLE_THIS_ENTRY: 			"Povolit"
		},

		TIMESET: {
			TITLE: 						"Nastavení času",
			ZONE: 						"Časové pásmo",
			DATE: 						"Datum",
			DATEFORMAT: 				"MM/DD/RRRR",
			TIME: 						"Čas",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"NTP Server I",
			NTP2: 						"NTP Server II",
			OPTIONAL: 					"(Nepovinné)",

			CURRENT_TIME:  				"Aktuální čas",
			SET_TIME: 					"Nastavit čas",
			AUTOMATIC: 					"Získat automaticky z internetu",
			MANUAL: 					"Manuálně",
			AUTOMATIC_BTN: 				"Získat",


			GETGMT: 					"Zjistit GMT čas",

			
			GETGMT_SUCCESS: 			"Čas z NTP server úspěšně zjištěn",
			GETGMT_TIMEOUT: 			"Čas pro zjištění času z NTP server vypršel",
			GETGMT_WAIT: 				"Čekání",
			
			M: 							"M",
			W: 							"T",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Letní čas",
			ENABLE_DAYLIGHT: 			"Povolit letní čas",
			START: 						"Začátek",
			END: 						"Konec",

			RUNNING_STATUS: 			"Provozní stav",
			DOWN: 						"Nyní je aktivní zimní čas.",
			UP: 						"Nyní je aktivní letní čas."
		},

		DIAG:{
			TITLE: 						"Diagnostika",
			DIAGNOSTIC_TOOL: 			"Diagnostický nástroj",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"IP adresa VPN serveru / Doménové jméno",
			COUNT: 						"Počet příkazů ping",
			
			BASIC: 						"Základní",
			ADVANCED: 					"Pokročilé nastavení",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Velikost paketu ping",
			PKTUNIT: 					"(4-1472 bajtů)",

			TIMEOUT: 					"Časový limit příkazu ping",
			TIMOUTUNIT: 				"(100 -2000 milisekund)",

			TTL: 						"Traceroute Max TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Začátek",
			STOP: 						"Zastavit"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Váš firmware je aktuální",
			TITLE: 						"Upgrade firmwaru",
			INFO: 						"Informace o zařízení",
			REMOTE_TITLE: 				"Online aktualizace",
			LOCAL_TITLE: 				"Lokální aktualizace",

			NEWFILE: 					"Soubor nového firmwaru",
			FIRMWAREVERSION: 			"Verze firmwaru",
			HARDWAREVERSION: 			"Verze hardwaru",
			LATESTVERSION: 				"Nejnovější verze",
			CONFIRM_CONTENT:			"Chcete aktualizovat firmware?",
			WARNING:					"Aktualizace firmwaru... <br/> Aby nedošlo k poškození, mějte router zapnutý a během procesu aktualizace firmwaru router nepoužívejte.",
			REBOOTING: 					"Restartování... <br/> Aby nedošlo k poškození, mějte router zapnutý a během procesu aktualizace firmwaru router nepoužívejte.",
			DO_NOT_OPERATE: 			"Aktualizace firmwaru... <br/> Aby nedošlo k poškození, mějte router zapnutý a během procesu aktualizace firmwaru router nepoužívejte.",
			FIRMWARE_UPDATING_NOTE: 	"1.Updatování firmwaru…<br/> Abyste se vyhnuli poškození, prosím, nechte router zapnutý a nepoužívejte ho během procesu updatování firmwaru.",
			REBOOTING_NOTE: 			"2.Restartování…<br/> Abyste se vyhnuli poškození, prosím, nechte router zapnutý a nepoužívejte ho během procesu updatování firmwaru.",
			SCREEN_UPDATING_NOTE: 		"3.Updatování obrazovky...Abyste se vyhnuli poškození, prosím, nechte router zapnutý a nepoužívejte ho během procesu updatování firmwaru.",
			UPGRADE_FAILED: 			"Upgrade se nezdařil.",
			UPGRADE: 					"Upgrade",
			CHECK: 						"Kontrola",
			DOWNLOADING: 				"Stahování... <br/> Aby nedošlo k poškození, mějte router zapnutý a během procesu aktualizace firmwaru router nepoužívejte.",
			UPGRADE_INOF: 				"Aby nedošlo k poškození, mějte router zapnutý.",
			NOTE: 						"Poznámka:",
			NO_UPGRADE: 				"Toto je nejnovější verze",

			UPGRADING: 					"Aktualizace... <br/> Aby nedošlo k poškození, mějte router zapnutý a během procesu aktualizace firmwaru router nepoužívejte.",
			RETRY: 						"Opakovat",
			CANCEL: 					"Zrušit",
			ILEGAL_DEVICE:              "Nelze identifikovat zařízení. Obraťte se prosím na TP-Link technickou podporu.",
			UPGRADE_FAIL: 				"Nelze aktualizovat. Prosím zkuste to znovu později.",
            CONFIG_RESET_NOTE:          "Vaše aktuální nastavení budou po aktualizaci na tuto verzi ztraceny.",
			CHECK_UPGRADE: 				"Zkontrolovat aktualizace"
		},

		BACKUP:{
			BACKUP: 					"Záloha",
			BACKUPTIP: 					"Uložit kopii vašeho aktuálního nastavení.",

			RESTORE: 					"Obnova",
			RESTORETIP: 				"Obnovit uložené nastavení ze souboru.",
			
			RESTORE_WARN:				"Probíhá obnovování směrovače... <br/>Během tohoto procesu nic neprovádějte.",
			RESTORE_CONFIRM_CONTENT: 	"Opravdu chcete obnovit konfiguraci směrovače ze záložního souboru?",
			
			FILE: 						"Soubor",

			FACTORY: 					"Obnova do výchozího továrního nastavení",
			FACTORYTIP: 				"Vrátí všechny konfigurační nastavení na jejich výchozí hodnoty.",
			RESETTIP:					"Obnovit výchozí konfiguraci kromě vašich přihlašovacích údajů a cloud účtu.",
			FACTORY_CONFIRM_CONTENT:	"Opravdu chcete obnovit konfiguraci směrovače na jeho výchozí tovární nastavení?",
			FACTORY_WARN:				"Probíhá obnovování směrovače... <br/>Během tohoto procesu nic neprovádějte.",
			
			BACKUPBTN: 					"Záloha",
			RESTOREBTN: 				"Obnova",
			RESETBTN:					"Obnova",
			FACTORYBTN: 				"Obnova do výrobního nastavení"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Správa účtu",
			
			OLDUSER: 					"Staré uživatelské jméno",
			OLDPWD: 					"Staré heslo",

			NEWUSER: 					"Nové uživatelské jméno",
			NEWPWD: 					"Nové heslo",
			CONFIRM: 					"Potvrdit nové heslo",

			RECOVERYINFO: 				"Obnovení hesla",
			ENABLE_PASSWORD_RECOVERY: 	"Zapnout obnovení hesla",
			FROM: 						"Od",
			TO: 						"Komu",
			SMTP_SERVER: 				"SMTP server",
			
			ENABLE_AUTHENTICATION: 		"Povolit ověřování",
			USERNAME: 					"Uživatelské jméno",
			PASSWORD: 					"Heslo",

			TEST_MAIL: 					"Test pošty",

			LOCAL:						"Místní správa",
			LOCAL_MAC_AUTH: 			"Ověření lokální MAC adresy",
			ACCESS: 					"Přístup pro všechna zařízení připojená k místní síti (LAN)",
			ACCESS_TIPS: 				"Zapněte tuto funkci, pokud chcete povolit správu ze všech zařízení připojených k místní síti (LAN). Pokud bude vypnutá, bude správa povolena jen z vybraných zařízení.",
			
			MAC_ADDRESS: 				"MAC adresa",
			VIEW_BTN: 					"Zobrazit existující zařízení",
			DESCRIPTION: 				"Popis",

			EXIST_DEVICE:               "Existující zařízení",

			OPTIONAL: 					"(Nepovinné)",
			ENABLE_THIS_ENTRY: 			"Povolit",

			DEVICE_NAME:				"Název zařízení",
			IP_ADDRESS:					"IP adresa",
			

			REMOTE: 					"Vzdálená správa",
			DISABLE_REMOTE_MANAGEMENR: 	"Vypnout vzdálenou správu",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Zapnout vzdálenou správu pro všechna zařízení",
			ENABLE_REMOTE_MANAGEMENR: 	"Zapnout vzdálenou správu pro určitá zařízení",
			WEB: 						"Port webové správy",

			NOTICE:						"V konfliktu s jiným již přesměrovaným portem! Opravdu chcete pokračovat?",

			REMOTEIP: 					"IP adresa vzdáleného zařízení",
			REMOTEIPNOTE: 				"(Zadejte 255.255.255.255 pro všechny)"
			
		},

		SYSLOG:{
			TITLE: 						"Systémový protokol",
			LOG_FILTER: 				"Filtr protokolu:",
			
			TYPE_EQ: 					"Typ=",
			
			ALL: 						"VŠE",

			FIREWALL: 					"Brána firewall", 
			NAT: 						"NAT",
			DDNS: 						"Dynamické DNS",
			UPNP:						"UPnP",
			IMB:            			"Vazba IP a MAC adresy",
			IPTV:						"IPTV",
			DHCPS:						"DHCP server",
			IGMP_PROXY:					"IGMP Proxy",
			DOMAIN_LOGIN:				"Přihlášení k doméně",
			BASIC_SECURITY: 			"Základní zabezpečení",
			PARENTAL_CONTROL: 			"Rodičovská kontrola",
			ACCESS_CONTROL: 			"Řízení přístupu",
			DOS_PROTECTION: 			"Ochrana před Dos útoky",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Statistika provozu",
			TIME_SETTINGS: 				"Nastavení času",
			ACCOUNT_MANAGEMENT: 		"Správa účtu",
			LOCAL_MANAGEMENT: 			"Místní správa",
			REMOTE_MANAGEMENT: 			"Vzdálená správa",
			LOCALE: 					"Místní",
			FACTORY_RESET: 				"Obnovení továrního nastavení",
			LED_CONTROLLER: 			"Ovladač LED",
			NETWORK: 					"Síť",
			USBSHARE: 					"USB sdílení",
			AND: 						"a",
			LEVEL: 						"Úroveň",
			EMERGENCY:					"NOUZOVÉ SITUACE",
			ALERT:						"VÝSTRAHA",
			CRITICAL:					"KRITICKÁ SITUACE",
			ERROR: 						"CHYBA",
			WARNING: 					"VAROVÁNÍ",
			NOTICE: 					"UPOZORNĚNÍ",
			INFO: 						"INFORMACE",
			DEBUG: 						"LADÍCÍ",

			INDEX: 						"Index",
			TYPE: 						"Typ",
			TIME: 						"Čas",
			LEVEL_COL:					"Úroveň",

			CONTENT: 					"Obsah protokolu",
			
			MAIL_LOG: 					"Odeslat log",
			SAVE_LOG: 					"Uložit protokol",

			SEND_OK: 					"Odeslání proběhlo",
			SEND_FAILED: 				"Odeslání selhalo",

			MAIL_SETTING: 				"Nastavení pošty",

 			FROM: 						"Od",
 			TO: 						"Komu",
 			SMTP_SERVER: 				"SMTP server",
 			ENABLE_AUTHENTICATION: 		"Povolit ověřování",

 			USERNAME: 					"Uživatelské jméno",
 			PASSWORD: 					"Heslo",
 			CONFIRM_PASSWORD: 			"Potvrdit heslo",

 			AUTO_MAIL: 					"Povolit automatickou poštu",
 			LOG_AT: 					"Vytvořit protokol v",
 			HH_MM: 						"(HH:MM) každý den",

 			LOG_EVERY: 					"Vytvořit protokol každé",
 			HOURS: 						"hodiny"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Nastavení",
			STATUS: 					"Povolit QoS",
			UPBANDWIDTH: 				"Šířka pásma uploadu",
			DOWNBANDWIDTH: 				"Šířka pásma stahování",
			SPEED_M: 					"Mbit/s",
			SPEED_K: 					"Kbit/s",
			TEST: 						"Test rychlosti",
			RULE_LIST: 					"Seznam pravidel QoS",
			RULE: 						"Pravidlo QoS",
			ID: 						"ID",
			NAME: 						"Název",
			TYPE: 						"Typ",
			DETAIL: 					"Detail",
			PRIORITY: 					"Priorita",

			APPLICATION: 				"Aplikace",
			APPLICATION_LIST: 			"Seznam aplikací",
			CUSTOM_APP: 				"Vlastní aplikace",
			MAC_ADDR: 					"MAC adresa",
			MAC_ADDR_P: 				"MAC adresa",
			IP_ADDR: 					"IP adresa",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Fyzický port",

			LOW: 						"Nízké",
			MIDDLE: 					"Střední",
			HIGH: 						"Vysoké",

			PROTO: 						"Protokol",
			PORT: 						"Port",
			PROTO_P: 					"Protokol",
			PORT_P: 					"Port",
			PORT_TIPS: 					"(XX nebo XX-XX, 1-65535, max. 5 párů)",

			ALL: 						"VŠE",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Vlastní",

			WIFI_HOME: 					"WIFI-HOSTITEL",
			WIFI_GUEST: 				"WIFI-HOST",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Upgrade databáze",

			NEWFILE: 					"Nový databázový soubor",
			FIRMWAREVERSION: 			"Verze databáze",
			CONFIRM_CONTENT:			"Opravdu chcete aktualizovat databázi?",
			WARNING:					"Probíhá aktualizace databáze... <br/>Během tohoto procesu nic neprovádějte.",
			
			UPGRADE: 					"Upgrade",

			SERVICE_RESTART: 			"Restartování služby QoS",
			
			TYPE: 						"Typ",
			BY_DEVICE: 					"dle zařízení",
			BY_APP: 					"dle aplikací",
			BY_PHY: 					"dle fyzických portů",

			HIGH_PRIORITY_LBL: 			"Vysoká priorita:",
			MIDDLE_PRIORITY_LBL: 		"Střední priorita:",
			LOW_PRIORITY_LBL: 			"Nízká priorita:",

			HIGH_PRIORITY: 				"Vysoká priorita",
			MIDDLE_PRIORITY: 			"Střední priorita",
			LOW_PRIORITY: 				"Nízká priorita"

		},

		APPLICATION:{
			APP_LIST: 					"Seznam aplikací",
			GAME_LIST: 					"Seznam her",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Statistika provozu",
			ENABLE_STATISTICS: 			"Statistika provozu",

			TITLE: 						"Seznam statistiky provozu",
			IP_MAC: 					"IP adresa / MAC adresa",
			TPKT: 						"Celkový počet paketů",
			TBYTE: 						"Celkový počet bajtů",
			CPKT: 						"Aktuální počet paketů",
			CBYTE: 						"Aktuální počet bajtů",
			CICMP: 						"Aktuální ICMP Tx",
			CUDP: 						"Aktuální UDP Tx",
			CSYN: 						"Aktuální SYN Tx",
			
			DELETE_CONFIRM: 			"Opravdu chcete odstranit tyto statistiky provozu?",
			DELETE_ALL_CONFIRM: 		"Opravdu chcete odstranit všechny tyto statistiky provozu?",

			RESET_ALL: 					"Vynulovat vše"
		},

		SYSPARA:{
			W24G: 						"Bezdrátová síť 2,4 GHz",
			W5G: 						"Bezdrátová síť 5 GHz",
			SWITCH_NOTICE:  			"Funkce bezdrátového připojení je vypnutá. Pokud ji chcete použít, stiskněte tlačítko WiFi.",

			ENABLE_TIPS: 				"Funkce bezdrátového připojení je vypnutá.",

			BEACON: 					"Beacon Interval (Interval výstražných signálů)",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS Threshold (Práh RTS)",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Prahová hodnota fragmentace",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM Interval",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Obnovovací interval skupinového klíče",
			GROUPUNIT: 					"sekundy",
			
			
			WMM_FEATURE: 				"Funkce WMM",
			WMM: 						"Povolit WMM",

			GI_FEATURE: 				"Funkce Short GI",
			GI: 						"Povolit funkci Short GI",

			AP_FEATURE: 				"Funkce AP Isolation",
			AP: 						"Povolit funkci AP Isolation",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Povolit TxBF",

			WDS_FEATURE: 				"Přemostění WDS",
			WDS: 						"Povolit přemotění WDS",
			
			SSID_BRIDEGE: 				"SSID (k přemostění)",
			SURVEY: 					"Vyhledat",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC adresa",
			SSID: 						"SSID",
			SIGNAL: 					"Signál",
			CHANNEL: 					"Kanál",
			SECURITY: 					"Zabezpečení",
			CHOSEN: 					"Vybráno",
			AP_NUMBER:					"Číslo AP",

			TOTAL: 						"Celkem položek",

			MAC: 						"MAC adresa (k přemostění)",
			MACUNIT: 					"Příklad: 00-1D-0F-11-22-33",

			SECURITY: 					"Zabezpečení",
			NO: 						"Ne",
			NONE: 						"Žádné zabezpečení",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Heslo",
			
			AUTH_TYPE: 					"Ověř. Typ",
			AUTO: 						"Auto",
			OPEN: 						"Otevřený systém",
			SHARED: 					"Sdílený klíč",

			WEP_INDEX: 					"WEP Index",
			KEY1: 						"Klíč1",
			KEY2: 						"Klíč2",
			KEY3: 						"Klíč3",
			KEY4: 						"Klíč4",

			WEP_KEY_FORMAT: 			"Formát klíče WEP",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimální",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Povolit WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Povolit NAT",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"Zapnout NAT Boost",
			
			MEDIA_SERVER: 				"Media Server",
			SCAN_INTERVAL: 				"Interval automatického skenování (hodiny)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Nastavení úrovně ochrany před útoky DoS",

			ICMP: 						"Úroveň paketů ICMP-FLOOD",
			UDP: 						"Úroveň paketů UDP-FLOOD",
			TCP: 						"Úroveň paketů TCP-FLOOD",

			WDS_MODE: 					"Režim WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Nízké",
			MIDDLE: 					"Střední",
			HIGH: 						"Vysoké",

			TO: 						"Komu",
			NOTICE_NAT_REBOOT: 			"Restartování…  <br/>Prosím, neprovádějte žádné operace během restartování.",

			NOTICE_NAT_BOOST: 			"Po úpravě nastavení NAT Boost bude toto zařízení restartováno. Opravdu chcete pokračovat?",
			NOTICE:						"Kanál vašeho směrovače není stejný s kanálem přemostěného přístupového bodu. Chcete jej změnit?",

			UNIT: 						"(5-7200) paketů/s",
			LED: 						"LED",
			NIGHT_MODE: 				"Noční režim",
			PERIOD_NIGHT_TIME: 			"Doba nočního režimu",
			ENABLE: 					"Povolit",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "Vaše kontrolka LED je vypnutá. Chcete-li použít tuto funkci, klikněte na kontrolku LED v pravé horní části této stránky.",
			NOTE2:                      "Noční režim se uplatní v závislosti na systémovém čase směrovače. Ujistěte se, že jste již nastavili Čas ve směrovači."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Aktuálně není k dispozici žádný certifikát, před povolením serveru VPN klikněte na tlačítko <b>Vygenerovat</b>.",
			NO_CERT_NOTE2: 				"Aktuálně není k dispozici žádný certifikát, před exportem konfigurace klikněte na tlačítko <b>Vygenerovat</b>.",
			ENABLE_VPN_SERVER: 			"Povolit Server VPN",
			SERVICE_TYPE: 				"Typ služby",
			SERVICE_PORT: 				"Port služby",
			VPN_SUBNET: 				"Maska/Podsíť VPN",
			CLIENTS_ACCESS: 			"Klientský přístup",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Pouze domácí síť",
			INTERNET_HOME: 				"Internet a domácí síť",
			CERT_STR: 					"Aktuálně není k dispozici žádný certifikát, certifikát vygenerujete a konfiguraci uložíte kliknutím na tlačítko OK.",
			CERT_STR2: 					"Aktuálně není k dispozici žádný certifikát, certifikát vygenerujete a konfiguraci exportujete kliknutím na tlačítko OK.",
			CONF_FILE: 					"Soubor s konfigurací", 
			EXPORT_CONF_FILE: 			"Exportovat konfiguraci",
			EXPORT: 					"Exportovat",

			INSTALL_GUIDE: 				"Průvodce instalací klienta VPN",
			INSTALL_STEP: 				"Klientská zařízení povolíte a připojíte k serveru OpenVPN pomocí následujících kroků:",
			INSTALL_NOTICE:				"Před konfigurací serveru OpenVPN nakonfigurujte služby dynamické DNS (doporučeno) nebo přiřaďte statickou adresu portu WAN. Také se ujistěte se, že máte správně nastavený čas.",
			INSTALL_NOTE1: 				"Vyberte možnost Povolit Server VPN.",
			INSTALL_NOTE2: 				"Předtím než nakonfigurujete OpenVPN server, prosím, nakonfigurujte Dynamic DNS (doporučeno) nebo přiřadtě statickou IP adresu pro WAN port. Ujistěte se, že externí port v nastavení NAT není servisní port,  DMZ je zakázáno a zda je systémový čas správně.",
			INSTALL_NOTE3: 				"Kliknutím na tlačítko Export uložíte konfigurační soubor.",
			INSTALL_NOTE4: 				"Na vašich klientských zařízeních stáhněte a nainstalujte utilitu klienta OpenVPN z adresy <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Oficiální podporované platformy zahrnují Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Spusťte utilitu klienta OpenVPN a přidejte nové připojení VPN pomocí uloženého konfiguračního souboru a připojte tak vaše klientské zařízení k serveru VPN.",
			NOTE: 						"Chcete-li se dozvědět více klientech OpenVPN, navštivte stránku <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Adresa IP klienta",
			ACCOUNT_USERNAME: 			"Uživatelské jméno",
			ACCOUNT_PASSWORD: 			"Heslo",
			CLIENT_IP_NOTE: 			"(až 10 klientů)",
			SAME_SUBNET_NOTE: 			"IP adresa klienta a IP adresa LAN nemůže být ve stejné podsíti.",
			CONFLICT_WITH_DHCP: 		"IP adresa klienta koliduje s fondem IP adres DHCP.",
			CONFLICT_WITH_RESERVED: 	"IP adresa klienta koliduje s rezervovanou IP adresou.",
			CONFLICT_WITH_OPENVPN: 		"IP adresa klienta a OpenVPN nemůže být ve stejné podsíti.",
			SAME_SUBNET_NOTE2: 			"Adresa podsítě/síťová maska VPN a adresa IP LAN nemohou být ve stejné podsíti.",
			CONFLICT_WITH_DHCP2: 		"VPN Subnet/Netmask koliduje s fondem IP adres DHCP.",
			CONFLICT_WITH_RESERVED2: 	"VPN Subnet/Netmask koliduje s rezervovanou IP adresou.",
			CONFLICT_WITH_PPTPVPN: 		"VPN Subnet/Netmask a IP adresa PPTP VPN nemůže být ve stejné podsíti.",
			VPN_MASK_ERROR: 			"Maska sítě nemůže být vyšší než  255.255.255.248.",
			ACCOUNT_LIST: 				"Seznam účtů (až 16 uživatelů)",
			ADVANCED_SETTING: 			"Pokročilé nastavení",
			ALLOW_SAMBA: 				"Povolit přístup Samba (místo v síti)",
			ALLOW_NETBIOS: 				"Povolit procházení NetBIOS",
			ALLOW_UNENCRYPTED_CONN: 	"Povolit nešifrovaná připojení",
			USERNAME_CONFLICT: 			"Tohle uživatelské jméno již existuje.",
			
			CONNECT_PPTP: 				"Klientská zařízení povolíte a připojíte k serveru  PPTP VPN pomocí následujících kroků:",
			CONNECT_NOTICE:				"Před konfigurací serveru  PPTP VPN nakonfigurujte služby dynamické DNS (doporučeno) nebo přiřaďte statickou adresu portu WAN. Ujistěte se, že váš externí port služby NAT není nastaven na 1723 a funkce DMZ je vypnutá, také zkontrolujte vaše systémové hodiny.",
			CONNECT_NOTE1: 				"Vyberte možnost Povolit Server VPN.",
			CONNECT_NOTE2: 				"Nakonfigurujte parametry serveru PPTP VPN a klikněte na tlačítko uložit.",
			CONNECT_NOTE3: 				"Na vašich klientských zařízeních vytvořte připojení PPTP VPN. Oficiální podporované platformy zahrnují Windows, Mac OSX, Linux, iOS a Android.",
			CONNECT_NOTE4: 				"Spusťte program PPTP VPN, přidejte nové připojení a zadejte název domény registrované služby DDNS nebo statickou adresu IP, která je přiřazena portu WAN. Klientské zařízení tak připojíte k serveru PPTP VPN.",
			
			GENERATE_CERT: 				"Certifikát",
			GENERATE_NEW_CERT: 			"Vygenerujte certifikát.",
			GENERATE: 					"Generovat",
			GENERATE_TIPS: 				"Generování certifikátu...<br/>Může to trvat několik minut, počkejte prosím.",
			CERT_SUCCESS: 				"Dokončeno",
			CERT_FAIL: 					"Selhalo, zkuste to znovu.",
			
			VPN_CONNECTIONS: 			"Připojení VPN",
			OPEN_VPN_CONNECTIONS: 		"Připojení OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"Připojení PPTP VPN",
			USER:				"Uživatel",
			REMOTE_IP:			"Vzdálená IP",
			ASSIGNED_IP:			"Přidělená IP"
		}
	};
})(jQuery);

