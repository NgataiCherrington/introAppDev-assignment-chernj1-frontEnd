<nav class="nav-bar">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/auth/register">Sign Up</a></li>
        <li><a href="/login">Log in</a></li>
    </ul>
</nav>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

    .nav-bar {
        /* background-color: #000; */
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-bar ul {
        list-style: none;
        display: flex;
        color: #fff;
        gap: 2rem;
        margin: 0;
        padding: 0;   
    }

    .nav-bar li a {
        text-decoration: none;
        font-family: 'Russo One', sans-serif;
        font-size: 1.2rem;
        color: black;
        letter-spacing: 2px;
        transition: all 0.3s ease-in-out;
        position: relative;
    }

    .nav-bar li a::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 3px;
        left: 0;
        bottom: -5px;
        background-color: black;
        transition: width 0.3s ease-in-out;
    }

    .nav-bar li a:hover::after {
        width: 100%;
    }

    .nav-bar li a:hover{
        color: black;
    }
</style>