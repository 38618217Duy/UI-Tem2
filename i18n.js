// Internationalization (i18n) System for MOL Logistics Vietnam
// Centralized language management for all pages

// Import translations from main script.js
// This file extends the translation system to work across all pages

class I18nManager {
    constructor() {
        // Luôn cố định sử dụng tiếng Việt
        this.currentLang = 'vi';
        this.translations = window.translations || {};
    }

    // Change language
    changeLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not found`);
            return;
        }
        
        this.currentLang = lang;
        localStorage.setItem('preferredLang', lang);
        
        // Update all elements with data-lang-key
        this.updatePageContent();
        
        // Dispatch custom event for other scripts to listen
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    // Update all translatable content on page
    updatePageContent() {
        const lang = this.currentLang;
        
        // Update text content
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (this.translations[lang] && this.translations[lang][key]) {
                element.innerHTML = this.translations[lang][key];
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if (this.translations[lang] && this.translations[lang][key]) {
                element.placeholder = this.translations[lang][key];
            }
        });
        
        // Update titles
        document.querySelectorAll('[data-lang-title]').forEach(element => {
            const key = element.getAttribute('data-lang-title');
            if (this.translations[lang] && this.translations[lang][key]) {
                element.title = this.translations[lang][key];
            }
        });
    }

    // Get translation by key
    t(key) {
        return this.translations[this.currentLang]?.[key] || key;
    }

    // Initialize language switcher buttons
    // Ở đây chỉ hiển thị nút, không cho đổi ngôn ngữ (luôn là VI)
    initLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');

        langButtons.forEach(btn => {
            const lang = btn.getAttribute('data-lang');

            // Chỉ đánh dấu VI là active, các nút khác không active và bị vô hiệu hóa
            if (lang === 'vi') {
                btn.classList.add('active');
                btn.disabled = false;
            } else {
                btn.classList.remove('active');
                btn.disabled = true; // không cho click EN/JA
            }
        });

        // Đảm bảo nội dung trang luôn cập nhật theo tiếng Việt
        this.changeLanguage('vi');
    }

    // Initialize on page load
    init() {
        this.initLanguageSwitcher();
        this.updatePageContent();
    }
}

// Create global instance
window.i18n = new I18nManager();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.i18n.init());
} else {
    window.i18n.init();
}
