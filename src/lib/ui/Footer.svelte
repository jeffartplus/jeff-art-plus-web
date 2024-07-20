<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { languageTag } from '$lib/paraglide/runtime.js';

	import InstagramIcon from './icons/InstagramIcon.svelte';
	import WhatsAppIcon from './icons/WhatsAppIcon.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';

	export let data: {
		startDay: number;
		endDay: number;
	};

	const days = [
		new Date(0, 0, 0),
		new Date(0, 0, 1),
		new Date(0, 0, 2),
		new Date(0, 0, 3),
		new Date(0, 0, 4),
		new Date(0, 0, 5),
		new Date(0, 0, 6)
	];
	function getDayOfWeek() {
		const startDate = days[data.startDay];
		const endDate = days[data.endDay];
		return `${startDate.toLocaleDateString(languageTag(), {
			weekday: 'long'
		})} - ${endDate.toLocaleDateString(languageTag(), {
			weekday: 'long'
		})}`;
	}
</script>

<footer
	class="h-fit w-full mb-24 md:mb-4 py-4 border-t border-t-zinc-200 text-xs md:text-sm text-black/[.8] md:text-black/[.8]"
>
	<nav class="mx-6 md:mx-14 lg:mx-16 border-t-zinc-200">
		<ul
			class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center justify-items-center gap-y-16 md:gap-y-20 text-base font-normal"
		>
			<li class="nav-ul-li">
				<a href="/about" class="text-black hover:underline">{m.nav_about()}</a>
				<ul class="nav-sublist">
					<li>
						<a href="/contact">{m.nav_contact()}</a>
					</li>
				</ul>
			</li>
			<li class="nav-ul-li">
				<a href="/artists" class="text-black hover:underline">{m.nav_artists()}</a>
				<ul class="nav-sublist"></ul>
			</li>
			<li class="nav-ul-li">
				<a href="/exhibitions" class="text-black hover:underline">{m.nav_exhibitions()}</a>
				<ul class="nav-sublist"></ul>
			</li>
			<li class="nav-ul-li">
				<a href="/conversations" class="text-black hover:underline">{m.nav_conversations()}</a>
				<ul class="nav-sublist"></ul>
			</li>
			<li class="nav-ul-li">
				<a href="/jeff" class="text-black hover:underline">{m.nav_jeff()}</a>
				<ul class="nav-sublist"></ul>
			</li>
		</ul>
	</nav>
	<div
		class="flex flex-col md:flex-row gap-2 md:justify-center items-center mt-14 p-6 border-t border-t-zinc-200"
	>
		<a
			class=" hover:text-black/[.9] transition-colors"
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.google.com/maps/place/JEFF+ART%2B+Gallery/@23.1310096,-82.4050448,20z/data=!4m14!1m7!3m6!1s0x88cd77b43ad0b205:0x4575082e1fcf1f4d!2sJEFF+ART%2B+Gallery!8m2!3d23.1310222!4d-82.4047416!16s%2Fg%2F11y4tlskt4!3m5!1s0x88cd77b43ad0b205:0x4575082e1fcf1f4d!8m2!3d23.1310222!4d-82.4047416!16s%2Fg%2F11y4tlskt4?entry=ttu"
			>{m.address()}</a
		>
		<p class="cursor-default">
			{getDayOfWeek()}. {m.footer_schedule_hours({
				start: '12pm',
				end: '12am'
			})}
		</p>
		<div class="flex gap-2">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="tel:+5351739482"
				aria-label="Chat a WhatsApp"
				class="hover:text-black/[.9] transition-colors"
			>
				(+53) 5 173 9482
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="mailto:jeffartplus@gmail.com"
				aria-label="Enviar correo"
				class="hover:text-black/[.9] transition-colors"
			>
				jeffartplus@gmail.com
			</a>
		</div>
	</div>
	<p class="text-center cursor-default">
		&copy; {m.footer_creative_commons({ year: new Date().getFullYear() })}
	</p>
	<ul class="flex gap-8 w-full justify-center mt-5">
		<li>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://wa.me/5351739482"
				aria-label="Chat a WhatsApp"
				class="fill-black/[.8] hover:fill-black/[.9] transition-colors"
			>
				<WhatsAppIcon />
			</a>
		</li>
		<li>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.instagram.com/jeffartplus_gallery"
				aria-label="Perfil de instagram"
				class="hover:text-black/[.9] transition-colors"
			>
				<InstagramIcon />
			</a>
		</li>
		<li>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.facebook.com/galeriajeffartplus"
				aria-label="Perfil de Facebook"
				class="hover:text-black/[.9] transition-colors"
			>
				<FacebookIcon />
			</a>
		</li>
	</ul>
</footer>

<style lang="postcss">
	.nav-sublist {
		@apply flex flex-col gap-3 md:gap-5 mt-3 md:mt-5 text-sm;
	}
	.nav-ul-li {
		@apply w-28;
	}
</style>
