<script lang='ts'>
    export let photos = [];
</script>

<div class="carousel">
    {#each photos as photo}
    <div class="container">
        <img src={photo.url} alt="photos" />
        <p>{photo.title}</p>
    </div>
    {/each}
</div>

<style>
    .carousel {
        display: flex;
        height: 10rem;
        overflow-x: scroll;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
    }

    img {
        height: 100%;
    }

    p {
        position: relative;
    }
</style>