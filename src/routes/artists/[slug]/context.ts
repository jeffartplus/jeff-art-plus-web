import type { ArtistDetail } from '$lib/types';
import { getContext, setContext } from 'svelte';

const ID = 'artist';

export function setArtistContext(ctx: ArtistDetail) {
	setContext(ID, ctx);
}

export function getArtistContext(): ArtistDetail {
	return getContext(ID);
}
