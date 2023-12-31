(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää asianmukaisia tietoja laaja-alueverkkoyhteydestä (Internet-yhteydestä)."
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Ainutkertainen fyysinen osoite, joka on annettu reitittimen Internet (WAN) -portille."
			},{
				type: "name",
				title: "IP-osoite",
				content: "IPv4-osoite, joka on annettu reitittimen Internet (WAN) -portille. Jos IP-osoitteeksi ilmoitetaan 0.0.0.0, Internet-yhteyttä ei ole."
			},{
				type: "name",
				title: "Aliverkon peite",
				content: "Tämä parametri määrittää IP-osoitteen verkon osuuden ja isäntälaitteen osuuden."
			},{
				type: "name",
				title: "Oletusyhdyskäytävä",
				content: "IP-osoite, jolla reititin yhdistetään verkkoon."
			},{
				type: "name",
				title: "Ensisijainen DNS/Toissijainen DNS",
				content: "DNS (Domain Name System) kääntää isäntälaitteen nimet ja Internet-toimialueet IP-osoitteiksi. Internet-palveluntarjoaja (ISP) määrää näiden DNS-palvelinten tiedot."
			},{
				type: "name",
				title: "Yhteystyyppi",
				content: "Internet (WAN) -portin nykyinen yhteystyyppi."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Ainutkertainen fyysinen osoite, joka on annettu reitittimen Internet (WAN) -portille."
			},{
				type: "name",
				title: "IP-osoite",
				content: "IPv6-osoite, joka on annettu reitittimen Internet (WAN) -portille."
			},{
				type: "name",
				title: "Oletusyhdyskäytävä",
				content: "IP-osoite, jolla reititin yhdistetään verkkoon."
			},{
				type: "name",
				title: "Ensisijainen DNS/Toissijainen DNS",
				content: "DNS (Domain Name System) kääntää isäntälaitteen nimet ja Internet-toimialueet IP-osoitteiksi. Internet-palveluntarjoaja (ISP) määrää näiden DNS-palvelinten tiedot."
			},{
				type: "name",
				title: "Yhteystyyppi",
				content: "Internet (WAN) -portin nykyinen yhteystyyppi."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Langaton yhteys",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää asianmukaista tietoa langattomasta verkosta."
			},{
				type: "name",
				title: "Langattoman verkon nimi (SSID)",
				content: "Langattoman verkon nimi, tunnetaan myös nimellä SSID (Service Set Identifier)."
			},{
				type: "name",
				title: "Langaton radio",
				content: "Langattoman verkon nykytila (On tai Off)."
			},{
				type: "name",
				title: "Tila",
				content: "Langattoman verkon nykytila."
			},{
				type: "name",
				title: "Kanavanleveys",
				content: "Langattoman verkon kanavan kaistanleveys."
			},{
				type: "name",
				title: "Kanava",
				content: "Nykyinen langaton kanava ja sitä vastaava taajuus (GHz)."
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Reitittimen langattoman verkon radion MAC-osoite."
			},{
				type: "name",
				id: "status_wds",
				title: "WDS:n tila",
				content: "WDS-tilan nykytila (käytössä tai poissa käytöstä)."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää Ethernet (LAN) -porttien tiedot."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Ainutkertainen fyysinen osoite, joka on annettu reitittimen Ethernet (LAN) -portille."
			},{
				type: "name",
				title: "IP-osoite",
				content: "IPv4-osoite, joka on annettu reitittimen Ethernet (LAN) -portille."
			},{
				type: "name",
				title: "Aliverkon peite",
				content: "Tämä parametri määrittää IP-osoitteen verkon osuuden ja isäntälaitteen osuuden."
			},{
				type: "name",
				title: "Dhcp",
				content: "Näyttää, onko reitittimen kiinteä DHCP-palvelin aktiivinen LAN-portin laitteille."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Ainutkertainen fyysinen osoite, joka on annettu reitittimen Ethernet (LAN) -portille."
			},{
				type: "name",
				title: "IP-osoite",
				content: "IPv6-osoite, joka on annettu reitittimen Ethernet (LAN) -portille."
			},{
				type: "name",
				title: "Link-local-osoite",
				content: "IPv6-linkkiosoite LAN-liittymälle."
			},{
				type: "name",
				title: "Määrätty tyyppi",
				content: "IPv6-osoitetyyppi LAN-liittymälle."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Vierasverkko",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää langattoman verkon tiedot vieraille."
			},{
				type: "name",
				title: "Langattoman verkon nimi (SSID)",
				content: "Vierasverkon langattoman verkon nimi (SSID)."
			},{
				type: "name",
				title: "Piilota SSID",
				content: "Näyttää, onko vierasverkon langattoman verkon nimi (SSID) piilotettu."
			},{
				type: "name",
				title: "Langaton radio",
				content: "Vierasverkon nykytila (On tai Off)."
			},{
				type: "name",
				title: "Anna vieraiden nähdä toisensa",
				content: "Näyttää, saavatko vierasverkon kaikki laitteet kommunikoida toistensa kanssa."
			}]
		},
		STATUS_USB: {
			TITLE: "USB-laitteet",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää nykyisten USB-porttien kautta kytkettyjen USB-tallennusvälineiden ja/tai tulostimien tiedot."
			},{
				type: "name",
				title: "Tulostin",
				content: "Kytketyn tulostimen nimi."
			},{
				type: "name",
				title: "USB-levy",
				content: "Reitittimeen kytketyn USB-aseman nimi."
			},{
				type: "name",
				title: "Yhteensä",
				content: "Kytketyn USB-tallennusvälineen kokonaistallennuskapasiteetti."
			},{
				type: "name",
				title: "Käytettävissä",
				content: "Kytketyn USB-tallennusvälineen keskimääräinen tallennuskapasiteetti."
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Suorituskyky",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää nykyisen reitittimen suorituskyvyn."
			},{
				type: "name",
				title: "Suorittimen kuorma",
				content: "Tämän hetkinen CPU:n käyttö."
			},{
				type: "name",
				title: "Muistin käyttö",
				content: "Tämän hetkinen muistin käyttö."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Langattoman verkon asiakkaat",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää kaikkien verkkoon tällä hetkellä kytkettyjen langallisten laitteiden tiedot."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Langattomat asiakaslaitteet",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää kaikkien verkkoon tällä hetkellä kytkettyjen langattomien laitteiden tiedot."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Internet-yhteystyyppi: Staattinen IP-osoite"
			},{
				type: "paragraph",
				content: "Valitse tämä tyyppi, jos sinulla on tietty (kiinteä) IP-osoite, aliverkon peite, yhdyskäytävä ja DNS-parametrit ISP:ltä."
			},{
				type: "name",
				title: "IP-osoite/Aliverkon peite/Oletusyhdyskäytävä/Ensisijainen DNS/Toissijainen DNS",
				content: "Anna ISP:n antamat tiedot."
			},{
				type: "name",
				title: "MTU-koko",
				content: "MTU:n (Maximum Transmission Unit) oletus- ja tyypillinen koko useimmissa Ethernet-verkoissa on 1500 tavua. MTU:n oletuskokoa EI suositella muutettavan, ellei ISP niin vaadi."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: Dynaaminen IP-osoite"
			},{
				type: "paragraph",
				content: "Valitse tämä tyyppi, jos ISP on antanut DHCP-palvelinyhteyden."
			},{
				type: "name",
				title: "IP-osoite/Aliverkon peite/Oletusyhdyskäytävä/Ensisijainen DNS/Toissijainen DNS",
				content: "DHCP-palvelin määrittää nämä parametrit automaattisesti ISP:ltä."
			},{
				type: "name",
				title: "Uudista",
				content: "Napsauta tätä painiketta saadaksesi uudet IP-parametrit DHCP-palvelimelta."
			},{
				type: "name",
				title: "Vapauta",
				content: "Napsauta tätä painiketta vapauttaaksesi kaikki DHCP-palvelimen määräämät IP-osoitteet."
			},{
				type: "name",
				title: "Käytä seuraavaa DNS-osoitetta",
				content: "Jos ISP antaa yhden tai kaksi DNS-osoitetta, valitse tämä valintaruutu ja syötä ensisijainen DHS-osoite ja toissijainen DNS-osoite vastaaviin syöttökenttiin. Muutoin ISP määrittää DNS-osoitteet dynaamisesti."
			},{
				type: "name",
				title: "MTU-koko",
				content: "MTU:n (Maximum Transmission Unit) oletus- ja tyypillinen koko useimmissa Ethernet-verkoissa on 1500 tavua. MTU:n oletuskokoa EI suositella muutettavan, ellei ISP niin vaadi."
			},{
				type: "name",
				title: "Isännän nimi",
				content: "Anna tähän kenttään arvo määrittääksesi reitittimen isäntälaitteen nimen."
			},{
				type: "name",
				title: "Hanki IP Unicast DHCP:llä",
				content: "Valitse tämä valintaruutu, jos ISP:n DHCP-palvelin ei tue lähetyssovelluksia etkä voi saada IP-osoitetta dynaamisesti."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: PPPoE"
			},{
				type: "paragraph",
				content: "Valitse tämä tyyppi, jos käytät DSL (Digital Subscriber Line) -palvelua ja olet saanut käyttäjätunnuksen ja salasanan ISP:ltä."
			},{
				type: "name",
				title: "Käyttäjätunnus/salasana",
				content: "Anna ISP:n antama käyttäjätunnus ja salasana. Nämä kentät erottelevat pienet ja suuret kirjaimet."
			},{
				type: "name",
				title: "IP-osoite/Ensisijainen DNS/Toissijainen DNS",
				content: "DHCP-palvelin määrittää nämä parametrit automaattisesti ISP:ltä."
			},{
				type: "name",
				title: "Toissijainen yhteys (Ei mitään, Dynaaminen IP, Staattinen IP)",
				children: [{
					type: "name",
					title: "Ei mitään",
					content: "Valitse, jos on olemassa toissijainen yhteys."
				},{
					type: "name",
					title: "Dynaaminen IP-osoite",
					content: "Valitse, määrääkö ISP IP-osoitteen ja aliverkonpeitteen automaattisesti.",
					children: [{
						type: "name",
						title: "Uudista",
						content: "Napsauta tätä painiketta uusiaksesi ISP:ltä saamasi IP-parametrit."
					},{
						type: "name",
						title: "Vapauta",
						content: "Napsauta tätä painiketta vapauttaaksesi annetut IP-parametrit."
					}]
				},{
					type: "name",
					title: "Staattinen IP-osoite",
					content: "Valitse, antaako ISP IP-osoitteen ja aliverkon peitteen, ja anna nämä tiedot vastaaviin kenttiin."
				}]
			},{
				type: "name",
				title: "MTU-koko",
				content: "MTU:n (Maximum Transmission Unit) tyypillinen koko Ethernet-verkoissa on 1480 tavua.",
				children: [{
					type: "note",
					title: "Huomautus",
					content: "Harvinaisissa tapauksissa ISP vaatii, että säädät MTU:n koon parantaaksesi verkon suorituskykyä. Älä muuta tätä arvoa, ellei se ole täysin välttämätöntä."
				}]
			},{
				type: "name",
				title: "Palvelun nimi/Käytön keskittimen nimi",
				content: "Oletuksena Service Name (Palvelun nimi) ja Access Concentrator (AC) Name (Käytön keskittimen (AC) nimi) jätetään tyhjiksi. Näitä kenttiä ei tule konfiguroida, ellei ISP niin vaadi."
			},{
				type: "name",
				title: "Tunnista online-aikaväli",
				content: "Anna aikaväliarvo välillä 0-120 (sekunneissa), jona reititin tunnistaa käytön keskittimen verkossa joka aikavälin välein. Oletusarvo on 10."
			},{
				type: "name",
				title: "IP-osoite",
				content: "Jos ISP antaa tietyn (kiinteän) IP-osoitteen, valitse Käytä seuraavaa IP-osoitetta ja syötä IP-osoite kenttään. Valitse muussa tapauksessa Hanki dynaamisesti ISP:ltä saadaksesi palvelimen määräämän IP-osoitteen automaattisesti."
			},{
				type: "name",
				title: "DNS-osoite/Ensisijainen DNS/Toissijainen DNS",
				content: "Jos ISP antaa tietyn (kiinteän) IP-osoitteen, valitse Käytä seuraavaa IP-osoitetta ja syötä osoitteet Ensisijainen DNS ja Toissijainen DNS -kenttiin tässä järjestyksessä. Valitse muussa tapauksessa Hanki dynaamisesti ISP:ltä saadaksesi palvelimen määräämän DNS:n IP-osoitteen automaattisesti."
			},{
				type: "name",
				title: "Yhteystila",
				content: "Valitse asianmukainen yhteystila, joka määrittää, miten Internet-yhteys muodostetaan.",
				children: [{
					type: "name",
					title: "Automaattinen",
					content: "Tässä tilassa Internet-yhteys muodostuu uudelleen automaattisesti, jos se katkeaa."
				},{
					type: "name",
					title: "Tarpeen mukaan",
					content: "Tässä tilassa Internet-yhteys katkaistaan automaattisesti, kun laitetta ei ole käytetty tiettyyn aikaan (Max Idle Time). Yhteys muodostetaan uudelleen, kun yrität käyttää Internetiä uudelleen."
				},{
					type: "name",
					title: "Aikapohjainen",
					content: "Tässä tilassa Internet-yhteys muodostetaan tietyn aikataulun mukaisesti. Jos tämä vaihtoehto valitaan, anna aloitus- ja lopetusaika; molemmat muodossa TT:MM."
				},{
					type: "name",
					title: "Käsin",
					content: "Tässä tilassa Internet-yhteyttä hallitaan manuaalisesti napsauttamalla Yhdistä- tai Katkaise yhteys -painiketta. Tämä tila tukee myös Pisin käyttämättömyysaika -toimintoa. Pisin käyttämättömyysaika -kenttään pisin aika (minuuteissa), jonka Internet-yhteys voi olla käyttämättä, ennen kuin se katkaistaan. Oletusarvo on 15 minuuttia. Jos haluat, että Internet-yhteys on aina aktiivinen, anna 0 (nolla)."
				},{
					type: "note",
					title: "Huomautus",
					content: "Aikapohjainen yhteystila astuu voimaan vain, kun järjestelmäaika on määritetty sivulla Lisäasetukset → Järjestelmätyökalut → AIka-asetukset."
				}]
			},{
				type: "title",
				title: "Internet-yhteystyyppi: BigPond-kaapeli"
			},{
				type: "paragraph",
				content: "Valitse tämä tyyppi, jos ISP tarjoaa BigPond-kaapeliyhteyden."
			},{
				type: "name",
				title: "Käyttäjätunnus/salasana",
				content: "Anna ISP:n antama käyttäjätunnus ja salasana. Nämä kentät erottelevat pienet ja suuret kirjaimet."
			},{
				type: "name",
				title: "Todennuspalvelin",
				content: "Anna todennuspalvelimen IP-osoite tai isäntänimi."
			},{
				type: "name",
				title: "Vahvista toimialue",
				content: "Anna palvelimen toimialueen nimen pääte (perustuu sijaintiisi). Esimerkiksi nsw.bigpond.net.au alueelle NSW/ACT, vic.bigpond.net.au alueelle VIC/TAS/WA/SA/NTtai qld.bigpond.net.au alueelle QLD."
			},{
				type: "name",
				title: "MTU-koko",
				content: "MTU:n (Maximum Transmission Unit) oletus- ja tyypillinen koko useimmissa Ethernet-verkoissa on 1500 tavua. MTU:n oletuskokoa EI suositella muutettavan, ellei ISP niin vaadi."
			},{
				type: "name",
				title: "Yhteystila",
				content: "Valitse asianmukainen yhteystila, joka määrittää, miten Internet-yhteys muodostetaan.",
				children: [{
					type: "name",
					title: "Automaattinen",
					content: "Tässä tilassa Internet-yhteys muodostuu uudelleen automaattisesti, jos se katkeaa."
				},{
					type: "name",
					title: "Tarpeen mukaan",
					content: "Tässä tilassa Internet-yhteys katkaistaan automaattisesti, kun laitetta ei ole käytetty tiettyyn aikaan (Max Idle Time). Yhteys muodostetaan uudelleen, kun yrität käyttää Internetiä uudelleen."
				},{
					type: "name",
					title: "Käsin",
					content: "Tässä tilassa Internet-yhteyttä hallitaan manuaalisesti napsauttamalla Yhdistä- tai Katkaise yhteys -painiketta. Tämä tila tukee myös Pisin käyttämättömyysaika -toimintoa. Pisin käyttämättömyysaika -kenttään pisin aika (minuuteissa), jonka Internet-yhteys voi olla käyttämättä, ennen kuin se katkaistaan. Oletusarvo on 15 minuuttia. Jos haluat, että Internet-yhteys on aina aktiivinen, anna 0 (nolla)."
				}]
			},{
				type: "title",
				title: "Internet-yhteystyyppi: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Valitse tämä tyyppi, jos muodostat yhteyden L2TP/PPTP VPN -palvelimeen ja olet saanut ISP:ltä palvelimen käyttäjätunnuksen, salasanan ja IP-osoitteen/toimialueen nimen."
			},{
				type: "name",
				title: "Käyttäjätunnus/salasana",
				content: "Anna ISP:n antama käyttäjätunnus ja salasana. Nämä kentät erottelevat pienet ja suuret kirjaimet."
			},{
				type: "name",
				title: "IP-osoite/Ensisijainen DNS/Toissijainen DNS",
				content: "DHCP-palvelin määrittää nämä parametrit automaattisesti ISP:ltä."
			},{
				type: "name",
				title: "Toissijainen yhteys (Dynaaminen IP tai Staattinen IP)",
				children: [{
					type: "name",
					title: "Dynaaminen IP-osoite",
					content: "Valitse, määrääkö ISP IP-osoitteen ja aliverkonpeitteen automaattisesti."
				},{
					type: "name",
					title: "Staattinen IP-osoite",
					content: "Valitse, antaako ISP IP-osoitteen, aliverkon peitteen, yhdyskäytävän ja DNS-osoitteet, ja anna nämä tiedot vastaaviin kenttiin."
				}]
			},{
				type: "name",
				title: "VPN-palvelimen IP/toimialueen nimi",
				content: "Anna ISP:ltä saatu VPN-palvelimen IP-osoite tai toimialueen nimi."
			},{
				type: "name",
				title: "MTU-koko",
				content: "MTU:n (Maximum Transmission Unit) oletus- ja tyypillinen koko useimmissa Ethernet-verkoissa on 1460 tavua L2TP:lle tai 1420 tavua PPTP:lle. MTU:n oletuskokoa EI suositella muutettavan, ellei ISP niin vaadi."
			},{
				type: "name",
				title: "Yhteystila",
				content: "Valitse asianmukainen yhteystila, joka määrittää, miten Internet-yhteys muodostetaan.",
				children: [{
					type: "name",
					title: "Automaattinen",
					content: "Tässä tilassa Internet-yhteys muodostuu uudelleen automaattisesti, jos se katkeaa."
				},{
					type: "name",
					title: "Tarpeen mukaan",
					content: "Tässä tilassa Internet-yhteys katkaistaan automaattisesti, kun laitetta ei ole käytetty tiettyyn aikaan (Max Idle Time). Yhteys muodostetaan uudelleen, kun yrität käyttää Internetiä uudelleen."
				},{
					type: "name",
				title: "Käsin",
				content: "Tässä tilassa Internet-yhteyttä hallitaan manuaalisesti napsauttamalla Yhdistä- tai Katkaise yhteys -painiketta. Tämä tila tukee myös Pisin käyttämättömyysaika -toimintoa. Pisin käyttämättömyysaika -kenttään pisin aika (minuuteissa), jonka Internet-yhteys voi olla käyttämättä, ennen kuin se katkaistaan. Oletusarvo on 15 minuuttia. Jos haluat, että Internet-yhteys on aina aktiivinen, anna 0 (nolla)."
				}]
			},{
				type:"paragraph",
				content:"Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "MAC-osoitteen kloonaus",
			CONTENT: [{
				type: "name",
				title: "Käytä oletus-MAC-osoitetta",
				content: "ÄLÄ muuta reitittimen oletus-MAC-osoitetta, jos ISP ei sido annettua IP-osoitetta MAC-osoitteeseen."
			},{
				type: "name",
				title: "Käytä tämän tietokoneen MAC-osoitetta",
				content: "Valitse kopioida nykyinen reitittimeen kytketyn tietokoneen MAC-osoite, jos ISP sitoo annetun IP-osoitteen tietokoneen MAC-osoitteeseen."
			},{
				type: "name",
				title: "Käytä mukautettua MAC-osoitetta",
				content: "Anna MAC-osoite manuaalisesti, jos ISP sitoo annetun IP-osoitteen tiettyyn MAC-osoitteeseen."
			},{
				type:"paragraph",
				content:"Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "MAC-osoite",
				content: "Ainutkertainen fyysinen osoite, joka on annettu reitittimen Ethernet (LAN) -portille."
			},{
				type: "name",
				title: "IP-osoite",
				content: "Näyttää reitittimen oletus-IP-osoitteen, jolla kirjaudutaan reitittimen Internet-hallintasivullle ja joka voidaan ohittaa."
			},{
				type: "name",
				title: "Aliverkon peite",
				content: "Valitse valintaluettelosta määrätty tunnus, jota LAN-portti käyttää reitittääkseen sisäistä ja ulkoista liikennettä, tai anna uusi aliverkon peite pisteillä erotetussa desimaalimuodossa."
			},{
				type: "note",
				title: "Huomautus",
				content: "Jos uusi LAN IP-osoite ei ole samassa aliverkossa vanhan kanssa, DHCP-palvelimen IP-osoitevaranto konfiguroidaan automaattisesti; kuitenkin virtuaalipalvelin ja DMZ-isäntälaite eivät tule käyttöön ennen kuin ne määritetään uudelleen."
			},{
				type:"paragraph",
				content:"Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		IPTV:{
			TITLE: "Asetukset",
			CONTENT: [{
					type: "name",
					title: "IGMP-välityspalvelin",
					content: "Valitse IGMP (Internet Group Management Protocol) Proxy -versio, joko V2 tai V3, ISP:n antamien tietojen mukaisesti."
				},{
					type: "name",
					title: "IGMP-versio",
					content: "Valitse IGMP-välityspalvelimen versio, joko V2 tai V3, ISP:n tietojen mukaan."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Valitse ottaaksesi IPTV-ominaisuuden käyttöön."
				},
				{
					type: "name",
					title: "Tila",
					content: "Valitse ISP:n ilmoittama tila.",
					children: [
						{
							type: "name",
							title: "Välitili",
							content:"Jos ISP:tä ei ole luettelossa eikä muita parametreja vaadita, voit valita tämän tilan ja konfiguroida reitittimen LAN-portin ominaisuudet.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Määritä, toimiiko LAN-portti Internet-palveluna vai IPTV-palveluna."
							}]
						},
						{
							type: "name",
							title: "Venäjä",
							content: "Valitse, onko ISP Venäjällä ja ovatko vaaditut parametrit valmiiksi määritettyjä, mukaan lukien Internet/IP-Phone/IPTV VLAN ID:t ja Priority (Prioriteetti) ja LAN (1/2/3/4) -porttien ominaisuudet.",
							children: [{
								type: "name",
								title: "IPTV:n Multicast VLAN -tunnus/Prioriteetti",
								content: "Voit ottaa halutessasi IPTV-monilähetysominaisuuden käyttöön ja määrittää VLAN ID ja Prioriteetti -asetukset ISP:n tietojen mukaisesti."
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Valitse, onko ISP ExStream Singaporesta ja ovatko vaaditut parametrit valmiiksi määritettyjä, mukaan lukien Internet/IPTV VLAN ID:t ja Prioriteetti ja LAN (1/2/3/4) -porttien ominaisuudet."
						},
						{
							type: "name",
							title: "Malesia-Unifi",
							content: "Valitse, onko ISP Unifi Malesiasta ja ovatko vaaditut parametrit valmiiksi määritettyjä, mukaan lukien Internet/IPTV VLAN ID:t ja Prioriteetti ja LAN (1/2/3/4) -porttien ominaisuudet."
						},
						{
							type: "name",
							title: "Malesia-Maxis",
							content: "Valitse, onko ISP Maxis Malesiasta ja ovatko vaaditut parametrit valmiiksi määritettyjä, mukaan lukien Internet/IP-Phone/IPTV VLAN ID:t ja Prioriteetti ja LAN (1/2/3/4) -porttien ominaisuudet."
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Valitse, jos ISP:si on Portugal-MEO ja vaaditut parametrit on määritetty valmiiksi, mukaan lukien Internet VLAN ID ja Priority (Prioriteetti) ja LAN (1/2/3/4) -porttien ominaisuudet."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Valitse, jos ISP:si on Portugal-Vodafone ja vaaditut parametrit on määritetty valmiiksi, mukaan lukien Internet/IP-Phone/IPTV VLAN ID:t ja Priority (Prioriteetti). Voit tarvittaessa määrätä LAN-portit uudelleen toiminnoilleen (Internet-palveluntarjoaja/IPTV-palveluntarjoaja/IP-puhelinpalveluntarjoaja/Internet-IPTV-palveluntarjoaja)."
						},
						{
							type: "name",
							title: "Mukautettu",
							content: "Valitse, jos ISP:täsi ei ole luettelossa mutta se antaa vaaditut parametrit, mukaan lukien Internet/IP-Phone/IPTV VLAN ID:t ja Prioriteetti ja LAN (1/2/3/4) -porttien ominaisuudet.",
							children: [{
								type: "name",
								title: "Internet/IP-puhelin/IPTV VLAN -tunnus/Prioriteetti",
								content: "Määrtä VLAN ID:t ja prioriteetit ISP:ltä saatujen tietojen mukaisesti."
							},{
								type: "name",
								title: "802.11Q merkintä",
								content: "Valitse, merkitäänkö Internet-paketteihin 802.11Q."
							},{
								type: "name",
								title: "IPTV:n Multicast VLAN -tunnus/Prioriteetti",
								content: "Voit ottaa halutessasi IPTV-monilähetysominaisuuden käyttöön ja määrittää VLAN ID ja Prioriteetti -asetukset ISP:n tietojen mukaisesti."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Määritä, toimiiko LAN-portti Internet-palveluna, PI-puhelinpalveluna vai IPTV-palveluna."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Asetukset",
			CONTENT: [{
				type: "name",
				title: "DHCP-palvelin",
				content: "Oletuksena DHCP (Dynamic Host Configuration Protocol) -palvelin on käytössä; se määrittää TCP/IP-parametrit dynaamisesti asiakaslaitteille IP-osoitevarannosta. ÄLÄ poista DHCP-palvelinta käytöstä, ellei sinulla ole toista DHCP-palvelinta tai haluat määrittää TCP/IP-parametrit manuaalisesti jokaiselle verkon asiakaslaitteelle."
			},{
				type: "name",
				title: "IP-osoitevaranto",
				content: "Anna asiakkaille vuokrattavien IP-osoitteiden alue."
			},{
				type: "name",
				title: "Osoitteen vuokra-aika",
				content: "Anna aika, jonka IP-osoite vuokrataan asiakkaalle; välillä 1-2880 minuuttia. Oletusarvo on 120 minuuttia."
			},{
				type: "name",
				title: "Oletusyhdyskäytävä",
				content: "Anna LAN-verkon IP-osoite.  (valinnainen)"
			},{
				type: "name",
				title: "Ensisijainen DNS/Toissijainen DNS",
				content: "Anna ISP:n antamat parametrit. (valinnainen)"
			},{
				type:"paragraph",
				content:"Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Osoitteen varaus",
			CONTENT: [{
				type: "paragraph",
				content: "Voit varata IP-osoitteen manuaalisesti reitittimeen kytketylle asiakaslaitteelle. Kun IP-osoite on varattu, DHCP-palvelin antaa sen ainoastaan kyseiselle asiakaslaitteelle."
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Näyttää asiakaslaitteen MAC-osoitteen DHCP:n varaamalla IP-osoitteella."
			},{
				type: "name",
				title: "Varattu IP-osoite",
				content: "Näyttää asiakaslaitteen varatun IP-osoitteen."
			},{
				type: "name",
				title: "Kuvaus",
				content: "Näyttää asiakaslaitteen kuvauksen."
			},{
				type: "name",
				title: "Tila",
				content: "Näyttää asiakaslaitteen nykytilan (käytössä tai poissa käytöstä)."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Näyttää vaihtoehdot muokata tai poistaa vastaavan asiakkaan."
			},{
				type: "step",
				title: "IP-osoitteen varaaminen",
				content:[
					"1. Napsauta Lisää.",
					"2. Anna haluamasi asiakaslaitteen MAC-osoite.",
					"3. Anna IP-osoite, jonka haluat varata asiakkaalle.",
					"4. Anna asiakaslaitteen kuvaus.",
					"5. Valitse Ota käyttöön.",
					"6. Napsauta OK."
				]
			},{
				type: "step",
				title: "Olemassa olevan asiakaslaitteen muokkaaminen tai poistaminen",
				content: "Napsauta taulukossa muokkauskuvaketta tai roskakorikuvaketta muokattavan tai poistettavan asiakaslaitteen kohdalla."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "DHCP-asiakasluettelo",
			CONTENT: [{
				type: "name",
				title: "Asiakaslaitenumero",
				content: "Näyttää liittyvien DHCP-asiakaslaitteiden määrän."
			},{
				type: "name",
				title: "Asiakkaan nimi",
				content: "Näyttää DHCP-asiakaslaitteen nimen."
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Näyttää MAC-osoitteen."
			},{
				type: "name",
				title: "Määrätty IP-osoite",
				content: "Näyttää DHCP-palvelimen asiakaslaitteelle antaman IP-osoitteen."
			},{
				type: "name",
				title: "Vuokra-aika",
				content: "Näyttää, paljonko IP-osoitteen vuokra-ajasta on jäljellä."
			},{
				type: "name",
				title: "Päivitä",
				content: "Päivitä DHCP-asiakaslaiteluettelo napsauttamalla tätä."
			}]
		},

		DDNS: {
			TITLE: "Dynaaminen DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynaamisella DNS:llä voit määrittää kiinteän isäntälaitteen ja toimialueen nimen dynaamiselle Internet-IP-osoitteelle. Siitä on hyötyä, kun isännöit omaa sivustoa, FTP-palvelinta tai muuta reitittimen takana sijaitsevaa palvelinta. Ensin sinun tulee rekisteröityä dynaamisen DNS-palveluntarjoajan, kuten www.dyndns.com, kanssa. Anna sitten rekisteröintitiedot."
			},{
				type: "step",
				title: "Dynaamisen DNS:n määrittäminen",
				content: [
					"1. Valitse DDNS-palveluntarjoaja.",
					"2. Anna DDNS-tilisi käyttäjätunnus ja salasana.",
					"3. Anna dynaamisen DNS-palveluntarjoajan kanssa rekisteröimäsi verkkotunnus.",
					"4. Valitse, millä aikavälillä dynaamisen DNS:n päivityspyyntö lähetetään.",
					"5. Jos palveluntarjoajasi on NO-IP, valitse WAN IP Binding varmistaaksesi, että verkkotunnus on sidottu tämän reitittimen WAN IP -osoitteeseen.",
					"6. Napsauta Kirjaudu ja Tallenna."
				]
			},{
				type: "note",
				title:"Huomautus",
				content: "Jos haluat käyttää uutta DDNS-tiliä, kirjaudu ensin ulos ja kirjaudu sitten sisään uudella tilillä."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "Dynaaminen DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynaamisella DNS:llä voit määrittää kiinteän isäntälaitteen ja toimialueen nimen dynaamiselle Internet-IP-osoitteelle. Siitä on hyötyä, kun isännöit omaa sivustoa, FTP-palvelinta tai muuta reitittimen takana sijaitsevaa palvelinta. Ensin sinun tulee rekisteröityä dynaamisen DNS-palveluntarjoajan, kuten www.dyndns.com, kanssa. Anna sitten rekisteröintitiedot."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Toimialueen nimiluettelo",
			CONTENT: [{
				type: "paragraph",
				content: "Tässä taulukossa näytetään DDNS-verkkotunnukset, jotka on rekisteröity TP-Link-tunnuksellesi."
			},{
				type:"step",
				title: "Uuden verkkotunnuksen rekisteröinti",
				content: [
					"1. Napsauta Register.",
					"2. Anna verkkotunnus.",
					"3. Napsauta Tallenna."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Staattinen reititys",
			CONTENT: [{
				type: "paragraph",
				content: "Staattisella reitityksellä määritetään etukäteen kiinteä reitti verkkotietopaketeille niiden kulkiessa tietylle isäntälaitteelle tai tiettyyn verkkoon."
			},{
				type: "step",
				title: "Staattisen reitityksen määrittäminen",
				content: [
					"1. Napsauta Lisää.",
					"2. Verkkokohde - Anna IP-osoite pisteillä erotetussa desimaalimuodossa määrittääksesi tälle staattisen reitin.",
					"3. Aliverkon peite - Anna aliverkon peite pisteillä erotetussa desimaalimuodossa määrittääksesi IP-osoitteen verkko-osuuden ja isäntälaiteosuuden.",
					"4. Oletusyhdyskäytävä - Anna yhdyskäytävän IP-osoite pisteillä erotetussa desimaalimuodossa yhdistääksesi reitittimen verkkoon tai isäntälaitteeseen.",
					"5. Liittymä - Valitse LAN tai WAN määrittääksesi verkkokohdetyypin.",
					"6. Kuvaus - Anna tämän kohdan lyhyt kuvaus.",
					"7. Valitse Ota käyttöön.",
					"8. Napsauta OK."
				]
			},{
				type: "step",
				title: "Olemassa olevan syötteen muokkaaminen tai poistaminen",
				content: "Napsauta taulukossa muokkauskuvaketta tai roskakorikuvaketta muokattavan tai poistettavan syötteen kohdalla."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Järjestelmän reititystaulukko",
			CONTENT: [{
				type: "paragraph",
				content: "Järjestelmän reititystaulukossa näytetään kaikki käytössä olevat pätevät reittisyötteet."
			},{
				type: "paragraph",
				content: "Päivitä reititystaulukko napsauttamalla Päivitä."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Asetukset",
			CONTENT: [{
				type: "name",
				title: "Alue",
				content: "Valitse alue avattavasta valikosta. Jos maasi tai alueesi ei ole luettelossa, langattoman radion käyttö saattaa olla rajoitettu alueellasi."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Langaton 2,4GHz",
			CONTENT: [{
				type: "name",
				title: "Ota langaton radio käyttöön",
				content: "Valitse tämä valintaruutu ottaaksesi käyttöön 2,4 GHz:n langattoman radiotaajuuden."
			},{
				type: "name",
				title: "Langattoman verkon nimi (SSID)",
				content: "Voit jättää verkon oletusnimen (SSID) silleen tai antaa uuden nimen (enintään 32 merkkiä). Tämä kenttä erottelee kirjainkoon."
			},{
				type: "name",
				title: "Piilota SSID",
				content: "Valitse tämä valintaruutu, jos haluat piilottaa 2,4 GHz:n verkon nimen (SSID) Wi-Fi-verkkojen luettelosta."
			},{
				type: "name",
				title: "Suojaus",
				content: "Valitse jokin seuraavista suojausvaihtoehdoista:",
				children: [{
					type: "name",
					title: "Ei suojausta",
					content: "Valitse tämä vaihtoehto, jos haluat poistaa langattoman verkon suojauksen käytöstä. Suositellaan, että otat langattoman verkon suojauksen käyttöön suojataksesi langattoman verkkosi luvattomalta käytöltä."
				},{
					type: "name",
					title: "WPA/WPA2 – Personal",
					content: "Valitse tämä vaihtoehto ottaaksesi käyttöön vakiotodennusmenetelmän, joka perustuu PSK:hon (Pre-shared Key); kutsutaan myös salasanaksi. Tätä vaihtoehtoa suositellaan. Jos valitset sen, konfiguroi seuraavat.",
					children: [{
						type: "name",
						title: "Versio",
						content: "Valitse langattoman verkkosi suojausversio.",
						children: [{
							type: "name",
							title: "Automaattinen",
							content: "Tämä vaihtoehto tukee WPA (Wi-Fi Protected Access) -standardin useaa versiota, kuten WPA ja WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Tämä vaihtoehto tukee vain TKIP-salausta, joka takaa hyvän suojaustason."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Tämä vaihtoehto tukee AES-salausta, joka tarjoaa paremman suojaustason kuin WPA-PSK, ja sitä suositellaan."
						}]
					},{
						type: "name",
						title: "Salaus",
						content: "Valitse suojauksen salaustyyppi: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) tai Auto (sekä TKIP että AES). TKIP-salausta EI suositella, jos reititin toimii 802.11n-tilassa, koska 802.11n ei tue TKIP:iä. Jos TKIP valitaan, WPS-toiminto poistetaan käytöstä."
					},{
						type: "name",
						title: "Salasana",
						content: "Anna tähän kenttään langattoman verkon salasana pituudeltaan 8-63 ASCII-merkkiä tai 8-64 heksadesimaalista merkkiä."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Enterprise",
					content: "Valitse tämä vaihtoehto ottaaksesi käyttöön edistyneemmän todennusmenetelmän, joka hyödyntää RADIUS (Remote Authentication Dial In User Service) -palvelinta. Jos tämä valitaan, WPS-toiminto poistetaan käytöstä.",
					children: [{
						type: "name",
						title: "Versio",
						content: "Valitse langattoman verkkosi suojausversio.",
						children:[{
							type: "name",
							title: "Automaattinen",
							content: "Tämä vaihtoehto tukee WPA (Wi-Fi Protected Access) -standardin useaa versiota, kuten WPA ja WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Tämä vaihtoehto tukee vain TKIP-salausta, joka takaa hyvän suojaustason."
						},{
							type: "name",
							title: "WPA2",
							content: "Tämä vaihtoehto tukee AES-salausta, joka tarjoaa paremman suojaustason kuin WPA-PSK, ja sitä suositellaan."
						}]
					},{
						type: "name",
						title: "Salaus",
						content: "Valitse suojauksen salaustyyppi: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) tai Auto (sekä TKIP että AES). TKIP-salausta EI suositella, jos reititin toimii 802.11n-tilassa, koska 802.11n ei tue TKIP:iä. Jos TKIP valitaan, WPS-toiminto poistetaan käytöstä."
					},{
						type: "name",
						title: "RADIUS-palvelimen IP-osoite",
						content: "Anna RADIUS-palvelimen IP-osoite."
					},{
						type: "name",
						title: "RADIUS-portti",
						content: "Anna RADIUS-palvelimen portin numero."
					},{
						type: "name",
						title: "RADIUS-salasana",
						content: "Anna RADIUS-palvelimen jaettu salasana."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Valitse tämä vaihtoehto ottaaksesi käyttöön perustodennusmenetelmän, jos jokin asiakaslaite voi käyttää langatonta verkkoa ainoastaan WEP:illä (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Tyyppi",
						content: "Valitse langattomalle verkollesi todennustyyppi. Oletusasetus on Auto, mikä valitsee automaattisesti avoimen järjestelmän tai jaetun avaimen, perustuen langattomien asiakaslaitteiden kykyihin ja käyttöpyyntöihin."
					},{
						type: "name",
						title: "WEP-avaimen muoto",
						content: "Käytä joko ASCII- tai heksadesimaalimuotoa. ASCII-muoto koostuu aakkosista ja numeroista. Heksadesimaalimuoto koostuu numeroista (0-9) ja kirjaimista (A-F, a-f)."
					},{
						type: "name",
						title: "Avaimen tyyppi",
						content: "Valitse WEP-avaimen pituus.",
						children: [{
							type: "name",
							title: "64-bittinen",
							content: "Voit syöttää 10 heksadesimaalinumeroa (0-9, A-F, a-f) tai 5 ASCII-merkkiä WEP-arvo -kenttään."
						},{
							type: "name",
							title: "128-bittinen",
							content: "Voit syöttää 26 heksadesimaalinumeroa (0-9, A-F, a-f) tai 13 ASCII-merkkiä WEP-arvo -kenttään."
						}]
					},{
						type: "name",
						title: "Avainarvo",
						content: "Anna WEP-avain asianmukaiseen kenttään."
					}]
				}]
			},{
				type: "name",
				title: "Tila",
				content: "Valitse siirrolle yhdistelmätila."
			},{
				type: "name",
				title: "Kanavanleveys",
				content: "Valitse 2,4 GHz:n langattoman verkon kaistanleveys."
			},{
				type: "name",
				title: "Kanava",
				content: "Valitse 2,4 GHz:n langattoman verkon kanava. Suositellaan, että kanavaksi jätetään Auto, jos langaton yhteys ei katkeile."
			},{
				type: "name",
				title: "Lähetysteho",
				content: "Valitse joko Korkea,Keski tai Matala tiedonsiirtoteholle. Oletus- ja suositeltu asetus on Korkea."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Langaton 5GHz",
			CONTENT: [{
				type: "name",
				title: "Ota langaton radio käyttöön",
				content: "Valitse tämä valintaruutu ottaaksesi käyttöön 5 GHz:n langattoman radiotaajuuden."
			},{
				type: "name",
				title: "Langattoman verkon nimi (SSID)",
				content: "Voit jättää verkon oletusnimen (SSID) silleen tai antaa uuden nimen (enintään 32 merkkiä). Tämä kenttä erottelee kirjainkoon."
			},{
				type: "name",
				title: "Piilota SSID",
				content: "Valitse tämä valintaruutu, jos haluat piilottaa 5 GHz:n verkon nimen (SSID) Wi-Fi-verkkojen luettelosta."
			},{
				type: "name",
				title: "Suojaus",
				content: "Valitse jokin seuraavista suojausvaihtoehdoista:",
				children: [{
					type: "name",
					title: "Ei suojausta",
					content: "Valitse tämä vaihtoehto, jos haluat poistaa langattoman verkon suojauksen käytöstä. Suositellaan, että otat langattoman verkon suojauksen käyttöön suojataksesi langattoman verkkosi luvattomalta käytöltä."
				},{
					type: "name",
					title: "WPA/WPA2 – Personal",
					content: "Valitse tämä vaihtoehto ottaaksesi käyttöön vakiotodennusmenetelmän, joka perustuu PSK:hon (Pre-shared Key); kutsutaan myös salasanaksi. Tätä vaihtoehtoa suositellaan. Jos valitset sen, konfiguroi seuraavat.",
					children: [{
						type: "name",
						title: "Versio",
						content: "Valitse langattoman verkkosi suojausversio.",
						children: [{
							type: "name",
							title: "Automaattinen",
							content: "Tämä vaihtoehto tukee WPA (Wi-Fi Protected Access) -standardin useaa versiota, kuten WPA ja WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Tämä vaihtoehto tukee vain TKIP-salausta, joka takaa hyvän suojaustason."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Tämä vaihtoehto tukee AES-salausta, joka tarjoaa paremman suojaustason kuin WPA-PSK, ja sitä suositellaan."
						}]
					},{
						type: "name",
						title: "Salaus",
						content: "Valitse suojauksen salaustyyppi: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) tai Auto (sekä TKIP että AES). TKIP-salausta EI suositella, jos reititin toimii 802.11n-tilassa, koska 802.11n ei tue TKIP:iä. Jos TKIP valitaan, WPS-toiminto poistetaan käytöstä."
					},{
						type: "name",
						title: "Salasana",
						content: "Anna tähän kenttään langattoman verkon salasana pituudeltaan 8-63 ASCII-merkkiä tai 8-64 heksadesimaalista merkkiä."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Enterprise",
					content: "Valitse tämä vaihtoehto ottaaksesi käyttöön edistyneemmän todennusmenetelmän, joka hyödyntää RADIUS (Remote Authentication Dial In User Service) -palvelinta. Jos tämä valitaan, WPS-toiminto poistetaan käytöstä.",
					children: [{
						type: "name",
						title: "Versio",
						content: "Valitse langattoman verkkosi suojausversio.",
						children: [{
							type: "name",
							title: "Automaattinen",
							content: "Tämä vaihtoehto tukee WPA (Wi-Fi Protected Access) -standardin useaa versiota, kuten WPA ja WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Tämä vaihtoehto tukee vain TKIP-salausta, joka takaa hyvän suojaustason."
						},{
							type: "name",
							title: "WPA2",
							content: "Tämä vaihtoehto tukee AES-salausta, joka tarjoaa paremman suojaustason kuin WPA-PSK, ja sitä suositellaan."
						}]
					},{
						type: "name",
						title: "Salaus",
						content: "Valitse suojauksen salaustyyppi: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) tai Auto (sekä TKIP että AES). TKIP-salausta EI suositella, jos reititin toimii 802.11n-tilassa, koska 802.11n ei tue TKIP:iä. Jos TKIP valitaan, WPS-toiminto poistetaan käytöstä."
					},{
						type: "name",
						title: "RADIUS-palvelimen IP-osoite",
						content: "Anna RADIUS-palvelimen IP-osoite."
					},{
						type: "name",
						title: "RADIUS-portti",
						content: "Anna RADIUS-palvelimen portin numero."
					},{
						type: "name",
						title: "RADIUS-salasana",
						content: "Anna RADIUS-palvelimen jaettu salasana."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Valitse tämä vaihtoehto ottaaksesi käyttöön perustodennusmenetelmän, jos jokin asiakaslaite voi käyttää langatonta verkkoa ainoastaan WEP:illä (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Tyyppi",
						content: "Valitse langattomalle verkollesi todennustyyppi. Oletusasetus on Auto, mikä valitsee automaattisesti avoimen järjestelmän tai jaetun avaimen, perustuen langattomien asiakaslaitteiden kykyihin ja käyttöpyyntöihin."
					},{
						type: "name",
						title: "WEP-avaimen muoto",
						content: "Käytä joko ASCII- tai heksadesimaalimuotoa. ASCII-muoto koostuu aakkosista ja numeroista. Heksadesimaalimuoto koostuu numeroista (0-9) ja kirjaimista (A-F, a-f)."
					},{
						type: "name",
						title: "Avaimen tyyppi",
						content: "Valitse WEP-avaimen pituus.",
						children:[{
							type: "name",
							title: "64-bittinen",
							content: "Voit syöttää 10 heksadesimaalinumeroa (0-9, A-F, a-f) tai 5 ASCII-merkkiä WEP-arvo -kenttään."
						},{
							type: "name",
							title: "128-bittinen",
							content: "Voit syöttää 26 heksadesimaalinumeroa (0-9, A-F, a-f) tai 13 ASCII-merkkiä WEP-arvo -kenttään."
						}]
					},{
						type: "name",
						title: "Avainarvo",
						content: "Anna WEP-avain asianmukaiseen kenttään."
					}]
				}]
			},{
				type: "name",
				title: "Tila",
				content: "Valitse siirrolle yhdistelmätila."
			},{
				type: "name",
				title: "Kanavanleveys",
				content: "Valitse 5 GHz:n langattoman verkon kaistanleveys."
			},{
				type: "name",
				title: "Kanava",
				content: "Valitse 5 GHz:n langattoman verkon kanava. Suositellaan, että kanavaksi jätetään Auto, jos langaton yhteys ei katkeile."
			},{
				type: "name",
				title: "Lähetysteho",
				content: "Valitse joko Korkea,Keski tai Matala tiedonsiirtoteholle. Oletus- ja suositeltu asetus on Korkea."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		WPS: {	
			TITLE: "Reitittimen PIN-koodi",
			CONTENT: [{
				type: "paragraph",
				content: "Muut laitteet voivat muodostaa yhteyden tähän reitittimeen WPS:llä käyttäen reitittimen PIN-koodia."
			},{
				type: "name",
				title: "Reitittimen PIN-koodi",
				content: "Valitse On salliaksesi langattomien laitteiden muodostaa yhteys reitittimeen reitittimen PIN-koodia (Personal Identification Number) käyttäen."
			},{
				type: "name",
				title: "PIN",
				content: "Näyttää reitittimen PIN-koodin. Oletus-PIN-koodi on reitittimen kannessa. Napsauta Luo luodaksesi uuden PIN-koodin satunnaisesti tai napsauta Oletus palauttaaksesi PIN-koodiksi tehtaalla annetun PIN-koodin."
			}]
		},

		WPS_WIZARD: {
			TITLE: "Ohjattu WPS-toiminto",
			CONTENT:[{
				type: "name",
				title: "Paina painiketta (suositellaan)",
				content: "Valitse tämä asennusmenetelmä ottaaksesi WPS:n käyttöön; sillä voit helposti yhdistää minkä tahansa WPS-laitteen langattomaan verkkoon käyttäen WPS-painiketta tai virtuaalisesti Yhdistä-painiketta."
			},{
				type: "name",
				title: "PIN",
				content: "Valitse tämä asennusmenetelmä lisätäksesi laitteen manuaalisesti antamalla langattoman laitteen WPS PIN-koodin kenttään ja napsauta Yhdistä."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Langattomat asemat verkossa",
			CONTENT: [{
				type: "name",
				title: "Asiakaslaitenumero",
				content: "Näyttää kyseisen langattoman asiakaslaitteen numeron."
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Näyttää kyseisen langattoman asiakaslaitteen MAC-osoitteen."
			},{
				type: "name",
				title: "Yhteystyyppi",
				content: "Näyttää kyseisen langattoman asiakaslaitteen langattoman yhteyden taajuusalueen (2,4 GHz tai 5 GHz)."
			},{
				type: "name",
				title: "Suojaus",
				content: "Näyttää kyseisen langattoman asiakaslaitteen suojaustyypin."
			},{
				type: "name",
				title: "Vastaanotetut paketit",
				content: "Näyttää kyseisen langattoman asiakaslaitteen vastaanottamien pakettien määrän."
			},{
				type: "name",
				title: "Lähetyt paketit",
				content: "Näyttää kyseisen langattoman asiakaslaitteen lähettämien pakettien määrän."
			},{
				type: "paragraph",
				content: "Päivitä tämän sivun tiedot napsauttamalla Päivitä."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Asetukset",
			CONTENT: [{
				type: "paragraph",
				content: "Vierasverkolla voit määrittää erillisen verkon ja erillisen langattoman verkon nimen (SSID) ja salasanan, jolla vieraat pääsevät käyttämään langatonta verkkoasi."
			},{
				type: "name",
				title: "Anna vieraiden nähdä toisensa",
				content: "Valitse tämä valintaruutu, jos haluat antaa vierasverkon langattomien laitteiden nähdä toisensa."
			},{
				type: "name",
				title: "Anna vieraiden käyttää paikallsverkkoa",
				content: "Valitse tämä valintaruutu, jos haluat antaa vierasverkon langattomien laitteiden käyttää paikallisverkkosi verkkoresursseja ja tulostimia."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "2,4 GHz:n/5 GHz:n langaton verkko",
			CONTENT: [{
				type: "name",
				title: "Ota vierasverkko käyttöön",
				content: "Valitse tämä valintaruutu ottaaksesi vierasverkko-ominaisuuden käyttöön."
			},{
				type: "name",
				title: "Langattoman verkon nimi (SSID)",
				content: "Käytä joko vierasverkon oletus-SSID:iä tai anna uusi nimi (enintään 32 merkkiä)."
			},{
				type: "name",
				title: "Piilota SSID",
				content: "Valitse tämä valintaruutu, jos haluat piilottaa vierasverkon SSID:n Wi-Fi-verkkojen luettelosta."
			},{
				type: "name",
				title: "Suojaus",
				content: "Jos valitset olla koskaan päivittämättä salasanaa, valitse jokin seuraavista suojausvaihtoehdoista:",
				children: [{
					type: "name",
					title: "Ei suojausta",
					content: "Valitse tämä vaihtoehto, jos haluat poistaa langattoman verkon suojauksen käytöstä. Suositellaan, että otat langattoman verkon suojauksen käyttöön suojataksesi vierasverkkosi luvattomalta käytöltä."
				},{
					type: "name",
					title: "WPA/WPA2 – Personal",
					content: "Valitse tämä vaihtoehto ottaaksesi käyttöön vakiotodennusmenetelmän, joka perustuu PSK:hon (Pre-shared Key); kutsutaan myös salasanaksi. Jos valitset sen, konfiguroi seuraavat.",
					children: [{
						type: "name",
						title: "Versio",
						content: "Valitse vierasverkkosi suojausversio.",
						children: [{
							type: "name",
							title: "Automaattinen",
							content: "Tämä vaihtoehto tukee WPA (Wi-Fi Protected Access) -standardin useaa versiota, kuten WPA ja WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Tämä vaihtoehto tukee vain TKIP-salausta, joka takaa hyvän suojaustason."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Tämä vaihtoehto tukee AES-salausta, joka tarjoaa paremman suojaustason kuin WPA-PSK, ja sitä suositellaan."
						}]
					},{
						type: "name",
						title: "Salaus",
						content: "Valitse suojauksen salaustyyppi: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) tai Auto (sekä TKIP että AES). TKIP-salausta EI suositella, jos reititin toimii 802.11n-tilassa, koska 802.11n ei tue TKIP:iä. Jos TKIP valitaan, WPS-toiminto poistetaan käytöstä."
					}]
			}]},{
				type: "name",
				title: "Salasana",
				content: "Käytä joko satunnaisesti luotua salasanaa tai luo salasana pituudeltaan 8-63 ASCII-merkkiä tai 8-64 heksadesimaalista merkkiä (0-9, a-f, A-F)."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},

		NAT: {
			TITLE: "ALG (Application Layer Gateway)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG sallii mukautettujen NAT (Network Address Translation) -ohitussuodattimien kytkemisen yhdyskäytävään osoitteiden ja porttien käännöksen tukemiseksi tietyillä sovelluskerroksen ohjaus/dataprotokollilla: FTP, TFTP, H323 jne. Suositellaan, että ALG otetaan käyttöön."
			},{
				type: "name",
				title: "Ota FTP ALG käyttöön",
				content: "Jos tämä valitaan, FTP (File Transfer Protocol) -asiakaslaitteet ja -palvelimet voivat siirtää dataa NAT:in kautta."
			},{
				type: "name",
				title: "Ota TFTP ALG käyttöön",
				content: "Jos tämä valitaan, TFTP (Trivial File Transfer Protocol) -asiakaslaitteet ja -palvelimet voivat siirtää dataa NAT:in kautta."
			},{
				type: "name",
				title: "Ota H323 ALG käyttöön",
				content: "Jos tämä valitaan, Microsoft NetMeeting -asiakaslaitteet voivat kommunikoida NAT:in kautta."
			},{
				type: "name",
				title: "Ota RTSP ALG käyttöön",
				content: "Jos tämä valitaan, mediasoitinasiakaslaitteet voivat kommunikoida suoratoistomediapalvelimien kanssa NAT:in kautta."
			},{
				type: "name",
				title: "Ota PPTP-läpivienti käyttöön",
				content: "Jos tämä valitaan, Point-to-Point-istunnot voidaan tunneloida IP-verkon kautta ja reitittimen läpi."
			},{
				type: "name",
				title: "Ota PPTPL2TP-läpivienti käyttöön",
				content: "Jos tämä valitaan, 2. kerroksen Point-to-Point-istunnot voidaan tunneloida IP-verkon kautta ja reitittimen läpi."
			},{
				type: "name",
				title: "Ota IPSec-läpivienti käyttöön",
				content: "Jos tämä valitaan, IPSec (Internet Protocol security) voidaan tunneloida IP-verkon kautta ja reitittimen läpi. IPSec käyttää salaussuojauspalveluita taatakseen yksityisen ja suojatun tiedonsiirron IP-verkoissa."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Näennäispalvelimet",
			CONTENT: [{
				type: "paragraph",
				content: "Virtuaalipalvelimilla voidaan määrittää julkisia palveluita paikallisverkkoon. Virtuaalipalvelin määritellään ulkoiseksi portiksi, ja kaikki Internetistä tähän ulkoiseen porttiin saapuvat pyynnöt ohjataan uudelleen määrätylle tietokoneelle, jolle on konfiguroitava staattinen tai varattu IP-osoite."
			},{
				type: "name",
				title: "Palvelun tyyppi",
				content: "Näyttää virtuaalipalvelimen nimen"
			},{
				type: "name",
				title: "Ulkoinen portti",
				content: "Näyttää virtuaalipalvelimen käyttämän portin tai porttisarjan numeron."
			},{
				type: "name",
				title: "Sisäinen IP",
				content: "Näyttää palvelusovellusta suorittavan tietokoneen IP-osoitteen."
			},{
				type: "name",
				title: "Sisäinen portti",
				content: "Näyttää palvelusovellusta suorittavan tietokoneen portin numeron."
			},{
				type: "name",
				title: "Protokolla",
				content: "Näyttää palvelusovellukselle käytetyn protokollan: TCP, UDP tai Kaikki (kaikki reitittimen tukemat protokollat)."
			},{
				type: "name",
				title: "Tila",
				content: "Näyttää tietyn suodatussäännön nykytilan (käytössä tai poissa käytöstä)."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Näyttää vaihtoehdot muokata tai poistaa vastaavan säännön."
			},{
				type: "step",
				title: "Virtuaalipalvelinsäännön määrittäminen",
				content: [
					"1. Napsauta Lisää.",
					"2. Napsauta Näytä olemassa olevat palvelut valitaksesi palvelun luettelosta, jotta Ulkoinen portti ja Sisäinen portti -kenttiin täytetään automaattisesti asianmukainen portin numero. Jos palvelua ei ole luettelossa, anna ulkoisen portin numero (esim. 21) tai porttien alue (esim. 21-25). Jätä Sisäinen portti tyhjäksi, jos se on sama kuin Ulkoinen portti tai anna määrätty portin numero (esim. 21), jos Ulkoinen portti on yksittäinen portti. Anna palvelua suorittavan tietokoneen IP-osoite pisteillä erotetussa desimaalimuodossa Sisäinen IP -kenttään.",
					"3. Valitse palvelusovellukselle protokolla: TCP, UDP tai Kaikki Protokolla -valintaluettelosta.",
					"4. Valitse Ota käyttöön.",
					"5. Napsauta OK."
				]
			},{
				type: "step",
				title: "Virtuaalipalvelinsäännön muokkaaminen tai poistaminen",
				content: "Napsauta taulukossa muokkauskuvaketta tai roskakorikuvaketta muokattavan tai poistettavan säännön kohdalla."
			},{
				type: "step",
				title: "Useiden sääntöjen poistaminen",
				content: "Valits ekaikki poistettavat säännöt ja napsauta Poista taulukon päältä."
			},{
				type: "note",
				title: "Huomautus",
				content: "Jos paikallinen isäntälaite isännöi useampaa kuin yhtä palvelutyyppiä, sinun on luotava sääntö kullekin palvelulle."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Port Triggering",
			CONTENT: [{
				type: "paragraph",
				content: "Port Triggering -toiminnolla liikenne ohjataan verkon tietyn palvelimen tiettyyn porttiin."
			},{
				type: "name",
				title: "Käyttö",
				content: "Näyttää sovelluksen nimen."
			},{
				type: "name",
				title: "Triggering Port",
				content: "Näyttää lähtevän liikenteen portin, jolla käynnistetään lähtevän yhteyden suodatussääntö."
			},{
				type: "name",
				title: "Trigger-protokolla",
				content: "Näyttää Triggering Port -toiminnon käyttämän protokollan. TCP, UDP tai Kaikki (kaikki reitittimen tukemat protokollat)."
			},{
				type: "name",
				title: "Ulkoinen portti",
				content: "Näyttää etäjärjestelmän käyttämän portin tai porttialueen. Vastaus välitetään PC:lle käyttäen jotain näistä porteista, ja PC käynnistää tämän säännön. Voit syöttää enintään 5 porttiryhmää (tai porttiosiota). Jokainen porttiryhmä on erotettava pilkulla (\",\"), esimerkiksi 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Ulkoinen protokolla",
				content: "Näyttää saapuvan portin käyttämän protokollan. TCP, UDP tai Kaikki (kaikki reitittimen tukemat protokollat)."
			},{
				type: "name",
				title: "Tila",
				content: "Näyttää tietyn suodatussäännön nykytilan (käytössä tai poissa käytöstä)."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Näyttää vaihtoehdot muokata tai poistaa vastaavan säännön."
			},{
				type: "step",
				title: "Port Triggering -säännön määrittäminen",
				content: [{
					type: "note",
					title: "Huomautus",
					content: "Vain yksi isäntälaite voi käyttää kutakin sääntöä kerrallaan."
				},
					"1. Napsauta Lisää.",
					"2. Napsauta Näytä olemassa olevat sovellukset ja valitse luettelosta sovellus, joka täyttää automaattisesti oletusarvot asianmukaisiin kenttiin. Jos haluat lisätä sovelluksen, jota ei ole luettelossa, syötä Application, Triggering Port, Triggering Protocol, External Port ja External Protocol manuaalisesti.",	
					"3. Valitse Ota käyttöön.",
					"4. Napsauta OK."
				]
			},{
				type: "step",
				title: "Port Triggering -säännön muokkaaminen tai poistaminen",
				content: "Napsauta taulukossa muokkauskuvaketta tai roskakorikuvaketta muokattavan tai poistettavan säännön kohdalla."
			},{
				type: "step",
				title: "Useiden Port Triggering -sääntöjen poistaminen",
				content: "Valitse taulukosta kaikki poistettavat säännöt ja napsauta Poista taulukon päältä."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "DMZ (Demilitarized Zone) -isäntälaitteen ominaisuuden avulla paikallinen isäntälaite voi olla yhteydessä Internetiin tiettyä palvelua, kuten nettipelejä tai videokokouksia, varten. DMZ periaatteessa sallii LAN-verkon yhden tietokoneen avata kaikki porttinsa. Kyseinen tietokone on konfiguroitava staattisella IP-osoitteella, ja sen DHCP-asiakastoiminto on poissa käytöstä."
			},{
				type: "step",
				title: "Tietokoneen tai palvelimen määrääminen DMZ-palvelimelle",
				content: [
					"1. Valitse Ota DMZ käyttöön.",
					"2. Anna DMZ-isäntälaitteen IP-osoite -kenttään DMZ-isäntälaitteeksi valitun paikallisen tietokoneen IP-osoite.",
					"3. Napsauta Tallenna."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Oletuksena Universal Plug-and-Play (UPnP) -ominaisuus on käytössä, jotta laitteet, kuten tietokoneet ja Internet-laitteet, voivat paikantaa toisensa automaattisesti paikallisverkossa ja siirtää tietoa keskenään."
			},{
				type: "paragraph",
				content: "UPnP-palveluluettelo näyttää UPnP-laitteiden tiedot."
			},{
				type: "name",
				title: "Palvelun kuvaus",
				content: "Näyttää lyhyen kuvauksen paikallisesta isäntälaitteesta, joka lähettää UPnP-pyynnön."
			},{
				type: "name",
				title: "Ulkoinen portti",
				content: "Näyttää paikallisen isäntälaitteen avaaman ulkoisen portin."
			},{
				type: "name",
				title: "Protokolla",
				content: "Näyttää paikallisen isäntälaitteen käyttämän verkkoprotokollatyypin."
			},{
				type: "name",
				title: "Sisäinen IP-osoite",
				content: "Näyttää paikallisen isäntälaitteen IP-osoitteen."
			},{
				type: "name",
				title: "Sisäinen portti",
				content: "Näyttää paikallisen isäntälaitteen avaaman sisäisen portin."
			},{
				type: "paragraph",
				content: "Päivitä UPnP-palvelinluettelo napsauttamalla Päivitä."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Laitteen asetukset",
			CONTENT: [{
				type: "paragraph",
				content: "Laiteasetukset -sivulla näytetään asianmukaiset tiedot kaikista USB-porttiin kytketyistä USB-tallennusvälineistä."
			},{
				type: "name",
				title: "Skannaa",
				content: "Tavallisesti reititin tunnistaa automaattisesti kaikki juuri liitetyt laitteet. Jos näin ei käy, napsauta tätä painiketta etsiäksesi uusia kytkettyjä laitteita ja päivittääksesi sivun uusin tiedoin."
			},{
				type: "name",
				title: "Asema",
				content: "Näyttää USB-aseman nimen."
			},{
				type: "name",
				title: "Kapasiteetti",
				content: "Näyttää USB-laitteen tallennuskapasiteetin."
			},{
				type: "name",
				title: "Vapaa tila",
				content: "Näyttää vapaan tallennustilan määrän."
			},{
				type: "name",
				title: "Poista turvallisesti",
				content: "Napsauta tätä USB-laitetta poistaaksesi USB-laitteen ennen kuin irrotat sen fyysisesti reitittimestä."
			},{
				type: "paragraph",
				content: "Huomaa, että Poista turvallisesti -painike on näkyvissä vain, kun reitittimeen on kytketty USB-tallennusväline, ja että et voi poistaa USB-laitetta sen ollessa käytössä."
			},{
				type: "name",
				title: "Käytössä",
				content: "Tämä valintaruutu on näkyvissä vain, kun reitittimeen on kytketty USB-tallennusväline. Valitse se ottaaksesi käyttöön USB-laitteen tiedostonjako."
			},{
				type: "step",
				title: "Tiedostopalvelimen määrittäminen",
				content: [
				"1. Kytke USB-tallennusväline reitittimen USB-porttiin USB-kaapelilla.",
				"2. Reitittimen tulisi tunnistaa juuri kytketty USB-laite automaattisesti ja näyttää sen tiedot Laiteasetukset-osassa. Jos ei, napsauta Skannaa.",
				"3. Valitse Aktiivinen ottaaksesi tiedostonjaon käyttöön."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Jakotili",
			CONTENT: [{
				type: "name",
				title: "Tili",
				content: "Voit kirjautua jaettuihin tiedostoihin ja kansioihin joko käyttämällä vaihtoehtoa Käytä oletustiliä tai Käytä uutta tiliä ja syöttämällä seuraavat tiedot luodaksesi uuden tilin."
			},{
				type: "name",
				title: "Käyttäjätunnus/salasana",
				content: "Anna enintään 15 merkin aakkosnumeerinen tai alaviivasarja. Käyttäjätunnuksen on alettava aakkosella. Nämä kentät erottelevat kirjainkoon."
			},{
				type: "name",
				title: "Vahvista salasana",
				content: "Anna salasana uudelleen varmistaaksesi, että et ole kirjoittanut sitä väärin. Tämäkin kenttä erottelee kirjainkoon."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Jakoasetukset",
			CONTENT: [{
				type: "name",
				title: "Verkon/mediapalvelimen nimi",
				content: "Näyttää nimen, jolla kytkettyä USB-tallennuslaitetta käytetään."
			},{
				type: "name",
				title: "Ota käyttöön",
				content: "Valitse ottaaksesi käyttötavan käyttöön."
			},{
				type: "name",
				title: "Käyttömenetelmä",
				content: "Kytkettyä USB-tallennusvälinettä voidaan käyttää kolmella käyttötavalla. Voit valita yhden tai useamman käyttötavan valitsemalla vastaavan valintaruudun.",
				children: [{
					type: "name",
					title: "Verkkoympäristö",
					content: "Jos tämä on käytössä, verkon käyttäjät voivat käyttää USB-tallennusvälinettä sille annetulla IP-osoitteella (esim. \\\\192.168.0.1)."
				},{
					type: "name",
					title: "FTP",
					content: "Jos tämä on käytössä, paikallisverkkosi FTP-asiakastietokoneet voivat käyttää USB-tallennusvälinettä sille annetulla IP-osoitteella, johon on lisätty FTP-palvelimen portin numero (esim. ftp://192.168.0.1:21)."
				},{
					type: "name",
					title: "FTP (Internetin kautta)",
					content: "Jos tämä on käytössä, käyttäjät voivat etäkäyttää USB-tallennusvälinettä FTP:llä Internetin kauta. Tämä ominaisuus tukee sekä tiedostojen latausta että lähettämistä. Voit vaihtaa FTP-palvelimen portin numeron antamalla portin numeron ja napsauttamalla Tallenna ottaaksesi muutokset käyttöön."
				}]
			},{
				type: "name",
				title: "Linkki",
				content: "Näyttää osoitteen, jolla jaettua USB-tallennuslaitetta käytetään."
			},{
				type: "name",
				title: "Portti",
				content: "Näyttää FTP-palvelimen portin numeron. Käytä oletusarvoa tai arvoa väliltä 1024-65535."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Kansion jakaminen",
			CONTENT: [{
				type: "name",
				title: "Jaa kaikki",
				content: "Valitse On jakaaksesi kaikki tiedostot ja kansiot tai Off jakaaksesi vain valitut kansiot."
			},{
				type: "name",
				title: "Ota todennus käyttöön",
				content: "Suositellaan, että todennus otetaan käyttöön, jotta käyttäjien on annettava voimassa oleva käyttäjätunnus ja salasana voidakseen käyttää jaettuja kansioita."
			},{
				type: "name",
				title: "Kansion nimi",
				content: "Näyttää jaetun kansion nimen."
			},{
				type: "name",
				title: "Kansion polku",
				content: "Näyttää jaetun kansion polun."
			},{
				type: "name",
				title: "Median jakaminen",
				content: "Ilmoittaa, onko median jakaminen sallittua jaetussa kansiossa."
			},{
				type: "name",
				title: "Aseman nimi",
				content: "Näyttää jaetun aseman nimen."
			},{
				type: "name",
				title: "Tila",
				content: "Näyttää jaetun kansion tilan hehkulampun kuvalla."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Näyttää vaihtoehdot muokata tai poistaa vastaavan jaetun kansion."
			},{
				type: "name",
				title: "Selaa",
				content: "Napsauta hakeaksesi jaettua kansiota."
			},{
				type: "name",
				title: "Salli vierasverkkokäyttö",
				content: "Valitse salliaksesi vierasverkon asiakaslaitteiden käyttää jaettuja kansioita."
			},{
				type: "name",
				title: "Ota todennus käyttöön",
				content: "Valitse edellyttääksesi, että käyttäjät käyttävät jaettuja kansioita voimassa olevalla käyttäjätunnuksella ja salasanalla."
			},{
				type: "name",
				title: "Ota kirjoitusoikeus käyttöön",
				content: "Valitse salliaksesi käyttäjien muuttaa kansion sisältöä."
			},{
				type: "name",
				title: "Ota median jakaminen käyttöön",
				content: "Valitse ottaaksesi median jaon käyttöön."
			},{
				type: "name",
				title:"Päivitä",
				content: "Napsauta päivittääksesi jaettujen kansioiden luettelon."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Tulostinpalvelin",
			CONTENT: [{
				type: "name",
				title:"Tulostinpalvelin",
				content: "Valitse On ottaaksesi tulostuspalvelintoiminnon käyttöön."
			},{
				type: "name",
				title:"Tulostimen nimi",
				content: "Näyttää reitittimeen kytketyn tulostimen nimen."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Lapsilukko",
			CONTENT: [{
				type: "paragraph",
				content: "Lapsilukituksella voit estää sopimattomat, eksplisiittiset ja haitalliset sivustot; rajoita pääsy tiettyihin aikoihin (esim. Facebook tai YouTube läksyjen aikana); samalla suojaat kotiverkkosi jokaisen laitteen haittaohjelmilta ja tietojen kalastelulta yhdestä keskitetystä hallintapisteestä."
			},{
				type: "name",
				title: "Lapsilukko",
				content: "Valitse On ottaaksesi lapsilukituksen käyttöön."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Lapsilukituksen alaiset laitteet",
			CONTENT: [{
				type: "name",
				title: "Laitteen nimi",
				content: "Näyttää kaikkien yhdistettyjen asiakaslaitteiden nimen, jotka ovat lapsilukituksen alaisia."
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Näyttää kaikkien yhdistettyjen asiakaslaitteiden MAC-osoitteen, jotka ovat lapsilukituksen alaisia."
			},{
				type: "name",
				title: "Internetin käyttöaika",
				content: "Näyttää rajoituksen käyttöajat. Aikataulu astuu voimaan reitittimen järjestelmäajan mukaisesti, joka voidaan määrittää kohdasta \"Järjestelmätyökalut -> Aika-asetukset\"."
			},{
				type: "name",
				title: "Kuvaus",
				content: "Näyttää yhdistetyn laitteen lyhyen kuvauksen."
			},{
				type: "name",
				title: "Tila",
				content: "Näyttää vastaavan laitteen lapsilukituksen nykytilan (käytössä tai poissa käytöstä)."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Näyttää vaihtoehdot muokata tai poistaa vastaavan laitteen."
			},{
				type: "step",
				title: "Uuden asiakaslaitteen rajoittaminen",
				content: [
					"1. Napsauta Lisää.",
					"2. Napsauta Näytä olemassa olevat laitteet ja valitse yhdistetty laite Käytä laiteluetteloa; voit myös antaa laitenimen ja MAC-osoitteen manuaalisesti lisätäksesi laitteen, jota ei ole yhdistetty.",
					"3. Napsauta Internet-käyttöaikakuvaketta määrittääksesi, milloin rajoitus on voimassa.",
					"4. Anna Kuvaus-kenttään lyhyt kuvaus. (valinnainen)",
					"5. Valitse Ota käyttöön.",
					"6. Napsauta OK."
				]
			},{
				type: "paragraph",
				content: "Voit muokata lapsilukitussyötettä tai poistaa sen napsauttamalla muokkauskuvaketta muokataksesi tietoja tia roskakorikuvaketta poistaaksesi vastaavan syötteen."
			},{
				type: "paragraph",
				content: "Voit poistaa useita syötteitä valitsemalla ne kaikki ja napsauttamalla Poista taulukon yläpuolelta."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Sisältörajoitus",
			CONTENT: [{
				type: "name",
				title: "Musta lista",
				content: "SIsältää avainsanoja, joita käytetään estämään sivustolle pääsy lapsilukitusluettelossa määrityistä asiakaslaitteista.",
				children: [{
					type: "paragraph",
					content: "Napsauta Lisää uusi avainsana lisätäksesi avainsanan mustalle listalle. Voit poistaa avainsanan napsauttamalla poistettavan avainsanan (-)-kuvaketta."
				}]
			},{
				type: "name",
				title: "Valkoinen lista",
				content: "SIsältää sivustojen osoitteet, jotka lapsilukitusluettelossa nimetyt asiakaslaitteet saavat käyttää.",
				children: [{
					type: "paragraph",
					content: "Napsauta Lisää uusi toimialueen nimi lisätäksesi sivuston valkoiseen listaan. Voit poistaa sivuston napsauttamalla poistettavan sivuston (-)-kuvaketta."
				}]
			},{
				type: "paragraph",
				content: "Avainsanat voivat olla myös toimialueen nimiä, esimerkiksi www.mail.google.com tai www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "Quality of Service (QoS) auttaa priorisoimaan Internet-liikenteen tarpeittesi mukaan. Voit määrittää laitteen tai sovelluksen prioriteettitason QoS-sääntöluettelossa."
			},{
				type: "name",
				title: "Ota QoS käyttöön",
				content: "Valitse tämä ruutu ottaaksesi QoS-toiminnon käyttöön."
			},{
				type: "name",
				title: "Lähetyskaistanleveys",
				content: "Anna ISP:n antama suurin lähetyskaistanleveys."
			},{
				type: "name",
				title: "Latauskaistanleveys",
				content: "Anna ISP:n antama suurin latauskaistanleveys."
			},{
				type: "name",
				title: "Suuri prioriteetti",
				content: "Määritä korkean prioriteetin liikenteen prosenttiosuus."
			},{
				type: "name",
				title: "Keskitason prioriteetti",
				content: "Määritä keskitason prioriteetin liikenteen prosenttiosuus."
			},{
				type: "name",
				title: "Alhainen prioriteetti",
				content: "Määritä matalan prioriteetin liikenteen prosenttiosuus."
			},{
				type: "note",
				title: "Huomautus",
				content: "Kaikkien prioriteettien suurin määrä (prosenttiosuus) on 1."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		QOS_RULE: {
			TITLE: "QoS-sääntöluettelo",
			CONTENT: [{
				type: "name",
				title: "Tyyppi",
				content: "Lisää QoS-sääntöluettelo valitsemalla tyyppi."
			},{
				type: "step",
				title: "Säännön määrittäminen korkealle/keskitason/matalalle prioriteetille laitteen mukaan",
				content: [
					"1. Napsauta Lisää.",
					"2. Valitse Laitteen mukaan.",
					"3. Napsauta Näytä olemassa olevat laitteet valitaksesi haluamasi laitteen Käytä laiteluetteloa -luettelosta tai anna laitenimi ja sen MAC-osoite manuaalisesti Laitenimi- ja MAC-osoite-kenttiin.",
					"4. Napsauta OK."
				]
			},{
				type: "step",
				title: "Säännön määrittäminen korkealle/keskitason/matalalle prioriteetille sovelluksen mukaan",
				content: [
					"1. Napsauta Lisää.",
					"2. Valitse Sovelluksen mukaan.",
					"3. Valitse haluamasi sovellus sovellusluettelosta; voit myös mukauttaa sovelluksen määrittämällä nimen, protokollan ja kohdeportin (1-65535) asianmukaisissa kentissä; voit antaa yhden portin tai useita portteja tai porttialueen; erottele arvot pilkulla (esim. 21,36-105,111).",
					"4. Napsauta OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Tietokannan päivitys",
			CONTENT: [{
				type: "name",
				title: "Uusi tietokantatiedosto",
				content: "Napsauta Selaa paikantaaksesi uuden tietokantatiedoston. Valitse se ja napsauta Päivitä päivittääksesi tietokantasi uudempaan versioon."
			},{
				type: "name",
				title: "Tietokannan versio",
				content: "Näyttää nykyisen tietokantaversion."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Palomuuri",
			CONTENT: [{
				type: "name",
				title: "SPI-palomuuri",
				content: "Stateful Packet Inspection (SPI) -palomuuri estää kyberhyökkäykset ja vahvistaa reitittimen läpi kulkevan liikenteen protokollan perusteella."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "DoS-suojaus",
			CONTENT: [{
				type: "name",
				title: "DoS-suojaus",
				content: "Denial of Service (DoS) -suojaus suojaa LAN-verkon DoS-hyökkäyksiä täyttämästä verkkoasi palvelinpyynnöillä."
			},{
				type: "name",
				title: "ICMP-FLOOD-suojausten suodatus",
				content: "Ota käyttöön estääksesi Internet Control Message Protocol (ICMP) -hyökkäykset.",
				children: [{
					type: "name",
					title: "Sammuksissa",
					content: "Ei suojausta."
				},{
					type: "name",
					title: "Matala",
					content: "Matala suojaustaso ja pieni vaikutus reitittimen suorituskykyyn."
				},{
					type: "name",
					title: "Keskitaso",
					content: "Keskitason suojaus ja puoliksi huomattava vaikutus reitittimen suorituskykyyn."
				},{
					type: "name",
					title: "Korkea",
					content: "Korkea suojaustaso mutta huomattava vaikutus reitittimen suorituskykyyn."
				}]
			},{
				type: "name",
				title: "UDP-FLOOD-suojausten suodatus",
				content: "Ota käyttöön estääksesi User Datagram Protocol (UDP) -hyökkäykset."
			},{
				type: "name",
				title: "TCP-SYN-FLOOD-suojausten suodatus",
				content: "Ota käyttöön estääksesi Transmission Control Protocol-Synchronize (TCP-SYN) -hyökkäykset."
			},{
				type: "name",
				title: "Ohita WAN-portin ping-paketti",
				content: "Ota käyttöön jättääksesi WAN-portista saapuvat ping-paketit huomiotta."
			},{
				type: "name",
				title: "Kiellä LAN-portin ping-paketti",
				content: "Ota käyttöön kieltääksesi LAN-portista saapuvat ping-paketit."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Estettyjen DoS-isäntien luettelo",
			CONTENT: [{
				type: "name",
				title: "Estettyjen DoS-isäntien luettelo",
				content: "Luettelee estetyn DoS-hyökkäyslähteen IP- ja MAC-osoitteet."
			},{
				type: "step",
				title: "Merkinnän poistaminen",
				content: "Valitse isäntälaiteluettelosta poistettava syöte ja napsauta Poista taulukon päältä."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Käytönohjaus",
			CONTENT: [{
				type: "paragraph",
				content: "Käytönhallinnalla sallitaan tai estetään tiettyjen tietokoneiden ja muiden laitteiden pääsy verkkoosi. Kun laite on estetty, se ei pysty kommunikoimaan muiden laitteiden kanssa tai muodostamaan yhteyttä Internetiin."
			},{
				type: "paragraph",
				content: "Jos haluat käyttää käytönhallintaa, ota tämä ominaisuus käyttöön ja määritä musta tai valkoinen lista. Jos käytönhallinta on poissa käytöstä (Off), kaikilla laitteilla, mukaan lukien mustan listan laitteilla, on lupa muodostaa yhteys."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Käyttötila",
			CONTENT: [{
				type: "name",
				title: "Musta lista",
				content: "Vain mustan listan laitteilta kielletään pääsy verkkoosi."
			},{
				type: "name",
				title: "Valkoinen lista",
				content: "Vain valkoisen listan laitteille sallitaan pääsy verkkoosi."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Verkon laitteet",
			CONTENT: [{
				type: "name",
				title: "Laitteen nimi",
				content: "Näyttää kytketyn laitteen nimen."
			},{
				type: "name",
				title: "IP-osoite",
				content: "Näytä yhdistetyn laitteen IP-osoite"
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Näyttää yhdistetyn laitteen MAC-osoitteen."
			},{
				type: "name",
				title: "Yhteystyyppi",
				content: "Näyttää kytketyn laitteen yhteystyypin."
			},{
				type: "step",
				title: "Laitteen estäminen",
				content: "Napsauta Laitteet online -taulukossa Muokkaa -sarakkeen estokuvaketta, joka vastaa estettävää laitetta."
			},{
				type: "step",
				title: "Usean laitteen estäminen",
				content: "Valitse Laitteet online - taulukosta kaikki estettävät palvelut ja napsauta Estä taulukon päältä. Laite lisätään automaattisesti mustan tai valkoisen listan laitteisiin."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Mustan/valkoisen listan laitteet",
			CONTENT: [{
				type: "step",
				title: "Laitteen lisääminen mustaan tai valkoiseen listaan",
				content: [
					"1. Napsauta Lisää.",
					"2. Anna laitenimi.",
					"3. Anna laitteen MAC-osoite.",
					"4. Napsauta OK."
				]
			},{
				type: "step",
				title: "Mustan/valkoisen listan laitteen muokkaaminen tai poistaminen",
				content: "Napsauta mustan/valkoisen listan taulukossa muokkauskuvaketta tai roskakorikuvaketta muokattavan tai poistettavan laitteen kohdalla."
			},{
				type: "step",
				title: "Usean laitteen poistaminen mustalta/valkoiselta listalta",
				content: "Valitse mustan/valkoisen listan taulukosta kaikki poistettavat laitteet ja napsauta Poista taulukon päältä."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Asetukset",
			CONTENT: [{
				type: "paragraph",
				content: "ARP (Address Resolution Protocol) -sidonnasta on hyötyä hallittaessa tietyn tietokoneen pääsyä LAN-verkkoon sitomalla laitteen IP- ja MAC-osoitteet yhteen. ARP-sidonta estää lisäksi muita laitteita käyttämästä tiettyä IP-osoitetta."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "ARP-luettelo",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää kytkettyjen laitteiden MAC- ja IP-osoitteet."
			},{
				type: "name",
				title: "ARP-syötenumero",
				content: "Näyttää reitittimeen tällä hetkellä kytkettyjen laitteiden kokonaismäärän."
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Näyttää yhdistetyn laitteen MAC-osoitteen."
			},{
				type: "name",
				title: "IP-osoite",
				content: "Näyttää yhdistetylle laitteelle määrätyn IP-osoitteen."
			},{
				type: "name",
				title: "Sidottu",
				content: "Ilmoittaa, ovatko MAC- ja IP-osoite sidotut."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Antaa vaihtoehdot sitoa tai poistaa luettelon kohdan."
			},{
				type: "note",
				title: "Huomautus",
				content: "Yhtä IP-osoitetta ei voi sitoa useampaan kuin yhteen MAC-osoitteeseen."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Sidontaluettelo",
			CONTENT: [{
				type: "step",
				title: "Laitteen määrittäminen ARP-sidonnalla",
				content: [
					"1. Napsauta Lisää.",
					"2. Anna laitteen MAC-osoite.",
					"3. Anna IP-osoite, jonka haluat sitoa yllä mainittuun MAC-osoitteeseen.",
					"4. Anna laitteen kuvaus. (valinnainen)",
					"5. Valitse Ota käyttöön.",
					"6. Napsauta OK."
				]
			},{
				type: "step",
				title: "Syötteen muokkaaminen tai poistaminen",
				content: "Napsauta sidontataulukossa muokkauskuvaketta tai roskakorikuvaketta muokattavan tai poistettavan syötteen kohdalla."
			},{
				type: "step",
				title: "Usean syötteen poistaminen",
				content: "Valitse sidontaluettelosta kaikki poistettavat syötteet ja napsauta Poista taulukon päältä."
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Valitse ottaa reitittimen IPv6-ominiasuudet käyttöön (On) tai poistaa ne käytöstä (Off)."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: Staattinen IP-osoite",
			},{
				type: "name",
				title: "Staattinen IP-osoite",
				content: "Valitse tämä tyyppi, jos ISP käyttää staattista IPv6-osoitteiden määräämistä."
			},{
				type: "name",
				title: "IPv6-osoite/Oletusyhdyskäytävä/Ensisijainen DNS/Toissijainen DNS",
				content: "Anna ISP:n antamat parametrit."
			},{
				type: "name",
				title: "MTU-koko",
				content: "MTU:n (Maximum Transmission Unit) oletus- ja tyypillinen koko useimmissa Ethernet-verkoissa on 1500 tavua. MTU:n oletuskokoa EI suositella muutettavan, ellei ISP niin vaadi."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: Dynaaminen IP-osoite",
			},{
				type: "name",
				title: "Dynaaminen IP-osoite",
				content: "Valitse tämä tyyppi, jos ISP käyttää dynaamista IPv6-osoitteiden määräämistä."
			},{
				type: "name",
				title: "IPv6-osoite/Ensisijainen DNS/Toissijainen DNS",
				content: "DHCPv6-palvelin määrittää nämä parametrit automaattisesti ISP:ltä."
			},{
				type: "name",
				title: "Uudista",
				content: "Napsauta tätä painiketta saadaksesi uudet IPv6-parametrit ISP:n DHCPv6-palvelimelta."
			},{
				type: "name",
				title: "Vapauta",
				content: "Napsauta tätä painiketta vapauttaaksesi kaikki ISP:ltä saadut DHCPv6-palvelimen määräämät IPv6-osoitteet."
			},{
				type: "name",
				title: "Hanki IPv6-osoite",
				content: "Valitse DHCPv6 saadaksesi vakituinen IPv6-osoite tai SLAAC saadaksesi IPv6-osoite, joka on tuotettu reitittimen mainospaketista, ISP:n tietojen mukaan."
			},{
				type: "name",
				title: "Etuliitteen siirto",
				content: "Valitse Ota käyttöön saadaksesi ISP:n DHCPv6-palvelimen delegoimaan etuliitteen tai Poista käytöstä määrittääksesi osoitteen etuliitteen manuaalisesti. LAN-verkon asiakaslaitteet luovat IPv6-osoitteen tällä etuliitteellä."
			},{
				type: "name",
				title: "DNS-osoite",
				content: "Valitse Hanki dynaamisesti ISP:ltä tai Käytä seuraavaa DNS-osoitetta. Jos valitset Käytä seuraavaa DNS-osoitetta, anna ISP:ltä saatu DNS-osoite manuaalisesti."
			},{
				type: "name",
				title: "Ensisijainen DNS/Toissijainen DNS",
				content: "Anna nämä parametrit manuaalisesti tai hanki ne dynaamisesti ISP:ltä."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Valitse tämä tyyppi, jos ISP käyttää PPPoEv6:tta ja antaa käyttäjätunnuksen ja salasanan."
			},{
				type: "name",
				title: "Käyttäjätunnus/salasana",
				content: "Anna ISP:n antamat parametrit."
			},{
				type: "name",
				title: "IPv6-osoite",
				content: "DHCPv6-palvelin määrää tämän osoitteen automaattisesti ISP:ltä, kun olet antanut käyttäjätunnuksen ja salasanan ja painannut Yhdistä."
			},{
				type: "name",
				title: "DNS-osoite",
				content: "Valitse Hanki dynaamisesti ISP:ltä tai Käytä seuraavaa DNS-osoitetta. Jos valitset Käytä seuraavaa DNS-osoitetta, anna ISP:ltä saatu DNS-osoite manuaalisesti."
			},{
				type: "name",
				title: "Hanki IPv6-osoite",
				content: "Valitse DHCPv6 saadaksesi vakituinen IPv6-osoite tai SLAAC saadaksesi IPv6-osoite, joka on tuotettu reitittimen mainospaketista, tai ISP:n mukaan syöttääksesi IPv6-osoitteen manuaalisesti, ISP:n tietojen mukaan."
			},{
				type: "name",
				title: "Etuliitteen siirto",
				content: "Valitse Ota käyttöön saadaksesi ISP:n DHCPv6-palvelimen delegoimaan etuliitteen tai Poista käytöstä määrittääksesi osoitteen etuliitteen manuaalisesti. LAN-verkon asiakaslaitteet luovat IPv6-osoitteen tällä etuliitteellä."
			},{
				type: "name",
				title: "Yhdistä",
				content: "Muodosta Internet-yhteys napsauttamalla tätä painiketta."
			},{
				type: "name",
				title: "Katkaise yhteys",
				content: "Katkaise Internet-yhteys napsauttamalla tätä painiketta."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: 6to4-tunneli"
			},{
				type: "name",
				title: "6to4-tunneli",
				content: "Valitse tämä tyyppi, jos ISP käyttää 6to4-käyttöönoton osoitteiden määräämistä."
			},{
				type: "name",
				title: "IPv4-osoite/IPv4-aliverkon peite/IPv4-oletusyhdyskäytävä/Tunnelin osoite",
				content: "WAN-portin IPv4-tiedot tuottavat nämä parametrit dynaamisesti, kun napsautat Yhdistä."
			},{
				type: "name",
				title: "Käytä seuraavaa DNS-palvelinta",
				content: "Valitse valintaruutu, jos haluat antaa ensisijaisen DNS:n ja/tai toissinaisen DNS:n ISP:n tietojen mukaan manuaalisesti."
			},{
				type: "name",
				title: "Yhdistä",
				content: "Muodosta Internet-yhteys napsauttamalla tätä painiketta."
			},{
				type: "name",
				title: "Katkaise yhteys",
				content: "Katkaise Internet-yhteys napsauttamalla tätä painiketta."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: Läpivienti (Välitili)"
			},{
				type: "paragraph",
				content: "Valitse tämä tyyppi, jos ISP käyttää läpivienti (Silta) -verkkokäyttöönottoa. Tämä yhteystyyppi ei edellytä konfigurointia."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Läpivientiä (Silta) lukuun ottamatta, muut 6 Internet-yhteystyyppiä vaativat IPv6-konfiguraation."
			},{
				type: "name",
				title: "Määrätty tyyppi",
				content: "Valitse ISP:n ilmoittama vaihtoehto.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "IP-osoitteen määrääminen automaattisesti LAN-verkon asiakaslaitteille.",
					children: [{
						type: "name",
						title: "Osoitteen etuliite",
						content: "Anna ISP:n antama osoitteen etuliite."
					},{
						type: "name",
						title: "Vapautusaika",
						content: "Sekunneissa aika, jonka määrätty IP-osoite on voimassa. Joko pidä oletusarvo 86400 sekuntia tai vaihda se, jos ISP niin vaatii."
					},{
						type: "name",
						title: "Osoite",
						content: "Se on ISP:n DHCPv6-palvelimen automaattisesti määräämä IP-osoite."
					}]
				},{
					type: "name",
					title: "SLAAC+tilaton DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Osoitteen etuliite",
						content: "Anna ISP:n antama osoitteen etuliite."
					},{
						type: "name",
						title: "Osoite",
						content: "Se on ISP:n automaattisesti antama IP-osoite."
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Osoitteen etuliite",
						content: "Anna ISP:n antama osoitteen etuliite."
					},{
						type: "name",
						title: "Osoite",
						content: "Se on ISP:n automaattisesti antama IP-osoite."
					}]
				}]
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "MAC-osoitteen kloonaus",
			CONTENT: [{
				type: "name",
				title: "Käytä oletus-MAC-osoitetta",
				content: "ÄLÄ muuta reitittimen oletus-MAC-osoitetta, jos ISP ei sido annettua IP-osoitetta MAC-osoitteeseen."
			},{
				type: "name",
				title: "Käytä tämän tietokoneen MAC-osoitetta",
				content: "Valitse kopioida nykyinen reitittimeen kytketyn tietokoneen MAC-osoite, jos ISP sitoo annetun IP-osoitteen tietokoneen MAC-osoitteeseen."
			},{
				type: "name",
				title: "Käytä mukautettua MAC-osoitetta",
				content: "Anna MAC-osoite manuaalisesti, jos ISP sitoo annetun IP-osoitteen tiettyyn MAC-osoitteeseen."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Aika-asetukset",
			CONTENT: [{
				type: "step",
				title: "Ajan synkronointi automaattisesti",
				content: [
					"1. Valitse Aseta aika -kentässä Hanki automaattisesti Internetistä.",
					"2. Valitse paikallinen aikavyöhyke avattavasta valikosta.",
					"3. Kirjoita NTP Server I -kenttään haluamasi NTP-palvelimen IP-osoite tai toimialueen nimi.",
					"4. Kirjoita NTP Server I -kenttään toisen NTP-palvelimen IP-osoite tai toimialueen nimi. (valinnainen)",
					"5. Napsauta Hanki.",
					"6. Napsauta Save (Tallenna)."
				]
			},{
				type: "step",
				title: "Päivämäärän ja kellonajan määrittäminen manuaalisesti",
				content: [
					"1. Valitse Aseta aika -kentässä Manuaalisesti.",
					"2. Anna tämä päivämäärä.",
					"3. Valitse aika (24 tunnin muodossa esim. 16:00:00 on 04:00PM).",
					"4. Napsauta Tallenna."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Kesäaika",
			CONTENT: [{
				type: "step",
				title: "Kesäajan määrittäminen",
				content: [
					"1. Valitse Ota kesäaika käyttöön.",
					"2. Valitse oikea aloituspäivä ja -aika, jolloin kesäaika alkaa aikavyöhykkeelläsi.",
					"3. Valitse oikea lopetuspäivä ja -aika, jolloin kesäaika päättyy aikavyöhykkeelläsi.",
					"4. Napsauta Tallenna."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Diagnostiikka",
			CONTENT: [{
				type: "paragraph",
				content: "Reitittimessä on Ping- ja Traceroute-työkalut, joiden avulla voit vianmäärittää verkon yhteysongelmat. Ping-työkalu lähettää paketteja kohde-IP-osoitteeseen tai -toimialueen nimeen ja kirjaa tulokset, kuten lähetettyjen ja vastaanotettujen pakettien määrän, sekä edestakaisen ajan. Traceroute-työkalu lähettää paketteja kohde-IP-osoitteeseen tai -toimialueen nimeen ja näyttää hyppyjen määrän ja määränpäähän kuluneen ajan."
			},{
				type: "paragraph",
				content: "Voit käyttää pintiä ja traceroutea paikallisessa laitteessa IP-osoitteella tai toimialueen nimellä, kuten google.com, yahoo.com tms."
			},{
				type: "step",
				title: "Diagnosointi Pingillä",
				content: [
					"1. Anna kohteen IP-osoite tai toimialueen nimi.",
					"2. Avaa lisäastusvalikko napsauttamalla nuolikuvaketta ja määritä pingien määrä ping-paketin koko. (valinnainen)",
					"3. Napsauta Käynnistä."
				]
			},{
				type: "step",
				title: "Diagnosointi Pingillä",
				content: [
					"1. Anna kohteen IP-osoite tai toimialueen nimi.",
					"2. Avaa lisäasetusvalikko napsauttamalla nuolikuvaketta ja määritä siirtymien määrä (saavutettava) Tracerouten Max TTL (Time to Live) -kenttään. Oletusarvo on 20. (valinnainen)",
					"3. Napsauta Käynnistä."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Laitteisto-ohjelmiston päivitys",
			CONTENT: [{
				type: "paragraph",
				content: "Ennen kuin päivität reitittimen laiteohjelmiston, sinun tulee ladata tuorein laiteohjelmistopäivitys <a class=\"link\" target=\"_blank\" href=\"http://www.tp-link.com/fi/Support/\">TP-Linkin tukisivustolta</a> tietokoneeseesi."
			},{
				type: "step",
				title: "TÄRKEÄÄ: Jotta päivitys ei epäonnistu, huomaa seuraavat:",
				content: [
					"Varmista, että tuorein laiteohjelmistotiedosto vastaa laitteistoversiota (ilmoitetaan Firmware Upgrade -sivun alla).",
					"Varmista, että reitittimen ja tietokoneen välillä on vakaa yhteys. Laiteohjelmistoa EI suositella päivitettävän langattomasti.",
					"Muista irrottaa reitittimeen kytketty USB-tallennusväline ennen laiteohjelmiston päivitystä, jotta et menetä tietoja.",
					"Varmuuskopioi reitittimen kokoonpano.",
					"ÄLÄ katkaise reitittimen virtaa laiteohjelmiston päivityksen aikana."
				]
			},{
				type: "step",
				title: "Reitittimen laiteohjelmiston päivittäminen",
				content: [
					"1. Napsauta Selaa.",
					"2. Paikanna ja valitse ladattu laiteohjelmistotiedosto.",
					"3. Napsauta Päivitä."
				]
			},{
				type: "paragraph",
				content: "Päivitykseen saattaa kulua muutama minuutti. ÄLÄ sammuta reititintä päivityksen aikana."
			}]
		},
		
		BACKUP: {	
			TITLE: "Varmuuskopiointi",
			CONTENT: [{
				type: "paragraph",
				content: "Suositellaan, että varmuuskopioit kokoonpanosi siltä varalta, että järjestelmä on palautettava aikaisempaan tilaan tai tehdasasetuksiin."
			},{
				type: "paragraph",
				content: "Tallenna nykykokoonpano tietokoneelle napsauttamalla Varmuuskopioi. Muista tallentaa varmuuskopiointitiedosto turvalliseen paikkaan, josta voit noutaa sen ja palauttaa reitittimen myöhemmin, jos se on tarpeen."
			}]
		},
		
		RESTORE: {
			TITLE: "Palauta",
			CONTENT: [{
				type: "step",
				title: "Palauttaminen varmuuskopiosta",
				content: [
					"1. Napsauta Selaa.",
					"2. Paikanna ja valitse varmuuskopiointitiedosto.",
					"3. Napsauta Palauta."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Tehdasasetusten palautus",
			CONTENT: [{
				type: "paragraph",
				content: "Napsauta Tehdasasetusten palautus palauttaaksesi reitittimen tehdasasetuksiin."
			},{
				type: "note",
				title: "Huomautus",
				content: [
					"1. Tehdaspalautus poistaa kaikki reitittimelle määrittämäsi asetukset. Voit kirjautua reitittimen hallintasivulle uudelleen antamalla \"admin\" sekä käyttäjätunnukseksi että salasanaksi.",
					"2. ÄLÄ sammuta reititintä varmuuskopioinnin tai palautuksen aikana."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Tilinhallinta",
			CONTENT: [{
				type: "paragraph",
				content: "Tällä sivulla voit vaihtaa sisäänkirjautumisen käyttäjätunnuksen ja/tai salasanan ja määrittää sähköpostiosoitteen salasanan palautukselle."
			},{
				type: "name",
				title: "Vanha käyttäjätunnus",
				content: "Kirjoita nykyinen käyttäjätunnuksesi."
			},{
				type: "name",
				title: "Vanha salasana",
				content: "Kirjoita nykyinen salasanasi."
			},{
				type: "name",
				title: "Uusi käyttäjätunnus",
				content: "Kirjoita uusi käyttäjätunnuksesi."
			},{
				type: "name",
				title: "Uusi salasana",
				content: "Kirjoita uusi salasanasi."
			},{
				type: "name",
				title: "Vahvista uusi salasana",
				content: "Kirjoita uusi salasanasi uudelleen."
			},{
				type: "note",
				title: "Huomautus",
				content: "Jos päätät vaihtaa reitittimen käyttäjätunnuksen ja salasanan, muista kirjoittaa uudet tiedot muistiin turvalliseen paikkaan."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Salasanan palauttaminen",
			CONTENT: [{
				type: "name",
				title: "Ota salasanojen palautus käyttöön",
				content: "Suositellaan, että salasanapalautusominaisuus otetaan käyttöön. Se auttaa nollaamaan käyttäjätunnuksen ja salasanan sähköpostitse."
			},{
				type: "name",
				title: "Mistä",
				content: "Anna lähtevälle sähköpostille käytettävä voimassa oleva sähköpostiosoite."
			},{
				type: "name",
				title: "Mihin",
				content: "Anna saapuvalle sähköpostille käytettävä voimassa oleva sähköpostiosoite."
			},{
				type: "name",
				title: "SMTP-palvelin",
				content: "Anna sen SMTP-palvelimen osoite, jolla reititin lähettää tarkistuskoodin sähköpostitse."
			},{
				type: "name",
				title: "Ota todennus käyttöön",
				content: "Valitse Ota todennus käyttöön, jos lähtevän sähköpostin palvelin vaatii todennusta sähköpostia lähettäessään, ja täytä käyttäjätunnus ja salasana niille varattuihin kenttiin. Nämä kentät erottelevat kirjainkoon."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Paikallinen hallinta",
			CONTENT: [{
				type: "paragraph",
				content: "Tässä osiossa voit rajoittaa LAN-verkon asiakaslaitteiden määrää, jotka voivat käyttää palvelinta, käyttäen MAC-osoitepohjaista todennusta."
			},{
				type: "name",
				title: "Pääsy kaikille LAN-verkkoon yhdistetyille laitteille",
				content: "Kytke On ottaaksesi käyttöön kaikkien LAN-verkon laitteiden paikallisen hallinnan tai Off ottaaksesi käyttöön tietyn laitteen hallinnan."
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Näyttää käyttörajoitteisen laitteen MAC-osoitteen."
			},{
				type: "name",
				title: "Kuvaus",
				content: "Näyttää käyttörajoitteisen laitteen kuvauksen."
			},{
				type: "name",
				title: "Tila",
				content: "Näyttää käyttörajoitteisen laitteen nykytilan (käytössä tai poissa käytöstä)."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Antaa vaihtoehdot muuttaa tai poistaa kyseisen laitteen luettelosta."
			},{
				type: "step",
				title: "Asiakaslaitteen lisääminen luetteloon",
				content: [
					"1. Napsauta Lisää.",
					"2. Napsauta Näytä olemassa olevat laitteet valitaksesi olemassa olevan laitteen tai anna laitteen MAC-osoite kyseiseen kenttään.",
					"3. Anna laitteen kuvaus.",
					"4. Valitse Ota käyttöön.",
					"5. Napsauta OK."
				]
			},{
				type: "step",
				title: "Listan laitteen muokkaaminen tai poistaminen",
				content: "Napsauta taulukossa muokkauskuvaketta tai roskakorikuvaketta muokattavan tai poistettavan laitteen kohdalla."
			},{
				type: "step",
				title: "Usean laitteen poistaminen",
				content: "Valitse kaikki poistettavat laitteet ja napsauta Poista."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Etähallinta",
			CONTENT: [{
				type: "paragraph",
				content: "Etähallintaominaisuudella voit käyttää ja määrittää reititintä etäyhteydellä Internetin kautta."
			},{
				type: "name",
				title: "Poista etähallinta käytöstä",
				content: "Valitse tämä vaihtoehto, jos haluat poistaa etähallinnan käytöstä."
			},{
				type: "name",
				title: "Ota etähallinta käyttöön kaikille laitteille",
				content: "Valitse tämä vaihtoehto, jos haluat ottaa etähallinnan käyttöön kaikille IP-osoitteille. Jos tämä valitaan, siirry Verkkohallintaportti-kenttään."
			},{
				type: "name",
				title: "Ota etähallinta käyttöön tietyille laitteille",
				content: "Valitse tämä vaihtoehto, jos haluat ottaa etähallinnan käyttöön tietylle IP-osoitteelle. Jos tämä valitaan, siirry Verkkohallintaportti ja Remote Etähallinnan IP-osoite-kenttään."
			},{
				type: "name",
				title: "Verkkohallintaportti",
				content: "Anna sen portin numero välillä 1024-65535, jolla käytetään reitittimen verkkohallintaliittymää tehokkaammalla suojauksella. Tavallisesti Internet-selain käyttää standardia HTTP-palvelun porttia 80. Palvelun oletus- ja tavallinen portti on 8080, mikä on HTTP:n vaihtoehtoinen palveluportti."
			},{
				type: "name",
				title: "Etähallinnan IP-osoite",
				content: "Anna voimassa oleva IP-osoite tai IP-alue, jotta voit käyttää reititintä."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Järjestelmäloki",
			CONTENT: [{
				type: "paragraph",
				content: "Järjestelmäloki-sivulla luetellaan reitittimen viimeisimmät toiminnot (tapahtumat). Voit määrittää, minkä tyyppisiä ja/tasoisia lokeja haluat nähdä. Tämä sivu sisältää myös sähköpostiominaisuuden, jonka voit määrittää lähettämään lokitiedostot automaattisesti tiettyyn sähköpostiosoitteeseen tai viemään lokitiedostot tietokoneeseen."
			},{
				type: "name",
				title: "Tyyppi",
				content: "Valitse näytettävän järjestelmälokin tyyppi."
			},{
				type: "name",
				title: "Taso",
				content: "Valitse näytettävän järjestelmälokin taso."
			},{
				type: "name",
				title: "Päivitä",
				content: "Voit päivittää järjestelmälokin napsauttamalla tätä kuvaketta."
			},{
				type: "name",
				title: "Poista kaikki",
				content: "Voit poistaa kaikki järjestelmälokit napsauttamalla tätä kuvaketta."
			},{
				type: "name",
				title: "Tallenna loki",
				content: "Napsauta tätä painiketta ladataksesi kaikki järjestelmälokitiedotot paikalliselle tietokoneellesi."
			},{
				type: "name",
				title: "Postiasetukset",
				content: "Napsauta tätä painiketta määrittääksesi sähköpostiasetukset järjestelmälokeille."
			},{
				type: "step",
				title: "Järjestelmälokien sähköpostiasetusten määrittäminen",
				content: [
					"1. Napsauta Postiasetukset.",
					"2. Lähtevä osoite - Anna lähtevälle sähköpostille käytettävä voimassa oleva sähköpostiosoite.",
					"3. Vastaanotto-osoite - Anna saapuvalle sähköpostille käytettävä voimassa oleva sähköpostiosoite.",
					"4. SMTP-palvelin - Anna sen SMTP-palvelimen osoite, jota reititin käyttää lähettääkseen järjestelmälokit sähköpostitse.",
					{
						content: "5. Ota todennus käyttöön - Valitse tämä vaihtoehto, jos SMTP-palvelin vaatii todennusta sähköpostia lähetettäessä.",
						children: [{
							type: "name",
							title: "Käyttäjätunnus",
							content: "Anna SMTP-palvelimen käyttäjätunnus. Tämä kenttä erottelee kirjainkoon."
						},{
							type: "name",
							title: "Salasana",
							content: "Anna SMTP-palvelimen salasana. Tämäkin kenttä erottelee kirjainkoon."
						}]
					},{
						content: "6. Ota automaattinen sähköposti käyttöön - Valitse tämä vaihtoehto määrittääksesi, mihin aikaan järjestelmäloki tulee lähettää automaattisesti.",
						children: [{
							type: "paragraph",
							content: "Jos järjestelmäloki lähetetään päivittäin tiettyyn aikaan, ilmoita tunnit (TT) ja minuutit (MM) 24 tunnin muodossa; esim. 16:00 on 4PM."
						},{
							type: "paragraph",
							content: "Jos järjestelmäloki lähetetään tiettyyn aikaan tai tietyin aikavälein, anna tuntimäärä."
						}]
					},
					"7. Napsauta Tallenna."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Liikennetilastot",
			CONTENT: [{
				type: "paragraph",
				content: "Liikennetilastot -sivulla näytetään LAN-, WAN- ja WLAN-pakettien lähetyksen ja vastaanoton verkkoliikenne."
			},{
				type: "name",
				title: "Liikennetilastot",
				content: "Valitse On näyttääksesi tilastotiedot."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Liikennetilastoluettelo",
			CONTENT: [{
				type: "name",
				title: "IP-osoite/Mac-osoite",
				content: "Näyttää kyseisen asiakaslaitteen IP- ja MAC-osoitteet."
			},{
				type: "name",
				title: "Paketteja kaikkiaan",
				content: "Näyttää asiakaslaitteen lähettämien ja vastaanottamien pakettien kokonaismäärän istunnon alusta tai laskurin edellisestä nollauksesta."
			},{
				type: "name",
				title: "Tavuja kaikkiaan",
				content: "Näyttää asiakaslaitteen lähettämien ja vastaanottamien tavujen kokonaismäärän istunnon alusta tai laskurin edellisestä nollauksesta."
			},{
				type: "name",
				title: "Nykyiset paketit",
				content: "Näyttää nykyisen lähetetyn ja vastaanotetun pakettimäärän tietyin aikavälein."
			},{
				type: "name",
				title: "Nykyiset tavut",
				content: "Näyttää nykyisen lähetetyn ja vastaanotetun tavumäärän tietyin aikavälein."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Antaa vaihtoehdot nollata tai poistaa kyseiset tilastot luettelosta."
			},{
				type: "name",
				title: "Päivitä",
				content: "Päivitä tämän sivun tilastotiedot napsauttamalla tätä."
			},{
				type: "name",
				title: "Palauta kaikki",
				content: "Napsauta nollataksesi kaikki luettelon tilastoarvot."
			},{
				type: "name",
				title: "Poista kaikki",
				content: "Napsauta poistaaksesi kaikki luettelon tilastotiedot."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "2,4 GHz:n/5 GHz:n langaton verkko",
			CONTENT: [{
				type: "name",
				title: "Jäljitysväli",
				content: "Anna arvo välillä 40-1000 millisekuntia määrittääksesi jäljitepakettien lähetysvälin, jotka reititin lähettää synkronoidakseen langattoman verkon. Oletusarvo on 100 millisekuntia."
			},{
				type: "name",
				title: "RTS-kynnys",
				content: "Anna arvo välillä 1-2346 määrittääksesi reitittimen läpi kulkevan tiedon pakettikoon. Oletuksena RTS:n (Request to Send) kynnyskoko on 2346. Jos pakettikoko on suurempi kuin ennalta määritetty kynnys, reititin lähettää lähetyspyyntökehyksiä tiettyyn vastaanottoasemaan ja neuvottelee datakehyksen lähettämisestä; muussa tapauksessa paketti lähetetään välittömästi."
			},{
				type: "name",
				title: "DTIM-aikaväli",
				content: "Tämä arvo määrittää DTIM:n (Delivery Traffic Indication Message) aikavälin. Anna arvo välillä 1-15 millisekuntia. Oletusarvo on 1 eli sama kuin Jäljiteaikaväli."
			},{
				type: "name",
				title: "Ryhmäavaimen päivitysika",
				content: "Anna sekuntimäärä (vähintään 30) salausavaimen automaattisen uusimisen aikaväliksi. Oletus on 0, mikä merkitsee että avainta ei uusita."
			},{
				type: "name",
				title: "WMM-ominaisuus",
				content: "WMM-toiminto takaa, ettäkorkean prioriteetin viestien paketit lähetetään ensisijaisina. Se on oletuksena käytössä, ja sitä suositellaan."
			},{
				type: "name",
				title: "Lyhyt GI -ominaisuus",
				content: "Tämä toiminto on oletuksena käytössä, ja sitä suositellaan tarkoituksella kasvattaa datakapasiteettia pienentämällä GI (Guard Interval) -aikaa."
			},{
				type: "name",
				title: "AP-eristysominaisuus",
				content: "Jos haluat eristää kaikki verkkoon kytketyt langattomat laitteet ja estää niitä kommunikoimasta toistensa kanssa mutta haluat yhä Internet-yhteyden, valitse Ota AP-eristys käyttöön -valintaruutu."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "TX Beamforming on signaalinkäsittelytekniikka, jota käytetään suunnatun signaalin lähetykseen anturimatriiseissa. Kun se on käytössä, sitä käytetään lähetyspäässä vahvistamaan Wi-Fi-signaalia ja laajentamaan Wi-Fi-katealuetta."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "Ota WDS-välitili käyttöön",
				content: "Ota WDS (Wireless Distribution System) -välitiliominaisuus käyttöön salliaksesi reitittimen muodostaa välitilin toisen tukiaseman (AP) kanssa langattomassa paikallisverkossa (WLAN). Jos tämä ominaisuus on käytössä, määritä seuraavat:",
				children: [{
					type: "name",
					title: "SSID (välitili luotava)",
					content: "Anna WAP:n (langaton tukiasema) SSID, jolla reititin muodostaa yhteyden asiakkaaseen, tai etsi kaikki käytettävissä olevat verkot Survey (Kysely) -ominaisuudella."
				},{
					type: "name",
					title: "Kysely",
					content: "Napsauta tätä painiketta skannataksesi ja näyttääksesi kaikkien kantoalueella olevien langattomien verkkojen SSID-, BSSID-, signaalinvoimakkuus-, kanava- ja suojaustiedot. Kun valitset verkon, SSID, MAC-osoite ja suojaus täytetään automaattisesti."
				},{
					type: "name",
					title: "MAC-osoite (välitili luotava)",
					content: "Anna sen langattoman tukiaseman MAC-osoite (BSSID) 12 heksadesimaalimerkin (0-9, a-f, A-F) muodossa erotettuna tavuviivoilla, johon reititin muodostaa yhteyden asiakaslaitteena. Jos valitset tukiaseman kyselyominaisuudella, MAC-osoitekenttä täytetään automaattisesti."
				},{
					type: "name",
					title: "Suojaus",
					content: "Valitse valitulle tukiasemalle oikea suojaustyyppi, No (Ei), WPA-PSK/WPA2-PSK tai WEP. Jos valitset tukiaseman kyselyominaisuudella, suojauskenttä täytetään automaattisesti.",
					children: [{
						type: "name",
						title: "Salasana",
						content: "Tämä vaihtoehto on käytettävissä, kun suojaustyyppi on WPA-PSK/WPA2-PSK tai WEP. Syötä valitun tukiaseman suojaussalasana."
					},{
						type: "name",
						title: "Todennustyyppi",
						content: "Tämä vaihtoehto on käytettävissä vain, kun suojaustyyppi on WEP (Wired Equivalent Privacy). Valitse valitulle tukiasemalle asianmukainen todennustyyppi (Auto, Open System (Avoin järjestelmä) tai Shared Key (Jaettu avain))."
					},{
						type: "name",
						title: "WEP-avaimen muoto",
						content: "Tämä vaihtoehto on käytettävissä vain, kun suojaustyyppi on WEP. Valitse valitun tukiaseman avaimen muoto (ASCII tai Hexadecimal (Heksadesimaalinen))."
					}]
				}]
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Valitse Ota WPS käyttöön-valintaruutu ja napsauta Tallenna ottaaksesi käyttöön WPS (Wi-Fi Protected Setup) -toiminnon, jolla voit helposti asentaa ja yhdistää WPS-laitteet painamalla WPS-painiketta."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Valitse Ota NAT käyttöön -valintaruutu ja napsauta Tallenna ottaaksesi NAT (Network Address Translation) -toiminnon käyttöön."
			},{
				type: "note",
				title: "Huomautus",
				content: "Kun NAT on poissa käytöstä, NAT-välityksen määritykset eivät ole voimassa."
			},{
				type: "name",
				title: "NAT Boost",
				content: "Valitse Ota NAT Boost käyttöön -valintaruutu ja napsauta Tallenna varmistaaksesi, että reitittimen läpivienti on paras siirtomäärä."
			},{
				type: "note",
				title: "Huomautus",
				content: "Kun NAT Boost on käytössä, QoS ja Liikennetilastot poistetaan käytöstä automaattisesti."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "DoS-suojaustason asetukset",
			CONTENT: [{
				type: "paragraph",
				content: "DoS-suojaustaso suojaa reitittimen ICMP-FLOOD-, UDP-FLOOD- ja TCP-FLOOD-hyökkäyksiltä."
			},{
				type: "name",
				title: "ICMP-FLOOD-pakettitaso",
				content: "Anna arvo välillä 5-7200 ICMP-pakettia käynnistämään ICMP-FLOOD-suojaus heti, kun pakettien määrä ylittää esivalitun kynnysarvon."
			},{
				type: "name",
				title: "UDP-FLOOD-pakettitaso",
				content: "Anna arvo välillä 5-7200 UDP-pakettia käynnistämään UDP-FLOOD-suojaus heti, kun pakettien määrä ylittää esivalitun kynnysarvon."
			},{
				type: "name",
				title: "TCP-FLOOD-pakettitaso",
				content: "Anna arvo välillä 5-7200 TCP-SYN-pakettia käynnistämään TCP-SYN-FLOOD-suojaus heti, kun pakettien määrä ylittää esivalitun kynnysarvon."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Kaksipuolinen",
			CONTENT: [{
				type: "name",
				title: "Kaksipuolinen",
				content: "Valitse kaksisuuntaisuustyyppi alasvetovalikosta."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "Merkkivalo",
			CONTENT: [{
				type: "name",
				title: "Ota yötila käyttöön",
				content: "Valitse tämä valintaruutu sammuttaaksesi merkkivalot yötila-aikaan vaikuttamatta reitittimen suorituskykyyn."
			},{
				type: "name",
				title: "Yötila-aika",
				content: "Määritä yötilan käyttöaika."
			},{
				type: "paragraph",
				content: "Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "OpenVPN:n avulla voit käyttää verkkoasi suojatusti Internetin kautta, kun et ole kotona. Jotta voit käyttää VPN-palvelua, sinun on määritettävä Dynamic DNS Service (Dynaaminen DNS-palvelu) (suositellaan) tai määrättävä reitittimen WAN-portille staattinen IP-osoite. Lisäksi järjestelmäaika on synkronoitava Internetin kanssa."
			},{
				type: "name",
				title: "Ota VPN-palvelin käyttöön",
				content: "Ota OpenVPN-palvelin käyttöön valitsemalla tämä valintaruutu."
			},{
				type: "name",
				title: "Palvelun tyyppi",
				content: "Valitse OpenVPN-palvelimen tiedonsiirtoprotokolla: UDP tai TCP."
			},{
				type: "name",
				title: "Palveluportti",
				content: "Anna tiedonsiirtoportin numero välillä 1024-65535. Oletus- ja yleinen palveluportti on 1194."
			},{
				type: "name",
				title: "VPN:n aliverkon/verkon peite",
				content: "Anna asiakkaille OpenVPN-palvelimelta vuokrattavien IP-osoitteiden alue."
			},{
				type: "name",
				title: "Asiakaspääsy",
				content: "Valitse OpenVPN-asiakkaan käyttötyyppi.",
				children: [{
					type: "name",
					title: "Vain kotiverkko",
					content: "Asiakkaat voivat käyttää vain reititintä ja LAN-verkkoa. Asiakkaan oletusreitti ei muutu."
				},{
					type: "name",
					title: "Internet ja kotiverkko",
					content: "Asiakkaat voivat käyttää kotiverkkoa ja Internet-sivustoja tai -palveluita maantieteellisin rajoituksin ollessasi poissa maasta. Asiakkaan oletusreitti muuttuu."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Sertifikaatti",
			CONTENT: [{
				type: "paragraph",
				content: "Käytä etätietokoneen VPN-yhteyden tiedoille ja identiteetille sertifikaattia."
			},{
				type: "name",
				title: "Luo",
				content: "Napsauta luodaksesi uusi sertifikaatti."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Määritystiedosto",
			CONTENT: [{
				type: "paragraph",
				content: "Etäasiakkaat käyttävät konfigurointitiedostoa reitittimen käytössä."
			},{
				type: "name",
				title: "Vie",
				content: "Napsauta tätä painiketta tallentaaksesi OpenVPN-kokoonpanotiedosto, jolla lisätään uusi VPN-yhteys."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "VPN-asiakkaan asennusopas",
			CONTENT: [{
				type: "step",
				title: "Asiakaslaitteiden käyttöönotto ja yhdistäminen OpenVPN-palvelimeen:",
				content:[{
					type: "paragraph",
					content: "Ennen kuin määrität OpenVPN-palvelimen, määrtä dynaaminen DNS-palvelin (suositellaan) tai määrää WAN-portille staattinen IP-osoite. Varmista lisäksi, että NAT-asetusten ulkoinen portti ei ole palveluportti ja että järjestelmän aika on synkronoitu Internetin kanssa."
				},
					"1. Valitse Ota VPN-palvelin käyttöön.",
					"2. Määritä OpenVPN-palvelimen parametrit (Palvelutyyppi, Palveluportti, Asiakaspääsy ja VPN aliverkko/peite) ja napsauta Tallenna.",
					"3. Tallenna kokoonpanotiedosto napsauttamalla Vie.",
					"4. Lataa ja asenna asiakaslaitteisiin OpenVPN-asiakasohjelma osoitteesta <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Tuetut ympäristöt ovat Windows, Mac OSX, Linux.",
					"5. Käynnistä OpenVPN-asiakasohjelma ja lisää uusi VPN-yhteys käyttäen tallennettua kokoonpanotiedostoa yhdistääksesi asiakaslaitteen VPN-palvelimeen."
				]},{
					type: "note",
					title: "Huomautus",
					content: "Lisätietoja OpenVPN-asiakkaista on osoitteessa <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "PPTP VPN:n avulla voit käyttää verkkoasi helposti ja nopeasti Internetin kautta, kun et ole kotona. Jotkut ISP:t saattavat estää tämän. Jotta voit käyttää VPN-palvelua, sinun on määritettävä Dynamic DNS Service (Dynaaminen DNS-palvelu) (suositellaan) tai määrättävä reitittimen WAN-portille staattinen IP-osoite. Lisäksi järjestelmäaika on synkronoitava Internetin kanssa."
			},{
				type: "name",
				title: "Ota VPN-palvelin käyttöön",
				content: "Ota PPTP VPN -palvelin käyttöön valitsemalla tämä valintaruutu."
			},{
				type: "name",
				title: "Asiakkaan IP-osoite",
				content: "Anna IP-osoitealue (enintään 10 asiakasta), jotka PPTP VPN -palvelin voi vuokrata asiakkaille."
			},{
				type: "name",
				title: "Salli Samba (Network Place) -käyttö",
				content: "Valitse salliaksesi VPS-asiakkaiden käyttää paikallista Samba-palvelinta."
			},{
				type: "name",
				title: "Salli NetBIOS-läpilasku",
				content: "Valitse salliaksesi VPS-asiakkaiden käyttää paikallista Samba-palvelinta NetBIOS-nimellä."
			},{
				type: "name",
				title: "Salli salaamattomat yhteydet",
				content: "Valitse salliaksesi salaamattomat yhteydet VPN-palvelimeen."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Tilikartta",
			CONTENT: [{
				type: "paragraph",
				content: "Tässä taulukossa esitetään tilit, joilla etäasiakkaat voivat muodostaa yhteyden PPTP VPN -palvelimeen."
			},{
				type: "step",
				title: "PPTP VPN -tilin lisääminen",
				content: [
					"1. Napsauta Lisää.",
					"2. Anna käyttäjätunnus ja salasana, jolla PPTP VPN -palvelimen asiakkaat todennetaan.",
					"3. Napsauta OK."
				]
			},{
				type: "step",
				title: "Olemassa olevan tilin muokkaaminen tai poistaminen",
				content: "Napsauta taulukossa muokkauskuvaketta tai roskakorikuvaketta muokattavan tai poistettavan tilin kohdalla."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "VPN-asiakkaan asennusopas",
			CONTENT: [{
				type: "step",
				title: "Asiakaslaitteiden käyttöönotto ja yhdistäminen PPTP VPN -palvelimeen:",
				content:[{
					type: "paragraph",
					content: "Ennen kuin määrität PPTP VPN -palvelimen, määrtä dynaaminen DNS-palvelin (suositellaan) tai määrää WAN-portille staattinen IP-osoite. Varmista, että NAT-asetusten ulkoinen portti ei ole 1723 ja että järjestelmän aika on synkronoitu Internetin kanssa."
				},
					"1. Valitse Ota VPN-palvelin käyttöön.",
					"2. Määritä PPTP VPN -palvelimen parametrit ja napsauta Tallenna.",
					"3. Luo asiakaslaitteissa PPTP VPN -yhteys. Tuetut ympäristöt ovat Windows, Mac OSX, Linux, iOS ja Android.",
					"4. Käynnistä PPTP VPN -ohjelma, lisää uusi yhteys ja anna rekisteröidyn DDNS-palvelun WAN-portin toimialueen nimi tai staattinen IP-osoite yhdistääksesi asiakaslaitteen PPTP VPN -palvelimeen."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "VPN-yhteydet",
			CONTENT: [{
				type: "paragraph",
				content: "Tällä sivulla näytetään asiakkaat, jotka on tällä hetkellä kytketty reitittimen OpenVPN- tai PPTP VPN -palvelimeen."
			},{
				type: "paragraph",
				content: "Napsauta miinuskuvaketta katkaistaksesi yhteyden kyseiseen asiakkaaseen."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Internet-tila",
				content: "Näyttää reitittimen Internet-yhteyden nykytilan."
			},{
				type: "name",
				title: "Yhteystyyppi",
				content: "Näyttää Internet-yhteystyypin."
			},{
				type: "name",
				title: "IP-osoite",
				content: "Näyttää reitittimelle määrätyn Internetin IP-osoitteen."
			},{
				type: "name",
				title: "Toissijainen yhteys/IP-osoite",
				content: "Näyttää toissijaisen yhteystyypin ja IP-osoitteen."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Reititin",
			CONTENT: [{
				type: "title",
				title: "2,4 GHz:n/5 GHz:n langaton verkko"
			},{
				type: "name",
				title: "SSID",
				content: "Näyttää 2,4 GHz:n/5 GHz:n taajuusalueen langattoman verkon nimen."
			},{
				type: "name",
				title: "Kanava",
				content: "Näyttää kanavan, jolla langaton 2,4 GHz:n/5 GHz:n verkko lähettää."
			},{
				type: "name",
				title: "MAC",
				content: "Näyttää langattoman 2,4 GHz:n/5 GHz:n verkon MAC-osoitteen."
			},{
				type: "title",
				title: "2,4 GHz:n/5 GHz:n vierasverkko"
			},{
				type: "name",
				title: "Tila",
				content: "Näyttää, onko langaton 2,4 GHz:n/5 GHz:n vierasverkko on päällä (käytössä) tai poissa päältä (ei käytössä)."
			},{
				type: "name",
				title: "SSID",
				content: "Näyttää vierasverkon langattoman verkon nimen."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Langalliset/langattomat asiakaslaitteet",
			CONTENT: [{
				type: "name",
				title: "Nimi",
				content: "Näyttää reitittimeen kytketyn asiakkaan nimen."
			},{
				type: "name",
				title: "IP-osoite",
				content: "Näyttää asiakaslaitteelle annetun IP-osoitteen."
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Näyttää asiakkaan MAC-osoitteen."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Tulostin",
			CONTENT: [{
				type: "name",
				title: "Nimi",
				content: "Näyttää reitittimeen USB-portin kautta kytketyn tulostimen nimen."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "USB-levy",
			CONTENT: [{
				type: "name",
				title: "USB-levy",
				content: "Näytä reitittimeen kytketyn USB-aseman nimi."
			},{
				type: "name",
				title: "Yhteensä",
				content: "Näytä kytketyn USB-tallennusvälineen kokonaistallennuskapasiteetti."
			},{
				type: "name",
				title: "Käytettävissä",
				content: "Näytä kytketyn USB-tallennusvälineen vapaan tallennuskapasiteetti."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Automaattinen tunnistus",
				content: "Napsauta tätä painiketta, jos haluat, että reititin tunnistaa automaattisesti Internet-yhteystyyppisi."
			},{
				type: "note",
				title: "Huomautus",
				content: "Jos et ole varma, mikä Internet-yhteystyyppisi on, käytä automaattista tunnistusta tai pyydä ISP:ltä apua."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: Staattinen IP-osoite",
			},{
				type: "name",
				title: "IP-osoite/Aliverkon peite/Oletusyhdyskäytävä/Ensisijainen DNS/Toissijainen DNS",
				content: "Anna ISP:n antamat tiedot."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: Dynaaminen IP-osoite",
			},{
				type: "name",
				title: "ÄLÄ kloonaa MAC-osoitetta/Klooneen nykyisen tietokoneen MAC-osoite",
				content: "Valitse, kloonataanko MAC-osoite, ISP:n tietojen mukaisesti."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: PPPoE",
			},{
				type: "name",
				title: "Käyttäjätunnus/salasana",
				content: "Anna ISP:n antama käyttäjätunnus ja salasana. Nämä kentät erottelevat pienet ja suuret kirjaimet."
			},{
				type: "title",
				title: "Internet-yhteystyyppi: L2TP/PPTP",
			},{
				type: "name",
				title: "Käyttäjätunnus/salasana",
				content: "Anna ISP:n antama käyttäjätunnus ja salasana. Nämä kentät erottelevat pienet ja suuret kirjaimet."
			},{
				type: "name",
				title: "Toissijainen yhteys (Dynaaminen IP tai Staattinen IP)",
				children: [{
					type: "name",
					title: "Dynaaminen IP-osoite",
					content: "Valitse, määrääkö ISP IP-osoitteen ja aliverkonpeitteen automaattisesti."
				},{
					type: "name",
					title: "Staattinen IP-osoite",
					content: "Valitse, antaako ISP IP-osoitteen ja aliverkon peitteen, ja anna nämä tiedot vastaaviin kenttiin."
				}]
			},{
				type: "name",
				title: "VPN-palvelimen IP/toimialueen nimi",
				content: "Anna ISP:ltä saatu VPN-palvelimen IP-osoite tai toimialueen nimi."
			},{
				type:"paragraph",
				content:"Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Langattoman verkon asetukset",
			CONTENT: [{
				type: "name",
				title: "Ota langaton radio käyttöön",
				content: "Valitse tämä valintaruutu ottaaksesi käyttöön 2,4 GHz:n/5 GHz:n langattoman radiotaajuuden."
			},{
				type: "name",
				title: "Langattoman verkon nimi (SSID)",
				content: "Voit jättää langattoman verkon oletusnimen (SSID) silleen tai antaa uuden nimen (enintään 32 merkkiä). Tämä kenttä erottelee kirjainkoon."
			},{
				type: "name",
				title: "Piilota SSID",
				content: "Valitse tämä valintaruutu, jos haluat piilottaa 2,4 GHz:n/5 GHz:n verkon nimen (SSID) Wi-Fi-verkkojen luettelosta."
			},{
				type: "name",
				title: "Salasana",
				content: "Anna langattoman verkon salasana pituudeltaan 8-63 ASCII-merkkiä tai 8-64 heksadesimaalista merkkiä. Tämä kenttä erottelee kirjainkoon."
			},{
				type:"paragraph",
				content:"Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Laitteen asetukset",
			CONTENT: [{
				type: "paragraph",
				content: "Laiteasetukset -sivulla näytetään asianmukaiset tiedot kaikista USB-porttiin kytketyistä USB-tallennusvälineistä."
			},{
				type: "name",
				title: "Skannaa",
				content: "Tavallisesti reititin tunnistaa automaattisesti kaikki juuri liitetyt laitteet. Jos näin ei käy, napsauta tätä painiketta etsiäksesi uusia kytkettyjä laitteita ja päivittääksesi sivun uusin tiedoin."
			},{
				type: "name",
				title: "Asema",
				content: "Näyttää USB-aseman nimen."
			},{
				type: "name",
				title: "Kapasiteetti",
				content: "Näyttää USB-laitteen tallennuskapasiteetin."
			},{
				type: "name",
				title: "Vapaa tila",
				content: "Näyttää vapaan tallennustilan määrän."
			},{
				type: "name",
				title: "Poista turvallisesti",
				content: "Napsauta tätä USB-laitetta poistaaksesi USB-laitteen ennen kuin irrotat sen fyysisesti reitittimestä.",
				children: [{
					type: "paragraph",
					content: "Huomaa, että Poista turvallisesti -painike on näkyvissä vain, kun reitittimeen on kytketty USB-tallennusväline, ja että et voi poistaa USB-laitetta sen ollessa käytössä."
				}]
			},{
				type: "name",
				title: "Tila",
				content: "Tämä valintaruutu on näkyvissä vain, kun reitittimeen on kytketty USB-tallennusväline. Valitse se ottaaksesi käyttöön USB-laitteen tiedostonjako."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Jakoasetukset",
			CONTENT: [{
				type: "name",
				title: "Verkon/mediapalvelimen nimi",
				content: "Näyttää nimen, jolla kytkettyä USB-tallennuslaitetta käytetään."
			},{
				type:"paragraph",
				content:"Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Kansion jakaminen",
			CONTENT: [{
				type: "name",
				title: "Jaa kaikki",
				content: "Valitse On jakaaksesi kaikki tiedostot ja kansiot tai Off jakaaksesi vain valitut kansiot."
			},{
				type: "name",
				title: "Ota todennus käyttöön",
				content: "Suositellaan, että todennus otetaan käyttöön, jotta käyttäjien on annettava voimassa oleva käyttäjätunnus ja salasana voidakseen käyttää jaettuja kansioita."
			},{
				type: "name",
				title: "Kansion nimi",
				content: "Näyttää jaetun kansion nimen."
			},{
				type: "name",
				title: "Kansion polku",
				content: "Näyttää jaetun kansion polun."
			},{
				type: "name",
				title: "Median jakaminen",
				content: "Ilmoittaa, onko median jakaminen sallittua jaetussa kansiossa."
			},{
				type: "name",
				title: "Aseman nimi",
				content: "Näyttää jaetun aseman nimen."
			},{
				type: "name",
				title: "Tila",
				content: "Näyttää jaetun kansion tilan hehkulampun kuvalla."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Näyttää vaihtoehdot muokata tai poistaa vastaavan jaetun kansion."
			},{
				type: "name",
				title: "Lisää",
				content: "Luo uusi syöte tätä painiketta painamalla."
			},{
				type: "name",
				title: "Poista",
				content: "Napsauta tätä painiketta poistaaksesi valitun kohdan taulukosta."
			},{
				type: "name",
				title: "Selaa",
				content: "Napsauta hakeaksesi jaettua kansiota."
			},{
				type: "name",
				title: "Salli vierasverkkokäyttö",
				content: "Valitse salliaksesi vierasverkon asiakaslaitteiden käyttää jaettuja kansioita."
			},{
				type: "name",
				title: "Ota todennus käyttöön",
				content: "Valitse edellyttääksesi, että käyttäjät käyttävät jaettuja kansioita voimassa olevalla käyttäjätunnuksella ja salasanalla."
			},{
				type: "name",
				title: "Ota kirjoitusoikeus käyttöön",
				content: "Valitse salliaksesi käyttäjien muuttaa kansion sisältöä."
			},{
				type: "name",
				title: "Ota median jakaminen käyttöön",
				content: "Valitse ottaaksesi median jaon käyttöön."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Tulostinpalvelin",
			CONTENT: [{
				type: "name",
				title: "Tulostinpalvelin",
				content: "Valitse On ottaaksesi tulostuspalvelintoiminnon käyttöön."
			},{
				type: "name",
				title: "Tulostimen nimi",
				content: "Näyttää reitittimeen kytketyn tulostimen nimen."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Lapsilukko",
			CONTENT: [{
				type: "name",
				title: "Lapsilukko",
				content: "Valitse On ottaaksesi lapsilukituksen käyttöön. Tämä ominaisuus on oletuksena pois käytöstä."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Lapsilukituksen alaiset laitteet",
			CONTENT: [{
				type: "paragraph",
				content: "Näyttää luettelon lapsilukituksen alaisista laitteista."
			},{
				type: "name",
				title: "Laitteen nimi",
				content: "Näyttää kaikkien yhdistettyjen asiakaslaitteiden nimen, jotka ovat lapsilukituksen alaisia."
			},{
				type: "name",
				title: "MAC-osoite",
				content: "Näyttää kaikkien yhdistettyjen asiakaslaitteiden MAC-osoitteen, jotka ovat lapsilukituksen alaisia."
			},{
				type: "name",
				title: "Internetin käyttöaika",
				content: "Näyttää rajoituksen käyttöajat. Aikataulu astuu voimaan reitittimen järjestelmäajan mukaisesti, joka voidaan määrittää kohdasta \"Järjestelmätyökalut -> Aika-asetukset\"."
			},{
				type: "name",
				title: "Kuvaus",
				content: "Näyttää yhdistetyn laitteen lyhyen kuvauksen. Tämä on valinnainen asetus."
			},{
				type: "name",
				title: "Tila",
				content: "Näyttää vastaavan laitteen lapsilukituksen nykytilan (käytössä tai poissa käytöstä)."
			},{
				type: "name",
				title: "Muokkaa",
				content: "Näyttää vaihtoehdot muokata tai poistaa vastaavan laitteen."
			},{
				type: "step",
				title: "Uuden asiakaslaitteen rajoittaminen",
				content:[
					"1. Napsauta Lisää.",
					"2. Napsauta Näytä olemassa olevat laitteet ja valitse yhdistetty laite Käytä laiteluetteloa; voit myös antaa laitenimen ja MAC-osoitteen manuaalisesti lisätäksesi laitteen, jota ei ole yhdistetty.",
					"3. Napsauta Internet-käyttöaikakuvaketta määrittääksesi, milloin rajoitus on voimassa.",
					"4. Anna Kuvaus-kenttään lyhyt kuvaus. (valinnainen)",
					"5. Valitse Ota käyttöön.",
					"6. Napsauta OK."
				]
			},{
				type: "paragraph",
				content: "Voit muokata lapsilukitussyötettä tai poistaa sen napsauttamalla muokkauskuvaketta muokataksesi tietoja tia roskakorikuvaketta poistaaksesi vastaavan syötteen."
			},{
				type: "paragraph",
				content: "Voit poistaa useita syötteitä valitsemalla ne kaikki ja napsauttamalla Poista taulukon yläpuolelta."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Vierasverkko",
			CONTENT: [{
				type: "paragraph",
				content: "Vierasverkolla voit määrittää erillisen verkon ja erillisen langattoman verkon nimen (SSID) ja salasanan, jolla vieraat pääsevät käyttämään langatonta verkkoasi."
			},{
				type: "name",
				title: "Anna vieraiden nähdä toisensa",
				content: "Valitse tämä valintaruutu, jos haluat antaa vierasverkon langattomien laitteiden nähdä toisensa."
			},{
				type: "name",
				title: "Anna vieraiden käyttää paikallsverkkoa",
				content: "Valitse tämä valintaruutu, jos haluat antaa vierasverkon langattomien laitteiden käyttää paikallisverkkosi verkkoresursseja ja tulostimia."
			},{
				type: "name",
				title: "Ota vierasverkko käyttöön",
				content: "Valitse tämä valintaruutu ottaaksesi vierasverkko-ominaisuuden käyttöön."
			},{
				type: "name",
				title: "Langattoman verkon nimi (SSID)",
				content: "Käytä joko vierasverkon oletus-SSID:iä tai anna uusi nimi (enintään 32 merkkiä)."
			},{
				type: "name",
				title: "Piilota SSID",
				content: "Valitse tämä valintaruutu, jos haluat piilottaa vierasverkon SSID:n Wi-Fi-verkkojen luettelosta."
			},{
				type: "name",
				title: "Salasana",
				content: "Käytä joko satunnaisesti luotua salasanaa tai luo salasana pituudeltaan 8-63 ASCII-merkkiä tai 8-64 heksadesimaalista merkkiä (0-9, a-f, A-F)."
			},{
				type:"paragraph",
				content:"Tallenna kaikki asetukset napsauttamalla Save (Tallenna)."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"TP-Link Cloud -palvelulla voit etävalvoa verkkoa tosiajassa ja käyttää ja hallinnoida TP-Link-laitteitasi Internetistä milloin vain ja missä vain."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Tilitiedot",
			CONTENT:[{
				type:"paragraph",
				content:"Näyttää TP-Link-tunnuksesi tiedot. Voit muokata tilin tietoja napsauttamalla Edit-kuvaketta."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Laitetiedot",
			CONTENT:[{
				type:"paragraph",
				content:"Näyttää laitteen tiedot, mukaan lukien laitetta hallinnoivan pilvitilin."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Sidotut tilit",
			CONTENT:[{
				type:"paragraph",
				content:"Tässä taulukossa näytetään kaikki pilvitilit, jotka on tällä hetkellä sidottu laitteeseen."
			},{
				type:"step",
				title:"Käyttäjätilin sidonta",
				content:["1. Napsauta Bind.",
				"2. Anna rekisteröity sähköposti, jonka haluat sitoa.",
				"3. Napsauta Tallenna."]
			}]

		}

	};
})(jQuery);

