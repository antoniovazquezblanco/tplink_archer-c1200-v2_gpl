(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			EMAIL: 						"Email",
			FORGET_PASSWORD: 			"Esqueceu a Senha?",
			LOGIN: 						"Entrar",
			BEGIN: 						"Vamos Começar",
			IMPORTANT_UPDATE_INFO: 		"Para evitar conflito de IP com outros dispositivos da rede, o IP do seu roteador foi alterado para",
			CONTINUE: 					"Continuar",

			IMPORTANT_NOTICE: 			"Nota Importante",
			OR: 						", tem certeza que deseja continuar a visitar",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Aperte e segure o botão Reset por %SECONDS% segundos para restaurar aos padrões de fábrica.",
			FORGET_PASSWORD_INFO_1: 	"Habilitar a função de Recuperação de Senha permite que o sistema envie um código de verificação para seu endereço de email alternativo para rieniciar o nome de usuário e senha padrões.",
			FORGET_PASSWORD_SEND_FAILED:"Falha ao enviar o código. Favor verificar sua conexão de Internet e verifique os parâmetros de recuperação em \"Ferramentas do Sistema -> Administração\".",

			VERIFICATION_CODE: 			"Código de verificação",

			RECEIVE_CODE: 				"Enviar Código",

			CONFIRM: 					"Confirmar",
			WELCOME: 					"Bem-vindo à TP-Link %model%. Favor fazer log in.",
			SEC: 						"s",

			USER_CONFLICT: 				"Conflito de Login.",
			FIRST_TIME: 				"Favor configurar seu%PRODUCT% para conectar à Internet primeiramente. Para começar, crie uma senha para o dispositivo para gerenciar seu %PRODUCT%.",
			FIRST_TIME1: 				"Por favor, crie uma senha de administrador para gerenciar o seu %model%.",
			USER_CONFLICT_INFO: 		"O usuário %USER% e o host %HOST% (%IP%/%MAC%) estão atualmente logados no roteador. Você não pode fazer login ao mesmo tempo. Favor tentar novamente.",
			USER_CONFLICT_INFO_2: 		"O usuário %USER% (%IP%) está atualmente logado no Roteador. Você não pode fazer login ao mesmo tempo. Favor tentar novamente.",
			USER_CONFLICT_INFO_3: "Only one device can log in at a time. Do you want to continue and force the other device to log off?",
			
			LOGIN_FAILED: 				"Falha de Login.",
			LOGIN_FAILED_COUNT: 		"Falha ao logar por %num1 vezes, você possui %num2 tentativas.",
			NO_COOKIE: 					"Os cookies devem estar habilitados para se fazer login. Favor habilitar Cookies ou desligar o modo de navegação Privado/Incógnito.", 

			FORGET_PASSWORD_NOTE: 		"Você pode também pressionar e segurar o botão Reset por %SECONDS% segundps para restaurar o roteador ao nome de usuário e senha padrões."
		},
		INIT: {
			PASSWORD: 					"Senha",
			CONFIRM_PASSWORD:				"Confirmar Senha",
			BEGIN: 						"Vamos Começar",
			IMPORTANT_UPDATE_INFO: 		"Para evitar conflito de IP com outros dispositivos da rede, o IP do seu roteador foi alterado para",
			CONTINUE: 					"Próximo",

			IMPORTANT_NOTICE: 			"Nota Importante",
			OR: 						", tem certeza que deseja continuar a visitar",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Confirmar",

			SEC: 						"s",

			USER_CONFLICT: 				"Conflito de Login.",
			
			USER_CONFLICT_INFO: 		"O usuário %USER% e o host %HOST% (%IP%/%MAC%) estão atualmente logados no roteador. Você não pode fazer login ao mesmo tempo. Favor tentar novamente.",
			USER_CONFLICT_INFO_2: 		"O usuário %USER% (%IP%) está atualmente logado no Roteador. Você não pode fazer login ao mesmo tempo. Favor tentar novamente",
			
			LOGIN_FAILED: 				"Falha de Login.",
			LOGIN_FAILED_COUNT: 		"Falha ao logar por %num1 vezes, você possui %num2 tentativas.",
			NO_COOKIE: 					"Os cookies devem estar habilitados para se fazer login. Favor habilitar Cookies ou desligar o modo de navegação Privado/Incógnito.", 

			INIT_NOTE_TITLE: 			"Querido Usuário,",
			INIT_NOTE_CONTENT: 			"Favor configurar seu%PRODUCT% para conectar à Internet primeiramente. Para começar, crie uma senha para o dispositivo para gerenciar seu %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Versão de Firmware: ",
			FEATURE: 						"Modificações e Correção de Bugs: ",
			TITLE: 							"Uma atualização de firmware disponível foi detectada.",
			UPGRADE_NOW: 					"Atualize agora",
			REMIND: 						"Lembre-me mais tarde",
			NOTICE:    						"Olá, uma nova firmware está disponível para o seu roteador.",
			NEVER: 							"Ignorar esta versão"
			
		},

		WAN_ERROR: {
			TITLE: 							"Erro de conexão WAN",
			STATUS: 						"Ativo",
			INFO: 							"Informação",
			SETUP: 							"Configurar uma conexão de Internet",
			NEVER: 							"Não lembrar mais"
		},

		OFFLINE_ERROR:{
			TITLE: "Opa... Não podemos acessar o servidor cloud.",
			NOTE1: "1. Garanta que você tenha acesso à Internet.",
			NOTE2: "2. O servidor cloud está temporariamente inacessível. Favor atualizar a página mais tarde.",
			NOTE3: "3. Caso o problema persistir, favor conectar <a target=\"_blank\" id=\"support\">Suporte Técnico TP-Link</a>.",
			ERROR: "Erro"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Versão de Firmware:",
			HARDWARE_VERSION: 				"Versão de Hardware:",
			HELP_SUPPORT: 					"Suporte",
			FAQ: 							"Perguntas Frequentes (FAQ)",
			CONFIRM_REBOOT: 				"Tem certeza que deseja reiniciar o roteador?",
			CONFIRM_LOGOUT: 				"Tem certeza que deseja sair?",
			UPGRADE_ALERT_1: 				"O firmware atual não suporta o serviço TP-Link cloud. É altamente recomendável que você faça o download do firmware mais recente em www.tp-link.com e atualize-o.",
			UPGRADE_ALERT_2: 				"O firmware atual não suporta o serviço TP-Link cloud. Nós altamente recomendamos que você atualize o firmware, clicando no ícone de atualização no canto superior direito.",
			ACCOUNT_UNLOGIN: 				"Conta",

			REBOOTING: 						"Reiniciando... <br/>Favor NÃO operar durante o processo.",

			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Acesse o código QR para baixar o App Tether da TP-Link.",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Gerencie facilmente sua rede de qualquer dispositivo móvel. ",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Controle completo na palma da sua mão."
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
			LED_OFF: 					"LED Ligado",
			LED_DISABLED: 				"O status LED não pode ser alterado durante o modo noturno"
		},

		LANGUAGE: {
			EN_US: 						"Inglês",
			ZH_CN: 						"简体中文"
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
			BAHRAIN: 					"Barém",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Bielorrúsia",
			BELGIUM: 					"Bélgica",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Bermuda",
			BOLIVIA: 					"Bolívia",
			BOSNIA_HERZEGOWINA: 		"Bósnia e Herzegovina",
			BRAZIL: 					"Brasil",
			BRUNEI_DARUSSALAM: 			"Brunei",
			BULGARIA: 					"Bulgária",
			CAMBODIA: 					"Camboja",
			CANADA: 					"Canadá",
			CAYMAN_ISLANDS: 			"Ilhas Cayman",
			CHILE: 						"Chile",
			CHINA: 						"China",
			COLOMBIA: 					"Colômbia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Croácia",
			CYPRUS: 					"Chipre",
			CZECH_REPUBLIC: 			"República Tcheca",
			DENMARK: 					"Dinamarca",
			DOMINICAN_REPUBLIC: 		"Républica Dominicana",
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
			GREENLAND: 					"Groelândia",
			GRENADA: 					"Granada",
			GUADELOUPE: 				"Guadalupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong",
			HUNGARY: 					"Hungária",
			ICELAND: 					"Islândia",
			INDIA: 						"Índia",
			INDONESIA: 					"Indonésia",
			IRAN: 						"Irã",
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
			KENYA: 						"Kênia",

			NORTH_KOREA: 				"Korea do Norte",
			KOREA_REPUBLIC: 			"Coreia do Sul",
			KOREA_REPUBLIC_3: 			"Coreia do Sul 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Letônia",
			LEBANON: 					"Líbano",
			LIBYA: 						"Líbia",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Lituânia",
			LUXEMBOURG: 				"Luxemburgo",
			MACAU: 						"Macau",
			MACEDONIA: 					"Macêdonia",
			MALAWI: 					"Maláui",
			MALAYSIA: 					"Malásia",
			MALDIVES: 					"Maldivas",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinica",
			MAURITIUS: 					"Maurícia",
			MAYOTTE: 					"Maiote",
			MEXICO: 					"México",
			MONACO: 					"Mônaco",
			MONGOLIA: 					"Mongólia ",
			MOROCCO: 					"Marrocos",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Holanda",
			NETHERLANDS_ANTILLES: 		"Antilhas Holandesas",

			NEW_ZEALAND: 				"Nova Zelândia",
			NICARAGUA: 					"Nicarágua",
			NIGERIA: 					"Nigéria",
			NORWAY: 					"Noruega",
			NORTHERN_MARIANA_ISLANDS: 	"Marianas Setentrionais",
			OMAN: 						"Omã",
			PAKISTAN: 					"Paquistão",
			PANAMA: 					"Panamá",
			PAPUA_NEW_GUINEA: 			"Papua Nova Guiné",
			PARAGUAY: 					"Paraguai",
			PERU: 						"Peru",
			PHILIPPINES: 				"Filipinas",
			POLAND: 					"Polônia",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Porto Rico",
			QATAR: 						"Quatar",
			REUNION: 					"Reunião",
			ROMANIA: 					"România",
			RUSSIA: 					"Rússia",
			RWANDA: 					"Ruanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Arábia Saudita",
			SINGAPORE: 					"Singapura",
			SLOVAK_REPUBLIC: 			"Eslováquia",
			SLOVENIA: 					"Eslovênia",
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
			TRINIDAD_TOBAGO: 			"Trinidade e Tobago",
			TUNISIA: 					"Tunísia",
			TURKEY: 					"Turquia",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ucrânia",
			UNITED_ARAB_EMIRATES: 		"Emirados Árabes",
			UNITED_KINGDOM: 			"Reino Unido",
			UNITED_STATES: 				"Estados Unidos",
			URUGUAY: 					"Uruguai",
			UZBEKISTAN: 				"Uzbequistão",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnã",
			VIRGIN_ISLANDS: 			"Ilhas Virgens (EUA)",
			YEMEN: 						"Iêmen",
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
			ENIWETOK: 					"(GMT-12:00) Eniwetok, Kwajalein", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Ilhas Midway, Samoa",
			HAWAII: 					"(GMT-10:00) Havaí",
			ALASKA: 					"(GMT-09:00) Alaska",
			PACIFIC_TIME: 				"(GMT-08:00) Tempo do Pacífico",
			MOUNTAIN_TIME: 				"(GMT-07:00) Horário das Montanhas (EUA Canadá)",
			CENTRAL_TIME: 				"(GMT-06:00) Horário Central (EUA Canadá)",
			EASTERN_TIME: 				"(GMT-05:00) Horário do Leste (EUA Canadá)",
			CARACAS:					"(GMT-04:30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04:00) Horário do Atlântico (Canadá)",
			NEWFOUNDLAND: 				"(GMT-03:30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brasília, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Meio Atlântico",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Açores, Cabo Verde",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwich Mean Time, Dublin, Londres",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlim, Estocolmo, Roma, Berna, Bruxelas",
			ATHENS_HELSINKI: 			"(GMT+02:00) Atenas, Helsinki, Leste Europeu, Israel",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Bagdá, Kuwait, Nairóbi, Riade, Moscou",

			TEHERAN: 					"(GMT+03:30) Teerã",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Ekaterinburg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Calcutta, Bombay, Nova Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Pequim, Hong Kong, Perth, Singapure",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tóquio, Osaka, Sapporo, Seul, Yakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Ilhas Salomão, Nova Caledônia",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamchatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Aplicação",
			GAME:						"Jogos",
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
			DAY: 						"Dia",

			MONDAY: 					"Segunda",
			TUESDAY: 					"Terça",
			WEDNESDAY: 					"Quarta",
			THURSDAY: 					"Quinta",
			FRIDAY: 					"Sexta",
			SATURDAY: 					"Sábado",
			SUNDAY: 					"Domingo",
			
			MON: 						"Seg",
			TUES: 						"Ter",
			WED: 						"Qua",
			THUR: 						"Qui",
			FRI: 						"Sex",
			SAT: 						"Sáb",
			SUN: 						"Dom",

			JAN: 						"Jan",
			FEB: 						"Fev",
			MAR: 						"Mar",
			APR: 						"Abr",
			MAY: 						"Mai",
			JUN: 						"Jun",
			JUL: 						"Jul",
			AUG: 						"Ago",
			SEP: 						"Set",
			OCT: 						"Out",
			NOV: 						"Nov",
			DEC: 						"Dez"

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
			"1ST": 						"1º",
			"2ND": 						"2º",
			"3RD": 						"3º",
			"4TH": 						"4º",
			"5TH": 						"Último",
			"1ST_": 					"1º",

			TH: 						"º"
		},

		GRID: {
			CLIENT_NUMBER: 				"Total de Clientes",

			ID: 						"ID",
			MODIFY: 					"Modificar",
			STATUS: 					"Ativo",
			ENABLE: 					"Habilitar",

			OPERATION: 					"Operação",
			CHOOSE: 					"Escolher",
			DESCRIPTION: 				"Descrição",
			

			AUTO_REFRESH: 				"Atualização Automática",
			REFRESH: 					"Atualizar",
			NUMBER: 					"Número",
			ENABLED: 					"Habilitar",
			DISABLED: 					"Desabilitado",
			ACTIVE: 					"Ativo",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Adicionar",
			CHOOSE: 					"Escolher",
			EDIT: 						"Editar",
			DELETE: 					"Apagar",
			DELETE_ALL: 				"Apagar Todos",
			REMOVE: 					"Remover",
			RESET: 						"Reiniciar",
			RESET_ALL: 					"Reiniciar Todos",
			DETECT: 					"Detectar",
			ENABLE: 					"Habilitar",
			DISABLE: 					"Desabilitar",
			CLEAR: 						"Limpar",

			REFRESH: 					"Atualizar",
			SEARCH: 					"Buscar...",
			BROWSE: 					"Buscar",

			SAVE: 						"Salvar",
			BACK: 						"Voltar",

			PREV: 						"Anterior",
			NEXT: 						"Próximo",
			FINISH: 					"Finalizar",
			
			ON: 						"Ligado",
			OFF: 						"Desligado",
			LOW: 						"Baixa",
			MIDDLE: 					"Média",
			HIGH: 						"Alta",
			
			OK: 						"OK",
			CANCEL: 					"Cancelar",

			YES: 						"Sim",
			NO: 						"Não",
			
			CONNECTED: 					"Conectado",
			CONNECTING: 				"Conectando",
			DISCONNECTING: 				"Desconectando",
			DISCONNECTED: 				"Não Conectado",

			PASSWORD_HINT: 				"Senha",
			FILEBUTTONTEXT: 			"Buscar",
			FILEBLANKTEXT: 				"Favor selecionar um arquivo.",
			NOSELECTEDTEXT: 			"-Favor Selecione-",

			ADD_A_NEW_KEYWORD: 			"Adicionar uma Nova Palavra-chave",

			SUCCESSED: 					"Concluído com Sucesso.",
			FORM_SAVED: 				"Salvo",
			FORM_FAILED: 				"Falhou",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Salvo",
			GRID_FAILED: 				"Falhou",
			GRID_NONE_SELECT: 			"Favor inserir ao menos uma entrada.",
			GRID_DELETE_COMFIRM: 		"Tem certeza de que deseja apagar a entrada selecionada?",
			GRID_DELETE_ALL_COMFIRM: 	"Tem certeza de que quer deletar todas as entradas?",
			GRID_MAX_RULES: 			"Máximo de Entradas Excedido.",
			KEYWORD_MAX_OVERFLOW: 		"O número de palavras-chave atingiu o limite.",

			NOTE: 						"Nota"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Formato inválido.",
			BLANKTEXT: 					"Este campo é necessário.",

			EMAIL: 						"Formato de email inválido.",
			NUMBER: 					"Formato inválido.",

			NUMBER_MIN: 				"Este número deve ser maior que%min.",
			NUMBER_MAX: 				"Este número deve ser menor que %max.",

			NUMBER_MIN_MAX: 			"Este número deve ser entre %min e %max.",
			HEX: 						"Este campo deve possui números hexadecimais.",

			IP: 						"Formato inválido.",

			IP_NO_ALL_ZERO:				"O endereço não pode ser 0.0.0.0.",
			IP_NO_LOOP:					"O endereço não pode ser loopback. ",
			IP_NO_D_TYPE:				"O endereço IP não pode ser de Classe D.",
			IP_NO_E_TYPE:				"O endereço IP não poder ser de Classe E.",
			IP_NO_ALL_ONE:				"O endereço não pode ser 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"O endereço não pode começar com 255.",
			IP_NO_FIRST_ZERO:			"O endereço não pode começar com 0.",
			MASK_NO_ALL_ONE:			"A máscara de sub-rede não pode começar com 255.255.255.255.",

			IPV6: 						"Formato inválido.",
			IPV6_NOT_GLOBAL:			"Formato inválido.",
			IPV6_NOT_PREFIX:			"Formato inválido.",
			IP_DOMAIN: 					"Formato inválido.",
			IPV6_DOMAIN: 				"Formato inválido.",
			MAC: 						"Formato inválido.",
			MULTI_MAC:					"Formato inválido.",
			DATE: 						"Formato inválido.",
			DATE_INVALID: 				"Favor inserir uma data válida entre 01/01/1970 e 12/31/2030.",
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
			NAME_SPECIAL: 				"Favor inserir de 4 a 15 caracteres alfanuméricos, números, - e _.",
			VPN_NAME_PWD: 				"Favor inserir de 1 a 15 caracteres alfanuméricos, números, - e _."	
			
		},


		ERROR: {			
			"00000001":					"Tipo de arquivo inválido.",
			"00000002":					"Erro de Checksum.",
			"00000003":					"O arquivo é grande demais.",
			"00000004":					"Erro de Atualização.",
			"00000005":					"Erro de Reboot.",
			"00000006":					"Erro Desconhecido.",
			"00000007":					"O item já existe. Favor inserir outro.",

			"00000009":					"Porta inválida.",
			"00000010":					"A porta deve ser um número.",

			"00000011":					"O nome do usuário deve ser o mesmo que o do campo valor.",
			"00000012": 				"O nome de usuário deve se iniciar com um caractere alfabético.",

			"00000021":					"Formato inválido.",

			"00000032": 				"O valor deve ser menor que Baixo.",
			"00000033": 				"O valor deve ser menor que Médio e Baixo.",
			"00000034": 				"Valor inválido. Favor inserir um número entre 5 e 7200.",

			"00000039": 				"Favor utilizar o valor padrão 0 ou insira um valor entre 30 e 86400.",
			"00000040": 				"Os endereços SSID e MAC são necessários.",

			"00000042": 				"Favor utilizar o valor padrão 80 ou insira um valor entre 1024 e 65535.",

			"00000045": 				"O Gateway Padrão e o endereço IP LAN devem estar na mesma sub-rede. Favor inserir novamente.",

			"00000047": 				"O endereço IP e IP LAN devem estar na mesma sub-rede. Favor inserir novamente.",

			
			"00000049":					"Rede Destino Inválida.",

			"00000050": 				"Endereço de IP de servidor DNS inválido. Favor inserir outro.",
			"00000051": 				"Este endereço MAC já existe. Favor inserir outro.",
			"00000052": 				"Este endereço IP já existe. Favor inserir outro.",

			"00000053": 				"O endereço inicial não pode ser maior que o endereço final. <br/>Favor inserir novamente.",

			"00000054": 				"O endereço IP pool e IP LAN devem estar na mesma sub-rede. Favor inserir outro.",

			"00000055": 				"O endereço IP não pode ser o mesmo que o endereço LAN.",

			"00000056": 				"O endereço IP remoto e o endereço IP atual não podem estar na mesma sub-rede. Favor inserir outro.",

			"00000057": 				"Senha PSK Inválida. Favor inserir novamente.",
			"00000058": 				"Senha WEP Inválida. Favor inserir novamente.",

			"00000059": 				"Máscara de Sub-rede e endereço IP LAN inválidos, favor inserir outro.",

			"00000060": 				"Os endereços IP WAN e IP LAN não podem estar na mesma sub-redde. <br/>Favor inserir outro.",

			"00000061": 				"O tempo inicial deve ser menor que o tempo final.",

			"00000062": 				"Este campo é necessário.",
			"00000063": 				"Este campo é necessário.",

			"00000064": 				"Não é possível bloquear o endereço MAC host.",
			"00000065": 				"Este item conflita com o item existente. Favor tentar novamente.",
			
			"00000066": 				"A senha deve conter entre 8 e 63 caracteres ou 64 dígitos hexadecimais.",
			"00000067": 				"A senha deve conter 10 dígitos hexadecimais.",
			"00000068": 				"A senha deve conter 5 caracteres ASCII.",
			"00000069": 				"A senha deve conter 26 dígitos hexadecimais.",
			"00000070": 				"A senha deve conter 13 dígitos ASCII.",
			"00000071": 				"A senha deve conter 32 dígitos hexadecimais.",
			"00000072": 				"A senha deve conter 16 caracteres ASCII.",
			"00000073": 				"A senha deve conter menos que 64 caracteres.",

			"00000074": 				"Tipo de arquivo inválido.",

			"00000075": 				"O código PIN deve conter 8 dígitos.",

			"00000076": 				"A entrada conflita com items existentes. Favor verificar a porta e o protocolo de disparo.",
			"00000077": 				"O endereço IP não pode estar com o endereço IP LAN. Favor inserir novamente.",
			"00000078": 				"O endereç IP host não pode estar com o mesmo endereço IP LAN. Favor inserir novamente.",

			"00000080": 				"As senhas não combinam. Favor tentar novamente.",

			"00000088": 				"Esta operação não está permitida para gerenciamento remoto.",
			"00000089": 				"O máximo de tentativas de login%num se excedeu. Favor tentar novamente em 10 minutos.",

			"00000090": 				"O destino não pode ser o endereço IP LAN.",
			"00000091": 				"O destino não pode ser o endereço IP WAN.",

			"00000092": 				"O endereço IP e endereço IP LAN não podem estar na mesma sub-rede.  <br/>Favor inserir novamente.",
			"00000093": 				"O endereço IP e o endereço IP WAN não podem estar na mesma sub-rede. <br/>Favor inserir novamente.",

			"00000094": 				"Os IDs VLAN não podem ser os mesmos.",
			"00000095": 				"Ao menos uma porta de Internet é necessária.",

			"00000096": 				"A palavra-chave já existe.",

			"00000097": 				"As configurações feitas para a frequência de 2.4GHz não terão efeito até que o botão Wi-Fi seja ligado.",
			"00000098": 				"As configurações feitas para a frequência de 5GHz não terão efeito até que o botão Wi-Fi seja ligado.",
			"00000099": 				"As configurações feitas para a frequência de 2.4GHz e 5GHz não terão efeito até que o botão Wi-Fi seja ligado.",

			"00000100": 				"A rede de 5GHz está indisponível devido à restrições em sua região/país.",

			"00000101": 				"A função wireless está desligada. Caso queira utilizar esta função, favor acionar o botão Wi-Fi.",
			"00000102": 				"A função wireless está desligada. Caso queira utilizar esta função, favor acionar o botão Wi-Fi.",

			"00000103": 				"A função wireless está desligada. Caso queira utilizar esta função, favor acionar o botão Wi-Fi.",
			"00000104": 				"A função wireless está desabilitada.",

			"00000105": 				"QoS e IPTV não pode ser habilitados de uma vez.",

			"00000106": 				"O endereço IP não pode ser o mesmo que o endereço IP LAN.",
			
			"00000107": 				"O destino já existe.",

			"00000110": 				"O endereço IP e o endereço IP LAN devem estar na mesma sub-rede.",
			
			"00000111": 				"As funções QoS e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> não podem ser habilitadas ao mesmo tempo.",
			"00000112": 				"A função WDS pode operar tanto em 2.4GHz como 5GHz. Além disso, a Rede para Convidados não está disponível em banda WDS.",
			"00000113": 				"A função WDS e a Rede para Convidados não podem estar habilitadas ao mesmo tempo.",
			"00000114": 				"As Estatísticas de Tráfego <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">e a função NAT Boost</a> não podem ser habilitadas ao mesmo tempo.",
			"00000115": 				"IPTV e <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> não pode ser habilitados de uma vez.",

			"00000117": 				"O nome de domínio já existe.",
			"00000118": 				"O número de nomes de domínio atingiu o limite.",
			"00000119":				"A função NAT Boost será desabilitada quando a função <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> ou <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\"> as Estatísticas de Tráfego</a> estiverem habilitadas.",

			"00000120": 				"A senha deve conter entre 5 e 13 caracteres ASCII.",
			"00000121": 				"A senha deve conter entre 10 e 26 dígitos hexadecimais.",
			"00000122": 				"Os campos de nome de usuário e senha estão vazios, tem certeza de que deseja continuar?",
			"00000123": 				"Salvando... <br/>Favor NÃO operar durante o processo.",
			"00000124": 				"O PIN do roteador está bloqueado devido às conexões repetidas utilizando PIN incorreto. Favor gerar um novo.",

			"00000125": 				"O número das regras QoS excedeu o limite.",
			"00000126": 				"O tamanho do arquivo excedeu o limite.",
			"00000127": 				"O conteúdo do arquivo está incorreto.",
			"00000128": 				"Favor selecionar ao menos uma aplicação.",
			"00000129": 				"Favor selecionar ao menos uma porta física.",
			"00000130":					"A função WPS está desabilitada.",
			"00000131": 				"O Servidor NTP não pode possuir endereço loopback.",
			"00000132": 				"Falha no modo switch. Favor tentar novamente mais tarde ou reinicie seu roteador.",
			"00000133": 				"Endereço IP Host DMZ Inválido. Favor inserir um número válido.",
			"00000134":  				"IP Interno Inválido. Favor inserir um número válido.",
			"00000135": 				"Erro de arquivo firmware.",
			"00000136": 				"Erro no arquivo de backup.",
			"00000137": 				"O nome de usuário está vazio, tem certeza que deseja continuar?",
			"00000138": 				"O campo de senha está vazio, tem certeza de que deseja continuar?",
			"00000139": 				"Parâmetros de recuperação de senha incorretos.",
			"00000140": 				"Código incorreto.",
			"00000141": 				"A recuperação de senha está desabilitada.",
			"00000142": 				"Falha ao enviar o código. Favor verificar sua conexão de Internet.",
			"00000143": 				"Endereços de email inválidos.",
			"00000144": 				"Mensagem de email inválida.",
			"00000145": 				"Não é possível localizar o host.",
			"00000146": 				"Falha de autenticação.",
			"00000147": 				"A porta deve conter entra 1 e 65535.",
			"00000148": 				"Para variação de porta, o número de porta inicial deve ser menor que o número final. Favor inserir novamente.",
			"00000149": 				"Sobreposições de números de porta. Favor inserir novamente.",
			"00000150": 				"Máscara de Sub-rede e endereços IP WAN inválidos, favor inserir outro.",
			"00000151": 				"Favor selecionar ao menos um.",
			"00000152": 				"Favor configurar o horário de acesso à Internet.",
			"00000213":					"O endereço IP DNS e endereço IP LAN não podem estar na mesma sub-rede. <br/>Favor inserir outro.",
			"10000139": 				"Nenhuma conexão de Internet",
			"10000140": 				"Tempo de Solicitação Esgotado. Favor verificar sua conexão de Internet e tente novamente mais tarde.",
			"10000158": 				"A porta WAN está desplugada.",
			"10000159": 				"Não é possível conectar-se à Internet. Favor contatar seu provedor ou tente novamente mais tarde. ",
			"10000160": 				"Não é possível obter endereço IP do Servidor DHCP. Favor verificar o tipo de conexão WAN ou tente novamente.",
			"10000161": 				"Falha na autenticação PPPoE. Favor verificar o nome de usuário e senha.",
			"10000162": 				"Não é impossível conectar ao servidor PPPoE.",

			"10000164": 				"Falha na autenticação PPTP. Favor verificar o nome de usuário e senha.",
			"10000165": 				"Não é possível conectar ao servidor PPTP.",

			"10000167": 				"Falha na autenticação L2TP. Favor verificar o nome de usuário e senha.",
			"10000168": 				"Não é possível conectar ao servidor L2TP.",
			"10000169": 				"Erro desconhecido. Favor tentar novamente.",
			"10000172": 				"Falha de Conexão.",

			"10000185": 				"Erro de Sistema.",	
			"10000186": 				"Erro de arquivo firmware.",	
			"10000187": 				"Erro de download de firmware.",	
			"10000188": 				"Erro de atualização de firmware.",	
			"10000191": 				"Não é possível baixar o arquivo firmware.",
			"10000192": 				"Não é possível atualizar.",
			"10000193": 				"Não é possível conectar ao servidor.",	
			"10000194": 				"Impossível conectar ao servidor cloud. Favor tentar novamente mais tarde.",
			"10000195": 				"Você não pode definir a senha novamente, porque você já a definiu.",
			
			"E3002":                    "Pedido expirado.", 
			"E10000": 					"Erro comum.",
			"E20002": 					"Pedido expirado.",
			"E20003": 					"O servidor nuvem está ocupado. Favor tentar novamente mais tarde.",
			"E20107": 					"Entrada inválida.",
			"E20200": 					"Formato de email inválido.",
			"E20502": 					"Não é possível vincular o dispositivo. Favor tentar novamente mais tarde.",
			"E20503": 					"Não é possível desvincular o dispositivo. Favor tentar novamente mais tarde.",
			"E20506": 					"Falha na operação. O dispositivo já está vinculado a outra conta cloud.",
			"E20507": 					"Este dispositivo está desvinculado da conta.",
			"E20508": 					"O número de vínculos de contas já atingiu o número máximo.",
			"E20509": 					"Usuário de contas não possuem direito de vincular novos usuários.",
			"E20571": 					"O dispositivo está offline.",
			"E20580": 					"Falha na operação. Este dispositivo não está vinculado ao dispositivo.",
			"E20600": 					"Este email não está registrado.",
			"E20601": 					"Nome de usuário ou senha incorretos.",
			"E20602": 					"Esta conta não está ativada ainda.",
			"E20603": 					"Este email já está registrado.",
			"E20604": 					"Nome de usuário inválido. Favor inserir um endereço de email ou número de telefone.",
			"E20606": 					"Não é possível enviar o email de ativação de conta.",
			"E20615": 					"Senha inválida. Favor inserir entre 6 e 32 caracteres ASCII sem espaços.",
			"E20616": 					"Senha inválida. Favor inserir entre 6 e 32 caracteres ASCII sem espaços.",
			"E20617": 					"Esta conta não existe.",
			"E20618": 					"Esta conta não existe.",
			"E20620": 					"Apelido inválido. Por favor, insira entre 6 e 15 caracteres.",
			"E20661": 					"Esta conta será bloqueada por 2 horas devido às tentativas de login excedidas (20 vezes em 30 minutos).",
			"E20662": 					"O dispositivo está bloqueado. Nas próximas 24 horas, o dispositivo não irá responder nenhuma solicitação de verificação de código.",
			"E20671": 					"Não é possível verificar a conta.",
			"E20672": 					"Não é possível verificar a conta. O link de ativação de conta foi expirado. Favor enviar nova solicitação.",
			"E20673": 					"O link de redefinição de senha foi expirado. Favor enviar nova solicitação.",
			"E20674": 					"Não é possível redefinir a senha.",
			"E20675": 					"Esta conta está atualmente logada em outro lugar.",
			"E22000": 					"Entrada inválida.",
			"E22001": 					"O nome de domínio já está registrado.",
			"E22002": 					"O número de nomes de domínio já atingiu o limite.",
			"E22003": 					"O número de nomes de domínio de vínculo já atingiu o limite.",
			"E22004": 					"O nome de domínio já está vinculado a outro dispositivo.",
			"E22006": 					"Erro de sistema. Favor tentar novamente mais tarde.",
			"E22007": 					"O nome de domínio contém palavras não autorizadas. Favor tentar outro.",
			"E22008": 					"O nome de domínio não existe.",

			"E50101": 					"A porta WAN está desplugada.",
			"E50102": 					"Não é possível conectar-se à Internet . Entre em contato com seu provedor de serviços ou tente novamente mais tarde.",
			"E50103": 					"Não é possível obter endereço IP do Servidor DHCP. Favor verificar o tipo de conexão WAN ou tente novamente.",
			"E50111": 					"Falha na autenticação PPPoE. Favor verificar o nome de usuário e senha.",
			"E50112": 					"Não é impossível conectar ao servidor PPPoE.",
			"E50121": 					"Falha na autenticação PPTP. Favor verificar o nome de usuário e senha.",
			"E50122": 					"Não é possível conectar ao servidor PPTP.",
			"E50131": 					"Falha na autenticação L2TP. Favor verificar o nome de usuário e senha.",
			"E50132": 					"Não é possível conectar ao servidor L2TP.",
			"E50140": 					"Erro desconhecido. Favor tentar novamente.",
			"E51215": 					"Pedido expirado Favor verificar sua conexão de Internet e tente novamente mais tarde.",
			"E_CLOUD_SERVER": 			"Erro de servidor. Favor tentar novamente mais tarde.",
			"E5000": 					"Unable to connect to the cloud server.",
			"E5001": 					"Incorrect TP-Link ID (email). Or your device is offline and only the admin (%email) has offline access.",
			"E5002": 					"Incorrect password."
		},

		MENU: {
			STATUS: 					"Ativo",
			NETWORK: 					"Rede",
			NETWORK_MAP: 				"Mapa de Rede",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"Servidor DHCP",
			DYNAMIC_DNS: 				"DNS Dinâmico",
			ADVANCED_ROUTING: 			"Roteamento Avançado",

			WIRELESS: 					"Wireless",
			WIRELESS_SETTINGS: 			"Configurações Wireless",
			WDSBRIDGING: 				"WDs Bridging",
			WPS: 						"WPS",
			MACFILTERING: 				"Filtragem MAC",
			WIRE_STATISTICS: 			"Estatísticas",
			
			
			GUEST_NETWORK: 				"Rede para Convidados",
			WIRELESS_SETTINGS: 			"Configurações Wireless",
			STORAGE_SHARING: 			"Compartilhamento de Armazenamento",
			NAT_FORWARDING: 			"Direcionamento NAT",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Servidores Virtuais",
			PORT_TRIGGERING: 			"Porta de Disparo",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Configurações USB",
			BASIC_SET: 					"Configurações Básicas",
			DISK_SET: 					"Configurações do Dispositivos",
			FOLDER_SHARING: 			"Acesso ao Compartilhamento",
			STORAGE_SHARING: 			"Compartilhamento de Armazenamento",
			FTP_SERVER: 				"Servidor FTP",
			MEDIA_SERVER: 				"Servidor de Mídia",
			PRINT_SERVER: 				"Servidor de Impressora",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Controle dos Pais",
			
			QOS:  						"QoS",
			DATABASE:  					"Base de Dados",

			STREAMBOOST: 				"Modo de Alta Velocidade",
			MAP: 						"Mapa",
			SB_MAP: 					"Mapa",
			SB_BANDWIDTH:  				"Largura de Banda",
			SB_PRIORITY: 				"Prioridade",
			SB_STATISTICS: 				"Estatísticas",

			
			SECURITY: 					"Segurança",
			SETTINGS: 					"Configurações",
			ACCESS_CONTROL: 			"Controle de Acesso",
			IP_MAC_BINDING: 			"Vínculo IP e MAC",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Ferramentas de Sistema",
			TIME_SETTINGS: 				"Ajuste de Horário",
			DIAGNOSTIC: 				"Diagnósticos",
			FIRMWARE_UPGRADE: 			"Atualização de Firmware",
			BACKUP_RESTORE: 			"Salvar e Restaurar",
			ADMINISTRATION: 			"Administração",
			SYSTEM_LOG: 				"Log de Sistema",
			STATISTICS: 				"Estatísticas de Tráfego",
			SYSTEM_PARAMETERS: 			"Parâmetros de Sistema",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"Servidor VPN",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"Conexões VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Região e Fuso Horário",
			INTERNET_CONNECTION_TYPE: 	"Tipo de Conexão de Internet",
			WIRELESS_SETTINGS: 			"Configurações Wireless",
			SUMMARY: 					"Resumo",
			SETUP_COMPLETE: 			"Teste de Conexão de Internet",
			SETUP_COMPLETE_CLOUD: 			"Serviço Cloud da TP-Link ",

			EXIT: 						"Sair",
			NEXT: 						"Próximo",
			SAVE: 						"Salvar",
			FINISH: 					"Finalizar",
			OK: 						"OK",
			NONE: 						"Falha ao detectar.",

			REGION: 					"Região",
			TIME_ZONE: 					"Fuso Horário",

			AUTO_DETECT: 				"Auto Detectar",
			DYNAMIC_IP: 				"IP Dinâmico",
			STATIC_IP: 					"IP Estático",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Caso não tenha certeza sobre o tipo de conexão de Internet que você possui, utilize a função de Auto Detectar ou contate seu provedor para assistência.",

			DYNAMIC_IP_INFO: 			"Caso seu provedor permita acesso à Internet para um específico endereço MAC, você precisará clonar o endereço MAC do computador primário. Caso não tenha certeza, selecione NÃO clonar o endereço MAC.",
			MAC_CLONE_NO: 				"NÃO Clonar Endereço MAC",
			MAC_CLONE_YES: 				"Clonar Endereço MAC do Computador Atual",
			MAC_CLONE_NOTE: 			"Caso selecione Clonar Endereço MAC, você precisará clonar o endereço MAC do computador que está registrado com seu provedor.",

			PPPOE_INFO: 				"Favor inserir o nome de usuário e senha PPPoE.",
			
			STATIC_IP_INFO: 			"Favor inserir informações do seu IP.",

			L2TP_INFO: 					"Favor inserir o nome de usuário e senha L2TP.",
			PPTP_INFO: 					"Favor inserir o nome de usuário e senha PPTP.",
			
			USERNAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			SERVER_IP_ADDRESS_NAME: 	"IP Servidor VPN/Nome de Domínio",
			IP_ADDRESS: 				"Endereço IP",
			SUBNET_MASK: 				"Máscara de Sub-rede",
			DEFAULT_GATEWAY: 			"Gateway Padrão",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DNS Secundário",
			OPTIONAL: 					"(Opcional)",
			
			ON: 						"Ligado",
			OFF: 						"Desligado",
			WIRELESS_24GHZ: 			"Wireless 2.4GHz",
			WIRELESS_5GHZ: 				"Wireless 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Habilitar Rádio Wireless",
			NAME_SSID: 					"Nome de Rede (SSID)",

			SUMMARY_INFO1: 				"Você precisa reconectar seus dispositivos wireless à nova rede wireless antes de clicar no botão <strong>Próximo</strong>.",
			SUMMARY_INFO2: 				"Seu nome e senha wireless foram modificados como abaixo:",
			SUMMARY_INFO3: 				"Garanta que esteja conectado à nova rede wireless.",

			WIRELESS_24GHZ_SSID: 		"SSID 2.4GHz Wireless",
			WIRELESS_24GHZ_PASSWORD: 	"Senha 2.4GHz Wireless",
			WIRELESS_5GHZ_SSID: 		"SSID 5GHz Wireless",
			WIRELESS_5GHZ_PASSWORD: 	"Senha 5GHz Wireless",

			SORRY: 						"Falhou.",
			SUCCESS: 					"Concluído com Sucesso.",
			TEST_INTERNET_SUCCESS_INFO: "Clique",

			TEST_INTERNET_FAILED_INFO_0:"Verifique se todos os parâmetros da Configuração Rápida estão corretos e tente novamente. Caso os parâmetros da Configuração Rápida estiverem corretos, favor reiniciar seu modem, aguardar 2 minutos e clique em Teste de Conexão de Internet mais uma vez. Caso esteja utilizando um modem, você pode precisar contatar seu provedor para assistência.",
			TEST_INTERNET_FAILED_INFO_1: "Oops... The Internet connection is not set up successfully.<br />1. Make sure all cables are properly connected.<br />2. Click Back and verify that the Internet connection information is correct.<br />3. Contact our Technical Support if the problem still exists.",
			SUMMARY_INFO4: 				"Desculpe. Detectamos que você não reconectou seu dispositivo wireless à nova rede Wi-Fi. Favor reconectar e clicar em <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Parabéns!",
			COMPLETE_INFO_0: 			"Você completou o processo de Configuração Rápida.",
			COMPLETE_INFO_1:			"Clique abaixo em Teste de Conexão de Internet, clique então em Finalizar.",
			COMPLETE_INFO_2: 			"You are not logged into your TP-Link ID. You can log in later from Basic > TP-Link Cloud.",
			TEST_INTERNET: 				"Teste de Conexão de Internet",

			
			RESET_USER_TITLE: 			"Crie um novo nome de usuário e senha",
			NEW_USERNAME: 				"Novo Nome de Usuário",
			NEW_PASSWORD: 				"Nova Senha",
			CONFIRM_PASSWORD: 			"Confirmar Nova Senha",
			
			NO_ACCOUNT: 				"No TP-Link ID?",
			REGISTER_NOW: 				"Registre-se Agora",
			REGISTER_SKIP: 				"Fazer Login Mais Tarde",
			LOGIN: 						"Login",
			REGISTER_NEW:				"Registrar uma nova conta",
			COMPLETE_INFO_EMAIL_PREFIX: "Your TP-Link ID is:",
			COMPLETE_INFO_EMAIL_SUFFIX: "É altamente recomendável que você faça o login utilizando essa conta para fácil gerenciamento de dispositivo e mais funções TP -Link Cloud.",

			INTERNET_OK: 				"Parabéns! Configuração de rede feita com sucesso. Aproveite a Internet.",
			CLOUD_WIZARD: 				"For more TP-Link Cloud functions, please log in with your <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "With a TP-Link ID, you can:", 
			ACCOUNT_DESP_SUB1:          "Acesse seu dispositivo e servidores locais (FTP, HTTP, etc.) de qualquer lugar via Internet",
			ACCOUNT_DESP_SUB2:          "Mantenha a firmware sempre atualizada com a função de Atualização Online",
	        ACCOUNT_DESP_SUB3:          "Gerencie múltiplos dispositivos com apenas uma conta",
			
			CONFIRM: 					"Confirmar"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Status da Internet",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Tipo de Conexão",
			SECONDARY_CONN: 			"Conexão Secundária",

			POOR_CONNECTED: 			"Rede fraca.",
			UNPLUGGED: 					"A porta WAN está desplugada.",
			
			CONNECTED: 					"Conectado",
			DISCONNECTED: 				"Desconectado",

			INTERNET_IP_ADDR: 			"Endereço IP",
			
			IP_ADDR: 					"Endereço IP",
			MAC_ADDR: 					"Endereço MAC",
			GATEWAY: 					"Gateway",

			AUTO: 						"Automático",
			
			ROUTER: 					"Roteador",
			WIRELESS_CLIENTS: 			"Clientes Wireless",
			HOST_CLIENTS: 				"Clientes Host",
			GUEST_CLIENTS: 				"Clientes Convidados",
			WIRE_CLIENTS: 				"Clientes Cabeados",
			PRINTER: 					"Impressora",
			USB_DISK: 					"Disco USB",
			WIRELESS: 					"Wireless",
			NAME: 						"Nome",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Canal",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Wireless 2.4GHz",
			WIRELESS_5GHZ: 				"Wireless 5GHz",
			
			GUEST_24GHZ: 				"Rede Local 2.4GHz",
			GUEST_5GHZ: 				"Rede Local 5GHz",
			
			STATUS: 					"Ativo",
			TOTAL: 						"Total",
			AVAILABLE: 					"Disponível",
			GB: 						"GB",
			BRAND: 						"Marca",

			DYNAMIC_IP: 				"IP Dinâmico",
			STATIC_IP: 					"IP Estático",
			SUBNET_MASK: 				"Máscara de Sub-rede",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Cabo BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Túnel 6para4",
			NONE: 						"Nenhum"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Auto Detectar",
			INTERNET_CONN_TYPE: 		"Tipo de Conexão de Internet",
			DYNAMIC_IP: 				"IP Dinâmico",
			STATIC_IP: 					"IP Estático",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"Cabo BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"A porta WAN está desplugada.",
			NONE: 						"Nenhum",
			DETECT_FAIL: 				"Falho ao Auto Detectar.",
			SECONDARY_CONN: 			"Conexão Secundária",

			DYNAMIC_YES: 				"NÃO Clonar Endereço MAC",
			DYNAMIC_NO: 				"Clonar Endereço MAC do Computador Atual",
			
			IP_ADDR: 					"Endereço IP",
			SUBNET_MASK: 				"Máscara de Sub-rede",
			DEFAULT_GATEWAY: 			"Gateway Padrão",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DNS Secundário",
			OPTIONAL: 					"(Opcional)",
			USER_NAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			SERVER_IP_ADDR_NAME: 		"IP Servidor VPN/Nome de Domínio",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Caso não tenha certeza sobre o tipo de conexão de Internet que você possui, utilize a função de Auto Detectar ou contate seu provedor para assistência."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Configurações Wireless",
			MODE_2G: 					"Wireless 2.4GHz",
			MODE_5G: 					"Wireless 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nome de Rede (SSID)",
			WIRELESS_PASSWORD: 			"Senha",
			ENABLE_WIRELESS: 			"Habilitar Rádio Wireless",
			SAVE: 						"Salvar",
			ENCRYPTION_2G_NOTICE:		" A criptografia da rede 2.4GHz é de%s.",
			ENCRYPTION_5G_NOTICE:		" A criptografia da rede 5GHz é de%s.",
			ENCRYPTION_2G_NO: 			"A rede wireless de 2.4GHz não está criptografada.",
			ENCRYPTION_5G_NO: 			"A rede wireless de 5GHz não está criptografada.",
			ENCRYPTION_SURE: 			"Tem certeza de que quer continuar?",

			HIDE_SSID: 					"Ocultar SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Configurações Básicas",
			TITIL_NEW:					"Disco e Conta",
			DISK_SET:					"Configurações do Dispositivos",

			SELFLY_REMOVE:				"Remover com Segurança",
			SCANING:					"Buscando...",
			SCAN_RESULT:				"Encontrados %n discos",
			
			DISKS:						"Discos",
			USERS: 						"Contas de Usuários",
			DEVICENAME: 				"Nome do Dispositivo",
			VOLUMN: 					"Volume",

			USBSPACE: 					"Espaço Utilizado",
			FREESPACE: 					"Espaço Livre",
			STATUS: 					"Ativo",
			INACT: 						"Inativo",
			USAGE: 						"Uso",
			CAPACITY: 					"Capacidade",
			OPERATION: 					"Operação",
			
			ACC: 						"Gerenciamento de Conta",
			USERNAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			USE_LOGIN: 					"Utilizar Login de usuário",
			SCAN: 						"Buscar",
			ENJECT_ALL: 				"Ejetar Todos",
			ENJECT: 					"Ejetar",
			ADD_USER: 					"Adicionar Usuário",
			AUTH: 						"Autorização",


			LOCATION: 					"Localização",
			MOBILE_ISP: 				"ISP Móvel",
			DIAL_NUMBER: 				"Número de Discagem",
			APN: 						"APN",
			USERNAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			MTU_SIZE: 					"Tamanho MTU (em bytes)",
			OPTIONAL: 					"(Opcional)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Controle dos Pais",

			DEVICE_CTR: 				"Dispositivos Sob Controle dos Pais",
			ID: 						"ID",
			DEVICE: 					"Nome do Dispositivo",
			MAC_ADDRESS: 				"Endereço MAC",
			TIME: 						"Tempo de Acesso à Internet",
			DESCRIPTION: 				"Descrição",
			ENABLE: 					"Habilitar Esta Entrada",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",
			OPTIONAL: 					"(Opcional)",
			BTN_VIEW: 					"Visualizar Dispositivos Existentes",
			ACCESS_DEVICES_LIST: 		"Lista de Dispositivos",
			OPT: 						"Operação",
			STATUS: 					"Ativo"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Rede para Convidados",
			MODE_2G: 					"Wireless 2.4GHz",
			MODE_5G: 					"Wireless 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nome de Rede (SSID)",
			WIRELESS_PASSWORD: 			"Senha",
			ENABLE_WIRELESS: 			"Habilitar Rede para Convidados",
			SAVE:						"Salvar",
			HIDE_SSID: 					"Ocultar SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Conta Cloud",
			OFFLINE_NOTE_TITLE: 		"Dispositivo Offline",
			LOGIN_NOTE_TITLE: 			"Opa...",
			LOGIN_OFFLINE_NOTE: 		"O dispositivo está offline. Por favor verifique a WAN e configuração de rede para garantir se as configurações apropriadas foram digitadas corretamente.",

			EMAIL: 						"Email",
			PASSWORD: 					"Senha",
			FORGET_PASSWORD: 			"Esqueceu a Senha?",

			CLOUD_WIZARD: 				"For more TP-Link Cloud functions, please log in with your <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"No TP-Link ID?",
			REGISTER_NOW: 				"Registre-se Agora"
		},
		STATUS: {
			TITLE: 						"Ativo",
			INTERNET:					"Internet",
			WIRELESS:					"Wireless",
			LAN:						"LAN",
			USB_TITLE:					"Dispositivos USB",
			PERFORMANCE: 				"Desempenho",
			GUEST_NETWORK: 				"Rede para Convidados",
			ACCESS_DEVICES: 			"Dispositivos de Acesso",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Tipo de Conexão",

			MAC_ADDRESS: 				"Endereço MAC",
			IP_ADDRESS: 				"Endereço IP",
			RELEASE: 					"Liberar",
			RENEW: 						"Renovar",
			
			DYNAMIC_IP: 				"IP Dinâmico",
			STATIC_IP: 					"IP Estático",
			SUBNET_MASK: 				"Máscara de Sub-rede",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Cabo BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Túnel 6para4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Passagem (Bridge)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Nenhum",
			
			DEFAULT_GATEWAY: 			"Gateway Padrão",
			DNS: 						"Servidor DNS",
			MAC: 						"Endereço MAC",
			WDS_STATUS: 				"Endereço MAC",
			
			IPV6_ADDRESS: 				"Endereço IP",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DNS Secundário",

			RADIO: 						"Rádio Wireless",

			NAME_SSID: 					"Nome (SSID)",
			NETWORK_NAME_SSID:			"Nome de Rede (SSID)",
			HIDE_SSID: 					"Ocultar SSID",
			MODE: 						"Modo",
			CHANNEL: 					"Canal",
			CHANNEL_WIDTH: 				"Largura do Canal",
			AUTO: 						"Automático",
			CURRENT_CHANNEL: 			"Canal Atual",

			WDS: 						"Endereço MAC",
			WIRED_CLIENTS: 				"Clientes Cabeados",
			WIRELESS_CLIENTS: 			"Clientes Wireless",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Endereço de Link-local",
			ASSIGN_TYPE: 				"Tipo Atribuído",

			ALLOW_TO_SEE_EACH: 			"Permitir convidados ver uns aos outros",

			TOTAL: 						"Total:",
			AVAILABLE: 					"Disponível:",

			USB: 						"Disco USB",
			PRINTER: 					"Impressora",

			CPU_LOAD: 					"Carga da CPU",
			MEMORY_USAGE: 				"Uso da Memória",

			IP_ADDR_P: 					"Endereço IP:",
			MAC_ADDR_P: 				"Endereço MAC:",
			CONN_TYPE_P: 				"Tipo de Conexão:",

			DISABLED: 					"Desabilitado",
			INIT: 						"Inicializar",
			SCAN: 						"Buscar",
			AUTH: 						"Autenticar",
			ASSOC: 						"Associar",
			RUN: 						"Iniciar",
			HOST: 						"Host",
			GUEST: 						"Convidado",

			ON: 						"Ligado",
			OFF: 						"Desligado"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Tipo de Conexão de Internet",
			INTERNET_MAC_ADDRESS: 		"Endereço MAC",
			
			CONNECT: 					"Conectar",
			DISCONNECT: 				"Desconectar",
			
			IP_ADDR: 					"Endereço IP",
			
			USE_DEFAULT_MAC: 			"Utilizar Endereço MAC Padrão",
			USE_COMPUTER_MAC: 			"Utilizar Endereço MAC do Computador Atual",
			USE_CUSTOM_MAC: 			"Utilizar Endereço MAC Personalizado",
			MAC_CLONE: 					"Clone de MAC",
			
			CONFIG: 					"Configurar",
			
			IP_ADDRESS: 				"Endereço IP",
			SUBNET_MASK: 				"Máscara de Sub-rede",
			DEFAULT_GATEWAY: 			"Gateway Padrão",
			
			MANUAL_DNS: 				"DNS Manual",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DNS Secundário",
			
			RENEW: 						"Renovar",
			RELEASE: 					"Liberar",
			VIEW_MODE: 					"Modo de Visualização",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Obter dinamicamente da operadora",
			USE_FOLLOW_IP_ADDR: 		"Utilizar o seguinte Endereço IP",
			USE_FOLLOW_DNS_ADDR: 		"Utilizar o seguinte Endereço DNS",
			USE_FOLLOW_DNS_SERVER: 		"Utilize o seguinte do Servidor DNS",
			
			BASIC: 						"Básico",
			ADVANCED: 					"Avançado",
			
			DNS_ADDR_MODE: 				"Endereço DNS",
			MTU_SIZE: 					"Tamanho MTU",
			MTU_1500: 					"bytes. (O padrão é 1500, não alterar a menos que necessário.)",
			MTU_1480: 					"bytes. (O padrão é 1480, não alterar a menos que necessário.)",
			MTU_1460: 					"bytes. (O padrão é 1460, não alterar a menos que necessário.)",
			MTU_1420: 					"bytes. (O padrão é 1420, não alterar a menos que necessário.)",
			
			HOST_NAME: 					"Nome Host",

			HOST_NAME_CONFIRM: 			"O nome host contém caracteres não autorizados que podem causar comportamento de sistema inesperado. Tem certeza de que quer continuar?",

			GET_IP_WITH_UNICAST_DHCP: 	"Obtenha IP utilizando DHCP Unicast (Normalmente não é necessário.)",
			OPTIONAL: 					"(Opcional)",
			
			STATIC_IP: 					"IP Estático",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			
			INTERNET_IP_ADDR: 			"Endereço IP",
			INTERNET_DNS: 				"DNS Internet",
			SECONDARY_CONN: 			"Conexão Secundária",
			NONE: 						"Nenhum",
			INTERNET_PRIMARY_DNS:		"DNS Primário",
			INTERNET_SECONDARY_DNS: 	"DNS Secundário",
			
			DYNAMIC_IP: 				"IP Dinâmico",
			DYNAMIC_IP_v6: 				"IP Dinâmico (SLAAC/DHCPv6)",
			STATIC_IP: 					"IP Estático",
			SERVICE_NAME: 				"Nome de Serviço",
			ACCESS_CONCENTRATOR_NAME:  	"Nome de Concentrador de Acesso",
			DETECT_ONLINE_INTERVAL: 	"Detecção de Intervalo Online",
			INTERVAL_TIPS: 				"segundos. (0-120. O padrão é 10.)",
			IP_ADDR_MODE:  				"Endereço IP",
			CONN_MODE: 					"Modo de Conexão",
			DHCP_LINK_UNPLUGGED: 		"A porta WAN está desplugada.",
			
			AUTO: 						"Automático",
			ON_DEMAND: 					"Sob Demanda",
			TIME_BASED: 				"Por Tempo",
			MANUALLY: 					"Manualmente",
			MAX_IDLE_TIME: 				"Tempo Máximo Ocioso",
			MAX_IDLE_TIME_TIPS: 		"minutos. (0 significa sempre ativo.)",
			PERIOD_OF_TIME: 			"Período",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"Cabo BigPond",
			AUTH_SERVER: 				"Autenticação. Servidor",
			AUTH_DOMAIN: 				"Autenticação. Domínio",
			L2TP: 						"L2TP",
			GATEWAY: 					"Gateway",
			SERVER_IP_ADDR_NAME: 		"IP Servidor VPN/Nome de Domínio",
			PPTP: 						"PPTP",
			TO: 						"para",
			
			TUNNEL_6TO4: 				"Túnel 6para4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Obter Endereço IPv6 não-temporário",
			GET_PREFIX_DELEGATION: 		"Obter delegação de prefixo IPv6",
			IPV6_ADDR: 					"Endereço IPv6",

			GET_IPV6_WAY: 				"Obter Endereço IPv6",
			AUTOMATICALLY: 				"Obter Automaticamente",
			SPECIFIED_BY_ISP: 			"Especificado pelo provedor",

			IPV6_ADDR_PREFIX: 			"Prefixo de Endereço IPv6",
			NONE_TEMPORARY: 			"Não-temporário",

			PREFIX_DELEGATION: 			"Delegação de Prefixo",
			ENABLE: 					"Habilitar",
			DISABLE: 					"Desabilitar",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Tamanho de Máscara IPv4",
			CONFIG_TYPE: 				"Tipo de Configuração",
			RD6_PREFIX: 				"Prefixo 6RD",
			RD6_PREFIX_LENGTH: 			"Tamanho de Prefixo 6RD",
			REPLY_IPV4_ADDR: 			"Endereço IPv4 de Resposta de Border ",
			MANUAL: 					"Manual",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Passagem (Bridge)",
			LOCAL_IPV6: 				"Endereço IPv6 Local",
			PEER_IPV6: 					"Endereço IPv6 do Peer",
			TUNNEL_ADDR: 				"Endereço de Túnel",
			IPV4_NETMASK: 				"Máscara de Rede IPv4",
			CUSTOM: 					"Personalizado",
		    AFTR_NAME: 					"Nome AFTR",
			PPP_SHARE_V6:				"O PPPoE está na mesma sessão que a conexão IPv4.",
			PPP_SHARE_V4:				"O PPPoE está na mesma sessão que a conexão IPv6.",

			
			
			IPV4_ADDR: 					"Endereço IPv4",
			IPV4_MASK: 					"Máscara de Sub-rede IPv4",
			IPV4_GATEWAY: 				"Gateway Padrão IPv4",
			TUNNEL_ADDR: 				"Endereço de Túnel",

			DUPLEX: 					"Duplex",
			AUTO_NEGOTIATION: 			"Auto-negociação",
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
			SUBNET_MASK: 				"Máscara de Sub-rede",
			CUSTOM: 					"Personalizado",

			IGMP: 						"Habilitar IGMP Proxy",
			

			ASSIGNED_TYPE: 				"Tipo Atribuído",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+DHCP Stateless",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Prefixo de Endereço",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Endereço",
			DELEFATED: 					"Delegado",
			STATIC: 					"Estático",
			SITE_PREFIX: 				"Prefixo de Site",
			SITE_PREFIX_LEN: 			"Tamanho do Prefixo de Sitex",

			PREFIX_TYPE:  				"Tipo de Configuração de Prefixo de Site",
			LAN_IPV6_ADDR:  			"Endereço IPV6 LAN",

			RELEASE_TIME: 				"Tempo de Liberação",
			RELEASE_TIME_TIP: 			"segundos. (O padrão é 86400, não altere a menos que seja necessário.)",
			ADDRESS:					"Endereço",
			SAVE: 						"Salvar",

			REBOOT_TIP: 				"O roteador está pulando para a nova página de Login. <br/>Favor aguardar..."

		},

		IPTV:{
			TITLE: 						"Configurações",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Habilitar IPTV", 
			MODE:  						"Modo",
			IGMP_PROXY: 				"IGMP Proxy",
			IGMP_VERSION: 				"Versão IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Ponte",
			BASIC: 						"Personalizado",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Rússia",
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
			IP_PHONE: 					"IP-Phone", 

			Q_TAG: 						"Tag 802.1Q ",
			ENABLE: 					"Habilitar",
			
			INTERNET_VLAN_ID: 			"ID VLAN de Internet",
			INTERNET_VLAN_PRIORITY: 	"Prioridade VLAN de Internet",
			IP_PHONE_VLAN_ID: 			"ID VLAN IP-Phone",
			IP_PHONE_VLAN_PRIORITY: 	"Prioridade VLAN IP-Phone",
			IPTV_VLAN_ID: 				"ID VLAN IPTV",
			IPTV_VLAN_PRIORITY: 		"Prioridade VLAN IPTV",
			IPTV_MULTI_VLAN_ID: 		"ID VLAN Multicast IPTV",
			IPTV_MULTI_VLAN_PRIORITY: 	"Prioridade VLAN Multicast IPTV"
		},

		DHCP_SERVER: {
			TITLE: 						"Servidor DHCP",
			
			SETTINGS: 					"Configurações",

			DHCP_SERVER: 				"Servidor DHCP",
			ENABLE_DHCP_SERVER: 		"Habilitar Servidor DHCP",

			IP_ADDR_POOL: 				"Pool Address IP",
			LEASETIME: 					"Tempo de Concessão de Endereço",
			LEASENOTE: 					"minutos. (2-2880. O valor padrão é de 120.)",
			
			GATEWAY: 					"Gateway Padrão",
			DOMAIN: 					"Domínio Padrão",
			PRIMARYDNS: 				"DNS Primário",
			SECONDARYDNS: 				"DNS Secundário",

			OPTIONAL: 					"(Opcional)",

			CLIENTSLIST: 				"Lista de Clientes DHCP",
			CLIENT_NUMBER: 				"Total de Clientes",
			CLIENT_NAME: 				"Nome do Cliente",
			MAC_ADDR: 					"Endereço MAC",
			ASSIGNED_IP: 				"Endereço IP Atribuído",
			LEASE_TIME: 				"Tempo de Concessão",

			RESERVATION: 				"Reserva de Endereço",

			RESERVED_IP: 				"Endereço IP Reservado",
			IP_ADDRESS: 				"Endereço IP",
			DESCRIPTION: 				"Descrição",

			CLIENTSLIST: 				"Lista de Clientes DHCP",
			CLIENT_NUMBER: 				"Total de Clientes",

			ENABLE: 					"Habilitar Esta Entrada",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada"
			
		},

		DDNS: {
			DDNS: 						"DNS Dinâmico",
			SERVICEPROVIDER: 			"Provedor de Serviço",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"DynDNS",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Vá para registro...",
			USERNAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			DOMAIN_NAME_LIST: 			"Lista de Nome de Domínio",
			DOMAIN_NAME: 				"Nome de Domínio",
			LOGIN: 						"Entrar",
			LOGIN_SAVE: 				"Login e Salvar", 
			LOGOUT: 					"Sair",
			STATU_SUCCESS:				"Concluído com Sucesso.",
			UPDATE_INTERVAL:			"Intervalo de Atualização",
			ONE_HOUR:					"1 hora",
			SIX_HOUR:					"6 horas",
			TWETEEN_HOUR:				"12 horas",
			ONE_DAY:					"1 dia",
			TWO_DAY:					"2 dias",
			THREE_DAY:					"3 dias",
			NEVER:						"Nunca",
			UPDATE:						"Atualizar",
			STATU_INCORRENT:			"Nome de usuário ou senha incorretos.",
			STATU_ERR_DOMAIN:			"Erro de nome de domínio.",
			WAN_IP_BIND: 				"Vínculo IP WAN",
			CURRENT_DOMAIN: 			"Nome de Domínio Atual",
			REGISTER: 					"Registrar",
			BIND: 						"Vincular",
			UNBIND: 					"Desvincular",
			TITLE: 						"DDNS Não disponível.",
			CONTENT: 					"To use our superior TP-Link DDNS service, please <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">Log in</a> with your TP-Link ID, or choose another service provider.",
			STATU_NO_LAUNCH:			"Not launching",
			STATU_FAIL_DDNS: 			"Falha na atualização DDNS.",
			STATU_FAIL_NOIP: 			"Falha na atualização NO-IP.",
			DISABLE: 					"Desabilitar",
			ENABLE: 					"Habilitar",	
			STATU_NO_LAUNCH:			"Falha na atualização DDNS.",
			STATU_CONN:					"Conectando",
			WAN_IP_BIND: 				"Vínculo IP WAN",
			TIME: 						"Data Registrada",
			BOUND: 						"Vinculo",
			FREE: 						"Gratuito",
			SORRY: 						"Falhou.",
			UNBIND_NOTE:          		"Se você deseja vincular um %domain% para o seu dispositivo, favor desvincular o nome de domínio atual primeiro."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Roteamento Avançado",
			STATIC_ROUTING: 			"Roteamento Estático",

			DESTINATION_NETWORK:		"Destino de Rede",
			SUBNET_MASK: 				"Máscara de Sub-rede",
			DEFAULT_GATEWAY: 			"Gateway Padrão",
			DESCRIPTION: 				"Descrição",
			
			SYSTEM_ROUTING_TABLE: 		"Tabela de Roteamento de Sistema",
			CLIENT_NUMBER: 				"Número de Rotas Ativas",

			GATEWAY: 					"Gateway",
			INTERFACE: 					"Interface",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Habilitar Esta Entrada",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Configurações de Região",
			NOT_SUPPORT_5G: 			"A região suporta somente 2.4GHz. Certifique-se de que você selecionou sua região correta.",

			REGION: 					"Região",
			NOTICE:  					"Para utilizar a função wireless, você deve manter a chave wireless do equipamento ligada.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Configurações Wireless",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Habilitar Rádio Wireless",

			WIRELESS_NETWORK_NAME: 		"Nome de Rede (SSID)",
			WIRELESS_PASSWORD: 			"Senha",
			HIDE_SSID: 					"Ocultar SSID",

			SECURITY: 					"Segurança",
			NO_SECURITY: 				"Sem Segurança",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Pessoal (Recomendado)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2-Empresarial",
			WEP: 						"WEP",

			VERSION: 					"Versão",

			AUTO: 						"Automático",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Criptografia",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Modo",
			MODE_B:  					"Somente 802.11b",
			MODE_G:  					"Somente 802.11g",
			MODE_N:  					"Somente 802.11n",
			MODE_BG:  					"802.11b/g misto",
			MODE_GN: 					"802.11g/n misto",
			MODE_BGN:  					"802.11b/g/n misto",

			MODE_A_5: 					"Somente 802.11a",
			MODE_AN_5: 					"802.11a/n misto",
			MODE_N_5: 					"Somente 802.11n",
			MODE_AC_5:					"Somente 802.11ac",
			MODE_NAC_5:					"802.11n/ac misto",
			MODE_ANAC_5:				"802.11a/n/ac",


			CHANNEL_WIDTH: 				"Largura do Canal",
			CHANNEL: 					"Canal",

			TRANSMIT_POWER: 			"Poder de Transmissão",

			RADIUS_SERVER_IP: 			"IP Servidor RADIUS",
			RADIUS_PORT: 				"Porta RADIUS",
			RADIUS_PASSWORD: 			"Senha RADIUS",

			TYPE: 						"Tipo",
			OPEN_SYSTEM: 				"Sistema Aberto",
			SHARED_KEY: 				"Chave de Compartilhamento",

			KEY_SELECTED: 				"Chave Selecionada",
			KEY1: 						"Chave1",
			KEY2: 						"Chave2",
			KEY3: 						"Chave3",
			KEY4: 						"Chave4",

			WEP_KEY_FORMAT: 			"Formato de Chave WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimal",

			KEY_TYPE: 					"Tipo de Chave",
			BIT64: 						"64-bit",
			BIT128: 					"128-bit",
			BIT152: 					"152-bit",

			KEY_VALUE: 					"Valor de Chave",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Baixa",
			MIDDLE: 					"Média",
			HIGH: 						"Alta"
		},

		WPS: {

			TITLE2: 					"PIN do Roteador",
			ROUTERS_PIN_INFO: 			"Clientes wireless podem conectar ao roteador utilizando o método PIN WPS.",
			ENABLE_ROUTE_PIN: 			"PIN do Roteador",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Gerar",
			DFT: 						"Padrão",

			TITLE: 						"Wizard WPS",
			SELECT_SETUP: 				"Selecione um método de conexão WPS",
			PUSH_BTN: 					"Pressione o Botão (Recomendado)",
			PUSH_DES: 					"Pressione o botão WPS físico no roteador ou clique no software Connect abaixo.",
			CONNECT: 					"Conectar",
			CANCEL: 					"Cancelar",

			RESULT_HEAD: 				"O cliente wireless",
			RESULT_END: 				"foi adicionado à rede com sucesso.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Não Encontrado",
			ENTER_CLIENT_PIN: 			"Insira o PIN do cliente",
			SWITCH_NOTE:				"Para conectar utilizando WPS, favor habilitar a função wireless.",
			SWITCH_NOTE2:				"Para utilizar o Assistente WPS, você deve antes configurar os parâmetros wireless corretos.",
			STATUS_PIN_ERROR: 			"PIN WPS Inválido. Favor verificar e tentar novamente.",
			STATUS_ERROR: 				"Erro.",
			STATUS_CONN_ERROR: 			"Falha de Conexão.",
			STATUS_CONNING: 			"Conectando...",
			STATUS_CANCEL: 				"Conexão cancelada.",
			
			NOTE: 						"Nota",
			
			STATUS_CONN_OVERLAP: 		"Falha de Conexão (Overlap/Sobreposição)",
			STATUS_CONN_TIMEOUT: 		"Falha de Conexão (Tempo Esgotado).",
			STATUS_CONN_INACT: 			"Conexão Inativa."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Estações Wireless Online",
			CLIENT_NUMBER: 				"Total de Clientes",
			MAC_ADDRESS: 				"Endereço MAC",
			CONN_TYPE: 					"Tipo de Conexão",
			SECURITY: 					"Segurança",
			RECEIVED_PACKETS: 			"Pacotes Recebidos",
			SEND_PACKETS: 				"Enviar Pacotes"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Configurações",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Permitir convidados ver uns aos outros",
			
			ALLOW_LOCAL: 				"Permitir convidados acessarem minha rede local",
			
			WIRELESS: 					"Wireless",
			WIRELESS_24G_RADIO: 		"Wireless 2.4GHz",
			WIRELESS_5G_RADIO: 			"Wireless 5GHz",
			ENABLE_GUEST: 				"Habilitar Rede para Convidados",

			NAME_SSID: 					"Nome de Rede (SSID)",
			HIDE_SSID: 					"Ocultar SSID",

			SECURITY: 					"Segurança",
			NO_SECURITY: 				"Sem Segurança",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Pessoal",

			VERSION: 					"Versão",
			AUTO: 						"Automático",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Criptografia",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Senha"
		},

		NAT:{
			SETTINGS: 					"Hardware NAT",
			STATUS: 					"Hardware NAT",
			
			ALG_TITLE: 					"Gateway de Aplicação de Camada (ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"Passagem PPTP",
			L2TP_ALG: 					"Passagem L2TP",
			IPSEC_ALG: 					"Passagem IPSec",

			ENABLE_FTP_ALG: 			"Habilitar FTP ALG",
			ENABLE_TFTP_ALG: 			"Habilitar TFTP ALG",
			ENABLE_H323_ALG: 			"Habilitar ALG H323",
			ENABLE_RTSP_ALG: 			"Habilitar RTSP ALG",
			ENABLE_PPTP_ALG: 			"Habilitar Passagem PPTP",
			ENABLE_L2TP_ALG: 			"Habilitar Passagem L2TP",
			ENABLE_IPSEC_ALG: 			"Habilitar Passagem IPSec",
			NAT_ENABLE_NOTICE: 			"Nota: Suas configurações não terão efeito até que a função NAT seja habilitada."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Servidores Virtuais",

			SERVICE_NAME: 				"Tipo de Serviço",
			EXTERNAL_PORT: 				"Porta Externa",
			INTERNAL_IP: 				"IP Interno",
			INTERNAL_PORT: 				"Porta Interna",
			PROTOCAL: 					"Protocolo",

			BTN_VIEW: 					"Visualizar Serviços Existentes",

			EXSITTING_SERVICE: 			"Serviços Existentes",
			
			PROTOCAL_ALL: 				"TODOS",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX ou XX)",
			EXT_PORT_TIPS: 				"(XX ou XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX ou Em Branco ,1-65535)",

			NOTICE:						"Em conflito com a porta de gerenciamento remoto. Tem certeza de que quer continuar?",

			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",
			OPERATION: 					"Operação",
			CHOOSE: 					"Escolher",
			NAT_ENABLE_NOTICE: 			"Nota: Suas configurações não terão efeito até que a função NAT seja habilitada."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Porta de Disparo",
			APPLICATION: 				"Aplicação",
			TRIGGER_PORT: 				"Porta de Disparo",
			TRIGGER_PROTOCOL: 			"Protocolo de Disparo",

			EXTERNAL_PORTS: 			"Porta Externa",
			EXTERNAL_PROTOCOL: 			"Protocolo Externo",

			BTN_VIEW: 					"Visualizar Aplicações Existentes",

			EXSITTING_APPLICATION: 		"Aplicações Existentes",
			APPLICATION_NAME: 			"Nome da aplicação",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX oou XX-XX,1-65535,na maioria dos 5 pares)",
			
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",
			OPERATION: 					"Operação",
			
			PROTOCAL_ALL: 				"TODOS",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Nota: Suas configurações não terão efeito até que a função NAT seja habilitada."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Habilitar DMZ",
			HARDWARESTATUS: 			"Endereço IP Host DMZ",
			NAT_ENABLE_NOTICE: 			"Nota: Suas configurações não terão efeito até que a função NAT seja habilitada."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Lista de Serviços UPnP",
			CLIENT_NUMBER: 				"Total de Clientes",
			SERVICE: 					"Descrição do Serviço",
			EXTERNAL_PORT: 				"Porta Externa",
			PROTOCAL: 					"Protocolo",
			IP_ADDR: 					"Endereço IP Interno",
			INTERNAL_PORT: 				"Porta Interna",
			NAT_ENABLE_NOTICE: 			"Nota: Suas configurações não terão efeito até que a função NAT seja habilitada."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"Modem USB 3G/4G",
			LOCATION: 					"Região",
			MOBILE_ISP: 				"ISP Móvel",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Modo de Conexão",
			CONNECT_ON_DEMAND: 			"Conexão Sob Demanda",
			CONNECT_AUTOMATICALLY: 		"Conectar automaticamente",
			CONNECT_MANUALLY: 			"Conectar Manualmente",
			MAX_IDLE_TIME: 				"Tempo Máximo Ocioso",
			CONNECTION_TIP: 			"A conexão de Internet atual é WAN (de preferência)",
			IDLE_TIME_TIP: 				"O Modo de Conexão e o Tempo Máximo Ocioso são ajustados manualmente.",
			MINUTES: 					"minutos. (0 significa que a conexão está sempre ligada)",

			AUTHENTICATION_TYPE: 		"Tipo de Autenticação",
			AUTO: 						"Automático",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"O padrão é Auto. Não altere a menos que seja necessário.",

			CONNECT: 					"Conectar",
			DISCONNECT: 				"Desconectar",

			SET_TIP: 					"Ajuste o Número de Discagem, APN, Nome do Usuário e Senha manualmente.",
			DIAL_NUMBER: 				"Número de Discagem",
			APN: 						"APN",
			USERNAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			OPTIONAL: 					"(Opcional)",
			MTU_SIZE: 					"Tamanho MTU (em bytes)",
			MTU_SIZE_TIP: 				"O padrão é 1480. Não altere a menos que seja necessário.",

			USE_FOLLOW_DNS_SERVER: 		"Utilize o servidor DNS seguinte",
			PRIMARY_DNS: 				"DNS Primário",
			SECOND_DNS: 				"DNS Secundário",

			UNPLUGGED: 					"Nenhum modem USB conectado",
			IDENTIFYING: 				"Identificando",
			IDENTIFY_SUCCESS: 			"Identificado com sucesso"
		},

		DISK_SETTING: {
			DISK_SET: 					"Configurações do Dispositivos",
			SCAN: 						"Buscar",
			SELFLY_REMOVE: 				"Remover com Segurança",
			SCAN_RESULT: 				"Encontrados %n discos",
			NOT_FOUND: 					"Não Encontrado",
			SELFLY_REMOVE: 				"Remover com Segurança",
			
			VOLUMN: 					"Volume",
			CAPACITY: 					"Capacidade",
			FREESPACE: 					"Espaço Livre",
			USBSPACE: 					"Espaço Utilizado",
			
			STATUS: 					"Ativo",
			INACT: 						"Inativo",
			ACTIVE: 					"Ativo",
			
			USAGE: 						"Uso",
			CAPACITY: 					"Capacidade",
			OPERATION: 					"Operação",	
			
			ACC: 						"Gerenciamento de Conta", 	 	
			USERNAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			USE_LOGIN: 					"Utilizar Login de usuário",
			SCAN: 						"Buscar",
			ENJECT_ALL: 				"Ejetar Todos",
			ENJECT: 					"Ejetar",
			ADD_USER: 					"Adicionar Usuário",
			AUTH: 						"Autorização"
		},

		FOLDER: {
			TITLE: 						"Configurações de Compartilhamento",
			ACCOUNT_TITLE: 				"Conta de Compartilhamento",
			ACCOUNT:					"Conta",
			AC_NOTE: 					"Você pode utilizar a conta de login padrão ou criar uma nova conta para acessar o conteúdo compartilhado.",
			
			AC_LOGIN: 					"Utilizar Conta Padrão",
			AC_FOLLOW: 					"Utilizar Nova Conta",

			USERNAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",
			CONFIRM: 					"Confirmar Senha",

			SHARING_SETTING: 			"Configurações de Compartilhamento",
			SERVER_NAME: 				"Rede/Nome de Servidor de Mídia",

			METHOD: 					"Método de Acesso",
			LINK: 						"Link",
			PORT: 						"Porta",

			NETWORK_NEIGHBORHOOD: 		"Ambiente de Rede",
			FTP: 						"FTP",
			FTPEX: 						"FTP (Via Internet)",

			SHARE_FOLDER: 				"Compartilhamento de Pasta",
			SHAREING_ALL: 				"Compartilhar Todos",
			NOTE:  						"Alterne para On para compartilhar todos os arquivos e pastas ou mude para Off para compartilhar somente pastas específicas.", 
			ENABLE_AUTHENTICATION: 		"Habilitar Autenticação",
			SHAREING_FOLDER: 			"Compartilhamento de Pasta",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Caminho da Pasta",
			VOLUMN_NAME: 				"Nome do Volume",

			SHARE_NAME: 				"Nome da Pasta",
			FOLDER_PATH: 				"Caminho da Pasta",
			MEDIA_SHARING: 				"Compartilhamento de Mídia",
			STATUS: 					"Ativo",

			GUEST_ACCESS: 				"Permitir Acesso Rede para Convidados",
			ENABLE_AUTHENTICATION: 		"Habilitar Autenticação",
			ENABLE_WRITE_ACCESS: 		"Habilitar Permissão Editar",
			ENABLE_MEDIA_SHARE: 		"Habilitar Compartilhamento de Mídia.",
			
			BROWSE: 					"Buscar",
			BROWSE_TITLE: 				"Selecione uma pasta",

			NO_VOLUMN:					"Nenhum Volume",
			
			NOTICE: 					"Tem certeza que deseja sair da página DNS Dinâmica? Clique em Salvar para salvar e sair. Clique em Sair para sair sem salvar. Clique em Cancelar para permanecer.",
			NO_CHANGE_NOTICE: 			"Tem certeza que deseja sair da página DNS Dinâmica?",

			SAVE_FAILED_NOTICE: 		"Falha ao Salvar",
			CONTINUE: 					"Sair",
			CONTINUE_SAVE: 				"Salvar",
			CANCLE: 					"Cancelar",

			ENABLE: 					"Habilitar"

		},

		PRINT:{
			TITLE: 						"Servidor de Impressora",
			NAME: 						"Nome de Impressora",
			ENABLE_PRINT_SERVER: 		"Servidor de Impressora",
			NONE: 						"Nenhum",
			
			NOTE_TITLE: 				"Nota",
			STEP1: 						"Passo 1:",
			STEP2: 						"Passo 2:",
			STEP3: 						"Passo 3:",

			NOTE1: 						"Instalar o driver de impressão no seu computador.",
			NOTE2: 						"Conecte a impressora USB à porta USB do roteador via cabo USB.",
			NOTE3: 						"Instalar o Utilitário de Controlador de Impressora USB da TP-Link. Favor fazer o download do nosso website oficial: <a class=\"link\" href=\"%SUPPORT%\" target=\"_blank\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Controle dos Pais",
			STATUS: 					"Ativo",
			UNKNOWN: 					"Desconhecido",

			DEVICE_CTR: 				"Dispositivos Sob Controle dos Pais",
			DEVICE: 					"Nome do Dispositivo",
			MAC_ADDRESS: 				"Endereço MAC",
			TIME: 						"Tempo de Acesso à Internet",
			DESCRIPTION: 				"Descrição",
			
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",
			OPTIONAL: 					"(Opcional)",
			BTN_VIEW: 					"Visualizar Dispositivos Existentes",
			
			DEVICE_LIST: 				"Lista de Dispositivos",
			SYSTEM_TIME: 				"Tempo de Sistema",
			
			RESTR: 						"Restrição de Conteúdo",
			MODE: 						"Política de Restrição",
			BLACKMODE: 					"Lista de Bloqueados",
			WHITEMODE: 					"Lista de Permitidos",
			ACCESS_DEVICES_LIST: 		"Lista de Dispositivos de Acesso",
			
			CHOOSE: 					"Escolher",
			ADD_A_NEW_KEYWORD: 			"Adicionar uma Nova Palavra-chave",
			ADD_A_NEW_DOMAIN_NAME: 		"Adicionar um Novo Nome de Domínio"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Internet",
			ROUTER: 					"Roteador",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"OUTROS",

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
			TEST_BANDWIDTH: 			"&gt;Teste de Largura de Banda",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Habilitar streamboost",
			UP_LIMITATION: 				"Limitação Máxima (Mbps)",
			DOWN_LIMITATION: 			"Limitação Mínima (Mbps)",
			RUN_BANDWIDTH_TEST: 		"Iniciar Teste de Largura de Banda",
			TESTING: 					"Testando",
			TEST_FAILED: 				"Falha no Teste",
			TEST_SUCCEED: 				"Teste com Sucesso",
			ENABLE_AUTOMATIC_TEST: 		"Habilitar Teste Automático",
			KEEP_UP_TO_DATE: 			"Manter StreamBoost atualizado",
			ENABLE_AUTOMATIC_UPDATE: 	"Habilitar Atualização Automática"

		},

		PRIORITY:{
			PRIORITY: 					"Prioridade",
			PRIORITY_TIPS: 				"A Prioridade permite que você altere a importância de um dispositivo sobre outro. Esta função é útil quando dispositivos está competindo ou limitando a largura de banda com aplicações de mesma classificação.",
			ALL_DEVICE: 				"Todos os Dispositivos",
			ACTIVE_DEVICE: 				"Ativar Dispositivo",
			SAVE: 						"Salvar",
			ID: 						"ID",
			DEVICE: 					"Dispositivo",
			TYPE: 						"Tipo",
			MAC_ADDRESS: 				"Endereço MAC",
			STICK: 						"Colar"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Estatísticas",
			UP_TIME: 					"Tempo Máximo",
			DOWNLOADS: 					"Downloads",
			LAST_DAY: 					"Ontem",
			LAST_WEEK: 					"Semana Passada",
			LAST_MONTH: 				"Mês Passado",
			ALL_LAN_HOSTS: 				"Todos os Hosts LAN",
			OTHER: 						"Outros..."

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Firewall",
			ENABLE_SPI: 				"Firewall SPI",

			DOS_PROTECTION: 			"Proteção DoS",
			ENABLE_DOS: 				"Proteção DoS",
			
			OFF: 						"Desligado",
			LOW: 						"Baixa",
			MIDDLE: 					"Média",
			HIGH: 						"Alta",

			ICMP: 						"Filtragem de Ataque ICMP-FLOOD",
			UDP: 						"Filtragem de Ataque UDP-FLOOD",
			TCP: 						"Filtragem de Ataque TCP-SYN-FLOOD",
			ENABLE_DOS_TIP:             "A Proteção DoS e as Estatísticas de Tráfego devem estar habilitadas ao mesmo tempo.",

			IGNORE: 					"Ignorar Pacote Ping da Porta WAN",
			FORBID: 					"Proibir Pacotes de Ping da porta LAN",

			BLOCK_DOS: 					"Lista de Host DoS Bloqueados",
			HOST_NUMBER: 				"Número Host",
			IP_ADDRESS: 				"Endereço IP",
			MAC_ADDRESS: 				"Endereço MAC"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Controle de Acesso",
			ENABLE_ACCESS: 				"Controle de Acesso",

			ACCESS_MODE: 				"Método de Acesso",
			DEFAULT_ACCESS_MODE: 		"Modo de Aceso Padrão",
			BLACK_LIST: 				"Lista de Bloqueados",
			WHITE_LIST: 				"Lista de Permitidos",
			
			WIRED:						"Cabeada",
			WIRELESS:					"Wireless",

			DEVICE_ONLINE: 				"Dispositivos Online",
			NAME: 						"Nome do Dispositivo",
			IP_ADDRESS: 				"Endereço IP",
			MAC_ADDRESS: 				"Endereço MAC",
			CONN_TYPE: 					"Tipo de Conexão",

			BLOCK: 						"Bloquear",

			DEVICE_IN_WHITE: 			"Dispositivos na Lista de Permitidos",
			DEVICE_IN_BLACK: 			"Dispositivos na Lista de Bloqueados"
		},

		IP_MAC:{
			TITLE: 						"Configurações",
			ENABLE_ARP: 				"Vínculo ARP",

			ARP_LIST: 					"Lista ARP",
			ARP_NUM: 					"Número de Entrada ARP",

			MAC_ADDRESS: 				"Endereço MAC",
			IP_ADDRESS: 				"Endereço IP",
			BOUND: 						"Vinculo",
			UNBOUND: 					"Não Vínculo",

			BINDING_LIST: 				"Lista de Vínculos",
			DESCRIPTION: 				"Descrição",
			OPTIONAL: 					"(Opcional)",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada"
		},

		TIMESET: {
			TITLE: 						"Ajuste de Horário",
			ZONE: 						"Fuso Horário",
			DATE: 						"Data",
			DATEFORMAT: 				"MM/DD/AAAA",
			TIME: 						"Horário",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"NTP Server I",
			NTP2: 						"NTP Server II",
			OPTIONAL: 					"(Opcional)",

			CURRENT_TIME:  				"Tempo Atual",
			SET_TIME: 					"Ajustar Horário",
			AUTOMATIC: 					"Obter automaticamente da Internet",
			MANUAL: 					"Manualmente",
			AUTOMATIC_BTN: 				"Obter",


			GETGMT: 					"Obter GMT",

			
			GETGMT_SUCCESS: 			"Obter Horário do Servidor NTP feito com sucesso",
			GETGMT_TIMEOUT: 			"Tempo Esgotado ao Obter Horário do Servidor NTP",
			GETGMT_WAIT: 				"Aguardando",
			
			M: 							"M",
			W: 							"S",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Período de Horário de Verão",
			ENABLE_DAYLIGHT: 			"Habilitar Período de Horário de Verão",
			START: 						"Início",
			END: 						"Fim",

			RUNNING_STATUS: 			"Status",
			DOWN: 						"O Período de Horário de Verão está desligado.",
			UP: 						"O Período de Horário de Verão está ligado."
		},

		DIAG:{
			TITLE: 						"Diagnósticos",
			DIAGNOSTIC_TOOL: 			"Ferramentas de Diagnósticos",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"Endereço IP/Nome de Domínio",
			COUNT: 						"Contagem de Ping",
			
			BASIC: 						"Básico",
			ADVANCED: 					"Avançado",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Tamanho do Pacote Ping",
			PKTUNIT: 					"(4-1472 Bytes)",

			TIMEOUT: 					"Período de Ping Esgotado",
			TIMOUTUNIT: 				"(100-2000 Milisegundos)",

			TTL: 						"Traceroute Max TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Início",
			STOP: 						"Parar"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Seu firmware está atualizado",
			TITLE: 						"Atualização de Firmware",
			INFO: 						"Informação do Dispositivo",
			REMOTE_TITLE: 				"Atualização Online",
			LOCAL_TITLE: 				"Atualização Local",

			NEWFILE: 					"Novo Arquivo Firmware",
			FIRMWAREVERSION: 			"Versão de Firmware",
			HARDWAREVERSION: 			"Versão de Hardware",
			LATESTVERSION: 				"Versão Mais Recente",
			CONFIRM_CONTENT:			"Tem certeza que deseja atualizar o firmware?",
			WARNING:					"Atualizando firmware... <br/> Para evitar qualquer dano , mantenha o dispositivo ligado e aguarde sem efetuar nenhuma operação durante este processo.",
			REBOOTING: 					"Reiniciando... <br/> Para evitar qualquer dano , mantenha o dispositivo ligado e aguarde sem efetuar nenhuma operação durante este processo.",
			DO_NOT_OPERATE: 			"Atualizando firmware... <br/> Para evitar qualquer dano , mantenha o dispositivo ligado e aguarde sem efetuar nenhuma operação durante este processo.",
			FIRMWARE_UPDATING_NOTE: 	"1. Atualização de Firmware...",
			REBOOTING_NOTE: 			"2. Reiniciando...",
			SCREEN_UPDATING_NOTE: 		"3. Atualização de Tela...",
			UPGRADE_FAILED: 			"Falha ao Atualizar.",
			UPGRADE: 					"Atualizar",
			CHECK: 						"Verificar",
			DOWNLOADING: 				"Baixando...",
			UPGRADE_INOF: 				"Para evitar qualquer dano, favor manter o roteador ligado.",
			NOTE: 						"Nota ",
			NO_UPGRADE: 				"Esta é a versão mais recente",

			UPGRADING: 					"Atualizando...",
			RETRY: 						"Tentar Novamente",
			CANCEL: 					"Cancelar",
			ILEGAL_DEVICE:              " Favor contatar o suporte técnico TP-Link.",
			UPGRADE_FAIL: 				"Não é possível atualizar. Favor tentar novamente",
            CONFIG_RESET_NOTE:          "Suas configurações atuais serão perdidas após a atualização desta versão.",
			CHECK_UPGRADE: 				"Verifique para atualizar"
		},

		BACKUP:{
			BACKUP: 					"Backup",
			BACKUPTIP: 					"Salve uma cópia das suas configurações atuais.",

			RESTORE: 					"Restaurar",
			RESTORETIP: 				"Restaurar configurações salvas de um arquivo.",
			
			RESTORE_WARN:				"Restaurando o Roteador... <br/>Favor NÃO operar durante o processo.",
			RESTORE_CONFIRM_CONTENT: 	"Tem certeza que quer restaurar o roteador com o  arquivo backup?",
			
			FILE: 						"Arquivo",

			FACTORY: 					"Restaurar Padrões de Fábrica",
			FACTORYTIP: 				"Reverta todas as configurações feitas ao valores de fábrica.",
			RESETTIP:					"Restaurar todas as configurações para os valores padrão, exceto as informações de login e conta cloud.",
			FACTORY_CONFIRM_CONTENT:	"Tem certeza de que quer restaurar o roteador aos padrões de fábrica?",
			FACTORY_WARN:				"Restaurando o Roteador... <br/>Favor NÃO operar durante o processo.",
			
			BACKUPBTN: 					"Backup",
			RESTOREBTN: 				"Restaurar",
			RESETBTN:					"Restaurar",
			FACTORYBTN: 				"Restauração de Fábrica"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Gerenciamento de Conta",
			
			OLDUSER: 					"Nome de Usuário Antigo",
			OLDPWD: 					"Senha Antiga",

			NEWUSER: 					"Novo Nome de Usuário",
			NEWPWD: 					"Nova Senha",
			CONFIRM: 					"Confirmar Nova Senha",

			RECOVERYINFO: 				"Recuperação de Senha",
			ENABLE_PASSWORD_RECOVERY: 	"Habilitar Recuperção de Senha",
			FROM: 						"De",
			TO: 						"Para",
			SMTP_SERVER: 				"Servidor SMTP",
			
			ENABLE_AUTHENTICATION: 		"Habilitar Autenticação",
			USERNAME: 					"Nome de usuário",
			PASSWORD: 					"Senha",

			TEST_MAIL: 					"Email Teste",

			LOCAL:						"Gerenciamento Local",
			LOCAL_MAC_AUTH: 			"Autenticação MAC Local",
			ACCESS: 					"Acesso para Todos Dispositivos LAN Conectados ",
			ACCESS_TIPS: 				"Alterne para On para habilitar gerenciamento para todos os dispositivos na LAN ou mantenha Off para habilitar o gerenciamento de um dispositivo específico.",
			
			MAC_ADDRESS: 				"Endereço MAC",
			VIEW_BTN: 					"Visualizar Dispositivos Existentes",
			DESCRIPTION: 				"Descrição",

			EXIST_DEVICE:               "Dispositivos Existentes",

			OPTIONAL: 					"(Opcional)",
			ENABLE_THIS_ENTRY: 			"Habilitar Esta Entrada",

			DEVICE_NAME:				"Nome do Dispositivo",
			IP_ADDRESS:					"Endereço IP",
			

			REMOTE: 					"Gerenciamento Remoto",
			DISABLE_REMOTE_MANAGEMENR: 	"Desabilitar Gerenciamento Remoto",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Habilitar Gerenciamento Remoto para Todos os Dispositivos",
			ENABLE_REMOTE_MANAGEMENR: 	"Habilitar Gerenciamento Remoto para Dispositivos Específicos",
			WEB: 						"Porta de Gerenciamento Web",

			NOTICE:						"Em conflito com a porta de servidor virtual. Tem certeza de que quer continuar?",

			REMOTEIP: 					"Gerenciamento Remoto de Endereço IP",
			REMOTEIPNOTE: 				"(Insira 255.255.255.255 para todos)"
			
		},

		SYSLOG:{
			TITLE: 						"Log de Sistema",
			LOG_FILTER: 				"Filtro de Log:",
			
			TYPE_EQ: 					"Tipo=",
			
			ALL: 						"TODOS",

			FIREWALL: 					"Firewall", 
			NAT: 						"NAT",
			DDNS: 						"DNS Dinâmico",
			UPNP:						"UPnP",
			IMB:            			"Vínculo IP e MAC",
			IPTV:						"IPTV",
			DHCPS:						"Servidor DHCP",
			IGMP_PROXY:					"IGMP Proxy",
			DOMAIN_LOGIN:				"Login de Domínio",
			BASIC_SECURITY: 			"Segurança Básica",
			PARENTAL_CONTROL: 			"Controle dos Pais",
			ACCESS_CONTROL: 			"Controle de Acesso",
			DOS_PROTECTION: 			"Proteção DoS",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Estatísticas de Tráfego",
			TIME_SETTINGS: 				"Ajuste de Horário",
			ACCOUNT_MANAGEMENT: 		"Gerenciamento de Conta",
			LOCAL_MANAGEMENT: 			"Gerenciamento Local",
			REMOTE_MANAGEMENT: 			"Gerenciamento Remoto",
			LOCALE: 					"Local",
			FACTORY_RESET: 				"Reconfiguração de Fábrica",
			LED_CONTROLLER: 			"Controlador LED",
			NETWORK: 					"Rede",
			USBSHARE: 					"Compartilhamento USB",
			AND: 						"e",
			LEVEL: 						"Nível",
			EMERGENCY:					"EMERGÊNCIA",
			ALERT:						"ALERTA",
			CRITICAL:					"CRÍTICO",
			ERROR: 						"ERRO",
			WARNING: 					"AVISO",
			NOTICE: 					"NOTA",
			INFO: 						"INFORMAÇÃO",
			DEBUG: 						"CORRIGIR",

			INDEX: 						"Índice",
			TYPE: 						"Tipo",
			TIME: 						"Horário",
			LEVEL_COL:					"Nível",

			CONTENT: 					"Conteúdo de Log",
			
			MAIL_LOG: 					"Log de Envio",
			SAVE_LOG: 					"Salvar Log",

			SEND_OK: 					"Enviar OK",
			SEND_FAILED: 				"Falha no Envio",

			MAIL_SETTING: 				"Configuração de Envio",

 			FROM: 						"De",
 			TO: 						"Para",
 			SMTP_SERVER: 				"Servidor SMTP",
 			ENABLE_AUTHENTICATION: 		"Habilitar Autenticação",

 			USERNAME: 					"Nome de usuário",
 			PASSWORD: 					"Senha",
 			CONFIRM_PASSWORD: 			"Confirmar Senha",

 			AUTO_MAIL: 					"Habilitar Email Automático",
 			LOG_AT: 					"Fazer login às",
 			HH_MM: 						"(HH:MM) diariamente",

 			LOG_EVERY: 					"Fazer login a cada",
 			HOURS: 						"horas"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Configurações",
			STATUS: 					"Habilitar QoS",
			UPBANDWIDTH: 				"Largura de Banda para Upload",
			DOWNBANDWIDTH: 				"Largura de Banda para Download",
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
			APPLICATION_LIST: 			"Lista de Aplicação",
			CUSTOM_APP: 				"Aplicação Personalizada",
			MAC_ADDR: 					"Endereço MAC",
			MAC_ADDR_P: 				"MAC:",
			IP_ADDR: 					"Endereço IP",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Porta Física",

			LOW: 						"Baixa",
			MIDDLE: 					"Média",
			HIGH: 						"Alta",

			PROTO: 						"Protocolo",
			PORT: 						"Porta",
			PROTO_P: 					"Protocolo:",
			PORT_P: 					"Porta:",
			PORT_TIPS: 					"(XX oou XX-XX,1-65535,na maioria dos 5 pares)",

			ALL: 						"TODOS",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Personalizado",

			WIFI_HOME: 					"Wi-Fi-HOST",
			WIFI_GUEST: 				"Wi-Fi-CONVIDADO",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Atualizar Base de Dados",

			NEWFILE: 					"Novo Arquivo de Base de Dados",
			FIRMWAREVERSION: 			"Versão de Base de Dados",
			CONFIRM_CONTENT:			"Tem certeza de que quer atualizar a base de dados?",
			WARNING:					"Atualizando Base de Dados... <br/>Favor NÃO operar durante o processo.",
			
			UPGRADE: 					"Atualizar",

			SERVICE_RESTART: 			"Reinício QoS",
			
			TYPE: 						"Tipo",
			BY_DEVICE: 					"Por Dispositivo",
			BY_APP: 					"Por Aplicação",
			BY_PHY: 					"Por Porta Física",

			HIGH_PRIORITY_LBL: 			"Alta Prioridade:",
			MIDDLE_PRIORITY_LBL: 		"Prioridade Média:",
			LOW_PRIORITY_LBL: 			"Baixa Prioridade:",

			HIGH_PRIORITY: 				"Alta Prioridade",
			MIDDLE_PRIORITY: 			"Prioridade Média",
			LOW_PRIORITY: 				"Baixa Prioridade"

		},

		APPLICATION:{
			APP_LIST: 					"Lista de Aplicação",
			GAME_LIST: 					"Lista de Jogos",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Estatísticas de Tráfego",
			ENABLE_STATISTICS: 			"Estatísticas de Tráfego",

			TITLE: 						"Lista de Estatísticas de Tráfego",
			IP_MAC: 					"Endereço IP/Endereço MAC",
			TPKT: 						"Pacotes Totais",
			TBYTE: 						"Bytes Totais",
			CPKT: 						"Pacotes Atuais",
			CBYTE: 						"Bytes Atuais",
			CICMP: 						"ICMP Tx Atuais",
			CUDP: 						"UDP Tx Atuais",
			CSYN: 						"SYN Tx Atuais",
			
			DELETE_CONFIRM: 			"Tem certeza de que quer deletar as estatísticas de tráfego?",
			DELETE_ALL_CONFIRM: 		"Tem certeza de que deseja deletar todas as estatísticas de tráfego?",

			RESET_ALL: 					"Reiniciar Todos"
		},

		SYSPARA:{
			W24G: 						"Wireless 2.4GHz",
			W5G: 						"Wireless 5GHz",
			SWITCH_NOTICE:  			"A função wireless está desligada. Caso queira utilizar esta função, favor acionar o botão Wi-Fi.",

			ENABLE_TIPS: 				"A função wireless está desabilitada.",

			BEACON: 					"Intervalo Beacon",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"Limite RTS",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Fragmentação Threshold",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"Intervalo DTIM",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Período de Atualização de Chave de Grupo",
			GROUPUNIT: 					"segundos",
			
			
			WMM_FEATURE: 				"Função WMM",
			WMM: 						"Habilitar WMM",

			GI_FEATURE: 				"Função Short GI",
			GI: 						"Habilitar Short GI",

			AP_FEATURE: 				"Isolamento AP",
			AP: 						"Habilitar Isolamento AP",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Habilitar TxBF",

			WDS_FEATURE: 				"WDs Bridging",
			WDS: 						"Habilitar WDS Bridging",
			
			SSID_BRIDEGE: 				"SSID (a ser ponteado)",
			SURVEY: 					"Pesquisa",

			SN: 						"SN",
			MAC_ADDRESS: 				"Endereço MAC",
			SSID: 						"SSID",
			SIGNAL: 					"Sinal ",
			CHANNEL: 					"Canal",
			SECURITY: 					"Segurança",
			CHOSEN: 					"Escolhido",
			AP_NUMBER:					"Número AP",

			TOTAL: 						"Itens Totais",

			MAC: 						"Endereço MAC (a ser ponteado)",
			MACUNIT: 					"Exemplo: 00-1D-0F-11-22-33",

			SECURITY: 					"Segurança",
			NO: 						"Não",
			NONE: 						"Sem Segurança",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Senha",
			
			AUTH_TYPE: 					"Autenticação. Tipo",
			AUTO: 						"Automático",
			OPEN: 						"Sistema Aberto",
			SHARED: 					"Chave de Compartilhamento",

			WEP_INDEX: 					"WEP Index",
			KEY1: 						"Chave1",
			KEY2: 						"Chave2",
			KEY3: 						"Chave3",
			KEY4: 						"Chave4",

			WEP_KEY_FORMAT: 			"Formato de Chave WEP",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimal",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Habilitar WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Habilitar NAT",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"Habilitar NAT Boost",
			
			MEDIA_SERVER: 				"Servidor de Mídia",
			SCAN_INTERVAL: 				"Intervalo de Scan Automático (Horas)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Configurações de Nível de Proteção DoS",

			ICMP: 						"Nível de Pacotes ICMP-FLOOD",
			UDP: 						"Nível de Pacotes UDP-FLOOD",
			TCP: 						"Nível de Pacotes TCP-FLOOD",

			WDS_MODE: 					"Modo WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Baixa",
			MIDDLE: 					"Média",
			HIGH: 						"Alta",

			TO: 						"para",
			NOTICE_NAT_REBOOT: 			"Reiniciando... <br/>Favor NÃO operar durante o processo.",

			NOTICE_NAT_BOOST: 			"A modificação da função NAT Boost irá resultar na reiniciação deste dispositivo, tem certeza de que quer continuar?",
			NOTICE:						"O canal do seu roteador não está no mesmo canal do AP ponteado. Favor verificar.",

			UNIT: 						"(5-7200)Pacotes/Segundos",
			LED: 						"Controle de LED",
			NIGHT_MODE: 				"Modo Noturno",
			PERIOD_NIGHT_TIME: 			"Período de Modo Noturno",
			ENABLE: 					"Habilitar Modo Noturno",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "O LED está desligado. Caso queira utilizar esta função, favor pressionar o botão LED ou clique em LED na no canto superior direito da página.",
			NOTE2:                      "O modo noturno tem efeito baseado no Horário do Sistema do roteador. Favor certificar-se de que já configurou o Horário do roteador."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Nenhum certificado atual, favor <b>Gerar</b> um antes de exportar a configuração.",
			NO_CERT_NOTE2: 				"Nenhum certificado atual, favor <b>Gerar</b> um antes de exportar a configuração.",
			ENABLE_VPN_SERVER: 			"Habilitar Servidor VPN",
			SERVICE_TYPE: 				"Tipo de Serviço",
			SERVICE_PORT: 				"Porta de Serviço",
			VPN_SUBNET: 				"Sub-rede VPN/Sub-Máscara ",
			CLIENTS_ACCESS: 			"Acesso para Cliente",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Somente Rede Residencial",
			INTERNET_HOME: 				"Internet e Rede Residencial",
			CERT_STR: 					"Nenhum certicado atual, clique em OK para gerar um e exportar sua configuração.",
			CERT_STR2: 					"Nenhum certicado atual, clique em OK para gerar um e exportar sua configuração.",
			CONF_FILE: 					"Tipo de Configuração", 
			EXPORT_CONF_FILE: 			"Exportar a configuração.",
			EXPORT: 					"Exportar",

			INSTALL_GUIDE: 				"Guia de Instalação Cliente VPN",
			INSTALL_STEP: 				"Para habilitar e conectar seus dispositivos clientes para o servidor OpenVPN:",
			INSTALL_NOTICE:				"Antes de configurar o servidor OpenVPN, configure o Serviço DNS Dinâmico (recomendado) ou atribua um endereço IP estático para a porta WAN. E garanta que o Horário do Sistema esteja correto.",
			INSTALL_NOTE1: 				"Selecione Habilitar Servidor VPN.",
			INSTALL_NOTE2: 				"Configure os parâmetros do servidor OpenVPN (Tiipo de Serviço, Porta de Serviço e Acesso de Cliente) e clique em Salvar. E garante que sua porta externa das configurações NAT não seja a porta de serviço e a função DMZ esteja desabilitada.",
			INSTALL_NOTE3: 				"Clique em Exportar para salvar o arquivo de configuração.",
			INSTALL_NOTE4: 				"Nos seus dispositivos clientes, baixe e instale o utilitário cliente OpenVPN através do <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> As plataformas oficiais compatíveis incluem Windows, Mac OSX e Linux.",
			INSTALL_NOTE5: 				"Inicie o utilitário cliente OpenVPN e adicione uma nova conexão VPN utilizando o arquivo de configuração salvo para conectar seu dispositivo cliente ao servidor VPN.",
			NOTE: 						"Para aprender mais sobre clientes OpenVPN clients, visite <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"Endereço IP Cliente",
			ACCOUNT_USERNAME: 			"Nome de usuário",
			ACCOUNT_PASSWORD: 			"Senha",
			CLIENT_IP_NOTE: 			"(até 10 clientes)",
			SAME_SUBNET_NOTE: 			"O endereço IP cliente endereço IP LAN não podem estar na mesma sub-rede. <br/>Favor inserir outro.",
			CONFLICT_WITH_DHCP: 		"O endereço IP cliente conflita com o endereço pool IP DHCP <br/>Favor inserir novamente.",
			CONFLICT_WITH_RESERVED: 	"O endereço IP cliente conflita com o endereço IP reservado. <br/>Favor inserir novamente.",
			CONFLICT_WITH_OPENVPN: 		"O cliente endereço IP e endereço IP OpenVPN não podem estar no mesmo endereço. <br/>Favor inserir novamente.",
			SAME_SUBNET_NOTE2: 			"A Sub-rede VPN/Máscara de Rede e endereço IP LAN não podem estar na mesma sub-rede. <br/>Favor inserir outro.",
			CONFLICT_WITH_DHCP2: 		"A Sub-rede VPN/Máscara de Rede conflita com o endereço IP pool DHCP. <br/>Favor inserir novamente.",
			CONFLICT_WITH_RESERVED2: 	"A Sub-rede VPN/Máscara de Rede conflita com o endereço IP reservado. <br/>Favor inserir novamente.",
			CONFLICT_WITH_PPTPVPN: 		"A Sub-rede VPN/Máscara de Rede e endereço PPTP VPN IP não pode estar na mesma rede. <br/>Favor inserir novamente.",
			VPN_MASK_ERROR: 			"A máscara de rede não pode ser maior que 255.255.255.248. <br/>Favor inserir novamente.",
			ACCOUNT_LIST: 				"Lista de Conta (até 16 usuários)",
			ADVANCED_SETTING: 			"Avançado",
			ALLOW_SAMBA: 				"Permitir acesso Samba (Local de Rede)",
			ALLOW_NETBIOS: 				"Permitir passagem NetBIOS",
			ALLOW_UNENCRYPTED_CONN: 	"Permitir conexões descriptografadas",
			USERNAME_CONFLICT: 			"Este nome de usuário já existe. Favor inserir outro.",
			
			CONNECT_PPTP: 				"Para habilitar e conectar seus dispositivos clientes ao servidor PPTP VPN:",
			CONNECT_NOTICE:				"Antes de configurar o servidor PPTP VPN, favor configurar o Serviço DNS Dinâmico recomendado ou atribua um endereço IP estático para porta WAN. Garanta que sua porta externa das configurações NAT não seja 1723 e a função DMZ esteja desabilitada, e também seu Horário de Sistema esteja correto.",
			CONNECT_NOTE1: 				"Selecione Habilitar Servidor VPN.",
			CONNECT_NOTE2: 				"Configure o servidor VPN PPTP e clique em Salvar.",
			CONNECT_NOTE3: 				"Nos seus dispositivos de clientes, crie uma conexão PPTP VPN. As plataformas oficiais suportadas incluem Windows, Mac OSX, Linux, iOS e Android.",
			CONNECT_NOTE4: 				"Inicie o programa VPN PPTP, adicione uma nova conexão e insira o nome de domínio do serviço DDNS registrado ou o endereço IP estático atribuído à porta WAN, para conectar seu dispositivo cliente ao servidor VPN PPTP.",
			
			GENERATE_CERT: 				"Certificado",
			GENERATE_NEW_CERT: 			"Gerar certificado.",
			GENERATE: 					"Gerar",
			GENERATE_TIPS: 				"Gerando certificado...<br/>Isso levará alguns minutos, favor aguardar.",
			CERT_SUCCESS: 				"Sucesso",
			CERT_FAIL: 					"Falhou, favor tentar novamente.",
			
			VPN_CONNECTIONS: 			"Conexões VPN",
			OPEN_VPN_CONNECTIONS: 		"Conexão OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"Conexão PPTP VPN Connection",
			USER:				"Usuário",
			REMOTE_IP:			"IP Remoto",
			ASSIGNED_IP:			"IP Atribuído"
		}
	};
})(jQuery);

