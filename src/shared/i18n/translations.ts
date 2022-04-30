import { InitOptions } from 'i18next';

export const OPTIONS: InitOptions = {
    resources: {
        en: {
            translation: {
                mainPage: 'Home',
                contactsHeader: 'Contact & Quotations',
                jobsHeader: 'Work Positions'
            }
        },
        it: {
            translation: {
                mainPage: 'Home',
                contactsHeader: 'Contatti & Preventivi',
                jobsHeader: 'Posizioni di Lavoro'
            }
        },
        al: {
            translation: {
                mainPage: 'Faqja Kryesore',
                contactsHeader: 'Kontakt & Preventive',
                jobsHeader: 'Vende Pune'
            }
        }
    },
    lng: 'al',
    fallbackLng: 'al',
    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
}
