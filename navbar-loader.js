/**
 * MOL Logistics Vietnam - Unified Navbar Loader
 * Loads navbar consistently across all pages
 */

function loadNavbar(pathPrefix = '') {
    const navbarPath = pathPrefix + 'navbar-component.html';
    console.log('Loading navbar from:', navbarPath);
    console.log('Path prefix:', pathPrefix);
    
    fetch(navbarPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Navbar component not found at: ' + navbarPath);
            }
            return response.text();
        })
        .then(html => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.outerHTML = html;
                console.log('Navbar HTML inserted');
                
                // Adjust paths if in subfolder
                if (pathPrefix) {
                    console.log('Adjusting paths with prefix:', pathPrefix);
                    adjustNavbarPaths(pathPrefix);
                }
                
                // Initialize navbar functionality after loading
                initializeNavbar();
            } else {
                console.error('header-placeholder not found');
            }
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

function adjustNavbarPaths(prefix) {
    // Adjust logo path
    const logo = document.querySelector('.logo img');
    if (logo && prefix) {
        const logoSrc = logo.getAttribute('src');
        // Only adjust if it's a relative path and doesn't already have the prefix
        if (!logoSrc.startsWith('http') && !logoSrc.startsWith('../') && !logoSrc.startsWith('/')) {
            logo.setAttribute('src', prefix + logoSrc);
            console.log('Logo path adjusted:', prefix + logoSrc);
        }
    }
    
    // Adjust all navigation links
    const links = document.querySelectorAll('.navbar a[href]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Skip external links and anchors
        if (!href.startsWith('http') && !href.startsWith('#')) {
            // Special handling for solutions/ links when we're in solutions/ folder
            if (prefix === '../' && href.startsWith('solutions/')) {
                // Remove solutions/ prefix since we're already in that folder
                link.setAttribute('href', href.replace('solutions/', ''));
            } else if (!href.startsWith(prefix) && !href.startsWith('../') && !href.startsWith('/')) {
                // Add prefix for other links
                link.setAttribute('href', prefix + href);
            }
        }
    });
}

function initializeNavbar() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('.material-icons');
            if (icon) {
                icon.textContent = navMenu.classList.contains('active') ? 'close' : 'menu';
            }
        });
    }
    
    // Dropdown menus
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        // Desktop hover
        dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('active');
        });
        
        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('active');
        });
        
        // Mobile click
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && !e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle?.querySelector('.material-icons');
            if (icon) icon.textContent = 'menu';
        }
    });
    
    // Highlight active page
    highlightActivePage();
}

function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href === currentPage || href.includes(currentPage))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Auto-load navbar on DOMContentLoaded if header-placeholder exists
document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    console.log('DOMContentLoaded - header-placeholder exists:', !!headerPlaceholder);
    
    if (headerPlaceholder) {
        // Detect if in subfolder
        const pathname = window.location.pathname;
        const pathParts = pathname.split('/');
        const pathDepth = pathParts.length - 2;
        const pathPrefix = pathDepth > 1 ? '../' : '';
        
        console.log('Pathname:', pathname);
        console.log('Path parts:', pathParts);
        console.log('Path depth:', pathDepth);
        console.log('Calculated prefix:', pathPrefix);
        
        loadNavbar(pathPrefix);
    }
});
