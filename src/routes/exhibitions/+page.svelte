<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	import Section from '$lib/ui/Section.svelte';
	import SEO from '$lib/ui/components/SEO.svelte';
	import Exhibition from './Exhibition.svelte';
	import ExhibitionItem from './ExhibitionItem.svelte';
	import ExhibitionList from './ExhibitionList.svelte';

	export let data;
	let { current, upcoming: upcomingExhibitions } = data;
	const seo = {
		title: `${m.nav_exhibitions()} - Jeff Art Plus`,
		description: ''
	};

	upcomingExhibitions = [upcomingExhibitions[0], upcomingExhibitions[0]];
</script>

<SEO data={seo} />

<Section title={m.nav_exhibitions()}>
	<nav slot="nav" aria-label="Sidebar navigation" class="self-center">
		<ul class="flex gap-8">
			<li><a href="#upcoming">{m.upcoming()}</a></li>
			<li><a href="exhibitions/archive">{m.history()}</a></li>
		</ul>
	</nav>

	<!-- {#if current.length > 1}
		<ExhibitionList exhibitions={current} />
	{:else if current.length == 1}
		<Exhibition exhibition={current[0]} />
	{/if}
	<hr />
	<h2>{m.upcoming_exhibition()}</h2>

	{#if upcomingExhibitions.length > 1}
		<ExhibitionList exhibitions={upcomingExhibitions} isComing />
	{:else if upcomingExhibitions.length == 1}
		<Exhibition exhibition={upcomingExhibitions[0]} />
	{/if} -->
</Section>
