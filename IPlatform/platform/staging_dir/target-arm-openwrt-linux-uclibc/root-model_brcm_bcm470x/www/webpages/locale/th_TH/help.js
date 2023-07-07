(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {
		STATUS_INTERNET: {
			TITLE: "อินเทอร์เน็ต",
			CONTENT: [{
				type: "paragraph",
				content: "แสดงผลเกี่ยวกับการเชื่อมต่อของอินเทอร์เน็ต"
			},{
				type: "title",
				title: "IPv4",
			},{
				type: "name",
				title: "MAC Address",
				content: "เป็นหมายเลขที่ระบุคอมพิวเตอร์ที่ถูกใส่ลงไปในอินเทอร์เน็ตพอร์ตของเราท์เตอร์"
			},{
				type: "name",
				title: "IP Address",
				content: "เป็นหมายเลขเครือข่ายที่ถูกใส่ลงไปในอินเทอร์เน็ตพอร์ตของเราท์เตอร์. ถ้าหมายเลขแสดงเป็น 0.0.0.0 เป็นการบ่งบอกว่าไม่มีการเชื่อมต่ออินเทอร์เน็ต"
			},{
				type: "name",
				title: "Subnet Mask",
				content: "เป็นตัวกำหนดส่วนของเครือข่ายและส่วนของผู้ใช้ในIPแอดเดรส"
			},{
				type: "name",
				title: "Default Gateway",
				content: "เป็นหมายเลขเครือข่ายที่ใช้เชื่อมต่อเราท์เตอร์และออกไปสู่เครือข่ายภายนอก"
			},{
				type: "name",
				title: "Primary DNS/Secondary DNS",
				content: "การแปลงจากชื่อผู้ใช้และชื่อของผู้ให้บริการอินเทอร์เน็ตเป็น หมายเลขIPข้อมูลของ DNS Server เหล่านี้ถูกกำหนดโดยผู้ให้บริการอินเทอร์เน็ต (ISP)"
			},{
				type: "name",
				title: "รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
				content: "ประเภทการเชื่อมต่อในพอร์ตอินเทอร์เน็ต (Wan)"
			},{
				type: "title",
				title: "IPv6",
			},{
				type: "name",
				title: "MAC Address",
				content: "เป็นหมายเลขที่ระบุคอมพิวเตอร์ที่ถูกใส่ลงไปในอินเทอร์เน็ตพอร์ตของเราท์เตอร์"
			},{
				type: "name",
				title: "IP Address",
				content: "เป็นหมายเลขเครือข่ายที่ถูกใส่ลงไปในอินเทอร์เน็ตพอร์ตของเราท์เตอร์."
			},{
				type: "name",
				title: "Default Gateway",
				content: "เป็นหมายเลขเครือข่ายที่ใช้เชื่อมต่อเราท์เตอร์และออกไปสู่เครือข่ายภายนอก"
			},{
				type: "name",
				title: "Primary DNS/Secondary DNS",
				content: "การแปลงจากชื่อผู้ใช้และชื่อของผู้ให้บริการอินเทอร์เน็ตเป็น หมายเลขIPข้อมูลของ DNS Server เหล่านี้ถูกกำหนดโดยผู้ให้บริการอินเทอร์เน็ต (ISP)"
			},{
				type: "name",
				title: "รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
				content: "ประเภทการเชื่อมต่อในพอร์ตอินเทอร์เน็ต (Wan)"
			}]
		},
		STATUS_WIRELESS: {
			TITLE: "ไวเลส",
			CONTENT: [{
				type: "paragraph",
				content: "แสดงผลเกี่ยวกับการเชื่อมต่อของอินเทอร์เน็ตแบบไวเลส"
			},{
				type: "name",
				title: "ชื่อเครือข่ายไวเลส (SSID)",
				content: "ชื่อของเครือข่ายไวเลส,โดยรู้จักกันในชื่อของ SSID (Service Set Identifier)."
			},{
				type: "name",
				title: "สัญญาณไร้สาย",
				content: "สถานะปัจจุบัน(เปิดหรือปิด)ของเครือข่ายไวเลส"
			},{
				type: "name",
				title: "โหมด",
				content: "สถานะโหมด ของเครือข่ายไวเลส ปัจจุบัน"
			},{
				type: "name",
				title: "การเข้าสู่อุปกรณ์",
				content: "ความกว้างช่องทางแบนด์วิธของเครือข่ายไวเลส"
			},{
				type: "name",
				title: "ช่องสัญญาณ",
				content: "ช่องทางของเครือข่ายไวเลสและความถี่ที่สอดคล้องกัน (หน่วย GHz)"
			},{
				type: "name",
				title: "MAC Address",
				content: "เป็นหมายเลขที่ระบุเครือข่ายไวเลสบนเราท์เตอร์"
			},{
				type: "name",
				id: "status_wds",
				title: "สถานะ WDS",
				content: "สถานะปัจจุบัน(เปิดหรือปิด)ของโหมด WDS "
			}]
		},
		STATUS_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "แสดงข้อมูลเกี่ยวกับพอร์ตอีเทอเน็ต (LAN)"
			},{
				type: "title",
				title: "IPv4"
			},{
				type: "name",
				title: "MAC Address",
				content: "เป็นหมายเลขที่ระบุคอมพิวเตอร์ที่ถูกใส่ลงไปในอินเทอร์เน็ตพอร์ต(LAN)ของเราท์เตอร์"
			},{
				type: "name",
				title: "IP Address",
				content: "IPv4 address เป็นหมายเลขที่ถูกใส่ลงไปในอินเทอร์เน็ตพอร์ต(LAN)ของเราท์เตอร์."
			},{
				type: "name",
				title: "Subnet Mask",
				content: "เป็นตัวกำหนดส่วนของเครือข่ายและส่วนของผู้ใช้ในIPแอดเดรส"
			},{
				type: "name",
				title: "Dhcp",
				content: "แสดงระบบ DHCP Server ทำงานบนแลนพอร์ตของอุปกรณ์หรือไม่"
			},{
				type: "title",
				title: "IPv6"
			},{
				type: "name",
				title: "MAC Address",
				content: "เป็นหมายเลขที่ระบุคอมพิวเตอร์ที่ถูกใส่ลงไปในอินเทอร์เน็ตพอร์ต(LAN)ของเราท์เตอร์"
			},{
				type: "name",
				title: "IP Address",
				content: "IPv6 address เป็นหมายเลขที่ถูกใส่ลงไปในอินเทอร์เน็ตพอร์ต(แลน)ของเราท์เตอร์"
			},{
				type: "name",
				title: "Link-local Address",
				content: "เป็นตัวเชื่อม IPv6 บนระบบแลน"
			},{
				type: "name",
				title: "รูปแบบการกำหนด",
				content: "เป็นชนิด IPv6 บนระบบแลน"
			}]
		},
		STATUS_GUEST: {
			TITLE: "เครือข่ายสำหรับบุคคลคนภายนอก",
			CONTENT: [{
				type: "paragraph",
				content: "แสดงข้อมูลเกี่ยวกับเครือข่ายไวเลสสำหรับบุคคลภายนอก "
			},{
				type: "name",
				title: "ชื่อเครือข่ายไวเลส (SSID)",
				content: "ชื่อของเครือข่ายไวเลสสำหรับคนภายนอก."
			},{
				type: "name",
				title: "ซ่อน SSID",
				content: "แสดงสถานะว่าเครือข่าย SSID ของเครือข่ายไวเลสสำหรับคนภายนอกว่าเปิดหรือปิดอยู่"
			},{
				type: "name",
				title: "สัญญาณไร้สาย",
				content: "สถานะปัจจุบัน (เปิด-ปิด) ของบุคคลภายนอก"
			},{
				type: "name",
				title: "อนุญาตให้อุปกรณ์เครือข่ายไวเลสมองเห็น",
				content: "เลือกนี้เพื่ออนุญาตให้อุปกรณ์เครือข่ายไวเลสมองเห็นเครือข่ายสำหรับคนภายนอก."
			}]
		},
		STATUS_USB: {
			TITLE: "อุปกรณ์ USB",
			CONTENT: [{
				type: "paragraph",
				content: "แสดงข้อมูลของ USB Storage และ/หรือการเชื่อมต่อของปริ้นเตอร์ผ่านเราท์เตอร์ผ่านพอร์๖USB"
			},{
				type: "name",
				title: "ปรินเตอร์",
				content: "ชื่อของปริ้นเตอร์ที่เชื่อมต่ออยู่"
			},{
				type: "name",
				title: "USB Disk",
				content: "ชื่อไดร์ฟของ USB ที่เชื่อมต่อกับเราท์เตอร์"
			},{
				type: "name",
				title: "รวม",
				content: "แสดงปริมาณความจุของ USB"
			},{
				type: "name",
				title: "สามารถใช้",
				content: "แสดงพื้นที่ของ USB ที่สามารถใช้งานได้"
			}]
		},
		STATUS_PERFORMANCE: {
			TITLE: "ประสิทธิภาพ",
			CONTENT: [{
				type: "paragraph",
				content: "แสดงสถานะประสิทธิภาพของเราท์เตอร์"
			},{
				type: "name",
				title: "รายงานการทำงาน CPU",
				content: "การใช้ CPU ปัจจุบัน"
			},{
				type: "name",
				title: "รายงานการใช้งาน Memory",
				content: "หน่วยความจำที่ใช้อยู่ปัจจุบัน"
			}]
		},
		STATUS_WIRED: {
			TITLE: "ผู้ใช้ผ่านสาย",
			CONTENT: [{
				type: "paragraph",
				content: "แสดงข้อมูลของอุปกรณ์ที่ใช้เชื่อมต่อแบบใช้สายในปัจจุบัน"
			}]
		},
		STATUS_WIRELESS_CLIENTS: {
			TITLE: "ผู้ใช้ไวเลส",
			CONTENT: [{
				type: "paragraph",
				content: "แสดงข้อมูลของอุปกรณ์ที่ใช้เชื่อมต่อแบบไวเลสในปัจจุบัน"
			}]
		},
		
		INTERNET_INTERNET: {
			TITLE: "IPv4",
			CONTENT: [{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : Static IP"
			},{
				type: "paragraph",
				content: "เลือกชนิดนี้ ถ้าคุณมีการจัดการกับหมายเลข (แบบกำหนด) IP Address,Subnet Mask,Gatewayและ DNS โดยผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "IP Address/Subnet Mask/Default Gateway/Primary DNS/Secondary DNS",
				content: "เข้าสู่ข้อมูลที่ถูกจัดการโดยผู้ให้บริการอินเทอร์เน็ตของคุณ"
			},{
				type: "name",
				title: "ขนาด MTU ",
				content: "ค่าเริ่มต้นขนาดของ MTU ทั่วไปสำหรับเครือข่ายอีเทอเน็ตคือ 1,500 ไบต์ ไม่แนะนำให้เปลี่ยนค่าเริ่มต้นขนาดของ MTU เว้นแต่มีการขอจากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : Dynamic IP"
			},{
				type: "paragraph",
				content: "เลือกประเภทนี้หากคุณให้การเชื่อมต่อกับ DHCP เซิร์ฟเวอร์จาก ISP ของคุณ"
			},{
				type: "name",
				title: "IP Address/Subnet Mask/Default Gateway/Primary DNS/Secondary DNS",
				content: "ค่าเหล่านี้จะถูกระบุแบบอัตโนมัติโดย DHCP  เซิร์ฟเวอร์จากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ขอใหม่",
				content: "คลิกปุ่มนี้เพื่อรับหมายเลขIPจาก DHCP  เซิร์ฟเวอร์ใหม่"
			},{
				type: "name",
				title: "ปล่อย",
				content: "คลิกปุ่มนี้เพื่อปล่อยทุกIPที่ถูกระบุโดย DHCP  เซิร์ฟเวอร์"
			},{
				type: "name",
				title: "Use the Following DNS Addresses",
				content: "ถ้าผู้ให้บริการอินเทอร์เน็ตเป็นคนจัดการ DNS Address,เลือกที่ช่องนี้และใส่ Primary DNS และ Secondary DNS Address ลงไปให้ถูกต้อง มิฉะนั้น DNS Address จะถูกระบุโดยผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ขนาด MTU ",
				content: "ค่าเริ่มต้นขนาดของ MTU ทั่วไปสำหรับเครือข่ายอีเทอเน็ตคือ 1,500 ไบต์ ไม่แนะนำให้เปลี่ยนค่าเริ่มต้นขนาดของ MTU เว้นแต่มีการขอจากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ชื่อเราท์เตอร์",
				content: "ใส่ชื่อของเราท์เตอร์"
			},{
				type: "name",
				title: "เลือกที่ช่องนี้ ถ้า DHCP Server",
				content: "ของผู้ให้บริการอินเทอร์เน็ตของคุณไม่รองรับและไม่สามารถรับหมายเลขIPแบบไดนามิคได้."
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : PPPoE"
			},{
				type: "paragraph",
				content: "เลือกชนิดนี้ถ้าคุณใช้บริการ DSL (Digital Subscriber Line) และถูกกำหนดด้วย ชื่อผู้ใช้ และ รหัส จากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ชื่อผู้ใช้/รหัสผ่าน",
				content: "ใส่ชื่อผู้ใช้และรหัสผ่านที่ได้จากผู้ให้บริการอินเทอร์เน็ตของคุณ ซึ่งในส่วนนี้ต้องคำนึงถึงcase-sensitive"
			},{
				type: "name",
				title: "IP Address/Primary DNS/Secondary DNS",
				content: "ค่าเหล่านี้จะถูกระบุแบบอัตโนมัติโดย DHCP Server จากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "Secondary Connection (None, Dynamic IP, Static IP)",
				children: [{
					type: "name",
					title: "None",
					content: "ให้ทำการเลือกเลือกนี้ถ้าไม่มีการเชื่อมต่อสำรอง"
				},{
					type: "name",
					title: "Dynamic IP",
					content: "ให้ทำการเลือกนี้ถ้าหมายเลขIPและซับเนสแมสถูกระบุโดยอัตโนมัติโดยผู้ให้บริการอินเทอร์เน็ต",
					children: [{
						type: "name",
						title: "ขอใหม่",
						content: "คลิกปุ่มนี้เพื่อขอรับหมายเลขIPจากผู้ให้บริการอินเทอร์เน็ตใหม่"
					},{
						type: "name",
						title: "ปล่อย",
						content: "คลิกปุ่มนี้เพื่อยกเลิกIPที่ถูกระบุโดยผู้ให้บริการอินเทอร์เน็ต"
					}]
				},{
					type: "name",
					title: "Static IP",
					content: "เลือกหาก IP address และ Subnet Mask ถูกให้มาโดย ISP และใส่ข้อมูลเหล่านี้ลงในฟิลด์ข้อมูลที่สอดคล้องกัน"
				}]
			},{
				type: "name",
				title: "ขนาด MTU ",
				content: "ขนาด MTU (Maximum Transmission Unit) สำหรับเครือข่ายอีเทอเน็ตคือ 1480 ไบต์",
				children: [{
					type: "note",
					title: "หมายเหตุ",
					content: "ในกรณีที่หายาก, ผู้ให้บริการอินเทอร์เน็ตของคุณอาจจะต้องการปรับขนาดของ MTU เพื่อประสิทธิภาพของเครือข่าย คุณไม่ควรเปลี่ยนเว้นแต่มันคือสิ่งที่จำเป็นจริงๆ"
				}]
			},{
				type: "name",
				title: "Service Name/Access Concentrator Name",
				content: "จากค่าเริ่มจ้น ชื่อของบริการและผู้ให้บริการจะเว้นว่างไว้ พื้นที่เหล่านี้ไม่ควรตั้งค่าใดๆ เว้นแต่เป็นความต้องการของผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ค้นหาช่วงเวลาออนไลน์",
				content: "ระบุช่วงเวลาที่ค่าระหว่าง 0 และ 120 ( หน่วยวินาที) ซึ่งเราท์เตอร์ตรวจสอบ ผู้ให้บริการออนไลน์ในทุกช่วง โดยค่าเริ่มต้นคือ 10 "
			},{
				type: "name",
				title: "IP Address",
				content: "ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณจัดสรร IP address (แบบกำหนด) เลือก \"use the following ip address\" และใส่หมายเลขIPลงไปในช่องว่า นอกจากนั้นเลือก \"get dynamically from isp\" เพื่อรับ DNS IP Address ที่เซิร์ฟเวอร์ระบุแบบอัตโนมัติ"
			},{
				type: "name",
				title: "DNS Address/Primary DNS/Secondary DNS",
				content: "ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณจัดสรรหมายเลข ดีเอ็นเอส IP(แบบกำหนด) เลือก Use the following DNS Address และใส่ที่อยู่ลงไปในช่องของ Primary DNS และ Secondary DNS ตามลำดับ มิฉะนั้นเลือก Get Dynamically From ISP เพื่อรับ DNS IP Address ที่เซิร์ฟเวอร์ระบุแบบอัตโนมัติ"
			},{
				type: "name",
				title: "โหมดการเชื่อมต่อ",
				content: "เลือกโหมดการเชื่อมต่อให้เหมาะสมในการเชื่อมต่ออินเทอร์เน็ต",
				children: [{
					type: "name",
					title: "อัตโนมัต",
					content: "ในโหมดนี้การเชื่อมต่ออินเทอร์เน็ตจะเชื่อมต่อใหม่อัตโนมัตเมื่อหลุดจากการเชื่อมต่อ"
				},{
					type: "name",
					title: "ความต้องการ",
					content: "ในโหมดนี้การเชื่อมต่ออินเทอร์เน็ตจะถูกตัดโดยอัตโนมัติหลังจากกำหนดเวลา ได้ผ่านพ้นไป. การเชื่อมต่อจะถูกสร้างขึ้นเมื่อคุณพยายามจะเข้าสู่อินเทอร์เน็ตอีกครั้ง"
				},{
					type: "name",
					title: "เวลาพื้นฐาน",
					content: "ในโหมดนี้,การเชื่อมต่อจะถูกสร้างในระยะเวลาที่กำหนดเท่านั้น ถ้าตัวเลือกถูกเลือก ให้ใส่เวลาเริ่มต้นและเวลาสิ้นสุดในรูปแบบ ชั่วโมง:นาที"
				},{
					type: "name",
					title: "ด้วยตัวเอง",
					content: "ในโหมดนี้, การเชื่อมต่ออินเทอร์เน็ตจะถูกควบคุมโดยคลิกที่ปุ่มเชื่อมต่อหรือตัดการเชื่อมต่อ โหมดนี้จะรองรับการใช้ \"Max Idle Time\" ใส่เวลาสูงสุด(ในหน่วยนาที)ที่การเชื่อมต่ออินเทอร์เน็ตที่ยังไม่สามารถใช้งานได้ก่อนมันจะถูกตัดลงใน \"Max Idle time\" ค่าทั่วไปคือ 15 นาที ถ้าคุณต้องการเชื่อมต่ออินเทอร์เน็ตตลอดเวลา ใส่ 0 (ศุนย์)"
				},{
					type: "note",
					title: "หมายเหตุ",
					content: "การเชื่อมต่อแบบโหมดบนฐานเวลาจะถูกอ้างอิงจากระบบเวลาบน Advance->System Tools->Time Settings สามารถตั้งต่าได้"
				}]
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : BigPond Cable"
			},{
				type: "paragraph",
				content: "เลือกชนิดนี้ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณใช้การเชื่อมต่อแบบ Bigpond Cable."
			},{
				type: "name",
				title: "ชื่อผู้ใช้/รหัสผ่าน",
				content: "ใส่ชื่อผู้ใช้และรหัสผ่านที่ได้จากผู้ให้บริการอินเทอร์เน็ตของคุณ ซึ่งในส่วนนี้ต้องคำนึงถึงcase-sensitive"
			},{
				type: "name",
				title: "Auth. Server",
				content: "ใส่ชื่อIP address หรือโฮสเนมของauthentication"
			},{
				type: "name",
				title: "Auth. Domain",
				content: "ใส่ชื่อซัพฟิกของเซิร์ฟเวอร์โดเมนเนม(ขึ้นพื้นที่ของคุณ) ยกตัวอย่าง nsw.bigpond.net.au สำหรับ NSW/ACT, vic.bigpond.net.au สำหรับ VIC/TAS/WA/SA/NT,หรือ qld.bigpond.net.au สำหรับ QLD."
			},{
				type: "name",
				title: "ขนาด MTU ",
				content: "ค่าเริ่มต้นขนาดของ MTU ทั่วไปสำหรับเครือข่ายอีเทอเน็ตคือ 1,500 ไบต์ ไม่แนะนำให้เปลี่ยนค่าเริ่มต้นขนาดของ MTU เว้นแต่มีการขอจากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "โหมดการเชื่อมต่อ",
				content: "เลือกโหมดการเชื่อมต่อให้เหมาะสมในการเชื่อมต่ออินเทอร์เน็ต",
				children: [{
					type: "name",
					title: "อัตโนมัต",
					content: "ในโหมดนี้การเชื่อมต่ออินเทอร์เน็ตจะเชื่อมต่อใหม่อัตโนมัตเมื่อหลุดจากการเชื่อมต่อ"
				},{
					type: "name",
					title: "ความต้องการ",
					content: "ในโหมดนี้การเชื่อมต่ออินเทอร์เน็ตจะถูกตัดโดยอัตโนมัติหลังจากกำหนดเวลา ได้ผ่านพ้นไป. การเชื่อมต่อจะถูกสร้างขึ้นเมื่อคุณพยายามจะเข้าสู่อินเทอร์เน็ตอีกครั้ง"
				},{
					type: "name",
					title: "ด้วยตัวเอง",
					content: "ในโหมดนี้, การเชื่อมต่ออินเทอร์เน็ตจะถูกควบคุมโดยคลิกที่ปุ่มเชื่อมต่อหรือตัดการเชื่อมต่อ โหมดนี้จะรองรับการใช้ \"Max Idle Time\" ใส่เวลาสูงสุด(ในหน่วยนาที)ที่การเชื่อมต่ออินเทอร์เน็ตที่ยังไม่สามารถใช้งานได้ก่อนมันจะถูกตัดลงใน \"Max Idle time\" ค่าทั่วไปคือ 15 นาที ถ้าคุณต้องการเชื่อมต่ออินเทอร์เน็ตตลอดเวลา ใส่ 0 (ศุนย์)"
				}]
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต :  L2TP/PPTP"
			},{
				type: "paragraph",
				content: "เลือกชนิดนี้ถ้าคุณเชื่อมต่อ L2TP/PPTP VPN Server และถูกกำหนดด้วยชื่อผู้ใช้,รหัสผู้ใช้ และหมายเลขไอ/โดเมนเนมของเซิร์ฟเวอร์โดยผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ชื่อผู้ใช้/รหัสผ่าน",
				content: "ใส่ชื่อผู้ใช้และรหัสผ่านที่ได้จากผู้ให้บริการอินเทอร์เน็ตของคุณ ซึ่งในส่วนนี้ต้องคำนึงถึงcase-sensitive"
			},{
				type: "name",
				title: "IP Address/Primary DNS/Secondary DNS",
				content: "ค่าเหล่านี้จะถูกระบุแบบอัตโนมัติโดยเซิร์ฟเวอร์ DHCP จากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "การเชื่อมต่อสำรอง (Dynamic IP หรือ Static IP)",
				children: [{
					type: "name",
					title: "Dynamic IP",
					content: "ให้ทำการเลือกนี้ถ้าหมายเลขIPและซับเนสแมสถูกระบุโดยอัตโนมัติโดยผู้ให้บริการอินเทอร์เน็ต"
				},{
					type: "name",
					title: "Static IP",
					content: "การกำหนดเส้นทางโดยอัตโนมัติStatic IP เลือกชนิดนี้ ถ้าคุณมีการจัดการกับหมายเลขIP (แบบกำหนด) IP Address, Subnet Mask, Gateway และ DNS Address โดยผู้ให้บริการอินเทอร์เน็ต"
				}]
			},{
				type: "name",
				title: "IP เซิร์ฟเวอร์ VPN /ชื่อโดเมน",
				content: "ใส่หมายเลขIPเซิร์ฟเวอร์ของ VPN หรือ ชื่อของโดเมนที่ถูกระบุโดยผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ขนาด MTU ",
				content: "ค่าเริ่มต้น และ ค่าทั่วไป MTU   (Maximum Transmission Unit) ขนาดสำหรับเครือข่ายอีเทอร์เน็ตมากที่สุดคือ 1,460 ไบต์สำหรับ L2TP หรือ 1,420 ไบต์สำหรับ PPTP จะไม่แนะนำให้เปลี่ยนค่าเริ่มต้นขนาด MTU เว้นแต่มีการร้องขอจาก ISP"
			},{
				type: "name",
				title: "โหมดการเชื่อมต่อ",
				content: "เลือกโหมดการเชื่อมต่อให้เหมาะสมในการเชื่อมต่ออินเทอร์เน็ต",
				children: [{
					type: "name",
					title: "อัตโนมัต",
					content: "ในโหมดนี้การเชื่อมต่ออินเทอร์เน็ตจะเชื่อมต่อใหม่อัตโนมัตเมื่อหลุดจากการเชื่อมต่อ"
				},{
					type: "name",
					title: "ความต้องการ",
					content: "ในโหมดนี้การเชื่อมต่ออินเทอร์เน็ตจะถูกตัดโดยอัตโนมัติหลังจากกำหนดเวลา ได้ผ่านพ้นไป. การเชื่อมต่อจะถูกสร้างขึ้นเมื่อคุณพยายามจะเข้าสู่อินเทอร์เน็ตอีกครั้ง"
				},{
					type: "name",
				title: "ด้วยตัวเอง",
				content: "ในโหมดนี้, การเชื่อมต่ออินเทอร์เน็ตจะถูกควบคุมโดยคลิกที่ปุ่มเชื่อมต่อหรือตัดการเชื่อมต่อ โหมดนี้จะรองรับการใช้ \"Max Idle Time\" ใส่เวลาสูงสุด(ในหน่วยนาที)ที่การเชื่อมต่ออินเทอร์เน็ตที่ยังไม่สามารถใช้งานได้ก่อนมันจะถูกตัดลงใน \"Max Idle time\" ค่าทั่วไปคือ 15 นาที ถ้าคุณต้องการเชื่อมต่ออินเทอร์เน็ตตลอดเวลา ใส่ 0 (ศุนย์)"
				}]
			},{
				type:"paragraph",
				content:"คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		INTERNET_MAC: {
			TITLE: "Mac Clone",
			CONTENT: [{
				type: "name",
				title: "ใช้ MAC Address พื้นฐาน",
				content: "ไม่ทำการเปลี่ยนค่า MAC address เริ่มต้นของเราท์เตอร์ ในกรณีที่ผู้ให้บริการอินเทอร์เน็ต ไม่ได้ผูก IP address กับ MAC address ไว้ด้วยกัน"
			},{
				type: "name",
				title: "ใช้ MAC Address คอมพิวเตอร์ปัจจุบัน",
				content: "เลือกที่การคัดลอก MAC Address ปัจจุบันของคอมพิวพ์เตอร์ที่ใช้เชื่อมต่อเราท์เตอร์ ในกรณีผู้ให้บริการระบุ IP Address นี้ให้ใช้ผูกอยู่กับ MAC Address ของคอมพิวพ์เตอร์"
			},{
				type: "name",
				title: "ใช้ MAC Address แบบกำหนดเอง",
				content: "ใส่ MAC Address ด้วยตนเอง ในกรณีผู้ให้บริการระบุ IP Address นี้ให้ใช้ผูกอยู่กับ MAC Address ของคอมพิวพ์เตอร์ที่เฉพาะเจาะจง"
			},{
				type:"paragraph",
				content:"คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},

		LAN_IPV4: {
			TITLE: "LAN",
			CONTENT: [{
				type: "name",
				title: "MAC Address",
				content: "เป็นหมายเลขที่ระบุคอมพิวเตอร์ที่ถูกใส่ลงไปในอินเทอร์เน็ตพอร์ต(LAN)ของเราท์เตอร์"
			},{
				type: "name",
				title: "IP Address",
				content: "แสดงค่าเริ่มต้น IP address ของเราท์เตอร์ ซึ่งจะใช้เพื่อเข้าสู่หน้าการจัดการเว็บของ เราท์เตอร์และสามารถเปลี่ยนได้"
			},{
				type: "name",
				title: "Subnet Mask",
				content: "เลือกกำหนดระบุใช้โดยพอร์ตแลน เส้นทางภายในและภายนอกช่องจราจร จากรายการ drop-down หรือใส่ subnet mask ใหม่ในรูปแบบจุดทศนิยม"
			},{
				type: "note",
				title: "หมายเหตุ",
				content: "ถ้า IP Address ใหม่ไม่ใช่ subnet เดียวกันกับอันเก่า , ที่จัดเก็บของ IP Address ใน DHCP Server จะถูกตั้งค่าโดยอัตโนมัติ อย่างไรก็ตาม การจำลงเซิร์ฟเวอร์และ DMZ host จะไม่มีผลกระทบอะไรจนกระทั่งพวกเขาแก้การตั้งค่ากลับมา."
			},{
				type:"paragraph",
				content:"คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		IPTV:{
			TITLE: "การตั้งค่า",
			CONTENT: [{
					type: "name",
					title: "IGMP Proxy",
					content: "เลือก IGMP พร็อกซี่เวอร์ชั่น เช่น V2 หรือ V3 ตามผู้ให้บริการอินเทอร์เน็ตของคุณ"
				},{
					type: "name",
					title: "รุ่น IGMP",
					content: "เลือกรุ่น IGMP พร็อกซีทั้ง V2 หรือ V3 หรือระบุตาม ISP ของคุณ"
				},
				{
					type: "name",
					title: "IPTV",
					content: "เลือกเปิดใช้คุณสมบัติ IPTV"
				},
				{
					type: "name",
					title: "โหมด",
					content: "เลือกโหมดให้เหมาะสมตามผู้ให้บริการอินเทอร์เน็ตของคุณ มี 6 โหมดที่รองรับ IPTV",
					children: [
						{
							type: "name",
							title: "ถ้าผู้ให้บริการอินเทอร์เน็ตไม่มีในรายชื่อและไม่มีค่าที่ต้องการ คุณสามารถเลือกโหมดนี้เพื่อตั้งค่าแลนพอร์ตบนเราท์เตอร์ได้.",
							content:"หาก ISP ของคุณไม่ได้จดทะเบียนและไม่มีพารามิเตอร์อื่นๆที่จำเป็น คุณก็สามารถเลือกโหมดนี้และกำหนดค่าพอร์ตแลน คุณสมบัติของเราท์เตอร์",
							children:[{
								type: "name",
								title: "ระบุพอร์ตแลน 1/2/3/4",
								content: "ระบุพอร์ตแลนของคุณให้ผู้ให้บริการอินเทอร์เน็ตและผู้ให้บริการ IPTV"
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "เลือกหาก ISP ของคุณมาจากรัสเซียและมีการกำหนดค่าพารามิเตอร์ที่จำเป็นไว้ล่วงหน้าแล้ว รวมถึัง Internet/IP-Phone/IPTV VLAN IDs และลำดับความสำคัญและคุณสมบัติของพอร์ต LAN (1/2/3/4)",
							children: [{
								type: "name",
								title: "Malaysia-Unifi",
								content: "คุณสามารถเปิดคุณสมบัติ IPTV multicast ที่ต้องการ และตั้งค่า VLAN ID และ ลำดับความสำคัญตาม ISP ของคุณ"
							}]
						},
						{
							type: "name",
							title: "Singapore-ExStream",
							content: "เลือกนี้ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณเป็น ExStream จากสิงคโปร์ และกำหนดค่าที่จำเป็นก่อนใช้, รวมไปถึงอินเทอร์เน็ต IP Phone/IPTV VlanIDs และ Priority, และพอร์ตแลนด์1/2/3/4."
						},
						{
							type: "name",
							title: "Malaysia-Unifi",
							content: "เลือกนี้ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณเป็น Unifi จากมาเลเซีย และกำหนดค่าที่จำเป็นก่อนใช้, รวมไปถึงอินเทอร์เน็ต IP Phone/IPTV VlanIDs และ Priority,และพอร์ตแลนด์1/2/3/4."
						},
						{
							type: "name",
							title: "Malaysia-Maxis",
							content: "เลือกนี้ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณเป็น Maxis จากมาเลเซีย และกำหนดค่าที่จำเป็นก่อนใช้, รวมไปถึงอินเทอร์เน็ต IP Phone/IPTV VlanIDs และ Priority, และพอร์ตแลนด์1/2/3/4."
						},
						{
							type: "name",
							title: "Portugal-MEO",
							content: "ถ้าเลือกใช้ Portugal-MEO และพารามิเตอร์ที่จำเป็นจะกำหนดไว้รวมทั้งอินเทอร์เน็ต VLAN ID และจัดลำดับความสำคัญ และ คุณสมบัติของพอร์ต LAN (พอร์ต 1/2/3/4)."
						},
						{
							type: "name",
							title: "Portugal-Vodafone",
							content: "ถ้าเลือก Portugal-Vodafoneจะต้องกำหนดค่าที่จำเป็น สำหรับค่าต่างๆ และลำดับความสำคัญของ Internet / IP-Phone / IPTV VLAN IDs และลำดับความสำคัญ คุณสามารถกำหนดพอร์ต LAN ของคุณ และจัดลำดับการทำงานของพอร์ตตามลำดับตามความจำเป็น (Internet supplier/IPTV supplier/IP-Phone supplier/Internet-IPTV supplier)."
						},
						{
							type: "name",
							title: "ตัวเลือก",
							content: "เลือกนี้ถ้าผู้ให้บริการอินเทอร์เน็ตไม่มีในรายชื่อ จัดการกำหนดค่าที่จำเป็นก่อนใช้, รวมไปถึงอินเทอร์เน็ต IP Phone/IPTV VlanIDs และ Priority,และพอร์ตแลนด์1/2/3/4.",
							children: [{
								type: "name",
								title: "IPTV Multicast VLAN ID/Priority",
								content: "ตั้งค่า VLAN ID และ ลำดับความสำคัญตามที่ ISP ให้มา"
							},{
								type: "name",
								title: "802.11Q Tag",
								content: "เลือกนี้เพื่อติดตามข้อมูลอินเทอร์เน็ตด้วย มาตรฐาน 802.11Q."
							},{
								type: "name",
								title: "Malaysia-Unifi",
								content: "คุณสามารถเปิดคุณสมบัติ IPTV multicast ที่ต้องการ และตั้งค่า VLAN ID และ ลำดับความสำคัญตาม ISP ของคุณ"
							},{
								type: "name",
								title: "ระบุพอร์ตแลน 1/2/3/4",
								content: "กำหนดพอร์ตแลนของคุณไม่ว่าจะเป็นฟังก์ชั่น Internet supplier, IP-phone supplier หรือจะเป็น IPTV supplier"
							}]
						}
					]
				},{
				type:"paragraph",
				content:"คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
				}
			]
		},

		DHCP_SERVER_SETTINGS: {
			TITLE: "การตั้งค่า",
			CONTENT: [{
				type: "name",
				title: "DHCP Server",
				content: "ค่าเริ่มต้น DHCP Server จะถูกเปิดเอาไว้; มันระบุ TCP/IP ไปยังอุปกรณ์ผู้ใช้โดยอัตโนมัต. ห้ามปิด DHCP Server เว้นแต่คุณมี DHCP Server อื่น หรือคุณต้องระบุ TCP/IP ด้วยตัวเองกับทุกอุปกรณ์บนเครือข่ายของคุณ."
			},{
				type: "name",
				title: "เปิด Address Pool",
				content: "ระบุช่วงของ IP  address นั้น ที่สามารถปล่อยให้กับลูกค้า"
			},{
				type: "name",
				title: "เปิด Lease Time",
				content: "ระบุระยะเวลาที่ IP address  เป็นแบบที่ปล่อยให้ลูกค้าระหว่าง 1 และ 2880 นาที ค่าเริ่มต้นคือ 120 นาที "
			},{
				type: "name",
				title: "Default Gateway",
				content: "ระบุ LAN IP address (ถ้าต้องการ)"
			},{
				type: "name",
				title: "Primary DNS/Secondary DNS",
				content: "ใส่ค่าถูกกำหนดไว้โดยผู้ให้บริการอินเทอร์เน็ตของคุณ (ถ้าต้องการ)"
			},{
				type:"paragraph",
				content:"คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		RESERVED_IP_ADDRESS: {
			TITLE: "การจอง IP Address",
			CONTENT: [{
				type: "paragraph",
				content: "คุณสามารถจอง ip address สำหรับผู้ใช้ได้ด้วยตัวเองสำหรับเชื่อมต่อกับเราท์เตอร์, IP Address จะถูกระบุด้วยผู้ใช้เดียวกันกับเซิร์ฟเวอร์ DHCP "
			},{
				type: "name",
				title: "MAC Address",
				content: "แสดง MAC Address ของผู้ใช้ด้วยระบบจอง IP Address ของ DHCP"
			},{
				type: "name",
				title: "IP Address",
				content: "แสดง IP Address ที่ถูกจองของผู้ใช้"
			},{
				type: "name",
				title: "บรรยาย",
				content: "แสดงลักษณะของอุปกรณ์ผู้ใช้"
			},{
				type: "name",
				title: "สถานะ",
				content: "แสดงสถานะปัจจุบัน(เปิดหรือปิด)ของอุปกรณ์ผู้ใช้"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "แสดงตัวเลือกเพื่อเปลี่ยนแปลงหรือลบผู้ใช้ที่ตรงกัน"
			},{
				type: "step",
				title: "การจอง IP Address",
				content:[
					"1. คลิก Add",
					"2. ใส่ MAC Address ของผู้ใช้ที่คุณต้องการ",
					"3. ใส่ IP Address ที่คุณต้องการจองสำหรับผู้ใช้",
					"4. ใส่ ลักษณะ สำหรับผู้ใช้",
					"5. เลือก Enable",
					"6. คลิก OK"
				]
			},{
				type: "step",
				title: "เพื่อเปลี่ยนแปลงหรือลบผู้ใช้ที่มีอยู่แล้ว",
				content: "ในตาราง,คลิก Edit หรือ Delete เพื่อแก้ไขหรือลบให้ถูกต้องตามความต้องการ"
			}]
		},

		DHCP_CLIENT_LIST: {
			TITLE: "รายชื่อผู้ใช้ DHCP",
			CONTENT: [{
				type: "name",
				title: "จำนวนผู้ใช้",
				content: "แสดงหมายเลขที่เกี่ยวข้องของผู้ใช้ DHCP"
			},{
				type: "name",
				title: "ชื่อผู้ใช้งาน",
				content: "แสดงชื่อของผู้ใช้ DHCP"
			},{
				type: "name",
				title: "MAC Address",
				content: "แสดง MAC Address"
			},{
				type: "name",
				title: "IP Address",
				content: "แสดง IP Address ที่ถูกจัดสรรให้ผู้ใช้"
			},{
				type: "name",
				title: "Lease Time",
				content: "แสดงเวลาที่เหลือของ IP address ที่ได้ปล่อยให้กับลูกค้า"
			},{
				type: "name",
				title: "รีเฟรช",
				content: "คลิกเพื่ออัพเดทรายชื่อผู้ใช้ที่ได้จากDHCP"
			}]
		},

		DDNS: {
			TITLE: "Dynamic DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamic DNS (Domain Name System) ช่วยให้คุณสามารถกำหนดโฮสต์และชื่อโดเมนกับที่อยู่หมายเลขไอพีแอดเดรสอินเทอร์เน็ตแบบไดนามิก ซึ่งจะมีประโยชน์เมื่อคุณมีพื้นที่เว็บไซต์ของคุณเอง, FTP เซิร์ฟเวอร์หรือเซิร์ฟเวอร์อื่นที่อยู่หลังเราเตอร์ ในการเริ่มต้นคุณจะต้องลงทะเบียนกับผู้ให้บริการ DNS เช่น www.dyndns.com จากนั้นป้อนข้อมูลการลงทะเบียนของคุณ"
			},{
				type: "step",
				title: "การติดตั้ง Dynamic DNS",
				content: [
					"1. เลือกผู้ให้บริการ DDNS",
					"2. ใส่ ชื่อผู้ใช้ และ รหัสผู้ใช้ ของบัญชี DDNS",
					"3. ป้อนชื่อโดเมนที่คุณลงทะเบียนกับผู้ให้บริการ DNS ",
					"4. เลือกช่วงเวลาที่จะถูกส่งไปร้องขอการอัพเดท DNS ",
					"5. หากผู้ให้บริการของคุณคือ No-IP ให้เลือก WAN IP เพื่อให้แน่ใจว่าชื่อโดเมนที่ถูกผูกไว้กับ WAN IP ของเราเตอร์นี้",
					"6. คลิกเข้าสู่ระบบและบันทึก"
				]
			},{
				type: "note",
				title:"หมายเหตุ",
				content: "หากคุณต้องการใช้บัญชี DDNS อื่นๆ กรุณาออกจากระบบก่อนแล้วจึงเข้าสู่ระบบด้วยบัญชีใหม่"
			}]
		},
                DYNAMIC_DNS: {
			TITLE: "Dynamic DNS",
			CONTENT: [{
				type: "paragraph",
				content: "Dynamic DNS (Domain Name System) ช่วยให้คุณสามารถกำหนดโฮสต์และชื่อโดเมนกับที่อยู่หมายเลขไอพีแอดเดรสอินเทอร์เน็ตแบบไดนามิก ซึ่งจะมีประโยชน์เมื่อคุณมีพื้นที่เว็บไซต์ของคุณเอง, FTP เซิร์ฟเวอร์หรือเซิร์ฟเวอร์อื่นที่อยู่หลังเราเตอร์ ในการเริ่มต้นคุณจะต้องลงทะเบียนกับผู้ให้บริการ DNS เช่น www.dyndns.com จากนั้นป้อนข้อมูลการลงทะเบียนของคุณ"
			}]
		},
		DOMAIN_NAME_LIST: {
			TITLE: "รายชื่อ Domain Name",
			CONTENT: [{
				type: "paragraph",
				content: "ตารางแสดงชื่อ Dynamic DNS ที่จดทะเบียนไว้กับ TP-Link ID"
			},{
				type:"step",
				title: "การลงทะเบียนชื่อโดเมนใหม่",
				content: [
					"1. คลิกที่สมัครสมาชิก",
					"2. ใส่ชื่อโดเมน",
					"3. คลิกบันทึก"
					]
			}]
		},

		ADVANCED_ROUTING_STATIC_ROUTING: {
			TITLE: "การกำหนดเส้นทางด้วยตัวเอง",
			CONTENT: [{
				type: "paragraph",
				content: "การกำหนดเส้นทางด้วยตัวเองเราคือการใช้การกำหนดเส้นทางไว้ล่วงหน้าเพื่อเป็นข้อมูลเส้นทางให้เครือข่ายเพื่อไปยังโฮสอื่นๆ"
			},{
				type: "step",
				title: "การติดตั้งการกำหนดเส้นทางด้วยตัวเอง",
				content: [
					"1. คลิก Add",
					"2. Network Destination -ระบุ IP address ในรูปแบบจุดทศนิยมเพื่อกำหนดเส้นทางแบบคงที่สำหรับรายการนี้ ",
					"3. Subnet Mask -ระบุ subnet mask ในรูปแบบจุดทศนิยมเพื่อตรวจสอบส่วนหนึ่งของเครือข่ายและส่วนโฮสต์ของ IP address",
					"4. Default Gateway - ระบุ gateway IP address ในรูปแบบจุดทศนิยมเพื่อเชื่อมต่อเราท์เตอร์ไปยังเครือข่ายหรือโฮสต์",
					"5. Interface - ใส่ LAN ในรูปแบบ WAN เพื่อ ระบุ การกำหนดเส้นทางด้วยตัวเอง",
					"6. Description - ใส่ ในรูปแบบ Entry เพื่อ ระบุ การกำหนดเส้นทางด้วยตัวเอง",
					"7. เลือก Enable.",
					"8. คลิก OK"
				]
			},{
				type: "step",
				title: "การเปลี่ยนแปลงหรือลบผู้ใช้ที่มีอยู่แล้ว",
				content: "ในตารางให้คลิกที่ไอคอน Edit หรือไอคอนถังขยะที่สอดคล้องกับรายการที่คุณต้องการที่จะแก้ไขหรือลบ"
			}]
		},
		
		ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE: {
			TITLE: "ตาราง Routing",
			CONTENT: [{
				type: "paragraph",
				content: "ระบบตารางเส้นทางแสดงทุกเส้นทางที่ใช้อยู่ในปัจจุบัน."
			},{
				type: "paragraph",
				content: "คลิก Refresh เพื่ออัพเดทตารางเส้นทาง"
			}]
		},
		
		WIRELESS_REGION: {
			TITLE: "การตั้งค่า",
			CONTENT: [{
				type: "name",
				title: "ภูมิภาค",
				content: "เลือกประเทศจากเมนูแบบเลื่อนลง, ถ้าประเทศของคุณไม่มีในรายชื่อ,มันอาจจะเป็นเพราะ"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		WIRELESS_24G: {	
			TITLE: "ไวเลส 2.4GHz",
			CONTENT: [{
				type: "name",
				title: "เปิดใช้งานสัญญาณไวเลส",
				content: "เลือกนี้เพื่อเปิดการใช้งานย่านความถี่ 2.4 GHz"
			},{
				type: "name",
				title: "ชื่อเครือข่ายไวเลส (SSID)",
				content: "คุณสามารถออกจากค่าเริ่มต้นชื่อเครือข่าย (SSID) ที่มันเป็นอยู่ หรือระบุชื่อใหม่ (ไม่เกิน 32 ตัวอักขระ) ในฟิลด์นี้แล้วแต่กรณี"
			},{
				type: "name",
				title: "ซ่อน SSID",
				content: "เลือกช่องนี้ถ้าคุณต้องการซ่อน ชื่อเครือข่าย (SSID) 2.4GHz จากรายชื่อเครือข่ายไวไฟ"
			},{
				type: "name",
				title: "การรักษาความปลอดภัย",
				content: "เลือก 1 ตัวเลือกจากตัวเลือกความปลอดภัย",
				children: [{
					type: "name",
					title: "ไม่มีความปลอดภัย",
					content: "เลือกตัวเลือกนี้เพื่อปิดความปลอดภัย แนะนำ คุณให้คุณเปิดรักษาความปลอดภัยเครือข่ายไวเลสจากผู้ไม่ประสงค์ดีเข้าสู่เครือข่ายของคุณ"
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "เลือกตัวเลือกนี้เพื่อเปิดใช้งานวิธีการตรวจสอบมาตรฐานการเข้ารหัสโหมดที่ Pre-shared Key (PSK) ที่เรียกว่ารหัสผ่าน แนะนำให้ใช้ตัวเลือกนี้หากเลือกกำหนดค่าดังต่อไปนี้",
					children: [{
						type: "name",
						title: "เวอร์ชั่น",
						content: "เลือกเวอร์ชั่นการรักษาความปลอดภัยสำหรับเครือข่ายไวเลสของคุณ",
						children: [{
							type: "name",
							title: "อัตโนมัต",
							content: "ตัวเลือกนี้รองการทำงานของ WPA (Wi-Fi Protected Access) พื้นฐานหลากหลายรูปแบบ เช่น WPA และ WPA2"
						},{
							type: "name",
							title: "WPA-PSK",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ TKIP  ที่มีระดับการรักษาความปลอดภัยสูง"
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ AES ที่มีระดับการรักษาความปลอดภัยดีกว่า WPA-PSK และเป็นที่แนะนำ"
						}]
					},{
						type: "name",
						title: "b. การเข้ารหัส",
						content: "เลือกชนิดของการเข้ารหัส: TKIP (Temporal Key Integrity Protocol), AES (Advance Encryption Standard) หรือ Auto (สำหรับทั้ง TKIP และ AES) ไม่แนะนำให้ใช้ TKIP encryption ถ้าการทำงานของเราท์เตอร์อยู่ในโหมด 802.11n,เพราะว่า TKIP ไม่รองรับการใช้ 802.11n ถ้า TKIP ถูกเลือก, WPS จะไม่ทำงาน"
					},{
						type: "name",
						title: "รหัสผ่าน",
						content: "ใส่รหัสผ่านของเครือข่ายไวเลสระหว่าง 8 และ 63 ASCII ตัวอักขระ หรือระหว่าง 8 และ 64 เลขฐานสิบหก ลงในช่องว่าง"
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Enterprise",
					content: "เลือกตัวเลือกนี้เพื่อเปิดการยืนยันตัวตนที่ดียิ่งขึ้น โดยใช้วิธีเซิร์ฟเวอร์ RADIUS (Remote Authentication Dial In User Service)  ถ้าเลือก, WPS จะไม่สามารถใช้งานได้",
					children: [{
						type: "name",
						title: "เวอร์ชั่น",
						content: "เลือกเวอร์ชั่นการรักษาความปลอดภัยสำหรับเครือข่ายไวเลสของคุณ",
						children:[{
							type: "name",
							title: "อัตโนมัต",
							content: "ตัวเลือกนี้รองการทำงานของ WPA (Wi-Fi Protected Access) พื้นฐานหลากหลายรูปแบบ เช่น WPA และ WPA2"
						},{
							type: "name",
							title: "WPA",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ TKIP  ที่มีระดับการรักษาความปลอดภัยสูง"
						},{
							type: "name",
							title: "WPA2",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ AES ที่มีระดับการรักษาความปลอดภัยดีกว่า WPA-PSK และเป็นที่แนะนำ"
						}]
					},{
						type: "name",
						title: "b. การเข้ารหัส",
						content: "เลือกชนิดของการเข้ารหัส: TKIP (Temporal Key Integrity Protocol), AES (Advance Encryption Standard) หรือ Auto (สำหรับทั้ง TKIP และ AES) ไม่แนะนำให้ใช้ TKIP encryption ถ้าการทำงานของเราท์เตอร์อยู่ในโหมด 802.11n,เพราะว่า TKIP ไม่รองรับการใช้ 802.11n ถ้า TKIP ถูกเลือก, WPS จะไม่ทำงาน"
					},{
						type: "name",
						title: "c. RADIUS Server IP",
						content: "ใส่ IP Address ของเซิร์ฟเวอร์ RADIUS"
					},{
						type: "name",
						title: "d. RADIUS Port",
						content: "ใส่ หมายเลขพอร์ตของเซิร์ฟเวอร์ RADIUS"
					},{
						type: "name",
						title: "e. RADIUS Password",
						content: "ใส่ รหัสของเซิร์ฟเวอร์ RADIUS"
					}]
				},{
					type: "name",
					title: "WEP",
					content: "เลือกตัวเลือกนี้เพื่อเปิดใช้งานกระบวนการ authenticatio แบบพื้นฐานหากอุปกรณ์เครื่องลูกใดๆ สามารถเข้าถึงเครือข่ายไวเลสได้เพียงแค่WEP (Wired Equivalent Privacy) เท่านั้น",
					children: [{
						type: "name",
						title: "รูปแบบ",
						content: "เลือกชนิดการยืนยันตัวตนสำหรับเครือข่ายของคุณ ค่าเริ่มต้นคือ Auto, ซึ่งจะทำการเลือก Open System หรือ Shared keyโดยอัตโนมัติ โดยดูจากความสามารถและความต้องการเข้าสู่ระบบของผู้ใช้เครือข่ายไวเลส"
					},{
						type: "name",
						title: "b. WEP Key Format",
						content: "ทั้งรูปแบบ ASCII หรือรูปแบบเลขฐานสิบหกถูก รูปแบบ ASCII เป็นการรวมกันของตัวอักขระและตัวเลข รูปแบบฐานสิบหกเป็นการวมกันของตัวเลข (0-9) และตัวอักขระ (A-F,a-f)"
					},{
						type: "name",
						title: "c. Key Type -เลือกความยาวของรหัส WEP.",
						content: "เลือกความยาวของรหัส WEP",
						children: [{
							type: "name",
							title: "64 Bit",
							content: "อนุญาตให้ใส่เลขฐานสิบหกได้ 10 ตัว (0-9,A-F,a-f) หรือ 5 ASCII ตัว ลงในช่อง WEP Value Field"
						},{
							type: "name",
							title: "128 Bit",
							content: "อนุญาตให้ใส่เลขฐานสิบหกได้ 26 ตัว (0-9,A-F,a-f) หรือ 13 ASCII ตัว ลงในช่อง WEP Value Field"
						}]
					},{
						type: "name",
						title: "d. Key Value",
						content: "ป้อนคีย์ WEP ลงในฟิลด์เกี่ยวข้อง"
					}]
				}]
			},{
				type: "name",
				title: "โหมด",
				content: "เลือกโหมดการส่งสัญญาณแบบรวม"
			},{
				type: "name",
				title: "การเข้าสู่อุปกรณ์",
				content: "เลือกความกว้างของช่องสำหรับเครือข่ายไวเลส 2.4GHz"
			},{
				type: "name",
				title: "ช่องสัญญาณ",
				content: "เลือกช่องสัญญาณสำหรับย่านความถี่เครือข่ายไวเลส 2.4GHz มันจะแนะนำให้ออกจากช่องทางอัตโนมัติ, ถ้าคุณไม่ได้ประสบปัญหาการเชื่อมต่อไวเลสเป็นระยะๆ"
			},{
				type: "name",
				title: "กำลังส่งสัญญาณ",
				content: "เลือก High Middle หรือ Low เพื่อระบุข้อมูลกำลังส่งสัญญาณ,เริ่มต้นแนะนำให้ตั้งค่าเป็น High"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "ไวเลส 5GHz",
			CONTENT: [{
				type: "name",
				title: "เปิดใช้งานสัญญาณไวเลส",
				content: "เลือกนี้เพื่อเปิดการใช้งานย่านความถี่ 5GHz"
			},{
				type: "name",
				title: "ชื่อเครือข่ายไวเลส (SSID)",
				content: "คุณสามารถออกจากค่าเริ่มต้นชื่อเครือข่าย (SSID) ที่มันเป็นอยู่ หรือระบุชื่อใหม่ (ไม่เกิน 32 ตัวอักขระ) ในฟิลด์นี้เป็นแบบ case-sensitive"
			},{
				type: "name",
				title: "ซ่อน SSID",
				content: "เลือกนี้ถ้าคุณต้องการซ่อน ชื่อเครือข่าย (SSID) 5GHz  จากรายชื่อเครือข่ายไวไฟ"
			},{
				type: "name",
				title: "การรักษาความปลอดภัย",
				content: "เลือก 1 ตัวเลือกจากตัวเลือกความปลอดภัย",
				children: [{
					type: "name",
					title: "ไม่มีความปลอดภัย",
					content: "เลือกตัวเลือกนี้เพื่อปิดความปลอดภัย แนะนำ คุณให้คุณเปิดรักษาความปลอดภัยเครือข่ายไวเลสจากผู้ไม่ประสงค์ดีเข้าสู่เครือข่ายของคุณ"
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "เลือกตัวเลือกนี้เพื่อเปิดใช้งานวิธีการตรวจสอบมาตรฐานการเข้ารหัสโหมดที่ Pre-shared Key (PSK) ที่เรียกว่ารหัสผ่าน แนะนำให้ใช้ตัวเลือกนี้หากเลือกกำหนดค่าดังต่อไปนี้",
					children: [{
						type: "name",
						title: "เวอร์ชั่น",
						content: "เลือกเวอร์ชั่นการรักษาความปลอดภัยสำหรับเครือข่ายไวเลสของคุณ",
						children: [{
							type: "name",
							title: "อัตโนมัต",
							content: "ตัวเลือกนี้รองการทำงานของ WPA (Wi-Fi Protected Access) พื้นฐานหลากหลายรูปแบบ เช่น WPA และ WPA2"
						},{
							type: "name",
							title: "WPA-PSK",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ TKIP  ที่มีระดับการรักษาความปลอดภัยสูง"
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ AES ที่มีระดับการรักษาความปลอดภัยดีกว่า WPA-PSK และเป็นที่แนะนำ"
						}]
					},{
						type: "name",
						title: "b. การเข้ารหัส",
						content: "เลือกชนิดของการเข้ารหัส: TKIP (Temporal Key Integrity Protocol), AES (Advance Encryption Standard) หรือ Auto (สำหรับทั้ง TKIP และ AES) ไม่แนะนำให้ใช้ TKIP encryption ถ้าการทำงานของเราท์เตอร์อยู่ในโหมด 802.11n เพราะว่า TKIP ไม่รองรับการใช้ 802.11n ถ้า TKIP ถูกเลือก, WPS จะไม่ทำงาน"
					},{
						type: "name",
						title: "รหัสผ่าน",
						content: "ใส่รหัสผ่านของเครือข่ายไวเลสระหว่าง 8 และ 63 ASCII ตัวอักขระ หรือระหว่าง 8 และ 64 เลขฐานสิบหก ลงในช่องว่าง"
					}]
				},{
					type: "name",
					title: "WPA/WPA2-Enterprise",
					content: "เลือกตัวเลือกนี้เพื่อเปิดการยืนยันตัวตนที่ดียิ่งขึ้น โดยใช้วิธีเซิร์ฟเวอร์ RADIUS (Remote Authentication Dial In User Service)  ถ้าเลือก, WPS จะไม่สามารถใช้งานได้",
					children: [{
						type: "name",
						title: "เวอร์ชั่น",
						content: "เลือกเวอร์ชั่นการรักษาความปลอดภัยสำหรับเครือข่ายไวเลสของคุณ",
						children: [{
							type: "name",
							title: "อัตโนมัต",
							content: "ตัวเลือกนี้รองการทำงานของ WPA (Wi-Fi Protected Access) พื้นฐานหลากหลายรูปแบบ เช่น WPA และ WPA2"
						},{
							type: "name",
							title: "WPA",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ TKIP  ที่มีระดับการรักษาความปลอดภัยสูง"
						},{
							type: "name",
							title: "WPA2",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ AES ที่มีระดับการรักษาความปลอดภัยดีกว่า WPA-PSK และเป็นที่แนะนำ"
						}]
					},{
						type: "name",
						title: "b. การเข้ารหัส",
						content: "เลือกชนิดของการเข้ารหัส: TKIP (Temporal Key Integrity Protocol), AES (Advance Encryption Standard) หรือ Auto (สำหรับทั้ง TKIP และ AES) ไม่แนะนำให้ใช้ TKIP encryption ถ้าการทำงานของเราท์เตอร์อยู่ในโหมด 802.11n,เพราะว่า TKIP ไม่รองรับการใช้ 802.11n ถ้า TKIP ถูกเลือก, WPS จะไม่ทำงาน"
					},{
						type: "name",
						title: "c. RADIUS Server IP",
						content: "ใส่ IP Address ของเซิร์ฟเวอร์ RADIUS"
					},{
						type: "name",
						title: "d. RADIUS Port",
						content: "ใส่ หมายเลขพอร์ตของเซิร์ฟเวอร์ RADIUS"
					},{
						type: "name",
						title: "e. RADIUS Password",
						content: "ใส่ รหัสของเซิร์ฟเวอร์ RADIUS"
					}]
				},{
					type: "name",
					title: "WEP",
					content: "เลือกตัวเลือกนี้เพื่อเปิดใช้งานกระบวนการ authenticatio แบบพื้นฐานหากอุปกรณ์เครื่องลูกใดๆ สามารถเข้าถึงเครือข่ายไวเลสได้เพียงแค่WEP (Wired Equivalent Privacy) เท่านั้น",
					children: [{
						type: "name",
						title: "รูปแบบ",
						content: "เลือกชนิดการยืนยันตัวตนสำหรับเครือข่ายของคุณ ค่าเริ่มต้นคือ Auto, ซึ่งจะทำการเลือก Open System หรือ Shared keyโดยอัตโนมัติ โดยดูจากความสามารถและความต้องการเข้าสู่ระบบของผู้ใช้เครือข่ายไวเลส"
					},{
						type: "name",
						title: "b. WEP Key Format",
						content: "ทั้งรูปแบบ ASCII หรือรูปแบบเลขฐานสิบหกถูก รูปแบบ ASCII เป็นการรวมกันของตัวอักขระและตัวเลข รูปแบบฐานสิบหกเป็นการวมกันของตัวเลข (0-9) และตัวอักขระ (A-F,a-f)"
					},{
						type: "name",
						title: "c. Key Type -เลือกความยาวของรหัส WEP.",
						content: "เลือกความยาวของรหัส WEP",
						children:[{
							type: "name",
							title: "64 Bit",
							content: "อนุญาตให้ใส่เลขฐานสิบหกได้ 10 ตัว (0-9,A-F,a-f) หรือ 5 ASCII ตัว ลงในช่อง WEP Value Field"
						},{
							type: "name",
							title: "128 Bit",
							content: "อนุญาตให้ใส่เลขฐานสิบหกได้ 26 ตัว (0-9,A-F,a-f) หรือ 13 ASCII ตัว ลงในช่อง WEP Value Field"
						}]
					},{
						type: "name",
						title: "d. Key Value",
						content: "ป้อนคีย์ WEP ลงในฟิลด์เกี่ยวข้อง"
					}]
				}]
			},{
				type: "name",
				title: "โหมด",
				content: "เลือกโหมดการส่งสัญญาณแบบรวม"
			},{
				type: "name",
				title: "การเข้าสู่อุปกรณ์",
				content: "เลือกความกว้างของช่องสัญญาณ (แบนด์วิธ) สำหรับเครือข่ายไวเลส 5 GHz"
			},{
				type: "name",
				title: "ช่องสัญญาณ",
				content: "เลือกช่องสัญญาณสำหรับย่านความถี่เครือข่ายไวเลส 5GHz มันจะแนะนำให้ออกจากช่องทางอัตโนมัติ, ถ้าคุณไม่มีประบการณ์ในการตั้งค่าการเชื่อมต่อไวเลสมาก่อน"
			},{
				type: "name",
				title: "กำลังส่งสัญญาณ",
				content: "เลือก High Middle หรือ Low เพื่อระบุข้อมูลกำลังส่งสัญญาณ,เริ่มต้นแนะนำให้ตั้งค่าเป็น High"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		WPS: {	
			TITLE: "Router's PIN",
			CONTENT: [{
				type: "paragraph",
				content: "อุปกรณ์อื่นสามารถเชื่อมต่อกับเราท์เตอร์โดย WPS กับ PIN ของเราท์เตอร์"
			},{
				type: "name",
				title: "Router's PIN",
				content: "เปิดอนุญาตให้อุปกรณ์เครือข่ายไวเลสเชื่อมต่อกับเราท์เตอร์โดยใช้ PIN ของเราท์เตอร์ (Personal Identification Number)."
			},{
				type: "name",
				title: "PIN",
				content: "แสดง PIN ของเราท์เตอร์ ค่าเริ่มต้น PIN สามารถค้นหาได้จากสติ๊กเกอร์ที่ติดอยู่ที่เราท์เตอร์ คลิก Generate เพื่อสุ่ม PIN ใหม่ หรือคลิก Default to restore the current PIN เพื่อคืนค่า PIN เป็นค่าโรงงาน"
			}]
		},

		WPS_WIZARD: {
			TITLE: "WPS Wizard",
			CONTENT:[{
				type: "name",
				title: "กดปุ่ม (แนะนำ)",
				content: "เลือกการติดตั้งนี้เพื่อเปิดระบบ WPS เพื่อให้ง่ายต่อการเชื่อมกับอุปกรณ์เครือข่ายไวเลส โดยใช้ปุ่ม WPS หรือเสมือนเป็นการกดปุ่ม Connect"
			},{
				type: "name",
				title: "PIN",
				content: "เลือกการติดตั้งนี้เพื่อเพิ่มอุปกรณ์ด้วยตัวเองโดยใส่ WPS PIN ของอุปกรณ์เครือข่ายไวเลสลงในช่องว่างแล้วกด Connect"
			}]
		},

		WIRELESS_STATISTICS: {	
			TITLE: "สถานีไวเลสออนไลน์",
			CONTENT: [{
				type: "name",
				title: "จำนวนผู้ใช้",
				content: "แสดงจำนวนของผู้ใช้เครือข่ายไวเลส"
			},{
				type: "name",
				title: "MAC Address",
				content: "แสดง MAC Address ของผู้ใช้เครือข่ายไวเลส"
			},{
				type: "name",
				title: "รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
				content: "แสดงย่านความถี่เครือข่ายไวเลส (2.4GHz หรือ 5GHz) ของผู้ใช้เครือข่ายไวเลส"
			},{
				type: "name",
				title: "การรักษาความปลอดภัย",
				content: "แสดงประเภทการรักษาความปลอดภัยของผู้ใช้เครือข่ายไวเลส"
			},{
				type: "name",
				title: "รับ Packets",
				content: "แสดงจำนวนข้อมูลที่รับของผู้ใช้เครือข่ายไวเลส"
			},{
				type: "name",
				title: "ส่ง Packets",
				content: "แสดงจำนวนข้อมูลที่ส่งของผู้ใช้เครือข่ายไวเลส"
			},{
				type: "paragraph",
				content: "คลิก Refresh เพื่ออัพเดทข้อมูลในหน้านี้"
			}]
		},
		
		GUEST_NETWORK_SETTINGS:{
			TITLE: "การตั้งค่า",
			CONTENT: [{
				type: "paragraph",
				content: "อนุญาตให้คุณแยกเครือข่ายด้วยการแยกเครือข่ายไวเลส (SSID)และรหัสผ่าน บุคคลภายนอกสามารถเข้าสู่เครือข่ายไวเลสของคุณได้"
			},{
				type: "name",
				title: "อนุญาตให้อุปกรณ์เครือข่ายไวเลสมองเห็น",
				content: "เลือกช่องนี้เพื่ออนุญาตให้อุปกรณ์เครือข่ายไวเลสมองเห็นเครือข่ายสำหรับคนภายนอก"
			},{
				type: "name",
				title: "อนุญาตให้ Guest Network เข้าถึงเครือข่ายภายใน",
				content: "เลือกนี้เพื่ออนุญาตให้อุปกรณ์เครือข่ายไวเลสบนเครือข่ายสำหรับคนภายนอกเข้าสู่เครือข่ายภายในเพื่อแบ่งปันข้อมูลหรือปริ๊นเตอร์"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		GUEST_NETWORK_WIRELESS:{	
			TITLE: "การเชื่อมต่อไวเลส 2.4GHz/5GHz",
			CONTENT: [{
				type: "name",
				title: "เปิด Guest Network",
				content: "เลือกช่องนี้เพื่อเปิดการใช้งานเครือข่ายสำหรับคนภายนอก"
			},{
				type: "name",
				title: "ชื่อเครือข่ายไวเลส (SSID)",
				content: "คุณสามารถปล่อยให้ใช้ชื่อเดิมของมันเป็นชื่อเริ่มต้นได้ หรือใส่ชื่อใหม่ (สามารถใส่ได้ 32 ตัวอักขระ)"
			},{
				type: "name",
				title: "ซ่อน SSID",
				content: "เลือกนี้ถ้าคุณต้องการซ่อนเครือข่ายสำหรับคนภายนอกจากรายชื่อเครือข่าย Wi-Fi"
			},{
				type: "name",
				title: "การรักษาความปลอดภัย",
				content: "เมื่อคุณไม่ได้เลือกที่จะปรับปรุงรหัสผ่าน เลือกหนึ่งในตัวเลือกการรักษาความปลอดภัยดังต่อไปนี้",
				children: [{
					type: "name",
					title: "ไม่มีความปลอดภัย",
					content: "เลือกตัวเลือกนี้เพื่อปิดการรักษาความปลอดภัย แนะนำ คุณให้คุณเปิดการรักษาความปลอดภัยเครือข่ายไวเลสจากผู้ไม่ประสงค์ดีเข้าสู่เครือข่ายของคุณ"
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "เลือกตัวเลือกนี้เพื่อเปิดพื้นฐานการยืนยันตัวตน วิธีนี้อ้างอิงบน Pre-Shared Key (PSK) หรือที่เรียกกันว่า พาสเฟส ตัวเลือกนี้เป็นค่าเริ่มต้นและค่าที่แนะนำ ถ้าเลือก การตั้งค่าดังต่อไปนี้",
					children: [{
						type: "name",
						title: "เวอร์ชั่น",
						content: "เลือกเวอร์ชั่นการรักษาความปลอดภัยสำหรับเครือข่ายไวเลสของคุณ",
						children: [{
							type: "name",
							title: "อัตโนมัต",
							content: "ตัวเลือกนี้รองการทำงานของ WPA (Wi-Fi Protected Access) พื้นฐานหลากหลายรูปแบบ เช่น WPA และ WPA2"
						},{
							type: "name",
							title: "WPA-PSK",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ TKIP  ที่มีระดับการรักษาความปลอดภัยสูง"
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "ตัวเลือกนี้รองรับการเข้ารหัสแบบ AES ที่มีระดับการรักษาความปลอดภัยดีกว่า WPA-PSK และเป็นที่แนะนำ"
						}]
					},{
						type: "name",
						title: "b. การเข้ารหัส",
						content: "เลือกชนิดของการเข้ารหัส: TKIP (Temporal Key Integrity Protocol), AES (Advance Encryption Standard) หรือ Auto (สำหรับทั้ง TKIP และ AES) ไม่แนะนำให้ใช้ TKIP encryption ถ้าการทำงานของเราท์เตอร์อยู่ในโหมด 802.11n เพราะว่า TKIP ไม่รองรับการใช้ 802.11n ถ้า TKIP ถูกเลือก, WPS จะไม่ทำงาน"
					}]
			}]},{
				type: "name",
				title: "รหัสผ่าน",
				content: "ให้ใช้รหัสผ่านที่สร้างแบบสุ่มหรือสร้างรหัสผ่านระหว่าง 8 ถึง 63 ตัวอักขระ ASCII หรือระหว่าง 8 และ 64 อักขระเลขฐานสิบหก (0-9, a-f, A-F)."
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},

		NAT: {
			TITLE: "Application Layer Gateway(ALG)",
			CONTENT: [{
				type: "paragraph",
				content: "ALG อนุญาตให้ Network Address Translation (NAT) ระบุเส้นทางเพื่อเข้าไปสู่เกตเวย์เพื่อให้รองรับที่อยู่และแปลงพอร์ตสำหรับแอพพริเคชันเลเยอร์ ในส่วนของ \"คอนโทรล/ดาต้า\" โปรโตคอล:FTP, TFTP, H323 และอื่นๆ การเปิดใช้งาน ALG เป็นสิ่งที่แนะนำให้ดำเนินการ"
			},{
				type: "name",
				title: "Enable FTP ALG",
				content: "ถ้าเลือก, มันจะอนุญาต FTP ผู้ใช้ส่งข้อมูลไปยังเซิร์ฟเวอร์ผ่าน NAT"
			},{
				type: "name",
				title: "Enable TFTP ALG",
				content: "ถ้าเลือก, มันจะอนุญาต TFTP ผู้ใช้ส่งข้อมูลไปยังเซิร์ฟเวอร์ผ่าน NAT"
			},{
				type: "name",
				title: "Enable H323 ALG",
				content: "ถ้าเลือก, มันจะอนุญาต Microsoft NetMeeting ผู้ใช้ติดต่อกันโดยผ่าน NAT"
			},{
				type: "name",
				title: "Enable RTSP ALG",
				content: "ถ้าเลือก, มันจะอนุญาต ผู้ใช้ Media Player ติดต่อกันด้วยสตรีมมิ่งมีเดียร์เซิร์ฟเวอร์ผ่าน NAT"
			},{
				type: "name",
				title: "Enable PPTP Passthrough",
				content: "ถ้าเลือก, มันจะอนุญาต Point-to-Point Sessions เพื่อเป็นช่องทางผ่านไปยังเครือข่าย IP และผ่านไปยังเราท์เตอร์"
			},{
				type: "name",
				title: "Enable L2TP Passthrough",
				content: "ถ้าเลือก, มันจะอนุญาต Layer 2 Point-to-Point Sessions เพื่อเป็นช่องทางผ่านไปยังเครือข่าย IP และผ่านไปยังเราท์เตอร์"
			},{
				type: "name",
				title: "Enable IPSec Passthrough",
				content: "ถ้าเลือก, มันจะอนุญาต IPSec (Internet Protocol Security)  เพื่อเป็นช่องทางผ่านไปยังเครือข่าย IP และผ่านไปยังเราท์เตอร์. IPSec ใช้ crytographic security เพื่อรับรองความเป็นส่วนตัวและการรักษาความปลอดภัยในการสื่อสารบน IP Network"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},


		VIRTUAL_SERVERS: {
			TITLE: "Virtual Servers",
			CONTENT: [{
				type: "paragraph",
				content: "เซิร์ฟเวอร์เสมือน ถูกใช้เพื่อติดตั้งการบริการภายนอกเครือข่ายของคุณ เซิร์ฟเวอร์เสมือนเป็นการระบุ External Port และทุกคำขอทั้งหมดไปยัง External Port จะถูกนำไปยังคอมพิวเตอร์ที่กำหนดไว้ ซึ่งต้องตั้งด้วยการกำหนดเส้นทางหรือการจอง IP Address"
			},{
				type: "name",
				title: "รายการบริการ",
				content: "แสดงชื่อของเซิร์ฟเวอร์เสมือน"
			},{
				type: "name",
				title: "External Port",
				content: "แสดงตัวเลขของพอร์ตหรือระยะของพอร์ตที่ใช้โดยเซิร์ฟเวอร์เสมือน"
			},{
				type: "name",
				title: "Internal IP",
				content: "แสดง IP Address ของคอมพิวพ์เตอร์ที่ใช้งานบริการแอพพลิเคชั่นนี้อยู่"
			},{
				type: "name",
				title: "Internal Port",
				content: "แสดงตัวเลขพอร์ตของคอมพิวพ์เตอร์ที่ใช้งานบริการแอพพลิเคชั่นนี้อยู่"
			},{
				type: "name",
				title: "Protocol",
				content: "แสดงโปรโตคอลที่ใช้สำหรับบริการแอพพลิเคชั่นนี้อยู่เช่น TCP,UDP หรือ ALL (ทุกโปรโตคอลที่รองรับโดยเราท์เตอร์)"
			},{
				type: "name",
				title: "สถานะ",
				content: "แสดงสถานะปัจจุบัน (เปิดใช้หรือปิดการใช้) ของ Rule ที่ระบุไว้"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "แสดงตัวเลือกเพื่อเปลี่ยนแปลงหรือลบ Rule ที่เกี่ยวข้อง"
			},{
				type: "step",
				title: "การตั้งค่ากฎเซิร์ฟเวอร์จำลอง",
				content: [
					"1. คลิก Add",
					"2. คลิก View Existing Services เพื่อเลือกแอพลิเคชั่นจากค่าที่มีอยู่ที่ดีที่สุดหมายเลขพอร์ตใน External Port และ Internal Port ถ้าบริการไม่มีในรายชื่อ,ใส่ External Port Number (เช่น 21) หรือระยะของพอร์ต (เช่น 21-25) ให้เว้นช่องที่Internal Port ถ้าเป็นพอร์ตเดียวกับ External Port หรือระบุ Port Number (เช่น 21) ถ้า External Port เป็น Single Port ใส่ IP Address ของคอมพิวเตอร์ในลงในช่อง Internal IP",
					"3. เลือก Protocol สำหรับบริการแอพลิเคชั่น TCP,UDP หรือ All จาก Protocol ในเมนูแบบแถบเลื่อน",
					"4. เลือก Enable",
					"5. คลิก OK"
				]
			},{
				type: "step",
				title: "การแก้ไขหรือลบเซิร์ฟเวอร์เสมือน",
				content: "ในตารางให้คลิกที่ไอคอนแก้ไขหรือไอคอนถังขยะที่สอดคล้องกับความต้องการที่จะปรับแต่งหรือลบ"
			},{
				type: "step",
				title: "การลบมากกว่า 1",
				content: "เลือก Rule ทั้งหมดที่คุณต้องการลบ,คลิก Delete บนตาราง."
			},{
				type: "note",
				title: "หมายเหตุ",
				content: "ถ้าอุปกรณ์ทั่วไปของคุณเป็นเครือข่ายแม่มากกว่า 1 ชนิดที่กำลังให้บริการอยู่, คุณต้องสร้าง Rule สำหรับแต่ละการบริการ"
			}]
		},

		PORT_TRIGGERING: {
			TITLE: "Port Triggering",
			CONTENT: [{
				type: "paragraph",
				content: "ถูกใช้เพื่อส่งข้อมูลบนพอร์ตเพื่อระบุเซิร์ฟเวอร์บนเครือข่าย."
			},{
				type: "name",
				title: "แอพพลิเคชั่น",
				content: "แสดงชื่อของแอพพลิเคชั่น"
			},{
				type: "name",
				title: "Triggering Port",
				content: "แสดงข้อมูลขาออกจากพอร์ตใช้เพื่อระบุกฎของการเชื่อมต่อขาออก"
			},{
				type: "name",
				title: "Trigger Protocol",
				content: "แสดงโปรโตคอลใช้เพื่อส่งผ่านพอร์ต TCP,UDP,หรือ ALL (ทุกโปรโตคอลรองรับโดยเราท์เตอร์)"
			},{
				type: "name",
				title: "External Port",
				content: "แสดงพอร์ตหรือช่วงของพอร์ตโดยระบบรีโมท ตอบสนองการใช้ 1 พอร์ตของพอร์ตทั้งหมดจะถูกส่งไปยัง PC ซึ่งส่งผ่าน Rule นี้. คุณสามารถใส่ได้มากกว่า 5 กล่มในแต่ละพอร์ต โดยทุกกลุ่มของพอร์ตต้องแยกด้วย \",\" (คอมมา) ยกตัวอย่างเช่น 2000-2038,2046,2050-2051,2085,3010-3030."
			},{
				type: "name",
				title: "External Protocol",
				content: "แสดงโปรโตคอลใช้สำหรับพอร์ตขาเข้า: TCP,UDP,หรือ ALL (ทุกโปรโตคอลรองรับโดยเราท์เตอร์)"
			},{
				type: "name",
				title: "สถานะ",
				content: "แสดงสถานะปัจจุบัน (เปิดใช้หรือปิดการใช้) ของ Rule ที่ระบุไว้"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "แสดงตัวเลือกเพื่อเปลี่ยนแปลงหรือลบ Rule ที่เกี่ยวข้อง"
			},{
				type: "step",
				title: "การติดตั้ง Port Triggering Rule.",
				content: [{
					type: "note",
					title: "หมายเหตุ",
					content: "แต่ละ Rule สามารถใช้ได้ 1 Host เท่านั้น."
				},
					"1. คลิก Add",
					"2. คลิก View Existing Applications เพื่อเลือกแอพลิเคชั่นจากค่าที่มีอยู่ที่ดีที่สุดโดยอัตโนมัติลงในช่องว่าง ถ้าคุณต้องการเพิ่มชื่อที่ไม่มีอยู่ในรายชื่อ,ใส่ Application,Triggering Port, Triggering Protocol, External Port และ External Protocol.",	
					"3. เลือก Enable",
					"4. คลิก OK"
				]
			},{
				type: "step",
				title: "การเปลี่ยนแปลงหรือลบ Port Triggering Rule",
				content: "ในตารางให้คลิกที่ไอคอนแก้ไขหรือไอคอนถังขยะที่สอดคล้องกับความต้องการที่จะปรับแต่งหรือลบ"
			},{
				type: "step",
				title: "การลบ Multiple Port Triggering Rule",
				content: "ในตารางเลือก Rule ทั้งหมด คุณต้องจะลบ, คลิก Delete ข้างบนตาราง."
			}]
		},

		DMZ: {
			TITLE: "DMZ",
			CONTENT: [{
				type: "paragraph",
				content: "DMZ (Demilitarized Zone) เป็นลักษณะของการอนุญาติให้โฮสทั่วไปเข้าสู่อินเทอร์เน็ต สำหรับกรณีพิเศษ,เช่นอินเทอร์เน็ตเกม หรือ วีดีโอคอนเฟอเร้น. เป็นพื้นฐาน, DMZ อนุญาตให้คอมพิวพ์เตอร์เครื่องนึงบนแลนเปิดทุกพอร์ต, คอมพิวเตอร์นี้จะต้องตั้งค่าด้วยการกำหนดเส้นทาง IP Address และปิดฟังชั่น DHCP"
			},{
				type: "step",
				title: "การระบุคอมพิวเตอร์หรือเซิร์ฟเวอร์เพื่อเป็น DMZ Server",
				content: [
					"1. คลิก Enable DMZ",
					"2. ในช่อง DMZ Host IP Address, ใส่ IP Address ของคอมพิวเตอร์เพื่อตั้งค่าเป็น DMZ Host.",
					"3. คลิกบันทึก"
				]
			}]
		},
		
		UPNP: {
			TITLE: "UPnP",
			CONTENT: [{
				type: "paragraph",
				content: "โดยทั่วไป, The Universal Plug-and-Play (UPnP) ถูกเปิดไว้เพื่อให้อุปกรณ์เช่น คอมพิวเตอร์และอุปกรณ์อินเทอร์เน็ต สามารถค้นหาและติดต่อกันได้บนเครือข่าย"
			},{
				type: "paragraph",
				content: "แสดงข้อมูลอุปกรณ์ UPnP"
			},{
				type: "name",
				title: "อธิบาย",
				content: "แสดงลักษณะแบบรวบรัดของโฮสทั่วไปทีต้องการเริ่มต้น UPnP"
			},{
				type: "name",
				title: "External Port",
				content: "แสดงพอร์ตขาออกที่ถูกเปิดโดนโฮสทั่วไป"
			},{
				type: "name",
				title: "Protocol",
				content: "แสดงชนิดโปรโตคอลเครือข่ายที่ถูกใช้ในโฮสทั่วไป"
			},{
				type: "name",
				title: "Internal IP Address -แสดง IP Address ของโฮสทั่วไป.",
				content: "แสดง IP Address ของ local host"
			},{
				type: "name",
				title: "Internal Port",
				content: "แสดงพอร์ตขาเข้าที่ถูกเปิดโดยโฮสทั่วไป."
			},{
				type: "paragraph",
				content: "คลิก Refresh เพื่ออัพเดทรายชื่อ UPnP Server"
			}]
		},
		
		DISK_SETTING: {	
			TITLE: "ตั้งค่าอุปกรณ์",
			CONTENT: [{
				type: "paragraph",
				content: "การตั้งค่าอุปกรณ์การแสดงผลให้สอดคล้องกับข้อมูลอุปกรณ์ USB ผ่าน USB Port"
			},{
				type: "name",
				title: "ค้นหา",
				content: "โดยทั่วไป เราท์เตอร์ตรวจพบอุปกรณ์ที่เข้ามาเชื่อมต่อใหม่โดยอัตโนมัติ ถ้าไม่,ให้คลิกที่ปุ่ม Scan เพื่อหาอุปกรณ์ที่มาเชื่อมต่อใหม่และ Refresh หน้าจอเพื่ออัพเดทข้อมูล"
			},{
				type: "name",
				title: "ปริมาณ",
				content: "แสดงปริมาณของ USB."
			},{
				type: "name",
				title: "ความจุ",
				content: "แสดงปริมาณความจุรวมของ USB"
			},{
				type: "name",
				title: "พื้นที่ว่าง",
				content: "แสดงพื้นว่างที่สามารถใช้ได้ในปัจจุบัน"
			},{
				type: "name",
				title: "ถอดด้วยความปลอดภัย",
				content: "คลิกปุ่มนี้เพื่อนำอุปกรณ์ออกจากการเชื่อมต่ออย่างปลอดภัยก่อนดึงอุปกรณ์ออกจากเราท์เตอร์"
			},{
				type: "paragraph",
				content: "กรุณาจำไว้ว่าปุ่ม Safely Remove จะปรากฎขึ้นต่อเมื่อ USB เชื่อมต่อกับเราท์เตอร์ นอกจากนี้คุณไม่สามารถ Safely Remove ได้ถ้าหาก USB มีการทำงานอยู่"
			},{
				type: "name",
				title: "ทำงาน",
				content: "ช่องนี้จะปรากฎขึ้นต่อเมื่อ USB เชื่อมต่อกับเราท์เตอร์ เลือกเปิดแบ่งปันไฟล์ของ USB"
			},{
				type: "step",
				title: "การตั้งค่าไฟล์เซิร์ฟเวอร์",
				content: [
				"1. เสียบอุปกรณ์ USB ลงใน USB Port ของเราท์เตอร์โดยใช้สาย USB",
				"2. ถ้ามีอุปกรณ์ USB ใหม่เข้ามาจะถูกตรวจพบอัตโนมัติโดยเราท์เตอร์และแสดงข้อมูลข้างล่าง Device Setting (การตั้งค่าอุปกรณ์). ถ้าไม่ , คลิก Scan (ค้นหา)",
				"3. เลือก Active เพื่อเปิดการใช้งานร่วมกัน"
				]
			}]
		},
		
		FOLDER_SHARE_ACCOUNT: {	
			TITLE: "บัญชีที่ใช้ในการแชร์",
			CONTENT: [{
				type: "name",
				title: "บัญชี",
				content: "คุณสามารถเลือก Use Default Account เพื่อล็อกอินเข้าสู่การใช้งานร่วมกันไฟล์และโฟลเดอร์หรือ Use New Account เพื่อสร้างบัญชีผู้ใช้ใหม่"
			},{
				type: "name",
				title: "ชื่อผู้ใช้/รหัสผ่าน",
				content: "ใส่ตัวอักขระหรือเครื่องหมายได้สูงสุด 15 ตัวอักขระ ชื่อผู้ใช้ต้องเริ่มด้วยตัวอักขระ (case-sensitive) ตัวพิมใหญ่ ตัวพิมเล็ก."
			},{
				type: "name",
				title: "ยืนยันรหัสผ่าน",
				content: "ใส่รหัสผู้ใช้อีกครั้งเพื่อยืนยัน (case-sensitive) ตัวพิมใหญ่ ตัวพิมเล็ก."
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		FOLDER_SHARE_SETTINGS: {
			TITLE: "ตั้งค่าการแชร์",
			CONTENT: [{
				type: "name",
				title: "ชื่อเครือข่าย/Media Server",
				content: "แสดงชื่อที่ถูกใช้เพื่อเข้าสู่การเชื่อมต่ออุปกรณ์ USB."
			},{
				type: "name",
				title: "เปิดใช้งาน",
				content: "เลือกเพื่อเปิดใช้วิธีการเข้าถึง."
			},{
				type: "name",
				title: "วิธีเข้าถึง",
				content: "มี 3 วิธีการเพื่ออนุญาตให้เข้าถึงอุปกรณ์ USB คุณสามารถเลือกได้มากกว่า 1 วิธีการโดยเลือกช่องที่เกี่ยวข้อง",
				children: [{
					type: "name",
					title: "เครือข่ายที่อยู่ใกล้เคียง",
					content: "หากเปิดใช้งาน ผู้ใช้ในเครือข่ายของคุณสามารถเข้าถึงอุปกรณ์จัดเก็บข้อมูล USB ที่ใช้กำหนด IP address  (ตัวอย่าง \\\\192.168.0.1)"
				},{
					type: "name",
					title: "FTP",
					content: "ถ้าอนุญาต,ผู้ใช้บนเครือข่ายสามารถเข้าสู่ USB โดยใช้ IP Address. ตาม FTP Server's Port Number (ตัวอย่าง ftp://192.168.0.1:21) วิธีนี้ถูกเปิดโดยใช้เป็นค่าเริ่มต้น"
				},{
					type: "name",
					title: "FTP (ผ่านอินเตอร์เน็ต)",
					content: "ถ้าอนุญาต,ผู้ใช้สามารถรีโมทเข้าสู่อุปกรณ์ USB ผ่าน FTP บนอินเทอร์เน็ต รูปแบบนี้รองรับการดาวนืโหลดและอัพโหลดไฟล์ การเปลี่ยนเลขพอร์ตของเซิร์ฟเวอร์ FTP ,ให้ใส่เลขพอร์ต และคลิก Save เพื่อนำไปใช้งาน"
				}]
			},{
				type: "name",
				title: "ลิงค์",
				content: "แสดงที่อยู่ที่ใช้ในการเข้าถึงการใช้งานร่วมกันอุปกรณ์ USB"
			},{
				type: "name",
				title: "พอร์ต",
				content: "แสดงหมายเลขพอร์ตของเซิร์ฟเวอร์ FTP ใช้ค่าเริ่มต้น 21 หรือค่าระหว่าง 1024 และ 65535"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		FOLDER_SHARE_FOLDERS: {
			TITLE: "การแชร์โฟลเดอร์",
			CONTENT: [{
				type: "name",
				title: "แชร์ทั้งหมด",
				content: "เปิดเพื่อใช้ไฟล์และโฟลเดอร์ทั้งหมดร่วกันหรือปิดการใช้งานร่วมกันเพื่อแบ่งบันโฟลเดอร์ที่เลือกไว้"
			},{
				type: "name",
				title: "เปิดการแสดงตัวตน",
				content: "ขอแนะนำให้เปิดระบบยืนยันตัวเพื่อต้องการให้ผู้ใช้เข้าถึงไฟล์ที่แบ่งบันโดยใช้ ชื่อผู้ใช้และรหัสผ่าน"
			},{
				type: "name",
				title: "ชื่อโฟลเดอร์",
				content: "แสดงชื่อโฟลเดอร์ที่ใช้งานร่วมกัน"
			},{
				type: "name",
				title: "ที่อยู่ของโฟลเดอร์",
				content: "แสดงเส้นทางของโฟลเดอร์ที่ใช้งานร่วมกัน"
			},{
				type: "name",
				title: "แบ่งปันสื่อ",
				content: "บ่งบอกว่าอนุญาตให้ใช้งานร่วมกันของไฟล์สื่อหรือไม่"
			},{
				type: "name",
				title: "ชื่อ",
				content: "แสดงชื่อของไฟล์ที่ใช้งานร่วมกัน"
			},{
				type: "name",
				title: "สถานะ",
				content: "แสดงสถานะของโฟลเดอร์ที่ใช้ร่วมกันโดยไฟแสดงสถานะ"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "แสดงพื้นว่างที่สามารถใช้ได้ในปัจจุบัน"
			},{
				type: "name",
				title: "เลือก",
				content: "คลิกเพื่อค้นหาโฟลเดอร์"
			},{
				type: "name",
				title: "อนุญาตให้ Guest Network เข้าถึง",
				content: "เลือกเพื่ออนุญาตให้ผู้ใช้บนเครือข่ายสำหรับบุคคลภายนอกเข้าสู่ระบบการใช้งานร่วมกัน"
			},{
				type: "name",
				title: "เปิดการแสดงตัวตน",
				content: "เลือกเพื่อให้ผู้ใช้เข้าสู่การใช้งานร่วมกันของโฟลเดอร์ด้วย ชื่อผู้ใช้ และ รหัสผู้ใช้"
			},{
				type: "name",
				title: "เปิด Write Access",
				content: "เลือกเพื่ออนุญาตให้ผู้ใช้เปลี่ยนแปลงเนื้อหาโฟลเดอร์"
			},{
				type: "name",
				title: "เปิด Media Sharing",
				content: "เลือกเพื่อเปิดให้ใช้การใช้งานร่วมกันของสื่อ"
			},{
				type: "name",
				title:"รีเฟรช",
				content: "คลิกเพื่ออัพเดทรายการโฟลเดอร์"
			}]
		},
		
		PRINT_SERVER: {	
			TITLE: "ปรินเตอร์เซิร์ฟเวอร์",
			CONTENT: [{
				type: "name",
				title:"ปรินเตอร์เซิร์ฟเวอร์",
				content: "สลับเพื่อเปิดใช้งานฟังก์ชั่นปริ้นเซิร์ฟเวอร์"
			},{
				type: "name",
				title:"ชื่อปรินเตอร์",
				content: "แสดงชื่อของปรินเตอร์ที่เชื่อมต่อกับเราท์เตอร์"
			}]
		},
		
		PARENTAL_CONTROL: {	
			TITLE: "Parental Control",
			CONTENT: [{
				type: "paragraph",
				content: "ด้วยระบบควบคุมโดยผู้ปกครอง คุณสามารถป้องกันเว็บไซต์ที่ไม่เหมาะสมหรือเป็นอันตราย โดยจำกัดการเข้าถึงในบางช่วงเวลา (เช่น ใช้ Facebook หรือ Youtube ในระหว่างที่ทำการบ้าน) และในขณะเดียวกันสามารถป้องกันอุปกรณ์จากการโจมตีจากมัลแวร์โดยผ่านจุดควบคุมศูนย์กลาง"
			},{
				type: "name",
				title: "Parental Control",
				content: "สลับเพื่อเปิดใช้งานคุณสมบัติการควบคุมโดยผู้ปกครอง"
			}]
		},
		
		PARENTAL_CONTROL_DEVICES: {
			TITLE: "อุปกรณ์ที่อยู่ภายใต้การควบคุมโดยผู้ปกครอง",
			CONTENT: [{
				type: "name",
				title: "ชื่ออุปกรณ์",
				content: "แสดงชื่ออุปกรณ์ที่เชื่อมต่อในปัจจุบันที่อยู่ภายใต้ระบบควบคุมโดยผู้ปกครอง"
			},{
				type: "name",
				title: "MAC Address",
				content: "แสดง MAC Address ของอุปกรณ์ที่เชื่อมต่อทั้งหมดภายใต้ระบบควบคุมโดยผู้ปกครอง"
			},{
				type: "name",
				title: "เวลาการเข้าสู่อินเตอร์เน็ต",
				content: "แสดงการจำกัดช่วงเวลาในการเข้าถึง เวลาที่กำหนดจะมีผลขึ้นอยู่กับเวลาของเราเตอร์ซึ่งสามารถตั้งค่าได้ใน \"เครื่องมือระบบ-> การตั้งค่าเวลา\""
			},{
				type: "name",
				title: "บรรยาย",
				content: "แสดงคำอธิบายสั้นๆ ของอุปกรณ์ที่เชื่อมต่อ"
			},{
				type: "name",
				title: "สถานะ",
				content: "แสดงสถานะปัจจุบัน (enabled or disabled) ของ Parental Controls ของอุปกรณ์ที่เกี่ยวข้อง"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "แสดงตัวเลือกเพื่อ Modify หรือ Delete ผู้ใช้ให้สอดคล้องกัน"
			},{
				type: "step",
				title: "หากต้องการจำกัดอุปกรณ์ใหม่",
				content: [
					"1. คลิก Add",
					"2. คลิก View Existing Devices และเลือกอุปกร์ที่เชื่อมต่อในปัจจุบันจาก  Access Devices List หรือใส่ Device Name และ MAC Address เพื่อเพิ่มอุปกรณ์ที่ไม่ได้เชื่อมต่ออยู่",
					"3.คลิกไอคอน Internet Access Time เพื่อระบุช่วงเวลาในการเข้าสู่อินเทอร์เน็ต",
					"4. ใส่รายละเอียดในช่อง  Description (ถ้าต้องการ)",
					"5. เลือก Enable",
					"6. คลิก OK"
				]
			},{
				type: "paragraph",
				content: "การแก้ไขหรือลบรายการควบคุมโดยผู้ปกครอง , เพียงแค่คลิกที่ไอคอนแก้ไขเพื่อแก้ไขข้อมูล หรือ ไอคอนถังขยะเพื่อลบรายการที่เกี่ยวข้อง"
			},{
				type: "paragraph",
				content: "ในการลบหลายรายการ ให้เลือกทั้งหมดแล้วคลิก  Delete บนตาราง"
			}]
		},
		
		PARENTAL_CONTROL_RESTRICTION: {
			TITLE: "ข้อจำกัดเนื้อหา",
			CONTENT: [{
				type: "name",
				title: "Blacklist",
				content: "เป็นคีย์เวิร์ดที่จะใช้บล็อกการเข้าถึงบางเว็บไซต์ จากอุปกรณ์ที่เชื่อมต่อโดยระบบผู้ปกครอง",
				children: [{
					type: "paragraph",
					content: "คลิก Add a New Keyword เพื่อเพิ่มคีย์เวิร์ดให้แบล็คลิสต์ ในการลบคีย์เวิร์ดให้คลิกที่ไอคอน(-) จะสามารถลบคีย์เวิร์ดที่คุณต้องการ"
				}]
			},{
				type: "name",
				title: "Whitelist คีย์เวิร์ดบนที่อยู่เว็บไซต์ เป็นลิสต์ที่อนุญาตให้เข้าถึง.",
				content: " คีย์เวิร์ดบนที่อยู่เว็บไซต์ เป็นลิสต์ที่อนุญาตให้เข้าถึง",
				children: [{
					type: "paragraph",
					content: "คลิก Add a New Domain Name ในการเพิ่มชื่อเว็บไซต์ในไวท์ลิสต์ ในการลบเว็บไซต์ คลิกที่ไอคอน(-) จะสามารถลบคีย์เวิร์ดที่คุณต้องการ."
				}]
			},{
				type: "paragraph",
				content: "คีย์เวิร์ดสามารถเป็นชื่อโดเมน ตัวอย่าเช่น www.mail.google.com หรือ www.facebook.com."
			}]
		},
		
		
		QOS: {
			TITLE: "QoS",
			CONTENT: [{
				type: "paragraph",
				content: "คุณภาพของบริการ (QoS) จะช่วยให้การจัดลำดับความสำคัญการจราจรทางอินเทอร์เน็ตขึ้นอยู่กับความต้องการของคุณ คุณสามารถระบุระดับความสำคัญสำหรับอุปกรณ์หรือแอพลิเคชันในรายการกฎ QoS"
			},{
				type: "name",
				title: "เปิด QoS",
				content: "กดตัวนี้เพื่อเปิดใช้งาน QoS ฟังก์ชัน"
			},{
				type: "name",
				title: "อัพโหลดแบนด์วิธ",
				content: "ใส่แบนด์วิธสูงสุดในการอัพโหลดโดยผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ดาวน์โหลดแบนด์วิธ",
				content: "ใส่แบนด์วิธสูงสุดในการดาวน์โหลดโดยผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ความสำคัญสูงสุด",
				content: "ระบุเปอร์เซนสำหรับเส้นทางลำดับความสำคัญสูง"
			},{
				type: "name",
				title: "ความสำคัญปานกลาง",
				content: "ระบุเปอร์เซนสำหรับเส้นทางลำดับความสำคัญปานกลาง"
			},{
				type: "name",
				title: "ความสำคัญน้อยสุด",
				content: "ระบุเปอร์เซนสำหรับเส้นทางลำดับความสำคัญต่ำ"
			},{
				type: "note",
				title: "หมายเหตุ",
				content: "ปริมาณสูงสุด ( ร้อยละ) ของลำดับความสำคัญคือ 1 "
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		QOS_RULE: {
			TITLE: "รายชื่อ QoS Rule",
			CONTENT: [{
				type: "name",
				title: "รูปแบบ",
				content: "เลือกประเภทเพื่อเพิ่มรายการ QoS rule "
			},{
				type: "step",
				title: "การตั้งค่าruleความสำคัญมาก/กลาง/ต่ำ โดยDevice",
				content: [
					"1. คลิก Add",
					"2. เลือก By Device",
					"3. คลิก View Existing Device เพื่อเลือกอุปกรณ์ที่คุณต้องการจาก Access Device List, หรือคุณสามารถใส่ชื่ออุปกรณ์และ MAC Address ได้ด้วยตัวคุณเองลงในช่อง Device Name และ MAC Address.",
					"4. คลิก OK"
				]
			},{
				type: "step",
				title: "การตั้งค่าruleความสำคัญสูง/กลาง/ต่ำ โดย Application",
				content: [
					"1. คลิก Add",
					"2. เลือก By Application.",
					"3. เลือกโปรแกรมที่ต้องการของคุณจากรายการแอพลิเคชันหรือคุณสามารถปรับแต่งการประยุกต์ใช้โดยการกำหนดค่าชื่อโปรโตคอลและพอร์ตปลายทาง (1-65535) ในฟิล์ดที่สอดคล้องกันคุณสามารถป้อนพอร์ตเดียวหรือหลายพอร์ตหรือช่วงการใช้งานของพอร์ต ใช้เครื่องหมายคอมม่าเพื่อคั่น (เช่น 21,36-105,111)",
					"4. คลิก OK"
				]
			}]
		},
		
		
		QOS_DATABASE: {
			TITLE: "อัพเกรดดาต้าเบส",
			CONTENT: [{
				type: "name",
				title: "ไฟล์ดาต้าเบสใหม่",
				content: "กด Browse เพื่อที่อยู่ของไฟล์ดาต้าเบสใหม่. เลือกและคลิกอัพเกรดเพื่ออัพเกรดดาต้าเบสเป็นเวอร์ชั่นใหม่"
			},{
				type: "name",
				title: "เวอร์ชั่นดาต้าเบส",
				content: "แสดงรุ่น database ปัจจุบัน"
			}]
		},
		
		
		
		SECURITY_FIREWALL: {	
			TITLE: "ไฟล์วอล",
			CONTENT: [{
				type: "name",
				title: "SPI firewall",
				content: "Stateful Packet Inspection (SPI) ไฟร์วอลล์จะช่วยป้องกันการโจมตีไซเบอร์และตรวจสอบการจราจรที่จะผ่านเราท์เตอร์ขึ้นอยู่กับโปรโตคอล"
			}]
		},
		
		SECURITY_DOS: {
			TITLE: "DoS Protection",
			CONTENT: [{
				type: "name",
				title: "DoS Protection",
				content: "Denial of Service (DoS) คุ้มครองปกป้องระบบ LAN ของคุณจากการโจมตี DoS จาก flooding network ของคุณที่มีการร้องขอเซิร์ฟเวอร์"
			},{
				type: "name",
				title: "ICMP -FLOOD Attack Filtering",
				content: "เปิดใช้งานเพื่อป้องกัน Internet Control Message Protocol (ICMP)จากาการโจมตีการส่งข้อมูล",
				children: [{
					type: "name",
					title: "ปิด",
					content: "ไม่มีการป้องกัน"
				},{
					type: "name",
					title: "ต่ำ",
					content: "ป้องกันในระดับต่ำและมีผลน้อยกับการทำงานของเราท์เตอร์"
				},{
					type: "name",
					title: "กลาง",
					content: "การป้องกันระดับปานกลางจะมีผลเห็นที่ได้ชัดขึ้นกับประสิทธิภาพการทำงานของเราท์เตอร์"
				},{
					type: "name",
					title: "สูง",
					content: "การป้องกันระดับสูงมีผลที่เห็นได้ชัดเจนในการปฏิบัติงานเราท์เตอร์"
				}]
			},{
				type: "name",
				title: "UDP-FLOOD Attack Filtering",
				content: "เปิดใช้งานเพื่อป้องกัน User Datagram Protocol (UDP) จากาการโจมตีการส่งข้อมูล"
			},{
				type: "name",
				title: "TCP-SYN-FLOOD Attack Filtering",
				content: "เปิดใช้งานเพื่อป้องกันไม่ให้ Transmission Control Protocol-Synchronize จากการโจมตีการส่งข้อมูล"
			},{
				type: "name",
				title: "Ignore Ping Packet From WAN Port",
				content: "เมื่อเปิดใช้งานจะทำให้ไม่สนใจแพ็คเก็ต ping  จากพอร์ต WAN"
			},{
				type: "name",
				title: "Forbid Ping Packet From LAN Port",
				content: "เมื่อเปิดใช้งานจะห้ามแพ็คเก็ต ping จากพอร์ต LAN."
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		SECURITY_LIST: {
			TITLE: "Blocked DoS Host List",
			CONTENT: [{
				type: "name",
				title: "Blocked DoS Host List",
				content: "รายการที่อยู่ IP และที่อยู่ MAC จากแหล่งโจมตีแบบ DoS ใด ๆ ที่ถูกบล๊อค"
			},{
				type: "step",
				title: "การลบรายการ",
				content: "ในการ Host List, ให้เลือกรายการที่คุณต้องการลบและคลิก Delete ที่อยู่ด้านบนของตาราง"
			}]
		},
		
		ACCESS_CONTROL: {
			TITLE: "การควบคุมการเข้าถึง",
			CONTENT: [{
				type: "paragraph",
				content: "ควบคุมการเข้าถึง ใช้เพื่ออนุญาตหรือปิดกั้นเฉพาะคอมพิวเตอร์และอุปกรณ์อื่นๆ จากการเข้าถึงเครือข่ายของคุณ เมื่ออุปกรณ์ถูกปิดกั้นแล้วก็จะไม่สามารถสื่อสารกับอุปกรณ์อื่นๆหรือไม่สามารถเชื่อมต่อกับอินเทอร์เน็ตได้."
			},{
				type: "paragraph",
				content: "ที่จะใช้การควบคุมการเข้าถึง, เปิดใช้งานคุณลักษณะนี้ มันจะระบุblack- or whitelistที่อนุญาต หากการควบคุมการเข้าถึงถูกปิดใช้งาน อุปกรณ์ทั้งหมดรวมทั้ง รายการที่อยู่ใน blacklist จะได้รับอนุญาตในการเชื่อมต่อ."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "โหมดการเข้าถึง",
			CONTENT: [{
				type: "name",
				title: "Blacklist",
				content: "เฉพาะอุปกรณ์ที่อยู่ใน blacklist จะถูกปฏิเสธการเข้าถึงเครือข่ายของคุณ."
			},{
				type: "name",
				title: "Whitelist คีย์เวิร์ดบนที่อยู่เว็บไซต์ เป็นลิสต์ที่อนุญาตให้เข้าถึง.",
				content: "เฉพาะอุปกรณ์ที่อยู่ใน whitelist จะได้รับการเข้าถึงเครือข่ายของคุณ."
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "อุปกรณ์ออนไลน์",
			CONTENT: [{
				type: "name",
				title: "ชื่ออุปกรณ์",
				content: "แสดงชื่อของอุปกรณ์ที่เชื่อมต่อ"
			},{
				type: "name",
				title: "IP Address",
				content: "แสดง IP address ของอุปกรณ์ที่เชื่อมต่อ"
			},{
				type: "name",
				title: "MAC Address",
				content: "แสดง MAC addressของอุปกรณ์ที่เชื่อมต่อ"
			},{
				type: "name",
				title: "รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
				content: "แสดงประเภทการเชื่อมต่อของอุปกรณ์ที่เชื่อมต่อ"
			},{
				type: "step",
				title: "การบล็อกอุปกรณ์",
				content: "ดูในตาราง Device Online อยู่ ให้คลิกที่ไอคอน Block ในคอลัมน์ Modify ที่สอดคล้องกับอุปกรณ์ที่คุณต้องการที่จะบล๊อค"
			},{
				type: "step",
				title: "การบล็อกอุปกรณ์หลายอย่าง",
				content: "ดูในตาราง Device Online น์อยู่ เลือกอุปกรณ์ทั้งหมดที่คุณต้องกาบล็อก คลิก Block ด้านบนของตาราง อุปกรณ์จะถูกเพิ่มโดยอัตโนมัติไปยังblacklist หรือ whitelist"
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Devices in Blacklist/Whitelist",
			CONTENT: [{
				type: "step",
				title: "การทำblacklist หรือ whitelist กับอุปกรณ์",
				content: [
					"1. คลิก Add",
					"2. ใส่ ชื่ออุปกรณ์",
					"3. ใส่ MAC address ของอุปกรณ์",
					"4. คลิก OK"
				]
			},{
				type: "step",
				title: "เพื่อแก้ไขหรือลบอุปกรณ์ในBlacklist/Whitelist",
				content: "ในตาราง Blacklist/Whitelist ให้ คลิกไอคอนแก้ไขหรือไอคอนถังขยะ ที่สอดคล้องกับอุปกรณ์ที่คุณต้องการที่จะแก้ไขหรือลบ"
			},{
				type: "step",
				title: "เพื่อลบอุปกรณ์ใน Blacklist/Whitelist",
				content: "ในตาราง Blacklist/Whitelist ให้ เลือกอุปกรณ์ทั้งหมด ที่ต้องการลบออก แล้วคลิกรูป Delete ที่อยู่ด้านบนรายการ"
			}]
		},
		
		
		IPMAC_BIND_SETTING: {
			TITLE: "การตั้งค่า",
			CONTENT: [{
				type: "paragraph",
				content: "ARP (Address Resolution Protocol) binding  คือการผูกIPและMac add.เข้าด้วยกัน จะเป็นประโยชน์สำหรับการควบคุมการเข้าถึงของคอมพิวเตอร์ที่เจาะจงในLAN ของอุปกรณ์เข้าด้วยกัน ARP ยังป้องกันไม่ให้อุปกรณ์อื่น ๆ จากการใช้IP-ของเรา"
			}]
		},
		
		IPMAC_BIND_ARP: {
			TITLE: "รายชื่อ ARP",
			CONTENT: [{
				type: "paragraph",
				content: "แสดง MAC address และ IP address ของอุปกรณ์ที่เชื่อมต่ออยู่"
			},{
				type: "name",
				title: "จำนวนรายการ ARP",
				content: "แสดงจำนวนรวมของอุปกรณ์ที่เชื่อมต่อกับเราท์เตอร์"
			},{
				type: "name",
				title: "MAC Address",
				content: "แสดง MAC addressของอุปกรณ์ที่เชื่อมต่อ"
			},{
				type: "name",
				title: "IP Address",
				content: "แสดง ณญ address ที่เชื่อมต่อกับอุปกรณ์"
			},{
				type: "name",
				title: "ขอบเขต",
				content: "ตัวบ่งบอกว่า MAC และIP address จะผูกกันอยู่หรือไม่"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "การแสดงตัวเลือกที่ Bind หรือ Delete อยู่หรือลบรายการที่เกี่ยวข้อง"
			},{
				type: "note",
				title: "หมายเหตุ",
				content: "คุณไม่สามารถผูกอยู่ IP เดียวกันมากกว่าหนึ่งที่อยู่ MAC"
			}]
		},
		
		IPMAC_BIND_LIST: {	
			TITLE: "รายชื่อ IP&MAC ที่จับคู่กัน",
			CONTENT: [{
				type: "step",
				title: "การตั้งค่าอุปกรณ์ที่มี ARP ผูกไว้",
				content: [
					"1. คลิก Add",
					"2. ใส่ MAC address ของอุปกรณ์",
					"3. ใส่ IP Address ที่ต้องการจะผูกไว้กับ Mac address",
					"4. ใส่ Description สำหรับอุปกรณ์ (ถ้าต้องการ)",
					"5. เลือก Enable",
					"6. คลิก OK"
				]
			},{
				type: "step",
				title: "การปรับเปลี่ยนหรือลบรายการ",
				content: "ใน Binding list คลิกรูป Modify หรือ Delete ที่สอดคล้องกับรายการที่คุณต้องการที่จะแก้ไขหรือลบ"
			},{
				type: "step",
				title: "การลบรายการหลายรายการ",
				content: "ใน Binding list เลือกรายการทั้งหมดที่คุณต้องการลบ,คลิก Delete ข้างบนรายการ"
			}]
		},
		
		IPV6: {
			TITLE: "อินเทอร์เน็ต",
			CONTENT: [{
				type: "name",
				title: "IPv6",
				content: "เลือกเพื่อเปิดใช้งาน (On) หรือปิด (Off) การใช้งาน IPv6 ของเราท์เตอร์"
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : Static IP",
			},{
				type: "name",
				title: "Static IP",
				content: "เลือกชนิดนี้ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณใช้การกำหนดที่อยู่ IPv6 แบบ Static"
			},{
				type: "name",
				title: "ที่อยู่ IPv6  / เกตเวย์เริ่มต้น / DNS หลัก / DNS รอง",
				content: "ใส่ค่าเหล่านี้ซึ่งเป็นค่าที่ได้มาจากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ขนาด MTU ",
				content: "ค่าเริ่มต้นขนาดของ MTU ทั่วไปสำหรับเครือข่ายอีเทอเน็ตคือ 1,500 ไบต์ ไม่แนะนำให้เปลี่ยนค่าเริ่มต้นขนาดของ MTU เว้นแต่มีการขอจากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : Dynamic IP",
			},{
				type: "name",
				title: "Dynamic IP",
				content: "เลือกชนิดนี้ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณใช้การกำหนดที่อยู่ IPv6 แบบไดนามิก"
			},{
				type: "name",
				title: "ที่อยู่ IPv6 / DNS หลัก / DNS รอง",
				content: "ค่าเหล่านี้จะถูกกรอกให้อัตโนมัติจากทางเซิร์ฟเวอร์ DHCPv6 ของผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ขอใหม่",
				content: "คลิกที่ปุ่มนี้เพื่อรับค่าพารามิเตอร์ IPv6 ใหม่จากเซิร์ฟเวอร์ DHCPv6 ของผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ปล่อย",
				content: "คลิกที่ปุ่มนี้เพื่อทำการทิ้งที่อยู่ IPv6 มีอยู่ทั้งหมดได้รับมอบหมายจากเซิร์ฟเวอร์ DHCPv6 จากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "การรับที่อยู่ IPv6",
				content: "เลือก DHCPv6 เพื่อรับที่อยู่ IPv6 ไม่ใช่ชั่วคราว หรือ SLAAC รับ IPv6 จากการสร้างรายชื่อจากแพ็คเก็ตเราเตอร์หรือระบุตาม ISP ของคุณ"
			},{
				type: "name",
				title: "Prefix delegation",
				content: "เลือกเปิดใช้งานเพื่อจะได้รับ prefix delegation โดย DHCPv6 เซิร์ฟเวอร์จาก ISP หรือปิดการใช้งานเพื่อกำหนดที่อยู่ prefix ด้วยตนเอง ไคลเอนต์ในระบบ LAN จะสร้างที่อยู่ IPv6 กับ prefix นี้"
			},{
				type: "name",
				title: "ที่อยู่ DNS",
				content: "เลือก\"รับแบบไดนามิกจากผู้ให้บริการอินเทอร์เน็ต\" หรือ\"ใช้ตามที่อยู่ DNS ต่อไปนี้ ถ้าเลือก\" ใช้ตามที่อยู่ DNS ต่อไปนี้ \" ถูกเลือกกรุณาป้อนที่อยู่ DNS ที่ได้จากทาง ผู้ให้บริการอินเทอร์เน็ต ของคุณ"
			},{
				type: "name",
				title: "Primary DNS/Secondary DNS",
				content: "ใส่พารามิเตอร์เหล่านี้ด้วยตนเองหรือแบบไดนามิกที่ได้รับจาก ISP"
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : PPPoE"
			},{
				type: "name",
				title: "PPPoE",
				content: "เลือกชนิดนี้ถ้าผู้ให้บริการอินเทอร์เน็ตของคุณให้บริการ PPPoEv6 และให้ชื่อผู้ใช้งานและรหัสผ่านคุณมา"
			},{
				type: "name",
				title: "ชื่อผู้ใช้/รหัสผ่าน",
				content: "กรอกค่าเหล่านี้ที่ได้มาจากผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "name",
				title: "IPv6 Address",
				content: "ค่าเหล่านี้จะถูกกรอกให้โดยอัตโนมัติจากทางเซิร์ฟเวอร์ DHCPv6 ของผู้ให้บริการอินเทอร์เน็ตหลังจากคุณใช่ชื่อและรหัสผ่านแล้วคลิ๊กเชื่อมต่อ"
			},{
				type: "name",
				title: "ที่อยู่ DNS",
				content: "เลือก\"รับแบบไดนามิกจากผู้ให้บริการอินเทอร์เน็ต\" หรือ\"ใช้ตามที่อยู่ DNS ต่อไปนี้ ถ้าเลือก\" ใช้ตามที่อยู่ DNS ต่อไปนี้ \" ถูกเลือกกรุณาป้อนที่อยู่ DNS ที่ได้จากทาง ผู้ให้บริการอินเทอร์เน็ต ของคุณ"
			},{
				type: "name",
				title: "การรับที่อยู่ IPv6",
				content: "เลือก DHCPv6 เพื่อรับที่อยู่ IPv6 ไม่ใช่ชั่วคราว หรือ SLAAC รับ IPv6 จากการสร้างรายชื่อจากแพ็คเก็ตเราเตอร์หรือระบุตาม ISP ของคุณ"
			},{
				type: "name",
				title: "Prefix delegation",
				content: "เลือกเปิดใช้งานเพื่อจะได้รับ prefix delegation โดย DHCPv6 เซิร์ฟเวอร์จาก ISP หรือปิดการใช้งานเพื่อกำหนดที่อยู่ prefix ด้วยตนเอง ไคลเอนต์ในระบบ LAN จะสร้างที่อยู่ IPv6 กับ prefix นี้"
			},{
				type: "name",
				title: "เชื่อมต่อ",
				content: "คลิ๊กปุ่มนี้เพื่อทำหารเชื่อมต่อกับอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ไม่เชื่อมต่อ",
				content: "คลิ๊กปุ่มนี้เพื่อทำการตัดการเชื่อมต่ออินเทอร์เน็ต"
			},{
				type: "title",
				title: "รูปแบบการเชื่อมต่ออินเทอร์เน็ต: 6to4 ทันเนลลิ่ง"
			},{
				type: "name",
				title: "6to4 ทันเนลลิ่ง",
				content: "เลือกรูปแบบนี้ถ้าผู้ให้อินเทอร์เน็ตของคุณให้บริการกำหนดที่อยู่แบบ 6to4"
			},{
				type: "name",
				title: "ที่อยู่ IPv4 / IPv4 Subnet Mask / IPv4 Default Gateway /Tunnel Address",
				content: "ค่าเหล่านี้จะถูกสร้างขึ้นแบบไดนามิกจากข้อมูล IPV4 ที่พอร์ต WAN หลังจากคุณทำการเชื่อมต่อ"
			},{
				type: "name",
				title: "ใช้เซิร์ฟเวอร์ DNS ต่อไปนี้",
				content: "เลือกช่องนี้เพื่อกำหนดค่าด้วยตนเองโดยป้อน DNS หลัก และ DNS รอง ตามที่ ISP ของคุณให้มา"
			},{
				type: "name",
				title: "เชื่อมต่อ",
				content: "คลิ๊กปุ่มนี้เพื่อทำหารเชื่อมต่อกับอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ไม่เชื่อมต่อ",
				content: "คลิ๊กปุ่มนี้เพื่อทำการตัดการเชื่อมต่ออินเทอร์เน็ต"
			},{
				type: "title",
				title: "ประเภทการเชื่อมต่ออินเทอร์เน็ต: การส่งผ่าน (Bridge)"
			},{
				type: "paragraph",
				content: "เลือกชนิดนี้ถ้า ผู้ให้บริการอินเทอร์เน็ต ของคุณใช้การส่งผ่าน (บริดจ์) ใช้งานเครือข่าย สำหรับประเภทนี้ไม่มีพารามิเตอร์จะได้รับบริการและไม่ต้องทำการกำหนดค่า."
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		IPV6_LAN: {
			TITLE: "LAN",
			CONTENT: [{
				type: "paragraph",
				content: "ยกเว้นสำหรับการส่งผ่าน (Bridge), อื่นๆ 6 ประเภทของการเชื่อมต่ออินเทอร์เน็ตจำเป็นต้องมีการกำหนดค่า IPv6"
			},{
				type: "name",
				title: "รูปแบบการกำหนด",
				content: "เลือกให้เหมาะสมและตรงตามผู้ให้บริการอินเทอร์เน็ตของคุณ",
				children: [{
					type: "name",
					title: "DHCPv6",
					content: "กำหนดที่อยู่ IP โดยอัตโนมัติให้กับลูกค้าในระบบ LAN",
					children: [{
						type: "name",
						title: "Address Prefix",
						content: "ใส่พรีฟิกซ์อยู่ตามที่ ผู้ให้บริการอินเทอร์เน็ต ของคุณ"
					},{
						type: "name",
						title: "เวลาที่ใช้ในการปล่อย",
						content: "ช่วงเวลาที่ IP ที่ได้รับมอบหมายยังคงอยู่ ให้ค่าเริ่มต้นเป็น 86400 วินาทีหรือเปลี่ยนถ้ามีร้องขอจากผู้ให้บริการอินเทอร์เน็ตของคุณ"
					},{
						type: "name",
						title: "Address",
						content: "มันเป็นที่อยู่ IP ที่ได้รับมอบหมายโดยอัตโนมัติโดยเซิร์ฟเวอร์ DHCPv6 จากผู้ให้บริการอินเทอร์เน็ต"
					}]
				},{
					type: "name",
					title: "SLAAC+Stateless DHCP",
					connector:" ",
					children: [{
						type: "name",
						title: "Address Prefix",
						content: "ใส่พรีฟิกซ์อยู่ตามที่ ผู้ให้บริการอินเทอร์เน็ต ของคุณ"
					},{
						type: "name",
						title: "Address",
						content: "เป็น IP address อัตโนมัติที่กำหนดโดย ISP"
					}]
				},{
					type: "name",
					title: "SLAAC+RDNSS",
					connector:" ",
					children: [{
						type: "name",
						title: "Address Prefix",
						content: "ใส่พรีฟิกซ์อยู่ตามที่ ผู้ให้บริการอินเทอร์เน็ต ของคุณ"
					},{
						type: "name",
						title: "Address",
						content: "เป็น IP address อัตโนมัติที่กำหนดโดย ISP"
					}]
				}]
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		IPV6_MAC_CLONE: {
			TITLE: "Mac Clone",
			CONTENT: [{
				type: "name",
				title: "ใช้ MAC Address พื้นฐาน",
				content: "ไม่ทำการเปลี่ยนค่า MAC address เริ่มต้นของเราท์เตอร์ ในกรณีที่ผู้ให้บริการอินเทอร์เน็ต ไม่ได้ผูก IP address กับ MAC address ไว้ด้วยกัน"
			},{
				type: "name",
				title: "ใช้ MAC Address คอมพิวเตอร์ปัจจุบัน",
				content: "เลือกที่การคัดลอก MAC Address ปัจจุบันของคอมพิวพ์เตอร์ที่ใช้เชื่อมต่อเราท์เตอร์ ในกรณีผู้ให้บริการระบุ IP Address นี้ให้ใช้ผูกอยู่กับ MAC Address ของคอมพิวพ์เตอร์"
			},{
				type: "name",
				title: "ใช้ MAC Address แบบกำหนดเอง",
				content: "ใส่ MAC Address ด้วยตนเอง ในกรณีผู้ให้บริการระบุ IP Address นี้ให้ใช้ผูกอยู่กับ MAC Address ของคอมพิวพ์เตอร์ที่เฉพาะเจาะจง"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		TIME_SETTING: {	
			TITLE: "การตั้งเวลา",
			CONTENT: [{
				type: "step",
				title: "เป็นแบบประสานเวลาแบบอัตโนมัติ",
				content: [
					"1. ในช่องตั้งเวลา เลือกรับ โดยอัตโนมัติจากอินเทอร์เน็ต",
					"2. เลือกโซนเวลาท้องถิ่นของคุณจากเมนูแบบเลื่อนลง",
					"3. ในช่องเซิร์ฟเวอร์ NTP l ป้อนที่อยู่ IP หรือชื่อโดเมนของเซิร์ฟเวอร์ NTP ที่คุณต้องการ.",
					"4. ในช่องเซิร์ฟเวอร์ NTP II ป้อนที่อยู่ IP หรือชื่อโดเมนของเซิร์ฟเวอร์ NTP ที่สอง (ถ้าต้องการ)",
					"5. คลิ๊กรับค่า",
					"6. คลิก Save"
				]
			},{
				type: "step",
				title: "เป็นแบบตั้งวันและเวลาด้วยตัวเอง",
				content: [
					"1. ในช่องตั้งเวลาเลือกแบบตั้งด้วยตนเอง",
					"2. ใส่วันที่ปัจจุบัน",
					"3. ป้อนเวลาปัจจุบัน (ในรูปแบบนาฬิกา 24 ชั่วโมงเช่น 16:00:00 ซึ่งหมายึง 04:00 pm)",
					"4. คลิ๊กบันทึก"
				]
			}]
		},
		
		TIME_SETTING_DAYLIGHT: {
			TITLE: "การปรับเวลาตามฤดูกาล",
			CONTENT: [{
				type: "step",
				title: "ตั้งเป็นเวลาออมแสง",
				content: [
					"1. เลือกเปิดใช้งานตามฤดูกาล",
					"2. เลือกวันเริ่มต้นที่ถูกต้องและเวลาเมื่อปรับเวลาตามฤดูกาลเริ่มต้นที่โซนเวลาท้องถิ่นของคุณ",
					"3. เลือกวันที่สิ้นสุดที่ถูกต้องและเวลาเมื่อปรับเวลาตามฤดูกาลสิ้นสุดที่เขตเวลาท้องถิ่นของคุณ",
					"4. คลิ๊กบันทึก"
				]
			}]
		},
		DIGNOSTIC: {
			TITLE: "การวินิจฉัย",
			CONTENT: [{
				type: "paragraph",
				content: "เราท์เตอร์ให้เครื่องมือ Ping และ Traceroute ที่จะช่วยคุณในการแก้ไขปัญหาการเชื่อมต่อเครือข่ายเครื่องมือPingส่งแพ็คเก็ตที่จะอยู่เป้าหมาย IP หรือชื่อโดเมนและบันทึกผลเช่นจำนวนของแพ็กเก็ตที่ส่ง / รับและเวลาไปกลับเครื่องมือ Traceroute ส่งแพ็คเก็ตที่จะอยู่เป้าหมาย IP หรือชื่อโดเมนและแสดงจำนวนของ hops และเวลาที่ไปถึงปลายทาง"
			},{
				type: "paragraph",
				content: "คุณสามารถ ping และ traceroute อุปกรณ์ภายในตามที่อยู่ IP หรือชื่อโดเมนเช่น google.com, yahoo.com, ฯลฯ"
			},{
				type: "step",
				title: "ในการวินิจฉัยโดยใช้ Ping",
				content: [
					"1. ใส่ที่อยู่IPเป้าหมายหรือชื่อโดเมน",
					"2. คลิ๊กไอคอนลูกศรเพื่อเปิดเมนูขั้นสูงและระบุนับPing และขนาดPingแพ็คเก็ต (ถ้าต้องการ)",
					"3. คลิ๊กเริ่มการทำงาน"
				]
			},{
				type: "step",
				title: "ในการวินิจฉัยโดยใช้ Traceroute",
				content: [
					"1. ใส่ที่อยู่IPเป้าหมายหรือชื่อโดเมน",
					"2. คลิ๊กลูกศรไอคอนเพื่อเปิดเมนูขั้นสูงและระบุจำนวนกระโดด (จะมาถึง) ใน Traceroute สูงสุด TTL (Time to Live) ช่อง ค่าเริ่มต้นคือ 20 (ถ้าต้องการ)",
					"3. คลิ๊กเริ่มการทำงาน"
				]
			}]
		},
		FIRMWARE: {	
			TITLE: "การอัพเกรดเฟิร์มแวร์",
			CONTENT: [{
				type: "paragraph",
				content: "ก่อนที่จะอัพเกรดเฟิร์มของเราท์เตอร์ที่คุณจะต้องดาวน์โหลดการปรับปรุงเฟิร์มแวล่าสุดจาก<a class=\"link\" target=\"blank\" href=\"http://www.tp-link.com/th/Support/\">TP-Link การรองรับ </a>ไปยังเครื่องคอมพิวเตอร์ของคุณ"
			},{
				type: "step",
				title: "สิ่งสำคัญ: เพื่อป้องกันความล้มเหลวของการอัพเกรดกรุณาทราบต่อไปนี้:",
				content: [
					"ตรวจสอบให้แน่ใจไฟล์เฟิร์มแวล่าสุดจะถูกจับคู่กับรุ่นฮาร์ดแวร์ (ตามที่แสดงไว้ภายใต้หน้าอัพเกรดเฟิร์ม)",
					"ตรวจสอบให้แน่ใจว่าคุณมีการเชื่อมต่อที่มีความเสถียรระหว่างเราท์เตอร์และคอมพิวเตอร์ของคุณ จะไม่แนะนำในการอัพเกรดเฟิร์มแบบไวเลส",
					"ให้แน่ใจว่าคุณเอาอุปกรณ์จัดเก็บข้อมูล USB ที่เชื่อมต่อกับเราท์เตอร์ก่อนที่จะอัพเกรดเฟิร์มเพื่อป้องกันการสูญหายของข้อมูล",
					"การสำรองข้อมูลการตั้งค่าเราท์เตอร์ของคุณ",
					"ห้ามปิด Router ในระหว่างการอัพเกรดเฟิร์ม"
				]
			},{
				type: "step",
				title: "เพื่ออัฟเกรดเฟิร์มของเราท์เตอร์",
				content: [
					"1. คลิ๊กเรียกดู",
					"2. ค้นหาและเลือกไฟล์เฟิร์มแวที่ดาวน์โหลดไว้.",
					"3. คลิกอัพเกรด"
				]
			},{
				type: "paragraph",
				content: "กระบวนการปรับรุ่นใช้เวลาไม่กี่นาทีที่จะเสร็จสมบูรณ์ กรุณาอย่าปิดเราท์เตอร์ในขณะที่การปรับรุ่นอยู่ในกระบวนการทำงาน."
			}]
		},
		
		BACKUP: {	
			TITLE: "แบ็คอัพ",
			CONTENT: [{
				type: "paragraph",
				content: "คลิ๊กการสำรองข้อมูลเพื่อบันทึกการกำหนดค่าปัจจุบันของคุณไปยังเครื่องคอมพิวเตอร์ของคุณ ตรวจสอบให้แน่ใจที่จะบันทึกแฟ้มสำรองข้อมูลไปยังตัวเก็บข้อมูลที่ปลอดภัยที่คุณสามารถดึงข้อมูลและเรียกคืน Router ในภายหลังถ้าจำเป็น."
			},{
				type: "paragraph",
				content: "คลิ๊กการสำรองข้อมูลเพื่อบันทึกการกำหนดค่าปัจจุบันของคุณไปยังเครื่องคอมพิวเตอร์ของคุณ ตรวจสอบให้แน่ใจที่จะบันทึกแฟ้มสำรองข้อมูลไปยังตัวเก็บข้อมูลที่ปลอดภัยที่คุณสามารถดึงข้อมูลและเรียกคืน Router ในภายหลังถ้าจำเป็น."
			}]
		},
		
		RESTORE: {
			TITLE: "คืนค่าใหม่",
			CONTENT: [{
				type: "step",
				title: "การเรียกคืนจากการสำรองข้อมูล",
				content: [
					"1. คลิ๊กเรียกดู",
					"2. ค้นหาและเลือกแฟ้มสำรองข้อมูล",
					"3. คลิ๊ก Restore"
				]
			}]
		},
		
		FACTORY: {
			TITLE: "คืนค่าโรงงาน",
			CONTENT: [{
				type: "paragraph",
				content: "คลิ๊กคืนค่าโรงงานเพื่อตั้งค่าเราท์เตอร์ของคุณไปยังโรงงานตั้งค่าเริ่มต้น"
			},{
				type: "note",
				title: "หมายเหตุ",
				content: [
					"1. เรียกคืนค่าโรงงาน จะลบการตั้งค่าที่คุณได้ตั้งค่าในเราเตอร์ทั้งหมด เพื่อจะ เข้าสู่หน้าการจัดการของเราเตอร์ โดยใช้ค่าเริ่มต้น admin ทั้งชื่อผู้ใช้และรหัสผ่าน.",
					"2. กรุณาอย่าปิดเราเตอร์ระหว่างการสำรองข้อมูลหรืออยู่ในระหว่างกระบวนการเรียกคืนค่า."
				]
			}]
		},
		
		
		ADMIN_ACCOUNT: {	
			TITLE: "บัญชีการจัดการ",
			CONTENT: [{
				type: "paragraph",
				content: "หน้านี้ช่วยให้คุณสามารถเปลี่ยนชื่อผู้ใช้เข้าสู่ระบบและ / หรือรหัสผ่านของคุณและที่จะตั้งค่าที่อยู่อีเมลสำหรับการกู้คืนรหัสผ่าน"
			},{
				type: "name",
				title: "ชื่อผู้ใช้เดิม",
				content: "พิมพ์ชื่อผู้ใช้ของคุณในปัจจุบัน"
			},{
				type: "name",
				title: "รหัสผ่านเดิม",
				content: "พิมพ์รหัสผ่านของคุณในปัจจุบัน"
			},{
				type: "name",
				title: "ชื่อผู้ใช้ใหม่",
				content: "พิมพ์ชื่อผู้ใช้ของคุณใหม่"
			},{
				type: "name",
				title: "รหัสผ่านใหม่",
				content: "พิมพ์รหัสผ่านใหม่ของคุณ"
			},{
				type: "name",
				title: "ยืนยันรหัสผ่านใหม่",
				content: "พิมพ์รหัสผ่านใหม่ของคุณอีกครั้ง"
			},{
				type: "note",
				title: "หมายเหตุ",
				content: "ถ้าคุณตัดสินใจที่จะเปลี่ยนชื่อผู้ใช้และรหัสผ่านสำหรับใช้ในการเข้าสู่ระบบกับเราท์เตอร์ให้แน่ใจว่าจะเขียนลงข้อมูลเข้าสู่ระบบใหม่ในสถานที่ปลอดภัย"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		ADMIN_RECOVERY: {
			TITLE: "กอบกู้รหัสผ่าน",
			CONTENT: [{
				type: "name",
				title: "เปิดการกอบกู้รหัสผ่าน",
				content: "ข้อแนะนำที่สำคัญ ให้คุณเปิดใช้งานคุณลักษณะการกู้คืนรหัสผ่านซึ่งจะช่วยให้การตั้งค่าชื่อผู้ใช้และรหัสผ่านของคุณถูกส่งผ่านทางอีเมล์"
			},{
				type: "name",
				title: "จาก",
				content: "ป้อนที่อยู่อีเมลที่ถูกต้องที่จะใช้สำหรับอีเมลขาออก"
			},{
				type: "name",
				title: "ถึง",
				content: "ป้อนที่อยู่อีเมลที่ถูกต้องที่จะใช้สำหรับอีเมล์ที่เข้ามา"
			},{
				type: "name",
				title: "SMTP Server",
				content: "ป้อนที่อยู่เซิร์ฟเวอร์ SMTP ที่เราเตอร์จะใช้ในการส่งรหัสยืนยันผ่านทางอีเมล"
			},{
				type: "name",
				title: "เปิดการแสดงตัวตน",
				content: "เลือกเปิดใช้งานการตรวจสอบหากเซิร์ฟเวอร์อีเมลขาออกต้องตรวจสอบสำหรับการส่งอีเมล์และกรอกชื่อผู้ใช้และรหัสผ่านลง ซึ่งในส่วนนี้ต้องคำนึงถึง case-sensitive"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		ADMIN_LOCAL: {
			TITLE: "ความจัดการทั่วไป",
			CONTENT: [{
				type: "paragraph",
				content: "ในส่วนนี้จะช่วยให้คุณสามารถ จำกัด จำนวนของอุปกรณ์ลูกข่ายบนระบบ LAN ของคุณจากการเข้าถึง Router โดยใช้การตรวจสอบที่อยู่ที่ผ่าน MAC"
			},{
				type: "name",
				title: "เข้าถึงอุปกรณ์ที่เชื่อมต่อ LAN ทั้งหมด",
				content: "สลับบนเพื่อให้การจัดการท้องถิ่นสำหรับอุปกรณ์ทั้งหมดเชื่อมต่อ LAN หรือปิดเพื่อให้การจัดการสำหรับอุปกรณ์เฉพาะ"
			},{
				type: "name",
				title: "MAC Address",
				content: "แสดงที่อยู่MAC ของอุปกรณ์การจำกัดการเข้าถึง"
			},{
				type: "name",
				title: "บรรยาย",
				content: "แสดงรายละเอียดของอุปกรณ์การจำกัดการเข้าถึง"
			},{
				type: "name",
				title: "สถานะ",
				content: "แสดงสถานะปัจจุบันของอุปกรณ์การจำกัดการเข้าถึง(เปิดใช้งานหรือปิดการใช้งาน)"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "ตัวเลือกการแสดงผลที่จะแก้ไขและลบทิ้งอุปกรณ์ที่เกี่ยวข้องจากรายการ"
			},{
				type: "step",
				title: "ในการเพิ่มอุปกรณ์ไคลเอ็นต์ในรายการ",
				content: [
					"1. คลิก Add",
					"2. คลิ๊กดูอุปกรณ์ที่มีอยู่ในการเลือกอุปกรณ์ที่มีอยู่หรือป้อนที่อยู่ MAC ของอุปกรณ์ลงในช่องที่อยู่ MAC",
					"3. ใส่รายละเอียดสำหรับอุปกรณ์",
					"4. เลือก Enable",
					"5. คลิก OK"
				]
			},{
				type: "step",
				title: "การปรับเปลี่ยนหรือลบอุปกรณ์ในรายการ",
				content: "ในตารางคลิกไอคอน Edit หรือ ไอคอน Trash ที่สอดคล้องกับอุปกรณ์ที่คุณต้องการที่จะแก้ไขหรือลบ"
			},{
				type: "step",
				title: "ในการลบอุปกรณ์หลาย",
				content: "เลือกอุปกรณ์ทั้งหมดที่คุณต้องการลบ คลิ๊กลบ"
			}]
		},
		ADMIN_REMOTE: {	
			TITLE: "การจัดการระยะไกล",
			CONTENT: [{
				type: "paragraph",
				content: "คุณลักษณะการจัดการระยะไกลช่วยให้คุณเข้าถึงและกำหนดค่าเราท์เตอร์จากระยะไกลจากอินเทอร์เน็ต"
			},{
				type: "name",
				title: "ปิด Remote Management",
				content: "เลือกตัวเลือกนี้จะปิดการใช้งานการจัดการระยะไกล"
			},{
				type: "name",
				title: "เปิด Remote Management สำหรับอุปกรณ์ทั้งหมด",
				content: "เลือกตัวเลือกนี้เพื่อเปิดใช้งานการจัดการระยะไกลสำหรับที่อยู่ IP ทั้งหมด ถ้าเลือกป้อนข้อมูลการจัดการเว็บพอร์ต"
			},{
				type: "name",
				title: "เปิด Remote Management สำหรับอุปกรณ์เฉพาะ",
				content: "เลือกตัวเลือกนี้เพื่อให้สามารถจัดการจากระยะไกลสำหรับที่อยู่ IP ที่เฉพาะเจาะจง ถ้าเลือกใส่พอร์ตการจัดการเว็บและการจัดการระยะไกลสาขาที่อยู่ IP"
			},{
				type: "name",
				title: "เว็บการจัดการพอร์ต",
				content: "ป้อนหมายเลขพอร์ตระหว่าง 1024 และ 65535 ซึ่งเป็นที่ใช้ในการเข้าถึงอินเตอร์เฟซการจัดการเว็บ Router ที่มีการรักษาความปลอดภัยมากขึ้น โดยปกติเว็บเบราเซอร์ใช้พอร์ตบริการ HTTP มาตรฐาน 80 เริ่มต้นและพอร์ตบริการทั่วไปคือ 8080 ซึ่งเป็นพอร์ตบริการอื่นของ HTTP"
			},{
				type: "name",
				title: "การจัดการระยะไกลที่อยู่IP",
				content: "ป้อนที่อยู่ IP ที่ถูกต้องหรือช่วงIPจะได้รับอนุญาตในการเข้าถึงเราท์เตอร์ หาก 255.255.255.255 ถูกป้อนทุกคนจะได้รับอนุญาตให้เข้าถึง"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		
		SYSTEM_LOG: {
			TITLE: "ค่าล็อกของระบบ",
			CONTENT: [{
				type: "paragraph",
				content: "หน้าLogระบบแสดงรายการของกิจกรรมล่าสุด (เหตุการณ์) ของเราท์เตอร์ คุณสามารถกำหนดสิ่งที่ประเภทของบันทึกและ / หรือระดับของการบันทึกที่คุณต้องการดู หน้านี้ยังมีคุณสมบัติอีเมล์ที่คุณสามารถกำหนดค่าโดยอัตโนมัติส่งไฟล์บันทึกไปยังที่อยู่อีเมลที่เฉพาะเจาะจงหรือส่งออกแฟ้มบันทึกไปยังเครื่องคอมพิวเตอร์"
			},{
				type: "name",
				title: "รูปแบบ",
				content: "เลือกประเภทของการเข้าสู่ระบบเพื่อแสดง"
			},{
				type: "name",
				title: "ระดับ",
				content: "เลือกระดับการเข้าสู่ระบบเพื่อแสดง"
			},{
				type: "name",
				title: "รีเฟรช",
				content: "คลิ๊กที่ไอคอนนี้เพื่อปรับปรุงระบบเข้าสู่ระบบ"
			},{
				type: "name",
				title: "ลบทั้งหมด",
				content: "คลิ๊กที่ไอคอนนี้เพื่อลบบันทึกของระบบทั้งหมด"
			},{
				type: "name",
				title: "บันทึกเข้าสู่ระบบ",
				content: "คลิ๊กที่ปุ่มนี้เพื่อดาวน์โหลดไฟล์บันทึกของระบบทั้งหมดไปยังเครื่องคอมพิวเตอร์ของคุณ"
			},{
				type: "name",
				title: "ตั้งค่าเมล์",
				content: "คลิ๊กที่ปุ่มนี้เพื่อตั้งค่าอีเมลสำหรับระบบบันทึก"
			},{
				type: "step",
				title: "การกำหนดค่าการตั้งค่าอีเมลสำหรับระบบบันทึก",
				content: [
					"1. คลิ๊กที่การตั้งค่าอีเมล์",
					"2. จาก - ป้อนที่อยู่อีเมลที่ถูกต้องที่จะใช้สำหรับอีเมลขาออก",
					"3. ถึง - ป้อนที่อยู่อีเมลที่ถูกต้องที่จะใช้สำหรับอีเมล์ที่เข้ามา",
					"4. เซิร์ฟเวอร์ SMTP - ป้อนที่อยู่เซิร์ฟเวอร์ SMTP ที่เราท์เตอร์ที่ใช้ในการส่งระบบบันทึกผ่านทางอีเมล์",
					{
						content: "5. เปิดใช้งานการตรวจสอบ- เลือกตัวเลือกนี้ถ้าเซิร์ฟเวอร์ SMTP ต้องตรวจสอบสำหรับการส่งอีเมล์ ",
						children: [{
							type: "name",
							title: "ชื่อผู้ใช้",
							content: "ป้อนชื่อผู้ใช้สำหรับเซิร์ฟเวอร์ SMTP ซึ่งในส่วนนี้ต้องคำนึงถึง case-sensitive"
						},{
							type: "name",
							title: "รหัสผ่าน",
							content: "ใส่รหัสผ่านสำหรับเซิร์ฟเวอร์ SMTP ซึ่งในส่วนนี้ต้องคำนึงถึง case-sensitive"
						}]
					},{
						content: "6. เลือกตัวเลือกนี้เพื่อระบุสิ่งที่เวลาของวันเข้าสู่ระบบจะถูกส่งไปโดยอัตโนมัติ",
						children: [{
							type: "paragraph",
							content: "เพื่อส่งเข้าสู่ระบบในชีวิตประจำวันในเวลาที่กำหนดป้อนชั่วโมง (HH) และนาที (MM) ในรูปแบบนาฬิกา 24 ชั่วโมงเช่น 16:00 เป็น 16:00."
						},{
							type: "paragraph",
							content: "เพื่อส่งเข้าสู่ระบบที่ชั่วโมงที่เฉพาะเจาะจงหรือช่วงเวลาใส่จำนวนชั่วโมง."
						}]
					},
					"7 คลิ๊กบันทึก"
				]
			}]
		},

		TRAFFIC_STATISTIC: {
			TITLE: "สถิติการจราจรข้อมูล",
			CONTENT: [{
				type: "paragraph",
				content: "หน้าแสดงสถิติจราจรข้อมูลเครือข่าย LAN, WAN และแพ็คเก็ต WLAN ส่งและรับ"
			},{
				type: "name",
				title: "สถิติการจราจรข้อมูล",
				content: "สลับเพื่อแสดงข้อมูลสถิติ"
			}]
		},
		TRAFFIC_STATISTIC_LIST: {
			TITLE: "รายชื่อ Traffic Statistics",
			CONTENT: [{
				type: "name",
				title: "IP Address/MAC Address",
				content: "แสดงที่อยู่ IP และที่อยู่ MAC ของอุปกรณ์ไคลเอ็นต์ที่เกี่ยวข้อง."
			},{
				type: "name",
				title: "Packets ทั้งหมด",
				content: "แสดงจำนวนรวมของแพ็กเก็ตที่ส่งและรับโดยอุปกรณ์ของลูกค้าตั้งแต่เริ่มต้นของเซสชั่นหรือรีเซ็ตเคาน์เตอร์ล่าสุด."
			},{
				type: "name",
				title: "Bytes ทั้งหมด",
				content: "แสดงจำนวนไบต์ส่งและรับโดยอุปกรณ์ของลูกค้าตั้งแต่เริ่มต้นของเซสชั่นหรือรีเซ็ตเคาน์เตอร์ล่าสุด"
			},{
				type: "name",
				title: "Packets ปัจจุบัน",
				content: "แสดงหมายเลขปัจจุบันของแพ็คเก็ตที่ส่งและได้รับในช่วงเวลาที่กำหนด"
			},{
				type: "name",
				title: "Bytes ปัจจุบัน",
				content: "แสดงจำนวนไบต์ส่งและรับในช่วงเวลาที่กำหนด"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "ตัวเลือกการแสดงผลการรีเซ้ต(ศูนย์)และลบสถิติที่สอดคล้องกันจากรายการ"
			},{
				type: "name",
				title: "รีเฟรช",
				content: "คลิ๊กการปรับปรุงข้อมูลสถิติบนหน้าเว็บ"
			},{
				type: "name",
				title: "เริ่มใหม่ทั้งหมด",
				content: "คลิ๊กเพื่อรีเซ็ตค่า"
			},{
				type: "name",
				title: "ลบทั้งหมด",
				content: "คลิ๊กเพื่อลบข้อมูลทั้งหมดสถิติในรายการ"
			}]
		},
		
		SYSTEM_PARA_WIRELESS: {
			TITLE: "การเชื่อมต่อไวเลส 2.4GHz/5GHz",
			CONTENT: [{
				type: "name",
				title: "ช่วง Beacon",
				content: "ป้อนค่าระหว่าง 40 และ 1000 มิลลิวินาทีในการกำหนดระยะเวลาระหว่างสัญญาณแพ็คเก็ตที่มีการออกอากาศโดย Router ในการประสานเครือข่ายไวเลสเริ่มต้นคือ 100 มิลลิวินาที"
			},{
				type: "name",
				title: "RTS Threshold",
				content: "ป้อนค่าระหว่าง 1 และ 2346 เพื่อกำหนดขนาดแพ็คเก็ตของการส่งข้อมูลผ่านเราท์เตอร์ โดยค่าเริ่มต้น RTS (ขอส่ง) ขนาดธรณีประตูเป็น 2346 ถ้าขนาดแพ็คเก็ตสูงกว่าเกณฑ์ที่ตั้งไว้ล่วงหน้า, Router ส่งคำขอของเฟรมที่จะส่งสถานีรับโดยเฉพาะอย่างยิ่งการเจรจาและการส่งของกรอบข้อมูลหรืออื่น ๆ แพ็คเก็ตจะถูกส่งทันที"
			},{
				type: "name",
				title: "ช่วง DTIM",
				content: "ค่านี้กำหนดช่วงเวลาของข้อความบ่งชี้การจราจรการจัดส่ง (DTIM) ป้อนค่าระหว่างวันที่ 1 และ 15 มิลลิวินาที ค่าเริ่มต้นคือ 1, แสดงให้เห็นช่วงเวลา DTIM เป็นเช่นเดียวกับ Beacon Interval"
			},{
				type: "name",
				title: "ช่วงเวลาอัพเดท Group Key",
				content: "ใส่จำนวนวินาที (ขั้นต่ำ 30) ในการควบคุมช่วงเวลาสำหรับการเข้ารหัสที่สำคัญการต่ออายุโดยอัตโนมัติเริ่มต้นเป็น 0 บ่งชี้ที่สำคัญไม่มีการต่ออายุ"
			},{
				type: "name",
				title: "รูปแบบ WMM",
				content: "ฟังก์ชั่น WMM รับประกันแพ็คเก็ตที่มีข้อความมีความสำคัญสูงถูกส่งพิเศษ มันถูกเปิดใช้งานโดยค่าเริ่มต้นและขอแนะนำ"
			},{
				type: "name",
				title: "รูปแบบ Short GI",
				content: "ฟังก์ชั่นนี้จะเปิดใช้งานโดยค่าเริ่มต้นและแนะนำให้เพิ่มความจุข้อมูลโดยการลดระยะเวลาการรักษาความปลอดภัย (GI) เวลา"
			},{
				type: "name",
				title: "รูปแบบ AP Isolation",
				content: "หากคุณต้องการที่จะกำหนดขอบเขต และ จำกัดอุปกรณ์ไวเลสที่เชื่อมต่อกับเครือข่ายของคุณจากการโต้ตอบกับคนอื่นๆ แต่ยังคงความสามารถในการเข้าถึงอินเทอร์เน็ตให้เลือกช่องแยก AP เพื่อเปิดใช้งาน"
			},{
				type: "name",
				title: "TX Beamforming",
				content: "การส่งสัญญาณ ของ เทคโนโลยี Beamforming ใช้เทคนิคการประมวลผลโดยใช้ การตรวจสอบแบบเรียงลำดับ(sensor arrays) สำหรับกำหนดทิศทางของสัญญาณ. หากเปิดใช้งาน มันก็จะถูกนำมาใช้ในการส่งสัญญาณปลายทางเพื่อเสริมสร้างสัญญาณ Wi-Fi และขยายสัญญาณ Wi-Fiให้ครอบคลุม."
			},{
				type: "name",
				id: "help_syspara_wds_title",
				title: "เปิด WDS bridging",
				content: "เปิดใช้งาน WDS (ระบบการกระจายไวเลส) แก้คุณสมบัติที่จะช่วยให้เราท์เตอร์ที่จะเชื่อมกับจุดเชื่อมต่ออื่น (AP) ในเครือข่ายท้องถิ่นไวเลส (WLAN) หากเปิดใช้คุณลักษณะนี้กำหนดค่าดังต่อไปนี้:",
				children: [{
					type: "name",
					title: "SSID (bridge)",
					content: "ป้อน SSID ของ WAP (Wireless Access Point) นั้นเราท์เตอร์จะเชื่อมต่อกับลูกข่าย หรือใช้คุณลักษณะการสำรวจเพื่อหาเครือข่ายที่มีอยู่ทั้งหมด"
				},{
					type: "name",
					title: "สำรวจ",
					content: "คลิ๊กที่ปุ่มนี้เพื่อสแกนและแสดง SSID, BSSID, ความแรงของสัญญาณช่องทางและข้อมูลการรักษาความปลอดภัยของเครือข่ายไวเลสที่มีอยู่ทั้งหมดในช่วง เมื่อคุณเลือกเครือข่าย SSID ที่อยู่ MAC และการรักษาความปลอดภัยโดยอัตโนมัติจะเติม"
				},{
					type: "name",
					title: "MAC Address (bridged)",
					content: "ป้อนที่อยู่ MAC (BSSID) ใน 12 ตัวอักขระเลขฐานสิบหก (0-9, -f, AF) รูปแบบคั่นด้วยยัติภังค์ของจุดเชื่อมต่อไวเลสที่เราท์เตอร์จะเชื่อมต่อกับเป็นลูกค้า หากคุณเลือกที่ AP ที่ต้องการผ่านคุณสมบัติการสำรวจที่อยู่ MAC มีประชากรโดยอัตโนมัติ"
				},{
					type: "name",
					title: "การรักษาความปลอดภัย",
					content: "เลือกชนิดของการรักษาความปลอดภัยที่ถูกต้องของจุดเชื่อมต่อที่เลือก, ไม่มี, WPA-PSK / WPA2-PSK หรือ WEP หากคุณเลือกที่ AP ที่ต้องการผ่านคุณสมบัติการสำรวจข้อมูลการรักษาความปลอดภัยเป็นอย่างอัตโนมัติ",
					children: [{
						type: "name",
						title: "รหัสผ่าน",
						content: "ตัวเลือกนี้จะใช้ได้เมื่อชนิดการรักษาความปลอดภัย WPA-PSK / WPA2-PSK หรือ WEP ป้อนรหัสผ่านความปลอดภัยของจุดเชื่อมต่อที่เลือก"
					},{
						type: "name",
						title: "ข) การรับรองความถูกต้อง ประเภท",
						content: "ตัวเลือกนี้จะใช้ได้เฉพาะเมื่อชนิดของการรักษาความปลอดภัย WEP (แบบ Wired Equivalent Privacy) เลือกประเภทการตรวจสอบที่เหมาะสม (อัตโนมัติ, ระบบเปิดหรือใช้ร่วมกันที่สำคัญ) ที่ใช้ของจุดเชื่อมต่อที่เลือก"
					},{
						type: "name",
						title: "b. WEP Key Format",
						content: "ตัวเลือกนี้จะใช้ได้เฉพาะเมื่อชนิดของการรักษาความปลอดภัยเป็น WEP เลือกรูปแบบที่สำคัญ (ASCII หรือเลขฐานสิบหก) ที่ใช้ของ AP ที่เลือก"
					}]
				}]
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		SYSTEM_PARA_WPS: {	
			TITLE: "WPS",
			CONTENT: [{
				type: "paragraph",
				content: "เลือกเปิดใช้งานช่อง WPS และคลิ๊กบันทึกเพื่อเปิดใช้งาน WPS (Wi-Fi Protected Setup) ฟังก์ชั่นที่ช่วยให้คุณสามารถติดตั้งและเชื่อมต่ออุปกรณ์ที่ใช้ WPS โดยการกดปุ่ม"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		SYSTEM_PARA_NAT: {
			TITLE: "NAT",
			CONTENT: [{
				type: "name",
				title: "NAT",
				content: "เลือกช่อง Enable NAT และคลิ๊กบันทึกเพื่อเปิดใช้งาน NAT (แปลที่อยู่เครือข่าย) ฟังก์ชั่น."
			},{
				type: "note",
				title: "หมายเหตุ",
				content: "เมื่อ NAT ถูกปิดใช้งานการตั้งค่าในการ NAT Forwarding จะไม่มีผล"
			},{
				type: "name",
				title: "NAT Boost",
				content: "เลือกเปิดใช้งาน NAT ช่อง Boost และคลิ๊กบันทึกเพื่อให้แน่ใจว่าเราท์เตอร์ของคุณมีการส่งผ่านข้อมูลที่ดีที่สุด"
			},{
				type: "note",
				title: "หมายเหตุ",
				content: "เมื่อ NAT Boost ถูกเปิดใช้งาน QoS และสถิติการเข้าชมจะถูกปิดการใช้งานโดยอัตโนมัติ"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		SYSTEM_PARA_DOS: {
			TITLE: "DoS Protection Level Settings",
			CONTENT: [{
				type: "paragraph",
				content: "DoS Protection ระดับการป้องกันเราท์เตอร์ ICMP-FLOOD, UDP-FLOOD, และ TCP-FLOOD จากการโจมตี"
			},{
				type: "name",
				title: "ICMP ระดับการฟลัดแพ็คเก็ต",
				content: "ป้อนค่าระหว่าง 5 และ 7200 แพ็กเก็ต ICMP-FLOOD ที่จะเรียกการป้องกันฟลัดICMP ทันทีเมื่อจำนวนของแพ็กเก็ตเกินกว่าค่าที่ตั้งไว้ล่วงหน้าเกณฑ์"
			},{
				type: "name",
				title: "UDP ระดับการฟลัดแพ็คเก็ต",
				content: "ใส่ค่าระหว่าง 5 และ 7200 แพ็คเก็ต UDP จะเรียก UDP-FLOOD ป้องกันน้ำท่วมได้ทันทีเมื่อจำนวนของแพ็กเก็ตเกินกว่าค่าที่ตั้งไว้ล่วงหน้าเกณฑ์"
			},{
				type: "name",
				title: "TCP-ระดับการฟลัดแพ็คเก็ต",
				content: "ใส่ค่าระหว่าง 5 และ 7200 แพคเก็ต TCP-SYN ที่จะเรียกการป้องกัน TCP-SYN-FLOOD ทันทีเมื่อจำนวนของแพ็กเก็ตเกินกว่าค่าที่ตั้งไว้ล่วงหน้าเกณฑ์"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		SYSTEM_PARA_DUPLEX: {
			TITLE: "Duplex",
			CONTENT: [{
				type: "name",
				title: "Duplex",
				content: "เลือกประเภทเพล็กซ์จากรายการแถบเลื่อนลง"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		SYSTEM_PARA_LED:{
			TITLE: "LED",
			CONTENT: [{
				type: "name",
				title: "เปิดโหมดกลางคืน",
				content: "เลือกช่องกาเครื่องหมายนี้เพื่อปิดไฟ LED ในช่วงโหมดกลางคืนโดยไมส่งผลต่อสมรรถนะของเราเตอร์"
			},{
				type: "name",
				title: "ช่วงเวลาโหมดกลางคืน",
				content: "ระบุช่วงเวลาที่จะใช้โหมดกลางคืน"
			},{
				type: "paragraph",
				content: "คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		OPEN_VPN:{
			TITLE: "OpenVPN",
			CONTENT: [{
				type: "paragraph",
				content: "ด้วย OpenVPN คุณสามารถใช้อินเทอร์เน็ตที่ปลอดภัยในการเข้าถึงเครือข่ายของคุณเมื่อคุณออกจากบ้าน ในการใช้บริการ VPN คุณต้องกำหนดค่า DNS แบบไดนามิก (แนะนำ) หรือกำหนดที่อยู่ IP คงที่สำหรับพอร์ต WAN ของเราเตอร์ และเวลาของระบบของคุณควรจะตรงกับอินเทอร์เน็ต"
			},{
				type: "name",
				title: "เปิดใช้ VPN Server",
				content: "เลือกเพื่อเปิดใช้งานเซิร์ฟเวอร์ OpenVPN"
			},{
				type: "name",
				title: "รายการบริการ",
				content: "เืลือกโปรโตคอลการสื่อสารสำหรับเซิร์ฟเวอร์ OpenVPN: UDP หรือ TCP"
			},{
				type: "name",
				title: "พอร์ตบริการ",
				content: "ป้อนหมายเลขพอร์ตการสื่อสารระหว่าง 1024 และ 65535 โดยพอร์ตบริการเริ่มต้นและที่พบบ่อยคือ 1194"
			},{
				type: "name",
				title: "ซับเน็ต/เน็ตมาส์ก VPN",
				content: "ป้อนช่วงของ IP address ที่เซิร์ฟเวอร์ OpenVPN สามารถเช่าให้กับไคลเอนต์"
			},{
				type: "name",
				title: "การเข้าถึงของไคลเอนต์",
				content: "เลือกประเภทการเข้าถึงสำหรับไคลเอนต์ OpenVPN ของคุณ",
				children: [{
					type: "name",
					title: "เครือข่ายโฮมเท่านั้น",
					content: "ลูกค้าสามารถเข้าถึงเครือข่ายภายในบ้าน เส้นทางเริ่มต้นของลูกค้าจะไม่สามารถเปลี่ยนแปลงได้"
				},{
					type: "name",
					title: "อินเทอร์เน็ตและเครือข่ายโฮม",
					content: "ลูกค้าสามารถเข้าถึงเครือข่ายภายในบ้านและเว็บไซต์อินเทอร์เน็ตหรือบริการที่มีข้อจำกัดทางภูมิศาสตร์เมื่อคุณออกของประเทศ เส้นทาเริ่มต้นของลูกค้าจะได้รับการเปลี่ยนแปลง"
				}]
			}]
		},
		OPEN_VPN_CERTIFICATE:{
			TITLE: "ใบรับรอง",
			CONTENT: [{
				type: "paragraph",
				content: "ใช้ใบรับรองสำหรับข้อมูลและการระบุลักษณะของการเชื่อมต่อ VPN สำหรับคอมพิวเตอร์ระยะไกล"
			},{
				type: "name",
				title: "สร้าง",
				content: "คลิกเพื่อสร้างใบรับรองใหม่"
			}]
		},
		OPEN_VPN_CONF:{
			TITLE: "ไฟล์การกำหนดค่า",
			CONTENT: [{
				type: "paragraph",
				content: "ไคลเอนต์ระยะไกลจะใช้แฟ้มการกำหนดค่าการเข้าถึงเราเตอร์ของคุณ"
			},{
				type: "name",
				title: "ส่งออก",
				content: "คลิกเพื่อบันทึกการกำหนดค่า OpenVPN"
			}]
		},
		OPEN_VPN_GUIDE:{
			TITLE: "คู่มือการติดตั้ง VPN Client",
			CONTENT: [{
				type: "step",
				title: "หากต้องการเิปิดใช้และเชื่อมต่ออุปกรณ์ไคลเอนต์ของคุณกับเซิร์ฟเวอร์ OpenVPN:",
				content:[{
					type: "paragraph",
					content: "Before you configure the OpenVPN server, please configure Dynamic DNS Service (recommended) or assign a static IP address for Wan port. And make sure your external port of NAT settings is not the service port and DMZ is disabled, and also your System Time is correct."
				},
					"1. Select Enable VPN Server.",
					"2. Configure the OpenVPN server parameters (Service Type, Service Port, Client Access and VPN Subnet/Netmask) and click Save.",
					"3. Click Export to save the configuration file.",
					"4. On your client devices, download and install the OpenVPN client utility from <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a><br> The official supported platforms include Windows, Mac OSX, Linux.",
					"5. Launch the OpenVPN client utility and add a new VPN connection using the saved configuration file to connect your client device to the VPN server."
				]},{
					type: "note",
					title: "หมายเหตุ",
					content: "หากต้องการข้อมูลเพิ่มเติมเกี่ยวกับไคลเอนต์ OpenVPN ให้คลิกที่ <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
				}]
		},
		PPTP_VPN:{
			TITLE: "PPTP VPN",
			CONTENT: [{
				type: "paragraph",
				content: "เลือกช่องกาเครื่องหมายนี้เพื่อเปิดใช้เซิร์ฟเวอร์ PPTP VPN"
			},{
				type: "name",
				title: "เปิดใช้ VPN Server",
				content: "ป้อนช่วงของ IP address (ไคลเอนต์ไม่เกิน 10 เครื่อง) ที่เซิร์ฟเวอร์ PPTP VPN สามารถเช่าให้กับไคลเอนต์"
			},{
				type: "name",
				title: "IP Address ของไคลเอนต์",
				content: "ป้อนช่วงของ IP address (ไคลเอนต์ไม่เกิน 10 เครื่อง) ที่เซิร์ฟเวอร์ PPTP VPN สามารถเช่าให้กับไคลเอนต์"
			},{
				type: "name",
				title: "อนุญาตให้เข้าถึงแซมบ้า (Network Place)",
				content: "เลือกที่จะอนุญาตให้ไคลเอนต์ VPN ของคุณเข้าถึงเซิร์ฟเวอร์แซมบ้าในประเทศของคุณ"
			},{
				type: "name",
				title: "อนุญาตให้ NetBIOS passthrough",
				content: "เลือกที่จะอนุญาตให้ไคลเอนต์ VPN ของคุณเพื่อเข้าถึงเซิร์ฟเวอร์แซมบ้าของคุณโดยใช้ชื่อ NetBIOS"
			},{
				type: "name",
				title: "อนุญาตให้เชื่อมต่อแบบไม่เข้ารหัส",
				content: "เลือกที่จะช่วยให้การเชื่อมต่อที่ไม่เข้ารหัสไปยังเซิร์ฟเวอร์ VPN ของคุณ"
			}]
		},
		PPTP_ACCOUNT_LIST:{
			TITLE: "รายการบัญชี",
			CONTENT: [{
				type: "paragraph",
				content: "ตารางนี้จะแสดงบัญชีที่สามารถใช้ในการเชื่อมต่อกับเซิร์ฟเวอร์ PPTP VPN ระยะไกล"
			},{
				type: "step",
				title: "เพิ่มบัญชี PPTP VPN",
				content: [
					"1. คลิก Add",
					"2. คลิกบันทึกเพื่อบันทึกการตั้งค่าทั้งหมดของคุณ",
					"3. คลิก OK"
				]
			},{
				type: "step",
				title: "แก้ไขหรือลบบัญชีที่มีอยู่",
				content: "ในตารางให้คลิกที่ไอคอนแก้ไขหรือไอคอนถังขยะที่สอดคล้องกับบัญชีที่คุณต้องการที่จะแก้ไขหรือลบ"
			}]
		},
		PPTP_VPN_GUIDE:{
			TITLE: "คู่มือการติดตั้ง VPN Client",
			CONTENT: [{
				type: "step",
				title: "หากต้องการเิปิดใช้และเชื่อมต่ออุปกรณ์ไคลเอนต์ของคุณกับเซิร์ฟเวอร์ PPTP VPN:",
				content:[{
					type: "paragraph",
					content: "ก่อนกำหนดค่าเซิร์ฟเวอร์ PPTP VPN โปรดกำหนดค่า Dynamic DNS Service (แนะนำ) หรือมอบหมาย IP address แบบสแตติคสำหรับพอร์ต WAN และพอร์ตภายนอกของการตั้งค่า NAT ไม่ใช่ 1723 และปิดใช้งาน DMZ แล้ว และเวลาระบบของคุณถูกต้อง"
				},
					"1. Select Enable VPN Server.",
					"2. Configure the PPTP VPN server parameters and click Save.",
					"3. On your client devices, create a PPTP VPN connection. The official supported platforms include Windows, Mac OSX, Linux, iOS, and Android.",
					"4. Launch the PPTP VPN program, add a new connection and enter the domain name of the registered DDNS service or the static IP address that assigned to the WAN port, to connect your client device to the PPTP VPN server."
				]}
			]
		},
		VPN_CONNNECTION:{
			TITLE: "การเชื่อมต่อ VPN",
			CONTENT: [{
				type: "paragraph",
				content: "หน้านี้แสดงไคลเอนต์ที่กำลังเชื่อมต่อกับเซิร์ฟเวอร์ OpenVPN และ PPTP VPN ที่โฮสต์บนเราเตอร์"
			},{
				type: "paragraph",
				content: "คลิกไอคอนลบเพื่อตัดการเชื่อมต่อไคลเอนต์ที่เกี่ยวข้อง"
			}]
		},
		BASIC_NETWORK_INTEREST: {
			TITLE: "อินเทอร์เน็ต",
			CONTENT: [{
				type: "name",
				title: "สถานะอินเทอร์เน็ต",
				content: "แสดงสถานะการเชื่อมต่ออินเทอร์เน็ตของเราท์เตอร์"
			},{
				type: "name",
				title: "รูปแบบการเชื่อมต่ออินเทอร์เน็ต",
				content: "แสดงชนิดของการเชื่อมต่ออินเทอร์เน็ต"
			},{
				type: "name",
				title: "IP Address",
				content: "แสดง IP Address ปัจจุบันของเราท์เตอร์"
			},{
				type: "name",
				title: "การเชื่อมต่อสำรอง/IP Address",
				content: "การแสดงชนิดการเชื่อมต่อสำรองและ IP Address"
			}]
		},
		BASIC_NETWORK_ROUTER: {
			TITLE: "เราเตอร์",
			CONTENT: [{
				type: "title",
				title: "การเชื่อมต่อไวเลส 2.4GHz/5GHz"
			},{
				type: "name",
				title: "ชื่อเครือข่ายไวเลส",
				content: "แสดงชื่อของเครือข่ายไวเลสปัจจุบันขของย่านความถี่ 2.4GHz/5GHz"
			},{
				type: "name",
				title: "ช่องสัญญาณ",
				content: "แสดงช่องทางlสื่อสารของเครือข่ายไวเลส 2.4GHz/5GHz"
			},{
				type: "name",
				title: "MAC",
				content: "แสดง MAC Address ของเครือข่ายไวเลส 2.4GHz/5GHz"
			},{
				type: "title",
				title: "เครือข่ายสำหรับบุคคลคนภายนอก   2.4GHz/5GHz"
			},{
				type: "name",
				title: "สถานะ",
				content: "แสดงสถานะเครือข่ายไวเลสสำหรับคนภายนอก  2.4GHz/5GHz ถูกเปิดหรือปิด"
			},{
				type: "name",
				title: "ชื่อเครือข่ายไวเลส",
				content: "แสดงชื่อของเครือข่ายไวเลสสำหรับคนภายนอก"
			}]
		},
		BASIC_NETWORK_CLIENTS: {
			TITLE: "Wired/Wireless Clients",
			CONTENT: [{
				type: "name",
				title: "ชื่อ",
				content: "แสดงชื่อผู้ใช้ที่เชื่อมต่อกับเราท์เตอร์"
			},{
				type: "name",
				title: "IP Address",
				content: "แสดง IP Address ของผู้ใช้"
			},{
				type: "name",
				title: "MAC Address",
				content: "แสดง MAC Address ของผู้ใช้"
			}]
		},
		BASIC_NETWORK_PRINTER: {
			TITLE: "ปรินเตอร์",
			CONTENT: [{
				type: "name",
				title: "ชื่อ",
				content: "แสดงชื่อของปรินเตอร์ที่เชื่อมต่อกับเราท์เตอร์ผ่าน USB"
			}]
		},
		BASIC_NETWORK_USB: {
			TITLE: "USB Disk",
			CONTENT: [{
				type: "name",
				title: "USB Disk",
				content: "แสดงยี่ห้อของ USB ที่เชื่อมต่อกับเราท์เตอร์"
			},{
				type: "name",
				title: "รวม",
				content: "แสดงปริมาณความจุของ USB"
			},{
				type: "name",
				title: "สามารถใช้",
				content: "แสดงพื้นที่ของ USB ที่สามารถใช้งานได้"
			}]
		},
		BASIC_INTERNET: {
			TITLE: "อินเทอร์เน็ต",
			CONTENT: [{
				type: "name",
				title: "ตรวจจับอัตโนมัติ",
				content: "คลิกปุ่มนี้เพื่อให้เราท์เตอร์หาชนิดการเชื่อมต่ออินเทอร์เน็ตโดยอัตโนมัติ"
			},{
				type: "note",
				title: "หมายเหตุ",
				content: "ถ้าคุณไม่แน่ใจประเภทการเชื่อมต่ออินเทอร์เน็ตที่คุณมี, ให้เลือกค้นหาโดยอัตโนมัติหรือติดต่อกับผู้ให้บริการอินเทอร์เน็ตของคุณเพื่อช่วยเหลือ"
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : Static IP",
			},{
				type: "name",
				title: "IP Address/Subnet Mask/Default Gateway/Primary DNS/Secondary DNS",
				content: "เข้าสู่ข้อมูลที่ถูกจัดการโดยผู้ให้บริการอินเทอร์เน็ตของคุณ"
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : Dynamic IP",
			},{
				type: "name",
				title: "ห้ามคัดลอก MAC Address/คัดลอก MAC Address ปัจจุบัน",
				content: "เลือกนี้เพื่อก็อปปี้ MAC Address หรือไม่, ตามผู้ให้บริการอินเทอร์เน็ต"
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต : PPPoE",
			},{
				type: "name",
				title: "ชื่อผู้ใช้/รหัสผ่าน",
				content: "ใส่ชื่อผู้ใช้และรหัสผ่านที่ได้จากผู้ให้บริการอินเทอร์เน็ตของคุณ ซึ่งในส่วนนี้ต้องคำนึงถึงcase-sensitive"
			},{
				type: "title",
				title: "ชนิดการเชื่อมต่ออินเทอร์เน็ต :  L2TP/PPTP",
			},{
				type: "name",
				title: "ชื่อผู้ใช้/รหัสผ่าน",
				content: "ใส่ชื่อผู้ใช้และรหัสผ่านที่ได้จากผู้ให้บริการอินเทอร์เน็ตของคุณ ซึ่งในส่วนนี้ต้องคำนึงถึงcase-sensitive"
			},{
				type: "name",
				title: "การเชื่อมต่อสำรอง (Dynamic IP หรือ Static IP)",
				children: [{
					type: "name",
					title: "Dynamic IP",
					content: "ให้ทำการเลือกนี้ถ้าหมายเลขIPและซับเนสแมสถูกระบุโดยอัตโนมัติโดยผู้ให้บริการอินเทอร์เน็ต"
				},{
					type: "name",
					title: "Static IP",
					content: "เลือกหาก IP address และ Subnet Mask ถูกให้มาโดย ISP และใส่ข้อมูลเหล่านี้ลงในฟิลด์ข้อมูลที่สอดคล้องกัน"
				}]
			},{
				type: "name",
				title: "IP เซิร์ฟเวอร์ VPN /ชื่อโดเมน",
				content: "ใส่หมายเลขIPเซิร์ฟเวอร์ของ VPN หรือ ชื่อของโดเมนที่ถูกระบุโดยผู้ให้บริการอินเทอร์เน็ต"
			},{
				type:"paragraph",
				content:"คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		BASIC_WIRELESS: {
			TITLE: "การตั้งค่าเครือข่ายไวเลส",
			CONTENT: [{
				type: "name",
				title: "เปิดใช้งานสัญญาณไวเลส",
				content: "เลือกนี้เพื่อเปิดการใช้งานย่านความถี่ 2.4GHz/5GHz"
			},{
				type: "name",
				title: "ชื่อเครือข่ายไวเลส (SSID)",
				content: "คุณสามารถปล่อยให้ใช้ชื่อเดิมของมันเป็นชื่อเริ่มต้นได้ หรือใส่ชื่อใหม่ (สามารถใส่ได้ 32 ตัวอักขระ) ซึ่งในส่วนนี้ต้องคำนึงถึง case-sensitive"
			},{
				type: "name",
				title: "ซ่อน SSID",
				content: "เลือกนี้ถ้าคุณต้องการซ่อน ชื่อเครือข่าย (SSID) 2.4GHz จากรายชื่อเครือข่ายไวไฟ"
			},{
				type: "name",
				title: "รหัสผ่าน",
				content: "ใส่รหัสผ่านระหว่าง 8 และ 63  ตัวอักขระ ASCII , หรือระหว่าง 8 และ 64  ตัวอักขระเลขฐานสิบหก ซึ่งในส่วนนี้ต้องคำนึงถึง case-sensitive"
			},{
				type:"paragraph",
				content:"คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		BASIC_DEVICE_SETTINGS: {
			TITLE: "ตั้งค่าอุปกรณ์",
			CONTENT: [{
				type: "paragraph",
				content: "การตั้งค่าอุปกรณ์การแสดงผลให้สอดคล้องกับข้อมูลอุปกรณ์ USB ผ่าน USB Port"
			},{
				type: "name",
				title: "ค้นหา",
				content: "โดยทั่วไป เราท์เตอร์ตรวจพบอุปกรณ์ที่เข้ามาเชื่อมต่อใหม่โดยอัตโนมัติ ถ้าไม่,ให้คลิกที่ปุ่ม Scan เพื่อหาอุปกรณ์ที่มาเชื่อมต่อใหม่และ Refresh หน้าจอเพื่ออัพเดทข้อมูล"
			},{
				type: "name",
				title: "ปริมาณ",
				content: "แสดงปริมาณของ USB."
			},{
				type: "name",
				title: "ความจุ",
				content: "แสดงปริมาณความจุรวมของ USB"
			},{
				type: "name",
				title: "พื้นที่ว่าง",
				content: "แสดงพื้นว่างที่สามารถใช้ได้ในปัจจุบัน"
			},{
				type: "name",
				title: "ถอดด้วยความปลอดภัย",
				content: "คลิกปุ่มนี้เพื่อนำอุปกรณ์ออกจากการเชื่อมต่ออย่างปลอดภัยก่อนดึงอุปกรณ์ออกจากเราท์เตอร์",
				children: [{
					type: "paragraph",
					content: "กรุณาจำไว้ว่าปุ่ม Safely Remove จะปรากฎขึ้นต่อเมื่อ USB เชื่อมต่อกับเราท์เตอร์ นอกจากนี้คุณไม่สามารถ Safely Remove ได้ถ้าหาก USB มีการทำงานอยู่"
				}]
			},{
				type: "name",
				title: "สถานะ",
				content: "ช่องนี้จะปรากฎขึ้นต่อเมื่อ USB เชื่อมต่อกับเราท์เตอร์ เลือกเปิดแบ่งปันไฟล์ของ USB"
			}]
		},
		BASIC_SHARING_SETTINGS: {
			TITLE: "ตั้งค่าการแชร์",
			CONTENT: [{
				type: "name",
				title: "ชื่อเครือข่าย/Media Server",
				content: "แสดงชื่อที่ถูกใช้เพื่อเข้าสู่การเชื่อมต่ออุปกรณ์ USB."
			},{
				type:"paragraph",
				content:"คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
		BASIC_FOLDER_SHARING: {
			TITLE: "การแชร์โฟลเดอร์",
			CONTENT: [{
				type: "name",
				title: "แชร์ทั้งหมด",
				content: "เปิดเพื่อใช้ไฟล์และโฟลเดอร์ทั้งหมดร่วกันหรือปิดการใช้งานร่วมกันเพื่อแบ่งบันโฟลเดอร์ที่เลือกไว้"
			},{
				type: "name",
				title: "เปิดการแสดงตัวตน",
				content: "คำแนะนำ เปิดระบบยืนยันตัวเพื่อต้องการให้ผู้ใช้เข้าถึงไฟล์ที่แบ่งบันโดยใช้ ชื่อผู้ใช้ และ รหัสผ่าน"
			},{
				type: "name",
				title: "ชื่อโฟลเดอร์",
				content: "แสดงชื่อโฟลเดอร์ที่ใช้งานร่วมกัน"
			},{
				type: "name",
				title: "ที่อยู่ของโฟลเดอร์",
				content: "แสดงเส้นทางของโฟลเดอร์ที่ใช้งานร่วมกัน"
			},{
				type: "name",
				title: "แบ่งปันสื่อ",
				content: "บ่งบอกว่าอนุญาตให้ใช้งานร่วมกันของไฟล์สื่อหรือไม่"
			},{
				type: "name",
				title: "ชื่อ",
				content: "แสดงชื่อของไฟล์ที่ใช้งานร่วมกัน"
			},{
				type: "name",
				title: "สถานะ",
				content: "แสดงสถานะของโฟลเดอร์ที่ใช้ร่วมกันโดยไฟแสดงสถานะ"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "แสดงพื้นว่างที่สามารถใช้ได้ในปัจจุบัน"
			},{
				type: "name",
				title: "เพิ่ม",
				content: "คลิกปุ่มนี้เพื่อสร้างรายการใหม่"
			},{
				type: "name",
				title: "ลบ",
				content: "คลิกปุ่มนี้เพื่อลบรายจากตาราง"
			},{
				type: "name",
				title: "เลือก",
				content: "คลิกเพื่อค้นหาโฟลเดอร์"
			},{
				type: "name",
				title: "อนุญาตให้ Guest Network เข้าถึง",
				content: "เลือกเพื่ออนุญาตให้ผู้ใช้บนเครือข่ายสำหรับบุคคลภายนอกเข้าสู่ระบบการใช้งานร่วมกัน"
			},{
				type: "name",
				title: "เปิดการแสดงตัวตน",
				content: "เลือกเพื่อให้ผู้ใช้เข้าสู่การใช้งานร่วมกันของโฟลเดอร์ด้วย ชื่อผู้ใช้ และ รหัสผู้ใช้"
			},{
				type: "name",
				title: "เปิด Write Access",
				content: "เลือกเพื่ออนุญาตให้ผู้ใช้เปลี่ยนแปลงเนื้อหาโฟลเดอร์"
			},{
				type: "name",
				title: "เปิด Media Sharing",
				content: "เลือกเพื่อเปิดให้ใช้การใช้งานร่วมกันของสื่อ"
			}]
		},
		BASIC_PRINT_SERVER: {
			TITLE: "ปรินเตอร์เซิร์ฟเวอร์",
			CONTENT: [{
				type: "name",
				title: "ปรินเตอร์เซิร์ฟเวอร์",
				content: "สลับเพื่อเปิดใช้งานฟังก์ชั่นปริ้นเซิร์ฟเวอร์"
			},{
				type: "name",
				title: "ชื่อปรินเตอร์",
				content: "แสดงชื่อของปรินเตอร์ที่เชื่อมต่อกับเราท์เตอร์"
			}]
		},
		BASIC_PARENTAL_CONTROL: {
			TITLE: "Parental Control",
			CONTENT: [{
				type: "name",
				title: "Parental Control",
				content: "เลือก On เพื่อเปิดการใช้งานระบบควบคุมโดยผู้ปกครอง ค่าพื้นฐานฟังก์ชั่นนี้ปิดอยู่"
			}]
		},
		BASIC_PARENTAL_DEVICE: {
			TITLE: "อุปกรณ์ที่อยู่ภายใต้การควบคุมโดยผู้ปกครอง",
			CONTENT: [{
				type: "paragraph",
				content: "แสดงรายชื่ออุปกรณ์ที่อยู่ภายใต้การควบคุมโดนผู้ปกครอง"
			},{
				type: "name",
				title: "ชื่ออุปกรณ์",
				content: "แสดงชื่ออุปกรณ์ที่เชื่อมต่อในปัจจุบันที่อยู่ภายใต้ระบบควบคุมโดยผู้ปกครอง"
			},{
				type: "name",
				title: "MAC Address",
				content: "แสดง MAC Address ของอุปกรณ์ที่เชื่อมต่อทั้งหมดภายใต้ระบบควบคุมโดยผู้ปกครอง"
			},{
				type: "name",
				title: "เวลาการเข้าสู่อินเตอร์เน็ต",
				content: "แสดงการจำกัดช่วงเวลาในการเข้าถึง เวลาที่กำหนดจะมีผลขึ้นอยู่กับเวลาของเราเตอร์ซึ่งสามารถตั้งค่าได้ใน \"เครื่องมือระบบ-> การตั้งค่าเวลา\""
			},{
				type: "name",
				title: "บรรยาย",
				content: "แสดงรายละเอียดโดยสรุปในการเชื่อมต่อของอุปกรณ์"
			},{
				type: "name",
				title: "สถานะ",
				content: "แสดงสถานะปัจจุบัน (enabled or disabled) ของ Parental Controls ของอุปกรณ์ที่เกี่ยวข้อง"
			},{
				type: "name",
				title: "การเปลี่ยนแปลง",
				content: "แสดงตัวเลือกเพื่อ Modify หรือ Delete ผู้ใช้ให้สอดคล้องกัน"
			},{
				type: "step",
				title: "หากต้องการจำกัดอุปกรณ์ใหม่",
				content:[
					"1. คลิก Add",
					"2. คลิก View Existing Devices และเลือกอุปกร์ที่เชื่อมต่อในปัจจุบันจาก  Access Devices List หรือใส่ Device Name และ MAC Address เพื่อเพิ่มอุปกรณ์ที่ไม่ได้เชื่อมต่ออยู่",
					"3.คลิกไอคอน Internet Access Time เพื่อระบุช่วงเวลาในการเข้าสู่อินเทอร์เน็ต",
					"4. ใส่รายละเอียดในช่อง  Description (ถ้าต้องการ)",
					"5. เลือก Enable",
					"6. คลิก OK"
				]
			},{
				type: "paragraph",
				content: "การแก้ไขหรือลบรายการควบคุมโดยผู้ปกครอง , เพียงแค่คลิกที่ไอคอนแก้ไขเพื่อแก้ไขข้อมูล หรือ ไอคอนถังขยะเพื่อลบรายการที่เกี่ยวข้อง"
			},{
				type: "paragraph",
				content: "ในการลบหลายรายการ ให้เลือกทั้งหมดแล้วคลิก  Delete บนตาราง"
			}]
		},
		BASIC_GUEST_NETWORK: {
			TITLE: "เครือข่ายสำหรับบุคคลคนภายนอก",
			CONTENT: [{
				type: "paragraph",
				content: "อนุญาตให้คุณแยกเครือข่ายด้วยการแยกเครือข่ายไวเลส (SSID)และรหัสผ่าน บุคคลภายนอกสามารถเข้าสู่เครือข่ายไวเลสของคุณได้"
			},{
				type: "name",
				title: "อนุญาตให้อุปกรณ์เครือข่ายไวเลสมองเห็น",
				content: "เลือกช่องนี้เพื่ออนุญาตให้อุปกรณ์เครือข่ายไวเลสมองเห็นเครือข่ายสำหรับคนภายนอก"
			},{
				type: "name",
				title: "อนุญาตให้ Guest Network เข้าถึงเครือข่ายภายใน",
				content: "เลือกนี้เพื่ออนุญาตให้อุปกรณ์เครือข่ายไวเลสบนเครือข่ายสำหรับคนภายนอกเข้าสู่เครือข่ายภายในเพื่อแบ่งปันข้อมูลหรือปริ๊นเตอร์"
			},{
				type: "name",
				title: "เปิด Guest Network",
				content: "เลือกช่องนี้เพื่อเปิดการใช้งานเครือข่ายสำหรับคนภายนอก"
			},{
				type: "name",
				title: "ชื่อเครือข่ายไวเลส (SSID)",
				content: "คุณสามารถปล่อยให้ใช้ชื่อเดิมของมันเป็นชื่อเริ่มต้นได้ หรือใส่ชื่อใหม่ (สามารถใส่ได้ 32 ตัวอักขระ)"
			},{
				type: "name",
				title: "ซ่อน SSID",
				content: "เลือกนี้ถ้าคุณต้องการซ่อนเครือข่ายสำหรับคนภายนอกจากรายชื่อเครือข่าย Wi-Fi"
			},{
				type: "name",
				title: "รหัสผ่าน",
				content: "ให้ใช้รหัสผ่านที่สร้างแบบสุ่มหรือสร้างรหัสผ่านระหว่าง 8 ถึง 63 ตัวอักขระ ASCII หรือระหว่าง 8 และ 64 อักขระเลขฐานสิบหก (0-9, a-f, A-F)."
			},{
				type:"paragraph",
				content:"คลิก Save เพื่อบันทึกทุกการตั้งค่าของคุณ"
			}]
		},
			BASIC_ACCOUNT_LOGIN:{
			TITLE:"TP-Link คลาวด์",
			CONTENT:[{
				type:"paragraph",
				content:"บริการ TP-Link Cloud ช่วยให้คุณสามารถตรวจสอบเครือข่ายระยะไกลของคุณในเวลาจริง ซึ่งสามารถเข้าถึงและจัดการอุปกรณ์ TP-Link ของคุณจากอินเทอร์เน็ตทุกที่ทุกเวลา"
			}]
		},
		ACCOUNT_INFO:{
			TITLE:"ข้อมูลบัญชี",
			CONTENT:[{
				type:"paragraph",
				content:"รูปภาพแสดงข้อมูลของ TP Link ID  คุณสามารถแก้ไขข้อมูลได้โดยคลิกที่ ไอคอน Edit"
			}]
		},
		DEVICE_INFO:{
			TITLE:"ข้อมูลอุปกรณ์",
			CONTENT:[{
				type:"paragraph",
				content:"แสดงข้อมูลของอุปกรณ์ของคุณรวมถึงบัญชีของ TP-Link Cloud สำหรับการจัดการอุปกรณ์"
			}]
		},
		BOUND_ACCOUNT:{
			TITLE:"ผูกกับบัญชี",
			CONTENT:[{
				type:"paragraph",
				content:"ตารางนี้จะแสดงทุกบัญชี TP-Link Cloud ที่ถูกผูกไว้ในปัจจุบันไปยังอุปกรณ์"
			},{
				type:"step",
				title:"การผูกบัญชีผู้ใช้",
				content:["1. คลิกผูกบัญชี",
				"2. ป้อนอีเมลที่ลงทะเบียนที่คุณต้องการที่จะผูก",
				"3. คลิกบันทึก"]
			}]

		}

	};
})(jQuery);

