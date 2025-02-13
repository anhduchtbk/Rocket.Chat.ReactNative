const localeKeys: { [key: string]: string } = {
	en: 'en',
	ru: 'ru',
	'pt-BR': 'pt-br',
	'zh-CN': 'zh-cn',
	fr: 'fr',
	de: 'de',
	'pt-PT': 'pt',
	it: 'it',
	ja: 'ja',
	nl: 'nl',
	'es-ES': 'es',
	'zh-TW': 'zh-tw',
	vi: 'vi'
};

export const toMomentLocale = (locale: string): string => localeKeys[locale];
