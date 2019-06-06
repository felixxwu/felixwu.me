const button = page => {
    if (page.link == null) { return; }
    
    return e("a", {
        style: {backgroundColor: page.colour},
        className: "button center",
        href: page.link,
        target: "_blank"
    }, page.linkText)
}