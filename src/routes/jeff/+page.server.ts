import { getArtistBySlug } from '$lib/server/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const artist = await getArtistBySlug({ slug: 'jose-emilio-fuentes-fonseca' });
	if (!artist) {
		error(404, {
			message: 'Not found'
		});
	}

	const { _id, name, lastName, description, artWorks, availableArtWorks, exhibitions } = artist;

	const fullName = `${name} ${lastName}`;
	return {
		artist: {
			_id,
			name: fullName,
			description,
			artWorks,
			availableArtWorks,
			exhibitions
		},
		seo: {
			title: `${fullName} - Jeff Art Plus`,
			description: ''
		}
	};
};
