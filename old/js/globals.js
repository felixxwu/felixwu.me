const LIGHTNESS = 70;
const SATURATION = 40;
const EDUCATION_PAGE = "education";
const CONTACT_PAGE = "contact";
const CV_PAGE = "cv";
const DOWN_ARROW_TEXT = "projects / experience";
const CV_LINK = "https://drive.google.com/file/d/1CKVJ6psrwP9YhTTyR_pTb1EZVAQ4Pgfa/view?usp=sharing";

const e = React.createElement;

/**
 * document.getElementById(id)
 * @param {string} id 
 */
const element = id => document.getElementById(id);

const screenWidth = () => document.documentElement.clientWidth;

/** True if screen width is mobile-like */
const isMobile = () => screenWidth() < 800;

/**
 * sets the hash to "" and then the paramater
 * @param {string} hash anchor name
 */
const setHash = hash => {
    location.hash = "";
    location.hash = hash;
}

/**
 * sets the colour of the body and also the chrome theme
 * @param {string} colour 
 */
const setColour = colour => {
    document.body.style.backgroundColor = colour;
    // element("chrometheme").setAttribute("content", colour);
}

/** resizes the window height to be the true window height, saved in a css variable --vh */
function resize() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}
