(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			EMAIL: 						"correo electrónico",
			FORGET_PASSWORD: 			"¿Olvidó su contraseña?",
			LOGIN: 						"Inicio de Sesión",
			BEGIN: 						"Comencemos",
			IMPORTANT_UPDATE_INFO: 		"Para evitar conflictos de IP con el dispositivo, la dirección IP de su router ha cambiado a",
			CONTINUE: 					"Continuar",

			IMPORTANT_NOTICE: 			"Aviso Importante",
			OR: 						", está seguro que desea continuar con la visita",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Mantenga presionado el botón de Reset durante %SECONDS% segundos para restablecer el router a sus configuraciones predeterminadas de fábrica.",
			FORGET_PASSWORD_INFO_1: 	"Al habilitar la función de Recuperar la Contraseña permite que el sistema envíe un código de verificación a su dirección de correo alternativo para restablecer el nombre de usuario y la contraseña a los ajustes predeterminados de fábrica. ",
			FORGET_PASSWORD_SEND_FAILED:"Error al enviar el código. Por favor revise su conexión de Internet y verifique los parámetros de recuperación de la contraseña en \"Herramientas del Sistema -> Administración\".",

			VERIFICATION_CODE: 			"Código de Verificación",

			RECEIVE_CODE: 				"Enviar Código",

			CONFIRM: 					"Confirmar",
			WELCOME: 					"Bienvenidos a %model% de TP-Link. Por favor inicie la sesión.",
			SEC: 						"s",

			USER_CONFLICT: 				"Conflicto de Inicio de Sesión.",
			FIRST_TIME: 				"Por favor configure su %PRODUCT% para conectarse al Internet primero. Para comenzar, cree una contraseña del dispositivo para administrar su %PRODUCT%.",
			FIRST_TIME1: 				"Por favor cree una contraseña de administrador para manejar su %model%.",
			USER_CONFLICT_INFO: 		"El usuario %USER% con host %HOST% (%IP%/%MAC%) actualmente ha inició la sesión en el Router. No se puede iniciar sesión nuevamente. Por favor intente de nuevo más tarde.",
			USER_CONFLICT_INFO_2: 		"El usuario %USER% (%IP%) actualmente ha inició la sesión en el Router. No se puede iniciar sesión nuevamente. Por favor intente de nuevo más tarde.",
			USER_CONFLICT_INFO_3: "Only one device can log in at a time. Do you want to continue and force the other device to log off?",
			
			LOGIN_FAILED: 				"Falla de Inicio de Sesión.",
			LOGIN_FAILED_COUNT: 		"Ha fallado el inicio de sesión %num1 veces y aún le quedan %num2 intentos.",
			NO_COOKIE: 					"Se deben habilitar las cookies para iniciar sesión. Por favor habilite las cookies o desactive el modo de navegación Privado/de Incógnito.", 

			FORGET_PASSWORD_NOTE: 		"También puede mantener presionado el botón de Reset durante %SECONDS% segundos para restablecer el router al nombre de usuario y contraseña predeterminados de fábrica (admin/admin)."
		},
		INIT: {
			PASSWORD: 					"Contraseña",
			CONFIRM_PASSWORD:				"Confirmar Contraseña",
			BEGIN: 						"Comencemos",
			IMPORTANT_UPDATE_INFO: 		"Para evitar el conflicto con el dispositivo de interfaz del usuario, la dirección IP de su router ha sido actualizado a",
			CONTINUE: 					"Siguiente",

			IMPORTANT_NOTICE: 			"Aviso Importante",
			OR: 						", está seguro que desea continuar con la visita",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Confirmar",

			SEC: 						"s",

			USER_CONFLICT: 				"¡Conflicto de Inicio de Sesión!",
			
			USER_CONFLICT_INFO: 		"El usuario %USER% con el host %HOST% (%IP%/%MAC%) actualmente ha inició la sesión en el Router. No se puede iniciar sesión nuevamente. Por favor intente de nuevo más tarde.",
			USER_CONFLICT_INFO_2: 		"El usuario %USER% (%IP%) actualmente ha inició la sesión en el Router. No se puede iniciar sesión nuevamente. Por favor intente de nuevo más tarde.",
			
			LOGIN_FAILED: 				"¡Falla de Inicio de Sesión!",
			LOGIN_FAILED_COUNT: 		"Ha fallado el inicio de sesión %num1 veces y aún le quedan %num2 intentos.",
			NO_COOKIE: 					"Se deben habilitar las cookies para iniciar sesión. Por favor habilite las cookies o desactive el modo de navegación Privado/de Incógnito.", 

			INIT_NOTE_TITLE: 			"Estimado Cliente,",
			INIT_NOTE_CONTENT: 			"Por favor configure su %PRODUCT% para conectarse al Internet primero. Para comenzar, cree una contraseña del dispositivo para administrar su %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Versión del Firmware: ",
			FEATURE: 						"Modificaciones y Corregir Errores: ",
			TITLE: 							"Se detectó una actualización disponible del firmware.",
			UPGRADE_NOW: 					"Actualizar ahora",
			REMIND: 						"Recordarme más tarde",
			NOTICE:    						"Hola, un firmware nuevo está disponible para el su router.",
			NEVER: 							"Ignorar esta versión"
			
		},

		WAN_ERROR: {
			TITLE: 							"¡Error de conexión del WAN!",
			STATUS: 						"Estado",
			INFO: 							"Información",
			SETUP: 							"Configurar una conexión de Internet",
			NEVER: 							"No recordarme de nuevo"
		},

		OFFLINE_ERROR:{
			TITLE: "Ups ... No podemos alcanzar el servidor en la nube.",
			NOTE1: "1. Asegúrese de que tiene acceso a Internet.",
			NOTE2: "2. El servidor de la nube es inaccesible temporalmente. Por favor, actualice la página más tarde.",
			NOTE3: "3. Si el problema persiste, por favor conecte <a target=\"_blank\" id=\"support\"> TP-Link soporte técnico </a>.",
			ERROR: "Error"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Versión del Firmware:",
			HARDWARE_VERSION: 				"Versión del Hardware:",
			HELP_SUPPORT: 					"Soporte",
			FAQ: 							"Preguntas Frecuentes",
			CONFIRM_REBOOT: 				"¿Está seguro que desea reiniciar el router?",
			CONFIRM_LOGOUT: 				"¿Está seguro que desea finalizar la sesión?",
			UPGRADE_ALERT_1: 				"El firmware actual no soporta el servicio de la nube de TP-Link. Le recomendamos ampliamente que descargue la versión más reciente del firmware en www.tp-link.com y actualícela.",
			UPGRADE_ALERT_2: 				"El firmware actual no soporta el servicio de la nube de TP-Link. Le recomendamos ampliamente que actualice el firmware dando clic en el ícono de Actualizar de la esquina superior derecha.",
			ACCOUNT_UNLOGIN: 				"Cuenta",

			REBOOTING: 						"Reiniciando... <br/>Por favor NO manipule durante el proceso.",

			HELP_APP: "Aplicación",
			CHARACTERS_ILLUSTRETE_TITLE: "Escanea el código QR para descargarla aplicación TP-Link Tether",
			CHARACTERS_ILLUSTRETE_NOTE0: "Administre cómodamente su red desde cualquier dispositivo móvil.",
			CHARACTERS_ILLUSTRETE_NOTE1: "Control completo desde la palma de su mano."
		},

		NAV: {
			QUICK_SETUP: 				"Configuración Rápida",
			BASIC: 						"Básico",
			ADVANCED: 					"Avanzado"
		},

		CONTROL: {
			LOGIN: 						"Inicio de Sesión",
			LOGOUT: 					"Finalizar la sesión",
			UPDATE: 					"Actualizar",
			REBOOT: 					"Reiniciar",
			LED: 						"LED",
			LED_ON: 					"LED Encendido",
			LED_OFF: 					"LED Apagado",
			LED_DISABLED: 				"El estado del LED no puede ser cambiado durante el periodo del modo nocturno"
		},

		LANGUAGE: {
			EN_US: 						"Inglés",
			ZH_CN: 						"简体中文"
		},

		REGION: {
			ALBANIA: 					"Albania",
			ALGERIA: 					"Argelia",
			AMERICAN_SAMOA: 			"Samoa Americana",
			ARGENTINA: 					"Argentina",
			ARMENIA: 					"Armenia",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australia",
			AUSTRIA: 					"Austria",
			AZERBAIJAN: 				"Azerbaiyán",
			BAHAMAS: 					"Bahamas",
			BAHRAIN: 					"Bahréin",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Bielorrusia",
			BELGIUM: 					"Bélgica",
			BELIZE: 					"Belice",
			BERUMUDA: 					"Bermuda",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnia y Herzegovina",
			BRAZIL: 					"Brasil",
			BRUNEI_DARUSSALAM: 			"Brunei Darussalam",
			BULGARIA: 					"Bulgaria",
			CAMBODIA: 					"Camboya",
			CANADA: 					"Canadá",
			CAYMAN_ISLANDS: 			"Islas Caimán",
			CHILE: 						"Chile",
			CHINA: 						"China",
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
			FRENCH_GUIANA: 				"Guayana Francesa",
			FRENCH_POLYNESIA: 			"Polinesia Francesa ",
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
			HONG_KONG: 					"Hong Kong",
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
			KAZAKHSTAN: 				"Kazajistán",
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
			MACAU: 						"Macao",
			MACEDONIA: 					"Macedonia",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malasia",
			MALDIVES: 					"Maldivas",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinica",
			MAURITIUS: 					"Mauricio",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"México",
			MONACO: 					"Mónaco",
			MONGOLIA: 					"Mongolia",
			MOROCCO: 					"Marruecos",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Países Bajos",
			NETHERLANDS_ANTILLES: 		"Antillas Holandesas",

			NEW_ZEALAND: 				"Nueva Zelanda",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Noruega",
			NORTHERN_MARIANA_ISLANDS: 	"Islas Marianas del Norte ",
			OMAN: 						"Omán",
			PAKISTAN: 					"Pakistán",
			PANAMA: 					"Panamá",
			PAPUA_NEW_GUINEA: 			"Papúa Nueva Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Perú",
			PHILIPPINES: 				"Filipinas ",
			POLAND: 					"Polonia",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Catar",
			REUNION: 					"Reunión",
			ROMANIA: 					"Rumania",
			RUSSIA: 					"Rusia",
			RWANDA: 					"Ruanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Arabia Saudita",
			SINGAPORE: 					"Singapur",
			SLOVAK_REPUBLIC: 			"República Eslovaca",
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
			TRINIDAD_TOBAGO: 			"Trinidad y Tobago",
			TUNISIA: 					"Túnez",
			TURKEY: 					"Turquía",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ucrania",
			UNITED_ARAB_EMIRATES: 		"Emiratos Árabes Unidos ",
			UNITED_KINGDOM: 			"Reino Unido",
			UNITED_STATES: 				"Estados Unidos de América",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Uzbekistán",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnam",
			VIRGIN_ISLANDS: 			"Islas Vírgenes  (EE.UU.)",
			YEMEN: 						"Yemen",
			ZIMBABWE: 					"Zimbabue"
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
			ENIWETOK: 					"(GMT-12:00) Enewetak, Kwajalein", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Islas Midway, Samoa",
			HAWAII: 					"(GMT-10:00) Hawái",
			ALASKA: 					"(GMT-09:00) Alaska",
			PACIFIC_TIME: 				"(GMT-08:00) Hora del Pacífico",
			MOUNTAIN_TIME: 				"(GMT-07:00) Hora de las Montañas Rocosas (EE.UU. Y Canadá)",
			CENTRAL_TIME: 				"(GMT-06:00) Hora Central (EE.UU. y Canadá)",
			EASTERN_TIME: 				"(GMT-05:00) Hora del Este (EE.UU. y Canadá)",
			CARACAS:					"(GMT-04:30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04:00) Hora del Atlántico (Canadá)",
			NEWFOUNDLAND: 				"(GMT-03:30) Terranova",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brasilia, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Atlántico Central",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azores, Islas de Cabo Verde",
			GREENWICH_MEAN_TIME: 		"(GMT) Hora Media de Greenwich: Dublín, Londres",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlín, Estocolmo, Roma, Berna, Bruselas",
			ATHENS_HELSINKI: 			"(GMT+02:00) Atenas, Helsinki, Europa del Este, Israel",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Bagdad, Kuwait, Nairobi, Riad, Moscú",

			TEHERAN: 					"(GMT+03:30) Teherán",

			ABU_DHABI: 					"(GMT+04:00) Abu Dabi, Mascate, Kazán, Volgogrado",

			KABUL: 						"(GMT+04:30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Ekaterimburgo",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madrás, Calcuta, Mumbai, Nueva Delhi ",
			KATMANDU: 					"(GMT+05:45) Katmandú",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangún",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Yakarta, Hanói",
			BEIJING_HONGKONG: 			"(GMT+08:00) Pekín, Hong Kong, Perth, Singapur",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokio, Osaka, Sapporo, Seúl, Yakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaida",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Guam, Canberra, Melbourne, Sídney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Islas Salomón, Nueva Caledonia ",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fuji, Kamchatka, Auckland",
			NUKU: 						"(GMT+13:00) Nukualofa"
		},

		APPLIST:{
			APP:						"Aplicación",
			GAME:						"Juego",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"LINE",
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
			DAY: 						"Día",

			MONDAY: 					"Lunes",
			TUESDAY: 					"Martes",
			WEDNESDAY: 					"Miércoles",
			THURSDAY: 					"Jueves",
			FRIDAY: 					"Viernes",
			SATURDAY: 					"Sábado",
			SUNDAY: 					"Domingo",
			
			MON: 						"Lun",
			TUES: 						"Mar",
			WED: 						"Mier",
			THUR: 						"Jue",
			FRI: 						"Vie",
			SAT: 						"Sáb",
			SUN: 						"Dom",

			JAN: 						"Ene",
			FEB: 						"Feb",
			MAR: 						"Mar",
			APR: 						"Abr",
			MAY: 						"May",
			JUN: 						"Jun",
			JUL: 						"Jul",
			AUG: 						"Ago",
			SEP: 						"Sep",
			OCT: 						"Oct",
			NOV: 						"Nov",
			DEC: 						"Dic"

		},

		HOUR: {
			AM_1: 						"1:00 AM",
			AM_2: 						"2:00 AM",
			AM_3: 						"3:00 AM",
			AM_4: 						"4:00 AM",
			AM_5: 						"5:00 AM",
			AM_6: 						"6:00 AM",
			AM_7: 						"7:00 AM",
			AM_8: 						"8:00 AM",
			AM_9: 						"9:00 AM",
			AM_10: 						"10:00 AM",
			AM_11: 						"11:00 AM",
			AM_12: 						"12:00 AM",
			PM_1: 						"1:00 PM",
			PM_2: 						"2:00 PM",
			PM_3: 						"3:00 PM",
			PM_4: 						"4:00 PM",
			PM_5: 						"5:00 PM",
			PM_6: 						"6:00 PM",
			PM_7: 						"7:00 PM",
			PM_8: 						"8:00 PM",
			PM_9: 						"9:00 PM",
			PM_10: 						"10:00 PM",
			PM_11: 						"11:00 PM",
			PM_12: 						"12:00 PM"
		},

		ORDER: {
			"1ST": 						"Primero",
			"2ND": 						"2o",
			"3RD": 						"3o",
			"4TH": 						"4o",
			"5TH": 						"Último",
			"1ST_": 					"1o",

			TH: 						"th"
		},

		GRID: {
			CLIENT_NUMBER: 				"Clientes totales",

			ID: 						"ID",
			MODIFY: 					"Modificar",
			STATUS: 					"Estado",
			ENABLE: 					"Habilitar",

			OPERATION: 					"Operación",
			CHOOSE: 					"Escoger",
			DESCRIPTION: 				"Descripción",
			

			AUTO_REFRESH: 				"Actualización Automática",
			REFRESH: 					"Actualizar",
			NUMBER: 					"Número",
			ENABLED: 					"Habilitado",
			DISABLED: 					"Deshabilitado",
			ACTIVE: 					"Activo",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Agregar ",
			CHOOSE: 					"Escoger",
			EDIT: 						"Editar",
			DELETE: 					"Borrar",
			DELETE_ALL: 				"Borrar Todo",
			REMOVE: 					"Remover",
			RESET: 						"Restablecer",
			RESET_ALL: 					"Restablecer Todo",
			DETECT: 					"Detectar",
			ENABLE: 					"Habilitar",
			DISABLE: 					"Deshabilitar",
			CLEAR: 						"Borrar",

			REFRESH: 					"Actualizar",
			SEARCH: 					"Buscar...",
			BROWSE: 					"Explorar",

			SAVE: 						"Guardar",
			BACK: 						"Regresar",

			PREV: 						"Anterior",
			NEXT: 						"Siguiente",
			FINISH: 					"Terminar",
			
			ON: 						"Encendido",
			OFF: 						"Apagado",
			LOW: 						"Bajo",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto",
			
			OK: 						"OK",
			CANCEL: 					"Cancelar",

			YES: 						"Sí",
			NO: 						"No ",
			
			CONNECTED: 					"Conectado",
			CONNECTING: 				"Conectando",
			DISCONNECTING: 				"Desconectando",
			DISCONNECTED: 				"No Conectado",

			PASSWORD_HINT: 				"Contraseña",
			FILEBUTTONTEXT: 			"Explorar",
			FILEBLANKTEXT: 				"Por favor seleccione un archivo.",
			NOSELECTEDTEXT: 			"-Por favor Seleccione-",

			ADD_A_NEW_KEYWORD: 			"Agrege una nueva Palabra Clave",

			SUCCESSED: 					"¡Éxito!",
			FORM_SAVED: 				"Guardado",
			FORM_FAILED: 				"Fallido",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Guardado",
			GRID_FAILED: 				"Fallido",
			GRID_NONE_SELECT: 			"Por favor seleccione una entrada como mínimo.",
			GRID_DELETE_COMFIRM: 		"¿Está seguro que desea borrar las entradas seleccionadas?",
			GRID_DELETE_ALL_COMFIRM: 	"¿Está seguro que desea borrar todas las entradas? ",
			GRID_MAX_RULES: 			"Entradas máximas excedidas.",
			KEYWORD_MAX_OVERFLOW: 		"El número de palabras clave ha alcanzado el límite.",

			NOTE: 						"Nota:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Formato inválido.",
			BLANKTEXT: 					"Este campo es requerido.",

			EMAIL: 						"Formato de correo electrónico inválido.",
			NUMBER: 					"Formato inválido.",

			NUMBER_MIN: 				"Este número debe ser mayor de %min.",
			NUMBER_MAX: 				"Este número debe ser menor de  %max.",

			NUMBER_MIN_MAX: 			"Este número debe estar entre %min y %max.",
			HEX: 						"Este campo debe ser un número hexadecimal.",

			IP: 						"Formato inválido.",

			IP_NO_ALL_ZERO:				"La dirección no puede ser 0.0.0.0.",
			IP_NO_LOOP:					"La dirección no puede ser la dirección de loopback.",
			IP_NO_D_TYPE:				"La dirección IP no puede ser una dirección Clase D.",
			IP_NO_E_TYPE:				"La dirección IP no puede ser una dirección Clase E.",
			IP_NO_ALL_ONE:				"La dirección no puede ser 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"La dirección no puede comenzar con 255.",
			IP_NO_FIRST_ZERO:			"La dirección no puede comenzar con 0.",
			MASK_NO_ALL_ONE:			"La máscara de subred no puede ser 255.255.255.255.",

			IPV6: 						"Formato inválido.",
			IPV6_NOT_GLOBAL:			"Formato inválido.",
			IPV6_NOT_PREFIX:			"Formato inválido.",
			IP_DOMAIN: 					"Formato inválido.",
			IPV6_DOMAIN: 				"Formato inválido.",
			MAC: 						"Formato inválido.",
			MULTI_MAC:					"Formato inválido.",
			DATE: 						"Formato inválido.",
			DATE_INVALID: 				"Por favor ingrese una fecha válida entre 01/01/1970 y 12/31/2030.",
			MASK: 						"Formato inválido.",
			DOMAIN: 					"Formato inválido.",
			STRING_DOMAIN:              "Formato inválido.",
			USER: 						"Formato inválido.",
			NOTE: 						"Formato inválido.",
			PWD: 						"Formato inválido.",
			SSID: 						"Formato inválido.",
			NAME:						"Formato inválido.",
			ASCII_VISIBLE:				"Formato inválido.",
			STRING_VISIBLE:				"Formato inválido.",
			STRING_VISIBLE_NO_COMMA:    "Formato inválido.",
			STRING_VISIBLE_ALLOW_BLANK: "Formato inválido.",
			NAME_SPECIAL: 				"Por favor ingrese 4-15 caracteres alfabéticos, números, - y _.",
			VPN_NAME_PWD: 				"Por favor ingrese 1-15 caracteres alfabéticos, números, - y _."	
			
		},


		ERROR: {			
			"00000001":					"Tipo de archivo inválido.",
			"00000002":					"Error en la suma de control.",
			"00000003":					"El archivo es demasiado grande.",
			"00000004":					"Error de carga.",
			"00000005":					"Error de reinicio.",
			"00000006":					"Error Desconocido.",
			"00000007":					"El elemento ya existe. Por favor ingrese otro.",

			"00000009":					"Puerto inválido.",
			"00000010":					"El puerto debe ser un número.",

			"00000011":					"El nombre de usuario debe ser el mismo que el valor del campo.",
			"00000012": 				"El nombre de usuario debe comenzar con un carácter alfabético.",

			"00000021":					"Formato inválido.",

			"00000032": 				"El valor debe ser menor que el de Bajo.",
			"00000033": 				"El valor debe ser menor que el Intermedio y el Bajo.",
			"00000034": 				"Valor inválido. Por favor ingrese un número entre 5 y 7200.",

			"00000039": 				"Por favor use el valor predeterminado 0 o ingrese un valor entre 30 y 86400.",
			"00000040": 				"Se requieren las direcciones SSID y MAC.",

			"00000042": 				"Por favor use el valor predeterminado 80 o ingrese un valor entre 1024 y 65535.",

			"00000045": 				"La Puerta de Enlace Predeterminada y la dirección IP de la LAN deben estar en una misma subred. Por favor ingréselos de nuevo.",

			"00000047": 				"La dirección IP y la dirección IP de la LAN deben estar en la misma subred. Por favor ingréselas de nuevo.",

			
			"00000049":					"Red destino inválida.",

			"00000050": 				"Dirección IP del Servidor DNS inválida. Por favor ingrese otra.",
			"00000051": 				"Este endereço MAC já existe. Favor inserir outro.",
			"00000052": 				"Esta dirección IP ya existe. Por favor ingrese otra.",

			"00000053": 				"La dirección de inicio NO debe ser mayor que la dirección final. <br/> Por favor intente de nuevo.",

			"00000054": 				"El conjunto de direcciones IP y la dirección IP de la LAN deben estar en la misma subred. Por favor ingrese otra.",

			"00000055": 				"La dirección IP no puede ser la misma que la dirección LAN.",

			"00000056": 				"La dirección IP remota y la dirección IP de la LAN actual no pueden estar en la misma subred. Por favor ingrese otra.",

			"00000057": 				"Contraseña PSK Inválida. Por favor ingrésela de nuevo.",
			"00000058": 				"Contraseña WEP Inválida. Por favor ingrésela de nuevo.",

			"00000059": 				"Máscara de Subred y dirección IP de la LAN son inválidas, por favor ingrese unas válidas.",

			"00000060": 				"La dirección IP de la WAN y la dirección IP de la LAN no pueden estar en la misma subred. <br/>Por favor ingrese otro.",

			"00000061": 				"La hora de inicio debe ser anterior a la hora final.",

			"00000062": 				"Este campo es requerido.",
			"00000063": 				"Este campo es requerido.",

			"00000064": 				"No puede bloquear la dirección MAC del host.",
			"00000065": 				"Este elemento entra en conflicto con los elementos existentes. Por favor intente de nuevo.",
			
			"00000066": 				"La contraseña debe contener de 8 a 63 caracteres o 64 dígitos hexadecimales.",
			"00000067": 				"La contraseña debe contener 10 dígitos hexadecimales.",
			"00000068": 				"La contraseña debe contener 5 caracteres ASCII.",
			"00000069": 				"La contraseña debe contener 26 dígitos hexadecimales.",
			"00000070": 				"La contraseña debe contener 13 caracteres ASCII.",
			"00000071": 				"La contraseña debe contener 32 dígitos hexadecimales.",
			"00000072": 				"La contraseña debe contener 16 caracteres ASCII.",
			"00000073": 				"La contraseña debe contener menos de 64 caracteres.",

			"00000074": 				"Tipo de archivo inválido.",

			"00000075": 				"La longitud del PIN debe ser de 8 dígitos.",

			"00000076": 				"Esta entrada entra conflicto con los elementos existentes. Por favor revise el puerto de activación y el protocolo de activación. ",
			"00000077": 				"La dirección IP no puede ser la misma que la dirección IP de la LAN. Por favor ingrésela de nuevo.",
			"00000078": 				"La dirección IP del host no puede ser la misma que la dirección IP de la LAN. Por favor ingrésela de nuevo.",

			"00000080": 				"Las contraseñas no coinciden. Por favor intente de nuevo.",

			"00000088": 				"Esta operación no está permitida para la administración remota.",
			"00000089": 				"Se excedieron los intentos máximos %num de inicio de sesión. Por favor intente de nuevo en dos horas.",

			"00000090": 				"El destino no puede ser la dirección IP de la LAN.",
			"00000091": 				"El destino no puede ser la dirección IP de la WAN.",

			"00000092": 				"La dirección IP y la dirección IP de la LAN no pueden estar en la misma subred. <br/>Por favor ingréselas de nuevo.",
			"00000093": 				"La dirección IP y la dirección IP de la WAN no pueden estar en la misma subred. <br/>Por favor ingréselas de nuevo.",

			"00000094": 				"Los IDs de VLAN no pueden ser los mismos",
			"00000095": 				"Se requiere un puerto de Internet como mínimo.",

			"00000096": 				"La palabra clave ya existe.",

			"00000097": 				"Las configuraciones realizadas a las bandas de frecuencia de 2.4GHz no tomarán efecto hasta que el botón Wi-Fi esté ENCENDIDO.",
			"00000098": 				"Las configuraciones realizadas a las bandas de frecuencia de 5GHz no tomarán efecto hasta que el botón Wi-Fi esté ENCENDIDO.",
			"00000099": 				"Las configuraciones realizadas a las bandas de frecuencia de 2.4GHz y 5GHz no tomarán efecto hasta que el botón Wi-Fi esté ENCENDIDO.",

			"00000100": 				"La red de 5GHz no está disponible debido a las restricciones en su región / país.",

			"00000101": 				"La función inalámbrica está apagada. Si desea usar esta función, por favor ENCIENDA el botón Wi-Fi.",
			"00000102": 				"La función inalámbrica está apagada. Si desea usar esta función, por favor ENCIENDA el botón Wi-Fi.",

			"00000103": 				"La función inalámbrica está apagada. Si desea usar esta función, por favor ENCIENDA el botón Wi-Fi.",
			"00000104": 				"La función inalámbrica está deshabilitada.",

			"00000105": 				"QoS e IPTV no pueden estar habilitados al mismo tiempo.",

			"00000106": 				"La dirección IP no puede ser la misma que la dirección IP de la LAN.",
			
			"00000107": 				"El destino ya existe.",

			"00000110": 				"La dirección IP y la dirección IP de la LAN deben estar en la misma subred.",
			
			"00000111": 				"QoS y <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> no pueden ser habilitados al mismo tiempo.",
			"00000112": 				"La función WDS puede funcionar en la banda de 2.4GHz o 5GHz. También, la Red para invitados no está disponible en la banda WDS.",
			"00000113": 				"WDS y la Red para Invitados no pueden ser habilitados al mismo tiempo.",
			"00000114": 				"Las Estadísticas de Tráfico y <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> no pueden ser habilitados al mismo tiempo.",
			"00000115": 				"IPTV e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> no pueden estar habilitados al mismo tiempo.",

			"00000117": 				"Ya existe el nombre de dominio.",
			"00000118": 				"El número de nombres de dominio ha alcanzado el límite.",
			"00000119":				"NAT Boost se deshabilitará cuando  <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> or <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Estadísticas de Tráfico</a> esté habilitado.",

			"00000120": 				"La contraseña debe contener 5 o 13 caracteres ASCII.",
			"00000121": 				"La contraseña debe contener 10 o 26 dígitos hexadecimales.",
			"00000122": 				"El nombre de usuario y la contraseña están vacíos, ¿está seguro que desea continuar?",
			"00000123": 				"Guardando... <br/>Por favor NO opere durante el proceso. ",
			"00000124": 				"El PIN del router está bloqueado debido a conexiones usando un PIN erróneo repetidas veces. Por favor genere uno nuevo.",

			"00000125": 				"El número de reglas de QoS ha excedido el límite.",
			"00000126": 				"El tamaño del archivo ha excedido el límite.",
			"00000127": 				"El contenido del archivo es incorrecto.",
			"00000128": 				"Por favor seleccione una aplicación como mínimo.",
			"00000129": 				"Por favor seleccione un puerto físico como mínimo.",
			"00000130":					"Su función WPS está deshabilitada.",
			"00000131": 				"El Servidor NTP no puede ser la dirección de loopback.",
			"00000132": 				"Falló el cambio de modo. Por favor intente de nuevo o reinicie su router.",
			"00000133": 				"Dirección IP Inválida del Host DMZ. Por favor ingrese una válida.",
			"00000134":  				"IP Interno Inválido. Por favor ingrese uno válido.",
			"00000135": 				"Error del archivo del firmware.",
			"00000136": 				"Error del archivo de copia de seguridad.",
			"00000137": 				"El nombre de usuario está vacío, ¿está seguro que desea continuar?",
			"00000138": 				"La contraseña está vacía, ¿está seguro que desea continuar?",
			"00000139": 				"Parámetros de recuperación de la contraseña incorrectos.",
			"00000140": 				"Código incorrecto.",
			"00000141": 				"La recuperación de la contraseña está deshabilitada.",
			"00000142": 				"Falla al enviar el código. Por favor revise su conexión de Internet.",
			"00000143": 				"Dirección de correo electrónico inválida.",
			"00000144": 				"Mensaje de correo electrónico inválido.",
			"00000145": 				"No se pudo encontrar el host.",
			"00000146": 				"Falló la autentificación.",
			"00000147": 				"El puerto debe estar entre 1 y 65535.",
			"00000148": 				"Para un rango de puerto, el número de puerto de inicio debe ser menor que el número de puerto final. Por favor ingréselo de nuevo.",
			"00000149": 				"El número de puerto se superpone. Por favor ingréselo de nuevo.",
			"00000150": 				"Máscara de Subred y dirección IP de WAN inválidas, por favor ingrese unas válidas.",
			"00000151": 				"Por favor seleccione por lo menos un día.",
			"00000152": 				"Por favor ajuste la hora de acceso de Internet.",
			"00000213":					"La dirección IP del servidor DNS y la dirección IP LAN no pueden estar en la misma subred. <br/>Por favor introduzca otra.",
			"10000139": 				"No hay conexión de Internet",
			"10000140": 				"Venció el tiempo límite de la solicitud. Por favor revise su conexión de Internet e intentelo de nuevo más tarde.",
			"10000158": 				"El puerto WAN está desconectado.",
			"10000159": 				"No se puede conectar a Internet. Por favor contacte a su proveedor de servicios o intente de nuevo más tarde. ",
			"10000160": 				"No se puede obtener la dirección IP del Servidor DHCP. Por favor revise el tipo de conexión WAN o intente de nuevo más tarde.",
			"10000161": 				"Falló la autentificación de PPPoE. Por favor revise su nombre de usuario y contraseña.",
			"10000162": 				"No se puede conectar al servidor PPPoE.",

			"10000164": 				"Falló la autentificación de PPTP. Por favor revise su nombre de usuario y contraseña.",
			"10000165": 				"No se puede conectar al servidor PPTP.",

			"10000167": 				"Falló la autentificación de L2TP. Por favor revise su nombre de usuario y contraseña.",
			"10000168": 				"No se puede conectar al servidor L2TP.",
			"10000169": 				"Error desconocido. Por favor intente de nuevo más tarde.",
			"10000172": 				"Falló la conexión.",

			"10000185": 				"Error del sistema.",	
			"10000186": 				"Error del archivo del firmware.",	
			"10000187": 				"Error de descarga del firmware.",	
			"10000188": 				"Error de actualización del firmware.",	
			"10000191": 				"No se puede descargar el archivo del firmware.",
			"10000192": 				"No se puede actualizar.",
			"10000193": 				"No se conecta al servidor.",	
			"10000194": 				"No se puede conectar al servidor de la nube. Por favor intente de nuevo más tarde.",
			"10000195": 				"No puede establecer la contraseña de nuevo porque ya ha establecido una. ",
			
			"E3002":                    "Venció el tiempo límite de la solicitud.", 
			"E10000": 					"Error común.",
			"E20002": 					"Venció el tiempo límite de la solicitud.",
			"E20003": 					"El servidor de la nube está ocupado. Por favor intente de nuevo más tarde.",
			"E20107": 					"Entrada inválida.",
			"E20200": 					"Formato de correo electrónico inválido.",
			"E20502": 					"No se puede vincular el dispositivo. Por favor intente de nuevo más tarde.",
			"E20503": 					"No se puede desvincular el dispositivo. Por favor intente de nuevo más tarde.",
			"E20506": 					"Falló la operación. El dispositivo ya está vinculado a otra cuenta de la nube.",
			"E20507": 					"Este dispositivo está desvinculado de la cuenta.",
			"E20508": 					"El número de cuentas vinculadas ya ha alcanzado el límite máximo. ",
			"E20509": 					"Las cuentas del usuario no tienen derecho para vincular nuevos usuarios.",
			"E20571": 					"Este dispositivo está fuera de línea.",
			"E20580": 					"Falló la operación. Esta cuenta no está vinculada al dispositivo.",
			"E20600": 					"Este correo electrónico no está registrado.",
			"E20601": 					"Nombre de usuario o contraseña incorrectos.",
			"E20602": 					"Esta cuenta aún no está activada.",
			"E20603": 					"Este correo electrónico ya está registrado.",
			"E20604": 					"Nombre de usuario inválido. Por favor ingrese una dirección de correo electrónico o número telefónico.",
			"E20606": 					"No se puede enviar el correo electrónico de activación de la cuenta.",
			"E20615": 					"Contraseña inválida. Por favor ingrese de 6-32 caracteres ASCII sin espacios.",
			"E20616": 					"Contraseña inválida. Por favor ingrese de 6-32 caracteres ASCII sin espacios.",
			"E20617": 					"Esta cuenta no existe.",
			"E20618": 					"Esta cuenta no existe.",
			"E20620": 					"Seudónimo inválido. Por favor ingrese de 1-64 caracteres.",
			"E20661": 					"Esta cuenta se bloqueará durante 2 horas debido a los intentos excesivos de inicio de sesión (20 veces en media hora).",
			"E20662": 					"El dispositivo está bloqueado. En las siguientes 24 horas, el dispositivo no responderá a ninguna solicitud del código de verificación. ",
			"E20671": 					"No se puede verificar la cuenta.",
			"E20672": 					"No se puede verificar la cuenta. El vínculo de activación de la cuenta ha expirado. Por favor envíe una solicitud nueva.",
			"E20673": 					"El vínculo de restablecimiento de la contraseña ha expirado. Por favor envíe una solicitud nueva.",
			"E20674": 					"No se puede restablecer la contraseña.",
			"E20675": 					"Esta cuenta inició sesión en alguna otra parte. ",
			"E22000": 					"Entrada inválida.",
			"E22001": 					"El nombre de dominio ya está registrado.",
			"E22002": 					"El número de los nombres de dominio registrados ya ha alcanzado el límite máximo. ",
			"E22003": 					"El número de los nombres de dominio vinculados ya ha alcanzado el límite máximo.",
			"E22004": 					"El nombre de dominio ya está vinculado a otro dispositivo. ",
			"E22006": 					"Error del sistema. Por favor intente de nuevo más tarde.",
			"E22007": 					"El nombre de dominio contiene palabras sensibles. Por favor intente con otro.",
			"E22008": 					"El nombre de dominio no existe.",

			"E50101": 					"El puerto WAN está desconectado.",
			"E50102": 					"No se puede conectar a Internet. Por favor contacte a su proveedor de servicios o intente de nuevo más tarde.",
			"E50103": 					"No se puede obtener la dirección IP del Servidor DHCP. Por favor revise el tipo de conexión WAN o intente de nuevo más tarde.",
			"E50111": 					"Falló la autentificación de PPPoE. Por favor revise su nombre de usuario y contraseña.",
			"E50112": 					"No se puede conectar al servidor PPPoE.",
			"E50121": 					"Falló la autentificación de PPTP. Por favor revise su nombre de usuario y contraseña.",
			"E50122": 					"No se puede conectar al servidor PPTP.",
			"E50131": 					"Falló la autentificación de L2TP. Por favor revise su nombre de usuario y contraseña.",
			"E50132": 					"No se puede conectar al servidor L2TP.",
			"E50140": 					"Error desconocido. Por favor intente de nuevo más tarde.",
			"E51215": 					"Venció el tiempo límite de la solicitud. Por favor revise su conexión de Internet e intente de nuevo más tarde.",
			"E_CLOUD_SERVER": 			"Error del servidor. Por favor intente de nuevo más tarde.",
			"E5000": 					"Unable to connect to the cloud server.",
			"E5001": 					"Incorrect TP-Link ID (email). Or your device is offline and only the admin (%email) has offline access.",
			"E5002": 					"Incorrect password."
		},

		MENU: {
			STATUS: 					"Estado",
			NETWORK: 					"Red",
			NETWORK_MAP: 				"Mapa de Red",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"Servidor DHCP",
			DYNAMIC_DNS: 				"DNS dinámico",
			ADVANCED_ROUTING: 			"Enrutamiento Avanzado",

			WIRELESS: 					"Inalámbrico",
			WIRELESS_SETTINGS: 			"Configuraciones Inalámbricas",
			WDSBRIDGING: 				"Puente WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"Filtrado MAC",
			WIRE_STATISTICS: 			"Estadísticas",
			
			
			GUEST_NETWORK: 				"Red para Invitados",
			WIRELESS_SETTINGS: 			"Configuraciones Inalámbricas",
			STORAGE_SHARING: 			"Uso Compartido de Almacenamiento",
			NAT_FORWARDING: 			"Reenvío de NAT",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Servidores Virtuales",
			PORT_TRIGGERING: 			"Activación de Puertos",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Configuraciones USB",
			BASIC_SET: 					"Configuraciones Básicas",
			DISK_SET: 					"Configuraciones del Dispositivo",
			FOLDER_SHARING: 			"Acceso de Uso Compartido",
			STORAGE_SHARING: 			"Uso Compartido de Almacenamiento",
			FTP_SERVER: 				"Servidor FTP",
			MEDIA_SERVER: 				"Servidor Multimedia",
			PRINT_SERVER: 				"Servidor de impresión",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Controles Parentales",
			
			QOS:  						"QoS",
			DATABASE:  					"Base de datos",

			STREAMBOOST: 				"Acelerador de Stream",
			MAP: 						"Mapa",
			SB_MAP: 					"Mapa",
			SB_BANDWIDTH:  				"Ancho de Banda",
			SB_PRIORITY: 				"Prioridad",
			SB_STATISTICS: 				"Estadísticas",

			
			SECURITY: 					"Seguridad",
			SETTINGS: 					"Configuraciones",
			ACCESS_CONTROL: 			"Control de Acceso",
			IP_MAC_BINDING: 			"Enlace de IP y MAC",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Herramientas del Sistema",
			TIME_SETTINGS: 				"Configuraciones de la Hora",
			DIAGNOSTIC: 				"Diagnóstico",
			FIRMWARE_UPGRADE: 			"Actualización del Firmware",
			BACKUP_RESTORE: 			"Copia de Seguridad y Restaurar",
			ADMINISTRATION: 			"Administración",
			SYSTEM_LOG: 				"Registro del Sistema",
			STATISTICS: 				"Estadísticas de Tráfico",
			SYSTEM_PARAMETERS: 			"Parámetros del Sistema",
			ACCOUNT: 					"Nube de TP-Link",
			
			VPN: 						"Servidor VPN",
			OPEN_VPN: 					"Abrir VPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"Conexiones VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Región y Zona Horaria",
			INTERNET_CONNECTION_TYPE: 	"Tipo de Conexión de Internet",
			WIRELESS_SETTINGS: 			"Configuraciones Inalámbricas",
			SUMMARY: 					"Resumen",
			SETUP_COMPLETE: 			"Probar la Conexión de Internet",
			SETUP_COMPLETE_CLOUD: 			"Servicio de la Nube de TP-Link",

			EXIT: 						"Salir",
			NEXT: 						"Siguiente",
			SAVE: 						"Guardar",
			FINISH: 					"Terminar",
			OK: 						"OK",
			NONE: 						"Falló la detección.",

			REGION: 					"Región",
			TIME_ZONE: 					"Zona Horaria",

			AUTO_DETECT: 				"Detección Automática",
			DYNAMIC_IP: 				"IP Dinámico",
			STATIC_IP: 					"IP Estático",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Si no está seguro acerca de qué Tipo de Conexión de Internet tiene, use la Auto Detección o contacte a su Proveedor de Servicio de Internet (ISP) para obtener ayuda.",

			DYNAMIC_IP_INFO: 			"Si su ISP sólo permite el acceso de Internet a una dirección MAC específica, necesita clonar la dirección MAC de la computadora primaria. Si no está seguro, seleccione NO Clonar la Dirección MAC.",
			MAC_CLONE_NO: 				"NO Clonar la Dirección MAC",
			MAC_CLONE_YES: 				"Clonar la Dirección MAC de la Computadora Actual",
			MAC_CLONE_NOTE: 			"Si selecciona Clonar la Dirección MAC, necesita clonar la dirección MAC de la computadora original que está registrada con su ISP.",

			PPPOE_INFO: 				"Por favor ingrese el nombre de usuario y la contraseña de PPPoE.",
			
			STATIC_IP_INFO: 			"Por favor ingrese su información IP.",

			L2TP_INFO: 					"Por favor ingrese el nombre de usuario y la contraseña de L2TP",
			PPTP_INFO: 					"Por favor ingrese el nombre de usuario y la contraseña de PPTP.",
			
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			SERVER_IP_ADDRESS_NAME: 	"IP del Servidor VPN/Nombre de Dominio",
			IP_ADDRESS: 				"Dirección IP",
			SUBNET_MASK: 				"Máscara de Subred",
			DEFAULT_GATEWAY: 			"Puerta de Enlace Predeterminada",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",
			OPTIONAL: 					"(Opcional)",
			
			ON: 						"Encendido",
			OFF: 						"Apagado",
			WIRELESS_24GHZ: 			"Inalámbrico de 2.4GHz",
			WIRELESS_5GHZ: 				"Inalámbrico de 5GHz ",
			ENABLE_WIRELESS_RADIO: 		"Habilitar la Radio Inalámbrica",
			NAME_SSID: 					"Nombre de la Red (SSID)",

			SUMMARY_INFO1: 				"Necesita volver a conectar sus dispositivos inalámbricos a la nueva red inalámbrica antes de dar clic en el botón de <strong>Siguiente</strong>.",
			SUMMARY_INFO2: 				"Su nombre y contraseña inalámbricos han sido modificados como se muestra a continuación: ",
			SUMMARY_INFO3: 				"Asegúrese que se haya conectado a la nueva red inalámbrica. ",

			WIRELESS_24GHZ_SSID: 		"SSID del Inalámbrico de 2.4GHz",
			WIRELESS_24GHZ_PASSWORD: 	"Contraseña del Inalámbrico de 2.4GHz",
			WIRELESS_5GHZ_SSID: 		"SSID del Inalámbrico de 5GHz",
			WIRELESS_5GHZ_PASSWORD: 	"Contraseña del Inalámbrico de 5GHz",

			SORRY: 						"Error.",
			SUCCESS: 					"¡Éxito!",
			TEST_INTERNET_SUCCESS_INFO: "Dar clic en Finalizar al final del proceso de Configuración Rápida.",

			TEST_INTERNET_FAILED_INFO_0:"Por favor verifique que todos los parámetros de Configuración Rápida sean correctos e intente de nuevo. Si todos los parámetros de Configuración Rápida son correctos, por favor reinicie su módem, espere 2 minutos, y dar clic en Probar la Conexión de Internet una vez más. Si no está usando un módem, puede que sea necesario contactar a su Proveedor de Servicios de Internet (ISP) para obtener ayuda.",
			TEST_INTERNET_FAILED_INFO_1: "Oops... The Internet connection is not set up successfully.<br />1. Make sure all cables are properly connected.<br />2. Click Back and verify that the Internet connection information is correct.<br />3. Contact our Technical Support if the problem still exists.",
			SUMMARY_INFO4: 				"Lo sentimos. Detectamos que no ha conectado de nuevo su dispositivo inalámbrico a la nueva red inalámbrica. Por favor hágalo y después dé clic en <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"¡Felicidades!",
			COMPLETE_INFO_0: 			"Ha completado el proceso de Rápida Configuración.",
			COMPLETE_INFO_1:			"Dar clic abajo en Probar la Conexión de Internet, después dar clic en Finalizar.",
			COMPLETE_INFO_2: 			"You are not logged into your TP-Link ID. You can log in later from Basic > TP-Link Cloud.",
			TEST_INTERNET: 				"Probar la Conexión de Internet",

			
			RESET_USER_TITLE: 			"Configurar un nombre de usuario y contraseña nuevos",
			NEW_USERNAME: 				"Nombre de Usuario Nuevo",
			NEW_PASSWORD: 				"Contraseña Nueva",
			CONFIRM_PASSWORD: 			"Confirmar Contraseña Nueva",
			
			NO_ACCOUNT: 				"No TP-Link ID?",
			REGISTER_NOW: 				"Registrarse ahora",
			REGISTER_SKIP: 				"Iniciar sesión después",
			LOGIN: 						"Iniciar sesión",
			REGISTER_NEW:				"Registrar una nueva cuenta",
			COMPLETE_INFO_EMAIL_PREFIX: "Your TP-Link ID is:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Le recomendamos ampliamente que inicie sesión usando esta cuenta para una administración fácil de su dispositivo y más funciones de la Nube de TP-Link.",

			INTERNET_OK: 				"¡Felicidades! La configuración de la red ha sido exitosa. Disfrute su navegación en Internet.",
			CLOUD_WIZARD: 				"For more TP-Link Cloud functions, please log in with your <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "With a TP-Link ID, you can:", 
			ACCOUNT_DESP_SUB1:          "Acceder a su dispositivo y a los servidores locales (FTP, HTTP, etc.) desde cualquier parte a través de Internet.",
			ACCOUNT_DESP_SUB2:          "Mantener actualizado su firmware con la función Actualizar en Línea.",
	        ACCOUNT_DESP_SUB3:          "Administrar múltiples dispositivos con una sola cuenta.",
			
			CONFIRM: 					"Confirmar"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Estado de Internet",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Tipo de Conexión",
			SECONDARY_CONN: 			"Conexión Secundaria",

			POOR_CONNECTED: 			"Red deficiente.",
			UNPLUGGED: 					"El puerto WAN está desconectado.",
			
			CONNECTED: 					"Conectado",
			DISCONNECTED: 				"Desconectado",

			INTERNET_IP_ADDR: 			"Dirección IP",
			
			IP_ADDR: 					"Dirección IP",
			MAC_ADDR: 					"Dirección MAC",
			GATEWAY: 					"Puerta de Enlace",

			AUTO: 						"Automático",
			
			ROUTER: 					"Router ",
			WIRELESS_CLIENTS: 			"Clientes Inalámbricos",
			HOST_CLIENTS: 				"Clientes del Host",
			GUEST_CLIENTS: 				"Clientes Invitados",
			WIRE_CLIENTS: 				"Clientes Conectados por Cable",
			PRINTER: 					"Impresora",
			USB_DISK: 					"Disco USB",
			WIRELESS: 					"Inalámbrico",
			NAME: 						"Nombre",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Canal",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Inalámbrico de 2.4GHz",
			WIRELESS_5GHZ: 				"Inalámbrico de 5GHz ",
			
			GUEST_24GHZ: 				"Red para Invitados de 2.4GHz",
			GUEST_5GHZ: 				"Red para Invitados de 5GHz",
			
			STATUS: 					"Estado",
			TOTAL: 						"Totales",
			AVAILABLE: 					"Disponible",
			GB: 						"GB",
			BRAND: 						"Marca",

			DYNAMIC_IP: 				"IP Dinámico",
			STATIC_IP: 					"IP Estático",
			SUBNET_MASK: 				"Máscara de Subred",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Cable BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Túnel 6to4",
			NONE: 						"Ninguno"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Detección Automática",
			INTERNET_CONN_TYPE: 		"Tipo de Conexión de Internet",
			DYNAMIC_IP: 				"IP Dinámico",
			STATIC_IP: 					"IP Estático",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"Cable BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"El puerto WAN está desconectado.",
			NONE: 						"Ninguno",
			DETECT_FAIL: 				"Falló la Detección Automática.",
			SECONDARY_CONN: 			"Conexión Secundaria",

			DYNAMIC_YES: 				"NO Clonar la Dirección MAC",
			DYNAMIC_NO: 				"Clonar la Dirección MAC de la Computadora Actual",
			
			IP_ADDR: 					"Dirección IP",
			SUBNET_MASK: 				"Máscara de Subred",
			DEFAULT_GATEWAY: 			"Puerta de Enlace Predeterminada",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",
			OPTIONAL: 					"(Opcional)",
			USER_NAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			SERVER_IP_ADDR_NAME: 		"IP del Servidor VPN/Nombre de Dominio",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Si no está seguro acerca de qué Tipo de Conexión de Internet tiene, use la Auto Detección o contacte a su Proveedor de Servicio de Internet (ISP) para obtener ayuda."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Configuraciones Inalámbricas",
			MODE_2G: 					"Inalámbrico de 2.4GHz",
			MODE_5G: 					"Inalámbrico de 5GHz ",
			WIRELESS_NETWORK_NAME: 		"Nombre de la Red (SSID)",
			WIRELESS_PASSWORD: 			"Contraseña",
			ENABLE_WIRELESS: 			"Habilitar la Radio Inalámbrica",
			SAVE: 						"Guardar",
			ENCRYPTION_2G_NOTICE:		"La encriptación de 2.4GHz es %s.",
			ENCRYPTION_5G_NOTICE:		"La encriptación de 5GHz es %s.",
			ENCRYPTION_2G_NO: 			"La red inalámbrica de 2.4GHz no está encriptada.",
			ENCRYPTION_5G_NO: 			"La red inalámbrica de 5GHz no está encriptada.",
			ENCRYPTION_SURE: 			"¿Está seguro que desea continuar?",

			HIDE_SSID: 					"Ocultar SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Configuraciones Básicas",
			TITIL_NEW:					"Disco y Cuenta",
			DISK_SET:					"Configuraciones del Dispositivo",

			SELFLY_REMOVE:				"Remover de Manera Segura",
			SCANING:					"Escaneando…",
			SCAN_RESULT:				"Se encontraron %n discos",
			
			DISKS:						"Discos",
			USERS: 						"Cuenta de Usuario",
			DEVICENAME: 				"Nombre del dispositivo",
			VOLUMN: 					"Volumen",

			USBSPACE: 					"Espacio Usado",
			FREESPACE: 					"Espacio Libre",
			STATUS: 					"Estado",
			INACT: 						"Inactivar",
			USAGE: 						"Uso",
			CAPACITY: 					"Capacidad",
			OPERATION: 					"Operación",
			
			ACC: 						"Administración de la Cuenta",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			USE_LOGIN: 					"Usar usuario de inicio de sesión",
			SCAN: 						"Escanear",
			ENJECT_ALL: 				"Expulsar Todos",
			ENJECT: 					"Expulsar ",
			ADD_USER: 					"Agregar Usuario",
			AUTH: 						"Autoridad",


			LOCATION: 					"Ubicación",
			MOBILE_ISP: 				"ISP Móvil",
			DIAL_NUMBER: 				"Número de Marcación",
			APN: 						"APN",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			MTU_SIZE: 					"Tamaño de MTU (en bytes)",
			OPTIONAL: 					"(Opcional)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Controles Parentales",

			DEVICE_CTR: 				"Dispositivos Bajo el Control Parental",
			ID: 						"ID",
			DEVICE: 					"Nombre del dispositivo",
			MAC_ADDRESS: 				"Dirección MAC",
			TIME: 						"Tiempo de Acceso a Internet",
			DESCRIPTION: 				"Descripción",
			ENABLE: 					"Habilitar Esta Entrada",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",
			OPTIONAL: 					"(Opcional)",
			BTN_VIEW: 					"Ver los Dispositivos Existentes",
			ACCESS_DEVICES_LIST: 		"Lista de Dispositivos",
			OPT: 						"Operación",
			STATUS: 					"Estado"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Red para Invitados",
			MODE_2G: 					"Inalámbrico de 2.4GHz",
			MODE_5G: 					"Inalámbrico de 5GHz ",
			WIRELESS_NETWORK_NAME: 		"Nombre de la Red (SSID)",
			WIRELESS_PASSWORD: 			"Contraseña",
			ENABLE_WIRELESS: 			"Habilitar la Red para Invitados",
			SAVE:						"Guardar",
			HIDE_SSID: 					"Ocultar SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Cuenta de la nube ",
			OFFLINE_NOTE_TITLE: 		"Dispositivo desconectado",
			LOGIN_NOTE_TITLE: 			"Ups...",
			LOGIN_OFFLINE_NOTE: 		"El dispositivo está desconectado. Por favor revise la WAN y la configuración de red para asegurar que están configuradas correctamente.",

			EMAIL: 						"correo electrónico",
			PASSWORD: 					"Contraseña",
			FORGET_PASSWORD: 			"¿Olvidó su contraseña?",

			CLOUD_WIZARD: 				"For more TP-Link Cloud functions, please log in with your <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"No TP-Link ID?",
			REGISTER_NOW: 				"Registrarse ahora"
		},
		STATUS: {
			TITLE: 						"Estado",
			INTERNET:					"Internet",
			WIRELESS:					"Inalámbrico",
			LAN:						"LAN",
			USB_TITLE:					"Dispositivos USB",
			PERFORMANCE: 				"Desempeño",
			GUEST_NETWORK: 				"Red para Invitados",
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
			
			DYNAMIC_IP: 				"IP Dinámico",
			STATIC_IP: 					"IP Estático",
			SUBNET_MASK: 				"Máscara de Subred",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Cable BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Túnel 6to4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Transferencia (Puente)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Ninguno",
			
			DEFAULT_GATEWAY: 			"Puerta de Enlace Predeterminada",
			DNS: 						"Servidor DNS",
			MAC: 						"Dirección MAC",
			WDS_STATUS: 				"Estado de WDS",
			
			IPV6_ADDRESS: 				"Dirección IP",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",

			RADIO: 						"Radio Inalámbrica",

			NAME_SSID: 					"Nombre (SSID)",
			NETWORK_NAME_SSID:			"Nombre de la Red (SSID)",
			HIDE_SSID: 					"Ocultar SSID",
			MODE: 						"Modo",
			CHANNEL: 					"Canal",
			CHANNEL_WIDTH: 				"Ancho de Canal",
			AUTO: 						"Automático",
			CURRENT_CHANNEL: 			"Canal Actual",

			WDS: 						"Estado de WDS",
			WIRED_CLIENTS: 				"Clientes Conectados por Cable",
			WIRELESS_CLIENTS: 			"Clientes Inalámbricos",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Dirección de Enlace Local",
			ASSIGN_TYPE: 				"Tipo Asignado",

			ALLOW_TO_SEE_EACH: 			"Permitir que los invitados se vean entre sí",

			TOTAL: 						"Total:",
			AVAILABLE: 					"Disponible:",

			USB: 						"Disco USB",
			PRINTER: 					"Impresora",

			CPU_LOAD: 					"Carga del CPU",
			MEMORY_USAGE: 				"Uso de Memoria",

			IP_ADDR_P: 					"Dirección IP:",
			MAC_ADDR_P: 				"Dirección MAC:",
			CONN_TYPE_P: 				"Tipo de Conexión:",

			DISABLED: 					"Deshabilitado",
			INIT: 						"Inicialización",
			SCAN: 						"Escanear",
			AUTH: 						"Autenticación",
			ASSOC: 						"Asociar",
			RUN: 						"Ejecutar",
			HOST: 						"Host",
			GUEST: 						"Invitado",

			ON: 						"Encendido",
			OFF: 						"Apagado"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Tipo de Conexión de Internet",
			INTERNET_MAC_ADDRESS: 		"Dirección MAC",
			
			CONNECT: 					"Conectar",
			DISCONNECT: 				"Desconectar",
			
			IP_ADDR: 					"Dirección IP",
			
			USE_DEFAULT_MAC: 			"Usar la Dirección MAC Predeterminada",
			USE_COMPUTER_MAC: 			"Usar la Dirección MAC de la Computadora Actual",
			USE_CUSTOM_MAC: 			"Usar la Dirección MAC Personalizada",
			MAC_CLONE: 					"Clon de MAC",
			
			CONFIG: 					"Configurar",
			
			IP_ADDRESS: 				"Dirección IP",
			SUBNET_MASK: 				"Máscara de Subred",
			DEFAULT_GATEWAY: 			"Puerta de Enlace Predeterminada",
			
			MANUAL_DNS: 				"DNS Manual",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",
			
			RENEW: 						"Renovar",
			RELEASE: 					"Liberar",
			VIEW_MODE: 					"Modo de Visualización",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Obtener dinámicamente del ISP",
			USE_FOLLOW_IP_ADDR: 		"Usar la siguiente Dirección IP",
			USE_FOLLOW_DNS_ADDR: 		"Usar las siguientes Direcciones DNS",
			USE_FOLLOW_DNS_SERVER: 		"Usar el siguiente Servidor DNS",
			
			BASIC: 						"Básico",
			ADVANCED: 					"Avanzado",
			
			DNS_ADDR_MODE: 				"Dirección DNS",
			MTU_SIZE: 					"Tamaño de MTU",
			MTU_1500: 					"bytes. (El valor predeterminado es 1500, no lo cambie a menos que sea necesario.)",
			MTU_1480: 					"bytes. (El valor predeterminado es 1480, no lo cambie a menos que sea necesario.)",
			MTU_1460: 					"bytes. (El valor predeterminado es 1460, no lo cambie a menos que sea necesario.)",
			MTU_1420: 					"bytes. (El valor predeterminado es 1420, no lo cambie a menos que sea necesario.)",
			
			HOST_NAME: 					"Nombre del Host",

			HOST_NAME_CONFIRM: 			"El nombre del host contiene caracteres ilegales que pueden causar comportamiento inesperado del sistema. ¿Está seguro que desea continuar?",

			GET_IP_WITH_UNICAST_DHCP: 	"Obtener IP usando el DHCP de Unidifusión (Generalmente no se requiere.) ",
			OPTIONAL: 					"(Opcional)",
			
			STATIC_IP: 					"IP Estático",
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
			
			DYNAMIC_IP: 				"IP Dinámico",
			DYNAMIC_IP_v6: 				"IP Dinámico (SLAAC/DHCPv6)",
			STATIC_IP: 					"IP Estático",
			SERVICE_NAME: 				"Nombre del Servicio",
			ACCESS_CONCENTRATOR_NAME:  	"Nombre del Concentrador de Acceso",
			DETECT_ONLINE_INTERVAL: 	"Detectar Intervalo en Línea",
			INTERVAL_TIPS: 				"segundos. (0-120. El valor predeterminado es 10.)",
			IP_ADDR_MODE:  				"Dirección IP",
			CONN_MODE: 					"Modo de Conexión",
			DHCP_LINK_UNPLUGGED: 		"El puerto WAN está desconectado.",
			
			AUTO: 						"Automático",
			ON_DEMAND: 					"Bajo Demanda",
			TIME_BASED: 				"Basado en el tiempo",
			MANUALLY: 					"Manualmente",
			MAX_IDLE_TIME: 				"Tiempo Máximo de Inactividad",
			MAX_IDLE_TIME_TIPS: 		"minutos. (0 significa siempre activo.)",
			PERIOD_OF_TIME: 			"Periodo de Tiempo",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"Cable BigPond",
			AUTH_SERVER: 				"Servidor de Autenticación",
			AUTH_DOMAIN: 				"Dominio de Autenticación",
			L2TP: 						"L2TP",
			GATEWAY: 					"Puerta de Enlace",
			SERVER_IP_ADDR_NAME: 		"IP del Servidor VPN/Nombre de Dominio",
			PPTP: 						"PPTP",
			TO: 						"a",
			
			TUNNEL_6TO4: 				"Túnel 6to4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Obtener Dirección IPv6 no temporal",
			GET_PREFIX_DELEGATION: 		"obtener delegación del prefijo IPv6",
			IPV6_ADDR: 					"Dirección IPv6",

			GET_IPV6_WAY: 				"Obtener Dirección IPv6",
			AUTOMATICALLY: 				"Obtener Automáticamente",
			SPECIFIED_BY_ISP: 			"Especificado por el ISP",

			IPV6_ADDR_PREFIX: 			"Prefijo de la Dirección IPv6",
			NONE_TEMPORARY: 			"No temporal",

			PREFIX_DELEGATION: 			"Delegación del Prefijo",
			ENABLE: 					"Habilitar",
			DISABLE: 					"Deshabilitar",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Longitud de la Máscara de IPv4",
			CONFIG_TYPE: 				"Tipo de Configuración",
			RD6_PREFIX: 				"Prefijo 6RD",
			RD6_PREFIX_LENGTH: 			"Longitud del Prefijo 6RD",
			REPLY_IPV4_ADDR: 			"Dirección IPv4 de Respuesta de Límite",
			MANUAL: 					"Manual",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Transferencia (Puente)",
			LOCAL_IPV6: 				"Dirección Local de IpV6",
			PEER_IPV6: 					"Dirección IpV6 Homologada",
			TUNNEL_ADDR: 				"Dirección de Túnel",
			IPV4_NETMASK: 				"Máscara de Red de IPv4",
			CUSTOM: 					"Personalizado",
		    AFTR_NAME: 					"Nombre de AFTR",
			PPP_SHARE_V6:				"La misma sesión de PPPoE con una conexión IPv4",
			PPP_SHARE_V4:				"La misma sesión de PPPoE con una conexión IPv6",

			
			
			IPV4_ADDR: 					"Dirección de IPv4",
			IPV4_MASK: 					"Máscara de Subred de IPv4",
			IPV4_GATEWAY: 				"Puerta de Enlace Predeterminada de IPv4 ",
			TUNNEL_ADDR: 				"Dirección de Túnel",

			DUPLEX: 					"Dúplex",
			AUTO_NEGOTIATION: 			"Negociación Automática",
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

			IGMP: 						"Habilitar Proxy de IGMP",
			

			ASSIGNED_TYPE: 				"Tipo Asignado",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Stateless DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Prefijo de Dirección",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Dirección",
			DELEFATED: 					"Delegado",
			STATIC: 					"Estático",
			SITE_PREFIX: 				"Prefijo del Sitio",
			SITE_PREFIX_LEN: 			"Longitud del Prefijo del Sitio",

			PREFIX_TYPE:  				"Tipo de Configuración del Prefijo del Sitio",
			LAN_IPV6_ADDR:  			"Dirección de IPV6 de LAN",

			RELEASE_TIME: 				"Tiempo de concesión",
			RELEASE_TIME_TIP: 			"segundos. (El valor predeterminado es 86400, no cambiar a menos que sea necesario.)",
			ADDRESS:					"Dirección",
			SAVE: 						"Guardar",

			REBOOT_TIP: 				"El router está saltando a la nueva página de inicio de sesión. <br/>Por favor espere..."

		},

		IPTV:{
			TITLE: 						"Configuraciones",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Habilitar IPTV", 
			MODE:  						"Modo",
			IGMP_PROXY: 				"Proxy IGMP ",
			IGMP_VERSION: 				"Versión de IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Puente",
			BASIC: 						"Personalizado",
			EXSTREAM: 					"Singapur-ExStream",
			RUSSIA:  					"Rusia",
			UNIFY:  					"Malasia-Unifi",
			MAXIS:  					"Malasia-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internet",
			IP_PHONE: 					"Teléfono IP", 

			Q_TAG: 						"Etiqueta 802.1Q",
			ENABLE: 					"Habilitar",
			
			INTERNET_VLAN_ID: 			"ID del VLAN de Internet",
			INTERNET_VLAN_PRIORITY: 	"Prioridad de VLAN de Internet",
			IP_PHONE_VLAN_ID: 			"ID de VLAN del Teléfono IP",
			IP_PHONE_VLAN_PRIORITY: 	"Prioridad de VLAN del Teléfono IP",
			IPTV_VLAN_ID: 				"ID de VLAN de IPTV",
			IPTV_VLAN_PRIORITY: 		"Prioridad de VLAN de IPTV",
			IPTV_MULTI_VLAN_ID: 		"ID de VLAN de Multidifusión de IPTV",
			IPTV_MULTI_VLAN_PRIORITY: 	"Prioridad de VLAN de Multidifusión de IPTV"
		},

		DHCP_SERVER: {
			TITLE: 						"Servidor DHCP",
			
			SETTINGS: 					"Configuraciones",

			DHCP_SERVER: 				"Servidor DHCP",
			ENABLE_DHCP_SERVER: 		"Habilitar Servidor DHCP",

			IP_ADDR_POOL: 				"Grupo de Direcciones IP",
			LEASETIME: 					"Tiempo de concesión de Direcciones",
			LEASENOTE: 					"minutos.(1-2880. El valor por defecto es 120.)",
			
			GATEWAY: 					"Puerta de Enlace Predeterminada",
			DOMAIN: 					"Dominio Predeterminado",
			PRIMARYDNS: 				"DNS Primario",
			SECONDARYDNS: 				"DNS Secundario",

			OPTIONAL: 					"(Opcional)",

			CLIENTSLIST: 				"Lista de Clientes DHCP",
			CLIENT_NUMBER: 				"Clientes totales",
			CLIENT_NAME: 				"Nombre del Cliente",
			MAC_ADDR: 					"Dirección MAC",
			ASSIGNED_IP: 				"Dirección IP de concesión",
			LEASE_TIME: 				"Tiempo de concesión",

			RESERVATION: 				"Reservación de Direcciones",

			RESERVED_IP: 				"Dirección IP Reservada",
			IP_ADDRESS: 				"Dirección IP",
			DESCRIPTION: 				"Descripción",

			CLIENTSLIST: 				"Lista de Clientes DHCP",
			CLIENT_NUMBER: 				"Clientes totales",

			ENABLE: 					"Habilitar Esta Entrada",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada"
			
		},

		DDNS: {
			DDNS: 						"DNS dinámico",
			SERVICEPROVIDER: 			"Proveedor de Servicios",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"DynDNS",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Ir a registro...",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			DOMAIN_NAME_LIST: 			"Lista de nombres de dominio",
			DOMAIN_NAME: 				"Nombre de Dominio",
			LOGIN: 						"Inicio de Sesión",
			LOGIN_SAVE: 				"Iniciar sesión y Guardar", 
			LOGOUT: 					"Finalizar la sesión",
			STATU_SUCCESS:				"¡Éxito!",
			UPDATE_INTERVAL:			"Actualizar Intervalo",
			ONE_HOUR:					"1 hora",
			SIX_HOUR:					"6 horas",
			TWETEEN_HOUR:				"12 horas",
			ONE_DAY:					"1 día",
			TWO_DAY:					"2 días",
			THREE_DAY:					"3 días",
			NEVER:						"Nunca",
			UPDATE:						"Actualizar",
			STATU_INCORRENT:			"Nombre de usuario o contraseña incorrectos.",
			STATU_ERR_DOMAIN:			"Error de nombre de dominio.",
			WAN_IP_BIND: 				"Enlazando WAN IP",
			CURRENT_DOMAIN: 			"Nombre del dominio actual",
			REGISTER: 					"Registro",
			BIND: 						"Enlazar",
			UNBIND: 					"Desenlazar",
			TITLE: 						"DDNS no disponible",
			CONTENT: 					"To use our superior TP-Link DDNS service, please <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">Log in</a> with your TP-Link ID, or choose another service provider.",
			STATU_NO_LAUNCH:			"Not launching",
			STATU_FAIL_DDNS: 			"Error al actualizar DDNS.",
			STATU_FAIL_NOIP: 			"Error al actualizar NO-IP.",
			DISABLE: 					"Deshabilitar",
			ENABLE: 					"Habilitar",	
			STATU_NO_LAUNCH:			"Error al actualizar DDNS.",
			STATU_CONN:					"Conectando",
			WAN_IP_BIND: 				"Enlazando WAN IP",
			TIME: 						"Fecha de registro",
			BOUND: 						"Enlazado",
			FREE: 						"Libre",
			SORRY: 						"Error.",
			UNBIND_NOTE:          		"Si usted quiere enlazar %domain% a su dispositivo, por favor primero desenlace el nombre actual del dominio. "
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Enrutamiento Avanzado",
			STATIC_ROUTING: 			"Enrutamiento Estático",

			DESTINATION_NETWORK:		"Red Destino",
			SUBNET_MASK: 				"Máscara de Subred",
			DEFAULT_GATEWAY: 			"Puerta de Enlace Predeterminada",
			DESCRIPTION: 				"Descripción",
			
			SYSTEM_ROUTING_TABLE: 		"Tabla de Enrutamiento del Sistema",
			CLIENT_NUMBER: 				"Número de Rutas Activas",

			GATEWAY: 					"Puerta de Enlace",
			INTERFACE: 					"Interfaz",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Habilitar Esta Entrada",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Configuraciones de la Región",
			NOT_SUPPORT_5G: 			"La región sólo soporta 2.4GHz. Por favor asegúrese de seleccionar la región correcta.",

			REGION: 					"Región",
			NOTICE:  					"Para usar la función inalámbrica, debe mantener el hardware inalámbrico encendido.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Configuraciones Inalámbricas",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Habilitar la Radio Inalámbrica",

			WIRELESS_NETWORK_NAME: 		"Nombre de la Red (SSID)",
			WIRELESS_PASSWORD: 			"Contraseña",
			HIDE_SSID: 					"Ocultar SSID",

			SECURITY: 					"Seguridad",
			NO_SECURITY: 				"Sin Seguridad",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal (Recomendado)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2-Empresarial",
			WEP: 						"WEP",

			VERSION: 					"Versión",

			AUTO: 						"Automático",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Encriptación",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Modo",
			MODE_B:  					"802.11b únicamente",
			MODE_G:  					"802.11g únicamente",
			MODE_N:  					"802.11n únicamente",
			MODE_BG:  					"802.11b/g mixto",
			MODE_GN: 					"802.11g/n mixto",
			MODE_BGN:  					"802.11b/g/n mixto",

			MODE_A_5: 					"802.11a únicamente",
			MODE_AN_5: 					"802.11a/n mixto",
			MODE_N_5: 					"802.11n únicamente",
			MODE_AC_5:					"802.11ac únicamente",
			MODE_NAC_5:					"802.11n/ac mixto",
			MODE_ANAC_5:				"802.11a/n/ac mixto",


			CHANNEL_WIDTH: 				"Ancho de Canal",
			CHANNEL: 					"Canal",

			TRANSMIT_POWER: 			"Potencia de Transmisión",

			RADIUS_SERVER_IP: 			"IP del Servidor RADIUS",
			RADIUS_PORT: 				"Puerto de RADIUS",
			RADIUS_PASSWORD: 			"Contraseña de RADIUS",

			TYPE: 						"Tipo",
			OPEN_SYSTEM: 				"Sistema Abierto",
			SHARED_KEY: 				"Clave Compartida",

			KEY_SELECTED: 				"Clave Seleccionada",
			KEY1: 						"Clave1",
			KEY2: 						"Clave2",
			KEY3: 						"Clave3",
			KEY4: 						"Clave4",

			WEP_KEY_FORMAT: 			"Formato de Clave WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimales",

			KEY_TYPE: 					"Tipo de Clave",
			BIT64: 						"64-bit",
			BIT128: 					"128-bit",
			BIT152: 					"152-bit",

			KEY_VALUE: 					"Valor Clave",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Bajo",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto"
		},

		WPS: {

			TITLE2: 					"PIN del Router",
			ROUTERS_PIN_INFO: 			"Los clientes inalámbricos pueden conectarse al router usando el método PIN de WPS.",
			ENABLE_ROUTE_PIN: 			"PIN del Router",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Generar",
			DFT: 						"Predeterminado",

			TITLE: 						"Asistente de WPS",
			SELECT_SETUP: 				"Seleccionar un método de conexión WPS",
			PUSH_BTN: 					"Botón (Recomendado)",
			PUSH_DES: 					"Presionar el botón WPS físico en el router o dar clic abajo en el software \"Connect\".",
			CONNECT: 					"Conectar",
			CANCEL: 					"Cancelar",

			RESULT_HEAD: 				"El cliente inalámbrico",
			RESULT_END: 				"ha sido agregado a la red de manera exitosa",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"No Encontrado",
			ENTER_CLIENT_PIN: 			"Ingresar el PIN del cliente",
			SWITCH_NOTE:				"Para conectarse usando WPS, por favor encienda la función inalámbrica.",
			SWITCH_NOTE2:				"Para usar el Asistente de WPA, debe configurar los parámetros inalámbricos correctos primero.",
			STATUS_PIN_ERROR: 			"PIN de WPS inválido. Por favor revise e intente de nuevo.",
			STATUS_ERROR: 				"Error.",
			STATUS_CONN_ERROR: 			"Falló la conexión.",
			STATUS_CONNING: 			"Conectando...",
			STATUS_CANCEL: 				"Conexión cancelada.",
			
			NOTE: 						"Nota:",
			
			STATUS_CONN_OVERLAP: 		"Falló la conexión (Superpuesta).",
			STATUS_CONN_TIMEOUT: 		"Falló la conexión (Venció el tiempo límite).",
			STATUS_CONN_INACT: 			"Conexión inactiva."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Estaciones Inalámbricas En Línea",
			CLIENT_NUMBER: 				"Clientes totales",
			MAC_ADDRESS: 				"Dirección MAC",
			CONN_TYPE: 					"Tipo de Conexión",
			SECURITY: 					"Seguridad",
			RECEIVED_PACKETS: 			"Paquetes Recibidos",
			SEND_PACKETS: 				"Paquetes Enviados"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Configuraciones",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Permitir que los invitados se vean entre sí",
			
			ALLOW_LOCAL: 				"Permitir que los invitados tengan acceso a mi red local",
			
			WIRELESS: 					"Inalámbrico",
			WIRELESS_24G_RADIO: 		"Inalámbrico de 2.4GHz",
			WIRELESS_5G_RADIO: 			"Inalámbrico de 5GHz ",
			ENABLE_GUEST: 				"Habilitar la Red para Invitados",

			NAME_SSID: 					"Nombre de la Red (SSID)",
			HIDE_SSID: 					"Ocultar SSID",

			SECURITY: 					"Seguridad",
			NO_SECURITY: 				"Sin Seguridad",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal",

			VERSION: 					"Versión",
			AUTO: 						"Automático",
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
			
			ALG_TITLE: 					"Puerta de Enlace de Capa de Aplicación (ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"Transferencia de PPTP",
			L2TP_ALG: 					"Transferencia de L2TP",
			IPSEC_ALG: 					"Transferencia de IPSec",

			ENABLE_FTP_ALG: 			"Habilitar FTP ALG",
			ENABLE_TFTP_ALG: 			"Habilitar TFTP ALG",
			ENABLE_H323_ALG: 			"Habilitar H323 ALG",
			ENABLE_RTSP_ALG: 			"Habilitar RTSP ALG",
			ENABLE_PPTP_ALG: 			"Habilitar Transferencia de PPTP",
			ENABLE_L2TP_ALG: 			"Habilitar Transferencia de L2TP",
			ENABLE_IPSEC_ALG: 			"Habilitar Transferencia de IPSec",
			NAT_ENABLE_NOTICE: 			"Nota: Sus configuraciones no tomarán efecto hasta que la función NAT esté habilitado."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Servidores Virtuales",

			SERVICE_NAME: 				"Tipo de Servicio",
			EXTERNAL_PORT: 				"Puerto Externo",
			INTERNAL_IP: 				"IP Interno",
			INTERNAL_PORT: 				"Puerto Interno",
			PROTOCAL: 					"Protocolo",

			BTN_VIEW: 					"Ver Servicios Existentes",

			EXSITTING_SERVICE: 			"Servidores Existentes",
			
			PROTOCAL_ALL: 				"TODO",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX o XX-XX)",
			EXT_PORT_TIPS: 				"(XX o XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX o en Blanco ,1-65535)",

			NOTICE:						"En conflicto con el puerto de administración remota. ¿Está seguro que desea continuar?",

			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",
			OPERATION: 					"Operación",
			CHOOSE: 					"Escoger",
			NAT_ENABLE_NOTICE: 			"Nota: Sus configuraciones no tomarán efecto hasta que la función NAT esté habilitado."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Activación de Puertos",
			APPLICATION: 				"Aplicación",
			TRIGGER_PORT: 				"Puerto de Activación",
			TRIGGER_PROTOCOL: 			"Protocolo de Activación",

			EXTERNAL_PORTS: 			"Puerto Externo",
			EXTERNAL_PROTOCOL: 			"Protocolo Externo",

			BTN_VIEW: 					"Ver Aplicaciones Existentes",

			EXSITTING_APPLICATION: 		"Aplicaciones Existentes",
			APPLICATION_NAME: 			"Nombre de la Aplicación",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX o XX-XX,1-65535, como máximo 5 pares)",
			
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",
			OPERATION: 					"Operación",
			
			PROTOCAL_ALL: 				"TODO",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Nota: Sus configuraciones no tomarán efecto hasta que la función NAT esté habilitado."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Habilitar DMZ",
			HARDWARESTATUS: 			"Dirección IP del Host DMZ",
			NAT_ENABLE_NOTICE: 			"Nota: Sus configuraciones no tomarán efecto hasta que la función NAT esté habilitado."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Lista de Servicios UPnP",
			CLIENT_NUMBER: 				"Clientes totales",
			SERVICE: 					"Descripción del Servicio",
			EXTERNAL_PORT: 				"Puerto Externo",
			PROTOCAL: 					"Protocolo",
			IP_ADDR: 					"Dirección IP Interna",
			INTERNAL_PORT: 				"Puerto Interno",
			NAT_ENABLE_NOTICE: 			"Nota: Sus configuraciones no tomarán efecto hasta que la función NAT esté habilitado."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"Módem USB 3G/4G",
			LOCATION: 					"Región",
			MOBILE_ISP: 				"ISP Móvil",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Modo de Conexión",
			CONNECT_ON_DEMAND: 			"Conectar bajo Demanda",
			CONNECT_AUTOMATICALLY: 		"Conectar Automáticamente",
			CONNECT_MANUALLY: 			"Conectar Manualmente",
			MAX_IDLE_TIME: 				"Tiempo Máximo de Inactividad",
			CONNECTION_TIP: 			"La conexión actual del Internet es WAN (preferida).",
			IDLE_TIME_TIP: 				"El Modo de Conexión y el Tiempo Máximo de Inactividad no pueden ser configurados manualmente.",
			MINUTES: 					"minutos. (0 significa que la conexión siempre esté activa.)",

			AUTHENTICATION_TYPE: 		"Tipo de Autenticación",
			AUTO: 						"Automático",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"El valor predeterminado es Auto. No cambiar a menos que sea necesario.",

			CONNECT: 					"Conectar",
			DISCONNECT: 				"Desconectar",

			SET_TIP: 					"Configurar el Número de Marcación, APN, nombre de usuario y contraseña manualmente.",
			DIAL_NUMBER: 				"Número de Marcación",
			APN: 						"APN",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			OPTIONAL: 					"(Opcional)",
			MTU_SIZE: 					"Tamaño de MTU (en bytes)",
			MTU_SIZE_TIP: 				"El valor predeterminado es 1480. No cambiar a menos que sea necesario.",

			USE_FOLLOW_DNS_SERVER: 		"Usar los Siguientes Servidores DNS",
			PRIMARY_DNS: 				"DNS Primario",
			SECOND_DNS: 				"DNS Secundario",

			UNPLUGGED: 					"Ningún Módem USB conectado",
			IDENTIFYING: 				"Identificando…",
			IDENTIFY_SUCCESS: 			"Identificado exitosamente"
		},

		DISK_SETTING: {
			DISK_SET: 					"Configuraciones del Dispositivo",
			SCAN: 						"Escanear",
			SELFLY_REMOVE: 				"Remover de Manera Segura",
			SCAN_RESULT: 				"Se encontraron %n discos",
			NOT_FOUND: 					"No Encontrado",
			SELFLY_REMOVE: 				"Remover de Manera Segura",
			
			VOLUMN: 					"Volumen",
			CAPACITY: 					"Capacidad",
			FREESPACE: 					"Espacio Libre",
			USBSPACE: 					"Espacio Usado",
			
			STATUS: 					"Estado",
			INACT: 						"Inactivar",
			ACTIVE: 					"Activo",
			
			USAGE: 						"Uso",
			CAPACITY: 					"Capacidad",
			OPERATION: 					"Operación",	
			
			ACC: 						"Administración de la Cuenta", 	 	
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			USE_LOGIN: 					"Usar usuario de inicio de sesión",
			SCAN: 						"Escanear",
			ENJECT_ALL: 				"Expulsar Todos",
			ENJECT: 					"Expulsar ",
			ADD_USER: 					"Agregar Usuario",
			AUTH: 						"Autoridad"
		},

		FOLDER: {
			TITLE: 						"Configuraciones de Uso Compartido",
			ACCOUNT_TITLE: 				"Cuenta de uso compartido",
			ACCOUNT:					"Cuenta",
			AC_NOTE: 					"Puede usar la cuenta de inicio de sesión predeterminada o crear una cuenta nueva para tener acceso al contenido compartido.",
			
			AC_LOGIN: 					"Usar Cuenta Predeterminada",
			AC_FOLLOW: 					"Usar Cuenta Nueva",

			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",
			CONFIRM: 					"Confirmar Contraseña",

			SHARING_SETTING: 			"Configuraciones de Uso Compartido",
			SERVER_NAME: 				"Nombre de la Red/Servidor Multimedia",

			METHOD: 					"Método de Acceso",
			LINK: 						"Vínculo",
			PORT: 						"Puerto",

			NETWORK_NEIGHBORHOOD: 		"Mis Sitios de Red",
			FTP: 						"FTP",
			FTPEX: 						"FTP (a través de Internet)",

			SHARE_FOLDER: 				"Uso Compartido de Carpetas",
			SHAREING_ALL: 				"Compartir Todas",
			NOTE:  						"Activar para compartir todos los archivos y carpetas o mantenerlo Desactivado para sólo compartir las carpetas especificadas.", 
			ENABLE_AUTHENTICATION: 		"Habilitar Autenticación",
			SHAREING_FOLDER: 			"Carpetas de Uso Compartido",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Ruta de la Carpeta",
			VOLUMN_NAME: 				"Nombre del Volumen",

			SHARE_NAME: 				"Nombre de la Carpeta",
			FOLDER_PATH: 				"Ruta de la Carpeta",
			MEDIA_SHARING: 				"Uso Compartido de Multimedia",
			STATUS: 					"Estado",

			GUEST_ACCESS: 				"Permitir el Acceso a la Red para Invitados",
			ENABLE_AUTHENTICATION: 		"Habilitar Autenticación",
			ENABLE_WRITE_ACCESS: 		"Habilitar el Acceso de Escritura",
			ENABLE_MEDIA_SHARE: 		"Habilitar el Uso Compartido de Multimedia",
			
			BROWSE: 					"Explorar",
			BROWSE_TITLE: 				"Seleccionar una carpeta",

			NO_VOLUMN:					"Sin Volumen",
			
			NOTICE: 					"¿Está seguro que desea salir de la página de DNS Dinámico? Dar clic en Guardar para guardar y salir. Dar clic en Salir para salir sin guardar. Dar clic en Cancelar para permanecer.",
			NO_CHANGE_NOTICE: 			"¿Está seguro que desea salir de la página de DNS Dinámico?",

			SAVE_FAILED_NOTICE: 		"Error al guardar",
			CONTINUE: 					"Salir",
			CONTINUE_SAVE: 				"Guardar",
			CANCLE: 					"Cancelar",

			ENABLE: 					"Habilitar"

		},

		PRINT:{
			TITLE: 						"Servidor de impresión",
			NAME: 						"Nombre de la Impresora",
			ENABLE_PRINT_SERVER: 		"Servidor de impresión",
			NONE: 						"Ninguno",
			
			NOTE_TITLE: 				"Nota:",
			STEP1: 						"Paso 1:",
			STEP2: 						"Paso 2:",
			STEP3: 						"Paso 3:",

			NOTE1: 						"Instalar el controlador de la impresora en su computadora.",
			NOTE2: 						"Conectar la impresora USB al puerto USB del router mediante un cable USB.",
			NOTE3: 						"Instalar la Utilidad del Controlador de Impresoras USB de TP-Link. Por favor descárguelo de nuestro sitio web oficial: <a class=\"link\" href=\"%SUPPORT%\" target=\"_blank\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Controles Parentales",
			STATUS: 					"Estado",
			UNKNOWN: 					"Desconocido",

			DEVICE_CTR: 				"Dispositivos Bajo el Control Parental",
			DEVICE: 					"Nombre del dispositivo",
			MAC_ADDRESS: 				"Dirección MAC",
			TIME: 						"Tiempo de Acceso a Internet",
			DESCRIPTION: 				"Descripción",
			
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",
			OPTIONAL: 					"(Opcional)",
			BTN_VIEW: 					"Ver los Dispositivos Existentes",
			
			DEVICE_LIST: 				"Lista de Dispositivos",
			SYSTEM_TIME: 				"Hora del Sistema",
			
			RESTR: 						"Restricción de Contenido",
			MODE: 						"Política de Restricción",
			BLACKMODE: 					"Lista Negra",
			WHITEMODE: 					"Lista Blanca",
			ACCESS_DEVICES_LIST: 		"Lista de Dispositivos con Acceso",
			
			CHOOSE: 					"Escoger",
			ADD_A_NEW_KEYWORD: 			"Agrege una nueva Palabra Clave",
			ADD_A_NEW_DOMAIN_NAME: 		"Agregar un Nombre de Dominio Nuevo"
		},

		STREAMBOOST: {
			TITLE: 						"Stream Boost",
			INTERNET: 					"Internet",
			ROUTER: 					"Router ",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Otros",

			DEVICE: 					"Dispositivo",
			RATE: 						"Tasa",
			APPLICATION: 				"Aplicación",

			NAME: 						"Nombre",
			MAC_ADDRESS: 				"Dirección MAC",
			IP_ADDRESS: 				"Dirección IP",


			DEVICES: 					"Dispositivos"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Ancho de Banda",
			TEST_BANDWIDTH: 			"&gt;Probar Ancho de Banda",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Habilitar streamboost",
			UP_LIMITATION: 				"Límite Superior (Mbps)",
			DOWN_LIMITATION: 			"Límite Inferior (Mbps)",
			RUN_BANDWIDTH_TEST: 		"Ejecutar Prueba de Ancho de Banda",
			TESTING: 					"Probando",
			TEST_FAILED: 				"Error al probar",
			TEST_SUCCEED: 				"Prueba Exitosa",
			ENABLE_AUTOMATIC_TEST: 		"Habilitar Prueba Automática",
			KEEP_UP_TO_DATE: 			"Mantener SreamBoost actualizado",
			ENABLE_AUTOMATIC_UPDATE: 	"Habilitar Actualización Automática"

		},

		PRIORITY:{
			PRIORITY: 					"Prioridad",
			PRIORITY_TIPS: 				"La prioridad le permite cambiar la importancia de un dispositivo sobre otro. Esto es útil cuando el dispositivo está compitiendo por el ancho de banda limitado con la aplicación de la misma clasificación.",
			ALL_DEVICE: 				"Todos los Dispositivos",
			ACTIVE_DEVICE: 				"Dispositivo Activo",
			SAVE: 						"Guardar",
			ID: 						"ID",
			DEVICE: 					"Dispositivo",
			TYPE: 						"Tipo",
			MAC_ADDRESS: 				"Dirección MAC",
			STICK: 						"Barra"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Estadísticas",
			UP_TIME: 					"Tiempo Activo",
			DOWNLOADS: 					"Descargas",
			LAST_DAY: 					"Último Día",
			LAST_WEEK: 					"La Semana Pasada",
			LAST_MONTH: 				"El Mes Pasado",
			ALL_LAN_HOSTS: 				"Todos los Hosts de la LAN",
			OTHER: 						"Otro"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Cortafuegos",
			ENABLE_SPI: 				"Cortafuegos de SPI",

			DOS_PROTECTION: 			"Protección DoS",
			ENABLE_DOS: 				"Protección DoS",
			
			OFF: 						"Apagado",
			LOW: 						"Bajo",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto",

			ICMP: 						"Filtrado de Ataque de ICMP-FLOOD",
			UDP: 						"Filtrado de Ataque de UDP-FLOOD",
			TCP: 						"Filtrado de Ataque de TCP-SYN-FLOOD",
			ENABLE_DOS_TIP:             "La Protección DoS y las Estadísticas de Tráfico deben ser habilitadas al mismo tiempo.",

			IGNORE: 					"Ignorar el Paquete Ping del Puerto WAN",
			FORBID: 					"Prohibir el Paquete Ping del Puerto LAN",

			BLOCK_DOS: 					"La Protección DoS y las Estadísticas de Tráfico deben ser habilitadas al mismo tiempo.",
			HOST_NUMBER: 				"Número de Host",
			IP_ADDRESS: 				"Dirección IP",
			MAC_ADDRESS: 				"Dirección MAC"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Control de Acceso",
			ENABLE_ACCESS: 				"Control de Acceso",

			ACCESS_MODE: 				"Modo de Acceso",
			DEFAULT_ACCESS_MODE: 		"Por defecto Modo de Acceso",
			BLACK_LIST: 				"Lista Negra",
			WHITE_LIST: 				"Lista Blanca",
			
			WIRED:						"Conectado por Cable",
			WIRELESS:					"Inalámbrico",

			DEVICE_ONLINE: 				"Dispositivos en Línea",
			NAME: 						"Nombre del dispositivo",
			IP_ADDRESS: 				"Dirección IP",
			MAC_ADDRESS: 				"Dirección MAC",
			CONN_TYPE: 					"Tipo de Conexión",

			BLOCK: 						"Bloque",

			DEVICE_IN_WHITE: 			"Dispositivo en la Lista Blanca",
			DEVICE_IN_BLACK: 			"Dispositivo en la Lista Negra"
		},

		IP_MAC:{
			TITLE: 						"Configuraciones",
			ENABLE_ARP: 				"Enlace de ARP",

			ARP_LIST: 					"Lista de ARP",
			ARP_NUM: 					"Número de Entrada de ARP",

			MAC_ADDRESS: 				"Dirección MAC",
			IP_ADDRESS: 				"Dirección IP",
			BOUND: 						"Enlazado",
			UNBOUND: 					"Desvinculado",

			BINDING_LIST: 				"Lista de Enlace",
			DESCRIPTION: 				"Descripción",
			OPTIONAL: 					"(Opcional)",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada"
		},

		TIMESET: {
			TITLE: 						"Configuraciones de la Hora",
			ZONE: 						"Zona Horaria",
			DATE: 						"Fecha",
			DATEFORMAT: 				"MM/DD/YYYY",
			TIME: 						"Hora",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"Servidor NTP I",
			NTP2: 						"Servidor NTP II",
			OPTIONAL: 					"(Opcional)",

			CURRENT_TIME:  				"Hora Actual",
			SET_TIME: 					"Ajustar Hora",
			AUTOMATIC: 					"Obtener automáticamente desde Internet",
			MANUAL: 					"Manualmente",
			AUTOMATIC_BTN: 				"Obtener",


			GETGMT: 					"Obtener GMT",

			
			GETGMT_SUCCESS: 			"Éxito Al Obtener La Hora Desde el Servidor NTP",
			GETGMT_TIMEOUT: 			"Tiempo de Espera Agotado Al Obtener La Hora Desde el Servidor NTP",
			GETGMT_WAIT: 				"Esperando",
			
			M: 							"M",
			W: 							"W",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Horario de Verano",
			ENABLE_DAYLIGHT: 			"Habilitar el Horario de Verano",
			START: 						"Iniciar",
			END: 						"Terminar",

			RUNNING_STATUS: 			"Estado de Funcionamiento",
			DOWN: 						"El Horario de Verano está apagado.",
			UP: 						"El Horario de Verano está encendido."
		},

		DIAG:{
			TITLE: 						"Diagnóstico",
			DIAGNOSTIC_TOOL: 			"Herramienta de Diagnóstico",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"Dirección IP / Nombre de Dominio",
			COUNT: 						"Conteo de Ping",
			
			BASIC: 						"Básico",
			ADVANCED: 					"Avanzado",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Tamaño del Paquete Ping",
			PKTUNIT: 					"(4-1472 Bytes)",

			TIMEOUT: 					"Tiempo de Espera Agotado del Ping",
			TIMOUTUNIT: 				"(100-2000 Milisegundos)",

			TTL: 						"TTL Máx. de Traceroute",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Iniciar",
			STOP: 						"Parar"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Su firmware está actualizado",
			TITLE: 						"Actualización del Firmware",
			INFO: 						"Información del dispositivo",
			REMOTE_TITLE: 				"Actualización en Línea",
			LOCAL_TITLE: 				"Actualización Local",

			NEWFILE: 					"Nuevo Archivo del Firmware",
			FIRMWAREVERSION: 			"Versión del Firmware",
			HARDWAREVERSION: 			"Versión del Hardware",
			LATESTVERSION: 				"Versión Más Reciente",
			CONFIRM_CONTENT:			"¿Está seguro de actualizar el firmware?",
			WARNING:					"Actualización del Firmware... <br/> Para evitar algún daño, mantenga el dispositivo encendido y espere sin realizar ninguna operación durante este proceso.",
			REBOOTING: 					"Reiniciando... <br/> Para evitar algún daño, mantenga el dispositivo encendido y espere sin realizar ninguna operación durante este proceso.",
			DO_NOT_OPERATE: 			"Actualización del Firmware... <br/> Para evitar algún daño, mantenga el dispositivo encendido y espere sin realizar ninguna operación durante este proceso.",
			FIRMWARE_UPDATING_NOTE: 	"1.Actualización del Firmware...",
			REBOOTING_NOTE: 			"2.Reiniciando...",
			SCREEN_UPDATING_NOTE: 		"3.Actualizando Pantalla...",
			UPGRADE_FAILED: 			"Error de Actualización.",
			UPGRADE: 					"Actualizar",
			CHECK: 						"Verificar",
			DOWNLOADING: 				"Descargando...",
			UPGRADE_INOF: 				"Para evitar algún daño, por favor mantenga el router encendido.",
			NOTE: 						"Nota: ",
			NO_UPGRADE: 				"Esta es la Versión Más Reciente",

			UPGRADING: 					"Actualizando..",
			RETRY: 						"Reintentar",
			CANCEL: 					"Cancelar",
			ILEGAL_DEVICE:              "No se puede identificar el dispositivo. Por favor contacte al soporte técnico de TP-Link.",
			UPGRADE_FAIL: 				"No se puede actualizar. Por favor intente de nuevo más tarde.",
            CONFIG_RESET_NOTE:          "Sus configuraciones actuales se perderán después de actualizar a esta versión.",
			CHECK_UPGRADE: 				"Buscar actualización"
		},

		BACKUP:{
			BACKUP: 					"Copia de Seguridad",
			BACKUPTIP: 					"Guardar una copia de sus configuraciones actuales.",

			RESTORE: 					"Restaurar",
			RESTORETIP: 				"Restaurar a las configuraciones guardadas desde un archivo.",
			
			RESTORE_WARN:				"Restauración del Router... <br/>Por favor NO manipule durante el proceso.",
			RESTORE_CONFIRM_CONTENT: 	"¿Está seguro que desea restaurar el router desde el archivo de copia de seguridad?",
			
			FILE: 						"Archivo",

			FACTORY: 					"Restaurar a los Ajustes Predeterminados de Fábrica",
			FACTORYTIP: 				"Revertir todos los ajustes de configuración a sus valores predeterminados.",
			RESETTIP:					"Restablecer todas las configuraciones a los valores predeterminados, excepto su inicio de sesión y la información de la cuenta de la nube. ",
			FACTORY_CONFIRM_CONTENT:	"¿Está seguro que desea restaurar el router a sus ajustes predeterminados de fábrica?",
			FACTORY_WARN:				"Restauración del Router... <br/>Por favor NO manipule durante el proceso.",
			
			BACKUPBTN: 					"Copia de Seguridad",
			RESTOREBTN: 				"Restaurar",
			RESETBTN:					"Restaurar",
			FACTORYBTN: 				"Restauración a los Ajustes de Fábrica"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Administración de la Cuenta",
			
			OLDUSER: 					"Nombre de Usuario Anterior",
			OLDPWD: 					"Contraseña Anterior",

			NEWUSER: 					"Nombre de Usuario Nuevo",
			NEWPWD: 					"Contraseña Nueva",
			CONFIRM: 					"Confirmar Contraseña Nueva",

			RECOVERYINFO: 				"Recuperación de Contraseña",
			ENABLE_PASSWORD_RECOVERY: 	"Habilitar Recuperación de Contraseña",
			FROM: 						"Desde",
			TO: 						"Hasta",
			SMTP_SERVER: 				"Servidor SMTP",
			
			ENABLE_AUTHENTICATION: 		"Habilitar Autenticación",
			USERNAME: 					"Nombre de Usuario",
			PASSWORD: 					"Contraseña",

			TEST_MAIL: 					"Probar Correo Electrónico",

			LOCAL:						"Administración Local",
			LOCAL_MAC_AUTH: 			"Autenticación MAC Local",
			ACCESS: 					"Acceso a Todos los Dispositivos Conectados a la LAN",
			ACCESS_TIPS: 				"Activar para habilitar la administración para todos los dispositivos en la LAN o mantenerlo Apagado para habilitar la administración para un dispositivo específico.",
			
			MAC_ADDRESS: 				"Dirección MAC",
			VIEW_BTN: 					"Ver los Dispositivos Existentes",
			DESCRIPTION: 				"Descripción",

			EXIST_DEVICE:               "Dispositivos Existentes",

			OPTIONAL: 					"(Opcional)",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",

			DEVICE_NAME:				"Nombre del dispositivo",
			IP_ADDRESS:					"Dirección IP",
			

			REMOTE: 					"Administración Remota",
			DISABLE_REMOTE_MANAGEMENR: 	"Deshabilitar la Administración Remota ",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Habilitar la Administración Remota para Todos los Dispositivos",
			ENABLE_REMOTE_MANAGEMENR: 	"Habilitar la Administración Remota para los Dispositivos Especificados",
			WEB: 						"Puerto de Administración A Través de Internet",

			NOTICE:						"En conflicto con el puerto del servidor virtual. ¿Está seguro que desea continuar?",

			REMOTEIP: 					"Administración Remota Dirección IP",
			REMOTEIPNOTE: 				"(Ingresar 255.255.255.255 para todos)"
			
		},

		SYSLOG:{
			TITLE: 						"Registro del Sistema",
			LOG_FILTER: 				"Filtro del Registro:",
			
			TYPE_EQ: 					"Tipo=",
			
			ALL: 						"TODO",

			FIREWALL: 					"Cortafuegos", 
			NAT: 						"NAT",
			DDNS: 						"DNS dinámico",
			UPNP:						"UPnP",
			IMB:            			"Enlace de IP y MAC",
			IPTV:						"IPTV",
			DHCPS:						"Servidor DHCP",
			IGMP_PROXY:					"Proxy IGMP ",
			DOMAIN_LOGIN:				"Inicio de Sesión de Dominio",
			BASIC_SECURITY: 			"Seguridad Básica",
			PARENTAL_CONTROL: 			"Controles Parentales",
			ACCESS_CONTROL: 			"Control de Acceso",
			DOS_PROTECTION: 			"Protección DoS",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Estadísticas de Tráfico",
			TIME_SETTINGS: 				"Configuraciones de la Hora",
			ACCOUNT_MANAGEMENT: 		"Administración de la Cuenta",
			LOCAL_MANAGEMENT: 			"Administración Local",
			REMOTE_MANAGEMENT: 			"Administración Remota",
			LOCALE: 					"Local",
			FACTORY_RESET: 				"Restablecer a los Ajustes de Fábrica",
			LED_CONTROLLER: 			"Controlador del Led",
			NETWORK: 					"Red",
			USBSHARE: 					"Uso Compartido de USB",
			AND: 						"y",
			LEVEL: 						"Nivel",
			EMERGENCY:					"EMERGENCIA",
			ALERT:						"ALERTA",
			CRITICAL:					"CRÍTICO",
			ERROR: 						"ERROR",
			WARNING: 					"ADVERTENCIA",
			NOTICE: 					"AVISO",
			INFO: 						"INFORMACIÓN",
			DEBUG: 						"DEPURACIÓN",

			INDEX: 						"Índice ",
			TYPE: 						"Tipo",
			TIME: 						"Hora",
			LEVEL_COL:					"Nivel",

			CONTENT: 					"Contenido del Registro",
			
			MAIL_LOG: 					"Registro del Correo",
			SAVE_LOG: 					"Guardar Registro",

			SEND_OK: 					"Envío Correcto",
			SEND_FAILED: 				"Error de Envío",

			MAIL_SETTING: 				"Configuraciones del Correo",

 			FROM: 						"Desde",
 			TO: 						"Hasta",
 			SMTP_SERVER: 				"Servidor SMTP",
 			ENABLE_AUTHENTICATION: 		"Habilitar Autenticación",

 			USERNAME: 					"Nombre de Usuario",
 			PASSWORD: 					"Contraseña",
 			CONFIRM_PASSWORD: 			"Confirmar Contraseña",

 			AUTO_MAIL: 					"Habilitar Correo Automático",
 			LOG_AT: 					"Registrar en",
 			HH_MM: 						"(HH:MM) todos los días",

 			LOG_EVERY: 					"Registrar cada",
 			HOURS: 						"horas"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Configuraciones",
			STATUS: 					"Habilitar QoS",
			UPBANDWIDTH: 				"Cargar Ancho de Banda",
			DOWNBANDWIDTH: 				"Descargar Ancho de Banda",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Prueba de Velocidad",
			RULE_LIST: 					"Lista de Reglas QoS",
			RULE: 						"Regla QoS",
			ID: 						"ID",
			NAME: 						"Nombre",
			TYPE: 						"Tipo",
			DETAIL: 					"Detalle",
			PRIORITY: 					"Prioridad",

			APPLICATION: 				"Aplicación",
			APPLICATION_LIST: 			"Lista de Aplicaciones",
			CUSTOM_APP: 				"Aplicación Personalizada",
			MAC_ADDR: 					"Dirección MAC",
			MAC_ADDR_P: 				"MAC:",
			IP_ADDR: 					"Dirección IP",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Puerto físico",

			LOW: 						"Bajo",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto",

			PROTO: 						"Protocolo",
			PORT: 						"Puerto",
			PROTO_P: 					"Protocolo:",
			PORT_P: 					"Puerto:",
			PORT_TIPS: 					"(XX o XX-XX,1-65535, como máximo 5 pares)",

			ALL: 						"TODO",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Personalizado",

			WIFI_HOME: 					"WIFI-HOST",
			WIFI_GUEST: 				"WIFI-INVITADO",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Actualizar Base de Datos",

			NEWFILE: 					"Archivo Nuevo de la Base de Datos",
			FIRMWAREVERSION: 			"Versión de la Base de Datos",
			CONFIRM_CONTENT:			"¿Está seguro que desea actualizar la base de datos?",
			WARNING:					"Actualizando Base de Datos... <br/>Por favor NO opere durante el proceso.",
			
			UPGRADE: 					"Actualizar",

			SERVICE_RESTART: 			"QoS reiniciando",
			
			TYPE: 						"Tipo",
			BY_DEVICE: 					"Por Dispositivo",
			BY_APP: 					"Por Aplicación",
			BY_PHY: 					"Por Puerto Físico",

			HIGH_PRIORITY_LBL: 			"Prioridad Alta:",
			MIDDLE_PRIORITY_LBL: 		"Prioridad Intermedia:",
			LOW_PRIORITY_LBL: 			"Prioridad Baja:",

			HIGH_PRIORITY: 				"Prioridad Alta",
			MIDDLE_PRIORITY: 			"Prioridad Intermedia",
			LOW_PRIORITY: 				"Prioridad Baja"

		},

		APPLICATION:{
			APP_LIST: 					"Lista de Aplicaciones",
			GAME_LIST: 					"Lista de Juegos",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Estadísticas de Tráfico",
			ENABLE_STATISTICS: 			"Estadísticas de Tráfico",

			TITLE: 						"Lista de Estadísticas de Tráfico",
			IP_MAC: 					"Dirección IP/Dirección MAC",
			TPKT: 						"Paquetes Totales",
			TBYTE: 						"Bytes Totales",
			CPKT: 						"Paquetes Actuales",
			CBYTE: 						"Bytes Actuales",
			CICMP: 						"Tx de ICMP Actual",
			CUDP: 						"Tx de UDP Actual",
			CSYN: 						"Tx  de SYN Actual",
			
			DELETE_CONFIRM: 			"¿Está seguro que desea borrar las estadísticas de tráfico?",
			DELETE_ALL_CONFIRM: 		"¿Está seguro que desea borrar las estadísticas de tráfico?",

			RESET_ALL: 					"Restablecer Todo"
		},

		SYSPARA:{
			W24G: 						"Inalámbrico de 2.4GHz",
			W5G: 						"Inalámbrico de 5GHz ",
			SWITCH_NOTICE:  			"La función inalámbrica está apagada. Si desea usar esta función, por favor ENCIENDA el botón Wi-Fi.",

			ENABLE_TIPS: 				"La función inalámbrica está deshabilitada.",

			BEACON: 					"Intervalo de Baliza",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"Umbral de RTS",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Umbral de Fragmentación",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"Intervalo de DTIM",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Periodo de Actualización de la Clave de Grupo",
			GROUPUNIT: 					"segundos",
			
			
			WMM_FEATURE: 				"Característica de WMM",
			WMM: 						"Habilitar WMM",

			GI_FEATURE: 				"Característica de GI Corto ",
			GI: 						"Habilitar GI Corto",

			AP_FEATURE: 				"Característica de Aislamiento del AP",
			AP: 						"Habilitar Aislamiento del AP",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Habilitar TxBF",

			WDS_FEATURE: 				"Puente WDS",
			WDS: 						"Habilitar Conexión en Puente de WDS",
			
			SSID_BRIDEGE: 				"SSID (para ser conectado en puente)",
			SURVEY: 					"Examinar",

			SN: 						"SN",
			MAC_ADDRESS: 				"Dirección MAC",
			SSID: 						"SSID",
			SIGNAL: 					"Señal",
			CHANNEL: 					"Canal",
			SECURITY: 					"Seguridad",
			CHOSEN: 					"Seleccionado",
			AP_NUMBER:					"Número de AP",

			TOTAL: 						"Elementos totales",

			MAC: 						"Dirección MAC (para ser conectado en puente)",
			MACUNIT: 					"Ejemplo: 00-1D-0F-11-22-33",

			SECURITY: 					"Seguridad",
			NO: 						"No ",
			NONE: 						"Sin Seguridad",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Contraseña",
			
			AUTH_TYPE: 					"Tipo de Autenticación",
			AUTO: 						"Automático",
			OPEN: 						"Sistema Abierto",
			SHARED: 					"Clave Compartida",

			WEP_INDEX: 					"índice de WEP",
			KEY1: 						"Clave1",
			KEY2: 						"Clave2",
			KEY3: 						"Clave3",
			KEY4: 						"Clave4",

			WEP_KEY_FORMAT: 			"Formato de Clave WEP",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimales",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Habilitar WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Habilitar NAT",
			
			NAT_BOOST: 					"Acelerador NAT",
			ENABLE_NAT_BOOST: 			"Habilitar NAT Boost",
			
			MEDIA_SERVER: 				"Servidor Multimedia",
			SCAN_INTERVAL: 				"Intervalo de Escaneo Automático (Horas)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Configuración del Nivel de Protección DoS",

			ICMP: 						"Nivel de Paquetes de INUNDACIÓN ICMP",
			UDP: 						"Nivel de Paquetes de INUNDACIÓN UDP",
			TCP: 						"Nivel de Paquetes de INUNDACIÓN TCP",

			WDS_MODE: 					"Modo WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Bajo",
			MIDDLE: 					"Medio",
			HIGH: 						"Alto",

			TO: 						"a",
			NOTICE_NAT_REBOOT: 			"Reiniciando... <br/>Por favor NO manipule durante el proceso.",

			NOTICE_NAT_BOOST: 			"La Modificación del NAT Boost resultará en el reinicio de este dispositivo, ¿está seguro que desea continuar?",
			NOTICE:						"El canal de su router no es el mismo que el del canal del AP conectado por cable. Por favor verifique.",

			UNIT: 						"(5-7200) Paquetes/Segundos",
			LED: 						"Control de LED ",
			NIGHT_MODE: 				"Modo Nocturno",
			PERIOD_NIGHT_TIME: 			"Periodo de Modo Nocturno",
			ENABLE: 					"Habilitar el Modo Nocturno",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "Su LED está apagado. Si desea usar esta función, por favor presione el botón de LED o dé clic en el LED en la parte superior derecha de la página.",
			NOTE2:                      "El periodo de modo nocturno toma efecto basándose en la Hora del Sistema del router. Por favor asegúrese que ya haya configurado la Hora del router."
		},
		VPN:{
			OPEN_VPN: 					"Abrir VPN",
			NO_CERT_NOTE: 				"No hay certificado actualmente, por favor <b>Genere</b> uno antes de habilitar el Servidor VPN.",
			NO_CERT_NOTE2: 				"No hay certificado actualmente, por favor <b>Genere</b> uno antes de exportar la configuración.",
			ENABLE_VPN_SERVER: 			"Habilitar el Servidor VPN",
			SERVICE_TYPE: 				"Tipo de Servicio",
			SERVICE_PORT: 				"Puerto de Servicio",
			VPN_SUBNET: 				"Subred / Máscara de Red VPN",
			CLIENTS_ACCESS: 			"Acceso a Clientes",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Red Doméstica Únicamente",
			INTERNET_HOME: 				"Red Doméstica e Internet",
			CERT_STR: 					"No hay certificado actualmente, dar clic en OK para generar y guardar su configuración.",
			CERT_STR2: 					"No hay certificado actualmente, dar clic en OK para generar y exportar su configuración.",
			CONF_FILE: 					"Archivo de Configuración", 
			EXPORT_CONF_FILE: 			"Exportar la configuración.",
			EXPORT: 					"Exportar",

			INSTALL_GUIDE: 				"Guía de Instalación de Clientes VPN",
			INSTALL_STEP: 				"Para habilitar y conectar sus dispositivos de cliente al servidor VPN Abierto:",
			INSTALL_NOTICE:				"Antes de configurar el servidor VPN Abierto, por favor configure el Servicio de DNS Dinámico (recomendado) o asigne una dirección IP estática para el puerto WAN. Y asegúrese que la Hora del Sistema sea correcta.",
			INSTALL_NOTE1: 				"Seleccionar Habilitar Servidor VPN.",
			INSTALL_NOTE2: 				"Configurar los parámetros del servidor VPN abierto (Tipo de Servicio, Puerto de Servicio y Acceso a Clientes) y dar clic en Guardar. Y asegúrese que su Puerto Externo de las configuraciones de NAT no sea el puerto de servicio y el DMZ esté deshabilitado.",
			INSTALL_NOTE3: 				"Dar clic en Exportar para guardar el archivo de configuración.",
			INSTALL_NOTE4: 				"En sus dispositivos de cliente, descargue e instale la utilidad del cliente de VPN Abierto desde <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Las plataformas oficiales soportadas incluyen Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Activar la utilidad de cliente de VPN Abierto y agregar una nueva conexión VPN usando el archivo de configuración guardado para conectar su dispositivo cliente al servidor VPN.",
			NOTE: 						"Para aprender más acerca de los clientes de VPN Abierto, visite <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Dirección IP del Cliente",
			ACCOUNT_USERNAME: 			"Nombre de Usuario",
			ACCOUNT_PASSWORD: 			"Contraseña",
			CLIENT_IP_NOTE: 			"(hasta 10 clientes)",
			SAME_SUBNET_NOTE: 			"La dirección IP del cliente y la dirección IP de la LAN no pueden estar en la misma subred. <br/>Por favor ingrese otro.",
			CONFLICT_WITH_DHCP: 		"La dirección IP del cliente entra en conflicto con el grupo de direcciones de IP del DHCP. <br/>Por favor ingrésela de nuevo.",
			CONFLICT_WITH_RESERVED: 	"La dirección IP del cliente entra en conflicto con la dirección IP reservada. <br/>Por favor ingrésela de nuevo.",
			CONFLICT_WITH_OPENVPN: 		"La dirección IP del cliente y la dirección IP de VPN Abierto IP no pueden estar en la misma subred. <br/>Por favor ingréselas de nuevo.",
			SAME_SUBNET_NOTE2: 			"La Subred / Máscara de Red de VPN y la dirección IP de la LAN no pueden estar en la misma subred. <br/>Por favor ingrese otro.",
			CONFLICT_WITH_DHCP2: 		"La Subred / Máscara de Red de VPN entra en conflicto con el grupo de direcciones de IP del DHCP. <br/>Por favor ingrésela de nuevo.",
			CONFLICT_WITH_RESERVED2: 	"La Subred / Máscara de Red de VPN entra en conflicto con la dirección IP reservada. <br/>Por favor ingrésela de nuevo.",
			CONFLICT_WITH_PPTPVPN: 		"La Subred / Máscara de Red de VPN y la dirección IP de  VPN del PPTP no pueden estar en la misma subred. <br/>Por favor ingréselas de nuevo.",
			VPN_MASK_ERROR: 			"La máscara de red no puede ser mayor de 255.255.255.248. <br/>Por favor ingrésela de nuevo.",
			ACCOUNT_LIST: 				"Lista de Cuentas (hasta 16 usuarios)",
			ADVANCED_SETTING: 			"Avanzado",
			ALLOW_SAMBA: 				"Permitir el acceso a Samba (Sitio de Red)",
			ALLOW_NETBIOS: 				"Permitir la transferencia de NetBIOS",
			ALLOW_UNENCRYPTED_CONN: 	"Permitir conexiones no encriptadas ",
			USERNAME_CONFLICT: 			"Este nombre de usuario ya existe. Por favor ingrese otro.",
			
			CONNECT_PPTP: 				"Para habilitar y conectar sus dispositivos de cliente al servidor de VPN del PPTP:",
			CONNECT_NOTICE:				"Antes de que configure su servidor de VPN del PPTP, por favor configure el Servicio de DNS Dinámico (recomendado) o asigne una dirección IP estático para el puerto WAN. Y asegúrese que su Puerto Externo de las configuraciones de NAT no sea 1723 y que DMZ esté deshabilitado, y también sea correcta la Hora del Sistema.",
			CONNECT_NOTE1: 				"Seleccionar Habilitar Servidor VPN.",
			CONNECT_NOTE2: 				"Configurar los parámetros del servidor VPN del PPTP y dar clic en Guardar.",
			CONNECT_NOTE3: 				"En sus dispositivos de cliente, crear una conexión VPN del PPTP. Las plataformas oficiales soportadas incluyen Windows, Mac OSX, Linux, iOS, y Android.",
			CONNECT_NOTE4: 				"Activar el programa de VPN del PPTP, agregar una conexión nueva e ingresar el Nombre de Dominio del servicio de DDNS registrado o la dirección IP estática que se asignó al puerto WAN, para conectar su dispositivo cliente al servidor VPN del PPTP.",
			
			GENERATE_CERT: 				"Certificado",
			GENERATE_NEW_CERT: 			"Generar el certificado",
			GENERATE: 					"Generar",
			GENERATE_TIPS: 				"Generando certificado...<br/>Tomará unos minutos, por favor espere.",
			CERT_SUCCESS: 				"Éxito",
			CERT_FAIL: 					"Error, por favor intente de nuevo.",
			
			VPN_CONNECTIONS: 			"Conexiones VPN",
			OPEN_VPN_CONNECTIONS: 		"Conexión de VPN Abierto",
			PPTP_VPN_CONNECTIONS: 		"Conexión de VPN del PPTP",
			USER:				"Usuario",
			REMOTE_IP:			"IP Remoto",
			ASSIGNED_IP:			"IP Asignado"
		}
	};
})(jQuery);

