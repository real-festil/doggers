import i18n from 'i18next';

import translationEn from './en/translation.json';
import translationRu from './ru/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
    resources,
    lng: 'ru', // default language to use.
    // if you're using a language detector, do not define the lng option
    // debug: true,
  });
export default i18n;
