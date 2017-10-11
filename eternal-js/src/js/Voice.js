import Node from './Node.js';
import Transcriber from './Transcriber.js';

/**
 * Musical voice that will be transcribed to staff notation
 */
export default class Voice extends Node {
  /**
   * @param {string} key - provided by synk server
   * @param {object} state - initial state provided by synk server
   * @param {synk.Objects} synkObjects - this app's Objects
   */
  constructor(key, state, synkObjects) {
    super(key, state, synkObjects);

    this.element.onclick = () => { synkObjects.emit('click', this); };
    this.transcriber = new Transcriber(this.element, synkObjects.chordLibrary);
    this.type = 'voice';

    // Set any additional properties provided by the 'state' argument
    this.update(state);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */
  update(state) {
    super.update(state);

    if (state.notes)
      this.notes = state.notes;
    else if (state.notesDiff)
      Object.assign(this.notes, state.notesDiff);

    if (state.lengths)
      this.lengths = state.lengths;
    else if (state.lengthsDiff)
      Object.assign(this.lengths, state.lengthsDiff);

    // Draw the musical notation
    this.render();
  }

  /**
   * Draw the object to it's element
   */
  render() {
    this.transcriber.setNotes(this.notes, this.lengths);
  }

  teardown() {
    this.element.onclick = null;
  }
}
