<script lang="ts">
	import Gallery from '$lib/ui/components/Gallery.svelte';
	import Hero from '$lib/ui/components/Hero.svelte';
	import Artist from '$lib/ui/sections/Artist.svelte';
	import ArtWork from '$lib/ui/sections/ArtWork.svelte';

	import * as m from '$lib/paraglide/messages';
	import SEO from '$lib/ui/components/SEO.svelte';
</script>

<SEO
	data={{
		title: 'Jeff Art Plus',
		description: ''
	}}
/>

<Hero />
<!-- <ArtWork /> -->
<Gallery />
<Artist />
