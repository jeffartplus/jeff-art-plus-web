import type { Conversation, Exhibition, ExhibitionSummary, QueryResult2 } from '$lib/types';
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
	const groq = '*[_type=="artist" && isVisible] {slug, name, lastName, "image":image->images[0]}';
	const response = await get<Artist[]>(groq);

	if (!response.success) {
		return [];
	}
	return response.data as Artist[];
};

export const getArtistBySlug = async (params: { slug: string }) => {
	const groq =
		'*[_type=="artist" && slug.current == $slug]{..., "image":image->images[0], "artWorks": *[_type == "artWork" && references(^._id)] [0..3] {slug, name, createdOn, images[],category->{name}, subcategory->{name}}, "availableArtWorks": *[_type == "artWork" && references(^._id) && available == true] | order(_updatedAt desc) {slug, name, createdOn, images[],category->{name}, subcategory->{name}} [0..3], "exhibitions": *[_type == "exhibition" && references(^._id) && start_date <= now()] | order(start_date desc) [0..3], "conversations": *[_type == "conversation" && references(^._id) && date < now()] | order(date desc) [0..3]}';
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

export const getArtWorkByArtistSlug = async (params: {
	artistSlug: string;
	artWorkSlug: string;
}) => {
	const groq =
		'*[_type == "artist" && slug.current == $artistSlug] {name, lastName, "artwork": *[_type=="artWork" && slug.current == $artWorkSlug && references(^._id)]}';
	const response = await get(groq, params);

	if (!response.success) {
		return undefined;
	}

	const data = response.data as Array<ArtWork>;
	if (data == undefined) {
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
	if (data == undefined) {
		return undefined;
	}

	return data[0];
};

export const getArtWorksByArtistId = async (params: { id: string; available: boolean }) => {
	const groq =
		'*[_type=="artWork" && references($id) && available == $available] {slug, name, createdOn, images}';
	const response = await get(groq, params);

	if (!response.success) {
		return [];
	}

	const data = response.data;
	if (data == undefined) {
		return [];
	}

	return data;
};

export const getConversations = async (params: { offset: number }): Promise<QueryResult2> => {
	const limit = params.offset + 20;
	params = {
		...params,
		limit
	};

	const groq = `
		{
		"total": count(*[_type=="conversation"]),
		"conversations": *[_type=="conversation"] {slug, name, cover, artists[]->{slug, name, lastName}} [$offset...$limit]
		}`;
	const response = await get<QueryResult2>(groq, params);
	if (!response.success || !response.data) {
		return {
			total: 0,
			conversations: []
		};
	}

	return response.data;
};

export const getConversationBySlug = async (params: {
	slug: string;
}): Promise<Conversation | undefined> => {
	const groq = `*[_type=='conversation' && slug.current == $slug] {date, images, description, artists[]->{name, lastName, summary}}`;
	const response = await get<Conversation[]>(groq, params);

	if (!response.success || !response.data) {
		return undefined;
	}

	return response.data[0];
};

export const getExhibitions = async (params: { offset: number }) => {
	const limit = params.offset + 20;
	params = {
		...params,
		limit
	};
	const groq = `
		{
			"total": count(*[_type=="exhibition"]),
			"exhibitions": *[_type=="exhibition"] {slug, name, description, start_date, end_date, cover, images,artists[]->{slug, name, lastName}} [$offset...$limit]
		}`;
	const response = await get<Exhibition[]>(groq, params);

	if (!response.success || !response.data) {
		return {
			total: 0,
			exhibitions: []
		};
	}

	return response.data;
};

export const getExhibitionsSummary = async (): Promise<ExhibitionSummary> => {
	const groq = `{
	"current": *[_type=="exhibition" && start_date < now() && end_date > now()]{slug, name, description, start_date, end_date, cover, images,artists[]->{slug, name, lastName}},
	"upcoming":*[_type=="exhibition" && start_date > now()]{slug, name, description, start_date, end_date, cover, images,artists[]->{slug, name, lastName}}
	}`;

	const response = await get<ExhibitionSummary>(groq);

	if (!response.success || !response.data) {
		return {
			current: [],
			upcoming: []
		};
	}

	return response.data;
};

export const getExhibitionsByArtistId = async (params: { id: string }) => {
	const groq =
		'*[_type=="exhibition" && references($id)] {slug, name, start_date, end_date, cover}';
	const response = await get(groq, params);

	if (!response.success) {
		return [];
	}

	const data = response.data;
	if (data.length == 0) {
		return [];
	}

	return data;
};
