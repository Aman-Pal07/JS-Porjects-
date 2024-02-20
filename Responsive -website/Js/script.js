// Menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu-icon");
  const navlist = document.querySelector(".navlist");
  const body = document.body;

  menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
    body.classList.toggle("menu-open");
  });
});

// Initialize ScrollReveal
const sr = ScrollReveal({
  duration: 1000,
  delay: 300,
  easing: "ease",
  reset: true,
});

// Add more animations
sr.reveal(".hero-text", { origin: "top", distance: "50px" });
sr.reveal(".hero-img", { origin: "right", distance: "50px" });
sr.reveal(".icons", { origin: "left", distance: "50px" });
sr.reveal(".scroll-down", { origin: "bottom", distance: "50px" });
sr.reveal(".navlist", { origin: "top", distance: "50px" });
sr.reveal(".bx-menu", { origin: "top", distance: "50px" });

// Reveal elements on scroll
sr.reveal(".section", { origin: "bottom", distance: "50px" });
