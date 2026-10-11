const html = document.documentElement;
const toggle = document.getElementById("themeToggle");

toggle.textContent = html.dataset.theme === "dark" ? "☀️" : "🌙";

toggle.addEventListener("click", () => {
  const isDark = html.dataset.theme === "dark";
  html.dataset.theme = isDark ? "light" : "dark";
  toggle.textContent = isDark ? "🌙" : "☀️";
});

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  status.className = "";
  status.textContent = "";

  if (!name || !email || !message) {
    const missing = [];
    if (!name) missing.push("name");
    if (!email) missing.push("email");
    if (!message) missing.push("message");

    status.classList.add("error");
    status.textContent = "Please fill in: " + missing.join(", ") + ".";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    status.classList.add("error");
    status.textContent = "That email address doesn't look right.";
    return;
  }

  status.classList.add("success");
  status.textContent = "Thanks! Your message was sent.";
  form.reset();
});