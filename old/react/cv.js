// fullscreen popup with dark bg
const cvPopup = e("div", {
    className: "popup fullscreen grid3x3 animated fadeIn fast",
    id: "popup",
    key: "cv"
},

    // e("h2", {className: "white a2 animated fadeInDown slow"}, "CONTACT / PROFILES"),

    // actual popup (white card)
    e("div", {className: "popup-cv animated fadeInUp"},
        e("iframe", {
            id: "cv",
            src: "https://drive.google.com/file/d/1CKVJ6psrwP9YhTTyR_pTb1EZVAQ4Pgfa/preview",
            width: "100%"
        })
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
