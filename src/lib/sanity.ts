import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {
	PUBLIC_SANITY_API_VERSION,
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_ID
} from '$env/static/public';

function getSanityClient() {
	return createClient({
		projectId: PUBLIC_SANITY_ID,
		dataset: PUBLIC_SANITY_DATASET,
		useCdn: true,
		apiVersion: PUBLIC_SANITY_API_VERSION,
		perspective: 'published'
	});
}

export const client = getSanityClient();

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
