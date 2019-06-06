/**
 * from a page scroll up or down
 * @param {JSON} page page object
 * @param {string} direction up or down
 */
function go(page, direction) {
    let pageToGet = (() => {
        if (direction == "up") {
            return page.order - 1;
        } else {
            return page.order + 1;
        }
    })();

    goTo(pageToGet);
}

/**
 * scroll to a specific page number
 * @param {number} order 
 */
function goTo(order) {

    // if mobile dont smooth scroll, reduces response time since the right page isnt visible
    if (isMobile()) {
        setHash(getPageIdWithOrder(order));
        scrollAction();
    } else {
        window.scroll({ 
            top: $("#" + getPageIdWithOrder(order)).offset().top,
            behavior: 'smooth' 
        });
    }
}

/**
 * returns the id of the page with that page number
 * @param {number} order page number
 */
function getPageIdWithOrder(order) {
    for (let i = 0; i < content.length; i++) {
        const page = content[i];
        if (page.order == order) {
            return page.id;
        }
    }

    // if not found return last page
    return content[content.length - 1].id;
}