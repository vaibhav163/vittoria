import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Replaces the original site's global inline <script>:
 * - scrolls to the top on page change, or to the #anchor when the URL has one
 *   (with an offset for the fixed 72px header)
 * - .reveal scroll-in animation (IntersectionObserver)
 * - animated counters for elements with data-count / data-suffix
 * Runs again on every route change, like a fresh page load in the old site.
 */
export default function usePageEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || "";
          const dur = 1200;
          const start = performance.now();
          function tick(now) {
            const p = Math.min(1, (now - start) / dur);
            el.textContent = Math.floor(p * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          countIO.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    // Pages are code-split (React.lazy), so content can mount after this
    // effect first runs. A MutationObserver keeps watching for new
    // .reveal / [data-count] elements and hands them to the observers.
    function scan(root) {
      root.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
      root.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));
    }
    scan(document);
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) scan(node);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      countIO.disconnect();
      mo.disconnect();
    };
  }, [pathname, hash]);
}
