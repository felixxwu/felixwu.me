export default `
    $h1 CHESS RO>BOT GROUP PRO>JECT
    (2019)

    Lead a software team of 5 to develop a robot capable of playing chess on a physical chess board, using only a camera as input. Our team won second place in an Össur competition out of 22 groups.

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

    $hr
    $b Navigation:
    $bcmd projects
    $bcmd home
`