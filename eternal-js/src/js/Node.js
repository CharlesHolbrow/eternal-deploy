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

  setRandomPosition() {
    const angle = Math.random() * 2 * Math.PI; // 0 to 2pi
    let x = Math.cos(angle);
    let y = Math.sin(angle);

    // We have x and y between -1 and 1 with origin 0

    // first scale for nice distance from the center
    const min = 0.25; // minimum dist from center
    const scale = 0.5; // Math.random();

    x = x * Math.abs(Math.random() * (1 / x));
    y = y * Math.abs(Math.random() * (1 / y));

    // We want x and y between 0 and 100 with origin 50
    x = (x + 1) * 50;
    y = (y + 1) * 50;

    this.element.style.left = `${x}%`;
    this.element.style.top = `${y}%`;
  }

  clearRandomPosition() {
    this.element.style.left = '';
    this.element.style.top = '';
  }

  updatePosition() {
    if (this.element.classList.contains('link')
    || this.element.classList.contains('focus'))
      this.clearRandomPosition();
    else
      this.setRandomPosition();
  }
}
