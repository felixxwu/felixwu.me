/**
 * react element for a link or button with icon and text
 * @param {string} image 
 * @param {string} text 
 * @param {*} link string or function
 * @param {string} cursor
 */
const quickLink = (image, text, link, cursor) => {

    // if link is a string, create a href link
    if (typeof link == "string") {
        return e("a", {
            className: "quicklink",
            style: {cursor: cursor},
            href: link,
            target: "_blank"
        },
            e("img", {src: image}),
            e("br"),
            text
        )

    // if not a string it should be a function, add it to the onclick
    } else {
        return e("a", {
            className: "quicklink",
            style: {cursor: cursor},
            onClick: link
        },
            e("img", {src: image}),
            e("br"),
            text
        )
    }
}