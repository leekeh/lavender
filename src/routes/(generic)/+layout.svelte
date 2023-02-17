<script lang="ts">
	import { locale, setLocale } from '@i18n';
	import { locales } from '@i18n/i18n-util';
	import type { Locales } from '@i18n/i18n-types';
	import { loadLocaleAsync } from '@i18n/i18n-util.async';
	import { onMount } from 'svelte';

	setLocale('en');

	onMount(() => {
		const persistedLocale = window?.localStorage.getItem('preferredLocale');
		if (persistedLocale && locales.includes(persistedLocale)) {
			switchLocale(persistedLocale);
		}
	});

	const switchLocale = async (newLocale: Locales) => {
		if (!newLocale || $locale === newLocale) return;
		// load new dictionary from server
		await loadLocaleAsync(newLocale);
		// select locale
		setLocale(newLocale);
		// update `lang` attribute
		document.querySelector('html')?.setAttribute('lang', newLocale);
		//
		window?.localStorage.setItem('preferredLocale', $locale);
	};
</script>

<b>Generic layout goes here</b>

simple language switch:

<select value={$locale} on:change={(e) => switchLocale(e.target?.value)}>
	{#each locales as option}
		<option value={option}>
			{option}
		</option>
	{/each}
</select>

<p>{$locale}</p>

<slot />
