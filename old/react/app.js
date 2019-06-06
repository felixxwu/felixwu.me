/** set the app state
 * @type {Function} */
var setState;

/** @type {JSON} app state */
var state; 

/** Main react App */
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            /** @type {JSON} page */
            page: null,

            /** @type {string}  */
            popup: null
        }
    }
    
    render() {
        setState = (state, callback) => this.setState(state, callback);
        state = this.state;

        transitioning = false;

        if (isMobile()) {
            return [
                this.contact(),
                e(Mobile, {key: "mobile"})
            ];
        }

        return [
            this.contact(),
            this.cv(),
            this.side(),
            this.pages()
        ];
    }

    /** contact popup, displays if popup is the contact page string
     * @returns react element
     */
    contact() {
        if (this.state.popup != CONTACT_PAGE) { return null; }

        return contactPopup;
    }

    cv() {
        if (this.state.popup != CV_PAGE) { return null; }

        return cvPopup;
    }

    /** side panel, shows if page.id is not "home"
     * @returns react element
     */
    side() {
        if (this.state.page == null) { return null; }
        if (this.state.page.id == "home") { return null; }

        return e(Side, {page: this.state.page, key: "side"});
    }

    /** the pages from the content global
     * @returns a list of react elements
     */
    pages() {
        return content.map((page) => {
            return e("div", {
                id: page.id,
                className: page.classes,
                key: page.id
            }, e(Page, {page: page}));
        })
    }
}
