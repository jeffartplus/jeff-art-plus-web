<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '../app.pcss';
	import Header from '$lib/ui/Header.svelte';
	import Footer from '$lib/ui/Footer.svelte';
</script>

<ParaglideJS {i18n}>
	<Header />
	<main>
		<slot />
	</main>
	<Footer data={{ startDay: 4, endDay: 0 }} />
</ParaglideJS>
