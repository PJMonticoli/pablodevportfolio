// Cursor-following highlight on project cards. Desktop/mouse only - touch
// devices have no meaningful cursor position, so we skip attaching entirely.
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if (canHover) {
  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll<HTMLElement>(".spotlight-card")
      .forEach((card) => {
        card.addEventListener("mousemove", (event) => {
          const rect = card.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty("--spot-x", `${x}%`);
          card.style.setProperty("--spot-y", `${y}%`);
        });
      });
  });
}
