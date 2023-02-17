import { locale, setLocale } from '@i18n';
import type { Locales } from '@i18n/i18n-types';
import { loadLocaleAsync } from '@i18n/i18n-util.async';
import { get } from 'svelte/store';

export const switchLocale = async (newLocale: Locales) => {
	if (!newLocale || get(locale) === newLocale) return;
	// load new dictionary from server
	await loadLocaleAsync(newLocale);
	// select locale
	setLocale(newLocale);
	// update `lang` attribute
	document.querySelector('html')?.setAttribute('lang', newLocale);
	//
	window?.localStorage.setItem('preferredLocale', get(locale));
};
