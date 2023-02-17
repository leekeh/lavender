<script lang="ts">
	import { onMount } from 'svelte';
	import { setLocale } from '@i18n';
	import { switchLocale } from '@i18n/switchLocale';
	import { locales } from '@i18n/i18n-util';

	setLocale('en');

	onMount(() => {
		const persistedLocale = window?.localStorage.getItem('preferredLocale');
		if (persistedLocale && locales.includes(persistedLocale)) {
			switchLocale(persistedLocale);
		}
	});
</script>

<slot />
