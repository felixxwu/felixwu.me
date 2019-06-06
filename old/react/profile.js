class Profile extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        this.content = this.props.content;
        return [
            e("div", {
                id: "profile",
                className: "animated fadeIn",
                key: "profile"
            },
                // profile picture
                e("img", {
                    src: "images/profile.jpg",
                    id: "profile-picture",
                    onClick: () => {
                        $("#profile-picture").animateCss("flip");
                        content[0].colour = newColour();
                    }
                }),

                // name
                e("div", {
                    id: "name",
                    className: "title",
                    onClick: () => $("#name").animateCss("pulse")
                }, this.content.title),

                // bio & links
                e("div", {className: "bio"}, this.content.bio),
                e("div", {className: "animated fadeInDown"},
                    e("div", {className: "fullwidth quicklinks"},
                        // quickLink("images/cv.png", "CV", () => setState({popup: CONTACT_PAGE}), "pointer"),
                        quickLink("images/cv.png", "CV", CV_LINK, "alias"),
                        quickLink("images/email.png", "More", () => setState({popup: CONTACT_PAGE}), "pointer")
                    )
                )
            ),
            this.arrowDown()
        ];
    }

    arrowDown() {
        return e("a", {
            // go to the first page
            onClick: () => goTo(1),
            className: "a8 center pointer animated fadeInDown slow hide-on-mobile",
            key: "nav"
        },
            e("div", {className: "fullwidth grid3x3"}, e("div", null, DOWN_ARROW_TEXT)),
            e("div", {className: "fullwidth grid3x3"},
                e("i", {className: "material-icons nav"}, "keyboard_arrow_down")
            )
        )
    }
}