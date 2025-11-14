// News Page JavaScript - Search and Filter Functionality
// Note: Navbar is now loaded via navbar-loader.js

document.addEventListener('DOMContentLoaded', function() {
    loadFooter();
    initNewsFilters();
    initNewsSearch();
    initNewsPagination();
    initShareButtons();
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
