import { getConversations } from '$lib/server/api';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const offset_q = url.searchParams.get('offset');
	let offset = 0;
	if (!isNaN(Number(offset_q))) {
		offset = Number(offset_q);
	}

	const response = await getConversations({ offset });
	return json(response);
};
