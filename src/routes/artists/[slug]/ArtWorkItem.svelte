<script lang="ts">
	import { urlFor } from '$lib/sanity';
	export let href: string;
	export let item: {
		slug: string;
		name: string;
		images: [];
		createdOn: string;
	};
</script>

<a
	data-sveltekit-preload-data="tap"
	href={`/artworks/${item.slug.current}`}
	class="flex flex-col gap-2 items-center justify-end cursor-pointer"
>
	<picture>
		<img
			src={item.images ? urlFor(item.images[0]).width(960).url() : '/avatar_fallback.jpg'}
			alt=""
			width="960"
			srcset=""
			class="object-cover rounded-sm w-full"
			loading="lazy"
			on:error={(e) => console.log(e)}
		/>
	</picture>
	<h3 class="text-lg md:text-xl lg:text-2xl">{item.name}</h3>
	<p class="text-sm">{new Date(item.createdOn).getFullYear()}</p>
</a>
