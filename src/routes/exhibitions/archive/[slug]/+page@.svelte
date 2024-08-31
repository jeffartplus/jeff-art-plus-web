<script lang="ts">
	import * as m from "$lib/paraglide/messages"
	import { urlFor } from '$lib/sanity';
	import Seo from '$lib/ui/components/SEO.svelte';
	import { getRangeDateString, getText } from '$lib/utils.js';
	import ArtWork from './ArtWork.svelte';

	export let data;
	const { exhibition } = data;
	const { name, description, artWorks, artists, cover } = exhibition;

	const authors = artists.map((a) => `${a.name} ${a.lastName}`).join(', ');

	console.log(authors);

	const seo = {
		title: `${getText(name)} | Jeff Art Plus`,
		description: getText(description)
	};
</script>

<Seo data={seo} />

<section class="py-12 md:py-24 bg-muted flex justify-center">
	<div class="container px-4 md:px-6">
		<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
			<div class="flex flex-col gap-4">
				<img
					src={urlFor(cover).width(800).url()}
					width={800}
					height={600}
					alt="Exhibition"
					class="rounded-xl object-cover aspect-[4/3]"
				/>
			</div>
			<div class="flex flex-col gap-6">
				<div class="space-y-2">
					<h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						{getText(name)}
					</h1>
					<p class="text-muted-foreground">{authors}</p>
				</div>
				<div class="grid gap-2">
					<div class="flex items-center justify-between">
						<span class="text-muted-foreground">Dates:</span>
						<span
							>{getRangeDateString(
								new Date(exhibition.start_date),
								new Date(exhibition.end_date)
							)}</span
						>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-muted-foreground">Hours:</span>
						<span>Tuesday - Sunday, 10am - 6pm</span>
					</div>
				</div>
				<p class="prose max-w-none">{getText(description)}</p>
			</div>
		</div>
	</div>
</section>
<section class="bg-background py-12 md:py-24">
	<div class="container px-4 md:px-6 mx-auto">
		<div class="space-y-4">
			<h2 class="text-2xl font-bold tracking-tighter sm:text-3xl">{m.artwork_label()}</h2>
			<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each artWorks as artWork}
					<li
						class="relative rounded-lg hover:opacity-90 transition-opacity ring-ring hover:ring-1"
					>
						<ArtWork
							href=""
							item={{
								author: artists,
								name: artWork.name,
								slug: artWork.slug,
								createdOn: artWork.createdOn,
								images: artWork.images
							}}
						/>
					</li>
				{/each}
			</ul>
		</div>
		<hr class="border-t border-t-zinc-200" />
	</div>
</section>

<!-- overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring -->
