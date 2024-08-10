<script lang="ts">
	import { urlFor } from '$lib/sanity';
	import * as m from '$lib/paraglide/messages';
	import Seo from '$lib/ui/components/SEO.svelte';
	import Section from '$lib/ui/Section.svelte';
	import { getText } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;

	const { artist, artwork, seo } = data;
	const { name: artistName, slug } = artist;
	const { name, images, createdOn, description } = artwork;

	const messageText = encodeURI(
		`Hola buen día, sigue disponible la obra "${name}" del artista ${artistName}`
	);
	const wassapLink = `https://wa.me/5351739482?text=${messageText}`;
	const year = new Date(createdOn).getFullYear();
	const artistUrl = `/artists/${slug}`;
</script>

<Seo data={seo} />

<section>
	<hr class="border-t border-t-zinc-200" />
	<div class="flex h-full w-full justify-end">
		<div class="flex justify-center items-center grow">
			<img src={urlFor(images[0]).height(720).url()} alt="" height="720" class="cover" />
		</div>
		<header class="flex flex-col gap-6 bg-stone-100 p-8 md:py-16 md:px-12 lg:py-20 lg:px-14">
			<div class="flex flex-col gap-3">
				<h1 class="text-2xl md:text-3xl lg:text-4xl">
					<a href={artistUrl} class="hover:underline">{artistName}</a>
				</h1>
				<h2 class="text-lg md:text-xl lg:text-2xl text-gray-800 italic">{name}</h2>
				<p>{year}</p>
			</div>
			<hr />
			<p class="text-black">{getText(description)}</p>
			<hr />
			{#if images.length > 1}
				<div>
					{#each images.slice(1) as image}
						<picture>
							<img src={urlFor(image).width(50).url()} alt="" width="50" />
						</picture>
					{/each}
				</div>
				<hr />
			{/if}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={wassapLink}
				class="px-4 py-2 border text-center bg-black text-white w-fit">{m.enquire()}</a
			>
		</header>
	</div>
</section>

<style>
	.cover {
		height: calc(100% - 100px);
	}
	header {
		height: calc(100vh - 130px);
	}
</style>
