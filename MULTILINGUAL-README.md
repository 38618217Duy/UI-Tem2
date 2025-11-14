# 🌐 Hệ Thống Đa Ngôn Ngữ - MOL Logistics Vietnam

## Tóm Tắt Nhanh

Trang web đã được tích hợp **hệ thống đa ngôn ngữ hoàn chỉnh** hỗ trợ 3 ngôn ngữ:
- 🇬🇧 **English (EN)** - Mặc định
- 🇻🇳 **Tiếng Việt (VI)**
- 🇯🇵 **日本語 (JA)**

## 📁 Files Quan Trọng

| File | Mô Tả |
|------|-------|
| `i18n.js` | Hệ thống quản lý đa ngôn ngữ |
| `script.js` | Chứa tất cả translations (600+ keys) |
| `I18N-GUIDE.md` | Hướng dẫn chi tiết đầy đủ |
| `MULTILINGUAL-SUMMARY.md` | Tóm tắt công việc hoàn thiện |

## 🚀 Cách Sử Dụng

### Người Dùng
1. Click nút **EN/VI/JA** ở góc trên phải
2. Toàn bộ trang tự động chuyển đổi ngôn ngữ
3. Ngôn ngữ được lưu tự động

### Developer - Thêm Nội Dung Mới

**1. Thêm translation key vào `script.js`:**
```javascript
const translations = {
    en: { my_key: "English Text" },
    vi: { my_key: "Văn Bản Tiếng Việt" },
    ja: { my_key: "日本語テキスト" }
};
```

**2. Sử dụng trong HTML:**
```html
<p data-lang-key="my_key">English Text</p>
```

**3. Xong!** Hệ thống tự động xử lý phần còn lại.

## ✅ Trang Đã Tích Hợp

- ✅ Trang chủ (index.html)
- ✅ Giới thiệu (about.html)
- ✅ Dịch vụ (services.html)
- ✅ Tin tức (news.html)
- ✅ Địa điểm (locations.html)
- ✅ Trang 404 (404.html)

## 🎯 Tính Năng

- ✅ Tự động lưu ngôn ngữ đã chọn
- ✅ Khôi phục ngôn ngữ khi reload trang
- ✅ Cập nhật toàn bộ nội dung tức thì
- ✅ Hỗ trợ nội dung động
- ✅ API JavaScript đơn giản

## 📚 Tài Liệu

Xem **`I18N-GUIDE.md`** để biết hướng dẫn chi tiết về:
- Cách thêm ngôn ngữ mới
- API JavaScript
- Troubleshooting
- Best practices

## 💡 Quick Tips

```javascript
// Thay đổi ngôn ngữ bằng code
window.i18n.changeLanguage('vi');

// Lấy translation
const text = window.i18n.t('hero_title');

// Lắng nghe sự kiện thay đổi ngôn ngữ
window.addEventListener('languageChanged', (e) => {
    console.log('Ngôn ngữ mới:', e.detail.lang);
});
```

## 📊 Thống Kê

- **Translation Keys**: 200+
- **Tổng Translations**: 600+
- **Ngôn Ngữ**: 3
- **Trang Hỗ Trợ**: 6+

---

**Status**: ✅ Hoàn Thành 100%  
**Version**: 1.0  
**Last Updated**: 2025
