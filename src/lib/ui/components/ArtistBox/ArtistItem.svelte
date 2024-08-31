<script lang="ts">
	import ArrowRight from '$lib/ui/icons/ArrowRight.svelte';
	import ArrowUpRight from '$lib/ui/icons/ArrowUpRightIcon.svelte';

	import { getArtistBoxContext } from './context';

	export let artist: Artist;
	const { id, name, description } = artist;

	const artistSelected = getArtistBoxContext();
	$: selected = $artistSelected.id == id;
</script>

<li>
	<button
		class="w-full flex justify-between border-t border-b py-5 text-start bg-gradient-to-r hover:from-white hover:to-gray-50 pl-1 pr-2"
		on:click={() => artistSelected.set(artist)}
	>
		<div class="flex flex-col gap-3">
			<p class="text-2xl font-bold">
				{name}
			</p>
			<p class="text-lg text-gray-600">
				{description}
			</p>
		</div>
		<div
			class="border rounded-full h-fit p-2 data-[selected=true]:bg-black data-[selected=true]:text-white"
			data-selected={selected}
			data-artist-action={id}
		>
			{#if selected}
				<ArrowRight />
			{:else}
				<ArrowUpRight />
			{/if}
		</div>
	</button>
</li>
