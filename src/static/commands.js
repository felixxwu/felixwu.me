import parse from "../util/parse.js";
import store from "../store.js";
import LineClass from "../classes/LineClass.js";
import Block from "../classes/Block.js";
import script from "./script.js";

// employment
import acoustics from './employment/acoustics'
import employment from './employment/employment'
import engineering from './employment/engineering'
import hyperloop from './employment/hyperloop'
import trapit from './employment/trapit'
import vdgs from './employment/vdgs'

// projects
import alarm from './projects/alarm'
import chat from './projects/chat'
import chess from './projects/chess'
import chordgenerator from './projects/chordgenerator'
import flatapp from './projects/flatapp'
import housegenerator from './projects/housegenerator'
import naughtsandcrosses from './projects/naughtsandcrosses'
import noxive from './projects/noxive'
import noxiveweb from './projects/noxiveweb'
import owme from './projects/owme'
import projects from './projects/projects'
import secondwind from './projects/secondwind'
import sudoku from './projects/sudoku'
import ultrasound from './projects/ultrasound'

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
                `"${command}" is an unrecognised command. Did you mean:
                ${commands.join('')}
                Type "help" or "?" for a list of commands.`
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

            $b EMPLOYMENT:
            $cmd employment

            $b Personal projects and hobbies:
            $cmd projects

            $b University courses at Edinburgh:
            $cmd courses

            $b Technical skills and languages:
            $cmd skills

            Type "help" or "?" for a list of available commands.`
        ));
    },

    // employment
    acoustics, employment, engineering, hyperloop, trapit, vdgs,

    // projects
    alarm, chat, chess, chordgenerator, flatapp, housegenerator, naughtsandcrosses,
    noxive, noxiveweb, owme, projects, secondwind, sudoku, ultrasound, 

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
                    new LineClass("Loading profile..."),
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
