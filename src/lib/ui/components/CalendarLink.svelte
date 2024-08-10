<script context="module" lang="ts">
	function convertirFechaAFormatoGoogle(date: Date) {
		// Obtiene los componentes de la fecha
		let year = date.getUTCFullYear();
		let month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Mes empieza desde 0
		let day = date.getUTCDate().toString().padStart(2, '0');
		let hours = date.getUTCHours().toString().padStart(2, '0');
		let minutes = date.getUTCMinutes().toString().padStart(2, '0');
		let seconds = date.getUTCSeconds().toString().padStart(2, '0');

		// Construye el string en el formato deseado
		return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { MoveRight } from 'lucide-svelte';
	export let data: {
		title: string;
		startDate: Date;
		endDate: Date;
	};

	const title = encodeURIComponent(data.title);
	const startDate = convertirFechaAFormatoGoogle(data.startDate);
	const endDate = convertirFechaAFormatoGoogle(data.endDate);
	const location = encodeURIComponent('Galería JEFF ART+, 4HJW+C45, 112 Calle 14, La Habana, Cuba');
</script>

<a
	href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&location=${location}&ctz=America/Havana`}
	target="_blank"
	rel="nofollow"
	{...$$restProps}
	><MoveRight size="16" />
	<span>{m.exhibition_item_add_to_calendar()}</span>
</a>
