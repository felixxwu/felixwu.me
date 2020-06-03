import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `
        $h1 ACOUS>TICS SIM>U>LA>TION
        (Placement, 2015)
        
        $cmd employment
        $cmd home
        
        $hr

        4-week long STEM placement for The University of Oxford IT Services to use a novel agent-based programming language called "NetLogo" to complete a concept simulation for standing waves in a variable 2D environment.

        $b Report:
        $lnk https://drive.google.com/file/d/0B30xqmiMfbvLTXdYZjJWRG1UeEk

        $b Images:
        $img room_acoustics.jpg
        `,
        {clear: true}
    ))
}