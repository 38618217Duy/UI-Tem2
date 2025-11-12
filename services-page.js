// Services Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadHeaderFooter();
    loadServicesContent();
});

// Load Header and Footer
function loadHeaderFooter() {
    const headerHTML = `
    <header>
        <nav class="navbar">
            <div class="container">
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="index.html">
                            <img src="img/logo/logo_mol-1.png" alt="MOL Logistics Vietnam">
                        </a>
                    </div>
                    
                    <ul class="nav-menu" id="navMenu">
                        <li><a href="index.html" class="nav-link">Home</a></li>
                        <li class="nav-dropdown">
                            <a href="services.html" class="nav-link active">
                                Services
                                <span class="material-icons dropdown-icon">expand_more</span>
                            </a>
                            <div class="mega-menu">
                                <div class="mega-menu-grid">
                                    <div class="mega-menu-column">
                                        <h4>Freight Services</h4>
                                        <ul class="mega-menu-list">
                                            <li><a href="#ocean-freight"><span class="material-icons">directions_boat</span><div><strong>Ocean Freight</strong><span>Global sea transport</span></div></a></li>
                                            <li><a href="#air-freight"><span class="material-icons">flight</span><div><strong>Air Freight</strong><span>Fast delivery</span></div></a></li>
                                            <li><a href="#land-transport"><span class="material-icons">local_shipping</span><div><strong>Land Transport</strong><span>Nationwide trucking</span></div></a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu-column">
                                        <h4>Logistics Solutions</h4>
                                        <ul class="mega-menu-list">
                                            <li><a href="#warehousing"><span class="material-icons">warehouse</span><div><strong>Warehousing</strong><span>Modern facilities</span></div></a></li>
                                            <li><a href="#customs"><span class="material-icons">gavel</span><div><strong>Customs Clearance</strong><span>Expert brokerage</span></div></a></li>
                                            <li><a href="#supply-chain"><span class="material-icons">hub</span><div><strong>Supply Chain</strong><span>End-to-end</span></div></a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu-column mega-menu-featured">
                                        <div class="featured-service">
                                            <span class="featured-badge">Featured</span>
                                            <span class="material-icons featured-icon">ac_unit</span>
                                            <h4>Cold Chain Solutions</h4>
                                            <p>11,000 tons capacity</p>
                                            <a href="index.html#investment" class="featured-link">Learn More <span class="material-icons">arrow_forward</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-dropdown">
                            <a href="index.html#about" class="nav-link">Company <span class="material-icons dropdown-icon">expand_more</span></a>
                            <div class="compact-menu">
                                <ul class="compact-menu-list">
                                    <li><a href="index.html#about"><span class="material-icons">info</span><span>About Us</span></a></li>
                                    <li><a href="index.html#sustainability"><span class="material-icons">eco</span><span>Sustainability</span></a></li>
                                    <li><a href="index.html#network"><span class="material-icons">location_on</span><span>Network</span></a></li>
                                    <li><a href="index.html#testimonials"><span class="material-icons">star</span><span>Testimonials</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="news.html" class="nav-link">News</a></li>
                        <li><a href="index.html#contact" class="nav-link">Contact</a></li>
                    </ul>

                    <div class="nav-actions">
                        <button class="search-toggle" id="searchToggle">
                            <span class="material-icons">search</span>
                        </button>
                        <div class="language-switcher">
                            <button class="lang-btn active" data-lang="en">EN</button>
                            <button class="lang-btn" data-lang="vi">VI</button>
                            <button class="lang-btn" data-lang="ja">JA</button>
                        </div>
                        <button class="mobile-menu-toggle" id="mobileMenuToggle">
                            <span class="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    `;
    
    document.getElementById('header-placeholder').outerHTML = headerHTML;
    
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 MOL Logistics (Vietnam) Co., Ltd. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    
    document.getElementById('footer-placeholder').outerHTML = footerHTML;
    
    initMobileMenu();
    initSmoothScroll();
}

// Load Services Content
function loadServicesContent() {
    const services = [
        {
            id: 'ocean-freight',
            icon: 'directions_boat',
            title: 'Ocean Freight',
            description: 'Comprehensive sea freight solutions with global coverage',
            features: [
                'Full Container Load (FCL)',
                'Less than Container Load (LCL)',
                'Reefer Containers',
                'Break Bulk & Project Cargo'
            ],
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80'
        },
        {
            id: 'air-freight',
            icon: 'flight',
            title: 'Air Freight',
            description: 'Fast and reliable air cargo services',
            features: [
                'Express Air Cargo',
                'Standard Air Freight',
                'Dangerous Goods Handling',
                'Charter Services'
            ],
            image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80'
        },
        {
            id: 'land-transport',
            icon: 'local_shipping',
            title: 'Land Transportation',
            description: 'Nationwide trucking solutions with GPS tracking',
            features: [
                'Full Truckload (FTL)',
                'Less than Truckload (LTL)',
                'Cross-Border Transport',
                'Real-time GPS Tracking'
            ],
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80'
        },
        {
            id: 'warehousing',
            icon: 'warehouse',
            title: 'Warehousing',
            description: 'Modern storage facilities with inventory management',
            features: [
                'Ambient & Temperature-Controlled Storage',
                'Warehouse Management System',
                'Cross-Docking Services',
                'Value-Added Services'
            ],
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80'
        },
        {
            id: 'customs',
            icon: 'gavel',
            title: 'Customs Clearance',
            description: 'Expert customs brokerage services',
            features: [
                'Import/Export Clearance',
                'Compliance Consulting',
                'Duty & Tax Management',
                'AEO Certified'
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
        },
        {
            id: 'supply-chain',
            icon: 'hub',
            title: 'Supply Chain Solutions',
            description: 'End-to-end supply chain management',
            features: [
                'Supply Chain Consulting',
                'System Integration',
                'Visibility Solutions',
                'Data Analytics'
            ],
            image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&q=80'
        }
    ];
    
    const container = document.getElementById('services-content');
    let html = '';
    
    services.forEach((service, index) => {
        const isReverse = index % 2 === 1;
        const bgClass = isReverse ? 'alt-bg' : '';
        
        html += `
        <section id="${service.id}" class="service-detail ${bgClass}">
            <div class="container">
                <div class="service-detail-wrapper ${isReverse ? 'reverse' : ''}">
                    ${isReverse ? `
                    <div class="service-detail-image">
                        <img src="${service.image}" alt="${service.title}">
                    </div>
                    ` : ''}
                    <div class="service-detail-content">
                        <div class="service-badge">
                            <span class="material-icons">${service.icon}</span>
                        </div>
                        <h2>${service.title}</h2>
                        <p class="service-lead">${service.description}</p>
                        <div class="service-features-list">
                            ${service.features.map(feature => `
                            <div class="feature-item">
                                <span class="material-icons">check_circle</span>
                                <p>${feature}</p>
                            </div>
                            `).join('')}
                        </div>
                        <div class="service-cta">
                            <a href="index.html#tools" class="btn btn-primary">
                                Get a Quote
                                <span class="material-icons">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    ${!isReverse ? `
                    <div class="service-detail-image">
                        <img src="${service.image}" alt="${service.title}">
                    </div>
                    ` : ''}
                </div>
            </div>
        </section>
        `;
    });
    
    container.innerHTML = html;
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            const icon = this.querySelector('.material-icons');
            icon.textContent = menu.classList.contains('active') ? 'close' : 'menu';
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
