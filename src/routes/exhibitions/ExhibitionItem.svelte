<script lang="ts">
	import { languageTag } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { MoveRight } from 'lucide-svelte';

	import type { Exhibition } from '$lib/types';
	import { getRangeDateString, getText } from '$lib/utils';
	import { urlFor } from '$lib/sanity';
	import CalendarLink from '$lib/ui/components/CalendarLink.svelte';

	export let exhibition: Exhibition;
	export let isComing: boolean = false;

	const artists = exhibition.artists.map((artist) => {
		return `${artist.name} ${artist.lastName}`;
	});
	const startDate = new Date(exhibition.start_date);
	const endDate = new Date(exhibition.end_date);

	const rangeDate = getRangeDateString(startDate, endDate, languageTag());
</script>

<li class="flex flex-col justify-between gap-3">
	<img
		src={urlFor(exhibition.cover).width(960).height(540).url()}
		alt=""
		width="960"
		height="540"
		class="object-cover w-full aspect-video rounded-sm"
	/>
	<header class="flex flex-col justify-between pt-8 gap-8">
		<div class="flex justify-between">
			<h2 class="uppercase text-black/80">
				<a href="/exhibitions/{exhibition.slug.current}" class="hover:underline">
					{artists.join(', ')}<br /><span class="text-xl italic">{getText(exhibition.name)}</span
					></a
				>
			</h2>
			<p class="font-normal text-sm mt-2">{rangeDate}</p>
		</div>
		<div class="flex flex-col gap-8">
			<p class="hidden md:block">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex amet unde quod molestias ea
				delectus quam distinctio. Voluptatum aliquam atque quidem ab quaerat dignissimos quia
				mollitia ducimus vitae consectetur?
			</p>
			<!-- {getText(exhibition.description)} -->
			{#if isComing}
				<CalendarLink
					data={{
						title: getText(exhibition.name),
						startDate,
						endDate
					}}
					class="hover:bg-zinc-100 py-2 text-center w-fit px-4 flex justify-center rounded-sm items-center gap-4 transition-colors"
				/>
			{:else}
				<a
					href="/exhibitions/{exhibition.slug.current}"
					class="border border-zinc-300 p-2 text-center w-full rounded-3xl flex justify-center items-center gap-4 hover:shadow-md transition-shadow"
					><span>{m.exhibition_item_view_more()}</span> <MoveRight size="16" /></a
				>
			{/if}
		</div>
	</header>
</li>
