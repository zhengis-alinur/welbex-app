import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { RU } from '../constants'
import translations from '.';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
		resources: {
      en: {
        translation: translations.en,
      },
			ru: {
        translation: translations.ru,
      },
    },
    lng: RU,
		fallbackLng: RU,

    interpolation: {
      escapeValue: false,},
  });

export default i18n;