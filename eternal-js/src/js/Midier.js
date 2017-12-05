import help from 'midi-help';
import Emitter from 'eventemitter3';

/**
 * Convenience wrapper around midi API.
 */
export default class Midier extends Emitter {
  /**
   * Create a 'Midier' instance
   */
  constructor() {
    super();

    this.ok = false;
    this.midi = null;
    this.status = 'midi not supported';
    this.parsers = [];

    if (!navigator.requestMIDIAccess) return;

    navigator.requestMIDIAccess().then((midi) => {
      this.ok = true;
      this.midi = midi;
      this.status = 'ready';

      for (const [id, input] of midi.inputs) {
        const parser = new help.MidiParser();

        input.onmidimessage = (msg) => {
          parser.parseArray(msg.data);
        };

        parser.on('noteOn', (n, v, c) => {
          this.emit('noteOn', n, v, c);
        });

        parser.on('noteOff', (n, v, c) => {
          this.emit('noteOff', n, v, c);
        });

        this.parsers.push(parser);
      }

      console.log('midi is ready!');
    }, (reason) => {
      this.status = reason;
    });
  }
}
