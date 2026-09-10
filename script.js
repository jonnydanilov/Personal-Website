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
   RESUME VIEWER
   "View Resume" / "Resume" links open the PDF in an in-page overlay instead
   of downloading it or opening a new tab. Same open/close/focus pattern as
   the screenshot lightbox above. Falls back to a normal link (new tab) if
   the resume link is opened in a new tab or middle-clicked.
   ========================================================================= */
const resumeViewer = document.getElementById("resume-viewer");
const resumeFrame = document.getElementById("resume-frame");
const resumeClose = document.getElementById("resume-close");
let lastFocusedResumeTrigger = null;

function openResumeViewer(trigger) {
  lastFocusedResumeTrigger = trigger;
  resumeFrame.src = trigger.getAttribute("href");
  resumeViewer.hidden = false;
  document.body.style.overflow = "hidden";
  resumeClose.focus();
}

function closeResumeViewer() {
  resumeViewer.hidden = true;
  resumeFrame.src = "";
  document.body.style.overflow = "";
  if (lastFocusedResumeTrigger) lastFocusedResumeTrigger.focus();
}

document.querySelectorAll("[data-resume-open]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeMobileNav();
    openResumeViewer(link);
  });
});

resumeClose.addEventListener("click", closeResumeViewer);
document.querySelectorAll("[data-resume-close]").forEach((el) => {
  el.addEventListener("click", closeResumeViewer);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !resumeViewer.hidden) closeResumeViewer();
});

/* =========================================================================
   FOOTER YEAR
   Keeps the copyright year in the footer correct without editing it by hand.
   ========================================================================= */
document.getElementById("footer-year").textContent = new Date().getFullYear();
