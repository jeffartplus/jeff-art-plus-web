<script lang="ts">
	import type { PageData } from './$types';
	import Seo from '$lib/ui/components/SEO.svelte';
	import { ArrowLeft } from 'lucide-svelte';
	import { urlFor } from '$lib/sanity';
	import * as m from '$lib/paraglide/messages';
	import { getText } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	const { conversation, seo } = data;
	const { description, date, images, artists } = conversation;
	const arts = artists.map((artist) => `${artist.name} ${artist.lastName}`);
	const artistsName = arts.join(', ');

	let imageIndex = 0;
	$: selectedImage = images[imageIndex];

	function selectNextImage() {
		if (imageIndex == images.length - 1) {
			imageIndex = 0;
		}
		imageIndex = imageIndex + 1;
	}
	onMount(() => {
		const interval = setInterval(selectNextImage, 10000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<Seo data={seo} />

<section>
	<hr class="border-t border-t-zinc-200" />
	<div class="flex h-full w-full justify-end">
		<a
			href="/conversations"
			class="w-fit h-fit p-12 hover:bg-slate-50 text-gray-600 hover:text-black rounded-br-xl transition-colors"
			><ArrowLeft /></a
		>
		<div class="my-12 grow flex justify-center">
			<img src={urlFor(selectedImage).height(720).url()} alt="" height="720" class="cover p-8" />
		</div>
		<header class="flex flex-col gap-6 bg-muted w-[30rem] p-8 md:py-16 md:px-12 lg:py-20 lg:px-14">
			<div class="flex flex-col gap-3">
				<h1 class="text-2xl md:text-3xl lg:text-4xl">{m.conversation_label()}</h1>
				<h2 class="text-lg md:text-xl lg:text-2xl text-gray-800 italic">
					{m.conversation_with({ names: artistsName })}
				</h2>
				<!-- <p>{year}</p> -->
			</div>
			<hr />
			<p class="text-black">{getText(description)}</p>
			<hr />
			{#if images.length > 1}
				<div class="flex gap-4 flex-wrap">
					{#each images as image, index}
						<button
							on:click={() => {
								imageIndex = index;
							}}
							data-active={index == imageIndex}
							class="data-[active=true]:border border-zinc-500"
						>
							<picture>
								<img src={urlFor(image).height(100).url()} alt="" height="100" />
							</picture>
						</button>
					{/each}
				</div>
				<hr />
			{/if}
		</header>
	</div>
</section>

<style>
	.cover {
		height: calc(100vh - 100px);
	}
</style>
