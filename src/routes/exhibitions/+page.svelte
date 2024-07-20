<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	import CalendarLink from '$lib/ui/components/CalendarLink.svelte';
	import Section from '$lib/ui/Section.svelte';
	import SEO from '$lib/ui/components/SEO.svelte';

	export let data;
	const seo = {
		title: `${m.nav_exhibitions()} - Jeff Art Plus`,
		description: ''
	};

	const item = {
		autor: 'Blac Roca',
		title: 'Beyond Fashion',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est repellendus fuga dicta quibusdam excepturi rem sunt placeat facere, id quidem vitae, quasi tenetur mollitia? Corporis maiores sint iusto aliquam.',
		slug: {
			current: '21'
		},
		startDate: new Date(),
		endDate: new Date(),
		archive: true
	};
	let exhibitions = [item, item, item, item, item, item, item, item];
</script>

<SEO data={seo} />

<Section title={m.nav_exhibitions()}>
	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 flex-wrap">
		{#each exhibitions as exhibition}
			<li class="flex flex-col gap-4 lg:gap-8">
				<!-- <img src={exhibition.imageUrl} alt={exhibition.title} /> -->
				<img
					src="/images/exhibitions.jpg"
					alt=""
					width="960"
					height="540"
					class="object-cover w-full"
				/>
				<div class="flex justify-between gap-2 md:gap-4 lg:gap-6">
					<h1 class="uppercase text-black/80 text-xl">
						{exhibition.autor}<br /><span class="text-sm">{exhibition.title}</span>
					</h1>

					<p class="font-light">26 sep - 8 agost 2024</p>
				</div>
				{#if exhibition.archive}
					<a
						href="/exhibitions/{exhibition.slug.current}"
						class="border border-zinc-300 p-2 text-center w-full bg-stone-200"
						>{m.exhibition_item_view_more()}</a
					>
				{:else}
					<CalendarLink
						data={{
							title: exhibition.title,
							startDate: exhibition.startDate,
							endDate: exhibition.endDate
						}}
						class="border border-zinc-300 p-2 text-center w-full bg-stone-200"
					/>
				{/if}
			</li>
		{/each}
	</ul>
</Section>
