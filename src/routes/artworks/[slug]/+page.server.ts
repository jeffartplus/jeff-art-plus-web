import type { PageServerLoad } from './$types';
import { getArtWorkBySlug } from '$lib/server/api';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const { slug: slugParam } = params;
	const re = /^[a-z0-9_]+(-[a-z0-9_]+)*$/;
	if (!re.test(slugParam)) {
		return error(400);
	}
	const response = await getArtWorkBySlug({ slug: slugParam });
	if (!response) {
		error(404, {
			message: 'Not found'
		});
	}
	const { slug, name, description, createdOn, category, images, authors, subcategory } = response;
	return {
		artwork: {
			slug,
			name,
			description,
			createdOn,
			category,
			subcategory,
			images: images == undefined ? [] : images,
			authors
		},
		seo: {
			title: `${name} - Jeff Art Plus`,
			description
		}
	};
};
