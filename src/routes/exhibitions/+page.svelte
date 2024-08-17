<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Exhibition from './Exhibition.svelte';
	import ExhibitionItem from './ExhibitionItem.svelte';
	import ExhibitionList from './ExhibitionList.svelte';

	export let data;
	let { current, upcoming: upcomingExhibitions } = data;
</script>

{#if current.length > 1}
	<ExhibitionList exhibitions={current} />
{:else if current.length == 1}
	<Exhibition exhibition={current[0]} />
{/if}
{#if upcomingExhibitions.length > 0}
	<h2>{m.upcoming_exhibition()}</h2>
	<hr />
	{#if upcomingExhibitions.length == 1}
		<Exhibition exhibition={upcomingExhibitions[0]} />
	{:else}
		<ExhibitionList exhibitions={upcomingExhibitions} isComing />
	{/if}
{/if}
