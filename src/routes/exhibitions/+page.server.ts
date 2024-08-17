import { getExhibitionsSummary } from '$lib/server/api';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const response = await getExhibitionsSummary();
	const { current, upcoming } = response;
	if (current && upcoming) {
		redirect(302, 'exhibitions/archive');
	}
	return {
		current,
		upcoming
	};
};
