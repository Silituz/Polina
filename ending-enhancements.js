(() => {
  const endings = {
    en: {
      good: {
        label: "Good ending",
        title: "The birthday pack approved this route",
        copy: "You followed the warm path, so the final wish arrives bright, loyal, and full of heart."
      },
      normal: {
        label: "Normal ending",
        title: "A little chaos, still a good birthday",
        copy: "The wolves noticed some birthday resistance, but the mission still reached Polina with care."
      },
      evil: {
        label: "Evil ending",
        title: "The mischievous pack took over",
        copy: "Too many no-clicks woke the dramatic side of the wolves. Still, the wish stays warm."
      }
    },
    ru: {
      good: {
        label: "Хорошая концовка",
        title: "Стая одобрила этот путь",
        copy: "Ты прошла по теплой дороге, и финальное пожелание пришло ярким, верным и от сердца."
      },
      normal: {
        label: "Обычная концовка",
        title: "Немного хаоса, но день все равно твой",
        copy: "Волки заметили немного сопротивления, но миссия все равно дошла до тебя с теплом."
      },
      evil: {
        label: "Злая концовка",
        title: "Хитрая стая захватила финал",
        copy: "Слишком много «нет» разбудило драматичных волков. Но пожелание все равно теплое."
      }
    }
  };

  const heartColors = ["heart-white", "heart-blue", "heart-red"];
  let noCount = 0;
  let heartIndex = 0;
  let scheduled = false;

  const lang = () => document.documentElement.lang === "ru" ? "ru" : "en";
  const endingKey = () => noCount <= 1 ? "good" : noCount <= 4 ? "normal" : "evil";

  const transformBurst = node => {
    if (!(node instanceof HTMLElement) || !node.classList.contains("burst") || node.classList.contains("heart-burst")) return;
    node.textContent = "";
    node.className = `burst heart-burst ${heartColors[heartIndex % heartColors.length]}`;
    node.style.setProperty("--spin", `${Math.random() * 80 - 40}deg`);
    heartIndex += 1;
  };

  const transformBursts = () => {
    document.querySelectorAll(".burst:not(.heart-burst)").forEach(transformBurst);
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
    const ending = endings[lang()][key];
    banner.className = `ending-banner ending-${key}`;
    banner.querySelector(".ending-label").textContent = ending.label;
    banner.querySelector("strong").textContent = ending.title;
    banner.querySelector("small").textContent = ending.copy;
  };

  const refresh = () => {
    scheduled = false;
    transformBursts();
    updateEndingBanner();
  };

  const scheduleRefresh = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(refresh);
  };

  document.addEventListener("pointerenter", event => {
    if (event.target.closest?.("[data-no]")) {
      noCount += 1;
      scheduleRefresh();
    }
  }, true);

  document.addEventListener("click", event => {
    if (event.target.closest?.("#restartButton")) noCount = 0;
    if (event.target.closest?.("[data-no]")) noCount += 1;
    scheduleRefresh();
  }, true);

  document.addEventListener("click", event => {
    if (event.target.closest?.(".lang-option")) scheduleRefresh();
  });

  window.addEventListener("load", scheduleRefresh, { once: true });
  scheduleRefresh();
})();
