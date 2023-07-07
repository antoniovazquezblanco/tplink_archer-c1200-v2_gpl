(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra la información relevante sobre la conexión de del de área extensa(internet)."
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Las direcciones físicas únicas asignadas al puerto de internet (WAN) del router."
			},{
				type: "name",
				title: "Dirección IP",
				content: "Las direcciones IP asignadas al puerto de internet (WAN) del router. Si la dirección IP aparece como 0.0.0.0, esto indica que no hay acceso a internet."
			},{
				type: "name",
				title: "Máscara de Subred",
				content: "Este parámetro determina el rango de red y el rango de host de una dirección IP."
			},{
				type: "name",
				title: "Puerta de enlace predeterminada",
				content: "La dirección IP con la que se conecta el router a la red."
			},{
				type: "name",
				title: "DNS Primario/DNS Secundario",
				content: "El sistema de nombre de dominio (DNS) traduce los nombres de los host y los dominios de internet a direcciones IP. La información de los servidores DNS es asignada por el proveedor de servicios de internet (ISP)."
			},{
				type: "name",
				title: "Tipo de Conexión",
				content: "El tipo de conexión actual del puerto de internet (WAN)."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Las direcciones físicas únicas asignadas al puerto de internet (WAN) del router."
			},{
				type: "name",
				title: "Dirección IP",
				content: "Las direcciones IP asignadas al puerto de internet (WAN) del router. Si la dirección IP aparece como 0.0.0.0, esto indica que no hay acceso a internet."
			},{
				type: "name",
				title: "Puerta de enlace predeterminada",
				content: "La dirección IP con la que se conecta el router a la red."
			},{
				type: "name",
				title: "DNS Primario/DNS Secundario",
				content: "El sistema de nombre de dominio (DNS) traduce los nombres de los host y los dominios de internet a direcciones IP. La información de los servidores DNS es asignada por el proveedor de servicios de internet (ISP)."
			},{
				type: "name",
				title: "Tipo de Conexión",
				content: "El tipo de conexión actual del puerto de internet (WAN)."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Red inalámbrica",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra la información relevante sobre la red inalámbrica."
			},{
				type: "name",
				title: "Nombre de Red Inalámbrica (SSID)",
				content: "El nombre de red inalámbrico, también conocido como SSID (Identificador de conjunto de servicio)."
			},{
				type: "name",
				title: "Señal inalámbrica",
				content: "El estado actual (encendido o apagado) de la red inalámbrica."
			},{
				type: "name",
				title: "Modo",
				content: "El modo inalámbrico actual."
			},{
				type: "name",
				title: "Ancho del canal",
				content: "El ancho de canal de la red inalámbrica."
			},{
				type: "name",
				title: "Canal",
				content: "El canal inalámbrico y su correspondiente frecuencia (en GHz)."
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Las direcciones MAC del radio inalámbrico de la red en el router."
			},{
				type: "name",
				id: "status_wds",
				title: "Estado WDS",
				content: "El estado actual (activado o desactivado) del modo WDS."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra la información sobre los puertos Ethernet (LAN)."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Las direcciones físicas únicas asignadas al puerto Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Dirección IP",
				content: "La dirección IPv4 asignado al puerto Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Máscara de Subred",
				content: "Este parámetro determina el rango de red y el rango de host de una dirección IP."
			},{
				type: "name",
				title: "DHCP",
				content: "Muestra si el servidor DHCP incorporado en el router esta activo o no para dispositivos en los puertos LAN."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Las direcciones físicas únicas asignadas al puerto Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Dirección IP",
				content: "La dirección IPv6 asignado al puerto Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Máscara de Subred",
				content: "Las direcciones de enlace IPv6 en el interfaz LAN."
			},{
				type: "name",
				title: "DHCP",
				content: "El tipo de dirección IPv6 para el interfaz LAN."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Red de invitados",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra la información sobre la red inalámbrica para invitados."
			},{
				type: "name",
				title: "Nombre de Red Inalámbrica (SSID)",
				content: "El nombre de red inalámbrica para su Red de Invitados."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Muestra si el nombre de red inalámbrica (SSID) de la red de invitados está oculto o no."
			},{
				type: "name",
				title: "Señal inalámbrica",
				content: "El estado actual (encendido o apagado) de la red de invitados."
			},{
				type: "name",
				title: "Permitir que los clientes se vean entre ellos",
				content: "Muestra si todos los dispositivos en la red de invitados tienen permiso para comunicarse entre ellos o no."
			}]
		},
		STATUS_USB: {
			TITLE: "Dispositivos USB",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra la información de los dispositivos de almacenamiento USB actuales y/o impresoras conectadas vía puertos USB."
			},{
				type: "name",
				title: "Impresora",
				content: "El nombre de la impresora conectada."
			},{
				type: "name",
				title: "Disco USB",
				content: "El nombre del disco USB conectado al router."
			},{
				type: "name",
				title: "Totales",
				content: "La capacidad de almacenamiento total del dispositivo de almacenamiento USB conectado."
			},{
				type: "name",
				title: "Disponible",
				content: "La capacidad de almacenamiento disponible del dispositivo de almacenamiento USB conectado."
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Rendimiento",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra el funcionamiento actual del router."
			},{
				type: "name",
				title: "Cargar CPU",
				content: "El uso actual de la CPU."
			},{
				type: "name",
				title: "Uso de memoria",
				content: "El uso de memoria actual."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Clientes por cable",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra información de todos los dispositivos conectados por cable que están conectados actualmente a la red."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Clientes Inalámbricos",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra información de todos los dispositivos inalámbricos que están conectados actualmente a la red."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Tipo de Conexión a Internet: IP Estática"
			},{
				type: "paragraph",
				content: "Seleccione este tipo si su ISP le está proporcionando una dirección IP específica (fija), una Submáscara de Red,  una Puerta de Enlace y parámetros DNS."
			},{
				type: "name",
				title: "Dirección IP/máscara de subred/Puerta de enlace predeterminada/DNS primario/DNS secundario",
				content: "Introduzca la información proporcionada por su ISP."
			},{
				type: "name",
				title: "Tamaño MTU",
				content: "El tamaño por defecto y típico de MTU (Unidad de Transmisión Máxima) para la mayoría de las redes Ethernet es 1500 Bytes. No se recomienda cambiar el tamaño por defecto de MTU a menos que sea requerido por su ISP."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: IP Dinámica"
			},{
				type: "paragraph",
				content: "Seleccione esta opción si le ha sido proporcionado un servidor DHCP por parte de su ISP."
			},{
				type: "name",
				title: "Dirección IP/máscara de subred/Puerta de enlace predeterminada/DNS primario/DNS secundario",
				content: "Estos parámetros son asignados por su ISP automáticamente por el servidor DHCP."
			},{
				type: "name",
				title: "Renovar",
				content: "Haga click en este botón para obtener nuevos parámetros IP del servidor DHCP."
			},{
				type: "name",
				title: "Liberar",
				content: "Haga click en este botón para liberar todas las direcciones IP asignadas en el servidor DHCP."
			},{
				type: "name",
				title: "Usar las siguientes direcciones DNS",
				content: "Si el ISP proporciona una o dos direcciones de DNS, seleccione este casillero e introduzca las direcciones de DNS Primaria y Secundaria en el correspondiente campo; por otro lado las direcciones DNS se asignarán dinámicamente por el ISP."
			},{
				type: "name",
				title: "Tamaño MTU",
				content: "El tamaño por defecto y típico de MTU (Unidad de Transmisión Máxima) para la mayoría de las redes Ethernet es 1500 Bytes. No se recomienda cambiar el tamaño por defecto de MTU a menos que sea requerido por su ISP."
			},{
				type: "name",
				title: "Nombre de equipo",
				content: "Introduzca un valor en el campo para especificar el nombre del Host en el Router."
			},{
				type: "name",
				title: "Obtener IP utilizando DHCP Unicast",
				content: "Seleccione esta casilla si el servidor DHCP de su ISP no soporta aplicaciones broadcast y no puede obtener dirección IP automáticamente."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: PPPoE"
			},{
				type: "paragraph",
				content: "Seleccione este tipo si utiliza un servicio DSL (Línea de Subscripción Digital) y su ISP le está proporcionando un usuario y contraseña."
			},{
				type: "name",
				title: "Nombre de usuario/Contraseña",
				content: "Introduzca el nombre de usuario y la contraseña proporcionada por su ISP. Estos campos distinguen entre mayúsculas y minúsculas."
			},{
				type: "name",
				title: "Dirección IP/DNS Primario/DNS secundario",
				content: "Estos parámetros son asignados automáticamente por el servidor DHCP en su ISP."
			},{
				type: "name",
				title: "Conexión Secundaria(Ninguna, IP Dinámica, IP Estática)",
				children: [{
					type: "name",
					title: "Ninguno",
					content: "Seleccione esta opción si no tiene una conexión secundaria."
				},{
					type: "name",
					title: "IP Dinámica",
					content: "Seleccione si la dirección IP y la máscara de subred son asignados automáticamente por el ISP.",
					children: [{
						type: "name",
						title: "Renovar",
						content: "Haga click en este botón para renovar los parámetros IP de su ISP."
					},{
						type: "name",
						title: "Liberar",
						content: "Haga click en este botón para liberar los parámetros IP asignados."
					}]
				},{
					type: "name",
					title: "IP Estática",
					content: "Seleccione si su dirección IP y la máscara de subred son proporcionados por su ISP, e introduzca esta información en los campos correspondientes"
				}]
			},{
				type: "name",
				title: "Tamaño MTU",
				content: "El tamaño típico de MTU (Unidad de Transmisión Máxima) para redes Ethernet es 1480 Bytes.",
				children: [{
					type: "note",
					title: "Nota",
					content: "En casos aislados, su ISP puede requerirle ajustar el tamaño de MTU para un mejor rendimiento de red. No debería cambiar el valor a menos que sea absolutamente necesario."
				}]
			},{
				type: "name",
				title: "Nombre de Servicio/ Nombre de Concentrador de Acceso",
				content: "Por defecto, el nombre de servicio y el nombre de concentrador de acceso (AC) están en blanco. Estos campos no deben ser configurados a menos que sea requerido por su ISP."
			},{
				type: "name",
				title: "Detectar intervalo en línea",
				content: "Introduzca un tiempo de intervalo entre 0 y 120 (en segundos) en los que el router detecta el concentrador de acceso en línea a cada intervalo. El valor por defecto es 10."
			},{
				type: "name",
				title: "Dirección IP",
				content: "Si su ISP le proporciona una dirección IP específica (fija), seleccione Utilizar la siguiente Dirección IP e introduzca la dirección IP en el campo, si no seleccione Obtener Dinámicamente del ISP para obtener una dirección IP asignada por el servidor automáticamente."
			},{
				type: "name",
				title: "Dirección DNS/DNS Primario/DNS Secundario",
				content: "Si su ISP le proporciona direcciones DNS específicas (fija)"
			},{
				type: "name",
				title: "Modo de conexión",
				content: "Seleccione un modo de conexión apropiado que determine como conectarse a internet.",
				children: [{
					type: "name",
					title: "Auto",
					content: "En este modo, la conexión a internet se reconecta automáticamente en cualquier momento  en el que se desconecte."
				},{
					type: "name",
					title: "Bajo demanda",
					content: "En este modo, la conexión a internet estará terminada automáticamente después de un especifico periodo de inactividad(Max Periodo de Inactividad) haya transcurrido. La conexión se re-establece cuando intente acceder a internet otra vez."
				},{
					type: "name",
					title: "Basado en el tiempo",
					content: "En este modo, la conexión a internet se establece solo en un intervalo de tiempo específico. Si esta opción está seleccionada, introduzca un tiempo incial y un tiempo final; ambos tienen el formato HH:MM."
				},{
					type: "name",
					title: "Manualmente",
					content: "En este modo, la conexión a internet esta controlada manualmente haciendo click en el botón Conectar o Desconectar. Este modo también soporta la función de Max Periodo de Inactividad. Introduzca un tiempo máximo (en minutos) la conexión a Internet puede estar inactiva antes de que se termine  el campo Tiempo Máximo de Inactividad. El valor por defecto es 15 minutos. Si quiere que la conexión a internet permanezca activada todo el tiempo, introducir 0 (cero)."
				},{
					type: "note",
					title: "Nota",
					content: "El modo de conexión Basado en Tiempo no tendrá efecto una vez la página de Periodo de Sistema en Avanzado → Herramientas de Sistema → Ajustes de Tiempo esté configurada."
				}]
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: Cable BigPond"
			},{
				type: "paragraph",
				content: "Seleccione este tipo si su ISP le proporciona conexión de cable BigPond."
			},{
				type: "name",
				title: "Nombre de usuario/Contraseña",
				content: "Introduzca el nombre de usuario y la contraseña proporcionada por su ISP. Estos campos distinguen entre mayúsculas y minúsculas."
			},{
				type: "name",
				title: "Servidor de autenticación",
				content: "Introducir la dirección IP del servidor de autenticación o el nombre del host."
			},{
				type: "name",
				title: "Dominio de autenticación",
				content: "Introducir el sufijo(basado en su localización) del nombre del servidor de dominio. Por ejemplo, nsw.bigpond.net.au para NSW/ACT, vic.bigpond.net.au para VIC/TAS/WA/SA/NT, o qld.bigpond.net.au para QLD."
			},{
				type: "name",
				title: "Tamaño MTU",
				content: "El tamaño por defecto y típico de MTU (Unidad de Transmisión Máxima) para la mayoría de las redes Ethernet es 1500 Bytes. No se recomienda cambiar el tamaño por defecto de MTU a menos que sea requerido por su ISP."
			},{
				type: "name",
				title: "Modo de conexión",
				content: "Seleccione un modo de conexión apropiado que determine como conectarse a internet.",
				children: [{
					type: "name",
					title: "Auto",
					content: "En este modo, la conexión a internet se reconecta automáticamente en cualquier momento  en el que se desconecte."
				},{
					type: "name",
					title: "Bajo demanda",
					content: "En este modo, la conexión a internet estará terminada automáticamente después de un especifico periodo de inactividad(Max Periodo de Inactividad) haya transcurrido. La conexión se re-establece cuando intente acceder a internet otra vez."
				},{
					type: "name",
					title: "Manualmente",
					content: "En este modo, la conexión a internet esta controlada manualmente haciendo click en el botón Conectar o Desconectar. Este modo también soporta la función de Max Periodo de Inactividad. Introduzca un tiempo máximo (en minutos) la conexión a Internet puede estar inactiva antes de que se termine  el campo Tiempo Máximo de Inactividad. El valor por defecto es 15 minutos. Si quiere que la conexión a internet permanezca activada todo el tiempo, introducir 0 (cero)."
				}]
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Seleccione este tipo si se conecta a un servidor VPN L2TP/PPTP y su ISP le proporciona nombre de usuario, contraseña y dirección IP/Nombre de Dominio del servidor."
			},{
				type: "name",
				title: "Nombre de usuario/Contraseña",
				content: "Introduzca el nombre de usuario y la contraseña proporcionada por su ISP. Estos campos distinguen entre mayúsculas y minúsculas."
			},{
				type: "name",
				title: "Dirección IP/DNS Primario/DNS secundario",
				content: "Estos parámetros se asignarán automáticamente por el servidor DHCP de su ISP."
			},{
				type: "name",
				title: "Conexión Secundaria (IP dinámica o IP estática)",
				children: [{
					type: "name",
					title: "IP Dinámica",
					content: "Seleccione si la dirección IP y la máscara de subred son asignados automáticamente por el ISP."
				},{
					type: "name",
					title: "IP Estática",
					content: "Seleccione si la dirección IP, Máscara de subred, Puerta de enlace y las direcciones DNS son proporcionados por el ISP, e introduzca esta información en los campos correspondientes."
				}]
			},{
				type: "name",
				title: "IP del servidor VPN/Nombre de dominio",
				content: "Introduzca la dirección IP o nombre de dominio del servidor VPN proporcionada por su ISP."
			},{
				type: "name",
				title: "Tamaño MTU",
				content: "Por defecto y el tamaño típico de MTU (Unidad de transmisión máxima) para la mayoría de redes Ethernet es 1460 Bytes para L2TP o 1420 Bytes para PPTP. NO es recomendable cambiar el tamaño por defecto del MTU a menos que lo requiera el ISP."
			},{
				type: "name",
				title: "Modo de conexión",
				content: "Seleccione un modo de conexión apropiado que determine como conectarse a internet.",
				children: [{
					type: "name",
					title: "Auto",
					content: "En este modo, la conexión a internet se reconecta automáticamente en cualquier momento  en el que se desconecte."
				},{
					type: "name",
					title: "Bajo demanda",
					content: "En este modo, la conexión a internet estará terminada automáticamente después de un especifico periodo de inactividad(Max Periodo de Inactividad) haya transcurrido. La conexión se re-establece cuando intente acceder a internet otra vez."
				},{
					type: "name",
				title: "Manualmente",
				content: "En este modo, la conexión a internet esta controlada manualmente haciendo click en el botón Conectar o Desconectar. Este modo también soporta la función de Max Periodo de Inactividad. Introduzca un tiempo máximo (en minutos) la conexión a Internet puede estar inactiva antes de que se termine  el campo Tiempo Máximo de Inactividad. El valor por defecto es 15 minutos. Si quiere que la conexión a internet permanezca activada todo el tiempo, introducir 0 (cero)."
				}]
			},{
				type:"paragraph",
				content:"Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "Clonar MAC",
			CONTENT: [{
				type: "name",
				title: "Utilizar la dirección MAC por defecto",
				content: "NO cambie la dirección MAC predeterminada del router, en el caso de que su ISP asocie la dirección IP asignada a la dirección MAC."
			},{
				type: "name",
				title: "Utilizar la actual dirección MAC del ordenador",
				content: "Seleccione copiar la dirección MAC actual del ordenador que está conectado al Router, en caso de que el ISP vincule una dirección IP asignada a la dirección MAC de su ordenador."
			},{
				type: "name",
				title: "Utilizar una dirección MAC diferente",
				content: "Introduzca manualmente una dirección MAC, en caso de que el ISP vincule una dirección IP asignada a una dirección MAC específica."
			},{
				type:"paragraph",
				content:"Haga click en Guardar para guardar todos sus ajustes."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "Dirección MAC",
				content: "Las direcciones físicas únicas asignadas al puerto Ethernet (LAN) del router."
			},{
				type: "name",
				title: "Dirección IP",
				content: "Muestra la dirección IP por defecto del router, que es usado para iniciar sesión en la página de configuración web del router, y puede ser sobreescrito."
			},{
				type: "name",
				title: "Máscara de Subred",
				content: "Seleccione un identificador asignado usado por el puerto LAN para enrutar tráfico interno y externo desde la lista desplegable  o introduzca una nueva máscara de subred en formato decimal con puntos."
			},{
				type: "note",
				title: "Nota",
				content: "Si la nueva dirección LAN IP no está en la misma subred que la anterior, el Pool de direcciones IP en el servidor DHCP se configurará automáticamente; sin embargo, el servidor virtual y el Host DMZ no tendrá efecto hasta que no estén configurados."
			},{
				type:"paragraph",
				content:"Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		IPTV:{
			TITLE: "Configuración",
			CONTENT: [{
					type: "name",
					title: "Proxy IGMP",
					content: "Seleccione la versión de Proxy IGMP (Protocolo de Gestión de Grupo Internet), V2 o V3, acorde con su ISP."
				},{
					type: "name",
					title: "Versión IGMP",
					content: "Seleccione la versión del Proxy IGMP, V2 o V3, según su ISP."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Seleccione para habilitar la característica IPTV."
				},
				{
					type: "name",
					title: "Modo",
					content: "Selecciona el modo apropiado a corde con su ISP.",
					children: [
						{
							type: "name",
							title: "Puente",
							content:"Si su ISP no está en la lista y no hay otro parámetro requerido, puede simplemente seleccionar este modo y configurar las características del puerto LAN del router.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Asigne a su puerto LAN si funciona como el proveedor de Internet o como proveedor de IPTV."
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Seleccione este ajuste si su ISP es de Rusia y los parámetros necesarios están predeterminados, incluidas las funciones ID y Prioridad de VLAN IPTV/IP-Phone/Internet, y puerto LAN (1/2/3/4).",
							children: [{
								type: "name",
								title: "ID VLAN Multicast IPTV/Prioridad",
								content: "Puede habilitar la característica multicast de IPTV como desee y configurar el ID VLAN y prioridad acordado con su ISP."
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Selecione esta opción si su ISP es ExStream de Singapore y los parámetros necesarios están predeterminados, incluyendo Internet/IPTV IDs VLAN y prioridad y las características del puerto LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malaysia-Unif",
							content: "Selecione esta opción si su ISP es Malaysia-Unif y los parámetros necesarios están predeterminados, incluyendo Internet/IPTV IDs VLAN y prioridad y las características del puerto LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malaysia-Maxis",
							content: "Selecione esta opción si su ISP es Malaysia-Maxis y los parámetros necesarios están predeterminados, incluyendo Internet/IPTV IDs VLAN y prioridad y las características del puerto LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Seleccione si su ISP es Portugal-MEO y los parámetros necesarios están predeterminados, incluyendo ID de VLAN y Prioridad y funcionalidad de los puertos LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Seleccione si su ISP es Portugal-Vodafone y los parámetros necesarios están predeterminados, incluyendo IDs de VLAN y prioridad de Internet/Teléfono IP/IPTV. Puede reasignar sus puertos LAN a sus respectivas funciones tal y como necesite (Proveedor de Internet/Proveedor de IPTV/Proveedor de Teléfono IP/Proveedor de Internet-IPTV)."
						},
						{
							type: "name",
							title: "Personalizado",
							content: "Selecione esta opción si su ISP no está en la lista y los parámetros necesarios están predeterminados, incluyendo Internet/IPTV IDs VLAN y prioridad y las características del puerto LAN (1/2/3/4).",
							children: [{
								type: "name",
								title: "Internet/Teléfono-IP/IPTV/Prioridad",
								content: "Configure las ID de las VLAN y las prioridades proporcionadas por su ISP."
							},{
								type: "name",
								title: "802.11Q Tag",
								content: "Seleccione esta opción para taggear los paquetes de Internet con 802.11Q."
							},{
								type: "name",
								title: "ID VLAN Multicast IPTV/Prioridad",
								content: "Puede habilitar la característica multicast de IPTV como desee y configurar el ID VLAN y prioridad acordado con su ISP."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Asigne su puerto LAN a cualquiera de las funciones como proveedor de internet, proveedor de teléfonos IP o como proveedor de IPTV."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Haga click en Guardar para guardar todos sus ajustes."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Configuración",
			CONTENT: [{
				type: "name",
				title: "Servidor DHCP",
				content: "Por defecto, el Servidor DHCP (Protocolo de Configuración de Host Dinámico) está habilitado; asigna dinámicamente parámetros TCP/IP a los dispositivos clientes del Pool de direcciones IP. NO deshabilite el servidor DHCP a menos que haya otro servidor DHCP o quiera manualmente asignar los parámetros TCP/IP a cada dispositivo cliente en su red."
			},{
				type: "name",
				title: "Rango de direcciones IP",
				content: "Introduzca el rango de direcciones IP que se pueden repartir a los clientes."
			},{
				type: "name",
				title: "Tiempo de concesión de direcciones",
				content: "Introduzca el tiempo de duración que una dirección IP puede ser tomada por el cliente entre 1 y 2880 minutos. El valor por defecto es 120 minutos."
			},{
				type: "name",
				title: "Puerta de enlace predeterminada",
				content: "Introduzca la dirección IP LAN. (Opcional)"
			},{
				type: "name",
				title: "DNS Primario/DNS Secundario",
				content: "Introduzca estos parámetros proporcionados por su ISP. (Opcional)"
			},{
				type:"paragraph",
				content:"Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Reserva de direcciones",
			CONTENT: [{
				type: "paragraph",
				content: "Puede reservar manualmente una dirección IP para un cliente que está conectado al Router. Una vez reservado, la dirección IP solo se asignará  al mismo cliente por el Servidor DHCP"
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Muestra la dirección MAC del cliente con dirección IP reservada por DHCP."
			},{
				type: "name",
				title: "Dirección IP reservada",
				content: "Muestra la dirección IP reservada para el cliente."
			},{
				type: "name",
				title: "Descripción",
				content: "Muestra la descripción del dispositivo del cliente."
			},{
				type: "name",
				title: "Estado",
				content: "Muestra el estado actual(activado o desactivado) del dispositivo del cliente."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra las opciones para modificar o borrar el correspondiente cliente."
			},{
				type: "step",
				title: "Para reservar una dirección IP",
				content:[
					"1. Haga click en Añadir.",
					"2. Introduzca la dirección MAC del cliente que desee.",
					"3. Introduzca la dirección IP que quiere reservar para el cliente.",
					"4. Introduzca la descripción para el cliente.",
					"5. Seleccione  Activar.",
					"6. Haga click en aceptar."
				]
			},{
				type: "step",
				title: "Para modificar o borrar un cliente existente",
				content: "En la tabla, haga click en el icono Editar o en el icono Borrar que corresponda al cliente que desee modificar o borrar."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "Lista de clientes DHCP",
			CONTENT: [{
				type: "name",
				title: "Número de clientes",
				content: "Muestra el número del cliente DHCP asociado."
			},{
				type: "name",
				title: "Nombre de cliente",
				content: "Muestra el nombre del cliente DHCP."
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Muestra la dirección MAC."
			},{
				type: "name",
				title: "Dirección IP asignada",
				content: "Muestra la dirección IP  asociada a los clientes por servidor DHCP."
			},{
				type: "name",
				title: "Tiempo de Concesión",
				content: "Muestra el tiempo que queda a la dirección IP que ha sido prestada al cliente."
			},{
				type: "name",
				title: "Actualizar",
				content: "Haga click para actualizar la lista DHCP. de Clientes"
			}]
		},

		DDNS: {
			TITLE: "DNS Dinámico",
			CONTENT: [{
				type: "paragraph",
				content: "El DNS (Sistema de Nombres de Dominio) Dinámico le permite asignar un host fijo y un nombre de dominio a una dirección IP dinámica de Internet. Es útil cuando está utilizando su propia página web, servidor FTP u otro servidor detrás de el router. Para empezar, necesitará darse de alta con un proveedor de servicios de DNS Dinámico como por ejemplo www.dyndns.com. Después, introduzca su información de registro."
			},{
				type: "step",
				title: "Establecer un DNS Dinámico",
				content: [
					"1. Seleccione su proveedor de servicio DDNS.",
					"2. Introduzca el Nombre de Usuario  y Contraseña de su cuenta DDNS.",
					"3. Introduzca el nombre de dominio que haya registrado con el proveedor de servicios de DNS Dinámico.",
					"4. Seleccione el intervalo de tiempo en el cual será enviada la solicitud de actualización de DNS Dinámico.",
					"5. Si su proveedor de servicios es NO-IP, seleccione Vinculación IP WAN para asegurar que el nombre de dominio está vinculado a la IP WAN de este router.",
					"6. Haga click en Acceder y Guardar."
				]
			},{
				type: "note",
				title:"Nota",
				content: "Si quiere utilizar una nueva cuenta de DDNS, por favor cierre sesión primero y después acceda con una nueva cuenta."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "DNS Dinámico",
			CONTENT: [{
				type: "paragraph",
				content: "El DNS (Sistema de Nombres de Dominio) Dinámico le permite asignar un host fijo y un nombre de dominio a una dirección IP dinámica de Internet. Es útil cuando está utilizando su propia página web, servidor FTP u otro servidor detrás de el router. Para empezar, necesitará darse de alta con un proveedor de servicios de DNS Dinámico como por ejemplo www.dyndns.com. Después, introduzca su información de registro."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Lista de Nombres de Dominio",
			CONTENT: [{
				type: "paragraph",
				content: "Esta tabla muestra los nombres de dominio de DNS dinámico que están registrados con su ID de TP-Link."
			},{
				type:"step",
				title: "Registrar un nuevo nombre de dominio",
				content: [
					"1. Haga click en Registrar.",
					"2. Introduzca el nombre de dominio.",
					"3. Haga click en Guardar."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Enrutamiento estático",
			CONTENT: [{
				type: "paragraph",
				content: "El enrutamiento estático se usa para predeterminar una ruta fija para los paquetes de información de red y llegar a una red o host específico."
			},{
				type: "step",
				title: "Establecer una Ruta Estática",
				content: [
					"1. Haga click en Añadir.",
					"2. Red de destino - Introduzca una dirección IP en formato decimal con puntos para asignar la ruta estática a esta entrada.",
					"3. Máscara de subred - Introduzca la máscara de subred en formato decimal con puntos para determinar la porción de red y la porción de host de la dirección IP.",
					"4. Puerta de enlace predeterminada - Introduzca la dirección IP de la puerta de enlace en formato decimal con puntos para conectar con el router de la red o host.",
					"5. Interfaz - Seleccione LAN o WAN para especificar el tipo de la Red de Destino.",
					"6. Descripción - Introduzca una breve descripción para esta entrada.",
					"7. Seleccione Activar.",
					"8. Haga click en Aceptar ."
				]
			},{
				type: "step",
				title: "Para modificar o borrar una entrada existente",
				content: "En la tabla, haga click en el icono Editar o en el icono Borrar que corresponda al cliente que desee modificar o borrar."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Tabla de enrutamiento del sistema",
			CONTENT: [{
				type: "paragraph",
				content: "La Tabla de Enrutamiento del Sistema muestra todas las entradas de rutas que están actualmente en uso."
			},{
				type: "paragraph",
				content: "Haga click en Actualizar para actualizar la tabla de Enrutamiento."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Configuración",
			CONTENT: [{
				type: "name",
				title: "País",
				content: "Seleccione su región del menú desplegable. Si su país o región no se encuentra en la lista, puede que se restrinja el uso del radio inalámbrico en su localización."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Wi-Fi 2.4GHz",
			CONTENT: [{
				type: "name",
				title: "Activar Señal Inalámbrica",
				content: "Seleccione esta casilla para habilitar la frecuencia del radio inalámbrico de 2.4GHz."
			},{
				type: "name",
				title: "Nombre de Red Inalámbrica (SSID)",
				content: "Puede dejar el Nombre de la Red(SSID) por defecto como está, o introducir un nuevo nombre (hasta 32 caracteres). Este campo es sensible a mayúsculas y minúsculas."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Seleccione esta casilla si quiere ocultar el nombre de red de 2.4GHz de la liste de redes Wi-Fi."
			},{
				type: "name",
				title: "Seguridad",
				content: "Seleccione una de las siguientes opciones de seguridad:",
				children: [{
					type: "name",
					title: "Sin seguridad",
					content: "Seleccione esta opción para deshabilitar la seguridad inalámbrica. Es Altamente recomendable que active la seguridad inalámbrica para proteger su red Wi-Fi frente a intentos de acceso no permitidos."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "Seleccione esta opción para habilitar el método de autenticación estándar basado en una clave (PSK) Pre-shared, también llamada frase de contraseña. Si se selecciona, configure lo siguiente.",
					children: [{
						type: "name",
						title: "Versión",
						content: "Seleccione  una versión de seguridad para su red inalámbrica.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Esta opción es compatible con múltiples implementaciones del estándar WPA (Acceso Protegido Wi-Fi), como WPA y WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Esta opción es compatible solo con la encriptación TKIP que proporciona un buen nivel de seguridad."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Esta opción es compatible con la encriptación AES que proporciona un mejor nivel de seguridad que WPA-PSK y es la recomendada."
						}]
					},{
						type: "name",
						title: "Encriptación",
						content: "Seleccione el tipo de encriptación de seguridad: TKIP (Protocolo de Integridad de Contraseña Temporal), AES (Estándar de Encriptación Avanzada) o Automático (para ambos TKIP y AES). NO se recomienda usar la encriptación TKIP si el router opera en modo 802.11n por que TKIP no es soportado por la especificación 802.11n. Si se selecciona TKIP, la función WPS estará deshabilitada."
					},{
						type: "name",
						title: "Contraseña",
						content: "Introduzca una contraseña inalámbrica entre 8 y 63 de caracteres ASCII o entre 8 y 64 para caracteres Hexadecimales en este campo."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Empresarial",
					content: "Seleccione esta opción para habilitar el método de autenticación más avanzada utilizando un RADIUS (Remote Dial de autenticación de usuario de servicios) del servidor. Si se selecciona, la función WPS se desactivará.",
					children: [{
						type: "name",
						title: "Versión",
						content: "Seleccione  una versión de seguridad para su red inalámbrica.",
						children:[{
							type: "name",
							title: "Auto",
							content: "Esta opción es compatible con múltiples implementaciones del estándar WPA (Acceso Protegido Wi-Fi), como WPA y WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Esta opción es compatible solo con la encriptación TKIP que proporciona un buen nivel de seguridad."
						},{
							type: "name",
							title: "WPA2",
							content: "Esta opción es compatible con la encriptación AES que proporciona un mejor nivel de seguridad que WPA-PSK y es la recomendada."
						}]
					},{
						type: "name",
						title: "Encriptación",
						content: "Seleccione el tipo de encriptación de seguridad: TKIP (Protocolo de Integridad de Contraseña Temporal), AES (Estándar de Encriptación Avanzada) o Automático (para ambos TKIP y AES). NO se recomienda usar la encriptación TKIP si el router opera en modo 802.11n por que TKIP no es soportado por la especificación 802.11n. Si se selecciona TKIP, la función WPS estará deshabilitada."
					},{
						type: "name",
						title: "Servidor RADIUS IP",
						content: "Introduzca la dirección IP del servidor RADIUS."
					},{
						type: "name",
						title: "Port RADIUS",
						content: "Introduzca el número de puerto del servidor RADIUS."
					},{
						type: "name",
						title: "Contraseña RADIUS",
						content: "Introduzca la contraseña compartida del servidor RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Seleccione esta opción para habilitar el método de autenticación básica si alguno de sus dispositivos clientes puede acceder a la red wifi usando solo WEP (Privacidad equivalente cableada).",
					children: [{
						type: "name",
						title: "Tipo",
						content: "Seleccione un tipo de autenticación para la red inalámbrica. El valor predeterminado es Auto, que elige automáticamente el sistema abierto o Clave compartida basada en la capacidad y el acceso petición del cliente inalámbrico."
					},{
						type: "name",
						title: "Formato de clave WEP",
						content: "Formato clave WEP. Formato ASCII es una combinación de caracteres alfabéticos y numéricos. El formato hexadecimal es una combinación de la serie (0-9) y letras (AF, af)."
					},{
						type: "name",
						title: "Tipo de clave",
						content: "Seleccione una longitud de clave WEP.",
						children: [{
							type: "name",
							title: "64-bit",
							content: "Permite introducir 10 dígitos hexadecimales (0-9, AF, af) o 5 caracteres ASCII en el campo Valor WEP."
						},{
							type: "name",
							title: "128-bit",
							content: "Permite introducir 26 dígitos hexadecimales (0-9, AF, af) o 13 caracteres ASCII en el campo Valor WEP."
						}]
					},{
						type: "name",
						title: "Valor de la clave",
						content: "Introduzca la contraseña WEP en el campo correspondiente"
					}]
				}]
			},{
				type: "name",
				title: "Modo",
				content: "Seleccione un modo mixto de transmisión."
			},{
				type: "name",
				title: "Ancho del canal",
				content: "Seleccione un ancho de canal (Ancho de Banda) para la red inalámbrica de 2.4GHz."
			},{
				type: "name",
				title: "Canal",
				content: "Seleccione un canal operativo para la red inalámbrica 2.4 GHz. Es recomendable dejar el canal en Auto, si no está teniendo problemas con la conexión inalámbrica."
			},{
				type: "name",
				title: "Fuerza de transmisión",
				content: "Selecciona Alta, Media o Baja para especificar la potencia de transmisión de datos."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Wi-Fi 5GHz",
			CONTENT: [{
				type: "name",
				title: "Activar Señal Inalámbrica",
				content: "Seleccione esta casilla para habilitar la frecuencia del radio inalámbrico de 5GHz."
			},{
				type: "name",
				title: "Nombre de Red Inalámbrica (SSID)",
				content: "Puede dejar el Nombre de la Red(SSID) por defecto como está, o introducir un nuevo nombre (hasta 32 caracteres). Este campo es sensible a mayúsculas y minúsculas."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Seleccione esta casilla si quiere ocultar el nombre de red de 5 GHz de la liste de redes Wi-Fi."
			},{
				type: "name",
				title: "Seguridad",
				content: "Seleccione una de las siguientes opciones de seguridad:",
				children: [{
					type: "name",
					title: "Sin seguridad",
					content: "Seleccione esta opción para deshabilitar la seguridad inalámbrica. Es Altamente recomendable que active la seguridad inalámbrica para proteger su red Wi-Fi frente a intentos de acceso no permitidos."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "Seleccione esta opción para habilitar el método de autenticación estándar basado en una clave (PSK) Pre-shared, también llamada frase de contraseña. Si se selecciona, configure lo siguiente.",
					children: [{
						type: "name",
						title: "Versión",
						content: "Seleccione  una versión de seguridad para su red inalámbrica.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Esta opción es compatible con múltiples implementaciones del estándar WPA (Acceso Protegido Wi-Fi), como WPA y WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Esta opción es compatible solo con la encriptación TKIP que proporciona un buen nivel de seguridad."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Esta opción es compatible con la encriptación AES que proporciona un mejor nivel de seguridad que WPA-PSK y es la recomendada."
						}]
					},{
						type: "name",
						title: "Encriptación",
						content: "Seleccione el tipo de encriptación de seguridad: TKIP (Protocolo de Integridad de Contraseña Temporal), AES (Estándar de Encriptación Avanzada) o Automático (para ambos TKIP y AES). NO se recomienda usar la encriptación TKIP si el router opera en modo 802.11n por que TKIP no es soportado por la especificación 802.11n. Si se selecciona TKIP, la función WPS estará deshabilitada."
					},{
						type: "name",
						title: "Contraseña",
						content: "Introduzca una contraseña inalámbrica entre 8 y 63 de caracteres ASCII o entre 8 y 64 para caracteres Hexadecimales en este campo."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Empresarial",
					content: "Seleccione esta opción para habilitar el método de autenticación más avanzada utilizando un RADIUS (Remote Dial de autenticación de usuario de servicios) del servidor. Si se selecciona, la función WPS se desactivará.",
					children: [{
						type: "name",
						title: "Versión",
						content: "Seleccione  una versión de seguridad para su red inalámbrica.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Esta opción es compatible con múltiples implementaciones del estándar WPA (Acceso Protegido Wi-Fi), como WPA y WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Esta opción es compatible solo con la encriptación TKIP que proporciona un buen nivel de seguridad."
						},{
							type: "name",
							title: "WPA2",
							content: "Esta opción es compatible con la encriptación AES que proporciona un mejor nivel de seguridad que WPA-PSK y es la recomendada."
						}]
					},{
						type: "name",
						title: "Encriptación",
						content: "Seleccione el tipo de encriptación de seguridad: TKIP (Protocolo de Integridad de Contraseña Temporal), AES (Estándar de Encriptación Avanzada) o Automático (para ambos TKIP y AES). NO se recomienda usar la encriptación TKIP si el router opera en modo 802.11n por que TKIP no es soportado por la especificación 802.11n. Si se selecciona TKIP, la función WPS estará deshabilitada."
					},{
						type: "name",
						title: "Servidor RADIUS IP",
						content: "Introduzca la dirección IP del servidor RADIUS."
					},{
						type: "name",
						title: "Port RADIUS",
						content: "Introduzca el número de puerto del servidor RADIUS."
					},{
						type: "name",
						title: "Contraseña RADIUS",
						content: "Introduzca la contraseña compartida del servidor RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Seleccione esta opción para habilitar el método de autenticación básica si alguno de sus dispositivos clientes puede acceder a la red wifi usando solo WEP (Privacidad equivalente cableada).",
					children: [{
						type: "name",
						title: "Tipo",
						content: "Seleccione un tipo de autenticación para la red inalámbrica. El valor predeterminado es Auto, que elige automáticamente el sistema abierto o Clave compartida basada en la capacidad y el acceso petición del cliente inalámbrico."
					},{
						type: "name",
						title: "Formato de clave WEP",
						content: "Formato clave WEP. Formato ASCII es una combinación de caracteres alfabéticos y numéricos. El formato hexadecimal es una combinación de la serie (0-9) y letras (AF, af)."
					},{
						type: "name",
						title: "Tipo de clave",
						content: "Seleccione una longitud de clave WEP.",
						children:[{
							type: "name",
							title: "64-bit",
							content: "Permite introducir 10 dígitos hexadecimales (0-9, AF, af) o 5 caracteres ASCII en el campo Valor WEP."
						},{
							type: "name",
							title: "128-bit",
							content: "Permite introducir 26 dígitos hexadecimales (0-9, AF, af) o 13 caracteres ASCII en el campo Valor WEP."
						}]
					},{
						type: "name",
						title: "Valor de la clave",
						content: "Introduzca la contraseña WEP en el campo correspondiente"
					}]
				}]
			},{
				type: "name",
				title: "Modo",
				content: "Seleccione un modo mixto de transmisión."
			},{
				type: "name",
				title: "Ancho del canal",
				content: "Seleccione un ancho de canal (Ancho de Banda) para la red inalámbrica de 5 GHz."
			},{
				type: "name",
				title: "Canal",
				content: "Seleccione un canal operativo para la red inalámbrica 5 GHz. Es recomendable dejar el canal en Auto, si no está teniendo problemas con la conexión inalámbrica."
			},{
				type: "name",
				title: "Fuerza de transmisión",
				content: "Selecciona Alta, Media o Baja para especificar la potencia de transmisión de datos."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		WPS: {	
			TITLE: "PIN del router",
			CONTENT: [{
				type: "paragraph",
				content: "Otros dispositivos se pueden conectar a este router mediante WPS con el PIN del router."
			},{
				type: "name",
				title: "PIN del router",
				content: "Cambie a Habilitado para permitir a los dispositivos inalámbricos conectarse al Router utilizando el PIN(Número Identificador Personal) del Router."
			},{
				type: "name",
				title: "PIN",
				content: "Muestra el PIN del router. El PIN por defecto puede ser encontrado en la etiqueta del router. Haga click en Generar para generar un nuevo PIN de manera aleatoria o haga click en Por defecto para restaurar el valor por defecto PIN."
			}]
		},

		WPS_WIZARD: {
			TITLE: "Ayuda WPS",
			CONTENT:[{
				type: "name",
				title: "Pulsar botón (Recomendado)",
				content: "Seleccione este método de configuración para habilitar la opción WPS para fácilmente conectar cualquier dispositivo con WPS Habilitado en su red inalámbrica utilizando el botón WPS o virtualmente utilizando el botón Conectar."
			},{
				type: "name",
				title: "PIN",
				content: "Seleccione este método de configuración para añadir un dispositivo manualmente introduciendo el PIN WPS del dispositivo inalámbrico en el campo y haga click en Conectar."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Estaciones inalámbricas en línea",
			CONTENT: [{
				type: "name",
				title: "Número de clientes",
				content: "Muestra el número de clientes inalámbricos asociados."
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Muestra la dirección MAC asociada al cliente inalámbrico."
			},{
				type: "name",
				title: "Tipo de Conexión",
				content: "Muestra la banda de frecuencia inalámbrica (2.4 GHz o 5 GHz) asociada al cliente inalámbrico."
			},{
				type: "name",
				title: "Seguridad",
				content: "Muestra el tipo de seguridad asociado al cliente inalámbrico."
			},{
				type: "name",
				title: "Paquetes recibidos",
				content: "Muestra el número de paquetes recibidos asociados al cliente inalámbrico."
			},{
				type: "name",
				title: "Paquetes enviados",
				content: "Muestra el número de paquetes enviados asociados al cliente inalámbrico."
			},{
				type: "paragraph",
				content: "Haga click en Refrescar para actualizar la información de la página."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Configuración",
			CONTENT: [{
				type: "paragraph",
				content: "La Red de Invitados le permite configurar una red inalámbrica independiente con un nombre distinto  (SSID) y la contraseña que los invitados pueden utilizar para acceder a su red inalámbrica."
			},{
				type: "name",
				title: "Permitir que los clientes se vean entre ellos",
				content: "Seleccione esta casilla para permitir a los dispositivos inalámbricos de la red de invitados ver a los otros."
			},{
				type: "name",
				title: "Permitir que los clientes accedan a mi red local",
				content: "Seleccione esta casilla para permitir que los dispositivos conectados a la red de invitados accedan a los recursos compartidos en red e impresoras locales."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "Wi-Fi 2,4GHz/5GHz",
			CONTENT: [{
				type: "name",
				title: "Activar señal inalámbrica",
				content: "Seleccione esta casilla de verificación para activar la función de red de invitados."
			},{
				type: "name",
				title: "Nombre de Red Inalámbrica (SSID)",
				content: "Utilizar el SSID de Invitado por defecto o crear un nuevo nombre (hasta 32 caracteres)."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Seleccione esta casilla de verificación si desea ocultar el SSID de invitados en la lista de redes Wi-Fi."
			},{
				type: "name",
				title: "Seguridad",
				content: "Cuando seleccione nunca actualizar la contraseña, seleccione una de las siguientes opciones de seguridad:",
				children: [{
					type: "name",
					title: "Sin seguridad",
					content: "Seleccione esta opción para desactivar la seguridad inalámbrica. Es muy recomendable que active la seguridad inalámbrica para proteger su red de invitados del acceso no autorizado."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "Seleccione esta opción para habilitar el método de autenticación estándar basado en una clave (PSK) Pre-shared, también llamada frase de contraseña. Si se selecciona, configure lo siguiente.",
					children: [{
						type: "name",
						title: "Versión",
						content: "Seleccione una versión de seguridad para su red de invitados.",
						children: [{
							type: "name",
							title: "Auto",
							content: "Esta opción es compatible con múltiples implementaciones del estándar WPA (Acceso Protegido Wi-Fi), como WPA y WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Esta opción es compatible solo con la encriptación TKIP que proporciona un buen nivel de seguridad."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Esta opción es compatible con la encriptación AES que proporciona un mejor nivel de seguridad que WPA-PSK y es la recomendada."
						}]
					},{
						type: "name",
						title: "Encriptación",
						content: "Seleccione el tipo de encriptación de seguridad: TKIP (Protocolo de Integridad de Contraseña Temporal), AES (Estándar de Encriptación Avanzada) o Automático (para ambos TKIP y AES). NO se recomienda usar la encriptación TKIP si el router opera en modo 802.11n por que TKIP no es soportado por la especificación 802.11n. Si se selecciona TKIP, la función WPS estará deshabilitada."
					}]
			}]},{
				type: "name",
				title: "Contraseña",
				content: "Use o bien la contraseña generada de manera aleatoria, o cree una contraseña entre 8 y 63 caracteres ASCII o entre 8 y 64 caracteres hexadecimales (0-9,a-f,A-F)."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},

		NAT: {
			TITLE: "Puerta de enlace de la capa de aplicación (ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG permite a las traducciones de direcciones de red customizadas (NAT) conectar filtros transversales en las puertas de enlace para soportar direcciones y traducciones de puertos para determinados protocolos de capa \"control/datos\" de las aplicaciones: FTP, TFTP, H323 etc. Es recomendable habilitar el ALG."
			},{
				type: "name",
				title: "Activar ALG FTP",
				content: "Si está seleccionada, permite a los clientes y servidores FTP (File Transfer Protocol) a transfirir datos vía NAT."
			},{
				type: "name",
				title: "Activar ALG TFTP",
				content: "Si está seleccionada, permite a los clientes y servidores TFTP (Trivial File Transfer Protocol) transferir datos vía NAT."
			},{
				type: "name",
				title: "Activar ALG H323",
				content: "Si está seleccionada, permite a los clientes Microsoft NetMeeting a comunicarse vía NAT."
			},{
				type: "name",
				title: "Activar ALG RTSP",
				content: "Si está seleccionada, permite a los clientes de reproductores de media a comunicarse con servidores de media en streaming via NAT."
			},{
				type: "name",
				title: "Activar Passthrough PPTP",
				content: "Si está seleccionada, permite sesiones Point-to-Point a establecer túneles a través de una red IP y pasar a través del router."
			},{
				type: "name",
				title: "Activar Passthrough L2TP",
				content: "Si está seleccionada, permite sesiones Point-to-Point de capa 2 a establecer túneles a través de redes IP y pasar a través del router."
			},{
				type: "name",
				title: "Activar Passthrough IPSec",
				content: "Si está seleccionada, permite al Internet Protocol security (IPSec) a establecer túneles a través de redes IP y pasar a través del router. IPSec usa servicios de seguridad criptográfica para asegurar las comunicaciones privadas y seguras sobre redes IP."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Servidores Virtuales",
			CONTENT: [{
				type: "paragraph",
				content: "Virtual Server sirven para configurar servicios públicos en su red local. Un virtual server se define como un puerto externo, y todas las peticiones desde internet a este puerto externo serán redirigidas al ordenador designado, que debe de estar configurado con una dirección IP fija reservada."
			},{
				type: "name",
				title: "Tipo de servicio",
				content: "Muestra el nombre de su virtual server."
			},{
				type: "name",
				title: "Puerto externo",
				content: "Muestra el número de puerto o un rango de puertos usados por el virtual server."
			},{
				type: "name",
				title: "IP interna",
				content: "Muestra la dirección IP del ordenador que utiliza la aplicación del servicio."
			},{
				type: "name",
				title: "Puerto interno",
				content: "Muestra el número del puerto del ordenador que utiliza la aplicación del servicio."
			},{
				type: "name",
				title: "Protocolo",
				content: "Muestra el protocolo usado por la aplicación del servicio: TCP, UDP, or ALL (todos los protocolos soportados por el router)."
			},{
				type: "name",
				title: "Estado",
				content: "Muestra el estado actual (habilitado o deshabilitado) de la específica regla de filtrado."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra la opción para modificiar o eliminar la regla correspondiente."
			},{
				type: "step",
				title: "Para configurar una regla de servidor virtual",
				content: [
					"1. Haga click en Añadir.",
					"2. Haga click en View Existing Services para seleccionar un servicio de la lista para rellenar automáticamente el número de puerto en los campos External Port e Internal Port. Si el servicio no se encuentra en la lista, introduzca el número de external port (e.g. 21) o un rango de puertos (e.g. 21-25). Deje el puerto interno en blanco si es el mismo que el puerto externo o introduzca un puerto específico (e.g. 21) si el External Port es un puerto único. Introduzca la dirección IP del ordenador corriendo la aplicación del servicio en el campo con puntos en formato decimal en el campo Internal IP.",
					"3. Seleccione un protocolo de la aplicación del servicio: TCP, UDP, o All desde la lista desplegable del campo Protocol.",
					"4. Seleccione Enable.",
					"5. Haga click en Aceptar."
				]
			},{
				type: "step",
				title: "Para modificar o borrar una regla de Virtual Server",
				content: "En la tabla, haga click en el icono Editar o en el icono Borrar que corresponda a la regla que desee modificar o borrar."
			},{
				type: "step",
				title: "Para borrar múltiples reglas",
				content: "Seleccione todas las reglas que desee borrar, haga click en Delete que se encuentra encima de la tabla."
			},{
				type: "note",
				title: "Nota",
				content: "Si su host local está dando servicio a varios tipos de servicios, entonces necesita crear una regla para cada servicio."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Disparador de Puertos",
			CONTENT: [{
				type: "paragraph",
				content: "El Port Triggering se usa para dirigir el tráfico en un puerto espe."
			},{
				type: "name",
				title: "Aplicación",
				content: "Muestra el nombre de la aplicación."
			},{
				type: "name",
				title: "Disparado de puertos",
				content: "Muestra el tráfico saliente a través del puerto usado para iniciar la regla filtrada en una conexión saliente."
			},{
				type: "name",
				title: "Protocolo de Activación",
				content: "Muestra el protocolo usado para el Triggering Port. TCP, UDP o All (Todos los protocolos soportados por el router)."
			},{
				type: "name",
				title: "Puerto externo",
				content: "Muestra el puerto o rango de puertos usados por el sistema remoto. Una respuesta usando uno de estos puertos será redirigida al PC que inicie esta regla. Puede introducir hasta 5 grupos de puertos (o secciones de puertos). Cada grupo de puertos debe de estar separado por una \",\" (comma), por ejemplo: 2000-2038, 2046, 2050-2051, 2085, 3010-3030,"
			},{
				type: "name",
				title: "Protocolo externo",
				content: "Muestra el protocolo usado por el puerto interno: TCP, UDP o ALL (todos los protocolos soportados por el router)."
			},{
				type: "name",
				title: "Estado",
				content: "Muestra el estado actual (habilitado o deshabilitado) de la específica regla de filtrado."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra la opción para modificiar o eliminar la regla correspondiente."
			},{
				type: "step",
				title: "Para configurar una regla de Port Triggering",
				content: [{
					type: "note",
					title: "Nota",
					content: "Cada regla solamente puede ser usada por un host a la vez."
				},
					"1. Haga click en Añadir.",
					"2. Haga click en View Existing Applications para seleccionar una aplicación desde la lista to rellenar automáticamente los valores por defecto en los campos apropiados. Si quieres añadir una aplicación que no se encuentra en la lista, introduzca manualmente Application, Triggering Port, Triggering Protocol, External Port y el External Protocol.",	
					"3. Seleccione Enable.",
					"4. Haga click en Aceptar."
				]
			},{
				type: "step",
				title: "Para modificar o borrar una regla Port Triggering",
				content: "En la tabla, haga click en el icono Editar o en el icono Borrar que corresponda a la regla que desee modificar o borrar."
			},{
				type: "step",
				title: "Para borrar múltiples reglas de Port Triggering",
				content: "En la tabla, seleccione todas las reglas que desees borrar y después haga click sobre \"Delete\" que se encuentra en la parte superior de la tabla."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "El DMZ (zona demilitarizada), permite a un host local estar expuesto a internet por un servicio de propósito especial, como juegos online o video conferencias. Básicamente, el DMZ permite a un ordenador en su LAN abrir todos sus puertos. Este ordenador necesita ser configurado con una IP estática y tener su funcionalidad DHCP desactivada."
			},{
				type: "step",
				title: "Para asignar un ordenador o servidor a un servidor DMZ",
				content: [
					"1. Haga click en Enable DMZ.",
					"2. En el campo DMZ Host IP Address, introduzca la dirección IP del PC local para configurarlo como host DMZ.",
					"3. Haga click en Guardar."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Por defecto, la funcionalidad del Universar Plug-and-Play (UPnP) permite a los dispositivos, como ordenadores y aplicaciones de internet a descubrir y comunicarse automáticamente entre ellos en la red local."
			},{
				type: "paragraph",
				content: "El listado de servicios UPnP despliega la información de los dispositivos UPnP."
			},{
				type: "name",
				title: "Descripción del servicio",
				content: "Despliega una breve descripción de host locales que inician la petición de UPnP."
			},{
				type: "name",
				title: "Puerto externo",
				content: "Muestra el puerto externo que está abierto por el host local."
			},{
				type: "name",
				title: "Protocolo",
				content: "Muestra el tipo de protocolo de red que es usado por el host local."
			},{
				type: "name",
				title: "Dirección IP interna",
				content: "Muestra la dirección IP del host local."
			},{
				type: "name",
				title: "Puerto interno",
				content: "Muestra el puerto interno que está abierto por el host local."
			},{
				type: "paragraph",
				content: "Haga click en Refresh para actualizar la lista del servidor UPnP."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Configuración de dispositivos",
			CONTENT: [{
				type: "paragraph",
				content: "La pantalla de configuración del dispositivo muestra información relacionada sobre los dispositivos de almacenamiento USB conectados a través del puerto USB."
			},{
				type: "name",
				title: "Escanear",
				content: "Normalmente, el router detecta automáticamente cualquier dispositivo cuando se conecta. Si no es así, pulse el botón escanear cuando introduzca el dispositivo y refresque la pantalla con la información actualizada."
			},{
				type: "name",
				title: "Volumen",
				content: "Muestra el nombre del volumen USB."
			},{
				type: "name",
				title: "Capacidad",
				content: "Muestra la capacidad total de almacenamiento del USB."
			},{
				type: "name",
				title: "Espacio libre",
				content: "Muestra el actual espacio de almacenamiento libre disponible."
			},{
				type: "name",
				title: "Extraer de forma segura",
				content: "Haga clic en este botón para extraer de forma segura el dispositivo de almacenamiento USB antes de desconectarlo físicamente del router."
			},{
				type: "paragraph",
				content: "Por favor, puede comprobar que el botón de extracción segura sólo aparece cuando hay un dispositivo de almacenamiento USB conectado al router, y no debe extraer el dispositivo USB mientras esté ocupado."
			},{
				type: "name",
				title: "Activar",
				content: "Esta casilla sólo aparece cuando hay un dispositivo de almacenamiento USB conectado al router. Seleccione esta casilla para habilitar el intercambio de archivos al dispositivo USB."
			},{
				type: "step",
				title: "Para configurar un servidor de archivos",
				content: [
				"1. Conectar el dispositivo de almacenamiento de USB al puerto USB del router utilizando un cable USB.",
				"2. El nuevo dispositivo USB conectado debe ser detectado por el router automáticamente y mostrada la información dentro de la sección Configuración de dispositivo. Si no aparece, pulse Escanear.",
				"3. Seleccione Activar para habilitar el intercambio de archivos."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Cuenta Compartida",
			CONTENT: [{
				type: "name",
				title: "Cuenta",
				content: "Puede seleccionar Usar la cuenta por defecto para acceder a los archivos y carpetas compartidos o Usar una nueva cuenta y acceder a la siguiente pantalla para crear una nueva cuenta de usuario."
			},{
				type: "name",
				title: "Nombre de usuario/Contraseña",
				content: "Introduzca una clave alfanumérica de hasta15 caracteres de longitud. El nombre de usuario debe comenzar por un letra del alfabeto. Estos campos distinguen mayúsculas de minúsculas."
			},{
				type: "name",
				title: "Confirmar Contraseña",
				content: "vuelva a introducir la contraseña para confirmar que no existe ningún error. Este campo distingue mayúsculas de minúsculas."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Configuración medios compartidos",
			CONTENT: [{
				type: "name",
				title: "Nombre de red/servidor de medios compartidos",
				content: "Muestra el nombre utilizado para acceder al dispositivo de almacenamiento USB conectado."
			},{
				type: "name",
				title: "Activar",
				content: "Seleccione esta opción para habilitar el método de acceso."
			},{
				type: "name",
				title: "Método de acceso",
				content: "Hay tres métodos de acceso para permitir el acceso al dispositivo de almacenamiento USB conectado. Puede elegir uno o más métodos de acceso seleccionando las casillas correspondientes.",
				children: [{
					type: "name",
					title: "Redes vecinas",
					content: "Si está habilitada, los usuarios de su red pueden acceder al dispositivo de almacenamiento USB  usando una dirección IP asignada (ejemplo \\\\192.168.0.1)"
				},{
					type: "name",
					title: "FTP",
					content: "Si está habilitado, el cliente FTP en su red local puede acceder al dispositivo de almacenamiento USB usando la dirección IP asignada, seguido del número de puerto del servidor FTP (ejemplo: ftp://192.168.0.1:21)."
				},{
					type: "name",
					title: "FTP (Vía Internet)",
					content: "Si está habilitado, los usuarios pueden acceder remotamente al dispositivo de almacenamiento USBconducido por el FTP a través de Internet. Esta función admite tanto la carga como la descaga de archivos. Para cambiar el puerto del servidor FTP, introduzca un número de puerto y pulse Guardar para aplicar los cambios."
				}]
			},{
				type: "name",
				title: "Enlace",
				content: "Muestra la dirección utilizada para acceder al dispositivo de almacenamiento USB."
			},{
				type: "name",
				title: "Puerto",
				content: "Muestra el número de puerto del servidor FTP. Utilice el valor predeterminado (21) o un valor entre 1024 y 65535."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Compartición de carpetas",
			CONTENT: [{
				type: "name",
				title: "Compartir todas",
				content: "Actívelo para compartir todos los archivos y carpetas o apáguelo para compartir sólo las carpetas seleccionadas."
			},{
				type: "name",
				title: "Activar Autentificación",
				content: "Es muy recomendable activar la autenticación para que los usuarios deban introducir un nombre y contraseña válidos para acceder a las carpetas compartidas."
			},{
				type: "name",
				title: "Nombre de la carpeta",
				content: "Muestra el nombre de la carpeta compartida."
			},{
				type: "name",
				title: "Ruta de la carpeta",
				content: "Muestra la ruta de la carpeta compartida."
			},{
				type: "name",
				title: "Compartición de medios",
				content: "Indica si cuando está permitido que la carpeta compartida para compartir o no."
			},{
				type: "name",
				title: "Nombre del volumen",
				content: "Muestra el nombre del volumen compartido."
			},{
				type: "name",
				title: "Estado",
				content: "Muestra el estado de los archivos compartidos mediante el indicador de la bombilla."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra las opciones de Modificar o Borrar la correspondiente carpeta compartida."
			},{
				type: "name",
				title: "Examinar",
				content: "Pulse para buscar una carpeta compartida."
			},{
				type: "name",
				title: "Permitir acceso a la red de Invitados",
				content: "Seleccione para permitir que los clientes de la red de invitados accedan a las carpetas compartidas."
			},{
				type: "name",
				title: "Activar Autentificación",
				content: "Seleccione para que los usuarios tengan acceso a las carpetas compartidas con un nombre de usuario y contraseña válidos."
			},{
				type: "name",
				title: "Activar Permiso de Escritura",
				content: "Seleccione para permitir a los usuarios realizar cambios en el contenido de las carpetas."
			},{
				type: "name",
				title: "Activar Compartición de medios",
				content: "Seleccionar para activar el uso compartido de medios."
			},{
				type: "name",
				title:"Actualizar",
				content: "Haga click para actualizar la lista de carpetas compartidas."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Servidor de impresión",
			CONTENT: [{
				type: "name",
				title:"Servidor de impresión",
				content: "Habilite la función de servidor de impresión."
			},{
				type: "name",
				title:"Nombre impresora",
				content: "Muestra el nombre de la impresora conectada al router."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Controles Parentales",
			CONTENT: [{
				type: "paragraph",
				content: "Con el Control Parental, puede bloquear sitios web inapropiados, explícitos y maliciosos; acceso restringido para ciertos periodos de tiempo del día (por ejemplo, facebook o youtube durante el horario de trabajo); y al mismo tiempo proteger cada dispositivo en su red doméstica contra malware y y phishing a través de un punto de control central."
			},{
				type: "name",
				title: "Controles Parentales",
				content: "Habilite la opción de control parental."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Dispositivos bajo control parental",
			CONTENT: [{
				type: "name",
				title: "Nombre del Dispositivo",
				content: "Muestra el nombre de todos los dispositivos clientes conectados que están actualmente bajo el control parental."
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Muestra la dirección MAC de todos los dispositivos clientes que están actualmente bajo el control parental."
			},{
				type: "name",
				title: "Horario de Acceso a Internet",
				content: "Muestra el periodo de restricción horaria. La programación horaria tiene efecto en el horario del sistema del router el cuál puede establecerse en \"Herramientas del Sistema -> Configuración Horaria\"."
			},{
				type: "name",
				title: "Descripción",
				content: "Muestra una breve descripción del dispositivo conectado."
			},{
				type: "name",
				title: "Estado",
				content: "Muestra el estado actual(Activado o Desactivado) del control parental del correspondiente dispositivo."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra opciones para modificar o eliminar el dispositivo correspondiente."
			},{
				type: "step",
				title: "Para restringir un nuevo dispositivo cliente",
				content: [
					"1. Haga click en Añadir.",
					"2. Haga clic en Ver dispositivos existentes y elija el dispositivo conectado actualmente de la lista de dispositivos de acceso; o introduzca el nombre del dispositivo y la dirección MAC de forma manual para agregar un dispositivo que no está conectado.",
					"3. Haga clic en el icono de Horario de acceso a Internet para especificar un período de tiempo durante el cual se aplica la restricción.",
					"4. Introduzca una breve descripción en el campo Descripción. (Opcional)",
					"5. Seleccione  Activar.",
					"6. Haga click en aceptar."
				]
			},{
				type: "paragraph",
				content: "Para modificar o borrar una entrada en el control parental, simplemente haga click en el icono Editar para editar la información o en el icono Borrar para eliminar la entrada correspondiente."
			},{
				type: "paragraph",
				content: "Para eliminar múltiples entradas, seleccione todas las entradas y haga clic en Eliminar encima de la tabla."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Restricciones de contenido",
			CONTENT: [{
				type: "name",
				title: "Lista negra",
				content: "Contiene las palabras clave que serán usadas para bloquear el acceso a todos los sitios web.",
				children: [{
					type: "paragraph",
					content: "Haga click en Añadir una Nueva Palabra Clave para añadir una palabra clave a la lista negra. Para borrar una palabra clave, haga click en el icono (-) de la palabra clave que desee borrar."
				}]
			},{
				type: "name",
				title: "Lista blanca",
				content: "Contiene las direcciones de los sitios web que los dispositivos clientes especificados en el Control Parental tienen permitido el acceso.",
				children: [{
					type: "paragraph",
					content: "Haga click en Añadir un Nuevo Nombre de Dominio para añadir un sitio web a la lista blanca. Para borrar un sitio web, haga click en el icono (-) del sitio web que desea borrar."
				}]
			},{
				type: "paragraph",
				content: "Las palabras clave también puede ser nombres de dominio, por ejemplo  www.mail.google.com or www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "La calidad del servicio (QoS) ayuda a priorizar el tráfico de internet basado en sus necesidades. Puede especificar el nivel de prioridad de un dispositivo o una aplicación en la lista de reglas QoS."
			},{
				type: "name",
				title: "Activar QoS",
				content: "Haga click en esta opción para habilitar la funcionalidad QoS."
			},{
				type: "name",
				title: "Ancho de banda de subida",
				content: "Introduzca el ancho de banda máximo de subida proporcionada por su ISP (proveedor de servicios de internet)."
			},{
				type: "name",
				title: "Ancho de banda de bajada",
				content: "Introduzca el ancho de banda máximo proporcionado por su ISP."
			},{
				type: "name",
				title: "Prioridad alta",
				content: "Especifique un porcentaje para el tráfico de alta prioridad."
			},{
				type: "name",
				title: "Prioridad media",
				content: "Especifique un porcentaje para el tráfico de prioridad media."
			},{
				type: "name",
				title: "Prioridad baja",
				content: "Especifique un porcentaje para el tráfico de baja prioridad."
			},{
				type: "note",
				title: "Nota",
				content: "La cantidad máxima (porcentaje) de todas las prioridades es 1."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		QOS_RULE: {
			TITLE: "Lista de reglas QoS",
			CONTENT: [{
				type: "name",
				title: "Tipo",
				content: "Seleccione un tipo para añadir a la lista de reglas QoS."
			},{
				type: "step",
				title: "Para configurar una regla para prioridad alta/media/baja por dispositivo",
				content: [
					"1. Haga click en Añadir.",
					"2. Seleccione Por dispositivo.",
					"3. Haga click en Ver dispositivos existentes para seleccionar el dispositivo que desee desde la Lista de acceso a dispositivos, o puede introducir el nombre del dispositivo y su dirección MAC manualmente en los campos Nombre del dispositivo y Dirección MAC.",
					"4. Haga click en Aceptar."
				]
			},{
				type: "step",
				title: "Para configurar una regla para prioridad alta/media/baja por aplicación",
				content: [
					"1. Haga click en Añadir.",
					"2. Seleccione Por Aplicación.",
					"3. Seleccione la aplicación deseada de la lista de Aplicaciones, ó puede personalizar una aplicación configurando el nombre, protocolo y puerto de destino (1-65535) en los campos correspondientes, puede introducir un único puerto, múltiples puertos o un rango de puertos, utilice comas para separarlos (por ejemplo: 21,36-105,111).",
					"4. Haga click en Aceptar."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Actualizar versión de la  base de datos",
			CONTENT: [{
				type: "name",
				title: "Nuevo archivo de base de datos",
				content: "Haga click en Explorador para localizar su nuevo archivo de base de datos. Selecciónelo y haga click en Actualizar para actualizar su base de datos a una nueva versión."
			},{
				type: "name",
				title: "Versión de la base de datos",
				content: "Muestra la versión actual de la base de datos."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Cortafuegos",
			CONTENT: [{
				type: "name",
				title: "Firewall SPI",
				content: "El firewall de inspección de paquetes de estado (SPI) previene de ciber ataques y valida el tráfico que está pasando a través del router basado en el protocolo."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "Protección DoS",
			CONTENT: [{
				type: "name",
				title: "Protección DoS",
				content: "La protección de denegación de servicios (DoS) protege su LAN frente a ataques DoS que inundan su red de peticiones del servidor"
			},{
				type: "name",
				title: "Filtrado de ataques ICMP-FLOOD",
				content: "Habilitar para prevenir el ataque de inundación el Protocolo de Control de Mensajes de Internet (ICMP).",
				children: [{
					type: "name",
					title: "Apagado",
					content: "Sin protección."
				},{
					type: "name",
					title: "Baja",
					content: "Nivel bajo de protección y bajo impacto en el rendimiento de su router."
				},{
					type: "name",
					title: "Media",
					content: "Nivel moderado de protección y el impacto semi notable en el rendimiento de su router."
				},{
					type: "name",
					title: "Alta",
					content: "Nivel alto de protección pero impacto notable en el rendimiento de su router."
				}]
			},{
				type: "name",
				title: "Filtrado de ataques UDP-FLOOD",
				content: "Habilitar para prevenir el ataque de inundación de Protocolo de Datagrama de Usuario (UDP)."
			},{
				type: "name",
				title: "Filtrado de ataques TCP-SYN-FLOOD",
				content: "Habilitar para prevenir el ataque de inundación de Sincronización de Protocolo de Transmisión (TCP-SYN)."
			},{
				type: "name",
				title: "Ignorar paquetes Ping desde un puerto WAN",
				content: "Habilitar para ignorar los paquetes de ping del puerto WAN."
			},{
				type: "name",
				title: "Prohibir paquetes Ping desde un puerto LAN",
				content: "Habilitar para prohibir los paquetes de ping del puerto LAN."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Lista de equipos bloqueados DoS",
			CONTENT: [{
				type: "name",
				title: "Lista de equipos bloqueados DoS",
				content: "Lista de direcciones IP y direcciones MAC de alguna fuente de ataque DoS bloqueado."
			},{
				type: "step",
				title: "Para borrar una entrada",
				content: "En la lista de Equipos, seleccione la entrada que desee borrar y haga click en Eliminar en la tabla de arriba."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Control de acceso",
			CONTENT: [{
				type: "paragraph",
				content: "El Control de Acceso se usa para permitir o bloquear ordenadores y otros dispositivos del acceso a su red. Cuando un dispositivo es bloqueado, no es posible comunicarse con otros dispositivos o conectarse a internet."
			},{
				type: "paragraph",
				content: "Para usar el Control de Acceso, habilite esta característica y especifique una lista negra o blanca. Si el Control de Acceso está desactivado (Off), todos los dispositivos, incluyendo los de la lista negra, pueden conectarse."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Modo de acceso",
			CONTENT: [{
				type: "name",
				title: "Lista negra",
				content: "Solo los dispositivos en la lista Negra tendrán denegado el acceso a su red."
			},{
				type: "name",
				title: "Lista blanca",
				content: "Solo los dispositivos en la lista Blanca tendrán garantizado el acceso a su red."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Dispositivos en red",
			CONTENT: [{
				type: "name",
				title: "Nombre del Dispositivo",
				content: "Muestra el nombre del dispositivo conectado."
			},{
				type: "name",
				title: "Dirección IP",
				content: "Muestra la dirección IP del dispositivo conectado."
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Muestra la dirección MAC del dispositivo conectado."
			},{
				type: "name",
				title: "Tipo de Conexión",
				content: "Muestra el tipo de conexión del dispositivo conectado."
			},{
				type: "step",
				title: "Para bloquear un dispositivo",
				content: "En la tabla de Dispositivos conectados, haga clic en el icono Bloquear en la columna Modificar que corresponde al dispositivo que quiere bloquear."
			},{
				type: "step",
				title: "Para bloquear múltiples dispositivos",
				content: "En la tabla de Dispositivos conectados, seleccione todos los dispositivos que quiera bloquear, haga click en Bloquear en la taba de arriba. El dispositivo será automáticamente añadido a los dispositivos de la lista Negra o Blanca."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Dispositivos en la lista negra/lista blanca",
			CONTENT: [{
				type: "step",
				title: "Para añadir un dispositivo a la lista blanca o negra",
				content: [
					"1. Haga click en Añadir.",
					"2. Introduzca el nombre del dispositivo.",
					"3. Introduzca la dirección MAC del dispositivo.",
					"4. Haga click en Aceptar."
				]
			},{
				type: "step",
				title: "Para modificar o borrar un dispositivo en la lista negra/lista blanca",
				content: "En la tabla de lista negra/lista blanca, haga click en el icono Editar o en el icono Borrar que corresponda al dispositivo que desee modificar o borrar."
			},{
				type: "step",
				title: "Para borrar múltiples dispositivos en la lista negra/lista blanca",
				content: "En la tabla de lista Negra/Blanca, seleccione todos los dispositivos que quiere borrar, haga click en Borrar en la lista de arriba."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Configuración",
			CONTENT: [{
				type: "paragraph",
				content: "La vinculación ARP (Protocolo de Resolución de Direcciones)  es muy útil para controlar el acceso a un ordenador específico en una LAN con una vincluación de la dirección IP y de la dirección MAC de un dispositivo juntas. La vinculación ARP  también prevee otros dispositivos que usen una dirección IP específica."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "Lista ARP",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra las direcciones MAC e IP de los dispositivos que actualmente están conectados."
			},{
				type: "name",
				title: "Número de entradas ARP",
				content: "Muestra el número total de dispositivos que están conectados actualmente al Router."
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Muestra la dirección MAC del dispositivo conectado."
			},{
				type: "name",
				title: "Dirección IP",
				content: "Muestra las direcciones IP asociadas al dispositivo conectado."
			},{
				type: "name",
				title: "Límite",
				content: "Indica si las direcciones MAC e IP están reservadas o no."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra las opciones de Reservar o Borrar la correspondiente entrada de la lista."
			},{
				type: "note",
				title: "Nota",
				content: "No puede vincluar la misma dirección IP para más de una dirección MAC."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Lista de vinculación",
			CONTENT: [{
				type: "step",
				title: "Dar de alta un dispositivo con una vinculación ARP",
				content: [
					"1. Haga click en Añadir.",
					"2. Introduzca la dirección MAC del dispositivo.",
					"3. Introduzca la dirección IP que quiere vincular a las direcciones MAC de arriba.",
					"4. Introduzca una Descripción para este dispositivo. (Opcional)",
					"5. Seleccione  Activar.",
					"6. Haga click en aceptar."
				]
			},{
				type: "step",
				title: "Modificar o borrar una entrada",
				content: "En la lista de Vinculación, haga click en el icono Modificar o en el de Borrar que corresponda a la entrada que quiere modificar o borrar."
			},{
				type: "step",
				title: "Borrar múltiples entradas",
				content: "En la lista de Vinculación, seleccione todas las entradas que quiera borrar, haga click en Borrar de la lista de arriba."
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Seleccione para habilitar (On) o desactivar (Off) la función IPv6 del router."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: IP Estática",
			},{
				type: "name",
				title: "IP Estática",
				content: "Seleccione este parámetro si su ISP utiliza la asignación de direcciones IPv6 estática."
			},{
				type: "name",
				title: "Dirección IPv6/Puerta de Enlace Predeterminada/DNS Primario/DNS Secundario",
				content: "Introduzca estos parámetros proporcionada por su proveedor."
			},{
				type: "name",
				title: "Tamaño MTU",
				content: "El tamaño por defecto y típico de MTU (Unidad de Transmisión Máxima) para la mayoría de las redes Ethernet es 1500 Bytes. No se recomienda cambiar el tamaño por defecto de MTU a menos que sea requerido por su ISP."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: IP Dinámica",
			},{
				type: "name",
				title: "IP Dinámica",
				content: "Seleccione este parámetro si su ISP utiliza la asignación dinámica de direcciones IPv6."
			},{
				type: "name",
				title: "Dirección IPv6/ DNS Primario/DNS Secundario",
				content: "Estos parámetros se asignan automáticamente por el servidor DHCPv6 de su ISP."
			},{
				type: "name",
				title: "Renovar",
				content: "Haga clic en este botón para obtener nuevos parámetros IPv6 del servidor DHCPv6 del ISP."
			},{
				type: "name",
				title: "Liberar",
				content: "Haga clic en este botón para liberar todas las direcciones IPv6 asignadas por el servidor DHCPv6 desde el ISP."
			},{
				type: "name",
				title: "Obtener dirección IPv6",
				content: "Seleccione DHCPv6 para obtener una dirección IPv6 no temporal ó SLAAC para obtener una dirección IPv6 generada por el paquete de aviso del router, según le indique su ISP."
			},{
				type: "name",
				title: "Delegación prefijo",
				content: "Sellecione Habilitar para obtener un prefijo de delegación del Servidor DHCPv6 del ISP ó Deshabilitar para quitar manualmente la asignación de un prefijo de dirección. Los clientes en la LAN generarán una dirección IPv6 con este prefijo."
			},{
				type: "name",
				title: "Dirección DNS",
				content: "Seleccione \"Obtener dinámicamente desde ISP\" o \"Usar la siguiente dirección DNS\". Si  selecciona \"Usar la siguiente dirección DNS\" , introduzca manualmente la dirección DNS suministrada por su ISP."
			},{
				type: "name",
				title: "DNS Primario/DNS Secundario",
				content: "Introduzca estos parámetros de forma manual o dinámicamente obteniendolos de su ISP."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Seleccione este tipo si su ISP utiliza PPPoEv6, y le proporciona un nombre de usuario y contraseña."
			},{
				type: "name",
				title: "Nombre de usuario/Contraseña",
				content: "Introduzca estos parámetros según lo dispuesto por el ISP."
			},{
				type: "name",
				title: "Dirección IPv6",
				content: "Se asignará automáticamente por el servidor DHCPv6 desde el ISP, después de introducir el nombre de usuario y contraseña y hacer clic en Conectar."
			},{
				type: "name",
				title: "Dirección DNS",
				content: "Seleccione \"Obtener dinámicamente desde ISP\" o \"Usar la siguiente dirección DNS\". Si  selecciona \"Usar la siguiente dirección DNS\" , introduzca manualmente la dirección DNS suministrada por su ISP."
			},{
				type: "name",
				title: "Obtener dirección IPv6",
				content: "Seleccione DHCPv6 para obtener una dirección IPv6 no temporal ó SLAAC para obtener una dirección IPv6 generada por el paquete de aviso del router ó especificado por el ISP manualmente introduciendo la dirección IPv6, según le indique su ISP."
			},{
				type: "name",
				title: "Delegación prefijo",
				content: "Sellecione Habilitar para obtener un prefijo de delegación del Servidor DHCPv6 del ISP ó Deshabilitar para quitar manualmente la asignación de un prefijo de dirección. Los clientes en la LAN generarán una dirección IPv6 con este prefijo."
			},{
				type: "name",
				title: "Conectar",
				content: "Haga clic en este botón para acceder a Internet."
			},{
				type: "name",
				title: "Desconectar",
				content: "Haga clic en este botón para desconectarse de Internet."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: Túnel 6to4"
			},{
				type: "name",
				title: "Túnel v6 a v4",
				content: "Seleccione este tipo si su ISP utiliza despliegue 6to4 para la asignación de direcciones."
			},{
				type: "name",
				title: "Dirección IPv4/Máscara de Subred IPv4/Puerta de Enlace Predeterminada IPv4/Dirección de Túnel",
				content: "Estos parámetros se generarán de forma dinámica por la información IPv4 de puerto WAN después de hacer clic en Conectar."
			},{
				type: "name",
				title: "Utilizar el siguiente servidor DNS",
				content: "Seleccione la casilla de verificación para introducir manualmente el DNS primario y/ó el DNS secundario proporcionado por su ISP."
			},{
				type: "name",
				title: "Conectar",
				content: "Haga clic en este botón para acceder a Internet."
			},{
				type: "name",
				title: "Desconectar",
				content: "Haga clic en este botón para desconectarse de Internet."
			},{
				type: "title",
				title: "Tipo de conexión a internet: Pass-Through (Bridge)"
			},{
				type: "paragraph",
				content: "Seleccione esta configuración si su ISP utiliza Pass Through (Bridge) en su red. Para este tipo, no se proporcionan parámetros y no se necesitan configuraciones."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Excepto para Pass-Through (Bridge), los otros 6 tipos de conexiones a internet requieren de configuración con IPv6."
			},{
				type: "name",
				title: "DHCP",
				content: "Seleccione el apropiado de acuerdo a su ISP.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Para asignar automáticamente direcciones IP a los clientes de la LAN.",
					children: [{
						type: "name",
						title: "Prefijo de la dirección",
						content: "Introduzca el prefijo de la dirección que le proporciona su ISP."
					},{
						type: "name",
						title: "Tiempo de liberación",
						content: "Hace referencia alperiodo en el que la dirección IP asignada sigue siendo válida. Mantenga los predeterminados 86.400 segundos o cambielo si lo requiere su ISP."
					},{
						type: "name",
						title: "Dirección",
						content: "Es la dirección IP asignada automáticamente por el servidor DHCPv6 de el ISP."
					}]
				},{
					type: "name",
					title: "SLAAC+Stateless DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefijo de la dirección",
						content: "Introduzca el prefijo de la dirección que le proporciona su ISP."
					},{
						type: "name",
						title: "Dirección",
						content: "Es la dirección IP asignada automáticamente por el ISP."
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefijo de la dirección",
						content: "Introduzca el prefijo de la dirección que le proporciona su ISP."
					},{
						type: "name",
						title: "Dirección",
						content: "Es la dirección IP asignada automáticamente por el ISP."
					}]
				}]
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "Clonar MAC",
			CONTENT: [{
				type: "name",
				title: "Utilizar la dirección MAC por defecto",
				content: "NO cambie la dirección MAC predeterminada del router, en el caso de que su ISP asocie la dirección IP asignada a la dirección MAC."
			},{
				type: "name",
				title: "Utilizar la actual dirección MAC del ordenador",
				content: "Seleccione copiar la dirección MAC actual del ordenador que está conectado al Router, en caso de que el ISP vincule una dirección IP asignada a la dirección MAC de su ordenador."
			},{
				type: "name",
				title: "Utilizar una dirección MAC diferente",
				content: "Introduzca manualmente una dirección MAC, en caso de que el ISP vincule una dirección IP asignada a una dirección MAC específica."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Configurarciones de la hora",
			CONTENT: [{
				type: "step",
				title: "Para sincronizar automáticamente el tiempo",
				content: [
					"1. En el campo Configurar la hora, seleccione Obtener automáticamente desde internet.",
					"2. Seleccione su Zona horaria local desde el menú desplegable.",
					"3. En el campo Servidor NTP, introduzca la dirección IP o el nombre del dominio de su servidor NTP deseado.",
					"4. En el campo Servidor NTP II, introduzca la dirección IP o el nombre del dominio del segundo servidor NTP. (Opcional)",
					"5. Haga click en  Obtener.",
					"6. Haga click en Guardar."
				]
			},{
				type: "step",
				title: "Para configurar manualmente la fecha y la hora",
				content: [
					"1. En el campo Establecer Hora, seleccione Manualmente.",
					"2. Introduzca la Fecha actual.",
					"3. Enter Introduzca la Hora actual (En el formato de reloj 24 horas, por ejemplo 16:00 es 04:00PM).",
					"4. Haga click en Guardar."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Ahorro con luz diurna",
			CONTENT: [{
				type: "step",
				title: "Para configurar el ahorro con luz diurna",
				content: [
					"1. Seleccione Habilitar ahorro con luz diurna.",
					"2. Seleccione la fecha de Inicio y hora cuando hay luz solar en su zona local.",
					"3. Seleccione la fecha de Fin de esta franja horaria cuando empieza a anochecer en su zona local.",
					"4. Haga click en Guardar."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Diagnósticos",
			CONTENT: [{
				type: "paragraph",
				content: "El router proporciona herramientas de ping y de rutas de trazado para ayudarle con los problemas de conectividad de la red. La herramienta de Ping envía paquetes a las direcciones IP o a los nombres de los dominios concretos y guarda los datos en el archivo de registro, como el número de paquetes enviados/recibidos, y el tiempo de respuesta. La herramienta de rutas de trazado envía paquetes a las direcciones IP o nombres del dominio destinatarios y muestra el número de saltos y el tiempo que tarda en llegar al destino."
			},{
				type: "paragraph",
				content: "Puedes realizar un ping o calcular la ruta de trazado de dispositivos locales mediante la dirección IP o el nombre del dominio, como google.com, yahoo.com, etc…"
			},{
				type: "step",
				title: "Para diagnosticar usando Ping",
				content: [
					"1. Introduzca la dirección IP o el Nombre del dominio.",
					"2. Haga click en el Icono de flecha para abrir el menú avanzado y especificar la Cantidad de Ping, y el Tamaño del paquete del ping (Opcional).",
					"3. Haga click en Empezar."
				]
			},{
				type: "step",
				title: "Para diagnosticar usando las rutas de trazado",
				content: [
					"1. Introduzca la dirección IP o el Nombre del dominio.",
					"2. Haga click en el Icono de flecha para abrir el menú avanzado y especificar el número de saltos (en alcanzar el objetivo) en el campo Tiempo de vida máximo de la ruta de trazado. El valor por defecto es 20 (Opcional).",
					"3. Haga click en Empezar."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Actualización de firmware",
			CONTENT: [{
				type: "paragraph",
				content: "Antes de actualizar la versión de firmware del router, necesitará descargar la última versión disponible en la página de Soporte <a class=\"link\" href=\"http://www.tp-link.com/es/Support/\" target=\"_blank\">TP-Link Soporte</a> en su ordenador."
			},{
				type: "step",
				title: "IMPORTANTE: Para prevenir un fallo de actualización, por favor verifique lo siguiente:",
				content: [
					"Asegúrese que el último archivo de firmware es el adecuado para la versión de hardware de su dispositivo (se muestra en la página de Actualización del Firmware).",
					"Asegúrese de que tiene una conexión estable entre el router y su ordenador. NO se recomienda la actualización de manera inalámbrica.",
					"Asegúrese de que no desconecte ningún dispositivo USB conectado al router antes de la actualización de firmware para prevenir pérdida de datos.",
					"Realice un backup de la configuración de su router",
					"No apagues el router durante la actualización del firmware"
				]
			},{
				type: "step",
				title: "Para actualizar el firmware del router",
				content: [
					"1. Haga click en Examinar.",
					"2. Localice y seleccione el archivo con el último firmware.",
					"3. Haga click en Actualizar."
				]
			},{
				type: "paragraph",
				content: "El proceso de actualización necesita unos minutos para completarse. Por favor, NO desconecte el router mientras el proceso de actualización está ejecutándose"
			}]
		},
		
		BACKUP: {	
			TITLE: "Copia de seguridad",
			CONTENT: [{
				type: "paragraph",
				content: "Es muy recomendable realizar una copia de seguridad de su configuración actual, en el caso de que necesite una recuperación es necesario restaurar el sistema a un estado previo o a una configuración de fábrica."
			},{
				type: "paragraph",
				content: "Pulse Copia de Seguridad para guardar la configuración actual de su ordenador. Asegúrese de guardar la copia de seguridad en un lugar seguro para que pueda acceder y restaurar el sistema si fuese necesario."
			}]
		},
		
		RESTORE: {
			TITLE: "Restaurar",
			CONTENT: [{
				type: "step",
				title: "Para restaurar una copia de seguridad",
				content: [
					"1. Haga click en Examinar.",
					"2. Localice y seleccione la copia de seguridad.",
					"3. Pulse Restaurar."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Restaurar configuración prederteminada de fábrica",
			CONTENT: [{
				type: "paragraph",
				content: "Pulse Restauración de fábrica para resetear su router a la configuración predeterminada de fábrica."
			},{
				type: "note",
				title: "Nota",
				content: [
					"1. Restaurar a valores de fábrica borrará todos los ajustes que han sido configurados en el router. Para volver a acceder a la página de gestión del router, utilice por defecto admin para nombre de usuario y contraseña.",
					"2. Por favor NO apague el router durante la copia de seguridad o el proceso de restauración."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Administración de cuentas",
			CONTENT: [{
				type: "paragraph",
				content: "Esta página le permite cambiar su nombre de usuario y/o contraseña, y configurar una dirección de correo electrónico para la recuperación de la contraseña."
			},{
				type: "name",
				title: "Usuario antiguo",
				content: "Escriba su nombre de usuario actual."
			},{
				type: "name",
				title: "Contraseña antigua",
				content: "Escriba su contraseña actual."
			},{
				type: "name",
				title: "Nuevo nombre de usuario",
				content: "Escriba su nuevo nombre de usuario."
			},{
				type: "name",
				title: "Nueva Contraseña",
				content: "Escriba su nueva contraseña."
			},{
				type: "name",
				title: "Confirmar nueva contraseña",
				content: "Escriba su nueva contraseña de nuevo."
			},{
				type: "note",
				title: "Nota",
				content: "Si usted decide cambiar el nombre de usuario y contraseña actuales para acceder al router, asegúrese de escribir y guardar la nueva información de acceso en un lugar seguro."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Recuperación de contraseña",
			CONTENT: [{
				type: "name",
				title: "Habilitar recuperación de contraseña",
				content: "Se recomienda que habilite el parámetro de Recuparación de Contraseña, el cuál ayudará a resetear su nombre de usuario y contraseña vía email."
			},{
				type: "name",
				title: "Desde",
				content: "Introudzca una dirección de correo electrónico válida para el envío de correos."
			},{
				type: "name",
				title: "Para",
				content: "Introduzca una dirección de coreeo electrónico para la recepción de correos."
			},{
				type: "name",
				title: "Servidor SMTP",
				content: "Introduzca la dirección del servidor SMTP que el router utiliza para enviar el código de verificación vía email."
			},{
				type: "name",
				title: "Activar Autentificación",
				content: "Seleccione Habilitar Autenticación si el servidor de salida de correo electrónico requiere autenticación para enviar correos, y rellene el Nombre de usuario y Contraseña en los campos correspondientes. Este campo distingue mayúsculas de minúsculas."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Administración Local",
			CONTENT: [{
				type: "paragraph",
				content: "Esta sección le permite limitar el número de dispositivos clientes en su LAN que acceden al router utilizando autenticación basada en la dirección MAC."
			},{
				type: "name",
				title: "Acceso para todos los dispositivos conectados en LAN",
				content: "Cambie a Encendido para habilitar la administración local de los dispositivos conectados en LAN o Apagado para  habilitar la administración de un dispositivo específico."
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Muestra la dirección MAC del dispositivo de acceso limitado."
			},{
				type: "name",
				title: "Descripción",
				content: "Muestra la descripción de los dispositivos de acceso limitado."
			},{
				type: "name",
				title: "Estado",
				content: "Muestra el estado actual de los dispositivos de acceso limitado (Habilitado o deshabilitado)."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra las opciones de Modificar y Borrar los correspondientes dispositivos de la lista."
			},{
				type: "step",
				title: "Para añadir un dispositivo cliente a la lista",
				content: [
					"1. Haga click en Añadir.",
					"2. Pulse Ver dispositivos existentes para elegirun dispositivo existente o introduzca la dirección MAC del dispositivo en el campo Dirección MAC.",
					"3. Introduzca una Descripción del dispositivo.",
					"4. Seleccione Enable.",
					"5. Haga click en Aceptar."
				]
			},{
				type: "step",
				title: "Para modificar o borrar un dispositivo en la lista",
				content: "En la tabla, haga click en el icono Editar o en el icono Borrar que corresponda al cliente que desee modificar o borrar."
			},{
				type: "step",
				title: "Para borrar múltiples dispositivos",
				content: "Seleccione todos los dispositivos que desee borrar, pulse Borrar."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Control Remoto",
			CONTENT: [{
				type: "paragraph",
				content: "La opción de Gestión Remota le permite acceder y configurare su Router remotamente desde Internet."
			},{
				type: "name",
				title: "Desactivar el control remoto",
				content: "Seleccione esta opción para desactivar la gestión remota."
			},{
				type: "name",
				title: "Activar el control remoto para todos los dispositivos",
				content: "Seleccione esta opción para activar la gestión remota para todas las direcciones IP. Si esta seleccionada, introduzca El Puerto de Gestión Web."
			},{
				type: "name",
				title: "Activar el control remoto para los dispositivos especificados",
				content: "Seleccione esta opción para habilitar la gestión remota para una dirección IP específica. Si está seleccionada, introduzca El Puerto de Gestión Web y la Dirección IP de Gestión Remota."
			},{
				type: "name",
				title: "Puerto de control Web",
				content: "Introduzca el número de puerto, entre 1024 y 65535, el cual se utilizará para acceder al interfaz de gestión web del Router con mayor seguridad. Normalmente, el navegador web utiliza el puerto 80 de servicio HTTP estándar.El puerto de servicio por defecto es el 8080, el cual es una alternativa al puerto de servicio de HTTP."
			},{
				type: "name",
				title: "Dirección IP de control remoto",
				content: "Introduzca una dirección IP válida o un rango de direcciones IP para permitir el acceso al Router. Si es 255.255.255.255, todo el mundo podrá acceder."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Registro de Sistema",
			CONTENT: [{
				type: "paragraph",
				content: "La página del archivo de registro muestra una lista de las actividades(eventos) más recientes del router. Puede definir qué tipo de registros y/o el nivel de registro que desee ver. Esta página también tiene la característica de enviar los archivos de registros a través de correos electrónicos, o exportar directamente el archivo de registros a un ordenador."
			},{
				type: "name",
				title: "Tipo",
				content: "Seleccione el tipo de registro a mostrar."
			},{
				type: "name",
				title: "Nivel",
				content: "Seleccione el nivel del sistema de registro a mostrar."
			},{
				type: "name",
				title: "Actualizar",
				content: "Haga click en este icono para actualizar el archivo de registro."
			},{
				type: "name",
				title: "Borrar todo",
				content: "Haga click en este icono para borrar todo el sistema de registro."
			},{
				type: "name",
				title: "Guardar registros",
				content: "Haga click en este botón para descargar todos los registros en un archivo en su ordenador."
			},{
				type: "name",
				title: "Configuración de correo",
				content: "Haga click en este botón para configurar su cuenta de correo para el archivo de registros."
			},{
				type: "step",
				title: "Para configurar el email para su sistema de registros",
				content: [
					"1. Click en Configuración de correo.",
					"2. Desde - Introduzca un correo válido para usar como correo saliente.",
					"3. A - Introduzca un correo válido para usar como correo entrante.",
					"4. Servidor SMTP - Introduzca la dirección del servidor de SMTP que el router usa para enviar el archivo de registro mediante correo.",
					{
						content: "5. Habilitar autenticación - Selección esta opción si el servidor SMTP requiere de autenticación para enviar correo.",
						children: [{
							type: "name",
							title: "Nombre de Usuario",
							content: "Introduzca el nombre de usuario del servidor SMTP. Este campo es sensible a mayúsculas y minúsculas."
						},{
							type: "name",
							title: "Contraseña",
							content: "Introduzca la contraseña del servidor SMTP. Este campo es sensible a mayúsculas y minúsculas."
						}]
					},{
						content: "6. Habilitar correo automático - Seleccione esta opción para especificar a que hora del día quiere que se envíe de manera automática el archivo de registro.",
						children: [{
							type: "paragraph",
							content: "Para enviar el archivo de registro cada día en una hora en concreto, introduzca las Horas (HH) y Minutos (MM) en un formato de 24 horas, por ejemplo las 16:00 son las 4PM."
						},{
							type: "paragraph",
							content: "Para enviar el archivo de registro en una hora en concreto, introduzca el número de las horas."
						}]
					},
					"7. Click en Guardar."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Estadísticas del tráfico",
			CONTENT: [{
				type: "paragraph",
				content: "La página de Estadísticas de Tráfico muestra el tráfico de red de la LAN, WAN y WLAN y los paquetes enviados y recibidos."
			},{
				type: "name",
				title: "Estadísticas del tráfico",
				content: "Actívelo para mostrar la información de las estadísticas."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Lista de las estadísticas del tráfico",
			CONTENT: [{
				type: "name",
				title: "Dirección IP/Dirección MAC",
				content: "Muestra las direcciones IP y direcciones MAC de los dispositivos clientes asociados."
			},{
				type: "name",
				title: "Paquetes totales",
				content: "Muestra el número total de paquetes transmitidos y recibidos por el dispositivo cliente desde el comienzo de la sesión o el último reinicio del contador."
			},{
				type: "name",
				title: "Bytes totales",
				content: "Muestra el número total de bytes transmitidos y recibidos por el dispositivo cliente desde el inicio de la sesión o el último reinicio del contador."
			},{
				type: "name",
				title: "Paquetes actuales",
				content: "Muestra el número actual de paquetes transmitidos y recibidos en un intervalo específico de tiempo."
			},{
				type: "name",
				title: "Bytes actuales",
				content: "Muestra el número actual de bytes transmitidos y recibidos en un intervalo específico de tiempo."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra las opciones de Resetear (a cero) y Borrar la correspondientes estadísticas de la lista."
			},{
				type: "name",
				title: "Actualizar",
				content: "Pulse para actualizar la información de estadísticas en la página."
			},{
				type: "name",
				title: "Resetear todo",
				content: "Pulse para resetear todos los valores de las estadísticas de la lista."
			},{
				type: "name",
				title: "Borrar todo",
				content: "Pulse para borrar toda la información de estadísticas de la lista."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "Wi-Fi 2,4GHz/5GHz",
			CONTENT: [{
				type: "name",
				title: "Intervalo Beacon",
				content: "Introduzca un valor entre 40 y 1000 en milisegundos para determinar la duración entre los paquetes beacon que son transmitidos por el Router para sincronizar la red inalámbrica. El valor por defecto es 100 milisegundos."
			},{
				type: "name",
				title: "Umbral RTS",
				content: "Introduzca un valor entre 1 y 2346 para determinar el tamaño de paquete de transmisión de datos a través del Router. Por defecto, el tamaño del umbral RTS(Solicitudes a Enviar) es 2346. Si el tamaño del paquete es mayor que el del umbral pre establecido, el Router envía tramas de Solicitudes de Envío a una estación receptora particular y negocia el envío de la estructura de datos o de lo contrario el paquete se enviará inmediatamente."
			},{
				type: "name",
				title: "Intervalo DTIM",
				content: "Este valor determina el intervalo de Indicación del Tráfico de Mensajes (DTIM). Introduzca un valor entre 1 y 15 en milisegundos. El valor por defecto es 1, indica que el intervalo DTIM es el mismo que el Intervalo Beacon."
			},{
				type: "name",
				title: "Período de actualización de la clave de grupo",
				content: "Introduzca el número de segundos (mínimo 30) para controlar el intervalo de tiempo para el cifrado de la renovación automática de claves. El valor por defecto es 0, indicando que no hay renovación de claves."
			},{
				type: "name",
				title: "Características WMM",
				content: "La función WMM garantiza los paquetes con mensajes de alta prioridad que se transmiten preferentemente. Está activada de forma predeterminada y altamente recomendable."
			},{
				type: "name",
				title: "Característica Intervalo de Guardia",
				content: "Esta función está activada de forma predeterminada y recomendada para aumentar la capacidad de datos mediante la reducción del intervalo de guarda (GI) tiempo."
			},{
				type: "name",
				title: "Característica Aislamiento de AP",
				content: "Si desea continuar y restringir todos los dispositivos inalámbricos conectados a su red de interactuar entre ellas, pero que aún así puedan acceder a internet, seleccione la opción Habilitar aislamiento AP"
			},{
				type: "name",
				title: "TX Beamforming",
				content: "La TX mediante Beamforming es una técnica de procesado de señal utilizada en arrays de sensores para transmisión de señal direccional. Si está habilitado, se utilizará en el final de la transmisión para reforzar la señal Wi-Fi y extender la cobertura Wi-Fi."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "Habilitar puente WDS",
				content: "Habilitar el función Puente WDS (Sistema de Distribución Inalámbrico) permite al Router hacer un puente a otro punto de acceso (AP) en una red local inalámbrica (WLAN). Si esta opción está habilitada, configure el dispositivo de la siguiente forma:",
				children: [{
					type: "name",
					title: "SSID (para ser puenteada)",
					content: "Introduzca la SSID del WAP (Punto de acceso inalámbrico) al que se conectará el router como cliente o use la función de búsqueda para encontrar redes disponibles."
				},{
					type: "name",
					title: "Inspección",
					content: "Haga click en este botón para escanear y ver el SSID, BSSID, intensidad de señal, canal e información de seguridad de todas las redes inalámbricas disponibles dentro del rango. Una vez seleccione la red, el SSID, dirección MAC y la Seguridad se establecerá automáticamente."
				},{
					type: "name",
					title: "Dirección MAC (a ser puenteada)",
					content: "Introduzca la dirección MAC (BSSID) en 12 caracteres en formato hexadecimal (0-9, a-f, A-F) separado por guiones del punto de acceso inalámbrico al que el Router se conectará como cliente. Si elije el AP en la función de Escaneo, el campo de la dirección MAC se establecerá automáticamente."
				},{
					type: "name",
					title: "Seguridad",
					content: "Seleccione el tipo de seguridad correcta de las seleccionadas en el punto de acceso, No, WPA-PSK/WPA2-PSK o WEP. Si elije el AP en la función de Escaneo, el campo de la dirección MAC se establecerá automáticamente.",
					children: [{
						type: "name",
						title: "Contraseña",
						content: "Esta opción esta disponible cuando el tipo de seguridad es WPA-PSK/WPA2-PSK o WEP. Introduzca la contraseña de segurida el punto de acceso seleccionado."
					},{
						type: "name",
						title: "Tipo de autenticación",
						content: "Esta opción esla única disponible cuando el tipo de seguridad es WEP (Privacidad Equivalente a Cableado). Seleccione el tipo de autenticación apropiada (Auto, Sistema Abierto o Clave Compartida) usada en el seleccionado punto de acceso."
					},{
						type: "name",
						title: "Formato de clave WEP",
						content: "Esta opción es la única disponible cuando el tipo de seguridad es WEP. Seleccione el formato de clave (ASCII o Hexadecimal) usado en el AP seleccionado."
					}]
				}]
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Seleccione la casilla Habilitar WPS  y haga click en Guardar para habilitar la función WPS (Configuración de Protección de Wi-Fi)  que le permite fácilmente configurar y conectar dispositivos que tengan habilitado el WPS pulsando un botón."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Seleccione  la casilla Habilitar NAT y haga click en Guardar para habilitar la función NAT (Traducción de Direcciones de Red)."
			},{
				type: "note",
				title: "Nota",
				content: "Cuando el NAT esté deshabilitado, las configuraciones en el NAT Forwarding no tendrán efecto."
			},{
				type: "name",
				title: "NAT Boost",
				content: "Seleccione la casilla Habilitar NAT Boost y haga click en Guardar para asegurarse que su router tiene el mejor rendimiento."
			},{
				type: "note",
				title: "Nota",
				content: "Cuando el NAT Boost está activado, las estadísticas de QoS y Tráfico se desactivarán automáticamente."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "Configuración del nivel de protección DoS",
			CONTENT: [{
				type: "paragraph",
				content: "El nivel de protección DoS protege el router de ataques tipo ICMP-FLOOD, UDP-FLOOD, y TCP-FLOOD."
			},{
				type: "name",
				title: "Nivel de paquetes ICMP-FLOOD",
				content: "Introduzca un valor para los paquetes ICMP entre 5 y 7200 para lanzar la protección ICMP-FLOOD inmediatamente cuando el número de paquetes exceda el umbral del valor prefijado."
			},{
				type: "name",
				title: "Nivel de paquetes UDP-FLOOD",
				content: "Introduzca un valor para los paquetes ICMP entre 5 y 7200 para lanzar la protección UDP-FLOOD inmediatamente cuando el número de paquetes exceda el umbral del valor prefijado."
			},{
				type: "name",
				title: "Nivel de paquetes TCP-FLOOD",
				content: "Introduzca un valor para los paquetes ICMP entre 5 y 7200 para lanzar la protección TCP-FLOOD inmediatamente cuando el número de paquetes exceda el umbral del valor prefijado."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Duplex",
			CONTENT: [{
				type: "name",
				title: "Duplex",
				content: "Seleccione el tipo duplex de la lista del desplegable."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Activar",
				content: "Seleccione esta casilla de verificación para apagar los LED durante el periodo Modo nocturno sin afectar al rendimiento del router."
			},{
				type: "name",
				title: "Período de modo noche",
				content: "Especifique el periodo de tiempo en que se aplicará el modo nocturno."
			},{
				type: "paragraph",
				content: "Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "Con OpenVPN, puede utilizar Internet para acceder de manera segura a su red cuando está fuera de casa. Para utilizar el Servicio VPN, necesitará configurar el Servicio de DNS Dinámico (recomendado) o asignar una dirección IP estática al puerto WAN del router. Su Horario del Sistema deberá estar sincronizado con Internet."
			},{
				type: "name",
				title: "Habilitar servidor VPN",
				content: "Seleccione esta casilla de verificación para habilitar el servidor OpenVPN."
			},{
				type: "name",
				title: "Tipo de servicio",
				content: "Seleccione el protocolo de comunicación para el servidor OpenVPN: UDP o TCP."
			},{
				type: "name",
				title: "Puerto de servicio",
				content: "Introduzca un puerto de comunicación entre el 1024 y el 65535. Por defecto el puerto común de servicio es el 1194."
			},{
				type: "name",
				title: "Subred/Máscara de red VPN",
				content: "Introduzca el intervalo de direcciones IP que el servidor OpenVPN puede conceder a los clientes."
			},{
				type: "name",
				title: "Acceso de cliente",
				content: "Seleccione el tipo de acceso para su cliente OpenVPN.",
				children: [{
					type: "name",
					title: "Solo red doméstica",
					content: "Los clientes solo pueden acceder al router y a la LAN. No se modificará la ruta predetermina del cliente."
				},{
					type: "name",
					title: "Internet y red doméstica",
					content: "Los clientes pueden acceder a la red doméstica y a los sitios o servicios de Internet con una limitación geográfica cuando está fuera de su país. La ruta del cliente por defecto se alterará."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Certificado",
			CONTENT: [{
				type: "paragraph",
				content: "Utilice el certificado para la información e identidad de la conexión VPN del ordenador remoto."
			},{
				type: "name",
				title: "Generar",
				content: "Haga clic para generar un nuevo certificado."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Archivo de configuración",
			CONTENT: [{
				type: "paragraph",
				content: "Los clientes remotos utilizarán el archivo de configuración para acceder a su router."
			},{
				type: "name",
				title: "Exportar",
				content: "Haga clic en este botón para guardar el archivo de configuración OpenVPN que se utilizará para agregar una nueva conexión VPN."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "Guía de instalación del cliente VPN",
			CONTENT: [{
				type: "step",
				title: "Para habilitar y conectar sus dispositivos cliente al servidor OpenVPN:",
				content:[{
					type: "paragraph",
					content: "Antes de configurar el servidor OpenVPN, por favor configure el Servicio de DNS Dinámico (recomendado) o asigne una dirección IP estática al puerto WAN. Asegúrese que el puerto externo de los ajustes NAT no es el puerto de servicio y que su Horario del Sistema está sincronizado con Internet."
				},
					"1. Seleccione Habilitar Servidor VPN.",
					"2. Configure los parámetros del servidor OpenVPN (Tipo de Servicio, Puerto de Servicio, Acceso de Cliente y Subred/Máscara de Red VPN) y haga click en Guardar.",
					"3. Haga click en Exportar para guardar el archivo de configuración.",
					"4. En sus dispositivos clientes, descargue e instale la utilidad cliente OpenVPN de <a class=\"link\"href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Las plataformas oficiales compatibles  incluyen Windows, Mac OSX y Linux.",
					"5. Inicie la utilidad cliente OpenVPN y añada una nueva conexión VPN utilizando el archivo de configuración guardado para conectar sus dispositivos clientes al servidor VPN."
				]},{
					type: "note",
					title: "Nota",
					content: "Para obtener más información sobre los clientes OpenVPN, visite <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Con VPN PPTP, puede utilizar Internet para acceder a su red de manera fácil y rápida cuando está fuera de casa. Esta funcionalidad puede estar deshabilitada en algunos ISP. Para utilizar el Servicio VPN, necesitará configurar el Servicio de DNS Dinámico (recomendado) o asignar una dirección IP estática para el puerto WAN del router. Su Horario del Sistema deberá estar sincronizado con Internet."
			},{
				type: "name",
				title: "Habilitar servidor VPN",
				content: "Seleccione esta casilla de verificación para habilitar el servidor PPTP VPN."
			},{
				type: "name",
				title: "Dirección IP de cliente",
				content: "Introduzca el intervalo de direcciones IP (hasta 10 clientes) que el servidor PPTP VPN puede conceder a los clientes."
			},{
				type: "name",
				title: "Permitir acceso Samba (Ubicación de Red)",
				content: "Seleccione para permitir a su cliente VPN acceder a su servidor local Samba."
			},{
				type: "name",
				title: "Permitir pasthrough NetBIOS",
				content: "Seleccione para permitir a su cliente VPN acceder a su servidor Samba utilizando NetBIOS."
			},{
				type: "name",
				title: "Permitir conexiones sin encriptar",
				content: "Seleccione para permitir conexiones no encriptadas a su servidor VPN."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Lista de Cuentas",
			CONTENT: [{
				type: "paragraph",
				content: "Esta tabla muestra las cuentas que pueden ser utilizadas para conectarse al servidor VPN PPTP mediante clientes remotos."
			},{
				type: "step",
				title: "Añadir una cuenta VPN PPTP.",
				content: [
					"1. Haga click en Añadir.",
					"2. Introduzca el nombre de usuario y contraseña para la autenticación de clientes del servidor PPTP VPN.",
					"3. Haga click en aceptar."
				]
			},{
				type: "step",
				title: "Modificar o borrar una cuenta existente",
				content: "En la tabla, haga click en el icono Editar o en el icono Basura que correspondiente a la cuenta que desee modificar o borrar."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "Guía de instalación del cliente VPN",
			CONTENT: [{
				type: "step",
				title: "Para habilitar y conectar sus dispositivos cliente al servidor PPTP VPN:",
				content:[{
					type: "paragraph",
					content: "Antes de configurar el servidor VPN PPTP, por favor configure el Servicio de DNS Dinámico (recomendado) o asigne una dirección IP estática para el puerto WAN. Por favor asegúrese que su puerto externo de ajustes NAT no es 1723 y su Horario del Sistema está sincronizado con Internet."
				},
					"1. Seleccione Habilitar Servidor VPN.",
					"2. Configure los parámetros del servidor VPN PPTP y haga click en Guardar.",
					"3. En sus dispositivos clientes, cree una conexión VPN PPTP. La plataforma oficial compatible incluye Windows, Mac OSX, Linux, iOS y Android.",
					"4. Inicie el programa VPN PPTP, añada una nueva conexión e introduzca el nombre de dominio del servicio DDNS registrado o la dirección IP estática asignada al puerto WAN, para conectar su dispositivo cliente al servidor VPN PPTP."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "Conexiones VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Esta página muestra los clientes que actualmente están conectados a los servidores OpenVPN y PPTP VPN alojados en el router."
			},{
				type: "paragraph",
				content: "Haga clic en el icono del signo menos para desconectar al cliente correspondiente."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Internet Estado",
				content: "Muestra el estado actual de la conexión a Internet del router."
			},{
				type: "name",
				title: "Tipo de Conexión",
				content: "Muestra el tipo de conexión a Internet."
			},{
				type: "name",
				title: "Dirección IP",
				content: "Muestra la dirección IP actual de Internet asignada al router."
			},{
				type: "name",
				title: "Conexión Secundaria/Dirección IP",
				content: "Muestra el tipo de conexión secundaria y la dirección IP."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Router ",
			CONTENT: [{
				type: "title",
				title: "Wi-Fi 2,4GHz/5GHz"
			},{
				type: "name",
				title: "SSID",
				content: "Muestra el nombre de la red inalámbrica actual en la banda de frecuencia de 2.4GHz/5GHz."
			},{
				type: "name",
				title: "Canal",
				content: "Muestra el canal de las transmisiones de red inalámbricas de 2.4GHz/5GHz."
			},{
				type: "name",
				title: "MAC",
				content: "Muestra la dirección MAC actual de la red inalámbrica de 2.4GHz/5GHz."
			},{
				type: "title",
				title: "Red de invitado 2,4GHz/5GHz"
			},{
				type: "name",
				title: "Estado",
				content: "Muestra si la red inalámbrica Invitado 2.4GHz/5GHz está activado (habilitado) o desactivado (desactivado)."
			},{
				type: "name",
				title: "SSID",
				content: "Muestra el nombre de la red inalámbrica de la red de invitados."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Clientes cableados/Inalámbricos",
			CONTENT: [{
				type: "name",
				title: "Nombre",
				content: "Muestra el nombre del cliente conectado al router."
			},{
				type: "name",
				title: "Dirección IP",
				content: "Muestra la dirección IP asignada del cliente."
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Muestra la dirección MAC del cliente."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Impresora",
			CONTENT: [{
				type: "name",
				title: "Nombre",
				content: "Muestra el nombre de la impresora conectada al router a través del puerto USB."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "Disco USB",
			CONTENT: [{
				type: "name",
				title: "Disco USB",
				content: "Muestra la marca del disco USB conectado al router."
			},{
				type: "name",
				title: "Totales",
				content: "Muestra el volumen total del disco USB."
			},{
				type: "name",
				title: "Disponible",
				content: "Muestra el espacio disponible del disco USB."
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Auto Detectar",
				content: "Pulse este botón para que el router detecte automáticamente el tipo de conexión actual a Internet."
			},{
				type: "note",
				title: "Nota",
				content: "Si no está seguro de qué tipo de conexión a Internet tiene, utilice la función de detección automática o póngase en contacto con su ISP para obtener ayuda."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: IP Estática",
			},{
				type: "name",
				title: "Dirección IP/máscara de subred/Puerta de enlace predeterminada/DNS primario/DNS secundario",
				content: "Introduzca la información proporcionada por su ISP."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: IP Dinámica",
			},{
				type: "name",
				title: "NO clonar la dirección MAC/Clonar la dirección MAC actual del ordenador",
				content: "Seleccione si desea clonar su dirección MAC o no, de acuerdo con su ISP."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: PPPoE",
			},{
				type: "name",
				title: "Nombre de usuario/Contraseña",
				content: "Introduzca el nombre de usuario y la contraseña proporcionada por su ISP. Estos campos distinguen entre mayúsculas y minúsculas."
			},{
				type: "title",
				title: "Tipo de Conexión a Internet: L2TP/PPTP",
			},{
				type: "name",
				title: "Nombre de usuario/Contraseña",
				content: "Introduzca el nombre de usuario y la contraseña proporcionada por su ISP. Estos campos distinguen entre mayúsculas y minúsculas."
			},{
				type: "name",
				title: "Conexión Secundaria (IP dinámica o IP estática)",
				children: [{
					type: "name",
					title: "IP Dinámica",
					content: "Seleccione si la dirección IP y la máscara de subred son asignados automáticamente por el ISP."
				},{
					type: "name",
					title: "IP Estática",
					content: "Seleccione si su dirección IP y la máscara de subred son proporcionados por su ISP, e introduzca esta información en los campos correspondientes"
				}]
			},{
				type: "name",
				title: "IP del servidor VPN/Nombre de dominio",
				content: "Introduzca la dirección IP o nombre de dominio del servidor VPN proporcionada por su ISP."
			},{
				type:"paragraph",
				content:"Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Configuraciones de Red Inalámbrica",
			CONTENT: [{
				type: "name",
				title: "Activar Señal Inalámbrica",
				content: "Seleccione esta casilla para habilitar la frecuencia de 2.4GHz/5GHz de red inalámbrica."
			},{
				type: "name",
				title: "Nombre de Red Inalámbrica (SSID)",
				content: "Puede dejar el nombre de red inalámbrica (SSID) predeterminado o introducir un nuevo nombre (hasta 32 caracteres). Este campo distingue entre mayúsculas y minúsculas."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Seleccione esta casilla de verificación si desea ocultar el nombre de la red 2.4GHz/5GHz (SSID) de la lista de redes Wi-Fi."
			},{
				type: "name",
				title: "Contraseña",
				content: "Introduzca una contraseña inalámbrica de entre 8 y 63 caracteres ASCII ó entre 8 y 64 caracteres Hexadecimales. Este campo distingue entre mayúsculas y minúsculas."
			},{
				type:"paragraph",
				content:"Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Configuración de dispositivos",
			CONTENT: [{
				type: "paragraph",
				content: "La pantalla de configuración del dispositivo muestra información relacionada sobre los dispositivos de almacenamiento USB conectados a través del puerto USB."
			},{
				type: "name",
				title: "Escanear",
				content: "Normalmente, el router detecta automáticamente cualquier dispositivo cuando se conecta. Si no es así, pulse el botón escanear cuando introduzca el dispositivo y refresque la pantalla con la información actualizada."
			},{
				type: "name",
				title: "Volumen",
				content: "Muestra el nombre del volumen USB."
			},{
				type: "name",
				title: "Capacidad",
				content: "Muestra la capacidad total de almacenamiento del USB."
			},{
				type: "name",
				title: "Espacio libre",
				content: "Muestra el actual espacio de almacenamiento libre disponible."
			},{
				type: "name",
				title: "Extraer de forma segura",
				content: "Haga clic en este botón para extraer de forma segura el dispositivo de almacenamiento USB antes de desconectarlo físicamente del router.",
				children: [{
					type: "paragraph",
					content: "Por favor, puede comprobar que el botón de extracción segura sólo aparece cuando hay un dispositivo de almacenamiento USB conectado al router, y no debe extraer el dispositivo USB mientras esté ocupado."
				}]
			},{
				type: "name",
				title: "Estado",
				content: "Esta casilla sólo aparece cuando hay un dispositivo de almacenamiento USB conectado al router. Seleccione esta casilla para habilitar el intercambio de archivos al dispositivo USB."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Configuración medios compartidos",
			CONTENT: [{
				type: "name",
				title: "Nombre de red/servidor de medios compartidos",
				content: "Muestra el nombre utilizado para acceder al dispositivo de almacenamiento USB conectado."
			},{
				type:"paragraph",
				content:"Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Compartición de carpetas",
			CONTENT: [{
				type: "name",
				title: "Compartir todas",
				content: "Actívelo para compartir todos los archivos y carpetas o apáguelo para compartir sólo las carpetas seleccionadas."
			},{
				type: "name",
				title: "Activar Autentificación",
				content: "Se recomienda habilitar la autenticación de los usuarios que deben introducir un nombre de usuario y contraseña válidos para acceder a las carpetas de uso compartido."
			},{
				type: "name",
				title: "Nombre de la carpeta",
				content: "Muestra el nombre de la carpeta compartida."
			},{
				type: "name",
				title: "Ruta de la carpeta",
				content: "Muestra la ruta de la carpeta compartida."
			},{
				type: "name",
				title: "Compartición de medios",
				content: "Indica si cuando está permitido que la carpeta compartida para compartir o no."
			},{
				type: "name",
				title: "Nombre del volumen",
				content: "Muestra el nombre del volumen compartido."
			},{
				type: "name",
				title: "Estado",
				content: "Muestra el estado de los archivos compartidos mediante el indicador de la bombilla."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra opciones para modificar y borrar la carpeta compartida correspondiente."
			},{
				type: "name",
				title: "Añadir",
				content: "Haga clic en este botón para crear una nueva entrada."
			},{
				type: "name",
				title: "Eliminar",
				content: "Haga clic en este botón para eliminar la entrada seleccionada de la tabla."
			},{
				type: "name",
				title: "Examinar",
				content: "Haga clic aquí para buscar una carpeta compartida."
			},{
				type: "name",
				title: "Permitir acceso a la red de Invitados",
				content: "Seleccione para permitir que los clientes de la red de invitados accedan a las carpetas compartidas."
			},{
				type: "name",
				title: "Activar Autentificación",
				content: "Seleccione para que los usuarios tengan acceso a las carpetas compartidas con un nombre de usuario y contraseña válidos."
			},{
				type: "name",
				title: "Activar Permiso de Escritura",
				content: "Seleccione para permitir a los usuarios realizar cambios en el contenido de las carpetas."
			},{
				type: "name",
				title: "Activar Compartición de medios",
				content: "Seleccionar para activar el uso compartido de medios."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Servidor de impresión",
			CONTENT: [{
				type: "name",
				title: "Servidor de impresión",
				content: "Habilite la función de servidor de impresión."
			},{
				type: "name",
				title: "Nombre impresora",
				content: "Muestra el nombre de la impresora conectada al router."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Controles Parentales",
			CONTENT: [{
				type: "name",
				title: "Controles Parentales",
				content: "Cambiar a Encendido para activar la función de control parental. De forma predeterminada, esta función está desactivada."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Dispositivos bajo control parental",
			CONTENT: [{
				type: "paragraph",
				content: "Muestra la lista de dispositivos bajo Control Parental."
			},{
				type: "name",
				title: "Nombre del Dispositivo",
				content: "Muestra el nombre de todos los dispositivos clientes conectados que están actualmente bajo el control parental."
			},{
				type: "name",
				title: "Dirección MAC",
				content: "Muestra la dirección MAC de todos los dispositivos clientes que están actualmente bajo el control parental."
			},{
				type: "name",
				title: "Horario de Acceso a Internet",
				content: "Muestra el periodo de restricción horaria. La programación horaria tiene efecto en el horario del sistema del router el cuál puede establecerse en \"Herramientas del Sistema -> Configuración Horaria\"."
			},{
				type: "name",
				title: "Descripción",
				content: "Muestra una breve descripción del dispositivo conectado. Es una configuración opcional."
			},{
				type: "name",
				title: "Estado",
				content: "Muestra el estado actual(Activado o Desactivado) del control parental del correspondiente dispositivo."
			},{
				type: "name",
				title: "Modificar",
				content: "Muestra opciones para modificar o eliminar el dispositivo correspondiente."
			},{
				type: "step",
				title: "Para restringir un nuevo dispositivo cliente",
				content:[
					"1. Haga click en Añadir.",
					"2. Haga clic en Ver dispositivos existentes y elija el dispositivo conectado actualmente de la lista de dispositivos de acceso; o introduzca el nombre del dispositivo y la dirección MAC de forma manual para agregar un dispositivo que no está conectado.",
					"3. Haga clic en el icono de Horario de acceso a Internet para especificar un período de tiempo durante el cual se aplica la restricción.",
					"4. Introduzca una breve descripción en el campo Descripción. (Opcional)",
					"5. Seleccione  Activar.",
					"6. Haga click en aceptar."
				]
			},{
				type: "paragraph",
				content: "Para modificar o borrar una entrada en el control parental, simplemente haga click en el icono Editar para editar la información o en el icono Borrar para eliminar la entrada correspondiente."
			},{
				type: "paragraph",
				content: "Para eliminar múltiples entradas, seleccione todas las entradas y haga clic en Eliminar encima de la tabla."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Red de invitados",
			CONTENT: [{
				type: "paragraph",
				content: "La Red de Invitados le permite configurar una red inalámbrica independiente con un nombre distinto  (SSID) y la contraseña que los invitados pueden utilizar para acceder a su red inalámbrica."
			},{
				type: "name",
				title: "Permitir que los clientes se vean entre ellos",
				content: "Seleccione esta casilla para permitir a los dispositivos inalámbricos de la red de invitados ver a los otros."
			},{
				type: "name",
				title: "Permitir que los clientes accedan a mi red local",
				content: "Seleccione esta casilla para permitir que los dispositivos conectados a la red de invitados accedan a los recursos compartidos en red e impresoras locales."
			},{
				type: "name",
				title: "Activar señal inalámbrica",
				content: "Seleccione esta casilla de verificación para activar la función de red de invitados."
			},{
				type: "name",
				title: "Nombre de Red Inalámbrica (SSID)",
				content: "Utilizar el SSID de Invitado por defecto o crear un nuevo nombre (hasta 32 caracteres)."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Seleccione esta casilla de verificación si desea ocultar el SSID de invitados en la lista de redes Wi-Fi."
			},{
				type: "name",
				title: "Contraseña",
				content: "Use o bien la contraseña generada de manera aleatoria, o cree una contraseña entre 8 y 63 caracteres ASCII o entre 8 y 64 caracteres hexadecimales (0-9,a-f,A-F)."
			},{
				type:"paragraph",
				content:"Haga click en Guardar para guardar todos sus ajustes."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"El servicio TP-Link Cloud le permite monitorizar remotamente su red en directo, acceder y gestionar sus dispositivos TP-Link desde Internet en cualquier momento y en cualquier lugar."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Información de Cuenta",
			CONTENT:[{
				type:"paragraph",
				content:"Muestra su información de ID de TP-Link. Puede editar la información de su cuenta pulsando en el icono de Editar."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Información del Dispositivo",
			CONTENT:[{
				type:"paragraph",
				content:"Muestra la información de su dispositivo, incluyendo la cuenta cloud que está gestionando el dispositivo."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Cuentas Vinculadas",
			CONTENT:[{
				type:"paragraph",
				content:"Esta tabla muestra todas las cuentas cloud que están actualmente vinculadas a este dispositivo."
			},{
				type:"step",
				title:"Vincular una cuenta de usuario",
				content:["1. Haga click en Vincular.",
				"2. Introduzca el email registrado que quiera vincular.",
				"3. Haga click en Guardar."]
			}]

		}

	};
})(jQuery);

