<script>
	import { onMount } from 'svelte';
	import { switchLocale } from '@i18n/switchLocale';
	import { isLocale } from '@i18n/i18n-util';

	onMount(() => {
		const deviceLanguage = window.navigator.language.slice(
			0,
			window.navigator.language.indexOf('-')
		);
		switchLocale(
			window?.localStorage.getItem('preferredLocale') ??
				(isLocale(deviceLanguage) ? deviceLanguage : 'en')
		);
	});
</script>

<slot />
