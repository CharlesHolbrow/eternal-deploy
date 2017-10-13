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
    const bpm = 10;

    this.timeKeeper = new TimeKeeper(bpm, (i, beatTime, duration) => {
      this.midi.send(help.noteOn(39, 100, 9), beatTime);
      this.midi.send(help.noteOn(39, 0, 9), beatTime + 100);
      this.midi.send(help.noteOn(39, 50, 9), beatTime + (duration / 4));
      this.midi.send(help.noteOn(39, 0, 9), beatTime + (duration / 4) + 100);
      this.midi.send(help.noteOn(39, 84, 9), beatTime + (duration / 2));
      this.midi.send(help.noteOn(39, 0, 9), beatTime + (duration / 2) + 100);
      this.midi.send(help.noteOn(39, 45, 9), beatTime + (duration / 4 * 3));
      this.midi.send(help.noteOn(39, 0, 9), beatTime + (duration / 4 * 3) + 100);

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
      // if (obj.element && obj.key) this.focus(obj.key);
      this.setNext(obj);
      if (obj && obj.key) this.stack.focus(obj.key);
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

  setNext(obj) {
    const parent = obj.element.parentElement;

    if (parent.tagName.toLowerCase() !== 'div') return;

    const all = [...parent.children];

    for (const child of [...parent.children]) {
      if (child !== obj.element)
        child.classList.remove('next');
    }

    obj.element.classList.add('next');
  }

  setInitialObject(obj) {
    if (this.initialObject === obj) return;

    // Remove old object
    if (this.initialObject || !obj) {
      this.initialObject.element.classList.remove('focus');
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
