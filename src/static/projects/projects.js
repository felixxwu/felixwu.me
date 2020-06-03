import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
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
}