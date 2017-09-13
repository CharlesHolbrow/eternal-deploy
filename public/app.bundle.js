webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(1), __webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define([, ], factory);
	else if(typeof exports === 'object')
		exports["synk"] = factory(require("kefir"), require("eventemitter3"));
	else
		root["synk"] = factory(root[undefined], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

var _eventemitter = __webpack_require__(6);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _kefir = __webpack_require__(1);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kefir = __webpack_require__(1);

var _kefir2 = _interopRequireDefault(_kefir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Base for classes that respond to a stream.
*
* Extending Endpoint give us the ability make remote proceedure calls on class
* instances by sending msg objects to a Kefir.stream. Extension classes define
* methods that can be called by sending messages to the stream.
*
* An endpoint instance may only listen to one class at a time
*/
var Endpoint = function () {
  /**
  * Create an Endpoint. Usually this will be called via super()
  */
  function Endpoint() {
    _classCallCheck(this, Endpoint);

    this._subsciption = null;
    this._inputStream = null;
    this._unhandledStream = null;
    this.unhandled = new _kefir2.default.Pool();
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
      var _this = this;

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
        return typeof _this[msg.method] === 'function';
      }).observe({
        value: function value(msg) {
          _this[msg.method](msg);
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
        return typeof _this[msg.method] !== 'function';
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
}();

exports.default = Endpoint;

/***/ }),
/* 3 */
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
  function Leaf() {
    _classCallCheck(this, Leaf);
  }

  _createClass(Leaf, [{
    key: 'update',

    /**
     * Update is called when the server changes the object
     * @param {object} diff - changes to be applied to the object
     */
    value: function update(diff) {
      Object.assign(this, diff);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Endpoint2 = __webpack_require__(2);

var _Endpoint3 = _interopRequireDefault(_Endpoint2);

var _Branch = __webpack_require__(3);

var _Branch2 = _interopRequireDefault(_Branch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Store a collection of objects that will be synchronized with the server
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
          var parts = leaf.key.split(':');
          var id = parts.pop();
          var collection = (_byKey = _this2.byKey).getBranch.apply(_byKey, _toConsumableArray(parts));

          // If the collection doesn't exist, we have bug
          if (collection) collection.removeLeaf(id);else console.error('Unsubscribed from chunk, but collection not found: ' + parts.join(':'));

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
     * Note that when we add an object, the .id and .key properties are
     * automatically set. The Objects class depends on these being available
     * when removing the object, so they should not be changed by client code.
     *
     * @param {Object} msg - contains .key, .state, .sKey. Optional .psKey
     *        indicates object moved here from another chunk.
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

      // Check if we already have this object
      var obj = collection.getLeaf(id);

      if (obj) {
        console.error('The server sent us an addObj message, but we alredy had ' + ('the object locally: ' + msg.key));
        throw new Error('TODO: remove and teardown c'); // TODO: remove and teardown c intead of throwing an error
      }

      obj = new collection.class(msg.key, msg.state);
      obj.id = id;
      obj.key = msg.key;

      chunk.setLeaf(msg.key, obj);
      collection.setLeaf(id, obj);
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
        console.error('We received a modObj request, but could not find the ' + ('object locally: ' + msg.key));

        return;
      }

      if (chunk.getLeaf(msg.key) !== obj) {
        console.error('Received modObj. The object was found on the ' + parts + ' ' + ('collection, but not the ' + msg.sKey + ' chunk.'));
        // Keep trying to move the object...
      }

      // Are we modifying within a chunk?
      if (!msg.nsKey) {
        obj.update(msg.diff);

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
      } else {
        collection.removeLeaf(id);
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

      if (obj) obj.teardown();else console.error('DANGER: Tried to remove ' + msg.key + ', but could not find object');
    }
  }]);

  return Objects;
}(_Endpoint3.default);

exports.default = Objects;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Synk = exports.Objects = exports.Branch = exports.Endpoint = exports.Connection = undefined;

var _Connection = __webpack_require__(0);

var _Connection2 = _interopRequireDefault(_Connection);

var _Endpoint = __webpack_require__(2);

var _Endpoint2 = _interopRequireDefault(_Endpoint);

var _Branch = __webpack_require__(3);

var _Branch2 = _interopRequireDefault(_Branch);

var _Objects = __webpack_require__(4);

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
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Objects = __webpack_require__(4);

var _Objects2 = _interopRequireDefault(_Objects);

var _Connection = __webpack_require__(0);

var _Connection2 = _interopRequireDefault(_Connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Synk wraps a connection and an Objects subscription.
 */
var Synk = function () {
  /**
   * @arg {string} url - the websocket url to connect to
   * @arg {[class]} webSocketStub - optional class to use instead of WebSocket.
   *      Useful for testing inside of Node.js. Probably not needed in an
   *      application.
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

      // When we re-open, we want to re-subscribe to correct collection of keys.
      // Resolve the .pendingAdd and .pendingRemove objects.
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
     * Try to resolve the subscription. If the subscription message is not sent
     * successfully, it will be sent when the connection re-opens.
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
exports.push([module.i, "html, div {padding: 0; margin: 0}\n\nhtml {\n  /* Prevent us from being able to scroll past the end of\n  the page */\n  overflow: hidden;\n}\n\ndiv.pane {\n  /*\n  position: absolute is relative to the nearest non-static ancestor.\n  position: fixed is relative to theviewport. \n\n  The default position is 'static' so we have to make the\n  parent be non-static for inner divs to work as desired\n  */\n  position: absolute; \n  box-sizing: border-box;\n}\n\n#full {\n  border: 3px solid blue;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n#main-view {\n  width: 100%;\n  height: 100%;\n  /* If we leave the parent position in the default 'static'\n  setting this to absolute will not work */\n}\n\n#side {\n  width: 0%;\n  height: 100%;\n  right: 0;\n}\n\n#main-view canvas {\n  width: 100%;\n  height: 100%;\n  /* I'm not sure if pixi will do this for us or not, but we\n  want to prevent the user from selecting the canvas */\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", ""]);

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

  app.synk.setSubscription(['eternal:main']);
  app.synk.resolve();
};

window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();

  return false;
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
  function Note(key, state) {
    _classCallCheck(this, Note);

    this.elementPre = document.createElement('pre');
    this.elementCode = document.createElement('code');
    this.elementPre.appendChild(this.elementCode);

    this.state = { key: key, type: 'Note' };

    // Set any additional properties provided by the 'state' argument
    if (state !== undefined) this.update(state);
    document.body.appendChild(this.elementPre);
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
     * Called when this object leaves our subscription area, or is removed from the synk server
     */

  }, {
    key: 'teardown',
    value: function teardown() {
      document.body.removeChild(this.elementPre);
    }
  }]);

  return Note;
}();

exports.default = Note;

/***/ })
],[3]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3luay1qcy9kaXN0L3N5bmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcz9hM2I0Iiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FwcEVuZHBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ob3RlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIktlZmlyIiwiRW1pdHRlciIsIkFwcCIsIm9ubG9hZCIsImFwcCIsInN5bmsiLCJzZXRTdWJzY3JpcHRpb24iLCJyZXNvbHZlIiwib25jb250ZXh0bWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJodHRwcyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJzdGFydHNXaXRoIiwidXJsIiwiaG9zdCIsImVuZHBvaW50Iiwic3Vic2NyaWJlIiwiY29ubmVjdGlvbiIsInN0cmVhbSIsIm9iamVjdHMiLCJieUtleSIsImNyZWF0ZUJyYW5jaCIsImNsYXNzIiwib24iLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImJ5U0tleSIsImJyYW5jaGVzIiwiQXBwRW5kcG9pbnQiLCJOb3RlIiwia2V5Iiwic3RhdGUiLCJlbGVtZW50UHJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudENvZGUiLCJhcHBlbmRDaGlsZCIsInR5cGUiLCJ1bmRlZmluZWQiLCJ1cGRhdGUiLCJib2R5IiwiYXNzaWduIiwiaW5uZXJUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVB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Q3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Ozs7Ozs7Ozs7OztBQ1ByQjs7Ozs7Ozs7QUFFQTs7OztJQUlxQitCLFc7OztBQUNuQjs7O0FBR0EsdUJBQVk3QixHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBRWYsVUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBRmU7QUFHaEI7Ozs7O2tCQVBrQjZCLFc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7SUFHcUJDLEk7QUFDbkI7Ozs7QUFJQSxnQkFBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0MsVUFBTCxHQUFrQkMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJGLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbkI7QUFDQSxTQUFLRixVQUFMLENBQWdCSSxXQUFoQixDQUE0QixLQUFLRCxXQUFqQzs7QUFFQSxTQUFLSixLQUFMLEdBQWEsRUFBRUQsUUFBRixFQUFPTyxNQUFNLE1BQWIsRUFBYjs7QUFFQTtBQUNBLFFBQUlOLFVBQVVPLFNBQWQsRUFBeUIsS0FBS0MsTUFBTCxDQUFZUixLQUFaO0FBQ3pCRSxhQUFTTyxJQUFULENBQWNKLFdBQWQsQ0FBMEIsS0FBS0osVUFBL0I7QUFDRDs7QUFFRDs7Ozs7OzsyQkFHT0QsSyxFQUFPO0FBQ1pQLGFBQU9pQixNQUFQLENBQWMsS0FBS1YsS0FBbkIsRUFBMEJBLEtBQTFCO0FBQ0EsV0FBS0ksV0FBTCxDQUFpQk8sU0FBakIsR0FBNkJDLEtBQUtDLFNBQUwsQ0FBZSxLQUFLYixLQUFwQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQyxDQUE3QjtBQUNEOztBQUVEOzs7Ozs7K0JBR1c7QUFDVEUsZUFBU08sSUFBVCxDQUFjSyxXQUFkLENBQTBCLEtBQUtiLFVBQS9CO0FBQ0Q7Ozs7OztrQkE5QmtCSCxJIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJrZWZpclwiKSwgcmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoWywgXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzeW5rXCJdID0gZmFjdG9yeShyZXF1aXJlKFwia2VmaXJcIiksIHJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzeW5rXCJdID0gZmFjdG9yeShyb290W3VuZGVmaW5lZF0sIHJvb3RbdW5kZWZpbmVkXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXZlbnRlbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxudmFyIF9ldmVudGVtaXR0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRlbWl0dGVyKTtcblxudmFyIF9rZWZpciA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfa2VmaXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2VmaXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIEhvdyBsb25nIGRvIHdlIHdhaXQgYmVmb3JlIHJldHJ5aW5nIGEgY29ubmVjdGlvblxudmFyIFRJTUVPVVQgPSA1MDA7XG5cbi8qKlxuKiBXcmFwIGEgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIHNlcnZlclxuKi9cblxudmFyIENvbm5lY3Rpb24gPSBmdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgX2luaGVyaXRzKENvbm5lY3Rpb24sIF9FbWl0dGVyKTtcblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgYSBjb25uZWN0aW9uLlxuICAqXG4gICogRXZlbnRzXG4gICogLSAnY29ubmVjdCcgLSBmaXJlZCB0aGUgZmlyc3QgdGltZSBhIGNvbm5lY3Rpb24gb3BlbnMgc3VjY2Vzc2Z1bGxseVxuICAqIC0gJ3JlY29ubmVjdCcgLSBmaXJlZCB3aGVuIHN1YnNlcXVlbmN0IGNvbm5lY3Rpb25zIG9wZW5cbiAgKiAtICdvcGVuJyAtIGZpcmVkIHdoZW4gYW55IGNvbm5lY3Rpb24gb3BlbnNcbiAgKiAtICdjbG9zZScgLSBmaXJlZCB3aGVuIGFueSBjb25uZWN0aW9uIGNsb3Nlc1xuICAqIC0gJ3NlbmRFcnJvcicgKG1lc3NhZ2UpIC0gd2UgdHJpZWQgdG8gc2VuZCwgYnV0IHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZFxuICAqXG4gICogQGFyZyB7c3RyaW5nfSB1cmwgLSB3ZWJzb2NrZXQgdXJsIHRvIGNvbm5lY3QgdG9cbiAgKi9cbiAgZnVuY3Rpb24gQ29ubmVjdGlvbih1cmwpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdGlvbik7XG5cbiAgICAvKipcbiAgICAqIEBtZW1iZXIge3VybH0gc3RyaW5nIC0gdGhlIHVybCB3ZSBjb25uZWN0IHRvIG9uIHRoZSBuZXh0IGNvbm5lY3Rpb25cbiAgICAqL1xuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb25uZWN0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29ubmVjdGlvbikpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMudXJsID0gdXJsO1xuXG4gICAgLyoqXG4gICAgKiBAbWVtYmVyIHtLZWZpci5zdHJlYW19IC0gc3RyZWFtIG9mIG1lc3NhZ2VzIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlclxuICAgICogQHJlYWRvbmx5XG4gICAgKi9cbiAgICBfdGhpcy5zdHJlYW0gPSBfa2VmaXIyLmRlZmF1bHQuZnJvbUV2ZW50cyhfdGhpcywgJ21lc3NhZ2UnKTtcblxuICAgIC8qKlxuICAgICogQG1lbWJlciB7V2ViU29ja2V0fSAtIFRoZSBjdXJyZW50IHNvY2tldCBvYmplY3RcbiAgICAqIEByZWFkb25seVxuICAgICovXG4gICAgX3RoaXMuc29jayA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtLZWZpci5zdHJlYW19IC0gZXZlbnQgZWFjaCB0aW1lIHRoZSBjb25uZWN0aW9uIGlzIG9wZW5lZFxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIF90aGlzLm9wZW5TdHJlYW0gPSBfa2VmaXIyLmRlZmF1bHQuZnJvbUV2ZW50cyhfdGhpcywgJ29wZW4nKTtcblxuICAgIF90aGlzLl9jb25uZWN0aW9uQ291bnQgPSAwO1xuICAgIF90aGlzLl9sb2cgPSBbXTtcbiAgICBfdGhpcy5fbWVzc2FnZVF1ZSA9IFtdO1xuICAgIF90aGlzLl9jb25uZWN0KCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICogQ29ubmVjdCBhbmQgc3RheSBjb25uZWN0ZWQuIFRoaXMgaXMgY2FsbGVkIG9uY2UgYnkgdGhlIGNvbnN0cnVjdG9yLiBJdFxuICAqIHNob3VsZCBub3QgYmUgY2FsbGVkIGFnYWluIG1hbnVhbGx5LlxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENvbm5lY3Rpb24sIFt7XG4gICAga2V5OiAnX2Nvbm5lY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY29ubmVjdCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmxvZygnY29ubmVjdGluZy4uLicpO1xuICAgICAgdGhpcy5zb2NrID0gbmV3IFdlYlNvY2tldCh0aGlzLnVybCk7XG5cbiAgICAgIHZhciByZWNvbm5lY3QgPSBmdW5jdGlvbiByZWNvbm5lY3QoKSB7XG4gICAgICAgIF90aGlzMi5sb2coJ1dhaXRpbmcgdG8gcmVjb25uZWN0Li4uJyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fY29ubmVjdCgpO1xuICAgICAgICB9LCBUSU1FT1VUKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc29jay5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIF90aGlzMi5sb2coWydzb2NrZXQgZXJyb3InLCBlcnJvcl0pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLmxvZygnY29ubmVjdGlvbiBvcGVuZWQnKTtcbiAgICAgICAgX3RoaXMyLnNvY2sub25tZXNzYWdlID0gZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICBfdGhpczIuZW1pdCgnbWVzc2FnZScsIEpTT04ucGFyc2UobS5kYXRhKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMyLl9jb25uZWN0aW9uQ291bnQgKz0gMTtcbiAgICAgICAgaWYgKF90aGlzMi5fY29ubmVjdGlvbkNvdW50ID09PSAxKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgdGltZSBjb25uZWN0aW5nLCBzZW5kIHF1ZWQgbWVzc2FnZXNcbiAgICAgICAgICB3aGlsZSAoX3RoaXMyLl9tZXNzYWdlUXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgX3RoaXMyLnNlbmQoX3RoaXMyLl9tZXNzYWdlUXVlWzBdKTtcbiAgICAgICAgICAgIF90aGlzMi5fbWVzc2FnZVF1ZS5zaGlmdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpczIuZW1pdCgnY29ubmVjdCcpO1xuICAgICAgICB9IGVsc2UgX3RoaXMyLmVtaXQoJ3JlY29ubmVjdCcpO1xuXG4gICAgICAgIF90aGlzMi5lbWl0KCdvcGVuJyk7XG4gICAgICB9O1xuXG4gICAgICAvLyBUaGlzIGZpcmVzIGlmIGV2ZW4gaWYgdGhlIGNvbm5lY3Rpb24gd2FzIG5ldmVyIG9wZW5lZC4gRm9yIGV4YW1wbGUsIGlmXG4gICAgICAvLyB0aGUgc2VydmVyIGlzIGRvd24gd2hlbiB3ZSBmaXJzdCBjb25uZWN0LCBvbmNsb3NlIHdpbGwgc3RpbGwgZmlyZS5cbiAgICAgIHRoaXMuc29jay5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIubG9nKCdjbG9zZScpO1xuICAgICAgICBfdGhpczIuZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgcmVjb25uZWN0KCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGFyZyB7YW55dGhpbmd9IHZhbHVlIC0gQWRkIGFueSB2YWx1ZSB0byB0aGlzIGNvbm5lY3Rpb24ncyBpbnRlcm5hbCBsb2dcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsb2cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2codmFsdWUpIHtcbiAgICAgIHRoaXMuX2xvZy5wdXNoKHZhbHVlKTtcbiAgICAgIHRoaXMuZW1pdCgnbG9nJywgdmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2xvZy5sZW5ndGggPiAyMDApIHRoaXMuX2xvZy5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0IHRoZSBSZWFkeSBTdGF0ZSBDb25zdGFudCBvZiB0aGUgY3VycmVudCBzb2NrZXQuIE9uZSBvZiB0aGUgZm9sbG93aW5nIGludHM6XG4gICAgKiAwIC0gQ09OTkVDVElORyBUaGUgY29ubmVjdGlvbiBpcyBub3QgeWV0IG9wZW4uXG4gICAgKiAxIC0gT1BFTiBUaGUgY29ubmVjdGlvbiBpcyBvcGVuIGFuZCByZWFkeSB0byBjb21tdW5pY2F0ZS5cbiAgICAqIDIgLSBDTE9TSU5HIFRoZSBjb25uZWN0aW9uIGlzIGluIHRoZSBwcm9jZXNzIG9mIGNsb3NpbmcuXG4gICAgKiAzIC0gQ0xPU0VEIFRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZCBvciBjb3VsZG4ndCBiZSBvcGVuZWQuXG4gICAgKlxuICAgICogQHJldHVybnMge251bWJlcn0gLSBSZWFkeSBTdGF0ZSBDb25zdGFudFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NlbmQnLFxuXG5cbiAgICAvKipcbiAgICAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBzZXJ2ZXIuIElmIHRoZSBjb25uZWN0aW9uIGlzIG5vdCB5ZXQgb3BlbiwgcXVlIHRoZVxuICAgICogbWVzc2FnZSB0byBiZSBzZW50IG9uY2UgdGhlIGNvbm5lY3Rpb24gZG9lcyBvcGVuLlxuICAgICpcbiAgICAqIEBhcmcge09iamVjdHxTdHJpbmd9IG1lc3NhZ2UgLSBKU09OIG9iamVjdCBvciBzdHJpbmcgdG8gc2VuZCB0byB0aGUgc2VydmVyLlxuICAgICogQHJldHVybnMge2Jvb2x8bnVsbH0gLSB0cnVlIGlmIHRoZSBtZXNzYWdlIHdhcyBzZW50IHN1Y2Nlc3NmdWxseS4gbnVsbCBpZiB0aGVcbiAgICAqICAgICAgICAgIG1lc3NhZ2Ugd2FzIHF1ZWQgdG8gYmUgc2VudCBsYXRlci4gRmFsc2UgaWYgc2VuZCBmYWlsZWQuXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChtZXNzYWdlKSB7XG4gICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnKSBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSAxKSB7XG4gICAgICAgIC8vIFdlIGFyZSBjb25uZWN0ZWRcbiAgICAgICAgdGhpcy5zb2NrLnNlbmQobWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGFyZSBub3QgY29ubmVjdGVkXG4gICAgICBpZiAodGhpcy5fY29ubmVjdGlvbkNvdW50ID09PSAwKSB7XG4gICAgICAgIC8vIFdlIGhhdmUgbmV2ZXIgYmVlbiBjb25uZWN0ZWRcbiAgICAgICAgdGhpcy5fbWVzc2FnZVF1ZS5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmxvZyhbJ21lc3NhZ2UgcXVlZCcsIG1lc3NhZ2VdKTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgdHJpZWQgdG8gc2VuZCwgYnV0IHRoZSBjb25uZWN0aW9uIHdhcyBicm9rZW5cbiAgICAgIHRoaXMubG9nKHsgcmVhc29uOiAnc2VuZCBmYWlsZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiB3YXMgYnJva2VuOicsIG1zZzogbWVzc2FnZSB9KTtcbiAgICAgIHRoaXMubG9nKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5lbWl0KCdzZW5kRXJyb3InLCBtZXNzYWdlKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0YXRlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICghdGhpcy5zb2NrKSByZXR1cm4gMztcblxuICAgICAgcmV0dXJuIHRoaXMuc29jay5yZWFkeVN0YXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25uZWN0aW9uO1xufShfZXZlbnRlbWl0dGVyMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29ubmVjdGlvbjtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2tlZmlyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9rZWZpcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZWZpcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuKiBCYXNlIGZvciBjbGFzc2VzIHRoYXQgcmVzcG9uZCB0byBhIHN0cmVhbS5cbipcbiogRXh0ZW5kaW5nIEVuZHBvaW50IGdpdmUgdXMgdGhlIGFiaWxpdHkgbWFrZSByZW1vdGUgcHJvY2VlZHVyZSBjYWxscyBvbiBjbGFzc1xuKiBpbnN0YW5jZXMgYnkgc2VuZGluZyBtc2cgb2JqZWN0cyB0byBhIEtlZmlyLnN0cmVhbS4gRXh0ZW5zaW9uIGNsYXNzZXMgZGVmaW5lXG4qIG1ldGhvZHMgdGhhdCBjYW4gYmUgY2FsbGVkIGJ5IHNlbmRpbmcgbWVzc2FnZXMgdG8gdGhlIHN0cmVhbS5cbipcbiogQW4gZW5kcG9pbnQgaW5zdGFuY2UgbWF5IG9ubHkgbGlzdGVuIHRvIG9uZSBjbGFzcyBhdCBhIHRpbWVcbiovXG52YXIgRW5kcG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAqIENyZWF0ZSBhbiBFbmRwb2ludC4gVXN1YWxseSB0aGlzIHdpbGwgYmUgY2FsbGVkIHZpYSBzdXBlcigpXG4gICovXG4gIGZ1bmN0aW9uIEVuZHBvaW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbmRwb2ludCk7XG5cbiAgICB0aGlzLl9zdWJzY2lwdGlvbiA9IG51bGw7XG4gICAgdGhpcy5faW5wdXRTdHJlYW0gPSBudWxsO1xuICAgIHRoaXMuX3VuaGFuZGxlZFN0cmVhbSA9IG51bGw7XG4gICAgdGhpcy51bmhhbmRsZWQgPSBuZXcgX2tlZmlyMi5kZWZhdWx0LlBvb2woKTtcbiAgfVxuXG4gIC8qKlxuICAqIExpc3RlbiBmb3IgaW5jb21pbmcgcnBjIGNhbGxzIG9uIGEgc3RyZWFtLiBBIGNsYXNzIGluc3RhbmNlIG1heSBvbmx5IGxpc3RlblxuICAqIHRvIG9uZSBzdHJlYW0gYXQgYSB0aW1lLiBUbyB1bnN1YnNjcmliZSBmcm9tIHRoZSBjdXJyZW50IHN0cmVhbSBjYWxsXG4gICogc3Vic2NyaWJlKCkgd2l0aCBubyBhcmd1bWVudFxuICAqXG4gICogQGFyZyB7W0tlZmlyLnN0cmVhbV19IHN0cmVhbSAtIHRoZSBzdHJlYW0gdG8gc3Vic2NyaWJlIHRvLiBJZiB3ZSBhcmVcbiAgKiAgICAgIHN1YnNjcmliZWQgdG8gYW5vdGhlciBzdHJlYW0sIHVuc3Vic2NyaWJlIGZyb20gaXQuIE1lc3NhZ2VzIG9uIHRoZVxuICAqICAgICAgc3RyZWFtIGFyZSBleHBlY3RlZCB0byBpbmNsdWRlIGEge21ldGhvZDogJ21ldGhvZE5hbWUnfSBwYXJhbWV0ZXIuIFRoZVxuICAqICAgICAgbWV0aG9kTmFtZSBzaG91bGQgbWF0Y2ggYSBtZXRob2Qgb24gdGhlIGNsYXNzLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoXG4gICogICAgICB0aGUgZW50aXJlIG1lc3NhZ2UgYXMgdGhlIG9ubHkgYXJndW1lbnQuXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRW5kcG9pbnQsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKHN0cmVhbSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX3N1YnNjaXB0aW9uKSB0aGlzLl9zdWJzY2lwdGlvbi51bnN1YnNjcmliZSgpO1xuXG4gICAgICBpZiAodGhpcy5fdW5oYW5kbGVkU3RyZWFtKSB0aGlzLm91dHB1dC51bnBsdWcodGhpcy5fdW5oYW5kbGVkU3RyZWFtKTtcblxuICAgICAgc3RyZWFtID0gc3RyZWFtIHx8IG51bGw7XG4gICAgICB0aGlzLl9pbnB1dFN0cmVhbSA9IHN0cmVhbTtcblxuICAgICAgaWYgKCFzdHJlYW0pIHJldHVybjtcblxuICAgICAgLy8gV2Ugbm93IGNyZWF0ZSB0d28gZGVyaXZhdGl2ZSBzdHJlYW1zLiBUaGUgZmlyc3QgaGFuZGxlcyBtZXNzYWdlcyBpZiB0aGlzXG4gICAgICAvLyBjbGFzcyBoYXMgYW4gYXBwcm9wcmlhdGUgaGFuZGxlciBnaXZlbiB0aGUgbWVzc2FnZSdzICcubWV0aG9kJyBwYXJhbWV0ZXIuXG4gICAgICAvLyBXZSBvYnNlcnZlIHRoaXMgc3RyZWFtLCBhbmQgbGVhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHN1YnNjcmlwdGlvbiBzbyB3ZVxuICAgICAgLy8gY2FuIHVuc3Vic2NyaWJlIGlmIHdlIGFyZSBwYXNzZWQgZGlmZmVyZW50IHN0cmVhbSB0byBtb25pdG9yLlxuICAgICAgdGhpcy5fc3Vic2NpcHRpb24gPSBzdHJlYW0uZmlsdGVyKGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBfdGhpc1ttc2cubWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIH0pLm9ic2VydmUoe1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobXNnKSB7XG4gICAgICAgICAgX3RoaXNbbXNnLm1ldGhvZF0obXNnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kOiBmdW5jdGlvbiBlbmQobXNnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGUgc2Vjb25kIGRlcml2YXRpdmUgc3RyZWFtIHBhc3NlcyB1bmhhbmRsZWQgbWVzc2FnZXMgdG8gdGhlIGVuZHBvaW50J3NcbiAgICAgIC8vIC5vdXRwdXQgc3RyZWFtLiBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSB1bmhhbmRsZWQgc3RyZWFtIHNvIHdlIGNhbiB1bnBsdWdcbiAgICAgIC8vIGl0IGZyb20gdGhlIG91dHB1dCBwb29sIHdoZW4gd2Ugc3Vic2NyaWJlIHRvIGEgbmV3IHN0cmVhbS5cbiAgICAgIHRoaXMuX3VuaGFuZGxlZFN0cmVhbSA9IHN0cmVhbS5maWx0ZXIoZnVuY3Rpb24gKG1zZykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIF90aGlzW21zZy5tZXRob2RdICE9PSAnZnVuY3Rpb24nO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVuaGFuZGxlZC5wbHVnKHRoaXMuX3VuaGFuZGxlZFN0cmVhbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIHN0cmVhbSBvZiBvdXIgY3VycmVudCBzdWJzY3JpcHRpb24uXG4gICAgKiBAcmVhZG9ubHlcbiAgICAqIEByZXR1cm5zIHtLZWZpci5zdHJlYW19IC0gY3VycmVudCBzdWJzY3JpcHRpb24uIG51bGwgaWYgbm90IHN1YnNjcmliZWQuXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc3RyZWFtJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnB1dFN0cmVhbTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRW5kcG9pbnQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVuZHBvaW50O1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogRGVmYXVsdCBMZWFmIG9iamVjdC4gSWYgYW4gb2JqZWN0IGlzIGNyZWF0ZWQgb24gXG4gKi9cbnZhciBMZWFmID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMZWFmKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMZWFmKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMZWFmLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgaXMgY2FsbGVkIHdoZW4gdGhlIHNlcnZlciBjaGFuZ2VzIHRoZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGlmZiAtIGNoYW5nZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgb2JqZWN0XG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShkaWZmKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRpZmYpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBvYmplY3Qgd2lsbCBiZSBkZXN0cm95ZWQgb3IgcmVtb3ZlcyBmcm9tIHRoZSBjdXJyZW50XG4gICAgICogc3Vic2NyaXB0aW9uLiBZb3VyIGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gbXVzdCByZW1vdmUgcmVmZXJlbmNlc1xuICAgICAqIHRvIHRoZSBvYmplY3QgZnJvbSB5b3VyIHByb2plY3Qgc28gdGhhdCB0aGUgb2JqZWN0IHdpbGwgYmUgZ2FyYmFnZVxuICAgICAqIGNvbGxlY3RlZCBjb3JyZWN0bHkuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3RlYXJkb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgICBjb25zb2xlLmxvZygndGVhcmRvd246JywgdGhpcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExlYWY7XG59KCk7XG5cbi8qKlxuICogQnJhbmNoIGlzIHBhcnQgb2YgYSB0cmVlLWxpa2UgRGF0YSBzdHJ1Y3R1cmUuIEVhY2ggYnJhbmNoIGNvbnRhaW5zIGFueSBudW1iZXJcbiAqIG9mIGNoaWxkcmVuLiBFYWNoIGNoaWxkIGlzIGVpdGhlciBhIEJyYW5jaCBvciBhIExlYWYuIEVhY2ggY2hpbGQgaXNcbiAqIGlkZW50aWZpZWQgYnkgYSBuYW1lIHN0cmluZy4gSW4gdGhpcyBpbXBsZW1lbnRhdGlvbiwgTGVhdmVzIGFyZSBhbnlcbiAqIGphdmFzY3JpcHQgT2JqZWN0IHRoYXQgc2F0aXNmeSB0aGUgTGVhZiBpbnRlcmZhY2UgYWJvdmUuXG4gKlxuICogRWFjaCBCcmFuY2ggaGFzIGEgc3BlY2lhbCBwcm9wZXJ0eSBjYWxsZWQgJ2NsYXNzJy4gVGhpcyBpcyB0aGUgcmVjb21tZW5kZWRcbiAqIGNsYXNzIGZvciBMZWFmIG9iamVjdHMuIExlYWYgb2JqZWN0cyBtYXkgb3IgbWF5IG5vdCBiZSBjcmVhdGVkIHdpdGggdGhlXG4gKiByZWNvbW1lbmRlZCBjbGFzcy4gV2hlbiB3ZSBjcmVhdGUgbmV3IEJyYW5jaGVzIHdpdGggYGIuY3JlYXRlKC4uLilgLCBjaGlsZFxuICogYnJhbmNoZXMgaW5oZXJpdCB0aGUgcGFyZW50J3MgJ2NsYXNzJyBwcm9wZXJ0eS5cbiAqL1xuXG5cbnZhciBCcmFuY2ggPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0NsYXNzfSBbY2xzXSAtIE9wdGlvbmFsIGNsYXNzLiBEZWZhdWx0IGlzIE9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIEJyYW5jaChjbHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJhbmNoKTtcblxuICAgIHRoaXMuYnJhbmNoZXMgPSB7fTtcbiAgICB0aGlzLmxlYXZlcyA9IHt9O1xuICAgIHRoaXMuX2NsYXNzID0gY2xzIHx8IExlYWY7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIHJlY29tbWVuZGVkIGNsYXNzIGZvciBjaGlsZCBsZWF2ZXMgYXR0YWNoZWQgdG8gdGhpcyBvYmplY3QuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEJyYW5jaCwgW3tcbiAgICBrZXk6ICdjcmVhdGVCcmFuY2gnLFxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBCcmFuY2ggb3IgaWRlbnRpZmllZCBieSBhIG5hbWUuIFRoZSBleGFtcGxlIGJlbG93IHJldHVybnNcbiAgICAgKiB0aGUgY2hpbGQgaWRlbnRpZmllZCBieSB0aGUgbmFtZSAnYWxpY2UnLiBJZiAnYWxpY2UnIGRvZXMgbm90IGV4aXN0IG9uIHRoZVxuICAgICAqIEJyYW5jaCwgYSBuZXcgY2hpbGQgQnJhbmNoIGNhbGxlZCAnYWxpY2UnIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqIGBiLmdldCgnYWxpY2UnKSBcXFxcIHJldHVybnMgdGhlIGJyYW5jaCBvciBjaGlsZCBuYW1lZCBhbGljZWBcbiAgICAgKlxuICAgICAqIEEgbG9uZ2VyIGFkZHJlc3MgY2FuIGJlIHNwZWNpZmllZCBpbiB0aGUgZm9ybWF0IGJlbG93LiBUaGlzIHdpbGwgY3JlYXRlIG5ld1xuICAgICAqIEJyYW5jaGVzIGFuZCBzdWItQnJhbmNoZXMgaWYgbmVlZGVkOlxuICAgICAqXG4gICAgICogYGIuZ2V0KCdhbGljZScsICdpY2UgY3JlYW0nICdvdGhlcicpYFxuICAgICAqXG4gICAgICogSW4gYW55IGZvcm1hdCwgdGhlIGxhc3QgbmFtZSBzcGVjaWZpZWQgbWF5IGJlIHRoZSBuYW1lIG9mIGFuIGV4aXN0aW5nIExlYWYuXG4gICAgICogQWxsIHByZWNlZWRpbmcgbmFtZXMgbXVzdCBiZSBCcmFuY2ggbmFtZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbjEgLSB0aGUgbmFtZSB3ZSBhcmUgdHJ5aW5nIHRvIGdldC5cbiAgICAgKiBAcGFyYW0gey4uLlN0cmluZ30gbjIgLSByZW1haW5pbmcgc3ViIGJyYW5jaCBuYW1lcy5cbiAgICAgKiBAcmV0dXJucyB7QnJhbmNofSAtIHRoZSBCcmFuY2ggb3IgTGVhZiB3ZSByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJyYW5jaChuMSkge1xuICAgICAgdmFyIF9icmFuY2hlcyRuO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbjIgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIG4yW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgaWYgKG4xID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuYnJhbmNoZXMuaGFzT3duUHJvcGVydHkobjEpKSB7XG4gICAgICAgIC8vIFdlIG5vdyBrbm93IHRoYXQgdGhlIHZhbHVlIGF0IHRoaXNbbjFdIGlzIG5vdCBvdXIgJ293bicgcHJvcGVydHkuXG4gICAgICAgIC8vIEl0IGlzIGVpdGhlciBub3QgcHJlc2VudCwgb3IgbjEgaXMgbm90IGEgdmFsaWQgbmFtZS5cbiAgICAgICAgaWYgKHRoaXMuYnJhbmNoZXNbbjFdID09PSB1bmRlZmluZWQpIHRoaXMuYnJhbmNoZXNbbjFdID0gbmV3IEJyYW5jaCh0aGlzLmNsYXNzKTtlbHNlIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBicmFuY2ggbmFtZTogJyArIG4xKTtcbiAgICAgIH1cblxuICAgICAgLy8gV2Uga25vdyBuMSBleGlzdHMsIGFuZCBpcyBhIHZhbGlkIG5hbWUuXG4gICAgICBpZiAoIW4yIHx8ICFuMi5sZW5ndGgpIHJldHVybiB0aGlzLmJyYW5jaGVzW24xXTtcblxuICAgICAgcmV0dXJuIChfYnJhbmNoZXMkbiA9IHRoaXMuYnJhbmNoZXNbbjFdKS5jcmVhdGVCcmFuY2guYXBwbHkoX2JyYW5jaGVzJG4sIG4yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBzdGVwIHRocm91Z2ggdGhlIHRyZWUuIElmIGFueSBCcmFuY2ggaXMgZm91bmQgdGhhdCBoYXMgbm9cbiAgICAgKiBsZWF2ZXMsIHJlbW92ZSB0aGF0IGJyYW5jaC5cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSAtIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyB0aGF0IHdlcmUgcmVtb3ZlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndHJpbScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gT2JqZWN0LmtleXModGhpcy5icmFuY2hlcylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIGNvdW50ID0gY291bnQgKyB0aGlzLmJyYW5jaGVzW25hbWVdLnRyaW0oKTtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuYnJhbmNoZXNbbmFtZV0ubGVhdmVzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJyYW5jaGVzW25hbWVdO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgaXRlcmF0ZSBvdmVyIHRoaXMgYnJhbmNoLCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggbGVhZi4gVGhlXG4gICAgICogZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgaW4gdGhlIGZvcm1hdDpcbiAgICAgKlxuICAgICAqIGBmKGxlYWYsIC4uLmFyZ3MpYFxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZiAtIHByZWRpY2F0ZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIGVhY2ggbGVhZlxuICAgICAqIEBwYXJhbSB7Li4uYW55fSBhcmdzIC0gYWRkaXRpb25hbCBhcmd1bWVudHMgdG8gdGhlIHByZWRpY2F0ZSBmdW5jdGlvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmb3JFYWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yRWFjaChmKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gT2JqZWN0LmtleXModGhpcy5icmFuY2hlcylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgX2JyYW5jaGVzJG5hbWU7XG5cbiAgICAgICAgICB2YXIgbmFtZSA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICAgIChfYnJhbmNoZXMkbmFtZSA9IHRoaXMuYnJhbmNoZXNbbmFtZV0pLmZvckVhY2guYXBwbHkoX2JyYW5jaGVzJG5hbWUsIFtmXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gT2JqZWN0LmtleXModGhpcy5sZWF2ZXMpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIF9uYW1lID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICAgICAgZi5hcHBseSh1bmRlZmluZWQsIFt0aGlzLmxlYXZlc1tfbmFtZV1dLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSBhIGJyYW5jaCBieSBpdHMgYWRkcmVzcy4gRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBiLmdldCgnYWxpY2UnLCAnYm9iJywgJ2NhdCcpOyAvLyBHZXQgdGhpcy5hbGljZS5ib2IuY2F0YFxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5TdHJpbmd9IGFsbCAtIHRoZSBhZGRyZXNzIG9mIEJyYW5jaCB0byBnZXQuXG4gICAgICogQHJldHVybnMge0JyYW5jaHxPYmplY3R8bnVsbH0gLSBBIEJyYW5jaCBvciBMZWFmLiBOdWxsIGlmIG5vdCBmb3VuZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRCcmFuY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCcmFuY2goKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFsbCA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFsbFtfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFsbCB8fCBhbGwubGVuZ3RoID09PSAwKSByZXR1cm4gdGhpcztlbHNlIGlmIChhbGwubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJyYW5jaGVzLmhhc093blByb3BlcnR5KGFsbFswXSkpIHJldHVybiB0aGlzLmJyYW5jaGVzW2FsbFswXV07XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaXJzdCA9IHRoaXMuYnJhbmNoZXNbYWxsWzBdXTtcblxuICAgICAgaWYgKGZpcnN0IGluc3RhbmNlb2YgQnJhbmNoKSByZXR1cm4gZmlyc3QuZ2V0QnJhbmNoLmFwcGx5KGZpcnN0LCBfdG9Db25zdW1hYmxlQXJyYXkoYWxsLnNsaWNlKDEpKSk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGNoaWxkIEJyYW5jaCBmcm9tIHRoaXMgYnJhbmNoLiBJZiB3ZSBzcGVjaWZ5IGEgbG9uZ2VyIGFkZHJlc3MsXG4gICAgICogb25seSB0aGUgdGlwIG9mIHRoZSBhZGRyZXNzIHNwZWNpZmllZCB3aWxsIGJlIHJlbW92ZWQuIFRoZSBleGFtcGxlIGJlbG93XG4gICAgICogcmVtb3ZlcyAnY2F0JyBmcm9tICdib2InLCBidXQgZG9lcyBub3QgcmVtb3ZlICdib2InIGZyb20gJ2FsaWNlJy5cbiAgICAgKlxuICAgICAqIGBiLnJlbW92ZSgnYWxpY2UnLCAnYm9iJywgJ2NhdCcpYFxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5TdHJpbmd9IGFsbCAtIHRoZSBhZGRyZXNzIG9mIHRoZSBCcmFuY2ggb3IgTGVhZiB3ZSB3YW50IHRvXG4gICAgICogICAgICAgIHJlbW92ZS4gVGhlIHBhcmVudCBvZiB0aGlzIG9iamVjdCBtdXN0IGJlIGEgQnJhbmNoLlxuICAgICAqIEByZXR1cm5zIHtCcmFuY2h8bnVsbH0gLSBUaGUgQnJhbmNoIHRoYXQgd2FzIHJlbW92ZWQuIE51bGwgaWYgbm90IGZvdW5kLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVCcmFuY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVCcmFuY2goKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdm9pZCAwO1xuXG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFsbCA9IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFsbFtfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWxsLmxlbmd0aCA9PT0gMSkgcGFyZW50ID0gdGhpcztlbHNlIHBhcmVudCA9IHRoaXMuZ2V0QnJhbmNoLmFwcGx5KHRoaXMsIF90b0NvbnN1bWFibGVBcnJheShhbGwuc2xpY2UoMCwgLTEpKSk7XG5cbiAgICAgIGlmICghcGFyZW50KSByZXR1cm4gbnVsbDtcblxuICAgICAgdmFyIG5hbWUgPSBhbGxbYWxsLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIXBhcmVudC5icmFuY2hlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgIHZhciBvYmogPSBwYXJlbnQuYnJhbmNoZXNbbmFtZV07XG5cbiAgICAgIGRlbGV0ZSBwYXJlbnQuYnJhbmNoZXNbbmFtZV07XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm9uIHJlY3Vyc2l2ZSBsZWFmIHJldHJldmlhbC4gUmV0dXJucyBudWxsIGlmIHRoZSBicmFuY2ggaGFzIG5vIGNoaWxkcmVuXG4gICAgICogd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgT1IgaWYgdGhlIG5hbWUgcG9pbnRzIHRvIGFub3RoZXIgYnJhbmNoXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gbmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBsZWFmIHdlIGFyZSBsb29raW5nIGZvcjtcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IC0gbnVsbCBpZiB0aGlzIGRvZXMgbm90IGhhdmUgYSBicmFuY2hcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TGVhZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExlYWYobmFtZSkge1xuICAgICAgaWYgKHRoaXMubGVhdmVzLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm4gdGhpcy5sZWF2ZXNbbmFtZV07XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIExlYWYgaW4gdGhpcyBicmFuY2guXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBvYmplY3Qgd2UgYXJlIGludGVyZXN0ZWQgaW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gT2JqZWN0IHdlIGFyZSBzZXR0aW5nLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRMZWFmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TGVhZihuYW1lLCBvYmopIHtcbiAgICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHRoaXMucmVtb3ZlTGVhZihuYW1lKTtlbHNlIHRoaXMubGVhdmVzW25hbWVdID0gb2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0ga2V5IG5hbWUgb2YgdGhlIGxlYWYgdG8gcmVtb3ZlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUxlYWYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVMZWFmKG5hbWUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxlYXZlc1tuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGFzcycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2xhc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBCcmFuY2hlcyBjbGFzcy4gVGhyb3cgaWYgdiBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB2IC0gdGhlIGNvbnN0cnVjdGFibGUgZnVuY3Rpb25cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgaWYgKHR5cGVvZiB2ICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgdGhpcy5fY2xhc3MgPSB2O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCcmFuY2g7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJyYW5jaDtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfRW5kcG9pbnQyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9FbmRwb2ludDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmRwb2ludDIpO1xuXG52YXIgX0JyYW5jaCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfQnJhbmNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JyYW5jaCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogU3RvcmUgYSBjb2xsZWN0aW9uIG9mIG9iamVjdHMgdGhhdCB3aWxsIGJlIHN5bmNocm9uaXplZCB3aXRoIHRoZSBzZXJ2ZXJcbiAqL1xudmFyIE9iamVjdHMgPSBmdW5jdGlvbiAoX0VuZHBvaW50KSB7XG4gIF9pbmhlcml0cyhPYmplY3RzLCBfRW5kcG9pbnQpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FwcH0gYXBwIC0gdGhlIGFldGhlciBBcHAgdGhpcyBvYmplY3QgaXMgYnVpbHQgb25cbiAgICovXG4gIGZ1bmN0aW9uIE9iamVjdHMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9iamVjdHMpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE9iamVjdHMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3RzKSkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5ieVNLZXkgPSBuZXcgX0JyYW5jaDIuZGVmYXVsdCgpO1xuICAgIF90aGlzLmJ5S2V5ID0gbmV3IF9CcmFuY2gyLmRlZmF1bHQoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzZXQgb2Yga2V5cyB0aGF0IHdlIGFyZSBzdWJzY3JpYmVkIHRvLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBpcyB1c3VhbGx5IGNhbGxlZCBmcm9tIGNsaWVudCB2aWEgdGhlIHN5bmsucmVzb2x2ZSgpIG1ldGhvZC5cbiAgICogV2Ugc2hvdWxkIGJlIGFibGUgdG8gY2FsbCB0aGlzIGZyb20gdGhlIHNlcnZlciwgYnV0IHRoaXMgYmVoYXZpb3IgaXNcbiAgICogdW50ZXN0ZWQuIEkgaGF2ZSBub3QgdGhvdWdodCB0aHJvdWdoIHRoZSBsb2dpYyBvZiBob3cgdGhpcyBjb3VsZCBiZSBjYWxsZWRcbiAgICogZnJvbSB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlU3Vic2NyaXB0aW9uTXNnIC0gT2JqZWN0IGNvbnRhaW5pbmcgc3Vic2NyaXB0aW9uXG4gICAqICAgICAgICBjaGFuZ2UuIFRoZSBvYmplY3QgbXVzdCBoYXZlIHR3byBhcnJheXMgb2Ygc3RyaW5nczogLmFkZCBhbmQgLnJlbW92ZVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhPYmplY3RzLCBbe1xuICAgIGtleTogJ3VwZGF0ZUtleXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVLZXlzKHVwZGF0ZVN1YnNjcmlwdGlvbk1zZykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBtc2cgPSB1cGRhdGVTdWJzY3JpcHRpb25Nc2c7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2cucmVtb3ZlKSB8fCAhQXJyYXkuaXNBcnJheShtc2cuYWRkKSkgY29uc29sZS5lcnJvcignT2JqZWN0cy51cGRhdGVLZXlzIHJlY2VpdmVkIGludmFsaWQgbWVzc2FnZTonLCBtc2cpO1xuXG4gICAgICAvLyBXaGVuIHdlIHVuc3Vic2NyaWJlIGZyb20gYSBjaHVuaywgd2UgbmVlZCB0byByZW1vdmUgYW5kIHRlYXJkb3duIGFsbCB0aGVcbiAgICAgIC8vIG9iamVjdHMgaW4gdGhhdCBjaHVuay5cbiAgICAgIG1zZy5yZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGVudHVyZSBjaHVua1xuICAgICAgICBfdGhpczIuYnlTS2V5LnJlbW92ZUJyYW5jaChwKS5mb3JFYWNoKGZ1bmN0aW9uIChsZWFmKSB7XG4gICAgICAgICAgdmFyIF9ieUtleTtcblxuICAgICAgICAgIC8vIFJlbW92ZSBlYWNoIG9iamVjdCBmcm9tIGl0cyBjb2xsZWN0aW9uXG4gICAgICAgICAgdmFyIHBhcnRzID0gbGVhZi5rZXkuc3BsaXQoJzonKTtcbiAgICAgICAgICB2YXIgaWQgPSBwYXJ0cy5wb3AoKTtcbiAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IChfYnlLZXkgPSBfdGhpczIuYnlLZXkpLmdldEJyYW5jaC5hcHBseShfYnlLZXksIF90b0NvbnN1bWFibGVBcnJheShwYXJ0cykpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndCBleGlzdCwgd2UgaGF2ZSBidWdcbiAgICAgICAgICBpZiAoY29sbGVjdGlvbikgY29sbGVjdGlvbi5yZW1vdmVMZWFmKGlkKTtlbHNlIGNvbnNvbGUuZXJyb3IoJ1Vuc3Vic2NyaWJlZCBmcm9tIGNodW5rLCBidXQgY29sbGVjdGlvbiBub3QgZm91bmQ6ICcgKyBwYXJ0cy5qb2luKCc6JykpO1xuXG4gICAgICAgICAgbGVhZi50ZWFyZG93bigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBtc2cuYWRkLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgX3RoaXMyLmJ5U0tleS5jcmVhdGVCcmFuY2gocCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgb2JqZWN0LiBUeXBpY2FsbHkgY2FsbGVkIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB3aGVuIHdlIGFkZCBhbiBvYmplY3QsIHRoZSAuaWQgYW5kIC5rZXkgcHJvcGVydGllcyBhcmVcbiAgICAgKiBhdXRvbWF0aWNhbGx5IHNldC4gVGhlIE9iamVjdHMgY2xhc3MgZGVwZW5kcyBvbiB0aGVzZSBiZWluZyBhdmFpbGFibGVcbiAgICAgKiB3aGVuIHJlbW92aW5nIHRoZSBvYmplY3QsIHNvIHRoZXkgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkIGJ5IGNsaWVudCBjb2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZyAtIGNvbnRhaW5zIC5rZXksIC5zdGF0ZSwgLnNLZXkuIE9wdGlvbmFsIC5wc0tleVxuICAgICAqICAgICAgICBpbmRpY2F0ZXMgb2JqZWN0IG1vdmVkIGhlcmUgZnJvbSBhbm90aGVyIGNodW5rLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGRPYmonLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRPYmoobXNnKSB7XG4gICAgICB2YXIgX2J5S2V5MjtcblxuICAgICAgaWYgKHR5cGVvZiBtc2cuc0tleSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIG1zZy5rZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpdmVkIGludmFsaWQgYWRkT2JqIG1lc3NhZ2UnLCBtc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnRzID0gbXNnLmtleS5zcGxpdCgnOicpO1xuICAgICAgdmFyIGlkID0gcGFydHMucG9wKCk7XG4gICAgICB2YXIgY2h1bmsgPSB0aGlzLmJ5U0tleS5nZXRCcmFuY2gobXNnLnNLZXkpO1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSAoX2J5S2V5MiA9IHRoaXMuYnlLZXkpLmNyZWF0ZUJyYW5jaC5hcHBseShfYnlLZXkyLCBfdG9Db25zdW1hYmxlQXJyYXkocGFydHMpKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIHRoaXMgb2JqZWN0XG4gICAgICB2YXIgb2JqID0gY29sbGVjdGlvbi5nZXRMZWFmKGlkKTtcblxuICAgICAgaWYgKG9iaikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgc2VydmVyIHNlbnQgdXMgYW4gYWRkT2JqIG1lc3NhZ2UsIGJ1dCB3ZSBhbHJlZHkgaGFkICcgKyAoJ3RoZSBvYmplY3QgbG9jYWxseTogJyArIG1zZy5rZXkpKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUT0RPOiByZW1vdmUgYW5kIHRlYXJkb3duIGMnKTsgLy8gVE9ETzogcmVtb3ZlIGFuZCB0ZWFyZG93biBjIGludGVhZCBvZiB0aHJvd2luZyBhbiBlcnJvclxuICAgICAgfVxuXG4gICAgICBvYmogPSBuZXcgY29sbGVjdGlvbi5jbGFzcyhtc2cua2V5LCBtc2cuc3RhdGUpO1xuICAgICAgb2JqLmlkID0gaWQ7XG4gICAgICBvYmoua2V5ID0gbXNnLmtleTtcblxuICAgICAgY2h1bmsuc2V0TGVhZihtc2cua2V5LCBvYmopO1xuICAgICAgY29sbGVjdGlvbi5zZXRMZWFmKGlkLCBvYmopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE11dGF0ZSBhIGxvY2FsIG9iamVjdC4gRGVzaWduZWQgdG8gYmUgY2FsbGVkIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnIC0gZGF0YSBmcm9tIHNlcnZlci4gSW5jbHVkZXMgLmRpZmYgYW5kIC5zS2V5LiBNYXkgYWxzb1xuICAgICAqICAgICAgICBpbmNsdWRlIC5uc0tleSAoaWYgdGhlIG9iamVjdCBpcyBtb3ZpbmcgYmV0d2VlbiBjaHVua3MuKVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdtb2RPYmonLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb2RPYmoobXNnKSB7XG4gICAgICB2YXIgX2J5S2V5MztcblxuICAgICAgaWYgKHR5cGVvZiBtc2cuc0tleSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIG1zZy5rZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpdmVkIGludmFsaWQgbW9kT2JqIG1lc3NhZ2UnLCBtc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnRzID0gbXNnLmtleS5zcGxpdCgnOicpO1xuICAgICAgdmFyIGlkID0gcGFydHMucG9wKCk7XG4gICAgICB2YXIgY2h1bmsgPSB0aGlzLmJ5U0tleS5nZXRCcmFuY2gobXNnLnNLZXkpOyAvLyBjdXJyZW50IGNodW5rXG4gICAgICB2YXIgY29sbGVjdGlvbiA9IChfYnlLZXkzID0gdGhpcy5ieUtleSkuY3JlYXRlQnJhbmNoLmFwcGx5KF9ieUtleTMsIF90b0NvbnN1bWFibGVBcnJheShwYXJ0cykpO1xuICAgICAgdmFyIG9iaiA9IGNvbGxlY3Rpb24uZ2V0TGVhZihpZCk7XG5cbiAgICAgIC8vIERvIHNvbWUgc2FuaXR5IGNoZWNrcy4uLlxuXG4gICAgICBpZiAoIW9iaikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdXZSByZWNlaXZlZCBhIG1vZE9iaiByZXF1ZXN0LCBidXQgY291bGQgbm90IGZpbmQgdGhlICcgKyAoJ29iamVjdCBsb2NhbGx5OiAnICsgbXNnLmtleSkpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNodW5rLmdldExlYWYobXNnLmtleSkgIT09IG9iaikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBtb2RPYmouIFRoZSBvYmplY3Qgd2FzIGZvdW5kIG9uIHRoZSAnICsgcGFydHMgKyAnICcgKyAoJ2NvbGxlY3Rpb24sIGJ1dCBub3QgdGhlICcgKyBtc2cuc0tleSArICcgY2h1bmsuJykpO1xuICAgICAgICAvLyBLZWVwIHRyeWluZyB0byBtb3ZlIHRoZSBvYmplY3QuLi5cbiAgICAgIH1cblxuICAgICAgLy8gQXJlIHdlIG1vZGlmeWluZyB3aXRoaW4gYSBjaHVuaz9cbiAgICAgIGlmICghbXNnLm5zS2V5KSB7XG4gICAgICAgIG9iai51cGRhdGUobXNnLmRpZmYpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIG9iamVjdCBtdXN0IGJlIG1vdmVkIG91dCBvZiB0aGUgY3VycmVudCBjaHVuay4gSWYgd2UgYXJlIHN1YnNjcmliZWRcbiAgICAgIC8vIHRvIHRoZSBuZXcgY2h1bmssIG1vdmUgdGhlIG9iamVjdCB0aGVyZS4gSWYgd2UgYXJlIG5vdCBzdWJzY3JpYmVkLFxuICAgICAgLy8gcmVtb3ZlIGFuZCB0ZWFyZG93bigpIHRoZSBvYmplY3QuXG4gICAgICBjaHVuay5yZW1vdmVMZWFmKG1zZy5rZXkpO1xuXG4gICAgICB2YXIgbmV3Q2h1bmsgPSB0aGlzLmJ5U0tleS5nZXRCcmFuY2gobXNnLm5zS2V5KTtcblxuICAgICAgaWYgKG5ld0NodW5rKSB7XG4gICAgICAgIG5ld0NodW5rLnNldExlYWYobXNnLmtleSwgb2JqKTtcbiAgICAgICAgb2JqLnVwZGF0ZShtc2cuZGlmZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsZWN0aW9uLnJlbW92ZUxlYWYoaWQpO1xuICAgICAgICBvYmoudGVhcmRvd24oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbmQgdGVhcmRvd24gYW4gb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtc2cgLSBoYXMgLmtleSBhbmQgLnNLZXkgc3RyaW5nc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1PYmonLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1PYmoobXNnKSB7XG4gICAgICB2YXIgX2J5S2V5NDtcblxuICAgICAgaWYgKHR5cGVvZiBtc2cuc0tleSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIG1zZy5rZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpdmVkIGludmFsaWQgcmVtT2JqIG1lc3NhZ2UnLCBtc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnRzID0gbXNnLmtleS5zcGxpdCgnOicpO1xuICAgICAgdmFyIGlkID0gcGFydHMucG9wKCk7XG4gICAgICB2YXIgY2h1bmsgPSB0aGlzLmJ5U0tleS5nZXRCcmFuY2gobXNnLnNLZXkpOyAvLyBjdXJyZW50IGNodW5rXG4gICAgICB2YXIgY29sbGVjdGlvbiA9IChfYnlLZXk0ID0gdGhpcy5ieUtleSkuZ2V0QnJhbmNoLmFwcGx5KF9ieUtleTQsIF90b0NvbnN1bWFibGVBcnJheShwYXJ0cykpO1xuICAgICAgdmFyIG9iaiA9IGNvbGxlY3Rpb24uZ2V0TGVhZihpZCk7XG5cbiAgICAgIGlmIChjaHVuaykgY2h1bmsucmVtb3ZlTGVhZihtc2cua2V5KTtlbHNlIGNvbnNvbGUuZXJyb3IoJ1RyaWVkIHRvIHJlbW92ZSAnICsgbXNnLnNLZXkgKyAnLCBidXQgY291bGQgbm90IGZpbmQgb2JqZWN0cyBhdCAnICsgcGFydHMpO1xuXG4gICAgICBpZiAoY29sbGVjdGlvbikgY29sbGVjdGlvbi5yZW1vdmVMZWFmKGlkKTtlbHNlIGNvbnNvbGUuZXJyb3IoJ1RyaWVkIHRvIHJlbW92ZSAnICsgbXNnLmtleSArICcgYnV0IGNvdWxkIG5vdCBmaW5kICcgKyBwYXJ0cyArICcgaW4gLmJ5S2V5Jyk7XG5cbiAgICAgIGlmIChvYmopIG9iai50ZWFyZG93bigpO2Vsc2UgY29uc29sZS5lcnJvcignREFOR0VSOiBUcmllZCB0byByZW1vdmUgJyArIG1zZy5rZXkgKyAnLCBidXQgY291bGQgbm90IGZpbmQgb2JqZWN0Jyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9iamVjdHM7XG59KF9FbmRwb2ludDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE9iamVjdHM7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TeW5rID0gZXhwb3J0cy5PYmplY3RzID0gZXhwb3J0cy5CcmFuY2ggPSBleHBvcnRzLkVuZHBvaW50ID0gZXhwb3J0cy5Db25uZWN0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX0Nvbm5lY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Nvbm5lY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29ubmVjdGlvbik7XG5cbnZhciBfRW5kcG9pbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX0VuZHBvaW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuZHBvaW50KTtcblxudmFyIF9CcmFuY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX0JyYW5jaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CcmFuY2gpO1xuXG52YXIgX09iamVjdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX09iamVjdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT2JqZWN0cyk7XG5cbnZhciBfU3luayA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfU3luazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TeW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Db25uZWN0aW9uID0gX0Nvbm5lY3Rpb24yLmRlZmF1bHQ7XG5leHBvcnRzLkVuZHBvaW50ID0gX0VuZHBvaW50Mi5kZWZhdWx0O1xuZXhwb3J0cy5CcmFuY2ggPSBfQnJhbmNoMi5kZWZhdWx0O1xuZXhwb3J0cy5PYmplY3RzID0gX09iamVjdHMyLmRlZmF1bHQ7XG5leHBvcnRzLlN5bmsgPSBfU3luazIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX09iamVjdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX09iamVjdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT2JqZWN0cyk7XG5cbnZhciBfQ29ubmVjdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQ29ubmVjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db25uZWN0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBTeW5rIHdyYXBzIGEgY29ubmVjdGlvbiBhbmQgYW4gT2JqZWN0cyBzdWJzY3JpcHRpb24uXG4gKi9cbnZhciBTeW5rID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQGFyZyB7c3RyaW5nfSB1cmwgLSB0aGUgd2Vic29ja2V0IHVybCB0byBjb25uZWN0IHRvXG4gICAqIEBhcmcge1tjbGFzc119IHdlYlNvY2tldFN0dWIgLSBvcHRpb25hbCBjbGFzcyB0byB1c2UgaW5zdGVhZCBvZiBXZWJTb2NrZXQuXG4gICAqICAgICAgVXNlZnVsIGZvciB0ZXN0aW5nIGluc2lkZSBvZiBOb2RlLmpzLiBQcm9iYWJseSBub3QgbmVlZGVkIGluIGFuXG4gICAqICAgICAgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBTeW5rKHVybCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3luayk7XG5cbiAgICB0aGlzLm9iamVjdHMgPSBuZXcgX09iamVjdHMyLmRlZmF1bHQoKTtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgX0Nvbm5lY3Rpb24yLmRlZmF1bHQodXJsKTtcblxuICAgIHRoaXMub2JqZWN0cy5zdWJzY3JpYmUodGhpcy5jb25uZWN0aW9uLnN0cmVhbSk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHt9OyAvLyBjdXJyZW50bHkgYWN0aXZlIHN1YnNjcmlwdGlvbnNcbiAgICB0aGlzLnBlbmRpbmdBZGQgPSB7fTtcbiAgICB0aGlzLnBlbmRpbmdSZW1vdmUgPSB7fTtcblxuICAgIHRoaXMuY29ubmVjdGlvbi5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBPdXIgY29ubmVjdGlvbiBpcyBjbG9zZWQsIFByZXBhcmUgZm9yIHRoZSBjb25uZWN0aW9uIHRvIHJlLW9wZW4uIENhY2hlXG4gICAgICAvLyB0aGUgc3Vic2NyaXB0aW9uIGtleXMgd2UgYXJlIGN1cnJlbnRseSBzdWJzY3JpYmVkIHRvLCBhbmQgdGVhcmRvd24gYWxsXG4gICAgICAvLyBleGlzdGluZyBvYmplY3RzLlxuICAgICAgdmFyIGN1cnJlbnQgPSBfdGhpcy5hY3RpdmU7XG5cbiAgICAgIF90aGlzLm9iamVjdHMudXBkYXRlS2V5cyh7XG4gICAgICAgIHJlbW92ZTogT2JqZWN0LmtleXMoX3RoaXMuYWN0aXZlKSxcbiAgICAgICAgYWRkOiBbXVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5hY3RpdmUgPSB7fTtcblxuICAgICAgLy8gV2hlbiB3ZSByZS1vcGVuLCB3ZSB3YW50IHRvIHJlLXN1YnNjcmliZSB0byBjb3JyZWN0IGNvbGxlY3Rpb24gb2Yga2V5cy5cbiAgICAgIC8vIFJlc29sdmUgdGhlIC5wZW5kaW5nQWRkIGFuZCAucGVuZGluZ1JlbW92ZSBvYmplY3RzLlxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IE9iamVjdC5rZXlzKF90aGlzLnBlbmRpbmdSZW1vdmUpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KGtleSkpIGRlbGV0ZSBjdXJyZW50W2tleV07XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IE9iamVjdC5rZXlzKF90aGlzLnBlbmRpbmdBZGQpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIF9rZXkgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgICBjdXJyZW50W19rZXldID0gdHJ1ZTtcbiAgICAgICAgfSAvLyBXZSBrbm93IHRoZSBjb2xsZWN0aW9uIG9mIGtleXMgdGhhdCB3ZSB3b3VsZCBsaWtlIHRvIGJlIHN1YnNjcmliZWQgdG8uXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnBlbmRpbmdBZGQgPSBjdXJyZW50O1xuICAgICAgX3RoaXMucGVuZGluZ1JlbW92ZSA9IHt9O1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25uZWN0aW9uLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgc2V0IG9mIGtleXMgdGhhdCB3ZSB3YW50IHRvIHN1YnNjcmliZSB0bywgY2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlXG4gICAqIGJldHdlZW4gdGhlIGN1cnJlbnRseSBhY3RpdmUgc3Vic2NyaXB0aW9uIGFuZCB0aGUgbmV3IGRlc2lyZWQgc3Vic2NyaXB0aW9uLlxuICAgKiBTdG9yZSB0aGUgcmVzdWx0IGluIHRoaXMucGVuZGluZ0FkZCBhbmQgdGhpcy5wZW5kaW5nUmVtb3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIC0gYWxsIHRoZSBrZXlzIHRoYXQgd2Ugd2FudCB0byBzdWJzY3JpYmUgdG8uXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFN5bmssIFt7XG4gICAga2V5OiAnc2V0U3Vic2NyaXB0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U3Vic2NyaXB0aW9uKGtleXMpIHtcbiAgICAgIHRoaXMucGVuZGluZ0FkZCA9IHt9O1xuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZlID0ge307XG5cbiAgICAgIHZhciBuZXdLZXlzID0ge307XG5cbiAgICAgIC8vIGNvbnZlcnQga2V5cyBhcnJheSB0byBvYmplY3RcbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0ga2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBrZXkgPSBfc3RlcDMudmFsdWU7XG4gICAgICAgICAgbmV3S2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgfSAvLyBmb3IgZWFjaCBjdXJyZW50IGtleSwgY2hlY2sgaWYgd2Ugd2FudCB0byB1bnN1YnNjcmliZVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBhY3RpdmVLZXkgPSBfc3RlcDQudmFsdWU7XG5cbiAgICAgICAgICBpZiAoIW5ld0tleXMuaGFzT3duUHJvcGVydHkoYWN0aXZlS2V5KSkge1xuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIGtleSB0aGF0IHdlIGRvIG5vdCB3YW50LlxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZlW2FjdGl2ZUtleV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciBlYWNoIG5ldyBrZXksIGNoZWNrIGlmIHdlIGhhdmUgdG8gYWRkIGl0XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3I0LnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I0KSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I1ID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I1ID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I1ID0ga2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNTsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IChfc3RlcDUgPSBfaXRlcmF0b3I1Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBuZXdLZXkgPSBfc3RlcDUudmFsdWU7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlLmhhc093blByb3BlcnR5KG5ld0tleSkpIHtcbiAgICAgICAgICAgIC8vIGEga2V5IG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdBZGRbbmV3S2V5XSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I1ID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3I1ID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ICYmIF9pdGVyYXRvcjUucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3I1LnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I1KSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ5IHRvIHJlc29sdmUgdGhlIHN1YnNjcmlwdGlvbi4gSWYgdGhlIHN1YnNjcmlwdGlvbiBtZXNzYWdlIGlzIG5vdCBzZW50XG4gICAgICogc3VjY2Vzc2Z1bGx5LCBpdCB3aWxsIGJlIHNlbnQgd2hlbiB0aGUgY29ubmVjdGlvbiByZS1vcGVucy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sfSAtIHRydWUgaWYgdGhlIG1lc3NhZ2Ugd2FzIHNlbnQgb3Igbm8gY2hhbmdlIGlzIG5lZWRlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZXNvbHZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZSgpIHtcbiAgICAgIHZhciBtc2cgPSB7XG4gICAgICAgIG1ldGhvZDogJ3VwZGF0ZVN1YnNjcmlwdGlvbicsXG4gICAgICAgIGFkZDogT2JqZWN0LmtleXModGhpcy5wZW5kaW5nQWRkKSxcbiAgICAgICAgcmVtb3ZlOiBPYmplY3Qua2V5cyh0aGlzLnBlbmRpbmdSZW1vdmUpXG4gICAgICB9O1xuXG4gICAgICAvLyBJZiBtc2cuYWRkIGFuZCBtc2cucmVtb3ZlIGFyZSBlbXB0eSwgb3VyIGpvYiBpcyBkb25lLlxuICAgICAgaWYgKG1zZy5hZGQubGVuZ3RoID09PSAwICYmIG1zZy5yZW1vdmUubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgLy8gSWYgdGhlIGNvbm5lY3Rpb24gaXMgbm90IG9wZW4sIGRvIG5vdGhpbmcgKHdhaXQgZm9yIG9wZW4gZXZlbnQpXG4gICAgICBpZiAodGhpcy5jb25uZWN0aW9uLnN0YXRlICE9PSAxKSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBUaGUgY29ubmVjdGlvbiBpcyBrbm93biB0byBiZSBvcGVuXG5cbiAgICAgIHRoaXMub2JqZWN0cy51cGRhdGVLZXlzKG1zZyk7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZChtc2cpO1xuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNiA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yNiA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNiA9IG1zZy5hZGRbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDY7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSAoX3N0ZXA2ID0gX2l0ZXJhdG9yNi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIga2V5ID0gX3N0ZXA2LnZhbHVlO1xuXG4gICAgICAgICAgdGhpcy5hY3RpdmVba2V5XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjYgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjYgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgJiYgX2l0ZXJhdG9yNi5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjYucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjYpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb243ID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjcgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjcgPSBtc2cucmVtb3ZlW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA3OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb243ID0gKF9zdGVwNyA9IF9pdGVyYXRvcjcubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIF9rZXkyID0gX3N0ZXA3LnZhbHVlO1xuXG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlLmhhc093blByb3BlcnR5KF9rZXkyKSkgZGVsZXRlIHRoaXMuYWN0aXZlW19rZXkyXTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yNyA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yNyA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyAmJiBfaXRlcmF0b3I3LnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yNy5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNykge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnBlbmRpbmdBZGQgPSB7fTtcbiAgICAgIHRoaXMucGVuZGluZ1JlbW92ZSA9IHt9O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3luaztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3luaztcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3luay1qcy9kaXN0L3N5bmsuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCAnLi9qcy9zdGFydC5qcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgZGl2IHtwYWRkaW5nOiAwOyBtYXJnaW46IDB9XFxuXFxuaHRtbCB7XFxuICAvKiBQcmV2ZW50IHVzIGZyb20gYmVpbmcgYWJsZSB0byBzY3JvbGwgcGFzdCB0aGUgZW5kIG9mXFxuICB0aGUgcGFnZSAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZGl2LnBhbmUge1xcbiAgLypcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSBpcyByZWxhdGl2ZSB0byB0aGUgbmVhcmVzdCBub24tc3RhdGljIGFuY2VzdG9yLlxcbiAgcG9zaXRpb246IGZpeGVkIGlzIHJlbGF0aXZlIHRvIHRoZXZpZXdwb3J0LiBcXG5cXG4gIFRoZSBkZWZhdWx0IHBvc2l0aW9uIGlzICdzdGF0aWMnIHNvIHdlIGhhdmUgdG8gbWFrZSB0aGVcXG4gIHBhcmVudCBiZSBub24tc3RhdGljIGZvciBpbm5lciBkaXZzIHRvIHdvcmsgYXMgZGVzaXJlZFxcbiAgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jZnVsbCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibHVlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWFpbi12aWV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogSWYgd2UgbGVhdmUgdGhlIHBhcmVudCBwb3NpdGlvbiBpbiB0aGUgZGVmYXVsdCAnc3RhdGljJ1xcbiAgc2V0dGluZyB0aGlzIHRvIGFic29sdXRlIHdpbGwgbm90IHdvcmsgKi9cXG59XFxuXFxuI3NpZGUge1xcbiAgd2lkdGg6IDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbiNtYWluLXZpZXcgY2FudmFzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogSSdtIG5vdCBzdXJlIGlmIHBpeGkgd2lsbCBkbyB0aGlzIGZvciB1cyBvciBub3QsIGJ1dCB3ZVxcbiAgd2FudCB0byBwcmV2ZW50IHRoZSB1c2VyIGZyb20gc2VsZWN0aW5nIHRoZSBjYW52YXMgKi9cXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBMaWJyYXJpZXNcbmltcG9ydCBFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0IEtlZmlyIGZyb20gJ2tlZmlyJztcblxuLy8gTG9jYWxcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanMnO1xuXG4vLyBMaWJzXG53aW5kb3cuS2VmaXIgPSBLZWZpcjtcbndpbmRvdy5FbWl0dGVyID0gRW1pdHRlcjtcblxuLy8gQWV0aGVyIExpYnNcbndpbmRvdy5BcHAgPSBBcHA7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IHdpbmRvdy5hcHAgPSBuZXcgQXBwKCk7XG5cbiAgYXBwLnN5bmsuc2V0U3Vic2NyaXB0aW9uKFsnZXRlcm5hbDptYWluJ10pO1xuICBhcHAuc3luay5yZXNvbHZlKCk7XG59O1xuXG53aW5kb3cub25jb250ZXh0bWVudSA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3N0YXJ0LmpzIiwiaW1wb3J0IHsgT2JqZWN0cywgQ29ubmVjdGlvbiwgU3luayB9ICBmcm9tICdzeW5rLWpzJztcbmltcG9ydCBBcHBFbmRwb2ludCBmcm9tICcuL0FwcEVuZHBvaW50LmpzJztcbmltcG9ydCBOb3RlIGZyb20gJy4vTm90ZS5qcyc7XG5cbi8qKlxuKiBIaWdoIGxldmVsIEFldGhlciBBcHBsaWNhdGlvblxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhbiBBcHBcbiAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgaHR0cHMgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cHMnKTtcbiAgICBjb25zdCB1cmwgPSAgYCR7aHR0cHMgPyAnd3NzJyA6ICd3cyd9Oi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vd3NgO1xuXG4gICAgdGhpcy5zeW5rID0gbmV3IFN5bmsodXJsKTtcbiAgICB0aGlzLmVuZHBvaW50ID0gbmV3IEFwcEVuZHBvaW50KHRoaXMpO1xuXG4gICAgLy8gQWxsIG1lc3NhZ2VzIGZyb20gdGhlIHNlcnZlciB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZW5kcG9pbnQuIFRoYW5rcyB0b1xuICAgIC8vIHRoZSBjb25uZWN0aW9uIG9iamVjdCwgZXZlbiBpZiB3ZSBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3QsIGluY29taW5nXG4gICAgLy8gbWVzc2FnZXMgd2lsbCBzdGlsbCBiZSBwYXNzZWQgdGhyb3VnaCB0byB0aGlzLmVuZHBvaW50LlxuICAgIHRoaXMuZW5kcG9pbnQuc3Vic2NyaWJlKHRoaXMuc3luay5jb25uZWN0aW9uLnN0cmVhbSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgY2xhc3MgZm9yIENoYXJhY3RlcnNcbiAgICB0aGlzLnN5bmsub2JqZWN0cy5ieUtleS5jcmVhdGVCcmFuY2goJ24nKS5jbGFzcyA9IE5vdGU7XG5cbiAgICAvLyBXZSBjb3VsZCByZXBsYWNlICdjbG9zZScgd2l0aCByZWNvbm5lY3QnXG4gICAgdGhpcy5zeW5rLmNvbm5lY3Rpb24ub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3Rpb24gY2xvc2UgYnlTS2V5LmJyYW5jaGVzOicsIE9iamVjdC5rZXlzKHRoaXMuc3luay5vYmplY3RzLmJ5U0tleS5icmFuY2hlcykpO1xuICAgIH0pO1xuICAgIHRoaXMuc3luay5jb25uZWN0aW9uLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3Rpb24gb3BlbiBieVNLZXkuYnJhbmNoZXM6ICcsIE9iamVjdC5rZXlzKHRoaXMuc3luay5vYmplY3RzLmJ5U0tleS5icmFuY2hlcykpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvQXBwLmpzIiwiaW1wb3J0IHsgRW5kcG9pbnQgfSBmcm9tICdzeW5rLWpzJztcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBtYWluIGludGVyZmFjZSB0aGF0IHJlY2VpdmVzIFJQQ3MgZnJvbSB0aGUgc2VydmVyLiBBcHBFbmRwb2ludFxuICogbXVzdCBiZSBjcmVhdGVkIGJ5IGFuIEFwcCBpbnN0YW5jZSBpbiB0aGUgQXBwIGNvbnN0cnVjdG9yLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBFbmRwb2ludCBleHRlbmRzIEVuZHBvaW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7QXBwfSBhcHAgLSBUaGUgYWV0aGVyIGFwcCB0aGF0IHdlIGFyZSBsaXN0ZW5pbmcgdG9cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFwcCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9BcHBFbmRwb2ludC5qcyIsIi8qKlxuICogRXhhbXBsZSBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gcHJvdmlkZWQgYnkgc3luayBzZXJ2ZXJcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIC0gaW5pdGlhbCBzdGF0ZSBwcm92aWRlZCBieSBzeW5rIHNlcnZlclxuICAgKi9cbiAgY29uc3RydWN0b3Ioa2V5LCBzdGF0ZSkge1xuICAgIHRoaXMuZWxlbWVudFByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgIHRoaXMuZWxlbWVudENvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2RlJyk7XG4gICAgdGhpcy5lbGVtZW50UHJlLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudENvZGUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHsga2V5LCB0eXBlOiAnTm90ZScgfTtcblxuICAgIC8vIFNldCBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHByb3ZpZGVkIGJ5IHRoZSAnc3RhdGUnIGFyZ3VtZW50XG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQpIHRoaXMudXBkYXRlKHN0YXRlKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFByZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIC0gZGlmZiBwYXNzZWQgYnkgdGhlIHN5bmsgc2VydmVyXG4gICAqL1xuICB1cGRhdGUoc3RhdGUpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnRDb2RlLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUsIG51bGwsICcgICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoaXMgb2JqZWN0IGxlYXZlcyBvdXIgc3Vic2NyaXB0aW9uIGFyZWEsIG9yIGlzIHJlbW92ZWQgZnJvbSB0aGUgc3luayBzZXJ2ZXJcbiAgICovXG4gIHRlYXJkb3duKCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50UHJlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL05vdGUuanMiXSwic291cmNlUm9vdCI6IiJ9