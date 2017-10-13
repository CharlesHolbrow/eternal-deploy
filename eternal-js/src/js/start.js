// Libraries
import Emitter from 'eventemitter3';
import Kefir from 'kefir';
import { Flow as VF } from 'vexflow';
import help from 'midi-help';
import  * as d3 from 'd3-selection';

// Local
import App from './App.js';
import MIDI from './MIDI.js';

// Libs
window.Kefir = Kefir;
window.Emitter = Emitter;
window.VF = VF;
window.help = help;
window.d3 = d3;

// Aether Libs
window.App = App;
window.MIDI = MIDI;

window.onload = () => {
  const app = window.app = new App();

  // Setup default subscription key / focus
  let key = window.location.hash.slice(1);

  if (!key || key === '') key = 'main'; // default: eternal|main

  const subKey = `eternal|${key}`;

  app.synk.setSubscription([subKey]);
  app.synk.resolve();

  // default focus object is hard-coded
  key = `n:${subKey}`;
  app.initialKey = key;
  app.stack.push(key);

  const form = document.getElementById('add');

  form.onsubmit = function (event) {
    event.preventDefault();

    const elements = [...this.getElementsByTagName('input')];
    const msg = { parent: app.stack.keys[app.stack.keys.length - 1] || app.initialKey };

    // Get all the values, and send resulting JSON
    elements.forEach((el) => { msg[el.getAttribute('name')] = el.value; });
    app.synk.connection.send(msg);
    elements.forEach((el) => { if (el.type !== 'hidden') el.value = ''; });
  };
};

const preventContextMenu = () => {
  window.oncontextmenu = (event) => {
    event.preventDefault();
    event.stopPropagation();

    return false;
  };
};

preventContextMenu();
