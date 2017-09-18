/**
 * Example object
 */
export default class Note {
  /**
   * @param {string} key - provided by synk server
   * @param {object} state - initial state provided by synk server
   */
  constructor(key, state, synkObjects) {
    this.elementPre = document.createElement('pre');
    this.elementCode = document.createElement('code');
    this.elementPre.appendChild(this.elementCode);
    this.parent = document.getElementById('root');

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
  }

  /**
   * Called when this object leaves our subscription area, or is removed from
   * the synk server.
   */
  teardown() {
    this.parent.removeChild(this.elementPre);
  }
}
