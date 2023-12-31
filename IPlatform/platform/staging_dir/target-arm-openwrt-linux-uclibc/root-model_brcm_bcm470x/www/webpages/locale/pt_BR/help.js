(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra informações relevantes sobre a conexão de WAN (Internet)"
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "Endereço MAC",
				content: "O único endereço físico atribuído à porta (WAN) do roteador."
			},{
				type: "name",
				title: "Endereço IP",
				content: "O endereço IPv4 atribuído à porta (WAN) do roteador. Caso o endereço IP é mostrado como 0.0.0.0, significa que não há acesso à Internet"
			},{
				type: "name",
				title: "Máscara de Sub-rede",
				content: "Este parâmetro determina a porção de rede e a porção de host de um endereço IP."
			},{
				type: "name",
				title: "Gateway Padrão",
				content: "O endereço IP utilizado para conectar o roteador à rede."
			},{
				type: "name",
				title: "DNS Primário/DNS Secundário",
				content: "O Nome de Sistema de Domínio (DNS) traduz nomes de hosts e domínio de internet para endereços IP. A informação desses servidores DNS são atribuídas pelo Provedor de Serviço de Internet (ISP)."
			},{
				type: "name",
				title: "Tipo de Conexão",
				content: "O tipo de conexão atual da da porta (WAN)."
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "Endereço MAC",
				content: "O único endereço físico atribuído à porta (WAN) do roteador."
			},{
				type: "name",
				title: "Endereço IP",
				content: "O endereço IPv6 atribuído a porta WAN do roteador."
			},{
				type: "name",
				title: "Gateway Padrão",
				content: "O endereço IP utilizado para conectar o roteador à rede."
			},{
				type: "name",
				title: "DNS Primário/DNS Secundário",
				content: "O Nome de Sistema de Domínio (DNS) traduz nomes de hosts e domínio de internet para endereços IP. A informação desses servidores DNS são atribuídas pelo Provedor de Serviço de Internet (ISP)."
			},{
				type: "name",
				title: "Tipo de Conexão",
				content: "O tipo de conexão atual da da porta (WAN)."
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Wireless",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra informações relevantes sobre a Rede Wireless."
			},{
				type: "name",
				title: "Nome de Rede (SSID)",
				content: "O nome de rede wireless, também conhecido como SSID (Service Set Identifier)."
			},{
				type: "name",
				title: "Rádio Wireless",
				content: "O status atual (Ligado ou Desligado) da rede wireless."
			},{
				type: "name",
				title: "Modo",
				content: "O modo wireless atual."
			},{
				type: "name",
				title: "Largura do Canal",
				content: "A largura de banda da rede wireless."
			},{
				type: "name",
				title: "Canal",
				content: "O canal wireless atual"
			},{
				type: "name",
				title: "Endereço MAC",
				content: "O endereço MAC do rádio da rede wireless no roteador."
			},{
				type: "name",
				id: "status_wds",
				title: "Endereço MAC",
				content: "O Status atual (habilitada ou desabilitada) do modo WDS."
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra informações sobre as portas Ethernet (LAN)."
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "Endereço MAC",
				content: "O único endereço físico atribuído à porta Ethernet (LAN) do roteador."
			},{
				type: "name",
				title: "Endereço IP",
				content: "O endereço IPv4 atribuído à porta Ethernet (LAN) do roteador."
			},{
				type: "name",
				title: "Máscara de Sub-rede",
				content: "Este parâmetro determina a porção de rede e a porção de host de um endereço IP."
			},{
				type: "name",
				title: "DHCP",
				content: "Mostra se o servidor DHCP do roteador está ativo para dispositivos nas portas LAN ou não."
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "Endereço MAC",
				content: "O único endereço físico atribuído à porta Ethernet (LAN) do roteador."
			},{
				type: "name",
				title: "Endereço IP",
				content: "O endereço IPv6 atribuído à porta Ethernet (WAN) do roteador."
			},{
				type: "name",
				title: "Endereço de Link-local",
				content: "O endereço de link IPv6 para a interface LAN."
			},{
				type: "name",
				title: "Tipo Atribuído",
				content: "O tipo de endereço IPv6 atribuído para a interface LAN."
			}]
		},
		STATUS_GUEST: {
			TITLE: "Rede para Convidados",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra informações sobre a rede wireless para convidados."
			},{
				type: "name",
				title: "Nome de Rede (SSID)",
				content: "O nome de rede wireless (SSID) da sua Rede para Convidados."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Mostra se o nome da rede wireless (SSID) da Rede para Convidados está ocultado ou não."
			},{
				type: "name",
				title: "Rádio Wireless",
				content: "O status atual (Ligado ou Desligado) da Rede para Convidados."
			},{
				type: "name",
				title: "Permitir convidados ver uns aos outros",
				content: "Mostra se todos dispositivos da Rede para Convidados são permitidos a se comunicarem ou não."
			}]
		},
		STATUS_USB: {
			TITLE: "Dispositivos USB",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra informações de dispositivos de armazenamento USB atuais e/ou impressoras conectadas ao roteador via portas USB."
			},{
				type: "name",
				title: "Impressora",
				content: "O nome da impressora conectada."
			},{
				type: "name",
				title: "Disco USB",
				content: "O nome do disco USB conectado ao roteador."
			},{
				type: "name",
				title: "Total",
				content: "A capacidade de armazenamento total do dispositivo USB conectado."
			},{
				type: "name",
				title: "Disponível",
				content: "A capacidade de armazenamento disponível do dispostivo USB"
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Desempenho",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra o desempenho do roteador atual."
			},{
				type: "name",
				title: "Carga da CPU",
				content: "O uso atual de CPU."
			},{
				type: "name",
				title: "Uso da Memória",
				content: "O uso atual da memória."
			}]
		},
		STATUS_WIRED: {
			TITLE: "Clientes Cabeados",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra informações de todos os dispositivos cabeados que estão atualmente conectados à rede."
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Clientes Wireless",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra informações de todos os dispositivos cabeados que estão atualmente conectados à rede."
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Tipo de Conexão de Internet: IP Estático"
			},{
				type: "paragraph",
				content: "Selecione este tipo caso seja fornecido com endereço IP fixo específico, máscara de sub-rede, gateway e parâmetros DNS pelo provedor."
			},{
				type: "name",
				title: "Endereço IP/Máscara de Sub-rede/Gateway Padrão/DNS Primário/DNS Secundário",
				content: "Insira a informação fornecida pelo seu provedor. "
			},{
				type: "name",
				title: "Tamanho MTU",
				content: "O tamanho MTU típico e padrão (Unidade de Transmissão Máxima) é de 1500 Bytes. Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
			},{
				type: "title",
				title: "Internet Connection Type: IP Dinâmico"
			},{
				type: "paragraph",
				content: "Selecione este tipo caso seja fornecido com servidor DHCP pelo seu provedor."
			},{
				type: "name",
				title: "Endereço IP/Máscara de Sub-rede/Gateway Padrão/DNS Primário/DNS Secundário",
				content: "Estes parâmetros são automaticamente atribuídos pelo servidor DHCP do seu provedor."
			},{
				type: "name",
				title: "Renovar",
				content: "Clique neste botão para obter novos parâmetros de servidor DHCP."
			},{
				type: "name",
				title: "Liberar",
				content: "Clique neste botão para liberar todos os endereços atribuídos pelo servidor DHCP."
			},{
				type: "name",
				title: "Utilizar o seguinte Endereço DNS",
				content: "Caso o provedor forneça um ou mais endereços, marque esta caixa e insira o endereço DNS primário e secundário nos campos de entrada correspondentes. Caso contrário, os endereços DNS serão atribuídos pelo provedor dinamicamente."
			},{
				type: "name",
				title: "Tamanho MTU",
				content: "O tamanho MTU típico e padrão (Unidade de Transmissão Máxima) é de 1500 Bytes. Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
			},{
				type: "name",
				title: "Nome Host",
				content: "Insira um valor neste campo para especificar o nome do host do roteador."
			},{
				type: "name",
				title: "Obter IP utilizando DHCP Unicast",
				content: "Marque esta caixa caso o servidor DHCP do provedor não suporte aplicações broadcast e você não pode obter endereço IP dinamicamente."
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: PPPoE"
			},{
				type: "paragraph",
				content: "Selecione este tipo caso utilize o serviço DSL (Linha de Assinante Digital) e lhe é fornecido um nome de usuário e senha pelo provedor."
			},{
				type: "name",
				title: "Nome de Usuário/Senha",
				content: "Insira o nome de usuário e a senha fornecidos pelo seu provedor. Estes campos são suscetíveis a letras maíuscula se minúsculas."
			},{
				type: "name",
				title: "Endereço IP/DNS Primário/DNS Secundário",
				content: "Estes parâmetros são automaticamente atribuídos pelo servidor DHCP do seu provedor."
			},{
				type: "name",
				title: "Conexão Secundária (Nenhum, IP Dinâmico, IP EStático)",
				children: [{
					type: "name",
					title: "Nenhum",
					content: "Selecione caso nenhuma conexão secundária é fornecida."
				},{
					type: "name",
					title: "IP Dinâmico",
					content: "Selecione caso o endereço IP e máscara sub-rede são atribuídos automaticamente pelo provedor.",
					children: [{
						type: "name",
						title: "Renovar",
						content: "Clique neste botão para renovar os parâmetros IP de seu provedor."
					},{
						type: "name",
						title: "Liberar",
						content: "Clique neste botão para liberar os parâmetros IP atribuídos."
					}]
				},{
					type: "name",
					title: "IP Estático",
					content: "Selecione se o endereço IP e a máscara de sub-rede forem providos pelo provedor, e insire estas informações nos campos correspondentes."
				}]
			},{
				type: "name",
				title: "Tamanho MTU",
				content: "O tamanho típico MTU ",
				children: [{
					type: "note",
					title: "Aviso",
					content: "Em raras ocasiões, seu provedor poderá solicitar que você ajuste o tamanho MTU para melhor desempenho de rede. Você não deve alter este valor a menos que seja absolutamente necessário."
				}]
			},{
				type: "name",
				title: "Nome do Serviço/Nome do Concentrador de Acesso",
				content: "Por padrão, o Nome do Serviço e o Concentrador de Acesso (AC) ficam em branco. Estes campos não devem ser configurados a menos que solicitado pelo provedor."
			},{
				type: "name",
				title: "Detecção de Intervalo Online",
				content: "Insira um valor de intervalo de tempo entre 0 e 120 para qual o roteador detectar o Concentrador de Acesso online a cada intervalo. O valor padrão é 10."
			},{
				type: "name",
				title: "Endereço IP",
				content: "Se o seu provedor oferecer endereço IP fixo específico, selecione Utilizar o seguinte Endereço IP e insira o endereço no campo. Caso contrário, selecione Obter Dinamicamente do provedor para obter um endereço IP atribuído automaticamente."
			},{
				type: "name",
				title: "Endereço DNS/DNS Primário/DNS Secundário",
				content: "Caso seu provedor ofereça endereços IP DNS (fixos) específicos, selecione Utilizar o seguinte endereço DNS e insira o(s) endereços(s) nos campos DNS primário e DNS secundário respectivamente. Caso contrário, selecione Obter Dinamicamente do Provedor para obter endereço(s) IP DNS atribuído(s) pelo servidor automaticamente. "
			},{
				type: "name",
				title: "Modo de Conexão",
				content: "Selecione um modo de conexão apropriado que determina como conectar-se à Internet.",
				children: [{
					type: "name",
					title: "Automático",
					content: "Neste modo, a conexão de Internet reconecta automaticamente a qualquer momento em que ficar desconectada."
				},{
					type: "name",
					title: "Sob Demanda",
					content: "Neste modo, a conexão Internet será encerrada automaticamente após um atingir um tempo específico de inatividade (Tempo Máximo de Inatividade). A conexão é reestabelecida quando você é solicitado a acessar a Internet novamente."
				},{
					type: "name",
					title: "Por Tempo",
					content: "Neste modo, a conexão de Internet é reestabelecida em um tempo específico.                                                     Caso esta opção seja selecionada, insira o tempo de início e final, ambos estão no formato HH:MM."
				},{
					type: "name",
					title: "Manualmente",
					content: "Neste modo, a conexão é controlada manualmente ao clicar no botão Conectar ou Desconectar. Este modo também suporta a função de Tempo Máximo de Inatividade. Insira um tempo (em minutos) máximo para que a Internet fique inativa no campo Tempo Máximo de Inatividade. O valor padrão é de 15 minutos. Caso queira que a conexão permaneça ativa o tempo todo, insira 0 (zero)."
				},{
					type: "note",
					title: "Aviso",
					content: "O modo de conexão Por Tempo só terá efeito uma vez que o Sistema de Horário em Avançado -> Ferramentas de Sistema -> Configurações de Horário estiver configurado."
				}]
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: Cabo BigPond"
			},{
				type: "paragraph",
				content: "Selecione este tipo caso seu provedor forneça conexão de Cabo BigPond."
			},{
				type: "name",
				title: "Nome de Usuário/Senha",
				content: "Insira o nome de usuário e a senha fornecidos pelo seu provedor. Estes campos são suscetíveis a letras maíuscula se minúsculas."
			},{
				type: "name",
				title: "Autenticação. Servidor",
				content: "Insira um endereço IP do servidor de autenticação ou nome host."
			},{
				type: "name",
				title: "Autenticação. Domínio",
				content: "Insira um sufixo de nome de domínio do servidor (baseado na sua localização). Por exemplo, nsw.bigpond.net.au para NSW/ACT, vic.bigpond.net.au para VIC/TAS/WA/SA/NT, ou qld.bigpond.net.au para QLD."
			},{
				type: "name",
				title: "Tamanho MTU",
				content: "O tamanho MTU típico e padrão (Unidade de Transmissão Máxima) é de 1500 Bytes. Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
			},{
				type: "name",
				title: "Modo de Conexão",
				content: "Selecione um modo de conexão apropriado que determina como conectar-se à Internet.",
				children: [{
					type: "name",
					title: "Automático",
					content: "Neste modo, a conexão de Internet reconecta automaticamente a qualquer momento em que ficar desconectada."
				},{
					type: "name",
					title: "Sob Demanda",
					content: "Neste modo, a conexão Internet será encerrada automaticamente após um atingir um tempo específico de inatividade (Tempo Máximo de Inatividade). A conexão é reestabelecida quando você é solicitado a acessar a Internet novamente."
				},{
					type: "name",
					title: "Manualmente",
					content: "Neste modo, a conexão é controlada manualmente ao clicar no botão Conectar ou Desconectar. Este modo também suporta a função de Tempo Máximo de Inatividade. Insira um tempo (em minutos) máximo para que a Internet fique inativa no campo Tempo Máximo de Inatividade. O valor padrão é de 15 minutos. Caso queira que a conexão permaneça ativa o tempo todo, insira 0 (zero)."
				}]
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: L2TP/PPTP"
			},{
				type: "paragraph",
				content: "Selecione este tipo caso você se conecta a um Servidor VPN L2TP/PPTP e lhe foi oferecido um nome de usuário, senha, um Endereço IP/Nome de Domínio do servidor através do provedor."
			},{
				type: "name",
				title: "Nome de Usuário/Senha",
				content: "Insira o nome de usuário e a senha fornecidos pelo seu provedor. Estes campos são suscetíveis a letras maíuscula se minúsculas."
			},{
				type: "name",
				title: "Endereço IP/DNS Primário/DNS Secundário",
				content: "Estes parâmetros serão atuomaticamente atribuídos pelo servidor DHCP do seu provedor."
			},{
				type: "name",
				title: "Conexão Secundária (IP Dinâmico ou Estático)",
				children: [{
					type: "name",
					title: "IP Dinâmico",
					content: "Selecione caso o endereço IP e máscara sub-rede são atribuídos automaticamente pelo provedor."
				},{
					type: "name",
					title: "IP Estático",
					content: "Selecione se o endereço IP, máscara de sub-rede, gateway e endereços DNS são oferecidos pelo provedor, insira então essas informações nos campos correspondentes."
				}]
			},{
				type: "name",
				title: "IP Servidor VPN/Nome de Domínio",
				content: "Insira o endereço IP de servidor VPN ou nome de domínio fornecidos pelo seu provedor."
			},{
				type: "name",
				title: "Tamanho MTU",
				content: "The default and typical MTU (Maximum Transmission Unit) size for most Ethernet networks is 1460 Bytes for L2TP or 1420 Bytes for PPTP. Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
			},{
				type: "name",
				title: "Modo de Conexão",
				content: "Selecione um modo de conexão apropriado que determina como conectar-se à Internet.",
				children: [{
					type: "name",
					title: "Automático",
					content: "Neste modo, a conexão de Internet reconecta automaticamente a qualquer momento em que ficar desconectada."
				},{
					type: "name",
					title: "Sob Demanda",
					content: "Neste modo, a conexão Internet será encerrada automaticamente após um atingir um tempo específico de inatividade (Tempo Máximo de Inatividade). A conexão é reestabelecida quando você é solicitado a acessar a Internet novamente."
				},{
					type: "name",
				title: "Manualmente",
				content: "Neste modo, a conexão é controlada manualmente ao clicar no botão Conectar ou Desconectar. Este modo também suporta a função de Tempo Máximo de Inatividade. Insira um tempo (em minutos) máximo para que a Internet fique inativa no campo Tempo Máximo de Inatividade. O valor padrão é de 15 minutos. Caso queira que a conexão permaneça ativa o tempo todo, insira 0 (zero)."
				}]
			},{
				type:"paragraph",
				content:"Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "Clone de MAC",
			CONTENT: [{
				type: "name",
				title: "Utilizar Endereço MAC Padrão",
				content: "Não altere o endereço MAC padrão do roteador, caso o provedor não vincule o endereço IP atribuído ao endereço MAC."
			},{
				type: "name",
				title: "Utilizar Endereço MAC do Computador Atual",
				content: "Selecione para copiar o endereço MAC atual do computador que está conectado ao roteador, caso o provedor vincule o endereço IP atribuído ao endereço MAC do computador."
			},{
				type: "name",
				title: "Utilizar Endereço MAC Personalizado",
				content: "Insira o endereço MAC manualmente, caso o provedor vincule o endereço IP atribuído ao específico endereço MAC."
			},{
				type:"paragraph",
				content:"Clique em Save (Salvar) para confirmar as alterações."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "Endereço MAC",
				content: "O único endereço físico atribuído à porta Ethernet (LAN) do roteador."
			},{
				type: "name",
				title: "Endereço IP",
				content: "Mostra o endereço IP do roteador padrão, que é utilizado para fazer login na página de gerenciamento web do roteador e pode ser substituído."
			},{
				type: "name",
				title: "Máscara de Sub-rede",
				content: "Selecione um identificador utilizado pela porta LAN para rotear tráfico Interno ou Externo da lista abaixo ou insira uma nova máscara de sub-rede no espaço decimal pontilhado."
			},{
				type: "note",
				title: "Aviso",
				content: "Caso o novo endereço de IP LAN não estiver na mesma sub-rede que a antiga, o endereço IP Pool no servidor DHCP, será automaticamente configurado; de qualquer forma, o Servidor Virtual e o Host DMZ não surtirão efeito até que eles sejam reconfigurados."
			},{
				type:"paragraph",
				content:"Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		IPTV:{
			TITLE: "Configurações",
			CONTENT: [{
					type: "name",
					title: "IGMP Proxy",
					content: "Selecione habilitar a função IGMP (Protocolo de Gerenciamento de Grupo de Internet) Proxy."
				},{
					type: "name",
					title: "Versão IGMP",
					content: "Selecione a versão de  IGMP Proxy, V2 ou V3, de acordo com seu provedor."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Selecione para habilitar a função IPTV."
				},
				{
					type: "name",
					title: "Modo",
					content: "Selecione o modo apropriado para seu provedor.",
					children: [
						{
							type: "name",
							title: "Ponte",
							content:"Caso seu provedor não esteja listado e nenhum parâmetro seja requerido, você pode simplesmente selecionar este modo e configurar as características de porta LAN do roteador.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Atribui à sua porta LAN funções como fornecedora de Internet ou fornecedora de IPTV."
							}]
						},
						{
							type: "name",
							title: "Rússia",
							content: "Selecione se o seu provedor vem da Russia e os parâmetros necessários predeterminados, incluindo Internet/IP-Phone/IDs e Prioridades IPTV VLAN, e funções de porta LAN (1/2/3/4). ",
							children: [{
								type: "name",
								title: "ID VLAN Multicast IPTV/Prioridade",
								content: "Você habilitar a função multicast IPTV como desejado e configure a VLAN ID e Prioridade de acordo com seu provedor."
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "Selecione caso seu provedor seja ExStream do Singapura e se os parâmetros necessários estão incluindo Internet/IDs e Prioridades IPTV VLAN, e funções de porta LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malaysia-Unifi",
							content: "Selecione caso seu provedor seja Unifi da Malásia e se os parâmetros necessários estão incluindo Internet/IDs e Prioridades IPTV VLAN, e funções de porta LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Malaysia-Maxis",
							content: "Selecione caso seu provedor seja Maxis da Malásia e se os parâmetros necessários estão incluindo Internet/IDs e Prioridades IPTV VLAN, e funções de porta LAN (1/2/3/4). "
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Selecione caso seu provedor seja Portugal-MEO e os parâmetros necessários sejam predeterminados, incluindo ID de Internet VLAN e Prioridade além de características de porta LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Selecione se o provedor é Portugal-Vodafone e os parâmetros necessários são predeterminados, incluindo recursos de portas IDs VLAN de Internet/IP-Phone/IPTV e Prioridade. Você pode reatribuir as funções às suas portas LAN respectivamente conforme necessário (Fornecedor de Internet/Fornecedor de IPTV/Fornecedor IP-Phone/Fornecedor de Internet-IPTV)."
						},
						{
							type: "name",
							title: "Personalizado",
							content: "Selecione caso seu provedor não esteja listado mas oferece os parâmetros, Internet/IDs e Prioridades IPTV VLAN, e funções de porta LAN (1/2/3/4). ",
							children: [{
								type: "name",
								title: "Internet/IP-Phone/ID IPTV VLAN/Prioridade",
								content: "Configure os IDs VLAN e as pioridades como fornecidos pelo seu provedor"
							},{
								type: "name",
								title: "802.11Q Tag",
								content: "Selecione para marcação de pacotes de Internet com 802.11Q."
							},{
								type: "name",
								title: "ID VLAN Multicast IPTV/Prioridade",
								content: "Você habilitar a função multicast IPTV como desejado e configure a VLAN ID e Prioridade de acordo com seu provedor."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Atribui à sua porta LAN funções como fornecedora de Internet ou fornecedora de IPTV."
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Clique em Save (Salvar) para confirmar as alterações."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Configurações",
			CONTENT: [{
				type: "name",
				title: "Servidor DHCP",
				content: "Por padrão, o Servidor DHCP (Protocolo de Configuração de Host Dinâmico) permanece habilitado, ele atribui dinamicamente parâmetros TCP/IP para dispositivos cliente do endereço IP Pool. NÃO desabilite o Servidor DHCP a menos que você possua outro servidor DHCP ou deseja atribuir manualmente os parâmetros TCP/IP para cada dispositivo cliente na sua rede."
			},{
				type: "name",
				title: "Pool Address IP",
				content: "Insira a faixa de endereços IP que podem ser concedidos aos dispositivos clientes."
			},{
				type: "name",
				title: "Tempo de Concessão de Endereço",
				content: "Insira a duração de tempo que um endereço IP é concedido ao dispositivo cliente entre 1 e 2880 minutos. O padrão é de 120 minutos."
			},{
				type: "name",
				title: "Gateway Padrão",
				content: "Insira o endereço IP LAN. (Opcional)"
			},{
				type: "name",
				title: "DNS Primário/DNS Secundário",
				content: "Insira estes parâmetros como oferecido pelo seu provedor. (Opcional)"
			},{
				type:"paragraph",
				content:"Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Reserva de Endereço",
			CONTENT: [{
				type: "paragraph",
				content: "Você pode manualmente reservar um endereço IP para um cliente que está conectado ao roteador. Uma vez reservado, o endereço IP será atribuído apenas ao mesmo dispositivo cliente  pelo Servidor DHCP."
			},{
				type: "name",
				title: "Endereço MAC",
				content: "Mostra o endereço MAC do cliente com o DHCP endereço IP reservado."
			},{
				type: "name",
				title: "Endereço IP Reservado",
				content: "Mostra o endereço IP reservado do cliente."
			},{
				type: "name",
				title: "Descrição",
				content: "Mostra uma descrição do dispositivo cliente."
			},{
				type: "name",
				title: "Ativo",
				content: "Mostra o status (habilitado ou desabilitado) do serviço cliente."
			},{
				type: "name",
				title: "Modificar",
				content: "Mostra opções para modificar ou deletar o cliente correspondente."
			},{
				type: "step",
				title: "Para reservar um endereço IP",
				content:[
					"1. Clique em Adicionar.",
					"2. Insira o endereço MAC do seu cliente desejado.",
					"3. Insira o endereço IP que deseja reservar para o cliente,.",
					"4. Insira uma descrição para o cliente.",
					"5. Selecione Habilitar Esta Entrada.",
					"6. Clique em OK."
				]
			},{
				type: "step",
				title: "Para modificar ou deletar um cliente existente.",
				content: "Na tabela, clique no ícone Editar ou na lixeira correspondente ao cliente que deseja modificar ou deletar."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "Lista de Clientes DHCP",
			CONTENT: [{
				type: "name",
				title: "Total de Clientes",
				content: "Mostra o número de clientes DHCP associados."
			},{
				type: "name",
				title: "Nome do Cliente",
				content: "Mostra o nome do cliente DHCP."
			},{
				type: "name",
				title: "Endereço MAC",
				content: "Mostra o endereço MAC."
			},{
				type: "name",
				title: "Endereço IP Atribuído",
				content: "Mostra o endereço IP alocado para o cliente pelo Servidor DHCP"
			},{
				type: "name",
				title: "Tempo de Concessão",
				content: "Mostra o tempo restante do endereço IP que foi arrendado ao cliente."
			},{
				type: "name",
				title: "Atualizar",
				content: "Clique para atualizar a Lista de Clientes DHCP."
			}]
		},

		DDNS: {
			TITLE: "DNS Dinâmico",
			CONTENT: [{
				type: "paragraph",
				content: "O DNS Dinâmico permite atribuir um host fixo e nome de domínio para um endereço IP de Internet dinâmico . É útil quando você estiver hospedando seu próprio website, servidor FTP, ou outro servidor através do Roteador. Para começar, você precisa se inscrever com um serviço DNS Dinâmico como www.dyndns.com. Então, insira suas informações de registro."
			},{
				type: "step",
				title: "Para configurar DNS Dinâmico",
				content: [
					"1. Selecione seu fornecedor de serviço de DNS Dinâmico.",
					"2. Insira seu nome de usuário e senha da sua conta de DNS Dinâmico.",
					"3. Insira o nome de domínio que você registrou com o provedor de serviço DNS Dinâmico.",
					"4. Selecione o período de intervalo para qual o pedido de atualização de DNS Dinâmico será enviado.",
					"5. Se o seu provedor de serviços é NO- IP, selecione Vínculo IP WAN para garantir que o nome de domínio esteja ligado ao IP WAN deste roteador .",
					"6. Clique em Login e Salvar."
				]
			},{
				type: "note",
				title:"Aviso",
				content: "Se você deseja usar uma nova conta DDNS, faça o login em primeiro lugar e, em seguida, inicie uma sessão com a nova conta."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "DNS Dinâmico",
			CONTENT: [{
				type: "paragraph",
				content: "O DNS Dinâmico permite atribuir um host fixo e nome de domínio para um endereço IP de Internet dinâmico . É útil quando você estiver hospedando seu próprio website, servidor FTP, ou outro servidor através do Roteador. Para começar, você precisa se inscrever com um serviço DNS Dinâmico como www.dyndns.com. Então, insira suas informações de registro."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Lista de Nome de Domínio",
			CONTENT: [{
				type: "paragraph",
				content: "This table displays the Dynamic DNS domain names that are registered to your TP-Link ID."
			},{
				type:"step",
				title: "Para registrar um novo nome de domínio",
				content: [
					"1. Clique em Registrar",
					"2. Insira o nome de domínio.",
					"3. Clique em Salvar."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Roteamento Estático",
			CONTENT: [{
				type: "paragraph",
				content: "Roteamento estático é utilizado para predeterminar uma rota fixa para pacotes de informação de rede para alcançar um host específico ou rede."
			},{
				type: "step",
				title: "Para configurar um Roteamento Estático",
				content: [
					"1. Clique em Adicionar.",
					"2. Destino de Rede - Insira um endereço IP no formato decimal pontilhado para atribuir a rota estática para esta entrada.",
					"3. Máscara de Sub-rede - Insira uma máscara de sub-rede no formato decimal pontilhado para determinar a porção de rede e porção de host do endereço IP.",
					"4. Gateway Padrão - Insira um endereço de IP gateway no formato decimal pontilhado para conectar o roteador à rede ou host.",
					"5. Interface - Selecione LAN ou WAN para especificar o tipo de Destino de Rede.",
					"6. Descrição - Insira uma breve descrição para esta entrada.",
					"7. Selecione Habilitar Esta Entrada.",
					"8. Clique em OK."
				]
			},{
				type: "step",
				title: "Para modificar ou apagar uma entrada existente",
				content: "Na tabela, clique no ícone Editar ou na lixeira correspondente ao cliente que deseja modificar ou deletar."
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Tabela de Roteamento de Sistema",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra todas as entradas de rotas válidas que estão em uso atualmente."
			},{
				type: "paragraph",
				content: "Clique em Atualizar para atualizar a tabela de Roteamento. "
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Configurações de Região",
			CONTENT: [{
				type: "name",
				title: "Região",
				content: "Selecione sua região da lista Select your region from the drop-down menu. Caso seu país ou região não estejam listados, há a possibilidade de restrição ao uso de rádio wireless na sua localidade."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Wireless 2.4GHz",
			CONTENT: [{
				type: "name",
				title: "Habilitar Rádio Wireless",
				content: "Selecione esta opção para habilitar a frequência de rádio wireless de 2.4GHz."
			},{
				type: "name",
				title: "Nome de Rede (SSID)",
				content: "Você pode deixar o Nome de Rede padrão (SSID), ou inserir um novo nome (até 32 caracteres). Este campo é suscetível à letras maíusculas e minúsculas."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Selecione esta opção caso queira ocultar o nome da rede de 2.4GHz da lista de rede Wi-Fi."
			},{
				type: "name",
				title: "Segurança",
				content: "Selecione uma das opções de segurança a seguir:",
				children: [{
					type: "name",
					title: "Sem Segurança",
					content: "Selecione esta opção para desabilitar a segurança wireless. É altamente recomendável que você habilite a segurança wireless para proteger sua rede wireless de acessos não autorizados."
				},{
					type: "name",
					title: "WPA/WPA2-Pessoal",
					content: "Selecione esta opção para habilitar o método de padrão de autenticação através da pre shared key (PSK) também chamada de senha. Esta opção é recomendada. Caso selecionada, configure a seguir.",
					children: [{
						type: "name",
						title: "Versão",
						content: "Selecione uma versão de segurança para a sua rede wireless.",
						children: [{
							type: "name",
							title: "Automático",
							content: "Esta opção suporta múltiplas implementações de padrão WPA (Acesso Wi-Fi Protegido), como WPA e WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Esta opção oferece um bom nível de segurança."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Esta oferece um nível melhor de segurança WPA-PSK e é recomendada."
						}]
					},{
						type: "name",
						title: "Criptografia",
						content: "Selecione um tipo de segurança de criptografia: TKIP(Temporal Key Integrity Protocol), AES(Advanced Encryption Standard), ou Auto (para TKIP e AES). NÃO é recomendado utilizar a criptografia TKIP caso o roteador opera no modo 802.11n, uma vez que a criptografia TKIP não é suportada pela especificação 802.11n. Caso TKIP esteja selecionada, a função WPS será desabilitada."
					},{
						type: "name",
						title: "Senha",
						content: "Insira a senha wireless entre 8 e 63 caracteres ASCII, ou entre 8 e 64 caracteres hexadecimal neste campo."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Empresarial",
					content: "Selecione esta opção para habilitar o método mais avançado de autenticação utilizando o servidor RADIUS Remote Authentication Dial In User Service). Caso selecionado, a função WPS será desabilitada.",
					children: [{
						type: "name",
						title: "Versão",
						content: "Selecione uma versão de segurança para a sua rede wireless.",
						children:[{
							type: "name",
							title: "Automático",
							content: "Esta opção suporta múltiplas implementações de padrão WPA (Acesso Wi-Fi Protegido), como WPA e WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Esta opção oferece um bom nível de segurança."
						},{
							type: "name",
							title: "WPA2",
							content: "Esta oferece um nível melhor de segurança WPA-PSK e é recomendada."
						}]
					},{
						type: "name",
						title: "Criptografia",
						content: "Selecione um tipo de segurança de criptografia: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), ou Auto (para TKIP e AES). NÃO é recomendado utilizar a criptografia TKIP caso o roteador opera no modo 802.11n, uma vez que a criptografia TKIP não é suportada pela especificação 802.11n."
					},{
						type: "name",
						title: "IP Servidor RADIUS",
						content: "Insira o endereço IP do servidor RADIUS."
					},{
						type: "name",
						title: "Porta RADIUS",
						content: "Insira o número de porta do servidor RADIUS."
					},{
						type: "name",
						title: "Senha RADIUS",
						content: "Insira a senha de compartilhamento do servidor RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Selecione esta opção para habilitar um método básico de autenticação caso algum dos dispositivos clientes possua apenas um acesso utilizando WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Tipo",
						content: "Selecione um tipo de autenticação para sua rede wireless. O padrão é Automático, escolhe automaticamente Sistema Aberto ou Chave de Compartilhamento baseado na capacidade e solicitação de acesso do wireless cliente."
					},{
						type: "name",
						title: "Formato de Chave WEP",
						content: "Utilize formato ASCII ou selecione Hexadecimal. O formato ASCII é uma combinação de caracteres alfabéticos e numéricos. O formato Hexadecimal é uma combinação de números (0-9) e letras (A-F, a-f)."
					},{
						type: "name",
						title: "Tipo de Chave",
						content: "Selecione um tamanho de chave WEP.",
						children: [{
							type: "name",
							title: "64-bit",
							content: "Permite que você insira 10 dígitos hexadecimais (0-9, A-F, a-f) ou 5 caracteres ASCII no campo de Valor WEP. "
						},{
							type: "name",
							title: "128-bit",
							content: "Permite você inserir 26 dígitos hexadecimais (0-9, A-F, a-f) ou 13 caracteres ASCIIno campor de Valor WEP."
						}]
					},{
						type: "name",
						title: "Valor de Chave",
						content: "Insira uma chave WEP no campo respectivo."
					}]
				}]
			},{
				type: "name",
				title: "Modo",
				content: "Selecione um modo de transmissão misto."
			},{
				type: "name",
				title: "Largura do Canal",
				content: "Selecione uma largura de canal (largura de banda) para a rede wireless 2.4GHz."
			},{
				type: "name",
				title: "Canal",
				content: "Selecione um canal de operação para a rede wireless 2.4GHz. É recomendável deixar o canal em Auto (Automáico), caso não tenha experiência com problema de conexão wireles intermitente."
			},{
				type: "name",
				title: "Poder de Transmissão",
				content: "Selecione Alto, Médio ou Baixo para especificar o poder de transmissão de dados. A configuração padrão e recomendada Alta."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Wireless 5GHz",
			CONTENT: [{
				type: "name",
				title: "Habilitar Rádio Wireless",
				content: "Selecione esta função para habilitar a frequência de rádio wireless 5GHz."
			},{
				type: "name",
				title: "Nome de Rede (SSID)",
				content: "Você pode deixar o Nome de Rede padrão (SSID), ou inserir um novo nome (até 32 caracteres). Este campo é suscetível à letras maíusculas e minúsculas."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Selecione esta função caso queira ocultar o nomede rede de 5GHz (SSID) da lista de rede Wi-Fi."
			},{
				type: "name",
				title: "Segurança",
				content: "Selecione uma das opções de segurança a seguir:",
				children: [{
					type: "name",
					title: "Sem Segurança",
					content: "Selecione esta opção para desabilitar a segurança wireless. É altamente recomendável que você habilite a segurança wireless para proteger sua rede wireless de acessos não autorizados."
				},{
					type: "name",
					title: "WPA/WPA2-Pessoal",
					content: "Selecione esta opção para habilitar o método de padrão de autenticação através da pre shared key (PSK) também chamada de senha. Esta opção é recomendada. Caso selecionada, configure a seguir.",
					children: [{
						type: "name",
						title: "Versão",
						content: "Selecione uma versão de segurança para a sua rede wireless.",
						children: [{
							type: "name",
							title: "Automático",
							content: "Esta opção suporta múltiplas implementações de padrão WPA (Acesso Wi-Fi Protegido), como WPA e WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Esta opção oferece um bom nível de segurança."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Esta oferece um nível melhor de segurança WPA-PSK e é recomendada."
						}]
					},{
						type: "name",
						title: "Criptografia",
						content: "Selecione um tipo de segurança de criptografia: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), ou Auto (para TKIP e AES). NÃO é recomendado utilizar a criptografia TKIP caso o roteador opera no modo 802.11n, uma vez que a criptografia TKIP não é suportada pela especificação 802.11n. Caso TKIP esteja selecionada, a função WPS será desabilitada."
					},{
						type: "name",
						title: "Senha",
						content: "Insira a senha wireless entre 8 e 63 caracteres ASCII, ou entre 8 e 64 caracteres hexadecimal neste campo."
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Empresarial",
					content: "Selecione esta opção para habilitar o método mais avançado de autenticação utilizando o servidor RADIUS Remote Authentication Dial In User Service). Caso selecionado, a função WPS será desabilitada.",
					children: [{
						type: "name",
						title: "Versão",
						content: "Selecione uma versão de segurança para a sua rede wireless.",
						children: [{
							type: "name",
							title: "Automático",
							content: "Esta opção suporta múltiplas implementações de padrão WPA (Acesso Wi-Fi Protegido), como WPA e WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Esta opção oferece um bom nível de segurança."
						},{
							type: "name",
							title: "WPA2",
							content: "Esta oferece um nível melhor de segurança WPA-PSK e é recomendada."
						}]
					},{
						type: "name",
						title: "Criptografia",
						content: "Selecione um tipo de segurança de criptografia: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), ou Auto (para TKIP e AES). NÃO é recomendado utilizar a criptografia TKIP caso o roteador opera no modo 802.11n, uma vez que a criptografia TKIP não é suportada pela especificação 802.11n."
					},{
						type: "name",
						title: "IP Servidor RADIUS",
						content: "Insira o endereço IP do servidor RADIUS."
					},{
						type: "name",
						title: "Porta RADIUS",
						content: "Insira o número de porta do servidor RADIUS."
					},{
						type: "name",
						title: "Senha RADIUS",
						content: "Insira a senha de compartilhamento do servidor RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Selecione esta opção para habilitar um método básico de autenticação caso algum dos dispositivos clientes possua apenas um acesso utilizando WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Tipo",
						content: "Selecione um tipo de autenticação para sua rede wireless. O padrão é Automático, escolhe automaticamente Sistema Aberto ou Chave de Compartilhamento baseado na capacidade e solicitação de acesso do wireless cliente."
					},{
						type: "name",
						title: "Formato de Chave WEP",
						content: "Utilize formato ASCII ou selecione Hexadecimal. O formato ASCII é uma combinação de caracteres alfabéticos e numéricos. O formato Hexadecimal é uma combinação de números (0-9) e letras (A-F, a-f)."
					},{
						type: "name",
						title: "Tipo de Chave",
						content: "Selecione um tamanho de chave WEP.",
						children:[{
							type: "name",
							title: "64-bit",
							content: "Permite que você insira 10 dígitos hexadecimais (0-9, A-F, a-f) ou 5 caracteres ASCII no campo de Valor WEP. "
						},{
							type: "name",
							title: "128-bit",
							content: "Permite você inserir 26 dígitos hexadecimais (0-9, A-F, a-f) ou 13 caracteres ASCIIno campor de Valor WEP."
						}]
					},{
						type: "name",
						title: "Valor de Chave",
						content: "Insira uma chave WEP no campo respectivo."
					}]
				}]
			},{
				type: "name",
				title: "Modo",
				content: "Selecione um modo de transmissão misto."
			},{
				type: "name",
				title: "Largura do Canal",
				content: "Selecione uma largura de canal (largura de banda) para a rede wireless de 5GHz."
			},{
				type: "name",
				title: "Canal",
				content: "Selecione um canal operacional para a rede wireless de 5GHz. É recomendável deixar o canal em Auto (Automáico), caso não tenha experiência com problema de conexão wireles intermitente."
			},{
				type: "name",
				title: "Poder de Transmissão",
				content: "Selecione Alto, Médio ou Baixo para especificar o poder de transmissão de dados. A configuração padrão e recomendada Alta."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		WPS: {	
			TITLE: "PIN do Roteador",
			CONTENT: [{
				type: "paragraph",
				content: "Outros dispositivos podem conectar ao roteador através de WPS com o PIN do Roteador."
			},{
				type: "name",
				title: "PIN do Roteador",
				content: "Alterne para On para permitir dispositivos wireless a conectarem ao roteador utilizando o PIN do Roteador (Personal Identification Number)."
			},{
				type: "name",
				title: "PIN",
				content: "Exibe o PIN do Roteador. O PIN padrão pode ser encontrado no rótulo do roteador. Clique em Gerar para gerar um novo PIN randomicamente ou clique em Padrão para restaurar o PIN atual para o padrão de fábrica."
			}]
		},

		WPS_WIZARD: {
			TITLE: "Wizard WPS",
			CONTENT:[{
				type: "name",
				title: "Pressione o Botão (Recomendado)",
				content: "Selecione este método de conexão para habilitar a função WPS e conectar facilmente a quanlquer dispositivo com WPS habilitado em sua rede wireless usando o boão WPS ou virtualmente utilizando o botão Conectar."
			},{
				type: "name",
				title: "PIN",
				content: "Selecione este método de conexão para adicionar um dispositivo manualmente inserindo um número PIN WPS do dispositivo wireless no campo e clique em Conectar"
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Estações Wireless Online",
			CONTENT: [{
				type: "name",
				title: "Total de Clientes",
				content: "Exibe o número de clientes wireless associados."
			},{
				type: "name",
				title: "Endereço MAC",
				content: "Exibe o endereço MAC do cliente wireless associado."
			},{
				type: "name",
				title: "Tipo de Conexão",
				content: "Exibe a frequência de banda wireless (2.4GHz/5GHz) do cliente wireless associado."
			},{
				type: "name",
				title: "Segurança",
				content: "Mostra o tipo de segurança do cliente wireless associado."
			},{
				type: "name",
				title: "Pacotes Recebidos",
				content: "Mostra o número de pacotes recebidos pelo cliente wireless associado."
			},{
				type: "name",
				title: "Enviar Pacotes",
				content: "Mostra o número de pacotes enviados pelo cliente wireless associado."
			},{
				type: "paragraph",
				content: "Clique em Atualizar para obter informações atualizadas deste página."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Configurações",
			CONTENT: [{
				type: "paragraph",
				content: "A Rede para Convidados permite que você configure e separe rede com um nome senha diferentes (SSID) onde os convidados podem utilizar para acessar sua rede Wi-Fi."
			},{
				type: "name",
				title: "Permitir convidados ver uns aos outros",
				content: "Selecione esta caixa para permitir dispositivos wireless na Rede para Convidados visualizar uns aos outros."
			},{
				type: "name",
				title: "Permitir convidados acessarem minha rede local",
				content: "Selecione esta opção para permitir que dispositivos wireless na Rede para Convidados possam acessar seus compartilhamentos e impressoras da rede local."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "Wireless 2.4GHz/5GHz",
			CONTENT: [{
				type: "name",
				title: "Habilitar Rede para Convidados",
				content: "Selecione esta caixa para habilitar a função de Rede para Convidados."
			},{
				type: "name",
				title: "Nome de Rede (SSID)",
				content: "Utilize o SSID para Convidado padrão ou crie um novo nome (de até 32 caracteres)."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Selecione esta opção caso queira ocultar o SSID para Convidados da lista de rede Wi-Fi."
			},{
				type: "name",
				title: "Segurança",
				content: "Quando você escolhe nunca atualizar a senha, selecione uma das seguintes opções de segurança:",
				children: [{
					type: "name",
					title: "Sem Segurança",
					content: "Selecione esta opção para desabilitar a segurança wireless. É altamente recomendável que você habilite a segurança wireless para proteger sua Rede para Convidados de acesso não autorizado."
				},{
					type: "name",
					title: "WPA/WPA2-Pessoal",
					content: "Selecione esta opção para habilitar o método de padrão de autenticação através da chave de pré-compartilhamento (PSK) também chamada de frase-chave. Caso selecionada, configure a seguir.",
					children: [{
						type: "name",
						title: "Versão",
						content: "Selecione uma versão de segurança para sua Rede para Convidados.",
						children: [{
							type: "name",
							title: "Automático",
							content: "Esta opção suporta múltiplas implementações de padrão WPA (Acesso Wi-Fi Protegido), como WPA e WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Esta opção oferece um bom nível de segurança."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "Esta oferece um nível melhor de segurança WPA-PSK e é recomendada."
						}]
					},{
						type: "name",
						title: "Criptografia",
						content: "Selecione um tipo de segurança de criptografia: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), ou Auto (para TKIP e AES). NÃO é recomendado utilizar a criptografia TKIP caso o roteador opera no modo 802.11n, uma vez que a criptografia TKIP não é suportada pela especificação 802.11n. Caso TKIP esteja selecionada, a função WPS será desabilitada."
					}]
			}]},{
				type: "name",
				title: "Senha",
				content: "Utilize a senha gerada aleatoriamente ou crie uma senha entre 8 e 63 caracteres ASCII ou hexadecimais (0-9, a-f, A-F)."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},

		NAT: {
			TITLE: "Gateway de Aplicação de Camada (ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG permite filtros transversais NAT a serem atribuídos ao gateway para suportar tradução de endereços e portas para certas camadas de aplicação e os seguintes protocolos:  FTP, TFTP, H323 e etc. A habilitação de ALG é recomendada."
			},{
				type: "name",
				title: "Habilitar FTP ALG",
				content: "Caso selecionada, a função permite clientes FTP e servidores a transferirem dados via NAT."
			},{
				type: "name",
				title: "Habilitar TFTP ALG",
				content: "Caso selecionada, a função permite clientes FTP e servidores a transferirem dados via NAT."
			},{
				type: "name",
				title: "Habilitar ALG H323",
				content: "Caso selecionado, a função permite clientes Microsoft NetMeeting a se comunicarem via NAT."
			},{
				type: "name",
				title: "Habilitar RTSP ALG",
				content: "Caso selecionada, a função permite clientes media player a se comunicarem com com servidores de mídia streaming via NAT"
			},{
				type: "name",
				title: "Habilitar Passagem PPTP",
				content: "Caso selecionada, a função permite sessões ponto-a-ponto a serem tuneladas através da rede IP e através do roteador."
			},{
				type: "name",
				title: "Habilitar Passagem L2TP",
				content: "Caso selecionada, a função permite sessões Layer 2 ponto-a-ponto a serem tuneladas através da rede IP e através do roteador."
			},{
				type: "name",
				title: "Habilitar Passagem IPSec",
				content: "Caso selecionada, a função permite IPSec a serem tuneladas através da rede IP e através do roteador. O IPSec utiliza serviços de segurança criptografada e comunicações seguras sobre as redes IP."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Servidores Virtuais",
			CONTENT: [{
				type: "paragraph",
				content: "Servidores Virtuais são utilizados para configurarem servições públicos na sua rede local. Um servidor virtual é definido como uma porta externa, e todas as requisições da Internet da porta externa serão redirecionadas para um computador designado, que deve ser configurado com um endereço IP estático ou reservado."
			},{
				type: "name",
				title: "Tipo de Serviço",
				content: "Mostra o nome do seu servidor virtual."
			},{
				type: "name",
				title: "Porta Externa",
				content: "Mostra o número de portas ou variação de portas utilizadas pelo servidor virtual."
			},{
				type: "name",
				title: "IP Interno",
				content: "Exibe o endereço IP no computador operando o serviço de aplicação."
			},{
				type: "name",
				title: "Porta Interna",
				content: "Mostra o número de portas do computador operando o serviço de aplicação."
			},{
				type: "name",
				title: "Protocolo",
				content: "Mostra o protocolo utilizado para o serviço de aplicação: TCP, UDP, ou Todos (Todos os protocolos suportados pelo roteador)."
			},{
				type: "name",
				title: "Ativo",
				content: "Mostra o status (habilitado ou desabilitado) da regra de filtragem específica."
			},{
				type: "name",
				title: "Modificar",
				content: "Mostra opções de Modificar ou Apagar a regra correspondente."
			},{
				type: "step",
				title: "Para configurar uma regra de Servidor Virtual",
				content: [
					"1. Clique em Adicionar.",
					"2. Clique em Visualizar Aplicações Existentes para selecionar um serviço da lista para preencher automaticamente a porta padrão nos campos de Porta Externa e Porta Interna. Caso o serviço não esteja listado, insira o número de porta externa (ex.: 21) ou variação de portas (ex.: 21-25). Deixe a Porta Interna em branco caso seja tenho o mesmo valor da Porta Externa ou insira um número específico (ex.: 21) caso a Porta Externa seja uma porta única. Insira o endereço IP do computador que utiliza a aplicação na linha pontilhada decimal no campo IP Interno.",
					"3. Selecione um protocolo para o serviço de aplicação: TCP, UDP ou Todos da lista de protocolos na lista.",
					"4. Selecione Habilitar Esta Entrada.",
					"5. Clique em OK."
				]
			},{
				type: "step",
				title: "Para modificar ou apagar uma regra de Servidor Virtual",
				content: "Na tabela, clique no ícone Editar ou no ícone de Lixeira que corresponde à regra que você deseja modifcar ou apagar."
			},{
				type: "step",
				title: "Para apagar regras múltiplas",
				content: "Selecione todas as regras que você gostaria de apagar, clique em Apagar na tabela acima."
			},{
				type: "note",
				title: "Aviso",
				content: "Caso seu dispositivo host local esteja hospedando mais de um tipo de serviços disponível, você precisa criar uma regra para cada serviço."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Porta de Disparo",
			CONTENT: [{
				type: "paragraph",
				content: "O Disparo de Porta é utilizado para redirecionar tráfego de determinada porta para um servidor de rede na rede."
			},{
				type: "name",
				title: "Aplicação",
				content: "Exibe o nome da aplicação."
			},{
				type: "name",
				title: "Porta de Disparo",
				content: "Exibe a porta de tráfego de saída utilizada para disparar uma regra de filtragem de uma conexão de saída."
			},{
				type: "name",
				title: "Protocolo de Disparo",
				content: "Exibe o protocolo utilizado pela Porta de Disparo. TCP, UDP, ou Todos (Todos os protocolos suportados pelo roteador)."
			},{
				type: "name",
				title: "Porta Externa",
				content: "Mostra a porta ou alcance de porta utilizado pelo sistema remoto. Uma resposta utilizando uma destas portas será encaminhada ao PC que dispara esta regra. Você pode inserir no máximo 5 grupos de portas (ou seções de portas). cada grupo deve ser separado por \",\" (vírgulas), por exemplo, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Protocolo Externo",
				content: "Mostra o protocolo utilizado para a Porta de Entrada: TCP, UDP, ou Todos (Todos os protocolos suportados pelo roteador)."
			},{
				type: "name",
				title: "Ativo",
				content: "Mostra o status (habilitado ou desabilitado) da regra de filtragem específica."
			},{
				type: "name",
				title: "Modificar",
				content: "Mostra opções de Modificar ou Apagar a regra correspondente."
			},{
				type: "step",
				title: "Para configurar uma regra de Porta de Disparo",
				content: [{
					type: "note",
					title: "Aviso",
					content: "Cada regra pode somente ser utilizada por um host por vez."
				},
					"1. Clique em Adicionar.",
					"2. Click em Visualizar Aplicações Existentes para selecionar uma aplicação da lista para preencher automaticamente os valores padrão nos campos apropriados Caso precise adicionar uma aplicação não listada, insira manualmente a Aplicação, Porta de Disparo, Protocolo de Disparo, Porta Externa e Protocolo Externo.",	
					"3. Selecione Habilitar Esta Entrada.",
					"4. Clique em OK."
				]
			},{
				type: "step",
				title: "Para modificar ou apagar uma regra de Porta de Disparo",
				content: "Na tabela, clique no ícone Editar ou no ícone de Lixeira que corresponde à regra que você deseja modifcar ou apagar."
			},{
				type: "step",
				title: "Para apagar múltiplas regras de Disparo de Porta",
				content: "Na tabela, selecione todas as regras que deseja apagar, clique em Apagar acima da tabela."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "A função host DMZ (Demilitarized Zone) permite um host local ser exposto à Internet para um serviço com propósito especial, como jogos online ou vídeo conferência.  Basicamente, o DMZ permite um único computador na sua LAN a abrir todas as portas. Este computador precisa ser configurado com um endereço IP estático e possui sua função cliente DHCP desabilitada."
			},{
				type: "step",
				title: "Para atribuir um computador ou servidor para serem servidor DMZ.",
				content: [
					"1. Selecione Habilitar DMZ.",
					"2. No campo de endereço IP Host DMZ, insira o endereço IP do computador local para configurar como o Host DMZ",
					"3. Clique em Salvar."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Por padrão, a função Plug-and-Play Universal (UPnP) é habilitada para permitir dispositivos, como computadores e outros dispositivos de Internet para se descobrirem e se comunicarem entre si na rede local. "
			},{
				type: "paragraph",
				content: "O Serviço UPnP mostra informação do dispositivo UPnP."
			},{
				type: "name",
				title: "Descrição do Serviço",
				content: "Exibe uma descrição breve do host local que inicia a solicitação UPnP."
			},{
				type: "name",
				title: "Porta Externa",
				content: "Exibe a porta externa que está aberta pelo host local."
			},{
				type: "name",
				title: "Protocolo",
				content: "Mostra o tipo de protocolo de rede que é utilizado pelo host local."
			},{
				type: "name",
				title: "Endereço IP Interno",
				content: "Mostra o endereço IP do host local."
			},{
				type: "name",
				title: "Porta Interna",
				content: "Mostra a porta interna que está aberta pelo host local."
			},{
				type: "paragraph",
				content: "Clique em Atualizar para atualizar a Lista de Servidor UPnP."
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Configurações do Dispositivos",
			CONTENT: [{
				type: "paragraph",
				content: "A página de Configurações do Dispositivo mostra as informações de qualquer dispositivo de armazenamento USB conectado através da porta USB. "
			},{
				type: "name",
				title: "Buscar",
				content: "Normalmente, o roteador detecta automaticamente qualquer dispositivo conectado. Caso contrário, clique neste botão para procurar por algum dispositivo conectado recentemente e atualize a página com as novas informações."
			},{
				type: "name",
				title: "Volume",
				content: "Mostra o nome do volume USB"
			},{
				type: "name",
				title: "Capacidade",
				content: "Mostra a capacidade de armazenamento USB total."
			},{
				type: "name",
				title: "Espaço Livre",
				content: "Mostra o espaço livre disponível atual para armazenamento."
			},{
				type: "name",
				title: "Remover com Segurança",
				content: "Clique neste botão para desconectar um dispositivo USB do roteador antes de fazê-lo fisicamente."
			},{
				type: "paragraph",
				content: "Observe que o botão Remover com Segurança aparece somente quando há algum dispositivo USB de armazenamento conectado ao roteador, e você não poderá removê-lo enquanto seu volume estiver ocupado."
			},{
				type: "name",
				title: "Ativo",
				content: "Esta tabela aparece somente quando há um dispositivo USB conectado ao roteador. Selecione para habilitar o compartilhamento de arquivos do dispositivo USB."
			},{
				type: "step",
				title: "Para configurar um servidor de arquivo.",
				content: [
				"1. Conecte o dispositivo USB de armazenamento à porta do roteador utilizando um cabo USB.",
				"2. O dispositivo USB recém-conectado deve ser automaticamente detectado pelo roteador e exibir suas informções sob a seção de Configurações do Aparelho. Caso contrário, clique em Procurar.",
				"3. Selecione Ativo para habilitar o comaprtilhamento de arquivo"
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Conta de Compartilhamento",
			CONTENT: [{
				type: "name",
				title: "Conta",
				content: "Você pode tanto selecionar Utilizar a Conta Padrão para fazer login nos arquivos compartilhados e pastas ou Utilizar Nova Conta e inserir o seguinte para criar uma nova conta de usuário."
			},{
				type: "name",
				title: "Nome de Usuário/Senha",
				content: "Insira uma sequência alphanumérica ou underline em até 15 caracteres. O nome de usuário deve iniciar com um caractere alfabético. Estes campos são suscetíveis a letras maíuscula se minúsculas."
			},{
				type: "name",
				title: "Confirmar Senha",
				content: "Insira novamente a senha para confirmar se não há algum erro de digitação. Este campo é também suscetível à letras maiúsculas e minúsculas."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Configurações de Compartilhamento",
			CONTENT: [{
				type: "name",
				title: "Rede/Nome de Servidor de Mídia",
				content: "Mostra o nome utilizado para acessar o dispositivo de armazenamento USB conectado."
			},{
				type: "name",
				title: "Habilitar",
				content: "Selecione para habilitar o método de acesso."
			},{
				type: "name",
				title: "Método de Acesso",
				content: "Há três métodos de acesso para permitir ao dispositivo de compartilhamento USB. Você pode escolher um ou mais métodos selecionando a checkbox correspondente.",
				children: [{
					type: "name",
					title: "Ambiente de Rede",
					content: "If enabled, users on your network can access the USB storage device using an assigned IP address (e.g. \\\\192.168.0.1)."
				},{
					type: "name",
					title: "FTP",
					content: "Caso habilitado, os clientes FTP na sua rede local poderão acessar o dispositivo de armazenamento USB utilizando o endereço IP atribuído, seguido do número de porta do servidor FTP (ex.://192.168.0.1:21)."
				},{
					type: "name",
					title: "FTP (Via Internet)",
					content: "Caso habilitado, usuários podem acessar via remota o dispositivo USB de compartilhamento através de FTP pela Internet. Esta função suporta tanto downloads como uploads de arquivos. Para alterar o número de porta do servidor FTP, insira um número de porta e clique em Salvar para aplicar as alterações."
				}]
			},{
				type: "name",
				title: "Link",
				content: "Exibe o endereço utilizado para acessar o dispositivo de compartilhamento USB compartilhado."
			},{
				type: "name",
				title: "Porta",
				content: "Exibe o número de porta do servidor FTP."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Compartilhamento de Pasta",
			CONTENT: [{
				type: "name",
				title: "Compartilhar Todos",
				content: "Alterne para On para compartilhar todos os arquivos e pastas ou Off mpara compartilhar somente as pastas selecionadas."
			},{
				type: "name",
				title: "Habilitar Autenticação",
				content: "É recomendável habilitar autenticação para solicitar aos usuários um nome de usuário e senha válidos para acessarem as pastas de compartilhamento."
			},{
				type: "name",
				title: "Nome da Pasta",
				content: "Mostra o nome da Pasta de Compartilhamento"
			},{
				type: "name",
				title: "Caminho da Pasta",
				content: "Exibe o caminho para a pasta compartilhada."
			},{
				type: "name",
				title: "Compartilhamento de Mídia",
				content: "Indica se a pasta de compartilhamento tem permissão para compartilhamento de mídia ou não."
			},{
				type: "name",
				title: "Nome do Volume",
				content: "Mostra o nome da Pasta de Compartilhamento"
			},{
				type: "name",
				title: "Ativo",
				content: "Indica o staus da pasta compartilhada através do indicador em formato de lâmpada."
			},{
				type: "name",
				title: "Modificar",
				content: "Exibe opções para Modificar ou Apagar a pasta de compartilhamento correspondente."
			},{
				type: "name",
				title: "Buscar",
				content: "Clique em procurar por uma pasta de compartilhamento."
			},{
				type: "name",
				title: "Permitir Acesso Rede para Convidados",
				content: "Selecione permitir clientes na Rede para Convidados para acessar pastas de compartilhamentos."
			},{
				type: "name",
				title: "Habilitar Autenticação",
				content: "Selecione para solicitar usuários a acessarem as pastas compartilhadas com um nome de usuário e senha válidos."
			},{
				type: "name",
				title: "Habilitar Permissão Editar",
				content: "Selecione para permitir usuários a fazerem alterações no conteúdo da pasta."
			},{
				type: "name",
				title: "Habilitar Compartilhamento de Mídia.",
				content: "Selecione para habilitar compartilhamento de mídia."
			},{
				type: "name",
				title:"Atualizar",
				content: "Clique para atualizar a lista da pasta de compartilhamento."
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Servidor de Impressora",
			CONTENT: [{
				type: "name",
				title:"Servidor de Impressora",
				content: "Alterne para On para habilitar a função de servidor de impressão."
			},{
				type: "name",
				title:"Nome de Impressora",
				content: "Mostra o nome da sua impressora conectada ao roteador."
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Controle dos Pais",
			CONTENT: [{
				type: "paragraph",
				content: "Com a função de Controle dos Pais, você pode bloquear websites maliciosos, explícitos ou inapropriados; restringir acesso em determinados períodos do dia (por exemplo, Facebook ou YouTube durante o período de trabalho); e ao mesmo tempo proteger cada dispositivo da sua rede residencial contra malwares e phising através de um ponto de controle central."
			},{
				type: "name",
				title: "Controle dos Pais",
				content: "Alterne para On para habilitar a função de Controle dos Pais."
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Dispositivos Sob Controle dos Pais",
			CONTENT: [{
				type: "name",
				title: "Nome do Dispositivo",
				content: "Exibe o nome de todos os dispositivos clientes conectados que estão atualmente sob o Controle dos Pais."
			},{
				type: "name",
				title: "Endereço MAC",
				content: "Exibe o nome de todos os dispositivos clientes conectados que estão atualmente sob o Controle dos Pais."
			},{
				type: "name",
				title: "Tempo de Acesso à Internet",
				content: "Exibe o período de tempo de restrição de acesso. O agendamento tem efeito baseado no horário do sistema do roteador que pode ser configurado em Ferramentas de Sistema > Configurações de Hora"
			},{
				type: "name",
				title: "Descrição",
				content: "Exibe uma breve descriçãodo dispositivo conectado."
			},{
				type: "name",
				title: "Ativo",
				content: "Mostra o status (habilitado ou desabilitado) do Controle dos Pais do dispositivo correspondente."
			},{
				type: "name",
				title: "Modificar",
				content: "Exibe opções para Modificar ou Apagar a pasta de compartilhamento correspondente."
			},{
				type: "step",
				title: "Para restringir um dispositivo de um novo cliente",
				content: [
					"1. Clique em Adicionar.",
					"2. Clique em Visualizar Dispositivos Existente e escolha um dispositivo conectado atualmente da Lista de Dispositivos de Acesso; ou insira o Nome doDispositivo e Endereço MAC manualmente para adicionar um dispositivo que não está conectado.",
					"3. Clique no ícone de Tempo de Acesso à Internet para especificar um período enquanto a restrição for aplicável.",
					"4. Insira uma breve descrição no campo Descrição. (Opcional)",
					"5. Selecione Habilitar Esta Entrada.",
					"6. Clique em OK."
				]
			},{
				type: "paragraph",
				content: "Para modificar ou apagar uma entrada de Controle dos Pais, clique no ícone Editar ou na Lixeira para apagar a entrada correspondente."
			},{
				type: "paragraph",
				content: "Para apagar múltiplas entradas, selecione todas as entradas e clique em apagar na tabela."
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Restrição de Conteúdo",
			CONTENT: [{
				type: "name",
				title: "Lista de Bloqueados",
				content: "Contém palavras-chave que serão utilizadas para bloquear o acesso de dispositivos clientes especificados na lista de Controle dos Pais.",
				children: [{
					type: "paragraph",
					content: "Clique em Adicionar uma Nova Palavra-Chave para adicionar à Lista de Bloqueados. Para apagar uma palavra-chave, clique no ícone (-) correspondente que deseja apagar."
				}]
			},{
				type: "name",
				title: "Lista de Permitidos",
				content: "Contém endereços de websites que dispositivos clientes especificados na lista de Controle dos Pais são autorizados ao acesso.",
				children: [{
					type: "paragraph",
					content: "Clique em Adicionar um Novo Domínio para adicionar um website à Lista de Permitidos. Para apagar um website, clique no ícone (-) correspondente que deseja apagar."
				}]
			},{
				type: "paragraph",
				content: "Clique em Salvar para fixar sua configuração."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "A função Quality of Service (QoS) ajuda a priorizar o tráfego de Internet de acordo com suas necessidades Você pode especificar o nível de prioridade para um dispositivo ou uma aplicação na lista de regra QoS."
			},{
				type: "name",
				title: "Habilitar QoS",
				content: "Selecione esta caixa para habilitar a função QoS."
			},{
				type: "name",
				title: "Largura de Banda para Upload",
				content: "Insira a largura de banda máxima para upload fornecidos pelo seu provedor."
			},{
				type: "name",
				title: "Largura de Banda para Download",
				content: "Insira a largura de banda máxima para download fornecidos pelo seu provedor."
			},{
				type: "name",
				title: "Alta Prioridade",
				content: "Especifique uma porcentagem para o tráfego de alta prioridade."
			},{
				type: "name",
				title: "Prioridade Média",
				content: "Especifique uma porcentagem para o tráfego de média prioridade."
			},{
				type: "name",
				title: "Baixa Prioridade",
				content: "Especifique uma porcentagem para o tráfego de baixa prioridade."
			},{
				type: "note",
				title: "Aviso",
				content: "A quantidade máxima (porcentagem) de todas as prioridade é de 100%."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		QOS_RULE: {
			TITLE: "Lista de Regras QoS",
			CONTENT: [{
				type: "name",
				title: "Tipo",
				content: "Selecione um tipo para adicionar à lista de regras QoS."
			},{
				type: "step",
				title: "Para estabelecer uma regra de alta/média/baixa prioridade Pelo Dispositivo.",
				content: [
					"1. Clique em Adicionar.",
					"2. Selecionado Pelo Dispositivo.",
					"3. Clique em Visualizar Dispositivos Existentes para selecionar seu dispositivo desejado da Lista de Dispositivos de Acesso, ou você pode inserir um  nome de dispositivo e seu endereço MAC manualmente nos campos Nome de Dispositivo e Endereço MAC.",
					"4. Clique em OK."
				]
			},{
				type: "step",
				title: "Para estabelecer uma regra de alta/média/baixa prioridade Por Aplicação.",
				content: [
					"1. Clique em Adicionar.",
					"2. Selecione Por Aplicação. ",
					"3. Selecione a sua aplicação deseja da Lista de Aplicações, ou você pode personalizá-las configurando o nome, protocolo e destino de porta (1-65535) nos campos correspondentes, você pode inserir uma ou múltiplas portas ou variações de porta, utilize vírgulas para separá-las (ex.: 21,36-105,111).",
					"4. Clique em OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Atualizar Base de Dados",
			CONTENT: [{
				type: "name",
				title: "Novo Arquivo de Base de Dados",
				content: "Clique em Procurar para localizar seu arquivo de nova base de dados. Selecione-o e clique em Atualizar para atualizar sua base de dados para uma versão mais nova."
			},{
				type: "name",
				title: "Versão de Base de Dados",
				content: "Exibe a versão atual de database."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Firewall",
			CONTENT: [{
				type: "name",
				title: "Firewall SPI",
				content: "O Firewall SPI (Stateful Packet Inspection) previne ataques cibernéticos  e garante que passam através do roteador com base nos protocolos."
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "Proteção DoS",
			CONTENT: [{
				type: "name",
				title: "Proteção DoS",
				content: "A Proteção DoS (Denial of Service) protege a LAN contra ataques DoS de flooding com solicitações ao servidor."
			},{
				type: "name",
				title: "Filtragem de Ataque ICMP-FLOOD",
				content: "Habilite para prevenir ataque ICMP-flood (Internet Control Message Protocol)",
				children: [{
					type: "name",
					title: "Desligado",
					content: "Sem proteção."
				},{
					type: "name",
					title: "Baixa",
					content: "Proteção de baixo nível e baixo impacto no desempenho do roteador."
				},{
					type: "name",
					title: "Média",
					content: "Nível moderado de proteção e impacto quase notável no desempenho do roteador."
				},{
					type: "name",
					title: "Alta",
					content: "Nível alto de proteção e impacto notável no desempenho do roteador."
				}]
			},{
				type: "name",
				title: "Filtragem de Ataque UDP-FLOOD",
				content: "Habilite para prevenir ataques UDP-flood (User Datagram Protocol)."
			},{
				type: "name",
				title: "Filtragem de Ataque TCP-SYN-FLOOD",
				content: "Habilite para prevenir ataques TCP-SYN-FLOOD (Control Protocol-Synchronize)."
			},{
				type: "name",
				title: "Ignorar Pacote Ping da Porta WAN",
				content: "Habilite para ignorar pacotes de ping da porta WAN."
			},{
				type: "name",
				title: "Proibir Pacotes de Ping da porta LAN",
				content: "Habilite para proibir pacotes de ping da porta WAN."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Lista de Host DoS Bloqueados",
			CONTENT: [{
				type: "name",
				title: "Lista de Host DoS Bloqueados",
				content: "Lista os endereços IP e MAC de qualquer fonte de ataque DoS bloqueada."
			},{
				type: "step",
				title: "Para apagar uma entrada",
				content: "Na lista de Host, selecione uma entrada que gostaria de apagar e clique em Apagar acima da tabela."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Controle de Acesso",
			CONTENT: [{
				type: "paragraph",
				content: "O Controle de Acesso é utilizado para permitir ou bloquear outros dispositivos de acessarem a sua rede. Quando um dispositico é bloqueado, ele fica incapaz de se comunicar com outros dispositivos ou conectar-se à Internet."
			},{
				type: "paragraph",
				content: "Para utilizar o Controle de Acesso, habilite esta função e especifique uma lista de permitidos e bloqueados. Caso o Controle de Acesso esteja desabilitado *(Off), todos os dispositivos, incluindo os da lista de bloqueados serão permitidos a conectar."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Método de Acesso",
			CONTENT: [{
				type: "name",
				title: "Lista de Bloqueados",
				content: "Somente dispositivos na Lista de Bloqueados NÃO estão permitidos a acessar sua rede."
			},{
				type: "name",
				title: "Lista de Permitidos",
				content: "Somente dispositivos na Lista de Permitidos estão permitidos a acessar sua rede."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Dispositivos Online",
			CONTENT: [{
				type: "name",
				title: "Nome do Dispositivo",
				content: "Mostra o nome do dispositivo conectado."
			},{
				type: "name",
				title: "Endereço IP",
				content: "Mostra o endereço IP dispositivo conectado."
			},{
				type: "name",
				title: "Endereço MAC",
				content: "Mostra o endereço  MAC do dipositivo conectado."
			},{
				type: "name",
				title: "Tipo de Conexão",
				content: "Mostra o tipo de conexão do dispositivo conectado."
			},{
				type: "step",
				title: "Para bloquear um dispositivo",
				content: "Na tabela de Dispositivos Online, clique no ícone Bloquear na coluna Modificar que corresponder ao dispositivo que deseja bloquear."
			},{
				type: "step",
				title: "Para bloquear múltiplos dispositivos",
				content: "Na tabela de Dispositivos Online, selecione todos os dispositivos que deseja bloquear, clique em Bloquear acima da tabela. O dispositivo será automaticamente adicionada os Dispositivos na Lista de Bloqueados."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Dispositivos na Lista de Bloqueados/Permitidos",
			CONTENT: [{
				type: "step",
				title: "Para bloquear ou permitir um dispositivo",
				content: [
					"1. Clique em Adicionar.",
					"2. Insira o Nome do Dispositivo.",
					"3. Insira o endereço MAC do dispositivo.",
					"4. Clique em OK."
				]
			},{
				type: "step",
				title: "Para modificar ou apagar um dispositivo na Lista de Permitidos/Bloqueados",
				content: "Na tabela de Permitidos/Bloqueados, clique no ícone Editar ou na Lixeira que corresponde ao dispositivos que você deseja para modificar ou apagar."
			},{
				type: "step",
				title: "Para apagar múlitplos dispositivos na Lista de Permitidos/Bloqueados",
				content: "Na Lista de Permitidos/Bloqueados, selecione todos os dispositivos que você deseja apagar, clique em Apagar abaixo da tabela."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Configurações",
			CONTENT: [{
				type: "paragraph",
				content: "O vínculo ARP (Address Resolution Protocol) é útil para controle de acesso de um específico computador na LAN ao vincular o endereço IP e o endereço MAC dos dois dispositivos. O vínculo ARP também previne outros dispositivos utilizando um endereço IP específico."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "Lista ARP",
			CONTENT: [{
				type: "paragraph",
				content: "Mostra os endereços MAC e IP dos dispositivos conectados atualmente."
			},{
				type: "name",
				title: "Número de Entrada ARP",
				content: "Mostro o número total de dispositivos que estão atualmente conectados ao roteador."
			},{
				type: "name",
				title: "Endereço MAC",
				content: "Mostra o endereço  MAC do dipositivo conectado."
			},{
				type: "name",
				title: "Endereço IP",
				content: "Exibe o endereço IP separado para o dispositivo conectado."
			},{
				type: "name",
				title: "Vinculo",
				content: "Indica se os endereços MAC ou IP estão vinculados ou não."
			},{
				type: "name",
				title: "Modificar",
				content: "Mostra opções para Vincular ou Apagar a entrada correspondente da lista."
			},{
				type: "note",
				title: "Aviso",
				content: "Você não pode vincular o mesmo endereço IP para mais que um endereço MAC."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Lista de Vínculos",
			CONTENT: [{
				type: "step",
				title: "Para configurar um dispositivo com vínculo ARP",
				content: [
					"1. Clique em Adicionar.",
					"2. Insira o endereço MAC do dispositivo.",
					"3. Insira um endereço IP que você queira vincular ao endereço MAC acima",
					"4. Insira uma Descrição para este dispositivo. (Opcional)",
					"5. Selecione Habilitar Esta Entrada.",
					"6. Clique em OK."
				]
			},{
				type: "step",
				title: "Para modificar ou apagar uma entrada",
				content: "Na tabela de Permitidos/Bloqueados, clique no ícone Editar ou na Lixeira que corresponde ao dispositivos que você deseja para modificar ou apagar."
			},{
				type: "step",
				title: "Para apagar entradas múltiplas",
				content: "Na lista de Host, selecione uma entrada que gostaria de apagar e clique em Apagar acima da tabela."
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Selecione habilitar (On) ou desabilitar (Off) a função IPv6 do roteador."
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: IP Estático",
			},{
				type: "name",
				title: "IP Estático",
				content: "Selecione este tipo caso seu provedor utilize atribuição de endereço IPv6 Estático."
			},{
				type: "name",
				title: "Endereço IPv6/Gateway Padrão/DNS Primário/DNS Secundário",
				content: "Insira estes parâmetros como fornecidos pelo provedor."
			},{
				type: "name",
				title: "Tamanho MTU",
				content: "O tamanho MTU típico e padrão (Unidade de Transmissão Máxima) é de 1500 Bytes. Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
			},{
				type: "title",
				title: "Internet Connection Type: IP Dinâmico",
			},{
				type: "name",
				title: "IP Dinâmico",
				content: "Selecione este tipo caso seu provedor utilize atribuição de endereço IPv6 Dinâmico."
			},{
				type: "name",
				title: "Endereço IPv6/DNS Primário/DNS Secundário",
				content: "Estes parâmetros são automaticamente atribuídos pelo servidor DHCPv6 do seu provedor."
			},{
				type: "name",
				title: "Renovar",
				content: "Clique neste botão para obter novos parâmetros IPv6 do servidor DHCPv6 do provedor."
			},{
				type: "name",
				title: "Liberar",
				content: "Clique neste botão para liberar todos os endereços IPv6"
			},{
				type: "name",
				title: "Obter Endereço IPv6",
				content: "Selecione DHCPv6 para obter um endereço IPv6 não temporário ou SLAAC para obter um endereço IPv6 gerado de um pacote de anúncio do roteador, de acordo com o provedor."
			},{
				type: "name",
				title: "Delegação de Prefixo",
				content: "Selecione Habilitar para obter uma delegação de prefixo pelo Servidor DHCPv6 do provedor, ou Desabilitar para designar um prefixo de endereço manualmente. Clientas na LAN irão gerar um endereço IPv6 com este prefixo."
			},{
				type: "name",
				title: "Endereço DNS",
				content: "Selecione Obter dinamicamente do provedor ou Utilizar o Endereço DNS seguinte. Caso Utilizar o Endereço DNS seguinte seja selecionado, favor inserir o endereço DNS manualmente oferecido pelo seu provedor."
			},{
				type: "name",
				title: "DNS Primário/DNS Secundário",
				content: "Insira estes parâmetros manualmente ou  obtenha-os dinamicamente do provedor."
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Selecione este tipo caso seu provedor utilize PPPoEv6, e ofereça um nome de usuário e senha."
			},{
				type: "name",
				title: "Nome de Usuário/Senha",
				content: "Insira estes parâmetros conforme fornecidos pelo seu provedor."
			},{
				type: "name",
				title: "Endereço IPv6",
				content: "Este endereço será automaticamente atribuído pelo servidor DHCPv6 do provedor, depois que você inserir o nome de usuário e senha e clicar em Conectar. "
			},{
				type: "name",
				title: "Endereço DNS",
				content: "Selecione Obter dinamicamente do provedor ou Utilizar o Endereço DNS seguinte. Caso Utilizar o Endereço DNS seguinte seja selecionado, favor inserir o endereço DNS manualmente oferecido pelo seu provedor."
			},{
				type: "name",
				title: "Obter Endereço IPv6",
				content: "Selecione DHCPv6 para obter um endereço IPv6 não temporário ou SLAAC para obter um endereço IPv6 gerado de um pacote de anúncio do roteador, de acordo com o provedor."
			},{
				type: "name",
				title: "Delegação de Prefixo",
				content: "Selecione Habilitar para obter uma delegação de prefixo pelo Servidor DHCPv6 do provedor, ou Desabilitar para designar um prefixo de endereço manualmente. Clientas na LAN irão gerar um endereço IPv6 com este prefixo."
			},{
				type: "name",
				title: "Conectar",
				content: "Clique neste botão para conectar à Internet."
			},{
				type: "name",
				title: "Desconectar",
				content: "Clique neste botão para desconectar da Internet."
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: Túnel 6para4"
			},{
				type: "name",
				title: "Túnel 6para4",
				content: "Selecione este tipo caso seu provedor utilize implementação 6para4 para atribuição de endereços."
			},{
				type: "name",
				title: "Endereço IPv4/Máscara de Sub-rede IPv4/Gateway IPv4 Padrão/Endereço de Túnel",
				content: "Estes parâmetros serão dinamicamente gerados através da informação IPv4 da porta WAN após você clicar em Conectar."
			},{
				type: "name",
				title: "Utilize o seguinte do Servidor DNS",
				content: "Selecione o checkbox para inserir o DNS primário manualmente e/ou DNS Secundário como oferecido pelo seu provedor."
			},{
				type: "name",
				title: "Conectar",
				content: "Clique neste botão para conectar à Internet."
			},{
				type: "name",
				title: "Desconectar",
				content: "Clique neste botão para desconectar da Internet."
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: Pass-Through (Bridge)"
			},{
				type: "paragraph",
				content: "Selecione este tipo caso seu provedor utilize implementação de rede Pass-through (Bridge). Nenhuma configuração é solicitado para este tipo de conexão."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Exceto para Pass-Through (Bridge), os outros 6 tipos de conexão de Internet requerem configuração IPv6."
			},{
				type: "name",
				title: "Tipo Atribuído",
				content: "Selecione um tipo apropriado de acordo com seu provedor.",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Para automaticamente atribuir endereços IP aos clientes na LAN.",
					children: [{
						type: "name",
						title: "Prefixo de Endereço",
						content: "Insira o endereço de prefixo fornecido pelo seu provedor."
					},{
						type: "name",
						title: "Tempo de Liberação",
						content: "A duração de tempo em segundos quando o endereço IP atribuído permance válido. Mantenha o padrão de segundos de 86400 ou altere caso solicitado pelo provedor"
					},{
						type: "name",
						title: "Endereço",
						content: "É o endereço IP atribuído automaticamente pelo servidor DHCPv6 do seu provedor."
					}]
				},{
					type: "name",
					title: "SLAAC+DHCP Stateless",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefixo de Endereço",
						content: "Insira o endereço de prefixo fornecido pelo seu provedor."
					},{
						type: "name",
						title: "Endereço",
						content: "É o endereço IP automaticamente atribuído pelo provedor."
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Prefixo de Endereço",
						content: "Insira o endereço de prefixo fornecido pelo seu provedor."
					},{
						type: "name",
						title: "Endereço",
						content: "É o endereço IP automaticamente atribuído pelo provedor."
					}]
				}]
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "Clone de MAC",
			CONTENT: [{
				type: "name",
				title: "Utilizar Endereço MAC Padrão",
				content: "Não altere o endereço MAC padrão do roteador, caso o provedor não vincule o endereço IP atribuído ao endereço MAC."
			},{
				type: "name",
				title: "Utilizar Endereço MAC do Computador Atual",
				content: "Selecione para copiar o endereço MAC atual do computador que está conectado ao roteador, caso o provedor vincule o endereço IP atribuído ao endereço MAC do computador."
			},{
				type: "name",
				title: "Utilizar Endereço MAC Personalizado",
				content: "Insira o endereço MAC manualmente, caso o provedor vincule o endereço IP atribuído ao específico endereço MAC."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Ajuste de Horário",
			CONTENT: [{
				type: "step",
				title: "Para sincronizar o horário automaticamente",
				content: [
					"1. No campo Configurar Hora, selecione Obter automaticamente da Internet.",
					"2. Selecione seu Fuso Horário da lista que aparecerá.",
					"3. No campo servidor NTP I, insira o endereço IP ou nome de domínio do seu servidor STP desejado.",
					"4. No campo servidor NTP II, insira o endereço IP ou nome de domínio do segundo servidor STP desejado. (Opcional)",
					"5. Clique em Obter.",
					"6. Clique em Salvar."
				]
			},{
				type: "step",
				title: "Para configurar data e hora manualmente",
				content: [
					"1. No campo Configurar Hora, selecione Manualmente.",
					"2. Insira a Data atual.",
					"3. Selecione o Horário atual (em formato 24 horas, ex.: 16:00:00 é 04:00)",
					"4. Clique em Salvar."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Horário de Verão",
			CONTENT: [{
				type: "step",
				title: "Para configurar Horário de Verão",
				content: [
					"1. Selecione Habilitar Horário de Verão",
					"2. Selecione a data e hora quando o Horário de Verão tem seu início em sua região.",
					"3. Selecione a data e hora quando o Horário de Verão tem seu fim em sua região.",
					"4. Clique em Salvar."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Diagnósticos",
			CONTENT: [{
				type: "paragraph",
				content: "O roteador oferece ferramentas Ping e Traceroute para lhe auxiliar com solução de problemas de conectividade de rede. A ferramenta Ping envia pacotes para um endereço IP ou Nome de Domínio e mostra resultados, como número de pacotes enviados, recebidos e tempo de retorno de resposta. A ferramenta Traceroute envia pacotes para um endereço IP ou Nome de Domínio alvo e mostra o número de saltos e tempo para alcançar o destino."
			},{
				type: "paragraph",
				content: "Você pode aplicar ping ou traceroute em um dispositivo local através do endereço IP ou nome de domínio, como por exemplo: google.com, yahoo.com e etc."
			},{
				type: "step",
				title: "Para diagnósticos utilizando Ping",
				content: [
					"1. Insira o endereço IP e Nome de Domínio.",
					"2. Clique no ícone de flecha para abrir o menu Avançado e especificar a Contagem Ping e Tamanho do Pacote Ping. (Opcional)",
					"3. Clique em Iniciar."
				]
			},{
				type: "step",
				title: "Para diagnósticos utilizando Traceroute.",
				content: [
					"1. Insira o endereço IP e Nome de Domínio.",
					"2. Clique no ícone de flecha para abrir o menu Avançado e especificar o número de saltos (a serem alcançados) no campo Traceroute Max TTL. O padrão é 20. (Opcional)",
					"3. Clique em Iniciar."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Atualização de Firmware",
			CONTENT: [{
				type: "paragraph",
				content: "Antes de atualizar a firmware do roteador, você precisará baixar a mais recente atualização  do <a class=\"link\" href=\"http://www.tp-link.com.br/Support/\" target=\"_blank\">TP-Link Support</a> website para seu computador."
			},{
				type: "step",
				title: "IMPORTANTE: A fim de prevenir falha na atualização, atente-se ao seguinte:",
				content: [
					"Garanta que o arquivo mais recente da firmware esteja de acordo com a última versão (como mostrado na página de Atualização de Firmware).",
					"Garanta que você possua uma conexão estável entre o roteador e seu computador. NÃO é recomendável a atualização de firmware via wireless.",
					"Garanta a remoção de qualquer dispositivo USB de armazenamento do roteador antes da atualização de firmware a fim de evitar perda de dados.",
					"Salve sua configuração de roteador.",
					"NÃO desligue o roteador durante a atualização de firmware."
				]
			},{
				type: "step",
				title: "Para atualizar a firmware do roteador",
				content: [
					"1. Clique em Procurar.",
					"2. Localize e selecione o arquivo firmware baixado.",
					"3. Clique em Atualizar."
				]
			},{
				type: "paragraph",
				content: "O processo de atualização leva alguns minutos para se completar. Favor NÃO desligar o roteador enquanto a atualização estiver em progresso."
			}]
		},
		
		BACKUP: {	
			TITLE: "Backup",
			CONTENT: [{
				type: "paragraph",
				content: "É altamente recomendável fazer backup das configurações atuais, caso haja necessidade de recuperação do sistema para seu estado anterior ou suas configurações de fábrica."
			},{
				type: "paragraph",
				content: "Clique em Backup para salvar suas configurações atuais em seu computador. Certifique-se de que o arquivo backup esteja em local seguro e que você possa recuperar e restaurar quando necessário."
			}]
		},
		
		RESTORE: {
			TITLE: "Restaurar",
			CONTENT: [{
				type: "step",
				title: "Restaurar a partir de backup",
				content: [
					"1. Clique em Procurar.",
					"2. Localize e selecione o arquivo backup.",
					"3. Clique em Restaurar."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Restaurar Padrões de Fábrica",
			CONTENT: [{
				type: "paragraph",
				content: "Restaure o modem roteador às suas configurações de fábrica."
			},{
				type: "note",
				title: "Aviso",
				content: [
					"1. Essa restauração apagará todas as configurações feitas para o roteador. Para refazer login na página gerenciamento do roteador, utilize a palavra admin pra nome de usuário e senha.",
					"2. Favor NÃO desligar o roteador durante o processo de backup ou restauração."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Gerenciamento de Conta",
			CONTENT: [{
				type: "paragraph",
				content: "Esta página permite que você altere o nome de usuário e senha, além de configurar um endereço de email  e senha para recuperação."
			},{
				type: "name",
				title: "Nome de Usuário Antigo",
				content: "Digite seu nome de usuário atual."
			},{
				type: "name",
				title: "Senha Antiga",
				content: "Digite sua senha atual."
			},{
				type: "name",
				title: "Novo Nome de Usuário",
				content: "Digite seu nome de usuário."
			},{
				type: "name",
				title: "Nova Senha",
				content: "Digite sua nova senha."
			},{
				type: "name",
				title: "Confirmar Nova Senha",
				content: "Digite sua nova senha novamente."
			},{
				type: "note",
				title: "Aviso",
				content: "Caso decida alterar o nome de usuário atual e senha utilizada para fazer login no roteador, tome nota sobre o novo login e guarde em local seguro."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Recuperação de Senha",
			CONTENT: [{
				type: "name",
				title: "Habilitar Recuperção de Senha",
				content: "É altamente recomendável que você habilite a função de Senha de REcuperação, que ajudará a reiniciar seu nome de usuário e senha via email."
			},{
				type: "name",
				title: "De",
				content: "Insira um endereço de email válido a ser utilizado para email de saída."
			},{
				type: "name",
				title: "Para",
				content: "Insira um endereço de email válido a ser utilizado para email de entrada."
			},{
				type: "name",
				title: "Servidor SMTP",
				content: "Insira o endereço de servidor SMTP que o roteador utiliza para enviar o código de verificação via email."
			},{
				type: "name",
				title: "Habilitar Autenticação",
				content: "Selecione Habilitar Autenticação caso o servidor de email de saída solicitação autenticação para enviar email, e complete os campos de Nome de Usuário e Senha. Estes campos são suscetíveis a letras maíuscula se minúsculas."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Gerenciamento Local",
			CONTENT: [{
				type: "paragraph",
				content: "Esta seção permite que você limite o número de dispositivos clientes em sua LAN de acessar o roteador utilizando o endereço MAC de autenticação."
			},{
				type: "name",
				title: "Acesso para Todos Dispositivos LAN Conectados ",
				content: "Alterne para On para habilitar gerenciamento para todos os dispositivos ou Off para habilitar o gerenciamento para um dispositivo específico."
			},{
				type: "name",
				title: "Endereço MAC",
				content: "Mostra o endereço  MAC do dispositivo de acesso limitado."
			},{
				type: "name",
				title: "Descrição",
				content: "Mostra a descrição do dispositivo com limite de acesso."
			},{
				type: "name",
				title: "Ativo",
				content: "Mostra o status atual do dispositivo com limitado (habilitado ou desabilitado)"
			},{
				type: "name",
				title: "Modificar",
				content: "Mostra opções para Modificar e Apagar o dispositivo correspondente da lista."
			},{
				type: "step",
				title: "Para adicionar um dispositivo cliente à lista",
				content: [
					"1. Clique em Adicionar.",
					"2. Clique em Visualizar Dispositivos Existentes para escolher um dispositivo ou insira o endereço MAC de um dispositivo no campo de Endereço MAC.",
					"3. Insira uma Descrição para o dispositivo.",
					"4. Selecione Habilitar Esta Entrada.",
					"5. Clique em OK."
				]
			},{
				type: "step",
				title: "Para modificar ou apagar um dispositivo da lista",
				content: "Na tabela, clique no ícone Editar ou ícone de Lixeira que corresponde ao dispositivo que você deseja modificar ou apagar."
			},{
				type: "step",
				title: "Para apagar dispositivos múltiplos",
				content: "Selecione todos os dispositivos que deseja apagar e clique em Apagar."
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Gerenciamento Remoto",
			CONTENT: [{
				type: "paragraph",
				content: "O Gerenciamento Remoto permite acesso ao roteador e configuração via remota pela Internet."
			},{
				type: "name",
				title: "Desabilitar Gerenciamento Remoto",
				content: "Selecione esta opção para desabilitar o gerenciamento remoto."
			},{
				type: "name",
				title: "Habilitar Gerenciamento Remoto para Todos os Dispositivos",
				content: "Selecione esta opção para habilitar a função para todos os endereços IPs. Caso selecionado, insira o campo de Porta de Gerenciamento Web."
			},{
				type: "name",
				title: "Habilitar Gerenciamento Remoto para Dispositivos Específicos",
				content: "Selecione esta opção para habilitar o gerenciamento remoto para um endereço IP específico. Caso selecionado, insira os campos Porta de Gerenciamento Web e Endereço IP de Gerenciamento Remoto."
			},{
				type: "name",
				title: "Porta de Gerenciamento Web",
				content: "Insira o número de porta, entre 1024 e 65535, que é utilizada para acessar a interface de gerenciamento web do roteador com maior segurança. Normalmente, os navegadores utilizam o a porta de serviço HTTP 80. O padrão e porta de serviço comum é 8080, que é uma porta de serviço alternativa de HTTP."
			},{
				type: "name",
				title: "Gerenciamento Remoto de Endereço IP",
				content: "Insira um endereço IP válido ou um intervalo IP com permissão de acessar o roteador."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Log de Sistema",
			CONTENT: [{
				type: "paragraph",
				content: "A página de Log de Sistema mostra uma lista das atividades mais recentes do roteador. Você pode definir que tipos e/ou níveis de logs você deseja visualizar. Esta página também possui a função de Email que você pode configurar automaticamente enviando arquivos log para um endereço de email específico, ou exportá-los para o computador."
			},{
				type: "name",
				title: "Tipo",
				content: "Selecione o tipo de log de sistema a ser exibido."
			},{
				type: "name",
				title: "Nível",
				content: "Selecione o nível de log de sistema a ser exibido."
			},{
				type: "name",
				title: "Atualizar",
				content: "Clique neste ícone para atualizar o log de sistema."
			},{
				type: "name",
				title: "Apagar Todos",
				content: "Clique neste ícone para apagar todos os logs de sistema."
			},{
				type: "name",
				title: "Salvar Log",
				content: "Clique neste botão para baixar todos os arquivos de sistema log para seu computador local."
			},{
				type: "name",
				title: "Configuração de Envio",
				content: "Clique neste botão para configurar os ajustes de email para sistema"
			},{
				type: "step",
				title: "Para configurar os ajustes de email para logs de sistema",
				content: [
					"1. Clique em Configurações de Email.",
					"2. De - Insira o endereço de email válido a ser utilizado para email de saída.",
					"3. Para - Insira o endereço de email válido a ser utilizado para email de saída.",
					"4. Servidor SMTP - Insira o endereço de servidor SMTP que o roteador utiliza para enviar logs de sistema via email.",
					{
						content: "5. Habilitar Autenticação - Selecione esta opção caso o servidor SMTP solicite autenticação para envio de emails.",
						children: [{
							type: "name",
							title: "Nome de usuário",
							content: "Insire o nome de usuário para o servidor  SMTP. Este campo é também suscetível à letras maiúsculas e minúsculas."
						},{
							type: "name",
							title: "Senha",
							content: "Insira a senha para o servidor SMTP. Este campo é também suscetível à letras maiúsculas e minúsculas."
						}]
					},{
						content: "6. Habilitar Emails Automáticos - Selecione esta fução para especificar o horário do dia o log de sistema deve ser enviado automaticamente.",
						children: [{
							type: "paragraph",
							content: "Para enviar log de sistema diariamente em um horário específico, insira as  Horas (HH) e os Minutos (MM) em formato 24h, ex.: 16:00 é 4pm."
						},{
							type: "paragraph",
							content: "Para enviar logs de sistema em horário específico ou intervalo de tempo, insira os números das horas."
						}]
					},
					"7. Clique em Salvar."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Estatísticas de Tráfego",
			CONTENT: [{
				type: "paragraph",
				content: "A página de  Estatísticas de Tráfego mostra o tráfego de rede da LAN, WAN e envio e recebimento de pacote WLAN."
			},{
				type: "name",
				title: "Estatísticas de Tráfego",
				content: "Alterne para On para mostrar informações de estatísticas."
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Lista de Estatísticas de Tráfego",
			CONTENT: [{
				type: "name",
				title: "Endereço IP/Endereço MAC",
				content: "Mostra os endereços IP e MAC do dispositivo cliente associado."
			},{
				type: "name",
				title: "Pacotes Totais",
				content: "Mostra o número total de pacotes transmitidos e recebidos pelo dispositivo cliente desde o ínicio da sessão ou desde o último reinício do contador."
			},{
				type: "name",
				title: "Bytes Totais",
				content: "Mostra o número total de bytes transmitidos e recebidos pelo dispositivo cliente desde o ínicio da sessão ou desde o último reinício do contador."
			},{
				type: "name",
				title: "Pacotes Atuais",
				content: "Mostra o número atual de pacotes transmitidos e recebidos em um intervalo de tempo específico."
			},{
				type: "name",
				title: "Bytes Atuais",
				content: "Mostra o número atual de bytes transmitidos e recebidos em um intervalo de tempo específico."
			},{
				type: "name",
				title: "Modificar",
				content: "Mostra opções de Reinício (do zero) e Apaga a estatística correspondente da lista."
			},{
				type: "name",
				title: "Atualizar",
				content: "Clique para atualizar a informação estatística na página."
			},{
				type: "name",
				title: "Reiniciar Todos",
				content: "Clique para reiniciar todos os valores na lista do zero,"
			},{
				type: "name",
				title: "Apagar Todos",
				content: "Clique para apagar toda a informação de estatística da lista"
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "Wireless 2.4GHz/5GHz",
			CONTENT: [{
				type: "name",
				title: "Intervalo Beacon",
				content: "Insira um valor entre 40 e 1000 em milisegundos para determinar a duração entre pacotes beacon que são transmitidos pelo roteador para sincronizar a rede wireless. O padrão é de 100 milisegundos."
			},{
				type: "name",
				title: "Limite RTS",
				content: "Insira um valor entre 1 e 2346 para determinar o tamanho do pacote de transmissão de dados através do roteador. Por padrão, o tamanho RTS (Request To Send) Threshold é 2346. Caso o tamanho do pacote for maior que a preconfiguração threshold, o roteador envia frames RTS a um estação de recepção particular e negocia o envio de frames de dados ou então o pacote será enviado imediatamente."
			},{
				type: "name",
				title: "Intervalo DTIM",
				content: "Este valor determina o intervalo DTIM (Mensagem Indicação de Tráfego de Entrega). Insira um valor entre 1 e 15 intervalos beacon. O valor padrão é 1, indica que o intervalo DTIM é o mesmo que o Intervalo Beacon."
			},{
				type: "name",
				title: "Período de Atualização de Chave de Grupo",
				content: "Insira o número de segundos (mínimo 30) para controlar o intervalo de tempo para renovação automática de chave de criptografia. O padrão é 0, indicando nenhuma renovação de chave."
			},{
				type: "name",
				title: "Função WMM",
				content: "A função WMM garante pacotes com mensagens de alta prioridade sendo transmitidas preferencialmente. É habilitado por padrão e altamente recomendado."
			},{
				type: "name",
				title: "Função Short GI",
				content: "Esta função está habilitada por padrão e recomendada para aumentar a capacidade de dados reduzindo o tempo de Intervalo de Guarda (GI)."
			},{
				type: "name",
				title: "Isolamento AP",
				content: "Caso queira confinar e restringir todos os dispositivos wireless conectados à sua rede de interação mútua, ainda assim capazes de acessar a Internet, selecione Habilitar Isolamento AP."
			},{
				type: "name",
				title: "TX Beamforming",
				content: "A Transmissão Beamforming é uma técnica de processamento de sinal utilizada em grupos de sensores para transmissão de sinal direcional. Caso habilitada, será utilizada no fim da transmissão, a fim de reforçar o sinal de Wi-Fi e estender a cobertura Wi-Fi."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "Habilitar WDS Bridging",
				content: "Habilite WDS (Wireless Distribution System) para permitir o roteador a fazer ponteamento para outro access point (AP) e uma rede de área local wireless (WLAN). Caso esta função esteja habilitada, configure os seguintes:",
				children: [{
					type: "name",
					title: "SSID (a ser ponteado)",
					content: "Insira o SSID do WAP (Wireless Access Point) que o roteador irá conectar como cliente ou utilize a função de Pesquisa para encontrar todas as redes disponíveis."
				},{
					type: "name",
					title: "Pesquisa",
					content: "Clique neste botão para escanear e exibir informações como SSID, BSSID, força de sinal, canal e segurança de informação de todos as redes disponíveis. Uma vez que você selecionou a rede, o SSID, Endereço MAC e Segurança serão automaticamente preenchido."
				},{
					type: "name",
					title: "Endereço MAC (a ser ponteado)",
					content: "Insira o endereço MAC do access point wireless (BSSID) em 12 caracteres hexadecimais (0-9, a-f, A-F) separado por hífens que o roteador irá conectar como cliente. Caso você escolha o AP desejado através da função de Pesquisa, o campo de endereço MAC será preenchido automaticamente."
				},{
					type: "name",
					title: "Segurança",
					content: "Selecione o tipo segurança correta do access point selecionado, número, WPA-PSK/WPA2-PSK ou WEP. Caso escolha o AP através da Pesquisa, o campo de segurança é automaticamente preenchido.",
					children: [{
						type: "name",
						title: "Senha",
						content: "Esta opção está disponível quando o tipo de segurança for WPA-PSK/WPA2-PSK ou WEP. Insira a senha de segurança do access point selecionado."
					},{
						type: "name",
						title: "Autenticação. Tipo",
						content: "Esta opção está disponível somente quando o tipo de segurança for WEP (Wired Equivalent Privacy). Selecione o tipo de autenticação apropriada utilizada(Auto, Sistema Aberto ou Chave Compartilhada) do access point selecionado."
					},{
						type: "name",
						title: "Formato de Chave WEP",
						content: "Esta opção está disponível somente quando o tipo de segurança for WEP. Selecione o formato de chave (ASCII ou Hexadecimal) utilizado do AP selecionado."
					}]
				}]
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Selecione Habilitar WPS e clique em Salvar para habilitar o WPS (Wi-Fi Protected Setup) que permite que você  configure facilmente e conecte dispositivos WPS através do botão de mesmo nome."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Selecione Habilitar NAT e clique em Salvar para habilitar a função NAT (Network Address Translation)."
			},{
				type: "note",
				title: "Aviso",
				content: "Quando a função NAT está desabilitado, o Direcionamento NAT não terá efeito, tampouco a função NAT Boost."
			},{
				type: "name",
				title: "NAT Boost",
				content: "Selecione Habilitar NAT Boost e clique em Salvar para garantir que seu roteador tenha o melhor rendimento."
			},{
				type: "note",
				title: "Aviso",
				content: "Quando a função NAT Boost está habilitada, a função QoS e Estatísticas de Tráfego serão desabilitadas automaticamente."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "Configurações de Nível de Proteção DoS",
			CONTENT: [{
				type: "paragraph",
				content: "O Nível de Proteção DoS protege o roteador de ataques ICMP-FLOOD, UDP-FLOOD e TCP-FLOOD."
			},{
				type: "name",
				title: "Nível de Pacotes ICMP-FLOOD",
				content: "Insira um valor entre 5 e 7200 de pacotes ICMP para disparar proteção ICMP-FLOOD imediatamente quando o número de pacotes excede o valor de preconfiguração threshold."
			},{
				type: "name",
				title: "Nível de Pacotes UDP-FLOOD",
				content: "Insira um valor entre 5 e 7200 de pacotes UDP para disparar proteção UDP-FLOOD imediatamente quando o número de pacotes exceder o valor de preconfiguração threshold"
			},{
				type: "name",
				title: "Nível de Pacotes TCP-FLOOD",
				content: "Insira um valor entre 5 e 7200 TCP-SYN para disparar a proteção TCP-SYN-FLOOD imediatamente quando o número de pacotes excederem o valor de preconfiguração threshold."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Duplex",
			CONTENT: [{
				type: "name",
				title: "Duplex",
				content: "Selecione o tipo duplex na lista a seguir"
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "Controle de LED",
			CONTENT: [{
				type: "name",
				title: "Habilitar Modo Noturno",
				content: "Selecione este modo para desligar os LEDs durante o modo noturno sem afetar o desempenho do roteador."
			},{
				type: "name",
				title: "Período de Modo Noturno",
				content: "Especifique um período de tempo cujo o modo noturno se aplique."
			},{
				type: "paragraph",
				content: "Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "Com esta função, você pode utilizar a Internet para acessar sua rede com segurança quando estiver fora de casa. Para utilizar o Serviço VPN, você precisa configurar o Serviço DNS Dinâmico (recomendado) ou atribuir um endereço IP estático para a porta WAN do roteador. E o seu Sistema de Horário deve estar sincronizado com a Internet,"
			},{
				type: "name",
				title: "Habilitar Servidor VPN",
				content: "Selecione para habilitar o Servidor OpenVPN"
			},{
				type: "name",
				title: "Tipo de Serviço",
				content: "Selecione o protocolo de comunicação para o servidor OpenVPN: UDP ou TCP."
			},{
				type: "name",
				title: "Porta de Serviço",
				content: "Insira o número de porta de comunicação entra 1024 e 65535. O padrão e porta de serviço comum é 1194."
			},{
				type: "name",
				title: "Sub-rede VPN/Sub-Máscara ",
				content: "Insira a variação de endereços IP que podem ser concedidos aos clientes através do servidor OpenVPN."
			},{
				type: "name",
				title: "Acesso para Cliente",
				content: "Selecione o tipo de acesso para seu cliente OpenVPN.",
				children: [{
					type: "name",
					title: "Somente Rede Residencial",
					content: "Cliente podem somente acessar a rede residencial. O roteador padrão do cliente não será alterado."
				},{
					type: "name",
					title: "Internet e Rede Residencial",
					content: "Clientes podem acessar a rede residencial, sites da Internet ou serviços com limitação geográfica quando estiver fora do país. O roteador padrão do cliente será alterado."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Certificado",
			CONTENT: [{
				type: "paragraph",
				content: "Utilize o certificado para informação e identidade da conexão VPN para clientes remotos."
			},{
				type: "name",
				title: "Gerar",
				content: "Cllique para gerar um novo certificado."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Tipo de Configuração",
			CONTENT: [{
				type: "paragraph",
				content: "Clientes remotos irão utilizar o arquivo de configuração para acessar seu roteador."
			},{
				type: "name",
				title: "Exportar",
				content: "Clique para salvar o arquivo de configuração OpenVPN."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "Guia de Instalação Cliente VPN",
			CONTENT: [{
				type: "step",
				title: "Para conectar seus dispositivos clientes para o servidor OpenVPN:",
				content:[{
					type: "paragraph",
					content: "Antes de configurar o servidor OpenVPN, favor configurar o Serviço DNS Dinâmico (recomendado) ou atribua um endereço IP estático para a porta WAN. Favor garantir que a porta externa das configurações NAT não seja 1723 e seu Sistema de Horário esteja sincronizado com a Internet."
				},
					"1. Selecione Habilitar Servidor VPN.",
					"2. Configure os parâmetros de servidor OpenVPN (Tipo de Serviço, Porta de Serviço, Acesso de Cliente e VPN Sub-rede/Máscara de Rede) e clique em Salvar.",
					"3. Clique em Exportar para salvar o arquivo de configuração.",
					"4. Nos seus dispositivos clientes, baixe e instale o utilitário cliente Open VPN de  <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> As plataformas oficiais suportadas incluem Windows, Mac OSX e Linux.",
					"5. Inicie o utilitário cliente OpenVPN e adicione uma nova conexão VPN utilizando o arquivo de configuração salvo para conectar seu dispositivo cliente ao servidor VPN."
				]},{
					type: "note",
					title: "Aviso",
					content: "Para aprender mais sobre clientes OpenVPN clients, visite <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Com PPTP VPN, você pode utilizar a Internet para acessar sua rede rapidamente para acessar sua rede quando estiver longe de casa. Isto pode ser prevenido por alguns provedor. Para utilizar o Serviço VPN, você precisa configurar o Serviço DNS Dinâmico (recomendado) ou atribuir um endereço IP estático para a porta WAN do roteador. E o seu Sistema de Horário deve estar sincronizado com a Internet,"
			},{
				type: "name",
				title: "Habilitar Servidor VPN",
				content: "Selecione para habilitar o Servidor PPTP VPN."
			},{
				type: "name",
				title: "Endereço IP Cliente",
				content: "Insira a variação de endereços (até 10 clientes) que podem ser concedidos pelo servidor PPTP VPN"
			},{
				type: "name",
				title: "Permitir acesso Samba (Local de Rede)",
				content: "Selecione para permitir que seu cliente VPN acesse seu servidor Samba."
			},{
				type: "name",
				title: "Permitir passagem NetBIOS",
				content: "Selecione para permitir seu cliente VPN para acessar seu servidor Samba utilizando nome NetBIOS."
			},{
				type: "name",
				title: "Permitir conexões descriptografadas",
				content: "Selecione para permitir conexões descriptografadas ao seu servidor VPN."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Lista de Contas",
			CONTENT: [{
				type: "paragraph",
				content: "Esta tabela exibe as contas que podem ser utilizadas para conectar ao servidor VPN PPTP pelos clientes remotos."
			},{
				type: "step",
				title: "Para adicionar uma conta PPTP VPN",
				content: [
					"1. Clique em Adicionar.",
					"Introduza o nome do utilizador e palavra-passe para autenticar os clientes no servidor PPTP VPN.",
					"3. Clique em OK."
				]
			},{
				type: "step",
				title: "Para modificar ou apagar uma conta",
				content: "Na tabela, clique no ícone Editar ou na Lixeira que corresponde a conta que você deseja modificar ou apagar."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "Guia de Instalação Cliente VPN",
			CONTENT: [{
				type: "step",
				title: "Para conectar seus dispositivos clientes ao servidor PPTP VPN:",
				content:[{
					type: "paragraph",
					content: "Antes de configurar o servidor PPTP VPN, favor configurar o serviço DNS Dinâmico (recomendável) ou atribua um endereço IP estático para a porta WAN. Favor garantir que a porta externa das configurações NAT não seja 1723 e seu Sistema de Horário esteja sincronizado com a Internet."
				},
					"1. Selecione Habilitar Servidor VPN.",
					"2. Configure o servidor VPN PPTP e clique em Salvar.",
					"3. Nos seus dispositivos de clientes, crie uma conexão PPTP VPN. As plataformas oficiais suportadas incluem Windows, Mac OSX, Linux, iOS e Android.",
					"4. Inicie o programa VPN PPTP, adicione uma nova conexão e insira o nome de domínio do serviço DDNS registrado ou o endereço IP estático atribuído à porta WAN, para conectar seu dispositivo cliente ao servidor VPN PPTP."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "Conexões VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Esta página mostra os clientes que estão atualmente conectados ao OpenVPN e servidor VPN PPTP hospedados no roteador."
			},{
				type: "paragraph",
				content: "Clique no ícone de subtração para desconectar o cliente correspondente."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Status da Internet",
				content: "Mostra o status da conexão de Internet do roteador."
			},{
				type: "name",
				title: "Tipo de Conexão",
				content: "Mostra o tipo de conexão de Internet"
			},{
				type: "name",
				title: "Endereço IP",
				content: "Mostra o endereço IP atual atribuído ao roteador."
			},{
				type: "name",
				title: "Conexão Secundária/Endereço IP",
				content: "Mostra o tipo de conexão secundária e o endereço IP."
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Roteador",
			CONTENT: [{
				type: "title",
				title: "Wireless 2.4GHz/5GHz"
			},{
				type: "name",
				title: "SSID",
				content: "Exibe o nome da rede wireless atual da frequência de banda de 2.4GHz/5GHz."
			},{
				type: "name",
				title: "Canal",
				content: "Mostra o canal em que a rede de 2.4GHz/5GHz transmite."
			},{
				type: "name",
				title: "MAC",
				content: "Exibe o endereço MAC atual da rede wireless 2.4GHz/5GHz."
			},{
				type: "title",
				title: "Rede para Convidados 2.4GHz/5GHz"
			},{
				type: "name",
				title: "Ativo",
				content: "Mostra se a Rede para Convidados wireless de 2.4GHz/5GHz está habilitada (On) ou desabilitada (Off)."
			},{
				type: "name",
				title: "SSID",
				content: "Mostra o nome da rede wireless da Rede para Convidados."
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Clientes Cabeados/Wireless",
			CONTENT: [{
				type: "name",
				title: "Nome",
				content: "Mosta o nome do cliente conectado ao roteador."
			},{
				type: "name",
				title: "Endereço IP",
				content: "Mostra o endereço IP atribuído do cliente."
			},{
				type: "name",
				title: "Endereço MAC",
				content: "Mostra o endereço MAC do cliente."
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Impressora",
			CONTENT: [{
				type: "name",
				title: "Nome",
				content: "Mostra o nome da a impressora conectada ao roteador via porta USB."
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "Disco USB",
			CONTENT: [{
				type: "name",
				title: "Disco USB",
				content: "Mosta o nome do disco USB conectado ao roteador."
			},{
				type: "name",
				title: "Total",
				content: "Mostra a capacidade de armazenamento total do dispositivo USB conectado. "
			},{
				type: "name",
				title: "Disponível",
				content: "Mostra a capacidade de armazenamento disponível do dispositivo USB conectado. "
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Auto Detectar",
				content: "Clique neste botão para que o roteador detecte automaticamente seu tipo de conexão de Internet atual."
			},{
				type: "note",
				title: "Aviso",
				content: "Caso não tenha certeza sobre o tipo de conexão de Internet que você possui, utilize a função de Auto Detectar ou contato seu provedor para assistência."
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: IP Estático",
			},{
				type: "name",
				title: "Endereço IP/Máscara de Sub-rede/Gateway Padrão/DNS Primário/DNS Secundário",
				content: "Insira a informação fornecida pelo seu provedor. "
			},{
				type: "title",
				title: "Internet Connection Type: IP Dinâmico",
			},{
				type: "name",
				title: "NÃO CLONAR o Endereço MAC/Endereço MAC do Computador Atual",
				content: "Selecione caso queira clonar seu endereço MAC, de acordo com seu provedor."
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: PPPoE",
			},{
				type: "name",
				title: "Nome de Usuário/Senha",
				content: "Insira o nome de usuário e a senha fornecidos pelo seu provedor. Estes campos são suscetíveis a letras maíuscula se minúsculas."
			},{
				type: "title",
				title: "Tipo de Conexão de Internet: L2TP/PPTP",
			},{
				type: "name",
				title: "Nome de Usuário/Senha",
				content: "Insira o nome de usuário e a senha fornecidos pelo seu provedor. Estes campos são suscetíveis a letras maíuscula se minúsculas."
			},{
				type: "name",
				title: "Conexão Secundária (IP Dinâmico ou Estático)",
				children: [{
					type: "name",
					title: "IP Dinâmico",
					content: "Selecione caso o endereço IP e máscara sub-rede são atribuídos automaticamente pelo provedor."
				},{
					type: "name",
					title: "IP Estático",
					content: "Selecione se o endereço IP e a máscara de sub-rede forem providos pelo provedor, e insire estas informações nos campos correspondentes."
				}]
			},{
				type: "name",
				title: "IP Servidor VPN/Nome de Domínio",
				content: "Insira o endereço IP de servidor VPN ou nome de domínio fornecidos pelo seu provedor."
			},{
				type:"paragraph",
				content:"Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Configurações Wireless",
			CONTENT: [{
				type: "name",
				title: "Habilitar Rádio Wireless",
				content: "Selecione esta opção para habilitar a frequência de rádio wireless de 2.4GHz/5GHz."
			},{
				type: "name",
				title: "Nome de Rede (SSID)",
				content: "Você pode deixar o SSID padrão ou estabelecer um novo nome (até 32 caracteres). Este campo é suscetível à letras maíusculas e minúsculas."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Selecione esta opção caso queira ocultar o nome da rede de 2.4GHz/5GHz da lista de rede Wi-Fi."
			},{
				type: "name",
				title: "Senha",
				content: "Insira uma senha wireless entre 8 e 63 caracteres ASCII, ou entre  8 e 64 hexadecimal caracteres. Este campo é suscetível à letras maíusculas e minúsculas."
			},{
				type:"paragraph",
				content:"Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Configurações do Dispositivos",
			CONTENT: [{
				type: "paragraph",
				content: "A página de Configurações do Dispositivo mostra as informações de qualquer dispositivo de armazenamento USB conectado através da porta USB. "
			},{
				type: "name",
				title: "Buscar",
				content: "Normalmente, o roteador detecta automaticamente qualquer dispositivo conectado. Caso contrário, clique neste botão para procurar por algum dispositivo conectado recentemente e atualize a página com as novas informações."
			},{
				type: "name",
				title: "Volume",
				content: "Mostra o nome do volume USB"
			},{
				type: "name",
				title: "Capacidade",
				content: "Mostra a capacidade de armazenamento USB total."
			},{
				type: "name",
				title: "Espaço Livre",
				content: "Mostra o espaço livre disponível atual para armazenamento."
			},{
				type: "name",
				title: "Remover com Segurança",
				content: "Clique neste botão para desconectar um dispositivo USB do roteador antes de fazê-lo fisicamente.",
				children: [{
					type: "paragraph",
					content: "Observe que o botão Remover com Segurança aparece somente quando há algum dispositivo USB de armazenamento conectado ao roteador, e você não poderá removê-lo enquanto seu volume estiver ocupado."
				}]
			},{
				type: "name",
				title: "Ativo",
				content: "Esta tabela aparece somente quando há um dispositivo USB conectado ao roteador. Selecione para habilitar o compartilhamento de arquivos do dispositivo USB."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Configurações de Compartilhamento",
			CONTENT: [{
				type: "name",
				title: "Rede/Nome de Servidor de Mídia",
				content: "Mostra o nome utilizado para acessar o dispositivo de armazenamento USB conectado."
			},{
				type:"paragraph",
				content:"Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Compartilhamento de Pasta",
			CONTENT: [{
				type: "name",
				title: "Compartilhar Todos",
				content: "Alterne para On para compartilhar todos os arquivos e pastas ou Off mpara compartilhar somente as pastas selecionadas."
			},{
				type: "name",
				title: "Habilitar Autenticação",
				content: "É recomendável habilitar autenticação para solicitar aos usuários quando acessarem as pastas de compartilhamento, inserirem um nome de usuário e senha."
			},{
				type: "name",
				title: "Nome da Pasta",
				content: "Mostra o nome da Pasta de Compartilhamento"
			},{
				type: "name",
				title: "Caminho da Pasta",
				content: "Exibe o caminho para a pasta compartilhada."
			},{
				type: "name",
				title: "Compartilhamento de Mídia",
				content: "Indica se a pasta de compartilhamento tem permissão para compartilhamento de mídia ou não."
			},{
				type: "name",
				title: "Nome do Volume",
				content: "Mostra o nome da Pasta de Compartilhamento"
			},{
				type: "name",
				title: "Ativo",
				content: "Indica o staus da pasta compartilhada através do indicador em formato de lâmpada."
			},{
				type: "name",
				title: "Modificar",
				content: "Exibe opções para Modificar ou Apagar a pasta compartilhada correspondente."
			},{
				type: "name",
				title: "Adicionar",
				content: "Clique neste botão para criar uma nova entrada."
			},{
				type: "name",
				title: "Apagar",
				content: "Clique neste botão para remover a entrada selecionada da tabela."
			},{
				type: "name",
				title: "Buscar",
				content: "Clique para procurar uma pasta compartilhada"
			},{
				type: "name",
				title: "Permitir Acesso Rede para Convidados",
				content: "Selecione permitir clientes na Rede para Convidados para acessar pastas de compartilhamentos."
			},{
				type: "name",
				title: "Habilitar Autenticação",
				content: "Selecione para solicitar usuários a acessarem as pastas compartilhadas com um nome de usuário e senha válidos."
			},{
				type: "name",
				title: "Habilitar Permissão Editar",
				content: "Selecione para permitir usuários a fazerem alterações no conteúdo da pasta."
			},{
				type: "name",
				title: "Habilitar Compartilhamento de Mídia.",
				content: "Selecione para habilitar compartilhamento de mídia."
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Servidor de Impressora",
			CONTENT: [{
				type: "name",
				title: "Servidor de Impressora",
				content: "Alterne para On para habilitar a função de servidor de impressão."
			},{
				type: "name",
				title: "Nome de Impressora",
				content: "Mostra o nome da sua impressora conectada ao roteador."
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Controle dos Pais",
			CONTENT: [{
				type: "name",
				title: "Controle dos Pais",
				content: "Alterne para On para habilitar a função de Controle dos Pais. Por padrão, esta função é desabilitada."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Dispositivos Sob Controle dos Pais",
			CONTENT: [{
				type: "paragraph",
				content: "Exibe a lista de dispositivo sob Controle dos Pais."
			},{
				type: "name",
				title: "Nome do Dispositivo",
				content: "Mostra o nome de todos os dispositivos clientes conectados que estão atualmente sob o Controle dos Pais."
			},{
				type: "name",
				title: "Endereço MAC",
				content: "Mostra o endereço MAC de todos os dispositivos de clientes conectados que estão sob o Controle dos Pais."
			},{
				type: "name",
				title: "Tempo de Acesso à Internet",
				content: "Exibe o período de tempo de restrição de acesso. O agendamento tem efeito baseado no horário do sistema do roteador que pode ser configurado em Ferramentas de Sistema > Configurações de Hora"
			},{
				type: "name",
				title: "Descrição",
				content: "Mostra uma breve descrição do dispositivo conectado. Esta é uma configuração opcional."
			},{
				type: "name",
				title: "Ativo",
				content: "Mostra o status (habilitado ou desabilitado) do Controle dos Pais do dispositivo correspondente."
			},{
				type: "name",
				title: "Modificar",
				content: "Exibe opções para Modificar ou Apagar a pasta de compartilhamento correspondente."
			},{
				type: "step",
				title: "Para restringir um dispositivo de um novo cliente",
				content:[
					"1. Clique em Adicionar.",
					"2. Clique em Visualizar Dispositivos Existente e escolha um dispositivo conectado atualmente da Lista de Dispositivos de Acesso; ou insira o Nome doDispositivo e Endereço MAC manualmente para adicionar um dispositivo que não está conectado.",
					"3. Clique no ícone de Tempo de Acesso à Internet para especificar um período enquanto a restrição for aplicável.",
					"4. Insira uma breve descrição no campo Descrição. (Opcional)",
					"5. Selecione Habilitar Esta Entrada.",
					"6. Clique em OK."
				]
			},{
				type: "paragraph",
				content: "Para modificar ou apagar uma entrada de Controle dos Pais, clique no ícone Editar ou na Lixeira para apagar a entrada correspondente."
			},{
				type: "paragraph",
				content: "Para apagar múltiplas entradas, selecione todas as entradas e clique em apagar na tabela."
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Rede para Convidados",
			CONTENT: [{
				type: "paragraph",
				content: "A Rede para Convidados permite que você configure e separe rede com um nome senha diferentes (SSID) onde os convidados podem utilizar para acessar sua rede Wi-Fi."
			},{
				type: "name",
				title: "Permitir convidados ver uns aos outros",
				content: "Selecione esta caixa para permitir dispositivos wireless na Rede para Convidados visualizar uns aos outros."
			},{
				type: "name",
				title: "Permitir convidados acessarem minha rede local",
				content: "Selecione esta opção para permitir que dispositivos wireless na Rede para Convidados possam acessar seus compartilhamentos e impressoras da rede local."
			},{
				type: "name",
				title: "Habilitar Rede para Convidados",
				content: "Selecione esta caixa para habilitar a função de Rede para Convidados."
			},{
				type: "name",
				title: "Nome de Rede (SSID)",
				content: "Utilize o SSID para Convidado padrão ou crie um novo nome (de até 32 caracteres)."
			},{
				type: "name",
				title: "Ocultar SSID",
				content: "Selecione esta opção caso queira ocultar o SSID para Convidados da lista de rede Wi-Fi."
			},{
				type: "name",
				title: "Senha",
				content: "Utilize a senha gerada aleatoriamente ou crie uma senha entre 8 e 63 caracteres ASCII ou hexadecimais (0-9, a-f, A-F)."
			},{
				type:"paragraph",
				content:"Clique em Save (Salvar) para confirmar as alterações."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link Cloud",
			CONTENT:[{
				type:"paragraph",
				content:"O serviço TP-Link Cloud permite monitorar remotamente sua rede em tempo real, acessar e gerenciar seus dispositivos TP-Link a partir da Internet a qualquer hora e em qualquer lugar."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Informações sobre Conta",
			CONTENT:[{
				type:"paragraph",
				content:"Displays your TP-Link ID information. You can edit the account information by clicking the Edit icon."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Informação do Dispositivo",
			CONTENT:[{
				type:"paragraph",
				content:"Mostra informações de seu dispositivos, incluindo a conta cloud que está gerenciando o dispositivo."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Contas Vinculadas",
			CONTENT:[{
				type:"paragraph",
				content:"Esta tabela mostra todas as contas cloud que estão vinculadas ao dispositivo atualmente."
			},{
				type:"step",
				title:"Para vincular uma conta de usuário",
				content:["1. Clique em Vincular.",
				"2. Insira o email registrado que deseja  vincular.",
				"3. Clique em Salvar."]
			}]

		}

	};
})(jQuery);

