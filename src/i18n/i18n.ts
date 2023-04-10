import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import et from './translations/et.json';
import en from './translations/en.json';
import ru from './translations/ru.json';

const resources = {
    en: {
        translation: en,
    },
    et: {
        translation: et,
    },
    ru: {
        translation: ru,
    },
};

export const languages = [
    {
        iso: 'en',
        name: 'English',
    },
    {
        iso: 'et',
        name: 'Eesti',
    },
    {
        iso: 'ru',
        name: 'Русский',
    }
]

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3', // <-- added for i18next::pluralResolver on android
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    parseMissingKeyHandler: (t: string) => {
        return '❌' + t;
    },
});

export default i18n;