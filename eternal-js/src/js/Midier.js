/**
 * Convenience wrapper around midi API.
 */
export default class Midier {
  /**
   * Create a 'Midier' instance
   */
  constructor() {
    this.ok = false;
    this.midi = null;
    this.status = 'midi not supported';

    if (!navigator.requestMIDIAccess) return;

    navigator.requestMIDIAccess().then((midi) => {
      this.ok = true;
      this.midi = midi;
      this.status = 'ready';
      console.log('midi is ready!');
    }, (reason) => {
      this.status = reason;
    });
  }
}
