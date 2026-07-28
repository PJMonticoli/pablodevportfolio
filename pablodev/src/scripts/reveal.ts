// Progressive-enhancement scroll reveal: elements render fully visible by
// default (no-JS / disabled-JS users and prefers-reduced-motion never see a
// hidden state), JS only arms the hidden state right before observing it.
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) return;

  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    // No negative bottom margin: shrinking the root can make the very last
    // element on the page (e.g. the footer) mathematically unreachable when
    // there's no extra scroll room below it to satisfy the margin.
    { threshold: 0.1 },
  );

  targets.forEach((el, index) => {
    el.classList.add("reveal-hidden");
    el.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
    observer.observe(el);
  });
});
