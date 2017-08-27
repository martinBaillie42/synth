require.config({
    baseUrl: "./",
    paths: {
        "Tone" : "node_modules/tone/build/Tone"
    }
});

require(["Tone"], function(Tone){
    //create a synth and connect it to the master output (your speakers)
    Tone.Transport.bpm.value = 120;
    var synth = new Tone.Synth().toMaster();
    var synth2 = new Tone.Synth().toMaster();

    //play a middle 'C' for the duration of an 8th note
    // synth.triggerAttackRelease("C4", "8n");

    // var loop = new Tone.Loop(function(time){
    //     console.log(time);
    //     synth.triggerAttackRelease("C2", "8n", time);
    //     synth2.triggerAttackRelease("C3", "8n", "+0:1");
    // }, "4n");

    // var loop2 = new Tone.Loop(function(time){
    //     console.log(time);
    // }, "1n");

    // loop.start("1:0:0").stop("4:0:0");
    // loop2.start("1:0:0").stop("4:0:0");

    var seq = new Tone.Sequence(function(time, note){
        console.log(note);
        //straight quater notes
        synth.triggerAttackRelease(note, "4n", time);
    }, ["C4", "E4", "G4", "A4"], "4n").start();

    // Tone.Transport.start();
    // A4 is 440. To get the intervals between every note you need Math.pow(12, 1/2)
    // To get a sharp note you use d#4
    // To get C5 you would do 440 * (Math.pow(12, 1/2) * 3)
    // I think I'm best off using an array with all the available notes in:
    // ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
    // construct an array adding numbers 0 to 8 to the end of each.
    // You can then select a scale to use based on the numbers and the intervals
    // C Major would be [0,2,4,5,7,9,11]
    // A major scale is constructed of
    // increment by 2 unless i = 2 then increment by 1.

    const octave = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const doubleOctave = octave.concat(octave);
    console.log(doubleOctave);
    const major = [0,2,4,5,7,9,11];
    const minor = [0,2,3,5,7,9,10];
    const rootNote = 'A#';
    const rootNoteIndex = doubleOctave.findIndex((element) => {
        return element === rootNote;
    });
    const scale = [];
    for(let i = 0; i < major.length; i++) {
        // console.log(doubleOctave[major[i]]);
        scale.push(doubleOctave[rootNoteIndex + major[i]]);
    }
    console.log(scale);
});