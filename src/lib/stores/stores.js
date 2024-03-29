import { readable } from "svelte/store";

export const FieldStore = readable([
    {
        id: 'about',
        title: 'About Me',
        description: 'Hey, I\'m <b>Saud</b>!\
        I\'m a Computer Engineer specialized in the Field of Artificial Intelligence. \
        I have practiced DSA(Data structures & Algorithms) and related mathematics throughly.\
        In terms of Operating System choice; I prefer using Unix-based OSs; currently using Apple macOS(Darwin) \
        while my previous being Ubuntu(Debian) and WSL2.\
        Other than computer science I love Philosophy, Nature and my introvert personality.\
        I also like to maintain a personal diary.'
    }, 
    {
        id: 'skills',
        title: 'Skills',
        description: 'These skills were gained by me throughout my educational days.\
        This is NOT to scale and has been included with the intention of displaying my relative strength/knowledge in each. \
        Also to rectify, these are not the only skills that I know; but are only to show some of my favorites.'
    }, 
    {
        id: 'projects',
        title: 'Projects',
        description: 'I love doing projects and I always give 100% to my team. I like to put my team first and than myself. \
        I\'ve been experienced of both Project leader and lead software developer throughout the projects.\
        All these projects are available on my Github.'
    }, 
    {
        id: 'education',
        title: 'Education',
        description: 'I believe that Computer Education is gained more by the SEEKER (self-lerner, i.e. Online) than the COLLEGE-ATTENDER. \
        I gained most of my knowlege by reading books/documentation, watching Coursera/edX/YouTube or even Conferences, and then College. \
        Above I\'ve listed some of the books/courses that helped me a lot.'
    },
    {
        id: 'contact',
        title: 'Contact Me',
        description: 'The above are the ways to contact me.'
    },
    {
        id: 'website',
        title: 'This Webiste',
        description: 'I do not see myself much interested in Web Development; but come-on I can do basic web development; and this is the result.\
        I\'m truly glad to have made this website by my own... Because I belive in UNIQUE IDEAS.\
        I could have had a simple HTML page itself... but I care for UI. \
        I initially decided to make the Portfolio using Plain HTML, CSS, JS but it bored me. Then I decided to use Django, \
        but it just never went forward, then came React; \
        which I felt was unnecessarily complex, so I ended up using SvelteKit. \
        This project is made using SvelteKit and hosted on github pages. \
        The source code for this website is open-source and is available on my \
        <a href="https://github.com/saudkadiri/portfolio">github</a>. I\'ve certainly added mobile-friendliness; but this is primarily for Computers, I belive.\
        <br>On a side note: Apologies if the below quote is poor in taste; it comes from an API; and I\'m not in direct control.'
    }
])