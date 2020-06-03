import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
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
}