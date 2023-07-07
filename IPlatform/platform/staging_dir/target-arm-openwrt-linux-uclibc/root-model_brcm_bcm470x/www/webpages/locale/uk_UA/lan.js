(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			EMAIL: 						"Електрона пошта",
			FORGET_PASSWORD: 			"Забули пароль?",
			LOGIN: 						"Авторизація",
			BEGIN: 						"fi",
			IMPORTANT_UPDATE_INFO: 		"Щоб уникнути конфлікту з кінцевим пристроєм, IP-адреса вашого маршрутизатора була оновлена на",
			CONTINUE: 					"Продовжити",

			IMPORTANT_NOTICE: 			"Важливе Зауваження",
			OR: 						", Ви впевнені, що хочете продовжити, щоб відвідати",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Натисніть і утримуйте кнопку Відмінити протягом %SECONDS% секунд, щоб відновити маршрутизатор до заводських налаштувань.",
			FORGET_PASSWORD_INFO_1: 	"Якщо функція Відновлення Паролю включена. Код перевірки буде надіслано за вказаною адресую електронної пошти для скидання ім'я користувача та паролю.",
			FORGET_PASSWORD_SEND_FAILED:"Не вдалося відправити код! Будь ласка, перевірте підключення до Інтернету.",

			VERIFICATION_CODE: 			"Код перевірки",

			RECEIVE_CODE: 				"Відправити код",

			CONFIRM: 					"Підтвердити",
			WELCOME: 					"Вас вітає TP-Link %model%. Будь ласка, авторизуйтесь.",
			SEC: 						"s",

			USER_CONFLICT: 				"Конфлікт логіну!",
			FIRST_TIME: 				"Будь ласка,  налаштуйте  Ваш %PRODUCT% для підключення до Інтернету. Для початку роботи, створіть пароль для керування Вашим %PRODUCT%.",
			FIRST_TIME1: 				"Будь ласка, створіть пароль адміністратора для керування Вашим %model%.",
			USER_CONFLICT_INFO: 		"Користувач %USER% з хоста %HOST% (%IP%/%MAC%) в даний час авторизований в системі маршрутизатора. Ви не можете увійти одночасно. Будь ласка, спробуйте пізніше.",
			USER_CONFLICT_INFO_2: 		"Користувач %USER% (%IP%) в даний час авторизований в системі маршрутизатора. Будь ласка, спробуйте пізніше.",
			USER_CONFLICT_INFO_3: "Вхід може бути здійснений тільки з одного пристрою. Якщо ви продовжите, інший пристрій буде відключено. Бажаєте продовжити?",
			
			LOGIN_FAILED: 				"Помилка при вході!",
			LOGIN_FAILED_COUNT: 		"Помилка при вході %num1 разів, у вас ще залишились %num2 спроб.",
			NO_COOKIE: 					"Cookies повинні бути включені, щоб увійти в систему. Будь ласка, включіть Cookies або вимкніть Приватний / Інкогніто режим перегляду.", 

			FORGET_PASSWORD_NOTE: 		" Якщо ви не налаштували функцію Відновлення пароля. Ви можете натиснути та утримувати кнопку скидання протягом %SECONDS% секунд, щоб відновити маршрутизатор до заводських налаштувань."
		},
		INIT: {
			PASSWORD: 					"Пароль",
			CONFIRM_PASSWORD:				"Підтвердити пароль",
			BEGIN: 						"fi",
			IMPORTANT_UPDATE_INFO: 		"Для запобігання конфлікту з пограничним пристроєм, IP-адреса Вашого маршрутизатора має бути оновлена до ",
			CONTINUE: 					"Далі ",

			IMPORTANT_NOTICE: 			"Важливе Зауваження",
			OR: 						", Ви впевнені, що хочете продовжити, щоб відвідати",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Підтвердити",

			SEC: 						"s",

			USER_CONFLICT: 				"Конфлікт Авторизації!",
			
			USER_CONFLICT_INFO: 		"Користувач %USER% з хостом %HOST% (%IP%/%MAC%) вже авторизований на маршрутизаторі. Ви не можете авторизуватись одночасно. Будь ласка, спробуйте ще раз пізніше.",
			USER_CONFLICT_INFO_2: 		"Користувач  %USER% (%IP%) вже авторизований на маршрутизаторі. Ви не можете авторизуватись одночасно. Будь ласка, спробуйте ще раз пізніше.",
			
			LOGIN_FAILED: 				"Помилка Авторизації! ",
			LOGIN_FAILED_COUNT: 		"Помилка при вході %num1 разів, у вас ще залишились %num2 спроб.",
			NO_COOKIE: 					"Cookies повинні бути включені, щоб увійти в систему. Будь ласка, включіть Cookies або вимкніть Приватний / Інкогніто режим перегляду.", 

			INIT_NOTE_TITLE: 			"Шановний Користувач,",
			INIT_NOTE_CONTENT: 			"Будь ласка,  налаштуйте  Ваш %PRODUCT% для підключення до Інтернету. Для початку роботи, створіть пароль для керування Вашим %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Версія прошивки:",
			FEATURE: 						"Модифікації та виправлення помилок:",
			TITLE: 							"Виявлено доступне оновлення ПЗ",
			UPGRADE_NOW: 					"Оновити зараз",
			REMIND: 						"Нагадати пізніше",
			NOTICE:    						"Привіт, для Вашого маршрутизатора доступне нове ПЗ.",
			NEVER: 							"Ігнорувати цю версію"
			
		},

		WAN_ERROR: {
			TITLE: 							"Помилка при підключенні до WAN!",
			STATUS: 						"Статус",
			INFO: 							"Пояснення",
			SETUP: 							"Встановити з'єднання з Інтернетом",
			NEVER: 							"Більше не нагадувати"
		},

		OFFLINE_ERROR:{
			TITLE: "Ой… Нам не вдалось досягти Хмарового Серверу.",
			NOTE1: "1. Впевніться, що у Вас є доступ до Інтернету.",
			NOTE2: "2. Хмаровий Сервер тимчасово не доступний. Спробуйте пізніше.",
			NOTE3: "3. Якщо проблему не вирішено, будь ласка зверніться до <a target=\"_blank\" id=\"support\">Технічна підтримка TP-Link</a>.",
			ERROR: "Помилка"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Версія програмного забезпечення",
			HARDWARE_VERSION: 				"Версія апаратного забезпечення",
			HELP_SUPPORT: 					"Підтримка",
			FAQ: 							"FAQ",
			CONFIRM_REBOOT: 				"Ви впевнені, що хочете перезавантажити маршрутизатор?",
			CONFIRM_LOGOUT: 				"Ви впевнені, що хочете вийти?",
			UPGRADE_ALERT_1: 				"Поточна прошивка не підтримує хмарний сервіс TP-Link. Ми наполегливо рекомендуємо Вам завантажити останню версію прошивки за посиланням www.tp-link.com та оновити її.",
			UPGRADE_ALERT_2: 				"Поточна прошивка не підтримує хмарний сервіс TP-Link. Ми наполегливо рекомендуємо Вам оновити прошивку, натиснувши на значок \"Оновити\" у правому верхньому куті сторінки.",
			ACCOUNT_UNLOGIN: 				"Обліковий запис",

			REBOOTING: 						"Перезавантаження... <br/>Будь ласка, не працюйте під час процесу.",

			HELP_APP: 					"Програма",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Зіскануйте QR код, щоб завантажити додаток TP-Link Tether",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Ви можете з легкістю управляти мережею з будь-якого мобільного пристрою.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Повний контроль на долоні Вашої руки. "
		},

		NAV: {
			QUICK_SETUP: 				"Швидке Налаштування",
			BASIC: 						"Основі",
			ADVANCED: 					"Додатково"
		},

		CONTROL: {
			LOGIN: 						"Авторизація",
			LOGOUT: 					"Вихід",
			UPDATE: 					"Оновити",
			REBOOT: 					"Перезавантаження",
			LED: 						"Світлодіодні індикатори",
			LED_ON: 					"Світлодіодні індикатори увімкнуті ",
			LED_OFF: 					"Світлодіодні індикатори вимкнені",
			LED_DISABLED: 				"Неможливо змінити статус світлодіодних індикаторів, коли маршрутизатор знаходиться у нічному режимі "
		},

		LANGUAGE: {
			EN_US: 						"Англійська",
			ZH_CN: 						"Українська"
		},

		REGION: {
			ALBANIA: 					"Албанія",
			ALGERIA: 					"Алжирія",
			AMERICAN_SAMOA: 			"американське Самоа",
			ARGENTINA: 					"Аргентина",
			ARMENIA: 					"Вірменія",
			ARUBA: 						"Аруба",
			AUSTRALIA: 					"Австралія",
			AUSTRIA: 					"Австрія",
			AZERBAIJAN: 				"Азербайджан",
			BAHAMAS: 					"Багамські острови",
			BAHRAIN: 					"Бахрейн",
			BANGLADESH: 				"Бангладеш",
			BARBADOS: 					"Барбадос",
			BELARUS: 					"Білорусь",
			BELGIUM: 					"Бельгія",
			BELIZE: 					"Беліз",
			BERUMUDA: 					"Бермудські острови",
			BOLIVIA: 					"Болівія",
			BOSNIA_HERZEGOWINA: 		"Боснія і Герцеговина",
			BRAZIL: 					"Бразилія",
			BRUNEI_DARUSSALAM: 			"Бруней-Даруссалам",
			BULGARIA: 					"Болгарія",
			CAMBODIA: 					"Камбоджа",
			CANADA: 					"Канада",
			CAYMAN_ISLANDS: 			"Кайманові острови",
			CHILE: 						"Чилі",
			CHINA: 						"Народна Республіка Китай",
			COLOMBIA: 					"Колумбія",
			COSTA_RICA: 				"Коста-Ріка",
			CROATIA: 					"Хорватія",
			CYPRUS: 					"Кіпр",
			CZECH_REPUBLIC: 			"Чеська Республіка",
			DENMARK: 					"Данія",
			DOMINICAN_REPUBLIC: 		"Домініканська Республіка",
			ECUADOR: 					"Еквадор",
			EGYPT: 						"Єгипет",
			EL_SALVADOR: 				"Сальвадор",
			ESTONIA: 					"Естонія",
			ETHIOPIA: 					"Ефіопія",
			FAEROE_ISLANDS: 			"Фарерські острови",
			FINLAND: 					"Фінляндія",
			FRANCE: 					"Франція",
			FRENCH_GUIANA: 				"Французька Гвіана",
			FRENCH_POLYNESIA: 			"Французька Полінезія",
			GEORGIA: 					"Грузія",
			GERMANY: 					"Німеччина",
			GREECE: 					"Греція",
			GREENLAND: 					"Гренландія",
			GRENADA: 					"Гренада",
			GUADELOUPE: 				"Гваделупа",
			GUAM: 						"Гуам",
			GUATEMALA: 					"Гватемала",
			HAITI: 						"Гаїті",
			HONDURAS: 					"Гондурас",
			HONG_KONG: 					"Гонконг",
			HUNGARY: 					"Угорщина",
			ICELAND: 					"Ісландія",
			INDIA: 						"Індія",
			INDONESIA: 					"Індонезія",
			IRAN: 						"Іран",
			IRAQ: 						"Ірак",
			IRELAND: 					"Ірландія",
			ISRAEL: 					"Ізраїль",
			ITALY: 						"Італія",
			JAMAICA: 					"Ямайка",

			JAPAN: 						"Японія",
			JAPAN_1: 					"Японія 1",
			JAPAN_2: 					"Японія 2",
			JAPAN_3: 					"Японія 3",
			JAPAN_4: 					"Японія 4",
			JAPAN_5: 					"Японія 5",
			JAPAN_6: 					"Японія 6",

			JORDAN: 					"Йорданія",
			KAZAKHSTAN: 				"Казахстан",
			KENYA: 						"Кенія",

			NORTH_KOREA: 				"Північна Корея",
			KOREA_REPUBLIC: 			"Південна Корея",
			KOREA_REPUBLIC_3: 			"Південна Корея 3",

			KUWAIT: 					"Кувейт",
			LATVIA: 					"Латвія",
			LEBANON: 					"Ліван",
			LIBYA: 						"Лівія",
			LIECHTENSTEIN: 				"Ліхтенштейн",
			LITHUANIA: 					"Литва",
			LUXEMBOURG: 				"Люксембург",
			MACAU: 						"Макао",
			MACEDONIA: 					"Колишня Югославська Республіка Македонія",
			MALAWI: 					"Малаві",
			MALAYSIA: 					"Малайзія",
			MALDIVES: 					"Мальдіви",
			MALTA: 						"Мальта",
			MARTHINIQUE: 				"Мартинюк",
			MAURITIUS: 					"Маврикій",
			MAYOTTE: 					"Майотта",
			MEXICO: 					"Мексика",
			MONACO: 					"Князівство Монако",
			MONGOLIA: 					"Монголія",
			MOROCCO: 					"Марокко",
			NEPAL: 						"Непал",
			NETHERLANDS: 				"Нідерланди",
			NETHERLANDS_ANTILLES: 		"Нідерландські Антильські острови",

			NEW_ZEALAND: 				"Нова Зеландія",
			NICARAGUA: 					"Нікарагуа",
			NIGERIA: 					"Нігерія",
			NORWAY: 					"Норвегія",
			NORTHERN_MARIANA_ISLANDS: 	"Північні Маріанські острови",
			OMAN: 						"Оман",
			PAKISTAN: 					"Ісламська Республіка Пакистан",
			PANAMA: 					"Панама",
			PAPUA_NEW_GUINEA: 			"Папуа-Нова Гвінея",
			PARAGUAY: 					"Парагвай",
			PERU: 						"Перу",
			PHILIPPINES: 				"Республіка Філіппіни",
			POLAND: 					"Польща",
			PORTUGAL: 					"Португалія",
			PUERTO_RICO: 				"Пуерто-Ріко",
			QATAR: 						"Катар",
			REUNION: 					"Реюніон",
			ROMANIA: 					"Румунія",
			RUSSIA: 					"Росія",
			RWANDA: 					"Руанда",
			SAMOA: 						"Самоа",
			SAUDI_ARABIA: 				"Саудівська Аравія",
			SINGAPORE: 					"Сінгапур",
			SLOVAK_REPUBLIC: 			"Словацька Республіка",
			SLOVENIA: 					"Словенія",
			SOUTH_AFRICA: 				"ПАР",
			SPAIN: 						"Іспанія",
			SRI_LANKA: 					"Шрі Ланка",
			SURINAME: 					"Сурінам",
			SWEDEN: 					"Швеція",
			SWITZERLAND: 				"Швейцарія",
			SYRIA: 						"Сирія",
			TAIWAN: 					"Тайвань",
			TANZANIA: 					"Танзанія",
			THAILAND: 					"Таїланд",
			TRINIDAD_TOBAGO: 			"Тринідад у Тобаго",
			TUNISIA: 					"Туніс",
			TURKEY: 					"Туреччина",
			UGANDA: 					"Уганда",
			UKRAINE: 					"Україна",
			UNITED_ARAB_EMIRATES: 		"Об'єднані Арабські Емірати",
			UNITED_KINGDOM: 			"Великобританія",
			UNITED_STATES: 				"США",
			URUGUAY: 					"Уругвай",
			UZBEKISTAN: 				"Узбекистан",
			VENEZUELA: 					"Венесуела",
			VIETNAM: 					"В'єтнам",
			VIRGIN_ISLANDS: 			"Віргінські острови (U.S.)",
			YEMEN: 						"Ємен",
			ZIMBABWE: 					"Зімбабве"
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
			M_INDONESIA:                                                  "Індонезія",
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
			M_LUXEMBOURG:                                                 "Люксембург",
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
			ENIWETOK: 					"(GMT-12: 00) Еніветок, Кваджалейн", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11: 00) Мідуей, Самоа",
			HAWAII: 					"(GMT-10: 00) Гаваї",
			ALASKA: 					"(GMT-09: 00) Аляска",
			PACIFIC_TIME: 				"(GMT-08: 00) Тихоокеанський час",
			MOUNTAIN_TIME: 				"(GMT-07: 00) Гірський час (США Канада)",
			CENTRAL_TIME: 				"(GMT-06: 00) Центральний час (США Канада)",
			EASTERN_TIME: 				"(GMT-05: 00) Східний час (США Канада)",
			CARACAS:					"(GMT-04: 30) Каракас",
			ATLANTIC_TIME: 				"(GMT-04: 00) Атлантичний час (Канада)",
			NEWFOUNDLAND: 				"(GMT-03: 30) Ньюфаундленд",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03: 00) Бразиліа, Буенос-Айрес",
			MID_ATLANTIC: 				"(GMT-02: 00) Середньо-Атлантичний",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01: 00) Азорські острови, Кабо-Верде",
			GREENWICH_MEAN_TIME: 		"(GMT) Час за Гринвічем: Дублін, Лондон",
			BERLIN_STOCKHOLM: 			"(GMT + 01: 00) Берлін, Стокгольм, Рим, Берн, Брюссель",
			ATHENS_HELSINKI: 			"(GMT + 02: 00) Афіни, Гельсінкі, Східна Європа, Ізраїль, Київ",
			BAGHDAD_KUWAIT: 			"(GMT + 03: 00) Багдад, Кувейт, Найробі, Ер-Ріяд, Москва",

			TEHERAN: 					"(GMT + 03: 30) Тегеран",

			ABU_DHABI: 					"(GMT + 04: 00) Абу-Дабі, Маскат, Казань, Волгоград",

			KABUL: 						"(GMT + 04: 30) Кабул",

			ISLAMABAD_KARACHI: 			"(GMT + 05: 00) Ісламабад, Карачі, Єкатеринбург",

			MADRAS_CALCUTTA: 			"(GMT + 05: 30) Мадрас, Калькутта, Бомбей, Нью-Делі",
			KATMANDU: 					"(GMT + 05: 45) Катманду",

			ALMA_ATA_DHAKA: 			"(GMT + 06: 00) Алма-Ата, Дакка",
			RANGOON: 					"(GMT + 06: 30) Рангун",

			BANGKOK_JAKARTA_HANOI: 		"(GMT + 07: 00) Бангкок, Джакарта, Ханой",
			BEIJING_HONGKONG: 			"(GMT + 08: 00) Пекін, Гонконг, Перт, Сінгапур",
			TOKYO_OSAKA_SAPPORO: 		"(GMT + 09: 00) Токіо, Осака, Саппоро, Сеул, Якутськ",

			ADELAIDE: 					"(GMT + 09: 30) Аделаїда",

			BRISBANE_CANBERRA: 			"(GMT + 10: 00) Брісбен, Канберра, Мельбурн, Сідней",
			MAGADAN_SOLOMAN_IS: 		"(GMT + 11: 00). Магадан, Соломонові острови, Нова Каледонія",
			FIJI_KAMCHATKA: 			"(GMT + 12: 00) Фіджі, Камчатка, Окленд",
			NUKU: 						"(GMT + 13: 00) Нукуалофа"
		},

		APPLIST:{
			APP:						"Програма",
			GAME:						"Гра",
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
			DAY: 						"День",

			MONDAY: 					"Понеділок",
			TUESDAY: 					"Вівторок",
			WEDNESDAY: 					"Середа",
			THURSDAY: 					"Четвер",
			FRIDAY: 					"П'ятниця",
			SATURDAY: 					"Субота",
			SUNDAY: 					"Неділя",
			
			MON: 						"Пн.",
			TUES: 						"Вт.",
			WED: 						"Ср.",
			THUR: 						"Чт.",
			FRI: 						"Пт.",
			SAT: 						"Сб.",
			SUN: 						"Нед.",

			JAN: 						"Січень",
			FEB: 						"Лютий",
			MAR: 						"Березень",
			APR: 						"Квітень",
			MAY: 						"Травень",
			JUN: 						"Червень",
			JUL: 						"Липень",
			AUG: 						"Серпень",
			SEP: 						"Вересень",
			OCT: 						"Жовтень",
			NOV: 						"Листопад",
			DEC: 						"Грудень"

		},

		HOUR: {
			AM_1: 						"1 ранку",
			AM_2: 						"2 ранку",
			AM_3: 						"3 ранку",
			AM_4: 						"4 ранку",
			AM_5: 						"5 ранку",
			AM_6: 						"6 ранку",
			AM_7: 						"7 ранку",
			AM_8: 						"8 ранку",
			AM_9: 						"9 ранку",
			AM_10: 						"10 ранку",
			AM_11: 						"11 ранку",
			AM_12: 						"12 ранку",
			PM_1: 						"1 вечора",
			PM_2: 						"2 вечора",
			PM_3: 						"3 вечора",
			PM_4: 						"4 вечора",
			PM_5: 						"5 вечора",
			PM_6: 						"6 вечора",
			PM_7: 						"7 вечора",
			PM_8: 						"8 вечора",
			PM_9: 						"9 вечора",
			PM_10: 						"10 вечора",
			PM_11: 						"11 вечора",
			PM_12: 						"12 вечора"
		},

		ORDER: {
			"1ST": 						"Перший",
			"2ND": 						"2-й",
			"3RD": 						"3-й",
			"4TH": 						"4-й",
			"5TH": 						"Останній",
			"1ST_": 					"1-й",

			TH: 						"й"
		},

		GRID: {
			CLIENT_NUMBER: 				"Кількість клієнтів",

			ID: 						"ID",
			MODIFY: 					"Змінити",
			STATUS: 					"Статус",
			ENABLE: 					"Включити",

			OPERATION: 					"Операція",
			CHOOSE: 					"Обрати",
			DESCRIPTION: 				"Опис",
			

			AUTO_REFRESH: 				"Авто оновлення",
			REFRESH: 					"Оновити",
			NUMBER: 					"Число",
			ENABLED: 					"Увімкнуто",
			DISABLED: 					"Вимкнено",
			ACTIVE: 					"Активний",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Додати ",
			CHOOSE: 					"Обрати",
			EDIT: 						"Редагувати",
			DELETE: 					"Видалити",
			DELETE_ALL: 				"Видалити все",
			REMOVE: 					"Видалити",
			RESET: 						"Відмінити",
			RESET_ALL: 					"Відмінити все",
			DETECT: 					"Виявити",
			ENABLE: 					"Включити",
			DISABLE: 					"Відключити",
			CLEAR: 						"Очистити",

			REFRESH: 					"Оновити",
			SEARCH: 					"Знайти…",
			BROWSE: 					"Перегляд",

			SAVE: 						"Зберегти",
			BACK: 						"Назад",

			PREV: 						"Попередній",
			NEXT: 						"Далі ",
			FINISH: 					"Завершити",
			
			ON: 						"Увімкнено",
			OFF: 						"Вимкнено",
			LOW: 						"Низький ",
			MIDDLE: 					"Середній",
			HIGH: 						"Високий",
			
			OK: 						"ОК ",
			CANCEL: 					"Відмінити",

			YES: 						"Так",
			NO: 						"НІ",
			
			CONNECTED: 					"Підключено",
			CONNECTING: 				"Підключення",
			DISCONNECTING: 				"Відключення",
			DISCONNECTED: 				"Не підключено",

			PASSWORD_HINT: 				"Пароль",
			FILEBUTTONTEXT: 			"Перегляд",
			FILEBLANKTEXT: 				"Будь ласка оберіть файл.",
			NOSELECTEDTEXT: 			"Оберіть опції.",

			ADD_A_NEW_KEYWORD: 			"Додати Нове Ключове Слово",

			SUCCESSED: 					"Успішно!",
			FORM_SAVED: 				"Збережено",
			FORM_FAILED: 				"Помилка",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Збережено",
			GRID_FAILED: 				"Помилка",
			GRID_NONE_SELECT: 			"Будь ласка, оберіть хоча б один запис.",
			GRID_DELETE_COMFIRM: 		"Ви впевнені що хочете видалити ці записи?",
			GRID_DELETE_ALL_COMFIRM: 	"Ви впевнені, що хочете видалити всі записи?",
			GRID_MAX_RULES: 			"Перевищено максимальну кількість записів.",
			KEYWORD_MAX_OVERFLOW: 		"Кількість ключових слів перевищує допустимий ліміт.",

			NOTE: 						"Примітка:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Невірний формат.",
			BLANKTEXT: 					"Це поле є обов'язковим.",

			EMAIL: 						"Неправильний формат електронної пошти.",
			NUMBER: 					"Невірний формат.",

			NUMBER_MIN: 				"Неправильне значення, будь ласка, введіть число, більше, ніж %min.",
			NUMBER_MAX: 				"Неправильне значення, будь ласка, введіть число, менше, ніж %max.",

			NUMBER_MIN_MAX: 			"Невірне значення, будь ласка, введіть число в діапазоні між %min та %max.",
			HEX: 						"В цьому полі повинно бути шістнадцяткове число.",

			IP: 						"Невірний формат.",

			IP_NO_ALL_ZERO:				"Адреса не повинна бути 0.0.0.0.",
			IP_NO_LOOP:					"Адреса не повинна бути loopback IP адресую.",
			IP_NO_D_TYPE:				"Адреса не повинна бути класу D IP-адрес.",
			IP_NO_E_TYPE:				"Адреса не повинна бути класу D IP-адрес.",
			IP_NO_ALL_ONE:				"Адреса не повинна бути 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"Адреса не повинна починатися з 255.",
			IP_NO_FIRST_ZERO:			"Адреса не повинна починатися з 0.",
			MASK_NO_ALL_ONE:			"Маска не може бути 255.255.255.255.",

			IPV6: 						"Невірний формат.",
			IPV6_NOT_GLOBAL:			"Невірний формат.",
			IPV6_NOT_PREFIX:			"Невірний формат.",
			IP_DOMAIN: 					"Невірний формат.",
			IPV6_DOMAIN: 				"Невірний формат.",
			MAC: 						"Невірний формат.",
			MULTI_MAC:					"Невірний формат.",
			DATE: 						"Невірний формат.",
			DATE_INVALID: 				"Будь ласка, введіть дату між 01/01/1970 та 12/31/2030.",
			MASK: 						"Невірний формат.",
			DOMAIN: 					"Невірний формат.",
			STRING_DOMAIN:              "Невірний формат.",
			USER: 						"Невірний формат.",
			NOTE: 						"Невірний формат.",
			PWD: 						"Невірний формат.",
			SSID: 						"Невірний формат.",
			NAME:						"Невірний формат.",
			ASCII_VISIBLE:				"Невірний формат.",
			STRING_VISIBLE:				"Невірний формат.",
			STRING_VISIBLE_NO_COMMA:    "Невірний формат.",
			STRING_VISIBLE_ALLOW_BLANK: "Невірний формат.",
			NAME_SPECIAL: 				"Будь ласка, введіть від 4 до 15 символів, цифр, знаків тире \"-\" або підкреслень \"_\".",
			VPN_NAME_PWD: 				"Будь ласка, введіть від 1 до 15 символів, цифр, знаків тире \"-\" або підкреслень \"_\"."	
			
		},


		ERROR: {			
			"00000001":					"Невірний тип файлу.",
			"00000002":					"Помилка контрольної суми.",
			"00000003":					"Файл занадто великий.",
			"00000004":					"Помилка в завантаженні файлу.",
			"00000005":					"Помилка перезавантаження.",
			"00000006":					"Невідома помилка.",
			"00000007":					"Елемент вже існує. Будь ласка, введіть інший.",

			"00000009":					"Будь ласка, використовуйте значення за замовчуванням 21 або введіть значення між 1024 та 65535.",
			"00000010":					"Порт повинен бути числовим.",

			"00000011":					"Ім'я користувача має співпадати з.",
			"00000012": 				"Ім'я користувача повинно починатися з літери .",

			"00000021":					"Невірний формат.",

			"00000032": 				"Значення має бути менше, ніж Низьке .",
			"00000033": 				"Значення має бути менше, ніж у Середнє і Низьке.",
			"00000034": 				"Невірне значення, будь ласка введіть число між 5 та 7200.",

			"00000039": 				"Будь ласка, використовуйте значення за замовчуванням 0 або введіть значення між 30 і 86400.",
			"00000040": 				"Потрібні SSID та MAC-адреса .",

			"00000042": 				"Будь ласка, використовуйте значення за замовчуванням 80 або введіть значення між 1024 та 65535.",

			"00000045": 				"Шлюз за замовчуванням і LAN IP адреса повинна знаходитися в тій же підмережі. Будь ласка, введіть ще раз.",

			"00000047": 				"IP-адреса та LAN IP адреса повинна знаходитися в тій же підмережі, будь ласка, введіть ще раз.",

			
			"00000049":					"Мережа призначення не є дійсною.",

			"00000050": 				"Невірна IP-адреса DNS-сервера. Будь ласка, введіть іншу IP-адресу .",
			"00000051": 				"Ця MAC-адреса вже існує. Будь ласка, введіть іншу .",
			"00000052": 				"Цей IP-адреса вже існує. Будь ласка, введіть іншу.",

			"00000053": 				"Початкова адреса не повинна бути більше, ніж кінцева адреса. <br/>Будь ласка, введіть ще раз .",

			"00000054": 				"Пул IP-адреси та LAN IP-адреси повинні знаходитися в тій же підмережі. Будь ласка, введіть ще раз.",

			"00000055": 				"IP-адреса не може бути такою ж як  LAN IP-адреса",

			"00000056": 				"Віддалена IP-адреса та поточна LAN IP-адреса не повинні бути в тій же підмережі. Будь ласка, введіть іншу.",

			"00000057": 				"Невірний PSK Пароль, введіть, будь ласка ще раз.",
			"00000058": 				"Невірний WEP Пароль, введіть, будь ласка ще раз.",

			"00000059": 				"Невірна Маска підмережі і LAN IP-адреса, будь ласка введіть іншу.",

			"00000060": 				"WAN IP-адреса та LAN IP-адреса не можуть бути в тій же підмережі. <br/>Будь ласка, змініть її .",

			"00000061": 				"Час початку має бути раніше, ніж час закінчення.",

			"00000062": 				"Це поле є обов'язковим.",
			"00000063": 				"Це поле є обов'язковим.",

			"00000064": 				"Не можливо заблокувати MAC-адресу хоста.",
			"00000065": 				"Цей пункт суперечить перерахованим пунктам, будь ласка, перевірте .",
			
			"00000066": 				"Пароль повинен бути від 8 до 63 символів або 64 шістнадцяткових цифр.",
			"00000067": 				"Пароль повинен складатися з 10 шістнадцяткових цифр.,",
			"00000068": 				"Пароль повинен бути  5 символів ASCII.,",
			"00000069": 				"Пароль повинен складатися з 26 шістнадцяткових цифр.",
			"00000070": 				"Пароль повинен бути з 13 символів ASCII.",
			"00000071": 				"Пароль повинен бути з 32 шістнадцяткових цифр.",
			"00000072": 				"Пароль повинен бути 16 символів ASCII.",
			"00000073": 				"Пароль повинен бути не менше 64 символів.",

			"00000074": 				"Невірний тип файлу.",

			"00000075": 				"Довжина PIN повинна бути 8.",

			"00000076": 				"Конфлікт запису з існуючим пунктом, будь ласка, перевірте тригер порт і тригер протокол.",
			"00000077": 				"IP-адреса не може бути такою ж як LAN IP-адреса.",
			"00000078": 				"IP-адреса Хосту  не може бути такою ж як LAN IP-адреса .",

			"00000080": 				"Паролі не збігаються. Будь ласка, спробуйте ще раз.",

			"00000088": 				"Ця операція не можлива для віддаленого управління.",
			"00000089": 				"Ви перевищили %num спроб, спробуйте ще раз протягом двох годин.",

			"00000090": 				"Призначенням не може бути LAN IP-адреса .",
			"00000091": 				"Призначенням не може бути WAN IP-адреса",

			"00000092": 				"IP-адреса і LAN IP-адреса не повинні бути в тій же підмережі. <br/> Будь ласка, введіть ще раз.",
			"00000093": 				"WAN IP-адреса та LAN IP-адреса не можуть бути в тій же підмережі. <br/> Будь ласка, змініть її .",

			"00000094": 				"Ідентифікатори VLAN не можуть бути однаковими .",
			"00000095": 				"Принаймні, потрібен один Інтернет порт.",

			"00000096": 				"Ключове слово вже існує.",

			"00000097": 				"Зміни, внесені для частоти 2,4 ГГц, не вступлять в силу до тих пір, поки кнопка Wi-Fi увімкнена .",
			"00000098": 				"Зміни, внесені для частоти 2,4 ГГц, не вступлять в силу до тих пір, поки кнопка Wi-Fi не увімкнена.",
			"00000099": 				"Зміни, внесені для частот 2.4 ГГц і 5 ГГц не вступлять в силу до тих пір, поки кнопка Wi-Fi  увімкнена.",

			"00000100": 				"Конфігурація мережі з частотою 5 ГГц  не доступна через обмеження у вашому регіоні / країні.",

			"00000101": 				" Бездротова функція відключена. Якщо ви хочете використовувати цю функцію, будь ласка, натисніть кнопку вмикання Wi-Fi.",
			"00000102": 				" Бездротова функція відключена. Якщо ви хочете використовувати цю функцію, будь ласка, натисніть кнопку вмикання Wi-Fi.",

			"00000103": 				" Бездротова функція відключена. Якщо ви хочете використовувати цю функцію, будь ласка, натисніть кнопку вмикання Wi-Fi.",
			"00000104": 				"Функція бездротової мережі відключена.",

			"00000105": 				"QoS і IPTV не можуть бути увімкнені в один і той же час.",

			"00000106": 				"IP-адреса не може бути такою ж як LAN IP-адреса.",
			
			"00000107": 				"Призначення вже існує .",

			"00000110": 				"IP-адреса і LAN IP-адреса повинні знаходитися в тій же підмережі .",
			
			"00000111": 				"QoS та <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\"> NAT Boost </a>не можуть бути увімкнені одночасно.",
			"00000112": 				"Функція WDS може працювати тільки на частоті 2.4 ГГц або 5 ГГц. Крім того, гостьова мережа не доступна на WDS.",
			"00000113": 				"WDS та гостьова мережа не можуть бути включені одночасно .",
			"00000114": 				"Статистика по трафіку і <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\"> NAT Boost </a>не можуть бути увімкнені одночасно \".",
			"00000115": 				"IPTV і <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> не можуть бути увімкнені в один і той же час.",

			"00000117": 				"Доменне ім'я вже існує .",
			"00000118": 				"Кількість доменних імен перевищило межу.",
			"00000119":				"NAT Boost буде автоматично відключений якщо <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\"> QoS</a>або<a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Статистика Трафіку</a>увімкнені",

			"00000120": 				"Пароль повинен складатися з 5 або 13 ASCII символів ",
			"00000121": 				"Пароль повинен складатися з 10 або 26 шістнадцяткових цифр.",
			"00000122": 				"Ім'я користувача і пароль порожні, ви впевнені, що хочете продовжити?",
			"00000123": 				"Збереження ... <br/>Будь ласка, не працюйте під час процесу.",
			"00000124": 				"PIN маршрутизатора заблокований через багаторазові з'єднання з використанням неправильного PIN-коду. Будь ласка, згенеруйте новий.",

			"00000125": 				"Кількість правил QoS перевищує межу.",
			"00000126": 				"Розмір файлу перевищує допустиму межу.",
			"00000127": 				"Вміст файлу не правильний.",
			"00000128": 				"Будь ласка оберіть хоча б одну програму.",
			"00000129": 				"Будь ласка оберіть хоча б один фізичний порт.",
			"00000130":					"Ваша функція WPS вимкнена.",
			"00000131": 				"NTP-сервер не повинен мати loopback адресу.",
			"00000132": 				"Перемкнути режим не вдалося. Будь ласка, спробуйте пізніше або перезавантажити маршрутизатор.",
			"00000133": 				"Невірна DMZ Хост IP-адреса. Будь ласка, введіть правильну.",
			"00000134":  				"Невірна Внутрішня IP-адреса. Будь ласка, введіть правильну.",
			"00000135": 				"Помилка файлу прошивки.",
			"00000136": 				"Помилка файлу резервного копіювання.",
			"00000137": 				"Ім'я користувача не заповнено, ви впевнені, що хочете продовжити?",
			"00000138": 				"Пароль не заповнено, ви впевнені, що хочете продовжити?",
			"00000139": 				"Неправильні параметри відновлення пароля.",
			"00000140": 				"Невірний код.",
			"00000141": 				"Відновлення пароля відключено.",
			"00000142": 				"Не вдалося відправити код. Будь ласка, перевірте підключення до Інтернету.",
			"00000143": 				"Невірні адреси електронної пошти.",
			"00000144": 				"Невірне повідомлення електронної пошти.",
			"00000145": 				"Не вдалося знайти пристрій.",
			"00000146": 				"Помилка автентифікації.",
			"00000147": 				"Порт повинен бути між 1 і 65535.",
			"00000148": 				"У діапазоні портів, значення  початкового порту  має бути меншим ніж  у  кінцевого порту. Будь ласка, спробуйте ще раз.",
			"00000149": 				"Значення портів пересікається. Будь ласка, спробуйте ще раз.",
			"00000150": 				"Невірна Маска підмережі і WAN IP-адреса, будь ласка введіть іншу.",
			"00000151": 				"Будь ласка, оберіть хоча б один день.",
			"00000152": 				"Будь ласка, встановіть час доступу в Інтернет.",
			"00000213":					"LAN та DNS IP адреси не можуть знаходитись в одній підмережі. <br/>Будь ласка, введіть іншу.",
			"10000139": 				"Немає з'єднання з Інтернетом ",
			"10000140": 				"Час запиту вже сплив. Будь ласка, перевірте Ваше з'єднання з Інтернетом та повторіть спробу пізніше.",
			"10000158": 				"Порт WAN відключений.",
			"10000159": 				"Не вдається встановити з'єднання з Інтернетом. Будь ласка, зв'яжіться з Вашим Інтернет-провайдером або повторіть спробу пізніше.",
			"10000160": 				"Не вдається отримати IP-адресу від DHCP-сервера. Будь ласка, перевірте тип з'єднання WAN або повторіть спробу пізніше.",
			"10000161": 				"Помилка автентифікації через протокол PPPoE. Будь ласка, перевірте ім'я користувача та пароль.",
			"10000162": 				"Не вдається підключитися до PPPoE-сервера.",

			"10000164": 				"Помилка автентифікації через протокол PPTP. Будь ласка, перевірте ім'я користувача та пароль.",
			"10000165": 				"Не вдається підключитися до PPTP-сервера.",

			"10000167": 				"Помилка автентифікації через протокол L2TP. Будь ласка, перевірте ім'я користувача та пароль.",
			"10000168": 				"Не вдається підключитися до L2TP-сервера.",
			"10000169": 				"Невідома помилка. Будь ласка, спробуйте знов пізніше.",
			"10000172": 				"Помилка підключення.",

			"10000185": 				"Системна помилка.",	
			"10000186": 				"Помилка файлу прошивки.",	
			"10000187": 				"Помилка під час завантаження прошивки.",	
			"10000188": 				"Помилка під час оновлення прошивки.",	
			"10000191": 				"Не вдається завантажити файл прошивки.",
			"10000192": 				"Помилка під час оновлення прошивки.",
			"10000193": 				"Не вдається підключитися до сервера.",	
			"10000194": 				"Неможливо підключитись до Хмарного серверу. Будь ласка, спробуйте ще раз пізніше.",
			"10000195": 				"Ви не можете встановити ще один пароль, тому що пароль вже становлено.",
			
			"E3002":                    "Тайм аут запиту.", 
			"E10000": 					"Звичайна помилка. ",
			"E20002": 					"Тайм аут запиту.",
			"E20003": 					"Хмаровий Сервер зайнято. Будь ласка, спробуйте пізніше.",
			"E20107": 					"Невірні дані.",
			"E20200": 					"Неправильний формат електронної пошти.",
			"E20502": 					"Неможливо підключити пристрій. Будь ласка, спробуйте пізніше.",
			"E20503": 					"Неможливо відключити пристрій. Будь ласка, спробуйте пізніше.",
			"E20506": 					"Помилка. Цей пристрій вже пов'язано з іншим хмаровим обліковим записом. ",
			"E20507": 					"Цей пристрій видалено з облікового запису.",
			"E20508": 					"Дозволена кількість пов'язаних облікових записів досягла ліміту.",
			"E20509": 					"Обліковий запис користувача не дає права приєднувати нових користувачів.",
			"E20571": 					"Цей пристрій знаходиться не в мережі.",
			"E20580": 					"Помилка. Цей пристрій незв'язаний з даним обліковим записом.",
			"E20600": 					"Ця електрона пошта не зареєстрована.",
			"E20601": 					"Невірне ім'я користувача чи пароль.",
			"E20602": 					"Цей обліковий запис поки не активовано.",
			"E20603": 					"Ця електрона адреса вже зареєстрована.",
			"E20604": 					"Невірне ім'я користувача. Будь ласка, введіть електрону пошту або номер телефону.",
			"E20606": 					"Неможливо надіслати листа з інформацією по активації.",
			"E20615": 					"Невірний пароль. Будь ласка, введіть від 6 до 32 символів без пробілу.",
			"E20616": 					"Невірний пароль. Будь ласка, введіть від 6 до 32 символів без пробілу.",
			"E20617": 					"Даний обліковий запис не існує.",
			"E20618": 					"Даний обліковий запис не існує.",
			"E20620": 					"Невірний псевдонім (nickname). Будь ласка, введіть від 1 до 64 символів.",
			"E20661": 					"Даний обліковий запис буде заблоковано на 2 години, через надмірну кількість спроб авторизації (20 раз за півгодини).",
			"E20662": 					"Даний пристрій заблоковано. Наступні 24 години, пристрій не буде відповідати на запит коду верифікації. ",
			"E20671": 					"Неможливо перевірити обліковий запис.",
			"E20672": 					"Неможливо перевірити обліковий запис. Час дії посилання для активації облікового запису сплинув. Будь ласка, виконайте новий запит.",
			"E20673": 					"Час дії посилання на встановлення нового паролю сплинув. Будь ласка, надішліть новий запит.",
			"E20674": 					"Неможливо скинути пароль.",
			"E20675": 					"Даний обліковий запит, в даний момент, відкрито в іншому місці.",
			"E22000": 					"Невірні дані.",
			"E22001": 					"Домене ім'я вже зареєстроване. ",
			"E22002": 					"Дозволена кількість зареєстрованих доменних імен вже досягла ліміту. ",
			"E22003": 					"Кількість пов'язаних доменних імен досягла максимально дозволеної кількості.",
			"E22004": 					"Дане доменне ім'я вже прив'язане до іншого пристрою. ",
			"E22006": 					"Помилка системи. Будь ласка, спробуйте ще раз пізніше.",
			"E22007": 					"Ім'я доменну містить недопустимі слова. Будь ласка, спробуйте інше ім’я.",
			"E22008": 					"Імені домену не існує.",

			"E50101": 					"Порт WAN відключений.",
			"E50102": 					"Неможливо підключитись до Інтернету. Будь ласка, зв'яжіться з Вашим постачальником послуг чи спробуйте ще раз пізніше.",
			"E50103": 					"Не вдається отримати IP-адресу від DHCP-сервера. Будь ласка, перевірте тип з'єднання WAN або повторіть спробу пізніше.",
			"E50111": 					"Помилка автентифікації через протокол PPPoE. Будь ласка, перевірте ім'я користувача та пароль.",
			"E50112": 					"Не вдається підключитися до PPPoE-сервера.",
			"E50121": 					"Помилка автентифікації через протокол PPTP. Будь ласка, перевірте ім'я користувача та пароль.",
			"E50122": 					"Не вдається підключитися до PPTP-сервера.",
			"E50131": 					"Помилка автентифікації через протокол L2TP. Будь ласка, перевірте ім'я користувача та пароль.",
			"E50132": 					"Не вдається підключитися до L2TP-сервера.",
			"E50140": 					"Невідома помилка. Будь ласка, спробуйте знов пізніше.",
			"E51215": 					"Час запиту вже сплив. Будь ласка, перевірте Ваше з'єднання з Інтернетом та повторіть спробу пізніше.",
			"E_CLOUD_SERVER": 			"Помилка Сервера. Будь ласка, спробуйте пізніше.",
			"E5000": 					"Неможливо підключитись до хмарного серверу.",
			"E5001": 					"Неправильний TP-Link ID (електрона адреса). Або Ваш пристрій не в мережі, лише admin (%email) дає можливість офлайн доступу.",
			"E5002": 					"Неправильний пароль."
		},

		MENU: {
			STATUS: 					"Статус",
			NETWORK: 					"Мережа",
			NETWORK_MAP: 				"Карта мережі",
			INTERNET: 					"Інтернет",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP Сервер",
			DYNAMIC_DNS: 				"Динамічний DNS",
			ADVANCED_ROUTING: 			"Розширена Маршрутизація",

			WIRELESS: 					"Бездротова мережа",
			WIRELESS_SETTINGS: 			"Налаштування Бездротової Мережі",
			WDSBRIDGING: 				"WDS міст",
			WPS: 						"WPS",
			MACFILTERING: 				"МАС фільтрування",
			WIRE_STATISTICS: 			"Статистика",
			
			
			GUEST_NETWORK: 				"Гостьова мережа",
			WIRELESS_SETTINGS: 			"Налаштування Бездротової Мережі",
			STORAGE_SHARING: 			"Загальний доступ до сховища",
			NAT_FORWARDING: 			"NAT Переадресація",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Віртуальні сервери",
			PORT_TRIGGERING: 			"Порт Триггерінг",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"USB налаштування",
			BASIC_SET: 					"Загальні налаштування",
			DISK_SET: 					"Налаштування Пристрою",
			FOLDER_SHARING: 			"Загальний доступ",
			STORAGE_SHARING: 			"Загальний доступ до сховища",
			FTP_SERVER: 				"FTP Сервер",
			MEDIA_SERVER: 				"Медіа Сервер",
			PRINT_SERVER: 				"Сервер друку",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Батьківський контроль",
			
			QOS:  						"QoS",
			DATABASE:  					"База даних",

			STREAMBOOST: 				"Посилення Потоку",
			MAP: 						"Карта",
			SB_MAP: 					"Карта",
			SB_BANDWIDTH:  				"Ширина смуги",
			SB_PRIORITY: 				"Пріоритет",
			SB_STATISTICS: 				"Статистика",

			
			SECURITY: 					"Безпека",
			SETTINGS: 					"Налаштування",
			ACCESS_CONTROL: 			"Контроль доступу ",
			IP_MAC_BINDING: 			"IP та MAC Прив'язка",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Системні Інструменти",
			TIME_SETTINGS: 				"Налаштування часу",
			DIAGNOSTIC: 				"Діагностика",
			FIRMWARE_UPGRADE: 			"Оновлення Програмного Забезпечення",
			BACKUP_RESTORE: 			"Резервне копіювання і Відновлення",
			ADMINISTRATION: 			"Адміністрування",
			SYSTEM_LOG: 				"Системний журнал",
			STATISTICS: 				"Статистика Трафіку",
			SYSTEM_PARAMETERS: 			"Системні Параметри",
			ACCOUNT: 					"TP-Link Хмара",
			
			VPN: 						"VPN Сервер",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"VPN З'єднання"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Регіон та Часовий пояс",
			INTERNET_CONNECTION_TYPE: 	"Тип підключення до Інтернету",
			WIRELESS_SETTINGS: 			"Налаштування Бездротової Мережі",
			SUMMARY: 					"Загалом",
			SETUP_COMPLETE: 			"Тестування підключення до Інтернету",
			SETUP_COMPLETE_CLOUD: 			"Хмарний Сервіс TP-Link",

			EXIT: 						"Вихід",
			NEXT: 						"Далі ",
			SAVE: 						"Зберегти",
			FINISH: 					"Завершити",
			OK: 						"ОК ",
			NONE: 						"Виявлення не вдале",

			REGION: 					"Регіон",
			TIME_ZONE: 					"Часовий пояс",

			AUTO_DETECT: 				"Автоматичне виявлення",
			DYNAMIC_IP: 				"Динамічна IP-адреса",
			STATIC_IP: 					"Статична IP-адреса",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: " Якщо ви не впевнені, який тип підключення до Інтернету реалізовано у вас, спробуйте використати функцію Автоматичне виявлення або зверніться до постачальника послуг Інтернету (ISP) для отримання цієї інформацію.",

			DYNAMIC_IP_INFO: 			"Якщо ваш провайдер дозволяє доступ до Інтернету тільки по певній MAC адресі, ви повинні зробити клон MAC-адреси, щоб забезпечити доступ до інтернету. Якщо ви не впевнені, оберіть Не клонувати MAC-адресу.",
			MAC_CLONE_NO: 				"НЕ Клонувати MAC-адресу",
			MAC_CLONE_YES: 				"Клонувати MAC-адресу Поточного Комп'ютера",
			MAC_CLONE_NOTE: 			" Якщо ви оберете Клонування MAC адреси. Будь ласка, переконайтеся, що MAC-адреса цього комп'ютера зареєстрована на обладнанні провайдера перед тим як натиснете кнопку Далі.",

			PPPOE_INFO: 				"Будь ласка, введіть ваш логін та пароль PPPoE.",
			
			STATIC_IP_INFO: 			"Будь ласка, введіть свої дані IP.",

			L2TP_INFO: 					"Будь ласка, введіть L2TP ім'я користувача та пароль.",
			PPTP_INFO: 					"Будь ласка, введіть PPTP ім'я користувача та пароль.",
			
			USERNAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			SERVER_IP_ADDRESS_NAME: 	"VPN-сервер IP-адреса / Доменне Ім'я",
			IP_ADDRESS: 				"IP-адреса",
			SUBNET_MASK: 				"Маска підмережі",
			DEFAULT_GATEWAY: 			"Шлюз за замовчуванням",
			PRIMARY_DNS: 				"Первинний DNS",
			SECOND_DNS: 				"Вторинний DNS",
			OPTIONAL: 					"(Опційно)",
			
			ON: 						"Увімкнено",
			OFF: 						"Вимкнено",
			WIRELESS_24GHZ: 			"Бездротова  мережа 2.4ГГц",
			WIRELESS_5GHZ: 				"Бездротовамережа 5 ГГц",
			ENABLE_WIRELESS_RADIO: 		"Увімкнути бездротовий сигнал",
			NAME_SSID: 					"Ім'я бездротової мережі (SSID)",

			SUMMARY_INFO1: 				"Ви повинні перепідключити ваші бездротові пристрої до нової бездротової мережі, перш ніж натиснути кнопку <strong>Далі</strong>.",
			SUMMARY_INFO2: 				"Ваше ім'я бездротової мережі та пароль було змінено, як показано нижче",
			SUMMARY_INFO3: 				"Переконайтеся, що ви підключилися до нової бездротової мережі.",

			WIRELESS_24GHZ_SSID: 		"Ім'я Бездротової мережі 2.4 ГГц (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	" Пароль Бездротової мережі 2.4 ГГц (SSID)",
			WIRELESS_5GHZ_SSID: 		"Ім'я Бездротової мережі 5 ГГц (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Пароль Бездротової мережі 5 ГГц (SSID)",

			SORRY: 						"Помилка.",
			SUCCESS: 					"Успішно!",
			TEST_INTERNET_SUCCESS_INFO: "Натисніть кнопку Завершити, щоб завершити процес швидкого налаштування.",

			TEST_INTERNET_FAILED_INFO_0:"Будь ласка, переконайтеся, що всі параметри Швидкого Налаштування вірні, і спробуйте ще раз. Якщо всі параметри Швидкого Налаштування вірні. Будь ласка, перезавантажте ваш модем, зачекайте 2 хвилини, і натисніть кнопку Перевірити Підключення до Інтернету ще один раз. Якщо ви не використовуєте модем, Вам можливо буде потрібно звернутися до постачальника послуг Інтернету (ISP) для отримання допомоги.",
			TEST_INTERNET_FAILED_INFO_1: "Ой… Не вдалось встановити Інтернет з'єднання. <br />1. Впевніться, що всі кабелі правильно підключені.<br />2. Натисніть Назад (Back) та перевірте чи правильно введена інформація по підключенню до Інтернету. <br />3. Якщо проблему не вирішено, зверніться до нашої Служби Технічної Підтримки.",
			SUMMARY_INFO4: 				"Вибачте! Ми виявили, що ви не перепідключилися вашими бездротовими пристроями до нової бездротової мережі. Будь ласка, зробіть це, а потім натисніть <strong> OK<strong>.",
                                         
			CONGRATULARIONS: 			"Поздоровляємо!",
			COMPLETE_INFO_0: 			"Ви завершили процес Швидкого Налаштування.",
			COMPLETE_INFO_1:			"Натисніть Тестування підключення до Інтернету нижче, а потім натисніть кнопку Готово.",
			COMPLETE_INFO_2: 			"Ви не авторизовані у Вашому хмарному обліковому записі TP-Link. Ви можете авторизуватись пізніше з меню: Основне (Basic) > Хмара TP-Link (TP-Link Cloud). ",
			TEST_INTERNET: 				"Тестування підключення до Інтернету",

			
			RESET_USER_TITLE: 			"Встановіть нового користувача та пароль.",
			NEW_USERNAME: 				"Нове Ім'я користувача",
			NEW_PASSWORD: 				"Новий пароль",
			CONFIRM_PASSWORD: 			"Підтвердить Новий Пароль",
			
			NO_ACCOUNT: 				"Не маєте TP-Link ID?",
			REGISTER_NOW: 				"Зареєструватись Зараз",
			REGISTER_SKIP: 				"Авторизуватись пізніше",
			LOGIN: 						"Авторизуватись",
			REGISTER_NEW:				"Зареєструвати Новий Обліковий Запис",
			COMPLETE_INFO_EMAIL_PREFIX: "Ваш TP-Link ID:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Ми наполегливо рекомендуємо Вам авторизуватись використовуючи цей обліковий запис для зручного керування Вашим пристроєм та для доступу до більшої кількості функцій  сервісу TP-Link Хмара.",

			INTERNET_OK: 				"Поздоровляємо! Мережа успішно встановлена. Насолоджуйтесь  Інтернетом.",
			CLOUD_WIZARD: 				"Щоб отримати більше функцій у TP-Link Хмара, будь ласка, авторизуйтесь у Вашому <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "З TP-Link ID Ви можете:", 
			ACCOUNT_DESP_SUB1:          "Отримати доступ на Ваш пристрій та локальні (FTP, HTTP та інші) сервери будь де через Інтернет.",
			ACCOUNT_DESP_SUB2:          "Ваше ПЗ буде завжди найновішої версії завдяки функції Онлайн Оновлення (Online Upgrade)",
	        ACCOUNT_DESP_SUB3:          "Керувати багатьма пристроями використовуючи один обліковий запис",
			
			CONFIRM: 					"Підтвердити"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Інтернет",
			INTERNET_STATUS:			"Статус Інтернет",

			GHZ24: 						"2.4 ГГц",
			GHZ5: 						"5 ГГц",
			
			CONNECTION_TYPE: 			"Тип з'єднання",
			SECONDARY_CONN: 			"Вторинне з'єднання",

			POOR_CONNECTED: 			"Погане з'єднання",
			UNPLUGGED: 					"Від'єднано",
			
			CONNECTED: 					"Підключено",
			DISCONNECTED: 				"Відключено",

			INTERNET_IP_ADDR: 			"IP-адреса",
			
			IP_ADDR: 					"IP-адреса",
			MAC_ADDR: 					"MAC-адреса",
			GATEWAY: 					"Шлюз",

			AUTO: 						"Авто",
			
			ROUTER: 					"Маршрутизатор",
			WIRELESS_CLIENTS: 			"Бездротовий клієнт",
			HOST_CLIENTS: 				"Хост клієнти",
			GUEST_CLIENTS: 				"Гостьові клієнти",
			WIRE_CLIENTS: 				"Дротовий клієнт",
			PRINTER: 					"Принтер",
			USB_DISK: 					"USB накопичувач",
			WIRELESS: 					"Бездротова мережа",
			NAME: 						"Ім'я",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Канал",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Бездротова  мережа 2.4ГГц",
			WIRELESS_5GHZ: 				"Бездротовамережа 5 ГГц",
			
			GUEST_24GHZ: 				"Гостьова мережа 2.4 ГГц",
			GUEST_5GHZ: 				"Гостьова мережа 5 ГГц",
			
			STATUS: 					"Статус",
			TOTAL: 						"Загально",
			AVAILABLE: 					"Доступно",
			GB: 						"Гб",
			BRAND: 						"Бренд",

			DYNAMIC_IP: 				"Динамічна IP-адреса",
			STATIC_IP: 					"Статична IP-адреса",
			SUBNET_MASK: 				"Маска підмережі",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Кабель",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Тунель 6to4",
			NONE: 						"Немає"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Інтернет",
			AUTO_DETECT: 				"Автоматичне виявлення",
			INTERNET_CONN_TYPE: 		"Тип підключення до Інтернету",
			DYNAMIC_IP: 				"Динамічна IP-адреса",
			STATIC_IP: 					"Статична IP-адреса",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond Кабель",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"Від'єднано",
			NONE: 						"Немає",
			DETECT_FAIL: 				"Автоматичне виявлення не вдалося",
			SECONDARY_CONN: 			"Вторинне з'єднання",

			DYNAMIC_YES: 				"НЕ Клонувати MAC-адресу",
			DYNAMIC_NO: 				"Клонувати MAC-адресу Поточного Комп'ютера",
			
			IP_ADDR: 					"IP-адреса",
			SUBNET_MASK: 				"Маска підмережі",
			DEFAULT_GATEWAY: 			"Шлюз за замовчуванням",
			PRIMARY_DNS: 				"Первинний DNS",
			SECOND_DNS: 				"Вторинний DNS",
			OPTIONAL: 					"(Опційно)",
			USER_NAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			SERVER_IP_ADDR_NAME: 		"VPN-сервер IP-адреса / Доменне Ім'я",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						" Якщо ви не впевнені, який тип підключення до Інтернету реалізовано у вас, спробуйте використати функцію Автоматичне виявлення або зверніться до постачальника послуг Інтернету (ISP) для отримання цієї інформацію."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Налаштування Бездротової Мережі",
			MODE_2G: 					"Бездротова  мережа 2.4ГГц",
			MODE_5G: 					"Бездротовамережа 5 ГГц",
			WIRELESS_NETWORK_NAME: 		"Ім'я бездротової мережі (SSID)",
			WIRELESS_PASSWORD: 			"Пароль",
			ENABLE_WIRELESS: 			"Увімкнути бездротовий сигнал",
			SAVE: 						"Зберегти",
			ENCRYPTION_2G_NOTICE:		"Шифрування 2.4ГГц є  %s.",
			ENCRYPTION_5G_NOTICE:		"Шифрування 5ГГц є  %s.",
			ENCRYPTION_2G_NO: 			"2.4 ГГц бездротова мережа не захищена.",
			ENCRYPTION_5G_NO: 			"5 ГГц бездротова мережа не захищена.",
			ENCRYPTION_SURE: 			"Ви впевнені, що хочете продовжити?",

			HIDE_SSID: 					"Приховати SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Загальні налаштування",
			TITIL_NEW:					"Диск та Обліковий запис ",
			DISK_SET:					"Налаштування Пристрою",

			SELFLY_REMOVE:				"Безпечне від'єднання",
			SCANING:					"Сканування…",
			SCAN_RESULT:				"Знайдено %n дисків",
			
			DISKS:						"Диски",
			USERS: 						"Обліковий запис користувача",
			DEVICENAME: 				"Ім'я пристрою",
			VOLUMN: 					"Том",

			USBSPACE: 					"Використане Місце",
			FREESPACE: 					"Вільне місце",
			STATUS: 					"Статус",
			INACT: 						"Не активний",
			USAGE: 						"Використання",
			CAPACITY: 					"Ємність",
			OPERATION: 					"Операція",
			
			ACC: 						"Менеджмент доступу до пристрою",
			USERNAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			USE_LOGIN: 					"Використовувати Логін користувача",
			SCAN: 						"Сканування",
			ENJECT_ALL: 				"Звільнити Всі",
			ENJECT: 					"Звільнити Всі",
			ADD_USER: 					"Додати Користувача",
			AUTH: 						"Пріоритет",


			LOCATION: 					"Розміщення",
			MOBILE_ISP: 				"Мобільний Провайдер",
			DIAL_NUMBER: 				"Номер Набору",
			APN: 						"APN",
			USERNAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			MTU_SIZE: 					"Розмір MTU (в байтах)",
			OPTIONAL: 					"(Опційно)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Батьківський контроль",

			DEVICE_CTR: 				"Пристрої під батьківським контролем",
			ID: 						"ID",
			DEVICE: 					"Ім'я пристрою",
			MAC_ADDRESS: 				"MAC-адреса",
			TIME: 						"Час доступу в Інтернет",
			DESCRIPTION: 				"Опис",
			ENABLE: 					"Увімкнути цей запис",
			ENABLE_THIS_ENTRY: 			"Увімкнути цей запис",
			OPTIONAL: 					"(Опційно)",
			BTN_VIEW: 					"Подивитися Існуючі Пристрої",
			ACCESS_DEVICES_LIST: 		"Список Пристроїв",
			OPT: 						"Операція",
			STATUS: 					"Статус"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Гостьова мережа",
			MODE_2G: 					"Бездротова  мережа 2.4ГГц",
			MODE_5G: 					"Бездротовамережа 5 ГГц",
			WIRELESS_NETWORK_NAME: 		"Ім'я бездротової мережі (SSID)",
			WIRELESS_PASSWORD: 			"Пароль",
			ENABLE_WIRELESS: 			"Увімкнути Гостьову мережу",
			SAVE:						"Зберегти",
			HIDE_SSID: 					"Приховати SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Хмарний обліковий запис",
			OFFLINE_NOTE_TITLE: 		"Пристрій не в мережі",
			LOGIN_NOTE_TITLE: 			"Ой…",
			LOGIN_OFFLINE_NOTE: 		"Пристрій не в мережі. Будь ласка, перевірте WAN та мережеві налаштування, щоб упевнитись, що відповідні налаштування введені правильно.",

			EMAIL: 						"Електрона пошта",
			PASSWORD: 					"Пароль",
			FORGET_PASSWORD: 			"Забули пароль?",

			CLOUD_WIZARD: 				"Щоб отримати більше функцій у TP-Link Хмара, будь ласка, авторизуйтесь у Вашому <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"Не маєте TP-Link ID?",
			REGISTER_NOW: 				"Зареєструватись Зараз"
		},
		STATUS: {
			TITLE: 						"Статус",
			INTERNET:					"Інтернет",
			WIRELESS:					"Бездротова мережа",
			LAN:						"LAN",
			USB_TITLE:					"USB пристрої",
			PERFORMANCE: 				"Продуктивність",
			GUEST_NETWORK: 				"Гостьова мережа",
			ACCESS_DEVICES: 			"Доступ пристроїв",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4 ГГц",
			HZ5G: 						"5 ГГц",

			CONNECTION_TYPE: 			"Тип з'єднання",

			MAC_ADDRESS: 				"MAC-адреса",
			IP_ADDRESS: 				"IP-адреса",
			RELEASE: 					"Звільнити",
			RENEW: 						"Оновити",
			
			DYNAMIC_IP: 				"Динамічна IP-адреса",
			STATIC_IP: 					"Статична IP-адреса",
			SUBNET_MASK: 				"Маска підмережі",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Кабель",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Тунель 6to4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass Through (міст)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Немає",
			
			DEFAULT_GATEWAY: 			"Шлюз за замовчуванням",
			DNS: 						"DNS Сервер",
			MAC: 						"MAC-адреса",
			WDS_STATUS: 				"WDS статус",
			
			IPV6_ADDRESS: 				"IP-адреса",
			PRIMARY_DNS: 				"Первинний DNS",
			SECOND_DNS: 				"Вторинний DNS",

			RADIO: 						"Бездротовий сигнал",

			NAME_SSID: 					"Ім'я мережі (SSID)",
			NETWORK_NAME_SSID:			"Ім'я бездротової мережі (SSID)",
			HIDE_SSID: 					"Приховати SSID",
			MODE: 						"Режим",
			CHANNEL: 					"Канал",
			CHANNEL_WIDTH: 				"Ширина каналу",
			AUTO: 						"Авто",
			CURRENT_CHANNEL: 			"Поточний Канал",

			WDS: 						"WDS статус",
			WIRED_CLIENTS: 				"Дротовий клієнт",
			WIRELESS_CLIENTS: 			"Бездротовий клієнт",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Адреса в локальній мережі",
			ASSIGN_TYPE: 				"Асоційований Тип",

			ALLOW_TO_SEE_EACH: 			"Дозволити гостям бачити один одного",

			TOTAL: 						"Загально:",
			AVAILABLE: 					"Доступно:",

			USB: 						"USB накопичувач",
			PRINTER: 					"Принтер",

			CPU_LOAD: 					"Завантаження процесора",
			MEMORY_USAGE: 				"Використання пам'яті",

			IP_ADDR_P: 					"IP-адреса:",
			MAC_ADDR_P: 				"MAC-адреса:",
			CONN_TYPE_P: 				"Тип з'єднання:",

			DISABLED: 					"Вимкнено",
			INIT: 						"Ініц.",
			SCAN: 						"Сканування",
			AUTH: 						"Автент.",
			ASSOC: 						"Ассоц.",
			RUN: 						"Запуск",
			HOST: 						"Хост",
			GUEST: 						"Гість",

			ON: 						"Увімкнено",
			OFF: 						"Вимкнено"
		},

		INTERNET: {
			TITLE: 						"Інтернет",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Тип підключення до Інтернету",
			INTERNET_MAC_ADDRESS: 		"MAC-адреса",
			
			CONNECT: 					"З'єднати",
			DISCONNECT: 				"Роз'єднати",
			
			IP_ADDR: 					"IP-адреса",
			
			USE_DEFAULT_MAC: 			"Використовувати MAC-адресу за замовчуванням",
			USE_COMPUTER_MAC: 			"Використовувати MAC-адресу цього комп'ютера",
			USE_CUSTOM_MAC: 			"Використовувати іншу MAC-адресу",
			MAC_CLONE: 					"Клонування МАС адреси",
			
			CONFIG: 					"Конфігурування",
			
			IP_ADDRESS: 				"IP-адреса",
			SUBNET_MASK: 				"Маска підмережі",
			DEFAULT_GATEWAY: 			"Шлюз за замовчуванням",
			
			MANUAL_DNS: 				"Керівництво DNS",
			PRIMARY_DNS: 				"Первинний DNS",
			SECOND_DNS: 				"Вторинний DNS",
			
			RENEW: 						"Оновити",
			RELEASE: 					"Звільнити",
			VIEW_MODE: 					"Режим Відображення",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Отримати динамічно від провайдера ",
			USE_FOLLOW_IP_ADDR: 		"Використати наступну IP-адресу",
			USE_FOLLOW_DNS_ADDR: 		"Використати наступні DNS-адреси",
			USE_FOLLOW_DNS_SERVER: 		"Використовуйте наступну адресу DNS сервера",
			
			BASIC: 						"Основі",
			ADVANCED: 					"Додатково",
			
			DNS_ADDR_MODE: 				"Адреса DNS",
			MTU_SIZE: 					"Розмір MTU",
			MTU_1500: 					"байт. (За замовчуванням 1500, не змінювати, якщо це не необхідно.)",
			MTU_1480: 					"байт. (За замовчуванням 1480, не змінювати, якщо це не необхідно.)",
			MTU_1460: 					"байт. (За замовчуванням 1460, не змінювати, якщо це необхідно.)",
			MTU_1420: 					"байт. (За замовчуванням 1420, не змінювати, якщо це необхідно.)",
			
			HOST_NAME: 					"Ім'я хоста",

			HOST_NAME_CONFIRM: 			"Ім'я хоста містить неприпустимі символи, які можуть викликати некоректну роботу системи. Ви впевнені, що хочете продовжити?",

			GET_IP_WITH_UNICAST_DHCP: 	"Отримати IP-адресу, використовуючи Unicast DHCP-сервер (зазвичай це не потрібно.)",
			OPTIONAL: 					"(Опційно)",
			
			STATIC_IP: 					"Статична IP-адреса",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			
			INTERNET_IP_ADDR: 			"IP-адреса",
			INTERNET_DNS: 				"Інтернет DNS",
			SECONDARY_CONN: 			"Вторинне з'єднання",
			NONE: 						"Немає",
			INTERNET_PRIMARY_DNS:		"Первинний DNS",
			INTERNET_SECONDARY_DNS: 	"Вторинний DNS",
			
			DYNAMIC_IP: 				"Динамічна IP-адреса",
			DYNAMIC_IP_v6: 				"Динамічний IP (SLAAC / DHCPv6)",
			STATIC_IP: 					"Статична IP-адреса",
			SERVICE_NAME: 				"Ім'я служби",
			ACCESS_CONCENTRATOR_NAME:  	"Ім'я Концентратору Доступу",
			DETECT_ONLINE_INTERVAL: 	"Інтервал Виявлення Онлайн",
			INTERVAL_TIPS: 				"секунд. (0-120. За замовчуванням 10.)",
			IP_ADDR_MODE:  				"IP-адреса",
			CONN_MODE: 					"Режим з'єднання",
			DHCP_LINK_UNPLUGGED: 		"Від'єднано",
			
			AUTO: 						"Авто",
			ON_DEMAND: 					"На вимогу",
			TIME_BASED: 				"На основі часу",
			MANUALLY: 					"Вручну",
			MAX_IDLE_TIME: 				"Максимальний час очікування",
			MAX_IDLE_TIME_TIPS: 		"хвилинах. (0 означає, завжди активна.)",
			PERIOD_OF_TIME: 			"Період часу",
			TIME_TIPS: 					"(ГГ:ХХ)",
			BIGPOND_CABLE: 				"BigPond Кабель",
			AUTH_SERVER: 				"Сервер Автентифікації.",
			AUTH_DOMAIN: 				"Домен Автентифікації.",
			L2TP: 						"L2TP",
			GATEWAY: 					"Шлюз",
			SERVER_IP_ADDR_NAME: 		"VPN-сервер IP-адреса / Доменне Ім'я",
			PPTP: 						"PPTP",
			TO: 						"кому",
			
			TUNNEL_6TO4: 				"Тунель 6to4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Отримати не тимчасове уIPv6-адресу",
			GET_PREFIX_DELEGATION: 		"Отримати префікс IPv6 делегацію",
			IPV6_ADDR: 					"Адреса IPv6",

			GET_IPV6_WAY: 				"Отримати IPv6-адресу",
			AUTOMATICALLY: 				"Отримати автоматично",
			SPECIFIED_BY_ISP: 			"Визначено провайдером",

			IPV6_ADDR_PREFIX: 			"Префікс IPv6-адреси",
			NONE_TEMPORARY: 			"Не тимчасовий",

			PREFIX_DELEGATION: 			"Префікс делегація",
			ENABLE: 					"Включити",
			DISABLE: 					"Відключити",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Довжина маски IPv4",
			CONFIG_TYPE: 				"Тип конфігурації",
			RD6_PREFIX: 				"6RD префікс",
			RD6_PREFIX_LENGTH: 			"6RD Довжина префіксу",
			REPLY_IPV4_ADDR: 			"Границя відповіді IPv4-адреси",
			MANUAL: 					"Вручну",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass Through (міст)",
			LOCAL_IPV6: 				"Локальна  IPv6-адреса",
			PEER_IPV6: 					"IPv6-адреса Хоста",
			TUNNEL_ADDR: 				"Адреса тунелю",
			IPV4_NETMASK: 				"IPv4 Маска мережі",
			CUSTOM: 					"Вибірково",
		    AFTR_NAME: 					"AFTR Ім'я",
			PPP_SHARE_V6:				"PPPoE сесія співпадає з IPv4 з'єднанням",
			PPP_SHARE_V4:				"PPPoE сесія співпадає з IPv6 з'єднанням",

			
			
			IPV4_ADDR: 					"Адреса IPv4",
			IPV4_MASK: 					"Маска підмережі IPv4",
			IPV4_GATEWAY: 				"IPv4 шлюз за замовчуванням",
			TUNNEL_ADDR: 				"Адреса тунелю",

			DUPLEX: 					"Дуплекс",
			AUTO_NEGOTIATION: 			"Автоматичне узгодження",
			FULL_DUPLEX_1000: 			"1000 Мбіт/с повний дуплекс",
			HALF_DUPLEX_1000:			"1000 Мбіт/с полудуплекс",
			FULL_DUPLEX_100: 			"100 Мбіт/с повний дуплекс",
			HALF_DUPLEX_100: 			"100 Мбіт/с полудуплекс",
			FULL_DUPLEX_10: 			"10 Мбіт/с повний дуплекс",
			HALF_DUPLEX_10: 			"10 Мбіт/с полудуплекс"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"MAC-адреса",
			IP_ADDRESS: 				"IP-адреса",
			SUBNET_MASK: 				"Маска підмережі",
			CUSTOM: 					"Вибірково",

			IGMP: 						"Включити IGMP Proxy",
			

			ASSIGNED_TYPE: 				"Асоційований Тип",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Stateless DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Префікс адреси",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Адреса",
			DELEFATED: 					"Делегувати",
			STATIC: 					"Статична",
			SITE_PREFIX: 				"Префікс сайту",
			SITE_PREFIX_LEN: 			"Довжина Префікс Сайту",

			PREFIX_TYPE:  				"Конфігурація Префіксу Сайту",
			LAN_IPV6_ADDR:  			"LAN IPV6 Адреса",

			RELEASE_TIME: 				"Час звільнення",
			RELEASE_TIME_TIP: 			"секунд. (За замовчуванням 86400, не змінюйте, якщо це не необхідно.)",
			ADDRESS:					"Адреса",
			SAVE: 						"Зберегти",

			REBOOT_TIP: 				"Маршрутизатор переходить нову сторінку входу. <br/> Будь ласка зачекайте"

		},

		IPTV:{
			TITLE: 						"Налаштування",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Увімкнути IPTV", 
			MODE:  						"Режим",
			IGMP_PROXY: 				"IGMP Proxy",
			IGMP_VERSION: 				"IGMP версія",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Міст",
			BASIC: 						"Вибірково",
			EXSTREAM: 					"Сінгапур-Exstream",
			RUSSIA:  					"Росія",
			UNIFY:  					"Малайзія-Unifi",
			MAXIS:  					"Малайзія-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Інтернет",
			IP_PHONE: 					"IP-телефонія", 

			Q_TAG: 						"802.1Q Тег ",
			ENABLE: 					"Включити",
			
			INTERNET_VLAN_ID: 			"Інтернет VLAN ID",
			INTERNET_VLAN_PRIORITY: 	"Інтернет пріоритет VLAN",
			IP_PHONE_VLAN_ID: 			"VLAN ID IP – телефонії",
			IP_PHONE_VLAN_PRIORITY: 	"IP-телефон пріоритет VLAN",
			IPTV_VLAN_ID: 				"IPTV VLAN ID",
			IPTV_VLAN_PRIORITY: 		"IPTV пріоритет VLAN",
			IPTV_MULTI_VLAN_ID: 		"IPTV Multicast VLAN ID",
			IPTV_MULTI_VLAN_PRIORITY: 	"IPTV Multicast пріоритет VLAN"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP Сервер",
			
			SETTINGS: 					"Налаштування",

			DHCP_SERVER: 				"DHCP Сервер",
			ENABLE_DHCP_SERVER: 		"Увімкнути DHCP Сервер",

			IP_ADDR_POOL: 				"Пул ІР-адрес",
			LEASETIME: 					"Час оренди адреси",
			LEASENOTE: 					"хвилини. (1-2880. Значення за замовчуванням 120.)",
			
			GATEWAY: 					"Шлюз за замовчуванням",
			DOMAIN: 					"Домен за замовчуванням",
			PRIMARYDNS: 				"Первинний DNS",
			SECONDARYDNS: 				"Вторинний DNS",

			OPTIONAL: 					"(Опційно)",

			CLIENTSLIST: 				"Список DHCP клієнтів",
			CLIENT_NUMBER: 				"Кількість клієнтів",
			CLIENT_NAME: 				"Ім'я клієнта",
			MAC_ADDR: 					"MAC-адреса",
			ASSIGNED_IP: 				"Присвоєна IP-адреса",
			LEASE_TIME: 				"Час оренди",

			RESERVATION: 				"Резервування Адрес",

			RESERVED_IP: 				"Зарезервована IP-адреса",
			IP_ADDRESS: 				"IP-адреса",
			DESCRIPTION: 				"Опис",

			CLIENTSLIST: 				"Список DHCP клієнтів",
			CLIENT_NUMBER: 				"Кількість клієнтів",

			ENABLE: 					"Увімкнути цей запис",
			ENABLE_THIS_ENTRY: 			"Увімкнути цей запис"
			
		},

		DDNS: {
			DDNS: 						"Динамічний DNS",
			SERVICEPROVIDER: 			"Провайдер послуг",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP:",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Перейти до реєстрації ...",
			USERNAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			DOMAIN_NAME_LIST: 			"Список Доменних Імен ",
			DOMAIN_NAME: 				"Доменне ім'я",
			LOGIN: 						"Авторизація",
			LOGIN_SAVE: 				"Увійти і зберегти", 
			LOGOUT: 					"Вихід",
			STATU_SUCCESS:				"Успішно!",
			UPDATE_INTERVAL:			"Інтервал оновлення",
			ONE_HOUR:					"1 година",
			SIX_HOUR:					"6 годин",
			TWETEEN_HOUR:				"12 годин",
			ONE_DAY:					"1 день",
			TWO_DAY:					"2 дні",
			THREE_DAY:					"3 дні",
			NEVER:						"ніколи",
			UPDATE:						"Оновити",
			STATU_INCORRENT:			"Невірне ім'я користувача чи пароль.",
			STATU_ERR_DOMAIN:			"Помилка ім'я домену",
			WAN_IP_BIND: 				"WAN IP Прив'язка",
			CURRENT_DOMAIN: 			"Поточне доменне Ім'я",
			REGISTER: 					"Реєстрація",
			BIND: 						"Пов'язати",
			UNBIND: 					"Видалити прив'язку",
			TITLE: 						"DDNS недоступний",
			CONTENT: 					"Для того, щоб використовувати нашу послугу TP-Link DDNS, будь ласка <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">авторизуйтесь</a>  за допомогою  Вашого TP-Link ID, або оберіть іншого постачальника послуг.",
			STATU_NO_LAUNCH:			"Не запускати",
			STATU_FAIL_DDNS: 			"Не вдалося оновити DDNS.",
			STATU_FAIL_NOIP: 			"Не вдалося оновити NO-IP",
			DISABLE: 					"Відключити",
			ENABLE: 					"Включити",	
			STATU_NO_LAUNCH:			"Не вдалося оновити DDNS.",
			STATU_CONN:					"Підключення",
			WAN_IP_BIND: 				"WAN IP Прив'язка",
			TIME: 						"Дата Реєстрації",
			BOUND: 						"Прив'язування",
			FREE: 						"Безкоштовно ",
			SORRY: 						"Помилка.",
			UNBIND_NOTE:          		"Якщо Ви хочете прив'язати %domain%  до Вашого пристрою, будь ласка, спочатку видаліть прив'язку поточного імені домену."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Розширена Маршрутизація",
			STATIC_ROUTING: 			"Статична Маршрутизація",

			DESTINATION_NETWORK:		"Мережа призначення",
			SUBNET_MASK: 				"Маска підмережі",
			DEFAULT_GATEWAY: 			"Шлюз за замовчуванням",
			DESCRIPTION: 				"Опис",
			
			SYSTEM_ROUTING_TABLE: 		"Системна Таблиця Маршрутизації",
			CLIENT_NUMBER: 				"Номер активних Маршрутів",

			GATEWAY: 					"Шлюз",
			INTERFACE: 					"Інтерф.",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Увімкнути цей запис",
			ENABLE_THIS_ENTRY: 			"Увімкнути цей запис"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Налаштування",
			NOT_SUPPORT_5G: 			"Регіон дозволяє тільки 2.4 ГГц. Будь ласка, переконайтеся, що ви обираєте правильний регіон.",

			REGION: 					"Регіон",
			NOTICE:  					"Щоб використати функцію бездротової мережі, ви повинні тримати апаратний перемикач бездротової мережі увімкненим .",
			
			MODE_2G:					"2.4 ГГц",
			MODE_5G:					"5 ГГц",

			WIRELESS: 					"Налаштування Бездротової Мережі",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Увімкнути бездротовий сигнал",

			WIRELESS_NETWORK_NAME: 		"Ім'я бездротової мережі (SSID)",
			WIRELESS_PASSWORD: 			"Пароль",
			HIDE_SSID: 					"Приховати SSID",

			SECURITY: 					"Безпека",
			NO_SECURITY: 				"Безпека відключена",
			WPA_WPA2_PERSONAL: 			"WPA / WPA2 - Personal (Рекомендується)",
			WPA_WPA2_ENTERPRISE: 		"WPA / WPA2 - Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Версія",

			AUTO: 						"Авто",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Шифрування",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Режим",
			MODE_B:  					"802.11b тільки",
			MODE_G:  					"802.11g тільки",
			MODE_N:  					"802.11n тільки",
			MODE_BG:  					"802.11b / g змішаний",
			MODE_GN: 					"802.11g /n змішаний",
			MODE_BGN:  					"802.11b /g /n змішаний",

			MODE_A_5: 					"802.11a тільки",
			MODE_AN_5: 					"802.11a/n змішаний",
			MODE_N_5: 					"802.11n тільки",
			MODE_AC_5:					"802.11ac тільки",
			MODE_NAC_5:					"802.11n/ac змішаний",
			MODE_ANAC_5:				"802.11a/n/ac змішаний",


			CHANNEL_WIDTH: 				"Ширина каналу",
			CHANNEL: 					"Канал",

			TRANSMIT_POWER: 			"Потужність передавача",

			RADIUS_SERVER_IP: 			"IP адреса RADIUS-сервера",
			RADIUS_PORT: 				"RADIUS Порт",
			RADIUS_PASSWORD: 			"RADIUS Пароль",

			TYPE: 						"Тип",
			OPEN_SYSTEM: 				"Без захисту",
			SHARED_KEY: 				"загальнодоступний ключ",

			KEY_SELECTED: 				"Ключ обрано",
			KEY1: 						"Ключ1",
			KEY2: 						"Ключ2",
			KEY3: 						"Ключ3",
			KEY4: 						"Ключ4",

			WEP_KEY_FORMAT: 			"Формат WEP ключа",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Шістнадцятковий",

			KEY_TYPE: 					"Тип ключа",
			BIT64: 						"64 біт",
			BIT128: 					"128 біт",
			BIT152: 					"152 біт",

			KEY_VALUE: 					"Значення ключа",
			
			MHZ: 						"МГц",
			MHZ20: 						"20 МГц",
			MHZ40: 						"40 МГц",
			MHZ80: 						"80МГц",
			
			LOW: 						"Низький ",
			MIDDLE: 					"Середній",
			HIGH: 						"Високий"
		},

		WPS: {

			TITLE2: 					"PIN маршрутизатора",
			ROUTERS_PIN_INFO: 			"Інші пристрої можуть підключатися до цього маршрутизатора по WPS з PIN-кодом маршрутизатора.",
			ENABLE_ROUTE_PIN: 			"PIN маршрутизатора",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Генерувати",
			DFT: 						"За замовчуванням",

			TITLE: 						"WPS Майстер",
			SELECT_SETUP: 				"Оберіть спосіб WPS підключення",
			PUSH_BTN: 					"Натисненням кнопки (рекомендується)",
			PUSH_DES: 					"Натисніть фізичну кнопку на маршрутизаторі або натисніть в програмному забезпеченні \" Підключити \" на цій сторінці.",
			CONNECT: 					"З'єднати",
			CANCEL: 					"Відмінити",

			RESULT_HEAD: 				"Бездротовий клієнт",
			RESULT_END: 				"був доданий до мережі  успішно.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Не знайдено",
			ENTER_CLIENT_PIN: 			"Введіть PIN-код клієнта",
			SWITCH_NOTE:				"Для використання WPS, ви повинні спочатку увімкнути функцію бездротової мережі.",
			SWITCH_NOTE2:				"Для використання WPS Майстру, спочатку ви повинні налаштувати правильні параметри бездротової мережі.",
			STATUS_PIN_ERROR: 			"Неправильний WPS PIN? Будь ласка, перевірте правильність.",
			STATUS_ERROR: 				"Помилка.",
			STATUS_CONN_ERROR: 			"Помилка підключення.",
			STATUS_CONNING: 			"Підключення ...",
			STATUS_CANCEL: 				"З'єднання скасовано.",
			
			NOTE: 						"Примітка:",
			
			STATUS_CONN_OVERLAP: 		"Не вдалося встановити з'єднання.(OVERLAP)",
			STATUS_CONN_TIMEOUT: 		"Не вдалося встановити з'єднання (ТАЙМ-АУТ).",
			STATUS_CONN_INACT: 			"Підключення неактивне."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Бездротові клієнти онлайн",
			CLIENT_NUMBER: 				"Кількість клієнтів",
			MAC_ADDRESS: 				"MAC-адреса",
			CONN_TYPE: 					"Тип з'єднання",
			SECURITY: 					"Безпека",
			RECEIVED_PACKETS: 			"Прийняті Пакети",
			SEND_PACKETS: 				"Відправлені пакети"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Налаштування",
			
			MODE_2G: 					"2.4 ГГц",
			MODE_5G:					"5 ГГц",
			
			ALLOW_EACH: 				"Дозволити гостям бачити один одного",
			
			ALLOW_LOCAL: 				"Дозволити гостям доступ до своєї локальної мережі",
			
			WIRELESS: 					"Бездротова мережа",
			WIRELESS_24G_RADIO: 		"Бездротова  мережа 2.4ГГц",
			WIRELESS_5G_RADIO: 			"Бездротовамережа 5 ГГц",
			ENABLE_GUEST: 				"Увімкнути Гостьову мережу",

			NAME_SSID: 					"Ім'я бездротової мережі (SSID)",
			HIDE_SSID: 					"Приховати SSID",

			SECURITY: 					"Безпека",
			NO_SECURITY: 				"Безпека відключена",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal",

			VERSION: 					"Версія",
			AUTO: 						"Авто",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Шифрування",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Пароль"
		},

		NAT:{
			SETTINGS: 					"Апаратний NAT",
			STATUS: 					"Апаратний NAT",
			
			ALG_TITLE: 					"Шлюз Програмного Рівня  (ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"Транзитна пересилка PPTP",
			L2TP_ALG: 					"L2TP Passthrough",
			IPSEC_ALG: 					"Транзитна пересилка IPSec",

			ENABLE_FTP_ALG: 			"Увімкнути FTP ALG",
			ENABLE_TFTP_ALG: 			"Увімкнути TFTP ALG",
			ENABLE_H323_ALG: 			"Увімкнути H323 ALG",
			ENABLE_RTSP_ALG: 			"Увімкнути RTSP ALG",
			ENABLE_PPTP_ALG: 			"Увімкнути PPTP Passthrough",
			ENABLE_L2TP_ALG: 			"Увімкнути L2TP Passthrough",
			ENABLE_IPSEC_ALG: 			"Увімкнути IPSec Passthrough",
			NAT_ENABLE_NOTICE: 			"Примітка: Ваші конфігурації не вступлять в силу до тих пір, поки функція NAT увімкнена."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Віртуальні сервери",

			SERVICE_NAME: 				"Тип сервісу",
			EXTERNAL_PORT: 				"Зовнішній Порт",
			INTERNAL_IP: 				"Внутрішній IP",
			INTERNAL_PORT: 				"Внутрішній Порт",
			PROTOCAL: 					"Протокол",

			BTN_VIEW: 					"Переглядати існуючих сервісів",

			EXSITTING_SERVICE: 			"Існуючі Сервіси",
			
			PROTOCAL_ALL: 				"ВСІ",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX чи XX)",
			EXT_PORT_TIPS: 				"(XX або XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX або Blank ,1-65535)",

			NOTICE:						"Конфлікт з віддаленим портом управління. Ви впевнені, що хочете продовжити?",

			ENABLE_THIS_ENTRY: 			"Увімкнути цей запис",
			OPERATION: 					"Операція",
			CHOOSE: 					"Обрати",
			NAT_ENABLE_NOTICE: 			"Примітка: Ваші конфігурації не вступлять в силу до тих пір, поки функція NAT увімкнена."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Порт Триггерінг",
			APPLICATION: 				"Програма",
			TRIGGER_PORT: 				"Триггерінг Порт",
			TRIGGER_PROTOCOL: 			"Триггерінг Протокол",

			EXTERNAL_PORTS: 			"Зовнішній Порт",
			EXTERNAL_PROTOCOL: 			"Зовнішній Протокол",

			BTN_VIEW: 					"Подивитися Існуючі Програми",

			EXSITTING_APPLICATION: 		"Існуючі Програми",
			APPLICATION_NAME: 			"Назва Програми",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX або XX-XX, 1-65535, в більшості 5 пар)",
			
			ENABLE_THIS_ENTRY: 			"Увімкнути цей запис",
			OPERATION: 					"Операція",
			
			PROTOCAL_ALL: 				"ВСІ",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Примітка: Ваші конфігурації не вступлять в силу до тих пір, поки функція NAT увімкнена."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Увімкнути DMZ",
			HARDWARESTATUS: 			"IP-адреса DMZ Хосту",
			NAT_ENABLE_NOTICE: 			"Примітка: Ваші конфігурації не вступлять в силу до тих пір, поки функція NAT увімкнена."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Список UPnP",
			CLIENT_NUMBER: 				"Кількість клієнтів",
			SERVICE: 					"Опис Сервісу",
			EXTERNAL_PORT: 				"Зовнішній Порт",
			PROTOCAL: 					"Протокол",
			IP_ADDR: 					"Внутрішня IP-адреса",
			INTERNAL_PORT: 				"Внутрішній Порт",
			NAT_ENABLE_NOTICE: 			"Примітка: Ваші конфігурації не вступлять в силу до тих пір, поки функція NAT увімкнена."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"3G/4G USB-модем",
			LOCATION: 					"Регіон",
			MOBILE_ISP: 				"Мобільний Провайдер",

			USA: 						"США",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Режим з'єднання",
			CONNECT_ON_DEMAND: 			"З'єднання за вимогою",
			CONNECT_AUTOMATICALLY: 		"Автоматичне з'єднання",
			CONNECT_MANUALLY: 			"З'єднання вручну",
			MAX_IDLE_TIME: 				"Максимальний час очікування",
			CONNECTION_TIP: 			"Поточний доступ до Інтернет налаштовано з наданням переваги WAN порту",
			IDLE_TIME_TIP: 				"Режим З'єднання і Максимальний Час Простою не можуть бути встановлені вручну.",
			MINUTES: 					"Хвилин. (0 означає, що з'єднання включено постійно.)",

			AUTHENTICATION_TYPE: 		"Тип Автентифікації",
			AUTO: 						"Авто",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"За замовчуванням Авто, не змінювати, якщо це необхідно.",

			CONNECT: 					"З'єднати",
			DISCONNECT: 				"Роз'єднати",

			SET_TIP: 					"Введіть Номер набору, APN, Ім'я користувача і пароль вручну.",
			DIAL_NUMBER: 				"Номер Набору",
			APN: 						"APN",
			USERNAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			OPTIONAL: 					"(Опційно)",
			MTU_SIZE: 					"Розмір MTU(в байтах)",
			MTU_SIZE_TIP: 				"байт. (За замовчуванням 1480, не змінювати, якщо це не необхідно.)",

			USE_FOLLOW_DNS_SERVER: 		"Використати наступні DNS-адреси",
			PRIMARY_DNS: 				"Первинний DNS",
			SECOND_DNS: 				"Вторинний DNS",

			UNPLUGGED: 					"Відсутнє підключення USB-модема ",
			IDENTIFYING: 				"Визначення...",
			IDENTIFY_SUCCESS: 			"Ідентифіковано успішно"
		},

		DISK_SETTING: {
			DISK_SET: 					"Налаштування Пристрою",
			SCAN: 						"Сканування",
			SELFLY_REMOVE: 				"Безпечне від'єднання",
			SCAN_RESULT: 				"Знайдено %n дисків",
			NOT_FOUND: 					"Не знайдено",
			SELFLY_REMOVE: 				"Безпечне від'єднання",
			
			VOLUMN: 					"Том",
			CAPACITY: 					"Ємність",
			FREESPACE: 					"Вільне місце",
			USBSPACE: 					"Використане Місце",
			
			STATUS: 					"Статус",
			INACT: 						"Не активний",
			ACTIVE: 					"Активний",
			
			USAGE: 						"Використання",
			CAPACITY: 					"Ємність",
			OPERATION: 					"Операція",	
			
			ACC: 						"Менеджмент доступу до пристрою", 	 	
			USERNAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			USE_LOGIN: 					"Використовувати Логін користувача",
			SCAN: 						"Сканування",
			ENJECT_ALL: 				"Звільнити Всі",
			ENJECT: 					"Звільнити Всі",
			ADD_USER: 					"Додати Користувача",
			AUTH: 						"Пріоритет"
		},

		FOLDER: {
			TITLE: 						"Налаштування спільного доступу",
			ACCOUNT_TITLE: 				"Обліковий запис спільного доступу",
			ACCOUNT:					"Обліковий запис",
			AC_NOTE: 					"Підготовка облікового запису для обміну вмістом. Ви можете використовувати обліковий запис або створити новий.",
			
			AC_LOGIN: 					"Використовувати Обліковий запис за Замовчуванням",
			AC_FOLLOW: 					"Використання Нового Обліковий запису",

			USERNAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",
			CONFIRM: 					"Підтвердити пароль",

			SHARING_SETTING: 			"Налаштування спільного доступу",
			SERVER_NAME: 				"Мережа /  Ім'я медіа серверу:",

			METHOD: 					"Метод доступу",
			LINK: 						"Посилання",
			PORT: 						"Порт",

			NETWORK_NEIGHBORHOOD: 		"Мережеве оточення",
			FTP: 						"FTP",
			FTPEX: 						"FTP (через Інтернет)",

			SHARE_FOLDER: 				"Папка загального доступу",
			SHAREING_ALL: 				"Поділитися всім",
			NOTE:  						"Натисніть Увімкнути щоб поділитися всіма файлами та папками або залиште Вимкненим щоб надати доступ тільки до специфічних папок.", 
			ENABLE_AUTHENTICATION: 		"Увімкнути Автентифікацію",
			SHAREING_FOLDER: 			"Папки загального доступу",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Шлях до папки",
			VOLUMN_NAME: 				"Ім'я тому",

			SHARE_NAME: 				"Ім'я папки",
			FOLDER_PATH: 				"Шлях до папки",
			MEDIA_SHARING: 				"Медіа розділ",
			STATUS: 					"Статус",

			GUEST_ACCESS: 				"Дозволити Гостьовій Мережі Доступ",
			ENABLE_AUTHENTICATION: 		"Увімкнути Автентифікацію",
			ENABLE_WRITE_ACCESS: 		"Увімкнути Доступ для Запису",
			ENABLE_MEDIA_SHARE: 		"Увімкнути Медіа Розділ",
			
			BROWSE: 					"Перегляд",
			BROWSE_TITLE: 				"Обрати папку",

			NO_VOLUMN:					"Немає тому",
			
			NOTICE: 					"Ви впевнені, що хочете залишити сторінку Dynamic DNS? Натисніть кнопку Зберегти, щоб зберегти та залишити сторінку. Натисніть \"Залишити\" щоб залишити сторінку без збереження. Натисніть Скасувати, щоб залишитися.",
			NO_CHANGE_NOTICE: 			"Ви впевнені, що хочете залишити сторінку Dynamic DNS?",

			SAVE_FAILED_NOTICE: 		"Збереження не вдалося",
			CONTINUE: 					"Залишити",
			CONTINUE_SAVE: 				"Зберегти",
			CANCLE: 					"Відмінити",

			ENABLE: 					"Включити"

		},

		PRINT:{
			TITLE: 						"Сервер друку",
			NAME: 						"Ім'я принтера",
			ENABLE_PRINT_SERVER: 		"Сервер друку",
			NONE: 						"Немає",
			
			NOTE_TITLE: 				"Примітка:",
			STEP1: 						"Крок1:",
			STEP2: 						"Крок2:",
			STEP3: 						"Крок3:",

			NOTE1: 						"Встановіть драйвер принтера на комп'ютері.  ",
			NOTE2: 						"Підключіть принтер до USB-порту маршрутизатора за допомогою кабелю USB.",
			NOTE3: 						"Встановіть  TP-Link USB Утиліту Контролер Принтеру. Будь ласка завантажте її з нашого офіційного сайту: <a class=\"link\" target=\"blank\" href=\"%SUPPORT%\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Батьківський контроль",
			STATUS: 					"Статус",
			UNKNOWN: 					"Невідомо",

			DEVICE_CTR: 				"Пристрої під батьківським контролем",
			DEVICE: 					"Ім'я пристрою",
			MAC_ADDRESS: 				"MAC-адреса",
			TIME: 						"Час доступу в Інтернет",
			DESCRIPTION: 				"Опис",
			
			ENABLE_THIS_ENTRY: 			"Увімкнути цей запис",
			OPTIONAL: 					"(Опційно)",
			BTN_VIEW: 					"Подивитися Існуючі Пристрої",
			
			DEVICE_LIST: 				"Список Пристроїв",
			SYSTEM_TIME: 				"Системний Час",
			
			RESTR: 						"Обмеження Вмісту",
			MODE: 						"Обмеження",
			BLACKMODE: 					"Чорний список",
			WHITEMODE: 					"Білий список",
			ACCESS_DEVICES_LIST: 		"Список Пристроїв",
			
			CHOOSE: 					"Обрати",
			ADD_A_NEW_KEYWORD: 			"Додати Нове Ключове Слово",
			ADD_A_NEW_DOMAIN_NAME: 		"Додати Нове Доменне Ім'я"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Інтернет",
			ROUTER: 					"Маршрутизатор",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Інші",

			DEVICE: 					"Пристрій",
			RATE: 						"Розмір",
			APPLICATION: 				"Програма",

			NAME: 						"Ім'я",
			MAC_ADDRESS: 				"MAC-адреса",
			IP_ADDRESS: 				"IP-адреса",


			DEVICES: 					"Пристрій"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Ширина смуги",
			TEST_BANDWIDTH: 			">Тест Ширини смуги",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Включити streamboost",
			UP_LIMITATION: 				"Верхній Ліміт (Мбіт/с)",
			DOWN_LIMITATION: 			"Нижній Ліміт (Мбіт/с)",
			RUN_BANDWIDTH_TEST: 		"Запустити Тестування Пропускної Здатності",
			TESTING: 					"Тестування",
			TEST_FAILED: 				"Тест не пройшов",
			TEST_SUCCEED: 				"Тест Успішний",
			ENABLE_AUTOMATIC_TEST: 		"Включити Автоматичне Тестування",
			KEEP_UP_TO_DATE: 			"Включений StreamBoost до дати",
			ENABLE_AUTOMATIC_UPDATE: 	"Включити Автоматичне Оновлення"

		},

		PRIORITY:{
			PRIORITY: 					"Пріоритет",
			PRIORITY_TIPS: 				"Пріоритет дозволяє змінити важливість одного пристрою над іншим. Це корисно, коли пристрій конкурують за обмежену пропускну здатність із застосуванням тієї ж класифікації.",
			ALL_DEVICE: 				"Всі Пристрої",
			ACTIVE_DEVICE: 				"Активні Пристрої",
			SAVE: 						"Зберегти",
			ID: 						"ID",
			DEVICE: 					"Пристрій",
			TYPE: 						"Тип",
			MAC_ADDRESS: 				"MAC-адреса",
			STICK: 						"Закріплення"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Статистика",
			UP_TIME: 					"Час Роботи",
			DOWNLOADS: 					"Завантаження",
			LAST_DAY: 					"Останній День",
			LAST_WEEK: 					"Останній Тиждень",
			LAST_MONTH: 				"Останній Місяць",
			ALL_LAN_HOSTS: 				"ВСІ Хости LAN ",
			OTHER: 						"Інші"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Міжмережевий екран",
			ENABLE_SPI: 				"Міжмережевий екран SPI",

			DOS_PROTECTION: 			"DoS Захист ",
			ENABLE_DOS: 				"DoS Захист ",
			
			OFF: 						"Вимкнено",
			LOW: 						"Низький ",
			MIDDLE: 					"Середній",
			HIGH: 						"Високий",

			ICMP: 						"Фільтрація ICMP-Flood Атак",
			UDP: 						"Фільтрація UDP-FLOOD Атак",
			TCP: 						"Фільтрація TCP-SYN-FLOOD Атак",
			ENABLE_DOS_TIP:             "Захист DoS та Статистику трафіку не можливо увімкнути одночасно.",

			IGNORE: 					"Ігнорувати Ping Пакети з порту WAN",
			FORBID: 					"Заборонити Ping Пакети з порту LAN",

			BLOCK_DOS: 					"Список заблокованих DoS хостів",
			HOST_NUMBER: 				"Номер Хосту",
			IP_ADDRESS: 				"IP-адреса",
			MAC_ADDRESS: 				"MAC-адреса"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Контроль доступу ",
			ENABLE_ACCESS: 				"Контроль доступу ",

			ACCESS_MODE: 				"Режим доступу",
			DEFAULT_ACCESS_MODE: 		"Режим доступу за умовчанням",
			BLACK_LIST: 				"Чорний список",
			WHITE_LIST: 				"Білий список",
			
			WIRED:						"Дротова мережа",
			WIRELESS:					"Бездротова мережа",

			DEVICE_ONLINE: 				"Пристрої Онлайн",
			NAME: 						"Ім'я пристрою",
			IP_ADDRESS: 				"IP-адреса",
			MAC_ADDRESS: 				"MAC-адреса",
			CONN_TYPE: 					"Тип з'єднання",

			BLOCK: 						"Блокувати",

			DEVICE_IN_WHITE: 			"Пристрої в білому списку",
			DEVICE_IN_BLACK: 			"Пристрої в чорному списку"
		},

		IP_MAC:{
			TITLE: 						"Налаштування",
			ENABLE_ARP: 				"ARP Прив'язка",

			ARP_LIST: 					"ARP Список",
			ARP_NUM: 					"Кількість ARP записів",

			MAC_ADDRESS: 				"MAC-адреса",
			IP_ADDRESS: 				"IP-адреса",
			BOUND: 						"Прив'язування",
			UNBOUND: 					"Відв'язування",

			BINDING_LIST: 				"Список Прив'язки",
			DESCRIPTION: 				"Опис",
			OPTIONAL: 					"(Опційно)",
			ENABLE_THIS_ENTRY: 			"Увімкнути цей запис"
		},

		TIMESET: {
			TITLE: 						"Налаштування часу",
			ZONE: 						"Часовий пояс",
			DATE: 						"Дата",
			DATEFORMAT: 				"ММ/ДД/РРРР",
			TIME: 						"Час",
			TIMEFORMAT: 				"(ГГ/ХХ/СС)",
			NTP1: 						"NTP Сервер I",
			NTP2: 						"NTP Сервер II",
			OPTIONAL: 					"(Опційно)",

			CURRENT_TIME:  				"Поточний час",
			SET_TIME: 					"Встановити час",
			AUTOMATIC: 					"Отримати автоматично з мережі Інтернет",
			MANUAL: 					"Вручну",
			AUTOMATIC_BTN: 				"Отримати",


			GETGMT: 					"Отримати GMT",

			
			GETGMT_SUCCESS: 			"Отримання Часу з NTP Сервера Успішно",
			GETGMT_TIMEOUT: 			"Отримання Часу з NTP Сервера. Помилка",
			GETGMT_WAIT: 				"Очікування",
			
			M: 							"М",
			W: 							"W",
			D: 							"Д",
			H: 							"Х",
			
			DAYLIGHT_SAVING: 			"Перехід на літній час",
			ENABLE_DAYLIGHT: 			"Активувати літній час",
			START: 						"Старт",
			END: 						"Кінець",

			RUNNING_STATUS: 			"Запущений статус",
			DOWN: 						"Перехід на літній час виключено",
			UP: 						"Перехід на літній час включено"
		},

		DIAG:{
			TITLE: 						"Діагностика",
			DIAGNOSTIC_TOOL: 			"Інструменти Діагностики",
			PING: 						"PING",
			TRACE: 						"Трасування",

			IPADDR: 					"IP-адреса / Доменне ім'я",
			COUNT: 						"Ping Лічильник",
			
			BASIC: 						"Основі",
			ADVANCED: 					"Додатково",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Розмір Ping пакета",
			PKTUNIT: 					"(4-1472 Байт)",

			TIMEOUT: 					"Ping Тайм-аут",
			TIMOUTUNIT: 				"(100-2000 мілісекунд)",

			TTL: 						"  Максимальний TTL Traceroute",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Старт",
			STOP: 						"Стоп"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"У вас остання версія прошивки",
			TITLE: 						"Оновлення Програмного Забезпечення",
			INFO: 						"Інформація про пристрій",
			REMOTE_TITLE: 				"Оновлення в режимі онлайн",
			LOCAL_TITLE: 				"Локальне оновлення",

			NEWFILE: 					"Файл Нового Програмного Забезпечення",
			FIRMWAREVERSION: 			"Версія Програмного Забезпечення",
			HARDWAREVERSION: 			"Апаратна Версія ",
			LATESTVERSION: 				"Остання версія",
			CONFIRM_CONTENT:			"Ви дійсно бажаєте оновити прошивку?",
			WARNING:					"Оновлення прошивки… <br/> Щоб уникнути будь-яких пошкоджень, тримайте маршрутизатор увімкненим та не використовуйте його під час процесу оновлення.",
			REBOOTING: 					"Перезавантаження… <br/> Щоб уникнути будь-яких пошкоджень, тримайте маршрутизатор увімкненим та не використовуйте його під час процесу оновлення.",
			DO_NOT_OPERATE: 			"Оновлення прошивки… <br/> Щоб уникнути будь-яких пошкоджень, тримайте маршрутизатор увімкненим та не використовуйте його під час процесу оновлення.",
			FIRMWARE_UPDATING_NOTE: 	"1.Програмне забезпечення оновлюється…<br/>  Для уникнення будь яких пошкоджень чи помилок, будь ласка, не вимикайте маршрутизатор та не використовуйте його поки процес оновлення не завершиться.",
			REBOOTING_NOTE: 			"2.Перезавантаження…<br/>  Для уникнення будь яких пошкоджень чи помилок, будь ласка, не вимикайте маршрутизатор та не використовуйте його поки процес оновлення не завершиться.",
			SCREEN_UPDATING_NOTE: 		"3.Оновлення екрану ...<br/>  Для уникнення будь яких пошкоджень чи помилок, будь ласка, не вимикайте маршрутизатор та не використовуйте його поки процес оновлення не завершиться.",
			UPGRADE_FAILED: 			"Оновлення не вдалося.",
			UPGRADE: 					"Оновити",
			CHECK: 						"Перевірити",
			DOWNLOADING: 				"Завантаження… <br/> Щоб уникнути будь-яких пошкоджень, тримайте маршрутизатор увімкненим та не використовуйте його під час процесу оновлення.",
			UPGRADE_INOF: 				"Щоб уникнути будь-яких пошкоджень, тримайте маршрутизатор увімкненим.",
			NOTE: 						"Примітка:",
			NO_UPGRADE: 				"Це остання версія",

			UPGRADING: 					"Оновлення… <br/> Щоб уникнути будь-яких пошкоджень, тримайте маршрутизатор увімкненим та не використовуйте його під час процесу оновлення.",
			RETRY: 						"Повторити спробу",
			CANCEL: 					"Відмінити",
			ILEGAL_DEVICE:              "Не вдається ідентифікувати пристрій. Будь ласка, зверніться до служби технічної підтримки компанії TP-Link.",
			UPGRADE_FAIL: 				"Не вдається оновити. Будь ласка, повторіть спробу пізніше.",
            CONFIG_RESET_NOTE:          "Ваші поточні налаштування будуть втрачені після оновлення до цієї версії.",
			CHECK_UPGRADE: 				"Перевірити на наявність оновлення"
		},

		BACKUP:{
			BACKUP: 					"Резервне копіювання",
			BACKUPTIP: 					"Збереження копії ваших поточних налаштувань",

			RESTORE: 					"Відновлення ",
			RESTORETIP: 				"Відновлення збережених налаштувань з файлу",
			
			RESTORE_WARN:				"Маршрутизатор Відновлюється...<br/>Будь ласка, не працюйте під час процесу. ",
			RESTORE_CONFIRM_CONTENT: 	"Ви впевнені, що хочете відновити маршрутизатор з файлу резервної копії?",
			
			FILE: 						"Файл",

			FACTORY: 					"Відновлення заводської конфігурації  ",
			FACTORYTIP: 				"Повернути всі налаштування конфігурації до їх значень за умовчанням",
			RESETTIP:					"Відновлення всіх налаштувань до значень за замовчуванням, окрім інформації для авторизації та Вашого хмарного облікового запису.",
			FACTORY_CONFIRM_CONTENT:	"Ви впевнені ,що хочете відновити маршрутизатор до заводських налаштувань ?",
			FACTORY_WARN:				"Маршрутизатор Відновлюється...<br/>Будь ласка, не працюйте під час процесу. ",
			
			BACKUPBTN: 					"Резервне копіювання",
			RESTOREBTN: 				"Відновлення ",
			RESETBTN:					"Відновлення ",
			FACTORYBTN: 				"Заводське Відновлення"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Менеджмент доступу до пристрою",
			
			OLDUSER: 					"Старе Ім'я користувача",
			OLDPWD: 					"Старий пароль",

			NEWUSER: 					"Нове Ім'я користувача",
			NEWPWD: 					"Новий пароль",
			CONFIRM: 					"Підтвердить Новий Пароль",

			RECOVERYINFO: 				"Відновлення паролю",
			ENABLE_PASSWORD_RECOVERY: 	"Увімкнути Відновлення паролю",
			FROM: 						"Від",
			TO: 						"Кому",
			SMTP_SERVER: 				"SMTP-сервер",
			
			ENABLE_AUTHENTICATION: 		"Увімкнути Автентифікацію",
			USERNAME: 					"Ім'я користувача",
			PASSWORD: 					"Пароль",

			TEST_MAIL: 					"Тестовий Лист",

			LOCAL:						"Локальне управління",
			LOCAL_MAC_AUTH: 			"Локальна МАС Автентифікація",
			ACCESS: 					"Доступ для всіх LAN Підключених Пристроїв",
			ACCESS_TIPS: 				"Натисніть Увімкнути, щоб увімкнути управління для всіх пристроїв у локальній мережі або залиште Вимкнено для того, щоб управляти конкретним пристроєм.",
			
			MAC_ADDRESS: 				"MAC-адреса",
			VIEW_BTN: 					"Подивитися Існуючі Пристрої",
			DESCRIPTION: 				"Опис",

			EXIST_DEVICE:               "Існуючі пристрої",

			OPTIONAL: 					"(Опційно)",
			ENABLE_THIS_ENTRY: 			"Увімкнути цей запис",

			DEVICE_NAME:				"Ім'я пристрою",
			IP_ADDRESS:					"IP-адреса",
			

			REMOTE: 					"Віддалене управління",
			DISABLE_REMOTE_MANAGEMENR: 	"Вимкнути віддалене управління",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Дозволити ВСІМ Пристроям Віддалене Управління",
			ENABLE_REMOTE_MANAGEMENR: 	"Увімкнути Віддалене Управління для Визначених Пристроїв",
			WEB: 						"Порт WEB Управління",

			NOTICE:						"Конфлікт з портом віртуального сервера! Ви впевнені, що хочете продовжити?",

			REMOTEIP: 					"IP-адреса для віддаленого управління",
			REMOTEIPNOTE: 				"(Введіть 255.255.255.255 для всіх)"
			
		},

		SYSLOG:{
			TITLE: 						"Системний журнал",
			LOG_FILTER: 				"Фільтр журналу:",
			
			TYPE_EQ: 					"Тип=",
			
			ALL: 						"ВСІ",

			FIREWALL: 					"Міжмережевий екран", 
			NAT: 						"NAT",
			DDNS: 						"Динамічний DNS",
			UPNP:						"UPnP",
			IMB:            			"IP та MAC Прив'язка",
			IPTV:						"IPTV",
			DHCPS:						"DHCP Сервер",
			IGMP_PROXY:					"IGMP Proxy",
			DOMAIN_LOGIN:				"Логін Домену",
			BASIC_SECURITY: 			"Загальний Захист",
			PARENTAL_CONTROL: 			"Батьківський контроль",
			ACCESS_CONTROL: 			"Контроль доступу ",
			DOS_PROTECTION: 			"DoS Захист ",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Статистика Трафіку",
			TIME_SETTINGS: 				"Налаштування часу",
			ACCOUNT_MANAGEMENT: 		"Менеджмент доступу до пристрою",
			LOCAL_MANAGEMENT: 			"Локальне управління",
			REMOTE_MANAGEMENT: 			"Віддалене управління",
			LOCALE: 					"Локально",
			FACTORY_RESET: 				"Заводське Відновлення",
			LED_CONTROLLER: 			"Контролер LED",
			NETWORK: 					"Мережа",
			USBSHARE: 					"USB доступ",
			AND: 						"та",
			LEVEL: 						"Рівень",
			EMERGENCY:					"АВАРІЙНА",
			ALERT:						"ТРИВОГА",
			CRITICAL:					"КРИТИЧНА",
			ERROR: 						"ПОМИЛКА",
			WARNING: 					"ПОПРЕРЕДЖЕННЯ",
			NOTICE: 					"УВАГА",
			INFO: 						"ІНФО",
			DEBUG: 						"DEBUG",

			INDEX: 						"Індекс",
			TYPE: 						"Тип",
			TIME: 						"Час",
			LEVEL_COL:					"Рівень",

			CONTENT: 					"Контент журналу",
			
			MAIL_LOG: 					"Відправлення журналу на пошту",
			SAVE_LOG: 					"Зберегти журнал",

			SEND_OK: 					"Відправити ОК",
			SEND_FAILED: 				"Відправлення не вдалося",

			MAIL_SETTING: 				"Налаштування пошти",

 			FROM: 						"Від",
 			TO: 						"Кому",
 			SMTP_SERVER: 				"SMTP-сервер",
 			ENABLE_AUTHENTICATION: 		"Увімкнути Автентифікацію",

 			USERNAME: 					"Ім'я користувача",
 			PASSWORD: 					"Пароль",
 			CONFIRM_PASSWORD: 			"Підтвердити пароль",

 			AUTO_MAIL: 					"Увімкнути автоматичну відправку на пошту",
 			LOG_AT: 					"Відправляти о",
 			HH_MM: 						"(ГГ:ХХ) кожного дня",

 			LOG_EVERY: 					"Відправляти через",
 			HOURS: 						"Годин(и)"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Налаштування",
			STATUS: 					"Увімкнути QoS",
			UPBANDWIDTH: 				"Полоса пропускання вивантаження",
			DOWNBANDWIDTH: 				"Полоса пропускання завантаження",
			SPEED_M: 					"Мбіт/с",
			SPEED_K: 					"Кбіт/с",
			TEST: 						"Тест Швидкості",
			RULE_LIST: 					"Список Правил QoS",
			RULE: 						"Правило QoS",
			ID: 						"ID",
			NAME: 						"Ім'я",
			TYPE: 						"Тип",
			DETAIL: 					"Деталі",
			PRIORITY: 					"Пріоритет",

			APPLICATION: 				"Програма",
			APPLICATION_LIST: 			"Список Програм",
			CUSTOM_APP: 				"Змінити Програму",
			MAC_ADDR: 					"MAC-адреса",
			MAC_ADDR_P: 				"MAC:",
			IP_ADDR: 					"IP-адреса",
			IP_P: 						"ІР:",
			PHYSICAL_PORT: 				"Фізичний Порт",

			LOW: 						"Низький ",
			MIDDLE: 					"Середній",
			HIGH: 						"Високий",

			PROTO: 						"Протокол",
			PORT: 						"Порт",
			PROTO_P: 					"Протокол:",
			PORT_P: 					"Порт:",
			PORT_TIPS: 					"(XX або XX-XX, 1-65535, в більшості 5 пар)",

			ALL: 						"ВСІ",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Вибірково",

			WIFI_HOME: 					"Wi-Fi-ХОСТ",
			WIFI_GUEST: 				"WiFi-ГІСТЬ",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Оновлення бази даних",

			NEWFILE: 					"Новий файл бази даних",
			FIRMWAREVERSION: 			"Версія бази даних",
			CONFIRM_CONTENT:			"Ви впевнені, що хочете оновити базу даних ?",
			WARNING:					"Оновлення Бази Даних<br/>Будь ласка, не працюйте під час процесу.",
			
			UPGRADE: 					"Оновити",

			SERVICE_RESTART: 			"Перезавантаження QOS Сервісу",
			
			TYPE: 						"Тип",
			BY_DEVICE: 					"За Пристроєм",
			BY_APP: 					"За додатками",
			BY_PHY: 					"За Фізичним Портом",

			HIGH_PRIORITY_LBL: 			"Високий Пріоритет:",
			MIDDLE_PRIORITY_LBL: 		"Середній Пріоритет:",
			LOW_PRIORITY_LBL: 			"Низький Пріоритет:",

			HIGH_PRIORITY: 				"Високий пріоритет",
			MIDDLE_PRIORITY: 			"Середній пріоритет",
			LOW_PRIORITY: 				"Низький пріоритет"

		},

		APPLICATION:{
			APP_LIST: 					"Список Програм",
			GAME_LIST: 					"Список Ігор",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Статистика Трафіку",
			ENABLE_STATISTICS: 			"Статистика Трафіку",

			TITLE: 						"Список Статистики Трафіку",
			IP_MAC: 					"IP-адреса / MAC адреса",
			TPKT: 						"Всього пакетів",
			TBYTE: 						"Всього байт",
			CPKT: 						"Поточні Пакети",
			CBYTE: 						"Поточні байти",
			CICMP: 						"Поточні ICMP Tx",
			CUDP: 						"Поточні UDP Tx",
			CSYN: 						"Поточні SYN Tx",
			
			DELETE_CONFIRM: 			"Ви впевнені, що хочете видалити статистику трафіку ?",
			DELETE_ALL_CONFIRM: 		"Ви впевнені, що хочете видалити всю статистику по трафіку?",

			RESET_ALL: 					"Відмінити все"
		},

		SYSPARA:{
			W24G: 						"Бездротова  мережа 2.4ГГц",
			W5G: 						"Бездротовамережа 5 ГГц",
			SWITCH_NOTICE:  			" Бездротова функція відключена. Якщо ви хочете використовувати цю функцію, будь ласка, натисніть кнопку вмикання Wi-Fi.",

			ENABLE_TIPS: 				"Функція бездротової мережі відключена.",

			BEACON: 					"Інтервал Маяку",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"Поріг RTS",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Поріг Фрагментації",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM Інтервал",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Період оновлення групового ключа",
			GROUPUNIT: 					"секунд",
			
			
			WMM_FEATURE: 				"Функція WMM",
			WMM: 						"Увімкнути WMM",

			GI_FEATURE: 				"Функція короткого GI",
			GI: 						"Увімкнути короткий GI",

			AP_FEATURE: 				"Функція Ізоляції точки доступу",
			AP: 						"Увімкнути Ізоляцію точки доступу",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Увімкнути TxBF",

			WDS_FEATURE: 				"WDS міст",
			WDS: 						"Увімкнути WDS міст",
			
			SSID_BRIDEGE: 				"SSID (з яким потрібно з'єднатися)",
			SURVEY: 					"Перегляд",

			SN: 						"СН",
			MAC_ADDRESS: 				"MAC-адреса",
			SSID: 						"SSID",
			SIGNAL: 					"Сигнал",
			CHANNEL: 					"Канал",
			SECURITY: 					"Безпека",
			CHOSEN: 					"Обраний",
			AP_NUMBER:					"Номер точки доступу",

			TOTAL: 						"Всього пунктів",

			MAC: 						"MAC-адреса (з якою потрібно з'єднатися)",
			MACUNIT: 					"Приклад:00-1D-0F-11-22-33",

			SECURITY: 					"Безпека",
			NO: 						"НІ",
			NONE: 						"Безпека відключена",
			WPA: 						"WPA-PSK / WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Пароль",
			
			AUTH_TYPE: 					"Тип Автент.",
			AUTO: 						"Авто",
			OPEN: 						"Без захисту",
			SHARED: 					"загальнодоступний ключ",

			WEP_INDEX: 					"WEP Індекс",
			KEY1: 						"Ключ1",
			KEY2: 						"Ключ2",
			KEY3: 						"Ключ3",
			KEY4: 						"Ключ4",

			WEP_KEY_FORMAT: 			"Формат WEP ключа",
			ASC: 						"ASCII",
			HEX: 						"Шістнадцятковий",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Увімкнути WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Увімкнути NAT",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"Увімкнути NAT Boost",
			
			MEDIA_SERVER: 				"Медіа Сервер",
			SCAN_INTERVAL: 				"Інтервал Автоматичного Сканування (Годин)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Налаштування рівня захисту DoS",

			ICMP: 						"Рівень ICMP-Flood пакетів",
			UDP: 						"Рівень пакетів UDP-FLOOD",
			TCP: 						"Рівень пакетів TCP-FLOOD",

			WDS_MODE: 					"Режим WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Низький ",
			MIDDLE: 					"Середній",
			HIGH: 						"Високий",

			TO: 						"кому",
			NOTICE_NAT_REBOOT: 			"Перезавантаження... <br/>Будь ласка, не працюйте під час процесу.",

			NOTICE_NAT_BOOST: 			"Модифікація NAT Boost, призведе до перезавантаження цього пристрою, ви впевнені, що хочете продовжити?",
			NOTICE:						"Канал вашого маршрутизатора не співпадає з каналом мосту Точки доступу. Ви хочете змінити його? ",

			UNIT: 						"(5-7200) пакетів/Секунду",
			LED: 						"LED",
			NIGHT_MODE: 				"Нічний режим",
			PERIOD_NIGHT_TIME: 			"Період Нічого Режиму",
			ENABLE: 					"Увімкнути Нічний Режим",
			HH_MM: 						"(ГГ:ХХ)",
			NIGHT_MODE_NOTE:            "Світлодіод вимкнено. Якщо Ви бажаєте увімкнути цю функцію, будь ласка, натисніть \"Увімкнути LED\" у правому верхньому куті цієї сторінки.",
			NOTE2:                      "Період нічного режиму вступає в силу на основі системного часу маршрутизатора."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"На даний момент сертифікат відсутній, будь ласка, <b>Створіть</b> його перед включенням VPN-сервера.",
			NO_CERT_NOTE2: 				"На даний момент сертифікат відсутній, будь ласка, <b>Створіть</b> його перед експортом конфігурації.",
			ENABLE_VPN_SERVER: 			"Включити VPN-сервер",
			SERVICE_TYPE: 				"Тип сервісу",
			SERVICE_PORT: 				"Порт сервісу",
			VPN_SUBNET: 				"Підмережа/Маска мережі VPN",
			CLIENTS_ACCESS: 			"Клієнтський доступ",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Лише Домашня Мережа",
			INTERNET_HOME: 				"Домашня Мережа та Мережа Інтернет",
			CERT_STR: 					"На даний момент сертифікат відсутній, натисніть \"ОК\", щоб створити його та зберегти Вашу конфігурацію.",
			CERT_STR2: 					"На даний момент сертифікат відсутній, натисніть \"ОК\", щоб створити його та експортувати Вашу конфігурацію.",
			CONF_FILE: 					"Файл конфігурації", 
			EXPORT_CONF_FILE: 			"Експортувати конфігурацію.",
			EXPORT: 					"Експорт",

			INSTALL_GUIDE: 				"Керівництво з установки VPN-клієнта",
			INSTALL_STEP: 				"Для включення та підключення Ваших клієнтських пристроїв до OpenVPN сервера:",
			INSTALL_NOTICE:				"Перед тим як конфігурувати OpenVPN-сервер, будь ласка, налаштуйте службу Динамічного DNS (рекомендовано) чи призначте статичну IP-адесу для порту WAN. Також переконайтеся, що Системний час встановлено правильно.  ",
			INSTALL_NOTE1: 				"Оберіть \"Включити VPN-сервер\".",
			INSTALL_NOTE2: 				"Перед тим, як почати налаштування OpenVPN серверу, будь ласка, налаштуйте сервіс Dynamic DNS (рекомендовано) чи присвойте статичну IP-адресу для Wan порту. Переконайтесь, що Ваш зовнішній порт NAT не є портом обслуговування, DMZ відключено і системний час вказано вірно. ",
			INSTALL_NOTE3: 				"Натисніть \"Експорт\" для збереження файлу конфігурації.",
			INSTALL_NOTE4: 				"На Ваші клієнтські пристрої, завантажте та встановіть утиліту OpenVPN-клієнта за посиланням <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Офіційно підтримується платформами, включаючи Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Запустіть утиліту OpenVPN-клієнта та додайте нове VPN-з'єднання, використовуючи збережений файл конфігурації, щоб підключити Ваш клієнтський пристрій до VPN-серверу.",
			NOTE: 						"Щоб дізнатися більше про OpenVPN-клієнтів, відвідайте посилання <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"IP-адреса клієнта",
			ACCOUNT_USERNAME: 			"Ім'я користувача",
			ACCOUNT_PASSWORD: 			"Пароль",
			CLIENT_IP_NOTE: 			"(до 10 клієнтів)",
			SAME_SUBNET_NOTE: 			"IP адреса клієнта та LAN IP адреса не можуть знаходитись в одній підмережі. ",
			CONFLICT_WITH_DHCP: 		"Конфлікт  IP адреси клієнта з DHCP діапазоном IP адрес.",
			CONFLICT_WITH_RESERVED: 	"Конфлікт IP адреси клієнта із зарезервованою IP адресую.",
			CONFLICT_WITH_OPENVPN: 		"IP адреса клієнта та IP адреса OpenVPN не можуть знаходитись в одній підмережі.",
			SAME_SUBNET_NOTE2: 			"Підмережа/Маска мережі VPN та IP-адреса локальної мережі (LAN) не можуть бути в одній підмережі.",
			CONFLICT_WITH_DHCP2: 		"Конфлікт VPN Підмережі/маски мережі та DHCP діапазону IP адрес.",
			CONFLICT_WITH_RESERVED2: 	"Конфлікт  VPN Підмережі/маски мережі із зарезервованою IP адресую.",
			CONFLICT_WITH_PPTPVPN: 		"VPN Підмережа/маска мережі та PPTP VPN  IP адреси не можуть знаходитись в одній підмережі.",
			VPN_MASK_ERROR: 			"Маска мережі не може бути більшою ніж 255.255.255.248.",
			ACCOUNT_LIST: 				"Список облікових записів (до 16 користувачів)",
			ADVANCED_SETTING: 			"Додатково",
			ALLOW_SAMBA: 				"Дозволити доступ до Samba (у мережі)",
			ALLOW_NETBIOS: 				"Дозволити NetBIOS транзитну пересилку",
			ALLOW_UNENCRYPTED_CONN: 	"Дозволити незашифровані  підключення",
			USERNAME_CONFLICT: 			"Дане ім'я користувача вже існує.",
			
			CONNECT_PPTP: 				"Для активації та підключення Ваших клієнтських пристроїв до PPTP VPN сервера:",
			CONNECT_NOTICE:				"Перед тим як конфігурувати PPTP VPN-сервер, будь ласка, налаштуйте службу Динамічного DNS (рекомендовано) чи призначте статичну IP-адресу для порту WAN. Також переконайтеся, що Ваш зовнішній порт налаштувань NAT не має значення 1723 та відключено DMZ, а також, що Системний час встановлено правильно.  ",
			CONNECT_NOTE1: 				"Оберіть \"Включити VPN-сервер\".",
			CONNECT_NOTE2: 				"Налаштуйте параметри OpenVPN-сервера і натисніть \"Зберегти\".",
			CONNECT_NOTE3: 				"На Ваших клієнтських пристроях, створіть PPTP VPN-з'єднання. Офіційно підтримується платформами Windows, Mac OSX, Linux.",
			CONNECT_NOTE4: 				"Запустіть програму PPTP VPN, додайте нове з'єднання та введіть доменне ім'я зареєстрованого сервісу Динамічного DNS або статичну IP-адресу, назначену для порту WAN, щоб підключити Ваш клієнтський пристрій до серверу PPTP VPN.",
			
			GENERATE_CERT: 				"Сертифікат",
			GENERATE_NEW_CERT: 			"Створити сертифікат.",
			GENERATE: 					"Генерувати",
			GENERATE_TIPS: 				"Створення сертифікату…<br/>Цей процес займе кілька хвилин, будь ласка, зачекайте.",
			CERT_SUCCESS: 				"Успішно",
			CERT_FAIL: 					"Не вдалося, спробуйте ще раз.",
			
			VPN_CONNECTIONS: 			"VPN З'єднання",
			OPEN_VPN_CONNECTIONS: 		"З'єднання OpenVPN",
			PPTP_VPN_CONNECTIONS: 		"З'єднання PPTP VPN",
			USER:				"Користувач",
			REMOTE_IP:			"Віддалена  IP",
			ASSIGNED_IP:			"Присвоєний IP"
		}
	};
})(jQuery);

