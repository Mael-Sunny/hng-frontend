// Fade-in animation on load
document.addEventListener("DOMContentLoaded", () => {
  const aboutContainer = document.querySelector(".about-container");
  aboutContainer.style.opacity = 0;
  aboutContainer.style.transition = "opacity 1.2s ease-in-out";

  setTimeout(() => {
    aboutContainer.style.opacity = 1;
  }, 200);
});

// Theme toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Theme";
toggleBtn.className = "theme-toggle";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
});

// Load stored theme
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
  }
});
