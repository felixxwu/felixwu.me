export default class Block {
    constructor(
        lines, 
        isLong = false, 
        callback = () => {},
        progress = 0,
        focusAll = false,
    ) {
        this.lines = lines;
        this.isLong = isLong;
        this.callback = callback;
        this.progress = progress;
        this.focusAll = focusAll;
    }
}