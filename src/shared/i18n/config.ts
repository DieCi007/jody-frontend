import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { OPTIONS } from './translations';
// TRANSLATIONS
export const init = () => i18n.use(initReactI18next).init(OPTIONS);
