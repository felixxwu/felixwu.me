
/** 
 * Slows down calls to a function
 * @type {Function}
 * @param {Function} fn function
 * @param {number} wait time to wait before function can bee called again
 */
const throttle = (fn, wait) => {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}