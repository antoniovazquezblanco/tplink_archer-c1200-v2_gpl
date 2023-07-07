(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			EMAIL: 						"อีเมล์",
			FORGET_PASSWORD: 			"ลืมรหัสผ่าน?",
			LOGIN: 						"เข้าสู่ระบบ",
			BEGIN: 						"เริ่มต้น",
			IMPORTANT_UPDATE_INFO: 		"เพื่อหลีกเลี่ยงความขัดแย้งของอุปกรณ์,IP Address บนเราเตอร์ของคุณจะถูกอัพเดท",
			CONTINUE: 					"ต่อไป",

			IMPORTANT_NOTICE: 			"ข้อความสำคัญ",
			OR: 						"คุณแน่ใจหรือไม่ว่าคุณต้องการที่จะยังคงเข้าต่อไป",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"กดปุ่มรีเซ็ตค้างไว้ %SECONDS% วินาทีเพื่อทำการคืนค่าโรงงานของตัวเราเตอร์.",
			FORGET_PASSWORD_INFO_1: 	"ถ้าฟีเจอร์การกู้คืนรหัสผ่านถูกเปิดใช้งาน โค้ดการพิสูจน์และตรวจสอบจะถูกส่งไปยังอีเมล์ที่ได้ตั้งไว้สำหรับทำการรีเซ็ตชื่อผู้ใช้งานและรหัสผ่าน",
			FORGET_PASSWORD_SEND_FAILED:"การส่งโค้ดล้มเหลว! กรุณาตรวจสอบการเชือมต่ออินเทอร์เน็ต",

			VERIFICATION_CODE: 			"โค้ดการตรวจสอบ",

			RECEIVE_CODE: 				"การส่งโค้ด",

			CONFIRM: 					"ยืนยัน",
			WELCOME: 					"ยินดีต้อนรับเข้าสู่ TP-Link %model% กรุณาเข้าสู่ระบบ",
			SEC: 						"s",

			USER_CONFLICT: 				"การล็อกอินมีการขัดกัน",
			FIRST_TIME: 				"กรุณาติดตั้ง %PRODUCT% ของคุณเพื่อเชื่อมต่ออินเทอร์เน็ตก่อน เพื่อเริ่มต้นสร้างรหัสผ่านของอุปกรณ์ในการจัดการ %PRODUCT% ของคุณ",
			FIRST_TIME1: 				"กรุณาสร้างรหัสผ่านผู้ดูแลระบบของคุณในการจัดการ%model%",
			USER_CONFLICT_INFO: 		"ผู้ใช้ %USER% ที่เป็นโฮส %HOST% (%IP%/%MAC%)  ได้กำลังทำการล็อกอินเข้าตัวเราเตอร์อยู่ คุณไม่สามารถล็อกอินได้ในเวลาเดียวกัน กรุณาลองอีกครั้งในภายหลัง",
			USER_CONFLICT_INFO_2: 		"ผู้ใช้ %USER% (%IP%) ได้ทำการล็อกอินเข้าตัวเราเตอร์อยู่.",
			USER_CONFLICT_INFO_3: "Only one device can log in at a time. Do you want to continue and force the other device to log off?",
			
			LOGIN_FAILED: 				"การล็อกอินล้มเหลว!",
			LOGIN_FAILED_COUNT: 		"การล็อกอินล้มเหลว%num1 ครั้งและคุณยังมีโอกาสอีก%num2 ที่เหลือ",
			NO_COOKIE: 					"คุกกี้จะต้องถูกอนุญาติเพื่อทำการล็อกอิน", 

			FORGET_PASSWORD_NOTE: 		"ถ้าคุณไม่ได้ทำการเปิดใช้งานพีเจอร์การกู้คืนรหัสผ่าน. คุณสามารถที่จะทำการกดปุ่มรีเซ็ตค้างไว้ %SECONDS% วินาทีเพื่อทำการคืนค่าโรงงานของตัวเราเตอร์"
		},
		INIT: {
			PASSWORD: 					"รหัสผ่าน",
			CONFIRM_PASSWORD:				"ยืนยันรหัสผ่าน",
			BEGIN: 						"เริ่มต้น",
			IMPORTANT_UPDATE_INFO: 		"IP Address ของเราเตอร์จะถูกเปลี่ยนเพื่อหลีกเลี่ยงการชนกันของอุปกรณ์",
			CONTINUE: 					"ถัดไป",

			IMPORTANT_NOTICE: 			"ข้อความสำคัญ",
			OR: 						"คุณแน่ใจหรือไม่ว่าคุณต้องการที่จะยังคงเข้าต่อไป",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"ยืนยัน",

			SEC: 						"s",

			USER_CONFLICT: 				"การเข้าสู่ระบบเกิดความขัดแย้ง!",
			
			USER_CONFLICT_INFO: 		"ชื่อผู้ใช้ %USER% ด้วยโฮสต์ %HOST% (%IP%/%MAC%)กำลังเข้าสู่ระบบอยู่ คุณจึงไม่สามารถเข้าสู่ระบบได้ในเวลานี้ กรุณาลองอีกครั้งในภายหลัง",
			USER_CONFLICT_INFO_2: 		"ชื่อผู้ใช้ %USER% (%IP%) กำลังเข้าสู่ระบบอยู่ คุณจึงไม่สามารถเข้าสู่ระบบได้ในเวลานี้ กรุณาลองอีกครั้งในภายหลัง",
			
			LOGIN_FAILED: 				"การเข้าสู่ระบบล้มเหลว",
			LOGIN_FAILED_COUNT: 		"การล็อกอินล้มเหลว%num1 ครั้งและคุณยังมีโอกาสอีก%num2 ที่เหลือ",
			NO_COOKIE: 					"คุกกี้จะต้องถูกอนุญาติเพื่อทำการล็อกอิน", 

			INIT_NOTE_TITLE: 			"เรียน คุณลูกค้า",
			INIT_NOTE_CONTENT: 			"กรุณาติดตั้ง %PRODUCT% ของคุณเพื่อเชื่อมต่ออินเทอร์เน็ตก่อน เพื่อเริ่มต้นสร้างรหัสผ่านของอุปกรณ์ในการจัดการ %PRODUCT% ของคุณ"

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"รุ่นของเฟิร์มแวร์",
			FEATURE: 						"การปรับเปลี่ยนและแก้ไขข้อผิดพลาด:",
			TITLE: 							"พร้อมใช้งานเฟิร์มแวร์ใหม่ที่มีการตรวจพบ",
			UPGRADE_NOW: 					"อัปเกรดตอนนี้",
			REMIND: 						"เตือนฉันในภายหลัง ",
			NOTICE:    						"ขณะนี้มีเฟิร์มแวร์ใหม่พร้อมใช้งานสำหรับเราเตอร์ของคุณ",
			NEVER: 							"ไม่สนใจรุ่นนี้"
			
		},

		WAN_ERROR: {
			TITLE: 							"เกิดความผิดพลาดในการเชื่อมต่อ WAN",
			STATUS: 						"สถานะ",
			INFO: 							"ข้อมูล / รายละเอียด",
			SETUP: 							"ตั้งค่าการเชื่อมต่ออินเทอร์เน็ต",
			NEVER: 							"ไม่ต้องเตือนฉันอีก"
		},

		OFFLINE_ERROR:{
			TITLE: "เราไม่สามารถเข้าถึงคลาวด์เซิร์ฟเวอร์ได้",
			NOTE1: "1. ตรวจสอบให้แน่ใจว่าคุณมีการเข้าถึงอินเทอร์เน็ตแล้ว",
			NOTE2: "2. คลาวด์เซิร์ฟเวอร์จะไม่สามารถเข้าถึงได้ชั่วคราว กรุณารีเฟรชหน้านี้ในภายหลัง",
			NOTE3: "3. หากยังคงมีปัญหาอยู่ กรุณาติดต่อ<a target=\"_blank\" id=\"support\"> ฝ่ายสนับสนุนทางเทคนิคของ TP-Link </a>",
			ERROR: "มีข้อผิดพลาด"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"เวอร์ชันเฟิร์มแวร์",
			HARDWARE_VERSION: 				"เวอร์ชันฮาร์ดแวร์",
			HELP_SUPPORT: 					"รองรับ",
			FAQ: 							"คำถามที่พบบ่อย",
			CONFIRM_REBOOT: 				"คุณแน่ใจหรือไม่ว่าต้องการรีบูตตัวเราเตอร์?",
			CONFIRM_LOGOUT: 				"คุณแน่ใจหรือไม่ว่าต้องการล็อกเอาท์?",
			UPGRADE_ALERT_1: 				"เฟิร์มแวร์ปัจจุบันไม่รองรับการให้บริการ TP-Link คลาวด์ เราขอแนะนำให้คุณดาวน์โหลดเฟิร์มแวร์รุ่นล่าสุดที่ www.tp-link.com และทำการอัปเดต",
			UPGRADE_ALERT_2: 				"เฟิร์มแวร์ปัจจุบันไม่รองรับการให้บริการ TP-Link คลาวด์ เราขอแนะนำให้คุณอัปเดตเฟิร์มแวร์โดยคลิกที่ไอคอน Update ที่มุมบนทางด้านขวา",
			ACCOUNT_UNLOGIN: 				"บัญชี",

			REBOOTING: 						"กำลังทำการรีบูต...<br/>กรุณาอย่าใช้งานในระหว่างกระบวนการรีบูต",

			HELP_APP: 					"App",
			CHARACTERS_ILLUSTRETE_TITLE: 			"สแกน QR code สำหรับ ดาวน์โหลดแอปพลิเคชั่น Tether app",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"สะดวกสบายสำหรับการจัดการระบบเครือข่ายผ่านอุปกรณ์พกพา สามารถควบคุมได้ผ่านมือเรา",
			CHARACTERS_ILLUSTRETE_NOTE1: 			""
		},

		NAV: {
			QUICK_SETUP: 				"การติดตั้งแบบเร็ว",
			BASIC: 						"พื้นฐาน",
			ADVANCED: 					"ขั้นสูง"
		},

		CONTROL: {
			LOGIN: 						"เข้าสู่ระบบ",
			LOGOUT: 					"ล็อกเอาท์",
			UPDATE: 					"อัพเดท",
			REBOOT: 					"รีบูต",
			LED: 						"LED",
			LED_ON: 					"ไฟ LED เปิด",
			LED_OFF: 					"ไฟ LED ปิด",
			LED_DISABLED: 				"ไฟสถานะ LED จะไม่สามารถเปลี่ยนได้ หากใช้งานโหมดกลางคืน"
		},

		LANGUAGE: {
			EN_US: 						"English",
			ZH_CN: 						"简体中文"
		},

		REGION: {
			ALBANIA: 					"Albania",
			ALGERIA: 					"Algeria",
			AMERICAN_SAMOA: 			"American Samoa",
			ARGENTINA: 					"Argentina",
			ARMENIA: 					"Armenia",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australia",
			AUSTRIA: 					"Austria",
			AZERBAIJAN: 				"Azerbaijan",
			BAHAMAS: 					"Bahamas",
			BAHRAIN: 					"Bahrain",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Belarus",
			BELGIUM: 					"Belgium",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Berumuda",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnia and Herzegowina",
			BRAZIL: 					"Brazil",
			BRUNEI_DARUSSALAM: 			"Brunei Darussalam",
			BULGARIA: 					"Bulgaria",
			CAMBODIA: 					"Cambodia",
			CANADA: 					"Canada",
			CAYMAN_ISLANDS: 			"Cayman Islands",
			CHILE: 						"Chile",
			CHINA: 						"People's Republic of China",
			COLOMBIA: 					"Colombia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Croatia",
			CYPRUS: 					"Cyprus",
			CZECH_REPUBLIC: 			"Czech Republic",
			DENMARK: 					"Denmark",
			DOMINICAN_REPUBLIC: 		"Dominican Republic",
			ECUADOR: 					"Ecuador",
			EGYPT: 						"Egypt",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estonia",
			ETHIOPIA: 					"Ethiopia",
			FAEROE_ISLANDS: 			"Faeroe Islands",
			FINLAND: 					"Finland",
			FRANCE: 					"France",
			FRENCH_GUIANA: 				"French Guiana",
			FRENCH_POLYNESIA: 			"French Polynesia",
			GEORGIA: 					"Georgia",
			GERMANY: 					"Germany",
			GREECE: 					"Greece",
			GREENLAND: 					"Greenland",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong S.A.R., P.R.C.",
			HUNGARY: 					"Hungary",
			ICELAND: 					"Iceland",
			INDIA: 						"India",
			INDONESIA: 					"Indonesia",
			IRAN: 						"Iran",
			IRAQ: 						"Iraq",
			IRELAND: 					"Ireland",
			ISRAEL: 					"Israel",
			ITALY: 						"Italy",
			JAMAICA: 					"Jamaica",

			JAPAN: 						"Japan",
			JAPAN_1: 					"Japan 1",
			JAPAN_2: 					"Japan 2",
			JAPAN_3: 					"Japan 3",
			JAPAN_4: 					"Japan 4",
			JAPAN_5: 					"Japan 5",
			JAPAN_6: 					"Japan 6",

			JORDAN: 					"Jordan",
			KAZAKHSTAN: 				"Kazakhstan",
			KENYA: 						"Kenya",

			NORTH_KOREA: 				"North Korea",
			KOREA_REPUBLIC: 			"Korea Republic",
			KOREA_REPUBLIC_3: 			"Korea Republic 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Latvia",
			LEBANON: 					"Lebanon",
			LIBYA: 						"Libya",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Lithuania",
			LUXEMBOURG: 				"Luxembourg",
			MACAU: 						"Macau SAR",
			MACEDONIA: 					"the Former Yugoslav Republic of Macedonia",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malaysia",
			MALDIVES: 					"Maldives",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinique",
			MAURITIUS: 					"Mauritius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Mexico",
			MONACO: 					"Principality of Monaco",
			MONGOLIA: 					"Mongolia",
			MOROCCO: 					"Morocco",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Netherlands",
			NETHERLANDS_ANTILLES: 		"Netherlands-Antilles",

			NEW_ZEALAND: 				"New Zealand",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Norway",
			NORTHERN_MARIANA_ISLANDS: 	"Northern Mariana Islands",
			OMAN: 						"Oman",
			PAKISTAN: 					"Islamic Republic of Pakistan",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua New Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Peru",
			PHILIPPINES: 				"Republic of the Philippines",
			POLAND: 					"Poland",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Reunion",
			ROMANIA: 					"Romania",
			RUSSIA: 					"Singapore-ExStream",
			RWANDA: 					"Rwanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Saudi Arabia",
			SINGAPORE: 					"Singapore",
			SLOVAK_REPUBLIC: 			"Slovak Republic",
			SLOVENIA: 					"Slovenia",
			SOUTH_AFRICA: 				"South Africa",
			SPAIN: 						"Spain",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Suriname",
			SWEDEN: 					"Sweden",
			SWITZERLAND: 				"Switzerland",
			SYRIA: 						"Syria",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tanzania",
			THAILAND: 					"Thailand",
			TRINIDAD_TOBAGO: 			"Trinidad y Tobago",
			TUNISIA: 					"Tunisia",
			TURKEY: 					"Turkey",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ukraine",
			UNITED_ARAB_EMIRATES: 		"United Arab Emirates",
			UNITED_KINGDOM: 			"United Kingdom",
			UNITED_STATES: 				"United States",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Uzbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Viet Nam",
			VIRGIN_ISLANDS: 			"Virgin Islands(U.S.)",
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
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midway Island,Samoa",
			HAWAII: 					"(GMT-10:00) Hawaii",
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
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azores, Cape Verde Is",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwich Mean Time, Dublin, London",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlin, Stockholm, Rome, Bern, Brussels",
			ATHENS_HELSINKI: 			"(GMT+02:00) Athens, Helsinki, Eastern Europe, Israel",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh, Moscow",

			TEHERAN: 					"(GMT+03:30) Teheran",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Ekaterinburg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Calcutta, Bombay, New Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Beijing, Hong Kong, Perth, Singapore",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Solomon Is., New Caledonia",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamchatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"แอพพลิเคชั่น",
			GAME:						"เกมส์",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"LINE",
			Skype:                      "SKYPE",
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
			DAY: 						"วัน",

			MONDAY: 					"วันจันทร์",
			TUESDAY: 					"วันอังคาร",
			WEDNESDAY: 					"วันพุธ",
			THURSDAY: 					"วันพฤหัสบดี",
			FRIDAY: 					"วันศุกร์",
			SATURDAY: 					"วันเสาร์",
			SUNDAY: 					"วันอาทิตย์",
			
			MON: 						"จ.",
			TUES: 						"อ.",
			WED: 						"พ.",
			THUR: 						"พฤ.",
			FRI: 						"ศ.",
			SAT: 						"ส.",
			SUN: 						"อา",

			JAN: 						"ม.ค.",
			FEB: 						"ก.พ.",
			MAR: 						"มี.ค.",
			APR: 						"เม.ย.",
			MAY: 						"พ.ค.",
			JUN: 						"มิ.ย.",
			JUL: 						"ก.ค.",
			AUG: 						"ส.ค.",
			SEP: 						"ก.ย.",
			OCT: 						"ต.ค.",
			NOV: 						"พ.ย.",
			DEC: 						"ธ.ค."

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
			"1ST": 						"First",
			"2ND": 						"2nd",
			"3RD": 						"3rd",
			"4TH": 						"4th",
			"5TH": 						"Last",
			"1ST_": 					"1st",

			TH: 						"ไทย"
		},

		GRID: {
			CLIENT_NUMBER: 				"จำนวนผู้ใช้",

			ID: 						"ไอดี",
			MODIFY: 					"การเปลี่ยนแปลง",
			STATUS: 					"สถานะ",
			ENABLE: 					"เปิดใช้งาน",

			OPERATION: 					"ระบบปฏิบัติการ",
			CHOOSE: 					"เลือก",
			DESCRIPTION: 				"บรรยาย",
			

			AUTO_REFRESH: 				"รีเฟรชอัตโนมัติ",
			REFRESH: 					"รีเฟรช",
			NUMBER: 					"จำนวน",
			ENABLED: 					"ถูกเปิดการใช้งาน",
			DISABLED: 					"ถูกปิดการทำงาน",
			ACTIVE: 					"ทำงาน",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"เพิ่ม",
			CHOOSE: 					"เลือก",
			EDIT: 						"แก้ไข",
			DELETE: 					"ลบ",
			DELETE_ALL: 				"ลบทั้งหมด",
			REMOVE: 					"เอาออก",
			RESET: 						"เริ่มใหม่",
			RESET_ALL: 					"เริ่มใหม่ทั้งหมด",
			DETECT: 					"ตรวจพบ",
			ENABLE: 					"เปิดใช้งาน",
			DISABLE: 					"ปิดการใช้งาน",
			CLEAR: 						"ลบทั้งหมด",

			REFRESH: 					"รีเฟรช",
			SEARCH: 					"ค้นหา…",
			BROWSE: 					"เลือก",

			SAVE: 						"บันทึก",
			BACK: 						"ย้อนกลับ",

			PREV: 						"ก่อน",
			NEXT: 						"ถัดไป",
			FINISH: 					"เสร็จสิ้น",
			
			ON: 						"เปิด",
			OFF: 						"ปิด",
			LOW: 						"ต่ำ",
			MIDDLE: 					"กลาง",
			HIGH: 						"สูง",
			
			OK: 						"ตกลง",
			CANCEL: 					"ยกเลิก",

			YES: 						"ใช่",
			NO: 						"ไม่",
			
			CONNECTED: 					"ถูกเชื่อมต่อ",
			CONNECTING: 				"กำลังเชื่อมต่อ",
			DISCONNECTING: 				"กำลังหยุดการเชื่อมต่อ",
			DISCONNECTED: 				"ไม่ได้ถูกเชื่อมต่อ",

			PASSWORD_HINT: 				"รหัสผ่าน",
			FILEBUTTONTEXT: 			"เลือก",
			FILEBLANKTEXT: 				"กรุณาเลือกไฟล์",
			NOSELECTEDTEXT: 			"เลือกออฟชั่น",

			ADD_A_NEW_KEYWORD: 			"ใส่คำใหม่",

			SUCCESSED: 					"สำเร็จ!",
			FORM_SAVED: 				"ถูกบันทึก",
			FORM_FAILED: 				"ล้มเหลว",
			GRID_ID_COLUMN: 			"ไอดี",
			GRID_SAVED: 				"ถูกบันทึก",
			GRID_FAILED: 				"ล้มเหลว",
			GRID_NONE_SELECT: 			"กรุณาเลือกอย่างน้อยหนึ่งรายการ",
			GRID_DELETE_COMFIRM: 		"คุณต้องการที่จะลบรายการเหล่านี้หรือไม่?",
			GRID_DELETE_ALL_COMFIRM: 	"คุณต้องการที่จะลบรายการทั้งหมดใช้หรือไม่?",
			GRID_MAX_RULES: 			"การป้อนข้อมูลเกินค่าสูงสุด.",
			KEYWORD_MAX_OVERFLOW: 		"จำนวนของคำได้เกินกว่าที่กำหนด",

			NOTE: 						"หมายเหตุ:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"รูปแบบผิด",
			BLANKTEXT: 					"ช่องนี้จำเป็นต้องกรอก",

			EMAIL: 						"รูปแบบอีเมล์ไม่ถูกต้อง",
			NUMBER: 					"รูปแบบผิด",

			NUMBER_MIN: 				"ค่าข้อมูลผิด,กรุณาใส่ข้อมูลตัวเลขให้มากกว่า %min.",
			NUMBER_MAX: 				"ค่าข้อมูลผิด,กรุณาใส่ข้อมูลตัวเลขให้น้อยกว่า %max.",

			NUMBER_MIN_MAX: 			"ค่าข้อมูลผิด,กรุณาใส่ข้อมูลระหว่าง %min. และ %max.",
			HEX: 						"ช่องนี้ควรเป็นตัวเลขฐานสิบหก",

			IP: 						"รูปแบบผิด",

			IP_NO_ALL_ZERO:				"Address ไม่ควรเป็น 0.0.0.0",
			IP_NO_LOOP:					"Address ไม่ควรเป็น Loopback Address",
			IP_NO_D_TYPE:				"Address ไม่ควรเป็น Class D IP",
			IP_NO_E_TYPE:				"Address ไม่ควรเป็น Class E IP",
			IP_NO_ALL_ONE:				"Address ไม่ควรเป็น 255.255.255.255",
			IP_NO_FIRST_ALL_ONE:		"Address ไม่ควรเป็นเริ่มต้นด้วย 255",
			IP_NO_FIRST_ZERO:			"Address ไม่ควรเป็นเริ่มต้นด้วย 0",
			MASK_NO_ALL_ONE:			"Mask ไม่สามารถเป็น 255.255.255.255",

			IPV6: 						"รูปแบบผิด",
			IPV6_NOT_GLOBAL:			"รูปแบบผิด",
			IPV6_NOT_PREFIX:			"รูปแบบผิด",
			IP_DOMAIN: 					"รูปแบบผิด",
			IPV6_DOMAIN: 				"รูปแบบผิด",
			MAC: 						"รูปแบบผิด",
			MULTI_MAC:					"รูปแบบผิด",
			DATE: 						"รูปแบบผิด",
			DATE_INVALID: 				"กรุณาใส่วันที่ระหว่าง 01/01/1970 และ 12/31/2030.",
			MASK: 						"รูปแบบผิด",
			DOMAIN: 					"รูปแบบผิด",
			STRING_DOMAIN:              "รูปแบบผิด",
			USER: 						"รูปแบบผิด",
			NOTE: 						"รูปแบบผิด",
			PWD: 						"รูปแบบผิด",
			SSID: 						"รูปแบบผิด",
			NAME:						"รูปแบบผิด",
			ASCII_VISIBLE:				"รูปแบบผิด",
			STRING_VISIBLE:				"รูปแบบผิด",
			STRING_VISIBLE_NO_COMMA:    "รูปแบบผิด",
			STRING_VISIBLE_ALLOW_BLANK: "รูปแบบผิด",
			NAME_SPECIAL: 				"โปรดป้อนอักขระอัลฟา 4-15 ตัว ตัวเลข - และ _.",
			VPN_NAME_PWD: 				"โปรดป้อนอักขระอัลฟา 1-15 ตัว ตัวเลข - และ _."	
			
		},


		ERROR: {			
			"00000001":					"ชนิดไฟล์ผิด",
			"00000002":					"เกิดข้อผิดพลาดในการตรวจสอบ",
			"00000003":					"ไฟล์ใหญ่เกินไป",
			"00000004":					"เกิดข้อผิดพลาดในการอัพโหลด",
			"00000005":					"เกิดข้อผิดพลาดในการรีบูท",
			"00000006":					"เกิดข้อผิดพลาด",
			"00000007":					"ข้อมูลนี้มีอยู่แล้ว กรุณาใส่ข้อมูลอื่น",

			"00000009":					"กรุณาใช้ค่าเริ่มต้นเป็น 21 หรือใส่ค่าระหว่าง 1024 และ 65535",
			"00000010":					"พอร์ตควรเป็นตัวเลข",

			"00000011":					"ชื่อผู้ใช้ควรเหมือนกัน",
			"00000012": 				"ชื่อผู้ใช้ต้องเริ่มด้วยตัวอักษร",

			"00000021":					"รูปแบบผิด",

			"00000032": 				"ค่าต้องน้อยกว่า Low",
			"00000033": 				"ค่าต้องน้อยกว่า Middle และ Low",
			"00000034": 				"ค่าผิด, กรุณาใส่จำนวนระหว่าง 5 และ 7200",

			"00000039": 				"กรุณาใช้ค่าเริ่มต้นเป็น 0 หรือใส่ค่าระหว่าง 30 และ 86400",
			"00000040": 				"จำเป็นต้องมี SSID และ MAC Address",

			"00000042": 				"กรุณาใช้ค่าเริ่มต้นเป็น 80 หรือใส่ค่าระหว่าง 1024 และ 65535",

			"00000045": 				"Default Gateway และ LAN IP Address ควรอยู่ใน Subnet เดียวกัน. กรุณาทำใหม่อีกครั้ง",

			"00000047": 				"IP Address และ LAN IP Address ควรอยู่ใน Subnet เดียวกัน กรุณาทำใหม่อีกครั้ง",

			
			"00000049":					"เครือข่ายปลายทางผิด",

			"00000050": 				"DNS Server IP addressผิดพลาด กรุณาใส่ IP address อื่น",
			"00000051": 				"MAC address มีใช้อยู่แล้ว กรุณาใส่อันใหม่",
			"00000052": 				"IP address มีใช้อยู่แล้ว กรุณาใส่อันใหม่",

			"00000053": 				"Address เริ่มต้นไม่ควรมากกว่า Address สิ้นสุด <br/>กรุณาป้อนใหม่อีกครั้ง",

			"00000054": 				"IP address pool และ LAN IP address ควรอยู่ใน subnet เดียวกัน. กรุณาทำใหม่อีกครั้ง",

			"00000055": 				"IP ไม่ควรเหมือนกับ LAN address",

			"00000056": 				"การรีโมต IP address และ LAN IP address ปัจจุบันไม่ควรอยู่ใน subnet เดียวกัน กรุณาใส่อันใหม่",

			"00000057": 				"รูปแบบรหัสผ่าน PSK  ผิด กรุณาใส่ใหม่อีกครั้ง",
			"00000058": 				"รูปแบบรหัสผ่าน WEP  ผิด กรุณาใส่ใหม่อีกครั้ง",

			"00000059": 				"Subnet Mask และ LAN IP address ผิด กรุณาใส่อันที่ถูกต้อง",

			"00000060": 				"WAN IP address และ LAN IP address ไม่ควรอยู่ใน subnet เดียวกัน <br/> กรุณาป้อน IP address ใหม่",

			"00000061": 				"เวลาเริ่มต้นไม่ควรเร็วกว่าเวลาสิ้นสุด",

			"00000062": 				"ช่องนี้จำเป็นต้องกรอก",
			"00000063": 				"ช่องนี้จำเป็นต้องกรอก",

			"00000064": 				"ไม่สามารถบล็อค host MAC address",
			"00000065": 				"ข้อมูลนี้ขัดแย้งกับข้อมูลเดิม. กรุณาเช็ค",
			
			"00000066": 				"รหัสผ่านควรมี 8 - 63 ตัวอักษรหรือ 64 ตัวษรแบบเลขฐานสิบหก",
			"00000067": 				"รหัสผ่านควรมี 10 ตัวอักษรเลขฐานสิบหก",
			"00000068": 				"รหัสผ่านควรมี 5 ตัวอักษร ASCII",
			"00000069": 				"รหัสผ่านควรมี 26 ตัวอักษรเลขฐานสิบหก",
			"00000070": 				"รหัสผ่านควรมี 13 ตัวอักษร ASCII ",
			"00000071": 				"รหัสผ่านควรมี 32 ตัวอักษร เลขฐานสิบหก",
			"00000072": 				"รหัสผ่านควรมี 16 ตัวอักษร ASCII",
			"00000073": 				"รหัสผ่านควรมีไม่น้อยกว่า 64 ตัวอักษร",

			"00000074": 				"ชนิดไฟล์ผิด",

			"00000075": 				"ความยาวของ PIN ควรเป็น 8",

			"00000076": 				"การเข้ามีความขัดแย้งกับข้อมูลเดิมที่มีอยู่แล้ว กรุณาตรวจดูที่ trigger port และ trigger protocol",
			"00000077": 				"IP address ไม่สามารถเหมือนกันกับ LAN IP address",
			"00000078": 				"Host IP address ไม่สามารถเหมือนกันกับ LAN IP address",

			"00000080": 				"รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง",

			"00000088": 				"ระบบปฏิบัติการนี้ไม่อนุญาตให้การจัดการแบบรีโมท",
			"00000089": 				"คุณได้พยายามเข้าสู่ระบบเกิน%num ครั้ง อีกสองชั่วโมงกรุณาลองอีกครั้ง",

			"00000090": 				"ปลายทางไม่สามารถเป็น LAN IP address",
			"00000091": 				"ปลายทางไม่สามารถเป็น WAN IP address",

			"00000092": 				"IP address และ LAN IP Address ไม่ควรอยู่ใน Subnet เดียวกัน กรุณาป้อนใหม่อีกครั้ง",
			"00000093": 				"IP address และ WAN IP Address ไม่ควรอยู่ใน Subnet เดียวกัน กรุณาป้อนใหม่อีกครั้ง",

			"00000094": 				"VLAN IDs ไม่สามารถเหมือนกันได้",
			"00000095": 				"จำเป็นต้องมีอย่างน้อยหนึ่งพอร์ตอินเทอร์เน็ต",

			"00000096": 				"Keyword มีอยู่แล้ว",

			"00000097": 				"การตั้งค่าย่าน 2.4GHz จะไม่เกิดผลจนกว่า ปุ่ม Wi-Fi ถูกเปิด",
			"00000098": 				"การตั้งค่าย่าน 2.4GHz จะไม่เกิดผลจนกว่า ปุ่ม Wi-Fi ถูกเปิด",
			"00000099": 				"การตั้งค่าย่าน 2.4GHz และ 5GHz จะไม่เกิดผลจนกว่า ปุ่ม Wi-Fi ถูกเปิด",

			"00000100": 				"การตั้งค่าเครือข่าย 5GHz ไม่สามารถใช้งานได้เนื่องจากการถูกจำกัดในประเทศหรือพื้นที่ของคุณ",

			"00000101": 				"ฟังก์ชั่นเครือข่ายไร้สายของคุณถูกปิด. ถ้าคุณต้องการใช้ฟังก์ชั่นนี้.กรุณาเปิดปุ่ม Wi-Fi",
			"00000102": 				"ฟังก์ชั่นเครือข่ายไร้สายของคุณถูกปิด. ถ้าคุณต้องการใช้ฟังก์ชั่นนี้.กรุณาเปิดปุ่ม Wi-Fi",

			"00000103": 				"ฟังก์ชั่นเครือข่ายไร้สายของคุณถูกปิด. ถ้าคุณต้องการใช้ฟังก์ชั่นนี้.กรุณาเปิดปุ่ม Wi-Fi",
			"00000104": 				"ฟังก์ชั่นเครือข่ายไร้สายของคุณถูกปิด.",

			"00000105": 				"QoS และ IPTV ไม่สามารถเปิดใช้งานได้ในเวลาเดียวกัน",

			"00000106": 				"IP address ไม่สามารถเหมือนกันกับ LAN IP address",
			
			"00000107": 				"ปลายทางมีอยู่แล้ว",

			"00000110": 				"IP address pool และ LAN IP address ควรอยู่ใน subnet เดียวกัน.",
			
			"00000111": 				"QoS และ <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a>ไม่สามารถเปิดได้ในเวลาเดียวกัน.",
			"00000112": 				"WDS ฟังก์ชั่นสามารถทำงานได้ทั้งย่าน 2.4GHz หรือ 5GHz,Guest Network ไม่สามารถใช้บน WDS",
			"00000113": 				"WDS และ Guest Network ไม่สามารถเปิดใช้งานได้ในเวลาเดียวกัน",
			"00000114": 				"Traffic Statistics และ <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> ไม่สามารถเปิดได้ในเวลาเดียวกัน.",
			"00000115": 				"IPTV และ <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> ไม่สามารถเปิดใช้งานได้ในเวลาเดียวกัน",

			"00000117": 				"Domain Name มีอยู่แล้ว",
			"00000118": 				"จำนวนของ Domain Name ได้เกินกว่าที่จำกัดไว้",
			"00000119":				"ถ้า Nat Boost เปิดบริการ ,<a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">จะปิดการให้บริการโดยอัตโนมัต</a>.",

			"00000120": 				"รหัสผ่านควรมี 5  หรือ 13 ตัวอักษร ASCII",
			"00000121": 				"รหัสผ่านควรมี 10  หรือ 26 ตัวอักษร เลขฐานสิบหก",
			"00000122": 				"ชื่อผู้ใช้และรหัสผ่านว่างเปล่า, คุณแน่ใจหรือไม่ว่าจะต้องการทำต่อไป ?",
			"00000123": 				"กำลังบันทึก….<br/>กรุณาอย่าใช้งานในช่วงที่ระบบกำลังบันทึก",
			"00000124": 				"PIN เราเตอร์ถูกล็อคเนื่องจากมีการเชื่อมต่อซ้ำโดยใช้ PIN ที่ผิด. กรุณาสร้าง PIN ใหม่",

			"00000125": 				"จำนวนของ QoS rules ได้เกินกว่าที่จำกัดไว้",
			"00000126": 				"ขนาดไฟล์ได้เกินกว่าที่จำกัดไว้",
			"00000127": 				"ข้อมูลของไฟล์ไม่ถูกต้อง",
			"00000128": 				"กรุณาเลือกอย่างน้อยหนึ่งรายการ.",
			"00000129": 				"กรุณาเลือกอย่างน้อยหนึ่งพอร์ต",
			"00000130":					"ฟังก์ชั่น WPS ของคุณถูกปิด",
			"00000131": 				"NTP Server ไม่ควรเป็น loopback address",
			"00000132": 				"การสับเปลี่ยนเกิดข้อผิดพลาด ลองอีกทีหรือรีบูทเราเตอร์ของคุณ",
			"00000133": 				"DMZ IP Address. กรุณาใส่อันที่ถูก",
			"00000134":  				"Internal IP. กรุณาใส่อันที่ถูก",
			"00000135": 				"เกิดข้อผิดพลาดที่เฟิร์มแวร์",
			"00000136": 				"เกิดข้อผิดพลาดในไฟล์แบ็คอัพ",
			"00000137": 				"ชื่อผู้ใช้ว่างเปล่า คุณแน่ใจว่าคุณต้องการดำเนินการต่อหรือไม่",
			"00000138": 				"รหัสผ่านว่างเปล่า คุณแน่ใจว่าคุณต้องการดำเนินการต่อหรือไม่",
			"00000139": 				"พารามิเตอร์กู้คืนรหัสผ่านไม่ถูกต้อง",
			"00000140": 				"รหัสไม่ถูกต้อง",
			"00000141": 				"การกู้คืนรหัสผ่านถูกปิดใช้งาน",
			"00000142": 				"ล้มเหลวในการส่งรหัส กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณ",
			"00000143": 				"ที่อยู่อีเมลที่ไม่ถูกต้อง",
			"00000144": 				"ข้อความอีเมล์ไม่ถูกต้อง",
			"00000145": 				"ไม่พบโฮสต์",
			"00000146": 				"การรับรองความถูกต้องล้มเหลว",
			"00000147": 				"พอร์ตควรอยู่ระหว่าง 1 และ 65535",
			"00000148": 				"สำหรับช่วงหมายเลขพอร์ต พอร์ตเริ่มต้นควรจะน้อยกว่าพอร์ตที่สิ้นสุด กรุณาใส่อีกครั้ง",
			"00000149": 				"หมายเลขพอร์ตซ้ำ กรุณาใส่อีกครั้ง",
			"00000150": 				"Subnet Mask และ WAN IP address ผิด กรุณาใส่อันที่ถูกต้อง",
			"00000151": 				"กรุณาเลือกอย่างน้อยหนึ่งวัน",
			"00000152": 				"กรุณาตั้งเวลาในการเข้าถึงอินเทอร์เน็ต",
			"00000213":					"IP address ของ DNS เซิร์ฟเวอร์ และ IP address ของ LAN  ไม่สามารถอยู่ใน subnet เดียวกันได้ <br/>กรุณาป้อน IP address อื่น",
			"10000139": 				"ไม่ได้เชื่อมต่อกับอินเทอร์เน็ต",
			"10000140": 				"Request timed out กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองอีกครั้งในภายหลัง / เกิดข้อผิดพลาด กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองอีกครั้งในภายหลัง",
			"10000158": 				"ไม่มีการเชื่อมต่อพอร์ต WAN",
			"10000159": 				"ไม่สามารถเชื่อมต่อกับอินเทอร์เน็ตได้ โปรดติดต่อผู้ให้บริการของคุณหรือลองอีกครั้งในภายหลัง",
			"10000160": 				"ไม่สามารถรับ IP address  จาก DHCP  Server ได้ กรุณาตรวจสอบประเภทการเชื่อมต่อ WAN หรือลองอีกครั้งในภายหลัง",
			"10000161": 				"การรับรอง / ยืนยันความถูกต้อง PPPoE ล้มเหลว กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่านของคุณ",
			"10000162": 				"ไม่สามารถเชื่อมต่อกับ PPPoE Server ได้",

			"10000164": 				"การรับรองความถูกต้อง PPTP ล้มเหลว กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่านของคุณ",
			"10000165": 				"ไม่สามารถเชื่อมต่อกับ PPTP server ได้",

			"10000167": 				"การรับรองความถูกต้อง L2TP ล้มเหลว กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่านของคุณ",
			"10000168": 				"ไม่สามารถเชื่อมต่อกับ L2TP server ได้",
			"10000169": 				"เกิดข้อผิดพลาดที่ไม่รู้จัก กรุณาลองใหม่อีกครั้งในภายหลัง",
			"10000172": 				"การเชื่อมต่อล้มเหลว",

			"10000185": 				"ระบบเกิดข้อผิดพลาด",	
			"10000186": 				"เกิดข้อผิดพลาดที่เฟิร์มแวร์",	
			"10000187": 				"เกิดข้อผิดพลาดในการดาวน์โหลดเฟิร์มแวร์",	
			"10000188": 				"เกิดข้อผิดพลาดในการอัปเกรดเฟิร์มแวร์",	
			"10000191": 				"ไม่สามารถดาวน์โหลดไฟล์เฟิร์มแวร์ได้",
			"10000192": 				"เกิดข้อผิดพลาดในการอัปเกรดเฟิร์มแวร์",
			"10000193": 				"ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",	
			"10000194": 				"ไม่สามารถเชื่อมต่อกับคลาวด์เซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง",
			"10000195": 				"คุณไม่สามารถตั้งรหัสผ่านอีกครั้งได้ เนื่องจากคุณได้มีการตั้งรหัสผ่านไปแล้ว",
			
			"E3002":                    "การร้องขอไม่สำเร็จ", 
			"E10000": 					"เกิดข้อผิดพลาดที่พบบ่อย",
			"E20002": 					"การร้องขอไม่สำเร็จ",
			"E20003": 					"คลาวด์เซิร์ฟเวอร์ไม่ว่าง กรุณาลองใหม่อีกครั้งในภายหลัง",
			"E20107": 					"การป้อนข้อมูลไม่ถูกต้อง",
			"E20200": 					"รูปแบบอีเมล์ไม่ถูกต้อง",
			"E20502": 					"ไม่สามารถที่รวมอุปกรณ์ได้ กรุณาลองใหม่อีกครั้งในภายหลัง",
			"E20503": 					"ไม่สามารถยกเลิกการรวมอุปกรณ์ได้ กรุณาลองใหม่อีกครั้งในภายหลัง",
			"E20506": 					"การดำเนินการล้มเหลว อุปกรณ์นั้นได้ถูกรวมไว้กับบัญชีคลาวด์เรียบร้อยแล้ว",
			"E20507": 					"อุปกรณ์นี้ไม่ได้ผูกกับบัญชีไว้",
			"E20508": 					"จำนวนบัญชีที่ถูกผูกไว้ถึงขีดจำกัดสูงสุดแล้ว",
			"E20509": 					"บัญชีผู้ใช้ไม่มีสิทธิ์ในการผูกบัญชีผู้ใช้ใหม่",
			"E20571": 					"อุปกรณ์นี้อยู่ในสถานะออฟไลน์",
			"E20580": 					"การดำเนินการล้มเหลว บัญชีนี้ยังไม่ได้ผูกกับอุปกรณ์",
			"E20600": 					"อีเมล์นี้ยังไม่ได้ลงทะเบียน",
			"E20601": 					"ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
			"E20602": 					"บัญชีนี้นี้ยังไม่ได้ลงทะเบียน",
			"E20603": 					"อีเมล์นี้ได้มีการลงทะเบียนเรียบร้อยแล้ว",
			"E20604": 					"ชื่อผู้ใช้ไม่ถูกต้อง กรุณาป้อนที่อยู่อีเมล์หรือหมายเลขโทรศัพท์",
			"E20606": 					"ไม่สามารถส่งอีเมล์ยืนยันการใช้งานบัญชีได้",
			"E20615": 					"รหัสผ่านไม่ถูกต้อง กรุณากรอก 6-32 ตัวอักษรโดยไม่มีช่องว่าง",
			"E20616": 					"รหัสผ่านไม่ถูกต้อง กรุณากรอก 6-32 ตัวอักษรโดยไม่มีช่องว่าง",
			"E20617": 					"ไม่มีบัญชีผู้ใช้นี้",
			"E20618": 					"ไม่มีบัญชีผู้ใช้นี้",
			"E20620": 					"ชื่อเล่นไม่ถูกต้อง กรุณาป้อนตัวอักษร 1-64 ตัวอักษร",
			"E20661": 					"บัญชีนี้จะถูกล็อก 2 ชั่วโมงเนื่องจากมีความพยายามในการเข้าสู่ระบบมากเกินไป (20 ครั้งในครึ่งชั่วโมง)",
			"E20662": 					"เมื่ออุปกรณ์ถูกล็อกแล้ว ภายใน 24 ชั่วโมงถัดไปอุปกรณ์ที่จะไม่ตอบสนองต่อการร้องขอรหัสยืนยันใดๆ ทั้งสิ้น",
			"E20671": 					"ไม่สามารถตรวจสอบบัญชี",
			"E20672": 					"ไม่สามารถตรวจสอบบัญชี การเชื่อมโยงเปิดใช้งานบัญชีได้หมดอายุแล้ว โปรดส่งคำขอใหม่อีกครั้ง",
			"E20673": 					"การเชื่อมโยงการรีเซ็ตรหัสผ่านได้หมดอายุแล้ว โปรดส่งคำขอใหม่อีกครั้ง",
			"E20674": 					"ไม่สามารถตั้งค่ารหัสผ่านได้",
			"E20675": 					"ขณะนี้บัญชีถูกใช้งานในอุปกรณ์อื่น",
			"E22000": 					"การป้อนข้อมูลไม่ถูกต้อง",
			"E22001": 					"ชื่อโดเมนมีการลงทะเบียนแล้ว",
			"E22002": 					"จำนวนของชื่อโดเมนที่ลงทะเบียนได้ครบจำนวนสูงสุดแล้ว",
			"E22003": 					"จำนวนของชื่อโดเมนที่ถูกผูกไว้ มีอยู่ถึงขีดจำกัดสูงสุดแล้ว",
			"E22004": 					"ชื่อโดเมนนี้ถูกผูกไว้แล้วกับอุปกรณ์อื่น",
			"E22006": 					"ระบบผิดพลาด กรุณาลองใหม่อีกครั้งในภายหลัง",
			"E22007": 					"ตัวอักษรพิมพ์เล็ก พิมพ์ใหญ่ มีผลต่อการตั้งชื่อโดเมน กรุณาลองอีกครั้ง",
			"E22008": 					"ชื่อโดเมนไม่ถูกต้อง",

			"E50101": 					"ไม่มีการเชื่อมต่อพอร์ต WAN",
			"E50102": 					"ไม่สามารถเชื่อมต่อกับอินเทอร์เน็ตได้ โปรดติดต่อผู้ให้บริการหรือลองอีกครั้งในภายหลัง",
			"E50103": 					"ไม่สามารถรับ IP address  จาก DHCP  Server ได้ กรุณาตรวจสอบประเภทการเชื่อมต่อ WAN หรือลองอีกครั้งในภายหลัง",
			"E50111": 					"การรับรอง / ยืนยันความถูกต้อง PPPoE ล้มเหลว กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่านของคุณ",
			"E50112": 					"ไม่สามารถเชื่อมต่อกับ PPPoE Server ได้",
			"E50121": 					"การรับรองความถูกต้อง PPTP ล้มเหลว กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่านของคุณ",
			"E50122": 					"ไม่สามารถเชื่อมต่อกับ PPTP server ได้",
			"E50131": 					"การรับรองความถูกต้อง L2TP ล้มเหลว กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่านของคุณ",
			"E50132": 					"ไม่สามารถเชื่อมต่อกับ L2TP server ได้",
			"E50140": 					"เกิดข้อผิดพลาดที่ไม่รู้จัก กรุณาลองใหม่อีกครั้งในภายหลัง",
			"E51215": 					"Request timed out กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองอีกครั้งในภายหลัง / เกิดข้อผิดพลาด กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองอีกครั้งในภายหลัง",
			"E_CLOUD_SERVER": 			"เซิร์ฟเวอร์เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
			"E5000": 					"ไม่สามารถเชื่อมต่อกับคลาวด์เซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง",
			"E5001": 					"TP-Link ID ไม่ถูกต้องหรืออุปกรณ์ของคุณออฟไลน์อยู่ มีเพียงผู้ดูแลระบบเท่านั้นที่สามารถเข้าสู่ระบบได้",
			"E5002": 					"รหัสผ่านไม่ถูกต้อง"
		},

		MENU: {
			STATUS: 					"สถานะ",
			NETWORK: 					"เครือข่าย",
			NETWORK_MAP: 				"Network Map",
			INTERNET: 					"อินเทอร์เน็ต",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP Server",
			DYNAMIC_DNS: 				"Dynamic DNS",
			ADVANCED_ROUTING: 			"Advanced Routing",

			WIRELESS: 					"ไวเลส",
			WIRELESS_SETTINGS: 			"การตั้งค่าเครือข่ายไวเลส",
			WDSBRIDGING: 				"การบริดจิ้ง WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"MAC Filtering",
			WIRE_STATISTICS: 			"Statistics",
			
			
			GUEST_NETWORK: 				"เครือข่ายสำหรับบุคคลคนภายนอก",
			WIRELESS_SETTINGS: 			"การตั้งค่าเครือข่ายไวเลส",
			STORAGE_SHARING: 			"Storage Sharing",
			NAT_FORWARDING: 			"NAT Forwarding",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Virtual Servers",
			PORT_TRIGGERING: 			"Port Triggering",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"USB Settings",
			BASIC_SET: 					"การตั้งค่าพื้นฐาน",
			DISK_SET: 					"ตั้งค่าอุปกรณ์",
			FOLDER_SHARING: 			"Sharing Access",
			STORAGE_SHARING: 			"Storage Sharing",
			FTP_SERVER: 				"FTP Server",
			MEDIA_SERVER: 				"Media Server",
			PRINT_SERVER: 				"ปรินเตอร์เซิร์ฟเวอร์",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Parental Control",
			
			QOS:  						"QoS",
			DATABASE:  					"Database",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Map",
			SB_MAP: 					"Map",
			SB_BANDWIDTH:  				"แบนด์วิธ",
			SB_PRIORITY: 				"ลำดับความสำคัญ",
			SB_STATISTICS: 				"Statistics",

			
			SECURITY: 					"การรักษาความปลอดภัย",
			SETTINGS: 					"การตั้งค่า",
			ACCESS_CONTROL: 			"การควบคุมการเข้าถึง",
			IP_MAC_BINDING: 			"IP&MAC Binding",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"System Tools",
			TIME_SETTINGS: 				"การตั้งเวลา",
			DIAGNOSTIC: 				"การวินิจฉัย",
			FIRMWARE_UPGRADE: 			"การอัพเกรดเฟิร์มแวร์",
			BACKUP_RESTORE: 			"Backup & Restore",
			ADMINISTRATION: 			"Administration",
			SYSTEM_LOG: 				"ค่าล็อกของระบบ",
			STATISTICS: 				"สถิติการจราจรข้อมูล",
			SYSTEM_PARAMETERS: 			"System Parameters",
			ACCOUNT: 					"TP-Link คลาวด์",
			
			VPN: 						"VPN Server",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"การเชื่อมต่อ VPN"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"ภูมิภาคและโซนเวลา",
			INTERNET_CONNECTION_TYPE: 	"รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
			WIRELESS_SETTINGS: 			"การตั้งค่าเครือข่ายไวเลส",
			SUMMARY: 					"ภาพรวม",
			SETUP_COMPLETE: 			"กำลังทดสอบการเชื่อมต่ออินเทอร์เน็ต",
			SETUP_COMPLETE_CLOUD: 			"การให้บริการ TP-Link Cloud ",

			EXIT: 						"ออก",
			NEXT: 						"ถัดไป",
			SAVE: 						"บันทึก",
			FINISH: 					"เสร็จสิ้น",
			OK: 						"ตกลง",
			NONE: 						"การตรวจสอบล้มเหลว",

			REGION: 					"ภูมิภาค",
			TIME_ZONE: 					"โซนเวลา",

			AUTO_DETECT: 				"ตรวจจับอัตโนมัติ",
			DYNAMIC_IP: 				"Dynamic IP",
			STATIC_IP: 					"Static IP",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "ถ้าคุณไม่แน่ใจรูปแบบการเชื่อมต่อของคุณ,ใช้ค้นหาอัตโนมัตหรือติดต่อกับผู้ให้บริการอินเตอร์เน็ตของคุณเพื่อขอความช่วยเหลือ",

			DYNAMIC_IP_INFO: 			"ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณนั้นกำหนดการเชื่อมต่อผ่าน MAC แอดเดรสที่กำหนดไว้   คุณจำเป็นต้องทำการโคลนค่า MAC แอดแดรสเพื่อให้สามารถให้อุปกรณ์อื่นๆสามารถเข้าถึงการใช้งานอินเทอร์เน็ตได้ ถ้ายังไม่แน่ใจ ให้เลือกที่ ไม่ทำการ โคลน MAC แอดเดรส",
			MAC_CLONE_NO: 				"ไม่โคลน MAC Address",
			MAC_CLONE_YES: 				"โคลน MAC แอดเดรสของคอมพิวเตอร์เครื่องปัจจุบัน",
			MAC_CLONE_NOTE: 			"หมายเหตุ: ถ้าคุณเลือกโคลน MAC แอดเดรส กรุณาตรวจสอบให้แน่ใจก่อนว่า โคลน MAC แอดเดรส ของคอมพิวเตอร์นี้ได้ถูกลงทะเบียนกับผู้ให้บริการอินเทอร์เน็ตมาก่อนหน้าแล้วก่อนทำการคลิ๊กเลือกถัดไป",

			PPPOE_INFO: 				"กรุณากรอกชื่อผู้ใช้งานและรหัสผ่านของระบบ PPPoE ของคุณ",
			
			STATIC_IP_INFO: 			"กรุณาใส่ข้อมูล IP ของคุณ",

			L2TP_INFO: 					"กรุณากรอกชื่อผู้ใช้งานและรหัสผ่านของระบบ L2PT ของคุณ",
			PPTP_INFO: 					"กรุณากรอกชื่อผู้ใช้งานและรหัสผ่านของระบบ PPTP ของคุณ",
			
			USERNAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			SERVER_IP_ADDRESS_NAME: 	"IP เซิร์ฟเวอร์ VPN /ชื่อโดเมน",
			IP_ADDRESS: 				"IP Address",
			SUBNET_MASK: 				"Subnet Mask",
			DEFAULT_GATEWAY: 			"Default Gateway",
			PRIMARY_DNS: 				"DNS หลัก",
			SECOND_DNS: 				"DNS รอง",
			OPTIONAL: 					"(ถ้ามี)",
			
			ON: 						"เปิด",
			OFF: 						"ปิด",
			WIRELESS_24GHZ: 			"ไวเลส 2.4GHz",
			WIRELESS_5GHZ: 				"ไวเลส 5GHz",
			ENABLE_WIRELESS_RADIO: 		"เปิดใช้งานสัญญาณไวเลส",
			NAME_SSID: 					"ชื่อเครือข่ายไวเลส (SSID)",

			SUMMARY_INFO1: 				"คุณจำเป็นต้องเชือมต่ออุปกรณ์ไวเลสของคุณกับเครือข่ายไวเลสใหม่ก่อน แล้วคลิกที่ปุ่ม<strong>ถัดไป</strong>",
			SUMMARY_INFO2: 				"ชื่อสัญญาณไวเลสและรหัสผ่านจะถูกแก้ไขตามข้อมูลด้านล่าง",
			SUMMARY_INFO3: 				"ตรวจสอบให้แน่ใจว่าคุณได้เชื่อมต่อกับเครื่อข่ายไวเลสตัวใหม่แล้ว",

			WIRELESS_24GHZ_SSID: 		"ชื่อไวเลส 2.4GHz",
			WIRELESS_24GHZ_PASSWORD: 	"รหัสไวเลส 2.4GHz",
			WIRELESS_5GHZ_SSID: 		"ชื่อไวเลส 5GHz",
			WIRELESS_5GHZ_PASSWORD: 	"รหัสไวเลส 5GHz",

			SORRY: 						"ล้มเหลว",
			SUCCESS: 					"สำเร็จ!",
			TEST_INTERNET_SUCCESS_INFO: "คลิ๊กเสร็จสิ้นเพื่อจบกระบวนการตั้งค่าแบบเร่งด่วน",

			TEST_INTERNET_FAILED_INFO_0:"กรุณาตรวจสอบว่าค่าทั้งหมดถูกต้องและลองอีกครั้ง. ถ้าค่าทั้งหมดถูกต้อง. กรุณารีบูทโมเดมของคุณ,รอ 2 นาที, และคลิกทดสอบการเชื่อมต่ออินเตอร์เน็ตให้มากกว่า 1 ครั้ง. ถ้าคุณไม่สามารถใช้โมเดมได้. คุณอาจจะต้องติดต่อผู้ให้บริการอินเตอร์เน็ตของคุณเพื่อขอความช่วยเหลือ",
			TEST_INTERNET_FAILED_INFO_1: "การตั้งค่าการเชื่อมต่ออินเทอร์เน็ตไม่สมบูรณ์ <br /> 1. ตรวจสอบให้แน่ใจว่าสายทั้งหมดเชื่อมต่ออย่างถูกต้อง <br /> 2. คลิกที่ย้อนกลับและตรวจสอบว่าข้อมูลการเชื่อมต่ออินเทอร์เน็ตถูกต้อง <br /> 3. ติดต่อฝ่ายสนับสนุนด้านเทคนิคหากยังพบปัญหาอยู่",
			SUMMARY_INFO4: 				"ขออภัย ! เราพบว่าคุณยังไม่ได้ทำการเชื่อมต่ออุปกรณ์ไวเลสของคุณกับเครื่อข่ายไวเลสตัวใหม่ กรุณาทำการเชื่อมต่อแล้วคลิ๊ก <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"ขอแสดงความยินดี!",
			COMPLETE_INFO_0: 			"คุณได้ทำการติดตั้งแบบเร่งด่วนสำเร็จแล้ว.",
			COMPLETE_INFO_1:			"คลิ๊กทำการทดสอบอินเทอร์เน็ตด้านล่างแล้วคลิ๊กเสร็จสิ้น.",
			COMPLETE_INFO_2: 			"คุณยังไม่ได้เข้าสู่ระบบบัญชี TP-Link คลาวด์ คุณสามารถเข้าสู่ระบบภายหลังได้จาก Basic > TP-Link Cloud",
			TEST_INTERNET: 				"กำลังทดสอบการเชื่อมต่ออินเทอร์เน็ต",

			
			RESET_USER_TITLE: 			"ตั้งค่าชื่อผู้ใช้และรหัสผ่านใหม่",
			NEW_USERNAME: 				"ชื่อผู้ใช้ใหม่",
			NEW_PASSWORD: 				"รหัสผ่านใหม่",
			CONFIRM_PASSWORD: 			"ยืนยันรหัสผ่านใหม่",
			
			NO_ACCOUNT: 				"ไม่มี TP-Link ID?",
			REGISTER_NOW: 				"ลงทะเบียนตอนนี้",
			REGISTER_SKIP: 				"เข้าสู่ระบบในภายหลัง",
			LOGIN: 						"เข้าสู่ระบบ",
			REGISTER_NEW:				"ลงทะเบียนผู้ใช้ใหม่",
			COMPLETE_INFO_EMAIL_PREFIX: "TP-Link ID ของคุณคือ:",
			COMPLETE_INFO_EMAIL_SUFFIX: "เราขอแนะนำให้คุณเข้าสู่ระบบในการใช้บัญชีนี้สำหรับการจัดการอุปกรณ์ของคุณและอื่นๆในฟังก์ชั่น TP-Link คลาวด์",

			INTERNET_OK: 				"ขอแสดงความยินดี! ระบบเครือข่ายถูกติดตั้งเรียบร้อยแล้ว สามารถใช้งานอินเทอร์เน็ตได้ในขณะนี้",
			CLOUD_WIZARD: 				"สำหรับฟังก์ชั่นเพิ่มเติมของ TP-link Cloud กรุณาเข้าสู่ระบบของคุณ",
			ACCOUNT_DESP:               "คุณสามารถเชื่อมต่อ TP-Link  ID", 
			ACCOUNT_DESP_SUB1:          "การเข้าถึงอุปกรณ์และเซิร์ฟเวอร์ท้องถิ่น (FTP, HTTP, ฯลฯ ) ของคุณได้ทุกที่ผ่านทางอินเทอร์เน็ต",
			ACCOUNT_DESP_SUB2:          "ตรวจสอบเฟิร์มแวร์อย่างสม่ำเสมอ จากฟังก์ชั่นการอัพเกรดออนไลน์",
	        ACCOUNT_DESP_SUB3:          "สามารถจัดการอุปกรณ์ได้หลายเครื่องด้วยบัญชีเดียว",
			
			CONFIRM: 					"ยืนยัน"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"อินเทอร์เน็ต",
			INTERNET_STATUS:			"สถานะอินเทอร์เน็ต",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
			SECONDARY_CONN: 			"การเชื่อมต่อสำรอง",

			POOR_CONNECTED: 			"การเชื่อมต่อแย่",
			UNPLUGGED: 					"พอร์ต WAN ยังไม่ถูกเชื่อมต่อ",
			
			CONNECTED: 					"ถูกเชื่อมต่อ",
			DISCONNECTED: 				"ไม่เชื่อมต่อ",

			INTERNET_IP_ADDR: 			"IP Address",
			
			IP_ADDR: 					"IP Address",
			MAC_ADDR: 					"MAC Address",
			GATEWAY: 					"Gateway",

			AUTO: 						"อัตโนมัต",
			
			ROUTER: 					"เราเตอร์",
			WIRELESS_CLIENTS: 			"ผู้ใช้ไวเลส",
			HOST_CLIENTS: 				"Host Clients",
			GUEST_CLIENTS: 				"จำนวนผู้ใช้ภายนอก",
			WIRE_CLIENTS: 				"ผู้ใช้ผ่านสาย",
			PRINTER: 					"ปรินเตอร์",
			USB_DISK: 					"USB Disk",
			WIRELESS: 					"ไวเลส",
			NAME: 						"ชื่อ",
			
			

			SSID: 						"ชื่อเครือข่ายไวเลส",
			CHANNEL: 					"ช่องสัญญาณ",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"ไวเลส 2.4GHz",
			WIRELESS_5GHZ: 				"ไวเลส 5GHz",
			
			GUEST_24GHZ: 				"Guest Network 2.4GHz",
			GUEST_5GHZ: 				"Guest Network 5GHz",
			
			STATUS: 					"สถานะ",
			TOTAL: 						"รวม",
			AVAILABLE: 					"สามารถใช้",
			GB: 						"GB",
			BRAND: 						"ยี่ห้อ",

			DYNAMIC_IP: 				"Dynamic IP",
			STATIC_IP: 					"Static IP",
			SUBNET_MASK: 				"Subnet Mask",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 ทันเนลลิ่ง",
			NONE: 						"None"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"อินเทอร์เน็ต",
			AUTO_DETECT: 				"ตรวจจับอัตโนมัติ",
			INTERNET_CONN_TYPE: 		"รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
			DYNAMIC_IP: 				"Dynamic IP",
			STATIC_IP: 					"Static IP",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"Dhcp",
			UNPLUGGED: 					"พอร์ต WAN ยังไม่ถูกเชื่อมต่อ",
			NONE: 						"None",
			DETECT_FAIL: 				"การค้นหาอัตโนมัตล้มเหลว",
			SECONDARY_CONN: 			"การเชื่อมต่อสำรอง",

			DYNAMIC_YES: 				"ไม่โคลน MAC Address",
			DYNAMIC_NO: 				"โคลน MAC แอดเดรสของคอมพิวเตอร์เครื่องปัจจุบัน",
			
			IP_ADDR: 					"IP Address",
			SUBNET_MASK: 				"Subnet Mask",
			DEFAULT_GATEWAY: 			"Default Gateway",
			PRIMARY_DNS: 				"DNS หลัก",
			SECOND_DNS: 				"DNS รอง",
			OPTIONAL: 					"(ถ้ามี)",
			USER_NAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			SERVER_IP_ADDR_NAME: 		"IP เซิร์ฟเวอร์ VPN /ชื่อโดเมน",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"ถ้าคุณไม่แน่ใจรูปแบบการเชื่อมต่อของคุณ,ใช้ค้นหาอัตโนมัตหรือติดต่อกับผู้ให้บริการอินเตอร์เน็ตของคุณเพื่อขอความช่วยเหลือ"
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"การตั้งค่าเครือข่ายไวเลส",
			MODE_2G: 					"ไวเลส 2.4GHz",
			MODE_5G: 					"ไวเลส 5GHz",
			WIRELESS_NETWORK_NAME: 		"ชื่อเครือข่ายไวเลส (SSID)",
			WIRELESS_PASSWORD: 			"รหัสผ่าน",
			ENABLE_WIRELESS: 			"เปิดใช้งานสัญญาณไวเลส",
			SAVE: 						"บันทึก",
			ENCRYPTION_2G_NOTICE:		"การเข้ารหัสของ 2.4G คือ %s.",
			ENCRYPTION_5G_NOTICE:		"การเข้ารหัสของ 5G คือ %s.",
			ENCRYPTION_2G_NO: 			"2.4GHz เครือข่ายไวเลสไม่ได้เข้ารหัส",
			ENCRYPTION_5G_NO: 			"5GHz เครือข่ายไวเลสไม่ได้เข้ารหัส",
			ENCRYPTION_SURE: 			"คุณต้องการดำเนินการต่อไปหรือไม่?",

			HIDE_SSID: 					"ซ่อน SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"การตั้งค่าพื้นฐาน",
			TITIL_NEW:					"Disk&Account",
			DISK_SET:					"ตั้งค่าอุปกรณ์",

			SELFLY_REMOVE:				"ถอดด้วยความปลอดภัย",
			SCANING:					"กำลังค้นหา",
			SCAN_RESULT:				"ค้นพบ %n disk",
			
			DISKS:						"Disk&Account",
			USERS: 						"บัญชีผู้ใช้",
			DEVICENAME: 				"ชื่ออุปกรณ์",
			VOLUMN: 					"ปริมาณ",

			USBSPACE: 					"พื้นที่ถูกใช้",
			FREESPACE: 					"พื้นที่ว่าง",
			STATUS: 					"สถานะ",
			INACT: 						"ไม่ได้ใช้งาน",
			USAGE: 						"การใช้งาน",
			CAPACITY: 					"ความจุ",
			OPERATION: 					"ระบบปฏิบัติการ",
			
			ACC: 						"บัญชีการจัดการ",
			USERNAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			USE_LOGIN: 					"ผู้ใช้เข้าสู่ระบบ",
			SCAN: 						"ค้นหา",
			ENJECT_ALL: 				"ถอดออกทั้งหมด",
			ENJECT: 					"ถอด",
			ADD_USER: 					"เพิ่มผู้ใช้",
			AUTH: 						"สิทธิ์",


			LOCATION: 					"สถานที่",
			MOBILE_ISP: 				"Mobile ISP",
			DIAL_NUMBER: 				"Dial Number",
			APN: 						"APN",
			USERNAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			MTU_SIZE: 					"ขนาด MTU (หน่วยบิต)",
			OPTIONAL: 					"(ถ้ามี)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Parental Control",

			DEVICE_CTR: 				"อุปกรณ์ที่อยู่ภายใต้การควบคุมโดยผู้ปกครอง",
			ID: 						"ไอดี",
			DEVICE: 					"ชื่ออุปกรณ์",
			MAC_ADDRESS: 				"MAC Address",
			TIME: 						"เวลาการเข้าสู่อินเตอร์เน็ต",
			DESCRIPTION: 				"บรรยาย",
			ENABLE: 					"เปิด",
			ENABLE_THIS_ENTRY: 			"เปิด",
			OPTIONAL: 					"(ถ้ามี)",
			BTN_VIEW: 					"ดูอุปกรณ์ที่มีอยู่แล้ว",
			ACCESS_DEVICES_LIST: 		"รายชื่ออุปกรณ์",
			OPT: 						"ระบบปฏิบัติการ",
			STATUS: 					"สถานะ"
		},
		
		BASIC_GUEST:{
			TITLE: 						"เครือข่ายสำหรับบุคคลคนภายนอก",
			MODE_2G: 					"ไวเลส 2.4GHz",
			MODE_5G: 					"ไวเลส 5GHz",
			WIRELESS_NETWORK_NAME: 		"ชื่อเครือข่ายไวเลส (SSID)",
			WIRELESS_PASSWORD: 			"รหัสผ่าน",
			ENABLE_WIRELESS: 			"เปิด Guest Network",
			SAVE:						"บันทึก",
			HIDE_SSID: 					"ซ่อน SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"บัญชีผู้ใช้คลาวด์",
			OFFLINE_NOTE_TITLE: 		"อุปกรณ์ออฟไลน์",
			LOGIN_NOTE_TITLE: 			"Oops…",
			LOGIN_OFFLINE_NOTE: 		"อุปกรณ์ออฟไลน์ กรุณาตรวจสอบการเชื่อมต่อ WAN และการตั้งค่าเครือข่ายให้ถูกต้อง",

			EMAIL: 						"อีเมล์",
			PASSWORD: 					"รหัสผ่าน",
			FORGET_PASSWORD: 			"ลืมรหัสผ่าน?",

			CLOUD_WIZARD: 				"สำหรับฟังก์ชั่นเพิ่มเติมของ TP-link Cloud กรุณาเข้าสู่ระบบของคุณ",
			NO_ACCOUNT: 				"ไม่มี TP-Link ID?",
			REGISTER_NOW: 				"ลงทะเบียนตอนนี้"
		},
		STATUS: {
			TITLE: 						"สถานะ",
			INTERNET:					"อินเทอร์เน็ต",
			WIRELESS:					"ไวเลส",
			LAN:						"LAN",
			USB_TITLE:					"อุปกรณ์ USB",
			PERFORMANCE: 				"ประสิทธิภาพ",
			GUEST_NETWORK: 				"เครือข่ายสำหรับบุคคลคนภายนอก",
			ACCESS_DEVICES: 			"การเข้าสู่อุปกรณ์",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"รูปแบบการเชื่อมต่ออินเทอร์เน็ต",

			MAC_ADDRESS: 				"MAC Address",
			IP_ADDRESS: 				"IP Address",
			RELEASE: 					"ปล่อย",
			RENEW: 						"ขอใหม่",
			
			DYNAMIC_IP: 				"Dynamic IP",
			STATIC_IP: 					"Static IP",
			SUBNET_MASK: 				"Subnet Mask",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Cable",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 ทันเนลลิ่ง",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass-Through (Bridge)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"None",
			
			DEFAULT_GATEWAY: 			"Default Gateway",
			DNS: 						"DNS Server",
			MAC: 						"MAC Address",
			WDS_STATUS: 				"สถานะ WDS",
			
			IPV6_ADDRESS: 				"IP Address",
			PRIMARY_DNS: 				"DNS หลัก",
			SECOND_DNS: 				"DNS รอง",

			RADIO: 						"สัญญาณไร้สาย",

			NAME_SSID: 					"ชื่อเครือข่าย(SSID)",
			NETWORK_NAME_SSID:			"ชื่อเครือข่ายไวเลส (SSID)",
			HIDE_SSID: 					"ซ่อน SSID",
			MODE: 						"โหมด",
			CHANNEL: 					"ช่องสัญญาณ",
			CHANNEL_WIDTH: 				"การเข้าสู่อุปกรณ์",
			AUTO: 						"อัตโนมัต",
			CURRENT_CHANNEL: 			"ช่องปัจจุบัน",

			WDS: 						"สถานะ WDS",
			WIRED_CLIENTS: 				"ผู้ใช้ผ่านสาย",
			WIRELESS_CLIENTS: 			"ผู้ใช้ไวเลส",

			ENABLE_DHCP: 				"Dhcp",
			LINKADDR:					"Link-local Address",
			ASSIGN_TYPE: 				"รูปแบบการกำหนด",

			ALLOW_TO_SEE_EACH: 			"อนุญาตให้อุปกรณ์เครือข่ายไวเลสมองเห็น",

			TOTAL: 						"Total:",
			AVAILABLE: 					"Available:",

			USB: 						"USB Disk",
			PRINTER: 					"ปรินเตอร์",

			CPU_LOAD: 					"รายงานการทำงาน CPU",
			MEMORY_USAGE: 				"รายงานการใช้งาน Memory",

			IP_ADDR_P: 					"IP Address",
			MAC_ADDR_P: 				"MAC Address",
			CONN_TYPE_P: 				"รูปแบบการเชื่อมต่อ",

			DISABLED: 					"ถูกปิดการทำงาน",
			INIT: 						"Init",
			SCAN: 						"ค้นหา",
			AUTH: 						"Auth",
			ASSOC: 						"Assoc",
			RUN: 						"Run",
			HOST: 						"Host",
			GUEST: 						"Guest",

			ON: 						"เปิด",
			OFF: 						"ปิด"
		},

		INTERNET: {
			TITLE: 						"อินเทอร์เน็ต",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
			INTERNET_MAC_ADDRESS: 		"MAC Address",
			
			CONNECT: 					"เชื่อมต่อ",
			DISCONNECT: 				"ไม่เชื่อมต่อ",
			
			IP_ADDR: 					"IP Address",
			
			USE_DEFAULT_MAC: 			"ใช้ MAC Address พื้นฐาน",
			USE_COMPUTER_MAC: 			"ใช้ MAC Address คอมพิวเตอร์ปัจจุบัน",
			USE_CUSTOM_MAC: 			"ใช้ MAC Address แบบกำหนดเอง",
			MAC_CLONE: 					"Mac Clone",
			
			CONFIG: 					"ตั้งค่า",
			
			IP_ADDRESS: 				"IP Address",
			SUBNET_MASK: 				"Subnet Mask",
			DEFAULT_GATEWAY: 			"Default Gateway",
			
			MANUAL_DNS: 				"Manual DNS",
			PRIMARY_DNS: 				"DNS หลัก",
			SECOND_DNS: 				"DNS รอง",
			
			RENEW: 						"ขอใหม่",
			RELEASE: 					"ปล่อย",
			VIEW_MODE: 					"View Mode",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Get dynamically from ISP",
			USE_FOLLOW_IP_ADDR: 		"Use the following IP Address",
			USE_FOLLOW_DNS_ADDR: 		"Use the Following DNS Addresses",
			USE_FOLLOW_DNS_SERVER: 		"ใช้เซิร์ฟเวอร์ DNS ต่อไปนี้",
			
			BASIC: 						"พื้นฐาน",
			ADVANCED: 					"ขั้นสูง",
			
			DNS_ADDR_MODE: 				"ที่อยู่ DNS",
			MTU_SIZE: 					"ขนาด MTU ",
			MTU_1500: 					"bytes. (ค่าพื้นฐานคือ 1500, ห้ามเปลี่ยนถ้าไม่จำเป็น.)",
			MTU_1480: 					"bytes. (ค่าพื้นฐานคือ 1480, ห้ามเปลี่ยนถ้าไม่จำเป็น.)",
			MTU_1460: 					"bytes. (ค่าพื้นฐานคือ 1460, ห้ามเปลี่ยนถ้าไม่จำเป็น.)",
			MTU_1420: 					"bytes. (ค่าพื้นฐานคือ 1420, ห้ามเปลี่ยนถ้าไม่จำเป็น.)",
			
			HOST_NAME: 					"ชื่อเราท์เตอร์",

			HOST_NAME_CONFIRM: 			"The host name contains illegal characters that may cause unexpected system behaviour. Are you sure you want to continue?",

			GET_IP_WITH_UNICAST_DHCP: 	"Get IP using Unicast DHCP (It is usually not required.)",
			OPTIONAL: 					"(ถ้ามี)",
			
			STATIC_IP: 					"Static IP",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			
			INTERNET_IP_ADDR: 			"IP Address",
			INTERNET_DNS: 				"Internet DNS",
			SECONDARY_CONN: 			"การเชื่อมต่อสำรอง",
			NONE: 						"None",
			INTERNET_PRIMARY_DNS:		"DNS หลัก",
			INTERNET_SECONDARY_DNS: 	"DNS รอง",
			
			DYNAMIC_IP: 				"Dynamic IP",
			DYNAMIC_IP_v6: 				"IP แบบไดนามิก (SLAAC / DHCPv6)",
			STATIC_IP: 					"Static IP",
			SERVICE_NAME: 				"ชื่อผู้ให้บริการ",
			ACCESS_CONCENTRATOR_NAME:  	"เข้าถึงชื่อที่ตั้งเอาไว้",
			DETECT_ONLINE_INTERVAL: 	"ค้นหาช่วงเวลาออนไลน์",
			INTERVAL_TIPS: 				"วินาที. (0-120. ค่าพื้นฐานคือ 10.)",
			IP_ADDR_MODE:  				"IP Address",
			CONN_MODE: 					"โหมดการเชื่อมต่อ",
			DHCP_LINK_UNPLUGGED: 		"พอร์ต WAN ยังไม่ถูกเชื่อมต่อ",
			
			AUTO: 						"อัตโนมัต",
			ON_DEMAND: 					"ความต้องการ",
			TIME_BASED: 				"เวลาพื้นฐาน",
			MANUALLY: 					"ด้วยตัวเอง",
			MAX_IDLE_TIME: 				"เวลาที่ได้ใช้งานสูงสุด",
			MAX_IDLE_TIME_TIPS: 		"นาที. (0 หมายความว่าทำงานตลอด)",
			PERIOD_OF_TIME: 			"ช่วงเวลา",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"BigPond Cable",
			AUTH_SERVER: 				"Auth. Server",
			AUTH_DOMAIN: 				"Auth. Domain",
			L2TP: 						"L2TP",
			GATEWAY: 					"Gateway",
			SERVER_IP_ADDR_NAME: 		"IP เซิร์ฟเวอร์ VPN /ชื่อโดเมน",
			PPTP: 						"PPTP",
			TO: 						"ถึง",
			
			TUNNEL_6TO4: 				"6to4 ทันเนลลิ่ง",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Get non-temporary IPv6 Address",
			GET_PREFIX_DELEGATION: 		"Get IPv6 prefix delegation",
			IPV6_ADDR: 					"IPv6 Address",

			GET_IPV6_WAY: 				"การรับที่อยู่ IPv6",
			AUTOMATICALLY: 				"รับแบบอัตโนมัติ",
			SPECIFIED_BY_ISP: 			"Specified by ISP",

			IPV6_ADDR_PREFIX: 			"IPv6 Address Prefix",
			NONE_TEMPORARY: 			"Non-temporary",

			PREFIX_DELEGATION: 			"Prefix delegation",
			ENABLE: 					"เปิดใช้งาน",
			DISABLE: 					"ปิดการใช้งาน",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"IPv4 Mask Length",
			CONFIG_TYPE: 				"รูปแบบการตั้งค่า",
			RD6_PREFIX: 				"6RD Prefix",
			RD6_PREFIX_LENGTH: 			"6RD Prefix Length",
			REPLY_IPV4_ADDR: 			"Border Reply IPv4 Address",
			MANUAL: 					"ตั้งค่าด้วยตัวเอง",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass-Through (Bridge)",
			LOCAL_IPV6: 				"Local IpV6 Address",
			PEER_IPV6: 					"Peer IpV6 Address",
			TUNNEL_ADDR: 				"Tunnel Address",
			IPV4_NETMASK: 				"IPv4 Netmask",
			CUSTOM: 					"ตัวเลือก",
		    AFTR_NAME: 					"AFTR Name",
			PPP_SHARE_V6:				"PPPoE เซสชั่นเดียวกันกับการเชื่อมต่อ IPv4",
			PPP_SHARE_V4:				"PPPoE เซสชั่นเดียวกันกับการเชื่อมต่อ IPv6",

			
			
			IPV4_ADDR: 					"IPv4 Address",
			IPV4_MASK: 					"IPv4 Subnet Mask",
			IPV4_GATEWAY: 				"IPv4 Default Gateway",
			TUNNEL_ADDR: 				"Tunnel Address",

			DUPLEX: 					"Duplex",
			AUTO_NEGOTIATION: 			"Auto Negotiation",
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

			MAC_ADDRESS: 				"MAC Address",
			IP_ADDRESS: 				"IP Address",
			SUBNET_MASK: 				"Subnet Mask",
			CUSTOM: 					"ตัวเลือก",

			IGMP: 						"Enable IGMP Proxy",
			

			ASSIGNED_TYPE: 				"รูปแบบการกำหนด",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Stateless DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Address Prefix",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Address",
			DELEFATED: 					"Delegated",
			STATIC: 					"Static",
			SITE_PREFIX: 				"Site Prefix",
			SITE_PREFIX_LEN: 			"Site Prefix Length",

			PREFIX_TYPE:  				"Site Prefix configuration Type",
			LAN_IPV6_ADDR:  			"LAN IPV6 Address",

			RELEASE_TIME: 				"เวลาที่ใช้ในการปล่อย",
			RELEASE_TIME_TIP: 			"วินาที. (ค่าพื้นฐานคือ 86400 ห้ามเปลี่ยนถ้าไม่จำเป็น)",
			ADDRESS:					"Address",
			SAVE: 						"บันทึก",

			REBOOT_TIP: 				"เราเตอร์กำลังข้ามไปที่หน้าล็อกอินใหม่ <br/> กรุณารอสักครู่…"

		},

		IPTV:{
			TITLE: 						"การตั้งค่า",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "เปิด IPTV", 
			MODE:  						"โหมด",
			IGMP_PROXY: 				"IGMP Proxy",
			IGMP_VERSION: 				"รุ่น IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"ถ้าผู้ให้บริการอินเทอร์เน็ตไม่มีในรายชื่อและไม่มีค่าที่ต้องการ คุณสามารถเลือกโหมดนี้เพื่อตั้งค่าแลนพอร์ตบนเราท์เตอร์ได้.",
			BASIC: 						"ตัวเลือก",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Singapore-ExStream",
			UNIFY:  					"Malaysia-Unifi",
			MAXIS:  					"Malaysia-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"อินเทอร์เน็ต",
			IP_PHONE: 					"IP-Phone", 

			Q_TAG: 						"802.1Q Tag",
			ENABLE: 					"เปิดใช้งาน",
			
			INTERNET_VLAN_ID: 			"Internet VLAN ID",
			INTERNET_VLAN_PRIORITY: 	"Internet VLAN Priority",
			IP_PHONE_VLAN_ID: 			"IP-Phone VLAN ID",
			IP_PHONE_VLAN_PRIORITY: 	"IP-Phone VLAN Priority",
			IPTV_VLAN_ID: 				"IPTV VLAN ID",
			IPTV_VLAN_PRIORITY: 		"IPTV VLAN Priority",
			IPTV_MULTI_VLAN_ID: 		"IPTV Multicast VLAN ID",
			IPTV_MULTI_VLAN_PRIORITY: 	"IPTV Multicast VLAN Priority"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP Server",
			
			SETTINGS: 					"การตั้งค่า",

			DHCP_SERVER: 				"DHCP Server",
			ENABLE_DHCP_SERVER: 		"เปิด DHCP Server",

			IP_ADDR_POOL: 				"เปิด Address Pool",
			LEASETIME: 					"เปิด Lease Time",
			LEASENOTE: 					"นาที. (1-2880 ค่าพื้นฐานคือ 120)",
			
			GATEWAY: 					"Default Gateway",
			DOMAIN: 					"Default Domain",
			PRIMARYDNS: 				"DNS หลัก",
			SECONDARYDNS: 				"DNS รอง",

			OPTIONAL: 					"(ถ้ามี)",

			CLIENTSLIST: 				"รายชื่อผู้ใช้ DHCP",
			CLIENT_NUMBER: 				"จำนวนผู้ใช้",
			CLIENT_NAME: 				"ชื่อผู้ใช้งาน",
			MAC_ADDR: 					"MAC Address",
			ASSIGNED_IP: 				"IP Address",
			LEASE_TIME: 				"Lease Time",

			RESERVATION: 				"การจอง IP Address",

			RESERVED_IP: 				"IP Address",
			IP_ADDRESS: 				"IP Address",
			DESCRIPTION: 				"บรรยาย",

			CLIENTSLIST: 				"รายชื่อผู้ใช้ DHCP",
			CLIENT_NUMBER: 				"จำนวนผู้ใช้",

			ENABLE: 					"เปิด",
			ENABLE_THIS_ENTRY: 			"เปิด"
			
		},

		DDNS: {
			DDNS: 						"Dynamic DNS",
			SERVICEPROVIDER: 			"ผู้ให้บริการ",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"สมัคร…",
			USERNAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			DOMAIN_NAME_LIST: 			"รายชื่อ Domain Name",
			DOMAIN_NAME: 				"Domain Name",
			LOGIN: 						"เข้าสู่ระบบ",
			LOGIN_SAVE: 				"ล็อกอินและบันทึก", 
			LOGOUT: 					"ล็อกเอาท์",
			STATU_SUCCESS:				"สำเร็จ!",
			UPDATE_INTERVAL:			"ช่วงเวลาอัพเดท",
			ONE_HOUR:					"1 ชั่วโมง",
			SIX_HOUR:					"6 ชั่วโมง",
			TWETEEN_HOUR:				"12 ชั่วโมง",
			ONE_DAY:					"1 วัน",
			TWO_DAY:					"2 วัน",
			THREE_DAY:					"3 วัน",
			NEVER:						"ไม่",
			UPDATE:						"อัพเดท",
			STATU_INCORRENT:			"ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
			STATU_ERR_DOMAIN:			"Domain Name เกิดข้อผิดพลาด",
			WAN_IP_BIND: 				"WAN IP binding",
			CURRENT_DOMAIN: 			"ชื่อโดเมนปัจจุบัน",
			REGISTER: 					"ลงทะเบียน",
			BIND: 						"ผูก",
			UNBIND: 					"ยกเลิกการผูก",
			TITLE: 						"DDNS ไม่พร้อมใช้งาน",
			CONTENT: 					"เพื่อการใช้บริการ TP-Link DDNS ของเรา โปรดระบุ TP-Link ID หรือเลือกผู้ให้บริการอื่นๆ",
			STATU_NO_LAUNCH:			"ไม่สามารถรันได้",
			STATU_FAIL_DDNS: 			"การอัพเดต DDNS ล้มเหลว",
			STATU_FAIL_NOIP: 			"การอัพเดต No-IP ล้มเหลว",
			DISABLE: 					"ปิดการใช้งาน",
			ENABLE: 					"เปิดใช้งาน",	
			STATU_NO_LAUNCH:			"การอัพเดต DDNS ล้มเหลว",
			STATU_CONN:					"กำลังเชื่อมต่อ",
			WAN_IP_BIND: 				"WAN IP binding",
			TIME: 						"วันที่ลงทะเบียน",
			BOUND: 						"ขอบเขต",
			FREE: 						"ฟรี",
			SORRY: 						"ล้มเหลว",
			UNBIND_NOTE:          		"หากคุณต้องการที่จะผูก %domain% ไปยังอุปกรณ์ของคุณโปรดแยกชื่อโดเมนออกจากโดเมนปัจจุบัน"
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Advanced Routing",
			STATIC_ROUTING: 			"การกำหนดเส้นทางด้วยตัวเอง",

			DESTINATION_NETWORK:		"เครือข่ายปลายทาง",
			SUBNET_MASK: 				"Subnet Mask",
			DEFAULT_GATEWAY: 			"Default Gateway",
			DESCRIPTION: 				"บรรยาย",
			
			SYSTEM_ROUTING_TABLE: 		"ตาราง Routing",
			CLIENT_NUMBER: 				"จำนวนการทำงานของ Route",

			GATEWAY: 					"Gateway",
			INTERFACE: 					"Interface",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"เปิด",
			ENABLE_THIS_ENTRY: 			"เปิด"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"การตั้งค่า",
			NOT_SUPPORT_5G: 			"ภูมิภาคที่รองรับ 2.4GHz เท่านั้น กรุณาทำให้แน่ว่าภูมิภาคถูกต้อง",

			REGION: 					"ภูมิภาค",
			NOTICE:  					"ภูมิภาคที่รองรับ 5GHz เท่านั้น กรุณาทำให้แน่ว่าภูมิภาคถูกต้อง",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"การตั้งค่าเครือข่ายไวเลส",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"เปิดใช้งานสัญญาณไวเลส",

			WIRELESS_NETWORK_NAME: 		"ชื่อเครือข่ายไวเลส (SSID)",
			WIRELESS_PASSWORD: 			"รหัสผ่าน",
			HIDE_SSID: 					"ซ่อน SSID",

			SECURITY: 					"การรักษาความปลอดภัย",
			NO_SECURITY: 				"ไม่มีความปลอดภัย",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal (แนะนำ)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2-Enterprise",
			WEP: 						"WEP",

			VERSION: 					"เวอร์ชั่น",

			AUTO: 						"อัตโนมัต",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"b. การเข้ารหัส",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"โหมด",
			MODE_B:  					"802.11b only",
			MODE_G:  					"802.11g only",
			MODE_N:  					"802.11n only",
			MODE_BG:  					"802.11b/g mixed",
			MODE_GN: 					"802.11g/n mixed",
			MODE_BGN:  					"802.11b/g/n mixed",

			MODE_A_5: 					"802.11a only",
			MODE_AN_5: 					"802.11a/n mixed",
			MODE_N_5: 					"802.11n only",
			MODE_AC_5:					"802.11ac only",
			MODE_NAC_5:					"802.11n/ac mixed",
			MODE_ANAC_5:				"802.11a/n/ac mixed",


			CHANNEL_WIDTH: 				"การเข้าสู่อุปกรณ์",
			CHANNEL: 					"ช่องสัญญาณ",

			TRANSMIT_POWER: 			"กำลังส่งสัญญาณ",

			RADIUS_SERVER_IP: 			"c. RADIUS Server IP",
			RADIUS_PORT: 				"d. RADIUS Port",
			RADIUS_PASSWORD: 			"e. RADIUS Password",

			TYPE: 						"รูปแบบ",
			OPEN_SYSTEM: 				"Open System",
			SHARED_KEY: 				"Shared Key",

			KEY_SELECTED: 				"Key Selected",
			KEY1: 						"Key1",
			KEY2: 						"Key2",
			KEY3: 						"Key3",
			KEY4: 						"Key4",

			WEP_KEY_FORMAT: 			"b. WEP Key Format",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"เลขฐานสิบหก",

			KEY_TYPE: 					"c. Key Type -เลือกความยาวของรหัส WEP.",
			BIT64: 						"64 Bit",
			BIT128: 					"128 Bit",
			BIT152: 					"152 Bit",

			KEY_VALUE: 					"d. Key Value",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"ต่ำ",
			MIDDLE: 					"กลาง",
			HIGH: 						"สูง"
		},

		WPS: {

			TITLE2: 					"Router's PIN",
			ROUTERS_PIN_INFO: 			"อุปกรณ์อื่นสามารถเชื่อมไปยังเราเตอร์โดย WPS กับ PIN ของ เราเตอร์",
			ENABLE_ROUTE_PIN: 			"Router's PIN",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"สร้าง",
			DFT: 						"ค่าพื้นฐาน",

			TITLE: 						"WPS Wizard",
			SELECT_SETUP: 				"เลือกวิธีติดตั้ง",
			PUSH_BTN: 					"กดปุ่ม (แนะนำ)",
			PUSH_DES: 					"กดปุ่มบนเราเตอร์หรือคลิกซอฟต์แวร์เชื่อมต่อบนหน้านี้",
			CONNECT: 					"เชื่อมต่อ",
			CANCEL: 					"ยกเลิก",

			RESULT_HEAD: 				"ผู้ใช้ไวเลส",
			RESULT_END: 				"เพิ่มไปยังเครือข่ายสำเร็จ",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"ไม่พบ",
			ENTER_CLIENT_PIN: 			"ใส่ PIN ของผู้ใช้",
			SWITCH_NOTE:				"เพื่อใช้ WPS, คุณควรเปิดฟังก์ชั่นก่อน",
			SWITCH_NOTE2:				"เพื่อใช้ WPS Wizard คุณควรตั้งค่าไวเลสให้ถูกต้องก่อน",
			STATUS_PIN_ERROR: 			"WPS PIN ผิด ? กรุณาเช็คและทำให้ถูกต้อง",
			STATUS_ERROR: 				"เกิดข้อผิดพลาด",
			STATUS_CONN_ERROR: 			"การเชื่อมต่อล้มเหลว",
			STATUS_CONNING: 			"กำลังเชื่อมต่อ…",
			STATUS_CANCEL: 				"การเชื่อมต่อถูกยกเลิก",
			
			NOTE: 						"หมายเหตุ:",
			
			STATUS_CONN_OVERLAP: 		"การเชื่อมต่อถูกยกเลิก(OVERLAP).",
			STATUS_CONN_TIMEOUT: 		"การเชื่อมต่อถูกยกเลิก(TIMEOUT).",
			STATUS_CONN_INACT: 			"การเชื่อมต่อไม่ทำงาน"

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"สถานีไวเลสออนไลน์",
			CLIENT_NUMBER: 				"จำนวนผู้ใช้",
			MAC_ADDRESS: 				"MAC Address",
			CONN_TYPE: 					"รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
			SECURITY: 					"การรักษาความปลอดภัย",
			RECEIVED_PACKETS: 			"รับ Packets",
			SEND_PACKETS: 				"ส่ง Packets"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"การตั้งค่า",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"อนุญาตให้อุปกรณ์เครือข่ายไวเลสมองเห็น",
			
			ALLOW_LOCAL: 				"อนุญาตให้ Guest Network เข้าถึงเครือข่ายภายใน",
			
			WIRELESS: 					"ไวเลส",
			WIRELESS_24G_RADIO: 		"ไวเลส 2.4GHz",
			WIRELESS_5G_RADIO: 			"ไวเลส 5GHz",
			ENABLE_GUEST: 				"เปิด Guest Network",

			NAME_SSID: 					"ชื่อเครือข่ายไวเลส (SSID)",
			HIDE_SSID: 					"ซ่อน SSID",

			SECURITY: 					"การรักษาความปลอดภัย",
			NO_SECURITY: 				"ไม่มีความปลอดภัย",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal",

			VERSION: 					"เวอร์ชั่น",
			AUTO: 						"อัตโนมัต",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"b. การเข้ารหัส",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"รหัสผ่าน"
		},

		NAT:{
			SETTINGS: 					"Hardware NAT",
			STATUS: 					"Hardware NAT",
			
			ALG_TITLE: 					"Application Layer Gateway(ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP Passthrough",
			L2TP_ALG: 					"L2TP Passthrough",
			IPSEC_ALG: 					"IPSec Passthrough",

			ENABLE_FTP_ALG: 			"Enable FTP ALG",
			ENABLE_TFTP_ALG: 			"Enable TFTP ALG",
			ENABLE_H323_ALG: 			"Enable H323 ALG",
			ENABLE_RTSP_ALG: 			"Enable RTSP ALG",
			ENABLE_PPTP_ALG: 			"Enable PPTP Passthrough",
			ENABLE_L2TP_ALG: 			"Enable L2TP Passthrough",
			ENABLE_IPSEC_ALG: 			"Enable IPSec Passthrough",
			NAT_ENABLE_NOTICE: 			"Note: การตั้งค่าของคุณจะไม่เกิดผลจนกระทั่ง NAT function ถูกเปิด"
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Virtual Servers",

			SERVICE_NAME: 				"รายการบริการ",
			EXTERNAL_PORT: 				"External Port",
			INTERNAL_IP: 				"Internal IP",
			INTERNAL_PORT: 				"Internal Port",
			PROTOCAL: 					"Protocol",

			BTN_VIEW: 					"ดูรายการที่มีอยู่แล้ว",

			EXSITTING_SERVICE: 			"รายการที่มีอยู่แล้ว",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX or XX)",
			EXT_PORT_TIPS: 				"(XX or XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX or Blank ,1-65535)",

			NOTICE:						"ขัดแย้งกับ remote management port. คุณแน่ใจหรือไม่ว่าต้องการทำต่อไป ?",

			ENABLE_THIS_ENTRY: 			"เปิด",
			OPERATION: 					"ระบบปฏิบัติการ",
			CHOOSE: 					"เลือก",
			NAT_ENABLE_NOTICE: 			"Note: การตั้งค่าของคุณจะไม่เกิดผลจนกระทั่ง NAT function ถูกเปิด"
		},

		PORT_TRIGGERING:{
			TITLE: 						"Port Triggering",
			APPLICATION: 				"แอพพลิเคชั่น",
			TRIGGER_PORT: 				"Triggering Port",
			TRIGGER_PROTOCOL: 			"Triggering Protocol",

			EXTERNAL_PORTS: 			"External Port",
			EXTERNAL_PROTOCOL: 			"External Protocol",

			BTN_VIEW: 					"ดู Application ที่มีอยู่แล้ว",

			EXSITTING_APPLICATION: 		"Application ที่มีอยู่แล้ว",
			APPLICATION_NAME: 			"ชื่อ Application",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX or XX-XX,1-65535,at most 5 pairs)",
			
			ENABLE_THIS_ENTRY: 			"เปิด",
			OPERATION: 					"ระบบปฏิบัติการ",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Note: การตั้งค่าของคุณจะไม่เกิดผลจนกระทั่ง NAT function ถูกเปิด"
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"เปิด DMZ",
			HARDWARESTATUS: 			"DMZ Host IP Address",
			NAT_ENABLE_NOTICE: 			"Note: การตั้งค่าของคุณจะไม่เกิดผลจนกระทั่ง NAT function ถูกเปิด"
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"รายการ UPnP",
			CLIENT_NUMBER: 				"จำนวนผู้ใช้",
			SERVICE: 					"อธิบาย",
			EXTERNAL_PORT: 				"External Port",
			PROTOCAL: 					"Protocol",
			IP_ADDR: 					"Internal IP Address -แสดง IP Address ของโฮสทั่วไป.",
			INTERNAL_PORT: 				"Internal Port",
			NAT_ENABLE_NOTICE: 			"Note: การตั้งค่าของคุณจะไม่เกิดผลจนกระทั่ง NAT function ถูกเปิด"
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"โมเด็ม 3G/4G USB",
			LOCATION: 					"ภูมิภาค",
			MOBILE_ISP: 				"Mobile ISP",

			USA: 						"USA",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"โหมดการเชื่อมต่อ",
			CONNECT_ON_DEMAND: 			"เชื่อมต่อตามความต้องการ",
			CONNECT_AUTOMATICALLY: 		"เชื่อมต่ออัตโนมัติ",
			CONNECT_MANUALLY: 			"เชื่อมต่อด้วยตัวเอง",
			MAX_IDLE_TIME: 				"เวลาที่ได้ใช้งานสูงสุด",
			CONNECTION_TIP: 			"The current Internet Access is WAN Preferred.",
			IDLE_TIME_TIP: 				"Connection Mode and Max Idle Time ไม่สามารถตั้งค่าด้วยตัวเองได้.",
			MINUTES: 					"นาที (0 หมายถึงเปิดการเชื่อมต่อเสมอ)",

			AUTHENTICATION_TYPE: 		"รูปแบบการเข้ารหัส",
			AUTO: 						"อัตโนมัต",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"ค่าเดิมคือ Auto ถ้าไม่จำเป็นอย่าเปลี่ยน",

			CONNECT: 					"เชื่อมต่อ",
			DISCONNECT: 				"ไม่เชื่อมต่อ",

			SET_TIP: 					"ตั้งค่า Dial Number, APN, Username และ Password ด้วยตัวเอง",
			DIAL_NUMBER: 				"Dial Number",
			APN: 						"APN",
			USERNAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			OPTIONAL: 					"(ถ้ามี)",
			MTU_SIZE: 					"MTU Size(in bytes)",
			MTU_SIZE_TIP: 				"ค่าเริ่มต้นคือ 1480, ไม่ต้องทำการเปลี่ยนถ้าไม่จำเป็น",

			USE_FOLLOW_DNS_SERVER: 		"ใช้ค่าตามเซิร์ฟเวอร์ DNS",
			PRIMARY_DNS: 				"DNS หลัก",
			SECOND_DNS: 				"DNS รอง",

			UNPLUGGED: 					"ไ่ม่ได้เชื่อมต่อโมเด็ม USB",
			IDENTIFYING: 				"กำลังระบุตัวตน…",
			IDENTIFY_SUCCESS: 			"ระบุได้สำเร็จแล้ว"
		},

		DISK_SETTING: {
			DISK_SET: 					"ตั้งค่าอุปกรณ์",
			SCAN: 						"ค้นหา",
			SELFLY_REMOVE: 				"ถอดด้วยความปลอดภัย",
			SCAN_RESULT: 				"ค้นพบ %n disk",
			NOT_FOUND: 					"ไม่พบ",
			SELFLY_REMOVE: 				"ถอดด้วยความปลอดภัย",
			
			VOLUMN: 					"ปริมาณ",
			CAPACITY: 					"ความจุ",
			FREESPACE: 					"พื้นที่ว่าง",
			USBSPACE: 					"พื้นที่ถูกใช้",
			
			STATUS: 					"สถานะ",
			INACT: 						"ไม่ได้ใช้งาน",
			ACTIVE: 					"ทำงาน",
			
			USAGE: 						"การใช้งาน",
			CAPACITY: 					"ความจุ",
			OPERATION: 					"ระบบปฏิบัติการ",	
			
			ACC: 						"บัญชีการจัดการ", 	 	
			USERNAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			USE_LOGIN: 					"ผู้ใช้เข้าสู่ระบบ",
			SCAN: 						"ค้นหา",
			ENJECT_ALL: 				"ถอดออกทั้งหมด",
			ENJECT: 					"ถอด",
			ADD_USER: 					"เพิ่มผู้ใช้",
			AUTH: 						"สิทธิ์"
		},

		FOLDER: {
			TITLE: 						"ตั้งค่าการแชร์",
			ACCOUNT_TITLE: 				"บัญชีที่ใช้ในการแชร์",
			ACCOUNT:					"บัญชี",
			AC_NOTE: 					"เตรียมบัญชีสำหรับแชร์เนื้อหา. คุณสามารถใช้บัญชีล็อกอินหรือสร้างใหม่ได้",
			
			AC_LOGIN: 					"ใช้บัญชีเดิม",
			AC_FOLLOW: 					"ใช้บัญชีใหม่",

			USERNAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",
			CONFIRM: 					"ยืนยันรหัสผ่าน",

			SHARING_SETTING: 			"ตั้งค่าการแชร์",
			SERVER_NAME: 				"ชื่อเครือข่าย/Media Server",

			METHOD: 					"วิธีเข้าถึง",
			LINK: 						"ลิงค์",
			PORT: 						"พอร์ต",

			NETWORK_NEIGHBORHOOD: 		"เครือข่ายที่อยู่ใกล้เคียง",
			FTP: 						"FTP",
			FTPEX: 						"FTP (ผ่านอินเตอร์เน็ต)",

			SHARE_FOLDER: 				"การแชร์โฟลเดอร์",
			SHAREING_ALL: 				"แชร์ทั้งหมด",
			NOTE:  						"Toggle On เพื่อแชร์ไฟล์ทั้งหมดหรือปิดมันเพื่อแชร์เฉพาะไฟล์ที่ต้องการ", 
			ENABLE_AUTHENTICATION: 		"เปิดการแสดงตัวตน",
			SHAREING_FOLDER: 			"แชร์โฟลเดอร์",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"ที่อยู่ของโฟลเดอร์",
			VOLUMN_NAME: 				"ชื่อ",

			SHARE_NAME: 				"ชื่อโฟลเดอร์",
			FOLDER_PATH: 				"ที่อยู่ของโฟลเดอร์",
			MEDIA_SHARING: 				"แบ่งปันสื่อ",
			STATUS: 					"สถานะ",

			GUEST_ACCESS: 				"อนุญาตให้ Guest Network เข้าถึง",
			ENABLE_AUTHENTICATION: 		"เปิดการแสดงตัวตน",
			ENABLE_WRITE_ACCESS: 		"เปิด Write Access",
			ENABLE_MEDIA_SHARE: 		"เปิด Media Sharing",
			
			BROWSE: 					"เลือก",
			BROWSE_TITLE: 				"เลือกโฟลเดอร์",

			NO_VOLUMN:					"ไม่มีปริมาณ",
			
			NOTICE: 					"คุณต้องการที่จะออกจากหน้าของ Dynamic DNS หรือไม่  กดบันทึกเพื่อทำการบันทึกและออก กดออกเพื่อทำการออกโดยไม่ทำการบันทึกค่าใดๆ กดปุ่ยกเลิกเพื่อยังอยู่ที่หน้าเดิม.",
			NO_CHANGE_NOTICE: 			"คุณต้องการที่จะออกจากหน้าของ Dynamic DNS หรือไม่?",

			SAVE_FAILED_NOTICE: 		"บันทึกล้มเหลว",
			CONTINUE: 					"ออก",
			CONTINUE_SAVE: 				"บันทึก",
			CANCLE: 					"ยกเลิก",

			ENABLE: 					"เปิดใช้งาน"

		},

		PRINT:{
			TITLE: 						"ปรินเตอร์เซิร์ฟเวอร์",
			NAME: 						"ชื่อปรินเตอร์",
			ENABLE_PRINT_SERVER: 		"ปรินเตอร์เซิร์ฟเวอร์",
			NONE: 						"None",
			
			NOTE_TITLE: 				"หมายเหตุ:",
			STEP1: 						"ขั้นตอนที่ 1 :",
			STEP2: 						"ขั้นตอนที่ 2 :",
			STEP3: 						"ขั้นตอนที่ 3 :",

			NOTE1: 						"เชื่อมต่อเครื่องพิมพ์โดยใช้พอร์ต USB โดยเสียบเข้ากับพอร์ต USB บนเราเตอร์.",
			NOTE2: 						"ติดตั้งปรินเตอร์ไดรเวอร์บนเครื่องคอมพิวเตอร์ของคุณ. โดยดูจากคู่มือช่วยเหลือ.",
			NOTE3: 						"ติดตั้ง TP-Link USB Printer Controller Utility จาก Resource CD(สำหรับ Windows เท่านั้น) หรือดาวน์โหลด(ทั้ง Windows และ Mac  OS X )ได้จาก <a class=\"link\" href=\"%SUPPORT%\" target=\"_blank\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Parental Control",
			STATUS: 					"สถานะ",
			UNKNOWN: 					"ไม่รู้จัก",

			DEVICE_CTR: 				"อุปกรณ์ที่อยู่ภายใต้การควบคุมโดยผู้ปกครอง",
			DEVICE: 					"ชื่ออุปกรณ์",
			MAC_ADDRESS: 				"MAC Address",
			TIME: 						"เวลาการเข้าสู่อินเตอร์เน็ต",
			DESCRIPTION: 				"บรรยาย",
			
			ENABLE_THIS_ENTRY: 			"เปิด",
			OPTIONAL: 					"(ถ้ามี)",
			BTN_VIEW: 					"ดูอุปกรณ์ที่มีอยู่แล้ว",
			
			DEVICE_LIST: 				"รายชื่ออุปกรณ์",
			SYSTEM_TIME: 				"เวลาของระบบ",
			
			RESTR: 						"ข้อจำกัดเนื้อหา",
			MODE: 						"ข้อจำกัด",
			BLACKMODE: 					"Blacklist",
			WHITEMODE: 					"Whitelist",
			ACCESS_DEVICES_LIST: 		"รายชื่ออุปกรณ์ที่ใช้อยู่",
			
			CHOOSE: 					"เลือก",
			ADD_A_NEW_KEYWORD: 			"ใส่คำใหม่",
			ADD_A_NEW_DOMAIN_NAME: 		"ใส่ Domain Name ใหม่"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"อินเทอร์เน็ต",
			ROUTER: 					"เราเตอร์",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"อื่นๆ",

			DEVICE: 					"อุปกรณ์",
			RATE: 						"อัตรา",
			APPLICATION: 				"แอพพลิเคชั่น",

			NAME: 						"ชื่อ",
			MAC_ADDRESS: 				"MAC Address",
			IP_ADDRESS: 				"IP Address",


			DEVICES: 					"อุปกรณ์"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"แบนด์วิธ",
			TEST_BANDWIDTH: 			">ทดสอบแบนด์วิธ",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"เปิด streamboost",
			UP_LIMITATION: 				"Up Limitation(Mbps)",
			DOWN_LIMITATION: 			"Down Limitation(Mbps)",
			RUN_BANDWIDTH_TEST: 		"รันทดสอบ Bandwidth",
			TESTING: 					"กำลังทดสอบ",
			TEST_FAILED: 				"ทดสอบล้มเหลว",
			TEST_SUCCEED: 				"ทดสอบสำเร็จ",
			ENABLE_AUTOMATIC_TEST: 		"เปิดทดสอบอัตโนมัติ",
			KEEP_UP_TO_DATE: 			"Keep StreamBoost up to date",
			ENABLE_AUTOMATIC_UPDATE: 	"เปิดอัพเดทอัตโนมัติ"

		},

		PRIORITY:{
			PRIORITY: 					"ลำดับความสำคัญ",
			PRIORITY_TIPS: 				"ลำดับความสำคัญช่วยให้คุณสามารถเปลี่ยนความสำคัญอุปกรณ์หนึ่งไปยังอุปกรณ์หนึ่งได้ นี้จะเป็นประโยชน์ก็ต่อเมื่อมีการใช้แบนด์วิธร่วมกัน",
			ALL_DEVICE: 				"อุปกรณ์ทั้งหมด",
			ACTIVE_DEVICE: 				"อุปกรณ์ที่ทำงาน",
			SAVE: 						"บันทึก",
			ID: 						"ไอดี",
			DEVICE: 					"อุปกรณ์",
			TYPE: 						"รูปแบบ",
			MAC_ADDRESS: 				"MAC Address",
			STICK: 						"Stick"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Statistics",
			UP_TIME: 					"Up Time",
			DOWNLOADS: 					"Items",
			LAST_DAY: 					"Last Day",
			LAST_WEEK: 					"Last Week",
			LAST_MONTH: 				"Last Month",
			ALL_LAN_HOSTS: 				"All LAN Hosts",
			OTHER: 						"Other"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"ไฟล์วอล",
			ENABLE_SPI: 				"SPI firewall",

			DOS_PROTECTION: 			"DoS Protection",
			ENABLE_DOS: 				"DoS Protection",
			
			OFF: 						"ปิด",
			LOW: 						"ต่ำ",
			MIDDLE: 					"กลาง",
			HIGH: 						"สูง",

			ICMP: 						"ICMP -FLOOD Attack Filtering",
			UDP: 						"UDP-FLOOD Attack Filtering",
			TCP: 						"TCP-SYN-FLOOD Attack Filtering",
			ENABLE_DOS_TIP:             "DoS protection and Traffic Statistics must be enabled at the same time.",

			IGNORE: 					"Ignore Ping Packet From WAN Port",
			FORBID: 					"Forbid Ping Packet From LAN Port",

			BLOCK_DOS: 					"Blocked DoS Host List",
			HOST_NUMBER: 				"Host Number",
			IP_ADDRESS: 				"IP Address",
			MAC_ADDRESS: 				"MAC Address"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"การควบคุมการเข้าถึง",
			ENABLE_ACCESS: 				"การควบคุมการเข้าถึง",

			ACCESS_MODE: 				"โหมดการเข้าถึง",
			DEFAULT_ACCESS_MODE: 		"การเข้าถึงพื้นฐาน",
			BLACK_LIST: 				"Blacklist",
			WHITE_LIST: 				"Whitelist",
			
			WIRED:						"สาย",
			WIRELESS:					"ไวเลส",

			DEVICE_ONLINE: 				"อุปกรณ์ออนไลน์",
			NAME: 						"ชื่ออุปกรณ์",
			IP_ADDRESS: 				"IP Address",
			MAC_ADDRESS: 				"MAC Address",
			CONN_TYPE: 					"รูปแบบการเชื่อมต่ออินเทอร์เน็ต",

			BLOCK: 						"บล็อก",

			DEVICE_IN_WHITE: 			"Devices in Whitelist",
			DEVICE_IN_BLACK: 			"Devices in Blacklist"
		},

		IP_MAC:{
			TITLE: 						"การตั้งค่า",
			ENABLE_ARP: 				"ผูก ARP",

			ARP_LIST: 					"รายชื่อ ARP",
			ARP_NUM: 					"จำนวนรายการ ARP",

			MAC_ADDRESS: 				"MAC Address",
			IP_ADDRESS: 				"IP Address",
			BOUND: 						"ขอบเขต",
			UNBOUND: 					"นอกขอบเขต",

			BINDING_LIST: 				"รายชื่อ IP&MAC ที่จับคู่กัน",
			DESCRIPTION: 				"บรรยาย",
			OPTIONAL: 					"(ถ้ามี)",
			ENABLE_THIS_ENTRY: 			"เปิด"
		},

		TIMESET: {
			TITLE: 						"การตั้งเวลา",
			ZONE: 						"โซนเวลา",
			DATE: 						"วัน",
			DATEFORMAT: 				"MM/DD/YYYY",
			TIME: 						"เวลา",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"NTP Server I",
			NTP2: 						"NTP Server II",
			OPTIONAL: 					"(ถ้ามี)",

			CURRENT_TIME:  				"เวลาปัจจุบัน",
			SET_TIME: 					"การตั้งค่าเวลา",
			AUTOMATIC: 					"รับอัตโนมัติจากอินเตอร์เน็ต",
			MANUAL: 					"ด้วยตัวเอง",
			AUTOMATIC_BTN: 				"ได้รับ",


			GETGMT: 					"รับ GMT",

			
			GETGMT_SUCCESS: 			"รับเวลาจาก NTP Server Success",
			GETGMT_TIMEOUT: 			"รับเวลาจาก NTP Server Time Out",
			GETGMT_WAIT: 				"รอ",
			
			M: 							"M",
			W: 							"W",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Daylight Saving",
			ENABLE_DAYLIGHT: 			"เปิด Daylight Saving",
			START: 						"เริ่ม",
			END: 						"จบ",

			RUNNING_STATUS: 			"สถานะการทำงาน",
			DOWN: 						"Daylight saving is down",
			UP: 						"Daylight saving is up"
		},

		DIAG:{
			TITLE: 						"การวินิจฉัย",
			DIAGNOSTIC_TOOL: 			"Diagnostic Tool",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"IP Address/Domain Name",
			COUNT: 						"นับปิง",
			
			BASIC: 						"พื้นฐาน",
			ADVANCED: 					"ขั้นสูง",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Ping Packet Size",
			PKTUNIT: 					"(4-1472 Bytes)",

			TIMEOUT: 					"Ping Timeout",
			TIMOUTUNIT: 				"(100-2000 Milliseconds)",

			TTL: 						"Traceroute Max TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"เริ่ม",
			STOP: 						"หยุด"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"เฟิร์มแวร์ของคุณถึงวันที่",
			TITLE: 						"การอัพเกรดเฟิร์มแวร์",
			INFO: 						"ข้อมูลอุปกรณ์",
			REMOTE_TITLE: 				"อัปเกรดแบบออนไลน์",
			LOCAL_TITLE: 				"อัปเกรดในตัวเครื่อง",

			NEWFILE: 					"ไฟล์เฟิร์มแวร์ใหม่",
			FIRMWAREVERSION: 			"เวอร์ชันเฟิร์มแวร์",
			HARDWAREVERSION: 			"เวอร์ชันฮาร์ดแวร์",
			LATESTVERSION: 				"รุ่นล่าสุด",
			CONFIRM_CONTENT:			"คุณต้องการอัปเกรดเฟิร์มแวร์หรือไม่?",
			WARNING:					"กำลังอัปเกรดเฟิร์มแวร์... <br/>เพื่อหลีกเลี่ยงความเสียหายใดๆ กรุณาให้เราเตอร์เปิดทำงานและห้ามไม่ให้ใช้งานเราเตอร์ระหว่างการอัพเกรดเฟิร์มแวร์",
			REBOOTING: 					"กำลังรีบูต... <br/> เพื่อหลีกเลี่ยงความเสียหายใดๆ กรุณาอย่าปิดเราเตอร์และห้ามใช้งานเราเตอร์ระหว่างการอัพเกรดเฟิร์มแวร์",
			DO_NOT_OPERATE: 			"กำลังอัปเกรดเฟิร์มแวร์... <br/>เพื่อหลีกเลี่ยงความเสียหายใดๆ กรุณาให้เราเตอร์เปิดทำงานและห้ามไม่ให้ใช้งานเราเตอร์ระหว่างการอัพเกรดเฟิร์มแวร์",
			FIRMWARE_UPDATING_NOTE: 	"กำลังอัพเกรดเฟิร์มแวร์...",
			REBOOTING_NOTE: 			"กำลังรีบูต...",
			SCREEN_UPDATING_NOTE: 		"หน้าจอการอัพเกรด...",
			UPGRADE_FAILED: 			"การอัพเกรดล้มเหลว",
			UPGRADE: 					"อัพเกรด",
			CHECK: 						"เช็ค",
			DOWNLOADING: 				"กำลังดาวน์โหลด...<br/>  เพื่อหลีกเลี่ยงความเสียหายใดๆ กรุณาให้เราเตอร์เปิดทำงานและห้ามไม่ให้ใช้งานเราเตอร์ระหว่างการอัพเกรดเฟิร์มแวร์",
			UPGRADE_INOF: 				"เพื่อหลีกเลี่ยงความเสียหายใดๆ กรุณาให้เราเตอร์เปิดทำงาน",
			NOTE: 						"Note:",
			NO_UPGRADE: 				"นี้คือรุ่นล่าสุดแล้ว",

			UPGRADING: 					"กำลังอัปเกรด...<br/> เพื่อหลีกเลี่ยงความเสียหายใดๆ กรุณาให้เราเตอร์เปิดทำงานและห้ามไม่ให้ใช้งานเราเตอร์ระหว่างการอัพเกรดเฟิร์มแวร์",
			RETRY: 						"ลองอีกครั้ง",
			CANCEL: 					"ยกเลิก",
			ILEGAL_DEVICE:              "ไม่สามารถระบุอุปกรณ์ได้ กรุณาติดต่อฝ่ายสนับสนุนด้านเทคนิค TP-Link",
			UPGRADE_FAIL: 				"ไม่สามารถอัปเกรดได้ กรุณาลองใหม่อีกครั้งในภายหลัง",
            CONFIG_RESET_NOTE:          "การตั้งค่าปัจจุบันของคุณจะหายไปหลังจากอัปเกรดเป็นรุ่นนี้",
			CHECK_UPGRADE: 				"ตรวจสอบเพื่ออัปเกรด"
		},

		BACKUP:{
			BACKUP: 					"แบ็คอัพ",
			BACKUPTIP: 					"บันทึกการตั้งค่าปัจจุบัน",

			RESTORE: 					"คืนค่าใหม่",
			RESTORETIP: 				"คืนค่าการตั้งค่าที่ถูกบันทึกจากไฟล์",
			
			RESTORE_WARN:				"เราเตอร์กำลังคืนค่าใหม่…<br/>กรุณาอย่าทำอะไรในขณะที่ระบบกำลังทำงานอยู่.",
			RESTORE_CONFIRM_CONTENT: 	"คุณต้องการจะคืนค่าการตั้งค่าจะแบ็คอัพไฟล์หรือไม่?",
			
			FILE: 						"ไฟล์",

			FACTORY: 					"คืนค่าโรงงาน",
			FACTORYTIP: 				"คืนกลับการตั้งค่าทั้งหมดไปยังค่าพื้นฐาน",
			RESETTIP:					"เรียกคืนการตั้งค่าทั้งหมดเป็นค่าเริ่มต้น ยกเว้นการเข้าสู่ระบบและข้อมูลบัญชีคลาวด์",
			FACTORY_CONFIRM_CONTENT:	"คุณต้องการที่จะคืนค่าโรงงานตัวเราเตอร์หรือไม่?",
			FACTORY_WARN:				"เราเตอร์กำลังคืนค่าใหม่…<br/>กรุณาอย่าทำอะไรในขณะที่ระบบกำลังทำงานอยู่.",
			
			BACKUPBTN: 					"แบ็คอัพ",
			RESTOREBTN: 				"คืนค่าใหม่",
			RESETBTN:					"คืนค่าใหม่",
			FACTORYBTN: 				"คืนค่าโรงงาน"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"บัญชีการจัดการ",
			
			OLDUSER: 					"ชื่อผู้ใช้เดิม",
			OLDPWD: 					"รหัสผ่านเดิม",

			NEWUSER: 					"ชื่อผู้ใช้ใหม่",
			NEWPWD: 					"รหัสผ่านใหม่",
			CONFIRM: 					"ยืนยันรหัสผ่านใหม่",

			RECOVERYINFO: 				"กอบกู้รหัสผ่าน",
			ENABLE_PASSWORD_RECOVERY: 	"เปิดการกอบกู้รหัสผ่าน",
			FROM: 						"จาก",
			TO: 						"ถึง",
			SMTP_SERVER: 				"SMTP Server",
			
			ENABLE_AUTHENTICATION: 		"เปิดการแสดงตัวตน",
			USERNAME: 					"ชื่อผู้ใช้",
			PASSWORD: 					"รหัสผ่าน",

			TEST_MAIL: 					"ทดสอบเมล์",

			LOCAL:						"ความจัดการทั่วไป",
			LOCAL_MAC_AUTH: 			"จัดการ MAC Authentication",
			ACCESS: 					"เข้าถึงอุปกรณ์ที่เชื่อมต่อ LAN ทั้งหมด",
			ACCESS_TIPS: 				"Toggle On เพื่อเปิดให้สามารถจัดอุปกรณ์ทั้งหมดบน LAN หรือปิดมันเพื่อเปิดให้สามารถจัดการอุปกรณ์แบบเฉพาะเจาะจง",
			
			MAC_ADDRESS: 				"MAC Address",
			VIEW_BTN: 					"ดูอุปกรณ์ที่มีอยู่แล้ว",
			DESCRIPTION: 				"บรรยาย",

			EXIST_DEVICE:               "อุปกรณ์ที่มีอยู่",

			OPTIONAL: 					"(ถ้ามี)",
			ENABLE_THIS_ENTRY: 			"เปิด",

			DEVICE_NAME:				"ชื่ออุปกรณ์",
			IP_ADDRESS:					"IP Address",
			

			REMOTE: 					"การจัดการระยะไกล",
			DISABLE_REMOTE_MANAGEMENR: 	"ปิด Remote Management",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"เปิด Remote Management สำหรับอุปกรณ์ทั้งหมด",
			ENABLE_REMOTE_MANAGEMENR: 	"เปิด Remote Management สำหรับอุปกรณ์เฉพาะ",
			WEB: 						"เว็บการจัดการพอร์ต",

			NOTICE:						"มีการใช้งานขัดกันที่พอร์ตเวอร์ชวลเซิร์ฟเวอร์! คุณต้องการดำเนินการต่อไปหรือไม่?",

			REMOTEIP: 					"การจัดการระยะไกลที่อยู่IP",
			REMOTEIPNOTE: 				"(ใส่ 255.255.255.255 เพื่อเปิดให้ทั้งหมด)"
			
		},

		SYSLOG:{
			TITLE: 						"ค่าล็อกของระบบ",
			LOG_FILTER: 				"Log Filter:",
			
			TYPE_EQ: 					"รูปแบบ=",
			
			ALL: 						"ALL",

			FIREWALL: 					"ไฟล์วอล", 
			NAT: 						"NAT",
			DDNS: 						"Dynamic DNS",
			UPNP:						"UPnP",
			IMB:            			"IP&MAC Binding",
			IPTV:						"IPTV",
			DHCPS:						"DHCP Server",
			IGMP_PROXY:					"IGMP Proxy",
			DOMAIN_LOGIN:				"Domain Login",
			BASIC_SECURITY: 			"ความปลอดภัยพื้นฐาน",
			PARENTAL_CONTROL: 			"Parental Control",
			ACCESS_CONTROL: 			"การควบคุมการเข้าถึง",
			DOS_PROTECTION: 			"DoS Protection",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"สถิติการจราจรข้อมูล",
			TIME_SETTINGS: 				"การตั้งเวลา",
			ACCOUNT_MANAGEMENT: 		"บัญชีการจัดการ",
			LOCAL_MANAGEMENT: 			"ความจัดการทั่วไป",
			REMOTE_MANAGEMENT: 			"การจัดการระยะไกล",
			LOCALE: 					"Locale",
			FACTORY_RESET: 				"คืนค่าโรงงาน",
			LED_CONTROLLER: 			"Led Controller",
			NETWORK: 					"เครือข่าย",
			USBSHARE: 					"แชร์ USB",
			AND: 						"และ",
			LEVEL: 						"ระดับ",
			EMERGENCY:					"EMERGENCY",
			ALERT:						"ALERT",
			CRITICAL:					"CRITICAL",
			ERROR: 						"ERROR",
			WARNING: 					"WARNING",
			NOTICE: 					"NOTICE",
			INFO: 						"INFO",
			DEBUG: 						"DEBUG",

			INDEX: 						"Index",
			TYPE: 						"รูปแบบ",
			TIME: 						"เวลา",
			LEVEL_COL:					"ระดับ",

			CONTENT: 					"Log Content",
			
			MAIL_LOG: 					"Mail Log",
			SAVE_LOG: 					"Save Log",

			SEND_OK: 					"ส่ง OK",
			SEND_FAILED: 				"ส่งล้มเหลว",

			MAIL_SETTING: 				"ตั้งค่าเมล์",

 			FROM: 						"จาก",
 			TO: 						"ถึง",
 			SMTP_SERVER: 				"SMTP Server",
 			ENABLE_AUTHENTICATION: 		"เปิดการแสดงตัวตน",

 			USERNAME: 					"ชื่อผู้ใช้",
 			PASSWORD: 					"รหัสผ่าน",
 			CONFIRM_PASSWORD: 			"ยืนยันรหัสผ่าน",

 			AUTO_MAIL: 					"เปิดเมล์อัตโนมัติ",
 			LOG_AT: 					"Log at",
 			HH_MM: 						"(HH:MM) ทุกวัน",

 			LOG_EVERY: 					"Log every",
 			HOURS: 						"ชั่วโมง"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"การตั้งค่า",
			STATUS: 					"เปิด QoS",
			UPBANDWIDTH: 				"อัพโหลดแบนด์วิธ",
			DOWNBANDWIDTH: 				"ดาวน์โหลดแบนด์วิธ",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Speed Test",
			RULE_LIST: 					"รายชื่อ QoS Rule",
			RULE: 						"QoS Rule",
			ID: 						"ไอดี",
			NAME: 						"ชื่อ",
			TYPE: 						"รูปแบบ",
			DETAIL: 					"รายละเอียด",
			PRIORITY: 					"ลำดับความสำคัญ",

			APPLICATION: 				"แอพพลิเคชั่น",
			APPLICATION_LIST: 			"รายชื่อ Application",
			CUSTOM_APP: 				"Application อื่น",
			MAC_ADDR: 					"MAC Address",
			MAC_ADDR_P: 				"Mac:",
			IP_ADDR: 					"IP Address",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Physical Port",

			LOW: 						"ต่ำ",
			MIDDLE: 					"กลาง",
			HIGH: 						"สูง",

			PROTO: 						"Protocol",
			PORT: 						"พอร์ต",
			PROTO_P: 					"Protocol",
			PORT_P: 					"Port",
			PORT_TIPS: 					"(XX or XX-XX,1-65535,at most 5 pairs)",

			ALL: 						"ALL",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"ตัวเลือก",

			WIFI_HOME: 					"WIFI-HOST",
			WIFI_GUEST: 				"WIFI-GUEST",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"อัพเกรดดาต้าเบส",

			NEWFILE: 					"ไฟล์ดาต้าเบสใหม่",
			FIRMWAREVERSION: 			"เวอร์ชั่นดาต้าเบส",
			CONFIRM_CONTENT:			"คุณต้องการทำการอัพเดทฐานข้อมูลหรือไม่?",
			WARNING:					"ดาต้าเบส กำลังถูกอัพเดท... <br/>กรุณาอย่าทำอะไรในขณะที่ระบบกำลังทำงานอยู่.",
			
			UPGRADE: 					"อัพเกรด",

			SERVICE_RESTART: 			"QoS Service กำลังรีสตาร์ท",
			
			TYPE: 						"รูปแบบ",
			BY_DEVICE: 					"โดยอุปกรณ์",
			BY_APP: 					"โดย Application",
			BY_PHY: 					"โดย Physical Port",

			HIGH_PRIORITY_LBL: 			"High Priority:",
			MIDDLE_PRIORITY_LBL: 		"Middle Priority:",
			LOW_PRIORITY_LBL: 			"Low Priority:",

			HIGH_PRIORITY: 				"ความสำคัญสูงสุด",
			MIDDLE_PRIORITY: 			"ความสำคัญปานกลาง",
			LOW_PRIORITY: 				"ความสำคัญน้อยสุด"

		},

		APPLICATION:{
			APP_LIST: 					"รายชื่อ Application",
			GAME_LIST: 					"รายชื่อเกมส์",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"สถิติการจราจรข้อมูล",
			ENABLE_STATISTICS: 			"สถิติการจราจรข้อมูล",

			TITLE: 						"รายชื่อ Traffic Statistics",
			IP_MAC: 					"IP Address/MAC Address",
			TPKT: 						"Packets ทั้งหมด",
			TBYTE: 						"Bytes ทั้งหมด",
			CPKT: 						"Packets ปัจจุบัน",
			CBYTE: 						"Bytes ปัจจุบัน",
			CICMP: 						"ICMP Tx ปัจจุบัน",
			CUDP: 						"UDP Tx ปัจจุบัน",
			CSYN: 						"SYN Tx ปัจจุบัน",
			
			DELETE_CONFIRM: 			"คุณต้องการลบค่าสถิติของการจราจรข้อมูลหรือไม่?",
			DELETE_ALL_CONFIRM: 		"คุณต้องการลบค่าสถิติของการจราจรข้อมูลทั้งหมดหรือไม่?",

			RESET_ALL: 					"เริ่มใหม่ทั้งหมด"
		},

		SYSPARA:{
			W24G: 						"ไวเลส 2.4GHz",
			W5G: 						"ไวเลส 5GHz",
			SWITCH_NOTICE:  			"ฟังก์ชั่นเครือข่ายไร้สายของคุณถูกปิด. ถ้าคุณต้องการใช้ฟังก์ชั่นนี้.กรุณาเปิดปุ่ม Wi-Fi",

			ENABLE_TIPS: 				"ฟังก์ชั่นเครือข่ายไร้สายของคุณถูกปิด.",

			BEACON: 					"ช่วง Beacon",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS Threshold",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Fragmentation Threshold",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"ช่วง DTIM",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"ช่วงเวลาอัพเดท Group Key",
			GROUPUNIT: 					"วินาที",
			
			
			WMM_FEATURE: 				"รูปแบบ WMM",
			WMM: 						"เปิด WMM",

			GI_FEATURE: 				"รูปแบบ Short GI",
			GI: 						"เปิด Short GI",

			AP_FEATURE: 				"รูปแบบ AP Isolation",
			AP: 						"เปิด AP Isolation",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"เปิด TxBF",

			WDS_FEATURE: 				"การบริดจิ้ง WDS",
			WDS: 						"เปิด WDS bridging",
			
			SSID_BRIDEGE: 				"SSID (bridge)",
			SURVEY: 					"สำรวจ",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC Address",
			SSID: 						"ชื่อเครือข่ายไวเลส",
			SIGNAL: 					"สัญญาณ",
			CHANNEL: 					"ช่องสัญญาณ",
			SECURITY: 					"การรักษาความปลอดภัย",
			CHOSEN: 					"เลือก",
			AP_NUMBER:					"จำนวน AP",

			TOTAL: 						"รายการทั้งหมด",

			MAC: 						"MAC Address (bridged)",
			MACUNIT: 					"ยกตัวอย่าง: 00-1D-0F-11-22-33",

			SECURITY: 					"การรักษาความปลอดภัย",
			NO: 						"ไม่",
			NONE: 						"ไม่มีความปลอดภัย",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"รหัสผ่าน",
			
			AUTH_TYPE: 					"ข) การรับรองความถูกต้อง ประเภท",
			AUTO: 						"อัตโนมัต",
			OPEN: 						"Open System",
			SHARED: 					"Shared Key",

			WEP_INDEX: 					"WEP Index",
			KEY1: 						"Key1",
			KEY2: 						"Key2",
			KEY3: 						"Key3",
			KEY4: 						"Key4",

			WEP_KEY_FORMAT: 			"b. WEP Key Format",
			ASC: 						"ASCII",
			HEX: 						"เลขฐานสิบหก",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"เปิด WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"เปิด NAT",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"เปิด NAT Boost",
			
			MEDIA_SERVER: 				"Media Server",
			SCAN_INTERVAL: 				"ช่วงเวลาค้นหาอัตโนมัติ(ชั่วโมง)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"DoS Protection Level Settings",

			ICMP: 						"ICMP ระดับการฟลัดแพ็คเก็ต",
			UDP: 						"UDP ระดับการฟลัดแพ็คเก็ต",
			TCP: 						"TCP-ระดับการฟลัดแพ็คเก็ต",

			WDS_MODE: 					"·โหมด WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"ต่ำ",
			MIDDLE: 					"กลาง",
			HIGH: 						"สูง",

			TO: 						"ถึง",
			NOTICE_NAT_REBOOT: 			"กำลังทำการรีบูต...<br/>กรุณาอย่าใช้งานในระหว่างกระบวนการรีบูต",

			NOTICE_NAT_BOOST: 			"การเปลี่ยนของ NAT Boost จะมีผลหลังจากการรีบูทอุปกรณ์,คุณแน่ใจหรือไม่ว่าคุณต้องการทำรายการต่อไป ?",
			NOTICE:						"ช่องสัญญาณเราเตอร์ของคุณไม่เหมือนกับช่องสัญญาณ bridged AP. คุณต้องการเปลี่ยนมันหรือไม่ ",

			UNIT: 						"(5-7200)Packets/Secs",
			LED: 						"LED",
			NIGHT_MODE: 				"โหมดกลางคืน",
			PERIOD_NIGHT_TIME: 			"ช่วงเวลาโหมดกลางคืน",
			ENABLE: 					"เปิดโหมดกลางคืน",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "ไฟ LED ถูกปิดไป หากคุณต้องการที่จะใช้ฟังก์ชันนี้กรุณากดปุ่ม LED หรือคลิกที่เปิดไฟ LED ที่มุมขวาบนของหน้าการจัดการ",
			NOTE2:                      "ช่วงโหมดกลางคืนจะมีผลใช้ตามเวลาในระบบของเราเตอร์ คุณต้องตั้งเวลาของเราเตอร์ไว้แล้ว"
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"ขณะนี้ไม่มีใบรับรอง โปรด <b>สร้าง</b> ใบรับรองก่อนเปิดใช้งาน VPN Server",
			NO_CERT_NOTE2: 				"ขณะนี้ไม่มีใบรับรอง โปรด <b>สร้าง</b> ใบรับรองก่อนส่งออกการกำหนดค่า",
			ENABLE_VPN_SERVER: 			"เปิดใช้ VPN Server",
			SERVICE_TYPE: 				"รายการบริการ",
			SERVICE_PORT: 				"พอร์ตบริการ",
			VPN_SUBNET: 				"ซับเน็ต/เน็ตมาส์ก VPN",
			CLIENTS_ACCESS: 			"การเข้าถึงของไคลเอนต์",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"เครือข่ายโฮมเท่านั้น",
			INTERNET_HOME: 				"อินเทอร์เน็ตและเครือข่ายโฮม",
			CERT_STR: 					"ขณะนี้ยังไม่มีใบรับรอง คลิกตกลงเพื่อสร้างใบรับรองและบันทึกการกำหนดค่าของคุณ",
			CERT_STR2: 					"ขณะนี้ยังไม่มีใบรับรอง คลิกตกลงเพื่อสร้างใบรับรองและส่งออกการกำหนดค่าของคุณ",
			CONF_FILE: 					"ไฟล์การกำหนดค่า", 
			EXPORT_CONF_FILE: 			"ส่งออกการกำหนดค่า",
			EXPORT: 					"ส่งออก",

			INSTALL_GUIDE: 				"คู่มือการติดตั้ง VPN Client",
			INSTALL_STEP: 				"หากต้องการเิปิดใช้และเชื่อมต่ออุปกรณ์ไคลเอนต์ของคุณกับเซิร์ฟเวอร์ OpenVPN:",
			INSTALL_NOTICE:				"ก่อนกำหนดค่าเซิร์ฟเวอร์ OpenVPN โปรดกำหนดค่า Dynamic DNS Service (แนะนำ) หรือมอบหมาย IP address แบบสแตติคสำหรับพอร์ต Wan และเวลาของระบบต้องถูกต้อง",
			INSTALL_NOTE1: 				"เลือกเปิดใช้ VPN Server",
			INSTALL_NOTE2: 				"Before you configure the OpenVPN server, please configure Dynamic DNS Service (recommended) or assign a static IP address for Wan port. And make sure your external port of NAT settings is not the service port and DMZ is disabled, and also your System Time is correct.",
			INSTALL_NOTE3: 				"คลิกส่งออกเพื่อบันทึกไฟล์การกำหนดค่า",
			INSTALL_NOTE4: 				"บนอุปกรณ์ไคลเอนต์ของคุณ ให้ดาวน์โหลดและติดตั้งอรรถประโยชน์ไคลเอนต์ OpenVPN จาก <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> แพล็ตฟอร์มที่รองรับอย่างเป็นทางการรวมถึง Windows, Mac OSX, Linux",
			INSTALL_NOTE5: 				"เรียกใช้อรรถประโยชน์ไคลเอนต์ OpenVPN และเพิ่มการเชื่อมต่อ VPN ใหม่โดยใช้ไฟล์การกำหนดค่าที่บันทึกไว้เพื่อเชื่อมต่ออุปกรณ์ไคลเอนต์ของคุณกับเิซิร์ฟเวอร์ VPN",
			NOTE: 						"หากต้องการข้อมูลเพิ่มเติมเกี่ยวกับไคลเอนต์ OpenVPN ให้คลิกที่ <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"IP Address ของไคลเอนต์",
			ACCOUNT_USERNAME: 			"ชื่อผู้ใช้",
			ACCOUNT_PASSWORD: 			"รหัสผ่าน",
			CLIENT_IP_NOTE: 			"(ไคลเอนต์ไม่เกิน 10 เครื่อง)",
			SAME_SUBNET_NOTE: 			"IP address ของไคลเอนต์และ IP address ของ LAN ต้องไม่ใช่ซับเน็ตเดียวกัน",
			CONFLICT_WITH_DHCP: 		"IP address ของไคลเอนต์ขัดแย้งกับชุด IP address ของ DHCP",
			CONFLICT_WITH_RESERVED: 	"IP address ของไคลเอนต์ขัดแย้งกับชุด IP address ที่สำรองไว้",
			CONFLICT_WITH_OPENVPN: 		"IP address ของไคลเอนต์และ IP address ของ OpenVPN ต้องไม่ใช่ซับเน็ตเดียวกัน",
			SAME_SUBNET_NOTE2: 			"ซับเน็ต/เน็ตมาส์ก VPN และ IP address ของ LAN ต้องไม่ใช่ซับเน็ตเดียวกัน",
			CONFLICT_WITH_DHCP2: 		"ซับเน็ต/เน็ตมาส์ก VPN ขัดแย้งกับชุด IP address ของ DHCP",
			CONFLICT_WITH_RESERVED2: 	"ซับเน็ต/เน็ตมาส์ก VPN ขัดแย้งกับชุด IP address ที่สำรองไว้",
			CONFLICT_WITH_PPTPVPN: 		"ซับเน็ต/เน็ตมาส์ก VPN และ IP address ของ PPTP VPN ต้องไม่ใช่ซับเน็ตเดียวกัน",
			VPN_MASK_ERROR: 			"เน็ตมาส์กต้องไม่เกิน 255.255.255.248",
			ACCOUNT_LIST: 				"รายการบัญชี (สูงสุด 16 รายการ)",
			ADVANCED_SETTING: 			"ขั้นสูง",
			ALLOW_SAMBA: 				"อนุญาตให้เข้าถึงแซมบ้า (Network Place)",
			ALLOW_NETBIOS: 				"อนุญาตให้ NetBIOS passthrough",
			ALLOW_UNENCRYPTED_CONN: 	"อนุญาตให้เชื่อมต่อแบบไม่เข้ารหัส",
			USERNAME_CONFLICT: 			"This username already exists.",
			
			CONNECT_PPTP: 				"หากต้องการเิปิดใช้และเชื่อมต่ออุปกรณ์ไคลเอนต์ของคุณกับเซิร์ฟเวอร์ PPTP VPN:",
			CONNECT_NOTICE:				"ก่อนกำหนดค่าเซิร์ฟเวอร์ PPTP VPN โปรดกำหนดค่า Dynamic DNS Service (แนะนำ) หรือมอบหมาย IP address แบบสแตติคสำหรับพอร์ต WAN และพอร์ตภายนอกของการตั้งค่า NAT ไม่ใช่ 1723 และปิดใช้งาน DMZ แล้ว และเวลาระบบของคุณถูกต้อง",
			CONNECT_NOTE1: 				"เลือกเปิดใช้ VPN Server",
			CONNECT_NOTE2: 				"กำหนดค่าพารามิเตอร์ของเซิร์ฟเวอร์ PPTP VPN และคลิกบันทึก",
			CONNECT_NOTE3: 				"บนอุปกรณ์ไคลเอนต์ของคุณ ให้สร้างการเชื่อมต่อ PPTP VPN แพล็ตฟอร์มที่รองรับอย่างเป็นทางการรวมถึง Windows, Mac OSX, Linux, iOS และ Android",
			CONNECT_NOTE4: 				"เรียกใช้โปรแกรม PPTP VPN เพิ่มการเชื่อมต่อใหม่และป้อนชื่อโดเมนของอุปกรณ์ DDNS ที่ลงทะเบียนหรือ IP address แบบสแตติคที่มอบหมายให้กับพอร์ต WAN เพื่อเชื่อมต่ออุปกรณ์ไคลเอนต์ของคุณกับเิซิร์ฟเวอร์ PPTP VPN",
			
			GENERATE_CERT: 				"ใบรับรอง",
			GENERATE_NEW_CERT: 			"สร้างใบรับรอง",
			GENERATE: 					"สร้าง",
			GENERATE_TIPS: 				"กำลังสร้างใบรับรอง...<br/>จะใช้เวลาสองสามนาที โปรดรอ",
			CERT_SUCCESS: 				"สำเร็จ",
			CERT_FAIL: 					"ไม่สำเร็จ โปรดลองอีกครั้ง",
			
			VPN_CONNECTIONS: 			"การเชื่อมต่อ VPN",
			OPEN_VPN_CONNECTIONS: 		"การเชื่อมต่อ OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"การเชื่อมต่อ PPTP VPN",
			USER:				"ผู้ใช้",
			REMOTE_IP:			"Remote IP",
			ASSIGNED_IP:			"Assigned IP"
		}
	};
})(jQuery);

