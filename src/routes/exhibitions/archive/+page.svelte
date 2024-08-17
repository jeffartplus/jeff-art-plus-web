<script lang="ts">
	import { urlFor } from '$lib/sanity';
	import type { Artist } from '$lib/types';
	import { getText, getRangeDateString } from '$lib/utils';
	import type { PageData } from './$types';
	import { Pagination } from 'bits-ui';

	export let data: PageData;
	const { exhibitions } = data;

	const joinArtistName = (artists: Artist[]) => {
		const nameOfTheArtists = artists.map((artist) => {
			return `${artist.name} ${artist.lastName}`;
		});
		return nameOfTheArtists.join(', ');
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

<Pagination.Root count={data.total} let:pages perPage={2}>
	<Pagination.PrevButton />
	{#each pages as page (page.key)}
		<Pagination.Page {page} asChild let:builder>
			<a href="archive?offset={(page.value - 1) * 2}" {...builder} data-sveltekit-replacestate
				>{page.value}</a
			>
		</Pagination.Page>
	{/each}
	<Pagination.NextButton />
</Pagination.Root>
