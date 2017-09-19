import { Flow as VF } from 'vexflow';

const noteNames = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
const octaveNumber = ['-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const whiteNotes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
const vfNotes = window.vfNotes = new Array(128);

const durations = {
  1: 'q',
  2: 'h',
  4: 'w',
};

for (let i = 0; i < 128; i++){
  const name = noteNames[i % 12];
  const octave = octaveNumber[Math.floor(i / 12)];

  vfNotes[i] = `${name}/${octave}`;
}

// middle c = c4 = 60
// c3 = 48
// c2 = 36
// c1 = 24
// c0 = 12

/**
 * Represent a dynamically updating staff
 */
export default class Transcriber {
  /**
   * @param {DomElement} element - The dom element were we add an .svg
   */
  constructor(element) {
    // xPosition: 10, yPosition: 40, width: 400
    this.stave = new VF.Stave(10, 40, 400);
    this.renderer = new VF.Renderer(element, VF.Renderer.Backends.SVG);
    this.renderer.resize(500, 180);
    this.stave.addClef('treble').addTimeSignature('4/4');
    this.stave.setContext(this.renderer.getContext());
  }

  setNote(noteNums, beatsArray) {
    this.renderer.getContext().clear();
    this.stave.draw();

    let totalBeats = 0;
    const notes = [];

    for (let i = 0; i < beatsArray.length; i++) {
      const beats = beatsArray[i];
      const noteNum = noteNums[i];

      if (beats <= 0) break;
      totalBeats += beats;
      notes.push(
        new VF.StaveNote({ clef: 'treble', keys: [`${whiteNotes[noteNum % 7]}/4`], duration: durations[beats] }),
      );
    }

    // Voice represents a sequence of notes
    this.voice = new VF.Voice({ num_beats: totalBeats, beat_value: 4 });

    this.voice.addTickables(notes);

    // Format and justify the notes to 400 pixels.
    const formatter = new VF.Formatter().joinVoices([this.voice]).format([this.voice], 400);

    this.voice.draw(this.renderer.getContext(), this.stave);
  }
}
