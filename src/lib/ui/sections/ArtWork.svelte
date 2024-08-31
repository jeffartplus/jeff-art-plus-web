<script lang="ts">
	import ArtWorkItem from '$lib/ui/components/ArtWorkItem.svelte';
	const artWorkList = [1, 2, 3];
</script>

<section class="bg-stone-400 p-2 py-14 mt-12">
	<ul class="flex gap-12 w-full">
		{#each artWorkList as item}
			<ArtWorkItem />
		{/each}
	</ul>
</section>

<style>
	section {
		height: calc(100vh + 3rem);
	}
</style>
