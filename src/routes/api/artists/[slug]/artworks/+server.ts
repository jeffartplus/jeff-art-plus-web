import { json } from '@sveltejs/kit';

const CACHE_TIME = 60 * 60;

export async function GET({ params, setHeaders }) {
	// const { slug } = params
	// setHeaders({
	// 	'cache-control': `max-age=${CACHE_TIME}`
	// });

	return json({});
}
