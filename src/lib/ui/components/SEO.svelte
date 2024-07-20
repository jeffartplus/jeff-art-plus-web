<script lang="ts">
	import { page } from '$app/stores';
	import { seoConfig } from '$lib/seoConfig';

	export let data: {
		title: string;
		description: string;
		canonical?: string;
	};

	const { title, description, canonical } = data;

	const determineCanonicalURL = () => {
		if ($page.url.host.includes('localhost')) return 'http://localhost:5173';
		return canonical || $page.url.pathname;
	};

	const canonicalURL = new URL(determineCanonicalURL(), seoConfig.baseURL);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="" />
	<link rel="canonical" href={canonicalURL.href} />
	<meta
		name="keywords"
		content="galeria de arte, jeff, galeria de arte en cuba, exhibiciones, conversatorios, exposiciones"
	/>

	<!-- <meta property="og:title" content={title()} /> -->
	<!-- <meta property="og:image" content={new URL(image, Astro.url)} /> -->
	<meta property="og:description" content={description} />
	<meta property="og:url" content={$page.url.host} />
	<meta property="og:locale" content="es_CU" />
	<meta property="og:locale:alternate" content="en_US" />
	<meta property="og:site_name" content="Jeff Art Plus" />
	<meta property="og:type" content="website" />

	<meta content="https://www.instagram.com/jeffartplus_gallery" property="og:see_also" />
	<meta content="https://www.facebook.com/galeriajeffartplus" property="og:see_also" />
	<meta content="https://www.artnet.com/galleries/white-cube/" property="og:see_also" />

	<!-- <meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" /> -->

	<!-- <meta name="msapplication-config" content="/browserconfig.xml" /> -->

	<!-- <link rel="manifest" href="/manifest.webmanifest" /> -->
</svelte:head>

<!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> -->
<!-- <link rel="apple-touch-icon" href="/img/icons/apple-touch-icon.png" /> -->

<!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> -->
