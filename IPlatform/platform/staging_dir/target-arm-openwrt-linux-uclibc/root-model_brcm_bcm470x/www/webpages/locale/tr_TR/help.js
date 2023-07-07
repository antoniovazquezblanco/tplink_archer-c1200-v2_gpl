(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "İnternet",
			CONTENT: [{
				type: "paragraph",
				content: "Geniş Alan Ağı (Internet) bağlantısı ile ilgili bilgiler görüntülenir."
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Router'ın Internet (WAN) portuna atanmış özgün fiziksel adrestir."
			},{
				type: "name",
				title: "IP Adresi",
				content: "Router'ın Internet (WAN) portuna atanmış IPv4 adresidir. IP adresi 0.0.0.0 olarak görünürse, Internet erişiminin olmadığını gösterir."
			},{
				type: "name",
				title: "Alt Ağ Maskesi",
				content: "Parametre bir IP Adresinin ana bilgisayar bölümünü ve ağ bölümünü belirler."
			},{
				type: "name",
				title: "Varsayılan Ağ Geçidi",
				content: "Bu IP adresi router'ın ağ bağlantısı için kullanılır."
			},{
				type: "name",
				title: "Birincil DNS/İkincil DNS",
				content: "Alan Adı Sistemi (DNS) ana bilgisayar adını ve internet etki alanını IP adreslerine dönüştürür. Bu DNS sunucularının bilgileri Internet Servis Sağlayıcısı (ISS) tarafından atanır."
			},{
				type: "name",
				title: "Bağlantı Tipi",
				content: "Internet(WAN) portunun mevcut bağlantı tipidir."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Router'ın Internet (WAN) portuna atanmış özgün fiziksel adrestir."
			},{
				type: "name",
				title: "IP Adresi",
				content: "Router'ın Internet (WAN) portuna atanan IPv6 adresidir."
			},{
				type: "name",
				title: "Varsayılan Ağ Geçidi",
				content: "Bu IP adresi router'ın ağ bağlantısı için kullanılır."
			},{
				type: "name",
				title: "Birincil DNS/İkincil DNS",
				content: "Alan Adı Sistemi (DNS) ana bilgisayar adını ve internet etki alanını IP adreslerine dönüştürür. Bu DNS sunucularının bilgileri Internet Servis Sağlayıcısı (ISS) tarafından atanır."
			},{
				type: "name",
				title: "Bağlantı Tipi",
				content: "Internet(WAN) portunun mevcut bağlantı tipidir."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Kablosuz",
			CONTENT: [{
				type: "paragraph",
				content: "Kablosuz Ağ hakkında bilgileri gösterir."
			},{
				type: "name",
				title: "Kablosuz Ağ Adı (SSID)",
				content: "SSID (Servis Seti Tanımlayıcısı) olarak da bilinen kablosuz ağ adıdır."
			},{
				type: "name",
				title: "Kablosuz Radyo",
				content: "Kablosuz ağın mevcut durumudur(Açık veya Kapalı)."
			},{
				type: "name",
				title: "Mod",
				content: "Mevcut kablosuz modudur."
			},{
				type: "name",
				title: "Kanal Genişliği",
				content: "Kablosuz ağın kanal genişliğidir."
			},{
				type: "name",
				title: "Kanal",
				content: "Mevcut kablosuz kanalıdır ve bu kanalla uyumlu frekanstır(GHz cinsinden)."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Router'daki kablosuz ağ radyosunun MAC adresidir."
			},{
				type: "name",
				id: "status_wds",
				title: "WDS Durumu",
				content: "WDS modunun mevcut durumudur(Etkin veya Devre Dışı)."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Ethernet (LAN) portları hakkındaki bilgileri gösterir."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Router'ın Ethernet (LAN) portuna atanan tek fiziksel adrestir."
			},{
				type: "name",
				title: "IP Adresi",
				content: "Router'ın Ethernet (LAN) portuna atanan IPv4 adresidir."
			},{
				type: "name",
				title: "Alt Ağ Maskesi",
				content: "Parametre bir IP Adresinin ana bilgisayar bölümünü ve ağ bölümünü belirler."
			},{
				type: "name",
				title: "DHCP",
				content: "Router'ın LAN portları üzerinde, yerleşik DHCP sunucusunun cihazlar için aktif olup olmadığını gösterir."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Router'ın Ethernet (LAN) portuna atanan tek fiziksel adrestir."
			},{
				type: "name",
				title: "IP Adresi",
				content: "Router'ın Ethernet (LAN) portuna atanan IPv6 adresidir."
			},{
				type: "name",
				title: "Yerel Bağlantı Adresi",
				content: "LAN arayüzü için olan IPv6 bağlantı adresidir."
			},{
				type: "name",
				title: "Atanan Tip",
				content: "LAN arayüzü için olan IPv6 tipidir."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Misafir Ağ",
			CONTENT: [{
				type: "paragraph",
				content: "Misafirler için olan kablosuz ağ hakkındaki bilgileri gösterir."
			},{
				type: "name",
				title: "Kablosuz Ağ Adı (SSID)",
				content: "Misafir Ağınızın kablosuz ağ adıdır(SSID)."
			},{
				type: "name",
				title: "SSID Gizle",
				content: "Misafir Ağının kablosuz ağ adının(SSID) gizlenip gizlenmediğini gösterir."
			},{
				type: "name",
				title: "Kablosuz Radyo",
				content: "Misafir Ağın mevcut durumudur(Açık veya Kapalı)."
			},{
				type: "name",
				title: "Misafirlerin birbirlerini görmelerine izin ver",
				content: "Misafir Ağındaki tüm cihazların birbiri ile iletişimine izin verilip verilmediğini gösterir."
			}]
		},
		STATUS_USB: {
			TITLE: "USB Cihazları",
			CONTENT: [{
				type: "paragraph",
				content: "Router'a USB portu yoluyla bağlanmış olan mevcut USB bellek cihazlarının ve/veya yazıların bilgilerini gösterir."
			},{
				type: "name",
				title: "Yazıcı",
				content: "Bağlı olan yazıcının adıdır."
			},{
				type: "name",
				title: "USB Disk",
				content: "Router'a bağlı olan USB diskin adıdır."
			},{
				type: "name",
				title: "Toplam",
				content: "Bağlı olan USB bellek cihazının toplam bellek kapasitesidir."
			},{
				type: "name",
				title: "Kullanılabilir",
				content: "Bağlı olan USB bellek cihazının müsait bellek kapasitedir."
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Performans",
			CONTENT: [{
				type: "paragraph",
				content: "Mevcut router'ın performansını gösterir."
			},{
				type: "name",
				title: "CPU Yükü",
				content: "Mevcut CPU kullanımıdır."
			},{
				type: "name",
				title: "Bellek Kullanımı",
				content: "Mevcut bellek kullanımıdır."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Kablolu İstemciler",
			CONTENT: [{
				type: "paragraph",
				content: "Mevcut durumda ağa bağlı olan tüm kablolu cihazların bilgisini gösterir."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Kablosuz İstemciler",
			CONTENT: [{
				type: "paragraph",
				content: "Mevcut durumda ağa bağlı bulunan tüm kablosuz cihazların bilgisini gösterir."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Internet Bağlantı Tipi:Statik IP"
			},{
				type: "paragraph",
				content: "Eğer ISS tarafından size özel (sabit) IP Adresi, Alt Ağ Maskesi, Ağ Geçidi ve DNS parametreleri sağlanıyorsa, bu tipi seçin."
			},{
				type: "name",
				title: "IP Adresi/Alt Ağ Maskesi/Varsayılan Ağ Geçidi/Birincil DNS/İkincil DNS",
				content: "ISS'nız tarafından sağlanan bilgileri girin."
			},{
				type: "name",
				title: "MTU Boyutu",
				content: "Çoğu ethernet ağı için varsayılan ve genel MTU (En Yüksek Aktarım Birimi) boyutu 1500 byte'dır. ISS'nız tarafından gerekmedikçe varsayılan MTU boyutunu değiştirmeniz önerilmez. "
			},{
				type: "title",
				title: "Internet Bağlantı Tipi:Dinamik IP"
			},{
				type: "paragraph",
				content: "Eğer ISS'nız tarafından size DHCP sunucu bağlantısı sağlanıyorsa bu tipi seçin."
			},{
				type: "name",
				title: "IP Adresi/Alt Ağ Maskesi/Varsayılan Ağ Geçidi/Birincil DNS/İkincil DNS",
				content: "Bu parametreler ISS'nızden alınarak DHCP tarafından otomatik olarak atanır."
			},{
				type: "name",
				title: "Yenile",
				content: "DHCP sunucusundan yeni IP parametreleri almak için bu butona tıklayın."
			},{
				type: "name",
				title: "Bırak",
				content: "DHCP sunucusu tarafından atanan tüm IP adreslerini bırakmak için bu butona tıklayın."
			},{
				type: "name",
				title: "Aşağıdaki DNS Adresini kullan",
				content: "Eğer ISS bir veya iki DNS adresi sağlıyorsa, bu işaret kutucuğunu seçin ve birincil DNS ve ikincil DNS adreslerini ilgili veri giriş alanlarına girin. Aksi halde, DNS adresleri ISS tarafından dinamik olarak atanacaktır."
			},{
				type: "name",
				title: "MTU Boyutu",
				content: "Çoğu ethernet ağı için varsayılan ve genel MTU (En Yüksek Aktarım Birimi) boyutu 1500 byte'dır. ISS'nız tarafından gerekmedikçe varsayılan MTU boyutunu değiştirmeniz önerilmez. "
			},{
				type: "name",
				title: "Host Adı",
				content: "Router'ınızın ana bilgisayar adını belirlemek için bu alana bir değer girin."
			},{
				type: "name",
				title: "Tek yönlü DHCP kullanarak IP al",
				content: "Eğer ISS'nızın DHCP sunucusu yayın uygulamalarını desteklemiyorsa ve IP adreslerini dinamik olarak alamıyorsanız bu işaret kutucuğunu seçin."
			},{
				type: "title",
				title: "Internet Bağlantı Tipi: PPPoE"
			},{
				type: "paragraph",
				content: "Eğer DSL (Sayısal Abone Hattı) servisini kullanıyorsanız ve ISS tarafından size kullanıcı adı ve şifresi sağlanmışsa bu tipi seçin."
			},{
				type: "name",
				title: "Kullanıcı Adı/Şifre",
				content: "ISS tarafından sağlanan kullanıcı adını ve şifresini girin. Bu alanlar büyük-küçük harf duyarlıdır."
			},{
				type: "name",
				title: "IP Adresi/Birincil DNS/İkincil DNS",
				content: "Bu parametreler ISS'nızın DHCP sunucusu tarafından otomatik olarak atanmıştır."
			},{
				type: "name",
				title: "İkincil Bağlantı(Hiçbiri, Dinamik IP, Statik IP)",
				children: [{
					type: "name",
					title: "Hiçbiri",
					content: "Eğer ikincil bağlantı sağlanmamışsa bu seçeneği seçin."
				},{
					type: "name",
					title: "Dinamik IP",
					content: "Eğer IP adresi ve Alt Ağ Maskesi ISS tarafından otomatik olarak atanmışsa bu seçeneği seçin.",
					children: [{
						type: "name",
						title: "Yenile",
						content: "ISS'nız tarafından atanan IP parametrelerini yenilemek için bu butona basın."
					},{
						type: "name",
						title: "Bırak",
						content: "Atanan IP parametrelerini bırakmak için bu butona basın."
					}]
				},{
					type: "name",
					title: "Statik IP",
					content: "Eğer IP adresi ve Alt Ağ Maskesi ISS tarafından sağlanmışsa bu seçeneği seçin ve bu bilgileri ilgili alanlara girin."
				}]
			},{
				type: "name",
				title: "MTU Boyutu",
				content: "Ethernet ağları için tipik MTU(En Yüksek Aktarım Birimi) boyutu 1480 byte'dır.",
				children: [{
					type: "note",
					title: "Uyarı",
					content: "Nadir durumlarda, ISS'nız daha iyi ağ performansı için MTU boyutunu ayarlamanızı gerektirebilir. Kesinlikle gerekmediği sürece bu değerleri değiştirmemelisiniz."
				}]
			},{
				type: "name",
				title: "Servis Adı/Erişim Konsantratör Adı",
				content: "Varsayılan olarak, Servis Adı ve Erişim Konsantratör (AC) adı boş bırakılmıştır. Bu alanlar ISS'nız tarafından istenmediği sürece yapılandırılmamalıdır."
			},{
				type: "name",
				title: "Çevrimiçi Aralığı Algıla",
				content: "Router'ın her zaman aralığında Erişim Konsantratör algılaması için 0-120 dakika aralığında bir değer girin. Varsayılan değer 10'dur."
			},{
				type: "name",
				title: "IP Adresi",
				content: "Eğer ISS'nız özel(sabit) IP adresi sağlıyorsa, belirtilen IP adresini kullanı seçin ve IP adresini bu alana girin. Aksi halde, sunucu-atanan IP adresini otomatik olarak almak için ISS'dan dinamik olarak al seçeneğini seçin."
			},{
				type: "name",
				title: "DNS Adresi/Birincil DNS/İkincil DNS",
				content: "Eğer ISS'nız özel(sabit) DNS IP adresleri sağlıyorsa, belirtilen DNS adresini kullan seçeneğini seçin ve bu adresleri birincil DNS ve ikincil DNS alanlarına sırayla girin. Aksi halde, sunucu-atanan DNS IP adreslerini otomatik olarak almak için ISS'dan dinamik olarak al seçeneğini seçin."
			},{
				type: "name",
				title: "Bağlantı Modu",
				content: "Internete nasıl bağlanacağınızı belirleyen uygun bağlantı modunu seçin.",
				children: [{
					type: "name",
					title: "Otomatik",
					content: "Bu modda, internet bağlantısı kesildiğinde otomatik olarak tekrar bağlanır."
				},{
					type: "name",
					title: "Talep Üzerine",
					content: "Bu modda, belirlenen boş kalma süresi (Maksimum Boş Zaman) tamamlandıktan sonra internet bağlantısı otomatik olarak sonlandırılacaktır. Internete tekrar erişmeye çalıştığınızda, bağlantı tekrardan kurulur."
				},{
					type: "name",
					title: "Zamana Dayalı",
					content: "Bu modda, internet bağlantısı sadece belirlenen zaman dilimlerinde kurulur. Eğer bu seçenek seçiliyse, başlangıç ve bitiş zamanını girin; ikisi de SS:DD biçiminde olmalı."
				},{
					type: "name",
					title: "Manuel Olarak",
					content: "Bu modda, internet bağlantısı Bağlan veya Bağlantıyı Kes butonlarına tıklayarak manuel olarak kontrol edilir. Bu mod Maksimum Boş Zaman fonksiyonunu da destekler. Internet bağlantısının Maksimum Boş Zaman alanında sona erdirilmeden önce pasif duruma geçebileceği maksimum zamanı dakika olarak girin. Varsayılan değer 15 dakikadır. Eğer internet bağlantınızın tüm zamanlarda aktif olmasını istiyorsanız, 0(sıfır) değerini girin."
				},{
					type: "note",
					title: "Uyarı",
					content: "Zaman Bazlı bağlı modu Gelişmiş->Sistem Araçları -> Zaman Ayarları 'nda Sistem Zamanı yapılandırıldığı zaman etkili olacaktır."
				}]
			},{
				type: "title",
				title: "Internet Bağlantı Tipi: BigPond Kablo"
			},{
				type: "paragraph",
				content: "Eğer ISS'nız BingPond kablo bağlantısı sağlıyorsa bu tipi seçin."
			},{
				type: "name",
				title: "Kullanıcı Adı/Şifre",
				content: "ISS tarafından sağlanan kullanıcı adını ve şifresini girin. Bu alanlar büyük-küçük harf duyarlıdır."
			},{
				type: "name",
				title: "Kim.Doğr. Sunucusu",
				content: "Kimlik doğrulama sunucusunun IP adresini veya ana bilgisayar adını girin."
			},{
				type: "name",
				title: "Kim.Doğr. Domain",
				content: "Sunucunun etki alanı adı son ekini (bölgenize bağlı olarak) girin. Örneğin; NSW/ACT için nsw.bigpond.net.au, VIC/TAS/WA/SA/NT için vic.bigpond.net.au, QLD için qld.bigpond.net.au"
			},{
				type: "name",
				title: "MTU Boyutu",
				content: "Çoğu ethernet ağı için varsayılan ve genel MTU (En Yüksek Aktarım Birimi) boyutu 1500 byte'dır. ISS'nız tarafından gerekmedikçe varsayılan MTU boyutunu değiştirmeniz önerilmez. "
			},{
				type: "name",
				title: "Bağlantı Modu",
				content: "Internete nasıl bağlanacağınızı belirleyen uygun bağlantı modunu seçin.",
				children: [{
					type: "name",
					title: "Otomatik",
					content: "Bu modda, internet bağlantısı kesildiğinde otomatik olarak tekrar bağlanır."
				},{
					type: "name",
					title: "Talep Üzerine",
					content: "Bu modda, belirlenen boş kalma süresi (Maksimum Boş Zaman) tamamlandıktan sonra internet bağlantısı otomatik olarak sonlandırılacaktır. Internete tekrar erişmeye çalıştığınızda, bağlantı tekrardan kurulur."
				},{
					type: "name",
					title: "Manuel Olarak",
					content: "Bu modda, internet bağlantısı Bağlan veya Bağlantıyı Kes butonlarına tıklayarak manuel olarak kontrol edilir. Bu mod Maksimum Boş Zaman fonksiyonunu da destekler. Internet bağlantısının Maksimum Boş Zaman alanında sona erdirilmeden önce pasif duruma geçebileceği maksimum zamanı dakika olarak girin. Varsayılan değer 15 dakikadır. Eğer internet bağlantınızın tüm zamanlarda aktif olmasını istiyorsanız, 0(sıfır) değerini girin."
				}]
			},{
				type: "title",
				title: "İnternet Bağlantı Tipi: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Eğer L2TP/PPTP VPN sunucusuna bağlanıyorsanız ve ISS tarafından sunucunun kullanıcı adı ve şifresi ve IP Adresi/Etki Alanı Adı sağlanmışsa, bu tipi seçin."
			},{
				type: "name",
				title: "Kullanıcı Adı/Şifre",
				content: "ISS tarafından sağlanan kullanıcı adını ve şifresini girin. Bu alanlar büyük-küçük harf duyarlıdır."
			},{
				type: "name",
				title: "IP Adresi/Birincil DNS/İkincil DNS",
				content: "Bu parametreler ISS'nızın DHCP sunucusu tarafından otomatik olarak atanmıştır."
			},{
				type: "name",
				title: "İkincil Bağlantı(Dinamik IP, Statik IP)",
				children: [{
					type: "name",
					title: "Dinamik IP",
					content: "Eğer IP adresi ve Alt Ağ Maskesi ISS tarafından otomatik olarak atanmışsa bu seçeneği seçin."
				},{
					type: "name",
					title: "Statik IP",
					content: "Eğer IP adresi, Alt Ağ Maskesi, Ağ Geçidi ve DNS adresleri ISS tarafından sağlanmışsa bu seçeneği seçin ve bu bilgileri ilgili alanlara girin."
				}]
			},{
				type: "name",
				title: "VPN Sunucu IP/Alan Adı",
				content: "ISS tarafından sağlanan VPN sunucusunun IP adresini veya etki alanı adını girin."
			},{
				type: "name",
				title: "MTU Boyutu",
				content: "Çoğu ethernet ağı için varsayılan ve genel MTU (En Yüksek Aktarım Birimi) boyutu L2TP için 1460 byte PPTP için 1420 Byte'dır. ISS'nız tarafından gerekmedikçe varsayılan MTU boyutunu değiştirmeniz önerilmez. "
			},{
				type: "name",
				title: "Bağlantı Modu",
				content: "Internete nasıl bağlanacağınızı belirleyen uygun bağlantı modunu seçin.",
				children: [{
					type: "name",
					title: "Otomatik",
					content: "Bu modda, internet bağlantısı kesildiğinde otomatik olarak tekrar bağlanır."
				},{
					type: "name",
					title: "Talep Üzerine",
					content: "Bu modda, belirlenen boş kalma süresi (Maksimum Boş Zaman) tamamlandıktan sonra internet bağlantısı otomatik olarak sonlandırılacaktır. Internete tekrar erişmeye çalıştığınızda, bağlantı tekrardan kurulur."
				},{
					type: "name",
				title: "Manuel Olarak",
				content: "Bu modda, internet bağlantısı Bağlan veya Bağlantıyı Kes butonlarına tıklayarak manuel olarak kontrol edilir. Bu mod Maksimum Boş Zaman fonksiyonunu da destekler. Internet bağlantısının Maksimum Boş Zaman alanında sona erdirilmeden önce pasif duruma geçebileceği maksimum zamanı dakika olarak girin. Varsayılan değer 15 dakikadır. Eğer internet bağlantınızın tüm zamanlarda aktif olmasını istiyorsanız, 0(sıfır) değerini girin."
				}]
			},{
				type:"paragraph",
				content:"Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "MAC Klon",
			CONTENT: [{
				type: "name",
				title: "Varsayılan MAC Adresini Kullan",
				content: "Router'ın varsayılan MAC adresini değiştirmeyin. Değiştirildiği durumda, ISS atanmış IP adresini MAC adresi ile bağlamaz."
			},{
				type: "name",
				title: "Şu Anki Bilgisayarın MAC Adresini Kullan",
				content: "Router'a bağlı bulunan bilgisayarın mevcut MAC adresini kopyala'yı seçin, bu durumda ISS atanan IP adresini bilgisayarın MAC adresi ile bağlayacak."
			},{
				type: "name",
				title: "Özel MAC Adresi Kullan",
				content: "MAC adresini manuel olarak girin, bu durumda ISS atanan IP adresini özel(belirlenen) MAC adresi ile bağlar."
			},{
				type:"paragraph",
				content:"Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "MAC Adresi",
				content: "Router'ın Ethernet (LAN) portuna atanan tek fiziksel adrestir."
			},{
				type: "name",
				title: "IP Adresi",
				content: "Router'ın web yönetimi sayfasına giriş için kullanılan router'ın varsayılan IP adresini gösterir ve iptal edilebilir."
			},{
				type: "name",
				title: "Alt Ağ Maskesi",
				content: "Açılır listeden LAN portu tarafından Dahili ve Harici trafik yönlendirmede kullanılan atanmış kimlikleyici seçin veya noktalı ondalık biçiminde yeni bir alt ağ maskesi girin."
			},{
				type: "note",
				title: "Uyarı",
				content: "Eğer yeni LAN IP adresi eskisiyle aynı alt ağda değilse, DHCP sunucundaki IP adres havuzu otomatik olarak yapılandırılacaktır; fakat Sanal Sunucu ve DMZ Ana Bilgisayar tekrar yapılandırılana kadar etkili olmayacaktır."
			},{
				type:"paragraph",
				content:"Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		IPTV:{
			TITLE: "Ayarlar",
			CONTENT: [{
					type: "name",
					title: "IGMP Vekil Sunucu(Proxy)",
					content: "IGMP (Internet Grup Yönetim Protokolü) Vekil Sunucu sürümünü ISS'nıza göre seçin (V2 ya da V3)."
				},{
					type: "name",
					title: "IGMP Sürümü",
					content: "ISS'nıza göre ya V2 yada V3 IGMP Proxy sürümünü seçiniz."
				},
				{
					type: "name",
					title: "IPTV",
					content: "IPTV özelliğini etkinleştirmek için bu seçeneği seçin."
				},
				{
					type: "name",
					title: "Mod",
					content: "ISS'nıza göre uygun olan modu seçin.",
					children: [
						{
							type: "name",
							title: "Köprü",
							content:"Eğer ISS'nız listede yoksa ve başka bir parametreye gerek yoksa, bu modu seçebilirsiniz ve router'ın LAN portu özelliğini yapılandırabilirsiniz.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "LAN portunuzun Internet sağlayıcısı mı yoksa IPTV sağlayıcısı mı olarak çalışacağını atayın."
							}]
						},
						{
							type: "name",
							title: "Rusya",
							content: "İnternet servis sağlayıcınız Rusya'dansa ve İnternet/IP-Telefonu /IPTV VLAN Kimlikleri ve Önceliği ve LAN (1/2/3/4) portu özellikleri dahil olmak üzere gerekli parametreler önceden tanımlanmışsa seçin.",
							children: [{
								type: "name",
								title: "IPTV Çoklu VLAN ID/Öncelik",
								content: "IPTV multicast özelliğini isterseniz etkinleştirebilir ve ISS'nıza göre VLAN kimliğini ve Önceliği yapılandırabilirsiniz."
							}]
						},
						{
							type: "name",
							title: "Singapur-ExStream",
							content: "Eğer ISS'nız Singapur'dan ExStream ise ve Internet/IPTV VLAN Kimlikleri ve Öncelik ve LAN(1/2/3/4) portu özelliklerini içeren  gerekli parametreler önceden belirlenmişse bu seçeneği seçin."
						},
						{
							type: "name",
							title: "Malezya-Unifi",
							content: "Eğer ISS'nız Malezya'dan Unifi ise ve Internet/IPTV VLAN Kimlikleri ve Öncelik ve LAN(1/2/3/4) portu özelliklerini içeren  gerekli parametreler önceden belirlenmişse bu seçeneği seçin."
						},
						{
							type: "name",
							title: "Malezya-Maxis",
							content: "Eğer ISS'nız Malezya'dan Maxis ise ve Internet/IP-Telefon/IPTV VLAN Kimlikleri ve Öncelik ve LAN(1/2/3/4) portu özelliklerini içeren  gerekli parametreler önceden belirlenmişse bu seçeneği seçin"
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "ISP'niz Portugal-MEO ise ve önceden tanımlı VLAN ID, Öncelik, LAN (1/2/3/4) port gibi parametreler gerekiyorsa seçiniz."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "ISP'niz Portugal-Vodafone ise ve önceden tanımlı Internet/IP-Phone/IPTV VLAN ID, Öncelik gibi parametreler gerekiyorsa seçiniz. Gerektiğinde sırasıyla (Internet sağlayıcı/IPTV sağlayıcı/IP-Phone sağlayıcı/Internet-IPTV sağlayıcı) fonksiyonları için LAN portlarınızı yeniden tanımlayabilirsiniz."
						},
						{
							type: "name",
							title: "Özel",
							content: "Eğer ISS'nız listede yoksa fakat Internet/IP-Telefon/IPTV VLAN Kimlikleri ve Öncelik, ve LAN (1/2/3/4) portu özelliklerini içeren gerekli parametreleri sağlıyorsa bu seçeneği seçin.",
							children: [{
								type: "name",
								title: "İnternet/IP-Telefon/IPTV VLAN ID/Öncelik",
								content: "VLAN Kimliklerini ve önceliklerini ISS'nız tarafından sağlandığı gibi yapılandırın."
							},{
								type: "name",
								title: "802.11Q Etiket",
								content: "Internet paketlerini 802.11Q ile etiketleyip etiketlemeyeceğinizi seçin."
							},{
								type: "name",
								title: "IPTV Çoklu VLAN ID/Öncelik",
								content: "IPTV multicast özelliğini isterseniz etkinleştirebilir ve ISS'nıza göre VLAN kimliğini ve Önceliği yapılandırabilirsiniz."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "LAN portlarınızın Internet sağlayıcısı mı yoksa IP-telefon sağlayıcısı mı ya da IPTV sağlayıcısı  olarak mı çalışacağını atayın."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Ayarlar",
			CONTENT: [{
				type: "name",
				title: "DHCP Sunucu",
				content: "Varsayılan olarak, DHCP (Dinamik Host Konfigürasyon Protokolü) Sunucusu etkinleştirilmiştir; bu sunucu istemci cihazlara IP adresi havuzundan TCP/IP parametreleri atar. Başka bir DHCP sunucusuna sahip değilseniz veya ağınızdaki her istemci cihaza TCP/IP parametrelerini manuel olarak atamak istemiyorsanız, DHCP sunucusunu devre dışı bırakmayın."
			},{
				type: "name",
				title: "IP Adres Havuzu",
				content: "İstemcilere kiralanabilecek IP adreslerinin aralığını girin."
			},{
				type: "name",
				title: "Adres Kiralama Süresi",
				content: "IP adresinin istemciye kiralanacağı süreyi 1-2880 dakika aralığında girin. Varsayılan 120 dakikadır."
			},{
				type: "name",
				title: "Varsayılan Ağ Geçidi",
				content: "LAN IP adresini girin.(İsteğe Bağlı)"
			},{
				type: "name",
				title: "Birincil DNS/İkincil DNS",
				content: "ISS'nız tarafından sağlanan parametreleri girin. (İsteğe Bağlı)"
			},{
				type:"paragraph",
				content:"Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Adres Rezervasyon",
			CONTENT: [{
				type: "paragraph",
				content: "Router'a bağlanan istemci için manuel olarak IP adresi ayırabilirsiniz. IP adresi bir kere ayrıldığında, DHCP sunucusu tarafından sadece aynı istemciye atanır."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "DHCP ayrılmış IP adresi ile istemcinin MAC adresini gösterir."
			},{
				type: "name",
				title: "Rezerve Edilmiş IP Adresi",
				content: "İstemcinin ayrılmış IP adresini gösterir."
			},{
				type: "name",
				title: "Tanım",
				content: "İstemci cihazının tanımını gösterir."
			},{
				type: "name",
				title: "Durum",
				content: "İstemci cihazının mevcut durumunu (etkin veya devre dışı) gösterir."
			},{
				type: "name",
				title: "Değişiklik",
				content: "İlgili istemciyi Değiştirme veya Silme seçeneklerini gösterir."
			},{
				type: "step",
				title: "Bir IP adresi ayırmak için",
				content:[
					"1. Ekle'ye tıklayın.",
					"2. İstediğiniz istemcinin MAC adresini girin.",
					"3. İstemci için ayırmak istediğiniz IP adresini girin.",
					"4. İstemci için tanım girin.",
					"5. Etkinleştir'i seçin.",
					"6. Tamam'a tıklayın."
				]
			},{
				type: "step",
				title: "Var olan bir istemciyi değiştirmek veya silmek için",
				content: "Tablodan, değiştirmek veya silmek istediğiniz istemci ile ilgili olan Düzelt simgesine veya Çöp simgesine tıklayın."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "DHCP İstemci Listesi",
			CONTENT: [{
				type: "name",
				title: "İstemci Sayısı",
				content: "Bağlantılı DHCP istemci sayısını gösterir."
			},{
				type: "name",
				title: "İstemci Adı",
				content: "DHCP istemcisinin adını gösterir."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "MAC adresini gösterir."
			},{
				type: "name",
				title: "Atanan IP Adresi",
				content: "DHCP sunucusu tarafından istemciye ayrılan IP adresini gösterir."
			},{
				type: "name",
				title: "Kiralama Süresi",
				content: "İstemciye kiralanan IP adresinin kalan süresini gösterir."
			},{
				type: "name",
				title: "Yenile",
				content: "DHCP İstemci Listesini güncellemek için tıklayın."
			}]
		},

		DDNS: {
			TITLE: "Dinamik DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dinamik DNS (Domain Adı Sistemi), dinamik bir Internet IP adresine sabit bir host ve domain adı tahsis etmenize olanak sağlar. Router'ın arkasında kendi web sitenizi, FTP sunucunuzu veya başka bir sunucu için hosting oluşturabilirsiniz. Öncelikle www.dyndns.com gibi bir DDNS servis sağlayıcıya üye olmanız gerekmektedir."
			},{
				type: "step",
				title: "Dinamik DNS kurmak için",
				content: [
					"1. DDNS servis sağlayıcınızı seçin.",
					"2. DDNS hesabınızın Kullanıcı Adını ve Şifresini girin.",
					"3.DDNS servis sağlayıcınızda kayıtlı olan domain adını giriniz.",
					"4. DDNS güncelleme talebinin gönderileceği zaman aralığını seçin.",
					"5. Eğer servis sağlayıcınız NO-IP ise, domain isminin WAN IP adresine bağlı olmasını sağlamak için WAN IP Binding seçiniz.",
					"6. Oturum Aç ve Kaydet'e tıklayınız."
				]
			},{
				type: "note",
				title:"Uyarı",
				content: "Eğer yeni DDNS hesabı kullanmak istiyorsanız, önce çıkış yapın ve sonra hesaba tekrar giriş yapın."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "Dinamik DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dinamik DNS (Domain Adı Sistemi), dinamik bir Internet IP adresine sabit bir host ve domain adı tahsis etmenize olanak sağlar. Router'ın arkasında kendi web sitenizi, FTP sunucunuzu veya başka bir sunucu için hosting oluşturabilirsiniz. Öncelikle www.dyndns.com gibi bir DDNS servis sağlayıcıya üye olmanız gerekmektedir."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Alan Adı Listesi",
			CONTENT: [{
				type: "paragraph",
				content: "Bu tabloda, TP-Link ID'nize kayıtlı Dinamik DNS domain adları görüntülenir."
			},{
				type:"step",
				title: "Yeni bir domain adı kaydetmek için",
				content: [
					"1. Kayıt Ol butonuna tıklayınız.",
					"2. Domain adı giriniz.",
					"3. Kaydet butonuna tıklayınız."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Statik Yönlendirme",
			CONTENT: [{
				type: "paragraph",
				content: "Statik yönlendirme belirlenen bir ana bilgisayara veya ağa ulaşmak amacıyla ağ bilgi paketleri için önceden belirlenen sabit yönlendirme için kullanılır. "
			},{
				type: "step",
				title: "Statik Yönlendirme kurmak için",
				content: [
					"1. Ekle'ye tıklayın.",
					"2. Ağ Hedef Varış Noktası - bu öğe için statik yönlendirme atamak için noktalı ondalık biçiminde IP adresi girin.",
					"3. Alt Ağ Maskesi - IP adresinin ağ miktarını ve ana bilgisayar miktarını belirlemek için noktalı ondalık biçimde alt ağ maskesi girin.",
					"4. Varsayılan Ağ Geçidi - Router'ı ağa veya ana bilgisayara bağlamak için noktalı ondalık biçimde ağ geçidi IP adresi girin.",
					"5. Arayüz - Ağ Hedef Varış Noktası'nı belirlemek için LAN'ı veya WAN'ı seçin.",
					"6. Tanımlama - Bu öğe için kısa bir tanımlama girin.",
					"7. Etkinleştir'i seçin.",
					"8. Tamam'a tıklayın."
				]
			},{
				type: "step",
				title: "Var olan bir öğeyi değiştirmek veya silmek için",
				content: "Tablodan, değiştirmek veya silmek istediğiniz öğe ile ilgili olan Düzelt simgesine veya Çöp simgesine tıklayın."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Sistem Yönlendirme Tablosu",
			CONTENT: [{
				type: "paragraph",
				content: "Sistem Yönlendirme Tablosu mevcut olarak kullanımda olan tüm geçerli yönlendirmeleri gösterir."
			},{
				type: "paragraph",
				content: "Yönlendirme tablosunu güncellemek için Yenile'ye tıklayın."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Ayarlar",
			CONTENT: [{
				type: "name",
				title: "Bölge",
				content: "Açılır menüden bölgenizi seçin. Eğer ülkeniz veya bölgeniz listede yoksa, bölgenizde kablosuz radyo kullanımı kısıtlanmış olabilir."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Kablosuz 2.4GHz",
			CONTENT: [{
				type: "name",
				title: "Kablosuz Radyoyu Etkinleştir",
				content: "2.4GHz kablosuz radyo frekansını etkinleştirmek için bu işaret kutucuğunu işaretleyin."
			},{
				type: "name",
				title: "Kablosuz Ağ Adı (SSID)",
				content: "Varsayılan Ağ Adını (SSID) olduğu gibi bırakabilirsiniz veya 32 karaktere kadar yeni bir ad girebilirsiniz. Bu alan büyük-küçük harf duyarlıdır."
			},{
				type: "name",
				title: "SSID Gizle",
				content: "Wi-Fi ağ listesinden 2.4GHz ağ adını (SSID) gizlemek istiyorsanız bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Güvenlik",
				content: "Belirtilen güvenlik seçeneklerinden birini seçin:",
				children: [{
					type: "name",
					title: "Şifreleme Yok",
					content: "Kablosuz güvenliği devre dışı bırakmak için bu seçeneği seçin. Kablosuz ağınızı yetkisiz erişimlerden korumak için kablosuz güvenliği etkinleştirmeniz kesinlikle önerilir."
				},{
					type: "name",
					title: "WPA/WPA2-Kişisel",
					content: "Ön Paylaşımlı Anahtar (PSK), ayrıca parola olarak adlandırılan standart kimlik doğrulama metodunu etkinleştirmek için bu seçeneği seçin. Bu seçenek tavsiye edilir. Eğer seçilirse, belirtilenleri yapılandırın.",
					children: [{
						type: "name",
						title: "Versiyon",
						content: "Kablosuz ağınız için bir güvenlik sürümü seçin.",
						children: [{
							type: "name",
							title: "Otomatik",
							content: "Bu seçenek WPA ve WPA2 gibi WPA (Wi-Fi Korumalı Erişim) standardının çoklu uygulamasını destekler."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Bu seçenek sadece TKIP şifrelemeyi destekler. TKIP şifreleme iyi seviyede güvenlik sağlar."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Bu seçenek AES şifrelemeyi destekler. AES şifreleme WPA-PSK'dan daha iyi seviyede güvenlik sağlar ve önerilir."
						}]
					},{
						type: "name",
						title: "Şifreleme",
						content: "Güvenlik şifreleme türü seçin: TKIP(Geçici Anahtar Bütünlüğü Protokolü), AES(Gelişmiş Şifreleme Standardı) veya Otomatik (hem TKIP hem AES). Eğer router 802.11n modunda çalışıyorsa TKIP şifrelemenin kullanılması önerilmez çünkü TKIP 802.11n özelliği tarafından desteklenmez. Eğer TKIP seçilirse, WPS fonksiyonu devre dışı kalacaktır. "
					},{
						type: "name",
						title: "Parola",
						content: "Bu alana 8 ila 63 arasında ASCII karakter veya 8 ila 64 arasında heksadesimal karakterden oluşan bir kablosuz şifresi giriniz."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Zenginleştirilmiş",
					content: "RADIUS (Arayan Kullanıcı Kimliğini Uzaktan Doğrulama Servisi)'ni kullanan daha gelişmiş kimlik doğrulama yöntemini etkinleştirmek için bu seçeneği seçin. Eğer seçilirse, WPS fonksiyonu devre dışı kalacaktır",
					children: [{
						type: "name",
						title: "Versiyon",
						content: "Kablosuz ağınız için bir güvenlik sürümü seçin.",
						children:[{
							type: "name",
							title: "Otomatik",
							content: "Bu seçenek WPA ve WPA2 gibi WPA (Wi-Fi Korumalı Erişim) standardının çoklu uygulamasını destekler."
						},{
							type: "name",
							title: "WPA",
							content: "Bu seçenek sadece TKIP şifrelemeyi destekler. TKIP şifreleme iyi seviyede güvenlik sağlar."
						},{
							type: "name",
							title: "WPA2",
							content: "Bu seçenek AES şifrelemeyi destekler. AES şifreleme WPA-PSK'dan daha iyi seviyede güvenlik sağlar ve önerilir."
						}]
					},{
						type: "name",
						title: "Şifreleme",
						content: "Güvenlik şifreleme türü seçin: TKIP(Geçici Anahtar Bütünlüğü Protokolü), AES(Gelişmiş Şifreleme Standardı) veya Otomatik (hem TKIP hem AES). Eğer router 802.11n modunda çalışıyorsa TKIP şifrelemenin kullanılması önerilmez çünkü TKIP 802.11n özelliği tarafından desteklenmez. Eğer TKIP seçilirse, WPS fonksiyonu devre dışı kalacaktır. "
					},{
						type: "name",
						title: "RADIUS Sunucu IP",
						content: "RADIUS sunucusunun IP adresini girin."
					},{
						type: "name",
						title: "RADIUS Portu",
						content: "RADIUS sunucusunun port numarasını girin."
					},{
						type: "name",
						title: "RADIUS Şifresi",
						content: "RADIUS sunucusunun paylaşımlı şifresini girin."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Eğer herhangi istemci cihazınız sadece WEP kullanan kablosuza bağlanabiliyorsa temel kimlik doğrulama yöntemini etkinleştirmek için bu seçeneği seçin.",
					children: [{
						type: "name",
						title: "Tip",
						content: "Kablosuz ağınız için kimlik doğrulama türü seçin. Varsayılan otomatik seçeneğidir. Bu seçenek, kablosuz istemcinin kapasitesine ve taleplerine dayanan Açık Sistem veya Paylaşılan Anahtarı otomatik olarak seçer."
					},{
						type: "name",
						title: "WEP Anahtar Formatı",
						content: "ASCII formatını kullanın veya Heksadesimal formatını seçin. ASCII formatı alfabetik ve sayısal karakterlerin birleşimidir. Heksadesimal format rakamların (0-9) ve harflerin (A-F, a-f) birleşimidir."
					},{
						type: "name",
						title: "Anahtar Tipi",
						content: "Bir WEP anahtar uzunluğu seçin.",
						children: [{
							type: "name",
							title: "64 Bit",
							content: "WEP değeri alanına 10 tane heksadesimal formatta(0-9, A-F, a-f) hane veya 5 ASCII karakteri girmenize olanak sağlar."
						},{
							type: "name",
							title: "128 Bit",
							content: "WEP değeri alanına 26 tane heksadesimal formatta(0-9, A-F, a-f) hane veya 13 ASCII karakteri girmenize olanak sağlar."
						}]
					},{
						type: "name",
						title: "Anahtar Değeri",
						content: "İlgili alana WEP anahtarı girin."
					}]
				}]
			},{
				type: "name",
				title: "Mod",
				content: "Bir iletim karma modu seçin."
			},{
				type: "name",
				title: "Kanal Genişliği",
				content: "2.4GHz kablosuz ağı için bir kanal genişliği (bant genişliği) seçin"
			},{
				type: "name",
				title: "Kanal",
				content: "2.4GHz kablosuz ağı için bir işletim kanalı seçin. Eğer kablosuz bağlantınızda kesintiler yoksa, bu kanalı otomatik olarak bırakmanız önerilir."
			},{
				type: "name",
				title: "İletim Gücü",
				content: "Veri iletim gücünü belirlemek için Yüksek, Orta veya Düşük seçeneklerinden birini seçin. Varsayılan ve önerilen ayar yüksek seçeneğidir."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Kablosuz 5GHz",
			CONTENT: [{
				type: "name",
				title: "Kablosuz Radyoyu Etkinleştir",
				content: "5GHz kablosuz radyo frekansını etkinleştirmek için bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Kablosuz Ağ Adı (SSID)",
				content: "Varsayılan Ağ Adını (SSID) olduğu gibi bırakabilir veya yeni bir ad girebilirsiniz (32 karaktere kadar). Bu alan büyük-küçük harf duyarlıdır."
			},{
				type: "name",
				title: "SSID Gizle",
				content: "5GHz ağ adını(SSID) Wi-Fi ağ listesinden gizlemek istiyorsanız, bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Güvenlik",
				content: "Belirtilen güvenlik seçeneklerinden birini seçin:",
				children: [{
					type: "name",
					title: "Şifreleme Yok",
					content: "Kablosuz güvenliği devre dışı bırakmak için bu seçeneği seçin. Kablosuz ağınızı yetkisiz erişimlerden korumak için kablosuz güvenliği etkinleştirmeniz kesinlikle önerilir."
				},{
					type: "name",
					title: "WPA/WPA2-Kişisel",
					content: "Ön Paylaşımlı Anahtar (PSK), ayrıca parola olarak adlandırılan standart kimlik doğrulama metodunu etkinleştirmek için bu seçeneği seçin. Bu seçenek tavsiye edilir. Eğer seçilirse, belirtilenleri yapılandırın.",
					children: [{
						type: "name",
						title: "Versiyon",
						content: "Kablosuz ağınız için bir güvenlik sürümü seçin.",
						children: [{
							type: "name",
							title: "Otomatik",
							content: "Bu seçenek WPA ve WPA2 gibi WPA (Wi-Fi Korumalı Erişim) standardının çoklu uygulamasını destekler."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Bu seçenek sadece TKIP şifrelemeyi destekler. TKIP şifreleme iyi seviyede güvenlik sağlar."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Bu seçenek AES şifrelemeyi destekler. AES şifreleme WPA-PSK'dan daha iyi seviyede güvenlik sağlar ve önerilir."
						}]
					},{
						type: "name",
						title: "Şifreleme",
						content: "Güvenlik şifreleme türü seçin: TKIP(Geçici Anahtar Bütünlüğü Protokolü), AES(Gelişmiş Şifreleme Standardı) veya Otomatik (hem TKIP hem AES). Eğer router 802.11n modunda çalışıyorsa TKIP şifrelemenin kullanılması önerilmez çünkü TKIP 802.11n özelliği tarafından desteklenmez. Eğer TKIP seçilirse, WPS fonksiyonu devre dışı kalacaktır. "
					},{
						type: "name",
						title: "Parola",
						content: "Bu alana 8 ila 63 arasında ASCII karakter veya 8 ila 64 arasında heksadesimal karakterden oluşan bir kablosuz şifresi giriniz."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Zenginleştirilmiş",
					content: "RADIUS (Arayan Kullanıcı Kimliğini Uzaktan Doğrulama Servisi)'ni kullanan daha gelişmiş kimlik doğrulama yöntemini etkinleştirmek için bu seçeneği seçin. Eğer seçilirse, WPS fonksiyonu devre dışı kalacaktır",
					children: [{
						type: "name",
						title: "Versiyon",
						content: "Kablosuz ağınız için bir güvenlik sürümü seçin.",
						children: [{
							type: "name",
							title: "Otomatik",
							content: "Bu seçenek WPA ve WPA2 gibi WPA (Wi-Fi Korumalı Erişim) standardının çoklu uygulamasını destekler."
						},{
							type: "name",
							title: "WPA",
							content: "Bu seçenek sadece TKIP şifrelemeyi destekler. TKIP şifreleme iyi seviyede güvenlik sağlar."
						},{
							type: "name",
							title: "WPA2",
							content: "Bu seçenek AES şifrelemeyi destekler. AES şifreleme WPA-PSK'dan daha iyi seviyede güvenlik sağlar ve önerilir."
						}]
					},{
						type: "name",
						title: "Şifreleme",
						content: "Güvenlik şifreleme türü seçin: TKIP(Geçici Anahtar Bütünlüğü Protokolü), AES(Gelişmiş Şifreleme Standardı) veya Otomatik (hem TKIP hem AES). Eğer router 802.11n modunda çalışıyorsa TKIP şifrelemenin kullanılması önerilmez çünkü TKIP 802.11n özelliği tarafından desteklenmez. Eğer TKIP seçilirse, WPS fonksiyonu devre dışı kalacaktır. "
					},{
						type: "name",
						title: "RADIUS Sunucu IP",
						content: "RADIUS sunucusunun IP adresini girin."
					},{
						type: "name",
						title: "RADIUS Portu",
						content: "RADIUS sunucusunun port numarasını girin."
					},{
						type: "name",
						title: "RADIUS Şifresi",
						content: "RADIUS sunucusunun paylaşımlı şifresini girin."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Eğer herhangi istemci cihazınız sadece WEP kullanan kablosuza bağlanabiliyorsa temel kimlik doğrulama yöntemini etkinleştirmek için bu seçeneği seçin.",
					children: [{
						type: "name",
						title: "Tip",
						content: "Kablosuz ağınız için kimlik doğrulama türü seçin. Varsayılan otomatik seçeneğidir. Bu seçenek, kablosuz istemcinin kapasitesine ve taleplerine dayanan Açık Sistem veya Paylaşılan Anahtarı otomatik olarak seçer."
					},{
						type: "name",
						title: "WEP Anahtar Formatı",
						content: "ASCII formatını kullanın veya Heksadesimal formatını seçin. ASCII formatı alfabetik ve sayısal karakterlerin birleşimidir. Heksadesimal format rakamların (0-9) ve harflerin (A-F, a-f) birleşimidir."
					},{
						type: "name",
						title: "Anahtar Tipi",
						content: "Bir WEP anahtar uzunluğu seçin.",
						children:[{
							type: "name",
							title: "64 Bit",
							content: "WEP değeri alanına 10 tane heksadesimal formatta(0-9, A-F, a-f) hane veya 5 ASCII karakteri girmenize olanak sağlar."
						},{
							type: "name",
							title: "128 Bit",
							content: "WEP değeri alanına 26 tane heksadesimal formatta(0-9, A-F, a-f) hane veya 13 ASCII karakteri girmenize olanak sağlar."
						}]
					},{
						type: "name",
						title: "Anahtar Değeri",
						content: "İlgili alana WEP anahtarı girin."
					}]
				}]
			},{
				type: "name",
				title: "Mod",
				content: "Bir iletim karma modu seçin."
			},{
				type: "name",
				title: "Kanal Genişliği",
				content: "5GHz kablosuz ağı için bir kanal genişliği seçin."
			},{
				type: "name",
				title: "Kanal",
				content: "5GHz kablosuz ağı için bir çalışma kanalı seçin. Eğer kablosuz bağlantınızda kesintiler yoksa, bu kanalı otomatik olarak bırakmanız önerilir."
			},{
				type: "name",
				title: "İletim Gücü",
				content: "Veri iletim gücünü belirlemek için Yüksek, Orta veya Düşük seçeneklerinden birini seçin. Varsayılan ve önerilen ayar yüksek seçeneğidir."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		WPS: {	
			TITLE: "Router'ın PINi",
			CONTENT: [{
				type: "paragraph",
				content: "Diğer cihazlar router'ın PIN'iyle WPS yoluyla bu router'a bağlanabilir."
			},{
				type: "name",
				title: "Router'ın PINi",
				content: "Router'ın PIN'ini (Kişisel Kimlik Numarası)'nı kullanarak diğer kablosuz cihazlarının router'a bağlanmasına izin vermek için açın."
			},{
				type: "name",
				title: "PIN",
				content: "Router'ın PIN'ini gösterir. Varsayılan PIN router'ın etiketindedir. Rasgele yeni PIN oluşturmak için oluştur butonuna tıklayın veya mevcut PIN'i varsayılan fabrika PIN'ine geri almak için Varsayılan butonuna tıklayın."
			}]
		},

		WPS_WIZARD: {
			TITLE: "WPS Sihirbazı",
			CONTENT:[{
				type: "name",
				title: "Push Button (Tavsiye Edilen)",
				content: "WPS özelliğinin, WPS butonunu veya esas olarak Bağlan butonunu kullanan kablosuz ağınıza herhangi bir WPS özellikli cihazın kolayca bağlanmasını sağlamak için bu kurulum yöntemini seçin."
			},{
				type: "name",
				title: "PIN",
				content: "Kablosuz cihazın WPS PIN'ini ilgili alana manuel olarak girerek bir cihaz eklemek için bu kurulum yöntemini seçin ve bağlan butonuna tıklayın."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Çevrimiçi Kablosuz İstasyonlar",
			CONTENT: [{
				type: "name",
				title: "İstemci Sayısı",
				content: "İlgili kablosuz istemcilerin sayısını gösterir."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "İlgili kablosuz istemcilerin MAC adresini gösterir."
			},{
				type: "name",
				title: "Bağlantı Tipi",
				content: "İlgili kablosuz istemcinin kablosuz frekans bandını (2.4GHz veya 5GHz) gösterir."
			},{
				type: "name",
				title: "Güvenlik",
				content: "İlgili kablosuz istemcinin güvenlik tipini gösterir."
			},{
				type: "name",
				title: "Alınan Paketler",
				content: "İlgili kablosuz istemci tarafından alınan paket değerini gösterir."
			},{
				type: "name",
				title: "Gönderilen Paketler",
				content: "İlgili kablosuz istemci tarafından gönderilen paket değerini gösterir."
			},{
				type: "paragraph",
				content: "Bu sayfadaki bilgileri güncellemek için Yenile'ye tıklayın."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Ayarlar",
			CONTENT: [{
				type: "paragraph",
				content: "Misafir ağı, misafirlerin kablosuz ağınıza erişmek için kullanabileceği ayrı bir kablosuz ağ adıyla (SSID) ve şifresiyle ayrı bir ağ kurmanıza olanak sağlar."
			},{
				type: "name",
				title: "Misafirlerin birbirlerini görmelerine izin ver",
				content: "Misafir ağındaki kablosuz cihazların birbirini görmesine izin vermek için bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Misafirlerin yerel ağıma erişmelerine izin ver",
				content: "Misafir ağındaki kablosuz cihazların sizin yerel ağ paylaşımlarınıza ve yazıcılarınıza erişmesine izin vermek için bu işaret kutucuğunu işaretleyin."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "2.4GHz/5GHz Kablosuz",
			CONTENT: [{
				type: "name",
				title: "Misafir Ağı Etkinleştir",
				content: "Misafir Ağı özelliğini etkinleştirmek için bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Kablosuz Ağ Adı (SSID)",
				content: "Varsayılan misafir SSID'sini kullanın veya 32 karaktere kadar yeni ad oluşturun."
			},{
				type: "name",
				title: "SSID Gizle",
				content: "Eğer Wi-Fi ağ listesinden misafir SSID'sini gizlemek istiyorsanız bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Güvenlik",
				content: "Asla şifreyi güncelleme seçeneğini seçerseniz, belirtilen güvenlik seçeneklerinden birini seçin:",
				children: [{
					type: "name",
					title: "Şifreleme Yok",
					content: "Kablosuz güvenliği devre dışı bırakmak için bu seçeneği seçin. Misafir ağınızı yetkisiz erişimlerden korumak için kablosuz güvenliği etkinleştirmeniz kesinlikle önerilir."
				},{
					type: "name",
					title: "WPA/WPA2-Kişisel",
					content: "Ön Paylaşımlı Anahtar (PSK) (Anahtar Parolası)'na dayanan standart kimlik doğrulama yöntemini etkinleştirmek için bu seçeneği seçin. Bu seçenek önerilir. Eğer seçilirse, belirtilenleri yapılandırın.",
					children: [{
						type: "name",
						title: "Versiyon",
						content: "Misafir ağınız için bir güvenlik sürümü seçin.",
						children: [{
							type: "name",
							title: "Otomatik",
							content: "Bu seçenek WPA ve WPA2 gibi WPA (Wi-Fi Korumalı Erişim) standardının çoklu uygulamasını destekler."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Bu seçenek sadece TKIP şifrelemeyi destekler. TKIP şifreleme iyi seviyede güvenlik sağlar."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Bu seçenek AES şifrelemeyi destekler. AES şifreleme WPA-PSK'dan daha iyi seviyede güvenlik sağlar ve önerilir."
						}]
					},{
						type: "name",
						title: "Şifreleme",
						content: "Güvenlik şifreleme türü seçin: TKIP(Geçici Anahtar Bütünlüğü Protokolü), AES(Gelişmiş Şifreleme Standardı) veya Otomatik (hem TKIP hem AES). Eğer router 802.11n modunda çalışıyorsa TKIP şifrelemenin kullanılması önerilmez çünkü TKIP 802.11n özelliği tarafından desteklenmez. Eğer TKIP seçilirse, WPS fonksiyonu devre dışı kalacaktır. "
					}]
			}]},{
				type: "name",
				title: "Parola",
				content: "Rasgele şifre oluşturmayı kullanabilir. 8 ve 63 arasında ASCII karakter veya heksadesimal sayı sisteminde(0-9, a-f, A-F) 8-64 karakter arası olacak şekilde şifre oluşturabilirsiniz."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},

		NAT: {
			TITLE: "Uygulama Katmanı Ağ Geçidi (ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG ağ geçidine bağlanacak olan kişiselleştirilmiş Ağ Adresi Dönüştürme (NAT) gezinme filtrelerine, FTP,TFTP H323 gibi bazı uygulama katman ''kontrol/veri'' protokolleri için adres destekleme ve port dönüştürme amacıyla izin verir. ALG'nin etkileştirilmesi önerilir."
			},{
				type: "name",
				title: "FTP ALG Etkinleştir",
				content: "Eğer seçilirse, FTP (Dosya Aktarım Protokolü) istemcilerinin ve sunucularının NAT yoluyla veri aktarmasına olanak sağlar."
			},{
				type: "name",
				title: "TFTP ALG Etkinleştir",
				content: "Eğer seçilirse, TFTP (Önemsiz Dosya Aktarım Protokolü) istemcilerinin ve sunucularının NAT yoluyla veri aktarmasına olanak sağlar."
			},{
				type: "name",
				title: "H323 ALG Etkinleştir",
				content: "Eğer seçilirse, NetMeeting istemcilerinin NAT yoluyla iletişim kurmalarına olanak sağlar."
			},{
				type: "name",
				title: "RTSP ALG Etkinleştir",
				content: "Eğer seçilirse, ortam yürütücüsü istemcilerinin NAT yoluyla duraksız iletimli medya sunucularıyla iletişim kurmalarına olanak sağlar."
			},{
				type: "name",
				title: "PPTP Passthrough Etkinleştir",
				content: "Eğer seçilirse, noktadan noktaya olan oturumlarının IP ağı ve doğrudan router vasıtası ile tünel kurmasına olanak sağlar."
			},{
				type: "name",
				title: "L2TP Passthrough Etkinleştir",
				content: "Eğer seçilirse, noktadan noktaya katman 2 oturumlarının IP ağı ve doğrudan router vasıtası ile tünel kurmasına olanak sağlar."
			},{
				type: "name",
				title: "IPSec Passthrough Etkinleştir",
				content: "Eğer seçilirse, Internet Protokol Güvenliğinin (IPSec) IP ağı ve doğrudan router vasıtası ile tünel kurmasına olanak sağlar. IPSec IP ağları üzerindeki özelliği ve güvenliği sağlamak amacıyla şifrelemeli güvenlik servisi kullanır."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Sanal Sunucu",
			CONTENT: [{
				type: "paragraph",
				content: "Sanal Sunucular yerel ağınızda kamu servisi kurulumu yapmanız için kullanılır. Sanal sunucu harici port olarak tanımlanır ve internetten bu harici porta gelen tüm istekler statik veya ayrılmış IP adresi ile yapılandırılmış olması gereken belirlenmiş bir bilgisayara yeniden yönlendirilecektir. "
			},{
				type: "name",
				title: "Servis Tipi",
				content: "Sanal sunucunun adını gösterir."
			},{
				type: "name",
				title: "Harici Port",
				content: "Sanal sunucu tarafından kullanılan portu sayısını veya portlarının aralığını gösterir."
			},{
				type: "name",
				title: "Dahili IP",
				content: "Servis uygulamasında çalışan bilgisayarın IP adresini gösterir."
			},{
				type: "name",
				title: "Dahili Port",
				content: "Servis uygulamasında çalışan bilgisayarın portu sayısını gösterir."
			},{
				type: "name",
				title: "Protokol",
				content: "Servis uygulaması için kullanılan protokolü gösterir: TCP,UDP veya Tümü (Tüm protokoller router tarafından desteklenir.)"
			},{
				type: "name",
				title: "Durum",
				content: "Özel filtreleme kuralının mevcut durumunu (etkin veya devre dışı) gösterir."
			},{
				type: "name",
				title: "Değişiklik",
				content: "İlgili kuralın Değiştir veya Sil seçeneğini gösterir."
			},{
				type: "step",
				title: "Sanal sunucu kuralını yüklemek için",
				content: [
					"1. Ekle'ye tıklayın.",
					"2. Harici port ve Dahili port alanlarında uygun port değerlerini otomatik olarak doldurmak için ve listeden servis seçmek için Şu Anki Servisleri Göster'e tıklayın. Eğer servis listelenmemişse, harici port değeri girin (örn: 21) veya port aralığı girin (örn:21-25). Eğer dahili port harici port ile aynıysa dahili portu boş bırakın veya eğer harici port tek port ise özel bir port değeri girin (örn: 21).Dahili IP alanına, servis uygulamasını çalıştıran bilgisayarın IP adresini noktalı ondalık biçimde girin.",
					"3. Servis uygulaması için bir protokol seçin: TCP, UDP, veya açılır listedeki protokollerin hepsi.",
					"4. Etkinleştir'i seçin.",
					"5. Tamam'a tıklayın."
				]
			},{
				type: "step",
				title: "Sanal Sunucu kuralını değiştirmek veya silmek için",
				content: "Tablodan, değiştirmek veya silmek istediğiniz kuralla ilgili olan Düzenle simgesine veya Çöp simgesine tıklayın."
			},{
				type: "step",
				title: "Çoklu kural silmek için",
				content: "Silmek istediğiniz tüm kuralları seçin, tablonun üstünden Sil butonuna tıklayın."
			},{
				type: "note",
				title: "Uyarı",
				content: "Eğer yerel ana bilgisayar cihazınız mevcut servislerden tek tipten fazlasına ev sahipliği yapıyorsa, her servis için bir kural oluşturmanız gereklidir."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Port Tetikleme",
			CONTENT: [{
				type: "paragraph",
				content: "Port Tetikleme akışı belirli portundan ağdaki belirli bir sunucuya iletmek için kullanılır."
			},{
				type: "name",
				title: "Uygulama",
				content: "Uygulamanın adını gösterir."
			},{
				type: "name",
				title: "Tetiklenen Port",
				content: "Çıkış bağlantısının filtreleme kuralını tetiklemek için kullanılan çıkış akışını gösterir."
			},{
				type: "name",
				title: "Tetikleyici Protokol",
				content: "Tetikleme portu için kullanılan protokolü gösterir. TCP, UDP veya Tümü (Router tarafından desteklenen tüm protokoller)."
			},{
				type: "name",
				title: "Harici Port",
				content: "Uzak sistem tarafından kullanılan portunu veya port aralığını gösterir. Bu portlardan birini kullanan yanıt bu kuralı tetikleyen PC'ye iletilecektir. En fazla 5 grup port girebilirsiniz (veya port bölümü). Her bir port grubu virgül (,) ile ayrılmalıdır. Örneğin, 2000-2038i 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Harici Protokol",
				content: "Gelen portlar için kullanılan protokolü gösterir: TCP, UDP veya Tümü ( Tüm protokoller router tarafından desteklenir.)"
			},{
				type: "name",
				title: "Durum",
				content: "Özel filtreleme kuralının mevcut durumunu (etkin veya devre dışı) gösterir."
			},{
				type: "name",
				title: "Değişiklik",
				content: "İlgili kuralın Değiştir veya Sil seçeneğini gösterir."
			},{
				type: "step",
				title: "Port Tetikleyici kuralını kurmak için",
				content: [{
					type: "note",
					title: "Uyarı",
					content: "Her kural bir seferde sadece bir ana bilgisayar tarafından kullanılabilir."
				},
					"1. Ekle'ye tıklayın.",
					"2. Varsayılan değerleri uygun alanlara otomatik olarak doldurmak için ve listeden uygulama seçmek için Şu Anki Uygulamaları Göster'e tıklayın. Eğer listelenmemiş bir uygulama eklemek istiyorsanız, uygulamayı, tetikleyici portu, tetikleyici protokolü, Harici portu ve harici protokolü manuel olarak girin.",	
					"3. Etkinleştir'i seçin.",
					"4. Tamam'a tıklayın."
				]
			},{
				type: "step",
				title: "Port Tetikleyici kuralını değiştirmek veya silmek için",
				content: "Tablodan, değiştirmek veya silmek istediğiniz kuralla ilgili olan Düzenle simgesine veya Çöp simgesine tıklayın."
			},{
				type: "step",
				title: "Çoklu Port kuralı silmek için",
				content: "Silmek istediğiniz tüm kuralları seçin, tablonun üstünden Sil butonuna tıklayın."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "DMZ ana bilgisayar özelliği yerel ana bilgisayarın Internet oyunu veya video konferansı gibi özel-amaçlı servisler için internete maruz kalmasına izin verir. Temel olarak, DMZ LAN'ınızdaki tek bir bilgisayarın tüm portları açmasına olanak saplar. Bu bilgisayarın statik bir IP adresiyle yapılandırması gerekmektedir ve bu bilgisayarın DHCP istemci fonksiyonu devre dışı olmalıdır."
			},{
				type: "step",
				title: "DMZ sunucusu olacak şekilde bilgisayar veya sunucu atamak için",
				content: [
					"1. DMZ'yi etkinleştir'i seçin.",
					"2. DMZ ana bilgisayar IP Adresi alanında, DMZ ana bilgisayarı gibi kurulum yapmak için yerel bilgisayarın IP adresini girin.",
					"3. Kaydet butonuna tıklayınız."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Varsayılan olarak bilgisayar ve internet araçları gibi cihazların yerel ağda otomatik olarak birbirini keşfetmesi ve iletişim kurması için  UPnP (Evrensel tak çalıştır) özelliği etkinleştirilmiştir."
			},{
				type: "paragraph",
				content: "UPnP Servis Listesi UPnP cihaz bilgisini gösterir."
			},{
				type: "name",
				title: "Servis Tanımı",
				content: "UPnP isteklerini başlatan yerel ana bilgisayarın kısa tanımını gösterir."
			},{
				type: "name",
				title: "Harici Port",
				content: "Yerel ana bilgisayar tarafından açılan harici portunu gösterir."
			},{
				type: "name",
				title: "Protokol",
				content: "Yerel ana bilgisayar tarafından kullanılan ağ protokol türünü gösterir."
			},{
				type: "name",
				title: "Dahili IP Adresi",
				content: "Yerel ana bilgisayar ağının IP adresini gösterir."
			},{
				type: "name",
				title: "Dahili Port",
				content: "Yerel ana bilgisayar tarafından açılan dahili portunu gösterir."
			},{
				type: "paragraph",
				content: "UPnP Servis Listesini güncellemek için Yenile'ye tıklayın."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Cihaz Ayarları",
			CONTENT: [{
				type: "paragraph",
				content: "Cihaz Ayarları sayfası USB portu aracılığıyla bağlanmış olan herhangi bir USB bellek cihazının ilgili bilgisini gösterir."
			},{
				type: "name",
				title: "Tara",
				content: "Genellikle, router otomatik olarak yeni takılmış cihazı algılar. Eğer algılamıyorsa, herhangi yeni bağlanan cihazı taramak için bu butona basın ve güncellenmiş bilgiyle sayfayı yenileyin."
			},{
				type: "name",
				title: "Birim",
				content: "USB biriminin adını gösterir."
			},{
				type: "name",
				title: "Kapasite",
				content: "USB'nin toplam bellek kapasitesini gösterir."
			},{
				type: "name",
				title: "Boş Alan",
				content: "Mevcut ve musait boş bellek alanını gösterir."
			},{
				type: "name",
				title: "Güvenle Kaldır",
				content: "Fiziksel olarak USB belleğin router'dan bağlantısını kesmeden önce, USB bellek cihazını güvenli bir şekilde kaldırmak için bu butona tıklayın."
			},{
				type: "paragraph",
				content: "Lütfen dikkat edin ki Güvenli Kaldır butonu sadece router'a bağlı bir USB bellek cihazı varsa belirir ve mevcut birim meşgulken USB cihazını çıkaramayabilirsiniz."
			},{
				type: "name",
				title: "Aktif",
				content: "Bu işaret kutucuğu sadece router'a bağlı bir USB bellek cihazı varsa belirir. USB cihazının dosya paylaşımını etkinleştirmek için bu seçeneği seçin."
			},{
				type: "step",
				title: "Dosya sunucusu kurmak için",
				content: [
				"1. USB kablosu kullanarak USB bellek cihazını router'ın USB portuna takın.",
				"2. Yeni takılan USB cihazı router tarafından otomatik olarak algılanmalıdır ve bilgiler Cihaz Ayarları kısmında görünmelidir. Eğer algılanmadıysa, görünmüyorsa, Tara'ya tıklayın.",
				"3. Dosya paylaşımını etkinleştirmek için Aktif'i seçin."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Paylaştırılan Hesap",
			CONTENT: [{
				type: "name",
				title: "Hesap",
				content: "Paylaşılan dosyalara ve klasörlere giriş yapmak için Varsayılan Hesabı Kullan'ı seçebilirsiniz veya Yeni Hesap Kullan'ı seçebilirsiniz ve yeni kullanıcı hesabı oluşturmak için belirtilenleri girin."
			},{
				type: "name",
				title: "Kullanıcı Adı/Şifre",
				content: "Alfanumerik veya 15 karakter uzunluğunda karakter dizini girin. Kullanıcı adı alfabe karakteri ile başlamalıdır. Bu alanlar büyük-küçük harf duyarlıdır."
			},{
				type: "name",
				title: "Şifreyi Doğrula",
				content: "Yazım yanlışı olmadığını onaylamak için şifrenizi tekrar girin. Bu alan büyük-küçük harf duyarlıdır."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Paylaşım Ayarları",
			CONTENT: [{
				type: "name",
				title: "Ağ/Medya Sunucu Adı",
				content: "Bağlı bulunan USB bellek cihazına erişim için kullanılan adı gösterir."
			},{
				type: "name",
				title: "Etkin",
				content: "Erişim yöntemini etkinleştirmek için seçin."
			},{
				type: "name",
				title: "Erişim Metodu",
				content: "Bağlı bulunan USB bellek cihazına erişime izin vermek için üç erişim yöntemi vardır. İlgili işaret kutucularını seçerek bir veya daha fazla erişim yöntemi seçebilirsiniz.",
				children: [{
					type: "name",
					title: "Ağ Komşusu",
					content: "Eğer etkinleştirilmişse, ağınızdaki kullanıcılar atanan IP adresini kullanarak USB bellek cihazına erişebilir. (örn: \\\\192.168.0.1)."
				},{
					type: "name",
					title: "FTP  ",
					content: "Eğer etkinleştirilmişse, yerel ağınızdaki FTP istemcileri atanan IP adresini ve bunu takiben FTP sunucusunun port sayılarını kullanarak USB bellek cihazına erişebilirler. (örn: ftp://192.168.0.1:21)"
				},{
					type: "name",
					title: "FTP (Internet aracılığıyla)",
					content: "Eğer etkinleştirilmişse, Internet üzerinden FTP aracılığıyla kullanıcılar USB bellek sürücüsüne uzaktan erişebilirler. Bu özellik hem indirilen hem yüklenen dosyaları destekler. FTP sunucusunun port sayısını değiştirmek için port sayısı girin ve değişiklikleri uygulamak için Kaydet'e tıklayın."
				}]
			},{
				type: "name",
				title: "Bağlantı",
				content: "Paylaşılan USB bellek cihazına erişmek için kullanılan adresi gösterir."
			},{
				type: "name",
				title: "Port",
				content: "FTP sunucusunun port numarasını görüntüler. Varsayılan değer olan 21'i ya da 1024 ila 65535 arası bir değeri kullanın."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Dosya Paylaşımı",
			CONTENT: [{
				type: "name",
				title: "Hepsini Paylaş",
				content: "Tüm dosya ve klasörleri paylaşmak için Açın veta sadece seçili klasörleri paylaşmak için Kapatın."
			},{
				type: "name",
				title: "Kimlik Doğrulamayı Etkinleştir",
				content: "Kullanıcıların paylaşılan dosyalara erişmesi için geçerli kullanıcı adı ve şifresi girmesini gerektiren kimlik doğrulamayı etkinleştirmeniz kesinlikle önerilir."
			},{
				type: "name",
				title: "Dosya Adı",
				content: "Paylaşılan dosyanın adını gösterir."
			},{
				type: "name",
				title: "Dosya Yolu",
				content: "Dosyanın paylaşım yolunu gösterir."
			},{
				type: "name",
				title: "Medya Paylaşımı",
				content: "Paylaşılan dosyanın medya paylaşımına izin verilip verilmediğini gösterir."
			},{
				type: "name",
				title: "Birim Adı",
				content: "Paylaşılan birimin adını gösterir."
			},{
				type: "name",
				title: "Durum",
				content: "Ampul göstergesiyle paylaşılan klasörün durumunu gösterir."
			},{
				type: "name",
				title: "Değişiklik",
				content: "İlgili paylaşılan klasörün Değiştir veya Sil seçeneklerini gösterir."
			},{
				type: "name",
				title: "Gözat",
				content: "Paylaşılan klasörü aramak için tıklayın."
			},{
				type: "name",
				title: "Misafir Ağ Erişimini Etkinleştir",
				content: "Misafir Ağındaki istemcilerin paylaşılan dosyaya erişimine izin vermek için seçin."
			},{
				type: "name",
				title: "Kimlik Doğrulamayı Etkinleştir",
				content: "Kullanıcıların paylaşılan klasörlere erişmesi için geçerli bir kullanıcı adı ve şifresi girmesini gerektirmesini istiyorsanız seçin."
			},{
				type: "name",
				title: "Yazma Erişimini Etkinleştir",
				content: "Kullanıcıların klasör içeriğinde değişiklikler yapmasına izin vermek için seçin."
			},{
				type: "name",
				title: "Medya Paylaşımını Etkinleştir",
				content: "Medya paylaşımını etkinleştirmek için seçin."
			},{
				type: "name",
				title:"Yenile",
				content: "Paylaşılan Klasör Listesini güncellemek için tıklayın."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Yazdırma Sunucusu",
			CONTENT: [{
				type: "name",
				title:"Yazdırma Sunucusu",
				content: "Yazıcı sunucusu fonksiyonunu etkinleştrimek için açın."
			},{
				type: "name",
				title:"Yazıcı Adı",
				content: "Router'a bağlı olan yazıcınızın adını gösterir."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Ebeveyn Kontrolü",
			CONTENT: [{
				type: "paragraph",
				content: "Ebeveyn Kontrolü ile, uygunsuz, açık ve kötü amaçlı websiteleri engelleyebilirsiniz; günün bazı zamanlarında erişimi kısıtlayabilirsiniz (örneğin, ödev zamanında Facebook'u veya YouTube'u kısıtlamak gibi); ve aynı zamanda tek merkezi kontrol noktası aracılığıyla ev ağınızdaki her cihazı kötü amaçlı yazılımlara ve kimlik hırsızlığına karşı koruyabilirsiniz."
			},{
				type: "name",
				title: "Ebeveyn Kontrolü",
				content: "Ebeveyn Kontrolü özelliğini etkinleştirmek için Açın."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Ebeveyn Kontrolündeki Cihazlar",
			CONTENT: [{
				type: "name",
				title: "Cihaz Adı",
				content: "Bağlı olan ve ebeveyn kontrolünde bulunan tüm istemci cihazların adını gösterir."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Bağlı olan ve ebeveyn kontrolünde bulunan tüm istemci cihazların MAC adresini gösterir."
			},{
				type: "name",
				title: "Internet Erişim Zamanı",
				content: "Bu sayfada kısıtlı erişim zaman periyotları görüntülenir.  Zaman takvimi \"Sistem Araçları -> Zaman Ayarları\" sayfasında ayarlı olan router'ın sistem zamanına bağlıdır."
			},{
				type: "name",
				title: "Tanım",
				content: "Bağlı olan cihazın kısa bir tanımını gösterir."
			},{
				type: "name",
				title: "Durum",
				content: "İlgili cihazın ebeveyn kontrolünün mevcut durumunu gösterir. (etkin veya devre dışı)."
			},{
				type: "name",
				title: "Değişiklik",
				content: "İlgili cihazın Değiştir veya Sil seçeneklerini gösterir."
			},{
				type: "step",
				title: "Yeni bir istemci cihazı kısıtlamak için",
				content: [
					"1. Ekle'ye tıklayın.",
					"2. Şu Anki Cihazları Göster'e tıklayın ve Erişim Cihazları Listesinden mevcut olarak bağlı olan bir cihaz seçin; veya bağlı olmayan bir cihazı eklemek için Cihaz Adını ve MAC adresini manuel olarak girin.",
					"3. Zaman dilimi boyunca hangi kısıtlamanın uygulanacağını belirlemek için İnternet Erişim Zamanı simgesine tıklayın.",
					"4. Tanımlama alanına kısa bir tanım girin.(İsteğe bağlı).",
					"5. Etkinleştir'i seçin.",
					"6. Tamam'a tıklayın."
				]
			},{
				type: "paragraph",
				content: "Bir ebeveyn kontrolü kaydını değiştirmek veya silmek için, bilgileri düzeltmek için Düzelt simgesine veya ilgili öğeyi kaldırmak için Çöp simgesine tıklayın."
			},{
				type: "paragraph",
				content: "Çoklu öğe silmek için, tüm öğeleri seçin ve tablonun üstündeki Sil'e tıklayın."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "İçerik Kısıtlama",
			CONTENT: [{
				type: "name",
				title: "Kara Liste",
				content: "Ebeveyn kontrol listesinde belirtilen istemci cihazlarından herhangi bir websitesine erişimi engellemek için kullanılacak olan anahtar sözcükleri içerir. ",
				children: [{
					type: "paragraph",
					content: "Kara listeye anahtar sözcük eklemek için Yeni Anahtar Sözcük Ekle'ye tıklayın. Anahtar sözcük silmek için silmek istediğiniz sözcüğün (-) simgesine tıklayın."
				}]
			},{
				type: "name",
				title: "Beyaz Liste",
				content: "Ebeveyn kontrol listesinde belirtilen istemci cihazlarının erişmesine izin verilen website adreslerini içerir.",
				children: [{
					type: "paragraph",
					content: "Beyaz listeye bir website eklemek için Yeni Etki Alanı Adı Ekle'ye tıklayın. Bir websiteyi silmek için, silmek istediğiniz websitesinin (-) simgesine tıklayın."
				}]
			},{
				type: "paragraph",
				content: "Anahtar kelimeler  www.mail.google.com veya www.facebook.com gibi etki alanı adları olabilir."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "Servis Kalitesi (QoS) internet akışını ihtiyaçlarınıza göre önceliklendirmenize yardımcı olur. Bir cihaz için veya QoS kuralları listesindeki bir uygulama için öncelik seviyesi belirleyebilirsiniz."
			},{
				type: "name",
				title: "QoS Etkinleştir",
				content: "QoS fonksiyonunu etkinleştirmek için bu kutuyu seçin"
			},{
				type: "name",
				title: "Upload Bant Genişliği",
				content: "ISS'nız tarafından sağlanan maksimum yükleme bant genişliğini girin."
			},{
				type: "name",
				title: "Download Bant Genişliği",
				content: "ISS'nız tarafından sağlanan maksimum indirme bant genişliğini girin. "
			},{
				type: "name",
				title: "Yüksek Öncelikli",
				content: "Yüksek öncelikli akış için yüzde belirleyin."
			},{
				type: "name",
				title: "Orta Öncelikli",
				content: "Orta öncelikli akış için yüzde belirleyin."
			},{
				type: "name",
				title: "Düşük Öncelikli",
				content: "Düşük öncelikli akış için yüzde belirleyin."
			},{
				type: "note",
				title: "Uyarı",
				content: "Tüm önceliklerin maksimum miktarı(yüzdesi) 1'dir."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		QOS_RULE: {
			TITLE: "QoS Kural Listesi",
			CONTENT: [{
				type: "name",
				title: "Tip",
				content: "QoS kural listesine eklemek için tür seçin."
			},{
				type: "step",
				title: "Cihaz ile yüksek/orta/düşük öncelikler için kural kurmak için",
				content: [
					"1. Ekle'ye tıklayın.",
					"2. Cihaz ile Seçin.",
					"3. Erişim Cihazları Listesinden istediğiniz cihazı seçmeniz için Şu Anki Cihazları Göster'e tıklayın veya Cihaz Adı ve MAC Adresi alanlarına manuel olarak cihaz adı ve cihazın MAC adresini girebilirsiniz.",
					"4. Tamam'a tıklayın."
				]
			},{
				type: "step",
				title: "Uygulama ile yüksek/orta/düşük öncelikler için kural kurmak için",
				content: [
					"1. Ekle'ye tıklayın.",
					"2. Uygulama ile seçin.",
					"3. Uygulamalar listesinden istediğiniz uygulamayı seçin veya uygun alanlara isim, protokol ve hedef port (1-65535) değerlerini yapılandırarak bir uygulama özelleştirebilirsiniz. Tek bir port veya virgül kullanarak birden çok port aralığı girebilirsiniz (örneğin 21,36-105,111).",
					"4. Tamam'a tıklayın."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Veritabanını Güncelle",
			CONTENT: [{
				type: "name",
				title: "Yeni Veritabanı Dosyası",
				content: "Yeni veritabanı dosyanızı konumlandırmak için Göz At'a tıklayın. Veritabanınızı daha yeni sürüme güncellenmek için, dosyayı seçin ve Güncelle'ye basın."
			},{
				type: "name",
				title: "Veritabanı Sürümü",
				content: "Mevcut veritabanı sürümünü gösterir."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Güvenlik Duvarı",
			CONTENT: [{
				type: "name",
				title: "SPI Güvenlik Duvarı",
				content: "Durum Paket Denetimi (SPI) güvenlik duvarı siber saldırıları önler ve protokole baz larak router'dan geçen akışı yasallaştırır."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "Dos Koruma",
			CONTENT: [{
				type: "name",
				title: "Dos Koruma",
				content: "Servis Engelleme (DoS) Koruması LAN'ınızı ağınızı sunucu istekleriyle boğan DoS saldırılarına karşı korur."
			},{
				type: "name",
				title: "ICMP-FLOOD Atak Filtreleme",
				content: "Internet Kontrol Mesaj Protokolü (ICMP) boğma saldırılarını önlemek için etkinleştirin.",
				children: [{
					type: "name",
					title: "Kapalı",
					content: "Koruma Yok."
				},{
					type: "name",
					title: "Düşük",
					content: "Düşük seviyede koruma ve router'ın performansına düşük etki."
				},{
					type: "name",
					title: "Orta",
					content: "Orta derece seviyede koruma ve router'ın performansında yarım-fark edilebilir etki."
				},{
					type: "name",
					title: "Yüksek",
					content: "Yüksek seviyede koruma fakat router'ın performansında fark edilebilir etki."
				}]
			},{
				type: "name",
				title: "UDP-FLOOD Atak Filtreleme",
				content: "Kullanıcı Veri Paket Protokolü (UDP) saldırılarını önlemek için etkinleştirin."
			},{
				type: "name",
				title: "TCP-SYN-FLOOD Atak Filtreleme",
				content: "İletim Kontrol Protokolü-Senkronize (TCP-SYN) saldırılarını önlemek için etkinleştirin."
			},{
				type: "name",
				title: "WAN Portundan Gelen Ping Paketlerini Yoksay",
				content: "WAN portundan ping paketlerini engellemek için etkinleştirin."
			},{
				type: "name",
				title: "LAN Portundan Gelen Ping Paketlerini Yasakla",
				content: "LAN portlarından ping paketlerini yasaklamak için etkinleştirin."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Engellenmiş DoS Host Listesi",
			CONTENT: [{
				type: "name",
				title: "Engellenmiş DoS Host Listesi",
				content: "Herhangi engellenmiş DoS saldırı kaynağından IP adresi ve MAC adresi listeler."
			},{
				type: "step",
				title: "Bir öğeyi silmek için",
				content: "Ana bilgisayar Listesinde, silmek istediğiniz öğeyi seçin ve tablonun üstündeki Sil'e tıklayın."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Erişim Kontrolü",
			CONTENT: [{
				type: "paragraph",
				content: "Erişim Kontrolü ile belirli bilgisayarları ve diğer cihazları ağınıza erişimine izin verebilir veya engelleyebilirsiniz. Bir cihazı engellediğinizde, o cihaz Internet veya diğer cihazlar ile iletişim kuramaz."
			},{
				type: "paragraph",
				content: "Erişim Kontrolünü kullanmak için, bu özelliği etkinleştirin ve kara liste veya beyaz liste belirleyin. Eğer erişim kontrolü devre dışıysa(Kapalı), kara listede olanlar dahil tüm cihazların bağlantısına izin verilir."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Erişim Modu",
			CONTENT: [{
				type: "name",
				title: "Kara Liste",
				content: "Sadece kara listedeki cihazların ağınıza erişimi engellenecek."
			},{
				type: "name",
				title: "Beyaz Liste",
				content: "Sadece beyaz listedeki cihazların ağınıza erişimine izin verilecek."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Cihazlar Çevrimiçi",
			CONTENT: [{
				type: "name",
				title: "Cihaz Adı",
				content: "Bağlı olan cihazın adını gösterir."
			},{
				type: "name",
				title: "IP Adresi",
				content: "Bağlı olan cihazın IP adresini gösterir."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Bağlı olan cihazın MAC adresini gösterir."
			},{
				type: "name",
				title: "Bağlantı Tipi",
				content: "Bağlı olan cihazın bağlantı tipini gösterir."
			},{
				type: "step",
				title: "Bir cihazı engellemk için",
				content: "Çevrim içi Cihazlar tablosunda, engellemek istediğiniz ilgili olan Değiştir sutünundaki Engelle simgesine tıklayın."
			},{
				type: "step",
				title: "Çoklu cihaz engellemek için",
				content: "Çevrim içi Cihazlar tablosunda, engellemek istediğiniz tüm cihazları seçin, tablonun üstünden Engelle'ye tıklayın. Cihaz otomatik olarak kara listedeki veya beyaz listedeki cihazlara eklenecektir."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Kara/Beyaz listedeki Cihazlar",
			CONTENT: [{
				type: "step",
				title: "Bir cihazı kara listeye veya beyaz listeye eklemek için",
				content: [
					"1. Ekle'ye tıklayın.",
					"2. Cihaz Adı girin.",
					"3. Cihazın MAC adresini girin.",
					"4. Tamam'a tıklayın."
				]
			},{
				type: "step",
				title: "Kara/beyaz listedeki bir cihazı değiştirmek veya silmek için",
				content: "Karaliste/beyazliste tablosunda, değiştirmek veya silmek istediğiniz cihazla ilgili olan Düzelt simgesine veya Çöp simgesine tıklayın."
			},{
				type: "step",
				title: "Kara/beyaz listeden çoklu cihaz silmek için",
				content: "Karaliste/beyazliste tablosunda, silmek istediğiniz tüm cihazları seçin, tablonun üstünde Sil'e tıklayın."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Ayarlar",
			CONTENT: [{
				type: "paragraph",
				content: "ARP (Adres Çözümleme Protokolü) bağlanımı cihazın IP adresini ve MAC adresini beraber bağlayarak LAN'daki belirli bilgisayarın erişimini kontrol edebilir bu yüzden kullanışlıdır. ARP bağlanımı diğer cihazların belirli IP adresini kullanmasını da önler."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "ARP Listesi",
			CONTENT: [{
				type: "paragraph",
				content: "Mevcut olarak bağlı olan cihazların MAC ve IP adreslerini gösterir."
			},{
				type: "name",
				title: "ARP Girdi sayısı",
				content: "Router'a mevcut olarak bağlı olan cihazların toplam sayısını gösterir."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Bağlı olan cihazın MAC adresini gösterir."
			},{
				type: "name",
				title: "IP Adresi",
				content: "Bağlı bulunan cihaza ayrılmış olan IP adresini gösterir."
			},{
				type: "name",
				title: "Bağlı",
				content: "MAC ve IP adreslerinin bağlı olup olmadığını gösterir."
			},{
				type: "name",
				title: "Değişiklik",
				content: "Listeden ilgili öğeyi Bağlama veya Silme seçeneklerini gösterir."
			},{
				type: "note",
				title: "Uyarı",
				content: "Aynı IP adresini bir MAC adresinden fazla MAC adresine bağlayamazsınız."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "İlişkilendirme Listesi",
			CONTENT: [{
				type: "step",
				title: "ARP Bağlama ile bir cihaz kurmak için",
				content: [
					"1. Ekle'ye tıklayın.",
					"2. Cihazın MAC adresini girin.",
					"3. Yukarıdaki MAC adresine bağlamak istediğiniz IP adresini girin.",
					"4. Bu cihaz için tanım girin.(İsteğe bağlı).",
					"5. Etkinleştir'i seçin.",
					"6. Tamam'a tıklayın."
				]
			},{
				type: "step",
				title: "Bir öğeyi değiştirmek veya silmek için",
				content: "Bağlama Listesinde, değiştirmek veya silmek istediğiniz ilgili öğenin Düzelt simgesine veya Çöp simgesine tıklayın."
			},{
				type: "step",
				title: "Çoklu öğe silmek için",
				content: "Bağlama Listesinde, silmek istediğiniz tüm öğeleri seçin, tablonun üstünde Sil'e tıklayın."
			}]
		},
		
		IPV6: {
			TITLE: "İnternet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Router'ın IPv6 özelliğini etkileştir(açık) veya (devre dışı) seçeneklerinden birini seçin."
			},{
				type: "title",
				title: "Internet Bağlantı Tipi:Statik IP",
			},{
				type: "name",
				title: "Statik IP",
				content: "Eğer ISS'niz Statik IPv6 ataması kullanıyorsa bu tipi seçin."
			},{
				type: "name",
				title: "IPv6 Adresi/Varsayılan Ağ Geçidi/Birincil DNS/İkincil DNS",
				content: "ISS tarafından sağlanan bu parametreleri girin."
			},{
				type: "name",
				title: "MTU Boyutu",
				content: "Çoğu ethernet ağı için varsayılan ve genel MTU (En Yüksek Aktarım Birimi) boyutu 1500 byte'dır. ISS'nız tarafından gerekmedikçe varsayılan MTU boyutunu değiştirmeniz önerilmez. "
			},{
				type: "title",
				title: "Internet Bağlantı Tipi:Dinamik IP",
			},{
				type: "name",
				title: "Dinamik IP",
				content: "Eğer ISS'niz Dinamik IPv6 adres atamasını kullanıyorsa bu tipi seçin."
			},{
				type: "name",
				title: "IPv6 Adresi/Birincil DNS/İkincil DNS",
				content: "Bu parametreler otomatik olarak ISS'nizin DHCPv6 sunucusundan atanır."
			},{
				type: "name",
				title: "Yenile",
				content: "ISS'nin DHCPv6 sunucusundan yeni IPv6 parametreleri almak için bu butona tıklayın."
			},{
				type: "name",
				title: "Bırak",
				content: "DHCPv6 sunucusu tarafından ISS'den atanan IPv6 adreslerinin tümünü bırakmak için bu butona tıklayın."
			},{
				type: "name",
				title: "IPv6 Adresi al",
				content: "ISS'nıza göre router tanıtım paketleri ile oluşturulmuş bir IPv6 adresi alarak geçici olmayan bir IPv6 adresi veya SLAAC almak için DHCPv6'yı seçin."
			},{
				type: "name",
				title: "Önek yetkisi",
				content: "ISS'nızdan DHCPv6 Sunucusu aracılığıyla bir önek yetkilendirme almak için Etkinleştiri seçin veya manuel olarak bir önek adresi atamak için Devre Dışı olarak bırakınız. LAN'daki istemciler bu önek ile bir IPv6 adresi oluşturacaktır."
			},{
				type: "name",
				title: "DNS Adresi",
				content: "ISS'den dinamik olarak Al veya belirtilen DNS adresini Kullan'ı seçin. Eğer belirtilen DNS adresini kullan seçiliyse, lütfen ISS'niz tarafından sağlanan DNS adresini manuel olarak girin."
			},{
				type: "name",
				title: "Birincil DNS/İkincil DNS",
				content: "ISS'dan elde edilen bu parametreleri manuel olarak veya dinamik olarak girin."
			},{
				type: "title",
				title: "Internet Bağlantı Tipi: PPPoE"
			},{
				type: "name",
				title: "PPPoE  ",
				content: "Eğer ISS'niz PPPoE kullanıyorsa ve kullanıcı adı ve şifresi sağladıysa bu tipi seçin."
			},{
				type: "name",
				title: "Kullanıcı Adı/Şifre",
				content: "ISS'nız tarafından sağlandığı gibi bu parametreleri girin."
			},{
				type: "name",
				title: "IPv6 Adresi",
				content: "Bu adres, siz kullanıcı adını ve parolasını girdikten sonra ve Bağlan'a bastıktan sonra otomatik olarak DHCPv6 sunucusu tarafından ISS'dan atanacaktır."
			},{
				type: "name",
				title: "DNS Adresi",
				content: "ISS'den dinamik olarak Al veya belirtilen DNS adresini Kullan'ı seçin. Eğer belirtilen DNS adresini kullan seçiliyse, lütfen ISS'niz tarafından sağlanan DNS adresini manuel olarak girin."
			},{
				type: "name",
				title: "IPv6 Adresi al",
				content: "ISS'nıza göre router tanıtım paketleri ile oluşturulmuş bir IPv6 adresi alarak geçici olmayan bir IPv6 adresi veya SLAAC almak için DHCPv6'yı seçin veya ISS'nızda tarafından belirlenmiş IPv6 adresini manuel olarak girin."
			},{
				type: "name",
				title: "Önek yetkisi",
				content: "ISS'nızdan DHCPv6 Sunucusu aracılığıyla bir önek yetkilendirme almak için Etkinleştiri seçin veya manuel olarak bir önek adresi atamak için Devre Dışı olarak bırakınız. LAN'daki istemciler bu önek ile bir IPv6 adresi oluşturacaktır."
			},{
				type: "name",
				title: "Bağlan",
				content: "İnternete bağlanmak için bu butona tıklayın."
			},{
				type: "name",
				title: "Bağlantıyı Kes",
				content: "İnternetle bağlantıyı kesmek için bu butona tıklayın."
			},{
				type: "title",
				title: "Internet Bağlantı Tipi: 6to4 Tünel"
			},{
				type: "name",
				title: "6to4 Tünel",
				content: "Eğer ISS'nız adres atamak için 6to4 dağıtım kullanıyorsa bu tipi seçin."
			},{
				type: "name",
				title: "IPv4 Adresi/IPv4 Alt Ağ Maskesi/IPv4 Varsayılan Ağ Geçidi/Tünel Adresi",
				content: "Bağlan'a bastıktan sonra bu parametreler dinamik olarak WAN portunun IPv4 bilgisi tarafından oluşturulacaktır."
			},{
				type: "name",
				title: "Aşağıdaki DNS Sunucusunu kullan",
				content: "ISS'nız tarafından sağlanan birincil DNS ve/veya ikincil DNS adreslerini manuel olarak girmek için onay kutucuklarını seçin."
			},{
				type: "name",
				title: "Bağlan",
				content: "İnternete bağlanmak için bu butona tıklayın."
			},{
				type: "name",
				title: "Bağlantıyı Kes",
				content: "İnternetle bağlantıyı kesmek için bu butona tıklayın."
			},{
				type: "title",
				title: "Internet Bağlantı Tipi: Pass-Through (Köprü)"
			},{
				type: "paragraph",
				content: "Eğer ISS'nız Pass-Through(Köprü) ağ dağıtımını kullanıyorsa bu seçeneği seçin. Bu tür bağlantı için yapılandırma gerekmez."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Pass-Through (Köprü) hariç, internet bağlantısının diğer 6 türü IPv6 yapılandırması gerektirmektedir."
			},{
				type: "name",
				title: "Atanan Tip",
				content: "ISS'nıza göre uygun olan bir tanesini seçin.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "LAN'daki istemcilere otomatik olarak IP adresleri atamak için",
					children: [{
						type: "name",
						title: "Adres Öneki",
						content: "ISS'nız tarafından sağlanan adres ön ekini girin."
					},{
						type: "name",
						title: "Serbest Bırakma Süresi",
						content: "Atanan IP adresi geçerli kaldığı sürece, devam süresi saniyedir. Varsayılan 86400 saniyede kalabilirsiniz veya eğer ISS'nız  gerektiriyorsa değiştirebilirsiniz."
					},{
						type: "name",
						title: "Adres",
						content: "DHCPv6 sunucusu tarafından ISS'dan atanan IP adresidir."
					}]
				},{
					type: "name",
					title: "SLAAC+Yurtsuz DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Adres Öneki",
						content: "ISS'nız tarafından sağlanan adres ön ekini girin."
					},{
						type: "name",
						title: "Adres",
						content: "ISS tarafından otomatik olarak atanan IP adresidir."
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Adres Öneki",
						content: "ISS'nız tarafından sağlanan adres ön ekini girin."
					},{
						type: "name",
						title: "Adres",
						content: "ISS tarafından otomatik olarak atanan IP adresidir."
					}]
				}]
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "MAC Klon",
			CONTENT: [{
				type: "name",
				title: "Varsayılan MAC Adresini Kullan",
				content: "Router'ın varsayılan MAC adresini değiştirmeyin. Değiştirildiği durumda, ISS atanmış IP adresini MAC adresi ile bağlamaz."
			},{
				type: "name",
				title: "Şu Anki Bilgisayarın MAC Adresini Kullan",
				content: "Router'a bağlı bulunan bilgisayarın mevcut MAC adresini kopyala'yı seçin, bu durumda ISS atanan IP adresini bilgisayarın MAC adresi ile bağlayacak."
			},{
				type: "name",
				title: "Özel MAC Adresi Kullan",
				content: "MAC adresini manuel olarak girin, bu durumda ISS atanan IP adresini özel(belirlenen) MAC adresi ile bağlar."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Zaman Ayarları",
			CONTENT: [{
				type: "step",
				title: "Zamanı otomatik olarak senkronize etmek için",
				content: [
					"1. Zamanı Ayarlama alanında, internetten otomatik olarak al'ı seçin.",
					"2. Yerel saat diliminizi açılır menüden seçin.",
					"3. NTP Sunucu I alanına, IP adresini veya istediğiniz NTP sunucusunun etki alanı adını girin.",
					"4. NTP Sunucu II alanına, IP adresini girin veta ikinci NTP sunucusunun etki alanı adını girin.(İsteğe Bağlı)",
					"5. Al'a tıklayın.",
					"6. Kaydet butonuna tıklayınız."
				]
			},{
				type: "step",
				title: "Tarihi ve saati manuel olarak kurmak için",
				content: [
					"1. Zamanı Ayarlama alanında, manuel olarak seçin.",
					"2. Mevcut tarihi girin.",
					"3. Mevcut saati girin ( 24-saat formatında, örn: 16:00:00 = 04:00PM)",
					"4. Kaydet'e tıklayın."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Yaz Saati ",
			CONTENT: [{
				type: "step",
				title: "Yaz Saati Uygulamasını kurmak için",
				content: [
					"1. Yaz Saati Uygulamasını Etkileştir'i seçin.",
					"2. Yerel zaman diliminizde yaz saati uygulamasının ne zaman başladığının doğru saatini ve tarihini seçin.",
					"3. Yerel zaman diliminizde yaz saati uygulamasının ne zaman biteceğinin doğru saatini ve tarihini seçin.",
					"4. Kaydet'e tıklayın."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Tanılama",
			CONTENT: [{
				type: "paragraph",
				content: "Router Ping ve İz Yolu araçlarını ağ bağlanılabilirlik problemlerindeki sorunları gidermenize yardımcı olmak için sağlar. Ping aracı hedef IP adresine veya etki alanı adına paketler gönderir ve  gönderilen ve alınan paketler ve gidiş-dönüş zamanı gibi sonuçları günlükler. İz yolu aracı hedef IP adresine veya Etki Alanı Adına paketler yollar ve sıçramaları gösterir ve hedef noktasına ulaşma zamanını gösterir."
			},{
				type: "paragraph",
				content: "google.com, yahoo.com vs gibi etki alanı adları tarafından. veya IP adresi tarafından yerel cihazınızı pingleyebilirsiniz ve iz yolu yapabilirsiniz"
			},{
				type: "step",
				title: "Ping kullanarak tanılama için",
				content: [
					"1. Hedef IP adresi veya Etki Alanı Adı Girin.",
					"2. Gelişmiş menüyü açmak için Ok simgesine tıklayın ve Ping sayısını ve Ping Paket Boyutunu belirleyin.(İsteğe Bağlı).",
					"3. Başla'ya tıklayın."
				]
			},{
				type: "step",
				title: "İz Yolu kullanarak tanılama için",
				content: [
					"1. Hedef IP adresi veya Etki Alanı Adı Girin.",
					"2. Gelişmiş menüyü açmak için Ok simgesine tıklayın ve  İz Yolu Maksimum TTL alanına (Yaşam Süresi alanı) ulaşılacak sıçrama sayısını girin. Varsayılan ayar 20'dir. (İsteğe Bağlı).",
					"3. Başla'ya tıklayın."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Firmware Güncelleme",
			CONTENT: [{
				type: "paragraph",
				content: "Router'ın yazılımını güncellemeden önce, bilgisayarınıza en son yazılım güncellemesini <a class=\"link\" target=\"blank\" href=\"http://www.tp-link.com/tr/Support/\">TP-Link Destek</a> websitesinden indirmeniz gerekecektir."
			},{
				type: "step",
				title: "ÖNEMLİ: Güncellemenin başarısız olmasını önlemek için, lütfen belirtilenlere dikkat ediniz:",
				content: [
					"En son yazılım dosyasının donanım sürümü ile eşleştiğinden emin olun.( Yazılım Güncelleme sayfasında gösterildiği gibi).",
					"Router ile bilgisayarınız arasında durağan bir bağlantı olduğuna emin olun. Yazılımı kablosuz olarak güncellemek önerilmez.",
					"Veri kaybını önlemek amacıyla, yazılım güncellemesinden önce bütün bağlı USB bellek cihazlarını kaldırdığınızdan emin olun.",
					"Router'ınızın yapılandırmasını yedekleyin.",
					"Yazılım güncellemesi boyunca router'ı kapatmayın."
				]
			},{
				type: "step",
				title: "Router'ın yazılımını güncellemek için",
				content: [
					"1. Göz At'a tıklayın.",
					"2. İndirilen yazılım dosyasını konumlandırın ve seçin.",
					"3. Güncelle butonuna tıklayın."
				]
			},{
				type: "paragraph",
				content: "Güncelleme işlemi birkaç dakika alacaktır. Güncelleme işlemi yapılırken lütfen router'ı kapatmayın."
			}]
		},
		
		BACKUP: {	
			TITLE: "Yedekle",
			CONTENT: [{
				type: "paragraph",
				content: "Mevcut yapılandırmalarınızın yedeğini almanız önerilir, bu durumda, kurtarma işlemi sistemi bir önceki durumuna yükleme ihtiyacı duyabilir veya fabrika ayarlarından sistemi geri yükleme ihtiyacı duyabilir."
			},{
				type: "paragraph",
				content: "Mevcut yapılandırmalarınızı bilgisayarınıza kaydetmek için Yedekle'ye tıklayın. Eğer gerekirse, yedekleme dosyanızı alabileceğiniz ve router'a geri yükleyebileceğiniz güvenli bir yere kaydettiğinizden emin olun."
			}]
		},
		
		RESTORE: {
			TITLE: "Geri Yükle",
			CONTENT: [{
				type: "step",
				title: "Yedeklemeden geri yüklemek için",
				content: [
					"1. Göz At'a tıklayın.",
					"2. Yedekleme dosyasını konumlandırın ve seçin.",
					"3. Geri Yükle'ye tıklayın."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Varsayılan Ayarlara Geri Yükle",
			CONTENT: [{
				type: "paragraph",
				content: "Router'ınızı fabrika ayarlarına geri döndürmek için Fabrika Ayarlarına Dön'e tıklayın."
			},{
				type: "note",
				title: "Uyarı",
				content: [
					"1. Bu router için yapılandırılmış tüm ayarlar Fabrika Ayarlarına geri yüklenecek. Router'ın yönetim sayfasına yeniden giriş yapabilmeniz için kullanıcı adı ve şifre olarak varsayılan admin kullanınız.",
					"2. Lütfen geri yükleme veya yedekleme işlemi bitene kadar router'ı KAPATMAYIN."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Hesap Yönetimi",
			CONTENT: [{
				type: "paragraph",
				content: "Bu sayfa giriş kullanıcı adınızı ve/veya şifrenizi değiştirmenize olanak sağlar, ve şifre kurtarma işlemi için email adresi kurmanıza olanak sağlar."
			},{
				type: "name",
				title: "Önceki Kullanıcı Adı",
				content: "Mevcut kullanıcı adınızı yazın."
			},{
				type: "name",
				title: "Önceki Şifre",
				content: "Mevcut şifrenizi yazın."
			},{
				type: "name",
				title: "Yeni kullanıcı Adı",
				content: "Yeni kullanıcı adınızı yazın."
			},{
				type: "name",
				title: "Yeni Şifre",
				content: "Yeni şifrenizi yazın."
			},{
				type: "name",
				title: "Yeni Şifreyi Onayla",
				content: "Yeni şifrenizi tekrar yazın."
			},{
				type: "note",
				title: "Uyarı",
				content: "Router'a girmek için kullandığınız mevcut kullanıcı adını ve şifresini değiştirmek istediğinize karar verirseniz, yeni giriş bilgilerini güvenli bir konuma yazdığınıza emin olun."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Şifreyi Kurtar",
			CONTENT: [{
				type: "name",
				title: "Şifre Kurtarmayı Etkinleştir",
				content: "Şifre Kurtarma özelliği ileride şifrenizi unuttuğunuzda eposta aracılığıyla kullanıcı adı ve şifrenizi sıfırlamanıza yardımcı olacağından özellikle tavsiye ediyoruz."
			},{
				type: "name",
				title: "Kimden",
				content: "Giden mailler için kullanılacak olan geçerli bir email adresi girin."
			},{
				type: "name",
				title: "Kime",
				content: "Gelen mailler için kullanılacak olan geçerli olan bir email adrresi girin."
			},{
				type: "name",
				title: "SMTP Sunucu",
				content: "Eposta aracılığıyla doğrulama kodu gönderebilmek için SMTP sunucu adresi giriniz."
			},{
				type: "name",
				title: "Kimlik Doğrulamayı Etkinleştir",
				content: "Eğer giden email sunucusu gönderilen emailler için kimlik doğrulama gerektiriyorsa Kimlik Doğrulamayı Etkinleştir'i seçin ve ilgili alanlarda kullanıcı adını ve şifresini doldurun. Bu alanlar büyük-küçük harf duyarlıdır."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Yerel Yönetim",
			CONTENT: [{
				type: "paragraph",
				content: "Bu bölüm LAN'ınızdaki istemci cihazlarının sayısına limit koymanıza olanak sağlar. Bu cihazlar MAC adresi tabanlı kimlik doğrulamayı kullanarak router'a erişebilir."
			},{
				type: "name",
				title: "Bağlı Tüm LAN Cihazları için Erişim",
				content: "Tüm LAN'a bağlı cihazlar için yerel yönetimi etkinleştirmek için Açın veya belli bir cihaz için yönetimi etkinleştirmek için Kapatın."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Sınırlı erişim cihazının MAC adresini gösterir."
			},{
				type: "name",
				title: "Tanım",
				content: "Sınırlı erişim cihazının tanımını gösterir."
			},{
				type: "name",
				title: "Durum",
				content: "Sınırlı erişim cihazının mevcut durumunu gösterir. (etkin veya devre dışı)."
			},{
				type: "name",
				title: "Değişiklik",
				content: "Listedeki ilgili cihazın Değiştir ve Sil seçeneklerini gösterir."
			},{
				type: "step",
				title: "Listeye istemci cihaz eklemek için",
				content: [
					"1. Ekle'ye tıklayın.",
					"2. Şu anki bir cihazı seçmek için Şu Anki Cihazları Göster'e tıklayın veya MAC adresi alanına cihazın MAC adresini girin.",
					"3. Cihaz için bir tanım girin.",
					"4. Etkinleştir'i seçin.",
					"5. Tamam'a tıklayın."
				]
			},{
				type: "step",
				title: "Listedeki bir cihazı değiştirmek veya silmek için",
				content: "Tabloda, değiştirmek veya silmek istediğiniz ilgili cihazın Düzelt simgesine veya Çöp simgesine tıklayın."
			},{
				type: "step",
				title: "Çoklu cihaz silmek için",
				content: "Silmek istediğiniz tüm cihazları seçin, Sil'e tıklayın."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Uzaktan Yönetim",
			CONTENT: [{
				type: "paragraph",
				content: "Uzaktan Yönetim özelliği router'a internet üzerinden uzak bir şekilde erişmenize ve yapılandırmanıza olanak sağlar."
			},{
				type: "name",
				title: "Uzaktan Yönetimi Devre Dışı Bırak",
				content: "Uzaktan Yönetimi devre dışı bırakmak için bu seçeneği seçin."
			},{
				type: "name",
				title: "Tüm Cihazlar için Uzaktan Yönetimi Etkinleştir",
				content: "Tüm IP adresleri için uzaktan yönetimi etkinleştirmek için bu seçeneği seçin. Eğer seçilirse, Web Yönetim Portunu ve Uzaktan Yönetim IP Adres alanlarını girin."
			},{
				type: "name",
				title: "Belirli Cihazlar için Uzaktan Yönetimi Etkinleştir",
				content: "Belirli IP adresi için uzaktan yönetimi etkinleştirmek için bu seçeneği seçin. Eğer seçilirse, Web Yönetim Portunu ve Uzaktan Yönetim IP Adres alanlarını girin."
			},{
				type: "name",
				title: "Web Yönetim Portu",
				content: "Router'ın web yönetim arayüzüne yüksek güvenlik ile erişim için kullanılan port sayısını 1024-65535 arasında bir değer olarak girin. Normal olarak, web tarayıcılarının kullandığı standart HTTP servis portu 80'dir. HTTP'nin servis portuyla birbirini takip eden ve varsayılan ve genel servis portu 8080'dir."
			},{
				type: "name",
				title: "Uzaktan Yönetim IP Adresi",
				content: "Geçerli bir IP adresi girin veya router'a erişime izin verilecek olan IP aralığı girin."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Sistem Günlüğü",
			CONTENT: [{
				type: "paragraph",
				content: "Sistem günlüğü sayfası router'ın en son aktivitelerinin listesini gösterir. Hangi tip günlükler ve/veya hangi seviyede günlükler görmek istediğinizi tanımlayabilirsiniz. Ayrıca bu sayfa Email özelliğine sahiptir ve email yapılandırdığınızda bu özellik sistem dosyalarını email adresine otomatik olarak gönderir veya günlük dosyalarına bilgisayarınıza aktarabilirsiniz."
			},{
				type: "name",
				title: "Tip",
				content: "Görüntülenecek sistem günlüğü tipini seçin."
			},{
				type: "name",
				title: "Düzey",
				content: "Görüntülenecek sistem günlüğü seviyesini seçin."
			},{
				type: "name",
				title: "Yenile",
				content: "Sistem günlüğünü güncellemek için bu simgeye tıklayın."
			},{
				type: "name",
				title: "Hepsini Sil",
				content: "Tüm sistem günlüklerini silmek için bu simgeye tıklayın."
			},{
				type: "name",
				title: "Günlüğü Kaydet",
				content: "Tüm sistem günlüğü dosyalarını yerel bilgisayarınıza indirmek için bu nutona tıklayın."
			},{
				type: "name",
				title: "Mail Ayarları",
				content: "Sistem günlükleri için email ayarları yapılandırmak için bu butona tıklayın."
			},{
				type: "step",
				title: "Sistem Günlüğü için email ayarları yapılandırmak için",
				content: [
					"1. Mail Ayarlarına tıklayın.",
					"2. dan - giden mail için kullanılacak olan geçerli email adresi girin.",
					"3. e - giden mail için kullanılacak olan geçerli email adresi girin.",
					"4. SMTP Sunucusu -  Router'ın sistem günlüklerini email yoluyla yollayacağı SMTP sunucu adresi girin.",
					{
						content: "5. Kimlik Doğrulamayı Etkinleştir -  Eğer SMTP sunucusu giden mailler için kimlik doğrulaması gerektiriyorsa bu seçeneği seçin.",
						children: [{
							type: "name",
							title: "Kullanıcı Adı",
							content: "SMTP sunucusu için kullanıcı adı girin. Bu alan büyük-küçük harf duyarlıdır."
						},{
							type: "name",
							title: "Parola",
							content: "SMTP sunucusu için şifre giren. Bu alan büyük-küçük harf duyarlıdır."
						}]
					},{
						content: "6. Otomatik Maili Etkinleştir -  Günün hangi saatinde sistem günlüklerinin otomatik olarak yollanabileceğini belirlemek için bu seçeneği seçin.",
						children: [{
							type: "paragraph",
							content: "Sistem günlüğünü her gün belli bir zamanda göndermek için, Saatleri ve dakikaları 24 saat formatında girin. "
						},{
							type: "paragraph",
							content: "Sistem günlüğünü belli bir saatte veya zaman aralığında göndermek için, saat değerlerini girin."
						}]
					},
					"7. Kaydet'e basın."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Trafik İstatistikleri",
			CONTENT: [{
				type: "paragraph",
				content: "Akış İstatistiği sayfası LAN'ın, WAN'ın ve WLAN'ın ağ akışını gösterir. (Alınan ve gönderilen paketler)."
			},{
				type: "name",
				title: "Trafik İstatistikleri",
				content: "İstatistik bilgileri görüntülemek için Açın."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Trafik İstatistikleri Listesi",
			CONTENT: [{
				type: "name",
				title: "IP Adresi/MAC Adresi",
				content: "İlgili istemci cihazının IP adresini ve MAC adresini gösterir."
			},{
				type: "name",
				title: "Toplam Paket",
				content: "İstemci cihazının oturumunun başından beri olan veya cihazı son resetlemesinden beri olan istemci cihazı tarafından yapılan toplam aktarılan ve alınan paket değerini gösterir."
			},{
				type: "name",
				title: "Toplam Bayt",
				content: "İstemci cihazının oturumunun başından beri olan veya cihazı son resetlemesinden beri olan istemci cihazı tarafından yapılan toplam aktarılan ve alınan byte değerini gösterir."
			},{
				type: "name",
				title: "Şu Anki Paket",
				content: "Belirli bir zaman aralığında gönderilen ve alınan mevcut paket değerini gösterir."
			},{
				type: "name",
				title: "Şu Anki Bayt",
				content: "Belirli bir zaman aralığında gönderilen ve alınan mevcut byte değerini gösterir."
			},{
				type: "name",
				title: "Değişiklik",
				content: "Resetleme(Sıfıra) ve listeden ilgili istatistikleri silme seçeneklerini gösterir."
			},{
				type: "name",
				title: "Yenile",
				content: "Sayfadaki istatistik bilgilerini güncellemek için tıklayın."
			},{
				type: "name",
				title: "Hepsini Sıfırla",
				content: "Listedeki tüm istatistik değerleri sıfıra resetlemek için tıklayın."
			},{
				type: "name",
				title: "Hepsini Sil",
				content: "Listedeki tüm istatistik bilgilerini silmek için tıklayın."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "2.4GHz/5GHz Kablosuz",
			CONTENT: [{
				type: "name",
				title: "Beacon Interval",
				content: "Kablosuz ağı senkronize etmek için router tarafından yayını yapılan sinyal paketleri arasındaki devam süresini belirlemek için 40-1000 milisaniye arasında bir değer girin. Varsayılan ayar 100 milisaniyedir."
			},{
				type: "name",
				title: "RTS Threshold",
				content: "Router aracılığıyla yapılan veri aktarımının paket boyutunu belirlemek için 1-2346 arasında bir değer girin. Varsayılan olarak, RTS (Gönderme İstem Kodu) eşik boyutu 2346'dır.  Eğer paket boyutu ön ayarlı eşikten büyükse, router belirli alıcı istasyonlarına gönderme istem kodu gönderir ve veri çerçevesinin gönderiminde anlaşır. Aksi takdirde, paket acil olarak gönderilecektir."
			},{
				type: "name",
				title: "DTIM Zaman Aralığı",
				content: "Bu değer DTIM'nin aralığını belirler. 1-15 milisaniye aralığında bir değer girin. Varsayılan değer 1'dir ve DTIM aralığı sinyal aralığı ile aynı olduğunu gösterir."
			},{
				type: "name",
				title: "Grup Anahtarı Güncelleştirme Periyodu",
				content: "Şifreleme anahtar otomatik yenile için zaman aralığını kontrol etmek için saniye değeri girin(minimum 30 saniye). Varsayılan 0'dır ve anahtar yenilemesi olmadığını gösterir."
			},{
				type: "name",
				title: "WMM Özelliği",
				content: "WMM fonksiyonu paketleri tercihen aktarılan yüksek-öncelikli mesajlar ile garanti altına alır. Varsayılan olarak etkinleştirilmiştir ve kesinlikle önerilir."
			},{
				type: "name",
				title: "Short GI Özelliği",
				content: "Bu fonksiyon varsayılan olarak etkinleştirilmiştir ve Koruma Aralığı(GI) süresini azaltarak veri kapasitesini arttırmanız önerilir."
			},{
				type: "name",
				title: "AP İzolasyon Özelliği",
				content: "Eğer ağınıza bağlı olan ve birbiriyle çakışan fakat hala internete erişebilen tüm kablosuz cihazları sınırlandırmak istiyorsanız, AP İzolasyonunu Etkinleştir işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "TX Beamforming, yönlü sinyal iletimi için algılayıcı diziliminde bir sinyal işleme tekniği kullanmaktadır. Etkinleştirildiğinde, Wi-Fi sinyalini güçlendirmek ve Wi-Fi menzilini genişletmek için yayın sonunda sırayla kullanılacaktır."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "WDS Köprülemeyi Etkinleştir",
				content: "Router'ın kablosuz yerel alan ağında başka bir erişim noktasıyla köprü kurmasına izin vermek için WDS(Kablosuz Dağıtım Sistemi) modunu etkinleştirin. Eğer bu özellik etkinleştirilirse, belirtilenleri yapılandırın:",
				children: [{
					type: "name",
					title: "SSID (köprülenecek)",
					content: "Router'ın istemci olarak bağlanacağı WAP (Kablosuz Erişim Noktası)'nın SSID'sini girin veya tüm mevcut ağları bulmak için Anket özelliğini kullanın."
				},{
					type: "name",
					title: "Tara",
					content: "Aralıktaki tüm mevcut kablosuz ağların SSID, BSSID, sinyal kuvveti, kanal ve güvenlik bilgilerini taramak ve görüntülemek için bu butona tıklayın. Ağ seçtiğiniz zaman, SSID,MAC adresi ve Güvenlik otomatik olarak doldurulacaktır."
				},{
					type: "name",
					title: "MAC Adresi (köprülenecek)",
					content: "Router'ın istemci olarak bağlanacağı erişim noktasına tire imiyle ayrılmış biçimde heksadesimal sayı sisteminde 12 karakter (0-9, a-f, A-F) olacak şekilde MAC adresi(BSSID) girin."
				},{
					type: "name",
					title: "Güvenlik",
					content: "Seçilmiş erişim noktasının doğru güvenlik tipini seçin, Hayır, WPA-PSK/WPA2-PSK veya WEP. Eğer anket özelliği üzerinden istenen AP'yi seçerseniz, Güvenlik alanı otomatik olarak doldurulur.",
					children: [{
						type: "name",
						title: "Parola",
						content: "Bu seçenek güvenlik tipi WPA-PSK/WPA2-PSK veya WEP olduğu zaman kullanışlıdır. Seçilmiş erişim noktasının güvenlik şifresini girin."
					},{
						type: "name",
						title: "Auth. Tip",
						content: "Bu seçenek güvenlik tipi sadece WEP (Kablolu Eşdeğer Mahramiyet) olduğunda kullanışlıdır. Seçilmiş erişim noktasının kullanımının uygun kimlik doğrulama türünü (Otomatik, Açık Sistem veya Paylaşılan Anahtar) seçin."
					},{
						type: "name",
						title: "WEP Anahtar Formatı",
						content: "Bu seçenek güvenlik tipi sadece WEP olduğunda kullanışlıdır. Seçilmiş AP'nin kullanımının anahtar biçimini seçin(ASCII veya Heksadesimal)."
					}]
				}]
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "WPS'yi etkilentir işaret kutucuğunu seçin ve WPS butonuna basmayla WPS-etlin cihazlara bağlanmanıza ve kolay kuruluma olanak sağlayan WPS(Wi-Fi Korunan Kurulum) fonksiyonunu etkilentirmeyi Kaydet'e tıklayın."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "NAT'ı etkinleştir işaret kutucuğunu seçin ve NAT(Ağ Adres Dönüştürme) fonksiyonun etkinleşmesi için Kaydet'e basın."
			},{
				type: "note",
				title: "Uyarı",
				content: "NAT devre dışı bırakıldığında, NAT iletimindeki yapılandırmalar etki etmeyecektir."
			},{
				type: "name",
				title: "NAT Boost",
				content: "NAT arttırmayı Etkinleştir işaret kutucuğunu seçin ve router'ınızın en iyi veri hacmi olduğunu garanti altına almak için Kaydedin."
			},{
				type: "note",
				title: "Uyarı",
				content: "NAT arttırma etkin olduğu zaman, QoS ve Akış İstatistikleri otomatik olarak devre dışı kalacaktır."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "DoS Koruma Düzeyi Ayarları",
			CONTENT: [{
				type: "paragraph",
				content: "DoS Koruma Seviyesi router'ı ICMP-FLOOD,UDP-FLOOD, ve TCP-FLOOD saldırılarından korur."
			},{
				type: "name",
				title: "ICMP-FLOOD Paketleri Düzeyi",
				content: "Paket değeri, önayarlı eşik değerini aştığı zaman ICMP-FLOOD korumasının anında tetiklenmesi için 5-7200 arasında ICMP paket değeri girin."
			},{
				type: "name",
				title: "UDP-FLOOD Paketleri Düzeyi",
				content: "Paket değeri, önayarlı eşik değerini aştığı zaman UDP-FLOOD korumasının anında tetiklenmesi için 5-7200 arasında ICMP paket değeri girin."
			},{
				type: "name",
				title: "TCP-FLOOD Paketleri Düzeyi",
				content: "Paket değeri, önayarlı eşik değerini aştığı zaman TCP-SYN-FLOOD korumasının anında tetiklenmesi için 5-7200 arasında ICMP paket değeri girin."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Dupleks",
			CONTENT: [{
				type: "name",
				title: "Dupleks",
				content: "Açılır listeden çift yönlü tür seçin."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Gece Modunu Etkinleştir",
				content: "Router'in performansını etkilemeden Gece Modu Süresi içinde LED'leri kapatmak için bu onay kutusunu işaretleyin."
			},{
				type: "name",
				title: "Gece Modu Periyodu",
				content: "Gece modunun geçerli olacak zaman dilimini seçin."
			},{
				type: "paragraph",
				content: "Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "OpenVPN ile evinizden uzakta iken ağınıza Internet üzerinden güvenli bir şekilde erişebilirsiniz. VPN Servisini kullanmak için, Dinamik DNS Servisi'ni(önerilen) yapılandırmanız veya router'ın WAN portu için statik bir IP adresi atamanız gerekecektir. Ayrıca Sistem Zamanı, bölgeniz için güncel olmalıdır."
			},{
				type: "name",
				title: "VPN Sunucusunu etkinleştir",
				content: "OpenVPN sunucusunu etkinleştirmek için bu onay kutusunu seçin."
			},{
				type: "name",
				title: "Servis Tipi",
				content: "OpenVPN sunucusunun iletişim protokolünü seçin: UDP ya da TCP."
			},{
				type: "name",
				title: "Servis Portu",
				content: "1024 ila 65535 arasında bir port numarası giriniz. Varsayılan ve yaygın olarak kullanılan port 1194'tür."
			},{
				type: "name",
				title: "VPN Alt Ağı/Ağ Maskesi",
				content: "OpenVPN sunucusu tarafından istemcilere kiralanabilecek IP adresleri aralığını girin."
			},{
				type: "name",
				title: "İstemci Erişimi",
				content: "OpenVPN istemcisi için erişim türünü seçin.",
				children: [{
					type: "name",
					title: "Yalnızca Asıl Ağ",
					content: "İstemciler yalnızca router'a ve LAN'a erişebilir. İstemcinin varsayılan yolu değişmeyecektir."
				},{
					type: "name",
					title: "İnternet ve Asıl Ağ",
					content: "İstemci aygıtlar, coğrafi kısıtlamaların olduğu bir ülkedeyken ev ağına, servislere veya Internet sitelerine erişebilir. İstemcilerin varsayılan rotası değiştirilecektir."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Sertifika",
			CONTENT: [{
				type: "paragraph",
				content: "Uzak bilgisayar için VPN bağlantısının bilgileri ve kimliği için sertifikayı kullanın."
			},{
				type: "name",
				title: "Oluştur",
				content: "Yeni bir sertifika oluşturmak için tıklatın."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Yapılandırma Dosyası",
			CONTENT: [{
				type: "paragraph",
				content: "Uzaktaki istemciler, router'ınıza erişmek için yapılandırma dosyasını kullanacaktır."
			},{
				type: "name",
				title: "Dışarı aktar",
				content: "Yeni VPN bağlantısı eklemek için kullanılacak OpenVPN yapılandırma dosyasını kaydetmek için bu düğmeyi tıklatın."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "VPN İstemcisi Yükleme Kılavuzu",
			CONTENT: [{
				type: "step",
				title: "OpenVPN sunucusunu etkinleştirmek ve istemci cihazlarınızı sunucuya bağlamak için:",
				content:[{
					type: "paragraph",
					content: "OpenVPN sunucusunu yapılandırmadan önce, Dinamik DNS Servisi (önerilen)'ni yapılandırınız veya WAN portu için statik bir IP adresi tanımlayınız. Servis portunun NAT ayarlarında harici port için başka bir servisin tanımlı port olup olmadığından emin olunuz ve Sistem Zaman ayarlarının bulunduğunuz bölge için güncel olduğundan emin olunuz."
				},
					"1. VPN Sunucusunu Etkinleştir onay kutucuğunu seçiniz.",
					"2. OpenVPN sunucu parametrelerini (Servis Türü, Servis Portu, Client Erişimi ve VPN Alt Ağ/Alt Ağ Maskesi) giriniz ve Kaydet butonuna tıklayınız.",
					"3. Yapılandırma dosyasını kaydetmek için Çıkart butonuna tıklayınız.",
					"4. İstemci cihazlarınızda, <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> adresinden OpenVPN istemci yazılımını indiriniz ve yükleyiniz. Windows, Mac OSX, Linux platformlarında bu yazılımı kullanabilirsiniz.",
					"5. OpenVPN istemci yazılımını çalıştırınız ve istemci cihazınızı VPN sunucuya bağlamak için kaydetmiş olduğunuz yapılandırma dosyasını kullanarak yeni bir bağlantı ekleyiniz."
				]},{
					type: "note",
					title: "Uyarı",
					content: "OpenVPN istemcileri hakkında daha fazla bilgi almak için <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a> adresini ziyaret edin"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "PPTP VPN ile, evinizden uzakta iken ağınıza Internet üzerinden kolayca ve hızlı bir şekilde bağlanabilirsiniz. Bazı ISS'lar tarafından bu servis engellenebilmektedir. VPN Servisini kullanabilmeniz için, Dinamik DNS Servisi'ni(önerilen) yapılandırmanız veya router'ın WAN portu için statik bir IP adresi atamanız gerekecektir. Ayrıca Sistem Zamanı, bölgeniz için güncel olmalıdır."
			},{
				type: "name",
				title: "VPN Sunucusunu etkinleştir",
				content: "PPTP VPN sunucusunu etkinleştirmek için bu onay kutusunu seçin."
			},{
				type: "name",
				title: "İstemci IP Adresi",
				content: "PPTP VPN sunucusu tarafından istemcilere kiralanabilecek IP adresleri aralığını (10 istemciye kadar) girin."
			},{
				type: "name",
				title: "Samba (Ağ Bağlantısı) erişimine izin ver",
				content: "Yerel Samba sunucunuzun VPN client erişimine izin vermek için seçiniz."
			},{
				type: "name",
				title: "NetBIOS passthrough izin ver",
				content: "NetBIOS adını kullanarak VPN Client'ınızın Samba sunucunuza erişebilmesi için seçiniz."
			},{
				type: "name",
				title: "Şifrelenmemiş bağlantılara izin ver",
				content: "VPN sunucunuza şifrelenmemiş bağlantılara izin vermek için seçiniz."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Hesap Listesi",
			CONTENT: [{
				type: "paragraph",
				content: "Bu tabloda, uzak clientlar tarafından PPTP VPN sunucusuna bağlamak için kullanılan hesaplar görüntülenmektedir."
			},{
				type: "step",
				title: "Bir PPTP VPN hesabı eklemek için",
				content: [
					"1. Ekle'ye tıklayın.",
					"2. İstemcilerin PPTP VPN sunucusunda kimliklerinin doğrulanması için kullanıcı adını ve parolayı girin.",
					"3. Tamam'a tıklayın."
				]
			},{
				type: "step",
				title: "Varolan bir hesabı silmek veya değiştirmek için",
				content: "Bu tabloda, değiştirmek veya silmek istediğiniz hesaba karşılık gelen Düzenle butonuna ya da Çöp simgesine tıklayınız."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "VPN İstemcisi Yükleme Kılavuzu",
			CONTENT: [{
				type: "step",
				title: "PPTP VPN sunucusunu etkinleştirmek ve istemci cihazlarınızı sunucuya bağlamak için:",
				content:[{
					type: "paragraph",
					content: "PPTP VPN sunucusunu yapılandırmadan önce, Dinamik DNS Servisi (önerilen)'ni yapılandırınız veya WAN portu için statik bir IP adresi tanımlayınız. Servis portunun NAT ayarlarında harici port için başka bir servisin 1723 nolu portu kullanmadığından emin olunuz ve Sistem Zaman ayarlarının bulunduğunuz bölge için güncel olduğundan emin olunuz."
				},
					"1. VPN Sunucusunu Etkinleştir onay kutucuğunu seçiniz.",
					"2. PPTP VPN sunucu parametrelerini yapılandırın ve Kaydet butonuna tıklayın.",
					"3. İstemci cihazlarınızda, PPTP VPN bağlantısı oluşturunuz.  Windows, Mac OSX, Linux, iOS ve Android platformlarında bu yazılımı kullanabilirsiniz.",
					"4. PPTP VPN programını çalıştırınız, yeni bir bağlantı ekleyiniz. PPTP VPN sunucusuna istemci cihazlarınızdan bağlanmak için DDNS servisinde kayıtlı domain adını veya WAN portuna atanmış statik IP adresini giriniz."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "VPN Bağlantıları",
			CONTENT: [{
				type: "paragraph",
				content: "Bu sayfa router'daki OpenVPN ve PPTP VPN sunucularına o sırada bağlanan istemcileri gösterir."
			},{
				type: "paragraph",
				content: "İlgili istemcinin bağlantısını kesmek için Eksi simgesini tıklatın."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "İnternet",
			CONTENT: [{
				type: "name",
				title: "Internet Durumu",
				content: "Router'ın internet bağlantısının mevcut durumunu gösterir."
			},{
				type: "name",
				title: "Bağlantı Tipi",
				content: "Internet bağlantısının türünü gösterir."
			},{
				type: "name",
				title: "IP Adresi",
				content: "Router'a atanmış mevcut Internet IP adresini gösterir."
			},{
				type: "name",
				title: "İkincil Bağlantı/IP Adresi",
				content: "İkincil bağlantı tipini ve IP adresini gösterir."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Router",
			CONTENT: [{
				type: "title",
				title: "2.4GHz/5GHz Kablosuz"
			},{
				type: "name",
				title: "SSID",
				content: "2.4GHz/5GHz bant frekansının mevcut kablosuz ağ adını gösterir."
			},{
				type: "name",
				title: "Kanal",
				content: "Hangi kablosuz 2.4GHz/5GHz ağ yayınlarının kanalı olduğunu gösterir."
			},{
				type: "name",
				title: "MAC",
				content: "2.4GHz/5GHz kablosuzun mevcut MAC adresini gösterir."
			},{
				type: "title",
				title: "2.4GHz/5GHz Misafir Ağ"
			},{
				type: "name",
				title: "Durum",
				content: "Kablosuz 2.4GHz/5GHz Misafir Ağı'nın etkin(açık) veya devre dışı (kapalı) olup olmadığını gösterir."
			},{
				type: "name",
				title: "SSID",
				content: "Misafir ağının kablosuz ağ adını gösterir."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Kablolu/Kablosuz İstemciler",
			CONTENT: [{
				type: "name",
				title: "Ad",
				content: "Router'a bağlı bulunan istemcinin adını gösterir."
			},{
				type: "name",
				title: "IP Adresi",
				content: "İstemcinin atanmış IP adresini gösterir."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "İstemcinin MAC adresini gösterir."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Yazıcı",
			CONTENT: [{
				type: "name",
				title: "Ad",
				content: "Router'a USB portu aracılığıyla bağlı olan yazıcının adını gösterir."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "USB Disk",
			CONTENT: [{
				type: "name",
				title: "USB Disk",
				content: "Router'a bağlı olan USB diskin adını görüntüler."
			},{
				type: "name",
				title: "Toplam",
				content: "Bağlı olan USB bellek cihazının toplam bellek kapasitesini gösterir."
			},{
				type: "name",
				title: "Kullanılabilir",
				content: "Bağlı olan USB bellek cihazının musait bellek kapasitesini gösterir."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "İnternet",
			CONTENT: [{
				type: "name",
				title: "Otomatik Algıla",
				content: "Router'ın otomatik olarak mevcut internet bağlantı tipini algılamasını istiyorsanız bu butona tıklayın."
			},{
				type: "note",
				title: "Uyarı",
				content: "Eğer hangi internet tipine sahip olduğınuzdan emin değilseniz, Otomatik Algılama fonksiyonunu kullanabilirsiniz veya yardım için ISS'nızla iletişim kurabilirsiniz."
			},{
				type: "title",
				title: "Internet Bağlantı Tipi:Statik IP",
			},{
				type: "name",
				title: "IP Adresi/Alt Ağ Maskesi/Varsayılan Ağ Geçidi/Birincil DNS/İkincil DNS",
				content: "ISS'nız tarafından sağlanan bilgileri girin."
			},{
				type: "title",
				title: "Internet Bağlantı Tipi:Dinamik IP",
			},{
				type: "name",
				title: "MAC Adresini Kopyalamayın/ Mevcut Bilgisayarın MAC Adresini Kopyalayın",
				content: "ISS'nıza göre MAC adresini kopyalayıp kopyalamayacağınızı seçin."
			},{
				type: "title",
				title: "Internet Bağlantı Tipi: PPPoE",
			},{
				type: "name",
				title: "Kullanıcı Adı/Şifre",
				content: "ISS tarafından sağlanan kullanıcı adını ve şifresini girin. Bu alanlar büyük-küçük harf duyarlıdır."
			},{
				type: "title",
				title: "İnternet Bağlantı Tipi: L2TP/PPTP",
			},{
				type: "name",
				title: "Kullanıcı Adı/Şifre",
				content: "ISS tarafından sağlanan kullanıcı adını ve şifresini girin. Bu alanlar büyük-küçük harf duyarlıdır."
			},{
				type: "name",
				title: "İkincil Bağlantı(Dinamik IP, Statik IP)",
				children: [{
					type: "name",
					title: "Dinamik IP",
					content: "Eğer IP adresi ve Alt Ağ Maskesi ISS tarafından otomatik olarak atanmışsa bu seçeneği seçin."
				},{
					type: "name",
					title: "Statik IP",
					content: "Eğer IP adresi ve Alt Ağ Maskesi ISS tarafından sağlanmışsa bu seçeneği seçin ve bu bilgileri ilgili alanlara girin."
				}]
			},{
				type: "name",
				title: "VPN Sunucu IP/Alan Adı",
				content: "ISS tarafından sağlanan VPN sunucusunun IP adresini veya etki alanı adını girin."
			},{
				type:"paragraph",
				content:"Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Kablosuz Ayarlar",
			CONTENT: [{
				type: "name",
				title: "Kablosuz Radyoyu Etkinleştir",
				content: "2.4GHz/5GHz kablosuz radyo frekansını etkinleştirmek için bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Kablosuz Ağ Adı (SSID)",
				content: "Varsayılan kablosuz ağ adını(SSID) olduğu gibi bırakabilirsiniz veya 32 karaktere kadar yeni ad girebilirsiniz."
			},{
				type: "name",
				title: "SSID Gizle",
				content: "Eğer 2.4GHz/5GHz ağ adını(SSID) Wi-Fi ağ listesinden gizlemek istiyorsanız bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Parola",
				content: "8-63 ASCII karakteri olacak şekilde kablosuz şifresi girin veya heksadesimal sistemde 8-64 karakter girin. Bu alan büyük küçük harf duyarlıdır."
			},{
				type:"paragraph",
				content:"Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Cihaz Ayarları",
			CONTENT: [{
				type: "paragraph",
				content: "Cihaz Ayarları sayfası USB portu aracılığıyla bağlanmış olan herhangi bir USB bellek cihazının ilgili bilgisini gösterir."
			},{
				type: "name",
				title: "Tara",
				content: "Genellikle, router otomatik olarak yeni takılmış cihazı algılar. Eğer algılamıyorsa, herhangi yeni bağlanan cihazı taramak için bu butona basın ve güncellenmiş bilgiyle sayfayı yenileyin."
			},{
				type: "name",
				title: "Birim",
				content: "USB biriminin adını gösterir."
			},{
				type: "name",
				title: "Kapasite",
				content: "USB'nin toplam bellek kapasitesini gösterir."
			},{
				type: "name",
				title: "Boş Alan",
				content: "Mevcut ve musait boş bellek alanını gösterir."
			},{
				type: "name",
				title: "Güvenle Kaldır",
				content: "Fiziksel olarak USB belleğin router'dan bağlantısını kesmeden önce, USB bellek cihazını güvenli bir şekilde kaldırmak için bu butona tıklayın.",
				children: [{
					type: "paragraph",
					content: "Lütfen dikkat edin ki Güvenli Kaldır butonu sadece router'a bağlı bir USB bellek cihazı varsa belirir ve mevcut birim meşgulken USB cihazını çıkaramayabilirsiniz."
				}]
			},{
				type: "name",
				title: "Durum",
				content: "Bu işaret kutucuğu sadece router'a bağlı bir USB bellek cihazı varsa belirir. USB cihazının dosya paylaşımını etkinleştirmek için bu seçeneği seçin."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Paylaşım Ayarları",
			CONTENT: [{
				type: "name",
				title: "Ağ/Medya Sunucu Adı",
				content: "Bağlı bulunan USB bellek cihazına erişim için kullanılan adı gösterir."
			},{
				type:"paragraph",
				content:"Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Dosya Paylaşımı",
			CONTENT: [{
				type: "name",
				title: "Hepsini Paylaş",
				content: "Tüm dosya ve klasörleri paylaşmak için Açın veta sadece seçili klasörleri paylaşmak için Kapatın."
			},{
				type: "name",
				title: "Kimlik Doğrulamayı Etkinleştir",
				content: "Kullanıcıların paylaşılan dosyalara erişmesi için geçerli kullanıcı adı ve şifresi girmesini gerektiren kimlik doğrulamayı etkinleştirmeniz kesinlikle önerilir."
			},{
				type: "name",
				title: "Dosya Adı",
				content: "Paylaşılan dosyanın adını gösterir."
			},{
				type: "name",
				title: "Dosya Yolu",
				content: "Dosyanın paylaşım yolunu gösterir."
			},{
				type: "name",
				title: "Medya Paylaşımı",
				content: "Paylaşılan dosyanın medya paylaşımına izin verilip verilmediğini gösterir."
			},{
				type: "name",
				title: "Birim Adı",
				content: "Paylaşılan birimin adını gösterir."
			},{
				type: "name",
				title: "Durum",
				content: "Ampul göstergesiyle paylaşılan klasörün durumunu gösterir."
			},{
				type: "name",
				title: "Değişiklik",
				content: "İlgili paylaşılan klasörün Değiştir veya Sil seçeneklerini gösterir."
			},{
				type: "name",
				title: "Ekle",
				content: "Yeni bir öğe girmek için bu butona tıklayın."
			},{
				type: "name",
				title: "Sil",
				content: "Tablodan seçilen bir öğeyi kaldırmak için bu butona tıklayın."
			},{
				type: "name",
				title: "Gözat",
				content: "Paylaşılan klasörü aramak için tıklayın."
			},{
				type: "name",
				title: "Misafir Ağ Erişimini Etkinleştir",
				content: "Misafir Ağındaki istemcilerin paylaşılan dosyaya erişimine izin vermek için seçin."
			},{
				type: "name",
				title: "Kimlik Doğrulamayı Etkinleştir",
				content: "Kullanıcıların paylaşılan klasörlere erişmesi için geçerli bir kullanıcı adı ve şifresi girmesini gerektirmesini istiyorsanız seçin."
			},{
				type: "name",
				title: "Yazma Erişimini Etkinleştir",
				content: "Kullanıcıların klasör içeriğinde değişiklikler yapmasına izin vermek için seçin."
			},{
				type: "name",
				title: "Medya Paylaşımını Etkinleştir",
				content: "Medya paylaşımını etkinleştirmek için seçin."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Yazdırma Sunucusu",
			CONTENT: [{
				type: "name",
				title: "Yazdırma Sunucusu",
				content: "Yazıcı sunucusu fonksiyonunu etkinleştrimek için açın."
			},{
				type: "name",
				title: "Yazıcı Adı",
				content: "Router'a bağlı olan yazıcınızın adını gösterir."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Ebeveyn Kontrolü",
			CONTENT: [{
				type: "name",
				title: "Ebeveyn Kontrolü",
				content: "Ebeveyn Kontrolü özelliğini etkinleştirmek için açın. Varsayılan olarak bu özellik devre dışıdır."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Ebeveyn Kontrolündeki Cihazlar",
			CONTENT: [{
				type: "paragraph",
				content: "Ebeveyn Kontrolündeki cihazların listesini görüntüler."
			},{
				type: "name",
				title: "Cihaz Adı",
				content: "Mevcut olarak ebeveyn kontrolünde olan tüm bağlı istemci cihazlarının adını görüntüler."
			},{
				type: "name",
				title: "MAC Adresi",
				content: "Mevcut olarak ebeveyn kontrolünde olan tüm bağlı istemci cihazların MAC adresini görüntüler."
			},{
				type: "name",
				title: "Internet Erişim Zamanı",
				content: "Bu sayfada kısıtlı erişim zaman periyotları görüntülenir.  Zaman takvimi \"Sistem Araçları -> Zaman Ayarları\" sayfasında ayarlı olan router'ın sistem zamanına bağlıdır."
			},{
				type: "name",
				title: "Tanım",
				content: "Bağlı olan cihazın kısa bir tanımını gösterir. İsteğe bağlı bir ayardır."
			},{
				type: "name",
				title: "Durum",
				content: "İlgili cihazın ebeveyn kontrolünün mevcut durumunu gösterir. (etkin veya devre dışı)."
			},{
				type: "name",
				title: "Değişiklik",
				content: "İlgili cihazın Değiştir veya Sil seçeneklerini gösterir."
			},{
				type: "step",
				title: "Yeni bir istemci cihazı kısıtlamak için",
				content:[
					"1. Ekle'ye tıklayın.",
					"2. Şu Anki Cihazları Göster'e tıklayın ve Erişim Cihazları Listesinden mevcut olarak bağlı olan bir cihaz seçin; veya bağlı olmayan bir cihazı eklemek için Cihaz Adını ve MAC adresini manuel olarak girin.",
					"3. Zaman dilimi boyunca hangi kısıtlamanın uygulanacağını belirlemek için İnternet Erişim Zamanı simgesine tıklayın.",
					"4. Tanımlama alanına kısa bir tanım girin.(İsteğe bağlı).",
					"5. Etkinleştir'i seçin.",
					"6. Tamam'a tıklayın."
				]
			},{
				type: "paragraph",
				content: "Bir ebeveyn kontrolü kaydını değiştirmek veya silmek için, bilgileri düzeltmek için Düzelt simgesine veya ilgili öğeyi kaldırmak için Çöp simgesine tıklayın."
			},{
				type: "paragraph",
				content: "Çoklu öğe silmek için, tüm öğeleri seçin ve tablonun üstündeki Sil'e tıklayın."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Misafir Ağ",
			CONTENT: [{
				type: "paragraph",
				content: "Misafir ağı, misafirlerin kablosuz ağınıza erişmek için kullanabileceği ayrı bir kablosuz ağ adıyla (SSID) ve şifresiyle ayrı bir ağ kurmanıza olanak sağlar."
			},{
				type: "name",
				title: "Misafirlerin birbirlerini görmelerine izin ver",
				content: "Misafir ağındaki kablosuz cihazların birbirini görmesine izin vermek için bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Misafirlerin yerel ağıma erişmelerine izin ver",
				content: "Misafir ağındaki kablosuz cihazların sizin yerel ağ paylaşımlarınıza ve yazıcılarınıza erişmesine izin vermek için bu işaret kutucuğunu işaretleyin."
			},{
				type: "name",
				title: "Misafir Ağı Etkinleştir",
				content: "Misafir Ağı özelliğini etkinleştirmek için bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Kablosuz Ağ Adı (SSID)",
				content: "Varsayılan misafir SSID'sini kullanın veya 32 karaktere kadar yeni ad oluşturun."
			},{
				type: "name",
				title: "SSID Gizle",
				content: "Eğer Wi-Fi ağ listesinden misafir SSID'sini gizlemek istiyorsanız bu işaret kutucuğunu seçin."
			},{
				type: "name",
				title: "Parola",
				content: "Rasgele şifre oluşturmayı kullanabilir. 8 ve 63 arasında ASCII karakter veya heksadesimal sayı sisteminde(0-9, a-f, A-F) 8-64 karakter arası olacak şekilde şifre oluşturabilirsiniz."
			},{
				type:"paragraph",
				content:"Tüm ayarlarınızı kaydetmek için Kaydet butonuna basın."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Bulut",
			CONTENT:[{
				type:"paragraph",
				content:"TP-Link bulut servisi, internet üzerinden tüm TP-Link cihazlarınıza gerçek zamanlı olarak erişim, yönetim ve uzaktan izleme imkanı sağlar."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Hesap Bilgileri",
			CONTENT:[{
				type:"paragraph",
				content:"TP-Link ID bilgileriniz görüntülenir. Düzenle ikonuna tıklayarak hesap bilgilerinizi düzenleyebilirsiniz."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Cihaz Bilgileri",
			CONTENT:[{
				type:"paragraph",
				content:"Bulut hesabı üzerinden yönetilebilen cihazlar da dahil olmak üzere, tüm cihazların bilgileri görüntülenir."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Hesapları Bağla",
			CONTENT:[{
				type:"paragraph",
				content:"Bu tabloda, şu anda cihazınıza bağlı olan tüm bulut hesapları görüntülenir."
			},{
				type:"step",
				title:"Bir kullanıcı hesabı eşleştir",
				content:["1.Eşleştir'e tıklayın.",
				"2.Eşleştirmek istediğiniz kayıtlı e-mail hesabını gir.",
				"3. Kaydet butonuna tıklayınız."]
			}]

		}

	};
})(jQuery);

