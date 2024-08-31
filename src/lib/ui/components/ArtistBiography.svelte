<script lang="ts">
	import { getText } from '$lib/utils';
	import * as m from "$lib/paraglide/messages"

	export let summary;

	let toggle = false;
</script>

<div class="container py-16 px-4 md:px-6 lg:py-24 mx-auto">
	<h2 class="text-3xl font-bold tracking-tight">{m.about_artist()}</h2>
	<p class="mt-6  max-w-none leading-loose">{getText(summary)}</p>
	<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-6">{m.download_cv()}</button>
</div>
