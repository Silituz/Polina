(() => {
  const previousStableScript = "https://cdn.jsdelivr.net/gh/Silituz/Polina@c5ba4e5cfa5d3fefc39d96cc1a7023a722c60dc9/ending-enhancements.js";
  const finalCopy = {
    en: {
      wishBase: "Tap the five little words and find the sentence I kept just for you.",
      wishes: [
        "Your smile has a way of making even a quiet moment feel warmer.",
        "Your light is gentle, rare, and impossible not to notice.",
        "My heart hopes this birthday gives you memories that stay soft and bright.",
        "My wish is that you feel chosen, protected, and truly appreciated.",
        "This little sentence was hidden here because you mean so much to me."
      ],
      endings: {
        good: ["Pure snow wolf", "The gentlest heart in the snow", "Polina, every kind answer made this path feel soft, bright, and full of care. This ending is my warmest birthday wish for you: may you always feel protected, chosen, and deeply appreciated."],
        normal: ["Wolf", "A sweet little wild path", "Even with a little mischief, this route still belongs to you. I hope you know how much warmth you bring into the world, and how happy I am that this page gets to celebrate you."],
        evil: ["Fenrir has awakened", "The wild ending still has a heart", "Fenrir may have woken up, but even this chaotic path carries the same truth: you matter a lot, and this birthday wish is still full of real care for you."]
      },
      secretTitle: "A little sentence just for you",
      secretCopy: "Your smile lights my heart. That is the quiet wish hidden inside this page: may you feel cherished today, gently held by good moments, and reminded that you mean more to me than a small birthday page can ever fully say."
    },
    ru: {
      wishBase: "\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043f\u044f\u0442\u044c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0445 \u0441\u043b\u043e\u0432 \u0438 \u043d\u0430\u0439\u0434\u0438 \u0444\u0440\u0430\u0437\u0443, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u044f \u0441\u043f\u0440\u044f\u0442\u0430\u043b \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0435\u0431\u044f.",
      wishes: [
        "\u0422\u0432\u043e\u044f \u0443\u043b\u044b\u0431\u043a\u0430 \u0443\u043c\u0435\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0434\u0430\u0436\u0435 \u0442\u0438\u0445\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0442\u0435\u043f\u043b\u0435\u0435.",
        "\u0422\u0432\u043e\u0439 \u0441\u0432\u0435\u0442 \u043e\u0447\u0435\u043d\u044c \u043d\u0435\u0436\u043d\u044b\u0439, \u0440\u0435\u0434\u043a\u0438\u0439 \u0438 \u0435\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u043d\u0435 \u0437\u0430\u043c\u0435\u0442\u0438\u0442\u044c.",
        "\u041c\u043e\u0435 \u0441\u0435\u0440\u0434\u0446\u0435 \u0436\u0435\u043b\u0430\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043e\u0441\u0442\u0430\u0432\u0438\u043b \u0442\u0435\u043f\u043b\u044b\u0435 \u0438 \u0441\u0432\u0435\u0442\u043b\u044b\u0435 \u0432\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f.",
        "\u042f \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0447\u0443, \u0447\u0442\u043e\u0431\u044b \u0442\u044b \u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430 \u0441\u0435\u0431\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439, \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u043e\u0439 \u0438 \u043f\u043e-\u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \u0446\u0435\u043d\u043d\u043e\u0439.",
        "\u042d\u0442\u0430 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0444\u0440\u0430\u0437\u0430 \u0441\u043f\u0440\u044f\u0442\u0430\u043d\u0430 \u0437\u0434\u0435\u0441\u044c, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0442\u044b \u0434\u043b\u044f \u043c\u0435\u043d\u044f \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0438\u0448\u044c."
      ],
      endings: {
        good: ["\u0427\u0438\u0441\u0442\u0430\u044f \u0441\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u043e\u043b\u0447\u0438\u0446\u0430", "\u0421\u0430\u043c\u043e\u0435 \u043d\u0435\u0436\u043d\u043e\u0435 \u0441\u0435\u0440\u0434\u0446\u0435 \u0432 \u0441\u043d\u0435\u0433\u0443", "\u041f\u043e\u043b\u0438\u043d\u0430, \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u043e\u0431\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0441\u0434\u0435\u043b\u0430\u043b \u044d\u0442\u043e\u0442 \u043f\u0443\u0442\u044c \u0435\u0449\u0435 \u043c\u044f\u0433\u0447\u0435 \u0438 \u0441\u0432\u0435\u0442\u043b\u0435\u0435. \u042d\u0442\u043e \u043c\u043e\u0435 \u0441\u0430\u043c\u043e\u0435 \u0442\u0435\u043f\u043b\u043e\u0435 \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0435: \u043f\u0443\u0441\u0442\u044c \u0442\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0448\u044c, \u0447\u0442\u043e \u0442\u0435\u0431\u044f \u0431\u0435\u0440\u0435\u0433\u0443\u0442, \u0432\u044b\u0431\u0438\u0440\u0430\u044e\u0442 \u0438 \u0446\u0435\u043d\u044f\u0442."],
        normal: ["\u0412\u043e\u043b\u0447\u0438\u0446\u0430", "\u041c\u0438\u043b\u044b\u0439 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0434\u0438\u043a\u0438\u0439 \u043f\u0443\u0442\u044c", "\u0414\u0430\u0436\u0435 \u0441 \u043a\u0430\u043f\u0435\u043b\u044c\u043a\u043e\u0439 \u0445\u0438\u0442\u0440\u043e\u0441\u0442\u0438 \u044d\u0442\u043e\u0442 \u043f\u0443\u0442\u044c \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0442\u0432\u043e\u0439. \u042f \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0447\u0443, \u0447\u0442\u043e\u0431\u044b \u0442\u044b \u0437\u043d\u0430\u043b\u0430, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u043f\u043b\u0430 \u0442\u044b \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0448\u044c \u0438 \u043a\u0430\u043a \u043c\u043d\u0435 \u0440\u0430\u0434\u043e\u0441\u0442\u043d\u043e \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u043c\u0435\u043d\u043d\u043e \u0442\u0435\u0431\u044f."],
        evil: ["\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e, \u0424\u0435\u043d\u0440\u0438\u0440 \u043f\u0440\u043e\u0441\u043d\u0443\u043b\u0441\u044f", "\u0414\u0438\u043a\u0438\u0439 \u0444\u0438\u043d\u0430\u043b \u0442\u043e\u0436\u0435 \u0441 \u0441\u0435\u0440\u0434\u0446\u0435\u043c", "\u0424\u0435\u043d\u0440\u0438\u0440 \u043f\u0440\u043e\u0441\u043d\u0443\u043b\u0441\u044f, \u043d\u043e \u0434\u0430\u0436\u0435 \u0432 \u044d\u0442\u043e\u043c \u0445\u0430\u043e\u0441\u0435 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0433\u043b\u0430\u0432\u043d\u043e\u0435: \u0442\u044b \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u0430, \u0438 \u044d\u0442\u043e \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0441 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u0442\u0435\u043f\u043b\u043e\u043c \u043a \u0442\u0435\u0431\u0435."]
      },
      secretTitle: "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0444\u0440\u0430\u0437\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0435\u0431\u044f",
      secretCopy: "\u0422\u0432\u043e\u044f \u0443\u043b\u044b\u0431\u043a\u0430 \u0441\u0432\u0435\u0442\u0438\u0442 \u043c\u043e\u0435\u043c\u0443 \u0441\u0435\u0440\u0434\u0446\u0443. \u0412\u043e\u0442 \u043a\u0430\u043a\u043e\u0435 \u0442\u0438\u0445\u043e\u0435 \u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u0431\u044b\u043b\u043e \u0441\u043f\u0440\u044f\u0442\u0430\u043d\u043e \u0432 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435: \u043f\u0443\u0441\u0442\u044c \u0442\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0448\u044c \u0442\u0435\u043f\u043b\u043e, \u043d\u0435\u0436\u043d\u043e\u0441\u0442\u044c \u0438 \u0442\u043e, \u0447\u0442\u043e \u0442\u044b \u0434\u043b\u044f \u043c\u0435\u043d\u044f \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0438\u0448\u044c."
    }
  };
  const badScenes = new Set();
  let currentWish = null;

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
      .secret-modal::backdrop {
        background:
          radial-gradient(circle at 20% 18%, rgba(190, 135, 255, 0.3), transparent 18rem),
          radial-gradient(circle at 80% 18%, rgba(255, 172, 226, 0.18), transparent 16rem),
          rgba(8, 5, 18, 0.72) !important;
        backdrop-filter: blur(9px) saturate(1.2) !important;
      }
      .secret-modal .secret-card {
        color: #fff8ff !important;
        background:
          linear-gradient(145deg, rgba(31, 18, 58, 0.98), rgba(78, 42, 116, 0.96) 48%, rgba(19, 24, 55, 0.98)) !important;
        border: 1px solid rgba(255, 229, 255, 0.35) !important;
        box-shadow:
          0 28px 70px rgba(0, 0, 0, 0.5),
          0 0 34px rgba(184, 126, 255, 0.28),
          inset 0 1px 0 rgba(255, 255, 255, 0.24) !important;
      }
      .secret-modal .secret-card::before {
        background: linear-gradient(90deg, rgba(255, 221, 255, 0.1), rgba(204, 164, 255, 0.28), rgba(255, 242, 190, 0.16)) !important;
      }
      .secret-modal .secret-badge {
        color: #9ed8ff !important;
        animation: polinaRealHeartBeat 1.15s cubic-bezier(0.2, 0, 0.25, 1) infinite !important;
        transform-origin: center !important;
        text-shadow: 0 0 18px rgba(158, 216, 255, 0.82), 0 0 34px rgba(190, 135, 255, 0.5) !important;
      }
      @keyframes polinaRealHeartBeat {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px rgba(158, 216, 255, 0.42)); }
        12% { transform: scale(1.18); filter: drop-shadow(0 0 18px rgba(158, 216, 255, 0.86)); }
        23% { transform: scale(0.96); }
        36% { transform: scale(1.12); filter: drop-shadow(0 0 22px rgba(190, 135, 255, 0.72)); }
        54% { transform: scale(1); }
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
      ? ["\u0422\u0412\u041e\u042f", "\u0423\u041b\u042B\u0411\u041A\u0410", "\u0421\u0412\u0415\u0422\u0418\u0422", "\u041C\u041E\u0415\u041C\u0423", "\u0421\u0415\u0420\u0414\u0426\u0423"]
      : ["YOUR", "SMILE", "LIGHTS", "MY", "HEART"];
    document.querySelectorAll(".final-screen .reason-token").forEach((button, index) => {
      const span = button.querySelector("span") || button;
      const word = words[index] || words[0];
      if (span.textContent !== word) span.textContent = word;
    });
  };

  const lockFinalText = () => {
    const copy = finalCopy[document.documentElement.lang === "ru" ? "ru" : "en"];
    const reason = document.querySelector("#reasonText");
    const expectedReason = currentWish === null ? copy.wishBase : copy.wishes[currentWish] || copy.wishBase;
    if (reason && reason.textContent !== expectedReason) {
      reason.textContent = expectedReason;
    }
    const secretTitle = document.querySelector("#secretTitle");
    const secretCopy = document.querySelector("#secretCopy");
    if (secretTitle && secretTitle.textContent !== copy.secretTitle) secretTitle.textContent = copy.secretTitle;
    if (secretCopy && secretCopy.textContent !== copy.secretCopy) secretCopy.textContent = copy.secretCopy;
  };

  const endingKey = () => badScenes.size === 0 ? "good" : badScenes.size >= 9 ? "evil" : "normal";
  const lockEndings = () => {
    const copy = finalCopy[document.documentElement.lang === "ru" ? "ru" : "en"];
    const [label, title, body] = copy.endings[endingKey()];
    document.querySelectorAll(".final-screen .ending-banner, #endingModal .ending-banner").forEach(banner => {
      banner.className = `ending-banner ending-${endingKey()}`;
      const labelEl = banner.querySelector(".ending-label");
      const titleEl = banner.querySelector("strong");
      const bodyEl = banner.querySelector("small");
      if (labelEl && labelEl.textContent !== label) labelEl.textContent = label;
      if (titleEl && titleEl.textContent !== title) titleEl.textContent = title;
      if (bodyEl && bodyEl.textContent !== body) bodyEl.textContent = body;
    });
  };

  const resetVisibleWishes = () => {
    window.setTimeout(() => {
      document.querySelectorAll(".final-screen .reason-token.is-found").forEach(button => button.classList.remove("is-found"));
      const reason = document.querySelector("#reasonText");
      if (reason) delete reason.dataset.customWish;
      currentWish = null;
      lockWishWords();
      lockFinalText();
    }, 80);
  };

  const calmAll = () => {
    calmFinalElements();
    lockWishWords();
    lockFinalText();
    lockEndings();
  };

  const scheduleCalmAll = () => {
    if (window.__polinaFinalCalmFrame) return;
    window.__polinaFinalCalmFrame = window.requestAnimationFrame(() => {
      window.__polinaFinalCalmFrame = 0;
      calmAll();
    });
  };

  const watchFinalState = () => {
    if (!NativeMutationObserver || window.__polinaFinalStateLock) return;
    const targets = [
      document.querySelector("#screens"),
      document.querySelector("#endingModal"),
      document.querySelector("#secretModal"),
      document.documentElement
    ].filter(Boolean);
    if (!targets.length) return;
    window.__polinaFinalStateLock = true;
    const observer = new NativeMutationObserver(scheduleCalmAll);
    targets.forEach(target => {
      observer.observe(target, {
        attributes: target === document.documentElement,
        attributeFilter: target === document.documentElement ? ["lang"] : undefined,
        childList: true,
        characterData: true,
        subtree: target !== document.documentElement
      });
    });
  };

  ["pointerover", "pointerenter", "mouseover", "mouseenter", "mousemove", "touchmove"].forEach(type => {
    window.addEventListener(type, event => {
      if (event.target.closest?.("[data-no]")) event.stopImmediatePropagation();
    }, true);
  });

  window.addEventListener("click", event => {
    const noButton = event.target.closest?.("[data-no]");
    if (noButton) badScenes.add(Number(document.querySelector(".screen.active")?.dataset.screen || "0"));
    const token = event.target.closest?.(".final-screen .reason-token");
    if (token) currentWish = Number(token.dataset.reason || "0");
    window.setTimeout(calmAll, 0);
    window.setTimeout(calmAll, 120);
  }, true);

  document.addEventListener("close", event => {
    if (event.target?.id === "secretModal") resetVisibleWishes();
  }, true);

  window.addEventListener("click", event => {
    if (!event.target.closest?.(".lang-option")) return;
    currentWish = null;
    [0, 80, 220, 520].forEach(delay => window.setTimeout(calmAll, delay));
  }, true);

  loadPrevious();
  ensureCalmStyle();
  [0, 120, 420, 900, 1600, 2600].forEach(delay => window.setTimeout(() => {
    calmAll();
    watchFinalState();
  }, delay));
  window.addEventListener("load", () => [0, 220, 700].forEach(delay => window.setTimeout(() => {
    calmAll();
    watchFinalState();
  }, delay)), { once: true });
  window.addEventListener("click", () => window.setTimeout(calmAll, 80), true);
})();