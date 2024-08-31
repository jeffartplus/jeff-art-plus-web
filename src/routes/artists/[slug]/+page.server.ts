import { getArtistBySlug } from '$lib/server/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const re = /^[a-z]+(-[a-z]+)*$/;
	if (!re.test(slug)) {
		return error(400);
	}
	const artist = await getArtistBySlug({ slug });
	if (!artist) {
		error(404, {
			message: 'Not found'
		});
	}
	const {
		_id,
		name,
		summary,
		biography,
		lastName,
		description,
		artWorks,
		availableArtWorks,
		exhibitions,
		image
	} = artist;

	const fullName = `${name} ${lastName}`;
	return {
		artist: {
			_id,
			slug,
			name: fullName,
			summary,
			biography,
			artWorks,
			availableArtWorks,
			exhibitions,
			image
		},
		seo: {
			title: `${fullName} - Jeff Art Plus`,
			description
		}
	};
};
