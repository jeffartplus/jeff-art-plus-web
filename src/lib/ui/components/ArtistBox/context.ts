import { getContext, setContext } from "svelte";
import type { Writable } from "svelte/store";

const CONTEXT_ID = "ARTISTBOX";

export const getArtistBoxContext = (): Writable<Artist> => {
  return getContext(CONTEXT_ID);
};

export const setArtistBoxContext = (artist: Writable<Artist>) => {
  setContext(CONTEXT_ID, artist);
};
