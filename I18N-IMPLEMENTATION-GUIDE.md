# 🌐 Hướng Dẫn Hoàn Thiện Đa Ngôn Ngữ

## ✅ Tổng Quan Hệ Thống

MOL Logistics Vietnam Website hỗ trợ **3 ngôn ngữ**:
- 🇬🇧 **English (EN)** - Mặc định
- 🇻🇳 **Tiếng Việt (VI)**  
- 🇯🇵 **日本語 (JA)**

---

## 📁 Cấu Trúc Files

```
UI-Tem2/
├── translations.js      ← Translations toàn cục (mới tạo)
├── i18n.js             ← I18n Manager class
├── script.js           ← Main script với full translations
└── [pages].html        ← Các trang cần thêm i18n
```

---

## 🔧 BƯỚC 1: Thêm Scripts vào HTML

### Thêm vào tất cả các file `.html` trong `<head>`:

```html
<head>
    ...
    <!-- Thêm 2 dòng này TRƯỚC khi close </head> -->
    <script src="translations.js"></script>
    <script src="i18n.js"></script>
</head>
```

### ⚠️ Lưu ý đường dẫn cho thư mục `solutions/`:

```html
<!-- Trong solutions/*.html -->
<script src="../translations.js"></script>
<script src="../i18n.js"></script>
```

---

## 🔧 BƯỚC 2: Thêm Language Switcher vào Navbar

### Trong mỗi file HTML, tìm `<div class="nav-actions">` và thêm:

```html
<div class="nav-actions">
    <!-- THÊM PHẦN NÀY -->
    <div class="language-switcher">
        <button class="lang-btn active" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="vi">VI</button>
        <button class="lang-btn" data-lang="ja">JA</button>
    </div>
    
    <!-- Giữ nguyên mobile menu toggle -->
    <button class="mobile-menu-toggle" id="mobileMenuToggle">
        <span class="material-icons">menu</span>
    </button>
</div>
```

---

## 🔧 BƯỚC 3: Thêm `data-lang-key` Attributes

### Cách thêm attribute `data-lang-key`:

#### ❌ **TRƯỚC** (hardcode text):
```html
<h2>About Us</h2>
<p>Learn more about our company</p>
<button>Contact Us</button>
```

#### ✅ **SAU** (với i18n):
```html
<h2 data-lang-key="nav_about">About Us</h2>
<p data-lang-key="about_description">Learn more about our company</p>
<button data-lang-key="contact_us">Contact Us</button>
```

### Các element cần thêm `data-lang-key`:
- ✅ Headings (`<h1>`, `<h2>`, `<h3>`, ...)
- ✅ Paragraphs (`<p>`)
- ✅ Buttons (`<button>`, `<a>` CTAs)
- ✅ Navigation links (`<a>` trong nav)
- ✅ Form labels (`<label>`)
- ✅ Placeholders (dùng `data-lang-key-placeholder`)

---

## 🎯 DANH SÁCH CÁC TRANG CẦN UPDATE

### ✅ Đã Hoàn Thành (có language switcher):
- ✅ `index.html`
- ✅ `customs-clearance.html`
- ✅ `i18n-example.html`

### ⚠️ CẦN THÊM I18N (thiếu i18n.js và/hoặc language switcher):

#### Trang Service:
- ❌ `ocean-freight.html`
- ❌ `air-freight.html`
- ❌ `air-freight-full.html`
- ❌ `land-transport.html`
- ❌ `warehousing.html`
- ❌ `supply-chain.html`

#### Trang Company:
- ❌ `about.html`
- ❌ `about-new.html`
- ❌ `mol-group.html`
- ❌ `locations.html`

#### Trang Khác:
- ❌ `services.html`
- ❌ `news.html`
- ❌ `contact.html`
- ❌ `quote-calculator.html`
- ❌ `tracking-results.html`
- ❌ `404.html`

#### Solutions Pages:
- ❌ `solutions/index.html`
- ❌ `solutions/automotive.html`
- ❌ `solutions/electronics.html`
- ❌ `solutions/fashion.html`
- ❌ `solutions/food-beverage.html`
- ❌ `solutions/manufacturing.html`

---

## 📚 TRANSLATION KEYS CHÍNH

### Navigation Keys:
```javascript
nav_home          // Home / Trang Chủ / ホーム
nav_services      // Services / Dịch Vụ / サービス
nav_company       // Company / Công Ty / 会社情報
nav_about         // About Us / Về Chúng Tôi / 会社概要
nav_network       // Our Offices / Văn Phòng / オフィス
nav_news          // News & Updates / Tin Tức / ニュース
nav_contact       // Contact Us / Liên Hệ / お問い合わせ
```

### Service Keys:
```javascript
service_ocean     // Ocean Freight
service_air       // Air Freight
service_land      // Land Transport
service_warehouse // Warehousing
service_customs   // Customs Clearance
service_supply    // Supply Chain
```

### Common Keys:
```javascript
read_more         // Read More / Đọc Thêm / 続きを読む
learn_more        // Learn More / Tìm Hiểu Thêm / 詳細を見る
get_quote         // Get Quote / Nhận Báo Giá / 見積もりを取得
contact_us        // Contact Us / Liên Hệ / お問い合わせ
```

> **💡 Tip**: Xem file `script.js` để thấy TOÀN BỘ translation keys có sẵn (hơn 400+ keys)

---

## 🧪 KIỂM TRA HOẠT ĐỘNG

### Test List:
1. ✅ Mở trang trong browser
2. ✅ Kiểm tra có 3 nút ngôn ngữ (EN/VI/JA) không?
3. ✅ Click từng nút → Nội dung có thay đổi không?
4. ✅ Reload trang → Ngôn ngữ có được lưu không?
5. ✅ Kiểm tra tất cả text quan trọng đã có `data-lang-key`

---

## 📝 VÍ DỤ HOÀN CHỈNH

### File: `ocean-freight.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ocean Freight - MOL Logistics Vietnam</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="modern-design.css">
    
    <!-- I18N SCRIPTS -->
    <script src="translations.js"></script>
    <script src="i18n.js"></script>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="container">
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="index.html">
                            <img src="img/logo/logo_mol-1.png" alt="MOL Logistics">
                        </a>
                    </div>
                    
                    <ul class="nav-menu">
                        <li><a href="index.html" data-lang-key="nav_home">Home</a></li>
                        <li><a href="services.html" data-lang-key="nav_services">Services</a></li>
                        <li><a href="about.html" data-lang-key="nav_about">About</a></li>
                        <li><a href="contact.html" data-lang-key="nav_contact">Contact</a></li>
                    </ul>
                    
                    <div class="nav-actions">
                        <!-- LANGUAGE SWITCHER -->
                        <div class="language-switcher">
                            <button class="lang-btn active" data-lang="en">EN</button>
                            <button class="lang-btn" data-lang="vi">VI</button>
                            <button class="lang-btn" data-lang="ja">JA</button>
                        </div>
                        
                        <button class="mobile-menu-toggle">
                            <span class="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    
    <section class="hero">
        <h1 data-lang-key="service_ocean">Ocean Freight</h1>
        <p data-lang-key="service_ocean_desc">Worldwide shipping solutions</p>
        <button data-lang-key="get_quote">Get Quote</button>
    </section>
    
    <script src="script.js"></script>
</body>
</html>
```

---

## 🚀 PRIORITY IMPLEMENTATION ORDER

### Phase 1 - High Priority (Trang chính):
1. ✅ `index.html` - ĐÃ XONG
2. ❌ `services.html`
3. ❌ `about.html`
4. ❌ `contact.html`

### Phase 2 - Service Pages:
5. ❌ `ocean-freight.html`
6. ❌ `air-freight.html`
7. ❌ `warehousing.html`
8. ❌ Remaining service pages...

### Phase 3 - Solutions & Others:
9. ❌ `solutions/*.html`
10. ❌ Other pages...

---

## 🐛 TROUBLESHOOTING

### Problem: Language switcher không xuất hiện
**Solution**: Kiểm tra CSS của `.language-switcher` trong `styles.css`

### Problem: Click nút nhưng không đổi ngôn ngữ
**Solution**: 
1. Kiểm tra đã include `i18n.js` chưa
2. Mở Console (F12) → xem có lỗi không
3. Kiểm tra `data-lang-key` có đúng không

### Problem: Một số text không đổi
**Solution**: 
1. Kiểm tra text đó có `data-lang-key` chưa
2. Kiểm tra key có trong `translations` object không (`script.js`)

---

## 📞 SUPPORT

Nếu cần hỗ trợ, kiểm tra:
1. `script.js` - Full translations (dòng 5-1099)
2. `i18n.js` - I18n Manager class
3. `I18N-GUIDE.md` - Hướng dẫn chi tiết

---

**✅ STATUS: 3/28 trang đã hoàn thành đa ngôn ngữ (10.7%)**
**🎯 TARGET: 28/28 trang (100%)**

---

*Last updated: Cascade AI - November 14, 2025*
