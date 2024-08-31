import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { getExhibitionsByArtistId } from '$lib/server/api';

export const GET: RequestHandler = async ({ params }) => {
	const id = params.id;

	const response = await getExhibitionsByArtistId({ id });

	return json(response);
};
