export interface ExhibitionSummary {
	current: Exhibition[];
	upcoming: Exhibition[];
}

export interface QueryResult2 {
	total: number;
	conversations: Conversation[];
}

export interface Conversation {
	slug: Slug;
	cover: Image | null;
	artists: Artist[];
}

export interface Exhibition {
	artWorks: Reference[];
	_rev: string;
	_type: string;
	_id: string;
	_updatedAt: Date;
	slug: Slug;
	start_date: Date;
	end_date: Date;
	_createdAt: Date;
	name: Internationalized[];
	description: Internationalized[];
	artists: Artist[];
	cover: Image;
	images: ImageInArray[];
}

export interface Reference {
	_type: string;
	_key: string;
	_ref: string;
}

export interface Internationalized {
	_type: string;
	_key: string;
	value: string;
}

export interface Artist {
	slug: Slug;
	name: string;
	lastName: string;
}

export interface ArtistDetail {
	_id: string;
	_createdAt: Date;
	lastName: string;
	isVisible: boolean;
	_updatedAt: Date;
	artWorks: ArtWork[];
	_type: string;
	name: string;
	description: Internationalized[];
	_rev: string;
	slug: Slug;
	availableArtWorks: ArtWork[];
	exhibitions: Exhibition[];
	conversations: Conversation[];
}

export interface ArtWork {
	_id: string;
	name: string;
	images: ImageInArray[];
	category: Category;
	subcategory: Category;
}

export interface Category {
	name: string;
}

export interface Image {
	asset: Asset;
	_type: string;
}

export interface ImageInArray {
	_type: string;
	_key: string;
	asset: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
}

export interface Conversation {
	name: Internationalized[];
	description: Internationalized[];
	date: Date;
}

export interface Slug {
	current: string;
	_type: string;
}
