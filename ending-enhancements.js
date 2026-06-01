(() => {
  const previousStableScript = "https://cdn.jsdelivr.net/gh/Silituz/Polina@c5ba4e5cfa5d3fefc39d96cc1a7023a722c60dc9/ending-enhancements.js";

  const copy = {
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
  const setText = (element, value) => {
    if (element && element.textContent !== value) element.textContent = value;
  };

  const installCalmStyle = () => {
    document.querySelector("#polina-calm-final-style")?.remove();
    const style = document.createElement("style");
    style.id = "polina-calm-final-style";
    style.textContent = `
      .final-screen .reason-token,
      .final-screen .reason-token *,
      .final-screen .reason-text,
      .ending-modal .ending-banner,
      .ending-modal .ending-banner *,
      .final-screen .ending-banner,
      .final-screen .ending-banner *,
      .secret-modal .secret-card,
      .secret-modal .secret-card * {
        animation: none !important;
        transition: none !important;
      }
      .final-screen .reason-token {
        opacity: 1 !important;
        transform: none !important;
        will-change: auto !important;
        user-select: none !important;
      }
      .final-screen .reason-token span {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: 1em !important;
      }
      .final-screen .reason-text,
      .ending-modal .ending-banner small,
      .secret-modal .secret-card p {
        user-select: text !important;
      }
      .final-screen .reason-text::selection,
      .ending-modal .ending-banner *::selection,
      .secret-modal .secret-card *::selection {
        color: #120810 !important;
        background: rgba(255, 242, 190, 0.82) !important;
      }
    `;
    document.head.appendChild(style);
  };

  const stableWishes = () => {
    const current = copy[lang()];
    document.querySelectorAll(".reason-token").forEach((button, index) => {
      setText(button.querySelector("span") || button, current.tokens[index] || current.tokens[0]);
    });
    const reason = document.querySelector("#reasonText");
    if (reason && !reason.dataset.customWish) setText(reason, current.wishBase);
    setText(document.querySelector("#secretTitle"), current.secretTitle);
    setText(document.querySelector("#secretCopy"), current.secretCopy);
  };

  const stableEndings = () => {
    const [label, title, body] = copy[lang()].endings[endingKey()];
    document.querySelectorAll(".final-screen .ending-banner, #endingModal .ending-banner").forEach(banner => {
      banner.className = `ending-banner ending-${endingKey()}`;
      setText(banner.querySelector(".ending-label"), label);
      setText(banner.querySelector("strong"), title);
      setText(banner.querySelector("small"), body);
    });
  };

  const stabilize = () => {
    installCalmStyle();
    stableWishes();
    stableEndings();
  };

  const scheduleStabilize = () => [0, 30, 90, 220, 520].forEach(delay => window.setTimeout(stabilize, delay));

  window.addEventListener("click", event => {
    const noButton = event.target.closest?.("[data-no]");
    if (noButton) badScenes.add(Math.max(1, Math.min(9, activeScreen())));

    const token = event.target.closest?.(".reason-token");
    if (token) {
      const index = Number(token.dataset.reason || "0");
      const setWish = () => {
        const reason = document.querySelector("#reasonText");
        if (reason) {
          reason.dataset.customWish = "true";
          setText(reason, copy[lang()].wishes[index] || copy[lang()].wishBase);
        }
        stableWishes();
      };
      (window.queueMicrotask || (callback => window.setTimeout(callback, 0)))(setWish);
      window.setTimeout(setWish, 40);
      window.setTimeout(setWish, 140);
    }
    scheduleStabilize();
  }, true);

  const loadPrevious = () => {
    const script = document.createElement("script");
    script.src = previousStableScript;
    script.onload = () => {
      scheduleStabilize();
      [900, 1800, 3200].forEach(delay => window.setTimeout(stabilize, delay));
    };
    script.onerror = stabilize;
    document.head.appendChild(script);
  };

  stabilize();
  [300, 900, 1800].forEach(delay => window.setTimeout(stabilize, delay));
  document.addEventListener("close", event => {
    if (["secretModal", "endingModal", "photoModal", "galleryModal"].includes(event.target?.id)) scheduleStabilize();
  }, true);
  loadPrevious();
})();