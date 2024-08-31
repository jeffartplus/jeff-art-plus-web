<script lang="ts">
	import { PanelBottomOpenIcon, PanelBottomCloseIcon, EllipsisIcon } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages';
	import LangLink from './LangLink.svelte';
	import { availableLanguageTags } from '$lib/paraglide/runtime';

	export let links: { name: () => string; href: string }[];

	let expanded: 'none' | 'simple' | 'fully' = 'none';

	const handleClickA = () => {
		expanded = 'none';
	};

	$: isExpanded = expanded != 'none';

	const toggleExpanded = () => {
		expanded = expanded == 'none' ? 'simple' : 'none';
	};

	const toggleFully = () => {
		expanded = expanded == 'simple' ? 'fully' : 'simple';
	};
</script>

<div
	class="absolute top-0 left-0 h-full w-screen bg-black opacity-0 z-10 transition-[opacity] md:hidden pointer-events-none"
	class:opacity={isExpanded}
/>
<div
	class="fixed bottom-0 w-full h-12 data-[expanded-type=simple]:h-40 data-[expanded-type=fully]:h-80 data-[expanded=true]:bg-white border-t border-gray-300 backdrop-blur-sm transition-[height] md:hidden bg-white/60 z-20"
	data-expanded={isExpanded}
	data-expanded-type={expanded}
>
	<button
		class="rounded-full p-3 bg-black text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
		on:click={toggleExpanded}
	>
		{#if isExpanded}
			<PanelBottomCloseIcon />
		{:else}
			<PanelBottomOpenIcon />
		{/if}
	</button>

	{#if isExpanded}
		<nav>
			<div class="flex justify-evenly pt-14 px-4 pb-8">
				{#each links as { name, href }}
					<a class="text-sm" {href} on:click={handleClickA}>{name()}</a>
				{/each}
			</div>

			{#if expanded == 'fully'}
				<div class="flex justify-evenly px-4 py-8 border-t border-t-gray-300">
					<a class="text-sm" href="/about" on:click={handleClickA}>{m.nav_about()}</a>
				</div>

				<div class="flex justify-evenly px-4 py-6 border-t border-t-gray-300">
					{#each availableLanguageTags as lang}
						<LangLink
							{lang}
							class="text-xs font-light cursor-pointer aria-[current=page]:font-normal"
						/>
					{/each}
				</div>
			{/if}
		</nav>

		<button
			class="w-full flex justify-center items-center py-4 border-t border-t-gray-300"
			on:click={toggleFully}
		>
			<EllipsisIcon />
		</button>
	{/if}
</div>

<style lang="postcss">
	.opacity {
		@apply opacity-50;
	}
</style>
