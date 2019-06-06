export default function focus() {
    if (document.getElementById("input")) {
        document.getElementById("input").focus();
    }
    window.scrollTo(0,document.body.scrollHeight);
    setTimeout(() => {
        if (document.getElementById("input")) {
            document.getElementById("input").focus();
        }
        window.scrollTo(0,document.body.scrollHeight);
    }, 300);
}