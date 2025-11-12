// ========================================
// TIMELINE ANIMATIONS - ENHANCED
// Intersection Observer for scroll animations
// ========================================

class TimelineAnimations {
    constructor() {
        this.timelineSection = document.querySelector('.timeline-section');
        this.timelineItems = document.querySelectorAll('.timeline-item');
        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Trigger when 20% of element is visible
        };
        
        this.init();
    }
    
    init() {
        if (!this.timelineSection) return;
        
        // Add loading class initially
        this.timelineSection.classList.add('loading');
        
        // Create intersection observer
        this.createObserver();
        
        // Add hover sound effects (optional)
        this.addInteractiveEffects();
        
        // Add parallax effect to dots
        this.addParallaxEffect();
        
        // Mark as loaded after initial animations
        setTimeout(() => {
            this.timelineSection.classList.remove('loading');
            this.timelineSection.classList.add('loaded');
        }, 2000);
    }
    
    createObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Add stagger effect
                    const index = Array.from(this.timelineItems).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                    
                    // Trigger confetti for highlight items (optional)
                    if (entry.target.querySelector('.timeline-dot.highlight')) {
                        this.addSparkles(entry.target);
                    }
                } else {
                    // Optional: Remove class to re-trigger animation on scroll back
                    // entry.target.classList.remove('in-view');
                }
            });
        }, this.observerOptions);
        
        // Observe all timeline items
        this.timelineItems.forEach(item => {
            observer.observe(item);
        });
    }
    
    addInteractiveEffects() {
        this.timelineItems.forEach(item => {
            const content = item.querySelector('.timeline-content');
            const dot = item.querySelector('.timeline-dot');
            
            // Add click effect
            content.addEventListener('click', () => {
                this.createRipple(content, event);
            });
            
            // Add hover effect to dot
            item.addEventListener('mouseenter', () => {
                dot.style.transform = 'scale(1.3) rotate(180deg)';
            });
            
            item.addEventListener('mouseleave', () => {
                dot.style.transform = 'scale(1) rotate(0deg)';
            });
            
            // Add 3D tilt effect
            this.add3DTilt(content);
        });
    }
    
    createRipple(element, event) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(79, 156, 249, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-expand 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
    
    add3DTilt(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    }
    
    addSparkles(item) {
        const dot = item.querySelector('.timeline-dot');
        if (!dot) return;
        
        // Create sparkle particles
        for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: linear-gradient(45deg, #FFD700, #FFA500);
                border-radius: 50%;
                pointer-events: none;
                animation: sparkle-fly 1s ease-out forwards;
                animation-delay: ${i * 0.1}s;
            `;
            
            const angle = (i / 8) * Math.PI * 2;
            const distance = 30;
            sparkle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
            sparkle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
            
            dot.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000 + (i * 100));
        }
    }
    
    addParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            this.timelineItems.forEach((item, index) => {
                const dot = item.querySelector('.timeline-dot');
                if (!dot) return;
                
                const speed = index % 2 === 0 ? 0.5 : -0.5;
                const yPos = scrolled * speed * 0.1;
                
                dot.style.transform = `translateY(${yPos}px)`;
            });
        }, { passive: true });
    }
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle-fly {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0);
        }
    }
    
    @keyframes ripple-expand {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .timeline-content {
        transition: transform 0.3s ease;
    }
    
    .timeline-dot {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(sparkleStyle);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new TimelineAnimations();
    });
} else {
    new TimelineAnimations();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TimelineAnimations;
}
