# Hướng Dẫn Sử Dụng Hệ Thống Đa Ngôn Ngữ (i18n)

## Tổng Quan

Trang web MOL Logistics Vietnam hiện đã được tích hợp hệ thống đa ngôn ngữ hoàn chỉnh hỗ trợ 3 ngôn ngữ:
- **Tiếng Anh (EN)** - Mặc định
- **Tiếng Việt (VI)**
- **Tiếng Nhật (JA)**

## Cấu Trúc Hệ Thống

### 1. File Chính

- **`script.js`**: Chứa tất cả translations cho 3 ngôn ngữ trong object `translations`
- **`i18n.js`**: Quản lý logic chuyển đổi ngôn ngữ và cập nhật nội dung trang
- **`company-data.js`**: Dữ liệu công ty (nếu có)

### 2. Cách Hoạt Động

Hệ thống sử dụng các `data-lang-key` attributes trong HTML để đánh dấu nội dung cần dịch:

```html
<h1 data-lang-key="hero_title">Global Logistics Excellence</h1>
<p data-lang-key="hero_subtitle">Connecting Vietnam to the World...</p>
```

Khi người dùng chuyển đổi ngôn ngữ, hệ thống sẽ:
1. Tìm tất cả elements có `data-lang-key`
2. Lấy giá trị translation tương ứng từ `translations[lang][key]`
3. Cập nhật nội dung của element

## Cách Thêm Nội Dung Mới Cần Dịch

### Bước 1: Thêm Translation Keys

Mở file `script.js` và thêm key mới vào cả 3 ngôn ngữ:

```javascript
const translations = {
    en: {
        // ... existing keys
        new_key: "New Content in English"
    },
    vi: {
        // ... existing keys
        new_key: "Nội dung mới bằng tiếng Việt"
    },
    ja: {
        // ... existing keys
        new_key: "日本語の新しいコンテンツ"
    }
};
```

### Bước 2: Thêm Attribute vào HTML

Thêm `data-lang-key` vào element HTML:

```html
<p data-lang-key="new_key">New Content in English</p>
```

### Bước 3: Cho Placeholders

Nếu cần dịch placeholder của input:

```html
<input type="text" data-lang-placeholder="search_placeholder" placeholder="Search...">
```

Và thêm key vào translations:
```javascript
search_placeholder: "Search..."  // EN
search_placeholder: "Tìm kiếm..." // VI
search_placeholder: "検索..."      // JA
```

## Các Trang Đã Được Tích Hợp

✅ **index.html** - Trang chủ
✅ **about.html** - Giới thiệu
✅ **services.html** - Dịch vụ
✅ **news.html** - Tin tức
✅ **locations.html** - Địa điểm
✅ **404.html** - Trang lỗi

## Translation Keys Có Sẵn

### Navigation
- `nav_home`, `nav_services`, `nav_company`, `nav_about`, `nav_news`, `nav_contact`

### About Page
- `about_page_title`, `about_page_subtitle`, `about_trusted_partner`
- `about_mol_group`, `about_global_network_title`, `about_expert_team`
- `about_journey_title`, `about_2006`, `about_2010`, `about_2015`, `about_2020`, `about_2025`

### Services Page
- `services_page_title`, `services_page_subtitle`
- `services_countries_served`, `services_iso_certified`, `services_customer_support`
- `services_cta_title`, `services_get_quote`, `services_contact_us`

### News Page
- `news_page_title`, `news_page_subtitle`, `news_search_placeholder`
- `news_filter_by`, `news_all`, `news_company`, `news_investments`
- `news_sort_by`, `news_newest`, `news_oldest`

### Locations Page
- `locations_page_title`, `locations_page_subtitle`
- `locations_offices_vn`, `locations_countries`, `locations_global`
- `locations_all`, `locations_northern`, `locations_central`, `locations_southern`

### Common
- `breadcrumb_home`, `read_more`, `learn_more`, `view_all`, `get_started`, `back_to_top`

## API JavaScript

### Thay Đổi Ngôn Ngữ Programmatically

```javascript
// Thay đổi sang tiếng Việt
window.i18n.changeLanguage('vi');

// Thay đổi sang tiếng Nhật
window.i18n.changeLanguage('ja');

// Lấy translation theo key
const text = window.i18n.t('hero_title');
```

### Lắng Nghe Sự Kiện Thay Đổi Ngôn Ngữ

```javascript
window.addEventListener('languageChanged', function(e) {
    console.log('Language changed to:', e.detail.lang);
    // Cập nhật nội dung động nếu cần
});
```

## Lưu Ý Quan Trọng

1. **Thứ tự script**: Luôn load `script.js` trước `i18n.js`
   ```html
   <script src="script.js"></script>
   <script src="i18n.js"></script>
   ```

2. **LocalStorage**: Ngôn ngữ được chọn sẽ được lưu trong localStorage với key `preferredLang`

3. **Fallback**: Nếu không tìm thấy translation, hệ thống sẽ hiển thị key gốc

4. **HTML trong Translation**: Có thể sử dụng HTML trong translation:
   ```javascript
   contact_hours: "Monday - Friday: 8:00 AM - 5:30 PM<br>Saturday: 8:00 AM - 12:00 PM"
   ```

## Kiểm Tra Hệ Thống

1. Mở trang web trong trình duyệt
2. Click vào nút EN/VI/JA ở góc trên phải
3. Kiểm tra xem nội dung có thay đổi ngôn ngữ không
4. Reload trang - ngôn ngữ đã chọn phải được giữ nguyên

## Troubleshooting

### Nội dung không thay đổi khi chuyển ngôn ngữ?
- Kiểm tra xem element có `data-lang-key` attribute chưa
- Kiểm tra key có tồn tại trong cả 3 ngôn ngữ không
- Mở Console để xem có lỗi JavaScript không

### Ngôn ngữ không được lưu sau khi reload?
- Kiểm tra localStorage có hoạt động không
- Xem file `i18n.js` đã được load chưa

### Một số phần không dịch?
- Có thể phần đó được render động bằng JavaScript
- Cần thêm event listener cho `languageChanged` và cập nhật lại nội dung

## Mở Rộng Thêm Ngôn Ngữ

Để thêm ngôn ngữ mới (ví dụ: Tiếng Hàn - KR):

1. Thêm object mới vào `translations` trong `script.js`:
```javascript
const translations = {
    en: { ... },
    vi: { ... },
    ja: { ... },
    kr: {
        nav_home: "홈",
        nav_services: "서비스",
        // ... thêm tất cả keys
    }
};
```

2. Thêm nút language switcher:
```html
<button class="lang-btn" data-lang="kr">KR</button>
```

## Hỗ Trợ

Nếu cần hỗ trợ hoặc có thắc mắc về hệ thống đa ngôn ngữ, vui lòng liên hệ team phát triển.

---

**Phiên bản**: 1.0  
**Cập nhật lần cuối**: 2025
