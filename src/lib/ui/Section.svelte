<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<section {...$$restProps}>
	<slot name="header">
		<hr class="border-t border-t-zinc-200" />
		<header class="p-section">
			<h1>{title}</h1>
		</header>
		<hr class="border-t border-t-zinc-200 mb-4" />
	</slot>
	<div class="p-section">
		<slot />
	</div>
</section>
