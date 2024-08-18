import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getExhibitions } from '$lib/server/api';

export const GET: RequestHandler = async ({ url }) => {
	const offset_q = url.searchParams.get('offset');
	let offset = 0;
	if (!isNaN(Number(offset_q))) {
		offset = Number(offset_q);
	}

	const response = await getExhibitions({ offset });
	return json(response);
};
