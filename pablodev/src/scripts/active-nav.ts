// Highlights the nav link matching whichever section currently sits in the
// vertical center band of the viewport (scrollspy).
document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-section]"),
  );
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(
    "#main-nav a[data-nav]",
  );
  if (!sections.length || !navLinks.length) return;

  const inBand = new Set<string>();

  const setActive = (id: string | null) => {
    navLinks.forEach((link) => {
      const isActive = id !== null && link.dataset.nav === id;
      link.classList.toggle("text-yellow-400", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-section");
        if (!id) return;
        if (entry.isIntersecting) inBand.add(id);
        else inBand.delete(id);
      });
      const current = sections.find((section) =>
        inBand.has(section.dataset.section ?? ""),
      );
      setActive(current?.dataset.section ?? null);
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
});
