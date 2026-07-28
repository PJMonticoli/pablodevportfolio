interface Translations {
  [key: string]: string;
}

const STORAGE_KEY = "language";
const DEFAULT_LANG = "en";

const cache: Partial<Record<string, Promise<Translations>>> = {};

function loadTranslations(lang: string): Promise<Translations> {
  if (!cache[lang]) {
    cache[lang] = fetch(`/locales/${lang}/translation.json`).then((res) =>
      res.json(),
    );
  }
  return cache[lang]!;
}

function applyTranslations(translations: Translations) {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key && translations[key]) {
      el.textContent = translations[key];
    }
  });
}

async function setLanguage(lang: string) {
  const translations = await loadTranslations(lang);
  applyTranslations(translations);
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
}

function initLanguageSwitch(lang: string) {
  const switchEl = document.getElementById(
    "languageSwitch",
  ) as HTMLInputElement | null;
  if (!switchEl) return;
  switchEl.checked = lang === "es";
  switchEl.addEventListener("change", (event) => {
    const lang = (event.target as HTMLInputElement).checked ? "es" : "en";
    setLanguage(lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  initLanguageSwitch(savedLang);
  // Markup already renders the English defaults, so skip the fetch/swap
  // round-trip when there's nothing to change.
  if (savedLang !== DEFAULT_LANG) {
    setLanguage(savedLang);
  }
});
