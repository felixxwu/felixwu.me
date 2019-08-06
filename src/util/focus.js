import config from "../config.js";

export default function focus() {
    if (document.getElementById("input")) {
        // document.getElementById("input").focus();
    }
    // document.getElementById("app").scrollTo(0,document.getElementById("app").scrollHeight);
    document.getElementById("app").scrollTop = document.getElementById("app").scrollHeight;
    setTimeout(() => {
        if (document.getElementById("input")) {
            // document.getElementById("input").focus();
        }
        // document.getElementById("app").scrollTo(0,document.getElementById("app").scrollHeight);
        document.getElementById("app").scrollTop = document.getElementById("app").scrollHeight;
    }, config.focusDelay);
}