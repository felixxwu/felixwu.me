import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `$b Back to:
        $cmd employment
        $cmd home
        
        $h1 ROOM ACOUSTICS SIMULATION
        (Placement, 2015)

        4-week long STEM placement for The University of Oxford IT Services to use a novel agent-based programming language called "NetLogo" to complete a concept simulation for standing waves in a variable 2D environment.

        $b Report:
        $lnk https://drive.google.com/file/d/0B30xqmiMfbvLTXdYZjJWRG1UeEk

        $b Images:
        $img room_acoustics.jpg

        `
    ))
}