import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en-US.json';
import pt from './locales/pt-BR.json';

const resources = {
    'pt-BR': pt,
    'en-US': en,
};

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'pt-BR',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources,
    });

export default i18n;
