<script lang="ts">
	const images = [
		'/images/gallery-collection-3.webp',
		'/images/gallery-collection-2.webp',
		'/images/gallery-collection-4.webp',
		'/images/gallery-collection-1.webp',
		'/images/gallery-collection-5.webp',
		'/images/gallery-collection-6.webp'
	];
</script>

<div class="w-full flex gap-8 h-fit mt-32 items-center justify-center">
	<img src={images[0]} alt="" class="object-contain w-2/12 rounded-md h-fit" />
	<div class="flex flex-col gap-4 w-2/12">
		<img src={images[1]} alt="" class="object-contain rounded-md h-fit" />
		<img src={images[2]} alt="" class="object-contain rounded-md h-fit" />
	</div>
	<img src={images[3]} alt="" class="object-contain w-2/12 rounded-md h-fit" />
	<img src={images[4]} alt="" class="object-contain w-2/12 rounded-md h-fit" />
	<img src={images[5]} alt="" class="object-contain w-2/12 rounded-md h-fit" />
</div>
