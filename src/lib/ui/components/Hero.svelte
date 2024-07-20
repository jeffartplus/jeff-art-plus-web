<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Location from './Location.svelte';
</script>

<div class="flex flex-col items-center px-4 md:w-4/6 m-auto gap-4 mt-20">
	<Location />
	<p class="text-5xl md:text-5xl uppercase text-center leading-tight">
		{m.hero()}
	</p>
	<div></div>
</div>
