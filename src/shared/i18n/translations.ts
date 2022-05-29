import { InitOptions } from 'i18next';

export const OPTIONS: InitOptions = {
    resources: {
        en: {
            translation: {
                mainPage: 'Home',
                contactsHeader: 'Contact & Quotations',
                jobsHeader: 'Work With Us',
                companyDescription: 'Construction & Services',
                companyMoto: 'Quality & Reliability without compromises.',
                companySince: 'Since 1997.',
                services: {
                    title: 'Services, Equipment & more',
                    paving: 'Road paving, in house production at all stages',
                    plants: 'Asphalt & Bituminous Emulsion production plants',
                    signs: 'Vertical and Horizontal traffic signs',
                    maintenance: 'Road maintenance',
                    constructions: 'Civil and Industrial constructions and reconstruction',
                    tools: 'Full range of construction vehicles and tools',
                    certifications: 'Certified for all provided services'
                }
            }
        },
        it: {
            translation: {
                mainPage: 'Home',
                contactsHeader: 'Contatti & Preventivi',
                jobsHeader: 'Lavora Con Noi',
                companyDescription: 'Costruzioni & Servizi',
                companyMoto: 'Qualità & Affidabilità senza compromessi.',
                companySince: 'Dal 1997.',
                services: {
                    title: 'Servizi, Attrezzatura & altro',
                    paving: 'Pavimentazione stradale, con produzione interna di tutti i componenti',
                    plants: 'Impianti per la produzione di Emulsioni Bituminose & Asfalto',
                    signs: 'Segnaletica stradale Verticale e Orizzontale',
                    maintenance: 'Manutenzione strade',
                    constructions: 'Costruzioni civili e industriali',
                    tools: 'Flotta completa di veicoli e strumenti per l\'edilizia',
                    certifications: 'Certificazioni per tutti i servizi forniti'
                }
            }
        },
        al: {
            translation: {
                mainPage: 'Faqja Kryesore',
                contactsHeader: 'Kontakt & Preventive',
                jobsHeader: 'Puno Me Ne',
                companyDescription: 'Ndërtim & Shërbime',
                companyMoto: 'Cilësi dhe Siguri pa kompromise.',
                companySince: 'Që pres 1997.',
                services: {
                    title: 'Shërbime, Pajisje & te tjera',
                    paving: 'Asfaltim rrugësh, prodhim i të gjithë komponentëve të nevojshëm në çdo fazë',
                    plants: 'Fabrikë për prodhim Asfalti dhe Emulsion Bituminoz',
                    signs: 'Sinjalistikë rrugore Vertikale dhe Horizontale',
                    maintenance: 'Mirëmbajtje rrugësh',
                    constructions: 'Rikonstruksione dhe ndërtime civile e industriale',
                    tools: 'Flotë e kompletuar makinerish, mjetesh dhe pajisjesh',
                    certifications: 'Të certifikuar për të gjitha shërbimet e ofruara'
                }
            }
        }
    },
    lng: 'al',
    fallbackLng: 'al',
    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
}
