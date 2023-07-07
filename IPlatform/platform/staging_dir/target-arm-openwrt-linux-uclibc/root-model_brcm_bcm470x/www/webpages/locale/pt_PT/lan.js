(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			EMAIL: 						"Email",
			FORGET_PASSWORD: 			"Esqueceu a palavra-chave?",
			LOGIN: 						"Entrar",
			BEGIN: 						"Vamos Iniciar",
			IMPORTANT_UPDATE_INFO: 		"Para evitar o conflito com o dispositivo de front-end, o endereço IP do router foi atualizado para",
			CONTINUE: 					"Continuar",

			IMPORTANT_NOTICE: 			"Aviso Importante",
			OR: 						", tem a certeza que quer continuar a visita",
			END: 						".",
			END2: 						"T",

			FORGET_PASSWORD_INFO_0: 	"Pressione o botão de Reset durante %SECONDS% segundos para restaurar a configuração predefinida de fábrica no seu router.",
			FORGET_PASSWORD_INFO_1: 	"Se a funcionalidade de Recuperação de Palavra-Chave estiver ativada será enviado em email para o endereço designado, com um código de verificação para poder reconfigurar o nome de utilizador e palavra-chave.",
			FORGET_PASSWORD_SEND_FAILED:"Falha no envio do código! Por favor verifique a sua ligação à Internet.",

			VERIFICATION_CODE: 			"Código de verificação",

			RECEIVE_CODE: 				"Enviar Código",

			CONFIRM: 					"Confirmar",
			WELCOME: 					"Bem-Vindo ao TP-Link %model%. Por favor, inicie a sessão.",
			SEC: 						"S",

			USER_CONFLICT: 				"Conflito na ligação ao sistema!",
			FIRST_TIME: 				"Por favor, ligue primeiro o seu %PRODUCT% à Internet. Para começar, crie uma Senha para gerir o seu %PRODUCT%.",
			FIRST_TIME1: 				"Por favor, crie uma senha de administrador para gerir o seu %model%.",
			USER_CONFLICT_INFO: 		"O utilizador %USER% com o dispositivo %HOST% (%IP%/%MAC%) está atualmente conectado ao Router. Não pode conectar-se em simultâneo. Por favor tente mais tarde.",
			USER_CONFLICT_INFO_2: 		"O utilizador %USER% (%IP%)está atualmente conectado ao Router. Não pode conectar-se em simultâneo. Por favor tente mais tarde.",
			USER_CONFLICT_INFO_3: "Apenas um dispositivo pode ter a sessão iniciada. Pretende continuar e forçar o outro dispositivo a perder a sessão?",
			
			LOGIN_FAILED: 				"Falha na ligação ao sistema!",
			LOGIN_FAILED_COUNT: 		"Falhou acesso ao sistema %num1 vezes e ainda lhe restam %num2 tentativas.",
			NO_COOKIE: 					"Os Cookies tem de estar ativos para se ligar. Por favor ative os Cookies ou desligue o modo de navegação Privado/Incógnito.", 

			FORGET_PASSWORD_NOTE: 		"Se não tiver configurado a funcionalidade de Recuperação da Senha, pressione o botão de Reset durante %SECONDS% segundos para restaurar a configuração predefinida de fábrica no seu Router."
		},
		INIT: {
			PASSWORD: 					"Senha",
			CONFIRM_PASSWORD:				"Confirme a Senha",
			BEGIN: 						"Vamos Iniciar",
			IMPORTANT_UPDATE_INFO: 		"Para evitar o conflito com o outro Router, o endereço IP do seu Router deverá ser atualizado para",
			CONTINUE: 					"Seguinte",

			IMPORTANT_NOTICE: 			"Aviso Importante",
			OR: 						", tem a certeza que quer continuar a visita",
			END: 						".",
			END2: 						"T",

			CONFIRM: 					"Confirmar",

			SEC: 						"S",

			USER_CONFLICT: 				"Conflito de Login!",
			
			USER_CONFLICT_INFO: 		"O utilizador %USER% com o dispositivo %HOST% (%IP%/%MAC%) tem atualmente a sessão iniciada no Router. Não poderá iniciar a sessão em simultâneo. Por favor tente novamente mais tarde.",
			USER_CONFLICT_INFO_2: 		"Utilizador %USER% (%IP%) tem atualmente a sessão iniciada no Router. Não poderá iniciar a sessão ao mesmo tempo. Por favor tente novamente mais tarde.",
			
			LOGIN_FAILED: 				"Falha ao iniciar a sessão!",
			LOGIN_FAILED_COUNT: 		"Falhou acesso ao sistema %num1 vezes e ainda lhe restam %num2 tentativas.",
			NO_COOKIE: 					"Os Cookies tem de estar ativos para se ligar. Por favor ative os Cookies ou desligue o modo de navegação Privado/Incógnito.", 

			INIT_NOTE_TITLE: 			"Caro Cliente,",
			INIT_NOTE_CONTENT: 			"Por favor, ligue primeiro o seu %PRODUCT% à Internet. Para começar, crie uma Senha para gerir o seu %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Versão de Firmware",
			FEATURE: 						"Modificações e correções de Bugs:",
			TITLE: 							"Está disponível uma nova atualização de Firmware.",
			UPGRADE_NOW: 					"Atualizar agora",
			REMIND: 						"Lembrar mais tarde",
			NOTICE:    						"Olá, está disponível uma nova versão de Firmware para o seu Router.",
			NEVER: 							"Ignorar esta versão"
			
		},

		WAN_ERROR: {
			TITLE: 							"Erro na ligação WAN!",
			STATUS: 						"ESTADO",
			INFO: 							"Informação",
			SETUP: 							"Configurar uma ligação de Internet",
			NEVER: 							"Não me avisar novamente"
		},

		OFFLINE_ERROR:{
			TITLE: "Oops… Não foi possível aceder ao servidor Cloud.",
			NOTE1: "1. Certifique-se que tem acesso à Internet.",
			NOTE2: "2. O servidor Cloud está inacessível temporariamente. Por favor, atualize a página mais tarde.",
			NOTE3: "3. Se o problema persistir, contacte por favor o <a target=\"_blank\" id=\"support\">Suporte técnico TP-Link </a>.",
			ERROR: "Erro"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Versão de Firmware:",
			HARDWARE_VERSION: 				"Versão de Hardware:",
			HELP_SUPPORT: 					"Suporte",
			FAQ: 							"FAQ",
			CONFIRM_REBOOT: 				"Tem a certeza que quer reiniciar o router?",
			CONFIRM_LOGOUT: 				"Tem a certeza que quer sair?",
			UPGRADE_ALERT_1: 				"O Firmware atual não suporta o serviço TP-Link Cloud. Recomendamos que efetue o download da versão mais recente de Firmware em www.tp-link.com e proceda à atualização.",
			UPGRADE_ALERT_2: 				"O Firmware atual não suporta o serviço TP-Link Cloud. Recomendamos que atualize o Firmware clicando no ícone Update no canto superior direito.",
			ACCOUNT_UNLOGIN: 				"Conta",

			REBOOTING: 						"A reiniciar… <br/>Por favor não operar durante o processo de reinicialização.",

			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Leia o código QR para descarregar o App TP-Link Tether.",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Gerir de forma fácil e conveniente a sua rede a partir de qualquer dispositivo.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			""
		},

		NAV: {
			QUICK_SETUP: 				"Configuração Rápida",
			BASIC: 						"Básico",
			ADVANCED: 					"Avançado"
		},

		CONTROL: {
			LOGIN: 						"Entrar",
			LOGOUT: 					"Sair",
			UPDATE: 					"Atualizar",
			REBOOT: 					"Reiniciar",
			LED: 						"LED",
			LED_ON: 					"LED Ligado",
			LED_OFF: 					"LED Desligado",
			LED_DISABLED: 				"O estado do LED não pode ser alterado durante o período de modo noturno"
		},

		LANGUAGE: {
			EN_US: 						"Inglês",
			ZH_CN: 						"Chinês Simplificado"
		},

		REGION: {
			ALBANIA: 					"Albânia",
			ALGERIA: 					"Argélia",
			AMERICAN_SAMOA: 			"Samoa Americana",
			ARGENTINA: 					"Argentina",
			ARMENIA: 					"Armênia",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Austrália",
			AUSTRIA: 					"Áustria",
			AZERBAIJAN: 				"Azerbaijão",
			BAHAMAS: 					"Bahamas",
			BAHRAIN: 					"Bahrain",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Bielorrússia",
			BELGIUM: 					"Bélgica",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Bermudas",
			BOLIVIA: 					"Bolívia",
			BOSNIA_HERZEGOWINA: 		"Bósnia-Herzegovina",
			BRAZIL: 					"Brasil",
			BRUNEI_DARUSSALAM: 			"Brunei Darussalam",
			BULGARIA: 					"Bulgária",
			CAMBODIA: 					"Camboja",
			CANADA: 					"Canadá",
			CAYMAN_ISLANDS: 			"Ilhas Caimão",
			CHILE: 						"Chile",
			CHINA: 						"República Popular da China",
			COLOMBIA: 					"Colômbia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Croácia",
			CYPRUS: 					"Chipre",
			CZECH_REPUBLIC: 			"República Checa",
			DENMARK: 					"Dinamarca",
			DOMINICAN_REPUBLIC: 		"República Dominicana",
			ECUADOR: 					"Equador",
			EGYPT: 						"Egito",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estônia",
			ETHIOPIA: 					"Etiópia",
			FAEROE_ISLANDS: 			"Ilhas Faroé",
			FINLAND: 					"Finlândia",
			FRANCE: 					"França",
			FRENCH_GUIANA: 				"Guiana Francesa",
			FRENCH_POLYNESIA: 			"Polinésia Francesa",
			GEORGIA: 					"Geórgia",
			GERMANY: 					"Alemanha",
			GREECE: 					"Grécia",
			GREENLAND: 					"Groenlândia",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadalupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong R.A.E., R.P.C.",
			HUNGARY: 					"Hungria",
			ICELAND: 					"Islândia",
			INDIA: 						"Índia",
			INDONESIA: 					"Indonésia",
			IRAN: 						"Irão",
			IRAQ: 						"Iraque",
			IRELAND: 					"Irlanda",
			ISRAEL: 					"Israel",
			ITALY: 						"Itália",
			JAMAICA: 					"Jamaica",

			JAPAN: 						"Japão",
			JAPAN_1: 					"Japão 1",
			JAPAN_2: 					"Japão 2",
			JAPAN_3: 					"Japão 3",
			JAPAN_4: 					"Japão 4",
			JAPAN_5: 					"Japão 5",
			JAPAN_6: 					"Japão 6",

			JORDAN: 					"Jordânia",
			KAZAKHSTAN: 				"Cazaquistão",
			KENYA: 						"Quênia",

			NORTH_KOREA: 				"Coreia Do Norte",
			KOREA_REPUBLIC: 			"Coreia do Sul",
			KOREA_REPUBLIC_3: 			"Coreia do Sul 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Letónia",
			LEBANON: 					"Líbano",
			LIBYA: 						"Líbia",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Lituânia",
			LUXEMBOURG: 				"Luxemburgo",
			MACAU: 						"Macau R.A.E",
			MACEDONIA: 					"Antiga República Jugoslava da Macedónia",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malásia",
			MALDIVES: 					"Maldivas",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinica",
			MAURITIUS: 					"Maurícias",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"México",
			MONACO: 					"Principado do Mónaco",
			MONGOLIA: 					"Mongólia",
			MOROCCO: 					"Marrocos",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Holanda",
			NETHERLANDS_ANTILLES: 		"Antilhas Holandesas",

			NEW_ZEALAND: 				"Nova Zelândia",
			NICARAGUA: 					"Nicarágua",
			NIGERIA: 					"Nigéria",
			NORWAY: 					"Noruega",
			NORTHERN_MARIANA_ISLANDS: 	"Ilhas Marianas do Norte",
			OMAN: 						"Omã",
			PAKISTAN: 					"República Islâmica do Paquistão",
			PANAMA: 					"Panamá",
			PAPUA_NEW_GUINEA: 			"Papua Nova Guiné",
			PARAGUAY: 					"Paraguai",
			PERU: 						"Peru",
			PHILIPPINES: 				"República das Filipinas",
			POLAND: 					"Polônia",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Porto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Reunião",
			ROMANIA: 					"Romênia",
			RUSSIA: 					"Rússia",
			RWANDA: 					"Ruanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Arábia Saudita",
			SINGAPORE: 					"Singapura",
			SLOVAK_REPUBLIC: 			"República Eslovaca",
			SLOVENIA: 					"Eslovénia",
			SOUTH_AFRICA: 				"África do Sul",
			SPAIN: 						"Espanha",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Suriname",
			SWEDEN: 					"Suécia",
			SWITZERLAND: 				"Suíça",
			SYRIA: 						"Síria",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tanzânia",
			THAILAND: 					"Tailândia",
			TRINIDAD_TOBAGO: 			"Trinidad e Tobago",
			TUNISIA: 					"Tunísia",
			TURKEY: 					"Turquia",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ucrânia",
			UNITED_ARAB_EMIRATES: 		"Emirados Árabes Unidos",
			UNITED_KINGDOM: 			"Reino Unido",
			UNITED_STATES: 				"Estados Unidos",
			URUGUAY: 					"Uruguai",
			UZBEKISTAN: 				"Uzbequistão",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietname",
			VIRGIN_ISLANDS: 			"Ilhas Virgens (U.S.)",
			YEMEN: 						"Iémen",
			ZIMBABWE: 					"Zimbábue"
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
			M_INDONESIA:                                                  "Indonésia",
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
			ENIWETOK: 					"(GMT-12: 00) Eniwetok, Kwajalein", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11: 00) Ilha Midway, Samoa",
			HAWAII: 					"(GMT-10: 00) Havai",
			ALASKA: 					"(GMT-09: 00) Alasca",
			PACIFIC_TIME: 				"(GMT-08: 00) Horário do Pacífico",
			MOUNTAIN_TIME: 				"(GMT-07: 00) Mountain Time (US Canadá)",
			CENTRAL_TIME: 				"(GMT-06: 00) Central Time (US Canadá)",
			EASTERN_TIME: 				"(GMT-05: 00) Hora do Leste (US Canadá)",
			CARACAS:					"(GMT-04: 30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04: 00) Hora do Atlântico (Canadá)",
			NEWFOUNDLAND: 				"(GMT-03: 30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03: 00) Brasília, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02: 00) Mid-Atlantic",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01: 00) Açores, Cabo Verde",
			GREENWICH_MEAN_TIME: 		"(GMT) Tempo Médio de Greenwich, Dublin, Londres, Lisboa",
			BERLIN_STOCKHOLM: 			"(GMT + 01: 00) Berlim, Estocolmo, Roma, Berna, Bruxelas",
			ATHENS_HELSINKI: 			"(GMT + 02: 00) Atenas, Helsínquia, Europa Oriental, Israel",
			BAGHDAD_KUWAIT: 			"(GMT + 03: 00) Bagdad, Kuwait, Nairobi, Riade, Moscou",

			TEHERAN: 					"(GMT + 03: 30) Teerão",

			ABU_DHABI: 					"(GMT + 04: 00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT + 04: 30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT + 05: 00) Islamabad, Karachi, Ekaterinburg",

			MADRAS_CALCUTTA: 			"(GMT + 05: 30) Madras, Calcutá, Bombaim, Nova Deli",
			KATMANDU: 					"(GMT + 05: 45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT + 06: 00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT + 06: 30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT + 07: 00) Bangkok, Jakarta, Hanói",
			BEIJING_HONGKONG: 			"(GMT + 08: 00) Pequim, Hong Kong, Perth, Singapura",
			TOKYO_OSAKA_SAPPORO: 		"(GMT + 09: 00) Tokyo, Osaka, Sapporo, Seul, Yakutsk",

			ADELAIDE: 					"(GMT + 09: 30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT + 10: 00) Brisbane, Canberra, Melbourne, Sidney",
			MAGADAN_SOLOMAN_IS: 		"(GMT + 11: 00) Magadan, Ilhas Salomão, Nova Caledônia",
			FIJI_KAMCHATKA: 			"(GMT + 12: 00) Fiji, Kamchatka, Auckland",
			NUKU: 						"(GMT + 13: 00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Aplicação",
			GAME:						"JOGO",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"Linha",
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
			DAY: 						"Dia",

			MONDAY: 					"Segunda-feira",
			TUESDAY: 					"Terça-feira",
			WEDNESDAY: 					"Quarta-feira",
			THURSDAY: 					"Quinta-feira",
			FRIDAY: 					"Sexta-feira",
			SATURDAY: 					"Sábado",
			SUNDAY: 					"Domingo",
			
			MON: 						"Seg.",
			TUES: 						"Ter.",
			WED: 						"Qua.",
			THUR: 						"Qui.",
			FRI: 						"Sex.",
			SAT: 						"Sáb..",
			SUN: 						"Dom.",

			JAN: 						"Jan.",
			FEB: 						"Fev.",
			MAR: 						"Mar.",
			APR: 						"Abr.",
			MAY: 						"Mai.",
			JUN: 						"Jun.",
			JUL: 						"Jul.",
			AUG: 						"Ago.",
			SEP: 						"Set.",
			OCT: 						"Out.",
			NOV: 						"Nov.",
			DEC: 						"Dez."

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
			"1ST": 						"Primeiro",
			"2ND": 						"2º",
			"3RD": 						"3º",
			"4TH": 						"4º",
			"5TH": 						"Último",
			"1ST_": 					"1º",

			TH: 						"th"
		},

		GRID: {
			CLIENT_NUMBER: 				"Número de Cliente",

			ID: 						"ID",
			MODIFY: 					"Modificar",
			STATUS: 					"ESTADO",
			ENABLE: 					"Ativar",

			OPERATION: 					"Operação",
			CHOOSE: 					"Escolher",
			DESCRIPTION: 				"Descrição",
			

			AUTO_REFRESH: 				"Atualização Automática",
			REFRESH: 					"Atualizar",
			NUMBER: 					"Número",
			ENABLED: 					"Ativado",
			DISABLED: 					"Desativado",
			ACTIVE: 					"Ativo",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Adicionar",
			CHOOSE: 					"Escolher",
			EDIT: 						"Editar",
			DELETE: 					"Apagar",
			DELETE_ALL: 				"Apagar Tudo",
			REMOVE: 					"Remover",
			RESET: 						"Repor",
			RESET_ALL: 					"Repor Tudo",
			DETECT: 					"Detetar",
			ENABLE: 					"Ativar",
			DISABLE: 					"Desativar",
			CLEAR: 						"Apagar",

			REFRESH: 					"Atualizar",
			SEARCH: 					"Procurar…",
			BROWSE: 					"Procurar",

			SAVE: 						"Gravar",
			BACK: 						"Voltar",

			PREV: 						"Anterior",
			NEXT: 						"Seguinte",
			FINISH: 					"Terminar",
			
			ON: 						"Ligado",
			OFF: 						"Desligado",
			LOW: 						"Baixo",
			MIDDLE: 					"Médio",
			HIGH: 						"Alto",
			
			OK: 						"OK",
			CANCEL: 					"Cancelar",

			YES: 						"Sim",
			NO: 						"Não",
			
			CONNECTED: 					"Conectado",
			CONNECTING: 				"A Ligar",
			DISCONNECTING: 				"A desligar",
			DISCONNECTED: 				"Desligado",

			PASSWORD_HINT: 				"Senha",
			FILEBUTTONTEXT: 			"Procurar",
			FILEBLANKTEXT: 				"Por favor selecione um ficheiro.",
			NOSELECTEDTEXT: 			"Selecione opções.",

			ADD_A_NEW_KEYWORD: 			"Adicionar Nova Palavra",

			SUCCESSED: 					"Sucesso!",
			FORM_SAVED: 				"Gravado",
			FORM_FAILED: 				"Falhou",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Gravado",
			GRID_FAILED: 				"Falhou",
			GRID_NONE_SELECT: 			"Por favor, selecione pelo menos uma entrada.",
			GRID_DELETE_COMFIRM: 		"Tem a certeza que deseja eliminar estas entradas?",
			GRID_DELETE_ALL_COMFIRM: 	"Tem a certeza que deseja eliminar todas as entradas?",
			GRID_MAX_RULES: 			"Máximo de entradas excedido.",
			KEYWORD_MAX_OVERFLOW: 		"O número de palavras chave excedeu o limite.",

			NOTE: 						"Nota:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Formato inválido.",
			BLANKTEXT: 					"Esta campo é necessário.",

			EMAIL: 						"Formato de email inválido.",
			NUMBER: 					"Formato inválido.",

			NUMBER_MIN: 				"Valor inválido. Por favor inserir um número maior que %min.",
			NUMBER_MAX: 				"Valor inválido. Por favor inserir um número menor que %max.",

			NUMBER_MIN_MAX: 			"Valor inválido. Por favor inserir um número entre %min e %max.",
			HEX: 						"Este campo deve ser um número hexadecimal.",

			IP: 						"Formato inválido.",

			IP_NO_ALL_ZERO:				"O endereço não deve ser 0.0.0.0.",
			IP_NO_LOOP:					"O endereço não dever ser o IP de loopback.",
			IP_NO_D_TYPE:				"O endereço não deve ser um IP de Classe D.",
			IP_NO_E_TYPE:				"O endereço não deve ser um IP de Classe E.",
			IP_NO_ALL_ONE:				"O endereço não deve ser 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"O endereço não deve começar por 255.",
			IP_NO_FIRST_ZERO:			"O endereço não deve começar por 0.",
			MASK_NO_ALL_ONE:			"A máscara de rede não pode ser 255.255.255.255.",

			IPV6: 						"Formato inválido.",
			IPV6_NOT_GLOBAL:			"Formato inválido.",
			IPV6_NOT_PREFIX:			"Formato inválido.",
			IP_DOMAIN: 					"Formato inválido.",
			IPV6_DOMAIN: 				"Formato inválido.",
			MAC: 						"Formato inválido.",
			MULTI_MAC:					"Formato inválido.",
			DATE: 						"Formato inválido.",
			DATE_INVALID: 				"Por favor digite uma data entre 01/01/1970 e 12/31/2030.",
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
			NAME_SPECIAL: 				"Por favor introduza 4-15 caracteres alfanuméricos, números, - e _.",
			VPN_NAME_PWD: 				"Por favor introduza 1-15 caracteres alfanuméricos, números, - e _."	
			
		},


		ERROR: {			
			"00000001":					"Tipo de ficheiro inválido.",
			"00000002":					"Erro de validação.",
			"00000003":					"O ficheiro é muito grande.",
			"00000004":					"Erro de upload.",
			"00000005":					"Erro de reinicialização.",
			"00000006":					"Erro desconhecido.",
			"00000007":					"O item já existe. Por favor insira outro.",

			"00000009":					"Por favor utilize o valor predefinido 21 ou insira um valor entre 1024 e 65535.",
			"00000010":					"A porta deve ser um número.",

			"00000011":					"O nome de utilizador dever ser o mesmo do campo De.",
			"00000012": 				"O nome de utilizador tem de começar por um caracter do alfabeto.",

			"00000021":					"Formato inválido.",

			"00000032": 				"O valor deve ser menor que Baixo.",
			"00000033": 				"O valor deve ser menor que Médio e Baixo.",
			"00000034": 				"Valor inválido. Por favor inserir um número entre 5 e 7200.",

			"00000039": 				"Por favor utilize o valor predefinido 0 ou insira um valor entre 30 e 86400.",
			"00000040": 				"SSID e endereço MAC são obrigatórios.",

			"00000042": 				"Por favor utilize o valor predefinido 80 ou insira um valor entre 1024 e 65535.",

			"00000045": 				"O gateway predefinido e endereço IP LAN devem ser da mesma subnet. Por favor digite novamente.",

			"00000047": 				"A lista de endereços IP e o endereço IP LAN devem ser da mesma rede. Por favor insira novamente.",

			
			"00000049":					"A rede de destino é invalida.",

			"00000050": 				"Endereço IP de servidor DNS inválido. Por favor insira endereço IP.",
			"00000051": 				"Este endereço MAC já existe. Por favor insira outro.",
			"00000052": 				"O endereço IP já existe. Por favor digite outro.",

			"00000053": 				"O endereço inicial não deve ser superior ao endereço final. <br/>Por favor insira novamente.",

			"00000054": 				"A lista de endereços IP e o endereço IP LAN devem ser da mesma rede. Por favor insira novamente.",

			"00000055": 				"o IP não pode ser o mesmo para o endereço LAN.",

			"00000056": 				"O endereço IP remoto e o endereço IP LAN atual não devem ser da mesma rede. Por favor insira outro.",

			"00000057": 				"Palavra-chave PSK inválida. Por favor insira novamente.",
			"00000058": 				"Palavra-chave WEP inválida. Por favor insira novamente.",

			"00000059": 				"Máscara de Rede e endereço IP LAN inválidos. Por favor insira informação válida.",

			"00000060": 				"O endereço IP WAN e o endereço IP LAN não devem ser da mesma rede. <br/>Por favor insira outro.",

			"00000061": 				"O tempo de inicio tem de ser anterior ao tempo de fim.",

			"00000062": 				"Esta campo é necessário.",
			"00000063": 				"Esta campo é necessário.",

			"00000064": 				"Não é possível bloquear o endereço MAC do dispositivo.",
			"00000065": 				"Este item está em conflito com itens existentes Por favor valide.",
			
			"00000066": 				"A palavra-chave deve ter 8 a 63 caracteres ou 64 dígitos hexadecimais.",
			"00000067": 				"A palavra-chave deve ter 10 dígitos hexadecimais.",
			"00000068": 				"A palavra-chave deve ter 5 caracteres ASCII.",
			"00000069": 				"A palavra-chave deve ter 26 dígitos hexadecimais.",
			"00000070": 				"A palavra-chave deve ter 13 caracteres ASCII.",
			"00000071": 				"A palavra-chave deve ter 32 dígitos hexadecimais",
			"00000072": 				"A palavra-chave deve ter 16 caracteres ASCII.",
			"00000073": 				"A palavra-chave deve ter menos de 64 caracteres.",

			"00000074": 				"Tipo de ficheiro inválido.",

			"00000075": 				"O PIN deve ter 8 caracteres",

			"00000076": 				"A entrada está em conflito com itens existentes. Por favor verifique a porta Trigger e o protocolo Trigger",
			"00000077": 				"O endereço IP não pode ser o mesmo que o endereço IP LAN.",
			"00000078": 				"O endereço IP do dispositivo não pode ser igual ao endereço IP da LAN.",

			"00000080": 				"Palavra-chave não coincide. Por favor tente novamente",

			"00000088": 				"Esta operação não é permitida por gestão remota.",
			"00000089": 				"Excedeu %num tentativas, por favor tente novamente dentro de duas horas.",

			"00000090": 				"O destino não pode ser o IP de LAN.",
			"00000091": 				"O destino não pode ser o IP de WAN.",

			"00000092": 				"O endereço IP e o endereço IP LAN não devem ser da mesma subnet. <br/>Por favor digite outro.",
			"00000093": 				"O endereço IP WAN e o endereço IP LAN não devem ser da mesma rede. <br/>Por favor insira outro.",

			"00000094": 				"Os ID de VLAN não podem ser os mesmos.",
			"00000095": 				"Pelo menos uma Porta Internet é necessária.",

			"00000096": 				"Esta palavra já existe.",

			"00000097": 				"As configurações efetuadas na frequência 2.4GHz não terão efeito até o botão Wi-Fi estar ligado (ON).",
			"00000098": 				"As configurações efetuadas na frequência 5GHz não terão efeito até o botão Wi-Fi estar ligado (ON).",
			"00000099": 				"As configurações efetuadas nas frequências 2.4GHz e 5GHz não terão efeito até o botão Wi-Fi estar ligado (ON).",

			"00000100": 				"A configuração da rede 5GHz não está disponível devido às restrições na sua região/país.",

			"00000101": 				"A funcionalidade Wi-Fi está desligada. Se deseja utilizar esta função, por favor ligue o botão Wi-Fi.",
			"00000102": 				"A funcionalidade Wi-Fi está desligada. Se deseja utilizar esta função, por favor ligue o botão Wi-Fi.",

			"00000103": 				"A funcionalidade Wi-Fi está desligada. Se deseja utilizar esta função, por favor ligue o botão Wi-Fi.",
			"00000104": 				"A função Wi-Fi está desativada.",

			"00000105": 				"QoS e IPTV não podem ser ativados em simultâneo.",

			"00000106": 				"O endereço IP não pode ser o mesmo que o endereço IP LAN.",
			
			"00000107": 				"O destino já existe.",

			"00000110": 				"O endereço IP e o endereço IP de LAN devem ser da mesma rede.",
			
			"00000111": 				"QoS e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> não podem ser ativados em simultâneo.",
			"00000112": 				"A função WDS pode funcionar nas bandas 2.4GHz ou 5GHz.",
			"00000113": 				"WDS e Rede de Convidados não podem ser ativadas em simultâneo",
			"00000114": 				"Estatísticas de Tráfego e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> não podem ser ativados em simultâneo.",
			"00000115": 				"IPTV e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> não podem ser ativados em simultâneo.",

			"00000117": 				"O nome de domínio já existe.",
			"00000118": 				"O número de nomes de domínio excedeu o limite.",
			"00000119":				"O NAT Boost será desativado quando as opções <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> ou <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Estatísticas de Tráfego</a> estiverem ativas. ",

			"00000120": 				"A senha deve conter 5 ou 13 caracteres ASCII",
			"00000121": 				"A senha deve conter 10 ou 26 dígitos hexadecimais.",
			"00000122": 				"O nome de utilizador e senha estão vazios, tem a certeza que quer continuar?",
			"00000123": 				"A gravar… <br/>Por favor não operar durante este processo.",
			"00000124": 				"O PIN do router está bloqueado devido a repetidas tentativas utilizando um PIN errado. Por favor gerar um novo PIN.",

			"00000125": 				"O número de regras QoS excedeu o limite.",
			"00000126": 				"O tamanho do ficheiro excedeu o limite.",
			"00000127": 				"O conteúdo do ficheiro está incorreto.",
			"00000128": 				"Por favor selecione pelo menos uma aplicação.",
			"00000129": 				"Por favor selecione pelo menos uma porta física.",
			"00000130":					"A função WPS está desativada.",
			"00000131": 				"O Servidor NTP não deve ser o endereço de loopback.",
			"00000132": 				"Alteração de modo falhou. Por favor tente mais tarde ou reinicie o seu router.",
			"00000133": 				"Endereço IP de Anfitrião DMZ Inválido. Por favor digite um endereço IP válido.",
			"00000134":  				"IP Interno Inválido. Por favor digite um endereço IP válido.",
			"00000135": 				"Ficheiro de Firmware errado.",
			"00000136": 				"Erro de ficheiro de Segurança",
			"00000137": 				"O campo Utilizador está vazio. Tem a certeza que pretender continuar?",
			"00000138": 				"O campo Senha está vazio. Tem a certeza que pretender continuar?",
			"00000139": 				"Parâmetros de recuperação de senha incorretos.",
			"00000140": 				"Código incorreto.",
			"00000141": 				"A Recuperação da Senha está desativada.",
			"00000142": 				"Falha ao enviar o código. Por favor verifique a sua ligação de Internet.",
			"00000143": 				"Endereço de Email inválido.",
			"00000144": 				"Mensagem de Email inválida.",
			"00000145": 				"Não foi possível encontrar o dispositivo.",
			"00000146": 				"Falha na Autenticação.",
			"00000147": 				"A porta deve ser um valor entre 1 e 65535.",
			"00000148": 				"Para o intervalo de portas, a porta de início deverá ser sempre inferior à porta final. Por favor tente novamente.",
			"00000149": 				"O número de porta está sobreposto. Por favor tente novamente.",
			"00000150": 				"Máscara de Rede e endereço IP WAN inválidos. Por favor insira informação válida.",
			"00000151": 				"Por favor introduza pelo menos um dia.",
			"00000152": 				"Por favor configure o tempo de acesso à Internet.",
			"00000213":					"O endereço LAN IP e de DNS não podem ser iguais. <br/>Por favor insira outro valor.",
			"10000139": 				"Sem ligação de Internet",
			"10000140": 				"Excedeu o tempo do pedido. Por favor verifique a sua ligação de Internet e tente novamente.",
			"10000158": 				"A porta WAN está desconetada",
			"10000159": 				"Não foi possível estabelecer a ligação à Internet. Por favor contacte o seu Provedor de Serviços de Internet ou tente novamente mais tarde.",
			"10000160": 				"Não foi possível obter um endereço IP a partir do servidor DHCP. Por favor verifique a ligação WAN ou tente novamente mais tarde.",
			"10000161": 				"Autenticação PPPoE falhou. Por favor verifique o nome de utilizador e senha.",
			"10000162": 				"Não foi possível conectar ao servidor PPPoE.",

			"10000164": 				"Autenticação PPPoE falhou. Por favor verifique o nome de utilizador e senha.",
			"10000165": 				"Não foi possível conectar ao servidor PPPoE.",

			"10000167": 				"Autenticação L2TP falhou. Por favor verifique o nome de utilizador e senha.",
			"10000168": 				"Não foi possível conectar ao servidor L2TP.",
			"10000169": 				"Erro desconhecido. Por favor tente novamente mais tarde.",
			"10000172": 				"Ligação falhada.",

			"10000185": 				"Erro de sistema.",	
			"10000186": 				"Ficheiro de Firmware errado.",	
			"10000187": 				"Erro no Download de Firmware.",	
			"10000188": 				"Erro na atualização de Firmware.",	
			"10000191": 				"Não foi possível efetuar o download do ficheiro de Firmware.",
			"10000192": 				"Erro na atualização de Firmware.",
			"10000193": 				"Não foi possível ligar ao servidor.",	
			"10000194": 				"Não é possível ligar ao servidor Cloud. Por favor, tente novamente mais tarde.",
			"10000195": 				"Não é possível atribuir uma senha pois já configurou uma anteriormente.",
			
			"E3002":                    "O pedido excedeu o tempo.", 
			"E10000": 					"Erro comum.",
			"E20002": 					"O pedido excedeu o tempo.",
			"E20003": 					"O servidor Cloud está ocupado. Por favor tente mais tarde.",
			"E20107": 					"Valor inválido.",
			"E20200": 					"Formato de email inválido.",
			"E20502": 					"Não foi possível vincular o dispositivo. Tente por favor mais tarde.",
			"E20503": 					"Não foi possível desvincular o dispositivo. Tente por favor mais tarde.",
			"E20506": 					"A operação falhou. O dispositivo já se encontra vinculado a outra conta Cloud.",
			"E20507": 					"O dispositivo está desvinculado da conta.",
			"E20508": 					"O número de contas vinculadas já atingiu o limite.",
			"E20509": 					"As contas de utilizador não têm permissão para vincular novos utilizadores.",
			"E20571": 					"Este dispositivo está Offline.",
			"E20580": 					"A operação falhou. Este dispositivo não está vinculado a esta conta.",
			"E20600": 					"Este email não está registado.",
			"E20601": 					"Nome de Utilizador e senha incorretos",
			"E20602": 					"Esta conta ainda não está ativada.",
			"E20603": 					"Este email já está registado.",
			"E20604": 					"Utilizador não válido. Introduza por favor um endereço de email ou número de telefone.",
			"E20606": 					"Não foi possível enviar o email de ativação de conta.",
			"E20615": 					"Senha inválida. Introduza por favor 6-32 caracteres ASCII sem espaços.",
			"E20616": 					"Senha inválida. Introduza por favor 6-32 caracteres ASCII sem espaços.",
			"E20617": 					"Esta conta não existe.",
			"E20618": 					"Esta conta não existe.",
			"E20620": 					"Nickname inválido. Introduza por favor 1-64 caracteres.",
			"E20661": 					"Esta conta será bloqueada durante 2 horas devido a excessivas tentativas de Inicio de Sessão (20 vezes em meia hora).",
			"E20662": 					"Este dispositivo está bloqueado. Nas próximas 24 horas o dispositivo não irá responder a nenhum código de verificação.",
			"E20671": 					"Não foi possível verificar a conta.",
			"E20672": 					"Não foi possível verificar a conta. O link de ativação de conta expirou. Por favor, submeta um novo pedido.",
			"E20673": 					"O link para reposição da senha expirou. Por favor, submeta um novo pedido.",
			"E20674": 					"Não foi possível repor a senha.",
			"E20675": 					"A conta está ser utilizada.",
			"E22000": 					"Valor inválido.",
			"E22001": 					"O nome de domínio já está registado.",
			"E22002": 					"O número de domínios registados já atingiu o limite máximo.",
			"E22003": 					"O número de domínios vinculados já atingiu o limite máximo.",
			"E22004": 					"Este nome de domínio já está vinculado a outro dispositivo.",
			"E22006": 					"Erro de sistema. Por favor, tente mais tarde.",
			"E22007": 					"O nome de domínio contêm caracteres inválidos. Por favor tente novamente.",
			"E22008": 					"O nome de domínio não existe.",

			"E50101": 					"A porta WAN está desconetada",
			"E50102": 					"Não foi possível ligar à Internet. Por favor contacte o seu ISP ou tente novamente mais tarde.",
			"E50103": 					"Não foi possível obter um endereço IP a partir do servidor DHCP. Por favor verifique a ligação WAN ou tente novamente mais tarde.",
			"E50111": 					"Autenticação PPPoE falhou. Por favor verifique o nome de utilizador e senha.",
			"E50112": 					"Não foi possível conectar ao servidor PPPoE.",
			"E50121": 					"Autenticação PPPoE falhou. Por favor verifique o nome de utilizador e senha.",
			"E50122": 					"Não foi possível conectar ao servidor PPPoE.",
			"E50131": 					"Autenticação L2TP falhou. Por favor verifique o nome de utilizador e senha.",
			"E50132": 					"Não foi possível conectar ao servidor L2TP.",
			"E50140": 					"Erro desconhecido. Por favor tente novamente mais tarde.",
			"E51215": 					"Excedeu o tempo do pedido. Por favor verifique a sua ligação de Internet e tente novamente.",
			"E_CLOUD_SERVER": 			"Erro de servidor. Por favor, tente novamente mais tarde.",
			"E5000": 					"Não foi possível ligar ao servidor Cloud.",
			"E5001": 					"TP-Link ID incorrecto (email). O seu dispositivo poderá estar offline e apenas o Administrador (%email) terá acesso Offline.",
			"E5002": 					"Senha incorrecta."
		},

		MENU: {
			STATUS: 					"ESTADO",
			NETWORK: 					"Rede",
			NETWORK_MAP: 				"Mapa de Rede",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"Servidor DHCP",
			DYNAMIC_DNS: 				"DNS Dinâmico",
			ADVANCED_ROUTING: 			"Routing Avançado",

			WIRELESS: 					"Wi-Fi",
			WIRELESS_SETTINGS: 			"Definições Wi-Fi",
			WDSBRIDGING: 				"Bridging WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"Filtragem de MAC",
			WIRE_STATISTICS: 			"Estatísticas",
			
			
			GUEST_NETWORK: 				"Rede de Convidados",
			WIRELESS_SETTINGS: 			"Definições Wi-Fi",
			STORAGE_SHARING: 			"Partilha de Armazenamento",
			NAT_FORWARDING: 			"NAT Forwarding",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Servidores Virtuais",
			PORT_TRIGGERING: 			"Port Triggering",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Definições USB",
			BASIC_SET: 					"Definições Básicas",
			DISK_SET: 					"Definições de Dispositivo",
			FOLDER_SHARING: 			"Partilha de Acesso",
			STORAGE_SHARING: 			"Partilha de Armazenamento",
			FTP_SERVER: 				"Servidor FTP",
			MEDIA_SERVER: 				"Servidor de Média",
			PRINT_SERVER: 				"Servidor de Impressão",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Controlo Parental",
			
			QOS:  						"QoS",
			DATABASE:  					"Base de Dados",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Mapa",
			SB_MAP: 					"Mapa",
			SB_BANDWIDTH:  				"Largura de Banda",
			SB_PRIORITY: 				"Prioridade",
			SB_STATISTICS: 				"Estatísticas",

			
			SECURITY: 					"Segurança",
			SETTINGS: 					"Definições",
			ACCESS_CONTROL: 			"Controlo de Acesso",
			IP_MAC_BINDING: 			"Vinculo IP&MAC",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Ferramentas de Sistema",
			TIME_SETTINGS: 				"Definições de Tempo",
			DIAGNOSTIC: 				"Diagnósticos",
			FIRMWARE_UPGRADE: 			"Atualização de Firmware",
			BACKUP_RESTORE: 			"Cópia de Segurança e Reposição",
			ADMINISTRATION: 			"Administração",
			SYSTEM_LOG: 				"Registo de Eventos de Sistema",
			STATISTICS: 				"Estatísticas de Tráfego",
			SYSTEM_PARAMETERS: 			"Parâmetros de Sistema",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"Servidor VPN",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"VPN PPTP",
			VPN_CONNECTIONS: 			"Ligações VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Região e Fuso Horário",
			INTERNET_CONNECTION_TYPE: 	"Tipo de Ligação à Internet",
			WIRELESS_SETTINGS: 			"Definições Wi-Fi",
			SUMMARY: 					"Resumo",
			SETUP_COMPLETE: 			"Testar Ligação à Internet",
			SETUP_COMPLETE_CLOUD: 			"Serviço Cloud TP-Link",

			EXIT: 						"Sair",
			NEXT: 						"Seguinte",
			SAVE: 						"Gravar",
			FINISH: 					"Terminar",
			OK: 						"OK",
			NONE: 						"Detecção falhada.",

			REGION: 					"Região",
			TIME_ZONE: 					"Fuso Horário",

			AUTO_DETECT: 				"Deteção Automática",
			DYNAMIC_IP: 				"IP Dinâmico",
			STATIC_IP: 					"IP Estático",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Se não tem a certeza sobre o seu tipo de ligação à Internet, utilize a opção Deteção Automática ou contacte o seu ISP (Internet Service Provider) para obter assistência.",

			DYNAMIC_IP_INFO: 			"Se o seu ISP só permite o acesso a partir de um endereço MAC especifico, necessita de clonar esse endereço MAC. Se não tem a certeza, selecione Não Clonar Endereço MAC.",
			MAC_CLONE_NO: 				"Não Clonar Endereço MAC",
			MAC_CLONE_YES: 				"Clonar Endereço MAC deste Computador",
			MAC_CLONE_NOTE: 			"Se escolher Clonar Endereço MAC, antes de clicar Próximo por favor garanta que o endereço MAC deste computador está registado no seu ISP.",

			PPPOE_INFO: 				"Por favor insira o seu nome de utilizador e Senha PPPoE.",
			
			STATIC_IP_INFO: 			"Por favor insira a informação IP.",

			L2TP_INFO: 					"Por favor insira o seu nome de utilizador e Senha L2TP.",
			PPTP_INFO: 					"Por favor insira o seu nome de utilizador e Senha PPTP.",
			
			USERNAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			SERVER_IP_ADDRESS_NAME: 	"IP Servidor VPN/Nome de Domínio",
			IP_ADDRESS: 				"Endereço IP",
			SUBNET_MASK: 				"Máscara de Rede",
			DEFAULT_GATEWAY: 			"Gateway Predefinido",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DSN Secundário",
			OPTIONAL: 					"(Opcional)",
			
			ON: 						"Ligado",
			OFF: 						"Desligado",
			WIRELESS_24GHZ: 			"Wi-Fi 2.4GHz",
			WIRELESS_5GHZ: 				"Wi-Fi 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Ativar Rádio Wi-Fi",
			NAME_SSID: 					"Nome de Rede Wi-Fi (SSID)",

			SUMMARY_INFO1: 				"Tem de reconectar os seus dispositivos Wi-Fi à nova rede Wi-Fi antes de clicar no botão <strong>Seguinte</strong>.",
			SUMMARY_INFO2: 				"O nome da rede Hi-fi e a Senha foram alteradas como indicado em baixo",
			SUMMARY_INFO3: 				"Garante que se conectou à nova rede Wi-Fi.",

			WIRELESS_24GHZ_SSID: 		"Nome da Rede Wi-Fi 2.4GHz (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Senha Wi-Fi 2.4Ghz",
			WIRELESS_5GHZ_SSID: 		"Nome da Rede Wi-Fi 5GHz (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Senha Wi-Fi 5Ghz",

			SORRY: 						"Falhou.",
			SUCCESS: 					"Sucesso!",
			TEST_INTERNET_SUCCESS_INFO: "Sucesso! Clique em Terminar para finalizar o processo de Instalação Rápida",

			TEST_INTERNET_FAILED_INFO_0:"Por favor verifique se todos os parâmetros da Configuração Rápida estão corretos e tente novamente. Se todos os parâmetros de Configuração Rápida estão corretos, por favor reinicie o seu modem, espere 2 minutos e clique em Testar Ligação à Internet mais uma vez. Se não estiver a usar um modem, poderá necessitar entrar em contato com o seu provedor de serviços de Internet (ISP) para obter assistência.",
			TEST_INTERNET_FAILED_INFO_1: "Oops... A ligação à Internet não foi configurada com sucesso.<br />1. Certifique-se que todos os cabos estão corretamente ligados.<br />2. Clique Voltar e verifique se as definições de ligação à Internet estão corretas.<br />3. Contacte o nosso suporte Técnico se o problema persistir.",
			SUMMARY_INFO4: 				"Desculpe! Detetamos que não reconectou os seus dispositivos Wi-Fi à nova rede Wi-Fi. Por favor faça-o e depois clique em <strong>OK</strong>",
                                         
			CONGRATULARIONS: 			"Parabéns!",
			COMPLETE_INFO_0: 			"Completou o processo de Configuração Rápida.",
			COMPLETE_INFO_1:			"Em baixo clique Testar Ligação à Internet e depois clique em Finalizar.",
			COMPLETE_INFO_2: 			"Não tem a sessão iniciada na sua conta TP-Link Cloud. Poderá iniciar a sessão mais tarde a partir da opção Básico > TP-Link Cloud.",
			TEST_INTERNET: 				"Testar Ligação à Internet",

			
			RESET_USER_TITLE: 			"Configurar novo utilizador e Senha.",
			NEW_USERNAME: 				"Novo Utilizador",
			NEW_PASSWORD: 				"Nova Senha",
			CONFIRM_PASSWORD: 			"Confirmar Nova Senha",
			
			NO_ACCOUNT: 				"Não tem um TP-Link ID?",
			REGISTER_NOW: 				"Registar agora",
			REGISTER_SKIP: 				"Iniciar a Sessão mais tarde",
			LOGIN: 						"Iniciar Sessão",
			REGISTER_NEW:				"Registar nova conta",
			COMPLETE_INFO_EMAIL_PREFIX: "O seu TP-Link ID é:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Recomendamos que inicie a sessão utilizando esta conta para gerir convenientemente o seu dispositivo e tirar partido de mais funcionalidades TP-Link Cloud.",

			INTERNET_OK: 				"Parabéns! Configuração de rede efetuada com sucesso. Disfrute da Internet.",
			CLOUD_WIZARD: 				"Para mais funcionalidades TP-Link Cloud, por favor inicie a sessão com o seu <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "Com um TP-Link ID, poderá:", 
			ACCOUNT_DESP_SUB1:          "Aceder ao seu dispositivo e servidores locais (FTP, HTTP, etc.) a partir de qualquer ponto na Internet.",
			ACCOUNT_DESP_SUB2:          "Mantenha sempre o firmware atualizado com recurso à função de Atualização Online",
	        ACCOUNT_DESP_SUB3:          "Controle múltiplos dispositivos com apenas uma conta",
			
			CONFIRM: 					"Confirmar"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Status da Internet",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Tipo de Ligação",
			SECONDARY_CONN: 			"Ligação Secundária ",

			POOR_CONNECTED: 			"Ligação Fraca",
			UNPLUGGED: 					"A porta WAN está desconetada",
			
			CONNECTED: 					"Conectado",
			DISCONNECTED: 				"Desconectado",

			INTERNET_IP_ADDR: 			"Endereço IP",
			
			IP_ADDR: 					"Endereço IP",
			MAC_ADDR: 					"Endereço MAC",
			GATEWAY: 					"Gateway",

			AUTO: 						"Auto",
			
			ROUTER: 					"Router",
			WIRELESS_CLIENTS: 			"Clientes Wi-Fi",
			HOST_CLIENTS: 				"Dispositivos Cliente",
			GUEST_CLIENTS: 				"Clientes Convidados",
			WIRE_CLIENTS: 				"Clientes LAN",
			PRINTER: 					"Impressora",
			USB_DISK: 					"Disco USB",
			WIRELESS: 					"Wi-Fi",
			NAME: 						"Nome",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Canal",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Wi-Fi 2.4GHz",
			WIRELESS_5GHZ: 				"Wi-Fi 5GHz",
			
			GUEST_24GHZ: 				"Rede Convidados 2.4GHz",
			GUEST_5GHZ: 				"Rede Convidados 5GHz",
			
			STATUS: 					"ESTADO",
			TOTAL: 						"Total",
			AVAILABLE: 					"Disponível",
			GB: 						"GB",
			BRAND: 						"Marca",

			DYNAMIC_IP: 				"IP Dinâmico",
			STATIC_IP: 					"IP Estático",
			SUBNET_MASK: 				"Máscara de Rede",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Túnel 6to4",
			NONE: 						"Nenhum"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Deteção Automática",
			INTERNET_CONN_TYPE: 		"Tipo de Ligação à Internet",
			DYNAMIC_IP: 				"IP Dinâmico",
			STATIC_IP: 					"IP Estático",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"A porta WAN está desconetada",
			NONE: 						"Nenhum",
			DETECT_FAIL: 				"Auto deteção falhou",
			SECONDARY_CONN: 			"Ligação Secundária ",

			DYNAMIC_YES: 				"Não Clonar Endereço MAC",
			DYNAMIC_NO: 				"Clonar Endereço MAC deste Computador",
			
			IP_ADDR: 					"Endereço IP",
			SUBNET_MASK: 				"Máscara de Rede",
			DEFAULT_GATEWAY: 			"Gateway Predefinido",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DSN Secundário",
			OPTIONAL: 					"(Opcional)",
			USER_NAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			SERVER_IP_ADDR_NAME: 		"IP Servidor VPN/Nome de Domínio",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Se não tem a certeza sobre o seu tipo de ligação à Internet, utilize a opção Deteção Automática ou contacte o seu ISP (Internet Service Provider) para obter assistência."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Definições Wi-Fi",
			MODE_2G: 					"Wi-Fi 2.4GHz",
			MODE_5G: 					"Wi-Fi 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nome de Rede Wi-Fi (SSID)",
			WIRELESS_PASSWORD: 			"Senha",
			ENABLE_WIRELESS: 			"Ativar Rádio Wi-Fi",
			SAVE: 						"Gravar",
			ENCRYPTION_2G_NOTICE:		"A encriptação 2.4G é %s.",
			ENCRYPTION_5G_NOTICE:		"A encriptação 5G é %s.",
			ENCRYPTION_2G_NO: 			"Rede Wi-Fi 2.4GHz não está encriptada",
			ENCRYPTION_5G_NO: 			"Rede Wi-Fi 5GHz não está encriptada",
			ENCRYPTION_SURE: 			"Tem a certeza que quer continuar?",

			HIDE_SSID: 					"Ocultar SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Definições Básicas",
			TITIL_NEW:					"Disco&Conta de Utilizador",
			DISK_SET:					"Definições de Dispositivo",

			SELFLY_REMOVE:				"Remover em Segurança",
			SCANING:					"A pesquisar…",
			SCAN_RESULT:				"%n discos encontrados",
			
			DISKS:						"Discos",
			USERS: 						"Conta de Utilizador",
			DEVICENAME: 				"Nome de Dispositivo",
			VOLUMN: 					"Volume",

			USBSPACE: 					"Espaço Ocupado",
			FREESPACE: 					"Espaço Livre",
			STATUS: 					"ESTADO",
			INACT: 						"Desativar",
			USAGE: 						"Utilização",
			CAPACITY: 					"Capacidade",
			OPERATION: 					"Operação",
			
			ACC: 						"Gestão de Contas",
			USERNAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			USE_LOGIN: 					"Utilize a Conta de Utilizador",
			SCAN: 						"Examinar",
			ENJECT_ALL: 				"Ejetar Todos",
			ENJECT: 					"Ejetar",
			ADD_USER: 					"Adicionar Utilizador",
			AUTH: 						"Autoridade",


			LOCATION: 					"Localização",
			MOBILE_ISP: 				"ISP Móvel",
			DIAL_NUMBER: 				"Número a Marcar",
			APN: 						"APN",
			USERNAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			MTU_SIZE: 					"Tamanho MTU",
			OPTIONAL: 					"(Opcional)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Controlo Parental",

			DEVICE_CTR: 				"Dispositivos sob Controlo Parental",
			ID: 						"ID",
			DEVICE: 					"Nome de Dispositivo",
			MAC_ADDRESS: 				"Endereço MAC",
			TIME: 						"Tempo de Acesso à Internet",
			DESCRIPTION: 				"Descrição",
			ENABLE: 					"Ativar",
			ENABLE_THIS_ENTRY: 			"Ativar",
			OPTIONAL: 					"(Opcional)",
			BTN_VIEW: 					"Ver Dispositivos Existentes",
			ACCESS_DEVICES_LIST: 		"Lista de Dispositivos",
			OPT: 						"Operação",
			STATUS: 					"ESTADO"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Rede de Convidados",
			MODE_2G: 					"Wi-Fi 2.4GHz",
			MODE_5G: 					"Wi-Fi 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nome de Rede Wi-Fi (SSID)",
			WIRELESS_PASSWORD: 			"Senha",
			ENABLE_WIRELESS: 			"Ativar Rede de Convidados",
			SAVE:						"Gravar",
			HIDE_SSID: 					"Ocultar SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Conta Cloud",
			OFFLINE_NOTE_TITLE: 		"Dispositivo Offline",
			LOGIN_NOTE_TITLE: 			"Oops…",
			LOGIN_OFFLINE_NOTE: 		"O dispositivo está offline. Por favor, verifique a ligação WAN e as configurações de rede por forma a certificar-se que os parâmetros de rede foram introduzidos corretamente.",

			EMAIL: 						"Email",
			PASSWORD: 					"Senha",
			FORGET_PASSWORD: 			"Esqueceu a palavra-chave?",

			CLOUD_WIZARD: 				"Para mais funcionalidades TP-Link Cloud, por favor inicie a sessão com o seu <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"Não tem um TP-Link ID?",
			REGISTER_NOW: 				"Registar agora"
		},
		STATUS: {
			TITLE: 						"ESTADO",
			INTERNET:					"Internet",
			WIRELESS:					"Wi-Fi",
			LAN:						"LAN",
			USB_TITLE:					"Dispositivos USB",
			PERFORMANCE: 				"Performance",
			GUEST_NETWORK: 				"Rede de Convidados",
			ACCESS_DEVICES: 			"Dispositivos de Acesso",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Tipo de Ligação",

			MAC_ADDRESS: 				"Endereço MAC",
			IP_ADDRESS: 				"Endereço IP",
			RELEASE: 					"Libertar",
			RENEW: 						"Renovar",
			
			DYNAMIC_IP: 				"IP Dinâmico",
			STATIC_IP: 					"IP Estático",
			SUBNET_MASK: 				"Máscara de Rede",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Túnel 6to4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass Through (Bridge)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Nenhum",
			
			DEFAULT_GATEWAY: 			"Gateway Predefinido",
			DNS: 						"Servidor DNS",
			MAC: 						"Endereço MAC",
			WDS_STATUS: 				"Status WDS",
			
			IPV6_ADDRESS: 				"Endereço IP",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DSN Secundário",

			RADIO: 						"Rádio Wi-Fi",

			NAME_SSID: 					"Nome da Rede (SSID)",
			NETWORK_NAME_SSID:			"Nome de Rede Wi-Fi (SSID)",
			HIDE_SSID: 					"Ocultar SSID",
			MODE: 						"Modo",
			CHANNEL: 					"Canal",
			CHANNEL_WIDTH: 				"Largura de Canal",
			AUTO: 						"Auto",
			CURRENT_CHANNEL: 			"Canal atual",

			WDS: 						"Status WDS",
			WIRED_CLIENTS: 				"Clientes LAN",
			WIRELESS_CLIENTS: 			"Clientes Wi-Fi",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Endereço Local de Ligação",
			ASSIGN_TYPE: 				"Tipo Assignado",

			ALLOW_TO_SEE_EACH: 			"Permitir que convidados se vejam entre si",

			TOTAL: 						"Total",
			AVAILABLE: 					"Disponível",

			USB: 						"Disco USB",
			PRINTER: 					"Impressora",

			CPU_LOAD: 					"Carga no CPU",
			MEMORY_USAGE: 				"Utilização de Memória",

			IP_ADDR_P: 					"Endereço IP",
			MAC_ADDR_P: 				"Endereço MAC",
			CONN_TYPE_P: 				"Tipo de Ligação",

			DISABLED: 					"Desativado",
			INIT: 						"Iniciar",
			SCAN: 						"Examinar",
			AUTH: 						"Autenticar",
			ASSOC: 						"Associar",
			RUN: 						"Executar",
			HOST: 						"Dispositivo",
			GUEST: 						"Convidado",

			ON: 						"Ligado",
			OFF: 						"Desligado"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Tipo de Ligação à Internet",
			INTERNET_MAC_ADDRESS: 		"Endereço MAC",
			
			CONNECT: 					"Ligar",
			DISCONNECT: 				"Desligar",
			
			IP_ADDR: 					"Endereço IP",
			
			USE_DEFAULT_MAC: 			"Usar Endereço MAC Predefinido",
			USE_COMPUTER_MAC: 			"Usar Endereço MAC deste Computador",
			USE_CUSTOM_MAC: 			"Endereço MAC Personalizado",
			MAC_CLONE: 					"Clonar MAC",
			
			CONFIG: 					"Configurar",
			
			IP_ADDRESS: 				"Endereço IP",
			SUBNET_MASK: 				"Máscara de Rede",
			DEFAULT_GATEWAY: 			"Gateway Predefinido",
			
			MANUAL_DNS: 				"DNS Manual",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DSN Secundário",
			
			RENEW: 						"Renovar",
			RELEASE: 					"Libertar",
			VIEW_MODE: 					"Modo de Visualização",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Obter Dinamicamente do ISP",
			USE_FOLLOW_IP_ADDR: 		"Usar o seguinte Endereço IP",
			USE_FOLLOW_DNS_ADDR: 		"Use os seguintes Endereços DNS",
			USE_FOLLOW_DNS_SERVER: 		"Utilize o seguinte Servidor DNS",
			
			BASIC: 						"Básico",
			ADVANCED: 					"Avançado",
			
			DNS_ADDR_MODE: 				"Endereço DNS",
			MTU_SIZE: 					"Tamanho MTU",
			MTU_1500: 					"bytes. ( O tamanho predefinido é 1500. Não altere a não ser que seja necessário.)",
			MTU_1480: 					"bytes. (O tamanho predefinido é 1480. Não altere a não ser que seja necessário.)",
			MTU_1460: 					"bytes. (O tamanho predefinido é 1460. Não altere a não ser que seja necessário.)",
			MTU_1420: 					"bytes. (O tamanho predefinido é 1420. Não altere a não ser que seja necessário.)",
			
			HOST_NAME: 					"Nome de Dispositivo",

			HOST_NAME_CONFIRM: 			"O nome contem caracteres ilegais que podem causar comportamento inesperado do sistema. Tem a certeza que deseja continuar?",

			GET_IP_WITH_UNICAST_DHCP: 	"Obter IP utilizando DHCP Unicast (Não requerido habitualmente.)",
			OPTIONAL: 					"(Opcional)",
			
			STATIC_IP: 					"IP Estático",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			
			INTERNET_IP_ADDR: 			"Endereço IP",
			INTERNET_DNS: 				"DNS de Internet",
			SECONDARY_CONN: 			"Ligação Secundária ",
			NONE: 						"Nenhum",
			INTERNET_PRIMARY_DNS:		"DNS Primário",
			INTERNET_SECONDARY_DNS: 	"DSN Secundário",
			
			DYNAMIC_IP: 				"IP Dinâmico",
			DYNAMIC_IP_v6: 				"IP Dinâmico (SLAAC/DHCPv6)",
			STATIC_IP: 					"IP Estático",
			SERVICE_NAME: 				"Nome de Serviço",
			ACCESS_CONCENTRATOR_NAME:  	"Nome de Concentrador de Acesso",
			DETECT_ONLINE_INTERVAL: 	"Detetar Intervalo Online",
			INTERVAL_TIPS: 				"segundos. (0-120. O valor predefinido é 10.)",
			IP_ADDR_MODE:  				"Endereço IP",
			CONN_MODE: 					"Modo de Ligação",
			DHCP_LINK_UNPLUGGED: 		"A porta WAN está desconetada",
			
			AUTO: 						"Auto",
			ON_DEMAND: 					"A Pedido",
			TIME_BASED: 				"Agendado",
			MANUALLY: 					"Manual",
			MAX_IDLE_TIME: 				"Tempo Máximo de Inatividade",
			MAX_IDLE_TIME_TIPS: 		"minutos. (0 significa sempre ligado.)",
			PERIOD_OF_TIME: 			"Período de Tempo",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"BigPond Cable",
			AUTH_SERVER: 				"Servidor de Autenticação",
			AUTH_DOMAIN: 				"Domínio de Autenticação",
			L2TP: 						"L2TP",
			GATEWAY: 					"Gateway",
			SERVER_IP_ADDR_NAME: 		"IP Servidor VPN/Nome de Domínio",
			PPTP: 						"PPTP",
			TO: 						"Para",
			
			TUNNEL_6TO4: 				"Túnel 6to4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Obter Endereço IPv6 não temporário",
			GET_PREFIX_DELEGATION: 		"Obter Prefixo de Delegação IPv6",
			IPV6_ADDR: 					"Endereço IPv6",

			GET_IPV6_WAY: 				"Obter Endereço IPv6",
			AUTOMATICALLY: 				"Obter Automaticamente",
			SPECIFIED_BY_ISP: 			"Especificado pelo ISP",

			IPV6_ADDR_PREFIX: 			"Prefixo de Endereço IPv6",
			NONE_TEMPORARY: 			"Não temporário",

			PREFIX_DELEGATION: 			"Prefixo de delegação",
			ENABLE: 					"Ativar",
			DISABLE: 					"Desativar",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Tamanho de Máscara IPv4",
			CONFIG_TYPE: 				"Tipo de Configuração",
			RD6_PREFIX: 				"Prefixo 6RD",
			RD6_PREFIX_LENGTH: 			"Tamanho de Prefixo 6RD",
			REPLY_IPV4_ADDR: 			"Endereço Fronteira IPv4 de Resposta",
			MANUAL: 					"Manual",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass Through (Bridge)",
			LOCAL_IPV6: 				"Endereço IPv6 Local",
			PEER_IPV6: 					"Endereço IPv6 Peer",
			TUNNEL_ADDR: 				"Endereço de Túnel",
			IPV4_NETMASK: 				"Máscara de Rede IPv4",
			CUSTOM: 					"Personalizado",
		    AFTR_NAME: 					"Nome AFTR",
			PPP_SHARE_V6:				"Sessão PPPoE igual à ligação IPv4",
			PPP_SHARE_V4:				"Sessão PPPoE igual à ligação IPv6",

			
			
			IPV4_ADDR: 					"Endereço IPv4",
			IPV4_MASK: 					"Máscara de Rede IPv4",
			IPV4_GATEWAY: 				"Gateway IPv4 Predefinido",
			TUNNEL_ADDR: 				"Endereço de Túnel",

			DUPLEX: 					"Duplex",
			AUTO_NEGOTIATION: 			"Auto Negociação",
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

			MAC_ADDRESS: 				"Endereço MAC",
			IP_ADDRESS: 				"Endereço IP",
			SUBNET_MASK: 				"Máscara de Rede",
			CUSTOM: 					"Personalizado",

			IGMP: 						"Ativar Proxy IGMP",
			

			ASSIGNED_TYPE: 				"Tipo Assignado",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC + Stateless DHCP",
			RDNSS: 						"SLAAC + RDNSS",

			PREFIX: 					"Prefixo de Endereço",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Endereço",
			DELEFATED: 					"Delegado",
			STATIC: 					"Estático",
			SITE_PREFIX: 				"Prefixo de Sitio",
			SITE_PREFIX_LEN: 			"Comprimento de Prefixo de Sitio",

			PREFIX_TYPE:  				"Tipo de Configuração de Prefixo de Sitio",
			LAN_IPV6_ADDR:  			"Endereço LAN IPv6",

			RELEASE_TIME: 				"Tempo para Libertar",
			RELEASE_TIME_TIP: 			"segundos. (O valor predefinido é 86400. Não altere a não ser que seja necessário.)",
			ADDRESS:					"Endereço",
			SAVE: 						"Gravar",

			REBOOT_TIP: 				"O router está a direcionar para a nova página de entrada. <br/> Por favor aguarde…"

		},

		IPTV:{
			TITLE: 						"Definições",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Ativar IPTV", 
			MODE:  						"Modo",
			IGMP_PROXY: 				"IGMP Proxy",
			IGMP_VERSION: 				"Versão IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Ponte (Bridge)",
			BASIC: 						"Personalizado",
			EXSTREAM: 					"Singapura-Exstream",
			RUSSIA:  					"Rússia",
			UNIFY:  					"Malásia-Unifi",
			MAXIS:  					"Malásia-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internet",
			IP_PHONE: 					"Telefone IP", 

			Q_TAG: 						"802.1Q Tag",
			ENABLE: 					"Ativar",
			
			INTERNET_VLAN_ID: 			"VLAN ID de Internet",
			INTERNET_VLAN_PRIORITY: 	"Prioridade da VLAN de Internet",
			IP_PHONE_VLAN_ID: 			"VLAN ID de Telefone IP",
			IP_PHONE_VLAN_PRIORITY: 	"Prioridade da VLAN de Telefone IP",
			IPTV_VLAN_ID: 				"VLAN ID de IPTV",
			IPTV_VLAN_PRIORITY: 		"Prioridade da VLAN de IPTV",
			IPTV_MULTI_VLAN_ID: 		"VLAN ID de Multicast IPTV",
			IPTV_MULTI_VLAN_PRIORITY: 	"Prioridade da VLAN de Multicat IPTV"
		},

		DHCP_SERVER: {
			TITLE: 						"Servidor DHCP",
			
			SETTINGS: 					"Definições",

			DHCP_SERVER: 				"Servidor DHCP",
			ENABLE_DHCP_SERVER: 		"Ativar Servidor  DHCP",

			IP_ADDR_POOL: 				"Lista de Endereços IP",
			LEASETIME: 					"Tempo de Atribuição de Endereço",
			LEASENOTE: 					"minutos. (1-2880. O valor predefinido é 120.)",
			
			GATEWAY: 					"Gateway Predefinido",
			DOMAIN: 					"Domínio Predefinido",
			PRIMARYDNS: 				"DNS Primário",
			SECONDARYDNS: 				"DSN Secundário",

			OPTIONAL: 					"(Opcional)",

			CLIENTSLIST: 				"Lista de Clientes DHCP",
			CLIENT_NUMBER: 				"Número de Cliente",
			CLIENT_NAME: 				"Nome de Cliente",
			MAC_ADDR: 					"Endereço MAC",
			ASSIGNED_IP: 				"Endereço IP Assignado",
			LEASE_TIME: 				"Tempo de Atribuição",

			RESERVATION: 				"Reserva de Endereços",

			RESERVED_IP: 				"Endereço IP Reservado",
			IP_ADDRESS: 				"Endereço IP",
			DESCRIPTION: 				"Descrição",

			CLIENTSLIST: 				"Lista de Clientes DHCP",
			CLIENT_NUMBER: 				"Número de Cliente",

			ENABLE: 					"Ativar",
			ENABLE_THIS_ENTRY: 			"Ativar"
			
		},

		DDNS: {
			DDNS: 						"DNS Dinâmico",
			SERVICEPROVIDER: 			"Fornecedor de Serviço",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Registar…",
			USERNAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			DOMAIN_NAME_LIST: 			"Lista de Nome de Domínio",
			DOMAIN_NAME: 				"Nome de Domínio",
			LOGIN: 						"Entrar",
			LOGIN_SAVE: 				"Entrar e Gravar", 
			LOGOUT: 					"Sair",
			STATU_SUCCESS:				"Sucesso!",
			UPDATE_INTERVAL:			"Intervalo de Atualização",
			ONE_HOUR:					"1 hora",
			SIX_HOUR:					"6 horas",
			TWETEEN_HOUR:				"12 horas",
			ONE_DAY:					"1 dia",
			TWO_DAY:					"2 dias",
			THREE_DAY:					"3 dias",
			NEVER:						"Nunca",
			UPDATE:						"Atualizar",
			STATU_INCORRENT:			"Nome de Utilizador e senha incorretos",
			STATU_ERR_DOMAIN:			"Erro de nome de domínio",
			WAN_IP_BIND: 				"Vinculo WAN IP",
			CURRENT_DOMAIN: 			"Nome de domínio atual",
			REGISTER: 					"Registar",
			BIND: 						"Vincular",
			UNBIND: 					"Desvincular",
			TITLE: 						"DDNS indisponível",
			CONTENT: 					"Para utilizar o nosso serviço superior TP-Link DDNS, por favor <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">inicie a sessão</a> com o seu TP-Link ID, ou selecione outro fornecedor de serviços.",
			STATU_NO_LAUNCH:			"Não inicia",
			STATU_FAIL_DDNS: 			"Falha na atualização do DNS.",
			STATU_FAIL_NOIP: 			"Falha na atualização do NO-IP.",
			DISABLE: 					"Desativar",
			ENABLE: 					"Ativar",	
			STATU_NO_LAUNCH:			"Falha na atualização do DNS.",
			STATU_CONN:					"A Ligar",
			WAN_IP_BIND: 				"Vinculo WAN IP",
			TIME: 						"Data de registo",
			BOUND: 						"Unir",
			FREE: 						"Livre",
			SORRY: 						"Falhou.",
			UNBIND_NOTE:          		"Se pretende vincular %domain% ao seu dispositivo, por favor desvincule primeiro o domínio atual."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Routing Avançado",
			STATIC_ROUTING: 			"Rotas Estáticas",

			DESTINATION_NETWORK:		"Rede de Destino",
			SUBNET_MASK: 				"Máscara de Rede",
			DEFAULT_GATEWAY: 			"Gateway Predefinido",
			DESCRIPTION: 				"Descrição",
			
			SYSTEM_ROUTING_TABLE: 		"Tabela de Rotas do Sistema",
			CLIENT_NUMBER: 				"Número de Cliente",

			GATEWAY: 					"Gateway",
			INTERFACE: 					"Interface",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Ativar",
			ENABLE_THIS_ENTRY: 			"Ativar"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Definições",
			NOT_SUPPORT_5G: 			"A sua região suporta apenas 2.4GHz. Por favor garanta que seleciona a região correta.",

			REGION: 					"Região",
			NOTICE:  					"Para utilizar a função Wi-Fi deve manter o botão Wi-Fi ligado.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Definições Wi-Fi",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Ativar Rádio Wi-Fi",

			WIRELESS_NETWORK_NAME: 		"Nome de Rede Wi-Fi (SSID)",
			WIRELESS_PASSWORD: 			"Senha",
			HIDE_SSID: 					"Ocultar SSID",

			SECURITY: 					"Segurança",
			NO_SECURITY: 				"Sem Segurança",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - Pessoal(Aconselhado)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - Empresarial",
			WEP: 						"WEP",

			VERSION: 					"Versão",

			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Encriptação",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Modo",
			MODE_B:  					"Só 802.11b",
			MODE_G:  					"Só 802.11g",
			MODE_N:  					"Só 802.11n",
			MODE_BG:  					"802.11b/g combinado",
			MODE_GN: 					"802.11g/n combinado",
			MODE_BGN:  					"802.11b/g/n combinado",

			MODE_A_5: 					"802.11a apenas",
			MODE_AN_5: 					"802.11a/n misto",
			MODE_N_5: 					"Só 802.11n",
			MODE_AC_5:					"802.11ac apenas",
			MODE_NAC_5:					"802.11n/ac misto",
			MODE_ANAC_5:				"802.11a/n/ac misto",


			CHANNEL_WIDTH: 				"Largura de Canal",
			CHANNEL: 					"Canal",

			TRANSMIT_POWER: 			"Potência de Transmissão",

			RADIUS_SERVER_IP: 			"IP Servidor RADIUS",
			RADIUS_PORT: 				"Porta RADIUS",
			RADIUS_PASSWORD: 			"Senha RADIUS",

			TYPE: 						"Tipo",
			OPEN_SYSTEM: 				"Sistema Aberto",
			SHARED_KEY: 				"Chave Partilhada",

			KEY_SELECTED: 				"Chave Selecionada",
			KEY1: 						"Chave1",
			KEY2: 						"Chave2",
			KEY3: 						"Chave3",
			KEY4: 						"Chave4",

			WEP_KEY_FORMAT: 			"Formato de Chave WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimal",

			KEY_TYPE: 					"Tipo de Chave",
			BIT64: 						"64 bits",
			BIT128: 					"128-bit",
			BIT152: 					"152 Bit",

			KEY_VALUE: 					"Valor Chave",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Baixo",
			MIDDLE: 					"Médio",
			HIGH: 						"Alto"
		},

		WPS: {

			TITLE2: 					"PIN do Router",
			ROUTERS_PIN_INFO: 			"Outros dispositivos podem ligar-se ao Router via WPS e Código PIN.",
			ENABLE_ROUTE_PIN: 			"PIN do Router",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Gerar",
			DFT: 						"Predefinido",

			TITLE: 						"Guia de Configuração Rápida do WPS",
			SELECT_SETUP: 				"Selecione o método de configuração",
			PUSH_BTN: 					"Botão (Aconselhado)",
			PUSH_DES: 					"Pressione o botão WPS no router ou nesta página clique em \"Conectar\".",
			CONNECT: 					"Ligar",
			CANCEL: 					"Cancelar",

			RESULT_HEAD: 				"O cliente Wi-Fi",
			RESULT_END: 				"foi adicionado à rede com sucesso.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Não Encontrado",
			ENTER_CLIENT_PIN: 			"Insira o PIN do cliente",
			SWITCH_NOTE:				"Para utilizar o WPS deve primeiro ligar a função Wi-Fi.",
			SWITCH_NOTE2:				"Para utilizar o WPS deve primeiro configurar corretamente os parâmetros Wi-Fi.",
			STATUS_PIN_ERROR: 			"PIN WPS invalido? Por favor valide se está correto.",
			STATUS_ERROR: 				"Erro.",
			STATUS_CONN_ERROR: 			"Ligação falhada.",
			STATUS_CONNING: 			"A ligar...",
			STATUS_CANCEL: 				"Ligação cancelada.",
			
			NOTE: 						"Nota:",
			
			STATUS_CONN_OVERLAP: 		"Ligação falhada(OVERLAP).",
			STATUS_CONN_TIMEOUT: 		"Ligaçõa falhada.(TIMEOUT).",
			STATUS_CONN_INACT: 			"Ligação inativa."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Dispositivos Wi-Fi Conectados",
			CLIENT_NUMBER: 				"Número de Cliente",
			MAC_ADDRESS: 				"Endereço MAC",
			CONN_TYPE: 					"Tipo de Ligação",
			SECURITY: 					"Segurança",
			RECEIVED_PACKETS: 			"Pacotes Recebidos",
			SEND_PACKETS: 				"Pacotes Enviados"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Definições",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Permitir que convidados se vejam entre si",
			
			ALLOW_LOCAL: 				"Permitir que convidados acedam a minha rede local",
			
			WIRELESS: 					"Wi-Fi",
			WIRELESS_24G_RADIO: 		"Wi-Fi 2.4GHz",
			WIRELESS_5G_RADIO: 			"Wi-Fi 5GHz",
			ENABLE_GUEST: 				"Ativar Rede de Convidados",

			NAME_SSID: 					"Nome de Rede Wi-Fi (SSID)",
			HIDE_SSID: 					"Ocultar SSID",

			SECURITY: 					"Segurança",
			NO_SECURITY: 				"Sem Segurança",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Pessoal",

			VERSION: 					"Versão",
			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Encriptação",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Senha"
		},

		NAT:{
			SETTINGS: 					"NAT por Hardware",
			STATUS: 					"NAT por Hardware",
			
			ALG_TITLE: 					"Application Layer Gateway(ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP Passthrough",
			L2TP_ALG: 					"L2TP Passthrough",
			IPSEC_ALG: 					"IPSec Passthrough",

			ENABLE_FTP_ALG: 			"Ativar ALG FTP",
			ENABLE_TFTP_ALG: 			"Ativar ALG TFTP",
			ENABLE_H323_ALG: 			"Ativar ALG H323",
			ENABLE_RTSP_ALG: 			"Ativar ALG RTSP",
			ENABLE_PPTP_ALG: 			"Ativar PPTP Passthrough",
			ENABLE_L2TP_ALG: 			"Ativar L2TP Passthrough",
			ENABLE_IPSEC_ALG: 			"Ativar IPSec Passthrough",
			NAT_ENABLE_NOTICE: 			"Nota: As suas configurações não terão efeito até que a função NAT seja ativada."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Servidores Virtuais",

			SERVICE_NAME: 				"Tipo de Serviço",
			EXTERNAL_PORT: 				"Porta Externa",
			INTERNAL_IP: 				"IP Interno",
			INTERNAL_PORT: 				"Porta Internet",
			PROTOCAL: 					"Protocolo",

			BTN_VIEW: 					"Ver Serviços Existentes",

			EXSITTING_SERVICE: 			"Serviços Existentes",
			
			PROTOCAL_ALL: 				"TODOS",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX ou XX)",
			EXT_PORT_TIPS: 				"(XX ou XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX ou em Branco ,1-65535)",

			NOTICE:						"Em conflito com a porta de gestão remota. Tem a certeza que deseja continuar.",

			ENABLE_THIS_ENTRY: 			"Ativar",
			OPERATION: 					"Operação",
			CHOOSE: 					"Escolher",
			NAT_ENABLE_NOTICE: 			"Nota: As suas configurações não terão efeito até que a função NAT seja ativada."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Port Triggering",
			APPLICATION: 				"Aplicação",
			TRIGGER_PORT: 				"Triggering Port",
			TRIGGER_PROTOCOL: 			"Triggering Protocol",

			EXTERNAL_PORTS: 			"Porta Externa",
			EXTERNAL_PROTOCOL: 			"Protocolo Externo",

			BTN_VIEW: 					"Ver Aplicações Existentes",

			EXSITTING_APPLICATION: 		"Aplicações Existentes",
			APPLICATION_NAME: 			"Nome de Aplicação",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX ou XX-XX,1-65535, no máximo 5 pares)",
			
			ENABLE_THIS_ENTRY: 			"Ativar",
			OPERATION: 					"Operação",
			
			PROTOCAL_ALL: 				"TODOS",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Nota: As suas configurações não terão efeito até que a função NAT seja ativada."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Ativar DMZ",
			HARDWARESTATUS: 			"Endereço IP de Dispositivo DMZ",
			NAT_ENABLE_NOTICE: 			"Nota: As suas configurações não terão efeito até que a função NAT seja ativada."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Lista de Serviços UPnP",
			CLIENT_NUMBER: 				"Número de Cliente",
			SERVICE: 					"Descrição de Serviço",
			EXTERNAL_PORT: 				"Porta Externa",
			PROTOCAL: 					"Protocolo",
			IP_ADDR: 					"Endereço IP Interno",
			INTERNAL_PORT: 				"Porta Internet",
			NAT_ENABLE_NOTICE: 			"Nota: As suas configurações não terão efeito até que a função NAT seja ativada."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"Modem USB 3G/4G",
			LOCATION: 					"Região",
			MOBILE_ISP: 				"ISP Móvel",

			USA: 						"EUA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Modo de Ligação",
			CONNECT_ON_DEMAND: 			"Ligar a Pedido",
			CONNECT_AUTOMATICALLY: 		"Ligar Automaticamente",
			CONNECT_MANUALLY: 			"Ligar Manualmente",
			MAX_IDLE_TIME: 				"Tempo Máximo de Inatividade",
			CONNECTION_TIP: 			"O Acesso à Internet atual é WAN Preferido",
			IDLE_TIME_TIP: 				"O Modo de Ligação e Tempo Máximo de Inatividade não podem ser definidos manualmente.",
			MINUTES: 					"minutos. (0 Significa que a ligação está sempre ativa).",

			AUTHENTICATION_TYPE: 		"Tipo de Autenticação",
			AUTO: 						"Auto",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"O predefinido é Auto, não altere a não ser que seja necessário.",

			CONNECT: 					"Ligar",
			DISCONNECT: 				"Desligar",

			SET_TIP: 					"Configurar manualmente o Número a Marcar, APN, Nome de Utilizador e a Senha.",
			DIAL_NUMBER: 				"Número a Marcar",
			APN: 						"APN",
			USERNAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			OPTIONAL: 					"(Opcional)",
			MTU_SIZE: 					"Tamanho MTU",
			MTU_SIZE_TIP: 				"bytes. (O tamanho predefinido é 1480. Não altere a não ser que seja necessário.)",

			USE_FOLLOW_DNS_SERVER: 		"Usar os Seguintes Endereços DNS",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DSN Secundário",

			UNPLUGGED: 					"Nenhum modem USB ligado",
			IDENTIFYING: 				"A identificar…",
			IDENTIFY_SUCCESS: 			"Identificado com êxito"
		},

		DISK_SETTING: {
			DISK_SET: 					"Definições de Dispositivo",
			SCAN: 						"Examinar",
			SELFLY_REMOVE: 				"Remover em Segurança",
			SCAN_RESULT: 				"%n discos encontrados",
			NOT_FOUND: 					"Não Encontrado",
			SELFLY_REMOVE: 				"Remover em Segurança",
			
			VOLUMN: 					"Volume",
			CAPACITY: 					"Capacidade",
			FREESPACE: 					"Espaço Livre",
			USBSPACE: 					"Espaço Ocupado",
			
			STATUS: 					"ESTADO",
			INACT: 						"Desativar",
			ACTIVE: 					"Ativo",
			
			USAGE: 						"Utilização",
			CAPACITY: 					"Capacidade",
			OPERATION: 					"Operação",	
			
			ACC: 						"Gestão de Contas", 	 	
			USERNAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			USE_LOGIN: 					"Utilize a Conta de Utilizador",
			SCAN: 						"Examinar",
			ENJECT_ALL: 				"Ejetar Todos",
			ENJECT: 					"Ejetar",
			ADD_USER: 					"Adicionar Utilizador",
			AUTH: 						"Autoridade"
		},

		FOLDER: {
			TITLE: 						"Definições de Partilha",
			ACCOUNT_TITLE: 				"Conta de Partilha",
			ACCOUNT:					"Conta",
			AC_NOTE: 					"Prepara uma conta de utilizador para partilha de conteúdos. Pode utilizar o utilizador de entrada em sistema ou criar um novo utilizador.",
			
			AC_LOGIN: 					"Utilizar Conta Predefinida",
			AC_FOLLOW: 					"Criar Nova Conta",

			USERNAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",
			CONFIRM: 					"Confirme a Senha",

			SHARING_SETTING: 			"Definições de Partilha",
			SERVER_NAME: 				"Nome de Servidor de Rede/Media",

			METHOD: 					"Método de Acesso",
			LINK: 						"Ligação",
			PORT: 						"Porta",

			NETWORK_NEIGHBORHOOD: 		"Vizinhança de Rede",
			FTP: 						"FTP",
			FTPEX: 						"FTP (Via Internet)",

			SHARE_FOLDER: 				"Partilha de Pastas",
			SHAREING_ALL: 				"Partilha Tudo",
			NOTE:  						"Mude para Ligado para partilhar todas as pastas e ficheiros ou mantenha Desligado para somente partilhar Pastas especificas.", 
			ENABLE_AUTHENTICATION: 		"Ativar Autenticação",
			SHAREING_FOLDER: 			"A Partilhar Pastas",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Caminho para Pasta",
			VOLUMN_NAME: 				"Nome de Volume",

			SHARE_NAME: 				"Nome de Pasta",
			FOLDER_PATH: 				"Caminho para Pasta",
			MEDIA_SHARING: 				"Partilha de Media",
			STATUS: 					"ESTADO",

			GUEST_ACCESS: 				"Permite Acesso de Convidados de Rede",
			ENABLE_AUTHENTICATION: 		"Ativar Autenticação",
			ENABLE_WRITE_ACCESS: 		"Ativar Acesso de Escrita",
			ENABLE_MEDIA_SHARE: 		"Ativar Partilha de Media",
			
			BROWSE: 					"Procurar",
			BROWSE_TITLE: 				"Selecione uma pasta",

			NO_VOLUMN:					"Sem Volume",
			
			NOTICE: 					"Tem a certeza que deseja abandonar a página Dynamic DNS? Pressione Guardar para gravar e sair. Pressione Sair para sair sem gravar. Pressione Cancelar para ficar.",
			NO_CHANGE_NOTICE: 			"Tem a certeza que deseja abandonar a página Dynamic DNS?",

			SAVE_FAILED_NOTICE: 		"Gravação falhou",
			CONTINUE: 					"Sair",
			CONTINUE_SAVE: 				"Gravar",
			CANCLE: 					"Cancelar",

			ENABLE: 					"Ativar"

		},

		PRINT:{
			TITLE: 						"Servidor de Impressão",
			NAME: 						"Nome de Impressora",
			ENABLE_PRINT_SERVER: 		"Servidor de Impressão",
			NONE: 						"Nenhum",
			
			NOTE_TITLE: 				"Nota:",
			STEP1: 						"Passo1:",
			STEP2: 						"Passo2:",
			STEP3: 						"Passo3:",

			NOTE1: 						"Conecte uma impressora USB à porta USB do router através de um cabo USB.",
			NOTE2: 						"Instale o driver da impressora no computador. Se necessário consulte os manuais do fabricante da impressora para obter instruções.",
			NOTE3: 						"Instale o Utilitário Controlador de Impressoras USB TP-Link a partir do CD de recursos fornecido com o router (somente para Windows) ou efetue o download (para Windows e Mac OS X) a partir do site oficial da TP-Link: <a class=\"link\" href=\"%SUPPORT%\" target=\"blank\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Controlo Parental",
			STATUS: 					"ESTADO",
			UNKNOWN: 					"Desconhecido",

			DEVICE_CTR: 				"Dispositivos sob Controlo Parental",
			DEVICE: 					"Nome de Dispositivo",
			MAC_ADDRESS: 				"Endereço MAC",
			TIME: 						"Tempo de Acesso à Internet",
			DESCRIPTION: 				"Descrição",
			
			ENABLE_THIS_ENTRY: 			"Ativar",
			OPTIONAL: 					"(Opcional)",
			BTN_VIEW: 					"Ver Dispositivos Existentes",
			
			DEVICE_LIST: 				"Lista de Dispositivos",
			SYSTEM_TIME: 				"Hora de Sistema",
			
			RESTR: 						"Restrição de Conteúdos",
			MODE: 						"Restrição",
			BLACKMODE: 					"Lista Negra",
			WHITEMODE: 					"Lista Branca",
			ACCESS_DEVICES_LIST: 		"Lista de Acesso de Dispositivos",
			
			CHOOSE: 					"Escolher",
			ADD_A_NEW_KEYWORD: 			"Adicionar Nova Palavra",
			ADD_A_NEW_DOMAIN_NAME: 		"Adicionar Novo Nome de Domínio"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Internet",
			ROUTER: 					"Router",
			WINDOWS: 					"Windows",
			ANDROID: 					"Androide",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Outros",

			DEVICE: 					"Dispositivo",
			RATE: 						"Taxa",
			APPLICATION: 				"Aplicação",

			NAME: 						"Nome",
			MAC_ADDRESS: 				"Endereço MAC",
			IP_ADDRESS: 				"Endereço IP",


			DEVICES: 					"Dispositivos"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Largura de Banda",
			TEST_BANDWIDTH: 			">Teste de Largura de Banda",
			STREAMBOOST: 				"Streamboost",
			ENABLE_STREAMBOOST: 		"Ativar StreamBoost",
			UP_LIMITATION: 				"Limitação de Upload (Mbps)",
			DOWN_LIMITATION: 			"Limitação de Download (Mbps)",
			RUN_BANDWIDTH_TEST: 		"Executar Teste de Largura de Banda",
			TESTING: 					"A testar…",
			TEST_FAILED: 				"Teste Falhou",
			TEST_SUCCEED: 				"Testado Com Sucesso",
			ENABLE_AUTOMATIC_TEST: 		"Ativar Teste Automático",
			KEEP_UP_TO_DATE: 			"Manter o StreamBoost atualizado",
			ENABLE_AUTOMATIC_UPDATE: 	"Ativar Atualização Automática"

		},

		PRIORITY:{
			PRIORITY: 					"Prioridade",
			PRIORITY_TIPS: 				"A prioridade permite alterar a importância de um dispositivo em detrimento de outro. Isso é útil quando um dispositivo está a competir por largura de banda num acesso limitado com aplicações com a mesma classificação.",
			ALL_DEVICE: 				"Todos os Dispositivos",
			ACTIVE_DEVICE: 				"Dispositivo Ativo",
			SAVE: 						"Gravar",
			ID: 						"ID",
			DEVICE: 					"Dispositivo",
			TYPE: 						"Tipo",
			MAC_ADDRESS: 				"Endereço MAC",
			STICK: 						"Stick"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Estatísticas",
			UP_TIME: 					"Tempo Ligado",
			DOWNLOADS: 					"Descargas",
			LAST_DAY: 					"Último Dia",
			LAST_WEEK: 					"Última Semana",
			LAST_MONTH: 				"Último Mês",
			ALL_LAN_HOSTS: 				"Todos os Dispositivos LAN",
			OTHER: 						"Outro"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Firewall",
			ENABLE_SPI: 				"Firewall SPI",

			DOS_PROTECTION: 			"Proteção DoS",
			ENABLE_DOS: 				"Proteção DoS",
			
			OFF: 						"Desligado",
			LOW: 						"Baixo",
			MIDDLE: 					"Médio",
			HIGH: 						"Alto",

			ICMP: 						"Filtro de Ataque ICMP-FLOOD",
			UDP: 						"Filtro de Ataque UDP-FLOOD",
			TCP: 						"Filtro de Ataque TCP-SYN-FLOOD",
			ENABLE_DOS_TIP:             "Proteção DoS e Estatísticas de Tráfego não podem ser ativados em simultâneo",

			IGNORE: 					"Ignorar Ping na Porta WAN",
			FORBID: 					"Proibir Ping na Porta LAN",

			BLOCK_DOS: 					"Lista de Dispositivos Bloqueados por DoS",
			HOST_NUMBER: 				"Numero de Dispositivo",
			IP_ADDRESS: 				"Endereço IP",
			MAC_ADDRESS: 				"Endereço MAC"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Controlo de Acesso",
			ENABLE_ACCESS: 				"Controlo de Acesso",

			ACCESS_MODE: 				"Modo de Acesso",
			DEFAULT_ACCESS_MODE: 		"Modo de Acesso Predefinido",
			BLACK_LIST: 				"Lista Negra",
			WHITE_LIST: 				"Lista Branca",
			
			WIRED:						"Cabo",
			WIRELESS:					"Wi-Fi",

			DEVICE_ONLINE: 				"Dispositivos Online",
			NAME: 						"Nome de Dispositivo",
			IP_ADDRESS: 				"Endereço IP",
			MAC_ADDRESS: 				"Endereço MAC",
			CONN_TYPE: 					"Tipo de Ligação",

			BLOCK: 						"Bloquear",

			DEVICE_IN_WHITE: 			"Dispositivos na Lista Branca",
			DEVICE_IN_BLACK: 			"Dispositivos na Lista Negra"
		},

		IP_MAC:{
			TITLE: 						"Definições",
			ENABLE_ARP: 				"Ligações ARP",

			ARP_LIST: 					"Lista ARP",
			ARP_NUM: 					"Número de Entrada ARP",

			MAC_ADDRESS: 				"Endereço MAC",
			IP_ADDRESS: 				"Endereço IP",
			BOUND: 						"Unir",
			UNBOUND: 					"Desvinculado",

			BINDING_LIST: 				"Lista de Vínculos",
			DESCRIPTION: 				"Descrição",
			OPTIONAL: 					"(Opcional)",
			ENABLE_THIS_ENTRY: 			"Ativar"
		},

		TIMESET: {
			TITLE: 						"Definições de Tempo",
			ZONE: 						"Fuso Horário",
			DATE: 						"Data",
			DATEFORMAT: 				"MM/DD/YYYY",
			TIME: 						"Hora",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"Servidor NTP I",
			NTP2: 						"Servidor NTP II",
			OPTIONAL: 					"(Opcional)",

			CURRENT_TIME:  				"Hora Atual",
			SET_TIME: 					"Configurar Tempo",
			AUTOMATIC: 					"Obter automaticamente a partir da Internet",
			MANUAL: 					"Manual",
			AUTOMATIC_BTN: 				"Obter",


			GETGMT: 					"Obter GMT",

			
			GETGMT_SUCCESS: 			"Obter Hora do Servidor NTP - Sucesso",
			GETGMT_TIMEOUT: 			"Obter Hora do Servidor NTP - Tempo Excedido",
			GETGMT_WAIT: 				"Aguardar",
			
			M: 							"S",
			W: 							"Q",
			D: 							"D",
			H: 							"h",
			
			DAYLIGHT_SAVING: 			"Horário de Verão",
			ENABLE_DAYLIGHT: 			"Ativar Horário de Verão",
			START: 						"Inicio",
			END: 						"Fim",

			RUNNING_STATUS: 			"Status Atual",
			DOWN: 						"Horário de Verão está inativo",
			UP: 						"Horário de Verão está ativo"
		},

		DIAG:{
			TITLE: 						"Diagnósticos",
			DIAGNOSTIC_TOOL: 			"Ferramentas de Diagnóstico",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"Endereço IP/ Nome de Domínio",
			COUNT: 						"Contagem Ping",
			
			BASIC: 						"Básico",
			ADVANCED: 					"Avançado",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Tamanho Pacote Ping",
			PKTUNIT: 					"(4-1472 Bytes)",

			TIMEOUT: 					"Ping Timeout",
			TIMOUTUNIT: 				"(100-2000 Milissegundos)",

			TTL: 						"Max TTL para Traceroute",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Inicio",
			STOP: 						"Parar"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"O Firmware está atualizado.",
			TITLE: 						"Atualização de Firmware",
			INFO: 						"Informação do Dispositivo",
			REMOTE_TITLE: 				"Atualização online",
			LOCAL_TITLE: 				"Upgrade local",

			NEWFILE: 					"Novo Ficheiro de Firmware",
			FIRMWAREVERSION: 			"Versão de Firmware",
			HARDWAREVERSION: 			"Versão de Hardware",
			LATESTVERSION: 				"Última versão",
			CONFIRM_CONTENT:			"Pretende atualizar o Firmware?",
			WARNING:					"A atualizar o Firmware… <br/> Para evitar qualquer problema causado durante o processo, por favor mantenha o Router ligado e não opere o equipamento durante a atualização.",
			REBOOTING: 					"A reiniciar... <br/> Para evitar qualquer problema causado durante o processo, por favor mantenha o Router ligado e não opere o equipamento durante a atualização.",
			DO_NOT_OPERATE: 			"A atualizar o Firmware… <br/> Para evitar qualquer problema causado durante o processo, por favor mantenha o Router ligado e não opere o equipamento durante a atualização.",
			FIRMWARE_UPDATING_NOTE: 	"1. A atualizar o Firmware… <br/> Para evitar qualquer problema causado durante o processo, por favor mantenha o Router ligado e não opere o equipamento durante a atualização.",
			REBOOTING_NOTE: 			"2. A reiniciar… <br/> Para evitar qualquer problema causado durante o processo, por favor mantenha o Router ligado e não opere o equipamento durante a atualização.",
			SCREEN_UPDATING_NOTE: 		"3. A atualizar o ecrã… <br/> Para evitar qualquer problema causado durante o processo, por favor mantenha o Router ligado e não opere o equipamento durante a atualização.",
			UPGRADE_FAILED: 			"Falha ao atualizar.",
			UPGRADE: 					"Atualizar",
			CHECK: 						"Verifique",
			DOWNLOADING: 				"A efetuar o download... <br/> Para evitar qualquer problema causado durante o processo, por favor mantenha o Router ligado e não opere o equipamento durante a atualização.",
			UPGRADE_INOF: 				"Para evitar qualquer dano, por favor mantenha o Router ligado.",
			NOTE: 						"Nota:",
			NO_UPGRADE: 				"Esta é a última versão.",

			UPGRADING: 					"A atualizar... <br/> Para evitar qualquer problema causado durante o processo, por favor mantenha o Router ligado e não opere o equipamento durante a atualização.",
			RETRY: 						"Tentar novamente",
			CANCEL: 					"Cancelar",
			ILEGAL_DEVICE:              "Não foi possível identificar o dispositivo. Por favor, contacte o suporte técnico da TP-Link.",
			UPGRADE_FAIL: 				"Não foi possível atualizar. Por favor tente novamente mais tarde.",
            CONFIG_RESET_NOTE:          "As suas definições atuais serão perdidas após efetuar a atualização para esta versão.",
			CHECK_UPGRADE: 				"Verificar as atualizações."
		},

		BACKUP:{
			BACKUP: 					"Cópia de Segurança",
			BACKUPTIP: 					"Gravar cópia das definições atuais.",

			RESTORE: 					"Repor",
			RESTORETIP: 				"Repor configuração a partir de um ficheiro.",
			
			RESTORE_WARN:				"A repor a configuração do Router… <br/>Por favor não operar durante o processo.",
			RESTORE_CONFIRM_CONTENT: 	"Tem a certeza que deseja reconfigurar o router a partir do ficheiro de cópia de segurança?",
			
			FILE: 						"Ficheiro",

			FACTORY: 					"Repor configuração de fábrica",
			FACTORYTIP: 				"Reverter toda a configuração para os valores predefinidos de fábrica.",
			RESETTIP:					"Repor todas as configurações para os valores de fábrica, excepto o seu Login e informação de conta Cloud.",
			FACTORY_CONFIRM_CONTENT:	"Tem a certeza que deseja restaurar a configuração predefinida de fábrica?",
			FACTORY_WARN:				"A repor a configuração do Router… <br/>Por favor não operar durante o processo.",
			
			BACKUPBTN: 					"Cópia de Segurança",
			RESTOREBTN: 				"Repor",
			RESETBTN:					"Repor",
			FACTORYBTN: 				"Repor"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Gestão de Contas",
			
			OLDUSER: 					"Utilizador Anterior",
			OLDPWD: 					"Senha Anterior",

			NEWUSER: 					"Novo Utilizador",
			NEWPWD: 					"Nova Senha",
			CONFIRM: 					"Confirmar Nova Senha",

			RECOVERYINFO: 				"Recuperar Senha",
			ENABLE_PASSWORD_RECOVERY: 	"Ativar Recuperação de Senha",
			FROM: 						"De",
			TO: 						"Para",
			SMTP_SERVER: 				"Servidor SMTP",
			
			ENABLE_AUTHENTICATION: 		"Ativar Autenticação",
			USERNAME: 					"Nome de utilizador",
			PASSWORD: 					"Senha",

			TEST_MAIL: 					"Testar eMail",

			LOCAL:						"Gestão Local",
			LOCAL_MAC_AUTH: 			"Autenticação MAC Local",
			ACCESS: 					"Acesso para Todos os Dispositivos Conectados à LAN",
			ACCESS_TIPS: 				"Mude para Ligado para ativar a gestão para todos os dispositivos na LAN ou mantenha Desligado para ativar a gestão para dispositivos específicos.",
			
			MAC_ADDRESS: 				"Endereço MAC",
			VIEW_BTN: 					"Ver Dispositivos Existentes",
			DESCRIPTION: 				"Descrição",

			EXIST_DEVICE:               "Dispositivos Existentes",

			OPTIONAL: 					"(Opcional)",
			ENABLE_THIS_ENTRY: 			"Ativar",

			DEVICE_NAME:				"Nome de Dispositivo",
			IP_ADDRESS:					"Endereço IP",
			

			REMOTE: 					"Gestão Remota",
			DISABLE_REMOTE_MANAGEMENR: 	"Desativar Gestão Remota",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Ativar Gestão Remota para Todos os Dispositivos",
			ENABLE_REMOTE_MANAGEMENR: 	"Ativar Gestão Remota para Dispositivos Específicos",
			WEB: 						"Porta de Gestão WEB",

			NOTICE:						"Em conflito com porta do servidor virtual! Tem a certeza que deseja continuar?",

			REMOTEIP: 					"Endereço IP de Gestão Remota",
			REMOTEIPNOTE: 				"(Digite 255.255.255.255 para todos)"
			
		},

		SYSLOG:{
			TITLE: 						"Registo de Eventos de Sistema",
			LOG_FILTER: 				"Filtro de Log:",
			
			TYPE_EQ: 					"Tipo=",
			
			ALL: 						"TODOS",

			FIREWALL: 					"Firewall", 
			NAT: 						"NAT",
			DDNS: 						"DNS Dinâmico",
			UPNP:						"UPnP",
			IMB:            			"Vinculo IP&MAC",
			IPTV:						"IPTV",
			DHCPS:						"Servidor DHCP",
			IGMP_PROXY:					"IGMP Proxy",
			DOMAIN_LOGIN:				"Domínio de Entrada",
			BASIC_SECURITY: 			"Segurança Básica",
			PARENTAL_CONTROL: 			"Controlo Parental",
			ACCESS_CONTROL: 			"Controlo de Acesso",
			DOS_PROTECTION: 			"Proteção DoS",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Estatísticas de Tráfego",
			TIME_SETTINGS: 				"Definições de Tempo",
			ACCOUNT_MANAGEMENT: 		"Gestão de Contas",
			LOCAL_MANAGEMENT: 			"Gestão Local",
			REMOTE_MANAGEMENT: 			"Gestão Remota",
			LOCALE: 					"Local",
			FACTORY_RESET: 				"Restaurar Definições de Fábrica",
			LED_CONTROLLER: 			"Led Controlador",
			NETWORK: 					"Rede",
			USBSHARE: 					"Partilha USB",
			AND: 						"e",
			LEVEL: 						"Nível",
			EMERGENCY:					"EMERGENCIA",
			ALERT:						"ALERTA",
			CRITICAL:					"CRITICO",
			ERROR: 						"ERRO",
			WARNING: 					"AVISO",
			NOTICE: 					"NOTIFICAÇÃO",
			INFO: 						"INFORMAÇÃO",
			DEBUG: 						"DEPURAR",

			INDEX: 						"Índice",
			TYPE: 						"Tipo",
			TIME: 						"Hora",
			LEVEL_COL:					"Nível",

			CONTENT: 					"Conteúdo de Registo",
			
			MAIL_LOG: 					"Registo de Mail",
			SAVE_LOG: 					"Gravar Registo",

			SEND_OK: 					"Enviar OK",
			SEND_FAILED: 				"Enviar Falhou",

			MAIL_SETTING: 				"Definições de Mail",

 			FROM: 						"De",
 			TO: 						"Para",
 			SMTP_SERVER: 				"Servidor SMTP",
 			ENABLE_AUTHENTICATION: 		"Ativar Autenticação",

 			USERNAME: 					"Nome de utilizador",
 			PASSWORD: 					"Senha",
 			CONFIRM_PASSWORD: 			"Confirme a Senha",

 			AUTO_MAIL: 					"Ativar Auto Mail",
 			LOG_AT: 					"Registar às",
 			HH_MM: 						"(HH:MM) todo o dia",

 			LOG_EVERY: 					"Registar a cada",
 			HOURS: 						"horas"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Definições",
			STATUS: 					"Ativar QoS",
			UPBANDWIDTH: 				"Largura de Banda de Upload",
			DOWNBANDWIDTH: 				"Largura de Banda de Download",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Teste de Velocidade",
			RULE_LIST: 					"Lista de Regras QoS",
			RULE: 						"Regra QoS",
			ID: 						"ID",
			NAME: 						"Nome",
			TYPE: 						"Tipo",
			DETAIL: 					"Detalhe",
			PRIORITY: 					"Prioridade",

			APPLICATION: 				"Aplicação",
			APPLICATION_LIST: 			"Lista de Aplicações",
			CUSTOM_APP: 				"Aplicação Personalizada",
			MAC_ADDR: 					"Endereço MAC",
			MAC_ADDR_P: 				"MAC",
			IP_ADDR: 					"Endereço IP",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Porta Física",

			LOW: 						"Baixo",
			MIDDLE: 					"Médio",
			HIGH: 						"Alto",

			PROTO: 						"Protocolo",
			PORT: 						"Porta",
			PROTO_P: 					"Protocolo",
			PORT_P: 					"Porta",
			PORT_TIPS: 					"(XX ou XX-XX,1-65535, no máximo 5 pares)",

			ALL: 						"TODOS",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Personalizado",

			WIFI_HOME: 					"WIFI-HOST",
			WIFI_GUEST: 				"WIFI-GUEST",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Atualização de Base de Dados",

			NEWFILE: 					"Novo Ficheiro de Base de Dados",
			FIRMWAREVERSION: 			"Versão de Base de Dados",
			CONFIRM_CONTENT:			"Tem a certeza que deseja atualizar a base de dados?",
			WARNING:					"A Atualizar a base de Dados... <br/>Por favor não operar durante o processo.",
			
			UPGRADE: 					"Atualizar",

			SERVICE_RESTART: 			"Serviço QoS a reiniciar",
			
			TYPE: 						"Tipo",
			BY_DEVICE: 					"Por Dispositivo",
			BY_APP: 					"Por Aplicação",
			BY_PHY: 					"Por Porta Física",

			HIGH_PRIORITY_LBL: 			"Alta Prioridade:",
			MIDDLE_PRIORITY_LBL: 		"Média Prioridade:",
			LOW_PRIORITY_LBL: 			"Baixa Prioridade:",

			HIGH_PRIORITY: 				"Alta Prioridade",
			MIDDLE_PRIORITY: 			"Média Prioridade",
			LOW_PRIORITY: 				"Baixa Prioridade"

		},

		APPLICATION:{
			APP_LIST: 					"Lista de Aplicações",
			GAME_LIST: 					"Lista de Jogos",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Estatísticas de Tráfego",
			ENABLE_STATISTICS: 			"Estatísticas de Tráfego",

			TITLE: 						"Lista de Estatísticas de Tráfego",
			IP_MAC: 					"Endereço IP/Endereço MAC",
			TPKT: 						"Total de Pacotes",
			TBYTE: 						"Total de Bytes",
			CPKT: 						"Pacotes Atuais",
			CBYTE: 						"Bytes Atuais",
			CICMP: 						"ICMP Tx Atual",
			CUDP: 						"UDP Tx Atual",
			CSYN: 						"SYN Tx Atual",
			
			DELETE_CONFIRM: 			"Tem a certeza que deseja apagar as estatísticas de tráfego?",
			DELETE_ALL_CONFIRM: 		"Tem a certeza que deseja apagar todas as estatísticas de tráfego?",

			RESET_ALL: 					"Repor Tudo"
		},

		SYSPARA:{
			W24G: 						"Wi-Fi 2.4GHz",
			W5G: 						"Wi-Fi 5GHz",
			SWITCH_NOTICE:  			"A funcionalidade Wi-Fi está desligada. Se deseja utilizar esta função, por favor ligue o botão Wi-Fi.",

			ENABLE_TIPS: 				"A função Wi-Fi está desativada.",

			BEACON: 					"Intervalo de Beacon",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS Threshold",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Limiar de Fragmentação",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"Intervalo DTIM",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Group Key Update Period",
			GROUPUNIT: 					"segundos",
			
			
			WMM_FEATURE: 				"Função WMM",
			WMM: 						"Ativar WMM",

			GI_FEATURE: 				"Função Short GI",
			GI: 						"Ativar Short GI",

			AP_FEATURE: 				"Função Isolamento AP",
			AP: 						"Ativar Isolamento AP",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Ativar TxBF",

			WDS_FEATURE: 				"Bridging WDS",
			WDS: 						"Ativar Bridging WDS",
			
			SSID_BRIDEGE: 				"SSID (a ser bridged)",
			SURVEY: 					"Pesquisa",

			SN: 						"SN",
			MAC_ADDRESS: 				"Endereço MAC",
			SSID: 						"SSID",
			SIGNAL: 					"Sinal",
			CHANNEL: 					"Canal",
			SECURITY: 					"Segurança",
			CHOSEN: 					"Escolhido",
			AP_NUMBER:					"Número AP",

			TOTAL: 						"Itens Totais",

			MAC: 						"Endereço MAC (a ser bridged)",
			MACUNIT: 					"Exemplo: 00-1D-0F-11-22-33",

			SECURITY: 					"Segurança",
			NO: 						"Não",
			NONE: 						"Sem Segurança",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Senha",
			
			AUTH_TYPE: 					"Tipo de Auth.",
			AUTO: 						"Auto",
			OPEN: 						"Sistema Aberto",
			SHARED: 					"Chave Partilhada",

			WEP_INDEX: 					"Índice WEP",
			KEY1: 						"Chave1",
			KEY2: 						"Chave2",
			KEY3: 						"Chave3",
			KEY4: 						"Chave4",

			WEP_KEY_FORMAT: 			"Formato de Chave WEP",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimal",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Ativar WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Ativar NAT",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"Ativar NAT Boost",
			
			MEDIA_SERVER: 				"Servidor de Média",
			SCAN_INTERVAL: 				"Intervalo de Auto Scan (Horas)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Definição de Níveis de Proteção DoS",

			ICMP: 						"Nível de Pacotes ICMP-FLOOD",
			UDP: 						"Nível de Pacotes UDP-FLOOD",
			TCP: 						"Nível de Pacotes TCP-FLOOD",

			WDS_MODE: 					"Modo WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Baixo",
			MIDDLE: 					"Médio",
			HIGH: 						"Alto",

			TO: 						"Para",
			NOTICE_NAT_REBOOT: 			"A reiniciar… <br/>Por favor não operar durante o processo de reinicialização.",

			NOTICE_NAT_BOOST: 			"Modificar o NAT Boost irá provocar o reinicio deste dispositivo. Tem a certeza que quer continuar?",
			NOTICE:						"O canal do seu Router não é o mesmo dos AP em bridge. Deseja alterá-lo?",

			UNIT: 						"(5-7200)Packets/Secs",
			LED: 						"LED",
			NIGHT_MODE: 				"Modo noturno",
			PERIOD_NIGHT_TIME: 			"Período do Modo Noturno",
			ENABLE: 					"Ativar",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "O seu LED está desligado. Se pretender usar esta função, clique no LED na parte superior direita da página.",
			NOTE2:                      "O período do modo noturno produz efeito com base na hora do sistema do router. Certifique-se de que já definiu a Hora do router."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Nenhum certificado atualmente, <b>Gere</b> um antes de ativar Servidor VPN.",
			NO_CERT_NOTE2: 				"Nenhum certificado atualmente, <b>Gere</b> um antes de exportar a configuração.",
			ENABLE_VPN_SERVER: 			"Ativar o servidor VPN",
			SERVICE_TYPE: 				"Tipo de Serviço",
			SERVICE_PORT: 				"Porta de serviço",
			VPN_SUBNET: 				"Sub-rede/Máscara",
			CLIENTS_ACCESS: 			"Acesso de Cliente",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Apenas rede doméstica",
			INTERNET_HOME: 				"Internet e Rede doméstica",
			CERT_STR: 					"Nenhum certificado atualmente, clique em OK para gerar um e guardar a sua configuração.",
			CERT_STR2: 					"Nenhum certificado atualmente, clique em OK para gerar um e exportar a sua configuração.",
			CONF_FILE: 					"Ficheiro de Configuração", 
			EXPORT_CONF_FILE: 			"Exportar a configuração.",
			EXPORT: 					"Exportar",

			INSTALL_GUIDE: 				"Guia de instalação do cliente VPN",
			INSTALL_STEP: 				"Para ativar e ligar os seus dispositivos cliente ao servidor OpenVPN:",
			INSTALL_NOTICE:				"Antes de configurar o servidor OpenVPN, configure o Serviço DNS Dinâmico (Recomendado) ou atribua um endereço IP estático à porta Wan. Certifique-se de que Hora do Sistema está certa.",
			INSTALL_NOTE1: 				"Selecione Ativar o Servidor VPN.",
			INSTALL_NOTE2: 				"Antes de configurar o servidor OpenVPN, por favor configure o serviço de DNS Dinâmico (recomendado) ou atribua um endereço IP Estático à porta WAN. Certifique-se ainda que a porta externa das configurações NAT não é a porta de serviço e que a DMZ está desativada. O horário de sistema deverá estar sincronizado com a Internet.",
			INSTALL_NOTE3: 				"Clique em Exportar para guardar o ficheiro de configuração.",
			INSTALL_NOTE4: 				"Nos seus dispositivos cliente, transfira e instale o utilitário cliente OpenVPN a partir de <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br>. As plataformas oficiais suportadas incluem Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Inicie o utilitário cliente OpenVPN e adicione uma nova ligação VPN utilizando o ficheiro de configuração guardado para ligar o seu dispositivo cliente ao servidor VPN.",
			NOTE: 						"Para saber mais sobre clientes OpenVPN, visite <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"VPN PPTP",
			CLIENT_IP_ADDRESS: 			"Endereço IP do Cliente",
			ACCOUNT_USERNAME: 			"Nome de utilizador",
			ACCOUNT_PASSWORD: 			"Senha",
			CLIENT_IP_NOTE: 			"(até 10 clientes).",
			SAME_SUBNET_NOTE: 			"O endereço IP do cliente e o endereço IP LAN não podem estar na mesma sub-rede.",
			CONFLICT_WITH_DHCP: 		"O endereço IP do cliente está em conflito com a pool de endereços IP atribuídos por DHCP.",
			CONFLICT_WITH_RESERVED: 	"O endereço IP do cliente está em conflito com um endereço reservado.",
			CONFLICT_WITH_OPENVPN: 		"O endereço IP do cliente e o endereço do servidor OpenVPN não podem estar na mesma rede.",
			SAME_SUBNET_NOTE2: 			"A Sub-rede/Máscara VPN e o endereço IP da LAN não podem estar na mesma sub-rede.",
			CONFLICT_WITH_DHCP2: 		"A sub-rede/máscara de rede da VPN está em conflito com o intervalo de endereços IP DHCP.",
			CONFLICT_WITH_RESERVED2: 	"A sub-rede/máscara de rede da VPN está em conflito com um endereço IP reservado.",
			CONFLICT_WITH_PPTPVPN: 		"A sub-rede/máscara de rede da VPN e o endereço IP VPN PPTP não podem estar na mesma sub-rede.",
			VPN_MASK_ERROR: 			"A máscara de rede não pode ser superior a 255.255.255.248.",
			ACCOUNT_LIST: 				"Lista de Utilizadores (até 16 utilizadores)",
			ADVANCED_SETTING: 			"Avançado",
			ALLOW_SAMBA: 				"Permitir acesso Samba (sitio de rede)",
			ALLOW_NETBIOS: 				"Permitir Passthrough NetBIOS",
			ALLOW_UNENCRYPTED_CONN: 	"Permitir ligações não encriptadas",
			USERNAME_CONFLICT: 			"Este nome de utilizador já existe.",
			
			CONNECT_PPTP: 				"Para ativar e ligar os seus dispositivos de cliente ao servidor PPTP VPN:",
			CONNECT_NOTICE:				"Antes de configurar o servidor PPTP VPN, configure Serviço DNS Dinâmico (Recomendado) ou atribua um endereço IP estático à porta WAN. Certifique-se de que a seu porta externa das definições do NAT não é 1723 e o DMZ está desativado e também que a Hora do Sistema está certa.",
			CONNECT_NOTE1: 				"Selecione Ativar o Servidor VPN.",
			CONNECT_NOTE2: 				"Configure os parâmetros do servidor PPTP VNP e clique em Guardar.",
			CONNECT_NOTE3: 				"Nos seus dispositivos cliente crie a ligação VPN PPTP. As plataformas oficialmente suportadas incluem Windows, MAC OSX, Linux, IOS e Androide.",
			CONNECT_NOTE4: 				"Inicie o programa PPTP VPN, adicione uma nova ligação e introduza o nome do domínio do serviço DDNS registado ou o endereço IP estático atribuído à porta WAN, para ligar o seu dispositivo de cliente ao servidor PPTP VPN.",
			
			GENERATE_CERT: 				"Certificado",
			GENERATE_NEW_CERT: 			"Gerar o certificado.",
			GENERATE: 					"Gerar",
			GENERATE_TIPS: 				"A gerar Certificado... <br/ >Irá demorar alguns minutos, por favor aguarde.",
			CERT_SUCCESS: 				"Sucesso",
			CERT_FAIL: 					"Falha, tente novamente.",
			
			VPN_CONNECTIONS: 			"Ligações VPN",
			OPEN_VPN_CONNECTIONS: 		"Ligação OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"Ligação PPTP VPN",
			USER:				"Utilizador",
			REMOTE_IP:			"IP Remoto",
			ASSIGNED_IP:			"IP Atribuído"
		}
	};
})(jQuery);

