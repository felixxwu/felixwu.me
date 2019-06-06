import parse from "../util/parse.js";
import store from "../store.js";
import LineClass from "../classes/LineClass.js";
import Block from "../classes/Block.js";
import logic from "./logic.js";

const commands = {
    help: () => {
        const keys = Object.keys(logic);
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

    unrecognised: command => {
        store.dispatch("pushBlock",
            new Block([
                new LineClass(
                    command +
                        ' is an unrecognised command. Type "help" or "?" for a list of commands.'
                ),
                new LineClass("", "input")
            ])
        );
    },

    startup: () => {
        store.dispatch("pushBlock",
            new Block(
                [
                    new LineClass("Starting OS..."),
                    new LineClass("Version " + store.state.version),
                    new LineClass("Loading assets..."),
                    new LineClass("Loading components..."),
                    new LineClass("Loading profile (Felix Wu)..."),
                    new LineClass(""),
                    new LineClass("Done."),
                    new LineClass("Restarting..."),
                    new LineClass(""),
                ],
                true,
                () => {
                    commands.clear();
                    commands.profile();
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
        store.dispatch("pushBlock", parse("Website created with VueJS 2019. Version " + store.state.version))
    },

    profile: () => {
        store.dispatch("pushBlock", parse(
            `
            ██████╗██████╗██╗╸╸╸╸██╗██╗╸╸██╗╸╸╸██╗╸╸╸╸██╗██╗╸╸██╗
            ██╔═══╝██╔═══╝██║╸╸╸╸██║╚██╗██╔╝╸╸╸██║╸╸╸╸██║██║╸╸██║
            █████╗╸████╗╸╸██║╸╸╸╸██║╸╚███╔╝╸╸╸╸██║╸█╗╸██║██║╸╸██║
            ██╔══╝╸██╔═╝╸╸██║╸╸╸╸██║╸██╔██╗╸╸╸╸██║███╗██║██║╸╸██║
            ██║╸╸╸╸██████╗██████╗██║██╔╝╸██╗╸╸╸╚███╔███╔╝╚█████╔╝
            ╚═╝╸╸╸╸╚═════╝╚═════╝╚═╝╚═╝╸╸╚═╝╸╸╸╸╚══╝╚══╝╸╸╚════╝
            Fourth year Computer Science student at The University of Edinburgh.

            Contact:
            felixxwu@gmail.com - 07580633482

            GitHub:
            $lnk https://github.com/felixxwu

            LinkedIn:
            $lnk https://www.linkedin.com/in/felixxwu/

            CLICK TO NAVIGATE TO:
            -----------------------------------------------
            $cmd work_experience

            $cmd personal_projects

            $cmd university_courses

            $cmd technical_skills

            Type "help" or "?" for a list of available commands.`
        ));
    },

    work: () => {
        store.dispatch("pushBlock", parse(
            `
            TRAPIT WEBSITE DESIGN (Freelance, 2018)
            Successfully developed and delivered a blog-like page for the owner of the electronic music YouTube promotion channel "TrapIt", with editor-exclusive interface for the creation and alteration of posts. Applied requirement analysis knowledge from the Software Engineering course at Edinburgh to undertake stakeholder interviews, meetings, requirements specification and use-case documents.
            $img trapit.jpg
            
            VIOLA DA GAMBA SOCIETY WEBSITE REDESIGN (Freelance, 2016)
            Successfully developed and delivered a redesign of the visuals, an updated front-end for improved mobile support, and a framework for the web administrator to maintain the contents of the page. VdGS is a charity dedicated to the revival of, and research into the Viola da Gamba.
            $lnk https://vdgs.org.uk/

            ROOM ACOUSTICS SIMULATION (Placement, 2015)
            4-week long STEM placement for The University of Oxford IT Services to use an agent-based programming language "NetLogo" to complete a concept simulation for standing waves in a variable 2D environment.
            $img room_acoustics.jpg

            SPACEX HYPERLOOP STUDENT COMPETITION (2016 / 17)
            Helped create the website for HYPED, a student society at the University of Edinburgh dedicated to accelerating the development of Hyperloop and implementing the technology in the UK. During my involvement I also learned a lot about various hardware technologies for the pod.
            $lnk https://hyp-ed.com/

            PARENTS' EVENING MODELLING AND PROPOSAL (2016)
            Created a model of queue times at my school's parents' evening using some existing available data. The model showed how sensitive the queuing time is to inefficiencies in between meetings, and the school took measures to combat this in subsequent years.

            Back to profile
            $cmd profile
            `
        ))
    },

    projects: () => {
        store.dispatch("pushBlock", parse(`
            NOXIVE
            Noxive is my alias for my electronic music production hobby. So far I have gained over 500k views across YouTube, SoundCloud and Spotify, and generated a small income of $400 from royalties. I have had the opportunity to collaborate with many talented artists over the last few years, improving my communication and feedback skills.
            $lnk https://soundcloud.com/noxive

            NOXIVE.COM
            A landing page for Noxive, serving also as temporary host for other web-based projects. It features links to my social media, most recent releases, and a built-in web player to preview my discography.
            $lnk https://noxive.com

            SECOND WIND
            Second Wind is a multiplayer real time strategy game (work in progress) in which you control a floating island in search for resources on the map. Resources are finite and so you must compete against other players by engaging in a chess-style turn based battle. The resources you win can be used to upgrade your island and create units for the army you use in battles. Each unit has unique abilities and so choosing the right ones to devlop playstyles and strategies is crucial to winning a battle.
            This project is a collaboration with my university friend and it is my our most ambitious project yet. Working with a partner on such a big project has allowed me to develop my communication, code readability and long term project management like no other coding project has, as well as other technical skills like UI and UX design, optimasations in server-client communication, and preserving code maintainability across a large and long term project.	
            $img second_wind.jpg

            NAUGHTS AND CROSSES WEB APP
            A naughts and crosses game that you can play between two devices in real-time. It uses your device's location to find games nearest to you so you know which ones to connect to. More than anything, this project really served as a way for me to familiarise myself with React.js, Node.js and smooth css animations. Its a proof of concept and learning experience to show that SOME game can be played in real-time, and a lot of the code will be repurposed for Second Wind.	
            $lnk https://felixxwu-xo.herokuapp.com/

            FLATAPP
            FlatApp is a web app that allows groups of people to manage their debts with each other with PayPal integration. Imagine a tool that removes your worry about keeping track of how much your friends owe you from things like groceries, bills, and beer. With FlatApp it is possible to never exchange cash and never worry about debt. Additionally, each group has a communal shopping list and pinned messages board. People can buy items from the shopping list, creating a debt with whoever put the item up, or if the item is a communal item, the debt will be evenly split amongst the group memebers.
            $lnk https://noxive.com/flatapp/features/

            OWME
            Owme is the reincarnation of FlatApp, improving on the shortcomings thereof. It focuses much more on having an individual account with friends, rather than being signed up to a group. Owme's single page design and updated UX for managing debts makes for a very intuitive experience. It also adds a feature to resolve a circle of debt, to further increase the practicality of the app. Groups still exist, but they are a handy shortcut for selecting the set of friends you want to start a tracsaction with. PayPal integration is also improved, taking advantage of the paypal.me system.
            $lnk https://noxive.com/owme

            MUSIC GENERATOR
            A C# Windows app that can randomly generate 16 bars of "House" music, complete with drums, main melody and a chord sequence. The app works by reading from a library of wav files (samples of drums or instrument notes), and combining them into a new wav file. By using a bit of music theory, the chord sequence that is generated is guaranteed to sound musical, and is taken into account when the melody is created so that there are no musical clashes. Various displays show the user the melody and chord sequence, and when they are happy with their creation, it can be exported to .wav or .midi files. Creating .wav and .midi files from scratch requires an understanding of their file structures and headers, which was challenging. A full list of features can be found on the GitHub page.	
            $lnk https://github.com/felixxwu/Music-Generator

            CHORD GENERATOR
            A C# Windows app that lets you explore and combine randomly generated chords, good for endless musical inspiration. Unlike the music generator, these chords are completely random, allowing weird and interesting chords to inspire the user. Chords can be played at the click of a button and a MIDI sequence can be exported to use in any music program. When a chord needs to be played, the app reads from wav files (each a single piano note sound) to combine into a single wav file to play to the user, when the user is happy with the chord sequence, they can export it to a MIDI file.	
            $lnk https://github.com/felixxwu/Chord-Generator

            SUDOKU SOLVER & CREATOR
            A Java app to solve or create Sudoku puzzles. N.B. the created puzzles are solvable, but they have no notion of difficulty since the creation algorithm is simple and naive and does not take into account how a real human might solve a Sudoku puzzle.	
            $lnk https://github.com/felixxwu/Sudoku

            ANDROID ALARM INTERFACE
            An android app that provides a much better interface for setting alarms than the stock app.
            $lnk https://github.com/felixxwu/Alarm-Timer

            ULTRASOUND COMMUNATION
            This Java app allows you to encode text into a wav file, which if played on a speaker will produce ultrasound which cannot be perceived by humans. A smartphone, or other device, can however pick up a limited amount of audio in the ultrasonic (20khz+) range. The recorded audio can be analysed and decoded, and the URL can be extracted.
            We think that this has potential applications in rivalling QR codes, where the encoded ultrasonic URL will be played in a loop somewhere. Surrounding smartphones can then detect the URL and send the user to a page - no need to launch the camera and point it anywhere.
            Created with a partner for the 24h CreatED hackathon.
            $lnk https://github.com/felixxwu/CreatED-Ultrasound

            ENCRYPTION-SECURE CHAT
            This was an excercise to test and advance my knowledge of web security and encryption, and was also a good opportunity to learn how to use websockets. It is a secure and anonymous one-to-one chat with self-deleting messages. The messages are encrypted using a symmetric AES cipher.
            $lnk https://chat-secure.herokuapp.com/

            Back to profile
            $cmd profile
        `))
    },

    courses: () => {
        store.dispatch("pushBlock", parse(`
            Courses that I have taken so far are:
            Software Engineering | Large Practical (Android) | Computer Systems | Algorithms, Data Structures, Learning | Machine Learning | Calculus | Computation and Logic | Data and Analysis | Discrete Mathematics | Processing Languages | Professional Issues | Reasoning and Agents | Functional Programming | Object-Oriented Programming

            Results and topic details can be found on my LinkedIn.
            $lnk https://www.linkedin.com/in/felixxwu/

            Back to profile:
            $cmd profile
        `))
    },

    skills: () => {
        store.dispatch("pushBlock", parse(`
            Spoken languages:
            English: fluent, German: fluent, Cantonese: conversational.

            Most competent in:
            Javascript | Java | Python | Vue.js | React.js | Node.js | PHP | HTML / CSS | SQL | Android (Java/Kotlin) | Object Oriented Programming

            Other skills:
            Unit Testing | Machine Learning | Algorithmic Analysis | Haskell | C | C# | Matlab | MIPS | Assembly

            Back to profile:
            $cmd profile
        `))
    }
};

export default commands;
