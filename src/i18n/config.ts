import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en/translation.json';
import zh from './zh/translation.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      zh: {
        translation: zh,
      },
      en: {
        translation: en,
      },
    },
  });
