import en from "./en.json";
import es from "./es.json";

export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];
export type Dict = typeof en;

const dicts: Record<Lang, Dict> = { en, es };

export const getDict = (lang: Lang): Dict => dicts[lang];

export const homePath = (lang: Lang): string => (lang === "en" ? "/" : "/es/");

export const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  es: "Español",
};
