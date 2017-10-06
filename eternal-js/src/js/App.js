import { Objects, Connection, Synk }  from 'synk-js';

import AppEndpoint from './AppEndpoint.js';
import Note from './Note.js';
import Voice from './Voice.js';

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

    this.synk = new Synk(url);
    this.endpoint = new AppEndpoint(this);

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

    this.pool = document.getElementById('pool');

    this.synk.objects.on('add', (obj) => {
      this.addObject(obj);
      this.updateLinks();
    });

    this.synk.objects.on('rem', (obj) => {
      if (obj.element && obj.element.parentElement) obj.element.parentElement.removeChild(obj.element);
      this.updateLinks();
    });

    this.synk.objects.on('mod', () => { this.updateLinks(); });

    this.synk.objects.on('click', (obj) => {
      if (obj.element && obj.key) this.focus(obj.key);
    });

    this.synk.objects.on('updatePosition', (obj) => {
      if (obj.element.classList.contains('link')
      || obj.element.classList.contains('focus')) {
        obj.clearRandomPosition();

        return;
      }
      obj.element.style.top = '70%';
      obj.element.style.left = `${Math.random() * 100}%`;

    });

    // default focus object is hard-coded
    this.focus('n:eternal|main');
  }

  /**
   * @param {string} objKey - the object to focus on.
   */
  focus(objKey) {
    this.focusKey = objKey;

    const obj = this.synk.objects.get(objKey);

    if (!obj) {
      console.warn('Tried to focus on object that does not exist:', objKey);
      this.updateLinks();

      return;
    }

    this.focusOnObject(obj);
    this.updateLinks();
  }

  /**
   * Add an object to the correct place.
   *
   * focus on the object if focusKey has been set.
   *
   * No-op of object has no .element
   *
   * @param {Object} object - object to add
   */
  addObject(object) {
    if (!object.element) return;

    this.pool.appendChild(object.element);

    if (object.key === this.focusKey) this.focusOnObject(object);
  }

  /**
   * Set focus exclusively on a single object. This should probably only be
   * called indirectly by .focus()
   *
   * @param {Object} object - object with element to focus on
   */
  focusOnObject(object) {
    if (!object.element) {
      console.error('cannot focus on an object with no .element');

      return;
    }

    if (this.focusObject && this.focusObject.element) {
      this.focusObject.element.classList.remove('focus');
      this.focusObject.updatePosition();
    }

    object.element.classList.add('focus');
    this.focusObject = object;
    this.focusObject.updatePosition();
  }

  /**
   * Set the 'link' 'l0' 'l1' 'l2' and html classes to the appropriate objects
   *
   * each of the l0 l1 l2 classes should be on zero or more elements
   * link should be on zero to three elements
   */
  updateLinks() {
    if (!this.focusObject || !this.focusObject.links) {
      for (const object of this.linkObjects) {
        if (object) {
          object.element.classList.remove('link', 'l0', 'l1', 'l2');
          object.updatePosition();
        }
      }

      this.linkObjects = [null, null, null];

      return;
    }

    if (!this.focusObject.links) return;

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
        currentObject.updatePosition();
        this.linkObjects[index] = null;
      }

      return;
    }

    // we are trying to find a new object
    if (currentObject) {
      currentObject.element.classList.remove('link', lClass);
      currentObject.updatePosition();
    }

    const newObject = this.synk.objects.get(objectKey);

    if (newObject) {
      this.linkObjects[index] = newObject;
      newObject.element.classList.add('link', lClass);
      newObject.updatePosition();
    }
  }
}
