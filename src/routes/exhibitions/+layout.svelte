<script lang="ts">
	import type { LayoutData } from './$types';

	import * as m from '$lib/paraglide/messages';
	import Section from '$lib/ui/Section.svelte';
	import SEO from '$lib/ui/components/SEO.svelte';

	export let data: LayoutData;

	const seo = {
		title: `${m.nav_exhibitions()} - Jeff Art Plus`,
		description: ''
	};
</script>

<SEO data={seo} />
<Section title={m.nav_exhibitions()}>
	<nav slot="nav" aria-label="Sidebar navigation" class="self-center">
		<ul class="flex gap-8">
			<li><a href="#upcoming">{m.upcoming()}</a></li>
			<li><a href="exhibitions/archive">{m.history()}</a></li>
		</ul>
	</nav>
	<slot />
</Section>
