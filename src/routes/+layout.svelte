<script>
    import '../styles.css'
    import logo from '$lib/images/tmdb-blue_short.svg';
</script>

<nav>
    <a href="/">PsiFlix</a>
    <div class="links">
        <a href="/search">Search</a>
        <a href="/watchList">WatchList</a>
        <a href="/search">Search</a>
    </div>
</nav>

<main>
    <slot></slot>
</main>

<footer>
    <p> Data Provided by
        <a href="https://www.themoviedb.org">
            <img src={logo} alt="The Movie Database" />
        </a>
    </p>
</footer>
<style>
    nav {
        display: flex;
        width: 100%;
        height: 3rem;
        align-items: center;
        justify-content: space-between;
        max-width: var(--columns);
        padding: 0 var(--side);
        color: var(--accent);
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    img {
        height: 1.5rem;
    }

    .links {
        display: flex;
        gap: 1rem;
    }

    footer {
        display: flex;
        justify-content: center;
        height: 5rem;
    }
</style>