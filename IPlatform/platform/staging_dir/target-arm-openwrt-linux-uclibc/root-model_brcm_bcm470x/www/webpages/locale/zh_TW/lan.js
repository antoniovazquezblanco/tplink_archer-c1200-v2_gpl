(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			EMAIL: 						"電子郵件",
			FORGET_PASSWORD: 			"忘記密碼？",
			LOGIN: 						"登入",
			BEGIN: 						"讓我們開始吧！",
			IMPORTANT_UPDATE_INFO: 		"為了避免與前端設備衝突，您的路由器IP位址已經被變更為",
			CONTINUE: 					"繼續",

			IMPORTANT_NOTICE: 			"重要注意事項",
			OR: 						"，您確定要繼續拜訪",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"壓按路由器後方的Reset按鈕約%SECONDS%秒再放開，路由器會將設定值清空回到原廠設定。",
			FORGET_PASSWORD_INFO_1: 	"如果\"密碼復原\"功能是啟用的話，一個用於恢復使用者名稱與密碼預設值的驗證碼將會被送到您之前設定的指定電子信箱。",
			FORGET_PASSWORD_SEND_FAILED:"寄送驗證碼失敗！請檢查您的網際網路連線是否正常？",

			VERIFICATION_CODE: 			"驗證碼",

			RECEIVE_CODE: 				"送出驗證碼",

			CONFIRM: 					"確認",
			WELCOME: 					"歡迎使用TP-Link %model%。請登入。",
			SEC: 						"秒",

			USER_CONFLICT: 				"登入發生衝突！",
			FIRST_TIME: 				"請先設定您的%PRODUCT%連線到網際網路。首先，請創建一個設備密碼以管理您的%PRODUCT%。",
			FIRST_TIME1: 				"請創建一個管理員密碼以管理您的%model%。",
			USER_CONFLICT_INFO: 		"使用者%USER%使用主機 %HOST% (%IP%/%MAC%) 目前已經登入本路由器。您無法在同時間登入，請稍候再試。",
			USER_CONFLICT_INFO_2: 		"使用者 %USER% (%IP%)目前已經登入本路由器。您無法在同時間登入，請稍候再試。",
			USER_CONFLICT_INFO_3: "一次只有一個設備可以登入。您要繼續並強迫其它設備登出嗎？",
			
			LOGIN_FAILED: 				"登入失敗！",
			LOGIN_FAILED_COUNT: 		"您已經登入失敗 %num1 次，您尚有 %num2 次的機會可以嘗試登入。",
			NO_COOKIE: 					"您必須啟用Cookies以進行登入動作。請啟用Cookies或關閉隱身(私人瀏覽)模式。", 

			FORGET_PASSWORD_NOTE: 		"如果您之前沒有設定\"密碼復原\"功能，您可以壓按路由器後方的恢復原廠預設值按鈕約%SECONDS%秒再放開，路由器會將設定值清空回到原廠設定。"
		},
		INIT: {
			PASSWORD: 					"密碼",
			CONFIRM_PASSWORD:				"確認密碼",
			BEGIN: 						"讓我們開始吧！",
			IMPORTANT_UPDATE_INFO: 		"為避免與前端設備發生衝突，您的路由器的IP位址已經被更新為",
			CONTINUE: 					"下一步",

			IMPORTANT_NOTICE: 			"重要注意事項",
			OR: 						"，您確定要繼續拜訪",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"確認",

			SEC: 						"秒",

			USER_CONFLICT: 				"登入衝突！",
			
			USER_CONFLICT_INFO: 		"使用者%USER%主機%HOST% (%IP%/%MAC%)目前已經登入到路由器。您不能同時登入，請稍後再試。",
			USER_CONFLICT_INFO_2: 		"使用者%USER% (%IP%)目前已經登入到路由器。您不能同時登入，請稍後再試。",
			
			LOGIN_FAILED: 				"登入失敗！",
			LOGIN_FAILED_COUNT: 		"您已經登入失敗 %num1 次，您尚有 %num2 次的機會可以嘗試登入。",
			NO_COOKIE: 					"您必須啟用Cookies以進行登入動作。請啟用Cookies或關閉隱身(私人瀏覽)模式。", 

			INIT_NOTE_TITLE: 			"親愛的客戶，",
			INIT_NOTE_CONTENT: 			"請先設定您的%PRODUCT%連線到網際網路。首先，請創建一個設備密碼以管理您的%PRODUCT%。"

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"韌體版本：",
			FEATURE: 						"修改與錯誤修正：",
			TITLE: 							"已偵測到可用的韌體升級。",
			UPGRADE_NOW: 					"立刻升級",
			REMIND: 						"稍後提醒我",
			NOTICE:    						"嗨，您的路由器有可用的新韌體。",
			NEVER: 							"忽略此版本"
			
		},

		WAN_ERROR: {
			TITLE: 							"WAN連線錯誤！",
			STATUS: 						"狀態",
			INFO: 							"資訊",
			SETUP: 							"設定一個網際網路連線",
			NEVER: 							"別再提醒我"
		},

		OFFLINE_ERROR:{
			TITLE: "糟糕…我們不能連到雲端伺服器。",
			NOTE1: "1. 請確認您的網際網路連線已可正常連線。",
			NOTE2: "2. 原端伺服器可能是暫時不能存取。請稍後重整頁面。",
			NOTE3: "3. 如果問題仍然存在，請聯絡<a target=\"_blank\" id=\"support\">TP-Link技術支援</a>。",
			ERROR: "錯誤"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"韌體版本：",
			HARDWARE_VERSION: 				"硬體版本：",
			HELP_SUPPORT: 					"支援",
			FAQ: 							"問與答(FAQ)",
			CONFIRM_REBOOT: 				"您確定要重新啟動路由器嗎？",
			CONFIRM_LOGOUT: 				"您確定要登出嗎？",
			UPGRADE_ALERT_1: 				"目前的韌體不支援TP-Link雲端服務。我們強烈建議您到www.tp-link.com下載最新韌體並更新韌體。",
			UPGRADE_ALERT_2: 				"目前的韌體不支援TP-Link雲端服務。我們強烈建議您透過點選位於右上角的更新圖示來更新韌體。",
			ACCOUNT_UNLOGIN: 				"帳號",

			REBOOTING: 						"重新啟動中…<br/>在重新啟動程序完成前請不要進行任何操作。",

			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE: 			"掃描此QR碼以下載TP-Link Tether app",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"方便您可以從任何行動設備管理您的網路。 ",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"完全由您一手掌控。"
		},

		NAV: {
			QUICK_SETUP: 				"快速設定",
			BASIC: 						"基本設定",
			ADVANCED: 					"進階設定"
		},

		CONTROL: {
			LOGIN: 						"登入",
			LOGOUT: 					"登出",
			UPDATE: 					"更新",
			REBOOT: 					"重新啟動",
			LED: 						"LED",
			LED_ON: 					"LED開",
			LED_OFF: 					"LED關",
			LED_DISABLED: 				"在夜間模式期間，該LED狀態不能被變更。"
		},

		LANGUAGE: {
			EN_US: 						"英文",
			ZH_CN: 						"簡體中文"
		},

		REGION: {
			ALBANIA: 					"阿爾巴尼亞",
			ALGERIA: 					"阿爾及利亞",
			AMERICAN_SAMOA: 			"美屬薩摩亞群島",
			ARGENTINA: 					"阿根廷",
			ARMENIA: 					"亞美尼亞",
			ARUBA: 						"阿魯巴國",
			AUSTRALIA: 					"澳大利亞",
			AUSTRIA: 					"奧地利",
			AZERBAIJAN: 				"亞塞拜然",
			BAHAMAS: 					"巴哈馬",
			BAHRAIN: 					"巴林",
			BANGLADESH: 				"孟加拉",
			BARBADOS: 					"巴貝多",
			BELARUS: 					"白俄羅斯",
			BELGIUM: 					"比利時",
			BELIZE: 					"貝里斯",
			BERUMUDA: 					"百慕達",
			BOLIVIA: 					"玻利維亞",
			BOSNIA_HERZEGOWINA: 		"波士尼亞與赫塞哥維納",
			BRAZIL: 					"巴西",
			BRUNEI_DARUSSALAM: 			"汶萊",
			BULGARIA: 					"保加利亞",
			CAMBODIA: 					"柬埔寨",
			CANADA: 					"加拿大",
			CAYMAN_ISLANDS: 			"英屬開曼群島",
			CHILE: 						"智利",
			CHINA: 						"中華人民共和國",
			COLOMBIA: 					"哥倫比亞",
			COSTA_RICA: 				"哥斯大黎加",
			CROATIA: 					"克羅埃西亞",
			CYPRUS: 					"賽普勒斯",
			CZECH_REPUBLIC: 			"捷克共和國",
			DENMARK: 					"丹麥",
			DOMINICAN_REPUBLIC: 		"多明尼加共和國",
			ECUADOR: 					"厄瓜多",
			EGYPT: 						"埃及",
			EL_SALVADOR: 				"薩爾瓦多",
			ESTONIA: 					"愛沙尼亞",
			ETHIOPIA: 					"衣索比亞",
			FAEROE_ISLANDS: 			"法羅群島",
			FINLAND: 					"芬蘭",
			FRANCE: 					"法國",
			FRENCH_GUIANA: 				"法屬圭亞那",
			FRENCH_POLYNESIA: 			"法屬玻里尼西亞",
			GEORGIA: 					"喬治亞",
			GERMANY: 					"德國",
			GREECE: 					"希臘",
			GREENLAND: 					"格陵蘭",
			GRENADA: 					"格瑞那達",
			GUADELOUPE: 				"法屬瓜德羅普",
			GUAM: 						"美屬關島",
			GUATEMALA: 					"瓜地馬拉",
			HAITI: 						"海地",
			HONDURAS: 					"宏都拉斯",
			HONG_KONG: 					"香港",
			HUNGARY: 					"匈牙利",
			ICELAND: 					"冰島",
			INDIA: 						"印度",
			INDONESIA: 					"印尼",
			IRAN: 						"伊朗",
			IRAQ: 						"伊拉克",
			IRELAND: 					"愛爾蘭",
			ISRAEL: 					"以色列",
			ITALY: 						"義大利",
			JAMAICA: 					"牙買加",

			JAPAN: 						"日本",
			JAPAN_1: 					"日本1",
			JAPAN_2: 					"日本2",
			JAPAN_3: 					"日本3",
			JAPAN_4: 					"日本4",
			JAPAN_5: 					"日本5",
			JAPAN_6: 					"日本6",

			JORDAN: 					"約旦",
			KAZAKHSTAN: 				"哈薩克",
			KENYA: 						"肯亞",

			NORTH_KOREA: 				"北韓",
			KOREA_REPUBLIC: 			"南韓",
			KOREA_REPUBLIC_3: 			"南韓3",

			KUWAIT: 					"科威特",
			LATVIA: 					"拉脫維亞",
			LEBANON: 					"黎巴嫩",
			LIBYA: 						"利比亞",
			LIECHTENSTEIN: 				"列支敦斯登",
			LITHUANIA: 					"立陶宛",
			LUXEMBOURG: 				"盧森堡",
			MACAU: 						"澳門",
			MACEDONIA: 					"前南斯拉夫馬其頓共和國",
			MALAWI: 					"馬拉威",
			MALAYSIA: 					"馬來西亞",
			MALDIVES: 					"馬爾地夫",
			MALTA: 						"馬爾他",
			MARTHINIQUE: 				"法屬馬丁尼克",
			MAURITIUS: 					"模里西斯",
			MAYOTTE: 					"法屬馬約特",
			MEXICO: 					"墨西哥",
			MONACO: 					"摩納哥",
			MONGOLIA: 					"蒙古國",
			MOROCCO: 					"摩洛哥",
			NEPAL: 						"尼泊爾",
			NETHERLANDS: 				"荷蘭",
			NETHERLANDS_ANTILLES: 		"荷屬安地列斯",

			NEW_ZEALAND: 				"紐西蘭",
			NICARAGUA: 					"尼加拉瓜",
			NIGERIA: 					"奈及利亞",
			NORWAY: 					"挪威",
			NORTHERN_MARIANA_ISLANDS: 	"北馬里亞納群島",
			OMAN: 						"阿曼",
			PAKISTAN: 					"巴基斯坦伊斯蘭共和國",
			PANAMA: 					"巴拿馬",
			PAPUA_NEW_GUINEA: 			"巴布亞新幾內亞",
			PARAGUAY: 					"巴拉圭",
			PERU: 						"祕魯",
			PHILIPPINES: 				"菲律賓",
			POLAND: 					"波蘭",
			PORTUGAL: 					"葡萄牙",
			PUERTO_RICO: 				"波多黎各",
			QATAR: 						"卡達",
			REUNION: 					"法屬留尼旺",
			ROMANIA: 					"羅馬尼亞",
			RUSSIA: 					"俄羅斯",
			RWANDA: 					"盧安達",
			SAMOA: 						"薩摩亞",
			SAUDI_ARABIA: 				"沙烏地阿拉伯",
			SINGAPORE: 					"新加坡",
			SLOVAK_REPUBLIC: 			"斯洛伐克共和國",
			SLOVENIA: 					"斯洛維尼亞",
			SOUTH_AFRICA: 				"南非",
			SPAIN: 						"西班牙",
			SRI_LANKA: 					"斯里蘭卡",
			SURINAME: 					"蘇利南",
			SWEDEN: 					"瑞典",
			SWITZERLAND: 				"瑞士",
			SYRIA: 						"敘利亞",
			TAIWAN: 					"臺灣",
			TANZANIA: 					"坦尚尼亞",
			THAILAND: 					"泰國",
			TRINIDAD_TOBAGO: 			"千里達及托巴哥",
			TUNISIA: 					"突尼西亞",
			TURKEY: 					"土耳其",
			UGANDA: 					"烏干達",
			UKRAINE: 					"烏克蘭",
			UNITED_ARAB_EMIRATES: 		"阿拉伯聯合大公國",
			UNITED_KINGDOM: 			"英國",
			UNITED_STATES: 				"美國",
			URUGUAY: 					"烏拉圭",
			UZBEKISTAN: 				"烏茲別克",
			VENEZUELA: 					"委內瑞拉",
			VIETNAM: 					"越南",
			VIRGIN_ISLANDS: 			"美屬維京群島",
			YEMEN: 						"葉門",
			ZIMBABWE: 					"辛巴威"
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
			M_INDONESIA:                                                  "印尼",
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
			M_LUXEMBOURG:                                                 "盧森堡",
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
			ENIWETOK: 					"(GMT-12:00) 埃內韋塔克、瓜加林", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) 中途島、薩摩亞",
			HAWAII: 					"(GMT-10:00) 夏威夷",
			ALASKA: 					"(GMT-09:00) 阿拉斯加",
			PACIFIC_TIME: 				"(GMT-08:00) 太平洋時間",
			MOUNTAIN_TIME: 				"(GMT-07:00) 山區時間 (美國 加拿大)",
			CENTRAL_TIME: 				"(GMT-06:00) 中部時間 (美國 加拿大)",
			EASTERN_TIME: 				"(GMT-05:00) 東部時間 (美國 加拿大)",
			CARACAS:					"(GMT-04:30) 卡拉卡斯",
			ATLANTIC_TIME: 				"(GMT-04:00) 大西洋時間 (加拿大)",
			NEWFOUNDLAND: 				"(GMT-03:30) 紐芬蘭",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) 巴西利雅、布宜諾斯艾利斯",
			MID_ATLANTIC: 				"(GMT-02:00) 大西洋中部",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) 亞速爾群島、維德角群島",
			GREENWICH_MEAN_TIME: 		"(GMT) 格林威治標準時間、都柏林、倫敦",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) 柏林、斯德哥爾摩、羅馬、伯恩、布魯塞爾",
			ATHENS_HELSINKI: 			"(GMT+02:00) 雅典、赫爾辛基、東歐、以色列",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) 巴格達、科威特、奈洛比、利雅德、莫斯科",

			TEHERAN: 					"(GMT+03:30) 德黑蘭",

			ABU_DHABI: 					"(GMT+04:00) 阿布達比、馬斯喀特、喀山、伏爾加格勒",

			KABUL: 						"(GMT+04:30) 喀布爾",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) 伊斯蘭堡，喀拉蚩，葉卡捷琳堡",

			MADRAS_CALCUTTA: 			"(GMT+05:30) 馬德拉斯，加爾各答，孟買，新德里",
			KATMANDU: 					"(GMT+05:45) 加德滿都",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) 阿拉木圖，達卡",
			RANGOON: 					"(GMT+06:30) 仰光",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) 曼谷，雅加達，河內",
			BEIJING_HONGKONG: 			"(GMT+08:00) 北京，台北，香港，伯斯，新加坡",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) 東京，大阪，札幌，漢城，雅庫茨克",

			ADELAIDE: 					"(GMT+09:30) 阿得萊德",

			BRISBANE_CANBERRA: 			"(GMT+10:00) 布里斯本、坎培拉、墨爾本、雪梨",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) 馬加丹，所羅門群島，新喀里多尼亞",
			FIJI_KAMCHATKA: 			"(GMT+12:00) 斐濟，堪察加半島，奧克蘭",
			NUKU: 						"(GMT+13:00) 努瓜婁發"
		},

		APPLIST:{
			APP:						"應用程式",
			GAME:						"遊戲",
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
			DAY: 						"星期",

			MONDAY: 					"星期一",
			TUESDAY: 					"星期二",
			WEDNESDAY: 					"星期三",
			THURSDAY: 					"星期四",
			FRIDAY: 					"星期五",
			SATURDAY: 					"星期六",
			SUNDAY: 					"星期日",
			
			MON: 						"星期一",
			TUES: 						"星期二",
			WED: 						"星期三",
			THUR: 						"星期四",
			FRI: 						"星期五",
			SAT: 						"星期六",
			SUN: 						"星期日",

			JAN: 						"一月",
			FEB: 						"二月",
			MAR: 						"三月",
			APR: 						"四月",
			MAY: 						"五月",
			JUN: 						"六月",
			JUL: 						"七月",
			AUG: 						"八月",
			SEP: 						"九月",
			OCT: 						"十月",
			NOV: 						"十一月",
			DEC: 						"十二月"

		},

		HOUR: {
			AM_1: 						"上午1點",
			AM_2: 						"上午2點",
			AM_3: 						"上午3點",
			AM_4: 						"上午4點",
			AM_5: 						"上午5點",
			AM_6: 						"上午6點",
			AM_7: 						"上午7點",
			AM_8: 						"上午8點",
			AM_9: 						"上午9點",
			AM_10: 						"上午10點",
			AM_11: 						"上午11點",
			AM_12: 						"上午12點",
			PM_1: 						"下午1點",
			PM_2: 						"下午2點",
			PM_3: 						"下午3點",
			PM_4: 						"下午4點",
			PM_5: 						"下午5點",
			PM_6: 						"下午6點",
			PM_7: 						"下午7點",
			PM_8: 						"下午8點",
			PM_9: 						"下午9點",
			PM_10: 						"下午10點",
			PM_11: 						"下午11點",
			PM_12: 						"下午12點"
		},

		ORDER: {
			"1ST": 						"第一",
			"2ND": 						"第二",
			"3RD": 						"第三",
			"4TH": 						"第四",
			"5TH": 						"最後",
			"1ST_": 					"第一",

			TH: 						"日"
		},

		GRID: {
			CLIENT_NUMBER: 				"使用者數量",

			ID: 						"ID",
			MODIFY: 					"修改",
			STATUS: 					"狀態",
			ENABLE: 					"啟用",

			OPERATION: 					"運作",
			CHOOSE: 					"選擇",
			DESCRIPTION: 				"描述",
			

			AUTO_REFRESH: 				"自動重整",
			REFRESH: 					"重新整理",
			NUMBER: 					"數量",
			ENABLED: 					"啟用",
			DISABLED: 					"停用",
			ACTIVE: 					"啟動",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"增加",
			CHOOSE: 					"選擇",
			EDIT: 						"編輯",
			DELETE: 					"刪除",
			DELETE_ALL: 				"全部刪除",
			REMOVE: 					"移除",
			RESET: 						"重置",
			RESET_ALL: 					"全部重置",
			DETECT: 					"偵測",
			ENABLE: 					"啟用",
			DISABLE: 					"停用",
			CLEAR: 						"清除",

			REFRESH: 					"重新整理",
			SEARCH: 					"搜尋…",
			BROWSE: 					"瀏覽",

			SAVE: 						"儲存",
			BACK: 						"上一步",

			PREV: 						"上一頁",
			NEXT: 						"下一步",
			FINISH: 					"結束",
			
			ON: 						"開",
			OFF: 						"關",
			LOW: 						"低",
			MIDDLE: 					"中",
			HIGH: 						"高",
			
			OK: 						"確定",
			CANCEL: 					"取消",

			YES: 						"是",
			NO: 						"否",
			
			CONNECTED: 					"已連線",
			CONNECTING: 				"連線中",
			DISCONNECTING: 				"斷線中",
			DISCONNECTED: 				"未連線",

			PASSWORD_HINT: 				"密碼",
			FILEBUTTONTEXT: 			"瀏覽",
			FILEBLANKTEXT: 				"請選擇一個檔案",
			NOSELECTEDTEXT: 			"選擇項目",

			ADD_A_NEW_KEYWORD: 			"增加新關鍵字",

			SUCCESSED: 					"成功！",
			FORM_SAVED: 				"已儲存",
			FORM_FAILED: 				"失敗",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"已儲存",
			GRID_FAILED: 				"失敗",
			GRID_NONE_SELECT: 			"請至少選擇一個項目。",
			GRID_DELETE_COMFIRM: 		"您確定要刪除這些項目嗎？",
			GRID_DELETE_ALL_COMFIRM: 	"您確定要刪除全部的項目嗎？",
			GRID_MAX_RULES: 			"超出最大項目。",
			KEYWORD_MAX_OVERFLOW: 		"關鍵字數量超出限制。",

			NOTE: 						"註："
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"錯誤的格式。",
			BLANKTEXT: 					"此欄位為必填欄位。",

			EMAIL: 						"無效的電子郵件格式。",
			NUMBER: 					"錯誤的格式。",

			NUMBER_MIN: 				"錯誤的數值，請輸入%min以上的數值。",
			NUMBER_MAX: 				"錯誤的數值，請輸入%max以下的數值。",

			NUMBER_MIN_MAX: 			"錯誤的數值，請輸入%min 到%max之間的數值。",
			HEX: 						"此欄位必須是十六進位數字。",

			IP: 						"錯誤的格式。",

			IP_NO_ALL_ZERO:				"位址不應該是0.0.0.0。",
			IP_NO_LOOP:					"位址不應該是回環位址。",
			IP_NO_D_TYPE:				"位址不應該是Class D IP。",
			IP_NO_E_TYPE:				"位址不應該是Class E IP。",
			IP_NO_ALL_ONE:				"位址不應該是255.255.255.255。",
			IP_NO_FIRST_ALL_ONE:		"位址不應該以255作為開頭。",
			IP_NO_FIRST_ZERO:			"位址不應該以0作為開頭。",
			MASK_NO_ALL_ONE:			"遮罩不可以是255.255.255.255。",

			IPV6: 						"錯誤的格式。",
			IPV6_NOT_GLOBAL:			"錯誤的格式。",
			IPV6_NOT_PREFIX:			"錯誤的格式。",
			IP_DOMAIN: 					"錯誤的格式。",
			IPV6_DOMAIN: 				"錯誤的格式。",
			MAC: 						"錯誤的格式。",
			MULTI_MAC:					"錯誤的格式。",
			DATE: 						"錯誤的格式。",
			DATE_INVALID: 				"請輸入介於1970.01.01到2030.12.31之間的日期。",
			MASK: 						"錯誤的格式。",
			DOMAIN: 					"錯誤的格式。",
			STRING_DOMAIN:              "錯誤的格式。",
			USER: 						"錯誤的格式。",
			NOTE: 						"錯誤的格式。",
			PWD: 						"錯誤的格式。",
			SSID: 						"錯誤的格式。",
			NAME:						"錯誤的格式。",
			ASCII_VISIBLE:				"錯誤的格式。",
			STRING_VISIBLE:				"錯誤的格式。",
			STRING_VISIBLE_NO_COMMA:    "錯誤的格式。",
			STRING_VISIBLE_ALLOW_BLANK: "錯誤的格式。",
			NAME_SPECIAL: 				"請輸入 4 至 15 個字母字元、數字、- 和 _。",
			VPN_NAME_PWD: 				"請輸入 1 至 15 個字母字元、數字、- 和 _。"	
			
		},


		ERROR: {			
			"00000001":					"錯誤的檔案類型。",
			"00000002":					"校驗碼錯誤。",
			"00000003":					"檔案過大。",
			"00000004":					"上傳錯誤。",
			"00000005":					"重啟錯誤。",
			"00000006":					"未知的錯誤。",
			"00000007":					"此項目已經存在，請輸入另外一個。",

			"00000009":					"請使用預設值21或請輸入1024到65535之間的數值。",
			"00000010":					"通訊埠必須是一個數字。",

			"00000011":					"使用者名稱必須與從值相同。",
			"00000012": 				"使用者名稱必須以英文開頭。",

			"00000021":					"錯誤的格式。",

			"00000032": 				"數值必須小於低。",
			"00000033": 				"數值必須小於中等與低。",
			"00000034": 				"錯誤的數值，請輸入5到7200之間的數字。",

			"00000039": 				"請使用預設值0或請輸入30到86400之間的數值。",
			"00000040": 				"必須填入SSID與MAC位址。",

			"00000042": 				"請使用預設值80或請輸入1024到65535之間的數值。",

			"00000045": 				"預設閘道與LAN IP位址必須在相同網段內，請重新輸入。",

			"00000047": 				"IP位址必須與LAN IP位址在相同網段內，請重新輸入。",

			
			"00000049":					"目的地網路錯誤。",

			"00000050": 				"錯誤的 DNS 伺服器IP位址。請輸入另一個IP位址。",
			"00000051": 				"此MAC位址已經存在，請輸入另一個。",
			"00000052": 				"此IP位址已經存在，請輸入另一個。",

			"00000053": 				"開始的IP位址不應該大於結束的IP位址。<br/>請重新輸入。",

			"00000054": 				"IP位址範圍必須與LAN IP位址在相同網段內，請重新輸入。",

			"00000055": 				"IP不可以與LAN位址相同。",

			"00000056": 				"遠端IP位址不可與目前的LAN IP位址在相同的網段內，請輸入另一個。",

			"00000057": 				"錯誤的PSK密碼，請重新輸入一次。",
			"00000058": 				"錯誤的WEP密碼，請重新輸入一次。",

			"00000059": 				"錯誤的子網路遮罩與LAN IP位址。請輸入正確的位址。",

			"00000060": 				"WAN IP位址與LAN IP位址不可以在相同網段內。<br/>請輸入另一個。",

			"00000061": 				"開始時間不可以早於結束時間。",

			"00000062": 				"此欄位為必填欄位。",
			"00000063": 				"此欄位為必填欄位。",

			"00000064": 				"不能阻擋該主機的MAC位址。",
			"00000065": 				"此項目與已存在的項目發生衝突，請檢查。",
			
			"00000066": 				"密碼必須在8-63個字之間或是64個十六進位數字。",
			"00000067": 				"密碼必須是10個十六進位數字。",
			"00000068": 				"密碼必須是5個ASCII字元。",
			"00000069": 				"密碼必須是26個十六進位數字。",
			"00000070": 				"密碼必須是13個ASCII字元。",
			"00000071": 				"密碼必須是32個十六進位數字。",
			"00000072": 				"密碼必須是16個ASCII字元。",
			"00000073": 				"密碼必須小於64個字元。",

			"00000074": 				"錯誤的檔案類型。",

			"00000075": 				"PIN碼長度必須是8個數字。",

			"00000076": 				"此項目與已存在的項目衝突，請檢查觸發通訊埠與觸發通訊協定。",
			"00000077": 				"IP位址不可以與LAN IP位址相同。",
			"00000078": 				"主機IP位址不可與LAN IP位址相同。",

			"00000080": 				"密碼不正確，請重試一次。",

			"00000088": 				"遠端管理者不被允許進行本項操作。",
			"00000089": 				"您已經企圖登入超過%num次，請2小時後再試一次。",

			"00000090": 				"目的地IP位址不可以是LAN IP。",
			"00000091": 				"目的地IP位址不可以是WAN IP。",

			"00000092": 				"IP位址不可與LAN IP位址在相同網段內。<br/>請重新輸入。",
			"00000093": 				"IP位址不可與WAN IP位址在相同網段內。<br/>請重新輸入。",

			"00000094": 				"VLAN ID不可以相同。",
			"00000095": 				"至少需要一個VLAN ID。",

			"00000096": 				"該關鍵字已經存在。",

			"00000097": 				"在Wi-Fi按鈕被切換到開之前，對2.4GHz的頻段進行的設定將不會生效。",
			"00000098": 				"在Wi-Fi按鈕被切換到開之前，對5GHz的頻段進行的設定將不會生效。",
			"00000099": 				"在Wi-Fi按鈕被切換到開之前，對2.4GHz和5GHz頻段進行的設定將不會生效。",

			"00000100": 				"由於您的地區/國家的限制，因此您無法進行5GHz網路設定。",

			"00000101": 				"您的無線網路功能已經被關閉。如果您想要使用這個功能，請打開路由器上的實體Wi-Fi按鈕。",
			"00000102": 				"您的無線網路功能已經被關閉。如果您想要使用這個功能，請打開路由器上的實體Wi-Fi按鈕。",

			"00000103": 				"您的無線網路功能已經被關閉。如果您想要使用這個功能，請打開路由器上的實體Wi-Fi按鈕。",
			"00000104": 				"您的無線網路功能已經被關閉。",

			"00000105": 				"QoS 與 IPTV 功能不可同時啟用。",

			"00000106": 				"IP位址不可以與LAN IP位址相同。",
			
			"00000107": 				"目的地已經存在。",

			"00000110": 				"該IP位址必須與LAN IP位址在相同網段內。",
			
			"00000111": 				"無法同時開啟QoS 與<a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT 加速</a>。",
			"00000112": 				"WDS功能可以運作在 2.4GHz 或 5GHz 等頻道。另外，使用WDS後將不可再使用訪客網路。",
			"00000113": 				"WDS與訪客網路不可同時啟用。",
			"00000114": 				"無法同時開啟流量統計與<a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT加速</a>。",
			"00000115": 				"IPTV 與 <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> 功能不可同時啟用。",

			"00000117": 				"該網域名稱已經存在。",
			"00000118": 				"網域名稱的字數超過限制。",
			"00000119":				"當<a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> 或 <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">流量統計</a> 啟用後，NAT加速功能將會被停用。",

			"00000120": 				"密碼應該是5或13個字的ASCII碼。",
			"00000121": 				"密碼應該是10或26個字的十六進位碼。",
			"00000122": 				"使用者名稱與密碼為空白，您確定要繼續嗎？",
			"00000123": 				"儲存中…<br/>儲存過程中請勿進行其他操作",
			"00000124": 				"因為持續輸入錯誤的PIN碼，路由器的PIN碼已經被鎖定。請創造一個新的PIN碼。",

			"00000125": 				"QoS規則數量超過限制。",
			"00000126": 				"檔案大小超過限制。",
			"00000127": 				"檔案內容不正確。",
			"00000128": 				"請至少選擇一項應用程式。",
			"00000129": 				"請至少選擇一個實體連接埠。",
			"00000130":					"您的WPS功能是停用的。",
			"00000131": 				"NTP伺服器不應該是loopback位址",
			"00000132": 				"模式切換失敗。請稍後再試或重新啟動路由器。",
			"00000133": 				"錯誤的DMZ主機IP位址。請輸入正確的位址。",
			"00000134":  				"錯誤的內部IP。請輸入正確的。",
			"00000135": 				"韌體檔錯誤。",
			"00000136": 				"備份檔案錯誤",
			"00000137": 				"使用者名稱是空的，確定要繼續嗎？",
			"00000138": 				"密碼是空的，確定要繼續嗎？",
			"00000139": 				"錯誤的密碼還原參數。",
			"00000140": 				"錯誤的代碼。",
			"00000141": 				"密碼還原是停用的。",
			"00000142": 				"傳送代碼失敗。請檢查您的網際網路連線。",
			"00000143": 				"錯誤的電子郵件位址。",
			"00000144": 				"錯誤的電子郵件訊息。",
			"00000145": 				"無法找到主機。",
			"00000146": 				"驗證失敗。",
			"00000147": 				"通訊埠必須在1到65535之間",
			"00000148": 				"對通訊埠範圍來說，開始通訊埠號碼必須小於結束通訊埠號碼。請再次輸入。",
			"00000149": 				"通訊埠號碼重疊。請再次輸入。",
			"00000150": 				"錯誤的子網路遮罩與WAN IP位址。請輸入正確的位址。",
			"00000151": 				"請至少選擇一天。",
			"00000152": 				"請設定網際網路存取時間。",
			"00000213":					"DNS伺服器IP位址與LAN IP位址不可以在相同的子網路內。<br/>請輸入另一個。",
			"10000139": 				"沒有網際網路連線",
			"10000140": 				"請求逾時。請檢查您的網際網路連線並稍後再試一次。",
			"10000158": 				"WAN連接埠已拔除網路線。",
			"10000159": 				"無法連線至網際網路。請聯絡您的服務供應商或稍後再試一次。",
			"10000160": 				"無法從DHCP伺服器取得IP位址。請檢查WAN連線類型或稍後再試一次。",
			"10000161": 				"PPPoE驗證失敗。請檢查您的使用者名稱與密碼。",
			"10000162": 				"無法連線至PPPoE伺服器。",

			"10000164": 				"PPTP驗證失敗。請檢查您的使用者名稱與密碼。",
			"10000165": 				"無法連線至PPTP伺服器。",

			"10000167": 				"L2TP驗證失敗。請檢查您的使用者名稱與密碼。",
			"10000168": 				"無法連線至L2TP伺服器。",
			"10000169": 				"未知的錯誤。請稍後再試。",
			"10000172": 				"連線失敗。",

			"10000185": 				"系統錯誤。",	
			"10000186": 				"韌體檔錯誤。",	
			"10000187": 				"下載韌體錯誤。",	
			"10000188": 				"升級韌體錯誤。",	
			"10000191": 				"無法下載該韌體檔。",
			"10000192": 				"升級韌體錯誤。",
			"10000193": 				"無法連線至伺服器。",	
			"10000194": 				"無法連接至原端伺服器",
			"10000195": 				"您不能再次設定密碼因為您已經設定了一個。",
			
			"E3002":                    "請求逾時。", 
			"E10000": 					"常見錯誤。",
			"E20002": 					"請求逾時。",
			"E20003": 					"雲端伺服器忙碌中。請稍後再試。",
			"E20107": 					"無效的輸入。",
			"E20200": 					"無效的電子郵件格式。",
			"E20502": 					"無法綁定該設備。請稍後再試。",
			"E20503": 					"無法解除綁定該設備。請稍後再試。",
			"E20506": 					"操作失敗。該設備已經綁定到另一個雲端帳號。",
			"E20507": 					"此設備已經從該帳號解除綁定。",
			"E20508": 					"綁定帳號的數量已達最大上限。",
			"E20509": 					"使用者帳號無權去綁定新使用者。",
			"E20571": 					"此設備為離線。",
			"E20580": 					"操作失敗。此帳號沒有綁定該設備。",
			"E20600": 					"此電子郵件沒有註冊。",
			"E20601": 					"錯誤的使用者名稱或密碼。",
			"E20602": 					"此帳號尚未啟動。",
			"E20603": 					"此電子郵件已經註冊。",
			"E20604": 					"無效的使用者名稱。請輸入電子郵件地址或電話號碼。",
			"E20606": 					"無法發送帳號啟動電子郵件。",
			"E20615": 					"無效的密碼。請輸入不帶空格的6-32個ASCII字元。",
			"E20616": 					"無效的密碼。請輸入不帶空格的6-32個ASCII字元。",
			"E20617": 					"此帳號不存在。",
			"E20618": 					"此帳號不存在。",
			"E20620": 					"無效的暱稱。請輸入1-64個字元。",
			"E20661": 					"因為過度的登入嘗試，此帳號被封鎖2小時(在半小時內20次)。",
			"E20662": 					"該設備被封鎖。在接下來的24小時，該設備將不會對任何驗證碼回應請求。",
			"E20671": 					"無法驗證帳號。",
			"E20672": 					"無法驗證帳號。該帳號啟動連結已經過期。請提交新的請求。",
			"E20673": 					"密碼重置連結已經過期。請提交新的請求。",
			"E20674": 					"無法重置密碼。",
			"E20675": 					"此帳號目前已經在其它地方登入。",
			"E22000": 					"無效的輸入。",
			"E22001": 					"網域名稱已經註冊。",
			"E22002": 					"註冊的網域名稱的數量已達最大上限。",
			"E22003": 					"綁定的網域名稱的數量已達最大上限。",
			"E22004": 					"此網域名稱已經綁定到另一個設備。",
			"E22006": 					"系統錯誤。請稍後再試。",
			"E22007": 					"網域名稱包含敏感字。請試試另一個。",
			"E22008": 					"網域名稱不存在。",

			"E50101": 					"WAN連接埠已拔除網路線。",
			"E50102": 					"無法連線到網際網路。請聯絡您的服務供應商或稍後再試。",
			"E50103": 					"無法從DHCP伺服器取得IP位址。請檢查WAN連線類型或稍後再試一次。",
			"E50111": 					"PPPoE驗證失敗。請檢查您的使用者名稱與密碼。",
			"E50112": 					"無法連線至PPPoE伺服器。",
			"E50121": 					"PPTP驗證失敗。請檢查您的使用者名稱與密碼。",
			"E50122": 					"無法連線至PPTP伺服器。",
			"E50131": 					"L2TP驗證失敗。請檢查您的使用者名稱與密碼。",
			"E50132": 					"無法連線至L2TP伺服器。",
			"E50140": 					"未知的錯誤。請稍後再試。",
			"E51215": 					"請求逾時。請檢查您的網際網路連線並稍後再試一次。",
			"E_CLOUD_SERVER": 			"伺服器錯誤。請稍候再試。",
			"E5000": 					"無法連接至雲端伺服器。",
			"E5001": 					"錯誤的TP-Link ID (電子郵件)。或者可能是您的設備已經離線，只有管理員(%email)可以離線存取。",
			"E5002": 					"錯誤的密碼。"
		},

		MENU: {
			STATUS: 					"狀態",
			NETWORK: 					"網路",
			NETWORK_MAP: 				"網路地圖",
			INTERNET: 					"網際網路",

			LAN: 						"區域網路(LAN)",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP 伺服器",
			DYNAMIC_DNS: 				"動態 DNS",
			ADVANCED_ROUTING: 			"進階路由",

			WIRELESS: 					"無線網路",
			WIRELESS_SETTINGS: 			"無線網路設定",
			WDSBRIDGING: 				"WDS 橋接",
			WPS: 						"WPS",
			MACFILTERING: 				"MAC位址管理",
			WIRE_STATISTICS: 			"統計",
			
			
			GUEST_NETWORK: 				"訪客網路",
			WIRELESS_SETTINGS: 			"無線網路設定",
			STORAGE_SHARING: 			"存儲共享",
			NAT_FORWARDING: 			"NAT 導向",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"虛擬伺服器",
			PORT_TRIGGERING: 			"通訊埠觸發",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"USB 設定",
			BASIC_SET: 					"基本設定",
			DISK_SET: 					"設備設定",
			FOLDER_SHARING: 			"共用存取",
			STORAGE_SHARING: 			"存儲共享",
			FTP_SERVER: 				"FTP伺服器",
			MEDIA_SERVER: 				"多媒體伺服器",
			PRINT_SERVER: 				"列印伺服器",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"家長監護",
			
			QOS:  						"QoS",
			DATABASE:  					"資料庫",

			STREAMBOOST: 				"串流加速",
			MAP: 						"地圖",
			SB_MAP: 					"地圖",
			SB_BANDWIDTH:  				"頻寬",
			SB_PRIORITY: 				"優先級",
			SB_STATISTICS: 				"統計",

			
			SECURITY: 					"安全性",
			SETTINGS: 					"設定",
			ACCESS_CONTROL: 			"存取管理",
			IP_MAC_BINDING: 			"IP&MAC 綁定",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"系統工具",
			TIME_SETTINGS: 				"時間設定",
			DIAGNOSTIC: 				"診斷",
			FIRMWARE_UPGRADE: 			"韌體升級",
			BACKUP_RESTORE: 			"備份與復原",
			ADMINISTRATION: 			"管理",
			SYSTEM_LOG: 				"系統日誌",
			STATISTICS: 				"流量統計",
			SYSTEM_PARAMETERS: 			"系統參數",
			ACCOUNT: 					"TP-Link 雲端",
			
			VPN: 						"VPN伺服器",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"VPN連接"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"地區與時區",
			INTERNET_CONNECTION_TYPE: 	"網際網路連線類型",
			WIRELESS_SETTINGS: 			"無線網路設定",
			SUMMARY: 					"摘要",
			SETUP_COMPLETE: 			"測試您的連線",
			SETUP_COMPLETE_CLOUD: 			"TP-Link雲端服務",

			EXIT: 						"離開",
			NEXT: 						"下一步",
			SAVE: 						"儲存",
			FINISH: 					"結束",
			OK: 						"確定",
			NONE: 						"無",

			REGION: 					"地區",
			TIME_ZONE: 					"時區",

			AUTO_DETECT: 				"自動偵測",
			DYNAMIC_IP: 				"浮動 IP",
			STATIC_IP: 					"固定 IP",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "如果您不確定您的網路連線類型是哪一種，可以使用「自動偵測」功能或與您的網路業者(ISP)連繫。",

			DYNAMIC_IP_INFO: 			"如果您的ISP只允許特定的MAC地址連線至網際網路，請選擇複製MAC位址，以提供其他設備進行連線。如果您不確定，請選擇不複製MAC地址。一般的中華電信使用者都不需進行此項目設定。",
			MAC_CLONE_NO: 				"請勿複製 MAC位址",
			MAC_CLONE_YES: 				"複製目前電腦的MAC位址",
			MAC_CLONE_NOTE: 			"注：如果您選擇複製MAC地址，請確定該電腦的MAC位址已經被ISP登記為通行名單，接著請點選 下一步 繼續設定。",

			PPPOE_INFO: 				"請輸入網路業者(ISP)所提供的使用者名稱與密碼。(請注意：中華電信-Hinet的使用者名稱有固定格式「8位數字@hinet.net」，例如：「87654321@hinet.net」這樣的帳號才是正確格式，如「87654321」或「HN87654321@hinet.net」，都是錯誤格式。)",
			
			STATIC_IP_INFO: 			"請輸入網路業者(ISP)所提供的IP參數值。",

			L2TP_INFO: 					"請輸入網路業者(ISP)所提供的L2TP的使用者名稱與密碼。(一般在台灣不會使用此上網類型)",
			PPTP_INFO: 					"請輸入網路業者(ISP)所提供的PPTP的使用者名稱與密碼。(一般在台灣不會使用此上網類型)",
			
			USERNAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			SERVER_IP_ADDRESS_NAME: 	"VPN 伺服器 IP/網域名稱",
			IP_ADDRESS: 				"IP 位址",
			SUBNET_MASK: 				"子網路遮罩",
			DEFAULT_GATEWAY: 			"預設閘道",
			PRIMARY_DNS: 				"主要 DNS",
			SECOND_DNS: 				"次要 DNS",
			OPTIONAL: 					"(選填)",
			
			ON: 						"開",
			OFF: 						"關",
			WIRELESS_24GHZ: 			"無線網路 2.4GHz",
			WIRELESS_5GHZ: 				"無線網路 5GHz",
			ENABLE_WIRELESS_RADIO: 		"啟用無線網路功能",
			NAME_SSID: 					"無線網路名稱 (SSID)",

			SUMMARY_INFO1: 				"在按下 <strong>下一步</strong> 按鈕前，需要將您的無線設備重新連線到新的無線網路。",
			SUMMARY_INFO2: 				"您的無線名稱和密碼已被修改為如下：",
			SUMMARY_INFO3: 				"請確保您已經連線到新的無線網路。",

			WIRELESS_24GHZ_SSID: 		"2.4GHz 無線網路名稱(SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"2.4GHz 無線網路密碼",
			WIRELESS_5GHZ_SSID: 		"5GHz 無線網路名稱(SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"5GHz 無線網路密碼",

			SORRY: 						"失敗。",
			SUCCESS: 					"成功！",
			TEST_INTERNET_SUCCESS_INFO: "設定成功！請點選 結束 以完成快速設定步驟。",

			TEST_INTERNET_FAILED_INFO_0:"請檢查是否所有快速設定參數都是正確的，並再重試一次。如果所有快速設定參數都是正確的。請將數據機重新啟動，等待2分鐘再點選測試網際網路連線一次。如果您沒有使用數據機，您也許需要聯繫您的ISP業者以尋求協助。",
			TEST_INTERNET_FAILED_INFO_1: "糟糕…網際網路連線沒有設定成功。<br />1. 請確保所有的線路都正確連接。<br />2. 點選上一步並檢查網際網路連線資訊是否正確。<br />3. 如果問題仍然存在，請聯絡我們的技術支援。",
			SUMMARY_INFO4: 				"很抱歉！我們偵測到您尚未將您的無線設備重連線到新的無線網路，請執行這個步驟然後點選<strong>OK</strong>！",
                                         
			CONGRATULARIONS: 			"恭喜！",
			COMPLETE_INFO_0: 			"您已經完成了快速安裝步驟。",
			COMPLETE_INFO_1:			"點選以下的測試網際網路連接，然後點選 結束。",
			COMPLETE_INFO_2: 			"您沒有登入到您的TP-Link雲端帳號。可以稍後從「基本>TP-Link雲端」登入",
			TEST_INTERNET: 				"測試您的連線",

			
			RESET_USER_TITLE: 			"設定一個新使用者名稱與密碼",
			NEW_USERNAME: 				"新使用者名稱",
			NEW_PASSWORD: 				"新密碼",
			CONFIRM_PASSWORD: 			"確認新密碼",
			
			NO_ACCOUNT: 				"沒有TP-Link ID嗎？",
			REGISTER_NOW: 				"立即註冊",
			REGISTER_SKIP: 				"稍後登入",
			LOGIN: 						"登入",
			REGISTER_NEW:				"註冊新帳號",
			COMPLETE_INFO_EMAIL_PREFIX: "您的TP-Link ID是：",
			COMPLETE_INFO_EMAIL_SUFFIX: "我們強烈建議您使用此帳號登入，讓您的設備管理更輕鬆並擁有更多TP-Link雲端功能。",

			INTERNET_OK: 				"恭喜！網路設定成功。盡情享受網際網路吧！",
			CLOUD_WIZARD: 				"若需更多TP-Link雲端功能，請使用您的<a class=\"link\" href=\"#\">TP-Link ID</a>登入。",
			ACCOUNT_DESP:               "透過TP-Link ID，您可以：", 
			ACCOUNT_DESP_SUB1:          "在任何地方透過網際網路存取您的設備與本地伺服器（FTP、HTTP等）",
			ACCOUNT_DESP_SUB2:          "使用在線升級功能，永遠讓您的韌體保持最新",
	        ACCOUNT_DESP_SUB3:          "透過一個帳號管理多個設備",
			
			CONFIRM: 					"確認"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"網際網路",
			INTERNET_STATUS:			"網際網路狀態",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"連線類型",
			SECONDARY_CONN: 			"第二連線",

			POOR_CONNECTED: 			"較差的連接",
			UNPLUGGED: 					"WAN連接埠未插入網路線",
			
			CONNECTED: 					"已連線",
			DISCONNECTED: 				"已中斷連線",

			INTERNET_IP_ADDR: 			"IP 位址",
			
			IP_ADDR: 					"IP 位址",
			MAC_ADDR: 					"MAC 位址",
			GATEWAY: 					"閘道",

			AUTO: 						"自動",
			
			ROUTER: 					"路由器",
			WIRELESS_CLIENTS: 			"無線網路使用者",
			HOST_CLIENTS: 				"無線使用者",
			GUEST_CLIENTS: 				"訪客使用者",
			WIRE_CLIENTS: 				"有線使用者",
			PRINTER: 					"印表機",
			USB_DISK: 					"USB 磁碟",
			WIRELESS: 					"無線網路",
			NAME: 						"名稱",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"頻道",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"無線網路 2.4GHz",
			WIRELESS_5GHZ: 				"無線網路 5GHz",
			
			GUEST_24GHZ: 				"訪客網路 2.4GHz",
			GUEST_5GHZ: 				"訪客網路 5GHz",
			
			STATUS: 					"狀態",
			TOTAL: 						"總計",
			AVAILABLE: 					"可用",
			GB: 						"GB",
			BRAND: 						"品牌",

			DYNAMIC_IP: 				"浮動 IP",
			STATIC_IP: 					"固定 IP",
			SUBNET_MASK: 				"子網路遮罩",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 通道",
			NONE: 						"無"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"網際網路",
			AUTO_DETECT: 				"自動偵測",
			INTERNET_CONN_TYPE: 		"網際網路連線類型",
			DYNAMIC_IP: 				"浮動 IP",
			STATIC_IP: 					"固定 IP",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"WAN連接埠未插入網路線",
			NONE: 						"無",
			DETECT_FAIL: 				"自動偵測失敗",
			SECONDARY_CONN: 			"第二連線",

			DYNAMIC_YES: 				"請勿複製 MAC位址",
			DYNAMIC_NO: 				"複製目前電腦的MAC位址",
			
			IP_ADDR: 					"IP 位址",
			SUBNET_MASK: 				"子網路遮罩",
			DEFAULT_GATEWAY: 			"預設閘道",
			PRIMARY_DNS: 				"主要 DNS",
			SECOND_DNS: 				"次要 DNS",
			OPTIONAL: 					"(選填)",
			USER_NAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			SERVER_IP_ADDR_NAME: 		"VPN 伺服器 IP/網域名稱",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"如果您不確定您的網路連線類型是哪一種，可以使用「自動偵測」功能或與您的網路業者(ISP)連繫。"
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"無線網路設定",
			MODE_2G: 					"無線網路 2.4GHz",
			MODE_5G: 					"無線網路 5GHz",
			WIRELESS_NETWORK_NAME: 		"無線網路名稱 (SSID)",
			WIRELESS_PASSWORD: 			"密碼",
			ENABLE_WIRELESS: 			"啟用無線網路功能",
			SAVE: 						"儲存",
			ENCRYPTION_2G_NOTICE:		"2.4G 的加密是 %s。",
			ENCRYPTION_5G_NOTICE:		"5G 的加密是 %s。",
			ENCRYPTION_2G_NO: 			"2.4GHz無線網路沒有加密。",
			ENCRYPTION_5G_NO: 			"5GHz無線網路沒有加密。",
			ENCRYPTION_SURE: 			"您確定要繼續嗎？",

			HIDE_SSID: 					"隱藏 SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"基本設定",
			TITIL_NEW:					"磁碟與帳號",
			DISK_SET:					"設備設定",

			SELFLY_REMOVE:				"安全移除",
			SCANING:					"掃描中…",
			SCAN_RESULT:				"找到 %n 磁碟",
			
			DISKS:						"磁碟",
			USERS: 						"使用者帳號",
			DEVICENAME: 				"設備名稱",
			VOLUMN: 					"磁碟區",

			USBSPACE: 					"已用空間",
			FREESPACE: 					"剩餘空間",
			STATUS: 					"狀態",
			INACT: 						"停止",
			USAGE: 						"使用",
			CAPACITY: 					"容量",
			OPERATION: 					"運作",
			
			ACC: 						"帳號管理 ",
			USERNAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			USE_LOGIN: 					"使用登入使用者",
			SCAN: 						"掃描",
			ENJECT_ALL: 				"全部退出",
			ENJECT: 					"退出",
			ADD_USER: 					"增加使用者",
			AUTH: 						"權限",


			LOCATION: 					"位置",
			MOBILE_ISP: 				"電信業者",
			DIAL_NUMBER: 				"撥號號碼",
			APN: 						"APN",
			USERNAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			MTU_SIZE: 					"MTU 大小",
			OPTIONAL: 					"(選填)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"家長監護",

			DEVICE_CTR: 				"家長監護下之設備",
			ID: 						"ID",
			DEVICE: 					"設備名稱",
			MAC_ADDRESS: 				"MAC 位址",
			TIME: 						"網際網路存取時間",
			DESCRIPTION: 				"描述",
			ENABLE: 					"啟用",
			ENABLE_THIS_ENTRY: 			"啟用",
			OPTIONAL: 					"(選填)",
			BTN_VIEW: 					"查看現有設備",
			ACCESS_DEVICES_LIST: 		"設備列表",
			OPT: 						"運作",
			STATUS: 					"狀態"
		},
		
		BASIC_GUEST:{
			TITLE: 						"訪客網路",
			MODE_2G: 					"無線網路 2.4GHz",
			MODE_5G: 					"無線網路 5GHz",
			WIRELESS_NETWORK_NAME: 		"無線網路名稱 (SSID)",
			WIRELESS_PASSWORD: 			"密碼",
			ENABLE_WIRELESS: 			"啟用訪客網路",
			SAVE:						"儲存",
			HIDE_SSID: 					"隱藏 SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"雲端帳號",
			OFFLINE_NOTE_TITLE: 		"設備離線",
			LOGIN_NOTE_TITLE: 			"糟糕…",
			LOGIN_OFFLINE_NOTE: 		"該設備以離線。請檢查WAN與網路設定以確認是否正確地輸入合適設定。",

			EMAIL: 						"電子郵件",
			PASSWORD: 					"密碼",
			FORGET_PASSWORD: 			"忘記密碼？",

			CLOUD_WIZARD: 				"若需更多TP-Link雲端功能，請使用您的<a class=\"link\" href=\"#\">TP-Link ID</a>登入。",
			NO_ACCOUNT: 				"沒有TP-Link ID嗎？",
			REGISTER_NOW: 				"立即註冊"
		},
		STATUS: {
			TITLE: 						"狀態",
			INTERNET:					"網際網路",
			WIRELESS:					"無線網路",
			LAN:						"區域網路(LAN)",
			USB_TITLE:					"USB 設備",
			PERFORMANCE: 				"效能",
			GUEST_NETWORK: 				"訪客網路",
			ACCESS_DEVICES: 			"存取設備",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"連線類型",

			MAC_ADDRESS: 				"MAC 位址",
			IP_ADDRESS: 				"IP 位址",
			RELEASE: 					"釋放",
			RENEW: 						"更新",
			
			DYNAMIC_IP: 				"浮動 IP",
			STATIC_IP: 					"固定 IP",
			SUBNET_MASK: 				"子網路遮罩",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 通道",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass-Through (橋接)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"無",
			
			DEFAULT_GATEWAY: 			"預設閘道",
			DNS: 						"DNS伺服器",
			MAC: 						"MAC 位址",
			WDS_STATUS: 				"WDS 狀態",
			
			IPV6_ADDRESS: 				"IP 位址",
			PRIMARY_DNS: 				"主要 DNS",
			SECOND_DNS: 				"次要 DNS",

			RADIO: 						"無線網路功能",

			NAME_SSID: 					"無線網路名稱 (SSID)",
			NETWORK_NAME_SSID:			"無線網路名稱 (SSID)",
			HIDE_SSID: 					"隱藏 SSID",
			MODE: 						"模式",
			CHANNEL: 					"頻道",
			CHANNEL_WIDTH: 				"頻道寬度",
			AUTO: 						"自動",
			CURRENT_CHANNEL: 			"目前的頻道",

			WDS: 						"WDS 狀態",
			WIRED_CLIENTS: 				"有線使用者",
			WIRELESS_CLIENTS: 			"無線網路使用者",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"本地連線位址",
			ASSIGN_TYPE: 				"分配類型",

			ALLOW_TO_SEE_EACH: 			"允許訪客互相連線",

			TOTAL: 						"總計",
			AVAILABLE: 					"可用",

			USB: 						"USB 磁碟",
			PRINTER: 					"印表機",

			CPU_LOAD: 					"CPU 負載",
			MEMORY_USAGE: 				"記憶體使用率",

			IP_ADDR_P: 					"IP 位址",
			MAC_ADDR_P: 				"MAC 位址",
			CONN_TYPE_P: 				"連線類型",

			DISABLED: 					"停用",
			INIT: 						"初始",
			SCAN: 						"掃描",
			AUTH: 						"驗證",
			ASSOC: 						"連接",
			RUN: 						"運作",
			HOST: 						"主機",
			GUEST: 						"訪客",

			ON: 						"開",
			OFF: 						"關"
		},

		INTERNET: {
			TITLE: 						"網際網路",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"網際網路連線類型",
			INTERNET_MAC_ADDRESS: 		"MAC 位址",
			
			CONNECT: 					"連線",
			DISCONNECT: 				"斷線",
			
			IP_ADDR: 					"IP 位址",
			
			USE_DEFAULT_MAC: 			"使用預設的 MAC 位址",
			USE_COMPUTER_MAC: 			"使用目前電腦的 MAC 位址",
			USE_CUSTOM_MAC: 			"使用自訂的 MAC 位址",
			MAC_CLONE: 					"複製MAC位址",
			
			CONFIG: 					"設定",
			
			IP_ADDRESS: 				"IP 位址",
			SUBNET_MASK: 				"子網路遮罩",
			DEFAULT_GATEWAY: 			"預設閘道",
			
			MANUAL_DNS: 				"手動DNS",
			PRIMARY_DNS: 				"主要 DNS",
			SECOND_DNS: 				"次要 DNS",
			
			RENEW: 						"更新",
			RELEASE: 					"釋放",
			VIEW_MODE: 					"觀看模式",
			
			GET_DYNAMICALLY_FROM_ISP: 	"從ISP動態獲取",
			USE_FOLLOW_IP_ADDR: 		"使用下列的IP 位址",
			USE_FOLLOW_DNS_ADDR: 		"使用下列的DNS位址",
			USE_FOLLOW_DNS_SERVER: 		"使用下列的DNS伺服器",
			
			BASIC: 						"基本設定",
			ADVANCED: 					"進階設定",
			
			DNS_ADDR_MODE: 				"DNS 位址",
			MTU_SIZE: 					"MTU 大小",
			MTU_1500: 					"位元組。 (預設值為1500，若非必要請勿變更。)",
			MTU_1480: 					"位元組。 (預設值為1480，若非必要請勿變更。)",
			MTU_1460: 					"位元組。 (預設值為1460，若非必要請勿變更。)",
			MTU_1420: 					"位元組。 (預設值為1420，若非必要請勿變更。)",
			
			HOST_NAME: 					"主機名稱",

			HOST_NAME_CONFIRM: 			"該主機名稱包含非法字元，可能會導致意外的系統行為。您確定要繼續嗎？",

			GET_IP_WITH_UNICAST_DHCP: 	"使用單播 DHCP 取得IP位址(通常不需勾選此項目)",
			OPTIONAL: 					"(選填)",
			
			STATIC_IP: 					"固定 IP",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			
			INTERNET_IP_ADDR: 			"IP 位址",
			INTERNET_DNS: 				"網際網路DNS",
			SECONDARY_CONN: 			"第二連線",
			NONE: 						"無",
			INTERNET_PRIMARY_DNS:		"主要 DNS",
			INTERNET_SECONDARY_DNS: 	"次要 DNS",
			
			DYNAMIC_IP: 				"浮動 IP",
			DYNAMIC_IP_v6: 				"浮動IP (SLAAC/DHCPv6)",
			STATIC_IP: 					"固定 IP",
			SERVICE_NAME: 				"服務名稱",
			ACCESS_CONCENTRATOR_NAME:  	"存取集中器(AC)名稱",
			DETECT_ONLINE_INTERVAL: 	"偵測連線間隔",
			INTERVAL_TIPS: 				"秒。(範圍在0-120之間，預設值為10。)",
			IP_ADDR_MODE:  				"IP 位址",
			CONN_MODE: 					"連線模式",
			DHCP_LINK_UNPLUGGED: 		"WAN連接埠未插入網路線",
			
			AUTO: 						"自動",
			ON_DEMAND: 					"依需求",
			TIME_BASED: 				"依時間",
			MANUALLY: 					"手動",
			MAX_IDLE_TIME: 				"最長閒置時間",
			MAX_IDLE_TIME_TIPS: 		"分。 (0 代表永遠啟動)",
			PERIOD_OF_TIME: 			"時間間隔",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"BigPond Cable",
			AUTH_SERVER: 				"驗證伺服器",
			AUTH_DOMAIN: 				"驗證域名",
			L2TP: 						"L2TP",
			GATEWAY: 					"閘道",
			SERVER_IP_ADDR_NAME: 		"VPN 伺服器 IP/網域名稱",
			PPTP: 						"PPTP",
			TO: 						"到",
			
			TUNNEL_6TO4: 				"6to4 通道",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"取得非暫時性 IPv6 位址",
			GET_PREFIX_DELEGATION: 		"取得 IPv6 前綴授權",
			IPV6_ADDR: 					"IPv6 位址",

			GET_IPV6_WAY: 				"取得 IPv6 位址",
			AUTOMATICALLY: 				"自動取得",
			SPECIFIED_BY_ISP: 			"由ISP指定",

			IPV6_ADDR_PREFIX: 			"IPv6 位址前綴",
			NONE_TEMPORARY: 			"非暫時性",

			PREFIX_DELEGATION: 			"前綴授權",
			ENABLE: 					"啟用",
			DISABLE: 					"停用",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"IPv4 遮罩長度",
			CONFIG_TYPE: 				"設定類型",
			RD6_PREFIX: 				"6RD 前綴",
			RD6_PREFIX_LENGTH: 			"6RD 前綴長度",
			REPLY_IPV4_ADDR: 			"Border Reply IPv4 位址",
			MANUAL: 					"手動",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass-Through (橋接)",
			LOCAL_IPV6: 				"本地IPv6位址",
			PEER_IPV6: 					"對等IPv6位址",
			TUNNEL_ADDR: 				"通道位址",
			IPV4_NETMASK: 				"IPv4網路遮罩",
			CUSTOM: 					"自訂",
		    AFTR_NAME: 					"AFTR 名稱",
			PPP_SHARE_V6:				"PPPoE與IPv4連線相同會話",
			PPP_SHARE_V4:				"PPPoE與IPv6連線相同會話",

			
			
			IPV4_ADDR: 					"IPv4 位址",
			IPV4_MASK: 					"IPv4 子網路遮罩",
			IPV4_GATEWAY: 				"IPv4 預設閘道",
			TUNNEL_ADDR: 				"通道位址",

			DUPLEX: 					"雙工",
			AUTO_NEGOTIATION: 			"自動協商",
			FULL_DUPLEX_1000: 			"1000Mbps 全雙工",
			HALF_DUPLEX_1000:			"1000Mbps 半雙工",
			FULL_DUPLEX_100: 			"100Mbps 全雙工",
			HALF_DUPLEX_100: 			"100Mbps 半雙工",
			FULL_DUPLEX_10: 			"10Mbps 全雙工",
			HALF_DUPLEX_10: 			"10Mbps 半雙工"

		},

		LAN: {
			TITLE: 						"區域網路(LAN)",
			LAN: 						"區域網路(LAN)",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"區域網路IPv4",
			LAN_IPv6: 					"區域網路IPv6",

			MAC_ADDRESS: 				"MAC 位址",
			IP_ADDRESS: 				"IP 位址",
			SUBNET_MASK: 				"子網路遮罩",
			CUSTOM: 					"自訂",

			IGMP: 						"啟用IGMP代理",
			

			ASSIGNED_TYPE: 				"分配類型",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Stateless DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"位址前綴",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"位址",
			DELEFATED: 					"授權",
			STATIC: 					"固定的",
			SITE_PREFIX: 				"局部前綴",
			SITE_PREFIX_LEN: 			"局部前綴長度",

			PREFIX_TYPE:  				"局部前綴設定類型",
			LAN_IPV6_ADDR:  			"區域網路IPv6位址",

			RELEASE_TIME: 				"釋放時間",
			RELEASE_TIME_TIP: 			"秒。 (預設值為86400，若非必要請勿變更)",
			ADDRESS:					"位址",
			SAVE: 						"儲存",

			REBOOT_TIP: 				"路由器正跳到新的登入頁面。<br/> 請稍候…"

		},

		IPTV:{
			TITLE: 						"設定",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "啟用 IPTV", 
			MODE:  						"模式",
			IGMP_PROXY: 				"IGMP 代理",
			IGMP_VERSION: 				"IGMP版本",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"橋接",
			BASIC: 						"自訂",
			EXSTREAM: 					"新加坡-ExStream",
			RUSSIA:  					"俄羅斯",
			UNIFY:  					"馬來西亞-Unifi",
			MAXIS:  					"馬來西亞-Maxis",
			MEO:						"葡萄牙-MEO",
	   		VDF:						"葡萄牙-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"網際網路",
			IP_PHONE: 					"IP-電話", 

			Q_TAG: 						"802.1Q Tag",
			ENABLE: 					"啟用",
			
			INTERNET_VLAN_ID: 			"網際網路 VLAN ID",
			INTERNET_VLAN_PRIORITY: 	"網際網路 VLAN 優先級",
			IP_PHONE_VLAN_ID: 			"IP-電話 VLAN ID",
			IP_PHONE_VLAN_PRIORITY: 	"IP-電話 VLAN 優先級",
			IPTV_VLAN_ID: 				"IPTV VLAN ID",
			IPTV_VLAN_PRIORITY: 		"IPTV VLAN 優先級",
			IPTV_MULTI_VLAN_ID: 		"IPTV 組播 VLAN ID",
			IPTV_MULTI_VLAN_PRIORITY: 	"IPTV 組播 VLAN 優先級"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP 伺服器",
			
			SETTINGS: 					"設定",

			DHCP_SERVER: 				"DHCP 伺服器",
			ENABLE_DHCP_SERVER: 		"啟用 DHCP 伺服器",

			IP_ADDR_POOL: 				"IP 位址範圍",
			LEASETIME: 					"位址租用時間",
			LEASENOTE: 					"分鐘。(在1-2880之間。預設值為120。)",
			
			GATEWAY: 					"預設閘道",
			DOMAIN: 					"預設網域",
			PRIMARYDNS: 				"主要 DNS",
			SECONDARYDNS: 				"次要 DNS",

			OPTIONAL: 					"(選填)",

			CLIENTSLIST: 				"DHCP 使用者列表",
			CLIENT_NUMBER: 				"使用者數量",
			CLIENT_NAME: 				"使用者名稱",
			MAC_ADDR: 					"MAC 位址",
			ASSIGNED_IP: 				"分配的IP 位址",
			LEASE_TIME: 				"租用時間",

			RESERVATION: 				"保留指定IP位址",

			RESERVED_IP: 				"保留 IP 位址",
			IP_ADDRESS: 				"IP 位址",
			DESCRIPTION: 				"描述",

			CLIENTSLIST: 				"DHCP 使用者列表",
			CLIENT_NUMBER: 				"使用者數量",

			ENABLE: 					"啟用",
			ENABLE_THIS_ENTRY: 			"啟用"
			
		},

		DDNS: {
			DDNS: 						"動態 DNS",
			SERVICEPROVIDER: 			"服務提供者",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"去註冊…",
			USERNAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			DOMAIN_NAME_LIST: 			"網域名稱列表",
			DOMAIN_NAME: 				"網域名稱",
			LOGIN: 						"登入",
			LOGIN_SAVE: 				"登入與儲存", 
			LOGOUT: 					"登出",
			STATU_SUCCESS:				"成功！",
			UPDATE_INTERVAL:			"更新間隔",
			ONE_HOUR:					"1小時",
			SIX_HOUR:					"6小時",
			TWETEEN_HOUR:				"12小時",
			ONE_DAY:					"1天",
			TWO_DAY:					"2天",
			THREE_DAY:					"3天",
			NEVER:						"永不",
			UPDATE:						"更新",
			STATU_INCORRENT:			"錯誤的使用者名稱或密碼。",
			STATU_ERR_DOMAIN:			"網域名稱錯誤",
			WAN_IP_BIND: 				"WAN IP 綁定",
			CURRENT_DOMAIN: 			"目前的網域名稱",
			REGISTER: 					"註冊",
			BIND: 						"綁定",
			UNBIND: 					"解除綁定",
			TITLE: 						"DDNS不可用",
			CONTENT: 					"若要使用我們優良的TP-Link DDNS服務，請使用您的TP-Link ID<a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">登入</a>，或選擇另一個服務供應商。",
			STATU_NO_LAUNCH:			"未啟動",
			STATU_FAIL_DDNS: 			"更新DDNS失敗。",
			STATU_FAIL_NOIP: 			"更新NO-IP失敗。",
			DISABLE: 					"停用",
			ENABLE: 					"啟用",	
			STATU_NO_LAUNCH:			"更新DDNS失敗。",
			STATU_CONN:					"連線中",
			WAN_IP_BIND: 				"WAN IP 綁定",
			TIME: 						"註冊的日期",
			BOUND: 						"已綁定",
			FREE: 						"自由",
			SORRY: 						"失敗。",
			UNBIND_NOTE:          		"如果您想要綁定%domain%到您的設備，請先解除綁定現在的網域名稱。"
		},

		ADVANCED_ROUTING: {
			TITLE: 						"進階路由",
			STATIC_ROUTING: 			"固定路由",

			DESTINATION_NETWORK:		"目標網路",
			SUBNET_MASK: 				"子網路遮罩",
			DEFAULT_GATEWAY: 			"預設閘道",
			DESCRIPTION: 				"描述",
			
			SYSTEM_ROUTING_TABLE: 		"系統路由表",
			CLIENT_NUMBER: 				"使用者數量",

			GATEWAY: 					"閘道",
			INTERFACE: 					"介面",
			LAN: 						"區域網路(LAN)",
			WAN: 						"WAN",
			ENABLE: 					"啟用",
			ENABLE_THIS_ENTRY: 			"啟用"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"設定",
			NOT_SUPPORT_5G: 			"這個地區僅能支援2.4GHz。請確認您選擇的地區無誤。",

			REGION: 					"地區",
			NOTICE:  					"若要使用無線網路功能，您必須保持實體無線網路開關為開啟狀態。",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"無線網路設定",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"啟用無線網路功能",

			WIRELESS_NETWORK_NAME: 		"無線網路名稱 (SSID)",
			WIRELESS_PASSWORD: 			"密碼",
			HIDE_SSID: 					"隱藏 SSID",

			SECURITY: 					"安全性",
			NO_SECURITY: 				"無安全性",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - 個人(建議選項)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - 企業",
			WEP: 						"WEP",

			VERSION: 					"版本",

			AUTO: 						"自動",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"加密",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"模式",
			MODE_B:  					"只使用802.11b",
			MODE_G:  					"只使用802.11g",
			MODE_N:  					"只使用802.11n",
			MODE_BG:  					"混合使用802.11b/g",
			MODE_GN: 					"混合使用802.11g/n",
			MODE_BGN:  					"混合使用802.11b/g/n",

			MODE_A_5: 					"只使用802.11a",
			MODE_AN_5: 					"混合使用802.11a/n",
			MODE_N_5: 					"只使用802.11n",
			MODE_AC_5:					"只使用802.11ac",
			MODE_NAC_5:					"混合使用802.11ac/n",
			MODE_ANAC_5:				"混合使用802.11a/n/ac",


			CHANNEL_WIDTH: 				"頻道寬度",
			CHANNEL: 					"頻道",

			TRANSMIT_POWER: 			"傳輸功率",

			RADIUS_SERVER_IP: 			"RADIUS 伺服器 IP位址",
			RADIUS_PORT: 				"RADIUS 通訊埠",
			RADIUS_PASSWORD: 			"RADIUS 連線密碼",

			TYPE: 						"類型",
			OPEN_SYSTEM: 				"開放系統",
			SHARED_KEY: 				"共用金鑰",

			KEY_SELECTED: 				"選擇金鑰",
			KEY1: 						"金鑰1",
			KEY2: 						"金鑰2",
			KEY3: 						"金鑰3",
			KEY4: 						"金鑰4",

			WEP_KEY_FORMAT: 			"WEP 金鑰格式",
			ASCII: 						"ASCII碼",
			HEXADECIMAL: 				"十六進位碼",

			KEY_TYPE: 					"金鑰類型",
			BIT64: 						"64-bit",
			BIT128: 					"128-bit",
			BIT152: 					"152-bit",

			KEY_VALUE: 					"金鑰值",
			
			MHZ: 						"MHz",
			MHZ20: 						"20MHz",
			MHZ40: 						"40MHz",
			MHZ80: 						"80MHz",
			
			LOW: 						"低",
			MIDDLE: 					"中",
			HIGH: 						"高"
		},

		WPS: {

			TITLE2: 					"路由器的PIN",
			ROUTERS_PIN_INFO: 			"其他設備無法透過輸入此路由器WPS的PIN碼與此路由器進行連線。",
			ENABLE_ROUTE_PIN: 			"路由器的PIN",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"生成",
			DFT: 						"預設值",

			TITLE: 						"WPS引導",
			SELECT_SETUP: 				"選擇一個設定模式",
			PUSH_BTN: 					"按按鈕 (建議選項)",
			PUSH_DES: 					"壓按路由器上的實體 \"按鈕\" 或點選本頁面內的\"連線\"",
			CONNECT: 					"連線",
			CANCEL: 					"取消",

			RESULT_HEAD: 				"無線網路使用者",
			RESULT_END: 				"已經成功地被加入到網路中。",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"沒有找到",
			ENTER_CLIENT_PIN: 			"輸入使用者端的 PIN",
			SWITCH_NOTE:				"請注意：在使用WPS功能前，您必須先開啟無線網路功能。",
			SWITCH_NOTE2:				"請注意：在使用WPS功能前，您必須先設定正確的無線網路參數。",
			STATUS_PIN_ERROR: 			"不正確的 WPS PIN碼！ 請再檢查一次。",
			STATUS_ERROR: 				"錯誤。",
			STATUS_CONN_ERROR: 			"連線失敗。",
			STATUS_CONNING: 			"連線中...",
			STATUS_CANCEL: 				"已取消連線。",
			
			NOTE: 						"註：",
			
			STATUS_CONN_OVERLAP: 		"連線失敗(重疊)。",
			STATUS_CONN_TIMEOUT: 		"連線失敗(逾時)。",
			STATUS_CONN_INACT: 			"連線無效。"

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"連線中的無線設備",
			CLIENT_NUMBER: 				"使用者數量",
			MAC_ADDRESS: 				"MAC 位址",
			CONN_TYPE: 					"連線類型",
			SECURITY: 					"安全性",
			RECEIVED_PACKETS: 			"已接收封包",
			SEND_PACKETS: 				"已傳送封包"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"設定",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"允許訪客互相連線",
			
			ALLOW_LOCAL: 				"允許訪客可以存取我的本地網路",
			
			WIRELESS: 					"無線網路",
			WIRELESS_24G_RADIO: 		"無線網路 2.4GHz",
			WIRELESS_5G_RADIO: 			"無線網路 5GHz",
			ENABLE_GUEST: 				"啟用訪客網路",

			NAME_SSID: 					"無線網路名稱 (SSID)",
			HIDE_SSID: 					"隱藏 SSID",

			SECURITY: 					"安全性",
			NO_SECURITY: 				"無安全性",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-個人",

			VERSION: 					"版本",
			AUTO: 						"自動",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"加密",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"密碼"
		},

		NAT:{
			SETTINGS: 					"硬體NAT",
			STATUS: 					"硬體NAT",
			
			ALG_TITLE: 					"應用層閘道 (ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP 穿透",
			L2TP_ALG: 					"L2TP 穿透",
			IPSEC_ALG: 					"IPSec 穿透",

			ENABLE_FTP_ALG: 			"啟用 FTP ALG",
			ENABLE_TFTP_ALG: 			"啟用 TFTP ALG",
			ENABLE_H323_ALG: 			"啟用 H323 ALG",
			ENABLE_RTSP_ALG: 			"啟用 RTSP ALG",
			ENABLE_PPTP_ALG: 			"啟用 PPTP 穿透",
			ENABLE_L2TP_ALG: 			"啟用 L2TP 穿透",
			ENABLE_IPSEC_ALG: 			"啟用 IPSec 穿透",
			NAT_ENABLE_NOTICE: 			"請注意：在NAT功能啟用後，您的設定才會生效。"
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"虛擬伺服器",

			SERVICE_NAME: 				"服務類型",
			EXTERNAL_PORT: 				"外部通訊埠",
			INTERNAL_IP: 				"內部 IP",
			INTERNAL_PORT: 				"內部通訊埠",
			PROTOCAL: 					"通訊協定",

			BTN_VIEW: 					"查看現有服務",

			EXSITTING_SERVICE: 			"現有服務",
			
			PROTOCAL_ALL: 				"全部",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX 或 XX)",
			EXT_PORT_TIPS: 				"(XX 或 XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX 或 空白 ,1-65535)",

			NOTICE:						"與遠端管理通訊埠發生衝突！您確定要繼續嗎？",

			ENABLE_THIS_ENTRY: 			"啟用",
			OPERATION: 					"運作",
			CHOOSE: 					"選擇",
			NAT_ENABLE_NOTICE: 			"請注意：在NAT功能啟用後，您的設定才會生效。"
		},

		PORT_TRIGGERING:{
			TITLE: 						"通訊埠觸發",
			APPLICATION: 				"應用程式",
			TRIGGER_PORT: 				"觸發通訊埠",
			TRIGGER_PROTOCOL: 			"觸發通訊協定",

			EXTERNAL_PORTS: 			"外部通訊埠",
			EXTERNAL_PROTOCOL: 			"外部通訊協定",

			BTN_VIEW: 					"查看現有應用程式",

			EXSITTING_APPLICATION: 		"現有應用程式",
			APPLICATION_NAME: 			"應用程式名稱",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX 或 XX-XX,1-65535,最多 5 組)",
			
			ENABLE_THIS_ENTRY: 			"啟用",
			OPERATION: 					"運作",
			
			PROTOCAL_ALL: 				"全部",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"請注意：在NAT功能啟用後，您的設定才會生效。"
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"啟用 DMZ",
			HARDWARESTATUS: 			"DMZ 主機 IP 位址",
			NAT_ENABLE_NOTICE: 			"請注意：在NAT功能啟用後，您的設定才會生效。"
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"UPnP 服務列表",
			CLIENT_NUMBER: 				"使用者數量",
			SERVICE: 					"服務描述",
			EXTERNAL_PORT: 				"外部通訊埠",
			PROTOCAL: 					"通訊協定",
			IP_ADDR: 					"內部 IP 位址",
			INTERNAL_PORT: 				"內部通訊埠",
			NAT_ENABLE_NOTICE: 			"請注意：在NAT功能啟用後，您的設定才會生效。"
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"3G/4G USB 數據機",
			LOCATION: 					"地區",
			MOBILE_ISP: 				"電信業者",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"連線模式",
			CONNECT_ON_DEMAND: 			"依需求連線",
			CONNECT_AUTOMATICALLY: 		"自動連線",
			CONNECT_MANUALLY: 			"手動連線",
			MAX_IDLE_TIME: 				"最長閒置時間",
			CONNECTION_TIP: 			"目前的網際網路存取為WAN優先。",
			IDLE_TIME_TIP: 				"連線模式與最長閒置時間不能手動設定。",
			MINUTES: 					"分鐘。(0 表示隨時保持連線。)",

			AUTHENTICATION_TYPE: 		"驗證類型",
			AUTO: 						"自動",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"預設值為自動，若無特別需求請勿改變。",

			CONNECT: 					"連線",
			DISCONNECT: 				"斷線",

			SET_TIP: 					"手動設定撥號號瑪、APN、使用者名稱與密碼。",
			DIAL_NUMBER: 				"撥號號碼",
			APN: 						"APN",
			USERNAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			OPTIONAL: 					"(選填)",
			MTU_SIZE: 					"MTU 大小",
			MTU_SIZE_TIP: 				"位元組。 (預設值為1480，若非必要請勿變更。)",

			USE_FOLLOW_DNS_SERVER: 		"使用下列的DNS位址",
			PRIMARY_DNS: 				"主要 DNS",
			SECOND_DNS: 				"次要 DNS",

			UNPLUGGED: 					"未連接 USB 數據機",
			IDENTIFYING: 				"辨識中…",
			IDENTIFY_SUCCESS: 			"已成功辨識"
		},

		DISK_SETTING: {
			DISK_SET: 					"設備設定",
			SCAN: 						"掃描",
			SELFLY_REMOVE: 				"安全移除",
			SCAN_RESULT: 				"找到 %n 磁碟",
			NOT_FOUND: 					"沒有找到",
			SELFLY_REMOVE: 				"安全移除",
			
			VOLUMN: 					"磁碟區",
			CAPACITY: 					"容量",
			FREESPACE: 					"剩餘空間",
			USBSPACE: 					"已用空間",
			
			STATUS: 					"狀態",
			INACT: 						"停止",
			ACTIVE: 					"啟動",
			
			USAGE: 						"使用",
			CAPACITY: 					"容量",
			OPERATION: 					"運作",	
			
			ACC: 						"帳號管理 ", 	 	
			USERNAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			USE_LOGIN: 					"使用登入使用者",
			SCAN: 						"掃描",
			ENJECT_ALL: 				"全部退出",
			ENJECT: 					"退出",
			ADD_USER: 					"增加使用者",
			AUTH: 						"權限"
		},

		FOLDER: {
			TITLE: 						"共用設定",
			ACCOUNT_TITLE: 				"共用帳號",
			ACCOUNT:					"帳號",
			AC_NOTE: 					"為共用內容準備一個帳號。您可以使用登入帳號或建立一個新帳號",
			
			AC_LOGIN: 					"使用預設帳號",
			AC_FOLLOW: 					"使用新帳號",

			USERNAME: 					"使用者名稱",
			PASSWORD: 					"密碼",
			CONFIRM: 					"確認密碼",

			SHARING_SETTING: 			"共用設定",
			SERVER_NAME: 				"網路/媒體 伺服器名稱",

			METHOD: 					"存取方式",
			LINK: 						"連接",
			PORT: 						"通訊埠",

			NETWORK_NEIGHBORHOOD: 		"網路芳鄰",
			FTP: 						"FTP",
			FTPEX: 						"FTP (透過網際網路)",

			SHARE_FOLDER: 				"資料夾共用",
			SHAREING_ALL: 				"全部共用",
			NOTE:  						"切換到開以共用所有文件和文件夾或保持它關閉以只共用指定的文件夾。", 
			ENABLE_AUTHENTICATION: 		"啟用驗證",
			SHAREING_FOLDER: 			"共用資料夾",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"資料夾路徑",
			VOLUMN_NAME: 				"磁碟區名稱",

			SHARE_NAME: 				"資料夾名稱",
			FOLDER_PATH: 				"資料夾路徑",
			MEDIA_SHARING: 				"多媒體共用",
			STATUS: 					"狀態",

			GUEST_ACCESS: 				"允許訪客網路存取",
			ENABLE_AUTHENTICATION: 		"啟用驗證",
			ENABLE_WRITE_ACCESS: 		"啟用寫入存取",
			ENABLE_MEDIA_SHARE: 		"啟用媒體共用",
			
			BROWSE: 					"瀏覽",
			BROWSE_TITLE: 				"選擇一個資料夾",

			NO_VOLUMN:					"沒有磁碟區",
			
			NOTICE: 					"您確定要離開DDNS頁面？按儲存可以存檔並退出。按離開可以不存檔並離開。按取消可停留在本頁面。",
			NO_CHANGE_NOTICE: 			"您確定要離開DDNS頁面？",

			SAVE_FAILED_NOTICE: 		"儲存失敗",
			CONTINUE: 					"離開",
			CONTINUE_SAVE: 				"儲存",
			CANCLE: 					"取消",

			ENABLE: 					"啟用"

		},

		PRINT:{
			TITLE: 						"列印伺服器",
			NAME: 						"印表機名稱",
			ENABLE_PRINT_SERVER: 		"列印伺服器",
			NONE: 						"無",
			
			NOTE_TITLE: 				"註：",
			STEP1: 						"步驟1：",
			STEP2: 						"步驟2：",
			STEP3: 						"步驟3：",

			NOTE1: 						"在您的電腦上安裝印表機驅動程式。此步驟請參考印表機說明書進行。",
			NOTE2: 						"將USB印表機連接至路由器的USB埠。",
			NOTE3: 						"在您的電腦上安裝「TP-Link USB Printer Controller」程式。請從我們的官方網站(<a class=\"link\" href=\"%SUPPORT%\" target=\"_blank\">%SUPPORT%</a>)上，下載「TP-Link USB Printer Controller Utility」"
		},

		PARENTAL_CTR:{
			TITLE: 						"家長監護",
			STATUS: 					"狀態",
			UNKNOWN: 					"未知的",

			DEVICE_CTR: 				"家長監護下之設備",
			DEVICE: 					"設備名稱",
			MAC_ADDRESS: 				"MAC 位址",
			TIME: 						"網際網路存取時間",
			DESCRIPTION: 				"描述",
			
			ENABLE_THIS_ENTRY: 			"啟用",
			OPTIONAL: 					"(選填)",
			BTN_VIEW: 					"查看現有設備",
			
			DEVICE_LIST: 				"設備列表",
			SYSTEM_TIME: 				"系統時間",
			
			RESTR: 						"內容限制",
			MODE: 						"限制",
			BLACKMODE: 					"黑名單",
			WHITEMODE: 					"白名單",
			ACCESS_DEVICES_LIST: 		"存取設備列表",
			
			CHOOSE: 					"選擇",
			ADD_A_NEW_KEYWORD: 			"增加新關鍵字",
			ADD_A_NEW_DOMAIN_NAME: 		"增加新網域名稱"
		},

		STREAMBOOST: {
			TITLE: 						"串流加速",
			INTERNET: 					"網際網路",
			ROUTER: 					"路由器",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"其他",

			DEVICE: 					"設備",
			RATE: 						"率",
			APPLICATION: 				"應用程式",

			NAME: 						"名稱",
			MAC_ADDRESS: 				"MAC 位址",
			IP_ADDRESS: 				"IP 位址",


			DEVICES: 					"設備"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"頻寬",
			TEST_BANDWIDTH: 			">測試頻寬",
			STREAMBOOST: 				"串流加速",
			ENABLE_STREAMBOOST: 		"啟用串流加速",
			UP_LIMITATION: 				"上傳限制(Mbps)",
			DOWN_LIMITATION: 			"下載限制(Mbps)",
			RUN_BANDWIDTH_TEST: 		"執行頻寬測試",
			TESTING: 					"測試中",
			TEST_FAILED: 				"測試失敗",
			TEST_SUCCEED: 				"測試成功",
			ENABLE_AUTOMATIC_TEST: 		"啟用自動測試",
			KEEP_UP_TO_DATE: 			"保持串流加速",
			ENABLE_AUTOMATIC_UPDATE: 	"啟用自動更新"

		},

		PRIORITY:{
			PRIORITY: 					"優先級",
			PRIORITY_TIPS: 				"優先級可以讓您修改設備的重要性。這對於您想要讓某些設備能有比較優先的封包傳輸權有極高的助益。",
			ALL_DEVICE: 				"全部設備",
			ACTIVE_DEVICE: 				"活動的設備",
			SAVE: 						"儲存",
			ID: 						"ID",
			DEVICE: 					"設備",
			TYPE: 						"類型",
			MAC_ADDRESS: 				"MAC 位址",
			STICK: 						"黏貼"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"統計",
			UP_TIME: 					"總計時間",
			DOWNLOADS: 					"下載",
			LAST_DAY: 					"最後一天",
			LAST_WEEK: 					"最後一週",
			LAST_MONTH: 				"最後一月",
			ALL_LAN_HOSTS: 				"全部LAN主機",
			OTHER: 						"其他"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"防火牆",
			ENABLE_SPI: 				"SPI 防火牆",

			DOS_PROTECTION: 			"DoS 防護",
			ENABLE_DOS: 				"DoS 防護",
			
			OFF: 						"關",
			LOW: 						"低",
			MIDDLE: 					"中",
			HIGH: 						"高",

			ICMP: 						"ICMP-FLOOD 攻擊防護",
			UDP: 						"UDP-FLOOD 攻擊防護",
			TCP: 						"TCP-SYN-FLOOD 攻擊防護",
			ENABLE_DOS_TIP:             "DoS防禦與流量統計不可同時啟用。",

			IGNORE: 					"忽視來自於 WAN 連接埠的PING封包",
			FORBID: 					"禁止來自於 LAN 連接埠的PING封包",

			BLOCK_DOS: 					"阻擋的 DoS 主機列表",
			HOST_NUMBER: 				"主機數量",
			IP_ADDRESS: 				"IP 位址",
			MAC_ADDRESS: 				"MAC 位址"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"存取管理",
			ENABLE_ACCESS: 				"存取管理",

			ACCESS_MODE: 				"存取模式",
			DEFAULT_ACCESS_MODE: 		"預設存取模式",
			BLACK_LIST: 				"黑名單",
			WHITE_LIST: 				"白名單",
			
			WIRED:						"有線網路",
			WIRELESS:					"無線網路",

			DEVICE_ONLINE: 				"在線設備",
			NAME: 						"設備名稱",
			IP_ADDRESS: 				"IP 位址",
			MAC_ADDRESS: 				"MAC 位址",
			CONN_TYPE: 					"連線類型",

			BLOCK: 						"阻擋",

			DEVICE_IN_WHITE: 			"在白名單內的設備",
			DEVICE_IN_BLACK: 			"在黑名單內的設備"
		},

		IP_MAC:{
			TITLE: 						"設定",
			ENABLE_ARP: 				"ARP 綁定",

			ARP_LIST: 					"ARP 列表",
			ARP_NUM: 					"ARP 項目數",

			MAC_ADDRESS: 				"MAC 位址",
			IP_ADDRESS: 				"IP 位址",
			BOUND: 						"已綁定",
			UNBOUND: 					"未綁定",

			BINDING_LIST: 				"綁定列表",
			DESCRIPTION: 				"描述",
			OPTIONAL: 					"(選填)",
			ENABLE_THIS_ENTRY: 			"啟用"
		},

		TIMESET: {
			TITLE: 						"時間設定",
			ZONE: 						"時區",
			DATE: 						"日期",
			DATEFORMAT: 				"MM/DD/YYYY",
			TIME: 						"時間",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"NTP 伺服器 I",
			NTP2: 						"NTP 伺服器 II",
			OPTIONAL: 					"(選填)",

			CURRENT_TIME:  				"目前時間",
			SET_TIME: 					"設定時間",
			AUTOMATIC: 					"從網際網路自動取得",
			MANUAL: 					"手動",
			AUTOMATIC_BTN: 				"取得",


			GETGMT: 					"取得GMT時間",

			
			GETGMT_SUCCESS: 			"從NTP伺服器取得時間成功",
			GETGMT_TIMEOUT: 			"從NTP伺服器取得時間逾時",
			GETGMT_WAIT: 				"等待中",
			
			M: 							"月",
			W: 							"週",
			D: 							"日",
			H: 							"時",
			
			DAYLIGHT_SAVING: 			"日光節約",
			ENABLE_DAYLIGHT: 			"啟用 日光節約",
			START: 						"開始",
			END: 						"結束",

			RUNNING_STATUS: 			"運行狀態",
			DOWN: 						"日光節約已關閉",
			UP: 						"日光節約已開啟"
		},

		DIAG:{
			TITLE: 						"診斷",
			DIAGNOSTIC_TOOL: 			"診斷工具",
			PING: 						"Ping",
			TRACE: 						"追蹤路由",

			IPADDR: 					"IP 位址/ 網域名稱",
			COUNT: 						"Ping 次數",
			
			BASIC: 						"基本設定",
			ADVANCED: 					"進階設定",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Ping 封包大小",
			PKTUNIT: 					"(4-1472 位元組)",

			TIMEOUT: 					"Ping 逾時",
			TIMOUTUNIT: 				"(100-2000 毫秒)",

			TTL: 						"追蹤路由最大 TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"開始",
			STOP: 						"停止"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"您的韌體已是",
			TITLE: 						"韌體升級",
			INFO: 						"設備資訊",
			REMOTE_TITLE: 				"線上升級",
			LOCAL_TITLE: 				"本地升級",

			NEWFILE: 					"新韌體檔",
			FIRMWAREVERSION: 			"韌體版本",
			HARDWAREVERSION: 			"硬體版本",
			LATESTVERSION: 				"最新版本",
			CONFIRM_CONTENT:			"您想要升級該韌體嗎？",
			WARNING:					"韌體升級中…<br/>為避免任何損害，請保持路由器電源開啟並且在韌體升級過程中請勿操作路由器。",
			REBOOTING: 					"重新啟動中…<br/>為避免任何損害，請保持路由器電源開啟並且在韌體升級過程中請勿操作路由器。",
			DO_NOT_OPERATE: 			"韌體升級中…<br/>為避免任何損害，請保持路由器電源開啟並且在韌體升級過程中請勿操作路由器。",
			FIRMWARE_UPDATING_NOTE: 	"1.韌體更新中...<br/>為避免造成任何的損壞，在路由器韌體升級過程期間，請保持路由器電源開啟並且不要進行操作。",
			REBOOTING_NOTE: 			"2.重新啟動中...<br/> 為避免造成任何的損壞，在路由器韌體升級過程期間，請保持路由器電源開啟並且不要進行操作。",
			SCREEN_UPDATING_NOTE: 		"3.畫面更新中...<br/> 為避免造成任何的損壞，在路由器韌體升級過程期間，請保持路由器電源開啟並且不要進行操作。",
			UPGRADE_FAILED: 			"升級失敗。",
			UPGRADE: 					"升級",
			CHECK: 						"檢查",
			DOWNLOADING: 				"下載中…<br/>為避免任何損害，請保持路由器電源開啟並且在韌體升級過程中請勿操作路由器。",
			UPGRADE_INOF: 				"為避免任何損害，請保持路由器電源開啟。",
			NOTE: 						"請注意：",
			NO_UPGRADE: 				"此為最新版本",

			UPGRADING: 					"升級中…<br/>為避免任何損害，請保持路由器電源開啟並且在韌體升級過程中請勿操作路由器。",
			RETRY: 						"重試",
			CANCEL: 					"取消",
			ILEGAL_DEVICE:              "無法辨識此設備。請聯絡TP-Link技術支援。",
			UPGRADE_FAIL: 				"無法升級。請稍後再試。",
            CONFIG_RESET_NOTE:          "在升級到此版本後，您將會失去目前的設定。",
			CHECK_UPGRADE: 				"檢查升級"
		},

		BACKUP:{
			BACKUP: 					"備份",
			BACKUPTIP: 					"儲存您目前設定值",

			RESTORE: 					"復原",
			RESTORETIP: 				"從備份檔復原已儲存的設定",
			
			RESTORE_WARN:				"路由器復原中…<br/>還原過程中請勿進行其他操作。",
			RESTORE_CONFIRM_CONTENT: 	"您確定要幫路由器恢復至這個備份檔案的設定嗎？",
			
			FILE: 						"檔案",

			FACTORY: 					"恢復原廠預設值",
			FACTORYTIP: 				"將所有的設定值清除，回到原廠狀態",
			RESETTIP:					"除了您的登入與雲端帳號資訊以外，還原所有的設定至預設值。",
			FACTORY_CONFIRM_CONTENT:	"您確定要將路由器恢復至原廠預設值嗎？",
			FACTORY_WARN:				"路由器復原中…<br/>還原過程中請勿進行其他操作。",
			
			BACKUPBTN: 					"備份",
			RESTOREBTN: 				"復原",
			RESETBTN:					"復原",
			FACTORYBTN: 				"恢復原廠預設值"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"帳號管理 ",
			
			OLDUSER: 					"舊使用者名稱",
			OLDPWD: 					"舊密碼",

			NEWUSER: 					"新使用者名稱",
			NEWPWD: 					"新密碼",
			CONFIRM: 					"確認新密碼",

			RECOVERYINFO: 				"密碼復原",
			ENABLE_PASSWORD_RECOVERY: 	"啟用 密碼復原",
			FROM: 						"寄件人",
			TO: 						"收件人",
			SMTP_SERVER: 				"SMTP 伺服器",
			
			ENABLE_AUTHENTICATION: 		"啟用驗證",
			USERNAME: 					"使用者名稱",
			PASSWORD: 					"密碼",

			TEST_MAIL: 					"測試信件",

			LOCAL:						"本地管理",
			LOCAL_MAC_AUTH: 			"本地MAC驗證",
			ACCESS: 					"允許所有LAN連線的設備存取",
			ACCESS_TIPS: 				"切換至開啟，以允許所有LAN連線的設備存取，或保持它關閉，僅讓指定的設備進行管理。",
			
			MAC_ADDRESS: 				"MAC 位址",
			VIEW_BTN: 					"查看現有設備",
			DESCRIPTION: 				"描述",

			EXIST_DEVICE:               "現有設備",

			OPTIONAL: 					"(選填)",
			ENABLE_THIS_ENTRY: 			"啟用",

			DEVICE_NAME:				"設備名稱",
			IP_ADDRESS:					"IP 位址",
			

			REMOTE: 					"遠端管理",
			DISABLE_REMOTE_MANAGEMENR: 	"停用 遠端管理",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"啟用 全部設備遠端管理",
			ENABLE_REMOTE_MANAGEMENR: 	"啟用 指定設備遠端管理",
			WEB: 						"網頁管理通訊埠",

			NOTICE:						"與虛擬伺服器通訊埠發生衝突！您確定要繼續嗎？",

			REMOTEIP: 					"遠端管理 IP 位址",
			REMOTEIPNOTE: 				"(輸入 255.255.255.255 可開放給全部IP位址)"
			
		},

		SYSLOG:{
			TITLE: 						"系統日誌",
			LOG_FILTER: 				"日誌篩選：",
			
			TYPE_EQ: 					"類型=",
			
			ALL: 						"全部",

			FIREWALL: 					"防火牆", 
			NAT: 						"NAT",
			DDNS: 						"動態 DNS",
			UPNP:						"UPnP",
			IMB:            			"IP&MAC 綁定",
			IPTV:						"IPTV",
			DHCPS:						"DHCP 伺服器",
			IGMP_PROXY:					"IGMP 代理",
			DOMAIN_LOGIN:				"域名登入",
			BASIC_SECURITY: 			"基本安全性",
			PARENTAL_CONTROL: 			"家長監護",
			ACCESS_CONTROL: 			"存取管理",
			DOS_PROTECTION: 			"DoS 防護",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"流量統計",
			TIME_SETTINGS: 				"時間設定",
			ACCOUNT_MANAGEMENT: 		"帳號管理 ",
			LOCAL_MANAGEMENT: 			"本地管理",
			REMOTE_MANAGEMENT: 			"遠端管理",
			LOCALE: 					"區域",
			FACTORY_RESET: 				"恢復原廠預設值",
			LED_CONTROLLER: 			"LED控制器",
			NETWORK: 					"網路",
			USBSHARE: 					"USB共享",
			AND: 						"與",
			LEVEL: 						"層級",
			EMERGENCY:					"緊急",
			ALERT:						"警示",
			CRITICAL:					"嚴重",
			ERROR: 						"錯誤",
			WARNING: 					"警告",
			NOTICE: 					"注意",
			INFO: 						"資訊",
			DEBUG: 						"除錯",

			INDEX: 						"索引",
			TYPE: 						"類型",
			TIME: 						"時間",
			LEVEL_COL:					"層級",

			CONTENT: 					"日誌內容",
			
			MAIL_LOG: 					"郵件日誌",
			SAVE_LOG: 					"儲存日誌",

			SEND_OK: 					"寄送成功",
			SEND_FAILED: 				"寄送失敗",

			MAIL_SETTING: 				"郵件設定",

 			FROM: 						"寄件人",
 			TO: 						"收件人",
 			SMTP_SERVER: 				"SMTP 伺服器",
 			ENABLE_AUTHENTICATION: 		"啟用驗證",

 			USERNAME: 					"使用者名稱",
 			PASSWORD: 					"密碼",
 			CONFIRM_PASSWORD: 			"確認密碼",

 			AUTO_MAIL: 					"啟用 自動寄信",
 			LOG_AT: 					"記錄在",
 			HH_MM: 						"每天(HH:MM)",

 			LOG_EVERY: 					"記錄每隔",
 			HOURS: 						"小時"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"設定",
			STATUS: 					"啟用 QoS",
			UPBANDWIDTH: 				"上傳頻寬",
			DOWNBANDWIDTH: 				"下載頻寬",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"速度測試",
			RULE_LIST: 					"QoS 規則列表",
			RULE: 						"QoS 規則",
			ID: 						"ID",
			NAME: 						"名稱",
			TYPE: 						"類型",
			DETAIL: 					"詳細",
			PRIORITY: 					"優先級",

			APPLICATION: 				"應用程式",
			APPLICATION_LIST: 			"應用程式列表",
			CUSTOM_APP: 				"自訂應用程式",
			MAC_ADDR: 					"MAC 位址",
			MAC_ADDR_P: 				"MAC",
			IP_ADDR: 					"IP 位址",
			IP_P: 						"IP：",
			PHYSICAL_PORT: 				"實體連接埠",

			LOW: 						"低",
			MIDDLE: 					"中",
			HIGH: 						"高",

			PROTO: 						"通訊協定",
			PORT: 						"通訊埠",
			PROTO_P: 					"通訊協定",
			PORT_P: 					"通訊埠",
			PORT_TIPS: 					"(XX 或 XX-XX,1-65535,最多 5 組)",

			ALL: 						"全部",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"自訂",

			WIFI_HOME: 					"WIFI-主機",
			WIFI_GUEST: 				"WIFI-訪客",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"資料庫升級",

			NEWFILE: 					"新資料庫檔案",
			FIRMWAREVERSION: 			"資料庫版本",
			CONFIRM_CONTENT:			"您確定要更新資料庫嗎？",
			WARNING:					"資料庫更新中... <br/>更新過程中請不要進行其他操作。",
			
			UPGRADE: 					"升級",

			SERVICE_RESTART: 			"QoS服務重啟",
			
			TYPE: 						"類型",
			BY_DEVICE: 					"依設備",
			BY_APP: 					"依應用程式",
			BY_PHY: 					"依實體連接埠",

			HIGH_PRIORITY_LBL: 			"高優先級:",
			MIDDLE_PRIORITY_LBL: 		"中優先級:",
			LOW_PRIORITY_LBL: 			"低優先級:",

			HIGH_PRIORITY: 				"高優先級",
			MIDDLE_PRIORITY: 			"中優先級",
			LOW_PRIORITY: 				"低優先級"

		},

		APPLICATION:{
			APP_LIST: 					"應用程式列表",
			GAME_LIST: 					"遊戲列表",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"流量統計",
			ENABLE_STATISTICS: 			"流量統計",

			TITLE: 						"流量統計列表",
			IP_MAC: 					"IP 位址/MAC 位址",
			TPKT: 						"總計封包數",
			TBYTE: 						"總計位元組",
			CPKT: 						"目前封包數",
			CBYTE: 						"目前位元組",
			CICMP: 						"目前的ICMP Tx",
			CUDP: 						"目前的UDP Tx",
			CSYN: 						"目前的SYN Tx",
			
			DELETE_CONFIRM: 			"您確定要刪除這些流量統計嗎？",
			DELETE_ALL_CONFIRM: 		"您確定要刪除全部的流量統計嗎？",

			RESET_ALL: 					"全部重置"
		},

		SYSPARA:{
			W24G: 						"無線網路 2.4GHz",
			W5G: 						"無線網路 5GHz",
			SWITCH_NOTICE:  			"您的無線網路功能已經被關閉。如果您想要使用這個功能，請打開路由器上的實體Wi-Fi按鈕。",

			ENABLE_TIPS: 				"您的無線網路功能已經被關閉。",

			BEACON: 					"Beacon 間隔",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS 臨界值",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Fragmentation 臨界值",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM 間隔",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"群組金鑰更新周期",
			GROUPUNIT: 					"秒",
			
			
			WMM_FEATURE: 				"WMM 功能",
			WMM: 						"啟用 WMM",

			GI_FEATURE: 				"Short GI 功能",
			GI: 						"啟用 Short GI",

			AP_FEATURE: 				"AP 隔離功能",
			AP: 						"啟用 AP 隔離",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"啟用 TxBF",

			WDS_FEATURE: 				"WDS 橋接",
			WDS: 						"啟用 WDS 橋接",
			
			SSID_BRIDEGE: 				"SSID (被橋接端)",
			SURVEY: 					"搜尋AP",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC 位址",
			SSID: 						"SSID",
			SIGNAL: 					"訊號",
			CHANNEL: 					"頻道",
			SECURITY: 					"安全性",
			CHOSEN: 					"選擇",
			AP_NUMBER:					"AP 數量",

			TOTAL: 						"總計項目",

			MAC: 						"MAC 位址 (被橋接端)",
			MACUNIT: 					"例如：00-1D-0F-11-22-33",

			SECURITY: 					"安全性",
			NO: 						"否",
			NONE: 						"無安全性",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"密碼",
			
			AUTH_TYPE: 					"驗證類型",
			AUTO: 						"自動",
			OPEN: 						"開放系統",
			SHARED: 					"共用金鑰",

			WEP_INDEX: 					"金鑰索引",
			KEY1: 						"金鑰1",
			KEY2: 						"金鑰2",
			KEY3: 						"金鑰3",
			KEY4: 						"金鑰4",

			WEP_KEY_FORMAT: 			"WEP 金鑰格式",
			ASC: 						"ASCII碼",
			HEX: 						"十六進位碼",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"啟用 WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"啟用 NAT",
			
			NAT_BOOST: 					"NAT 加速",
			ENABLE_NAT_BOOST: 			"啟用NAT加速",
			
			MEDIA_SERVER: 				"多媒體伺服器",
			SCAN_INTERVAL: 				"自動掃描間隔(小時)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"DoS 防護等級設定",

			ICMP: 						"ICMP-FLOOD 封包等級",
			UDP: 						"UDP-FLOOD 封包等級",
			TCP: 						"TCP-FLOOD 封包等級",

			WDS_MODE: 					"WDS 模式",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"低",
			MIDDLE: 					"中",
			HIGH: 						"高",

			TO: 						"到",
			NOTICE_NAT_REBOOT: 			"重新啟動中…<br/>在重新啟動程序完成前請不要進行任何操作。",

			NOTICE_NAT_BOOST: 			"修改NAT加速將導致本設備的重新啟動，您確定要繼續嗎？",
			NOTICE:						"路由器的頻道與被橋接AP是不一樣的頻道。您想改變它嗎？",

			UNIT: 						"(5-7200)封包/秒",
			LED: 						"LED",
			NIGHT_MODE: 				"夜間模式",
			PERIOD_NIGHT_TIME: 			"夜間模式期間",
			ENABLE: 					"啟用",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "您的 LED 已關閉。如果您想要使用這項功能，請按一下頁面右上角的 LED。",
			NOTE2:                      "夜間模式的生效時間以路由器的系統時間為準。請確定您已設定路由器的時間。"
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"目前沒有憑證，請<b>產生</b>憑證後再啟用 VPN 伺服器。",
			NO_CERT_NOTE2: 				"目前沒有憑證，請<b>產生</b>憑證後再匯出組態。",
			ENABLE_VPN_SERVER: 			"啟用 VPN 伺服器",
			SERVICE_TYPE: 				"服務類型",
			SERVICE_PORT: 				"服務埠",
			VPN_SUBNET: 				"VPN 子網路/網路遮罩",
			CLIENTS_ACCESS: 			"用戶端存取",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"僅限家庭網路",
			INTERNET_HOME: 				"網際網路和家庭網路",
			CERT_STR: 					"目前沒有憑證，請按一下「確定」產生憑證後儲存您的組態。",
			CERT_STR2: 					"目前沒有憑證，請按一下「確定」產生憑證後匯出您的組態。",
			CONF_FILE: 					"組態檔", 
			EXPORT_CONF_FILE: 			"匯出組態。",
			EXPORT: 					"匯出",

			INSTALL_GUIDE: 				"VPN 用戶端安裝指南",
			INSTALL_STEP: 				"若要啟用 OpenVPN 伺服器並將您的用戶端裝置並連線至此伺服器：",
			INSTALL_NOTICE:				"在設定 OpenVPN 伺服器之前，請先設定浮動 DNS 服務 (建議) 或指定固定 IP 位址給 WAN 埠。然後確定系統時間是否正確。",
			INSTALL_NOTE1: 				"選取「啟用 VPN 伺服器」。",
			INSTALL_NOTE2: 				"在您設定OpenVPN伺服器之前，請設定動態DNS服務（建議的）或為WAN通訊埠指定一個固定IP位址。並確保您的NAT的外部通訊埠不是服務通訊埠並且DMZ是停用的，並且您的系統時間是正確的。",
			INSTALL_NOTE3: 				"按一下「匯出」來儲存組態檔。",
			INSTALL_NOTE4: 				"在您的用戶端裝置上，從 <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> 下載並安裝 OpenVPN 用戶端公用程式。官方支援的平台有 Windows、Mac OSX 和 Linux。",
			INSTALL_NOTE5: 				"啟動 OpenVPN 用戶端公用程式，然後使用之前儲存的組態檔新增 VPN 連線，以便將用戶端裝置連線至 VPN 伺服器。",
			NOTE: 						"若要深入了解 OpenVPN 用戶端，請瀏覽網站：<a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"用戶端 IP 位址",
			ACCOUNT_USERNAME: 			"使用者名稱",
			ACCOUNT_PASSWORD: 			"密碼",
			CLIENT_IP_NOTE: 			"(最多 10 個用戶端)",
			SAME_SUBNET_NOTE: 			"用戶端IP位址與LAN IP位址不可以在相同的子網路中。",
			CONFLICT_WITH_DHCP: 		"用戶端IP位址與DHCP IP位址池發生衝突。",
			CONFLICT_WITH_RESERVED: 	"用戶端IP位址與保留的IP位址發生衝突。",
			CONFLICT_WITH_OPENVPN: 		"用戶端IP位址與OpenVPN IP位址不可以在相同的子網路中。",
			SAME_SUBNET_NOTE2: 			"VPN 子網路/網路遮罩和 LAN IP 位址不能位於同一個子網路。",
			CONFLICT_WITH_DHCP2: 		"VPN子網路/網路遮罩與DHCP IP位址池發生衝突。",
			CONFLICT_WITH_RESERVED2: 	"VPN子網路/網路遮罩與保留的IP位址發生衝突。",
			CONFLICT_WITH_PPTPVPN: 		"VPN子網路/網路遮罩與PPTP VPN IP位址不可以在相同的子網路中。",
			VPN_MASK_ERROR: 			"網路遮罩不可以大於255.255.255.248。",
			ACCOUNT_LIST: 				"帳號列表(最多16個使用者)",
			ADVANCED_SETTING: 			"進階設定",
			ALLOW_SAMBA: 				"允許Samba(網路芳鄰)存取",
			ALLOW_NETBIOS: 				"允許NetBIOS穿透",
			ALLOW_UNENCRYPTED_CONN: 	"運許未加密連線",
			USERNAME_CONFLICT: 			"此使用者名稱已經存在。",
			
			CONNECT_PPTP: 				"若要啟用 PPTP VPN 伺服器並將您的用戶端裝置並連線至此伺服器：",
			CONNECT_NOTICE:				"在設定 PPTP VPN 伺服器之前，請先設定浮動 DNS 服務 (建議) 或指定固定 IP 位址給 WAN 埠。同時確定 NAT 設定的外部埠不是 1723，且 DMZ 已停用，另外還要確認您的系統時間是正確的。",
			CONNECT_NOTE1: 				"選取「啟用 VPN 伺服器」。",
			CONNECT_NOTE2: 				"設定 PPTP VPN 伺服器參數，然後按一下「儲存」。",
			CONNECT_NOTE3: 				"在您的用戶端裝置上，建立 PPTP VPN 連線。官方支台的平台有 Windows、Mac OSX、Linux、iOS 和 Android。",
			CONNECT_NOTE4: 				"啟動 PPTP VPN 程式、新增連線，然後輸入登錄 DDNS 服務的網域名稱或指定給 WAN 埠的固定 IP 位址，以便將用戶端裝置連線至 PPTP VPN 伺服器。",
			
			GENERATE_CERT: 				"憑證",
			GENERATE_NEW_CERT: 			"產生憑證。",
			GENERATE: 					"生成",
			GENERATE_TIPS: 				"正在產生憑證...<br/>這需要幾分鐘時間，請稍候。",
			CERT_SUCCESS: 				"成功",
			CERT_FAIL: 					"失敗，請再試一次。",
			
			VPN_CONNECTIONS: 			"VPN連接",
			OPEN_VPN_CONNECTIONS: 		"OpenVPN 連線",
			PPTP_VPN_CONNECTIONS: 		"PPTP VPN 連線",
			USER:				"使用者名稱",
			REMOTE_IP:			"遠端IP",
			ASSIGNED_IP:			"分配的IP"
		}
	};
})(jQuery);

