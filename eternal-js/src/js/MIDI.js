import Emitter from 'eventemitter3';

/**
 * Initialize midi in Chrome.
 */
export default class MIDI extends Emitter {
  /**
   * @param {string} name - Find output that includes this string in its name.
   * @event ready - emit when this becomes useable
   * @event error - emit when we were unable to initialize midi
   */
  constructor(name) {
    super();
    this.state = 'initializing';
    this.error = new Error('MIDI is uninitialized');
    this.access = null;
    this.outputs = [];
    this.output = null;
    this.midiDeviceName = name || 'IAC';

    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then((access) => {
        this.access = access;
        this.state = 'access granted';
        this.error = null;

        // save a list of all output devices
        for (const [id, output] of this.access.outputs)
          this.outputs.push(output);

        // default device
        if (this.outputs.length) this.output = this.outputs[0];
        // but try to find output with the requested name
        for (const output of this.outputs) {
          if (output.name.indexOf(this.midiDeviceName !== -1)) {
            this.output = output;
            break;
          }
        }

        if (this.output) this.emit('ready');
        else this.emit('error', new Error('could not find any output devices'));
      }, (error) => {
        this.state = 'access denied';
        this.error = error;
        this.emit('error', this.error);
      });
    } else {
      this.state = 'midi not available in this browser';
      this.error = new Error('MIDI not available in this browser');
      this.emit('error', this.error);
    }
  }

  send(value, time) {
    if (this.output && !this.error) this.output.send(value, time);
  }
}
