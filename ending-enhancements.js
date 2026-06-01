(() => {
  const style = document.createElement("style");
  style.textContent = `
    .intro-screen .primary-action {
      display: inline-flex !important;
      width: 100% !important;
      min-height: 52px !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 0 16px !important;
      color: #120810 !important;
      background: linear-gradient(135deg, #f5c66f, #9ed8e8 58%, #fff2be) !important;
      box-shadow: 5px 5px 0 #100918, 0 14px 28px rgba(0, 0, 0, 0.28) !important;
      -webkit-text-fill-color: #120810 !important;
    }
    .cover-main::after,
    .panel-card h2::after,
    .final-screen h2::after,
    .secret-card h2::after {
      display: none !important;
      content: none !important;
    }
    .cover-main,
    .panel-card h2,
    .final-screen h2,
    .secret-card h2 {
      color: #fff8f1 !important;
      background: linear-gradient(135deg, #fff8f1 0 34%, #9ed8e8 47%, #f5c66f 66%, #fff8f1 88%) !important;
      -webkit-background-clip: text !important;
      background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      text-shadow:
        0 2px 0 rgba(16, 9, 24, 0.94),
        0 0 12px rgba(255, 248, 241, 0.46),
        0 0 24px rgba(43, 97, 209, 0.34),
        0 0 34px rgba(212, 44, 58, 0.2) !important;
    }
    .answer.no:hover,
    .answer.no:focus-visible {
      color: #fff8f1 !important;
      background: linear-gradient(135deg, #7b1f2a, #172833) !important;
    }
  `;
  document.head.appendChild(style);

  const text = {
    en: {
      endings: {
        good: ["Pure snow wolf", "Soft snow, loyal heart", "You chose the warm path every time. The snow pack leaves you one bright birthday wish: stay loved, stay brave, stay beautifully you."],
        normal: ["Wolf", "A little mischief joined the route", "One playful no was enough for the wolves to notice, but the day still stays sweet, warm, and completely yours."],
        evil: ["Fenrir has awakened", "The wild ending opened its eyes", "Every path went through chaos, and Fenrir woke up laughing. Even so, the birthday wish is still full of heart."]
      },
      noTopics: ["First howl", "Moon mail", "Wolf power", "Memory sparkle", "Wolf patrol", "Northern lights", "Smile rescue", "Final howl", "Surprise box"],
      noLines: topic => [`${topic}: no is not accepted.`, `${topic}: tiny dramatic eyes are active.`, `${topic}: the birthday route insists.`, `${topic}: fine, moving on now.`],
      tokens: ["SMILE", "LIGHT", "HEART", "LUCK", "WISH"],
      wishBase: "Tiny wish note: I hope today gives you the kind of smile that stays even after the candles are out.",
      wishes: [
        "May your smile find you first today, before anything else asks for your energy.",
        "May this year be soft where you need peace and bright where you need courage.",
        "May good little moments keep finding you, even on completely normal days.",
        "May you always feel how much warmth you bring just by being yourself.",
        "May this birthday leave a tiny glow in your heart for a long time."
      ],
      secretTitle: "A hidden blue wish",
      secretCopy: "You found every little wish, so this one is only for you: may today wrap itself softly around your heart, may your smile come back again and again, and may you remember that this page was made with real care."
    },
    ru: {
      endings: {
        good: ["\u0427\u0438\u0441\u0442\u0430\u044f \u0441\u043d\u0435\u0436\u043d\u0430\u044f \u0432\u043e\u043b\u0447\u0438\u0446\u0430", "\u041c\u044f\u0433\u043a\u0438\u0439 \u0441\u043d\u0435\u0433 \u0438 \u0432\u0435\u0440\u043d\u043e\u0435 \u0441\u0435\u0440\u0434\u0446\u0435", "\u0422\u044b \u0432\u0435\u0441\u044c \u043f\u0443\u0442\u044c \u0432\u044b\u0431\u0438\u0440\u0430\u043b\u0430 \u0442\u0435\u043f\u043b\u043e. \u0421\u043d\u0435\u0436\u043d\u0430\u044f \u0441\u0442\u0430\u044f \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0442\u0435\u0431\u0435 \u043e\u0434\u043d\u043e \u0441\u0432\u0435\u0442\u043b\u043e\u0435 \u0436\u0435\u043b\u0430\u043d\u0438\u0435: \u0431\u0443\u0434\u044c \u043b\u044e\u0431\u0438\u043c\u043e\u0439, \u0441\u043c\u0435\u043b\u043e\u0439 \u0438 \u043e\u0447\u0435\u043d\u044c \u0441\u043e\u0431\u043e\u0439."],
        normal: ["\u0412\u043e\u043b\u0447\u0438\u0446\u0430", "\u041d\u0435\u043c\u043d\u043e\u0433\u043e \u0445\u0438\u0442\u0440\u043e\u0441\u0442\u0438 \u0432 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0435", "\u041e\u0434\u043d\u043e \u0438\u0433\u0440\u0438\u0432\u043e\u0435 \u00ab\u043d\u0435\u0442\u00bb \u0441\u0442\u0430\u044f \u0442\u043e\u0447\u043d\u043e \u0437\u0430\u043c\u0435\u0442\u0438\u043b\u0430, \u043d\u043e \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u043c\u0438\u043b\u044b\u0439, \u0442\u0435\u043f\u043b\u044b\u0439 \u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0442\u0432\u043e\u0439."],
        evil: ["\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e, \u0424\u0435\u043d\u0440\u0438\u0440 \u043f\u0440\u043e\u0441\u043d\u0443\u043b\u0441\u044f", "\u0414\u0438\u043a\u0438\u0439 \u0444\u0438\u043d\u0430\u043b \u043e\u0442\u043a\u0440\u044b\u043b \u0433\u043b\u0430\u0437\u0430", "\u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0446\u0435\u043d\u0430 \u043f\u0440\u043e\u0448\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u0445\u0430\u043e\u0441, \u0438 \u0424\u0435\u043d\u0440\u0438\u0440 \u043f\u0440\u043e\u0441\u043d\u0443\u043b\u0441\u044f \u0441 \u0443\u043b\u044b\u0431\u043a\u043e\u0439. \u041d\u043e \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u043e\u0442 \u0441\u0435\u0440\u0434\u0446\u0430."]
      },
      noTopics: ["\u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u043e\u0439", "\u041b\u0443\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430", "\u0412\u043e\u043b\u0447\u044c\u044f \u0441\u0438\u043b\u0430", "\u0418\u0441\u043a\u0440\u0430 \u043f\u0430\u043c\u044f\u0442\u0438", "\u0412\u043e\u043b\u0447\u0438\u0439 \u043f\u0430\u0442\u0440\u0443\u043b\u044c", "\u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0441\u0438\u044f\u043d\u0438\u0435", "\u0421\u043f\u0430\u0441\u0435\u043d\u0438\u0435 \u0443\u043b\u044b\u0431\u043a\u0438", "\u0424\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u043e\u0439", "\u041a\u043e\u0440\u043e\u0431\u043a\u0430 \u0441\u044e\u0440\u043f\u0440\u0438\u0437\u0430"],
      noLines: topic => [`${topic}: \u00ab\u043d\u0435\u0442\u00bb \u043d\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u043e.`, `${topic}: \u0434\u0440\u0430\u043c\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u0433\u043b\u0430\u0437\u0430 \u0443\u0436\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b.`, `${topic}: \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043c\u044f\u0433\u043a\u043e \u043d\u0430\u0441\u0442\u0430\u0438\u0432\u0430\u0435\u0442.`, `${topic}: \u043b\u0430\u0434\u043d\u043e, \u0438\u0434\u0435\u043c \u0434\u0430\u043b\u044c\u0448\u0435.`],
      tokens: ["\u0423\u041b\u042b\u0411\u041a\u0410", "\u0421\u0412\u0415\u0422", "\u0421\u0415\u0420\u0414\u0426\u0415", "\u0423\u0414\u0410\u0427\u0410", "\u0416\u0415\u041b\u0410\u041d\u0418\u0415"],
      wishBase: "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u043a\u0430: \u043f\u0443\u0441\u0442\u044c \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0443 \u0442\u0435\u0431\u044f \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a\u0430\u044f \u0443\u043b\u044b\u0431\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u0434\u0430\u0436\u0435 \u043f\u043e\u0441\u043b\u0435 \u0441\u0432\u0435\u0447\u0435\u0439.",
      wishes: [
        "\u041f\u0443\u0441\u0442\u044c \u0443\u043b\u044b\u0431\u043a\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0430\u0439\u0434\u0435\u0442 \u0442\u0435\u0431\u044f \u043f\u0435\u0440\u0432\u043e\u0439, \u0440\u0430\u043d\u044c\u0448\u0435 \u0432\u0441\u0435\u0445 \u0434\u0435\u043b \u0438 \u043b\u0438\u0448\u043d\u0438\u0445 \u043c\u044b\u0441\u043b\u0435\u0439.",
        "\u041f\u0443\u0441\u0442\u044c \u044d\u0442\u043e\u0442 \u0433\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u043c\u044f\u0433\u043a\u0438\u043c \u0442\u0430\u043c, \u0433\u0434\u0435 \u0442\u0435\u0431\u0435 \u043d\u0443\u0436\u0435\u043d \u043f\u043e\u043a\u043e\u0439, \u0438 \u044f\u0440\u043a\u0438\u043c \u0442\u0430\u043c, \u0433\u0434\u0435 \u043d\u0443\u0436\u043d\u0430 \u0441\u043c\u0435\u043b\u043e\u0441\u0442\u044c.",
        "\u041f\u0443\u0441\u0442\u044c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435 \u0445\u043e\u0440\u043e\u0448\u0438\u0435 \u043c\u043e\u043c\u0435\u043d\u0442\u044b \u0441\u0430\u043c\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442 \u0442\u0435\u0431\u044f \u0434\u0430\u0436\u0435 \u0432 \u0441\u0430\u043c\u044b\u0435 \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u0434\u043d\u0438.",
        "\u041f\u0443\u0441\u0442\u044c \u0442\u044b \u0447\u0430\u0449\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0448\u044c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u043f\u043b\u0430 \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u044f\u0434\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u0442\u044b \u0435\u0441\u0442\u044c.",
        "\u041f\u0443\u0441\u0442\u044c \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0432 \u0441\u0435\u0440\u0434\u0446\u0435 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0441\u0432\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0435\u0449\u0435 \u0434\u043e\u043b\u0433\u043e \u043d\u0435 \u043f\u043e\u0433\u0430\u0441\u043d\u0435\u0442."
      ],
      secretTitle: "\u0421\u043a\u0440\u044b\u0442\u043e\u0435 \u0441\u0438\u043d\u0435\u0435 \u0436\u0435\u043b\u0430\u043d\u0438\u0435",
      secretCopy: "\u0422\u044b \u043d\u0430\u0448\u043b\u0430 \u0432\u0441\u0435 \u043f\u044f\u0442\u044c \u0436\u0435\u043b\u0430\u043d\u0438\u0439, \u0437\u043d\u0430\u0447\u0438\u0442 \u044d\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0435\u0431\u044f: \u043f\u0443\u0441\u0442\u044c \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043c\u044f\u0433\u043a\u043e \u043e\u0431\u043d\u0438\u043c\u0435\u0442 \u0442\u0432\u043e\u0435 \u0441\u0435\u0440\u0434\u0446\u0435, \u043f\u0443\u0441\u0442\u044c \u0443\u043b\u044b\u0431\u043a\u0430 \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f \u043a \u0442\u0435\u0431\u0435 \u0435\u0449\u0435 \u043d\u0435 \u0440\u0430\u0437, \u0438 \u043f\u0443\u0441\u0442\u044c \u0442\u044b \u0437\u043d\u0430\u0435\u0448\u044c: \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0434\u0435\u043b\u0430\u043b\u0438 \u0441 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u0442\u0435\u043f\u043b\u043e\u0442\u043e\u0439."
    }
  };

  const photoMap = { "01": "03", "02": "02", "03": "10", "04": "01", "05": "20", "06": "17", "07": "22", "08": "09", "09": "16", "10": "14", "11": "28" };
  const cache = new Map();
  const badScenes = new Set();
  const foundWishes = new Set();
  const heartClasses = ["heart-white", "heart-blue", "heart-red"];
  let heartIndex = 0;
  let endingShownOnFinal = false;
  let endingTimer = 0;
  let secretOpen = false;

  const lang = () => document.documentElement.lang === "ru" ? "ru" : "en";
  const copy = () => text[lang()];
  const activeScreen = () => Number(document.querySelector(".screen.active")?.dataset.screen || "0");
  const photoNumber = key => key?.startsWith("gallery-") ? key.slice(8) : photoMap[key] || key;
  const isVideo = path => /\.(mp4|webm|mov)$/i.test(path);
  const safePlay = media => {
    if (typeof media.play !== "function") return;
    media.play().catch(() => {});
  };
  const candidates = key => {
    const number = photoNumber(key);
    const base = `assets/photo-${number}`;
    const paths = [`${base}.png`, `${base}.jpg`, `${base}.jpeg`, `${base}.webp`, `${base}.PNG`, `${base}.JPG`, `${base}.JPEG`, `${base}.WEBP`];
    if (number === "02") paths.unshift(`${base}.MP4`, `${base}.mp4`, `${base}.webm`);
    return paths;
  };

  const mountMedia = (target, key, modal = false, done = () => {}) => {
    const known = cache.get(key);
    const paths = known ? [known] : candidates(key);
    let index = 0;
    const next = () => {
      const path = paths[index];
      if (!path) return;
      index += 1;
      const media = isVideo(path) ? document.createElement("video") : document.createElement("img");
      media.alt = `Polina birthday ${photoNumber(key)}`;
      if (media instanceof HTMLVideoElement) {
        media.muted = !modal;
        media.loop = true;
        media.playsInline = true;
        media.preload = "metadata";
        if (modal) media.controls = true;
      }
      media.addEventListener(isVideo(path) ? "loadeddata" : "load", () => {
        cache.set(key, path);
        target.dataset.mediaPath = path;
        target.textContent = "";
        target.appendChild(media);
        safePlay(media);
        done(path);
      }, { once: true });
      media.addEventListener("error", next, { once: true });
      media.src = path;
    };
    next();
  };

  const hydrateMedia = () => {
    document.querySelectorAll("[data-photo-key], [data-gallery-photo]").forEach(frame => {
      const key = frame.dataset.photoKey || `gallery-${frame.dataset.galleryPhoto}`;
      const cached = cache.get(key);
      if (cached && frame.dataset.mediaPath === cached) return;
      mountMedia(frame, key);
    });
  };

  const burstHearts = (x, y) => {
    for (let i = 0; i < 8; i += 1) {
      const heart = document.createElement("span");
      heart.className = `burst heart-burst ${heartClasses[heartIndex % heartClasses.length]}`;
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.setProperty("--x", `${Math.random() * 160 - 80}px`);
      heart.style.setProperty("--y", `${Math.random() * -130 - 30}px`);
      heart.style.setProperty("--spin", `${Math.random() * 80 - 40}deg`);
      document.body.appendChild(heart);
      heart.addEventListener("animationend", () => heart.remove(), { once: true });
      heartIndex += 1;
    }
  };

  const downloadPath = path => {
    const link = document.createElement("a");
    link.href = path;
    link.download = path.split("/").pop() || "polina-photo";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const ensureDownload = modal => {
    let button = modal.querySelector(".download-action");
    if (button) return button;
    button = document.createElement("button");
    button.type = "button";
    button.className = "download-action";
    button.textContent = "Download";
    modal.appendChild(button);
    return button;
  };

  const openMedia = (key, shouldDownload) => {
    const modal = document.querySelector("#photoModal");
    const preview = document.querySelector("#modalPreview");
    const caption = document.querySelector("#modalCaption");
    if (!modal || !preview || !caption) return;
    preview.textContent = "Loading photo...";
    caption.textContent = `Photo ${photoNumber(key)}`;
    modal.querySelector(".download-action")?.remove();
    mountMedia(preview, key, true, path => {
      caption.textContent = `Photo ${photoNumber(key)}`;
      if (!shouldDownload) return;
      ensureDownload(modal).onclick = () => downloadPath(path);
      window.setTimeout(() => downloadPath(path), 180);
    });
    if (!modal.open) modal.showModal?.();
  };

  const endingKey = () => badScenes.size === 0 ? "good" : badScenes.size >= 9 ? "evil" : "normal";
  const ensureEndingModal = () => {
    let modal = document.querySelector("#endingModal");
    if (modal) return modal;
    modal = document.createElement("dialog");
    modal.id = "endingModal";
    modal.className = "ending-modal";
    modal.innerHTML = '<button class="modal-close" type="button" aria-label="Close">x</button><div class="ending-banner"><span class="ending-label"></span><strong></strong><small></small></div>';
    modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
    document.querySelector(".page-shell")?.appendChild(modal);
    return modal;
  };
  const fillEnding = element => {
    if (!element) return;
    const [label, title, body] = copy().endings[endingKey()];
    element.className = `ending-banner ending-${endingKey()}`;
    element.querySelector(".ending-label").textContent = label;
    element.querySelector("strong").textContent = title;
    element.querySelector("small").textContent = body;
  };
  const updateEnding = () => {
    fillEnding(document.querySelector(".final-screen .ending-banner"));
    const modal = ensureEndingModal();
    fillEnding(modal.querySelector(".ending-banner"));
    if (activeScreen() !== 10) {
      endingShownOnFinal = false;
      window.clearTimeout(endingTimer);
      return;
    }
    if (endingShownOnFinal) return;
    endingShownOnFinal = true;
    endingTimer = window.setTimeout(() => {
      fillEnding(modal.querySelector(".ending-banner"));
      if (activeScreen() === 10 && !modal.open) modal.showModal?.();
    }, 420);
  };

  const hydrateWishes = () => {
    const c = copy();
    document.querySelectorAll(".reason-token").forEach((button, index) => {
      button.querySelector("span").textContent = c.tokens[index] || c.tokens[0];
      button.classList.toggle("is-found", foundWishes.has(index));
    });
    const reason = document.querySelector("#reasonText");
    if (reason && !reason.dataset.customWish) reason.textContent = c.wishBase;
  };
  const resetWishes = () => {
    foundWishes.clear();
    secretOpen = false;
    const reason = document.querySelector("#reasonText");
    if (reason) {
      delete reason.dataset.customWish;
      reason.textContent = copy().wishBase;
    }
    hydrateWishes();
  };
  const showSecret = () => {
    if (secretOpen || foundWishes.size < 5) return;
    const modal = document.querySelector("#secretModal");
    if (!modal) return;
    secretOpen = true;
    modal.querySelector(".secret-badge").textContent = "\u2665";
    modal.querySelector("#secretTitle").textContent = copy().secretTitle;
    modal.querySelector("#secretCopy").textContent = copy().secretCopy;
    modal.addEventListener("close", resetWishes, { once: true });
    if (!modal.open) modal.showModal?.();
  };
  const buildGallery = () => {
    const modal = document.querySelector("#galleryModal");
    const grid = document.querySelector("#galleryGrid");
    if (!modal || !grid) return;
    grid.innerHTML = "";
    for (let i = 1; i <= 28; i += 1) {
      const number = String(i).padStart(2, "0");
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.galleryPhoto = number;
      button.innerHTML = `<span>Photo ${number}</span>`;
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        openMedia(`gallery-${number}`, true);
      }, true);
      grid.appendChild(button);
    }
    hydrateMedia();
    if (!modal.open) modal.showModal?.();
  };

  const refresh = () => {
    hydrateMedia();
    hydrateWishes();
    updateEnding();
  };
  const scheduleRefresh = () => {
    window.setTimeout(refresh, 0);
    window.setTimeout(refresh, 180);
    window.setTimeout(refresh, 520);
  };

  ["pointerover", "pointerenter", "mouseover", "mouseenter", "mousemove", "touchmove"].forEach(type => {
    window.addEventListener(type, event => {
      if (event.target.closest?.("[data-no]")) event.stopImmediatePropagation();
    }, true);
  });

  window.addEventListener("click", event => {
    const noButton = event.target.closest?.("[data-no]");
    if (!noButton) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const scene = Math.max(1, Math.min(9, activeScreen()));
    const lines = copy().noLines(copy().noTopics[scene - 1]);
    const step = Number(noButton.dataset.noStep || "0");
    badScenes.add(scene);
    burstHearts(event.clientX, event.clientY);
    noButton.classList.add("is-glow");
    noButton.textContent = lines[Math.min(step, lines.length - 1)];
    noButton.dataset.noStep = String(step + 1);
    updateEnding();
    if (step >= lines.length - 1) window.setTimeout(() => noButton.closest(".screen")?.querySelector("[data-next]")?.click(), 520);
    window.setTimeout(() => noButton.classList.remove("is-glow"), 580);
  }, true);

  window.addEventListener("click", event => {
    const token = event.target.closest?.(".reason-token");
    if (token) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const index = Number(token.dataset.reason || "0");
      const reason = document.querySelector("#reasonText");
      foundWishes.add(index);
      if (reason) {
        reason.dataset.customWish = "true";
        reason.textContent = copy().wishes[index] || copy().wishBase;
      }
      burstHearts(event.clientX, event.clientY);
      hydrateWishes();
      showSecret();
      return;
    }
    if (event.target.closest?.("#galleryButton")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      buildGallery();
      return;
    }
    const mediaFrame = event.target.closest?.("[data-photo-key]");
    if (mediaFrame) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openMedia(mediaFrame.dataset.photoKey, false);
      return;
    }
    if (event.target.closest?.("#restartButton")) {
      badScenes.clear();
      endingShownOnFinal = false;
      window.clearTimeout(endingTimer);
      resetWishes();
    }
    if (event.target.closest?.(".lang-option")) {
      scheduleRefresh();
      return;
    }
    scheduleRefresh();
  }, true);

  const screens = document.querySelector("#screens");
  if (screens) {
    new MutationObserver(scheduleRefresh).observe(screens, { attributes: true, attributeFilter: ["class"], subtree: true });
  }
  window.addEventListener("load", refresh, { once: true });
  refresh();
})();