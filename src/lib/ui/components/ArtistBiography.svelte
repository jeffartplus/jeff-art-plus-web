<script lang="ts">
	import { getText } from '$lib/utils';

	export let summary;
	export let biography;

	let toggle = false;
</script>

<div class="flex">
	<p class="w-4/5 md:3/5 lg:2/5">{getText(summary)}</p>

	<button on:click={() => (toggle = !toggle)}>Leer más</button>
	<p class:hidden={!toggle}>{getText(biography)}</p>
</div>
