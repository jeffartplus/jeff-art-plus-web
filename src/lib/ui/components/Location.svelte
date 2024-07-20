<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<div class="flex gap-2">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="lucide lucide-map-pin"
		><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"
		></circle></svg
	>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://www.google.com/maps/place/JEFF+ART%2B+Gallery/@23.1310096,-82.4050448,20z/data=!4m14!1m7!3m6!1s0x88cd77b43ad0b205:0x4575082e1fcf1f4d!2sJEFF+ART%2B+Gallery!8m2!3d23.1310222!4d-82.4047416!16s%2Fg%2F11y4tlskt4!3m5!1s0x88cd77b43ad0b205:0x4575082e1fcf1f4d!8m2!3d23.1310222!4d-82.4047416!16s%2Fg%2F11y4tlskt4?entry=ttu"
		class="text-sm md:text-base lg:text-2xl"
	>
		{m.address()}
	</a>
</div>
