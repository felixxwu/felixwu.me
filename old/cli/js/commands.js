const commands = {

    help: () => {
        const keys = Object.keys(app.logic);
        const block = new Block(
            [
                new Line("The availabe commands are:")
            ]
            .concat(
                keys.map(key => {
                    return new Line(key, "command")
                })
            )
            .concat(
                inputLine
            )
        );
        
        lines.commit("add", block);
        
    },

    unrecognised: (command) => {
        lines.commit("add", new Block (
            [
                new Line(command + " is an unrecognised command. Type \"help\" or \"?\" for a list of commands."),
                inputLine
            ]
        ))
    },
    
    startup: () => {
        lines.commit("add", new Block (
            [
                new Line("Starting OS..."),
                new Line("Loading assets..."),
                new Line("done.")
            ],
            true,
            () => {
                commands.clear();
                commands.profile();
            }
        ));
    },

    clear: () => {
        lines.commit("clear");
    },
    
    showInput: () => {
        lines.commit("add", new Block([inputLine]));
    },


    profile: () => {
        lines.commit("add", textToBlock(
            `Loading profile (Felix Wu)...

            ██████╗██████╗██╗╸╸╸╸██╗██╗╸╸██╗╸╸╸██╗╸╸╸╸██╗██╗╸╸██╗
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

            NAVIGATE TO: (Click or Type)

            $cmd work_experience

            $cmd personal_projects

            $cmd university_courses

            $cmd technical_skills

            $cmd music
            `
        ))
    }

}
