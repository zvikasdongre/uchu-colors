<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	import 'virtual:uno.css';
	import '@unocss/reset/tailwind-v4.css';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<section class="mx-auto max-w-screen-2xl">
	{@render children()}
</section>
