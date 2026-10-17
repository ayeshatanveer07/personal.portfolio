// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // -------------------------
  // Smooth navigation
  // -------------------------
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {
        const target = document.querySelector(targetId);

        if (target) {
          e.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });


  // -------------------------
  // Project image preview
  // -------------------------
  const projectImages = document.querySelectorAll(".project-gallery img");

  projectImages.forEach(image => {
    image.style.cursor = "pointer";

    image.addEventListener("click", () => {
      const overlay = document.createElement("div");

      overlay.className = "image-overlay";

      overlay.innerHTML = `
        <div class="image-preview">
          <button class="close-preview">&times;</button>
          <img src="${image.src}" alt="${image.alt}">
        </div>
      `;

      document.body.appendChild(overlay);

      const closeButton = overlay.querySelector(".close-preview");

      closeButton.addEventListener("click", () => {
        overlay.remove();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.remove();
        }
      });
    });
  });


  // -------------------------
  // Escape key closes image
  // -------------------------
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const overlay = document.querySelector(".image-overlay");

      if (overlay) {
        overlay.remove();
      }
    }
  });


  // -------------------------
  // Current year in footer
  // -------------------------
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // -------------------------
  // Simple scroll reveal
  // -------------------------
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });

});
