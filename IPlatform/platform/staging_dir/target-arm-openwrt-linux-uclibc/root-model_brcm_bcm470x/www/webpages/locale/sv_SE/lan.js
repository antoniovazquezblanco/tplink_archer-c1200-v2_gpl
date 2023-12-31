(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			EMAIL: 						"e-post",
			FORGET_PASSWORD: 			"Glömt lösenord?",
			LOGIN: 						"Logga in",
			BEGIN: 						"Nu börjar vi",
			IMPORTANT_UPDATE_INFO: 		"För att undvika konflikt med front-end device, har routerns IP-adress  uppdaterats till",
			CONTINUE: 					"Fortsätta",

			IMPORTANT_NOTICE: 			"Viktigt meddelande",
			OR: 						"Är du säker på att du vill fortsätta att besöka",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Tryck på och håll in knappen Återställ i %SECONDS% sekunder för att återställa routern till fabriksinställningarna.",
			FORGET_PASSWORD_INFO_1: 	"Om lösenord återställning funktionen är aktiverad. En verifikation kod kommer att skickas till angiven e-postadress för återställning användarnamn och lösenord.",
			FORGET_PASSWORD_SEND_FAILED:"Det gick inte att skicka koden! Kontrollera din Internet-anslutning.",

			VERIFICATION_CODE: 			"Verifieringskod",

			RECEIVE_CODE: 				"Skicka kod",

			CONFIRM: 					"bekräfta",
			WELCOME: 					"Välkommen till TP-Link %model%. Logga in.",
			SEC: 						"s",

			USER_CONFLICT: 				"Inloggnings konflikt!",
			FIRST_TIME: 				"Ställ in din %PRODUCT% att ansluta till internet först. Börja skapa ett lösenord för enheten för att hantera din %PRODUCT%.",
			FIRST_TIME1: 				"Skapa ett administratös-lösenord för att administrera din %model%.",
			USER_CONFLICT_INFO: 		"Användare %USER%med värd %HOST%( %IP%/ %MAC%) är inloggad på routern. Du kan inte logga in på samma gång. Försök igen senare.",
			USER_CONFLICT_INFO_2: 		"Användare %USER%( %IP%) är inloggad på routern. Du kan inte logga in på samma gång. Försök igen senare.",
			USER_CONFLICT_INFO_3: "Endast en enhet kan logga in på en gång. Vill du fortsätta och tvinga den andra enheten att logga ut?",
			
			LOGIN_FAILED: 				"Inloggningen misslyckades!",
			LOGIN_FAILED_COUNT: 		"Inloggningen misslyckades för %num1 gånger och du har fortfarande %num2 försök kvar. ",
			NO_COOKIE: 					"Cookies måste vara aktiverade för att logga in. Vänligen aktivera Cookies eller stäng av privata/Incognito browsing mode.", 

			FORGET_PASSWORD_NOTE: 		"Om du inte har konfigurerat Password Recovery funktion. Du kan trycka på och hålla ned knappen Återställ i %SECONDS% sekunder för att återställa routern till fabriksinställningarna."
		},
		INIT: {
			PASSWORD: 					"Lösenord",
			CONFIRM_PASSWORD:				"Bekräfta lösenord",
			BEGIN: 						"Nu börjar vi",
			IMPORTANT_UPDATE_INFO: 		"För att undvika konflikt med front-end-enhet, har routerns IP-adress uppdaterats till",
			CONTINUE: 					"nästa",

			IMPORTANT_NOTICE: 			"Viktigt meddelande",
			OR: 						"Är du säker på att du vill fortsätta att besöka",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"bekräfta",

			SEC: 						"s",

			USER_CONFLICT: 				"Inloggning i konflikt!",
			
			USER_CONFLICT_INFO: 		"Användare %USER% med värd %HOST% (%IP% /%MAC%) är inloggad i routern. Du kan inte logga in samtidigt. Försök igen senare.",
			USER_CONFLICT_INFO_2: 		"Användare %USER% (%IP%) är inloggad i routern. Du kan inte logga in samtidigt. Försök igen senare.",
			
			LOGIN_FAILED: 				"Inloggning felaktig!",
			LOGIN_FAILED_COUNT: 		"Inloggningen misslyckades för %num1 gånger och du har fortfarande %num2 försök kvar. ",
			NO_COOKIE: 					"Cookies måste vara aktiverade för att logga in. Vänligen aktivera Cookies eller stäng av privata/Incognito browsing mode.", 

			INIT_NOTE_TITLE: 			"Bästa kund,",
			INIT_NOTE_CONTENT: 			"Ställ in din %PRODUCT% att ansluta till internet först. Börja skapa ett lösenord för enheten för att hantera din %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Firmware version:",
			FEATURE: 						"Ändringar och buggfixar: ",
			TITLE: 							"Tillgänglig firmware upgradering upptäckt.",
			UPGRADE_NOW: 					"Uppgradera nu",
			REMIND: 						"Påminn mig senare",
			NOTICE:    						"Hej, en ny programvara finns för routern.",
			NEVER: 							"Ignorera denna version"
			
		},

		WAN_ERROR: {
			TITLE: 							"WAN-anslutning fel!",
			STATUS: 						"Status",
			INFO: 							"Information",
			SETUP: 							"Ställ in anslutning till Internet",
			NEVER: 							"Påminn inte igen"
		},

		OFFLINE_ERROR:{
			TITLE: "Hoppsan ... Vi kan inte nå cloud-servern.",
			NOTE1: "1. Kontrollera att du har tillgång till Internet.",
			NOTE2: "2. Cloudserver är otillgänglig för tillfället. Gör refersh på sidan senare.",
			NOTE3: "3. Om problemet kvarstår , anslut <a target=\"_blank\" id=\"support\"> TP-Link teknisk support </a>.",
			ERROR: "Fel"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Version av firmware:",
			HARDWARE_VERSION: 				"Maskinvaruversion:",
			HELP_SUPPORT: 					"Stöd",
			FAQ: 							"VANLIGA FRÅGOR",
			CONFIRM_REBOOT: 				"Är du säker på att du vill starta om routern?",
			CONFIRM_LOGOUT: 				"Är du säker på att du vill logga ut?",
			UPGRADE_ALERT_1: 				"Nuvarande firmware stöder inte TP-Link molntjänst. Vi rekommenderar starkt att du ladda ner den senaste firmware på www.tp-link.com och uppdaterar.",
			UPGRADE_ALERT_2: 				"Nuvarande firmware stöder inte TP-Link molntjänst. Vi rekommenderar starkt att du uppdaterar firmware genom att klicka på uppdateringsikonen i det övre högra hörnet.",
			ACCOUNT_UNLOGIN: 				"Konto",

			REBOOTING: 						"Startar om ... <br/> Använd inte under omstarten. ",

			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Skanna QR-koden för att ladda ner TP-Link Tether app",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Swedish: Hantera bekvämt ditt nätverk från valfria mobila enheter.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Fullständig kontroll från din handflata."
		},

		NAV: {
			QUICK_SETUP: 				"Snabbinstallation",
			BASIC: 						"Grundläggande",
			ADVANCED: 					"Avancerad"
		},

		CONTROL: {
			LOGIN: 						"Logga in",
			LOGOUT: 					"Logga ut",
			UPDATE: 					"Uppdatera",
			REBOOT: 					"Starta om",
			LED: 						"Lysdiod",
			LED_ON: 					"Lysdiod på",
			LED_OFF: 					"Lysdiod släckt",
			LED_DISABLED: 				"LED-läge kan inte ändras under läget nattperiod"
		},

		LANGUAGE: {
			EN_US: 						"Engelska",
			ZH_CN: 						"简体中文"
		},

		REGION: {
			ALBANIA: 					"Albanien",
			ALGERIA: 					"Algeriet",
			AMERICAN_SAMOA: 			"Amerikanska Samoa",
			ARGENTINA: 					"Argentina",
			ARMENIA: 					"Armenien",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australien",
			AUSTRIA: 					"Österrike",
			AZERBAIJAN: 				"Azerbajdzjan",
			BAHAMAS: 					"Bahamas",
			BAHRAIN: 					"Bahrain",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Vitryssland",
			BELGIUM: 					"Belgien",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Berumuda",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnien och Herzegowina",
			BRAZIL: 					"Brasilien",
			BRUNEI_DARUSSALAM: 			"Brunei Darussalam",
			BULGARIA: 					"Bulgarien",
			CAMBODIA: 					"Kambodja",
			CANADA: 					"Kanada",
			CAYMAN_ISLANDS: 			"Caymanöarna",
			CHILE: 						"Chile",
			CHINA: 						"Folkrepubliken Kina",
			COLOMBIA: 					"Colombia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Kroatien",
			CYPRUS: 					"Cypern",
			CZECH_REPUBLIC: 			"Tjeckiska republiken",
			DENMARK: 					"Danmark",
			DOMINICAN_REPUBLIC: 		"Dominikanska republiken",
			ECUADOR: 					"Ecuador",
			EGYPT: 						"Egypten",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estland",
			ETHIOPIA: 					"Etiopien",
			FAEROE_ISLANDS: 			"Färöarna",
			FINLAND: 					"Finland",
			FRANCE: 					"Frankrike",
			FRENCH_GUIANA: 				"Franska Guyana",
			FRENCH_POLYNESIA: 			"Franska Polynesien",
			GEORGIA: 					"Georgien",
			GERMANY: 					"Tyskland",
			GREECE: 					"Grekland",
			GREENLAND: 					"Grönland",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong S.A. R. , S. R. C.",
			HUNGARY: 					"Ungern",
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

			JORDAN: 					"Jordanien",
			KAZAKHSTAN: 				"Kazakstan",
			KENYA: 						"Kenya",

			NORTH_KOREA: 				"Nordkorea",
			KOREA_REPUBLIC: 			"Republiken Korea",
			KOREA_REPUBLIC_3: 			"Republiken Korea 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Lettland",
			LEBANON: 					"Libanon",
			LIBYA: 						"Libyen",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Litauen",
			LUXEMBOURG: 				"Luxemburg",
			MACAU: 						"Macao SAR",
			MACEDONIA: 					"Före detta jugoslaviska republiken Makedonien",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malaysia",
			MALDIVES: 					"Maldiverna",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinique",
			MAURITIUS: 					"Mauritius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Mexiko",
			MONACO: 					"Furstendömet Monaco",
			MONGOLIA: 					"Mongoliet",
			MOROCCO: 					"Marocko",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Nederländerna",
			NETHERLANDS_ANTILLES: 		"Netherlands-Antilles",

			NEW_ZEALAND: 				"Nya Zeeland",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Norge",
			NORTHERN_MARIANA_ISLANDS: 	"Nordmarianerna",
			OMAN: 						"Oman",
			PAKISTAN: 					"Islamiska republiken Pakistan",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua Nya Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Peru",
			PHILIPPINES: 				"Filippinerna",
			POLAND: 					"Polen",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Reunion",
			ROMANIA: 					"Rumänien",
			RUSSIA: 					"Ryssland",
			RWANDA: 					"Rwanda",
			SAMOA: 						"Samoa.",
			SAUDI_ARABIA: 				"Saudiarabien",
			SINGAPORE: 					"Singapore",
			SLOVAK_REPUBLIC: 			"Slovakien",
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
			TRINIDAD_TOBAGO: 			"Trinidad Tobago y",
			TUNISIA: 					"Tunisien",
			TURKEY: 					"Turkiet",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ukraina",
			UNITED_ARAB_EMIRATES: 		"Förenade Arabemiraten",
			UNITED_KINGDOM: 			"Förenade kungariket",
			UNITED_STATES: 				"Förenta Staterna",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Uzbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Viet Nam",
			VIRGIN_ISLANDS: 			"Virgin Islands (U.S. )",
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
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midway Island,Samoa.",
			HAWAII: 					"(GMT-10:00) Hawaii",
			ALASKA: 					"(GMT-09:00) Alaska",
			PACIFIC_TIME: 				"(GMT-08:00) Stillahavstid",
			MOUNTAIN_TIME: 				"(GMT-07:00) Mountain (USA Kanada)",
			CENTRAL_TIME: 				"(GMT-06:00) Central Time (USA Kanada)",
			EASTERN_TIME: 				"(GMT-05:00) Östtid (USA Kanada)",
			CARACAS:					"(GMT-04:30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04:00) Atlanttid (Kanada)",
			NEWFOUNDLAND: 				"(GMT-03:30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brasilia, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Mid-Atlantic",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azorerna, Kap Verde",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwich Mean Time, Dublin, London",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlin, Stockholm, Rom, Bern, Bryssel",
			ATHENS_HELSINKI: 			"(GMT+02:00) Aten, Helsingfors, östra Europa, Israel",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Bagdad, Kuwait, Nairobi, Riyadh, Moskva",

			TEHERAN: 					"(GMT+03:30) Teheran",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Jekaterinburg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras och Calcutta och Bombay, New Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata , Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Peking, Hongkong, Perth, Singapore",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Solomonöarna, Nya Kaledonien",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamtjatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Ansökan",
			GAME:						"SPEL",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"Linje",
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
			xl_others:  				"Xl_others",
			Vonage:  					"Vonage",
			netTalk:  					"netTalk",
			iTalkBB: 					"iTalkBB",
			HTTP: 						"HTTP",
			MMS:  						"MMS",
			RTSP:                       "RTSP",
			WOW:						"WOW",
			LOL:						"LOL",
			SSH:						"SSH",
			TELNET:						"Telnet",
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

			MONDAY: 					"Måndag",
			TUESDAY: 					"Tisdag",
			WEDNESDAY: 					"Onsdag",
			THURSDAY: 					"Torsdag",
			FRIDAY: 					"Fredag",
			SATURDAY: 					"Lördag",
			SUNDAY: 					"Söndag",
			
			MON: 						"Mon.",
			TUES: 						"Tis. ",
			WED: 						"Ons. ",
			THUR: 						"Tor.",
			FRI: 						"Fre. ",
			SAT: 						"Sat.",
			SUN: 						"Sun.",

			JAN: 						"Jan.",
			FEB: 						"Feb.",
			MAR: 						"Mar.",
			APR: 						"Apr.",
			MAY: 						"Maj.",
			JUN: 						"Jun.",
			JUL: 						"Jul.",
			AUG: 						"Aug.",
			SEP: 						"Sep.",
			OCT: 						"Okt.",
			NOV: 						"Nov.",
			DEC: 						"Dec."

		},

		HOUR: {
			AM_1: 						"1",
			AM_2: 						"2",
			AM_3: 						"3",
			AM_4: 						"4",
			AM_5: 						"5",
			AM_6: 						"6",
			AM_7: 						"7",
			AM_8: 						"8",
			AM_9: 						"9",
			AM_10: 						"10",
			AM_11: 						"11",
			AM_12: 						"12",
			PM_1: 						"13",
			PM_2: 						"14",
			PM_3: 						"15",
			PM_4: 						"16",
			PM_5: 						"17",
			PM_6: 						"18",
			PM_7: 						"19",
			PM_8: 						"20",
			PM_9: 						"21",
			PM_10: 						"22",
			PM_11: 						"23",
			PM_12: 						"24"
		},

		ORDER: {
			"1ST": 						"1:a",
			"2ND": 						"2:a",
			"3RD": 						"3:e",
			"4TH": 						"4:e",
			"5TH": 						"Sista",
			"1ST_": 					"1:a",

			TH: 						"th"
		},

		GRID: {
			CLIENT_NUMBER: 				"Kundnummer",

			ID: 						"ID",
			MODIFY: 					"Ändra",
			STATUS: 					"Status",
			ENABLE: 					"Aktivera",

			OPERATION: 					"Funktion",
			CHOOSE: 					"Välj",
			DESCRIPTION: 				"Beskrivning",
			

			AUTO_REFRESH: 				"Automatisk uppdatering",
			REFRESH: 					"Uppdatera",
			NUMBER: 					"Nummer",
			ENABLED: 					"Aktiverad",
			DISABLED: 					"Inaktiverad",
			ACTIVE: 					"Aktiv",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Lägg till",
			CHOOSE: 					"Välj",
			EDIT: 						"Redigera",
			DELETE: 					"Ta bort",
			DELETE_ALL: 				"Ta bort alla",
			REMOVE: 					"Ta bort",
			RESET: 						"Återställ",
			RESET_ALL: 					"Nollställ alla",
			DETECT: 					"Upptäcka",
			ENABLE: 					"Aktivera",
			DISABLE: 					"Avaktivera",
			CLEAR: 						"Rensa",

			REFRESH: 					"Uppdatera",
			SEARCH: 					"Sök ...",
			BROWSE: 					"Bläddra",

			SAVE: 						"spara",
			BACK: 						"tillbaka",

			PREV: 						"Före",
			NEXT: 						"nästa",
			FINISH: 					"Avsluta",
			
			ON: 						"På",
			OFF: 						"Avstängd",
			LOW: 						"låg",
			MIDDLE: 					"mellan",
			HIGH: 						"hög",
			
			OK: 						"OK",
			CANCEL: 					"avbryt",

			YES: 						"ja",
			NO: 						"Nej",
			
			CONNECTED: 					"Ansluten",
			CONNECTING: 				"Ansluta",
			DISCONNECTING: 				"Urkoppling",
			DISCONNECTED: 				"Inte ansluten",

			PASSWORD_HINT: 				"Lösenord",
			FILEBUTTONTEXT: 			"Bläddra",
			FILEBLANKTEXT: 				"Välj en fil.",
			NOSELECTEDTEXT: 			"Välj alternativ.",

			ADD_A_NEW_KEYWORD: 			"Lägg till ett nytt sökord",

			SUCCESSED: 					"Framgång!",
			FORM_SAVED: 				"Sparade",
			FORM_FAILED: 				"Misslyckades",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Sparade",
			GRID_FAILED: 				"Misslyckades",
			GRID_NONE_SELECT: 			"Välj minst en post.",
			GRID_DELETE_COMFIRM: 		"Är du säker på att du vill ta bort dessa poster?",
			GRID_DELETE_ALL_COMFIRM: 	"Är du säker på att du vill ta bort alla poster?",
			GRID_MAX_RULES: 			"Maximalt antal poster har överskridits.",
			KEYWORD_MAX_OVERFLOW: 		"Antal nyckelord har överskridit gränsen.",

			NOTE: 						"Obs:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Ogiltigt format.",
			BLANKTEXT: 					"Det här fältet är obligatoriskt.",

			EMAIL: 						"Ogiltigt e-postformat.",
			NUMBER: 					"Ogiltigt format.",

			NUMBER_MIN: 				"Ogiltigt värde, ange ett nummer större än %min . ",
			NUMBER_MAX: 				"Ogiltigt värde, ange ett nummer mindre än %max . ",

			NUMBER_MIN_MAX: 			"Ogiltigt värde, ange ett nummer mellan%min och %max.",
			HEX: 						"Det här fältet ska vara ett hexadecimalt tal.",

			IP: 						"Ogiltigt format.",

			IP_NO_ALL_ZERO:				"Adressen ska inte vara 0.0.0.0.",
			IP_NO_LOOP:					"Adressen ska inte vara loopback-adress.",
			IP_NO_D_TYPE:				"Adressen ska inte vara en klass D IP.",
			IP_NO_E_TYPE:				"Adressen ska inte vara en klass E IP.",
			IP_NO_ALL_ONE:				"Adressen ska inte vara 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"Adressen ska inte börja med 255.",
			IP_NO_FIRST_ZERO:			"Adressen ska inte börja med 0.",
			MASK_NO_ALL_ONE:			"Mask kan inte vara 255.255.255.255.",

			IPV6: 						"Ogiltigt format.",
			IPV6_NOT_GLOBAL:			"Ogiltigt format.",
			IPV6_NOT_PREFIX:			"Ogiltigt format.",
			IP_DOMAIN: 					"Ogiltigt format.",
			IPV6_DOMAIN: 				"Ogiltigt format.",
			MAC: 						"Ogiltigt format.",
			MULTI_MAC:					"Ogiltigt format.",
			DATE: 						"Ogiltigt format.",
			DATE_INVALID: 				"Ange ett datum mellan 01/01/1970 och 12/31/2030.",
			MASK: 						"Ogiltigt format.",
			DOMAIN: 					"Ogiltigt format.",
			STRING_DOMAIN:              "Ogiltigt format.",
			USER: 						"Ogiltigt format.",
			NOTE: 						"Ogiltigt format.",
			PWD: 						"Ogiltigt format.",
			SSID: 						"Ogiltigt format.",
			NAME:						"Ogiltigt format.",
			ASCII_VISIBLE:				"Ogiltigt format.",
			STRING_VISIBLE:				"Ogiltigt format.",
			STRING_VISIBLE_NO_COMMA:    "Ogiltigt format.",
			STRING_VISIBLE_ALLOW_BLANK: "Ogiltigt format.",
			NAME_SPECIAL: 				"Ange 4-15 alfanumeriska tecken, siffror, - and _.",
			VPN_NAME_PWD: 				"Ange 1-15 alfanumeriska tecken, siffror, - and _."	
			
		},


		ERROR: {			
			"00000001":					"Ogiltig filtyp.",
			"00000002":					"Kontrollsummefel.",
			"00000003":					"Filen är för stor.",
			"00000004":					"Fel vid uppladdning.",
			"00000005":					"Starta om fel.",
			"00000006":					"Okänt fel.",
			"00000007":					"Objektet finns redan. Ange en annan.",

			"00000009":					"Använd det förvalda värdet 21 eller ange ett värde mellan 1024 och 65535.",
			"00000010":					"Porten skall vara en siffra.",

			"00000011":					"Användarnamnet ska vara samma med från-värdet.",
			"00000012": 				"Användarnamnet måste börja med en bokstav.",

			"00000021":					"Ogiltigt format.",

			"00000032": 				"Värdet måste vara lägre än Låg.",
			"00000033": 				"Värdet måste vara mindre än Mellan och Låg.",
			"00000034": 				"Ogiltigt värde, ange ett nummer mellan 5 och 7200.",

			"00000039": 				"Använd det förvalda värdet 0 eller ange ett värde mellan 30 och 86400.",
			"00000040": 				"SSID och MAC-adress krävs.",

			"00000042": 				"Använd det förvalda värdet 80 eller ange ett värde mellan 1024 och 65535.",

			"00000045": 				"Standard-gateway och LAN-IP-adress ska vara i samma subnät. Ange igen.",

			"00000047": 				"IP-adressen och LAN-IP-adress ska vara i samma subnät. Ange igen.",

			
			"00000049":					"Nätverket är ogiltig.",

			"00000050": 				"Bad DNS-serverns IP-adress. Ange en annan IP-adress.",
			"00000051": 				"Den här MAC-adressen finns redan. Ange en annan.",
			"00000052": 				"Den här IP-adressen finns redan. Ange en annan.",

			"00000053": 				"Startadressen bör inte vara större än den avslutande adressen. <BR/> ange igen. ",

			"00000054": 				"IP-adresser och LAN-IP-adress ska vara i samma subnät. Ange igen.",

			"00000055": 				"IP-adress kan inte vara samma som LAN-adressen.",

			"00000056": 				"Fjärr-IP-adress och aktuella LAN-IP-adressen får inte vara i samma subnät. Ange en annan.",

			"00000057": 				"Ogiltig PSK lösenord, mata in igen.",
			"00000058": 				"Ogiltig WEP-lösenord, mata in igen.",

			"00000059": 				"Ogiltig subnätmask och LAN-IP-adress, ange en giltig.",

			"00000060": 				"WAN-IP-adressen och LAN-IP-adressen får inte vara i samma subnät. <BR/> ange ett annat. ",

			"00000061": 				"Tidens början bör vara tidigare än slutdatumet.",

			"00000062": 				"Det här fältet är obligatoriskt.",
			"00000063": 				"Det här fältet är obligatoriskt.",

			"00000064": 				"Kan inte blockera värdens MAC-adress.",
			"00000065": 				"Denna punkt är oförenlig med existerande objekt. Vänligen kontrollera.",
			
			"00000066": 				"Lösenordet måste vara 8 till 63 tecken eller 64 hexadecimala siffror.",
			"00000067": 				"Lösenordet bör vara 10 hexadecimala siffror.",
			"00000068": 				"Lösenordet måste vara 5 ASCII-tecken.",
			"00000069": 				"Lösenordet bör vara 26 hexadecimala siffror.",
			"00000070": 				"Lösenordet måste vara 13 ASCII-tecken.",
			"00000071": 				"Lösenordet bör vara 32 hexadecimala siffror.",
			"00000072": 				"Lösenordet måste vara 16 ASCII-tecken.",
			"00000073": 				"Lösenordet bör vara mindre än 64 tecken.",

			"00000074": 				"Ogiltig filtyp.",

			"00000075": 				"PIN längd skall vara 8.",

			"00000076": 				"Posten är i konflikt med existerande objekt. Vänligen kontrollera trigger port och protokoll.",
			"00000077": 				"IP-adress kan inte vara samma som LAN-IP-adress.",
			"00000078": 				"Värdens IP-adress kan inte vara samma som LAN-IP-adress.",

			"00000080": 				"Lösenorden stämmer inte överens. Försök igen.",

			"00000088": 				"Operationen är inte tillåten för fjärrkontroll.",
			"00000089": 				"Du har överskridit %num försök.  Försök igen om två timmar.",

			"00000090": 				"Målet kan inte vara LAN-IP-adress.",
			"00000091": 				"Målet kan inte vara WAN-IP-adress.",

			"00000092": 				"IP-adressen och LAN-IP-adressen får inte vara i samma subnät. <br/> ange igen. ",
			"00000093": 				"IP-adressen och WAN-IP-adressen får inte vara i samma subnät. <br/> ange igen. ",

			"00000094": 				"VLAN-ID kan inte vara samma.",
			"00000095": 				"Minst en internet-port behövs.",

			"00000096": 				"Nyckelordet finns redan.",

			"00000097": 				"Utförda konfigurationer för 2,4 GHz kommer inte att träda i kraft förrän Wi-Fi -knappen är PÅ.",
			"00000098": 				"Utförda konfigurationer för 5GHz kommer inte att träda i kraft förrän Wi-Fi -knappen är PÅ.",
			"00000099": 				"Utförda konfigurationer för 2,4 GHz och 5 GHz frekvensband kommer inte att träda i kraft förrän Wi-Fi -knappen är PÅ.",

			"00000100": 				"5GHz nätet är inte tillgängligt på grund av begränsningar i ditt region/land.",

			"00000101": 				"Den trådlösa funktionen är avstängd. Om du vill använda den här funktionen. Slå på Wi-Fi -knappen.",
			"00000102": 				"Den trådlösa funktionen är avstängd. Om du vill använda den här funktionen. Slå på Wi-Fi -knappen.",

			"00000103": 				"Den trådlösa funktionen är avstängd. Om du vill använda den här funktionen. Slå på Wi-Fi -knappen.",
			"00000104": 				"Den trådlösa funktionen är deaktiverad.",

			"00000105": 				"QoS och IPTV kan inte aktiveras samtidigt.",

			"00000106": 				"IP-adress kan inte vara samma som LAN-IP-adress.",
			
			"00000107": 				"Destination finns redan.",

			"00000110": 				"IP-adressen och LAN-IP-adress ska vara i samma subnät.",
			
			"00000111": 				"QoS och <a onclick= \"$.su.menu.advanced.goTo('system-parameters');\" src= \"void(0) \">NAT Öka</a> kan inte aktiveras samtidigt. ",
			"00000112": 				"WDS funktionen kan arbeta antingen i 2.4GHz eller 5GHz-bandet. Nätetverket är inte tillgängligt på WDS bandet.",
			"00000113": 				"WDS och nätverk kan inte aktiveras samtidigt.",
			"00000114": 				"Trafikstatistik och <a onclick= \"$.su.menu.advanced.goTo('system-parameters');\" src= \"void(0) \">NAT Öka</a> kan inte aktiveras samtidigt. ",
			"00000115": 				"IPTV och <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> kan inte aktiveras samtidigt.",

			"00000117": 				"Domännamnet finns redan.",
			"00000118": 				"Antalet domännamn har överskridit gränsen.",
			"00000119":				"NAT-Boost inaktiveras när antingen <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> eller <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Trafik statistik</a> är aktiverad.",

			"00000120": 				"Lösenordet måste vara 5 eller 13 ASCII-tecken.",
			"00000121": 				"Lösenordet bör vara 10 eller 26 hexadecimala siffror.",
			"00000122": 				"Användarnamn och lösenord är tomt, är du säker på att du vill fortsätta?",
			"00000123": 				"Sparar ... <br/>Använd inte under processen.",
			"00000124": 				"Routerns PIN-kod är låsta på grund av upprepade gånger med fel PIN-KOD. Skapa en ny.",

			"00000125": 				"Antalet QoS-regler har överskridit gränsen.",
			"00000126": 				"Filen har överskridit gränsen.",
			"00000127": 				"Innehållet i filen är felaktig.",
			"00000128": 				"Välj minst en tillämpning.",
			"00000129": 				"Välj minst en fysisk port.",
			"00000130":					"WPS-funktionen är avaktiverad.",
			"00000131": 				"NTP-server får inte vara loopback-adress.",
			"00000132": 				"Läges ändring misslyckades. Försök igen senare eller starta om din router.",
			"00000133": 				"Ogiltig IP-adress för DMZ-värd. Ange ett giltigt värde.",
			"00000134":  				"Ogiltiga interna IP. Ange ett giltigt värde.",
			"00000135": 				"Firmware-filen fel.",
			"00000136": 				"Säkerhetskopia fel.",
			"00000137": 				"Användarnamnet är tomt, är du säker på att du vill fortsätta?",
			"00000138": 				"Lösenordet saknas, är du säker på att du vill fortsätta?",
			"00000139": 				"Felaktigta parametrar för återhämtning av lösenord.",
			"00000140": 				"Felaktig kod.",
			"00000141": 				"Återhämtning av lösenord är deaktiverad.",
			"00000142": 				"Det gick inte att skicka kod. Kontrollera din Internet-anslutning.",
			"00000143": 				"Ogiltiga epost-adresser.",
			"00000144": 				"Ogiltigt epost-meddelande.",
			"00000145": 				"Det gick inte att hitta värddatorn.",
			"00000146": 				"Autentisering misslyckades.",
			"00000147": 				"Porten skall vara mellan 1 och 65535.",
			"00000148": 				"För ett portintervall , får inte startportnumret vara mindre än slutportnummer. Ange igen.",
			"00000149": 				"Portnummer överlappar. Ange igen.",
			"00000150": 				"Ogiltig subnätmask och WAN-IP-adress, ange en giltig.",
			"00000151": 				"Välj minst en dag.",
			"00000152": 				"Ställ in Internet-tiden.",
			"00000213":					"DNS-serverns IP-adress och LAN-IP-adressen får inte vara samma subnät. <br/>ange annan.",
			"10000139": 				"Ingen Internet-anslutning",
			"10000140": 				"Begäran tog för lång tid. Kontrollera din Internet-anslutning och försök igen senare.",
			"10000158": 				"WAN-porten är inte ansluten.",
			"10000159": 				"Det går inte att ansluta till Internet. Kontakta din operatör eller försök igen senare.",
			"10000160": 				"Det går inte att erhålla IP-adress från DHCP-servern. Kontrollera WAN-anslutningstyp eller försök igen senare.",
			"10000161": 				"PPPoE-autentisering misslyckades. Kontrollera ditt användarnamn och lösenord.",
			"10000162": 				"Det går inte att ansluta till PPPoE-servern.",

			"10000164": 				"PPTP autentisering misslyckades. Kontrollera ditt användarnamn och lösenord.",
			"10000165": 				"Det går inte att ansluta till PPTP-servern.",

			"10000167": 				"L2TP autentiseringen misslyckades. Kontrollera ditt användarnamn och lösenord.",
			"10000168": 				"Det går inte att ansluta till L2TP-servern.",
			"10000169": 				"Okänt fel. Försök igen senare.",
			"10000172": 				"Anslutningen misslyckades.",

			"10000185": 				"Systemfel.",	
			"10000186": 				"Firmware-filen fel.",	
			"10000187": 				"Firmware nedladdning fel.",	
			"10000188": 				"Firmware uppgradering fel.",	
			"10000191": 				"Det gick inte att hämta den fasta programvaran.",
			"10000192": 				"Firmware uppgradering fel.",
			"10000193": 				"Det går inte att ansluta till servern.",	
			"10000194": 				"Det går inte att ansluta till moln-server. Försök igen senare.",
			"10000195": 				"Du kan inte ange lösenordet igen eftersom du har redan angett.",
			
			"E3002":                    "Tiden för begäran har gått ut.", 
			"E10000": 					"Vanliga fel.",
			"E20002": 					"Tiden för begäran har gått ut.",
			"E20003": 					"Cloud-servern är upptagen. Försök igen senare.",
			"E20107": 					"Ogiltig inmatning.",
			"E20200": 					"Ogiltigt e-postformat.",
			"E20502": 					"Det gick inte att binda enheten. Försök igen senare.",
			"E20503": 					"Det gick inte att frigöra (unbind) enheten. Försök igen senare.",
			"E20506": 					"Åtgärden misslyckades. Enheten är redan bunden till annat cloud-konto.",
			"E20507": 					"Denna enhet är frigjord (unbound) från kontot.",
			"E20508": 					"Antalet bundna konton har redan nått maxgränsen.",
			"E20509": 					"Användarkonton har inte rätt att binda nya användare.",
			"E20571": 					"Den här enheten är offline.",
			"E20580": 					"Åtgärden misslyckades. Detta konto är inte bundet till enheten.",
			"E20600": 					"Denna e-postadress är inte registrerad.",
			"E20601": 					"Felaktigt användarnamn eller lösenord.",
			"E20602": 					"Detta konto är inte ännu aktiverat.",
			"E20603": 					"Det här e-postmeddelandet är redan registrerat.",
			"E20604": 					"Ogiltigt användarnamn. Ange en e-postadress eller telefonnummer.",
			"E20606": 					"Det gick inte att skicka kontoaktivering via e-post.",
			"E20615": 					"Ogiltigt lösenord. Ange 6-32 ASCII-tecken utan mellanslag.",
			"E20616": 					"Ogiltigt lösenord. Ange 6-32 ASCII-tecken utan mellanslag.",
			"E20617": 					"Detta konto finns inte.",
			"E20618": 					"Detta konto finns inte.",
			"E20620": 					"Ogiltigt användarnamn. Ange 1-64 tecken.",
			"E20661": 					"Detta konto kommer att vara låst under 2 timmar på grund av för många inloggningsförsök (20 gånger under en halv timme).",
			"E20662": 					"Enheten är låst. Under de kommande 24 timmarna, enheten kommer inte att reagera på någon begäran om verifikationskod.",
			"E20671": 					"Det går inte att verifiera konto.",
			"E20672": 					"Det går inte att verifiera konto. Kontots aktiveringslänk har upphört. Sänd en ny begäran.",
			"E20673": 					"Länkens tid för att återställa lösenordet har gått ut. Skicka en ny begäran.",
			"E20674": 					"Det går inte att återställa lösenordet.",
			"E20675": 					"Kontot är för närvarande inloggad någon annanstans.",
			"E22000": 					"Ogiltig inmatning.",
			"E22001": 					"Domännamnet är redan registrerad.",
			"E22002": 					"Antalet registrerade domännamn har redan nått maxgränsen.",
			"E22003": 					"Antalet bundna domännamn har redan nått maxgränsen.",
			"E22004": 					"Det här domännamnet är redan bunden till en annan enhet.",
			"E22006": 					"Systemfel. Försök igen senare.",
			"E22007": 					"Domännamnet innehåller känsliga ord. Försök med ett annat.",
			"E22008": 					"Domännamn finns inte.",

			"E50101": 					"WAN-porten är inte ansluten.",
			"E50102": 					"Det gick inte att ansluta till Internet. Kontakta tjänsteleverantören eller försök igen senare.",
			"E50103": 					"Det går inte att erhålla IP-adress från DHCP-servern. Kontrollera WAN-anslutningstyp eller försök igen senare.",
			"E50111": 					"PPPoE-autentisering misslyckades. Kontrollera ditt användarnamn och lösenord.",
			"E50112": 					"Det går inte att ansluta till PPPoE-servern.",
			"E50121": 					"PPTP autentisering misslyckades. Kontrollera ditt användarnamn och lösenord.",
			"E50122": 					"Det går inte att ansluta till PPTP-servern.",
			"E50131": 					"L2TP autentiseringen misslyckades. Kontrollera ditt användarnamn och lösenord.",
			"E50132": 					"Det går inte att ansluta till L2TP-servern.",
			"E50140": 					"Okänt fel. Försök igen senare.",
			"E51215": 					"Begäran tog för lång tid. Kontrollera din Internet-anslutning och försök igen senare.",
			"E_CLOUD_SERVER": 			"Serverfel. Försök igen senare.",
			"E5000": 					"Kunde inte ansluta till moln-server.",
			"E5001": 					"Felaktig TP-Link-ID (e-post). Eller enheten är offline och endast admin (%email) har offlineåtkomst .",
			"E5002": 					"Fel lösenord."
		},

		MENU: {
			STATUS: 					"Status",
			NETWORK: 					"Nätverk",
			NETWORK_MAP: 				"Nätverkskarta",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP-server",
			DYNAMIC_DNS: 				"Dynamisk DNS",
			ADVANCED_ROUTING: 			"Avancerad routing",

			WIRELESS: 					"Trådlöst",
			WIRELESS_SETTINGS: 			"Trådlösa inställningar",
			WDSBRIDGING: 				"WDS överbrygga",
			WPS: 						"WPS Bridging",
			MACFILTERING: 				"MAC-filtrering",
			WIRE_STATISTICS: 			"Statistik",
			
			
			GUEST_NETWORK: 				"Guest nätverk",
			WIRELESS_SETTINGS: 			"Trådlösa inställningar",
			STORAGE_SHARING: 			"Delad lagring",
			NAT_FORWARDING: 			"NAT-vidarekoppling",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Virtuella servrar",
			PORT_TRIGGERING: 			"Portutlösare",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"USB-inställningar",
			BASIC_SET: 					"Grundläggande inställningar",
			DISK_SET: 					"Enhetsinställningar",
			FOLDER_SHARING: 			"Dela tillgång",
			STORAGE_SHARING: 			"Delad lagring",
			FTP_SERVER: 				"FTP-server",
			MEDIA_SERVER: 				"Mediaserver",
			PRINT_SERVER: 				"Skrivarservern",
			G3_G4: 						"3G/ 4G",
			
			
			PARENTAL_CONTROL: 			"Föräldrakontroll",
			
			QOS:  						"QoS",
			DATABASE:  					"Databas",

			STREAMBOOST: 				"Strömnings boost",
			MAP: 						"Karta",
			SB_MAP: 					"Karta",
			SB_BANDWIDTH:  				"Bandbredd",
			SB_PRIORITY: 				"Prioritet",
			SB_STATISTICS: 				"Statistik",

			
			SECURITY: 					"Säkerhet",
			SETTINGS: 					"Inställningar",
			ACCESS_CONTROL: 			"Åtkomstkontroll",
			IP_MAC_BINDING: 			"IP&MAC bindning",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Systemverktyg",
			TIME_SETTINGS: 				"Tidsinställningar",
			DIAGNOSTIC: 				"Felsökning",
			FIRMWARE_UPGRADE: 			"Uppgradering av fast programvara",
			BACKUP_RESTORE: 			"Säkerhetskopiering och återställning",
			ADMINISTRATION: 			"Administration",
			SYSTEM_LOG: 				"Systemlogg",
			STATISTICS: 				"Trafikstatistik",
			SYSTEM_PARAMETERS: 			"Systemparametrar",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"VPN-server",
			OPEN_VPN: 					"ÖppenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"VPN-anslutningar"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Region och tidszon",
			INTERNET_CONNECTION_TYPE: 	"Typ av Internet-anslutning",
			WIRELESS_SETTINGS: 			"Trådlösa inställningar",
			SUMMARY: 					"Sammanfattning",
			SETUP_COMPLETE: 			"Testa din anslutning",
			SETUP_COMPLETE_CLOUD: 			"TP-Link moln-tjänst",

			EXIT: 						"Avsluta",
			NEXT: 						"nästa",
			SAVE: 						"spara",
			FINISH: 					"Avsluta",
			OK: 						"OK",
			NONE: 						"Test misslyckades.",

			REGION: 					"Placering",
			TIME_ZONE: 					"Tidszon",

			AUTO_DETECT: 				"Automatisk upptäckt",
			DYNAMIC_IP: 				"Dynamisk IP",
			STATIC_IP: 					"Statisk IP-adress",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Om du inte är säker på vilken typ av Internet-anslutning du har, använd Auto Detect eller kontakta din Internet-leverantör (ISP) för att få hjälp.",

			DYNAMIC_IP_INFO: 			"Om din ISP  bara tillåter tillgång till Internet till en specifik MAC-adress måste du klona denna MAC-adress för att ge tillgång till andra enheter. Om du är osäker väljer du inte klona MAC Adress.",
			MAC_CLONE_NO: 				"Klona inte  MAC-adressen",
			MAC_CLONE_YES: 				"Klona nuvarande dator MAC-adress",
			MAC_CLONE_NOTE: 			"Om du väljer Clone MAC-adress. Kontrollera att MAC-adressen på den här datorn är registrerad hos din Internet-leverantör innan du klickar på Nästa.",

			PPPOE_INFO: 				"Ange PPPoE-användarnamn och lösenord.",
			
			STATIC_IP_INFO: 			"Ange IP-information.",

			L2TP_INFO: 					"Ange ditt L2TP användarnamn och lösenord",
			PPTP_INFO: 					"Ange ditt PPTP-användarnamn och lösenord.",
			
			USERNAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			SERVER_IP_ADDRESS_NAME: 	"VPN-server IP/domännamn",
			IP_ADDRESS: 				"IP-adress",
			SUBNET_MASK: 				"Nätmask",
			DEFAULT_GATEWAY: 			"Standard-gateway",
			PRIMARY_DNS: 				"Primär DNS",
			SECOND_DNS: 				"Sekundär DNS",
			OPTIONAL: 					"(Tillval)",
			
			ON: 						"På",
			OFF: 						"Avstängd",
			WIRELESS_24GHZ: 			"Trådlös 2,4 GHz",
			WIRELESS_5GHZ: 				"Trådlös 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Aktivera trådlös radio",
			NAME_SSID: 					"Namn på trådlöst nätverk (SSID)",

			SUMMARY_INFO1: 				"Du behöver koppla in din trådlösa enheter till det nya trådlösa nätverket innan du klickar på <strong>Nästa</strong> knappen.",
			SUMMARY_INFO2: 				"Det trådlösa nätverkets namn och lösenord har ändrats enligt nedan:",
			SUMMARY_INFO3: 				"Kontrollera att du har kopplat till den nya trådlösa nätverk.",

			WIRELESS_24GHZ_SSID: 		"Trådlös 2,4 GHz namn (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Trådlös 2,4 GHz lösenord",
			WIRELESS_5GHZ_SSID: 		"Trådlös 5GHz namn (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Trådlös 5GHz lösenord",

			SORRY: 						"Misslyckades.",
			SUCCESS: 					"Framgång!",
			TEST_INTERNET_SUCCESS_INFO: "Klicka på Avsluta för att avsluta Snabbinstallation.",

			TEST_INTERNET_FAILED_INFO_0:"Kontrollera att alla Quick Setup parametrar är korrekta och försök igen. Om alla Quick Setup parametrar är korrekta. Starta om modemet, vänta 2 minuter och klicka på Testa Internet-anslutning. Om du inte använder ett modem, kan du behöva kontakta din Internet-leverantör (ISP) för att få hjälp.",
			TEST_INTERNET_FAILED_INFO_1: "Hopsan...  Internet-anslutningen kunde inte skapas.<br />1. Kontrollera att alla kablar är ordentligt anslutna.<br />2. Klicka på Tillbaka och kontrollera att Internet-anslutningen är korrekt.<br />3. Kontakta vår tekniska support om problemet kvarstår.",
			SUMMARY_INFO4: 				"Tyvärr! Vi upptäcker att du inte anslutit den trådlösa enheten till det nya trådlösa nätverket. Var snäll och gör det och klicka sedan på <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Grattis!",
			COMPLETE_INFO_0: 			"Du har slutfört den snabba installationen.",
			COMPLETE_INFO_1:			"Klicka på Testa Internet anslutning nedan, klicka sedan på Slutför.",
			COMPLETE_INFO_2: 			"Du är inte inloggad på ditt TP-Link Cloud-konto. Du kan logga in senare från grundläggande (Basic) > TP-Link moln.",
			TEST_INTERNET: 				"Testa din anslutning",

			
			RESET_USER_TITLE: 			"Ställ in ett nytt användarnamn och lösenord",
			NEW_USERNAME: 				"Nya användarnamn",
			NEW_PASSWORD: 				"Nytt lösenord",
			CONFIRM_PASSWORD: 			"Bekräfta nytt lösenord",
			
			NO_ACCOUNT: 				"Saknar du TP-Link-ID?",
			REGISTER_NOW: 				"Registrera dig nu",
			REGISTER_SKIP: 				"Logga in senare",
			LOGIN: 						"Logga in",
			REGISTER_NEW:				"Registrera ett nytt konto.",
			COMPLETE_INFO_EMAIL_PREFIX: "Ditt TP-Link ID är:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Vi rekommenderar att du loggar in med det här kontot för enkel administration av din enhet och andraTP-Link Cloud funktioner.",

			INTERNET_OK: 				"Grattis! Nätverksinstallation framgångsrikt. Njut av Internet.",
			CLOUD_WIZARD: 				"För mer TP-Link moln-funktioner, logga in med din <a class=\"link\" href=\"#\"> TP-Link ID </a>.",
			ACCOUNT_DESP:               "Med ett TP-Link ID kan du:", 
			ACCOUNT_DESP_SUB1:          "Via Internet få tillgång till din enhet och lokala servrar (FTP, HTTP, etc.)",
			ACCOUNT_DESP_SUB2:          "Håll alltid din programvara uppdaterad med  funktionen Online uppgradera",
	        ACCOUNT_DESP_SUB3:          "Hantera flera enheter via  ett konto",
			
			CONFIRM: 					"bekräfta"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Internetstatus",

			GHZ24: 						"2,4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Anslutningstyp",
			SECONDARY_CONN: 			"Sekundär anslutning",

			POOR_CONNECTED: 			"Dålig anslutning",
			UNPLUGGED: 					"WAN-porten är urkopplad.",
			
			CONNECTED: 					"Ansluten",
			DISCONNECTED: 				"Urkopplad",

			INTERNET_IP_ADDR: 			"IP-adress",
			
			IP_ADDR: 					"IP-adress",
			MAC_ADDR: 					"MAC-adress",
			GATEWAY: 					"Gateway",

			AUTO: 						"Auto",
			
			ROUTER: 					"Routern",
			WIRELESS_CLIENTS: 			"Trådlösa klienter",
			HOST_CLIENTS: 				"Värd klienter",
			GUEST_CLIENTS: 				"Gäst klienter",
			WIRE_CLIENTS: 				"Fast klienter",
			PRINTER: 					"Skrivare",
			USB_DISK: 					"USB-disk",
			WIRELESS: 					"Trådlöst",
			NAME: 						"Namn",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Kanal",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Trådlös 2,4 GHz",
			WIRELESS_5GHZ: 				"Trådlös 5GHz",
			
			GUEST_24GHZ: 				"Gäst nätverk 2,4 GHz",
			GUEST_5GHZ: 				"Gäst nätverk 5GHz",
			
			STATUS: 					"Status",
			TOTAL: 						"Totalt",
			AVAILABLE: 					"Tillgängliga",
			GB: 						"GB",
			BRAND: 						"Märke",

			DYNAMIC_IP: 				"Dynamisk IP",
			STATIC_IP: 					"Statisk IP-adress",
			SUBNET_MASK: 				"Nätmask",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond kabel",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6Till4 Tunnel",
			NONE: 						"Ingen"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Automatisk upptäckt",
			INTERNET_CONN_TYPE: 		"Typ av Internet-anslutning",
			DYNAMIC_IP: 				"Dynamisk IP",
			STATIC_IP: 					"Statisk IP-adress",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond kabel",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"Dhcp",
			UNPLUGGED: 					"WAN-porten är urkopplad.",
			NONE: 						"Ingen",
			DETECT_FAIL: 				"Automatisk avkänning misslyckades",
			SECONDARY_CONN: 			"Sekundär anslutning",

			DYNAMIC_YES: 				"Klona inte  MAC-adressen",
			DYNAMIC_NO: 				"Klona nuvarande dator MAC-adress",
			
			IP_ADDR: 					"IP-adress",
			SUBNET_MASK: 				"Nätmask",
			DEFAULT_GATEWAY: 			"Standard-gateway",
			PRIMARY_DNS: 				"Primär DNS",
			SECOND_DNS: 				"Sekundär DNS",
			OPTIONAL: 					"(Tillval)",
			USER_NAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			SERVER_IP_ADDR_NAME: 		"VPN-server IP/domännamn",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Om du inte är säker på vilken typ av Internet-anslutning du har, använd Auto Detect eller kontakta din Internet-leverantör (ISP) för att få hjälp."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Trådlösa inställningar",
			MODE_2G: 					"Trådlös 2,4 GHz",
			MODE_5G: 					"Trådlös 5GHz",
			WIRELESS_NETWORK_NAME: 		"Namn på trådlöst nätverk (SSID)",
			WIRELESS_PASSWORD: 			"Lösenord",
			ENABLE_WIRELESS: 			"Aktivera trådlös radio",
			SAVE: 						"spara",
			ENCRYPTION_2G_NOTICE:		"2,4 GHz kryptering är %s.",
			ENCRYPTION_5G_NOTICE:		"5GHz kryptering är %s.",
			ENCRYPTION_2G_NO: 			"2,4 GHz trådlösa nätverket är inte krypterat.",
			ENCRYPTION_5G_NO: 			"5GHz trådlösa nätverket är inte krypterat.",
			ENCRYPTION_SURE: 			"Är du säker på att du vill fortsätta?",

			HIDE_SSID: 					"Dölj SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Grundläggande inställningar",
			TITIL_NEW:					"Disk&konto",
			DISK_SET:					"Enhetsinställningar",

			SELFLY_REMOVE:				"Ta bort säkert",
			SCANING:					"Skanna ...",
			SCAN_RESULT:				"Hittade %n disks",
			
			DISKS:						"Disk",
			USERS: 						"Användarkonto",
			DEVICENAME: 				"Enhetens namn",
			VOLUMN: 					"Volym",

			USBSPACE: 					"Använt utrymme",
			FREESPACE: 					"Ledigt utrymme",
			STATUS: 					"Status",
			INACT: 						"Inaktivera",
			USAGE: 						"Användning",
			CAPACITY: 					"Kapacitet",
			OPERATION: 					"Funktion",
			
			ACC: 						"Kontohantering",
			USERNAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			USE_LOGIN: 					"Använd Logga in användare",
			SCAN: 						"Skanna",
			ENJECT_ALL: 				"Mata ut alla",
			ENJECT: 					"Mata ut",
			ADD_USER: 					"Lägg till användare",
			AUTH: 						"Myndigheten",


			LOCATION: 					"Placering",
			MOBILE_ISP: 				"Mobil INTERNET-LEVERANTÖR",
			DIAL_NUMBER: 				"Slå nummer",
			APN: 						"APN",
			USERNAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			MTU_SIZE: 					"MTU-storlek (i byte)",
			OPTIONAL: 					"(Tillval)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Föräldrakontroll",

			DEVICE_CTR: 				"Enheter under föräldrakontroll",
			ID: 						"ID",
			DEVICE: 					"Enhetens namn",
			MAC_ADDRESS: 				"MAC-adress",
			TIME: 						"Internet-åtkomst tid",
			DESCRIPTION: 				"Beskrivning",
			ENABLE: 					"Aktivera",
			ENABLE_THIS_ENTRY: 			"Aktivera",
			OPTIONAL: 					"(Tillval)",
			BTN_VIEW: 					"Visa befintliga enheter",
			ACCESS_DEVICES_LIST: 		"Enhetslista",
			OPT: 						"Funktion",
			STATUS: 					"Status"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Guest nätverk",
			MODE_2G: 					"Trådlös 2,4 GHz",
			MODE_5G: 					"Trådlös 5GHz",
			WIRELESS_NETWORK_NAME: 		"Namn på trådlöst nätverk (SSID)",
			WIRELESS_PASSWORD: 			"Lösenord",
			ENABLE_WIRELESS: 			"Aktivera Gäst nätverk",
			SAVE:						"spara",
			HIDE_SSID: 					"Dölj SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Moln-konto",
			OFFLINE_NOTE_TITLE: 		"Enheten är offline",
			LOGIN_NOTE_TITLE: 			"Oj…",
			LOGIN_OFFLINE_NOTE: 		"Enheten är offline. Kontrollera WAN och nätverkets konfiguration för att se till att inställningar är korrekt angivna.",

			EMAIL: 						"e-post",
			PASSWORD: 					"Lösenord",
			FORGET_PASSWORD: 			"Glömt lösenord?",

			CLOUD_WIZARD: 				"För mer TP-Link moln-funktioner, logga in med din <a class=\"link\" href=\"#\"> TP-Link ID </a>.",
			NO_ACCOUNT: 				"Saknar du TP-Link-ID?",
			REGISTER_NOW: 				"Registrera dig nu"
		},
		STATUS: {
			TITLE: 						"Status",
			INTERNET:					"Internet",
			WIRELESS:					"Trådlöst",
			LAN:						"LAN",
			USB_TITLE:					"USB-enheter",
			PERFORMANCE: 				"Prestanda",
			GUEST_NETWORK: 				"Guest nätverk",
			ACCESS_DEVICES: 			"Få åtkomst till enheter",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2,4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Anslutningstyp",

			MAC_ADDRESS: 				"MAC-adress",
			IP_ADDRESS: 				"IP-adress",
			RELEASE: 					"Släpp",
			RENEW: 						"Förnya",
			
			DYNAMIC_IP: 				"Dynamisk IP",
			STATIC_IP: 					"Statisk IP-adress",
			SUBNET_MASK: 				"Nätmask",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond kabel",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6Till4 Tunnel",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass-Through (Bridge)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Ingen",
			
			DEFAULT_GATEWAY: 			"Standard-gateway",
			DNS: 						"DNS-server",
			MAC: 						"MAC-adress",
			WDS_STATUS: 				"WDS-status",
			
			IPV6_ADDRESS: 				"IP-adress",
			PRIMARY_DNS: 				"Primär DNS",
			SECOND_DNS: 				"Sekundär DNS",

			RADIO: 						"Trådlös radio",

			NAME_SSID: 					"Namn (SSID)",
			NETWORK_NAME_SSID:			"Namn på trådlöst nätverk (SSID)",
			HIDE_SSID: 					"Dölj SSID",
			MODE: 						"Läge",
			CHANNEL: 					"Kanal",
			CHANNEL_WIDTH: 				"Kanalbredd",
			AUTO: 						"Auto",
			CURRENT_CHANNEL: 			"Aktuell kanal",

			WDS: 						"WDS-status",
			WIRED_CLIENTS: 				"Fast klienter",
			WIRELESS_CLIENTS: 			"Trådlösa klienter",

			ENABLE_DHCP: 				"Dhcp",
			LINKADDR:					"Länk-lokal adress",
			ASSIGN_TYPE: 				"Tilldelad typ",

			ALLOW_TO_SEE_EACH: 			"Tillåt att gäster kan se varandra",

			TOTAL: 						"Totalt:",
			AVAILABLE: 					"Tillgänglig:",

			USB: 						"USB-disk",
			PRINTER: 					"Skrivare",

			CPU_LOAD: 					"Processorbelastning",
			MEMORY_USAGE: 				"Minnesanvändning",

			IP_ADDR_P: 					"IP-adress:",
			MAC_ADDR_P: 				"MAC-adress:",
			CONN_TYPE_P: 				"Anslutningstyp:",

			DISABLED: 					"Inaktiverad",
			INIT: 						"Init.",
			SCAN: 						"Skanna",
			AUTH: 						"Aukt.",
			ASSOC: 						"Associerad",
			RUN: 						"Kör",
			HOST: 						"Värd",
			GUEST: 						"Gäst",

			ON: 						"På",
			OFF: 						"Avstängd"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Typ av Internet-anslutning",
			INTERNET_MAC_ADDRESS: 		"MAC-adress",
			
			CONNECT: 					"Anslut",
			DISCONNECT: 				"Koppla loss",
			
			IP_ADDR: 					"IP-adress",
			
			USE_DEFAULT_MAC: 			"Använd standard MAC-adress",
			USE_COMPUTER_MAC: 			"Använd styrenhetens MAC-adress",
			USE_CUSTOM_MAC: 			"Använd egen MAC-adress",
			MAC_CLONE: 					"MAC-klon",
			
			CONFIG: 					"Konfig.",
			
			IP_ADDRESS: 				"IP-adress",
			SUBNET_MASK: 				"Nätmask",
			DEFAULT_GATEWAY: 			"Standard-gateway",
			
			MANUAL_DNS: 				"Manuell DNS",
			PRIMARY_DNS: 				"Primär DNS",
			SECOND_DNS: 				"Sekundär DNS",
			
			RENEW: 						"Förnya",
			RELEASE: 					"Släpp",
			VIEW_MODE: 					"Visningsläge",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Få dynamiskt från internetleverantören",
			USE_FOLLOW_IP_ADDR: 		"Använd följande IP-adress",
			USE_FOLLOW_DNS_ADDR: 		"Använd följande DNS-adresser",
			USE_FOLLOW_DNS_SERVER: 		"Använd följande DNS-server",
			
			BASIC: 						"Grundläggande",
			ADVANCED: 					"Avancerad",
			
			DNS_ADDR_MODE: 				"DNS-adress",
			MTU_SIZE: 					"MTU-storlek",
			MTU_1500: 					"Byte. (Standard är 1500, ändras inte om inte nödvändigt.)",
			MTU_1480: 					"Byte. (Standard är 1480, ändras inte om inte nödvändigt.)",
			MTU_1460: 					"Byte. (Standard är 1460, ändras inte om inte nödvändigt.)",
			MTU_1420: 					"Byte. (Standard är 1420, ändras inte om inte nödvändigt.)",
			
			HOST_NAME: 					"Värdnamn",

			HOST_NAME_CONFIRM: 			"Värdnamnet innehåller otillåtna tecken som kan orsaka oväntat system beteende. Är du säker på att du vill fortsätta?",

			GET_IP_WITH_UNICAST_DHCP: 	"Hämta IP-med-unicast-DHCP (vanligtvis  krävs det inte.)",
			OPTIONAL: 					"(Tillval)",
			
			STATIC_IP: 					"Statisk IP-adress",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			
			INTERNET_IP_ADDR: 			"IP-adress",
			INTERNET_DNS: 				"Internet-DNS",
			SECONDARY_CONN: 			"Sekundär anslutning",
			NONE: 						"Ingen",
			INTERNET_PRIMARY_DNS:		"Primär DNS",
			INTERNET_SECONDARY_DNS: 	"Sekundär DNS",
			
			DYNAMIC_IP: 				"Dynamisk IP",
			DYNAMIC_IP_v6: 				"Dynamisk IP (SLAAC/DHCPv6)",
			STATIC_IP: 					"Statisk IP-adress",
			SERVICE_NAME: 				"Service Namn",
			ACCESS_CONCENTRATOR_NAME:  	"Access Concentrator namn",
			DETECT_ONLINE_INTERVAL: 	"Upptäck Online-intervall",
			INTERVAL_TIPS: 				"Sekunder. (0-120. Standardvärdet är 10.)",
			IP_ADDR_MODE:  				"IP-adress",
			CONN_MODE: 					"Anslutningsläge",
			DHCP_LINK_UNPLUGGED: 		"WAN-porten är urkopplad.",
			
			AUTO: 						"Auto",
			ON_DEMAND: 					"På begäran",
			TIME_BASED: 				"Tidsbaserade",
			MANUALLY: 					"Manuellt",
			MAX_IDLE_TIME: 				"Maximal vilotid",
			MAX_IDLE_TIME_TIPS: 		"Minuter. (0 Betyder alltid aktiv.)",
			PERIOD_OF_TIME: 			"Tidsperiod",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"BigPond kabel",
			AUTH_SERVER: 				"Auth. Server",
			AUTH_DOMAIN: 				"Auth. Domän",
			L2TP: 						"L2TP",
			GATEWAY: 					"Gateway",
			SERVER_IP_ADDR_NAME: 		"VPN-server IP/domännamn",
			PPTP: 						"PPTP",
			TO: 						"Till",
			
			TUNNEL_6TO4: 				"6Till4 Tunnel",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Få tillfällig IPv6-adress",
			GET_PREFIX_DELEGATION: 		"Få IPv6 prefix delegation",
			IPV6_ADDR: 					"IPv6-adress",

			GET_IPV6_WAY: 				"Få IPv6-adress",
			AUTOMATICALLY: 				"Få automatiskt",
			SPECIFIED_BY_ISP: 			"Anges av LEVERANTÖREN",

			IPV6_ADDR_PREFIX: 			"IPv6 Adress Prefix",
			NONE_TEMPORARY: 			"Tillfälliga",

			PREFIX_DELEGATION: 			"Prefix delegation",
			ENABLE: 					"Aktivera",
			DISABLE: 					"Avaktivera",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"IPv4 masklängd",
			CONFIG_TYPE: 				"Typ av konfiguration",
			RD6_PREFIX: 				"6RD Prefix",
			RD6_PREFIX_LENGTH: 			"6RD Prefix längd",
			REPLY_IPV4_ADDR: 			"Gräns svar IPv4-adress",
			MANUAL: 					"Manuell",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass-Through (Bridge)",
			LOCAL_IPV6: 				"Lokala ipv6-adress",
			PEER_IPV6: 					"Peer-ipv6-adress",
			TUNNEL_ADDR: 				"Tunnel adress",
			IPV4_NETMASK: 				"IPv4 nätmask",
			CUSTOM: 					"Anpassad",
		    AFTR_NAME: 					"AFTR namn",
			PPP_SHARE_V6:				"PPPoE samma session med IPv4-anslutning",
			PPP_SHARE_V4:				"PPPoE samma session med IPv6-anslutning",

			
			
			IPV4_ADDR: 					"IPv4-adress",
			IPV4_MASK: 					"IPv4 nätmask",
			IPV4_GATEWAY: 				"IPv4-standard gateway",
			TUNNEL_ADDR: 				"Tunnel adress",

			DUPLEX: 					"Dubbelsidig utskrift",
			AUTO_NEGOTIATION: 			"Automatisk förhandling",
			FULL_DUPLEX_1000: 			"1000 Mbps full duplex",
			HALF_DUPLEX_1000:			"1000Mbit/s halv duplex",
			FULL_DUPLEX_100: 			"100 Mbit/s full duplex",
			HALF_DUPLEX_100: 			"100 Mbit/s halv duplex",
			FULL_DUPLEX_10: 			"10 Mbit/s full duplex",
			HALF_DUPLEX_10: 			"10 Mbit/s halv duplex"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"MAC-adress",
			IP_ADDRESS: 				"IP-adress",
			SUBNET_MASK: 				"Nätmask",
			CUSTOM: 					"Anpassad",

			IGMP: 						"Aktivera IGMP-Proxy",
			

			ASSIGNED_TYPE: 				"Tilldelad typ",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+statslösa DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Adress Prefix",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Adress",
			DELEFATED: 					"Delegerad",
			STATIC: 					"Statisk",
			SITE_PREFIX: 				"Destinationsplatsens prefix",
			SITE_PREFIX_LEN: 			"Destinationsplatsens prefixlängd",

			PREFIX_TYPE:  				"Platsprefixets typ av konfiguration",
			LAN_IPV6_ADDR:  			"LAN IPV6-adress",

			RELEASE_TIME: 				"Frigörelsetid",
			RELEASE_TIME_TIP: 			"Sekunder. (Standard är 86400, ändras inte om inte nödvändigt.)",
			ADDRESS:					"Adress",
			SAVE: 						"spara",

			REBOOT_TIP: 				"Routern hoppar över till den nya inloggningssidan. <BR/> Vänligen vänta ... "

		},

		IPTV:{
			TITLE: 						"Inställningar",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Aktivera IPTV", 
			MODE:  						"Läge",
			IGMP_PROXY: 				"IGMP-Proxy",
			IGMP_VERSION: 				"IGMP version",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Bro",
			BASIC: 						"Anpassad",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Ryssland",
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

			Q_TAG: 						"802.1Q Tag",
			ENABLE: 					"Aktivera",
			
			INTERNET_VLAN_ID: 			"Internet VLAN-ID",
			INTERNET_VLAN_PRIORITY: 	"Internet VLAN prioritet",
			IP_PHONE_VLAN_ID: 			"IP-telefonen VLAN-ID",
			IP_PHONE_VLAN_PRIORITY: 	"IP-telefon VLAN prioritet",
			IPTV_VLAN_ID: 				"IPTV-VLAN-ID",
			IPTV_VLAN_PRIORITY: 		"IPTV-VLAN prioritet",
			IPTV_MULTI_VLAN_ID: 		"IPTV Multicast VLAN-ID",
			IPTV_MULTI_VLAN_PRIORITY: 	"IPTV Multicast VLAN prioritet"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP-server",
			
			SETTINGS: 					"Inställningar",

			DHCP_SERVER: 				"DHCP-server",
			ENABLE_DHCP_SERVER: 		"Aktivera DHCP-server",

			IP_ADDR_POOL: 				"IP-adresser",
			LEASETIME: 					"Adress lånetid",
			LEASENOTE: 					"Minuter. (1-2880. Standardvärdet är 120.)",
			
			GATEWAY: 					"Standard-gateway",
			DOMAIN: 					"Standarddomän",
			PRIMARYDNS: 				"Primär DNS",
			SECONDARYDNS: 				"Sekundär DNS",

			OPTIONAL: 					"(Tillval)",

			CLIENTSLIST: 				"DHCP-Klient Lista",
			CLIENT_NUMBER: 				"Kundnummer",
			CLIENT_NAME: 				"Klientnamn",
			MAC_ADDR: 					"MAC-adress",
			ASSIGNED_IP: 				"Tilldelad IP-adress",
			LEASE_TIME: 				"Lånetid",

			RESERVATION: 				"Adress bokning",

			RESERVED_IP: 				"Reserverad IP-adress",
			IP_ADDRESS: 				"IP-adress",
			DESCRIPTION: 				"Beskrivning",

			CLIENTSLIST: 				"DHCP-Klient Lista",
			CLIENT_NUMBER: 				"Kundnummer",

			ENABLE: 					"Aktivera",
			ENABLE_THIS_ENTRY: 			"Aktivera"
			
		},

		DDNS: {
			DDNS: 						"Dynamisk DNS",
			SERVICEPROVIDER: 			"Tjänsteleverantör",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Gå till registrera dig ...",
			USERNAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			DOMAIN_NAME_LIST: 			"Domän namn lista",
			DOMAIN_NAME: 				"Domännamn",
			LOGIN: 						"Logga in",
			LOGIN_SAVE: 				"Logga in och spara", 
			LOGOUT: 					"Logga ut",
			STATU_SUCCESS:				"Framgång!",
			UPDATE_INTERVAL:			"Uppdateringsintervall",
			ONE_HOUR:					"1 timme",
			SIX_HOUR:					"6 timmar",
			TWETEEN_HOUR:				"12 timmar",
			ONE_DAY:					"1 dag",
			TWO_DAY:					"2 dagar",
			THREE_DAY:					"3 dagar",
			NEVER:						"Aldrig",
			UPDATE:						"Uppdatera",
			STATU_INCORRENT:			"Felaktigt användarnamn eller lösenord.",
			STATU_ERR_DOMAIN:			"Domän namn fel",
			WAN_IP_BIND: 				"WAN IP-bindning",
			CURRENT_DOMAIN: 			"Nuvarande domännamn",
			REGISTER: 					"Registrera",
			BIND: 						"Binda",
			UNBIND: 					"Unbind",
			TITLE: 						"DDNS inte tillgänglig",
			CONTENT: 					"För att kunna använda vår överlägsna TP-Link DDNS-tjänst, vänligen <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\"> Logga in </a> med din TP-Link ID, eller välj en annan tjänsteleverantör.",
			STATU_NO_LAUNCH:			"Lanserar inte",
			STATU_FAIL_DDNS: 			"Det gick inte att uppdatera DDNS.",
			STATU_FAIL_NOIP: 			"Det gick inte att uppdatera NO-IP",
			DISABLE: 					"Avaktivera",
			ENABLE: 					"Aktivera",	
			STATU_NO_LAUNCH:			"Det gick inte att uppdatera DDNS.",
			STATU_CONN:					"Ansluta",
			WAN_IP_BIND: 				"WAN IP-bindning",
			TIME: 						"Registrerade datum",
			BOUND: 						"Bundna",
			FREE: 						"Fri",
			SORRY: 						"Misslyckades.",
			UNBIND_NOTE:          		"Om du vill binda %domain% till din enhet, utför först unbind (frigör) av domännamn."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Avancerad routing",
			STATIC_ROUTING: 			"Statisk routing",

			DESTINATION_NETWORK:		"Nätverksdestination",
			SUBNET_MASK: 				"Nätmask",
			DEFAULT_GATEWAY: 			"Standard-gateway",
			DESCRIPTION: 				"Beskrivning",
			
			SYSTEM_ROUTING_TABLE: 		"System routingtabell",
			CLIENT_NUMBER: 				"Aktiva rutters nummer",

			GATEWAY: 					"Gateway",
			INTERFACE: 					"Gränssnitt",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Aktivera",
			ENABLE_THIS_ENTRY: 			"Aktivera"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Inställningar",
			NOT_SUPPORT_5G: 			"Regionen stöder bara 2,4 GHz. Se till att du väljer rätt region.",

			REGION: 					"Placering",
			NOTICE:  					"För att använda den trådlösa funktionen, bör du ha trådlös maskinvara påslagen.",
			
			MODE_2G:					"2,4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Trådlösa inställningar",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Aktivera trådlös radio",

			WIRELESS_NETWORK_NAME: 		"Namn på trådlöst nätverk (SSID)",
			WIRELESS_PASSWORD: 			"Lösenord",
			HIDE_SSID: 					"Dölj SSID",

			SECURITY: 					"Säkerhet",
			NO_SECURITY: 				"Ingen säkerhet",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personligt (rekommenderas)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2-Företag",
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

			MODE:  						"Läge",
			MODE_B:  					"Endast 802.11b",
			MODE_G:  					"Endast 802.11g",
			MODE_N:  					"Endast 802.11n",
			MODE_BG:  					"802.11b/g blandad",
			MODE_GN: 					"802.11g/n blandad",
			MODE_BGN:  					"802.11b/g/n blandad",

			MODE_A_5: 					"Endast 802.11a",
			MODE_AN_5: 					"802.11a/n blandad",
			MODE_N_5: 					"Endast 802.11n",
			MODE_AC_5:					"Endast 802.11ac ",
			MODE_NAC_5:					"802.11n/ac blandad",
			MODE_ANAC_5:				"802.11a/n/ac blandad",


			CHANNEL_WIDTH: 				"Kanalbredd",
			CHANNEL: 					"Kanal",

			TRANSMIT_POWER: 			"Överföringsenergi",

			RADIUS_SERVER_IP: 			"RADIUS server IP",
			RADIUS_PORT: 				"RADIUS port",
			RADIUS_PASSWORD: 			"RADIUS lösenord",

			TYPE: 						"Typ",
			OPEN_SYSTEM: 				"Öppet system",
			SHARED_KEY: 				"Delad nyckel",

			KEY_SELECTED: 				"Nyckel som valts",
			KEY1: 						"Nyckel 1",
			KEY2: 						"Nyckel 2",
			KEY3: 						"Nyckel 3",
			KEY4: 						"Nyckel 4",

			WEP_KEY_FORMAT: 			"WEP nyckelformat",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimala",

			KEY_TYPE: 					"Typ av nyckel",
			BIT64: 						"64-Bitars",
			BIT128: 					"128-Bitars",
			BIT152: 					"152-Bitars",

			KEY_VALUE: 					"Nyckelvärde",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"låg",
			MIDDLE: 					"mellan",
			HIGH: 						"hög"
		},

		WPS: {

			TITLE2: 					"Routerns PIN-KOD",
			ROUTERS_PIN_INFO: 			"Andra enheter kan ansluta till routern med WPS med routerns PIN-KOD.",
			ENABLE_ROUTE_PIN: 			"Routerns PIN-KOD",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Generera",
			DFT: 						"Standard",

			TITLE: 						"WPS-guiden",
			SELECT_SETUP: 				"Välja en installationsmetod",
			PUSH_BTN: 					"Tryck på knappen (rekommenderas)",
			PUSH_DES: 					"Tryck på den fysiska sätt på knappen på routern eller klicka på programvaran Anslut på den här sidan.",
			CONNECT: 					"Anslut",
			CANCEL: 					"avbryt",

			RESULT_HEAD: 				"Den trådlösa klienten",
			RESULT_END: 				"Har lagts till i nätverket.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Hittades inte",
			ENTER_CLIENT_PIN: 			"Ange kundens PIN-KOD",
			SWITCH_NOTE:				"För att använda WPS bör du aktivera den trådlösa funktionen först.",
			SWITCH_NOTE2:				"För att använda WPS-guiden bör du konfigurera rätt trådlösa parametrar först.",
			STATUS_PIN_ERROR: 			"Ogiltig WPS PIN? Kontrollera om det är korrekt.",
			STATUS_ERROR: 				"Fel.",
			STATUS_CONN_ERROR: 			"Anslutningen misslyckades.",
			STATUS_CONNING: 			"Anslutning ...",
			STATUS_CANCEL: 				"Anslutningen avbröts.",
			
			NOTE: 						"Obs:",
			
			STATUS_CONN_OVERLAP: 		"Anslutningen misslyckades (ÖVERLAPPNING).",
			STATUS_CONN_TIMEOUT: 		"Anslutningen misslyckades (TIMEOUT).",
			STATUS_CONN_INACT: 			"Anslutningen inaktiv."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Trådlösa stationer Online",
			CLIENT_NUMBER: 				"Kundnummer",
			MAC_ADDRESS: 				"MAC-adress",
			CONN_TYPE: 					"Anslutningstyp",
			SECURITY: 					"Säkerhet",
			RECEIVED_PACKETS: 			"Mottagna paket",
			SEND_PACKETS: 				"Skickade paket"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Inställningar",
			
			MODE_2G: 					"2,4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Tillåt att gäster kan se varandra",
			
			ALLOW_LOCAL: 				"Ge gäster tillgång till mitt lokala nätverk",
			
			WIRELESS: 					"Trådlöst",
			WIRELESS_24G_RADIO: 		"Trådlös 2,4 GHz",
			WIRELESS_5G_RADIO: 			"Trådlös 5GHz",
			ENABLE_GUEST: 				"Aktivera Gäst nätverk",

			NAME_SSID: 					"Namn på trådlöst nätverk (SSID)",
			HIDE_SSID: 					"Dölj SSID",

			SECURITY: 					"Säkerhet",
			NO_SECURITY: 				"Ingen säkerhet",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personligt",

			VERSION: 					"Version",
			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Kryptering",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Lösenord"
		},

		NAT:{
			SETTINGS: 					"Hårdvara NAT",
			STATUS: 					"Hårdvara NAT",
			
			ALG_TITLE: 					"Applikationslager för gateway (ALG)",

			FTP_ALG: 					"FTP-ALG",
			TFTP_ALG: 					"TFTP-ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP-vidarekoppling",
			L2TP_ALG: 					"L2TP-vidarekoppling",
			IPSEC_ALG: 					"IPSec-vidarekoppling",

			ENABLE_FTP_ALG: 			"Aktivera FTP-ALG",
			ENABLE_TFTP_ALG: 			"Aktivera TFTP-ALG",
			ENABLE_H323_ALG: 			"Aktivera H323 ALG",
			ENABLE_RTSP_ALG: 			"Aktivera RTSP ALG",
			ENABLE_PPTP_ALG: 			"Aktivera PPTP-vidarekoppling",
			ENABLE_L2TP_ALG: 			"Aktivera L2TP-vidarekoppling",
			ENABLE_IPSEC_ALG: 			"Aktivera IPSec-vidarekoppling",
			NAT_ENABLE_NOTICE: 			"Obs! Dina konfigurationer påverkas inte förrän NAT-funktionen är aktiverad."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Virtuella servrar",

			SERVICE_NAME: 				"Typ av tjänst",
			EXTERNAL_PORT: 				"Extern port",
			INTERNAL_IP: 				"Inre IP",
			INTERNAL_PORT: 				"Intern port",
			PROTOCAL: 					"Protokoll",

			BTN_VIEW: 					"Visa befintliga tjänster",

			EXSITTING_SERVICE: 			"Befintliga tjänster",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX eller XX)",
			EXT_PORT_TIPS: 				"(XX eller XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX eller tom ,1-65535)",

			NOTICE:						"I konflikt med remote management port. Är du säker på att du vill fortsätta?",

			ENABLE_THIS_ENTRY: 			"Aktivera",
			OPERATION: 					"Funktion",
			CHOOSE: 					"Välj",
			NAT_ENABLE_NOTICE: 			"Obs! Dina konfigurationer påverkas inte förrän NAT-funktionen är aktiverad."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Portutlösare",
			APPLICATION: 				"Ansökan",
			TRIGGER_PORT: 				"Aktiverings porten",
			TRIGGER_PROTOCOL: 			"Utlösande protokoll",

			EXTERNAL_PORTS: 			"Extern port",
			EXTERNAL_PROTOCOL: 			"Externa protokoll",

			BTN_VIEW: 					"Visa befintliga applikationer",

			EXSITTING_APPLICATION: 		"Befintliga applikationer",
			APPLICATION_NAME: 			"Programnamn",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX eller XX-XX,1-65535, som mest 5 par)",
			
			ENABLE_THIS_ENTRY: 			"Aktivera",
			OPERATION: 					"Funktion",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Obs! Dina konfigurationer påverkas inte förrän NAT-funktionen är aktiverad."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Aktivera DMZ",
			HARDWARESTATUS: 			"IP-adress för DMZ-värd",
			NAT_ENABLE_NOTICE: 			"Obs! Dina konfigurationer påverkas inte förrän NAT-funktionen är aktiverad."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"UPnP-tjänst",
			CLIENT_NUMBER: 				"Kundnummer",
			SERVICE: 					"Servicebeskrivning",
			EXTERNAL_PORT: 				"Extern port",
			PROTOCAL: 					"Protokoll",
			IP_ADDR: 					"Intern IP-adress",
			INTERNAL_PORT: 				"Intern port",
			NAT_ENABLE_NOTICE: 			"Obs! Dina konfigurationer påverkas inte förrän NAT-funktionen är aktiverad."
		},

		G3_G4:{
			TITLE: 						"3G/ 4G",
			USB_MODEM: 					"3G/4G USB-modem",
			LOCATION: 					"Placering",
			MOBILE_ISP: 				"Mobil INTERNET-LEVERANTÖR",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Anslutningsläge",
			CONNECT_ON_DEMAND: 			"Anslut på begäran",
			CONNECT_AUTOMATICALLY: 		"Anslut automatiskt",
			CONNECT_MANUALLY: 			"Anslut manuellt",
			MAX_IDLE_TIME: 				"Maximal vilotid",
			CONNECTION_TIP: 			"Den aktuella Internet är WAN-föredraget.",
			IDLE_TIME_TIP: 				"Anslutningsläge och Max Idle Time kan inte ställas in manuellt.",
			MINUTES: 					"minuter. (0 betyder att anslutningen är på permanent.)",

			AUTHENTICATION_TYPE: 		"Autentiseringstyp",
			AUTO: 						"Auto",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"Standardvärdet är Automatisk, ändras inte såvida det inte är nödvändigt.",

			CONNECT: 					"Anslut",
			DISCONNECT: 				"Koppla loss",

			SET_TIP: 					"Ställ in Slå nummer, APN, användarnamn och lösenord manuellt.",
			DIAL_NUMBER: 				"Slå nummer",
			APN: 						"APN",
			USERNAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			OPTIONAL: 					"(Tillval)",
			MTU_SIZE: 					"MTU-storlek (i byte)",
			MTU_SIZE_TIP: 				"Standardvärdet är 1480, ändras inte om inte nödvändigt",

			USE_FOLLOW_DNS_SERVER: 		"Använd följande DNS-servrar",
			PRIMARY_DNS: 				"Primär DNS",
			SECOND_DNS: 				"Sekundär DNS",

			UNPLUGGED: 					"Inget USB-modem anslutet",
			IDENTIFYING: 				"Identifiera ...",
			IDENTIFY_SUCCESS: 			"Identifierat"
		},

		DISK_SETTING: {
			DISK_SET: 					"Enhetsinställningar",
			SCAN: 						"Skanna",
			SELFLY_REMOVE: 				"Ta bort säkert",
			SCAN_RESULT: 				"Hittade %n disks",
			NOT_FOUND: 					"Hittades inte",
			SELFLY_REMOVE: 				"Ta bort säkert",
			
			VOLUMN: 					"Volym",
			CAPACITY: 					"Kapacitet",
			FREESPACE: 					"Ledigt utrymme",
			USBSPACE: 					"Använt utrymme",
			
			STATUS: 					"Status",
			INACT: 						"Inaktivera",
			ACTIVE: 					"Aktiv",
			
			USAGE: 						"Användning",
			CAPACITY: 					"Kapacitet",
			OPERATION: 					"Funktion",	
			
			ACC: 						"Kontohantering", 	 	
			USERNAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			USE_LOGIN: 					"Använd Logga in användare",
			SCAN: 						"Skanna",
			ENJECT_ALL: 				"Mata ut alla",
			ENJECT: 					"Mata ut",
			ADD_USER: 					"Lägg till användare",
			AUTH: 						"Myndigheten"
		},

		FOLDER: {
			TITLE: 						"Dela inställningar",
			ACCOUNT_TITLE: 				"Dela konto",
			ACCOUNT:					"Konto",
			AC_NOTE: 					"Skapa ett konto för att dela innehåll. Du kan använda det inloggade  kontot eller skapa en nytt.",
			
			AC_LOGIN: 					"Använd Standard konto",
			AC_FOLLOW: 					"Använd nytt konto",

			USERNAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",
			CONFIRM: 					"Bekräfta lösenord",

			SHARING_SETTING: 			"Dela inställningar",
			SERVER_NAME: 				"Nätverk/Media Server namn",

			METHOD: 					"Gå till metoden",
			LINK: 						"Länk",
			PORT: 						"Port",

			NETWORK_NEIGHBORHOOD: 		"Nätverket",
			FTP: 						"FTP",
			FTPEX: 						"FTP (via Internet)",

			SHARE_FOLDER: 				"Mappdelning",
			SHAREING_ALL: 				"Dela alla",
			NOTE:  						"Växla mellan på för att dela filer och mappar eller håll den avstängd för att bara dela de preciserade mapparna.", 
			ENABLE_AUTHENTICATION: 		"Aktivera autentisering",
			SHAREING_FOLDER: 			"Dela mappar",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Sökväg",
			VOLUMN_NAME: 				"Volymnamn",

			SHARE_NAME: 				"Mappnamn",
			FOLDER_PATH: 				"Sökväg",
			MEDIA_SHARING: 				"Mediedelning",
			STATUS: 					"Status",

			GUEST_ACCESS: 				"Ge gäst tillgång till nätverket",
			ENABLE_AUTHENTICATION: 		"Aktivera autentisering",
			ENABLE_WRITE_ACCESS: 		"Aktivera skrivåtkomst",
			ENABLE_MEDIA_SHARE: 		"Aktivera mediedelning",
			
			BROWSE: 					"Bläddra",
			BROWSE_TITLE: 				"Välj en mapp",

			NO_VOLUMN:					"Ingen volym",
			
			NOTICE: 					"Är du säker på att du vill lämna för den dynamiska DNS-sidan? Tryck på Spara för att spara och avsluta. Tryck på Avsluta för att lämna utan att spara. Tryck på Avbryt om du vill stanna.",
			NO_CHANGE_NOTICE: 			"Är du säker på att du vill lämna för den dynamiska DNS-sidan?",

			SAVE_FAILED_NOTICE: 		"Det gick inte att spara",
			CONTINUE: 					"Lämna",
			CONTINUE_SAVE: 				"spara",
			CANCLE: 					"avbryt",

			ENABLE: 					"Aktivera"

		},

		PRINT:{
			TITLE: 						"Skrivarservern",
			NAME: 						"Skrivarnamn",
			ENABLE_PRINT_SERVER: 		"Skrivarservern",
			NONE: 						"Ingen",
			
			NOTE_TITLE: 				"Obs:",
			STEP1: 						"Steg 1:",
			STEP2: 						"Steg 2:",
			STEP3: 						"Steg 3:",

			NOTE1: 						"Installera skrivardrivrutinen på datorn",
			NOTE2: 						"Anslut USB-skrivare till USB-porten på routern via en USB-kabel.",
			NOTE3: 						"Installera TP-Link USB Printer Utility Controller. Hämta den från vår officiella webbplats: <a class=\"link\" target=\"blank\" href=\"%SUPPORT%\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Föräldrakontroll",
			STATUS: 					"Status",
			UNKNOWN: 					"Okänd",

			DEVICE_CTR: 				"Enheter under föräldrakontroll",
			DEVICE: 					"Enhetens namn",
			MAC_ADDRESS: 				"MAC-adress",
			TIME: 						"Internet-åtkomst tid",
			DESCRIPTION: 				"Beskrivning",
			
			ENABLE_THIS_ENTRY: 			"Aktivera",
			OPTIONAL: 					"(Tillval)",
			BTN_VIEW: 					"Visa befintliga enheter",
			
			DEVICE_LIST: 				"Enhetslista",
			SYSTEM_TIME: 				"Systemtid",
			
			RESTR: 						"Innehåll begränsning",
			MODE: 						"Begränsning",
			BLACKMODE: 					"Svart lista",
			WHITEMODE: 					"Vit lista",
			ACCESS_DEVICES_LIST: 		"Gå till listan över enheter",
			
			CHOOSE: 					"Välj",
			ADD_A_NEW_KEYWORD: 			"Lägg till ett nytt sökord",
			ADD_A_NEW_DOMAIN_NAME: 		"Lägga till ett nytt domän namn"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Internet",
			ROUTER: 					"Routern",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Andra",

			DEVICE: 					"Enhet",
			RATE: 						"Kurs",
			APPLICATION: 				"Ansökan",

			NAME: 						"Namn",
			MAC_ADDRESS: 				"MAC-adress",
			IP_ADDRESS: 				"IP-adress",


			DEVICES: 					"Enheter"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Bandbredd",
			TEST_BANDWIDTH: 			"> Testa bandbredd ",
			STREAMBOOST: 				"Streamboost",
			ENABLE_STREAMBOOST: 		"Aktivera streamboost",
			UP_LIMITATION: 				"Övre begränsning (Mbit/s)",
			DOWN_LIMITATION: 			"Nedre begränsning (Mbit/s)",
			RUN_BANDWIDTH_TEST: 		"Kör bandbreddstest ",
			TESTING: 					"Testar",
			TEST_FAILED: 				"Testet misslyckades",
			TEST_SUCCEED: 				"Testet lyckades",
			ENABLE_AUTOMATIC_TEST: 		"Aktivera automatisk test",
			KEEP_UP_TO_DATE: 			"Håll StreamBoost uppdaterad",
			ENABLE_AUTOMATIC_UPDATE: 	"Aktivera automatiska uppdateringar"

		},

		PRIORITY:{
			PRIORITY: 					"Prioritet",
			PRIORITY_TIPS: 				"Med prioritet kan du ändra betydelsen av en enhet över en annan. Detta är användbart när enheten konkurrerar om begränsad bandbredd med tillämpning av samma klassificering.",
			ALL_DEVICE: 				"Alla enheter",
			ACTIVE_DEVICE: 				"Aktiv enhet",
			SAVE: 						"spara",
			ID: 						"ID",
			DEVICE: 					"Enhet",
			TYPE: 						"Typ",
			MAC_ADDRESS: 				"MAC-adress",
			STICK: 						"Stick"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Statistik",
			UP_TIME: 					"Tid",
			DOWNLOADS: 					"Nedladdningar",
			LAST_DAY: 					"Sista dagen",
			LAST_WEEK: 					"Förra veckan",
			LAST_MONTH: 				"Förra månaden",
			ALL_LAN_HOSTS: 				"Alla LAN-värdar",
			OTHER: 						"Andra"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Brandvägg",
			ENABLE_SPI: 				"SPI-brandvägg",

			DOS_PROTECTION: 			"DoS-skydd",
			ENABLE_DOS: 				"DoS-skydd",
			
			OFF: 						"Avstängd",
			LOW: 						"låg",
			MIDDLE: 					"mellan",
			HIGH: 						"hög",

			ICMP: 						"Filtrering av ICMP-FLOOD attack ",
			UDP: 						"Filtrering av UDP-FLOOD attack ",
			TCP: 						"Filtrering av TCP-SYN-FLOOD attack ",
			ENABLE_DOS_TIP:             "DoS-skydd och trafikstatistik måste vara aktiverade samtidigt.",

			IGNORE: 					"Ignorera Pingpaket från WAN-porten",
			FORBID: 					"Förbjud pingpaket alltifrån LAN-port",

			BLOCK_DOS: 					"Blockerade DoS värd lista",
			HOST_NUMBER: 				"Värd nummer",
			IP_ADDRESS: 				"IP-adress",
			MAC_ADDRESS: 				"MAC-adress"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Åtkomstkontroll",
			ENABLE_ACCESS: 				"Åtkomstkontroll",

			ACCESS_MODE: 				"Åtkomstläge",
			DEFAULT_ACCESS_MODE: 		"Standard åtkomstläge",
			BLACK_LIST: 				"Svart lista",
			WHITE_LIST: 				"Vit lista",
			
			WIRED:						"Fast",
			WIRELESS:					"Trådlöst",

			DEVICE_ONLINE: 				"Enheter online",
			NAME: 						"Enhetens namn",
			IP_ADDRESS: 				"IP-adress",
			MAC_ADDRESS: 				"MAC-adress",
			CONN_TYPE: 					"Anslutningstyp",

			BLOCK: 						"Blockera",

			DEVICE_IN_WHITE: 			"Enheter i Whitelist",
			DEVICE_IN_BLACK: 			"Enheter i Blacklist"
		},

		IP_MAC:{
			TITLE: 						"Inställningar",
			ENABLE_ARP: 				"ARP-bindning",

			ARP_LIST: 					"ARP-lista",
			ARP_NUM: 					"ARP-nummer",

			MAC_ADDRESS: 				"MAC-adress",
			IP_ADDRESS: 				"IP-adress",
			BOUND: 						"Bundna",
			UNBOUND: 					"Obunden",

			BINDING_LIST: 				"Bindande lista",
			DESCRIPTION: 				"Beskrivning",
			OPTIONAL: 					"(Tillval)",
			ENABLE_THIS_ENTRY: 			"Aktivera"
		},

		TIMESET: {
			TITLE: 						"Tidsinställningar",
			ZONE: 						"Tidszon",
			DATE: 						"Datum",
			DATEFORMAT: 				"MM/DD/ÅÅÅÅ",
			TIME: 						"Tid",
			TIMEFORMAT: 				"(TT/MM/SS)",
			NTP1: 						"NTP-server I",
			NTP2: 						"NTP-server II",
			OPTIONAL: 					"(Tillval)",

			CURRENT_TIME:  				"Aktuell tid",
			SET_TIME: 					"Ställ in tiden",
			AUTOMATIC: 					"Få automatiskt via Internet",
			MANUAL: 					"Manuellt",
			AUTOMATIC_BTN: 				"Få",


			GETGMT: 					"Få GMT",

			
			GETGMT_SUCCESS: 			"Få tid från NTP-server Success",
			GETGMT_TIMEOUT: 			"Få tid från NTP-server Time Out",
			GETGMT_WAIT: 				"Väntar",
			
			M: 							"M",
			W: 							"B",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Sommartid",
			ENABLE_DAYLIGHT: 			"Aktivera sommartid",
			START: 						"Start",
			END: 						"Slut",

			RUNNING_STATUS: 			"Igång",
			DOWN: 						"Sommartid är nere",
			UP: 						"Sommartid är upp"
		},

		DIAG:{
			TITLE: 						"Felsökning",
			DIAGNOSTIC_TOOL: 			"Felsökningsverktyget",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"IP-adress eller domännamn",
			COUNT: 						"Pingräknare",
			
			BASIC: 						"Grundläggande",
			ADVANCED: 					"Avancerad",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Ping paketstorlek",
			PKTUNIT: 					"(4-1472 Byte)",

			TIMEOUT: 					"Tidsgräns för ping",
			TIMOUTUNIT: 				"(100-2000 Millisekunder)",

			TTL: 						"Traceroute Max TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Start",
			STOP: 						"Stopp"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Din firmware är uppdaterad",
			TITLE: 						"Uppgradering av fast programvara",
			INFO: 						"Information om enheten",
			REMOTE_TITLE: 				"Online uppgradering",
			LOCAL_TITLE: 				"Lokal uppgradering",

			NEWFILE: 					"Ny fil med fast programvara",
			FIRMWAREVERSION: 			"Version av fast programvara",
			HARDWAREVERSION: 			"Maskinvaruversion",
			LATESTVERSION: 				"Senaste version",
			CONFIRM_CONTENT:			"Vill du uppgradera firmware?",
			WARNING:					"Firmware uppgradering ... <br/> För att undvika skador, håll routern påslagen och använd inte routern under uppgradering av firmware.",
			REBOOTING: 					"Startar om ... <br/> För att undvika skador, håll routern påslagen och använd inte  routern under uppgradering av firmware processen.",
			DO_NOT_OPERATE: 			"Firmware uppgradering ... <br/> För att undvika skador, håll routern påslagen och använd inte routern under uppgradering av firmware.",
			FIRMWARE_UPDATING_NOTE: 	"1.Uppdatering av firmware  ... <br/> För att undvika skador, håll routern påslagen och använd inte routern under uppgradering av firmware.",
			REBOOTING_NOTE: 			"2.Rebooting ... <br/> För att undvika skador, håll routern påslagen ochanvänd  inte routern under uppgradering av firmware.",
			SCREEN_UPDATING_NOTE: 		"3.Skärmuppdatering ... <br/> För att undvika skador, håll routern påslagen och använd inte routern under uppgradering av firmware.",
			UPGRADE_FAILED: 			"Uppgraderingen misslyckades.",
			UPGRADE: 					"Uppgradering",
			CHECK: 						"Kontrollera",
			DOWNLOADING: 				"Nedladdning ... <br/> För att undvika skador, håll routern påslagen och använd inte routern under uppgradering av firmware.",
			UPGRADE_INOF: 				"För att undvika skador, håll routern påslagen.",
			NOTE: 						"Obs!",
			NO_UPGRADE: 				"Detta är den senaste versionen",

			UPGRADING: 					"Uppgradering ... <br/> För att undvika skador, håll routern påslagen och använd inte routern under uppgradering av firmware.",
			RETRY: 						"Försök igen",
			CANCEL: 					"avbryt",
			ILEGAL_DEVICE:              "Kunde inte identifiera enheten. Vänligen kontakta TP-Link teknisk support.",
			UPGRADE_FAIL: 				"Det går inte att uppgradera. Försök igen senare.",
            CONFIG_RESET_NOTE:          "Dina nuvarande inställningar kommer att gå förlorade efter uppgradering till den här versionen.",
			CHECK_UPGRADE: 				"Kontrollera om uppgraderingar finns"
		},

		BACKUP:{
			BACKUP: 					"Säkerhetskopiering",
			BACKUPTIP: 					"Spara en kopia av dina aktuella inställningar.",

			RESTORE: 					"Återställa",
			RESTORETIP: 				"Återställ sparade inställningar från en fil.",
			
			RESTORE_WARN:				"Återställ routern ... <br/>Använd inte under processen.",
			RESTORE_CONFIRM_CONTENT: 	"Är du säker på att du vill återställa routern från säkerhetskopian?",
			
			FILE: 						"Filen",

			FACTORY: 					"Fabriksinställningarna återställer",
			FACTORYTIP: 				"Återställ alla inställningar till sina standardvärden.",
			RESETTIP:					"Återställer alla inställningar till standardvärden, utom ditt inloggningsnamn och cloud kontoinformation.",
			FACTORY_CONFIRM_CONTENT:	"Är du säker på att du vill återställa routern till fabriksinställningarna?",
			FACTORY_WARN:				"Återställ routern ... <br/>Använd inte under processen.",
			
			BACKUPBTN: 					"Säkerhetskopiering",
			RESTOREBTN: 				"Återställa",
			RESETBTN:					"Återställa",
			FACTORYBTN: 				"Fabriksåterställning"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Kontohantering",
			
			OLDUSER: 					"Gamla användarnamn",
			OLDPWD: 					"Gammalt lösenord",

			NEWUSER: 					"Nya användarnamn",
			NEWPWD: 					"Nytt lösenord",
			CONFIRM: 					"Bekräfta nytt lösenord",

			RECOVERYINFO: 				"Lösenord återhämtning",
			ENABLE_PASSWORD_RECOVERY: 	"Aktivera lösenord återhämtning",
			FROM: 						"Från",
			TO: 						"Till",
			SMTP_SERVER: 				"SMTP-server",
			
			ENABLE_AUTHENTICATION: 		"Aktivera autentisering",
			USERNAME: 					"Användarnamn",
			PASSWORD: 					"Lösenord",

			TEST_MAIL: 					"Testmeddelande",

			LOCAL:						"Lokal hantering",
			LOCAL_MAC_AUTH: 			"Lokal MAC-autentisering",
			ACCESS: 					"Tillträde för alla LAN-anslutna enheter",
			ACCESS_TIPS: 				"Växla på för att möjliggör förvaltning för alla enheter på LAN eller håll den avstängd för att möjliggöra förvaltning för en viss enhet.",
			
			MAC_ADDRESS: 				"MAC-adress",
			VIEW_BTN: 					"Visa befintliga enheter",
			DESCRIPTION: 				"Beskrivning",

			EXIST_DEVICE:               "Befintliga enheter",

			OPTIONAL: 					"(Tillval)",
			ENABLE_THIS_ENTRY: 			"Aktivera",

			DEVICE_NAME:				"Enhetens namn",
			IP_ADDRESS:					"IP-adress",
			

			REMOTE: 					"Fjärrhantering",
			DISABLE_REMOTE_MANAGEMENR: 	"Avaktivera fjärrhantering",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Aktivera funktionen för alla enheter",
			ENABLE_REMOTE_MANAGEMENR: 	"Aktivera funktionen för angivna enheter",
			WEB: 						"Webbhanteringsport",

			NOTICE:						"I konflikt med den virtuella server porten! Är du säker på att du vill fortsätta?",

			REMOTEIP: 					"Remote Management IP-adress",
			REMOTEIPNOTE: 				"(Ange 255.255.255.255 för alla)"
			
		},

		SYSLOG:{
			TITLE: 						"Systemlogg",
			LOG_FILTER: 				"Logg filtret:",
			
			TYPE_EQ: 					"Typ=",
			
			ALL: 						"ALL",

			FIREWALL: 					"Brandvägg", 
			NAT: 						"NAT",
			DDNS: 						"Dynamisk DNS",
			UPNP:						"UPnP",
			IMB:            			"IP&MAC bindning",
			IPTV:						"IPTV",
			DHCPS:						"DHCP-server",
			IGMP_PROXY:					"IGMP-Proxy",
			DOMAIN_LOGIN:				"Domän inloggning",
			BASIC_SECURITY: 			"Grundläggande säkerhet",
			PARENTAL_CONTROL: 			"Föräldrakontroll",
			ACCESS_CONTROL: 			"Åtkomstkontroll",
			DOS_PROTECTION: 			"DoS-skydd",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Trafikstatistik",
			TIME_SETTINGS: 				"Tidsinställningar",
			ACCOUNT_MANAGEMENT: 		"Kontohantering",
			LOCAL_MANAGEMENT: 			"Lokal hantering",
			REMOTE_MANAGEMENT: 			"Fjärrhantering",
			LOCALE: 					"Lokal",
			FACTORY_RESET: 				"Fabriksåterställning",
			LED_CONTROLLER: 			"Indikatorlampa",
			NETWORK: 					"Nätverk",
			USBSHARE: 					"USB delning",
			AND: 						"och",
			LEVEL: 						"Nivå",
			EMERGENCY:					"NÖDSTOPP",
			ALERT:						"VARNING",
			CRITICAL:					"KRITISKA",
			ERROR: 						"FEL",
			WARNING: 					"VARNING",
			NOTICE: 					"MÄRK",
			INFO: 						"INFO",
			DEBUG: 						"TESTAR FÖR FEL",

			INDEX: 						"Index",
			TYPE: 						"Typ",
			TIME: 						"Tid",
			LEVEL_COL:					"Nivå",

			CONTENT: 					"Logg innehåll",
			
			MAIL_LOG: 					"E-post logg",
			SAVE_LOG: 					"Spara logg",

			SEND_OK: 					"Skicka OK",
			SEND_FAILED: 				"Sändningen misslyckades",

			MAIL_SETTING: 				"E-postinställningar",

 			FROM: 						"Från",
 			TO: 						"Till",
 			SMTP_SERVER: 				"SMTP-server",
 			ENABLE_AUTHENTICATION: 		"Aktivera autentisering",

 			USERNAME: 					"Användarnamn",
 			PASSWORD: 					"Lösenord",
 			CONFIRM_PASSWORD: 			"Bekräfta lösenord",

 			AUTO_MAIL: 					"Aktivera Auto Mail",
 			LOG_AT: 					"Logga in på",
 			HH_MM: 						"(HH:MM) dagligen",

 			LOG_EVERY: 					"Logga in varje",
 			HOURS: 						"Timmar"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Inställningar",
			STATUS: 					"Aktivera QoS",
			UPBANDWIDTH: 				"Bandbredd uppladdning",
			DOWNBANDWIDTH: 				"Bandbredd nedladdning",
			SPEED_M: 					"Mbit/s",
			SPEED_K: 					"Kbit/s",
			TEST: 						"Hastighetstest",
			RULE_LIST: 					"QoS-regel lista",
			RULE: 						"QoS-regel",
			ID: 						"ID",
			NAME: 						"Namn",
			TYPE: 						"Typ",
			DETAIL: 					"Detalj",
			PRIORITY: 					"Prioritet",

			APPLICATION: 				"Ansökan",
			APPLICATION_LIST: 			"Programlistan",
			CUSTOM_APP: 				"Anpassat program",
			MAC_ADDR: 					"MAC-adress",
			MAC_ADDR_P: 				"Mac:",
			IP_ADDR: 					"IP-adress",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Fysisk port",

			LOW: 						"låg",
			MIDDLE: 					"mellan",
			HIGH: 						"hög",

			PROTO: 						"Protokoll",
			PORT: 						"Port",
			PROTO_P: 					"Protokoll:",
			PORT_P: 					"Port:",
			PORT_TIPS: 					"(XX eller XX-XX,1-65535, som mest 5 par)",

			ALL: 						"ALL",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Anpassad",

			WIFI_HOME: 					"WIFI-vÄRD",
			WIFI_GUEST: 				"WIFI-gäst",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Uppgradering av databas",

			NEWFILE: 					"Ny databasfil",
			FIRMWAREVERSION: 			"Databasversion",
			CONFIRM_CONTENT:			"Är du säker på att du vill uppdatera databasen?",
			WARNING:					"Databasen uppdateras ... <br/>Använd inte under processen.",
			
			UPGRADE: 					"Uppgradering",

			SERVICE_RESTART: 			"QoS-tjänsten startas om",
			
			TYPE: 						"Typ",
			BY_DEVICE: 					"Per enhet",
			BY_APP: 					"Per program",
			BY_PHY: 					"Genom fysisk port",

			HIGH_PRIORITY_LBL: 			"Hög prioritet:",
			MIDDLE_PRIORITY_LBL: 		"Mitt prioritet:",
			LOW_PRIORITY_LBL: 			"Låg prioritet:",

			HIGH_PRIORITY: 				"Hög prioritet",
			MIDDLE_PRIORITY: 			"Medel prioritet",
			LOW_PRIORITY: 				"Låg prioritet"

		},

		APPLICATION:{
			APP_LIST: 					"Programlistan",
			GAME_LIST: 					"Spellista",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Trafikstatistik",
			ENABLE_STATISTICS: 			"Trafikstatistik",

			TITLE: 						"Trafikstatistik lista",
			IP_MAC: 					"IP-adress eller MAC-adress",
			TPKT: 						"Totala paket",
			TBYTE: 						"Totalt antal byte",
			CPKT: 						"Aktuella paket",
			CBYTE: 						"Nuvarande byte",
			CICMP: 						"Nuvarande ICMP-Tx",
			CUDP: 						"Nuvarande UDP-Tx",
			CSYN: 						"Nuvarande SYN Tx",
			
			DELETE_CONFIRM: 			"Är du säker på att du vill ta bort trafikstatistiken?",
			DELETE_ALL_CONFIRM: 		"Är du säker på att du vill ta bort all trafik statistik?",

			RESET_ALL: 					"Nollställ alla"
		},

		SYSPARA:{
			W24G: 						"Trådlös 2,4 GHz",
			W5G: 						"Trådlös 5GHz",
			SWITCH_NOTICE:  			"Den trådlösa funktionen är avstängd. Om du vill använda den här funktionen. Slå på Wi-Fi -knappen.",

			ENABLE_TIPS: 				"Den trådlösa funktionen är deaktiverad.",

			BEACON: 					"Signalintervall",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS-gränsvärde",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Fragmenteringströskel",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM-intervall",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Uppdateringsperiod för gruppnyckel",
			GROUPUNIT: 					"Sekunder",
			
			
			WMM_FEATURE: 				"WMM-funktionen",
			WMM: 						"Aktivera WMM",

			GI_FEATURE: 				"Kort GI funktion",
			GI: 						"Aktivera kort GI",

			AP_FEATURE: 				"AP Isolation funktion",
			AP: 						"Aktivera AP-isolering",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Aktivera TxBF",

			WDS_FEATURE: 				"WDS överbrygga",
			WDS: 						"Aktivera WDS överbryggning",
			
			SSID_BRIDEGE: 				"SSID (förbikopplad)",
			SURVEY: 					"Undersökning",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC-adress",
			SSID: 						"SSID",
			SIGNAL: 					"Signal",
			CHANNEL: 					"Kanal",
			SECURITY: 					"Säkerhet",
			CHOSEN: 					"Valt",
			AP_NUMBER:					"AP nummer",

			TOTAL: 						"Totalt antal poster",

			MAC: 						"MAC-adressen (överbryggas)",
			MACUNIT: 					"Exempel: 00-1D-0F-11-22-33",

			SECURITY: 					"Säkerhet",
			NO: 						"Nej",
			NONE: 						"Ingen säkerhet",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Lösenord",
			
			AUTH_TYPE: 					"Auth. Typ",
			AUTO: 						"Auto",
			OPEN: 						"Öppet system",
			SHARED: 					"Delad nyckel",

			WEP_INDEX: 					"WEP-index",
			KEY1: 						"Nyckel 1",
			KEY2: 						"Nyckel 2",
			KEY3: 						"Nyckel 3",
			KEY4: 						"Nyckel 4",

			WEP_KEY_FORMAT: 			"WEP nyckelformat",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimala",			

			WPS: 						"WPS Bridging",
			ENABLE_WPS: 				"Aktivera WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Aktivera NAT",
			
			NAT_BOOST: 					"NAT-Boost",
			ENABLE_NAT_BOOST: 			"Aktivera NAT Boost",
			
			MEDIA_SERVER: 				"Mediaserver",
			SCAN_INTERVAL: 				"Autoscan intervall (timmar)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Inställningar av DoS-skyddsnivå",

			ICMP: 						"Nivå av ICMP-FLOOD paket ",
			UDP: 						"Nivå av UDP-FLOOD paket ",
			TCP: 						"Nivå av TCP-FLOOD paket ",

			WDS_MODE: 					"WDS-läge",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"låg",
			MIDDLE: 					"mellan",
			HIGH: 						"hög",

			TO: 						"Till",
			NOTICE_NAT_REBOOT: 			"Startar om ... <br/> Använd inte under omstarten. ",

			NOTICE_NAT_BOOST: 			"Ändring av NAT-Boost resulterar i en omstart av enheten, är du säker på att du vill fortsätta?",
			NOTICE:						"Din routernkanal är inte samma som den förbikopplade AP-kanalen. Vill du ändra?",

			UNIT: 						"(5-7200)paket/sek.",
			LED: 						"LED",
			NIGHT_MODE: 				"Nattläge",
			PERIOD_NIGHT_TIME: 			"Period av nattläge",
			ENABLE: 					"Aktivera nattläge",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "LED-lampan är släckt. Om du vill använda den här funktionen klickar du i övre högra hörnet på sidan.",
			NOTE2:                      "Nattlägesperioden börjar gälla baserat på routerns systemtid. Se till att du redan har ställt in tiden på routern."
		},
		VPN:{
			OPEN_VPN: 					"ÖppenVPN",
			NO_CERT_NOTE: 				"Inget certifikat för närvarande, <b>Generera</b> ett certifikat innan du aktiverar VPN-servern.",
			NO_CERT_NOTE2: 				"Inget certifikat för närvarande, <b>Generera</b> ett certifikat innan du exporterar konfigurationen.",
			ENABLE_VPN_SERVER: 			"Aktivera VPN-servern",
			SERVICE_TYPE: 				"Typ av tjänst",
			SERVICE_PORT: 				"Tjänstport",
			VPN_SUBNET: 				"VPN undernät/nätmask",
			CLIENTS_ACCESS: 			"Klientåtkomst",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Endast hemnätverk",
			INTERNET_HOME: 				"Internet- och hemnätverk",
			CERT_STR: 					"Inget certifikat för närvarande, klicka på OK för att generera ett certifikat och spara konfigurationen.",
			CERT_STR2: 					"Inget certifikat för närvarande, klicka på OK för att generera ett certifikat och exportera konfigurationen.",
			CONF_FILE: 					"Konfigurationsfil", 
			EXPORT_CONF_FILE: 			"Exportera konfigurationen",
			EXPORT: 					"Exportera",

			INSTALL_GUIDE: 				"VPN-klientinstallationsguide",
			INSTALL_STEP: 				"Gör så här för att aktivera och ansluta klientenheterna till OpenVPN-servern:",
			INSTALL_NOTICE:				"Konfigurera Dynamic DNS Service (rekommenderat) eller tilldela en statisk IP-adress för Wan-porten innan du konfigurerar OpenVPN-servern. Kontrollera även att systemtiden stämmer.",
			INSTALL_NOTE1: 				"Välj Aktivera VPN-server.",
			INSTALL_NOTE2: 				"Innan du konfigurerar OpenVPN-server, konfigurera dynamisk DNS-tjänst (rekommenderas) eller tilldela en statisk IP-adress för WAN-porten. Och se till att din externa port NAT inställningar inte är serviceporten och DMZ är inaktiverad, och även att systemtiden är korrekt.",
			INSTALL_NOTE3: 				"Klicka på Exportera för att spara konfigurationsfilen.",
			INSTALL_NOTE4: 				"Ladda ner och installera klientverktyget OpenVPN på  klientenheterna från <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> De plattformar som stöds officiellt är Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Starta klientverktyget OpenVPN och lägg till en ny VPN-anslutning med användning av den sparade konfigurationsfilen för att ansluta klientenheten till VPN-servern.",
			NOTE: 						"Besök <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a> för att lära dig mer om OpenVPN-klienter.",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Klientens IP-adress",
			ACCOUNT_USERNAME: 			"Användarnamn",
			ACCOUNT_PASSWORD: 			"Lösenord",
			CLIENT_IP_NOTE: 			"(upp till 10 klienter)",
			SAME_SUBNET_NOTE: 			"Klientens IP-adress och LAN IP-adress får inte förekomma i samma undernät.",
			CONFLICT_WITH_DHCP: 		"Klientens IP-adress är i konflikt med DHCP IP-adresspoolen.",
			CONFLICT_WITH_RESERVED: 	"Klientens IP-adress är i konflikt med den reserverade IP-adressen.",
			CONFLICT_WITH_OPENVPN: 		"Klientens IP-adress och OpenVPN IP-adress får inte förekomma i samma undernät.",
			SAME_SUBNET_NOTE2: 			"VPN undernät/nätmask och LAN IP-adress får inte förekomma i samma undernät.",
			CONFLICT_WITH_DHCP2: 		"VPN undernät/nätmask är i konflikt med DHCP IP-adresspoolen.",
			CONFLICT_WITH_RESERVED2: 	"VPN undernät/nätmask är i konflikt med den reserverade IP-adressen.",
			CONFLICT_WITH_PPTPVPN: 		"VPN undernät/nätmask och PPTP VPN IP-adressen får inte förekomma i samma undernät.",
			VPN_MASK_ERROR: 			"Nätmask kan inte vara större än 255.255.255.248.",
			ACCOUNT_LIST: 				"Kontolista  (upp till 16 användare)",
			ADVANCED_SETTING: 			"Avancerad",
			ALLOW_SAMBA: 				"Tillåt Samba (Nätverksplats)",
			ALLOW_NETBIOS: 				"Tillåt NetBIOS-vidarekoppling",
			ALLOW_UNENCRYPTED_CONN: 	"Tillåt okrypterade anslutningar",
			USERNAME_CONFLICT: 			"Detta användarnamn existerar redan.",
			
			CONNECT_PPTP: 				"Gör så här för att aktivera och ansluta klientenheterna till PPTP VPN-servern:",
			CONNECT_NOTICE:				"Konfigurera Dynamic DNS Service (rekommenderad) eller tilldela en statisk IP-adress för WAN-porten innan du konfigurerar PPTP VPN-servern. Se även till att den externa porten i NAT-inställningarna inte är 1723, samt att DMZ är avaktiverat. Kontrollera också att systemtiden stämmer.",
			CONNECT_NOTE1: 				"Välj Aktivera VPN-server.",
			CONNECT_NOTE2: 				"Konfigurera parametrarna för PPTP VPN-server och klicka på Spara.",
			CONNECT_NOTE3: 				"Skapa en PPTP VPN-anslutning på klientenheterna. De plattformar som stöds officiellt är Windows, Mac OSX, Linux, iOS och Android.",
			CONNECT_NOTE4: 				"Starta PPTP VPN-programmet, lägg till en ny anslutning och ange domännamnet för den registrerade DDS-tjänsten eller den statiska IP-adressen som är tilldelad WAN-porten för att ansluta klientenheten till PPTP VPN-servern.",
			
			GENERATE_CERT: 				"Certifikat",
			GENERATE_NEW_CERT: 			"Generera certifikatet.",
			GENERATE: 					"Generera",
			GENERATE_TIPS: 				"Genererar certifikat...<br/>Det kan ta några minuter, var god vänta.",
			CERT_SUCCESS: 				"Lyckades",
			CERT_FAIL: 					"Åtgärden misslyckades, försök igen.",
			
			VPN_CONNECTIONS: 			"VPN-anslutningar",
			OPEN_VPN_CONNECTIONS: 		"OpenVPN-anslutning",
			PPTP_VPN_CONNECTIONS: 		"PPTP VPN-anslutning",
			USER:				"Användare",
			REMOTE_IP:			"Fjärr-IP",
			ASSIGNED_IP:			"Tilldelad IP"
		}
	};
})(jQuery);

