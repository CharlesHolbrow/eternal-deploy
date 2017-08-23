/**
 * Example object
 */
export default class Note {
  /**
   * @param {string} key - provided by synk server
   * @param {object} state - initial state provided by synk server
   */
  constructor(key, state) {
    // Set any additional properties provided by the 'state' argument
    if (state !== undefined) this.update(state);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */
  update(state) {
    Object.assign(this, state);
    console.log('diff:', state, 'object:', this);
  }

  /**
   * Called when this object leaves our subscription area, or is removed from the synk server
   */
  teardown() {
    console.log('teardown:', this);
  }
}
