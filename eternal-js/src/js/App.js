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
      if (obj.element && obj.key) this.focus(obj.key);
    });

    this.synk.objects.on('updatePosition', (obj) => {
      this.updateObjectPosition(obj);
    });

    // default focus object is hard-coded
    this.focus('n:eternal|main');
  }

  /**
   * Check if a synk object needs to be changed, update it if so
   * @param {Object} object - the synk object to inspect
   */
  updateObject(object) {
    if (object.element.parentElement !== this.pool)
      this.pool.appendChild(object.element);

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

    if (this.focusObject && this.focusObject.element) {
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
          this.updateObjectPosition(object);
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
        this.updateObjectPosition(currentObject);
        this.linkObjects[index] = null;
      }

      return;
    }

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
    if (obj.element.classList.contains('link')
    || obj.element.classList.contains('focus')) {
      obj.element.style.top = null;
      obj.element.style.left = null;

      return;
    }
    obj.element.style.top = `${(Math.random() * 30) + 60}%`;
    obj.element.style.left = `${Math.random() * 100}%`;
  }
}
