<script lang="ts">
	import { page } from '$app/stores';

	import { i18n } from '$lib/i18n';
	import { languageTag } from '$lib/paraglide/runtime';

	export let lang: string;
</script>

<a
	href={i18n.route($page.url.pathname)}
	hreflang={lang}
	aria-current={lang === languageTag() ? 'page' : undefined}
	{...$$restProps}
>
	<slot>
		{lang.toUpperCase()}
	</slot>
</a>
