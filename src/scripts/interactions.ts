/**
 * Runtime UI: sticky-nav scroll style, back-to-top visibility, fade-in observer.
 * All animation behaviour is gated on prefers-reduced-motion via CSS — this
 * script only toggles classes; the CSS decides whether to animate.
 */

const SCROLL_NAV_THRESHOLD = 30;
const SCROLL_BACK_TO_TOP_THRESHOLD = 600;

const init = () => {
  const nav = document.getElementById("topnav");
  const backToTop = document.getElementById("back-to-top");

  if (nav || backToTop) {
    const onScroll = () => {
      const y = window.scrollY;
      nav?.classList.toggle("scrolled", y > SCROLL_NAV_THRESHOLD);
      backToTop?.classList.toggle("show", y > SCROLL_BACK_TO_TOP_THRESHOLD);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fadeEls = document.querySelectorAll<HTMLElement>(".fade");

  if (reduceMotion) {
    fadeEls.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  fadeEls.forEach((el) => io.observe(el));
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
