import { InitOptions } from 'i18next';

export const OPTIONS: InitOptions = {
    resources: {
        en: {
            translation: {
                mainPage: 'Home'
            }
        },
        it: {
            translation: {
                mainPage: 'Home'
            }
        },
        al: {
            translation: {
                mainPage: 'Faqja Kryesore'
            }
        }
    },
    lng: 'al',
    fallbackLng: 'al',
    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
}
