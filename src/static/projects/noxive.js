import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
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
}