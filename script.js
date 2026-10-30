
/* ========================================
   PORTFOLIO — ANICET JR. MOPANZO
======================================== */

// 1. Année automatique dans le pied de page
const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 2. Menu de navigation pour téléphone
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Ouvrir le menu" : "Fermer le menu"
    );

    navLinks.classList.toggle("open", !isOpen);
  });

  // Fermer le menu après avoir choisi une section
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
  });

  // Fermer le menu avec la touche Échap
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    }
  });
}

// 3. Apparition progressive des éléments
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  // Compatibilité avec les navigateurs plus anciens
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

console.log("Portfolio d'Anicet Jr. Mopanzo chargé avec succès.");
const profilePhoto = document.getElementById("profile-photo");
const photoPlaceholder = document.getElementById("photo-placeholder");

if (profilePhoto && photoPlaceholder) {
    profilePhoto.addEventListener("error", () => {
        profilePhoto.style.display = "none";
        photoPlaceholder.style.display = "flex";
    });
}