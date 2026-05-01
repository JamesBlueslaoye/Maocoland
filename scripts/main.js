const qrcodeMap = {
  xiaohongshu: {
    src: "./public/qrcodes/xiaohongshu-QR.jpg",
    alt: "小红书二维码",
    subtitle: {
      zh: "扫码关注小红书",
      en: "Scan to follow on Xiaohongshu",
    },
  },
  douyin: {
    src: "./public/qrcodes/tiktok-QR.jpg",
    alt: "抖音二维码",
    subtitle: {
      zh: "扫码关注抖音",
      en: "Scan to follow on TikTok",
    },
  },
  wechat: {
    src: "./public/qrcodes/wechat-QR.jpg",
    alt: "微信公众号二维码",
    subtitle: {
      zh: "扫码关注公众号",
      en: "Scan to follow on WeChat",
    },
  },
  instagram: {
    src: "./public/qrcodes/instagram-QR.jpg",
    alt: "Instagram 二维码",
    subtitle: {
      zh: "扫码关注Instagram",
      en: "Scan to follow on Instagram",
    },
  },
};

const socialButtons = document.querySelectorAll(".social-button");
const qrcodeImage = document.querySelector("#social-qrcode");
const qrcodeSubtitle = document.querySelector("#qrcode-subtitle");
const qrcodePopover = document.querySelector("#qrcode-popover");
const languageToggleButton = document.querySelector(".language-toggle");
const brandName = document.querySelector("#brand-name");
const footerDescription = document.querySelector("#footer-description");
const footerCopyright = document.querySelector("#footer-copyright");
const socialFollowText = document.querySelector("#social-follow-text");
const popoverTitle = document.querySelector(".qrcode-popover-title");

const copy = {
  zh: {
    languageButton: "中 / EN",
    documentLang: "zh-CN",
    title: "毛草乐园 MaocoLand",
    brandName: "毛草乐园<br />MaocoLand",
    footerDescription:
      "在毛草乐园，我们鼓励你放下那些不必要的压力，拥抱真实的自己。无论是你的生活，还是你的心情，都可以像我们的毛绒产品一样，带着一点随性和不完美。因为正是这些潦草的瞬间，才让生活变得真实而有趣。潦草一点也没关系，因为生活本来就不该被规则束缚。",
    copyright: "©MaocoLand, INC.",
    followUs: "关注我们",
    popoverTitle: "毛草乐园MaocoLand",
    socialLabels: {
      xiaohongshu: "小红书",
      douyin: "抖音",
      wechat: "微信公众号",
      instagram: "Instagram",
    },
  },
  en: {
    languageButton: "EN / 中",
    documentLang: "en",
    title: "MaocoLand",
    brandName: "MaocoLand",
    footerDescription:
      "At MaocoLand, we encourage you to let go of unnecessary pressure and embrace your true self. Whether in your life or in your mood, it can be soft, casual, and a little imperfect - just like our plush creations. These messy little moments are exactly what make life feel real and joyful. It is okay to be a little rough around the edges, because life was never meant to be tightly ruled.",
    copyright: "©MaocoLand, INC.",
    followUs: "Follow Us",
    popoverTitle: "MaocoLand",
    socialLabels: {
      xiaohongshu: "Xiaohongshu",
      douyin: "TikTok",
      wechat: "WeChat Official Account",
      instagram: "Instagram",
    },
  },
};

let currentLang = "zh";

const applyLanguage = (lang) => {
  currentLang = lang;
  const langCopy = copy[lang];
  document.documentElement.lang = langCopy.documentLang;
  document.title = langCopy.title;

  if (languageToggleButton) languageToggleButton.textContent = langCopy.languageButton;
  if (brandName) brandName.innerHTML = langCopy.brandName;
  if (footerDescription) footerDescription.textContent = langCopy.footerDescription;
  if (footerCopyright) footerCopyright.textContent = langCopy.copyright;
  if (socialFollowText) socialFollowText.textContent = langCopy.followUs;
  if (popoverTitle) popoverTitle.textContent = langCopy.popoverTitle;

  socialButtons.forEach((button) => {
    const target = button.dataset.target;
    const label = target ? langCopy.socialLabels[target] : "";
    if (label) {
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    }
  });
};

if (languageToggleButton) {
  languageToggleButton.addEventListener("click", () => {
    const nextLang = currentLang === "zh" ? "en" : "zh";
    applyLanguage(nextLang);
  });
}

const closePopover = () => {
  if (!qrcodePopover) return;
  qrcodePopover.classList.add("is-hidden");
  socialButtons.forEach((item) => item.classList.remove("active"));
};

socialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isAlreadyActive = button.classList.contains("active");
    if (isAlreadyActive) {
      closePopover();
      return;
    }

    socialButtons.forEach((item) => item.classList.remove("active"));

    const target = button.dataset.target;
    const qrcode = qrcodeMap[target];
    if (!qrcode || !qrcodeImage || !qrcodePopover) return;

    qrcodeImage.src = qrcode.src;
    qrcodeImage.alt = qrcode.alt;
    if (qrcodeSubtitle) qrcodeSubtitle.textContent = qrcode.subtitle[currentLang];

    const rect = button.getBoundingClientRect();
    const popoverWidth = 200;
    const popoverHeight = 200;
    const gap = 12;

    let left = rect.left + rect.width / 2 - popoverWidth / 2;
    const maxLeft = window.innerWidth - popoverWidth - 8;
    if (left < 8) left = 8;
    if (left > maxLeft) left = maxLeft;

    let top = rect.top - popoverHeight - gap;
    if (top < 8) top = rect.bottom + gap;

    qrcodePopover.style.left = `${left}px`;
    qrcodePopover.style.top = `${top}px`;
    qrcodePopover.classList.remove("is-hidden");
    button.classList.add("active");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePopover();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  const clickedSocial = target instanceof Element && target.closest(".social-button");
  const clickedPopover = target instanceof Element && target.closest("#qrcode-popover");
  if (!clickedSocial && !clickedPopover) {
    closePopover();
  }
});

applyLanguage("zh");
