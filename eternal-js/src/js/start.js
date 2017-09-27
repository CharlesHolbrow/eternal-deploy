// Libraries
import Emitter from 'eventemitter3';
import Kefir from 'kefir';
import { Flow as VF } from 'vexflow';

// Local
import App from './App.js';

// Libs
window.Kefir = Kefir;
window.Emitter = Emitter;
window.VF = VF;

// Aether Libs
window.App = App;

window.onload = () => {
  const app = window.app = new App();

  app.synk.setSubscription(['eternal|main']);
  app.synk.resolve();

  const form = document.getElementById('add');

  form.onsubmit = function (event) {
    event.preventDefault();

    const elements = [...this.getElementsByTagName('input')];
    const msg = {};

    // Get all the values, and send resulting JSON
    elements.forEach((el) => { msg[el.getAttribute('name')] = el.value; });
    app.synk.connection.send(msg);
    elements.forEach((el) => { el.value = ''; });
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
