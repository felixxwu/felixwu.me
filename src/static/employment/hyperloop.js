import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `
        $h1 SPACE>X HYPER>LOOP STU>DENT COM>PE>TI>TION
        (2016 / 17)

        $cmd employment
        $cmd home

        $hr

        Helped create the website for HYPED, a student society at the University of Edinburgh dedicated to accelerating the development of Hyperloop and implementing the technology in the UK. During my involvement I also learned a lot about various hardware technologies for the pod.

        $b Link:
        $lnk https://hyp-ed.com/

        $b Preview:
        $img hyped.jpg
        `,
        {clear: true}
    ))
}