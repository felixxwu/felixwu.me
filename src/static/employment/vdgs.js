import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `$h1 VIOLA DA GAMBA SOCIETY WEBSITE REDESIGN
        (Freelance, 2016)

        Successfully developed and delivered a redesign of the visuals, an updated front-end for improved mobile support, and a framework for the web administrator to maintain the contents of the page. VdGS is a charity dedicated to the revival of, and research into the Viola da Gamba.

        $b Link:
        $lnk https://vdgs.org.uk/

        $b Preview:
        $img vdgs.jpg

        $b Go back
        $cmd work
        $cmd home
        `
    ))
}