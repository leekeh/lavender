<script>
	import { locale } from '@i18n';
	import { locales } from '@i18n/i18n-util';
	import { switchLocale } from '@i18n/switchLocale';
</script>

<b>Generic layout goes here</b>

<select value={$locale} on:change={(e) => switchLocale(e.currentTarget?.value)}>
	{#each locales as option}
		<option value={option}>
			{option}
		</option>
	{/each}
</select>

<slot />
