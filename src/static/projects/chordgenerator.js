import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `
        $h1 CHORD GEN>ER>A>TOR

        $bcmd projects
        $bcmd home

        $hr
        
        A C# Windows app that lets you explore and combine randomly generated chords, good for endless musical inspiration. Unlike the house music generator, these chords are completely random, allowing weird and interesting chords to inspire the user. Chords can be played at the click of a button and a MIDI sequence can be exported to use in any music program. When a chord needs to be played, the app reads from wav files (each a single piano note sound) to combine into a single wav file to play to the user, when the user is happy with the chord sequence, they can export it to a MIDI file.

        $b Feature overview:
        • Create up to 8 randomly generated chords, with four notes each
        • Adjust the length of each chord
        • Add and remove chords from a "favourites" library to increase the likelyhood of that chord appearing
        • Transpose a chord up and down to make adjustments
        • Edit individual notes in a chord to make even finer adjustments
        • Play individual chords or let the whole chord sequence play
        • Export the chord sequence, complete with chord lengths to MIDI, and build on it in another application
        
        $b GitHub:
        $lnk https://github.com/felixxwu/Chord-Generator

        $b Preview:
        $img chord_generator.jpg

        $b Related:
        $cmd housegenerator
        `,
        {clear: true}
    ))
}