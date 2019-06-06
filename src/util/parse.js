import LineClass from "../classes/LineClass.js"
import Block from "../classes/Block.js";
import config from "../config.js";

export default function parse(text) {
    const split = text.split("\n");

    const lines = split.map(line => {
        line = line.trim();
        if (line.substring(0, config.commandIdentifier.length) == config.commandIdentifier) {
            return new LineClass(line.substring(config.commandIdentifier.length), "command");
        }
        if (line.substring(0, config.linkIdentifier.length) == config.linkIdentifier) {
            return new LineClass(line.substring(config.linkIdentifier.length), "link");
        }
        if (line.substring(0, config.imageIdentifier.length) == config.imageIdentifier) {
            return new LineClass(line. substring(config.imageIdentifier.length), "image");
        }
        return new LineClass(line);
    });

    lines.push(new LineClass("", "input"));
    
    return new Block(lines);
}