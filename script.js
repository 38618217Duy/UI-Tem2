// MOL Logistics Vietnam - JavaScript
// Multi-language support & interactive features

// Language translations
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_solutions: "Industry Solutions",
        nav_company: "Company",
        nav_about: "About Us",
        nav_sustainability: "Sustainability",
        nav_network: "Network",
        nav_testimonials: "Testimonials",
        nav_news: "News",
        nav_contact: "Contact",
        
        // Solutions
        solution_manufacturing: "Manufacturing",
        solution_automotive: "Automotive",
        solution_electronics: "Electronics",
        solution_fashion: "Fashion & Apparel",
        solution_food: "Food & Beverage",
        
        // Mega Menu
        mega_freight: "Freight Services",
        mega_logistics: "Logistics Solutions",
        mega_featured: "Featured",
        mega_cold_chain: "Cold Chain Solutions",
        mega_cold_chain_desc: "Mekong Logistics Hub - 11,000 tons capacity cold storage with irradiation facility",
        mega_learn_more: "Learn More",
        service_ocean_desc: "Global sea transport solutions",
        service_air_desc: "Fast international delivery",
        service_land_desc: "Nationwide trucking services",
        service_warehouse_desc: "Modern storage facilities",
        service_customs_desc: "Expert customs brokerage",
        service_supply_desc: "End-to-end management",
        
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
        service_learn_more: "Learn More",
        view_all_services: "View All Services",
        
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
        stat_locations: "Global Offices",
        stat_offices_vn: "Offices in Vietnam",
        stat_support: "Customer Support",
        stat_experience: "Years in Vietnam",
        
        // Timeline
        timeline_title: "Our Journey in Vietnam",
        timeline_desc: "From our first representative office to becoming a strategic logistics partner",
        milestone_2001: "Representative Office in Ho Chi Minh City",
        milestone_2001_desc: "Established our first presence in Vietnam",
        milestone_2005: "Official Incorporation",
        milestone_2005_desc: "MOL Logistics (Vietnam) Inc. officially established",
        milestone_2006: "100% Japanese Ownership Approved",
        milestone_2006_desc: "First and only Japanese shipping company granted 100% ownership",
        milestone_2019: "Hai Phong Logistics Center",
        milestone_2019_desc: "Opened 6,000m² warehouse facility",
        milestone_2024: "Network Expansion",
        milestone_2024_desc: "Expanded to 17 locations nationwide",
        milestone_2025: "Strategic Cold Chain Investment",
        milestone_2025_desc: "39% stake in Toan Phat Logistics - Mekong Logistics Hub",
        
        // Certifications
        cert_title: "Quality Certifications",
        cert_desc: "Committed to international quality and environmental standards",
        cert_iso9001: "Quality Management System",
        cert_iso14001: "Environmental Management System",
        cert_iata: "International Air Transport Association",
        cert_aeo: "Authorized Economic Operator",
        
        // Sustainability
        sustainability_title: "Sustainability & ESG Commitment",
        sustainability_desc: "Building a sustainable future through responsible business practices and environmental stewardship",
        blue_action_title: "BLUE ACTION for ALL",
        blue_action_desc: "MOL Group's initiative to contribute to the realization of a sustainable society through marine environment, social responsibility, and community engagement",
        sust_marine_title: "Marine Environment Protection",
        sust_marine_desc: "Active participation in beach cleanup activities and marine conservation projects across Vietnam",
        sust_marine_f1: "Beach cleanup at Phu Quoc Island",
        sust_marine_f2: "Marine debris collection programs",
        sust_marine_f3: "Ocean awareness campaigns",
        sust_green_title: "Green Logistics Practices",
        sust_green_desc: "Implementing sustainable logistics solutions to reduce environmental impact and carbon footprint",
        sust_green_f1: "CO2 emission reduction initiatives",
        sust_green_f2: "Energy-efficient warehouse operations",
        sust_green_f3: "Sustainable packaging solutions",
        sust_social_title: "Social Responsibility",
        sust_social_desc: "Contributing to local communities and developing next-generation human resources",
        sust_social_f1: "Community engagement programs",
        sust_social_f2: "Disaster relief support ($36,000 USD)",
        sust_social_f3: "Education & skills development",
        sust_stat_iso: "Environmental Management System Certified",
        sust_stat_fleet: "800+ Vessels",
        sust_stat_fleet_desc: "MOL Group fleet with eco-friendly initiatives",
        sust_stat_target: "Carbon Neutral",
        sust_stat_target_desc: "Targeting net-zero emissions by 2050",
        
        // Enhanced Tracking
        tracking_single: "Single Tracking",
        tracking_multiple: "Multiple Tracking",
        tracking_multiple_placeholder: "Enter multiple tracking numbers (one per line)",
        tracking_track_all: "Track All Shipments",
        tracking_email_opt: "Email me status updates",
        tracking_feature4: "Mobile App Available",
        
        // Testimonials
        testimonials_title: "Client Success Stories",
        testimonials_desc: "Trusted by leading companies across Vietnam and beyond",
        testimonial_1_company: "Major Automotive Manufacturer",
        testimonial_1_industry: "Automotive Parts - Binh Duong",
        testimonial_1_text: "MOL Logistics has been instrumental in optimizing our supply chain from Japan to Vietnam. Their expertise in customs clearance and just-in-time delivery has reduced our inventory costs by 25% while improving delivery reliability.",
        testimonial_2_company: "Leading Seafood Exporter",
        testimonial_2_industry: "Agricultural & Seafood - Mekong Delta",
        testimonial_2_text: "The investment in Mekong Logistics Hub has transformed our cold chain operations. With MOL's integrated cold storage and global network, we've expanded our exports to 15 new markets while maintaining perfect temperature control throughout the journey.",
        testimonial_3_company: "Electronics Manufacturing",
        testimonial_3_industry: "Electronics - Hanoi & Hai Phong",
        testimonial_3_text: "Working with MOL for 8+ years across multiple facilities. Their Hai Phong Logistics Center provides seamless coordination between our northern production sites and international shipments. Real-time tracking and proactive communication are exceptional.",
        testimonial_verified: "Verified Client",
        testimonial_featured: "Featured Case Study",
        testimonial_partnership: "8+ Years Partnership",
        stat_new_markets: "New Markets",
        stat_quality: "Quality Rate",
        stat_cost_saving: "Cost Reduction",
        trust_clients: "Active Clients",
        trust_satisfaction: "Client Satisfaction",
        trust_shipments: "Shipments Handled",
        trust_on_time: "On-Time Delivery",
        
        // Search
        search_title: "Search",
        search_placeholder: "Search for services, news, offices...",
        search_all: "All",
        search_services: "Services",
        search_news: "News",
        search_offices: "Offices",
        search_popular: "Popular Searches",
        search_tag_tracking: "Track Shipment",
        search_tag_ocean: "Ocean Freight",
        search_tag_customs: "Customs Clearance",
        search_tag_quote: "Get Quote",
        
        // Tools & Resources
        tools_title: "Tools & Resources",
        tools_desc: "Powerful tools to help you plan and manage your logistics needs",
        tool_quote_title: "Get Instant Quote",
        tool_quote_desc: "Receive a customized quote for your shipping needs in minutes",
        tool_quote_service_placeholder: "Select Service",
        tool_quote_origin: "Origin",
        tool_quote_destination: "Destination",
        tool_quote_weight: "Weight (kg)",
        tool_quote_volume: "Volume (m³)",
        tool_quote_submit: "Get Quote",
        tool_co2_title: "CO2 Emissions Calculator",
        tool_co2_desc: "Calculate and track your shipment's carbon footprint",
        tool_co2_transport_placeholder: "Transport Mode",
        transport_ocean: "Ocean Freight",
        transport_air: "Air Freight",
        transport_truck: "Truck",
        transport_rail: "Rail",
        tool_co2_distance: "Distance (km)",
        tool_co2_cargo: "Cargo Weight (kg)",
        tool_co2_calculate: "Calculate CO2",
        tool_shipping_title: "Shipping Cost Estimator",
        tool_shipping_desc: "Estimate shipping costs based on dimensions and distance",
        tool_ship_length: "Length (cm)",
        tool_ship_width: "Width (cm)",
        tool_ship_height: "Height (cm)",
        tool_ship_weight: "Weight (kg)",
        tool_ship_service_placeholder: "Shipping Method",
        ship_express: "Express (1-3 days)",
        ship_standard: "Standard (5-7 days)",
        ship_economy: "Economy (10-14 days)",
        tool_ship_estimate: "Estimate Cost",
        tool_locator_title: "Find Nearest Office",
        tool_locator_search: "Enter your city or province...",
        location_hcm: "Ho Chi Minh City",
        location_hanoi: "Hanoi",
        location_haiphong: "Hai Phong",
        location_danang: "Da Nang",
        
        // Office Network
        network_title: "Nationwide Coverage",
        network_desc: "17 strategic locations across Vietnam serving major industrial zones",
        region_north: "Northern Region",
        region_south: "Southern Region",
        office_hanoi: "Hanoi Branch",
        office_noibai: "Noi Bai Airport Office",
        office_haiphong: "Hai Phong Office",
        office_hp_logistics: "Hai Phong Logistics Center (6,000m²)",
        office_haiduong: "Hai Duong Office",
        office_thaibinh: "Thai Binh Office",
        office_quangninh: "Quang Ninh Office",
        office_hanam: "Ha Nam Office",
        office_nomura: "Nomura Industrial Park",
        office_hcm: "Ho Chi Minh City (HQ)",
        office_bentre: "Ben Tre Office",
        office_songthan: "Song Than - Binh Duong",
        office_vsip2: "VSIP II - Binh Duong",
        office_amata: "Amata - Dong Nai",
        office_brvt: "Ba Ria - Vung Tau",
        office_danang: "Da Nang Office",
        
        // Industries
        industries_title: "Industries We Serve",
        industries_desc: "Specialized logistics solutions across diverse sectors",
        industry_auto: "Automobile Parts",
        industry_electrical: "Electrical Components",
        industry_electronics: "Electronics",
        industry_furniture: "Furniture",
        industry_chemicals: "Chemicals",
        industry_toys: "Toys",
        industry_machinery: "Machinery",
        industry_medical: "Medical Equipment",
        industry_steel: "Iron & Steel",
        industry_apparel: "Clothing & Footwear",
        industry_food: "Food Products",
        
        // News
        news_title: "Latest News & Updates",
        news_desc: "Stay informed about our latest developments and achievements",
        news_badge_featured: "Featured",
        news_date_1: "September 2025",
        news_date_2: "January 2024",
        news_date_3: "2023",
        news_date_4: "2019",
        news_cat_investment: "Investment",
        news_cat_expansion: "Expansion",
        news_cat_service: "Service",
        news_cat_certification: "Certification",
        news_title_1: "MOL Logistics Invests in Mekong Cold Chain Hub",
        news_excerpt_1: "Strategic 39% stake in Toan Phat Logistics to develop Vietnam's first integrated cold chain center with 11,000 tons capacity.",
        news_title_2: "Expanded to 17 Locations Nationwide",
        news_excerpt_2: "Strengthening our presence across Vietnam to serve major industrial zones and manufacturing hubs more effectively.",
        news_title_3: "Cross-Border Logistics to Thailand",
        news_excerpt_3: "Launching comprehensive land freight services connecting Vietnam and Thailand for seamless regional trade.",
        news_title_4: "Hai Phong Logistics Center Opens",
        news_excerpt_4: "Grand opening of our 6,000m² state-of-the-art warehouse facility in Hai Phong, northern Vietnam's key logistics hub.",
        news_read_more: "Read More",
        
        // Strategic Investment
        investment_title: "Strategic Cold Chain Investment",
        investment_subtitle: "Mekong Logistics Hub - Vietnam's First Integrated Cold Chain Center",
        investment_p1: "In September 2025, MOL Logistics Vietnam became a strategic shareholder (39%) in Toan Phat Logistics, partnering with Kawanishi Warehouse (51%) to develop the Mekong Logistics Hub in Tay Ninh Province.",
        invest_feature1_title: "11,000 Tons Capacity",
        invest_feature1_desc: "State-of-the-art cold storage facility",
        invest_feature2_title: "Agricultural & Seafood Exports",
        invest_feature2_desc: "Supporting Vietnam's export growth",
        invest_feature3_title: "Integrated Solution",
        invest_feature3_desc: "Combined cold storage with irradiation facility",
        investment_quote: "We highly value Toan Phat Logistics' efficient cold storage operation capabilities. This is a crucial factor for agricultural and seafood exports - sectors that require strict temperature management.",
        quote_position: "Chairman & CEO, MOL Logistics",
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
        footer_hq: "Head Office - Ho Chi Minh City",
        footer_services: "Services",
        footer_company: "Company",
        footer_certifications: "Certifications",
        footer_quick_links: "Quick Links",
        footer_support: "Support",
        footer_track: "Track Shipment",
        footer_quote: "Get a Quote",
        footer_investment: "Mekong Logistics Hub",
        footer_careers: "Careers",
        footer_news: "News & Updates",
        footer_faq: "FAQ",
        footer_terms: "Terms & Conditions",
        footer_privacy: "Privacy Policy",
        footer_sitemap: "Sitemap",
        footer_rights: "All rights reserved.",
        footer_established: "Established November 2005",
        
        // About Page
        about_page_title: "About MOL Logistics Vietnam",
        about_page_subtitle: "19+ Years of Excellence in Logistics",
        about_page_badge: "Est. 2006",
        about_trusted_partner: "Your Trusted Logistics Partner",
        about_lead_text: "MOL Logistics (Vietnam) Co., Ltd. is a leading provider of comprehensive logistics solutions, backed by the global expertise of Mitsui O.S.K. Lines (MOL).",
        about_description: "Since our establishment in 2006, we have been dedicated to connecting Vietnam to the world through innovative logistics solutions, reliable service, and a commitment to excellence.",
        about_mol_group: "Part of MOL Group",
        about_mol_group_desc: "130+ years of maritime excellence",
        about_global_network_title: "Global Network",
        about_global_network_desc: "100+ countries, 650+ locations",
        about_expert_team: "Expert Team",
        about_expert_team_desc: "Skilled logistics professionals",
        about_journey_title: "Our Journey",
        about_journey_desc: "Milestones in our growth story",
        about_2006: "Company Established",
        about_2006_desc: "MOL Logistics Vietnam founded in Ho Chi Minh City",
        about_2010: "Network Expansion",
        about_2010_desc: "Opened offices in Hanoi and Hai Phong",
        about_2015: "ISO Certification",
        about_2015_desc: "Achieved ISO 9001 & 14001 certifications",
        about_2020: "Digital Transformation",
        about_2020_desc: "Launched advanced tracking systems",
        about_2025: "Strategic Growth",
        about_2025_desc: "Expanded to 17 locations nationwide",
        
        // Services Page
        services_page_title: "Our Services",
        services_page_subtitle: "Comprehensive logistics solutions tailored to your business needs",
        services_countries_served: "Countries Served",
        services_iso_certified: "ISO Certified",
        services_quality_assured: "Quality Assured",
        services_customer_support: "Customer Support",
        services_tracking_system: "Tracking System",
        services_real_time: "Real-Time",
        services_cta_title: "Ready to Optimize Your Logistics?",
        services_cta_desc: "Contact our team to discuss your requirements",
        services_get_quote: "Get a Quote",
        services_contact_us: "Contact Us",
        
        // News Page
        news_page_title: "News & Updates",
        news_page_subtitle: "Stay informed about our latest developments and industry insights",
        news_search_placeholder: "Search news articles...",
        news_search_btn: "Search",
        news_filter_by: "Filter by:",
        news_all: "All News",
        news_company: "Company News",
        news_investments: "Investments",
        news_new_services: "New Services",
        news_certifications: "Certifications",
        news_partnerships: "Partnerships",
        news_sort_by: "Sort by:",
        news_newest: "Newest First",
        news_oldest: "Oldest First",
        news_title_az: "Title (A-Z)",
        news_showing: "Showing",
        news_articles: "articles",
        
        // Locations Page
        locations_page_title: "Our Network",
        locations_page_subtitle: "17 locations across Vietnam, 650+ worldwide",
        locations_offices_vn: "Offices in Vietnam",
        locations_countries: "Countries Served",
        locations_global: "Global Locations",
        locations_team: "Team Members",
        locations_all: "All Locations",
        locations_northern: "Northern Vietnam",
        locations_central: "Central Vietnam",
        locations_southern: "Southern Vietnam",
        locations_vietnam_offices: "Vietnam Offices",
        locations_southern_region: "Southern Vietnam",
        locations_head_office: "Head Office",
        locations_northern_region: "Northern Region",
        
        // 404 Page
        error_404_title: "Page Not Found",
        error_404_desc: "Sorry, the page you are looking for doesn't exist or has been moved.",
        error_404_home: "Back to Home",
        error_404_services: "View Services",
        error_404_contact: "Contact Us",
        
        // Common
        breadcrumb_home: "Home",
        read_more: "Read More",
        learn_more: "Learn More",
        view_all: "View All",
        get_started: "Get Started",
        back_to_top: "Back to top",
        
        // Demo Page
        demo_title: "🌐 Multilingual System Demo",
        demo_subtitle: "Click the buttons below to change language"
    },
    vi: {
        // Navigation
        nav_home: "Trang Chủ",
        nav_services: "Dịch Vụ",
        nav_solutions: "Giải Pháp Theo Ngành",
        nav_company: "Công Ty",
        nav_about: "Về Chúng Tôi",
        nav_sustainability: "Phát Triển Bền Vững",
        nav_network: "Mạng Lưới",
        nav_testimonials: "Đánh Giá Khách Hàng",
        nav_news: "Tin Tức",
        nav_contact: "Liên Hệ",
        
        // Solutions
        solution_manufacturing: "Sản Xuất & Công Nghiệp",
        solution_automotive: "Ô Tô & Phụ Tùng",
        solution_electronics: "Điện Tử & Công Nghệ",
        solution_fashion: "Thời Trang & May Mặc",
        solution_food: "Thực Phẩm & Đồ Uống",
        
        // Mega Menu
        mega_freight: "Dịch Vụ Vận Chuyển",
        mega_logistics: "Giải Pháp Logistics",
        mega_featured: "Nổi Bật",
        mega_cold_chain: "Giải Pháp Chuỗi Lạnh",
        mega_cold_chain_desc: "Mekong Logistics Hub - Kho lạnh 11.000 tấn với cơ sở chiếu xạ",
        mega_learn_more: "Tìm Hiểu Thêm",
        service_ocean: "Vận Tải Đường Biển",
        service_ocean_desc: "Giải pháp vận tải biển toàn cầu",
        service_air: "Vận Tải Hàng Không",
        service_air_desc: "Giao hàng quốc tế nhanh chóng",
        service_land: "Vận Tải Đường Bộ",
        service_land_desc: "Dịch vụ vận tải đường bộ toàn quốc",
        service_warehouse: "Kho Bãi",
        service_warehouse_desc: "Cơ sở kho hiện đại",
        service_customs: "Thông Quan Hải Quan",
        service_customs_desc: "Môi giới hải quan chuyên nghiệp",
        service_supply: "Chuỗi Cung Ứng",
        service_supply_desc: "Quản lý toàn diện",
        
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
        service_learn_more: "Xem Chi Tiết",
        view_all_services: "Xem Tất Cả Dịch Vụ",
        
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
        stat_locations: "Văn Phòng Toàn Cầu",
        stat_offices_vn: "Văn Phòng Tại Việt Nam",
        stat_support: "Hỗ Trợ Khách Hàng",
        stat_experience: "Năm Tại Việt Nam",
        
        // Timeline
        timeline_title: "Hành Trình Tại Việt Nam",
        timeline_desc: "Từ văn phòng đại diện đầu tiên đến đối tác logistics chiến lược",
        milestone_2001: "Văn Phòng Đại Diện tại TP. Hồ Chí Minh",
        milestone_2001_desc: "Thiết lập sự hiện diện đầu tiên tại Việt Nam",
        milestone_2005: "Thành Lập Chính Thức",
        milestone_2005_desc: "Công ty TNHH MOL Logistics (Việt Nam) chính thức thành lập",
        milestone_2006: "Được Phê Duyệt Sở Hữu 100% Vốn Nhật",
        milestone_2006_desc: "Công ty vận tải biển Nhật Bản đầu tiên và duy nhất được cấp phép sở hữu 100%",
        milestone_2019: "Trung Tâm Logistics Hải Phòng",
        milestone_2019_desc: "Khai trương kho bãi 6.000m²",
        milestone_2024: "Mở Rộng Mạng Lưới",
        milestone_2024_desc: "Mở rộng lên 17 địa điểm trên toàn quốc",
        milestone_2025: "Đầu Tư Chiến Lược Chuỗi Lạnh",
        milestone_2025_desc: "Sở hữu 39% cổ phần Toàn Phát Logistics - Mekong Logistics Hub",
        
        // Certifications
        cert_title: "Chứng Nhận Chất Lượng",
        cert_desc: "Cam kết với các tiêu chuẩn chất lượng và môi trường quốc tế",
        cert_iso9001: "Hệ Thống Quản Lý Chất Lượng",
        cert_iso14001: "Hệ Thống Quản Lý Môi Trường",
        cert_iata: "Hiệp Hội Vận Tải Hàng Không Quốc Tế",
        cert_aeo: "Nhà Khai Thác Kinh Tế Được Ủy Quyền",
        
        // Office Network
        network_title: "Phủ Sóng Toàn Quốc",
        network_desc: "17 địa điểm chiến lược trên khắp Việt Nam phục vụ các khu công nghiệp chính",
        region_north: "Miền Bắc",
        region_south: "Miền Nam",
        office_hanoi: "Chi Nhánh Hà Nội",
        office_noibai: "Văn Phòng Sân Bay Nội Bài",
        office_haiphong: "Văn Phòng Hải Phòng",
        office_hp_logistics: "Trung Tâm Logistics Hải Phòng (6.000m²)",
        office_haiduong: "Văn Phòng Hải Dương",
        office_thaibinh: "Văn Phòng Thái Bình",
        office_quangninh: "Văn Phòng Quảng Ninh",
        office_hanam: "Văn Phòng Hà Nam",
        office_nomura: "KCN Nomura",
        office_hcm: "TP. Hồ Chí Minh (Trụ Sở)",
        office_bentre: "Văn Phòng Bến Tre",
        office_songthan: "Song Than - Bình Dương",
        office_vsip2: "VSIP II - Bình Dương",
        office_amata: "Amata - Đồng Nai",
        office_brvt: "Bà Rịa - Vũng Tàu",
        office_danang: "Văn Phòng Đà Nẵng",
        
        // Industries
        industries_title: "Ngành Hàng Phục Vụ",
        industries_desc: "Giải pháp logistics chuyên biệt cho nhiều lĩnh vực",
        industry_auto: "Linh Kiện Ô Tô",
        industry_electrical: "Linh Kiện Điện",
        industry_electronics: "Thiết Bị Điện Tử",
        industry_furniture: "Nội Thất",
        industry_chemicals: "Hóa Chất",
        industry_toys: "Đồ Chơi",
        industry_machinery: "Máy Móc",
        industry_medical: "Thiết Bị Y Tế",
        industry_steel: "Sắt và Thép",
        industry_apparel: "Quần Áo & Giày Dép",
        industry_food: "Thực Phẩm",
        
        // News
        news_title: "Tin Tức & Cập Nhật Mới Nhất",
        news_desc: "Theo dõi những phát triển và thành tựu mới nhất của chúng tôi",
        news_badge_featured: "Nổi Bật",
        news_date_1: "Tháng 9/2025",
        news_date_2: "Tháng 1/2024",
        news_date_3: "2023",
        news_date_4: "2019",
        news_cat_investment: "Đầu Tư",
        news_cat_expansion: "Mở Rộng",
        news_cat_service: "Dịch Vụ",
        news_cat_certification: "Chứng Nhận",
        news_title_1: "MOL Logistics Đầu Tư Vào Mekong Cold Chain Hub",
        news_excerpt_1: "Chiến lược sở hữu 39% cổ phần Toàn Phát Logistics để phát triển trung tâm chuỗi lạnh tích hợp đầu tiên của Việt Nam với công suất 11.000 tấn.",
        news_title_2: "Mở Rộng Lên 17 Địa Điểm Toàn Quốc",
        news_excerpt_2: "Tăng cường sự hiện diện khắp Việt Nam để phục vụ các khu công nghiệp và trung tâm sản xuất lớn hiệu quả hơn.",
        news_title_3: "Logistics Xuyên Biên Giới Đến Thái Lan",
        news_excerpt_3: "Ra mắt dịch vụ vận tải đường bộ toàn diện kết nối Việt Nam và Thái Lan cho thương mại khu vực liền mạch.",
        news_title_4: "Khai Trương Trung Tâm Logistics Hải Phòng",
        news_excerpt_4: "Khai trương hoành tráng kho bãi hiện đại 6.000m² tại Hải Phòng, trung tâm logistics chính của miền Bắc Việt Nam.",
        news_read_more: "Đọc Thêm",
        
        // Strategic Investment
        investment_title: "Đầu Tư Chiến Lược Chuỗi Lạnh",
        investment_subtitle: "Mekong Logistics Hub - Trung Tâm Chuỗi Lạnh Tích Hợp Đầu Tiên Việt Nam",
        investment_p1: "Tháng 9/2025, MOL Logistics Vietnam trở thành cổ đông chiến lược (39%) của Toàn Phát Logistics, hợp tác với Kawanishi Warehouse (51%) để phát triển Mekong Logistics Hub tại tỉnh Tây Ninh.",
        invest_feature1_title: "Công Suất 11.000 Tấn",
        invest_feature1_desc: "Kho lạnh hiện đại tiên tiến",
        invest_feature2_title: "Xuất Khẩu Nông - Thủy Sản",
        invest_feature2_desc: "Hỗ trợ tăng trưởng xuất khẩu Việt Nam",
        invest_feature3_title: "Giải Pháp Tích Hợp",
        invest_feature3_desc: "Kết hợp kho lạnh với cơ sở chiếu xạ",
        investment_quote: "Chúng tôi đánh giá cao năng lực vận hành kho lạnh hiệu quả của Toàn Phát Logistics. Đây là yếu tố then chốt đối với xuất khẩu nông sản và thủy sản - những ngành đòi hỏi quản lý nhiệt độ nghiêm ngặt.",
        quote_position: "Chủ tịch kiêm CEO, MOL Logistics",
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
        footer_hq: "Trụ Sở Chính - TP. Hồ Chí Minh",
        footer_services: "Dịch Vụ",
        footer_company: "Công Ty",
        footer_certifications: "Chứng Nhận",
        footer_quick_links: "Liên Kết Nhanh",
        footer_support: "Hỗ Trợ",
        footer_track: "Tra Cứu Vận Đơn",
        footer_quote: "Nhận Báo Giá",
        footer_investment: "Mekong Logistics Hub",
        footer_careers: "Tuyển Dụng",
        footer_news: "Tin Tức",
        footer_faq: "Câu Hỏi Thường Gặp",
        footer_terms: "Điều Khoản & Điều Kiện",
        footer_privacy: "Chính Sách Bảo Mật",
        footer_sitemap: "Sơ Đồ Trang",
        footer_rights: "Bảo lưu mọi quyền.",
        footer_established: "Thành lập tháng 11/2005",
        
        // About Page
        about_page_title: "Về MOL Logistics Vietnam",
        about_page_subtitle: "Hơn 19 Năm Xuất Sắc Trong Logistics",
        about_page_badge: "Thành lập 2006",
        about_trusted_partner: "Đối Tác Logistics Đáng Tin Cậy",
        about_lead_text: "MOL Logistics (Vietnam) Co., Ltd. là nhà cung cấp hàng đầu các giải pháp logistics toàn diện, được hỗ trợ bởi chuyên môn toàn cầu của Mitsui O.S.K. Lines (MOL).",
        about_description: "Kể từ khi thành lập năm 2006, chúng tôi luôn tận tâm kết nối Việt Nam với thế giới thông qua các giải pháp logistics sáng tạo, dịch vụ đáng tin cậy và cam kết về sự xuất sắc.",
        about_mol_group: "Thuộc Tập Đoàn MOL",
        about_mol_group_desc: "Hơn 130 năm xuất sắc trong hàng hải",
        about_global_network_title: "Mạng Lưới Toàn Cầu",
        about_global_network_desc: "100+ quốc gia, 650+ địa điểm",
        about_expert_team: "Đội Ngũ Chuyên Gia",
        about_expert_team_desc: "Chuyên gia logistics lành nghề",
        about_journey_title: "Hành Trình Của Chúng Tôi",
        about_journey_desc: "Các cột mốc trong câu chuyện phát triển",
        about_2006: "Thành Lập Công Ty",
        about_2006_desc: "MOL Logistics Vietnam được thành lập tại TP. Hồ Chí Minh",
        about_2010: "Mở Rộng Mạng Lưới",
        about_2010_desc: "Khai trương văn phòng tại Hà Nội và Hải Phòng",
        about_2015: "Chứng Nhận ISO",
        about_2015_desc: "Đạt chứng nhận ISO 9001 & 14001",
        about_2020: "Chuyển Đổi Số",
        about_2020_desc: "Ra mắt hệ thống theo dõi tiên tiến",
        about_2025: "Tăng Trưởng Chiến Lược",
        about_2025_desc: "Mở rộng lên 17 địa điểm trên toàn quốc",
        
        // Services Page
        services_page_title: "Dịch Vụ Của Chúng Tôi",
        services_page_subtitle: "Giải pháp logistics toàn diện được tùy chỉnh theo nhu cầu doanh nghiệp của bạn",
        services_countries_served: "Quốc Gia Phục Vụ",
        services_iso_certified: "Chứng Nhận ISO",
        services_quality_assured: "Đảm Bảo Chất Lượng",
        services_customer_support: "Hỗ Trợ Khách Hàng",
        services_tracking_system: "Hệ Thống Theo Dõi",
        services_real_time: "Thời Gian Thực",
        services_cta_title: "Sẵn Sàng Tối Ưu Hóa Logistics?",
        services_cta_desc: "Liên hệ với đội ngũ của chúng tôi để thảo luận về yêu cầu",
        services_get_quote: "Nhận Báo Giá",
        services_contact_us: "Liên Hệ",
        
        // News Page
        news_page_title: "Tin Tức & Cập Nhật",
        news_page_subtitle: "Cập nhật thông tin về những phát triển mới nhất và thông tin ngành",
        news_search_placeholder: "Tìm kiếm bài viết...",
        news_search_btn: "Tìm Kiếm",
        news_filter_by: "Lọc theo:",
        news_all: "Tất Cả Tin Tức",
        news_company: "Tin Công Ty",
        news_investments: "Đầu Tư",
        news_new_services: "Dịch Vụ Mới",
        news_certifications: "Chứng Nhận",
        news_partnerships: "Đối Tác",
        news_sort_by: "Sắp xếp:",
        news_newest: "Mới Nhất",
        news_oldest: "Cũ Nhất",
        news_title_az: "Tiêu Đề (A-Z)",
        news_showing: "Hiển thị",
        news_articles: "bài viết",
        
        // Locations Page
        locations_page_title: "Mạng Lưới Của Chúng Tôi",
        locations_page_subtitle: "17 địa điểm tại Việt Nam, 650+ trên toàn cầu",
        locations_offices_vn: "Văn Phòng Tại Việt Nam",
        locations_countries: "Quốc Gia Phục Vụ",
        locations_global: "Địa Điểm Toàn Cầu",
        locations_team: "Thành Viên",
        locations_all: "Tất Cả Địa Điểm",
        locations_northern: "Miền Bắc Việt Nam",
        locations_central: "Miền Trung Việt Nam",
        locations_southern: "Miền Nam Việt Nam",
        locations_vietnam_offices: "Văn Phòng Việt Nam",
        locations_southern_region: "Miền Nam Việt Nam",
        locations_head_office: "Trụ Sở Chính",
        locations_northern_region: "Miền Bắc",
        
        // 404 Page
        error_404_title: "Không Tìm Thấy Trang",
        error_404_desc: "Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.",
        error_404_home: "Về Trang Chủ",
        error_404_services: "Xem Dịch Vụ",
        error_404_contact: "Liên Hệ",
        
        // Common
        breadcrumb_home: "Trang Chủ",
        read_more: "Đọc Thêm",
        learn_more: "Tìm Hiểu Thêm",
        view_all: "Xem Tất Cả",
        get_started: "Bắt Đầu",
        back_to_top: "Về đầu trang",
        
        // Demo Page
        demo_title: "🌐 Demo Hệ Thống Đa Ngôn Ngữ",
        demo_subtitle: "Nhấp vào các nút bên dưới để thay đổi ngôn ngữ"
    },
    ja: {
        // Navigation
        nav_home: "ホーム",
        nav_services: "サービス",
        nav_solutions: "業界別ソリューション",
        nav_company: "会社情報",
        nav_about: "会社概要",
        nav_sustainability: "サステナビリティ",
        nav_network: "ネットワーク",
        nav_testimonials: "お客様の声",
        nav_news: "ニュース",
        nav_contact: "お問い合わせ",
        
        // Solutions
        solution_manufacturing: "製造業",
        solution_automotive: "自動車",
        solution_electronics: "電子機器",
        solution_fashion: "ファッション・アパレル",
        solution_food: "食品・飲料",
        
        // Mega Menu
        mega_freight: "輸送サービス",
        mega_logistics: "ロジスティクスソリューション",
        mega_featured: "注目",
        mega_cold_chain: "コールドチェーンソリューション",
        mega_cold_chain_desc: "メコンロジスティクスハブ - 11,000トン容量の冷蔵施設と照射設備",
        mega_learn_more: "詳細を見る",
        service_ocean: "海上輸送",
        service_ocean_desc: "グローバル海上輸送ソリューション",
        service_air: "航空輸送",
        service_air_desc: "迅速な国際配送",
        service_land: "陸上輸送",
        service_land_desc: "全国トラック輸送サービス",
        service_warehouse: "倉庫保管",
        service_warehouse_desc: "最新の保管施設",
        service_customs: "通関業務",
        service_customs_desc: "専門的な通関サービス",
        service_supply: "サプライチェーン",
        service_supply_desc: "エンドツーエンド管理",
        service_learn_more: "詳細を見る",
        view_all_services: "すべてのサービスを見る",
        
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
        stat_locations: "グローバルオフィス",
        stat_offices_vn: "ベトナムのオフィス",
        stat_support: "カスタマーサポート",
        stat_experience: "ベトナムでの年数",
        
        // Timeline
        timeline_title: "ベトナムでの歩み",
        timeline_desc: "最初の駐在員事務所から戦略的物流パートナーへ",
        milestone_2001: "ホーチミン市駐在員事務所",
        milestone_2001_desc: "ベトナムで最初の拠点を設立",
        milestone_2005: "正式設立",
        milestone_2005_desc: "MOLロジスティクス（ベトナム）正式設立",
        milestone_2006: "100%日本資本承認",
        milestone_2006_desc: "日本の海運会社として初めて100%出資が認められた",
        milestone_2019: "ハイフォン物流センター",
        milestone_2019_desc: "6,000m²の倉庫施設オープン",
        milestone_2024: "ネットワーク拡大",
        milestone_2024_desc: "全国17拠点に拡大",
        milestone_2025: "戦略的コールドチェーン投資",
        milestone_2025_desc: "Toan Phat Logisticsの39%株式取得 - メコン物流ハブ",
        
        // Certifications
        cert_title: "品質認証",
        cert_desc: "国際的な品質・環境基準へのコミットメント",
        cert_iso9001: "品質マネジメントシステム",
        cert_iso14001: "環境マネジメントシステム",
        cert_iata: "国際航空運送協会",
        cert_aeo: "認定事業者",
        
        // Office Network
        network_title: "全国ネットワーク",
        network_desc: "主要工業団地にサービスを提供する17の戦略拠点",
        region_north: "北部地域",
        region_south: "南部地域",
        office_hanoi: "ハノイ支店",
        office_noibai: "ノイバイ空港オフィス",
        office_haiphong: "ハイフォンオフィス",
        office_hp_logistics: "ハイフォン物流センター（6,000m²）",
        office_haiduong: "ハイズオンオフィス",
        office_thaibinh: "タイビンオフィス",
        office_quangninh: "クアンニンオフィス",
        office_hanam: "ハナムオフィス",
        office_nomura: "野村工業団地",
        office_hcm: "ホーチミン市（本社）",
        office_bentre: "ベンチェオフィス",
        office_songthan: "ソンタン - ビンズオン",
        office_vsip2: "VSIP II - ビンズオン",
        office_amata: "アマタ - ドンナイ",
        office_brvt: "バリア - ブンタウ",
        office_danang: "ダナンオフィス",
        
        // Industries
        industries_title: "サービス業界",
        industries_desc: "多様な分野に特化した物流ソリューション",
        industry_auto: "自動車部品",
        industry_electrical: "電気部品",
        industry_electronics: "電子機器",
        industry_furniture: "家具",
        industry_chemicals: "化学品",
        industry_toys: "玩具",
        industry_machinery: "機械",
        industry_medical: "医療機器",
        industry_steel: "鉄鋼",
        industry_apparel: "衣料品・履物",
        industry_food: "食品",
        
        // News
        news_title: "最新ニュース＆アップデート",
        news_desc: "最新の開発と成果についてご確認ください",
        news_badge_featured: "注目",
        news_date_1: "2025年9月",
        news_date_2: "2024年1月",
        news_date_3: "2023年",
        news_date_4: "2019年",
        news_cat_investment: "投資",
        news_cat_expansion: "拡大",
        news_cat_service: "サービス",
        news_cat_certification: "認証",
        news_title_1: "MOLロジスティクス、メコンコールドチェーンハブに投資",
        news_excerpt_1: "Toan Phat Logisticsの39%株式を戦略的に取得し、11,000トン容量のベトナム初の統合コールドチェーンセンターを開発。",
        news_title_2: "全国17拠点に拡大",
        news_excerpt_2: "ベトナム全土での存在感を強化し、主要工業団地と製造ハブにより効果的にサービスを提供。",
        news_title_3: "タイへの越境物流サービス",
        news_excerpt_3: "ベトナムとタイを結ぶ包括的な陸上貨物サービスを開始し、シームレスな地域貿易を実現。",
        news_title_4: "ハイフォン物流センター開設",
        news_excerpt_4: "北部ベトナムの主要物流ハブ、ハイフォンに6,000m²の最新鋭倉庫施設をグランドオープン。",
        news_read_more: "続きを読む",
        
        // Strategic Investment
        investment_title: "戦略的コールドチェーン投資",
        investment_subtitle: "メコン物流ハブ - ベトナム初の統合コールドチェーンセンター",
        investment_p1: "2025年9月、MOLロジスティクスベトナムはToan Phat Logisticsの戦略的株主（39%）となり、Kawanishi Warehouse（51%）と提携してタイニン省にメコン物流ハブを開発しています。",
        invest_feature1_title: "11,000トン容量",
        invest_feature1_desc: "最新鋭の冷蔵保管施設",
        invest_feature2_title: "農産物・水産物輸出",
        invest_feature2_desc: "ベトナムの輸出成長を支援",
        invest_feature3_title: "統合ソリューション",
        invest_feature3_desc: "冷蔵保管と放射線照射施設を統合",
        investment_quote: "Toan Phat Logisticsの効率的な冷蔵保管運営能力を高く評価しています。これは、厳格な温度管理を必要とする農産物・水産物輸出にとって重要な要素です。",
        quote_position: "会長兼CEO、MOLロジスティクス",
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
        footer_hq: "本社 - ホーチミン市",
        footer_services: "サービス",
        footer_company: "会社",
        footer_certifications: "認証",
        footer_quick_links: "クイックリンク",
        footer_support: "サポート",
        footer_track: "貨物追跡",
        footer_quote: "見積もりを取得",
        footer_investment: "メコン物流ハブ",
        footer_careers: "採用情報",
        footer_news: "ニュース",
        footer_faq: "よくある質問",
        footer_terms: "利用規約",
        footer_privacy: "プライバシーポリシー",
        footer_sitemap: "サイトマップ",
        footer_rights: "無断転載を禁じます。",
        footer_established: "2005年11月設立",
        
        // About Page
        about_page_title: "MOLロジスティクスベトナムについて",
        about_page_subtitle: "19年以上の物流における卓越性",
        about_page_badge: "設立 2006年",
        about_trusted_partner: "信頼できる物流パートナー",
        about_lead_text: "MOL Logistics (Vietnam) Co., Ltd.は、世界最大の海運会社の一つである商船三井（MOL）のグローバルな専門知識に支えられた、包括的な物流ソリューションの主要プロバイダーです。",
        about_description: "2006年の設立以来、革新的な物流ソリューション、信頼できるサービス、そして卓越性へのコミットメントを通じて、ベトナムと世界をつなぐことに専念してきました。",
        about_mol_group: "MOLグループの一員",
        about_mol_group_desc: "130年以上の海運の卓越性",
        about_global_network_title: "グローバルネットワーク",
        about_global_network_desc: "100カ国以上、650以上の拠点",
        about_expert_team: "専門チーム",
        about_expert_team_desc: "熟練した物流専門家",
        about_journey_title: "私たちの歩み",
        about_journey_desc: "成長の物語におけるマイルストーン",
        about_2006: "会社設立",
        about_2006_desc: "ホーチミン市にMOLロジスティクスベトナム設立",
        about_2010: "ネットワーク拡大",
        about_2010_desc: "ハノイとハイフォンにオフィス開設",
        about_2015: "ISO認証取得",
        about_2015_desc: "ISO 9001 & 14001認証を取得",
        about_2020: "デジタルトランスフォーメーション",
        about_2020_desc: "先進的な追跡システムを導入",
        about_2025: "戦略的成長",
        about_2025_desc: "全国17拠点に拡大",
        
        // Services Page
        services_page_title: "私たちのサービス",
        services_page_subtitle: "お客様のビジネスニーズに合わせた包括的な物流ソリューション",
        services_countries_served: "サービス提供国",
        services_iso_certified: "ISO認証取得",
        services_quality_assured: "品質保証",
        services_customer_support: "カスタマーサポート",
        services_tracking_system: "追跡システム",
        services_real_time: "リアルタイム",
        services_cta_title: "物流を最適化する準備はできていますか？",
        services_cta_desc: "お客様のご要望について、チームにご相談ください",
        services_get_quote: "見積もりを取得",
        services_contact_us: "お問い合わせ",
        
        // News Page
        news_page_title: "ニュース＆アップデート",
        news_page_subtitle: "最新の開発と業界の洞察について情報を入手",
        news_search_placeholder: "ニュース記事を検索...",
        news_search_btn: "検索",
        news_filter_by: "フィルター:",
        news_all: "すべてのニュース",
        news_company: "会社ニュース",
        news_investments: "投資",
        news_new_services: "新サービス",
        news_certifications: "認証",
        news_partnerships: "パートナーシップ",
        news_sort_by: "並べ替え:",
        news_newest: "新しい順",
        news_oldest: "古い順",
        news_title_az: "タイトル (A-Z)",
        news_showing: "表示中",
        news_articles: "記事",
        
        // Locations Page
        locations_page_title: "私たちのネットワーク",
        locations_page_subtitle: "ベトナム全土に17拠点、世界中に650以上",
        locations_offices_vn: "ベトナムのオフィス",
        locations_countries: "サービス提供国",
        locations_global: "グローバル拠点",
        locations_team: "チームメンバー",
        locations_all: "すべての拠点",
        locations_northern: "北部ベトナム",
        locations_central: "中部ベトナム",
        locations_southern: "南部ベトナム",
        locations_vietnam_offices: "ベトナムオフィス",
        locations_southern_region: "南部ベトナム",
        locations_head_office: "本社",
        locations_northern_region: "北部地域",
        
        // 404 Page
        error_404_title: "ページが見つかりません",
        error_404_desc: "申し訳ございません。お探しのページは存在しないか、移動されました。",
        error_404_home: "ホームに戻る",
        error_404_services: "サービスを見る",
        error_404_contact: "お問い合わせ",
        
        // Common
        breadcrumb_home: "ホーム",
        read_more: "続きを読む",
        learn_more: "詳細を見る",
        view_all: "すべて表示",
        get_started: "始める",
        back_to_top: "トップに戻る",
        
        // Demo Page
        demo_title: "🌐 多言語システムデモ",
        demo_subtitle: "下のボタンをクリックして言語を変更してください"
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
    initTrackingTabs();
    initSearchModal();
    initToolsSection();
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
    
    // Update all placeholder texts
    document.querySelectorAll('[data-lang-key-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-key-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
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

// Tracking Tabs Functionality
function initTrackingTabs() {
    const trackingTabs = document.querySelectorAll('.tracking-tab');
    const trackingTabContents = document.querySelectorAll('.tracking-tab-content');
    
    trackingTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            trackingTabs.forEach(t => t.classList.remove('active'));
            trackingTabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab + '-tracking').classList.add('active');
        });
    });
    
    // Multiple tracking button
    const trackMultipleBtn = document.getElementById('trackMultipleBtn');
    const multipleTrackingInput = document.getElementById('multipleTrackingInput');
    
    if (trackMultipleBtn && multipleTrackingInput) {
        trackMultipleBtn.addEventListener('click', function() {
            const trackingNumbers = multipleTrackingInput.value.trim().split('\n').filter(num => num.trim() !== '');
            
            if (trackingNumbers.length === 0) {
                alert('Please enter at least one tracking number');
                return;
            }
            
            // In a real application, you would query a tracking API for multiple numbers
            let resultsMessage = `Tracking ${trackingNumbers.length} shipments:\n\n`;
            trackingNumbers.forEach((num, index) => {
                resultsMessage += `${index + 1}. ${num.trim()}: In Transit\n`;
            });
            
            alert(resultsMessage);
        });
    }
}

// Search Modal Functionality
function initSearchModal() {
    const searchToggle = document.getElementById('searchToggle');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchFilters = document.querySelectorAll('.search-filter');
    
    // Open search modal
    if (searchToggle && searchModal) {
        searchToggle.addEventListener('click', function() {
            searchModal.classList.add('active');
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 100);
        });
    }
    
    // Close search modal
    if (searchClose && searchModal) {
        searchClose.addEventListener('click', function() {
            searchModal.classList.remove('active');
        });
        
        // Close modal when clicking outside
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
        
        // Close modal on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchModal.classList.contains('active')) {
                searchModal.classList.remove('active');
            }
        });
    }
    
    // Search filters
    searchFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            searchFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            const filterType = this.getAttribute('data-filter');
            // In a real application, you would filter search results here
            console.log('Filter selected:', filterType);
        });
    });
    
    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim().toLowerCase();
            
            // In a real application, you would perform actual search here
            if (searchTerm.length > 2) {
                console.log('Searching for:', searchTerm);
                // You could show search results here
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    performSearch(searchTerm);
                }
            }
        });
    }
    
    // Suggestion tags
    const suggestionTags = document.querySelectorAll('.suggestion-tag');
    suggestionTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const searchTerm = this.textContent;
            if (searchInput) {
                searchInput.value = searchTerm;
                performSearch(searchTerm);
            }
        });
    });
}

function performSearch(searchTerm) {
    // In a real application, this would search through content and display results
    console.log('Performing search for:', searchTerm);
    alert(`Searching for: "${searchTerm}"\n\nThis would show search results in a real implementation.`);
}

// Tools & Resources Functionality
function initToolsSection() {
    initQuoteForm();
    initCO2Calculator();
    initShippingCalculator();
    initOfficeLocator();
}

// Quote Form
function initQuoteForm() {
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const service = document.getElementById('quoteService').value;
            const formData = new FormData(quoteForm);
            
            // In a real application, send to server
            alert(`Quote Request Submitted!\n\nService: ${service}\nWe'll send you a detailed quote within 2 hours.`);
            quoteForm.reset();
        });
    }
}

// CO2 Calculator
function initCO2Calculator() {
    const co2Form = document.getElementById('co2Form');
    const co2Result = document.getElementById('co2Result');
    const co2Value = document.getElementById('co2Value');
    
    if (co2Form) {
        co2Form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const transport = document.getElementById('co2Transport').value;
            const distance = parseFloat(document.getElementById('co2Distance').value);
            const weight = parseFloat(document.getElementById('co2Weight').value);
            
            // CO2 emission factors (kg CO2 per ton-km)
            const emissionFactors = {
                ocean: 0.008,   // Sea freight
                air: 0.602,     // Air freight
                truck: 0.062,   // Road transport
                rail: 0.022     // Rail transport
            };
            
            const factor = emissionFactors[transport] || 0.05;
            const co2Emissions = (weight / 1000) * distance * factor;
            
            co2Value.textContent = co2Emissions.toFixed(2);
            co2Result.style.display = 'block';
        });
    }
}

// Shipping Cost Calculator
function initShippingCalculator() {
    const shippingForm = document.getElementById('shippingForm');
    const shippingResult = document.getElementById('shippingResult');
    const shippingValue = document.getElementById('shippingValue');
    
    if (shippingForm) {
        shippingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const weight = parseFloat(document.getElementById('shipWeight').value);
            const service = document.getElementById('shipService').value;
            
            // Base rates (USD per kg)
            const baseRates = {
                express: 8.5,
                standard: 5.0,
                economy: 3.2
            };
            
            const rate = baseRates[service] || 5.0;
            let totalCost = weight * rate;
            
            // Add volumetric weight consideration (simplified)
            const dimensions = shippingForm.querySelectorAll('input[type="number"]');
            if (dimensions.length >= 3) {
                const length = parseFloat(dimensions[0].value);
                const width = parseFloat(dimensions[1].value);
                const height = parseFloat(dimensions[2].value);
                const volumetricWeight = (length * width * height) / 5000; // Dimensional weight divisor
                
                if (volumetricWeight > weight) {
                    totalCost = volumetricWeight * rate;
                }
            }
            
            // Add minimum charge
            if (totalCost < 25) totalCost = 25;
            
            shippingValue.textContent = '$' + totalCost.toFixed(2);
            shippingResult.style.display = 'block';
        });
    }
}

// Office Locator
function initOfficeLocator() {
    const locationChips = document.querySelectorAll('.location-chip');
    const officeSearch = document.getElementById('officeSearch');
    
    locationChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            showOfficeInfo(location);
        });
    });
    
    if (officeSearch) {
        officeSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim().toLowerCase();
                // Search for matching location
                if (searchTerm.includes('ho chi minh') || searchTerm.includes('hcm') || searchTerm.includes('saigon')) {
                    showOfficeInfo('hcm');
                } else if (searchTerm.includes('hanoi') || searchTerm.includes('ha noi')) {
                    showOfficeInfo('hanoi');
                } else if (searchTerm.includes('hai phong') || searchTerm.includes('haiphong')) {
                    showOfficeInfo('haiphong');
                } else if (searchTerm.includes('da nang') || searchTerm.includes('danang')) {
                    showOfficeInfo('danang');
                } else {
                    alert('Office not found. Please select from the quick locations.');
                }
            }
        });
    }
}

function showOfficeInfo(location) {
    const branch = branchData[location];
    if (!branch) return;
    
    const info = `
📍 ${branch.title[currentLang]}

📧 ${branch.email}
📞 ${branch.phone}
⏰ ${branch.hours[currentLang].replace(/<br>/g, '\n')}

🏢 ${branch.address[currentLang]}
    `;
    
    alert(info);
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        setTimeout(() => {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Update branch selector
            const branchSelector = document.getElementById('branchSelector');
            if (branchSelector) {
                branchSelector.value = location;
                updateBranchInfo(location);
            }
        }, 300);
    }
}
