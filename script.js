(() => {
  const copy = {
    en: {
      photoHero: "Photo coming soon",
      eyebrow: "Birthday under the northern moon",
      title: "Happy Birthday, Polina",
      lead: "A little page with winter light, wolf courage, and a warm birthday wish from a good friend.",
      panelOneTitle: "Your day, your fire",
      panelOneText: "I hope today feels bright, calm, and completely yours, with enough laughter to stay in your memory for a long time.",
      panelTwoTitle: "Wolf heart",
      panelTwoText: "May you keep the strength of a wolf: loyal, sharp, free, and impossible to push away from your own path.",
      panelThreeTitle: "A warm wish",
      panelThreeText: "I wish you beautiful surprises, honest people nearby, and a year that gives back the same warmth you give others.",
      finalEyebrow: "From a good friend",
      finalTitle: "Never forget how special you are",
      finalText: "Polina, happy birthday. I am really glad that you exist in this world, and I hope this new year of your life brings you courage, peace, and many moments that feel like they were made exactly for you.",
      musicMissing: "Music can be added later as assets/birthday-song.mp3.",
      musicPlaying: "Music started.",
      musicPaused: "Music paused.",
      photoMissing: "Add this picture later in the assets folder.",
      modalCaption: "Add your image later in the assets folder."
    },
    ru: {
      photoHero: "Фото будет позже",
      eyebrow: "День рождения под северной луной",
      title: "С днем рождения, Полина",
      lead: "Маленькая страница с зимним светом, волчьей силой и теплым поздравлением от хорошего друга.",
      panelOneTitle: "Твой день, твой огонь",
      panelOneText: "Пусть сегодня тебе будет светло, спокойно и по-настоящему хорошо. Пусть будет столько смеха, чтобы этот день надолго остался в памяти.",
      panelTwoTitle: "Волчье сердце",
      panelTwoText: "Желаю тебе сохранить силу волка: верность себе, острый ум, свободу и упрямую смелость идти своей дорогой.",
      panelThreeTitle: "Теплое пожелание",
      panelThreeText: "Пусть рядом будут честные люди, красивые неожиданности и год, который вернет тебе столько же тепла, сколько ты отдаешь другим.",
      finalEyebrow: "От хорошего друга",
      finalTitle: "Не забывай, какая ты особенная",
      finalText: "Полина, с днем рождения. Я правда рад, что ты есть в этом мире. Пусть новый год твоей жизни принесет тебе смелость, спокойствие и много моментов, которые будто созданы именно для тебя.",
      musicMissing: "Музыку можно добавить позже как assets/birthday-song.mp3.",
      musicPlaying: "Музыка включилась.",
      musicPaused: "Музыка на паузе.",
      photoMissing: "Добавь это фото позже в папку assets.",
      modalCaption: "Добавь изображение позже в папку assets."
    }
  };

  const state = {
    lang: "en",
    toastTimer: null
  };

  const song = document.querySelector("#birthdaySong");
  const musicButton = document.querySelector("#musicButton");
  const toast = document.querySelector("#toast");
  const modal = document.querySelector("#photoModal");
  const modalPreview = document.querySelector("#modalPreview");
  const modalCaption = document.querySelector("#modalCaption");
  const modalClose = document.querySelector("#modalClose");

  const t = key => copy[state.lang][key] || copy.en[key] || key;

  const showToast = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(state.toastTimer);
    state.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
  };

  const setLanguage = lang => {
    state.lang = lang;
    document.documentElement.lang = lang === "ru" ? "ru" : "en";

    document.querySelectorAll("[data-i18n]").forEach(element => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll(".lang-option").forEach(button => {
      button.classList.toggle("active", button.dataset.lang === lang);
    });

    if (modalCaption) {
      modalCaption.textContent = t("modalCaption");
    }
  };

  const imagePathFor = key => `assets/photo-${key}.jpg`;

  const loadOptionalImage = target => {
    const key = target.dataset.photoKey;
    if (!key) return;

    const image = new Image();
    image.onload = () => {
      target.textContent = "";
      target.appendChild(image);
    };
    image.onerror = () => {};
    image.alt = `Polina birthday photo ${key}`;
    image.src = imagePathFor(key);
  };

  const openPhoto = key => {
    if (!modal || !modalPreview) return;

    modalPreview.textContent = "";
    const image = new Image();
    image.onload = () => {
      modalPreview.textContent = "";
      modalPreview.appendChild(image);
      modalCaption.textContent = imagePathFor(key);
    };
    image.onerror = () => {
      modalPreview.textContent = t("photoMissing");
      modalCaption.textContent = t("modalCaption");
    };
    image.alt = `Polina birthday photo ${key}`;
    image.src = imagePathFor(key);

    if (typeof modal.showModal === "function") {
      modal.showModal();
    }
  };

  document.querySelectorAll(".lang-option").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document.querySelectorAll("[data-photo-key]").forEach(element => {
    loadOptionalImage(element);
    element.addEventListener("click", () => openPhoto(element.dataset.photoKey));
  });

  modalClose?.addEventListener("click", () => modal?.close());

  modal?.addEventListener("click", event => {
    if (event.target === modal) {
      modal.close();
    }
  });

  musicButton?.addEventListener("click", async () => {
    if (!song) return;

    if (!song.getAttribute("src")) {
      showToast(t("musicMissing"));
      return;
    }

    try {
      if (song.paused) {
        await song.play();
        musicButton.classList.add("playing");
        showToast(t("musicPlaying"));
      } else {
        song.pause();
        musicButton.classList.remove("playing");
        showToast(t("musicPaused"));
      }
    } catch (_) {
      showToast(t("musicMissing"));
    }
  });

  setLanguage("en");
})();
