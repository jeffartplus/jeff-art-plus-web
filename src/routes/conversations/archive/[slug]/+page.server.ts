import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getConversationBySlug } from '$lib/server/api';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const re = /^[a-z0-9_]+(-[a-z0-9_]+)*$/;
	if (!re.test(slug)) {
		return error(400);
	}
	const conversation = await getConversationBySlug({ slug });
	if (!conversation) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		conversation,
		seo: {
			title: '',
			description: ''
		}
	};
};
