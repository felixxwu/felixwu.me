import parse from "../util/parse.js";
import store from "../store.js";
import LineClass from "../classes/LineClass.js";
import Block from "../classes/Block.js";
import script from "./script.js";

// employment
import acoustics from './employment/acoustics'
import employment from './employment/employment'
import engineering from './employment/engineering'
import trapit from './employment/trapit'
import vdgs from './employment/vdgs'

// projects
import chat from './projects/chat'
import chessrobot from './projects/chessrobot'
import housegenerator from './projects/housegenerator'
import noxive from './projects/noxive'
import owme from './projects/owme'
import projects from './projects/projects'

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
        const block = new Block({
            lines: [new LineClass("Availabe commands are:")]
                .concat(
                    keys.map(key => {
                        return new LineClass(key, "command");
                    })
                )
                .concat(new LineClass("", "input")),
            clear: true
        });

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
                `"${command}" is an unrecognised command. Type "help" or "?" for a list of commands.`,
                true
            ))
        } else {

            store.dispatch("pushBlock", parse(
                `"${command}" is an unrecognised command. Did you mean:
                ${commands.join('')}
                Type "help" or "?" for a list of commands.`,
                true
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
            `
            $h1 FELIX WU
            Computer Science graduate from The University of Edinburgh.

            $cmd employment
            $cmd projects
            $cmd education
            $cmd skills

            $hr
            
            $b EMAIL:
            felixxwu@gmail.com

            $b CV:
            $lnk https://felixwu.me/cv

            $b GITHUB:
            $lnk https://github.com/felixxwu

            $b LINKEDIN:
            $lnk https://linkedin.com/in/felixxwu


            Type "help" or "?" for a list of available commands.`,
            {clear: true}
        ));
    },

    // employment
    acoustics, employment, engineering, trapit, vdgs,

    // projects
    chat, chessrobot, housegenerator, noxive, owme, projects, 

    education: () => {
        store.dispatch("pushBlock", parse(
            `
        $h1 UNI>VER>SI>TY OF ED>IN>BURGH
            First in Computer Science Bachelor's with Honours

            $bcmd home

            $hr

            $b COURSES

            $b Year 4 - Average: First
            Software Design and Modelling,
            Music Informatics,
            Machine Learning Practical,
            Honours Project (Machine Learning),
            Data Mining and Exploration,
            Compiling Techniques

            $b Year 3 - Average: First
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
            `,
            {clear: true}
        ))
    },

    skills: () => {
        store.dispatch("pushBlock", parse(
            `
        $h1 TECH>NI>CAL SKILLS

            $bcmd home

            $hr

            $b SPOKEN LANGUAGES:
            English: fluent
            German: fluent
            Cantonese: conversant

            $b MOST COMPETENT IN:
            Javascript (+ Vue, React, Node)
            Python
            Android (Java / Kotlin)
            Unity (C#)
            Machine Learning (PyTorch)
            
            $b LIMITED EXPERIENCE WITH:
            Matlab
            Haskell
            PHP
            C
            `,
            {clear: true}
        ))
    },

    reboot: () => {
        store.dispatch("pushBlock",
            new Block({
                lines: [
                    new LineClass("Starting OS...", "bold"),
                    new LineClass("Version " + store.state.version),
                    new LineClass("Loading components..."),
                    new LineClass("Loading image files..."),
                    new LineClass("Loading profile..."),
                ],
                isLong: true,
                callback: () => {
                    setTimeout(() => {
                        commands.clear();
                        commands.home();
                    }, 1000);
                },
                clear: false
            })
        );
    },

    clear: function () {
        store.dispatch("clear");
        this.showInput();
    },

    showInput: () => {
        store.dispatch("pushBlock", new Block({
            lines: [new LineClass("", "input")]
        }));
    },

    about: () => {
        store.dispatch("pushBlock", parse(
            `
            $hr
            Website created with VueJS (2019).

            $b GitHub:
            $lnk https://github.com/felixxwu/felixwu.me

            Tip: the command input supports tab-completion and history!
            $hr
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
