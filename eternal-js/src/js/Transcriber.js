import { Flow as VF } from 'vexflow';
import { floatToVexflowDuration } from './util.js';

const noteNames = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
const octaveNumber = ['-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const whiteNotes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
const vfNotes = window.vfNotes = new Array(128);

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
    this.stave = new VF.Stave(10, 40, 340);
    this.renderer = new VF.Renderer(element, VF.Renderer.Backends.SVG);
    this.renderer.resize(360, 180);
    this.stave.addClef('treble').addTimeSignature('4/4');
    this.stave.setContext(this.renderer.getContext());
  }

  /**
   * The number of notes is determined by the first 0 in the
   * @param {Integer[]} noteNums - The note numbers to insert
   * @param {float[]} beatsArray - duration of each note. The first 0 in this
   *        array indicated the end of the sequence.
   */
  setNotes(noteNums, beatsArray) {
    this.renderer.getContext().clear();
    this.stave.draw();

    let totalBeats = 0;
    const notes = [];

    for (let i = 0; i < beatsArray.length; i++) {
      const beats = beatsArray[i];
      const noteNum = noteNums[i];

      if (beats <= 0) break;
      const duration = floatToVexflowDuration(beats);

      totalBeats += beats;
      notes.push(
        new VF.StaveNote({
          duration,
          clef: 'treble',
          keys: [`${whiteNotes[noteNum % 7]}/4`],
        }),
      );
    }

    // Voice represents a sequence of notes
    this.voice = new VF.Voice({ num_beats: totalBeats, beat_value: 4 });
    this.voice.addTickables(notes);

    // Format and justify the notes to 400 pixels.
    const formatter = new VF.Formatter().joinVoices([this.voice]).format([this.voice], 320);

    this.voice.draw(this.renderer.getContext(), this.stave);
  }
}