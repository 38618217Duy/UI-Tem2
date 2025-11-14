// Services Page JavaScript
// Note: Navbar is now loaded via navbar-loader.js

document.addEventListener('DOMContentLoaded', function() {
    loadFooter();
    loadServicesContent();
    
    // Listen for language changes
    window.addEventListener('languageChanged', function(e) {
        loadServicesContent();
    });
});

// Load Footer only
function loadFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 MOL Logistics (Vietnam) Co., Ltd. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }
}

// Load Services Content
function loadServicesContent() {
    const services = [
        {
            id: 'ocean-freight',
            icon: 'directions_boat',
            title: 'Ocean Freight',
            detailPage: 'ocean-freight.html',
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
            detailPage: 'air-freight.html',
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
            detailPage: 'land-transport.html',
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
            detailPage: 'warehousing.html',
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
            detailPage: 'customs-clearance.html',
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
            detailPage: 'supply-chain.html',
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
                            <a href="${service.detailPage}" class="btn btn-primary">
                                Learn More
                                <span class="material-icons">arrow_forward</span>
                            </a>
                            <a href="quote-calculator.html" class="btn" style="margin-left: 15px; background: linear-gradient(135deg, #FF6600, #E55A00); color: white; box-shadow: 0 4px 12px rgba(255, 102, 0, 0.25);">
                                Get a Quote
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
