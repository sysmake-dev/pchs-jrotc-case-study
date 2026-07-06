/* ================================
   DEFINING VARIABLES
================================ */

// Navigation Variables
const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

/* ================================
   TOGGLE MENU
================================ */

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");

  const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
  toggle.setAttribute("aria-expanded", !expanded);
});

/* ================================
   CLOSE ON LINK CLICK
================================ */

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  });
});

/* ================================
   CLOSE WHEN CLICKING OUTSIDE
================================ */

document.addEventListener("click", (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickToggle = toggle.contains(event.target);

  if (!isClickInsideNav && !isClickToggle) {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }
});

/* ================================
   CLOSE WITH ESC KEY
================================ */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }
});
