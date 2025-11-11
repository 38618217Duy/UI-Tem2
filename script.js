// MOL Logistics Vietnam - JavaScript
// Multi-language support & interactive features

// Language translations
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_tracking: "Tracking",
        nav_about: "About Us",
        nav_contact: "Contact",
        
        // Hero
        hero_title: "Global Logistics Excellence",
        hero_subtitle: "Connecting Vietnam to the World with Reliable Shipping and Logistics Solutions",
        hero_btn_services: "Our Services",
        hero_btn_tracking: "Track Shipment",
        
        // Services
        services_title: "Our Services",
        services_desc: "Comprehensive logistics solutions tailored to your business needs",
        service_ocean_title: "Ocean Freight",
        service_ocean_desc: "Full Container Load (FCL) and Less than Container Load (LCL) services with worldwide coverage. Competitive rates and reliable transit times.",
        service_ocean_f1: "FCL & LCL Services",
        service_ocean_f2: "Global Network Coverage",
        service_ocean_f3: "Temperature Controlled",
        service_air_title: "Air Freight",
        service_air_desc: "Fast and efficient air cargo services for time-sensitive shipments. Door-to-door delivery with customs clearance support.",
        service_air_f1: "Express Delivery",
        service_air_f2: "Customs Clearance",
        service_air_f3: "Dangerous Goods Handling",
        service_warehouse_title: "Warehousing",
        service_warehouse_desc: "Modern warehouse facilities with inventory management systems. Pick & pack, cross-docking, and distribution services available.",
        service_warehouse_f1: "Inventory Management",
        service_warehouse_f2: "Cross-Docking",
        service_warehouse_f3: "Distribution Services",
        service_land_title: "Land Transportation",
        service_land_desc: "Domestic and cross-border trucking services. Full truckload (FTL) and less than truckload (LTL) options with real-time tracking.",
        service_land_f1: "FTL & LTL Services",
        service_land_f2: "Cross-Border Transport",
        service_land_f3: "Real-Time GPS Tracking",
        service_customs_title: "Customs Brokerage",
        service_customs_desc: "Expert customs clearance services for import and export. Documentation support and compliance management.",
        service_customs_f1: "Import/Export Clearance",
        service_customs_f2: "Compliance Consulting",
        service_customs_f3: "Duty & Tax Management",
        service_supply_title: "Supply Chain Solutions",
        service_supply_desc: "End-to-end supply chain management and optimization. Consulting services to improve efficiency and reduce costs.",
        service_supply_f1: "Supply Chain Consulting",
        service_supply_f2: "Process Optimization",
        service_supply_f3: "Technology Integration",
        
        // Tracking
        tracking_title: "Track Your Shipment",
        tracking_desc: "Enter your tracking number to get real-time updates on your shipment status",
        tracking_placeholder: "Enter tracking number (e.g., MOL123456789)",
        tracking_btn: "Track Now",
        tracking_feature1: "Real-time Updates",
        tracking_feature2: "Email Notifications",
        tracking_feature3: "Location History",
        
        // About
        about_title: "About MOL Logistics Vietnam",
        about_p1: "MOL Logistics (Vietnam) Co., Ltd. is a leading provider of comprehensive logistics solutions in Vietnam, backed by the global expertise of Mitsui O.S.K. Lines (MOL), one of the world's largest shipping companies.",
        about_p2: "With a strong presence in major Vietnamese cities including Ho Chi Minh City and Hanoi, we offer integrated logistics services that connect Vietnam to the world through our extensive global network spanning over 650 locations in more than 100 countries.",
        stat_countries: "Countries Worldwide",
        stat_locations: "Global Locations",
        stat_support: "Customer Support",
        stat_experience: "Years in Vietnam",
        about_feature1_title: "Trusted Partner",
        about_feature1_desc: "Part of MOL Group with over 130 years of maritime excellence",
        about_feature2_title: "Global Network",
        about_feature2_desc: "Seamless connections to major ports and cities worldwide",
        about_feature3_title: "Sustainability",
        about_feature3_desc: "Committed to environmental responsibility and green logistics",
        
        // Contact
        contact_title: "Contact Us",
        contact_desc: "Get in touch with our team for logistics solutions tailored to your needs",
        contact_select_branch: "Select Branch",
        branch_hcm: "Ho Chi Minh City Office",
        branch_hanoi: "Hanoi Office",
        branch_haiphong: "Hai Phong Office",
        branch_danang: "Da Nang Office",
        contact_address_title: "Head Office - Ho Chi Minh City",
        contact_address: "18th Floor, Vincom Center, 72 Le Thanh Ton Street, District 1, Ho Chi Minh City, Vietnam",
        contact_phone_title: "Phone",
        contact_email_title: "Email",
        contact_hours_title: "Business Hours",
        contact_hours: "Monday - Friday: 8:00 AM - 5:30 PM<br>Saturday: 8:00 AM - 12:00 PM",
        
        // Form
        form_name: "Full Name",
        form_email: "Email",
        form_phone: "Phone",
        form_service: "Service Interested",
        form_opt_ocean: "Ocean Freight",
        form_opt_air: "Air Freight",
        form_opt_warehouse: "Warehousing",
        form_opt_land: "Land Transportation",
        form_opt_customs: "Customs Brokerage",
        form_opt_supply: "Supply Chain Solutions",
        form_message: "Message",
        form_submit: "Send Message",
        
        // Footer
        footer_desc: "Your trusted partner for comprehensive logistics solutions in Vietnam and worldwide.",
        footer_services: "Services",
        footer_company: "Company",
        footer_support: "Support",
        footer_careers: "Careers",
        footer_news: "News & Updates",
        footer_faq: "FAQ",
        footer_terms: "Terms & Conditions",
        footer_privacy: "Privacy Policy",
        footer_rights: "All rights reserved."
    },
    vi: {
        // Navigation
        nav_home: "Trang Chủ",
        nav_services: "Dịch Vụ",
        nav_tracking: "Tra Cứu",
        nav_about: "Về Chúng Tôi",
        nav_contact: "Liên Hệ",
        
        // Hero
        hero_title: "Xuất Sắc Trong Logistics Toàn Cầu",
        hero_subtitle: "Kết Nối Việt Nam Với Thế Giới Qua Giải Pháp Vận Tải và Logistics Đáng Tin Cậy",
        hero_btn_services: "Dịch Vụ",
        hero_btn_tracking: "Tra Cứu Vận Đơn",
        
        // Services
        services_title: "Dịch Vụ Của Chúng Tôi",
        services_desc: "Giải pháp logistics toàn diện được tùy chỉnh theo nhu cầu doanh nghiệp của bạn",
        service_ocean_title: "Vận Tải Đường Biển",
        service_ocean_desc: "Dịch vụ FCL và LCL với phủ sóng toàn cầu. Giá cả cạnh tranh và thời gian vận chuyển đáng tin cậy.",
        service_ocean_f1: "Dịch Vụ FCL & LCL",
        service_ocean_f2: "Mạng Lưới Toàn Cầu",
        service_ocean_f3: "Kiểm Soát Nhiệt Độ",
        service_air_title: "Vận Tải Hàng Không",
        service_air_desc: "Dịch vụ vận chuyển hàng không nhanh chóng và hiệu quả cho các lô hàng cấp bách.",
        service_air_f1: "Giao Hàng Nhanh",
        service_air_f2: "Thông Quan Hải Quan",
        service_air_f3: "Xử Lý Hàng Nguy Hiểm",
        service_warehouse_title: "Kho Bãi",
        service_warehouse_desc: "Cơ sở kho hiện đại với hệ thống quản lý hàng tồn kho. Dịch vụ đóng gói và phân phối có sẵn.",
        service_warehouse_f1: "Quản Lý Hàng Tồn Kho",
        service_warehouse_f2: "Chuyển Kho Chéo",
        service_warehouse_f3: "Dịch Vụ Phân Phối",
        service_land_title: "Vận Tải Đường Bộ",
        service_land_desc: "Dịch vụ vận tải đường bộ nội địa và xuyên biên giới. Theo dõi thời gian thực.",
        service_land_f1: "Dịch Vụ FTL & LTL",
        service_land_f2: "Vận Chuyển Xuyên Biên Giới",
        service_land_f3: "Theo Dõi GPS Thời Gian Thực",
        service_customs_title: "Môi Giới Hải Quan",
        service_customs_desc: "Dịch vụ thông quan chuyên nghiệp cho xuất nhập khẩu.",
        service_customs_f1: "Thông Quan Xuất/Nhập Khẩu",
        service_customs_f2: "Tư Vấn Tuân Thủ",
        service_customs_f3: "Quản Lý Thuế và Phí",
        service_supply_title: "Giải Pháp Chuỗi Cung Ứng",
        service_supply_desc: "Quản lý và tối ưu hóa chuỗi cung ứng từ đầu đến cuối.",
        service_supply_f1: "Tư Vấn Chuỗi Cung Ứng",
        service_supply_f2: "Tối Ưu Hóa Quy Trình",
        service_supply_f3: "Tích Hợp Công Nghệ",
        
        // Tracking
        tracking_title: "Tra Cứu Vận Đơn",
        tracking_desc: "Nhập số vận đơn để nhận cập nhật theo thời gian thực về trạng thái vận chuyển",
        tracking_placeholder: "Nhập số vận đơn (vd: MOL123456789)",
        tracking_btn: "Tra Cứu Ngay",
        tracking_feature1: "Cập Nhật Thời Gian Thực",
        tracking_feature2: "Thông Báo Email",
        tracking_feature3: "Lịch Sử Vị Trí",
        
        // About
        about_title: "Về MOL Logistics Vietnam",
        about_p1: "MOL Logistics (Vietnam) Co., Ltd. là nhà cung cấp hàng đầu các giải pháp logistics toàn diện tại Việt Nam, được hỗ trợ bởi chuyên môn toàn cầu của Mitsui O.S.K. Lines (MOL), một trong những công ty vận tải biển lớn nhất thế giới.",
        about_p2: "Với sự hiện diện mạnh mẽ tại các thành phố lớn của Việt Nam bao gồm TP. Hồ Chí Minh và Hà Nội, chúng tôi cung cấp dịch vụ logistics tích hợp kết nối Việt Nam với thế giới thông qua mạng lưới toàn cầu rộng khắp hơn 650 địa điểm tại hơn 100 quốc gia.",
        stat_countries: "Quốc Gia Trên Thế Giới",
        stat_locations: "Địa Điểm Toàn Cầu",
        stat_support: "Hỗ Trợ Khách Hàng",
        stat_experience: "Năm Tại Việt Nam",
        about_feature1_title: "Đối Tác Tin Cậy",
        about_feature1_desc: "Là một phần của Tập đoàn MOL với hơn 130 năm xuất sắc trong hàng hải",
        about_feature2_title: "Mạng Lưới Toàn Cầu",
        about_feature2_desc: "Kết nối liền mạch đến các cảng và thành phố lớn trên toàn thế giới",
        about_feature3_title: "Bền Vững",
        about_feature3_desc: "Cam kết trách nhiệm môi trường và logistics xanh",
        
        // Contact
        contact_title: "Liên Hệ Chúng Tôi",
        contact_desc: "Liên hệ với đội ngũ của chúng tôi để được tư vấn giải pháp logistics phù hợp",
        contact_select_branch: "Chọn Chi Nhánh",
        branch_hcm: "Văn Phòng TP. Hồ Chí Minh",
        branch_hanoi: "Văn Phòng Hà Nội",
        branch_haiphong: "Văn Phòng Hải Phòng",
        branch_danang: "Văn Phòng Đà Nẵng",
        contact_address_title: "Văn Phòng Chính - TP. Hồ Chí Minh",
        contact_address: "Tầng 18, Vincom Center, 72 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh, Việt Nam",
        contact_phone_title: "Điện Thoại",
        contact_email_title: "Email",
        contact_hours_title: "Giờ Làm Việc",
        contact_hours: "Thứ 2 - Thứ 6: 8:00 SA - 5:30 CH<br>Thứ 7: 8:00 SA - 12:00 CH",
        
        // Form
        form_name: "Họ và Tên",
        form_email: "Email",
        form_phone: "Điện Thoại",
        form_service: "Dịch Vụ Quan Tâm",
        form_opt_ocean: "Vận Tải Đường Biển",
        form_opt_air: "Vận Tải Hàng Không",
        form_opt_warehouse: "Kho Bãi",
        form_opt_land: "Vận Tải Đường Bộ",
        form_opt_customs: "Môi Giới Hải Quan",
        form_opt_supply: "Giải Pháp Chuỗi Cung Ứng",
        form_message: "Tin Nhắn",
        form_submit: "Gửi Tin Nhắn",
        
        // Footer
        footer_desc: "Đối tác đáng tin cậy cho các giải pháp logistics toàn diện tại Việt Nam và trên toàn thế giới.",
        footer_services: "Dịch Vụ",
        footer_company: "Công Ty",
        footer_support: "Hỗ Trợ",
        footer_careers: "Tuyển Dụng",
        footer_news: "Tin Tức",
        footer_faq: "Câu Hỏi Thường Gặp",
        footer_terms: "Điều Khoản & Điều Kiện",
        footer_privacy: "Chính Sách Bảo Mật",
        footer_rights: "Bảo lưu mọi quyền."
    },
    ja: {
        // Navigation
        nav_home: "ホーム",
        nav_services: "サービス",
        nav_tracking: "追跡",
        nav_about: "会社概要",
        nav_contact: "お問い合わせ",
        
        // Hero
        hero_title: "グローバル物流エクセレンス",
        hero_subtitle: "信頼できる配送物流ソリューションでベトナムと世界をつなぐ",
        hero_btn_services: "サービス",
        hero_btn_tracking: "貨物追跡",
        
        // Services
        services_title: "私たちのサービス",
        services_desc: "お客様のビジネスニーズに合わせた包括的な物流ソリューション",
        service_ocean_title: "海上輸送",
        service_ocean_desc: "世界規模のFCLおよびLCLサービス。競争力のある料金と信頼できる輸送時間。",
        service_ocean_f1: "FCL・LCLサービス",
        service_ocean_f2: "グローバルネットワーク",
        service_ocean_f3: "温度管理",
        service_air_title: "航空輸送",
        service_air_desc: "緊急貨物のための迅速で効率的な航空貨物サービス。",
        service_air_f1: "エクスプレス配送",
        service_air_f2: "通関サポート",
        service_air_f3: "危険物取扱い",
        service_warehouse_title: "倉庫保管",
        service_warehouse_desc: "在庫管理システムを備えた最新の倉庫施設。",
        service_warehouse_f1: "在庫管理",
        service_warehouse_f2: "クロスドッキング",
        service_warehouse_f3: "配送サービス",
        service_land_title: "陸上輸送",
        service_land_desc: "国内および国境を越えたトラック輸送サービス。リアルタイム追跡。",
        service_land_f1: "FTL・LTLサービス",
        service_land_f2: "国境越え輸送",
        service_land_f3: "リアルタイムGPS追跡",
        service_customs_title: "通関業務",
        service_customs_desc: "輸出入のための専門的な通関サービス。",
        service_customs_f1: "輸出入通関",
        service_customs_f2: "コンプライアンスコンサルティング",
        service_customs_f3: "関税管理",
        service_supply_title: "サプライチェーンソリューション",
        service_supply_desc: "エンドツーエンドのサプライチェーン管理と最適化。",
        service_supply_f1: "サプライチェーンコンサルティング",
        service_supply_f2: "プロセス最適化",
        service_supply_f3: "テクノロジー統合",
        
        // Tracking
        tracking_title: "貨物追跡",
        tracking_desc: "追跡番号を入力して、貨物の状態をリアルタイムで確認",
        tracking_placeholder: "追跡番号を入力 (例: MOL123456789)",
        tracking_btn: "今すぐ追跡",
        tracking_feature1: "リアルタイム更新",
        tracking_feature2: "メール通知",
        tracking_feature3: "位置履歴",
        
        // About
        about_title: "MOLロジスティクスベトナムについて",
        about_p1: "MOL Logistics (Vietnam) Co., Ltd.は、世界最大の海運会社の一つである商船三井（MOL）のグローバルな専門知識に支えられた、ベトナムにおける包括的な物流ソリューションの主要プロバイダーです。",
        about_p2: "ホーチミン市やハノイを含むベトナムの主要都市に強固な拠点を持ち、100カ国以上の650以上の拠点に広がる広範なグローバルネットワークを通じて、ベトナムと世界をつなぐ統合物流サービスを提供しています。",
        stat_countries: "世界の国々",
        stat_locations: "グローバル拠点",
        stat_support: "カスタマーサポート",
        stat_experience: "ベトナムでの年数",
        about_feature1_title: "信頼できるパートナー",
        about_feature1_desc: "130年以上の海運の卓越性を持つMOLグループの一員",
        about_feature2_title: "グローバルネットワーク",
        about_feature2_desc: "世界の主要港と都市へのシームレスな接続",
        about_feature3_title: "持続可能性",
        about_feature3_desc: "環境責任とグリーンロジスティクスへのコミットメント",
        
        // Contact
        contact_title: "お問い合わせ",
        contact_desc: "ニーズに合わせた物流ソリューションについて、チームにお問い合わせください",
        contact_select_branch: "支店を選択",
        branch_hcm: "ホーチミン市オフィス",
        branch_hanoi: "ハノイオフィス",
        branch_haiphong: "ハイフォンオフィス",
        branch_danang: "ダナンオフィス",
        contact_address_title: "本社 - ホーチミン市",
        contact_address: "18階、Vincom Center、72 Le Thanh Ton Street、District 1、ホーチミン市、ベトナム",
        contact_phone_title: "電話",
        contact_email_title: "メール",
        contact_hours_title: "営業時間",
        contact_hours: "月曜日 - 金曜日: 8:00 AM - 5:30 PM<br>土曜日: 8:00 AM - 12:00 PM",
        
        // Form
        form_name: "フルネーム",
        form_email: "メールアドレス",
        form_phone: "電話番号",
        form_service: "関心のあるサービス",
        form_opt_ocean: "海上輸送",
        form_opt_air: "航空輸送",
        form_opt_warehouse: "倉庫保管",
        form_opt_land: "陸上輸送",
        form_opt_customs: "通関業務",
        form_opt_supply: "サプライチェーンソリューション",
        form_message: "メッセージ",
        form_submit: "送信",
        
        // Footer
        footer_desc: "ベトナムおよび世界中で包括的な物流ソリューションを提供する信頼できるパートナー。",
        footer_services: "サービス",
        footer_company: "会社",
        footer_support: "サポート",
        footer_careers: "採用情報",
        footer_news: "ニュース",
        footer_faq: "よくある質問",
        footer_terms: "利用規約",
        footer_privacy: "プライバシーポリシー",
        footer_rights: "無断転載を禁じます。"
    }
};

// Current language
let currentLang = 'en';

// Branch information data
const branchData = {
    hcm: {
        title: {
            en: "Head Office - Ho Chi Minh City",
            vi: "Văn Phòng Chính - TP. Hồ Chí Minh",
            ja: "本社 - ホーチミン市"
        },
        address: {
            en: "18th Floor, Vincom Center, 72 Le Thanh Ton Street, District 1, Ho Chi Minh City, Vietnam",
            vi: "Tầng 18, Vincom Center, 72 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh, Việt Nam",
            ja: "18階、Vincom Center、72 Le Thanh Ton Street、District 1、ホーチミン市、ベトナム"
        },
        phone: "+84 (28) 3827 0888",
        email: "hcm@mollogistics.com.vn",
        hours: {
            en: "Monday - Friday: 8:00 AM - 5:30 PM<br>Saturday: 8:00 AM - 12:00 PM",
            vi: "Thứ 2 - Thứ 6: 8:00 SA - 5:30 CH<br>Thứ 7: 8:00 SA - 12:00 CH",
            ja: "月曜日 - 金曜日: 8:00 AM - 5:30 PM<br>土曜日: 8:00 AM - 12:00 PM"
        }
    },
    hanoi: {
        title: {
            en: "Hanoi Office",
            vi: "Văn Phòng Hà Nội",
            ja: "ハノイオフィス"
        },
        address: {
            en: "8th Floor, Daeha Business Center, 360 Kim Ma Street, Ba Dinh District, Hanoi, Vietnam",
            vi: "Tầng 8, Daeha Business Center, 360 Kim Mã, Ba Đình, Hà Nội, Việt Nam",
            ja: "8階、Daeha Business Center、360 Kim Ma Street、Ba Dinh District、ハノイ、ベトナム"
        },
        phone: "+84 (24) 3715 0999",
        email: "hanoi@mollogistics.com.vn",
        hours: {
            en: "Monday - Friday: 8:00 AM - 5:30 PM<br>Saturday: 8:00 AM - 12:00 PM",
            vi: "Thứ 2 - Thứ 6: 8:00 SA - 5:30 CH<br>Thứ 7: 8:00 SA - 12:00 CH",
            ja: "月曜日 - 金曜日: 8:00 AM - 5:30 PM<br>土曜日: 8:00 AM - 12:00 PM"
        }
    },
    haiphong: {
        title: {
            en: "Hai Phong Office",
            vi: "Văn Phòng Hải Phòng",
            ja: "ハイフォンオフィス"
        },
        address: {
            en: "5th Floor, Vincom Plaza, 77 Tran Phu Street, Ngo Quyen District, Hai Phong, Vietnam",
            vi: "Tầng 5, Vincom Plaza, 77 Trần Phú, Ngô Quyền, Hải Phòng, Việt Nam",
            ja: "5階、Vincom Plaza、77 Tran Phu Street、Ngo Quyen District、ハイフォン、ベトナム"
        },
        phone: "+84 (225) 3822 777",
        email: "haiphong@mollogistics.com.vn",
        hours: {
            en: "Monday - Friday: 8:00 AM - 5:30 PM<br>Saturday: 8:00 AM - 12:00 PM",
            vi: "Thứ 2 - Thứ 6: 8:00 SA - 5:30 CH<br>Thứ 7: 8:00 SA - 12:00 CH",
            ja: "月曜日 - 金曜日: 8:00 AM - 5:30 PM<br>土曜日: 8:00 AM - 12:00 PM"
        }
    },
    danang: {
        title: {
            en: "Da Nang Office",
            vi: "Văn Phòng Đà Nẵng",
            ja: "ダナンオフィス"
        },
        address: {
            en: "12th Floor, Indochina Riverside Tower, 74 Bach Dang Street, Hai Chau District, Da Nang, Vietnam",
            vi: "Tầng 12, Indochina Riverside Tower, 74 Bạch Đằng, Hải Châu, Đà Nẵng, Việt Nam",
            ja: "12階、Indochina Riverside Tower、74 Bach Dang Street、Hai Chau District、ダナン、ベトナム"
        },
        phone: "+84 (236) 3888 555",
        email: "danang@mollogistics.com.vn",
        hours: {
            en: "Monday - Friday: 8:00 AM - 5:30 PM<br>Saturday: 8:00 AM - 12:00 PM",
            vi: "Thứ 2 - Thứ 6: 8:00 SA - 5:30 CH<br>Thứ 7: 8:00 SA - 12:00 CH",
            ja: "月曜日 - 金曜日: 8:00 AM - 5:30 PM<br>土曜日: 8:00 AM - 12:00 PM"
        }
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    initMobileMenu();
    initSmoothScroll();
    initNavHighlight();
    initContactForm();
    initTracking();
    initBranchSelector();
});

// Language Switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update placeholder text
    const trackingInput = document.getElementById('trackingInput');
    if (trackingInput && translations[lang]['tracking_placeholder']) {
        trackingInput.placeholder = translations[lang]['tracking_placeholder'];
    }
    
    // Update branch info when language changes
    const branchSelector = document.getElementById('branchSelector');
    if (branchSelector) {
        updateBranchInfo(branchSelector.value);
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            const icon = this.querySelector('.material-icons');
            icon.textContent = menu.classList.contains('active') ? 'close' : 'menu';
        });
        
        // Close menu when clicking nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                const icon = toggle.querySelector('.material-icons');
                icon.textContent = 'menu';
            });
        });
    }
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navigation Highlight on Scroll
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Contact Form Submission
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            alert(`Thank you ${name}! Your message has been received. We will contact you at ${email} soon.`);
            
            // Reset form
            form.reset();
        });
    }
}

// Tracking Functionality
function initTracking() {
    const trackBtn = document.getElementById('trackBtn');
    const trackingInput = document.getElementById('trackingInput');
    
    if (trackBtn && trackingInput) {
        trackBtn.addEventListener('click', function() {
            const trackingNumber = trackingInput.value.trim();
            
            if (trackingNumber === '') {
                alert('Please enter a tracking number');
                return;
            }
            
            // In a real application, you would query a tracking API
            alert(`Tracking shipment: ${trackingNumber}\n\nStatus: In Transit\nLocation: Ho Chi Minh City Port\nETA: 3-5 business days`);
        });
        
        // Allow Enter key to trigger tracking
        trackingInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                trackBtn.click();
            }
        });
    }
}

// Branch Selector Functionality
function initBranchSelector() {
    const branchSelector = document.getElementById('branchSelector');
    
    if (branchSelector) {
        branchSelector.addEventListener('change', function() {
            const selectedBranch = this.value;
            updateBranchInfo(selectedBranch);
        });
    }
}

function updateBranchInfo(branchId) {
    const branch = branchData[branchId];
    
    if (!branch) return;
    
    // Update branch information
    document.getElementById('branchTitle').innerHTML = branch.title[currentLang];
    document.getElementById('branchAddress').innerHTML = branch.address[currentLang];
    document.getElementById('branchPhone').innerHTML = branch.phone;
    document.getElementById('branchEmail').innerHTML = branch.email;
    document.getElementById('branchHours').innerHTML = branch.hours[currentLang];
}
