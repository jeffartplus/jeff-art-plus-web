<script lang="ts">
	import { urlFor } from '$lib/sanity';
	export let href: string;
	export let item: {
		author: string;
		slug: string;
		name: string;
		images: [];
		createdOn: string;
	};
</script>

<a
	data-sveltekit-preload-data="tap"
	href={`/artworks/${item.slug.current}`}
	class=""
>
	<picture>
		<img
			src={item.images ? urlFor(item.images[0]).width(400).height(400).url() : '/avatar_fallback.jpg'}
			alt=""
			height="400"
			srcset=""
			class="object-cover w-full "
			loading="lazy"
			on:error={(e) => console.log(e)}
		/>
	</picture>
	<header class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
		<h3 class="text-lg font-semibold">{item.name}</h3>
		<p class="text-sm">{new Date(item.createdOn).getFullYear()}</p>
	</header>
</a>	
