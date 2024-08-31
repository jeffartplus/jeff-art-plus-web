<script lang="ts">
	import { availableLanguageTags } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import LangLink from './LangLink.svelte';

	export let links: { name: () => string; href: string }[];
</script>

<div class="flex justify-center md:justify-between items-center p-section">
	<a class="flex gap-4 items-center" href="/">
		<img src="/logo-80x80.avif" alt="" class="size-12" />
		<span class="text-xl font-normal">{@html m.app_name()}</span>
	</a>
	<nav class="hidden md:flex p-2 shadow-sm border rounded-full w-fit gap-2 lg:gap-4 items-center">
		{#each links as { name, href }}
			<a
				class="md:text-lg lg:text-xl hover:bg-black hover:text-white py-2 md:px-4 lg:px-6 rounded-full transition-colors"
				{href}>{name()}</a
			>
		{/each}
	</nav>

	<div class="hidden md:flex gap-4 lg:gap-8">
		{#each availableLanguageTags as lang}
			<LangLink {lang} class="cursor-pointer aria-[current=page]:font-medium" />
		{/each}
	</div>
</div>
