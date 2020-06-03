import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `$h1 ULTRASOUND COMMUNATION

        This Java app allows you to encode text into a wav file, which if played on a speaker will produce ultrasound which cannot be perceived by humans. A smartphone, or other device, can however pick up a limited amount of audio in the ultrasonic (20khz+) range. The recorded audio can be analysed and decoded, and the URL can be extracted.
        We think that this is a novel alternative to QR codes, where the encoded ultrasonic URL will be played in a loop somewhere. Surrounding smartphones can then detect the URL and send the user to a page - no need to launch the camera and point it anywhere.
        Created with a partner for the 24h CreatED hackathon.

        $b GitHub:
        $lnk https://github.com/felixxwu/CreatED-Ultrasound

        $b Go back
        $cmd projects
        $cmd home
        `
    ))
}