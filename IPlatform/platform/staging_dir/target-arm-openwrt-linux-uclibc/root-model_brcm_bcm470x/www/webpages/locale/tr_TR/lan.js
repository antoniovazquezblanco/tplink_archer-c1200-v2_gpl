(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		LOGIN: {
			USERNAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			EMAIL: 						"Email",
			FORGET_PASSWORD: 			"Şifrenizi mi unuttunuz?",
			LOGIN: 						"Oturum Aç",
			BEGIN: 						"Hadi Başlayalım",
			IMPORTANT_UPDATE_INFO: 		"Cihaz açılışında çakışmayı önlemek için, router'ın IP adresi güncellendi.",
			CONTINUE: 					"Devam et",

			IMPORTANT_NOTICE: 			"Önemli Uyarı",
			OR: 						", devam etmek istediğinize emin misiniz",
			END: 						".",
			END2: 						"?",

			FORGET_PASSWORD_INFO_0: 	"Router'ı fabrika ayarlarına geri yüklemek için Reset butonuna %SECONDS% saniye basılı tutun.",
			FORGET_PASSWORD_INFO_1: 	"Şifre Kurtarma fonksiyonu etkinleştirilmiş. Kullanıcı adı ve şifrenizi sıfırlayabilmeniz için tanımlı e-posta adresinize bir doğrulama kodu gönderilecektir.",
			FORGET_PASSWORD_SEND_FAILED:"Kod gönderilemedi! Lütfen Internet bağlantınızı kontrol ediniz.",

			VERIFICATION_CODE: 			"Doğrulama kodu",

			RECEIVE_CODE: 				"Kod Gönder",

			CONFIRM: 					"Doğrula",
			WELCOME: 					"TP-Link %model% Hoşgeldiniz. Lütfen Oturum Açın.",
			SEC: 						"s",

			USER_CONFLICT: 				"Oturum Açma Çakışması!",
			FIRST_TIME: 				"Internete bağlanmak için, %PRODUCT% cihazınızı kurunuz. %PRODUCT% cihazını yönetebilmek için öncelikle parola oluşturunuz.",
			FIRST_TIME1: 				"%model% model numaralı cihazı yönetmek için yönetici şifresi oluşturunuz.",
			USER_CONFLICT_INFO: 		"Router'da şu anda %HOST% (%IP%/%MAC%) host ile %USER% kullanıcısı oturum açmış. Aynı anda oturum açamazsınız. Lütfen daha sonra tekrar deneyiniz.",
			USER_CONFLICT_INFO_2: 		"Router'da şu anda %USER% (%IP%) kullanıcısı oturum açmış. Aynı anda oturum açamazsınız. Lütfen daha sonra tekrar deneyiniz.",
			USER_CONFLICT_INFO_3: "Aynı anda sadece tek bir cihazda oturum açılabilir. Devam etmek ve diğer cihazlardaki oturumları kapatmak istiyor musunuz?",
			
			LOGIN_FAILED: 				"Oturum Açma Başarısız!",
			LOGIN_FAILED_COUNT: 		"Oturum açma %num1 kez başarız ve %num2 kez yin başarız oldu.",
			NO_COOKIE: 					"Oturum açmak için çerezler etkinleştirilmelidir. Lütfen çerezleri etkinleştirin veya Özel/Gizli tarayıcını modunu kapatın.", 

			FORGET_PASSWORD_NOTE: 		"Şifre Kurtarma fonksiyonu henüz yapılandırılmamış. Router'ınızı fabrika ayarlarına geri yüklemek için %SECONDS% saniye kadar Reset butonuna basılı tutunuz."
		},
		INIT: {
			PASSWORD: 					"Parola",
			CONFIRM_PASSWORD:				"Şifreyi Doğrula",
			BEGIN: 						"Hadi Başlayalım",
			IMPORTANT_UPDATE_INFO: 		"Ön uç aygıtı ile uyuşmazlığı önlemek için, router'ın IP adresi güncellendi:",
			CONTINUE: 					"İleri",

			IMPORTANT_NOTICE: 			"Önemli Uyarı",
			OR: 						", devam etmek istediğinize emin misiniz",
			END: 						".",
			END2: 						"?",

			CONFIRM: 					"Doğrula",

			SEC: 						"s",

			USER_CONFLICT: 				"Oturum Açma Çakışması!",
			
			USER_CONFLICT_INFO: 		"%USER% kullanıcısı,%HOST% (%IP%/%MAC%) üzerinden şu anda Router'a giriş yapmıştır. Aynı anda giriş yapamazsınız. Lütfen daha sonra tekrar deneyiniz.",
			USER_CONFLICT_INFO_2: 		"%USER% (%IP%) kullanıcısı şu anda Router'da oturum açmıştır. Aynı anda giriş yapamazsınız. Lütfen daha sonra tekrar deneyiniz",
			
			LOGIN_FAILED: 				"Oturum Açma Hatası!",
			LOGIN_FAILED_COUNT: 		"Oturum açma %num1 kez başarız ve %num2 kez yin başarız oldu.",
			NO_COOKIE: 					"Oturum açmak için çerezler etkinleştirilmelidir. Lütfen çerezleri etkinleştirin veya Özel/Gizli tarayıcını modunu kapatın.", 

			INIT_NOTE_TITLE: 			"Değerli Müşterimiz,",
			INIT_NOTE_CONTENT: 			"Internete bağlanmak için, %PRODUCT% cihazınızı kurunuz. %PRODUCT% cihazını yönetebilmek için öncelikle parola oluşturunuz."

		},

		UPGRADE: {
			FIRMWARE_VERSION: 				"Yazılım Sürümü:",
			FEATURE: 						"Değişiklikler ve Hata Düzeltmeleri:",
			TITLE: 							"Daha güncel firmware paketi algılanmıştır.",
			UPGRADE_NOW: 					"Şimdi güncelle",
			REMIND: 						"Sonra hatırlat",
			NOTICE:    						"Merhaba, router'ınız için yeni bir firmware mevcuttur.",
			NEVER: 							"Bu sürümü yoksay"
			
		},

		WAN_ERROR: {
			TITLE: 							"WAN bağlantı hatası!",
			STATUS: 						"Durum",
			INFO: 							"Bilgilendirme",
			SETUP: 							"Internet bağlantısı kur",
			NEVER: 							"Tekrar hatırlatma"
		},

		OFFLINE_ERROR:{
			TITLE: "Oops...Bulut sunucusuna erişilemiyor!",
			NOTE1: "1. Internet erişiminizin olduğundan emin olun.",
			NOTE2: "2. Bulut sunucusuna geçici olarak erişilemiyor. Lütfen daha sonra tekrar deneyin.",
			NOTE3: "3. Eğer hala probleminiz devam ediyorsa, lütfen <a target=\"_blank\" id=\"support\">TP-Link teknik destek</a> birimimiz ile iletişime geçiniz.",
			ERROR: "Hata"
		},

		INDEX: {
			FIRMWARE_VERSION: 				"Yazılım Sürümü:",
			HARDWARE_VERSION: 				"Donanım Sürümü:",
			HELP_SUPPORT: 					"Destek",
			FAQ: 							"SSS",
			CONFIRM_REBOOT: 				"Router'ı yeniden başlatmak istediğinize emin misiniz?",
			CONFIRM_LOGOUT: 				"Oturumu kapatmak istediğinize emin misiniz?",
			UPGRADE_ALERT_1: 				"Şu anki yazılım TP-Link cloud servislerini desteklemiyor. www.tp-link.com adresinden en yeni yazılımı indirmenizi ve güncellemenizi öneririz.",
			UPGRADE_ALERT_2: 				"Şu anki yazılım TP-Link cloud servislerini desteklemiyor. Sağ üst köşedeki Güncelle ikonuna tıklayarak yazılımı güncelleştirmenizi öneririz.",
			ACCOUNT_UNLOGIN: 				"Hesap",

			REBOOTING: 						"Yeniden başlatılıyor…<br/> Lütfen yeniden başlatma işlemi bitene kadar bağlantıları kesmeyiniz.",

			HELP_APP: 					"Uygulama",
			CHARACTERS_ILLUSTRETE_TITLE: 			"TP-Link Tether uygulamasını indirmek için QR kodu taratınız",
			CHARACTERS_ILLUSTRETE_NOTE0: 			"Herhangi mobil cihazınızdan ağınızı rahatlıkla yönetebilirsiniz.",
			CHARACTERS_ILLUSTRETE_NOTE1: 			"Kontroller tamamen ellerinizde."
		},

		NAV: {
			QUICK_SETUP: 				"Hızlı Kurulum",
			BASIC: 						"Temel",
			ADVANCED: 					"Gelişmiş"
		},

		CONTROL: {
			LOGIN: 						"Oturum Aç",
			LOGOUT: 					"Oturumu Kapat",
			UPDATE: 					"Güncelle",
			REBOOT: 					"Yeniden Başlat",
			LED: 						"LED",
			LED_ON: 					"LED Açık",
			LED_OFF: 					"LED Kapalı",
			LED_DISABLED: 				"Gece modu aktifken LED durumu değiştirilemez."
		},

		LANGUAGE: {
			EN_US: 						"İngilizce",
			ZH_CN: 						"Çince"
		},

		REGION: {
			ALBANIA: 					"Arnavutluk",
			ALGERIA: 					"Cezayir",
			AMERICAN_SAMOA: 			"Amerikan Samoası",
			ARGENTINA: 					"Arjantin",
			ARMENIA: 					"Ermenistan",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Avustralya",
			AUSTRIA: 					"Avusturya",
			AZERBAIJAN: 				"Azerbeycan",
			BAHAMAS: 					"Bahamalar",
			BAHRAIN: 					"Bahreyn",
			BANGLADESH: 				"Bangladeş",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Beyaz Rusya",
			BELGIUM: 					"Belçika",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Berumuda",
			BOLIVIA: 					"Bolivya",
			BOSNIA_HERZEGOWINA: 		"Bosna Hersek",
			BRAZIL: 					"Brezilya",
			BRUNEI_DARUSSALAM: 			"Brunei Darussalam",
			BULGARIA: 					"Bulgaristan",
			CAMBODIA: 					"Kamboçya",
			CANADA: 					"Kanada",
			CAYMAN_ISLANDS: 			"Kayman Adaları",
			CHILE: 						"Şili",
			CHINA: 						"Çin Halk Cumhuriyeti",
			COLOMBIA: 					"Kolombiya",
			COSTA_RICA: 				"Kostarika",
			CROATIA: 					"Hırvatistan",
			CYPRUS: 					"Kıbrıs",
			CZECH_REPUBLIC: 			"Çek Cumhuriyeti",
			DENMARK: 					"Danimarka",
			DOMINICAN_REPUBLIC: 		"Dominik Cumhuriyeti",
			ECUADOR: 					"Ekvador",
			EGYPT: 						"Mısır",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estonya",
			ETHIOPIA: 					"Etiyopya",
			FAEROE_ISLANDS: 			"Faroe Adaları",
			FINLAND: 					"Finlandiya",
			FRANCE: 					"Fransa",
			FRENCH_GUIANA: 				"Fransız Guyanası",
			FRENCH_POLYNESIA: 			"Fransız Polonezyası",
			GEORGIA: 					"Gürcistan",
			GERMANY: 					"Almanya",
			GREECE: 					"Yunanistan",
			GREENLAND: 					"Grönland",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadelup",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong S.A.R., P.R.C.",
			HUNGARY: 					"Macaristan",
			ICELAND: 					"İzlanda",
			INDIA: 						"Hindistan",
			INDONESIA: 					"Endonezya",
			IRAN: 						"İran",
			IRAQ: 						"Irak",
			IRELAND: 					"İrlanda",
			ISRAEL: 					"İsrail",
			ITALY: 						"İtalya",
			JAMAICA: 					"Jamaika",

			JAPAN: 						"Japonya",
			JAPAN_1: 					"Japonya 1",
			JAPAN_2: 					"Japonya 2",
			JAPAN_3: 					"Japonya 3",
			JAPAN_4: 					"Japonya 4",
			JAPAN_5: 					"Japonya 5",
			JAPAN_6: 					"Japonya 6",

			JORDAN: 					"Ürdün",
			KAZAKHSTAN: 				"Kazakistan",
			KENYA: 						"Kenya",

			NORTH_KOREA: 				"Kuzey Kore",
			KOREA_REPUBLIC: 			"Kore Halk Cumhuriyeti",
			KOREA_REPUBLIC_3: 			"Kore Halk Cumhuriyeti 3",

			KUWAIT: 					"Kuveyt",
			LATVIA: 					"Letonya",
			LEBANON: 					"Lübnan",
			LIBYA: 						"Libya",
			LIECHTENSTEIN: 				"Lihtenştayn",
			LITHUANIA: 					"Litvanya",
			LUXEMBOURG: 				"Lüksemburg",
			MACAU: 						"Makao SAR",
			MACEDONIA: 					"Eski Yugoslav Makedonya Cumhuriyeti",
			MALAWI: 					"Malavi",
			MALAYSIA: 					"Malezya",
			MALDIVES: 					"Maldivler",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinik",
			MAURITIUS: 					"Morityus",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Meksika",
			MONACO: 					"Monako Prensliği",
			MONGOLIA: 					"Moğolistan",
			MOROCCO: 					"Fas",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Hollanda",
			NETHERLANDS_ANTILLES: 		"Hollanda Antilleri",

			NEW_ZEALAND: 				"Yeni Zelanda",
			NICARAGUA: 					"Nikaragua",
			NIGERIA: 					"Nijerya",
			NORWAY: 					"Norveç",
			NORTHERN_MARIANA_ISLANDS: 	"Kuzey Mariana Adaları",
			OMAN: 						"Umman",
			PAKISTAN: 					"Pakistan İslam Cumhuriyeti",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua Yeni Gine",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Peru",
			PHILIPPINES: 				"Filipinler Cumhuriyeti",
			POLAND: 					"Polonya",
			PORTUGAL: 					"Portekiz",
			PUERTO_RICO: 				"Portoriko",
			QATAR: 						"Katar",
			REUNION: 					"Reunion",
			ROMANIA: 					"Romanya",
			RUSSIA: 					"Rusya",
			RWANDA: 					"Ruanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Suudi Arabistan",
			SINGAPORE: 					"Singapur",
			SLOVAK_REPUBLIC: 			"Slovak Cumhuriyeti",
			SLOVENIA: 					"Slovenya",
			SOUTH_AFRICA: 				"Güney Afrika",
			SPAIN: 						"İspanya",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Surinam",
			SWEDEN: 					"İsveç",
			SWITZERLAND: 				"İsviçre",
			SYRIA: 						"Suriye",
			TAIWAN: 					"Tayvan",
			TANZANIA: 					"Tanzanya",
			THAILAND: 					"Tayland",
			TRINIDAD_TOBAGO: 			"Trinidad ve Tobago",
			TUNISIA: 					"Tunus",
			TURKEY: 					"Türkiye",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ukrayna",
			UNITED_ARAB_EMIRATES: 		"Birleşik Arap Emirlikleri",
			UNITED_KINGDOM: 			"İngiltere",
			UNITED_STATES: 				"Amerika Birleşik Devletleri",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Özbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Vietnam",
			VIRGIN_ISLANDS: 			"Virjin Adaları (ABD)",
			YEMEN: 						"Yemen",
			ZIMBABWE: 					"Zimbabve"
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
			M_INDONESIA:                                                  "Endonezya",
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
			M_LUXEMBOURG:                                                 "Lüksemburg",
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
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midway Adası,Samoa",
			HAWAII: 					"(GMT-10:00) Hawaii",
			ALASKA: 					"(GMT-09:00) Alaska",
			PACIFIC_TIME: 				"(GMT-08:00) Pasifik Saati",
			MOUNTAIN_TIME: 				"(GMT-07:00) Sıradağlar Saati (ABD Kanada)",
			CENTRAL_TIME: 				"(GMT-06:00) Merkezi Saat (ABD Kanada)",
			EASTERN_TIME: 				"(GMT-05:00) Doğu Saati (ABD Kanada)",
			CARACAS:					"(GMT-04:30) Karakas",
			ATLANTIC_TIME: 				"(GMT-04:00) Atlantik Zamanı (Kanada)",
			NEWFOUNDLAND: 				"(GMT-03:30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brasilia, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Orta Atlantik Saati",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azorlar, Cape Verde Adaları",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwich Ana Saati, Dublin, Londra",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlin, Stockholm, Roma, Bern, Brüksel",
			ATHENS_HELSINKI: 			"(GMT+02:00) Atina, Helsinki, Doğu Avrupa, İsrail",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Bağdat, Kuveyt, Nairobi, Riyad, Moskova",

			TEHERAN: 					"(GMT+03:30) Tahran",

			ABU_DHABI: 					"(GMT+04:00) Abu Dabi, Muskat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kabil",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) İslamabad, Karaçi, Ekaterinburg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Kalküta, Bombay, Yeni Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Pekin, Hong Kong, Perth, Singapur",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokyo, Osaka, Sapporo, Seul, Yakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sidney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Solomon Adaları, Yeni Kaledonya",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamçatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Uygulama",
			GAME:						"OYUN",
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
			xl_others:  				"xl_diğerleri",
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
			FTP:						"FTP  ",
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
			DAY: 						"Gün",

			MONDAY: 					"Pazartesi",
			TUESDAY: 					"Salı",
			WEDNESDAY: 					"Çarşamba",
			THURSDAY: 					"Perşembe",
			FRIDAY: 					"Cuma",
			SATURDAY: 					"Cumartesi",
			SUNDAY: 					"Pazar",
			
			MON: 						"Pzt.",
			TUES: 						"Sal.",
			WED: 						"Çrş.",
			THUR: 						"Prş.",
			FRI: 						"Cum.",
			SAT: 						"Cmt.",
			SUN: 						"Paz.",

			JAN: 						"Oca.",
			FEB: 						"Şub.",
			MAR: 						"Mar.",
			APR: 						"Nis.",
			MAY: 						"May.",
			JUN: 						"Haz.",
			JUL: 						"Tem.",
			AUG: 						"Ağu.",
			SEP: 						"Eyl.",
			OCT: 						"Eki.",
			NOV: 						"Kas.",
			DEC: 						"Ara."

		},

		HOUR: {
			AM_1: 						"1ö.ö.",
			AM_2: 						"2ö.ö.",
			AM_3: 						"3ö.ö.",
			AM_4: 						"4ö.ö.",
			AM_5: 						"5ö.ö.",
			AM_6: 						"6ö.ö.",
			AM_7: 						"7ö.ö.",
			AM_8: 						"8ö.ö.",
			AM_9: 						"9ö.ö.",
			AM_10: 						"10ö.ö.",
			AM_11: 						"11ö.ö.",
			AM_12: 						"12ö.ö.",
			PM_1: 						"1ö.s.",
			PM_2: 						"2ö.s.",
			PM_3: 						"3ö.s.",
			PM_4: 						"4ö.s.",
			PM_5: 						"5ö.s.",
			PM_6: 						"6ö.s.",
			PM_7: 						"7ö.s.",
			PM_8: 						"8ö.s.",
			PM_9: 						"9ö.s.",
			PM_10: 						"10ö.s.",
			PM_11: 						"11ö.s.",
			PM_12: 						"12ö.s."
		},

		ORDER: {
			"1ST": 						"İlk",
			"2ND": 						"2",
			"3RD": 						"3",
			"4TH": 						"4",
			"5TH": 						"Son",
			"1ST_": 					"1",

			TH: 						"."
		},

		GRID: {
			CLIENT_NUMBER: 				"İstemci Sayısı",

			ID: 						"ID",
			MODIFY: 					"Değişiklik",
			STATUS: 					"Durum",
			ENABLE: 					"Etkin",

			OPERATION: 					"İşlem",
			CHOOSE: 					"Seçin",
			DESCRIPTION: 				"Tanım",
			

			AUTO_REFRESH: 				"Otomatik Yenile",
			REFRESH: 					"Yenile",
			NUMBER: 					"Numara",
			ENABLED: 					"Etkin",
			DISABLED: 					"Devre Dışı",
			ACTIVE: 					"Aktif",
			SELECTED: 					""
		},

		OPERATION: {
			ADD: 						"Ekle",
			CHOOSE: 					"Seçin",
			EDIT: 						"Düzenle",
			DELETE: 					"Sil",
			DELETE_ALL: 				"Hepsini Sil",
			REMOVE: 					"Kaldır",
			RESET: 						"Sıfırla",
			RESET_ALL: 					"Hepsini Sıfırla",
			DETECT: 					"Algıla",
			ENABLE: 					"Etkin",
			DISABLE: 					"Devre Dışı Bırak",
			CLEAR: 						"Boş",

			REFRESH: 					"Yenile",
			SEARCH: 					"Araştır…",
			BROWSE: 					"Gözat",

			SAVE: 						"Kaydet",
			BACK: 						"Geri",

			PREV: 						"Önceki",
			NEXT: 						"İleri",
			FINISH: 					"Bitir",
			
			ON: 						"Açık",
			OFF: 						"Kapalı",
			LOW: 						"Düşük",
			MIDDLE: 					"Orta",
			HIGH: 						"Yüksek",
			
			OK: 						"TAMAM",
			CANCEL: 					"İptal",

			YES: 						"Evet",
			NO: 						"Hayır",
			
			CONNECTED: 					"Bağlandı",
			CONNECTING: 				"Bağlanıyor",
			DISCONNECTING: 				"Bağlantı Kesiliyor",
			DISCONNECTED: 				"Bağlantı Yok",

			PASSWORD_HINT: 				"Parola",
			FILEBUTTONTEXT: 			"Gözat",
			FILEBLANKTEXT: 				"Lütfen bir dosya seçin.",
			NOSELECTEDTEXT: 			"Seçenekleri belirleyin.",

			ADD_A_NEW_KEYWORD: 			"Yeni Bir Anahtar Kelime Ekle",

			SUCCESSED: 					"Başarılı!",
			FORM_SAVED: 				"Kaydedildi",
			FORM_FAILED: 				"Başarısız",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Kaydedildi",
			GRID_FAILED: 				"Başarısız",
			GRID_NONE_SELECT: 			"En az bir kayıt seçin.",
			GRID_DELETE_COMFIRM: 		"Kaydı silmek istediğinize emin misiniz?",
			GRID_DELETE_ALL_COMFIRM: 	"Tüm kaydı silmek istediğinize emin misiniz?",
			GRID_MAX_RULES: 			"Maksimum kayıt limiti aşıldı.",
			KEYWORD_MAX_OVERFLOW: 		"Anahtar kelime sayısı limiti aşıldı.",

			NOTE: 						"Uyarı:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Geçersiz format.",
			BLANKTEXT: 					"Bu alan zorunludur.",

			EMAIL: 						"Geçersiz e-mail formatı.",
			NUMBER: 					"Geçersiz format.",

			NUMBER_MIN: 				"Geçersiz değer, lütfen %min değerinden daha büyük bir sayı giriniz.",
			NUMBER_MAX: 				"Geçersiz değer, lütfen %max değerinden daha küçük bir sayı giriniz.",

			NUMBER_MIN_MAX: 			"Geçersiz değer, lütfen %min ve %max değeri aralığında bir sayı giriniz.",
			HEX: 						"Bu alana heksadesimal bir sayı girilmelidir.",

			IP: 						"Geçersiz format.",

			IP_NO_ALL_ZERO:				"Adres 0.0.0.0 olmamalıdır.",
			IP_NO_LOOP:					"Adres loopback adresi olmamalıdır.",
			IP_NO_D_TYPE:				"Adres D sınıfı bir IP olmamalıdır.",
			IP_NO_E_TYPE:				"Adres E sınıfı bir IP olmamalıdır.",
			IP_NO_ALL_ONE:				"Adres 255.255.255.255 olmamalıdır.",
			IP_NO_FIRST_ALL_ONE:		"Adres 255 ile başlamamalıdır.",
			IP_NO_FIRST_ZERO:			"Adres 0 ile başlamamalıdır.",
			MASK_NO_ALL_ONE:			"255.255.255.255 maskesi kullanılamaz.",

			IPV6: 						"Geçersiz format.",
			IPV6_NOT_GLOBAL:			"Geçersiz format.",
			IPV6_NOT_PREFIX:			"Geçersiz format.",
			IP_DOMAIN: 					"Geçersiz format.",
			IPV6_DOMAIN: 				"Geçersiz format.",
			MAC: 						"Geçersiz format.",
			MULTI_MAC:					"Geçersiz format.",
			DATE: 						"Geçersiz format.",
			DATE_INVALID: 				"Lütfen 01/01/1970 ve 12/31/2030 aralığında bir tarih giriniz.",
			MASK: 						"Geçersiz format.",
			DOMAIN: 					"Geçersiz format.",
			STRING_DOMAIN:              "Geçersiz format.",
			USER: 						"Geçersiz format.",
			NOTE: 						"Geçersiz format.",
			PWD: 						"Geçersiz format.",
			SSID: 						"Geçersiz format.",
			NAME:						"Geçersiz format.",
			ASCII_VISIBLE:				"Geçersiz format.",
			STRING_VISIBLE:				"Geçersiz format.",
			STRING_VISIBLE_NO_COMMA:    "Geçersiz format.",
			STRING_VISIBLE_ALLOW_BLANK: "Geçersiz format.",
			NAME_SPECIAL: 				"4-15 arasında alfa karakterler, sayılar, - ve _ giriniz.",
			VPN_NAME_PWD: 				"1-15 arasında alfa karakterler, sayılar, - ve _ giriniz."	
			
		},


		ERROR: {			
			"00000001":					"Geçersiz dosya tipi.",
			"00000002":					"Checksum Hatası.",
			"00000003":					"Dosya çok büyük.",
			"00000004":					"Yükleme Hatası.",
			"00000005":					"Yeniden Başlatma Hatası.",
			"00000006":					"Bilinmeyen hata.",
			"00000007":					"Öğe zaten mevcut. Lütfen farklı bir tane giriniz.",

			"00000009":					"Lütfen varsayılan 21 değerini kullanın veya 1024 ve 65535 arasında bir değer girin.",
			"00000010":					"Port bir sayı olmalıdır.",

			"00000011":					"Kullanıcı adı, Başlangıç değeri ile aynı olmalıdır.",
			"00000012": 				"Kullanıcı adı alfabetik bir karakter ile başlamalıdır.",

			"00000021":					"Geçersiz format.",

			"00000032": 				"Değer, Düşük değerinden daha az olmalıdır.",
			"00000033": 				"Değer, Düşük ve Orta değerinden daha az olmalıdır.",
			"00000034": 				"Geçersiz format, lütfen 5 ve 7200 arasında bir sayı giriniz.",

			"00000039": 				"Lütfen varsayılan 0 değerini kullanın veya 30 ve 86400 arasında bir değer girin.",
			"00000040": 				"SSID ve MAC adresi gereklidir.",

			"00000042": 				"Lütfen varsayılan 80 değerini kullanın veya 1024 ve 65535 arasında bir değer girin.",

			"00000045": 				"Varsayılan Ağ Geçidi ve LAN IP adresi aynı alt ağda olmalıdır. Lütfen yeniden girin.",

			"00000047": 				"IP adresi ve LAN IP adresi aynı alt ağda olmalıdır. Lütfen yeniden girin.",

			
			"00000049":					"Ağ Hedefi geçersizdir.",

			"00000050": 				"Geçersiz DNS Sunucu IP adresi. Lütfen farklı bir IP adresi girin.",
			"00000051": 				"Bu MAC adresi zaten kullanılıyor. Lütfen farklı bir tane girin.",
			"00000052": 				"Bu IP adresi zaten kullanılıyor. Lütfen farklı bir tane girin.",

			"00000053": 				"Başlangıç adresi bitiş adresinden daha büyük olmamalıdır. <br/>Lütfen yeniden girin. ",

			"00000054": 				"IP adresi havuzu ve LAN IP adresi aynı alt ağda olmalıdır. Lütfen yeniden deneyin.",

			"00000055": 				"IP, LAN adresi ile aynı olamaz.",

			"00000056": 				"Uzak IP adresi ve geçerli LAN IP adresi aynı ağda olmamalıdır. Lütfen başka bir tane girin.",

			"00000057": 				"PSK Şifresi geçersiz, lütfen yeniden girin.",
			"00000058": 				"WEP Şifresi geçersiz, lütfen yeniden deneyin.",

			"00000059": 				"Alt Ağ Maskesi ve LAN IP adresi geçersiz, lütfen başka bir tane girin.",

			"00000060": 				"WAN IP adresi ve LAN IP adresi aynı alt ağda olmamalıdır. <br/>Lütfen başka bir tane girin.",

			"00000061": 				"Başlangıç zamanı bitiş zamanından daha erken olmalıdır.",

			"00000062": 				"Bu alan zorunludur.",
			"00000063": 				"Bu alan zorunludur.",

			"00000064": 				"Host MAC adresi bloklanamaz.",
			"00000065": 				"Bu girdi mevcut kayıt ile çakışıyor. Lütfen kontrol edin.",
			
			"00000066": 				"Şifre 8 ila 63 karakter veya 64 heksadesimal sayılardan oluşmalıdır.",
			"00000067": 				"Şifre 10 heksadesimal sayılardan oluşmalıdır.",
			"00000068": 				"Şifre 5 ASCII karakterler içermelidir.",
			"00000069": 				"Şifre 26 heksadesimal sayılardan oluşmalıdır.",
			"00000070": 				"Şifre 13 ASCII karakterler içermelidir.",
			"00000071": 				"Şifre 32 heksadesimal sayılardan oluşmalıdır.",
			"00000072": 				"Şifre 16 ASCII karakterler içermelidir.",
			"00000073": 				"Şifre 64 karakterden daha küçük olmalıdır.",

			"00000074": 				"Geçersiz dosya tipi.",

			"00000075": 				"PIN uzunluğu 8 olmalı.",

			"00000076": 				"Bu girdi mevcut kayıt ile çakışıyor. Lütfen trigger portu ve trigger protokolü kontrol edin.",
			"00000077": 				"IP adresi LAN IP adresi ile aynı olamaz.",
			"00000078": 				"Host IP adresi LAN IP adresi ile aynı olamaz.",

			"00000080": 				"Şifre eşleşmiyor. Lütfen yeniden deneyin.",

			"00000088": 				"Çalışma modu uzaktan yönetim için uygun değildir.",
			"00000089": 				"%num oturum açma girişimi sayısı aşıldı. Lütfen 2 saat sonra tekrar deneyin.",

			"00000090": 				"Hedef LAN IP adresi olamaz.",
			"00000091": 				"Hedef WAN IP adresi olamaz.",

			"00000092": 				"IP adresi ve LAN IP adresi aynı alt ağda olmamalıdır. <br/>Lütfen yeniden deneyin.",
			"00000093": 				"IP adresi ve WAN IP adresi aynı alt ağda olmamalıdır. <br/>Lütfen yeniden deneyin.",

			"00000094": 				"VLAN IDleri aynı olamaz.",
			"00000095": 				"En az bir Internet portu gereklidir.",

			"00000096": 				"Anahtar kelime zaten kullanımda.",

			"00000097": 				"2.4GHz frekans bandı için Wi-Fi butonu ON (ETKİN) konumuna getirilene kadar yapılan yapılandırmalar etkili olmayacaktır.",
			"00000098": 				"5GHz frekans bandı için Wi-Fi butonu ON (ETKİN) konumuna getirilene kadar yapılan yapılandırmalar etkili olmayacaktır.",
			"00000099": 				"2.4GHz ve 5GHz frekans bandı için Wi-Fi butonu ON (ETKİN) konumuna getirilene kadar yapılan yapılandırmalar etkili olmayacaktır.",

			"00000100": 				"Bölgeniz ve ülkenizdeki kısıtlamalar nedeniyle 5GHz ağ ayarları değiştirilememektedir.",

			"00000101": 				"Kablosuz fonksiyon kapalı. Fonksiyonu kullanmak istiyorsanız lütfen Wi-Fi butonunu on (etkin) konumuna getiriniz.",
			"00000102": 				"Kablosuz fonksiyon kapalı. Fonksiyonu kullanmak istiyorsanız lütfen Wi-Fi butonunu on (etkin) konumuna getiriniz.",

			"00000103": 				"Kablosuz fonksiyon kapalı. Fonksiyonu kullanmak istiyorsanız lütfen Wi-Fi butonunu on (etkin) konumuna getiriniz.",
			"00000104": 				"Kablosuz fonksiyon devre dışıdır.",

			"00000105": 				"QoS ve IPTV aynı anda etkinleştirilemez.",

			"00000106": 				"IP adresi LAN IP adresi ile aynı olamaz.",
			
			"00000107": 				"Hedef zaten var.",

			"00000110": 				"IP adresi ve LAN IP adresi aynı alt ağda olmalıdır.",
			
			"00000111": 				"QoS ve <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> aynı anda etkinleştirilemez.",
			"00000112": 				"WDS fonksiyonu hem 2.4GHz hem de 5GHz bandında kullanılabilir. Misafir Ağda WDS fonksiyonu kullanılamaz.",
			"00000113": 				"WDS ve Misafir Ağ aynı anda etkinleştirilemez.",
			"00000114": 				"Trafik İstatistikleri ve <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> aynı anda etkinleştirilemez.",
			"00000115": 				"IPTV ve <a onclick=\"$.su.menu.advanced.goTo('system-parameters');\" src=\"void(0)\">NAT Boost</a> aynı anda etkinleştirilemez.",

			"00000117": 				"Alan adı zaten mevcut.",
			"00000118": 				"Alan adı sayısının limiti aşıldı.",
			"00000119":				"<a onclick=\"$.su.menu.advanced.goTo('qos_settings');\" src=\"void(0)\">QoS</a> veya <a onclick=\"$.su.menu.advanced.goTo('sysstatistics');\" src=\"void(0)\">Traffic Statistics</a> etkinleştirildiğinde NAT Boost devre dışı bırakılacaktır.",

			"00000120": 				"Şifre 5 veya 13 ASCII karakterlerden oluşmalıdır.",
			"00000121": 				"Şifre 10 veya 26 heksadesimal sayılardan oluşmalıdır.",
			"00000122": 				"Kullanıcı adı ve şifre boş. Devam etmek istediğinize emin misiniz?",
			"00000123": 				"Kaydediliyor… <br/>Lütfen işlem bitene kadar bekleyiniz.",
			"00000124": 				"Hatalı girilen PIN kilidi nedeniyle router kitlenmiştir. Lütfen yeni bir tane oluşturun.",

			"00000125": 				"QoS kural sayısının limiti aşıldı.",
			"00000126": 				"Dosya boyutunun limiti aşıldı.",
			"00000127": 				"Dosyanın içeriği hatalı.",
			"00000128": 				"Lütfen en az bir uygulama seçiniz.",
			"00000129": 				"Lütfen en az bir fiziksel port seçiniz.",
			"00000130":					"WPS fonksiyonu devre dışı bırakılmış.",
			"00000131": 				"NTP Sunucu loopback adresi olmamalı.",
			"00000132": 				"Mod anahtarlama başarısız. Lütfen sonra tekrar deneyin veya router'ınızı yeniden başlatın.",
			"00000133": 				"DMZ Host IP Adresi geçersiz. Lütfen geçerli bir adres girin.",
			"00000134":  				"Dahili IP adresi geçersiz. Lütfen geçerli adres girin.",
			"00000135": 				"Yazılım dosya hatası.",
			"00000136": 				"Yedek dosyası yanlış.",
			"00000137": 				"Kullanıcı adı boş. Devam etmek istediğinize emin misiniz?",
			"00000138": 				"Şifre boş. Devam etmek istediğinize emin misiniz?",
			"00000139": 				"Şifre kurtarma parametreleri geçersiz.",
			"00000140": 				"Geçersiz kod.",
			"00000141": 				"Şifre kurtarma devre dışı bırakılmış.",
			"00000142": 				"Kod gönderimi başarısız oldu. Lütfen Internet bağlantınızı kontrol ediniz.",
			"00000143": 				"Geçersiz eposta adresi.",
			"00000144": 				"Geçersiz eposta mesajı.",
			"00000145": 				"Host bulunamadı.",
			"00000146": 				"Kimlik doğrulama başarısız oldu.",
			"00000147": 				"Port değeri 1 ve 65535 arasında olmalıdır.",
			"00000148": 				"Port aralığı değerinde; başlangıç port numarası, bitiş port numarasından daha küçük olmalıdır. Tekrar deneyiniz.",
			"00000149": 				"Port numarası çakışıyor. Tekrar deneyiniz.",
			"00000150": 				"Alt Ağ Maskesi ve WAN IP adresi geçersiz, lütfen başka bir tane girin.",
			"00000151": 				"Lütfen, en az bir gün seçiniz.",
			"00000152": 				"Lütfen, Internet erişim zamanını ayarlayınız.",
			"00000213":					"DNS sunucu IP adresi ve LAN IP adresi aynı alt ağda olamaz. <br/>Lütfen başka bir tane giriniz.",
			"10000139": 				"Internet bağlantısı yok",
			"10000140": 				"İstek zaman aşımı. Internet bağlantınızı kontrol ediniz ve daha sonra tekrar deneyiniz.",
			"10000158": 				"WAN portu bağlı değil.",
			"10000159": 				"Internet bağlantısı kurulamıyor. Servis sağlayıcınız ile iletişime geçiniz veya daha sonra tekrar deneyiniz.",
			"10000160": 				"DHCP Sunucudan IP adresi alınamıyor. WAN bağlantı tipinizi kontrol ediniz ve daha sonra tekrar deneyiniz.",
			"10000161": 				"PPPoE kimlik doğrulama başarısız oldu. Kullanıcı adı ve şifrenizi kontrol ediniz.",
			"10000162": 				"PPPoE sunucusu ile bağlantı kurulamıyor.",

			"10000164": 				"PPTP kimlik doğrulama başarısız oldu. Kullanıcı adı ve şifrenizi kontrol ediniz.",
			"10000165": 				"PPTP sunucusu ile bağlantı kurulamıyor.",

			"10000167": 				"L2TP kimlik doğrulama başarısız oldu. Kullanıcı adı ve şifrenizi kontrol ediniz.",
			"10000168": 				"L2TP sunucusu ile bağlantı kurulamıyor.",
			"10000169": 				"Bilinmeyen hata. Daha sonra tekrar deneyin.",
			"10000172": 				"Bağlantı başarısız.",

			"10000185": 				"Sistem hatası.",	
			"10000186": 				"Yazılım dosya hatası.",	
			"10000187": 				"Yazılım indirme hatası.",	
			"10000188": 				"Yazılım güncelleme hatası.",	
			"10000191": 				"Yazılım dosyası indirilemiyor.",
			"10000192": 				"Yazılım güncelleme hatası.",
			"10000193": 				"Sunucu ile bağlantı kurulamıyor.",	
			"10000194": 				"Cloud sunucu ile bağlantı kurulamıyor. Daha sonra tekrar deneyiniz.",
			"10000195": 				"Tekrar şifre tanımlayamazsınız çünkü daha önce tanımladığınız bir şifre bulunmaktadır.",
			
			"E3002":                    "İstek zaman aşımına uğradı", 
			"E10000": 					"Genel hata",
			"E20002": 					"İstek zaman aşımına uğradı",
			"E20003": 					"Bulut sunucusu meşgul. Lütfen daha sonra tekrar deneyiniz.",
			"E20107": 					"Geçersiz giriş",
			"E20200": 					"Geçersiz e-mail formatı.",
			"E20502": 					"Cihaz eşleştirilemiyor. Lütfen sonra tekrar deneyiniz.",
			"E20503": 					"Cihaz eşleştirmesi tamamlanamıyor. Lütfen daha sonra tekrar deneyin.",
			"E20506": 					"İşlem başarısız. Cihaz zaten başka bir bulut hesabına bağlıdır.",
			"E20507": 					"Bu cihazın hesaptan bağlantısı kesildi.",
			"E20508": 					"Bağlı hesapların sayısı maksimum limite ulaştı.",
			"E20509": 					"Kullanıcı hesabı, yeni kullanıcıların bağlantı yetkisine sahip değil.",
			"E20571": 					"Cihaz devre dışı.",
			"E20580": 					"İşlem başarısız. Bu hesap cihaza bağlı değil.",
			"E20600": 					"Bu e-mail kayıtlı değil.",
			"E20601": 					"Kullanıcı Adı ve parola eşleşmiyor.",
			"E20602": 					"Bu hesap henüz etkinleştirilmedi.",
			"E20603": 					"Bu e-mail zaten kayıtlı.",
			"E20604": 					"Geçersiz kullanıcı. E-mail veya telefon numarası giriniz.",
			"E20606": 					"Hesap etkinleştirme e-postası gönderilemiyor.",
			"E20615": 					"Geçersiz şifre. Boşluk kullanmadan, 6-32 ASCII karakterler içeren bir şifre giriniz.",
			"E20616": 					"Geçersiz şifre. Boşluk kullanmadan, 6-32 ASCII karakterler içeren bir şifre giriniz.",
			"E20617": 					"Bu hesap geçerli değil.",
			"E20618": 					"Bu hesap geçerli değil.",
			"E20620": 					"Geçersiz kullanıcı adı. 1 ila 64 arasında karakter giriniz.",
			"E20661": 					"Çok fazla (yarım saat içinde 20 kez) oturum açma girişimi başarısız olduğundan 2 saat boyunca bu hesap kitlenmiştir.",
			"E20662": 					"Cihaz kilitlendi. Önümüzdeki 24 saatte, cihaz herhangi bir doğrulama kodu taleplerine cevap vermeyecektir.",
			"E20671": 					"Hesap doğrulanamadı.",
			"E20672": 					"Hesap doğrulanamıyor. Hesabın etkinleştirme linkinin süresi dolmuş. Yeni bir istek göndermek için onaylayın.",
			"E20673": 					"Şifre sıfırlama linki zaman aşımına uğradı. Yeni bir istek göndermek için onaylayın.",
			"E20674": 					"Şifre sıfırlanamıyor.",
			"E20675": 					"Bu hesap ile şu anda başka bir yerde oturum açık.",
			"E22000": 					"Geçersiz giriş",
			"E22001": 					"Domain adı zaten kayıtlı.",
			"E22002": 					"Kayıtlı olan domain adları sayısı maksimum limite ulaştı.",
			"E22003": 					"Kayıtlı olan bağlı domain adları sayısı maksimum sayıya ulaştı.",
			"E22004": 					"Bu domain adı zaten başka bir cihaza bağlıdır.",
			"E22006": 					"Sistem hatası. Lütfen daha sonra tekrar deneyiniz.",
			"E22007": 					"Domain adı duyarlı kelime içeriyor. Başka bir tane deneyiniz.",
			"E22008": 					"Domain adı yok.",

			"E50101": 					"WAN portu bağlı değil.",
			"E50102": 					"Internet bağlantısı yok. Servis sağlayıcınızla görüşün veya daha sonra tekrar deneyin.",
			"E50103": 					"DHCP Sunucudan IP adresi alınamıyor. WAN bağlantı tipinizi kontrol ediniz ve daha sonra tekrar deneyiniz.",
			"E50111": 					"PPPoE kimlik doğrulama başarısız oldu. Kullanıcı adı ve şifrenizi kontrol ediniz.",
			"E50112": 					"PPPoE sunucusu ile bağlantı kurulamıyor.",
			"E50121": 					"PPTP kimlik doğrulama başarısız oldu. Kullanıcı adı ve şifrenizi kontrol ediniz.",
			"E50122": 					"PPTP sunucusu ile bağlantı kurulamıyor.",
			"E50131": 					"L2TP kimlik doğrulama başarısız oldu. Kullanıcı adı ve şifrenizi kontrol ediniz.",
			"E50132": 					"L2TP sunucusu ile bağlantı kurulamıyor.",
			"E50140": 					"Bilinmeyen hata. Daha sonra tekrar deneyin.",
			"E51215": 					"İstek zaman aşımı. Internet bağlantınızı kontrol ediniz ve daha sonra tekrar deneyiniz.",
			"E_CLOUD_SERVER": 			"Sunucu hatası. Daha sonra tekrar deneyiniz.",
			"E5000": 					"Cloud sunucuya bağlanılamıyor.",
			"E5001": 					"TP-Link ID (email) geçersiz. Veya cihazınız çevrimdışı, sadece admin (%email) çevrimdışı erişebilir.",
			"E5002": 					"Şifre geçersiz."
		},

		MENU: {
			STATUS: 					"Durum",
			NETWORK: 					"Ağ",
			NETWORK_MAP: 				"Ağ Haritası",
			INTERNET: 					"İnternet",

			LAN: 						"LAN",
			IPTV:                       "IPTV",
			DHCP_SERVER: 				"DHCP Sunucu",
			DYNAMIC_DNS: 				"Dinamik DNS",
			ADVANCED_ROUTING: 			"Gelişmiş Yönlendirme",

			WIRELESS: 					"Kablosuz",
			WIRELESS_SETTINGS: 			"Kablosuz Ayarlar",
			WDSBRIDGING: 				"WDS Köprüleme",
			WPS: 						"WPS",
			MACFILTERING: 				"MAC Filtreleme",
			WIRE_STATISTICS: 			"İstatistikler",
			
			
			GUEST_NETWORK: 				"Misafir Ağ",
			WIRELESS_SETTINGS: 			"Kablosuz Ayarlar",
			STORAGE_SHARING: 			"Depolama Paylaşımı",
			NAT_FORWARDING: 			"NAT Yönlendirme",
			NAT: 						"ALG",
			VIRTUAL_SERVERS: 			"Sanal Sunucu",
			PORT_TRIGGERING: 			"Port Tetikleme",
			DMZ: 						"DMZ",
			UPNP: 						"UPnP",
			ALG: 						"ALG",
			
			USB_SETTINGS: 				"USB Ayarları",
			BASIC_SET: 					"Temel Ayarlar",
			DISK_SET: 					"Cihaz Ayarları",
			FOLDER_SHARING: 			"Paylaşım Erişimi",
			STORAGE_SHARING: 			"Depolama Paylaşımı",
			FTP_SERVER: 				"FTP Sunucu",
			MEDIA_SERVER: 				"Medya Sunucu",
			PRINT_SERVER: 				"Yazdırma Sunucusu",
			G3_G4: 						"3G/4G",
			
			
			PARENTAL_CONTROL: 			"Ebeveyn Kontrolü",
			
			QOS:  						"QoS",
			DATABASE:  					"Veritabanı",

			STREAMBOOST: 				"Stream Boost",
			MAP: 						"Harita",
			SB_MAP: 					"Harita",
			SB_BANDWIDTH:  				"Bant Genişliği",
			SB_PRIORITY: 				"Öncelik",
			SB_STATISTICS: 				"İstatistikler",

			
			SECURITY: 					"Güvenlik",
			SETTINGS: 					"Ayarlar",
			ACCESS_CONTROL: 			"Erişim Kontrolü",
			IP_MAC_BINDING: 			"IP&MAC Binding",

			IPV6: 						"IPv6",
			
			
			SYSTEM_TOOLS: 				"Sistem Araçları",
			TIME_SETTINGS: 				"Zaman Ayarları",
			DIAGNOSTIC: 				"Tanılama",
			FIRMWARE_UPGRADE: 			"Firmware Güncelleme",
			BACKUP_RESTORE: 			"Yedekle & Geri Yükle",
			ADMINISTRATION: 			"Yönetim",
			SYSTEM_LOG: 				"Sistem Günlüğü",
			STATISTICS: 				"Trafik İstatistikleri",
			SYSTEM_PARAMETERS: 			"Sistem Parametreleri",
			ACCOUNT: 					"TP-Link Bulut",
			
			VPN: 						"VPN Sunucu",
			OPEN_VPN: 					"OpenVPN",
			PPTP_VPN: 					"PPTP VPN",
			VPN_CONNECTIONS: 			"VPN Bağlantıları"
		},

		QUICK_SETUP: {
			REGION_TIME_ZONE: 			"Bölge ve Saat Dilimi",
			INTERNET_CONNECTION_TYPE: 	"Internet Bağlantı Tipi",
			WIRELESS_SETTINGS: 			"Kablosuz Ayarlar",
			SUMMARY: 					"Özet",
			SETUP_COMPLETE: 			"Internet Bağlantısını Test Et",
			SETUP_COMPLETE_CLOUD: 			"TP-Link Cloud Servisi",

			EXIT: 						"Çıkış",
			NEXT: 						"İleri",
			SAVE: 						"Kaydet",
			FINISH: 					"Bitir",
			OK: 						"TAMAM",
			NONE: 						"Algılama başarısız oldu",

			REGION: 					"Bölge",
			TIME_ZONE: 					"Saat Dilimi",

			AUTO_DETECT: 				"Otomatik Algıla",
			DYNAMIC_IP: 				"Dinamik IP",
			STATIC_IP: 					"Statik IP",
			PPPOE: 						"PPPoE  ",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			INTERNET_CONNECTION_TYPE_NOTE: "Sahip olduğunuz Internet Bağlantı Tipinden emin değilseniz, Otomatik Algıla fonksiyonunu kullanın veya yardım için Internet Servis Sağlayıcı (ISS)nız ile iletişime geçiniz.",

			DYNAMIC_IP_INFO: 			"ISS'nız sadece belirli bir MAC adresi ile Internet erişimine izin veriyorsa, diğer cihazlarınıza da bağlantıyı paylaştırmak için MAC Adresini Klonlamanız gerekmektedir. Emin değilseniz, MAC Adresini KLONLAMA seçeneğini seçiniz.",
			MAC_CLONE_NO: 				"MAC Adresini KLONLAMA",
			MAC_CLONE_YES: 				"Şu Anki Bilgisayarın MAC Adresini Klonla",
			MAC_CLONE_NOTE: 			"MAC Adresini Klonla seçiyorsanız İleri butonuna tıklamadan önce bilgisayarınızın MAC Adresinin ISS'nızda kayıtlı olup olmadığından emin olunuz.",

			PPPOE_INFO: 				"Lütfen PPPoE kullanıcı adı ve şifrenizi giriniz.",
			
			STATIC_IP_INFO: 			"Lütfen IP bilgilerinizi giriniz.",

			L2TP_INFO: 					"Lütfen L2TP kullanıcı adı ve şifrenizi giriniz.",
			PPTP_INFO: 					"Lütfen PPTP kullanıcı adı ve şifrenizi giriniz.",
			
			USERNAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			SERVER_IP_ADDRESS_NAME: 	"VPN Sunucu IP/Alan Adı",
			IP_ADDRESS: 				"IP Adresi",
			SUBNET_MASK: 				"Alt Ağ Maskesi",
			DEFAULT_GATEWAY: 			"Varsayılan Ağ Geçidi",
			PRIMARY_DNS: 				"Birincil DNS",
			SECOND_DNS: 				"İkincil DNS",
			OPTIONAL: 					"(İsteğe Bağlı)",
			
			ON: 						"Açık",
			OFF: 						"Kapalı",
			WIRELESS_24GHZ: 			"Kablosuz 2.4GHz",
			WIRELESS_5GHZ: 				"Kablosuz 5GHz",
			ENABLE_WIRELESS_RADIO: 		"Kablosuz Radyoyu Etkinleştir",
			NAME_SSID: 					"Kablosuz Ağ Adı (SSID)",

			SUMMARY_INFO1: 				"<strong>İleri</strong> butonuna tıklamadan önce kablosuz cihazlarınızı yeni kablosuz ağına bağlamanız gerekiyor.",
			SUMMARY_INFO2: 				"Düzenlenmiş kablosuz adınız ve şifreniz aşağıdaki gibidir:",
			SUMMARY_INFO3: 				"Yeni kablosuz ağına bağlandığınızdan emin olunuz.",

			WIRELESS_24GHZ_SSID: 		"Kablosuz 2.4GHz Adı (SSID)",
			WIRELESS_24GHZ_PASSWORD: 	"Kablosuz 2.4GHz Şifresi",
			WIRELESS_5GHZ_SSID: 		"Kablosuz 5GHz Adı (SSID)",
			WIRELESS_5GHZ_PASSWORD: 	"Kablosuz 5GHz Şifresi",

			SORRY: 						"Başarısız.",
			SUCCESS: 					"Başarılı!",
			TEST_INTERNET_SUCCESS_INFO: "Hızlı Kurulum işlemini sonlandırmak için Bitire tıklayınız.",

			TEST_INTERNET_FAILED_INFO_0:"Hızlı Kurulum parametrelerinin tamamını doğrulayın ve yeniden deneyin. Tüm parametreler doğru ise lütfen WiFi Router'a bağlı Modem Router'ı yeniden başlatın. Modem Router açıldıktan sonra 2 dakika bekleyin ve bir kez daha Internet Bağlantısını Test Et butonuna tıklayın. Eğer bağlantı için bir Modem Router kullanmıyorsanız yardım için Internet Servis Sağlayıcı (ISS)nız ile iletişime geçiniz.",
			TEST_INTERNET_FAILED_INFO_1: "Oops... Internet bağlantı kurulumu başarısız.<br />1. Tüm kabloların düzgün bağlandığından emin olunuz.<br />2. Geri tıkla ve internet bağlantı bilgilerini doğrulayınız.<br />3. Problem devam ediyorsa Teknik Destek birimi ile iletişime geçiniz.",
			SUMMARY_INFO4: 				"Üzgünüz! Kablosuz cihazınızı yeni kablosuz ağa bağlamadığınızı algıladık. Lütfen bağlantıyı kurun ve <strong>TAMAM</strong> butonuna tıklayın.",
                                         
			CONGRATULARIONS: 			"Tebrikler!",
			COMPLETE_INFO_0: 			"Hızlı Kurulum işlemini tamamladınız.",
			COMPLETE_INFO_1:			"AşağıdaN Internet Bağlantısını Test Et butonuna tıklayınız, ardından Bitir butonuna tıklayınız.",
			COMPLETE_INFO_2: 			"TP-Link Bulut hesabınızda oturum açmadınız. Daha sonra Temel > TP-Link Bulut sekmesinden giriş yapabilirsiniz",
			TEST_INTERNET: 				"Internet Bağlantısını Test Et",

			
			RESET_USER_TITLE: 			"Yeni bir kullanıcı adı ve şifre gir",
			NEW_USERNAME: 				"Yeni kullanıcı Adı",
			NEW_PASSWORD: 				"Yeni Şifre",
			CONFIRM_PASSWORD: 			"Yeni Şifreyi Onayla",
			
			NO_ACCOUNT: 				"TP-Link ID'niz yok mu?",
			REGISTER_NOW: 				"Şimdi Kaydol",
			REGISTER_SKIP: 				"Sonra Oturum Aç",
			LOGIN: 						"Oturum Aç",
			REGISTER_NEW:				"Yeni bir hesap oluştur",
			COMPLETE_INFO_EMAIL_PREFIX: "TP-Link ID'niz:",
			COMPLETE_INFO_EMAIL_SUFFIX: "Daha fazla TP-Link Bulut fonksiyonları ve cihazlarınızı daha kolay yönetebilmeniz için bu hesabı kullanmanızı öneririz. ",

			INTERNET_OK: 				"Tebrikler! Ağ kurulumu başarılı. Internetin keyfini çıkarın.",
			CLOUD_WIZARD: 				"TP-Link Cloud fonksiyonu hakkında daha fazlası için, <a class=\"link\" href=\"#\">TP-Link ID</a>'niz ile oturum açınız.",
			ACCOUNT_DESP:               "TP-Link ID'nizle şunları yapabilirsiniz:", 
			ACCOUNT_DESP_SUB1:          "Internet aracılığıyla istediğiniz yerden cihazınıza erişebilir ve yerel sunucularınıza (FTP, HTTP, vs.) giriş yapabilirsiniz.",
			ACCOUNT_DESP_SUB2:          "Çevrimiçi Güncelleme fonksiyonu ile yazılımınızı daima güncel tutun.",
	        ACCOUNT_DESP_SUB3:          "Tek bir hesap ile birden fazla cihazı yönetin.",
			
			CONFIRM: 					"Doğrula"
		},
		
		BASIC_NETWORK:{
			INTERNET: 					"İnternet",
			INTERNET_STATUS:			"Internet Durumu",

			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",
			
			CONNECTION_TYPE: 			"Bağlantı Tipi",
			SECONDARY_CONN: 			"İkincil Bağlantı",

			POOR_CONNECTED: 			"Zayıf Bağlantı",
			UNPLUGGED: 					"WAN portunda bağlantı yok.",
			
			CONNECTED: 					"Bağlandı",
			DISCONNECTED: 				"Bağlantı Kesildi",

			INTERNET_IP_ADDR: 			"IP Adresi",
			
			IP_ADDR: 					"IP Adresi",
			MAC_ADDR: 					"MAC Adresi",
			GATEWAY: 					"Ağ Geçidi",

			AUTO: 						"Otomatik",
			
			ROUTER: 					"Router",
			WIRELESS_CLIENTS: 			"Kablosuz İstemciler",
			HOST_CLIENTS: 				"Host İstemciler",
			GUEST_CLIENTS: 				"Misafir İstemciler",
			WIRE_CLIENTS: 				"Kablolu İstemciler",
			PRINTER: 					"Yazıcı",
			USB_DISK: 					"USB Disk",
			WIRELESS: 					"Kablosuz",
			NAME: 						"Ad",
			
			

			SSID: 						"SSID",
			CHANNEL: 					"Kanal",
			MAC: 						"MAC",
			
			WIRELESS_24GHZ: 			"Kablosuz 2.4GHz",
			WIRELESS_5GHZ: 				"Kablosuz 5GHz",
			
			GUEST_24GHZ: 				"Misafir Ağ 2.4GHz",
			GUEST_5GHZ: 				"Misafir Ağ 5GHz",
			
			STATUS: 					"Durum",
			TOTAL: 						"Toplam",
			AVAILABLE: 					"Kullanılabilir",
			GB: 						"GB",
			BRAND: 						"Marka",

			DYNAMIC_IP: 				"Dinamik IP",
			STATIC_IP: 					"Statik IP",
			SUBNET_MASK: 				"Alt Ağ Maskesi",
			PPPOE: 						"PPPoE  ",
			BIGPOND_CABLE: 				"BigPond Kablo",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 Tünel",
			NONE: 						"Hiçbiri"
		},
		
		BASIC_INTERNET: {
			TITLE: 						"İnternet",
			AUTO_DETECT: 				"Otomatik Algıla",
			INTERNET_CONN_TYPE: 		"Internet Bağlantı Tipi",
			DYNAMIC_IP: 				"Dinamik IP",
			STATIC_IP: 					"Statik IP",
			PPPOE: 						"PPPoE  ",
			BIGPOND: 					"BigPond Kablo",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			DHCP: 						"DHCP",
			UNPLUGGED: 					"WAN portunda bağlantı yok.",
			NONE: 						"Hiçbiri",
			DETECT_FAIL: 				"Otomatik algılama başarısız",
			SECONDARY_CONN: 			"İkincil Bağlantı",

			DYNAMIC_YES: 				"MAC Adresini KLONLAMA",
			DYNAMIC_NO: 				"Şu Anki Bilgisayarın MAC Adresini Klonla",
			
			IP_ADDR: 					"IP Adresi",
			SUBNET_MASK: 				"Alt Ağ Maskesi",
			DEFAULT_GATEWAY: 			"Varsayılan Ağ Geçidi",
			PRIMARY_DNS: 				"Birincil DNS",
			SECOND_DNS: 				"İkincil DNS",
			OPTIONAL: 					"(İsteğe Bağlı)",
			USER_NAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			SERVER_IP_ADDR_NAME: 		"VPN Sunucu IP/Alan Adı",
			
			DNS_ADDR_MODE: 				"",

			NOTE: 						"Sahip olduğunuz Internet Bağlantı Tipinden emin değilseniz, Otomatik Algıla fonksiyonunu kullanın veya yardım için Internet Servis Sağlayıcı (ISS)nız ile iletişime geçiniz."
		},
		
		BASIC_WIRELESS:{
			TITLE: 						"Kablosuz Ayarlar",
			MODE_2G: 					"Kablosuz 2.4GHz",
			MODE_5G: 					"Kablosuz 5GHz",
			WIRELESS_NETWORK_NAME: 		"Kablosuz Ağ Adı (SSID)",
			WIRELESS_PASSWORD: 			"Parola",
			ENABLE_WIRELESS: 			"Kablosuz Radyoyu Etkinleştir",
			SAVE: 						"Kaydet",
			ENCRYPTION_2G_NOTICE:		"2.4GHz şifreleme türü %s.",
			ENCRYPTION_5G_NOTICE:		"5GHz şifreleme türü %s.",
			ENCRYPTION_2G_NO: 			"2.4GHz kablosuz ağı şifrelenmemiş.",
			ENCRYPTION_5G_NO: 			"5GHz kablosuz ağı şifrelenmemiş.",
			ENCRYPTION_SURE: 			"Devam etmek istediğinize emin misiniz?",

			HIDE_SSID: 					"SSID Gizle"
		},
		
		
		
		BASIC_USB: {
			TITLE: 						"Temel Ayarlar",
			TITIL_NEW:					"Disk&Hesap",
			DISK_SET:					"Cihaz Ayarları",

			SELFLY_REMOVE:				"Güvenle Kaldır",
			SCANING:					"Taranıyor…",
			SCAN_RESULT:				"%n diski bulundu.",
			
			DISKS:						"Diskler",
			USERS: 						"Kullanıcı Hesapları",
			DEVICENAME: 				"Cihaz Adı",
			VOLUMN: 					"Birim",

			USBSPACE: 					"Kullanılan Alan",
			FREESPACE: 					"Boş Alan",
			STATUS: 					"Durum",
			INACT: 						"Pasif",
			USAGE: 						"Kullanım",
			CAPACITY: 					"Kapasite",
			OPERATION: 					"İşlem",
			
			ACC: 						"Hesap Yönetimi",
			USERNAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			USE_LOGIN: 					"Varsayılan Hesabı Kullan",
			SCAN: 						"Tara",
			ENJECT_ALL: 				"Tümünü Çıkart",
			ENJECT: 					"Çıkart",
			ADD_USER: 					"Kullanıcı Ekle",
			AUTH: 						"Yetkili",


			LOCATION: 					"Konum",
			MOBILE_ISP: 				"Mobil ISS",
			DIAL_NUMBER: 				"Arama Numarası",
			APN: 						"APN",
			USERNAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			MTU_SIZE: 					"MTU Boyutu (bayt olarak)",
			OPTIONAL: 					"(İsteğe Bağlı)"
		},
		
		BASIC_PARENTAL_CTR:{
			TITLE: 						"Ebeveyn Kontrolü",

			DEVICE_CTR: 				"Ebeveyn Kontrolündeki Cihazlar",
			ID: 						"ID",
			DEVICE: 					"Cihaz Adı",
			MAC_ADDRESS: 				"MAC Adresi",
			TIME: 						"Internet Erişim Zamanı",
			DESCRIPTION: 				"Tanım",
			ENABLE: 					"Etkin",
			ENABLE_THIS_ENTRY: 			"Etkin",
			OPTIONAL: 					"(İsteğe Bağlı)",
			BTN_VIEW: 					"Şu Anki Cihazları Görüntüle",
			ACCESS_DEVICES_LIST: 		"Cihaz Listesi",
			OPT: 						"İşlem",
			STATUS: 					"Durum"
		},
		
		BASIC_GUEST:{
			TITLE: 						"Misafir Ağ",
			MODE_2G: 					"Kablosuz 2.4GHz",
			MODE_5G: 					"Kablosuz 5GHz",
			WIRELESS_NETWORK_NAME: 		"Kablosuz Ağ Adı (SSID)",
			WIRELESS_PASSWORD: 			"Parola",
			ENABLE_WIRELESS: 			"Misafir Ağı Etkinleştir",
			SAVE:						"Kaydet",
			HIDE_SSID: 					"SSID Gizle"
		},
		 BASIC_ACCOUNT:{
			TITLE: 						"Cloud Hesabı",
			OFFLINE_NOTE_TITLE: 		"Cihaz Çevrimdışı",
			LOGIN_NOTE_TITLE: 			"Oops...",
			LOGIN_OFFLINE_NOTE: 		"Cihaz çevrimdışı. Tüm ayarları uygun bir şekilde yapılandırdığınızdan emin olmak için WAN bağlantısını ve ağ yapılandırmalarını kontrol ediniz.",

			EMAIL: 						"Email",
			PASSWORD: 					"Parola",
			FORGET_PASSWORD: 			"Şifrenizi mi unuttunuz?",

			CLOUD_WIZARD: 				"TP-Link Cloud fonksiyonu hakkında daha fazlası için, <a class=\"link\" href=\"#\">TP-Link ID</a>'niz ile oturum açınız.",
			NO_ACCOUNT: 				"TP-Link ID'niz yok mu?",
			REGISTER_NOW: 				"Şimdi Kaydol"
		},
		STATUS: {
			TITLE: 						"Durum",
			INTERNET:					"İnternet",
			WIRELESS:					"Kablosuz",
			LAN:						"LAN",
			USB_TITLE:					"USB Cihazları",
			PERFORMANCE: 				"Performans",
			GUEST_NETWORK: 				"Misafir Ağ",
			ACCESS_DEVICES: 			"Erişebilir Cihazlar",
			
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			HZ24G: 						"2.4GHz",
			HZ5G: 						"5GHz",

			CONNECTION_TYPE: 			"Bağlantı Tipi",

			MAC_ADDRESS: 				"MAC Adresi",
			IP_ADDRESS: 				"IP Adresi",
			RELEASE: 					"Bırak",
			RENEW: 						"Yenile",
			
			DYNAMIC_IP: 				"Dinamik IP",
			STATIC_IP: 					"Statik IP",
			SUBNET_MASK: 				"Alt Ağ Maskesi",
			PPPOE: 						"PPPoE  ",
			BIGPOND_CABLE: 				"BigPond Kablo",
			L2TP: 						"L2TP",
			PPTP: 						"PPTP",
			TUNNEL_6TO4: 				"6to4 Tünel",
			RD6:  						"6RD",
			DSLITE: 					"DS-Lite",
			PASSTHROUGH: 				"Pass-Through (Bridge)",
			RDNSS: 						"RDNSS",
			SLAAC: 						"SLAAC",
			NONE: 						"Hiçbiri",
			
			DEFAULT_GATEWAY: 			"Varsayılan Ağ Geçidi",
			DNS: 						"DNS Sunucu",
			MAC: 						"MAC Adresi",
			WDS_STATUS: 				"WDS Durumu",
			
			IPV6_ADDRESS: 				"IP Adresi",
			PRIMARY_DNS: 				"Birincil DNS",
			SECOND_DNS: 				"İkincil DNS",

			RADIO: 						"Kablosuz Radyo",

			NAME_SSID: 					"Ad (SSID)",
			NETWORK_NAME_SSID:			"Kablosuz Ağ Adı (SSID)",
			HIDE_SSID: 					"SSID Gizle",
			MODE: 						"Mod",
			CHANNEL: 					"Kanal",
			CHANNEL_WIDTH: 				"Kanal Genişliği",
			AUTO: 						"Otomatik",
			CURRENT_CHANNEL: 			"Geçerli Kanal",

			WDS: 						"WDS Durumu",
			WIRED_CLIENTS: 				"Kablolu İstemciler",
			WIRELESS_CLIENTS: 			"Kablosuz İstemciler",

			ENABLE_DHCP: 				"DHCP",
			LINKADDR:					"Yerel Bağlantı Adresi",
			ASSIGN_TYPE: 				"Atanan Tip",

			ALLOW_TO_SEE_EACH: 			"Misafirlerin birbirlerini görmelerine izin ver",

			TOTAL: 						"Toplam:",
			AVAILABLE: 					"Kullanılabilir:",

			USB: 						"USB Disk",
			PRINTER: 					"Yazıcı",

			CPU_LOAD: 					"CPU Yükü",
			MEMORY_USAGE: 				"Bellek Kullanımı",

			IP_ADDR_P: 					"IP Adresi",
			MAC_ADDR_P: 				"MAC Aresi",
			CONN_TYPE_P: 				"Bağlantı Tipi",

			DISABLED: 					"Devre Dışı",
			INIT: 						"Birim",
			SCAN: 						"Tara",
			AUTH: 						"Kimlik Doğrula",
			ASSOC: 						"İlişkilendir",
			RUN: 						"Çalıştır",
			HOST: 						"Host",
			GUEST: 						"Misafir",

			ON: 						"Açık",
			OFF: 						"Kapalı"
		},

		INTERNET: {
			TITLE: 						"İnternet",
			IPV4: 						"IPv4",
			IPV6: 						"IPv6",
			CONNECTION_TYPE: 			"Internet Bağlantı Tipi",
			INTERNET_MAC_ADDRESS: 		"MAC Adresi",
			
			CONNECT: 					"Bağlan",
			DISCONNECT: 				"Bağlantıyı Kes",
			
			IP_ADDR: 					"IP Adresi",
			
			USE_DEFAULT_MAC: 			"Varsayılan MAC Adresini Kullan",
			USE_COMPUTER_MAC: 			"Şu Anki Bilgisayarın MAC Adresini Kullan",
			USE_CUSTOM_MAC: 			"Özel MAC Adresi Kullan",
			MAC_CLONE: 					"MAC Klon",
			
			CONFIG: 					"Yapılandır",
			
			IP_ADDRESS: 				"IP Adresi",
			SUBNET_MASK: 				"Alt Ağ Maskesi",
			DEFAULT_GATEWAY: 			"Varsayılan Ağ Geçidi",
			
			MANUAL_DNS: 				"Manuel DNS",
			PRIMARY_DNS: 				"Birincil DNS",
			SECOND_DNS: 				"İkincil DNS",
			
			RENEW: 						"Yenile",
			RELEASE: 					"Bırak",
			VIEW_MODE: 					"Modu Görüntüle",
			
			GET_DYNAMICALLY_FROM_ISP: 	"ISS'dan dinamik olarak al",
			USE_FOLLOW_IP_ADDR: 		"Aşağıdaki IP Adresini kullan",
			USE_FOLLOW_DNS_ADDR: 		"Aşağıdaki DNS Adresini kullan",
			USE_FOLLOW_DNS_SERVER: 		"Aşağıdaki DNS Sunucusunu kullan",
			
			BASIC: 						"Temel",
			ADVANCED: 					"Gelişmiş",
			
			DNS_ADDR_MODE: 				"DNS Adresi",
			MTU_SIZE: 					"MTU Boyutu",
			MTU_1500: 					"bayt. (Varsayılan 1500, gerekli olmadıkça değiştirmeyiniz.)",
			MTU_1480: 					"bayt. (Varsayılan 1480, gerekli olmadıkça değiştirmeyiniz.)",
			MTU_1460: 					"bayt. (Varsayılan 1460, gerekli olmadıkça değiştirmeyiniz.)",
			MTU_1420: 					"bayt. (Varsayılan 1420, gerekli olmadıkça değiştirmeyiniz.)",
			
			HOST_NAME: 					"Host Adı",

			HOST_NAME_CONFIRM: 			"Host adı geçersiz karakterler içeriyor. Bu beklenmeyen sistem davranışlarına neden olabilir. Devam etmek istediğinize emin misiniz?",

			GET_IP_WITH_UNICAST_DHCP: 	"Unicast DHCP kullanarak IP al (Genellikle gerekli değildir.)",
			OPTIONAL: 					"(İsteğe Bağlı)",
			
			STATIC_IP: 					"Statik IP",
			PPPOE: 						"PPPoE  ",
			DHCPV6:                     "DHCPv6",
			SLAAC:                      "SLAAC",
			
			USER_NAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			
			INTERNET_IP_ADDR: 			"IP Adresi",
			INTERNET_DNS: 				"Internet DNS",
			SECONDARY_CONN: 			"İkincil Bağlantı",
			NONE: 						"Hiçbiri",
			INTERNET_PRIMARY_DNS:		"Birincil DNS",
			INTERNET_SECONDARY_DNS: 	"İkincil DNS",
			
			DYNAMIC_IP: 				"Dinamik IP",
			DYNAMIC_IP_v6: 				"Dinamik IP (SLAAC/DHCPv6)",
			STATIC_IP: 					"Statik IP",
			SERVICE_NAME: 				"Servis Adı",
			ACCESS_CONCENTRATOR_NAME:  	"Erişim Konsantratör Adı",
			DETECT_ONLINE_INTERVAL: 	"Çevrimiçi Aralığı Algıla",
			INTERVAL_TIPS: 				"saniye (0-120. Varsayılan 10.)",
			IP_ADDR_MODE:  				"IP Adresi",
			CONN_MODE: 					"Bağlantı Modu",
			DHCP_LINK_UNPLUGGED: 		"WAN portunda bağlantı yok.",
			
			AUTO: 						"Otomatik",
			ON_DEMAND: 					"Talep Üzerine",
			TIME_BASED: 				"Zamana Dayalı",
			MANUALLY: 					"Manuel Olarak",
			MAX_IDLE_TIME: 				"Maks. Boşta Kalma Süresi",
			MAX_IDLE_TIME_TIPS: 		"dakika (0 daima aktif olduğu anlamına gelir.)",
			PERIOD_OF_TIME: 			"Zaman Periyodu",
			TIME_TIPS: 					"(SS:DD)",
			BIGPOND_CABLE: 				"BigPond Kablo",
			AUTH_SERVER: 				"Kim.Doğr. Sunucusu",
			AUTH_DOMAIN: 				"Kim.Doğr. Domain",
			L2TP: 						"L2TP",
			GATEWAY: 					"Ağ Geçidi",
			SERVER_IP_ADDR_NAME: 		"VPN Sunucu IP/Alan Adı",
			PPTP: 						"PPTP",
			TO: 						"ile",
			
			TUNNEL_6TO4: 				"6to4 Tünel",
			ENABLE_IPV6: 				"IPv6",
			GET_NONE_TEMPORARY_ADDR: 	"Geçici olmayan IPv6 Adresi al",
			GET_PREFIX_DELEGATION: 		"IPv6 önek yetkisi al",
			IPV6_ADDR: 					"IPv6 Adresi",

			GET_IPV6_WAY: 				"IPv6 Adresi al",
			AUTOMATICALLY: 				"Otomatik Olarak Al",
			SPECIFIED_BY_ISP: 			"ISS tarafından belirlenmiş",

			IPV6_ADDR_PREFIX: 			"IPv6 Adresi Öneki",
			NONE_TEMPORARY: 			"Geçici olmayan",

			PREFIX_DELEGATION: 			"Önek yetkisi",
			ENABLE: 					"Etkin",
			DISABLE: 					"Devre Dışı Bırak",

			RD6:  						"6RD", 
			IPV4_MASK_LEN: 				"IPv4 Maske Uzunluğu",
			CONFIG_TYPE: 				"Yapılandırma Tipi",
			RD6_PREFIX: 				"6RD Öneki",
			RD6_PREFIX_LENGTH: 			"6RD Önek Uzunluğu",
			REPLY_IPV4_ADDR: 			"Border Reply IPv4 Adresi",
			MANUAL: 					"Manuel",
			DSLITE:  					"DS-Lite",
			DS_LITE:  					"DS-Lite",
			PASS_THROUGH:  				"Pass-Through (Bridge)",
			LOCAL_IPV6: 				"Yerel IPv6 Adresi",
			PEER_IPV6: 					"Eşdüzey IPv6 Adresi",
			TUNNEL_ADDR: 				"Tünel Adresi",
			IPV4_NETMASK: 				"IPv4 Netmask",
			CUSTOM: 					"Özel",
		    AFTR_NAME: 					"AFTR Adı",
			PPP_SHARE_V6:				"PPPoE, IPv4 bağlantısı ile aynı oturumda",
			PPP_SHARE_V4:				"PPPoE, IPv6 bağlantısı ile aynı oturumda",

			
			
			IPV4_ADDR: 					"IPv4 Adresi",
			IPV4_MASK: 					"IPv4 Alt Ağ Maskesi",
			IPV4_GATEWAY: 				"IPv4 Varsayılan Ağ Geçidi",
			TUNNEL_ADDR: 				"Tünel Adresi",

			DUPLEX: 					"Dupleks",
			AUTO_NEGOTIATION: 			"Otomatik Anlaşma",
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

			MAC_ADDRESS: 				"MAC Adresi",
			IP_ADDRESS: 				"IP Adresi",
			SUBNET_MASK: 				"Alt Ağ Maskesi",
			CUSTOM: 					"Özel",

			IGMP: 						"IGMP Proxy Etkinleştir",
			

			ASSIGNED_TYPE: 				"Atanan Tip",
			DHCP_SERVER: 				"DHCPv6",
			SLAAC: 						"SLAAC+Yurtsuz DHCP",
			RDNSS: 						"SLAAC+RDNSS",

			PREFIX: 					"Adres Öneki",
			PREFIX_UNIT: 				"/64",
			ADDRESS: 					"Adres",
			DELEFATED: 					"Yetki Verilmiş",
			STATIC: 					"Statik",
			SITE_PREFIX: 				"Site Öneki",
			SITE_PREFIX_LEN: 			"Site Önek Uzunluğu",

			PREFIX_TYPE:  				"Site Önek Yapılandırma Tipi",
			LAN_IPV6_ADDR:  			"LAN IPv6 Adresi",

			RELEASE_TIME: 				"Serbest Bırakma Süresi",
			RELEASE_TIME_TIP: 			"saniye (Varsayılan 86400, gerekli olmadıkça değiştirmeyiniz.)",
			ADDRESS:					"Adres",
			SAVE: 						"Kaydet",

			REBOOT_TIP: 				"Router yeni oturum açma sayfasına atlıyor. <br/> Lütfen bekleyin..."

		},

		IPTV:{
			TITLE: 						"Ayarlar",
			IPTV:                       "IPTV", 
			ENABLE_IPTV:                "IPTV Etkinleştir", 
			MODE:  						"Mod",
			IGMP_PROXY: 				"IGMP Vekil Sunucu(Proxy)",
			IGMP_VERSION: 				"IGMP Sürümü",
			V2:  						"V2",
			V3:  						"V3",
			BRIDGE: 					"Köprü",
			BASIC: 						"Özel",
			EXSTREAM: 					"Singapur-ExStream",
			RUSSIA:  					"Rusya",
			UNIFY:  					"Malezya-Unifi",
			MAXIS:  					"Malezya-Maxis",
			MEO:						"Portugal-MEO",
	   		VDF:						"Portugal-Vodafone",
			LAN1: 						"LAN1",
			LAN2: 						"LAN2",
			LAN3: 						"LAN3",
			LAN4: 						"LAN4",
			INTERNET_IPTV:				"Internet-IPTV",
			INTERNET: 					"İnternet",
			IP_PHONE: 					"IP-Phone", 

			Q_TAG: 						"802.1Q Tag",
			ENABLE: 					"Etkin",
			
			INTERNET_VLAN_ID: 			"Internet VLAN ID",
			INTERNET_VLAN_PRIORITY: 	"Internet VLAN Önceliği",
			IP_PHONE_VLAN_ID: 			"IP-Telefon VLAN ID",
			IP_PHONE_VLAN_PRIORITY: 	"IP-Telefon VLAN Önceliği",
			IPTV_VLAN_ID: 				"IPTV VLAN ID",
			IPTV_VLAN_PRIORITY: 		"IPTV VLAN Önceliği",
			IPTV_MULTI_VLAN_ID: 		"IPTV Multicast VLAN ID",
			IPTV_MULTI_VLAN_PRIORITY: 	"IPTV Multicast VLAN Önceliği"
		},

		DHCP_SERVER: {
			TITLE: 						"DHCP Sunucu",
			
			SETTINGS: 					"Ayarlar",

			DHCP_SERVER: 				"DHCP Sunucu",
			ENABLE_DHCP_SERVER: 		"DHCP Sunucu Etkinleştir",

			IP_ADDR_POOL: 				"IP Adres Havuzu",
			LEASETIME: 					"Adres Kiralama Süresi",
			LEASENOTE: 					"dakika (1-2880, varsayılan değer 120)",
			
			GATEWAY: 					"Varsayılan Ağ Geçidi",
			DOMAIN: 					"Varsayılan Domain",
			PRIMARYDNS: 				"Birincil DNS",
			SECONDARYDNS: 				"İkincil DNS",

			OPTIONAL: 					"(İsteğe Bağlı)",

			CLIENTSLIST: 				"DHCP İstemci Listesi",
			CLIENT_NUMBER: 				"İstemci Sayısı",
			CLIENT_NAME: 				"İstemci Adı",
			MAC_ADDR: 					"MAC Adresi",
			ASSIGNED_IP: 				"Atanan IP Adresi",
			LEASE_TIME: 				"Kiralama Süresi",

			RESERVATION: 				"Adres Rezervasyon",

			RESERVED_IP: 				"Rezerve Edilmiş IP Adresi",
			IP_ADDRESS: 				"IP Adresi",
			DESCRIPTION: 				"Tanım",

			CLIENTSLIST: 				"DHCP İstemci Listesi",
			CLIENT_NUMBER: 				"İstemci Sayısı",

			ENABLE: 					"Etkin",
			ENABLE_THIS_ENTRY: 			"Etkin"
			
		},

		DDNS: {
			DDNS: 						"Dinamik DNS",
			SERVICEPROVIDER: 			"Servis Sağlayıcı",
			COMEXE: 					"Comexe", 
			DYNDNS: 					"Dyndns",
			NOIP: 						"NO-IP",
			TP_LINK: 					"TP-Link", 
			
			GO_TO_REGISTER: 			"Kaydol…",
			USERNAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			DOMAIN_NAME_LIST: 			"Alan Adı Listesi",
			DOMAIN_NAME: 				"Alan Adı",
			LOGIN: 						"Oturum Aç",
			LOGIN_SAVE: 				"Oturum Aç ve Kaydet", 
			LOGOUT: 					"Oturumu Kapat",
			STATU_SUCCESS:				"Başarılı!",
			UPDATE_INTERVAL:			"Güncelleme Aralığı",
			ONE_HOUR:					"1 saat",
			SIX_HOUR:					"6 saat",
			TWETEEN_HOUR:				"12 saat",
			ONE_DAY:					"1 gün",
			TWO_DAY:					"2 gün",
			THREE_DAY:					"3 gün",
			NEVER:						"Asla",
			UPDATE:						"Güncelle",
			STATU_INCORRENT:			"Kullanıcı Adı ve parola eşleşmiyor.",
			STATU_ERR_DOMAIN:			"Alan adı hatalı",
			WAN_IP_BIND: 				"WAN IP binding",
			CURRENT_DOMAIN: 			"Mevcut Domain Adı",
			REGISTER: 					"Kaydol",
			BIND: 						"Bağla",
			UNBIND: 					"Bağlantıyı Kes",
			TITLE: 						"DDNS Bulunamadı",
			CONTENT: 					"TP-Link DDNS servisini kullanmak için, TP-Link ID'nizle <a id=\"tp-link-login-btn\" class=\"link\" href=\"javascript:void(0);\">Oturum Aç</a> ınız veya başka bir servis sağlayıcı seçiniz.",
			STATU_NO_LAUNCH:			"Bağlantı Kurulamadı",
			STATU_FAIL_DDNS: 			"DDNS güncelleme başarısız oldu.",
			STATU_FAIL_NOIP: 			"NO-IP güncelleme başarısız oldu.",
			DISABLE: 					"Devre Dışı Bırak",
			ENABLE: 					"Etkin",	
			STATU_NO_LAUNCH:			"DDNS güncelleme başarısız oldu.",
			STATU_CONN:					"Bağlanıyor",
			WAN_IP_BIND: 				"WAN IP binding",
			TIME: 						"Kayıt Tarihi",
			BOUND: 						"Bağlı",
			FREE: 						"Ücretsiz",
			SORRY: 						"Başarısız.",
			UNBIND_NOTE:          		"Cihazınızı %domain% üzerinden bağlamak istiyorsanız, öncelikle geçerli domain ile bağlantısını kesiniz."
		},

		ADVANCED_ROUTING: {
			TITLE: 						"Gelişmiş Yönlendirme",
			STATIC_ROUTING: 			"Statik Yönlendirme",

			DESTINATION_NETWORK:		"Ağ Kaynağı",
			SUBNET_MASK: 				"Alt Ağ Maskesi",
			DEFAULT_GATEWAY: 			"Varsayılan Ağ Geçidi",
			DESCRIPTION: 				"Tanım",
			
			SYSTEM_ROUTING_TABLE: 		"Sistem Yönlendirme Tablosu",
			CLIENT_NUMBER: 				"Aktif Yönlendirme Sayısı",

			GATEWAY: 					"Ağ Geçidi",
			INTERFACE: 					"Arayüz",
			LAN: 						"LAN",
			WAN: 						"WAN",
			ENABLE: 					"Etkin",
			ENABLE_THIS_ENTRY: 			"Etkin"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Ayarlar",
			NOT_SUPPORT_5G: 			"Bölge sadece 2.4GHz destekliyor. Lütfen bölgenizi doğru seçtiğinizden emin olunuz.",

			REGION: 					"Bölge",
			NOTICE:  					"Kablosuz fonksiyonunu kullanmak için, kablosuz anahtarı on (etkin) konumunda tutmalısınız.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS: 					"Kablosuz Ayarlar",
			WIRELESS_RADIO: 			"",
			ENABLE_WIRELESS: 			"Kablosuz Radyoyu Etkinleştir",

			WIRELESS_NETWORK_NAME: 		"Kablosuz Ağ Adı (SSID)",
			WIRELESS_PASSWORD: 			"Parola",
			HIDE_SSID: 					"SSID Gizle",

			SECURITY: 					"Güvenlik",
			NO_SECURITY: 				"Şifreleme Yok",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Kişisel (Tavsiye Edilen)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2-Zenginleştirilmiş",
			WEP: 						"WEP",

			VERSION: 					"Versiyon",

			AUTO: 						"Otomatik",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Şifreleme",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE:  						"Mod",
			MODE_B:  					"Sadece 802.11b",
			MODE_G:  					"Sadece 802.11g",
			MODE_N:  					"Sadece 802.11n",
			MODE_BG:  					"802.11b/g karışık",
			MODE_GN: 					"802.11g/n karışık",
			MODE_BGN:  					"802.11b/g/n karışık",

			MODE_A_5: 					"Sadece 802.11a",
			MODE_AN_5: 					"802.11a/n karışık",
			MODE_N_5: 					"Sadece 802.11n",
			MODE_AC_5:					"Sadece 802.11ac",
			MODE_NAC_5:					"802.11n/ac karışık",
			MODE_ANAC_5:				"802.11a/n/ac karışık",


			CHANNEL_WIDTH: 				"Kanal Genişliği",
			CHANNEL: 					"Kanal",

			TRANSMIT_POWER: 			"İletim Gücü",

			RADIUS_SERVER_IP: 			"RADIUS Sunucu IP",
			RADIUS_PORT: 				"RADIUS Portu",
			RADIUS_PASSWORD: 			"RADIUS Şifresi",

			TYPE: 						"Tip",
			OPEN_SYSTEM: 				"Açık Sistem",
			SHARED_KEY: 				"Paylaşılan Anahtar",

			KEY_SELECTED: 				"Seçilen Anahtar",
			KEY1: 						"Anahtar1",
			KEY2: 						"Anahtar2",
			KEY3: 						"Anahtar3",
			KEY4: 						"Anahtar4",

			WEP_KEY_FORMAT: 			"WEP Anahtar Formatı",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Heksadesimal",

			KEY_TYPE: 					"Anahtar Tipi",
			BIT64: 						"64 Bit",
			BIT128: 					"128 Bit",
			BIT152: 					"152 Bit",

			KEY_VALUE: 					"Anahtar Değeri",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Düşük",
			MIDDLE: 					"Orta",
			HIGH: 						"Yüksek"
		},

		WPS: {

			TITLE2: 					"Router'ın PINi",
			ROUTERS_PIN_INFO: 			"WPS aracılığıyla Router'ın PIN anahtarı kullanılarak diğer cihazlarla bağlantı kurulabilir.",
			ENABLE_ROUTE_PIN: 			"Router'ın PINi",
			ROUTE_PIN: 					"PIN",
			GENERAL: 					"Oluştur",
			DFT: 						"Varsayılan",

			TITLE: 						"WPS Sihirbazı",
			SELECT_SETUP: 				"Bir kurulum metodu seç",
			PUSH_BTN: 					"Push Button (Tavsiye Edilen)",
			PUSH_DES: 					"Router'daki fiziksel Push Butona basınız veya bu sayfada Bağlan butonuna tıklayınız.",
			CONNECT: 					"Bağlan",
			CANCEL: 					"İptal",

			RESULT_HEAD: 				"Kablosuz istemciler",
			RESULT_END: 				"ağ başarıyla eklendi.",

			PIN_NUMBER: 				"PIN",
			
			PIN_BTN: 					"PIN",
			NOT_FOUND: 					"Bulunamadı",
			ENTER_CLIENT_PIN: 			"İstemcinin PIN anahtarını girin",
			SWITCH_NOTE:				"WPS kullanmak için, öncelikle kablosuz ayarlarda bu fonksiyonu etkinleştirmelisiniz.",
			SWITCH_NOTE2:				"WPS Sihirbazını kullanmak için, öncelikle kablosuz parametrelerini doğru yapılandırmalısınız.",
			STATUS_PIN_ERROR: 			"Geçersiz WPS PIN? Lütfen doğru olup olmadığını kontrol edin.",
			STATUS_ERROR: 				"Hatalı.",
			STATUS_CONN_ERROR: 			"Bağlantı başarısız.",
			STATUS_CONNING: 			"Bağlantı kuruluyor…",
			STATUS_CANCEL: 				"Bağlantı iptal edildi.",
			
			NOTE: 						"Uyarı:",
			
			STATUS_CONN_OVERLAP: 		"Bağlantı başarısız oldu(ÖRTÜŞÜYOR).",
			STATUS_CONN_TIMEOUT: 		"Bağlantı başarısız oldu(ZAMAN AŞIMI).",
			STATUS_CONN_INACT: 			"Bağlantı aktif değil."

		},

		STATISTICS_WIRELESS:{
			TITLE: 						"Çevrimiçi Kablosuz İstasyonlar",
			CLIENT_NUMBER: 				"İstemci Sayısı",
			MAC_ADDRESS: 				"MAC Adresi",
			CONN_TYPE: 					"Bağlantı Tipi",
			SECURITY: 					"Güvenlik",
			RECEIVED_PACKETS: 			"Alınan Paketler",
			SEND_PACKETS: 				"Gönderilen Paketler"
		},

		GUEST_SETTINGS:{
			GLOBAL_SETTINGS: 			"Ayarlar",
			
			MODE_2G: 					"2.4GHz",
			MODE_5G:					"5GHz",
			
			ALLOW_EACH: 				"Misafirlerin birbirlerini görmelerine izin ver",
			
			ALLOW_LOCAL: 				"Misafirlerin yerel ağıma erişmelerine izin ver",
			
			WIRELESS: 					"Kablosuz",
			WIRELESS_24G_RADIO: 		"Kablosuz 2.4GHz",
			WIRELESS_5G_RADIO: 			"Kablosuz 5GHz",
			ENABLE_GUEST: 				"Misafir Ağı Etkinleştir",

			NAME_SSID: 					"Kablosuz Ağ Adı (SSID)",
			HIDE_SSID: 					"SSID Gizle",

			SECURITY: 					"Güvenlik",
			NO_SECURITY: 				"Şifreleme Yok",	
			WPA_WPA2_PERSONAL: 			"WPA/WPA2-Kişisel",

			VERSION: 					"Versiyon",
			AUTO: 						"Otomatik",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",

			ENCRYPTION: 				"Şifreleme",
			TKIP: 						"TKIP",
			AES: 						"AES",

			WIRELESS_PASSWORD: 			"Parola"
		},

		NAT:{
			SETTINGS: 					"Donanım NAT",
			STATUS: 					"Donanım NAT",
			
			ALG_TITLE: 					"Uygulama Katmanı Ağ Geçidi (ALG)",

			FTP_ALG: 					"FTP ALG",
			TFTP_ALG: 					"TFTP ALG",
			H323_ALG: 					"H323 ALG",
			RTSP_ALG: 					"RTSP ALG",
			PPTP_ALG: 					"PPTP Passthrough",
			L2TP_ALG: 					"L2TP Passthrough",
			IPSEC_ALG: 					"IPSec Passthrough",

			ENABLE_FTP_ALG: 			"FTP ALG Etkinleştir",
			ENABLE_TFTP_ALG: 			"TFTP ALG Etkinleştir",
			ENABLE_H323_ALG: 			"H323 ALG Etkinleştir",
			ENABLE_RTSP_ALG: 			"RTSP ALG Etkinleştir",
			ENABLE_PPTP_ALG: 			"PPTP Passthrough Etkinleştir",
			ENABLE_L2TP_ALG: 			"L2TP Passthrough Etkinleştir",
			ENABLE_IPSEC_ALG: 			"IPSec Passthrough Etkinleştir",
			NAT_ENABLE_NOTICE: 			"Dikkat: NAT fonksiyonu etkinleştirilene kadar yapılandırmalar geçerli olmayacaktır."
		},

		VIRTUAL_SERVERS:{
			TITLE: 						"Sanal Sunucu",

			SERVICE_NAME: 				"Servis Tipi",
			EXTERNAL_PORT: 				"Harici Port",
			INTERNAL_IP: 				"Dahili IP",
			INTERNAL_PORT: 				"Dahili Port",
			PROTOCAL: 					"Protokol",

			BTN_VIEW: 					"Şu Anki Servisleri Görüntüle",

			EXSITTING_SERVICE: 			"Şu Anki Servisler",
			
			PROTOCAL_ALL: 				"HEPSİ",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			
			INTERNAL_UNIT: 				"(XX)",
			EXTERNAL_UNIT: 				"(XX-XX veya XX)",
			EXT_PORT_TIPS: 				"(XX veya XX-XX ,1-65535)",
			INT_PORT_TIPS: 				"(XX veya Boş ,1-65535)",

			NOTICE:						"Uzak yönetim portu ile çakışıyor. Devam etmek istediğinize emin misiniz?",

			ENABLE_THIS_ENTRY: 			"Etkin",
			OPERATION: 					"İşlem",
			CHOOSE: 					"Seçin",
			NAT_ENABLE_NOTICE: 			"Dikkat: NAT fonksiyonu etkinleştirilene kadar yapılandırmalar geçerli olmayacaktır."
		},

		PORT_TRIGGERING:{
			TITLE: 						"Port Tetikleme",
			APPLICATION: 				"Uygulama",
			TRIGGER_PORT: 				"Tetiklenen Port",
			TRIGGER_PROTOCOL: 			"Tetiklenen Protokol",

			EXTERNAL_PORTS: 			"Harici Port",
			EXTERNAL_PROTOCOL: 			"Harici Protokol",

			BTN_VIEW: 					"Şu Anki Uygulamaları Görüntüle",

			EXSITTING_APPLICATION: 		"Şu Anki Uygulamalar",
			APPLICATION_NAME: 			"Uygulama Adı",
			TRIGGER_TIPS: 				"(XX,1-65535)",
			EXTERNAL_TIPS: 				"(XX veya XX-XX,1-65535,en çok 5 çift)",
			
			ENABLE_THIS_ENTRY: 			"Etkin",
			OPERATION: 					"İşlem",
			
			PROTOCAL_ALL: 				"HEPSİ",
			PROTOCAL_TCP: 				"TCP",
			PROTOCAL_UDP: 				"UDP",
			NAT_ENABLE_NOTICE: 			"Dikkat: NAT fonksiyonu etkinleştirilene kadar yapılandırmalar geçerli olmayacaktır."
		},

		DMZ:{
			TITLE: 						"DMZ",
			ENABLE_DMZ: 				"DMZ Etkinleştir",
			HARDWARESTATUS: 			"DMZ Host IP Adresi",
			NAT_ENABLE_NOTICE: 			"Dikkat: NAT fonksiyonu etkinleştirilene kadar yapılandırmalar geçerli olmayacaktır."
		},

		UPNP:{
			TITLE: 						"UPnP",
			CURRENT_UPNP_STATUS: 		"UPnP",

			UPNP_LIST: 					"UPnP Servis Listesi",
			CLIENT_NUMBER: 				"İstemci Sayısı",
			SERVICE: 					"Servis Tanımı",
			EXTERNAL_PORT: 				"Harici Port",
			PROTOCAL: 					"Protokol",
			IP_ADDR: 					"Dahili IP Adresi",
			INTERNAL_PORT: 				"Dahili Port",
			NAT_ENABLE_NOTICE: 			"Dikkat: NAT fonksiyonu etkinleştirilene kadar yapılandırmalar geçerli olmayacaktır."
		},

		G3_G4:{
			TITLE: 						"3G/4G",
			USB_MODEM: 					"USB Modem",
			LOCATION: 					"Bölge",
			MOBILE_ISP: 				"Mobil ISS",

			USA: 						"ABD",
			AT_T: 						"AT&T",

			CONNECTION_MODE: 			"Bağlantı Modu",
			CONNECT_ON_DEMAND: 			"Talep Üzerine",
			CONNECT_AUTOMATICALLY: 		"Otomatik",
			CONNECT_MANUALLY: 			"Manuel",
			MAX_IDLE_TIME: 				"Maks. Boşta Kalma Süresi",
			CONNECTION_TIP: 			"Geçerli Internet Erişimi WAN Öncelikli olarak ayarlıdır.",
			IDLE_TIME_TIP: 				"Bağlantı Modu ve Maks. Boşta Kalma Süresi manuel olarak ayarlanamaz.",
			MINUTES: 					"dakika. (0, bağlantının her zaman açık olması anlamına gelir.)",

			AUTHENTICATION_TYPE: 		"Kimlik Doğrulama Tipi",
			AUTO: 						"Otomatik",
			PAP: 						"PAP",
			CHAP: 						"CHAP",
			AUTH_TYPE_TIP: 				"Varsayılan Otomatik, gerekli olmadıkça değiştirmeyin.",

			CONNECT: 					"Bağlan",
			DISCONNECT: 				"Bağlantıyı Kes",

			SET_TIP: 					"Arama Numarası, APN, Kullanıcı Adı ve Şifreyi manuel olarak ayarla.",
			DIAL_NUMBER: 				"Arama Numarası",
			APN: 						"APN",
			USERNAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			OPTIONAL: 					"(İsteğe Bağlı)",
			MTU_SIZE: 					"MTU Boyutu (bayt olarak)",
			MTU_SIZE_TIP: 				"Varsayılan 1480, gerekli olmadıkça değiştirmeyin.",

			USE_FOLLOW_DNS_SERVER: 		"Aşağıdaki DNS Sunucusunu kullan",
			PRIMARY_DNS: 				"Birincil DNS",
			SECOND_DNS: 				"İkincil DNS",

			UNPLUGGED: 					"Hiçbir USB modem bağlı değil",
			IDENTIFYING: 				"Tanımlanıyor...",
			IDENTIFY_SUCCESS: 			"Başarıyla tanımlandı"
		},

		DISK_SETTING: {
			DISK_SET: 					"Cihaz Ayarları",
			SCAN: 						"Tara",
			SELFLY_REMOVE: 				"Güvenle Kaldır",
			SCAN_RESULT: 				"%n diski bulundu.",
			NOT_FOUND: 					"Bulunamadı",
			SELFLY_REMOVE: 				"Güvenle Kaldır",
			
			VOLUMN: 					"Birim",
			CAPACITY: 					"Kapasite",
			FREESPACE: 					"Boş Alan",
			USBSPACE: 					"Kullanılan Alan",
			
			STATUS: 					"Durum",
			INACT: 						"Pasif",
			ACTIVE: 					"Aktif",
			
			USAGE: 						"Kullanım",
			CAPACITY: 					"Kapasite",
			OPERATION: 					"İşlem",	
			
			ACC: 						"Hesap Yönetimi", 	 	
			USERNAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			USE_LOGIN: 					"Varsayılan Hesabı Kullan",
			SCAN: 						"Tara",
			ENJECT_ALL: 				"Tümünü Çıkart",
			ENJECT: 					"Çıkart",
			ADD_USER: 					"Kullanıcı Ekle",
			AUTH: 						"Yetkili"
		},

		FOLDER: {
			TITLE: 						"Paylaşım Ayarları",
			ACCOUNT_TITLE: 				"Paylaştırılan Hesap",
			ACCOUNT:					"Hesap",
			AC_NOTE: 					"Paylaştırılan içerik için bir hesap oluştur. Yeni bir hesap oluşturabilir veya mevcut hesap ile oturum açarak kullanabilirsiniz.",
			
			AC_LOGIN: 					"Varsayılan Hesabı Kullan",
			AC_FOLLOW: 					"Yeni Hesap Kullan",

			USERNAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",
			CONFIRM: 					"Şifreyi Doğrula",

			SHARING_SETTING: 			"Paylaşım Ayarları",
			SERVER_NAME: 				"Ağ/Medya Sunucu Adı",

			METHOD: 					"Erişim Metodu",
			LINK: 						"Bağlantı",
			PORT: 						"Port",

			NETWORK_NEIGHBORHOOD: 		"Ağ Komşusu",
			FTP: 						"FTP  ",
			FTPEX: 						"FTP (Internet aracılığıyla)",

			SHARE_FOLDER: 				"Dosya Paylaşımı",
			SHAREING_ALL: 				"Hepsini Paylaş",
			NOTE:  						"Tüm dosya ve klasörleri paylaşıma açmak için Anahtarı Açık konuma getirin. Sadece belirli klasörleri paylaşıma açmak istiyorsanız Anahtarı Kapalı konumda bırakınız.", 
			ENABLE_AUTHENTICATION: 		"Kimlik Doğrulamayı Etkinleştir",
			SHAREING_FOLDER: 			"Dosya Paylaşımı",
			
			SHARE_NAME: 				"Share Name",
			FOLDER_PATH: 				"Dosya Yolu",
			VOLUMN_NAME: 				"Birim Adı",

			SHARE_NAME: 				"Dosya Adı",
			FOLDER_PATH: 				"Dosya Yolu",
			MEDIA_SHARING: 				"Medya Paylaşımı",
			STATUS: 					"Durum",

			GUEST_ACCESS: 				"Misafir Ağ Erişimini Etkinleştir",
			ENABLE_AUTHENTICATION: 		"Kimlik Doğrulamayı Etkinleştir",
			ENABLE_WRITE_ACCESS: 		"Yazma Erişimini Etkinleştir",
			ENABLE_MEDIA_SHARE: 		"Medya Paylaşımını Etkinleştir",
			
			BROWSE: 					"Gözat",
			BROWSE_TITLE: 				"Bir klasör seç",

			NO_VOLUMN:					"Birim Yok",
			
			NOTICE: 					"Dinamik DNS sayfasından çıkmak istediğinize emin misiniz? Kaydetmek için kaydet butonuna tıklayınız ve çıkın. Kaydetmeden çıkmak için Çık butonuna tıklayın. Sayfada kalmak için İptal butonuna tıklayın.",
			NO_CHANGE_NOTICE: 			"Dinamik DNS sayfasından çıkmak istediğinize emin misiniz?",

			SAVE_FAILED_NOTICE: 		"Kaydetme başarısız",
			CONTINUE: 					"Çık",
			CONTINUE_SAVE: 				"Kaydet",
			CANCLE: 					"İptal",

			ENABLE: 					"Etkin"

		},

		PRINT:{
			TITLE: 						"Yazdırma Sunucusu",
			NAME: 						"Yazıcı Adı",
			ENABLE_PRINT_SERVER: 		"Yazdırma Sunucusu",
			NONE: 						"Hiçbiri",
			
			NOTE_TITLE: 				"Uyarı:",
			STEP1: 						"Adım1:",
			STEP2: 						"Adım2:",
			STEP3: 						"Adım3:",

			NOTE1: 						"Bilgisayarınızda yazıcının sürücüsünü yükleyin",
			NOTE2: 						"USB Yazıcıdan router'ın USB portuna USB kablosu aracılığıyla bağlantı kurun.",
			NOTE3: 						"TP-Link USB Yazıcı Kontrolcüsü Yardımcı Uygulamasını yükleyin. Yardımcı uygulamayı resmi web sitemizden indirebilirsiniz: <a class=\"link\" target=\"blank\" href=\"%SUPPORT%\">%SUPPORT%</a>."
		},

		PARENTAL_CTR:{
			TITLE: 						"Ebeveyn Kontrolü",
			STATUS: 					"Durum",
			UNKNOWN: 					"Bilinmeyen",

			DEVICE_CTR: 				"Ebeveyn Kontrolündeki Cihazlar",
			DEVICE: 					"Cihaz Adı",
			MAC_ADDRESS: 				"MAC Adresi",
			TIME: 						"Internet Erişim Zamanı",
			DESCRIPTION: 				"Tanım",
			
			ENABLE_THIS_ENTRY: 			"Etkin",
			OPTIONAL: 					"(İsteğe Bağlı)",
			BTN_VIEW: 					"Şu Anki Cihazları Görüntüle",
			
			DEVICE_LIST: 				"Cihaz Listesi",
			SYSTEM_TIME: 				"Sistem Zamanı",
			
			RESTR: 						"İçerik Kısıtlama",
			MODE: 						"Kısıtla",
			BLACKMODE: 					"Kara Liste",
			WHITEMODE: 					"Beyaz Liste",
			ACCESS_DEVICES_LIST: 		"Erişebilir Cihazlar Listesi",
			
			CHOOSE: 					"Seçin",
			ADD_A_NEW_KEYWORD: 			"Yeni Bir Anahtar Kelime Ekle",
			ADD_A_NEW_DOMAIN_NAME: 		"Yeni Bir Alan Adı Ekle"
		},

		STREAMBOOST: {
			TITLE: 						"Streamboost",
			INTERNET: 					"İnternet",
			ROUTER: 					"Router",
			WINDOWS: 					"Windows",
			ANDROID: 					"Android",
			MAC_IOS: 					"MAC/IOS",
			UNIX: 						"Unix",
			LINUX: 						"Linux",
			OTHERS: 					"Diğerleri",

			DEVICE: 					"Cihaz",
			RATE: 						"Aralık",
			APPLICATION: 				"Uygulama",

			NAME: 						"Ad",
			MAC_ADDRESS: 				"MAC Adresi",
			IP_ADDRESS: 				"IP Adresi",


			DEVICES: 					"Cihazlar"

			
		},

		BANDWIDTH:{
			BANDWIDTH: 					"Bant Genişliği",
			TEST_BANDWIDTH: 			"> Bant Genişliğini Test Et",
			STREAMBOOST: 				"Streamboost",
			ENABLE_STREAMBOOST: 		"Streamboost etkinleştir",
			UP_LIMITATION: 				"kadar Yükleme Kısıtla(Mbps)",
			DOWN_LIMITATION: 			"kadar İndirme Kısıtla(Mbps)",
			RUN_BANDWIDTH_TEST: 		"Bant Genişliği Testini Çalıştır",
			TESTING: 					"Test Ediliyor",
			TEST_FAILED: 				"Test Başarısız",
			TEST_SUCCEED: 				"Test Başarılı",
			ENABLE_AUTOMATIC_TEST: 		"Otomatik Testi Etkinleştir",
			KEEP_UP_TO_DATE: 			"Tarihine Kadar StreamBoost Koru",
			ENABLE_AUTOMATIC_UPDATE: 	"Otomatik Güncellemeyi Etkinleştir"

		},

		PRIORITY:{
			PRIORITY: 					"Öncelik",
			PRIORITY_TIPS: 				"Öncelik bir cihazın önceliğini değiştirmenize olanak tanır. Aynı kategorideki uygulamalarda bant genişliğini kısıtlamak için kullanışlıdır.",
			ALL_DEVICE: 				"Tüm Cihazlar",
			ACTIVE_DEVICE: 				"Aktif Cihazlar",
			SAVE: 						"Kaydet",
			ID: 						"ID",
			DEVICE: 					"Cihaz",
			TYPE: 						"Tip",
			MAC_ADDRESS: 				"MAC Adresi",
			STICK: 						"Bağla"
		},

		STREAMBOOST_STATISTICS: {
			STATISTICS: 				"İstatistikler",
			UP_TIME: 					"Çalışma Süresi",
			DOWNLOADS: 					"Yüklenenler",
			LAST_DAY: 					"Son Gün",
			LAST_WEEK: 					"Son Hafta",
			LAST_MONTH: 				"Son Ay",
			ALL_LAN_HOSTS: 				"Tüm LAN Hostları",
			OTHER: 						"Diğer"

		},

		SECURITY_SETTING: {
			FIREWALL: 					"Güvenlik Duvarı",
			ENABLE_SPI: 				"SPI Güvenlik Duvarı",

			DOS_PROTECTION: 			"Dos Koruma",
			ENABLE_DOS: 				"Dos Koruma",
			
			OFF: 						"Kapalı",
			LOW: 						"Düşük",
			MIDDLE: 					"Orta",
			HIGH: 						"Yüksek",

			ICMP: 						"ICMP-FLOOD Atak Filtreleme",
			UDP: 						"UDP-FLOOD Atak Filtreleme",
			TCP: 						"TCP-SYN-FLOOD Atak Filtreleme",
			ENABLE_DOS_TIP:             "Aynı anda DoS Koruma ve Trafik İstatistikleri etkin olmalıdır.",

			IGNORE: 					"WAN Portundan Gelen Ping Paketlerini Yoksay",
			FORBID: 					"LAN Portundan Gelen Ping Paketlerini Yasakla",

			BLOCK_DOS: 					"Engellenmiş DoS Host Listesi",
			HOST_NUMBER: 				"Host Sayısı",
			IP_ADDRESS: 				"IP Adresi",
			MAC_ADDRESS: 				"MAC Adresi"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Erişim Kontrolü",
			ENABLE_ACCESS: 				"Erişim Kontrolü",

			ACCESS_MODE: 				"Erişim Modu",
			DEFAULT_ACCESS_MODE: 		"Varsayılan Erişim Modu",
			BLACK_LIST: 				"Kara Liste",
			WHITE_LIST: 				"Beyaz Liste",
			
			WIRED:						"Kablolu",
			WIRELESS:					"Kablosuz",

			DEVICE_ONLINE: 				"Cihazlar Çevrimiçi",
			NAME: 						"Cihaz Adı",
			IP_ADDRESS: 				"IP Adresi",
			MAC_ADDRESS: 				"MAC Adresi",
			CONN_TYPE: 					"Bağlantı Tipi",

			BLOCK: 						"Bloke Et",

			DEVICE_IN_WHITE: 			"Beyaz Listedeki Cihazlar",
			DEVICE_IN_BLACK: 			"Kara Listedeki Cihazlar"
		},

		IP_MAC:{
			TITLE: 						"Ayarlar",
			ENABLE_ARP: 				"ARP İlişkilendirme",

			ARP_LIST: 					"ARP Listesi",
			ARP_NUM: 					"ARP Girdi sayısı",

			MAC_ADDRESS: 				"MAC Adresi",
			IP_ADDRESS: 				"IP Adresi",
			BOUND: 						"Bağlı",
			UNBOUND: 					"Bağlı Değil",

			BINDING_LIST: 				"İlişkilendirme Listesi",
			DESCRIPTION: 				"Tanım",
			OPTIONAL: 					"(İsteğe Bağlı)",
			ENABLE_THIS_ENTRY: 			"Etkin"
		},

		TIMESET: {
			TITLE: 						"Zaman Ayarları",
			ZONE: 						"Saat Dilimi",
			DATE: 						"Tarih",
			DATEFORMAT: 				"MM/DD/YYYY",
			TIME: 						"Saat",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"NTP Sunucu 1",
			NTP2: 						"NTP Sunucu 2",
			OPTIONAL: 					"(İsteğe Bağlı)",

			CURRENT_TIME:  				"Şu Anki Zaman",
			SET_TIME: 					"Zamanı Ayarla",
			AUTOMATIC: 					"Internet üzerinden otomatik olarak al",
			MANUAL: 					"Manuel Olarak",
			AUTOMATIC_BTN: 				"Sağla",


			GETGMT: 					"GMT'den Al",

			
			GETGMT_SUCCESS: 			"Zaman Değerleri NTP Sunucusundan Başarıyla Alındı",
			GETGMT_TIMEOUT: 			"Zaman Değerleri NTP Sunucusundan Alınırken Zaman Aşımına Uğradı",
			GETGMT_WAIT: 				"Bekleniyor",
			
			M: 							"M",
			W: 							"W",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Yaz Saati Uygulaması",
			ENABLE_DAYLIGHT: 			"Yaz Saati Uygulamasını Etkinleştir",
			START: 						"Başlangıç",
			END: 						"Bitiş",

			RUNNING_STATUS: 			"Çalışma Durumu",
			DOWN: 						"Yaz saati uygulaması kapalı",
			UP: 						"Yaz saati uygulaması açık"
		},

		DIAG:{
			TITLE: 						"Tanılama",
			DIAGNOSTIC_TOOL: 			"Tanılama Araçları",
			PING: 						"Ping",
			TRACE: 						"Traceroute",

			IPADDR: 					"IP Adresi/Alan Adı",
			COUNT: 						"Ping Sayısı",
			
			BASIC: 						"Temel",
			ADVANCED: 					"Gelişmiş",
			
			COUNTUNIT: 					"(1-50)",

			PKT: 						"Ping Paket Boyutu",
			PKTUNIT: 					"(4-1472 Bayt)",

			TIMEOUT: 					"Ping Zaman Aşımı",
			TIMOUTUNIT: 				"(100-2000 Milisaniye)",

			TTL: 						"Traceroute Maks. TTL",
			TTLUNIT: 					"(1-30)",
			
			START: 						"Başlangıç",
			STOP: 						"Bitiş"
		},

		FIRMWARE:{
			FIRMWARE_INFO:  			"Yazılımınız günceldir.",
			TITLE: 						"Firmware Güncelleme",
			INFO: 						"Cihaz Bilgileri",
			REMOTE_TITLE: 				"Çevrimiçi Güncelle",
			LOCAL_TITLE: 				"Yerel Güncelle",

			NEWFILE: 					"Yeni Firmware Dosyası",
			FIRMWAREVERSION: 			"Firmware Sürümü",
			HARDWAREVERSION: 			"Donanım Sürümü",
			LATESTVERSION: 				"En Son Sürüm",
			CONFIRM_CONTENT:			"Bu yazılımı yüklemek istiyor musunuz?",
			WARNING:					"Yazılım güncelleniyor… <br/> Cihazın zarar görmemesi için, yazılım güncelleme işlemi süresince kesinlikle router'ı kapatmayın ve bağlantıları kesmeyin.",
			REBOOTING: 					"Yeniden Başlatılıyor… <br/> Cihazın zarar görmemesi için, yazılım güncelleme işlemi süresince kesinlikle router'ı kapatmayın ve bağlantıları kesmeyin.",
			DO_NOT_OPERATE: 			"Yazılım güncelleniyor… <br/> Cihazın zarar görmemesi için, yazılım güncelleme işlemi süresince kesinlikle router'ı kapatmayın ve bağlantıları kesmeyin.",
			FIRMWARE_UPDATING_NOTE: 	"1. Firmware Güncelleniyor…<br/> Cihazın zarar görmemesi için, güncelleme işlemi boyunca kesinlikle router'ı kapatmayınız ve bağlantılarını kesmeyiniz.",
			REBOOTING_NOTE: 			"2. Yeniden Başlatılıyor…<br/> Cihazın zarar görmemesi için, yeniden başlatma işlemi boyunca kesinlikle router'ı kapatmayınız ve bağlantılarını kesmeyiniz.",
			SCREEN_UPDATING_NOTE: 		"3. Ekran Güncelleniyor..<br> Cihazın zarar görmemesi için, güncelleme işlemi boyunca kesinlikle router'ı kapatmayınız ve bağlantılarını kesmeyiniz.",
			UPGRADE_FAILED: 			"Güncelleme işlemi başarısız oldu.",
			UPGRADE: 					"Güncelle",
			CHECK: 						"Kontrol Et",
			DOWNLOADING: 				"İndiriliyor… <br/> Cihazın zarar görmemesi için, yazılım güncelleme işlemi süresince kesinlikle router'ı kapatmayın ve bağlantıları kesmeyin.",
			UPGRADE_INOF: 				"Cihazın zarar görmemesi için, router'ı açık bırakın.",
			NOTE: 						"Dikkat:",
			NO_UPGRADE: 				"En son sürüm yüklüdür.",

			UPGRADING: 					"Güncelleniyor… <br/> Cihazın zarar görmemesi için, yazılım güncelleme işlemi süresince kesinlikle router'ı kapatmayın ve bağlantıları kesmeyin.",
			RETRY: 						"Tekrar Dene",
			CANCEL: 					"İptal",
			ILEGAL_DEVICE:              "Cihaz tanımlanamıyor. TP-Link teknik destek ile iletişime geçin.",
			UPGRADE_FAIL: 				"Güncelleme başarısız. Daha sonra tekrar deneyiniz.",
            CONFIG_RESET_NOTE:          "Bu sürüme güncellendikten sonra şu anki ayarlarınız kaybolacaktır.",
			CHECK_UPGRADE: 				"Yeni sürümü kontrol et"
		},

		BACKUP:{
			BACKUP: 					"Yedekle",
			BACKUPTIP: 					"Şu anki ayarların bir kopyasını kaydet",

			RESTORE: 					"Geri Yükle",
			RESTORETIP: 				"Yedeklenmiş ayarları geri yükle.",
			
			RESTORE_WARN:				"Geri Yükleniyor…<br/>Geri yüklemi işlemi bitene kadar lütfen bekleyiniz.",
			RESTORE_CONFIRM_CONTENT: 	"Yedeklenmiş dosyadan router ayarlarını geri yüklemek istediğinize emin misiniz?",
			
			FILE: 						"Dosya",

			FACTORY: 					"Varsayılan Ayarlara Geri Yükle",
			FACTORYTIP: 				"Tüm ayarları varsayılan değerlere geri al.",
			RESETTIP:					"Oturum açma ve bulut hesap bilgileriniz hariç, tüm konfigürasyon ayarlarını varsayılan değerlere geri yükleyin.",
			FACTORY_CONFIRM_CONTENT:	"Fabrika ayarlarına geri yüklemek istediğinize emin misiniz?",
			FACTORY_WARN:				"Geri Yükleniyor…<br/>Geri yüklemi işlemi bitene kadar lütfen bekleyiniz.",
			
			BACKUPBTN: 					"Yedekle",
			RESTOREBTN: 				"Geri Yükle",
			RESETBTN:					"Geri Yükle",
			FACTORYBTN: 				"Fabrika Ayarları"
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Hesap Yönetimi",
			
			OLDUSER: 					"Önceki Kullanıcı Adı",
			OLDPWD: 					"Önceki Şifre",

			NEWUSER: 					"Yeni kullanıcı Adı",
			NEWPWD: 					"Yeni Şifre",
			CONFIRM: 					"Yeni Şifreyi Onayla",

			RECOVERYINFO: 				"Şifreyi Kurtar",
			ENABLE_PASSWORD_RECOVERY: 	"Şifre Kurtarmayı Etkinleştir",
			FROM: 						"Kimden",
			TO: 						"Kime",
			SMTP_SERVER: 				"SMTP Sunucu",
			
			ENABLE_AUTHENTICATION: 		"Kimlik Doğrulamayı Etkinleştir",
			USERNAME: 					"Kullanıcı Adı",
			PASSWORD: 					"Parola",

			TEST_MAIL: 					"Test Maili",

			LOCAL:						"Yerel Yönetim",
			LOCAL_MAC_AUTH: 			"Yerel MAC Kimlik Doğrulama",
			ACCESS: 					"Bağlı Tüm LAN Cihazları için Erişim",
			ACCESS_TIPS: 				"LAN'daki tüm cihazlara yönetim yetkisi vermek için Anahtarı Açık konumuna getirin. Belirli bir cihaza yönetim yetkisi vermek için Anahtarı Kapalı konumda bırakınız.",
			
			MAC_ADDRESS: 				"MAC Adresi",
			VIEW_BTN: 					"Şu Anki Cihazları Görüntüle",
			DESCRIPTION: 				"Tanım",

			EXIST_DEVICE:               "Şu Anki Cihazlar",

			OPTIONAL: 					"(İsteğe Bağlı)",
			ENABLE_THIS_ENTRY: 			"Etkin",

			DEVICE_NAME:				"Cihaz Adı",
			IP_ADDRESS:					"IP Adresi",
			

			REMOTE: 					"Uzaktan Yönetim",
			DISABLE_REMOTE_MANAGEMENR: 	"Uzaktan Yönetimi Devre Dışı Bırak",
			ENABLE_REMOTE_MANAGEMENR_ALL: 	"Tüm Cihazlar için Uzaktan Yönetimi Etkinleştir",
			ENABLE_REMOTE_MANAGEMENR: 	"Belirli Cihazlar için Uzaktan Yönetimi Etkinleştir",
			WEB: 						"Web Yönetim Portu",

			NOTICE:						"Sanal Sunucu portu ile çakışıyor! Devam etmek istediğinize emin misiniz?",

			REMOTEIP: 					"Uzaktan Yönetim IP Adresi",
			REMOTEIPNOTE: 				"(Hepsi için 255.255.255.255 girin)"
			
		},

		SYSLOG:{
			TITLE: 						"Sistem Günlüğü",
			LOG_FILTER: 				"Log Filtrele:",
			
			TYPE_EQ: 					"Tip=",
			
			ALL: 						"HEPSİ",

			FIREWALL: 					"Güvenlik Duvarı", 
			NAT: 						"NAT",
			DDNS: 						"Dinamik DNS",
			UPNP:						"UPnP",
			IMB:            			"IP&MAC Binding",
			IPTV:						"IPTV",
			DHCPS:						"DHCP Sunucu",
			IGMP_PROXY:					"IGMP Vekil Sunucu(Proxy)",
			DOMAIN_LOGIN:				"Domaine Giriş Yap",
			BASIC_SECURITY: 			"Temel Güvenlik",
			PARENTAL_CONTROL: 			"Ebeveyn Kontrolü",
			ACCESS_CONTROL: 			"Erişim Kontrolü",
			DOS_PROTECTION: 			"Dos Koruma",
			QOS: 						"QoS",
			TRAFFIC_STATS: 				"Trafik İstatistikleri",
			TIME_SETTINGS: 				"Zaman Ayarları",
			ACCOUNT_MANAGEMENT: 		"Hesap Yönetimi",
			LOCAL_MANAGEMENT: 			"Yerel Yönetim",
			REMOTE_MANAGEMENT: 			"Uzaktan Yönetim",
			LOCALE: 					"Yerel",
			FACTORY_RESET: 				"Fabrika Ayarları",
			LED_CONTROLLER: 			"LED Denetleyici",
			NETWORK: 					"Ağ",
			USBSHARE: 					"USB paylaşımı",
			AND: 						"ve",
			LEVEL: 						"Düzey",
			EMERGENCY:					"ACİL",
			ALERT:						"ALARM",
			CRITICAL:					"KRİTİK",
			ERROR: 						"HATA",
			WARNING: 					"UYARI",
			NOTICE: 					"BİLDİRİ",
			INFO: 						"BİLGİ",
			DEBUG: 						"HATA AYIKLAMA",

			INDEX: 						"Dizin",
			TYPE: 						"Tip",
			TIME: 						"Saat",
			LEVEL_COL:					"Düzey",

			CONTENT: 					"Log İçeriği",
			
			MAIL_LOG: 					"Mail Log",
			SAVE_LOG: 					"Log Kaydet",

			SEND_OK: 					"Gönderim Başarılı",
			SEND_FAILED: 				"Gönderim Başarısız",

			MAIL_SETTING: 				"Mail Ayarları",

 			FROM: 						"Kimden",
 			TO: 						"Kime",
 			SMTP_SERVER: 				"SMTP Sunucu",
 			ENABLE_AUTHENTICATION: 		"Kimlik Doğrulamayı Etkinleştir",

 			USERNAME: 					"Kullanıcı Adı",
 			PASSWORD: 					"Parola",
 			CONFIRM_PASSWORD: 			"Şifreyi Doğrula",

 			AUTO_MAIL: 					"Otomatik Maili Etkinleştir",
 			LOG_AT: 					"Giriş Yap",
 			HH_MM: 						"(SS:DD) hergün",

 			LOG_EVERY: 					"Tüm Log",
 			HOURS: 						"saat"
		},

		QOS:{
			TITLE: 						"QoS",
			QOS: 						"QoS",
			SETTINGS: 					"Ayarlar",
			STATUS: 					"QoS Etkinleştir",
			UPBANDWIDTH: 				"Upload Bant Genişliği",
			DOWNBANDWIDTH: 				"Download Bant Genişliği",
			SPEED_M: 					"Mbps",
			SPEED_K: 					"Kbps",
			TEST: 						"Hızı Test Et",
			RULE_LIST: 					"QoS Kural Listesi",
			RULE: 						"QoS Kuralı",
			ID: 						"ID",
			NAME: 						"Ad",
			TYPE: 						"Tip",
			DETAIL: 					"Detay",
			PRIORITY: 					"Öncelik",

			APPLICATION: 				"Uygulama",
			APPLICATION_LIST: 			"Uygulama Listesi",
			CUSTOM_APP: 				"Özel Uygulama",
			MAC_ADDR: 					"MAC Adresi",
			MAC_ADDR_P: 				"MAC:",
			IP_ADDR: 					"IP Adresi",
			IP_P: 						"IP:",
			PHYSICAL_PORT: 				"Fiziksel Port",

			LOW: 						"Düşük",
			MIDDLE: 					"Orta",
			HIGH: 						"Yüksek",

			PROTO: 						"Protokol",
			PORT: 						"Port",
			PROTO_P: 					"Protokol",
			PORT_P: 					"Port:",
			PORT_TIPS: 					"(XX veya XX-XX,1-65535,en çok 5 çift)",

			ALL: 						"HEPSİ",
			TCP: 						"TCP",
			UDP: 						"UDP",
			TCP_UDP: 					"TCP/UDP",
			CUSTOM: 					"Özel",

			WIFI_HOME: 					"WİFi-HOST",
			WIFI_GUEST: 				"WiFi-MİSAFİR",
			PORT1: 						"LAN1",
			PORT2: 						"LAN2",
			PORT3: 						"LAN3",
			PORT4: 						"LAN4",

			DATABASE_UPGRADE: 			"Veritabanını Güncelle",

			NEWFILE: 					"Yeni Veritabanı Dosyası",
			FIRMWAREVERSION: 			"Veritabanı Sürümü",
			CONFIRM_CONTENT:			"Veritabanını güncellemek istediğinize emin misiniz?",
			WARNING:					"Veritabanı Güncelleniyor…<br/>Lütfen işlem bitene kadar bekleyin.",
			
			UPGRADE: 					"Güncelle",

			SERVICE_RESTART: 			"QoS servisi yeniden başlatılıyor",
			
			TYPE: 						"Tip",
			BY_DEVICE: 					"Cihaz üzerinden",
			BY_APP: 					"Uygulama üzerinden",
			BY_PHY: 					"Fiziksel Port üzerinden",

			HIGH_PRIORITY_LBL: 			"Yüksek Öncelikli:",
			MIDDLE_PRIORITY_LBL: 		"Orta Öncelikli:",
			LOW_PRIORITY_LBL: 			"Düşük Öncelikli:",

			HIGH_PRIORITY: 				"Yüksek Öncelikli",
			MIDDLE_PRIORITY: 			"Orta Öncelikli",
			LOW_PRIORITY: 				"Düşük Öncelikli"

		},

		APPLICATION:{
			APP_LIST: 					"Uygulama Listesi",
			GAME_LIST: 					"Oyun Listesi",

			QQ: 						"QQ"
			
		},

		STATISTICS: {
			TRIFFIC_STATISTICS: 		"Trafik İstatistikleri",
			ENABLE_STATISTICS: 			"Trafik İstatistikleri",

			TITLE: 						"Trafik İstatistikleri Listesi",
			IP_MAC: 					"IP Adresi/MAC Adresi",
			TPKT: 						"Toplam Paket",
			TBYTE: 						"Toplam Bayt",
			CPKT: 						"Şu Anki Paket",
			CBYTE: 						"Şu Anki Bayt",
			CICMP: 						"Şu Anki ICMP Tx",
			CUDP: 						"Şu Anki UDP Tx",
			CSYN: 						"Şu Anki SYN Tx",
			
			DELETE_CONFIRM: 			"Trafik istatistiklerini silmek istediğinize emin misiniz?",
			DELETE_ALL_CONFIRM: 		"Tüm trafik istatistiklerini silmek istediğinize emin misiniz?",

			RESET_ALL: 					"Hepsini Sıfırla"
		},

		SYSPARA:{
			W24G: 						"Kablosuz 2.4GHz",
			W5G: 						"Kablosuz 5GHz",
			SWITCH_NOTICE:  			"Kablosuz fonksiyon kapalı. Fonksiyonu kullanmak istiyorsanız lütfen Wi-Fi butonunu on (etkin) konumuna getiriniz.",

			ENABLE_TIPS: 				"Kablosuz fonksiyon devre dışıdır.",

			BEACON: 					"Beacon Interval",
			BEACONUNIT: 				"(40-1000)",

			RTS: 						"RTS Threshold",
			RTSUNIT: 					"(1-2346)",
			
			FRAG: 						"Fragmentation Threshold",
			FRAGUNIT: 					"(256-2346)",

			DTIM: 						"DTIM Zaman Aralığı",
			DTIMUNIT: 					"(1-15)",

			GROUP: 						"Grup Anahtarı Güncelleştirme Periyodu",
			GROUPUNIT: 					"saniye",
			
			
			WMM_FEATURE: 				"WMM Özelliği",
			WMM: 						"WMM Etkinleştir",

			GI_FEATURE: 				"Short GI Özelliği",
			GI: 						"Short GI Etkinleştir",

			AP_FEATURE: 				"AP İzolasyon Özelliği",
			AP: 						"AP İzolasyonunu Etkinleştir",

			TXBF_FEATURE: 				"TX Beamforming",
			TXBF: 						"TxBF Etkinleştir",

			WDS_FEATURE: 				"WDS Köprüleme",
			WDS: 						"WDS Köprülemeyi Etkinleştir",
			
			SSID_BRIDEGE: 				"SSID (köprülenecek)",
			SURVEY: 					"Tara",

			SN: 						"SN",
			MAC_ADDRESS: 				"MAC Adresi",
			SSID: 						"SSID",
			SIGNAL: 					"Sinyal",
			CHANNEL: 					"Kanal",
			SECURITY: 					"Güvenlik",
			CHOSEN: 					"Seçilen",
			AP_NUMBER:					"AP Sayısı",

			TOTAL: 						"Toplam öğeler",

			MAC: 						"MAC Adresi (köprülenecek)",
			MACUNIT: 					"Örnek: 00-1D-0F-11-22-33",

			SECURITY: 					"Güvenlik",
			NO: 						"Hayır",
			NONE: 						"Şifreleme Yok",
			WPA: 						"WPA-PSK/WPA2-PSK",
			WEP: 						"WEP",
			
			PASSWORD: 					"Parola",
			
			AUTH_TYPE: 					"Auth. Tip",
			AUTO: 						"Otomatik",
			OPEN: 						"Açık Sistem",
			SHARED: 					"Paylaşılan Anahtar",

			WEP_INDEX: 					"WEP Dizini",
			KEY1: 						"Anahtar1",
			KEY2: 						"Anahtar2",
			KEY3: 						"Anahtar3",
			KEY4: 						"Anahtar4",

			WEP_KEY_FORMAT: 			"WEP Anahtar Formatı",
			ASC: 						"ASCII",
			HEX: 						"Heksadesimal",			

			WPS: 						"WPS",
			ENABLE_WPS: 				"WPS Etkinleştir",

			NAT: 						"NAT",
			ENABLE_NAT: 				"NAT Etkinleştir",
			
			NAT_BOOST: 					"NAT Boost",
			ENABLE_NAT_BOOST: 			"NAT Boost Etkinleştir",
			
			MEDIA_SERVER: 				"Medya Sunucu",
			SCAN_INTERVAL: 				"Oto Tarama Aralığı (Saat)",
			SCAN_UNIT: 					"(2-48)",

			DOS_PROTECTION: 			"DoS Koruma Düzeyi Ayarları",

			ICMP: 						"ICMP-FLOOD Paketleri Düzeyi",
			UDP: 						"UDP-FLOOD Paketleri Düzeyi",
			TCP: 						"TCP-FLOOD Paketleri Düzeyi",

			WDS_MODE: 					"WDS Modu",
			WDS1: 						"WDS1",
			WDS2: 						"WDS2",

			LOW: 						"Düşük",
			MIDDLE: 					"Orta",
			HIGH: 						"Yüksek",

			TO: 						"ile",
			NOTICE_NAT_REBOOT: 			"Yeniden başlatılıyor…<br/> Lütfen yeniden başlatma işlemi bitene kadar bağlantıları kesmeyiniz.",

			NOTICE_NAT_BOOST: 			"NAT Boost üzerinde yaptığınız değişiklikler cihazı yeniden başlattıktan sonra etkili olacaktır. Devam etmek istediğinize emin misiniz?",
			NOTICE:						"Router'ın kanalı köprülenmiş AP'nin kanalı ile aynı değildir. Değişiklik yapmak istiyor musunuz?",

			UNIT: 						"(5-7200)Paket/Saniye",
			LED: 						"LED",
			NIGHT_MODE: 				"Gece modu",
			PERIOD_NIGHT_TIME: 			"Gece Modu Periyodu",
			ENABLE: 					"Gece Modunu Etkinleştir",
			HH_MM: 						"(SS:DD)",
			NIGHT_MODE_NOTE:            "LED'iniz kapalı. Eğer bu işlevi kullanmak istiyorsanız lütfen sayfanın sağ üst kısmındaki LED'i tıklatın.",
			NOTE2:                      "Gece modu süresi, router'in sistem saatine göre devreye girer. Lütfen Router'in saatini ayarladığınızdan emin olun."
		},
		VPN:{
			OPEN_VPN: 					"OpenVPN",
			NO_CERT_NOTE: 				"Şu anda bir sertifika yok, lütfen VPN sunucusunu etkinleştirmeden önce lütfen bir tane <b>oluşturun</b>.",
			NO_CERT_NOTE2: 				"Şu anda bir sertifika yok, yapılandırmayı dışarı aktarmadan önce lütfen bir tane <b>oluşturun</b>.",
			ENABLE_VPN_SERVER: 			"VPN Sunucusunu etkinleştir",
			SERVICE_TYPE: 				"Servis Tipi",
			SERVICE_PORT: 				"Servis Portu",
			VPN_SUBNET: 				"VPN Alt Ağı/Ağ Maskesi",
			CLIENTS_ACCESS: 			"İstemci Erişimi",
			UDP: 						"UDP",
			TCP: 						"TCP",
			HOME_NETWORK_ONLY: 			"Yalnızca Asıl Ağ",
			INTERNET_HOME: 				"İnternet ve Asıl Ağ",
			CERT_STR: 					"Şu anda bir sertifika yok, bir tane oluşturmak için Tamam'ı tıklatın ve yapılandırmanızı kaydedin.",
			CERT_STR2: 					"Şu anda bir sertifika yok, bir tane oluşturmak için Tamam'ı tıklatın ve yapılandırmanızı dışarı aktarın.",
			CONF_FILE: 					"Yapılandırma Dosyası", 
			EXPORT_CONF_FILE: 			"Yapılandırmayı dışarı aktarır.",
			EXPORT: 					"Dışarı aktar",

			INSTALL_GUIDE: 				"VPN İstemcisi Yükleme Kılavuzu",
			INSTALL_STEP: 				"OpenVPN sunucusunu etkinleştirmek ve istemci cihazlarınızı sunucuya bağlamak için:",
			INSTALL_NOTICE:				"OpenVPN sunucusunu yapılandırmadan önce lütfen Dinamik DNS Servisi'ni (önerilir) yapılandırın ya da WAN portu için bir statik IP adresi atayın. Sistem Saatinin doğru olduğundan emin olun.",
			INSTALL_NOTE1: 				"VPN Sunucusunu Etkinleştir'i seçin.",
			INSTALL_NOTE2: 				"OpenVPN sunucuyu yapılandırmadan önce, WAN portu için Dinamik DNS Servisini (önerilen) yapılandırınız veya statik bir IP adresi atayınız. Servis portunun NAT ayarlarında harici port için başka bir servisin tanımlı port olup olmadığından ve DMZ fonksiyonunun devre dışı olduğundan emin olunuz. Ayrıca Sistem Zaman ayarlarının bulunduğunuz bölge için güncel olduğundan emin olunuz.",
			INSTALL_NOTE3: 				"Yapılandırma dosyasını kaydetmek için Dışarı aktar'ı tıklatın.",
			INSTALL_NOTE4: 				"İstemci cihazlarınızda <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> adresinden OpenVPN istemcisi uygulamasını indirin ve yükleyin. Resmi olarak desteklenen platformlar arasında Windows, Mac OSX, Linux bulunmaktadır.",
			INSTALL_NOTE5: 				"OpenVPN istemci yardımcı uygulamasını çalıştırın. İstemci cihazı VPN sunucusuna bağlamak için kayıtlı yapılandırma dosyasını kullanarak yeni bir VPN bağlantısı ekleyin.",
			NOTE: 						"OpenVPN istemcileri hakkında daha fazla bilgi almak için <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a> adresini ziyaret edin",

			PPTPVPN: 					"PPTP VPN",
			CLIENT_IP_ADDRESS: 			"İstemci IP Adresi",
			ACCOUNT_USERNAME: 			"Kullanıcı Adı",
			ACCOUNT_PASSWORD: 			"Parola",
			CLIENT_IP_NOTE: 			"(10 istemciye kadar)",
			SAME_SUBNET_NOTE: 			"İstemci IP adresi ve LAN IP adresi aynı alt ağda olamaz.",
			CONFLICT_WITH_DHCP: 		"İstemci IP adresi, DHCP IP adres havuzuyla çakışıyor.",
			CONFLICT_WITH_RESERVED: 	"İstemci IP adresi, ayrılmış IP adresiyle çakışıyor.",
			CONFLICT_WITH_OPENVPN: 		"İstemci IP adresi ve OpenVPN IP adresi aynı alt ağda olamaz.",
			SAME_SUBNET_NOTE2: 			"VPN Alt Ağı/Ağ Maskesi ve LAN IP adresi aynı alt ağda olamaz.",
			CONFLICT_WITH_DHCP2: 		"VPN Alt Ağı/Ağ Maskesi, DHCP IP adres havuzuyla çakışıyor.",
			CONFLICT_WITH_RESERVED2: 	"VPN Alt Ağı/Ağ Maskesi, ayrılmış OP adresi ile çakışıyor.",
			CONFLICT_WITH_PPTPVPN: 		"VPN Alt Ağı/Ağ Maskesi ve PPTP VPN IP adresi aynı alt ağda olamaz.",
			VPN_MASK_ERROR: 			"Ağ maskesi 255.255.255.248'den büyük olamaz.",
			ACCOUNT_LIST: 				"Hesap Listesi (16 kullanıcıya kadar)",
			ADVANCED_SETTING: 			"Gelişmiş",
			ALLOW_SAMBA: 				"Samba (Ağ Bağlantısı) erişimine izin ver",
			ALLOW_NETBIOS: 				"NetBIOS passthrough izin ver",
			ALLOW_UNENCRYPTED_CONN: 	"Şifrelenmemiş bağlantılara izin ver",
			USERNAME_CONFLICT: 			"Kullanıcı adı zaten kayıtlı.",
			
			CONNECT_PPTP: 				"PPTP VPN sunucusunu etkinleştirmek ve istemci cihazlarınızı sunucuya bağlamak için:",
			CONNECT_NOTICE:				"PPTP VPN sunucusunu yapılandırmadan önce lütfen Dinamik DNS Servisi'ni (önerilir) yapılandırın ya da WAN portu için bir statik IP adresi atayın. NAT ayarlarının harici portunun 1723 olmadığından, DMZ'nin devre dışı ve Sistem Zamanının doğru olduğundan emin olun.",
			CONNECT_NOTE1: 				"VPN Sunucusunu Etkinleştir'i seçin.",
			CONNECT_NOTE2: 				"PPTP VPN sunucusu parametrelerini yapılandırın ve Kaydet'i tıklatın.",
			CONNECT_NOTE3: 				"İstemci cihazlarınızda bir PPTP VPN bağlantısı oluşturun. Resmi olarak desteklenen platformlar arasında Windows, Mac OSX, Linux, iOS ve Android bulunmaktadır.",
			CONNECT_NOTE4: 				"PPTP VPN programını çalıştırın. İstemci cihazlarınızı PPTP VPN sunucusuna bağlamak için yeni bir bağlantı ekleyin ve WAN portuna atanmış statik IP adresini veya kayıtlı DDNS servisinin domain adını girin.",
			
			GENERATE_CERT: 				"Sertifika",
			GENERATE_NEW_CERT: 			"Sertifika oluşturun.",
			GENERATE: 					"Oluştur",
			GENERATE_TIPS: 				"Sertifika oluşturuluyor...<br/>Birkaç dakika sürecek, lütfen bekleyin.",
			CERT_SUCCESS: 				"Başarılı ",
			CERT_FAIL: 					"Başarısız, lütfen tekrar deneyin.",
			
			VPN_CONNECTIONS: 			"VPN Bağlantıları",
			OPEN_VPN_CONNECTIONS: 		"OpenVPN Bağlantısı",
			PPTP_VPN_CONNECTIONS: 		"PPTP VPN Bağlantısı",
			USER:				"Kullanıcı",
			REMOTE_IP:			"Uzak IP",
			ASSIGNED_IP:			"Tahsis Edilmiş IP"
		}
	};
})(jQuery);

