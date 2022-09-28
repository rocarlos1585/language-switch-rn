import i18n from "i18next";
import { NativeModules, Platform } from 'react-native';
import es from './es/translation.json';
import en from './en/translation.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getData from './testFunction';
import { reactI18nextModule } from "react-i18next";



const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
};
const locale =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

i18n.locale = locale;

i18n
  .init({
    resources,
    lng:[],
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: ".", // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
