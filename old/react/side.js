class Side extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        this.page = this.props.page;
        return e("div", {id: "side", className: "fullscreen vsplit"}, 
            e("div", {id: "panel", className: "animated slideInLeft faster"},

                // close panel button
                e("a", {onClick: () => goTo(0)},
                    e("i", {id: "close", className: "material-icons"}, "close")
                ),

                // panel content
                e("div", {id: "all-side-content", className: "grid3x3"},

                    // text
                    e("div", {id: "side-content"},
                        e("div", {
                            className: "title",
                            style: {color: this.page.colour}
                        },
                            this.page.title
                        ),
                        e("p", null, this.page.content),
                        e("em", null, this.page.languages)                        
                    ),
                    
                    // link button
                    e("div", {className: "a8"}, button(this.page)),

                    // navigation buttons
                    this.nav()
                )
            )
        );
    }

    nav() {
        return e("div", {
            className: "a6"
        },
            e("a", {onClick: () => go(this.page, "up")},
                e("i", {className: "material-icons nav"}, "keyboard_arrow_up")
            ),
            e("br"),
            e("a", {onClick: () => go(this.page, "down")},
                e("i", {className: "material-icons nav"}, "keyboard_arrow_down")
            )
        )
    }
}
