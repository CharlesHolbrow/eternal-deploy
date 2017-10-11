import { Objects, Connection, Synk }  from 'synk-js';
import help from 'midi-help';

import AppEndpoint from './AppEndpoint.js';
import Note from './Note.js';
import Voice from './Voice.js';
import MIDI from './MIDI.js';
import ChordLibrary from './ChordLibrary.js';
import TimeKeeper from './TimeKeeper.js';

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

    this.focusKey = null;
    this.focusObject = null;
    this.linkObjects = [null, null, null];
    this.nextObject = null;

    this.midi = new MIDI('IAC');
    this.synk = new Synk(url);
    this.endpoint = new AppEndpoint(this);

    // Chord library makes it easy to send midi!
    this.chordLibrary = new ChordLibrary();
    this.chordLibrary.pushAnthem();
    // Give Transcriber's access to the chordLibrary
    this.synk.objects.chordLibrary = this.chordLibrary;

    // Time Keeper helps us keep accurate time in spite of the jittery js event loop
    this.timeKeeper = new TimeKeeper((i, beatTime, duration) => {
      this.midi.send(help.noteOn(39, 100, 9), beatTime);
      this.midi.send(help.noteOn(39, 0, 9), beatTime + 100);
      this.midi.send(help.noteOn(39, 50, 9), beatTime + (duration / 2));
      this.midi.send(help.noteOn(39, 0, 9), beatTime + (duration / 2) + 100);

      if (!(i % 2)) { // every other hacky
        if (this.nextObject && this.nextObject.element && this.nextObject.key) {
          this.focus(this.nextObject.key);
          if (this.nextObject.transcriber) {
            const chord = this.nextObject.chordLibrary.chords[this.nextObject.notes[0]];

            console.log('chord:', chord);

            for (const noteNum of chord.midiNotes) {
              this.midi.send(help.noteOn(noteNum, 100, 0), beatTime);
              this.midi.send(help.noteOn(noteNum, 0, 0), beatTime + (duration * 2) - 5); // beatTime + duration * 2 will cause problems if we speed up the tempo
            }
          }
          this.clearNext();
        }
      }

    });
    this.timeKeeper.bpm = 30;

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

    this.pool = document.createElement('div');
    this.pool.id = 'pool';
    this.linksDiv = document.getElementById('links');
    this.focusDiv = document.getElementById('focus');

    this.synk.objects.on('add', (obj) => {
      this.updateObject(obj);
      this.updateObjectPosition(obj);
      obj.element.classList.add('fade-in-fast');
    });

    this.synk.objects.on('rem', (obj) => {
      if (obj.element && obj.element.parentElement)
        obj.element.parentElement.removeChild(obj.element);

      if (obj === this.focusObject)
        this.focusOnObject(null);
    });

    this.synk.objects.on('mod', (obj) => {
      this.updateObject(obj);
    });

    this.synk.objects.on('click', (obj) => {
      // if (obj.element && obj.key) this.focus(obj.key);
      this.setNext(obj);
    });

    this.synk.objects.on('updatePosition', (obj) => {
      this.updateObjectPosition(obj);
    });

    // default focus object is hard-coded
    this.focus('n:eternal|main');

    setTimeout(() => {
      this.timeKeeper.start();
    }, 2000);
  }

  /**
   * Check if a synk object needs to be changed, update it if so
   * @param {Object} object - the synk object to inspect
   */
  updateObject(object) {
    // first check if the object is the focus object
    if (object.key === this.focusKey) {
      this.focusOnObject(object);

      return;
    }

    // check if the object is a link
    if (this.focusObject && this.focusObject.links) {
      const index = this.focusObject.links.indexOf(object.key);

      if (index !== -1) {
        this.setLink(object.key, index);

        return;
      }
    }

    if (object.element.parentElement !== this.pool)
      this.pool.appendChild(object.element);
  }

  /**
   * @param {string} objKey - the object to focus on.
   */
  focus(objKey) {
    this.focusKey = objKey;

    const obj = this.synk.objects.get(objKey);

    if (!obj)
      console.warn('Tried to focus on object that does not exist:', objKey);

    this.focusOnObject(obj);
  }

  /**
   * Set focus exclusively on a single object. This should probably only be
   * called indirectly by .focus() or .updateObject()
   *
   * @param {Object} object - object with element to focus on
   */
  focusOnObject(object) {
    if (object && !object.element) {
      console.error('cannot focus on an object with no .element');

      return;
    }

    // Do we need to remove the old object?
    if (this.focusObject && this.focusObject.element && object !== this.focusObject) {
      this.focusObject.element.classList.remove('focus');
      this.updateObjectPosition(this.focusObject);
    }

    if (!object) {
      this.setLink(null, 0);
      this.setLink(null, 1);
      this.setLink(null, 2);

      return;
    }

    object.element.classList.add('focus');
    this.focusObject = object;
    this.updateObjectPosition(this.focusObject);

    this.focusObject.links.forEach((key, index) => {
      this.setLink(key, index);
    });
  }

  /**
   * Set a linked object. Remove old link if any
   * 
   * @param {String} objectKey - the key of the object to set
   * @param {Number} index - 0, 1, or 2 - the index we will set the link to
   */
  setLink(objectKey, index) {
    const lClass = `l${index}`;
    const currentObject = this.linkObjects[index];

    if (!objectKey || objectKey === '') {
      if (currentObject) {
        currentObject.element.classList.remove('link', lClass);
        this.updateObjectPosition(currentObject);
        this.linkObjects[index] = null;
      }

      return;
    }

    // The link may already be correct. If so, no change is needed
    if (currentObject && currentObject.key === objectKey)
      return;

    // we are trying to find a new object
    if (currentObject) {
      currentObject.element.classList.remove('link', lClass);
      this.updateObjectPosition(currentObject);
    }

    const newObject = this.synk.objects.get(objectKey);

    if (newObject) {
      this.linkObjects[index] = newObject;
      newObject.element.classList.add('link', lClass);
      this.updateObjectPosition(newObject);
    }
  }

  /**
   * Ensure that the object's element is in a suitable place.
   * @param {Object} obj - synk object with .element
   */
  updateObjectPosition(obj) {
    if (obj.element.classList.contains('link')) {
      // call .appendChild only if necessary - prevent re-triggering css transitions
      if (obj.element.parentElement !== this.linksDiv)
        this.linksDiv.appendChild(obj.element);

      return;
    }

    if (obj.element.classList.contains('focus')) {
      if (obj.element.parentElement !== this.focusDiv)
        this.focusDiv.appendChild(obj.element);

      return;
    }

    this.pool.appendChild(obj.element);
  }

  setNext(obj) {
    const others = [...document.getElementsByClassName('next')];

    for (const element of others)
      if (element !== obj.element) element.classList.remove('next');

    obj.element.classList.add('next');
    this.nextObject = obj;
  }

  clearNext() {
    const others = [...document.getElementsByClassName('next')];

    for (const element of others)
      element.classList.remove('next');

    this.nextObject = null;
  }
}
