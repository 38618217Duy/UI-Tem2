// ========================================
// HERO CAROUSEL CONTROLLER
// Auto-rotating hero with smooth transitions
// ========================================

class HeroCarousel {
    constructor() {
        this.carousel = document.querySelector('.hero-carousel');
        if (!this.carousel) return;
        
        this.slides = this.carousel.querySelectorAll('.hero-slide');
        this.indicators = this.carousel.querySelectorAll('.indicator');
        this.prevBtn = this.carousel.querySelector('.hero-prev');
        this.nextBtn = this.carousel.querySelector('.hero-next');
        
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 6000; // 6 seconds per slide
        this.isPaused = false;
        
        this.init();
    }
    
    init() {
        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Indicators (dots)
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
        
        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => {
            this.pause();
        });
        
        this.carousel.addEventListener('mouseleave', () => {
            this.resume();
        });
        
        // Touch/Swipe support
        this.initTouchSupport();
        
        // Start autoplay
        this.startAutoPlay();
        
        // Pause when tab not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        });
    }
    
    goToSlide(index) {
        // Remove active from current
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active to new slide
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        // Reset autoplay
        this.resetAutoPlay();
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(next);
    }
    
    previousSlide() {
        const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prev);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            if (!this.isPaused) {
                this.nextSlide();
            }
        }, this.autoPlayDelay);
    }
    
    pause() {
        this.isPaused = true;
        this.carousel.classList.add('paused');
    }
    
    resume() {
        this.isPaused = false;
        this.carousel.classList.remove('paused');
    }
    
    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }
    
    initTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    this.nextSlide();
                } else {
                    // Swipe right - previous slide
                    this.previousSlide();
                }
            }
        };
        
        this.handleSwipe = handleSwipe;
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const heroCarousel = new HeroCarousel();
    
    // Optional: Add progress bar
    addProgressBar();
});

// Optional: Progress bar to show time until next slide
function addProgressBar() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;
    
    // Create progress bar
    const progressContainer = document.createElement('div');
    progressContainer.className = 'hero-progress';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'hero-progress-bar';
    
    progressContainer.appendChild(progressBar);
    carousel.appendChild(progressContainer);
    
    // Animate progress bar
    let progress = 0;
    const duration = 6000; // Match autoPlayDelay
    const interval = 50; // Update every 50ms
    const increment = (interval / duration) * 100;
    
    function updateProgress() {
        if (carousel.classList.contains('paused')) {
            return; // Don't update when paused
        }
        
        progress += increment;
        
        if (progress >= 100) {
            progress = 0;
        }
        
        progressBar.style.width = progress + '%';
    }
    
    setInterval(updateProgress, interval);
    
    // Reset progress on slide change
    carousel.addEventListener('slideChange', () => {
        progress = 0;
        progressBar.style.width = '0%';
    });
}

// Preload images for better performance
function preloadSlideImages() {
    const slides = document.querySelectorAll('.hero-slide');
    slides.forEach(slide => {
        const bgImage = slide.style.backgroundImage;
        if (bgImage) {
            const url = bgImage.slice(4, -1).replace(/"/g, "");
            const img = new Image();
            img.src = url;
        }
    });
}

// Call preload when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadSlideImages);
} else {
    preloadSlideImages();
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeroCarousel;
}
