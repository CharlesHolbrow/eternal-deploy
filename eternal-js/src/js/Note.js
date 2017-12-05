/**
 * Example object
 */
export default class Note {
  /**
   * @param {string} key - provided by synk server
   * @param {object} state - initial state provided by synk server
   */
  constructor(key, state, synkObjects) {
    this.element = document.createElement('div');
    this.elementPre = document.createElement('pre');
    this.element.appendChild(this.elementPre);
    this.elementCode = document.createElement('code');
    this.elementPre.appendChild(this.elementCode);
    this.parent = document.getElementById('root');

    this.element.classList.add('note');

    this.state = { key, type: 'Note' };

    // Set any additional properties provided by the 'state' argument
    if (state !== undefined) this.update(state);
    this.parent.appendChild(this.element);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */
  update(state) {
    Object.assign(this.state, state);

    // update color
    if (state.hasOwnProperty('number')) this.number = state.number;

    // update text
    const json = JSON.stringify(this.state, null, '  ');

    this.elementCode.innerText = `${json}\n${this.color}`;
  }

  /**
   * Called when this object leaves our subscription area, or is removed from
   * the synk server.
   */
  teardown() {
    this.parent.removeChild(this.element);
  }

  /**
   * Change the background color.
   * @param {string|number} val - string representing color, or rrggbb integer
   *        number
   */
  set number(val) {
    let color;

    if (typeof val === 'number') color = `#${val.toString(16)}`;
    else if (typeof val === 'string') color = Math.floor(val);
    else return; // do nothing if val is not string or number;

    this.color = color;
    this.element.style.backgroundColor = color;
  }
}
