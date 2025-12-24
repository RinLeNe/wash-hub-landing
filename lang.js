const LANG_DATA = {
  vi: {
    "meta.title": "Giặt Sấy Nhanh 24/7 – the Wash Hub",
    "meta.desc": "Giặt sấy nhanh 24/7 – sạch thơm, tiện lợi. Nhiều chi nhánh, click xem bản đồ.",

    "site.tagline": "GIẶT SẤY NHANH 24/7 • EXPRESS SELF SERVICE",

    "nav.services": "Dịch vụ",
    "nav.process": "Quy trình",
    "nav.pricing": "Bảng giá",
    "nav.branches": "Chi nhánh",

    "btn.call": "Gọi ngay",
    "btn.book": "Đặt lịch",
    "btn.select_branch": "Chọn chi nhánh",
    "btn.view_price": "Xem bảng giá",

    "hero.badge": "GIẶT SẤY NHANH • 24/7",
    "hero.sub": "FAST • CLEAN • AFFORDABLE • CONVENIENT\n24/7 | SELF SERVICE | LAUNDROMAT",

    "service.title": "Dịch vụ nổi bật",
    "service.desc": "Giặt sấy nhanh – sạch thơm – tiện lợi theo phong cách landing dịch vụ.",
    "service.wash": "Giặt + Sấy",
    "service.wash.desc": "Nhanh – sạch – tiết kiệm thời gian",
    "service.soft": "Chăn mền",
    "service.soft.desc": "Xử lý đồ lớn, khử mùi sâu",
    "service.premium": "Đồ cao cấp",
    "service.premium.desc": "Giặt riêng, an toàn chất liệu",

    "footer.copy": "© the Wash Hub • Giặt sấy nhanh 24/7"
  },

  en: {
    "meta.title": "Fast Laundry 24/7 – the Wash Hub",
    "meta.desc": "Fast laundry service 24/7. Clean, convenient, multiple locations.",

    "site.tagline": "FAST LAUNDRY 24/7 • EXPRESS SELF SERVICE",

    "nav.services": "Services",
    "nav.process": "Process",
    "nav.pricing": "Pricing",
    "nav.branches": "Locations",

    "btn.call": "Call now",
    "btn.book": "Book service",
    "btn.select_branch": "Select location",
    "btn.view_price": "View pricing",

    "hero.badge": "FAST LAUNDRY • 24/7",
    "hero.sub": "FAST • CLEAN • AFFORDABLE • CONVENIENT\n24/7 | SELF SERVICE | LAUNDROMAT",

    "service.title": "Our Services",
    "service.desc": "Fast, clean and convenient laundry service.",
    "service.wash": "Wash & Dry",
    "service.wash.desc": "Fast – clean – time saving",
    "service.soft": "Blankets",
    "service.soft.desc": "Large items, deep deodorizing",
    "service.premium": "Premium Care",
    "service.premium.desc": "Separate wash, fabric-safe",

    "footer.copy": "© the Wash Hub • Fast Laundry 24/7"
  }
};
function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (LANG_DATA[lang][key]) el.innerText = LANG_DATA[lang][key];
  });

  document.querySelectorAll("[data-i18n-content]").forEach(el => {
    const key = el.dataset.i18nContent;
    if (LANG_DATA[lang][key]) el.setAttribute("content", LANG_DATA[lang][key]);
  });

  // 🔥 ACTIVE BUTTON
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("is-active", btn.textContent.toLowerCase() === lang);
  });

  localStorage.setItem("lang", lang);
}

function detectLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;
  return navigator.language.startsWith("en") ? "en" : "vi";
}
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    applyLang(lang);

    document.querySelectorAll(".lang-btn").forEach(b =>
      b.classList.remove("is-active")
    );
    btn.classList.add("is-active");
  });
});

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (LANG_DATA[lang][key]) el.innerText = LANG_DATA[lang][key];
  });

  document.querySelectorAll("[data-i18n-content]").forEach(el => {
    const key = el.dataset.i18nContent;
    if (LANG_DATA[lang][key]) el.setAttribute("content", LANG_DATA[lang][key]);
  });

  localStorage.setItem("lang", lang);
}

function setLang(lang) {
  applyLang(lang);
}

applyLang(detectLanguage());