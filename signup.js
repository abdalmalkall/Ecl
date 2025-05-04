// signup.js

// إعداد Firebase (تأكد أنك أضفت هذا الكود داخل HTML وليس هنا مباشرة)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// إعدادات Firebase الخاصة بك (يجب أن تستبدل القيم بمشروعك)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const messageDiv = document.getElementById("message");

  const showMessage = (text, type = "success") => {
    messageDiv.textContent = text;
    messageDiv.className = type === "success" ? "message-success" : "message-error";
  };

  const clearMessage = () => {
    messageDiv.textContent = "";
    messageDiv.className = "";
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearMessage();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      showMessage("يرجى إدخال البريد الإلكتروني وكلمة المرور.", "error");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showMessage("تم إنشاء الحساب بنجاح!", "success");

      // إعادة التوجيه إلى صفحة أخرى بعد النجاح
      setTimeout(() => {
        window.location.href = "dashboard.html"; // غيّر الصفحة إذا أردت
      }, 2000);
    } catch (error) {
      let errorMsg = "حدث خطأ أثناء إنشاء الحساب.";

      if (error.code === "auth/email-already-in-use") {
        errorMsg = "البريد الإلكتروني مستخدم بالفعل.";
      } else if (error.code === "auth/weak-password") {
        errorMsg = "كلمة المرور ضعيفة. استخدم 6 أحرف على الأقل.";
      } else if (error.code === "auth/invalid-email") {
        errorMsg = "صيغة البريد الإلكتروني غير صحيحة.";
      }

      showMessage(errorMsg, "error");
    }
  });
});
