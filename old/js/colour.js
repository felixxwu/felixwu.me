/** increments every tie newColour() is called */
var colourStep = 0;

/**
 * goes around the colour circle adding 137 to the hue with every function call.
 * Also increments the global colourstep
 */
function newColour() {
    const goldenAngle = 137.5;
    const offset = 50;
    const hue = (colourStep++ * goldenAngle + offset) % 360;
    return `hsl(${hue}, ${SATURATION}%, ${LIGHTNESS}%)`;
}

