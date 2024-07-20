<script lang="ts">
	import type { PageData } from './$types';
	import * as m from '$lib/paraglide/messages';
	import Section from '$lib/ui/Section.svelte';
	import SEO from '$lib/ui/components/SEO.svelte';

	export let data: PageData;
	const seo = {
		title: `${m.nav_conversations()} - Jeff Art Plus`,
		description: ''
	};

	const item = {
		autor: '',
		title: '',
		description: '',
		slug: {
			current: '2'
		},
		imageUrl: '',
		date: new Date()
	};

	let conversations = [item, item, item, item, item];
</script>

<SEO data={seo} />

<Section title={m.nav_conversations()}>
	<ul>
		{#each conversations as conversation}
			<li></li>
		{/each}
	</ul>
</Section>
