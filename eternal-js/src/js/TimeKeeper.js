import Emitter from 'eventemitter3';

export default class TimeKeeper {
  /**
   * @param {[number]} bpm - beats per minute to tick at. default = 60
   * @param {function} callback - called every time increment. Will be called with:
   *        - integer beat index.
   *        - floating point beatTime - precise time of next beat.
   *          approximately this.delay ms from now
   *        - floating point duration - duration of one beat
   */
  constructor(bpm, callback) {
    if (!window.performance) {
      console.error('Cannot keep time! missing window.performance');

      return;
    }

    /**
     * @member delay - this is the number of ms ahead we are scheduling
     */
    this.delay = 18;

    /**
     * @member bpm - how many callbacks per minute?
     */
    this.bpm = bpm || 60;

    /**
     * @member duration - duration in ms of each beat
     */
    this.duration = (1 / this.bpm) * 1000 * 60;

    this.beatIndex = 0;

    this.callback = callback;

    this.nextBeatTime = 0;
  }

  /**
   * Begin ticking
   */
  start() {
    this.stop();
    this.nextBeatTime = window.performance.now() + this.delay;

    // this should get called prior to each beat
    const beat = () => {
      this.callback(this.beatIndex, this.nextBeatTime, this.duration);

      this.beatIndex++;
      this.nextBeatTime = this.nextBeatTime + this.duration;

      let timeUntilNextCallback = this.nextBeatTime - window.performance.now() - this.delay;

      if (timeUntilNextCallback < 0) {
        console.warn('TimeKeeper could not keep up!');
        timeUntilNextCallback = 0;
      }

      this.timeout = setTimeout(beat, timeUntilNextCallback);
    };

    beat();
  }

  /**
   * Stop ticking;
   */
  stop() {
    clearTimeout(this.timeout);
  }

  /**
   * set Beats per minute. will take effect after the next beat tick
   * @param {number} bpm - new beats per minute value 
   */
  set bpm(bpm) {
    this._bpm = bpm;

    /**
     * @member duration - duration in ms of each beat
     */
    this.duration = (1 / this.bpm) * 1000 * 60;
  }

  /**
   * Get BeatsPerMinute
   */
  get bpm() {
    return this._bpm;
  }
}
