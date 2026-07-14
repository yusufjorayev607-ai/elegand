import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en/translation.json'
import ru from './locales/ru/translation.json'
import tr from './locales/tr/translation.json'
import uz from './locales/uz/translation.json'
import zh from './locales/zh/translation.json'

i18n
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			uz: {
				translation: uz,
			},
			ru: {
				translation: ru,
			},
			en: {
				translation: en,
			},
			zh: {
				translation: zh,
			},
			tr: {
				translation: tr,
			},
		},

		fallbackLng: 'uz',

		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
		},

		interpolation: {
			escapeValue: false,
		},
	})
document.documentElement.lang = i18n.language

i18n.on('languageChanged', lng => {
	document.documentElement.lang = lng
})
export default i18n
