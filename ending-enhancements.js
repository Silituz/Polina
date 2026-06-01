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
      ["Не в первый именинный вой.", "Луна просит сказать да.", "Слишком мило, чтобы отказаться.", "Ладно, идем дальше."],
      ["Лунное письмо уже в пути.", "Это пожелание все равно дойдет.", "От магии дня рождения не спрятаться.", "Пусть едет дальше."],
      ["Волчья сила не спит.", "Смелые сердца так не сбегают.", "Стая мило упрямится.", "Вперед, с искрами."],
      ["Это воспоминание хочет сиять.", "Маленький свет не уйдет.", "Тут нужна хоть одна улыбка.", "К следующему теплу."],
      ["Патруль охраняет настроение.", "Скучные мысли заблокированы.", "Стая голосует за да.", "Мягко идем дальше."],
      ["Северное сияние не согласно.", "Эта магия выбрала тебя.", "Небо драматично настаивает.", "Ладно, идем за ним."],
      ["Спасение улыбки включено.", "От милоты не убежать.", "Миссия еще жива.", "Маленькая победа."],
      ["Для финального воя нужна смелость.", "Уже почти дошли, не сбегай.", "Снежная тропа упряма.", "Еще один шаг."],
      ["Сюрприз пока не открыт.", "Еще рано, именинная тайна.", "Лента не принимает отказ.", "Открываем финал."]
    ]
  };
  const polishCopy = {
    en: {
      endings: {
        good: ["Pure snow wolf", "The gentlest heart in the snow", "Polina, you mean so much to me. Every kind answer felt like your little light walking through the snow, and this ending is my warmest birthday wish for you. May you always feel protected, chosen, and deeply appreciated."],
        normal: ["Wolf", "A sweet little wild path", "Even with a bit of mischief, this path still belongs to you. I hope you know how much warmth you bring into the world, and how honestly happy I am that this page gets to celebrate you."],
        evil: ["Fenrir has awakened", "The wild ending still has a heart", "Fenrir may have woken up, but even this chaotic path carries the same truth. You matter a lot, and this birthday wish is still full of care for you."]
      },
      tokens: ["YOUR", "SMILE", "LIGHTS", "MY", "HEART"],
      wishBase: "Tap each word and build the tiny sentence I mean with all my heart.",
      wishes: [
        "Your smile is one of those small beautiful things that can make a whole day feel softer.",
        "I hope life gives you gentle reasons to smile, even on days that start quietly.",
        "You bring a light that feels calm, kind, and rare, and I hope you see it too.",
        "My wish is that you feel surrounded by care, not only today, but long after this birthday.",
        "My heart really hopes this year treats you tenderly and gives you moments you never want to forget."
      ],
      secretTitle: "A sentence just for you",
      secretCopy: "Your smile lights my heart. That is the hidden wish this whole little page was carrying. May you feel loved in the quiet moments, proud of who you are, and gently reminded that you mean a lot to me."
    },
    ru: {
      endings: {
        good: ["Чистая снежная волчица", "Самое нежное сердце в снегу", "Полина, ты очень много для меня значишь. Каждый добрый ответ будто вел твой маленький свет через снег, и это мое самое теплое пожелание тебе. Пусть ты всегда чувствуешь, что тебя берегут, выбирают и по-настоящему ценят."],
        normal: ["Волчица", "Милый немного дикий путь", "Даже с капелькой хитрости этот путь все равно твой. Я очень хочу, чтобы ты знала, сколько тепла ты приносишь рядом с собой, и как искренне мне радостно поздравлять именно тебя."],
        evil: ["Поздравляю, Фенрир проснулся", "Дикий финал тоже с сердцем", "Фенрир, конечно, проснулся, но даже в этом хаосе остается главное. Ты очень важна, и это пожелание все равно написано с настоящим теплом к тебе."]
      },
      tokens: ["ТВОЯ", "УЛЫБКА", "СВЕТИТ", "МОЕМУ", "СЕРДЦУ"],
      wishBase: "Нажми на каждое слово и собери маленькую фразу, которую я правда хочу тебе сказать.",
      wishes: [
        "Твоя улыбка из тех маленьких красивых вещей, которые могут сделать день намного мягче.",
        "Пусть жизнь дает тебе нежные причины улыбаться даже в самые тихие дни.",
        "В тебе есть спокойный, добрый и редкий свет, и я очень хочу, чтобы ты сама его видела.",
        "Я желаю тебе чувствовать заботу рядом не только сегодня, а еще очень долго после этого дня.",
        "Мое сердце правда желает, чтобы этот год был к тебе нежным и подарил моменты, которые не хочется забывать."
      ],
      secretTitle: "Фраза только для тебя",
      secretCopy: "Твоя улыбка светит моему сердцу. Вот какое скрытое пожелание несла вся эта маленькая страница. Пусть ты чувствуешь тепло даже в тихие моменты, гордишься собой и помнишь, что ты очень много для меня значишь."
    }
  };
  const badScenes = new Set();
  const lang = () => document.documentElement.lang === "ru" ? "ru" : "en";
  const activeScreen = () => Number(document.querySelector(".screen.active")?.dataset.screen || "0");
  const endingKey = () => badScenes.size === 0 ? "good" : badScenes.size >= 9 ? "evil" : "normal";
  const setText = (el, value) => { if (el && el.textContent !== value) el.textContent = value; };

  const applyKpopStyle = () => {
    document.querySelector("#polina-kpop-style")?.remove();
    const style = document.createElement("style");
    style.id = "polina-kpop-style";
    style.textContent = `
      body::before { position: fixed !important; inset: 0 !important; z-index: 0 !important; content: "" !important; pointer-events: none !important; background: radial-gradient(circle at 12% 10%, rgba(184,128,255,.34), transparent 16rem), radial-gradient(circle at 84% 12%, rgba(255,132,220,.2), transparent 14rem), radial-gradient(circle at 52% 78%, rgba(120,174,255,.2), transparent 18rem), linear-gradient(135deg, rgba(105,55,188,.2), rgba(255,255,255,0) 38%, rgba(255,197,236,.14)) !important; mix-blend-mode: screen !important; }
      body::after { position: fixed !important; inset: 0 !important; z-index: 0 !important; content: "" !important; pointer-events: none !important; opacity: .38 !important; background-image: radial-gradient(circle, rgba(255,255,255,.86) 0 1px, transparent 1.6px), radial-gradient(circle, rgba(198,166,255,.82) 0 1px, transparent 1.7px), radial-gradient(circle at 50% 35%, rgba(180,120,255,.28), transparent 5rem) !important; background-position: 0 0, 24px 18px, 50% 20% !important; background-size: 72px 72px, 96px 96px, 100% 100% !important; }
      .page-shell { position: relative !important; z-index: 1 !important; isolation: isolate !important; }
      .cover-main, .panel-card h2, .final-screen h2, .secret-card h2 { color: #fffaff !important; letter-spacing: 0 !important; background: linear-gradient(112deg, #ffffff 0 16%, #ffe3ff 27%, #d7bdff 42%, #a688ff 56%, #9ed8ff 70%, #fff2be 86%, #ffffff 100%) !important; -webkit-background-clip: text !important; background-clip: text !important; -webkit-text-fill-color: transparent !important; text-shadow: 0 1px 0 rgba(76,36,138,.88), 0 0 12px rgba(255,230,255,.96), 0 0 28px rgba(175,119,255,.72), 0 0 48px rgba(112,162,255,.46), 0 0 62px rgba(255,188,238,.3) !important; filter: drop-shadow(0 0 10px rgba(255,211,249,.54)) !important; }
      .cover-main::after, .panel-card h2::after, .final-screen h2::after, .secret-card h2::after { display: none !important; content: none !important; }
    `;
    document.head.appendChild(style);
  };

  const rewriteNoText = (button, force = false) => {
    const scene = Math.max(1, Math.min(9, activeScreen()));
    const step = Math.max(0, Number(button.dataset.noStep || "0") - (force ? 1 : 0));
    const lines = noCopy[lang()][scene - 1] || noCopy.en[scene - 1] || noCopy.en[0];
    const value = lines[Math.min(step, lines.length - 1)];
    const set = () => setText(button, value);
    (window.queueMicrotask || (callback => window.setTimeout(callback, 0)))(set);
    window.setTimeout(set, 20);
    window.setTimeout(set, 80);
  };

  const setBanner = banner => {
    if (!banner) return;
    const [label, title, body] = polishCopy[lang()].endings[endingKey()];
    banner.className = `ending-banner ending-${endingKey()}`;
    setText(banner.querySelector(".ending-label"), label);
    setText(banner.querySelector("strong"), title);
    setText(banner.querySelector("small"), body);
  };
  const polishEndings = () => { setBanner(document.querySelector(".final-screen .ending-banner")); setBanner(document.querySelector("#endingModal .ending-banner")); };
  const polishWishes = () => {
    const c = polishCopy[lang()];
    document.querySelectorAll(".reason-token").forEach((button, index) => setText(button.querySelector("span") || button, c.tokens[index] || c.tokens[0]));
    const reason = document.querySelector("#reasonText");
    if (reason && !reason.dataset.customWish) setText(reason, c.wishBase);
    setText(document.querySelector("#secretTitle"), c.secretTitle);
    setText(document.querySelector("#secretCopy"), c.secretCopy);
  };
  const polishNoButtons = () => document.querySelectorAll("[data-no]").forEach(button => { if (button.textContent.includes(":")) rewriteNoText(button, true); });
  const polishContent = () => { polishWishes(); polishEndings(); polishNoButtons(); };
  const polishAll = () => { applyKpopStyle(); polishContent(); };
  const schedulePolish = () => [0, 40, 120, 320, 700].forEach(delay => window.setTimeout(polishContent, delay));

  window.addEventListener("click", event => {
    const noButton = event.target.closest?.("[data-no]");
    if (noButton) {
      badScenes.add(Math.max(1, Math.min(9, activeScreen())));
      rewriteNoText(noButton);
      schedulePolish();
      return;
    }
    const token = event.target.closest?.(".reason-token");
    if (token) {
      const index = Number(token.dataset.reason || "0");
      const setWish = () => {
        const reason = document.querySelector("#reasonText");
        if (reason) {
          reason.dataset.customWish = "true";
          setText(reason, polishCopy[lang()].wishes[index] || polishCopy[lang()].wishBase);
        }
      };
      (window.queueMicrotask || (callback => window.setTimeout(callback, 0)))(setWish);
      window.setTimeout(setWish, 30);
    }
    schedulePolish();
  }, true);

  const loadStableFixes = () => {
    const script = document.createElement("script");
    script.src = previousStableScript;
    script.onload = () => { polishAll(); [80, 220, 620, 1200].forEach(delay => window.setTimeout(polishAll, delay)); };
    script.onerror = polishAll;
    document.head.appendChild(script);
  };

  polishAll();
  [300, 900, 1800, 3500].forEach(delay => window.setTimeout(polishAll, delay));
  document.addEventListener("close", event => { if (event.target?.id === "secretModal") window.setTimeout(polishWishes, 20); }, true);
  loadStableFixes();
})();