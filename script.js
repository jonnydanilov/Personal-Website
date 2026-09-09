/* =========================================================================
   MOBILE NAV TOGGLE
   Opens/closes the mobile menu when the hamburger button is tapped, and
   closes it again automatically whenever a nav link is clicked.
   ========================================================================= */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

function closeMobileNav() {
  navToggle.classList.remove("is-open");
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

/* =========================================================================
   SCROLL-SPY NAVIGATION
   Highlights the nav link for whichever main section is currently in view,
   so the underline gives quiet feedback on where you are in the page
   instead of a generic top-of-page progress bar.
   ========================================================================= */
const sections = document.querySelectorAll("main section[id]");
const navLinkBySection = new Map(
  Array.from(navLinks.querySelectorAll("a[data-section]")).map((link) => [
    link.dataset.section,
    link,
  ])
);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = navLinkBySection.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinkBySection.forEach((l) => l.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));

/* =========================================================================
   PROJECT SCREENSHOT LIGHTBOX
   Clicking a screenshot opens an enlarged, accessible overlay. Closes on
   Escape, on backdrop click, or via the close button, and returns focus to
   whichever thumbnail opened it.
   ========================================================================= */
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");
let lastFocusedTrigger = null;

function openLightbox(trigger) {
  lastFocusedTrigger = trigger;
  lightboxImage.src = trigger.dataset.lightboxSrc;
  lightboxImage.alt = trigger.dataset.lightboxAlt || "";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
  if (lastFocusedTrigger) lastFocusedTrigger.focus();
}

document.querySelectorAll(".case-image-btn").forEach((btn) => {
  btn.addEventListener("click", () => openLightbox(btn));
});

lightboxClose.addEventListener("click", closeLightbox);
document.querySelectorAll("[data-lightbox-close]").forEach((el) => {
  el.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

/* =========================================================================
   CONTACT FORM (FRONT-END ONLY)
   There is no backend here, so instead of sending data anywhere, submitting
   the form opens the visitor's email client with a pre-filled message
   addressed to Jonathan (via a "mailto:" link built from the form fields).
   ========================================================================= */
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formNote.textContent = "Please fill out every field before sending.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:jonny.danilov14@gmail.com?subject=${subject}&body=${body}`;

  formNote.textContent = "Opening your email client to send this message…";
  contactForm.reset();
});

/* =========================================================================
   FOOTER YEAR
   Keeps the copyright year in the footer correct without editing it by hand.
   ========================================================================= */
document.getElementById("footer-year").textContent = new Date().getFullYear();
