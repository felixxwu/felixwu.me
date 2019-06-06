/** 
 * array of functions, which are all executed as soon as window.onload triggers
 * @type {Function[]}
 */
var doWhenLoaded = [];

// hide the loading animation and render the react app
doWhenLoaded.push(() => {
    $("#loading").hide();
    ReactDOM.render(e(App), document.querySelector('#app'));
})

// run all functions from doWhenLoaded after the loading sceen fades out
window.onload = () => {
    console.log("done loading");
    
    $("#loading").animateCss("fadeOut", () => {
        for (let i = 0; i < doWhenLoaded.length; i++) {
            const action = doWhenLoaded[i];
            action();
        }
    });
}
