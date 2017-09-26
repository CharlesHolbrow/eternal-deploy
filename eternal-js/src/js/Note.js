/**
 * Example object
 */
export default class Note {
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
    this.parent = document.getElementById('notes');
    this.state = { key, type: 'Note' };

    // Set any additional properties provided by the 'state' argument
    if (state !== undefined) this.update(state);
    this.parent.appendChild(this.elementPre);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */
  update(state) {
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
