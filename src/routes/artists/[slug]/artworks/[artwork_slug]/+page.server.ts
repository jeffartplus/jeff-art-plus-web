import type { PageServerLoad } from './$types';
import { getArtWorkByArtistSlug } from '$lib/server/api';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const { slug: artistSlug, artwork_slug: artWorkSlug } = params;
	const re = /^[a-z0-9_]+(-[a-z0-9_]+)*$/;
	if (!re.test(artistSlug) || !re.test(artWorkSlug)) {
		return error(400);
	}
	const response = await getArtWorkByArtistSlug({ artistSlug, artWorkSlug });
	if (!response) {
		error(404, {
			message: 'Not found'
		});
	}
	const { name: artistName, lastName, artwork } = response;
	const { slug, name, description, createdOn, category, images, authors } = artwork[0];
	return {
		artist: {
			slug: artistSlug,
			name: `${artistName} ${lastName}`
		},
		artwork: {
			slug,
			name,
			description,
			createdOn,
			category,
			images,
			authors
		},
		seo: {
			title: `${name} - Jeff Art Plus`,
			description
		}
	};
};
