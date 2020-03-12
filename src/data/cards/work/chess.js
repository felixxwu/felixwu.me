export default {
  title: "Chess Robot Group Project",
  img: "chess.png",
  text: `
  As the leader of the software team of 5, I was in charge of holding weekly meetings, discussing ideas, constructing a plan of attack, and distributing tasks and deadlines. Our robot was capable of scanning the state of any chess board, querying a chess AI for a move to play, then send instructions to a robotic arm to execute the move. We trained a machine learning classifier running on a server to recognise the positions of the pieces on the board, and used a RESTful API to talk to the Raspberry Pi to execute arm movement. My main task was to write code to interface with the robotic arm. Our robot won second place out of 22 groups.
  <br>
  <br>
  General overview of software tasks:
  <ul>
    <li>Find the boundaries of the chess board (most chess boards work)</li>
    <li>Segment the image into 64 squares</li>
    <li>Train a machine learning model to recognise if a square contains a white, black or no chess piece</li>
    <li>Infer the new board state using this new information and previous board states</li>
    <li>Query a chess AI for a move to play</li>
    <li>Convert the move to a series of movements to control the robotic arm</li>
    <li>Create a text-to-speech and speech-to-text interface in different languages to control the game</li>
  </ul>
  <a href="https://github.com/nogamesEd/plans/blob/master/Technical_report.pdf" target="_blank">Report</a>
  <br>
  <a href="https://github.com/nogamesEd/pi" target="_blank">GitHub Repo</a>
  <br>
  <br>
  <em>2019</em>
  `
}