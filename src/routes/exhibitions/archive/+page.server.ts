import { getExhibitions } from '$lib/server/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const q_offset = url.searchParams.get('offset');
	let offset = 0;
	try {
		offset = Number(q_offset);
	} catch {
		console.log(`El parametro de consulta offset no es valido: ${q_offset}`);
	}
	const response = await getExhibitions({ offset });

	return {
		total: response.total,
		exhibitions: response.exhibitions
	};
};
