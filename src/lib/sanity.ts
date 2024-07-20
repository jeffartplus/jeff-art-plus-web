import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

function getSanityClient() {
	return createClient({
		projectId: '5sf89fxd',
		dataset: 'production',
		useCdn: true,
		apiVersion: '2022-03-07',
		perspective: 'published'
	});
}

export const client = getSanityClient();

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
// token:
// 	'skZJMWzcReCWwshntzIr9OGmCFEunZNzcRxLIhS7JQjP8r0oWPNuZc0wV61sglBgJAKNnPQrVq5sVZocYT68iTluqHbSsoFnEXFVU2bXJt1wc0kDLVnnGuI5vDOaljDHl8CXQHMelgUACRKf54SvlTLfaIihfw8nu8WQ3FmVer6Dha3c79Hj'
// const client = getSanityClient();
// client.delete({ query: '*[_type == "author" || _type == "post" || _type == "sanity.imageAsset"]' });
