import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `$h1 SUDOKU SOLVER & CREATOR

        A Java app to solve or create Sudoku puzzles. N.B. the created puzzles are solvable, but they have no notion of difficulty since the creation algorithm is simple and naive and does not take into account how a real human might solve a Sudoku puzzle.

        $b GitHub:
        $lnk https://github.com/felixxwu/Sudoku

        $b Preview:
        $img sudoku.jpg

        $b Go back
        $cmd projects
        $cmd home
        `
    ))
}