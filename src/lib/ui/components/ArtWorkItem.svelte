<script lang="ts">
	import ArrowUpRightIcon from '$lib/ui/icons/ArrowUpRightIcon.svelte';
	import { MoveRightIcon } from 'lucide-svelte';

	const category = 'Metal inflado';
	const name = 'Lorem, ipsum dolor.';
	const description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam id illo recusandae esse architecto, cum nihil consectetur minima, modi quam laboriosam similique sunt optio praesentium non quo facilis perspiciatis!';
</script>

<article class="w-40 md:w-96 flex flex-col shrink-0">
	<span class="px-4 py-2 text-green-50 bg-gray-700/50 w-fit rounded-full">{category}</span>
	<img
		src="/images/artwork.jpg"
		alt="artwork"
		class=" w-40 max-h-[30rem] object-cover rounded-md mt-5"
	/>
	<header class=" text-zinc-300 mt-4">
		<h1 class="h-fit w-fit text-2xl font-bold">{name}</h1>
		<p class="mt-4">
			{description}
		</p>
	</header>
	<footer class="mt-6">
		<button
			class="py-3 rounded-full text-zinc-300 flex gap-2 justify-center items-center bg-zinc-950 w-full"
		>
			<span>Ver más</span>
			<MoveRightIcon size="16" />
		</button>
	</footer>
</article>
