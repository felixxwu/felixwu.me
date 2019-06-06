/** everytime scroll action is called the old page is saved 
 * @type {JSON} page */
var oldPage = null;
var transitioning = false;

const scrollActionThrottled = throttle(() => {
    scrollAction();
}, 200);

/** called repeatedly */
function scrollAction() {
    
    // transition lock - stop all scroll actions while transitioning
    // transition lock will free when app.js repaints, which always happens at the end of this function
    if (transitioning) { return; }
    transitioning = true;

    // resize the window height (for android where chrome bar messes with the view height)
    resize();

    // get the page that the middle of the page is over right now
    const page = getVisiblePage();
    if (page == undefined) { return; }

    // disable scrolling when the side panel is open on mobile
    // if (isMobile() && page.id != "home") {
    //     document.body.style.overflow = "hidden";
    // } else {
    //     document.body.style.overflow = "";
    // }

    setColour(page.colour);

    // if the panel is open and the user is at home, close the panel
    if (page.id == "home" && element("panel")) {
        closeSidePanel(page);

    // open the panel or do nothing
    } else if (!element("panel") || oldPage == page) {
        setState({ page: page });

    // transition animation between pages
    } else {
        transition(page);
    }
    
    oldPage = page;
}

/** returns the object from the "content" global constant which is most visible on the page 
 * @returns {JSON} page */ 
function getVisiblePage() {
    for (let i = 0; i < content.length; i++) {
        const page = content[i];
        const el = element(page.id);
        if (el == undefined) { return undefined; }
        let rect = el.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (rect.top > viewHeight / -2) {
            return page;
        }
    }
}

/** @param {JSON} page */
function closeSidePanel(page) {
    $("#panel").animateCss("slideOutLeft faster", () => {
        setState({
            page: page
        });
    });
}

/**
 * does the transition animation between pages, up or down depending on oldPage
 * @param {JSON} page 
 */
function transition(page) {
    if (page.order < oldPage.order) {
        var fadeIn = "fadeInDown faster";
        var fadeOut = "fadeOutDown faster";
    } else {
        var fadeIn = "fadeInUp faster";
        var fadeOut = "fadeOutUp faster";
    }
    
    $("#all-side-content").animateCss(fadeOut, () => {
        setState({
            page: page
        }, () => {
            $("#all-side-content").animateCss(fadeIn);
        });
    });
}

// add the onscroll event listener and loop on load
doWhenLoaded.push(() => {
    window.onscroll = scrollActionThrottled;
    setInterval(scrollAction, 1000);
})
