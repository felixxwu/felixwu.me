import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `$h1 TRAPIT WEBSITE DESIGN 
        (Freelance, 2018)

        Successfully developed and delivered a blog-like page for the owner of the electronic music YouTube promotion channel "TrapIt", with editor-exclusive interface for the creation and alteration of posts. Applied requirement analysis knowledge from the Software Engineering course at Edinburgh to undertake stakeholder interviews, meetings, requirements specification and use-case documents.

        $b Preview:
        $img trapit.jpg

        $b Go back
        $cmd work
        $cmd home
        `
    ))
}