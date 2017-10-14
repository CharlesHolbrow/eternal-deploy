import  * as d3 from 'd3-selection';

/**
 * make a d3 friendly chain of objects
 * each object will be displayed as it's three children
 */
export default class Stack {
  /**
   * Create a stack
   * @param {Synk} synk - the synk-js synk object
   */
  constructor(synk) {
    this.synk = synk;

    // Array of object keys from top to bottom
    // this.keys is the main input to stack.
    this.keys = []; // starting with the top prompt
    // When we resolve() iterate over the keys, and try to find objects until
    // one is missing.
    this.objects = [];
    // data is an array of arrays. Inner arrays contain synk objects
    this.data = [];
    this.root = null;
  }

  resolve() {
    this.data = [];
    this.objects = [];

    for (const [i, key] of this.keys.entries()) {
      const object = this.synk.objects.get(key);

      if (!object) break;

      this.objects[i] = object;

      if (!object.links) break;

      const links = object.links
        .map((v) => this.synk.objects.get(v))
        .filter((d) => !!d);

      this.data[i] = links;
      this.data[i].key = key;
    }

    // iterate over all rows but the last one, set the next class accordingly
    for (const [i, links] of this.data.entries()) {
      for (const link of links) {
        link.element.classList.remove('next');

        if (link === this.objects[i + 1]) link.element.classList.add('next');
      }
    }
  }

  updateDoc() {
    const levels = d3.select('#levels')
      .selectAll('div.level')
      .data(this.data, (d) => d.key);

    levels.enter()
      .append('div')
      .attr('class', 'level');

    levels.exit().remove();

    const nodes = d3.selectAll('#levels div.level')
      .selectAll('.eternal-node')
      .data((d) => d, (d) => d.key);

    nodes.enter().append((d) => d.element)
    nodes.exit().remove();
  }

  focus(key) {
    // First check if this key is in the stack
    for (const [i, row] of this.data.entries()) {
      for (const col of row) {
        if (col.key === key) {
          // found it in row i. That means we want to go back to that row and add this to after it
          this.keys = this.keys.slice(0, i + 1);
          this.keys.push(key);
          this.resolve();
          this.updateDoc();

          return;
        }
      }
    }

    if (key === this.keys[0]) {
      this.keys = this.keys.slice(0, 1);
      this.resolve();
      this.updateDoc();

      return;
    }

    this.keys = [key];
    this.resolve();
    this.updateDoc();
  }
}
