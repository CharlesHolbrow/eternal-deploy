/**
 * An object with the .links member
 */
export default class Node {
  /**
   * 
   */
  constructor(key, state, synkObjects) {
    this.key = key;
    this.links = [null, null, null];
    this.element = document.createElement('div');
    this.element.classList.add('eternal-node');
    this.element.id = key;
    this.synkObjects = synkObjects;
  }

  /**
   * @param {Object} state - the incoming state sent from the server.
   */
  update(state) {
    if (state.hasOwnProperty('links')) {
      this.links = state.links;
      delete state.links;
    }

    if (state.hasOwnProperty('linksDiff')) {
      Object.assign(this.links, state.linksDiff);
      delete state.linksDiff;
    }
  }

  /**
   * Called when this object leaves our subscription area, or is removed from
   * the synk server.
   */
  teardown() {}
}
