
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Einfacher Check (später mit API ersetzen)
    if (user === "admin" && pass === "geheim123") {
      window.location.href = "product_register.html";
    } else {
      document.getElementById("loginMessage").textContent = "❌ Login fehlgeschlagen";
      document.getElementById("loginMessage").style.color = "red";
    }
  });