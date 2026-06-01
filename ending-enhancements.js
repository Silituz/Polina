(() => {
  const previousStableScript = "https://cdn.jsdelivr.net/gh/Silituz/Polina@e383c214b901f43ffdaf1c9d5520738d665f54f5/ending-enhancements.js";

  const noCopy = {
    en: [
      ["Not on the first birthday howl.", "The moon says try yes.", "Too sweet to refuse.", "Okay, next little step."],
      ["The moon mail is already sealed.", "This wish still finds you.", "No hiding from birthday magic.", "Forward it goes."],
      ["The wolf power stays awake.", "Brave hearts do not skip this.", "The pack is politely stubborn.", "Onward with sparkle."],
      ["This memory wants to shine.", "The glow refuses to leave.", "A tiny smile is required.", "Next memory, please."],
      ["The patrol guards the mood.", "Boring thoughts are blocked.", "A wolf vote says yes.", "Marching on softly."],
      ["The northern lights disagree.", "This magic picked you.", "The sky is being dramatic.", "Fine, we follow it."],
      ["Smile rescue is active.", "No escape from cute energy.", "The mission keeps going.", "Tiny victory, next."],
      ["The final howl needs courage.", "Almost there, no running.", "The snow path insists.", "One last step."],
      ["The surprise box stays closed.", "Not yet, birthday mystery.", "The ribbon refuses no.", "Opening the ending."]
    ],
    ru: [
      ["\u041d\u0435 \u0432 \u043f\u0435\u0440\u0432\u044b\u0439 \u0438\u043c\u0435\u043d\u0438\u043d\u043d\u044b\u0439 \u0432\u043e\u0439.", "\u041b\u0443\u043d\u0430 \u043f\u0440\u043e\u0441\u0438\u0442 \u0441\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0430.", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0438\u043b\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f.", "\u041b\u0430\u0434\u043d\u043e, \u0438\u0434\u0435\u043c \u0434\u0430\u043b\u044c\u0448\u0435."],
      ["\u041b\u0443\u043d\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u0443\u0436\u0435 \u0432 \u043f\u0443\u0442\u0438.", "\u042d\u0442\u043e \u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0434\u043e\u0439\u0434\u0435\u0442.", "\u041e\u0442 \u043c\u0430\u0433\u0438\u0438 \u0434\u043d\u044f \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043d\u0435 \u0441\u043f\u0440\u044f\u0442\u0430\u0442\u044c\u0441\u044f.", "\u041f\u0443\u0441\u0442\u044c \u0435\u0434\u0435\u0442 \u0434\u0430\u043b\u044c\u0448\u0435."],
      ["\u0412\u043e\u043b\u0447\u044c\u044f \u0441\u0438\u043b\u0430 \u043d\u0435 \u0441\u043f\u0438\u0442.", "\u0421\u043c\u0435\u043b\u044b\u0435 \u0441\u0435\u0440\u0434\u0446\u0430 \u0442\u0430\u043a \u043d\u0435 \u0441\u0431\u0435\u0433\u0430\u044e\u0442.", "\u0421\u0442\u0430\u044f \u043c\u0438\u043b\u043e \u0443\u043f\u0440\u044f\u043c\u0438\u0442\u0441\u044f.", "\u0412\u043f\u0435\u0440\u0435\u0434, \u0441 \u0438\u0441\u043a\u0440\u0430\u043c\u0438."],
      ["\u042d\u0442\u043e \u0432\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435 \u0445\u043e\u0447\u0435\u0442 \u0441\u0438\u044f\u0442\u044c.", "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0441\u0432\u0435\u0442 \u043d\u0435 \u0443\u0439\u0434\u0435\u0442.", "\u0422\u0443\u0442 \u043d\u0443\u0436\u043d\u0430 \u0445\u043e\u0442\u044c \u043e\u0434\u043d\u0430 \u0443\u043b\u044b\u0431\u043a\u0430.", "\u041a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0442\u0435\u043f\u043b\u0443."],
      ["\u041f\u0430\u0442\u0440\u0443\u043b\u044c \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435.", "\u0421\u043a\u0443\u0447\u043d\u044b\u0435 \u043c\u044b\u0441\u043b\u0438 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u044b.", "\u0421\u0442\u0430\u044f \u0433\u043e\u043b\u043e\u0441\u0443\u0435\u0442 \u0437\u0430 \u0434\u0430.", "\u041c\u044f\u0433\u043a\u043e \u0438\u0434\u0435\u043c \u0434\u0430\u043b\u044c\u0448\u0435."],
      ["\u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0441\u0438\u044f\u043d\u0438\u0435 \u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e.", "\u042d\u0442\u0430 \u043c\u0430\u0433\u0438\u044f \u0432\u044b\u0431\u0440\u0430\u043b\u0430 \u0442\u0435\u0431\u044f.", "\u041d\u0435\u0431\u043e \u0434\u0440\u0430\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u043d\u0430\u0441\u0442\u0430\u0438\u0432\u0430\u0435\u0442.", "\u041b\u0430\u0434\u043d\u043e, \u0438\u0434\u0435\u043c \u0437\u0430 \u043d\u0438\u043c."],
      ["\u0421\u043f\u0430\u0441\u0435\u043d\u0438\u0435 \u0443\u043b\u044b\u0431\u043a\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e.", "\u041e\u0442 \u043c\u0438\u043b\u043e\u0442\u044b \u043d\u0435 \u0443\u0431\u0435\u0436\u0430\u0442\u044c.", "\u041c\u0438\u0441\u0441\u0438\u044f \u0435\u0449\u0435 \u0436\u0438\u0432\u0430.", "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u043f\u043e\u0431\u0435\u0434\u0430."],
      ["\u0414\u043b\u044f \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u043e\u044f \u043d\u0443\u0436\u043d\u0430 \u0441\u043c\u0435\u043b\u043e\u0441\u0442\u044c.", "\u0423\u0436\u0435 \u043f\u043e\u0447\u0442\u0438 \u0434\u043e\u0448\u043b\u0438, \u043d\u0435 \u0441\u0431\u0435\u0433\u0430\u0439.", "\u0421\u043d\u0435\u0436\u043d\u0430\u044f \u0442\u0440\u043e\u043f\u0430 \u0443\u043f\u0440\u044f\u043c\u0430.", "\u0415\u0449\u0435 \u043e\u0434\u0438\u043d \u0448\u0430\u0433."],
      ["\u0421\u044e\u0440\u043f\u0440\u0438\u0437 \u043f\u043e\u043a\u0430 \u043d\u0435 \u043e\u0442\u043a\u0440\u044b\u0442.", "\u0415\u0449\u0435 \u0440\u0430\u043d\u043e, \u0438\u043c\u0435\u043d\u0438\u043d\u043d\u0430\u044f \u0442\u0430\u0439\u043d\u0430.", "\u041b\u0435\u043d\u0442\u0430 \u043d\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043e\u0442\u043a\u0430\u0437.", "\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0444\u0438\u043d\u0430\u043b."]
    ]
  };

  const lang = () => document.documentElement.lang === "ru" ? "ru" : "en";
  const activeScreen = () => Number(document.querySelector(".screen.active")?.dataset.screen || "0");

  const applyKpopStyle = () => {
    document.querySelector("#polina-kpop-style")?.remove();
    const style = document.createElement("style");
    style.id = "polina-kpop-style";
    style.textContent = `
      body::before {
        position: fixed !important;
        inset: 0 !important;
        z-index: 0 !important;
        content: "" !important;
        pointer-events: none !important;
        background:
          radial-gradient(circle at 16% 14%, rgba(177, 124, 255, 0.26), transparent 16rem),
          radial-gradient(circle at 86% 8%, rgba(255, 135, 216, 0.18), transparent 14rem),
          radial-gradient(circle at 58% 78%, rgba(132, 186, 255, 0.18), transparent 18rem),
          linear-gradient(135deg, rgba(109, 65, 190, 0.16), rgba(255, 255, 255, 0) 38%, rgba(255, 196, 232, 0.12)) !important;
        mix-blend-mode: screen !important;
      }
      body::after {
        position: fixed !important;
        inset: 0 !important;
        z-index: 0 !important;
        content: "" !important;
        pointer-events: none !important;
        opacity: 0.34 !important;
        background-image:
          radial-gradient(circle, rgba(255, 255, 255, 0.8) 0 1px, transparent 1.6px),
          radial-gradient(circle, rgba(199, 166, 255, 0.8) 0 1px, transparent 1.7px) !important;
        background-position: 0 0, 24px 18px !important;
        background-size: 72px 72px, 96px 96px !important;
      }
      .page-shell {
        position: relative !important;
        z-index: 1 !important;
        isolation: isolate !important;
      }
      .cover-main,
      .panel-card h2,
      .final-screen h2,
      .secret-card h2 {
        color: #fffaff !important;
        letter-spacing: 0 !important;
        background: linear-gradient(115deg, #ffffff 0 18%, #ffd6fb 30%, #bda2ff 48%, #9ed8ff 63%, #fff2be 82%, #ffffff 100%) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        text-shadow:
          0 1px 0 rgba(96, 48, 150, 0.86),
          0 0 10px rgba(255, 222, 255, 0.9),
          0 0 24px rgba(170, 118, 255, 0.62),
          0 0 38px rgba(111, 166, 255, 0.38) !important;
        filter: drop-shadow(0 0 8px rgba(255, 206, 247, 0.42)) !important;
      }
      .cover-main::after,
      .panel-card h2::after,
      .final-screen h2::after,
      .secret-card h2::after {
        display: none !important;
        content: none !important;
      }
    `;
    document.head.appendChild(style);
  };

  const rewriteNoText = button => {
    const scene = Math.max(1, Math.min(9, activeScreen()));
    const step = Number(button.dataset.noStep || "0");
    const lines = noCopy[lang()][scene - 1] || noCopy.en[scene - 1] || noCopy.en[0];
    const afterClick = window.queueMicrotask || (callback => window.setTimeout(callback, 0));
    afterClick(() => {
      if (document.body.contains(button)) {
        button.textContent = lines[Math.min(step, lines.length - 1)];
      }
    });
  };

  window.addEventListener("click", event => {
    const noButton = event.target.closest?.("[data-no]");
    if (noButton) rewriteNoText(noButton);
  }, true);

  const loadStableFixes = () => {
    const script = document.createElement("script");
    script.src = previousStableScript;
    script.onload = () => {
      applyKpopStyle();
      window.setTimeout(applyKpopStyle, 150);
      window.setTimeout(applyKpopStyle, 500);
    };
    script.onerror = applyKpopStyle;
    document.head.appendChild(script);
  };

  applyKpopStyle();
  loadStableFixes();
})();