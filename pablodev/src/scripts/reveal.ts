// Progressive-enhancement scroll reveal: elements render fully visible by
// default (no-JS / disabled-JS users and prefers-reduced-motion never see a
// hidden state), JS only arms the hidden state right before observing it.
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) return;

  // Anything already on screen at load stays put, so the hero is painted
  // right away instead of waiting for a fade.
  const viewportHeight = window.innerHeight;
  const targets = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  ).filter((el) => el.getBoundingClientRect().top >= viewportHeight);
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry, index) => {
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(index, 4) * 40}ms`;
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        });
    },
    // No negative bottom margin: shrinking the root can make the very last
    // element on the page (e.g. the footer) mathematically unreachable when
    // there's no extra scroll room below it to satisfy the margin. A positive
    // one starts the fade just before the element enters the screen, so a
    // fast scroll on a phone never lands on blank space.
    { threshold: 0, rootMargin: "0px 0px 12% 0px" },
  );

  targets.forEach((el) => {
    el.classList.add("reveal-hidden");
    observer.observe(el);
  });
});
