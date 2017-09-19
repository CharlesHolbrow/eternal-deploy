/**
 * Example object
 */
export default class Voice {
  /**
   * @param {string} key - provided by synk server
   * @param {object} state - initial state provided by synk server
   * @param {synk.Objects} synkObjects - this app's Objects
   */
  constructor(key, state, synkObjects) {
    this.synkObjects = synkObjects;
    this.elementPre = document.createElement('pre');
    this.elementCode = document.createElement('code');
    this.elementPre.appendChild(this.elementCode);
    this.parent = document.getElementById('root');
    this.state = { key, type: 'Voice' };

    if (state && state.notes)
      this.state.notes = state.notes;
    if (state && state.lengths)
      this.state.lengths = state.lengths;

    // Set any additional properties provided by the 'state' argument
    if (state !== undefined) this.update(state);
    this.parent.appendChild(this.elementPre);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */
  update(state) {
    if (state.notes) {
      console.log('notes:', state.notes);
      delete state.notes;
    }

    if (state.lengths) {
      console.log('lengths:', state.lengths);
      delete state.lengths;
    }

    Object.assign(this.state, state);

    this.elementCode.innerText = JSON.stringify(this.state, null, '  ');

    // Draw the musical notation
    if (typeof state.number === 'number')
      this.synkObjects.transcriber.setNote(state.number);
  }

  /**
   * Called when this object leaves our subscription area, or is removed from
   * the synk server.
   */
  teardown() {
    this.parent.removeChild(this.elementPre);
  }
}
