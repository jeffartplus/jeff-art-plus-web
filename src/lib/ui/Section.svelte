<script lang="ts">
	export let title: string | undefined = undefined;
	export let header: boolean = true;
</script>

<section {...$$restProps}>
	<slot name="header">
		<hr class="border-t border-t-zinc-200" />
		{#if title}
			<header class="p-section flex justify-between">
				<h1>{title}</h1>
				<slot name="nav" />
			</header>
			<hr class="border-t border-t-zinc-200 mb-4" />
		{/if}
	</slot>
	<div class="p-section">
		<slot />
	</div>
</section>
