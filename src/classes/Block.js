export default class Block {
    constructor(
        lines, 
        isLong = false, 
        callback = () => {},
        progress = 0
    ) {
        this.lines = lines;
        this.isLong = isLong;
        this.callback = callback;
        this.progress = progress;
    }
}