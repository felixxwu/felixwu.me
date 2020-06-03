import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `
        $h1 NOXIVE

        $bcmd projects
        $bcmd home

        $hr

        Noxive is my alias for my electronic music production hobby. So far I have gained over 500k views across YouTube, SoundCloud and Spotify, and generated a small income of $400 from royalties. I have had the opportunity to collaborate with many talented artists over the last few years, improving my communication and feedback skills.

        A landing page for Noxive, serving also as temporary host for other web-based projects. It features links to my social media, discography, and a built-in music player. I advertise this site anywhere I can because it has proven to serve well as an entry point for anyone looking for a particular Noxive social media account or release.

        $b Feature overview:
        • An elegant and dynamic list of all Noxive releases
        • Links to relevant social media accounts and a small about section
        • A built-in music player for each release
        • A list of platforms where the release can be found (Spotify, YouTube, etc.)
        • Data pulled from a Firebase database, making it very easy to add new releases
        • The tag under a release can be clicked to show all releases with the same tag

        $b Links:
        $lnk https://noxive.com
        $lnk https://soundcloud.com/noxive
        $lnk https://github.com/felixxwu/noxive

        $b Preview:
        $img noxive.jpg
        $img noxive.com.jpg
        `,
        {clear: true}
    ))
}