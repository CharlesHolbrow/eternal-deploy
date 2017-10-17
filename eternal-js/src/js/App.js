import { Objects, Connection, Synk }  from 'synk-js';
import help from 'midi-help';

import AppEndpoint from './AppEndpoint.js';
import Note from './Note.js';
import Voice from './Voice.js';
import MIDI from './MIDI.js';
import ChordLibrary from './ChordLibrary.js';
import TimeKeeper from './TimeKeeper.js';
import Stack from './Stack.js';

/**
* High level Aether Application
*/
export default class App {
  /**
  * Create an App
  */
  constructor() {
    const https = window.location.protocol.startsWith('https');
    const url =  `${https ? 'wss' : 'ws'}://${window.location.host}/ws`;

    // new system
    this.initialKey = null;
    this.initialObject = null;

    this.midi = new MIDI('IAC');
    this.synk = new Synk(url);
    this.endpoint = new AppEndpoint(this);
    this.stack = new Stack(this.synk);

    // Chord library makes it easy to send midi!
    this.chordLibrary = new ChordLibrary();
    this.chordLibrary.pushAnthem();
    // Give Transcriber's access to the chordLibrary
    this.synk.objects.chordLibrary = this.chordLibrary;

    this.pool = document.createElement('div');
    this.pool.id = 'pool';
    this.focusDiv = document.getElementById('focus');
    this.hr = document.getElementById('beat');

    // Time Keeper helps us keep accurate time in spite of the jittery js event loop
    const bpm = 33;
    // song position pointer
    let spp = -1;
    let measure = -1;
    let beat = -1;

    const baseMinor =   [60, 62, 63, 65, 67, 68, 70, 72];
    const baseRideVel = [100, 50, 74, 45];

    this.change = 0;
    let minor =   [60, 62, 63, 65, 67, 68, 70, 72];
    let rideVel = [100, 50, 74, 45];

    this.modulate = () => {
      this.change = (this.change + 7) % 12;
      if (this.change > 6) this.change -= 12;
      minor = baseMinor.map((v) => v + this.change);
    };

    this.timeKeeper = new TimeKeeper(bpm, (i, beatTime, duration) => {
      // spp counts total beats elapsed
      spp++;

      // loops over the indexes of rideVel;
      beat = spp % rideVel.length;

      // measure counts total measure elapsed
      if (beat === 0) measure++;

      // duration of one measure
      const mDur = duration * rideVel.length;

      // send midi

      // ride
      if (this.stack.length > 1) {
        const vr = rideVel[spp % rideVel.length];

        this.midi.send(help.noteOn(39, vr, 9), beatTime);
        this.midi.send(help.noteOff(39, 0, 9), beatTime + 100);
      }
      // side-chain kick
      this.midi.send(help.noteOn(36, 127, 10), beatTime);
      this.midi.send(help.noteOff(36, 0, 10), beatTime + 100);

      const p1 = minor[measure % minor.length];
      const p2 = minor[(measure + 4) % minor.length];
      const p3 = p1 + 12;
      const p4 = minor[(measure + 2) % minor.length] + 12;

      // Melody
      if (this.stack.length > 2) {
        if (beat === 0) {
          // this fires ever time the drum loop restarts
          const v1 = 100;

          this.midi.send(help.noteOn(p1, v1, 1), beatTime);
          this.midi.send(help.noteOff(p1, 0, 1), beatTime + (mDur * 1.25));
        }

        if (beat === 2) {
          const v2 = Math.floor((Math.random() * 99) + 1);
          const p1 = minor[(measure + 5) % minor.length];
          const start = beatTime + (2 / 3 * duration);
          const end = start + (1 / 3 * duration) + duration;

          this.midi.send(help.noteOn(p1, v2, 1), start);
          this.midi.send(help.noteOff(p1, 0, 1), end);
        }
      }

      // bass
      if (this.stack.length > 3) {
        const pb = p1 - 24; // pitch (bass)

        this.midi.send(help.noteOn(pb, 100, 2), beatTime);
        this.midi.send(help.noteOff(pb, 0, 2), beatTime + duration - 1);
      }

      // gated pad
      if (this.stack.length > 4) {
        this.midi.send(help.noteOn(p1, 100, 3), beatTime);
        this.midi.send(help.noteOff(p1, 0, 3), beatTime + duration - 1);
        this.midi.send(help.noteOn(p2, 100, 3), beatTime);
        this.midi.send(help.noteOff(p2, 0, 3), beatTime + duration - 1);
        this.midi.send(help.noteOn(p3, 100, 3), beatTime);
        this.midi.send(help.noteOff(p3, 0, 3), beatTime + duration - 1);
        this.midi.send(help.noteOn(p4, 100, 3), beatTime);
        this.midi.send(help.noteOff(p4, 0, 3), beatTime + duration - 1);
      }

      this.hr.style.transition = '';
      this.hr.style.opacity = '0';
      setTimeout(() => {
        this.hr.style.transition = `opacity ${Math.floor(duration)}ms`;
        this.hr.style.opacity = '1';
      }, 100);

      if (this.nextObject && this.nextObject.element && this.nextObject.key) {
        this.focus(this.nextObject.key);
        if (this.nextObject.transcriber) {
          const chord = this.nextObject.chordLibrary.chords[this.nextObject.notes[0]];

          console.log('chord:', chord);

          for (const noteNum of chord.midiNotes) {
            this.midi.send(help.noteOn(noteNum, 100, 0), beatTime);
            this.midi.send(help.noteOn(noteNum, 0, 0), beatTime + duration - 5); // beatTime + duration * 2 will cause problems if we speed up the tempo
          }
        }
      }
    });

    // All messages from the server will be passed to the endpoint. Thanks to
    // the connection object, even if we disconnect and reconnect, incoming
    // messages will still be passed through to this.endpoint.
    this.endpoint.subscribe(this.synk.connection.stream);

    // Set default classes
    this.synk.objects.byKey.createBranch('n').class = Note;
    this.synk.objects.byKey.createBranch('v').class = Voice;

    // We could replace 'close' with reconnect'
    this.synk.connection.on('close', () => {
      console.log('connection close bySKey.branches:', Object.keys(this.synk.objects.bySKey.branches));
    });
    this.synk.connection.on('open', () => {
      console.log('connection open bySKey.branches: ', Object.keys(this.synk.objects.bySKey.branches));
    });

    this.synk.objects.on('add', (obj) => {
      this.updateObject(obj);
      obj.element.classList.add('fade-in');
      this.stack.resolve();
      this.stack.updateDoc();
    });

    this.synk.objects.on('rem', (obj) => {
      if (obj.element && obj.element.parentElement)
        obj.element.parentElement.removeChild(obj.element);

      if (obj === this.initialObject)
        this.setInitialObject(null);
    });

    this.synk.objects.on('mod', (obj) => {
      this.updateObject(obj);
    });

    this.synk.objects.on('click', (obj) => {
      if (obj.element && obj.element.classList.contains('greyed')) {
        this.modulate();
        console.log('modulate to:', this.change);
      }
      if (obj.key) this.stack.focus(obj.key);
    });

    this.synk.objects.on('updatePosition', (obj) => {
      this.updateObjectPosition(obj);
    });

    setTimeout(() => {
      this.timeKeeper.start();
    }, 2000);
  }

  /**
   * Check if a synk object needs to be changed, update it if so
   * @param {Object} object - the synk object to inspect
   */
  updateObject(object) {
    if (object.key === this.initialKey) {
      this.setInitialObject(object);

      return;
    }
  }

  setInitialObject(obj) {
    if (this.initialObject === obj) return;

    // Remove old object
    if (this.initialObject || !obj) {
      this.initialObject.element.classList.remove('focus');
      if (this.initialObject.element.parent)
        this.initialObject.element.parent.removeChild(this.initialObject);
    }

    this.initialObject = obj || null;
    // Add new
    if (obj) {
      obj.element.classList.add('focus');
      this.focusDiv.appendChild(obj.element);
    }
  }
}
