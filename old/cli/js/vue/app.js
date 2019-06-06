let app = new Vue({
    el: "#app",
    data: {
        lines: lines.state.lines,
        logic: {
            lorem: () => {
                lines.commit("add", textToBlock(
                    `LOREM IPSUMBODY ONCE TOLD ME
                    For testing all elements in one.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    $lnk https://www.lipsum.com/
                    $img brocc.jpg
                    $img fish.jpg
                    $cmd restart`
                ))
            },
            images: () => {
                lines.commit("add", textToBlock(
                    `$img brocc.jpg
                    $img fish.jpg`
                ))
            },
            profile: () => commands.profile(),
            work_experience: () => {
                lines.commit("add", textToBlock("Information about work here."))
            },
            personal_projects: () => {
                lines.commit("add", textToBlock("Information about projects here."))
            },
            university_courses: () => {
                lines.commit("add", textToBlock("Information about university_courses here."))
            },
            technical_skills: () => {
                lines.commit("add", textToBlock("Information about technical_skills here."))
            },
            music: () => {
                lines.commit("add", textToBlock("$lnk https://noxive.com"))
            },
            clear: () => {
                commands.clear();
                commands.showInput();
            },
            restart: () => {
                commands.clear();
                commands.startup();
            },
            help: () => commands.help(),
            "?": () => commands.help(),
        }
    },
    methods: {
        peformLogic: (input) => {
            lines.commit("addInputlineToLines", input);
            if (app.logic[input]) {
                app.logic[input]();
            } else {
                commands.unrecognised(input);
            }
        }
    }
})