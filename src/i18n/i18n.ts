import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// en locale imports
import commonEn from "./locales/en/common.json";
import validationEn from "./locales/en/validation.json";

// de locale imports
import validationDe from "./locales/de/validation.json";
import commonDe from "./locales/de/common.json";

// ar locale imports
import validationAr from "./locales/ar/validation.json";
import commonAr from "./locales/ar/common.json";

export const defaultNS = "common";

export const resources = {
  en: {
    common: commonEn,
    validation: validationEn,
  },
  de: {
    common: commonDe,
    validation: validationDe,
  },
  ar: {
    common: commonAr,
    validation: validationAr,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    ns: ["common", "validation"],
    defaultNS,
    resources,
  });
