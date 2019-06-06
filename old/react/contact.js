// fullscreen popup with dark bg
const contactPopup = e("div", {
    className: "popup fullscreen grid3x3 animated fadeIn fast",
    id: "popup",
    key: "contact"
},

    // e("h2", {className: "white a2 animated fadeInDown slow"}, "CONTACT / PROFILES"),

    // actual popup (white card)
    e("div", {className: "popup-card animated fadeInUp", id: "contactLinks"},
        quickLink("images/github.png", "GitHub", "https://github.com/felixxwu", "alias"),
        quickLink("images/linkedin.png", "LinkedIn", "https://www.linkedin.com/in/felixxwu/", "alias"),
        quickLink("images/email.png", e("div", {className: "selectAll"}, "felixxwu@gmail.com"), null, "text")
    ),

    // close button (closes after animation)
    e("div", {className: "a8"},
        e("a", {
            className: "button center animated slideInUp slower",
            style: {
                backgroundColor: "var(--offwhite)",
                color: "var(--offblack)"
            },
            onClick: () => {
                $("#popup").animateCss("fadeOut faster", () => {
                    setState({popup: null});
                })
            }
        }, "close")
    )
);
