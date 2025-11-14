# Debug: Logo mất trong Solutions Pages

## Vấn đề
Logo không hiển thị trong các trang solutions/ (automotive.html, electronics.html, v.v.)

## Đã thực hiện

### 1. Cập nhật `navbar-loader.js`
- ✅ Thêm console.log để debug
- ✅ Fix logic `adjustNavbarPaths()` 
- ✅ Kiểm tra path detection

### 2. Tạo test page
File: `solutions/test-navbar.html`
- Trang test đơn giản để kiểm tra navbar loading

## Cách kiểm tra

### Bước 1: Mở trang test
1. Mở file: `solutions/test-navbar.html` trong browser
2. Mở Developer Console (F12)
3. Kiểm tra console logs:

**Logs mong đợi:**
```
DOMContentLoaded - header-placeholder exists: true
Pathname: /solutions/test-navbar.html
Path parts: ["", "solutions", "test-navbar.html"]
Path depth: 2
Calculated prefix: ../
Loading navbar from: ../navbar-component.html
Navbar HTML inserted
Adjusting paths with prefix: ../
Logo path adjusted: ../img/logo/logo_mol-1.png
```

### Bước 2: Kiểm tra logo
1. Inspect logo element (Right-click > Inspect)
2. Kiểm tra `src` attribute:
   - ❌ Sai: `src="img/logo/logo_mol-1.png"`
   - ✅ Đúng: `src="../img/logo/logo_mol-1.png"`

### Bước 3: Kiểm tra network
1. Mở tab Network trong DevTools
2. Filter: Images
3. Tìm `logo_mol-1.png`
4. Kiểm tra:
   - Status: 200 (OK) ✅
   - Status: 404 (Not Found) ❌

## Các trường hợp lỗi có thể

### Lỗi 1: Path depth detection sai
**Triệu chứng:**
```
Path depth: 1
Calculated prefix: 
```

**Nguyên nhân:** Pathname không đúng format

**Giải pháp:** Kiểm tra `window.location.pathname`

### Lỗi 2: Logo path không được adjust
**Triệu chứng:**
```
Navbar HTML inserted
Adjusting paths with prefix: ../
// Không có log "Logo path adjusted"
```

**Nguyên nhân:** 
- Logo element không tìm thấy
- Logo src đã có prefix

**Giải pháp:** Kiểm tra selector `.logo img`

### Lỗi 3: Fetch navbar component thất bại
**Triệu chứng:**
```
Error loading navbar: Error: Navbar component not found at: ../navbar-component.html
```

**Nguyên nhân:** File `navbar-component.html` không tồn tại

**Giải pháp:** Kiểm tra file có tồn tại ở root folder

### Lỗi 4: 404 Not Found cho logo
**Triệu chứng:** Network tab shows 404 for logo

**Nguyên nhân:** Path vẫn sai sau khi adjust

**Debug:**
```javascript
// Thêm vào adjustNavbarPaths()
console.log('Original logo src:', logoSrc);
console.log('Adjusted logo src:', prefix + logoSrc);
console.log('Final logo src:', logo.getAttribute('src'));
```

## Giải pháp tạm thời

Nếu vẫn không hoạt động, có thể hardcode path trong solutions pages:

### Option 1: Override trong inline script
```html
<script src="../navbar-loader.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const logo = document.querySelector('.logo img');
            if (logo) {
                logo.src = '../img/logo/logo_mol-1.png';
                console.log('Logo path manually fixed');
            }
        }, 200);
    });
</script>
```

### Option 2: Tạo navbar riêng cho solutions
File: `solutions/navbar-component-solutions.html`
```html
<header>
    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">
                    <a href="../index.html">
                        <img src="../img/logo/logo_mol-1.png" alt="MOL Logistics Vietnam">
                    </a>
                </div>
                <!-- rest of navbar -->
            </div>
        </div>
    </nav>
</header>
```

## Checklist debug

- [ ] Console logs xuất hiện
- [ ] Path depth = 2
- [ ] Prefix = '../'
- [ ] Navbar HTML inserted
- [ ] Logo element found
- [ ] Logo src adjusted
- [ ] Logo loads (200 OK)
- [ ] Logo hiển thị trên trang

## Files liên quan

- `navbar-loader.js` - Main loader script
- `navbar-component.html` - Navbar template
- `solutions/automotive.html` - Test page
- `solutions/test-navbar.html` - Debug page
- `img/logo/logo_mol-1.png` - Logo file

## Ghi chú

- Path detection dựa vào `window.location.pathname`
- Prefix được tính: `pathDepth > 1 ? '../' : ''`
- Logo adjustment chỉ chạy khi `prefix` có giá trị
- Cần đợi navbar load xong mới adjust paths
