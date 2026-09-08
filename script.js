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
   HEADER BACKGROUND + SCROLL PROGRESS BAR
   As the visitor scrolls: (1) the header gains a solid background/shadow
   once they've moved past the very top, and (2) the thin bar at the top of
   the page fills left-to-right based on how far through the page they are.
   ========================================================================= */
const header = document.getElementById("site-header");
const scrollProgress = document.getElementById("scroll-progress");

function updateOnScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateOnScroll, { passive: true });
updateOnScroll();

/* =========================================================================
   SCROLL-REVEAL ANIMATIONS
   Watches every element with the ".reveal" class and adds ".is-visible"
   the moment it enters the viewport, which triggers the fade/slide-up
   transition defined in styles.css. Each element only reveals once.
   ========================================================================= */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

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
