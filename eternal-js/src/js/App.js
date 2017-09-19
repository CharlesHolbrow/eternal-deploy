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

    this.synk = new Synk(url);
    this.endpoint = new AppEndpoint(this);

    // All messages from the server will be passed to the endpoint. Thanks to
    // the connection object, even if we disconnect and reconnect, incoming
    // messages will still be passed through to this.endpoint.
    this.endpoint.subscribe(this.synk.connection.stream);

    // Set default classes
    // this.synk.objects.byKey.createBranch('n').class = Note;
    this.synk.objects.byKey.createBranch('v').class = Voice;

    // We could replace 'close' with reconnect'
    this.synk.connection.on('close', () => {
      console.log('connection close bySKey.branches:', Object.keys(this.synk.objects.bySKey.branches));
    });
    this.synk.connection.on('open', () => {
      console.log('connection open bySKey.branches: ', Object.keys(this.synk.objects.bySKey.branches));
    });
  }
}
