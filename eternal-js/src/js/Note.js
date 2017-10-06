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

    this.type = 'note';
    this.span = document.createElement('span');
    this.span.onclick = () => { synkObjects.emit('click', this); };
    this.element.appendChild(this.span);

    // Set any additional properties provided by the 'state' argument
    this.update(state);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */
  update(state) {
    super.update(state);
    this.element.onclick = null;

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
    this.span.textContent = newText;
  }

  /**
   * @returns {string} - current text;
   */
  get text() {
    return this.span.textContent;
  }

  teardown() {
    this.span.onclick = null;
  }
}
