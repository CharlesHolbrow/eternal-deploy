// Libraries
import Emitter from 'eventemitter3';
import Kefir from 'kefir';
import { Flow as VF } from 'vexflow';

// Local
import App from './App.js';
import Transcriber from './Transcriber.js';

// Libs
window.Kefir = Kefir;
window.Emitter = Emitter;
window.VF = VF;

// Aether Libs
window.App = App;

window.onload = () => {
  const app = window.app = new App();

  app.synk.setSubscription(['eternal:main']);
  app.synk.resolve();
};

const preventContextMenu = () => {
  window.oncontextmenu = (event) => {
    event.preventDefault();
    event.stopPropagation();

    return false;
  };
};
