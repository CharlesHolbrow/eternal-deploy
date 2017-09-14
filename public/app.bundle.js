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
     * Called when this object leaves our subscription area, or is removed from
     * the synk server.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3luay1qcy9kaXN0L3N5bmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcz9hM2I0Iiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FwcEVuZHBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ob3RlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIktlZmlyIiwiRW1pdHRlciIsIkFwcCIsIm9ubG9hZCIsImFwcCIsInN5bmsiLCJzZXRTdWJzY3JpcHRpb24iLCJyZXNvbHZlIiwib25jb250ZXh0bWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJodHRwcyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJzdGFydHNXaXRoIiwidXJsIiwiaG9zdCIsImVuZHBvaW50Iiwic3Vic2NyaWJlIiwiY29ubmVjdGlvbiIsInN0cmVhbSIsIm9iamVjdHMiLCJieUtleSIsImNyZWF0ZUJyYW5jaCIsImNsYXNzIiwib24iLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImJ5U0tleSIsImJyYW5jaGVzIiwiQXBwRW5kcG9pbnQiLCJOb3RlIiwia2V5Iiwic3RhdGUiLCJlbGVtZW50UHJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudENvZGUiLCJhcHBlbmRDaGlsZCIsInR5cGUiLCJ1bmRlZmluZWQiLCJ1cGRhdGUiLCJib2R5IiwiYXNzaWduIiwiaW5uZXJUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVB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Q3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Ozs7Ozs7Ozs7OztBQ1ByQjs7Ozs7Ozs7QUFFQTs7OztJQUlxQitCLFc7OztBQUNuQjs7O0FBR0EsdUJBQVk3QixHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBRWYsVUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBRmU7QUFHaEI7Ozs7O2tCQVBrQjZCLFc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7SUFHcUJDLEk7QUFDbkI7Ozs7QUFJQSxnQkFBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0MsVUFBTCxHQUFrQkMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJGLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbkI7QUFDQSxTQUFLRixVQUFMLENBQWdCSSxXQUFoQixDQUE0QixLQUFLRCxXQUFqQzs7QUFFQSxTQUFLSixLQUFMLEdBQWEsRUFBRUQsUUFBRixFQUFPTyxNQUFNLE1BQWIsRUFBYjs7QUFFQTtBQUNBLFFBQUlOLFVBQVVPLFNBQWQsRUFBeUIsS0FBS0MsTUFBTCxDQUFZUixLQUFaO0FBQ3pCRSxhQUFTTyxJQUFULENBQWNKLFdBQWQsQ0FBMEIsS0FBS0osVUFBL0I7QUFDRDs7QUFFRDs7Ozs7OzsyQkFHT0QsSyxFQUFPO0FBQ1pQLGFBQU9pQixNQUFQLENBQWMsS0FBS1YsS0FBbkIsRUFBMEJBLEtBQTFCO0FBQ0EsV0FBS0ksV0FBTCxDQUFpQk8sU0FBakIsR0FBNkJDLEtBQUtDLFNBQUwsQ0FBZSxLQUFLYixLQUFwQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQyxDQUE3QjtBQUNEOztBQUVEOzs7Ozs7OytCQUlXO0FBQ1RFLGVBQVNPLElBQVQsQ0FBY0ssV0FBZCxDQUEwQixLQUFLYixVQUEvQjtBQUNEOzs7Ozs7a0JBL0JrQkgsSSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwia2VmaXJcIiksIHJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFssIF0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3lua1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImtlZmlyXCIpLCByZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wic3lua1wiXSA9IGZhY3Rvcnkocm9vdFt1bmRlZmluZWRdLCByb290W3VuZGVmaW5lZF0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V2ZW50ZW1pdHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbnZhciBfZXZlbnRlbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50ZW1pdHRlcik7XG5cbnZhciBfa2VmaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX2tlZmlyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tlZmlyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBIb3cgbG9uZyBkbyB3ZSB3YWl0IGJlZm9yZSByZXRyeWluZyBhIGNvbm5lY3Rpb25cbnZhciBUSU1FT1VUID0gNTAwO1xuXG4vKipcbiogV3JhcCBhIHdlYnNvY2tldCBjb25uZWN0aW9uIHRvIHRoZSBzZXJ2ZXJcbiovXG5cbnZhciBDb25uZWN0aW9uID0gZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhDb25uZWN0aW9uLCBfRW1pdHRlcik7XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGEgY29ubmVjdGlvbi5cbiAgKlxuICAqIEV2ZW50c1xuICAqIC0gJ2Nvbm5lY3QnIC0gZmlyZWQgdGhlIGZpcnN0IHRpbWUgYSBjb25uZWN0aW9uIG9wZW5zIHN1Y2Nlc3NmdWxsbHlcbiAgKiAtICdyZWNvbm5lY3QnIC0gZmlyZWQgd2hlbiBzdWJzZXF1ZW5jdCBjb25uZWN0aW9ucyBvcGVuXG4gICogLSAnb3BlbicgLSBmaXJlZCB3aGVuIGFueSBjb25uZWN0aW9uIG9wZW5zXG4gICogLSAnY2xvc2UnIC0gZmlyZWQgd2hlbiBhbnkgY29ubmVjdGlvbiBjbG9zZXNcbiAgKiAtICdzZW5kRXJyb3InIChtZXNzYWdlKSAtIHdlIHRyaWVkIHRvIHNlbmQsIGJ1dCB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWRcbiAgKlxuICAqIEBhcmcge3N0cmluZ30gdXJsIC0gd2Vic29ja2V0IHVybCB0byBjb25uZWN0IHRvXG4gICovXG4gIGZ1bmN0aW9uIENvbm5lY3Rpb24odXJsKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3Rpb24pO1xuXG4gICAgLyoqXG4gICAgKiBAbWVtYmVyIHt1cmx9IHN0cmluZyAtIHRoZSB1cmwgd2UgY29ubmVjdCB0byBvbiB0aGUgbmV4dCBjb25uZWN0aW9uXG4gICAgKi9cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29ubmVjdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbm5lY3Rpb24pKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLnVybCA9IHVybDtcblxuICAgIC8qKlxuICAgICogQG1lbWJlciB7S2VmaXIuc3RyZWFtfSAtIHN0cmVhbSBvZiBtZXNzYWdlcyByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAqIEByZWFkb25seVxuICAgICovXG4gICAgX3RoaXMuc3RyZWFtID0gX2tlZmlyMi5kZWZhdWx0LmZyb21FdmVudHMoX3RoaXMsICdtZXNzYWdlJyk7XG5cbiAgICAvKipcbiAgICAqIEBtZW1iZXIge1dlYlNvY2tldH0gLSBUaGUgY3VycmVudCBzb2NrZXQgb2JqZWN0XG4gICAgKiBAcmVhZG9ubHlcbiAgICAqL1xuICAgIF90aGlzLnNvY2sgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7S2VmaXIuc3RyZWFtfSAtIGV2ZW50IGVhY2ggdGltZSB0aGUgY29ubmVjdGlvbiBpcyBvcGVuZWRcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICBfdGhpcy5vcGVuU3RyZWFtID0gX2tlZmlyMi5kZWZhdWx0LmZyb21FdmVudHMoX3RoaXMsICdvcGVuJyk7XG5cbiAgICBfdGhpcy5fY29ubmVjdGlvbkNvdW50ID0gMDtcbiAgICBfdGhpcy5fbG9nID0gW107XG4gICAgX3RoaXMuX21lc3NhZ2VRdWUgPSBbXTtcbiAgICBfdGhpcy5fY29ubmVjdCgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAqIENvbm5lY3QgYW5kIHN0YXkgY29ubmVjdGVkLiBUaGlzIGlzIGNhbGxlZCBvbmNlIGJ5IHRoZSBjb25zdHJ1Y3Rvci4gSXRcbiAgKiBzaG91bGQgbm90IGJlIGNhbGxlZCBhZ2FpbiBtYW51YWxseS5cbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDb25uZWN0aW9uLCBbe1xuICAgIGtleTogJ19jb25uZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Nvbm5lY3QoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5sb2coJ2Nvbm5lY3RpbmcuLi4nKTtcbiAgICAgIHRoaXMuc29jayA9IG5ldyBXZWJTb2NrZXQodGhpcy51cmwpO1xuXG4gICAgICB2YXIgcmVjb25uZWN0ID0gZnVuY3Rpb24gcmVjb25uZWN0KCkge1xuICAgICAgICBfdGhpczIubG9nKCdXYWl0aW5nIHRvIHJlY29ubmVjdC4uLicpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX2Nvbm5lY3QoKTtcbiAgICAgICAgfSwgVElNRU9VVCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNvY2sub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBfdGhpczIubG9nKFsnc29ja2V0IGVycm9yJywgZXJyb3JdKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc29jay5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5sb2coJ2Nvbm5lY3Rpb24gb3BlbmVkJyk7XG4gICAgICAgIF90aGlzMi5zb2NrLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgX3RoaXMyLmVtaXQoJ21lc3NhZ2UnLCBKU09OLnBhcnNlKG0uZGF0YSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzMi5fY29ubmVjdGlvbkNvdW50ICs9IDE7XG4gICAgICAgIGlmIChfdGhpczIuX2Nvbm5lY3Rpb25Db3VudCA9PT0gMSkge1xuICAgICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IHRpbWUgY29ubmVjdGluZywgc2VuZCBxdWVkIG1lc3NhZ2VzXG4gICAgICAgICAgd2hpbGUgKF90aGlzMi5fbWVzc2FnZVF1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZW5kKF90aGlzMi5fbWVzc2FnZVF1ZVswXSk7XG4gICAgICAgICAgICBfdGhpczIuX21lc3NhZ2VRdWUuc2hpZnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMyLmVtaXQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgfSBlbHNlIF90aGlzMi5lbWl0KCdyZWNvbm5lY3QnKTtcblxuICAgICAgICBfdGhpczIuZW1pdCgnb3BlbicpO1xuICAgICAgfTtcblxuICAgICAgLy8gVGhpcyBmaXJlcyBpZiBldmVuIGlmIHRoZSBjb25uZWN0aW9uIHdhcyBuZXZlciBvcGVuZWQuIEZvciBleGFtcGxlLCBpZlxuICAgICAgLy8gdGhlIHNlcnZlciBpcyBkb3duIHdoZW4gd2UgZmlyc3QgY29ubmVjdCwgb25jbG9zZSB3aWxsIHN0aWxsIGZpcmUuXG4gICAgICB0aGlzLnNvY2sub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLmxvZygnY2xvc2UnKTtcbiAgICAgICAgX3RoaXMyLmVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgIHJlY29ubmVjdCgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBhcmcge2FueXRoaW5nfSB2YWx1ZSAtIEFkZCBhbnkgdmFsdWUgdG8gdGhpcyBjb25uZWN0aW9uJ3MgaW50ZXJuYWwgbG9nXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbG9nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKHZhbHVlKSB7XG4gICAgICB0aGlzLl9sb2cucHVzaCh2YWx1ZSk7XG4gICAgICB0aGlzLmVtaXQoJ2xvZycsIHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLl9sb2cubGVuZ3RoID4gMjAwKSB0aGlzLl9sb2cuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldCB0aGUgUmVhZHkgU3RhdGUgQ29uc3RhbnQgb2YgdGhlIGN1cnJlbnQgc29ja2V0LiBPbmUgb2YgdGhlIGZvbGxvd2luZyBpbnRzOlxuICAgICogMCAtIENPTk5FQ1RJTkcgVGhlIGNvbm5lY3Rpb24gaXMgbm90IHlldCBvcGVuLlxuICAgICogMSAtIE9QRU4gVGhlIGNvbm5lY3Rpb24gaXMgb3BlbiBhbmQgcmVhZHkgdG8gY29tbXVuaWNhdGUuXG4gICAgKiAyIC0gQ0xPU0lORyBUaGUgY29ubmVjdGlvbiBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjbG9zaW5nLlxuICAgICogMyAtIENMT1NFRCBUaGUgY29ubmVjdGlvbiBpcyBjbG9zZWQgb3IgY291bGRuJ3QgYmUgb3BlbmVkLlxuICAgICpcbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gUmVhZHkgU3RhdGUgQ29uc3RhbnRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZW5kJyxcblxuXG4gICAgLyoqXG4gICAgKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgc2VydmVyLiBJZiB0aGUgY29ubmVjdGlvbiBpcyBub3QgeWV0IG9wZW4sIHF1ZSB0aGVcbiAgICAqIG1lc3NhZ2UgdG8gYmUgc2VudCBvbmNlIHRoZSBjb25uZWN0aW9uIGRvZXMgb3Blbi5cbiAgICAqXG4gICAgKiBAYXJnIHtPYmplY3R8U3RyaW5nfSBtZXNzYWdlIC0gSlNPTiBvYmplY3Qgb3Igc3RyaW5nIHRvIHNlbmQgdG8gdGhlIHNlcnZlci5cbiAgICAqIEByZXR1cm5zIHtib29sfG51bGx9IC0gdHJ1ZSBpZiB0aGUgbWVzc2FnZSB3YXMgc2VudCBzdWNjZXNzZnVsbHkuIG51bGwgaWYgdGhlXG4gICAgKiAgICAgICAgICBtZXNzYWdlIHdhcyBxdWVkIHRvIGJlIHNlbnQgbGF0ZXIuIEZhbHNlIGlmIHNlbmQgZmFpbGVkLlxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQobWVzc2FnZSkge1xuICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSAnc3RyaW5nJykgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gMSkge1xuICAgICAgICAvLyBXZSBhcmUgY29ubmVjdGVkXG4gICAgICAgIHRoaXMuc29jay5zZW5kKG1lc3NhZ2UpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhcmUgbm90IGNvbm5lY3RlZFxuICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25Db3VudCA9PT0gMCkge1xuICAgICAgICAvLyBXZSBoYXZlIG5ldmVyIGJlZW4gY29ubmVjdGVkXG4gICAgICAgIHRoaXMuX21lc3NhZ2VRdWUucHVzaChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5sb2coWydtZXNzYWdlIHF1ZWQnLCBtZXNzYWdlXSk7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIHRyaWVkIHRvIHNlbmQsIGJ1dCB0aGUgY29ubmVjdGlvbiB3YXMgYnJva2VuXG4gICAgICB0aGlzLmxvZyh7IHJlYXNvbjogJ3NlbmQgZmFpbGVkIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gd2FzIGJyb2tlbjonLCBtc2c6IG1lc3NhZ2UgfSk7XG4gICAgICB0aGlzLmxvZyhtZXNzYWdlKTtcbiAgICAgIHRoaXMuZW1pdCgnc2VuZEVycm9yJywgbWVzc2FnZSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdGF0ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIXRoaXMuc29jaykgcmV0dXJuIDM7XG5cbiAgICAgIHJldHVybiB0aGlzLnNvY2sucmVhZHlTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29ubmVjdGlvbjtcbn0oX2V2ZW50ZW1pdHRlcjIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbm5lY3Rpb247XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9rZWZpciA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfa2VmaXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2VmaXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiogQmFzZSBmb3IgY2xhc3NlcyB0aGF0IHJlc3BvbmQgdG8gYSBzdHJlYW0uXG4qXG4qIEV4dGVuZGluZyBFbmRwb2ludCBnaXZlIHVzIHRoZSBhYmlsaXR5IG1ha2UgcmVtb3RlIHByb2NlZWR1cmUgY2FsbHMgb24gY2xhc3NcbiogaW5zdGFuY2VzIGJ5IHNlbmRpbmcgbXNnIG9iamVjdHMgdG8gYSBLZWZpci5zdHJlYW0uIEV4dGVuc2lvbiBjbGFzc2VzIGRlZmluZVxuKiBtZXRob2RzIHRoYXQgY2FuIGJlIGNhbGxlZCBieSBzZW5kaW5nIG1lc3NhZ2VzIHRvIHRoZSBzdHJlYW0uXG4qXG4qIEFuIGVuZHBvaW50IGluc3RhbmNlIG1heSBvbmx5IGxpc3RlbiB0byBvbmUgY2xhc3MgYXQgYSB0aW1lXG4qL1xudmFyIEVuZHBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgKiBDcmVhdGUgYW4gRW5kcG9pbnQuIFVzdWFsbHkgdGhpcyB3aWxsIGJlIGNhbGxlZCB2aWEgc3VwZXIoKVxuICAqL1xuICBmdW5jdGlvbiBFbmRwb2ludCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW5kcG9pbnQpO1xuXG4gICAgdGhpcy5fc3Vic2NpcHRpb24gPSBudWxsO1xuICAgIHRoaXMuX2lucHV0U3RyZWFtID0gbnVsbDtcbiAgICB0aGlzLl91bmhhbmRsZWRTdHJlYW0gPSBudWxsO1xuICAgIHRoaXMudW5oYW5kbGVkID0gbmV3IF9rZWZpcjIuZGVmYXVsdC5Qb29sKCk7XG4gIH1cblxuICAvKipcbiAgKiBMaXN0ZW4gZm9yIGluY29taW5nIHJwYyBjYWxscyBvbiBhIHN0cmVhbS4gQSBjbGFzcyBpbnN0YW5jZSBtYXkgb25seSBsaXN0ZW5cbiAgKiB0byBvbmUgc3RyZWFtIGF0IGEgdGltZS4gVG8gdW5zdWJzY3JpYmUgZnJvbSB0aGUgY3VycmVudCBzdHJlYW0gY2FsbFxuICAqIHN1YnNjcmliZSgpIHdpdGggbm8gYXJndW1lbnRcbiAgKlxuICAqIEBhcmcge1tLZWZpci5zdHJlYW1dfSBzdHJlYW0gLSB0aGUgc3RyZWFtIHRvIHN1YnNjcmliZSB0by4gSWYgd2UgYXJlXG4gICogICAgICBzdWJzY3JpYmVkIHRvIGFub3RoZXIgc3RyZWFtLCB1bnN1YnNjcmliZSBmcm9tIGl0LiBNZXNzYWdlcyBvbiB0aGVcbiAgKiAgICAgIHN0cmVhbSBhcmUgZXhwZWN0ZWQgdG8gaW5jbHVkZSBhIHttZXRob2Q6ICdtZXRob2ROYW1lJ30gcGFyYW1ldGVyLiBUaGVcbiAgKiAgICAgIG1ldGhvZE5hbWUgc2hvdWxkIG1hdGNoIGEgbWV0aG9kIG9uIHRoZSBjbGFzcy4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aFxuICAqICAgICAgdGhlIGVudGlyZSBtZXNzYWdlIGFzIHRoZSBvbmx5IGFyZ3VtZW50LlxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEVuZHBvaW50LCBbe1xuICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShzdHJlYW0pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9zdWJzY2lwdGlvbikgdGhpcy5fc3Vic2NpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgICAgaWYgKHRoaXMuX3VuaGFuZGxlZFN0cmVhbSkgdGhpcy5vdXRwdXQudW5wbHVnKHRoaXMuX3VuaGFuZGxlZFN0cmVhbSk7XG5cbiAgICAgIHN0cmVhbSA9IHN0cmVhbSB8fCBudWxsO1xuICAgICAgdGhpcy5faW5wdXRTdHJlYW0gPSBzdHJlYW07XG5cbiAgICAgIGlmICghc3RyZWFtKSByZXR1cm47XG5cbiAgICAgIC8vIFdlIG5vdyBjcmVhdGUgdHdvIGRlcml2YXRpdmUgc3RyZWFtcy4gVGhlIGZpcnN0IGhhbmRsZXMgbWVzc2FnZXMgaWYgdGhpc1xuICAgICAgLy8gY2xhc3MgaGFzIGFuIGFwcHJvcHJpYXRlIGhhbmRsZXIgZ2l2ZW4gdGhlIG1lc3NhZ2UncyAnLm1ldGhvZCcgcGFyYW1ldGVyLlxuICAgICAgLy8gV2Ugb2JzZXJ2ZSB0aGlzIHN0cmVhbSwgYW5kIGxlYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBzdWJzY3JpcHRpb24gc28gd2VcbiAgICAgIC8vIGNhbiB1bnN1YnNjcmliZSBpZiB3ZSBhcmUgcGFzc2VkIGRpZmZlcmVudCBzdHJlYW0gdG8gbW9uaXRvci5cbiAgICAgIHRoaXMuX3N1YnNjaXB0aW9uID0gc3RyZWFtLmZpbHRlcihmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgX3RoaXNbbXNnLm1ldGhvZF0gPT09ICdmdW5jdGlvbic7XG4gICAgICB9KS5vYnNlcnZlKHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKG1zZykge1xuICAgICAgICAgIF90aGlzW21zZy5tZXRob2RdKG1zZyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcihtc2cpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZDogZnVuY3Rpb24gZW5kKG1zZykge1xuICAgICAgICAgIGNvbnNvbGUud2Fybihtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gVGhlIHNlY29uZCBkZXJpdmF0aXZlIHN0cmVhbSBwYXNzZXMgdW5oYW5kbGVkIG1lc3NhZ2VzIHRvIHRoZSBlbmRwb2ludCdzXG4gICAgICAvLyAub3V0cHV0IHN0cmVhbS4gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgdW5oYW5kbGVkIHN0cmVhbSBzbyB3ZSBjYW4gdW5wbHVnXG4gICAgICAvLyBpdCBmcm9tIHRoZSBvdXRwdXQgcG9vbCB3aGVuIHdlIHN1YnNjcmliZSB0byBhIG5ldyBzdHJlYW0uXG4gICAgICB0aGlzLl91bmhhbmRsZWRTdHJlYW0gPSBzdHJlYW0uZmlsdGVyKGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBfdGhpc1ttc2cubWV0aG9kXSAhPT0gJ2Z1bmN0aW9uJztcbiAgICAgIH0pO1xuICAgICAgdGhpcy51bmhhbmRsZWQucGx1Zyh0aGlzLl91bmhhbmRsZWRTdHJlYW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0IHRoZSBzdHJlYW0gb2Ygb3VyIGN1cnJlbnQgc3Vic2NyaXB0aW9uLlxuICAgICogQHJlYWRvbmx5XG4gICAgKiBAcmV0dXJucyB7S2VmaXIuc3RyZWFtfSAtIGN1cnJlbnQgc3Vic2NyaXB0aW9uLiBudWxsIGlmIG5vdCBzdWJzY3JpYmVkLlxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3N0cmVhbScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5wdXRTdHJlYW07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVuZHBvaW50O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFbmRwb2ludDtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIERlZmF1bHQgTGVhZiBvYmplY3QuIElmIGFuIG9iamVjdCBpcyBjcmVhdGVkIG9uIFxuICovXG52YXIgTGVhZiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGVhZigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGVhZik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGVhZiwgW3tcbiAgICBrZXk6ICd1cGRhdGUnLFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGlzIGNhbGxlZCB3aGVuIHRoZSBzZXJ2ZXIgY2hhbmdlcyB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRpZmYgLSBjaGFuZ2VzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIG9iamVjdFxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoZGlmZikge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaWZmKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgb2JqZWN0IHdpbGwgYmUgZGVzdHJveWVkIG9yIHJlbW92ZXMgZnJvbSB0aGUgY3VycmVudFxuICAgICAqIHN1YnNjcmlwdGlvbi4gWW91ciBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIG11c3QgcmVtb3ZlIHJlZmVyZW5jZXNcbiAgICAgKiB0byB0aGUgb2JqZWN0IGZyb20geW91ciBwcm9qZWN0IHNvIHRoYXQgdGhlIG9iamVjdCB3aWxsIGJlIGdhcmJhZ2VcbiAgICAgKiBjb2xsZWN0ZWQgY29ycmVjdGx5LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd0ZWFyZG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgICAgY29uc29sZS5sb2coJ3RlYXJkb3duOicsIHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMZWFmO1xufSgpO1xuXG4vKipcbiAqIEJyYW5jaCBpcyBwYXJ0IG9mIGEgdHJlZS1saWtlIERhdGEgc3RydWN0dXJlLiBFYWNoIGJyYW5jaCBjb250YWlucyBhbnkgbnVtYmVyXG4gKiBvZiBjaGlsZHJlbi4gRWFjaCBjaGlsZCBpcyBlaXRoZXIgYSBCcmFuY2ggb3IgYSBMZWFmLiBFYWNoIGNoaWxkIGlzXG4gKiBpZGVudGlmaWVkIGJ5IGEgbmFtZSBzdHJpbmcuIEluIHRoaXMgaW1wbGVtZW50YXRpb24sIExlYXZlcyBhcmUgYW55XG4gKiBqYXZhc2NyaXB0IE9iamVjdCB0aGF0IHNhdGlzZnkgdGhlIExlYWYgaW50ZXJmYWNlIGFib3ZlLlxuICpcbiAqIEVhY2ggQnJhbmNoIGhhcyBhIHNwZWNpYWwgcHJvcGVydHkgY2FsbGVkICdjbGFzcycuIFRoaXMgaXMgdGhlIHJlY29tbWVuZGVkXG4gKiBjbGFzcyBmb3IgTGVhZiBvYmplY3RzLiBMZWFmIG9iamVjdHMgbWF5IG9yIG1heSBub3QgYmUgY3JlYXRlZCB3aXRoIHRoZVxuICogcmVjb21tZW5kZWQgY2xhc3MuIFdoZW4gd2UgY3JlYXRlIG5ldyBCcmFuY2hlcyB3aXRoIGBiLmNyZWF0ZSguLi4pYCwgY2hpbGRcbiAqIGJyYW5jaGVzIGluaGVyaXQgdGhlIHBhcmVudCdzICdjbGFzcycgcHJvcGVydHkuXG4gKi9cblxuXG52YXIgQnJhbmNoID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHtDbGFzc30gW2Nsc10gLSBPcHRpb25hbCBjbGFzcy4gRGVmYXVsdCBpcyBPYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBCcmFuY2goY2xzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyYW5jaCk7XG5cbiAgICB0aGlzLmJyYW5jaGVzID0ge307XG4gICAgdGhpcy5sZWF2ZXMgPSB7fTtcbiAgICB0aGlzLl9jbGFzcyA9IGNscyB8fCBMZWFmO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSByZWNvbW1lbmRlZCBjbGFzcyBmb3IgY2hpbGQgbGVhdmVzIGF0dGFjaGVkIHRvIHRoaXMgb2JqZWN0LlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhCcmFuY2gsIFt7XG4gICAga2V5OiAnY3JlYXRlQnJhbmNoJyxcblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQnJhbmNoIG9yIGlkZW50aWZpZWQgYnkgYSBuYW1lLiBUaGUgZXhhbXBsZSBiZWxvdyByZXR1cm5zXG4gICAgICogdGhlIGNoaWxkIGlkZW50aWZpZWQgYnkgdGhlIG5hbWUgJ2FsaWNlJy4gSWYgJ2FsaWNlJyBkb2VzIG5vdCBleGlzdCBvbiB0aGVcbiAgICAgKiBCcmFuY2gsIGEgbmV3IGNoaWxkIEJyYW5jaCBjYWxsZWQgJ2FsaWNlJyB3aWxsIGJlIGNyZWF0ZWQuXG4gICAgICpcbiAgICAgKiBgYi5nZXQoJ2FsaWNlJykgXFxcXCByZXR1cm5zIHRoZSBicmFuY2ggb3IgY2hpbGQgbmFtZWQgYWxpY2VgXG4gICAgICpcbiAgICAgKiBBIGxvbmdlciBhZGRyZXNzIGNhbiBiZSBzcGVjaWZpZWQgaW4gdGhlIGZvcm1hdCBiZWxvdy4gVGhpcyB3aWxsIGNyZWF0ZSBuZXdcbiAgICAgKiBCcmFuY2hlcyBhbmQgc3ViLUJyYW5jaGVzIGlmIG5lZWRlZDpcbiAgICAgKlxuICAgICAqIGBiLmdldCgnYWxpY2UnLCAnaWNlIGNyZWFtJyAnb3RoZXInKWBcbiAgICAgKlxuICAgICAqIEluIGFueSBmb3JtYXQsIHRoZSBsYXN0IG5hbWUgc3BlY2lmaWVkIG1heSBiZSB0aGUgbmFtZSBvZiBhbiBleGlzdGluZyBMZWFmLlxuICAgICAqIEFsbCBwcmVjZWVkaW5nIG5hbWVzIG11c3QgYmUgQnJhbmNoIG5hbWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG4xIC0gdGhlIG5hbWUgd2UgYXJlIHRyeWluZyB0byBnZXQuXG4gICAgICogQHBhcmFtIHsuLi5TdHJpbmd9IG4yIC0gcmVtYWluaW5nIHN1YiBicmFuY2ggbmFtZXMuXG4gICAgICogQHJldHVybnMge0JyYW5jaH0gLSB0aGUgQnJhbmNoIG9yIExlYWYgd2UgcmVxdWVzdGVkLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCcmFuY2gobjEpIHtcbiAgICAgIHZhciBfYnJhbmNoZXMkbjtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG4yID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBuMltfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGlmIChuMSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLmJyYW5jaGVzLmhhc093blByb3BlcnR5KG4xKSkge1xuICAgICAgICAvLyBXZSBub3cga25vdyB0aGF0IHRoZSB2YWx1ZSBhdCB0aGlzW24xXSBpcyBub3Qgb3VyICdvd24nIHByb3BlcnR5LlxuICAgICAgICAvLyBJdCBpcyBlaXRoZXIgbm90IHByZXNlbnQsIG9yIG4xIGlzIG5vdCBhIHZhbGlkIG5hbWUuXG4gICAgICAgIGlmICh0aGlzLmJyYW5jaGVzW24xXSA9PT0gdW5kZWZpbmVkKSB0aGlzLmJyYW5jaGVzW24xXSA9IG5ldyBCcmFuY2godGhpcy5jbGFzcyk7ZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYnJhbmNoIG5hbWU6ICcgKyBuMSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIGtub3cgbjEgZXhpc3RzLCBhbmQgaXMgYSB2YWxpZCBuYW1lLlxuICAgICAgaWYgKCFuMiB8fCAhbjIubGVuZ3RoKSByZXR1cm4gdGhpcy5icmFuY2hlc1tuMV07XG5cbiAgICAgIHJldHVybiAoX2JyYW5jaGVzJG4gPSB0aGlzLmJyYW5jaGVzW24xXSkuY3JlYXRlQnJhbmNoLmFwcGx5KF9icmFuY2hlcyRuLCBuMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgc3RlcCB0aHJvdWdoIHRoZSB0cmVlLiBJZiBhbnkgQnJhbmNoIGlzIGZvdW5kIHRoYXQgaGFzIG5vXG4gICAgICogbGVhdmVzLCByZW1vdmUgdGhhdCBicmFuY2guXG4gICAgICogQHJldHVybnMge051bWJlcn0gLSB0aGUgbnVtYmVyIG9mIG9iamVjdHMgdGhhdCB3ZXJlIHJlbW92ZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3RyaW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmltKCkge1xuICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IE9iamVjdC5rZXlzKHRoaXMuYnJhbmNoZXMpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBuYW1lID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICBjb3VudCA9IGNvdW50ICsgdGhpcy5icmFuY2hlc1tuYW1lXS50cmltKCk7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLmJyYW5jaGVzW25hbWVdLmxlYXZlcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5icmFuY2hlc1tuYW1lXTtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IGl0ZXJhdGUgb3ZlciB0aGlzIGJyYW5jaCwgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGxlYWYuIFRoZVxuICAgICAqIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGluIHRoZSBmb3JtYXQ6XG4gICAgICpcbiAgICAgKiBgZihsZWFmLCAuLi5hcmdzKWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGYgLSBwcmVkaWNhdGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCBlYWNoIGxlYWZcbiAgICAgKiBAcGFyYW0gey4uLmFueX0gYXJncyAtIGFkZGl0aW9uYWwgYXJndW1lbnRzIHRvIHRoZSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZm9yRWFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goZikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IE9iamVjdC5rZXlzKHRoaXMuYnJhbmNoZXMpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIF9icmFuY2hlcyRuYW1lO1xuXG4gICAgICAgICAgdmFyIG5hbWUgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgICAoX2JyYW5jaGVzJG5hbWUgPSB0aGlzLmJyYW5jaGVzW25hbWVdKS5mb3JFYWNoLmFwcGx5KF9icmFuY2hlcyRuYW1lLCBbZl0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IE9iamVjdC5rZXlzKHRoaXMubGVhdmVzKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBfbmFtZSA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICAgIGYuYXBwbHkodW5kZWZpbmVkLCBbdGhpcy5sZWF2ZXNbX25hbWVdXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgYSBicmFuY2ggYnkgaXRzIGFkZHJlc3MuIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYi5nZXQoJ2FsaWNlJywgJ2JvYicsICdjYXQnKTsgLy8gR2V0IHRoaXMuYWxpY2UuYm9iLmNhdGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4uU3RyaW5nfSBhbGwgLSB0aGUgYWRkcmVzcyBvZiBCcmFuY2ggdG8gZ2V0LlxuICAgICAqIEByZXR1cm5zIHtCcmFuY2h8T2JqZWN0fG51bGx9IC0gQSBCcmFuY2ggb3IgTGVhZi4gTnVsbCBpZiBub3QgZm91bmRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0QnJhbmNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QnJhbmNoKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhbGwgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhbGxbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhbGwgfHwgYWxsLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRoaXM7ZWxzZSBpZiAoYWxsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAodGhpcy5icmFuY2hlcy5oYXNPd25Qcm9wZXJ0eShhbGxbMF0pKSByZXR1cm4gdGhpcy5icmFuY2hlc1thbGxbMF1dO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlyc3QgPSB0aGlzLmJyYW5jaGVzW2FsbFswXV07XG5cbiAgICAgIGlmIChmaXJzdCBpbnN0YW5jZW9mIEJyYW5jaCkgcmV0dXJuIGZpcnN0LmdldEJyYW5jaC5hcHBseShmaXJzdCwgX3RvQ29uc3VtYWJsZUFycmF5KGFsbC5zbGljZSgxKSkpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBjaGlsZCBCcmFuY2ggZnJvbSB0aGlzIGJyYW5jaC4gSWYgd2Ugc3BlY2lmeSBhIGxvbmdlciBhZGRyZXNzLFxuICAgICAqIG9ubHkgdGhlIHRpcCBvZiB0aGUgYWRkcmVzcyBzcGVjaWZpZWQgd2lsbCBiZSByZW1vdmVkLiBUaGUgZXhhbXBsZSBiZWxvd1xuICAgICAqIHJlbW92ZXMgJ2NhdCcgZnJvbSAnYm9iJywgYnV0IGRvZXMgbm90IHJlbW92ZSAnYm9iJyBmcm9tICdhbGljZScuXG4gICAgICpcbiAgICAgKiBgYi5yZW1vdmUoJ2FsaWNlJywgJ2JvYicsICdjYXQnKWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4uU3RyaW5nfSBhbGwgLSB0aGUgYWRkcmVzcyBvZiB0aGUgQnJhbmNoIG9yIExlYWYgd2Ugd2FudCB0b1xuICAgICAqICAgICAgICByZW1vdmUuIFRoZSBwYXJlbnQgb2YgdGhpcyBvYmplY3QgbXVzdCBiZSBhIEJyYW5jaC5cbiAgICAgKiBAcmV0dXJucyB7QnJhbmNofG51bGx9IC0gVGhlIEJyYW5jaCB0aGF0IHdhcyByZW1vdmVkLiBOdWxsIGlmIG5vdCBmb3VuZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlQnJhbmNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQnJhbmNoKCkge1xuICAgICAgdmFyIHBhcmVudCA9IHZvaWQgMDtcblxuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhbGwgPSBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhbGxbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFsbC5sZW5ndGggPT09IDEpIHBhcmVudCA9IHRoaXM7ZWxzZSBwYXJlbnQgPSB0aGlzLmdldEJyYW5jaC5hcHBseSh0aGlzLCBfdG9Db25zdW1hYmxlQXJyYXkoYWxsLnNsaWNlKDAsIC0xKSkpO1xuXG4gICAgICBpZiAoIXBhcmVudCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIHZhciBuYW1lID0gYWxsW2FsbC5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKCFwYXJlbnQuYnJhbmNoZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybiBudWxsO1xuXG4gICAgICB2YXIgb2JqID0gcGFyZW50LmJyYW5jaGVzW25hbWVdO1xuXG4gICAgICBkZWxldGUgcGFyZW50LmJyYW5jaGVzW25hbWVdO1xuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5vbiByZWN1cnNpdmUgbGVhZiByZXRyZXZpYWwuIFJldHVybnMgbnVsbCBpZiB0aGUgYnJhbmNoIGhhcyBubyBjaGlsZHJlblxuICAgICAqIHdpdGggdGhlIGdpdmVuIG5hbWUsIE9SIGlmIHRoZSBuYW1lIHBvaW50cyB0byBhbm90aGVyIGJyYW5jaFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgbGVhZiB3ZSBhcmUgbG9va2luZyBmb3I7XG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfSAtIG51bGwgaWYgdGhpcyBkb2VzIG5vdCBoYXZlIGEgYnJhbmNoXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldExlYWYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMZWFmKG5hbWUpIHtcbiAgICAgIGlmICh0aGlzLmxlYXZlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuIHRoaXMubGVhdmVzW25hbWVdO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBMZWFmIGluIHRoaXMgYnJhbmNoLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgb2JqZWN0IHdlIGFyZSBpbnRlcmVzdGVkIGluXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIE9iamVjdCB3ZSBhcmUgc2V0dGluZy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0TGVhZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldExlYWYobmFtZSwgb2JqKSB7XG4gICAgICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB0aGlzLnJlbW92ZUxlYWYobmFtZSk7ZWxzZSB0aGlzLmxlYXZlc1tuYW1lXSA9IG9iajtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGtleSBuYW1lIG9mIHRoZSBsZWFmIHRvIHJlbW92ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVMZWFmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTGVhZihuYW1lKSB7XG4gICAgICBkZWxldGUgdGhpcy5sZWF2ZXNbbmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xhc3MnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgQnJhbmNoZXMgY2xhc3MuIFRocm93IGlmIHYgaXMgbm90IGEgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gdiAtIHRoZSBjb25zdHJ1Y3RhYmxlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgIGlmICh0eXBlb2YgdiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgIHRoaXMuX2NsYXNzID0gdjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQnJhbmNoO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCcmFuY2g7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0VuZHBvaW50MiA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfRW5kcG9pbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5kcG9pbnQyKTtcblxudmFyIF9CcmFuY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX0JyYW5jaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CcmFuY2gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFN0b3JlIGEgY29sbGVjdGlvbiBvZiBvYmplY3RzIHRoYXQgd2lsbCBiZSBzeW5jaHJvbml6ZWQgd2l0aCB0aGUgc2VydmVyXG4gKi9cbnZhciBPYmplY3RzID0gZnVuY3Rpb24gKF9FbmRwb2ludCkge1xuICBfaW5oZXJpdHMoT2JqZWN0cywgX0VuZHBvaW50KTtcblxuICAvKipcbiAgICogQHBhcmFtIHtBcHB9IGFwcCAtIHRoZSBhZXRoZXIgQXBwIHRoaXMgb2JqZWN0IGlzIGJ1aWx0IG9uXG4gICAqL1xuICBmdW5jdGlvbiBPYmplY3RzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPYmplY3RzKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPYmplY3RzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0cykpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuYnlTS2V5ID0gbmV3IF9CcmFuY2gyLmRlZmF1bHQoKTtcbiAgICBfdGhpcy5ieUtleSA9IG5ldyBfQnJhbmNoMi5kZWZhdWx0KCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgc2V0IG9mIGtleXMgdGhhdCB3ZSBhcmUgc3Vic2NyaWJlZCB0by5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgaXMgdXN1YWxseSBjYWxsZWQgZnJvbSBjbGllbnQgdmlhIHRoZSBzeW5rLnJlc29sdmUoKSBtZXRob2QuXG4gICAqIFdlIHNob3VsZCBiZSBhYmxlIHRvIGNhbGwgdGhpcyBmcm9tIHRoZSBzZXJ2ZXIsIGJ1dCB0aGlzIGJlaGF2aW9yIGlzXG4gICAqIHVudGVzdGVkLiBJIGhhdmUgbm90IHRob3VnaHQgdGhyb3VnaCB0aGUgbG9naWMgb2YgaG93IHRoaXMgY291bGQgYmUgY2FsbGVkXG4gICAqIGZyb20gdGhlIHNlcnZlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZVN1YnNjcmlwdGlvbk1zZyAtIE9iamVjdCBjb250YWluaW5nIHN1YnNjcmlwdGlvblxuICAgKiAgICAgICAgY2hhbmdlLiBUaGUgb2JqZWN0IG11c3QgaGF2ZSB0d28gYXJyYXlzIG9mIHN0cmluZ3M6IC5hZGQgYW5kIC5yZW1vdmVcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoT2JqZWN0cywgW3tcbiAgICBrZXk6ICd1cGRhdGVLZXlzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlS2V5cyh1cGRhdGVTdWJzY3JpcHRpb25Nc2cpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbXNnID0gdXBkYXRlU3Vic2NyaXB0aW9uTXNnO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNnLnJlbW92ZSkgfHwgIUFycmF5LmlzQXJyYXkobXNnLmFkZCkpIGNvbnNvbGUuZXJyb3IoJ09iamVjdHMudXBkYXRlS2V5cyByZWNlaXZlZCBpbnZhbGlkIG1lc3NhZ2U6JywgbXNnKTtcblxuICAgICAgLy8gV2hlbiB3ZSB1bnN1YnNjcmliZSBmcm9tIGEgY2h1bmssIHdlIG5lZWQgdG8gcmVtb3ZlIGFuZCB0ZWFyZG93biBhbGwgdGhlXG4gICAgICAvLyBvYmplY3RzIGluIHRoYXQgY2h1bmsuXG4gICAgICBtc2cucmVtb3ZlLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBlbnR1cmUgY2h1bmtcbiAgICAgICAgX3RoaXMyLmJ5U0tleS5yZW1vdmVCcmFuY2gocCkuZm9yRWFjaChmdW5jdGlvbiAobGVhZikge1xuICAgICAgICAgIHZhciBfYnlLZXk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgZWFjaCBvYmplY3QgZnJvbSBpdHMgY29sbGVjdGlvblxuICAgICAgICAgIHZhciBwYXJ0cyA9IGxlYWYua2V5LnNwbGl0KCc6Jyk7XG4gICAgICAgICAgdmFyIGlkID0gcGFydHMucG9wKCk7XG4gICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSAoX2J5S2V5ID0gX3RoaXMyLmJ5S2V5KS5nZXRCcmFuY2guYXBwbHkoX2J5S2V5LCBfdG9Db25zdW1hYmxlQXJyYXkocGFydHMpKTtcblxuICAgICAgICAgIC8vIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3QgZXhpc3QsIHdlIGhhdmUgYnVnXG4gICAgICAgICAgaWYgKGNvbGxlY3Rpb24pIGNvbGxlY3Rpb24ucmVtb3ZlTGVhZihpZCk7ZWxzZSBjb25zb2xlLmVycm9yKCdVbnN1YnNjcmliZWQgZnJvbSBjaHVuaywgYnV0IGNvbGxlY3Rpb24gbm90IGZvdW5kOiAnICsgcGFydHMuam9pbignOicpKTtcblxuICAgICAgICAgIGxlYWYudGVhcmRvd24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgbXNnLmFkZC5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIF90aGlzMi5ieVNLZXkuY3JlYXRlQnJhbmNoKHApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IG9iamVjdC4gVHlwaWNhbGx5IGNhbGxlZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgd2hlbiB3ZSBhZGQgYW4gb2JqZWN0LCB0aGUgLmlkIGFuZCAua2V5IHByb3BlcnRpZXMgYXJlXG4gICAgICogYXV0b21hdGljYWxseSBzZXQuIFRoZSBPYmplY3RzIGNsYXNzIGRlcGVuZHMgb24gdGhlc2UgYmVpbmcgYXZhaWxhYmxlXG4gICAgICogd2hlbiByZW1vdmluZyB0aGUgb2JqZWN0LCBzbyB0aGV5IHNob3VsZCBub3QgYmUgY2hhbmdlZCBieSBjbGllbnQgY29kZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgLSBjb250YWlucyAua2V5LCAuc3RhdGUsIC5zS2V5LiBPcHRpb25hbCAucHNLZXlcbiAgICAgKiAgICAgICAgaW5kaWNhdGVzIG9iamVjdCBtb3ZlZCBoZXJlIGZyb20gYW5vdGhlciBjaHVuay5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkT2JqJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkT2JqKG1zZykge1xuICAgICAgdmFyIF9ieUtleTI7XG5cbiAgICAgIGlmICh0eXBlb2YgbXNnLnNLZXkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtc2cua2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBpbnZhbGlkIGFkZE9iaiBtZXNzYWdlJywgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJ0cyA9IG1zZy5rZXkuc3BsaXQoJzonKTtcbiAgICAgIHZhciBpZCA9IHBhcnRzLnBvcCgpO1xuICAgICAgdmFyIGNodW5rID0gdGhpcy5ieVNLZXkuZ2V0QnJhbmNoKG1zZy5zS2V5KTtcbiAgICAgIHZhciBjb2xsZWN0aW9uID0gKF9ieUtleTIgPSB0aGlzLmJ5S2V5KS5jcmVhdGVCcmFuY2guYXBwbHkoX2J5S2V5MiwgX3RvQ29uc3VtYWJsZUFycmF5KHBhcnRzKSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSB0aGlzIG9iamVjdFxuICAgICAgdmFyIG9iaiA9IGNvbGxlY3Rpb24uZ2V0TGVhZihpZCk7XG5cbiAgICAgIGlmIChvYmopIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHNlcnZlciBzZW50IHVzIGFuIGFkZE9iaiBtZXNzYWdlLCBidXQgd2UgYWxyZWR5IGhhZCAnICsgKCd0aGUgb2JqZWN0IGxvY2FsbHk6ICcgKyBtc2cua2V5KSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVE9ETzogcmVtb3ZlIGFuZCB0ZWFyZG93biBjJyk7IC8vIFRPRE86IHJlbW92ZSBhbmQgdGVhcmRvd24gYyBpbnRlYWQgb2YgdGhyb3dpbmcgYW4gZXJyb3JcbiAgICAgIH1cblxuICAgICAgb2JqID0gbmV3IGNvbGxlY3Rpb24uY2xhc3MobXNnLmtleSwgbXNnLnN0YXRlKTtcbiAgICAgIG9iai5pZCA9IGlkO1xuICAgICAgb2JqLmtleSA9IG1zZy5rZXk7XG5cbiAgICAgIGNodW5rLnNldExlYWYobXNnLmtleSwgb2JqKTtcbiAgICAgIGNvbGxlY3Rpb24uc2V0TGVhZihpZCwgb2JqKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdXRhdGUgYSBsb2NhbCBvYmplY3QuIERlc2lnbmVkIHRvIGJlIGNhbGxlZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZyAtIGRhdGEgZnJvbSBzZXJ2ZXIuIEluY2x1ZGVzIC5kaWZmIGFuZCAuc0tleS4gTWF5IGFsc29cbiAgICAgKiAgICAgICAgaW5jbHVkZSAubnNLZXkgKGlmIHRoZSBvYmplY3QgaXMgbW92aW5nIGJldHdlZW4gY2h1bmtzLilcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbW9kT2JqJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW9kT2JqKG1zZykge1xuICAgICAgdmFyIF9ieUtleTM7XG5cbiAgICAgIGlmICh0eXBlb2YgbXNnLnNLZXkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtc2cua2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBpbnZhbGlkIG1vZE9iaiBtZXNzYWdlJywgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJ0cyA9IG1zZy5rZXkuc3BsaXQoJzonKTtcbiAgICAgIHZhciBpZCA9IHBhcnRzLnBvcCgpO1xuICAgICAgdmFyIGNodW5rID0gdGhpcy5ieVNLZXkuZ2V0QnJhbmNoKG1zZy5zS2V5KTsgLy8gY3VycmVudCBjaHVua1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSAoX2J5S2V5MyA9IHRoaXMuYnlLZXkpLmNyZWF0ZUJyYW5jaC5hcHBseShfYnlLZXkzLCBfdG9Db25zdW1hYmxlQXJyYXkocGFydHMpKTtcbiAgICAgIHZhciBvYmogPSBjb2xsZWN0aW9uLmdldExlYWYoaWQpO1xuXG4gICAgICAvLyBEbyBzb21lIHNhbml0eSBjaGVja3MuLi5cblxuICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignV2UgcmVjZWl2ZWQgYSBtb2RPYmogcmVxdWVzdCwgYnV0IGNvdWxkIG5vdCBmaW5kIHRoZSAnICsgKCdvYmplY3QgbG9jYWxseTogJyArIG1zZy5rZXkpKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjaHVuay5nZXRMZWFmKG1zZy5rZXkpICE9PSBvYmopIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWl2ZWQgbW9kT2JqLiBUaGUgb2JqZWN0IHdhcyBmb3VuZCBvbiB0aGUgJyArIHBhcnRzICsgJyAnICsgKCdjb2xsZWN0aW9uLCBidXQgbm90IHRoZSAnICsgbXNnLnNLZXkgKyAnIGNodW5rLicpKTtcbiAgICAgICAgLy8gS2VlcCB0cnlpbmcgdG8gbW92ZSB0aGUgb2JqZWN0Li4uXG4gICAgICB9XG5cbiAgICAgIC8vIEFyZSB3ZSBtb2RpZnlpbmcgd2l0aGluIGEgY2h1bms/XG4gICAgICBpZiAoIW1zZy5uc0tleSkge1xuICAgICAgICBvYmoudXBkYXRlKG1zZy5kaWZmKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBvYmplY3QgbXVzdCBiZSBtb3ZlZCBvdXQgb2YgdGhlIGN1cnJlbnQgY2h1bmsuIElmIHdlIGFyZSBzdWJzY3JpYmVkXG4gICAgICAvLyB0byB0aGUgbmV3IGNodW5rLCBtb3ZlIHRoZSBvYmplY3QgdGhlcmUuIElmIHdlIGFyZSBub3Qgc3Vic2NyaWJlZCxcbiAgICAgIC8vIHJlbW92ZSBhbmQgdGVhcmRvd24oKSB0aGUgb2JqZWN0LlxuICAgICAgY2h1bmsucmVtb3ZlTGVhZihtc2cua2V5KTtcblxuICAgICAgdmFyIG5ld0NodW5rID0gdGhpcy5ieVNLZXkuZ2V0QnJhbmNoKG1zZy5uc0tleSk7XG5cbiAgICAgIGlmIChuZXdDaHVuaykge1xuICAgICAgICBuZXdDaHVuay5zZXRMZWFmKG1zZy5rZXksIG9iaik7XG4gICAgICAgIG9iai51cGRhdGUobXNnLmRpZmYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdGlvbi5yZW1vdmVMZWFmKGlkKTtcbiAgICAgICAgb2JqLnRlYXJkb3duKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW5kIHRlYXJkb3duIGFuIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbXNnIC0gaGFzIC5rZXkgYW5kIC5zS2V5IHN0cmluZ3NcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtT2JqJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtT2JqKG1zZykge1xuICAgICAgdmFyIF9ieUtleTQ7XG5cbiAgICAgIGlmICh0eXBlb2YgbXNnLnNLZXkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtc2cua2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBpbnZhbGlkIHJlbU9iaiBtZXNzYWdlJywgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJ0cyA9IG1zZy5rZXkuc3BsaXQoJzonKTtcbiAgICAgIHZhciBpZCA9IHBhcnRzLnBvcCgpO1xuICAgICAgdmFyIGNodW5rID0gdGhpcy5ieVNLZXkuZ2V0QnJhbmNoKG1zZy5zS2V5KTsgLy8gY3VycmVudCBjaHVua1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSAoX2J5S2V5NCA9IHRoaXMuYnlLZXkpLmdldEJyYW5jaC5hcHBseShfYnlLZXk0LCBfdG9Db25zdW1hYmxlQXJyYXkocGFydHMpKTtcbiAgICAgIHZhciBvYmogPSBjb2xsZWN0aW9uLmdldExlYWYoaWQpO1xuXG4gICAgICBpZiAoY2h1bmspIGNodW5rLnJlbW92ZUxlYWYobXNnLmtleSk7ZWxzZSBjb25zb2xlLmVycm9yKCdUcmllZCB0byByZW1vdmUgJyArIG1zZy5zS2V5ICsgJywgYnV0IGNvdWxkIG5vdCBmaW5kIG9iamVjdHMgYXQgJyArIHBhcnRzKTtcblxuICAgICAgaWYgKGNvbGxlY3Rpb24pIGNvbGxlY3Rpb24ucmVtb3ZlTGVhZihpZCk7ZWxzZSBjb25zb2xlLmVycm9yKCdUcmllZCB0byByZW1vdmUgJyArIG1zZy5rZXkgKyAnIGJ1dCBjb3VsZCBub3QgZmluZCAnICsgcGFydHMgKyAnIGluIC5ieUtleScpO1xuXG4gICAgICBpZiAob2JqKSBvYmoudGVhcmRvd24oKTtlbHNlIGNvbnNvbGUuZXJyb3IoJ0RBTkdFUjogVHJpZWQgdG8gcmVtb3ZlICcgKyBtc2cua2V5ICsgJywgYnV0IGNvdWxkIG5vdCBmaW5kIG9iamVjdCcpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPYmplY3RzO1xufShfRW5kcG9pbnQzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPYmplY3RzO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuU3luayA9IGV4cG9ydHMuT2JqZWN0cyA9IGV4cG9ydHMuQnJhbmNoID0gZXhwb3J0cy5FbmRwb2ludCA9IGV4cG9ydHMuQ29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9Db25uZWN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db25uZWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nvbm5lY3Rpb24pO1xuXG52YXIgX0VuZHBvaW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9FbmRwb2ludDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmRwb2ludCk7XG5cbnZhciBfQnJhbmNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9CcmFuY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnJhbmNoKTtcblxudmFyIF9PYmplY3RzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9PYmplY3RzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX09iamVjdHMpO1xuXG52YXIgX1N5bmsgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX1N5bmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3luayk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQ29ubmVjdGlvbiA9IF9Db25uZWN0aW9uMi5kZWZhdWx0O1xuZXhwb3J0cy5FbmRwb2ludCA9IF9FbmRwb2ludDIuZGVmYXVsdDtcbmV4cG9ydHMuQnJhbmNoID0gX0JyYW5jaDIuZGVmYXVsdDtcbmV4cG9ydHMuT2JqZWN0cyA9IF9PYmplY3RzMi5kZWZhdWx0O1xuZXhwb3J0cy5TeW5rID0gX1N5bmsyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9PYmplY3RzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9PYmplY3RzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX09iamVjdHMpO1xuXG52YXIgX0Nvbm5lY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Nvbm5lY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29ubmVjdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogU3luayB3cmFwcyBhIGNvbm5lY3Rpb24gYW5kIGFuIE9iamVjdHMgc3Vic2NyaXB0aW9uLlxuICovXG52YXIgU3luayA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBhcmcge3N0cmluZ30gdXJsIC0gdGhlIHdlYnNvY2tldCB1cmwgdG8gY29ubmVjdCB0b1xuICAgKiBAYXJnIHtbY2xhc3NdfSB3ZWJTb2NrZXRTdHViIC0gb3B0aW9uYWwgY2xhc3MgdG8gdXNlIGluc3RlYWQgb2YgV2ViU29ja2V0LlxuICAgKiAgICAgIFVzZWZ1bCBmb3IgdGVzdGluZyBpbnNpZGUgb2YgTm9kZS5qcy4gUHJvYmFibHkgbm90IG5lZWRlZCBpbiBhblxuICAgKiAgICAgIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gU3luayh1cmwpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN5bmspO1xuXG4gICAgdGhpcy5vYmplY3RzID0gbmV3IF9PYmplY3RzMi5kZWZhdWx0KCk7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IF9Db25uZWN0aW9uMi5kZWZhdWx0KHVybCk7XG5cbiAgICB0aGlzLm9iamVjdHMuc3Vic2NyaWJlKHRoaXMuY29ubmVjdGlvbi5zdHJlYW0pO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB7fTsgLy8gY3VycmVudGx5IGFjdGl2ZSBzdWJzY3JpcHRpb25zXG4gICAgdGhpcy5wZW5kaW5nQWRkID0ge307XG4gICAgdGhpcy5wZW5kaW5nUmVtb3ZlID0ge307XG5cbiAgICB0aGlzLmNvbm5lY3Rpb24ub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gT3VyIGNvbm5lY3Rpb24gaXMgY2xvc2VkLCBQcmVwYXJlIGZvciB0aGUgY29ubmVjdGlvbiB0byByZS1vcGVuLiBDYWNoZVxuICAgICAgLy8gdGhlIHN1YnNjcmlwdGlvbiBrZXlzIHdlIGFyZSBjdXJyZW50bHkgc3Vic2NyaWJlZCB0bywgYW5kIHRlYXJkb3duIGFsbFxuICAgICAgLy8gZXhpc3Rpbmcgb2JqZWN0cy5cbiAgICAgIHZhciBjdXJyZW50ID0gX3RoaXMuYWN0aXZlO1xuXG4gICAgICBfdGhpcy5vYmplY3RzLnVwZGF0ZUtleXMoe1xuICAgICAgICByZW1vdmU6IE9iamVjdC5rZXlzKF90aGlzLmFjdGl2ZSksXG4gICAgICAgIGFkZDogW11cbiAgICAgIH0pO1xuICAgICAgX3RoaXMuYWN0aXZlID0ge307XG5cbiAgICAgIC8vIFdoZW4gd2UgcmUtb3Blbiwgd2Ugd2FudCB0byByZS1zdWJzY3JpYmUgdG8gY29ycmVjdCBjb2xsZWN0aW9uIG9mIGtleXMuXG4gICAgICAvLyBSZXNvbHZlIHRoZSAucGVuZGluZ0FkZCBhbmQgLnBlbmRpbmdSZW1vdmUgb2JqZWN0cy5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBPYmplY3Qua2V5cyhfdGhpcy5wZW5kaW5nUmVtb3ZlKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICBpZiAoY3VycmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBkZWxldGUgY3VycmVudFtrZXldO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBPYmplY3Qua2V5cyhfdGhpcy5wZW5kaW5nQWRkKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBfa2V5ID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgY3VycmVudFtfa2V5XSA9IHRydWU7XG4gICAgICAgIH0gLy8gV2Uga25vdyB0aGUgY29sbGVjdGlvbiBvZiBrZXlzIHRoYXQgd2Ugd291bGQgbGlrZSB0byBiZSBzdWJzY3JpYmVkIHRvLlxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5wZW5kaW5nQWRkID0gY3VycmVudDtcbiAgICAgIF90aGlzLnBlbmRpbmdSZW1vdmUgPSB7fTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29ubmVjdGlvbi5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIHNldCBvZiBrZXlzIHRoYXQgd2Ugd2FudCB0byBzdWJzY3JpYmUgdG8sIGNhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZVxuICAgKiBiZXR3ZWVuIHRoZSBjdXJyZW50bHkgYWN0aXZlIHN1YnNjcmlwdGlvbiBhbmQgdGhlIG5ldyBkZXNpcmVkIHN1YnNjcmlwdGlvbi5cbiAgICogU3RvcmUgdGhlIHJlc3VsdCBpbiB0aGlzLnBlbmRpbmdBZGQgYW5kIHRoaXMucGVuZGluZ1JlbW92ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAtIGFsbCB0aGUga2V5cyB0aGF0IHdlIHdhbnQgdG8gc3Vic2NyaWJlIHRvLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhTeW5rLCBbe1xuICAgIGtleTogJ3NldFN1YnNjcmlwdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFN1YnNjcmlwdGlvbihrZXlzKSB7XG4gICAgICB0aGlzLnBlbmRpbmdBZGQgPSB7fTtcbiAgICAgIHRoaXMucGVuZGluZ1JlbW92ZSA9IHt9O1xuXG4gICAgICB2YXIgbmV3S2V5cyA9IHt9O1xuXG4gICAgICAvLyBjb252ZXJ0IGtleXMgYXJyYXkgdG8gb2JqZWN0XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IGtleXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcbiAgICAgICAgICB2YXIga2V5ID0gX3N0ZXAzLnZhbHVlO1xuICAgICAgICAgIG5ld0tleXNba2V5XSA9IHRydWU7XG4gICAgICAgIH0gLy8gZm9yIGVhY2ggY3VycmVudCBrZXksIGNoZWNrIGlmIHdlIHdhbnQgdG8gdW5zdWJzY3JpYmVcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjQgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjQgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZSlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDQ7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSAoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgYWN0aXZlS2V5ID0gX3N0ZXA0LnZhbHVlO1xuXG4gICAgICAgICAgaWYgKCFuZXdLZXlzLmhhc093blByb3BlcnR5KGFjdGl2ZUtleSkpIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBrZXkgdGhhdCB3ZSBkbyBub3Qgd2FudC5cbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1JlbW92ZVthY3RpdmVLZXldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3IgZWFjaCBuZXcga2V5LCBjaGVjayBpZiB3ZSBoYXZlIHRvIGFkZCBpdFxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yNCA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCAmJiBfaXRlcmF0b3I0LnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yNC5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNSA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yNSA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNSA9IGtleXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDU7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgPSAoX3N0ZXA1ID0gX2l0ZXJhdG9yNS5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgbmV3S2V5ID0gX3N0ZXA1LnZhbHVlO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZS5oYXNPd25Qcm9wZXJ0eShuZXdLZXkpKSB7XG4gICAgICAgICAgICAvLyBhIGtleSBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nQWRkW25ld0tleV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yNSA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yNSA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSAmJiBfaXRlcmF0b3I1LnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yNS5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNSkge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I1O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyeSB0byByZXNvbHZlIHRoZSBzdWJzY3JpcHRpb24uIElmIHRoZSBzdWJzY3JpcHRpb24gbWVzc2FnZSBpcyBub3Qgc2VudFxuICAgICAqIHN1Y2Nlc3NmdWxseSwgaXQgd2lsbCBiZSBzZW50IHdoZW4gdGhlIGNvbm5lY3Rpb24gcmUtb3BlbnMuXG4gICAgICogXG4gICAgICogQHJldHVybiB7Ym9vbH0gLSB0cnVlIGlmIHRoZSBtZXNzYWdlIHdhcyBzZW50IG9yIG5vIGNoYW5nZSBpcyBuZWVkZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVzb2x2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmUoKSB7XG4gICAgICB2YXIgbXNnID0ge1xuICAgICAgICBtZXRob2Q6ICd1cGRhdGVTdWJzY3JpcHRpb24nLFxuICAgICAgICBhZGQ6IE9iamVjdC5rZXlzKHRoaXMucGVuZGluZ0FkZCksXG4gICAgICAgIHJlbW92ZTogT2JqZWN0LmtleXModGhpcy5wZW5kaW5nUmVtb3ZlKVxuICAgICAgfTtcblxuICAgICAgLy8gSWYgbXNnLmFkZCBhbmQgbXNnLnJlbW92ZSBhcmUgZW1wdHksIG91ciBqb2IgaXMgZG9uZS5cbiAgICAgIGlmIChtc2cuYWRkLmxlbmd0aCA9PT0gMCAmJiBtc2cucmVtb3ZlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG5cbiAgICAgIC8vIElmIHRoZSBjb25uZWN0aW9uIGlzIG5vdCBvcGVuLCBkbyBub3RoaW5nICh3YWl0IGZvciBvcGVuIGV2ZW50KVxuICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbi5zdGF0ZSAhPT0gMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gVGhlIGNvbm5lY3Rpb24gaXMga25vd24gdG8gYmUgb3BlblxuXG4gICAgICB0aGlzLm9iamVjdHMudXBkYXRlS2V5cyhtc2cpO1xuICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQobXNnKTtcblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjYgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjYgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjYgPSBtc2cuYWRkW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA2OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gKF9zdGVwNiA9IF9pdGVyYXRvcjYubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGtleSA9IF9zdGVwNi52YWx1ZTtcblxuICAgICAgICAgIHRoaXMuYWN0aXZlW2tleV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3I2ID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ICYmIF9pdGVyYXRvcjYucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3I2LnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I2KSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I3ID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I3ID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I3ID0gbXNnLnJlbW92ZVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyA9IChfc3RlcDcgPSBfaXRlcmF0b3I3Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb243ID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBfa2V5MiA9IF9zdGVwNy52YWx1ZTtcblxuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZS5oYXNPd25Qcm9wZXJ0eShfa2V5MikpIGRlbGV0ZSB0aGlzLmFjdGl2ZVtfa2V5Ml07XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjcgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjcgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgJiYgX2l0ZXJhdG9yNy5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjcucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjcpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5wZW5kaW5nQWRkID0ge307XG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmUgPSB7fTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN5bms7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN5bms7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bmstanMvZGlzdC9zeW5rLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgJy4vanMvc3RhcnQuanMnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGRpdiB7cGFkZGluZzogMDsgbWFyZ2luOiAwfVxcblxcbmh0bWwge1xcbiAgLyogUHJldmVudCB1cyBmcm9tIGJlaW5nIGFibGUgdG8gc2Nyb2xsIHBhc3QgdGhlIGVuZCBvZlxcbiAgdGhlIHBhZ2UgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmRpdi5wYW5lIHtcXG4gIC8qXFxuICBwb3NpdGlvbjogYWJzb2x1dGUgaXMgcmVsYXRpdmUgdG8gdGhlIG5lYXJlc3Qgbm9uLXN0YXRpYyBhbmNlc3Rvci5cXG4gIHBvc2l0aW9uOiBmaXhlZCBpcyByZWxhdGl2ZSB0byB0aGV2aWV3cG9ydC4gXFxuXFxuICBUaGUgZGVmYXVsdCBwb3NpdGlvbiBpcyAnc3RhdGljJyBzbyB3ZSBoYXZlIHRvIG1ha2UgdGhlXFxuICBwYXJlbnQgYmUgbm9uLXN0YXRpYyBmb3IgaW5uZXIgZGl2cyB0byB3b3JrIGFzIGRlc2lyZWRcXG4gICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2Z1bGwge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI21haW4tdmlldyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIElmIHdlIGxlYXZlIHRoZSBwYXJlbnQgcG9zaXRpb24gaW4gdGhlIGRlZmF1bHQgJ3N0YXRpYydcXG4gIHNldHRpbmcgdGhpcyB0byBhYnNvbHV0ZSB3aWxsIG5vdCB3b3JrICovXFxufVxcblxcbiNzaWRlIHtcXG4gIHdpZHRoOiAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4jbWFpbi12aWV3IGNhbnZhcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIEknbSBub3Qgc3VyZSBpZiBwaXhpIHdpbGwgZG8gdGhpcyBmb3IgdXMgb3Igbm90LCBidXQgd2VcXG4gIHdhbnQgdG8gcHJldmVudCB0aGUgdXNlciBmcm9tIHNlbGVjdGluZyB0aGUgY2FudmFzICovXFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gTGlicmFyaWVzXG5pbXBvcnQgRW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCBLZWZpciBmcm9tICdrZWZpcic7XG5cbi8vIExvY2FsXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLmpzJztcblxuLy8gTGlic1xud2luZG93LktlZmlyID0gS2VmaXI7XG53aW5kb3cuRW1pdHRlciA9IEVtaXR0ZXI7XG5cbi8vIEFldGhlciBMaWJzXG53aW5kb3cuQXBwID0gQXBwO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBhcHAgPSB3aW5kb3cuYXBwID0gbmV3IEFwcCgpO1xuXG4gIGFwcC5zeW5rLnNldFN1YnNjcmlwdGlvbihbJ2V0ZXJuYWw6bWFpbiddKTtcbiAgYXBwLnN5bmsucmVzb2x2ZSgpO1xufTtcblxud2luZG93Lm9uY29udGV4dG1lbnUgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdGFydC5qcyIsImltcG9ydCB7IE9iamVjdHMsIENvbm5lY3Rpb24sIFN5bmsgfSAgZnJvbSAnc3luay1qcyc7XG5pbXBvcnQgQXBwRW5kcG9pbnQgZnJvbSAnLi9BcHBFbmRwb2ludC5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL05vdGUuanMnO1xuXG4vKipcbiogSGlnaCBsZXZlbCBBZXRoZXIgQXBwbGljYXRpb25cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICAvKipcbiAgKiBDcmVhdGUgYW4gQXBwXG4gICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGh0dHBzID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHBzJyk7XG4gICAgY29uc3QgdXJsID0gIGAke2h0dHBzID8gJ3dzcycgOiAnd3MnfTovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3dzYDtcblxuICAgIHRoaXMuc3luayA9IG5ldyBTeW5rKHVybCk7XG4gICAgdGhpcy5lbmRwb2ludCA9IG5ldyBBcHBFbmRwb2ludCh0aGlzKTtcblxuICAgIC8vIEFsbCBtZXNzYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGVuZHBvaW50LiBUaGFua3MgdG9cbiAgICAvLyB0aGUgY29ubmVjdGlvbiBvYmplY3QsIGV2ZW4gaWYgd2UgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0LCBpbmNvbWluZ1xuICAgIC8vIG1lc3NhZ2VzIHdpbGwgc3RpbGwgYmUgcGFzc2VkIHRocm91Z2ggdG8gdGhpcy5lbmRwb2ludC5cbiAgICB0aGlzLmVuZHBvaW50LnN1YnNjcmliZSh0aGlzLnN5bmsuY29ubmVjdGlvbi5zdHJlYW0pO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGNsYXNzIGZvciBDaGFyYWN0ZXJzXG4gICAgdGhpcy5zeW5rLm9iamVjdHMuYnlLZXkuY3JlYXRlQnJhbmNoKCduJykuY2xhc3MgPSBOb3RlO1xuXG4gICAgLy8gV2UgY291bGQgcmVwbGFjZSAnY2xvc2UnIHdpdGggcmVjb25uZWN0J1xuICAgIHRoaXMuc3luay5jb25uZWN0aW9uLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW9uIGNsb3NlIGJ5U0tleS5icmFuY2hlczonLCBPYmplY3Qua2V5cyh0aGlzLnN5bmsub2JqZWN0cy5ieVNLZXkuYnJhbmNoZXMpKTtcbiAgICB9KTtcbiAgICB0aGlzLnN5bmsuY29ubmVjdGlvbi5vbignb3BlbicsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW9uIG9wZW4gYnlTS2V5LmJyYW5jaGVzOiAnLCBPYmplY3Qua2V5cyh0aGlzLnN5bmsub2JqZWN0cy5ieVNLZXkuYnJhbmNoZXMpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0FwcC5qcyIsImltcG9ydCB7IEVuZHBvaW50IH0gZnJvbSAnc3luay1qcyc7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgbWFpbiBpbnRlcmZhY2UgdGhhdCByZWNlaXZlcyBSUENzIGZyb20gdGhlIHNlcnZlci4gQXBwRW5kcG9pbnRcbiAqIG11c3QgYmUgY3JlYXRlZCBieSBhbiBBcHAgaW5zdGFuY2UgaW4gdGhlIEFwcCBjb25zdHJ1Y3Rvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwRW5kcG9pbnQgZXh0ZW5kcyBFbmRwb2ludCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0FwcH0gYXBwIC0gVGhlIGFldGhlciBhcHAgdGhhdCB3ZSBhcmUgbGlzdGVuaW5nIHRvXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcHApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvQXBwRW5kcG9pbnQuanMiLCIvKipcbiAqIEV4YW1wbGUgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGUge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHByb3ZpZGVkIGJ5IHN5bmsgc2VydmVyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSAtIGluaXRpYWwgc3RhdGUgcHJvdmlkZWQgYnkgc3luayBzZXJ2ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGtleSwgc3RhdGUpIHtcbiAgICB0aGlzLmVsZW1lbnRQcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICB0aGlzLmVsZW1lbnRDb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29kZScpO1xuICAgIHRoaXMuZWxlbWVudFByZS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRDb2RlKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IGtleSwgdHlwZTogJ05vdGUnIH07XG5cbiAgICAvLyBTZXQgYW55IGFkZGl0aW9uYWwgcHJvcGVydGllcyBwcm92aWRlZCBieSB0aGUgJ3N0YXRlJyBhcmd1bWVudFxuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnVwZGF0ZShzdGF0ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRQcmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSAtIGRpZmYgcGFzc2VkIGJ5IHRoZSBzeW5rIHNlcnZlclxuICAgKi9cbiAgdXBkYXRlKHN0YXRlKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBzdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50Q29kZS5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLCBudWxsLCAnICAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGlzIG9iamVjdCBsZWF2ZXMgb3VyIHN1YnNjcmlwdGlvbiBhcmVhLCBvciBpcyByZW1vdmVkIGZyb21cbiAgICogdGhlIHN5bmsgc2VydmVyLlxuICAgKi9cbiAgdGVhcmRvd24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRQcmUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvTm90ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=