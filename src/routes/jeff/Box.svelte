<script lang="ts">
	import { Grip, X } from 'lucide-svelte';

	import { urlFor } from '$lib/sanity';
	import * as m from '$lib/paraglide/messages';
	import { getArtistContext } from './context';

	export let callback;
	export let list;

	const { _id } = getArtistContext();
	const getListItems = async () => {
		return callback(_id);
	};

	let expanded = false;
</script>

<hr class="my-24" />
<div class="flex flex-col md:flex-row gap-12 md:gap-32 relative">
	<div class="flex justify-between md:flex-col gap-6 md:h-fit md:sticky md:top-0">
		<h2 class="w-64">{m.artwork_label()}</h2>
		<button
			class="flex gap-4 items-center"
			on:click={() => {
				expanded = !expanded;
			}}
		>
			{#if !expanded}
				<Grip size="18" />
				<span>
					{m.view_all()}
				</span>
			{:else}
				<X size="18" />
				<span>
					{m.view_less()}
				</span>
			{/if}
		</button>
	</div>
	{#if !expanded}
		<div
			class="grow grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 lg:gap-x-30 gap-y-16 md:gap-y-24"
		>
			{#each list as item}
				<div class="flex flex-col gap-2 items-center justify-end cursor-pointer">
					<img src={urlFor(item.images[0]).url()} alt="" class="rounded-sm w-full" />
					<h3 class="sticky">{item.name}</h3>
					<p class="text-sm">{new Date(item.createdOn).getFullYear()}</p>
				</div>
			{/each}
		</div>
	{:else}
		<div
			class="grow grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 lg:gap-x-30 gap-y-16 md:gap-y-24"
		>
			{#await getListItems then data}
				{#each data as item}
					<slot {item} />
				{/each}
			{/await}
		</div>
	{/if}
</div>
