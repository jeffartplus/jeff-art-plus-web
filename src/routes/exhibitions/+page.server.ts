import { getExhibitions } from '$lib/server/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const response = await getExhibitions();
	const { current, upcoming } = response;
	return {
		current,
		upcoming
	};
};
