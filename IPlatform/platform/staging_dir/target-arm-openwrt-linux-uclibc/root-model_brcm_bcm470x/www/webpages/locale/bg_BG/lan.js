(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			EMAIL: 						"Email",
			FORGET_PASSWORD: 			"Забравена парола?",
			LOGIN: 						"Вход",
			BEGIN: 						"Първи стъпки",
			IMPORTANT_UPDATE_INFO: 		"За да се избегне конфликт с предния край устройството, вашият IP адрес на маршрутизатора е актуализиран, за да",
			CONTINUE: 					"Продължете",

			IMPORTANT_NOTICE: 			"Важна бележка",
			OR: 						", Сте сигурни, че искате да продължите да посетите",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Натиснете и задръжте бутона Reset за %SECONDS% секунди и маршрутизатора ще се възстанови до фабрични настройки.",
			FORGET_PASSWORD_INFO_1: 	"Ако опцията за възстановяване на парола е позволена. Код за верификация, ще бъде изпратен на посочения имейл за за ресет на потребителското име и парола.",
			FORGET_PASSWORD_SEND_FAILED:"Грешка при изпращане на кода! Моля, проверете връзката с интернет.",

			VERIFICATION_CODE: 			"Код за потвърждение",

			RECEIVE_CODE: 				"Изпращам кода",

			CONFIRM: 					"Потвърди",
			WELCOME: 					"Добре дошли при TP-Link %model%. Моля, влезте.",
			SEC: 						"s",

			USER_CONFLICT: 				"Конфликт при влизане!",
			FIRST_TIME: 				"Моля, настройте вашия  %PRODUCT% , за да се свържете първо към интернет. За да започнете, създайте парола на устройството, за да управлявате вашия %PRODUCT%.",
			FIRST_TIME1: 				"Моля, създайте администраторска парола, за да управлявате вашия %model%.",
			USER_CONFLICT_INFO: 		"Потребителят %USER% с домакина %HOST% (%IP% /%MAC%) е понастоящем влязъл в маршрутизатора.  Моля, опитайте отново по-късно.",
			USER_CONFLICT_INFO_2: 		"Потребител %USER% (%IP%) е понастоящем влязъл в маршрутизатора. Моля, опитайте отново по-късно.",
			USER_CONFLICT_INFO_3: "Само едно устройство може да се логне в даден момент. Желаете ли да продължите и да принудите другото устройство да излезе от мрежата?",
			
			LOGIN_FAILED: 				"Грешка при влизане!",
			LOGIN_FAILED_COUNT: 		"Влизането се провали за %num1 време през което Вие още имате %num2 оставащи опити.",
			NO_COOKIE: 					"Бисквитките трябва да са позволени при влизане. Моля, активирайте Бисквитките или изключите Частна/инкогнито режим на сърфиране.", 

			FORGET_PASSWORD_NOTE: 		"Ако нямате конфигурирана функция за възстановяване на парола, Вие можете да натиснете и задържите бутона Reset за %SECONDS% секунди, за да върнете маршрутизатора към фабрични настройки."
		},
		INIT: {
			PASSWORD: 					"Парола",
			CONFIRM_PASSWORD:			"Потвърдете паролата",
			BEGIN: 						"Първи стъпки",
			IMPORTANT_UPDATE_INFO: 		"За да избегнете конфликт с фронт-енд устройство, IP адресът на вашия рутер е обновен на ",
			CONTINUE: 					"Следващ",

			IMPORTANT_NOTICE: 			"Важна бележка",
			OR: 						", Сте сигурни, че искате да продължите да посетите",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Потвърди",

			SEC: 						"s",

			USER_CONFLICT: 				"Конфликт при влизане!",
			
			USER_CONFLICT_INFO: 		"Потребител %USER% с хост %HOST% (%IP%/%MAC%) в момента е влязъл в рутера. Не можете да влезете едновременно. Моля, опитайте отново по-късно.",
			USER_CONFLICT_INFO_2: 		"Потребител %USER% (%IP%) в момента е влязъл в рутера. Не можете да влезете едновременно. Моля, опитайте отново по-късно.",
			
			LOGIN_FAILED: 				"Неуспешно влизане!",
			LOGIN_FAILED_COUNT: 		"Влизането се провали за %num1 време през което Вие още имате %num2 оставащи опити.",
			NO_COOKIE: 					"Бисквитките трябва да са позволени при влизане. Моля, активирайте Бисквитките или изключите Частна/инкогнито режим на сърфиране.", 

			INIT_NOTE_TITLE: 			"Уважаеми клиенти,",
			INIT_NOTE_CONTENT: 			"Моля, настройте вашия  %PRODUCT% , за да се свържете първо към интернет. За да започнете, създайте парола на устройството, за да управлявате вашия %PRODUCT%."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Версия на фърмуера:",
			FEATURE: 						"Модификации и поправяне на бъгове: ",
			TITLE: 							"Открит е наличен фърмуер за ъпгрейд.",
			UPGRADE_NOW: 					"Актуализирайте сега",
			REMIND: 						"Напомнете ми по-късно",
			NOTICE:    						"Здравейте, нов фърмуер е наличен за вашия рутер.",
			NEVER: 							"Игнорирайте тази версия"
			
		},

		WAN_ERROR: {
			TITLE: 							"Грешка в WAN връзката!",
			STATUS: 						"Статус",
			INFO: 							"Информация",
			SETUP: 							"Настройка на връзка с интернет",
			NEVER: 							"Не ми напомняйте отново"
		},

		OFFLINE_ERROR:{
			TITLE: "Опа... Нямаме достъп до облачния сървър.",
			NOTE1: "1. Уверете се, че имате достъп до интернет.",
			NOTE2: "2. Временно няма достъп до облачния сървър. Моля, опреснете страницата по-късно.",
			NOTE3: "3. Ако проблемът продължава, моля свържете се с <a target=\"_blank\" id=\"support\">техническата поддръжка на TP-Link</a>.",
			ERROR: "Грешка"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Версия на фърмуера",
			HARDWARE_VERSION: 				"Версия на хардуера",
			HELP_SUPPORT: 					"Поддръжка",
			FAQ: 							"FAQ",
			CONFIRM_REBOOT: 				"Сигурни ли сте, че искате да рестартирате маршрутизатора?",
			CONFIRM_LOGOUT: 				"Сигурни ли сте, че искате да излезете?",
			UPGRADE_ALERT_1: 				"Текущата версия на фърмуера не поддържа облачната услуга на TP-Link. Ние сериозно препоръчваме да изтеглите най-новия фърмуер от www.tp-link.com и да актуализирате фърмуера на вашия рутер.",
			UPGRADE_ALERT_2: 				"Текущата версия на фърмуера не поддържа облачната услуга на TP-Link. Ние сериозно препоръчваме да актуализирате фърмуера, като щракнете иконата Update (Актуализация) в горния десен ъгъл.",
			ACCOUNT_UNLOGIN: 				"Акаунт",

			REBOOTING: 						"Рестартиране ... <br/> Моля, не извършвайте операции по време на рестартиране.",

			HELP_APP: 					"Приложение",
			CHARACTERS_ILLUSTRETE_TITLE: 			"Сканирайте QR кода, за да изтеглите приложението Tether на TP-Link",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Управлявайте удобно вашата мрежа от всяко мобилно устройство. ",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Пълен контрол от дланта на ръката."
		},

		NAV: {
			QUICK_SETUP: 				"Бърза настройка",
			BASIC: 						"Основен",
			ADVANCED: 					"Разширени"
		},

		CONTROL: {
			LOGIN: 						"Вход",
			LOGOUT: 					"Излез",
			UPDATE: 					"Актуализация",
			REBOOT: 					"Рестарт",
			LED: 						"LED",
			LED_ON: 					"LED Вкл",
			LED_OFF: 					"LED Изкл",
			LED_DISABLED: 				"Статусът на LED не може да бъде променян по време на нощен режим "
		},

		LANGUAGE: {
			EN_US: 						"Английски",
			ZH_CN: 						"Български"
		},

		REGION: {
			ALBANIA: 					"Албания",
			ALGERIA: 					"Алжир",
			AMERICAN_SAMOA: 			"Американска Самоа",
			ARGENTINA: 					"Аржентина",
			ARMENIA: 					"Армения",
			ARUBA: 						"Аруба",
			AUSTRALIA: 					"Австралия",
			AUSTRIA: 					"Австрия",
			AZERBAIJAN: 				"Азербайджан",
			BAHAMAS: 					"Бахамски острови",
			BAHRAIN: 					"Бахрейн",
			BANGLADESH: 				"Бангладеш",
			BARBADOS: 					"Барбадос",
			BELARUS: 					"Беларус",
			BELGIUM: 					"Белгия",
			BELIZE: 					"Белиз",
			BERUMUDA: 					"Бермуда",
			BOLIVIA: 					"Боливия",
			BOSNIA_HERZEGOWINA: 		"Босна и Херцеговина",
			BRAZIL: 					"Бразилия",
			BRUNEI_DARUSSALAM: 			"Бруней Даруссалам",
			BULGARIA: 					"България",
			CAMBODIA: 					"Камбоджа",
			CANADA: 					"Канада",
			CAYMAN_ISLANDS: 			"Кайманови острови",
			CHILE: 						"Чили",
			CHINA: 						"Китайска народна република",
			COLOMBIA: 					"Колумбия",
			COSTA_RICA: 				"Коста Рика",
			CROATIA: 					"Хърватия",
			CYPRUS: 					"Кипър",
			CZECH_REPUBLIC: 			"Чехия",
			DENMARK: 					"Дания",
			DOMINICAN_REPUBLIC: 		"Доминиканската република",
			ECUADOR: 					"Еквадор",
			EGYPT: 						"Египет",
			EL_SALVADOR: 				"Ел Салвадор",
			ESTONIA: 					"Естония",
			ETHIOPIA: 					"Етиопия",
			FAEROE_ISLANDS: 			"Фарьорските острови",
			FINLAND: 					"Финландия",
			FRANCE: 					"Франция",
			FRENCH_GUIANA: 				"Френска Гвиана",
			FRENCH_POLYNESIA: 			"Френска Полинезия",
			GEORGIA: 					"Грузия",
			GERMANY: 					"Германия",
			GREECE: 					"Гърция",
			GREENLAND: 					"Гренландия",
			GRENADA: 					"Гренада",
			GUADELOUPE: 				"Гваделупа",
			GUAM: 						"Гуам",
			GUATEMALA: 					"Гватемала",
			HAITI: 						"Хаити",
			HONDURAS: 					"Хондурас",
			HONG_KONG: 					"Hong Kong S.A.R., P.R.C.",
			HUNGARY: 					"Унгария",
			ICELAND: 					"Исландия",
			INDIA: 						"Индия",
			INDONESIA: 					"Индонезия",
			IRAN: 						"Иран",
			IRAQ: 						"Ирак",
			IRELAND: 					"Ирландия",
			ISRAEL: 					"Израел",
			ITALY: 						"Италия",
			JAMAICA: 					"Ямайка",

			JAPAN: 						"Япония",
			JAPAN_1: 					"Япония 1",
			JAPAN_2: 					"Япония 2",
			JAPAN_3: 					"Япония 3",
			JAPAN_4: 					"Япония 4",
			JAPAN_5: 					"Япония 5",
			JAPAN_6: 					"Япония 6",

			JORDAN: 					"Йордания",
			KAZAKHSTAN: 				"Казахстан",
			KENYA: 						"Кения",

			NORTH_KOREA: 				"Северна Корея",
			KOREA_REPUBLIC: 			"Република Корея",
			KOREA_REPUBLIC_3: 			"Република Корея 3",

			KUWAIT: 					"Кувейт",
			LATVIA: 					"Латвия",
			LEBANON: 					"Ливан",
			LIBYA: 						"Либия",
			LIECHTENSTEIN: 				"Лихтенщайн",
			LITHUANIA: 					"Литва",
			LUXEMBOURG: 				"Люксембург",
			MACAU: 						"Macau SAR",
			MACEDONIA: 					"Бившата югославска република Македония",
			MALAWI: 					"Малави",
			MALAYSIA: 					"Малайзия",
			MALDIVES: 					"Малдиви",
			MALTA: 						"Малта",
			MARTHINIQUE: 				"Мартиника",
			MAURITIUS: 					"Мавриций",
			MAYOTTE: 					"Майот",
			MEXICO: 					"Мексико",
			MONACO: 					"Княжество Монако",
			MONGOLIA: 					"Монголия",
			MOROCCO: 					"Мароко",
			NEPAL: 						"Непал",
			NETHERLANDS: 				"Холандия",
			NETHERLANDS_ANTILLES: 		"Нидерландските Антили-",

			NEW_ZEALAND: 				"Нова Зеландия",
			NICARAGUA: 					"Никарагуа",
			NIGERIA: 					"Нигерия",
			NORWAY: 					"Норвегия",
			NORTHERN_MARIANA_ISLANDS: 	"Северни Мариански острови",
			OMAN: 						"Оман",
			PAKISTAN: 					"Ислямска република Пакистан",
			PANAMA: 					"Панама",
			PAPUA_NEW_GUINEA: 			"Папуа-Нова Гвинея",
			PARAGUAY: 					"Парагвай",
			PERU: 						"Перу",
			PHILIPPINES: 				"Република Филипини",
			POLAND: 					"Полша",
			PORTUGAL: 					"Португалия",
			PUERTO_RICO: 				"Пуерто Рико",
			QATAR: 						"Катар",
			REUNION: 					"Реунион",
			ROMANIA: 					"Румъния",
			RUSSIA: 					"Русия",
			RWANDA: 					"Руанда",
			SAMOA: 						"Самоа",
			SAUDI_ARABIA: 				"Саудитска Арабия",
			SINGAPORE: 					"Сингапур",
			SLOVAK_REPUBLIC: 			"Словашка република",
			SLOVENIA: 					"Словения",
			SOUTH_AFRICA: 				"Южна Африка",
			SPAIN: 						"Испания",
			SRI_LANKA: 					"Шри Ланка",
			SURINAME: 					"Суринам",
			SWEDEN: 					"Швеция",
			SWITZERLAND: 				"Швейцария",
			SYRIA: 						"Сирия",
			TAIWAN: 					"Тайван",
			TANZANIA: 					"Танзания",
			THAILAND: 					"Тайланд",
			TRINIDAD_TOBAGO: 			"Тринидад у Тобаго",
			TUNISIA: 					"Тунис",
			TURKEY: 					"Турция",
			UGANDA: 					"Уганда",
			UKRAINE: 					"Украйна",
			UNITED_ARAB_EMIRATES: 		"Обединени Арабски Емирства",
			UNITED_KINGDOM: 			"Великобритания",
			UNITED_STATES: 				"САЩ",
			URUGUAY: 					"Уругвай",
			UZBEKISTAN: 				"Узбекистан",
			VENEZUELA: 					"Венецуела",
			VIETNAM: 					"Виетнам",
			VIRGIN_ISLANDS: 			"Вирджински острови (САЩ)",
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
			ENIWETOK: 					"(GMT-12: 00) Ениветок, Куаджалейн", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11: 00) Мидуей, Самоа",
			HAWAII: 					"(GMT-10: 00) Хавай",
			ALASKA: 					"(GMT-09: 00) Аляска",
			PACIFIC_TIME: 				"(GMT-08: 00) Тихоокеанско време",
			MOUNTAIN_TIME: 				"(GMT-07: 00) Планинско време (САЩ Канада)",
			CENTRAL_TIME: 				"(GMT-06: 00) Централно време (САЩ Канада)",
			EASTERN_TIME: 				"(GMT-05: 00) Източно време (САЩ Канада)",
			CARACAS:					"(GMT-04: 30) Каракас",
			ATLANTIC_TIME: 				"(GMT-04: 00) Атлантическо време (Канада)",
			NEWFOUNDLAND: 				"(GMT-03: 30) Нюфаундленд",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03: 00) Бразилия, Буенос Айрес",
			MID_ATLANTIC: 				"(GMT-02: 00) Средата на Атлантическия Океан",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01: 00) Азорски острови, Кабо Верде",
			GREENWICH_MEAN_TIME: 		"(GMT) Средно време по Гринуич, Дъблин, Лондон",
			BERLIN_STOCKHOLM: 			"(GMT + 01: 00) Берлин, Стокхолм, Рим, Берн, Брюксел",
			ATHENS_HELSINKI: 			"(GMT + 02: 00) Атина, Хелзинки, Източна Европа, Израел",
			BAGHDAD_KUWAIT: 			"(GMT + 03: 00) Багдад, Кувейт, Найроби, Рияд, Москва",

			TEHERAN: 					"(GMT + 03: 30) Техеран",

			ABU_DHABI: 					"(GMT + 04: 00) Абу Даби, Мускат, Казан, Волгоград",

			KABUL: 						"(GMT + 04: 30) Кабул",

			ISLAMABAD_KARACHI: 			"(GMT + 05: 00) Исламабад, Карачи, Екатеринбург",

			MADRAS_CALCUTTA: 			"(GMT + 05: 30) Мадрас, Калкута, Бомбай, Ню Делхи",
			KATMANDU: 					"(GMT + 05: 45) Катманду",

			ALMA_ATA_DHAKA: 			"(GMT + 06: 00) Алма Ата, Дака",
			RANGOON: 					"(GMT + 06: 30) Рангун",

			BANGKOK_JAKARTA_HANOI: 		"(GMT + 07: 00) Банкок, Джакарта, Ханой",
			BEIJING_HONGKONG: 			"(GMT + 08: 00) Пекин, Хонконг, Пърт, Сингапур",
			TOKYO_OSAKA_SAPPORO: 		"(GMT + 09: 00) Токио, Осака, Сапоро, Сеул, Якутск",

			ADELAIDE: 					"(GMT + 09: 30) Аделаиде",

			BRISBANE_CANBERRA: 			"(GMT + 10: 00) Бризбейн, Канбера, Мелбърн, Сидни",
			MAGADAN_SOLOMAN_IS: 		"(GMT + 11: 00). Магадан, Соломон, Нова Каледония",
			FIJI_KAMCHATKA: 			"(GMT + 12: 00) Фиджи, Камчатка, Окланд",
			NUKU: 						"(GMT + 13: 00) Нуку'алофа"
		},

		APPLIST:{
			APP:						"Приложение",
			GAME:						"ИГРА",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"Линия ",
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
			DAY: 						"Ден",

			MONDAY: 					"понеделник",
			TUESDAY: 					"вторник",
			WEDNESDAY: 					"сряда",
			THURSDAY: 					"четвъртък",
			FRIDAY: 					"петък",
			SATURDAY: 					"събота",
			SUNDAY: 					"неделя",
			
			MON: 						"Пн.",
			TUES: 						"Вт.",
			WED: 						"Ср.",
			THUR: 						"Чт.",
			FRI: 						"Пт.",
			SAT: 						"Сб.",
			SUN: 						"Нед.",

			JAN: 						"Януари",
			FEB: 						"Февруари",
			MAR: 						"Март",
			APR: 						"Април",
			MAY: 						"Май",
			JUN: 						"Юни",
			JUL: 						"Юли",
			AUG: 						"Август",
			SEP: 						"Септември",
			OCT: 						"Октомври",
			NOV: 						"Ноември",
			DEC: 						"Декември"

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
			"1ST": 						"първи",
			"2ND": 						"2-ри",
			"3RD": 						"3-ти",
			"4TH": 						"4-ти",
			"5TH": 						"последен",
			"1ST_": 					"1-ви",

			TH: 						"ти"
		},

		GRID: {
			CLIENT_NUMBER: 				"Клиент номер",

			ID: 						"ID",
			MODIFY: 					"Модифициране",
			STATUS: 					"Статус",
			ENABLE: 					"Разреши",

			OPERATION: 					"Операция",
			CHOOSE: 					"Избор",
			DESCRIPTION: 				"Описание",
			

			AUTO_REFRESH: 				"Автоматично обновяване",
			REFRESH: 					"Опресни",
			NUMBER: 					"Номер",
			ENABLED: 					"Разрешен",
			DISABLED: 					"Забранен",
			ACTIVE: 					"Активен",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Добави",
			CHOOSE: 					"Избор",
			EDIT: 						"Редактиране",
			DELETE: 					"Премахни",
			DELETE_ALL: 				"Премахни всички",
			REMOVE: 					"Премахни",
			RESET: 						"Изчистване",
			RESET_ALL: 					"Нулирай всички",
			DETECT: 					"Откривам",
			ENABLE: 					"Разреши",
			DISABLE: 					"Забрани",
			CLEAR: 						"Изчисти",

			REFRESH: 					"Опресни",
			SEARCH: 					"Търсене ...",
			BROWSE: 					"Търси",

			SAVE: 						"Запази",
			BACK: 						"Назад",

			PREV: 						"Предишен",
			NEXT: 						"Следващ",
			FINISH: 					"Край",
			
			ON: 						"Включен",
			OFF: 						"Изключен",
			LOW: 						"Ниска",
			MIDDLE: 					"Средна",
			HIGH: 						"Висока",
			
			OK: 						"ОК",
			CANCEL: 					"Отказ",

			YES: 						"Да",
			NO: 						"Не",
			
			CONNECTED: 					"Свързан",
			CONNECTING: 				"Свързване",
			DISCONNECTING: 				"Прекъсване на връзката",
			DISCONNECTED: 				"Разкачен",

			PASSWORD_HINT: 				"Парола",
			FILEBUTTONTEXT: 			"Търси",
			FILEBLANKTEXT: 				"Моля изберете файл.",
			NOSELECTEDTEXT: 			"Изберете опциите.",

			ADD_A_NEW_KEYWORD: 			"Добави нова дума",

			SUCCESSED: 					"Успех!",
			FORM_SAVED: 				"Запазено",
			FORM_FAILED: 				"Провал",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Запазено",
			GRID_FAILED: 				"Провал",
			GRID_NONE_SELECT: 			"Моля, изберете поне едно от въведените.",
			GRID_DELETE_COMFIRM: 		"Сигурни ли сте, че искате да премахнете тези записи?",
			GRID_DELETE_ALL_COMFIRM: 	"Сигурни ли се, че искате да премахнете всички записи?",
			GRID_MAX_RULES: 			"Надвишен е максималния брой записи.",
			KEYWORD_MAX_OVERFLOW: 		"Броят на ключови думи е превишил лимита.",

			NOTE: 						"Забележка:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Невалиден формат.",
			BLANKTEXT: 					"Това поле е задължително.",

			EMAIL: 						"Невалиден email формат.",
			NUMBER: 					"Невалиден формат.",

			NUMBER_MIN: 				"Невалидна стойност. Моля, въведете номер по-голям от  %min.",
			NUMBER_MAX: 				"Невалидна стойност. Моля, въведете номер по-малък от %max.",

			NUMBER_MIN_MAX: 			"Невалидна стойност. Моля, въведете номер между %min и %max.",
			HEX: 						"Това поле трябва да бъде hexadecimal номер.",

			IP: 						"Невалиден формат.",

			IP_NO_ALL_ZERO:				"Адресът не бива да бъде 0.0.0.0.",
			IP_NO_LOOP:					"Адресът не бива да бъде loopback IP.",
			IP_NO_D_TYPE:				"Адресът не бива да бъде IP от мрежа клас D.",
			IP_NO_E_TYPE:				"Адресът не бива да бъде IP от мрежа клас D.",
			IP_NO_ALL_ONE:				"Адресът не бива да бъде 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"Адресът не бива да започва с 255.",
			IP_NO_FIRST_ZERO:			"Адресът не бива да започва с 0.",
			MASK_NO_ALL_ONE:			"Маската не бива да бъде 255.255.255.255.",

			IPV6: 						"Невалиден формат.",
			IPV6_NOT_GLOBAL:			"Невалиден формат.",
			IPV6_NOT_PREFIX:			"Невалиден формат.",
			IP_DOMAIN: 					"Невалиден формат.",
			IPV6_DOMAIN: 				"Невалиден формат.",
			MAC: 						"Невалиден формат.",
			MULTI_MAC:					"Невалиден формат.",
			DATE: 						"Невалиден формат.",
			DATE_INVALID: 				"Моля, въведете дата между 01/01/1970 и 12/31/2030.",
			MASK: 						"Невалиден формат.",
			DOMAIN: 					"Невалиден формат.",
			STRING_DOMAIN:              "Невалиден формат.",
			USER: 						"Невалиден формат.",
			NOTE: 						"Невалиден формат.",
			PWD: 						"Невалиден формат.",
			SSID: 						"Невалиден формат.",
			NAME:						"Невалиден формат.",
			ASCII_VISIBLE:				"Невалиден формат.",
			STRING_VISIBLE:				"Невалиден формат.",
			STRING_VISIBLE_NO_COMMA:    "Невалиден формат.",
			STRING_VISIBLE_ALLOW_BLANK: "Невалиден формат.",
			NAME_SPECIAL: 				"Моля, въведете от 4 до 15 буквено-цифрови знаци, както и знаци за тире и подчертаване ( - и _.)",
			VPN_NAME_PWD: 				"Моля, въведете от 1 до 15 буквено-цифрови знаци, както и знаци за тире и подчертаване ( - и _.)"	
			
		},


		ERROR: {			
			"00000001":					"Невалиден файлов тип",
			"00000002":					"Чексум грешка.",
			"00000003":					"Файла е твърде голям.",
			"00000004":					"Грешка при качване.",
			"00000005":					"Грешка при рестартиране.",
			"00000006":					"Неизвестна грешка.",
			"00000007":					"Частта вече съществува. Моля въведете друга.",

			"00000009":					"Моля, използвайте стойност по подразбиране 21 или въведете стойност между 1024 и 65535.",
			"00000010":					"Порта трябва да бъде число.",

			"00000011":					"Потребителското име трябва да бъде същото със стойността във формата.",
			"00000012": 				"Потребителското име трябва да започва с буква.",

			"00000021":					"Невалиден формат.",

			"00000032": 				"Стойността трябва да бъде по-малка от Low.",
			"00000033": 				"Стойността трябва да е по-малка от Middle и Low.",
			"00000034": 				"Невалидна стойност, моля, въведете число между 5 и 7200.",

			"00000039": 				"Моля, използвайте стойност по подразбиране 0 или въведете стойност между 30 и 86400.",
			"00000040": 				"SSID и MAC адресите се изискват.",

			"00000042": 				"Моля, използвайте стойност по подразбиране 80 или въведете стойност между 1024 и 65535.",

			"00000045": 				"Default Gateway и LAN IP адрес трябва да бъде в една и съща подмрежа. Моля, въведете отново.",

			"00000047": 				"Списъка с IP адреси и LAN IP адреса не бива да бъдат в едба подмрежа, моля въведете отново.",

			
			"00000049":					"Търсената мрежа е невалидна.",

			"00000050": 				"Грешен DNS IP адрес. Моля, въведете друг IP адрес.",
			"00000051": 				"Този MAC адрес вече съществува. Моля, въведете друг.",
			"00000052": 				"Този IP адрес вече съществува. Моля, въведете друг.",

			"00000053": 				"Първия IP адрес не може да бъде по-голям от последния. <br/>Моля въведете отново.",

			"00000054": 				"Списъка с IP адреси и LAN IP адреса не бива да бъдат в  същата подмрежа, моля въведете отново.",

			"00000055": 				"IP не може да бъде едно и също на адреса LAN.",

			"00000056": 				"Отдалечения IP адрес и текущия IP адрес в LAN мрежата не трябва да бъдат в една подмрежа. Мля, въведете други стойности.",

			"00000057": 				"Невалидна PSK парола, моля въведете отново.",
			"00000058": 				"Невалидна WEB парола, моля въведете отново.",

			"00000059": 				"Невалидни IP адрес и маска на подмрежата, моля въведете валидни стойности.",

			"00000060": 				"WAN IP и LAN IP не могат да бъдат в една подмрежа. <br/>Моля, въведете други.",

			"00000061": 				"Началното време трябва да бъде преди крайното време.",

			"00000062": 				"Това поле е задължително.",
			"00000063": 				"Това поле е задължително.",

			"00000064": 				"Не може да блокира MAC адреса на хоста.",
			"00000065": 				"Тази част е в конфликт с друга такава, моля проверете.",
			
			"00000066": 				"Паролата трябва да е между 8 и 63 символа или 64 hexadecimal цифри.",
			"00000067": 				"Паролата трябва да бъде 10 hexadecimal цифри.",
			"00000068": 				"Паролата трябва да бъде 5 ASCII символа.",
			"00000069": 				"Паролата трябва да бъде 26 hexadecimal цифри.",
			"00000070": 				"Паролата трябва да бъде 13 ASCII символа.",
			"00000071": 				"Паролата трябва да бъде 32 hexadecimal цифри.",
			"00000072": 				"Паролата трябва да бъде 16 ASCII символа.",
			"00000073": 				"Паролата трябва да бъде по-малка от 64 символа.",

			"00000074": 				"Невалиден файлов тип",

			"00000075": 				"ПИН дължината трябва да бъде 8.",

			"00000076": 				"За да избегне конфликт със съществуващ, моля, проверете trigger порта и trigger протокола.",
			"00000077": 				"IP адресът не може да бъде еднакъв с LAN IP адреса.",
			"00000078": 				"IP адреса на хоста не може да бъде същия като LAN IP адреса.",

			"00000080": 				"Объркана парола. Моля, въведете отново.",

			"00000088": 				"Операцията не е позволена за дистанционно управление.",
			"00000089": 				"Надвишили сте превишили %num опита, моля опитайте отново след два часа.",

			"00000090": 				"Търсения не бива да бъде LAN IP.",
			"00000091": 				"Търсения не бива да бъде WAN IP.",

			"00000092": 				"IP адресът и LAN IP адресът не трябва да бъдат в една и съща подмрежа. <br/> Моля, въведете отново.",
			"00000093": 				"WAN IP и LAN IP не могат да бъдат в една подмрежа. <br/>Моля, въведете отново.",

			"00000094": 				"Vlan IDs не могат да се повтарят.",
			"00000095": 				"Необходим е поне един интернет порт.",

			"00000096": 				"Кодовата дума вече съществува.",

			"00000097": 				"Направената конфигурация за честотни обхвати 2.4GHz и 5GHz няма да влезе в сила докато WiFi бутона не е Включен.",
			"00000098": 				"Направената конфигурация за честотни обхвати  5GHz няма да влезе в сила докато WiFi бутона не е Включен.",
			"00000099": 				"Направената конфигурация за честотни обхвати 2.4GHz и 5GHz няма да влезе в сила докато WiFi бутона не е Включен.",

			"00000100": 				"5GHz обхват не е позволен за вашия регион/държава.",

			"00000101": 				"Вашето безжично функция е изключена. Ако искате да използвате тази функция. Моля превърне оn WiFi бутона.",
			"00000102": 				"Вашето безжично функция е изключена. Ако искате да използвате тази функция. Моля превърне оn WiFi бутона.",

			"00000103": 				"Вашето безжично функция е изключена. Ако искате да използвате тази функция. Моля превърне оn WiFi бутона.",
			"00000104": 				"Вашата безжична функция е забранена.",

			"00000105": 				"QoS и IPTV не могат да бъдат активни едновременно.",

			"00000106": 				"IP адресът не може да бъде същото и с LAN IP адрес.",
			
			"00000107": 				"Търсеният вече съществува.",

			"00000110": 				"IP адресът и LAN IP трябва да са в същата подмрежа.",
			
			"00000111": 				"QoS и <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> не могат да бъдат разрешени едновременно.",
			"00000112": 				"WDS функцията, може да работи и на 2.4GHz и 5GHz честота. Също така Мрежата за Гости, не може да се използва на WDS честотата.",
			"00000113": 				"WDS и гост мрежите не могат да са активни едновременно.",
			"00000114": 				"Трафик статистиката и <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> не могат да бъдат разрешени едновременно.",
			"00000115": 				"IPTV и <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> не могат да бъдат активни едновременно.",

			"00000117": 				"Домейн името вече съществува.",
			"00000118": 				"Броят на имена на домейни е превишил лимита.",
			"00000119":				"Ако NAT Boost е разрешен <a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> и <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Трафик статистика </a> е даде възможност.",

			"00000120": 				"Паролата трябва да е 5 или 13 ASCII символа.",
			"00000121": 				"Паролата трябва да е 10 или 26 шестнадесетични цифри.",
			"00000122": 				"Потребителското име и паролата са празни, сигурни ли сте, че искате да продължите?",
			"00000123": 				"Спазва се ...  <br/>Моля, не работят по време на процеса.",
			"00000124": 				"PIN на рутера е заключена поради неколкократни връзки с посредством грешен PIN. Моля, генерира нов.",

			"00000125": 				"Броят на QoS правила е превишил лимита.",
			"00000126": 				"Размерът на файла е превишил лимита.",
			"00000127": 				"Съдържанието на файла е неправилна.",
			"00000128": 				"Моля изберете поне едно заявление.",
			"00000129": 				"Моля, изберете поне един физически порт.",
			"00000130":					"Вашият WPS функцията е деактивирана.",
			"00000131": 				"NTP сървъра не трябва да бъде примка адрес.",
			"00000132": 				"Превключвател на режима се провали. Моля, опитайте отново по-късно или рестартирате вашия рутер.",
			"00000133": 				"Невалиден DMZ Хост IP Адрес. Моля, въведете валиден един.",
			"00000134":  				"Невалиден вътрешния IP. Моля, въведете валиден един.",
			"00000135": 				"Грешка във файла на фърмуера.",
			"00000136": 				"Грешен Backup файл.",
			"00000137": 				"Полето за име на потребител е празно, сигурни ли сте, че искате да продължите?.",
			"00000138": 				"Полето за парола е празно, сигурни ли сте, че искате да продължите?",
			"00000139": 				"Грешни параметри за възстановяване на паролата.",
			"00000140": 				"Грешен код",
			"00000141": 				"Функцията 'възстановяване на парола' е деактивирана.",
			"00000142": 				"Неуспешно изпращане на кода. Моля проверете вашата интернет връзка.",
			"00000143": 				"Невалиден адрес на електронна поща.",
			"00000144": 				"Невалидно съобщщение на електронна поща.",
			"00000145": 				"Не мога да намеря хоста.",
			"00000146": 				"Неуспешна автентификация.",
			"00000147": 				"Портът трябва да бъде между 1 и 65535.",
			"00000148": 				"За едно множество от портове, номерът на стартовия порт трябва да бъде по-малък от номера на крайния порт. Моля, въведете отново.",
			"00000149": 				"Номерът на порта се припокрива. Моля, въведете отново.",
			"00000150": 				"Невалидни WAN IP адрес и маска на подмрежата, моля въведете валидни стойности.",
			"00000151": 				"Моля, изберете поне един ден.",
			"00000152": 				"Моля, настройте времето за достъп до Интернет.",
			"00000213":					"IP адресът на DNS сървъра и  IP адресът на LAN не могат да бъдат в една под-мрежа. <br/>Моля, въведете друг адрес.",
			"10000139": 				"Няма връзка с интернет",
			"10000140": 				"Времето на заявката изтече. Моля проверете вашата връзка с интернет и опитайте отново по-късно.",
			"10000158": 				"WAN портът е изключен.",
			"10000159": 				"Не е възможно да се свържете с интернет. Моля, свържете се с вашия доставчик на интернет, или опитайте отново по-късно. ",
			"10000160": 				"Не е възможно да получите IP адрес от DHCP сървъра. Моля, проверете типа WAN връзка или опитайте отново по-късно.",
			"10000161": 				"PPPoE автентификацията е неуспешна. Моля, проверете вашето потребителско име и вашата парола.",
			"10000162": 				"Не е възможно да се свържете с PPPoE сървъра.",

			"10000164": 				"PPPoE автентификацията е неуспешна. Моля, проверете вашето потребителско име и вашата парола.",
			"10000165": 				"Не е възможно да се свържете с PPTP сървъра.",

			"10000167": 				"L2TP автентификацията е неуспешна. Моля, проверете вашето потребителско име и вашата парола.",
			"10000168": 				"Не е възможно да се свържете с L2TP сървъра.",
			"10000169": 				"Неизвестна грешка. Моля опитайте отново по-късно.",
			"10000172": 				"Връзката се провали.",

			"10000185": 				"Системна грешка.",	
			"10000186": 				"Грешка във файла на фърмуера.",	
			"10000187": 				"Грешка в изтеглянето на фърмуера.",	
			"10000188": 				"Грешка в актуализацияна на фърмуера.",	
			"10000191": 				"Файлът на фърмуера не може да се изтегли.",
			"10000192": 				"Грешка в актуализацияна на фърмуера.",
			"10000193": 				"Връзката със сървъра не е възможна.",	
			"10000194": 				"Не можете да се свържете към облачния сървър. Моля, опитайте отново по-късно.",
			"10000195": 				"Не можете да поставите паролата отново, защото вече сте поставили парола.",
			
			"E3002":                    "Времето на заявката е изтекло.", 
			"E10000": 					"Често срещана грешка.",
			"E20002": 					"Времето на заявката е изтекло.",
			"E20003": 					"Облачният сървър е зает. Моля, опитайте отново по-късно.",
			"E20107": 					"Невалидно въвеждане.",
			"E20200": 					"Невалиден email формат.",
			"E20502": 					"Устройството не може да се обвърже. Моля, опитайте отново по-късно.",
			"E20503": 					"Устройството не може да се освободи. Моля, опитайте отново по-късно.",
			"E20506": 					"Действието е неуспешно. Устройството вече е обвързано с друг облачен акаунт.",
			"E20507": 					"Това устройство е освободено от акаунта.",
			"E20508": 					"Броят на обвързаните акаунти вече е достигнал максималния лимит.",
			"E20509": 					"Потребителските акаунти нямат право да обвързват нови потребители.",
			"E20571": 					"Това устройство е офлайн.",
			"E20580": 					"Действието е неуспешно. Този акаунт не е обвързан с устройството.",
			"E20600": 					"Този email не е регистриран.",
			"E20601": 					"Неправилно потребителско име или парола",
			"E20602": 					"Този акаунт още не е активиран.",
			"E20603": 					"Този email вече е регистриран.",
			"E20604": 					"Невалидно потребителско име. Моля, въведете email адрес или номер на телефон.",
			"E20606": 					"Не може да се изпрати email за активиране на акаунта.",
			"E20615": 					"Невалидна парола. Моля, въведете 6-32 ASCII знаци без интервали.",
			"E20616": 					"Невалидна парола. Моля, въведете 6-32 ASCII знаци без интервали.",
			"E20617": 					"Този акаунт не съществува.",
			"E20618": 					"Този акаунт не съществува.",
			"E20620": 					"Невалиден прякор. Моля, въведете 1-64 знака.",
			"E20661": 					"Този акаунт ще бъде заключен за 2 часа поради прекалено много опити за влизане (20 пъти за половин час).",
			"E20662": 					"Устройството е заключено. През следващите 24 часа устройството няма да реагира на никакви заявки с верификационен код.",
			"E20671": 					"Не може да се верифицира акаунта.",
			"E20672": 					"Не може да се верифицира акаунта. Линкът за активиране на акаунта е с изтекъл срок. Моля, подайте нова заявка.",
			"E20673": 					"Линкът за ресетиране на паролата е с изтекъл срок. Моля, подайте нова заявка.",
			"E20674": 					"Не може да се ресетира паролата.",
			"E20675": 					"Някой е влязъл в този акаунт от друго място.",
			"E22000": 					"Невалидно въвеждане.",
			"E22001": 					"Името на домейна е вече регистрирано.",
			"E22002": 					"Броят на регистрираните имена на домейни вече е достигнал максималния лимит.",
			"E22003": 					"Броят на обвързаните имена на домейни вече е достигнал максималния лимит.",
			"E22004": 					"Това име на домейн вече е обвързано към друго устройство.",
			"E22006": 					"Системна грешка. Моля, опитайте отново по-късно.",
			"E22007": 					"Името на домейна съдържа чувствителни думи. Моля, опитайте друго име.",
			"E22008": 					"Името на домейна не съществува.",

			"E50101": 					"WAN портът е изключен.",
			"E50102": 					"Не може да се направи връзка с интернет. Моля, свържете се с вашия доставчик на интернет, или опитайте отново по-късно.",
			"E50103": 					"Не е възможно да получите IP адрес от DHCP сървъра. Моля, проверете типа WAN връзка или опитайте отново по-късно.",
			"E50111": 					"PPPoE автентификацията е неуспешна. Моля, проверете вашето потребителско име и вашата парола.",
			"E50112": 					"Не е възможно да се свържете с PPPoE сървъра.",
			"E50121": 					"PPPoE автентификацията е неуспешна. Моля, проверете вашето потребителско име и вашата парола.",
			"E50122": 					"Не е възможно да се свържете с PPTP сървъра.",
			"E50131": 					"L2TP автентификацията е неуспешна. Моля, проверете вашето потребителско име и вашата парола.",
			"E50132": 					"Не е възможно да се свържете с L2TP сървъра.",
			"E50140": 					"Неизвестна грешка. Моля опитайте отново по-късно.",
			"E51215": 					"Времето на заявката изтече. Моля проверете вашата връзка с интернет и опитайте отново по-късно.",
			"E_CLOUD_SERVER": 			"Грешка в сървъра. Моля, опитайте отново по-късно.",
			"E5000": 					"Не може да се осъществи връзка с облачния сървър.",
			"E5001": 					"Неправилен TP-Link ID (email). Или вашето устройство е офлайн и само администраторът (%email) има офлайн достъп.",
			"E5002": 					"Неправилна парола."
		},

		MENU: {
			STATUS: 					"Статус",
			NETWORK: 					"Мрежа",
			NETWORK_MAP: 				"Карта на мрежата",
			INTERNET: 					"Интернет",

			LAN: 						"ЛАН",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP Сървър",
			DYNAMIC_DNS: 				"Динамичен DNS",
			ADVANCED_ROUTING: 			"Разширено маршрутизиране",

			WIRELESS: 					"Безжично",
			WIRELESS_SETTINGS: 			"Настройки на безжичната мрежа",
			WDSBRIDGING: 				"WDS Преодоляване",
			WPS: 						"WPS",
			MACFILTERING: 				"MAC Филтриране",
			WIRE_STATISTICS: 			"Статистики",
			
			
			GUEST_NETWORK: 				"Гост Мрежа",
			WIRELESS_SETTINGS: 			"Настройки на безжичната мрежа",
			STORAGE_SHARING: 			"Сторидж споделяне",
			NAT_FORWARDING: 			"NAT Напредването",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Виртуални сървъри",
			PORT_TRIGGERING: 			"Задействане на порт",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"USB  Настройки",
			BASIC_SET: 					"Основни настройки",
			DISK_SET: 					"Настройки на устройството",
			FOLDER_SHARING: 			"Достъп до споделянето",
			STORAGE_SHARING: 			"Сторидж споделяне",
			FTP_SERVER: 				"FTP сървър",
			MEDIA_SERVER: 				"Медия сървър",
			PRINT_SERVER: 				"Принт сървър",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Родителски контрол",
			
			QOS:  						"QoS",
			DATABASE:  					"База данни",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Карта",
			SB_MAP: 					"Карта",
			SB_BANDWIDTH:  				"Широчина на честотната лента",
			SB_PRIORITY: 				"Приоритет",
			SB_STATISTICS: 				"Статистики",

			
			SECURITY: 					"Сигурност",
			SETTINGS: 					"Настройки",
			ACCESS_CONTROL: 			"Контрол на достъпа",
			IP_MAC_BINDING: 			"IP&MAC Обвързване",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Системни инструменти",
			TIME_SETTINGS: 				"Времеви настройки",
			DIAGNOSTIC: 				"Диагностика",
			FIRMWARE_UPGRADE: 			"Обновяване на фърмуера",
			BACKUP_RESTORE: 			"Архивиране & Възстановяване",
			ADMINISTRATION: 			"Администрация",
			SYSTEM_LOG: 				"Системен лог",
			STATISTICS: 				"Трафик статистика",
			SYSTEM_PARAMETERS: 			"Системни параметри",
			ACCOUNT: 					"TP-Link Cloud",
			
			VPN: 						"VPN Сървър ",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"VPN Връзки"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Регион и времева зона",
			INTERNET_CONNECTION_TYPE: 	"Тип на интернет връзката",
			WIRELESS_SETTINGS: 			"Настройки на безжичната мрежа",
			SUMMARY: 					"Резюме",
			SETUP_COMPLETE: 			"Проверете връзката с интернет",
			SETUP_COMPLETE_CLOUD: 			"TP-Link облачна услуга",

			EXIT: 						"Изход",
			NEXT: 						"Следващ",
			SAVE: 						"Запази",
			FINISH: 					"Край",
			OK: 						"ОК",
			NONE: 						"Проверката е неуспешна.",

			REGION: 					"Регион",
			TIME_ZONE: 					"Времева зона",

			AUTO_DETECT: 				"Автоматично разпознаване",
			DYNAMIC_IP: 				"Динамично IP",
			STATIC_IP: 					"Статично IP",
			PPPOE: 						"PPPoE",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Ако не сте сигурни какъв е типа на вашата интернет връзка, използвайте Автоматично Разпознаване или вашия доставчик на интернет услуга (ISP) за помощ.",

			DYNAMIC_IP_INFO: 			"Ако вашия доставчик позволява само обвързана с MAC адреса връзка, Вие се нуждаете от клониране на MAC Aдреса. Ако не сте сигурни изберете да Hе клонира MAC Aдреса.",
			MAC_CLONE_NO: 				"Да не се клонира MAC Aдреса",
			MAC_CLONE_YES: 				"Клониране на текущия MAC Aдресa",
			MAC_CLONE_NOTE: 			"Ако изберете да се клонира MAC Aдреса, моля уверете се, че MAC Aдреса на този компютър е регистриран от ISP и натиснете Следващ.",

			PPPOE_INFO: 				"Моля, въведете вашите PPPoE потребителско име и парола.",
			
			STATIC_IP_INFO: 			"Моля, въведете вашата IP информация.",

			L2TP_INFO: 					"Моля, въведете вашите L2TP потребителско име и парола.",
			PPTP_INFO: 					"Моля, въведете вашите PPTP потребителско име и парола.",
			
			USERNAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			SERVER_IP_ADDRESS_NAME: 	"VPN Сървър IP/Домейн име",
			IP_ADDRESS: 				"IP Адрес",
			SUBNET_MASK: 				"Мрежова маска",
			DEFAULT_GATEWAY: 			"Шлюз по подразбиране",
			PRIMARY_DNS: 				"Първичен DNS",
			SECOND_DNS: 				"Вторичен DNS",
			OPTIONAL: 					"(Опционален)",
			
			ON: 						"Включен",
			OFF: 						"Изключен",
			WIRELESS_24GHZ: 			"Безжична мрежа 2.4GHz",
			WIRELESS_5GHZ: 				"Безжична мрежа 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Разрешено безжично радио",
			NAME_SSID: 					"Име на безжичната мрежа (SSID)",

			SUMMARY_INFO1: 				"Вашето безжично устройство се нуждае от повторно свързване към новата безжична мрежа преди да изберете <strong> Следващ </strong>бутона .",
			SUMMARY_INFO2: 				"Вашите потребителско име и парола за безжичната мрежа бяха променени както следва:",
			SUMMARY_INFO3: 				"Уверете се, че сте свързан към новата безжична мрежа.",

			WIRELESS_24GHZ_SSID: 		"Безжичен 2.4GHz Име (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Безжичен 2.4GHz Парола",
			WIRELESS_5GHZ_SSID: 		"Безжичен 5GHz Име (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Безжичен 5GHz Парола",

			SORRY: 						"Неуспех.",
			SUCCESS: 					"Успех!",
			TEST_INTERNET_SUCCESS_INFO: "Изберете Завършване за край на бързата настройка",

			TEST_INTERNET_FAILED_INFO_0:"Моля, потвърдете, дали всички параметри за бързо инсталиране са верни и опитай отново. Ако всички параметри за бързо инсталиране са правилни. Моля, рестартирайте модема, изчакайте 2 минути, и кликнете Тест Интернет Свързване още един път. Ако не използвате модем, можете да се наложите да се свържете с вашия доставчик на интернет услуги (ISP) за помощ.",
			TEST_INTERNET_FAILED_INFO_1: "Опа... Връзката с интернет не е настроена правилно.<br />1. Моля, уверете се, че всички кабели са правилно свързани.<br />2. Щракнете  Back (Назад) и проверете, дали информацията за връзката с интернет е правилна.<br />3. Свържете се с нашата Техническа поддръжка, ако проблемът продължава.",
			SUMMARY_INFO4: 				"Съжаляваме! Вашето безжично устройство не е свързано към новата безжична мрежа. Моля да го направя и после изберете<strong>ОК</strong>.",
                                         
			CONGRATULARIONS: 			"Поздравления!",
			COMPLETE_INFO_0: 			"Вие завършихте кратката настройка.",
			COMPLETE_INFO_1:			"Изберете Тест на интернет връзката по-долу и после Завършване.",
			COMPLETE_INFO_2: 			"Не сте влезли във вашия TP-Link Cloud акаунт. Можете да влезете по-късно от Basic > TP-Link Cloud.",
			TEST_INTERNET: 				"Проверете връзката с интернет",

			
			RESET_USER_TITLE: 			"Настройка на ново име и парола",
			NEW_USERNAME: 				"Ново потребителско име",
			NEW_PASSWORD: 				"Нова парола",
			CONFIRM_PASSWORD: 			"Потвърди новата парола",
			
			NO_ACCOUNT: 				"Няма TP-Link ID?",
			REGISTER_NOW: 				"Регистрирайте се сега",
			REGISTER_SKIP: 				"Влезте по-късно",
			LOGIN: 						"Вход",
			REGISTER_NEW:				"Регистрация на нов акаунт",
			COMPLETE_INFO_EMAIL_PREFIX: "Вашият TP-Link ID е:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Сериозно препоръчваме да влезете, използвайки този акаунт, за да управлявате лесно вашето устройство и за  да използвате още TP-Link Cloud функции.",

			INTERNET_OK: 				"Поздравления! Мрежата е настроена успешно. Наслаждавайте се на интернет.",
			CLOUD_WIZARD: 				"За още функции на TP-Link Cloud, моля влезте с вашия <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			ACCOUNT_DESP:               "С TP-Link ID можете:", 
			ACCOUNT_DESP_SUB1:          "Да имате достъп до вашето устройство и локални сървъри  (FTP, HTTP, и др.) отвсякъде по интернет",
			ACCOUNT_DESP_SUB2:          "Винаги да поддържате вашия фърмуер актуален с функцията Online Upgrade (Онлайн ъпгрейд)",
	        ACCOUNT_DESP_SUB3:          "Да управлявате множество устройства само с един акаунт",
			
			CONFIRM: 					"Потвърди"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"Интернет",
			INTERNET_STATUS:			"Интернет статус",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Тип на връзката",
			SECONDARY_CONN: 			"Втора връзка",

			POOR_CONNECTED: 			"Слабо свързана",
			UNPLUGGED: 					"WAN порта не е свързан.",
			
			CONNECTED: 					"Свързан",
			DISCONNECTED: 				"Прекъсната връзка",

			INTERNET_IP_ADDR: 			"IP Адрес",
			
			IP_ADDR: 					"IP Адрес",
			MAC_ADDR: 					"MAC Адрес",
			GATEWAY: 					"Шлюз по подразбиране",

			AUTO: 						"Автоматично",
			
			ROUTER: 					"Маршрутизатор",
			WIRELESS_CLIENTS: 			"Безжичен клиент",
			HOST_CLIENTS: 				"Хост клиенти",
			GUEST_CLIENTS: 				"Клиенти гости",
			WIRE_CLIENTS: 				"Жичен клиент",
			PRINTER: 					"Принтер",
			USB_DISK: 					"USB диск",
			WIRELESS: 					"Безжично",
			NAME: 						"Име",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Канал",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Безжична мрежа 2.4GHz",
			WIRELESS_5GHZ: 				"Безжична мрежа 5GHz",
			
			GUEST_24GHZ: 				"Свободна мрежа 2.4GHz",
			GUEST_5GHZ: 				"Свободна мрежа 5GHz",
			
			STATUS: 					"Статус",
			TOTAL: 						"Общо",
			AVAILABLE: 					"Достъпен",
			GB: 						"GB",
			BRAND: 						"Марка",

			DYNAMIC_IP: 				"Динамично IP",
			STATIC_IP: 					"Статично IP",
			SUBNET_MASK: 				"Мрежова маска",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Кабел",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 тунел",
			NONE: 						"Няма"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"Интернет",
			AUTO_DETECT: 				"Автоматично разпознаване",
			INTERNET_CONN_TYPE: 		"Тип на интернет връзката",
			DYNAMIC_IP: 				"Динамично IP",
			STATIC_IP: 					"Статично IP",
			PPPOE: 						"PPPoE",
			BIGPOND: 					"BigPond Кабел",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"WAN порта не е свързан.",
			NONE: 						"Няма",
			DETECT_FAIL: 				"Автоматично откриване се провали",
			SECONDARY_CONN: 			"Втора връзка",

			DYNAMIC_YES: 				"Да не се клонира MAC Aдреса",
			DYNAMIC_NO: 				"Клониране на текущия MAC Aдресa",
			
			IP_ADDR: 					"IP Адрес",
			SUBNET_MASK: 				"Мрежова маска",
			DEFAULT_GATEWAY: 			"Шлюз по подразбиране",
			PRIMARY_DNS: 				"Първичен DNS",
			SECOND_DNS: 				"Вторичен DNS",
			OPTIONAL: 					"(Опционален)",
			USER_NAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			SERVER_IP_ADDR_NAME: 		"VPN Сървър IP/Домейн име",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Ако не сте сигурни какъв е типа на вашата интернет връзка, използвайте Автоматично Разпознаване или вашия доставчик на интернет услуга (ISP) за помощ."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Настройки на безжичната мрежа",
			MODE_2G: 					"Безжична мрежа 2.4GHz",
			MODE_5G: 					"Безжична мрежа 5GHz",
			WIRELESS_NETWORK_NAME: 		"Име на безжичната мрежа (SSID)",
			WIRELESS_PASSWORD: 			"Парола",
			ENABLE_WIRELESS: 			"Разрешено безжично радио",
			SAVE: 						"Запази",
			ENCRYPTION_2G_NOTICE:		"2.4G криптиране е %s.",
			ENCRYPTION_5G_NOTICE:		"5G криптирането е %s.",
			ENCRYPTION_2G_NO: 			"2.4GHz безжична мрежа не е кодирано.",
			ENCRYPTION_5G_NO: 			"5GHz безжична мрежа не е кодирано.",
			ENCRYPTION_SURE: 			"Сигурни ли сте, че искате да продължите?",

			HIDE_SSID: 					"Скрий SSID"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Основни настройки",
			TITIL_NEW:					"Диск и Акаунт",
			DISK_SET:					"Настройки на устройството",

			SELFLY_REMOVE:				"Сигурно премахване",
			SCANING:					"Сканиране...",
			SCAN_RESULT:				"Намерени %n дискове",
			
			DISKS:						"Дискове",
			USERS: 						"Потребители на Акаунт",
			DEVICENAME: 				"Име на устройството",
			VOLUMN: 					"Обем",

			USBSPACE: 					"Използвано пространство",
			FREESPACE: 					"Свободно пространство",
			STATUS: 					"Статус",
			INACT: 						"Инактивира",
			USAGE: 						"Употреба",
			CAPACITY: 					"Капацитет",
			OPERATION: 					"Операция",
			
			ACC: 						"Управление на акаунта",
			USERNAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			USE_LOGIN: 					"Използвайте Входа за потребител",
			SCAN: 						"Сканирай",
			ENJECT_ALL: 				"Освободи всички",
			ENJECT: 					"Изхвърляне",
			ADD_USER: 					"Добавяне на потребител",
			AUTH: 						"Власт",


			LOCATION: 					"Местоположение",
			MOBILE_ISP: 				"Мобилен ISP",
			DIAL_NUMBER: 				"Hаберете номер",
			APN: 						"APN",
			USERNAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			MTU_SIZE: 					"MTU Размер(в байтове)",
			OPTIONAL: 					"(Опционален)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Родителски контрол",

			DEVICE_CTR: 				"Устройство, управлявано от функцията Родителски контрол",
			ID: 						"ID",
			DEVICE: 					"Име на устройството",
			MAC_ADDRESS: 				"MAC Адрес",
			TIME: 						"Време на интернет достъп",
			DESCRIPTION: 				"Описание",
			ENABLE: 					"Разреши",
			ENABLE_THIS_ENTRY: 			"Разреши",
			OPTIONAL: 					"(Опционален)",
			BTN_VIEW: 					"Виж съществуващо устройство",
			ACCESS_DEVICES_LIST: 		"Списък с устройства",
			OPT: 						"Операция",
			STATUS: 					"Статус"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Гост Мрежа",
			MODE_2G: 					"Безжична мрежа 2.4GHz",
			MODE_5G: 					"Безжична мрежа 5GHz",
			WIRELESS_NETWORK_NAME: 		"Име на безжичната мрежа (SSID)",
			WIRELESS_PASSWORD: 			"Парола",
			ENABLE_WIRELESS: 			"Позволи Свободна Мрежа",
			SAVE:						"Запази",
			HIDE_SSID: 					"Скрий SSID"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Облачен акаунт",
			OFFLINE_NOTE_TITLE: 		"Устройството е офлайн",
			LOGIN_NOTE_TITLE: 			"Опаа…",
			LOGIN_OFFLINE_NOTE: 		"Устройството е офлайн. Моля, проверете конфигурацията на WAN и мрежата, за да се уверите, че подходящите настройки са въведени правилно.",

			EMAIL: 						"Email",
			PASSWORD: 					"Парола",
			FORGET_PASSWORD: 			"Забравена парола?",

			CLOUD_WIZARD: 				"За още функции на TP-Link Cloud, моля влезте с вашия <a class=\"link\" href=\"#\">TP-Link ID</a>.",
			NO_ACCOUNT: 				"Няма TP-Link ID?",
			REGISTER_NOW: 				"Регистрирайте се сега"
		},
		STATUS: {
			TITLE: 						"Статус",
			INTERNET:					"Интернет",
			WIRELESS:					"Безжично",
			LAN:						"ЛАН",
			USB_TITLE:					"USB Устройства",
			PERFORMANCE: 				"Производителност",
			GUEST_NETWORK: 				"Гост Мрежа",
			ACCESS_DEVICES: 			"Устройства за достъп",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Тип на връзката",

			MAC_ADDRESS: 				"MAC Адрес",
			IP_ADDRESS: 				"IP Адрес",
			RELEASE: 					"Освободи",
			RENEW: 						"Обнови",
			
			DYNAMIC_IP: 				"Динамично IP",
			STATIC_IP: 					"Статично IP",
			SUBNET_MASK: 				"Мрежова маска",
			PPPOE: 						"PPPoE",
			BIGPOND_CABLE: 				"BigPond Кабел",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 тунел",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Пропускателен (Мост)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Няма",
			
			DEFAULT_GATEWAY: 			"Шлюз по подразбиране",
			DNS: 						"DNS Сървър",
			MAC: 						"MAC Адрес",
			WDS_STATUS: 				"WDS Статус",
			
			IPV6_ADDRESS: 				"IP Адрес",
			PRIMARY_DNS: 				"Първичен DNS",
			SECOND_DNS: 				"Вторичен DNS",

			RADIO: 						"Безжично радио",

			NAME_SSID: 					"Име на безжичната мрежа(SSID)",
			NETWORK_NAME_SSID:			"Име на безжичната мрежа (SSID)",
			HIDE_SSID: 					"Скрий SSID",
			MODE: 						"Режим",
			CHANNEL: 					"Канал",
			CHANNEL_WIDTH: 				"Ширина на канала",
			AUTO: 						"Автоматично",
			CURRENT_CHANNEL: 			"Текущ канал",

			WDS: 						"WDS Статус",
			WIRED_CLIENTS: 				"Жичен клиент",
			WIRELESS_CLIENTS: 			"Безжичен клиент",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Свързан-Локален Адрес",
			ASSIGN_TYPE: 				"Назначен тип",

			ALLOW_TO_SEE_EACH: 			"Позволи на гостите да се виждат по между си",

			TOTAL: 						"Общо",
			AVAILABLE: 					"Достъпен",

			USB: 						"USB диск",
			PRINTER: 					"Принтер",

			CPU_LOAD: 					"CPU Натоварване",
			MEMORY_USAGE: 				"Използвана памет",

			IP_ADDR_P: 					"IP адрес",
			MAC_ADDR_P: 				"MAC Адрес",
			CONN_TYPE_P: 				"Тип на връзката",

			DISABLED: 					"Забранен",
			INIT: 						"Инициирай",
			SCAN: 						"Сканирай",
			AUTH: 						"Разрешавай",
			ASSOC: 						"Сътруд",
			RUN: 						"Стартирайте",
			HOST: 						"Хост",
			GUEST: 						"Гост",

			ON: 						"Включен",
			OFF: 						"Изключен"
		},

		INTERNET: {
			TITLE: 						"Интернет",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Тип на интернет връзката",
			INTERNET_MAC_ADDRESS: 		"MAC Адрес",
			
			CONNECT: 					"Свързване",
			DISCONNECT: 				"Разкачване",
			
			IP_ADDR: 					"IP Адрес",
			
			USE_DEFAULT_MAC: 			"Използвайте MAC адреса по подразбиране",
			USE_COMPUTER_MAC: 			"Използвайте текущия MAC адрес",
			USE_CUSTOM_MAC: 			"Използвайте MAC адрес по желание",
			MAC_CLONE: 					"MAC  клониране",
			
			CONFIG: 					"Конфигуриране",
			
			IP_ADDRESS: 				"IP Адрес",
			SUBNET_MASK: 				"Мрежова маска",
			DEFAULT_GATEWAY: 			"Шлюз по подразбиране",
			
			MANUAL_DNS: 				"Ръчен DNS",
			PRIMARY_DNS: 				"Първичен DNS",
			SECOND_DNS: 				"Вторичен DNS",
			
			RENEW: 						"Обнови",
			RELEASE: 					"Освободи",
			VIEW_MODE: 					"Изгледащ режим",
			
			GET_DYNAMICALLY_FROM_ISP: 	"Вземи Динамично от ISP",
			USE_FOLLOW_IP_ADDR: 		"Използвай следния IP Адрес",
			USE_FOLLOW_DNS_ADDR: 		"Използвай следния DNS Адрес",
			USE_FOLLOW_DNS_SERVER: 		"Използвай следния DNS Сървър",
			
			BASIC: 						"Основен",
			ADVANCED: 					"Разширени",
			
			DNS_ADDR_MODE: 				"DNS Адрес",
			MTU_SIZE: 					"MTU Размер",
			MTU_1500: 					"байтове.(По подразбиране е 1500, да не се променя освен при нужда.)",
			MTU_1480: 					"Байтове. (По подразбиране е 1480, да не се променя освен при нужда.)",
			MTU_1460: 					"байтове. (По подразбиране е 1460, да не се променя освен при нужда.)",
			MTU_1420: 					"байтове. (По подразбиране е 1420, да не се променя освен при нужда.)",
			
			HOST_NAME: 					"Хост име",

			HOST_NAME_CONFIRM: 			"Хост името съдържа невалидни символи, които могат да причинят неочаквано поведение на системата. Сигурни ли сте, че искате да продължите?",

			GET_IP_WITH_UNICAST_DHCP: 	"Вземи IP посредством Unicast DHCP (обикновенно не се изисква.)",
			OPTIONAL: 					"(Опционален)",
			
			STATIC_IP: 					"Статично IP",
			PPPOE: 						"PPPoE",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			
			INTERNET_IP_ADDR: 			"IP Адрес",
			INTERNET_DNS: 				"Интернет DNS",
			SECONDARY_CONN: 			"Втора връзка",
			NONE: 						"Няма",
			INTERNET_PRIMARY_DNS:		"Първичен DNS",
			INTERNET_SECONDARY_DNS: 	"Вторичен DNS",
			
			DYNAMIC_IP: 				"Динамично IP",
			DYNAMIC_IP_v6: 				"Динамично IP (SLAAC/DHCPv6)",
			STATIC_IP: 					"Статично IP",
			SERVICE_NAME: 				"Име на сървър",
			ACCESS_CONCENTRATOR_NAME:  	"Име на Access Concentrator",
			DETECT_ONLINE_INTERVAL: 	"Разпознаване времето на активност",
			INTERVAL_TIPS: 				"секунди. (0-120. По подразбиране са 10.)",
			IP_ADDR_MODE:  				"IP Адрес",
			CONN_MODE: 					"Режим на връзка",
			DHCP_LINK_UNPLUGGED: 		"WAN порта не е свързан.",
			
			AUTO: 						"Автоматично",
			ON_DEMAND: 					"При поискване",
			TIME_BASED: 				"Времево-базиран",
			MANUALLY: 					"Ръчно",
			MAX_IDLE_TIME: 				"Максимално време на незаетост",
			MAX_IDLE_TIME_TIPS: 		"минути. (0 значи винаги активен.)",
			PERIOD_OF_TIME: 			"Период от време",
			TIME_TIPS: 					"(HH:MM)",
			BIGPOND_CABLE: 				"BigPond Кабел",
			AUTH_SERVER: 				"Идент. Сървър",
			AUTH_DOMAIN: 				"Идент. Домейн",
			L2TP: 						"L2TP",
			GATEWAY: 					"Шлюз по подразбиране",
			SERVER_IP_ADDR_NAME: 		"VPN Сървър IP/Домейн име",
			PPTP: 						"PPTP",
			TO: 						"Към",
			
			TUNNEL_6TO4: 				"6to4 тунел",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Вземи не-временен IPv6 адрес",
			GET_PREFIX_DELEGATION: 		"Вземи IPv6 префикс делегиране",
			IPV6_ADDR: 					"IPv6 Адрес",

			GET_IPV6_WAY: 				"Вземи IPv6 Адрес",
			AUTOMATICALLY: 				"Вземи автоматично",
			SPECIFIED_BY_ISP: 			"Определен от ISP",

			IPV6_ADDR_PREFIX: 			"IPv6 адрес префикс",
			NONE_TEMPORARY: 			"Не-временно",

			PREFIX_DELEGATION: 			"Префикс делегиране",
			ENABLE: 					"Разреши",
			DISABLE: 					"Забрани",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"IPv4 дължина на маската",
			CONFIG_TYPE: 				"Тип на конфигуражия",
			RD6_PREFIX: 				"6RD префикс",
			RD6_PREFIX_LENGTH: 			"6RD дължина на префикса",
			REPLY_IPV4_ADDR: 			"IPv4 адрес при границата на предаване",
			MANUAL: 					"Ръчно",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Пропускателен (Мост)",
			LOCAL_IPV6: 				"Местен IPv6 адрес",
			PEER_IPV6: 					"Пиър IPv6 адрес",
			TUNNEL_ADDR: 				"Адрес на тунела",
			IPV4_NETMASK: 				"IPv4 мрежова маска",
			CUSTOM: 					"Обичани",
		    AFTR_NAME: 					"AFTR Име",
			PPP_SHARE_V6:				"PPPoE е същата сесия, както IPv4 връзката",
			PPP_SHARE_V4:				"PPPoE е същата сесия, както IPv6 връзката",

			
			
			IPV4_ADDR: 					"IPv4 Адрес",
			IPV4_MASK: 					"IPv4 Мрежова маска",
			IPV4_GATEWAY: 				"IPv4 Шлюз по подразбиране",
			TUNNEL_ADDR: 				"Адрес на тунела",

			DUPLEX: 					"Дуплекс",
			AUTO_NEGOTIATION: 			"Автоматично разпознаване",
			FULL_DUPLEX_1000: 			"1000Mbps пълен дуплекс",
			HALF_DUPLEX_1000:			"1000Mbps половин дуплекс",
			FULL_DUPLEX_100: 			"100Mbps пълен дуплекс",
			HALF_DUPLEX_100: 			"100Mbps половин дуплекс",
			FULL_DUPLEX_10: 			"10Mbps пълен дуплекс",
			HALF_DUPLEX_10: 			"10Mbps половин дуплекс"

		},

		LAN: {
			TITLE: 						"ЛАН",
			LAN: 						"ЛАН",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			
			LAN_IPv4: 					"LAN IPv4",
			LAN_IPv6: 					"LAN IPv6",

			MAC_ADDRESS: 				"MAC Адрес",
			IP_ADDRESS: 				"IP Адрес",
			SUBNET_MASK: 				"Мрежова маска",
			CUSTOM: 					"Обичани",

			IGMP: 						"Разреши IGMP Proxy",
			

			ASSIGNED_TYPE: 				"Назначен тип",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Stateless DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Адресен префикс",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Адрес",
			DELEFATED: 					"Делегиран",
			STATIC: 					"Статичен",
			SITE_PREFIX: 				"Префикс на сайта",
			SITE_PREFIX_LEN: 			"Дължина на префикс на сайта",

			PREFIX_TYPE:  				"Конфигурация на типа на префикс на сайта",
			LAN_IPV6_ADDR:  			"LAN IPV6 Адрес",

			RELEASE_TIME: 				"Време на освобождаване",
			RELEASE_TIME_TIP: 			"секунди. (По подразбиране е 86400 да не се променя освен ако не е наложително.)",
			ADDRESS:					"Адрес",
			SAVE: 						"Запази",

			REBOOT_TIP: 				"Рутерът минава към новата страница за вход. <br/> Моля, изчакайте..."

		},

		IPTV:{
			TITLE: 						"Настройки",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "Разреши IPTV", 
			MODE:  						"Режим",
			IGMP_PROXY: 				"IGMP Прокси",
			IGMP_VERSION: 				"IGMP Версия",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Бридж",
			BASIC: 						"Обичани",
			EXSTREAM: 					"Singapore-ExStream",
			RUSSIA:  					"Русия",
			UNIFY:  					"Malaysia-Unifi",
			MAXIS:  					"Malaysia-Maxis",
			MEO:						"Португалия-MEO",
	   		VDF:						"Португалия-Vodafone",
			LAN1: 						"ЛАН1",
			LAN2: 						"ЛАН2",
			LAN3: 						"ЛАН3",
			LAN4: 						"ЛАН4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"Интернет",
			IP_PHONE: 					"IP-Телефон", 

			Q_TAG: 						"802.1Q таг",
			ENABLE: 					"Разреши",
			
			INTERNET_VLAN_ID: 			"Интернет Vlan ID",
			INTERNET_VLAN_PRIORITY: 	"Интернет Vlan приоритет",
			IP_PHONE_VLAN_ID: 			"IP-Phone Vlan ID",
			IP_PHONE_VLAN_PRIORITY: 	"IP-Телефон VLAN Приоритет",
			IPTV_VLAN_ID: 				"IPTV Vlan ID",
			IPTV_VLAN_PRIORITY: 		"IPTV VLAN PrioritertIPTV VLAN Приоритет",
			IPTV_MULTI_VLAN_ID: 		"IPTV Мултикаст VLAN ID",
			IPTV_MULTI_VLAN_PRIORITY: 	"ITPV VLAN приоритет"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP Сървър",
			
			SETTINGS: 					"Настройки",

			DHCP_SERVER: 				"DHCP Сървър",
			ENABLE_DHCP_SERVER: 		"Разрешете DHCP Сървъра",

			IP_ADDR_POOL: 				"IP Адрес Pool",
			LEASETIME: 					"Време за активност на адресите",
			LEASENOTE: 					"минути. (1-2880. Стойността по подразбиране е 120.)",
			
			GATEWAY: 					"Шлюз по подразбиране",
			DOMAIN: 					"Домейн по подразбиране",
			PRIMARYDNS: 				"Първичен DNS",
			SECONDARYDNS: 				"Вторичен DNS",

			OPTIONAL: 					"(Опционален)",

			CLIENTSLIST: 				"DHCP списък с клиенти",
			CLIENT_NUMBER: 				"Клиент номер",
			CLIENT_NAME: 				"Име на клиент",
			MAC_ADDR: 					"MAC Адрес",
			ASSIGNED_IP: 				"Целеви IP Адрес",
			LEASE_TIME: 				"Време на активност",

			RESERVATION: 				"Адрес резервиране",

			RESERVED_IP: 				"Запазен IP Адрес",
			IP_ADDRESS: 				"IP Адрес",
			DESCRIPTION: 				"Описание",

			CLIENTSLIST: 				"DHCP списък с клиенти",
			CLIENT_NUMBER: 				"Клиент номер",

			ENABLE: 					"Разреши",
			ENABLE_THIS_ENTRY: 			"Разреши"
			
		},

		DDNS: {
			DDNS: 						"Динамичен DNS",
			SERVICEPROVIDER: 			"Доставчик на услуги",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Динамичен DNS",
			NOIP: 						"Без-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Регистрация...",
			USERNAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			DOMAIN_NAME_LIST: 			"Домейн списък на имена",
			DOMAIN_NAME: 				"Домейн име",
			LOGIN: 						"Вход",
			LOGIN_SAVE: 				"Влизане и запис", 
			LOGOUT: 					"Излез",
			STATU_SUCCESS:				"Успех!",
			UPDATE_INTERVAL:			"Интервал на опресняване",
			ONE_HOUR:					"1 час",
			SIX_HOUR:					"6 часа",
			TWETEEN_HOUR:				"12 часа",
			ONE_DAY:					"1 ден",
			TWO_DAY:					"2 дни",
			THREE_DAY:					"3 дни",
			NEVER:						"Никога",
			UPDATE:						"Актуализация",
			STATU_INCORRENT:			"Неправилно потребителско име или парола",
			STATU_ERR_DOMAIN:			"Грешното име на домейна",
			WAN_IP_BIND: 				"WAN IP Обвързване",
			CURRENT_DOMAIN: 			"Текущо име на домейн",
			REGISTER: 					"Регистрация",
			BIND: 						"Обвързване",
			UNBIND: 					"Освободи",
			TITLE: 						"DDNS не е налична",
			CONTENT: 					"За да използвате нашата отлична TP-Link DDNS услуга, моля <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">Влезте</a> с вашия TP-Link ID, или изберете друг доставчик на услуги.",
			STATU_NO_LAUNCH:			"Не е стартирано",
			STATU_FAIL_DDNS: 			"Неуспешна актуализация на DDNS.",
			STATU_FAIL_NOIP: 			"Неуспешна актуализация на NO-IP.",
			DISABLE: 					"Забрани",
			ENABLE: 					"Разреши",	
			STATU_NO_LAUNCH:			"Неуспешна актуализация на DDNS.",
			STATU_CONN:					"Свързване",
			WAN_IP_BIND: 				"WAN IP Обвързване",
			TIME: 						"Дата на регистрация",
			BOUND: 						"Връзка",
			FREE: 						"Безплатна",
			SORRY: 						"Неуспех.",
			UNBIND_NOTE:          		"Ако желаете да обвържете %domain% с вашето устройство, моля първо освободете текущото име на домейн."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Разширено маршрутизиране",
			STATIC_ROUTING: 			"Статично маршрутизиране",

			DESTINATION_NETWORK:		"Дестинация мрежа",
			SUBNET_MASK: 				"Мрежова маска",
			DEFAULT_GATEWAY: 			"Шлюз по подразбиране",
			DESCRIPTION: 				"Описание",
			
			SYSTEM_ROUTING_TABLE: 		"Системна routing таблица",
			CLIENT_NUMBER: 				"Клиент номер",

			GATEWAY: 					"Шлюз по подразбиране",
			INTERFACE: 					"Интерфейс",
			LAN: 						"ЛАН",
			WAN: 						"WAN",
			ENABLE: 					"Разреши",
			ENABLE_THIS_ENTRY: 			"Разреши"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Настройки",
			NOT_SUPPORT_5G: 			"Регионът поддържа само 2.4GHz. Моля, уверете се, че избирате правилния региона.",

			REGION: 					"Регион",
			NOTICE:  					"За да използвате безжична функция, трябва да имате включен безжичен хардуер.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Настройки на безжичната мрежа",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Разрешено безжично радио",

			WIRELESS_NETWORK_NAME: 		"Име на безжичната мрежа (SSID)",
			WIRELESS_PASSWORD: 			"Парола",
			HIDE_SSID: 					"Скрий SSID",

			SECURITY: 					"Сигурност",
			NO_SECURITY: 				"Незащитена",
			WPA_WPA2_PERSONAL: 			"WPA / WPA2 - Лична (препоръчително)",
			WPA_WPA2_ENTERPRISE: 		"WPA / WPA2 - Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Версия",

			AUTO: 						"Автоматично",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Шифроване",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Режим",
			MODE_B:  					"802.11b само",
			MODE_G:  					"802.11g само",
			MODE_N:  					"802.11n само",
			MODE_BG:  					"802.11b/g смесен",
			MODE_GN: 					"802.11g/n смесен",
			MODE_BGN:  					"802.11b/g/n смесен",

			MODE_A_5: 					"802.11a само",
			MODE_AN_5: 					"802.11a/n смесен",
			MODE_N_5: 					"802.11n само",
			MODE_AC_5:					"802.11ac само",
			MODE_NAC_5:					"802.11n/ac смесен",
			MODE_ANAC_5:				"802.11a/n/ac смесен",


			CHANNEL_WIDTH: 				"Ширина на канала",
			CHANNEL: 					"Канал",

			TRANSMIT_POWER: 			"Мощност на излъчване",

			RADIUS_SERVER_IP: 			"RADIUS сървър IP",
			RADIUS_PORT: 				"RADIUS порт",
			RADIUS_PASSWORD: 			"RADIUS парола",

			TYPE: 						"Тип",
			OPEN_SYSTEM: 				"Отворена система",
			SHARED_KEY: 				"Споделен ключ",

			KEY_SELECTED: 				"Избран кюч",
			KEY1: 						"Ключ 1",
			KEY2: 						"Ключ 2",
			KEY3: 						"Ключ 3",
			KEY4: 						"Ключ 4",

			WEP_KEY_FORMAT: 			"Формат на WEP ключа",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimal",

			KEY_TYPE: 					"Тип на ключа",
			BIT64: 						"64 bit",
			BIT128: 					"128 bit",
			BIT152: 					"152 Bit",

			KEY_VALUE: 					"Стойност на ключа",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Ниска",
			MIDDLE: 					"Средна",
			HIGH: 						"Висока"
		},

		WPS: {

			TITLE2: 					"Пин на маршрутизатора",
			ROUTERS_PIN_INFO: 			"Други устройства могат да се свържат с маршрутизатора посредством WPS и ПИН на маршрутизатора.",
			ENABLE_ROUTE_PIN: 			"Пин на маршрутизатора",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Генерирай",
			DFT: 						"По подразбиране",

			TITLE: 						"WPS Съветник",
			SELECT_SETUP: 				"Изберете метод на настройка",
			PUSH_BTN: 					"С натискане на бутон(Препоръчително)",
			PUSH_DES: 					"Моля, натиснете физическия натиск бутон на маршрутизатора или изберете софтуерния Connect от тази страница.",
			CONNECT: 					"Свързване",
			CANCEL: 					"Отказ",

			RESULT_HEAD: 				"Безжичен клиент",
			RESULT_END: 				"е успешно добавен към мрежата ",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Не е намерен",
			ENTER_CLIENT_PIN: 			"Въведете клиентския PIN",
			SWITCH_NOTE:				"За да използвате WPS трябва първо да позволите безжичната функция.",
			SWITCH_NOTE2:				"За да използвате WPS трябва първо да конфигурирате правилно параметрите на безжичната мрежа.",
			STATUS_PIN_ERROR: 			"Невалиден WPS PIN? Моля, проверете дали е правилен.",
			STATUS_ERROR: 				"Грешка.",
			STATUS_CONN_ERROR: 			"Връзката се провали.",
			STATUS_CONNING: 			"Свързване...",
			STATUS_CANCEL: 				"Връзката прекъсната.",
			
			NOTE: 						"Забележка:",
			
			STATUS_CONN_OVERLAP: 		"Връзката се провали(OVERLAP).",
			STATUS_CONN_TIMEOUT: 		"Връзката се провали(TIMEOUT).",
			STATUS_CONN_INACT: 			"Връзката е неактивна."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Активни безжични станции",
			CLIENT_NUMBER: 				"Клиент номер",
			MAC_ADDRESS: 				"MAC Адрес",
			CONN_TYPE: 					"Тип на връзката",
			SECURITY: 					"Сигурност",
			RECEIVED_PACKETS: 			"Приети пакети",
			SEND_PACKETS: 				"Изпратени пакети"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Настройки",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Позволи на гостите да се виждат по между си",
			
			ALLOW_LOCAL: 				"Позволи на гостите да достъпват моята локална мрежа",
			
			WIRELESS: 					"Безжично",
			WIRELESS_24G_RADIO: 		"Безжична мрежа 2.4GHz",
			WIRELESS_5G_RADIO: 			"Безжична мрежа 5GHz",
			ENABLE_GUEST: 				"Позволи Свободна Мрежа",

			NAME_SSID: 					"Име на безжичната мрежа (SSID)",
			HIDE_SSID: 					"Скрий SSID",

			SECURITY: 					"Сигурност",
			NO_SECURITY: 				"Незащитена",	
			WPA_WPA2_PERSONAL: 			"WPA / WPA2 - Лична",

			VERSION: 					"Версия",
			AUTO: 						"Автоматично",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Шифроване",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Парола"
		},

		NAT:{
			SETTINGS: 					"Хардуерен NAT",
			STATUS: 					"Хардуерен NAT",
			
			ALG_TITLE: 					"ALG",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP Passthrough",
			L2TP_ALG: 					"L2TP Passthrough",
			IPSEC_ALG: 					"IPSec Passthrough",

			ENABLE_FTP_ALG: 			"Активиране на FTP ALG",
			ENABLE_TFTP_ALG: 			"Активиране TFTP ALG",
			ENABLE_H323_ALG: 			"Активиране H323 ALG",
			ENABLE_RTSP_ALG: 			"Активиране RTSP ALG",
			ENABLE_PPTP_ALG: 			"Активиране PPTP Passthrough",
			ENABLE_L2TP_ALG: 			"Активиране L2TP Passthrough",
			ENABLE_IPSEC_ALG: 			"Активиране IPSec Passthrough",
			NAT_ENABLE_NOTICE: 			"Бележка: Вашите конфигурации няма да влязат в сила, докато NAT функция е разрешена."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Виртуални сървъри",

			SERVICE_NAME: 				"Тип услуга",
			EXTERNAL_PORT: 				"Външен порт",
			INTERNAL_IP: 				"Вътрешно IP",
			INTERNAL_PORT: 				"Вътрешен порт",
			PROTOCAL: 					"Протокол",

			BTN_VIEW: 					"Виж съществуващи услуги",

			EXSITTING_SERVICE: 			"Съществуващи услуги",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX или XX)",
			EXT_PORT_TIPS: 				"(XX или XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX или илиПразно ,1-65535)",

			NOTICE:						"Конфликт с порта за отдалечен контрол. Сигурни ли сте, че искате да продължите?",

			ENABLE_THIS_ENTRY: 			"Разреши",
			OPERATION: 					"Операция",
			CHOOSE: 					"Избор",
			NAT_ENABLE_NOTICE: 			"Бележка: Вашите конфигурации няма да влязат в сила, докато NAT функция е разрешена."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Задействане на порт",
			APPLICATION: 				"Приложение",
			TRIGGER_PORT: 				"Порт за задействане",
			TRIGGER_PROTOCOL: 			"Протокол за задействане",

			EXTERNAL_PORTS: 			"Външен порт",
			EXTERNAL_PROTOCOL: 			"Външен протокол",

			BTN_VIEW: 					"Виж съществуващи приложения",

			EXSITTING_APPLICATION: 		"Съществуващи приложения",
			APPLICATION_NAME: 			"Име на приложението",
			TRIGGER_TIPS: 				"(XX, 1-65535)",
			EXTERNAL_TIPS: 				"(XX или XX-XX, 1-65535, най-много 5 чифта)",
			
			ENABLE_THIS_ENTRY: 			"Разреши",
			OPERATION: 					"Операция",
			
			PROTOCAL_ALL: 				"ALL",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Бележка: Вашите конфигурации няма да влязат в сила, докато NAT функция е разрешена."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"Позволи DMZ",
			HARDWARESTATUS: 			"DMZ Хост IP Адрес",
			NAT_ENABLE_NOTICE: 			"Бележка: Вашите конфигурации няма да влязат в сила, докато NAT функция е разрешена."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"UPnP лист с услуги",
			CLIENT_NUMBER: 				"Клиент номер",
			SERVICE: 					"Описание на услугата",
			EXTERNAL_PORT: 				"Външен порт",
			PROTOCAL: 					"Протокол",
			IP_ADDR: 					"Вътрешен IP Адрес",
			INTERNAL_PORT: 				"Вътрешен порт",
			NAT_ENABLE_NOTICE: 			"Бележка: Вашите конфигурации няма да влязат в сила, докато NAT функция е разрешена."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"3G/4G USB модем",
			LOCATION: 					"Регион",
			MOBILE_ISP: 				"Мобилен ISP",

			USA: 						"САЩ",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Режим на връзка",
			CONNECT_ON_DEMAND: 			"Свържете се по поръчка",
			CONNECT_AUTOMATICALLY: 		"Свържете се автоматично",
			CONNECT_MANUALLY: 			"Свържете се ръчно",
			MAX_IDLE_TIME: 				"Максимално време на незаетост",
			CONNECTION_TIP: 			"Настоящата интернет достъп е предпочитан WAN.",
			IDLE_TIME_TIP: 				"Режимът на свързване и Max Idle Time не могат да се задават ръчно.",
			MINUTES: 					"минути. (0 означава, че свързването винаги е включено.)",

			AUTHENTICATION_TYPE: 		"тип удостоверяване",
			AUTO: 						"Автоматично",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"По подразбирането е Автоматично, да не се промени, освен ако е необходимо.",

			CONNECT: 					"Свързване",
			DISCONNECT: 				"Разкачване",

			SET_TIP: 					"Задайте ръчно Повикващия номер, APN, Потребителското име и Паролата.",
			DIAL_NUMBER: 				"Hаберете номер",
			APN: 						"APN",
			USERNAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			OPTIONAL: 					"(Опционален)",
			MTU_SIZE: 					"MTU Размер(в байтове)",
			MTU_SIZE_TIP: 				"По подразбиране е 1480, да не се променя освен в случай на необходимост",

			USE_FOLLOW_DNS_SERVER: 		"Използвай следния DNS Адрес",
			PRIMARY_DNS: 				"Първичен DNS",
			SECOND_DNS: 				"Вторичен DNS",

			UNPLUGGED: 					"Не е свързан USB модем",
			IDENTIFYING: 				"Идентифициране на ...",
			IDENTIFY_SUCCESS: 			"Успешно разпознат"
		},

		DISK_SETTING: {
			DISK_SET: 					"Настройки на устройството",
			SCAN: 						"Сканирай",
			SELFLY_REMOVE: 				"Сигурно премахване",
			SCAN_RESULT: 				"Намерени %n дискове",
			NOT_FOUND: 					"Не е намерен",
			SELFLY_REMOVE: 				"Сигурно премахване",
			
			VOLUMN: 					"Обем",
			CAPACITY: 					"Капацитет",
			FREESPACE: 					"Свободно пространство",
			USBSPACE: 					"Използвано пространство",
			
			STATUS: 					"Статус",
			INACT: 						"Инактивира",
			ACTIVE: 					"Активен",
			
			USAGE: 						"Употреба",
			CAPACITY: 					"Капацитет",
			OPERATION: 					"Операция",	
			
			ACC: 						"Управление на акаунта", 	 	
			USERNAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			USE_LOGIN: 					"Използвайте Входа за потребител",
			SCAN: 						"Сканирай",
			ENJECT_ALL: 				"Освободи всички",
			ENJECT: 					"Изхвърляне",
			ADD_USER: 					"Добавяне на потребител",
			AUTH: 						"Власт"
		},

		FOLDER: {
			TITLE: 						"Настройки за споделяне",
			ACCOUNT_TITLE: 				"Акаунт за споделяне",
			ACCOUNT:					"Акаунт",
			AC_NOTE: 					"Подготвяне на акаунт за споделеното съдържание. Вие можете да използвате акаунта за влизане или да създадете нов акаунт.",
			
			AC_LOGIN: 					"Използвай акаунта по подразбиране",
			AC_FOLLOW: 					"Използвай нов акаунт",

			USERNAME: 					"Потребителско име",
			PASSWORD: 					"Парола",
			CONFIRM: 					"Потвърдете паролата",

			SHARING_SETTING: 			"Настройки за споделяне",
			SERVER_NAME: 				"Име на Мрежа/Медия сървър",

			METHOD: 					"Метод на достъп",
			LINK: 						"Връзка",
			PORT: 						"Порт",

			NETWORK_NEIGHBORHOOD: 		"Съседство в мрежата",
			FTP: 						"FTP",
			FTPEX: 						"FTP (Via Интернет)",

			SHARE_FOLDER: 				"Споделяне на директория",
			SHAREING_ALL: 				"Сподели всички",
			NOTE:  						"Стартирай споделяне за всички файлове и директории или спри споделянето за всички с изключение на конкретни директории.", 
			ENABLE_AUTHENTICATION: 		"Разреши идентификация",
			SHAREING_FOLDER: 			"Споделени папки",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Път до директория",
			VOLUMN_NAME: 				"Име на обема",

			SHARE_NAME: 				"Име на директория",
			FOLDER_PATH: 				"Път до директория",
			MEDIA_SHARING: 				"Медия споделяне",
			STATUS: 					"Статус",

			GUEST_ACCESS: 				"Позволи достъп на гости до мрежата",
			ENABLE_AUTHENTICATION: 		"Разреши идентификация",
			ENABLE_WRITE_ACCESS: 		"Разреши достъп за писане",
			ENABLE_MEDIA_SHARE: 		"Разреши медиа споделяне",
			
			BROWSE: 					"Търси",
			BROWSE_TITLE: 				"Изберете директория",

			NO_VOLUMN:					"Няма обем",
			
			NOTICE: 					"Сигурни ли сте, че искате да напуснете Dynamic DNS страницата? Изберете Save за запис и напускане. Натиснете Leave за да излезете без запис. Натиснете Cancel за да останете.",
			NO_CHANGE_NOTICE: 			"Сигурни ли сте, че искате да напуснете Dynamic DNS страницата?",

			SAVE_FAILED_NOTICE: 		"Запазването се провали",
			CONTINUE: 					"Напускайте",
			CONTINUE_SAVE: 				"Запази",
			CANCLE: 					"Отказ",

			ENABLE: 					"Разреши"

		},

		PRINT:{
			TITLE: 						"Принт сървър",
			NAME: 						"Име на принтер",
			ENABLE_PRINT_SERVER: 		"Принт сървър",
			NONE: 						"Няма",
			
			NOTE_TITLE: 				"Забележка:",
			STEP1: 						"Стъпка 1:",
			STEP2: 						"Стъпка 2:",
			STEP3: 						"Стъпка 3:",

			NOTE1: 						"Свържете USB принтер към USB порта на маршрутизатора посредством USB кабел.",
			NOTE2: 						"Инсталиране на принт драйвера на вашия компютър. Според инструкциите на производителя на компютъра.",
			NOTE3: 						"Инсталирайте помощната програма TP-Link USB принтер контролерл. Моля изтеглете я от официалния ни сайт: <a class=\"link\" href=\"%SUPPORT%\" target=\"_blank\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Родителски контрол",
			STATUS: 					"Статус",
			UNKNOWN: 					"Неизвестно",

			DEVICE_CTR: 				"Устройство, управлявано от функцията Родителски контрол",
			DEVICE: 					"Име на устройството",
			MAC_ADDRESS: 				"MAC Адрес",
			TIME: 						"Време на интернет достъп",
			DESCRIPTION: 				"Описание",
			
			ENABLE_THIS_ENTRY: 			"Разреши",
			OPTIONAL: 					"(Опционален)",
			BTN_VIEW: 					"Виж съществуващо устройство",
			
			DEVICE_LIST: 				"Списък с устройства",
			SYSTEM_TIME: 				"Системно време",
			
			RESTR: 						"Ограничение на съдържанието",
			MODE: 						"Ограничение",
			BLACKMODE: 					"Списък с ограничени",
			WHITEMODE: 					"Списък с позволени",
			ACCESS_DEVICES_LIST: 		"Списък на устройствата с достъп",
			
			CHOOSE: 					"Избор",
			ADD_A_NEW_KEYWORD: 			"Добави нова дума",
			ADD_A_NEW_DOMAIN_NAME: 		"Добави нова домейн име"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"Интернет",
			ROUTER: 					"Маршрутизатор",
			WINDOWS: 					"Windows",
			ANDROID: 					"Андроид",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Други",

			DEVICE: 					"Устройство",
			RATE: 						"Скорост",
			APPLICATION: 				"Приложение",

			NAME: 						"Име",
			MAC_ADDRESS: 				"MAC Адрес",
			IP_ADDRESS: 				"IP Адрес",


			DEVICES: 					"Устройства"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Широчина на честотната лента",
			TEST_BANDWIDTH: 			"> Широчина на честотната лента за тестване",
			STREAMBOOST: 				"streamboost",
			ENABLE_STREAMBOOST: 		"Разрешйте streamboost",
			UP_LIMITATION: 				"Горно Ограничение (Mbps)",
			DOWN_LIMITATION: 			"Долно Ограничение (Mbps)",
			RUN_BANDWIDTH_TEST: 		"Стартиряйте теста за Широчина на честотната лента ",
			TESTING: 					"Тестване",
			TEST_FAILED: 				"Неуспешен тест",
			TEST_SUCCEED: 				"Успешен тест",
			ENABLE_AUTOMATIC_TEST: 		"Разреши автоматичния тест",
			KEEP_UP_TO_DATE: 			"Дръжте  актуална StreamBoost",
			ENABLE_AUTOMATIC_UPDATE: 	"Разреши автоматичното актуализиране"

		},

		PRIORITY:{
			PRIORITY: 					"Приоритет",
			PRIORITY_TIPS: 				"Приоритетът ви позволява да промените значението на едно устройство върху друго. Това е полезно, когато устройствата се състезават за ограничена широчина на честотната лента с прилагане на същата класификация.",
			ALL_DEVICE: 				"Всички устройства",
			ACTIVE_DEVICE: 				"Активни устройства",
			SAVE: 						"Запази",
			ID: 						"ID",
			DEVICE: 					"Устройство",
			TYPE: 						"Тип",
			MAC_ADDRESS: 				"MAC Адрес",
			STICK: 						"Стик"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"Статистики",
			UP_TIME: 					"Време на работа",
			DOWNLOADS: 					"Изтегляне",
			LAST_DAY: 					"Последния ден",
			LAST_WEEK: 					"Миналата седмица",
			LAST_MONTH: 				"Миналия месец",
			ALL_LAN_HOSTS: 				"Всички LAN Хости",
			OTHER: 						"Друг"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Защитна стена",
			ENABLE_SPI: 				"SPI Защитна стена",

			DOS_PROTECTION: 			"DoS Защита",
			ENABLE_DOS: 				"DoS Защита",
			
			OFF: 						"Изключен",
			LOW: 						"Ниска",
			MIDDLE: 					"Средна",
			HIGH: 						"Висока",

			ICMP: 						"ICMP-FLOOD Филтриране на атаки",
			UDP: 						"UDP-FLOOD Филтриране на атаки",
			TCP: 						"TCP-SYN-FLOOD Филтриране на атаки",
			ENABLE_DOS_TIP:             "DoS защитата и Трафик статистиката не могат да работят по едно и също време.",

			IGNORE: 					"Игнорирай ping пакет от WAN порта",
			FORBID: 					"Забрани ping пакет от LAN порта",

			BLOCK_DOS: 					"Списък с блокирани DoS хостове",
			HOST_NUMBER: 				"Номер на хоста",
			IP_ADDRESS: 				"IP Адрес",
			MAC_ADDRESS: 				"MAC Адрес"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Контрол на достъпа",
			ENABLE_ACCESS: 				"Контрол на достъпа",

			ACCESS_MODE: 				"Режим на достъп",
			DEFAULT_ACCESS_MODE: 		"Режим за достъп по подразбиране",
			BLACK_LIST: 				"Списък с ограничени",
			WHITE_LIST: 				"Списък с позволени",
			
			WIRED:						"Жично",
			WIRELESS:					"Безжично",

			DEVICE_ONLINE: 				"Работещи устройства",
			NAME: 						"Име на устройството",
			IP_ADDRESS: 				"IP Адрес",
			MAC_ADDRESS: 				"MAC Адрес",
			CONN_TYPE: 					"Тип на връзката",

			BLOCK: 						"Блокирай",

			DEVICE_IN_WHITE: 			"Устройства в списъка с позволени",
			DEVICE_IN_BLACK: 			"Устройства в списъка със забранени"
		},

		IP_MAC:{
			TITLE: 						"Настройки",
			ENABLE_ARP: 				"ARP Обвързване",

			ARP_LIST: 					"ARP Лист",
			ARP_NUM: 					"ARP Номер на въвеждане",

			MAC_ADDRESS: 				"MAC Адрес",
			IP_ADDRESS: 				"IP Адрес",
			BOUND: 						"Връзка",
			UNBOUND: 					"Несвързан",

			BINDING_LIST: 				"Лист на обвързаните",
			DESCRIPTION: 				"Описание",
			OPTIONAL: 					"(Опционален)",
			ENABLE_THIS_ENTRY: 			"Разреши"
		},

		TIMESET: {
			TITLE: 						"Времеви настройки",
			ZONE: 						"Времева зона",
			DATE: 						"Дата",
			DATEFORMAT: 				"ММ/ДД/ГГГГ",
			TIME: 						"Време",
			TIMEFORMAT: 				"(ЧЧ/ММ/СС)",
			NTP1: 						"NTP Сървър I",
			NTP2: 						"NTP Сървър II",
			OPTIONAL: 					"(Опционален)",

			CURRENT_TIME:  				"Текущо време",
			SET_TIME: 					"Настрой времето",
			AUTOMATIC: 					"Вземи автоматично от интернет",
			MANUAL: 					"Ръчно",
			AUTOMATIC_BTN: 				"Получаване",


			GETGMT: 					"Вземете GMT",

			
			GETGMT_SUCCESS: 			"Вземете време от NTP Сървъра Успех",
			GETGMT_TIMEOUT: 			"Вземете време от NTP Сървъра Свободно време",
			GETGMT_WAIT: 				"Очакване",
			
			M: 							"М",
			W: 							"С",
			D: 							"Д",
			H: 							"Ч",
			
			DAYLIGHT_SAVING: 			"Дневно пестене",
			ENABLE_DAYLIGHT: 			"Позволи Дневно пестене",
			START: 						"Начало",
			END: 						"Край",

			RUNNING_STATUS: 			"Текущ статус",
			DOWN: 						"Дневното пестене не работи",
			UP: 						"Спестяването на дневната енергия е активно"
		},

		DIAG:{
			TITLE: 						"Диагностика",
			DIAGNOSTIC_TOOL: 			"Инструмент за диагностика",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"IP Адрес/Домейн име",
			COUNT: 						"Ping броене",
			
			BASIC: 						"Основен",
			ADVANCED: 					"Разширени",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Размер на ping пакета",
			PKTUNIT: 					"(4-1472 Бита)",

			TIMEOUT: 					"ping време",
			TIMOUTUNIT: 				"(100-2000 милисекунди)",

			TTL: 						"Traceroute Max TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Начало",
			STOP: 						"Стоп"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Вашият фърмуер е актуализиран",
			TITLE: 						"Обновяване на фърмуера",
			INFO: 						"Информация за устройството",
			REMOTE_TITLE: 				"Онлайн актуализация",
			LOCAL_TITLE: 				"Локална актуализация",

			NEWFILE: 					"Нов файл с фърмуер",
			FIRMWAREVERSION: 			"Версия на фърмуера",
			HARDWAREVERSION: 			"Версия на хардуера",
			LATESTVERSION: 				"Най-новата версия",
			CONFIRM_CONTENT:			"Желаете ли да актуализирате фърмуера?",
			WARNING:					"Фърмуерът се актуализира... <br/> За да избегнете каквато и да било повреда, моля дръжте рутера включен и не работете с него по време на процеса на актуализация на фърмуера.",
			REBOOTING: 					"Рестартиране... <br/> За да избегнете каквато и да било повреда, моля дръжте рутера включен и не работете с него по време на процеса на актуализация на фърмуера.",
			DO_NOT_OPERATE: 			"Фърмуерът се актуализира... <br/> За да избегнете каквато и да било повреда, моля дръжте рутера включен и не работете с него по време на процеса на актуализация на фърмуера.",
			FIRMWARE_UPDATING_NOTE: 	"1. Извършва се актуализация на фърмуера...<br/> За да избегнете каквато и да било повреда, моля, оставете рутера включен и не работете с него по време на процеса на актуализация на фърмуера.",
			REBOOTING_NOTE: 			"2.Рестартиране...<br/> За да избегнете каквато и да било повреда, моля оставете рутера включен и не работете с него по време на процеса на актуализация на фърмуера.",
			SCREEN_UPDATING_NOTE: 		"3.Актуализация на екрана...<br/> За да избегнете каквато и да било повреда, моля оставете рутера включен и не работете с него по време на процеса на актуализация на фърмуера.",
			UPGRADE_FAILED: 			"Ъпгрейдването е неуспешно.",
			UPGRADE: 					"Обновяване",
			CHECK: 						"Проверете",
			DOWNLOADING: 				"Изтегляне...<br/>За да избегнете каквато и да било повреда, моля дръжте рутера включен и не работете с него по време на процеса на актуализация на фърмуера.",
			UPGRADE_INOF: 				"За да избегнете каквато и да било повреда, моля дръжте рутера включен.",
			NOTE: 						"Бележка:",
			NO_UPGRADE: 				"Това е най-новата версия",

			UPGRADING: 					"Актуализация... <br/> За да избегнете каквато и да било повреда, моля дръжте рутера включен и не работете с него по време на процеса на актуализация на фърмуера.",
			RETRY: 						"Повторен опит",
			CANCEL: 					"Отказ",
			ILEGAL_DEVICE:              "Устройството не може да се идентифицира. Моля, свържете се с техническата поддръжка на TP-Link.",
			UPGRADE_FAIL: 				"Актуализацията е неуспешна. Моля, опитайте отново по-късно.",
            CONFIG_RESET_NOTE:          "Текущите настройки ще се загубят след актуализация до тази версия.",
			CHECK_UPGRADE: 				"Проверете за актуализация."
		},

		BACKUP:{
			BACKUP: 					"Архивиране",
			BACKUPTIP: 					"Направи копие на текущите настройки.",

			RESTORE: 					"Възстановяване",
			RESTORETIP: 				"Възстанови системата от файл.",
			
			RESTORE_WARN:				"Възстановяване на маршрутизатора... <br/> Моля, не работите по време на процеса.",
			RESTORE_CONFIRM_CONTENT: 	"Сигурни ли сте, че искате да възстановите маршрутизатора от backup файл?",
			
			FILE: 						"Файл",

			FACTORY: 					"Възстановяване до фабрично състояние",
			FACTORYTIP: 				"Възстанови цялата конфигураця до фабрични стойности.",
			RESETTIP:					"Възстановете всички конфигурациони настройки към стойностите по подразбиране, освен данните за влизане и информацията за вашия облачен акаунт.",
			FACTORY_CONFIRM_CONTENT:	"Сигурни ли сте, че искате да върнете маршрутизатора към фабрични настройки?",
			FACTORY_WARN:				"Възстановяване на маршрутизатора... <br/> Моля, не работите по време на процеса.",
			
			BACKUPBTN: 					"Архивиране",
			RESTOREBTN: 				"Възстановяване",
			RESETBTN:					"Възстановяване",
			FACTORYBTN: 				"Фабрични настройки"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Управление на акаунта",
			
			OLDUSER: 					"Старо потребителско име",
			OLDPWD: 					"Стара парола",

			NEWUSER: 					"Ново потребителско име",
			NEWPWD: 					"Нова парола",
			CONFIRM: 					"Потвърди новата парола",

			RECOVERYINFO: 				"Възстановяване на парола",
			ENABLE_PASSWORD_RECOVERY: 	"Позволи Възстановяването на парола",
			FROM: 						"От",
			TO: 						"До",
			SMTP_SERVER: 				"SMTP Сървър",
			
			ENABLE_AUTHENTICATION: 		"Разреши идентификация",
			USERNAME: 					"Потребителско име",
			PASSWORD: 					"Парола",

			TEST_MAIL: 					"Тест на имейла",

			LOCAL:						"Локално управление",
			LOCAL_MAC_AUTH: 			"Локална автентификация на MAC",
			ACCESS: 					"Достъп за всички LAN свързани устройства",
			ACCESS_TIPS: 				"Избери Включен за всички устройства на LAN, които да се управляват или или Изключен, за да се управлява само определено устройство.",
			
			MAC_ADDRESS: 				"MAC Адрес",
			VIEW_BTN: 					"Виж съществуващо устройство",
			DESCRIPTION: 				"Описание",

			EXIST_DEVICE:               "Съществуващо устройство",

			OPTIONAL: 					"(Опционален)",
			ENABLE_THIS_ENTRY: 			"Разреши",

			DEVICE_NAME:				"Име на устройството",
			IP_ADDRESS:					"IP Адрес",
			

			REMOTE: 					"Отдалечено управление",
			DISABLE_REMOTE_MANAGEMENR: 	"Забрани отдалеченото управление",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Позволи отдалеченото управление за всички устройства",
			ENABLE_REMOTE_MANAGEMENR: 	"Позволи отдалеченото управление за конкретни устройства",
			WEB: 						"Уеб порт за управление",

			NOTICE:						"Конфликт с порта на виртуалния сървър. Сигурни ли сте, че искате да продължите?",

			REMOTEIP: 					"IP адрес за отдалечено управление",
			REMOTEIPNOTE: 				"(Въведете 255.255.255.255 за всички)"
			
		},

		SYSLOG:{
			TITLE: 						"Системен лог",
			LOG_FILTER: 				"Влезте филтър:",
			
			TYPE_EQ: 					"Тип=",
			
			ALL: 						"ALL",

			FIREWALL: 					"Защитна стена", 
			NAT: 						"NAT",
			DDNS: 						"Динамичен DNS",
			UPNP:						"UPnP",
			IMB:            			"IP&MAC Обвързване",
			IPTV:						"IPTV",
			DHCPS:						"DHCP Сървър",
			IGMP_PROXY:					"IGMP Прокси",
			DOMAIN_LOGIN:				"Вход в домейна",
			BASIC_SECURITY: 			"Основна охрана",
			PARENTAL_CONTROL: 			"Родителски контрол",
			ACCESS_CONTROL: 			"Контрол на достъпа",
			DOS_PROTECTION: 			"DoS Защита",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Трафик статистика",
			TIME_SETTINGS: 				"Времеви настройки",
			ACCOUNT_MANAGEMENT: 		"Управление на акаунта",
			LOCAL_MANAGEMENT: 			"Локално управление",
			REMOTE_MANAGEMENT: 			"Отдалечено управление",
			LOCALE: 					"Локален",
			FACTORY_RESET: 				"Фабричното възстановяване",
			LED_CONTROLLER: 			"Led контролер",
			NETWORK: 					"Мрежа",
			USBSHARE: 					"USB споделяне",
			AND: 						"и",
			LEVEL: 						"Ниво",
			EMERGENCY:					"СПЕШНОСТ",
			ALERT:						"СИГНАЛ",
			CRITICAL:					"КРИТИЧЕСКИ",
			ERROR: 						"ГРЕШКА",
			WARNING: 					"ПРЕДУПРЕЖДЕНИЕ",
			NOTICE: 					"СЪОБЩЕНИЕ",
			INFO: 						"ИНФО",
			DEBUG: 						"DEBUG",

			INDEX: 						"Индекс",
			TYPE: 						"Тип",
			TIME: 						"Време",
			LEVEL_COL:					"Ниво",

			CONTENT: 					"Съдържание на лога",
			
			MAIL_LOG: 					"Имейл лог",
			SAVE_LOG: 					"Запази лог",

			SEND_OK: 					"Изпратете ОК",
			SEND_FAILED: 				"Неуспешно изпращане",

			MAIL_SETTING: 				"Имейл Настройки",

 			FROM: 						"От",
 			TO: 						"До",
 			SMTP_SERVER: 				"SMTP Сървър",
 			ENABLE_AUTHENTICATION: 		"Разреши идентификация",

 			USERNAME: 					"Потребителско име",
 			PASSWORD: 					"Парола",
 			CONFIRM_PASSWORD: 			"Потвърдете паролата",

 			AUTO_MAIL: 					"Позволи Автоматичен имейл",
 			LOG_AT: 					"Log на",
 			HH_MM: 						"(HH:MM) ежедневно",

 			LOG_EVERY: 					"Лог на всеки",
 			HOURS: 						"часа"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Настройки",
			STATUS: 					"Разреши QoS",
			UPBANDWIDTH: 				"Лента за качване",
			DOWNBANDWIDTH: 				"Лента за сваляне",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Тест на скоростта",
			RULE_LIST: 					"Списък от правила QoS",
			RULE: 						"QoS правило",
			ID: 						"ID",
			NAME: 						"Име",
			TYPE: 						"Тип",
			DETAIL: 					"Детайл",
			PRIORITY: 					"Приоритет",

			APPLICATION: 				"Приложение",
			APPLICATION_LIST: 			"Списък с приложенията",
			CUSTOM_APP: 				"Обичани приложения",
			MAC_ADDR: 					"MAC Адрес",
			MAC_ADDR_P: 				"MAC",
			IP_ADDR: 					"IP Адрес",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Физически порт",

			LOW: 						"Ниска",
			MIDDLE: 					"Средна",
			HIGH: 						"Висока",

			PROTO: 						"Протокол",
			PORT: 						"Порт",
			PROTO_P: 					"Протокол",
			PORT_P: 					"Порт",
			PORT_TIPS: 					"(XX или XX-XX, 1-65535, най-много 5 чифта)",

			ALL: 						"ALL",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP / UDP",
			CUSTOM: 					"Обичани",

			WIFI_HOME: 					"WiFi-хост",
			WIFI_GUEST: 				"WiFi-гост",
			PORT1: 						"ЛАН1",
			PORT2: 						"ЛАН2",
			PORT3: 						"ЛАН3",
			PORT4: 						"ЛАН4",

			DATABASE_UPGRADE: 			"Обновяване на базата с данни",

			NEWFILE: 					"Нов файл с база данни",
			FIRMWAREVERSION: 			"Версия на базата данни",
			CONFIRM_CONTENT:			"Сигурни ли сте, че искате да обновите базата данни?",
			WARNING:					"Актуализиране на базата данни ... <br/>Моля, не работите по време на процеса.",
			
			UPGRADE: 					"Обновяване",

			SERVICE_RESTART: 			"QoS Сервизно рестартиране",
			
			TYPE: 						"Тип",
			BY_DEVICE: 					"По устройство",
			BY_APP: 					"По приложения",
			BY_PHY: 					"По физически порт",

			HIGH_PRIORITY_LBL: 			"Висок приоритет:",
			MIDDLE_PRIORITY_LBL: 		"Среден приоритет:",
			LOW_PRIORITY_LBL: 			"Нисък приоритет:",

			HIGH_PRIORITY: 				"Висок приоритет",
			MIDDLE_PRIORITY: 			"Среден приоритет",
			LOW_PRIORITY: 				"Нисък приоритет"

		},

		APPLICATION:{
			APP_LIST: 					"Списък с приложенията",
			GAME_LIST: 					"Списък с игри",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Трафик статистика",
			ENABLE_STATISTICS: 			"Трафик статистика",

			TITLE: 						"Списък на трафик статистиката",
			IP_MAC: 					"IP Адрес/MAC адрес",
			TPKT: 						"Общо пакети",
			TBYTE: 						"Общо байтове",
			CPKT: 						"Текущи пакети",
			CBYTE: 						"Текущи байтове",
			CICMP: 						"Текущ ICMP Tx",
			CUDP: 						"Текущ UDP Tx",
			CSYN: 						"Текущ SYN Tx",
			
			DELETE_CONFIRM: 			"Сигурни ли сте, че искате да премахнете трафик статистиката?",
			DELETE_ALL_CONFIRM: 		"Сигурни ли сте, че искате да премахнете цялата трафик статистика?",

			RESET_ALL: 					"Нулирай всички"
		},

		SYSPARA:{
			W24G: 						"Безжична мрежа 2.4GHz",
			W5G: 						"Безжична мрежа 5GHz",
			SWITCH_NOTICE:  			"Вашето безжично функция е изключена. Ако искате да използвате тази функция. Моля превърне оn WiFi бутона.",

			ENABLE_TIPS: 				"Вашата безжична функция е забранена.",

			BEACON: 					"Beacon Интервал",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS праг",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Раздробяване праг",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM интервал",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Период за ъпдейт на груповия ключ",
			GROUPUNIT: 					"секунди",
			
			
			WMM_FEATURE: 				"WMM опции",
			WMM: 						"Разреши WMM",

			GI_FEATURE: 				"Къси GI опции",
			GI: 						"Позволи къс GI",

			AP_FEATURE: 				"AP възможност за изолация",
			AP: 						"Позволи AP изолация",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"Разреши TxBF",

			WDS_FEATURE: 				"WDS Преодоляване",
			WDS: 						"Позволи WDS бридж",
			
			SSID_BRIDEGE: 				"SSID (за да бъде преодоляно)",
			SURVEY: 					"Изследване",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC Адрес",
			SSID: 						"SSID",
			SIGNAL: 					"Сигнал",
			CHANNEL: 					"Канал",
			SECURITY: 					"Сигурност",
			CHOSEN: 					"Избран",
			AP_NUMBER:					"AP номер",

			TOTAL: 						"Общо итемиi",

			MAC: 						"MAC Адрес(за да бъде преодолян)",
			MACUNIT: 					"Пример: 00-1D-0F-22-11-33",

			SECURITY: 					"Сигурност",
			NO: 						"Не",
			NONE: 						"Незащитена",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Парола",
			
			AUTH_TYPE: 					"Идент. Тип",
			AUTO: 						"Автоматично",
			OPEN: 						"Отворена система",
			SHARED: 					"Споделен ключ",

			WEP_INDEX: 					"Ключ 1",
			KEY1: 						"Ключ 1",
			KEY2: 						"Ключ 2",
			KEY3: 						"Ключ 3",
			KEY4: 						"Ключ 4",

			WEP_KEY_FORMAT: 			"Формат на WEP ключа",
			ASC: 						"ASCII",
			HEX: 						"Hexadecimal",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"Позволи WPS",

			NAT: 						"NAT",
			ENABLE_NAT: 				"Позволи NAT",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"Разреши NAT Boost",
			
			MEDIA_SERVER: 				"Медия сървър",
			SCAN_INTERVAL: 				"Auto Scan Interval (часове)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"Ниво на защита от DoS",

			ICMP: 						"ICMP-FLOOD ниво на пакетите",
			UDP: 						"UDP-FLOOD ниво на пакети",
			TCP: 						"TCP-FLOOD ниво на пакети",

			WDS_MODE: 					"WDS Режим",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Ниска",
			MIDDLE: 					"Средна",
			HIGH: 						"Висока",

			TO: 						"Към",
			NOTICE_NAT_REBOOT: 			"Рестартиране ... <br/> Моля, не извършвайте операции по време на рестартиране.",

			NOTICE_NAT_BOOST: 			"Промените на NAT Boost ще влязат в сила след рестартиране на това устройство, сигурни ли сте, че искате да продължите?",
			NOTICE:						"2. Канала на вашия маршрутизатор не е същия с канала на bridged AP's. Желаете ли да го промените?",

			UNIT: 						"(5-7200) Пакети/Сек",
			LED: 						"LED",
			NIGHT_MODE: 				"Нощен режим",
			PERIOD_NIGHT_TIME: 			"Период нощен режим",
			ENABLE: 					"Разреши  нощен режим",
			HH_MM: 						"(HH:MM)",
			NIGHT_MODE_NOTE:            "Вашият светодиод е изключен. Ако искате да използвате тази функция, моля проверете светодиода горе в дясно на страницата.",
			NOTE2:                      "Периодът за нощен режим проявява ефект базиран на системното време на маршрутизатора. Моля уверете се, че сте задали Времето на маршрутизатора."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Без сертификат в момента, моля <b>Създайте</b> такъв преди активиране на VPN Сървър.",
			NO_CERT_NOTE2: 				"Без сертификат в момента, моля <b>Създайте</b> такъв преди експортиране на конфигурацията.",
			ENABLE_VPN_SERVER: 			"Активиране на VPN Сървър",
			SERVICE_TYPE: 				"Тип услуга",
			SERVICE_PORT: 				"Порт за услуга",
			VPN_SUBNET: 				"Подмрежа/VPN Маска на мрежа",
			CLIENTS_ACCESS: 			"Клиентски достъп",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Само домашна мрежа",
			INTERNET_HOME: 				"Интернет и домашна мрежа",
			CERT_STR: 					"Без сертификат в момента, щракнете OK за да генерирате такъв и запаметете вашата конфигурация.",
			CERT_STR2: 					"Без сертификат в момента, щракнете OK за да създадете такъв и експортирайте вашата конфигурация.",
			CONF_FILE: 					"Файл с конфигурация", 
			EXPORT_CONF_FILE: 			"Експортиране на конфигурацията.",
			EXPORT: 					"Експортиране",

			INSTALL_GUIDE: 				"Ръководство за инсталация на клиент VPN",
			INSTALL_STEP: 				"За да активирате и свържете вашите клиентски устройства сървъра ОтворенVPN:",
			INSTALL_NOTICE:				"Преди да конфигурирате сървъра ОтворенVPN, моля конфигурирайте Динамично обслужване DNS (препоръчително) или задайте статичен IP адрес за порт Wan. И се уверете, че системното време е коректно.",
			INSTALL_NOTE1: 				"Изберете Активиране на VPN сървър.",
			INSTALL_NOTE2: 				"Преди да конфигурирате OpenVPN сървъра, моля конфигурирайте услугата Dynamic DNS (Динамичен DNS) (препоръчва се) или задайте статичен IP адрес на WAN порта. И се уверете, че вашият външен порт на NAT настройките не е порта на услугата, и че DMZ е деактивиран, и също, че вашето Системно време е коректно настроено.",
			INSTALL_NOTE3: 				"Щракнете експорт за да запаметите файла с конфигурацията.",
			INSTALL_NOTE4: 				"На вашите клиентски устройства, изтегляте и инсталирате на клиент полезност OpenVPN от <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Официалното поддържаните платформи включват Windows, Mac OSX, Linux.",
			INSTALL_NOTE5: 				"Стартирате помощната програма клиент OpenVPN и добавете нов VPN връзка с използване на запазения конфигурационен файл да свържете устройството на вашия клиент към VPN сървъра.",
			NOTE: 						"За да научите повече относно клиентите ОтворенVPN, посетете <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"IP адрес на клиент",
			ACCOUNT_USERNAME: 			"Потребителско име",
			ACCOUNT_PASSWORD: 			"Парола",
			CLIENT_IP_NOTE: 			"(до 10 клиента)",
			SAME_SUBNET_NOTE: 			"Клиентският IP адрес и LAN IP адресът не могат да бъдат в една и съща подмрежа.",
			CONFLICT_WITH_DHCP: 		"Клиентският IP адрес е в конфликт с множеството DHCP IP адреси.",
			CONFLICT_WITH_RESERVED: 	"Клиентският IP адрес е в конфликт с резервирания IP адрес.",
			CONFLICT_WITH_OPENVPN: 		"Клиентският IP адрес и OpenVPN IP адресът не могат да бъдат в една и съща подмрежа.",
			SAME_SUBNET_NOTE2: 			"Подмрежа/VPN Маска на мрежа и LAN IP адрес не могат да са в същата подмрежа.",
			CONFLICT_WITH_DHCP2: 		"VPN Subnet/Netmask  (подмрежата/маската на мрежата) е в конфликт с множеството DHCP IP адреси.",
			CONFLICT_WITH_RESERVED2: 	"VPN Subnet/Netmask  (подмрежата/маската на мрежата) е в конфликт с резервирания IP адрес.",
			CONFLICT_WITH_PPTPVPN: 		"VPN Subnet/Netmask  (подмрежата/маската на мрежата) и PPTP VPN IP адресът не могат да бъдат в една и съща подмрежа.",
			VPN_MASK_ERROR: 			"Маската на мрежата не може да бъде по-голяма от 255.255.255.248.",
			ACCOUNT_LIST: 				"Списък с акаунти (до 16 потребители)",
			ADVANCED_SETTING: 			"Разширени",
			ALLOW_SAMBA: 				"Еазрешаване на достъп на Samba (Network Place)",
			ALLOW_NETBIOS: 				"Разрешаване на пропускане на NetBIOS",
			ALLOW_UNENCRYPTED_CONN: 	"Разрешаване на некриптирани връзки",
			USERNAME_CONFLICT: 			"Това потребителско име вече съществува.",
			
			CONNECT_PPTP: 				"За да активирате и свържете вашето клиентско устройство към сървъра PPTP VPN:",
			CONNECT_NOTICE:				"Преди да конфигурирате сървъра PPTP VPN, моля конфигурирайте Динамично обслужване DNS (препоръчително) или задайте статичен IP адрес за WAN порт. Уверете се, че вашият външен порт за настройки NAT не е 1723 и DMZ е деактивиран, а също така, че вашето Системно време е коректно.",
			CONNECT_NOTE1: 				"Изберете Активиране на VPN сървър.",
			CONNECT_NOTE2: 				"Конфигурирайте параметрите на сървъра PPTP VPN и щракнете Запази.",
			CONNECT_NOTE3: 				"На вашето клиентско устройство, създайте свързване PPTP VPN. Официалните поддържани платформи включват Windows, Mac OSX, Linux, iOS, и Android.",
			CONNECT_NOTE4: 				"Пуснете програмата PPTP VPN, добавете ново свързване и въведете името на домейна на регистрираното обслужване DDNS или статичния IP адрес, който е зададен към WAN порта, за да свържете вашето клиентско устройство към сървъра PPTP VPN.",
			
			GENERATE_CERT: 				"Сертификат",
			GENERATE_NEW_CERT: 			"Създайте сертификата.",
			GENERATE: 					"Генерирай",
			GENERATE_TIPS: 				"Създаване на сертификат...<br/>Ще отнеме няколко минути, моля изчакайте.",
			CERT_SUCCESS: 				"Успех",
			CERT_FAIL: 					"Неуспех, моля опитайте отново.",
			
			VPN_CONNECTIONS: 			"VPN Връзки",
			OPEN_VPN_CONNECTIONS: 		"Свързване ОтворенVPN",
			PPTP_VPN_CONNECTIONS: 		"Свързване PPTP VPN",
			USER:				"Потребител",
			REMOTE_IP:			"Отдалечен IP",
			ASSIGNED_IP:			"Зададен IP"
		}
	};
})(jQuery);

