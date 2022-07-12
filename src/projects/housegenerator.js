export default `
    $h1 HOUSE MU>SIC GEN>ER>A>TOR

    A C# Windows app that can randomly generate 16 bars of "House" music, complete with drums, main melody and a chord sequence. The app works by reading from a library of wav files (samples of drums or instrument notes), and combining them into a new wav file. By using a bit of music theory, the chord sequence that is generated is guaranteed to sound musical, and is taken into account when the melody is created so that there are no musical clashes. Various displays show the created melody and chord sequence, and when the user is happy with their creation, it can be exported to .wav or .midi files. Creating .wav and .midi files from scratch requires an understanding of their file structures and headers, which was challenging.

    $b Feature overview:
    • Chords are generated using Scale Degrees, and so are guaranteed to sound musical
    • If the user does not like a chord, they can re-generate a single chord leaving the rest untouched, or they can specify the chord entirely manually
    • Melody is generated based on the chord sequence to ensure that there are no musical clashes
    • Export to .wav or .midi files for use in other programs, and continue composition
    • Graphical display to show the generated melody in a piano roll style
    • Drums are set to have a slight swing, giving the generated clip the classic "House" feeling
    • With the drums overlayed, the track will have "ducking" applied to it - a process in which the instruments' volume is quickly lowered and brought back up to make the kick drum stand out

    $b GitHub:
    $lnk https://github.com/felixxwu/Music-Generator

    $b Preview:
    $img music_generator.jpg

    $hr
    $b Related:
    $cmd chordgenerator

    $b Navigation:
    $bcmd projects
    $bcmd home
`