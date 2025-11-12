// ========================================
// BACK TO TOP BUTTON
// Smooth scroll to top with show/hide
// ========================================

class BackToTop {
    constructor(options = {}) {
        this.button = document.getElementById('backToTop');
        if (!this.button) return;
        
        // Configuration
        this.showAfter = options.showAfter || 300; // Show after scrolling 300px
        this.scrollDuration = options.scrollDuration || 800; // Scroll duration in ms
        this.easing = options.easing || 'easeInOutCubic';
        
        this.init();
    }
    
    init() {
        // Bind methods to maintain context
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
        // Show/hide button on scroll
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        
        // Click handler
        this.button.addEventListener('click', this.handleClick);
        
        // Initial check
        this.toggleVisibility();
    }
    
    handleScroll() {
        this.toggleVisibility();
    }
    
    handleClick(e) {
        e.preventDefault();
        this.scrollToTop();
    }
    
    toggleVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > this.showAfter) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }
    
    scrollToTop() {
        // Modern smooth scroll
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Fallback for older browsers
            this.smoothScrollTo(0, this.scrollDuration);
        }
        
        // Add ripple effect
        this.addRipple();
    }
    
    // Custom smooth scroll with easing
    smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const ease = this.easingFunctions[this.easing](progress);
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };
        
        requestAnimationFrame(animation);
    }
    
    // Easing functions
    easingFunctions = {
        linear: t => t,
        easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        easeOutCubic: t => (--t) * t * t + 1,
        easeInQuad: t => t * t,
        easeOutQuad: t => t * (2 - t)
    };
    
    // Ripple effect on click
    addRipple() {
        this.button.style.position = 'relative';
        this.button.style.overflow = 'hidden';
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginTop = '-50px';
        ripple.style.marginLeft = '-50px';
        ripple.style.top = '50%';
        ripple.style.left = '50%';
        ripple.style.animation = 'ripple-effect 0.6s';
        ripple.style.pointerEvents = 'none';
        
        this.button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-effect {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new BackToTop({
            showAfter: 300,
            scrollDuration: 800,
            easing: 'easeInOutCubic'
        });
    });
} else {
    new BackToTop({
        showAfter: 300,
        scrollDuration: 800,
        easing: 'easeInOutCubic'
    });
}

// Optional: Track scroll progress
class ScrollProgress extends BackToTop {
    constructor(options) {
        super(options);
        this.addProgressRing();
    }
    
    addProgressRing() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'progress-ring');
        svg.style.position = 'absolute';
        svg.style.top = '-4px';
        svg.style.left = '-4px';
        svg.style.width = '64px';
        svg.style.height = '64px';
        svg.style.transform = 'rotate(-90deg)';
        svg.style.pointerEvents = 'none';
        
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '32');
        circle.setAttribute('cy', '32');
        circle.setAttribute('r', '28');
        circle.setAttribute('stroke', 'rgba(255, 255, 255, 0.5)');
        circle.setAttribute('stroke-width', '3');
        circle.setAttribute('fill', 'transparent');
        
        const circumference = 2 * Math.PI * 28;
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;
        circle.style.transition = 'stroke-dashoffset 0.1s linear';
        
        svg.appendChild(circle);
        this.button.appendChild(svg);
        
        // Update progress on scroll
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            const offset = circumference - (scrollPercent * circumference);
            circle.style.strokeDashoffset = offset;
        }, { passive: true });
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BackToTop, ScrollProgress };
}
