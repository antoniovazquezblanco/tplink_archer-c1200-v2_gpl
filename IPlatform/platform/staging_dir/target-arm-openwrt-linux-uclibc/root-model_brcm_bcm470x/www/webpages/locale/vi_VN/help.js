(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị thông tin liên quan đến kết nối Wide Area Network (Internet)"
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Địa chỉ vật lý duy nhất được gán cho cổng WAN đi Internet của Router"
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Địa chỉ IP được gán cho cổng WAN đi Internet của Router. Nếu địa chỉ IP hiển thị là 0.0.0.0, có nghĩa là không có kết nối Internet"
			},{
				type: "name",
				title: "Subnet Mask",
				content: "Thông số này xác định phần mạng và phần máy chủ của một địa chỉ IP"
			},{
				type: "name",
				title: "Gateway mặc định",
				content: "Địa chỉ IP dùng để kết nối Router đến mạng"
			},{
				type: "name",
				title: "DNS thứ nhất/DNS thứ hai",
				content: "Hệ thống tên miền (DNS) dịch tên máy chủ và tên miền Internet thành địa chỉ IP. Thông tin của các máy chủ DNS được gán thông qua nhà cung cấp dịch vụ Internet"
			},{
				type: "name",
				title: "Dạng kết nối",
				content: "Dạng kết nối hiện tại của cổng Internet (WAN)"
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Địa chỉ vật lý duy nhất được gán cho cổng WAN đi Internet của Router"
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Địa chỉ IPv6 được gán cho cổng WAN đi Internet của Router."
			},{
				type: "name",
				title: "Gateway mặc định",
				content: "Địa chỉ IP dùng để kết nối Router đến mạng"
			},{
				type: "name",
				title: "DNS thứ nhất/DNS thứ hai",
				content: "Hệ thống tên miền (DNS) dịch tên máy chủ và tên miền Internet thành địa chỉ IP. Thông tin của các máy chủ DNS được gán thông qua nhà cung cấp dịch vụ Internet"
			},{
				type: "name",
				title: "Dạng kết nối",
				content: "Dạng kết nối hiện tại của cổng Internet (WAN)"
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "Không dây",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị thông tin liên quan đến mạng không dây"
			},{
				type: "name",
				title: "Tên mạng không dây (SSID)",
				content: "Tên mạng không dây, còn được biết là SSID (Service Set Identifier)"
			},{
				type: "name",
				title: "Vô tuyến không dây",
				content: "Trạng thái hiện tại (Mở hoặc Tắt) của mạng không dây"
			},{
				type: "name",
				title: "Chế độ",
				content: "Chế độ không dây hiện tại"
			},{
				type: "name",
				title: "Độ rộng kênh",
				content: "Băng thông kênh của mạng không dây"
			},{
				type: "name",
				title: "Kênh",
				content: "Kênh không dây hiện tại và tần số tương ứng (tính bằng GHz)"
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Địa chỉ MAC của mạng mạng vô tuyến không dây của Router"
			},{
				type: "name",
				id: "status_wds",
				title: "Trạng thái WDS",
				content: "Trạng thái hiện tại (đã kích hoạt hoặc đã vô hiệu hóa) của chế độ WDS"
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị thông tin liên quan đến cổng LAN (Ethernet)"
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Địa chỉ vật lý duy nhất được gán cho cổng Ethernet (LAN) của Router"
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Địa chỉ IPv4 được gán cho cổng Ethernet (LAN) của router"
			},{
				type: "name",
				title: "Subnet Mask",
				content: "Thông số này xác định phần mạng và phần máy chủ của một địa chỉ IP"
			},{
				type: "name",
				title: "DHCP",
				content: "Hiển thị thông tin máy chủ DHCP tích hợp có được kích hoạt trên các cổng LAN hay không"
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Địa chỉ vật lý duy nhất được gán cho cổng Ethernet (LAN) của Router"
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Địa chỉ IPv6 được gán cho cổng Ethernet (LAN) của router"
			},{
				type: "name",
				title: "Địa chỉ đường dẫn nội bộ",
				content: "Địa chỉ đường dẫn IPv6 cho giao diện LAN"
			},{
				type: "name",
				title: "Dạng gán",
				content: "Dạng địa chỉ IPv6 cho giao diện LAN"
			}]
		},
		STATUS_GUEST: {
			TITLE: "Mạng khách",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị thông tin liên quan đến mạng không dây cho khách"
			},{
				type: "name",
				title: "Tên mạng không dây (SSID)",
				content: "Tên mạng khách không dây (SSID) của bạn"
			},{
				type: "name",
				title: "Giấu SSID",
				content: "Hiển thị thông tin tên mạng không dây (SSID) của mạng khách có được giấu hay không"
			},{
				type: "name",
				title: "Vô tuyến không dây",
				content: "Trạng thái hiện tại (Mở hoặc Tắt) của mạng khách."
			},{
				type: "name",
				title: "Cho phép thiết bị trong  Mạng khách liên lạc",
				content: "Hiển thị thông tin nếu tất cả các thiết bị trong mạng khách được cho phép giao tiếp với nhau hay không"
			}]
		},
		STATUS_USB: {
			TITLE: "Thiết bị USB",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị thông tin của thiết bị lưu trữ USB/ hoặc máy in hiện tại đang kết nối đến router thông qua cổng USB"
			},{
				type: "name",
				title: "Máy in",
				content: "Tên máy in kết nối đến router"
			},{
				type: "name",
				title: "Ổ cứng USB",
				content: "Tên ổ cứng USB kết nối đến router"
			},{
				type: "name",
				title: "Tổng",
				content: "Tổng dung lượng lưu trữ của thiết bị lưu trữ USB kết nối đến router"
			},{
				type: "name",
				title: "Khả dụng",
				content: "Dung lượng lưu trữ khả dụng của thiết bị lưu trữ USB kết nối đến router"
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "Hiệu suất",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị hiệu suất hiện tại của router"
			},{
				type: "name",
				title: "Tải CPU",
				content: "Tình trạng sử dụng hiện tại của CPU"
			},{
				type: "name",
				title: "Bộ nhớ sử dụng",
				content: "Tình trạng sử dụng hiện tại của bộ nhớ"
			}]
		},
		STATUS_WIRED: {
			TITLE: "Máy khách có dây",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị thông tin của tất cả máy khách nối dây hiện đang kết nối đến mạng"
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "Máy khách không dây",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị thông tin của tất cả máy khách không dây hiện đang kết nối đến mạng"
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "Dạng kết nối Internet: IP Tĩnh"
			},{
				type: "paragraph",
				content: "Chọn dạng kết nối này nếu Nhà cung cấp dịch vụ Internet (ISP) của bạn cung cấp cho bạn một địa chỉ IP, Subnet Mask, Gateway và thông số DNS xác định (cố định)"
			},{
				type: "name",
				title: "Địa chỉ IP/Subnet Mask/Gateway mặc định/DNS thứ nhất/DNS thứ hai",
				content: "Nhập thông tin do Nhà cung cấp dịch vụ Internet (ISP) của bạn cung cấp"
			},{
				type: "name",
				title: "Kích thước MTU",
				content: "Kích thước MTU (Đơn vị truyền tải lớn nhất-Maximum Transmission Unit) mặc định và phổ biến cho hầu hết mạng Ethernet là 1500 Byte. Chúng tôi không khuyến nghị thay đổi giá trị MTU trừ khi Nhà cung cấp dịch vụ Internet  của bạn yêu cầu"
			},{
				type: "title",
				title: "Dạng kết nối Internet: IP Động"
			},{
				type: "paragraph",
				content: "Chọn dạng này nếu nhà cung cấp dịch vụ Internet của bạn cung cấp kết nối máy chủ DHCP"
			},{
				type: "name",
				title: "Địa chỉ IP/Subnet Mask/Gateway mặc định/DNS thứ nhất/DNS thứ hai",
				content: "Các thông số này được gán tự động thông qua máy chủ DHCP của Nhà cung cấp dịch vụ Internet (ISP) của bạn"
			},{
				type: "name",
				title: "Làm mới",
				content: "Bấm chọn nút này để lấy thông số IP mới từ máy chủ DHCP"
			},{
				type: "name",
				title: "Giải phóng",
				content: "Bấm chọn nút này để giải phóng địa chỉ IP được gán bởi máy chủ DHCP"
			},{
				type: "name",
				title: "Sử dụng địa chỉ DNS sau",
				content: "Nếu Nhà cung cấp dịch vụ Internet (ISP) của bạn cung cấp một hoặc hai địa chỉ DNS, chọn hộp chọn này nhập địa chỉ DNS thứ nhất và DNS thứ hai vào ô tương ứng; nếu không, địa chỉ DNS sẽ được Nhà cung cấp dịch vụ Internet (ISP) gán tự động"
			},{
				type: "name",
				title: "Kích thước MTU",
				content: "Kích thước MTU (Đơn vị truyền tải lớn nhất-Maximum Transmission Unit) mặc định và phổ biến cho hầu hết mạng Ethernet là 1500 Byte. Chúng tôi không khuyến nghị thay đổi giá trị MTU trừ khi Nhà cung cấp dịch vụ Internet  của bạn yêu cầu"
			},{
				type: "name",
				title: "Tên máy chủ",
				content: "Nhập giá trị vào ô để xác định tên máy chủ của Router"
			},{
				type: "name",
				title: "Lấy địa chỉ IIP bằng DHCP Unicast",
				content: "Chọn hộp chọn này nếu máy chủ DHCP của Nhà cung cấp dịch vụ Internet của bạn không hỗ trợ ứng dụng broadcast và bạn không thể lấy địa chỉ IP động"
			},{
				type: "title",
				title: "Dạng kết nối Internet: PPPoE"
			},{
				type: "paragraph",
				content: "Chọn dạng kết nối này nếu bạn sử dụng dịch vụ DSL (Digital Subscriber Line) và Nhà cung cấp dịch vụ Internet của bạn cung cấp cho bạn Tên đăng nhập và mật mã"
			},{
				type: "name",
				title: "Tên đăng nhập/Mật mã",
				content: "Nhập Tên đăng nhập và Mật mã do Nhà cung cấp dịch vụ Internet của bạn cung cấp. Thông số này phân biệt chữ hoa và chữ thường"
			},{
				type: "name",
				title: "Địa chỉ IP/DNS thứ nhất/DNS thứ hai",
				content: "Các thông số này được gán tự động thông qua máy chủ DHCP của Nhà cung cấp dịch vụ Internet của bạn"
			},{
				type: "name",
				title: "Kết nối thứ hai (Không, IP Động, IP Tĩnh)",
				children: [{
					type: "name",
					title: "Không",
					content: "Chọn nếu bạn không sử dụng kết nối thứ hai"
				},{
					type: "name",
					title: "IP Động",
					content: "Chọn nếu địa chỉ IP và Subnet Mask được gán tự động từ Nhà cung cấp dịch vụ Internet của bạn",
					children: [{
						type: "name",
						title: "Làm mới",
						content: "Bấm chọn nút này để làm mới thông số IP từ Nhà cung cấp dịch vụ Internet của bạn"
					},{
						type: "name",
						title: "Giải phóng",
						content: "Bấm chọn nút này để giải phóng thông số IP được gán"
					}]
				},{
					type: "name",
					title: "IP Tĩnh",
					content: "Chọn nếu địa chỉ IP và Subnet Mask được cung cấp bởi nhà cung cấp dịch vụ Internet, và điền các thông tin đó vào khung tương ứng"
				}]
			},{
				type: "name",
				title: "Kích thước MTU",
				content: "Kích thước MTU (Đơn vị truyền tải lớn nhất-Maximum Transmission Unit) phổ biến cho mạng Ethernet là 1480 Byte.",
				children: [{
					type: "note",
					title: "Lưu ý",
					content: "Trong một số ít trường hợp, Nhà cung cấp dịch vụ Internet của bạn yêu cầu thay đổi giá trị Kích thước MTU để tối ưu hiệu suất mạng. Bạn không nên thay đổi giá trị này trừ khi thật sự cần thiết"
				}]
			},{
				type: "name",
				title: "Tên dịch vụ/Tên trung tâm truy cập",
				content: "Tên dịch vụ và Tên trung tâm truy cập mặc định được để trống. Thông tin này không nên cài đặt trừ khi Nhà cung cấp dịch vụ Internet của bạn yêu cầu"
			},{
				type: "name",
				title: "Phát hiện khoảng thời gian trực tuyến",
				content: "Nhập một khoảng thời gian từ 0 đến 120 (tính theo giây) để router phát hiện truy cập tập trung trực tuyến. Giá trị mặc định là 10"
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Nếu Nhà cung cấp dịch vụ Internet của bạn cung cấp địa chỉ IP xác định (cố định), chọn Sử dụng địa chỉ IP sau và nhập địa chỉ IP vào ô; nếu không, chọn Lấy địa chỉ động từ ISP để nhận địa chỉ IP được gán bởi máy chủ một cách tự động"
			},{
				type: "name",
				title: "Địa chỉ DNS/DNS thứ nhất/DNS thứ hai",
				content: "Nếu Nhà cung cấp dịch vụ Internet của bạn cung cấp địa chỉ IP DNS xác định (cố định), chọn Sử dụng địa chỉ IP DNS sau và nhập địa chỉ IP vào ô DNS thứ nhất và DNS thứ hai tương ứng; nếu không, chọn Lấy địa chỉ tự động từ ISP để nhận địa chỉ IP DNS được gán bởi máy chủ một cách tự động"
			},{
				type: "name",
				title: "Chế độ kết nối",
				content: "Chọn một chế độ kết nối thích hợp để xác định cách kết nối Internet",
				children: [{
					type: "name",
					title: "Tự động",
					content: "Ở chế độ này, kết nối Internet tự động kết nối lại mỗi khi bị mất kết nối"
				},{
					type: "name",
					title: "Theo yêu cầu",
					content: "Ở chế độ này, kết nối Internet sẽ bị ngắt tự động sau một khoảng thời gian không hoạt động (Thời gian nghỉ tối đa) xác định. Kết nối sẽ tự thiết lập lại khi bạn truy cập lại Internet"
				},{
					type: "name",
					title: "Theo thời gian",
					content: "Ở chế độ này, kết nối Internet sẽ chỉ được thiết lập trong một khung thời gian xác định. Nếu chọn lựa chọn này, vui lòng nhập thời gian bắt đầu và thời gian kết thúc; cả hai theo định dạng HH:MM"
				},{
					type: "name",
					title: "Thủ công",
					content: "Ở chế độ này, kết nối Internet được kiểm soát theo cách thủ công bằng việc nhấn nút Kết nối hoặc Ngắt kết nối. Chế độ này cũng hỗ trợ chức năng Thời gian nghỉ tối đa. Nhập giá trị tối đa (tính bằng phút) kết nối Internet có thể ngưng hoạt động trước khi chuyển vào Thời gian nghỉ tối đa. Giá trị mặc định là 15 phút. Nếu bạn muốn kết nối Internet của bạn luôn ở trạng thái được kích hoạt, nhập giá trị 0 vào phần Thời gian nghỉ tối đa"
				},{
					type: "note",
					title: "Lưu ý",
					content: "Chỉ khi bạn đã thiết lập thời gian cho hệ thống ở trang Công cụ hệ thống -> Cài đặt thời gian, chức năng Kết nối theo thời gian mới có hiệu lực."
				}]
			},{
				type: "title",
				title: "Dạng kết nối Internet: Cáp BigPond"
			},{
				type: "paragraph",
				content: "Chọn nếu nhà cung cấp dịch vụ Internet của bạn cung cấp kết nối cáp BigPond"
			},{
				type: "name",
				title: "Tên đăng nhập/Mật mã",
				content: "Nhập Tên đăng nhập và Mật mã do Nhà cung cấp dịch vụ Internet của bạn cung cấp. Thông số này phân biệt chữ hoa và chữ thường"
			},{
				type: "name",
				title: "Máy chủ xác thực",
				content: "Nhập địa chỉ IP hoặc tên máy chủ xác thực"
			},{
				type: "name",
				title: "Tên miền xác thực",
				content: "Nhập hậu tố tên miền máy chủ (theo khu vực). Ví dụ, nsw.bigpond.net.au cho NSW/ACT, vic.bigpond.net.au cho VIC/TAS/WA/SA/NT,hoặc qld.bigpond.net.au cho QLD."
			},{
				type: "name",
				title: "Kích thước MTU",
				content: "Kích thước MTU (Đơn vị truyền tải lớn nhất-Maximum Transmission Unit) mặc định và phổ biến cho hầu hết mạng Ethernet là 1500 Byte. Chúng tôi không khuyến nghị thay đổi giá trị MTU trừ khi Nhà cung cấp dịch vụ Internet  của bạn yêu cầu"
			},{
				type: "name",
				title: "Chế độ kết nối",
				content: "Chọn một chế độ kết nối thích hợp để xác định cách kết nối Internet",
				children: [{
					type: "name",
					title: "Tự động",
					content: "Ở chế độ này, kết nối Internet tự động kết nối lại mỗi khi bị mất kết nối"
				},{
					type: "name",
					title: "Theo yêu cầu",
					content: "Ở chế độ này, kết nối Internet sẽ bị ngắt tự động sau một khoảng thời gian không hoạt động (Thời gian nghỉ tối đa) xác định. Kết nối sẽ tự thiết lập lại khi bạn truy cập lại Internet"
				},{
					type: "name",
					title: "Thủ công",
					content: "Ở chế độ này, kết nối Internet được kiểm soát theo cách thủ công bằng việc nhấn nút Kết nối hoặc Ngắt kết nối. Chế độ này cũng hỗ trợ chức năng Thời gian nghỉ tối đa. Nhập giá trị tối đa (tính bằng phút) kết nối Internet có thể ngưng hoạt động trước khi chuyển vào Thời gian nghỉ tối đa. Giá trị mặc định là 15 phút. Nếu bạn muốn kết nối Internet của bạn luôn ở trạng thái được kích hoạt, nhập giá trị 0 vào phần Thời gian nghỉ tối đa"
				}]
			},{
				type: "title",
				title: "Dạng kết nối Internet: L2TP/PP2P"
			},{
				type: "paragraph",
				content: "Chọn dạng kết nối này nếu bạn kết nối đến máy chủ VPN L2TP/PPTP và được cung cấp tên đăng nhập, mật mã và địa chỉ IP/Tên miền của máy chủ từ ISP"
			},{
				type: "name",
				title: "Tên đăng nhập/Mật mã",
				content: "Nhập Tên đăng nhập và Mật mã do Nhà cung cấp dịch vụ Internet của bạn cung cấp. Thông số này phân biệt chữ hoa và chữ thường"
			},{
				type: "name",
				title: "Địa chỉ IP/DNS thứ nhất/DNS thứ hai",
				content: "Các thông số này được gán tự động thông qua máy chủ DHCP của Nhà cung cấp dịch vụ Internet của bạn"
			},{
				type: "name",
				title: "Kết nối thứ hai (IP Động hoặc IP Tĩnh)",
				children: [{
					type: "name",
					title: "IP Động",
					content: "Chọn nếu địa chỉ IP và Subnet Mask được gán tự động từ Nhà cung cấp dịch vụ Internet của bạn"
				},{
					type: "name",
					title: "IP Tĩnh",
					content: "Chọn nếu địa chỉ IP, Subnet Mask, Gateway, và địa chỉ DNS do Nhà cung cấp dịch vụ Internet của bạn cung cấp, vui lòng nhập các thông tin trên vào ô tương ứng"
				}]
			},{
				type: "name",
				title: "IP /Tên miền máy chủ VPN",
				content: "Nhập địa chỉ IP máy chủ VPN hoặc tên miền do Nhà cung cấp dịch vụ Internet (ISP) của bạn cung cấp cho bạn"
			},{
				type: "name",
				title: "Kích thước MTU",
				content: "Kích thước MTU (Đơn vị truyền tối đa) mặc định và thông thường cho hầu hết mạng Ethernet là 1460 Bytes cho L2TP và 1420 Bytes cho PPTP. Chúng tôi không khuyến nghị thay đổi kích thước MTU trừ phi nhà cung cấp dịch vụ Internet yêu cầu"
			},{
				type: "name",
				title: "Chế độ kết nối",
				content: "Chọn một chế độ kết nối thích hợp để xác định cách kết nối Internet",
				children: [{
					type: "name",
					title: "Tự động",
					content: "Ở chế độ này, kết nối Internet tự động kết nối lại mỗi khi bị mất kết nối"
				},{
					type: "name",
					title: "Theo yêu cầu",
					content: "Ở chế độ này, kết nối Internet sẽ bị ngắt tự động sau một khoảng thời gian không hoạt động (Thời gian nghỉ tối đa) xác định. Kết nối sẽ tự thiết lập lại khi bạn truy cập lại Internet"
				},{
					type: "name",
				title: "Thủ công",
				content: "Ở chế độ này, kết nối Internet được kiểm soát theo cách thủ công bằng việc nhấn nút Kết nối hoặc Ngắt kết nối. Chế độ này cũng hỗ trợ chức năng Thời gian nghỉ tối đa. Nhập giá trị tối đa (tính bằng phút) kết nối Internet có thể ngưng hoạt động trước khi chuyển vào Thời gian nghỉ tối đa. Giá trị mặc định là 15 phút. Nếu bạn muốn kết nối Internet của bạn luôn ở trạng thái được kích hoạt, nhập giá trị 0 vào phần Thời gian nghỉ tối đa"
				}]
			},{
				type:"paragraph",
				content:"Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "Sao địa chỉ MAC",
			CONTENT: [{
				type: "name",
				title: "Sử dụng địa chỉ MAC mặc định",
				content: "KHÔNG thay đổi địa chỉ MAC mặc định của Router, trong trường hợp các ISP không ràng buộc các địa chỉ IP được gán cho địa chỉ MAC"
			},{
				type: "name",
				title: "Sử dụng địa chỉ MAC máy tính hiện tại",
				content: "Chọn để sao chép MAC máy tính hiện tại đang kết nối đến Router, trong trường hợp ISP kết hợp địa chỉ IP và địa chỉ MAC"
			},{
				type: "name",
				title: "Sử dụng địa chỉ MAC tùy chỉnh",
				content: "Nhập MAC thủ công, trong trường hợp ISP kết hợp địa chỉ IP và địa chỉ MAC xác định"
			},{
				type:"paragraph",
				content:"Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Địa chỉ vật lý duy nhất được gán cho cổng Ethernet (LAN) của Router"
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Hiển thị địa chỉ IP mặc định của router, là địa chỉ được dùng để đăng nhập vào trang web quản lý của router, có thể được ghi đè"
			},{
				type: "name",
				title: "Subnet Mask",
				content: "Chọn một định danh được gán sử dụng bởi cổng LAN để định tuyến lưu lượng nội bộ và bên ngoài từ bảng danh sách thả xuống hoặc nhập một subnet mask mới theo định dạng thập phân có chấm"
			},{
				type: "note",
				title: "Lưu ý",
				content: "Nếu địa chỉ IP mới mà bạn đặt không cùng lớp mạng với địa chỉ trước đó, vùng địa chỉ IP trong server DHCP sẽ bị cấu hình tự động, nhưng mạng ảo và máy chủ DNZ sẽ không bị ảnh hưởng cho đến khi chúng được cấu hình lại"
			},{
				type:"paragraph",
				content:"Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		IPTV:{
			TITLE: "Cài đặt",
			CONTENT: [{
					type: "name",
					title: "Proxy IGMP",
					content: "Chọn IGMP (Internet Group Management Protocol) Proxy phiên bản, hoặc là V2 hay V3, theo ISP của bạn."
				},{
					type: "name",
					title: "Phiên bản IGMP",
					content: "Chọn phiên bản Proxy IGMP, hoặc V2 hoặc V3, tùy theo ISP của bạn."
				},
				{
					type: "name",
					title: "IPTV",
					content: "Chọn để kích hoạt IPTV"
				},
				{
					type: "name",
					title: "Chế độ",
					content: "Chọn chế độ thích hợp với ISP.",
					children: [
						{
							type: "name",
							title: "Cầu nối",
							content:"Nếu ISP của bạn không được liệt kê và không có các thông số khác được yêu cầu, bạn chỉ có thể chọn chế độ này và cấu hình các tính năng cổng LAN của router.",
							children:[{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Gán cổng LAN của bạn để xem liệu có chức năng như các nhà cung cấp Internet hoặc là nhà cung cấp IPTV."
							}]
						},
						{
							type: "name",
							title: "Singapore-Exstream",
							content: "Chọn nếu ISP của bạn là từ Nga và các thông số cần dùng đã được xác định trước, bao gồm các Định Danh (ID) và Mức Ưu Tiên (Priority) của Internet/IP-Phone/IPTV VLAN, và các tính năng cổng của LAN (1/2/3/4).",
							children: [{
								type: "name",
								title: "ID/Priority VLAN Multicast IPTV",
								content: "Bạn có thể kích hoạt tính năng multicast IPTV như mong muốn, và cấu hình VLAN ID và ưu tiên theo ISP của bạn."
							}]
						},
						{
							type: "name",
							title: "Singapore-Exstream",
							content: "Chọn nếu ISP của bạn là Exstream từ Singapore và các thông số cần thiết được xác định trước, bao gồm Internet/IPTV VLAN ID và ưu tiên, và LAN (1/2/3/4) Tính năng Port."
						},
						{
							type: "name",
							title: "Malaysia-Unifi",
							content: "Chọn nếu ISP của bạn là Unifi từ Malaysia và các thông số cần thiết được xác định trước, bao gồm Internet/IPTV VLAN ID và ưu tiên, và LAN (1/2/3/4) Tính năng Port."
						},
						{
							type: "name",
							title: "Malaysia-Maxis",
							content: "Chọn nếu ISP của bạn là Maxis từ Malaysia và các thông số cần thiết được xác định trước, bao gồm Internet/IP-Phone/IPTV VLAN ID và ưu tiên, và LAN (1/2/3/4) Tính năng Port."
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "Chọn nếu ISP của bạn là Portugal-MEO và các thông số cần thiết được xác định trước, bao gồm ID VLAN và Độ ưu tiên của Internet, và các tính năng cổng LAN (1/2/3/4)."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "Chọn nếu ISP của bạn là Portugal-Vodafone và các thông số cần thiết được xác định trước, bao gồm ID VLAN và Độ ưu tiên của Internet/IP-Phone/IPTV. Bạn có thể gán các cổng LAN của bạn cho các chức năng tương ứng của chúng khi cần thiết (nhà cung cấp Internet/nhà cung cấp IPTV/nhà cung cấp IP-Phone/nhà cung cấp Internet-IPTV)."
						},
						{
							type: "name",
							title: "Tùy chỉnh",
							content: "Chọn nếu ISP của bạn không được liệt kê, nhưng cung cấp các thông số cần thiết, bao gồm Internet/IP-Phone/IPTV VLAN ID và ưu tiên, và LAN (1/2/3/4) Tính năng Port.",
							children: [{
								type: "name",
								title: "ID/PriorityVLAN IPTV/IP-Phone/Internet",
								content: "Cấu hình ID và Priority VLAN do nhà cung cấp dịch vụ Internet cung cấp"
							},{
								type: "name",
								title: "802.11Q Tag",
								content: "Chọn định khóa các gói Internet với 802.11Q."
							},{
								type: "name",
								title: "ID/Priority VLAN Multicast IPTV",
								content: "Bạn có thể kích hoạt tính năng multicast IPTV như mong muốn, và cấu hình VLAN ID và ưu tiên theo ISP của bạn."
							},{
								type: "name",
								title: "LAN 1/2/3/4",
								content: "Gán cổng LAN của bạn cho các chức năng như cung cấp Internet, cung cấp IP-phone hoặc cung cấp IPTV"
							}]
						}
					]
				},{
				type:"paragraph",
				content:"Nhấn Lưu để lưu tất cả các thiết lập của bạn."
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "Cài đặt",
			CONTENT: [{
				type: "name",
				title: "Máy chủ DHCP",
				content: "Kích hoạt hoặc Vô hiệu hóa server. Nếu bạn vô hiệu hóa Server, bạn phải có một server DHCP khác trong mạng của bạn nếu không bạn sẽ phải cấu hình địa chỉ IP của máy tính một cách thủ công"
			},{
				type: "name",
				title: "Dãy địa chỉ IP",
				content: "Nhập khoảng địa chỉ IP có thể được thuê bởi máy khách"
			},{
				type: "name",
				title: "Thời gian thuê địa chỉ",
				content: "Nhập khoảng thời gian một địa chỉ IP được thuê bởi máy khách từ 1 đến 2880 phút. Giá trị mặc định là 120 phút"
			},{
				type: "name",
				title: "Gateway mặc định",
				content: "Nhập địa chỉ IP LAN. (Tùy chọn)"
			},{
				type: "name",
				title: "DNS thứ nhất/DNS thứ hai",
				content: "Nhập thông số cung cấp bởi nhà cung cấp dịch vụ Internet của bạn. (Tùy chọn)"
			},{
				type:"paragraph",
				content:"Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "Dành riêng địa chỉ",
			CONTENT: [{
				type: "paragraph",
				content: "Bạn có thể tự dành riêng địa chỉ IP cho một máy khách được kết nối với Router. Một khi dành riêng, các địa chỉ IP sẽ chỉ được gán cho cùng một máy khách bởi các máy chủ DHCP."
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Hiển thị địa chỉ MAC của máy khách với địa chỉ IP  DHCPdành riêng"
			},{
				type: "name",
				title: "Địa chỉ IP dành riêng",
				content: "Hiển thị các địa chỉ IP dành riêng của máy khách."
			},{
				type: "name",
				title: "Mô tả",
				content: "Hiển thị một mô tả của các thiết bị máy khách."
			},{
				type: "name",
				title: "Trạng thái",
				content: "Hiển thị tình trạng hiện tại (kích hoạt hoặc vô hiệu hóa) của các thiết bị máy khách."
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị tùy chọn để sửa đổi hoặc xóa các máy khách tương ứng."
			},{
				type: "step",
				title: "Để đặt một địa chỉ IP",
				content:[
					"1. Bấm chọn Thêm.",
					"2. Nhập địa chỉ MAC của khách hàng của bạn mong muốn.",
					"3. Nhập địa chỉ IP mà bạn muốn dành cho các khách hàng.",
					"4. Nhập một mô tả cho các khách hàng.",
					"5. Chọn Kích hoạt.",
					"6. Nhấp vào OK."
				]
			},{
				type: "step",
				title: "Sửa đổi hoặc xóa một khách hàng hiện có",
				content: "Trong bảng, nhấp vào biểu tượng Sửa hay Xóa biểu tượng tương ứng với các khách hàng mà bạn muốn chỉnh sửa hoặc xóa."
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "Danh sách máy khách DHCP",
			CONTENT: [{
				type: "name",
				title: "Số lượng máy khách",
				content: "Hiển thị số máy khách DHCP liên kết"
			},{
				type: "name",
				title: "Tên máy khách",
				content: "Hiển thị tên của các máy khách DHCP."
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Hiển thị địa chỉ MAC."
			},{
				type: "name",
				title: "Địa chỉ IP được gán",
				content: "Hiển thị các địa chỉ IP được phân bổ cho các máy khách bởi các máy chủ DHCP."
			},{
				type: "name",
				title: "Thời gian thuê",
				content: "Hiển thị thời gian thuê địa chỉ IP còn lại của máy khách"
			},{
				type: "name",
				title: "Làm mới",
				content: "Nhấn vào đây để cập nhậtDanh sách máy khách DHCP"
			}]
		},

		DDNS: {
			TITLE: "DNS động",
			CONTENT: [{
				type: "paragraph",
				content: "DNS động (Domain Name System - Hệ thống tên miền) cho phép bạn gán một máy chủ cố định và tên miền với một địa chỉ IP Internet động. Việc này rất hữu ích khi bạn sỡ hữu trang web, máy chủ FTP, hoặc các máy chủ khác phía sau router. Để bắt đầu, bạn cần đăng ký với một nhà cung cấp dịch vụ DNS động như www.dyndns.com. Sau đó, nhập thông tin đăng ký của bạn."
			},{
				type: "step",
				title: "Để thiết lập một Dynamic DNS",
				content: [
					"1. Chọn nhà cung cấp dịch vụ DDNS của bạn.",
					"2. Nhập tên người dùng và mật khẩu của tài khoản DDNS của bạn.",
					"3. Nhập tên miền bạn đã đăng ký với nhà cung cấp dịch vụ DNS động.",
					"4. Chọn khoảng thời gian yêu cầu cập nhật DNS động sẽ được gửi.",
					"5. Nếu nhà cung cấp dịch vụ của bạn là NO-IP, chọn Kết hợp IP WAN để đảm bảo tên miền được kết hợp với địa chỉ IP WAN của router này.",
					"6. Bấm chọn Đăng nhập và Lưu."
				]
			},{
				type: "note",
				title:"Lưu ý",
				content: "Nếu bạn muốn sử dụng một tài khoảng DDNS mới, vui lòng đăng xuất trước và sau đó đăng nhập lại với tài khoản mới."
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "DNS động",
			CONTENT: [{
				type: "paragraph",
				content: "DNS động (Domain Name System - Hệ thống tên miền) cho phép bạn gán một máy chủ cố định và tên miền với một địa chỉ IP Internet động. Việc này rất hữu ích khi bạn sỡ hữu trang web, máy chủ FTP, hoặc các máy chủ khác phía sau router. Để bắt đầu, bạn cần đăng ký với một nhà cung cấp dịch vụ DNS động như www.dyndns.com. Sau đó, nhập thông tin đăng ký của bạn."
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "Danh sách tên miền",
			CONTENT: [{
				type: "paragraph",
				content: "Bảng này hiển thị tên miền DNS động được đăng kí với ID TP-Link của bạn."
			},{
				type:"step",
				title: "Để đăng ký thêm một tên miền mới",
				content: [
					"1. Bấm chọn Đăng ký.",
					"2. Nhập tên miền.",
					"3. Bấm chọn Lưu."
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "Định tuyến tĩnh",
			CONTENT: [{
				type: "paragraph",
				content: "Định tuyến tĩnh được sử dụng để xác định trước một đường cố định cho các gói thông tin mạng để đạt được một máy chủ hoặc mạng cụ thể."
			},{
				type: "step",
				title: "Để thiết lập một tuyến tĩnh",
				content: [
					"1. Bấm chọn Thêm.",
					"2. Mạng đích - Nhập một địa chỉ IP theo định dạng thập phân có chấm để gán định tuyến tĩnh cho mục này",
					"3. Subnet Mask - Nhập một subnet mask theo định dạng thập phân có chấm để xác định mạng và máy chủ của địa chỉ IP",
					"4. Gateway mặc định - Nhập một địa chỉ IP gateway theo định dạng thập phân có chấm để kết nối router đến mạng hoặc máy chủ",
					"5. Giao diện - Chọn LAN hoặc WAN để xác định loại của Đích Mạng.",
					"6. Mô tả - Nhập một mô tả ngắn gọn cho mục này.",
					"7. Chọn Kích hoạt",
					"8. Nhấn OK."
				]
			},{
				type: "step",
				title: "Sửa đổi hoặc xóa mục nhập hiện có",
				content: "Trong bảng này, bấm chọn biểu tượng Chỉnh sửa hoặc biểu tượng Thùng rác tương ứng với từng mục để chỉnh sửa hoặc xóa mục đó"
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "Bảng định tuyến hệ thống",
			CONTENT: [{
				type: "paragraph",
				content: "Bảng định tuyến hệ thống hiển thị tất cả các mục tuyến đường hợp lệ mà hiện nay đang được sử dụng."
			},{
				type: "paragraph",
				content: "Nhấn Làm mới để cập nhật bảng định tuyến."
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "Cài đặt",
			CONTENT: [{
				type: "name",
				title: "Khu vực",
				content: "Chọn vùng của bạn từ trình đơn thả xuống. Nếu quốc gia hoặc khu vực của bạn không được liệt kê, nó có thể được hạn chế sử dụng các đài phát thanh không dây ở vị trí của bạn."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "Không dây 2.4GHz",
			CONTENT: [{
				type: "name",
				title: "Kích hoạt vô tuyến không dây",
				content: "Chọn hộp kiểm này để kích hoạt 2.4GHz tần số vô tuyến không dây."
			},{
				type: "name",
				title: "Tên mạng không dây (SSID)",
				content: "Bạn có thể để lại các tên mạng mặc định (SSID) như nó có, hoặc nhập một tên mới (tối đa 32 ký tự). Trường này là phân biệt chữ hoa."
			},{
				type: "name",
				title: "Giấu SSID",
				content: "Chọn hộp kiểm này nếu bạn muốn giấu tên mạng 2.4GHz (SSID) từ danh sách mạng Wi-Fi."
			},{
				type: "name",
				title: "Bảo mật",
				content: "Chọn một trong các tùy chọn bảo mật sau đây:",
				children: [{
					type: "name",
					title: "Không bảo mật",
					content: "Chọn tùy chọn này để vô hiệu hóa bảo mật không dây. Nó là rất khuyến khích bạn kích hoạt bảo mật không dây để bảo vệ mạng không dây của bạn từ truy cập trái phép."
				},{
					type: "name",
					title: "WPA/WPA2-Cá nhân",
					content: "Chọn lựa chọn này để kích hoạt phương pháp xác thực chuẩn dựa trên mã chia sẻ (PSK), có thể gọi là mật mã. Lựa chọn này được khuyến nghị. Nếu chọn lựa chọn này, vui lòng cấu hình các mục sau",
					children: [{
						type: "name",
						title: "Phiên bản",
						content: "Chọn một phiên bản bảo mật cho mạng không dây của bạn.",
						children: [{
							type: "name",
							title: "Tự động",
							content: "Tùy chọn này hỗ trợ nhiều thực của WPA (Wi-Fi Protected Access) tiêu chuẩn, chẳng hạn như WPA và WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Tùy chọn này chỉ hỗ trợ mã hóa TKIP cung cấp một mức độ bảo mật."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "tùy chọn hỗ trợ mã hóa AES này cung cấp một mức độ tốt hơn về bảo mật hơn WPA-PSK và được khuyến khích."
						}]
					},{
						type: "name",
						title: "Mã hóa",
						content: "Chọn một kiểu mã hóa bảo mật: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), hoặc tự động (cho cả TKIP và AES). Đó là không nên sử dụng mã hóa TKIP nếu Router hoạt động ở chế độ 802.11n, vì TKIP không được hỗ trợ bởi đặc điểm kỹ thuật 802.11n. Nếu được chọn TKIP, WPS chức năng sẽ bị vô hiệu."
					},{
						type: "name",
						title: "Mật mã",
						content: "Nhập một mật khẩu không dây từ 8 đến 63 ký tự ASCII, hoặc từ 8 đến 64 ký tự thập lục phân vào lĩnh vực này."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Doanh nghiệp",
					content: "Chọn tùy chọn này để cho phép các phương pháp xác thực cao cấp hơn sử dụng một máy chủ RADIUS (Từ xa Xác thực Quay Trong sử dụng dịch vụ) . Nếu được lựa chọn, chức năng WPS sẽ bị vô hiệu.",
					children: [{
						type: "name",
						title: "Phiên bản",
						content: "Chọn một phiên bản bảo mật cho mạng không dây của bạn.",
						children:[{
							type: "name",
							title: "Tự động",
							content: "Tùy chọn này hỗ trợ nhiều thực của WPA (Wi-Fi Protected Access) tiêu chuẩn, chẳng hạn như WPA và WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Tùy chọn này chỉ hỗ trợ mã hóa TKIP cung cấp một mức độ bảo mật."
						},{
							type: "name",
							title: "WPA2",
							content: "tùy chọn hỗ trợ mã hóa AES này cung cấp một mức độ tốt hơn về bảo mật hơn WPA-PSK và được khuyến khích."
						}]
					},{
						type: "name",
						title: "Mã hóa",
						content: "Chọn một kiểu mã hóa bảo mật: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), hoặc tự động (cho cả TKIP và AES). Đó là không nên sử dụng mã hóa TKIP nếu Router hoạt động ở chế độ 802.11n, vì TKIP không được hỗ trợ bởi đặc điểm kỹ thuật 802.11n. Nếu được chọn TKIP, WPS chức năng sẽ bị vô hiệu."
					},{
						type: "name",
						title: "IP máy chủ RADIUS",
						content: "Nhập địa chỉ IP của máy chủ RADIUS."
					},{
						type: "name",
						title: "Cổng RADIUS",
						content: "Nhập số cổng của máy chủ RADIUS"
					},{
						type: "name",
						title: "Mật mã RADIUS",
						content: "Nhập mật khẩu chia sẻ của máy chủ RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Chọn lựa chọn này để kích hoạt phương pháp xác thực cơ bản nếu một số thiết bị của bạn chỉ có thể truy cập mạng không dây bằng cách sử dụng WEP (Wired Equivalent Privacy)",
					children: [{
						type: "name",
						title: "Dạng",
						content: "Chọn một loại chứng thực cho mạng không dây của bạn. Mặc định là tự động, tự động chọn hệ thống mở hoặc Khóa chia sẻ dựa trên các yêu cầu về năng lực và truy cập các máy khách không dây."
					},{
						type: "name",
						title: "Định dạng mã WEP",
						content: "định dạng ASCII Hoặc sử dụng hoặc chọn Thập lục phân. Định dạng ASCII là một sự kết hợp của các ký tự chữ và số. Định dạng hệ thập lục phân là một sự kết hợp của các số (0-9) và chữ cái (AF, af)."
					},{
						type: "name",
						title: "Dạng mã",
						content: "Chọn độ dài của khoá WEP.",
						children: [{
							type: "name",
							title: "64-bit",
							content: "Cho phép bạn nhập vào 10 chữ số thập lục phân (0-9, AF, af) hoặc 5 ký tự ASCII vào trường giá trị WEP."
						},{
							type: "name",
							title: "128-bit",
							content: "Cho phép bạn nhập vào 26 chữ số thập lục phân (0-9, AF, af) hoặc 13 ký tự ASCII vào trường giá trị WEP."
						}]
					},{
						type: "name",
						title: "Giá trị mã",
						content: "Nhập mã WEP vào khung tương ứng"
					}]
				}]
			},{
				type: "name",
				title: "Chế độ",
				content: "Chọn một chế độ truyền hỗn hợp."
			},{
				type: "name",
				title: "Độ rộng kênh",
				content: "Chọn chiều rộng kênh (băng thông) cho các mạng không dây 2.4GHz."
			},{
				type: "name",
				title: "Kênh",
				content: "Chọn kênh hoạt động cho mạng không dây tần số 2.4GHz. Chúng tôi khuyến nghị để mục chọn kênh là Tự động, nếu bạn không gặp vấn đề về kết nối không dây"
			},{
				type: "name",
				title: "Công suất truyền tải",
				content: "Chọn một trong cao, Trung, hoặc thấp để xác định dữ liệu truyền tải điện năng. Mặc định và thiết lập được đề nghị là cao."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Không dây 5GHz",
			CONTENT: [{
				type: "name",
				title: "Kích hoạt vô tuyến không dây",
				content: "Chọn hộp kiểm này để kích hoạt 5GHz tần số vô tuyến không dây."
			},{
				type: "name",
				title: "Tên mạng không dây (SSID)",
				content: "Bạn có thể để lại các tên mạng mặc định (SSID) như nó có, hoặc nhập một tên mới (tối đa 32 ký tự). Trường này là phân biệt chữ hoa."
			},{
				type: "name",
				title: "Giấu SSID",
				content: "Chọn hộp kiểm này nếu bạn muốn giấu tên mạng 5GHz (SSID) từ danh sách mạng Wi-Fi."
			},{
				type: "name",
				title: "Bảo mật",
				content: "Chọn một trong các tùy chọn bảo mật sau đây:",
				children: [{
					type: "name",
					title: "Không bảo mật",
					content: "Chọn tùy chọn này để vô hiệu hóa bảo mật không dây. Nó là rất khuyến khích bạn kích hoạt bảo mật không dây để bảo vệ mạng không dây của bạn từ truy cập trái phép."
				},{
					type: "name",
					title: "WPA/WPA2-Cá nhân",
					content: "Chọn lựa chọn này để kích hoạt phương pháp xác thực chuẩn dựa trên mã chia sẻ (PSK), có thể gọi là mật mã. Lựa chọn này được khuyến nghị. Nếu chọn lựa chọn này, vui lòng cấu hình các mục sau",
					children: [{
						type: "name",
						title: "Phiên bản",
						content: "Chọn một phiên bản bảo mật cho mạng không dây của bạn.",
						children: [{
							type: "name",
							title: "Tự động",
							content: "Tùy chọn này hỗ trợ nhiều thực của WPA (Wi-Fi Protected Access) tiêu chuẩn, chẳng hạn như WPA và WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Tùy chọn này chỉ hỗ trợ mã hóa TKIP cung cấp một mức độ bảo mật."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "tùy chọn hỗ trợ mã hóa AES này cung cấp một mức độ tốt hơn về bảo mật hơn WPA-PSK và được khuyến khích."
						}]
					},{
						type: "name",
						title: "Mã hóa",
						content: "Chọn một kiểu mã hóa bảo mật: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), hoặc tự động (cho cả TKIP và AES). Đó là không nên sử dụng mã hóa TKIP nếu Router hoạt động ở chế độ 802.11n, vì TKIP không được hỗ trợ bởi đặc điểm kỹ thuật 802.11n. Nếu được chọn TKIP, WPS chức năng sẽ bị vô hiệu."
					},{
						type: "name",
						title: "Mật mã",
						content: "Nhập một mật khẩu không dây từ 8 đến 63 ký tự ASCII, hoặc từ 8 đến 64 ký tự thập lục phân vào lĩnh vực này."
					}]
				},{
					type: "name",
					title: "WPA/WPA2 - Doanh nghiệp",
					content: "Chọn tùy chọn này để cho phép các phương pháp xác thực cao cấp hơn sử dụng một máy chủ RADIUS (Từ xa Xác thực Quay Trong sử dụng dịch vụ) . Nếu được lựa chọn, chức năng WPS sẽ bị vô hiệu.",
					children: [{
						type: "name",
						title: "Phiên bản",
						content: "Chọn một phiên bản bảo mật cho mạng không dây của bạn.",
						children: [{
							type: "name",
							title: "Tự động",
							content: "Tùy chọn này hỗ trợ nhiều thực của WPA (Wi-Fi Protected Access) tiêu chuẩn, chẳng hạn như WPA và WPA2."
						},{
							type: "name",
							title: "WPA",
							content: "Tùy chọn này chỉ hỗ trợ mã hóa TKIP cung cấp một mức độ bảo mật."
						},{
							type: "name",
							title: "WPA2",
							content: "tùy chọn hỗ trợ mã hóa AES này cung cấp một mức độ tốt hơn về bảo mật hơn WPA-PSK và được khuyến khích."
						}]
					},{
						type: "name",
						title: "Mã hóa",
						content: "Chọn một kiểu mã hóa bảo mật: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), hoặc tự động (cho cả TKIP và AES). Đó là không nên sử dụng mã hóa TKIP nếu Router hoạt động ở chế độ 802.11n, vì TKIP không được hỗ trợ bởi đặc điểm kỹ thuật 802.11n. Nếu được chọn TKIP, WPS chức năng sẽ bị vô hiệu."
					},{
						type: "name",
						title: "IP máy chủ RADIUS",
						content: "Nhập địa chỉ IP của máy chủ RADIUS."
					},{
						type: "name",
						title: "Cổng RADIUS",
						content: "Nhập số cổng của máy chủ RADIUS"
					},{
						type: "name",
						title: "Mật mã RADIUS",
						content: "Nhập mật khẩu chia sẻ của máy chủ RADIUS."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Chọn lựa chọn này để kích hoạt phương pháp xác thực cơ bản nếu một số thiết bị của bạn chỉ có thể truy cập mạng không dây bằng cách sử dụng WEP (Wired Equivalent Privacy)",
					children: [{
						type: "name",
						title: "Dạng",
						content: "Chọn một loại chứng thực cho mạng không dây của bạn. Mặc định là tự động, tự động chọn hệ thống mở hoặc Khóa chia sẻ dựa trên các yêu cầu về năng lực và truy cập các máy khách không dây."
					},{
						type: "name",
						title: "Định dạng mã WEP",
						content: "định dạng ASCII Hoặc sử dụng hoặc chọn Thập lục phân. Định dạng ASCII là một sự kết hợp của các ký tự chữ và số. Định dạng hệ thập lục phân là một sự kết hợp của các số (0-9) và chữ cái (AF, af)."
					},{
						type: "name",
						title: "Dạng mã",
						content: "Chọn độ dài của khoá WEP.",
						children:[{
							type: "name",
							title: "64-bit",
							content: "Cho phép bạn nhập vào 10 chữ số thập lục phân (0-9, AF, af) hoặc 5 ký tự ASCII vào trường giá trị WEP."
						},{
							type: "name",
							title: "128-bit",
							content: "Cho phép bạn nhập vào 26 chữ số thập lục phân (0-9, AF, af) hoặc 13 ký tự ASCII vào trường giá trị WEP."
						}]
					},{
						type: "name",
						title: "Giá trị mã",
						content: "Nhập mã WEP vào khung tương ứng"
					}]
				}]
			},{
				type: "name",
				title: "Chế độ",
				content: "Chọn một chế độ truyền hỗn hợp."
			},{
				type: "name",
				title: "Độ rộng kênh",
				content: "Chọn chiều rộng kênh (băng thông) cho các mạng không dây 5GHz."
			},{
				type: "name",
				title: "Kênh",
				content: "Chọn kênh hoạt động cho mạng không dây tần số 5GHz. Chúng tôi khuyến nghị để mục chọn kênh là Tự động, nếu bạn không gặp vấn đề về kết nối không dây"
			},{
				type: "name",
				title: "Công suất truyền tải",
				content: "Chọn một trong cao, Trung, hoặc thấp để xác định dữ liệu truyền tải điện năng. Mặc định và thiết lập được đề nghị là cao."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		WPS: {	
			TITLE: "Mã PIN của Router",
			CONTENT: [{
				type: "paragraph",
				content: "Các thiết bị khác có thể kết nối đến router này bằng WPS với mã PIN của router"
			},{
				type: "name",
				title: "Mã PIN của Router",
				content: "Chuyển chế độ Mở cho phép các thiết bị không dây để kết nối với Router sử dụng PIN của Router (Personal Identification Number)."
			},{
				type: "name",
				title: "PIN",
				content: "Hiển thị mã PIN của router. Mã PIN mặc định có thể được tìm thấy ở nhãn của router. Bấm chọn Tạo để tạo mã PIN mới theo cách ngẫu nhiên hoặc bấm chọn Mặc định để khôi phục mã PIN hiện tại về mã PIN mặc định"
			}]
		},

		WPS_WIZARD: {
			TITLE: "Thuật sỹ WPS",
			CONTENT:[{
				type: "name",
				title: "Nhấn nút (Khuyến nghị)",
				content: "Chọn phương pháp này thiết lập để cho phép các tính năng WPS để dễ dàng kết nối với bất kỳ thiết bị WPS cho phép vào mạng không dây của bạn bằng cách sử dụng nút WPS hoặc hầu như bằng cách sử dụng nút Kết nối."
			},{
				type: "name",
				title: "PIN",
				content: "Chọn phương pháp thiết lập này để thêm một thiết bị bằng tay bằng cách nhập vào các thiết bị không dây của WPS PIN vào lĩnh vực này và nhấp vào Kết nối."
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "Máykhách không dây trực tuyến",
			CONTENT: [{
				type: "name",
				title: "Số lượng máy khách",
				content: "Hiển thị số máy khách không dây liên kết"
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Hiển thị địa chỉ MAC của các máy khách không dây đi kèm."
			},{
				type: "name",
				title: "Dạng kết nối",
				content: "Hiển thị các băng tần không dây (2.4GHz hoặc 5GHz) của các máy khách không dây đi kèm."
			},{
				type: "name",
				title: "Bảo mật",
				content: "Hiển thị dạng bảo mật của máy khách không dây liên kết"
			},{
				type: "name",
				title: "Gói tin đã nhận",
				content: "Hiển thị số lượng gói tin nhận được bởi các máy khách không dây đi kèm."
			},{
				type: "name",
				title: "Gói tin đã gửi",
				content: "Hiển thị số lượng các gói tin gửi của khách hàng không dây đi kèm."
			},{
				type: "paragraph",
				content: "Nhấn Làm mới để cập nhật thông tin trên trang này."
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "Cài đặt",
			CONTENT: [{
				type: "paragraph",
				content: "Mạng khách cho phép bạn thiết lập một mạng độc lập với tên mạng không dây (SSID) và mật mã hoàn toàn khác để cho phép khách truy cập mạng không dây của bạn"
			},{
				type: "name",
				title: "Cho phép thiết bị trong  Mạng khách liên lạc",
				content: "Chọn hộp chọn này để cho phép các thiết bị không dây trong Mạng khách có thể giao tiếp với nhau"
			},{
				type: "name",
				title: "Cho phép máy khách truy cập mạng nội bộ của tôi",
				content: "Chọn hộp chọn này để cho phép thiết bị không dây trong Mạng khách có thể truy cập mạng nội bộ được chia sẻ và máy in của bạn."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "Không dây 2,4GHz/5GHz",
			CONTENT: [{
				type: "name",
				title: "Kích hoạt Mạng khách",
				content: "Chọn hộp chọn này để kích hoạt chức năng Mạng khách"
			},{
				type: "name",
				title: "Tên mạng không dây (SSID)",
				content: "Bạn có thể sử dụng tên Mạng khách mặc định hoặc tạo tên mới (tối đa 32 ký tự)"
			},{
				type: "name",
				title: "Giấu SSID",
				content: "Chọn hộp chọn này nếu bạn muốn giấu Tên Mạng khách (SSID)"
			},{
				type: "name",
				title: "Bảo mật",
				content: "Khi bạn chọn không bao giờ cập nhật mật mã, vui lòng chọn một trong số các tùy chọn bảo mật sau:",
				children: [{
					type: "name",
					title: "Không bảo mật",
					content: "Chọn tùy chọn này để vô hiệu hóa bảo mật không dây. Nó là rất khuyến khích bạn kích hoạt bảo mật không dây để bảo vệ mạng của bạn khách từ truy cập trái phép."
				},{
					type: "name",
					title: "WPA/WPA2-Cá nhân",
					content: "Chọn tùy chọn này để cho phép các phương pháp thẩm định tiêu chuẩn dựa trên một khóa tiềnchia sẻ (PSK), cũng được gọi là cụm từ mật khẩu. Tùy chọn này là mặc định và khuyến khích. Nếu được chọn, cấu hình như sau.",
					children: [{
						type: "name",
						title: "Phiên bản",
						content: "Chọn một phiên bản bảo mật cho mạng không dây của bạn.",
						children: [{
							type: "name",
							title: "Tự động",
							content: "Tùy chọn này hỗ trợ nhiều thực của WPA (Wi-Fi Protected Access) tiêu chuẩn, chẳng hạn như WPA và WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "Tùy chọn này chỉ hỗ trợ mã hóa TKIP cung cấp một mức độ bảo mật."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "tùy chọn hỗ trợ mã hóa AES này cung cấp một mức độ tốt hơn về bảo mật hơn WPA-PSK và được khuyến khích."
						}]
					},{
						type: "name",
						title: "Mã hóa",
						content: "Chọn một kiểu mã hóa bảo mật: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), hoặc tự động (cho cả TKIP và AES). Đó là không nên sử dụng mã hóa TKIP nếu Router hoạt động ở chế độ 802.11n, vì TKIP không được hỗ trợ bởi đặc điểm kỹ thuật 802.11n. Nếu được chọn TKIP, WPS chức năng sẽ bị vô hiệu."
					}]
			}]},{
				type: "name",
				title: "Mật mã",
				content: "Hoặc sử dụng mật mã được tạo ngẫu nhiên, hoặc tạo mật mã từ 8 đến 63 ký tự ASCII hoặc từ 8 đến 64 ký tự thập lục phân (0-9, a-f, A-F)"
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},

		NAT: {
			TITLE: "Gateway lớp ứng dụng (ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG cho phép tùy chỉnh địa chỉ mạng Dịch lọc (NAT) theo cây được cắm vào cổng để hỗ trợ địa chỉ và cổng dịch cho lớp ứng dụng nhất định \"điều khiển/dữ liệu\" các giao thức FTP, TFTP, H323, vv Cho phép ALG được khuyến khích."
			},{
				type: "name",
				title: "Kích hoạt FTP ALG",
				content: "Nếu được chọn, nó cho phép FTP (File Transfer Protocol) khách hàng và máy chủ để chuyển dữ liệu thông qua NAT."
			},{
				type: "name",
				title: "Kích hoạt TFTP ALG",
				content: "Nếu được chọn, nó cho phép TFTP (Trivial File Transfer Protocol) khách hàng và máy chủ để chuyển dữ liệu thông qua NAT."
			},{
				type: "name",
				title: "Kích hoạt H323 ALG",
				content: "Nếu được chọn, nó cho phép khách hàng Microsoft NetMeeting để giao tiếp thông qua NAT."
			},{
				type: "name",
				title: "Kích hoạt RTSP ALG",
				content: "Nếu được chọn, nó cho phép các khách hàng phương tiện truyền thông máy nghe nhạc để giao tiếp với các máy chủ streaming phương tiện truyền thông qua NAT."
			},{
				type: "name",
				title: "Kích hoạt PPTP Passthrough",
				content: "Nếu được chọn, nó cho phép Point-to-Point phiên tới đường hầm thông qua một mạng IP và đi qua Router."
			},{
				type: "name",
				title: "Kích hoạt L2TP Passthrough",
				content: "Nếu được chọn, nó cho phép lớp 2 buổi Point-to-Point được tạo đường hầm qua một mạng IP và đi qua Router."
			},{
				type: "name",
				title: "Kích hoạt IPSec Passthrough",
				content: "Nếu được chọn, nó cho phép Internet Protocol Security (IPSec) đến đường hầm thông qua một mạng IP và đi qua Router. IPSec sử dụng các dịch vụ an ninh crytographic để bảo đảm thông tin và an toàn trên các mạng IP."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Máy chủ ảo",
			CONTENT: [{
				type: "paragraph",
				content: "Máy chủ ảo được sử dụng để thiết lập các dịch vụ công trên mạng nội bộ của bạn. Một máy chủ ảo được định nghĩa như là một cổng bên ngoài, và tất cả các yêu cầu từ Internet đến cổng bên ngoài này sẽ được chuyển hướng đến một máy tính được, mà phải được cấu hình với một địa chỉ IP tĩnh hoặc được dự trữ."
			},{
				type: "name",
				title: "Dạng dịch vụ",
				content: "Hiển thị tên của máy chủ ảo của bạn."
			},{
				type: "name",
				title: "Cổng ngoài",
				content: "Hiển thị số cổng hoặc một dải các cổng được sử dụng bởi các máy chủ ảo."
			},{
				type: "name",
				title: "IP nội bộ",
				content: "Hiển thị các địa chỉ IP của máy tính đang chạy các ứng dụng dịch vụ."
			},{
				type: "name",
				title: "Cổng trong",
				content: "Hiển thị số cổng của máy tính đang chạy các ứng dụng dịch vụ."
			},{
				type: "name",
				title: "Giao thức",
				content: "Hiển thị các giao thức được sử dụng cho các ứng dụng dịch vụ: TCP, UDP, hoặc Tất cả (Tất cả các giao thức được hỗ trợ bởi các Router)."
			},{
				type: "name",
				title: "Trạng thái",
				content: "Hiển thị tình trạng hiện tại (kích hoạt hoặc vô hiệu hóa) của các quy tắc lọc cụ thể."
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị tùy chọn để sửa đổi hoặc xóa các quy tắc tương ứng."
			},{
				type: "step",
				title: "Thiết lập một điều luật máy chủ ảo",
				content: [
					"1. Bấm chọn Thêm.",
					"2. Nhấp vào Xem Dịch vụ hiện tại để chọn một dịch vụ từ danh sách để tự động cư số cổng thích hợp trong các lĩnh vực Cổng bên ngoài và cảng Nội bộ. Nếu dịch vụ không được liệt kê, nhập số bên ngoài cổng (ví dụ: 21) hoặc một loạt các cổng (ví dụ: 21-25). Để trống Cảng Nội bộ nếu nó là giống như Cổng bên ngoài hoặc nhập một số cổng cụ thể (ví dụ: 21) nếu Cổng bên ngoài là một cổng duy nhất. Nhập địa chỉ IP của máy tính đang chạy các ứng dụng dịch vụ trong các định dạng dấu chấm thập phân vào trường Nội bộ IP.",
					"3. Chọn một giao thức cho các ứng dụng dịch vụ: TCP, UDP, hoặc Tất cả từ danh sách thả xuống giao thức.",
					"4. Chọn Kích hoạt.",
					"5. Nhấn OK."
				]
			},{
				type: "step",
				title: "Sửa đổi hoặc xóa một quy tắc máy chủ ảo",
				content: "Trong bảng này, bấm chọn biểu tượng Chỉnh sửa hoặc biểu tượng Thùng rác tương ứng với từng mục để chỉnh sửa hoặc xóa mục đó"
			},{
				type: "step",
				title: "Để xóa nhiều quy tắc",
				content: "Chọn tất cả các quy tắc mà bạn muốn xóa, bấm Xóa trên bảng."
			},{
				type: "note",
				title: "Lưu ý",
				content: "Nếu thiết bị lưu trữ địa phương của bạn được lưu trữ nhiều hơn một loại hình dịch vụ có sẵn, bạn cần phải tạo ra một quy tắc cho mỗi dịch vụ."
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Cổng kích hoạt",
			CONTENT: [{
				type: "paragraph",
				content: "Cổng kích hoạt được sử dụng để chuyển tiếp lưu lượng trên một cổng nhất định để máy chủ cụ thể trên mạng."
			},{
				type: "name",
				title: "Ứng dụng",
				content: "Hiển thị tên của ứng dụng."
			},{
				type: "name",
				title: "Cổng kích hoạt",
				content: "Hiển thị các cổng giao thông đi sử dụng để kích hoạt một quy tắc lọc của một kết nối gửi đi."
			},{
				type: "name",
				title: "Kích hoạt Giao thức",
				content: "Hiển thị các giao thức được sử dụng cho Cổng kích hoạt. TCP, UDP, hoặc Tất cả (Tất cả các giao thức được hỗ trợ bởi các Router."
			},{
				type: "name",
				title: "Cổng ngoài",
				content: "Hiển thị các cổng hoặc khoảng cổng được sử dụng bởi các hệ thống từ xa. Một phản ứng bằng cách sử dụng một trong các cổng này sẽ được chuyển tiếp đến máy tính mà gây nên nguyên tắc này. Bạn có thể nhập tối đa 5 nhóm cổng (hoặc phân cổng). Mỗi nhóm cổng phải được phân cách bằng \",\" (dấu phẩy), ví dụ, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
			},{
				type: "name",
				title: "Giao thức mở rộng",
				content: "Hiển thị các giao thức được sử dụng cho cổng đến: TCP, UDP, hoặc tất cả (tất cả các giao thức được hỗ trợ bởi các bộ định tuyến)."
			},{
				type: "name",
				title: "Trạng thái",
				content: "Hiển thị tình trạng hiện tại (kích hoạt hoặc vô hiệu hóa) của các quy tắc lọc cụ thể."
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị tùy chọn để sửa đổi hoặc xóa các quy tắc tương ứng."
			},{
				type: "step",
				title: "Để thiết lập một quy định cổng kích hoạt",
				content: [{
					type: "note",
					title: "Lưu ý",
					content: "Mỗi quy tắc chỉ có thể được sử dụng bởi một máy chủ tại một thời điểm."
				},
					"1. Bấm chọn Thêm.",
					"2. Nhấp vào Xem ứng dụng hiện có để lựa chọn một ứng dụng từ danh sách để tự động tạo các giá trị mặc định vào các trường thích hợp. Nếu bạn muốn thêm một ứng dụng chưa niêm yết, nhập thủ công các ứng dụng, cổng kích hoạt, giao thức kích hoạt, Cổng mở rộng và giao thức mở rộng.",	
					"3. Chọn Kích hoạt.",
					"4. Nhấp OK."
				]
			},{
				type: "step",
				title: "Sửa đổi hoặc xóa một quy tắc cổng kích hoạt",
				content: "Trong bảng này, bấm chọn biểu tượng Chỉnh sửa hoặc biểu tượng Thùng rác tương ứng với từng mục để chỉnh sửa hoặc xóa mục đó"
			},{
				type: "step",
				title: "Để xóa nhiều quy tắc cổng kích hoạt",
				content: "Trong bảng, chọn tất cả các quy tắc mà bạn muốn xóa, bấm Xóa trên bảng."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "DMZ (Demilitarized Zone) tính năng máy chủ cho phép một máy chủ địa phương để được tiếp xúc với Internet cho một dịch vụ đặc biệt, chẳng hạn như trò chơi Internet hoặc hội nghị video. Về cơ bản, các DMZ cho phép một máy tính duy nhất trên mạng LAN của bạn để mở tất cả các cổng của nó. Máy tính này cần phải được cấu hình với một địa chỉ IP tĩnh và có chức năng DHCP máy khách của nó bị vô hiệu hóa."
			},{
				type: "step",
				title: "Để chỉ định một máy tính hoặc máy chủ là một máy chủ DMZ",
				content: [
					"1. Nhấp vào Cho phép DMZ.",
					"2. Trong mục địa chỉ IP máy chủ DMZ, nhập địa chỉ IP của một máy tính cục bộ để thiết lập như các máy chủ DMZ.",
					"3. Bấm chọn Lưu."
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "Theo mặc định, tính năng  Universal Plug-and-Play (UPnP) được kích hoạt để cho phép các thiết bị như máy tính và các thiết bị Internet để tự động phát hiện và giao tiếp với nhau trong mạng cục bộ."
			},{
				type: "paragraph",
				content: "Danh sách dịch vụ UPnP hiển thị các thông tin thiết bị UPnP."
			},{
				type: "name",
				title: "Mô tả dịch vụ",
				content: "Hiển thị một mô tả ngắn gọn về các máy chủ cục bộ mà khởi yêu cầu UPnP."
			},{
				type: "name",
				title: "Cổng ngoài",
				content: "Hiển thị các cổng bên ngoài được mở ra bởi các máy chủ cục bộ."
			},{
				type: "name",
				title: "Giao thức",
				content: "Hiển thị các loại giao thức mạng được sử dụng bởi các máy chủ cục bộ."
			},{
				type: "name",
				title: "Địa chỉ IP nội bộ",
				content: "Hiển thị các địa chỉ IP của các máy chủ cục bộ."
			},{
				type: "name",
				title: "Cổng trong",
				content: "Hiển thị các cổng nội bộ đó được mở ra bởi các máy chủ cục bộ."
			},{
				type: "paragraph",
				content: "Nhấp vào Làm mới để cập nhật Danh sách dịch vụ UPnP"
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "Cài đặt thiết bị",
			CONTENT: [{
				type: "paragraph",
				content: "Màn hình Cài đặt thiết bị hiển thị các thông tin liên quan đến các thiết bị USB kết nối đến router thông qua cổng USB"
			},{
				type: "name",
				title: "Quét",
				content: "Thông thường, Router sẽ tự động phát hiện thiết bị mới được kết nối. Nếu Router không tự phát hiện, vui lòng nhấn nút này để quét các thiết bị mới được kết nối và làm mới màn hình hiển thị với thông tin mới được cập nhật"
			},{
				type: "name",
				title: "Nhãn",
				content: "Hiển thị tên của nhãn USB"
			},{
				type: "name",
				title: "Dung lượng",
				content: "Hiển thị tổng dung lượng lưu trữ của USB"
			},{
				type: "name",
				title: "Dung lượng trống",
				content: "Hiển thị dung lượng lưu trữ trống khả dụng hiện tại"
			},{
				type: "name",
				title: "Tháo an toàn",
				content: "Bấm chọn nút này để gỡ thiết bị lưu trữ USB trước khi ngắt kết nối thiết bị về mặt vật lý với router"
			},{
				type: "paragraph",
				content: "Xin lưu ý rằng nút Tháo an toàn chỉ xuất hiện khi có một thiết bị lưu trữ USB kết nối với Router, và bạn sẽ không thể gỡ các thiết bị USB trong khi đang bận."
			},{
				type: "name",
				title: "Kích hoạt",
				content: "Tuỳ chọn này chỉ xuất hiện khi có một thiết bị lưu trữ USB kết nối với Router. Chọn để cho phép chia sẻ tập tin của thiết bị USB."
			},{
				type: "step",
				title: "Để thiết lập một máy chủ tập tin",
				content: [
				"1. Gắn thiết bị lưu trữ USB vào cổng USB của Router bằng cách sử dụng một cáp USB.",
				"2. Các thiết bị USB mới được gắn kèm nên được tự động phát hiện bởi các Router và hiển thị các thông tin trong phần Cài đặt Thiết bị. Nếu không, nhấn Quét.",
				"3. Chọn Kích hoạt để kích hoạt tính năng chia sẻ tập tin."
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "Tài khoản chia sẻ",
			CONTENT: [{
				type: "name",
				title: "Tài khoản",
				content: "Bạn có thể chọn để sử dụng tài khoản mặc định để đăng nhập vào các tập tin và thư mục được chia sẻ hoặc sử dụng tài khoản mới và nhập vào dưới đây để tạo một tài khoản người dùng mới."
			},{
				type: "name",
				title: "Tên đăng nhập/Mật mã",
				content: "Nhập một chữ số hoặc dưới dòng chuỗi lên đến 15 ký tự. Tên người dùng phải bắt đầu với một ký tự la tinh. Các trường này là phân biệt chữ hoa."
			},{
				type: "name",
				title: "Xác nhận mật mã",
				content: "Nhập lại mật khẩu để xác nhận không có lỗi đánh máy. Lĩnh vực này phân biệt chữ hoa."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "Cài đặt chia sẻ",
			CONTENT: [{
				type: "name",
				title: "Tên Mạng/Máy chủ đa phương tiện",
				content: "Hiển thị tên sử dụng để truy cập thiết bị lưu trữ USB được kết nối"
			},{
				type: "name",
				title: "Kích hoạt",
				content: "Chọn để cho phép các phương pháp truy cập."
			},{
				type: "name",
				title: "Phương thức truy cập",
				content: "Có ba phương pháp truy cập để cho phép truy cập vào các thiết bị lưu trữ USB kèm theo. Bạn có thể chọn một hoặc nhiều phương thức truy cập bằng cách chọn hộp kiểm tương ứng.",
				children: [{
					type: "name",
					title: "Mạng lân cận",
					content: "Nếu kích hoạt, người dùng trong mạng của bạn có thể truy cập ổ lưu trữ USB bằng cách sử dụng một địa chỉ IP được gán (ví dụ: \\\\192.168.0.1)"
				},{
					type: "name",
					title: "FTP",
					content: "Nếu được kích hoạt, khách hàng FTP trên mạng nội bộ của bạn có thể truy cập các thiết bị lưu trữ USB bằng cách sử dụng địa chỉ IP được chỉ định, theo sau là số cổng của máy chủ FTP (ví dụ ftp://192.168.0.1:21)."
				},{
					type: "name",
					title: "FTP (Qua Internet)",
					content: "Nếu bật, người dùng từ xa có thể truy cập vào ổ lưu trữ USB thông qua FTP trên Internet. Tính năng này hỗ trợ cả tải xuống và tải lên tập tin. Để thay đổi số cổng FTP máy chủ, nhập một số cổng và nhấp vào Lưu để áp dụng các thay đổi."
				}]
			},{
				type: "name",
				title: "Đường dẫn",
				content: "Hiển thị các địa chỉ được sử dụng để truy cập các thiết bị lưu trữ USB được chia sẻ."
			},{
				type: "name",
				title: "Cổng",
				content: "Hiện số cổng của máy chủ FTP. Sử dụng giá trị mặc định 21 hoặc một giá trị từ 1024 đến 65535."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "Chia sẻ thư mục",
			CONTENT: [{
				type: "name",
				title: "Chia sẻ tất cả",
				content: "Chuyển sang chế độ Mở để chia sẻ tất cả các thư mục hoặc chuyển sang chế độ Tắt để chỉ chia sẻ các thư mục được chọn"
			},{
				type: "name",
				title: "Kích hoạt xác thực",
				content: "Đó là khuyến khích mạnh mẽ để cho phép xác thực để yêu cầu người dùng nhập vào tên đăng nhập và mật mã hợp lệ để truy cập vào các thư mục chia sẻ."
			},{
				type: "name",
				title: "Tên thư mục",
				content: "Hiển thị tên thư mục được chia sẻ"
			},{
				type: "name",
				title: "Đường dẫn thư mục",
				content: "Hiển thị đường dẫn đến thư mục được chia sẻ"
			},{
				type: "name",
				title: "Chia sẻ đa phương tiện",
				content: "Cho biết thư mục được chia sẻ có cho phép chia sẻ đa phương tiện hay không"
			},{
				type: "name",
				title: "Tên nhãn",
				content: "Hiển thị tên của nhãn được chia sẻ"
			},{
				type: "name",
				title: "Trạng thái",
				content: "Hiển thị trạng thái của tập tin được chia sẻ bằng đèn hiệu"
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị tùy chọn để sửa đổi hoặc xóa các thư mục chia sẻ tương ứng."
			},{
				type: "name",
				title: "Duyệt",
				content: "Nhấn vào đây để tìm kiếm một thư mục chia sẻ."
			},{
				type: "name",
				title: "Cho phép truy cập Mạng khách",
				content: "Chọn để cho phép máy khách ở Mạng khách truy cập thư mục được chia sẻ"
			},{
				type: "name",
				title: "Kích hoạt xác thực",
				content: "Chọn để yêu cầu người dùng truy cập thư mục chia sẻ với tên đăng nhập và mật mã hợp lệ"
			},{
				type: "name",
				title: "Kích hoạt cho phép thay đổi",
				content: "Chọn để cho phép người dùng được phép thay đổi trên thư mục chia sẻ"
			},{
				type: "name",
				title: "Kích hoạt Chia sẻ đa phương tiện",
				content: "Chọn để kích hoạt chia sẻ đa phương tiện"
			},{
				type: "name",
				title:"Làm mới",
				content: "Bấm chọn để cập nhật danh sách tập tin chia sẻ"
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "Máy chủ in ấn",
			CONTENT: [{
				type: "name",
				title:"Máy chủ in ấn",
				content: "Chuyển sang mở để kích hoạt chức năng máy chủ in ấn"
			},{
				type: "name",
				title:"Tên máy in",
				content: "Hiển thị tên máy in của bạn đang kết nối đến router"
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Quyền kiểm soát của phụ huynh",
			CONTENT: [{
				type: "paragraph",
				content: "Với Quyền kiểm soát của phụ huynh, bạn có thể chặn các trang web không phù hợp, rõ ràng và độc hại; hạn chế truy cập bởi thời điểm nhất định trong ngày (ví dụ, facebook hay youtube khi làm bài); và đồng thời bảo vệ mỗi thiết bị trên mạng gia đình của bạn chống lại phần mềm độc hại và lừa đảo qua một điểm kiểm soát trung tâm."
			},{
				type: "name",
				title: "Quyền kiểm soát của phụ huynh",
				content: "Chuyển sang mở để kích hoạt chức năng Quyền kiểm soát của phụ huynh"
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "Thiết bị dưới Quyền kiểm soát của phụ huynh",
			CONTENT: [{
				type: "name",
				title: "Tên thiết bị",
				content: "Hiển thị tên của tất cả các thiết bị kết nối máy khách hiện đang dưới Quyền kiểm soát của phụ huynh"
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Hiển thị địa chỉ MAC của tất cả các thiết bị kết nối máy khách hiện đang dưới Quyền kiểm soát của phụ huynh."
			},{
				type: "name",
				title: "Thời gian truy cập Internet",
				content: "Hiển thị khoảng thời gian truy cập giới hạn. Thời gian biểu sẽ có hiệu lực dựa trên thời gian hệ thống của router, có thể được cài đặt ở mục \"Công cụ hệ thống -> Cài đặt thời gian\"."
			},{
				type: "name",
				title: "Mô tả",
				content: "Hiển thị một mô tả ngắn gọn về các thiết bị kết nối."
			},{
				type: "name",
				title: "Trạng thái",
				content: "Hiển thị tình trạng (kích hoạt hoặc vô hiệu hóa) của Quyền kiểm soát của phụ huynh của các thiết bị tương ứng."
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị lựa chọn Tùy chỉnh hoặc Xóa thiết bị tương ứng"
			},{
				type: "step",
				title: "Để giới hạn một thiết bị mới",
				content: [
					"1. Bấm chọn Thêm.",
					"2. Bấm chọn Xem thiết bị hiện hữu và chọn một thiết bị đang kết nối từ Danh sách thiết bị truy cập; hoặc nhập Tên thiết bị và Địa chỉ MAC theo cách thủ công để thêm một thiết bị đang không kết nối",
					"3. Bấm chọn biểu tượng Thời gian truy cập Internet để xác định khoảng thời gian bị giới hạn",
					"4. Nhập một mô tả ngắn gọn vào mục Mô tả. (Tùy chọn)",
					"5. Chọn Kích hoạt.",
					"6. Nhấp vào OK."
				]
			},{
				type: "paragraph",
				content: "Để chỉnh sửa hoặc xóa một mục Quyền kiểm soát của phụ huynh, đơn giản bấm chọn biểu tưởng Chỉnh sửa để chỉnh sửa thông tin hoặc biểu tượng Thùng rác để xóa mục tương ứng"
			},{
				type: "paragraph",
				content: "Để xóa nhiều mục, chọn tất cả các mục cần xóa và bấm chọn Xóa ở trên bảng"
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "Nội dung giới hạn",
			CONTENT: [{
				type: "name",
				title: "Sổ đen",
				content: "Có các từ khóa đó sẽ được sử dụng để ngăn chặn bất kỳ truy cập trang web từ các thiết bị máy khách được quy định trong Danh mục Quyền kiểm soát của phụ huynh.",
				children: [{
					type: "paragraph",
					content: "Nhấp vào Thêm một từ khóa mới để thêm từ khoá vào Sổ đen. Để xóa một từ khóa, nhấp vào biểu tượng (-) của các từ khóa mà bạn muốn xóa."
				}]
			},{
				type: "name",
				title: "Sổ trắng",
				content: "Có địa chỉ trang web mà các thiết bị máy khách được quy định trong Danh mục Quyền kiểm soát của phụ huynh được phép truy cập.",
				children: [{
					type: "paragraph",
					content: "Nhấp vào Thêm một tên miền mới để thêm một trang web vào sổ trắng. Để xóa một trang web, nhấp vào biểu tượng (-) của trang web mà bạn muốn xóa."
				}]
			},{
				type: "paragraph",
				content: "Từ khóa cũng có thể là tên miền, ví dụ, www.mail.google.com hoặc www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "Chất lượng dịch vụ (QoS) giúp tùy chỉnh độ ưu tiên cho lưu lượng Internet dựa trên nhu cầu của bạn. Bạn có thể chọn cấp ưu tiên cho thiết bị hoặc ứng dụng trong danh sách điều luật QoS"
			},{
				type: "name",
				title: "Kích hoạt QoS",
				content: "Nhấp vào ô này để kích hoạt chức năng QoS."
			},{
				type: "name",
				title: "Băng thông tải lên",
				content: "Nhập băng thông tải lên tối đa được cung cấp bởi ISP (Nhà cung cấp dịch vụ Internet) của bạn."
			},{
				type: "name",
				title: "Băng thông tải xuống",
				content: "Nhập băng thông tải xuống tối đa được cung cấp bởi ISP của bạn."
			},{
				type: "name",
				title: "Ưu tiên cao",
				content: "Chỉ định một tỷ lệ phần trăm cho các lưu lượng ưu tiên cao."
			},{
				type: "name",
				title: "Ưu tiên vừa",
				content: "Chỉ định một tỷ lệ phần trăm cho các lưu lượng ưu tiên giữa."
			},{
				type: "name",
				title: "Ưu tiên thấp",
				content: "Chỉ định một tỷ lệ phần trăm cho các lưu lượng ưu tiên thấp."
			},{
				type: "note",
				title: "Lưu ý",
				content: "Tối đa(theo phần trăm) của tất cả các ưu tiên là 1"
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		QOS_RULE: {
			TITLE: "Danh sách điều luật QoS",
			CONTENT: [{
				type: "name",
				title: "Dạng",
				content: "Chọn một dạng bổ sung danh mục quy tắc QoS."
			},{
				type: "step",
				title: "Để thiết lập quy tắc ưu tiên cao/trung bình/thấp theo thiết bị",
				content: [
					"1. Bấm chọn Thêm.",
					"2. Chọn Theo thiết bị.",
					"3. Nhấp vào Xem Thiết bị hiện để lựa chọn thiết bị của bạn mong muốn từ danh sách Thiết bị truy cập, hoặc bạn có thể nhập một tên thiết bị và địa chỉ MAC của nó bằng tay vào thiết bị Tên và các lĩnh vực địa chỉ MAC.",
					"4. Nhấp OK."
				]
			},{
				type: "step",
				title: "Để thiết lập quy tắc ưu tiên cao/trung bình/thấp theo ứng dụng",
				content: [
					"1. Bấm chọn Thêm.",
					"2. Chọn Theo ứng dụng.",
					"3. Chọn ứng dụng bạn muốn từ Danh sách ứng dụng, hoặc bạn có thể tùy chỉnh ứng dụng bằng cách cấu hình tên, giao thức và cổng đích (1-65535) trong ô tương ứng, bạn có thể nhập một cổng hoặc nhiều cổng hoặc khoảng cổng, sử dụng dấu phẩy để phân cách (ví dụ: 21,36-105,111).",
					"4. Nhấp OK."
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "Nâng cấp cơ sở dữ liệu",
			CONTENT: [{
				type: "name",
				title: "Tập tin cơ sở dữ liệu mới",
				content: "Nhấp vào Duyệt để xác định vị trí tập tin cơ sở dữ liệu mới của bạn. Chọn và bấm vào Nâng cấp để nâng cấp cơ sở dữ liệu của bạn lên phiên bản mới hơn."
			},{
				type: "name",
				title: "Phiên bản cơ sở dữ liệu",
				content: "Hiển thị phiên bản cơ sở dữ liệu hiện hành."
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "Tường lửa",
			CONTENT: [{
				type: "name",
				title: "Tường lửa SPI",
				content: "Tường lửa SPI (Stateful Packet Inspection) ngăn chặn các cuộc tấn công mạng và hợp thức hóa lưu lượng qua router dựa trên giao thức"
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "Bảo vệ DoS",
			CONTENT: [{
				type: "name",
				title: "Bảo vệ DoS",
				content: "Bảo vệ DoS (Denial of Service) bảo vệ mạng LAN của bạn chống lại các cuộc tấn công DoS làm tràn mạng của bạn với các yêu cầu máy chủ"
			},{
				type: "name",
				title: "Lọc tấn công ICMP-FLOOD",
				content: "Kích hoạt để ngăn chặn các cuộc tấn công Internet Control Message Protocol (ICMP).",
				children: [{
					type: "name",
					title: "Tắt",
					content: "Không có bảo vệ."
				},{
					type: "name",
					title: "Thấp",
					content: "thấp-mức độ bảo vệ và ít ảnh hưởng đến hiệu suất router."
				},{
					type: "name",
					title: "Trung bình",
					content: "vừa phải cấp bằng bảo hộ và tác động bán đáng chú ý về hiệu suất router."
				},{
					type: "name",
					title: "Cao",
					content: "cao mức độ bảo vệ nhưng một tác động đáng kể về hiệu suất router."
				}]
			},{
				type: "name",
				title: "Lọc tấn công UDP-FLOOD",
				content: "Kích hoạt để ngăn chặncác cuộc tấn công User Datagram Protocol (UDP)."
			},{
				type: "name",
				title: "Lọc tấn công TCP-SYN-FLOOD",
				content: "Kích hoạt để ngăn chặn các cuộc tấn công Transmission Control Protocol-Synchronize(TCP-SYN)."
			},{
				type: "name",
				title: "Bỏ qua gói tin Ping từ cổng WAN",
				content: "Cho phép bỏ qua các gói tin ping từ cổng WAN"
			},{
				type: "name",
				title: "Cấm gói tin Ping từ cổng LAN",
				content: "Kích hoạt cấm các gói tin ping từ cổng LAN"
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Danh sách máy chủ DoS bị chặn",
			CONTENT: [{
				type: "name",
				title: "Danh sách máy chủ DoS bị chặn",
				content: "Danh sách các địa chỉ IP và MAC Address từ các nguồn tấn công DoS bị chặn."
			},{
				type: "step",
				title: "Để xóa một mục",
				content: "Trong danh sách Máy chủ, chọn mục mà bạn muốn xóa và nhấp vào Xoá trên bảng."
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "Kiểm soát truy cập",
			CONTENT: [{
				type: "paragraph",
				content: "Kiểm soát truy cập được sử dụng để cho phép hoặc khóa máy tính hoặc thiết bị xác định khác không được truy cập mạng của bạn.  Khi một thiết bị bị khóa, thiết bị sẽ không thể liên lạc với thiết bị khác hoặc kết nối đến Internet."
			},{
				type: "paragraph",
				content: "Để sử dụng các điều khiển truy cập, kích hoạt tính năng này và chỉ định sổ đen và sổ trắng. Nếu các Access Control là người khuyết tật (Off), tất cả các thiết bị, bao gồm cả những người trong danh sách đen, được phép kết nối."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Chế độ truy cập",
			CONTENT: [{
				type: "name",
				title: "Sổ đen",
				content: "Chỉ các thiết bị trên Sổ đen sẽ bị từ chối truy cập vào mạng của bạn."
			},{
				type: "name",
				title: "Sổ trắng",
				content: "Chỉ các thiết bị trên Sổ trắng sẽ được cấp quyền truy cập vào mạng của bạn."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Thiết bị trực tuyến",
			CONTENT: [{
				type: "name",
				title: "Tên thiết bị",
				content: "Hiển thị tên của các thiết bị kết nối."
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Hiển thị các địa chỉ IP của thiết bị kết nối."
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Hiển thị địa chỉ MAC của thiết bị kết nối."
			},{
				type: "name",
				title: "Dạng kết nối",
				content: "Hiển thị các kiểu kết nối của các thiết bị kết nối."
			},{
				type: "step",
				title: "Để chặn một thiết bị",
				content: "Trong bảng Thiết bị Trực tuyến bấm vào biểu tượng Chặn trong cột Sửa tương ứng với thiết bị mà bạn muốn chặn."
			},{
				type: "step",
				title: "Để chặn nhiều thiết bị",
				content: "Trong bảng Thiết bị Trực tuyến chọn tất cả các thiết bị mà bạn muốn chặn, nhấp vào Chặn trên bảng. Thiết bị này sẽ được tự động thêm vào các thiết bị trong sổ đen hoặc sổ trắng."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Thiết bị trong Sổ đen/Sổ trắng",
			CONTENT: [{
				type: "step",
				title: "Để danh sách đen hoặc danh sách trắng một thiết bị",
				content: [
					"1. Bấm chọn Thêm.",
					"2. Nhập tên thiết bị.",
					"3. Nhập địa chỉ MAC của thiết bị.",
					"4. Nhấp OK."
				]
			},{
				type: "step",
				title: "Để chỉnh sửa hoặc xóa một thiết bị trong Sổ đen/Sổ trắng",
				content: "Trong bảng Sổ đen/Sổ trắng, bấm chọn biểu tượng Chỉnh sửa hoặc biểu tượng Thùng rác tương ứng với thiết bị để chỉnh sửa hoặc xóa"
			},{
				type: "step",
				title: "Để xóa nhiều thiết bị trong Sổ đen/Sổ trắng",
				content: "Trong bảng sổ đen/sổ trắng, chọn tất cả các thiết bị mà bạn muốn xóa, bấm Xóa trên danh sách."
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "Cài đặt",
			CONTENT: [{
				type: "paragraph",
				content: "ARP (Address Resolution Protocol) ràng buộc là hữu ích cho việc kiểm soát truy cập của một máy tính cụ thể trong mạng LAN bằng cách liên kết các địa chỉ IP và địa chỉ MAC của thiết bị với nhau. ARP ràng buộc cũng ngăn chặn các thiết bị khác sử dụng một địa chỉ IP cụ thể."
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "Danh sách ARP",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị các địa chỉ MAC và IP của các thiết bị được kết nối."
			},{
				type: "name",
				title: "Số mục ARP",
				content: "Hiển thị tổng số các thiết bị hiện đang được kết nối với các Router."
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Hiển thị địa chỉ MAC của thiết bị kết nối."
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Hiển thị các địa chỉ IP được phân bổ cho các thiết bị kết nối."
			},{
				type: "name",
				title: "Kết hợp",
				content: "Cho biết các địa chỉ MAC và IP đang bị ràng buộc hay không."
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị tùy chọn để Bind hoặc Xóa các mục tương ứng từ danh sách."
			},{
				type: "note",
				title: "Lưu ý",
				content: "Bạn không thể ràng buộc các địa chỉ IP cùng với nhiều hơn một địa chỉ MAC."
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "Danh sách kết hợp",
			CONTENT: [{
				type: "step",
				title: "Để thiết lập một thiết bị với ARP ràng buộc",
				content: [
					"1. Bấm chọn Thêm.",
					"2. Nhập địa chỉ MAC của thiết bị.",
					"3. Nhập một địa chỉ IP mà bạn muốn liên kết với các địa chỉ MAC trên.",
					"4. Nhập một mô tả cho thiết bị này. (Tùy chọn)",
					"5. Chọn Kích hoạt.",
					"6. Nhấp vào OK."
				]
			},{
				type: "step",
				title: "Sửa đổi hoặc xóa một mục",
				content: "Trong Danh sách đóng sách, nhấp vào biểu tượng Sửa hoặc Xoá biểu tượng tương ứng với các mục mà bạn muốn chỉnh sửa hoặc xóa."
			},{
				type: "step",
				title: "Để xóa nhiều mục",
				content: "Trong Danh sách đóng sách, chọn tất cả các mục mà bạn muốn xóa, bấm Xóa trên danh sách"
			}]
		},
		
		IPV6: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "Chọn để kích hoạt (Mở) hay vô hiệu hóa (Tắt) các tính năng IPv6 của router."
			},{
				type: "title",
				title: "Dạng kết nối Internet: IP Tĩnh",
			},{
				type: "name",
				title: "IP Tĩnh",
				content: "Chọn loại hình này nếu ISP của bạn sử dụng IPv6 tĩnh gán địa chỉ."
			},{
				type: "name",
				title: "Địa chỉ IPv6/Gateway mặc định/DNS thứ nhất/DNS thứ hai",
				content: "Nhập các thông số như được cung cấp bởi ISP."
			},{
				type: "name",
				title: "Kích thước MTU",
				content: "Kích thước MTU (Đơn vị truyền tải lớn nhất-Maximum Transmission Unit) mặc định và phổ biến cho hầu hết mạng Ethernet là 1500 Byte. Chúng tôi không khuyến nghị thay đổi giá trị MTU trừ khi Nhà cung cấp dịch vụ Internet  của bạn yêu cầu"
			},{
				type: "title",
				title: "Dạng kết nối Internet: IP Động",
			},{
				type: "name",
				title: "IP Động",
				content: "Chọn loại hình này nếu ISP của bạn sử dụng địa chỉ giao động IPv6."
			},{
				type: "name",
				title: "Địa chỉ IPv6/Gateway mặc định/DNS thứ nhất/DNS thứ hai",
				content: "Các tham số này sẽ được tự động phân công của máy chủ DHCPv6 từ ISP của bạn."
			},{
				type: "name",
				title: "Làm mới",
				content: "Nhấp vào nút này để có được các thông số IPv6 mới từ máy chủ DHCPv6 của ISP."
			},{
				type: "name",
				title: "Giải phóng",
				content: "Nhấp vào nút này để khôi phục tất cả các địa chỉ IPv6 của máy chủ DHCPv6 được giao từ các ISP."
			},{
				type: "name",
				title: "Lấy địa chỉ IPv6",
				content: "Chọn DHCPv6 để lấy địa chỉ IPv6 non-temporary hoặc SLAAC để lấy địa chỉ IPv6 tạo từ gói tin advertisement của router,  tùy theo ISP của bạn."
			},{
				type: "name",
				title: "Prefix delegation",
				content: "Chọn Kích hoạt để lấy  prefix delegation từ Máy chủ DHCPv6 từ ISP, hoặc Vô hiệu hóa để chỉ định tiền tố địa chỉ theo cách thủ công. Máy khách trong LAN sẽ tạo địa chỉ IPv6 theo tiền tố này."
			},{
				type: "name",
				title: "Địa chỉ DNS",
				content: "Chọn \"Lấy động từ ISP\" hoặc \"Sử dụng địa chỉ DNS sau\" Nếu \"Sử dụng địa chỉ DNS sau\" được chọn, xin vui lòng tự nhập địa chỉ DNS được cung cấp bởi ISP của bạn"
			},{
				type: "name",
				title: "DNS thứ nhất/DNS thứ hai",
				content: "Nhập các thông số bằng tay hoặc tự động lấy chúng từ ISP."
			},{
				type: "title",
				title: "Dạng kết nối Internet: PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "Chọn loại hình này nếu ISP của bạn sử dụng PPPoEv6, và cung cấp cho bạn với tên đăng nhập và mật mã."
			},{
				type: "name",
				title: "Tên đăng nhập/Mật mã",
				content: "Nhập các thông số được cung cấp bởi ISP của bạn."
			},{
				type: "name",
				title: "Địa chỉ IPv6",
				content: "Nó sẽ được tự động phân công của máy chủ DHCPv6 từ các ISP, sau khi bạn nhập tên đăng nhập và mật mã và nhấn Kết nối."
			},{
				type: "name",
				title: "Địa chỉ DNS",
				content: "Chọn \"Lấy động từ ISP\" hoặc \"Sử dụng địa chỉ DNS sau\" Nếu \"Sử dụng địa chỉ DNS sau\" được chọn, xin vui lòng tự nhập địa chỉ DNS được cung cấp bởi ISP của bạn"
			},{
				type: "name",
				title: "Lấy địa chỉ IPv6",
				content: "Chọn DHCPv6 để lấy địa chỉ IPv6 non-temporary hoặc SLAAC để lấy địa chỉ IPv6 tạo từ gói tin advertisement của router, hoặc Chỉ định bởi ISP để nhập địa chỉ IPv6 theo cách thủ công, tùy theo ISP của bạn."
			},{
				type: "name",
				title: "Prefix delegation",
				content: "Chọn Kích hoạt để lấy  prefix delegation từ Máy chủ DHCPv6 từ ISP, hoặc Vô hiệu hóa để chỉ định tiền tố địa chỉ theo cách thủ công. Máy khách trong LAN sẽ tạo địa chỉ IPv6 theo tiền tố này."
			},{
				type: "name",
				title: "Kết nối",
				content: "Nhấp vào nút này để có được kết nối Internet."
			},{
				type: "name",
				title: "Ngắt kết nối",
				content: "Nhấp vào nút này để ngắt kết nối Internet."
			},{
				type: "title",
				title: "Loại kết nối Internet: đường hầm 6to4"
			},{
				type: "name",
				title: "Đường hầm 6to4",
				content: "Chọn dạng này nếu ISP của bạn sử dụng triển khai 6to4 để gán địa chỉ."
			},{
				type: "name",
				title: "Địa chỉ IPv4/IPv4 Subnet Mask/Gateway mặc định IPv4/địa chỉ đường hầm",
				content: "Các tham số này sẽ được tự động tạo ra bởi các thông tin IPv4 của cổng WAN sau khi bạn nhấn Kết nối."
			},{
				type: "name",
				title: "Sử dụng máy chủ DNS sau",
				content: "Chọn hộp chọn để nhập DNS thứ nhất và/hoặc DNS thứ hai được cung cấp bởi ISP của bạn theo cách thủ công."
			},{
				type: "name",
				title: "Kết nối",
				content: "Nhấp vào nút này để có được kết nối Internet."
			},{
				type: "name",
				title: "Ngắt kết nối",
				content: "Nhấp vào nút này để ngắt kết nối Internet."
			},{
				type: "title",
				title: "Dạng kết nối Internet: Pass-Through (Cầu nối)"
			},{
				type: "paragraph",
				content: "Chọn loại hình này nếu ISP của bạn sử dụng Pass Through (Bridge) triển khai mạng. Đối với loại này, không có tham số được cung cấp và không có cấu hình cần thiết"
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "Ngoại trừ Pass-Through (Cầu nối), 6 dạng kết nối Internet khác yêu cầu cấu hình IPv6"
			},{
				type: "name",
				title: "Dạng gán",
				content: "Chọn một trong những phù hợp nhất cho ISP của bạn",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "Để tự động gán địa chỉ IP cho các máy khách trong mạng LAN",
					children: [{
						type: "name",
						title: "Địa chỉ tiền tố",
						content: "Nhập tiền tố địa chỉ được cung cấp bởi ISP của bạn"
					},{
						type: "name",
						title: "Thời gian giải phóng",
						content: "Đó là thời điểm khi địa chỉ IP được chỉ định còn hiệu lực Giữ mặc định 86400 giây hoặc thay đổi nó nếu cần thiết bởi ISP của bạn"
					},{
						type: "name",
						title: "Địa chỉ",
						content: "Đây là địa chỉ IP tự động phân công của máy chủ DHCPv6 từ ISP"
					}]
				},{
					type: "name",
					title: "SLAAC + Stateless DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Địa chỉ tiền tố",
						content: "Nhập tiền tố địa chỉ được cung cấp bởi ISP của bạn"
					},{
						type: "name",
						title: "Địa chỉ",
						content: "Đây là địa chỉ IP được gán tự động bởi ISP"
					}]
				},{
					type: "name",
					title: "SLAAC + RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Địa chỉ tiền tố",
						content: "Nhập tiền tố địa chỉ được cung cấp bởi ISP của bạn"
					},{
						type: "name",
						title: "Địa chỉ",
						content: "Đây là địa chỉ IP được gán tự động bởi ISP"
					}]
				}]
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "Sao địa chỉ MAC",
			CONTENT: [{
				type: "name",
				title: "Sử dụng địa chỉ MAC mặc định",
				content: "KHÔNG thay đổi địa chỉ MAC mặc định của Router, trong trường hợp các ISP không ràng buộc các địa chỉ IP được gán cho địa chỉ MAC"
			},{
				type: "name",
				title: "Sử dụng địa chỉ MAC máy tính hiện tại",
				content: "Chọn để sao chép MAC máy tính hiện tại đang kết nối đến Router, trong trường hợp ISP kết hợp địa chỉ IP và địa chỉ MAC"
			},{
				type: "name",
				title: "Sử dụng địa chỉ MAC tùy chỉnh",
				content: "Nhập MAC thủ công, trong trường hợp ISP kết hợp địa chỉ IP và địa chỉ MAC xác định"
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "Cài đặt thời gian",
			CONTENT: [{
				type: "step",
				title: "Để tự động đồng bộ hóa thời gian",
				content: [
					"1. Trong lĩnh vực Thiết lập Thời gian, chọn Lấy tự động từ Internet.",
					"2. Chọn Vùng thời gian cục bộ của bạn từ trình đơn thả xuống.",
					"3. Trong trường NTP máy chủ, nhập vào địa chỉ IP hoặc tên miền của máy chủ NTP mong muốn của bạn.",
					"4. Trong lĩnh vực máy chủ NTP II, nhập vào địa chỉ IP hoặc tên miền của NTP máy chủ thứ hai. (Tùy chọn)",
					"5. Nhấp vào Lấy.",
					"6. Bấm Lưu."
				]
			},{
				type: "step",
				title: "Để tự thiết lập ngày và thời gian",
				content: [
					"1. Trong lĩnh vực Thiết lập Thời gian, chọn Thủ công.",
					"2. Nhập ngày .",
					"3. Nhập Thời gian (Trong định dạng đồng hồ 24 giờ, ví dụ như là 16:00:00 4:00).",
					"4. Nhấp vào Lưu."
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "Tiết kiệm ánh sángDaylight Saving",
			CONTENT: [{
				type: "step",
				title: "Để thiết lập thời gian tiết kiệm ánh sáng",
				content: [
					"1. Chọn Kích hoạt  tiết kiệm ánh sáng.",
					"2. Chọn ngày bắt đầu chính xác và thời gian khi ánh sáng ban ngày tiết kiệm thời gian bắt đầu từ múi giờ địa phương của bạn.",
					"3. Chọn Ngày kết thúc chính xác và thời gian khi ánh sáng ban ngày tiết kiệm thời gian kết thúc vào múi giờ địa phương của bạn.",
					"4. Nhấp vào Lưu."
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "Chẩn đoán",
			CONTENT: [{
				type: "paragraph",
				content: "Router cung cấp Ping và Traceroute công cụ để giúp bạn khắc phục sự cố các vấn đề kết nối mạng. Các công cụ Ping sẽ gửi các gói tin đến một địa chỉ IP đích hoặc tên miền và ghi lại những kết quả, chẳng hạn như số lượng các gói dữ liệu gửi/nhận, và thời gian chuyến đi vòng quanh. Các công cụ Traceroute gửi gói tin đến một địa chỉ IP đích hoặc tên miền và hiển thị số lượng hoa bia và thời gian để đạt đến đích."
			},{
				type: "paragraph",
				content: "Bạn có thể ping và traceroute một thiết bị cục bộ theo địa chỉ IP hoặc tên miền, chẳng hạn như google.com, yahoo.com, vv"
			},{
				type: "step",
				title: "Để chẩn đoán sử dụng Ping",
				content: [
					"1. Nhập địa chỉ đích IP hoặc tên miền.",
					"2. Nhấp vào biểu tượng mũi tên để mở menu nâng cao và chỉ định Ping Đếm, và Ping gói tin kích thước. (Tùy chọn)",
					"3. Nhấp vào Bắt đầu."
				]
			},{
				type: "step",
				title: "Để chẩn đoán sử dụng Traceroute",
				content: [
					"1. Nhập địa chỉ đích IP hoặc tên miền.",
					"2. Nhấp vào biểu tượng mũi tên để mở menu nâng cao và xác định số bước nhảy (để đạt được) trong Traceroute Max TTL (Time to Live) lĩnh vực. Mặc định là 20. (Tùy chọn)",
					"3. Nhấp vào Bắt đầu."
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "Nâng cấp Firmware",
			CONTENT: [{
				type: "paragraph",
				content: "Trước khi nâng cấp firmware của Router, bạn sẽ cần phải tải về các bản cập nhật firmware mới nhất từ <a class=\"link\" href=\"http://www.tp-link.com/vn/Support/\" target=\"_blank\">Hỗ trợ TP-Link</a> để máy tính của bạn."
			},{
				type: "step",
				title: "QUAN TRỌNG: Để tránh làm hư nâng cấp, xin vui lòng lưu ý những điều sau đây:",
				content: [
					"Đảm bảo rằng các tập tin firmware mới nhất là phù hợp với các phiên bản phần cứng (như hình dưới trang Nâng cấp Firmware).",
					"Hãy chắc chắn rằng bạn có một kết nối ổn định giữa các Router và máy tính của bạn. Đó là không nên nâng cấp firmware không dây.",
					"Hãy chắc chắn rằng bạn loại bỏ bất kỳ thiết bị lưu trữ USB kết nối với Router trước khi nâng cấp firmware để ngăn ngừa mất dữ liệu.",
					"Sao lưu cấu hình router của bạn.",
					"Không nên tắt các Router trong khi nâng cấp firmware."
				]
			},{
				type: "step",
				title: "Để nâng cấp firmware của router",
				content: [
					"1. Nhấp vào Duyệt.",
					"2. Xác định vị trí và chọn tập tin firmware tải về.",
					"3. Bấm chọn Nâng cấp."
				]
			},{
				type: "paragraph",
				content: "Quá trình nâng cấp mất một vài phút để hoàn thành. Vui lòng KHÔNG tắt nguồn router trong khi nâng cấp được tiến hành."
			}]
		},
		
		BACKUP: {	
			TITLE: "Sao lưu",
			CONTENT: [{
				type: "paragraph",
				content: "Nó là rất khuyến khích để sao lưu cấu hình hiện tại của bạn, trong trường hợp phục hồi là cần thiết để khôi phục hệ thống về trạng thái trước hoặc từ mặc định nhà máy."
			},{
				type: "paragraph",
				content: "Nhấp vào Sao lưu để lưu cấu hình hiện tại của bạn để máy tính của bạn. Hãy chắc chắn để lưu các tập tin sao lưu vào một vị trí an toàn mà bạn có thể truy xuất và phục hồi các Router sau đó, nếu cần thiết."
			}]
		},
		
		RESTORE: {
			TITLE: "Khôi phục",
			CONTENT: [{
				type: "step",
				title: "Để khôi phục lại từ một bản sao lưu",
				content: [
					"1. Nhấp vào Duyệt.",
					"2. Xác định vị trí và chọn tập tin sao lưu.",
					"3. Nhấp vào Khôi phục."
				]
			}]
		},
		
		FACTORY: {
			TITLE: "Khôi phục cài đặt mặc định",
			CONTENT: [{
				type: "paragraph",
				content: "Nhấn cài đặt gốc để thiết lập lại router của bạn để thiết lập mặc định của nhà sản xuất."
			},{
				type: "note",
				title: "Lưu ý",
				content: [
					"1. Khôi phục cài đặt gốc sẽ xóa tất cả các cài đặt mà bạn đã cấu hình cho router. Để đăng nhập lại vào trang quản lý của router, sử dụng tên đăng nhập và mật mã mặc định là admin.",
					"2. Vui lòng KHÔNG tắt nguồn router trong quá trình sao lưu hoặc phục hồi"
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "Tài khoản quản lý",
			CONTENT: [{
				type: "paragraph",
				content: "Trang này cho phép bạn thay đổi tên đăng nhập và/hoặc mật khẩu đăng nhập của bạn, và để thiết lập một địa chỉ email phục hồi mật khẩu."
			},{
				type: "name",
				title: "Tên đăng nhập cũ",
				content: "Gõ vào tên đăng nhập hiện tại của bạn."
			},{
				type: "name",
				title: "Mật mã cũ",
				content: "Nhập Mật mã hiện tại của bạn."
			},{
				type: "name",
				title: "Tên đăng nhập mới",
				content: "Gõ vào Tên đăng nhập mới."
			},{
				type: "name",
				title: "Mật mã mới",
				content: "Gõ Mật mã mới của bạn."
			},{
				type: "name",
				title: "Xác nhận mật mã mới",
				content: "Gõ Mật mã mới của bạn một lần nữa."
			},{
				type: "note",
				title: "Lưu ý",
				content: "Nếu bạn quyết định thay đổi tên đăng nhập hiện tại và mật mã dùng để đăng nhập vào Router, hãy chắc chắn để ghi lại thông tin đăng nhập mới trong một địa điểm an toàn."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "Khôi phục mật mã",
			CONTENT: [{
				type: "name",
				title: "Kích hoạt khôi phục mật mã",
				content: "Chúng tôi khuyến nghị bạn kích hoạt chức năng Khôi phục mật mã, chức năng này sẽ giúp bạn khôi phục tên đăng nhập và mật mã qua email."
			},{
				type: "name",
				title: "Từ",
				content: "Nhập địa chỉ email hợp lệ để được sử dụng cho các email gửi đi."
			},{
				type: "name",
				title: "Đến",
				content: "Nhập địa chỉ email hợp lệ để được sử dụng cho các email gửi đến."
			},{
				type: "name",
				title: "Máy chủ SMTP",
				content: "Nhập địa chỉ máy chủ SMTP router sử dụng để gửi mã xác thực qua email."
			},{
				type: "name",
				title: "Kích hoạt xác thực",
				content: "Chọn Kích hoạt xác thực nếu các máy chủ email gửi đi yêu cầu xác thực cho việc gửi email, và điền Tên đăng nhập và Mật mã vào các trường tương ứng. Các trường này là phân biệt chữ hoa."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "Quản lý nội bộ",
			CONTENT: [{
				type: "paragraph",
				content: "Phần này cho phép bạn giới hạn số lượng các thiết bị trạm trên mạng LAN của bạn từ truy cập vào Router bằng cách sử dụng xác thực địa chỉ MAC dựa trên."
			},{
				type: "name",
				title: "Cho tất cả thiết bị kết nối từ LAN truy cập",
				content: "Chuyển chế độ Mở cho phép quản lý đối với tất cả các thiết bị kết nối LAN hoặc Off để cho phép quản lý cho một thiết bị cụ thể."
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Hiển thị địa chỉ MAC của thiết bị truy cập hạn chế."
			},{
				type: "name",
				title: "Mô tả",
				content: "Hiển thị các mô tả của các thiết bị truy cập hạn chế."
			},{
				type: "name",
				title: "Trạng thái",
				content: "Hiển thị tình trạng hiện tại của các thiết bị truy cập hạn chế (kích hoạt hoặc vô hiệu hóa)."
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị tùy chọn để sửa đổi và xóa các thiết bị tương ứng từ danh sách."
			},{
				type: "step",
				title: "Để thêm một thiết bị máy khách vào danh sách",
				content: [
					"1. Bấm chọn Thêm.",
					"2. Nhấp vào Xem Thiết bị hiện để lựa chọn một thiết bị hiện có, hoặc nhập địa chỉ MAC của thiết bị vào trường Địa chỉ MAC.",
					"3. Nhập một mô tả cho thiết bị.",
					"4. Chọn Kích hoạt.",
					"5. Nhấn OK."
				]
			},{
				type: "step",
				title: "Sửa đổi hoặc xóa một thiết bị trong danh sách",
				content: "Trong bảng này, bấm chọn biểu tượng Chỉnh sửa hoặc biểu tượng Thùng rác tương ứng với từng mục để chỉnh sửa hoặc xóa mục đó"
			},{
				type: "step",
				title: "Để xóa nhiều thiết bị",
				content: "Chọn tất cả các thiết bị mà bạn muốn xóa, bấm Xóa"
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "Quản lý từ xa",
			CONTENT: [{
				type: "paragraph",
				content: "Các tính năng quản lý từ xa cho phép bạn truy cập và cấu hình Router từ xa từ Internet."
			},{
				type: "name",
				title: "Vô hiệu hóa quản lý từ xa",
				content: "Chọn tùy chọn này để vô hiệu hóa việc quản lý từ xa."
			},{
				type: "name",
				title: "Kích hoạt quản lý từ xa cho tất cả thiết bị",
				content: "Chọn tùy chọn này để cho phép quản lý từ xa cho tất cả các địa chỉ IP. Nếu được chọn, nhập trường cổng quản lý web"
			},{
				type: "name",
				title: "Kích hoạt quản lý từ xa Các thiết bị xác định",
				content: "Chọn tùy chọn này để cho phép quản lý từ xa cho một địa chỉ IP cụ thể. Nếu được chọn, vào cảng Quản lý Web và các lĩnh vực quản lý Địa chỉ IP từ xa."
			},{
				type: "name",
				title: "Cổng quản lý Web",
				content: "Nhập số cổng, giữa 1024 và 65535, được sử dụng để truy cập vào giao diện quản lý web của Router, an ninh hơn. Thông thường, các trình duyệt web sử dụng các tiêu chuẩn dịch vụ cảng HTTP 80. mặc định và cổng dịch vụ phổ biến là 8080, mà là một cổng dịch vụ thay thế của HTTP."
			},{
				type: "name",
				title: "Địa chỉ IP quản lý từ xa",
				content: "Nhập địa chỉ IP hợp lệ hoặc phạm vi IP được phép truy cập vào Router. Nếu 255.255.255.255 được nhập vào, tất cả mọi người được phép truy cập."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "Bản ghi hệ thống",
			CONTENT: [{
				type: "paragraph",
				content: "Các trang Bản ghi hệ thống sẽ hiển thị một danh sách các hoạt động gần đây nhất (sự kiện) của Router. Bạn có thể xác định những loại gỗ và/hoặc mức độ của các bản ghi mà bạn muốn xem. Trang này cũng có các tính năng email mà bạn có thể cấu hình để tự động gửi các tập tin đăng nhập vào một địa chỉ email cụ thể, hoặc xuất khẩu các tập tin đăng nhập vào một máy tính."
			},{
				type: "name",
				title: "Dạng",
				content: "Chọn kiểu hệ thống đăng nhập để hiển thị."
			},{
				type: "name",
				title: "Cấp",
				content: "Chọn mức độ đăng nhập hệ thống để hiển thị."
			},{
				type: "name",
				title: "Làm mới",
				content: "Nhấn vào biểu tượng này để cập nhật các bản ghi hệ thống."
			},{
				type: "name",
				title: "Xóa tất cả",
				content: "Nhấn vào biểu tượng này để xóa tất cả các hệ thống bản ghi."
			},{
				type: "name",
				title: "Lưu đăng nhập",
				content: "Nhấn vào nút này để tải về tất cả các tập tin hệ thống đăng nhập vào máy tính của bạn."
			},{
				type: "name",
				title: "Cài đặt thư",
				content: "Nhấn vào nút này để cấu hình các thiết lập email cho bản ghi hệ thống."
			},{
				type: "step",
				title: "Để cấu hình các thiết lập email cho bản ghi hệ thống",
				content: [
					"1. Nhấn vào Cài đặt mail.",
					"2. Từ Đến - Nhập địa chỉ email hợp lệ để được sử dụng cho các email gửi đi.",
					"3. Đến - Nhập địa chỉ email hợp lệ để được sử dụng cho các email gửi đến.",
					"4. SMTP Server - Nhập địa chỉ máy chủ SMTP mà các Router sử dụng để gửi các bản ghi hệ thống thông qua email.",
					{
						content: "5. Cho phép xác nhận - Chọn tùy chọn này nếu máy chủ SMTP yêu cầu xác thực cho việc gửi email.",
						children: [{
							type: "name",
							title: "Tên đăng nhập",
							content: "Nhập tên đăng nhập cho các máy chủ SMTP. Trường này là phân biệt chữ hoa."
						},{
							type: "name",
							title: "Mật mã",
							content: "Nhập mật mã cho máy chủ SMTP. Lĩnh vực này cũng là phân biệt chữ hoa."
						}]
					},{
						content: "6. Kích hoạt tính năng tự động Mail - Chọn tùy chọn này để xác định thời gian trong ngày đăng nhập hệ thống sẽ được gửi tự động.",
						children: [{
							type: "paragraph",
							content: "Để gửi tin đăng nhập hệ thống hàng ngày tại một thời điểm cụ thể, nhập giờ (HH) và phút (MM) trong định dạng đồng hồ 24 giờ, ví dụ: 16:00 là 4PM."
						},{
							type: "paragraph",
							content: "Để gửi các bản ghi hệ thống tại một giờ hoặc khoảng thời gian cụ thể, nhập số giờ."
						}]
					},
					"7. Nhấp vào Lưu."
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "Thống kê lưu lượng",
			CONTENT: [{
				type: "paragraph",
				content: "Các trang Thống kê Lưu lượng hiển thị lưu lượng mạng của các mạng LAN, WAN, WLAN và gói tin gửi và nhận."
			},{
				type: "name",
				title: "Thống kê lưu lượng",
				content: "Chuyển sang Mở để hiển thị thông tin thống kê"
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "Danh sách thống kê lưu lượng",
			CONTENT: [{
				type: "name",
				title: "Địa chỉ IP/Địa chỉ MAC",
				content: "Hiển thị các địa chỉ IP và địa chỉ MAC của thiết bị của khách hàng liên quan."
			},{
				type: "name",
				title: "Tổng gói tin",
				content: "Hiển thị tổng số gói tin truyền đi và nhận bởi thiết bị khách hàng từ đầu phiên giao dịch hoặc các thiết lập lại truy cập cuối cùng."
			},{
				type: "name",
				title: "Tổng Bytes",
				content: "Hiển thị tổng số byte truyền và nhận bởi thiết bị khách hàng từ đầu phiên giao dịch hoặc các thiết lập lại truy cập cuối cùng."
			},{
				type: "name",
				title: "Gói tin hiện tại",
				content: "Hiển thị số lượng hiện tại của gói tin truyền đi và nhận được tại một khoảng thời gian cụ thể."
			},{
				type: "name",
				title: "Bytes hiện tại",
				content: "Hiển thị số lượng hiện tại của byte truyền đi và nhận được tại một khoảng thời gian cụ thể."
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị tùy chọn để Thiết lập lại (không) và Xóa số liệu thống kê tương ứng từ danh sách."
			},{
				type: "name",
				title: "Làm mới",
				content: "Nhấn vào đây để cập nhật các thông tin thống kê trên trang."
			},{
				type: "name",
				title: "Thiết lập lại tất cả",
				content: "Nhấn vào đây để đặt lại tất cả các giá trị thống kê trong danh sách không."
			},{
				type: "name",
				title: "Xóa tất cả",
				content: "Nhấn vào để xóa tất cả các thông tin thống kê trong danh sách."
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "Không dây 2,4GHz/5GHz",
			CONTENT: [{
				type: "name",
				title: "Khoảng thời gian Beacon",
				content: "Nhập một giá trị giữa 40 và 1000 trong giây để xác định khoảng thời gian giữa các gói beacon được phát sóng bởi các Router để đồng bộ hóa các mạng không dây. Mặc định là 100 mili giây."
			},{
				type: "name",
				title: "Ngưỡng RTS",
				content: "Nhập một giá trị từ 1 đến 2346 để xác định kích thước gói tin truyền tải dữ liệu qua các Router. Theo mặc định, các RTS (Yêu cầu Gửi) kích thước Ngưỡng là 2346. Nếu các gói kích thước lớn hơn ngưỡng cài đặt trước, Router sẽ gửi yêu cầu của Gửi frame đến một trạm tiếp nhận nói riêng và thương lượng việc gửi một khung dữ liệu, hoặc người nào khác gói tin sẽ được gửi ngay lập tức."
			},{
				type: "name",
				title: "Khoảng thời gian DTIM",
				content: "Giá trị này xác định khoảng thời gian của giao thông Giao Chỉ Message (DTIM). Nhập một giá trị từ 1 đến 15 trong mili giây. Giá trị mặc định là 1, chỉ ra các DTIM Khoảng thời gian là giống như Beacon Khoảng thời gian."
			},{
				type: "name",
				title: "Thời gian cập nhập mã nhóm",
				content: "Nhập số giây (tối thiểu 30) để kiểm soát khoảng thời gian cho mã hóa khóa tự động gia hạn. Giá trị mặc định là 0, cho thấy không có sự đổi mới quan trọng."
			},{
				type: "name",
				title: "Tính năng WMM",
				content: "Chức năng WMM đảm bảo các gói tin với những thông điệp ưu tiên cao được truyền ưu tiên. Nó được kích hoạt theo mặc định và rất khuyến khích."
			},{
				type: "name",
				title: "Tính năng Short GI",
				content: "Chức năng này được kích hoạt theo mặc định và đề nghị để tăng dung lượng dữ liệu bằng cách giảm khoảng bảo vệ (GI) thời gian."
			},{
				type: "name",
				title: "Tính năng cô lập trạm không dây",
				content: "Nếu bạn muốn giới hạn các thiết bị không dây trong mạng của bạn không thể tương tác với nhau nhưng vẫn có thể truy cập Internet, chọn Kích hoạt cô lập AP ở ô chọn"
			},{
				type: "name",
				title: "TX Beamforming",
				content: "Tx Beamforming là một kỹ thuật xử lý tín hiệu được sử dụng trong các mảng cảm biến để truyền tín hiệu hướng. Nếu được kích hoạt, tính năng này sẽ được sử dụng ở cuối quá trình truyền tải nhằm tăng cường tín hiệu Wi-Fi và mở rộng vùng phủ sóng Wi-Fi."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "Kích hoạt cầu nối WDS",
				content: "Kích hoạt tính năng WDS (Wireless Distribution System) Tính năng cầu nối để cho phép các Router để nối với một điểm truy cập (AP) trong một mạng nội bộ không dây (WLAN). Nếu tính năng này được kích hoạt, cấu hình như sau:",
				children: [{
					type: "name",
					title: "SSID (để bắt cầu)",
					content: "Nhập SSID của WAP (Wireless Access Point - Điểm truy cập không dây) mà router sẽ kết nối đến như một máy khách hoặc dùng chức năng Khảo sát để tìm tất cả các mạng khả dụng"
				},{
					type: "name",
					title: "Khảo sát",
					content: "Nhấn vào nút này để quét và hiển thị các SSID, BSSID, cường độ tín hiệu, kênh, và bảo mật thông tin của tất cả các mạng không dây có sẵn trong phạm vi. Một khi bạn chọn một mạng, SSID, MAC Address, và an ninh sẽ tự động cư trú."
				},{
					type: "name",
					title: "Địa chỉ MAC (để bắt cầu)",
					content: "Nhập địa chỉ MAC (BSSID) ở 12 ký tự thập lục phân (0-9, một, -f, AF) định dạng phân cách bằng dấu gạch nối của các điểm truy cập không dây mà Router sẽ kết nối đến là một khách hàng . Nếu bạn chọn AP mong muốn thông qua các tính năng khảo sát, các lĩnh vực Địa chỉ MAC được tự động."
				},{
					type: "name",
					title: "Bảo mật",
					content: "Chọn loại bảo mật chính xác của các điểm truy cập được chọn, không, WPA-PSK/WPA2-PSK hoặc WEP. Nếu bạn chọn AP mong muốn thông qua các tính năng khảo sát, các lĩnh vực an ninh được tự động.",
					children: [{
						type: "name",
						title: "Mật mã",
						content: "Tùy chọn này có sẵn khi các loại bảo mật là WPA-PSK/WPA2-PSK hoặc WEP. Nhập mật khẩu bảo mật của các điểm truy cập được chọn."
					},{
						type: "name",
						title: "Dạng xác thực",
						content: "Tùy chọn này chỉ có sẵn khi các loại bảo mật là WEP (Wired Equivalent Privacy). Chọn kiểu xác thực thích hợp (tự động, hệ thống mở hay chia sẻ) sử dụng các điểm truy cập được chọn."
					},{
						type: "name",
						title: "Định dạng mã WEP",
						content: "Tùy chọn này chỉ có sẵn khi các loại bảo mật là WEP. Chọn định dạng chính (ASCII hoặc thập lục phân) sử dụng của AP chọn."
					}]
				}]
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "Chọn hộp kiểm Kích hoạt WPS và nhấp vào Lưu để kích hoạt tính năng WPS (Wi-FI Protected Setup) chức năng cho phép bạn dễ dàng thiết lập và kết nối các thiết bị WPS kích hoạt bằng cách đẩy một nút"
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "Chọn hộp kiểm Kích hoạt NAT và nhấp Lưu để kích hoạt NAT (Network Address Translation) chức năng"
			},{
				type: "note",
				title: "Lưu ý",
				content: "Khi tắt NAT, cấu hình trong Chuyển tiếp NAT sẽ không có tác dụng"
			},{
				type: "name",
				title: "NAT Boost",
				content: "Chọn hộp kiểm Kích hoạt NAT Boost và nhấp Lưu để bảo đảm rằng router của bạn có thông lượng tốt nhất"
			},{
				type: "note",
				title: "Lưu ý",
				content: "Khi NAT Boost được kích hoạt, QoS và giao thông Thống kê sẽ được vô hiệu hóa tự động"
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "Cài đặt cấp bảo vệ DoS",
			CONTENT: [{
				type: "paragraph",
				content: "Cấp độ bảo vệ DoS bảo vệ router khỏi các cuộc tấn công ICMP-FLOOD, UDP-FLOOD, và TCP-FLOOD"
			},{
				type: "name",
				title: "Cấp gói tin ICMP-FLOOD",
				content: "Nhập một giá trị từ 5 đến 7200 gói tin ICMP để kích hoạt các bảo vệ ICMP-FLOOD ngay khi số lượng các gói tin vượt quá giá trị ngưỡng đặt trước."
			},{
				type: "name",
				title: "Cấp gói tin UDP-FLOOD",
				content: "Nhập một giá trị từ 5 đến 7200 gói tin UDP để kích hoạt các bảo vệ UDP-FLOOD ngay khi số lượng các gói tin vượt quá giá trị ngưỡng đặt trước."
			},{
				type: "name",
				title: "Cấp gói tin TCP-FLOOD",
				content: "Nhập một giá trị từ 5 đến 7200 gói tin TCP-SYN để kích hoạt các bảo vệ TCP-SYN-FLOOD ngay khi số lượng các gói tin vượt quá giá trị ngưỡng đặt trước."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Song công",
			CONTENT: [{
				type: "name",
				title: "Song công",
				content: "Chọn loại song công từ danh sách thả xuống"
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "Kích hoạt chế độ ban đêm",
				content: "Chọn hộp chọn này để tắt các đèn LED trong Thời Gian ở Chế Độ Ban Đêm mà không ảnh hưởng đến hoạt động của router."
			},{
				type: "name",
				title: "Khoảng chế độ ban đêm",
				content: "Ấn định một thời gian cho chế độ ban đêm."
			},{
				type: "paragraph",
				content: "Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "Với OpenVPN, bạn có thể sử dụng Internet để thực hiện truy cập được bảo mật đến mạng của bạn khi bạn không ở nhà. Để sử dụng Dịch vụ VPN, bạn cần cấu hình Dịch vụ DNS Động (Khuyến nghị) hoặc gán một địa chỉ IP tĩnh cho cổng WAN của router. Và Thời gian hệ thống của bạn nên được đồng bộ với Internet."
			},{
				type: "name",
				title: "Kích hoạt Máy Chủ VPN",
				content: "Chọn hộp chọn này để kích hoạt máy chủ OpenVPN."
			},{
				type: "name",
				title: "Dạng dịch vụ",
				content: "Chọn nghi thức giao tiếp cho máy chủ OpenVPN: UDP hoặc TCP."
			},{
				type: "name",
				title: "Cổng Dịch Vụ",
				content: "Nhập số cổng giao tiếp từ 1024 đến 65535. Cổng dịch vụ phổ biến và mặc định là 1194."
			},{
				type: "name",
				title: "Subnet/Netmask của VPN",
				content: "Nhập dãy các địa chỉ IP mà máy chủ OpenVPN có thể cấp cho các máy khách."
			},{
				type: "name",
				title: "Đường Truy Cập của Máy Khách",
				content: "Chọn cách truy cập cho máy khách OpenVPN của bạn.",
				children: [{
					type: "name",
					title: "Chỉ Qua Mạng Gia Đình",
					content: "Máy khách chỉ có thể truy cập router và LAN. Tuyến mặc định của máy khách sẽ không thay đổi."
				},{
					type: "name",
					title: "Internet và Mạng Gia Đình",
					content: "Máy khách không thể truy cập mạng gia đình, và các trang hoặc dịch vụ Internet với giới hạn địa lý khi bạn ra khỏi đất nước. Định tuyến mặc định của máy khách sẽ được thay đổi."
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "Chứng nhận",
			CONTENT: [{
				type: "paragraph",
				content: "Sử dụng chứng nhận cho thông tin và căn cước của kết nối VPN cho máy tính từ xa."
			},{
				type: "name",
				title: "Tạo",
				content: "Bấm để phát sinh một chứng nhận mới."
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "Tập Tin Cấu Hình",
			CONTENT: [{
				type: "paragraph",
				content: "Máy khách từ xa sẽ sử dụng tập tin cấu hình để truy cập router của bạn."
			},{
				type: "name",
				title: "Xuất",
				content: "Bấm nút này để lưu lại tập tin cấu hình của OpenVPN để sử dụng cho việc thêm một kết nối VPN mới."
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "Hướng Dẫn Cài Đặt Máy Khách VPN",
			CONTENT: [{
				type: "step",
				title: "Để kích hoạt và kết nối thiết bị khách của bạn đến máy chủ OpenVPN:",
				content:[{
					type: "paragraph",
					content: "Trước khi bạn cấu hình máy chủ OpenVPN, vui lòng cấu hình Dịch vụ DNS Động (Khuyến nghị) hoặc gán một địa chỉ IP tĩnh cho cổng WAN của router. Và đảm bảo cổng mở rộng của cài đặt NAT không phải là cổng dịch vụ và Thời gian hệ thống của bạn đã được đồng bộ với Internet."
				},
					"1. Chọn Kích hoạt Máy chủ VPN.",
					"2. Cấu hình thông số máy chủ VPN (Dạng dịch vụ, Cổng dịch vụ, Subnet/Netmask của máy khách truy cập và VPN) và bấm Lưu.",
					"3. Bấm Xuất để lưu tập tin cấu hình.",
					"4. Trên thiết bị máy khách của bạn, tải về và cài đặt tiện ích máy khách OpenVPN từ  <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> Các nền tảng chính thức được hỗ trợ bao gồm Windows, Mac OSX, Linux.",
					"5. Khởi chạy tiện ích máy khách OpenVPN và thêm một kết nối VPN mới bằng cách sử dụng tập tin cấu hình đã được lưu để kết nối thiết bị máy khách của bạn đến máy chủ VPN."
				]},{
					type: "note",
					title: "Lưu ý",
					content: "Để tìm hiểu thêm về máy khách OpenVPN, xin xem tại <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Với VPN PPTP, bạn có thể sử dụng Internet để truy cập đến mạng của bạn khi bạn không có ở nhà một cách nhanh chóng và dễ dàng. Một số ISP có thể chặn kết nối này. Để sử dụng dịch vụ VPN,  bạn cần cấu hình Dịch vụ DNS Động (Khuyến nghị) hoặc gán một địa chỉ IP tĩnh cho cổng WAN của router. Và Thời gian hệ thống của bạn nên được đồng bộ với Internet."
			},{
				type: "name",
				title: "Kích hoạt Máy Chủ VPN",
				content: "Chọn hộp chọn này để kích hoạt máy chủ PPTP VPN."
			},{
				type: "name",
				title: "Địa Chỉ IP của Máy Khách",
				content: "Nhập dãy các địa chỉ IP (tối đa 10 máy khách) mà máy chủ PPTP VPN có thể cấp cho các máy khách."
			},{
				type: "name",
				title: "Cho phép Samba truy cập",
				content: "Chọn để cho phép máy khách VPN của bạn truy cập máy chủ Samba nội bộ của bạn."
			},{
				type: "name",
				title: "Cho phép NetBIOS đi qua",
				content: "Chọn để cho phép máy khách VPN của bạn truy cập máy chủ Samba của bạn bằng cách sử dụng tên NetBIOS."
			},{
				type: "name",
				title: "Cho phép kết nối không mã hóa",
				content: "Chọn để cho phép kết nối không mã hóa đến máy chủ VPN của bạn."
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "Danh sách tài khoản",
			CONTENT: [{
				type: "paragraph",
				content: "Bảng này hiển thị tài khoản có thể sử dụng để kết nối đến máy chủ VPN PPTP từ máy khách từ xa."
			},{
				type: "step",
				title: "Để thêm một tài khoản VPN PPTP.",
				content: [
					"1. Bấm chọn Thêm.",
					"2. Nhập tên người dùng và mật khẩu để xác thực các khách đến máy chủ PPTP VPN.",
					"3. Nhấp vào OK."
				]
			},{
				type: "step",
				title: "Để tùy chỉnh hoặc xóa một tài khoản đã tồn tại",
				content: "Trong bảng, bấm chọn biểu tượng Sửa hoặc biểu tượng Xóa tương ứng với tài khoản bạn muốn chỉnh sửa hoặc xóa."
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "Hướng Dẫn Cài Đặt Máy Khách VPN",
			CONTENT: [{
				type: "step",
				title: "Để kích hoạt và kết nối thiết bị khách của bạn đến máy chủ PPTP VPN:",
				content:[{
					type: "paragraph",
					content: "Trước khi bạn cấu hình máy chủ VPN PPTP, vui lòng cấu hình Dịch vụ DNS Động (Khuyến nghị) hoặc gán một địa chỉ IP tĩnh cho cổng WAN của router. Vui lòng đảm bảo cổng mở rộng của cài đặt NAT không phải là 1723 và Thời gian hệ thống của bạn đã được đồng bộ với Internet."
				},
					"1. Chọn Kích hoạt Máy chủ VPN.",
					"2. Cấu hình thông số máy chủ VPN PPTP và bấm Lưu.",
					"3. Trên thiết bị máy khách của bạn, tạo một kết nối PPTP VPN. Các nền tảng chính thức được hỗ trợ bao gồm Windows, Mac OSX, Linux, iOS và Android.",
					"4. Khởi chạy chương trình VPN PPTP, thêm một kết nối mới và nhập tên miền của dịch vụ DDNS đã được đăng ký hoặc địa chỉ IP tĩnh được gán cho cổng WAN, để kết nối thiết bị máy khách đến máy chủ VPN PPTP."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "Kết nối VPN",
			CONTENT: [{
				type: "paragraph",
				content: "Trang này cho hiện các máy khách hiện đang kết nối đến máy chủ OpenVPN và PPTP VPN được đặt trên router."
			},{
				type: "paragraph",
				content: "Bấm biểu tượng dấu Trừ để ngắt kết nối máy khách tương ứng."
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Trạng thái Internet",
				content: "Hiển thị trạng thái hiện tại về Kết nối Internet của router"
			},{
				type: "name",
				title: "Dạng kết nối",
				content: "Hiển thị dạng kết nối Internet"
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Hiển thị địa chỉ IP Internet hiện tại được gán cho router"
			},{
				type: "name",
				title: "Kết nối thứ hai/Địa chỉ IP",
				content: "Hiển thị dạng kết nối thứ hai và địa chỉ IP"
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "Router",
			CONTENT: [{
				type: "title",
				title: "Không dây 2,4GHz/5GHz"
			},{
				type: "name",
				title: "SSID",
				content: "Hiển thị tên mạng không dây hiện tại của băng tần 2.4GHz/5GHz"
			},{
				type: "name",
				title: "Kênh",
				content: "Hiển thị kênh mạng 2.4GHz/5Ghz đang phát"
			},{
				type: "name",
				title: "MAC",
				content: "Hiển thị địa chỉ MAC hiện tại của mạng không dây 2.4GHz/5GHz"
			},{
				type: "title",
				title: "Mạng Khách 2,4GHz/5GHz"
			},{
				type: "name",
				title: "Trạng thái",
				content: "Hiển thị Mạng khách không dây 2.4GHz/5GHz đang mở (đã kích hoạt) hoặc tắt (đã vô hiệu hóa)"
			},{
				type: "name",
				title: "SSID",
				content: "Hiển thị tên mạng không dây của Mạng khách"
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Máy khách có dây/không dây",
			CONTENT: [{
				type: "name",
				title: "Tên",
				content: "Hiển thị tên máy khách kết nối đến router"
			},{
				type: "name",
				title: "Địa chỉ IP",
				content: "Hiển thị địa chỉ IP được gán của máy khách"
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Hiển thị địa chỉ MAC của máy khách"
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "Máy in",
			CONTENT: [{
				type: "name",
				title: "Tên",
				content: "Hiển thị tên máy in kết nối đến router qua cổng USB"
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "Ổ cứng USB",
			CONTENT: [{
				type: "name",
				title: "Ổ cứng USB",
				content: "Hiển thị thương hiệu ổ cứng USB kết nối đến router"
			},{
				type: "name",
				title: "Tổng",
				content: "Hiển thị tổng dung lượng của ổ cứng USB"
			},{
				type: "name",
				title: "Khả dụng",
				content: "Hiển thị dung lượng khả dụng của ổ cứng USB"
			}]
		},
		BASIC_INTERNET: {
			TITLE: "Internet",
			CONTENT: [{
				type: "name",
				title: "Tự động phát hiện",
				content: "Bấm chọn nút này để yêu cầu Router tự động phát hiện dạng kết nối Internet hiện tại của bạn"
			},{
				type: "note",
				title: "Lưu ý",
				content: "Nếu bạn không chắc dạng kết nối Internet của mình, sử dụng chức năng phát hiện tự động hoặc liên lạc với Nhà cung cấp dịch vụ Internet (ISP) của bạn để được hỗ trợ"
			},{
				type: "title",
				title: "Dạng kết nối Internet: IP Tĩnh",
			},{
				type: "name",
				title: "Địa chỉ IP/Subnet Mask/Gateway mặc định/DNS thứ nhất/DNS thứ hai",
				content: "Nhập thông tin do Nhà cung cấp dịch vụ Internet (ISP) của bạn cung cấp"
			},{
				type: "title",
				title: "Dạng kết nối Internet: IP Động",
			},{
				type: "name",
				title: "Không sao chép địa chỉ MAC/ Sao chép địa chỉ MAC máy tính hiện tại",
				content: "Chọn nếu bạn muốn sao chép địa chỉ MAC của bạn, tùy thuộc vào Nhà cung cấp dịch vụ Internet (ISP) của bạn"
			},{
				type: "title",
				title: "Dạng kết nối Internet: PPPoE",
			},{
				type: "name",
				title: "Tên đăng nhập/Mật mã",
				content: "Nhập Tên đăng nhập và Mật mã do Nhà cung cấp dịch vụ Internet của bạn cung cấp. Thông số này phân biệt chữ hoa và chữ thường"
			},{
				type: "title",
				title: "Dạng kết nối Internet: L2TP/PP2P",
			},{
				type: "name",
				title: "Tên đăng nhập/Mật mã",
				content: "Nhập Tên đăng nhập và Mật mã do Nhà cung cấp dịch vụ Internet của bạn cung cấp. Thông số này phân biệt chữ hoa và chữ thường"
			},{
				type: "name",
				title: "Kết nối thứ hai (IP Động hoặc IP Tĩnh)",
				children: [{
					type: "name",
					title: "IP Động",
					content: "Chọn nếu địa chỉ IP và Subnet Mask được gán tự động từ Nhà cung cấp dịch vụ Internet của bạn"
				},{
					type: "name",
					title: "IP Tĩnh",
					content: "Chọn nếu địa chỉ IP và Subnet Mask được cung cấp bởi nhà cung cấp dịch vụ Internet, và điền các thông tin đó vào khung tương ứng"
				}]
			},{
				type: "name",
				title: "IP /Tên miền máy chủ VPN",
				content: "Nhập địa chỉ IP máy chủ VPN hoặc tên miền do Nhà cung cấp dịch vụ Internet (ISP) của bạn cung cấp cho bạn"
			},{
				type:"paragraph",
				content:"Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "Cài đặt không dây",
			CONTENT: [{
				type: "name",
				title: "Kích hoạt vô tuyến không dây",
				content: "Chọn hộp chọn này để kích hoạt tần số vô tuyến không dây 2.4GHz/5GHz"
			},{
				type: "name",
				title: "Tên mạng không dây (SSID)",
				content: "Bạn có thể sử dụng tên mạng không dây (SSID) mặc định hoặc nhập tên mới (tối đa 32 ký tự). Thông số này phân biệt chữ hoa và chữ thường"
			},{
				type: "name",
				title: "Giấu SSID",
				content: "Chọn hộp chọn này nếu bạn muốn giấu tên mạng (SSID) 2.4GHz/5GHz"
			},{
				type: "name",
				title: "Mật mã",
				content: "Nhập một mật mã không dây từ 8 đến 63 ký tự ASCII, hoặc từ 8 đến 64 ký tự thập lục phân. Trường hợp này phân biệt chữ hoa và chữ thường"
			},{
				type:"paragraph",
				content:"Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "Cài đặt thiết bị",
			CONTENT: [{
				type: "paragraph",
				content: "Màn hình Cài đặt thiết bị hiển thị các thông tin liên quan đến các thiết bị USB kết nối đến router thông qua cổng USB"
			},{
				type: "name",
				title: "Quét",
				content: "Thông thường, Router sẽ tự động phát hiện thiết bị mới được kết nối. Nếu Router không tự phát hiện, vui lòng nhấn nút này để quét các thiết bị mới được kết nối và làm mới màn hình hiển thị với thông tin mới được cập nhật"
			},{
				type: "name",
				title: "Nhãn",
				content: "Hiển thị tên của nhãn USB"
			},{
				type: "name",
				title: "Dung lượng",
				content: "Hiển thị tổng dung lượng lưu trữ của USB"
			},{
				type: "name",
				title: "Dung lượng trống",
				content: "Hiển thị dung lượng lưu trữ trống khả dụng hiện tại"
			},{
				type: "name",
				title: "Tháo an toàn",
				content: "Bấm chọn nút này để gỡ thiết bị lưu trữ USB trước khi ngắt kết nối thiết bị về mặt vật lý với router",
				children: [{
					type: "paragraph",
					content: "Xin lưu ý rằng nút Tháo an toàn chỉ xuất hiện khi có một thiết bị lưu trữ USB kết nối với Router, và bạn sẽ không thể gỡ các thiết bị USB trong khi đang bận."
				}]
			},{
				type: "name",
				title: "Trạng thái",
				content: "Tuỳ chọn này chỉ xuất hiện khi có một thiết bị lưu trữ USB kết nối với Router. Chọn để cho phép chia sẻ tập tin của thiết bị USB."
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "Cài đặt chia sẻ",
			CONTENT: [{
				type: "name",
				title: "Tên Mạng/Máy chủ đa phương tiện",
				content: "Hiển thị tên sử dụng để truy cập thiết bị lưu trữ USB được kết nối"
			},{
				type:"paragraph",
				content:"Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "Chia sẻ thư mục",
			CONTENT: [{
				type: "name",
				title: "Chia sẻ tất cả",
				content: "Chuyển sang chế độ Mở để chia sẻ tất cả các thư mục hoặc chuyển sang chế độ Tắt để chỉ chia sẻ các thư mục được chọn"
			},{
				type: "name",
				title: "Kích hoạt xác thực",
				content: "Chúng tôi rất khuyến nghị kích hoạt xác thực để yêu cầu người dùng nhập đúng tên đăng nhập và mật mã để truy cập thư mục được chia sẻ"
			},{
				type: "name",
				title: "Tên thư mục",
				content: "Hiển thị tên thư mục được chia sẻ"
			},{
				type: "name",
				title: "Đường dẫn thư mục",
				content: "Hiển thị đường dẫn đến thư mục được chia sẻ"
			},{
				type: "name",
				title: "Chia sẻ đa phương tiện",
				content: "Cho biết thư mục được chia sẻ có cho phép chia sẻ đa phương tiện hay không"
			},{
				type: "name",
				title: "Tên nhãn",
				content: "Hiển thị tên của nhãn được chia sẻ"
			},{
				type: "name",
				title: "Trạng thái",
				content: "Hiển thị trạng thái của tập tin được chia sẻ bằng đèn hiệu"
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị tùy chọn để Tùy chỉnh hoặc Xóa thư mục chia sẻ tương ứng"
			},{
				type: "name",
				title: "Thêm",
				content: "Bấm chọn nút này để tạo mục mới"
			},{
				type: "name",
				title: "Xóa",
				content: "Bấm chọn nút này để gỡ bỏ mục đã chọn khỏi bảng"
			},{
				type: "name",
				title: "Duyệt",
				content: "Bấm chọn để tìm kiếm thư mục chia sẻ"
			},{
				type: "name",
				title: "Cho phép truy cập Mạng khách",
				content: "Chọn để cho phép máy khách ở Mạng khách truy cập thư mục được chia sẻ"
			},{
				type: "name",
				title: "Kích hoạt xác thực",
				content: "Chọn để yêu cầu người dùng truy cập thư mục chia sẻ với tên đăng nhập và mật mã hợp lệ"
			},{
				type: "name",
				title: "Kích hoạt cho phép thay đổi",
				content: "Chọn để cho phép người dùng được phép thay đổi trên thư mục chia sẻ"
			},{
				type: "name",
				title: "Kích hoạt Chia sẻ đa phương tiện",
				content: "Chọn để kích hoạt chia sẻ đa phương tiện"
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "Máy chủ in ấn",
			CONTENT: [{
				type: "name",
				title: "Máy chủ in ấn",
				content: "Chuyển sang mở để kích hoạt chức năng máy chủ in ấn"
			},{
				type: "name",
				title: "Tên máy in",
				content: "Hiển thị tên máy in của bạn đang kết nối đến router"
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Quyền kiểm soát của phụ huynh",
			CONTENT: [{
				type: "name",
				title: "Quyền kiểm soát của phụ huynh",
				content: "Chuyển chế độ Mở để kích hoạt tính năng kiểm soát của cha mẹ. Theo mặc định, tính năng này bị vô hiệu hóa."
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "Thiết bị dưới Quyền kiểm soát của phụ huynh",
			CONTENT: [{
				type: "paragraph",
				content: "Hiển thị danh sách thiết bị chịu kiểm soát của Quyền kiểm soát của phụ huynh"
			},{
				type: "name",
				title: "Tên thiết bị",
				content: "Hiển thị tên của tất cả các thiết bị kết nối máy khách hiện đang dưới Quyền kiểm soát của phụ huynh"
			},{
				type: "name",
				title: "Địa chỉ MAC",
				content: "Hiển thị địa chỉ MAC của tất cả các thiết bị kết nối máy khách hiện đang dưới Quyền kiểm soát của phụ huynh."
			},{
				type: "name",
				title: "Thời gian truy cập Internet",
				content: "Hiển thị khoảng thời gian truy cập giới hạn. Thời gian biểu sẽ có hiệu lực dựa trên thời gian hệ thống của router, có thể được cài đặt ở mục \"Công cụ hệ thống -> Cài đặt thời gian\"."
			},{
				type: "name",
				title: "Mô tả",
				content: "Hiển thị mô tả ngắn gọn về thiết bị kết nối. Đây là cài đặt tùy chọn"
			},{
				type: "name",
				title: "Trạng thái",
				content: "Hiển thị tình trạng (kích hoạt hoặc vô hiệu hóa) của Quyền kiểm soát của phụ huynh của các thiết bị tương ứng."
			},{
				type: "name",
				title: "Tùy chỉnh",
				content: "Hiển thị lựa chọn Tùy chỉnh hoặc Xóa thiết bị tương ứng"
			},{
				type: "step",
				title: "Để giới hạn một thiết bị mới",
				content:[
					"1. Bấm chọn Thêm.",
					"2. Bấm chọn Xem thiết bị hiện hữu và chọn một thiết bị đang kết nối từ Danh sách thiết bị truy cập; hoặc nhập Tên thiết bị và Địa chỉ MAC theo cách thủ công để thêm một thiết bị đang không kết nối",
					"3. Bấm chọn biểu tượng Thời gian truy cập Internet để xác định khoảng thời gian bị giới hạn",
					"4. Nhập một mô tả ngắn gọn vào mục Mô tả. (Tùy chọn)",
					"5. Chọn Kích hoạt.",
					"6. Nhấp vào OK."
				]
			},{
				type: "paragraph",
				content: "Để chỉnh sửa hoặc xóa một mục Quyền kiểm soát của phụ huynh, đơn giản bấm chọn biểu tưởng Chỉnh sửa để chỉnh sửa thông tin hoặc biểu tượng Thùng rác để xóa mục tương ứng"
			},{
				type: "paragraph",
				content: "Để xóa nhiều mục, chọn tất cả các mục cần xóa và bấm chọn Xóa ở trên bảng"
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "Mạng khách",
			CONTENT: [{
				type: "paragraph",
				content: "Mạng khách cho phép bạn thiết lập một mạng độc lập với tên mạng không dây (SSID) và mật mã hoàn toàn khác để cho phép khách truy cập mạng không dây của bạn"
			},{
				type: "name",
				title: "Cho phép thiết bị trong  Mạng khách liên lạc",
				content: "Chọn hộp chọn này để cho phép các thiết bị không dây trong Mạng khách có thể giao tiếp với nhau"
			},{
				type: "name",
				title: "Cho phép máy khách truy cập mạng nội bộ của tôi",
				content: "Chọn hộp chọn này để cho phép thiết bị không dây trong Mạng khách có thể truy cập mạng nội bộ được chia sẻ và máy in của bạn."
			},{
				type: "name",
				title: "Kích hoạt Mạng khách",
				content: "Chọn hộp chọn này để kích hoạt chức năng Mạng khách"
			},{
				type: "name",
				title: "Tên mạng không dây (SSID)",
				content: "Bạn có thể sử dụng tên Mạng khách mặc định hoặc tạo tên mới (tối đa 32 ký tự)"
			},{
				type: "name",
				title: "Giấu SSID",
				content: "Chọn hộp chọn này nếu bạn muốn giấu Tên Mạng khách (SSID)"
			},{
				type: "name",
				title: "Mật mã",
				content: "Hoặc sử dụng mật mã được tạo ngẫu nhiên, hoặc tạo mật mã từ 8 đến 63 ký tự ASCII hoặc từ 8 đến 64 ký tự thập lục phân (0-9, a-f, A-F)"
			},{
				type:"paragraph",
				content:"Nhấn Lưu để lưu tất cả các thiết lập của bạn."
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"Cloud TP-Link",
			CONTENT:[{
				type:"paragraph",
				content:"Dịch vụ Cloud của TP-Link sẽ cho phép bạn giám sát mạng của bạn từ xa theo thời gian thực, truy cập và quản lý thiết bị TP-Link của bạn từ Internet ở bất cứ nơi đâu vào bất cứ thời điểm nào."
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"Thông tin tài khoản",
			CONTENT:[{
				type:"paragraph",
				content:"Hiển thị thông tin ID TP-Link của bạn. Bạn có thể chỉnh sửa thông tin tài khoản bằng cách nhấp vào biểu tượng chỉnh sửa."
			}]
		},
		DEVICE_INFO:{
			TITLE:"Thông tin thiết bị",
			CONTENT:[{
				type:"paragraph",
				content:"Hiển thị thông tin thiết bị của bạn, bao gồm tài khoản Cloud quản lý thiết bị."
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"Kết hợp tài khoản",
			CONTENT:[{
				type:"paragraph",
				content:"Bảng này hiển thị tất cả tài khoản cloud đang được liên kết với thiết bị."
			},{
				type:"step",
				title:"Để kết hợp một tài khoản người dùng",
				content:["1. Bấm chọn Kết hợp.",
				"2. Nhập email đã đăng ký mà bạn muốn kết hợp.",
				"3. Bấm chọn Lưu."]
			}]

		}

	};
})(jQuery);

