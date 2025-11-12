# 📚 HƯỚNG DẪN SỬ DỤNG DỮ LIỆU MOL LOGISTICS VIETNAM

## 📁 CÁC FILE DỮ LIỆU

### 1. `company-data.js` - Dữ liệu có cấu trúc (JavaScript Object)
**Công dụng:**
- ✅ Sử dụng trong code JavaScript
- ✅ Dễ dàng truy xuất và hiển thị động
- ✅ Có thể import vào các file JS khác
- ✅ Hỗ trợ đa ngôn ngữ (EN, VI, JA)

**Cách sử dụng:**

```javascript
// Import trong HTML
<script src="company-data.js"></script>

// Hoặc trong Node.js
const MOL_DATA = require('./company-data.js');

// Truy xuất dữ liệu
console.log(MOL_DATA.basicInfo.fullName.vi); 
// Output: "Công ty TNHH MOL Logistics (Việt Nam)"

console.log(MOL_DATA.keyStats.employees); 
// Output: 192

// Hiển thị danh sách văn phòng miền Nam
MOL_DATA.officeNetwork.regions.south.offices.forEach(office => {
    console.log(office.nameVi);
});
```

### 2. `COMPANY-INFO.md` - Tài liệu Markdown đầy đủ
**Công dụng:**
- ✅ Đọc trực tiếp, dễ hiểu
- ✅ Copy-paste vào tài liệu
- ✅ Tham khảo nhanh thông tin
- ✅ In ấn hoặc export PDF

**Nội dung bao gồm:**
- Thông tin cơ bản công ty
- Cấu trúc tập đoàn
- Lịch sử phát triển
- 17 địa điểm văn phòng
- Dịch vụ chi tiết
- Chứng nhận và ưu thế
- Số liệu thống kê

---

## 🎯 CÁC TRƯỜNG HỢP SỬ DỤNG

### 1. Cập nhật trang About Us
```javascript
// Hiển thị số liệu thống kê
document.getElementById('employee-count').textContent = 
    MOL_DATA.keyStats.employees;

document.getElementById('office-count').textContent = 
    MOL_DATA.keyStats.totalLocations;

// Hiển thị thông tin liên hệ
document.getElementById('hq-address').innerHTML = 
    MOL_DATA.basicInfo.headquarters.address.vi;

document.getElementById('hq-phone').textContent = 
    MOL_DATA.basicInfo.headquarters.phone;
```

### 2. Tạo timeline lịch sử
```javascript
const timeline = MOL_DATA.milestones;

timeline.forEach(milestone => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
        <div class="year">${milestone.year}</div>
        <div class="event">${milestone.event.vi}</div>
    `;
    document.getElementById('timeline-container').appendChild(item);
});
```

### 3. Hiển thị danh sách văn phòng
```javascript
// Văn phòng miền Nam
const southOffices = MOL_DATA.officeNetwork.regions.south.offices;

southOffices.forEach(office => {
    const card = `
        <div class="office-card">
            <h3>${office.nameVi}</h3>
            ${office.address ? `<p>${office.address}</p>` : ''}
            ${office.phone ? `<p>☎️ ${office.phone}</p>` : ''}
        </div>
    `;
    document.getElementById('south-offices').innerHTML += card;
});
```

### 4. Liệt kê dịch vụ
```javascript
const services = MOL_DATA.services;

Object.keys(services).forEach(key => {
    const service = services[key];
    console.log(`📦 ${service.name.vi}`);
    
    if (service.features) {
        service.features.forEach(feature => {
            console.log(`   ✓ ${feature}`);
        });
    }
});
```

### 5. Hiển thị chứng nhận
```javascript
MOL_DATA.certifications.forEach(cert => {
    const badge = `
        <div class="cert-badge">
            <h4>${cert.name}</h4>
            <p>${cert.descriptionVi}</p>
        </div>
    `;
    document.getElementById('certifications').innerHTML += badge;
});
```

---

## 📊 CẤU TRÚC DỮ LIỆU CHI TIẾT

### Các khối dữ liệu chính:

1. **basicInfo** - Thông tin cơ bản
   - fullName (en, vi, ja)
   - established
   - capital
   - employees
   - headquarters (address, phone, email, website)

2. **parentCompany** - Thông tin tập đoàn
   - molLogistics
   - molGroup

3. **milestones[]** - Lịch sử phát triển
   - year, month, event, important

4. **officeNetwork** - Mạng lưới văn phòng
   - regions.south.offices[]
   - regions.north.offices[]

5. **services** - Dịch vụ
   - airFreight, oceanFreight, customsClearance
   - warehousing, domesticTransport, logistics
   - moving, specialServices

6. **industries[]** - Ngành hàng phục vụ

7. **certifications[]** - Chứng nhận

8. **leadership** - Ban lãnh đạo
   - current, previous

9. **strategicInvestments** - Đầu tư chiến lược

10. **marketContext** - Bối cảnh thị trường

11. **competitiveAdvantages[]** - Ưu thế cạnh tranh

12. **csr** - Trách nhiệm xã hội

13. **futureOutlook** - Triển vọng

14. **keyStats** - Thống kê tóm tắt

---

## 🔄 CẬP NHẬT DỮ LIỆU

### Khi cần cập nhật thông tin:

1. **Mở file `company-data.js`**
2. **Tìm phần cần sửa** (sử dụng Ctrl+F)
3. **Cập nhật giá trị**
4. **Lưu file**

**Ví dụ:** Cập nhật số nhân viên

```javascript
// TÌM:
employees: {
    total: 192,
    asOf: "September 2023"
}

// SỬA THÀNH:
employees: {
    total: 210,  // ← Số mới
    asOf: "December 2025"  // ← Thời điểm mới
}
```

### Đồng bộ với file Markdown:

Sau khi sửa `company-data.js`, nhớ cập nhật tương ứng trong `COMPANY-INFO.md`

---

## 💡 MẸO VÀ TRICKS

### 1. Tìm kiếm nhanh
```javascript
// Tìm tất cả văn phòng có kho
const warehouseOffices = [
    ...MOL_DATA.officeNetwork.regions.south.offices,
    ...MOL_DATA.officeNetwork.regions.north.offices
].filter(office => office.hasWarehouse || office.type === 'warehouse');

console.log(warehouseOffices);
```

### 2. Tính toán động
```javascript
// Tính tuổi công ty
const currentYear = new Date().getFullYear();
const establishedYear = parseInt(MOL_DATA.basicInfo.established.split(' ')[1]);
const companyAge = currentYear - establishedYear;

console.log(`MOL Logistics VN: ${companyAge} năm tuổi`);
```

### 3. Format số tiền
```javascript
const capital = MOL_DATA.basicInfo.capital;
const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: capital.currency
}).format(capital.amount);

console.log(formatted); // $550,000.00
```

### 4. Đa ngôn ngữ
```javascript
const currentLang = 'vi'; // hoặc 'en', 'ja'

// Hiển thị tên công ty theo ngôn ngữ hiện tại
const companyName = MOL_DATA.basicInfo.fullName[currentLang];
```

---

## 🎨 TÍCH HỢP VỚI WEBSITE

### Trong file HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>MOL Logistics Vietnam</title>
</head>
<body>
    <div id="company-stats"></div>
    
    <!-- Load dữ liệu -->
    <script src="company-data.js"></script>
    
    <!-- Sử dụng dữ liệu -->
    <script>
        document.getElementById('company-stats').innerHTML = `
            <h2>Thống kê công ty</h2>
            <p>Nhân viên: ${MOL_DATA.keyStats.employees}</p>
            <p>Văn phòng: ${MOL_DATA.keyStats.totalLocations}</p>
            <p>Kho: ${MOL_DATA.keyStats.warehouseSpace} m²</p>
        `;
    </script>
</body>
</html>
```

---

## 📋 CHECKLIST KHI SỬ DỤNG

- [ ] Đã đọc hiểu cấu trúc dữ liệu
- [ ] Biết cách truy xuất các trường dữ liệu
- [ ] Kiểm tra dữ liệu có tồn tại trước khi hiển thị
- [ ] Xử lý các trường có thể null/undefined
- [ ] Cập nhật đồng bộ cả 2 file khi có thay đổi

---

## 🆘 TROUBLESHOOTING

### Lỗi: "MOL_COMPANY_DATA is not defined"
**Giải pháp:** Đảm bảo đã load file `company-data.js` trước khi sử dụng

```html
<script src="company-data.js"></script>
<script>
    // Bây giờ mới sử dụng được
    console.log(MOL_COMPANY_DATA);
</script>
```

### Lỗi: "Cannot read property of undefined"
**Giải pháp:** Kiểm tra đường dẫn truy xuất

```javascript
// SAI:
console.log(MOL_DATA.services.airFreight.name);

// ĐÚNG:
console.log(MOL_DATA.services.airFreight.name.vi);
```

---

## 📞 HỖ TRỢ

Nếu cần hỗ trợ hoặc có câu hỏi về dữ liệu, vui lòng:
- Kiểm tra lại file `COMPANY-INFO.md` để tham khảo
- Xem lại cấu trúc trong `company-data.js`
- Đảm bảo sử dụng đúng tên trường và cấu trúc

---

*Tài liệu này sẽ được cập nhật khi có thay đổi về dữ liệu công ty.*
