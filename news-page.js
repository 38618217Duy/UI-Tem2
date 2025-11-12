// News Page JavaScript - Search and Filter Functionality

document.addEventListener('DOMContentLoaded', function() {
    loadHeaderFooter();
    initNewsFilters();
    initNewsSearch();
    initNewsPagination();
    initShareButtons();
});

// Load Header and Footer
function loadHeaderFooter() {
    // Clone header from index.html structure
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
                            <a href="services.html" class="nav-link">
                                Services
                                <span class="material-icons dropdown-icon">expand_more</span>
                            </a>
                            <div class="mega-menu">
                                <div class="mega-menu-grid">
                                    <div class="mega-menu-column">
                                        <h4>Freight Services</h4>
                                        <ul class="mega-menu-list">
                                            <li><a href="services.html#ocean-freight"><span class="material-icons">directions_boat</span><div><strong>Ocean Freight</strong><span>Global sea transport</span></div></a></li>
                                            <li><a href="services.html#air-freight"><span class="material-icons">flight</span><div><strong>Air Freight</strong><span>Fast delivery</span></div></a></li>
                                            <li><a href="services.html#land-transport"><span class="material-icons">local_shipping</span><div><strong>Land Transport</strong><span>Nationwide trucking</span></div></a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu-column">
                                        <h4>Logistics Solutions</h4>
                                        <ul class="mega-menu-list">
                                            <li><a href="services.html#warehousing"><span class="material-icons">warehouse</span><div><strong>Warehousing</strong><span>Modern facilities</span></div></a></li>
                                            <li><a href="services.html#customs"><span class="material-icons">gavel</span><div><strong>Customs Clearance</strong><span>Expert brokerage</span></div></a></li>
                                            <li><a href="services.html#supply-chain"><span class="material-icons">hub</span><div><strong>Supply Chain</strong><span>End-to-end</span></div></a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu-column mega-menu-featured">
                                        <div class="featured-service">
                                            <span class="featured-badge">Featured</span>
                                            <span class="material-icons featured-icon">ac_unit</span>
                                            <h4>Cold Chain Solutions</h4>
                                            <p>11,000 tons capacity storage</p>
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
                        <li><a href="news.html" class="nav-link active">News</a></li>
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
    
    // Simple footer
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
    
    // Re-initialize mobile menu
    initMobileMenu();
}

// Initialize News Filters
function initNewsFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            let visibleCount = 0;
            
            // Filter news cards
            newsCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Update results count
            updateResultsCount(visibleCount);
        });
    });
}

// Initialize News Search
function initNewsSearch() {
    const searchInput = document.getElementById('newsSearchInput');
    const searchBtn = document.getElementById('newsSearchBtn');
    const newsCards = document.querySelectorAll('.news-card');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;
        
        newsCards.forEach(card => {
            const title = card.querySelector('.news-title').textContent.toLowerCase();
            const excerpt = card.querySelector('.news-excerpt').textContent.toLowerCase();
            
            if (searchTerm === '' || title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        updateResultsCount(visibleCount);
        
        // Reset filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === 'all') {
                btn.classList.add('active');
            }
        });
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Real-time search
    searchInput.addEventListener('input', function() {
        if (this.value.length > 2 || this.value.length === 0) {
            performSearch();
        }
    });
}

// Sort Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortNews(this.value);
        });
    }
});

function sortNews(sortType) {
    const newsGrid = document.getElementById('newsGrid');
    const newsCards = Array.from(newsGrid.querySelectorAll('.news-card'));
    
    newsCards.sort((a, b) => {
        if (sortType === 'newest') {
            return b.getAttribute('data-date').localeCompare(a.getAttribute('data-date'));
        } else if (sortType === 'oldest') {
            return a.getAttribute('data-date').localeCompare(b.getAttribute('data-date'));
        } else if (sortType === 'title') {
            const titleA = a.querySelector('.news-title').textContent;
            const titleB = b.querySelector('.news-title').textContent;
            return titleA.localeCompare(titleB);
        }
    });
    
    // Re-append sorted cards
    newsCards.forEach(card => newsGrid.appendChild(card));
}

// Update Results Count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.innerHTML = `Showing <strong>${count}</strong> article${count !== 1 ? 's' : ''}`;
    }
}

// Pagination
function initNewsPagination() {
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    const pageNumbers = document.querySelectorAll('.page-num');
    
    pageNumbers.forEach(btn => {
        btn.addEventListener('click', function() {
            pageNumbers.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to top of news grid
            document.querySelector('.news-grid-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Share Buttons
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.news-card');
            const title = card.querySelector('.news-title').textContent;
            const url = window.location.href;
            
            // Simple share functionality
            if (navigator.share) {
                navigator.share({
                    title: title,
                    url: url
                }).catch(err => console.log('Error sharing:', err));
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(url).then(() => {
                    alert('Link copied to clipboard!');
                });
            }
        });
    });
}

// Newsletter Form
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            this.reset();
        });
    }
});

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
