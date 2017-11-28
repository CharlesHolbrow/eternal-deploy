webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(1));
	else if(typeof define === 'function' && define.amd)
		define([, ], factory);
	else if(typeof exports === 'object')
		exports["synk"] = factory(require("eventemitter3"), require("kefir"));
	else
		root["synk"] = factory(root[undefined], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = __webpack_require__(1);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _kefir = __webpack_require__(2);

var _kefir2 = _interopRequireDefault(_kefir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// How long do we wait before retrying a connection
var TIMEOUT = 500;

/**
* Wrap a websocket connection to the server
*/

var Connection = function (_Emitter) {
  _inherits(Connection, _Emitter);

  /**
  * Create a new instance of a connection.
  *
  * Events
  * - 'connect' - fired the first time a connection opens successfullly
  * - 'reconnect' - fired when subsequenct connections open
  * - 'open' - fired when any connection opens
  * - 'close' - fired when any connection closes
  * - 'sendError' (message) - we tried to send, but the connection is closed
  *
  * @arg {string} url - websocket url to connect to
  */
  function Connection(url) {
    _classCallCheck(this, Connection);

    /**
    * @member {url} string - the url we connect to on the next connection
    */
    var _this = _possibleConstructorReturn(this, (Connection.__proto__ || Object.getPrototypeOf(Connection)).call(this));

    _this.url = url;

    /**
    * @member {Kefir.stream} - stream of messages received from the server
    * @readonly
    */
    _this.stream = _kefir2.default.fromEvents(_this, 'message');

    /**
    * @member {WebSocket} - The current socket object
    * @readonly
    */
    _this.sock = null;

    /**
     * @member {Kefir.stream} - event each time the connection is opened
     * @readonly
     */
    _this.openStream = _kefir2.default.fromEvents(_this, 'open');

    _this._connectionCount = 0;
    _this._log = [];
    _this._messageQue = [];
    _this._connect();
    return _this;
  }

  /**
  * Connect and stay connected. This is called once by the constructor. It
  * should not be called again manually.
  */


  _createClass(Connection, [{
    key: '_connect',
    value: function _connect() {
      var _this2 = this;

      this.log('connecting...');
      this.sock = new WebSocket(this.url);

      var reconnect = function reconnect() {
        _this2.log('Waiting to reconnect...');
        setTimeout(function () {
          _this2._connect();
        }, TIMEOUT);
      };

      this.sock.onerror = function (error) {
        _this2.log(['socket error', error]);
      };

      this.sock.onopen = function () {
        _this2.log('connection opened');
        _this2.sock.onmessage = function (m) {
          _this2.emit('message', JSON.parse(m.data));
        };

        _this2._connectionCount += 1;
        if (_this2._connectionCount === 1) {
          // If this is our first time connecting, send qued messages
          while (_this2._messageQue.length) {
            _this2.send(_this2._messageQue[0]);
            _this2._messageQue.shift();
          }
          _this2.emit('connect');
        } else _this2.emit('reconnect');

        _this2.emit('open');
      };

      // This fires if even if the connection was never opened. For example, if
      // the server is down when we first connect, onclose will still fire.
      this.sock.onclose = function () {
        _this2.log('close');
        _this2.emit('close');
        reconnect();
      };
    }

    /**
    * @arg {anything} value - Add any value to this connection's internal log
    */

  }, {
    key: 'log',
    value: function log(value) {
      this._log.push(value);
      this.emit('log', value);
      if (this._log.length > 200) this._log.shift();
    }

    /**
    * Get the Ready State Constant of the current socket. One of the following ints:
    * 0 - CONNECTING The connection is not yet open.
    * 1 - OPEN The connection is open and ready to communicate.
    * 2 - CLOSING The connection is in the process of closing.
    * 3 - CLOSED The connection is closed or couldn't be opened.
    *
    * @returns {number} - Ready State Constant
    */

  }, {
    key: 'send',


    /**
    * Send a message to the server. If the connection is not yet open, que the
    * message to be sent once the connection does open.
    *
    * @arg {Object|String} message - JSON object or string to send to the server.
    * @returns {bool|null} - true if the message was sent successfully. null if the
    *          message was qued to be sent later. False if send failed.
    */
    value: function send(message) {
      if (typeof message !== 'string') message = JSON.stringify(message);

      if (this.state === 1) {
        // We are connected
        this.sock.send(message);

        return true;
      }

      // we are not connected
      if (this._connectionCount === 0) {
        // We have never been connected
        this._messageQue.push(message);
        this.log(['message qued', message]);

        return null;
      }

      // We tried to send, but the connection was broken
      this.log({ reason: 'send failed because the connection was broken:', msg: message });
      this.log(message);
      this.emit('sendError', message);

      return false;
    }
  }, {
    key: 'state',
    get: function get() {
      if (!this.sock) return 3;

      return this.sock.readyState;
    }
  }]);

  return Connection;
}(_eventemitter2.default);

exports.default = Connection;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = __webpack_require__(1);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _kefir = __webpack_require__(2);

var _kefir2 = _interopRequireDefault(_kefir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* Base for classes that respond to a stream.
*
* Extending Endpoint give us the ability make remote proceedure calls on class
* instances by sending msg objects to a Kefir.stream. Extension classes define
* methods that can be called by sending messages to the stream.
*
* An endpoint instance may only listen to one class at a time
*/
var Endpoint = function (_Emitter) {
  _inherits(Endpoint, _Emitter);

  /**
  * Create an Endpoint. Usually this will be called via super()
  */
  function Endpoint() {
    _classCallCheck(this, Endpoint);

    var _this = _possibleConstructorReturn(this, (Endpoint.__proto__ || Object.getPrototypeOf(Endpoint)).call(this));

    _this._subsciption = null;
    _this._inputStream = null;
    _this._unhandledStream = null;
    _this.unhandled = new _kefir2.default.Pool();
    return _this;
  }

  /**
  * Listen for incoming rpc calls on a stream. A class instance may only listen
  * to one stream at a time. To unsubscribe from the current stream call
  * subscribe() with no argument
  *
  * @arg {[Kefir.stream]} stream - the stream to subscribe to. If we are
  *      subscribed to another stream, unsubscribe from it. Messages on the
  *      stream are expected to include a {method: 'methodName'} parameter. The
  *      methodName should match a method on the class. It will be called with
  *      the entire message as the only argument.
  */


  _createClass(Endpoint, [{
    key: 'subscribe',
    value: function subscribe(stream) {
      var _this2 = this;

      if (this._subsciption) this._subsciption.unsubscribe();

      if (this._unhandledStream) this.output.unplug(this._unhandledStream);

      stream = stream || null;
      this._inputStream = stream;

      if (!stream) return;

      // We now create two derivative streams. The first handles messages if this
      // class has an appropriate handler given the message's '.method' parameter.
      // We observe this stream, and leave a reference to the subscription so we
      // can unsubscribe if we are passed different stream to monitor.
      this._subsciption = stream.filter(function (msg) {
        return typeof _this2[msg.method] === 'function';
      }).observe({
        value: function value(msg) {
          _this2[msg.method](msg);
        },
        error: function error(msg) {
          console.error(msg);
        },
        end: function end(msg) {
          console.warn(msg);
        }
      });

      // The second derivative stream passes unhandled messages to the endpoint's
      // .output stream. Keep a reference to the unhandled stream so we can unplug
      // it from the output pool when we subscribe to a new stream.
      this._unhandledStream = stream.filter(function (msg) {
        return typeof _this2[msg.method] !== 'function';
      });
      this.unhandled.plug(this._unhandledStream);
    }

    /**
    * Get the stream of our current subscription.
    * @readonly
    * @returns {Kefir.stream} - current subscription. null if not subscribed.
    */

  }, {
    key: 'stream',
    get: function get() {
      return this._inputStream;
    }
  }]);

  return Endpoint;
}(_eventemitter2.default);

exports.default = Endpoint;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Default Leaf object. If an object is created on 
 */
var Leaf = function () {
  /**
   * @param {string} key - The objects key
   * @param {object} state - the objects initial state
   * @param {synk-js.Objects} synkObjects - the parent synk-js Objects container
   */
  function Leaf(key, state, synkObjects) {
    _classCallCheck(this, Leaf);

    this.state = {};
    this.synkObjects = synkObjects;
    this.update(state);
  }
  /**
   * Update is called when the server changes the object
   * @param {object} diff - changes to be applied to the object
   */


  _createClass(Leaf, [{
    key: 'update',
    value: function update(diff) {
      Object.assign(this.state, diff);
    }

    /**
     * Called when the object will be destroyed or removes from the current
     * subscription. Your implementation of this function must remove references
     * to the object from your project so that the object will be garbage
     * collected correctly.
     */

  }, {
    key: 'teardown',
    value: function teardown() {
      console.log('teardown:', this);
    }
  }]);

  return Leaf;
}();

/**
 * Branch is part of a tree-like Data structure. Each branch contains any number
 * of children. Each child is either a Branch or a Leaf. Each child is
 * identified by a name string. In this implementation, Leaves are any
 * javascript Object that satisfy the Leaf interface above.
 *
 * Each Branch has a special property called 'class'. This is the recommended
 * class for Leaf objects. Leaf objects may or may not be created with the
 * recommended class. When we create new Branches with `b.create(...)`, child
 * branches inherit the parent's 'class' property.
 */


var Branch = function () {
  /**
   * @param {Class} [cls] - Optional class. Default is Object.
   */
  function Branch(cls) {
    _classCallCheck(this, Branch);

    this.branches = {};
    this.leaves = {};
    this._class = cls || Leaf;
  }

  /**
   * Retrieve the recommended class for child leaves attached to this object.
   */


  _createClass(Branch, [{
    key: 'createBranch',


    /**
     * Returns the Branch or identified by a name. The example below returns
     * the child identified by the name 'alice'. If 'alice' does not exist on the
     * Branch, a new child Branch called 'alice' will be created.
     *
     * `b.get('alice') \\ returns the branch or child named alice`
     *
     * A longer address can be specified in the format below. This will create new
     * Branches and sub-Branches if needed:
     *
     * `b.get('alice', 'ice cream' 'other')`
     *
     * In any format, the last name specified may be the name of an existing Leaf.
     * All preceeding names must be Branch names.
     *
     * @param {String} n1 - the name we are trying to get.
     * @param {...String} n2 - remaining sub branch names.
     * @returns {Branch} - the Branch or Leaf we requested.
     */
    value: function createBranch(n1) {
      var _branches$n;

      for (var _len = arguments.length, n2 = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        n2[_key - 1] = arguments[_key];
      }

      if (n1 === undefined) return this;

      if (!this.branches.hasOwnProperty(n1)) {
        // We now know that the value at this[n1] is not our 'own' property.
        // It is either not present, or n1 is not a valid name.
        if (this.branches[n1] === undefined) this.branches[n1] = new Branch(this.class);else throw new Error('Illegal branch name: ' + n1);
      }

      // We know n1 exists, and is a valid name.
      if (!n2 || !n2.length) return this.branches[n1];

      return (_branches$n = this.branches[n1]).createBranch.apply(_branches$n, n2);
    }

    /**
     * Recursively step through the tree. If any Branch is found that has no
     * leaves, remove that branch.
     * @returns {Number} - the number of objects that were removed.
     */

  }, {
    key: 'trim',
    value: function trim() {
      var count = 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this.branches)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var name = _step.value;

          count = count + this.branches[name].trim();
          if (!Object.keys(this.branches[name].leaves).length) {
            delete this.branches[name];
            count++;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return count;
    }

    /**
     * Recursively iterate over this branch, and call a function on each leaf. The
     * function will be called in the format:
     *
     * `f(leaf, ...args)`
     *
     * @param {function} f - predicate function will be called with each leaf
     * @param {...any} args - additional arguments to the predicate function
     */

  }, {
    key: 'forEach',
    value: function forEach(f) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(this.branches)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _branches$name;

          var name = _step2.value;

          (_branches$name = this.branches[name]).forEach.apply(_branches$name, [f].concat(args));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(this.leaves)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _name = _step3.value;

          f.apply(undefined, [this.leaves[_name]].concat(args));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    /**
     * Retrieve a branch by its address. Example:
     *
     * `b.get('alice', 'bob', 'cat'); // Get this.alice.bob.cat`
     *
     * @param {...String} all - the address of Branch to get.
     * @returns {Branch|Object|null} - A Branch or Leaf. Null if not found
     */

  }, {
    key: 'getBranch',
    value: function getBranch() {
      for (var _len3 = arguments.length, all = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        all[_key3] = arguments[_key3];
      }

      if (!all || all.length === 0) return this;else if (all.length === 1) {
        if (this.branches.hasOwnProperty(all[0])) return this.branches[all[0]];

        return null;
      }

      var first = this.branches[all[0]];

      if (first instanceof Branch) return first.getBranch.apply(first, _toConsumableArray(all.slice(1)));

      return null;
    }

    /**
     * Remove a child Branch from this branch. If we specify a longer address,
     * only the tip of the address specified will be removed. The example below
     * removes 'cat' from 'bob', but does not remove 'bob' from 'alice'.
     *
     * `b.remove('alice', 'bob', 'cat')`
     *
     * @param {...String} all - the address of the Branch or Leaf we want to
     *        remove. The parent of this object must be a Branch.
     * @returns {Branch|null} - The Branch that was removed. Null if not found.
     */

  }, {
    key: 'removeBranch',
    value: function removeBranch() {
      var parent = void 0;

      for (var _len4 = arguments.length, all = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        all[_key4] = arguments[_key4];
      }

      if (all.length === 1) parent = this;else parent = this.getBranch.apply(this, _toConsumableArray(all.slice(0, -1)));

      if (!parent) return null;

      var name = all[all.length - 1];

      if (!parent.branches.hasOwnProperty(name)) return null;

      var obj = parent.branches[name];

      delete parent.branches[name];

      return obj;
    }

    /**
     * Non recursive leaf retrevial. Returns null if the branch has no children
     * with the given name, OR if the name points to another branch
     * @param {String|null} name - the name of the leaf we are looking for;
     * @returns {Object|null} - null if this does not have a branch
     */

  }, {
    key: 'getLeaf',
    value: function getLeaf(name) {
      if (this.leaves.hasOwnProperty(name)) return this.leaves[name];

      return null;
    }

    /**
     * Set a Leaf in this branch.
     * @param {String} name - Name of the object we are interested in
     * @param {Object} obj - Object we are setting.
     */

  }, {
    key: 'setLeaf',
    value: function setLeaf(name, obj) {
      if (obj === null || obj === undefined) this.removeLeaf(name);else this.leaves[name] = obj;
    }

    /**
     * @param {String} name - key name of the leaf to remove
     */

  }, {
    key: 'removeLeaf',
    value: function removeLeaf(name) {
      delete this.leaves[name];
    }
  }, {
    key: 'class',
    get: function get() {
      return this._class;
    }

    /**
     * Update the Branches class. Throw if v is not a function.
     * @param {function} v - the constructable function
     */
    ,
    set: function set(v) {
      if (typeof v !== 'function') throw new Error('Class must be a function');
      this._class = v;
    }
  }]);

  return Branch;
}();

exports.default = Branch;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Endpoint2 = __webpack_require__(3);

var _Endpoint3 = _interopRequireDefault(_Endpoint2);

var _Branch = __webpack_require__(4);

var _Branch2 = _interopRequireDefault(_Branch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Store a collection of objects that will be synchronized with the server.
 * The lifecycle of an object is
 * 1. receive addObj message from server
 *     - create `new constructor(key, state, this)`
 *     - add to objects .byKey an .bySKey branches
 *     - emit('add', obj, addObjMessage)
 * 2. receive modObj message from server (0 or more times)
 *   If the object is not moving hunks
 *     - call objects .update(state) method
 *     - emit('mod', obj, msg)
 *   Or if the object is moving to a hunk we are subscribed to
 *     - move the object to a different subscription key
 *     - call objects .update(state) method
 *     - emit('mod', obj, msg)
 *   Or if the object is moving to a area we are not subscribed to
 *     - remove the object
 *     - emit('rem', obj, msg)
 *     - obj.teardown() method
 * 3. receive remObj message from server OR unsubscribe from hunk
 *    - remove object
 *    - emit('rem', obj, msg) // msg will be null if we unsubscribed
 *    - obj.teardown()
 *
 * NOTE:
 * - When adding an object first we create it, then we emit it
 * - When removing an object first we emit it, then we .teardown()
 *
 *  @event add
 *  @event mod
 *  @event rem
 */
var Objects = function (_Endpoint) {
  _inherits(Objects, _Endpoint);

  /**
   * @param {App} app - the aether App this object is built on
   */
  function Objects() {
    _classCallCheck(this, Objects);

    var _this = _possibleConstructorReturn(this, (Objects.__proto__ || Object.getPrototypeOf(Objects)).call(this));

    _this.bySKey = new _Branch2.default();
    _this.byKey = new _Branch2.default();
    _this.byId = {};

    // queuedMessages is for storing messages that target an object that we have
    // not yet received. Messages that arrive out of order after addObj has been
    // received should be stored on the object itself, so they can be garbage
    // collected correctly.
    // As of November 5, 2017, unordered modObj messages that arrive after addObj
    // are not supported. However, support may be added in the future.
    _this.queuedMessages = {};
    return _this;
  }

  /**
   * Update the set of keys that we are subscribed to.
   *
   * Note that this is usually called from client via the synk.resolve() method.
   * We should be able to call this from the server, but this behavior is
   * untested. I have not thought through the logic of how this could be called
   * from the server.
   *
   * @param {Object} updateSubscriptionMsg - Object containing subscription
   *        change. The object must have two arrays of strings: .add and .remove
   */


  _createClass(Objects, [{
    key: 'updateKeys',
    value: function updateKeys(updateSubscriptionMsg) {
      var _this2 = this;

      var msg = updateSubscriptionMsg;

      if (!Array.isArray(msg.remove) || !Array.isArray(msg.add)) console.error('Objects.updateKeys received invalid message:', msg);

      // When we unsubscribe from a chunk, we need to remove and teardown all the
      // objects in that chunk.
      msg.remove.forEach(function (p) {
        // Remove the enture chunk
        _this2.bySKey.removeBranch(p).forEach(function (leaf) {
          var _byKey;

          // Remove each object from its collection

          var parts = void 0;
          var id = void 0;

          if (leaf.id && leaf.t) {
            // BUG(charles): we could simplify once we remove keys altogether
            parts = leaf.t.split(':');
            id = leaf.id;
          } else {
            parts = leaf.key.split(':');
            id = parts.pop();
          }

          var collection = (_byKey = _this2.byKey).getBranch.apply(_byKey, _toConsumableArray(parts)); // The group of objects in that type

          // If the collection doesn't exist, we have bug
          if (collection) collection.removeLeaf(id);else console.error('Unsubscribed from chunk, but collection not found: ' + parts.join(':'));

          _this2.emit('rem', leaf, null);
          leaf.teardown();
        });
      });

      msg.add.forEach(function (p) {
        _this2.bySKey.createBranch(p);
      });
    }

    /**
     * Create a new object. Typically called from the server.
     *
     * Note that when we add an object, the .id .key and .v properties are
     * automatically set. The Objects class depends on these being available
     * when removing the object, so they should not be changed by client code.
     *
     * @param {Object} msg - contains .key, .state, .sKey. The presence of .psKey
     *        indicates this object moved here from another chunk.
     */

  }, {
    key: 'addObj',
    value: function addObj(msg) {
      var _byKey2;

      if (typeof msg.sKey !== 'string' || typeof msg.key !== 'string') {
        console.error('Received invalid addObj message', msg);

        return;
      }

      var parts = msg.key.split(':');
      var id = parts.pop();
      var chunk = this.bySKey.getBranch(msg.sKey);
      var collection = (_byKey2 = this.byKey).createBranch.apply(_byKey2, _toConsumableArray(parts));

      // Check if we are subscribed
      if (!chunk) {
        console.warn('Received "addObj" message from the server, while not ' + 'subscribed to the object\'s subscription key');

        return;
      }

      // Check if we already have this object
      var obj = collection.getLeaf(id);

      if (obj) {
        console.error('The server sent us an addObj message, but we alredy had ' + ('the object locally: ' + msg.key));
        // TODO: Should we remove and teardown c intead of throwing an error??
        throw new Error('TODO: remove and teardown c');
      }

      obj = new collection.class(msg.key, msg.state, this);
      obj.id = id;
      obj.key = msg.key;
      obj.v = msg.v;

      chunk.setLeaf(msg.key, obj);
      collection.setLeaf(id, obj);

      this.emit('add', obj, msg);
      this.applyQueuedMessages(obj);
    }

    /**
     * Mutate a local object. Designed to be called from the server.
     * @param {Object} msg - data from server. Includes .diff and .sKey. May also
     *        include .nsKey (if the object is moving between chunks.)
     */

  }, {
    key: 'modObj',
    value: function modObj(msg) {
      var _byKey3;

      if (typeof msg.sKey !== 'string' || typeof msg.key !== 'string') {
        console.error('Received invalid modObj message', msg);

        return;
      }

      var parts = msg.key.split(':');
      var id = parts.pop();
      var chunk = this.bySKey.getBranch(msg.sKey); // current chunk
      var collection = (_byKey3 = this.byKey).createBranch.apply(_byKey3, _toConsumableArray(parts));
      var obj = collection.getLeaf(id);

      // Do some sanity checks...

      if (!obj) {
        if (chunk) this.queueMessage(msg);else {
          // this is just a warning, because it will just happen occasionally.
          console.warn('We received a modObj request. We could not find the ' + ('object locally: ' + msg.key + '. And the message targets an SKey we ') + 'are not subscribed to');
        }

        return;
      }

      if (chunk.getLeaf(msg.key) !== obj) {
        console.error('Received modObj. The object was found on the ' + parts + ' ' + ('collection, but not the ' + msg.sKey + ' chunk.'));
        // Keep trying to move the object...
      }

      if (typeof msg.v !== 'number') {
        console.error('Received modObj message with a bad version: ' + msg.v);

        return;
      }

      // First check if the message is arriving at the right time. If our message
      // is obsolete, discard it.
      if (msg.v <= obj.v) {
        console.warn('Discarded obsolete message:', msg);

        return;
      }

      if (msg.v > obj.v + 1) {
        console.error('DANGER: Out of order messages are not supported after receieveing addObj', msg);

        return;
      }

      // We are definitely going to modify the object. We know that the msg's
      // version is exactly one more than the object's version.
      obj.v++;

      // At this point, There are 3 possiblities
      // - we are moving within a chunk. Easy -- just update
      // - we are moving to a new chunk. Remove this one chunk, add to another
      // - we are moving to a chunk, and are not subscribed to that chunk

      // Are we modifying within a chunk?
      if (!msg.nsKey) {
        obj.update(msg.diff);
        this.emit('mod', obj, msg);

        return;
      }

      // The object must be moved out of the current chunk. If we are subscribed
      // to the new chunk, move the object there. If we are not subscribed,
      // remove and teardown() the object.
      chunk.removeLeaf(msg.key);

      var newChunk = this.bySKey.getBranch(msg.nsKey);

      if (newChunk) {
        newChunk.setLeaf(msg.key, obj);
        obj.update(msg.diff);
        this.emit('mod', obj, msg);
      } else {
        collection.removeLeaf(id);
        this.emit('rem', obj, msg);
        obj.teardown();
      }

      return;
    }

    /**
     * Remove and teardown an object.
     * @param {object} msg - has .key and .sKey strings
     */

  }, {
    key: 'remObj',
    value: function remObj(msg) {
      var _byKey4;

      if (typeof msg.sKey !== 'string' || typeof msg.key !== 'string') {
        console.error('Received invalid remObj message', msg);

        return;
      }

      var parts = msg.key.split(':');
      var id = parts.pop();
      var chunk = this.bySKey.getBranch(msg.sKey); // current chunk
      var collection = (_byKey4 = this.byKey).getBranch.apply(_byKey4, _toConsumableArray(parts));
      var obj = collection.getLeaf(id);

      if (chunk) chunk.removeLeaf(msg.key);else console.error('Tried to remove ' + msg.sKey + ', but could not find objects at ' + parts);

      if (collection) collection.removeLeaf(id);else console.error('Tried to remove ' + msg.key + ' but could not find ' + parts + ' in .byKey');

      if (obj) {
        this.emit('rem', obj, msg);
        obj.teardown();
      } else console.error('DANGER: Tried to remove ' + msg.key + ', but could not find object');
    }

    /**
     * Get an object from this synk collection. This may return null if the object
     * was not found.
     *
     * @param {string} key - the full key of the object we want 'type:key:id'
     * @returns {Object|null} - the object if it exists, or null
     */

  }, {
    key: 'get',
    value: function get(key) {
      var _byKey5;

      var obj = this.byId[key];

      if (obj) return obj;

      var parts = key.split(':');
      var id = parts.pop();
      var collection = (_byKey5 = this.byKey).getBranch.apply(_byKey5, _toConsumableArray(parts));

      if (!collection) return null;

      return collection.getLeaf(id) || null;
    }

    /**
     * Synk Objects does not assume that messages will arrive in the correct
     * order. When we recieve a message, it is possible that we have not yet
     * received the ssociated addObj message. It is also possible that we do
     *
     * Append a message to the queue for a given object. Whenever an object is
     * added OR a modification is applied. We will check to see if there are
     * queued messages that should be replayed.
     *
     * This function should probably never be called except by methods of the
     * Objects class.
     *
     * @param {Object} msg - mod message. In the future we may also support
     *        rem messages.
     */

  }, {
    key: 'queueMessage',
    value: function queueMessage(msg) {
      var queue = void 0;
      var id = msg.key || msg.id;

      if (this.queuedMessages.hasOwnProperty(id)) queue = this.queuedMessages[id];else {
        queue = [];
        this.queuedMessages[id] = queue;
      }

      queue.push(msg);
    }

    /**
     * Apply all possible messages from the queue.
     *
     * If any messages are found to be obsolete before reading a applicable
     * message, discard those messages.
     *
     * Once any messages are applied, IF the queue is empty delete it's list from
     * this.queuedMessages
     *
     * @param {Object} obj - this is a synk object with update(state) and
     *        teardown() methods.
     */

  }, {
    key: 'applyQueuedMessages',
    value: function applyQueuedMessages(obj) {
      var id = obj.key || obj.id;

      if (!this.queuedMessages.hasOwnProperty(id)) return;
      var queue = this.queuedMessages[id].filter(function (m) {
        return m.v > obj.v;
      }).sort(function (a, b) {
        return a.v - b.v;
      });

      this.queuedMessages[id] = queue;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = queue.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              i = _step$value[0],
              msg = _step$value[1];

          var target = obj.v + 1;

          if (msg.v === target) {
            // This is actually pretty sneaky. Normally we cannot modify an array
            // while iterating over it. However, in this case we only remove the
            // FIRST match, and then break out of the loop -- so it should be okay.
            if (msg.method === 'mod') this.mod(msg);else this.modObj(msg);
          } else if (msg.v >= target) {
            queue.splice(0, i); // leave only unapplied messages.
            console.error('DANGER: failed to replay all modObj messages:', queue);
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      delete this.queuedMessages[id];
    }

    //////////////////////////////////////////////////////////////////////////////
    //
    // New style add, rem, mod methods
    //
    //////////////////////////////////////////////////////////////////////////////

    /**
     * Create a new object. Typically called from the server.
     *
     * Note that when we add an object, the .id .t and .v properties are
     * automatically set. The Objects class depends on these being available
     * when removing the object, so they should not be changed by client code.
     *
     * @param {Object} msg - contains .v .id, .state, .sKey. The presence of
     *        .psKey indicates this object moved here from another chunk.
     */

  }, {
    key: 'add',
    value: function add(msg) {
      var _byKey6;

      if (typeof msg.sKey !== 'string' || typeof msg.id !== 'string') {
        console.error('Received invalid add message', msg);

        return;
      }

      var chunk = this.bySKey.getBranch(msg.sKey);
      var collection = (_byKey6 = this.byKey).createBranch.apply(_byKey6, _toConsumableArray(msg.t.split(':')));

      // Check if we are subscribed
      if (!chunk) {
        console.warn('Received "add" message from the server, while not ' + 'subscribed to the object\'s subscription key');

        return;
      }

      // Check if we already have this object
      var obj = collection.getLeaf(msg.id);

      if (obj) {
        console.error('The server sent us an add message, but we alredy had ' + ('the object locally: ' + msg.id));
        // TODO: Should we remove and teardown c intead of throwing an error??
        throw new Error('TODO: remove and teardown c');
      }

      obj = new collection.class(msg.id, msg.state, this);
      obj.id = msg.id;
      obj.t = msg.t;
      obj.v = msg.v;

      chunk.setLeaf(msg.id, obj);
      collection.setLeaf(msg.id, obj);
      this.byId[obj.id] = obj;

      this.emit('add', obj, msg);
      this.applyQueuedMessages(obj);
    }

    /**
     * Remove an object
     * @param {Object} msg - obj containing .id .t and .sKey
     */

  }, {
    key: 'rem',
    value: function rem(msg) {
      var _byKey7;

      if (typeof msg.sKey !== 'string' || typeof msg.id !== 'string') {
        console.error('Received invalid remObj message', msg);

        return;
      }

      var parts = msg.t.split(':');
      var id = msg.id;
      var chunk = this.bySKey.getBranch(msg.sKey); // current chunk
      var collection = (_byKey7 = this.byKey).getBranch.apply(_byKey7, _toConsumableArray(parts));
      var obj = collection.getLeaf(id);

      if (chunk) chunk.removeLeaf(msg.id);else console.error('Tried to remove ' + msg.sKey + ', but could not find objects at ' + parts);

      if (collection) collection.removeLeaf(id);else console.error('Tried to remove ' + id + ' but could not find ' + parts + ' in .byKey');

      delete this.byId[id];

      if (obj) {
        this.emit('rem', obj, msg);
        obj.teardown();
      } else console.error('DANGER: Tried to remove ' + msg.id + ', but could not find object');
    }
  }, {
    key: 'mod',
    value: function mod(msg) {
      var _byKey8;

      if (typeof msg.sKey !== 'string' || typeof msg.id !== 'string') {
        console.error('Received invalid mod message', msg);

        return;
      }

      var id = msg.id;
      var obj = this.get(id);
      var chunk = this.bySKey.getBranch(msg.sKey); // current chunk

      // Do some sanity checks...

      if (!obj) {
        if (chunk) this.queueMessage(msg);else {
          // this is just a warning, because it will just happen occasionally.
          console.warn('We received a modObj request. We could not find the ' + ('object locally: ' + id + '. And the message targets an SKey we ') + 'are not subscribed to');
        }

        return;
      }

      var parts = obj.t.split(':');
      var collection = (_byKey8 = this.byKey).createBranch.apply(_byKey8, _toConsumableArray(parts));

      if (chunk.getLeaf(msg.id) !== obj) {
        console.error('Received modObj. The object was found on the ' + parts + ' ' + ('collection, but not the ' + msg.sKey + ' chunk.'));
        // Keep trying to move the object...
      }

      if (typeof msg.v !== 'number') {
        console.error('Received modObj message with a bad version: ' + msg.v);

        return;
      }

      // First check if the message is arriving at the right time. If our message
      // is obsolete, discard it.
      if (msg.v <= obj.v) {
        console.warn('Discarded obsolete message:', msg);

        return;
      }

      if (msg.v > obj.v + 1) {
        console.error('DANGER: Out of order messages are not supported after receieveing addObj', msg);

        return;
      }

      // We are definitely going to modify the object. We know that the msg's
      // version is exactly one more than the object's version.
      obj.v++;

      // At this point, There are 3 possiblities
      // - we are moving within a chunk. Easy -- just update
      // - we are moving to a new chunk. Remove this one chunk, add to another
      // - we are moving to a chunk, and are not subscribed to that chunk

      // Are we modifying within a chunk?
      if (!msg.nsKey) {
        obj.update(msg.diff);
        this.emit('mod', obj, msg);

        return;
      }

      // The object must be moved out of the current chunk. If we are subscribed
      // to the new chunk, move the object there. If we are not subscribed,
      // remove and teardown() the object.
      chunk.removeLeaf(id);

      var newChunk = this.bySKey.getBranch(msg.nsKey);

      if (newChunk) {
        newChunk.setLeaf(id, obj);
        obj.update(msg.diff);
        this.emit('mod', obj, msg);
      } else {
        collection.removeLeaf(id);
        this.emit('rem', obj, msg);
        obj.teardown();
      }

      return;
    }
  }]);

  return Objects;
}(_Endpoint3.default);

exports.default = Objects;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Synk = exports.Objects = exports.Branch = exports.Endpoint = exports.Connection = undefined;

var _Connection = __webpack_require__(0);

var _Connection2 = _interopRequireDefault(_Connection);

var _Endpoint = __webpack_require__(3);

var _Endpoint2 = _interopRequireDefault(_Endpoint);

var _Branch = __webpack_require__(4);

var _Branch2 = _interopRequireDefault(_Branch);

var _Objects = __webpack_require__(5);

var _Objects2 = _interopRequireDefault(_Objects);

var _Synk = __webpack_require__(7);

var _Synk2 = _interopRequireDefault(_Synk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Connection = _Connection2.default;
exports.Endpoint = _Endpoint2.default;
exports.Branch = _Branch2.default;
exports.Objects = _Objects2.default;
exports.Synk = _Synk2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Objects = __webpack_require__(5);

var _Objects2 = _interopRequireDefault(_Objects);

var _Connection = __webpack_require__(0);

var _Connection2 = _interopRequireDefault(_Connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Synk represents a connection to the synk server. Its responsibilities:
 * - create a connection to the server
 * - track a set of subscriptions keys
 * - store objects retrieved from the server
 *
 * The objects stored in this.objects will stay up-to-date with the copies on
 * the server.
 */
var Synk = function () {
  /**
   * @arg {string} url - the websocket url to connect to
   */
  function Synk(url) {
    var _this = this;

    _classCallCheck(this, Synk);

    this.objects = new _Objects2.default();
    this.connection = new _Connection2.default(url);

    this.objects.subscribe(this.connection.stream);

    this.active = {}; // currently active subscriptions
    this.pendingAdd = {};
    this.pendingRemove = {};

    this.connection.on('close', function () {
      // Our connection is closed, Prepare for the connection to re-open. Cache
      // the subscription keys we are currently subscribed to, and teardown all
      // existing objects.
      var current = _this.active;

      _this.objects.updateKeys({
        remove: Object.keys(_this.active),
        add: []
      });
      _this.active = {};

      // When we re-open, we want to re-subscribe to the correct collection of
      // keys. Resolve the .pendingAdd and .pendingRemove objects.
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(_this.pendingRemove)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (current.hasOwnProperty(key)) delete current[key];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(_this.pendingAdd)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key = _step2.value;

          current[_key] = true;
        } // We know the collection of keys that we would like to be subscribed to.
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      _this.pendingAdd = current;
      _this.pendingRemove = {};
    });

    this.connection.on('open', function () {
      _this.resolve();
    });
  }

  /**
   * Given a set of keys that we want to subscribe to, calculate the difference
   * between the currently active subscription and the new desired subscription.
   * Store the result in this.pendingAdd and this.pendingRemove.
   *
   * @param {string[]} keys - all the keys that we want to subscribe to.
   */


  _createClass(Synk, [{
    key: 'setSubscription',
    value: function setSubscription(keys) {
      this.pendingAdd = {};
      this.pendingRemove = {};

      var newKeys = {};

      // convert keys array to object
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var key = _step3.value;
          newKeys[key] = true;
        } // for each current key, check if we want to unsubscribe
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.keys(this.active)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var activeKey = _step4.value;

          if (!newKeys.hasOwnProperty(activeKey)) {
            // we have a key that we do not want.
            this.pendingRemove[activeKey] = true;
          }
        }

        // For each new key, check if we have to add it
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = keys[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var newKey = _step5.value;

          if (!this.active.hasOwnProperty(newKey)) {
            // a key needs to be added
            this.pendingAdd[newKey] = true;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }

    /**
     * Try to resolve the subscription. If socket is not open, this will have no
     * effect. Note that resolve is always called when the connection opens or re-
     * opens.
     * 
     * @return {bool} - true if the message was sent or no change is needed
     */

  }, {
    key: 'resolve',
    value: function resolve() {
      var msg = {
        method: 'updateSubscription',
        add: Object.keys(this.pendingAdd),
        remove: Object.keys(this.pendingRemove)
      };

      // If msg.add and msg.remove are empty, our job is done.
      if (msg.add.length === 0 && msg.remove.length === 0) return true;

      // If the connection is not open, do nothing (wait for open event)
      if (this.connection.state !== 1) return false;
      // The connection is known to be open

      this.objects.updateKeys(msg);
      this.connection.send(msg);

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = msg.add[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var key = _step6.value;

          this.active[key] = true;
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = msg.remove[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _key2 = _step7.value;

          if (this.active.hasOwnProperty(_key2)) delete this.active[_key2];
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      this.pendingAdd = {};
      this.pendingRemove = {};

      return true;
    }
  }]);

  return Synk;
}();

exports.default = Synk;

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(9);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "html, div {padding: 0; margin: 0}\n\nhtml {\n  /* Prevent us from being able to scroll past the end of\n  the page */\n  /* overflow: hidden; */\n}\n\n#root {\n  color: #08007E;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _eventemitter = __webpack_require__(0);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _kefir = __webpack_require__(1);

var _kefir2 = _interopRequireDefault(_kefir);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Libs
window.Kefir = _kefir2.default;

// Local
// Libraries

window.Emitter = _eventemitter2.default;

// Aether Libs
window.App = _App2.default;

window.onload = function () {
  var app = window.app = new _App2.default();

  app.synk.setSubscription(['eternal:main', 'eternal:other']);
  app.synk.resolve();
};

var preventContextMenu = function preventContextMenu() {
  window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();

    return false;
  };
};

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _synkJs = __webpack_require__(2);

var _AppEndpoint = __webpack_require__(12);

var _AppEndpoint2 = _interopRequireDefault(_AppEndpoint);

var _Note = __webpack_require__(13);

var _Note2 = _interopRequireDefault(_Note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* High level Aether Application
*/
var App =
/**
* Create an App
*/
function App() {
  var _this = this;

  _classCallCheck(this, App);

  var https = window.location.protocol.startsWith('https');
  var url = (https ? 'wss' : 'ws') + '://' + window.location.host + '/ws';

  this.synk = new _synkJs.Synk(url);
  this.endpoint = new _AppEndpoint2.default(this);

  // All messages from the server will be passed to the endpoint. Thanks to
  // the connection object, even if we disconnect and reconnect, incoming
  // messages will still be passed through to this.endpoint.
  this.endpoint.subscribe(this.synk.connection.stream);

  // Set the default class for Characters
  this.synk.objects.byKey.createBranch('n').class = _Note2.default;

  // We could replace 'close' with reconnect'
  this.synk.connection.on('close', function () {
    console.log('connection close bySKey.branches:', Object.keys(_this.synk.objects.bySKey.branches));
  });
  this.synk.connection.on('open', function () {
    console.log('connection open bySKey.branches: ', Object.keys(_this.synk.objects.bySKey.branches));
  });
};

exports.default = App;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _synkJs = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the main interface that receives RPCs from the server. AppEndpoint
 * must be created by an App instance in the App constructor.
 */
var AppEndpoint = function (_Endpoint) {
  _inherits(AppEndpoint, _Endpoint);

  /**
   * @param {App} app - The aether app that we are listening to
   */
  function AppEndpoint(app) {
    _classCallCheck(this, AppEndpoint);

    var _this = _possibleConstructorReturn(this, (AppEndpoint.__proto__ || Object.getPrototypeOf(AppEndpoint)).call(this));

    _this.app = app;
    return _this;
  }

  return AppEndpoint;
}(_synkJs.Endpoint);

exports.default = AppEndpoint;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Example object
 */
var Note = function () {
  /**
   * @param {string} key - provided by synk server
   * @param {object} state - initial state provided by synk server
   */
  function Note(key, state, synkObjects) {
    _classCallCheck(this, Note);

    this.elementPre = document.createElement('pre');
    this.elementCode = document.createElement('code');
    this.elementPre.appendChild(this.elementCode);
    this.parent = document.getElementById('root');

    this.state = { key: key, type: 'Note' };

    // Set any additional properties provided by the 'state' argument
    if (state !== undefined) this.update(state);
    this.parent.appendChild(this.elementPre);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */


  _createClass(Note, [{
    key: 'update',
    value: function update(state) {
      Object.assign(this.state, state);
      this.elementCode.innerText = JSON.stringify(this.state, null, '  ');
    }

    /**
     * Called when this object leaves our subscription area, or is removed from
     * the synk server.
     */

  }, {
    key: 'teardown',
    value: function teardown() {
      this.parent.removeChild(this.elementPre);
    }
  }]);

  return Note;
}();

exports.default = Note;

/***/ })
],[3]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3luay1qcy9kaXN0L3N5bmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcz9hM2I0Iiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FwcEVuZHBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ob3RlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIktlZmlyIiwiRW1pdHRlciIsIkFwcCIsIm9ubG9hZCIsImFwcCIsInN5bmsiLCJzZXRTdWJzY3JpcHRpb24iLCJyZXNvbHZlIiwicHJldmVudENvbnRleHRNZW51Iiwib25jb250ZXh0bWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJodHRwcyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJzdGFydHNXaXRoIiwidXJsIiwiaG9zdCIsImVuZHBvaW50Iiwic3Vic2NyaWJlIiwiY29ubmVjdGlvbiIsInN0cmVhbSIsIm9iamVjdHMiLCJieUtleSIsImNyZWF0ZUJyYW5jaCIsImNsYXNzIiwib24iLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImJ5U0tleSIsImJyYW5jaGVzIiwiQXBwRW5kcG9pbnQiLCJOb3RlIiwia2V5Iiwic3RhdGUiLCJzeW5rT2JqZWN0cyIsImVsZW1lbnRQcmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50Q29kZSIsImFwcGVuZENoaWxkIiwicGFyZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0eXBlIiwidW5kZWZpbmVkIiwidXBkYXRlIiwiYXNzaWduIiwiaW5uZXJUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1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OztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7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Q0EsU0FBS0YsVUFBTCxDQUFnQkksV0FBaEIsQ0FBNEIsS0FBS0QsV0FBakM7QUFDQSxTQUFLRSxNQUFMLEdBQWNKLFNBQVNLLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZDs7QUFFQSxTQUFLUixLQUFMLEdBQWEsRUFBRUQsUUFBRixFQUFPVSxNQUFNLE1BQWIsRUFBYjs7QUFFQTtBQUNBLFFBQUlULFVBQVVVLFNBQWQsRUFBeUIsS0FBS0MsTUFBTCxDQUFZWCxLQUFaO0FBQ3pCLFNBQUtPLE1BQUwsQ0FBWUQsV0FBWixDQUF3QixLQUFLSixVQUE3QjtBQUNEOztBQUVEOzs7Ozs7OzJCQUdPRixLLEVBQU87QUFDWlAsYUFBT21CLE1BQVAsQ0FBYyxLQUFLWixLQUFuQixFQUEwQkEsS0FBMUI7QUFDQSxXQUFLSyxXQUFMLENBQWlCUSxTQUFqQixHQUE2QkMsS0FBS0MsU0FBTCxDQUFlLEtBQUtmLEtBQXBCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDLENBQTdCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDVCxXQUFLTyxNQUFMLENBQVlTLFdBQVosQ0FBd0IsS0FBS2QsVUFBN0I7QUFDRDs7Ozs7O2tCQWhDa0JKLEkiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIiksIHJlcXVpcmUoXCJrZWZpclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbLCBdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN5bmtcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpLCByZXF1aXJlKFwia2VmaXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN5bmtcIl0gPSBmYWN0b3J5KHJvb3RbdW5kZWZpbmVkXSwgcm9vdFt1bmRlZmluZWRdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9ldmVudGVtaXR0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX2V2ZW50ZW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudGVtaXR0ZXIpO1xuXG52YXIgX2tlZmlyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9rZWZpcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZWZpcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gSG93IGxvbmcgZG8gd2Ugd2FpdCBiZWZvcmUgcmV0cnlpbmcgYSBjb25uZWN0aW9uXG52YXIgVElNRU9VVCA9IDUwMDtcblxuLyoqXG4qIFdyYXAgYSB3ZWJzb2NrZXQgY29ubmVjdGlvbiB0byB0aGUgc2VydmVyXG4qL1xuXG52YXIgQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChfRW1pdHRlcikge1xuICBfaW5oZXJpdHMoQ29ubmVjdGlvbiwgX0VtaXR0ZXIpO1xuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBhIGNvbm5lY3Rpb24uXG4gICpcbiAgKiBFdmVudHNcbiAgKiAtICdjb25uZWN0JyAtIGZpcmVkIHRoZSBmaXJzdCB0aW1lIGEgY29ubmVjdGlvbiBvcGVucyBzdWNjZXNzZnVsbGx5XG4gICogLSAncmVjb25uZWN0JyAtIGZpcmVkIHdoZW4gc3Vic2VxdWVuY3QgY29ubmVjdGlvbnMgb3BlblxuICAqIC0gJ29wZW4nIC0gZmlyZWQgd2hlbiBhbnkgY29ubmVjdGlvbiBvcGVuc1xuICAqIC0gJ2Nsb3NlJyAtIGZpcmVkIHdoZW4gYW55IGNvbm5lY3Rpb24gY2xvc2VzXG4gICogLSAnc2VuZEVycm9yJyAobWVzc2FnZSkgLSB3ZSB0cmllZCB0byBzZW5kLCBidXQgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkXG4gICpcbiAgKiBAYXJnIHtzdHJpbmd9IHVybCAtIHdlYnNvY2tldCB1cmwgdG8gY29ubmVjdCB0b1xuICAqL1xuICBmdW5jdGlvbiBDb25uZWN0aW9uKHVybCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0aW9uKTtcblxuICAgIC8qKlxuICAgICogQG1lbWJlciB7dXJsfSBzdHJpbmcgLSB0aGUgdXJsIHdlIGNvbm5lY3QgdG8gb24gdGhlIG5leHQgY29ubmVjdGlvblxuICAgICovXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbm5lY3Rpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb25uZWN0aW9uKSkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy51cmwgPSB1cmw7XG5cbiAgICAvKipcbiAgICAqIEBtZW1iZXIge0tlZmlyLnN0cmVhbX0gLSBzdHJlYW0gb2YgbWVzc2FnZXMgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyXG4gICAgKiBAcmVhZG9ubHlcbiAgICAqL1xuICAgIF90aGlzLnN0cmVhbSA9IF9rZWZpcjIuZGVmYXVsdC5mcm9tRXZlbnRzKF90aGlzLCAnbWVzc2FnZScpO1xuXG4gICAgLyoqXG4gICAgKiBAbWVtYmVyIHtXZWJTb2NrZXR9IC0gVGhlIGN1cnJlbnQgc29ja2V0IG9iamVjdFxuICAgICogQHJlYWRvbmx5XG4gICAgKi9cbiAgICBfdGhpcy5zb2NrID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0tlZmlyLnN0cmVhbX0gLSBldmVudCBlYWNoIHRpbWUgdGhlIGNvbm5lY3Rpb24gaXMgb3BlbmVkXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgX3RoaXMub3BlblN0cmVhbSA9IF9rZWZpcjIuZGVmYXVsdC5mcm9tRXZlbnRzKF90aGlzLCAnb3BlbicpO1xuXG4gICAgX3RoaXMuX2Nvbm5lY3Rpb25Db3VudCA9IDA7XG4gICAgX3RoaXMuX2xvZyA9IFtdO1xuICAgIF90aGlzLl9tZXNzYWdlUXVlID0gW107XG4gICAgX3RoaXMuX2Nvbm5lY3QoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgKiBDb25uZWN0IGFuZCBzdGF5IGNvbm5lY3RlZC4gVGhpcyBpcyBjYWxsZWQgb25jZSBieSB0aGUgY29uc3RydWN0b3IuIEl0XG4gICogc2hvdWxkIG5vdCBiZSBjYWxsZWQgYWdhaW4gbWFudWFsbHkuXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ29ubmVjdGlvbiwgW3tcbiAgICBrZXk6ICdfY29ubmVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jb25uZWN0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubG9nKCdjb25uZWN0aW5nLi4uJyk7XG4gICAgICB0aGlzLnNvY2sgPSBuZXcgV2ViU29ja2V0KHRoaXMudXJsKTtcblxuICAgICAgdmFyIHJlY29ubmVjdCA9IGZ1bmN0aW9uIHJlY29ubmVjdCgpIHtcbiAgICAgICAgX3RoaXMyLmxvZygnV2FpdGluZyB0byByZWNvbm5lY3QuLi4nKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9jb25uZWN0KCk7XG4gICAgICAgIH0sIFRJTUVPVVQpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMyLmxvZyhbJ3NvY2tldCBlcnJvcicsIGVycm9yXSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNvY2sub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIubG9nKCdjb25uZWN0aW9uIG9wZW5lZCcpO1xuICAgICAgICBfdGhpczIuc29jay5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobSkge1xuICAgICAgICAgIF90aGlzMi5lbWl0KCdtZXNzYWdlJywgSlNPTi5wYXJzZShtLmRhdGEpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpczIuX2Nvbm5lY3Rpb25Db3VudCArPSAxO1xuICAgICAgICBpZiAoX3RoaXMyLl9jb25uZWN0aW9uQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCB0aW1lIGNvbm5lY3RpbmcsIHNlbmQgcXVlZCBtZXNzYWdlc1xuICAgICAgICAgIHdoaWxlIChfdGhpczIuX21lc3NhZ2VRdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBfdGhpczIuc2VuZChfdGhpczIuX21lc3NhZ2VRdWVbMF0pO1xuICAgICAgICAgICAgX3RoaXMyLl9tZXNzYWdlUXVlLnNoaWZ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzMi5lbWl0KCdjb25uZWN0Jyk7XG4gICAgICAgIH0gZWxzZSBfdGhpczIuZW1pdCgncmVjb25uZWN0Jyk7XG5cbiAgICAgICAgX3RoaXMyLmVtaXQoJ29wZW4nKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFRoaXMgZmlyZXMgaWYgZXZlbiBpZiB0aGUgY29ubmVjdGlvbiB3YXMgbmV2ZXIgb3BlbmVkLiBGb3IgZXhhbXBsZSwgaWZcbiAgICAgIC8vIHRoZSBzZXJ2ZXIgaXMgZG93biB3aGVuIHdlIGZpcnN0IGNvbm5lY3QsIG9uY2xvc2Ugd2lsbCBzdGlsbCBmaXJlLlxuICAgICAgdGhpcy5zb2NrLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5sb2coJ2Nsb3NlJyk7XG4gICAgICAgIF90aGlzMi5lbWl0KCdjbG9zZScpO1xuICAgICAgICByZWNvbm5lY3QoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAYXJnIHthbnl0aGluZ30gdmFsdWUgLSBBZGQgYW55IHZhbHVlIHRvIHRoaXMgY29ubmVjdGlvbidzIGludGVybmFsIGxvZ1xuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2xvZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZyh2YWx1ZSkge1xuICAgICAgdGhpcy5fbG9nLnB1c2godmFsdWUpO1xuICAgICAgdGhpcy5lbWl0KCdsb2cnLCB2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fbG9nLmxlbmd0aCA+IDIwMCkgdGhpcy5fbG9nLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIFJlYWR5IFN0YXRlIENvbnN0YW50IG9mIHRoZSBjdXJyZW50IHNvY2tldC4gT25lIG9mIHRoZSBmb2xsb3dpbmcgaW50czpcbiAgICAqIDAgLSBDT05ORUNUSU5HIFRoZSBjb25uZWN0aW9uIGlzIG5vdCB5ZXQgb3Blbi5cbiAgICAqIDEgLSBPUEVOIFRoZSBjb25uZWN0aW9uIGlzIG9wZW4gYW5kIHJlYWR5IHRvIGNvbW11bmljYXRlLlxuICAgICogMiAtIENMT1NJTkcgVGhlIGNvbm5lY3Rpb24gaXMgaW4gdGhlIHByb2Nlc3Mgb2YgY2xvc2luZy5cbiAgICAqIDMgLSBDTE9TRUQgVGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkIG9yIGNvdWxkbid0IGJlIG9wZW5lZC5cbiAgICAqXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFJlYWR5IFN0YXRlIENvbnN0YW50XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2VuZCcsXG5cblxuICAgIC8qKlxuICAgICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHNlcnZlci4gSWYgdGhlIGNvbm5lY3Rpb24gaXMgbm90IHlldCBvcGVuLCBxdWUgdGhlXG4gICAgKiBtZXNzYWdlIHRvIGJlIHNlbnQgb25jZSB0aGUgY29ubmVjdGlvbiBkb2VzIG9wZW4uXG4gICAgKlxuICAgICogQGFyZyB7T2JqZWN0fFN0cmluZ30gbWVzc2FnZSAtIEpTT04gb2JqZWN0IG9yIHN0cmluZyB0byBzZW5kIHRvIHRoZSBzZXJ2ZXIuXG4gICAgKiBAcmV0dXJucyB7Ym9vbHxudWxsfSAtIHRydWUgaWYgdGhlIG1lc3NhZ2Ugd2FzIHNlbnQgc3VjY2Vzc2Z1bGx5LiBudWxsIGlmIHRoZVxuICAgICogICAgICAgICAgbWVzc2FnZSB3YXMgcXVlZCB0byBiZSBzZW50IGxhdGVyLiBGYWxzZSBpZiBzZW5kIGZhaWxlZC5cbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gJ3N0cmluZycpIG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IDEpIHtcbiAgICAgICAgLy8gV2UgYXJlIGNvbm5lY3RlZFxuICAgICAgICB0aGlzLnNvY2suc2VuZChtZXNzYWdlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXJlIG5vdCBjb25uZWN0ZWRcbiAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uQ291bnQgPT09IDApIHtcbiAgICAgICAgLy8gV2UgaGF2ZSBuZXZlciBiZWVuIGNvbm5lY3RlZFxuICAgICAgICB0aGlzLl9tZXNzYWdlUXVlLnB1c2gobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubG9nKFsnbWVzc2FnZSBxdWVkJywgbWVzc2FnZV0pO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSB0cmllZCB0byBzZW5kLCBidXQgdGhlIGNvbm5lY3Rpb24gd2FzIGJyb2tlblxuICAgICAgdGhpcy5sb2coeyByZWFzb246ICdzZW5kIGZhaWxlZCBiZWNhdXNlIHRoZSBjb25uZWN0aW9uIHdhcyBicm9rZW46JywgbXNnOiBtZXNzYWdlIH0pO1xuICAgICAgdGhpcy5sb2cobWVzc2FnZSk7XG4gICAgICB0aGlzLmVtaXQoJ3NlbmRFcnJvcicsIG1lc3NhZ2UpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RhdGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCF0aGlzLnNvY2spIHJldHVybiAzO1xuXG4gICAgICByZXR1cm4gdGhpcy5zb2NrLnJlYWR5U3RhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbm5lY3Rpb247XG59KF9ldmVudGVtaXR0ZXIyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb25uZWN0aW9uO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V2ZW50ZW1pdHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfZXZlbnRlbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50ZW1pdHRlcik7XG5cbnZhciBfa2VmaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX2tlZmlyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tlZmlyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiogQmFzZSBmb3IgY2xhc3NlcyB0aGF0IHJlc3BvbmQgdG8gYSBzdHJlYW0uXG4qXG4qIEV4dGVuZGluZyBFbmRwb2ludCBnaXZlIHVzIHRoZSBhYmlsaXR5IG1ha2UgcmVtb3RlIHByb2NlZWR1cmUgY2FsbHMgb24gY2xhc3NcbiogaW5zdGFuY2VzIGJ5IHNlbmRpbmcgbXNnIG9iamVjdHMgdG8gYSBLZWZpci5zdHJlYW0uIEV4dGVuc2lvbiBjbGFzc2VzIGRlZmluZVxuKiBtZXRob2RzIHRoYXQgY2FuIGJlIGNhbGxlZCBieSBzZW5kaW5nIG1lc3NhZ2VzIHRvIHRoZSBzdHJlYW0uXG4qXG4qIEFuIGVuZHBvaW50IGluc3RhbmNlIG1heSBvbmx5IGxpc3RlbiB0byBvbmUgY2xhc3MgYXQgYSB0aW1lXG4qL1xudmFyIEVuZHBvaW50ID0gZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhFbmRwb2ludCwgX0VtaXR0ZXIpO1xuXG4gIC8qKlxuICAqIENyZWF0ZSBhbiBFbmRwb2ludC4gVXN1YWxseSB0aGlzIHdpbGwgYmUgY2FsbGVkIHZpYSBzdXBlcigpXG4gICovXG4gIGZ1bmN0aW9uIEVuZHBvaW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbmRwb2ludCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRW5kcG9pbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFbmRwb2ludCkpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuX3N1YnNjaXB0aW9uID0gbnVsbDtcbiAgICBfdGhpcy5faW5wdXRTdHJlYW0gPSBudWxsO1xuICAgIF90aGlzLl91bmhhbmRsZWRTdHJlYW0gPSBudWxsO1xuICAgIF90aGlzLnVuaGFuZGxlZCA9IG5ldyBfa2VmaXIyLmRlZmF1bHQuUG9vbCgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAqIExpc3RlbiBmb3IgaW5jb21pbmcgcnBjIGNhbGxzIG9uIGEgc3RyZWFtLiBBIGNsYXNzIGluc3RhbmNlIG1heSBvbmx5IGxpc3RlblxuICAqIHRvIG9uZSBzdHJlYW0gYXQgYSB0aW1lLiBUbyB1bnN1YnNjcmliZSBmcm9tIHRoZSBjdXJyZW50IHN0cmVhbSBjYWxsXG4gICogc3Vic2NyaWJlKCkgd2l0aCBubyBhcmd1bWVudFxuICAqXG4gICogQGFyZyB7W0tlZmlyLnN0cmVhbV19IHN0cmVhbSAtIHRoZSBzdHJlYW0gdG8gc3Vic2NyaWJlIHRvLiBJZiB3ZSBhcmVcbiAgKiAgICAgIHN1YnNjcmliZWQgdG8gYW5vdGhlciBzdHJlYW0sIHVuc3Vic2NyaWJlIGZyb20gaXQuIE1lc3NhZ2VzIG9uIHRoZVxuICAqICAgICAgc3RyZWFtIGFyZSBleHBlY3RlZCB0byBpbmNsdWRlIGEge21ldGhvZDogJ21ldGhvZE5hbWUnfSBwYXJhbWV0ZXIuIFRoZVxuICAqICAgICAgbWV0aG9kTmFtZSBzaG91bGQgbWF0Y2ggYSBtZXRob2Qgb24gdGhlIGNsYXNzLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoXG4gICogICAgICB0aGUgZW50aXJlIG1lc3NhZ2UgYXMgdGhlIG9ubHkgYXJndW1lbnQuXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRW5kcG9pbnQsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKHN0cmVhbSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9zdWJzY2lwdGlvbikgdGhpcy5fc3Vic2NpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgICAgaWYgKHRoaXMuX3VuaGFuZGxlZFN0cmVhbSkgdGhpcy5vdXRwdXQudW5wbHVnKHRoaXMuX3VuaGFuZGxlZFN0cmVhbSk7XG5cbiAgICAgIHN0cmVhbSA9IHN0cmVhbSB8fCBudWxsO1xuICAgICAgdGhpcy5faW5wdXRTdHJlYW0gPSBzdHJlYW07XG5cbiAgICAgIGlmICghc3RyZWFtKSByZXR1cm47XG5cbiAgICAgIC8vIFdlIG5vdyBjcmVhdGUgdHdvIGRlcml2YXRpdmUgc3RyZWFtcy4gVGhlIGZpcnN0IGhhbmRsZXMgbWVzc2FnZXMgaWYgdGhpc1xuICAgICAgLy8gY2xhc3MgaGFzIGFuIGFwcHJvcHJpYXRlIGhhbmRsZXIgZ2l2ZW4gdGhlIG1lc3NhZ2UncyAnLm1ldGhvZCcgcGFyYW1ldGVyLlxuICAgICAgLy8gV2Ugb2JzZXJ2ZSB0aGlzIHN0cmVhbSwgYW5kIGxlYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBzdWJzY3JpcHRpb24gc28gd2VcbiAgICAgIC8vIGNhbiB1bnN1YnNjcmliZSBpZiB3ZSBhcmUgcGFzc2VkIGRpZmZlcmVudCBzdHJlYW0gdG8gbW9uaXRvci5cbiAgICAgIHRoaXMuX3N1YnNjaXB0aW9uID0gc3RyZWFtLmZpbHRlcihmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgX3RoaXMyW21zZy5tZXRob2RdID09PSAnZnVuY3Rpb24nO1xuICAgICAgfSkub2JzZXJ2ZSh7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShtc2cpIHtcbiAgICAgICAgICBfdGhpczJbbXNnLm1ldGhvZF0obXNnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kOiBmdW5jdGlvbiBlbmQobXNnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGUgc2Vjb25kIGRlcml2YXRpdmUgc3RyZWFtIHBhc3NlcyB1bmhhbmRsZWQgbWVzc2FnZXMgdG8gdGhlIGVuZHBvaW50J3NcbiAgICAgIC8vIC5vdXRwdXQgc3RyZWFtLiBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSB1bmhhbmRsZWQgc3RyZWFtIHNvIHdlIGNhbiB1bnBsdWdcbiAgICAgIC8vIGl0IGZyb20gdGhlIG91dHB1dCBwb29sIHdoZW4gd2Ugc3Vic2NyaWJlIHRvIGEgbmV3IHN0cmVhbS5cbiAgICAgIHRoaXMuX3VuaGFuZGxlZFN0cmVhbSA9IHN0cmVhbS5maWx0ZXIoZnVuY3Rpb24gKG1zZykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIF90aGlzMlttc2cubWV0aG9kXSAhPT0gJ2Z1bmN0aW9uJztcbiAgICAgIH0pO1xuICAgICAgdGhpcy51bmhhbmRsZWQucGx1Zyh0aGlzLl91bmhhbmRsZWRTdHJlYW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0IHRoZSBzdHJlYW0gb2Ygb3VyIGN1cnJlbnQgc3Vic2NyaXB0aW9uLlxuICAgICogQHJlYWRvbmx5XG4gICAgKiBAcmV0dXJucyB7S2VmaXIuc3RyZWFtfSAtIGN1cnJlbnQgc3Vic2NyaXB0aW9uLiBudWxsIGlmIG5vdCBzdWJzY3JpYmVkLlxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3N0cmVhbScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5wdXRTdHJlYW07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVuZHBvaW50O1xufShfZXZlbnRlbWl0dGVyMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRW5kcG9pbnQ7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBEZWZhdWx0IExlYWYgb2JqZWN0LiBJZiBhbiBvYmplY3QgaXMgY3JlYXRlZCBvbiBcbiAqL1xudmFyIExlYWYgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG9iamVjdHMga2V5XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSAtIHRoZSBvYmplY3RzIGluaXRpYWwgc3RhdGVcbiAgICogQHBhcmFtIHtzeW5rLWpzLk9iamVjdHN9IHN5bmtPYmplY3RzIC0gdGhlIHBhcmVudCBzeW5rLWpzIE9iamVjdHMgY29udGFpbmVyXG4gICAqL1xuICBmdW5jdGlvbiBMZWFmKGtleSwgc3RhdGUsIHN5bmtPYmplY3RzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExlYWYpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuc3lua09iamVjdHMgPSBzeW5rT2JqZWN0cztcbiAgICB0aGlzLnVwZGF0ZShzdGF0ZSk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSBpcyBjYWxsZWQgd2hlbiB0aGUgc2VydmVyIGNoYW5nZXMgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGlmZiAtIGNoYW5nZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgb2JqZWN0XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKExlYWYsIFt7XG4gICAga2V5OiAndXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKGRpZmYpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgZGlmZik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG9iamVjdCB3aWxsIGJlIGRlc3Ryb3llZCBvciByZW1vdmVzIGZyb20gdGhlIGN1cnJlbnRcbiAgICAgKiBzdWJzY3JpcHRpb24uIFlvdXIgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBtdXN0IHJlbW92ZSByZWZlcmVuY2VzXG4gICAgICogdG8gdGhlIG9iamVjdCBmcm9tIHlvdXIgcHJvamVjdCBzbyB0aGF0IHRoZSBvYmplY3Qgd2lsbCBiZSBnYXJiYWdlXG4gICAgICogY29sbGVjdGVkIGNvcnJlY3RseS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndGVhcmRvd24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0ZWFyZG93bjonLCB0aGlzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGVhZjtcbn0oKTtcblxuLyoqXG4gKiBCcmFuY2ggaXMgcGFydCBvZiBhIHRyZWUtbGlrZSBEYXRhIHN0cnVjdHVyZS4gRWFjaCBicmFuY2ggY29udGFpbnMgYW55IG51bWJlclxuICogb2YgY2hpbGRyZW4uIEVhY2ggY2hpbGQgaXMgZWl0aGVyIGEgQnJhbmNoIG9yIGEgTGVhZi4gRWFjaCBjaGlsZCBpc1xuICogaWRlbnRpZmllZCBieSBhIG5hbWUgc3RyaW5nLiBJbiB0aGlzIGltcGxlbWVudGF0aW9uLCBMZWF2ZXMgYXJlIGFueVxuICogamF2YXNjcmlwdCBPYmplY3QgdGhhdCBzYXRpc2Z5IHRoZSBMZWFmIGludGVyZmFjZSBhYm92ZS5cbiAqXG4gKiBFYWNoIEJyYW5jaCBoYXMgYSBzcGVjaWFsIHByb3BlcnR5IGNhbGxlZCAnY2xhc3MnLiBUaGlzIGlzIHRoZSByZWNvbW1lbmRlZFxuICogY2xhc3MgZm9yIExlYWYgb2JqZWN0cy4gTGVhZiBvYmplY3RzIG1heSBvciBtYXkgbm90IGJlIGNyZWF0ZWQgd2l0aCB0aGVcbiAqIHJlY29tbWVuZGVkIGNsYXNzLiBXaGVuIHdlIGNyZWF0ZSBuZXcgQnJhbmNoZXMgd2l0aCBgYi5jcmVhdGUoLi4uKWAsIGNoaWxkXG4gKiBicmFuY2hlcyBpbmhlcml0IHRoZSBwYXJlbnQncyAnY2xhc3MnIHByb3BlcnR5LlxuICovXG5cblxudmFyIEJyYW5jaCA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Q2xhc3N9IFtjbHNdIC0gT3B0aW9uYWwgY2xhc3MuIERlZmF1bHQgaXMgT2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gQnJhbmNoKGNscykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcmFuY2gpO1xuXG4gICAgdGhpcy5icmFuY2hlcyA9IHt9O1xuICAgIHRoaXMubGVhdmVzID0ge307XG4gICAgdGhpcy5fY2xhc3MgPSBjbHMgfHwgTGVhZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgcmVjb21tZW5kZWQgY2xhc3MgZm9yIGNoaWxkIGxlYXZlcyBhdHRhY2hlZCB0byB0aGlzIG9iamVjdC5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQnJhbmNoLCBbe1xuICAgIGtleTogJ2NyZWF0ZUJyYW5jaCcsXG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIEJyYW5jaCBvciBpZGVudGlmaWVkIGJ5IGEgbmFtZS4gVGhlIGV4YW1wbGUgYmVsb3cgcmV0dXJuc1xuICAgICAqIHRoZSBjaGlsZCBpZGVudGlmaWVkIGJ5IHRoZSBuYW1lICdhbGljZScuIElmICdhbGljZScgZG9lcyBub3QgZXhpc3Qgb24gdGhlXG4gICAgICogQnJhbmNoLCBhIG5ldyBjaGlsZCBCcmFuY2ggY2FsbGVkICdhbGljZScgd2lsbCBiZSBjcmVhdGVkLlxuICAgICAqXG4gICAgICogYGIuZ2V0KCdhbGljZScpIFxcXFwgcmV0dXJucyB0aGUgYnJhbmNoIG9yIGNoaWxkIG5hbWVkIGFsaWNlYFxuICAgICAqXG4gICAgICogQSBsb25nZXIgYWRkcmVzcyBjYW4gYmUgc3BlY2lmaWVkIGluIHRoZSBmb3JtYXQgYmVsb3cuIFRoaXMgd2lsbCBjcmVhdGUgbmV3XG4gICAgICogQnJhbmNoZXMgYW5kIHN1Yi1CcmFuY2hlcyBpZiBuZWVkZWQ6XG4gICAgICpcbiAgICAgKiBgYi5nZXQoJ2FsaWNlJywgJ2ljZSBjcmVhbScgJ290aGVyJylgXG4gICAgICpcbiAgICAgKiBJbiBhbnkgZm9ybWF0LCB0aGUgbGFzdCBuYW1lIHNwZWNpZmllZCBtYXkgYmUgdGhlIG5hbWUgb2YgYW4gZXhpc3RpbmcgTGVhZi5cbiAgICAgKiBBbGwgcHJlY2VlZGluZyBuYW1lcyBtdXN0IGJlIEJyYW5jaCBuYW1lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuMSAtIHRoZSBuYW1lIHdlIGFyZSB0cnlpbmcgdG8gZ2V0LlxuICAgICAqIEBwYXJhbSB7Li4uU3RyaW5nfSBuMiAtIHJlbWFpbmluZyBzdWIgYnJhbmNoIG5hbWVzLlxuICAgICAqIEByZXR1cm5zIHtCcmFuY2h9IC0gdGhlIEJyYW5jaCBvciBMZWFmIHdlIHJlcXVlc3RlZC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQnJhbmNoKG4xKSB7XG4gICAgICB2YXIgX2JyYW5jaGVzJG47XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBuMiA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgbjJbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAobjEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5icmFuY2hlcy5oYXNPd25Qcm9wZXJ0eShuMSkpIHtcbiAgICAgICAgLy8gV2Ugbm93IGtub3cgdGhhdCB0aGUgdmFsdWUgYXQgdGhpc1tuMV0gaXMgbm90IG91ciAnb3duJyBwcm9wZXJ0eS5cbiAgICAgICAgLy8gSXQgaXMgZWl0aGVyIG5vdCBwcmVzZW50LCBvciBuMSBpcyBub3QgYSB2YWxpZCBuYW1lLlxuICAgICAgICBpZiAodGhpcy5icmFuY2hlc1tuMV0gPT09IHVuZGVmaW5lZCkgdGhpcy5icmFuY2hlc1tuMV0gPSBuZXcgQnJhbmNoKHRoaXMuY2xhc3MpO2Vsc2UgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGJyYW5jaCBuYW1lOiAnICsgbjEpO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBrbm93IG4xIGV4aXN0cywgYW5kIGlzIGEgdmFsaWQgbmFtZS5cbiAgICAgIGlmICghbjIgfHwgIW4yLmxlbmd0aCkgcmV0dXJuIHRoaXMuYnJhbmNoZXNbbjFdO1xuXG4gICAgICByZXR1cm4gKF9icmFuY2hlcyRuID0gdGhpcy5icmFuY2hlc1tuMV0pLmNyZWF0ZUJyYW5jaC5hcHBseShfYnJhbmNoZXMkbiwgbjIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHN0ZXAgdGhyb3VnaCB0aGUgdHJlZS4gSWYgYW55IEJyYW5jaCBpcyBmb3VuZCB0aGF0IGhhcyBub1xuICAgICAqIGxlYXZlcywgcmVtb3ZlIHRoYXQgYnJhbmNoLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gdGhlIG51bWJlciBvZiBvYmplY3RzIHRoYXQgd2VyZSByZW1vdmVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd0cmltJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBPYmplY3Qua2V5cyh0aGlzLmJyYW5jaGVzKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgY291bnQgPSBjb3VudCArIHRoaXMuYnJhbmNoZXNbbmFtZV0udHJpbSgpO1xuICAgICAgICAgIGlmICghT2JqZWN0LmtleXModGhpcy5icmFuY2hlc1tuYW1lXS5sZWF2ZXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYnJhbmNoZXNbbmFtZV07XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBpdGVyYXRlIG92ZXIgdGhpcyBicmFuY2gsIGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBsZWFmLiBUaGVcbiAgICAgKiBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBpbiB0aGUgZm9ybWF0OlxuICAgICAqXG4gICAgICogYGYobGVhZiwgLi4uYXJncylgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmIC0gcHJlZGljYXRlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdpdGggZWFjaCBsZWFmXG4gICAgICogQHBhcmFtIHsuLi5hbnl9IGFyZ3MgLSBhZGRpdGlvbmFsIGFyZ3VtZW50cyB0byB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2ZvckVhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JFYWNoKGYpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBPYmplY3Qua2V5cyh0aGlzLmJyYW5jaGVzKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBfYnJhbmNoZXMkbmFtZTtcblxuICAgICAgICAgIHZhciBuYW1lID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgKF9icmFuY2hlcyRuYW1lID0gdGhpcy5icmFuY2hlc1tuYW1lXSkuZm9yRWFjaC5hcHBseShfYnJhbmNoZXMkbmFtZSwgW2ZdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBPYmplY3Qua2V5cyh0aGlzLmxlYXZlcylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgX25hbWUgPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgICBmLmFwcGx5KHVuZGVmaW5lZCwgW3RoaXMubGVhdmVzW19uYW1lXV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIGEgYnJhbmNoIGJ5IGl0cyBhZGRyZXNzLiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGIuZ2V0KCdhbGljZScsICdib2InLCAnY2F0Jyk7IC8vIEdldCB0aGlzLmFsaWNlLmJvYi5jYXRgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLlN0cmluZ30gYWxsIC0gdGhlIGFkZHJlc3Mgb2YgQnJhbmNoIHRvIGdldC5cbiAgICAgKiBAcmV0dXJucyB7QnJhbmNofE9iamVjdHxudWxsfSAtIEEgQnJhbmNoIG9yIExlYWYuIE51bGwgaWYgbm90IGZvdW5kXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldEJyYW5jaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJyYW5jaCgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYWxsID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYWxsW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIGlmICghYWxsIHx8IGFsbC5sZW5ndGggPT09IDApIHJldHVybiB0aGlzO2Vsc2UgaWYgKGFsbC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYnJhbmNoZXMuaGFzT3duUHJvcGVydHkoYWxsWzBdKSkgcmV0dXJuIHRoaXMuYnJhbmNoZXNbYWxsWzBdXTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpcnN0ID0gdGhpcy5icmFuY2hlc1thbGxbMF1dO1xuXG4gICAgICBpZiAoZmlyc3QgaW5zdGFuY2VvZiBCcmFuY2gpIHJldHVybiBmaXJzdC5nZXRCcmFuY2guYXBwbHkoZmlyc3QsIF90b0NvbnN1bWFibGVBcnJheShhbGwuc2xpY2UoMSkpKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgY2hpbGQgQnJhbmNoIGZyb20gdGhpcyBicmFuY2guIElmIHdlIHNwZWNpZnkgYSBsb25nZXIgYWRkcmVzcyxcbiAgICAgKiBvbmx5IHRoZSB0aXAgb2YgdGhlIGFkZHJlc3Mgc3BlY2lmaWVkIHdpbGwgYmUgcmVtb3ZlZC4gVGhlIGV4YW1wbGUgYmVsb3dcbiAgICAgKiByZW1vdmVzICdjYXQnIGZyb20gJ2JvYicsIGJ1dCBkb2VzIG5vdCByZW1vdmUgJ2JvYicgZnJvbSAnYWxpY2UnLlxuICAgICAqXG4gICAgICogYGIucmVtb3ZlKCdhbGljZScsICdib2InLCAnY2F0JylgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLlN0cmluZ30gYWxsIC0gdGhlIGFkZHJlc3Mgb2YgdGhlIEJyYW5jaCBvciBMZWFmIHdlIHdhbnQgdG9cbiAgICAgKiAgICAgICAgcmVtb3ZlLiBUaGUgcGFyZW50IG9mIHRoaXMgb2JqZWN0IG11c3QgYmUgYSBCcmFuY2guXG4gICAgICogQHJldHVybnMge0JyYW5jaHxudWxsfSAtIFRoZSBCcmFuY2ggdGhhdCB3YXMgcmVtb3ZlZC4gTnVsbCBpZiBub3QgZm91bmQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUJyYW5jaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUJyYW5jaCgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSB2b2lkIDA7XG5cbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYWxsID0gQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYWxsW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG5cbiAgICAgIGlmIChhbGwubGVuZ3RoID09PSAxKSBwYXJlbnQgPSB0aGlzO2Vsc2UgcGFyZW50ID0gdGhpcy5nZXRCcmFuY2guYXBwbHkodGhpcywgX3RvQ29uc3VtYWJsZUFycmF5KGFsbC5zbGljZSgwLCAtMSkpKTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHJldHVybiBudWxsO1xuXG4gICAgICB2YXIgbmFtZSA9IGFsbFthbGwubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghcGFyZW50LmJyYW5jaGVzLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm4gbnVsbDtcblxuICAgICAgdmFyIG9iaiA9IHBhcmVudC5icmFuY2hlc1tuYW1lXTtcblxuICAgICAgZGVsZXRlIHBhcmVudC5icmFuY2hlc1tuYW1lXTtcblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb24gcmVjdXJzaXZlIGxlYWYgcmV0cmV2aWFsLiBSZXR1cm5zIG51bGwgaWYgdGhlIGJyYW5jaCBoYXMgbm8gY2hpbGRyZW5cbiAgICAgKiB3aXRoIHRoZSBnaXZlbiBuYW1lLCBPUiBpZiB0aGUgbmFtZSBwb2ludHMgdG8gYW5vdGhlciBicmFuY2hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGxlYWYgd2UgYXJlIGxvb2tpbmcgZm9yO1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0gLSBudWxsIGlmIHRoaXMgZG9lcyBub3QgaGF2ZSBhIGJyYW5jaFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRMZWFmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGVhZihuYW1lKSB7XG4gICAgICBpZiAodGhpcy5sZWF2ZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybiB0aGlzLmxlYXZlc1tuYW1lXTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgTGVhZiBpbiB0aGlzIGJyYW5jaC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIG9iamVjdCB3ZSBhcmUgaW50ZXJlc3RlZCBpblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBPYmplY3Qgd2UgYXJlIHNldHRpbmcuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldExlYWYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRMZWFmKG5hbWUsIG9iaikge1xuICAgICAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkgdGhpcy5yZW1vdmVMZWFmKG5hbWUpO2Vsc2UgdGhpcy5sZWF2ZXNbbmFtZV0gPSBvYmo7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBrZXkgbmFtZSBvZiB0aGUgbGVhZiB0byByZW1vdmVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlTGVhZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUxlYWYobmFtZSkge1xuICAgICAgZGVsZXRlIHRoaXMubGVhdmVzW25hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsYXNzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jbGFzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIEJyYW5jaGVzIGNsYXNzLiBUaHJvdyBpZiB2IGlzIG5vdCBhIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHYgLSB0aGUgY29uc3RydWN0YWJsZSBmdW5jdGlvblxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICBpZiAodHlwZW9mIHYgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBFcnJvcignQ2xhc3MgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICB0aGlzLl9jbGFzcyA9IHY7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJyYW5jaDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQnJhbmNoO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0VuZHBvaW50MiA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfRW5kcG9pbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5kcG9pbnQyKTtcblxudmFyIF9CcmFuY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX0JyYW5jaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CcmFuY2gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFN0b3JlIGEgY29sbGVjdGlvbiBvZiBvYmplY3RzIHRoYXQgd2lsbCBiZSBzeW5jaHJvbml6ZWQgd2l0aCB0aGUgc2VydmVyLlxuICogVGhlIGxpZmVjeWNsZSBvZiBhbiBvYmplY3QgaXNcbiAqIDEuIHJlY2VpdmUgYWRkT2JqIG1lc3NhZ2UgZnJvbSBzZXJ2ZXJcbiAqICAgICAtIGNyZWF0ZSBgbmV3IGNvbnN0cnVjdG9yKGtleSwgc3RhdGUsIHRoaXMpYFxuICogICAgIC0gYWRkIHRvIG9iamVjdHMgLmJ5S2V5IGFuIC5ieVNLZXkgYnJhbmNoZXNcbiAqICAgICAtIGVtaXQoJ2FkZCcsIG9iaiwgYWRkT2JqTWVzc2FnZSlcbiAqIDIuIHJlY2VpdmUgbW9kT2JqIG1lc3NhZ2UgZnJvbSBzZXJ2ZXIgKDAgb3IgbW9yZSB0aW1lcylcbiAqICAgSWYgdGhlIG9iamVjdCBpcyBub3QgbW92aW5nIGh1bmtzXG4gKiAgICAgLSBjYWxsIG9iamVjdHMgLnVwZGF0ZShzdGF0ZSkgbWV0aG9kXG4gKiAgICAgLSBlbWl0KCdtb2QnLCBvYmosIG1zZylcbiAqICAgT3IgaWYgdGhlIG9iamVjdCBpcyBtb3ZpbmcgdG8gYSBodW5rIHdlIGFyZSBzdWJzY3JpYmVkIHRvXG4gKiAgICAgLSBtb3ZlIHRoZSBvYmplY3QgdG8gYSBkaWZmZXJlbnQgc3Vic2NyaXB0aW9uIGtleVxuICogICAgIC0gY2FsbCBvYmplY3RzIC51cGRhdGUoc3RhdGUpIG1ldGhvZFxuICogICAgIC0gZW1pdCgnbW9kJywgb2JqLCBtc2cpXG4gKiAgIE9yIGlmIHRoZSBvYmplY3QgaXMgbW92aW5nIHRvIGEgYXJlYSB3ZSBhcmUgbm90IHN1YnNjcmliZWQgdG9cbiAqICAgICAtIHJlbW92ZSB0aGUgb2JqZWN0XG4gKiAgICAgLSBlbWl0KCdyZW0nLCBvYmosIG1zZylcbiAqICAgICAtIG9iai50ZWFyZG93bigpIG1ldGhvZFxuICogMy4gcmVjZWl2ZSByZW1PYmogbWVzc2FnZSBmcm9tIHNlcnZlciBPUiB1bnN1YnNjcmliZSBmcm9tIGh1bmtcbiAqICAgIC0gcmVtb3ZlIG9iamVjdFxuICogICAgLSBlbWl0KCdyZW0nLCBvYmosIG1zZykgLy8gbXNnIHdpbGwgYmUgbnVsbCBpZiB3ZSB1bnN1YnNjcmliZWRcbiAqICAgIC0gb2JqLnRlYXJkb3duKClcbiAqXG4gKiBOT1RFOlxuICogLSBXaGVuIGFkZGluZyBhbiBvYmplY3QgZmlyc3Qgd2UgY3JlYXRlIGl0LCB0aGVuIHdlIGVtaXQgaXRcbiAqIC0gV2hlbiByZW1vdmluZyBhbiBvYmplY3QgZmlyc3Qgd2UgZW1pdCBpdCwgdGhlbiB3ZSAudGVhcmRvd24oKVxuICpcbiAqICBAZXZlbnQgYWRkXG4gKiAgQGV2ZW50IG1vZFxuICogIEBldmVudCByZW1cbiAqL1xudmFyIE9iamVjdHMgPSBmdW5jdGlvbiAoX0VuZHBvaW50KSB7XG4gIF9pbmhlcml0cyhPYmplY3RzLCBfRW5kcG9pbnQpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FwcH0gYXBwIC0gdGhlIGFldGhlciBBcHAgdGhpcyBvYmplY3QgaXMgYnVpbHQgb25cbiAgICovXG4gIGZ1bmN0aW9uIE9iamVjdHMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9iamVjdHMpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE9iamVjdHMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3RzKSkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5ieVNLZXkgPSBuZXcgX0JyYW5jaDIuZGVmYXVsdCgpO1xuICAgIF90aGlzLmJ5S2V5ID0gbmV3IF9CcmFuY2gyLmRlZmF1bHQoKTtcbiAgICBfdGhpcy5ieUlkID0ge307XG5cbiAgICAvLyBxdWV1ZWRNZXNzYWdlcyBpcyBmb3Igc3RvcmluZyBtZXNzYWdlcyB0aGF0IHRhcmdldCBhbiBvYmplY3QgdGhhdCB3ZSBoYXZlXG4gICAgLy8gbm90IHlldCByZWNlaXZlZC4gTWVzc2FnZXMgdGhhdCBhcnJpdmUgb3V0IG9mIG9yZGVyIGFmdGVyIGFkZE9iaiBoYXMgYmVlblxuICAgIC8vIHJlY2VpdmVkIHNob3VsZCBiZSBzdG9yZWQgb24gdGhlIG9iamVjdCBpdHNlbGYsIHNvIHRoZXkgY2FuIGJlIGdhcmJhZ2VcbiAgICAvLyBjb2xsZWN0ZWQgY29ycmVjdGx5LlxuICAgIC8vIEFzIG9mIE5vdmVtYmVyIDUsIDIwMTcsIHVub3JkZXJlZCBtb2RPYmogbWVzc2FnZXMgdGhhdCBhcnJpdmUgYWZ0ZXIgYWRkT2JqXG4gICAgLy8gYXJlIG5vdCBzdXBwb3J0ZWQuIEhvd2V2ZXIsIHN1cHBvcnQgbWF5IGJlIGFkZGVkIGluIHRoZSBmdXR1cmUuXG4gICAgX3RoaXMucXVldWVkTWVzc2FnZXMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzZXQgb2Yga2V5cyB0aGF0IHdlIGFyZSBzdWJzY3JpYmVkIHRvLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBpcyB1c3VhbGx5IGNhbGxlZCBmcm9tIGNsaWVudCB2aWEgdGhlIHN5bmsucmVzb2x2ZSgpIG1ldGhvZC5cbiAgICogV2Ugc2hvdWxkIGJlIGFibGUgdG8gY2FsbCB0aGlzIGZyb20gdGhlIHNlcnZlciwgYnV0IHRoaXMgYmVoYXZpb3IgaXNcbiAgICogdW50ZXN0ZWQuIEkgaGF2ZSBub3QgdGhvdWdodCB0aHJvdWdoIHRoZSBsb2dpYyBvZiBob3cgdGhpcyBjb3VsZCBiZSBjYWxsZWRcbiAgICogZnJvbSB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlU3Vic2NyaXB0aW9uTXNnIC0gT2JqZWN0IGNvbnRhaW5pbmcgc3Vic2NyaXB0aW9uXG4gICAqICAgICAgICBjaGFuZ2UuIFRoZSBvYmplY3QgbXVzdCBoYXZlIHR3byBhcnJheXMgb2Ygc3RyaW5nczogLmFkZCBhbmQgLnJlbW92ZVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhPYmplY3RzLCBbe1xuICAgIGtleTogJ3VwZGF0ZUtleXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVLZXlzKHVwZGF0ZVN1YnNjcmlwdGlvbk1zZykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBtc2cgPSB1cGRhdGVTdWJzY3JpcHRpb25Nc2c7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2cucmVtb3ZlKSB8fCAhQXJyYXkuaXNBcnJheShtc2cuYWRkKSkgY29uc29sZS5lcnJvcignT2JqZWN0cy51cGRhdGVLZXlzIHJlY2VpdmVkIGludmFsaWQgbWVzc2FnZTonLCBtc2cpO1xuXG4gICAgICAvLyBXaGVuIHdlIHVuc3Vic2NyaWJlIGZyb20gYSBjaHVuaywgd2UgbmVlZCB0byByZW1vdmUgYW5kIHRlYXJkb3duIGFsbCB0aGVcbiAgICAgIC8vIG9iamVjdHMgaW4gdGhhdCBjaHVuay5cbiAgICAgIG1zZy5yZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGVudHVyZSBjaHVua1xuICAgICAgICBfdGhpczIuYnlTS2V5LnJlbW92ZUJyYW5jaChwKS5mb3JFYWNoKGZ1bmN0aW9uIChsZWFmKSB7XG4gICAgICAgICAgdmFyIF9ieUtleTtcblxuICAgICAgICAgIC8vIFJlbW92ZSBlYWNoIG9iamVjdCBmcm9tIGl0cyBjb2xsZWN0aW9uXG5cbiAgICAgICAgICB2YXIgcGFydHMgPSB2b2lkIDA7XG4gICAgICAgICAgdmFyIGlkID0gdm9pZCAwO1xuXG4gICAgICAgICAgaWYgKGxlYWYuaWQgJiYgbGVhZi50KSB7XG4gICAgICAgICAgICAvLyBCVUcoY2hhcmxlcyk6IHdlIGNvdWxkIHNpbXBsaWZ5IG9uY2Ugd2UgcmVtb3ZlIGtleXMgYWx0b2dldGhlclxuICAgICAgICAgICAgcGFydHMgPSBsZWFmLnQuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGlkID0gbGVhZi5pZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHMgPSBsZWFmLmtleS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgaWQgPSBwYXJ0cy5wb3AoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IChfYnlLZXkgPSBfdGhpczIuYnlLZXkpLmdldEJyYW5jaC5hcHBseShfYnlLZXksIF90b0NvbnN1bWFibGVBcnJheShwYXJ0cykpOyAvLyBUaGUgZ3JvdXAgb2Ygb2JqZWN0cyBpbiB0aGF0IHR5cGVcblxuICAgICAgICAgIC8vIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3QgZXhpc3QsIHdlIGhhdmUgYnVnXG4gICAgICAgICAgaWYgKGNvbGxlY3Rpb24pIGNvbGxlY3Rpb24ucmVtb3ZlTGVhZihpZCk7ZWxzZSBjb25zb2xlLmVycm9yKCdVbnN1YnNjcmliZWQgZnJvbSBjaHVuaywgYnV0IGNvbGxlY3Rpb24gbm90IGZvdW5kOiAnICsgcGFydHMuam9pbignOicpKTtcblxuICAgICAgICAgIF90aGlzMi5lbWl0KCdyZW0nLCBsZWFmLCBudWxsKTtcbiAgICAgICAgICBsZWFmLnRlYXJkb3duKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIG1zZy5hZGQuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICBfdGhpczIuYnlTS2V5LmNyZWF0ZUJyYW5jaChwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBvYmplY3QuIFR5cGljYWxseSBjYWxsZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHdoZW4gd2UgYWRkIGFuIG9iamVjdCwgdGhlIC5pZCAua2V5IGFuZCAudiBwcm9wZXJ0aWVzIGFyZVxuICAgICAqIGF1dG9tYXRpY2FsbHkgc2V0LiBUaGUgT2JqZWN0cyBjbGFzcyBkZXBlbmRzIG9uIHRoZXNlIGJlaW5nIGF2YWlsYWJsZVxuICAgICAqIHdoZW4gcmVtb3ZpbmcgdGhlIG9iamVjdCwgc28gdGhleSBzaG91bGQgbm90IGJlIGNoYW5nZWQgYnkgY2xpZW50IGNvZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnIC0gY29udGFpbnMgLmtleSwgLnN0YXRlLCAuc0tleS4gVGhlIHByZXNlbmNlIG9mIC5wc0tleVxuICAgICAqICAgICAgICBpbmRpY2F0ZXMgdGhpcyBvYmplY3QgbW92ZWQgaGVyZSBmcm9tIGFub3RoZXIgY2h1bmsuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZE9iaicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZE9iaihtc2cpIHtcbiAgICAgIHZhciBfYnlLZXkyO1xuXG4gICAgICBpZiAodHlwZW9mIG1zZy5zS2V5ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgbXNnLmtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWl2ZWQgaW52YWxpZCBhZGRPYmogbWVzc2FnZScsIG1zZyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFydHMgPSBtc2cua2V5LnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgaWQgPSBwYXJ0cy5wb3AoKTtcbiAgICAgIHZhciBjaHVuayA9IHRoaXMuYnlTS2V5LmdldEJyYW5jaChtc2cuc0tleSk7XG4gICAgICB2YXIgY29sbGVjdGlvbiA9IChfYnlLZXkyID0gdGhpcy5ieUtleSkuY3JlYXRlQnJhbmNoLmFwcGx5KF9ieUtleTIsIF90b0NvbnN1bWFibGVBcnJheShwYXJ0cykpO1xuXG4gICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgc3Vic2NyaWJlZFxuICAgICAgaWYgKCFjaHVuaykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1JlY2VpdmVkIFwiYWRkT2JqXCIgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIsIHdoaWxlIG5vdCAnICsgJ3N1YnNjcmliZWQgdG8gdGhlIG9iamVjdFxcJ3Mgc3Vic2NyaXB0aW9uIGtleScpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIHRoaXMgb2JqZWN0XG4gICAgICB2YXIgb2JqID0gY29sbGVjdGlvbi5nZXRMZWFmKGlkKTtcblxuICAgICAgaWYgKG9iaikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgc2VydmVyIHNlbnQgdXMgYW4gYWRkT2JqIG1lc3NhZ2UsIGJ1dCB3ZSBhbHJlZHkgaGFkICcgKyAoJ3RoZSBvYmplY3QgbG9jYWxseTogJyArIG1zZy5rZXkpKTtcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIHdlIHJlbW92ZSBhbmQgdGVhcmRvd24gYyBpbnRlYWQgb2YgdGhyb3dpbmcgYW4gZXJyb3I/P1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RPRE86IHJlbW92ZSBhbmQgdGVhcmRvd24gYycpO1xuICAgICAgfVxuXG4gICAgICBvYmogPSBuZXcgY29sbGVjdGlvbi5jbGFzcyhtc2cua2V5LCBtc2cuc3RhdGUsIHRoaXMpO1xuICAgICAgb2JqLmlkID0gaWQ7XG4gICAgICBvYmoua2V5ID0gbXNnLmtleTtcbiAgICAgIG9iai52ID0gbXNnLnY7XG5cbiAgICAgIGNodW5rLnNldExlYWYobXNnLmtleSwgb2JqKTtcbiAgICAgIGNvbGxlY3Rpb24uc2V0TGVhZihpZCwgb2JqKTtcblxuICAgICAgdGhpcy5lbWl0KCdhZGQnLCBvYmosIG1zZyk7XG4gICAgICB0aGlzLmFwcGx5UXVldWVkTWVzc2FnZXMob2JqKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdXRhdGUgYSBsb2NhbCBvYmplY3QuIERlc2lnbmVkIHRvIGJlIGNhbGxlZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZyAtIGRhdGEgZnJvbSBzZXJ2ZXIuIEluY2x1ZGVzIC5kaWZmIGFuZCAuc0tleS4gTWF5IGFsc29cbiAgICAgKiAgICAgICAgaW5jbHVkZSAubnNLZXkgKGlmIHRoZSBvYmplY3QgaXMgbW92aW5nIGJldHdlZW4gY2h1bmtzLilcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbW9kT2JqJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW9kT2JqKG1zZykge1xuICAgICAgdmFyIF9ieUtleTM7XG5cbiAgICAgIGlmICh0eXBlb2YgbXNnLnNLZXkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtc2cua2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBpbnZhbGlkIG1vZE9iaiBtZXNzYWdlJywgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJ0cyA9IG1zZy5rZXkuc3BsaXQoJzonKTtcbiAgICAgIHZhciBpZCA9IHBhcnRzLnBvcCgpO1xuICAgICAgdmFyIGNodW5rID0gdGhpcy5ieVNLZXkuZ2V0QnJhbmNoKG1zZy5zS2V5KTsgLy8gY3VycmVudCBjaHVua1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSAoX2J5S2V5MyA9IHRoaXMuYnlLZXkpLmNyZWF0ZUJyYW5jaC5hcHBseShfYnlLZXkzLCBfdG9Db25zdW1hYmxlQXJyYXkocGFydHMpKTtcbiAgICAgIHZhciBvYmogPSBjb2xsZWN0aW9uLmdldExlYWYoaWQpO1xuXG4gICAgICAvLyBEbyBzb21lIHNhbml0eSBjaGVja3MuLi5cblxuICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgaWYgKGNodW5rKSB0aGlzLnF1ZXVlTWVzc2FnZShtc2cpO2Vsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgaXMganVzdCBhIHdhcm5pbmcsIGJlY2F1c2UgaXQgd2lsbCBqdXN0IGhhcHBlbiBvY2Nhc2lvbmFsbHkuXG4gICAgICAgICAgY29uc29sZS53YXJuKCdXZSByZWNlaXZlZCBhIG1vZE9iaiByZXF1ZXN0LiBXZSBjb3VsZCBub3QgZmluZCB0aGUgJyArICgnb2JqZWN0IGxvY2FsbHk6ICcgKyBtc2cua2V5ICsgJy4gQW5kIHRoZSBtZXNzYWdlIHRhcmdldHMgYW4gU0tleSB3ZSAnKSArICdhcmUgbm90IHN1YnNjcmliZWQgdG8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNodW5rLmdldExlYWYobXNnLmtleSkgIT09IG9iaikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBtb2RPYmouIFRoZSBvYmplY3Qgd2FzIGZvdW5kIG9uIHRoZSAnICsgcGFydHMgKyAnICcgKyAoJ2NvbGxlY3Rpb24sIGJ1dCBub3QgdGhlICcgKyBtc2cuc0tleSArICcgY2h1bmsuJykpO1xuICAgICAgICAvLyBLZWVwIHRyeWluZyB0byBtb3ZlIHRoZSBvYmplY3QuLi5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBtc2cudiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWl2ZWQgbW9kT2JqIG1lc3NhZ2Ugd2l0aCBhIGJhZCB2ZXJzaW9uOiAnICsgbXNnLnYpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlIG1lc3NhZ2UgaXMgYXJyaXZpbmcgYXQgdGhlIHJpZ2h0IHRpbWUuIElmIG91ciBtZXNzYWdlXG4gICAgICAvLyBpcyBvYnNvbGV0ZSwgZGlzY2FyZCBpdC5cbiAgICAgIGlmIChtc2cudiA8PSBvYmoudikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Rpc2NhcmRlZCBvYnNvbGV0ZSBtZXNzYWdlOicsIG1zZyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobXNnLnYgPiBvYmoudiArIDEpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignREFOR0VSOiBPdXQgb2Ygb3JkZXIgbWVzc2FnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYWZ0ZXIgcmVjZWlldmVpbmcgYWRkT2JqJywgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIGFyZSBkZWZpbml0ZWx5IGdvaW5nIHRvIG1vZGlmeSB0aGUgb2JqZWN0LiBXZSBrbm93IHRoYXQgdGhlIG1zZydzXG4gICAgICAvLyB2ZXJzaW9uIGlzIGV4YWN0bHkgb25lIG1vcmUgdGhhbiB0aGUgb2JqZWN0J3MgdmVyc2lvbi5cbiAgICAgIG9iai52Kys7XG5cbiAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIFRoZXJlIGFyZSAzIHBvc3NpYmxpdGllc1xuICAgICAgLy8gLSB3ZSBhcmUgbW92aW5nIHdpdGhpbiBhIGNodW5rLiBFYXN5IC0tIGp1c3QgdXBkYXRlXG4gICAgICAvLyAtIHdlIGFyZSBtb3ZpbmcgdG8gYSBuZXcgY2h1bmsuIFJlbW92ZSB0aGlzIG9uZSBjaHVuaywgYWRkIHRvIGFub3RoZXJcbiAgICAgIC8vIC0gd2UgYXJlIG1vdmluZyB0byBhIGNodW5rLCBhbmQgYXJlIG5vdCBzdWJzY3JpYmVkIHRvIHRoYXQgY2h1bmtcblxuICAgICAgLy8gQXJlIHdlIG1vZGlmeWluZyB3aXRoaW4gYSBjaHVuaz9cbiAgICAgIGlmICghbXNnLm5zS2V5KSB7XG4gICAgICAgIG9iai51cGRhdGUobXNnLmRpZmYpO1xuICAgICAgICB0aGlzLmVtaXQoJ21vZCcsIG9iaiwgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBvYmplY3QgbXVzdCBiZSBtb3ZlZCBvdXQgb2YgdGhlIGN1cnJlbnQgY2h1bmsuIElmIHdlIGFyZSBzdWJzY3JpYmVkXG4gICAgICAvLyB0byB0aGUgbmV3IGNodW5rLCBtb3ZlIHRoZSBvYmplY3QgdGhlcmUuIElmIHdlIGFyZSBub3Qgc3Vic2NyaWJlZCxcbiAgICAgIC8vIHJlbW92ZSBhbmQgdGVhcmRvd24oKSB0aGUgb2JqZWN0LlxuICAgICAgY2h1bmsucmVtb3ZlTGVhZihtc2cua2V5KTtcblxuICAgICAgdmFyIG5ld0NodW5rID0gdGhpcy5ieVNLZXkuZ2V0QnJhbmNoKG1zZy5uc0tleSk7XG5cbiAgICAgIGlmIChuZXdDaHVuaykge1xuICAgICAgICBuZXdDaHVuay5zZXRMZWFmKG1zZy5rZXksIG9iaik7XG4gICAgICAgIG9iai51cGRhdGUobXNnLmRpZmYpO1xuICAgICAgICB0aGlzLmVtaXQoJ21vZCcsIG9iaiwgbXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxlY3Rpb24ucmVtb3ZlTGVhZihpZCk7XG4gICAgICAgIHRoaXMuZW1pdCgncmVtJywgb2JqLCBtc2cpO1xuICAgICAgICBvYmoudGVhcmRvd24oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbmQgdGVhcmRvd24gYW4gb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtc2cgLSBoYXMgLmtleSBhbmQgLnNLZXkgc3RyaW5nc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1PYmonLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1PYmoobXNnKSB7XG4gICAgICB2YXIgX2J5S2V5NDtcblxuICAgICAgaWYgKHR5cGVvZiBtc2cuc0tleSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIG1zZy5rZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpdmVkIGludmFsaWQgcmVtT2JqIG1lc3NhZ2UnLCBtc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnRzID0gbXNnLmtleS5zcGxpdCgnOicpO1xuICAgICAgdmFyIGlkID0gcGFydHMucG9wKCk7XG4gICAgICB2YXIgY2h1bmsgPSB0aGlzLmJ5U0tleS5nZXRCcmFuY2gobXNnLnNLZXkpOyAvLyBjdXJyZW50IGNodW5rXG4gICAgICB2YXIgY29sbGVjdGlvbiA9IChfYnlLZXk0ID0gdGhpcy5ieUtleSkuZ2V0QnJhbmNoLmFwcGx5KF9ieUtleTQsIF90b0NvbnN1bWFibGVBcnJheShwYXJ0cykpO1xuICAgICAgdmFyIG9iaiA9IGNvbGxlY3Rpb24uZ2V0TGVhZihpZCk7XG5cbiAgICAgIGlmIChjaHVuaykgY2h1bmsucmVtb3ZlTGVhZihtc2cua2V5KTtlbHNlIGNvbnNvbGUuZXJyb3IoJ1RyaWVkIHRvIHJlbW92ZSAnICsgbXNnLnNLZXkgKyAnLCBidXQgY291bGQgbm90IGZpbmQgb2JqZWN0cyBhdCAnICsgcGFydHMpO1xuXG4gICAgICBpZiAoY29sbGVjdGlvbikgY29sbGVjdGlvbi5yZW1vdmVMZWFmKGlkKTtlbHNlIGNvbnNvbGUuZXJyb3IoJ1RyaWVkIHRvIHJlbW92ZSAnICsgbXNnLmtleSArICcgYnV0IGNvdWxkIG5vdCBmaW5kICcgKyBwYXJ0cyArICcgaW4gLmJ5S2V5Jyk7XG5cbiAgICAgIGlmIChvYmopIHtcbiAgICAgICAgdGhpcy5lbWl0KCdyZW0nLCBvYmosIG1zZyk7XG4gICAgICAgIG9iai50ZWFyZG93bigpO1xuICAgICAgfSBlbHNlIGNvbnNvbGUuZXJyb3IoJ0RBTkdFUjogVHJpZWQgdG8gcmVtb3ZlICcgKyBtc2cua2V5ICsgJywgYnV0IGNvdWxkIG5vdCBmaW5kIG9iamVjdCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbiBvYmplY3QgZnJvbSB0aGlzIHN5bmsgY29sbGVjdGlvbi4gVGhpcyBtYXkgcmV0dXJuIG51bGwgaWYgdGhlIG9iamVjdFxuICAgICAqIHdhcyBub3QgZm91bmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gdGhlIGZ1bGwga2V5IG9mIHRoZSBvYmplY3Qgd2Ugd2FudCAndHlwZTprZXk6aWQnXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfSAtIHRoZSBvYmplY3QgaWYgaXQgZXhpc3RzLCBvciBudWxsXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgIHZhciBfYnlLZXk1O1xuXG4gICAgICB2YXIgb2JqID0gdGhpcy5ieUlkW2tleV07XG5cbiAgICAgIGlmIChvYmopIHJldHVybiBvYmo7XG5cbiAgICAgIHZhciBwYXJ0cyA9IGtleS5zcGxpdCgnOicpO1xuICAgICAgdmFyIGlkID0gcGFydHMucG9wKCk7XG4gICAgICB2YXIgY29sbGVjdGlvbiA9IChfYnlLZXk1ID0gdGhpcy5ieUtleSkuZ2V0QnJhbmNoLmFwcGx5KF9ieUtleTUsIF90b0NvbnN1bWFibGVBcnJheShwYXJ0cykpO1xuXG4gICAgICBpZiAoIWNvbGxlY3Rpb24pIHJldHVybiBudWxsO1xuXG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5nZXRMZWFmKGlkKSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN5bmsgT2JqZWN0cyBkb2VzIG5vdCBhc3N1bWUgdGhhdCBtZXNzYWdlcyB3aWxsIGFycml2ZSBpbiB0aGUgY29ycmVjdFxuICAgICAqIG9yZGVyLiBXaGVuIHdlIHJlY2lldmUgYSBtZXNzYWdlLCBpdCBpcyBwb3NzaWJsZSB0aGF0IHdlIGhhdmUgbm90IHlldFxuICAgICAqIHJlY2VpdmVkIHRoZSBzc29jaWF0ZWQgYWRkT2JqIG1lc3NhZ2UuIEl0IGlzIGFsc28gcG9zc2libGUgdGhhdCB3ZSBkb1xuICAgICAqXG4gICAgICogQXBwZW5kIGEgbWVzc2FnZSB0byB0aGUgcXVldWUgZm9yIGEgZ2l2ZW4gb2JqZWN0LiBXaGVuZXZlciBhbiBvYmplY3QgaXNcbiAgICAgKiBhZGRlZCBPUiBhIG1vZGlmaWNhdGlvbiBpcyBhcHBsaWVkLiBXZSB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmVcbiAgICAgKiBxdWV1ZWQgbWVzc2FnZXMgdGhhdCBzaG91bGQgYmUgcmVwbGF5ZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBwcm9iYWJseSBuZXZlciBiZSBjYWxsZWQgZXhjZXB0IGJ5IG1ldGhvZHMgb2YgdGhlXG4gICAgICogT2JqZWN0cyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgLSBtb2QgbWVzc2FnZS4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgYWxzbyBzdXBwb3J0XG4gICAgICogICAgICAgIHJlbSBtZXNzYWdlcy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncXVldWVNZXNzYWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVldWVNZXNzYWdlKG1zZykge1xuICAgICAgdmFyIHF1ZXVlID0gdm9pZCAwO1xuICAgICAgdmFyIGlkID0gbXNnLmtleSB8fCBtc2cuaWQ7XG5cbiAgICAgIGlmICh0aGlzLnF1ZXVlZE1lc3NhZ2VzLmhhc093blByb3BlcnR5KGlkKSkgcXVldWUgPSB0aGlzLnF1ZXVlZE1lc3NhZ2VzW2lkXTtlbHNlIHtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5xdWV1ZWRNZXNzYWdlc1tpZF0gPSBxdWV1ZTtcbiAgICAgIH1cblxuICAgICAgcXVldWUucHVzaChtc2cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGFsbCBwb3NzaWJsZSBtZXNzYWdlcyBmcm9tIHRoZSBxdWV1ZS5cbiAgICAgKlxuICAgICAqIElmIGFueSBtZXNzYWdlcyBhcmUgZm91bmQgdG8gYmUgb2Jzb2xldGUgYmVmb3JlIHJlYWRpbmcgYSBhcHBsaWNhYmxlXG4gICAgICogbWVzc2FnZSwgZGlzY2FyZCB0aG9zZSBtZXNzYWdlcy5cbiAgICAgKlxuICAgICAqIE9uY2UgYW55IG1lc3NhZ2VzIGFyZSBhcHBsaWVkLCBJRiB0aGUgcXVldWUgaXMgZW1wdHkgZGVsZXRlIGl0J3MgbGlzdCBmcm9tXG4gICAgICogdGhpcy5xdWV1ZWRNZXNzYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoaXMgaXMgYSBzeW5rIG9iamVjdCB3aXRoIHVwZGF0ZShzdGF0ZSkgYW5kXG4gICAgICogICAgICAgIHRlYXJkb3duKCkgbWV0aG9kcy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYXBwbHlRdWV1ZWRNZXNzYWdlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5UXVldWVkTWVzc2FnZXMob2JqKSB7XG4gICAgICB2YXIgaWQgPSBvYmoua2V5IHx8IG9iai5pZDtcblxuICAgICAgaWYgKCF0aGlzLnF1ZXVlZE1lc3NhZ2VzLmhhc093blByb3BlcnR5KGlkKSkgcmV0dXJuO1xuICAgICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZWRNZXNzYWdlc1tpZF0uZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLnYgPiBvYmoudjtcbiAgICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEudiAtIGIudjtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnF1ZXVlZE1lc3NhZ2VzW2lkXSA9IHF1ZXVlO1xuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcXVldWUuZW50cmllcygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBfc3RlcCR2YWx1ZSA9IF9zbGljZWRUb0FycmF5KF9zdGVwLnZhbHVlLCAyKSxcbiAgICAgICAgICAgICAgaSA9IF9zdGVwJHZhbHVlWzBdLFxuICAgICAgICAgICAgICBtc2cgPSBfc3RlcCR2YWx1ZVsxXTtcblxuICAgICAgICAgIHZhciB0YXJnZXQgPSBvYmoudiArIDE7XG5cbiAgICAgICAgICBpZiAobXNnLnYgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhY3R1YWxseSBwcmV0dHkgc25lYWt5LiBOb3JtYWxseSB3ZSBjYW5ub3QgbW9kaWZ5IGFuIGFycmF5XG4gICAgICAgICAgICAvLyB3aGlsZSBpdGVyYXRpbmcgb3ZlciBpdC4gSG93ZXZlciwgaW4gdGhpcyBjYXNlIHdlIG9ubHkgcmVtb3ZlIHRoZVxuICAgICAgICAgICAgLy8gRklSU1QgbWF0Y2gsIGFuZCB0aGVuIGJyZWFrIG91dCBvZiB0aGUgbG9vcCAtLSBzbyBpdCBzaG91bGQgYmUgb2theS5cbiAgICAgICAgICAgIGlmIChtc2cubWV0aG9kID09PSAnbW9kJykgdGhpcy5tb2QobXNnKTtlbHNlIHRoaXMubW9kT2JqKG1zZyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtc2cudiA+PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHF1ZXVlLnNwbGljZSgwLCBpKTsgLy8gbGVhdmUgb25seSB1bmFwcGxpZWQgbWVzc2FnZXMuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdEQU5HRVI6IGZhaWxlZCB0byByZXBsYXkgYWxsIG1vZE9iaiBtZXNzYWdlczonLCBxdWV1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5xdWV1ZWRNZXNzYWdlc1tpZF07XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy9cbiAgICAvLyBOZXcgc3R5bGUgYWRkLCByZW0sIG1vZCBtZXRob2RzXG4gICAgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBvYmplY3QuIFR5cGljYWxseSBjYWxsZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHdoZW4gd2UgYWRkIGFuIG9iamVjdCwgdGhlIC5pZCAudCBhbmQgLnYgcHJvcGVydGllcyBhcmVcbiAgICAgKiBhdXRvbWF0aWNhbGx5IHNldC4gVGhlIE9iamVjdHMgY2xhc3MgZGVwZW5kcyBvbiB0aGVzZSBiZWluZyBhdmFpbGFibGVcbiAgICAgKiB3aGVuIHJlbW92aW5nIHRoZSBvYmplY3QsIHNvIHRoZXkgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkIGJ5IGNsaWVudCBjb2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZyAtIGNvbnRhaW5zIC52IC5pZCwgLnN0YXRlLCAuc0tleS4gVGhlIHByZXNlbmNlIG9mXG4gICAgICogICAgICAgIC5wc0tleSBpbmRpY2F0ZXMgdGhpcyBvYmplY3QgbW92ZWQgaGVyZSBmcm9tIGFub3RoZXIgY2h1bmsuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChtc2cpIHtcbiAgICAgIHZhciBfYnlLZXk2O1xuXG4gICAgICBpZiAodHlwZW9mIG1zZy5zS2V5ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgbXNnLmlkICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBpbnZhbGlkIGFkZCBtZXNzYWdlJywgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjaHVuayA9IHRoaXMuYnlTS2V5LmdldEJyYW5jaChtc2cuc0tleSk7XG4gICAgICB2YXIgY29sbGVjdGlvbiA9IChfYnlLZXk2ID0gdGhpcy5ieUtleSkuY3JlYXRlQnJhbmNoLmFwcGx5KF9ieUtleTYsIF90b0NvbnN1bWFibGVBcnJheShtc2cudC5zcGxpdCgnOicpKSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBzdWJzY3JpYmVkXG4gICAgICBpZiAoIWNodW5rKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUmVjZWl2ZWQgXCJhZGRcIiBtZXNzYWdlIGZyb20gdGhlIHNlcnZlciwgd2hpbGUgbm90ICcgKyAnc3Vic2NyaWJlZCB0byB0aGUgb2JqZWN0XFwncyBzdWJzY3JpcHRpb24ga2V5Jyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgdGhpcyBvYmplY3RcbiAgICAgIHZhciBvYmogPSBjb2xsZWN0aW9uLmdldExlYWYobXNnLmlkKTtcblxuICAgICAgaWYgKG9iaikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgc2VydmVyIHNlbnQgdXMgYW4gYWRkIG1lc3NhZ2UsIGJ1dCB3ZSBhbHJlZHkgaGFkICcgKyAoJ3RoZSBvYmplY3QgbG9jYWxseTogJyArIG1zZy5pZCkpO1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgd2UgcmVtb3ZlIGFuZCB0ZWFyZG93biBjIGludGVhZCBvZiB0aHJvd2luZyBhbiBlcnJvcj8/XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVE9ETzogcmVtb3ZlIGFuZCB0ZWFyZG93biBjJyk7XG4gICAgICB9XG5cbiAgICAgIG9iaiA9IG5ldyBjb2xsZWN0aW9uLmNsYXNzKG1zZy5pZCwgbXNnLnN0YXRlLCB0aGlzKTtcbiAgICAgIG9iai5pZCA9IG1zZy5pZDtcbiAgICAgIG9iai50ID0gbXNnLnQ7XG4gICAgICBvYmoudiA9IG1zZy52O1xuXG4gICAgICBjaHVuay5zZXRMZWFmKG1zZy5pZCwgb2JqKTtcbiAgICAgIGNvbGxlY3Rpb24uc2V0TGVhZihtc2cuaWQsIG9iaik7XG4gICAgICB0aGlzLmJ5SWRbb2JqLmlkXSA9IG9iajtcblxuICAgICAgdGhpcy5lbWl0KCdhZGQnLCBvYmosIG1zZyk7XG4gICAgICB0aGlzLmFwcGx5UXVldWVkTWVzc2FnZXMob2JqKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZyAtIG9iaiBjb250YWluaW5nIC5pZCAudCBhbmQgLnNLZXlcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtKG1zZykge1xuICAgICAgdmFyIF9ieUtleTc7XG5cbiAgICAgIGlmICh0eXBlb2YgbXNnLnNLZXkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtc2cuaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpdmVkIGludmFsaWQgcmVtT2JqIG1lc3NhZ2UnLCBtc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnRzID0gbXNnLnQuc3BsaXQoJzonKTtcbiAgICAgIHZhciBpZCA9IG1zZy5pZDtcbiAgICAgIHZhciBjaHVuayA9IHRoaXMuYnlTS2V5LmdldEJyYW5jaChtc2cuc0tleSk7IC8vIGN1cnJlbnQgY2h1bmtcbiAgICAgIHZhciBjb2xsZWN0aW9uID0gKF9ieUtleTcgPSB0aGlzLmJ5S2V5KS5nZXRCcmFuY2guYXBwbHkoX2J5S2V5NywgX3RvQ29uc3VtYWJsZUFycmF5KHBhcnRzKSk7XG4gICAgICB2YXIgb2JqID0gY29sbGVjdGlvbi5nZXRMZWFmKGlkKTtcblxuICAgICAgaWYgKGNodW5rKSBjaHVuay5yZW1vdmVMZWFmKG1zZy5pZCk7ZWxzZSBjb25zb2xlLmVycm9yKCdUcmllZCB0byByZW1vdmUgJyArIG1zZy5zS2V5ICsgJywgYnV0IGNvdWxkIG5vdCBmaW5kIG9iamVjdHMgYXQgJyArIHBhcnRzKTtcblxuICAgICAgaWYgKGNvbGxlY3Rpb24pIGNvbGxlY3Rpb24ucmVtb3ZlTGVhZihpZCk7ZWxzZSBjb25zb2xlLmVycm9yKCdUcmllZCB0byByZW1vdmUgJyArIGlkICsgJyBidXQgY291bGQgbm90IGZpbmQgJyArIHBhcnRzICsgJyBpbiAuYnlLZXknKTtcblxuICAgICAgZGVsZXRlIHRoaXMuYnlJZFtpZF07XG5cbiAgICAgIGlmIChvYmopIHtcbiAgICAgICAgdGhpcy5lbWl0KCdyZW0nLCBvYmosIG1zZyk7XG4gICAgICAgIG9iai50ZWFyZG93bigpO1xuICAgICAgfSBlbHNlIGNvbnNvbGUuZXJyb3IoJ0RBTkdFUjogVHJpZWQgdG8gcmVtb3ZlICcgKyBtc2cuaWQgKyAnLCBidXQgY291bGQgbm90IGZpbmQgb2JqZWN0Jyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbW9kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW9kKG1zZykge1xuICAgICAgdmFyIF9ieUtleTg7XG5cbiAgICAgIGlmICh0eXBlb2YgbXNnLnNLZXkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtc2cuaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpdmVkIGludmFsaWQgbW9kIG1lc3NhZ2UnLCBtc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGlkID0gbXNnLmlkO1xuICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0KGlkKTtcbiAgICAgIHZhciBjaHVuayA9IHRoaXMuYnlTS2V5LmdldEJyYW5jaChtc2cuc0tleSk7IC8vIGN1cnJlbnQgY2h1bmtcblxuICAgICAgLy8gRG8gc29tZSBzYW5pdHkgY2hlY2tzLi4uXG5cbiAgICAgIGlmICghb2JqKSB7XG4gICAgICAgIGlmIChjaHVuaykgdGhpcy5xdWV1ZU1lc3NhZ2UobXNnKTtlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGp1c3QgYSB3YXJuaW5nLCBiZWNhdXNlIGl0IHdpbGwganVzdCBoYXBwZW4gb2NjYXNpb25hbGx5LlxuICAgICAgICAgIGNvbnNvbGUud2FybignV2UgcmVjZWl2ZWQgYSBtb2RPYmogcmVxdWVzdC4gV2UgY291bGQgbm90IGZpbmQgdGhlICcgKyAoJ29iamVjdCBsb2NhbGx5OiAnICsgaWQgKyAnLiBBbmQgdGhlIG1lc3NhZ2UgdGFyZ2V0cyBhbiBTS2V5IHdlICcpICsgJ2FyZSBub3Qgc3Vic2NyaWJlZCB0bycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFydHMgPSBvYmoudC5zcGxpdCgnOicpO1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSAoX2J5S2V5OCA9IHRoaXMuYnlLZXkpLmNyZWF0ZUJyYW5jaC5hcHBseShfYnlLZXk4LCBfdG9Db25zdW1hYmxlQXJyYXkocGFydHMpKTtcblxuICAgICAgaWYgKGNodW5rLmdldExlYWYobXNnLmlkKSAhPT0gb2JqKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpdmVkIG1vZE9iai4gVGhlIG9iamVjdCB3YXMgZm91bmQgb24gdGhlICcgKyBwYXJ0cyArICcgJyArICgnY29sbGVjdGlvbiwgYnV0IG5vdCB0aGUgJyArIG1zZy5zS2V5ICsgJyBjaHVuay4nKSk7XG4gICAgICAgIC8vIEtlZXAgdHJ5aW5nIHRvIG1vdmUgdGhlIG9iamVjdC4uLlxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG1zZy52ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBtb2RPYmogbWVzc2FnZSB3aXRoIGEgYmFkIHZlcnNpb246ICcgKyBtc2cudik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGUgbWVzc2FnZSBpcyBhcnJpdmluZyBhdCB0aGUgcmlnaHQgdGltZS4gSWYgb3VyIG1lc3NhZ2VcbiAgICAgIC8vIGlzIG9ic29sZXRlLCBkaXNjYXJkIGl0LlxuICAgICAgaWYgKG1zZy52IDw9IG9iai52KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignRGlzY2FyZGVkIG9ic29sZXRlIG1lc3NhZ2U6JywgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtc2cudiA+IG9iai52ICsgMSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdEQU5HRVI6IE91dCBvZiBvcmRlciBtZXNzYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBhZnRlciByZWNlaWV2ZWluZyBhZGRPYmonLCBtc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgYXJlIGRlZmluaXRlbHkgZ29pbmcgdG8gbW9kaWZ5IHRoZSBvYmplY3QuIFdlIGtub3cgdGhhdCB0aGUgbXNnJ3NcbiAgICAgIC8vIHZlcnNpb24gaXMgZXhhY3RseSBvbmUgbW9yZSB0aGFuIHRoZSBvYmplY3QncyB2ZXJzaW9uLlxuICAgICAgb2JqLnYrKztcblxuICAgICAgLy8gQXQgdGhpcyBwb2ludCwgVGhlcmUgYXJlIDMgcG9zc2libGl0aWVzXG4gICAgICAvLyAtIHdlIGFyZSBtb3Zpbmcgd2l0aGluIGEgY2h1bmsuIEVhc3kgLS0ganVzdCB1cGRhdGVcbiAgICAgIC8vIC0gd2UgYXJlIG1vdmluZyB0byBhIG5ldyBjaHVuay4gUmVtb3ZlIHRoaXMgb25lIGNodW5rLCBhZGQgdG8gYW5vdGhlclxuICAgICAgLy8gLSB3ZSBhcmUgbW92aW5nIHRvIGEgY2h1bmssIGFuZCBhcmUgbm90IHN1YnNjcmliZWQgdG8gdGhhdCBjaHVua1xuXG4gICAgICAvLyBBcmUgd2UgbW9kaWZ5aW5nIHdpdGhpbiBhIGNodW5rP1xuICAgICAgaWYgKCFtc2cubnNLZXkpIHtcbiAgICAgICAgb2JqLnVwZGF0ZShtc2cuZGlmZik7XG4gICAgICAgIHRoaXMuZW1pdCgnbW9kJywgb2JqLCBtc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIG9iamVjdCBtdXN0IGJlIG1vdmVkIG91dCBvZiB0aGUgY3VycmVudCBjaHVuay4gSWYgd2UgYXJlIHN1YnNjcmliZWRcbiAgICAgIC8vIHRvIHRoZSBuZXcgY2h1bmssIG1vdmUgdGhlIG9iamVjdCB0aGVyZS4gSWYgd2UgYXJlIG5vdCBzdWJzY3JpYmVkLFxuICAgICAgLy8gcmVtb3ZlIGFuZCB0ZWFyZG93bigpIHRoZSBvYmplY3QuXG4gICAgICBjaHVuay5yZW1vdmVMZWFmKGlkKTtcblxuICAgICAgdmFyIG5ld0NodW5rID0gdGhpcy5ieVNLZXkuZ2V0QnJhbmNoKG1zZy5uc0tleSk7XG5cbiAgICAgIGlmIChuZXdDaHVuaykge1xuICAgICAgICBuZXdDaHVuay5zZXRMZWFmKGlkLCBvYmopO1xuICAgICAgICBvYmoudXBkYXRlKG1zZy5kaWZmKTtcbiAgICAgICAgdGhpcy5lbWl0KCdtb2QnLCBvYmosIG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsZWN0aW9uLnJlbW92ZUxlYWYoaWQpO1xuICAgICAgICB0aGlzLmVtaXQoJ3JlbScsIG9iaiwgbXNnKTtcbiAgICAgICAgb2JqLnRlYXJkb3duKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JqZWN0cztcbn0oX0VuZHBvaW50My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gT2JqZWN0cztcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlN5bmsgPSBleHBvcnRzLk9iamVjdHMgPSBleHBvcnRzLkJyYW5jaCA9IGV4cG9ydHMuRW5kcG9pbnQgPSBleHBvcnRzLkNvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29ubmVjdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29ubmVjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db25uZWN0aW9uKTtcblxudmFyIF9FbmRwb2ludCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfRW5kcG9pbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5kcG9pbnQpO1xuXG52YXIgX0JyYW5jaCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfQnJhbmNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JyYW5jaCk7XG5cbnZhciBfT2JqZWN0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfT2JqZWN0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PYmplY3RzKTtcblxudmFyIF9TeW5rID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIF9TeW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N5bmspO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkNvbm5lY3Rpb24gPSBfQ29ubmVjdGlvbjIuZGVmYXVsdDtcbmV4cG9ydHMuRW5kcG9pbnQgPSBfRW5kcG9pbnQyLmRlZmF1bHQ7XG5leHBvcnRzLkJyYW5jaCA9IF9CcmFuY2gyLmRlZmF1bHQ7XG5leHBvcnRzLk9iamVjdHMgPSBfT2JqZWN0czIuZGVmYXVsdDtcbmV4cG9ydHMuU3luayA9IF9TeW5rMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9PYmplY3RzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9PYmplY3RzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX09iamVjdHMpO1xuXG52YXIgX0Nvbm5lY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Nvbm5lY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29ubmVjdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogU3luayByZXByZXNlbnRzIGEgY29ubmVjdGlvbiB0byB0aGUgc3luayBzZXJ2ZXIuIEl0cyByZXNwb25zaWJpbGl0aWVzOlxuICogLSBjcmVhdGUgYSBjb25uZWN0aW9uIHRvIHRoZSBzZXJ2ZXJcbiAqIC0gdHJhY2sgYSBzZXQgb2Ygc3Vic2NyaXB0aW9ucyBrZXlzXG4gKiAtIHN0b3JlIG9iamVjdHMgcmV0cmlldmVkIGZyb20gdGhlIHNlcnZlclxuICpcbiAqIFRoZSBvYmplY3RzIHN0b3JlZCBpbiB0aGlzLm9iamVjdHMgd2lsbCBzdGF5IHVwLXRvLWRhdGUgd2l0aCB0aGUgY29waWVzIG9uXG4gKiB0aGUgc2VydmVyLlxuICovXG52YXIgU3luayA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBhcmcge3N0cmluZ30gdXJsIC0gdGhlIHdlYnNvY2tldCB1cmwgdG8gY29ubmVjdCB0b1xuICAgKi9cbiAgZnVuY3Rpb24gU3luayh1cmwpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN5bmspO1xuXG4gICAgdGhpcy5vYmplY3RzID0gbmV3IF9PYmplY3RzMi5kZWZhdWx0KCk7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IF9Db25uZWN0aW9uMi5kZWZhdWx0KHVybCk7XG5cbiAgICB0aGlzLm9iamVjdHMuc3Vic2NyaWJlKHRoaXMuY29ubmVjdGlvbi5zdHJlYW0pO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB7fTsgLy8gY3VycmVudGx5IGFjdGl2ZSBzdWJzY3JpcHRpb25zXG4gICAgdGhpcy5wZW5kaW5nQWRkID0ge307XG4gICAgdGhpcy5wZW5kaW5nUmVtb3ZlID0ge307XG5cbiAgICB0aGlzLmNvbm5lY3Rpb24ub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gT3VyIGNvbm5lY3Rpb24gaXMgY2xvc2VkLCBQcmVwYXJlIGZvciB0aGUgY29ubmVjdGlvbiB0byByZS1vcGVuLiBDYWNoZVxuICAgICAgLy8gdGhlIHN1YnNjcmlwdGlvbiBrZXlzIHdlIGFyZSBjdXJyZW50bHkgc3Vic2NyaWJlZCB0bywgYW5kIHRlYXJkb3duIGFsbFxuICAgICAgLy8gZXhpc3Rpbmcgb2JqZWN0cy5cbiAgICAgIHZhciBjdXJyZW50ID0gX3RoaXMuYWN0aXZlO1xuXG4gICAgICBfdGhpcy5vYmplY3RzLnVwZGF0ZUtleXMoe1xuICAgICAgICByZW1vdmU6IE9iamVjdC5rZXlzKF90aGlzLmFjdGl2ZSksXG4gICAgICAgIGFkZDogW11cbiAgICAgIH0pO1xuICAgICAgX3RoaXMuYWN0aXZlID0ge307XG5cbiAgICAgIC8vIFdoZW4gd2UgcmUtb3Blbiwgd2Ugd2FudCB0byByZS1zdWJzY3JpYmUgdG8gdGhlIGNvcnJlY3QgY29sbGVjdGlvbiBvZlxuICAgICAgLy8ga2V5cy4gUmVzb2x2ZSB0aGUgLnBlbmRpbmdBZGQgYW5kIC5wZW5kaW5nUmVtb3ZlIG9iamVjdHMuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gT2JqZWN0LmtleXMoX3RoaXMucGVuZGluZ1JlbW92ZSlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGtleSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkgZGVsZXRlIGN1cnJlbnRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gT2JqZWN0LmtleXMoX3RoaXMucGVuZGluZ0FkZClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgX2tleSA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICAgIGN1cnJlbnRbX2tleV0gPSB0cnVlO1xuICAgICAgICB9IC8vIFdlIGtub3cgdGhlIGNvbGxlY3Rpb24gb2Yga2V5cyB0aGF0IHdlIHdvdWxkIGxpa2UgdG8gYmUgc3Vic2NyaWJlZCB0by5cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMucGVuZGluZ0FkZCA9IGN1cnJlbnQ7XG4gICAgICBfdGhpcy5wZW5kaW5nUmVtb3ZlID0ge307XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbm5lY3Rpb24ub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5yZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBzZXQgb2Yga2V5cyB0aGF0IHdlIHdhbnQgdG8gc3Vic2NyaWJlIHRvLCBjYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2VcbiAgICogYmV0d2VlbiB0aGUgY3VycmVudGx5IGFjdGl2ZSBzdWJzY3JpcHRpb24gYW5kIHRoZSBuZXcgZGVzaXJlZCBzdWJzY3JpcHRpb24uXG4gICAqIFN0b3JlIHRoZSByZXN1bHQgaW4gdGhpcy5wZW5kaW5nQWRkIGFuZCB0aGlzLnBlbmRpbmdSZW1vdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgLSBhbGwgdGhlIGtleXMgdGhhdCB3ZSB3YW50IHRvIHN1YnNjcmliZSB0by5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU3luaywgW3tcbiAgICBrZXk6ICdzZXRTdWJzY3JpcHRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTdWJzY3JpcHRpb24oa2V5cykge1xuICAgICAgdGhpcy5wZW5kaW5nQWRkID0ge307XG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmUgPSB7fTtcblxuICAgICAgdmFyIG5ld0tleXMgPSB7fTtcblxuICAgICAgLy8gY29udmVydCBrZXlzIGFycmF5IHRvIG9iamVjdFxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBrZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGtleSA9IF9zdGVwMy52YWx1ZTtcbiAgICAgICAgICBuZXdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgICB9IC8vIGZvciBlYWNoIGN1cnJlbnQga2V5LCBjaGVjayBpZiB3ZSB3YW50IHRvIHVuc3Vic2NyaWJlXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I0ID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gT2JqZWN0LmtleXModGhpcy5hY3RpdmUpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA0OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gKF9zdGVwNCA9IF9pdGVyYXRvcjQubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGFjdGl2ZUtleSA9IF9zdGVwNC52YWx1ZTtcblxuICAgICAgICAgIGlmICghbmV3S2V5cy5oYXNPd25Qcm9wZXJ0eShhY3RpdmVLZXkpKSB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEga2V5IHRoYXQgd2UgZG8gbm90IHdhbnQuXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdSZW1vdmVbYWN0aXZlS2V5XSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9yIGVhY2ggbmV3IGtleSwgY2hlY2sgaWYgd2UgaGF2ZSB0byBhZGQgaXRcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjQgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjQgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgJiYgX2l0ZXJhdG9yNC5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjQucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjQpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjUgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjUgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjUgPSBrZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA1OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ID0gKF9zdGVwNSA9IF9pdGVyYXRvcjUubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIG5ld0tleSA9IF9zdGVwNS52YWx1ZTtcblxuICAgICAgICAgIGlmICghdGhpcy5hY3RpdmUuaGFzT3duUHJvcGVydHkobmV3S2V5KSkge1xuICAgICAgICAgICAgLy8gYSBrZXkgbmVlZHMgdG8gYmUgYWRkZWRcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0FkZFtuZXdLZXldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjUgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjUgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgJiYgX2l0ZXJhdG9yNS5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjUucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjUpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnkgdG8gcmVzb2x2ZSB0aGUgc3Vic2NyaXB0aW9uLiBJZiBzb2NrZXQgaXMgbm90IG9wZW4sIHRoaXMgd2lsbCBoYXZlIG5vXG4gICAgICogZWZmZWN0LiBOb3RlIHRoYXQgcmVzb2x2ZSBpcyBhbHdheXMgY2FsbGVkIHdoZW4gdGhlIGNvbm5lY3Rpb24gb3BlbnMgb3IgcmUtXG4gICAgICogb3BlbnMuXG4gICAgICogXG4gICAgICogQHJldHVybiB7Ym9vbH0gLSB0cnVlIGlmIHRoZSBtZXNzYWdlIHdhcyBzZW50IG9yIG5vIGNoYW5nZSBpcyBuZWVkZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVzb2x2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmUoKSB7XG4gICAgICB2YXIgbXNnID0ge1xuICAgICAgICBtZXRob2Q6ICd1cGRhdGVTdWJzY3JpcHRpb24nLFxuICAgICAgICBhZGQ6IE9iamVjdC5rZXlzKHRoaXMucGVuZGluZ0FkZCksXG4gICAgICAgIHJlbW92ZTogT2JqZWN0LmtleXModGhpcy5wZW5kaW5nUmVtb3ZlKVxuICAgICAgfTtcblxuICAgICAgLy8gSWYgbXNnLmFkZCBhbmQgbXNnLnJlbW92ZSBhcmUgZW1wdHksIG91ciBqb2IgaXMgZG9uZS5cbiAgICAgIGlmIChtc2cuYWRkLmxlbmd0aCA9PT0gMCAmJiBtc2cucmVtb3ZlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG5cbiAgICAgIC8vIElmIHRoZSBjb25uZWN0aW9uIGlzIG5vdCBvcGVuLCBkbyBub3RoaW5nICh3YWl0IGZvciBvcGVuIGV2ZW50KVxuICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbi5zdGF0ZSAhPT0gMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gVGhlIGNvbm5lY3Rpb24gaXMga25vd24gdG8gYmUgb3BlblxuXG4gICAgICB0aGlzLm9iamVjdHMudXBkYXRlS2V5cyhtc2cpO1xuICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQobXNnKTtcblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjYgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjYgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjYgPSBtc2cuYWRkW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA2OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gKF9zdGVwNiA9IF9pdGVyYXRvcjYubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGtleSA9IF9zdGVwNi52YWx1ZTtcblxuICAgICAgICAgIHRoaXMuYWN0aXZlW2tleV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3I2ID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ICYmIF9pdGVyYXRvcjYucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3I2LnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I2KSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I3ID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I3ID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I3ID0gbXNnLnJlbW92ZVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyA9IChfc3RlcDcgPSBfaXRlcmF0b3I3Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb243ID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBfa2V5MiA9IF9zdGVwNy52YWx1ZTtcblxuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZS5oYXNPd25Qcm9wZXJ0eShfa2V5MikpIGRlbGV0ZSB0aGlzLmFjdGl2ZVtfa2V5Ml07XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjcgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjcgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgJiYgX2l0ZXJhdG9yNy5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjcucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjcpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5wZW5kaW5nQWRkID0ge307XG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmUgPSB7fTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN5bms7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN5bms7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bmstanMvZGlzdC9zeW5rLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgJy4vanMvc3RhcnQuanMnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGRpdiB7cGFkZGluZzogMDsgbWFyZ2luOiAwfVxcblxcbmh0bWwge1xcbiAgLyogUHJldmVudCB1cyBmcm9tIGJlaW5nIGFibGUgdG8gc2Nyb2xsIHBhc3QgdGhlIGVuZCBvZlxcbiAgdGhlIHBhZ2UgKi9cXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXFxufVxcblxcbiNyb290IHtcXG4gIGNvbG9yOiAjMDgwMDdFO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gTGlicmFyaWVzXG5pbXBvcnQgRW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCBLZWZpciBmcm9tICdrZWZpcic7XG5cbi8vIExvY2FsXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLmpzJztcblxuLy8gTGlic1xud2luZG93LktlZmlyID0gS2VmaXI7XG53aW5kb3cuRW1pdHRlciA9IEVtaXR0ZXI7XG5cbi8vIEFldGhlciBMaWJzXG53aW5kb3cuQXBwID0gQXBwO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBhcHAgPSB3aW5kb3cuYXBwID0gbmV3IEFwcCgpO1xuXG4gIGFwcC5zeW5rLnNldFN1YnNjcmlwdGlvbihbJ2V0ZXJuYWw6bWFpbicsICdldGVybmFsOm90aGVyJ10pO1xuICBhcHAuc3luay5yZXNvbHZlKCk7XG59O1xuXG5jb25zdCBwcmV2ZW50Q29udGV4dE1lbnUgPSAoKSA9PiB7XG4gIHdpbmRvdy5vbmNvbnRleHRtZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc3RhcnQuanMiLCJpbXBvcnQgeyBPYmplY3RzLCBDb25uZWN0aW9uLCBTeW5rIH0gIGZyb20gJ3N5bmstanMnO1xuaW1wb3J0IEFwcEVuZHBvaW50IGZyb20gJy4vQXBwRW5kcG9pbnQuanMnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9Ob3RlLmpzJztcblxuLyoqXG4qIEhpZ2ggbGV2ZWwgQWV0aGVyIEFwcGxpY2F0aW9uXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgLyoqXG4gICogQ3JlYXRlIGFuIEFwcFxuICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBodHRwcyA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwcycpO1xuICAgIGNvbnN0IHVybCA9ICBgJHtodHRwcyA/ICd3c3MnIDogJ3dzJ306Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS93c2A7XG5cbiAgICB0aGlzLnN5bmsgPSBuZXcgU3luayh1cmwpO1xuICAgIHRoaXMuZW5kcG9pbnQgPSBuZXcgQXBwRW5kcG9pbnQodGhpcyk7XG5cbiAgICAvLyBBbGwgbWVzc2FnZXMgZnJvbSB0aGUgc2VydmVyIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBlbmRwb2ludC4gVGhhbmtzIHRvXG4gICAgLy8gdGhlIGNvbm5lY3Rpb24gb2JqZWN0LCBldmVuIGlmIHdlIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdCwgaW5jb21pbmdcbiAgICAvLyBtZXNzYWdlcyB3aWxsIHN0aWxsIGJlIHBhc3NlZCB0aHJvdWdoIHRvIHRoaXMuZW5kcG9pbnQuXG4gICAgdGhpcy5lbmRwb2ludC5zdWJzY3JpYmUodGhpcy5zeW5rLmNvbm5lY3Rpb24uc3RyZWFtKTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBjbGFzcyBmb3IgQ2hhcmFjdGVyc1xuICAgIHRoaXMuc3luay5vYmplY3RzLmJ5S2V5LmNyZWF0ZUJyYW5jaCgnbicpLmNsYXNzID0gTm90ZTtcblxuICAgIC8vIFdlIGNvdWxkIHJlcGxhY2UgJ2Nsb3NlJyB3aXRoIHJlY29ubmVjdCdcbiAgICB0aGlzLnN5bmsuY29ubmVjdGlvbi5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdGlvbiBjbG9zZSBieVNLZXkuYnJhbmNoZXM6JywgT2JqZWN0LmtleXModGhpcy5zeW5rLm9iamVjdHMuYnlTS2V5LmJyYW5jaGVzKSk7XG4gICAgfSk7XG4gICAgdGhpcy5zeW5rLmNvbm5lY3Rpb24ub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdGlvbiBvcGVuIGJ5U0tleS5icmFuY2hlczogJywgT2JqZWN0LmtleXModGhpcy5zeW5rLm9iamVjdHMuYnlTS2V5LmJyYW5jaGVzKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9BcHAuanMiLCJpbXBvcnQgeyBFbmRwb2ludCB9IGZyb20gJ3N5bmstanMnO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIG1haW4gaW50ZXJmYWNlIHRoYXQgcmVjZWl2ZXMgUlBDcyBmcm9tIHRoZSBzZXJ2ZXIuIEFwcEVuZHBvaW50XG4gKiBtdXN0IGJlIGNyZWF0ZWQgYnkgYW4gQXBwIGluc3RhbmNlIGluIHRoZSBBcHAgY29uc3RydWN0b3IuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEVuZHBvaW50IGV4dGVuZHMgRW5kcG9pbnQge1xuICAvKipcbiAgICogQHBhcmFtIHtBcHB9IGFwcCAtIFRoZSBhZXRoZXIgYXBwIHRoYXQgd2UgYXJlIGxpc3RlbmluZyB0b1xuICAgKi9cbiAgY29uc3RydWN0b3IoYXBwKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0FwcEVuZHBvaW50LmpzIiwiLyoqXG4gKiBFeGFtcGxlIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBwcm92aWRlZCBieSBzeW5rIHNlcnZlclxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgLSBpbml0aWFsIHN0YXRlIHByb3ZpZGVkIGJ5IHN5bmsgc2VydmVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihrZXksIHN0YXRlLCBzeW5rT2JqZWN0cykge1xuICAgIHRoaXMuZWxlbWVudFByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgIHRoaXMuZWxlbWVudENvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2RlJyk7XG4gICAgdGhpcy5lbGVtZW50UHJlLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudENvZGUpO1xuICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IGtleSwgdHlwZTogJ05vdGUnIH07XG5cbiAgICAvLyBTZXQgYW55IGFkZGl0aW9uYWwgcHJvcGVydGllcyBwcm92aWRlZCBieSB0aGUgJ3N0YXRlJyBhcmd1bWVudFxuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnVwZGF0ZShzdGF0ZSk7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UHJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgLSBkaWZmIHBhc3NlZCBieSB0aGUgc3luayBzZXJ2ZXJcbiAgICovXG4gIHVwZGF0ZShzdGF0ZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgc3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudENvZGUuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSwgbnVsbCwgJyAgJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhpcyBvYmplY3QgbGVhdmVzIG91ciBzdWJzY3JpcHRpb24gYXJlYSwgb3IgaXMgcmVtb3ZlZCBmcm9tXG4gICAqIHRoZSBzeW5rIHNlcnZlci5cbiAgICovXG4gIHRlYXJkb3duKCkge1xuICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFByZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9Ob3RlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==