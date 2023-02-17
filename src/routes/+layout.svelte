<script>
	import { onMount } from 'svelte';
	import { switchLocale } from '@i18n/switchLocale';
	import { locales } from '@i18n/i18n-util';

	switchLocale('en');

	onMount(() => {
		const persistedLocale = window?.localStorage.getItem('preferredLocale');
		//@ts-ignore Manual typechecking
		if (persistedLocale && locales.includes(persistedLocale)) {
			//@ts-ignore Manual typechecking
			switchLocale(persistedLocale);
		} else {
			const deviceLanguage = window.navigator.language;
			const languageCode = deviceLanguage.slice(0, deviceLanguage.indexOf('-'));
			//@ts-ignore Manual typechecking
			if (languageCode && locales.includes(languageCode)) {
				//@ts-ignore Manual typechecking
				switchLocale(languageCode);
			}
		}
	});
</script>

<slot />
