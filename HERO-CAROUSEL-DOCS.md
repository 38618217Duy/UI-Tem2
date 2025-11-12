# 🎬 DYNAMIC HERO CAROUSEL - DOCUMENTATION

## 🌟 TỔNG QUAN

Hero section giờ đã là một **carousel tự động** với 5 slides khác nhau, tự động chuyển đổi mỗi 6 giây.

---

## ✨ 5 SLIDES

### Slide 1: **Global Logistics**
```
🏷️ Badge: "Global Network"
📝 Title: "Global Logistics Excellence"
🖼️ Image: Container shipping
🎯 CTAs: Our Services | Track Shipment
```

### Slide 2: **Ocean Freight**
```
🏷️ Badge: "Ocean Freight"
📝 Title: "Navigate Global Waters"
🖼️ Image: Sea freight operations
🎯 CTAs: Ocean Services | Get Quote
```

### Slide 3: **Cold Chain**
```
🏷️ Badge: "Featured Investment"
📝 Title: "Mekong Logistics Hub"
🖼️ Image: Cold storage facility
🎯 CTAs: Learn More | Contact Us
```

### Slide 4: **Sustainability**
```
🏷️ Badge: "BLUE ACTION"
📝 Title: "Sustainable Future"
🖼️ Image: Ocean/nature
🎯 CTAs: Our Commitment | BLUE ACTION
```

### Slide 5: **Technology**
```
🏷️ Badge: "Digital Innovation"
📝 Title: "Smart Logistics Solutions"
🖼️ Image: Technology/containers
🎯 CTAs: Track Now | Tools & Resources
```

---

## 🎛️ CONTROLS

### 1. **Auto-Play**
- ⏱️ Chuyển slide tự động mỗi **6 giây**
- 🔄 Loop vô tận
- ⏸️ Tự động pause khi hover
- ▶️ Resume khi rời chuột

### 2. **Navigation Arrows**
```
← Previous (Left arrow)
→ Next (Right arrow)

- Hiện khi hover carousel
- Glassmorphism effect
- Scale 1.1x on hover
```

### 3. **Slide Indicators (Dots)**
```
● ● ● ● ●

- 5 dots ở bottom
- Active dot: elongated (40px wide)
- Inactive dots: circular (12px)
- Click to jump to slide
```

### 4. **Keyboard Support**
```
←  Previous slide
→  Next slide
```

### 5. **Touch/Swipe Support**
```
👉 Swipe left:  Next slide
👈 Swipe right: Previous slide
Threshold: 50px
```

---

## 🎨 DESIGN FEATURES

### Glassmorphism:
```css
✅ Navigation arrows: Glass effect
✅ Badge overlay: Backdrop blur
✅ Smooth transitions
```

### Morphing Blobs:
```css
✅ 2 animated blobs per slide
✅ 20s & 15s animations
✅ Organic shapes
✅ Radial gradients
```

### Animations:
```css
Badge:    fadeInDown (0.8s)
Title:    fadeInUp (1s, delay 0.2s)
Subtitle: fadeInUp (1s, delay 0.4s)
Buttons:  fadeInUp (1s, delay 0.6s)
```

### Smooth Transitions:
```css
Slide opacity:  1.5s ease-in-out
Slide change:   Crossfade effect
Content:        Staggered animations
```

---

## ⚙️ TECHNICAL SPECS

### Auto-Play Settings:
```javascript
autoPlayDelay: 6000ms (6 seconds)
Pause on:
  - Mouse hover
  - Tab hidden
  - User interaction
```

### Class System:
```javascript
.hero-carousel     - Main container
.hero-slide        - Individual slide
.hero-slide.active - Current visible slide
.hero-nav          - Arrow buttons
.indicator.active  - Active dot
```

### Performance:
```javascript
✅ Image preloading
✅ will-change: opacity, transform
✅ GPU acceleration
✅ Passive touch events
✅ Optimized animations
```

---

## 📁 FILES CREATED

```
✅ hero-carousel.css  - Carousel styling (~400 lines)
✅ hero-carousel.js   - Carousel logic (~250 lines)
✅ index.html         - 5 slide structures (modified)
✅ HERO-CAROUSEL-DOCS.md - This documentation
```

---

## 🎯 HOW IT WORKS

### 1. **Initialization**
```javascript
new HeroCarousel()
  ├─ Setup event listeners
  ├─ Initialize touch support
  ├─ Start auto-play timer
  └─ Pause on visibility change
```

### 2. **Slide Transition**
```javascript
goToSlide(index)
  ├─ Remove 'active' from current
  ├─ Update currentSlide
  ├─ Add 'active' to new slide
  ├─ Update indicators
  └─ Reset auto-play timer
```

### 3. **Auto-Play Loop**
```javascript
Every 6 seconds:
  if (!paused) {
    nextSlide()
  }
```

---

## 🎭 USER INTERACTIONS

### Hover Carousel:
```
Action: Pause auto-play
Effect: Show navigation arrows
       Add 'paused' class
```

### Click Arrow:
```
Left:  Go to previous slide
Right: Go to next slide
Reset: Auto-play timer
```

### Click Indicator:
```
Jump:  Go to specific slide
Reset: Auto-play timer
```

### Keyboard:
```
←: Previous
→: Next
```

### Touch/Swipe:
```
<--: Next slide
-->: Previous slide
```

---

## 📱 RESPONSIVE DESIGN

### Desktop (>1024px):
```
Title:     56px
Subtitle:  20px
Arrows:    60px circles
Blobs:     Visible
```

### Tablet (768-1024px):
```
Title:     48px
Subtitle:  18px
Arrows:    50px circles
Blobs:     Visible
```

### Mobile (<768px):
```
Title:     36px → 28px
Subtitle:  16px → 14px
Arrows:    44px circles, always visible
Blobs:     Hidden (performance)
Buttons:   Stacked vertically
```

---

## 🎨 CUSTOMIZATION

### Change Auto-Play Speed:
```javascript
// In hero-carousel.js, line ~15
this.autoPlayDelay = 6000; // Change to desired ms
```

### Add New Slide:
```html
<!-- Copy any slide structure -->
<div class="hero-slide" data-slide="6" style="background-image: url('...');">
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <span class="hero-badge">Your Badge</span>
        <h1 class="hero-title">Your Title</h1>
        <p class="hero-subtitle">Your subtitle</p>
        <div class="hero-buttons">
            <!-- Your buttons -->
        </div>
    </div>
</div>

<!-- Add indicator -->
<button class="indicator" data-slide-to="6"></button>
```

### Change Transition Speed:
```css
/* In hero-carousel.css */
.hero-slide {
    transition: opacity 1.5s ease-in-out; /* Change duration */
}
```

### Change Colors:
```css
/* Overlay gradient */
.hero-slide .hero-overlay {
    background: linear-gradient(135deg, 
        rgba(YOUR_R, YOUR_G, YOUR_B, 0.85) 0%, 
        /* ... */
    );
}
```

---

## 🔧 ADVANCED FEATURES

### Progress Bar (Optional):
```javascript
// Already included in hero-carousel.js
addProgressBar()
  - Visual indicator of time until next slide
  - Animates width 0% → 100%
  - Pauses when carousel paused
```

### Image Preloading:
```javascript
preloadSlideImages()
  - Loads all slide images on page load
  - Prevents loading delays
  - Smooth first transition
```

### Visibility API:
```javascript
document.visibilitychange
  - Pauses when tab hidden
  - Resumes when tab visible
  - Saves resources
```

---

## 🎯 USE CASES

### Different Content Per Slide:
```
Slide 1: General overview
Slide 2: Specific service #1
Slide 3: Featured project
Slide 4: Sustainability focus
Slide 5: Technology/innovation
```

### Seasonal Campaigns:
```
- Update images per season
- Change CTAs for promotions
- Highlight special events
- Feature new services
```

---

## 📊 STATISTICS

```
Total Slides:        5
Auto-Play Interval:  6 seconds
Full Cycle Time:     30 seconds
Transition Duration: 1.5 seconds
Animation Stagger:   0.2s per element
Touch Threshold:     50px
```

---

## 🐛 TROUBLESHOOTING

### Carousel Not Auto-Playing:
```javascript
Check:
1. hero-carousel.js loaded?
2. Console errors?
3. Correct class names?
4. Images loading?
```

### Arrows Not Showing:
```css
Check:
1. Hover carousel
2. .hero-nav visibility
3. Z-index correct?
```

### Transitions Jerky:
```css
Fix:
1. Add will-change
2. Use transform over position
3. Optimize images
4. Check GPU acceleration
```

---

## 🚀 PERFORMANCE TIPS

### 1. **Optimize Images**
```
- Use WebP format
- Compress to <200KB
- Lazy load non-active slides
- Use CDN
```

### 2. **Reduce Animations on Mobile**
```css
@media (max-width: 768px) {
    .hero-slide::before,
    .hero-slide::after {
        display: none; /* Hide blobs */
    }
}
```

### 3. **Debounce Touch Events**
```javascript
// Already implemented in hero-carousel.js
{ passive: true } // Improves scroll performance
```

---

## ✅ FEATURES SUMMARY

```
✅ 5 unique slides
✅ Auto-play (6s interval)
✅ Navigation arrows
✅ Dot indicators
✅ Keyboard controls
✅ Touch/swipe support
✅ Pause on hover
✅ Smooth crossfade
✅ Staggered animations
✅ Glassmorphism effects
✅ Morphing blobs
✅ Progress bar
✅ Image preloading
✅ Fully responsive
✅ Accessibility ready
✅ Performance optimized
```

---

## 🎉 RESULT

**Hero section giờ là một carousel dynamic, engaging và professional với:**
- 🎨 Multiple visual stories
- 🔄 Automatic rotation
- 👆 Full user controls
- 💫 Smooth animations
- 📱 Mobile-friendly
- ⚡ High performance

---

*Created: November 2025*  
*Version: 1.0*  
*Status: ✅ PRODUCTION READY*
