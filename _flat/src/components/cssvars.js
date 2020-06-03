// config.js is used to define css variables
// <div id="app" :style> accepts cssVars as json which turns each variable into a css variable in the DOM
// from everywhere in the app cssvars can be accessed and will have these values

export default {
  cssVars: {

    // general
    "--black": "hsl(0, 0%, 25%)",
    "--grey": "hsl(0, 0%, 75%)",
    "--white": "hsl(0, 0%, 97%)",
    "--boxShadow": "0 0 50px 0 rgba(0, 0, 0, 0.2)",
    "--fontSize": "18px",
    
    // bg colour
    "--light": "97%",
    "--sat": "0%",
    "--loop": "25s",

    // header
    "--headerSize": "2.7rem",
    "--profileWidth": "150px",
    "--titlePadding": "40px",
    "--letterSpacing": "2",

    // card
    "--cardWidth": "400px",
    "--cardExpandedWidth": "800px", // keep in sync with @media queries
    "--cardHeight": "270px",
    "--cardExpandedHeight": "100%",
    "--imgHeight": "180px",
    "--imgExpandedHeight": "250px",
    "--cardPadding": "20px",
    "--cardMargin": "20px",
    "--borderRadius": "30px",
    "--cardTitleSize": "23px",

    //animation
    scrollToTime: 0,
    "--openAnimTime": "0.4s",
    "--imgAnimTime": "0.8s",
  }
}