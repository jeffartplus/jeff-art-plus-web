<script lang="ts">
	import type { PageData } from './$types';

	import ArtistBiography from '$lib/ui/components/ArtistBiography.svelte';
	import Box from './Box.svelte';
	import { urlFor } from '$lib/sanity';
	import Section from '$lib/ui/Section.svelte';
	import Seo from '$lib/ui/components/SEO.svelte';
	import { setArtistContext } from './context';

	import * as m from '$lib/paraglide/messages';
	import BoxItem from './BoxItem.svelte';
	import ExhibitionItem from './ExhibitionItem.svelte';

	export let data: PageData;
	const { artist, seo } = data;

	const { name, summary, biography, image, artWorks, availableArtWorks, exhibitions } = artist;

	setArtistContext(artist);
</script>

<Seo data={seo} />
<Section class="mb-4">
	<header
		slot="header"
		class="flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 justify-evenly items-center bg-stone-100 py-24"
	>
		<div class="flex flex-col text-center gap-4">
			<h1 class="font-semibold">{name}</h1>
			<!-- <p>B. 1974</p> -->
		</div>
		<img
			src={image ? urlFor(image).width(382).url() : '/avatar_fallback.jpg'}
			width="382"
			height="575"
			alt="Fotografia de José Emilio Fuentes Fonseca"
			class="max-h-[575px] rounded-sm"
		/>
	</header>

	<ArtistBiography {summary} {biography} />
	{#if artWorks.length > 0}
		<Box title={m.artwork_label()} items={artWorks} path="/artworks" component={BoxItem} />
	{/if}
	{#if availableArtWorks.length > 0}
		<Box
			title={m.available_artwork_label()}
			items={availableArtWorks}
			path="/artworks?available=true"
			component={BoxItem}
		/>
	{/if}
	{#if exhibitions.length > 0}
		<Box
			title={m.nav_exhibitions()}
			items={exhibitions}
			path="/exhibitions"
			component={ExhibitionItem}
		/>
	{/if}
</Section>
<!-- "/images/jeff.avif" -->
