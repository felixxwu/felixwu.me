import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `
        $h1 CHESS RO>BOT GROUP PRO>JECT
        (2019)

        $cmd projects
        $cmd home

        $hr

        As the leader of the software team of 5, I was in charge of holding weekly meetings, discussing ideas, constructing a plan of attack, and distributing tasks and deadlines. Our robot was capable of scanning the state of any chess board, querying a chess AI for a move to play, then send instructions to a robotic arm to execute the move. We trained a machine learning classifier running on a server to recognise the positions of the pieces on the board, and used a RESTful API to talk to the Raspberry Pi to execute arm movement. My main task was to write code to interface with the robotic arm. Our robot won second place out of 22 groups.

        $b General overview of software tasks:
        • Find the boundaries of the chess board (most chess boards work)
        • Segment the image into 64 squares
        • Train a machine learning model to recognise if a square contains a white, black or no chess piece
        • Infer the new board state using this new information and previous board states
        • Query a chess AI for a move to play
        • Convert the move to a series of movements to control the robotic arm
        • Create a text-to-speech and speech-to-text interface in different languages to control the game

        $b Links:
        $lnk https://github.com/nogamesEd/plans/blob/master/Technical_report.pdf
        $lnk https://github.com/nogamesEd/pi

        $b Images:
        $img chess_1.jpg
        $img chess_2.jpg
        `,
        {clear: true}
    ))
}