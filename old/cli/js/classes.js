class Line {
    constructor(text, type = "text") {
        this.text = text;
        this.type = type;
    }
}


class Block {
    constructor(
        lines, 
        isLong = false, 
        callback = () => {focus()},
        progress = 0
    ) {
        this.lines = lines;
        this.isLong = isLong;
        this.callback = callback;
        this.progress = progress;
    }
}
