<script lang="ts">
	import type { Exhibition } from '$lib/types';
	import ExhibitionItem from './ExhibitionItem.svelte';

	export let exhibitions: Exhibition[];
	export let isComing: boolean = false;

	let className = 'grid grid-cols-1 mb-16';
	if (exhibitions.length > 1) {
		className = `${className} lg:grid-cols-2 gap-10 md:gap-16`;
	}
</script>

<ul class={className} id="upcoming">
	{#each exhibitions as exhibition}
		<ExhibitionItem {exhibition} reverse={isComing} {isComing} />
	{/each}
</ul>
