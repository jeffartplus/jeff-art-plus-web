export interface Artist {
	_id: string;
	_createdAt: Date;
	lastName: string;
	isVisible: boolean;
	_updatedAt: Date;
	artWorks: ArtWork[];
	_type: string;
	name: string;
	description: Description[];
	_rev: string;
	slug: Slug;
	availableArtWorks: ArtWork[];
	exhibitions: any[];
	conversations: Conversation[];
}

export interface ArtWork {
	_id: string;
	name: string;
	images: Image[];
	category: Category;
	subcategory: Category;
}

export interface Category {
	name: string;
}

export interface Image {
	_type: string;
	_key: string;
	asset: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
}

export interface Conversation {
	name: Description[];
	description: Description[];
	date: Date;
}

export interface Description {
	_type: string;
	_key: string;
	value: string;
}

export interface Slug {
	current: string;
	_type: string;
}
