<script lang="ts">
	import { urlFor } from '$lib/sanity';
	import type { Artist } from '$lib/types';
	import { getText, getRangeDateString } from '$lib/utils';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { Pagination } from 'bits-ui';

	export let data: PageData;
	let { total, exhibitions } = data;

	const joinArtistName = (artists: Artist[]) => {
		const nameOfTheArtists = artists.map((artist) => {
			return `${artist.name} ${artist.lastName}`;
		});
		return nameOfTheArtists.join(', ');
	};

	const getExhibitionsByOffset = async (page: number) => {
		const offset = (page - 1) * 20;
		const response = await fetch(`/api/v1/exhibitions?offset=${offset}`);
		if (!response.ok) {
			exhibitions = [];
		}
		const data = await response.json();
		exhibitions = data.exhibitions;
	};
</script>

<ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
	{#each exhibitions as exhibition}
		<li class="flex gap-6">
			<a href="archive/{exhibition.slug.current}">
				<img
					src={urlFor(exhibition.cover).width(200).height(158).url()}
					alt=""
					width="200"
					height="158"
					class="hover:cursor-pointer min-w-[200px]"
				/>
			</a>
			<header class="flex flex-col justify-between">
				<a href="archive/{exhibition.slug.current}" class="hover:underline">
					<h1 class="text-xl">{joinArtistName(exhibition.artists)}</h1>
					<h2 class="text-lg italic">{getText(exhibition.name)}</h2>
				</a>
				<p class="test-lg text-gray-800">
					{getRangeDateString(new Date(exhibition.start_date), new Date(exhibition.end_date))}
				</p>
			</header>
		</li>
		<!-- <a href="#">
			
		</a> -->
	{/each}
</ul>

{#if total > 20}
	<Pagination.Root
		count={total}
		let:pages
		let:range
		perPage={20}
		class="flex justify-center items-center gap-4 lg:mt-10 md:mt-9"
		onPageChange={getExhibitionsByOffset}
	>
		{#if range.start != 0}
			<Pagination.PrevButton class="flex">
				<ChevronLeft /><span>Anterior</span>
			</Pagination.PrevButton>
		{/if}
		{#each pages as pag (pag.key)}
			<Pagination.Page page={pag} asChild let:builder>
				{#if pag.type === 'ellipsis'}
					<div class="text-[15px] font-medium text-foreground-alt">...</div>
				{:else}
					<button
						{...builder}
						use:builder.action
						class="inline-flex size-10 items-center justify-center rounded-[9px] bg-transparent text-[15px] font-medium hover:bg-dark-10 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-transparent data-[selected]:bg-zinc-800 data-[selected]:text-zinc-100"
						>{pag.value}</button
					>
				{/if}
			</Pagination.Page>
		{/each}
		{#if range.end < total}
			<Pagination.NextButton class="flex">
				<span>Siguiente</span><ChevronRight />
			</Pagination.NextButton>
		{/if}
	</Pagination.Root>
{/if}
