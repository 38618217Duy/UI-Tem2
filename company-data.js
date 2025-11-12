// ========================================
// MOL LOGISTICS VIETNAM - COMPANY DATA
// Thông tin toàn diện về doanh nghiệp
// ========================================

const MOL_COMPANY_DATA = {
    // THÔNG TIN CƠ BẢN
    basicInfo: {
        fullName: {
            en: "MOL Logistics (Vietnam) Inc.",
            vi: "Công ty TNHH MOL Logistics (Việt Nam)",
            ja: "MOLロジスティクス（ベトナム）"
        },
        established: "November 2005",
        establishedDate: "2005-11",
        capital: {
            amount: 550000,
            currency: "USD"
        },
        employees: {
            total: 192,
            asOf: "September 2023"
        },
        headquarters: {
            address: {
                en: "Room 2.5A, 2nd Floor, E-Town 6 Building, 364 Cong Hoa Street, Ward 13, Tan Binh District, Ho Chi Minh City, Vietnam",
                vi: "Phòng 2.5A, Tầng 2, Tòa nhà E-Town 6, 364 Cộng Hòa, Phường 13, Quận Tân Bình, TP. Hồ Chí Minh, Việt Nam"
            },
            phone: "+84-28-3812-1349",
            fax: "+84-28-3812-1363",
            email: "mlgvn.salehcm-group@molgroup.com",
            website: "https://mol-logistics.com.vn"
        }
    },

    // CẤU TRÚC TẬP ĐOÀN
    parentCompany: {
        molLogistics: {
            name: "MOL Logistics Co., Ltd.",
            established: "July 1989",
            headquarters: "Tokyo, Japan",
            capital: {
                authorized: 1800000000, // 1.8 billion Yen
                paidIn: 756000000, // 756 million Yen
                currency: "JPY"
            },
            globalNetwork: {
                offices: 140,
                countries: 26,
                agentOffices: 189,
                agentCountries: 51
            },
            employees: 2500,
            certifications: ["ISO 9001", "ISO 14001"]
        },
        molGroup: {
            name: "Mitsui O.S.K. Lines, Ltd. (MOL)",
            established: 1964,
            originalCompanies: [
                { name: "Osaka Shosen Kaisha (OSK)", year: 1878 },
                { name: "Mitsui Steamship Co.", year: 1884 }
            ],
            fleet: {
                vessels: 800,
                description: "One of the world's largest shipping companies"
            },
            revenue: {
                amount: 1750000000000, // 1.75 trillion Yen
                period: "First half of FY2025",
                currency: "JPY"
            }
        }
    },

    // LỊCH SỬ PHÁT TRIỂN
    milestones: [
        {
            year: 2001,
            month: null,
            event: {
                en: "Opened Representative Office in Ho Chi Minh City",
                vi: "Mở Văn phòng đại diện tại TP. Hồ Chí Minh"
            }
        },
        {
            year: 2003,
            month: null,
            event: {
                en: "Opened Representative Office in Hanoi",
                vi: "Mở Văn phòng đại diện tại Hà Nội"
            }
        },
        {
            year: 2005,
            month: null,
            event: {
                en: "Opened Representative Office in Hai Phong",
                vi: "Mở Văn phòng đại diện tại Hải Phòng"
            }
        },
        {
            year: 2005,
            month: 11,
            event: {
                en: "Officially established MOL Logistics (Vietnam) Inc.",
                vi: "Chính thức thành lập MOL Logistics (Vietnam) Inc."
            },
            important: true
        },
        {
            year: 2006,
            month: null,
            event: {
                en: "Became the only Japanese shipping company allowed by Vietnamese government to establish 100% owned subsidiary",
                vi: "MOL trở thành công ty vận tải biển Nhật Bản duy nhất được Chính phủ Việt Nam cho phép thành lập công ty con sở hữu 100% vốn"
            },
            important: true
        },
        {
            year: 2014,
            month: null,
            event: {
                en: "Opened office in Quang Ninh Province",
                vi: "Mở văn phòng tại tỉnh Quảng Ninh"
            }
        },
        {
            year: 2018,
            month: 12,
            event: {
                en: "Opened branch in Da Nang",
                vi: "Mở chi nhánh tại Đà Nẵng"
            }
        },
        {
            year: 2019,
            month: 1,
            event: {
                en: "Started operating own warehouse in Hai Phong",
                vi: "Bắt đầu vận hành kho bãi riêng tại Hải Phòng"
            }
        },
        {
            year: 2020,
            month: 10,
            event: {
                en: "Opened office at Amata Industrial Park, Dong Nai",
                vi: "Khai trương văn phòng tại Khu công nghiệp Amata, tỉnh Đồng Nai"
            }
        },
        {
            year: 2023,
            month: 8,
            event: {
                en: "Opened office at VSIP2, Binh Duong",
                vi: "Mở văn phòng tại Khu công nghiệp Việt Nam - Singapore II (VSIP2), tỉnh Bình Dương"
            }
        },
        {
            year: 2024,
            month: 3,
            event: {
                en: "Opened office in Ha Nam Province",
                vi: "Khai trương văn phòng tại tỉnh Hà Nam"
            }
        },
        {
            year: 2025,
            month: 9,
            event: {
                en: "Became strategic shareholder (39%) of Toan Phat Logistics (TPL)",
                vi: "Trở thành cổ đông chiến lược (39% vốn) của Công ty Cổ phần Kho vận Toàn Phát (TPL)"
            },
            important: true
        }
    ],

    // MẠNG LƯỚI VĂN PHÒNG (17 địa điểm)
    officeNetwork: {
        total: 17,
        asOf: "2024",
        regions: {
            south: {
                name: {
                    en: "Southern Region",
                    vi: "Miền Nam"
                },
                offices: [
                    {
                        name: "Ho Chi Minh City Head Office",
                        nameVi: "Trụ sở chính TP. Hồ Chí Minh",
                        address: "Room 2.5A, 2nd Floor, E-Town 6 Building, 364 Cong Hoa Street, Ward 13, Tan Binh District",
                        phone: "+84-28-3812-1349",
                        email: "mlgvn.salehcm-group@molgroup.com",
                        type: "headquarters"
                    },
                    {
                        name: "Ben Tre Office",
                        nameVi: "Văn phòng Bến Tre",
                        type: "branch"
                    },
                    {
                        name: "Song Than Office - Binh Duong",
                        nameVi: "Văn phòng Song Than - Bình Dương",
                        type: "branch",
                        hasWarehouse: true
                    },
                    {
                        name: "VSIP II Office - Binh Duong",
                        nameVi: "Văn phòng VSIP II - Bình Dương",
                        type: "branch"
                    },
                    {
                        name: "Amata Office - Dong Nai",
                        nameVi: "Văn phòng Amata - Đồng Nai",
                        type: "branch"
                    },
                    {
                        name: "Ba Ria - Vung Tau Office",
                        nameVi: "Văn phòng Bà Rịa - Vũng Tàu",
                        type: "branch"
                    },
                    {
                        name: "Da Nang Office",
                        nameVi: "Văn phòng Đà Nẵng",
                        type: "branch"
                    }
                ]
            },
            north: {
                name: {
                    en: "Northern Region",
                    vi: "Miền Bắc"
                },
                offices: [
                    {
                        name: "Hanoi Branch",
                        nameVi: "Chi nhánh Hà Nội",
                        type: "branch"
                    },
                    {
                        name: "Noi Bai Airport Office",
                        nameVi: "Văn phòng Sân bay Nội Bài",
                        type: "branch"
                    },
                    {
                        name: "Hai Phong Office",
                        nameVi: "Văn phòng Hải Phòng",
                        type: "branch"
                    },
                    {
                        name: "Nomura Industrial Park Office (Japan - Hai Phong)",
                        nameVi: "Văn phòng Khu công nghiệp Nomura (Nhật Bản - Hải Phòng)",
                        type: "branch"
                    },
                    {
                        name: "Hai Phong Logistics Center",
                        nameVi: "Trung tâm Logistics Hải Phòng",
                        type: "warehouse",
                        area: 6000,
                        unit: "m²"
                    },
                    {
                        name: "Hai Duong Office",
                        nameVi: "Văn phòng Hải Dương",
                        type: "branch"
                    },
                    {
                        name: "Thai Binh Office",
                        nameVi: "Văn phòng Thái Bình",
                        type: "branch"
                    },
                    {
                        name: "Quang Ninh Office",
                        nameVi: "Văn phòng Quảng Ninh",
                        type: "branch"
                    },
                    {
                        name: "Ha Nam Office",
                        nameVi: "Văn phòng Hà Nam",
                        type: "branch"
                    }
                ]
            }
        }
    },

    // DỊCH VỤ CHÍNH
    services: {
        airFreight: {
            name: {
                en: "International Air Freight",
                vi: "Vận tải hàng không quốc tế"
            },
            description: {
                en: "Air freight services for diverse cargo types with IATA certified network",
                vi: "Dịch vụ vận chuyển hàng không cho các loại hàng hóa đa dạng với mạng lưới IATA được chứng nhận"
            },
            features: [
                "IATA certified network",
                "Express delivery",
                "Dangerous goods handling",
                "Door-to-door service"
            ]
        },
        oceanFreight: {
            name: {
                en: "International Ocean Freight",
                vi: "Vận tải đường biển quốc tế"
            },
            description: {
                en: "NVOCC services with LCL consolidation from Tokyo/Yokohama to HCMC and Hai Phong",
                vi: "Dịch vụ NVOCC với LCL consolidation từ Tokyo/Yokohama đến Hồ Chí Minh và Hải Phòng"
            },
            features: [
                "NVOCC services",
                "LCL consolidation from Japan",
                "FCL services",
                "Connection to MOL Group global network"
            ]
        },
        customsClearance: {
            name: {
                en: "Customs Clearance",
                vi: "Thủ tục hải quan"
            },
            description: {
                en: "Import/export customs procedures and FTA/EPA/C/O consulting",
                vi: "Làm thủ tục xuất nhập khẩu và tư vấn FTA/EPA/C/O"
            },
            features: [
                "Import/Export clearance",
                "FTA, EPA, C/O consulting",
                "Support by company status (EPE/FDI/Trading license)"
            ]
        },
        warehousing: {
            name: {
                en: "Warehousing",
                vi: "Dịch vụ kho bãi"
            },
            facilities: [
                {
                    name: "Hai Phong Logistics Center",
                    area: 6000,
                    unit: "m²"
                },
                {
                    name: "Song Than Warehouse - Binh Duong",
                    area: null
                }
            ],
            features: [
                "Storage and distribution",
                "Inventory management",
                "Pick and pack services"
            ]
        },
        domesticTransport: {
            name: {
                en: "Domestic Transportation",
                vi: "Vận tải nội địa"
            },
            features: [
                "Truck and trailer transport",
                "Long distance transport (HCMC - Da Nang)",
                "Container transport"
            ]
        },
        logistics: {
            name: {
                en: "Logistics Services",
                vi: "Dịch vụ Logistics"
            },
            features: [
                "Import/Export management and optimization",
                "Inventory management support"
            ]
        },
        moving: {
            name: {
                en: "Moving Services (Domestic and Overseas)",
                vi: "Chuyển nhà trong nước và nước ngoài"
            }
        },
        specialServices: {
            crossBorder: {
                name: "Vietnam - Thailand Cross Border Service (CBT LTL)",
                route: "East-West ASEAN Corridor",
                distance: 1600,
                unit: "km",
                transitTime: "3-4 days",
                advantages: [
                    "Half the cost of air freight",
                    "3x faster than ocean freight (10 days)"
                ]
            },
            projectCargo: {
                name: "Project Cargo Services",
                description: "Experienced in handling project cargo for Japanese enterprises"
            }
        }
    },

    // NGÀNH HÀNG PHỤC VỤ
    industries: [
        { en: "Automobile parts", vi: "Linh kiện ô tô" },
        { en: "Electrical parts", vi: "Linh kiện điện" },
        { en: "Electric appliances", vi: "Thiết bị điện tử" },
        { en: "Furnitures", vi: "Nội thất" },
        { en: "Chemicals", vi: "Hóa chất" },
        { en: "Toys", vi: "Đồ chơi" },
        { en: "Machineries", vi: "Máy móc" },
        { en: "Medical appliances", vi: "Thiết bị y tế" },
        { en: "Irons and steels", vi: "Sắt và thép" },
        { en: "Clothings/Shoes", vi: "Quần áo/Giày dép" },
        { en: "Foods", vi: "Thực phẩm" }
    ],

    // CHỨNG NHẬN
    certifications: [
        {
            name: "ISO 9001:2015",
            description: "Quality Management System",
            descriptionVi: "Hệ thống quản lý chất lượng"
        },
        {
            name: "ISO 14001",
            description: "Environmental Management System",
            descriptionVi: "Hệ thống quản lý môi trường"
        },
        {
            name: "AEO",
            description: "Authorized Economic Operator (in multiple countries)",
            descriptionVi: "Nhà khai thác kinh tế được ủy quyền",
            level: "Parent company"
        },
        {
            name: "IATA",
            description: "International Air Transport Association",
            descriptionVi: "Hiệp hội Vận tải Hàng không Quốc tế"
        }
    ],

    // BAN LÃNH ĐẠO
    leadership: {
        current: {
            asOf: "April 2024",
            executives: [
                {
                    name: "Yumi Fukunaga",
                    position: {
                        en: "Chairman & General Director",
                        vi: "Chủ tịch kiêm Tổng Giám đốc"
                    },
                    additionalRole: "Executive Officer of MOL Logistics Co., Ltd.",
                    responsibility: "Southeast Asia (except Thailand and Myanmar) and Oceania",
                    basedIn: "Vietnam"
                }
            ]
        },
        previous: [
            {
                name: "Joji Suzuki",
                position: "General Director",
                period: "Until 2023"
            },
            {
                name: "Masaki Numata",
                position: "General Manager - Hanoi Branch",
                period: "As of 2024"
            }
        ]
    },

    // ĐẦU TƯ CHIẾN LƯỢC
    strategicInvestments: {
        toanPhatLogistics: {
            year: 2025,
            month: 9,
            partner: "Toan Phat Logistics (TPL)",
            ownership: {
                molLogistics: 39,
                kawanishiWarehouse: 51,
                toanPhatIrradiation: 10,
                unit: "%"
            },
            project: {
                name: "Mekong Logistics Hub",
                description: {
                    en: "Vietnam's first integrated cold chain logistics center",
                    vi: "Trung tâm logistics lạnh tích hợp đầu tiên tại Việt Nam"
                },
                location: "Tay Ninh Province",
                capacity: {
                    coldStorage: 11000,
                    unit: "tons"
                },
                features: [
                    "Combined cold storage with irradiation facility",
                    "Serving agricultural and seafood exports",
                    "Connected to MOL's global transport network",
                    "Utilizing TCIT (Cai Mep) and HICT (Hai Phong) ports"
                ]
            },
            quote: {
                speaker: "Osamu Sakurada",
                position: "Chairman & CEO of MOL Logistics",
                text: {
                    en: "We highly value Toan Phat Logistics' efficient cold storage operation capabilities. This is a crucial factor for agricultural and seafood exports - sectors that require strict temperature management.",
                    vi: "Chúng tôi đánh giá cao năng lực vận hành kho lạnh hiệu quả của Toàn Phát Logistics. Đây là yếu tố then chốt đối với xuất khẩu nông sản và thủy sản - những ngành đòi hỏi quản lý nhiệt độ nghiêm ngặt."
                }
            }
        }
    },

    // THỊ TRƯỜNG LOGISTICS VIỆT NAM
    marketContext: {
        marketSize: {
            value: { min: 30, max: 80 },
            unit: "billion USD",
            year: 2024
        },
        growthRate: {
            cagr: { min: 3.8, max: 6.7 },
            unit: "%",
            period: "2025-2033"
        },
        industryGrowth: {
            rate: { min: 14, max: 16 },
            unit: "%",
            period: "Recent years"
        },
        logisticsCostGDP: {
            percentage: 18,
            description: "Logistics costs as % of Vietnam GDP"
        },
        rankings: {
            emergingMarkets: "Top 10",
            logisticsOpportunityIndex: "Top 4 globally",
            logisticsPerformanceIndex: "43rd globally"
        }
    },

    // ƯU THẾ CẠNH TRANH
    competitiveAdvantages: [
        {
            title: "Strong Global Network",
            titleVi: "Mạng lưới toàn cầu mạnh mẽ",
            points: [
                "Connected to 140 offices in 26 countries",
                "Access to MOL's fleet of 800+ vessels"
            ]
        },
        {
            title: "Experience and Reputation",
            titleVi: "Kinh nghiệm và uy tín",
            points: [
                "Nearly 20 years in Vietnam (since 2005)",
                "Reputable Japanese brand with 120+ years of parent company history"
            ]
        },
        {
            title: "Extensive Network",
            titleVi: "Mạng lưới rộng khắp",
            points: [
                "17 locations nationwide",
                "Coverage of major industrial parks"
            ]
        },
        {
            title: "Integrated Services",
            titleVi: "Dịch vụ tích hợp",
            points: [
                "End-to-end logistics solutions",
                "Combined air, sea, land, and warehouse services"
            ]
        },
        {
            title: "Quality Service",
            titleVi: "Chất lượng dịch vụ",
            points: [
                "ISO 9001:2015 and ISO 14001 certified",
                "International quality management standards"
            ]
        },
        {
            title: "Infrastructure Investment",
            titleVi: "Đầu tư cơ sở hạ tầng",
            points: [
                "6,000 m² Hai Phong Logistics Center",
                "Continuous network expansion"
            ]
        },
        {
            title: "Strategic Port Connections",
            titleVi: "Kết nối cảng biển chiến lược",
            points: [
                "MOL Group investment in Cai Mep Port (TCIT)",
                "Investment in Lach Huyen Port (HICT)"
            ]
        }
    ],

    // TRÁCH NHIỆM XÃ HỘI
    csr: {
        program: "BLUE ACTION for ALL",
        focusAreas: [
            {
                en: "Marine environment",
                vi: "Môi trường biển"
            },
            {
                en: "Next-Generation Human Resources Development",
                vi: "Phát triển nguồn nhân lực thế hệ tương lai"
            },
            {
                en: "Addressing Local Community Challenges",
                vi: "Giải quyết các thách thức cộng đồng địa phương"
            }
        ],
        activities: [
            {
                description: "Beach cleanup at Phu Quoc Island",
                descriptionVi: "Dọn dẹp bãi biển đảo Phú Quốc"
            },
            {
                description: "Participated in waste collection event at Saigon Zoo",
                descriptionVi: "Tham gia sự kiện thu gom rác tại Vườn thú Sài Gòn"
            },
            {
                description: "Disaster relief support: $36,000 USD to Vietnam",
                descriptionVi: "Hỗ trợ cứu trợ thiên tai: 36,000 USD"
            }
        ]
    },

    // TRIỂN VỌNG VÀ ĐỊNH HƯỚNG
    futureOutlook: {
        strategies: [
            {
                area: "Geographic Expansion",
                areaVi: "Mở rộng địa lý",
                details: [
                    "Expanded from 13 locations (2020) to 17 locations (2024)",
                    "Focus on industrial parks with Japanese and foreign companies"
                ]
            },
            {
                area: "Cold Chain Development",
                areaVi: "Phát triển dịch vụ logistics lạnh",
                details: [
                    "Strategic investment in Toan Phat Logistics",
                    "Goal to become key ASEAN cold cargo transit center"
                ]
            },
            {
                area: "Infrastructure Enhancement",
                areaVi: "Tăng cường hạ tầng",
                details: [
                    "Warehouse and facility investment at strategic locations",
                    "Connection to major seaports and airports"
                ]
            },
            {
                area: "Technology Integration",
                areaVi: "Tích hợp công nghệ",
                details: [
                    "Cloud-based transport management systems",
                    "RPA (Robotic Process Automation) implementation"
                ]
            }
        ],
        opportunities: [
            {
                area: "Trade Growth",
                details: [
                    "Agricultural/forestry/seafood exports target: $65B (2025), $100B (future)",
                    "E-commerce growth: 16-30% annually"
                ]
            },
            {
                area: "Manufacturing Shift",
                details: [
                    "Companies relocating from China to Vietnam",
                    "28% increase in manufacturing logistics demand (2024)"
                ]
            },
            {
                area: "Infrastructure Improvement",
                details: [
                    "Government investment in logistics infrastructure",
                    "Long Thanh International Airport under construction"
                ]
            },
            {
                area: "FDI Incentives",
                details: [
                    "Supportive foreign investment policies",
                    "Competitive labor costs"
                ]
            }
        ]
    },

    // STATISTICS SUMMARY
    keyStats: {
        companyAge: 19, // Years since 2005
        totalLocations: 17,
        employees: 192,
        warehouseSpace: 6000, // m² (Hai Phong)
        globalOffices: 140,
        globalCountries: 26,
        fleetSize: 800, // MOL Group vessels
        parentCompanyHistory: 141 // Years since 1884
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOL_COMPANY_DATA;
}
