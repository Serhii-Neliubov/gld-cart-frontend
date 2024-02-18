import i18n, { InitOptions } from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const i18nConfig: InitOptions = {
  fallbackLng: "en",
  debug: true,
  detection: {
    order: ["queryString", "cookie"],
    caches: ["cookie"],
  },
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: 'src/assets/locales/{{lng}}/{{ns}}.json' // Замените 'your_custom_path' на путь к вашей новой папке
  }
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
