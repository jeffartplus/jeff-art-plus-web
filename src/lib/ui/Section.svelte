<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<section {...$$restProps}>
	<slot name="header">
		<hr class="border-t border-t-border" />
		{#if title}
			<header class="p-section flex justify-between">
				<h1 class="text-4xl md:text-5xl lg:text-6xl">{title}</h1>
				<slot name="nav" />
			</header>
			<hr class="border-t border-t-border mb-4" />
		{/if}
	</slot>
	<div class="p-section">
		<slot />
	</div>
</section>
