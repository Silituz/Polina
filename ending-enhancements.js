(() => {
  const endings = {
    en: {
      good: ["Good ending", "The birthday pack approved this route", "You followed the warm path, so the final wish arrives bright, loyal, and full of heart."],
      normal: ["Normal ending", "A little chaos, still a good birthday", "The wolves noticed some birthday resistance, but the mission still reached Polina with care."],
      evil: ["Evil ending", "The mischievous pack took over", "Too many no-clicks woke the dramatic side of the wolves. Still, the wish stays warm."]
    },
    ru: {
      good: ["Хорошая концовка", "Стая одобрила этот путь", "Ты прошла по теплой дороге, и финальное пожелание пришло ярким, верным и от сердца."],
      normal: ["Обычная концовка", "Немного хаоса, но день все равно твой", "Волки заметили немного сопротивления, но миссия все равно дошла до тебя с теплом."],
      evil: ["Злая концовка", "Хитрая стая захватила финал", "Слишком много «нет» разбудило драматичных волков. Но пожелание все равно теплое."]
    }
  };

  const noTexts = {
    en: ["No", "Are you sure?", "Really really sure?", "The pack is pouting", "Okay, one last no..."],
    ru: ["Нет", "Точно?", "Совсем точно?", "Стая уже грустит", "Ладно, последнее нет..."]
  };

  const wishes = {
    en: {
      tokens: ["SMILE", "LIGHT", "HEART", "LUCK", "WISH"],
      default: "Tiny wish note: I hope today gives you the kind of smile that stays even after the candles are out.",
      lines: [
        "May your smile find you first today, before anything else asks for your energy.",
        "May this year be soft where you need peace and bright where you need courage.",
        "May good little moments keep finding you, even on completely normal days.",
        "May you always feel how much warmth you bring just by being yourself.",
        "May this birthday leave a tiny glow in your heart for a long time."
      ]
    },
    ru: {
      tokens: ["УЛЫБКА", "СВЕТ", "СЕРДЦЕ", "УДАЧА", "ЖЕЛАНИЕ"],
      default: "Маленькая записка: пусть сегодня у тебя будет такая улыбка, которая останется даже после свечей.",
      lines: [
        "Пусть улыбка сегодня найдет тебя первой, раньше всех дел и лишних мыслей.",
        "Пусть этот год будет мягким там, где тебе нужен покой, и ярким там, где нужна смелость.",
        "Пусть маленькие хорошие моменты сами находят тебя даже в самые обычные дни.",
        "Пусть ты чаще чувствуешь, сколько тепла появляется рядом просто потому, что ты есть.",
        "Пусть этот день рождения оставит в сердце маленький свет, который еще долго не погаснет."
      ]
    }
  };

  const mediaSources = {
    "01": "assets/photo-03.png",
    "02": "assets/photo-02.MP4",
    "03": "assets/photo-04.png",
    "04": "assets/photo-05.png",
    "05": "assets/photo-06.png",
    "06": "assets/photo-07.png",
    "07": "assets/photo-08.png",
    "08": "assets/photo-09.png",
    "09": "assets/photo-10.png",
    "10": "assets/photo-11.png",
    "11": "assets/photo-03.png"
  };

  const heartColors = ["heart-white", "heart-blue", "heart-red"];
  let heartIndex = 0;
  let noCount = 0;

  const lang = () => document.documentElement.lang === "ru" ? "ru" : "en";
  const endingKey = () => noCount <= 1 ? "good" : noCount <= 4 ? "normal" : "evil";
  const isVideo = path => /\.(mp4|webm|mov)$/i.test(path);

  const makeHeart = (x, y) => {
    for (let i = 0; i < 8; i += 1) {
      const heart = document.createElement("span");
      heart.className = `burst heart-burst ${heartColors[heartIndex % heartColors.length]}`;
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

  const createMedia = (path, key, modal = false) => {
    const media = isVideo(path) ? document.createElement("video") : new Image();
    media.alt = `Polina birthday ${key}`;
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

  const hydrateMedia = () => {
    document.querySelectorAll("[data-photo-key]").forEach(frame => {
      const key = frame.dataset.photoKey;
      const path = mediaSources[key];
      if (!path || frame.dataset.mediaPath === path) return;
      frame.dataset.mediaPath = path;
      frame.textContent = "";
      const media = createMedia(path, key);
      frame.appendChild(media);
      media.play?.().catch(() => {});
    });
  };

  const openMedia = key => {
    const path = mediaSources[key];
    const modal = document.querySelector("#photoModal");
    const preview = document.querySelector("#modalPreview");
    const caption = document.querySelector("#modalCaption");
    if (!path || !modal || !preview || !caption) return;
    preview.textContent = "";
    preview.appendChild(createMedia(path, key, true));
    caption.textContent = path;
    modal.showModal?.();
  };

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

  const updateEndingBanner = () => {
    const banner = ensureEndingBanner();
    if (!banner) return;
    const key = endingKey();
    const [label, title, copy] = endings[lang()][key];
    banner.className = `ending-banner ending-${key}`;
    banner.querySelector(".ending-label").textContent = label;
    banner.querySelector("strong").textContent = title;
    banner.querySelector("small").textContent = copy;
  };

  const hydrateWishes = () => {
    const copy = wishes[lang()];
    document.querySelectorAll(".reason-token").forEach((button, index) => {
      button.querySelector("span").textContent = copy.tokens[index] || copy.tokens[0];
    });
    const reason = document.querySelector("#reasonText");
    if (reason && !reason.dataset.customWish) reason.textContent = copy.default;
  };

  const refresh = () => {
    document.querySelectorAll(".burst:not(.heart-burst)").forEach(node => {
      node.textContent = "";
      node.className = `burst heart-burst ${heartColors[heartIndex % heartColors.length]}`;
      node.style.setProperty("--spin", `${Math.random() * 80 - 40}deg`);
      heartIndex += 1;
    });
    hydrateMedia();
    hydrateWishes();
    updateEndingBanner();
  };

  document.addEventListener("pointerenter", event => {
    if (!event.target.closest?.("[data-no]")) return;
    event.stopImmediatePropagation();
  }, true);

  document.addEventListener("click", event => {
    const noButton = event.target.closest?.("[data-no]");
    if (!noButton) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const options = noTexts[lang()];
    const step = Number(noButton.dataset.noStep || "0");
    noCount += 1;
    makeHeart(event.clientX, event.clientY);
    noButton.classList.add("is-glow");
    updateEndingBanner();
    if (step >= options.length - 1) {
      window.setTimeout(() => noButton.closest(".screen")?.querySelector("[data-next]")?.click(), 260);
      return;
    }
    noButton.dataset.noStep = String(step + 1);
    noButton.textContent = options[step + 1];
    window.setTimeout(() => noButton.classList.remove("is-glow"), 580);
  }, true);

  document.addEventListener("click", event => {
    const token = event.target.closest?.(".reason-token");
    if (token) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const index = Number(token.dataset.reason || "0");
      token.classList.add("is-found");
      const reason = document.querySelector("#reasonText");
      if (reason) {
        reason.dataset.customWish = "true";
        reason.textContent = wishes[lang()].lines[index] || wishes[lang()].default;
      }
      makeHeart(event.clientX, event.clientY);
      return;
    }

    const mediaFrame = event.target.closest?.("[data-photo-key]");
    if (mediaFrame && mediaSources[mediaFrame.dataset.photoKey]) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openMedia(mediaFrame.dataset.photoKey);
      return;
    }

    if (event.target.closest?.("#restartButton")) noCount = 0;
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
