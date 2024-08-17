import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { getArtWorksByArtistId } from '$lib/server/api';

export const GET: RequestHandler = async ({ params, url }) => {
	const id = params.id;
	const available_q = url.searchParams.get('available');
	const available = available_q?.toLowerCase() == 'true' ? true : false;

	const response = await getArtWorksByArtistId({ id, available });

	return json(response);
};
