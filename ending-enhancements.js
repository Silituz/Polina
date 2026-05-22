(() => {
  const text = {
    en: {
      endings: {
        good: ["reine Schneewölfin", "Soft snow, loyal heart", "You chose the warm path every time. The snow pack leaves you one bright birthday wish: stay loved, stay brave, stay beautifully you."],
        normal: ["Wölfin", "A little mischief joined the route", "One playful no was enough for the wolves to notice, but the day still stays sweet, warm, and completely yours."],
        evil: ["Glückwunsch, Fenrir ist erwacht", "The wild ending opened its eyes", "Every path went through chaos, and Fenrir woke up laughing. Even so, the birthday wish is still full of heart."]
      },
      intro: "This little page is here to make your day softer: a bit of moonlight, a loyal wolf mood, and a birthday wish from someone who really wants you to smile.",
      final: "Polina, I hope this birthday feels gentle, beautiful, and full of tiny signs that you are cared for more than you might notice.",
      scenes: [
        "Today is your soft little moonlit birthday mission, and the first rule is simple: you are allowed to feel special.",
        "Some wishes travel quietly, but this one came with warmth, snowlight, and a stubborn plan to make you smile.",
        "There is something strong and sweet about you, like a brave light that does not need to be loud to be seen.",
        "A memory can be small and still shine for a long time, especially when it belongs to someone dear.",
        "The wolf patrol is guarding the good mood today and gently pushing every boring thought away.",
        "Even from far away, good thoughts can find the right person. This one found you.",
        "If this page gives you even one tiny smile, then the whole birthday mission already did its job.",
        "One last bit of sparkle, one small howl, and one honest reminder: you deserve a lovely day.",
        "The surprise reached the end with a warm heart, a little northern magic, and a quiet birthday hug."
      ],
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
      secretTitle: "Your little blue secret",
      secretCopy: "You collected every wish. Let them stay with you quietly and make this birthday feel a little softer."
    },
    ru: {
      endings: {
        good: ["reine Schneewölfin", "Мягкий снег и верное сердце", "Ты весь путь выбирала тепло. Снежная стая оставляет тебе одно светлое желание: будь любимой, смелой и очень собой."],
        normal: ["Wölfin", "Немного хитрости в маршруте", "Одно игривое «нет» стая точно заметила, но этот день все равно милый, теплый и полностью твой."],
        evil: ["Glückwunsch, Fenrir ist erwacht", "Дикий финал открыл глаза", "Каждая сцена прошла через хаос, и Фенрир проснулся с улыбкой. Но пожелание все равно от сердца."]
      },
      intro: "Эта страница для того, чтобы твой день стал мягче: немного лунного света, верное волчье настроение и пожелание от человека, который очень хочет, чтобы ты улыбнулась.",
      final: "Полина, пусть этот день будет нежным, красивым и полным маленьких знаков, что тебя ценят и о тебе думают.",
      scenes: [
        "Сегодня у тебя маленькая лунная миссия, и первое правило простое: тебе можно чувствовать себя особенной.",
        "Некоторые желания идут тихо, но это пришло с теплом, снежным светом и упрямым планом заставить тебя улыбнуться.",
        "В тебе есть что-то сильное и очень милое, как смелый свет, которому не нужно шуметь, чтобы его заметили.",
        "Воспоминание может быть маленьким и все равно долго светить, если оно про дорогого человека.",
        "Волчий патруль сегодня охраняет твое хорошее настроение и мягко выгоняет все скучные мысли.",
        "Даже издалека теплые мысли умеют найти нужного человека. Эта нашла тебя.",
        "Если эта страница подарит тебе хотя бы одну маленькую улыбку, вся миссия уже не зря.",
        "Еще немного блеска, один маленький вой и честное напоминание: ты заслуживаешь красивый день.",
        "Сюрприз дошел до финала с теплым сердцем, северной магией и тихим объятием на день рождения."
      ],
      noTopics: ["Первый вой", "Лунная почта", "Волчья сила", "Искра памяти", "Волчий патруль", "Северное сияние", "Спасение улыбки", "Финальный вой", "Коробка сюрприза"],
      noLines: topic => [`${topic}: «нет» не принято.`, `${topic}: драматичные глаза уже включены.`, `${topic}: день рождения мягко настаивает.`, `${topic}: ладно, идем дальше.`],
      tokens: ["УЛЫБКА", "СВЕТ", "СЕРДЦЕ", "УДАЧА", "ЖЕЛАНИЕ"],
      wishBase: "Маленькая записка: пусть сегодня у тебя будет такая улыбка, которая останется даже после свечей.",
      wishes: [
        "Пусть улыбка сегодня найдет тебя первой, раньше всех дел и лишних мыслей.",
        "Пусть этот год будет мягким там, где тебе нужен покой, и ярким там, где нужна смелость.",
        "Пусть маленькие хорошие моменты сами находят тебя даже в самые обычные дни.",
        "Пусть ты чаще чувствуешь, сколько тепла появляется рядом просто потому, что ты есть.",
        "Пусть этот день рождения оставит в сердце маленький свет, который еще долго не погаснет."
      ],
      secretTitle: "Твой маленький синий секрет",
      secretCopy: "Ты собрала все желания. Пусть они тихо останутся с тобой и делают этот день еще мягче."
    }
  };

  const photoMap = { "01": "03", "02": "02", "03": "10", "04": "01", "05": "20", "06": "17", "07": "22", "08": "09", "09": "16", "10": "14", "11": "28" };
  const cache = new Map();
  const missing = new Set();
  const badScenes = new Set();
  const foundWishes = new Set();
  const heartClasses = ["heart-white", "heart-blue", "heart-red"];
  let heartIndex = 0;
  let endingShown = false;
  let secretOpen = false;

  const lang = () => document.documentElement.lang === "ru" ? "ru" : "en";
  const copy = () => text[lang()];
  const activeScreen = () => Number(document.querySelector(".screen.active")?.dataset.screen || "0");
  const endingKey = () => badScenes.size === 0 ? "good" : badScenes.size >= 9 ? "evil" : "normal";
  const photoNumber = key => key?.startsWith("gallery-") ? key.slice(8) : photoMap[key] || key;
  const isVideo = path => /\.(mp4|webm|mov)$/i.test(path);
  const candidates = key => {
    const number = photoNumber(key);
    const base = `assets/photo-${number}`;
    const paths = [`${base}.png`, `${base}.jpg`, `${base}.jpeg`, `${base}.JPG`, `${base}.PNG`];
    if (number === "02") paths.unshift(`${base}.MP4`, `${base}.mp4`);
    return paths;
  };

  const resolvePhoto = (key, done) => {
    if (cache.has(key)) return done(cache.get(key));
    if (missing.has(key)) return;
    const paths = candidates(key);
    let index = 0;
    const tryNext = () => {
      const path = paths[index];
      if (!path) return missing.add(key);
      index += 1;
      const probe = isVideo(path) ? document.createElement("video") : new Image();
      probe.addEventListener(isVideo(path) ? "loadeddata" : "load", () => {
        cache.set(key, path);
        done(path);
      }, { once: true });
      probe.addEventListener("error", tryNext, { once: true });
      probe.src = path;
    };
    tryNext();
  };

  const makeMedia = (path, key, modal = false) => {
    const media = isVideo(path) ? document.createElement("video") : new Image();
    media.alt = `Polina birthday ${photoNumber(key)}`;
    if (media instanceof HTMLVideoElement) {
      media.muted = !modal;
      media.loop = true;
      media.playsInline = true;
      media.preload = "metadata";
      if (modal) media.controls = true;
    }
    media.src = path;
    return media;
  };

  const fillFrame = (frame, path) => {
    if (frame.dataset.mediaPath === path) return;
    const key = frame.dataset.photoKey || `gallery-${frame.dataset.galleryPhoto}`;
    frame.dataset.mediaPath = path;
    frame.textContent = "";
    const media = makeMedia(path, key);
    frame.appendChild(media);
    media.play?.().catch(() => {});
  };

  const hydrateMedia = () => {
    document.querySelectorAll("[data-photo-key], [data-gallery-photo]").forEach(frame => {
      const key = frame.dataset.photoKey || `gallery-${frame.dataset.galleryPhoto}`;
      resolvePhoto(key, path => fillFrame(frame, path));
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

  const openMedia = key => resolvePhoto(key, path => {
    const modal = document.querySelector("#photoModal");
    const preview = document.querySelector("#modalPreview");
    const caption = document.querySelector("#modalCaption");
    if (!modal || !preview || !caption) return;
    preview.textContent = "";
    preview.appendChild(makeMedia(path, key, true));
    caption.textContent = `Photo ${photoNumber(key)}`;
    ensureDownload(modal).onclick = () => downloadPath(path);
    if (!modal.open) modal.showModal?.();
    window.setTimeout(() => downloadPath(path), 120);
  });

  const ensureEndingBanner = () => {
    const finalScreen = document.querySelector(".final-screen");
    if (!finalScreen) return null;
    let banner = finalScreen.querySelector(".ending-banner");
    if (banner) return banner;
    banner = document.createElement("div");
    banner.className = "ending-banner";
    banner.setAttribute("aria-live", "polite");
    banner.innerHTML = '<span class="ending-label"></span><strong></strong><small></small>';
    finalScreen.querySelector(".eyebrow")?.after(banner);
    return banner;
  };

  const fillEnding = element => {
    const key = endingKey();
    const [label, title, body] = copy().endings[key];
    element.className = `ending-banner ending-${key}`;
    element.querySelector(".ending-label").textContent = label;
    element.querySelector("strong").textContent = title;
    element.querySelector("small").textContent = body;
  };

  const ensureEndingModal = () => {
    let modal = document.querySelector("#endingModal");
    if (modal) return modal;
    modal = document.createElement("dialog");
    modal.id = "endingModal";
    modal.className = "ending-modal";
    modal.innerHTML = '<button class="modal-close" type="button" aria-label="Close">x</button><div class="ending-banner"><span class="ending-label"></span><strong></strong><small></small></div>';
    modal.querySelector("button").addEventListener("click", () => modal.close());
    document.querySelector(".page-shell")?.appendChild(modal);
    return modal;
  };

  const updateEnding = () => {
    const banner = ensureEndingBanner();
    if (banner) fillEnding(banner);
    const modal = ensureEndingModal();
    fillEnding(modal.querySelector(".ending-banner"));
    if (activeScreen() === 10 && !endingShown && !modal.open) {
      endingShown = true;
      window.setTimeout(() => modal.showModal?.(), 360);
    }
  };

  const applyTexts = () => {
    const c = copy();
    document.querySelector('.intro-screen [data-key="introCopy"]')?.replaceChildren(c.intro);
    document.querySelector('.final-screen [data-key="finalCopy"]')?.replaceChildren(c.final);
    c.scenes.forEach((line, index) => {
      const element = document.querySelector(`.screen[data-screen="${index + 1}"] > .copy`);
      if (element) element.textContent = line;
    });
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
    modal.querySelector(".secret-badge").textContent = "♥";
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
        openMedia(`gallery-${number}`);
      }, true);
      grid.appendChild(button);
    }
    hydrateMedia();
    if (!modal.open) modal.showModal?.();
  };

  const refresh = () => {
    document.querySelectorAll(".burst:not(.heart-burst)").forEach(node => {
      node.textContent = "";
      node.className = `burst heart-burst ${heartClasses[heartIndex % heartClasses.length]}`;
      node.style.setProperty("--spin", `${Math.random() * 80 - 40}deg`);
      heartIndex += 1;
    });
    applyTexts();
    hydrateWishes();
    hydrateMedia();
    updateEnding();
  };

  document.addEventListener("pointerenter", event => {
    if (event.target.closest?.("[data-no]")) event.stopImmediatePropagation();
  }, true);

  document.addEventListener("click", event => {
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

  document.addEventListener("click", event => {
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
      openMedia(mediaFrame.dataset.photoKey);
      return;
    }

    if (event.target.closest?.("#restartButton")) {
      badScenes.clear();
      endingShown = false;
      resetWishes();
    }

    if (event.target.closest?.(".lang-option")) {
      window.setTimeout(() => {
        const reason = document.querySelector("#reasonText");
        if (reason) delete reason.dataset.customWish;
        refresh();
      }, 0);
      return;
    }

    window.setTimeout(refresh, 0);
  }, true);

  window.addEventListener("load", refresh, { once: true });
  refresh();
})();