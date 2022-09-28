import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from './src/Localization/es/translation.json';
import en from './src/Localization/en/translation.json';
import it from './src/Localization/it/translation.json';
import fr from './src/Localization/fr/translation.json';

//empty for now
const resources = {
    en: {
      translation: en
    },
    es: {
      translation: es
    },
    it: {
      translation: it
    },
    fr: {
      translation: fr
    }
  };

i18n.use(initReactI18next).init({
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;