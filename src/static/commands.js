import parse from "../util/parse.js";
import store from "../store.js";
import LineClass from "../classes/LineClass.js";
import Block from "../classes/Block.js";
import logic from "./logic.js";
import script from "./script.js";
// import config from "../config.js";

const commands = {
    KEYS: function() {
        return Object.keys(this)
            .filter(key => key !== "unrecognised")
            .filter(key => key !== "clear")
            .filter(key => key !== "KEYS")
            .filter(key => key !== "showInput")
            .filter(key => key !== "gnomed")
            .filter(key => key !== "jazz")
            .concat(Object.keys(logic));
    },
    help: function() {
        const keys = this.KEYS();
        const block = new Block(
            [new LineClass("Availabe commands are:")]
                .concat(
                    keys.map(key => {
                        return new LineClass(key, "command");
                    })
                )
                .concat(new LineClass("", "input"))
        );

        store.dispatch("pushBlock", block);
    },

    "?": function() {
        this.help();
    },

    unrecognised: function(command) {
        const keys = this.KEYS();
        const didyoumean = keys.filter(key => key.includes(command))
        const commands = didyoumean.map(command => "$cmd " + command + "\n");
        if (commands.length === 0) {
            store.dispatch("pushBlock", parse(
                `"${command}" is an unrecognised command. Type "help" or "?" for a list of commands.`
            ))
        } else {

            store.dispatch("pushBlock", parse(
                '"' + command + '" is an unrecognised command. Did you mean:\n' +
                commands.join('') + 
                '\nType "help" or "?" for a list of commands.'
            ));
        }
    },

    // theme: () => {
    //     const white = window.getComputedStyle(document.body).getPropertyValue("--white");
    //     const black = window.getComputedStyle(document.body).getPropertyValue("--black");
    //     const blue = window.getComputedStyle(document.body).getPropertyValue("--blue");
    //     document.body.style.setProperty("--white", black);
    //     document.body.style.setProperty("--black", white);
    //     document.body.style.setProperty("--blue", config.secondBlue);
    //     config.secondBlue = blue;

    //     store.dispatch("pushBlock", new Block([new LineClass("", "input")]));
    // },

    // ██████╗██████╗██╗╸╸╸╸██╗██╗╸╸██╗╸╸╸██╗╸╸╸╸██╗██╗╸╸██╗
    // ██╔═══╝██╔═══╝██║╸╸╸╸██║╚██╗██╔╝╸╸╸██║╸╸╸╸██║██║╸╸██║
    // █████╗╸████╗╸╸██║╸╸╸╸██║╸╚███╔╝╸╸╸╸██║╸█╗╸██║██║╸╸██║
    // ██╔══╝╸██╔═╝╸╸██║╸╸╸╸██║╸██╔██╗╸╸╸╸██║███╗██║██║╸╸██║
    // ██║╸╸╸╸██████╗██████╗██║██╔╝╸██╗╸╸╸╚███╔███╔╝╚█████╔╝
    // ╚═╝╸╸╸╸╚═════╝╚═════╝╚═╝╚═╝╸╸╚═╝╸╸╸╸╚══╝╚══╝╸╸╚════╝

    home: () => {
        store.dispatch("pushBlock", parse(
            `$h1 FELIX WU
            Fourth year Computer Science student at The University of Edinburgh.

            $b Email:
            felixxwu@gmail.com

            $b CV:
            $lnk /Felix%20Wu%20-%20CV.pdf

            $b GitHub:
            $lnk https://github.com/felixxwu

            $b LinkedIn:
            $lnk https://www.linkedin.com/in/felixxwu/

            $b Work and past experience:
            $cmd work

            $b Personal projects and hobbies:
            $cmd projects

            $b University courses at Edinburgh:
            $cmd courses

            $b Technical skills and languages:
            $cmd skills

            Type "help" or "?" for a list of available commands.`,
            true
        ));
    },

    work: () => {
        store.dispatch("pushBlock", parse(
            `$h1 WORK EXPERIENCE

            TrapIt Website Design (Freelance, 2018)
            $cmd trapit
            
            Viola Da Gamba Society Website Redesign (Freelance, 2016)
            $cmd vdgs

            Room Acoustics Simulation (Placement, 2015)
            $cmd acoustics

            Spacex Hyperloop Student Competition (2016 / 17)
            $cmd hyperloop

            Parents' Evening Modelling and Proposal (2016)
            $cmd parents

            $b Back to home
            $cmd home
            `
        ))
    },

    trapit: () => {
        store.dispatch("pushBlock", parse(
            `$h1 TRAPIT WEBSITE DESIGN 
            (Freelance, 2018)

            Successfully developed and delivered a blog-like page for the owner of the electronic music YouTube promotion channel "TrapIt", with editor-exclusive interface for the creation and alteration of posts. Applied requirement analysis knowledge from the Software Engineering course at Edinburgh to undertake stakeholder interviews, meetings, requirements specification and use-case documents.

            $img trapit.jpg

            $b Go back
            $cmd work
            $cmd home
            `
        ))
    },

    vdgs: () => {
        store.dispatch("pushBlock", parse(
            `$h1 VIOLA DA GAMBA SOCIETY WEBSITE REDESIGN
            (Freelance, 2016)

            Successfully developed and delivered a redesign of the visuals, an updated front-end for improved mobile support, and a framework for the web administrator to maintain the contents of the page. VdGS is a charity dedicated to the revival of, and research into the Viola da Gamba.

            $lnk https://vdgs.org.uk/
            $img vdgs.jpg

            $b Go back
            $cmd work
            $cmd home
            `
        ))
    },

    acoustics: () => {
        store.dispatch("pushBlock", parse(
            `$h1 ROOM ACOUSTICS SIMULATION
            (Placement, 2015)

            4-week long STEM placement for The University of Oxford IT Services to use an agent-based programming language "NetLogo" to complete a concept simulation for standing waves in a variable 2D environment.

            $img room_acoustics.jpg

            $b Go back
            $cmd work
            $cmd home
            `
        ))
    },

    hyperloop: () => {
        store.dispatch("pushBlock", parse(
            `$h1 SPACEX HYPERLOOP STUDENT COMPETITION
            (2016 / 17)

            Helped create the website for HYPED, a student society at the University of Edinburgh dedicated to accelerating the development of Hyperloop and implementing the technology in the UK. During my involvement I also learned a lot about various hardware technologies for the pod.

            $lnk https://hyp-ed.com/
            $img hyped.jpg

            $b Go back
            $cmd work
            $cmd home
            `
        ))
    },

    parents: () => {
        store.dispatch("pushBlock", parse(
            `$h1 PARENTS' EVENING MODELLING AND PROPOSAL
            (2016)

            Created a model of queue times at my school's parents' evening using some existing available data. The model showed how sensitive the queuing time is to inefficiencies in between meetings, and the school took measures to combat this in subsequent years.

            $b Go back
            $cmd work
            $cmd home
            `
        ))
    },

    projects: () => {
        store.dispatch("pushBlock", parse(`
            $h1 PERSONAL PROJECTS

            Noxive: my electronic music production hobby, since 2014.
            $cmd noxive

            Noxive.com: the official website for Noxive.
            $cmd noxivecom

            Second Wind: a real-time online multiplayer strategy game.
            $cmd secondwind

            Naughts and crosses multiplayer web app.
            $cmd naughtsandcrosses

            FlatApp: a debt manager for friends and family.
            $cmd flatapp

            Owme: an improved version of FlatApp.
            $cmd owme

            Music generator complete with drums, chords and melody.
            $cmd housegenerator

            Chord generator capable of generating more complex chords.
            $cmd chordgenerator

            Sudoku solver and creator.
            $cmd sudoku

            Android alarm interface app.
            $cmd alarm

            Communicating data over ultrasound.
            $cmd ultrasound

            Chat web app with encryption.
            $cmd chat

            $b Back to home
            $cmd home
        `))
    },

    noxive: () => {
        store.dispatch("pushBlock", parse(
            `$h1 NOXIVE

            Noxive is my alias for my electronic music production hobby. So far I have gained over 500k views across YouTube, SoundCloud and Spotify, and generated a small income of $400 from royalties. I have had the opportunity to collaborate with many talented artists over the last few years, improving my communication and feedback skills.

            $lnk https://soundcloud.com/noxive
            $img noxive.jpg

            $b Related:
            $cmd noxivecom

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    noxivecom: () => {
        store.dispatch("pushBlock", parse(
            `$h1 NOXIVE.COM

            A landing page for Noxive, serving also as temporary host for other web-based projects. It features links to my social media, most recent releases, and a built-in web player to preview my discography.

            $lnk https://noxive.com
            $img noxive.com.jpg

            $b Related:
            $cmd noxive

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    secondwind: () => {
        store.dispatch("pushBlock", parse(
            `$h1 SECOND WIND

            Second Wind is a multiplayer real time strategy game (work in progress) in which you control a floating island in search for resources on the map. Resources are finite and so you must compete against other players by engaging in a chess-style turn based battle. The resources you win can be used to upgrade your island and create units for the army you use in battles. Each unit has unique abilities and so choosing the right ones to devlop playstyles and strategies is crucial to winning a battle.
            This project is a collaboration with my university friend and it is my our most ambitious project yet. Working with a partner on such a big project has allowed me to develop my communication, code readability and long term project management like no other coding project has, as well as other technical skills like UI and UX design, optimasations in server-client communication, and preserving code maintainability across a large and long term project.

            $img second_wind.jpg

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    naughtsandcrosses: () => {
        store.dispatch("pushBlock", parse(
            `$h1 NAUGHTS AND CROSSES WEB APP

            A naughts and crosses game that you can play between two devices in real-time. It uses your device's location to find games nearest to you so you know which ones to connect to. More than anything, this project really served as a way for me to familiarise myself with React.js, Node.js and smooth css animations. Its a proof of concept and learning experience to show that SOME game can be played in real-time, and a lot of the code will be repurposed for Second Wind.

            $lnk https://felixxwu-xo.herokuapp.com/
            $img naughts_and_crosses.jpg

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    flatapp: () => {
        store.dispatch("pushBlock", parse(
            `$h1 FLATAPP
            
            FlatApp is a web app that allows groups of people to manage their debts with each other with PayPal integration. Imagine a tool that removes your worry about keeping track of how much your friends owe you from things like groceries, bills, and beer. With FlatApp it is possible to never exchange cash and never worry about debt. Additionally, each group has a communal shopping list and pinned messages board. People can buy items from the shopping list, creating a debt with whoever put the item up, or if the item is a communal item, the debt will be evenly split amongst the group memebers.

            $lnk https://noxive.com/flatapp/features/
            $img flat_app.jpg

            $b Related:
            $cmd owme

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    owme: () => {
        store.dispatch("pushBlock", parse(
            `$h1 OWME
            
            Owme is the reincarnation of FlatApp, improving on the shortcomings thereof. It focuses much more on having an individual account with friends, rather than being signed up to a group. Owme's single page design and updated UX for managing debts makes for a very intuitive experience. It also adds a feature to resolve a circle of debt, to further increase the practicality of the app. Groups still exist, but they are a handy shortcut for selecting the set of friends you want to start a tracsaction with. PayPal integration is also improved, taking advantage of the paypal.me system.

            $lnk https://noxive.com/owme
            $img owme.jpg

            $b Related:
            $cmd flatapp

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    housegenerator: () => {
        store.dispatch("pushBlock", parse(
            `$h1 MUSIC GENERATOR

            A C# Windows app that can randomly generate 16 bars of "House" music, complete with drums, main melody and a chord sequence. The app works by reading from a library of wav files (samples of drums or instrument notes), and combining them into a new wav file. By using a bit of music theory, the chord sequence that is generated is guaranteed to sound musical, and is taken into account when the melody is created so that there are no musical clashes. Various displays show the user the melody and chord sequence, and when they are happy with their creation, it can be exported to .wav or .midi files. Creating .wav and .midi files from scratch requires an understanding of their file structures and headers, which was challenging. A full list of features can be found on the GitHub page.

            $lnk https://github.com/felixxwu/Music-Generator
            $img music_generator.jpg

            $b Related:
            $cmd chordgenerator

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    chordgenerator: () => {
        store.dispatch("pushBlock", parse(
            `$h1 CHORD GENERATOR
            
            A C# Windows app that lets you explore and combine randomly generated chords, good for endless musical inspiration. Unlike the music generator, these chords are completely random, allowing weird and interesting chords to inspire the user. Chords can be played at the click of a button and a MIDI sequence can be exported to use in any music program. When a chord needs to be played, the app reads from wav files (each a single piano note sound) to combine into a single wav file to play to the user, when the user is happy with the chord sequence, they can export it to a MIDI file.	
            
            $lnk https://github.com/felixxwu/Chord-Generator
            $img chord_generator.jpg

            $b Related:
            $cmd housegenerator

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    sudoku: () => {
        store.dispatch("pushBlock", parse(
            `$h1 SUDOKU SOLVER & CREATOR

            A Java app to solve or create Sudoku puzzles. N.B. the created puzzles are solvable, but they have no notion of difficulty since the creation algorithm is simple and naive and does not take into account how a real human might solve a Sudoku puzzle.	
            
            $lnk https://github.com/felixxwu/Sudoku
            $img sudoku.jpg

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    alarm: () => {
        store.dispatch("pushBlock", parse(
            `$h1 ANDROID ALARM INTERFACE
            
            An android app that provides a much better interface for setting alarms than the stock app.

            $lnk https://play.google.com/store/apps/details?id=wu.felix.alarmtimer
            $img android_alarm.jpg

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    ultrasound: () => {
        store.dispatch("pushBlock", parse(
            `$h1 ULTRASOUND COMMUNATION

            This Java app allows you to encode text into a wav file, which if played on a speaker will produce ultrasound which cannot be perceived by humans. A smartphone, or other device, can however pick up a limited amount of audio in the ultrasonic (20khz+) range. The recorded audio can be analysed and decoded, and the URL can be extracted.
            We think that this has potential applications in rivalling QR codes, where the encoded ultrasonic URL will be played in a loop somewhere. Surrounding smartphones can then detect the URL and send the user to a page - no need to launch the camera and point it anywhere.
            Created with a partner for the 24h CreatED hackathon.

            $lnk https://github.com/felixxwu/CreatED-Ultrasound

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    chat: () => {
        store.dispatch("pushBlock", parse(
            `$h1 ENCRYPTION-SECURE CHAT

            This was an excercise to test and advance my knowledge of web security and encryption, and was also a good opportunity to learn how to use websockets. It is a secure and anonymous one-to-one chat with self-deleting messages. The messages are encrypted using a symmetric AES cipher.

            $lnk https://chat-secure.herokuapp.com/
            $img encrypted_chat.jpg

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    courses: () => {
        store.dispatch("pushBlock", parse(`
            $h1 UNIVERSITY COURSES

            $b COURSES COMPLETED AT EDINBURGH:

            Software Testing,
            Computer Security,
            Professional Issues,
            Introductory Applied Machine Learning,
            Large Practical (Android App),
            Operating Systems,
            System Design Project (Robotics Team Project),
            Probability with Applications,
            Discrete Mathematics and Mathematical Resoning,
            Introduction to Software Engineering,
            Introduction to Computer Systems,
            Reasoning and Agents,
            Algorithms, Data Structures & Learning,
            Processing Formal and Natural Languages,
            Calculus and its Applications,
            Introduction to Linear Algebra,
            Cognitive Science,
            Data and Analysis,
            Object-Oriented Programming
            Functional Programming,
            Computation and Logic,

            $b Average grade: 72%

            Individual results and topic details can be found on my LinkedIn.
            $lnk https://www.linkedin.com/in/felixxwu/

            $b Back to home:
            $cmd home
        `))
    },

    skills: () => {
        store.dispatch("pushBlock", parse(`
            $h1 TECHNICAL SKILLS

            $b SPOKEN LANGUAGES:
            English: fluent,
            German: fluent,
            Cantonese: conversational

            $b MOST COMPETENT IN:
            Javascript,
            Vue.js,
            Java,
            Python,
            React.js,
            Node.js,
            PHP,
            HTML / CSS,
            SQL,
            Android (Java/Kotlin),
            Object Oriented Programming,
            Unit Testing

            $b OTHER SKILLS:
            Machine Learning,
            Algorithmic Analysis,
            Haskell,
            C,
            C#,
            Matlab,
            MIPS Assembly

            $b Back to home:
            $cmd home
        `))
    },

    reboot: () => {
        store.dispatch("pushBlock",
            new Block(
                [
                    new LineClass("Starting OS...", "bold"),
                    new LineClass("Version " + store.state.version),
                    new LineClass("Loading components..."),
                    new LineClass("Loading image files..."),
                    new LineClass("Loading movie scripts..."),
                    new LineClass("Loading pages..."),
                    new LineClass("Loading profile..."),
                    new LineClass(""),
                    new LineClass("Done.", "bold"),
                    new LineClass("Launching..."),
                    new LineClass(""),
                ],
                true,
                () => {
                    commands.clear();
                    commands.home();
                }
            )
        );
    },

    clear: () => {
        store.dispatch("clear");
    },

    showInput: () => {
        store.dispatch("pushBlock", new Block([new LineClass("", "input")]));
    },

    about: () => {
        store.dispatch("pushBlock", parse("Website created with VueJS (2019). Version " + store.state.version))
    },

    gnomed: () => {
        store.dispatch("pushBlock", parse(
            "⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⣿⣿⣿⣿⣿⣿\n⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿\n⣿⣿⣤⣀⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿\n⣿⣿⣿⡟⣻⣿⣿⣿⣿⣿⣟⠉⠙⢹⣿⣏⠉⢹⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⠟⠋⠄⣿⣿⣿⣿⣿⣿⣿⣟⡛⠛⢛⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡟⠁⠄⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡇⠄⠄⠄⠄⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠛⠿⠛⠻⣿\n⡇⠄⠄⠄⠄⠄⠄⠘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠄⠄⠄⠄⣠⣽\n⣇⣀⠄⣀⡀⢀⠄⠄⠄⠄⠙⠛⠛⠿⣿⢿⠿⠟⠛⠄⠄⠄⠄⠈⢿⣿"
        ))
    },

    jazz: () => {
        store.dispatch("pushBlock", parse(script));
    }
};

export default commands;
