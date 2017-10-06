import Node from './Node.js';

/**
 * Example object
 */
export default class Note extends Node {
  /**
   * @param {string} key - provided by synk server
   * @param {object} state - initial state provided by synk server
   * @param {synk.Objects} synkObjects - this app's Objects
   */
  constructor(key, state, synkObjects) {
    super(key, state, synkObjects);

    // Set any additional properties provided by the 'state' argument
    this.update(state);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */
  update(state) {
    super.update(state);

    if (state.hasOwnProperty('text')) {
      this.text = state.text;
      delete state.text;
    }

    Object.assign(this, this.state);
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
}
