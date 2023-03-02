import { locale, setLocale } from '@i18n';
import { loadLocaleAsync } from '@i18n/i18n-util.async';
import { get } from 'svelte/store';
import { isLocale } from './i18n-util';

export const switchLocale = async (newLocale: string) => {
	if (!isLocale(newLocale) || get(locale) === newLocale) return;
	// load new dictionary from server
	await loadLocaleAsync(newLocale);
	// select locale
	setLocale(newLocale);
	// update `lang` attribute
	document?.querySelector('html')?.setAttribute('lang', newLocale);
	//cache new locale preference
	window?.localStorage.setItem('preferredLocale', newLocale);
};
