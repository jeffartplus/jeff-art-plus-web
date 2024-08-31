<script lang="ts">
	import { languageTag } from '$lib/paraglide/runtime';

	import type { Exhibition } from '$lib/types';
	import { getRangeDateString, getText } from '$lib/utils';
	import { urlFor } from '$lib/sanity';

	export let item: Exhibition;

	const startDate = new Date(item.start_date);
	const endDate = new Date(item.end_date);

	const rangeDate = getRangeDateString(startDate, endDate, languageTag());
</script>

<li class="flex flex-col justify-between gap-1">
	<img
		src={urlFor(item.cover).width(960).height(540).url()}
		alt=""
		width="960"
		height="540"
		class="object-cover w-full aspect-video rounded-sm"
	/>
	<header class="flex flex-col justify-between pt-4 gap-8">
		<div class="flex justify-between">
			<h3 class="uppercase text-black/80">
				<a href="/exhibitions/archive/{item.slug.current}" class="hover:underline">{getText(item.name)}</a>
			</h3>
			<p class="font-normal text-sm mt-2">{rangeDate}</p>
		</div>
	</header>
</li>
