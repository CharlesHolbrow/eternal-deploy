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
  const msg = {
    method: 'updateSubscription',
    add: ['eternal:main'],
    remove: [],
  };

  app.objects.updateKeys(msg);
  app.conn.send(msg);
};

window.oncontextmenu = (event) => {
  event.preventDefault();
  event.stopPropagation();

  return false;
};
