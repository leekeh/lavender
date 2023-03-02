import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'@util/*': 'src/util/*',
			'@i18n': 'src/i18n/i18n-svelte',
			'@i18n/*': 'src/i18n/*'
		}
	}
};

export default config;
