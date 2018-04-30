// Libraries
import Emitter from 'eventemitter3';
import Kefir from 'kefir';

// Local
import App from './App.js';

// Libs
window.Kefir = Kefir;
window.Emitter = Emitter;

// Aether Libs
window.App = App;

window.onload = () => {
  const app = window.app = new App();
  let hash = window.location.hash;

  if (!hash || hash === '') hash = 'main';

  app.synk.setSubscription([`piano:${hash}`]);
  app.synk.resolve();
};

const preventContextMenu = () => {
  window.oncontextmenu = (event) => {
    event.preventDefault();
    event.stopPropagation();

    return false;
  };
};