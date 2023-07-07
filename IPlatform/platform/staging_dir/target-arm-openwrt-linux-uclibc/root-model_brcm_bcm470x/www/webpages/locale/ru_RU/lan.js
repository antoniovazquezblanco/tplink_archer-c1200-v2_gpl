(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			EMAIL: 						"Электронная почта",
			FORGET_PASSWORD: 			"Забыли пароль?",
			LOGIN: 						"Вход",
			BEGIN: 						"Приступим к работе",
			IMPORTANT_UPDATE_INFO: 		"Чтобы избежать конфликта с устройством перед маршрутизатором, IP-адрес маршрутизатора был изменён на",
			CONTINUE: 					"Продолжить",

			IMPORTANT_NOTICE: 			"Внимание!",
			OR: 						", вы действительно хотите перейти на",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Нажмите кнопку Reset на маршрутизаторе и удерживайте её нажатой в течение %SECONDS% секунд для восстановления заводских настроек.",
			FORGET_PASSWORD_INFO_1: 	"Если функция восстановления пароля включена. Код подтверждения будет отправлен на указанный адрес электронной почты, с помощью которого вы сможете сбросить имя пользователя/пароль.",
			FORGET_PASSWORD_SEND_FAILED:"Не удалось выслать код! Проверьте соединение с Интернет.",

			VERIFICATION_CODE: 			"Код подтверждения",

			RECEIVE_CODE: 				"Выслать код",

			CONFIRM: 					"Подтвердить ",
			WELCOME: 					"Вас приветствует %model% TP-Link. Войдите в систему.",
			SEC: 						"s",

			USER_CONFLICT: 				"Не удаётся осуществить вход!",
			FIRST_TIME: 				"Сначала настройте ваш %PRODUCT% для подключения к Интернету. В первую очередь, создайте пароль для устройства для управления вашим %PRODUCT%.",
			FIRST_TIME1: 				"Создайте пароль администратора для управления %model%.",
			USER_CONFLICT_INFO: 		"Пользователь %USER% (узел %HOST%: %IP%/%MAC%) на данный момент вошёл в маршрутизатор.",
			USER_CONFLICT_INFO_2: 		"Пользователь %USER% (%IP%) на данный момент вошёл в маршрутизатор. Вы не можете войти одновременно с ним. Повторите попытку позднее.",
			USER_CONFLICT_INFO_3: "Возможен вход только с одного устройства в один момент времени. Хотите продолжить и отключить другое устройство?",
			
			LOGIN_FAILED: 				"Не удаётся выполнить вход!",
			LOGIN_FAILED_COUNT: 		"Вы использовали %num1 попыток входа, у вас ещё остаётся %num2 попыток.",
			NO_COOKIE: 					"Для входа необходимо включить поддержку Cookie в настройках браузера либо отключить режим приватности/инкогнито.", 

			FORGET_PASSWORD_NOTE: 		"Если функция восстановления пароля не включена. Нажмите кнопку Reset на маршрутизаторе и удерживайте её нажатой в течение %SECONDS% секунд для восстановления заводских настроек."
		},
		INIT: {
			PASSWORD: 					"Пароль",
			CONFIRM_PASSWORD:				"Подтвердите пароль",
			BEGIN: 						"Приступим к работе",
			IMPORTANT_UPDATE_INFO: 		"Чтобы избежать конфликта с внешним устройством, IP-адрес вашего маршрутизатора был обновлён до ",
			CONTINUE: 					"Далее",

			IMPORTANT_NOTICE: 			"Внимание!",
			OR: 						", вы действительно хотите перейти на",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Подтвердить ",

			SEC: 						"s",

			USER_CONFLICT: 				"Не удаётся осуществить вход!",
			
			USER_CONFLICT_INFO: 		"Пользователь %USER% (хост %HOST% (%IP%/%МАС%))в настоящее время выполнил вход в систему маршрутизатора. Вы не можете войти в систему одновременно. Пожалуйста, повторите попытку позже.",
			USER_CONFLICT_INFO_2: 		"Пользователь %USER% (%IP%) в настоящее время выполнил вход в систему маршрутизатора. Вы не можете войти в систему одновременно. Пожалуйста, повторите попытку позже.",
			
			LOGIN_FAILED: 				"Ошибка при входе в систему!",
			LOGIN_FAILED_COUNT: 		"Вы использовали %num1 попыток входа, у вас ещё остаётся %num2 попыток.",
			NO_COOKIE: 					"Для входа необходимо включить поддержку Cookie в настройках браузера либо отключить режим приватности/инкогнито.", 

			INIT_NOTE_TITLE: 			"Уважаемый пользователь, ",
			INIT_NOTE_CONTENT: 			"Сначала настройте ваш %PRODUCT% для подключения к Интернету. В первую очередь, создайте пароль для устройства для управления вашим %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Версия встроенного ПО: ",
			FEATURE: 						"Изменения и исправления ошибок:",
			TITLE: 							"Доступно обновление встроенного ПО.",
			UPGRADE_NOW: 					"Обновить",
			REMIND: 						"Напомнить позже",
			NOTICE:    						"Добрый день, доступна новая версия встроенного ПО для Вашего маршрутизатора.",
			NEVER: 							"Проигнорировать данную версию"
			
		},

		WAN_ERROR: {
			TITLE: 							"Ошибка WAN-соединения!",
			STATUS: 						"Статус",
			INFO: 							"Информация",
			SETUP: 							"Настроить подключение к Интернету",
			NEVER: 							"Больше не напоминать"
		},

		OFFLINE_ERROR:{
			TITLE: "Упс…Нет доступа к облачному серверу. ",
			NOTE1: "1. Убедитесь, что у вас есть доступ в Интернет. ",
			NOTE2: "2. Облачный сервер временно недоступен. Пожалуйста, обновите страницу позже. ",
			NOTE3: "3. Если проблема ещё не устранена, свяжитесь с <a target=\"_blank\" id=\"support\"> технической поддержкой TP-Link </a>.",
			ERROR: "Ошибка"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Версия встроенного ПО:",
			HARDWARE_VERSION: 				"Аппаратная версия:",
			HELP_SUPPORT: 					"Поддержка",
			FAQ: 							"FAQ",
			CONFIRM_REBOOT: 				"Вы действительно хотите перезагрузить маршрутизатор?",
			CONFIRM_LOGOUT: 				"Вы действительно хотите выйти?",
			UPGRADE_ALERT_1: 				"Текущая версия встроенного ПО не поддерживает облачный сервис TP-Link. Мы настоятельно рекомендуем Вам загрузить последнюю версию на сайте www.tp-link.com и обновить её. ",
			UPGRADE_ALERT_2: 				"Текущая версия встроенного ПО не поддерживает облачный сервис TP-Link. Мы настоятельно рекомендуем Вам обновить прошивку, нажав на иконку Обновить в верхнем правом углу. ",
			ACCOUNT_UNLOGIN: 				"Аккаунт",

			REBOOTING: 						"Перезагрузка...<br/>Не выполняйте никаких действий до завершения перезагрузки.",

			HELP_APP: 					"Приложение",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Отсканируйте QR-коддлязагрузкиприложенияTP-Link Tether",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Управляйтесетьюсудобствомслюбогомобильногоустройства.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Абсолютный контрольу вас на ладони."
		},

		NAV: {
			QUICK_SETUP: 				"Быстрая настройка",
			BASIC: 						"Базовая настройка",
			ADVANCED: 					"Дополнительные настройки"
		},

		CONTROL: {
			LOGIN: 						"Вход",
			LOGOUT: 					"Выход",
			UPDATE: 					"Обновить",
			REBOOT: 					"Пере <br/>загрузка",
			LED: 						"Светодиодные индикаторы",
			LED_ON: 					"Светодиодные индикаторы включены",
			LED_OFF: 					"Светодиодные индикаторы выключены",
			LED_DISABLED: 				"Статус светодиодных индикаторов не может меняться во время ночного режима "
		},

		LANGUAGE: {
			EN_US: 						"Английский",
			ZH_CN: 						"Русский"
		},

		REGION: {
			ALBANIA: 					"Албания",
			ALGERIA: 					"Алжир",
			AMERICAN_SAMOA: 			"Американское Самоа",
			ARGENTINA: 					"Аргентина",
			ARMENIA: 					"Армения",
			ARUBA: 						"Аруба",
			AUSTRALIA: 					"Австралия",
			AUSTRIA: 					"Австрия",
			AZERBAIJAN: 				"Азербайджан",
			BAHAMAS: 					"Багамские Острова",
			BAHRAIN: 					"Бахрейн",
			BANGLADESH: 				"Бангладеш",
			BARBADOS: 					"Барбадос",
			BELARUS: 					"Беларусь",
			BELGIUM: 					"Бельгия",
			BELIZE: 					"Белиз",
			BERUMUDA: 					"Бермудские Острова",
			BOLIVIA: 					"Боливия",
			BOSNIA_HERZEGOWINA: 		"Босния и Герцеговина",
			BRAZIL: 					"Бразилия",
			BRUNEI_DARUSSALAM: 			"Бруней-Даруссалам",
			BULGARIA: 					"Болгария",
			CAMBODIA: 					"Камбоджа",
			CANADA: 					"Канада",
			CAYMAN_ISLANDS: 			"Каймановы Острова",
			CHILE: 						"Чили",
			CHINA: 						"Китайская Народная Республика",
			COLOMBIA: 					"Колумбия",
			COSTA_RICA: 				"Коста-Рика",
			CROATIA: 					"Хорватия",
			CYPRUS: 					"Кипр",
			CZECH_REPUBLIC: 			"Чехия",
			DENMARK: 					"Дания",
			DOMINICAN_REPUBLIC: 		"Доминиканская Республика",
			ECUADOR: 					"Эквадор",
			EGYPT: 						"Египет",
			EL_SALVADOR: 				"Сальвадор",
			ESTONIA: 					"Эстония",
			ETHIOPIA: 					"Эфиопия",
			FAEROE_ISLANDS: 			"Фарерские острова",
			FINLAND: 					"Финляндия",
			FRANCE: 					"Франция",
			FRENCH_GUIANA: 				"Французская Гвиана",
			FRENCH_POLYNESIA: 			"Французская Полинезия",
			GEORGIA: 					"Грузия",
			GERMANY: 					"Германия",
			GREECE: 					"Греция",
			GREENLAND: 					"Гренландия",
			GRENADA: 					"Гренада",
			GUADELOUPE: 				"Гваделупа",
			GUAM: 						"Гуам",
			GUATEMALA: 					"Гватемала",
			HAITI: 						"Гаити",
			HONDURAS: 					"Гондурас",
			HONG_KONG: 					"Гонконг (КНР)",
			HUNGARY: 					"Венгрия",
			ICELAND: 					"Исландия",
			INDIA: 						"Индия",
			INDONESIA: 					"Индонезия",
			IRAN: 						"Иран",
			IRAQ: 						"Ирак",
			IRELAND: 					"Ирландия",
			ISRAEL: 					"Израиль",
			ITALY: 						"Италия",
			JAMAICA: 					"Ямайка",

			JAPAN: 						"Япония",
			JAPAN_1: 					"Япония 1",
			JAPAN_2: 					"Япония 2",
			JAPAN_3: 					"Япония 3",
			JAPAN_4: 					"Япония 4",
			JAPAN_5: 					"Япония 5",
			JAPAN_6: 					"Япония 6",

			JORDAN: 					"Иордания",
			KAZAKHSTAN: 				"Казахстан",
			KENYA: 						"Кения",

			NORTH_KOREA: 				"Северная Корея",
			KOREA_REPUBLIC: 			"Корейская республика",
			KOREA_REPUBLIC_3: 			"Корейская республика 3",

			KUWAIT: 					"Кувейт",
			LATVIA: 					"Латвия",
			LEBANON: 					"Ливан",
			LIBYA: 						"Ливия",
			LIECHTENSTEIN: 				"Лихтенштейн",
			LITHUANIA: 					"Литва",
			LUXEMBOURG: 				"Люксембург",
			MACAU: 						"Макао",
			MACEDONIA: 					"Македония",
			MALAWI: 					"Малави",
			MALAYSIA: 					"Малайзия",
			MALDIVES: 					"Мальдивы",
			MALTA: 						"Мальта",
			MARTHINIQUE: 				"Мартиника",
			MAURITIUS: 					"Маврикий",
			MAYOTTE: 					"Майотта",
			MEXICO: 					"Мексика",
			MONACO: 					"Монако",
			MONGOLIA: 					"Монголия",
			MOROCCO: 					"Марокко",
			NEPAL: 						"Непал",
			NETHERLANDS: 				"Нидерланды",
			NETHERLANDS_ANTILLES: 		"Нидерландские Антилы",

			NEW_ZEALAND: 				"Новая Зеландия",
			NICARAGUA: 					"Никарагуа",
			NIGERIA: 					"Нигерия",
			NORWAY: 					"Норвегия",
			NORTHERN_MARIANA_ISLANDS: 	"Северные Марианские острова",
			OMAN: 						"Оман",
			PAKISTAN: 					"Пакистан",
			PANAMA: 					"Панама",
			PAPUA_NEW_GUINEA: 			"Папуа Новая Гвинея",
			PARAGUAY: 					"Парагвай",
			PERU: 						"Перу",
			PHILIPPINES: 				"Филиппины",
			POLAND: 					"Польша",
			PORTUGAL: 					"Португалия",
			PUERTO_RICO: 				"Пуэрто-Рико",
			QATAR: 						"Катар",
			REUNION: 					"Реюньон",
			ROMANIA: 					"Румыния",
			RUSSIA: 					"Россия",
			RWANDA: 					"Руанда",
			SAMOA: 						"Самоа",
			SAUDI_ARABIA: 				"Саудовская Аравия",
			SINGAPORE: 					"Сингапур",
			SLOVAK_REPUBLIC: 			"Словакия",
			SLOVENIA: 					"Словения",
			SOUTH_AFRICA: 				"Южная Африка",
			SPAIN: 						"Испания",
			SRI_LANKA: 					"Шри-Ланка",
			SURINAME: 					"Суринам",
			SWEDEN: 					"Швеция",
			SWITZERLAND: 				"Швейцария",
			SYRIA: 						"Сирия",
			TAIWAN: 					"Тайвань",
			TANZANIA: 					"Танзания",
			THAILAND: 					"Таиланд",
			TRINIDAD_TOBAGO: 			"Тринидад и Тобаго",
			TUNISIA: 					"Тунис",
			TURKEY: 					"Турция",
			UGANDA: 					"Уганда",
			UKRAINE: 					"Украина",
			UNITED_ARAB_EMIRATES: 		"ОАЭ",
			UNITED_KINGDOM: 			"Великобритания",
			UNITED_STATES: 				"США",
			URUGUAY: 					"Уругвай",
			UZBEKISTAN: 				"Узбекистан",
			VENEZUELA: 					"Венесуэла",
			VIETNAM: 					"Вьетнам",
			VIRGIN_ISLANDS: 			"Виргинские Острова (США)",
			YEMEN: 						"Йемен",
			ZIMBABWE: 					"Зимбабве"
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
			M_AT_T:                                                       "АТ&T",
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
			M_INDONESIA:                                                  "Индонезия",
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
			ENIWETOK: 					"(GMT-12:00) Эниветок, Кваджалейн", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Острова Мидуэй, Самоа",
			HAWAII: 					"(GMT-10:00) Гавайи",
			ALASKA: 					"(GMT-09:00) Аляска",
			PACIFIC_TIME: 				"(GMT-08:00) Тихоокеанское время",
			MOUNTAIN_TIME: 				"(GMT-07:00) Горное время (США, Канада)",
			CENTRAL_TIME: 				"(GMT-06:00) Центральноамер. время (США, Канада)",
			EASTERN_TIME: 				"(GMT-05:00) Северовамер. восточное время (США, Канада)",
			CARACAS:					"(GMT-04:30) Каракас",
			ATLANTIC_TIME: 				"(GMT-04:00) Атлантическое время (Канада)",
			NEWFOUNDLAND: 				"(GMT-03:30) Ньюфаундленд",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Бразилиа, Буэнос-Айрес",
			MID_ATLANTIC: 				"(GMT-02:00) Среднеатлантическое время",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Азорские острова, Кабо-Верде",
			GREENWICH_MEAN_TIME: 		"(GMT) Среднее время по Гринвичу (Дублин, Лондон)",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Берлин, Стокгольм, Рим, Берн, Брюссель",
			ATHENS_HELSINKI: 			"(GMT+02:00) Афины, Хельсинки, Восточная Европа, Израиль",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Багдад, Кувейт, Найроби, Эр-Рияд, Москва",

			TEHERAN: 					"(GMT+03:30) Тегеран, Волгоград",

			ABU_DHABI: 					"(GMT+04:00) Абу-Даби, Мускат, Казань",

			KABUL: 						"(GMT+04:30) Кабул",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Исламабад, Карачи, Екатеринбург",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Мадрас, Калькутта, Бомбей, Нью-Дели",
			KATMANDU: 					"(GMT+05:45) Катманду",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Алма-Ата, Дакка, Новосибирск",
			RANGOON: 					"(GMT+06:30) Янгон",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Бангкок, Джакарта, Ханой",
			BEIJING_HONGKONG: 			"(GMT+08:00) Пекин, Гонконг, Перт, Сингапур",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Токио, Осака, Саппоро, Сеул, Якутск",

			ADELAIDE: 					"(GMT+09:30) Аделаида",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Брисбен, Владивосток, Канберра, Мельбурн, Сидней",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Магадан, Соломоновы о-ва, Новая Каледония",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Фиджи, Камчатка, Окленд",
			NUKU: 						"(GMT+13:00) Нукуалофа"
		},

		APPLIST:{
			APP:						"Приложение",
			GAME:						"ИГРА",
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
			xl_others:  				"xl_другое",
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
			FTP:						"FTP-сервер",
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

			MONDAY: 					"Понедельник",
			TUESDAY: 					"Вторник",
			WEDNESDAY: 					"Среда",
			THURSDAY: 					"Четверг",
			FRIDAY: 					"Пятница",
			SATURDAY: 					"Суббота",
			SUNDAY: 					"Воскресенье",
			
			MON: 						"Пон.",
			TUES: 						"Вт.",
			WED: 						"Ср.",
			THUR: 						"Чт.",
			FRI: 						"Пт.",
			SAT: 						"Сб.",
			SUN: 						"Вск.",

			JAN: 						"Янв.",
			FEB: 						"Фев.",
			MAR: 						"Март",
			APR: 						"Апр.",
			MAY: 						"Май",
			JUN: 						"Июнь",
			JUL: 						"Июль",
			AUG: 						"Авг.",
			SEP: 						"Сен.",
			OCT: 						"Окт.",
			NOV: 						"Ноя.",
			DEC: 						"Дек."

		},

		HOUR: {
			AM_1: 						"01 ч",
			AM_2: 						"02 ч",
			AM_3: 						"03 ч",
			AM_4: 						"04 ч",
			AM_5: 						"05 ч",
			AM_6: 						"06 ч",
			AM_7: 						"07 ч",
			AM_8: 						"08 ч",
			AM_9: 						"09 ч",
			AM_10: 						"10 ч",
			AM_11: 						"11 ч",
			AM_12: 						"12 ч",
			PM_1: 						"13 ч",
			PM_2: 						"14 ч",
			PM_3: 						"15 ч",
			PM_4: 						"16 ч",
			PM_5: 						"17 ч",
			PM_6: 						"18 ч",
			PM_7: 						"19 ч",
			PM_8: 						"20 ч",
			PM_9: 						"21 ч",
			PM_10: 						"22 ч",
			PM_11: 						"23 ч",
			PM_12: 						"00 ч"
		},

		ORDER: {
			"1ST": 						"Первый",
			"2ND": 						"2й",
			"3RD": 						"3й",
			"4TH": 						"4й",
			"5TH": 						"Последний",
			"1ST_": 					"1й",

			TH: 						"й"
		},

		GRID: {
			CLIENT_NUMBER: 				"Число клиентов",

			ID: 						"ID",
			MODIFY: 					"Изменить",
			STATUS: 					"Статус",
			ENABLE: 					"Включить",

			OPERATION: 					"Состояние",
			CHOOSE: 					"Выбрать",
			DESCRIPTION: 				"Описание",
			

			AUTO_REFRESH: 				"Автообновление",
			REFRESH: 					"Обновить",
			NUMBER: 					"Номер",
			ENABLED: 					"Включено",
			DISABLED: 					"Выключено",
			ACTIVE: 					"Активно",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Добавить",
			CHOOSE: 					"Выбрать",
			EDIT: 						"Изменить",
			DELETE: 					"Удалить",
			DELETE_ALL: 				"Удалить всё",
			REMOVE: 					"Удалить",
			RESET: 						"Сброс",
			RESET_ALL: 					"Сбросить всё",
			DETECT: 					"Определить",
			ENABLE: 					"Включить",
			DISABLE: 					"Выключить",
			CLEAR: 						"Очистить",

			REFRESH: 					"Обновить",
			SEARCH: 					"Поиск…",
			BROWSE: 					"Обзор",

			SAVE: 						"Сохранить",
			BACK: 						"Назад",

			PREV: 						"Пред.",
			NEXT: 						"Далее",
			FINISH: 					"Завершить",
			
			ON: 						"Вкл",
			OFF: 						"Выкл",
			LOW: 						"Низкий",
			MIDDLE: 					"Средний",
			HIGH: 						"Высокий",
			
			OK: 						"ОК",
			CANCEL: 					"Отменить",

			YES: 						"Да",
			NO: 						"Нет",
			
			CONNECTED: 					"Подключено",
			CONNECTING: 				"Подключение",
			DISCONNECTING: 				"Отключение",
			DISCONNECTED: 				"Отключено",

			PASSWORD_HINT: 				"Пароль",
			FILEBUTTONTEXT: 			"Обзор",
			FILEBLANKTEXT: 				"Выберите файл.",
			NOSELECTEDTEXT: 			"Выберите опцию.",

			ADD_A_NEW_KEYWORD: 			"Добавить новое доменное имя",

			SUCCESSED: 					"Успешно!",
			FORM_SAVED: 				"Сохранено",
			FORM_FAILED: 				"Ошибка!",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Сохранено",
			GRID_FAILED: 				"Ошибка!",
			GRID_NONE_SELECT: 			"Выберите, по крайней мере, одну запись. ",
			GRID_DELETE_COMFIRM: 		"Удалить эти записи?",
			GRID_DELETE_ALL_COMFIRM: 	"Удалить все записи?",
			GRID_MAX_RULES: 			"Вы уже указали максимальное количество записей.",
			KEYWORD_MAX_OVERFLOW: 		"Вы превысили допустимое количество ключевых слов.",

			NOTE: 						"Примечание:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Неправильный формат.",
			BLANKTEXT: 					"Необходимо данное поле. ",

			EMAIL: 						"Некорректный формат электронной почты.",
			NUMBER: 					"Неправильный формат.",

			NUMBER_MIN: 				"Неправильное значение. Укажите значение, которое больше %min.",
			NUMBER_MAX: 				"Неправильное значение. Укажите значение, которое меньше %max.",

			NUMBER_MIN_MAX: 			"Неправильное значение. Пожалуйста, укажите значение между %min и %max.",
			HEX: 						"В данном поле необходимо указывать шестнадцатеричные символы.",

			IP: 						"Неправильный формат.",

			IP_NO_ALL_ZERO:				"Адрес не должен быть 0.0.0.0.",
			IP_NO_LOOP:					"Адрес не должен быть loopback IP-адресом.",
			IP_NO_D_TYPE:				"Адрес не должен быть IP-адресом сетей класса D.",
			IP_NO_E_TYPE:				"Адрес не должен быть IP-адресом сетей класса D.",
			IP_NO_ALL_ONE:				"Адрес не должен быть 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"Адрес не должен начинаться с 255.",
			IP_NO_FIRST_ZERO:			"Адрес не должен начинаться с 0.",
			MASK_NO_ALL_ONE:			"Маска подсети не должна быть 255.255.255.255.",

			IPV6: 						"Неправильный формат.",
			IPV6_NOT_GLOBAL:			"Неправильный формат.",
			IPV6_NOT_PREFIX:			"Неправильный формат.",
			IP_DOMAIN: 					"Неправильный формат.",
			IPV6_DOMAIN: 				"Неправильный формат.",
			MAC: 						"Неправильный формат.",
			MULTI_MAC:					"Неправильный формат.",
			DATE: 						"Неправильный формат.",
			DATE_INVALID: 				"Укажите дату в диапазоне 01/01/1970 - 12/31/2030.",
			MASK: 						"Неправильный формат.",
			DOMAIN: 					"Неправильный формат.",
			STRING_DOMAIN:              "Неправильный формат.",
			USER: 						"Неправильный формат.",
			NOTE: 						"Неправильный формат.",
			PWD: 						"Неправильный формат.",
			SSID: 						"Неправильный формат.",
			NAME:						"Неправильный формат.",
			ASCII_VISIBLE:				"Неправильный формат.",
			STRING_VISIBLE:				"Неправильный формат.",
			STRING_VISIBLE_NO_COMMA:    "Неправильный формат.",
			STRING_VISIBLE_ALLOW_BLANK: "Неправильный формат.",
			NAME_SPECIAL: 				"Пожалуйста, введите 4-15 букв, цифр, знаков \"-\" или \"_\".",
			VPN_NAME_PWD: 				"Пожалуйста, введите 1-15 букв, цифр, знаков \"-\" или \"_\"."	
			
		},


		ERROR: {			
			"00000001":					"Недопустимый тип файла.",
			"00000002":					"Ошибка контрольной суммы.",
			"00000003":					"Слишком большой размер файла.",
			"00000004":					"Ошибка при загрузке.",
			"00000005":					"Ошибка при перезагрузке.",
			"00000006":					"Неизвестная ошибка. ",
			"00000007":					"Запись уже используется. Пожалуйста, укажите другое значение.",

			"00000009":					"Пожалуйста, используйте значение по умолчанию 21 или значение между 1024 и 65535.",
			"00000010":					"Значение порта должно быть цифровым.",

			"00000011":					"Значение Имени пользователя и Отправителя должны совпадать.",
			"00000012": 				"Имя пользователя должно начинаться с алфавитного символа.",

			"00000021":					"Неправильный формат.",

			"00000032": 				"Значение должно быть меньше уровня Низкий.",
			"00000033": 				"Значение должно быть меньше уровня Средний или Низкий.",
			"00000034": 				"Неверное значение. Укажите число от 5 до 7200.",

			"00000039": 				"Пожалуйста, используйте значение по умолчанию 0 или значение между 30 и 86400",
			"00000040": 				"Необходимо указать значение SSID и MAC-адреса.",

			"00000042": 				"Пожалуйста, используйте значение по умолчанию 80 или значение между 1024 и 65535.",

			"00000045": 				"Основной шлюз и LAN IP-адрес должны находиться в одной подсети. Укажите адрес заново.",

			"00000047": 				"Пул IP-адресов и LAN IP-адрес должны находиться в одной подсети, пожалуйста, укажите снова.",

			
			"00000049":					"IP-адрес назначения указан неверно.",

			"00000050": 				"IP-адрес DNS-сервера указан неверно. Пожалуйста, укажите другой IP-адрес.",
			"00000051": 				"MAC-адрес уже использован. Укажите другое значение.",
			"00000052": 				"Этот IP-адрес уже использован. Укажите другой адрес.",

			"00000053": 				"Значение начального адреса не должно превышать значение конечного адреса. <br/>Пожалуйста, укажите другой адрес.",

			"00000054": 				"Пул IP-адресов и LAN IP-адрес должны находиться в одной подсети, пожалуйста, укажите снова.",

			"00000055": 				"IP-адрес не должен совпадать с LAN IP-адресом.",

			"00000056": 				"Удалённый IP-адрес и LAN IP-адрес не могут находиться в одной подсети. Пожалуйста, укажите другое значение.",

			"00000057": 				"Неверный пароль, пожалуйста, введите заново.",
			"00000058": 				"Неверный пароль (ключ WEP), пожалуйста, введите заново.",

			"00000059": 				"Неправильное значение маски подсети и LAN IP-адреса, укажите правильные значения.",

			"00000060": 				"WAN IP-адрес и LAN IP-адрес не могут находиться в одной подсети. <br/>Пожалуйста, укажите другое значение.",

			"00000061": 				"Время начала должно быть раньше времени окончания.",

			"00000062": 				"Необходимо данное поле. ",
			"00000063": 				"Необходимо данное поле. ",

			"00000064": 				"Невозможно заблокировать MAC-адрес узла.",
			"00000065": 				"Запись конфликтует с другими действующими записями, пожалуйста, проверьте.",
			
			"00000066": 				"Пароль должен содержать от 8 до 63 символов или 64 шестнадцатеричных символа.",
			"00000067": 				"Пароль должен содержать 10 шестнадцатеричных символов.",
			"00000068": 				"Пароль должен содержать 5 символов в формате ASCII.",
			"00000069": 				"Пароль должен содержать 26 шестнадцатеричных символов.",
			"00000070": 				"Пароль должен содержать 13 символов в формате ASCII.",
			"00000071": 				"Пароль должен содержать 32 шестнадцатеричных символа.",
			"00000072": 				"Пароль должен содержать 16 символов в формате ASCII.",
			"00000073": 				"Пароль должен быть менее 64 символов.",

			"00000074": 				"Недопустимый тип файла.",

			"00000075": 				"PIN-код должен состоять из 8 символов.",

			"00000076": 				"Значение не соответствует указанным данным, проверьте триггер порт и триггер протокол.",
			"00000077": 				"IP-адрес не должен совпадать с LAN IP-адресом.",
			"00000078": 				"IP-адрес узла не должен совпадать с IP-адресом  в сети LAN.",

			"00000080": 				"Пароли не совпадают. Пожалуйста, укажите заново.",

			"00000088": 				"Данная операция недопустима при использовании удалённого управления.",
			"00000089": 				"Вы использовали %num попыток входа, повторите попытку через два часа.",

			"00000090": 				"IP-адрес назначения не должен быть LAN IP-адресом.",
			"00000091": 				"IP-адрес назначения не должен быть WAN IP-адресом.",

			"00000092": 				"Данный IP-адрес и LAN IP-адрес не могут находиться в одной подсети. <br/>Пожалуйста, укажите другое значение.",
			"00000093": 				"Данный IP-адрес и WAN IP-адрес не могут находиться в одной подсети. <br/>Пожалуйста, укажите другое значение.",

			"00000094": 				"Значения Vlan ID не должны совпадать.",
			"00000095": 				"Требуется указать хотя бы один Интернет-порт.",

			"00000096": 				"Такое слово уже использовано.",

			"00000097": 				"Настройки для частоты 2,4 ГГц вступят в силу только после ВКЛЮЧЕНИЯ (положение ON) кнопки Wi-Fi.",
			"00000098": 				"Настройки для частоты 5 ГГц вступят в силу только после ВКЛЮЧЕНИЯ (положение ON) кнопки Wi-Fi.",
			"00000099": 				"Настройки для частот 2,4 и 5 ГГц вступят в силу только после ВКЛЮЧЕНИЯ (положение ON) кнопки Wi-Fi.",

			"00000100": 				"Законодательные ограничения вашего региона/страны не позволяют использовать частоту  5 ГГц для беспроводной сети.",

			"00000101": 				"Функция беспроводного вещания выключена. Если вы хотите использовать эту функцию, нажмите кнопку Wi-Fi.",
			"00000102": 				"Функция беспроводного вещания выключена. Если вы хотите использовать эту функцию, нажмите кнопку Wi-Fi.",

			"00000103": 				"Функция беспроводного вещания выключена. Если вы хотите использовать эту функцию, нажмите кнопку Wi-Fi.",
			"00000104": 				"Функция беспроводного вещания отключена.",

			"00000105": 				"Нельзя использовать функцию приоритезации данных и  IPTV одновременно.",

			"00000106": 				"IP-адрес не должен совпадать с LAN IP-адресом.",
			
			"00000107": 				"IP-адрес назначения уже существует..",

			"00000110": 				"IP-адрес и LAN IP-адрес должны находиться в одной подсети.",
			
			"00000111": 				"Функции приоритезации трафика и <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">ускорения NAТ</a> не могут быть включены одновременно.",
			"00000112": 				"Режим WDS может работать либо на частоте 2,4 ГГц, либо на частоте 5 ГГц. Гостевая сеть не доступна в режиме WDS.",
			"00000113": 				"Режим WDS и Гостевая сеть не могут использоваться одновременно.",
			"00000114": 				"Статистика трафика и <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">ускорение NAT</a> не могут быть включены одновременно.",
			"00000115": 				"Нельзя использовать функцию приоритезации данных и  IPTV одновременно.",

			"00000117": 				"Доменное имя уже использовано.",
			"00000118": 				"Вы превысили допустимое количество доменных имён.",
			"00000119":				"Если функция ускорения NAT отключена, то <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">приоритезация данных</a> или <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Статистика трафика</a> будет включена автоматически.",

			"00000120": 				"Пароль должен состоять из 5 или 13 символов в кодировке ASCII.",
			"00000121": 				"Пароль должен состоять из 10 или 26 шестнадцатеричных числа.",
			"00000122": 				"Имя пользователя и пароль не указаны. Продолжить?",
			"00000123": 				"Сохранение…<br/>Не выполняйте никаких действий во время сохранения.",
			"00000124": 				"PIN-код маршрутизатора заблокирован из-за частых попыток ввода неправильного PIN-кода. Создайте новый код.",

			"00000125": 				"Вы превысили допустимое количество правил приоритезации данных.",
			"00000126": 				"Размер файла превышает допустимый предел.",
			"00000127": 				"Содержимое файла неверно.",
			"00000128": 				"Выберите хотя бы одно приложение.",
			"00000129": 				"Выберите хотя бы один физический порт.",
			"00000130":					"Функция WPS отключена.",
			"00000131": 				"Адрес NTP-сервера не должен быть loopback-адресом.",
			"00000132": 				"Не удалось переключить режим. Повторите попытку позже или перезагрузите маршрутизатор.",
			"00000133": 				"IP-адрес узла DMZ указан неверно. Укажите правильный адрес.",
			"00000134":  				"Внутренний IP-адрес указан неверно. Укажите правильный адрес",
			"00000135": 				"Ошибка файла встроенного ПО. ",
			"00000136": 				"Ошибка восстановления настроек.",
			"00000137": 				"Имя пользователя не указано. Продолжить?",
			"00000138": 				"Пароль не указан. Продолжить?",
			"00000139": 				"Неверные данные для восстановления Интернет-пароля.",
			"00000140": 				"Неверный код.",
			"00000141": 				"Восстановление пароля отключено.",
			"00000142": 				"Не удалось отправить код. Проверьте подключение к Интернет.",
			"00000143": 				"Неверный адрес электронной почты.",
			"00000144": 				"Недопустимое сообщение эл. почты.",
			"00000145": 				"Невозможно найти узел.",
			"00000146": 				"Ошибка аутентификации.",
			"00000147": 				"Укажите порт в пределах от 1 до 65535.",
			"00000148": 				"В диапазоне портов, номер начального порта должен быть меньше номера конечного порта. Пожалуйста, введите ещё раз.",
			"00000149": 				"Номера портов пересекаются. Пожалуйста, введите ещё раз. ",
			"00000150": 				"Неправильное значение маски подсети и WAN IP-адреса, укажите правильные значения.",
			"00000151": 				"Пожалуйста, выберите хотя бы один день.",
			"00000152": 				"Пожалуйста, выберите время доступа в интернет.",
			"00000213":					"IP-адрес DNS сервера и LAN IP-адрес не могут находиться в одной подсети. <br/> Введите другое значение. ",
			"10000139": 				"Нет подключения к Интернету",
			"10000140": 				"Время ожидания запроса истекло. Проверьте подключение к Интернету и повторите попытку позже. ",
			"10000158": 				"К порту WAN не подключён кабель.",
			"10000159": 				"Невозможно установить соединение с Интернетом. Обратитесь к Вашему поставщику услуг или повторите попытку позже. ",
			"10000160": 				"Невозможно получить IP-адрес с DHCP сервера. Проверьте ваш тип соединения WAN или повторите попытку позже. ",
			"10000161": 				"Ошибка аутентификации PPPoE. Проверьте ваше имя пользователя/пароль. ",
			"10000162": 				"Невозможно подключиться к PPPoE серверу. ",

			"10000164": 				"Ошибка аутентификации PPTP. Проверьте ваше имя пользователя/пароль. ",
			"10000165": 				"Невозможно подключиться к PPTP серверу. ",

			"10000167": 				"Ошибка аутентификации L2TP. Проверьте ваше имя пользователя/пароль. ",
			"10000168": 				"Невозможно подключиться к L2TP серверу. ",
			"10000169": 				"Неизвестная ошибка. Попробуйте попытку позже. ",
			"10000172": 				"Не удалось подключиться.",

			"10000185": 				"Системная ошибка.",	
			"10000186": 				"Ошибка файла встроенного ПО. ",	
			"10000187": 				"Ошибка при загрузке встроенного ПО. ",	
			"10000188": 				"Ошибка при обновлении встроенного ПО. ",	
			"10000191": 				"Невозможно загрузить файл встроенного ПО. ",
			"10000192": 				"Ошибка при обновлении встроенного ПО. ",
			"10000193": 				"Невозможно подключиться к серверу. ",	
			"10000194": 				"Невозможно подключиться к облачному серверу. Повторите попытку позже. ",
			"10000195": 				"Вы не можете установить пароль повторно, так как один пароль уже создан. ",
			
			"E3002":                    "Время запроса вышло. ", 
			"E10000": 					"Обычная ошибка. ",
			"E20002": 					"Время запроса вышло. ",
			"E20003": 					"Облачный сервер перегружен. Повторите попытку позже.",
			"E20107": 					"Неверный ввод данных. ",
			"E20200": 					"Некорректный формат электронной почты.",
			"E20502": 					"Невозможно выполнить привязку к данному устройству. Повторите попытку позже. ",
			"E20503": 					"Невозможно выполнить отвязку от данного устройства. Повторите попытку позже. ",
			"E20506": 					"Ошибка при функционировании. Устройство привязано к другому облачному аккаунту. ",
			"E20507": 					"Данное устройство отвязано от аккаунта. ",
			"E20508": 					"Количество привязанных аккаунтов достигло максимального лимита.",
			"E20509": 					"Пользовательские аккаунты не имеют права привязывать новых пользователей.",
			"E20571": 					"Данное устройство находится не в сети. ",
			"E20580": 					"Ошибка при функционировании. Данный аккаунт не привязан к устройству. ",
			"E20600": 					"Данная электронная почта не зарегистрирована. ",
			"E20601": 					"Неверное имя пользователя или пароль. ",
			"E20602": 					"Данный аккаунт ещё не активирован. ",
			"E20603": 					"Данный адрес электронной почты уже зарегистрирован. ",
			"E20604": 					"Неверное имя пользователя. Укажите адрес электронной почты или номер телефона. ",
			"E20606": 					"Невозможно отправить письмо с активацией аккаунта. ",
			"E20615": 					"Неверный пароль. Введите от 6-32 символов ASCII без пробелов.",
			"E20616": 					"Неверный пароль. Введите от 6-32 символов ASCII без пробелов.",
			"E20617": 					"Данный аккаунт не существует. ",
			"E20618": 					"Данный аккаунт не существует. ",
			"E20620": 					"Неверное имя. Введите от 1-64 символов. ",
			"E20661": 					"Данный аккаунт будет заблокирован на 2 часа в связи с повышенным числом попыток входа в систему (20 раз в течение получаса).",
			"E20662": 					"Данное устройство заблокировано. В течение последующих 24 часов устройство не будет отвечать на любой запрос о коде подтверждения.",
			"E20671": 					"Невозможно проверить аккаунт. ",
			"E20672": 					"Невозможно проверить аккаунт. Срок действия ссылки на активацию вашего аккаунта истёк. Отправьте новый запрос. ",
			"E20673": 					"Срок действия ссылки на сброс пароля истёк. Отправьте новый запрос. ",
			"E20674": 					"Невозможно сбросить пароль. ",
			"E20675": 					"Под данным аккаунтом в настоящее время выполнен вход в другое устройство.",
			"E22000": 					"Неверный ввод данных. ",
			"E22001": 					"Доменное имя уже зарегистрировано. ",
			"E22002": 					"Количество зарегистрированных доменных имён достигло максимального лимита. ",
			"E22003": 					"Количество привязанных доменных имён достигло максимального лимита. ",
			"E22004": 					"Данное доменное имя уже привязано к другому устройству. ",
			"E22006": 					"Системная ошибка. Повторите ошибку позже. ",
			"E22007": 					"Доменное имя содержит слова нецензурные слова. Введите другое значение. ",
			"E22008": 					"Данное доменное имя не существует. ",

			"E50101": 					"К порту WAN не подключён кабель.",
			"E50102": 					"Невозможно установить подключение к Интернет. Свяжитесь с вашим поставщиком услуг или повторите попытку позже. ",
			"E50103": 					"Невозможно получить IP-адрес с DHCP сервера. Проверьте ваш тип соединения WAN или повторите попытку позже. ",
			"E50111": 					"Ошибка аутентификации PPPoE. Проверьте ваше имя пользователя/пароль. ",
			"E50112": 					"Невозможно подключиться к PPPoE серверу. ",
			"E50121": 					"Ошибка аутентификации PPTP. Проверьте ваше имя пользователя/пароль. ",
			"E50122": 					"Невозможно подключиться к PPTP серверу. ",
			"E50131": 					"Ошибка аутентификации L2TP. Проверьте ваше имя пользователя/пароль. ",
			"E50132": 					"Невозможно подключиться к L2TP серверу. ",
			"E50140": 					"Неизвестная ошибка. Попробуйте попытку позже. ",
			"E51215": 					"Время ожидания запроса истекло. Проверьте подключение к Интернету и повторите попытку позже. ",
			"E_CLOUD_SERVER": 			"Ошибка сервера, пожалуйста, попробуйте позже.",
			"E5000": 					"Невозможно подключиться к облачному серверу.",
			"E5001": 					"Неверный TP-Link ID (электронная почта), ваше устройство находится не в сети и только у администратора  (%email) есть офлайн-доступ. ",
			"E5002": 					"Неверный пароль."
		},

		MENU: {
			STATUS: 					"Статус",
			NETWORK: 					"Сеть",
			NETWORK_MAP: 				"Схема сети",
			INTERNET: 					"Интернет",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP-сервер",
			DYNAMIC_DNS: 				"DDNS",
			ADVANCED_ROUTING: 			"Расширенные настройки маршрутизации",

			WIRELESS: 					"Беспроводной режим",
			WIRELESS_SETTINGS: 			"Настройки беспроводного режима",
			WDSBRIDGING: 				"Мост WDS",
			WPS: 						"WPS",
			MACFILTERING: 				"Фильтрация МАС-адресов",
			WIRE_STATISTICS: 			"Статистика",
			
			
			GUEST_NETWORK: 				"Гостевая сеть",
			WIRELESS_SETTINGS: 			"Настройки беспроводного режима",
			STORAGE_SHARING: 			"Хранилище данных",
			NAT_FORWARDING: 			"NAT переадресация",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Виртуальные серверы",
			PORT_TRIGGERING: 			"Port Triggering",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"Настройки USB",
			BASIC_SET: 					"Базовые настройки",
			DISK_SET: 					"Настройки устройства",
			FOLDER_SHARING: 			"Совместный доступ",
			STORAGE_SHARING: 			"Хранилище данных",
			FTP_SERVER: 				"FTP-сервер",
			MEDIA_SERVER: 				"Медиа-сервер",
			PRINT_SERVER: 				"Принт-сервер",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Родительский контроль",
			
			QOS:  						"Приоритезация данных",
			DATABASE:  					"База данных",

			STREAMBOOST: 				"Увеличение скорости",
			MAP: 						"Карта",
			SB_MAP: 					"Карта",
			SB_BANDWIDTH:  				"Пропускная способность",
			SB_PRIORITY: 				"Приоритет",
			SB_STATISTICS: 				"Статистика",

			
			SECURITY: 					"Защита",
			SETTINGS: 					"Настройки",
			ACCESS_CONTROL: 			"Контроль доступа",
			IP_MAC_BINDING: 			"Привязка IP- и MAC-адресов",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Системные инструменты",
			TIME_SETTINGS: 				"Настройка времени",
			DIAGNOSTIC: 				"Диагностика",
			FIRMWARE_UPGRADE: 			"Обновление встроенного ПО",
			BACKUP_RESTORE: 			"Резервная копия и восстановление",
			ADMINISTRATION: 			"Администрирование",
			SYSTEM_LOG: 				"Системный журнал",
			STATISTICS: 				"Статистика трафика",
			SYSTEM_PARAMETERS: 			"Параметры системы",
			ACCOUNT: 					"Облако TP-Link",
			
			VPN: 						"VPN-сервер",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"VPN соединения"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Регион и часовой пояс",
			INTERNET_CONNECTION_TYPE: 	"Тип подключения к Интернет",
			WIRELESS_SETTINGS: 			"Настройки беспроводного режима",
			SUMMARY: 					"Обзор настроек",
			SETUP_COMPLETE: 			"Тест Интернет-соединения",
			SETUP_COMPLETE_CLOUD: 			"Облачный сервис TP-Link",

			EXIT: 						"Выход",
			NEXT: 						"Далее",
			SAVE: 						"Сохранить",
			FINISH: 					"Завершить",
			OK: 						"ОК",
			NONE: 						"Не удалось определить.",

			REGION: 					"Регион",
			TIME_ZONE: 					"Часовой пояс",

			AUTO_DETECT: 				"Автоопределение",
			DYNAMIC_IP: 				"Динамический IP-адрес",
			STATIC_IP: 					"Статический IP-адрес",
			PPPOE: 						"PPPoE/PPPoE Россия",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Если вы не уверены, какой тип подключения к Интернет используется на вашем компьютере, свяжитесь с вашим поставщиком Интернет-услуг и уточните у него эту информацию.",

			DYNAMIC_IP_INFO: 			"Если ваш поставщик Интернет-услуг предоставляет доступ к Интернет только для определённого МАС-адреса, то вам необходимо клонировать этот МАС-адрес, чтобы разрешить доступ к Интернет другим устройствам. Если вы не уверены, выберите вариант НЕ клонировать MAC-адрес.",
			MAC_CLONE_NO: 				"НЕ клонировать MAC-адрес",
			MAC_CLONE_YES: 				"Клонировать MAC-адрес текущего компьютера",
			MAC_CLONE_NOTE: 			"Если вы решили клонировать МАС-адрес, прежде чем нажимать кнопку Далее, сначала убедитесь, что МАС-адрес именно данного компьютера был зарегистрирован поставщиком Интернет-услуг.",

			PPPOE_INFO: 				"Введите имя пользователя и пароль для подключения PPPoE/PPPoE Россия.",
			
			STATIC_IP_INFO: 			"Укажите параметры IP.",

			L2TP_INFO: 					"Укажите имя пользователя и пароль для подключения L2TP/L2TP Россия.",
			PPTP_INFO: 					"Укажите имя пользователя и пароль для подключения PPTP/PPTP Россия.",
			
			USERNAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			SERVER_IP_ADDRESS_NAME: 	"IP-адрес/доменное имя VPN-сервера",
			IP_ADDRESS: 				"IP-адрес",
			SUBNET_MASK: 				"Маска подсети",
			DEFAULT_GATEWAY: 			"Основной шлюз",
			PRIMARY_DNS: 				"Предпочитаемый DNS-сервер",
			SECOND_DNS: 				"Альтернативный DNS-сервер",
			OPTIONAL: 					"(необязательная настройка)",
			
			ON: 						"Вкл",
			OFF: 						"Выкл",
			WIRELESS_24GHZ: 			"Беспроводной режим 2,4 ГГц",
			WIRELESS_5GHZ: 				"Беспроводной режим 5 ГГц",
			ENABLE_WIRELESS_RADIO: 		"Включить беспроводное вещание",
			NAME_SSID: 					"Имя беспроводной сети (SSID)",

			SUMMARY_INFO1: 				"Вам необходимо переподключить ваши беспроводные устройства к новой беспроводной сети и только после этого нажать кнопку <strong>Далее</strong>.",
			SUMMARY_INFO2: 				"Имя и пароль вашей беспроводной сети были изменены:",
			SUMMARY_INFO3: 				"Убедитесь, что вы подключены к новой сети.",

			WIRELESS_24GHZ_SSID: 		"Имя (SSID) беспроводной сети 2,4 ГГц",
			WIRELESS_24GHZ_PASSWORD: 	"Пароль беспроводной сети 2,4 ГГц",
			WIRELESS_5GHZ_SSID: 		"Имя (SSID) беспроводной сети 5 ГГц",
			WIRELESS_5GHZ_PASSWORD: 	"Пароль беспроводной сети 5 ГГц",

			SORRY: 						"Ошибка.",
			SUCCESS: 					"Успешно!",
			TEST_INTERNET_SUCCESS_INFO: "Настройка успешно завершена! Нажмите Завершить для выхода из быстрой настройки.",

			TEST_INTERNET_FAILED_INFO_0:"Проверьте правильность настроек всех параметров Быстрой настройки и повторите попытку. Если параметры Быстрой настройки указаны верно, перезагрузите модем, подождите 2 минуты, затем нажмите 'Тест Интернет-соединения'",
			TEST_INTERNET_FAILED_INFO_1: "Упс... Подключение к Интернет не установлено.<br />1. Убедитесь, что все кабели подключены надлежащим образом. <br />2. Нажмите Назад и проверьте, что информация о подключении к Интернет верная.<br />3. Свяжитесь с нашей технической поддержкой, если проблема ещё не устранена.",
			SUMMARY_INFO4: 				"Внимание! Вы не переподключились к новой беспроводной сети. Сначала переподключите ваши беспроводные устройства, затем нажмите <strong>OK</strong>.",
                                         
			CONGRATULARIONS: 			"Поздравляем!",
			COMPLETE_INFO_0: 			"Быстрая настройка завершена.",
			COMPLETE_INFO_1:			"Нажмите расположенную ниже кнопку Тест Интернет-соединения, затем нажмите Завершить.",
			COMPLETE_INFO_2: 			"Вы не вошли в облачный аккаунт TP-Link. Вы можете войти позже в меню Базовые настройки > Облако TP-Link.",
			TEST_INTERNET: 				"Тест Интернет-соединения",

			
			RESET_USER_TITLE: 			"Создайте новое имя пользователя и пароль",
			NEW_USERNAME: 				"Новое имя пользователя",
			NEW_PASSWORD: 				"Новый пароль",
			CONFIRM_PASSWORD: 			"Подтвердить новый пароль",
			
			NO_ACCOUNT: 				"Нет TP-Link ID?",
			REGISTER_NOW: 				"Зарегистрируйтесь сейчас",
			REGISTER_SKIP: 				"Войдите позже",
			LOGIN: 						"Войдите",
			REGISTER_NEW:				"Зарегистрируйте новый аккаунт",
			COMPLETE_INFO_EMAIL_PREFIX: "Ваш TP-Link ID:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Настоятельно рекомендуем вам войти в систему под данным аккаунтом для удобного управления вашим устройством и доступу к большему количеству функций облака TP-Link. ",

			INTERNET_OK: 				"Поздравляем! Настройка сети выполнена успешно. Теперь вы можете пользоваться Интернетом. ",
			CLOUD_WIZARD: 				"Для доступа к дополнительным функциям Облака TP-Link, войдите под вашим <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "С помощью TP-Link ID вы сможете:", 
			ACCOUNT_DESP_SUB1:          "Иметь доступ к вашему устройству и локальным серверам (FTP, HTTP, и т.д.) в любом месте посредством Интернета.",
			ACCOUNT_DESP_SUB2:          "В постоянном режиме поддерживать ваше встроенное ПО в обновлённом состоянии при помощи функции Онлайн обновления",
	        ACCOUNT_DESP_SUB3:          "Управлять несколькими устройствами всего одним аккаунтом",
			
			CONFIRM: 					"Подтвердить "
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Интернет",
			INTERNET_STATUS:			"Состояние Интернет",

			GHZ24: 						"2,4 ГГц",
			GHZ5: 						"5 ГГц",
			
			CONNECTION_TYPE: 			"Тип подключения",
			SECONDARY_CONN: 			"Вторичное подключение",

			POOR_CONNECTED: 			"Нестабильное подключение",
			UNPLUGGED: 					"К порту WAN не подключен кабель.",
			
			CONNECTED: 					"Подключено",
			DISCONNECTED: 				"Отключено",

			INTERNET_IP_ADDR: 			"IP-адрес",
			
			IP_ADDR: 					"IP-адрес",
			MAC_ADDR: 					"MAC-адрес",
			GATEWAY: 					"Шлюз",

			AUTO: 						"Авто",
			
			ROUTER: 					"Маршрутизатор",
			WIRELESS_CLIENTS: 			"Беспроводные клиенты",
			HOST_CLIENTS: 				"Локальные клиенты",
			GUEST_CLIENTS: 				"Гостевые клиенты",
			WIRE_CLIENTS: 				"Проводные клиенты",
			PRINTER: 					"Принтер",
			USB_DISK: 					"USB-диск",
			WIRELESS: 					"Беспроводной режим",
			NAME: 						"Имя",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Канал",
			MAC: 						"MAC-адрес",
			
			WIRELESS_24GHZ: 			"Беспроводной режим 2,4 ГГц",
			WIRELESS_5GHZ: 				"Беспроводной режим 5 ГГц",
			
			GUEST_24GHZ: 				"Гостевая сеть 2,4 ГГц",
			GUEST_5GHZ: 				"Гостевая сеть 5 ГГц",
			
			STATUS: 					"Статус",
			TOTAL: 						"Итого",
			AVAILABLE: 					"Свободно",
			GB: 						"Гб",
			BRAND: 						"Марка",

			DYNAMIC_IP: 				"Динамический IP-адрес",
			STATIC_IP: 					"Статический IP-адрес",
			SUBNET_MASK: 				"Маска подсети",
			PPPOE: 						"PPPoE/PPPoE Россия",
			BIGPOND_CABLE: 				"Кабель BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Туннель 6to4",
			NONE: 						"Нет"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Интернет",
			AUTO_DETECT: 				"Автоопределение",
			INTERNET_CONN_TYPE: 		"Тип подключения к Интернет",
			DYNAMIC_IP: 				"Динамический IP-адрес",
			STATIC_IP: 					"Статический IP-адрес",
			PPPOE: 						"PPPoE/PPPoE Россия",
			BIGPOND: 					"Кабель BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP-сервер",
			UNPLUGGED: 					"К порту WAN не подключен кабель.",
			NONE: 						"Нет",
			DETECT_FAIL: 				"Не удалось выполнить автоопределение",
			SECONDARY_CONN: 			"Вторичное подключение",

			DYNAMIC_YES: 				"НЕ клонировать MAC-адрес",
			DYNAMIC_NO: 				"Клонировать MAC-адрес текущего компьютера",
			
			IP_ADDR: 					"IP-адрес",
			SUBNET_MASK: 				"Маска подсети",
			DEFAULT_GATEWAY: 			"Основной шлюз",
			PRIMARY_DNS: 				"Предпочитаемый DNS-сервер",
			SECOND_DNS: 				"Альтернативный DNS-сервер",
			OPTIONAL: 					"(необязательная настройка)",
			USER_NAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			SERVER_IP_ADDR_NAME: 		"IP-адрес/доменное имя VPN-сервера",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Если вы не уверены, какой тип подключения к Интернет используется на вашем компьютере, свяжитесь с вашим поставщиком Интернет-услуг и уточните у него эту информацию."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Настройки беспроводного режима",
			MODE_2G: 					"Беспроводной режим 2,4 ГГц",
			MODE_5G: 					"Беспроводной режим 5 ГГц",
			WIRELESS_NETWORK_NAME: 		"Имя беспроводной сети (SSID)",
			WIRELESS_PASSWORD: 			"Пароль",
			ENABLE_WIRELESS: 			"Включить беспроводное вещание",
			SAVE: 						"Сохранить",
			ENCRYPTION_2G_NOTICE:		"Шифрование на частоте 2,4 ГГЦ: %s.",
			ENCRYPTION_5G_NOTICE:		"Шифрование на частоте 5 ГГЦ: %s.",
			ENCRYPTION_2G_NO: 			"Беспроводная сеть 2,4 ГГц настроена без шифрования.",
			ENCRYPTION_5G_NO: 			"Беспроводная сеть 5 ГГц настроена без шифрования.",
			ENCRYPTION_SURE: 			"Вы уверены, что хотите продолжить?",

			HIDE_SSID: 					"Скрыть SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Базовые настройки",
			TITIL_NEW:					"Диск и учётная запись",
			DISK_SET:					"Настройки устройства",

			SELFLY_REMOVE:				"Извлечь диск",
			SCANING:					"Сканирование…",
			SCAN_RESULT:				"Обнаружено %n дисков",
			
			DISKS:						"Диски",
			USERS: 						"Учётная запись",
			DEVICENAME: 				"Имя устройства",
			VOLUMN: 					"Том",

			USBSPACE: 					"Занято",
			FREESPACE: 					"Свободно",
			STATUS: 					"Статус",
			INACT: 						"Деактивировать",
			USAGE: 						"Использование",
			CAPACITY: 					"Объём",
			OPERATION: 					"Состояние",
			
			ACC: 						"Управление учётной записью",
			USERNAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			USE_LOGIN: 					"Использовать пользователя по умолчанию",
			SCAN: 						"Сканировать",
			ENJECT_ALL: 				"Извлечь все",
			ENJECT: 					"Извлечь",
			ADD_USER: 					"Добавить пользователя",
			AUTH: 						"Права",


			LOCATION: 					"Расположение",
			MOBILE_ISP: 				"Поставщик услуг мобильного Интернет",
			DIAL_NUMBER: 				"Номер набора",
			APN: 						"Имя точки доступа",
			USERNAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			MTU_SIZE: 					"Размер MTU",
			OPTIONAL: 					"(необязательная настройка)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Родительский контроль",

			DEVICE_CTR: 				"Контролируемые устройства",
			ID: 						"ID",
			DEVICE: 					"Имя устройства",
			MAC_ADDRESS: 				"MAC-адрес",
			TIME: 						"Ограничение доступа к Интернет",
			DESCRIPTION: 				"Описание",
			ENABLE: 					"Включить",
			ENABLE_THIS_ENTRY: 			"Включить",
			OPTIONAL: 					"(необязательная настройка)",
			BTN_VIEW: 					"Просмотр существующих устройств",
			ACCESS_DEVICES_LIST: 		"Список подключенных устройств",
			OPT: 						"Состояние",
			STATUS: 					"Статус"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Гостевая сеть",
			MODE_2G: 					"Беспроводной режим 2,4 ГГц",
			MODE_5G: 					"Беспроводной режим 5 ГГц",
			WIRELESS_NETWORK_NAME: 		"Имя беспроводной сети (SSID)",
			WIRELESS_PASSWORD: 			"Пароль",
			ENABLE_WIRELESS: 			"Включить гостевую сеть",
			SAVE:						"Сохранить",
			HIDE_SSID: 					"Скрыть SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Облачный аккаунт",
			OFFLINE_NOTE_TITLE: 		"Устройство не в сети",
			LOGIN_NOTE_TITLE: 			"Упс…",
			LOGIN_OFFLINE_NOTE: 		"Устройство не в сети. Пожалуйста, проверьте настройки WAN и сети и убедитесь, что соответствующие настройки указаны верно. ",

			EMAIL: 						"Электронная почта",
			PASSWORD: 					"Пароль",
			FORGET_PASSWORD: 			"Забыли пароль?",

			CLOUD_WIZARD: 				"Для доступа к дополнительным функциям Облака TP-Link, войдите под вашим <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"Нет TP-Link ID?",
			REGISTER_NOW: 				"Зарегистрируйтесь сейчас"
		},
		STATUS: {
			TITLE: 						"Статус",
			INTERNET:					"Интернет",
			WIRELESS:					"Беспроводной режим",
			LAN:						"LAN",
			USB_TITLE:					"USB-устройства",
			PERFORMANCE: 				"Производительность",
			GUEST_NETWORK: 				"Гостевая сеть",
			ACCESS_DEVICES: 			"Доступ к устройствам",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2,4 ГГц",
			HZ5G: 						"5 ГГц",

			CONNECTION_TYPE: 			"Тип подключения",

			MAC_ADDRESS: 				"MAC-адрес",
			IP_ADDRESS: 				"IP-адрес",
			RELEASE: 					"Освободить",
			RENEW: 						"Обновить",
			
			DYNAMIC_IP: 				"Динамический IP-адрес",
			STATIC_IP: 					"Статический IP-адрес",
			SUBNET_MASK: 				"Маска подсети",
			PPPOE: 						"PPPoE/PPPoE Россия",
			BIGPOND_CABLE: 				"Кабель BigPond",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"Туннель 6to4",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Мост",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Нет",
			
			DEFAULT_GATEWAY: 			"Основной шлюз",
			DNS: 						"DNS-сервер",
			MAC: 						"MAC-адрес",
			WDS_STATUS: 				"Состояние WDS",
			
			IPV6_ADDRESS: 				"IP-адрес",
			PRIMARY_DNS: 				"Предпочитаемый DNS-сервер",
			SECOND_DNS: 				"Альтернативный DNS-сервер",

			RADIO: 						"Беспроводное вещание",

			NAME_SSID: 					"Имя сети (SSID)",
			NETWORK_NAME_SSID:			"Имя беспроводной сети (SSID)",
			HIDE_SSID: 					"Скрыть SSID",
			MODE: 						"Режим",
			CHANNEL: 					"Канал",
			CHANNEL_WIDTH: 				"Ширина канала",
			AUTO: 						"Авто",
			CURRENT_CHANNEL: 			"Текущий канал",

			WDS: 						"Состояние WDS",
			WIRED_CLIENTS: 				"Проводные клиенты",
			WIRELESS_CLIENTS: 			"Беспроводные клиенты",

			ENABLE_DHCP: 				"DHCP-сервер",
			LINKADDR:					"Link-local адрес",
			ASSIGN_TYPE: 				"Тип назначения",

			ALLOW_TO_SEE_EACH: 			"Разрешить гостям видеть друг друга",

			TOTAL: 						"Итого",
			AVAILABLE: 					"Свободно",

			USB: 						"USB-диск",
			PRINTER: 					"Принтер",

			CPU_LOAD: 					"Загрузка процессора",
			MEMORY_USAGE: 				"Использование памяти",

			IP_ADDR_P: 					"IP-адрес",
			MAC_ADDR_P: 				"MAC-адрес",
			CONN_TYPE_P: 				"Тип подключения",

			DISABLED: 					"Выключено",
			INIT: 						"Запуск",
			SCAN: 						"Сканировать",
			AUTH: 						"Аутент.",
			ASSOC: 						"Соединение",
			RUN: 						"Запущено",
			HOST: 						"Локальная",
			GUEST: 						"Гостевая",

			ON: 						"Вкл",
			OFF: 						"Выкл"
		},

		INTERNET: {
			TITLE: 						"Интернет",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Тип подключения к Интернет",
			INTERNET_MAC_ADDRESS: 		"MAC-адрес",
			
			CONNECT: 					"Подключить",
			DISCONNECT: 				"Отключить",
			
			IP_ADDR: 					"IP-адрес",
			
			USE_DEFAULT_MAC: 			"Использовать MAC-адрес по умолчанию",
			USE_COMPUTER_MAC: 			"Использовать текущий MAC-адрес компьютера",
			USE_CUSTOM_MAC: 			"Использовать заданный MAC-адрес",
			MAC_CLONE: 					"Клонирование MAC-адреса",
			
			CONFIG: 					"Настройка",
			
			IP_ADDRESS: 				"IP-адрес",
			SUBNET_MASK: 				"Маска подсети",
			DEFAULT_GATEWAY: 			"Основной шлюз",
			
			MANUAL_DNS: 				"Указать DNS-сервер вручную",
			PRIMARY_DNS: 				"Предпочитаемый DNS-сервер",
			SECOND_DNS: 				"Альтернативный DNS-сервер",
			
			RENEW: 						"Обновить",
			RELEASE: 					"Освободить",
			VIEW_MODE: 					"Режим просмотра",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Получить динамически от поставщика Интернет-услуг",
			USE_FOLLOW_IP_ADDR: 		"Использовать следующий IP-адрес",
			USE_FOLLOW_DNS_ADDR: 		"Использовать следующие адреса DNS-серверов",
			USE_FOLLOW_DNS_SERVER: 		"Использовать следующие адреса DNS-серверов",
			
			BASIC: 						"Базовая настройка",
			ADVANCED: 					"Дополнительные настройки",
			
			DNS_ADDR_MODE: 				"Адрес DNS-сервера",
			MTU_SIZE: 					"Размер MTU",
			MTU_1500: 					"байт (по умолчанию 1500, не изменять без необходимости)",
			MTU_1480: 					"байт (по умолчанию 1480, не изменять без необходимости)",
			MTU_1460: 					"байт (по умолчанию 1460, не изменять без необходимости)",
			MTU_1420: 					"байт (по умолчанию 1420, не изменять без необходимости)",
			
			HOST_NAME: 					"Имя узла",

			HOST_NAME_CONFIRM: 			"Имя узла содержит недопустимые символы, что может привести к непредвиденным действиям системы. Вы уверены, что хотите продолжить?",

			GET_IP_WITH_UNICAST_DHCP: 	"Получить IP-адрес с помощью Unicast DHCP (как правило, это не требуется)",
			OPTIONAL: 					"(необязательная настройка)",
			
			STATIC_IP: 					"Статический IP-адрес",
			PPPOE: 						"PPPoE/PPPoE Россия",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			
			INTERNET_IP_ADDR: 			"IP-адрес",
			INTERNET_DNS: 				"Интернет DNS-сервер",
			SECONDARY_CONN: 			"Вторичное подключение",
			NONE: 						"Нет",
			INTERNET_PRIMARY_DNS:		"Предпочитаемый DNS-сервер",
			INTERNET_SECONDARY_DNS: 	"Альтернативный DNS-сервер",
			
			DYNAMIC_IP: 				"Динамический IP-адрес",
			DYNAMIC_IP_v6: 				"Динамический IP-адрес (SLAAC/DHCPv6)",
			STATIC_IP: 					"Статический IP-адрес",
			SERVICE_NAME: 				"Имя сервиса",
			ACCESS_CONCENTRATOR_NAME:  	"Имя концентратора доступа",
			DETECT_ONLINE_INTERVAL: 	"Интервал онлайн-отслеживания",
			INTERVAL_TIPS: 				"секунд (0-120, по умолчанию: 10)",
			IP_ADDR_MODE:  				"IP-адрес",
			CONN_MODE: 					"Режим подключения",
			DHCP_LINK_UNPLUGGED: 		"К порту WAN не подключен кабель.",
			
			AUTO: 						"Авто",
			ON_DEMAND: 					"По требованию",
			TIME_BASED: 				"По расписанию",
			MANUALLY: 					"Вручную",
			MAX_IDLE_TIME: 				"Максимальное время простоя",
			MAX_IDLE_TIME_TIPS: 		"минут (0 означает, что подключение будет всегда активно)",
			PERIOD_OF_TIME: 			"Период времени",
			TIME_TIPS: 					"(ЧЧ:ММ)",
			BIGPOND_CABLE: 				"Кабель BigPond",
			AUTH_SERVER: 				"Сервер аутентификации",
			AUTH_DOMAIN: 				"Домен аутентификации",
			L2TP: 						"L2TP",
			GATEWAY: 					"Шлюз",
			SERVER_IP_ADDR_NAME: 		"IP-адрес/доменное имя VPN-сервера",
			PPTP: 						"PPTP",
			TO: 						"Получатель",
			
			TUNNEL_6TO4: 				"Туннель 6to4",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Получить не временный IPv6-адрес",
			GET_PREFIX_DELEGATION: 		"Получить делегирование префикса IPv6",
			IPV6_ADDR: 					"IPv6-адрес",

			GET_IPV6_WAY: 				"Получить IPv6-адрес",
			AUTOMATICALLY: 				"Получить автоматически",
			SPECIFIED_BY_ISP: 			"Предоставленный поставщиком Интернет-услуг",

			IPV6_ADDR_PREFIX: 			"Префикс IPv6-адреса",
			NONE_TEMPORARY: 			"Не временный",

			PREFIX_DELEGATION: 			"Делегирование префикса",
			ENABLE: 					"Включить",
			DISABLE: 					"Выключить",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"Длина маски IPv4",
			CONFIG_TYPE: 				"Тип настройки",
			RD6_PREFIX: 				"Префикс 6RD",
			RD6_PREFIX_LENGTH: 			"Длина префикса 6RD",
			REPLY_IPV4_ADDR: 			"IPv4-адрес граничного ретранслятора",
			MANUAL: 					"Вручную",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Мост",
			LOCAL_IPV6: 				"Локальный IPv6-адрес",
			PEER_IPV6: 					"Удалённый IPv6-адрес",
			TUNNEL_ADDR: 				"Адрес туннеля",
			IPV4_NETMASK: 				"IPv4-адрес маски сети",
			CUSTOM: 					"Указать вручную",
		    AFTR_NAME: 					"Имя АFTR",
			PPP_SHARE_V6:				"Такая же сессия PPPoE при подключении с помощью IPv4",
			PPP_SHARE_V4:				"Такая же сессия PPPoE при подключении с помощью IPv6",

			
			
			IPV4_ADDR: 					"IPv4-адрес",
			IPV4_MASK: 					"IPv4-адрес маски подсети",
			IPV4_GATEWAY: 				"IPv4-адрес основного шлюза",
			TUNNEL_ADDR: 				"Адрес туннеля",

			DUPLEX: 					"Дуплекс",
			AUTO_NEGOTIATION: 			"Автосогласование",
			FULL_DUPLEX_1000: 			"1000 Мбит/с полнодуплексная",
			HALF_DUPLEX_1000:			"1000 Мбит/с полудуплексная",
			FULL_DUPLEX_100: 			"100 Мбит/с полнодуплексная",
			HALF_DUPLEX_100: 			"100 Мбит/с полудуплексная",
			FULL_DUPLEX_10: 			"10 Мбит/с полнодуплексная",
			HALF_DUPLEX_10: 			"10 Мбит/с полудуплексная"

		},

		LAN: {
			TITLE: 						"LAN",
			LAN: 						"LAN",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4-адрес",
			LAN_IPv6: 					"LAN IPv6-адрес",

			MAC_ADDRESS: 				"MAC-адрес",
			IP_ADDRESS: 				"IP-адрес",
			SUBNET_MASK: 				"Маска подсети",
			CUSTOM: 					"Указать вручную",

			IGMP: 						"Включить IGMP Proxy",
			

			ASSIGNED_TYPE: 				"Тип назначения",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC + DHCP без сохранения состояния",
			RDNSS: 						"SLAAC + RDNSS",

			PREFIX: 					"Префикс адреса",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Адрес",
			DELEFATED: 					"Делегированный",
			STATIC: 					"Статический",
			SITE_PREFIX: 				"Префикс сайта",
			SITE_PREFIX_LEN: 			"Длина префикса сайта",

			PREFIX_TYPE:  				"Тип настройки префикса сайта",
			LAN_IPV6_ADDR:  			"LAN IPv6-адрес",

			RELEASE_TIME: 				"Время аренды",
			RELEASE_TIME_TIP: 			"секунд (по умолчанию 86400, не изменять без необходимости)",
			ADDRESS:					"Адрес",
			SAVE: 						"Сохранить",

			REBOOT_TIP: 				"Маршрутизатор перенаправит вас на страницу авторизации. <br/> Подождите..."

		},

		IPTV:{
			TITLE: 						"Настройки",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Включить IPTV", 
			MODE:  						"Режим",
			IGMP_PROXY: 				"IGMP Proxy",
			IGMP_VERSION: 				"Версия IGMP",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Мост",
			BASIC: 						"Указать вручную",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Россия",
			UNIFY:  					"Malaysia-Unifi",
			MAXIS:  					"Malaysia-Maxis",
			MEO:						"Португалия-MEO",
	   		VDF:						"Португалия-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Интернет",
			IP_PHONE: 					"IP-телефон", 

			Q_TAG: 						"802.1Q Tag",
			ENABLE: 					"Включить",
			
			INTERNET_VLAN_ID: 			"Идентификатор VLAN для Интернет",
			INTERNET_VLAN_PRIORITY: 	"Приоритет VLAN для Интернет",
			IP_PHONE_VLAN_ID: 			"Идентификатор VLAN для IP-телефона",
			IP_PHONE_VLAN_PRIORITY: 	"Приоритет VLAN для IP-телефона",
			IPTV_VLAN_ID: 				"Идентификатор VLAN для IPTV",
			IPTV_VLAN_PRIORITY: 		"Приоритет VLAN для IPTV",
			IPTV_MULTI_VLAN_ID: 		"Идентификатор Multicast VLAN для IPTV",
			IPTV_MULTI_VLAN_PRIORITY: 	"Приоритет Multicast VLAN для IPTV"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP-сервер",
			
			SETTINGS: 					"Настройки",

			DHCP_SERVER: 				"DHCP-сервер",
			ENABLE_DHCP_SERVER: 		"Включить DHCP-сервер",

			IP_ADDR_POOL: 				"Пул IP-адресов",
			LEASETIME: 					"Срок действия адреса",
			LEASENOTE: 					"минут (1-2880. По умолчанию: 120)",
			
			GATEWAY: 					"Основной шлюз",
			DOMAIN: 					"Основной домен",
			PRIMARYDNS: 				"Предпочитаемый DNS-сервер",
			SECONDARYDNS: 				"Альтернативный DNS-сервер",

			OPTIONAL: 					"(необязательная настройка)",

			CLIENTSLIST: 				"Список клиентов DHCP",
			CLIENT_NUMBER: 				"Число клиентов",
			CLIENT_NAME: 				"Имя клиента",
			MAC_ADDR: 					"MAC-адрес",
			ASSIGNED_IP: 				"Назначенный IP-адрес",
			LEASE_TIME: 				"Срок действия адреса",

			RESERVATION: 				"Резервирование адресов",

			RESERVED_IP: 				"Зарезервированный IP-адрес",
			IP_ADDRESS: 				"IP-адрес",
			DESCRIPTION: 				"Описание",

			CLIENTSLIST: 				"Список клиентов DHCP",
			CLIENT_NUMBER: 				"Число клиентов",

			ENABLE: 					"Включить",
			ENABLE_THIS_ENTRY: 			"Включить"
			
		},

		DDNS: {
			DDNS: 						"DDNS",
			SERVICEPROVIDER: 			"Поставщик услуг DDNS",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"DynDNS",
			NOIP: 						"NO-IP",
			TP_LINK: 					" TP-Link", 
			
			GO_TO_REGISTER: 			"Перейти к регистрации…",
			USERNAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			DOMAIN_NAME_LIST: 			"Список доменных имён",
			DOMAIN_NAME: 				"Доменное имя",
			LOGIN: 						"Вход",
			LOGIN_SAVE: 				"Войти и сохранить", 
			LOGOUT: 					"Выход",
			STATU_SUCCESS:				"Успешно!",
			UPDATE_INTERVAL:			"Интервал обновления",
			ONE_HOUR:					"1 час",
			SIX_HOUR:					"6 часов",
			TWETEEN_HOUR:				"12 часов",
			ONE_DAY:					"1 день",
			TWO_DAY:					"2 дня",
			THREE_DAY:					"3 дня",
			NEVER:						"Никогда",
			UPDATE:						"Обновить",
			STATU_INCORRENT:			"Неверное имя пользователя или пароль. ",
			STATU_ERR_DOMAIN:			"Ошибка доменного имени",
			WAN_IP_BIND: 				"Привязка WAN IP",
			CURRENT_DOMAIN: 			"Текущее доменное имя",
			REGISTER: 					"Зарегистрируйтесь",
			BIND: 						"Привязать",
			UNBIND: 					"Отвязать ",
			TITLE: 						"DDNS недоступен",
			CONTENT: 					"Для того, чтобы пользоваться первоклассной услугой DDNS TP-Link, пожалуйста, <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">войдите</a> под своим TP-Link ID или выберите другого поставщика услуг.",
			STATU_NO_LAUNCH:			"Не запущено",
			STATU_FAIL_DDNS: 			"Не удалось обновить DDNS.",
			STATU_FAIL_NOIP: 			"Не удалось обновить NO-IP.",
			DISABLE: 					"Выключить",
			ENABLE: 					"Включить",	
			STATU_NO_LAUNCH:			"Не удалось обновить DDNS.",
			STATU_CONN:					"Подключение",
			WAN_IP_BIND: 				"Привязка WAN IP",
			TIME: 						"Зарегистрированная дата",
			BOUND: 						"Связано",
			FREE: 						"Свободно",
			SORRY: 						"Ошибка.",
			UNBIND_NOTE:          		"Если вы хотите привязать %domain% к вашему устройству, сначала выполните отвязку от текущего доменного имени."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Расширенные настройки маршрутизации",
			STATIC_ROUTING: 			"Расширенные настройки маршрутизации",

			DESTINATION_NETWORK:		"IP-адрес назначения",
			SUBNET_MASK: 				"Маска подсети",
			DEFAULT_GATEWAY: 			"Основной шлюз",
			DESCRIPTION: 				"Описание",
			
			SYSTEM_ROUTING_TABLE: 		"Таблица маршрутизации",
			CLIENT_NUMBER: 				"Число клиентов",

			GATEWAY: 					"Шлюз",
			INTERFACE: 					"Инте<br/>рфейс",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Включить",
			ENABLE_THIS_ENTRY: 			"Включить"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Настройки",
			NOT_SUPPORT_5G: 			"В выбранном вами регионе используется только 2,4 ГГц. Убедитесь, что вы выбрали правильный регион.",

			REGION: 					"Регион",
			NOTICE:  					"Для использования беспроводного вещания, кнопка Wi-Fi на устройстве должны быть включена (положение ON).",
			
			MODE_2G:					"2,4 ГГц",
			MODE_5G:					"5 ГГц",

			WIRELESS: 					"Настройки беспроводного режима",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Включить беспроводное вещание",

			WIRELESS_NETWORK_NAME: 		"Имя беспроводной сети (SSID)",
			WIRELESS_PASSWORD: 			"Пароль",
			HIDE_SSID: 					"Скрыть SSID",

			SECURITY: 					"Защита",
			NO_SECURITY: 				"Нет защиты",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - Personal (рекомендуется)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Версия",

			AUTO: 						"Авто",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Шифрование",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Режим",
			MODE_B:  					"Только 802.11b",
			MODE_G:  					"Только 802.11g",
			MODE_N:  					"Только 802.11n",
			MODE_BG:  					"802.11b/g смешанный",
			MODE_GN: 					"802.11g/n смешанный",
			MODE_BGN:  					"802.11b/g/n смешанный",

			MODE_A_5: 					"Только 802.11а",
			MODE_AN_5: 					"802.11а/n смешанный",
			MODE_N_5: 					"Только 802.11n",
			MODE_AC_5:					"Только 802.11ac",
			MODE_NAC_5:					"801.11n/ac смешанный",
			MODE_ANAC_5:				"801.11а/n/ac смешанный",


			CHANNEL_WIDTH: 				"Ширина канала",
			CHANNEL: 					"Канал",

			TRANSMIT_POWER: 			"Мощность передатчика",

			RADIUS_SERVER_IP: 			"IP-адрес RADIUS-сервера",
			RADIUS_PORT: 				"Порт RADIUS-сервера",
			RADIUS_PASSWORD: 			"Пароль RADIUS-сервера",

			TYPE: 						"Тип",
			OPEN_SYSTEM: 				"Открытая система",
			SHARED_KEY: 				"Общий ключ",

			KEY_SELECTED: 				"Выбранный ключ",
			KEY1: 						"Ключ1",
			KEY2: 						"Ключ2",
			KEY3: 						"Ключ3",
			KEY4: 						"Ключ4",

			WEP_KEY_FORMAT: 			"Формат ключа WEP",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Шестнадцатеричный",

			KEY_TYPE: 					"Тип ключа",
			BIT64: 						"64-бит",
			BIT128: 					"128-бит",
			BIT152: 					"152-бит",

			KEY_VALUE: 					"Ключ WEP",
			
			MHZ: 						"МГц",
			MHZ20: 						"20 МГц",
			MHZ40: 						"40 МГц",
			MHZ80: 						"80 МГц",
			
			LOW: 						"Низкий",
			MIDDLE: 					"Средний",
			HIGH: 						"Высокий"
		},

		WPS: {

			TITLE2: 					"PIN-код маршрутизатора",
			ROUTERS_PIN_INFO: 			"Другие устройства могут подключаться к данному маршрутизатору с помощью функции WPS через PIN-код маршрутизатора.",
			ENABLE_ROUTE_PIN: 			"PIN-код маршрутизатора",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Создать",
			DFT: 						"По умолчанию",

			TITLE: 						"Мастер настройки WPS",
			SELECT_SETUP: 				"Выберите метод настройки",
			PUSH_BTN: 					"С помощью кнопки WPS (рекомендуется)",
			PUSH_DES: 					"Нажмите кнопку на корпусе устройства или нажмите кнопку 'Подключить' на данной странице веб-утилиты настройки.",
			CONNECT: 					"Подключить",
			CANCEL: 					"Отменить",

			RESULT_HEAD: 				"Беспроводной клиент",
			RESULT_END: 				"был успешно добавлен в сеть.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Не найден",
			ENTER_CLIENT_PIN: 			"Ввести PIN-код клиента",
			SWITCH_NOTE:				"Чтобы использовать WPS, сначала необходимо включить беспроводное вещание.",
			SWITCH_NOTE2:				"Чтобы использовать WPS, сначала необходимо правильно настроить параметры беспроводного режима.",
			STATUS_PIN_ERROR: 			"Неправильное значение PIN-кода WPS? Проверьте правильность.",
			STATUS_ERROR: 				"Ошибка.",
			STATUS_CONN_ERROR: 			"Не удалось подключиться.",
			STATUS_CONNING: 			"Подключение...",
			STATUS_CANCEL: 				"Подключение отменено.",
			
			NOTE: 						"Примечание:",
			
			STATUS_CONN_OVERLAP: 		"Не удалось подключиться (СОВПАДЕНИЕ ЗНАЧЕНИЙ).",
			STATUS_CONN_TIMEOUT: 		"Не удалось подключиться (ВРЕМЯ ОЖИДАНИЯ ИСТЕКЛО).",
			STATUS_CONN_INACT: 			"Подключение неактивно"

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Онлайн статистика беспроводного режима",
			CLIENT_NUMBER: 				"Число клиентов",
			MAC_ADDRESS: 				"MAC-адрес",
			CONN_TYPE: 					"Тип подключения",
			SECURITY: 					"Защита",
			RECEIVED_PACKETS: 			"Пакетов получено",
			SEND_PACKETS: 				"Пакетов отправлено"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Настройки",
			
			MODE_2G: 					"2,4 ГГц",
			MODE_5G:					"5 ГГц",
			
			ALLOW_EACH: 				"Разрешить гостям видеть друг друга",
			
			ALLOW_LOCAL: 				"Разрешить гостевым пользователям доступ к моей локальной сети",
			
			WIRELESS: 					"Беспроводной режим",
			WIRELESS_24G_RADIO: 		"Беспроводной режим 2,4 ГГц",
			WIRELESS_5G_RADIO: 			"Беспроводной режим 5 ГГц",
			ENABLE_GUEST: 				"Включить гостевую сеть",

			NAME_SSID: 					"Имя беспроводной сети (SSID)",
			HIDE_SSID: 					"Скрыть SSID",

			SECURITY: 					"Защита",
			NO_SECURITY: 				"Нет защиты",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Personal",

			VERSION: 					"Версия",
			AUTO: 						"Авто",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Шифрование",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Пароль"
		},

		NAT:{
			SETTINGS: 					"Аппаратный NAT",
			STATUS: 					"Аппаратный NAT",
			
			ALG_TITLE: 					"Шлюз прикладного уровня (ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"Пропуск PPTP-трафика",
			L2TP_ALG: 					"Пропуск L2TP-трафика",
			IPSEC_ALG: 					"Пропуск IPSec-трафика",

			ENABLE_FTP_ALG: 			"Включить FTP ALG",
			ENABLE_TFTP_ALG: 			"Включить TFTP ALG",
			ENABLE_H323_ALG: 			"Включить H323 ALG",
			ENABLE_RTSP_ALG: 			"Включить RTSP ALG",
			ENABLE_PPTP_ALG: 			"Включить пропуск PPTP-трафика",
			ENABLE_L2TP_ALG: 			"Включить пропуск L2TP-трафика",
			ENABLE_IPSEC_ALG: 			"Включить пропуск IPSec-трафика",
			NAT_ENABLE_NOTICE: 			"Примечание: Ваши настройки вступят в силу только после включения функции NAT."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Виртуальные серверы",

			SERVICE_NAME: 				"Тип сервиса",
			EXTERNAL_PORT: 				"Внешний порт",
			INTERNAL_IP: 				"Внутренний IP-адрес",
			INTERNAL_PORT: 				"Внутренний порт",
			PROTOCAL: 					"Протокол",

			BTN_VIEW: 					"Просмотр существующих сервисов",

			EXSITTING_SERVICE: 			"Список сервисов",
			
			PROTOCAL_ALL: 				"ВСЕ",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX или XX)",
			EXT_PORT_TIPS: 				"(ХХ или ХХ-ХХ, 1-65535)",
			INT_PORT_TIPS: 				"(ХХ или Пусто, 1-65535)",

			NOTICE:						"Конфликт с портом удалённого управления. Вы уверены, что хотите продолжить?",

			ENABLE_THIS_ENTRY: 			"Включить",
			OPERATION: 					"Состояние",
			CHOOSE: 					"Выбрать",
			NAT_ENABLE_NOTICE: 			"Примечание: Ваши настройки вступят в силу только после включения функции NAT."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Port Triggering",
			APPLICATION: 				"Приложение",
			TRIGGER_PORT: 				"Триггер порт",
			TRIGGER_PROTOCOL: 			"Триггер протокол",

			EXTERNAL_PORTS: 			"Внешний порт",
			EXTERNAL_PROTOCOL: 			"Внешний протокол",

			BTN_VIEW: 					"Просмотр существующих приложений",

			EXSITTING_APPLICATION: 		"Список приложений",
			APPLICATION_NAME: 			"Имя приложения",
			TRIGGER_TIPS: 				"(ХХ, 1-65535)",
			EXTERNAL_TIPS: 				"(ХХ или ХХ-ХХ, 1-65535, не более 5 пар)",
			
			ENABLE_THIS_ENTRY: 			"Включить",
			OPERATION: 					"Состояние",
			
			PROTOCAL_ALL: 				"ВСЕ",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Примечание: Ваши настройки вступят в силу только после включения функции NAT."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Включить DMZ",
			HARDWARESTATUS: 			"IP-адрес узла DMZ",
			NAT_ENABLE_NOTICE: 			"Примечание: Ваши настройки вступят в силу только после включения функции NAT."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"Список UPnP",
			CLIENT_NUMBER: 				"Число клиентов",
			SERVICE: 					"Описание",
			EXTERNAL_PORT: 				"Внешний порт",
			PROTOCAL: 					"Протокол",
			IP_ADDR: 					"Внутренний IP-адрес",
			INTERNAL_PORT: 				"Внутренний порт",
			NAT_ENABLE_NOTICE: 			"Примечание: Ваши настройки вступят в силу только после включения функции NAT."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"3G/4G USB-модем",
			LOCATION: 					"Регион",
			MOBILE_ISP: 				"Поставщик услуг мобильного Интернет",

			USA: 						"США",
			AT_T: 						"АТ&T",

			CONNECTION_MODE: 			"Режим подключения",
			CONNECT_ON_DEMAND: 			"Подключить по требованию",
			CONNECT_AUTOMATICALLY: 		"Подключить автоматически",
			CONNECT_MANUALLY: 			"Подключить вручную",
			MAX_IDLE_TIME: 				"Максимальное время простоя",
			CONNECTION_TIP: 			"Текущий доступ к Интернет: Предпочтительно WAN.",
			IDLE_TIME_TIP: 				"Режим подключения и Максимальное время простоя нельзя указать вручную.",
			MINUTES: 					"минуты. (0 означает, что подключение постоянно включено.)",

			AUTHENTICATION_TYPE: 		"Тип аутентификации",
			AUTO: 						"Авто",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"По умолчанию используется 'Авто'. Не изменяйте этот параметр без необходимости.",

			CONNECT: 					"Подключить",
			DISCONNECT: 				"Отключить",

			SET_TIP: 					"Указать вручную Номер набора, Имя точки доступа, Имя пользователя и Пароль.",
			DIAL_NUMBER: 				"Номер набора",
			APN: 						"Имя точки доступа",
			USERNAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			OPTIONAL: 					"(необязательная настройка)",
			MTU_SIZE: 					"Размер MTU",
			MTU_SIZE_TIP: 				"По умолчанию указано 1480, не изменять без необходимости.",

			USE_FOLLOW_DNS_SERVER: 		"Использовать следующие DNS-серверы",
			PRIMARY_DNS: 				"Предпочитаемый DNS-сервер",
			SECOND_DNS: 				"Альтернативный DNS-сервер",

			UNPLUGGED: 					"USB-модем не подключен",
			IDENTIFYING: 				"Определение…",
			IDENTIFY_SUCCESS: 			"Идентификация прошла успешно"
		},

		DISK_SETTING: {
			DISK_SET: 					"Настройки устройства",
			SCAN: 						"Сканировать",
			SELFLY_REMOVE: 				"Извлечь диск",
			SCAN_RESULT: 				"Обнаружено %n дисков",
			NOT_FOUND: 					"Не найден",
			SELFLY_REMOVE: 				"Извлечь диск",
			
			VOLUMN: 					"Том",
			CAPACITY: 					"Объём",
			FREESPACE: 					"Свободно",
			USBSPACE: 					"Занято",
			
			STATUS: 					"Статус",
			INACT: 						"Деактивировать",
			ACTIVE: 					"Активно",
			
			USAGE: 						"Использование",
			CAPACITY: 					"Объём",
			OPERATION: 					"Состояние",	
			
			ACC: 						"Управление учётной записью", 	 	
			USERNAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			USE_LOGIN: 					"Использовать пользователя по умолчанию",
			SCAN: 						"Сканировать",
			ENJECT_ALL: 				"Извлечь все",
			ENJECT: 					"Извлечь",
			ADD_USER: 					"Добавить пользователя",
			AUTH: 						"Права"
		},

		FOLDER: {
			TITLE: 						"Настройки совместного доступа",
			ACCOUNT_TITLE: 				"Учётная запись совместного доступа",
			ACCOUNT:					"Аккаунт",
			AC_NOTE: 					"Настройте учётную запись для совместного доступа к данным. Можно использовать учётную запись для входа в маршрутизатор или создать отдельную учётную запись.",
			
			AC_LOGIN: 					"Использовать учётную запись по умолчанию",
			AC_FOLLOW: 					"Использовать новую учётную запись",

			USERNAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",
			CONFIRM: 					"Подтвердите пароль",

			SHARING_SETTING: 			"Настройки совместного доступа",
			SERVER_NAME: 				"Имя сети/медиа-сервера",

			METHOD: 					"Способ доступа",
			LINK: 						"Ссылка",
			PORT: 						"Порт",

			NETWORK_NEIGHBORHOOD: 		"Сетевое окружение",
			FTP: 						"FTP-сервер",
			FTPEX: 						"FTP (через Интернет)",

			SHARE_FOLDER: 				"Папки по выбору",
			SHAREING_ALL: 				"Все папки",
			NOTE:  						"Включите эту опцию для совместного доступа ко всем файлам и папкам, если отключить эту опцию, совместный доступ будет открыт только для выбранных папок.", 
			ENABLE_AUTHENTICATION: 		"Включить аутентификацию",
			SHAREING_FOLDER: 			"Папки с общим доступом",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Путь к папке",
			VOLUMN_NAME: 				"Имя тома",

			SHARE_NAME: 				"Имя папки",
			FOLDER_PATH: 				"Путь к папке",
			MEDIA_SHARING: 				"Обмен медиа-файлами",
			STATUS: 					"Статус",

			GUEST_ACCESS: 				"Разрешить доступ из гостевой сети",
			ENABLE_AUTHENTICATION: 		"Включить аутентификацию",
			ENABLE_WRITE_ACCESS: 		"Включить право записи",
			ENABLE_MEDIA_SHARE: 		"Включить обмен медиа-файлами",
			
			BROWSE: 					"Обзор",
			BROWSE_TITLE: 				"Выберите папку.",

			NO_VOLUMN:					"Нет тома",
			
			NOTICE: 					"Вы уверены, что хотите уйти со страницы настроек DDNS? Нажмите Сохранить для сохранения настроек и ухода со страницы. Нажмите Выйти для выхода без сохранения. Нажмите Отменить, чтобы остаться на странице.",
			NO_CHANGE_NOTICE: 			"Вы уверены, что хотите уйти со страницы настроек DDNS?",

			SAVE_FAILED_NOTICE: 		"Сохранение не удалось",
			CONTINUE: 					"Выйти",
			CONTINUE_SAVE: 				"Сохранить",
			CANCLE: 					"Отменить",

			ENABLE: 					"Включить"

		},

		PRINT:{
			TITLE: 						"Принт-сервер",
			NAME: 						"Имя принтера",
			ENABLE_PRINT_SERVER: 		"Принт-сервер",
			NONE: 						"Нет",
			
			NOTE_TITLE: 				"Примечание:",
			STEP1: 						"Шаг 1:",
			STEP2: 						"Шаг 2:",
			STEP3: 						"Шаг 3:",

			NOTE1: 						"Подключите USB-принтер к порту USB маршрутизатора через кабель USB.",
			NOTE2: 						"Установите драйвер принтера на компьютере согласно указаниям на мониторе компьютера или инструкциям производителя принтера.",
			NOTE3: 						"Установите Утилиту для работы с принтером TP-Link. Утилиту можно найти на официальном сайте:  <a class=\"link\" href=\"%SUPPORT%\" target=\"blank\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Родительский контроль",
			STATUS: 					"Статус",
			UNKNOWN: 					"Неизвестно",

			DEVICE_CTR: 				"Контролируемые устройства",
			DEVICE: 					"Имя устройства",
			MAC_ADDRESS: 				"MAC-адрес",
			TIME: 						"Ограничение доступа к Интернет",
			DESCRIPTION: 				"Описание",
			
			ENABLE_THIS_ENTRY: 			"Включить",
			OPTIONAL: 					"(необязательная настройка)",
			BTN_VIEW: 					"Просмотр существующих устройств",
			
			DEVICE_LIST: 				"Список подключенных устройств",
			SYSTEM_TIME: 				"Системное время",
			
			RESTR: 						"Ограничение по названию сайта",
			MODE: 						"Ограничение",
			BLACKMODE: 					"Черный список",
			WHITEMODE: 					"Белый список",
			ACCESS_DEVICES_LIST: 		"Список подключенных устройств",
			
			CHOOSE: 					"Выбрать",
			ADD_A_NEW_KEYWORD: 			"Добавить новое доменное имя",
			ADD_A_NEW_DOMAIN_NAME: 		"Добавить новое доменное имя"
		},

		STREAMBOOST: {
			TITLE: 						"Увеличение скорости",
			INTERNET: 					"Интернет",
			ROUTER: 					"Маршрутизатор",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Другое",

			DEVICE: 					"Устройство",
			RATE: 						"Скорость",
			APPLICATION: 				"Приложение",

			NAME: 						"Имя",
			MAC_ADDRESS: 				"MAC-адрес",
			IP_ADDRESS: 				"IP-адрес",


			DEVICES: 					"Устройства"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Пропускная способность",
			TEST_BANDWIDTH: 			">Тест пропускной способности",
			STREAMBOOST: 				"Увеличение скорости",
			ENABLE_STREAMBOOST: 		"Вкл. увеличение скорости",
			UP_LIMITATION: 				"Ограничение исх. (Мбит/с)",
			DOWN_LIMITATION: 			"Ограничение вход. (Мбит/с)",
			RUN_BANDWIDTH_TEST: 		"Запустить тест пропускной способности",
			TESTING: 					"Тестирование",
			TEST_FAILED: 				"Тест не удался",
			TEST_SUCCEED: 				"Тест успешно проведён",
			ENABLE_AUTOMATIC_TEST: 		"Вкл. автоматическое тестирование",
			KEEP_UP_TO_DATE: 			"Обновлять увеличение скорости",
			ENABLE_AUTOMATIC_UPDATE: 	"Вкл. автоматическое обновление"

		},

		PRIORITY:{
			PRIORITY: 					"Приоритет",
			PRIORITY_TIPS: 				"Приоритет позволяет вам устанавливать степень важности одного устройства перед другим, чтобы одно из устройств, обрабатывающих приложение с одинаковой классификацией, имело преимущество в условиях ограниченной пропускной способности.",
			ALL_DEVICE: 				"Все устройства",
			ACTIVE_DEVICE: 				"Активное устройство",
			SAVE: 						"Сохранить",
			ID: 						"ID",
			DEVICE: 					"Устройство",
			TYPE: 						"Тип",
			MAC_ADDRESS: 				"MAC-адрес",
			STICK: 						"Прикрепить"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Статистика",
			UP_TIME: 					"Время работы",
			DOWNLOADS: 					"Загрузки",
			LAST_DAY: 					"Последний день",
			LAST_WEEK: 					"Последняя неделя",
			LAST_MONTH: 				"Последний месяц",
			ALL_LAN_HOSTS: 				"Все узлы LAN",
			OTHER: 						"Другое"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Межсетевой экран",
			ENABLE_SPI: 				"Межсетевой экран SPI",

			DOS_PROTECTION: 			"Защита от DoS-атак",
			ENABLE_DOS: 				"Защита от DoS-атак",
			
			OFF: 						"Выкл",
			LOW: 						"Низкий",
			MIDDLE: 					"Средний",
			HIGH: 						"Высокий",

			ICMP: 						"Фильтрация от атак ICMP-FLOOD",
			UDP: 						"Фильтрация от атак UDP-FLOOD",
			TCP: 						"Фильтрация от атак TCP-SYN-FLOOD",
			ENABLE_DOS_TIP:             "Защита от DoS-атак и статистика трафика не могут работать одновременно.",

			IGNORE: 					"Игнорировать Ping-пакеты от порта WAN",
			FORBID: 					"Запретить Ping-пакеты от порта LAN",

			BLOCK_DOS: 					"Список заблокированных узлов-источников DoS-атак",
			HOST_NUMBER: 				"Номер узла",
			IP_ADDRESS: 				"IP-адрес",
			MAC_ADDRESS: 				"MAC-адрес"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Контроль доступа",
			ENABLE_ACCESS: 				"Контроль доступа",

			ACCESS_MODE: 				"Режим доступа",
			DEFAULT_ACCESS_MODE: 		"Режим доступа по умолчанию",
			BLACK_LIST: 				"Черный список",
			WHITE_LIST: 				"Белый список",
			
			WIRED:						"Проводное",
			WIRELESS:					"Беспроводной режим",

			DEVICE_ONLINE: 				"Устройства онлайн",
			NAME: 						"Имя устройства",
			IP_ADDRESS: 				"IP-адрес",
			MAC_ADDRESS: 				"MAC-адрес",
			CONN_TYPE: 					"Тип подключения",

			BLOCK: 						"Блокировать",

			DEVICE_IN_WHITE: 			"Устройства в белом списке",
			DEVICE_IN_BLACK: 			"Устройства в чёрном списке"
		},

		IP_MAC:{
			TITLE: 						"Настройки",
			ENABLE_ARP: 				"Привязывание ARP",

			ARP_LIST: 					"Таблица ARP",
			ARP_NUM: 					"Число записей ARP",

			MAC_ADDRESS: 				"MAC-адрес",
			IP_ADDRESS: 				"IP-адрес",
			BOUND: 						"Связано",
			UNBOUND: 					"Отвязана",

			BINDING_LIST: 				"Таблица привязки",
			DESCRIPTION: 				"Описание",
			OPTIONAL: 					"(необязательная настройка)",
			ENABLE_THIS_ENTRY: 			"Включить"
		},

		TIMESET: {
			TITLE: 						"Настройка времени",
			ZONE: 						"Часовой пояс",
			DATE: 						"Дата",
			DATEFORMAT: 				"ММ/ДД/ГГГГ",
			TIME: 						"Время",
			TIMEFORMAT: 				"(ЧЧ/ММ/СС)",
			NTP1: 						"NTP-сервер 1",
			NTP2: 						"NTP-сервер 2",
			OPTIONAL: 					"(необязательная настройка)",

			CURRENT_TIME:  				"Текущее время",
			SET_TIME: 					"Настроить время",
			AUTOMATIC: 					"Получить автоматически из Интернет",
			MANUAL: 					"Вручную",
			AUTOMATIC_BTN: 				"Получить время",


			GETGMT: 					"Получить среднее время по Гринвичу",

			
			GETGMT_SUCCESS: 			"Успешно получено время от NTP-сервера",
			GETGMT_TIMEOUT: 			"Время ожидания соединения с NTP-сервером истекло",
			GETGMT_WAIT: 				"Подождите",
			
			M: 							"М",
			W: 							"Н",
			D: 							"Д",
			H: 							"Ч",
			
			DAYLIGHT_SAVING: 			"Летнее время",
			ENABLE_DAYLIGHT: 			"Включить летнее время",
			START: 						"Начало",
			END: 						"Конец",

			RUNNING_STATUS: 			"Текущее состояние",
			DOWN: 						"Летнее время не используется",
			UP: 						"Летнее время используется"
		},

		DIAG:{
			TITLE: 						"Диагностика",
			DIAGNOSTIC_TOOL: 			"Инструмент диагностики",
			PING: 						"Ping",
			TRACE: 						"Трассировка",

			IPADDR: 					"IP-адрес/Доменное имя",
			COUNT: 						"Счётчик Ping",
			
			BASIC: 						"Базовая настройка",
			ADVANCED: 					"Дополнительные настройки",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Размер Ping-пакета",
			PKTUNIT: 					"(4-1472 байт)",

			TIMEOUT: 					"Время ожидания Ping",
			TIMOUTUNIT: 				"(100-2000 миллисекунд)",

			TTL: 						"Трассировка Max TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Начало",
			STOP: 						"Остановить"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Ваша версия встроенного ПО не требует обновления ",
			TITLE: 						"Обновление встроенного ПО",
			INFO: 						"Информация об устройстве",
			REMOTE_TITLE: 				"Обновление в режиме онлайн ",
			LOCAL_TITLE: 				"Локальное обновление",

			NEWFILE: 					"Файл новой версии ПО",
			FIRMWAREVERSION: 			"Версия встроенного ПО",
			HARDWAREVERSION: 			"Аппаратная версия",
			LATESTVERSION: 				"Последняя версия ",
			CONFIRM_CONTENT:			"Хотите выполнить обновление встроенного ПО?",
			WARNING:					"Обновление встроенного ПО... <br/> Не выключайте устройство, чтобы избежать любых неисправностей и не пользуйтесь маршрутизатором в ходе обновления встроенного ПО.  ",
			REBOOTING: 					"Перезагрузка... <br/> Не выключайте устройство, чтобы избежать любых неисправностей и не пользуйтесь маршрутизатором в ходе обновления встроенного ПО.  ",
			DO_NOT_OPERATE: 			"Обновление встроенного ПО... <br/> Не выключайте устройство, чтобы избежать любых неисправностей и не пользуйтесь маршрутизатором в ходе обновления встроенного ПО.  ",
			FIRMWARE_UPDATING_NOTE: 	"1.Обновление ...<br/> Во избежание любых неисправностей не выключайте маршрутизатор и не используйте его в ходе процедуры обновления. ",
			REBOOTING_NOTE: 			"2.Перезагрузка...<br/> Во избежание любых неисправностей не выключайте маршрутизатор и не используйте его в ходе процедуры обновления. ",
			SCREEN_UPDATING_NOTE: 		"3.Обновление экрана...<br/> Во избежание любых неисправностей не выключайте маршрутизатор и не используйте его в ходе процедуры обновления. ",
			UPGRADE_FAILED: 			"Обновление не удалось.",
			UPGRADE: 					"Обновить",
			CHECK: 						"Проверить",
			DOWNLOADING: 				"Загрузка... <br/> Не выключайте устройство, чтобы избежать любых неисправностей и не пользуйтесь маршрутизатором в ходе обновления встроенного ПО.  ",
			UPGRADE_INOF: 				"Не выключайте устройство, чтобы избежать любых неисправностей. ",
			NOTE: 						"Примечание:",
			NO_UPGRADE: 				"Это последняя версия ",

			UPGRADING: 					"Обновление... <br/> Не выключайте устройство, чтобы избежать любых неисправностей и не пользуйтесь маршрутизатором в ходе обновления встроенного ПО.  ",
			RETRY: 						"Повторите попытку",
			CANCEL: 					"Отменить",
			ILEGAL_DEVICE:              "Невозможно идентифицировать устройство. Пожалуйста, свяжитесь с технической поддержкой TP-Link.",
			UPGRADE_FAIL: 				"Невозможно выполнить обновление. Пожалуйста, повторите попытку позже. ",
            CONFIG_RESET_NOTE:          "Ваши текущие настройки будут утеряны после обновления до данной версии. ",
			CHECK_UPGRADE: 				"Проверить наличие обновлений"
		},

		BACKUP:{
			BACKUP: 					"Резервная копия",
			BACKUPTIP: 					"Сохранение текущих настроек маршрутизатора в отдельном файле на компьютере.",

			RESTORE: 					"Восстановление",
			RESTORETIP: 				"Восстановление ранее сохранённых настроек маршрутизатора из резервного файла.",
			
			RESTORE_WARN:				"Идёт восстановление... <br/>Не производите никаких действий во время восстановления настроек!",
			RESTORE_CONFIRM_CONTENT: 	"Восстановить настройки из резервного файла?",
			
			FILE: 						"Файл",

			FACTORY: 					"Заводские настройки",
			FACTORYTIP: 				"Сброс всех текущих настроек маршрутизатора и восстановление заводских параметров.",
			RESETTIP:					"Выполните сброс всех настроек к заводским значениям, кроме информации о вашем имени пользователя и облачном аккаунте.",
			FACTORY_CONFIRM_CONTENT:	"Восстановить заводские настройки маршрутизатора?",
			FACTORY_WARN:				"Идёт восстановление... <br/>Не производите никаких действий во время восстановления настроек!",
			
			BACKUPBTN: 					"Резервная копия",
			RESTOREBTN: 				"Восстановление",
			RESETBTN:					"Восстановление",
			FACTORYBTN: 				"Восстановить заводские настройки"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Управление учётной записью",
			
			OLDUSER: 					"Старое имя пользователя",
			OLDPWD: 					"Старый пароль",

			NEWUSER: 					"Новое имя пользователя",
			NEWPWD: 					"Новый пароль",
			CONFIRM: 					"Подтвердить новый пароль",

			RECOVERYINFO: 				"Восстановление пароля",
			ENABLE_PASSWORD_RECOVERY: 	"Включить восстановление пароля",
			FROM: 						"Отправитель",
			TO: 						"Получатель",
			SMTP_SERVER: 				"SMTP-сервер",
			
			ENABLE_AUTHENTICATION: 		"Включить аутентификацию",
			USERNAME: 					"Имя пользователя",
			PASSWORD: 					"Пароль",

			TEST_MAIL: 					"Проверить почтовый ящик",

			LOCAL:						"Локальное управление",
			LOCAL_MAC_AUTH: 			"Аутентификация по локальному МАС-адресу",
			ACCESS: 					"Доступ для всех устройств, подключенных к LAN",
			ACCESS_TIPS: 				"Нажмите Вкл., чтобы разрешить доступ к веб-утилите настройки для всех устройств, подключенных к локальной сети, нажмите Выкл., чтобы разрешить доступ к веб-утилите настройки только для выбранных устройств.",
			
			MAC_ADDRESS: 				"MAC-адрес",
			VIEW_BTN: 					"Просмотр существующих устройств",
			DESCRIPTION: 				"Описание",

			EXIST_DEVICE:               "Список устройств",

			OPTIONAL: 					"(необязательная настройка)",
			ENABLE_THIS_ENTRY: 			"Включить",

			DEVICE_NAME:				"Имя устройства",
			IP_ADDRESS:					"IP-адрес",
			

			REMOTE: 					"Удалённое управление",
			DISABLE_REMOTE_MANAGEMENR: 	"Отключить удалённое управление",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Включить удалённое управление для всех устройств",
			ENABLE_REMOTE_MANAGEMENR: 	"Включить удалённое управление для указанных устройств",
			WEB: 						"Порт управления веб-интерфейсом",

			NOTICE:						"Конфликт с портом виртуального сервера! Продолжить?",

			REMOTEIP: 					"IP-адрес удаленного управления",
			REMOTEIPNOTE: 				"(Введите 255.255.255.255 для всех)"
			
		},

		SYSLOG:{
			TITLE: 						"Системный журнал",
			LOG_FILTER: 				"Фильтр журнала:",
			
			TYPE_EQ: 					"Тип=",
			
			ALL: 						"ВСЕ",

			FIREWALL: 					"Межсетевой экран", 
			NAT: 						"NAT",
			DDNS: 						"DDNS",
			UPNP:						"UPnP",
			IMB:            			"Привязка IP- и MAC-адресов",
			IPTV:						"IPTV",
			DHCPS:						"DHCP-сервер",
			IGMP_PROXY:					"IGMP Proxy",
			DOMAIN_LOGIN:				"Вход по доменному имени",
			BASIC_SECURITY: 			"Базовая защита",
			PARENTAL_CONTROL: 			"Родительский контроль",
			ACCESS_CONTROL: 			"Контроль доступа",
			DOS_PROTECTION: 			"Защита от DoS-атак",
			QOS: 						"Приоритезация данных",
			TRAFFIC_STATS: 				"Статистика трафика",
			TIME_SETTINGS: 				"Настройка времени",
			ACCOUNT_MANAGEMENT: 		"Управление учётной записью",
			LOCAL_MANAGEMENT: 			"Локальное управление",
			REMOTE_MANAGEMENT: 			"Удалённое управление",
			LOCALE: 					"Локально",
			FACTORY_RESET: 				"Сброс заводских настроек",
			LED_CONTROLLER: 			"LED индикатор",
			NETWORK: 					"Сеть",
			USBSHARE: 					"Совместный доступ через USB",
			AND: 						"и",
			LEVEL: 						"Уровень",
			EMERGENCY:					"АВАРИЯ",
			ALERT:						"ТРЕВОГА",
			CRITICAL:					"КРИТИЧНО",
			ERROR: 						"ОШИБКА",
			WARNING: 					"ПРЕДУПРЕЖДЕНИЕ",
			NOTICE: 					"УВЕДОМЛЕНИЕ",
			INFO: 						"ИНФОРМАЦИЯ",
			DEBUG: 						"ОТЛАДКА",

			INDEX: 						"Номер",
			TYPE: 						"Тип",
			TIME: 						"Время",
			LEVEL_COL:					"Уровень",

			CONTENT: 					"Содержание журнала",
			
			MAIL_LOG: 					"Выслать на почту",
			SAVE_LOG: 					"Сохранить журнал",

			SEND_OK: 					"Отправка прошла успешно",
			SEND_FAILED: 				"Не удалось отправить",

			MAIL_SETTING: 				"Настройки почты",

 			FROM: 						"Отправитель",
 			TO: 						"Получатель",
 			SMTP_SERVER: 				"SMTP-сервер",
 			ENABLE_AUTHENTICATION: 		"Включить аутентификацию",

 			USERNAME: 					"Имя пользователя",
 			PASSWORD: 					"Пароль",
 			CONFIRM_PASSWORD: 			"Подтвердите пароль",

 			AUTO_MAIL: 					"Включить автоотправку почты",
 			LOG_AT: 					"Отправлять в",
 			HH_MM: 						"(ЧЧ:MM) ежедневно",

 			LOG_EVERY: 					"Отправлять журнал каждые",
 			HOURS: 						"часов"
		},

		QOS:{
			TITLE: 						"Приоритезация данных",
			QOS: 						"Приоритезация данных",
			SETTINGS: 					"Настройки",
			STATUS: 					"Включить приоритезацию данных",
			UPBANDWIDTH: 				"Исходящая пропускная способность",
			DOWNBANDWIDTH: 				"Входящая пропускная способность",
			SPEED_M: 					"Мбит/с",
			SPEED_K: 					"Кбит/с",
			TEST: 						"Тест скорости",
			RULE_LIST: 					"Список правил приоритезации",
			RULE: 						"Правило",
			ID: 						"ID",
			NAME: 						"Имя",
			TYPE: 						"Тип",
			DETAIL: 					"Подробности",
			PRIORITY: 					"Приоритет",

			APPLICATION: 				"Приложение",
			APPLICATION_LIST: 			"Список приложений",
			CUSTOM_APP: 				"Приложение по выбору",
			MAC_ADDR: 					"MAC-адрес",
			MAC_ADDR_P: 				"MAC-адрес",
			IP_ADDR: 					"IP-адрес",
			IP_P: 						"IP-адрес:",
			PHYSICAL_PORT: 				"Физический порт",

			LOW: 						"Низкий",
			MIDDLE: 					"Средний",
			HIGH: 						"Высокий",

			PROTO: 						"Протокол",
			PORT: 						"Порт",
			PROTO_P: 					"Протокол",
			PORT_P: 					"Порт",
			PORT_TIPS: 					"(ХХ или ХХ-ХХ, 1-65535, не более 5 пар)",

			ALL: 						"ВСЕ",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Указать вручную",

			WIFI_HOME: 					"WIFI-LAN",
			WIFI_GUEST: 				"WIFI-ГОСТЬ",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Обновление базы данных",

			NEWFILE: 					"Новый файл базы данных",
			FIRMWAREVERSION: 			"Версия базы данных",
			CONFIRM_CONTENT:			"Обновить базу данных?",
			WARNING:					"Обновление базы данных... <br/>Не выполняйте никаких действий во время обновления!",
			
			UPGRADE: 					"Обновить",

			SERVICE_RESTART: 			"Перезапуск приоритезации данных",
			
			TYPE: 						"Тип",
			BY_DEVICE: 					"По устройству",
			BY_APP: 					"По приложению",
			BY_PHY: 					"По физическому порту",

			HIGH_PRIORITY_LBL: 			"Высокий приоритет:",
			MIDDLE_PRIORITY_LBL: 		"Средний приоритет:",
			LOW_PRIORITY_LBL: 			"Низкий приоритет:",

			HIGH_PRIORITY: 				"Высокий приоритет",
			MIDDLE_PRIORITY: 			"Средний приоритет",
			LOW_PRIORITY: 				"Низкий приоритет"

		},

		APPLICATION:{
			APP_LIST: 					"Список приложений",
			GAME_LIST: 					"Список игр",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Статистика трафика",
			ENABLE_STATISTICS: 			"Статистика трафика",

			TITLE: 						"Таблица статистики трафика",
			IP_MAC: 					"IP-адрес/MAC-адрес",
			TPKT: 						"Итого пакетов",
			TBYTE: 						"Итого байт",
			CPKT: 						"Текущее кол-во пакетов",
			CBYTE: 						"Текущее кол-во байт",
			CICMP: 						"Текущая скорость ICMP-пакетов",
			CUDP: 						"Текущая скорость UDP-пакетов",
			CSYN: 						"Текущая скорость SYN-пакетов",
			
			DELETE_CONFIRM: 			"Удалить статистику трафика?",
			DELETE_ALL_CONFIRM: 		"Удалить всю статистику трафика?",

			RESET_ALL: 					"Сбросить всё"
		},

		SYSPARA:{
			W24G: 						"Беспроводной режим 2,4 ГГц",
			W5G: 						"Беспроводной режим 5 ГГц",
			SWITCH_NOTICE:  			"Функция беспроводного вещания выключена. Если вы хотите использовать эту функцию, нажмите кнопку Wi-Fi.",

			ENABLE_TIPS: 				"Функция беспроводного вещания отключена.",

			BEACON: 					"Интервал маяка",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"Порог RTS",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Порог фрагментации",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"Интервал DTIM",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Период обновления группового ключа",
			GROUPUNIT: 					"секунд",
			
			
			WMM_FEATURE: 				"WMM",
			WMM: 						"Включить WMM",

			GI_FEATURE: 				"Short GI",
			GI: 						"Включить Short GI",

			AP_FEATURE: 				"AP Isolation",
			AP: 						"Включить AP Isolation",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Включить TxBF",

			WDS_FEATURE: 				"Мост WDS",
			WDS: 						"Включить мост WDS",
			
			SSID_BRIDEGE: 				"SSID (к которому вы хотите подключиться)",
			SURVEY: 					"Поиск",

			SN: 						"Серийный номер",
			MAC_ADDRESS: 				"MAC-адрес",
			SSID: 						"SSID",
			SIGNAL: 					"Сигнал",
			CHANNEL: 					"Канал",
			SECURITY: 					"Защита",
			CHOSEN: 					"Выбрано",
			AP_NUMBER:					"Число точек доступа",

			TOTAL: 						"Итого",

			MAC: 						"MAC-адрес (к которому вы хотите подключиться)",
			MACUNIT: 					"Например: 00-1D-0F-11-22-33",

			SECURITY: 					"Защита",
			NO: 						"Нет",
			NONE: 						"Нет защиты",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Пароль",
			
			AUTH_TYPE: 					"Тип аутентификации",
			AUTO: 						"Авто",
			OPEN: 						"Открытая система",
			SHARED: 					"Общий ключ",

			WEP_INDEX: 					"Индекс WEP",
			KEY1: 						"Ключ1",
			KEY2: 						"Ключ2",
			KEY3: 						"Ключ3",
			KEY4: 						"Ключ4",

			WEP_KEY_FORMAT: 			"Формат ключа WEP",
			ASC: 						"ASCII",
			HEX: 						"Шестнадцатеричный",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Включить WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Включить NAT",
			
			NAT_BOOST: 					"Ускорение NAT",
			ENABLE_NAT_BOOST: 			"Включить ускорение NAT",
			
			MEDIA_SERVER: 				"Медиа-сервер",
			SCAN_INTERVAL: 				"Интервал автосканирования (часов)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Настройки уровня защиты от DoS-атак",

			ICMP: 						"Уровень пакетов ICMP-FLOOD",
			UDP: 						"Уровень пакетов UDP-FLOOD",
			TCP: 						"Уровень пакетов TCP-FLOOD",

			WDS_MODE: 					"Режим WDS",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Низкий",
			MIDDLE: 					"Средний",
			HIGH: 						"Высокий",

			TO: 						"Получатель",
			NOTICE_NAT_REBOOT: 			"Перезагрузка...<br/>Не выполняйте никаких действий до завершения перезагрузки.",

			NOTICE_NAT_BOOST: 			"Изменение настроек ускорения NAT потребует перезагрузки устройства. Продолжить?",
			NOTICE:						"Канал вашего маршрутизатора не совпадает каналом подключенной точки доступа. Вы хотите изменить его?",

			UNIT: 						"(5-7200) Пакетов/сек",
			LED: 						"LED индикатор",
			NIGHT_MODE: 				"Ночной режим",
			PERIOD_NIGHT_TIME: 			"Время ночного режима",
			ENABLE: 					"Включить ночной режим",
			HH_MM: 						"(ЧЧ:ММ)",
			NIGHT_MODE_NOTE:            "Ваши светодиодные индикаторы отключены. Если Вы хотите воспользоваться данной функцией, пожалуйста, нажмите LED в верхнем правом углу страницы.  ",
			NOTE2:                      "Ночной режим работает с учетом системного времени маршрутизатора. Пожалуйста, убедитесь, что настройка времени на маршрутизаторе была выполнена Вами правильно.  "
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Сертификат еще не установлен, пожалуйста, <b>создайте</b> сертификат перед запуском VPN сервера.",
			NO_CERT_NOTE2: 				"Сертификат еще не установлен, пожалуйста, <b>Создайте</b> сертификат перед экспортом данной конфигурации.",
			ENABLE_VPN_SERVER: 			"Запустить VPN сервер",
			SERVICE_TYPE: 				"Тип сервиса",
			SERVICE_PORT: 				"Сервисный порт",
			VPN_SUBNET: 				"Подсеть/Маска подсети VPN",
			CLIENTS_ACCESS: 			"Клиентский доступ",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Только домашняя сеть",
			INTERNET_HOME: 				"Интернет и домашняя сеть",
			CERT_STR: 					"Сертификат еще не установлен, пожалуйста, нажмите ОК для его создания, и сохраните Вашу конфигурацию.",
			CERT_STR2: 					"Сертификат еще не установлен, пожалуйста, нажмите ОК для его создания, и экспортируйте Вашу конфигурацию.",
			CONF_FILE: 					"Файл конфигурации", 
			EXPORT_CONF_FILE: 			"Экспортировать конфигурацию.",
			EXPORT: 					"Экспортировать ",

			INSTALL_GUIDE: 				"Руководство по установке VPN-клиента",
			INSTALL_STEP: 				"Для включения и подсоединения Ваших клиентских устройств к серверу OpenVPN: ",
			INSTALL_NOTICE:				"Перед тем, как Вы настроите OpenVPN сервер, пожалуйста, настройте динамический DNS (рекомендовано) или присвойте WAN порту статический IP-адрес. А также, удостоверьтесь, что системное время верное. ",
			INSTALL_NOTE1: 				"Выберите Запустить VPN сервер. ",
			INSTALL_NOTE2: 				"Перед тем, как Вы настроите OpenVPN сервер, пожалуйста, настройте динамический DNS (рекомендовано) или присвойте WAN порту статический IP-адрес. А также, удостоверьтесь, что системное время верное. ",
			INSTALL_NOTE3: 				"Нажмите Экспортировать для сохранения файла конфигурации. ",
			INSTALL_NOTE4: 				"Загрузите и установите утилиту OpenVPN клиент на Ваших клиентских устройствах с <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Официальные поддерживаемые платформы - Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Запустите утилиту-клиент OpenVPN и добавьте новое VPN подключение, используя сохраненный файл конфигурации для подсоединения Вашего клиентского устройства к VPN-серверу. ",
			NOTE: 						"Если Вам требуется более детальная информация о клиентах OpenVPN, перейдите по ссылке <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"IP-адрес клиента",
			ACCOUNT_USERNAME: 			"Имя пользователя",
			ACCOUNT_PASSWORD: 			"Пароль",
			CLIENT_IP_NOTE: 			"(до 10 клиентов)",
			SAME_SUBNET_NOTE: 			"IP-адрес клиента и LAN IP-адрес не могут находиться в одной подсети.",
			CONFLICT_WITH_DHCP: 		"IP-адрес клиента конфликтует с адресным пулом DHCP.",
			CONFLICT_WITH_RESERVED: 	"IP-адрес клиента конфликтует с зарезервированным IP-адресом.",
			CONFLICT_WITH_OPENVPN: 		"IP-адрес клиента и IP-адрес OpenVPN не могут находиться в одной подсети.",
			SAME_SUBNET_NOTE2: 			"Подсеть/маска подсети VPN и LAN IP-адрес не могут находиться в одной подсети.",
			CONFLICT_WITH_DHCP2: 		"Подсеть/маска подсети VPN конфликтует с адресным пулом DHCP.",
			CONFLICT_WITH_RESERVED2: 	"Подсеть/маска подсети VPN конфликтует с зарезервированным IP-адресом.",
			CONFLICT_WITH_PPTPVPN: 		"Подсеть/маска подсети VPN и IP-адрес PPTP VPN не могут находиться в одной подсети.",
			VPN_MASK_ERROR: 			"Маска подсети не может превышать 255.255.255.248.",
			ACCOUNT_LIST: 				"Список учетных записей (до 16 пользователей) ",
			ADVANCED_SETTING: 			"Дополнительные настройки",
			ALLOW_SAMBA: 				"Разрешить доступ Samba (Сетевое окружение)",
			ALLOW_NETBIOS: 				"Разрешить транзитную передачу данных NetBIOS",
			ALLOW_UNENCRYPTED_CONN: 	"Разрешить нешифрованные соединения",
			USERNAME_CONFLICT: 			"Данное имя пользователя уже существует. ",
			
			CONNECT_PPTP: 				"Для включения и подсоединения Ваших клиентских устройств к серверу PPTP VPN: ",
			CONNECT_NOTICE:				"Перед тем, как Вы настроите PPTP VPN сервер, пожалуйста, настройте динамический DNS (рекомендовано) или присвойте WAN порту статический IP-адрес. Удостоверьтесь, что Вы не используете порт 1723 в настройках NAT, а также, что функция DMZ выключена, и Ваше системное время верное. ",
			CONNECT_NOTE1: 				"Выберите Запустить VPN сервер. ",
			CONNECT_NOTE2: 				"Настройте параметры сервера PPTP VPN и нажмите Сохранить. ",
			CONNECT_NOTE3: 				"Создайте подключение PPTP VPN на Ваших клиентских устройствах. Официальные поддерживаемые платформы - Windows, Mac OSX, Linux, iOS, и Android.",
			CONNECT_NOTE4: 				"Запустите программу PPTP VPN, добавьте новое подключение и введите зарегистрированное DDNS доменное имя или статический IP-адрес, присвоенный WAN порту, для подключения Вашего клиентского устройства к PPTP VPN серверу.",
			
			GENERATE_CERT: 				"Сертификат ",
			GENERATE_NEW_CERT: 			"Создать сертификат",
			GENERATE: 					"Создать",
			GENERATE_TIPS: 				"Создание сертификата...<br/>Процесс займет несколько минут, пожалуйста, подождите. ",
			CERT_SUCCESS: 				"Успешно",
			CERT_FAIL: 					"Ошибка, пожалуйста, повторите попытку.",
			
			VPN_CONNECTIONS: 			"VPN соединения",
			OPEN_VPN_CONNECTIONS: 		"OpenVPN подключение",
			PPTP_VPN_CONNECTIONS: 		"PPTP VPN подключение",
			USER:				"Пользователь",
			REMOTE_IP:			"Удаленный IP-адрес",
			ASSIGNED_IP:			"Назначенный IP-адрес"
		}
	};
})(jQuery);

