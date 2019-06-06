class Page extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        this.page = this.props.page;
        return e("div", {className: "page grid3x3 noselect"},
            this.page.rightContent
        );
    }
}