/**
 * GLOW IN Home Cleaning Services
 * Main Interactive Application Script
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize WhatsApp Links & Contact Details from GLOW_CONFIG
  initWhatsAppLinks();
  initContactConfig();

  // 2. Navigation & Header Behavior
  initHeaderScroll();
  initMobileNavigation();
  initSmoothScrollSpy();

  // 3. Interactive Gallery & Lightbox
  initGalleryFilter();
  initLightbox();

  // 4. Accordion FAQ
  initFaqAccordion();

  // 5. Contact / Booking Helper Forms
  initBookingHelper();
  initAreaChecker();
});

/**
 * Automatically bind WhatsApp links across the site
 */
function initWhatsAppLinks() {
  if (typeof GLOW_CONFIG === "undefined") return;

  // General Booking buttons (Hero, Header, Floating CTA)
  const generalButtons = document.querySelectorAll('[data-whatsapp="general"]');
  generalButtons.forEach(btn => {
    btn.setAttribute("href", GLOW_CONFIG.getWhatsAppUrl());
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

  // Service-specific booking buttons
  const serviceButtons = document.querySelectorAll("[data-whatsapp-service]");
  serviceButtons.forEach(btn => {
    const serviceName = btn.getAttribute("data-whatsapp-service");
    btn.setAttribute("href", GLOW_CONFIG.getServiceWhatsAppUrl(serviceName));
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

  // Area check buttons
  const areaButtons = document.querySelectorAll("[data-whatsapp-area]");
  areaButtons.forEach(btn => {
    const areaName = btn.getAttribute("data-whatsapp-area");
    btn.setAttribute("href", GLOW_CONFIG.getAreaCheckUrl(areaName));
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

  // Floating WhatsApp button
  const floatingBtn = document.getElementById("floatingWhatsApp");
  if (floatingBtn) {
    floatingBtn.setAttribute("href", GLOW_CONFIG.getWhatsAppUrl());
    floatingBtn.setAttribute("target", "_blank");
    floatingBtn.setAttribute("rel", "noopener noreferrer");
  }
}

/**
 * Populate editable placeholders from GLOW_CONFIG
 */
function initContactConfig() {
  if (typeof GLOW_CONFIG === "undefined") return;

  // Phone links and text
  document.querySelectorAll("[data-config='phoneDisplay']").forEach(el => {
    el.textContent = GLOW_CONFIG.phoneDisplay;
  });
  document.querySelectorAll("[data-config='phoneLink']").forEach(el => {
    el.setAttribute("href", `tel:${GLOW_CONFIG.phoneRaw}`);
  });

  // Email links and text
  document.querySelectorAll("[data-config='emailDisplay']").forEach(el => {
    el.textContent = GLOW_CONFIG.emailDisplay;
  });
  document.querySelectorAll("[data-config='emailLink']").forEach(el => {
    el.setAttribute("href", `mailto:${GLOW_CONFIG.email}`);
  });

  // Address
  document.querySelectorAll("[data-config='addressFull']").forEach(el => {
    el.textContent = GLOW_CONFIG.address.full;
  });

  // Working Hours
  document.querySelectorAll("[data-config='workingHours']").forEach(el => {
    el.textContent = GLOW_CONFIG.workingHours;
  });

  // Instagram Link
  document.querySelectorAll("[data-config='instagramLink']").forEach(el => {
    el.setAttribute("href", GLOW_CONFIG.socialLinks.instagram);
  });

  // Google Business / Maps Link
  document.querySelectorAll("[data-config='googleBusinessLink']").forEach(el => {
    el.setAttribute("href", GLOW_CONFIG.socialLinks.googleBusiness);
  });
}

/**
 * Header shadow and size change on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const navLinks = document.querySelectorAll(".mobile-nav-link, .mobile-nav-cta a");

  if (!toggleBtn || !mobileNav) return;

  const toggleMenu = () => {
    const isOpen = toggleBtn.classList.toggle("open");
    mobileNav.classList.toggle("open");
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    toggleBtn.classList.remove("open");
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("open")) {
      closeMenu();
    }
  });
}

/**
 * Smooth Active Navigation Link Highlight
 */
function initSmoothScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

/**
 * Gallery Category Filtering
 */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (category === "all" || itemCategory === category) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 20);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.95)";
          setTimeout(() => {
            item.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

/**
 * Interactive Lightbox for Gallery Photos
 */
function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!modal || !modalImg || !closeBtn) return;

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const title = item.querySelector(".gallery-title");
      if (img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || "GLOW IN Home Cleaning";
        if (modalCaption && title) {
          modalCaption.textContent = title.textContent;
        }
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Optional: close other open items for clean single-expand accordion
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
        }
      });

      if (isActive) {
        item.classList.remove("active");
        questionBtn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Interactive WhatsApp Booking Helper Form with "Select Your Service"
 * Converts user service selections into instant WhatsApp chat messages!
 */
function initBookingHelper() {
  const bookingForm = document.getElementById("whatsappBookingForm");
  const servicePills = document.querySelectorAll(".service-select-pill");
  const serviceSelect = document.getElementById("bookingService");
  const submitBtn = document.getElementById("bookingSubmitBtn");

  // Keep track of current selected service (default to Home Deep Cleaning)
  let currentService = "Home Deep Cleaning";

  const updateSelectedService = (serviceName) => {
    currentService = serviceName;

    // Update pills active state
    servicePills.forEach(pill => {
      const pVal = pill.getAttribute("data-service-val");
      if (pVal === serviceName) {
        pill.classList.add("active");
        pill.setAttribute("aria-checked", "true");
      } else {
        pill.classList.remove("active");
        pill.setAttribute("aria-checked", "false");
      }
    });

    // Update select dropdown if present
    if (serviceSelect && serviceSelect.value !== serviceName) {
      serviceSelect.value = serviceName;
    }

    // Update button text with selected service
    if (submitBtn) {
      const btnTextSpan = submitBtn.querySelector(".btn-text");
      if (btnTextSpan) {
        btnTextSpan.textContent = `Book ${serviceName} on WhatsApp`;
      }
    }
  };

  // Click listener for interactive service selection pills
  servicePills.forEach(pill => {
    pill.addEventListener("click", () => {
      const val = pill.getAttribute("data-service-val");
      if (val) {
        updateSelectedService(val);
      }
    });
  });

  // Dropdown change listener
  if (serviceSelect) {
    serviceSelect.addEventListener("change", (e) => {
      updateSelectedService(e.target.value);
    });
  }

  // Form submit handler
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("bookingName")?.value.trim() || "";
      const location = document.getElementById("bookingLocation")?.value.trim() || "";
      const notes = document.getElementById("bookingNotes")?.value.trim() || "";

      // Format standard message according to user specification
      let message = `Hello GLOW IN Team! I am interested in booking ${currentService}. Please share the pricing and booking details.`;

      // Append optional customer context if provided
      const extras = [];
      if (name) extras.push(`Name: ${name}`);
      if (location) extras.push(`Location / Area: ${location}`);
      if (notes) extras.push(`Notes: ${notes}`);

      if (extras.length > 0) {
        message += `\n\nAdditional Details:\n• ` + extras.join("\n• ");
      }

      const url = `https://wa.me/${GLOW_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
}

/**
 * Area Availability WhatsApp Checker
 */
function initAreaChecker() {
  const areaForm = document.getElementById("areaCheckForm");
  const areaInput = document.getElementById("areaInput");
  if (!areaForm || !areaInput) return;

  areaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const area = areaInput.value.trim() || "my residential area";
    const url = GLOW_CONFIG.getAreaCheckUrl(area);
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
