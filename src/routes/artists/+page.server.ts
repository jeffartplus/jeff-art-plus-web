import { getAllArtist } from '$lib/server/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const artists = await getAllArtist();
	console.log(artists);
	return { artists };
};
