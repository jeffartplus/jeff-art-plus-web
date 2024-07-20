import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

function getSanityClient() {
	return createClient({
		projectId: 'v7tveygz',
		dataset: 'production',
		useCdn: true,
		apiVersion: '2022-03-07',
		perspective: 'published'
	});
}

export const client = getSanityClient();

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
