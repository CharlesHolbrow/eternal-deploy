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
    this.inputs = [];

    if (!navigator.requestMIDIAccess) return;

    navigator.requestMIDIAccess().then((midi) => {
      this.ok = true;
      this.midi = midi;
      this.status = 'ready';
      this.pedal = false; // only one pedal for many channels/devices

      for (const [id, input] of midi.inputs) {
        const parser = new help.MidiParser();

        input.onmidimessage = (msg) => {
          parser.parseArray(msg.data);
        };

        parser.on('noteOn', (n, v, c) => {
          if (v === 0) this.emit('noteOff', n, v, c);
          else this.emit('noteOn', n, v, c);
        });

        parser.on('noteOff', (n, v, c) => {
          this.emit('noteOff', n, v, c);
        });

        parser.on('cc', (n, v, c) => {
          if (n === 64) {
            if (v >= 64) {
              if (this.pedal === false) {
                this.pedal = true;
                this.emit('pedal', true, c);
              }
            } else {
              if (this.pedal === true) {
                this.pedal = false;
                this.emit('pedal', false, c);
              }
            }
          }
        });

        this.parsers.push(parser);
        this.inputs.push(input);
      }

      console.log('midi is ready!');
    }, (reason) => {
      this.status = reason;
    });
  }
}
