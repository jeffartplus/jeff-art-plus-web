<script lang="ts">
	import HeaderDesktop from './components/HeaderDesktop.svelte';
	import HeaderMobile from './components/HeaderMobile.svelte';
	import * as m from '$lib/paraglide/messages';

	const links = [
		{
			name: m.nav_exhibitions,
			href: '/exhibitions'
		},
		// {
		// 	name: m.nav_conversations,
		// 	href: '/conversations'
		// },
		{
			name: m.nav_artists,
			href: '/artists'
		},
		{
			name: m.nav_jeff,
			href: '/artists/jose-emilio-fuentes-fonseca'
		}
	];
</script>

<header>
	<HeaderDesktop {links} />
	<HeaderMobile links={links.reverse()} />
</header>
