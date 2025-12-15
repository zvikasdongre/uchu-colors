import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import extractorSvelte from '@unocss/extractor-svelte';
import UnoCSS from 'unocss/vite';

export default defineConfig({
	plugins: [
		// @ts-ignore -- no idea why it throws a type error, works just fine
		UnoCSS({
			extractors: [extractorSvelte()]
		}),
		sveltekit()
	]
});
