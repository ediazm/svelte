
<script>
    export let photo;
</script>

    <div class='heroWrapper'>
        <img src={photo[0].url} alt="movie poster" />
        <p>{photo[0].title}</p>
    </div>
    <style>
        img {
            height: 15rem;
            
            flex-direction: column;
        }

    </style>
