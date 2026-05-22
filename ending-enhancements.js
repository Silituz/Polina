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
        label: "\u0425\u043e\u0440\u043e\u0448\u0430\u044f \u043a\u043e\u043d\u0446\u043e\u0432\u043a\u0430",
        title: "\u0421\u0442\u0430\u044f \u043e\u0434\u043e\u0431\u0440\u0438\u043b\u0430 \u044d\u0442\u043e\u0442 \u043f\u0443\u0442\u044c",
        copy: "\u0422\u044b \u043f\u0440\u043e\u0448\u043b\u0430 \u043f\u043e \u0442\u0435\u043f\u043b\u043e\u0439 \u0434\u043e\u0440\u043e\u0433\u0435, \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u0448\u043b\u043e \u044f\u0440\u043a\u0438\u043c, \u0432\u0435\u0440\u043d\u044b\u043c \u0438 \u043e\u0442 \u0441\u0435\u0440\u0434\u0446\u0430."
      },
      normal: {
        label: "\u041e\u0431\u044b\u0447\u043d\u0430\u044f \u043a\u043e\u043d\u0446\u043e\u0432\u043a\u0430",
        title: "\u041d\u0435\u043c\u043d\u043e\u0433\u043e \u0445\u0430\u043e\u0441\u0430, \u043d\u043e \u0434\u0435\u043d\u044c \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0442\u0432\u043e\u0439",
        copy: "\u0412\u043e\u043b\u043a\u0438 \u0437\u0430\u043c\u0435\u0442\u0438\u043b\u0438 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0441\u043e\u043f\u0440\u043e\u0442\u0438\u0432\u043b\u0435\u043d\u0438\u044f, \u043d\u043e \u043c\u0438\u0441\u0441\u0438\u044f \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0434\u043e\u0448\u043b\u0430 \u0434\u043e \u0442\u0435\u0431\u044f \u0441 \u0442\u0435\u043f\u043b\u043e\u043c."
      },
      evil: {
        label: "\u0417\u043b\u0430\u044f \u043a\u043e\u043d\u0446\u043e\u0432\u043a\u0430",
        title: "\u0425\u0438\u0442\u0440\u0430\u044f \u0441\u0442\u0430\u044f \u0437\u0430\u0445\u0432\u0430\u0442\u0438\u043b\u0430 \u0444\u0438\u043d\u0430\u043b",
        copy: "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u00ab\u043d\u0435\u0442\u00bb \u0440\u0430\u0437\u0431\u0443\u0434\u0438\u043b\u043e \u0434\u0440\u0430\u043c\u0430\u0442\u0438\u0447\u043d\u044b\u0445 \u0432\u043e\u043b\u043a\u043e\u0432. \u041d\u043e \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0442\u0435\u043f\u043b\u043e\u0435."
      }
    }
  };

  const heartColors = ["heart-white", "heart-blue", "heart-red"];
  let noCount = 0;
  let heartIndex = 0;

  const lang = () => document.documentElement.lang === "ru" ? "ru" : "en";
  const endingKey = () => noCount <= 1 ? "good" : noCount <= 4 ? "normal" : "evil";

  const transformBurst = node => {
    if (!(node instanceof HTMLElement) || !node.classList.contains("burst") || node.classList.contains("heart-burst")) return;
    node.textContent = "";
    node.className = `burst heart-burst ${heartColors[heartIndex % heartColors.length]}`;
    node.style.setProperty("--spin", `${Math.random() * 80 - 40}deg`);
    heartIndex += 1;
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

  const observer = new MutationObserver(records => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        transformBurst(node);
        node.querySelectorAll?.(".burst").forEach(transformBurst);
      }
    }
    updateEndingBanner();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  document.addEventListener("pointerenter", event => {
    if (event.target.closest?.("[data-no]")) {
      noCount += 1;
      updateEndingBanner();
    }
  }, true);

  document.addEventListener("click", event => {
    if (event.target.closest?.("#restartButton")) noCount = 0;
    if (event.target.closest?.("[data-no]")) noCount += 1;
    window.setTimeout(updateEndingBanner, 0);
  }, true);

  document.addEventListener("click", event => {
    if (event.target.closest?.(".lang-option")) window.setTimeout(updateEndingBanner, 0);
  });

  updateEndingBanner();
})();
