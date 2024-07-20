import { client } from '../sanity';
import type { Artist } from './types';

type Response<T> = {
	success: boolean;
	data?: T;
};

// General
async function get<T>(query: string, params: Record<string, any> = {}): Promise<Response<T>> {
	let success = false;
	let data = undefined;
	try {
		data = await client.fetch(query, params);
		success = true;
	} catch (e) {
		console.log(e);
	}
	return {
		success,
		data
	};
}

export const getAllArtist = async (): Promise<Artist[]> => {
	const groq = '*[_type=="artist"] {slug, name, "imageUrl": image.asset->url}';
	const response = await get<Artist[]>(groq);

	if (!response.success) {
		return [];
	}
	return response.data as Artist[];
};

export const getArtistBySlug = async (params: { slug: string }) => {
	const groq =
		'*[_type=="artist" && slug.current == $slug]{..., "artWorks": *[_type == "artWork" && references(^._id)] [0..4] {_id, name, createdOn, images[],category->{name}, subcategory->{name}}, "availableArtWorks": *[_type == "artWork" && references(^._id) && available == true] | order(_updatedAt desc) {_id, name, createdOn, images[],category->{name}, subcategory->{name}} [0..4], "exhibitions": *[_type == "exhibition" && references(^._id) && start_date <= now()] | order(start_date desc) [0..4], "conversations": *[_type == "conversation" && references(^._id) && date < now()] | order(date desc) [0..4]}';
	const response = await get(groq, params);

	if (!response.success) {
		return undefined;
	}

	const data = response.data as Array<Artist>;
	if (data.length == 0) {
		return undefined;
	}

	return data[0];
};

export const getArtWorksByArtistSlug = async (params: { slug: string; available: boolean }) => {
	const groq =
		'*[_type=="artist" && slug.current == $slug]{..., "artWorks": *[_type == "artWork" && references(^._id)] [0..4] {_id, name, images[],category->{name}, subcategory->{name}}, "availableArtWorks": *[_type == "artWork" && references(^._id) && available == true] | order(_updatedAt desc) [0..4] {_id, name, images[],category->{name}, subcategory->{name}}, "exhibitions": *[_type == "exhibition" && references(^._id) && start_date <= now()] | order(start_date desc) [0..4], "conversations": *[_type == "conversation" && references(^._id) && date < now()] | order(date desc) [0..4]]}';
	const response = await get(groq, params);

	if (!response.success) {
		return undefined;
	}

	const data = response.data as Array<Artist>;
	if (data.length == 0) {
		return undefined;
	}

	return data[0];
};
