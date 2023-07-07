(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			EMAIL: 						"E-Mail",
			FORGET_PASSWORD: 			"Mot de passe oublié ?",
			LOGIN: 						"Connexion",
			BEGIN: 						"Commençons",
			IMPORTANT_UPDATE_INFO: 		"Pour éviter un conflit avec l'appareil en amont, l'adresse IP de votre routeur à été modifiée comme suit :",
			CONTINUE: 					"Continuer",

			IMPORTANT_NOTICE: 			"Information importante",
			OR: 						", êtes vous sûr de vouloir continuer à visiter ",
			END: 						".",
			END2: 						" ? ",

			FORGET_PASSWORD_INFO_0: 	"Maintenir appuyé le bouton reset %SECONDS% secondes le bouton reset du routeur pour le réinitialiser à ses paramètres d'usine.",
			FORGET_PASSWORD_INFO_1: 	"Si la fonction de récupération du Mot de passe est active. Un code de vérification va être envoyé à l'adresse Email définie pour réinitialiser le nom d'utilisateur et le Mot de passe.",
			FORGET_PASSWORD_SEND_FAILED:"Echec de l'envoi du code ! Merci de vérifier votre connexion à internet.",

			VERIFICATION_CODE: 			"Code de vérification",

			RECEIVE_CODE: 				"Envoi du Code",

			CONFIRM: 					"Confirmer",
			WELCOME: 					"Bienvenue dans l'interface du %model% TP-Link. Merci de vous connecter.",
			SEC: 						"s",

			USER_CONFLICT: 				"Conflit de connexion !",
			FIRST_TIME: 				"Veuillez configurer votre %PRODUCT% pour vous connecter à Internet en premier lieu. Pour commencer, créez un mot de passe pour gérer votre %PRODUCT%.",
			FIRST_TIME1: 				"Merci de créer un mot de passe administrateur pour gérer votre %model%.",
			USER_CONFLICT_INFO: 		"L'utilisateur %USER% utilisant la configuration %HOST% (%IP%/%MAC%) est connecté au routeur. Vous ne pouvez pas vous connecter en même temps. Merci d'essayer plus tard.",
			USER_CONFLICT_INFO_2: 		"L'utilisateur %USER% (%IP%) est connecté au routeur. Vous ne pouvez pas vous connecter en même temps. Merci d'essayer plus tard.",
			USER_CONFLICT_INFO_3: "Un seul appareil est autorisé à se connecter à la fois. Voulez-vous continuer et forcer la déconnexion de l'autre appareil ?",
			
			LOGIN_FAILED: 				"Erreur de connexion !",
			LOGIN_FAILED_COUNT: 		"La connexion a échoué %num1 fois et Il vous reste  %num2 essai(s).",
			NO_COOKIE: 					"Les cookies doivent être autorisés pour vous connecter. Merci d'autoriser les cookies ou de sortir du mode Privé/Incognito de votre navigateur.", 

			FORGET_PASSWORD_NOTE: 		"Si vous n'avez pas configuré la fonction de récupération du Mot de passe. Vous pouvez maintenir appuyé %SECONDS% secondes le bouton reset du routeur pour le réinitialiser à ses paramètres d'usine."
		},
		INIT: {
			PASSWORD: 					"Mot de passe",
			CONFIRM_PASSWORD:				"Confirmer le mot de passe",
			BEGIN: 						"Commençons",
			IMPORTANT_UPDATE_INFO: 		"Pour éviter un conflit avec un périphérique de premier plan, l'adresse IP de votre routeur a était modifiée en ",
			CONTINUE: 					"Suivant",

			IMPORTANT_NOTICE: 			"Information importante",
			OR: 						", êtes vous sûr de vouloir continuer à visiter ",
			END: 						".",
			END2: 						" ? ",

			CONFIRM: 					"Confirmer",

			SEC: 						"s",

			USER_CONFLICT: 				"Conflit d'identification !",
			
			USER_CONFLICT_INFO: 		"L'utilisateur %USER% avec l'hôte %HOST% (%IP%/%MAC%) est actuellement connecté au routeur. Vous ne pouvez pas vous connecter en même temps. Veuillez réessayer plus tard.",
			USER_CONFLICT_INFO_2: 		"L'utilisateur %USER% (%IP%) est actuellement connecté au routeur. Vous ne pouvez pas vous connecter en même temps. Veuillez réessayer plus tard.",
			
			LOGIN_FAILED: 				"Échec d'identification !",
			LOGIN_FAILED_COUNT: 		"La connexion a échoué %num1 fois et Il vous reste  %num2 essai(s).",
			NO_COOKIE: 					"Les cookies doivent être autorisés pour vous connecter. Merci d'autoriser les cookies ou de sortir du mode Privé/Incognito de votre navigateur.", 

			INIT_NOTE_TITLE: 			"Cher client,",
			INIT_NOTE_CONTENT: 			"Veuillez configurer votre %PRODUCT% pour vous connecter à Internet en premier lieu. Pour commencer, créez un mot de passe pour gérer votre %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Version logicielle :",
			FEATURE: 						"Modifications et corrections de bogues:",
			TITLE: 							"Une mise à jour logicielle est disponible.",
			UPGRADE_NOW: 					"Mettre à jour maintenant",
			REMIND: 						"Me le rappeler plus tard.",
			NOTICE:    						"Bonjour, un nouveau firmware est disponible pour votre routeur.",
			NEVER: 							"Ignorer cette version"
			
		},

		WAN_ERROR: {
			TITLE: 							"Erreur de connexion WAN !",
			STATUS: 						"Etat",
			INFO: 							"Information",
			SETUP: 							"Paramétrer une connexion internet",
			NEVER: 							"Ne pas me le rappeler"
		},

		OFFLINE_ERROR:{
			TITLE: "Oups… Nous ne pouvons joindre le serveur Cloud.",
			NOTE1: "1. Assurez vous que vous avez accès à internet.",
			NOTE2: "2. Le serveur Cloud est momentanément injoignable. Merci de rafraichir cette page ultérieurement.",
			NOTE3: "3. Si le problème persiste, contactez le <a target=\"_blank\" id=\"support\">Support Technique TP-Link </a>.",
			ERROR: "Erreur"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Version logicielle",
			HARDWARE_VERSION: 				"Version matérielle",
			HELP_SUPPORT: 					"Support",
			FAQ: 							"Questions Fréquentes (FAQ)",
			CONFIRM_REBOOT: 				"Etes vous certain de vouloir redémarrer le routeur ?",
			CONFIRM_LOGOUT: 				"Etes vous certain de vouloir vous déconnecter ?",
			UPGRADE_ALERT_1: 				"Le firmware actuel ne supporte pas le service Cloud TP-Link. Nous vous recommandons fortement de télécharger le firmware le plus récent depuis ww.tp-link.fr puis de l'installer.",
			UPGRADE_ALERT_2: 				"Le firmware actuel ne supporte pas le service Cloud TP-Link. Nous vous recommandons fortement de le mettre à jour en cliquant sur l'icône Mise à jour dans le coin supérieur droit.",
			ACCOUNT_UNLOGIN: 				"Compte",

			REBOOTING: 						"Redémarrage... <br/> Ne pas utiliser pendant le redémarrage.",

			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Scanner le QR code pour télécharger l'app Tether TP-Link",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Administrez aisément votre réseau depuis n'importe quel appareil iOS ou Android.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Contrôle total au creux de la main."
		},

		NAV: {
			QUICK_SETUP: 				"Configuration rapide",
			BASIC: 						"Configuration Basique",
			ADVANCED: 					"Configuration Avancée"
		},

		CONTROL: {
			LOGIN: 						"Connexion",
			LOGOUT: 					"Se déconnecter",
			UPDATE: 					"Mise à jour",
			REBOOT: 					"Redém-arrer",
			LED: 						"DEL",
			LED_ON: 					"DEL Allumée",
			LED_OFF: 					"DEL Éteinte",
			LED_DISABLED: 				"L'état des DELs ne peut être modifié quand le mode Nuit est actif"
		},

		LANGUAGE: {
			EN_US: 						"Anglais",
			ZH_CN: 						"Chinois"
		},

		REGION: {
			ALBANIA: 					"Albanie",
			ALGERIA: 					"Algérie",
			AMERICAN_SAMOA: 			"Samoa américaines",
			ARGENTINA: 					"Argentine",
			ARMENIA: 					"Arménie",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australie",
			AUSTRIA: 					"Autriche",
			AZERBAIJAN: 				"Azerbaïdjan",
			BAHAMAS: 					"Bahamas",
			BAHRAIN: 					"Bahreïn",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbade",
			BELARUS: 					"Biélorussie",
			BELGIUM: 					"Belgique",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Bermudes",
			BOLIVIA: 					"Bolivie",
			BOSNIA_HERZEGOWINA: 		"Bosnie Herzégovine",
			BRAZIL: 					"Brésil",
			BRUNEI_DARUSSALAM: 			"Brunei ",
			BULGARIA: 					"Bulgarie",
			CAMBODIA: 					"Cambodge",
			CANADA: 					"Canada",
			CAYMAN_ISLANDS: 			"Iles Cayman",
			CHILE: 						"Chili",
			CHINA: 						"Chine",
			COLOMBIA: 					"Colombie",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Croatie",
			CYPRUS: 					"Chypre",
			CZECH_REPUBLIC: 			"République Tchèque",
			DENMARK: 					"Danemark",
			DOMINICAN_REPUBLIC: 		"République Dominicaine",
			ECUADOR: 					"Equateur",
			EGYPT: 						"Egypte",
			EL_SALVADOR: 				"Salvador",
			ESTONIA: 					"Estonie",
			ETHIOPIA: 					"Ethiopie",
			FAEROE_ISLANDS: 			"Iles Féroé",
			FINLAND: 					"Finlande",
			FRANCE: 					"France",
			FRENCH_GUIANA: 				"Guyane Française",
			FRENCH_POLYNESIA: 			"Polynésie Française",
			GEORGIA: 					"Géorgie",
			GERMANY: 					"Allemagne",
			GREECE: 					"Grèce",
			GREENLAND: 					"Groenland",
			GRENADA: 					"Grenade",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haïti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong",
			HUNGARY: 					"Hongrie",
			ICELAND: 					"Islande",
			INDIA: 						"Inde",
			INDONESIA: 					"Indonésie",
			IRAN: 						"Iran",
			IRAQ: 						"Irak",
			IRELAND: 					"Irlande",
			ISRAEL: 					"Israël",
			ITALY: 						"Italie",
			JAMAICA: 					"Jamaïque",

			JAPAN: 						"Japon",
			JAPAN_1: 					"Japon 1",
			JAPAN_2: 					"Japon 2",
			JAPAN_3: 					"Japon 3",
			JAPAN_4: 					"Japon 4",
			JAPAN_5: 					"Japon 5",
			JAPAN_6: 					"Japon 6",

			JORDAN: 					"Jordanie",
			KAZAKHSTAN: 				"Kazakhstan",
			KENYA: 						"Kenya",

			NORTH_KOREA: 				"Corée du Nord",
			KOREA_REPUBLIC: 			"Corée du Sud",
			KOREA_REPUBLIC_3: 			"Corée du Sud 3",

			KUWAIT: 					"Koweït",
			LATVIA: 					"Lettonie",
			LEBANON: 					"Liban",
			LIBYA: 						"Libye",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Lituanie",
			LUXEMBOURG: 				"Luxembourg",
			MACAU: 						"Macao",
			MACEDONIA: 					"Macédoine",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malaisie",
			MALDIVES: 					"Maldives",
			MALTA: 						"Malte",
			MARTHINIQUE: 				"Martinique",
			MAURITIUS: 					"Maurice",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Mexique",
			MONACO: 					"Monaco",
			MONGOLIA: 					"Mongolie",
			MOROCCO: 					"Maroc",
			NEPAL: 						"Népal",
			NETHERLANDS: 				"Hollande",
			NETHERLANDS_ANTILLES: 		"Antilles néerlandaises",

			NEW_ZEALAND: 				" Nouvelle Zélande",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Norvège",
			NORTHERN_MARIANA_ISLANDS: 	"Iles Mariannes nord",
			OMAN: 						"Oman",
			PAKISTAN: 					"Pakistan",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papouasie nouvelle guinée",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Pérou",
			PHILIPPINES: 				"Philippines",
			POLAND: 					"Pologne",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Porto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Ile de la réunion",
			ROMANIA: 					"Roumanie",
			RUSSIA: 					"Russie",
			RWANDA: 					"Rwanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Arabie Saoudite",
			SINGAPORE: 					"Singapour",
			SLOVAK_REPUBLIC: 			"Slovaquie",
			SLOVENIA: 					"Slovénie",
			SOUTH_AFRICA: 				"Afrique du Sud",
			SPAIN: 						"Espagne",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Surinam",
			SWEDEN: 					"Suède",
			SWITZERLAND: 				"Suisse",
			SYRIA: 						"Syrie",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tanzanie",
			THAILAND: 					"Thaïlande",
			TRINIDAD_TOBAGO: 			"Trinidad et Tobago",
			TUNISIA: 					"Tunisie",
			TURKEY: 					"Turquie",
			UGANDA: 					"Ouganda",
			UKRAINE: 					"Ukraine",
			UNITED_ARAB_EMIRATES: 		"Emirats Arabes Unis",
			UNITED_KINGDOM: 			"Royaume Uni",
			UNITED_STATES: 				"Etats Unis d'Amérique",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Ouzbékistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Viêt-Nam",
			VIRGIN_ISLANDS: 			"Iles Vierges (USA)",
			YEMEN: 						"Yémen",
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
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midway ,Samoa",
			HAWAII: 					"(GMT-10:00) Hawaï",
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
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Açores, Cap Vert",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwich Mean Time, Dublin, Londres",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlin, Stockholm, Rome, Paris, Bruxelles",
			ATHENS_HELSINKI: 			"(GMT+02:00) Athènes, Helsinki, Eastern Europe, Israël",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Bagdad, Koweït, Nairobi, Ryad, Moscou",

			TEHERAN: 					"(GMT+03:30) Téhéran",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kaboul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Ekaterinbourg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Calcutta, Bombay, New Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Pékin, Hong Kong, Perth, Singapour",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Iakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaïde",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Solomon Is., New Calédonie",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamchatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku’alofa"
		},

		APPLIST:{
			APP:						"Application",
			GAME:						"GAME",
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
			DAY: 						"Jour",

			MONDAY: 					"Lundi",
			TUESDAY: 					"Mardi",
			WEDNESDAY: 					"Mercredi",
			THURSDAY: 					"Jeudi",
			FRIDAY: 					"Vendredi",
			SATURDAY: 					"Samedi",
			SUNDAY: 					"Dimanche",
			
			MON: 						"Lun.",
			TUES: 						"Mar.",
			WED: 						"Mer.",
			THUR: 						"Jeu.",
			FRI: 						"Ven.",
			SAT: 						"Sam.",
			SUN: 						"Dim.",

			JAN: 						"Jan.",
			FEB: 						"Fév.",
			MAR: 						"Mar.",
			APR: 						"Avr.",
			MAY: 						"Mai.",
			JUN: 						"Juin",
			JUL: 						"Juil",
			AUG: 						"Aou.",
			SEP: 						"Sep.",
			OCT: 						"Oct.",
			NOV: 						"Nov.",
			DEC: 						"Déc."

		},

		HOUR: {
			AM_1: 						"01 H.",
			AM_2: 						"02 H.",
			AM_3: 						"03 H.",
			AM_4: 						"04 H.",
			AM_5: 						"05 H.",
			AM_6: 						"06 H.",
			AM_7: 						"07 H.",
			AM_8: 						"08 H.",
			AM_9: 						"09 H.",
			AM_10: 						"10 H.",
			AM_11: 						"11 H.",
			AM_12: 						"12 H.",
			PM_1: 						"13 H.",
			PM_2: 						"14 H.",
			PM_3: 						"15 H.",
			PM_4: 						"16 H.",
			PM_5: 						"17 H.",
			PM_6: 						"18 H.",
			PM_7: 						"19 H.",
			PM_8: 						"20 H.",
			PM_9: 						"21 H.",
			PM_10: 						"22 H.",
			PM_11: 						"23 H.",
			PM_12: 						"24 H."
		},

		ORDER: {
			"1ST": 						"Premier",
			"2ND": 						"2ème",
			"3RD": 						"2ème",
			"4TH": 						"3ème",
			"5TH": 						"Dernier",
			"1ST_": 					"1er",

			TH: 						"ème"
		},

		GRID: {
			CLIENT_NUMBER: 				"Client N°",

			ID: 						"ID",
			MODIFY: 					"Modifier",
			STATUS: 					"Etat",
			ENABLE: 					"Activer",

			OPERATION: 					"Action",
			CHOOSE: 					"Sélectionner",
			DESCRIPTION: 				"Description",
			

			AUTO_REFRESH: 				"Actualisation auto",
			REFRESH: 					"Actualiser",
			NUMBER: 					"Numéro",
			ENABLED: 					"Activé",
			DISABLED: 					"Désactivé",
			ACTIVE: 					"Actif",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Ajouter",
			CHOOSE: 					"Sélectionner",
			EDIT: 						"Editer",
			DELETE: 					"Supprimer",
			DELETE_ALL: 				"Tout supprimer",
			REMOVE: 					"Enlever",
			RESET: 						"Réinitialiser",
			RESET_ALL: 					"Tout réinitialiser",
			DETECT: 					"Détecter",
			ENABLE: 					"Activer",
			DISABLE: 					"Désactiver",
			CLEAR: 						"Effacer",

			REFRESH: 					"Actualiser",
			SEARCH: 					"Cherche...",
			BROWSE: 					"Naviguer",

			SAVE: 						"Sauvegarder",
			BACK: 						"Retour",

			PREV: 						"Précédant",
			NEXT: 						"Suivant",
			FINISH: 					"Terminé",
			
			ON: 						"Actif",
			OFF: 						"Inactif",
			LOW: 						"Bas(se)",
			MIDDLE: 					"Moyen(ne)",
			HIGH: 						"Elevé(e)",
			
			OK: 						"OK",
			CANCEL: 					"Annuler",

			YES: 						"Oui",
			NO: 						"Non",
			
			CONNECTED: 					"Connecté",
			CONNECTING: 				"Connexion",
			DISCONNECTING: 				"Déconnexion",
			DISCONNECTED: 				"Déconnecté",

			PASSWORD_HINT: 				"Mot de passe",
			FILEBUTTONTEXT: 			"Naviguer",
			FILEBLANKTEXT: 				"Merci de choisir un fichier.",
			NOSELECTEDTEXT: 			"Choisir les options.",

			ADD_A_NEW_KEYWORD: 			"Ajouter un mot clé",

			SUCCESSED: 					"Réussite !",
			FORM_SAVED: 				"Sauvegardé",
			FORM_FAILED: 				"Echoué",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Sauvegardé",
			GRID_FAILED: 				"Echoué",
			GRID_NONE_SELECT: 			"Merci de sélectionner au moins un élément.",
			GRID_DELETE_COMFIRM: 		"Etes vous sûr de vouloir supprimer ces entrées ?",
			GRID_DELETE_ALL_COMFIRM: 	"Etes vous sûr de vouloir supprimer toutes ces entrées ?",
			GRID_MAX_RULES: 			"Nombre d'entrées maximum dépassé.",
			KEYWORD_MAX_OVERFLOW: 		"Le nombre de mot clés excède la limite.",

			NOTE: 						"Remarque :"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Format incorrect.",
			BLANKTEXT: 					"Ce champ est requis.",

			EMAIL: 						"Format d'email invalide.",
			NUMBER: 					"Format incorrect.",

			NUMBER_MIN: 				"Valeur incorrecte. Merci de saisir un nombre supérieur à %min.",
			NUMBER_MAX: 				"Valeur incorrect. Merci de saisir un nombre inférieur à %max.",

			NUMBER_MIN_MAX: 			"Valeur incorrecte. Merci de saisir un nombre compris entre %min et %max.",
			HEX: 						"Le champ doit contenir un nombre hexadécimal.",

			IP: 						"Format incorrect.",

			IP_NO_ALL_ZERO:				"l'adresse IP ne peut pas être 0.0.0.0.",
			IP_NO_LOOP:					"l'adresse IP ne peut pas être l'adresse de bouclage.",
			IP_NO_D_TYPE:				"L'adresse IP ne peut être de classe D.",
			IP_NO_E_TYPE:				"L'adresse IP ne peut être de classe D.",
			IP_NO_ALL_ONE:				"L'adresse IP ne peut pas être : 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"L'adresse IP ne peut commencer par 255.",
			IP_NO_FIRST_ZERO:			"L'adresse IP ne peut commencer par 0.",
			MASK_NO_ALL_ONE:			"Le masque ne peut être 255.255.255.255.",

			IPV6: 						"Format incorrect.",
			IPV6_NOT_GLOBAL:			"Format incorrect.",
			IPV6_NOT_PREFIX:			"Format incorrect.",
			IP_DOMAIN: 					"Format incorrect.",
			IPV6_DOMAIN: 				"Format incorrect.",
			MAC: 						"Format incorrect.",
			MULTI_MAC:					"Format incorrect.",
			DATE: 						"Format incorrect.",
			DATE_INVALID: 				"Merci d'entrer une date comprise entre 01/01/1970 et 31/12/2030.",
			MASK: 						"Format incorrect.",
			DOMAIN: 					"Format incorrect.",
			STRING_DOMAIN:              "Format incorrect.",
			USER: 						"Format incorrect.",
			NOTE: 						"Format incorrect.",
			PWD: 						"Format incorrect.",
			SSID: 						"Format incorrect.",
			NAME:						"Format incorrect.",
			ASCII_VISIBLE:				"Format incorrect.",
			STRING_VISIBLE:				"Format incorrect.",
			STRING_VISIBLE_NO_COMMA:    "Format incorrect.",
			STRING_VISIBLE_ALLOW_BLANK: "Format incorrect.",
			NAME_SPECIAL: 				"Merci de saisir 4 à 15 lettres, chiffre ou -et_.",
			VPN_NAME_PWD: 				"Merci de saisir 1 à 15 lettres, chiffre ou -et_."	
			
		},


		ERROR: {			
			"00000001":					"Type de fichier incorrect.",
			"00000002":					"Erreur de somme de contrôle.",
			"00000003":					"Le fichier est trop volumineux.",
			"00000004":					"Erreur de téléversement.",
			"00000005":					"Erreur de redémarrage.",
			"00000006":					"Erreur inconnue.",
			"00000007":					"L'élément existe déjà, merci de refaire la saisie.",

			"00000009":					"Merci d'utiliser la valeur par défaut : 21 ou saisir une valeur comprise entre 1024 et 65535.",
			"00000010":					"Le port est un nombre.",

			"00000011":					"Le nom d'utilisateur doit être identique à la valeur De.",
			"00000012": 				"le nom d'utilisateur doit commencer par une lettre.",

			"00000021":					"Format incorrect.",

			"00000032": 				"La valeur doit être inférieure à faible.",
			"00000033": 				"La valeur doit être inférieure à moyenne et faible.",
			"00000034": 				"Valeur incorrecte, merci de saisir un nombre compris entre 5 et 7200.",

			"00000039": 				"Merci d'utiliser la valeur par défaut : 0 ou saisir une valeur comprise entre 30 et 86400.",
			"00000040": 				"le SSID et l'adresse MAC sont requis.",

			"00000042": 				"Merci d'utiliser la valeur par défaut : 80 ou saisir une valeur comprise entre 1024 et 65535.",

			"00000045": 				"La passerelle par défaut et l'adresse IP LAN doivent être dans le même sous-réseau. Merci de refaire la saisie.",

			"00000047": 				"L'adresse IP LAN et la plage DHCP doivent être dans le même sous réseau. Merci de refaire la saisie.",

			
			"00000049":					"Réseau de destination incorrect.",

			"00000050": 				"Adresse IP de serveur DNS incorrecte, Merci de saisir une autre adresse IP.",
			"00000051": 				"Cette adresse MAC existe déjà. Merci de refaire la saisie.",
			"00000052": 				"L'adresse IP existe déjà. Merci d'en saisir une autre.",

			"00000053": 				"l'adresse IP de départ ne peut être plus grande que l'adresse IP de fin. <br/>Merci de refaire la saisie.",

			"00000054": 				"L'adresse IP LAN et la plage DHCP doivent être dans le même sous réseau. Merci de refaire la saisie.",

			"00000055": 				"L'adresse IP ne peut être identique à l'adresse IP LAN.",

			"00000056": 				"L'adresse IP distante et l'adresse IP LAN ne peuvent être dans le même sous réseau. Merci de refaire la saisie.",

			"00000057": 				"Mot de passe PSK incorrect, merci de refaire la saisie.",
			"00000058": 				"Mot de passe WEP incorrect, merci de refaire la saisie.",

			"00000059": 				"Adresse IP et masque de sous réseau incorrects. Merci de refaire la saisie.",

			"00000060": 				"L'adresse IP WAN et l'adresse IP LAN ne peuvent être dans le même sous réseau.<br/>Merci de refaire la saisie.",

			"00000061": 				"L'heure de début doit être antérieure à l'heure de fin.",

			"00000062": 				"Ce champ est requis.",
			"00000063": 				"Ce champ est requis.",

			"00000064": 				"Il est impossible de bloquer le client administrant actuellement le routeur",
			"00000065": 				"Cet élément est en conflit avec un autre merci de vérifier.",
			
			"00000066": 				"Le Mot de passe doit comporter entre 8 et 63 caractères ou 64 caractères hexadécimaux.",
			"00000067": 				"Le Mot de passe doit comporter 10 caractères hexadécimaux.",
			"00000068": 				"Le Mot de passe doit comporter 5 caractères ASCII.",
			"00000069": 				"Le Mot de passe doit comporter 26 caractères hexadécimaux.",
			"00000070": 				"Le Mot de passe doit comporter 13 caractères ASCII.",
			"00000071": 				"Le Mot de passe doit comporter 32 caractères hexadécimaux.",
			"00000072": 				"Le Mot de passe doit comporter 16 caractères ASCII.",
			"00000073": 				"Le Mot de passe doit comporter moins de 64 caractères.",

			"00000074": 				"Type de fichier incorrect.",

			"00000075": 				"la longueur du code PIN est de 8 chiffres.",

			"00000076": 				"La saisie est en conflit avec d'autres préexistantes, merci de vérifier port et protocole de déclenchement.",
			"00000077": 				"L'adresse IP ne peut être identique à l'adresse IP LAN.",
			"00000078": 				"l'adresse IP de l'hôte ne peut être dans le même sous réseau que l'adresse IP LAN.",

			"00000080": 				"Erreur de confirmation du Mot de passe, merci de recommencer.",

			"00000088": 				"Cette action n'est pas autorisée pour l'administration distante.",
			"00000089": 				"Vous avez dépassé %num essai(s), merci d'essayer dans deux heures.",

			"00000090": 				"l'adresse IP de destination ne peut être l'adresse IP LAN.",
			"00000091": 				"l'adresse IP de destination ne peut être l'adresse IP WAN.",

			"00000092": 				"La passerelle par défaut et l'adresse IP LAN doivent être dans le même sous-réseau. <br/> Merci de refaire la saisie.",
			"00000093": 				"L'adresse IP WAN et l'adresse IP LAN ne peuvent être dans le même sous réseau. <br/> Merci de refaire la saisie.",

			"00000094": 				"Les ID de VLAN ne peuvent être identiques.",
			"00000095": 				"Au moins un port internet requis.",

			"00000096": 				"Le mot existe déjà.",

			"00000097": 				"Les réglages définis pour les fréquences 2.4GHz ne seront pas actifs tant que le bouton Wi-Fi n'est pas sur la position ON.",
			"00000098": 				"Les réglages définis pour les fréquences 5GHz ne seront pas actifs tant que le bouton Wi-Fi n'est pas sur la position ON.",
			"00000099": 				"Les réglages définis pour les fréquences 2.4GHz et 5GHz ne seront pas actifs tant que le bouton Wi-Fi n'est pas sur la position ON.",

			"00000100": 				"Le réseau 5GHz n'est pas disponible en raison des restrictions qui s'appliquent dans votre pays.",

			"00000101": 				"Le signal Wi-Fi est désactivé. Si vous souhaitez utiliser le Wi-Fi, placez le bouton Wi-Fi sur la position ON.",
			"00000102": 				"Le signal Wi-Fi est désactivé. Si vous souhaitez utiliser le Wi-Fi, placez le bouton Wi-Fi sur la position ON.",

			"00000103": 				"Le signal Wi-Fi est désactivé. Si vous souhaitez utiliser le Wi-Fi, placez le bouton Wi-Fi sur la position ON.",
			"00000104": 				"Le signal Wi-Fi est désactivé.",

			"00000105": 				"QoS et IPTV ne peuvent être activés simultanément.",

			"00000106": 				"L'adresse IP ne peut être identique à l'adresse IP LAN.",
			
			"00000107": 				"La destination existe déjà.",

			"00000110": 				"l'adresse IP et l'adresse LAN IP doivent être dans le même sous réseau.",
			
			"00000111": 				"QoS et <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> ne peuvent être activés en même temps.",
			"00000112": 				"La fonction WDS peut fonctionner en 2.4GHZ ou en 5GHz.",
			"00000113": 				"WDS et réseau invités ne peuvent être activés en même temps.",
			"00000114": 				"Les statistiques de trafic et <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> ne peuvent être activés en même temps.",
			"00000115": 				"IPTV et <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> ne peuvent être activés simultanément.",

			"00000117": 				"Le nom de domaine existe déjà.",
			"00000118": 				"Le nombre de nom de domaine excède la limite.",
			"00000119":				"NAT Boost sera désactivé quand la <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> ou les <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Statistiques de trafic</a> sont actifs.",

			"00000120": 				"Le Mot de passe doit comporter entre 5 et 13 caractères ASCII.",
			"00000121": 				"Le Mot de passe doit comporter entre 10 et 26 caractères hexadécimaux.",
			"00000122": 				"Le nom d'utilisateur et le Mot de passe sont vides, êtes vous sûr de vouloir continuer ?",
			"00000123": 				"Sauvegarde… <br/>Merci de ne pas utiliser pendant ce processus.",
			"00000124": 				"Le code PIN du routeur est bloqué en raison d'un nombre excessif de connexions avec un code erroné. Merci de générer un nouveau code.",

			"00000125": 				"Le nombre de règles de QoS excède la limite.",
			"00000126": 				"La taille du fichier excède la limite.",
			"00000127": 				"Le contenu du fichier est incorrect.",
			"00000128": 				"Merci de choisir au moins une application.",
			"00000129": 				"Merci de choisir au moins un port physique.",
			"00000130":					"La fonction WPS est désactivée.",
			"00000131": 				"L'adresse du serveur NTP ne peut être une adresse de bouclage.",
			"00000132": 				"Echec du mode switch. Merci de réessayer ou de redémarrer le routeur.",
			"00000133": 				"Adresse IP de DMZ incorrecte. Merci d'en saisir une autre.",
			"00000134":  				"Adresse IP interne incorrecte. Merci d'en saisir une autre.",
			"00000135": 				"Erreur du fichier de firmware",
			"00000136": 				"Erreur de fichier de sauvegarde.",
			"00000137": 				"Le nom d'utilisateur est vide, êtes vous sûr de vouloir continuer?",
			"00000138": 				"Le mot de passe est vide, êtes vous sûr de vouloir continuer?",
			"00000139": 				"Paramètres de récupération du mot de passe incorrects.",
			"00000140": 				"Code incorrect.",
			"00000141": 				"Récupération du mot de passe désactivée.",
			"00000142": 				"Echec de l'envoi du code. Merci de vérifier votre connexion à internet.",
			"00000143": 				"Adresses email invalides.",
			"00000144": 				"Contenu de l'email invalide.",
			"00000145": 				"Ne peut joindre l'hôte.",
			"00000146": 				"Echec de l'authentification.",
			"00000147": 				"Le port doit être compris entre 1 et 65535.",
			"00000148": 				"Pour une étendue de ports, le N° de port de départ doit être inférieur au port de fin. Merci de refaire la saisie.",
			"00000149": 				"Les n° de ports se chevauchent. Merci de refaire la saisie.",
			"00000150": 				"Adresse IP WAN et masque de sous réseau incorrects. Merci de refaire la saisie.",
			"00000151": 				"Merci de sélectionner au moins un jour.",
			"00000152": 				"Merci de définir les horaires d'accès à internet.",
			"00000213":					"L'adresse IP du serveur DNS et l'adresse IP LAN ne peuvent pas être dans le même sous-réseau.<br/> Merci d'en saisir une autre.",
			"10000139": 				"Pas de connexion à internet.",
			"10000140": 				"Requête hors délai. Merci de vérifier votre connexion à internet puis réessayer.",
			"10000158": 				"Le port WAN est déconnecté.",
			"10000159": 				"Impossible de se connecter au serveur Cloud. Merci de vérifier contacter votre fournisseur d'accès puis réessayer.",
			"10000160": 				"Impossible d'obtenir une adresse IP depuis le serveur DHCP. Merci de vérifier le type de connexion WAN ou réessayer plus tard.",
			"10000161": 				"Echec de l'authentification PPPoE. Merci de vérifier votre nom d'utilisateur et votre mot de passe.",
			"10000162": 				"Impossible de se connecter au serveur PPPoE.",

			"10000164": 				"Echec de l'authentification PPTP. Merci de vérifier votre nom d'utilisateur et votre mot de passe.",
			"10000165": 				"Impossible de se connecter au serveur PPTP.",

			"10000167": 				"Echec de l'authentification L2TP. Merci de vérifier votre nom d'utilisateur et votre mot de passe.",
			"10000168": 				"Impossible de se connecter au serveur L2TP.",
			"10000169": 				"Erreur inconnue. Merci de réessayer plus tard.",
			"10000172": 				"Echec de connexion.",

			"10000185": 				"Erreur système.",	
			"10000186": 				"Erreur du fichier de firmware",	
			"10000187": 				"Erreur de téléchargement du firmware.",	
			"10000188": 				"Erreur de mise à jour du firmware",	
			"10000191": 				"Incapable de télécharger le fichier de firmware.",
			"10000192": 				"Erreur de mise à jour du firmware",
			"10000193": 				"Incapable de se connecter au serveur.",	
			"10000194": 				"Incapable de se connecter au serveur Cloud. Merci de réessayer plus tard.",
			"10000195": 				"Vous ne pouvez pas redéfinir le mot de passe puisque vous en avez défini un. ",
			
			"E3002":                    "Délai d'attente dépassé.", 
			"E10000": 					"Erreur commune.",
			"E20002": 					"Délai d'attente dépassé.",
			"E20003": 					"Le serveur Cloud est occupé. Merci de réessayer plus tard.",
			"E20107": 					"Saisie incorrecte.",
			"E20200": 					"Format d'email invalide.",
			"E20502": 					"Incapable d'associer l'appareil. Merci de réessayer plus tard.",
			"E20503": 					"Incapable de désassocier l'appareil. Merci de réessayer plus tard.",
			"E20506": 					"L'opération à échoué. L'appareil est déjà associé à un autre compte Cloud.",
			"E20507": 					"L'appareil est désassocié du compte.",
			"E20508": 					"Le nombre de comptes associés à déjà atteint sa limite maximum.",
			"E20509": 					"Les comptes utilisateurs n'ont pas le droit d'associer de nouveaux utilisateurs.",
			"E20571": 					"Cet appareil est hors ligne.",
			"E20580": 					"L'opération à échoué. Ce compte n'est pas associé à l'appareil.",
			"E20600": 					"Cet email n'est pas enregistré.",
			"E20601": 					"Nom d'utilisateur ou mot de passe incorrect.",
			"E20602": 					"Ce compte n'est pas encore activé.",
			"E20603": 					"Cet email est déjà enregistré.",
			"E20604": 					"Nom d'utilisateur invalide. Merci de saisir une adresse email ou un numéro de téléphone.",
			"E20606": 					"Incapable d'envoyer l'email d'activation du compte.",
			"E20615": 					"Mot de passe invalide. Merci de saisir 6 à 32 caractères ASCII sans espaces.",
			"E20616": 					"Mot de passe invalide. Merci de saisir 6 à 32 caractères ASCII sans espaces.",
			"E20617": 					"Ce compte n'existe pas.",
			"E20618": 					"Ce compte n'existe pas.",
			"E20620": 					"Surnom invalide. Merci de saisir 1 à 6 caractères.",
			"E20661": 					"Ce compte va être bloqué 2H en raison d'un nombre de tentatives d'authentification trop important (20 essais en 30minutes).",
			"E20662": 					"Cet appareil est bloqué. Dans les 24H à venir, il ne répondra à aucune requête de code de vérification.",
			"E20671": 					"Incapable de vérifier le compte.",
			"E20672": 					"Incapable de vérifier le compte. Le lien d'activation de compte a expiré. Merci de soumettre un nouvelle requête.",
			"E20673": 					"Le lien d'activation de compte a expiré. Merci de soumettre un nouvelle requête.",
			"E20674": 					"Incapable de réinitialiser le mot de passe.",
			"E20675": 					"Ce compte est actuellement connecté ailleurs.",
			"E22000": 					"Saisie incorrecte.",
			"E22001": 					"Le nom de domaine est déjà enregistré.",
			"E22002": 					"Le nombre  de noms de domaines enregistrés à déjà atteint sa limite maximale.",
			"E22003": 					"Le nombre de nom de domaines associés à déjà atteint sa limite maximale.",
			"E22004": 					"Ce nom de domaine est déjà associé est déjà associé à un autre appareil.",
			"E22006": 					"Erreur système. Merci de réessayer plus tard.",
			"E22007": 					"Le nom de domaine contient des mots sensibles. Merci d'essayer un autre nom.",
			"E22008": 					"Le nom de domaine n'existe pas.",

			"E50101": 					"Le port WAN est déconnecté.",
			"E50102": 					"Impossible de se connecter au serveur Cloud. Merci de vérifier contacter votre fournisseur d'accès puis réessayer.",
			"E50103": 					"Impossible d'obtenir une adresse IP depuis le serveur DHCP. Merci de vérifier le type de connexion WAN ou réessayer plus tard.",
			"E50111": 					"Echec de l'authentification PPPoE. Merci de vérifier votre nom d'utilisateur et votre mot de passe.",
			"E50112": 					"Impossible de se connecter au serveur PPPoE.",
			"E50121": 					"Echec de l'authentification PPTP. Merci de vérifier votre nom d'utilisateur et votre mot de passe.",
			"E50122": 					"Impossible de se connecter au serveur PPTP.",
			"E50131": 					"Echec de l'authentification L2TP. Merci de vérifier votre nom d'utilisateur et votre mot de passe.",
			"E50132": 					"Impossible de se connecter au serveur L2TP.",
			"E50140": 					"Erreur inconnue. Merci de réessayer plus tard.",
			"E51215": 					"Requête hors délai. Merci de vérifier votre connexion à internet puis réessayer.",
			"E_CLOUD_SERVER": 			"Erreur du serveur. Merci d'essayer plus tard.",
			"E5000": 					"Incapable de se connecter au serveur Cloud.",
			"E5001": 					"Identifiant TP-Link (email) incorrect. Ou bien votre appareil est hors ligne et seul l'admin (%email) dispose d'un accès hors ligne.",
			"E5002": 					"Mot de passe incorrect."
		},

		MENU: {
			STATUS: 					"Etat",
			NETWORK: 					"Réseau",
			NETWORK_MAP: 				"Cartographie du réseau",
			INTERNET: 					"Internet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"Serveur DHCP",
			DYNAMIC_DNS: 				"DNS Dynamique",
			ADVANCED_ROUTING: 			"Routage Avancé",

			WIRELESS: 					"Wi-Fi",
			WIRELESS_SETTINGS: 			"Paramètres Wi-Fi",
			WDSBRIDGING: 				"Pontage WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"Filtrage MAC",
			WIRE_STATISTICS: 			"Statistiques",
			
			
			GUEST_NETWORK: 				"Réseau invités",
			WIRELESS_SETTINGS: 			"Paramètres Wi-Fi",
			STORAGE_SHARING: 			"Partage de stockage",
			NAT_FORWARDING: 			"Transferts NAT",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Serveurs Virtuels",
			PORT_TRIGGERING: 			"Déclenchement par Port",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Paramètres USB",
			BASIC_SET: 					"Paramètres basiques",
			DISK_SET: 					"Paramètres d'appareil",
			FOLDER_SHARING: 			"Partages",
			STORAGE_SHARING: 			"Partage de stockage",
			FTP_SERVER: 				"Serveur FTP",
			MEDIA_SERVER: 				"Serveur de médias",
			PRINT_SERVER: 				"Serveur d'impression",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Contrôle parental",
			
			QOS:  						"QoS",
			DATABASE:  					"Base de données",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Carte",
			SB_MAP: 					"Carte",
			SB_BANDWIDTH:  				"Bande passante",
			SB_PRIORITY: 				"Priorité",
			SB_STATISTICS: 				"Statistiques",

			
			SECURITY: 					"Sécurité",
			SETTINGS: 					"Paramètres",
			ACCESS_CONTROL: 			"Contrôle d'accès",
			IP_MAC_BINDING: 			"Association IP&MAC",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Outils Système",
			TIME_SETTINGS: 				"Paramètres de temps",
			DIAGNOSTIC: 				"Diagnostiques",
			FIRMWARE_UPGRADE: 			"Mise à jour logicielle",
			BACKUP_RESTORE: 			"Sauvegarde et restauration",
			ADMINISTRATION: 			"Administration",
			SYSTEM_LOG: 				"Journal système",
			STATISTICS: 				"Statistiques de trafic",
			SYSTEM_PARAMETERS: 			"Paramètres système",
			ACCOUNT: 					"Cloud TP-Link",
			
			VPN: 						"Serveur VPN",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"VPN PPTP",
			VPN_CONNECTIONS: 			"Connexions VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Pays et fuseau horaire",
			INTERNET_CONNECTION_TYPE: 	"Type de connexion internet",
			WIRELESS_SETTINGS: 			"Paramètres Wi-Fi",
			SUMMARY: 					"Résumé",
			SETUP_COMPLETE: 			"Test de la connexion internet",
			SETUP_COMPLETE_CLOUD: 			"Service Cloud TP-Link",

			EXIT: 						"Sortir",
			NEXT: 						"Suivant",
			SAVE: 						"Sauvegarder",
			FINISH: 					"Terminé",
			OK: 						"OK",
			NONE: 						"Echec de la détection.",

			REGION: 					"Pays",
			TIME_ZONE: 					"Fuseau horaire",

			AUTO_DETECT: 				"Détection automatique",
			DYNAMIC_IP: 				"IP Dynamique",
			STATIC_IP: 					"IP Statique",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Si vous n'êtes pas sûr du type de votre connexion internet, utilisez la Détection automatique ou consultez votre Fournisseur d'Accès à Internet (FAI) pour solliciter son assistance.",

			DYNAMIC_IP_INFO: 			"Si votre FAI:(Fournisseur d’Accès à Internet) n'autorise l'accès à internet que depuis une adresse MAC spécifique, vous devez cloner cette adresse MAC pour permettre l'accès aux autres appareils. Si vous n'êtes pas sûr, choisir NE PAS cloner l'adresse MAC.",
			MAC_CLONE_NO: 				"Ne pas cloner l'adresse MAC",
			MAC_CLONE_YES: 				"Cloner l'adresse MAC de l'ordinateur",
			MAC_CLONE_NOTE: 			"Si vous choisissez de cloner l'adresse MAC. Assurez vous que l'adresse MAC de l'ordinateur est enregistrée auprès de votre FAI avant de cliquer sur Suivant.",

			PPPOE_INFO: 				"Merci de saisir vos nom d'utilisateur et Mot de passe PPPoE.",
			
			STATIC_IP_INFO: 			"Merci de saisir vos paramètres IP.",

			L2TP_INFO: 					"Merci de saisir vos nom d'utilisateur et Mot de passe L2TP.",
			PPTP_INFO: 					"Merci de saisir vos nom d'utilisateur et Mot de passe PPTP.",
			
			USERNAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			SERVER_IP_ADDRESS_NAME: 	"IP de serveur VPN/Nom de domaine",
			IP_ADDRESS: 				"Adresse IP",
			SUBNET_MASK: 				"Masque de sous réseau",
			DEFAULT_GATEWAY: 			"Passerelle par défaut",
			PRIMARY_DNS: 				"DNS Primaire",
			SECOND_DNS: 				"DNS Secondaire",
			OPTIONAL: 					"(Optionnel)",
			
			ON: 						"Actif",
			OFF: 						"Inactif",
			WIRELESS_24GHZ: 			"Wi-Fi 2.4GHz",
			WIRELESS_5GHZ: 				"Wi-Fi 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Activer l'émetteur Wi-Fi",
			NAME_SSID: 					"Nom de réseau (SSID)",

			SUMMARY_INFO1: 				"Vous devez reconnecter vos appareils au nouveau réseau Wi-Fi avant de cliquer sur le bouton  <strong>Suivant</strong>.",
			SUMMARY_INFO2: 				"Le nom de votre réseau Wi-Fi et son Mot de passe ont été modifiés comme suit",
			SUMMARY_INFO3: 				"Assurez vous de vous connecter au nouveau réseau.",

			WIRELESS_24GHZ_SSID: 		"Nom du réseau 2.4GHz (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Mot de passe du réseau 2,4GHz",
			WIRELESS_5GHZ_SSID: 		"Nom du réseau 5GHz (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Mot de passe du réseau 5GHz",

			SORRY: 						"Echec.",
			SUCCESS: 					"Réussite !",
			TEST_INTERNET_SUCCESS_INFO: "Réussi ! Cliquer sur OK puis Terminer pour achever le paramétrage rapide.",

			TEST_INTERNET_FAILED_INFO_0:"Merci de vérifier que tous les paramètres sont corrects puis essayez à nouveau. Si tous les paramètres sont corrects. Merci de redémarrer votre modem, attendez 2 minutes et cliquez à nouveau sur tester la connexion internet. Si vous n'utilisez pas un modem, vous devriez contacter votre FAI (Fournisseur d'accès à internet) pour solliciter son aide.",
			TEST_INTERNET_FAILED_INFO_1: "Echec. Oups… La connexion internet n'est pas configurée avec succès. <br/>1. Assurez vous que tous les câbles sont convenablement connectés.<br/>2. Cliquer sur Retour et vérifier que les paramètres de la connexion internet sont corrects.<br/>3. Contactez notre support technique si le problème existe.",
			SUMMARY_INFO4: 				"Désolé ! Nous avons détecté que vous n'avez pas reconnecté vos appareils au nouveau réseau Wi-Fi. Merci de le faire puis cliquez sur <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Fécilicitations !",
			COMPLETE_INFO_0: 			"Vous avez achevé le paramétrage rapide.",
			COMPLETE_INFO_1:			"Cliquer sur le test de connexion internet ci-dessous, puis cliquez sur terminé.",
			COMPLETE_INFO_2: 			"Vous n'êtes pas connecté à votre compte Cloud TP-Link. Vous pouvez vous connecter ultérieurement depuis le menu Basique > Cloud TP-Link .",
			TEST_INTERNET: 				"Test de la connexion internet",

			
			RESET_USER_TITLE: 			"Définir un nouveau nom d'utilisateur et un nouveau Mot de passe",
			NEW_USERNAME: 				"Nouveau nom d'utilisateur",
			NEW_PASSWORD: 				"Nouveau mot de passe",
			CONFIRM_PASSWORD: 			"Confirmer le Mot de passe",
			
			NO_ACCOUNT: 				"Pas d'Identifiant TP-Link ?",
			REGISTER_NOW: 				"S'enregistrer maintenant",
			REGISTER_SKIP: 				"Connexion ultérieure",
			LOGIN: 						"Se connecter",
			REGISTER_NEW:				"Enregistrer un nouveau compte",
			COMPLETE_INFO_EMAIL_PREFIX: "Votre identifiant TP-Link est : ",
			COMPLETE_INFO_EMAIL_SUFFIX: "Nous vous recommandons fortement de vous connecter en utilisant ce compte pour une gestion facile de votre appareil et d'autres fonctions liées au Cloud TP-Link.",

			INTERNET_OK: 				"Félicitations ! Paramétrage réseau réussi. Profitez d'internet.",
			CLOUD_WIZARD: 				"Pour plus de fonctionnalités Cloud TP-Link : Connectez vous avec votre  <a class=\"link\" href=\"#\">Identifiant TP-Link</a>.",
			ACCOUNT_DESP:               "Avec un Identifiant TP-Link, vous pouvez : ", 
			ACCOUNT_DESP_SUB1:          "Accéder à votre appareil et à vos serveurs locaux (FTP, HTTP, etc…) depuis n'importe ou via internet.",
			ACCOUNT_DESP_SUB2:          "Maintenir le firmware à jour avec la fonction de mise à jour en ligne.",
	        ACCOUNT_DESP_SUB3:          "Administrer plusieurs appareils avec un seul compte.",
			
			CONFIRM: 					"Confirmer"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Etat Internet ",

			GHZ24: 						"2. 4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Type de connexion",
			SECONDARY_CONN: 			"Connexion secondaire",

			POOR_CONNECTED: 			"Connexion limitée",
			UNPLUGGED: 					"Le port WAN n'est pas connecté.",
			
			CONNECTED: 					"Connecté",
			DISCONNECTED: 				"Déconnecté",

			INTERNET_IP_ADDR: 			"Adresse IP",
			
			IP_ADDR: 					"Adresse IP",
			MAC_ADDR: 					"Adresse MAC",
			GATEWAY: 					"Passerelle",

			AUTO: 						"Auto",
			
			ROUTER: 					"Routeur",
			WIRELESS_CLIENTS: 			"Clients Wi-Fi",
			HOST_CLIENTS: 				"Clients Wi-Fi",
			GUEST_CLIENTS: 				"Invités",
			WIRE_CLIENTS: 				"Clients filaires",
			PRINTER: 					"imprimante",
			USB_DISK: 					"Disque USB",
			WIRELESS: 					"Wi-Fi",
			NAME: 						"Nom",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Canal",
			MAC: 						"Adresse MAC",
			
			WIRELESS_24GHZ: 			"Wi-Fi 2.4GHz",
			WIRELESS_5GHZ: 				"Wi-Fi 5GHz",
			
			GUEST_24GHZ: 				"Réseau invités 2.4GHz",
			GUEST_5GHZ: 				"Réseau invités 5GHz",
			
			STATUS: 					"Etat",
			TOTAL: 						"Capacité",
			AVAILABLE: 					"Disponible",
			GB: 						"Go",
			BRAND: 						"Marque",

			DYNAMIC_IP: 				"IP Dynamique",
			STATIC_IP: 					"IP Statique",
			SUBNET_MASK: 				"Masque de sous réseau",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Câble BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Tunnel 6to4",
			NONE: 						"aucun"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Internet",
			AUTO_DETECT: 				"Détection automatique",
			INTERNET_CONN_TYPE: 		"Type de connexion internet",
			DYNAMIC_IP: 				"IP Dynamique",
			STATIC_IP: 					"IP Statique",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"Câble BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"Le port WAN n'est pas connecté.",
			NONE: 						"aucun",
			DETECT_FAIL: 				"Echec de la détection automatique",
			SECONDARY_CONN: 			"Connexion secondaire",

			DYNAMIC_YES: 				"Ne pas cloner l'adresse MAC",
			DYNAMIC_NO: 				"Cloner l'adresse MAC de l'ordinateur",
			
			IP_ADDR: 					"Adresse IP",
			SUBNET_MASK: 				"Masque de sous réseau",
			DEFAULT_GATEWAY: 			"Passerelle par défaut",
			PRIMARY_DNS: 				"DNS Primaire",
			SECOND_DNS: 				"DNS Secondaire",
			OPTIONAL: 					"(Optionnel)",
			USER_NAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			SERVER_IP_ADDR_NAME: 		"IP de serveur VPN/Nom de domaine",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Si vous n'êtes pas sûr du type de votre connexion internet, utilisez la Détection automatique ou consultez votre Fournisseur d'Accès à Internet (FAI) pour solliciter son assistance."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Paramètres Wi-Fi",
			MODE_2G: 					"Wi-Fi 2.4GHz",
			MODE_5G: 					"Wi-Fi 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nom de réseau (SSID)",
			WIRELESS_PASSWORD: 			"Mot de passe",
			ENABLE_WIRELESS: 			"Activer l'émetteur Wi-Fi",
			SAVE: 						"Sauvegarder",
			ENCRYPTION_2G_NOTICE:		"Le réseau 2.4GHz est chiffré en  %s.",
			ENCRYPTION_5G_NOTICE:		"Le réseau 5GHz est chiffré en  %s.",
			ENCRYPTION_2G_NO: 			"Le réseau 2,4GHz n'est pas sécurisé.",
			ENCRYPTION_5G_NO: 			"Le réseau 5GHz n'est pas sécurisé.",
			ENCRYPTION_SURE: 			"Etes vous sur de vouloir continuer ?",

			HIDE_SSID: 					"Masquer le SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Paramètres basiques",
			TITIL_NEW:					"Disque et compte",
			DISK_SET:					"Paramètres d'appareil",

			SELFLY_REMOVE:				"Déconnexion sécurisée",
			SCANING:					"Détection.",
			SCAN_RESULT:				"%n disque(s) trouvé(s)",
			
			DISKS:						"Disques",
			USERS: 						"Compte utilisateur",
			DEVICENAME: 				"Nom d'appareil",
			VOLUMN: 					"Volume",

			USBSPACE: 					"Espace utilisé",
			FREESPACE: 					"Espace libre",
			STATUS: 					"Etat",
			INACT: 						"Inactivé",
			USAGE: 						"Utilisation",
			CAPACITY: 					"Capacité",
			OPERATION: 					"Action",
			
			ACC: 						"Gestion de compte",
			USERNAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			USE_LOGIN: 					"Utiliser l'utilisateur de connexion",
			SCAN: 						"Rechercher",
			ENJECT_ALL: 				"Tout éjecter",
			ENJECT: 					"Ejecter",
			ADD_USER: 					"Ajouter un utilisateur",
			AUTH: 						"Autorité",


			LOCATION: 					"Adresse",
			MOBILE_ISP: 				"FAI Mobile",
			DIAL_NUMBER: 				"Numéro de connexion",
			APN: 						"APN",
			USERNAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			MTU_SIZE: 					"Taille de la MTU",
			OPTIONAL: 					"(Optionnel)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Contrôle parental",

			DEVICE_CTR: 				"Appareils soumis au contrôle parental",
			ID: 						"ID",
			DEVICE: 					"Nom d'appareil",
			MAC_ADDRESS: 				"Adresse MAC",
			TIME: 						"Horaires d'accès à Internet",
			DESCRIPTION: 				"Description",
			ENABLE: 					"Activer",
			ENABLE_THIS_ENTRY: 			"Activer",
			OPTIONAL: 					"(Optionnel)",
			BTN_VIEW: 					"Visualiser les appareils connectés",
			ACCESS_DEVICES_LIST: 		"liste d'appareils",
			OPT: 						"Action",
			STATUS: 					"Etat"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Réseau invités",
			MODE_2G: 					"Wi-Fi 2.4GHz",
			MODE_5G: 					"Wi-Fi 5GHz",
			WIRELESS_NETWORK_NAME: 		"Nom de réseau (SSID)",
			WIRELESS_PASSWORD: 			"Mot de passe",
			ENABLE_WIRELESS: 			"Activer Réseau invités",
			SAVE:						"Sauvegarder",
			HIDE_SSID: 					"Masquer le SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Compte Cloud",
			OFFLINE_NOTE_TITLE: 		"Appareil hors ligne.",
			LOGIN_NOTE_TITLE: 			"Oups…",
			LOGIN_OFFLINE_NOTE: 		"L'appareil est hors ligne. Merci de vérifier la configuration réseau, le WAN pour vous assurer que les paramètres appropriés ont été correctement saisis.",

			EMAIL: 						"E-Mail",
			PASSWORD: 					"Mot de passe",
			FORGET_PASSWORD: 			"Mot de passe oublié ?",

			CLOUD_WIZARD: 				"Pour plus de fonctionnalités Cloud TP-Link : Connectez vous avec votre  <a class=\"link\" href=\"#\">Identifiant TP-Link</a>.",
			NO_ACCOUNT: 				"Pas d'Identifiant TP-Link ?",
			REGISTER_NOW: 				"S'enregistrer maintenant"
		},
		STATUS: {
			TITLE: 						"Etat",
			INTERNET:					"Internet",
			WIRELESS:					"Wi-Fi",
			LAN:						"LAN",
			USB_TITLE:					"Appareils USB",
			PERFORMANCE: 				"Performances",
			GUEST_NETWORK: 				"Réseau invités",
			ACCESS_DEVICES: 			"Accès appareils ",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2. 4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Type de connexion",

			MAC_ADDRESS: 				"Adresse MAC",
			IP_ADDRESS: 				"Adresse IP",
			RELEASE: 					"Libérer",
			RENEW: 						"Renouveler",
			
			DYNAMIC_IP: 				"IP Dynamique",
			STATIC_IP: 					"IP Statique",
			SUBNET_MASK: 				"Masque de sous réseau",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"Câble BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Tunnel 6to4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Passthrough (Pont)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"aucun",
			
			DEFAULT_GATEWAY: 			"Passerelle par défaut",
			DNS: 						"Serveur DNS",
			MAC: 						"Adresse MAC",
			WDS_STATUS: 				"Etat WDS",
			
			IPV6_ADDRESS: 				"Adresse IP",
			PRIMARY_DNS: 				"DNS Primaire",
			SECOND_DNS: 				"DNS Secondaire",

			RADIO: 						"émetteur Wi-Fi",

			NAME_SSID: 					"Nom de réseau (SSID)",
			NETWORK_NAME_SSID:			"Nom de réseau (SSID)",
			HIDE_SSID: 					"Masquer le SSID",
			MODE: 						"Mode",
			CHANNEL: 					"Canal",
			CHANNEL_WIDTH: 				"Largeur de canal",
			AUTO: 						"Auto",
			CURRENT_CHANNEL: 			"Canal actuel",

			WDS: 						"Etat WDS",
			WIRED_CLIENTS: 				"Clients filaires",
			WIRELESS_CLIENTS: 			"Clients Wi-Fi",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Adresse lien local",
			ASSIGN_TYPE: 				"Type assigné",

			ALLOW_TO_SEE_EACH: 			"Permettre aux invités de se voir",

			TOTAL: 						"Capacité :",
			AVAILABLE: 					"Disponible :",

			USB: 						"Disque USB",
			PRINTER: 					"imprimante",

			CPU_LOAD: 					"Charge processeur",
			MEMORY_USAGE: 				"Mémoire utilisée",

			IP_ADDR_P: 					"Adresse IP :",
			MAC_ADDR_P: 				"Adresse MAC :",
			CONN_TYPE_P: 				"Type de connexion :",

			DISABLED: 					"Désactivé",
			INIT: 						"Initialisation",
			SCAN: 						"Rechercher",
			AUTH: 						"Auth",
			ASSOC: 						"Assoc",
			RUN: 						"Run",
			HOST: 						"Clients",
			GUEST: 						"Invités",

			ON: 						"Actif",
			OFF: 						"Inactif"
		},

		INTERNET: {
			TITLE: 						"Internet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Type de connexion internet",
			INTERNET_MAC_ADDRESS: 		"Adresse MAC",
			
			CONNECT: 					"Connecter",
			DISCONNECT: 				"Déconnecter",
			
			IP_ADDR: 					"Adresse IP",
			
			USE_DEFAULT_MAC: 			"Utiliser l'adresse MAC par défaut",
			USE_COMPUTER_MAC: 			"Utiliser l'adresse MAC de l'ordinateur",
			USE_CUSTOM_MAC: 			"Utiliser une autre adresse MAC",
			MAC_CLONE: 					"Clonage MAC",
			
			CONFIG: 					"Configuration",
			
			IP_ADDRESS: 				"Adresse IP",
			SUBNET_MASK: 				"Masque de sous réseau",
			DEFAULT_GATEWAY: 			"Passerelle par défaut",
			
			MANUAL_DNS: 				"DNS manuels",
			PRIMARY_DNS: 				"DNS Primaire",
			SECOND_DNS: 				"DNS Secondaire",
			
			RENEW: 						"Renouveler",
			RELEASE: 					"Libérer",
			VIEW_MODE: 					"Mode de visualisation",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Obtenir dynamiquement du FAI",
			USE_FOLLOW_IP_ADDR: 		"Utiliser l'Adresse IP suivante",
			USE_FOLLOW_DNS_ADDR: 		"Utiliser les adresse DNS suivantes",
			USE_FOLLOW_DNS_SERVER: 		"Utiliser les serveurs DNS suivant",
			
			BASIC: 						"Configuration Basique",
			ADVANCED: 					"Configuration Avancée",
			
			DNS_ADDR_MODE: 				"Adresse DNS",
			MTU_SIZE: 					"Taille de la MTU",
			MTU_1500: 					"octets. (par défaut 1500, Ne pas changer sans raisons. )",
			MTU_1480: 					"octets. (Par défaut 1480, ne pas modifier sans raisons. )",
			MTU_1460: 					"octets. (Par défaut 1460, ne pas modifier sans raisons. )",
			MTU_1420: 					"octets. (Par défaut 1420, ne pas modifier sans raisons. )",
			
			HOST_NAME: 					"Nom d'hôte",

			HOST_NAME_CONFIRM: 			"Le nom d'hôte contient des caractères interdits qui peuvent conduire à un comportement système inattendu. Etes vous sûr de vouloir continuer ?",

			GET_IP_WITH_UNICAST_DHCP: 	"Obtenir une IP via DHCP Unicast (habituellement non requis. )",
			OPTIONAL: 					"(Optionnel)",
			
			STATIC_IP: 					"IP Statique",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			
			INTERNET_IP_ADDR: 			"Adresse IP",
			INTERNET_DNS: 				"DNS internet",
			SECONDARY_CONN: 			"Connexion secondaire",
			NONE: 						"aucun",
			INTERNET_PRIMARY_DNS:		"DNS Primaire",
			INTERNET_SECONDARY_DNS: 	"DNS Secondaire",
			
			DYNAMIC_IP: 				"IP Dynamique",
			DYNAMIC_IP_v6: 				"IP Dynamique (SLAAC/DHCPv6)",
			STATIC_IP: 					"IP Statique",
			SERVICE_NAME: 				"Nom de service",
			ACCESS_CONCENTRATOR_NAME:  	"Nom du concentrateur d'accès",
			DETECT_ONLINE_INTERVAL: 	"Détecter l'intervalle en ligne",
			INTERVAL_TIPS: 				"secondes. (0 à 120. Par défaut 10.)",
			IP_ADDR_MODE:  				"Adresse IP",
			CONN_MODE: 					"Mode de connexion",
			DHCP_LINK_UNPLUGGED: 		"Le port WAN n'est pas connecté.",
			
			AUTO: 						"Auto",
			ON_DEMAND: 					"A la demande",
			TIME_BASED: 				"Planifiée",
			MANUALLY: 					"Manuellement",
			MAX_IDLE_TIME: 				"Durée d'inactivité Max",
			MAX_IDLE_TIME_TIPS: 		"minutes. (0 signifie toujours actif. )",
			PERIOD_OF_TIME: 			"Durée",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"Câble BigPond",
			AUTH_SERVER: 				"Serveur d'Auth.",
			AUTH_DOMAIN: 				"Domaine d'Auth.",
			L2TP: 						"L2TP",
			GATEWAY: 					"Passerelle",
			SERVER_IP_ADDR_NAME: 		"IP de serveur VPN/Nom de domaine",
			PPTP: 						"PPTP",
			TO: 						"A",
			
			TUNNEL_6TO4: 				"Tunnel 6to4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Obtenir une Adresse IPv6 non temporaire",
			GET_PREFIX_DELEGATION: 		"Obtenir une délégation de préfixe IPv6",
			IPV6_ADDR: 					"Adresse IPv6",

			GET_IPV6_WAY: 				"Obtenir une Adresse IPv6",
			AUTOMATICALLY: 				"Obtenir automatiquement",
			SPECIFIED_BY_ISP: 			"Spécifié par le FAI",

			IPV6_ADDR_PREFIX: 			"Préfixe d'adresse IPv6",
			NONE_TEMPORARY: 			"Non-temporaire",

			PREFIX_DELEGATION: 			"Délégation de préfixe",
			ENABLE: 					"Activer",
			DISABLE: 					"Désactiver",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"longueur du masque IPv4",
			CONFIG_TYPE: 				"Type de configuration",
			RD6_PREFIX: 				"Préfixe 6RD",
			RD6_PREFIX_LENGTH: 			"Longueur du préfixe 6RD",
			REPLY_IPV4_ADDR: 			"Adresse border reply IPv4",
			MANUAL: 					"Manuel",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Passthrough (Pont)",
			LOCAL_IPV6: 				"Adresse locale IPv6",
			PEER_IPV6: 					"Adresse pair IPv6",
			TUNNEL_ADDR: 				"Adresse du tunnel",
			IPV4_NETMASK: 				"Masque IPv4",
			CUSTOM: 					"Autre",
		    AFTR_NAME: 					"Nom AFTR",
			PPP_SHARE_V6:				"PPPoE sur la même session que la connexion IPv4",
			PPP_SHARE_V4:				"PPPoE sur la même session que la connexion IPv6",

			
			
			IPV4_ADDR: 					"Adresse IPv4",
			IPV4_MASK: 					"Masque de sous-réseau IPv4",
			IPV4_GATEWAY: 				"Passerelle par défaut IPv4",
			TUNNEL_ADDR: 				"Adresse du tunnel",

			DUPLEX: 					"Duplex",
			AUTO_NEGOTIATION: 			"Auto Négociation",
			FULL_DUPLEX_1000: 			"1000Mbps duplex intégral",
			HALF_DUPLEX_1000:			"1000Mbps semi duplex",
			FULL_DUPLEX_100: 			"100Mbps duplex intégral",
			HALF_DUPLEX_100: 			"100Mbps semi duplex",
			FULL_DUPLEX_10: 			"10Mbps duplex intégral",
			HALF_DUPLEX_10: 			"10Mbps semi duplex"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"Adresse MAC",
			IP_ADDRESS: 				"Adresse IP",
			SUBNET_MASK: 				"Masque de sous réseau",
			CUSTOM: 					"Autre",

			IGMP: 						"Activer IGMP Proxy",
			

			ASSIGNED_TYPE: 				"Type assigné",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Stateless DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Préfixe d'adresse",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Adresse",
			DELEFATED: 					"Délégué",
			STATIC: 					"Statique",
			SITE_PREFIX: 				"Préfixe de site",
			SITE_PREFIX_LEN: 			"Longueur de préfixe de site",

			PREFIX_TYPE:  				"Type de configuration de préfixe de site",
			LAN_IPV6_ADDR:  			"Adresse LAN IPv6",

			RELEASE_TIME: 				"Durée du bail",
			RELEASE_TIME_TIP: 			"secondes. (Par défaut 86400, ne pas modifier sans raisons. )",
			ADDRESS:					"Adresse",
			SAVE: 						"Sauvegarder",

			REBOOT_TIP: 				"Le routeur vous redirige vers la nouvelle page d'authentification. <br/> Merci de patienter..."

		},

		IPTV:{
			TITLE: 						"Paramètres",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Activer IPTV", 
			MODE:  						"Mode",
			IGMP_PROXY: 				"Proxy IGMP",
			IGMP_VERSION: 				"Version IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Pont",
			BASIC: 						"Autre",
			EXSTREAM: 					"Singapour-ExStream",
			RUSSIA:  					"Russie",
			UNIFY:  					"Malaisie-Unifi",
			MAXIS:  					"Malaisie-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Internet",
			IP_PHONE: 					"Téléphone IP", 

			Q_TAG: 						"Tag 802. 1Q",
			ENABLE: 					"Activer",
			
			INTERNET_VLAN_ID: 			"N° VLAN Internet",
			INTERNET_VLAN_PRIORITY: 	"Priorité VLAN Internet",
			IP_PHONE_VLAN_ID: 			"N° VLAN Téléphone IP",
			IP_PHONE_VLAN_PRIORITY: 	"Priorité VLAN Téléphone IP",
			IPTV_VLAN_ID: 				"N° VLAN IPTV",
			IPTV_VLAN_PRIORITY: 		"Priorité VLAN IPTV",
			IPTV_MULTI_VLAN_ID: 		"N° VLAN IPTV Multicast",
			IPTV_MULTI_VLAN_PRIORITY: 	"Priorité VLAN IPTV Multicast"
		},

		DHCP_SERVER: {
			TITLE: 						"Serveur DHCP",
			
			SETTINGS: 					"Paramètres",

			DHCP_SERVER: 				"Serveur DHCP",
			ENABLE_DHCP_SERVER: 		"Activer Serveur DHCP",

			IP_ADDR_POOL: 				"Adresse IP Plage",
			LEASETIME: 					"Durée du bail",
			LEASENOTE: 					"minutes. (1 à 2880. par défaut 120.)",
			
			GATEWAY: 					"Passerelle par défaut",
			DOMAIN: 					"Domaine par défaut",
			PRIMARYDNS: 				"DNS Primaire",
			SECONDARYDNS: 				"DNS Secondaire",

			OPTIONAL: 					"(Optionnel)",

			CLIENTSLIST: 				"Liste de clients DHCP",
			CLIENT_NUMBER: 				"Client N°",
			CLIENT_NAME: 				"Nom du client",
			MAC_ADDR: 					"Adresse MAC",
			ASSIGNED_IP: 				"Adresse IP assignée",
			LEASE_TIME: 				"Durée du bail",

			RESERVATION: 				"Réservation d'adresses",

			RESERVED_IP: 				"Réservée Adresse IP",
			IP_ADDRESS: 				"Adresse IP",
			DESCRIPTION: 				"Description",

			CLIENTSLIST: 				"Liste de clients DHCP",
			CLIENT_NUMBER: 				"Client N°",

			ENABLE: 					"Activer",
			ENABLE_THIS_ENTRY: 			"Activer"
			
		},

		DDNS: {
			DDNS: 						"DNS Dynamique",
			SERVICEPROVIDER: 			"Fournisseur de service",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"S'enregistrer...",
			USERNAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			DOMAIN_NAME_LIST: 			"Liste de noms de domaine",
			DOMAIN_NAME: 				"Nom de domaine",
			LOGIN: 						"Connexion",
			LOGIN_SAVE: 				"Se connecter et Sauvegarder", 
			LOGOUT: 					"Se déconnecter",
			STATU_SUCCESS:				"Réussite !",
			UPDATE_INTERVAL:			"Intervalle de mise à jour",
			ONE_HOUR:					"1 heure",
			SIX_HOUR:					"6 heures",
			TWETEEN_HOUR:				"12 heures",
			ONE_DAY:					"1 jour",
			TWO_DAY:					"2 jours",
			THREE_DAY:					"3 jours",
			NEVER:						"Jamais",
			UPDATE:						"Mise à jour",
			STATU_INCORRENT:			"Nom d'utilisateur ou mot de passe incorrect.",
			STATU_ERR_DOMAIN:			"Erreur de nom de domaine",
			WAN_IP_BIND: 				"Association WAN IP",
			CURRENT_DOMAIN: 			"Nom de domaine actuel",
			REGISTER: 					"Enregistrement",
			BIND: 						"Associé",
			UNBIND: 					"Désassocier",
			TITLE: 						"DDNS indisponible",
			CONTENT: 					"Pour utiliser notre service DDNS TP-Link, merci de <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">Vous connecter</a> avec votre identifiant TP-Link, ou choisissez un autre fournisseur de services DDNS.",
			STATU_NO_LAUNCH:			"Non lancé",
			STATU_FAIL_DDNS: 			"Echec de la mise à jour DDNS.",
			STATU_FAIL_NOIP: 			"Echec de la mise à jour NO-IP.",
			DISABLE: 					"Désactiver",
			ENABLE: 					"Activer",	
			STATU_NO_LAUNCH:			"Echec de la mise à jour DDNS.",
			STATU_CONN:					"Connexion",
			WAN_IP_BIND: 				"Association WAN IP",
			TIME: 						"Date d'enregistrement.",
			BOUND: 						"Lier",
			FREE: 						"Libre",
			SORRY: 						"Echec.",
			UNBIND_NOTE:          		"Si vous ovulez associer %domain% à votre appareil, merci de désassocier le nom de domaine actuel au préalable."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Routage Avancé",
			STATIC_ROUTING: 			"Routage statique",

			DESTINATION_NETWORK:		"Réseau de destination",
			SUBNET_MASK: 				"Masque de sous réseau",
			DEFAULT_GATEWAY: 			"Passerelle par défaut",
			DESCRIPTION: 				"Description",
			
			SYSTEM_ROUTING_TABLE: 		"Table de routage système",
			CLIENT_NUMBER: 				"Client N°",

			GATEWAY: 					"Passerelle",
			INTERFACE: 					"Interface",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Activer",
			ENABLE_THIS_ENTRY: 			"Activer"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Paramètres",
			NOT_SUPPORT_5G: 			"Ce pays n'autorise que les réseaux 2,4GHz. Assurez vous de sélectionner le pays correct.",

			REGION: 					"Pays",
			NOTICE:  					"Pour utiliser le Wi-Fi, vous devez laisser le bouton Wi-Fi sur la position On.",
			
			MODE_2G:					"2. 4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Paramètres Wi-Fi",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Activer l'émetteur Wi-Fi",

			WIRELESS_NETWORK_NAME: 		"Nom de réseau (SSID)",
			WIRELESS_PASSWORD: 			"Mot de passe",
			HIDE_SSID: 					"Masquer le SSID",

			SECURITY: 					"Sécurité",
			NO_SECURITY: 				"Pas de sécurité",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - Personnel (Recommandé)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - Entreprise",
			WEP: 						"WEP",

			VERSION: 					"Version",

			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Chiffrement",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Mode",
			MODE_B:  					"802.11b",
			MODE_G:  					"802.11g",
			MODE_N:  					"802.11n",
			MODE_BG:  					"802.11bg",
			MODE_GN: 					"802.11gn",
			MODE_BGN:  					"802.11bgn",

			MODE_A_5: 					"802.11n uniquement",
			MODE_AN_5: 					"802.11a/n",
			MODE_N_5: 					"802.11n",
			MODE_AC_5:					"802.11ac uniquement",
			MODE_NAC_5:					"802.11n/ac",
			MODE_ANAC_5:				"802.11a/n/ac",


			CHANNEL_WIDTH: 				"Largeur de canal",
			CHANNEL: 					"Canal",

			TRANSMIT_POWER: 			"Puissance d'émission",

			RADIUS_SERVER_IP: 			"IP du serveur Radius",
			RADIUS_PORT: 				"Port radius",
			RADIUS_PASSWORD: 			"Mot de passe Radius",

			TYPE: 						"Type",
			OPEN_SYSTEM: 				"Système ouvert",
			SHARED_KEY: 				"Clé partagée",

			KEY_SELECTED: 				"Clé choisie",
			KEY1: 						"Clé 1",
			KEY2: 						"Clé 2",
			KEY3: 						"Clé 3",
			KEY4: 						"Clé 4",

			WEP_KEY_FORMAT: 			"Format de clé WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadécimal",

			KEY_TYPE: 					"Type de clé",
			BIT64: 						"64 bit",
			BIT128: 					"128 bit",
			BIT152: 					"152 bit",

			KEY_VALUE: 					"Valeur de la clé",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Bas(se)",
			MIDDLE: 					"Moyen(ne)",
			HIGH: 						"Elevé(e)"
		},

		WPS: {

			TITLE2: 					"Code WPS",
			ROUTERS_PIN_INFO: 			"D'autres appareils peuvent se connecter au routeur en WPS avec le code WPS du routeur.",
			ENABLE_ROUTE_PIN: 			"Code WPS",
			ROUTE_PIN: 					"Code PIN",
			GENERAL: 					"Générer",
			DFT: 						"Par défaut",

			TITLE: 						"Assistant WPS",
			SELECT_SETUP: 				"Choisir une méthode de paramétrage",
			PUSH_BTN: 					"Appui du bouton (Recommandé)",
			PUSH_DES: 					"Appuyer le bouton WPS du routeur ou cliquer sur le bouton logiciel ''Se Connecter'' de cette page.",
			CONNECT: 					"Connecter",
			CANCEL: 					"Annuler",

			RESULT_HEAD: 				"le client Wi-Fi",
			RESULT_END: 				"a été ajouté au réseau avec succès.",

			PIN_NUMBER: 				"Code PIN",
			
			PIN_BTN: 					"Code PIN",
			NOT_FOUND: 					"Non trouvé",
			ENTER_CLIENT_PIN: 			"Entrer le Code WPS du client",
			SWITCH_NOTE:				"Remarque pour utiliser WPS vous devez activer le Wi-Fi au préalable.",
			SWITCH_NOTE2:				"Remarque pour utiliser WPS vous devez configurer le Wii correctement au préalable.",
			STATUS_PIN_ERROR: 			"Code PIN WPS incorrect ? Merci de le vérifier.",
			STATUS_ERROR: 				"Erreur.",
			STATUS_CONN_ERROR: 			"Echec de connexion.",
			STATUS_CONNING: 			"Connexion en cours...",
			STATUS_CANCEL: 				"Connexion annulée.",
			
			NOTE: 						"Remarque :",
			
			STATUS_CONN_OVERLAP: 		"Echec de connexion (Chevauchement).",
			STATUS_CONN_TIMEOUT: 		"Echec de connexion (Temps dépassé).",
			STATUS_CONN_INACT: 			"Connexion inactive."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Clients Wi-Fi connectés",
			CLIENT_NUMBER: 				"Client N°",
			MAC_ADDRESS: 				"Adresse MAC",
			CONN_TYPE: 					"Type de connexion",
			SECURITY: 					"Sécurité",
			RECEIVED_PACKETS: 			"Paquets reçus",
			SEND_PACKETS: 				"Paquets émis"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Paramètres",
			
			MODE_2G: 					"2. 4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Permettre aux invités de se voir",
			
			ALLOW_LOCAL: 				"Permettre aux invités d'accéder à mon réseau local",
			
			WIRELESS: 					"Wi-Fi",
			WIRELESS_24G_RADIO: 		"Wi-Fi 2.4GHz",
			WIRELESS_5G_RADIO: 			"Wi-Fi 5GHz",
			ENABLE_GUEST: 				"Activer Réseau invités",

			NAME_SSID: 					"Nom de réseau (SSID)",
			HIDE_SSID: 					"Masquer le SSID",

			SECURITY: 					"Sécurité",
			NO_SECURITY: 				"Pas de sécurité",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personnel",

			VERSION: 					"Version",
			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Chiffrement",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Mot de passe"
		},

		NAT:{
			SETTINGS: 					"NAT matériel",
			STATUS: 					"NAT matériel",
			
			ALG_TITLE: 					"Passerelle applicative (Application Layer Gateway : ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"Passthrough PPTP",
			L2TP_ALG: 					"Passthrough L2TP",
			IPSEC_ALG: 					"Passthrough IPSec",

			ENABLE_FTP_ALG: 			"Activer FTP ALG",
			ENABLE_TFTP_ALG: 			"Activer TFTP ALG",
			ENABLE_H323_ALG: 			"Activer H323 ALG",
			ENABLE_RTSP_ALG: 			"Activer RTSP ALG",
			ENABLE_PPTP_ALG: 			"Activer PPTP Passthrough",
			ENABLE_L2TP_ALG: 			"Activer L2TP Passthrough",
			ENABLE_IPSEC_ALG: 			"Activer IPSec Passthrough",
			NAT_ENABLE_NOTICE: 			"Remarque: Vos configuration ne seront pas activés tant que le NAT est actif."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Serveurs Virtuels",

			SERVICE_NAME: 				"Type de Service",
			EXTERNAL_PORT: 				"Port externe",
			INTERNAL_IP: 				"IP Interne",
			INTERNAL_PORT: 				"Port Interne",
			PROTOCAL: 					"Protocole",

			BTN_VIEW: 					"Visualiser les services existants",

			EXSITTING_SERVICE: 			"Services existants",
			
			PROTOCAL_ALL: 				"Tous",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX ou XX)",
			EXT_PORT_TIPS: 				"(XX ou XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX ou Vide ,1-65535)",

			NOTICE:						"2. En conflit avec le port d'administration distante. Etes vous sûr de vouloir continuer ?",

			ENABLE_THIS_ENTRY: 			"Activer",
			OPERATION: 					"Action",
			CHOOSE: 					"Sélectionner",
			NAT_ENABLE_NOTICE: 			"Remarque: Vos configuration ne seront pas activés tant que le NAT est actif."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Déclenchement par Port",
			APPLICATION: 				"Application",
			TRIGGER_PORT: 				"Port déclencheur",
			TRIGGER_PROTOCOL: 			"Protocole déclencheur",

			EXTERNAL_PORTS: 			"Port externe",
			EXTERNAL_PROTOCOL: 			"Protocole externe",

			BTN_VIEW: 					"Visualiser les applications existantes",

			EXSITTING_APPLICATION: 		"Applications existantes",
			APPLICATION_NAME: 			"Nom d'application",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX ou XX-XX,1-65535,au moins 5 paires)",
			
			ENABLE_THIS_ENTRY: 			"Activer",
			OPERATION: 					"Action",
			
			PROTOCAL_ALL: 				"Tous",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Remarque: Vos configuration ne seront pas activés tant que le NAT est actif."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Activer DMZ",
			HARDWARESTATUS: 			"Adresse IP Hôte DMZ",
			NAT_ENABLE_NOTICE: 			"Remarque: Vos configuration ne seront pas activés tant que le NAT est actif."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Liste de services UPnP",
			CLIENT_NUMBER: 				"Client N°",
			SERVICE: 					"Description du service",
			EXTERNAL_PORT: 				"Port externe",
			PROTOCAL: 					"Protocole",
			IP_ADDR: 					"Adresse IP interne",
			INTERNAL_PORT: 				"Port Interne",
			NAT_ENABLE_NOTICE: 			"Remarque: Vos configuration ne seront pas activés tant que le NAT est actif."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"Modem USB 3G/4G",
			LOCATION: 					"Pays",
			MOBILE_ISP: 				"FAI Mobile",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Mode de connexion",
			CONNECT_ON_DEMAND: 			"Connexion à la demande",
			CONNECT_AUTOMATICALLY: 		"Connexion automatique",
			CONNECT_MANUALLY: 			"Connexion manuelle",
			MAX_IDLE_TIME: 				"Durée d'inactivité Max",
			CONNECTION_TIP: 			"L'accès internet est défini à : Préférence au WAN.",
			IDLE_TIME_TIP: 				"Le mode de connexion et le temps d'inactivité maximale ne peuvent être définis manuellement.",
			MINUTES: 					"minutes. (0 signifie que le serveur est toujours allumé.)",

			AUTHENTICATION_TYPE: 		"Type d'authentification",
			AUTO: 						"Auto",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"Par défaut positionné sur Auto, ne pas changer sauf nécessité.",

			CONNECT: 					"Connecter",
			DISCONNECT: 				"Déconnecter",

			SET_TIP: 					"Définir le n° de connexion, l'APN, le nom et le Mot de passe manuellement.",
			DIAL_NUMBER: 				"Numéro de connexion",
			APN: 						"APN",
			USERNAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			OPTIONAL: 					"(Optionnel)",
			MTU_SIZE: 					"Taille de la MTU",
			MTU_SIZE_TIP: 				"Par défaut 1480, ne pas modifier sans raisons. ",

			USE_FOLLOW_DNS_SERVER: 		"Utiliser les serveurs DNS suivants",
			PRIMARY_DNS: 				"DNS Primaire",
			SECOND_DNS: 				"DNS Secondaire",

			UNPLUGGED: 					"Pas de modem USB connecté",
			IDENTIFYING: 				"Identification...",
			IDENTIFY_SUCCESS: 			"Identification réussie"
		},

		DISK_SETTING: {
			DISK_SET: 					"Paramètres d'appareil",
			SCAN: 						"Rechercher",
			SELFLY_REMOVE: 				"Déconnexion sécurisée",
			SCAN_RESULT: 				"%n disque(s) trouvé(s)",
			NOT_FOUND: 					"Non trouvé",
			SELFLY_REMOVE: 				"Déconnexion sécurisée",
			
			VOLUMN: 					"Volume",
			CAPACITY: 					"Capacité",
			FREESPACE: 					"Espace libre",
			USBSPACE: 					"Espace utilisé",
			
			STATUS: 					"Etat",
			INACT: 						"Inactivé",
			ACTIVE: 					"Actif",
			
			USAGE: 						"Utilisation",
			CAPACITY: 					"Capacité",
			OPERATION: 					"Action",	
			
			ACC: 						"Gestion de compte", 	 	
			USERNAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			USE_LOGIN: 					"Utiliser l'utilisateur de connexion",
			SCAN: 						"Rechercher",
			ENJECT_ALL: 				"Tout éjecter",
			ENJECT: 					"Ejecter",
			ADD_USER: 					"Ajouter un utilisateur",
			AUTH: 						"Autorité"
		},

		FOLDER: {
			TITLE: 						"Paramètres de partage",
			ACCOUNT_TITLE: 				"Compte de partage",
			ACCOUNT:					"Compte",
			AC_NOTE: 					"Préparer un compte pour partager les contenus. Vous pouvez utiliser le compte de connexion au routeur ou en créer un autre.",
			
			AC_LOGIN: 					"Utiliser le compte par défaut",
			AC_FOLLOW: 					"Utiliser un nouveau compte",

			USERNAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",
			CONFIRM: 					"Confirmer le mot de passe",

			SHARING_SETTING: 			"Paramètres de partage",
			SERVER_NAME: 				"Nom duserveur : de médias/réseau",

			METHOD: 					"Méthode d'accès",
			LINK: 						"Lien",
			PORT: 						"Port",

			NETWORK_NEIGHBORHOOD: 		"Voisinage réseau",
			FTP: 						"FTP",
			FTPEX: 						"FTP (via internet)",

			SHARE_FOLDER: 				"Dossier de partage",
			SHAREING_ALL: 				"Partager tout",
			NOTE:  						"Basculer sur On pour partager tous les dossiers et fichiers ou conserver sur Off pour ne partager que les dossiers spécifiés.", 
			ENABLE_AUTHENTICATION: 		"Activer Authentification",
			SHAREING_FOLDER: 			"Dossiers de partage",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Chemin d'accès",
			VOLUMN_NAME: 				"Nom de volume",

			SHARE_NAME: 				"Nom de dossier",
			FOLDER_PATH: 				"Chemin d'accès",
			MEDIA_SHARING: 				"Serveur de médias",
			STATUS: 					"Etat",

			GUEST_ACCESS: 				"Autoriser l'accès aux invités",
			ENABLE_AUTHENTICATION: 		"Activer Authentification",
			ENABLE_WRITE_ACCESS: 		"Activer l'écriture",
			ENABLE_MEDIA_SHARE: 		"Activer le partage de médias",
			
			BROWSE: 					"Naviguer",
			BROWSE_TITLE: 				"Choisir un dossier",

			NO_VOLUMN:					"Aucune imprimante détectée",
			
			NOTICE: 					"Etes vous sûr de vouloir quitter la page DNS Dynamique ? Presser Sauvegarder pour enregistrer et quitter. Presser Quitter pour quitter sans sauvegarder. Presser Annuler pour rester.",
			NO_CHANGE_NOTICE: 			"Etes vous sûr de vouloir quitter la page DNS Dynamique ?",

			SAVE_FAILED_NOTICE: 		"Echec de la sauvegarde",
			CONTINUE: 					"Quitte",
			CONTINUE_SAVE: 				"Sauvegarder",
			CANCLE: 					"Annuler",

			ENABLE: 					"Activer"

		},

		PRINT:{
			TITLE: 						"Serveur d'impression",
			NAME: 						"Nom de l'imprimante",
			ENABLE_PRINT_SERVER: 		"Serveur d'impression",
			NONE: 						"aucun",
			
			NOTE_TITLE: 				"Remarque :",
			STEP1: 						"Etape 1 :",
			STEP2: 						"Etape 2 :",
			STEP3: 						"Etape 3 :",

			NOTE1: 						"Connecter l'imprimante USB au routeur avec un cordon USB.",
			NOTE2: 						"Installer les pilotes de l'imprimante sur votre ordinateur en vous référant aux instructions du mode d'emploi.",
			NOTE3: 						"Installer l'utilitaire TP-Link ''Contrôleur d'imprimante USB'' depuis le cd de ressources (Windows uniquement) ou téléchargé  (Windows & OS X) depuis  <a class=\"link\" target=\"_blank\" href=\"%SUPPORT%\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Contrôle parental",
			STATUS: 					"Etat",
			UNKNOWN: 					"Inconnu",

			DEVICE_CTR: 				"Appareils soumis au contrôle parental",
			DEVICE: 					"Nom d'appareil",
			MAC_ADDRESS: 				"Adresse MAC",
			TIME: 						"Horaires d'accès à Internet",
			DESCRIPTION: 				"Description",
			
			ENABLE_THIS_ENTRY: 			"Activer",
			OPTIONAL: 					"(Optionnel)",
			BTN_VIEW: 					"Visualiser les appareils connectés",
			
			DEVICE_LIST: 				"liste d'appareils",
			SYSTEM_TIME: 				"Heure système",
			
			RESTR: 						"Restriction de contenu",
			MODE: 						"Restriction",
			BLACKMODE: 					"Liste noire",
			WHITEMODE: 					"Liste Blanche",
			ACCESS_DEVICES_LIST: 		"liste des appareils",
			
			CHOOSE: 					"Sélectionner",
			ADD_A_NEW_KEYWORD: 			"Ajouter un mot clé",
			ADD_A_NEW_DOMAIN_NAME: 		"Ajouter un nouveau Nom de domaine"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Internet",
			ROUTER: 					"Routeur",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"OS X/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Autres",

			DEVICE: 					"Appareil",
			RATE: 						"Débit",
			APPLICATION: 				"Application",

			NAME: 						"Nom",
			MAC_ADDRESS: 				"Adresse MAC",
			IP_ADDRESS: 				"Adresse IP",


			DEVICES: 					"Appareils"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Bande passante",
			TEST_BANDWIDTH: 			">Tester la bande passante",
			STREAMBOOST: 				"Streamboost",
			ENABLE_STREAMBOOST: 		"Activer streamboost",
			UP_LIMITATION: 				"Limitation téléversement (Mbps)",
			DOWN_LIMITATION: 			"Limitation téléchargement (Mbps)",
			RUN_BANDWIDTH_TEST: 		"Lancer le test de bande passante",
			TESTING: 					"Test",
			TEST_FAILED: 				"Echec du test",
			TEST_SUCCEED: 				"Succès du test",
			ENABLE_AUTOMATIC_TEST: 		"Activer test automatique",
			KEEP_UP_TO_DATE: 			"Conserver Streamboost à jour",
			ENABLE_AUTOMATIC_UPDATE: 	"Activer mise à jour automatique"

		},

		PRIORITY:{
			PRIORITY: 					"Priorité",
			PRIORITY_TIPS: 				"Les priorités vous permettent de modifier l'importance d'un appareil par rapport à un autre. C'est utile quand les appareils concourent pour des applications identiques en présence d'une bande passante limitée.",
			ALL_DEVICE: 				"Tous les appareils",
			ACTIVE_DEVICE: 				"Appareil actif",
			SAVE: 						"Sauvegarder",
			ID: 						"ID",
			DEVICE: 					"Appareil",
			TYPE: 						"Type",
			MAC_ADDRESS: 				"Adresse MAC",
			STICK: 						"Bâton"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Statistiques",
			UP_TIME: 					"Durée d'activité",
			DOWNLOADS: 					"Téléchargements",
			LAST_DAY: 					"depuis 1 jour",
			LAST_WEEK: 					"depuis 1 semaine",
			LAST_MONTH: 				"depuis 1 mois",
			ALL_LAN_HOSTS: 				"Tous les hôtes LAN",
			OTHER: 						"Autre"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Pare-feu",
			ENABLE_SPI: 				"Pare-feu SPI",

			DOS_PROTECTION: 			"Protection DoS",
			ENABLE_DOS: 				"Protection DoS",
			
			OFF: 						"Inactif",
			LOW: 						"Bas(se)",
			MIDDLE: 					"Moyen(ne)",
			HIGH: 						"Elevé(e)",

			ICMP: 						"Filtrage des attaques ICMP-FLOOD",
			UDP: 						"Filtrage des attaques UDP-FLOOD",
			TCP: 						"Filtrage des attaques TCP-SYN-FLOOD",
			ENABLE_DOS_TIP:             "La protection contre DoS et les Statistiques de trafic ne peuvent être actifs en même temps.",

			IGNORE: 					"Ignorer les paquets PING issus du port WAN",
			FORBID: 					"Interdire les paquets PING issus du port LAN",

			BLOCK_DOS: 					"Liste d'hôtes DoS bloqués",
			HOST_NUMBER: 				"Hôte N°",
			IP_ADDRESS: 				"Adresse IP",
			MAC_ADDRESS: 				"Adresse MAC"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Contrôle d'accès",
			ENABLE_ACCESS: 				"Contrôle d'accès",

			ACCESS_MODE: 				"Mode d'accès",
			DEFAULT_ACCESS_MODE: 		"Mode d'accès par défaut",
			BLACK_LIST: 				"Liste noire",
			WHITE_LIST: 				"Liste Blanche",
			
			WIRED:						"Filaire",
			WIRELESS:					"Wi-Fi",

			DEVICE_ONLINE: 				"Appareils connectés",
			NAME: 						"Nom d'appareil",
			IP_ADDRESS: 				"Adresse IP",
			MAC_ADDRESS: 				"Adresse MAC",
			CONN_TYPE: 					"Type de connexion",

			BLOCK: 						"Bloquer",

			DEVICE_IN_WHITE: 			"Appareils en liste blanche",
			DEVICE_IN_BLACK: 			"Appareils en liste noire"
		},

		IP_MAC:{
			TITLE: 						"Paramètres",
			ENABLE_ARP: 				"Association ARP",

			ARP_LIST: 					"Liste ARP",
			ARP_NUM: 					"N° d'entrée ARP",

			MAC_ADDRESS: 				"Adresse MAC",
			IP_ADDRESS: 				"Adresse IP",
			BOUND: 						"Lier",
			UNBOUND: 					"Délier",

			BINDING_LIST: 				"Liste d'associations",
			DESCRIPTION: 				"Description",
			OPTIONAL: 					"(Optionnel)",
			ENABLE_THIS_ENTRY: 			"Activer"
		},

		TIMESET: {
			TITLE: 						"Paramètres de temps",
			ZONE: 						"Fuseau horaire",
			DATE: 						"Date",
			DATEFORMAT: 				"MM/JJ/AAAA",
			TIME: 						"Heure",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"Serveur NTP primaire",
			NTP2: 						"Serveur NTP secondaire",
			OPTIONAL: 					"(Optionnel)",

			CURRENT_TIME:  				"Date et heure actuelle",
			SET_TIME: 					"Définir date et heure",
			AUTOMATIC: 					"Obtenir automatiquement depuis internet",
			MANUAL: 					"Manuellement",
			AUTOMATIC_BTN: 				"Obtenir",


			GETGMT: 					"Obtenir GMT",

			
			GETGMT_SUCCESS: 			"Succès de l'obtention de l'heure depuis le serveur NTP",
			GETGMT_TIMEOUT: 			"Echec de l'obtention de l'heure depuis le serveur NTP",
			GETGMT_WAIT: 				"Attente",
			
			M: 							"M",
			W: 							"S",
			D: 							"J",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Heure d'été",
			ENABLE_DAYLIGHT: 			"Activer heure d'été",
			START: 						"Début",
			END: 						"Fin",

			RUNNING_STATUS: 			"Etat",
			DOWN: 						"Heure d'été inactive",
			UP: 						"Heure d'été active"
		},

		DIAG:{
			TITLE: 						"Diagnostiques",
			DIAGNOSTIC_TOOL: 			"Outil de Diagnostic",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"Adresse IP/ Nom de domaine",
			COUNT: 						"Nombre de Ping",
			
			BASIC: 						"Configuration Basique",
			ADVANCED: 					"Configuration Avancée",
			
			COUNTUNIT: 					"(1 à 50)",

			PKT: 						"Taille du paquet Ping",
			PKTUNIT: 					"(4 à 1472 octets)",

			TIMEOUT: 					"Ping hors délai",
			TIMOUTUNIT: 				"(100-200 milli secondes)",

			TTL: 						"TTL Max Traceroute",
			TTLUNIT: 					"(1 à 30)",
			
			START: 						"Début",
			STOP: 						"Stop"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Le firmware est à jour.",
			TITLE: 						"Mise à jour logicielle",
			INFO: 						"Informations sur l'appareil",
			REMOTE_TITLE: 				"Mise à jour en ligne",
			LOCAL_TITLE: 				"Mise à jour locale",

			NEWFILE: 					"Fichier de mise à jour",
			FIRMWAREVERSION: 			"Version logicielle",
			HARDWAREVERSION: 			"Version matérielle",
			LATESTVERSION: 				"Version la plus récente",
			CONFIRM_CONTENT:			"Voulez vous mettre à jour le firmware ?",
			WARNING:					"Mise à jour du firmware…</br>Pour éviter tout dommage, merci de maintenir le routeur sous tension et éviter d'intervenir sur le routeur pendant le processus de mise à jour du firmware.",
			REBOOTING: 					"Redémarrage…</br>Pour éviter tout dommage, merci de maintenir le routeur sous tension et éviter d'intervenir sur le routeur pendant le processus de mise à jour du firmware.",
			DO_NOT_OPERATE: 			"Mise à jour du firmware…</br>Pour éviter tout dommage, merci de maintenir le routeur sous tension et éviter d'intervenir sur le routeur pendant le processus de mise à jour du firmware.",
			FIRMWARE_UPDATING_NOTE: 	"1. Mise à jour du firmware en cours…<br/>Pour éviter tout dommage, merci de maintenir le routeur sous tension et ne pas intervenir durant le processus de mise à jour.",
			REBOOTING_NOTE: 			"2. Redémarrage…<br/> Pour éviter tout dommage, merci de maintenir le routeur sous tension et ne pas intervenir durant le processus de mise à jour.",
			SCREEN_UPDATING_NOTE: 		"3. Mise à jour de l'écran…<br/>Pour éviter tout dommage, merci de maintenir le routeur sous tension et ne pas intervenir durant le processus de mise à jour.",
			UPGRADE_FAILED: 			"Echec de la mise à jour.",
			UPGRADE: 					"Mettre à jour",
			CHECK: 						"Vérifier",
			DOWNLOADING: 				"Téléchargement…<br/>Pour éviter tout dommage, merci de maintenir le routeur sous tension et éviter d'intervenir sur le routeur pendant le processus de mise à jour du firmware.",
			UPGRADE_INOF: 				"Pour éviter tout dommage, Maintenir l'appareil sous tension.",
			NOTE: 						"Remarque:",
			NO_UPGRADE: 				"C'est la version la plus récente.",

			UPGRADING: 					"Mise à jour…<br/>Pour éviter tout dommage, merci de maintenir le routeur sous tension et éviter d'intervenir sur le routeur pendant le processus de mise à jour du firmware.",
			RETRY: 						"Réessayer",
			CANCEL: 					"Annuler",
			ILEGAL_DEVICE:              "Impossible d'identifier l'appareil. Merci de contacter le support technique TP-Link.",
			UPGRADE_FAIL: 				"Impossible de mettre à jour. Merci de réessayer plus tard.",
            CONFIG_RESET_NOTE:          "Vos paramètres actuels seront effacés à l'issue de cette mise à jour.",
			CHECK_UPGRADE: 				"Vérifier l'existence d'une mise à jour"
		},

		BACKUP:{
			BACKUP: 					"Sauvegarde",
			BACKUPTIP: 					"Sauvegarder une copie de vos paramètres actuels.",

			RESTORE: 					"Restaurer",
			RESTORETIP: 				"Restaurer depuis un fichier de sauvegarde.",
			
			RESTORE_WARN:				"Restauration du routeur... <br/> Merci de ne pas utiliser durant ce processus.",
			RESTORE_CONFIRM_CONTENT: 	"Etes vous sûr de vouloir restaurer le routeur depuis un fichier de sauvegarde ?",
			
			FILE: 						"Fichier",

			FACTORY: 					"Paramètres par défaut",
			FACTORYTIP: 				"Reconfigurer le routeur à ses paramètres par défaut.",
			RESETTIP:					"Restauration de tous les paramètres de configuration aux valeurs par défaut, à l'exception de vos informations de compte Cloud et d'authentification.",
			FACTORY_CONFIRM_CONTENT:	"Etes vous sûr de vouloir restaurer les paramètres d'usine du routeur ?",
			FACTORY_WARN:				"Restauration du routeur... <br/> Merci de ne pas utiliser durant ce processus.",
			
			BACKUPBTN: 					"Sauvegarde",
			RESTOREBTN: 				"Restaurer",
			RESETBTN:					"Restaurer",
			FACTORYBTN: 				"Restaurer aux paramètres d'usine"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Gestion de compte",
			
			OLDUSER: 					"Ancien nom d'utilisateur",
			OLDPWD: 					"Ancien Mot de passe",

			NEWUSER: 					"Nouveau nom d'utilisateur",
			NEWPWD: 					"Nouveau mot de passe",
			CONFIRM: 					"Confirmer le Mot de passe",

			RECOVERYINFO: 				"Récupération du Mot de passe",
			ENABLE_PASSWORD_RECOVERY: 	"Activer récupération du Mot de passe",
			FROM: 						"De",
			TO: 						"A",
			SMTP_SERVER: 				"Serveur SMTP",
			
			ENABLE_AUTHENTICATION: 		"Activer Authentification",
			USERNAME: 					"Nom d'utilisateur",
			PASSWORD: 					"Mot de passe",

			TEST_MAIL: 					"Test d'envoi",

			LOCAL:						"Administration Locale",
			LOCAL_MAC_AUTH: 			"Authentification de l'adresse MAC locale",
			ACCESS: 					"Accès autorisé à tous les appareils connectés au LAN",
			ACCESS_TIPS: 				"Basculer sur On pour autoriser tous les appareils connectés au LAN à administrer le routeur ou conserver sur Off pour n'autoriser que l'appareil spécifié.",
			
			MAC_ADDRESS: 				"Adresse MAC",
			VIEW_BTN: 					"Visualiser les appareils connectés",
			DESCRIPTION: 				"Description",

			EXIST_DEVICE:               "Appareils existants",

			OPTIONAL: 					"(Optionnel)",
			ENABLE_THIS_ENTRY: 			"Activer",

			DEVICE_NAME:				"Nom d'appareil",
			IP_ADDRESS:					"Adresse IP",
			

			REMOTE: 					"Administration distante",
			DISABLE_REMOTE_MANAGEMENR: 	"Désactiver l'administration distante",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Activer l'administration distante pour tous les appareils",
			ENABLE_REMOTE_MANAGEMENR: 	"Activer l'administration distante pour les appareils spécifiés",
			WEB: 						"port d'administration Web",

			NOTICE:						"En conflit avec le port de serveur virtuel ! Etes vous sûr de vouloir continuer ?",

			REMOTEIP: 					"Adresse IP d'administration distante",
			REMOTEIPNOTE: 				"(Saisir 255.255.255.255 pour toutes)"
			
		},

		SYSLOG:{
			TITLE: 						"Journal système",
			LOG_FILTER: 				"Filtre de journal :",
			
			TYPE_EQ: 					"Type =",
			
			ALL: 						"Tous",

			FIREWALL: 					"Pare-feu", 
			NAT: 						"NAT",
			DDNS: 						"DNS Dynamique",
			UPNP:						"UPnP",
			IMB:            			"Association IP&MAC",
			IPTV:						"IPTV",
			DHCPS:						"Serveur DHCP",
			IGMP_PROXY:					"Proxy IGMP",
			DOMAIN_LOGIN:				"Domaine d'authentification",
			BASIC_SECURITY: 			"Sécurité de base",
			PARENTAL_CONTROL: 			"Contrôle parental",
			ACCESS_CONTROL: 			"Contrôle d'accès",
			DOS_PROTECTION: 			"Protection DoS",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Statistiques de trafic",
			TIME_SETTINGS: 				"Paramètres de temps",
			ACCOUNT_MANAGEMENT: 		"Gestion de compte",
			LOCAL_MANAGEMENT: 			"Administration Locale",
			REMOTE_MANAGEMENT: 			"Administration distante",
			LOCALE: 					"Locale",
			FACTORY_RESET: 				"Réinitialisation aux paramètres d'usine",
			LED_CONTROLLER: 			"Contrôleur DEL",
			NETWORK: 					"Réseau",
			USBSHARE: 					"Partage USB",
			AND: 						"et",
			LEVEL: 						"Niveau",
			EMERGENCY:					"Urgence",
			ALERT:						"Alerte",
			CRITICAL:					"Critique",
			ERROR: 						"Erreur",
			WARNING: 					"Attention",
			NOTICE: 					"Notification",
			INFO: 						"Information",
			DEBUG: 						"Débogage",

			INDEX: 						"Index",
			TYPE: 						"Type",
			TIME: 						"Heure",
			LEVEL_COL:					"Niveau",

			CONTENT: 					"Contenu",
			
			MAIL_LOG: 					"Envoyer journal",
			SAVE_LOG: 					"Sauvegarder journal",

			SEND_OK: 					"Envoyer OK",
			SEND_FAILED: 				"Envoyer Echec",

			MAIL_SETTING: 				"Paramètres d'email",

 			FROM: 						"De",
 			TO: 						"A",
 			SMTP_SERVER: 				"Serveur SMTP",
 			ENABLE_AUTHENTICATION: 		"Activer Authentification",

 			USERNAME: 					"Nom d'utilisateur",
 			PASSWORD: 					"Mot de passe",
 			CONFIRM_PASSWORD: 			"Confirmer le mot de passe",

 			AUTO_MAIL: 					"Activer planification Email",
 			LOG_AT: 					"Envoyer à",
 			HH_MM: 						"(HH:MM) Au quotidien",

 			LOG_EVERY: 					"Envoyer toutes les",
 			HOURS: 						"heures"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Paramètres",
			STATUS: 					"Activer QoS",
			UPBANDWIDTH: 				"Bande passante de téléversement",
			DOWNBANDWIDTH: 				"Bande passante de téléchargement",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Test de vitesse",
			RULE_LIST: 					"Liste de règles de QoS",
			RULE: 						"Règle QoS",
			ID: 						"ID",
			NAME: 						"Nom",
			TYPE: 						"Type",
			DETAIL: 					"Détail",
			PRIORITY: 					"Priorité",

			APPLICATION: 				"Application",
			APPLICATION_LIST: 			"Liste d'applications",
			CUSTOM_APP: 				"Application personnalisée",
			MAC_ADDR: 					"Adresse MAC",
			MAC_ADDR_P: 				"MAC",
			IP_ADDR: 					"Adresse IP",
			IP_P: 						"Adresse IP :",
			PHYSICAL_PORT: 				"Port physique",

			LOW: 						"Bas(se)",
			MIDDLE: 					"Moyen(ne)",
			HIGH: 						"Elevé(e)",

			PROTO: 						"Protocole",
			PORT: 						"Port",
			PROTO_P: 					"Protocole :",
			PORT_P: 					"Port :",
			PORT_TIPS: 					"(XX ou XX-XX,1-65535,au moins 5 paires)",

			ALL: 						"Tous",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Autre",

			WIFI_HOME: 					"Client Wi-Fi",
			WIFI_GUEST: 				"Invité Wi-Fi",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Mise à jour de la base de données",

			NEWFILE: 					"Nouvelle base de données",
			FIRMWAREVERSION: 			"Version de la base de données",
			CONFIRM_CONTENT:			"Etes vous sûr de vouloir mettre à jour la base de données ?",
			WARNING:					"Mise à jour de la base…<br/>Merci de ne pas utiliser pendant le processus.",
			
			UPGRADE: 					"Mettre à jour",

			SERVICE_RESTART: 			"Redémarrage du service QoS",
			
			TYPE: 						"Type",
			BY_DEVICE: 					"Par appareil",
			BY_APP: 					"Par Application",
			BY_PHY: 					"Par port physique",

			HIGH_PRIORITY_LBL: 			"Priorité élevée :",
			MIDDLE_PRIORITY_LBL: 		"Priorité moyenne :",
			LOW_PRIORITY_LBL: 			"Priorité faible :",

			HIGH_PRIORITY: 				"Priorité élevée",
			MIDDLE_PRIORITY: 			"Priorité moyenne",
			LOW_PRIORITY: 				"Priorité faible"

		},

		APPLICATION:{
			APP_LIST: 					"Liste d'applications",
			GAME_LIST: 					"Liste de jeux",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Statistiques de trafic",
			ENABLE_STATISTICS: 			"Statistiques de trafic",

			TITLE: 						"Liste de statistiques de trafic",
			IP_MAC: 					"Adresse IP/Adresse MAC",
			TPKT: 						"Total Paquets",
			TBYTE: 						"Total octets",
			CPKT: 						"Paquets par intervalle",
			CBYTE: 						"octets par intervalle",
			CICMP: 						"ICMP Tx par intervalle",
			CUDP: 						"UDP Tx par intervalle",
			CSYN: 						"SYN Tx par intervalle",
			
			DELETE_CONFIRM: 			"Etes vous sûr de vouloir supprimer les statistiques de trafic ?",
			DELETE_ALL_CONFIRM: 		"Etes vous sûr de vouloir supprimer toutes les statistiques de trafic ?",

			RESET_ALL: 					"Tout réinitialiser"
		},

		SYSPARA:{
			W24G: 						"Wi-Fi 2.4GHz",
			W5G: 						"Wi-Fi 5GHz",
			SWITCH_NOTICE:  			"Le signal Wi-Fi est désactivé. Si vous souhaitez utiliser le Wi-Fi, placez le bouton Wi-Fi sur la position ON.",

			ENABLE_TIPS: 				"Le signal Wi-Fi est désactivé.",

			BEACON: 					"Intervalle entre balises",
			BEACONUNIT: 				"(40 à 1000)",

			RTS: 						"Seuil RTS",
			RTSUNIT: 					"(1 à 2346)",
			
			FRAG: 						"Seuil de fragmentation",
			FRAGUNIT: 					"(256 à 2346)",

			DTIM: 						"Intervalle DTIM",
			DTIMUNIT: 					"(1 à 15)",

			GROUP: 						"Intervalle de génération",
			GROUPUNIT: 					"secondes",
			
			
			WMM_FEATURE: 				"WMM",
			WMM: 						"Activer WMM",

			GI_FEATURE: 				"GI court",
			GI: 						"Activer GI court",

			AP_FEATURE: 				"Isolement",
			AP: 						"Activer Isolement",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Activer TxBF",

			WDS_FEATURE: 				"Pontage WDS",
			WDS: 						"Activer pontage WDS",
			
			SSID_BRIDEGE: 				"SSID (distant)",
			SURVEY: 					"Détecter",

			SN: 						"N° de série",
			MAC_ADDRESS: 				"Adresse MAC",
			SSID: 						"SSID",
			SIGNAL: 					"Signal",
			CHANNEL: 					"Canal",
			SECURITY: 					"Sécurité",
			CHOSEN: 					"Choisi",
			AP_NUMBER:					"N° PA",

			TOTAL: 						"Nombre d'éléments",

			MAC: 						"Adresse MAC (distante)",
			MACUNIT: 					"Exemple : 00-1d-0f-11-22-33",

			SECURITY: 					"Sécurité",
			NO: 						"Non",
			NONE: 						"Pas de sécurité",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Mot de passe",
			
			AUTH_TYPE: 					"Type auth.",
			AUTO: 						"Auto",
			OPEN: 						"Système ouvert",
			SHARED: 					"Clé partagée",

			WEP_INDEX: 					"Index WEP",
			KEY1: 						"Clé 1",
			KEY2: 						"Clé 2",
			KEY3: 						"Clé 3",
			KEY4: 						"Clé 4",

			WEP_KEY_FORMAT: 			"Format de clé WEP",
			ASC: 						"ASCII",
			HEX: 						"Hexadécimal",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Activer WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Activer NAT",
			
			NAT_BOOST: 					"Boost NAT",
			ENABLE_NAT_BOOST: 			"Activer Boost NAT",
			
			MEDIA_SERVER: 				"Serveur de médias",
			SCAN_INTERVAL: 				"Intervalle de détection automatique (Heures)",
			SCAN_UNIT: 					"(2 à 48)",

			DOS_PROTECTION: 			"Paramètres de niveau de la protection DoS",

			ICMP: 						"Niveau de paquets ICMP-FLOOD",
			UDP: 						"Niveau de paquets UDP-FLOOD",
			TCP: 						"Niveau de paquets TCP-FLOOD",

			WDS_MODE: 					"Mode WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Bas(se)",
			MIDDLE: 					"Moyen(ne)",
			HIGH: 						"Elevé(e)",

			TO: 						"A",
			NOTICE_NAT_REBOOT: 			"Redémarrage... <br/> Ne pas utiliser pendant le redémarrage.",

			NOTICE_NAT_BOOST: 			"Toute modification de la fonction NAT Boost impliquera un redémarrage de l'appareil, êtes vous sûr de vouloir continuer ?",
			NOTICE:						"2. Votre point d'accès et la source pontée ne sont pas sur le même canal, Voulez vous en changer.",

			UNIT: 						"(5 à 7200) paquets/seconde",
			LED: 						"DEL",
			NIGHT_MODE: 				"Mode nuit",
			PERIOD_NIGHT_TIME: 			"Etendue du mode nuit",
			ENABLE: 					"Activer le mode nuit",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "Votre LED est éteint. Si vous souhaitez utiliser cette fonction, veuillez cliquer ce LEDE en haut à droite de la page.",
			NOTE2:                      "La période Mode nuit est définie par l'heure du routeur. Vérifier que vous avez bien réglé l'heure du routeur."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Pas de certificat disponible, veuillez en <b>Générer</b> un avant d'activer le serveur VPN.",
			NO_CERT_NOTE2: 				"Pas de certificat disponible, veuillez en <b>Générer</b> un avant d'exporter la configuration.",
			ENABLE_VPN_SERVER: 			"Activer le serveur VPN",
			SERVICE_TYPE: 				"Type de Service",
			SERVICE_PORT: 				"Port de service",
			VPN_SUBNET: 				"Sous-réseau/masque réseau VPN",
			CLIENTS_ACCESS: 			"Accès clients",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Réseau domestique exclusivement",
			INTERNET_HOME: 				"Réseau Internet et domestique",
			CERT_STR: 					"Pas de certificat disponible, cliquez sur OK pour en générer un, puis enregistrez votre configuration.",
			CERT_STR2: 					"Pas de certificat disponible, cliquez sur OK pour en générer un, puis exportez votre configuration.",
			CONF_FILE: 					"Fichier de configuration", 
			EXPORT_CONF_FILE: 			"Exporter la configuration",
			EXPORT: 					"Exporter",

			INSTALL_GUIDE: 				"Guide d'installation de client VPN",
			INSTALL_STEP: 				"Pour activer et connecter vos dispositifs clients au serveur OPenVPN :",
			INSTALL_NOTICE:				"Avant de configurer le serveur OPenVPN, veuillez configurer le service DNS dynamique (recommandé) ou assignez une adresse IP statique au port WAN. Vérifiez que l'heure est correcte.",
			INSTALL_NOTE1: 				"Sélectionnez Activer le serveur VPN",
			INSTALL_NOTE2: 				"Avant de configurer le serveur OpenVPN, merci de configurer le service de DNS Synamique (recommandé) ou assignez une adresse IP Statique au port WAN. Assurez-vous que le port externe des paramètres NAT n'est pas le port de service et que la DMZ est désactivée, vérifiez de plus que les paramètres horaires sont corrects.",
			INSTALL_NOTE3: 				"Cliquez sur Exporter pour enregistrer le fichier de configuration.",
			INSTALL_NOTE4: 				"Sur vos clients, téléchargez et installez le client OpenVPN depuis <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Les plateformes officiellement supportées incluent Windows, OSX, Linux.",
			INSTALL_NOTE5: 				"Lancer le client OpenVPN et ajouter une nouvelle connexion VPN en utilisant le fichier de configuration sauvegardé pour connecter votre client au serveur VPN.",
			NOTE: 						"Pour en savoir plus à propos du client OpenVPN, consultez <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"VPN PPTP",
			CLIENT_IP_ADDRESS: 			"Adresse IP du client",
			ACCOUNT_USERNAME: 			"Nom d'utilisateur",
			ACCOUNT_PASSWORD: 			"Mot de passe",
			CLIENT_IP_NOTE: 			"(jusqu'à 10 clients)",
			SAME_SUBNET_NOTE: 			"L'adresse IP du client et l'adresse IP LAN ne peuvent être identiques.",
			CONFLICT_WITH_DHCP: 		"L'adresse IP du client est en conflit avec la plage d'adresses IP du DHCP.",
			CONFLICT_WITH_RESERVED: 	"L'adresse IP du client est en conflit avec l'adresse IP réservée.",
			CONFLICT_WITH_OPENVPN: 		"L'adresse IP du client et l'adresse IP OpenVPN ne peuvent être dans le même sous-réseau.",
			SAME_SUBNET_NOTE2: 			"Le sous-réseau/masque de réseau VPN et l'adresse IP LAN ne peuvent pas faire partie du même sous-réseau.",
			CONFLICT_WITH_DHCP2: 		"Le sous-réseau/masque réseau sont en conflit avec la plage d'adresses IP du DHCP.",
			CONFLICT_WITH_RESERVED2: 	"Le sous-réseau/masque réseau sont en conflit avec l'adresse IP réservée.",
			CONFLICT_WITH_PPTPVPN: 		"Le sous-réseau/masque réseau et l'adresse IP du VPN PPTP ne peuvent être dans le même sous-réseau.",
			VPN_MASK_ERROR: 			"Le masque de sous-réseau ne peut être plus grand que 255.255.255.248.",
			ACCOUNT_LIST: 				"Liste de compte (Jusqu'à 16 utilisateurs)",
			ADVANCED_SETTING: 			"Configuration Avancée",
			ALLOW_SAMBA: 				"Permettre l'accès SAMBA (emplacement réseau)",
			ALLOW_NETBIOS: 				"Permettre la traversée NetBIOS",
			ALLOW_UNENCRYPTED_CONN: 	"Permettre les connexions non chiffrées",
			USERNAME_CONFLICT: 			"Ce nom d'utilisateur existe déjà.",
			
			CONNECT_PPTP: 				"Pour activer et connecter vos dispositifs clients au serveur PPTP VPN :",
			CONNECT_NOTICE:				"Avant de configurer le serveur PPTP VPN, veuillez configurer le service DNS dynamique (recommandé) ou assignez une adresse IP statique au port WAN. Vérifiez que votre port externe des paramètres NAT n'est pas1723, que DMZ est désactivé et que l'heure est correcte.",
			CONNECT_NOTE1: 				"Sélectionnez Activer le serveur VPN",
			CONNECT_NOTE2: 				"Configurer les paramètres du serveur PPTP VPN et cliquez sur Enregistrer.",
			CONNECT_NOTE3: 				"Sur vos dispositifs clients, créez une connexion PPTP VPN.  Les plateformes officiellement prise en charge sont Windows, Mac OSX, Linux.",
			CONNECT_NOTE4: 				"Lancez le programme PPTP VPN, ajoutez une nouvelle connexion et saisissez le nom de domaine du service DDNS enregistré ou l'adresse IP statique assignée au port WAN pour connecter votre dispositif client au serveur PPTP VPN.",
			
			GENERATE_CERT: 				"Certifier",
			GENERATE_NEW_CERT: 			"Générer le certificat.",
			GENERATE: 					"Générer",
			GENERATE_TIPS: 				"Certificat en cours de génération... <br/>Cela va prendre quelques minutes, veuillez patienter.",
			CERT_SUCCESS: 				"Succès",
			CERT_FAIL: 					"Échec, veuillez réessayer.",
			
			VPN_CONNECTIONS: 			"Connexions VPN",
			OPEN_VPN_CONNECTIONS: 		"Connexions OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"Connexions PPTP VPN",
			USER:				"Utilisateur",
			REMOTE_IP:			"IP Distante",
			ASSIGNED_IP:			"IP Assignée"
		}
	};
})(jQuery);

