import { Flow as VF } from 'vexflow';

const vfNotes = ['c/4', 'd/4', 'e/4', 'f/4', 'g/4', 'a/4', 'b/4', 'c/5'];

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
    this.stave.setContext(this.renderer.getContext())
    
    // this.setNote(0);
  }

  setNote(noteNum) {
    this.renderer.getContext().clear();
    this.stave.draw();

    // Voice represents a sequence of notes
    this.voice = new VF.Voice({ num_beats: 1, beat_value: 4 });

    const key = vfNotes[noteNum % 8];

    if (typeof key !== 'string') {
      console.warn('Got bad noteNum/key', noteNum, key);

      return;
    }

    const notes = [
      new VF.StaveNote({ clef: 'treble', keys: [key], duration: 'q' }),
    ];

    this.voice.addTickables(notes);

    // Format and justify the notes to 400 pixels.
    const formatter = new VF.Formatter().joinVoices([this.voice]).format([this.voice], 400);

    this.voice.draw(this.renderer.getContext(), this.stave);
  }
}
