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
                    new LineClass("Loading assets..."),
                    new LineClass("Loading components..."),
                    new LineClass("Loading profile (Felix Wu)..."),
                    new LineClass(""),
                    new LineClass("Done."),
                    new LineClass(""),
                    new LineClass("Restarting..."),
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

    profile: () => {
        store.dispatch("pushBlock", parse(
            `██████╗██████╗██╗╸╸╸╸██╗██╗╸╸██╗╸╸╸██╗╸╸╸╸██╗██╗╸╸██╗
            ██╔═══╝██╔═══╝██║╸╸╸╸██║╚██╗██╔╝╸╸╸██║╸╸╸╸██║██║╸╸██║
            █████╗╸████╗╸╸██║╸╸╸╸██║╸╚███╔╝╸╸╸╸██║╸█╗╸██║██║╸╸██║
            ██╔══╝╸██╔═╝╸╸██║╸╸╸╸██║╸██╔██╗╸╸╸╸██║███╗██║██║╸╸██║
            ██║╸╸╸╸██████╗██████╗██║██╔╝╸██╗╸╸╸╚███╔███╔╝╚█████╔╝
            ╚═╝╸╸╸╸╚═════╝╚═════╝╚═╝╚═╝╸╸╚═╝╸╸╸╸╚══╝╚══╝╸╸╚════╝
            Fourth year Computer Science student at The University of Edinburgh

            Contact:
            felixxwu@gmail.com - 07580633482

            GitHub:
            $lnk https://github.com/felixxwu

            LinkedIn:
            $lnk https://www.linkedin.com/in/felixxwu/

            -----------------------------------------------
            CLICK TO NAVIGATE TO:

            $cmd work_experience

            $cmd personal_projects

            $cmd university_courses

            $cmd technical_skills

            $cmd music

            Type "help" or "?" for a list of available commands.`
        ));
    }
};

export default commands;
