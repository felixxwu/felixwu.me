function focus() {
    setTimeout(() => {
        if (document.getElementById("input")) {
            document.getElementById("input").focus();
        }
        window.scrollTo(0,document.body.scrollHeight);
    }, 300);
}

const inputLine = new Line("", "input");

// converts a multiline string into multiple line objects
function textToBlock(text) {
    const split = text.split("\n");

    const lines = split.map(line => {
        line = line.trim();
        if (line.substring(0, 5) == "$cmd ") {
            return new Line(line.substring(5), "command");
        }
        if (line.substring(0, 5) == "$lnk ") {
            return new Line(line.substring(5), "link");
        }
        if (line.substring(0, 5) == "$img ") {
            return new Line(line. substring(5), "image");
        }
        // if (line.substring(0, 5) == "$lnk(") {
        //     let index = 5;
        //     while (line.substring(index, index + 1) != ")") {
        //         index++;
        //     }
        //     const link = line.substring(5, index);
        //     const text = line.substring(index + 2);
        //     return new Line(text, "link", link);
        // }
        return new Line(line);
    });

    lines.push(inputLine);
    
    return new Block(lines);
}
