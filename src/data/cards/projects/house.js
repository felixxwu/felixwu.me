export default {
  title: "House Music Generator",
  img: "house.png",
  text: `
  A C# Windows app that can randomly generate 16 bars of "House" music, complete with drums, main melody and a chord sequence. The app works by reading from a library of wav files (samples of drums or instrument notes), and combining them into a new wav file. By using a bit of music theory, the chord sequence that is generated is guaranteed to sound musical, and is taken into account when the melody is created so that there are no musical clashes. Various displays show the created melody and chord sequence, and when the user is happy with their creation, it can be exported to .wav or .midi files. Creating .wav and .midi files from scratch requires an understanding of their file structures and headers, which was challenging.

  Feature overview:
  <ul>
    <li>Chords are generated using Scale Degrees, and so are guaranteed to sound musical</li>
    <li>If the user does not like a chord, they can re-generate a single chord leaving the rest untouched, or they can specify the chord entirely manually</li>
    <li>Melody is generated based on the chord sequence to ensure that there are no musical clashes</li>
    <li>Export to .wav or .midi files for use in other programs, and continue composition</li>
    <li>Graphical display to show the generated melody in a piano roll style</li>
    <li>Drums are set to have a slight swing, giving the generated clip the classic "House" feeling</li>
    <li>With the drums overlaid, the track will have "ducking" applied to it - a mastering process in which the instruments' volume is quickly lowered and brought back up to make the kick drum stand out</li>
  </ul>
  <a href="https://github.com/felixxwu/Music-Generator" target="_blank">GitHub Repo</a>
  <br>
  <br>
  <em>2016</em>
  `
}