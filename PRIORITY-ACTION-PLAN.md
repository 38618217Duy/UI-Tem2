# 🎯 KẾ HOẠCH HÀNH ĐỘNG ƯU TIÊN
## MOL Logistics Vietnam - Website Completion

**Ngày**: 14/11/2025  
**Mục tiêu**: Hoàn thiện website từ 65% → 100% theo spec

---

## 🔴 TUẦN 1: CRITICAL FIXES & CORE PAGES

### Day 1: Chuẩn hóa Brand Identity (2-4 giờ)

**File cần sửa**: `styles.css`, `modern-design.css`

```css
/* ❌ XÓA/THAY THẾ */
--primary-color: #003B7A;
--secondary-color: #005BAA;
--accent-color: #0080FF;

/* ✅ THAY BẰNG */
--mol-blue-500: #0066CC;     /* MOL Primary */
--mol-blue-700: #004499;     /* MOL Secondary */
--mol-orange-500: #FF6600;   /* Accent for CTAs */
--mol-gray-600: #666666;     /* Neutral Gray */
```

**Checklist**:
- [ ] Tìm và thay tất cả `#003B7A` → `#0066CC`
- [ ] Tìm và thay tất cả `#005BAA` → `#004499`
- [ ] Thêm `--mol-orange-500` cho CTAs quan trọng
- [ ] Test tất cả pages sau khi đổi màu

---

### Day 2-3: Service Detail Pages - Batch 1 (Ocean & Air)

#### Template Structure (dùng cho tất cả 6 services):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>[Service Name] - MOL Logistics Vietnam</title>
    <!-- CSS như các page hiện tại -->
</head>
<body>
    <!-- 1. HERO SECTION -->
    <section class="page-hero service-hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <span class="hero-badge">[Service Category]</span>
            <h1 class="hero-title">[Service Name]</h1>
            <p class="hero-subtitle">[One-line description]</p>
        </div>
    </section>

    <!-- 2. SERVICE FEATURES (3-4 cards) -->
    <section class="service-features">
        <div class="container">
            <h2>Key Features</h2>
            <div class="features-grid">
                <!-- Feature cards -->
            </div>
        </div>
    </section>

    <!-- 3. PROCESS FLOW (Step-by-step) -->
    <section class="service-process">
        <div class="container">
            <h2>How It Works</h2>
            <div class="process-steps">
                <div class="step">
                    <div class="step-number">01</div>
                    <h3>[Step Title]</h3>
                    <p>[Description]</p>
                </div>
                <!-- Repeat for 4-5 steps -->
            </div>
        </div>
    </section>

    <!-- 4. CASE STUDY (1 example) -->
    <section class="case-study">
        <div class="container">
            <h2>Success Story</h2>
            <!-- Real or sample case -->
        </div>
    </section>

    <!-- 5. FAQ (5-7 questions) -->
    <section class="service-faq">
        <div class="container">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-accordion">
                <!-- FAQ items -->
            </div>
        </div>
    </section>

    <!-- 6. CTA -->
    <section class="cta-section">
        <h2>Ready to Get Started?</h2>
        <a href="quote-calculator.html" class="btn btn-primary">Get a Quote</a>
    </section>
</body>
</html>
```

**Tạo files**:
- [ ] `ocean-freight.html` (Priority #1)
- [ ] `air-freight.html` (Priority #1)

**Nội dung từ**: `company-data.js` section `services`

---

### Day 4: Service Detail Pages - Batch 2 (Land & Warehouse)

- [ ] `land-transport.html`
- [ ] `warehousing.html` (highlight 6,000m² Hai Phong facility)

---

### Day 5: Service Detail Pages - Batch 3 (Customs & Supply Chain)

- [ ] `customs-clearance.html` (mention FTA/EPA/C/O)
- [ ] `supply-chain.html`

**Test sau khi hoàn thành**:
- [ ] All 6 pages responsive
- [ ] Navigation links work
- [ ] Multi-language functional
- [ ] CTAs link to quote calculator

---

## 🟡 TUẦN 2: ADVANCED FEATURES & TOOLS

### Day 6-7: Quote Calculator (Tool quan trọng)

**File mới**: `quote-calculator.html`, `quote-calculator.js`, `quote-calculator.css`

#### Cấu trúc form:

```html
<div class="quote-calculator">
    <h1>Get an Instant Quote</h1>
    
    <!-- Step 1: Service Type -->
    <div class="step" data-step="1">
        <h3>Select Service Type</h3>
        <div class="service-options">
            <label>
                <input type="radio" name="service" value="ocean">
                <span>Ocean Freight</span>
            </label>
            <label>
                <input type="radio" name="service" value="air">
                <span>Air Freight</span>
            </label>
            <label>
                <input type="radio" name="service" value="land">
                <span>Land Transport</span>
            </label>
        </div>
    </div>

    <!-- Step 2: Cargo Details -->
    <div class="step" data-step="2">
        <h3>Cargo Information</h3>
        <input type="number" id="weight" placeholder="Weight (kg)">
        <input type="text" id="dimensions" placeholder="Dimensions (LxWxH cm)">
        <select id="cargo-type">
            <option>General Cargo</option>
            <option>Dangerous Goods</option>
            <option>Perishable</option>
            <option>Oversized</option>
        </select>
    </div>

    <!-- Step 3: Route -->
    <div class="step" data-step="3">
        <h3>Shipping Route</h3>
        <select id="origin">
            <option>Ho Chi Minh City</option>
            <option>Hanoi</option>
            <option>Hai Phong</option>
            <option>Da Nang</option>
        </select>
        <select id="destination">
            <option>Tokyo, Japan</option>
            <option>Osaka, Japan</option>
            <option>Singapore</option>
            <option>Bangkok, Thailand</option>
            <!-- More destinations -->
        </select>
    </div>

    <!-- Step 4: Results -->
    <div class="quote-results" id="results" style="display:none;">
        <h3>Estimated Quote</h3>
        <div class="quote-breakdown">
            <div class="quote-item">
                <span>Base Rate:</span>
                <span id="base-rate">$0</span>
            </div>
            <div class="quote-item">
                <span>Fuel Surcharge:</span>
                <span id="fuel">$0</span>
            </div>
            <div class="quote-item">
                <span>Handling:</span>
                <span id="handling">$0</span>
            </div>
            <div class="quote-total">
                <span>Total (Estimated):</span>
                <span id="total">$0</span>
            </div>
        </div>
        <button class="btn btn-primary" onclick="requestOfficialQuote()">
            Request Official Quote
        </button>
    </div>
</div>
```

**Logic tính toán** (đơn giản):
```javascript
function calculateQuote() {
    const service = document.querySelector('input[name="service"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    
    // Sample calculation
    let baseRate = 0;
    if (service === 'ocean') {
        baseRate = weight * 2.5; // $2.5/kg
    } else if (service === 'air') {
        baseRate = weight * 8.5; // $8.5/kg
    } else if (service === 'land') {
        baseRate = weight * 1.5; // $1.5/kg
    }
    
    const fuel = baseRate * 0.15; // 15% fuel surcharge
    const handling = 50; // Fixed handling fee
    const total = baseRate + fuel + handling;
    
    // Display results
    document.getElementById('base-rate').textContent = `$${baseRate.toFixed(2)}`;
    document.getElementById('fuel').textContent = `$${fuel.toFixed(2)}`;
    document.getElementById('handling').textContent = `$${handling.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    document.getElementById('results').style.display = 'block';
}
```

**Checklist**:
- [ ] HTML structure
- [ ] Multi-step form
- [ ] Calculation logic
- [ ] Responsive design
- [ ] Link from navbar & CTAs

---

### Day 8-9: Industry Solutions Pages (5 pages)

**Folder structure**: `solutions/`

#### Template cho mỗi ngành:

```html
<!-- solutions/manufacturing.html -->
<section class="page-hero">
    <h1>Manufacturing & Industrial Solutions</h1>
</section>

<section class="industry-overview">
    <h2>Logistics for Manufacturing</h2>
    <p>Specialized supply chain solutions for production facilities...</p>
</section>

<section class="industry-challenges">
    <h2>Common Challenges</h2>
    <ul>
        <li>Just-in-time delivery requirements</li>
        <li>Parts consolidation</li>
        <li>Quality control</li>
    </ul>
</section>

<section class="industry-solutions">
    <h2>Our Solutions</h2>
    <!-- Service cards relevant to this industry -->
</section>

<section class="industry-clients">
    <h2>Industries We Serve</h2>
    <!-- From company-data.js: Automobile, Electrical, Machinery -->
</section>
```

**Tạo 5 files**:
- [ ] `solutions/manufacturing.html` (Automobile, Machinery, Electronics)
- [ ] `solutions/fashion.html` (Clothings, Shoes)
- [ ] `solutions/food-beverage.html` (Foods, highlight Cold Chain)
- [ ] `solutions/automotive.html` (Auto parts)
- [ ] `solutions/electronics.html` (Electrical parts, appliances)

**Data từ**: `company-data.js` → `industries` array

---

### Day 10: Tracking Results Page Enhancement

**File hiện có**: `tracking-results.html` ✅

**Cần bổ sung**:
- [ ] Integration với tracking form trong `index.html`
- [ ] Sample tracking results với timeline
- [ ] Multi-shipment tracking display
- [ ] Export to PDF button
- [ ] Email notification opt-in

**JavaScript logic**:
```javascript
// tracking-page.js
function displayTrackingResults(trackingNumber) {
    // Sample data structure
    const shipment = {
        trackingNumber: trackingNumber,
        status: 'In Transit',
        origin: 'Ho Chi Minh City',
        destination: 'Tokyo, Japan',
        estimatedDelivery: '2025-11-20',
        events: [
            { date: '2025-11-14 10:00', location: 'HCMC', event: 'Shipment picked up' },
            { date: '2025-11-14 14:30', location: 'HCMC Port', event: 'Arrived at port' },
            { date: '2025-11-15 08:00', location: 'Vessel', event: 'Loaded on vessel' },
            { date: '2025-11-18 12:00', location: 'En route', event: 'In transit to Tokyo' }
        ]
    };
    
    // Render timeline
    renderTimeline(shipment);
}
```

---

## 🟢 TUẦN 3: CONTENT & ENHANCEMENTS

### Day 11: Contact Page (Full Page)

**File mới**: `contact.html`

**Sections**:
1. Hero với contact info
2. Multi-location tabs (HCM, Hanoi, Hai Phong)
3. Google Maps embed cho mỗi location
4. Contact form with validation
5. Office hours & emergency contact

```html
<section class="contact-locations">
    <div class="location-tabs">
        <button data-location="hcm" class="active">Ho Chi Minh City</button>
        <button data-location="hanoi">Hanoi</button>
        <button data-location="haiphong">Hai Phong</button>
    </div>
    
    <div class="location-details" data-location="hcm">
        <div class="location-map">
            <iframe src="[Google Maps Embed]"></iframe>
        </div>
        <div class="location-info">
            <h3>Head Office - Ho Chi Minh City</h3>
            <p><strong>Address:</strong> Room 2.5A, E-Town 6...</p>
            <p><strong>Phone:</strong> +84-28-3812-1349</p>
            <p><strong>Email:</strong> mlgvn.salehcm-group@molgroup.com</p>
            <p><strong>Hours:</strong> Mon-Fri 8:00-17:00</p>
        </div>
    </div>
</section>
```

**Data từ**: `company-data.js` → `officeNetwork`

---

### Day 12: MOL Group Page

**File mới**: `company/mol-group.html`

**Content structure**:
```markdown
# About MOL Group

## History
- Founded 1964 (merger of OSK 1878 + Mitsui 1884)
- 140+ years maritime heritage
- One of world's largest shipping companies

## Global Presence
- 800+ vessels worldwide
- [Visual: World map with routes]

## MOL Logistics Co., Ltd.
- Established July 1989, Tokyo
- 140 offices in 26 countries
- 2,500 employees globally
- ISO 9001, ISO 14001, AEO certified

## Connection to Vietnam
- 100% ownership of MOL Logistics Vietnam
- Strategic support & global network access
```

**Data từ**: `company-data.js` → `parentCompany`

---

### Day 13: Update Leadership & About Content

**File sửa**: `about.html`

**THAY THẾ placeholder bằng data thực**:

```html
<!-- ❌ XÓA -->
<div class="team-card">
    <h4>Takashi Yamamoto</h4>
    <p>Managing Director</p>
</div>

<!-- ✅ THAY BẰNG -->
<div class="team-card">
    <h4>Yumi Fukunaga</h4>
    <p class="team-position">Chairwoman & Chief Executive Officer</p>
    <p class="team-since">Since April 2024</p>
    <p class="team-bio">
        Executive Officer of MOL Logistics Co., Ltd., 
        responsible for Southeast Asia (except Thailand, Myanmar) and Oceania.
    </p>
</div>
```

**CSR Section** - Mở rộng BLUE ACTION:
```html
<section class="csr-programs">
    <h2>BLUE ACTION for ALL</h2>
    <div class="csr-focus">
        <div class="focus-area">
            <span class="material-icons">water</span>
            <h3>Marine Environment</h3>
            <p>Beach cleanup at Phu Quoc Island</p>
        </div>
        <div class="focus-area">
            <span class="material-icons">school</span>
            <h3>Education & Development</h3>
            <p>Next-generation workforce training</p>
        </div>
        <div class="focus-area">
            <span class="material-icons">volunteer_activism</span>
            <h3>Community Support</h3>
            <p>$36,000 disaster relief in Vietnam</p>
        </div>
    </div>
</section>
```

---

### Day 14: Resource Center & Live Chat

#### Resource Center (`resources.html`):

```html
<section class="resources-grid">
    <div class="resource-category">
        <h3>Company Brochures</h3>
        <ul class="download-list">
            <li>
                <span class="material-icons">picture_as_pdf</span>
                <a href="#" download>Company Profile 2025 (PDF, 2.5MB)</a>
            </li>
            <li>
                <span class="material-icons">picture_as_pdf</span>
                <a href="#" download>Service Overview (PDF, 1.8MB)</a>
            </li>
        </ul>
    </div>
    
    <div class="resource-category">
        <h3>Industry Guides</h3>
        <ul class="download-list">
            <li>
                <span class="material-icons">description</span>
                <a href="#" download>Import/Export Guide Vietnam (PDF)</a>
            </li>
            <li>
                <span class="material-icons">description</span>
                <a href="#" download>Customs Procedures Handbook (PDF)</a>
            </li>
        </ul>
    </div>
</section>
```

#### Live Chat Integration:

**Option 1: Tawk.to** (Free)
```html
<!-- Add before </body> -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

**Option 2: Facebook Messenger** (nếu có fanpage)
```html
<!-- Facebook Customer Chat Plugin -->
<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      xfbml: true,
      version: 'v18.0'
    });
  };
</script>
```

---

## 📊 PROGRESS TRACKING

### Checklist Tổng thể:

#### Week 1: Foundation
- [ ] Brand Colors Fixed
- [ ] 6 Service Detail Pages
- [ ] Navigation Updated

#### Week 2: Features
- [ ] Quote Calculator
- [ ] 5 Industry Solutions Pages
- [ ] Tracking Results Enhanced

#### Week 3: Content
- [ ] Contact Page
- [ ] MOL Group Page
- [ ] Leadership Updated
- [ ] Resource Center
- [ ] Live Chat

#### Final QA:
- [ ] All pages responsive
- [ ] Multi-language works
- [ ] All links functional
- [ ] Forms validated
- [ ] SEO meta tags
- [ ] Performance test
- [ ] Cross-browser test

---

## 🚀 QUICK START

### Bắt đầu ngay hôm nay:

```bash
# 1. Backup current files
cp styles.css styles.css.backup
cp modern-design.css modern-design.css.backup

# 2. Open in editor
code styles.css
code modern-design.css

# 3. Find & Replace
# Find: #003B7A
# Replace: #0066CC

# Find: #005BAA  
# Replace: #004499

# 4. Test on localhost
# Open index.html in browser
# Check all pages for color consistency
```

### Files Order (theo độ ưu tiên):

1. ✅ `styles.css` - Fix colors
2. ✅ `modern-design.css` - Fix colors
3. ✅ `ocean-freight.html` - New page
4. ✅ `air-freight.html` - New page
5. ✅ `quote-calculator.html` - New tool
6. ... (theo checklist)

---

## 💡 TIP & BEST PRACTICES

### Reusable Components:

Tạo file `components/service-template.html` làm template cho 6 service pages:

```html
<!-- Copy toàn bộ structure -->
<!-- Chỉ cần thay: -->
<!-- - Title -->
<!-- - Hero image -->
<!-- - Features (from company-data.js) -->
<!-- - Process steps -->
```

### Data-Driven Approach:

Tất cả nội dung lấy từ `company-data.js`:
- Services → `MOL_COMPANY_DATA.services`
- Industries → `MOL_COMPANY_DATA.industries`
- Offices → `MOL_COMPANY_DATA.officeNetwork`
- Leadership → `MOL_COMPANY_DATA.leadership`

### Testing Checklist (sau mỗi page):

```
□ Desktop view (1920x1080)
□ Tablet view (768x1024)
□ Mobile view (375x667)
□ Language switcher works
□ All CTAs link correctly
□ Images load
□ No console errors
```

---

## 📞 SUPPORT

Nếu cần:
- ✅ Code templates chi tiết
- ✅ Design mockups
- ✅ Content suggestions
- ✅ Technical guidance

**LET'S BUILD IT!** 🚀

---

*Last Updated: 14/11/2025*
