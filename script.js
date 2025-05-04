document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const messageDiv = document.getElementById("message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // إلغاء إرسال النموذج التلقائي
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // مسح الرسالة السابقة
      messageDiv.textContent = "";
      messageDiv.className = "";
  
      // التحقق من البريد الإلكتروني وكلمة المرور
      if (!validateEmail(email)) {
        showMessage("يرجى إدخال بريد إلكتروني صالح.", "error");
        return;
      }
  
      if (password.length < 6) {
        showMessage("كلمة المرور يجب أن تكون 6 أحرف على الأقل.", "error");
        return;
      }
  
      // في حال تم التحقق من البيانات بنجاح
      showMessage("تم تسجيل الدخول بنجاح! جاري المعالجة...", "success");
  
      // يمكنك هنا ربط Firebase أو توجيه المستخدم
      // setTimeout(() => window.location.href = "/dashboard.html", 2000);
    });
  
    function validateEmail(email) {
      // تحقق بسيط من صيغة البريد الإلكتروني
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function showMessage(message, type) {
      messageDiv.textContent = message;
      messageDiv.className = type === "success" ? "message-success" : "message-error";
    }
  });
  