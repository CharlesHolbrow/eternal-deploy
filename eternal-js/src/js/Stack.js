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

      this.data[i] = links;
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

    const elements = d3.selectAll('#levels div.level').selectAll('.eternal-node')
      .data((d) => d);

    elements.enter().append((d) => {
      if (!d) return document.createElement('div');

      return d.element;
    });

    elements.exit().remove();
  }
}
