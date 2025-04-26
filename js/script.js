let currentLanguage = 'ar'; // اللغة الحالية (افتراضيًا عربية)

const langData = {
    'ar': {
        'home': 'الصفحة الرئيسية',
        'about': 'من نحن',
        'contact': 'اتصل بنا',
        'submit': 'إرسال',
        'sign_in': 'تسجيل الدخول',
        'about_us': 'نحن في I Can نقدم المساعدة والدعم لطلاب BTEC في جميع مراحل دراستهم.',
    },
    'en': {
        'home': 'Home',
        'about': 'About Us',
        'contact': 'Contact Us',
        'submit': 'Submit',
        'sign_in': 'Sign In',
        'about_us': 'At I Can, we offer support and assistance to BTEC students at all stages of their studies.',
    }
};

// وظيفة لتغيير اللغة
function changeLanguage() {
    currentLanguage = (currentLanguage === 'ar') ? 'en' : 'ar';
    updateTexts();
    updateLanguageSwitcher();
}

// تحديث النصوص بناءً على اللغة المختارة
function updateTexts() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = langData[currentLanguage][key] || element.textContent;
    });
}

// تحديث نص الزر
function updateLanguageSwitcher() {
    const langSwitcher = document.querySelector('.language-switcher');
    langSwitcher.textContent = (currentLanguage === 'ar') ? 'English' : 'العربية';
}

// عند تحميل الصفحة، نقوم بتحديث النصوص حسب اللغة الحالية
window.onload = updateTexts;
