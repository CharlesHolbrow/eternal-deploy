// Libraries
import Emitter from 'eventemitter3';
import Kefir from 'kefir';
import { Flow as VF } from 'vexflow';
import help from 'midi-help';

// Local
import App from './App.js';
import MIDI from './MIDI.js';

// Libs
window.Kefir = Kefir;
window.Emitter = Emitter;
window.VF = VF;
window.help = help;

// Aether Libs
window.App = App;
window.MIDI = MIDI;

window.onload = () => {
  const app = window.app = new App();

  // Setup default subscription key / focus
  let key = window.location.hash.slice(1);

  if (!key || key === '') key = 'main'; // default: eternal|main

  key = `eternal|${key}`;

  app.synk.setSubscription([key]);
  app.synk.resolve();

  // default focus object is hard-coded
  app.focus(`n:${key}`);

  const form = document.getElementById('add');

  form.onsubmit = function (event) {
    event.preventDefault();

    const elements = [...this.getElementsByTagName('input')];
    const msg = { parent: app.focusKey };

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
