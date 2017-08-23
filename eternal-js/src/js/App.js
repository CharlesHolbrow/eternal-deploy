import { Objects, Connection }  from 'synk-js';
import AppEndpoint from './AppEndpoint.js';
import Note from './Note.js';

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

    this.conn = new Connection(url);
    this.endpoint = new AppEndpoint(this);
    this.objects = new Objects(); // app has a convenience ref to 'objects'

    // All messages from the server will be passed to the endpoint. Thanks to
    // the connection object, even if we disconnect and reconnect, incoming
    // messages will still be passed through to this.endpoint.
    this.endpoint.subscribe(this.conn.stream);

    // Set the default class for Characters
    this.objects.byKey.createBranch('n').class = Note;

    // Objects receive sync messages from the server.
    this.objects.subscribe(this.conn.stream);

    // When the connection closes, remove all chunks.
    //
    // We could replace 'close' with reconnect'
    this.conn.on('close', () => {
      console.log('connection close');
    });
  }
}
