class Mobile extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render() {

        return e("div", null,
            this.mobileProfile(),
            this.allMobilePages()
        );
    }

    mobileProfile() {
        return e("div", {className: "center mobile-page"}, content[0].rightContent);
    }

    allMobilePages() {
        return content.map(page => {
            if (page.id == "home") { return null; }
            return this.mobilePage(page);
        })
    }

    mobilePage(page) {
        return e("div", {className: "mobile-page", key: page.order},
            e("div", {
                className: "mobile-img grid3x3",
                style: {backgroundColor: page.colour}
            }, page.rightContent),
            e("p", {
                className: "title",
                style: {color: page.colour}
            },
                page.title
            ),
            e("p", null, page.content),
            e("em", null, page.languages),
            e("div", {className: "grid3x3 fullwidth"}, button(page))
        );
    }

}