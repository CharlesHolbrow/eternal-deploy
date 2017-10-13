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
    this.keys = [];
    this.objects = [];
    // array or arrays. each sub array is a collection of synk objects
    this.data = [];
    this.root = null;
  }

  resolve() {
    this.data = [];
    this.objects = [];

    for (const [i, key] of this.keys.entries()) {
      const object = this.synk.objects.get(key);

      if (!object) {
        this.objects = this.objects.slice(0, i);
        this.data = this.data.slice(0, i);

        return;
      }

      this.objects[i] = object;

      if (!object.links) return;

      const links = object.links.map((v) => this.synk.objects.get(v));

      this.data[i] = links.filter((d) => !!d);
      this.data[i].key = key;

    }
  }

  push(key) {
    this.keys.push(key);
    this.resolve();
  }

  updateDoc() {
    const levels = d3.select('#levels')
      .selectAll('div.level')
      .data(this.data, (d) => d.key);

    levels.enter()
      .append('div')
      .attr('class', 'level');

    levels.exit().remove();

    console.log('levels enter, exit', levels.enter().size(), levels.exit().size());

    const nodes = d3.selectAll('#levels div.level')
      .selectAll('.eternal-node')
      .data((d) => d, (d) => d.key);

    nodes.enter().append((d) => d.element).classed('next', false);
    nodes.exit().remove();
  }

  focus(key) {
    // First check if this key is in the stack
    for (const [i, row] of this.data.entries()) {
      for (const col of row) {
        if (col.key === key) {
          // found it in row i. That means we want to go back to that row and add this to after it
          console.log('found focus item in row', i);
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
