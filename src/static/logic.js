import commands from "./commands.js";
import store from "../store.js";
import parse from "../util/parse.js";

export default {
    lorem: () => {
        store.dispatch("pushBlock", parse(
            `LOREM IPSUMBODY ONCE TOLD ME
            For testing all elements in one.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            $lnk https://www.lipsum.com/
            $img brocc.jpg
            $img fish.jpg
            $cmd restart`
        ));
    },
    test_images: () => {
        store.dispatch("pushBlock", parse(
            `$img brocc.jpg
            $img fish.jpg`
        ));
    },
    profile: () => commands.profile(),
    work_experience: () => {
        store.dispatch("pushBlock", parse("Information about work here."));
    },
    personal_projects: () => {
        store.dispatch("pushBlock", parse("Information about projects here."));
    },
    university_courses: () => {
        store.dispatch("pushBlock", parse("Information about university_courses here."));
    },
    technical_skills: () => {
        store.dispatch("pushBlock",parse("Information about technical_skills here."));
    },
    music: () => {
        store.dispatch("pushBlock", parse("$lnk https://noxive.com"));
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
    "?": () => commands.help()
};
