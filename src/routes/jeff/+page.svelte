<script lang="ts">
	import type { PageData } from './$types';
	import { Grip } from 'lucide-svelte';

	import { urlFor } from '$lib/sanity';

	import * as m from '$lib/paraglide/messages';

	import SEO from '$lib/ui/components/SEO.svelte';
	import Section from '$lib/ui/Section.svelte';
	import Box from '$lib/ui/components/Box.svelte';

	export let data: PageData;
	const { artist, seo } = data;
	const { name, artWorks, availableArtWorks, exhibitions } = artist;
	console.log(artWorks);
	let toggle = false;
</script>

<SEO data={seo} />

<Section class="mb-4">
	<header
		slot="header"
		class="flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 justify-evenly items-center bg-stone-100 py-24"
	>
		<div class="flex flex-col text-center gap-4">
			<h1 class="font-semibold">{name}</h1>
			<p>B. 1974</p>
		</div>
		<img
			src="/images/jeff.avif"
			width="382"
			height="575"
			alt="Fotografia de José Emilio Fuentes Fonseca"
			class="max-h-[575px] rounded-sm"
		/>
	</header>

	<div class="flex">
		<p class="w-4/5 md:3/5 lg:2/5">
			La obra de José Emilio Fuentes Fonseca, JEFF, es de una singularidad estremecedora en el arte
			cubano actual. No se adscribe a ninguna de las corrientes dominantes que optan por un enfoque
			crítico de sus contextos. expresado en múltiples medios expresivos y el cruce de ellos, o por
			las que privilegian revisitaciones formales de tendencias históricas como demostración de buen
			oficio, apropiaciones críticas y madurez: llámense abstracción, surrealismo, expresionismo,
			transvanguradia, pop art. Tampoco aprovecha las sobradas ventajas que el conceptualismo o el
			minimal brindan a los artistas hoy, ya sea aferrándose de manera ortodoxa a su versión
			original o a esa otra (para engrosar la larga y a ratos abrumadora lista neo ) trasvasada de
			sutilezas contextuales, humor. ironía, parodia, acomodada a los más diversos contextos
			culturales existentes gracias a su versatilidad instrumental. De manera significativa, para no
			decir asombrosa, excluye la fotografía y el video, otras de las expresiones favorecidas
			últimamente por artistas de tantas filiaciones y generaciones.
		</p>

		<button on:click={() => (toggle = !toggle)}>Leer más</button>
		<p class:hidden={!toggle}>
			Si tuviese que resumir su poética basándome en sus más cercanos intereses, afinidades,
			intenciones, en un intento por comprender mejor su visión del mundo, diría que es näif. así, a
			rajatabla.... sin abandonar sospechas y dudas. Poseen sus obras una segura carga de
			ingenuidad, candidez, idealismo, pero ojo: no parte de una formación académica o una
			experiencia sui generis personal, de un deseo explicito por el control de tantos códigos
			asumidos durante la niñez sino de una asunción casi natural, orgánico, de ese universo
			expresado vivazmente por los niños, despojado con sinceridad de trucos, guiños, falsedades,
			artificialidad, prepotencia, sarcasmos, dobleces, ambigüedad. Cuando le preguntaron a José
			Lezama Lima porqué quería escribir de esa manera por todos conocida, porqué la eligió como su
			lenguaje esencial, respondió más o menos: no es que yo quiera, es que yo escribo así. JEFF
			crea así: no hay que buscar otra pata a la mesa. Esto lo definiría, de un modo u otro, como un
			artista raro, impar, incomparable, alienado del medio artístico en que opera y vive aún cuando
			a simple vista todos reconocemos por donde va. hacia donde se encamina su notoria y prolífica
			producción simbólica. Ni por el mero hecho de haber vivido en Buenavista, barrio catalogado de
			duro y conflictivo en la zona norte del lujoso Miramar, preámbulo ambiental y rico de los
			archiconocidos Marianao y La Lisa, JEFF decidió iluminarse con sus complejos valores sociales
			y culturales, con sus códigos públicos y secretos, con sus misterios --asi de inmenso
			escribiría Gabrielle d'Annunzio-- para producir una obra contaminada por la violencia, el
			alarde, aguaje, bravata. No. Estas categorías las conoce muy y hasta probablemente se
			identifique con algunas de ellas ellos y formen parte de sus músculos y sangre, de su
			imaginario pero no irrigan con fuerza suficiente su cerebro e imaginación para convertirlas en
			parte de su lenguaje creador y devenir artista duro. tough, o en algún caso marginal,
			alternativo. Pasan por su sistema nervioso, por sus emociones y sentimientos pero siguen su
			curso hacia otras regiones del cuerpo que le permiten desarrollar, con serenidad y mesura, una
			obra a la buena vista de amigos, curadores, artistas, críticos y vecinos sobre todo,
			asombrados ante tanta parafernalia de objetos enormes que de vez en vez él exhibe en la acera
			de su estudio-casa por falta de espacio en el interior. Luego de una etapa agresiva,
			desgarrada en cierto modo, mientras estudiaba en la ENA y luego en el Instituto Superior de
			Arte, a mediados y fines de los 90 donde participó también como miembro del proyecto Galería
			DUPP hasta su separación en el año 2000, JEFF visibiliza una jugosa cantidad de miedos,
			pesadillas, frustraciones, deseos, mediante la elaboración de diversidad de juegos y juguetes
			realizados con hierros gastados, maderas vencidas, y pobres materiales en general. Recuerdo
			fundamentalmente su exposición en la Fundación Ludwig, 1996, su exposición de Pintura y
			Escultura en la Galería Habana, 2000, y sobre todo su instalación enorme o "parque infantil"
			cuyo título Salud mental, exhibida en el Centro de Arte Contemporáneo Wifredo Lam como parte
			del III Salón de Arte Contemporáneo Cubano..... Una vez concluidos sus estudios en el ISA,
			2003, JEFF revierte dicho proceso psicosocial vivido con dramática intensidad, en obras casi
			diametralmente opuestas. Hace un giro de 180 grados y deja a un lado el objeto encontrado, la
			voluntad explícita del reciclaje abundante de material industrial o artesanal y entierra, al
			menos temporalmente, la estética povera que prevaleció en su estética durante los años 90 y
			principios del siglo xxi. Dueño al fin de su propia casa y destino, rodeado de afectos y
			sentimientos afines, decide cambiar el orden de sus cosas. Aquellos demonios que aparecían
			cabalgando a galope desde su infancia son arrinconados, quien sabe hasta cuanto tiempo más,
			para dar paso a una nueva cosmovisión cuyos cimientos le vienen de aquella remota región de la
			infancia, modelada ahora desde una perspectiva diferente, descubiertos quizás in fraganti sus
			impulsos vitales, sus resortes primigenios colmados de gratitud, ternura. sueños,
			aspiraciones. De l'enfant terrible del arte cubano pasa a ser un niño sencillo, uno más sin
			calificativos tremendos, como la inmensa mayoría: solo que él persiste en mantener vivos su
			adultez ahora, la carga afectiva y sentimental que ese periodo fundamental de nuestras vidas
			comporta. JEFF descubre así la plasticidad consustancial a la grafía inocente, honesta,
			afincada en libretas escolares, diarios, hojas sueltas, y el valor innegable de decenas y
			cientos de objetos que pueblan la imaginación y la existencia material de los niños. Y se
			lanza a recuperar un espacio cultural que creía extraviado en el fárrago vivencial de los
			adultos. Descubre la natural expresividad del grafiti urbano y de toda marca descubierta en
			cualquier parte, sea una pared, un árbol o el asfalto, testigo mudo e insobornable de las
			propias venturas y desventuras humanas.
		</p>
	</div>
	{#if artWorks.length > 0}
		<Box list={artWorks} />
	{/if}
	{#if availableArtWorks.length > 0}
		<Box list={availableArtWorks} />
	{/if}
	{#if exhibitions.length > 0}
		<Box list={exhibitions} />
	{/if}
</Section>

<style>
	h1 {
		font-weight: 300;
		line-height: 1.1;
		font-size: clamp(
			1.9845247890275728rem,
			calc(
				1.9845247890275728rem +
					((3.2501858347837747 - 1.9845247890275728) * ((100vw - 20rem) / (96 - 20)))
			),
			3.2501858347837747rem
		);
	}
</style>
