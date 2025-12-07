document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "admin@gmail.com" && password === "admin123") {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials! Try again.");
  }
});