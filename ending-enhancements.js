(() => {
  const previousStableScript = "https://cdn.jsdelivr.net/gh/Silituz/Polina@c5ba4e5cfa5d3fefc39d96cc1a7023a722c60dc9/ending-enhancements.js";

  const NativeMutationObserver = window.MutationObserver;
  if (NativeMutationObserver && !window.__polinaCalmObserverPatch) {
    window.__polinaCalmObserverPatch = true;
    window.MutationObserver = class PolinaCalmMutationObserver extends NativeMutationObserver {
      observe(target, options = {}) {
        const noisyBodyObserver = target === document.body && options.subtree && (options.childList || options.characterData);
        const noisyScreenObserver = target?.id === "screens" && options.subtree && options.attributes;
        if (noisyBodyObserver || noisyScreenObserver) return undefined;
        return super.observe(target, options);
      }
    };
  }

  const loadPrevious = () => {
    if (document.querySelector(`script[src="${previousStableScript}"]`)) return;
    const script = document.createElement("script");
    script.src = previousStableScript;
    script.defer = true;
    document.head.appendChild(script);
  };

  const ensureCalmStyle = () => {
    if (document.querySelector("#polina-final-calm-style")) return;
    const style = document.createElement("style");
    style.id = "polina-final-calm-style";
    style.textContent = `
      .final-screen .reason-token,
      .final-screen .reason-token *,
      .final-screen .reason-text,
      .final-screen .ending-banner,
      .final-screen .ending-banner *,
      .ending-modal,
      .ending-modal *,
      .secret-modal,
      .secret-modal *,
      .photo-modal,
      .gallery-modal {
        animation: none !important;
        transition: none !important;
      }
      .final-screen .reason-token {
        opacity: 1 !important;
        transform: none !important;
        will-change: auto !important;
        user-select: none !important;
        backface-visibility: hidden !important;
      }
      .final-screen .reason-token span {
        display: inline-flex !important;
        min-height: 1em !important;
        align-items: center !important;
        justify-content: center !important;
        transform: none !important;
      }
      .final-screen .reason-text,
      .ending-modal .ending-banner small,
      .secret-modal .secret-card p {
        user-select: text !important;
      }
    `;
    document.head.appendChild(style);
  };

  const calmFinalElements = () => {
    ensureCalmStyle();
    document.querySelectorAll(".final-screen .reason-token, .final-screen .reason-token *, .final-screen .ending-banner, .final-screen .ending-banner *, .ending-modal, .secret-modal").forEach(element => {
      element.style.animation = "none";
      element.style.transition = "none";
      element.style.willChange = "auto";
    });
    document.querySelectorAll(".final-screen .reason-token").forEach(button => {
      button.style.transform = "none";
      button.style.opacity = "1";
    });
  };

  ["pointerover", "pointerenter", "mouseover", "mouseenter", "mousemove", "touchmove"].forEach(type => {
    window.addEventListener(type, event => {
      if (event.target.closest?.("[data-no]")) event.stopImmediatePropagation();
    }, true);
  });

  loadPrevious();
  ensureCalmStyle();
  [0, 120, 420, 900, 1600, 2600].forEach(delay => window.setTimeout(calmFinalElements, delay));
  window.addEventListener("load", () => [0, 220, 700].forEach(delay => window.setTimeout(calmFinalElements, delay)), { once: true });
  window.addEventListener("click", () => window.setTimeout(calmFinalElements, 80), true);
})();