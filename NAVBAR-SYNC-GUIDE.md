# Navbar Synchronization Guide - Hướng dẫn Đồng bộ Navbar

## ✅ ĐÃ HOÀN THÀNH trên `index.html`

### Thay đổi chính:

1. **Language Switcher** - Di chuyển xuống dưới logo
2. **Search Button** - ĐÃ XÓA (không còn nữa)
3. **Search Modal** - ĐÃ XÓA hoàn toàn
4. **Get Quote** - Button orange nổi bật, không icon
5. **Company Dropdown** - Gộp News và Contact vào đây
6. **CSS** - Đã cập nhật toàn bộ styling

---

## 📋 Danh sách Files cần Đồng bộ

### Root Level Pages (15 files):
- [ ] about.html
- [ ] services.html
- [ ] ocean-freight.html
- [ ] air-freight.html
- [ ] land-transport.html
- [ ] warehousing.html
- [ ] customs-clearance.html
- [ ] supply-chain.html
- [ ] news.html
- [ ] locations.html
- [ ] contact.html
- [ ] quote-calculator.html
- [ ] tracking-results.html
- [ ] mol-group.html
- [ ] 404.html

### Solutions Subfolder (6 files):
- [ ] solutions/index.html
- [ ] solutions/manufacturing.html
- [ ] solutions/automotive.html
- [ ] solutions/electronics.html
- [ ] solutions/fashion.html
- [ ] solutions/food-beverage.html

**TỔNG**: 21 files cần đồng bộ

---

## 🔧 Cách Đồng bộ Navbar

### Bước 1: Copy Template

File template: **`NAVBAR-TEMPLATE.html`**

```html
<header>
    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo-wrapper">
                    <!-- Language switcher here -->
                </div>
                <ul class="nav-menu" id="navMenu">
                    <!-- Menu items -->
                </ul>
                <div class="nav-actions">
                    <!-- Only hamburger button -->
                </div>
            </div>
        </div>
    </nav>
</header>
```

### Bước 2: Tìm và Thay thế

#### Trong mỗi file HTML:

**TÌM:**
```html
<header>
    <!-- Old navbar structure -->
</header>
```

**THAY BẰNG:**
- Copy toàn bộ nội dung từ `NAVBAR-TEMPLATE.html`

### Bước 3: Điều chỉnh Paths

#### Root Level Files:
- Logo path: `img/logo/logo_mol-1.png` ✅
- CSS: `styles.css` ✅
- JS: `script.js`, `i18n.js` ✅

#### Solutions Subfolder Files:
- Logo path: `../img/logo/logo_mol-1.png` ⚠️ THAY ĐỔI
- CSS: `../styles.css` ⚠️ THAY ĐỔI
- JS: `../script.js`, `../i18n.js` ⚠️ THAY ĐỔI
- Links: Thêm `../` prefix (e.g., `../services.html`)

---

## 📝 Chi tiết Thay đổi

### 1. Logo Wrapper (MỚI)

```html
<div class="logo-wrapper">
    <div class="logo">
        <a href="index.html">
            <img src="img/logo/logo_mol-1.png" alt="MOL Logistics Vietnam">
        </a>
    </div>
    <div class="language-switcher">
        <button class="lang-btn active" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="vi">VI</button>
        <button class="lang-btn" data-lang="ja">JA</button>
    </div>
</div>
```

**Đặc điểm:**
- Language switcher nằm DƯỚI logo
- Wrap cả 2 trong `.logo-wrapper`
- Flex column trên desktop, row trên mobile

### 2. Nav Actions (ĐƠN GIẢN HÓA)

#### Trước:
```html
<div class="nav-actions">
    <button class="search-toggle">...</button> ← XÓA
    <div class="language-switcher">...</div> ← DI CHUYỂN
    <button class="mobile-menu-toggle">...</button>
</div>
```

#### Sau:
```html
<div class="nav-actions">
    <button class="mobile-menu-toggle" id="mobileMenuToggle">
        <span class="material-icons">menu</span>
    </button>
</div>
```

**Chỉ còn hamburger button!**

### 3. Get Quote Button (THAY ĐỔI)

#### Trước:
```html
<li><a href="quote-calculator.html" class="nav-link">
    <span class="material-icons">calculate</span>
    Get Quote
</a></li>
```

#### Sau:
```html
<li class="nav-cta">
    <a href="quote-calculator.html" class="btn-quote">
        Get Quote
    </a>
</li>
```

**Không có icon, orange gradient background!**

### 4. Company Dropdown (CẬP NHẬT)

**Thêm 2 items:**
```html
<li>
    <a href="news.html">
        <span class="material-icons">article</span>
        <span>News & Updates</span>
    </a>
</li>
<li>
    <a href="contact.html">
        <span class="material-icons">contact_mail</span>
        <span>Contact Us</span>
    </a>
</li>
```

### 5. XÓA Search Modal

**XÓA toàn bộ:**
```html
<!-- KHÔNG CÒN DÙNG NỮA -->
<div class="search-modal" id="searchModal">
    ...
</div>
```

---

## 🎨 CSS Updates (ĐÃ HOÀN THÀNH)

File: **`styles.css`**

### Thêm mới:

```css
/* Logo Wrapper */
.logo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.logo-wrapper .language-switcher {
    margin: 0;
    padding: 3px;
}

/* Get Quote Button */
.nav-cta {
    margin-left: 10px;
}

.btn-quote {
    background: linear-gradient(135deg, #FF6600, #E55A00);
    color: white;
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(255, 102, 0, 0.25);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .logo-wrapper {
        flex-direction: row;
        align-items: center;
        gap: 15px;
    }
    
    .logo-wrapper .language-switcher {
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 999;
        background: white;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
}
```

### Đã xóa:

```css
/* ĐÃ XÓA */
.search-toggle { ... }
.search-modal { ... }
.search-modal-content { ... }
.search-input-wrapper { ... }
.search-filters { ... }
/* Tổng ~174 lines CSS đã xóa */
```

---

## ⚠️ Lưu ý Quan trọng

### 1. Solutions Subfolder

**Phải thay đổi paths:**

```html
<!-- Logo -->
<img src="../img/logo/logo_mol-1.png" alt="MOL Logistics Vietnam">

<!-- Links -->
<a href="../index.html">Home</a>
<a href="../services.html">Services</a>
<a href="../quote-calculator.html" class="btn-quote">Get Quote</a>

<!-- Script auto-fix links (đã có sẵn) -->
<script>
    document.querySelectorAll('header a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('../')) {
            if (href.startsWith('solutions/')) {
                link.setAttribute('href', href.replace('solutions/', ''));
            } else {
                link.setAttribute('href', '../' + href);
            }
        }
    });
</script>
```

### 2. Active State

Đặt `active` class cho nav-link hiện tại:

```html
<!-- On services.html -->
<li><a href="services.html" class="nav-link active">Services</a></li>

<!-- On about.html -->
<li><a href="about.html" class="nav-link active">Company</a></li>
```

### 3. JavaScript Dependencies

**Bắt buộc phải có:**
```html
<script src="script.js"></script>
<script src="i18n.js"></script>
```

Cho mobile menu và language switching.

---

## ✅ Checklist cho mỗi Page

Khi update mỗi file, check:

- [ ] Logo path đúng (root vs solutions/)
- [ ] Language switcher dưới logo
- [ ] KHÔNG có search button
- [ ] KHÔNG có search modal
- [ ] Get Quote là button orange
- [ ] Company dropdown có News & Contact
- [ ] Mobile hamburger hoạt động
- [ ] Active state đúng page
- [ ] Script dependencies đầy đủ
- [ ] Test trên browser

---

## 📊 Progress Tracking

### Root Files (0/15):
- [ ] about.html
- [ ] services.html
- [ ] ocean-freight.html
- [ ] air-freight.html
- [ ] land-transport.html
- [ ] warehousing.html
- [ ] customs-clearance.html
- [ ] supply-chain.html
- [ ] news.html
- [ ] locations.html
- [ ] contact.html
- [ ] quote-calculator.html
- [ ] tracking-results.html
- [ ] mol-group.html
- [ ] 404.html

### Solutions Files (0/6):
- [ ] solutions/index.html
- [ ] solutions/manufacturing.html
- [ ] solutions/automotive.html
- [ ] solutions/electronics.html
- [ ] solutions/fashion.html
- [ ] solutions/food-beverage.html

---

## 🚀 Quick Command (Future)

```bash
# Tạo script tự động (optional)
# Replace navbar in all files automatically
python update_navbar.py
```

---

## 📞 Support

Nếu gặp vấn đề:
1. Kiểm tra paths (../ cho solutions/)
2. Kiểm tra CSS đã update chưa
3. Kiểm tra JavaScript dependencies
4. Test mobile menu
5. Test language switcher

---

## ✨ Summary

### ĐÃ THỰC HIỆN:
✅ `index.html` - Updated completely
✅ `styles.css` - All CSS updated
✅ `NAVBAR-TEMPLATE.html` - Created
✅ `NAVBAR-SYNC-GUIDE.md` - This document

### CẦN LÀM TIẾP:
⏳ Update 21 remaining files
⏳ Test tất cả pages
⏳ Verify mobile responsive
⏳ Check cross-browser compatibility

---

**Date**: November 14, 2025
**Status**: ✅ Template Ready - ⏳ Sync Pending
**Priority**: High - Navbar consistency across all pages

---

**📝 Note**: Sử dụng `NAVBAR-TEMPLATE.html` làm reference cho tất cả updates!
