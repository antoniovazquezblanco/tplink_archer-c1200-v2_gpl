(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			EMAIL: 						"Email",
			FORGET_PASSWORD: 			"¿Olvidó la contraseña?",
			LOGIN: 						"Acceder",
			BEGIN: 						"Empecemos",
			IMPORTANT_UPDATE_INFO: 		"Para evitar el conflicto con el dispositivo principal, la dirección IP de su router ha sido actualizado a la",
			CONTINUE: 					"Continuar",

			IMPORTANT_NOTICE: 			"Aviso importante",
			OR: 						", ¿Está seguro de que quiere continuar visitando?",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Pulse el botón de Reset durante %SECONDS% segundos para restaurar los valores de fábrica del router.",
			FORGET_PASSWORD_INFO_1: 	"Si la función Recordar Contraseña está activada, se le enviará un código de verificación a la dirección indicada para resetear el usuario y contraseña.",
			FORGET_PASSWORD_SEND_FAILED:"Fallo al enviar el código. Por favor, compruebe su conexión a Internet.",

			VERIFICATION_CODE: 			"Código de verificacón",

			RECEIVE_CODE: 				"Enviar código",

			CONFIRM: 					"Confirmar",
			WELCOME: 					"Bienvenido a TP-Link %model%. Por favor acceda.",
			SEC: 						"s",

			USER_CONFLICT: 				"Conflicto al iniciar sesión!",
			FIRST_TIME: 				"Por favor establezca su %PRODUCT% para conectarse primero a Internet. Para empezar, cree una contraseña en el dispositivo para gestionar su %PRODUCT%.",
			FIRST_TIME1: 				"Por favor cree una contraseña de administrador para acceder a su %model%.",
			USER_CONFLICT_INFO: 		"El usuario %USER% con el cliente %HOST% (%IP%/%MAC%) está actualmente conectado al router.",
			USER_CONFLICT_INFO_2: 		"El usuario %USER% (%IP%) está actualmente conectado al router.",
			USER_CONFLICT_INFO_3: "Solo un dispositivo puede acceder al mismo tiempo. ¿Quiere continuar y forzar el cierre de sesión del otro dispositivo?",
			
			LOGIN_FAILED: 				"¡Fallo al iniciar sesión!",
			LOGIN_FAILED_COUNT: 		"El inicio de sesión falló %num1 veces y aún le quedan %num2 más.",
			NO_COOKIE: 					"Para iniciar sesión debe tener las cookies activadas.", 

			FORGET_PASSWORD_NOTE: 		"Si no ha configurado la función Recordar Contraseña, puede pulsar el botón de Reset durante %SECONDS% segundos para restaurar los valores de fábrica del router."
		},
		INIT: {
			PASSWORD: 					"Contraseña",
			CONFIRM_PASSWORD:				"Confirmar Contraseña",
			BEGIN: 						"Empecemos",
			IMPORTANT_UPDATE_INFO: 		"Para evitar el conflicto con el dispositivo de delante, la dirección IP de su router debe haberse actualizado a",
			CONTINUE: 					"Siguiente",

			IMPORTANT_NOTICE: 			"Aviso importante",
			OR: 						", ¿Está seguro de que quiere continuar visitando?",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Confirmar",

			SEC: 						"s",

			USER_CONFLICT: 				"¡Conflicto de Inicio de Sesión!",
			
			USER_CONFLICT_INFO: 		"El usuario %USER% con host %HOST% (%IP%/%MAC%) está accediendo actualmente al Router. No puede acceder al mismo tiempo. Por favor inténtelo más tarde.",
			USER_CONFLICT_INFO_2: 		"El usuario %USER% (%IP%) está accediendo actualmente al Router. No puede acceder al mismo tiempo. Por favor inténtelo más tarde.",
			
			LOGIN_FAILED: 				"¡Error en el Inicio de Sesión!",
			LOGIN_FAILED_COUNT: 		"El inicio de sesión falló %num1 veces y aún le quedan %num2 más.",
			NO_COOKIE: 					"Para iniciar sesión debe tener las cookies activadas.", 

			INIT_NOTE_TITLE: 			"Querido Cliente,",
			INIT_NOTE_CONTENT: 			"Por favor establezca su %PRODUCT% para conectarse primero a Internet. Para empezar, cree una contraseña en el dispositivo para gestionar su %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Versión de Firmware:",
			FEATURE: 						"Modificaciones y errores encontrados:",
			TITLE: 							"Se ha detectado una actualización de firmware disponible.",
			UPGRADE_NOW: 					"Actualizar ahora",
			REMIND: 						"Recordármelo más tarde",
			NOTICE:    						"Hola, hay disponible un nuevo firmware para su router.",
			NEVER: 							"Ignorarar esta versión"
			
		},

		WAN_ERROR: {
			TITLE: 							"¡Error de conexión WAN!",
			STATUS: 						"Estado",
			INFO: 							"Información",
			SETUP: 							"Establecer una conexión a Internet",
			NEVER: 							"No recordármelo de nuevo"
		},

		OFFLINE_ERROR:{
			TITLE: "Ups… No podemos conectarnos al servidor cloud.",
			NOTE1: "1. Asegúrese de que tiene acceso a Internet.",
			NOTE2: "2. El servidor cloud está temporalmente fuera de servicio. Por favor consulte la página más tarde.",
			NOTE3: "3. Si el problema persiste, por favor contacte con <a target=\"_blank\" id=\"support\"> el soporte técnico de TP-Link </a>.",
			ERROR: "Error"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Versión de Firmware",
			HARDWARE_VERSION: 				"Versión de Hardware",
			HELP_SUPPORT: 					"Soporte",
			FAQ: 							"FAQ",
			CONFIRM_REBOOT: 				"¿Está seguro que desea reiniciar el router?",
			CONFIRM_LOGOUT: 				"¿Está seguro de que quiere salir?",
			UPGRADE_ALERT_1: 				"El firmware actual no es compatible con el servicio cloud de TP-Link. Le recomendamos que descargue el último firmware en www.tp-link.es y lo actualice.",
			UPGRADE_ALERT_2: 				"El actual firmware no es compatible con el servidor cloud de TP-Link. Le recomendamos que actualice el firmware haciendo click en el icono Actualizar en la esquina superior derecha.",
			ACCOUNT_UNLOGIN: 				"Cuenta",

			REBOOTING: 						"Reiniciando… <br/>Por favor NO realice ninguna acción durante el proceso.",

			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE:			"Escana el código QR para descargar TP-Link Tether app",
			CHARACTERS_ILLUSTRETE_NOTE0:			"Gestiona tu red desde cualquier dispositivo móvil.",
			CHARACTERS_ILLUSTRETE_NOTE1:			"Control total en la palma de tu mano."
		},

		NAV: {
			QUICK_SETUP: 				"Configuración rápida",
			BASIC: 						"Básico",
			ADVANCED: 					"Avanzado"
		},

		CONTROL: {
			LOGIN: 						"Acceder",
			LOGOUT: 					"Salir",
			UPDATE: 					"Actualizar",
			REBOOT: 					"Reiniciar",
			LED: 						"LED",
			LED_ON: 					"LED encendido",
			LED_OFF: 					"LED apagado",
			LED_DISABLED: 				"El LED de estado no se puede cambiar durante el periodo de funcionamiento del modo noche"
		},

		LANGUAGE: {
			EN_US: 						"Inglés",
			ZH_CN: 						"Chino simplificado"
		},

		REGION: {
			ALBANIA: 					"Albania",
			ALGERIA: 					"Algeria",
			AMERICAN_SAMOA: 			"Samoa Americana",
			ARGENTINA: 					"Argentina",
			ARMENIA: 					"Armenia",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australia",
			AUSTRIA: 					"Austria",
			AZERBAIJAN: 				"Azerbaijan",
			BAHAMAS: 					"Bahamas",
			BAHRAIN: 					"Bahrein",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Bielorrusia",
			BELGIUM: 					"Bélgica",
			BELIZE: 					"Bélice",
			BERUMUDA: 					"Bermudas",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnia y Herzegovina",
			BRAZIL: 					"Brasil",
			BRUNEI_DARUSSALAM: 			"Brunéi Darussalam",
			BULGARIA: 					"Bulgaria",
			CAMBODIA: 					"Camboya",
			CANADA: 					"Canadá",
			CAYMAN_ISLANDS: 			"Islas Caimán",
			CHILE: 						"Chile",
			CHINA: 						"República popular de China",
			COLOMBIA: 					"Colombia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Croacia",
			CYPRUS: 					"Chipre",
			CZECH_REPUBLIC: 			"República Checa",
			DENMARK: 					"Dinamarca",
			DOMINICAN_REPUBLIC: 		"República Dominicana",
			ECUADOR: 					"Ecuador",
			EGYPT: 						"Egipto",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estonia",
			ETHIOPIA: 					"Etiopía",
			FAEROE_ISLANDS: 			"Islas Feroe",
			FINLAND: 					"Finlandia",
			FRANCE: 					"Francia",
			FRENCH_GUIANA: 				"Guinea Francesa",
			FRENCH_POLYNESIA: 			"Polinesia Francesa",
			GEORGIA: 					"Georgia",
			GERMANY: 					"Alemania",
			GREECE: 					"Grecia",
			GREENLAND: 					"Groenlandia",
			GRENADA: 					"Granada",
			GUADELOUPE: 				"Guadalupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haití",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong S.A.R., P.R.C.",
			HUNGARY: 					"Hungría",
			ICELAND: 					"Islandia",
			INDIA: 						"India",
			INDONESIA: 					"Indonesia",
			IRAN: 						"Irán",
			IRAQ: 						"Irak",
			IRELAND: 					"Irlanda",
			ISRAEL: 					"Israel",
			ITALY: 						"Italia",
			JAMAICA: 					"Jamaica",

			JAPAN: 						"Japón",
			JAPAN_1: 					"Japón 1",
			JAPAN_2: 					"Japón 2",
			JAPAN_3: 					"Japón 3",
			JAPAN_4: 					"Japón 4",
			JAPAN_5: 					"Japón 5",
			JAPAN_6: 					"Japón 6",

			JORDAN: 					"Jordania",
			KAZAKHSTAN: 				"Kazajstán",
			KENYA: 						"Kenia",

			NORTH_KOREA: 				"Corea del Norte",
			KOREA_REPUBLIC: 			"República de Corea",
			KOREA_REPUBLIC_3: 			"República de Corea 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Letonia",
			LEBANON: 					"Líbano",
			LIBYA: 						"Libia",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Lituania",
			LUXEMBOURG: 				"Luxemburgo",
			MACAU: 						"Macao SAR",
			MACEDONIA: 					"Antigua República Yugoslava de Macedonia",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malasia",
			MALDIVES: 					"Maldivas",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinica",
			MAURITIUS: 					"Islas Mauricio",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"México",
			MONACO: 					"Principado de Mónaco",
			MONGOLIA: 					"Mongolia",
			MOROCCO: 					"Marruecos",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Países Bajos",
			NETHERLANDS_ANTILLES: 		"Antillas Holandesas",

			NEW_ZEALAND: 				"Nueva Zelanda",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Noruega",
			NORTHERN_MARIANA_ISLANDS: 	"Islas Marianas del Norte",
			OMAN: 						"Omán",
			PAKISTAN: 					"República Islámica de Pakistán ",
			PANAMA: 					"Panamá",
			PAPUA_NEW_GUINEA: 			"Papúa Nueva Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Perú",
			PHILIPPINES: 				"República de Filipinas",
			POLAND: 					"Polonia",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Catar",
			REUNION: 					"Reunión",
			ROMANIA: 					"Rumanía",
			RUSSIA: 					"Singapore-ExStream",
			RWANDA: 					"Ruanda",
			SAMOA: 						"Samoa ",
			SAUDI_ARABIA: 				"Arabia Saudí",
			SINGAPORE: 					"Singapur",
			SLOVAK_REPUBLIC: 			"República de Eslovaquia",
			SLOVENIA: 					"Eslovenia",
			SOUTH_AFRICA: 				"Sudáfrica",
			SPAIN: 						"España",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Surinam",
			SWEDEN: 					"Suecia",
			SWITZERLAND: 				"Suiza",
			SYRIA: 						"Siria",
			TAIWAN: 					"Taiwán",
			TANZANIA: 					"Tanzania",
			THAILAND: 					"Tailandia",
			TRINIDAD_TOBAGO: 			"Trinidad y Tobago ",
			TUNISIA: 					"Túnez",
			TURKEY: 					"Turquía",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ucrania",
			UNITED_ARAB_EMIRATES: 		"Emiratos Árabes Unidos",
			UNITED_KINGDOM: 			"Reino Unido",
			UNITED_STATES: 				"Estados Unidos",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Uzbekistán",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnam",
			VIRGIN_ISLANDS: 			"Islas Virgina",
			YEMEN: 						"Yemen",
			ZIMBABWE: 					"Zimbaue"
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
			M_LUXEMBOURG:                                                 "Luxemburgo",
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
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Islas Midway, Samoa",
			HAWAII: 					"(GMT-10:00) Hawaii",
			ALASKA: 					"(GMT-09:00) Alaska",
			PACIFIC_TIME: 				"(GMT-08:00) Hora del Pacífico",
			MOUNTAIN_TIME: 				"(GMT-07:00) Hora de Montaña (EE.UU. Canadá)",
			CENTRAL_TIME: 				"(GMT-06:00) Hora del Centro (EE.UU Canadá)",
			EASTERN_TIME: 				"(GMT-05:00) Hora del Este (EE.UU. Canadá)",
			CARACAS:					"(GMT-04:30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04:00) Tiempo Atlántico (Canadá)",
			NEWFOUNDLAND: 				"(GMT-03:30) Isla de Terranova",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brasilia, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Atlántico Medio",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azores, Cabo Verde",
			GREENWICH_MEAN_TIME: 		"(GMT) Hora principal de Greenwich, Dublín, Londres",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlín, Stocolmo, Roma, Berna, Bruselas",
			ATHENS_HELSINKI: 			"(GMT+02:00) Atenas, Helsinki, Europa del Este, Israel",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh, Moscú",

			TEHERAN: 					"(GMT+03:30) Teherán",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Mascate, Kazán, Volgogrado",

			KABUL: 						"(GMT+04:30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Ekaterinburgo",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Calcuta, Bombay, New Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandú",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Almatý, Daca",
			RANGOON: 					"(GMT+06:30) Rangún",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Yakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Beijing, Hong Kong, Perth, Singapur",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokyo, Osaka, Sapporo, Seúl, Yakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaida",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Islas Solomín, Nueva Caledonia",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamchatka, Auckland",
			NUKU: 						"(GMT+13:00) Nukualofa"
		},

		APPLIST:{
			APP:						"Aplicación",
			GAME:						"JUEGOS",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"Line",
			Skype:                      "Skypw",
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
			DAY: 						"Día",

			MONDAY: 					"Lunes",
			TUESDAY: 					"Martes",
			WEDNESDAY: 					"Miércoles",
			THURSDAY: 					"Jueves",
			FRIDAY: 					"Viernes",
			SATURDAY: 					"Sábado",
			SUNDAY: 					"Domingo",
			
			MON: 						"Lun.",
			TUES: 						"Mar.",
			WED: 						"Mie.",
			THUR: 						"Jue.",
			FRI: 						"Vie.",
			SAT: 						"Sáb.",
			SUN: 						"Dom.",

			JAN: 						"Ene.",
			FEB: 						"Feb.",
			MAR: 						"Mar.",
			APR: 						"Abr.",
			MAY: 						"May.",
			JUN: 						"Jun.",
			JUL: 						"Jul.",
			AUG: 						"Ago.",
			SEP: 						"Sep.",
			OCT: 						"Oct.",
			NOV: 						"Nov.",
			DEC: 						"Dic."

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
			"1ST": 						"Primero",
			"2ND": 						"2º",
			"3RD": 						"3º",
			"4TH": 						"4º",
			"5TH": 						"Último",
			"1ST_": 					"1º",

			TH: 						"º"
		},

		GRID: {
			CLIENT_NUMBER: 				"Número de clientes",

			ID: 						"ID",
			MODIFY: 					"Modificar",
			STATUS: 					"Estado",
			ENABLE: 					"Activar",

			OPERATION: 					"Operación",
			CHOOSE: 					"Elegir",
			DESCRIPTION: 				"Descripción",
			

			AUTO_REFRESH: 				"Auto actualización",
			REFRESH: 					"Actualizar",
			NUMBER: 					"Número",
			ENABLED: 					"Habilitado",
			DISABLED: 					"Deshabilitado",
			ACTIVE: 					"Activar",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Añadir",
			CHOOSE: 					"Elegir",
			EDIT: 						"Editar",
			DELETE: 					"Eliminar",
			DELETE_ALL: 				"Borrar todo",
			REMOVE: 					"Quitar",
			RESET: 						"Reiniciar",
			RESET_ALL: 					"Resetear todo",
			DETECT: 					"Detectar",
			ENABLE: 					"Activar",
			DISABLE: 					"Desactivar",
			CLEAR: 						"Borrar",

			REFRESH: 					"Actualizar",
			SEARCH: 					"Buscar…",
			BROWSE: 					"Examinar",

			SAVE: 						"Guardar",
			BACK: 						"Volver",

			PREV: 						"Anterior",
			NEXT: 						"Siguiente",
			FINISH: 					"Finalizar",
			
			ON: 						"Encendido",
			OFF: 						"Apagado",
			LOW: 						"Baja",
			MIDDLE: 					"Media",
			HIGH: 						"Alta",
			
			OK: 						"OK",
			CANCEL: 					"Cancelar",

			YES: 						"Sí",
			NO: 						"No",
			
			CONNECTED: 					"Conectado",
			CONNECTING: 				"Conectando",
			DISCONNECTING: 				"Desconectando",
			DISCONNECTED: 				"No Conectado",

			PASSWORD_HINT: 				"Contraseña",
			FILEBUTTONTEXT: 			"Examinar",
			FILEBLANKTEXT: 				"Por favor, seleccione un archivo.",
			NOSELECTEDTEXT: 			"Seleccionar opciones.",

			ADD_A_NEW_KEYWORD: 			"Añadir una nueva palabra clave",

			SUCCESSED: 					"¡Con Éxito!",
			FORM_SAVED: 				"Guardado",
			FORM_FAILED: 				"Fallo",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Guardado",
			GRID_FAILED: 				"Fallo",
			GRID_NONE_SELECT: 			"Por favor seleccione al menos una entrada.",
			GRID_DELETE_COMFIRM: 		"¿Está seguro de que quiere borrar estas entradas?",
			GRID_DELETE_ALL_COMFIRM: 	"¿Está seguro de que quiere borrar todas las entradas?",
			GRID_MAX_RULES: 			"Número máximo de entradas superado.",
			KEYWORD_MAX_OVERFLOW: 		"El número de caracteres en la contraseña ha superado el límite.",

			NOTE: 						"Nota:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Formato no válido.",
			BLANKTEXT: 					"Se requiere este campo.",

			EMAIL: 						"Formato de email no válido.",
			NUMBER: 					"Formato no válido.",

			NUMBER_MIN: 				"Parámetro no válido. Por favor, introduzca un valor superior a %min.",
			NUMBER_MAX: 				"Parámetro no válido. Por favor, introduzca un valor inferior a %max.",

			NUMBER_MIN_MAX: 			"We type 0 and the system show as an error message showing the correct value is %min to %max.",
			HEX: 						"Este campo debe ser un número hexadecimal.",

			IP: 						"Formato no válido.",

			IP_NO_ALL_ZERO:				"The address should not be 0.0.0.0.",
			IP_NO_LOOP:					"The address should not be loopback IP.",
			IP_NO_D_TYPE:				"The address should not be a class D IP.",
			IP_NO_E_TYPE:				"The address should not be a class D IP.",
			IP_NO_ALL_ONE:				"The address should not be 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"The address should not start with 255.",
			IP_NO_FIRST_ZERO:			"The address should not start with 0.",
			MASK_NO_ALL_ONE:			"Mask can not be 255.255.255.255.",

			IPV6: 						"Formato no válido.",
			IPV6_NOT_GLOBAL:			"Formato no válido.",
			IPV6_NOT_PREFIX:			"Formato no válido.",
			IP_DOMAIN: 					"Formato no válido.",
			IPV6_DOMAIN: 				"Formato no válido.",
			MAC: 						"Formato no válido.",
			MULTI_MAC:					"Formato no válido.",
			DATE: 						"Formato no válido.",
			DATE_INVALID: 				"Por favor introduzca una fecha entre 01/01/1970 y 12/31/2030.",
			MASK: 						"Formato no válido.",
			DOMAIN: 					"Formato no válido.",
			STRING_DOMAIN:              "Formato no válido.",
			USER: 						"Formato no válido.",
			NOTE: 						"Formato no válido.",
			PWD: 						"Formato no válido.",
			SSID: 						"Formato no válido.",
			NAME:						"Formato no válido.",
			ASCII_VISIBLE:				"Formato no válido.",
			STRING_VISIBLE:				"Formato no válido.",
			STRING_VISIBLE_NO_COMMA:    "Formato no válido.",
			STRING_VISIBLE_ALLOW_BLANK: "Formato no válido.",
			NAME_SPECIAL: 				"Por favor introduzca de 4 a 15 caracteres alfabéticos, números, - y_.",
			VPN_NAME_PWD: 				"Por favor introduzca de 1 a 15 caracteres alfabéticos, números, - y_."	
			
		},


		ERROR: {			
			"00000001":					"Tipo de archivo no válido.",
			"00000002":					"Error en la suma de comprobación.",
			"00000003":					"El archivo es demasiado grande.",
			"00000004":					"Error de subida.",
			"00000005":					"Error al reiniciar.",
			"00000006":					"Error desconocido.",
			"00000007":					"El parámetro ya existe. Por favor, introduzca uno distinto.",

			"00000009":					"Por favor, use el valor por defecto 21 o introduzca un valor entre 1024 y 65535.",
			"00000010":					"El puerto debe ser un número.",

			"00000011":					"El nombre de usuario debe ser el mismo que escribió anteriormente.",
			"00000012": 				"El nombre de usuario debe empezar con una letra.",

			"00000021":					"Formato no válido.",

			"00000032": 				"El valor debe ser inferior al Bajo.",
			"00000033": 				"El valor debe ser inferior al Medio y Bajo.",
			"00000034": 				"Valor inválido, por favor introduzca un número entre 50 y 7200.",

			"00000039": 				"Por favor, use el valor por defecto 0 o introduzca un valor entre 20 y 86400.",
			"00000040": 				"Se requieren las direcciones SSID y MAC.",

			"00000042": 				"Por favor, use el valor por defecto 80 o introduzca un valor entre 1024 y 65535.",

			"00000045": 				"La puerta de enlace predeterminada y dirección IP LAN debe encontrarse en la misma subred. Por favor introdúzcala de nuevo.",

			"00000047": 				"El conjunto de direcciones IP y la dirección IP LAN deben estar en la misma subred. Por favor, inténtelo de nuevo.",

			
			"00000049":					"La red de destino no es válida.",

			"00000050": 				"Dirección IP del servidor DNS incorrecto. Por favor, escriba otra dirección IP.",
			"00000051": 				"La dirección MAC ya existe. Por favro, introduzca otra.",
			"00000052": 				"La dirección IP ya existe. Por favor, introdúzca otra difererente.",

			"00000053": 				"La dirección de comienzo no debe ser mayor que la dirección de final.<br/> Por favor inténtelo de nuevo.",

			"00000054": 				"El conjunto de direcciones IP y la dirección IP LAN deben estar en la misma subred. Por favor, inténtelo de nuevo.",

			"00000055": 				"La IP no puede ser igual que la dirección LAN.",

			"00000056": 				"La dirección IP remota y la actual dirección IP LAN no deben estar en la misma subred. Por favor, introduzca una distinta.",

			"00000057": 				"Contraseña PSK no válida. Por favor, introdúzcala de nuevo.",
			"00000058": 				"Contraseña WEP no válida. Por favor, introdúzcala de nuevo.",

			"00000059": 				"Máscara de subred y dirección IP LAN no válidos. Por favor, introduzca otros.",

			"00000060": 				"Las direcciones IP WAN e IP LAN no deben estar en la misma subred. <br/>Por favor introduzca otra.",

			"00000061": 				"La hora de comienzo debe ser inferior que la hora de fin.",

			"00000062": 				"Se requiere este campo.",
			"00000063": 				"Se requiere este campo.",

			"00000064": 				"No se puede bloquear la dirección MAC del equipo.",
			"00000065": 				"El parámetro está en conflicto con los parámetros existentes. Por favor, compruébelo.",
			
			"00000066": 				"La contraseña debe tener entre 8 y 63 caracteres o 64 dígitos hexadecimales.",
			"00000067": 				"La contraseña debe tener 10 dígitos hexadecimales.",
			"00000068": 				"La contraseña debe tener 5 caracteres ASCII.",
			"00000069": 				"La contraseña debe tener  26 dígitos hexadecimales.",
			"00000070": 				"La contraseña debe tener  13 caracteres ASCII.",
			"00000071": 				"La contraseña debe tener  32 dígitos hexadecimales.",
			"00000072": 				"La contraseña debe tener  16 caracteres ASCII.",
			"00000073": 				"La contraseña debe tener menos de 64 caracteres.",

			"00000074": 				"Tipo de archivo no válido.",

			"00000075": 				"La longitud del PIN debe ser de 8.",

			"00000076": 				"La entrada está en conflicto con los parámetros existentes. Por favro, compruebe el puerto y el protocolo habilitados.",
			"00000077": 				"La dirección IP no puede ser igual que la dirección IP LAN.",
			"00000078": 				"La dirección IP del equipo no puede ser la misma que la dirección IP LAN.",

			"00000080": 				"Las contraseñas no coinciden. Por favor, vuelva a intentarlo.",

			"00000088": 				"Esta operación no está permitida para la gestión remota.",
			"00000089": 				"Ha excedido los %num intentos, por favor inténtelo de nuevo en dos horas.",

			"00000090": 				"La dirección de destino no puede ser la IP LAN.",
			"00000091": 				"La dirección de destino no puede ser la IP WAN.",

			"00000092": 				"La dirección IP y la dirección IP WAN no pueden estar en la misma subred. <br/>Por favor, introdúzcala de nuevo.",
			"00000093": 				"Las direcciones IP WAL e IP LAN no deben estar en la misma subred. <br/>Por favor, introduzca otros.",

			"00000094": 				"Los Ids de VLAN no pueden ser iguales.",
			"00000095": 				"Al menos se requiere un puerto de Internet",

			"00000096": 				"La contraseña ya existe.",

			"00000097": 				"Las configuraciones realizadas en las bandas de frecuencia de 2.4GHz no tendrán efecto hasta que que le botón Wi-Fi esté encendido.",
			"00000098": 				"Las configuraciones realizadas en las bandas de frecuencia de 5GHz no tendrán efecto hasta que que le botón Wi-Fi esté encendido.",
			"00000099": 				"Las configuraciones realizadas en las bandas de frecuencia de 2.4GHz y 5GHz no tomarán efecto hasta que pulse el botón de WiFi.",

			"00000100": 				"La configuración de la red de 5GHz no está disponible debido a las restricciones del pais.",

			"00000101": 				"Su función inalámbrica está desactivada. Si quiere usar esta función, por favor pulse en botón WiFi.",
			"00000102": 				"Su función inalámbrica está desactivada. Si quiere usar esta función, por favor pulse en botón WiFi.",

			"00000103": 				"Su función inalámbrica está desactivada. Si quiere usar esta función, por favor pulse en botón WiFi.",
			"00000104": 				"Su función inalámbrica está desactivada.",

			"00000105": 				"QoS e IPTV no pueden estar activos al mismo tiempo.",

			"00000106": 				"Las direcciones IP no puede ser igual que la dirección IP LAN.",
			
			"00000107": 				"El destino ya existe.",

			"00000110": 				"La dirección IP y la dirección IP LAN deben estar en la misma subred.",
			
			"00000111": 				"QoS y <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> no pueden estar activados al mismo tiempo.",
			"00000112": 				"La función WDS puede funcionar en cualquiera de las bandas de 4GHz o 5GHz.",
			"00000113": 				"WDS y Red de Invitados no pueden estar activados al mismo tiempo.",
			"00000114": 				"Las estadísticas de tráfico y <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> no pueden estar activadas al mismo tiempo.",
			"00000115": 				"IPTV e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> no pueden estar activos al mismo tiempo.",

			"00000117": 				"El nombre de dominio ya existe.",
			"00000118": 				"El número de nombres de dominio ha superado el límite.",
			"00000119":				"Si la opción NAT Boost está habilitada, <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> se <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">deshabilitará automáticamente</a>.",

			"00000120": 				"La contraseña debe tener 5 o 13 caracteres ASCII.",
			"00000121": 				"La contraseña debe tener 10 0 26 dígitos hexadecimales.",
			"00000122": 				"El nombre de usuario y la contraseña están vacíos, ¿quiere continuar?",
			"00000123": 				"Guardando… <br/>Por favor, no actúe durante el proces.",
			"00000124": 				"El PIN del router está bloqueado debido a que conexiones han utilizado repetidamente un PIN erróneo. Por favor, genere uno nuevo.",

			"00000125": 				"El número de reglas QoS ha excedido el límite.",
			"00000126": 				"El tamaño del fichero ha excedido el límite.",
			"00000127": 				"El contenido del fichero es incorrecto.",
			"00000128": 				"Por favor, seleccione al menos una aplicación.",
			"00000129": 				"Por favor, seleccione al menos un puerto físico.",
			"00000130":					"Tu función WPS está desactivada.",
			"00000131": 				"El servidor NTP no puede hacer direcciones loopback.",
			"00000132": 				"El modo switch ha fallado. Por favor, inténtelo más tarde o reinicie su router.",
			"00000133": 				"Dirección IP del Host DMZ inválida. Por favor, introdúzaca una válida.",
			"00000134":  				"IP interna inválida. Por favor, introdúzca una válida.",
			"00000135": 				"Error en el archivo  de firmware.",
			"00000136": 				"Error en archivo de Backup.",
			"00000137": 				"El nombre de usuario está vacío, ¿seguro que quiere continuar?",
			"00000138": 				"La contraseña está vacía, ¿seguro que quiere continuar?",
			"00000139": 				"Parámetros de recuperación de contraseña incorrectos.",
			"00000140": 				"Código incorrecto.",
			"00000141": 				"La recuperación de la contraseña está deshabilitada.",
			"00000142": 				"Fallo al enviar el código. Por favor compruebe su conexión a Internet.",
			"00000143": 				"Dirección de email inválida.",
			"00000144": 				"Mensaje de email inválido.",
			"00000145": 				"No se pudo encontrar el host.",
			"00000146": 				"Fallo en la autenticación.",
			"00000147": 				"El puerto debería estar entre el 1 y 65535.",
			"00000148": 				"Para un rango de puertos, el número del puerto inicial debe ser menor que el número del puerto final. Por favor introdúzcalo de nuevo. ",
			"00000149": 				"El número del puerto se solapa. Por favor introdúzcalo de nuevo.",
			"00000150": 				"Máscara de subred y dirección IP WAN no válidos. Por favor, introduzca otros.",
			"00000151": 				"Por favor seleccione al menos un día.",
			"00000152": 				"Por favor establezca el horario de acceso a Internet.",
			"00000213":					"La dirección IP del servidor DNS y la dirección IP LAN no pueden estar en la misma subred. <br/>Por favor introduzca otra.",
			"10000139": 				"No hay conexión a Internet",
			"10000140": 				"Tiempo de solicitud expirado. Por favor compruebe su conexión a Internet e inténtelo de nuevo.",
			"10000158": 				"El puerto WAN está desconectado.",
			"10000159": 				"Imposible conectarse a Internet. Por favor contacte con su proveedor de servicio o inténtelo de nuevo más tarde.",
			"10000160": 				"Imposible obtener una dirección IP del Servidor DHCP. Por favor compruebe el tipo de conexión WAN o inténtelo de nuevo más tarde.",
			"10000161": 				"Autenticación PPPoE fallida. Por favor compruebe su nombre de usuario y contraseña.",
			"10000162": 				"Imposible conectarse al servidor PPPoE.",

			"10000164": 				"Autenticación PPTP fallida. Por favor compruebe su nombre de usuario y contraseña.",
			"10000165": 				"Imposible conectarse al servidor PPTP.",

			"10000167": 				"Autenticación L2TP fallida. Por favor compruebe su nombre de usuario y contraseña.",
			"10000168": 				"Imposible conectarse al servidor L2TP.",
			"10000169": 				"Error desconocido. Por favor inténtelo de nuevo más tarde.",
			"10000172": 				"La conexión ha fallado.",

			"10000185": 				"Error de sistema.",	
			"10000186": 				"Error en el archivo  de firmware.",	
			"10000187": 				"Error de descarga de firmware.",	
			"10000188": 				"Error de actualización de firmware.",	
			"10000191": 				"Imposible descargar el archivo de firmware.",
			"10000192": 				"Error de actualización de firmware.",
			"10000193": 				"Imposible conectarse al servidor.",	
			"10000194": 				"Imposible conectar al servidor cloud. Por favor, inténtelo de nuevo más tarde.",
			"10000195": 				"No puede configurar la contraseña otra vez por que ya ha establecido una.",
			
			"E3002":                    "Tiempo de solicitud agotado.", 
			"E10000": 					"Error común",
			"E20002": 					"Tiempo de solicitud agotado.",
			"E20003": 					"El servidor cloud está ocupado. Por favor inténtelo de nuevo más tarde.",
			"E20107": 					"Entrada no válida.",
			"E20200": 					"Formato de email no válido.",
			"E20502": 					"Imposible vincular el dispositivo. Por favor inténtelo de nuevo más tarde.",
			"E20503": 					"Imposible desvincular el dispositivo. Por favor inténtelo de nuevo más tarde.",
			"E20506": 					"Operación fallida. El dispositivo ya está vinculado a otra cuenta cloud.",
			"E20507": 					"El dispositivo ha sido desvinculado de la cuenta.",
			"E20508": 					"El número de cuentas vinculadas ya ha alcanzado el límite máximo.",
			"E20509": 					"Las cuentas de usuario no pueden vincular nuevos usuarios.",
			"E20571": 					"El dispositivo está desconectado.",
			"E20580": 					"Operación fallida. Esta cuenta no está vinculada al dispositivo.",
			"E20600": 					"El email no está registrado.",
			"E20601": 					"Nombre de usuario o contraseña incorrecta.",
			"E20602": 					"La cuenta no está aún activada.",
			"E20603": 					"El email ya está registrado.",
			"E20604": 					"Nombre de usuario no válido. Por favor introduzca una dirección de email o número de teléfono.",
			"E20606": 					"Imposible enviar el email de activación de cuenta.",
			"E20615": 					"Contraseña no válida. Por favor introduzca entre 6 y 32 caracteres ASCII sin espacios.",
			"E20616": 					"Contraseña no válida. Por favor introduzca entre 6 y 32 caracteres ASCII sin espacios.",
			"E20617": 					"Esta cuenta no existe.",
			"E20618": 					"Esta cuenta no existe.",
			"E20620": 					"Apodo no válido. Por favor introduzca entre 1 y 64 caracteres.",
			"E20661": 					"Esta cuenta estará bloqueada durante 2 horas debido a los excesivos intentos de acceso (20 veces en media hora).",
			"E20662": 					"El dispositivo está bloqueado. En las siguientes 24 horas, el dispositivo no responderá a cualquier solicitud de código de verificación.",
			"E20671": 					"Imposible verificar la cuenta.",
			"E20672": 					"Imposible verificar la cuenta. El enlace de activación de la cuenta ha expirado. Por favor envía una nueva solicitud.",
			"E20673": 					"El enlace de restauración de contraseña ha expirado. Por favor envía una nueva solicitud.",
			"E20674": 					"Imposible restaurar la contraseña.",
			"E20675": 					"Esta cuenta está sienedo accedida desde otro lugar.",
			"E22000": 					"Entrada no válida.",
			"E22001": 					"El nombre de dominio ya está registrado.",
			"E22002": 					"El número de nombres de dominio registrados ha alcanzado el límite máximo.",
			"E22003": 					"El número de nombres de dominio vinculados ha alcanzado el límite máximo.",
			"E22004": 					"El nombre de dominio ya está vinculado a otro dispositivo.",
			"E22006": 					"Error de sistema. Por favor inténtelo de nuevo más tarde.",
			"E22007": 					"El nombre de dominio contiene palabras prohibidas. Por favor pruebe otro.",
			"E22008": 					"El nombre de dominio no existe.",

			"E50101": 					"El puerto WAN está desconectado.",
			"E50102": 					"Imposible conectar a Internet. Por favor contacte con su proveedor o inténtelo de nuevo más tarde.",
			"E50103": 					"Imposible obtener una dirección IP del Servidor DHCP. Por favor compruebe el tipo de conexión WAN o inténtelo de nuevo más tarde.",
			"E50111": 					"Autenticación PPPoE fallida. Por favor compruebe su nombre de usuario y contraseña.",
			"E50112": 					"Imposible conectarse al servidor PPPoE.",
			"E50121": 					"Autenticación PPTP fallida. Por favor compruebe su nombre de usuario y contraseña.",
			"E50122": 					"Imposible conectarse al servidor PPTP.",
			"E50131": 					"Autenticación L2TP fallida. Por favor compruebe su nombre de usuario y contraseña.",
			"E50132": 					"Imposible conectarse al servidor L2TP.",
			"E50140": 					"Error desconocido. Por favor inténtelo de nuevo más tarde.",
			"E51215": 					"Tiempo de solicitud expirado. Por favor compruebe su conexión a Internet e inténtelo de nuevo.",
			"E_CLOUD_SERVER": 			"Error del servidor. Por favor, inténtelo de nuevo más tarde.",
			"E5000": 					"Imposible conectarse al servidor cloud.",
			"E5001": 					"ID de TP-Link incorrecto (email). O su dispositivo está desconectado o sólo el administrador (%email) tiene acceso sin conexión.",
			"E5002": 					"Contraseña incorrecta."
		},

		MENU: {
			STATUS: 					"Estado",
			NETWORK: 					"Red",
			NETWORK_MAP: 				"Mapa de red",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"Servidor DHCP",
			DYNAMIC_DNS: 				"DNS Dinámico",
			ADVANCED_ROUTING: 			"Enrutado Avanzado",

			WIRELESS: 					"Red inalámbrica",
			WIRELESS_SETTINGS: 			"Configuraciones de Red Inalámbrica",
			WDSBRIDGING: 				"Puente WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"Filtrado MAC",
			WIRE_STATISTICS: 			"Estadísticas",
			
			
			GUEST_NETWORK: 				"Red de invitados",
			WIRELESS_SETTINGS: 			"Configuraciones de Red Inalámbrica",
			STORAGE_SHARING: 			"Almacenamiento compartido",
			NAT_FORWARDING: 			"Reenvío de NAT",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Servidores Virtuales",
			PORT_TRIGGERING: 			"Disparador de Puertos",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Configuración USB",
			BASIC_SET: 					"Configuración básica",
			DISK_SET: 					"Configuración de dispositivos",
			FOLDER_SHARING: 			"Acceso compartido",
			STORAGE_SHARING: 			"Almacenamiento compartido",
			FTP_SERVER: 				"Servidor FTP",
			MEDIA_SERVER: 				"Servidor multimedia",
			PRINT_SERVER: 				"Servidor de impresión",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Controles Parentales",
			
			QOS:  						"QoS",
			DATABASE:  					"Base de datos",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Mapa",
			SB_MAP: 					"Mapa",
			SB_BANDWIDTH:  				"Ancho de banda",
			SB_PRIORITY: 				"Prioridad",
			SB_STATISTICS: 				"Estadísticas",

			
			SECURITY: 					"Seguridad",
			SETTINGS: 					"Configuración",
			ACCESS_CONTROL: 			"Control de acceso",
			IP_MAC_BINDING: 			"Blindaje IP&MAC",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Herramientas del Sistema",
			TIME_SETTINGS: 				"Configurarciones de la hora",
			DIAGNOSTIC: 				"Diagnósticos",
			FIRMWARE_UPGRADE: 			"Actualización de firmware",
			BACKUP_RESTORE: 			"Copia de Seguridad & Restauración",
			ADMINISTRATION: 			"Administración",
			SYSTEM_LOG: 				"Registro de Sistema",
			STATISTICS: 				"Estadísticas del tráfico",
			SYSTEM_PARAMETERS: 			"Parámetros del Sistema",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"Servidor VPN",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"Conexiones VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Región y Zona horaria",
			INTERNET_CONNECTION_TYPE: 	"Tipo de conexión a Internet",
			WIRELESS_SETTINGS: 			"Configuraciones de Red Inalámbrica",
			SUMMARY: 					"Resumen",
			SETUP_COMPLETE: 			"Test de Conexión a Internet",
			SETUP_COMPLETE_CLOUD: 			"Servicio Cloud de TP-Link",

			EXIT: 						"Salir",
			NEXT: 						"Siguiente",
			SAVE: 						"Guardar",
			FINISH: 					"Finalizar",
			OK: 						"OK",
			NONE: 						"Detección fallida.",

			REGION: 					"País",
			TIME_ZONE: 					"Zona horaria",

			AUTO_DETECT: 				"Auto Detectar",
			DYNAMIC_IP: 				"IP Dinámica",
			STATIC_IP: 					"IP Estática",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Si no está seguro de que tipo de conexión a Internet tiene, use el auto-detectar o contacte con su proveedor de servicios (ISP) para Soporte Técnico.",

			DYNAMIC_IP_INFO: 			"Si su ISP solo permite acceso a Internet a una dirección MAC específica, necesita clonar dicha dirección MAC para proporcionar acceso al resto de dispositivos. Si no está seguro, seleccione NO clonar Dirección MAC.",
			MAC_CLONE_NO: 				"NO clonar dirección MAC",
			MAC_CLONE_YES: 				"Clonar la actual dirección MAC del ordenador",
			MAC_CLONE_NOTE: 			"Si selecciona Clonar la dirección MAC, por favor, asegúrese de que la dirección MAC del ordenador está registrada con su ISP antes de pulsar en Siguiente.",

			PPPOE_INFO: 				"Por favor, introduzca su nombre de usuario PPPoE y contraseña.",
			
			STATIC_IP_INFO: 			"Por favor, introduzca su información IP.",

			L2TP_INFO: 					"Por favor, introduzca su nombre de usuario L2TP y contraseña.",
			PPTP_INFO: 					"Por favor, introduzca su nombre de usuario PPTP y contraseña.",
			
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			SERVER_IP_ADDRESS_NAME: 	"IP del servidor VPN/Nombre de dominio",
			IP_ADDRESS: 				"Dirección IP",
			SUBNET_MASK: 				"Máscara de Subred",
			DEFAULT_GATEWAY: 			"Puerta de enlace predeterminada",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",
			OPTIONAL: 					"(Opcional)",
			
			ON: 						"Encendido",
			OFF: 						"Apagado",
			WIRELESS_24GHZ: 			"Wi-Fi 2.4GHz",
			WIRELESS_5GHZ: 				"Wi-Fi 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Activar Señal Inalámbrica",
			NAME_SSID: 					"Nombre de Red Inalámbrica (SSID)",

			SUMMARY_INFO1: 				"Necesita reconectar sus dispositivos inalámbricos a la nueva red inalámbrica antes de pulsar en el botón <strong>Next</strong>.",
			SUMMARY_INFO2: 				"Su nombre de red inalámbrica y contraseña ha sido modificada como le indicamos a continuación",
			SUMMARY_INFO3: 				"Asegúrese de que se ha conectado a la nueva red inalámbrica.",

			WIRELESS_24GHZ_SSID: 		"Inalámbrico  2,4GHz Nombre (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Inalámbrico 2,4GHz Contraseña",
			WIRELESS_5GHZ_SSID: 		"Inalámbrico  5GHz Nombre (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Inalámbrico 5GHz Contraseña",

			SORRY: 						"Error.",
			SUCCESS: 					"¡Con Éxito!",
			TEST_INTERNET_SUCCESS_INFO: "Éxito! Haga clic en Finalizar para terminar el proceso de configuración rápida.",

			TEST_INTERNET_FAILED_INFO_0:"Por favor, verifique que todos los parámetros de la Configuración Rápida son correctos e inténtelo de nuevo. Si todos los parámetros son correctos. Por favor, reinicie su módem, espere 2 minutos, y pulse en Prueba de Conexión a Internet una vez más. Si no estás utilizando un módem, contacte con su Proveedor de Servicio de Internet (ISP) para que le proporcione asistencia.",
			TEST_INTERNET_FAILED_INFO_1: "Ups… La conexión a Internet no se ha configurado correctamente. <br/>1. Asegúrese de que todos los cables están correctamente conectados.<br/>2. Haga click en Volver y verifique que la información de la conexión a Internet está correcta.<br/>3. Contacte con nuestro Soporte Técnico si el problema persiste.",
			SUMMARY_INFO4: 				"¡Lo sentimos! Hemos detectado que no ha reconectado sus dispositivos inalámbricos a la nueva red inalámbrica. Por favor, realicelo y pulse en <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"¡Enhorabuena!",
			COMPLETE_INFO_0: 			"Ha completado el proceso de configuración rápida.",
			COMPLETE_INFO_1:			"Pulse a continuación en Probar conexión a Internet, entonces pulse en Finalizar.",
			COMPLETE_INFO_2: 			"No está logueado en su cuenta TP-Link Cloud. Puede acceder más tarde desde Básico > TP-Link Cloud",
			TEST_INTERNET: 				"Test de Conexión a Internet",

			
			RESET_USER_TITLE: 			"Configure un nuevo nombre de usuario y contraseña",
			NEW_USERNAME: 				"Nuevo nombre de usuario",
			NEW_PASSWORD: 				"Nueva Contraseña",
			CONFIRM_PASSWORD: 			"Confirmar nueva contraseña",
			
			NO_ACCOUNT: 				"¿No hay ningún ID de TP-Link?",
			REGISTER_NOW: 				"Registrar Ahora",
			REGISTER_SKIP: 				"Acceder más tarde",
			LOGIN: 						"Acceder",
			REGISTER_NEW:				"Registre una nueva cuenta",
			COMPLETE_INFO_EMAIL_PREFIX: "Su ID de TP-Link es:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Recomendamos encarecidamente que acceda utilizando esta cuenta para una gestión sencilla de su dispositivo y para más funciones TP-Link Cloud.",

			INTERNET_OK: 				"¡Enhorabuena! La red se ha configurado correctamente. Disfruta de Internet.",
			CLOUD_WIZARD: 				"Para obtener más funciones de TP-Link Cloud, inicie sesión con su <a class=\"link\" href=\"#\"> ID de TP-Link </a>.",
			ACCOUNT_DESP:               "Con un ID de TP-Link, puede:", 
			ACCOUNT_DESP_SUB1:          "Acceder a su dispositivo y servidores locales (FTP, HTTP, etc.) en cualquier lugar mediante Internet",
			ACCOUNT_DESP_SUB2:          "Mantener siempre su firmware actualizado con la función Actualización Online",
	        ACCOUNT_DESP_SUB3:          "Gestionar múltiples dispositivos con solo una cuenta",
			
			CONFIRM: 					"Confirmar"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Internet Estado",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Tipo de Conexión",
			SECONDARY_CONN: 			"Conexión Secundaria",

			POOR_CONNECTED: 			"Conectado con poca señal",
			UNPLUGGED: 					"El puerto WAN está desconectado.",
			
			CONNECTED: 					"Conectado",
			DISCONNECTED: 				"Desconectado",

			INTERNET_IP_ADDR: 			"Dirección IP",
			
			IP_ADDR: 					"Dirección IP",
			MAC_ADDR: 					"Dirección MAC",
			GATEWAY: 					"Puerta de Enlace Predeterminada",

			AUTO: 						"Auto",
			
			ROUTER: 					"Router ",
			WIRELESS_CLIENTS: 			"Clientes Inalámbricos",
			HOST_CLIENTS: 				"Clientes Inalámbricos",
			GUEST_CLIENTS: 				"Clientes Invitados",
			WIRE_CLIENTS: 				"Clientes por cable",
			PRINTER: 					"Impresora",
			USB_DISK: 					"Disco USB",
			WIRELESS: 					"Red inalámbrica",
			NAME: 						"Nombre",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Canal",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Wi-Fi 2.4GHz",
			WIRELESS_5GHZ: 				"Wi-Fi 5GHz",
			
			GUEST_24GHZ: 				"Red de Invitados 2.4GHz",
			GUEST_5GHZ: 				"Red de Invitados 5GHz",
			
			STATUS: 					"Estado",
			TOTAL: 						"Totales",
			AVAILABLE: 					"Disponible",
			GB: 						"GB",
			BRAND: 						"Marca",

			DYNAMIC_IP: 				"IP Dinámica",
			STATIC_IP: 					"IP Estática",
			SUBNET_MASK: 				"Máscara de Subred",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Cable BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Túnel v6 a v4",
			NONE: 						"Ninguno"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Auto Detectar",
			INTERNET_CONN_TYPE: 		"Tipo de conexión a Internet",
			DYNAMIC_IP: 				"IP Dinámica",
			STATIC_IP: 					"IP Estática",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"Cable BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"El puerto WAN está desconectado.",
			NONE: 						"Ninguno",
			DETECT_FAIL: 				"Auto Detección fallida",
			SECONDARY_CONN: 			"Conexión Secundaria",

			DYNAMIC_YES: 				"NO clonar dirección MAC",
			DYNAMIC_NO: 				"Clonar la actual dirección MAC del ordenador",
			
			IP_ADDR: 					"Dirección IP",
			SUBNET_MASK: 				"Máscara de Subred",
			DEFAULT_GATEWAY: 			"Puerta de enlace predeterminada",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",
			OPTIONAL: 					"(Opcional)",
			USER_NAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			SERVER_IP_ADDR_NAME: 		"IP del servidor VPN/Nombre de dominio",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Si no está seguro de que tipo de conexión a Internet tiene, use el auto-detectar o contacte con su proveedor de servicios (ISP) para Soporte Técnico."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Configuraciones de Red Inalámbrica",
			MODE_2G: 					"Wi-Fi 2.4GHz",
			MODE_5G: 					"Wi-Fi 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nombre de Red Inalámbrica (SSID)",
			WIRELESS_PASSWORD: 			"Contraseña",
			ENABLE_WIRELESS: 			"Activar Señal Inalámbrica",
			SAVE: 						"Guardar",
			ENCRYPTION_2G_NOTICE:		"La encriptación 2.4G es %s.",
			ENCRYPTION_5G_NOTICE:		"La encriptación 5G es %s.",
			ENCRYPTION_2G_NO: 			"La red inalámbrica de 2,4GHz no está encriptada.",
			ENCRYPTION_5G_NO: 			"La red inalámbrica de 5GHz no está encriptada.",
			ENCRYPTION_SURE: 			"¿Está seguro de que quiere continuar?",

			HIDE_SSID: 					"Ocultar SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Configuración básica",
			TITIL_NEW:					"Cuenta&Disco",
			DISK_SET:					"Configuración de dispositivos",

			SELFLY_REMOVE:				"Extraer de forma segura",
			SCANING:					"Escaneando…",
			SCAN_RESULT:				"Encontrados %n discos",
			
			DISKS:						"Discos",
			USERS: 						"Cuentas USB",
			DEVICENAME: 				"Nombre del Dispositivo",
			VOLUMN: 					"Volumen",

			USBSPACE: 					"Espacio Usado",
			FREESPACE: 					"Espacio libre",
			STATUS: 					"Estado",
			INACT: 						"Descativado",
			USAGE: 						"Uso",
			CAPACITY: 					"Capacidad",
			OPERATION: 					"Operación",
			
			ACC: 						"Administración de cuentas",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			USE_LOGIN: 					"Utilice usuario de inicio de sesión",
			SCAN: 						"Escanear",
			ENJECT_ALL: 				"Expulsar todo",
			ENJECT: 					"Expulsar",
			ADD_USER: 					"Añadir Usuario",
			AUTH: 						"Autoridad",


			LOCATION: 					"Localización",
			MOBILE_ISP: 				"ISP Móvil",
			DIAL_NUMBER: 				"Número Dial",
			APN: 						"APN",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			MTU_SIZE: 					"Tamaño MTU",
			OPTIONAL: 					"(Opcional)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Controles Parentales",

			DEVICE_CTR: 				"Dispositivos bajo control parental",
			ID: 						"ID",
			DEVICE: 					"Nombre del Dispositivo",
			MAC_ADDRESS: 				"Dirección MAC",
			TIME: 						"Horario de Acceso a Internet",
			DESCRIPTION: 				"Descripción",
			ENABLE: 					"Activar",
			ENABLE_THIS_ENTRY: 			"Activar",
			OPTIONAL: 					"(Opcional)",
			BTN_VIEW: 					"Ver dispositivos existentes",
			ACCESS_DEVICES_LIST: 		"Lista de dispositivos",
			OPT: 						"Operación",
			STATUS: 					"Estado"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Red de invitados",
			MODE_2G: 					"Wi-Fi 2.4GHz",
			MODE_5G: 					"Wi-Fi 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nombre de Red Inalámbrica (SSID)",
			WIRELESS_PASSWORD: 			"Contraseña",
			ENABLE_WIRELESS: 			"Activar señal inalámbrica",
			SAVE:						"Guardar",
			HIDE_SSID: 					"Ocultar SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Cuenta Cloud.",
			OFFLINE_NOTE_TITLE: 		"Dispositivo Desconectado",
			LOGIN_NOTE_TITLE: 			"Ups…",
			LOGIN_OFFLINE_NOTE: 		"El dispositivo está apagado. Por favor compruebe la configuración WAN y de red para estar seguro de que la configuración está correctamente introducida.",

			EMAIL: 						"Email",
			PASSWORD: 					"Contraseña",
			FORGET_PASSWORD: 			"¿Olvidó la contraseña?",

			CLOUD_WIZARD: 				"Para obtener más funciones de TP-Link Cloud, inicie sesión con su <a class=\"link\" href=\"#\"> ID de TP-Link </a>.",
			NO_ACCOUNT: 				"¿No hay ningún ID de TP-Link?",
			REGISTER_NOW: 				"Registrar Ahora"
		},
		STATUS: {
			TITLE: 						"Estado",
			INTERNET:					"Internet",
			WIRELESS:					"Red inalámbrica",
			LAN:						"LAN",
			USB_TITLE:					"Dispositivos USB",
			PERFORMANCE: 				"Rendimiento",
			GUEST_NETWORK: 				"Red de invitados",
			ACCESS_DEVICES: 			"Dispositivos de Acceso",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Tipo de Conexión",

			MAC_ADDRESS: 				"Dirección MAC",
			IP_ADDRESS: 				"Dirección IP",
			RELEASE: 					"Liberar",
			RENEW: 						"Renovar",
			
			DYNAMIC_IP: 				"IP Dinámica",
			STATIC_IP: 					"IP Estática",
			SUBNET_MASK: 				"Máscara de Subred",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Cable BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Túnel v6 a v4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"RDNSS",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Ninguno",
			
			DEFAULT_GATEWAY: 			"Puerta de enlace predeterminada",
			DNS: 						"Servidor DNS",
			MAC: 						"Dirección MAC",
			WDS_STATUS: 				"Estado WDS",
			
			IPV6_ADDRESS: 				"Dirección IP",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",

			RADIO: 						"Señal inalámbrica",

			NAME_SSID: 					"Nombre de Red (SSID)",
			NETWORK_NAME_SSID:			"Nombre de Red Inalámbrica (SSID)",
			HIDE_SSID: 					"Ocultar SSID",
			MODE: 						"Modo",
			CHANNEL: 					"Canal",
			CHANNEL_WIDTH: 				"Ancho del canal",
			AUTO: 						"Auto",
			CURRENT_CHANNEL: 			"Canal Actual",

			WDS: 						"Estado WDS",
			WIRED_CLIENTS: 				"Clientes por cable",
			WIRELESS_CLIENTS: 			"Clientes Inalámbricos",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Máscara de Subred",
			ASSIGN_TYPE: 				"DHCP",

			ALLOW_TO_SEE_EACH: 			"Permitir que los clientes se vean entre ellos",

			TOTAL: 						"Total",
			AVAILABLE: 					"Disponible",

			USB: 						"Disco USB",
			PRINTER: 					"Impresora",

			CPU_LOAD: 					"Cargar CPU",
			MEMORY_USAGE: 				"Uso de memoria",

			IP_ADDR_P: 					"Dirección IP",
			MAC_ADDR_P: 				"Dirección MAC",
			CONN_TYPE_P: 				"Ctipo de Connexión",

			DISABLED: 					"Deshabilitado",
			INIT: 						"Inic",
			SCAN: 						"Escanear",
			AUTH: 						"Auten",
			ASSOC: 						"Asoc",
			RUN: 						"Funcionando",
			HOST: 						"Cliente",
			GUEST: 						"Inivitado",

			ON: 						"Encendido",
			OFF: 						"Apagado"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Tipo de conexión a Internet",
			INTERNET_MAC_ADDRESS: 		"Dirección MAC",
			
			CONNECT: 					"Conectar",
			DISCONNECT: 				"Desconectar",
			
			IP_ADDR: 					"Dirección IP",
			
			USE_DEFAULT_MAC: 			"Utilizar la dirección MAC por defecto",
			USE_COMPUTER_MAC: 			"Utilizar la actual dirección MAC del ordenador",
			USE_CUSTOM_MAC: 			"Utilizar una dirección MAC diferente",
			MAC_CLONE: 					"Clonar MAC",
			
			CONFIG: 					"Configuración",
			
			IP_ADDRESS: 				"Dirección IP",
			SUBNET_MASK: 				"Máscara de Subred",
			DEFAULT_GATEWAY: 			"Puerta de enlace predeterminada",
			
			MANUAL_DNS: 				"DNS Manual",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",
			
			RENEW: 						"Renovar",
			RELEASE: 					"Liberar",
			VIEW_MODE: 					"Modo Vista",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Obtener dinámicamente de su ISP",
			USE_FOLLOW_IP_ADDR: 		"Utilizar la siguiente dirección IP",
			USE_FOLLOW_DNS_ADDR: 		"Usar las siguientes direcciones DNS",
			USE_FOLLOW_DNS_SERVER: 		"Utilizar el siguiente servidor DNS",
			
			BASIC: 						"Básico",
			ADVANCED: 					"Avanzado",
			
			DNS_ADDR_MODE: 				"Dirección DNS",
			MTU_SIZE: 					"Tamaño MTU",
			MTU_1500: 					"bytes. (El valor por defecto es 1500, no lo cambie a menos que no sea necesario.)",
			MTU_1480: 					"bytes. (El valor por defecto es 1480, no lo cambie a menos que no sea necesario.)",
			MTU_1460: 					"bytes. (El valor por defecto es 1460, no lo cambie a menos que no sea necesario.)",
			MTU_1420: 					"bytes. (El valor por defecto es 1420, no lo cambie a menos que no sea necesario.)",
			
			HOST_NAME: 					"Nombre de equipo",

			HOST_NAME_CONFIRM: 			"El nombre del equipo contiene caracteres ilegales que pueden causar un comportamiento inesperado del sistema. ¿Está seguro de que quiere continuar?",

			GET_IP_WITH_UNICAST_DHCP: 	"Obtener IP utilizando DHCP Unicast (Normalmente no es requerido.)",
			OPTIONAL: 					"(Opcional)",
			
			STATIC_IP: 					"IP Estática",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			
			INTERNET_IP_ADDR: 			"Dirección IP",
			INTERNET_DNS: 				"DNS de Internet",
			SECONDARY_CONN: 			"Conexión Secundaria",
			NONE: 						"Ninguno",
			INTERNET_PRIMARY_DNS:		"DNS Primario",
			INTERNET_SECONDARY_DNS: 	"DNS Secundario",
			
			DYNAMIC_IP: 				"IP Dinámica",
			DYNAMIC_IP_v6: 				"IP dinámica (SLAAC/DHCPv6)",
			STATIC_IP: 					"IP Estática",
			SERVICE_NAME: 				"Nombre de Servicio",
			ACCESS_CONCENTRATOR_NAME:  	"Nombre de acceso concentrado",
			DETECT_ONLINE_INTERVAL: 	"Detectar intervalo en línea",
			INTERVAL_TIPS: 				"segundos. (0-120. El valor por defecto es 10.)",
			IP_ADDR_MODE:  				"Dirección IP",
			CONN_MODE: 					"Modo de conexión",
			DHCP_LINK_UNPLUGGED: 		"El puerto WAN está desconectado.",
			
			AUTO: 						"Auto",
			ON_DEMAND: 					"Bajo demanda",
			TIME_BASED: 				"Basado en el tiempo",
			MANUALLY: 					"Manualmente",
			MAX_IDLE_TIME: 				"Máximo tiempo de inactividad",
			MAX_IDLE_TIME_TIPS: 		"minutos. (0 significa siempre activo.)",
			PERIOD_OF_TIME: 			"Periodo de tiempo",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"Cable BigPond",
			AUTH_SERVER: 				"Servidor de autenticación",
			AUTH_DOMAIN: 				"Dominio de autenticación",
			L2TP: 						"L2TP",
			GATEWAY: 					"Puerta de Enlace Predeterminada",
			SERVER_IP_ADDR_NAME: 		"IP del servidor VPN/Nombre de dominio",
			PPTP: 						"PPTP",
			TO: 						"Para",
			
			TUNNEL_6TO4: 				"Túnel v6 a v4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Obtener una dirección IPv6 no temporal",
			GET_PREFIX_DELEGATION: 		"Obtener prefijo de delegación IPv6",
			IPV6_ADDR: 					"Dirección IPv6",

			GET_IPV6_WAY: 				"Obtener dirección IPv6",
			AUTOMATICALLY: 				"Obtener automáticamente",
			SPECIFIED_BY_ISP: 			"Especificado por el ISP",

			IPV6_ADDR_PREFIX: 			"Prefijo de dirección IPv6",
			NONE_TEMPORARY: 			"No temporal",

			PREFIX_DELEGATION: 			"Delegación prefijo",
			ENABLE: 					"Activar",
			DISABLE: 					"Desactivar",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Longitud de la máscara IPv4",
			CONFIG_TYPE: 				"Tipo de configuración",
			RD6_PREFIX: 				"Prefijo 6RD",
			RD6_PREFIX_LENGTH: 			"Longitud del prefijo 6RD",
			REPLY_IPV4_ADDR: 			"Dirección IPv4 de límite de respuesta",
			MANUAL: 					"Manual",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"RDNSS",
			LOCAL_IPV6: 				"Dirección IPv6 local",
			PEER_IPV6: 					"Dirección IPv6 Par",
			TUNNEL_ADDR: 				"Dirección del tunel",
			IPV4_NETMASK: 				"Máscara de red IPv4",
			CUSTOM: 					"Personalizado",
		    AFTR_NAME: 					"Nombre AFTR",
			PPP_SHARE_V6:				"Misma sesión PPPoE que en la conexión IPv4",
			PPP_SHARE_V4:				"Misma sesión PPPoE que en la conexión IPv6",

			
			
			IPV4_ADDR: 					"Dirección IPv4",
			IPV4_MASK: 					"Máscara de Subred IPv4",
			IPV4_GATEWAY: 				"Puerta de enlace predetermina IPv4",
			TUNNEL_ADDR: 				"Dirección del tunel",

			DUPLEX: 					"Duplex",
			AUTO_NEGOTIATION: 			"Auto-Negociación",
			FULL_DUPLEX_1000: 			"1000Mbps duplex completo",
			HALF_DUPLEX_1000:			"1000Mbps medio duplex",
			FULL_DUPLEX_100: 			"100Mbps duplex completo",
			HALF_DUPLEX_100: 			"100Mbps medio duplex",
			FULL_DUPLEX_10: 			"10Mbps duplex completo",
			HALF_DUPLEX_10: 			"10Mbps medio duplex"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"Dirección MAC",
			IP_ADDRESS: 				"Dirección IP",
			SUBNET_MASK: 				"Máscara de Subred",
			CUSTOM: 					"Personalizado",

			IGMP: 						"Habilitar Proxy IGMP",
			

			ASSIGNED_TYPE: 				"DHCP",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Stateless DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Prefijo de la dirección",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Dirección",
			DELEFATED: 					"Delegado",
			STATIC: 					"Estático",
			SITE_PREFIX: 				"Prefijo del emplazamiento",
			SITE_PREFIX_LEN: 			"Longitud del prefijo del emplazamiento",

			PREFIX_TYPE:  				"Tipo de configuración del prefijo del emplazamiento",
			LAN_IPV6_ADDR:  			"Habilitar Address IPV",

			RELEASE_TIME: 				"Tiempo de liberación",
			RELEASE_TIME_TIP: 			"segundos. (El valor por defecto es 86400, no cambiar a menos que sea necesario.)",
			ADDRESS:					"Dirección",
			SAVE: 						"Guardar",

			REBOOT_TIP: 				"El router es redireccioándose a la nueva página de acceso. <br/>  Por favor espere…"

		},

		IPTV:{
			TITLE: 						"Configuración",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "IPTV", 
			MODE:  						"Modo",
			IGMP_PROXY: 				"Proxy IGMP",
			IGMP_VERSION: 				"Versión IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Puente",
			BASIC: 						"Personalizado",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Singapore-ExStream",
			UNIFY:  					"Malaysia-Unif",
			MAXIS:  					"Malaysia-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internet",
			IP_PHONE: 					"Teléfono-IP", 

			Q_TAG: 						"Etiquetado 802.1Q",
			ENABLE: 					"Activar",
			
			INTERNET_VLAN_ID: 			"ID Vlan Internet",
			INTERNET_VLAN_PRIORITY: 	"Prioridad Vlan Internet",
			IP_PHONE_VLAN_ID: 			"ID Vlan Teléfono-IP",
			IP_PHONE_VLAN_PRIORITY: 	"Prioridad Vlan Teléfono-IP",
			IPTV_VLAN_ID: 				"ID Vlan IPTV",
			IPTV_VLAN_PRIORITY: 		"Prioridad Vlan IPTV",
			IPTV_MULTI_VLAN_ID: 		"ID Vlan Multicast IPTV",
			IPTV_MULTI_VLAN_PRIORITY: 	"Prioridad Vlan IPTV Multicast"
		},

		DHCP_SERVER: {
			TITLE: 						"Servidor DHCP",
			
			SETTINGS: 					"Configuración",

			DHCP_SERVER: 				"Servidor DHCP",
			ENABLE_DHCP_SERVER: 		"Activar Servidor DHCP",

			IP_ADDR_POOL: 				"Rango de direcciones IP",
			LEASETIME: 					"Tiempo de concesión de direcciones",
			LEASENOTE: 					"minutos.(1-2880. El valor por defecto es 120.)",
			
			GATEWAY: 					"Puerta de enlace predeterminada",
			DOMAIN: 					"Dominio predeterminado",
			PRIMARYDNS: 				"DNS Primario",
			SECONDARYDNS: 				"DNS Secundario",

			OPTIONAL: 					"(Opcional)",

			CLIENTSLIST: 				"Lista de clientes DHCP",
			CLIENT_NUMBER: 				"Número de clientes",
			CLIENT_NAME: 				"Nombre de cliente",
			MAC_ADDR: 					"Dirección MAC",
			ASSIGNED_IP: 				"Dirección IP asignada",
			LEASE_TIME: 				"Tiempo de Concesión",

			RESERVATION: 				"Reserva de direcciones",

			RESERVED_IP: 				"Dirección IP reservada",
			IP_ADDRESS: 				"Dirección IP",
			DESCRIPTION: 				"Descripción",

			CLIENTSLIST: 				"Lista de clientes DHCP",
			CLIENT_NUMBER: 				"Número de clientes",

			ENABLE: 					"Activar",
			ENABLE_THIS_ENTRY: 			"Activar"
			
		},

		DDNS: {
			DDNS: 						"DNS Dinámico",
			SERVICEPROVIDER: 			"Proveedor de Servicios",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Ir al registro…",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			DOMAIN_NAME_LIST: 			"Lista de Nombres de Dominio",
			DOMAIN_NAME: 				"Nombre de dominio",
			LOGIN: 						"Acceder",
			LOGIN_SAVE: 				"Acceder y guardar", 
			LOGOUT: 					"Salir",
			STATU_SUCCESS:				"¡Con Éxito!",
			UPDATE_INTERVAL:			"Intervalo de actualización",
			ONE_HOUR:					"1 hora",
			SIX_HOUR:					"6 horas",
			TWETEEN_HOUR:				"12 horas",
			ONE_DAY:					"1 día",
			TWO_DAY:					"2 días",
			THREE_DAY:					"3 días",
			NEVER:						"Nunca",
			UPDATE:						"Actualizar",
			STATU_INCORRENT:			"Nombre de usuario o contraseña incorrecta.",
			STATU_ERR_DOMAIN:			"Nombre de dominio incorrecto",
			WAN_IP_BIND: 				"Blindaje WAN IP",
			CURRENT_DOMAIN: 			"Nombre de dominio actual",
			REGISTER: 					"Registrar",
			BIND: 						"Vincular",
			UNBIND: 					"Desvincular",
			TITLE: 						"DDNS No disponible",
			CONTENT: 					"Para utilizar nuestro servicio DDNS superior de TP-Link, por favor, <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\"> Iniciar sesión </a> con su ID de TP-Link, o seleccione otro proveedor de servicios.",
			STATU_NO_LAUNCH:			"No está ejecutándose",
			STATU_FAIL_DDNS: 			"Fallo al actualizar DDNS.",
			STATU_FAIL_NOIP: 			"Fallo al actualizar NO-IP.",
			DISABLE: 					"Desactivar",
			ENABLE: 					"Activar",	
			STATU_NO_LAUNCH:			"Fallo al actualizar DDNS.",
			STATU_CONN:					"Conectando",
			WAN_IP_BIND: 				"Blindaje WAN IP",
			TIME: 						"Fecha Registrada",
			BOUND: 						"Límite",
			FREE: 						"Gratis",
			SORRY: 						"Error.",
			UNBIND_NOTE:          		"Si quiere vincular el %domain% a su dispositivo, por favor desvincule primero el nombre de dominio actual."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Enrutado Avanzado",
			STATIC_ROUTING: 			"Enrutamiento estático",

			DESTINATION_NETWORK:		"Red de destino",
			SUBNET_MASK: 				"Máscara de Subred",
			DEFAULT_GATEWAY: 			"Puerta de enlace predeterminada",
			DESCRIPTION: 				"Descripción",
			
			SYSTEM_ROUTING_TABLE: 		"Tabla de enrutamiento del sistema",
			CLIENT_NUMBER: 				"Número de clientes",

			GATEWAY: 					"Puerta de Enlace Predeterminada",
			INTERFACE: 					"Interfaz",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Activar",
			ENABLE_THIS_ENTRY: 			"Activar"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Configuración",
			NOT_SUPPORT_5G: 			"La región solo soporta 2,4GHz. Por favor, asegúrese de que selecciona la región correcta.",

			REGION: 					"País",
			NOTICE:  					"Para utilizar la función inalámbrica, debe mantener el botón inalámbrico encendido.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Configuraciones de Red Inalámbrica",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Activar Señal Inalámbrica",

			WIRELESS_NETWORK_NAME: 		"Nombre de Red Inalámbrica (SSID)",
			WIRELESS_PASSWORD: 			"Contraseña",
			HIDE_SSID: 					"Ocultar SSID",

			SECURITY: 					"Seguridad",
			NO_SECURITY: 				"Sin seguridad",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - Personal (Recomendado)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - Empresarial",
			WEP: 						"WEP",

			VERSION: 					"Versión",

			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Encriptación",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Modo",
			MODE_B:  					"Sólo 802.11b",
			MODE_G:  					"Sólo 802.11g",
			MODE_N:  					"Sólo 802.11n",
			MODE_BG:  					"802.11b/g mixto",
			MODE_GN: 					"802.11g/n mixto",
			MODE_BGN:  					"802.11b/g/n mixto",

			MODE_A_5: 					"802.11a/n solo",
			MODE_AN_5: 					"802.11a/n mixto",
			MODE_N_5: 					"Sólo 802.11n",
			MODE_AC_5:					"802.11ac/n solo",
			MODE_NAC_5:					"802.11n/ac mixto",
			MODE_ANAC_5:				"802.11a/n/ac mixto",


			CHANNEL_WIDTH: 				"Ancho del canal",
			CHANNEL: 					"Canal",

			TRANSMIT_POWER: 			"Fuerza de transmisión",

			RADIUS_SERVER_IP: 			"Servidor RADIUS IP",
			RADIUS_PORT: 				"Port RADIUS",
			RADIUS_PASSWORD: 			"Contraseña RADIUS",

			TYPE: 						"Tipo",
			OPEN_SYSTEM: 				"Sistema abierto",
			SHARED_KEY: 				"Clave compartida",

			KEY_SELECTED: 				"Clave Seleccionada",
			KEY1: 						"Clave1",
			KEY2: 						"Clave2",
			KEY3: 						"Clave3",
			KEY4: 						"Clave4",

			WEP_KEY_FORMAT: 			"Formato de clave WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimales",

			KEY_TYPE: 					"Tipo de clave",
			BIT64: 						"64-bit",
			BIT128: 					"128-bit",
			BIT152: 					"152Bit",

			KEY_VALUE: 					"Valor de la clave",
			
			MHZ: 						"MHz",
			MHZ20: 						"20MHz",
			MHZ40: 						"40MHz",
			MHZ80: 						"80MHz",
			
			LOW: 						"Baja",
			MIDDLE: 					"Media",
			HIGH: 						"Alta"
		},

		WPS: {

			TITLE2: 					"PIN del router",
			ROUTERS_PIN_INFO: 			"Otros dispositivos pueden conectarse a este router por WPS introduciendo el código PIN del router.",
			ENABLE_ROUTE_PIN: 			"PIN del router",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Generar",
			DFT: 						"Por defecto",

			TITLE: 						"Ayuda WPS",
			SELECT_SETUP: 				"Seleccionar un método de configuración",
			PUSH_BTN: 					"Pulsar botón (Recomendado)",
			PUSH_DES: 					"Pulsar el botón del router o pulsar en \"Conectar\" en esta página.",
			CONNECT: 					"Conectar",
			CANCEL: 					"Cancelar",

			RESULT_HEAD: 				"El cliente inalámbrico",
			RESULT_END: 				"ha sido añadido a la red satisfactoriamente",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"No encontrado",
			ENTER_CLIENT_PIN: 			"Introducir el PIN del cliente",
			SWITCH_NOTE:				"Nota: Para utilizar WPS, priemro debe encender la función inalámbrica.",
			SWITCH_NOTE2:				"Nota: Para utilizar WPS, priemro configure los parámetro inalámbricos correctos.",
			STATUS_PIN_ERROR: 			"PIN WPS no válido. Por favor, compruebe que es correcto.",
			STATUS_ERROR: 				"Error.",
			STATUS_CONN_ERROR: 			"La conexión ha fallado.",
			STATUS_CONNING: 			"Conectando...",
			STATUS_CANCEL: 				"Conexión cancelada.",
			
			NOTE: 						"Nota:",
			
			STATUS_CONN_OVERLAP: 		"La conexión ha fallado(OVERLAP).",
			STATUS_CONN_TIMEOUT: 		"La conexión ha fallado(TIMEOUT).",
			STATUS_CONN_INACT: 			"Conexión inactiva."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Estaciones inalámbricas en línea",
			CLIENT_NUMBER: 				"Número de clientes",
			MAC_ADDRESS: 				"Dirección MAC",
			CONN_TYPE: 					"Tipo de Conexión",
			SECURITY: 					"Seguridad",
			RECEIVED_PACKETS: 			"Paquetes recibidos",
			SEND_PACKETS: 				"Paquetes enviados"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Configuración",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Permitir que los clientes se vean entre ellos",
			
			ALLOW_LOCAL: 				"Permitir que los clientes accedan a mi red local",
			
			WIRELESS: 					"Red inalámbrica",
			WIRELESS_24G_RADIO: 		"Wi-Fi 2.4GHz",
			WIRELESS_5G_RADIO: 			"Wi-Fi 5GHz",
			ENABLE_GUEST: 				"Activar señal inalámbrica",

			NAME_SSID: 					"Nombre de Red Inalámbrica (SSID)",
			HIDE_SSID: 					"Ocultar SSID",

			SECURITY: 					"Seguridad",
			NO_SECURITY: 				"Sin seguridad",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal",

			VERSION: 					"Versión",
			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Encriptación",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Contraseña"
		},

		NAT:{
			SETTINGS: 					"NAT de Hardware",
			STATUS: 					"NAT de Hardware",
			
			ALG_TITLE: 					"Puerta de enlace de la capa de aplicación (ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"Passthrough PPTP",
			L2TP_ALG: 					"L2TP Passthrough",
			IPSEC_ALG: 					"Passthrough IPSec",

			ENABLE_FTP_ALG: 			"Activar ALG FTP",
			ENABLE_TFTP_ALG: 			"Activar ALG TFTP",
			ENABLE_H323_ALG: 			"Activar ALG H323",
			ENABLE_RTSP_ALG: 			"Activar ALG RTSP",
			ENABLE_PPTP_ALG: 			"Activar Passthrough PPTP",
			ENABLE_L2TP_ALG: 			"Activar Passthrough L2TP",
			ENABLE_IPSEC_ALG: 			"Activar Passthrough IPSec",
			NAT_ENABLE_NOTICE: 			"Nota: Tu configuración no tendrá efecto hasta que la función NAT esté habilitada."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Servidores Virtuales",

			SERVICE_NAME: 				"Tipo de servicio",
			EXTERNAL_PORT: 				"Puerto externo",
			INTERNAL_IP: 				"IP interna",
			INTERNAL_PORT: 				"Puerto interno",
			PROTOCAL: 					"Protocolo",

			BTN_VIEW: 					"Ver servicios existentes",

			EXSITTING_SERVICE: 			"Servicios existentes",
			
			PROTOCAL_ALL: 				"Todos",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX o XX-XX)",
			EXT_PORT_TIPS: 				"(XX o XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX o en Blanco ,1-65535)",

			NOTICE:						"Conflicto con el puerto de gestión remota. ¿Está seguro de que quiere continuar?",

			ENABLE_THIS_ENTRY: 			"Activar",
			OPERATION: 					"Operación",
			CHOOSE: 					"Elegir",
			NAT_ENABLE_NOTICE: 			"Nota: Tu configuración no tendrá efecto hasta que la función NAT esté habilitada."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Disparador de Puertos",
			APPLICATION: 				"Aplicación",
			TRIGGER_PORT: 				"Disparado de puertos",
			TRIGGER_PROTOCOL: 			"Protocolo disparador",

			EXTERNAL_PORTS: 			"Puerto externo",
			EXTERNAL_PROTOCOL: 			"Protocolo externo",

			BTN_VIEW: 					"Ver aplicaciones existentes",

			EXSITTING_APPLICATION: 		"Aplicaciones existentes",
			APPLICATION_NAME: 			"Nombre de aplicación",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX or XX-XX,1-65535, al menos 5 pares)",
			
			ENABLE_THIS_ENTRY: 			"Activar",
			OPERATION: 					"Operación",
			
			PROTOCAL_ALL: 				"Todos",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Nota: Tu configuración no tendrá efecto hasta que la función NAT esté habilitada."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Activar DMZ",
			HARDWARESTATUS: 			"Dirección IP del equipo DMZ",
			NAT_ENABLE_NOTICE: 			"Nota: Tu configuración no tendrá efecto hasta que la función NAT esté habilitada."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Lista de servicio UPnP",
			CLIENT_NUMBER: 				"Número de clientes",
			SERVICE: 					"Descripción del servicio",
			EXTERNAL_PORT: 				"Puerto externo",
			PROTOCAL: 					"Protocolo",
			IP_ADDR: 					"Dirección IP interna",
			INTERNAL_PORT: 				"Puerto interno",
			NAT_ENABLE_NOTICE: 			"Nota: Tu configuración no tendrá efecto hasta que la función NAT esté habilitada."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"Módem USB 3G/4G",
			LOCATION: 					"País",
			MOBILE_ISP: 				"ISP Móvil",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Modo de conexión",
			CONNECT_ON_DEMAND: 			"Conectar por demanda",
			CONNECT_AUTOMATICALLY: 		"Conectar automáticamente",
			CONNECT_MANUALLY: 			"Conectar manualmente",
			MAX_IDLE_TIME: 				"Máximo tiempo de inactividad",
			CONNECTION_TIP: 			"El acceso a internet preferido actualmente es WAN",
			IDLE_TIME_TIP: 				"El modo de conexión y en Tiempp Idle Max podría no ser configurado manualmente.",
			MINUTES: 					"minutos. (0 significa que la conexión siempre estará activa.)",

			AUTHENTICATION_TYPE: 		"Tipo de autenticación",
			AUTO: 						"Auto",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"El valor por defecto es Auto, no lo cambie si no es necesario.",

			CONNECT: 					"Conectar",
			DISCONNECT: 				"Desconectar",

			SET_TIP: 					"Configure el número de marcación APN, Nombre de usuario y Contraseña manualmente",
			DIAL_NUMBER: 				"Número Dial",
			APN: 						"APN",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			OPTIONAL: 					"(Opcional)",
			MTU_SIZE: 					"Tamaño MTU",
			MTU_SIZE_TIP: 				"bytes. (El valor por defecto es 1480, no lo cambie a menos que no sea necesario.)",

			USE_FOLLOW_DNS_SERVER: 		"Utilizar las siguientes direcciones DNS",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",

			UNPLUGGED: 					"Ningún módem USB conectado",
			IDENTIFYING: 				"Identificando...",
			IDENTIFY_SUCCESS: 			"Identificado correctamente"
		},

		DISK_SETTING: {
			DISK_SET: 					"Configuración de dispositivos",
			SCAN: 						"Escanear",
			SELFLY_REMOVE: 				"Extraer de forma segura",
			SCAN_RESULT: 				"Encontrados %n discos",
			NOT_FOUND: 					"No encontrado",
			SELFLY_REMOVE: 				"Extraer de forma segura",
			
			VOLUMN: 					"Volumen",
			CAPACITY: 					"Capacidad",
			FREESPACE: 					"Espacio libre",
			USBSPACE: 					"Espacio Usado",
			
			STATUS: 					"Estado",
			INACT: 						"Descativado",
			ACTIVE: 					"Activar",
			
			USAGE: 						"Uso",
			CAPACITY: 					"Capacidad",
			OPERATION: 					"Operación",	
			
			ACC: 						"Administración de cuentas", 	 	
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			USE_LOGIN: 					"Utilice usuario de inicio de sesión",
			SCAN: 						"Escanear",
			ENJECT_ALL: 				"Expulsar todo",
			ENJECT: 					"Expulsar",
			ADD_USER: 					"Añadir Usuario",
			AUTH: 						"Autoridad"
		},

		FOLDER: {
			TITLE: 						"Configuración medios compartidos",
			ACCOUNT_TITLE: 				"Cuenta Compartida",
			ACCOUNT:					"Cuenta",
			AC_NOTE: 					"Preparar una cuenta de contenidos compartidos. Puede utilizar una cuenta de acceso o crear una nueva.",
			
			AC_LOGIN: 					"Usar la cuenta por defecto",
			AC_FOLLOW: 					"Usar una cuenta nueva",

			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			CONFIRM: 					"Confirmar Contraseña",

			SHARING_SETTING: 			"Configuración medios compartidos",
			SERVER_NAME: 				"Nombre de red/servidor de medios compartidos",

			METHOD: 					"Método de acceso",
			LINK: 						"Enlace",
			PORT: 						"Puerto",

			NETWORK_NEIGHBORHOOD: 		"Redes vecinas",
			FTP: 						"FTP",
			FTPEX: 						"FTP (Vía Internet)",

			SHARE_FOLDER: 				"Compartición de carpetas",
			SHAREING_ALL: 				"Compartir todas",
			NOTE:  						"Actívelo para compartir todos los archivos y carpetas o manténgalo apagado para compartir sólo las carpetas especificadas.", 
			ENABLE_AUTHENTICATION: 		"Activar Autentificación",
			SHAREING_FOLDER: 			"Carpetas compartidas",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Ruta de la carpeta",
			VOLUMN_NAME: 				"Nombre del volumen",

			SHARE_NAME: 				"Nombre de la carpeta",
			FOLDER_PATH: 				"Ruta de la carpeta",
			MEDIA_SHARING: 				"Compartición de medios",
			STATUS: 					"Estado",

			GUEST_ACCESS: 				"Permitir acceso a la red de Invitados",
			ENABLE_AUTHENTICATION: 		"Activar Autentificación",
			ENABLE_WRITE_ACCESS: 		"Activar Permiso de Escritura",
			ENABLE_MEDIA_SHARE: 		"Activar Compartición de medios",
			
			BROWSE: 					"Examinar",
			BROWSE_TITLE: 				"Seleccione una carpeta",

			NO_VOLUMN:					"No existe volumen",
			
			NOTICE: 					"¿Está seguro de que quiere abandonar la página Dynamic DNS? Pulse en Save para guardar y salir. Pulse en Leave without saving para salir sin guardar los cambios. Pulse en Cancel para permanecer aquí.",
			NO_CHANGE_NOTICE: 			"¿Está seguro de que quiere abandonar la página Dynamic DNS?",

			SAVE_FAILED_NOTICE: 		"Fallo al guardar ",
			CONTINUE: 					"Salir",
			CONTINUE_SAVE: 				"Guardar",
			CANCLE: 					"Cancelar",

			ENABLE: 					"Activar"

		},

		PRINT:{
			TITLE: 						"Servidor de impresión",
			NAME: 						"Nombre impresora",
			ENABLE_PRINT_SERVER: 		"Servidor de impresión",
			NONE: 						"Ninguno",
			
			NOTE_TITLE: 				"Nota:",
			STEP1: 						"Paso1:",
			STEP2: 						"Paso2:",
			STEP3: 						"Paso3:",

			NOTE1: 						"Conecte una impresora USB al puerto USB del router a través de un cable USB.",
			NOTE2: 						"Instale el driver de la impresora en su ordenador. Consulte los manuales del fabricante para seguir las instrucciones.",
			NOTE3: 						"Instale la utilidad controlador de impresión de TP-Link, ya sea desde el CD de recursos (sólo para Windows) o descargándola (tanto para Windows como para Mac OS X) de la página web oficial de <a class=\"link\" href=\"%SUPPORT%\" target=\"_blank\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Controles Parentales",
			STATUS: 					"Estado",
			UNKNOWN: 					"Desconocido",

			DEVICE_CTR: 				"Dispositivos bajo control parental",
			DEVICE: 					"Nombre del Dispositivo",
			MAC_ADDRESS: 				"Dirección MAC",
			TIME: 						"Horario de Acceso a Internet",
			DESCRIPTION: 				"Descripción",
			
			ENABLE_THIS_ENTRY: 			"Activar",
			OPTIONAL: 					"(Opcional)",
			BTN_VIEW: 					"Ver dispositivos existentes",
			
			DEVICE_LIST: 				"Lista de dispositivos",
			SYSTEM_TIME: 				"Hora del sistema",
			
			RESTR: 						"Restricciones de contenido",
			MODE: 						"Restricción",
			BLACKMODE: 					"Lista negra",
			WHITEMODE: 					"Lista blanca",
			ACCESS_DEVICES_LIST: 		"Lista de dispositivos de acceso",
			
			CHOOSE: 					"Elegir",
			ADD_A_NEW_KEYWORD: 			"Añadir una nueva palabra clave",
			ADD_A_NEW_DOMAIN_NAME: 		"Añadir un nuevo nombre de dominio"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Internet",
			ROUTER: 					"Router ",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Otros",

			DEVICE: 					"Dispositivo",
			RATE: 						"Velocidad",
			APPLICATION: 				"Aplicación",

			NAME: 						"Nombre",
			MAC_ADDRESS: 				"Dirección MAC",
			IP_ADDRESS: 				"Dirección IP",


			DEVICES: 					"Dispositivos"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Ancho de banda",
			TEST_BANDWIDTH: 			"> Probar Ancho de Banda",
			STREAMBOOST: 				"Streamboost",
			ENABLE_STREAMBOOST: 		"Habilitar streamboost",
			UP_LIMITATION: 				"Limitación de subida(Mbps)",
			DOWN_LIMITATION: 			"Limitación de bajada(Mbps)",
			RUN_BANDWIDTH_TEST: 		"Ejecutar prueba de ancho de banda",
			TESTING: 					"Probando",
			TEST_FAILED: 				"Prueba fallida",
			TEST_SUCCEED: 				"Prueba superada",
			ENABLE_AUTOMATIC_TEST: 		"Habilitar prueba automática",
			KEEP_UP_TO_DATE: 			"Mantener StreamBoost hasta la fecha",
			ENABLE_AUTOMATIC_UPDATE: 	"Habilitar actualizaciones automáticas"

		},

		PRIORITY:{
			PRIORITY: 					"Prioridad",
			PRIORITY_TIPS: 				"La prioridad le permite cambiar la importancia de un dispositivo sobre otro. Esto se utiliza cuando el dispositivo está compitiendo por el ancho de banda limitado con alguna aplicación de la misma clasificación.",
			ALL_DEVICE: 				"Todos los dispositivos",
			ACTIVE_DEVICE: 				"Dispositivo activo",
			SAVE: 						"Guardar",
			ID: 						"ID",
			DEVICE: 					"Dispositivo",
			TYPE: 						"Tipo",
			MAC_ADDRESS: 				"Dirección MAC",
			STICK: 						"Barra"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Estadísticas",
			UP_TIME: 					"Tiempo de subida",
			DOWNLOADS: 					"Descargas",
			LAST_DAY: 					"Último día",
			LAST_WEEK: 					"ültima semana",
			LAST_MONTH: 				"Último mes",
			ALL_LAN_HOSTS: 				"Todos los Hosts LAN",
			OTHER: 						"Otros"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Cortafuegos",
			ENABLE_SPI: 				"Firewall SPI",

			DOS_PROTECTION: 			"Protección DoS",
			ENABLE_DOS: 				"Protección DoS",
			
			OFF: 						"Apagado",
			LOW: 						"Baja",
			MIDDLE: 					"Media",
			HIGH: 						"Alta",

			ICMP: 						"Filtrado de ataques ICMP-FLOOD",
			UDP: 						"Filtrado de ataques UDP-FLOOD",
			TCP: 						"Filtrado de ataques TCP-SYN-FLOOD",
			ENABLE_DOS_TIP:             "La protección DoS y las Estadísticas de Tráfico no pueden estar activos al mismo tiempo.",

			IGNORE: 					"Ignorar paquetes Ping desde un puerto WAN",
			FORBID: 					"Prohibir paquetes Ping desde un puerto LAN",

			BLOCK_DOS: 					"Lista de equipos bloqueados DoS",
			HOST_NUMBER: 				"Número de equipo",
			IP_ADDRESS: 				"Dirección IP",
			MAC_ADDRESS: 				"Dirección MAC"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Control de acceso",
			ENABLE_ACCESS: 				"Control de acceso",

			ACCESS_MODE: 				"Modo de acceso",
			DEFAULT_ACCESS_MODE: 		"Modo de acceso predeterminado",
			BLACK_LIST: 				"Lista negra",
			WHITE_LIST: 				"Lista blanca",
			
			WIRED:						"Red cableada",
			WIRELESS:					"Red inalámbrica",

			DEVICE_ONLINE: 				"Dispositivos en red",
			NAME: 						"Nombre del Dispositivo",
			IP_ADDRESS: 				"Dirección IP",
			MAC_ADDRESS: 				"Dirección MAC",
			CONN_TYPE: 					"Tipo de Conexión",

			BLOCK: 						"Bloquear",

			DEVICE_IN_WHITE: 			"Dispositivos en la lista blanca",
			DEVICE_IN_BLACK: 			"Dispositivos en la lista negra"
		},

		IP_MAC:{
			TITLE: 						"Configuración",
			ENABLE_ARP: 				"Vinculación ARP",

			ARP_LIST: 					"Lista ARP",
			ARP_NUM: 					"Número de entradas ARP",

			MAC_ADDRESS: 				"Dirección MAC",
			IP_ADDRESS: 				"Dirección IP",
			BOUND: 						"Límite",
			UNBOUND: 					"Sin límite",

			BINDING_LIST: 				"Lista de vinculación",
			DESCRIPTION: 				"Descripción",
			OPTIONAL: 					"(Opcional)",
			ENABLE_THIS_ENTRY: 			"Activar"
		},

		TIMESET: {
			TITLE: 						"Configurarciones de la hora",
			ZONE: 						"Zona horaria",
			DATE: 						"Fecha",
			DATEFORMAT: 				"MM/DD/AAAA",
			TIME: 						"Hora",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"Servidor NTP I",
			NTP2: 						"Servidor NTP II",
			OPTIONAL: 					"(Opcional)",

			CURRENT_TIME:  				"Hora actual",
			SET_TIME: 					"Configurar Hora",
			AUTOMATIC: 					"Obtener automáticamente de Internet",
			MANUAL: 					"Manualmente",
			AUTOMATIC_BTN: 				"Obtener",


			GETGMT: 					"Obtener GMT",

			
			GETGMT_SUCCESS: 			"Obtener hora del servidor NTP con éxito",
			GETGMT_TIMEOUT: 			"Obtener hora del servidor NTP tiempo superado",
			GETGMT_WAIT: 				"Esperando",
			
			M: 							"M",
			W: 							"S",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Horario de verano",
			ENABLE_DAYLIGHT: 			"Habilitar horario de verano",
			START: 						"Empezar",
			END: 						"Terminar",

			RUNNING_STATUS: 			"Estado de ejecución",
			DOWN: 						"Horario de verano apagado",
			UP: 						"Horario de verano activado"
		},

		DIAG:{
			TITLE: 						"Diagnósticos",
			DIAGNOSTIC_TOOL: 			"Herramienta de diagnóstico",
			PING: 						"Ping",
			TRACE: 						"Ruta de trazado",

			IPADDR: 					"Dirección IP/ Nombre de dominio",
			COUNT: 						"Contador Ping",
			
			BASIC: 						"Básico",
			ADVANCED: 					"Avanzado",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Tamaño de paquete Ping",
			PKTUNIT: 					"(4-1472 Bytes)",

			TIMEOUT: 					"Tiempo finalizado del Ping",
			TIMOUTUNIT: 				"(100-2000 milisegundos)",

			TTL: 						"Ruta de trazado Max TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Empezar",
			STOP: 						"Parar"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Su firmware está actualizado",
			TITLE: 						"Actualización de firmware",
			INFO: 						"Información del Dispositivo",
			REMOTE_TITLE: 				"Actualización Online",
			LOCAL_TITLE: 				"Actualización Local",

			NEWFILE: 					"Nuevo archivo Firmware",
			FIRMWAREVERSION: 			"Versión de Firmware",
			HARDWAREVERSION: 			"Versión de Hardware",
			LATESTVERSION: 				"Última Versión",
			CONFIRM_CONTENT:			"¿Quiere actualizar el firmware?",
			WARNING:					"Actualizando firmware… <br/> Para evitar cualquier daño, por favor mantenga el router enchufado y no realice ninguna acción en el router durante el proceso de actualización de firmware.",
			REBOOTING: 					"Reiniciando… <br/> Para evitar cualquier daño, por favor mantenga el router enchufado y no realice ninguna acción en el router durante el proceso de actualización de firmware.",
			DO_NOT_OPERATE: 			"Actualizando firmware… <br/> Para evitar cualquier daño, por favor mantenga el router enchufado y no realice ninguna acción en el router durante el proceso de actualización de firmware.",
			FIRMWARE_UPDATING_NOTE: 	"1. Actualizando el firmware…<br/> Para evitar cualquier daño, por favor mantenga el router encendido y no realice ninguna acción en él durante el proceso de actualización de firmware.",
			REBOOTING_NOTE: 			"2. Reiniciando…<br/>Para evitar cualquier daño, por favor mantenga el router encendido y no realice ninguna acción en él durante el proceso de actualización de firmware.",
			SCREEN_UPDATING_NOTE: 		"3. Actualizando Pantalla…<br/>Para evitar cualquier daño, por favor mantenga el router encendido y no realice ninguna acción en él durante el proceso de actualización de firmware.",
			UPGRADE_FAILED: 			"Actualización fallida.",
			UPGRADE: 					"Actualizar versión",
			CHECK: 						"Comprobación",
			DOWNLOADING: 				"Descargando… <br/> Para evitar cualquier daño, por favor mantenga el router enchufado y no realice ninguna acción en el router durante el proceso de actualización de firmware.",
			UPGRADE_INOF: 				"Para evitar cualquier daño, por favor mantenga encendido el router.",
			NOTE: 						"Nota:",
			NO_UPGRADE: 				"Esta es la última versión",

			UPGRADING: 					"Actualizando… <br/> Para evitar cualquier daño, por favor mantenga el router enchufado y no realice ninguna acción en el router durante el proceso de actualización de firmware.",
			RETRY: 						"Reintentar",
			CANCEL: 					"Cancelar",
			ILEGAL_DEVICE:              "Imposible identificar el dispositivo. Por favor contacte con el soporte técnico de TP-Link.",
			UPGRADE_FAIL: 				"Imposible actualizar. Por favor inténtelo de nuevo más tarde.",
            CONFIG_RESET_NOTE:          "Su configuración actual se perderán después de actualizar esta versión.",
			CHECK_UPGRADE: 				"Comprobar si hay actualización"
		},

		BACKUP:{
			BACKUP: 					"Copia de seguridad",
			BACKUPTIP: 					"Guarde una copia de la configuración actual.",

			RESTORE: 					"Restaurar",
			RESTORETIP: 				"Restaurar la configuración guardada en un archivo",
			
			RESTORE_WARN:				"Router restaurándose… <br/> Por favor, no realice ninguna operación durante el proceso.",
			RESTORE_CONFIRM_CONTENT: 	"¿Está seguro de que quiere cargar los valores del router desde un fichero de configuración?",
			
			FILE: 						"Archivo",

			FACTORY: 					"Restaurar configuración prederteminada de fábrica",
			FACTORYTIP: 				"Revierte toda la configuración hasta los valores de fábrica",
			RESETTIP:					"Restaura toda la configuración a valores por defecto, excepto su información de acceso y cuenta cloud.",
			FACTORY_CONFIRM_CONTENT:	"¿Está seguro de que quiere restaurar los valores de fábrica del router?",
			FACTORY_WARN:				"Router restaurándose… <br/> Por favor, no realice ninguna operación durante el proceso.",
			
			BACKUPBTN: 					"Copia de seguridad",
			RESTOREBTN: 				"Restaurar",
			RESETBTN:					"Restaurar",
			FACTORYBTN: 				"Restaurar de fábrica"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Administración de cuentas",
			
			OLDUSER: 					"Usuario antiguo",
			OLDPWD: 					"Contraseña antigua",

			NEWUSER: 					"Nuevo nombre de usuario",
			NEWPWD: 					"Nueva Contraseña",
			CONFIRM: 					"Confirmar nueva contraseña",

			RECOVERYINFO: 				"Recuperación de contraseña",
			ENABLE_PASSWORD_RECOVERY: 	"Habilitar recuperación de contraseña",
			FROM: 						"Desde",
			TO: 						"Para",
			SMTP_SERVER: 				"Servidor SMTP",
			
			ENABLE_AUTHENTICATION: 		"Activar Autentificación",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",

			TEST_MAIL: 					"Correo de confirmación",

			LOCAL:						"Administración Local",
			LOCAL_MAC_AUTH: 			"Autenticación MAC Local",
			ACCESS: 					"Acceso para todos los dispositivos conectados en LAN",
			ACCESS_TIPS: 				"Cambia a Encendido para habilitar la administración de todos los dispositivos de la red LAN o mantenerlo Apagado para habilitar la administración de un dispositivo específico.",
			
			MAC_ADDRESS: 				"Dirección MAC",
			VIEW_BTN: 					"Ver dispositivos existentes",
			DESCRIPTION: 				"Descripción",

			EXIST_DEVICE:               "Dispositivos existentes",

			OPTIONAL: 					"(Opcional)",
			ENABLE_THIS_ENTRY: 			"Activar",

			DEVICE_NAME:				"Nombre del Dispositivo",
			IP_ADDRESS:					"Dirección IP",
			

			REMOTE: 					"Control Remoto",
			DISABLE_REMOTE_MANAGEMENR: 	"Desactivar el control remoto",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Activar el control remoto para todos los dispositivos",
			ENABLE_REMOTE_MANAGEMENR: 	"Activar el control remoto para los dispositivos especificados",
			WEB: 						"Puerto de control Web",

			NOTICE:						"Conflicto con el puerto del servidor virtual. ¿Está seguro de que quiere continuar?",

			REMOTEIP: 					"Dirección IP de control remoto",
			REMOTEIPNOTE: 				"(Introduzca 255,255,255,255 para todos)"
			
		},

		SYSLOG:{
			TITLE: 						"Registro de Sistema",
			LOG_FILTER: 				"Filtro Log:",
			
			TYPE_EQ: 					"Tipo=",
			
			ALL: 						"Todos",

			FIREWALL: 					"Cortafuegos", 
			NAT: 						"NAT",
			DDNS: 						"DNS Dinámico",
			UPNP:						"UPnP",
			IMB:            			"Blindaje IP&MAC",
			IPTV:						"IPTV",
			DHCPS:						"Servidor DHCP",
			IGMP_PROXY:					"Proxy IGMP",
			DOMAIN_LOGIN:				"Iniciar sesión en dominio",
			BASIC_SECURITY: 			"Seguridad Básica",
			PARENTAL_CONTROL: 			"Controles Parentales",
			ACCESS_CONTROL: 			"Control de acceso",
			DOS_PROTECTION: 			"Protección DoS",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Estadísticas del tráfico",
			TIME_SETTINGS: 				"Configurarciones de la hora",
			ACCOUNT_MANAGEMENT: 		"Administración de cuentas",
			LOCAL_MANAGEMENT: 			"Administración Local",
			REMOTE_MANAGEMENT: 			"Control Remoto",
			LOCALE: 					"Local",
			FACTORY_RESET: 				"Reset de fábrica",
			LED_CONTROLLER: 			"Controlador Led",
			NETWORK: 					"Red",
			USBSHARE: 					"Compartir USB",
			AND: 						"y",
			LEVEL: 						"Nivel",
			EMERGENCY:					"EMERGENCIA",
			ALERT:						"ALERTA",
			CRITICAL:					"CRÍTICO",
			ERROR: 						"ERROR",
			WARNING: 					"PELIGRO",
			NOTICE: 					"NOTICIA",
			INFO: 						"INFO",
			DEBUG: 						"DEPURAR",

			INDEX: 						"Índice",
			TYPE: 						"Tipo",
			TIME: 						"Hora",
			LEVEL_COL:					"Nivel",

			CONTENT: 					"Contenido de registro",
			
			MAIL_LOG: 					"Registro electrónico",
			SAVE_LOG: 					"Guardar registro",

			SEND_OK: 					"Envío correcto",
			SEND_FAILED: 				"Fallo al enviar",

			MAIL_SETTING: 				"Configuración de correo",

 			FROM: 						"Desde",
 			TO: 						"Para",
 			SMTP_SERVER: 				"Servidor SMTP",
 			ENABLE_AUTHENTICATION: 		"Activar Autentificación",

 			USERNAME: 					"Nombre de Usuario",
 			PASSWORD: 					"Contraseña",
 			CONFIRM_PASSWORD: 			"Confirmar Contraseña",

 			AUTO_MAIL: 					"Habilitar Correo Automático",
 			LOG_AT: 					"Registre a",
 			HH_MM: 						"(HH:MM) todos los días",

 			LOG_EVERY: 					"Registre todo",
 			HOURS: 						"Horas"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Configuración",
			STATUS: 					"Activar QoS",
			UPBANDWIDTH: 				"Ancho de banda de subida",
			DOWNBANDWIDTH: 				"Ancho de banda de bajada",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"kbps",
			TEST: 						"Prueba de velocidad",
			RULE_LIST: 					"Lista de reglas QoS",
			RULE: 						"Regla QoS",
			ID: 						"ID",
			NAME: 						"Nombre",
			TYPE: 						"Tipo",
			DETAIL: 					"Detalle",
			PRIORITY: 					"Prioridad",

			APPLICATION: 				"Aplicación",
			APPLICATION_LIST: 			"Lista de Aplicaciones",
			CUSTOM_APP: 				"Aplicación personalizada",
			MAC_ADDR: 					"Dirección MAC",
			MAC_ADDR_P: 				"MAC",
			IP_ADDR: 					"Dirección IP",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Puerto físico",

			LOW: 						"Baja",
			MIDDLE: 					"Media",
			HIGH: 						"Alta",

			PROTO: 						"Protocolo",
			PORT: 						"Puerto",
			PROTO_P: 					"Protocolo",
			PORT_P: 					"Puerto",
			PORT_TIPS: 					"(XX or XX-XX,1-65535, al menos 5 pares)",

			ALL: 						"Todos",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Personalizado",

			WIFI_HOME: 					"Equipo WIFI",
			WIFI_GUEST: 				"Invitado WIFI",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Actualizar versión de la  base de datos",

			NEWFILE: 					"Nuevo archivo de base de datos",
			FIRMWAREVERSION: 			"Versión de la base de datos",
			CONFIRM_CONTENT:			"¿Está seguro de que quiere actualizar la base de datos?",
			WARNING:					"Actualizando Base de datos… <br/> Por favor, no realice ninguna operación durante el proceso.",
			
			UPGRADE: 					"Actualizar versión",

			SERVICE_RESTART: 			"Reiniciando servicio QoS",
			
			TYPE: 						"Tipo",
			BY_DEVICE: 					"Por dispositivo",
			BY_APP: 					"Por aplicación",
			BY_PHY: 					"Por puerto físico",

			HIGH_PRIORITY_LBL: 			"Prioridad alta:",
			MIDDLE_PRIORITY_LBL: 		"Prioridad media:",
			LOW_PRIORITY_LBL: 			"Prioridad baja:",

			HIGH_PRIORITY: 				"Prioridad alta",
			MIDDLE_PRIORITY: 			"Prioridad media",
			LOW_PRIORITY: 				"Prioridad baja"

		},

		APPLICATION:{
			APP_LIST: 					"Lista de Aplicaciones",
			GAME_LIST: 					"Lista de juegos",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Estadísticas del tráfico",
			ENABLE_STATISTICS: 			"Estadísticas del tráfico",

			TITLE: 						"Lista de las estadísticas del tráfico",
			IP_MAC: 					"Dirección IP/Dirección MAC",
			TPKT: 						"Paquetes totales",
			TBYTE: 						"Bytes totales",
			CPKT: 						"Paquetes actuales",
			CBYTE: 						"Bytes actuales",
			CICMP: 						"ICMP Tx actual",
			CUDP: 						"UDP Tx actual",
			CSYN: 						"SYN Tx actual",
			
			DELETE_CONFIRM: 			"¿Está seguro de que quiere eliminar las estadísticas de tráfico?",
			DELETE_ALL_CONFIRM: 		"¿Está seguro de que quiere eliminar todas las estadísticas de tráfico?",

			RESET_ALL: 					"Resetear todo"
		},

		SYSPARA:{
			W24G: 						"Wi-Fi 2.4GHz",
			W5G: 						"Wi-Fi 5GHz",
			SWITCH_NOTICE:  			"Su función inalámbrica está desactivada. Si quiere usar esta función, por favor pulse en botón WiFi.",

			ENABLE_TIPS: 				"Su función inalámbrica está desactivada.",

			BEACON: 					"Intervalo Beacon",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"Umbral RTS",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Umbral de fragmentación",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"Intervalo DTIM",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Período de actualización de la clave de grupo",
			GROUPUNIT: 					"segundos",
			
			
			WMM_FEATURE: 				"Características WMM",
			WMM: 						"Habilitar WMM",

			GI_FEATURE: 				"Característica Intervalo de Guardia",
			GI: 						"Habilitar Intervalo de Guardia",

			AP_FEATURE: 				"Característica Aislamiento de AP",
			AP: 						"Habilitar Aislamiento AP",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Activar TxBF",

			WDS_FEATURE: 				"Puente WDS",
			WDS: 						"Habilitar puente WDS",
			
			SSID_BRIDEGE: 				"SSID (para ser puenteada)",
			SURVEY: 					"Inspección",

			SN: 						"SN",
			MAC_ADDRESS: 				"Dirección MAC",
			SSID: 						"SSID",
			SIGNAL: 					"Señal",
			CHANNEL: 					"Canal",
			SECURITY: 					"Seguridad",
			CHOSEN: 					"Elegido",
			AP_NUMBER:					"Número AP",

			TOTAL: 						"Ítems totales",

			MAC: 						"Dirección MAC (a ser puenteada)",
			MACUNIT: 					"Ejemplo: 00-1D-0F-11-22-33",

			SECURITY: 					"Seguridad",
			NO: 						"No",
			NONE: 						"Sin seguridad",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Contraseña",
			
			AUTH_TYPE: 					"Tipo de autenticación",
			AUTO: 						"Auto",
			OPEN: 						"Sistema abierto",
			SHARED: 					"Clave compartida",

			WEP_INDEX: 					"Índice WEP",
			KEY1: 						"Clave1",
			KEY2: 						"Clave2",
			KEY3: 						"Clave3",
			KEY4: 						"Clave4",

			WEP_KEY_FORMAT: 			"Formato de clave WEP",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimales",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Habilitar WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Habilitar NAT",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"Habilitar NAT Boost",
			
			MEDIA_SERVER: 				"Servidor multimedia",
			SCAN_INTERVAL: 				"Intervalo de auto búsqueda (Horas)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Configuración del nivel de protección DoS",

			ICMP: 						"Nivel de paquetes ICMP-FLOOD",
			UDP: 						"Nivel de paquetes UDP-FLOOD",
			TCP: 						"Nivel de paquetes TCP-FLOOD",

			WDS_MODE: 					"Modo WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Baja",
			MIDDLE: 					"Media",
			HIGH: 						"Alta",

			TO: 						"Para",
			NOTICE_NAT_REBOOT: 			"Reiniciando… <br/>Por favor NO realice ninguna acción durante el proceso.",

			NOTICE_NAT_BOOST: 			"La modificación de NAT Boost se hará efectiva cuando reinicie el dispositivo, ¿está seguro de que desea continuar?",
			NOTICE:						"Your router's channel is not the same with the bridged AP's channel. Do you want to change it?",

			UNIT: 						"(5-7200)Paquetes/Segundos",
			LED: 						"LED",
			NIGHT_MODE: 				"Modo nocturno",
			PERIOD_NIGHT_TIME: 			"Período de modo noche",
			ENABLE: 					"Activar",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "El LED está apagado. Si desea utilizar esta función, haga clic en el LED en la parte superior derecha de la página.",
			NOTE2:                      "El periodo del modo nocturno se aplica de acuerdo con la hora del sistema del router. Compruebe que haya configurado la hora en el router."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"No hay ningún certificado. <b>Genere</b> uno antes de habilitar el servidor VPN.",
			NO_CERT_NOTE2: 				"No hay ningún certificado. <b>Genere</b> uno después de exportar la configuración.",
			ENABLE_VPN_SERVER: 			"Habilitar servidor VPN",
			SERVICE_TYPE: 				"Tipo de servicio",
			SERVICE_PORT: 				"Puerto de servicio",
			VPN_SUBNET: 				"Subred/Máscara de red VPN",
			CLIENTS_ACCESS: 			"Acceso de cliente",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Solo red doméstica",
			INTERNET_HOME: 				"Internet y red doméstica",
			CERT_STR: 					"No hay ningún certificado. Haga clic en Aceptar para generar uno y guardar la configuración.",
			CERT_STR2: 					"No hay ningún certificado. Haga clic en Aceptar para generar uno y exportar su configuración.",
			CONF_FILE: 					"Archivo de configuración", 
			EXPORT_CONF_FILE: 			"Exporte la configuración.",
			EXPORT: 					"Exportar",

			INSTALL_GUIDE: 				"Guía de instalación del cliente VPN",
			INSTALL_STEP: 				"Para habilitar y conectar sus dispositivos cliente al servidor OpenVPN:",
			INSTALL_NOTICE:				"Antes de configurar el servidor OpenVPN, configure el servicio DNS dinámico (recomendado) o asigne una dirección IP estática para el puerto WAN, y asegúrese de que la hora del sistema es correcta. ",
			INSTALL_NOTE1: 				"Seleccione Habilitar servidor VPN.",
			INSTALL_NOTE2: 				"Antes de configurar el servidor OpenVPN, por favor configure el Servicio de DNS Dinámico (recomendado) o asigne una dirección IP estática para el puerto WAN. Asegúrese que su puerto externo de los ajustes NAT no es el puerto de servicio, que el DMZ esté deshabilitado y también que su Horario de Sistema está correcto.",
			INSTALL_NOTE3: 				"Haga clic en Exportar para guardar el archivo de configuración.",
			INSTALL_NOTE4: 				"En sus dispositivos cliente, descargue e instale la utilidad de cliente OpenVPN en <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Las plataformas compatibles oficiales son Windows, Mac OSX y Linux.",
			INSTALL_NOTE5: 				"Inicie la utilidad de cliente OpenVPN y agregue una nueva conexión VPN con el archivo de configuración guardado para conectar su dispositivo cliente al servidor VPN.",
			NOTE: 						"Para obtener más información sobre los clientes OpenVPN, visite <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Dirección IP de cliente",
			ACCOUNT_USERNAME: 			"Nombre de Usuario",
			ACCOUNT_PASSWORD: 			"Contraseña",
			CLIENT_IP_NOTE: 			"(hasta 10 clientes)",
			SAME_SUBNET_NOTE: 			"La dirección IP del cliente y la dirección IP LAN no pueden estar en la misma subred.",
			CONFLICT_WITH_DHCP: 		"La dirección IP del cliente está en conflicto con el rango de direcciones IP del DHCP.",
			CONFLICT_WITH_RESERVED: 	"La dirección IP del cliente está en conflicto con la dirección IP reservada.",
			CONFLICT_WITH_OPENVPN: 		"La dirección IP del cliente y la dirección IP de OpenVPN no pueden estar en la misma subred.",
			SAME_SUBNET_NOTE2: 			"La subred/máscara de red de VPN y la dirección IP de la LAN no pueden estar en la misma subred.",
			CONFLICT_WITH_DHCP2: 		"La Subred/Máscara de red VPN está en conflicto con el rango de direcciones IP del DHCP.",
			CONFLICT_WITH_RESERVED2: 	"La Subred/Máscara de red VPN está en conflicto con la dirección IP reservada.",
			CONFLICT_WITH_PPTPVPN: 		"La Subred/Máscara de red VPN y la dirección IP VPN PPTP no pueden estar en la misma subred.",
			VPN_MASK_ERROR: 			"La máscara de red no puede ser mayor de 255.255.255.248.",
			ACCOUNT_LIST: 				"Lista de Cuentas (hasta 16 usuarios)",
			ADVANCED_SETTING: 			"Avanzado",
			ALLOW_SAMBA: 				"Permitir acceso Samba (Ubicación de Red)",
			ALLOW_NETBIOS: 				"Permitir pasthrough NetBIOS",
			ALLOW_UNENCRYPTED_CONN: 	"Permitir conexiones sin encriptar",
			USERNAME_CONFLICT: 			"Este nombre de usuario ya existe.",
			
			CONNECT_PPTP: 				"Para habilitar y conectar sus dispositivos cliente al servidor PPTP VPN:",
			CONNECT_NOTICE:				"Antes de configurar el servidor PPTP VPN, configure el servicio de DNS dinámico (recomendado) o asigne una dirección IP estática para el puerto WAN. Asegúrese también de que el puerto externo de los ajustes NAT no sea 1723, que DMZ esté deshabilitado y que la hora del sistema sea correcta.",
			CONNECT_NOTE1: 				"Seleccione Habilitar servidor VPN.",
			CONNECT_NOTE2: 				"Configure los parámetros del servidor PPTP VPN y haga clic en Guardar.",
			CONNECT_NOTE3: 				"Cree una conexión PPTP VPN en sus dispositivos cliente. Las plataformas compatibles oficiales son Windows, Mac OSX, Linux, iOS y Android.",
			CONNECT_NOTE4: 				"Inicie el programa PPTP VPN, agregue una nueva conexión e introduzca el nombre de dominio del servicio DDNS registrado o la dirección IP estática asignada al puerto WLAN para conectar su dispositivo cliente al servidor PPTP VPN.",
			
			GENERATE_CERT: 				"Certificado",
			GENERATE_NEW_CERT: 			"Genere el certificado.",
			GENERATE: 					"Generar",
			GENERATE_TIPS: 				"Generando certificado…<br/>Tardará unos minutos, espere.",
			CERT_SUCCESS: 				"Correcto",
			CERT_FAIL: 					"Error, vuelva a intentarlo.",
			
			VPN_CONNECTIONS: 			"Conexiones VPN",
			OPEN_VPN_CONNECTIONS: 		"Conexión OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"Conexión PPTP VPN",
			USER:				"Usuario",
			REMOTE_IP:			"IP Remota",
			ASSIGNED_IP:			"IP Asignada"
		}
	};
})(jQuery);

