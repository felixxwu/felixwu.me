import LineClass from "../classes/LineClass.js"
import Block from "../classes/Block.js";
import config from "../config.js";

export default function parse(text, focusAll = false) {
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
        if (line.substring(0, config.bigFontIdentifier.length) == config.bigFontIdentifier) {
            return new LineClass(line. substring(config.bigFontIdentifier.length), "h1");
        }
        if (line.substring(0, config.boldFontIdentifier.length) == config.boldFontIdentifier) {
            return new LineClass(line. substring(config.boldFontIdentifier.length), "bold");
        }
        return new LineClass(line);
    });

    lines.push(new LineClass("", "input"));

    if (focusAll) return new Block(lines, false, () => {}, 0, true)

    return new Block(lines);
}