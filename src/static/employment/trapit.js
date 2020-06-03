import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `
        $h1 TRAP>IT WEB>SITE DE>SIGN 
        (Freelance, 2018)

        $cmd employment
        $cmd home

        $hr

        Successfully developed and delivered a blog-like page for the owner of the electronic music YouTube promotion channel "TrapIt", with editor-exclusive interface for the creation and alteration of posts. Applied requirement analysis knowledge from the Software Engineering course at Edinburgh to undertake stakeholder interviews, meetings, requirements specification and use-case documents.

        $b Preview:
        $img trapit.jpg
        `,
        {clear: true}
    ))
}