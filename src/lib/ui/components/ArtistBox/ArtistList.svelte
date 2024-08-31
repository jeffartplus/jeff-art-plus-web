<script lang="ts">
  import ArtistItem from "./ArtistItem.svelte";
  import { setArtistBoxContext } from "./context";
  import { artistBoxStore } from "./store";

  export let artists: {
    id: string;
    name: string;
    description: string;
    image_url: string;
  }[];

  artistBoxStore.set(artists[0]);
  setArtistBoxContext(artistBoxStore);

  $: artistSelected = $artistBoxStore;
</script>

<div class="flex gap-16 justify-center">
  <ul class="grow">
    {#each artists as artist}
      <ArtistItem {artist} />
    {/each}
  </ul>
  <img
    class="h-[40rem] w-[32rem] object-cover rounded-lg"
    src={artistSelected.image_url}
    alt={artistSelected.name}
  />
</div>
