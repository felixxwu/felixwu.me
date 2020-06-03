import config from "../config.js";

export default function focus() {
    const input = document.getElementById('input')
    const app = document.getElementById('app')
    const padding = 40;
    if (input) {
        input.focus();
    }
    // app.scrollTo(0,app.scrollHeight);
    app.scrollTop = app.scrollHeight - app.clientHeight * 2 + padding;
    setTimeout(() => {
        if (input) {
            input.focus();
        }
        app.scrollTop = app.scrollHeight - app.clientHeight * 2 + padding;
    }, config.focusDelay);
}