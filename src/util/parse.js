import LineClass from "../classes/LineClass.js"
import Block from "../classes/Block.js";

export default function parse(text) {
    const split = text.split("\n");

    const lines = split.map(line => {
        line = line.trim();
        if (line.substring(0, 5) == "$cmd ") {
            return new LineClass(line.substring(5), "command");
        }
        if (line.substring(0, 5) == "$lnk ") {
            return new LineClass(line.substring(5), "link");
        }
        if (line.substring(0, 5) == "$img ") {
            return new LineClass(line. substring(5), "image");
        }
        return new LineClass(line);
    });

    lines.push(new LineClass("", "input"));
    
    return new Block(lines);
}