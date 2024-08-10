<script context="module" lang="ts">
	import { languageTag } from '$lib/paraglide/runtime';
	const rangeDate = (startDate: Date, endDate: Date) => {
		let options = { day: 'numeric', month: 'short', year: 'numeric' };

		const endDateString = endDate.toLocaleDateString(languageTag(), options);

		if (startDate.getFullYear() == endDate.getFullYear()) {
			options = {
				day: 'numeric',
				month: 'short'
			};
		}

		const startDateString = startDate.toLocaleDateString(languageTag(), options);

		return `${startDateString} - ${endDateString}`;
	};
</script>

<script lang="ts">
	import CalendarLink from '$lib/ui/components/CalendarLink.svelte';
	import ExhibitionItem from './ExhibitionItem.svelte';

	import type { Exhibition } from '$lib/types';
	import { getText } from '$lib/utils';
	import { urlFor } from '$lib/sanity';

	export let exhibition: Exhibition;

	const artists = exhibition.artists.map((artist) => {
		return `${artist.name} ${artist.lastName}`;
	});
	const startDate = new Date(exhibition.start_date);
	const endDate = new Date(exhibition.end_date);
</script>

<li class="flex flex-col gap-4 lg:gap-8">
	<img
		src={urlFor(exhibition.cover).width(960).height(540).url()}
		alt=""
		width="960"
		height="540"
		class="object-cover w-full"
	/>
	<div class="flex justify-between gap-2 md:gap-4 lg:gap-6">
		<h1 class="uppercase text-black/80 text-xl">
			{artists.join(', ')}<br /><span class="text-sm">{getText(exhibition.name)}</span>
		</h1>

		<p class="font-light">{rangeDate(startDate, endDate)}</p>
	</div>
	<CalendarLink
		data={{
			title: getText(exhibition.name),
			startDate,
			endDate
		}}
		class="border border-zinc-300 p-2 text-center w-full bg-stone-200"
	/>
</li>
