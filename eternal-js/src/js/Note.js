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
    this.element = document.createElement('div');
    this.state = { key, type: 'Note' };

    // Set any additional properties provided by the 'state' argument
    if (state !== undefined) this.update(state);

    document.getElementById('pool').appendChild(this.element);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */
  update(state) {
    if (state.hasOwnProperty('text'))
      this.text = state.text;

    if (state.hasOwnProperty('links'))
      this.links = state.links;

    Object.assign(this.state, state);
  }

  /**
   * @param {string} newText - the text to change this to
   */
  set text(newText) {
    this.element.textContent = newText;
  }

  /**
   * @returns {string} - current text;
   */
  get text() {
    return this.element.textContent;
  }

  /**
   * Called when this object leaves our subscription area, or is removed from
   * the synk server.
   */
  teardown() {
    this.element.parentElement.removeChild(this.element);
  }
}
