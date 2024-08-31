<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import ArtistList from '$lib/ui/components/ArtistBox/ArtistList.svelte';
	const artists = [
		{
			id: '1',
			name: 'Miriam Nieto',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			image_url: '/images/Ramona.jpg'
		},
		{
			id: '2',
			name: 'María Mar Vidal',
			description: 'Lorem ipsum dolor sit amet.',
			image_url: '/images/Elizabeth.jpg'
		},
		{
			id: '3',
			name: 'Martin Prieto',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
			image_url: '/images/Tom.jpg'
		}
	];
</script>

<section class="mt-32 w-full px-64">
	<p class="text-5xl font-semibold uppercase">{m.section_artist_title()}</p>
	<p class="text-gray-700 mt-8 mb-12 w-3/4">{m.section_artist_description()}</p>
	<ArtistList {artists} />
</section>
