import { getExhibition } from '$lib/server/api.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const slug = params.slug
	const re = /^[a-z]+(-[a-z]+)*$/;
	if (!re.test(slug)) {
		return error(400);
	}

	const exhibition = await getExhibition({ slug })

	if (!exhibition) {
		error(404, {
			message: 'Not Found'
		})
	}
	console.log(exhibition)

	return {
		exhibition,
	};
};
