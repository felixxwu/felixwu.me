import config from './config'

export default {
    expandCard: (id) => {
        const card = document.getElementById(id)
        const content = card.lastElementChild.firstElementChild
        card.style.maxWidth = config.cssVars["--cardExpandedWidth"]
        card.style.height = config.cssVars["--cardExpandedHeight"]
        card.style.margin = "0"
        card.style.borderRadius = "0"
        content.style.marginTop = config.cssVars["--imgExpandedHeight"]
    },
    closeCard: (id) => {
        const card = document.getElementById(id)
        const content = card.lastElementChild.firstElementChild
        card.style.maxWidth = config.cssVars["--cardWidth"]
        card.style.height = config.cssVars["--cardHeight"]
        card.style.margin = config.cssVars["--cardMargin"]
        card.style.borderRadius = config.cssVars["--borderRadius"]
        content.style.marginTop = config.cssVars["--imgHeight"]
    },
    expandImg: (id) => {
        const img = document.getElementById(id).firstElementChild
        img.style.height = config.cssVars["--imgExpandedHeight"]
        img.style.maxWidth = config.cssVars["--cardExpandedWidth"]
        img.style.borderRadius = "0 0 0 0"
    },
    closeImg: (id) => {
        const img = document.getElementById(id).firstElementChild
        img.style.height = config.cssVars["--imgHeight"]
        img.style.maxWidth = config.cssVars["--cardWidth"]
        img.style.borderRadius =
            config.cssVars["--borderRadius"] +" "+ config.cssVars["--borderRadius"] +" 0 0"
    }
}