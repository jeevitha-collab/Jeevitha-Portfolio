// Jeevitha R — Portfolio interactions
// Replace the placeholder contact details below with your real links.
const CONTACT = {
  email: "",       // Example: jeevitha@example.com
  github: "",      // Example: https://github.com/your-username
  linkedin: ""     // Example: https://www.linkedin.com/in/your-profile/
};

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Mobile navigation menu
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  // Close the mobile menu after selecting a section
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Smooth reveal animations as sections enter the screen
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  // Activate the correct navigation item while scrolling
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((anchor) => {
            anchor.classList.toggle("active", anchor.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Configure contact links only when the owner adds real details.
  document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
    const type = link.dataset.placeholderLink;
    const value = CONTACT[type];
    if (value) {
      link.href = type === "email" ? `mailto:${value}` : value;
      if (type !== "email") {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      link.removeAttribute("data-placeholder-link");
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert(`Add your ${type} ${type === "email" ? "address" : "profile URL"} in js/script.js to activate this link.`);
      });
    }
  });
});
