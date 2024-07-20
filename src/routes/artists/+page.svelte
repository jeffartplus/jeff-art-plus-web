<script lang="ts">
	import type { PageData } from './$types';
	import * as m from '$lib/paraglide/messages';

	import Section from '$lib/ui/Section.svelte';
	import SEO from '$lib/ui/components/SEO.svelte';

	export let data: PageData;
	const seo = {
		title: `${m.nav_exhibitions()} - Jeff Art Plus`,
		description: ''
	};

	let artists = data.artists;
	artists = [artists[0], artists[0], artists[0]];
	console.log(artists);
</script>

<SEO data={seo} />

<Section title={m.nav_artists()}>
	<ul
		class="grid mx-8 md:mx-12 lg:mx-14 py-8 grid-cols-2 sm md:grid-cols-3 xl:grid-cols-5 gap-x-8 md:gap-x-16 gap-y-10 md:gap-y-20 lg:gap-y-20 lg:gap-x-20"
	>
		{#each artists as artist}
			<li>
				<a
					href="artists/{artist.slug.current}"
					class="w-full flex flex-col items-start gap-y-4 text-sm md:text-base lg:text-lg tracking-tight font-light underline-offset-4 hover:underline"
				>
					<picture>
						<!-- <source srcset="" media=""> -->
						<img
							src={artist.imageUrl}
							alt=""
							srcset=""
							width="360"
							height="360"
							class="aspect-square"
							loading="lazy"
							on:error={(e) => console.log(e)}
						/>
					</picture>
					{artist.name}
				</a>
			</li>
		{/each}
	</ul>
</Section>
