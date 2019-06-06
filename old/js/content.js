
// set the colour of the home page on load, also remove the hash
doWhenLoaded.push(() => {
    setColour(content[0].colour);
    location.hash = "";
})

// edit this to change the content of the pages
const content = [
    {
        id: "home",
        order: 0,
        rightContent: e(Profile, {
            content: {
                title: "Felix Wu",
                bio: "3rd year Computer Science student at The University of Edinburgh"
            }
        }),
        colour: newColour(),
        classes: "fullscreen"
    },
    {
        id: "noxive",
        order: 1,
        title: "Noxive",
        content: "Noxive is the alias I use for my electronic music production hobby. Presentation is very important in the music industry and so a webpage for Noxive was born. On this page there are quick links to my social media, a spotlight for some of my most recent releases, my complete discography sorted into playlists by genre, and a place for fans to sign up to a newsletter. Any song can be played directly from the page using a SoundCloud widget which can be neatly hidden, allowing you to continue navigation.",
        rightContent: e("img", {src: "images/noxive.png"}),
        languages: "PHP, JavaScript",
        linkText: "noxive.com",
        link: "https://noxive.com",
        colour: newColour(),
        classes: "fullscreen vsplit"
    },
    {
        id: "second-wind",
        order: 2,
        content: "A web-based, real-time, online multiplayer strategy game which combines turn-based combat similar to Chess, with high-level resource management and long-term planning like Civilization. The project itself is ongoing and is a collaboration with a friend, built using Node.js and React.js. Working in a team helped us develop our communication, code readability and long term project management, as well as other technical skills like UI and UX design, optimizations in server-client communication, and preserving code maintainability across a large and long-term project.",
        title: "Second Wind",
        rightContent: e("img", {src: "images/secondwind.png"}),
        languages: "NodeJS, ReactJS",
        linkText: null,
        link: null,
        colour: newColour(),
        classes: "fullscreen vsplit"
    },
    {
        id: "xo",
        order: 3,
        content: "A naughts and crosses game that you can play between two devices in real-time. It uses your device's location to find games nearest to you so you know which ones to connect to.",
        title: "Naughts & Crosses",
        rightContent: e("img", {src: "images/xo.png"}),
        languages: "NodeJS, ReactJS",
        linkText: "Play naughts & crosses",
        link: "https://felixxwu-xo.herokuapp.com",
        colour: newColour(),
        classes: "fullscreen vsplit"
    },
    {
        id: "music-generator",
        order: 4,
        content: "An app that can randomly generate 16 bars of \"House\" music, complete with drums, main melody and a chord sequence. By using some music theory, the chord sequence that is generated is guaranteed to sound musical, and is taken into account when the melody is created so that there are no harmonic clashes.",
        title: "Music Generator",
        rightContent: e("img", {src: "images/music-generator.png"}),
        languages: "C# Windows Application",
        linkText: "View on GitHub",
        link: "https://github.com/felixxwu/Music-Generator",
        colour: newColour(),
        classes: "fullscreen vsplit"
    },
    {
        id: "owme",
        order: 5,
        content: "An online financing with PayPal integration tool to help groups of friends keep track of their debts with each other. It helps track how much your friends / flatmates owe you, for example from groceries, bills or beer, and allows you to record debts easily with an intuitive interface.",
        title: "Owme",
        rightContent: e("img", {src: "images/owme.png"}),
        languages: "PHP, JavaScript",
        linkText: "Visit OWME",
        link: "https://noxive.com/owme/",
        colour: newColour(),
        classes: "fullscreen vsplit"
    }
]