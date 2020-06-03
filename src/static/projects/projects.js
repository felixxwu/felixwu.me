import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `
        $h1 PER>SON>AL PRO>JECTS

        $cmd home

        $hr

        Noxive - My electronic music production hobby since 2014, with a website to browse and preview my discography. [Vue, Firebase]
        $cmd noxive

        Chess Robot Group Project (2019) - Lead a software team of 5 to develop a robot capable of playing chess on a physical board. Our team won second place out of 22 groups. [Python, PyTorch]
        $cmd chessrobot

        Owme - A web app to help track the debts within groups of friends, with PayPal integration. [Javascript, PHP]
        $cmd owme

        House Music Generator - A windows app capable of generating a section of music complete with drums, melodies, and chords. [C#]
        $cmd housegenerator

        Web messenger app with strong encryption.
        $cmd chat

        This website!
        $cmd about
        `,
        {clear: true}
    ))
}