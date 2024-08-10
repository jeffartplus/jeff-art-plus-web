import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { getArtWorksByArtistId, getAvailableArtWorksByArtistId } from '$lib/server/api';

export const GET: RequestHandler = async ({ params, url }) => {
	const id = params.id;
	const available = url.searchParams.get('available');
	let response;
	if (available && available.toLowerCase() == 'true') {
		response = await getAvailableArtWorksByArtistId({ id });
	} else {
		response = await getArtWorksByArtistId({ id });
	}

	return json(response);
};
