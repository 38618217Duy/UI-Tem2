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
    // Get translation function
    const t = (key) => window.i18n ? window.i18n.t(key) : key;
    
    const services = [
        {
            id: 'ocean-freight',
            icon: 'directions_boat',
            titleKey: 'service_ocean_title',
            detailPage: 'ocean-freight.html',
            descKey: 'service_ocean_desc_full',
            featureKeys: ['service_ocean_f1', 'service_ocean_f2', 'service_ocean_f3', 'service_ocean_f4'],
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80'
        },
        {
            id: 'air-freight',
            icon: 'flight',
            titleKey: 'service_air_title',
            detailPage: 'air-freight.html',
            descKey: 'service_air_desc_full',
            featureKeys: ['service_air_f1', 'service_air_f2', 'service_air_f3', 'service_air_f4'],
            image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80'
        },
        {
            id: 'land-transport',
            icon: 'local_shipping',
            titleKey: 'service_land_title',
            detailPage: 'land-transport.html',
            descKey: 'service_land_desc_full',
            featureKeys: ['service_land_f1', 'service_land_f2', 'service_land_f3', 'service_land_f4'],
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80'
        },
        {
            id: 'warehousing',
            icon: 'warehouse',
            titleKey: 'service_warehouse_title',
            detailPage: 'warehousing.html',
            descKey: 'service_warehouse_desc_full',
            featureKeys: ['service_warehouse_f1', 'service_warehouse_f2', 'service_warehouse_f3', 'service_warehouse_f4'],
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80'
        },
        {
            id: 'customs',
            icon: 'gavel',
            titleKey: 'service_customs_title',
            detailPage: 'customs-clearance.html',
            descKey: 'service_customs_desc_full',
            featureKeys: ['service_customs_f1', 'service_customs_f2', 'service_customs_f3', 'service_customs_f4'],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
        },
        {
            id: 'supply-chain',
            icon: 'hub',
            titleKey: 'service_supply_title',
            detailPage: 'supply-chain.html',
            descKey: 'service_supply_desc_full',
            featureKeys: ['service_supply_f1', 'service_supply_f2', 'service_supply_f3', 'service_supply_f4'],
            image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&q=80'
        }
    ];
    
    const container = document.getElementById('services-content');
    let html = '';
    
    services.forEach((service, index) => {
        const isReverse = index % 2 === 1;
        const bgClass = isReverse ? 'alt-bg' : '';
        const title = t(service.titleKey);
        const description = t(service.descKey);
        
        html += `
        <section id="${service.id}" class="service-detail ${bgClass}">
            <div class="container">
                <div class="service-detail-wrapper ${isReverse ? 'reverse' : ''}">
                    ${isReverse ? `
                    <div class="service-detail-image">
                        <img src="${service.image}" alt="${title}">
                    </div>
                    ` : ''}
                    <div class="service-detail-content">
                        <div class="service-badge">
                            <span class="material-icons">${service.icon}</span>
                        </div>
                        <h2>${title}</h2>
                        <p class="service-lead">${description}</p>
                        <div class="service-features-list">
                            ${service.featureKeys.map(featureKey => `
                            <div class="feature-item">
                                <span class="material-icons">check_circle</span>
                                <p>${t(featureKey)}</p>
                            </div>
                            `).join('')}
                        </div>
                        <div class="service-cta">
                            <a href="${service.detailPage}" class="btn btn-primary">
                                ${t('learn_more')}
                                <span class="material-icons">arrow_forward</span>
                            </a>
                            <a href="quote-calculator.html" class="btn" style="margin-left: 15px; background: linear-gradient(135deg, #FF6600, #E55A00); color: white; box-shadow: 0 4px 12px rgba(255, 102, 0, 0.25);">
                                ${t('services_get_quote')}
                            </a>
                        </div>
                    </div>
                    ${!isReverse ? `
                    <div class="service-detail-image">
                        <img src="${service.image}" alt="${title}">
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
