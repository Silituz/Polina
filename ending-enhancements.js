(() => {
  const previousStableScript = "https://cdn.jsdelivr.net/gh/Silituz/Polina@c5ba4e5cfa5d3fefc39d96cc1a7023a722c60dc9/ending-enhancements.js";

  const NativeMutationObserver = window.MutationObserver;
  if (NativeMutationObserver && !window.__polinaCalmObserverPatch) {
    window.__polinaCalmObserverPatch = true;
    window.MutationObserver = class PolinaCalmMutationObserver extends NativeMutationObserver {
      observe(target, options = {}) {
        const noisyBodyObserver = target === document.body && options.subtree && (options.childList || options.characterData);
        if (noisyBodyObserver) return undefined;
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

  const lockWishWords = () => {
    const words = document.documentElement.lang === "ru"
      ? ["\u0422\u0412\u041e\u042f", "\u0423\u041b\u042b\u0411\u041a\u0410", "\u0421\u0412\u0415\u0422\u0418\u0422", "\u041c\u041e\u0415\u041c\u0423", "\u0421\u0415\u0420\u0414\u0426\u0423"]
      : ["YOUR", "SMILE", "LIGHTS", "MY", "HEART"];
    document.querySelectorAll(".final-screen .reason-token").forEach((button, index) => {
      const span = button.querySelector("span") || button;
      const word = words[index] || words[0];
      if (span.textContent !== word) span.textContent = word;
    });
  };

  const calmAll = () => {
    calmFinalElements();
    lockWishWords();
  };

  const watchWishWords = () => {
    if (!NativeMutationObserver || window.__polinaWishWordLock) return;
    const final = document.querySelector(".final-screen");
    if (!final) return;
    window.__polinaWishWordLock = true;
    new NativeMutationObserver(lockWishWords).observe(final, { childList: true, characterData: true, subtree: true });
  };

  ["pointerover", "pointerenter", "mouseover", "mouseenter", "mousemove", "touchmove"].forEach(type => {
    window.addEventListener(type, event => {
      if (event.target.closest?.("[data-no]")) event.stopImmediatePropagation();
    }, true);
  });

  loadPrevious();
  ensureCalmStyle();
  [0, 120, 420, 900, 1600, 2600].forEach(delay => window.setTimeout(() => {
    calmAll();
    watchWishWords();
  }, delay));
  window.addEventListener("load", () => [0, 220, 700].forEach(delay => window.setTimeout(() => {
    calmAll();
    watchWishWords();
  }, delay)), { once: true });
  window.addEventListener("click", () => window.setTimeout(calmAll, 80), true);
})();