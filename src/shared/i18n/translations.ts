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
                },
                eco: {
                    title: 'Ecological & Environmental Services',
                    cleaning: 'Sewer and Drain Cleaning Services',
                    vehicles: 'Intervetions with a fleet of different size machines for every use case',
                    oils: 'Boat waste and oil treatment & discharge',
                    maintenance: 'Sewer pipe treatment and maintenance for Institutions and Condominiums',
                    sanitation: 'Sanification, disinfestation',
                    waste: 'Inert waste collection'
                }
            }
        },
        it: {
            translation: {
                mainPage: 'Home',
                contactsHeader: 'Contatti & Preventivi',
                jobsHeader: 'Lavora Con Noi',
                companyDescription: 'Construction & Services',
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
                },
                eco: {
                    title: 'Servizi Ecologici e Ambientali',
                    cleaning: 'Autospurgo pozzi neri e sturamenti impianti idrici e fognanti',
                    vehicles: 'Interventi con una flotta di macchine di vari dimensioni',
                    oils: 'Trattamento e scarico dei rifiuti e l\'olio delle barce',
                    maintenance: 'Manutenzione dei condotti fognari per enti e condomini',
                    sanitation: 'Sanificazione e disinfestazione',
                    waste: 'Ritiro rifiuti inerti'
                }
            }
        },
        al: {
            translation: {
                mainPage: 'Faqja Kryesore',
                contactsHeader: 'Kontakt & Preventive',
                jobsHeader: 'Puno Me Ne',
                companyDescription: 'Construction & Services',
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
                },
                eco: {
                    title: 'Shërbime Ekologjike dhe Mjedisore',
                    cleaning: 'Pastrim dhe zhbllokim kanalizimesh te ujërave te zeza',
                    vehicles: 'Ndërhyrje me një flotë makinash të përmasave të ndryshme për çdo situatë',
                    oils: 'Trajtim dhe shkarkim i ujërave të zeza dhe vajrave nga jahte dhe anije',
                    maintenance: 'Mirëmbajtje e kanalizimeve për institucione',
                    sanitation: 'Sanifikim dhe dezinfektim ambientesh',
                    waste: 'Mbledhje mbetjesh inerte'
                }
            }
        }
    },
    lng: 'al',
    fallbackLng: 'al',
    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
}
