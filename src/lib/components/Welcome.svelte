<div class="typewriter">
    <h1 style="color:crimson;">Welcome to my website.😊</h1>
    <h1 style="color:cornflowerblue;">So glad to have you!💛</h1>
</div>

<style>
    .typewriter {
        font-size: 2.6vmin;
    }
    .typewriter h1 {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: orange; }
    }
</style>