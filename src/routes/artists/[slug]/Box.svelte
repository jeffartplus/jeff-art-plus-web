<script context="module" lang="ts">
	const getListItems = async (path: string, id: string) => {
		const response = await fetch(`/api/v1/artists/${id}${path}`);
		if (!response.ok) {
			return [];
		}
		const data = await response.json();
		return data;
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import { Grip, X } from 'lucide-svelte';

	import * as m from '$lib/paraglide/messages';
	import { getArtistContext } from './context';

	export let title: string;
	export let path: string;
	export let items;
	export let component;

	const { _id, slug } = getArtistContext();

	let expanded = false;
	const reducedList = items;
	let expandedList = [];

	onMount(async () => {
		if (browser) {
			expandedList = await getListItems(path, _id);
		}
	});

	$: list = expanded ? expandedList : reducedList;
	const href = `${slug}`;
</script>

<hr class="my-24" />
<div class="flex flex-col md:flex-row gap-12 md:gap-32 relative">
	<div class="flex justify-between md:flex-col gap-6 md:h-fit md:sticky md:top-20">
		<h2 class="w-64">{title}</h2>
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
	<div
		class="grow grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 lg:gap-x-30 gap-y-16 md:gap-y-24"
	>
		{#each list as item (item.name)}
			<svelte:component this={component} {item} {href} />
		{/each}
	</div>
</div>
