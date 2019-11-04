import parse from "../util/parse.js";
import store from "../store.js";
import LineClass from "../classes/LineClass.js";
import Block from "../classes/Block.js";
import script from "./script.js";

const commands = {
    KEYS: function() {
        return Object.keys(this)
            .filter(key => key !== "unrecognised")
            .filter(key => key !== "KEYS")
            .filter(key => key !== "showInput")
            .filter(key => key !== "gnomed")
            .filter(key => key !== "jazz")
            .sort()
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
            $lnk https://felixwu.me/cv

            $b GitHub:
            $lnk https://github.com/felixxwu

            $b LinkedIn:
            $lnk https://linkedin.com/in/felixxwu

            $b Work and past experience:
            $cmd work

            $b Personal projects and hobbies:
            $cmd projects

            $b University courses at Edinburgh:
            $cmd courses

            $b Technical skills and languages:
            $cmd skills

            Type "help" or "?" for a list of available commands.`
        ));
    },

    work: () => {
        store.dispatch("pushBlock", parse(
            `$h1 WORK & EXPERIENCE

            School of Engineering IT Team Intern (Summer 2019)
            $cmd engineering

            Chess Robot Group Project (2019)
            $cmd chess

            Room Acoustics Simulation Intern (Summer 2015)
            $cmd acoustics

            Spacex Hyperloop Student Competition (2016 / 17)
            $cmd hyperloop

            TrapIt Website Design (Freelance, 2018)
            $cmd trapit
            
            Viola Da Gamba Society Website Redesign (Freelance, 2016)
            $cmd vdgs

            Parents' Evening Modelling and Proposal (2016)
            $cmd parents

            $b Back to home
            $cmd home
            `
        ))
    },

    engineering: () => {
        store.dispatch("pushBlock", parse(
            `$h1 SCHOOL OF ENGINNERING INTERNSHIP
            (2019)

            A 3-month long internship for the School of Engineering at the University of Edinburgh, in which I worked with the IT Team to build the foundations of the new user interface for various database management related internal applications. The component that I was in charge of would be capable of making complex queries, displaying results in a modular and configurable way, and editing field values and relationships robustly and intuitively, amongst other things.
            The main challenge was to create this component to be highly configurable for a wide variety of applications including a staff and student account and relationship management system, a desk allocation system, and a software license tracking system. These applications were to be developed by other teams at the School of Engineering and so I was working closely with them to fulfill the requirements.
            The technology stack for these projects is:
            • Pyramid-Python backend with the pyramid-jsonapi library
            • PostgreSQL database
            • RESTful API (JSON API)
            • Vue and Vuex frontend with the jsonapi-vuex library

            See these slides for a good visual explaination of the main features:
            $lnk https://docs.google.com/presentation/d/1hC0ARHAVeDWvg32CgGt-9TvGQ4KT9Dvw-lKLDy_WSjg

            $b GitHub:
            $lnk https://github.com/uoe-eng/SearchListDetail-Component

            $b Preview:
            $img engineering.jpg

            $b Related:
            $lnk https://jsonapi.org
            $lnk https://github.com/colinhiggs/pyramid-jsonapi
            $lnk https://github.com/mrichar1/jsonapi-vuex

            $b Go back
            $cmd work
            $cmd home
            `
        ))
    },

    trapit: () => {
        store.dispatch("pushBlock", parse(
            `$h1 TRAPIT WEBSITE DESIGN 
            (Freelance, 2018)

            Successfully developed and delivered a blog-like page for the owner of the electronic music YouTube promotion channel "TrapIt", with editor-exclusive interface for the creation and alteration of posts. Applied requirement analysis knowledge from the Software Engineering course at Edinburgh to undertake stakeholder interviews, meetings, requirements specification and use-case documents.

            $b Preview:
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

            $b Link:
            $lnk https://vdgs.org.uk/

            $b Preview:
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

            4-week long STEM placement for The University of Oxford IT Services to use a novel agent-based programming language called "NetLogo" to complete a concept simulation for standing waves in a variable 2D environment.

            $b Report:
            $lnk https://drive.google.com/file/d/0B30xqmiMfbvLTXdYZjJWRG1UeEk

            $b Preivew:
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

            $b Link:
            $lnk https://hyp-ed.com/

            $b Preview:
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

    chess: () => {
        store.dispatch("pushBlock", parse(
            `$h1 CHESS ROBOT GROUP PROJECT
            (2019)

            As the leader of the software team of 5, I was in charge of holding weekly meetings, discussing ideas, constructing a plan of attack, and distributing tasks and deadlines. Our robot was capable of scanning the state of any chess board, querying a chess AI for a move to play, then send instructions to a robotic arm to execute the move. We trained a machine learning classifier running on a server to recognise the positions of the pieces on the board, and used a RESTful API to talk to the Raspberry Pi to execute arm movement. My main task was to write code to interface with the robotic arm. Our robot won second place out of 22 groups.

            $b General overview of software tasks:
            • Find the boundaries of the chess board (most chess boards work)
            • Segment the image into 64 squares
            • Train a machine learning model to recognise if a square contains a white, black or no chess piece
            • Infer the new board state using this new information and previous board states
            • Query a chess AI for a move to play
            • Convert the move to a series of movements to control the robotic arm
            • Create a text-to-speech and speech-to-text interface in different languages to control the game

            $b Links:
            $lnk https://github.com/nogamesEd/plans/blob/master/Technical_report.pdf
            $lnk https://github.com/nogamesEd/pi

            $b Images:
            $img chess_1.jpg
            $img chess_2.jpg

            $b Go back
            $cmd work
            $cmd home
            `
        ))
    },

    projects: () => {
        store.dispatch("pushBlock", parse(
            `$h1 PERSONAL PROJECTS

            Noxive: my electronic music production hobby, since 2014.
            $cmd noxive

            Noxive.com: the official website for Noxive.
            $cmd noxiveweb

            FlatApp: a debt manager for friends and family.
            $cmd flatapp

            Owme: an improved version of FlatApp, with a new deisgn and more features.
            $cmd owme

            Second Wind: a real-time online multiplayer strategy game.
            $cmd secondwind

            Music generator complete with drums, chords and melody.
            $cmd housegenerator

            Chord generator capable of generating more complex chords.
            $cmd chordgenerator

            Android alarm interface app.
            $cmd alarm

            Communicating data over ultrasound.
            $cmd ultrasound

            Web messenger app with strong encryption.
            $cmd chat

            Naughts and crosses multiplayer web app.
            $cmd naughtsandcrosses

            Sudoku solver and creator.
            $cmd sudoku

            This website!
            $cmd about

            $b Back to home
            $cmd home
        `))
    },

    noxive: () => {
        store.dispatch("pushBlock", parse(
            `$h1 NOXIVE

            Noxive is my alias for my electronic music production hobby. So far I have gained over 500k views across YouTube, SoundCloud and Spotify, and generated a small income of $400 from royalties. I have had the opportunity to collaborate with many talented artists over the last few years, improving my communication and feedback skills.

            $b SoundCloud:
            $lnk https://soundcloud.com/noxive

            $b Preview:
            $img noxive.jpg

            $b Related:
            $cmd noxiveweb

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    "noxiveweb": () => {
        store.dispatch("pushBlock", parse(
            `$h1 NOXIVE.COM

            A landing page for Noxive, serving also as temporary host for other web-based projects. It features links to my social media, discography, and a built-in music player. I advertise this site anywhere I can because it has proven to serve well as an entry point for anyone looking for a particular Noxive social media account or release.

            $b Feature overview:
            • An elegant and dynamic list of all Noxive releases
            • Links to relevant social media accounts and a small about section
            • A built-in music player for each release
            • A list of platforms where the release can be found (Spotify, YouTube, etc.)
            • Data pulled from a Firebase database, making it very easy to add new releases
            • The tag under a release can be clicked to show all releases with the same tag

            $b Links:
            $lnk https://noxive.com
            $lnk https://github.com/felixxwu/noxive

            $b Preview:
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

            Second Wind is a multiplayer real time strategy game (work in progress) in which you control a floating island in search for resources on the map. Resources are finite and so you must compete against other players by engaging in a chess-style turn based battle. The resources you win can be used to upgrade your island and create units for the army you use in battles. Each unit has unique abilities and so choosing the right ones to develop play styles and strategies is crucial to winning a battle.
            This project is an ambitious team collaboration with a university friend spanning several years, that we are unfortunately struggling to find time to complete. However, working with a partner on such a big project has allowed me to develop my communication, code readability and long term project management like no other coding project has, as well as other technical skills like UI and UX design, optimisations in server-client communication, and preserving code maintainability across a large and long term project.

            $b Links:
            $lnk https://noxive.com/secondwind
            $lnk https://github.com/felixxwu/secondwind

            $b Preview:
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

            A naughts and crosses game that you can play between two devices in real-time. It uses your device's location to find games nearest to you so you know which ones to connect to.
            More than anything, this project really served as a way for me to familiarise myself with React.js, Node.js and css animations. Its a proof of concept and learning experience to show that a game can be played in real-time, and a lot of the code will be repurposed for Second Wind.

            $b Feature overview:
            • Real-time naughts and crosses gameplay using Websockets on a Node.js backend
            • Optional location access to making joining a game easier
            • Real-time online/offline status for the enemy player

            $b Link:
            $lnk https://felixxwu-xo.herokuapp.com/

            $b Preview:
            $img naughts_and_crosses.jpg

            $b Related:
            $cmd secondwind

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    flatapp: () => {
        store.dispatch("pushBlock", parse(
            `$h1 FLATAPP

            FlatApp is a web app that allows groups of people to keep track of their debts with each other for things like groceries and bills. It features PayPal integration, making it easy to settle up any debts, however it is possible to use FlatApp without ever using it since it automatically cancels out the debts. It also features a communal shopping list where a debt is created automatically with whoever put up the item, or, if the item is communal, splits the debt automatically between all group members.

            $b Feature overview:
            • Create an account associated with a group of friends
            • Create and track your debts with individuals in the group
            • Pay off your debts easily with a handy PayPal button
            • Or pay off your debts by putting other people's debts on the app
            • Post something on the communal shopping list in case someone is at the shops
            • Watch as a debt is automatically created with someone as you check off something you bought from the shopping list
            • Save calculating the split cost of a communal item, and watch automatic debts be created with all group memebers
            • Pin something passively aggressive on the message board if your flatmates haven't done the dishes!

            $b A cool overview of the main features:
            $lnk https://noxive.com/flatapp/features/

            $b Preview:
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
            
            Owme is the reincarnation of FlatApp, improving on the shortcomings thereof. Now with an additional Google sign-in option, you can interact with anyone on Owme, not just people in your group, and you can create any number of groups with your friends to get a quick overview of your net debt with the group, on top of the debts with individuals. The radically improved design now allows you to easily create a debt with a friend, selection of friends, or group, in a much more intuitive way. The PayPal integration is also improved, taking advantage of the paypal.me system.

            $b Feature overview:
            • A clean and dynamic, single-page design
            • Google sign-in
            • Easily manage your friends and groups
            • Create debts with one or more friends, or a whole group
            • If there are any circles of debt, they are automatically settled up
            • Progressive Web App support
            
            $b Link:
            $lnk https://noxive.com/owme

            $b Preview:
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
            `$h1 HOUSE MUSIC GENERATOR

            A C# Windows app that can randomly generate 16 bars of "House" music, complete with drums, main melody and a chord sequence. The app works by reading from a library of wav files (samples of drums or instrument notes), and combining them into a new wav file. By using a bit of music theory, the chord sequence that is generated is guaranteed to sound musical, and is taken into account when the melody is created so that there are no musical clashes. Various displays show the created melody and chord sequence, and when the user is happy with their creation, it can be exported to .wav or .midi files. Creating .wav and .midi files from scratch requires an understanding of their file structures and headers, which was challenging.

            $b Feature overview:
            • Chords are generated using Scale Degrees, and so are guaranteed to sound musical
            • If the user does not like a chord, they can re-generate a single chord leaving the rest untouched, or they can specify the chord entirely manually
            • Melody is generated based on the chord sequence to ensure that there are no musical clashes
            • Export to .wav or .midi files for use in other programs, and continue composition
            • Graphical display to show the generated melody in a piano roll style
            • Drums are set to have a slight swing, giving the generated clip the classic "House" feeling
            • With the drums overlayed, the track will have "ducking" applied to it - a process in which the instruments' volume is quickly lowered and brought back up to make the kick drum stand out

            $b GitHub:
            $lnk https://github.com/felixxwu/Music-Generator

            $b Preview:
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
            
            A C# Windows app that lets you explore and combine randomly generated chords, good for endless musical inspiration. Unlike the house music generator, these chords are completely random, allowing weird and interesting chords to inspire the user. Chords can be played at the click of a button and a MIDI sequence can be exported to use in any music program. When a chord needs to be played, the app reads from wav files (each a single piano note sound) to combine into a single wav file to play to the user, when the user is happy with the chord sequence, they can export it to a MIDI file.

            $b Feature overview:
            • Create up to 8 randomly generated chords, with four notes each
            • Adjust the length of each chord
            • Add and remove chords from a "favourites" library to increase the likelyhood of that chord appearing
            • Transpose a chord up and down to make adjustments
            • Edit individual notes in a chord to make even finer adjustments
            • Play individual chords or let the whole chord sequence play
            • Export the chord sequence, complete with chord lengths to MIDI, and build on it in another application
            
            $b GitHub:
            $lnk https://github.com/felixxwu/Chord-Generator

            $b Preview:
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

            $b GitHub:
            $lnk https://github.com/felixxwu/Sudoku

            $b Preview:
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
            
            An android app that provides a much better interface for setting alarms than the stock app. It uses a large numpad design from which you can set the hours and minutes in one swift input of numbers, inspired by how PayPal inputs pounds and pennies. This is much quicker than setting the hours and minutes individually from a clock face or dropdown list. It features two modes: alarm and timer mode. In alarm mode, inputting "730" would create an alarm for 7:30am. In timer mode, inputting "730" would set an alarm 7 hours and 30 minutes from now.

            $b Play Store:
            $lnk https://play.google.com/store/apps/details?id=wu.felix.alarmtimer

            $b Preview:
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
            We think that this is a novel alternative to QR codes, where the encoded ultrasonic URL will be played in a loop somewhere. Surrounding smartphones can then detect the URL and send the user to a page - no need to launch the camera and point it anywhere.
            Created with a partner for the 24h CreatED hackathon.

            $b GitHub:
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

            $b Feature overview:
            • Enter a chat room using a previously agreed and secure password
            • Using Websockets, messages can be sent and received in real-time
            • Messages are encrypted symmetrically using AES
            • Messages arrive hidden, and when they are opened they are deleted after a timer reaches zero

            $b Link:
            $lnk https://chat-secure.herokuapp.com/

            $b Preview:
            $img encrypted_chat.jpg

            $b Go back
            $cmd projects
            $cmd home
            `
        ))
    },

    courses: () => {
        store.dispatch("pushBlock", parse(
            `$h1 UNIVERSITY COURSES

            $b Year 4 (50% of degree) - TBC
            Software Design and Modelling,
            Music Informatics,
            Machine Learning Practical,
            Honours Project (Machine Learning),
            Data Mining and Exploration,
            Compiling Techniques

            $b Year 3 (50% of degree) - Average: First
            Software Testing,
            Computer Security,
            Professional Issues,
            Introductory Applied Machine Learning,
            Large Practical (Android App),
            Operating Systems,
            System Design Project (Robotics Team Project)

            $b Year 2 - Average: 2.1
            Probability with Applications,
            Discrete Mathematics and Mathematical Resoning,
            Introduction to Software Engineering,
            Introduction to Computer Systems,
            Reasoning and Agents,
            Algorithms, Data Structures & Learning,
            Processing Formal and Natural Languages

            $b Year 1 - Average: 2.1
            Calculus and its Applications,
            Introduction to Linear Algebra,
            Cognitive Science,
            Data and Analysis,
            Object-Oriented Programming
            Functional Programming,
            Computation and Logic

            $b Detailed description of all courses:
            $lnk http://www.drps.ed.ac.uk/19-20/dpt/utcmpsi.htm

            $b Back to home:
            $cmd home
        `))
    },

    skills: () => {
        store.dispatch("pushBlock", parse(
            `$h1 TECHNICAL SKILLS

            $b SPOKEN LANGUAGES:
            English: fluent,
            German: fluent,
            Cantonese: novice

            $b MOST COMPETENT IN:
            Javascript (+ Vue, React, Node),
            Java,
            Python,
            HTML / CSS,
            SQL,
            Android (Java / Kotlin),
            PHP,
            Object Oriented Programming,
            Software Testing,
            Algorithmic Analysis
            
            $b LIMITED EXPERIENCE WITH:
            Machine Learning,
            Matlab,
            Haskell,
            C,
            C#,
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
                    new LineClass("Done.", "bold"),
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

    clear: function () {
        store.dispatch("clear");
        this.showInput();
    },

    showInput: () => {
        store.dispatch("pushBlock", new Block([new LineClass("", "input")]));
    },

    about: () => {
        store.dispatch("pushBlock", parse(
            `Website created with VueJS (2019).

            $b GitHub:
            $lnk https://github.com/felixxwu/felixwu.me

            $b Back to home
            $cmd home
            `
            ))
    },

    gnomed: () => {
        store.dispatch("pushBlock", parse(
            "⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⣿⣿⣿⣿⣿⣿\n⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿\n⣿⣿⣤⣀⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿\n⣿⣿⣿⡟⣻⣿⣿⣿⣿⣿⣟⠉⠙⢹⣿⣏⠉⢹⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⠟⠋⠄⣿⣿⣿⣿⣿⣿⣿⣟⡛⠛⢛⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡟⠁⠄⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⡇⠄⠄⠄⠄⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠛⠿⠛⠻⣿\n⡇⠄⠄⠄⠄⠄⠄⠘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠄⠄⠄⠄⣠⣽\n⣇⣀⠄⣀⡀⢀⠄⠄⠄⠄⠙⠛⠛⠿⣿⢿⠿⠟⠛⠄⠄⠄⠄⠈⢿⣿"
        ))
    },

    jazz: () => {
        store.dispatch("pushBlock", parse(script, true));
    }
};

export default commands;
