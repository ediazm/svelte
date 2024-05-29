<script>
import Carousel from '$lib/Carousel.svelte';
import Hero from './Hero.svelte';
    export let data;
</script>

<h1> Top Trending Movies</h1>

<Hero photo={data.trendingPhotos} />
<Carousel photos={data.trendingPhotos}/>