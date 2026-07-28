// Highlights the nav link matching whichever section currently sits in the
// vertical center band of the viewport (scrollspy).
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll<HTMLElement>("[data-section]");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(
    '#main-nav a[href^="/#"]',
  );
  if (!sections.length || !navLinks.length) return;

  const setActive = (id: string | null) => {
    navLinks.forEach((link) => {
      const isActive = id !== null && link.getAttribute("href") === `/#${id}`;
      link.classList.toggle("text-yellow-400", isActive);
      link.classList.toggle("text-white/70", !isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(visible.target.getAttribute("data-section"));
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
});
