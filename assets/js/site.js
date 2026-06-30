(function () {
  const panels = Array.from(document.querySelectorAll("[data-tab-panel]"));
  const tabButtons = Array.from(document.querySelectorAll("[data-tab-target]"));
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  const contactForm = document.querySelector("#contact-form");
  const messageField = document.querySelector("#message");
  const messageCount = document.querySelector("#message-count");
  const futureLinks = Array.from(document.querySelectorAll(".future-link"));

  function setActiveTab(target, options = {}) {
    const activeTarget = panels.some((panel) => panel.id === target) ? target : "home";

    panels.forEach((panel) => {
      const isActive = panel.id === activeTarget;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });

    tabButtons.forEach((button) => {
      const isActive = button.dataset.tabTarget === activeTarget;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    if (mobileMenu && menuToggle) {
      mobileMenu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
    }

    if (options.updateHash !== false) {
      history.replaceState(null, "", `?tab=${activeTarget}`);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function validateContactForm(form) {
    const status = form.querySelector(".form-status");
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    status.className = "form-status";

    if (!name) {
      status.textContent = "Please enter your name.";
      status.classList.add("is-error");
      form.elements.name.focus();
      return false;
    }

    if (!emailPattern.test(email)) {
      status.textContent = "Please enter a valid email.";
      status.classList.add("is-error");
      form.elements.email.focus();
      return false;
    }

    status.textContent = "Sending your message to Ula.";
    status.classList.add("is-success");
    return true;
  }

  function setupCarousels() {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const items = Array.from(carousel.querySelectorAll(".carousel-item"));
      const previous = carousel.querySelector("[data-carousel-prev]");
      const next = carousel.querySelector("[data-carousel-next]");
      let index = Math.max(0, items.findIndex((item) => item.classList.contains("is-active")));

      function showItem(nextIndex) {
        if (!items.length) {
          return;
        }
        index = (nextIndex + items.length) % items.length;
        items.forEach((item, itemIndex) => {
          item.classList.toggle("is-active", itemIndex === index);
        });
      }

      previous?.addEventListener("click", () => showItem(index - 1));
      next?.addEventListener("click", () => showItem(index + 1));
    });
  }

  function setupGalleryCarousels() {
    document.querySelectorAll("[data-gallery-carousel]").forEach((carousel) => {
      const track = carousel.querySelector(".gallery-track");
      const previous = carousel.querySelector("[data-gallery-prev]");
      const next = carousel.querySelector("[data-gallery-next]");

      function scrollGallery(direction) {
        if (!track) {
          return;
        }

        track.scrollBy({
          left: direction * track.clientWidth * 0.8,
          behavior: "smooth"
        });
      }

      previous?.addEventListener("click", () => scrollGallery(-1));
      next?.addEventListener("click", () => scrollGallery(1));
    });
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab(button.dataset.tabTarget);
    });
  });

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    if (mobileMenu) {
      mobileMenu.hidden = isOpen;
    }
  });

  futureLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  messageField?.addEventListener("input", () => {
    if (messageCount) {
      messageCount.textContent = String(messageField.value.length);
    }
  });

  contactForm?.addEventListener("submit", (event) => {
    if (!validateContactForm(contactForm)) {
      event.preventDefault();
    }
  });

  setupCarousels();
  setupGalleryCarousels();

  const hashTab = window.location.hash.replace("#", "");
  const queryTab = new URLSearchParams(window.location.search).get("tab");
  const initialTab = hashTab || queryTab;
  if (panels.some((panel) => panel.id === initialTab)) {
    setActiveTab(initialTab, { updateHash: false });
  }

  window.UlaSite = {
    setActiveTab,
    validateContactForm
  };
})();
