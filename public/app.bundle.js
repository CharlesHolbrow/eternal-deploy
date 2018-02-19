webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(13), __webpack_require__(14));else if (true) __webpack_require__(15)([,], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["synk"] = factory(require("eventemitter3"), require("kefir"));else root["synk"] = factory(root[undefined], root[undefined]);
})(undefined, function (__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 6);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _eventemitter = __webpack_require__(1);

      var _eventemitter2 = _interopRequireDefault(_eventemitter);

      var _kefir = __webpack_require__(2);

      var _kefir2 = _interopRequireDefault(_kefir);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

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

      /***/
    },
    /* 1 */
    /***/function (module, exports) {

      module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

      /***/
    },
    /* 2 */
    /***/function (module, exports) {

      module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _eventemitter = __webpack_require__(1);

      var _eventemitter2 = _interopRequireDefault(_eventemitter);

      var _kefir = __webpack_require__(2);

      var _kefir2 = _interopRequireDefault(_kefir);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

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

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

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

          , set: function set(v) {
            if (typeof v !== 'function') throw new Error('Class must be a function');
            this._class = v;
          }
        }]);

        return Branch;
      }();

      exports.default = Branch;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _Endpoint2 = __webpack_require__(3);

      var _Endpoint3 = _interopRequireDefault(_Endpoint2);

      var _Branch = __webpack_require__(4);

      var _Branch2 = _interopRequireDefault(_Branch);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

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
          // As of November 5, 2017, unordered mod messages that arrive after addObj
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
                var parts = leaf.t.split(':');
                var collection = (_byKey = _this2.byKey).getBranch.apply(_byKey, _toConsumableArray(parts)); // The group of objects in that type

                // If the collection doesn't exist, we have bug
                if (!collection) console.error('Unsubscribed from chunk, but collection not found: ' + leaf.t);

                _this2.removeObject(leaf, collection, null, null);
              });
            });

            msg.add.forEach(function (p) {
              _this2.bySKey.createBranch(p);
            });
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
            var _byKey2;

            var obj = this.byId[key];

            if (obj) return obj;

            var parts = key.split(':');
            var id = parts.pop();
            var collection = (_byKey2 = this.byKey).getBranch.apply(_byKey2, _toConsumableArray(parts));

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
            var _byKey3;

            if (typeof msg.sKey !== 'string' || typeof msg.id !== 'string') {
              console.error('Received invalid add message', msg);

              return;
            }

            var chunk = this.bySKey.getBranch(msg.sKey);
            var collection = (_byKey3 = this.byKey).createBranch.apply(_byKey3, _toConsumableArray(msg.t.split(':')));

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

            obj = new collection.class(msg.id, msg.state, this, msg.t);
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
           * Remove an object. Usually called by the server.
           * @param {Object} msg - obj containing .id .t and .sKey
           */

        }, {
          key: 'rem',
          value: function rem(msg) {
            var _byKey4;

            if (typeof msg.sKey !== 'string' || typeof msg.id !== 'string') {
              console.error('Received invalid remObj message', msg);

              return;
            }

            var parts = msg.t.split(':');
            var id = msg.id;
            var chunk = this.bySKey.getBranch(msg.sKey); // current chunk
            var collection = (_byKey4 = this.byKey).getBranch.apply(_byKey4, _toConsumableArray(parts));
            var obj = collection.getLeaf(id);

            if (!chunk) console.error('Tried to remove ' + msg.sKey + ', but could not find objects at ' + parts);

            if (!collection) console.error('Tried to remove ' + id + ' but could not find ' + parts + ' in .byKey');

            if (obj) this.removeObject(obj, chunk, collection, msg);else console.error('DANGER: Tried to remove ' + msg.id + ', but could not find object');
          }

          /**
           * Modify an object. Usually called from the server.
           * @param {Object} msg containing .id .sKey .t .v and .diff. the presense of
           *        .nsKey indicates that the object is moving to a new subscription key
           */

        }, {
          key: 'mod',
          value: function mod(msg) {
            var _byKey5;

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
            var collection = (_byKey5 = this.byKey).createBranch.apply(_byKey5, _toConsumableArray(parts));

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
            var newChunk = this.bySKey.getBranch(msg.nsKey);

            if (newChunk) {
              chunk.removeLeaf(id);
              newChunk.setLeaf(id, obj);
              obj.update(msg.diff);
              this.emit('mod', obj, msg);
            } else this.removeObject(obj, collection, chunk, msg);

            return;
          }

          /**
           * Remove object from up to two branches
           * - Causes teardown()
           * - emits 'rem', obj, msg
           *
           * @param {Object} obj - object to remove with .id
           * @param {[Branch]} branch1 - Optional first branch
           * @param {[Branch]} branch2 - Optional second branch
           * @param {[Object]} msg - The msg that triggered the removal. If provided
           *        this will emit along with the object
           */

        }, {
          key: 'removeObject',
          value: function removeObject(obj, branch1, branch2, msg) {
            if (branch1) branch1.removeLeaf(obj.id);
            if (branch2) branch2.removeLeaf(obj.id);

            delete this.byId[obj.id];

            this.emit('rem', obj, msg);

            obj.teardown();
          }
        }]);

        return Objects;
      }(_Endpoint3.default);

      exports.default = Objects;

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

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

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.Connection = _Connection2.default;
      exports.Endpoint = _Endpoint2.default;
      exports.Branch = _Branch2.default;
      exports.Objects = _Objects2.default;
      exports.Synk = _Synk2.default;

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _Objects = __webpack_require__(5);

      var _Objects2 = _interopRequireDefault(_Objects);

      var _Connection = __webpack_require__(0);

      var _Connection2 = _interopRequireDefault(_Connection);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

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

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(10);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "/* Prevent us from being able to scroll past the end of the page */\nhtml {\n  overflow: hidden;\n}\n\nhtml, body, div {\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n}\n\n#root {\n  color: rgb(255, 52, 52);\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  height: 100%;\n  background-color: black;\n}\n\n.note {\n  flex-grow: 1;\n  transition-property: background-color, flex-grow;\n  transition-duration: 1000ms;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
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
/* 8 */
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

var	fixUrls = __webpack_require__(9);

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
/* 9 */
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
/* 10 */
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
  var hash = window.location.hash;

  if (!hash || hash === '') hash = 'main';

  app.synk.setSubscription(['piano:' + hash]);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _synkJs = __webpack_require__(3);

var _AppEndpoint = __webpack_require__(16);

var _AppEndpoint2 = _interopRequireDefault(_AppEndpoint);

var _Note = __webpack_require__(17);

var _Note2 = _interopRequireDefault(_Note);

var _Midier = __webpack_require__(18);

var _Midier2 = _interopRequireDefault(_Midier);

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
  this.midier = new _Midier2.default();

  this.midier.on('noteOn', function (n, v, c) {
    _this.synk.connection.send({
      method: 'note',
      on: true,
      n: n, v: v, c: c
    });
  });

  this.midier.on('noteOff', function (n, v, c) {
    _this.synk.connection.send({
      method: 'note',
      on: false,
      n: n, v: v, c: c
    });
  });

  this.midier.on('pedal', function (down, c) {
    console.log('pedal down?', down, c);
  });

  // All messages from the server will be passed to the endpoint. Thanks to
  // the connection object, even if we disconnect and reconnect, incoming
  // messages will still be passed through to this.endpoint.
  this.endpoint.subscribe(this.synk.connection.stream);

  // Set the default class for Characters
  this.synk.objects.byKey.createBranch('n').class = _Note2.default;

  this.synk.objects.on('add', function (obj, msg) {});
  this.synk.objects.on('mod', function (obj, msg) {});
  this.synk.objects.on('rem', function (obj, msg) {});

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
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! Kefir.js v3.7.2
 *  https://github.com/rpominov/kefir
 */

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Kefir = global.Kefir || {})));
}(this, (function (exports) { 'use strict';

function createObj(proto) {
  var F = function () {};
  F.prototype = proto;
  return new F();
}

function extend(target /*, mixin1, mixin2...*/) {
  var length = arguments.length,
      i = void 0,
      prop = void 0;
  for (i = 1; i < length; i++) {
    for (prop in arguments[i]) {
      target[prop] = arguments[i][prop];
    }
  }
  return target;
}

function inherit(Child, Parent /*, mixin1, mixin2...*/) {
  var length = arguments.length,
      i = void 0;
  Child.prototype = createObj(Parent.prototype);
  Child.prototype.constructor = Child;
  for (i = 2; i < length; i++) {
    extend(Child.prototype, arguments[i]);
  }
  return Child;
}

var NOTHING = ['<nothing>'];
var END = 'end';
var VALUE = 'value';
var ERROR = 'error';
var ANY = 'any';

function concat(a, b) {
  var result = void 0,
      length = void 0,
      i = void 0,
      j = void 0;
  if (a.length === 0) {
    return b;
  }
  if (b.length === 0) {
    return a;
  }
  j = 0;
  result = new Array(a.length + b.length);
  length = a.length;
  for (i = 0; i < length; i++, j++) {
    result[j] = a[i];
  }
  length = b.length;
  for (i = 0; i < length; i++, j++) {
    result[j] = b[i];
  }
  return result;
}

function find(arr, value) {
  var length = arr.length,
      i = void 0;
  for (i = 0; i < length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

function findByPred(arr, pred) {
  var length = arr.length,
      i = void 0;
  for (i = 0; i < length; i++) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
}

function cloneArray(input) {
  var length = input.length,
      result = new Array(length),
      i = void 0;
  for (i = 0; i < length; i++) {
    result[i] = input[i];
  }
  return result;
}

function remove(input, index) {
  var length = input.length,
      result = void 0,
      i = void 0,
      j = void 0;
  if (index >= 0 && index < length) {
    if (length === 1) {
      return [];
    } else {
      result = new Array(length - 1);
      for (i = 0, j = 0; i < length; i++) {
        if (i !== index) {
          result[j] = input[i];
          j++;
        }
      }
      return result;
    }
  } else {
    return input;
  }
}

function map(input, fn) {
  var length = input.length,
      result = new Array(length),
      i = void 0;
  for (i = 0; i < length; i++) {
    result[i] = fn(input[i]);
  }
  return result;
}

function forEach(arr, fn) {
  var length = arr.length,
      i = void 0;
  for (i = 0; i < length; i++) {
    fn(arr[i]);
  }
}

function fillArray(arr, value) {
  var length = arr.length,
      i = void 0;
  for (i = 0; i < length; i++) {
    arr[i] = value;
  }
}

function contains(arr, value) {
  return find(arr, value) !== -1;
}

function slide(cur, next, max) {
  var length = Math.min(max, cur.length + 1),
      offset = cur.length - length + 1,
      result = new Array(length),
      i = void 0;
  for (i = offset; i < length; i++) {
    result[i - offset] = cur[i];
  }
  result[length - 1] = next;
  return result;
}

function callSubscriber(type, fn, event) {
  if (type === ANY) {
    fn(event);
  } else if (type === event.type) {
    if (type === VALUE || type === ERROR) {
      fn(event.value);
    } else {
      fn();
    }
  }
}

function Dispatcher() {
  this._items = [];
  this._spies = [];
  this._inLoop = 0;
  this._removedItems = null;
}

extend(Dispatcher.prototype, {
  add: function (type, fn) {
    this._items = concat(this._items, [{ type: type, fn: fn }]);
    return this._items.length;
  },
  remove: function (type, fn) {
    var index = findByPred(this._items, function (x) {
      return x.type === type && x.fn === fn;
    });

    // if we're currently in a notification loop,
    // remember this subscriber was removed
    if (this._inLoop !== 0 && index !== -1) {
      if (this._removedItems === null) {
        this._removedItems = [];
      }
      this._removedItems.push(this._items[index]);
    }

    this._items = remove(this._items, index);
    return this._items.length;
  },
  addSpy: function (fn) {
    this._spies = concat(this._spies, [fn]);
    return this._spies.length;
  },


  // Because spies are only ever a function that perform logging as
  // their only side effect, we don't need the same complicated
  // removal logic like in remove()
  removeSpy: function (fn) {
    this._spies = remove(this._spies, this._spies.indexOf(fn));
    return this._spies.length;
  },
  dispatch: function (event) {
    this._inLoop++;
    for (var i = 0, spies = this._spies; this._spies !== null && i < spies.length; i++) {
      spies[i](event);
    }

    for (var _i = 0, items = this._items; _i < items.length; _i++) {
      // cleanup was called
      if (this._items === null) {
        break;
      }

      // this subscriber was removed
      if (this._removedItems !== null && contains(this._removedItems, items[_i])) {
        continue;
      }

      callSubscriber(items[_i].type, items[_i].fn, event);
    }
    this._inLoop--;
    if (this._inLoop === 0) {
      this._removedItems = null;
    }
  },
  cleanup: function () {
    this._items = null;
    this._spies = null;
  }
});

function Observable() {
  this._dispatcher = new Dispatcher();
  this._active = false;
  this._alive = true;
  this._activating = false;
  this._logHandlers = null;
  this._spyHandlers = null;
}

extend(Observable.prototype, {
  _name: 'observable',

  _onActivation: function () {},
  _onDeactivation: function () {},
  _setActive: function (active) {
    if (this._active !== active) {
      this._active = active;
      if (active) {
        this._activating = true;
        this._onActivation();
        this._activating = false;
      } else {
        this._onDeactivation();
      }
    }
  },
  _clear: function () {
    this._setActive(false);
    this._dispatcher.cleanup();
    this._dispatcher = null;
    this._logHandlers = null;
  },
  _emit: function (type, x) {
    switch (type) {
      case VALUE:
        return this._emitValue(x);
      case ERROR:
        return this._emitError(x);
      case END:
        return this._emitEnd();
    }
  },
  _emitValue: function (value) {
    if (this._alive) {
      this._dispatcher.dispatch({ type: VALUE, value: value });
    }
  },
  _emitError: function (value) {
    if (this._alive) {
      this._dispatcher.dispatch({ type: ERROR, value: value });
    }
  },
  _emitEnd: function () {
    if (this._alive) {
      this._alive = false;
      this._dispatcher.dispatch({ type: END });
      this._clear();
    }
  },
  _on: function (type, fn) {
    if (this._alive) {
      this._dispatcher.add(type, fn);
      this._setActive(true);
    } else {
      callSubscriber(type, fn, { type: END });
    }
    return this;
  },
  _off: function (type, fn) {
    if (this._alive) {
      var count = this._dispatcher.remove(type, fn);
      if (count === 0) {
        this._setActive(false);
      }
    }
    return this;
  },
  onValue: function (fn) {
    return this._on(VALUE, fn);
  },
  onError: function (fn) {
    return this._on(ERROR, fn);
  },
  onEnd: function (fn) {
    return this._on(END, fn);
  },
  onAny: function (fn) {
    return this._on(ANY, fn);
  },
  offValue: function (fn) {
    return this._off(VALUE, fn);
  },
  offError: function (fn) {
    return this._off(ERROR, fn);
  },
  offEnd: function (fn) {
    return this._off(END, fn);
  },
  offAny: function (fn) {
    return this._off(ANY, fn);
  },
  observe: function (observerOrOnValue, onError, onEnd) {
    var _this = this;
    var closed = false;

    var observer = !observerOrOnValue || typeof observerOrOnValue === 'function' ? { value: observerOrOnValue, error: onError, end: onEnd } : observerOrOnValue;

    var handler = function (event) {
      if (event.type === END) {
        closed = true;
      }
      if (event.type === VALUE && observer.value) {
        observer.value(event.value);
      } else if (event.type === ERROR && observer.error) {
        observer.error(event.value);
      } else if (event.type === END && observer.end) {
        observer.end(event.value);
      }
    };

    this.onAny(handler);

    return {
      unsubscribe: function () {
        if (!closed) {
          _this.offAny(handler);
          closed = true;
        }
      },

      get closed() {
        return closed;
      }
    };
  },


  // A and B must be subclasses of Stream and Property (order doesn't matter)
  _ofSameType: function (A, B) {
    return A.prototype.getType() === this.getType() ? A : B;
  },
  setName: function (sourceObs /* optional */, selfName) {
    this._name = selfName ? sourceObs._name + '.' + selfName : sourceObs;
    return this;
  },
  log: function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.toString();

    var isCurrent = void 0;
    var handler = function (event) {
      var type = '<' + event.type + (isCurrent ? ':current' : '') + '>';
      if (event.type === END) {
        console.log(name, type);
      } else {
        console.log(name, type, event.value);
      }
    };

    if (this._alive) {
      if (!this._logHandlers) {
        this._logHandlers = [];
      }
      this._logHandlers.push({ name: name, handler: handler });
    }

    isCurrent = true;
    this.onAny(handler);
    isCurrent = false;

    return this;
  },
  offLog: function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.toString();

    if (this._logHandlers) {
      var handlerIndex = findByPred(this._logHandlers, function (obj) {
        return obj.name === name;
      });
      if (handlerIndex !== -1) {
        this.offAny(this._logHandlers[handlerIndex].handler);
        this._logHandlers.splice(handlerIndex, 1);
      }
    }

    return this;
  },
  spy: function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.toString();

    var handler = function (event) {
      var type = '<' + event.type + '>';
      if (event.type === END) {
        console.log(name, type);
      } else {
        console.log(name, type, event.value);
      }
    };
    if (this._alive) {
      if (!this._spyHandlers) {
        this._spyHandlers = [];
      }
      this._spyHandlers.push({ name: name, handler: handler });
      this._dispatcher.addSpy(handler);
    }
    return this;
  },
  offSpy: function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.toString();

    if (this._spyHandlers) {
      var handlerIndex = findByPred(this._spyHandlers, function (obj) {
        return obj.name === name;
      });
      if (handlerIndex !== -1) {
        this._dispatcher.removeSpy(this._spyHandlers[handlerIndex].handler);
        this._spyHandlers.splice(handlerIndex, 1);
      }
    }
    return this;
  }
});

// extend() can't handle `toString` in IE8
Observable.prototype.toString = function () {
  return '[' + this._name + ']';
};

function Stream() {
  Observable.call(this);
}

inherit(Stream, Observable, {
  _name: 'stream',

  getType: function () {
    return 'stream';
  }
});

function Property() {
  Observable.call(this);
  this._currentEvent = null;
}

inherit(Property, Observable, {
  _name: 'property',

  _emitValue: function (value) {
    if (this._alive) {
      this._currentEvent = { type: VALUE, value: value };
      if (!this._activating) {
        this._dispatcher.dispatch({ type: VALUE, value: value });
      }
    }
  },
  _emitError: function (value) {
    if (this._alive) {
      this._currentEvent = { type: ERROR, value: value };
      if (!this._activating) {
        this._dispatcher.dispatch({ type: ERROR, value: value });
      }
    }
  },
  _emitEnd: function () {
    if (this._alive) {
      this._alive = false;
      if (!this._activating) {
        this._dispatcher.dispatch({ type: END });
      }
      this._clear();
    }
  },
  _on: function (type, fn) {
    if (this._alive) {
      this._dispatcher.add(type, fn);
      this._setActive(true);
    }
    if (this._currentEvent !== null) {
      callSubscriber(type, fn, this._currentEvent);
    }
    if (!this._alive) {
      callSubscriber(type, fn, { type: END });
    }
    return this;
  },
  getType: function () {
    return 'property';
  }
});

var neverS = new Stream();
neverS._emitEnd();
neverS._name = 'never';

function never() {
  return neverS;
}

function timeBased(mixin) {
  function AnonymousStream(wait, options) {
    var _this = this;

    Stream.call(this);
    this._wait = wait;
    this._intervalId = null;
    this._$onTick = function () {
      return _this._onTick();
    };
    this._init(options);
  }

  inherit(AnonymousStream, Stream, {
    _init: function () {},
    _free: function () {},
    _onTick: function () {},
    _onActivation: function () {
      this._intervalId = setInterval(this._$onTick, this._wait);
    },
    _onDeactivation: function () {
      if (this._intervalId !== null) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      }
    },
    _clear: function () {
      Stream.prototype._clear.call(this);
      this._$onTick = null;
      this._free();
    }
  }, mixin);

  return AnonymousStream;
}

var S = timeBased({
  _name: 'later',

  _init: function (_ref) {
    var x = _ref.x;

    this._x = x;
  },
  _free: function () {
    this._x = null;
  },
  _onTick: function () {
    this._emitValue(this._x);
    this._emitEnd();
  }
});

function later(wait, x) {
  return new S(wait, { x: x });
}

var S$1 = timeBased({
  _name: 'interval',

  _init: function (_ref) {
    var x = _ref.x;

    this._x = x;
  },
  _free: function () {
    this._x = null;
  },
  _onTick: function () {
    this._emitValue(this._x);
  }
});

function interval(wait, x) {
  return new S$1(wait, { x: x });
}

var S$2 = timeBased({
  _name: 'sequentially',

  _init: function (_ref) {
    var xs = _ref.xs;

    this._xs = cloneArray(xs);
  },
  _free: function () {
    this._xs = null;
  },
  _onTick: function () {
    if (this._xs.length === 1) {
      this._emitValue(this._xs[0]);
      this._emitEnd();
    } else {
      this._emitValue(this._xs.shift());
    }
  }
});

function sequentially(wait, xs) {
  return xs.length === 0 ? never() : new S$2(wait, { xs: xs });
}

var S$3 = timeBased({
  _name: 'fromPoll',

  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _onTick: function () {
    var fn = this._fn;
    this._emitValue(fn());
  }
});

function fromPoll(wait, fn) {
  return new S$3(wait, { fn: fn });
}

function emitter(obs) {
  function value(x) {
    obs._emitValue(x);
    return obs._active;
  }

  function error(x) {
    obs._emitError(x);
    return obs._active;
  }

  function end() {
    obs._emitEnd();
    return obs._active;
  }

  function event(e) {
    obs._emit(e.type, e.value);
    return obs._active;
  }

  return {
    value: value,
    error: error,
    end: end,
    event: event,

    // legacy
    emit: value,
    emitEvent: event
  };
}

var S$4 = timeBased({
  _name: 'withInterval',

  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
    this._emitter = emitter(this);
  },
  _free: function () {
    this._fn = null;
    this._emitter = null;
  },
  _onTick: function () {
    var fn = this._fn;
    fn(this._emitter);
  }
});

function withInterval(wait, fn) {
  return new S$4(wait, { fn: fn });
}

function S$5(fn) {
  Stream.call(this);
  this._fn = fn;
  this._unsubscribe = null;
}

inherit(S$5, Stream, {
  _name: 'stream',

  _onActivation: function () {
    var fn = this._fn;
    var unsubscribe = fn(emitter(this));
    this._unsubscribe = typeof unsubscribe === 'function' ? unsubscribe : null;

    // fix https://github.com/rpominov/kefir/issues/35
    if (!this._active) {
      this._callUnsubscribe();
    }
  },
  _callUnsubscribe: function () {
    if (this._unsubscribe !== null) {
      this._unsubscribe();
      this._unsubscribe = null;
    }
  },
  _onDeactivation: function () {
    this._callUnsubscribe();
  },
  _clear: function () {
    Stream.prototype._clear.call(this);
    this._fn = null;
  }
});

function stream(fn) {
  return new S$5(fn);
}

function fromCallback(callbackConsumer) {
  var called = false;

  return stream(function (emitter) {
    if (!called) {
      callbackConsumer(function (x) {
        emitter.emit(x);
        emitter.end();
      });
      called = true;
    }
  }).setName('fromCallback');
}

function fromNodeCallback(callbackConsumer) {
  var called = false;

  return stream(function (emitter) {
    if (!called) {
      callbackConsumer(function (error, x) {
        if (error) {
          emitter.error(error);
        } else {
          emitter.emit(x);
        }
        emitter.end();
      });
      called = true;
    }
  }).setName('fromNodeCallback');
}

function spread(fn, length) {
  switch (length) {
    case 0:
      return function () {
        return fn();
      };
    case 1:
      return function (a) {
        return fn(a[0]);
      };
    case 2:
      return function (a) {
        return fn(a[0], a[1]);
      };
    case 3:
      return function (a) {
        return fn(a[0], a[1], a[2]);
      };
    case 4:
      return function (a) {
        return fn(a[0], a[1], a[2], a[3]);
      };
    default:
      return function (a) {
        return fn.apply(null, a);
      };
  }
}

function apply(fn, c, a) {
  var aLength = a ? a.length : 0;
  if (c == null) {
    switch (aLength) {
      case 0:
        return fn();
      case 1:
        return fn(a[0]);
      case 2:
        return fn(a[0], a[1]);
      case 3:
        return fn(a[0], a[1], a[2]);
      case 4:
        return fn(a[0], a[1], a[2], a[3]);
      default:
        return fn.apply(null, a);
    }
  } else {
    switch (aLength) {
      case 0:
        return fn.call(c);
      default:
        return fn.apply(c, a);
    }
  }
}

function fromSubUnsub(sub, unsub, transformer /* Function | falsey */) {
  return stream(function (emitter) {
    var handler = transformer ? function () {
      emitter.emit(apply(transformer, this, arguments));
    } : function (x) {
      emitter.emit(x);
    };

    sub(handler);
    return function () {
      return unsub(handler);
    };
  }).setName('fromSubUnsub');
}

var pairs = [['addEventListener', 'removeEventListener'], ['addListener', 'removeListener'], ['on', 'off']];

function fromEvents(target, eventName, transformer) {
  var sub = void 0,
      unsub = void 0;

  for (var i = 0; i < pairs.length; i++) {
    if (typeof target[pairs[i][0]] === 'function' && typeof target[pairs[i][1]] === 'function') {
      sub = pairs[i][0];
      unsub = pairs[i][1];
      break;
    }
  }

  if (sub === undefined) {
    throw new Error("target don't support any of " + 'addEventListener/removeEventListener, addListener/removeListener, on/off method pair');
  }

  return fromSubUnsub(function (handler) {
    return target[sub](eventName, handler);
  }, function (handler) {
    return target[unsub](eventName, handler);
  }, transformer).setName('fromEvents');
}

// HACK:
//   We don't call parent Class constructor, but instead putting all necessary
//   properties into prototype to simulate ended Property
//   (see Propperty and Observable classes).

function P(value) {
  this._currentEvent = { type: 'value', value: value, current: true };
}

inherit(P, Property, {
  _name: 'constant',
  _active: false,
  _activating: false,
  _alive: false,
  _dispatcher: null,
  _logHandlers: null
});

function constant(x) {
  return new P(x);
}

// HACK:
//   We don't call parent Class constructor, but instead putting all necessary
//   properties into prototype to simulate ended Property
//   (see Propperty and Observable classes).

function P$1(value) {
  this._currentEvent = { type: 'error', value: value, current: true };
}

inherit(P$1, Property, {
  _name: 'constantError',
  _active: false,
  _activating: false,
  _alive: false,
  _dispatcher: null,
  _logHandlers: null
});

function constantError(x) {
  return new P$1(x);
}

function createConstructor(BaseClass, name) {
  return function AnonymousObservable(source, options) {
    var _this = this;

    BaseClass.call(this);
    this._source = source;
    this._name = source._name + '.' + name;
    this._init(options);
    this._$handleAny = function (event) {
      return _this._handleAny(event);
    };
  };
}

function createClassMethods(BaseClass) {
  return {
    _init: function () {},
    _free: function () {},
    _handleValue: function (x) {
      this._emitValue(x);
    },
    _handleError: function (x) {
      this._emitError(x);
    },
    _handleEnd: function () {
      this._emitEnd();
    },
    _handleAny: function (event) {
      switch (event.type) {
        case VALUE:
          return this._handleValue(event.value);
        case ERROR:
          return this._handleError(event.value);
        case END:
          return this._handleEnd();
      }
    },
    _onActivation: function () {
      this._source.onAny(this._$handleAny);
    },
    _onDeactivation: function () {
      this._source.offAny(this._$handleAny);
    },
    _clear: function () {
      BaseClass.prototype._clear.call(this);
      this._source = null;
      this._$handleAny = null;
      this._free();
    }
  };
}

function createStream(name, mixin) {
  var S = createConstructor(Stream, name);
  inherit(S, Stream, createClassMethods(Stream), mixin);
  return S;
}

function createProperty(name, mixin) {
  var P = createConstructor(Property, name);
  inherit(P, Property, createClassMethods(Property), mixin);
  return P;
}

var P$2 = createProperty('toProperty', {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._getInitialCurrent = fn;
  },
  _onActivation: function () {
    if (this._getInitialCurrent !== null) {
      var getInitial = this._getInitialCurrent;
      this._emitValue(getInitial());
    }
    this._source.onAny(this._$handleAny); // copied from patterns/one-source
  }
});

function toProperty(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (fn !== null && typeof fn !== 'function') {
    throw new Error('You should call toProperty() with a function or no arguments.');
  }
  return new P$2(obs, { fn: fn });
}

var S$6 = createStream('changes', {
  _handleValue: function (x) {
    if (!this._activating) {
      this._emitValue(x);
    }
  },
  _handleError: function (x) {
    if (!this._activating) {
      this._emitError(x);
    }
  }
});

function changes(obs) {
  return new S$6(obs);
}

function fromPromise(promise) {
  var called = false;

  var result = stream(function (emitter) {
    if (!called) {
      var onValue = function (x) {
        emitter.emit(x);
        emitter.end();
      };
      var onError = function (x) {
        emitter.error(x);
        emitter.end();
      };
      var _promise = promise.then(onValue, onError);

      // prevent libraries like 'Q' or 'when' from swallowing exceptions
      if (_promise && typeof _promise.done === 'function') {
        _promise.done();
      }

      called = true;
    }
  });

  return toProperty(result, null).setName('fromPromise');
}

function getGlodalPromise() {
  if (typeof Promise === 'function') {
    return Promise;
  } else {
    throw new Error("There isn't default Promise, use shim or parameter");
  }
}

var toPromise = function (obs) {
  var Promise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlodalPromise();

  var last = null;
  return new Promise(function (resolve, reject) {
    obs.onAny(function (event) {
      if (event.type === END && last !== null) {
        (last.type === VALUE ? resolve : reject)(last.value);
        last = null;
      } else {
        last = event;
      }
    });
  });
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var ponyfill = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}
});

var index$1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _ponyfill2 = _interopRequireDefault(ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof commonjsGlobal !== 'undefined') {
  root = commonjsGlobal;
} else {
  root = module;
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
});

var index = index$1;

// this file contains some hot JS modules systems stuff

var $$observable = index.default ? index.default : index;

function fromESObservable(_observable) {
  var observable = _observable[$$observable] ? _observable[$$observable]() : _observable;
  return stream(function (emitter) {
    var unsub = observable.subscribe({
      error: function (error) {
        emitter.error(error);
        emitter.end();
      },
      next: function (value) {
        emitter.emit(value);
      },
      complete: function () {
        emitter.end();
      }
    });

    if (unsub.unsubscribe) {
      return function () {
        unsub.unsubscribe();
      };
    } else {
      return unsub;
    }
  }).setName('fromESObservable');
}

function ESObservable(observable) {
  this._observable = observable.takeErrors(1);
}

extend(ESObservable.prototype, {
  subscribe: function (observerOrOnNext, onError, onComplete) {
    var _this = this;

    var observer = typeof observerOrOnNext === 'function' ? { next: observerOrOnNext, error: onError, complete: onComplete } : observerOrOnNext;

    var fn = function (event) {
      if (event.type === END) {
        closed = true;
      }

      if (event.type === VALUE && observer.next) {
        observer.next(event.value);
      } else if (event.type === ERROR && observer.error) {
        observer.error(event.value);
      } else if (event.type === END && observer.complete) {
        observer.complete(event.value);
      }
    };

    this._observable.onAny(fn);
    var closed = false;

    var subscription = {
      unsubscribe: function () {
        closed = true;
        _this._observable.offAny(fn);
      },
      get closed() {
        return closed;
      }
    };
    return subscription;
  }
});

// Need to assign directly b/c Symbols aren't enumerable.
ESObservable.prototype[$$observable] = function () {
  return this;
};

function toESObservable() {
  return new ESObservable(this);
}

function collect(source, keys, values) {
  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      keys.push(prop);
      values.push(source[prop]);
    }
  }
}

function defaultErrorsCombinator(errors) {
  var latestError = void 0;
  for (var i = 0; i < errors.length; i++) {
    if (errors[i] !== undefined) {
      if (latestError === undefined || latestError.index < errors[i].index) {
        latestError = errors[i];
      }
    }
  }
  return latestError.error;
}

function Combine(active, passive, combinator) {
  var _this = this;

  Stream.call(this);
  this._activeCount = active.length;
  this._sources = concat(active, passive);
  this._combinator = combinator;
  this._aliveCount = 0;
  this._latestValues = new Array(this._sources.length);
  this._latestErrors = new Array(this._sources.length);
  fillArray(this._latestValues, NOTHING);
  this._emitAfterActivation = false;
  this._endAfterActivation = false;
  this._latestErrorIndex = 0;

  this._$handlers = [];

  var _loop = function (i) {
    _this._$handlers.push(function (event) {
      return _this._handleAny(i, event);
    });
  };

  for (var i = 0; i < this._sources.length; i++) {
    _loop(i);
  }
}

inherit(Combine, Stream, {
  _name: 'combine',

  _onActivation: function () {
    this._aliveCount = this._activeCount;

    // we need to suscribe to _passive_ sources before _active_
    // (see https://github.com/rpominov/kefir/issues/98)
    for (var i = this._activeCount; i < this._sources.length; i++) {
      this._sources[i].onAny(this._$handlers[i]);
    }
    for (var _i = 0; _i < this._activeCount; _i++) {
      this._sources[_i].onAny(this._$handlers[_i]);
    }

    if (this._emitAfterActivation) {
      this._emitAfterActivation = false;
      this._emitIfFull();
    }
    if (this._endAfterActivation) {
      this._emitEnd();
    }
  },
  _onDeactivation: function () {
    var length = this._sources.length,
        i = void 0;
    for (i = 0; i < length; i++) {
      this._sources[i].offAny(this._$handlers[i]);
    }
  },
  _emitIfFull: function () {
    var hasAllValues = true;
    var hasErrors = false;
    var length = this._latestValues.length;
    var valuesCopy = new Array(length);
    var errorsCopy = new Array(length);

    for (var i = 0; i < length; i++) {
      valuesCopy[i] = this._latestValues[i];
      errorsCopy[i] = this._latestErrors[i];

      if (valuesCopy[i] === NOTHING) {
        hasAllValues = false;
      }

      if (errorsCopy[i] !== undefined) {
        hasErrors = true;
      }
    }

    if (hasAllValues) {
      var combinator = this._combinator;
      this._emitValue(combinator(valuesCopy));
    }
    if (hasErrors) {
      this._emitError(defaultErrorsCombinator(errorsCopy));
    }
  },
  _handleAny: function (i, event) {
    if (event.type === VALUE || event.type === ERROR) {
      if (event.type === VALUE) {
        this._latestValues[i] = event.value;
        this._latestErrors[i] = undefined;
      }
      if (event.type === ERROR) {
        this._latestValues[i] = NOTHING;
        this._latestErrors[i] = {
          index: this._latestErrorIndex++,
          error: event.value
        };
      }

      if (i < this._activeCount) {
        if (this._activating) {
          this._emitAfterActivation = true;
        } else {
          this._emitIfFull();
        }
      }
    } else {
      // END

      if (i < this._activeCount) {
        this._aliveCount--;
        if (this._aliveCount === 0) {
          if (this._activating) {
            this._endAfterActivation = true;
          } else {
            this._emitEnd();
          }
        }
      }
    }
  },
  _clear: function () {
    Stream.prototype._clear.call(this);
    this._sources = null;
    this._latestValues = null;
    this._latestErrors = null;
    this._combinator = null;
    this._$handlers = null;
  }
});

function combineAsArray(active) {
  var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var combinator = arguments[2];

  if (!Array.isArray(passive)) {
    throw new Error('Combine can only combine active and passive collections of the same type.');
  }

  combinator = combinator ? spread(combinator, active.length + passive.length) : function (x) {
    return x;
  };
  return active.length === 0 ? never() : new Combine(active, passive, combinator);
}

function combineAsObject(active) {
  var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var combinator = arguments[2];

  if (typeof passive !== 'object' || Array.isArray(passive)) {
    throw new Error('Combine can only combine active and passive collections of the same type.');
  }

  var keys = [],
      activeObservables = [],
      passiveObservables = [];

  collect(active, keys, activeObservables);
  collect(passive, keys, passiveObservables);

  var objectify = function (values) {
    var event = {};
    for (var i = values.length - 1; 0 <= i; i--) {
      event[keys[i]] = values[i];
    }
    return combinator ? combinator(event) : event;
  };

  return activeObservables.length === 0 ? never() : new Combine(activeObservables, passiveObservables, objectify);
}

function combine(active, passive, combinator) {
  if (typeof passive === 'function') {
    combinator = passive;
    passive = undefined;
  }

  return Array.isArray(active) ? combineAsArray(active, passive, combinator) : combineAsObject(active, passive, combinator);
}

var Observable$2 = {
  empty: function () {
    return never();
  },


  // Monoid based on merge() seems more useful than one based on concat().
  concat: function (a, b) {
    return a.merge(b);
  },
  of: function (x) {
    return constant(x);
  },
  map: function (fn, obs) {
    return obs.map(fn);
  },
  bimap: function (fnErr, fnVal, obs) {
    return obs.mapErrors(fnErr).map(fnVal);
  },


  // This ap strictly speaking incompatible with chain. If we derive ap from chain we get
  // different (not very useful) behavior. But spec requires that if method can be derived
  // it must have the same behavior as hand-written method. We intentionally violate the spec
  // in hope that it won't cause many troubles in practice. And in return we have more useful type.
  ap: function (obsFn, obsVal) {
    return combine([obsFn, obsVal], function (fn, val) {
      return fn(val);
    });
  },
  chain: function (fn, obs) {
    return obs.flatMap(fn);
  }
};



var staticLand = Object.freeze({
	Observable: Observable$2
});

var mixin = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleValue: function (x) {
    var fn = this._fn;
    this._emitValue(fn(x));
  }
};

var S$7 = createStream('map', mixin);
var P$3 = createProperty('map', mixin);

var id = function (x) {
  return x;
};

function map$1(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : id;

  return new (obs._ofSameType(S$7, P$3))(obs, { fn: fn });
}

var mixin$1 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleValue: function (x) {
    var fn = this._fn;
    if (fn(x)) {
      this._emitValue(x);
    }
  }
};

var S$8 = createStream('filter', mixin$1);
var P$4 = createProperty('filter', mixin$1);

var id$1 = function (x) {
  return x;
};

function filter(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : id$1;

  return new (obs._ofSameType(S$8, P$4))(obs, { fn: fn });
}

var mixin$2 = {
  _init: function (_ref) {
    var n = _ref.n;

    this._n = n;
    if (n <= 0) {
      this._emitEnd();
    }
  },
  _handleValue: function (x) {
    this._n--;
    this._emitValue(x);
    if (this._n === 0) {
      this._emitEnd();
    }
  }
};

var S$9 = createStream('take', mixin$2);
var P$5 = createProperty('take', mixin$2);

function take(obs, n) {
  return new (obs._ofSameType(S$9, P$5))(obs, { n: n });
}

var mixin$3 = {
  _init: function (_ref) {
    var n = _ref.n;

    this._n = n;
    if (n <= 0) {
      this._emitEnd();
    }
  },
  _handleError: function (x) {
    this._n--;
    this._emitError(x);
    if (this._n === 0) {
      this._emitEnd();
    }
  }
};

var S$10 = createStream('takeErrors', mixin$3);
var P$6 = createProperty('takeErrors', mixin$3);

function takeErrors(obs, n) {
  return new (obs._ofSameType(S$10, P$6))(obs, { n: n });
}

var mixin$4 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleValue: function (x) {
    var fn = this._fn;
    if (fn(x)) {
      this._emitValue(x);
    } else {
      this._emitEnd();
    }
  }
};

var S$11 = createStream('takeWhile', mixin$4);
var P$7 = createProperty('takeWhile', mixin$4);

var id$2 = function (x) {
  return x;
};

function takeWhile(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : id$2;

  return new (obs._ofSameType(S$11, P$7))(obs, { fn: fn });
}

var mixin$5 = {
  _init: function () {
    this._lastValue = NOTHING;
  },
  _free: function () {
    this._lastValue = null;
  },
  _handleValue: function (x) {
    this._lastValue = x;
  },
  _handleEnd: function () {
    if (this._lastValue !== NOTHING) {
      this._emitValue(this._lastValue);
    }
    this._emitEnd();
  }
};

var S$12 = createStream('last', mixin$5);
var P$8 = createProperty('last', mixin$5);

function last(obs) {
  return new (obs._ofSameType(S$12, P$8))(obs);
}

var mixin$6 = {
  _init: function (_ref) {
    var n = _ref.n;

    this._n = Math.max(0, n);
  },
  _handleValue: function (x) {
    if (this._n === 0) {
      this._emitValue(x);
    } else {
      this._n--;
    }
  }
};

var S$13 = createStream('skip', mixin$6);
var P$9 = createProperty('skip', mixin$6);

function skip(obs, n) {
  return new (obs._ofSameType(S$13, P$9))(obs, { n: n });
}

var mixin$7 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleValue: function (x) {
    var fn = this._fn;
    if (this._fn !== null && !fn(x)) {
      this._fn = null;
    }
    if (this._fn === null) {
      this._emitValue(x);
    }
  }
};

var S$14 = createStream('skipWhile', mixin$7);
var P$10 = createProperty('skipWhile', mixin$7);

var id$3 = function (x) {
  return x;
};

function skipWhile(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : id$3;

  return new (obs._ofSameType(S$14, P$10))(obs, { fn: fn });
}

var mixin$8 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
    this._prev = NOTHING;
  },
  _free: function () {
    this._fn = null;
    this._prev = null;
  },
  _handleValue: function (x) {
    var fn = this._fn;
    if (this._prev === NOTHING || !fn(this._prev, x)) {
      this._prev = x;
      this._emitValue(x);
    }
  }
};

var S$15 = createStream('skipDuplicates', mixin$8);
var P$11 = createProperty('skipDuplicates', mixin$8);

var eq = function (a, b) {
  return a === b;
};

function skipDuplicates(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : eq;

  return new (obs._ofSameType(S$15, P$11))(obs, { fn: fn });
}

var mixin$9 = {
  _init: function (_ref) {
    var fn = _ref.fn,
        seed = _ref.seed;

    this._fn = fn;
    this._prev = seed;
  },
  _free: function () {
    this._prev = null;
    this._fn = null;
  },
  _handleValue: function (x) {
    if (this._prev !== NOTHING) {
      var fn = this._fn;
      this._emitValue(fn(this._prev, x));
    }
    this._prev = x;
  }
};

var S$16 = createStream('diff', mixin$9);
var P$12 = createProperty('diff', mixin$9);

function defaultFn(a, b) {
  return [a, b];
}

function diff(obs, fn) {
  var seed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NOTHING;

  return new (obs._ofSameType(S$16, P$12))(obs, { fn: fn || defaultFn, seed: seed });
}

var P$13 = createProperty('scan', {
  _init: function (_ref) {
    var fn = _ref.fn,
        seed = _ref.seed;

    this._fn = fn;
    this._seed = seed;
    if (seed !== NOTHING) {
      this._emitValue(seed);
    }
  },
  _free: function () {
    this._fn = null;
    this._seed = null;
  },
  _handleValue: function (x) {
    var fn = this._fn;
    if (this._currentEvent === null || this._currentEvent.type === ERROR) {
      this._emitValue(this._seed === NOTHING ? x : fn(this._seed, x));
    } else {
      this._emitValue(fn(this._currentEvent.value, x));
    }
  }
});

function scan(obs, fn) {
  var seed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NOTHING;

  return new P$13(obs, { fn: fn, seed: seed });
}

var mixin$10 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleValue: function (x) {
    var fn = this._fn;
    var xs = fn(x);
    for (var i = 0; i < xs.length; i++) {
      this._emitValue(xs[i]);
    }
  }
};

var S$17 = createStream('flatten', mixin$10);

var id$4 = function (x) {
  return x;
};

function flatten(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : id$4;

  return new S$17(obs, { fn: fn });
}

var END_MARKER = {};

var mixin$11 = {
  _init: function (_ref) {
    var _this = this;

    var wait = _ref.wait;

    this._wait = Math.max(0, wait);
    this._buff = [];
    this._$shiftBuff = function () {
      var value = _this._buff.shift();
      if (value === END_MARKER) {
        _this._emitEnd();
      } else {
        _this._emitValue(value);
      }
    };
  },
  _free: function () {
    this._buff = null;
    this._$shiftBuff = null;
  },
  _handleValue: function (x) {
    if (this._activating) {
      this._emitValue(x);
    } else {
      this._buff.push(x);
      setTimeout(this._$shiftBuff, this._wait);
    }
  },
  _handleEnd: function () {
    if (this._activating) {
      this._emitEnd();
    } else {
      this._buff.push(END_MARKER);
      setTimeout(this._$shiftBuff, this._wait);
    }
  }
};

var S$18 = createStream('delay', mixin$11);
var P$14 = createProperty('delay', mixin$11);

function delay(obs, wait) {
  return new (obs._ofSameType(S$18, P$14))(obs, { wait: wait });
}

var now = Date.now ? function () {
  return Date.now();
} : function () {
  return new Date().getTime();
};

var mixin$12 = {
  _init: function (_ref) {
    var _this = this;

    var wait = _ref.wait,
        leading = _ref.leading,
        trailing = _ref.trailing;

    this._wait = Math.max(0, wait);
    this._leading = leading;
    this._trailing = trailing;
    this._trailingValue = null;
    this._timeoutId = null;
    this._endLater = false;
    this._lastCallTime = 0;
    this._$trailingCall = function () {
      return _this._trailingCall();
    };
  },
  _free: function () {
    this._trailingValue = null;
    this._$trailingCall = null;
  },
  _handleValue: function (x) {
    if (this._activating) {
      this._emitValue(x);
    } else {
      var curTime = now();
      if (this._lastCallTime === 0 && !this._leading) {
        this._lastCallTime = curTime;
      }
      var remaining = this._wait - (curTime - this._lastCallTime);
      if (remaining <= 0) {
        this._cancelTrailing();
        this._lastCallTime = curTime;
        this._emitValue(x);
      } else if (this._trailing) {
        this._cancelTrailing();
        this._trailingValue = x;
        this._timeoutId = setTimeout(this._$trailingCall, remaining);
      }
    }
  },
  _handleEnd: function () {
    if (this._activating) {
      this._emitEnd();
    } else {
      if (this._timeoutId) {
        this._endLater = true;
      } else {
        this._emitEnd();
      }
    }
  },
  _cancelTrailing: function () {
    if (this._timeoutId !== null) {
      clearTimeout(this._timeoutId);
      this._timeoutId = null;
    }
  },
  _trailingCall: function () {
    this._emitValue(this._trailingValue);
    this._timeoutId = null;
    this._trailingValue = null;
    this._lastCallTime = !this._leading ? 0 : now();
    if (this._endLater) {
      this._emitEnd();
    }
  }
};

var S$19 = createStream('throttle', mixin$12);
var P$15 = createProperty('throttle', mixin$12);

function throttle(obs, wait) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$leading = _ref2.leading,
      leading = _ref2$leading === undefined ? true : _ref2$leading,
      _ref2$trailing = _ref2.trailing,
      trailing = _ref2$trailing === undefined ? true : _ref2$trailing;

  return new (obs._ofSameType(S$19, P$15))(obs, { wait: wait, leading: leading, trailing: trailing });
}

var mixin$13 = {
  _init: function (_ref) {
    var _this = this;

    var wait = _ref.wait,
        immediate = _ref.immediate;

    this._wait = Math.max(0, wait);
    this._immediate = immediate;
    this._lastAttempt = 0;
    this._timeoutId = null;
    this._laterValue = null;
    this._endLater = false;
    this._$later = function () {
      return _this._later();
    };
  },
  _free: function () {
    this._laterValue = null;
    this._$later = null;
  },
  _handleValue: function (x) {
    if (this._activating) {
      this._emitValue(x);
    } else {
      this._lastAttempt = now();
      if (this._immediate && !this._timeoutId) {
        this._emitValue(x);
      }
      if (!this._timeoutId) {
        this._timeoutId = setTimeout(this._$later, this._wait);
      }
      if (!this._immediate) {
        this._laterValue = x;
      }
    }
  },
  _handleEnd: function () {
    if (this._activating) {
      this._emitEnd();
    } else {
      if (this._timeoutId && !this._immediate) {
        this._endLater = true;
      } else {
        this._emitEnd();
      }
    }
  },
  _later: function () {
    var last = now() - this._lastAttempt;
    if (last < this._wait && last >= 0) {
      this._timeoutId = setTimeout(this._$later, this._wait - last);
    } else {
      this._timeoutId = null;
      if (!this._immediate) {
        this._emitValue(this._laterValue);
        this._laterValue = null;
      }
      if (this._endLater) {
        this._emitEnd();
      }
    }
  }
};

var S$20 = createStream('debounce', mixin$13);
var P$16 = createProperty('debounce', mixin$13);

function debounce(obs, wait) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$immediate = _ref2.immediate,
      immediate = _ref2$immediate === undefined ? false : _ref2$immediate;

  return new (obs._ofSameType(S$20, P$16))(obs, { wait: wait, immediate: immediate });
}

var mixin$14 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleError: function (x) {
    var fn = this._fn;
    this._emitError(fn(x));
  }
};

var S$21 = createStream('mapErrors', mixin$14);
var P$17 = createProperty('mapErrors', mixin$14);

var id$5 = function (x) {
  return x;
};

function mapErrors(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : id$5;

  return new (obs._ofSameType(S$21, P$17))(obs, { fn: fn });
}

var mixin$15 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleError: function (x) {
    var fn = this._fn;
    if (fn(x)) {
      this._emitError(x);
    }
  }
};

var S$22 = createStream('filterErrors', mixin$15);
var P$18 = createProperty('filterErrors', mixin$15);

var id$6 = function (x) {
  return x;
};

function filterErrors(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : id$6;

  return new (obs._ofSameType(S$22, P$18))(obs, { fn: fn });
}

var mixin$16 = {
  _handleValue: function () {}
};

var S$23 = createStream('ignoreValues', mixin$16);
var P$19 = createProperty('ignoreValues', mixin$16);

function ignoreValues(obs) {
  return new (obs._ofSameType(S$23, P$19))(obs);
}

var mixin$17 = {
  _handleError: function () {}
};

var S$24 = createStream('ignoreErrors', mixin$17);
var P$20 = createProperty('ignoreErrors', mixin$17);

function ignoreErrors(obs) {
  return new (obs._ofSameType(S$24, P$20))(obs);
}

var mixin$18 = {
  _handleEnd: function () {}
};

var S$25 = createStream('ignoreEnd', mixin$18);
var P$21 = createProperty('ignoreEnd', mixin$18);

function ignoreEnd(obs) {
  return new (obs._ofSameType(S$25, P$21))(obs);
}

var mixin$19 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleEnd: function () {
    var fn = this._fn;
    this._emitValue(fn());
    this._emitEnd();
  }
};

var S$26 = createStream('beforeEnd', mixin$19);
var P$22 = createProperty('beforeEnd', mixin$19);

function beforeEnd(obs, fn) {
  return new (obs._ofSameType(S$26, P$22))(obs, { fn: fn });
}

var mixin$20 = {
  _init: function (_ref) {
    var min = _ref.min,
        max = _ref.max;

    this._max = max;
    this._min = min;
    this._buff = [];
  },
  _free: function () {
    this._buff = null;
  },
  _handleValue: function (x) {
    this._buff = slide(this._buff, x, this._max);
    if (this._buff.length >= this._min) {
      this._emitValue(this._buff);
    }
  }
};

var S$27 = createStream('slidingWindow', mixin$20);
var P$23 = createProperty('slidingWindow', mixin$20);

function slidingWindow(obs, max) {
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return new (obs._ofSameType(S$27, P$23))(obs, { min: min, max: max });
}

var mixin$21 = {
  _init: function (_ref) {
    var fn = _ref.fn,
        flushOnEnd = _ref.flushOnEnd;

    this._fn = fn;
    this._flushOnEnd = flushOnEnd;
    this._buff = [];
  },
  _free: function () {
    this._buff = null;
  },
  _flush: function () {
    if (this._buff !== null && this._buff.length !== 0) {
      this._emitValue(this._buff);
      this._buff = [];
    }
  },
  _handleValue: function (x) {
    this._buff.push(x);
    var fn = this._fn;
    if (!fn(x)) {
      this._flush();
    }
  },
  _handleEnd: function () {
    if (this._flushOnEnd) {
      this._flush();
    }
    this._emitEnd();
  }
};

var S$28 = createStream('bufferWhile', mixin$21);
var P$24 = createProperty('bufferWhile', mixin$21);

var id$7 = function (x) {
  return x;
};

function bufferWhile(obs, fn) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$flushOnEnd = _ref2.flushOnEnd,
      flushOnEnd = _ref2$flushOnEnd === undefined ? true : _ref2$flushOnEnd;

  return new (obs._ofSameType(S$28, P$24))(obs, { fn: fn || id$7, flushOnEnd: flushOnEnd });
}

var mixin$22 = {
  _init: function (_ref) {
    var count = _ref.count,
        flushOnEnd = _ref.flushOnEnd;

    this._count = count;
    this._flushOnEnd = flushOnEnd;
    this._buff = [];
  },
  _free: function () {
    this._buff = null;
  },
  _flush: function () {
    if (this._buff !== null && this._buff.length !== 0) {
      this._emitValue(this._buff);
      this._buff = [];
    }
  },
  _handleValue: function (x) {
    this._buff.push(x);
    if (this._buff.length >= this._count) {
      this._flush();
    }
  },
  _handleEnd: function () {
    if (this._flushOnEnd) {
      this._flush();
    }
    this._emitEnd();
  }
};

var S$29 = createStream('bufferWithCount', mixin$22);
var P$25 = createProperty('bufferWithCount', mixin$22);

function bufferWhile$1(obs, count) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$flushOnEnd = _ref2.flushOnEnd,
      flushOnEnd = _ref2$flushOnEnd === undefined ? true : _ref2$flushOnEnd;

  return new (obs._ofSameType(S$29, P$25))(obs, { count: count, flushOnEnd: flushOnEnd });
}

var mixin$23 = {
  _init: function (_ref) {
    var _this = this;

    var wait = _ref.wait,
        count = _ref.count,
        flushOnEnd = _ref.flushOnEnd;

    this._wait = wait;
    this._count = count;
    this._flushOnEnd = flushOnEnd;
    this._intervalId = null;
    this._$onTick = function () {
      return _this._flush();
    };
    this._buff = [];
  },
  _free: function () {
    this._$onTick = null;
    this._buff = null;
  },
  _flush: function () {
    if (this._buff !== null) {
      this._emitValue(this._buff);
      this._buff = [];
    }
  },
  _handleValue: function (x) {
    this._buff.push(x);
    if (this._buff.length >= this._count) {
      clearInterval(this._intervalId);
      this._flush();
      this._intervalId = setInterval(this._$onTick, this._wait);
    }
  },
  _handleEnd: function () {
    if (this._flushOnEnd && this._buff.length !== 0) {
      this._flush();
    }
    this._emitEnd();
  },
  _onActivation: function () {
    this._intervalId = setInterval(this._$onTick, this._wait);
    this._source.onAny(this._$handleAny); // copied from patterns/one-source
  },
  _onDeactivation: function () {
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
    this._source.offAny(this._$handleAny); // copied from patterns/one-source
  }
};

var S$30 = createStream('bufferWithTimeOrCount', mixin$23);
var P$26 = createProperty('bufferWithTimeOrCount', mixin$23);

function bufferWithTimeOrCount(obs, wait, count) {
  var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref2$flushOnEnd = _ref2.flushOnEnd,
      flushOnEnd = _ref2$flushOnEnd === undefined ? true : _ref2$flushOnEnd;

  return new (obs._ofSameType(S$30, P$26))(obs, { wait: wait, count: count, flushOnEnd: flushOnEnd });
}

function xformForObs(obs) {
  return {
    '@@transducer/step': function (res, input) {
      obs._emitValue(input);
      return null;
    },
    '@@transducer/result': function () {
      obs._emitEnd();
      return null;
    }
  };
}

var mixin$24 = {
  _init: function (_ref) {
    var transducer = _ref.transducer;

    this._xform = transducer(xformForObs(this));
  },
  _free: function () {
    this._xform = null;
  },
  _handleValue: function (x) {
    if (this._xform['@@transducer/step'](null, x) !== null) {
      this._xform['@@transducer/result'](null);
    }
  },
  _handleEnd: function () {
    this._xform['@@transducer/result'](null);
  }
};

var S$31 = createStream('transduce', mixin$24);
var P$27 = createProperty('transduce', mixin$24);

function transduce(obs, transducer) {
  return new (obs._ofSameType(S$31, P$27))(obs, { transducer: transducer });
}

var mixin$25 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._handler = fn;
    this._emitter = emitter(this);
  },
  _free: function () {
    this._handler = null;
    this._emitter = null;
  },
  _handleAny: function (event) {
    this._handler(this._emitter, event);
  }
};

var S$32 = createStream('withHandler', mixin$25);
var P$28 = createProperty('withHandler', mixin$25);

function withHandler(obs, fn) {
  return new (obs._ofSameType(S$32, P$28))(obs, { fn: fn });
}

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function Zip(sources, combinator) {
  var _this = this;

  Stream.call(this);

  this._buffers = map(sources, function (source) {
    return isArray(source) ? cloneArray(source) : [];
  });
  this._sources = map(sources, function (source) {
    return isArray(source) ? never() : source;
  });

  this._combinator = combinator ? spread(combinator, this._sources.length) : function (x) {
    return x;
  };
  this._aliveCount = 0;

  this._$handlers = [];

  var _loop = function (i) {
    _this._$handlers.push(function (event) {
      return _this._handleAny(i, event);
    });
  };

  for (var i = 0; i < this._sources.length; i++) {
    _loop(i);
  }
}

inherit(Zip, Stream, {
  _name: 'zip',

  _onActivation: function () {
    // if all sources are arrays
    while (this._isFull()) {
      this._emit();
    }

    var length = this._sources.length;
    this._aliveCount = length;
    for (var i = 0; i < length && this._active; i++) {
      this._sources[i].onAny(this._$handlers[i]);
    }
  },
  _onDeactivation: function () {
    for (var i = 0; i < this._sources.length; i++) {
      this._sources[i].offAny(this._$handlers[i]);
    }
  },
  _emit: function () {
    var values = new Array(this._buffers.length);
    for (var i = 0; i < this._buffers.length; i++) {
      values[i] = this._buffers[i].shift();
    }
    var combinator = this._combinator;
    this._emitValue(combinator(values));
  },
  _isFull: function () {
    for (var i = 0; i < this._buffers.length; i++) {
      if (this._buffers[i].length === 0) {
        return false;
      }
    }
    return true;
  },
  _handleAny: function (i, event) {
    if (event.type === VALUE) {
      this._buffers[i].push(event.value);
      if (this._isFull()) {
        this._emit();
      }
    }
    if (event.type === ERROR) {
      this._emitError(event.value);
    }
    if (event.type === END) {
      this._aliveCount--;
      if (this._aliveCount === 0) {
        this._emitEnd();
      }
    }
  },
  _clear: function () {
    Stream.prototype._clear.call(this);
    this._sources = null;
    this._buffers = null;
    this._combinator = null;
    this._$handlers = null;
  }
});

function zip(observables, combinator /* Function | falsey */) {
  return observables.length === 0 ? never() : new Zip(observables, combinator);
}

var id$8 = function (x) {
  return x;
};

function AbstractPool() {
  var _this = this;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$queueLim = _ref.queueLim,
      queueLim = _ref$queueLim === undefined ? 0 : _ref$queueLim,
      _ref$concurLim = _ref.concurLim,
      concurLim = _ref$concurLim === undefined ? -1 : _ref$concurLim,
      _ref$drop = _ref.drop,
      drop = _ref$drop === undefined ? 'new' : _ref$drop;

  Stream.call(this);

  this._queueLim = queueLim < 0 ? -1 : queueLim;
  this._concurLim = concurLim < 0 ? -1 : concurLim;
  this._drop = drop;
  this._queue = [];
  this._curSources = [];
  this._$handleSubAny = function (event) {
    return _this._handleSubAny(event);
  };
  this._$endHandlers = [];
  this._currentlyAdding = null;

  if (this._concurLim === 0) {
    this._emitEnd();
  }
}

inherit(AbstractPool, Stream, {
  _name: 'abstractPool',

  _add: function (obj, toObs /* Function | falsey */) {
    toObs = toObs || id$8;
    if (this._concurLim === -1 || this._curSources.length < this._concurLim) {
      this._addToCur(toObs(obj));
    } else {
      if (this._queueLim === -1 || this._queue.length < this._queueLim) {
        this._addToQueue(toObs(obj));
      } else if (this._drop === 'old') {
        this._removeOldest();
        this._add(obj, toObs);
      }
    }
  },
  _addAll: function (obss) {
    var _this2 = this;

    forEach(obss, function (obs) {
      return _this2._add(obs);
    });
  },
  _remove: function (obs) {
    if (this._removeCur(obs) === -1) {
      this._removeQueue(obs);
    }
  },
  _addToQueue: function (obs) {
    this._queue = concat(this._queue, [obs]);
  },
  _addToCur: function (obs) {
    if (this._active) {
      // HACK:
      //
      // We have two optimizations for cases when `obs` is ended. We don't want
      // to add such observable to the list, but only want to emit events
      // from it (if it has some).
      //
      // Instead of this hacks, we could just did following,
      // but it would be 5-8 times slower:
      //
      //     this._curSources = concat(this._curSources, [obs]);
      //     this._subscribe(obs);
      //

      // #1
      // This one for cases when `obs` already ended
      // e.g., Kefir.constant() or Kefir.never()
      if (!obs._alive) {
        if (obs._currentEvent) {
          this._emit(obs._currentEvent.type, obs._currentEvent.value);
        }
        return;
      }

      // #2
      // This one is for cases when `obs` going to end synchronously on
      // first subscriber e.g., Kefir.stream(em => {em.emit(1); em.end()})
      this._currentlyAdding = obs;
      obs.onAny(this._$handleSubAny);
      this._currentlyAdding = null;
      if (obs._alive) {
        this._curSources = concat(this._curSources, [obs]);
        if (this._active) {
          this._subToEnd(obs);
        }
      }
    } else {
      this._curSources = concat(this._curSources, [obs]);
    }
  },
  _subToEnd: function (obs) {
    var _this3 = this;

    var onEnd = function () {
      return _this3._removeCur(obs);
    };
    this._$endHandlers.push({ obs: obs, handler: onEnd });
    obs.onEnd(onEnd);
  },
  _subscribe: function (obs) {
    obs.onAny(this._$handleSubAny);

    // it can become inactive in responce of subscribing to `obs.onAny` above
    if (this._active) {
      this._subToEnd(obs);
    }
  },
  _unsubscribe: function (obs) {
    obs.offAny(this._$handleSubAny);

    var onEndI = findByPred(this._$endHandlers, function (obj) {
      return obj.obs === obs;
    });
    if (onEndI !== -1) {
      obs.offEnd(this._$endHandlers[onEndI].handler);
      this._$endHandlers.splice(onEndI, 1);
    }
  },
  _handleSubAny: function (event) {
    if (event.type === VALUE) {
      this._emitValue(event.value);
    } else if (event.type === ERROR) {
      this._emitError(event.value);
    }
  },
  _removeQueue: function (obs) {
    var index = find(this._queue, obs);
    this._queue = remove(this._queue, index);
    return index;
  },
  _removeCur: function (obs) {
    if (this._active) {
      this._unsubscribe(obs);
    }
    var index = find(this._curSources, obs);
    this._curSources = remove(this._curSources, index);
    if (index !== -1) {
      if (this._queue.length !== 0) {
        this._pullQueue();
      } else if (this._curSources.length === 0) {
        this._onEmpty();
      }
    }
    return index;
  },
  _removeOldest: function () {
    this._removeCur(this._curSources[0]);
  },
  _pullQueue: function () {
    if (this._queue.length !== 0) {
      this._queue = cloneArray(this._queue);
      this._addToCur(this._queue.shift());
    }
  },
  _onActivation: function () {
    for (var i = 0, sources = this._curSources; i < sources.length && this._active; i++) {
      this._subscribe(sources[i]);
    }
  },
  _onDeactivation: function () {
    for (var i = 0, sources = this._curSources; i < sources.length; i++) {
      this._unsubscribe(sources[i]);
    }
    if (this._currentlyAdding !== null) {
      this._unsubscribe(this._currentlyAdding);
    }
  },
  _isEmpty: function () {
    return this._curSources.length === 0;
  },
  _onEmpty: function () {},
  _clear: function () {
    Stream.prototype._clear.call(this);
    this._queue = null;
    this._curSources = null;
    this._$handleSubAny = null;
    this._$endHandlers = null;
  }
});

function Merge(sources) {
  AbstractPool.call(this);
  this._addAll(sources);
  this._initialised = true;
}

inherit(Merge, AbstractPool, {
  _name: 'merge',

  _onEmpty: function () {
    if (this._initialised) {
      this._emitEnd();
    }
  }
});

function merge(observables) {
  return observables.length === 0 ? never() : new Merge(observables);
}

function S$33(generator) {
  var _this = this;

  Stream.call(this);
  this._generator = generator;
  this._source = null;
  this._inLoop = false;
  this._iteration = 0;
  this._$handleAny = function (event) {
    return _this._handleAny(event);
  };
}

inherit(S$33, Stream, {
  _name: 'repeat',

  _handleAny: function (event) {
    if (event.type === END) {
      this._source = null;
      this._getSource();
    } else {
      this._emit(event.type, event.value);
    }
  },
  _getSource: function () {
    if (!this._inLoop) {
      this._inLoop = true;
      var generator = this._generator;
      while (this._source === null && this._alive && this._active) {
        this._source = generator(this._iteration++);
        if (this._source) {
          this._source.onAny(this._$handleAny);
        } else {
          this._emitEnd();
        }
      }
      this._inLoop = false;
    }
  },
  _onActivation: function () {
    if (this._source) {
      this._source.onAny(this._$handleAny);
    } else {
      this._getSource();
    }
  },
  _onDeactivation: function () {
    if (this._source) {
      this._source.offAny(this._$handleAny);
    }
  },
  _clear: function () {
    Stream.prototype._clear.call(this);
    this._generator = null;
    this._source = null;
    this._$handleAny = null;
  }
});

var repeat = function (generator) {
  return new S$33(generator);
};

function concat$1(observables) {
  return repeat(function (index) {
    return observables.length > index ? observables[index] : false;
  }).setName('concat');
}

function Pool() {
  AbstractPool.call(this);
}

inherit(Pool, AbstractPool, {
  _name: 'pool',

  plug: function (obs) {
    this._add(obs);
    return this;
  },
  unplug: function (obs) {
    this._remove(obs);
    return this;
  }
});

function FlatMap(source, fn, options) {
  var _this = this;

  AbstractPool.call(this, options);
  this._source = source;
  this._fn = fn;
  this._mainEnded = false;
  this._lastCurrent = null;
  this._$handleMain = function (event) {
    return _this._handleMain(event);
  };
}

inherit(FlatMap, AbstractPool, {
  _onActivation: function () {
    AbstractPool.prototype._onActivation.call(this);
    if (this._active) {
      this._source.onAny(this._$handleMain);
    }
  },
  _onDeactivation: function () {
    AbstractPool.prototype._onDeactivation.call(this);
    this._source.offAny(this._$handleMain);
    this._hadNoEvSinceDeact = true;
  },
  _handleMain: function (event) {
    if (event.type === VALUE) {
      // Is latest value before deactivation survived, and now is 'current' on this activation?
      // We don't want to handle such values, to prevent to constantly add
      // same observale on each activation/deactivation when our main source
      // is a `Kefir.conatant()` for example.
      var sameCurr = this._activating && this._hadNoEvSinceDeact && this._lastCurrent === event.value;
      if (!sameCurr) {
        this._add(event.value, this._fn);
      }
      this._lastCurrent = event.value;
      this._hadNoEvSinceDeact = false;
    }

    if (event.type === ERROR) {
      this._emitError(event.value);
    }

    if (event.type === END) {
      if (this._isEmpty()) {
        this._emitEnd();
      } else {
        this._mainEnded = true;
      }
    }
  },
  _onEmpty: function () {
    if (this._mainEnded) {
      this._emitEnd();
    }
  },
  _clear: function () {
    AbstractPool.prototype._clear.call(this);
    this._source = null;
    this._lastCurrent = null;
    this._$handleMain = null;
  }
});

function FlatMapErrors(source, fn) {
  FlatMap.call(this, source, fn);
}

inherit(FlatMapErrors, FlatMap, {
  // Same as in FlatMap, only VALUE/ERROR flipped
  _handleMain: function (event) {
    if (event.type === ERROR) {
      var sameCurr = this._activating && this._hadNoEvSinceDeact && this._lastCurrent === event.value;
      if (!sameCurr) {
        this._add(event.value, this._fn);
      }
      this._lastCurrent = event.value;
      this._hadNoEvSinceDeact = false;
    }

    if (event.type === VALUE) {
      this._emitValue(event.value);
    }

    if (event.type === END) {
      if (this._isEmpty()) {
        this._emitEnd();
      } else {
        this._mainEnded = true;
      }
    }
  }
});

function createConstructor$1(BaseClass, name) {
  return function AnonymousObservable(primary, secondary, options) {
    var _this = this;

    BaseClass.call(this);
    this._primary = primary;
    this._secondary = secondary;
    this._name = primary._name + '.' + name;
    this._lastSecondary = NOTHING;
    this._$handleSecondaryAny = function (event) {
      return _this._handleSecondaryAny(event);
    };
    this._$handlePrimaryAny = function (event) {
      return _this._handlePrimaryAny(event);
    };
    this._init(options);
  };
}

function createClassMethods$1(BaseClass) {
  return {
    _init: function () {},
    _free: function () {},
    _handlePrimaryValue: function (x) {
      this._emitValue(x);
    },
    _handlePrimaryError: function (x) {
      this._emitError(x);
    },
    _handlePrimaryEnd: function () {
      this._emitEnd();
    },
    _handleSecondaryValue: function (x) {
      this._lastSecondary = x;
    },
    _handleSecondaryError: function (x) {
      this._emitError(x);
    },
    _handleSecondaryEnd: function () {},
    _handlePrimaryAny: function (event) {
      switch (event.type) {
        case VALUE:
          return this._handlePrimaryValue(event.value);
        case ERROR:
          return this._handlePrimaryError(event.value);
        case END:
          return this._handlePrimaryEnd(event.value);
      }
    },
    _handleSecondaryAny: function (event) {
      switch (event.type) {
        case VALUE:
          return this._handleSecondaryValue(event.value);
        case ERROR:
          return this._handleSecondaryError(event.value);
        case END:
          this._handleSecondaryEnd(event.value);
          this._removeSecondary();
      }
    },
    _removeSecondary: function () {
      if (this._secondary !== null) {
        this._secondary.offAny(this._$handleSecondaryAny);
        this._$handleSecondaryAny = null;
        this._secondary = null;
      }
    },
    _onActivation: function () {
      if (this._secondary !== null) {
        this._secondary.onAny(this._$handleSecondaryAny);
      }
      if (this._active) {
        this._primary.onAny(this._$handlePrimaryAny);
      }
    },
    _onDeactivation: function () {
      if (this._secondary !== null) {
        this._secondary.offAny(this._$handleSecondaryAny);
      }
      this._primary.offAny(this._$handlePrimaryAny);
    },
    _clear: function () {
      BaseClass.prototype._clear.call(this);
      this._primary = null;
      this._secondary = null;
      this._lastSecondary = null;
      this._$handleSecondaryAny = null;
      this._$handlePrimaryAny = null;
      this._free();
    }
  };
}

function createStream$1(name, mixin) {
  var S = createConstructor$1(Stream, name);
  inherit(S, Stream, createClassMethods$1(Stream), mixin);
  return S;
}

function createProperty$1(name, mixin) {
  var P = createConstructor$1(Property, name);
  inherit(P, Property, createClassMethods$1(Property), mixin);
  return P;
}

var mixin$26 = {
  _handlePrimaryValue: function (x) {
    if (this._lastSecondary !== NOTHING && this._lastSecondary) {
      this._emitValue(x);
    }
  },
  _handleSecondaryEnd: function () {
    if (this._lastSecondary === NOTHING || !this._lastSecondary) {
      this._emitEnd();
    }
  }
};

var S$34 = createStream$1('filterBy', mixin$26);
var P$29 = createProperty$1('filterBy', mixin$26);

function filterBy(primary, secondary) {
  return new (primary._ofSameType(S$34, P$29))(primary, secondary);
}

var id2 = function (_, x) {
  return x;
};

function sampledBy(passive, active, combinator) {
  var _combinator = combinator ? function (a, b) {
    return combinator(b, a);
  } : id2;
  return combine([active], [passive], _combinator).setName(passive, 'sampledBy');
}

var mixin$27 = {
  _handlePrimaryValue: function (x) {
    if (this._lastSecondary !== NOTHING) {
      this._emitValue(x);
    }
  },
  _handleSecondaryEnd: function () {
    if (this._lastSecondary === NOTHING) {
      this._emitEnd();
    }
  }
};

var S$35 = createStream$1('skipUntilBy', mixin$27);
var P$30 = createProperty$1('skipUntilBy', mixin$27);

function skipUntilBy(primary, secondary) {
  return new (primary._ofSameType(S$35, P$30))(primary, secondary);
}

var mixin$28 = {
  _handleSecondaryValue: function () {
    this._emitEnd();
  }
};

var S$36 = createStream$1('takeUntilBy', mixin$28);
var P$31 = createProperty$1('takeUntilBy', mixin$28);

function takeUntilBy(primary, secondary) {
  return new (primary._ofSameType(S$36, P$31))(primary, secondary);
}

var mixin$29 = {
  _init: function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$flushOnEnd = _ref.flushOnEnd,
        flushOnEnd = _ref$flushOnEnd === undefined ? true : _ref$flushOnEnd;

    this._buff = [];
    this._flushOnEnd = flushOnEnd;
  },
  _free: function () {
    this._buff = null;
  },
  _flush: function () {
    if (this._buff !== null) {
      this._emitValue(this._buff);
      this._buff = [];
    }
  },
  _handlePrimaryEnd: function () {
    if (this._flushOnEnd) {
      this._flush();
    }
    this._emitEnd();
  },
  _onActivation: function () {
    this._primary.onAny(this._$handlePrimaryAny);
    if (this._alive && this._secondary !== null) {
      this._secondary.onAny(this._$handleSecondaryAny);
    }
  },
  _handlePrimaryValue: function (x) {
    this._buff.push(x);
  },
  _handleSecondaryValue: function () {
    this._flush();
  },
  _handleSecondaryEnd: function () {
    if (!this._flushOnEnd) {
      this._emitEnd();
    }
  }
};

var S$37 = createStream$1('bufferBy', mixin$29);
var P$32 = createProperty$1('bufferBy', mixin$29);

function bufferBy(primary, secondary, options /* optional */) {
  return new (primary._ofSameType(S$37, P$32))(primary, secondary, options);
}

var mixin$30 = {
  _init: function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$flushOnEnd = _ref.flushOnEnd,
        flushOnEnd = _ref$flushOnEnd === undefined ? true : _ref$flushOnEnd,
        _ref$flushOnChange = _ref.flushOnChange,
        flushOnChange = _ref$flushOnChange === undefined ? false : _ref$flushOnChange;

    this._buff = [];
    this._flushOnEnd = flushOnEnd;
    this._flushOnChange = flushOnChange;
  },
  _free: function () {
    this._buff = null;
  },
  _flush: function () {
    if (this._buff !== null) {
      this._emitValue(this._buff);
      this._buff = [];
    }
  },
  _handlePrimaryEnd: function () {
    if (this._flushOnEnd) {
      this._flush();
    }
    this._emitEnd();
  },
  _handlePrimaryValue: function (x) {
    this._buff.push(x);
    if (this._lastSecondary !== NOTHING && !this._lastSecondary) {
      this._flush();
    }
  },
  _handleSecondaryEnd: function () {
    if (!this._flushOnEnd && (this._lastSecondary === NOTHING || this._lastSecondary)) {
      this._emitEnd();
    }
  },
  _handleSecondaryValue: function (x) {
    if (this._flushOnChange && !x) {
      this._flush();
    }

    // from default _handleSecondaryValue
    this._lastSecondary = x;
  }
};

var S$38 = createStream$1('bufferWhileBy', mixin$30);
var P$33 = createProperty$1('bufferWhileBy', mixin$30);

function bufferWhileBy(primary, secondary, options /* optional */) {
  return new (primary._ofSameType(S$38, P$33))(primary, secondary, options);
}

var f = function () {
  return false;
};
var t = function () {
  return true;
};

function awaiting(a, b) {
  var result = merge([map$1(a, t), map$1(b, f)]);
  result = skipDuplicates(result);
  result = toProperty(result, f);
  return result.setName(a, 'awaiting');
}

var mixin$31 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleValue: function (x) {
    var fn = this._fn;
    var result = fn(x);
    if (result.convert) {
      this._emitError(result.error);
    } else {
      this._emitValue(x);
    }
  }
};

var S$39 = createStream('valuesToErrors', mixin$31);
var P$34 = createProperty('valuesToErrors', mixin$31);

var defFn = function (x) {
  return { convert: true, error: x };
};

function valuesToErrors(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defFn;

  return new (obs._ofSameType(S$39, P$34))(obs, { fn: fn });
}

var mixin$32 = {
  _init: function (_ref) {
    var fn = _ref.fn;

    this._fn = fn;
  },
  _free: function () {
    this._fn = null;
  },
  _handleError: function (x) {
    var fn = this._fn;
    var result = fn(x);
    if (result.convert) {
      this._emitValue(result.value);
    } else {
      this._emitError(x);
    }
  }
};

var S$40 = createStream('errorsToValues', mixin$32);
var P$35 = createProperty('errorsToValues', mixin$32);

var defFn$1 = function (x) {
  return { convert: true, value: x };
};

function errorsToValues(obs) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defFn$1;

  return new (obs._ofSameType(S$40, P$35))(obs, { fn: fn });
}

var mixin$33 = {
  _handleError: function (x) {
    this._emitError(x);
    this._emitEnd();
  }
};

var S$41 = createStream('endOnError', mixin$33);
var P$36 = createProperty('endOnError', mixin$33);

function endOnError(obs) {
  return new (obs._ofSameType(S$41, P$36))(obs);
}

// Create a stream
// -----------------------------------------------------------------------------

// () -> Stream
// (number, any) -> Stream
// (number, any) -> Stream
// (number, Array<any>) -> Stream
// (number, Function) -> Stream
// (number, Function) -> Stream
// (Function) -> Stream
// (Function) -> Stream
// Target = {addEventListener, removeEventListener}|{addListener, removeListener}|{on, off}
// (Target, string, Function|undefined) -> Stream
// (Function) -> Stream
// Create a property
// -----------------------------------------------------------------------------

// (any) -> Property
// (any) -> Property
// Convert observables
// -----------------------------------------------------------------------------

// (Stream|Property, Function|undefined) -> Property
Observable.prototype.toProperty = function (fn) {
  return toProperty(this, fn);
};

// (Stream|Property) -> Stream
Observable.prototype.changes = function () {
  return changes(this);
};

// Interoperation with other implimentations
// -----------------------------------------------------------------------------

// (Promise) -> Property
// (Stream|Property, Function|undefined) -> Promise
Observable.prototype.toPromise = function (Promise) {
  return toPromise(this, Promise);
};

// (ESObservable) -> Stream
// (Stream|Property) -> ES7 Observable
Observable.prototype.toESObservable = toESObservable;
Observable.prototype[$$observable] = toESObservable;

// Modify an observable
// -----------------------------------------------------------------------------

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.map = function (fn) {
  return map$1(this, fn);
};

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.filter = function (fn) {
  return filter(this, fn);
};

// (Stream, number) -> Stream
// (Property, number) -> Property
Observable.prototype.take = function (n) {
  return take(this, n);
};

// (Stream, number) -> Stream
// (Property, number) -> Property
Observable.prototype.takeErrors = function (n) {
  return takeErrors(this, n);
};

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.takeWhile = function (fn) {
  return takeWhile(this, fn);
};

// (Stream) -> Stream
// (Property) -> Property
Observable.prototype.last = function () {
  return last(this);
};

// (Stream, number) -> Stream
// (Property, number) -> Property
Observable.prototype.skip = function (n) {
  return skip(this, n);
};

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.skipWhile = function (fn) {
  return skipWhile(this, fn);
};

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.skipDuplicates = function (fn) {
  return skipDuplicates(this, fn);
};

// (Stream, Function|falsey, any|undefined) -> Stream
// (Property, Function|falsey, any|undefined) -> Property
Observable.prototype.diff = function (fn, seed) {
  return diff(this, fn, seed);
};

// (Stream|Property, Function, any|undefined) -> Property
Observable.prototype.scan = function (fn, seed) {
  return scan(this, fn, seed);
};

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.flatten = function (fn) {
  return flatten(this, fn);
};

// (Stream, number) -> Stream
// (Property, number) -> Property
Observable.prototype.delay = function (wait) {
  return delay(this, wait);
};

// Options = {leading: boolean|undefined, trailing: boolean|undefined}
// (Stream, number, Options|undefined) -> Stream
// (Property, number, Options|undefined) -> Property
Observable.prototype.throttle = function (wait, options) {
  return throttle(this, wait, options);
};

// Options = {immediate: boolean|undefined}
// (Stream, number, Options|undefined) -> Stream
// (Property, number, Options|undefined) -> Property
Observable.prototype.debounce = function (wait, options) {
  return debounce(this, wait, options);
};

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.mapErrors = function (fn) {
  return mapErrors(this, fn);
};

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.filterErrors = function (fn) {
  return filterErrors(this, fn);
};

// (Stream) -> Stream
// (Property) -> Property
Observable.prototype.ignoreValues = function () {
  return ignoreValues(this);
};

// (Stream) -> Stream
// (Property) -> Property
Observable.prototype.ignoreErrors = function () {
  return ignoreErrors(this);
};

// (Stream) -> Stream
// (Property) -> Property
Observable.prototype.ignoreEnd = function () {
  return ignoreEnd(this);
};

// (Stream, Function) -> Stream
// (Property, Function) -> Property
Observable.prototype.beforeEnd = function (fn) {
  return beforeEnd(this, fn);
};

// (Stream, number, number|undefined) -> Stream
// (Property, number, number|undefined) -> Property
Observable.prototype.slidingWindow = function (max, min) {
  return slidingWindow(this, max, min);
};

// Options = {flushOnEnd: boolean|undefined}
// (Stream, Function|falsey, Options|undefined) -> Stream
// (Property, Function|falsey, Options|undefined) -> Property
Observable.prototype.bufferWhile = function (fn, options) {
  return bufferWhile(this, fn, options);
};

// (Stream, number) -> Stream
// (Property, number) -> Property
Observable.prototype.bufferWithCount = function (count, options) {
  return bufferWhile$1(this, count, options);
};

// Options = {flushOnEnd: boolean|undefined}
// (Stream, number, number, Options|undefined) -> Stream
// (Property, number, number, Options|undefined) -> Property
Observable.prototype.bufferWithTimeOrCount = function (wait, count, options) {
  return bufferWithTimeOrCount(this, wait, count, options);
};

// (Stream, Function) -> Stream
// (Property, Function) -> Property
Observable.prototype.transduce = function (transducer) {
  return transduce(this, transducer);
};

// (Stream, Function) -> Stream
// (Property, Function) -> Property
Observable.prototype.withHandler = function (fn) {
  return withHandler(this, fn);
};

// Combine observables
// -----------------------------------------------------------------------------

// (Array<Stream|Property>, Function|undefiend) -> Stream
// (Array<Stream|Property>, Array<Stream|Property>, Function|undefiend) -> Stream
Observable.prototype.combine = function (other, combinator) {
  return combine([this, other], combinator);
};

// (Array<Stream|Property>, Function|undefiend) -> Stream
Observable.prototype.zip = function (other, combinator) {
  return zip([this, other], combinator);
};

// (Array<Stream|Property>) -> Stream
Observable.prototype.merge = function (other) {
  return merge([this, other]);
};

// (Array<Stream|Property>) -> Stream
Observable.prototype.concat = function (other) {
  return concat$1([this, other]);
};

// () -> Pool
var pool = function () {
  return new Pool();
};

// (Function) -> Stream
// Options = {concurLim: number|undefined, queueLim: number|undefined, drop: 'old'|'new'|undefiend}
// (Stream|Property, Function|falsey, Options|undefined) -> Stream
Observable.prototype.flatMap = function (fn) {
  return new FlatMap(this, fn).setName(this, 'flatMap');
};
Observable.prototype.flatMapLatest = function (fn) {
  return new FlatMap(this, fn, { concurLim: 1, drop: 'old' }).setName(this, 'flatMapLatest');
};
Observable.prototype.flatMapFirst = function (fn) {
  return new FlatMap(this, fn, { concurLim: 1 }).setName(this, 'flatMapFirst');
};
Observable.prototype.flatMapConcat = function (fn) {
  return new FlatMap(this, fn, { queueLim: -1, concurLim: 1 }).setName(this, 'flatMapConcat');
};
Observable.prototype.flatMapConcurLimit = function (fn, limit) {
  return new FlatMap(this, fn, { queueLim: -1, concurLim: limit }).setName(this, 'flatMapConcurLimit');
};

// (Stream|Property, Function|falsey) -> Stream
Observable.prototype.flatMapErrors = function (fn) {
  return new FlatMapErrors(this, fn).setName(this, 'flatMapErrors');
};

// Combine two observables
// -----------------------------------------------------------------------------

// (Stream, Stream|Property) -> Stream
// (Property, Stream|Property) -> Property
Observable.prototype.filterBy = function (other) {
  return filterBy(this, other);
};

// (Stream, Stream|Property, Function|undefiend) -> Stream
// (Property, Stream|Property, Function|undefiend) -> Property
Observable.prototype.sampledBy = function (other, combinator) {
  return sampledBy(this, other, combinator);
};

// (Stream, Stream|Property) -> Stream
// (Property, Stream|Property) -> Property
Observable.prototype.skipUntilBy = function (other) {
  return skipUntilBy(this, other);
};

// (Stream, Stream|Property) -> Stream
// (Property, Stream|Property) -> Property
Observable.prototype.takeUntilBy = function (other) {
  return takeUntilBy(this, other);
};

// Options = {flushOnEnd: boolean|undefined}
// (Stream, Stream|Property, Options|undefined) -> Stream
// (Property, Stream|Property, Options|undefined) -> Property
Observable.prototype.bufferBy = function (other, options) {
  return bufferBy(this, other, options);
};

// Options = {flushOnEnd: boolean|undefined}
// (Stream, Stream|Property, Options|undefined) -> Stream
// (Property, Stream|Property, Options|undefined) -> Property
Observable.prototype.bufferWhileBy = function (other, options) {
  return bufferWhileBy(this, other, options);
};

// Deprecated
// -----------------------------------------------------------------------------

var DEPRECATION_WARNINGS = true;
function dissableDeprecationWarnings() {
  DEPRECATION_WARNINGS = false;
}

function warn(msg) {
  if (DEPRECATION_WARNINGS && console && typeof console.warn === 'function') {
    var msg2 = '\nHere is an Error object for you containing the call stack:';
    console.warn(msg, msg2, new Error());
  }
}

// (Stream|Property, Stream|Property) -> Property
Observable.prototype.awaiting = function (other) {
  warn('You are using deprecated .awaiting() method, see https://github.com/rpominov/kefir/issues/145');
  return awaiting(this, other);
};

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.valuesToErrors = function (fn) {
  warn('You are using deprecated .valuesToErrors() method, see https://github.com/rpominov/kefir/issues/149');
  return valuesToErrors(this, fn);
};

// (Stream, Function|undefined) -> Stream
// (Property, Function|undefined) -> Property
Observable.prototype.errorsToValues = function (fn) {
  warn('You are using deprecated .errorsToValues() method, see https://github.com/rpominov/kefir/issues/149');
  return errorsToValues(this, fn);
};

// (Stream) -> Stream
// (Property) -> Property
Observable.prototype.endOnError = function () {
  warn('You are using deprecated .endOnError() method, see https://github.com/rpominov/kefir/issues/150');
  return endOnError(this);
};

// Exports
// --------------------------------------------------------------------------

var Kefir = {
  Observable: Observable,
  Stream: Stream,
  Property: Property,
  never: never,
  later: later,
  interval: interval,
  sequentially: sequentially,
  fromPoll: fromPoll,
  withInterval: withInterval,
  fromCallback: fromCallback,
  fromNodeCallback: fromNodeCallback,
  fromEvents: fromEvents,
  stream: stream,
  constant: constant,
  constantError: constantError,
  fromPromise: fromPromise,
  fromESObservable: fromESObservable,
  combine: combine,
  zip: zip,
  merge: merge,
  concat: concat$1,
  Pool: Pool,
  pool: pool,
  repeat: repeat,
  staticLand: staticLand
};

Kefir.Kefir = Kefir;

exports.dissableDeprecationWarnings = dissableDeprecationWarnings;
exports.Kefir = Kefir;
exports.Observable = Observable;
exports.Stream = Stream;
exports.Property = Property;
exports.never = never;
exports.later = later;
exports.interval = interval;
exports.sequentially = sequentially;
exports.fromPoll = fromPoll;
exports.withInterval = withInterval;
exports.fromCallback = fromCallback;
exports.fromNodeCallback = fromNodeCallback;
exports.fromEvents = fromEvents;
exports.stream = stream;
exports.constant = constant;
exports.constantError = constantError;
exports.fromPromise = fromPromise;
exports.fromESObservable = fromESObservable;
exports.combine = combine;
exports.zip = zip;
exports.merge = merge;
exports.concat = concat$1;
exports.Pool = Pool;
exports.pool = pool;
exports.repeat = repeat;
exports.staticLand = staticLand;
exports['default'] = Kefir;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _synkJs = __webpack_require__(3);

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
/* 17 */
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

    this.element = document.createElement('div');
    this.elementPre = document.createElement('pre');
    this.element.appendChild(this.elementPre);
    this.elementCode = document.createElement('code');
    this.elementPre.appendChild(this.elementCode);
    this.parent = document.getElementById('root');

    this.element.classList.add('note');

    this.state = { key: key, type: 'Note' };

    var v = state.velocity + 5;

    v = v < 0 ? 0 : v;
    v = v > 127 ? 127 : v;
    v = Math.floor(v * 2);
    v = v.toString(16);

    this.color = '#0000' + v;

    // Set any additional properties provided by the 'state' argument
    if (state !== undefined) this.update(state);
    this.parent.appendChild(this.element);
  }

  /**
   * @param {object} state - diff passed by the synk server
   */


  _createClass(Note, [{
    key: 'update',
    value: function update(state) {
      Object.assign(this.state, state);

      // update color
      if (state.hasOwnProperty('number')) this.number = state.number;

      // update text
      var json = JSON.stringify(this.state, null, '  ');

      // this.elementCode.innerText = `${json}\n${this.color}`;
    }

    /**
     * Called when this object leaves our subscription area, or is removed from
     * the synk server.
     */

  }, {
    key: 'teardown',
    value: function teardown() {
      var _this = this;

      this.color = '#000000';
      this.element.style.flexGrow = 0.000001;
      setTimeout(function () {
        _this.parent.removeChild(_this.element);
      }, 400);
    }

    /**
     * Change the background color.
     * @param {string|number} val - string representing color, or rrggbb integer
     *        number
     */

  }, {
    key: 'color',
    set: function set(val) {
      var color = void 0;

      if (typeof val === 'string') color = val;else return; // do nothing if val is not string or number;

      this.element.style.backgroundColor = color;
    },
    get: function get() {
      return this.element.style.backgroundColor;
    }
  }]);

  return Note;
}();

exports.default = Note;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _midiHelp = __webpack_require__(19);

var _midiHelp2 = _interopRequireDefault(_midiHelp);

var _eventemitter = __webpack_require__(0);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Convenience wrapper around midi API.
 */
var Midier = function (_Emitter) {
  _inherits(Midier, _Emitter);

  /**
   * Create a 'Midier' instance
   */
  function Midier() {
    _classCallCheck(this, Midier);

    var _this = _possibleConstructorReturn(this, (Midier.__proto__ || Object.getPrototypeOf(Midier)).call(this));

    _this.ok = false;
    _this.midi = null;
    _this.status = 'midi not supported';
    _this.parsers = [];
    _this.inputs = [];

    if (!navigator.requestMIDIAccess) return _possibleConstructorReturn(_this);

    navigator.requestMIDIAccess().then(function (midi) {
      _this.ok = true;
      _this.midi = midi;
      _this.status = 'ready';
      _this.pedal = false; // only one pedal for many channels/devices

      var _loop = function _loop(id, input) {
        var parser = new _midiHelp2.default.MidiParser();

        input.onmidimessage = function (msg) {
          parser.parseArray(msg.data);
        };

        parser.on('noteOn', function (n, v, c) {
          if (v === 0) _this.emit('noteOff', n, v, c);else _this.emit('noteOn', n, v, c);
        });

        parser.on('noteOff', function (n, v, c) {
          _this.emit('noteOff', n, v, c);
        });

        parser.on('cc', function (n, v, c) {
          if (n === 64) {
            if (v >= 64) {
              if (_this.pedal === false) {
                _this.pedal = true;
                _this.emit('pedal', true, c);
              }
            } else {
              if (_this.pedal === true) {
                _this.pedal = false;
                _this.emit('pedal', false, c);
              }
            }
          }
        });

        _this.parsers.push(parser);
        _this.inputs.push(input);
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = midi.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = _slicedToArray(_ref, 2);

          var id = _ref2[0];
          var input = _ref2[1];

          _loop(id, input);
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

      console.log('midi is ready!');
    }, function (reason) {
      _this.status = reason;
    });
    return _this;
  }

  return Midier;
}(_eventemitter2.default);

exports.default = Midier;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  var MidiParser, byStatus, events, midiTypes,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  events = __webpack_require__(20);

  midiTypes = __webpack_require__(21);

  byStatus = midiTypes.byStatus;

  module.exports = midiTypes;

  MidiParser = (function(_super) {
    __extends(MidiParser, _super);

    function MidiParser() {
      this._midiMsgType = void 0;
      this._sysex = false;
      this._midi = {
        size: void 0,
        nibble1: void 0,
        nibble2: void 0,
        status: void 0,
        firstByte: void 0
      };
    }

    MidiParser.prototype.parseByte = function(byte) {
      if (byte & 128) {
        return this._parseStatus(byte);
      } else if (this._midi.firstByte === void 0) {
        return this._parseFirst(byte);
      } else {
        return this._parseSecond(byte);
      }
    };

    MidiParser.prototype.parseArray = function(input) {
      var byte, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = input.length; _i < _len; _i++) {
        byte = input[_i];
        _results.push(this.parseByte(byte));
      }
      return _results;
    };

    MidiParser.prototype.parseBytes = function() {
      var byte, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
        byte = arguments[_i];
        _results.push(this.parseByte(byte));
      }
      return _results;
    };

    MidiParser.prototype._parseStatus = function(byte) {
      this._midi.status = byte;
      this._midi.nibble1 = byte & 0xF0;
      this._midi.nibble2 = byte & 0x0F;
      this._midiMsgType = byStatus[this._midi.nibble1];
      if (!this._midiMsgType) {
        this._midiMsgType = byStatus[byte];
      }
      this._midi.firstByte = void 0;
      if (!this._midiMsgType) {
        this.emit('mysteryStatusByte', byte);
        return;
      }
      if (this._midiMsgType.size === 0) {
        return this.emit(this._midiMsgType.name);
      }
    };

    MidiParser.prototype._parseFirst = function(byte) {
      if (!this._midiMsgType) {
        this.emit('mysteryDataByte', byte);
        return;
      }
      if (this._midiMsgType.size === 1) {
        if (this._midiMsgType.hasChannel) {
          this.emit(this._midiMsgType.name, byte, this._midi.nibble2);
        }
        return this._midi.status = void 0;
      } else {
        return this._midi.firstByte = byte;
      }
    };

    MidiParser.prototype._parseSecond = function(byte) {
      if (this._midiMsgType.isFourteenBit) {
        this.emit(this._midiMsgType.name, this._midi.firstByte + (byte * 128), this._midiMsgType.hasChannel ? this._midi.nibble2 : void 0);
      } else {
        this.emit(this._midiMsgType.name, this._midi.firstByte, byte, this._midi.nibble2);
      }
      this._midi.status = void 0;
      return this._midi.firstByte = void 0;
    };

    return MidiParser;

  })(events.EventEmitter);

  module.exports.MidiParser = MidiParser;

}).call(this);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

(function() {
  var MidiMsgType, byStatus, name, type, types;

  module.exports.byStatus = byStatus = [];

  module.exports.types = types = {};

  MidiMsgType = (function() {
    function MidiMsgType(name, size, hasChannel, status, isFourteenBit) {
      this.name = name;
      this.size = size;
      this.hasChannel = hasChannel;
      this.status = status;
      this.isFourteenBit = isFourteenBit != null ? isFourteenBit : false;
      byStatus[status] = this;
      types[name] = this;
    }

    MidiMsgType.prototype.toArray = function(one, two, three) {
      if (this.isFourteenBit) {
        one = one || 8192;
        return [this.status + (two || 0), one % 128, Math.floor(one / 128)];
      }
      if (this.size === 2) {
        return [this.status + (three || 0), one, two];
      }
      if (this.size === 1) {
        if (this.hasChannel) {
          return [this.status + (two || 0), one];
        } else {
          return [this.status, one];
        }
      }
      if (this.size === 0) {
        return [this.status];
      }
    };

    return MidiMsgType;

  })();

  new MidiMsgType('noteOn', 2, true, 0x90);

  new MidiMsgType('noteOff', 2, true, 0x80);

  new MidiMsgType('pitchBend', 2, true, 0xE0, true);

  new MidiMsgType('cc', 2, true, 0xB0);

  new MidiMsgType('channelPressure', 1, true, 0xD0);

  new MidiMsgType('clock', 0, false, 0xF8);

  new MidiMsgType('start', 0, false, 0xFA);

  new MidiMsgType('stop', 0, false, 0xFC);

  new MidiMsgType('continue', 0, false, 0xfB);

  new MidiMsgType('songPosition', 2, false, 0xF2, true);

  for (name in types) {
    type = types[name];
    module.exports[name] = type.toArray.bind(type);
  }

}).call(this);


/***/ })
],[4]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2NoYXJsZXMvcHJvamVjdHMvbm9kZWpzL3N5bmstanMvZGlzdC9zeW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/YTNiNCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jaGFybGVzL3Byb2plY3RzL25vZGVqcy9zeW5rLWpzL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvY2hhcmxlcy9wcm9qZWN0cy9ub2RlanMvc3luay1qcy9ub2RlX21vZHVsZXMva2VmaXIvZGlzdC9rZWZpci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwRW5kcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL05vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL01pZGllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWlkaS1oZWxwL291dC9saWIvbWlkaS1oZWxwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taWRpLWhlbHAvb3V0L2xpYi9taWRpLXR5cGVzLmpzIl0sIm5hbWVzIjpbIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsInVuZGVmaW5lZCIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18iLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwibiIsIl9fZXNNb2R1bGUiLCJnZXREZWZhdWx0IiwiZ2V0TW9kdWxlRXhwb3J0cyIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInZhbHVlIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsIndyaXRhYmxlIiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZXZlbnRlbWl0dGVyIiwiX2V2ZW50ZW1pdHRlcjIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2tlZmlyIiwiX2tlZmlyMiIsIm9iaiIsImRlZmF1bHQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIlRJTUVPVVQiLCJDb25uZWN0aW9uIiwiX0VtaXR0ZXIiLCJ1cmwiLCJfdGhpcyIsImdldFByb3RvdHlwZU9mIiwic3RyZWFtIiwiZnJvbUV2ZW50cyIsInNvY2siLCJvcGVuU3RyZWFtIiwiX2Nvbm5lY3Rpb25Db3VudCIsIl9sb2ciLCJfbWVzc2FnZVF1ZSIsIl9jb25uZWN0IiwiX3RoaXMyIiwibG9nIiwiV2ViU29ja2V0IiwicmVjb25uZWN0Iiwic2V0VGltZW91dCIsIm9uZXJyb3IiLCJlcnJvciIsIm9ub3BlbiIsIm9ubWVzc2FnZSIsImVtaXQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwic2VuZCIsInNoaWZ0Iiwib25jbG9zZSIsInB1c2giLCJtZXNzYWdlIiwic3RyaW5naWZ5Iiwic3RhdGUiLCJyZWFzb24iLCJtc2ciLCJyZWFkeVN0YXRlIiwiRW5kcG9pbnQiLCJfc3Vic2NpcHRpb24iLCJfaW5wdXRTdHJlYW0iLCJfdW5oYW5kbGVkU3RyZWFtIiwidW5oYW5kbGVkIiwiUG9vbCIsInN1YnNjcmliZSIsInVuc3Vic2NyaWJlIiwib3V0cHV0IiwidW5wbHVnIiwiZmlsdGVyIiwibWV0aG9kIiwib2JzZXJ2ZSIsImNvbnNvbGUiLCJlbmQiLCJ3YXJuIiwicGx1ZyIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsImFycjIiLCJmcm9tIiwiTGVhZiIsInN5bmtPYmplY3RzIiwidXBkYXRlIiwiZGlmZiIsImFzc2lnbiIsInRlYXJkb3duIiwiQnJhbmNoIiwiY2xzIiwiYnJhbmNoZXMiLCJsZWF2ZXMiLCJfY2xhc3MiLCJjcmVhdGVCcmFuY2giLCJuMSIsIl9icmFuY2hlcyRuIiwiX2xlbiIsImFyZ3VtZW50cyIsIm4yIiwiX2tleSIsImNsYXNzIiwiRXJyb3IiLCJhcHBseSIsInRyaW0iLCJjb3VudCIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yIiwia2V5cyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3N0ZXAiLCJuZXh0IiwiZG9uZSIsImVyciIsInJldHVybiIsImZvckVhY2giLCJmIiwiX2xlbjIiLCJhcmdzIiwiX2tleTIiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiIsIl9kaWRJdGVyYXRvckVycm9yMiIsIl9pdGVyYXRvckVycm9yMiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfYnJhbmNoZXMkbmFtZSIsImNvbmNhdCIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zIiwiX2RpZEl0ZXJhdG9yRXJyb3IzIiwiX2l0ZXJhdG9yRXJyb3IzIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9uYW1lIiwiZ2V0QnJhbmNoIiwiX2xlbjMiLCJhbGwiLCJfa2V5MyIsImZpcnN0Iiwic2xpY2UiLCJyZW1vdmVCcmFuY2giLCJwYXJlbnQiLCJfbGVuNCIsIl9rZXk0IiwiZ2V0TGVhZiIsInNldExlYWYiLCJyZW1vdmVMZWFmIiwic2V0IiwidiIsIl9zbGljZWRUb0FycmF5Iiwic2xpY2VJdGVyYXRvciIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJfaSIsIl9zIiwiX0VuZHBvaW50MiIsIl9FbmRwb2ludDMiLCJfQnJhbmNoIiwiX0JyYW5jaDIiLCJPYmplY3RzIiwiX0VuZHBvaW50IiwiYnlTS2V5IiwiYnlLZXkiLCJieUlkIiwicXVldWVkTWVzc2FnZXMiLCJ1cGRhdGVLZXlzIiwidXBkYXRlU3Vic2NyaXB0aW9uTXNnIiwicmVtb3ZlIiwiYWRkIiwibGVhZiIsIl9ieUtleSIsInBhcnRzIiwidCIsInNwbGl0IiwiY29sbGVjdGlvbiIsInJlbW92ZU9iamVjdCIsIl9ieUtleTIiLCJpZCIsInBvcCIsInF1ZXVlTWVzc2FnZSIsInF1ZXVlIiwiYXBwbHlRdWV1ZWRNZXNzYWdlcyIsInNvcnQiLCJhIiwiYiIsImVudHJpZXMiLCJfc3RlcCR2YWx1ZSIsIm1vZCIsIm1vZE9iaiIsInNwbGljZSIsIl9ieUtleTMiLCJzS2V5IiwiY2h1bmsiLCJyZW0iLCJfYnlLZXk0IiwiX2J5S2V5NSIsIm5zS2V5IiwibmV3Q2h1bmsiLCJicmFuY2gxIiwiYnJhbmNoMiIsIlN5bmsiLCJfQ29ubmVjdGlvbiIsIl9Db25uZWN0aW9uMiIsIl9PYmplY3RzIiwiX09iamVjdHMyIiwiX1N5bmsiLCJfU3luazIiLCJvYmplY3RzIiwiY29ubmVjdGlvbiIsImFjdGl2ZSIsInBlbmRpbmdBZGQiLCJwZW5kaW5nUmVtb3ZlIiwib24iLCJjdXJyZW50IiwicmVzb2x2ZSIsInNldFN1YnNjcmlwdGlvbiIsIm5ld0tleXMiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCIsIl9kaWRJdGVyYXRvckVycm9yNCIsIl9pdGVyYXRvckVycm9yNCIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJhY3RpdmVLZXkiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSIsIl9kaWRJdGVyYXRvckVycm9yNSIsIl9pdGVyYXRvckVycm9yNSIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJuZXdLZXkiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiIsIl9kaWRJdGVyYXRvckVycm9yNiIsIl9pdGVyYXRvckVycm9yNiIsIl9pdGVyYXRvcjYiLCJfc3RlcDYiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyIsIl9kaWRJdGVyYXRvckVycm9yNyIsIl9pdGVyYXRvckVycm9yNyIsIl9pdGVyYXRvcjciLCJfc3RlcDciLCJ3aW5kb3ciLCJLZWZpciIsIkVtaXR0ZXIiLCJBcHAiLCJvbmxvYWQiLCJhcHAiLCJoYXNoIiwibG9jYXRpb24iLCJzeW5rIiwicHJldmVudENvbnRleHRNZW51Iiwib25jb250ZXh0bWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJodHRwcyIsInByb3RvY29sIiwic3RhcnRzV2l0aCIsImhvc3QiLCJlbmRwb2ludCIsIm1pZGllciIsImRvd24iLCJBcHBFbmRwb2ludCIsIk5vdGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudFByZSIsImFwcGVuZENoaWxkIiwiZWxlbWVudENvZGUiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInR5cGUiLCJ2ZWxvY2l0eSIsIk1hdGgiLCJmbG9vciIsInRvU3RyaW5nIiwiY29sb3IiLCJudW1iZXIiLCJqc29uIiwic3R5bGUiLCJmbGV4R3JvdyIsInJlbW92ZUNoaWxkIiwidmFsIiwiYmFja2dyb3VuZENvbG9yIiwiTWlkaWVyIiwib2siLCJtaWRpIiwic3RhdHVzIiwicGFyc2VycyIsImlucHV0cyIsIm5hdmlnYXRvciIsInJlcXVlc3RNSURJQWNjZXNzIiwidGhlbiIsInBlZGFsIiwiaW5wdXQiLCJwYXJzZXIiLCJNaWRpUGFyc2VyIiwib25taWRpbWVzc2FnZSIsInBhcnNlQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsU0FBU0EsZ0NBQVQsQ0FBMENDLElBQTFDLEVBQWdEQyxPQUFoRCxFQUF5RDtBQUN6RCxNQUFHLGdDQUFPQyxPQUFQLE9BQW1CLFFBQW5CLElBQStCLGdDQUFPQyxNQUFQLE9BQWtCLFFBQXBELEVBQ0NBLE9BQU9ELE9BQVAsR0FBaUJELFFBQVEsbUJBQUFHLENBQVEsRUFBUixDQUFSLEVBQWtDLG1CQUFBQSxDQUFRLEVBQVIsQ0FBbEMsQ0FBakIsQ0FERCxLQUVLLElBQUcsSUFBSCxFQUNKLHVCQUFBQyxDQUFPLEdBQVAsRUFBYUosT0FBYixFQURJLEtBRUEsSUFBRyxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQXRCLEVBQ0pBLFFBQVEsTUFBUixJQUFrQkQsUUFBUUcsUUFBUSxlQUFSLENBQVIsRUFBa0NBLFFBQVEsT0FBUixDQUFsQyxDQUFsQixDQURJLEtBR0pKLEtBQUssTUFBTCxJQUFlQyxRQUFRRCxLQUFLTSxTQUFMLENBQVIsRUFBeUJOLEtBQUtNLFNBQUwsQ0FBekIsQ0FBZjtBQUNELENBVEQsYUFTUyxVQUFTQyw2QkFBVCxFQUF3Q0MsNkJBQXhDLEVBQXVFO0FBQ2hGLFNBQU8sU0FBVSxVQUFTQyxPQUFULEVBQWtC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QUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNB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QVk7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RUQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLENBQUMsNEJBQTRCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZ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QUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxTQUFTO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdEQUFnRCxTQUFTO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpREFBaUQsU0FBUztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlEQUFpRCxTQUFTO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpREFBaUQsa0NBQWtDO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQSx3QkFBd0IscUJBQXFCO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixTQUFTO0FBQ2pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsYUFBYTtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELG1EQUFtRDtBQUNwRzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTs7QUFFQSxpREFBaUQsbUNBQW1DO0FBQ3BGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpREFBaUQsU0FBUztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlEQUFpRCxTQUFTO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLCtDQUErQyxvQ0FBb0M7QUFDbkY7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLCtDQUErQyxvQkFBb0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUEsaURBQWlELFNBQVM7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUEsaURBQWlELFNBQVM7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0NBQXNDLEVBQUUsNEJBQTRCLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSCxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQzdTQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpLCByZXF1aXJlKFwia2VmaXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoWywgXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzeW5rXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKSwgcmVxdWlyZShcImtlZmlyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzeW5rXCJdID0gZmFjdG9yeShyb290W3VuZGVmaW5lZF0sIHJvb3RbdW5kZWZpbmVkXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXZlbnRlbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9ldmVudGVtaXR0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRlbWl0dGVyKTtcblxudmFyIF9rZWZpciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfa2VmaXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2VmaXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIEhvdyBsb25nIGRvIHdlIHdhaXQgYmVmb3JlIHJldHJ5aW5nIGEgY29ubmVjdGlvblxudmFyIFRJTUVPVVQgPSA1MDA7XG5cbi8qKlxuKiBXcmFwIGEgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIHNlcnZlclxuKi9cblxudmFyIENvbm5lY3Rpb24gPSBmdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgX2luaGVyaXRzKENvbm5lY3Rpb24sIF9FbWl0dGVyKTtcblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgYSBjb25uZWN0aW9uLlxuICAqXG4gICogRXZlbnRzXG4gICogLSAnY29ubmVjdCcgLSBmaXJlZCB0aGUgZmlyc3QgdGltZSBhIGNvbm5lY3Rpb24gb3BlbnMgc3VjY2Vzc2Z1bGxseVxuICAqIC0gJ3JlY29ubmVjdCcgLSBmaXJlZCB3aGVuIHN1YnNlcXVlbmN0IGNvbm5lY3Rpb25zIG9wZW5cbiAgKiAtICdvcGVuJyAtIGZpcmVkIHdoZW4gYW55IGNvbm5lY3Rpb24gb3BlbnNcbiAgKiAtICdjbG9zZScgLSBmaXJlZCB3aGVuIGFueSBjb25uZWN0aW9uIGNsb3Nlc1xuICAqIC0gJ3NlbmRFcnJvcicgKG1lc3NhZ2UpIC0gd2UgdHJpZWQgdG8gc2VuZCwgYnV0IHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZFxuICAqXG4gICogQGFyZyB7c3RyaW5nfSB1cmwgLSB3ZWJzb2NrZXQgdXJsIHRvIGNvbm5lY3QgdG9cbiAgKi9cbiAgZnVuY3Rpb24gQ29ubmVjdGlvbih1cmwpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdGlvbik7XG5cbiAgICAvKipcbiAgICAqIEBtZW1iZXIge3VybH0gc3RyaW5nIC0gdGhlIHVybCB3ZSBjb25uZWN0IHRvIG9uIHRoZSBuZXh0IGNvbm5lY3Rpb25cbiAgICAqL1xuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb25uZWN0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29ubmVjdGlvbikpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMudXJsID0gdXJsO1xuXG4gICAgLyoqXG4gICAgKiBAbWVtYmVyIHtLZWZpci5zdHJlYW19IC0gc3RyZWFtIG9mIG1lc3NhZ2VzIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlclxuICAgICogQHJlYWRvbmx5XG4gICAgKi9cbiAgICBfdGhpcy5zdHJlYW0gPSBfa2VmaXIyLmRlZmF1bHQuZnJvbUV2ZW50cyhfdGhpcywgJ21lc3NhZ2UnKTtcblxuICAgIC8qKlxuICAgICogQG1lbWJlciB7V2ViU29ja2V0fSAtIFRoZSBjdXJyZW50IHNvY2tldCBvYmplY3RcbiAgICAqIEByZWFkb25seVxuICAgICovXG4gICAgX3RoaXMuc29jayA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtLZWZpci5zdHJlYW19IC0gZXZlbnQgZWFjaCB0aW1lIHRoZSBjb25uZWN0aW9uIGlzIG9wZW5lZFxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIF90aGlzLm9wZW5TdHJlYW0gPSBfa2VmaXIyLmRlZmF1bHQuZnJvbUV2ZW50cyhfdGhpcywgJ29wZW4nKTtcblxuICAgIF90aGlzLl9jb25uZWN0aW9uQ291bnQgPSAwO1xuICAgIF90aGlzLl9sb2cgPSBbXTtcbiAgICBfdGhpcy5fbWVzc2FnZVF1ZSA9IFtdO1xuICAgIF90aGlzLl9jb25uZWN0KCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICogQ29ubmVjdCBhbmQgc3RheSBjb25uZWN0ZWQuIFRoaXMgaXMgY2FsbGVkIG9uY2UgYnkgdGhlIGNvbnN0cnVjdG9yLiBJdFxuICAqIHNob3VsZCBub3QgYmUgY2FsbGVkIGFnYWluIG1hbnVhbGx5LlxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENvbm5lY3Rpb24sIFt7XG4gICAga2V5OiAnX2Nvbm5lY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY29ubmVjdCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmxvZygnY29ubmVjdGluZy4uLicpO1xuICAgICAgdGhpcy5zb2NrID0gbmV3IFdlYlNvY2tldCh0aGlzLnVybCk7XG5cbiAgICAgIHZhciByZWNvbm5lY3QgPSBmdW5jdGlvbiByZWNvbm5lY3QoKSB7XG4gICAgICAgIF90aGlzMi5sb2coJ1dhaXRpbmcgdG8gcmVjb25uZWN0Li4uJyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fY29ubmVjdCgpO1xuICAgICAgICB9LCBUSU1FT1VUKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc29jay5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIF90aGlzMi5sb2coWydzb2NrZXQgZXJyb3InLCBlcnJvcl0pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLmxvZygnY29ubmVjdGlvbiBvcGVuZWQnKTtcbiAgICAgICAgX3RoaXMyLnNvY2sub25tZXNzYWdlID0gZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICBfdGhpczIuZW1pdCgnbWVzc2FnZScsIEpTT04ucGFyc2UobS5kYXRhKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMyLl9jb25uZWN0aW9uQ291bnQgKz0gMTtcbiAgICAgICAgaWYgKF90aGlzMi5fY29ubmVjdGlvbkNvdW50ID09PSAxKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgdGltZSBjb25uZWN0aW5nLCBzZW5kIHF1ZWQgbWVzc2FnZXNcbiAgICAgICAgICB3aGlsZSAoX3RoaXMyLl9tZXNzYWdlUXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgX3RoaXMyLnNlbmQoX3RoaXMyLl9tZXNzYWdlUXVlWzBdKTtcbiAgICAgICAgICAgIF90aGlzMi5fbWVzc2FnZVF1ZS5zaGlmdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpczIuZW1pdCgnY29ubmVjdCcpO1xuICAgICAgICB9IGVsc2UgX3RoaXMyLmVtaXQoJ3JlY29ubmVjdCcpO1xuXG4gICAgICAgIF90aGlzMi5lbWl0KCdvcGVuJyk7XG4gICAgICB9O1xuXG4gICAgICAvLyBUaGlzIGZpcmVzIGlmIGV2ZW4gaWYgdGhlIGNvbm5lY3Rpb24gd2FzIG5ldmVyIG9wZW5lZC4gRm9yIGV4YW1wbGUsIGlmXG4gICAgICAvLyB0aGUgc2VydmVyIGlzIGRvd24gd2hlbiB3ZSBmaXJzdCBjb25uZWN0LCBvbmNsb3NlIHdpbGwgc3RpbGwgZmlyZS5cbiAgICAgIHRoaXMuc29jay5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIubG9nKCdjbG9zZScpO1xuICAgICAgICBfdGhpczIuZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgcmVjb25uZWN0KCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGFyZyB7YW55dGhpbmd9IHZhbHVlIC0gQWRkIGFueSB2YWx1ZSB0byB0aGlzIGNvbm5lY3Rpb24ncyBpbnRlcm5hbCBsb2dcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsb2cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2codmFsdWUpIHtcbiAgICAgIHRoaXMuX2xvZy5wdXNoKHZhbHVlKTtcbiAgICAgIHRoaXMuZW1pdCgnbG9nJywgdmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2xvZy5sZW5ndGggPiAyMDApIHRoaXMuX2xvZy5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0IHRoZSBSZWFkeSBTdGF0ZSBDb25zdGFudCBvZiB0aGUgY3VycmVudCBzb2NrZXQuIE9uZSBvZiB0aGUgZm9sbG93aW5nIGludHM6XG4gICAgKiAwIC0gQ09OTkVDVElORyBUaGUgY29ubmVjdGlvbiBpcyBub3QgeWV0IG9wZW4uXG4gICAgKiAxIC0gT1BFTiBUaGUgY29ubmVjdGlvbiBpcyBvcGVuIGFuZCByZWFkeSB0byBjb21tdW5pY2F0ZS5cbiAgICAqIDIgLSBDTE9TSU5HIFRoZSBjb25uZWN0aW9uIGlzIGluIHRoZSBwcm9jZXNzIG9mIGNsb3NpbmcuXG4gICAgKiAzIC0gQ0xPU0VEIFRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZCBvciBjb3VsZG4ndCBiZSBvcGVuZWQuXG4gICAgKlxuICAgICogQHJldHVybnMge251bWJlcn0gLSBSZWFkeSBTdGF0ZSBDb25zdGFudFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NlbmQnLFxuXG5cbiAgICAvKipcbiAgICAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBzZXJ2ZXIuIElmIHRoZSBjb25uZWN0aW9uIGlzIG5vdCB5ZXQgb3BlbiwgcXVlIHRoZVxuICAgICogbWVzc2FnZSB0byBiZSBzZW50IG9uY2UgdGhlIGNvbm5lY3Rpb24gZG9lcyBvcGVuLlxuICAgICpcbiAgICAqIEBhcmcge09iamVjdHxTdHJpbmd9IG1lc3NhZ2UgLSBKU09OIG9iamVjdCBvciBzdHJpbmcgdG8gc2VuZCB0byB0aGUgc2VydmVyLlxuICAgICogQHJldHVybnMge2Jvb2x8bnVsbH0gLSB0cnVlIGlmIHRoZSBtZXNzYWdlIHdhcyBzZW50IHN1Y2Nlc3NmdWxseS4gbnVsbCBpZiB0aGVcbiAgICAqICAgICAgICAgIG1lc3NhZ2Ugd2FzIHF1ZWQgdG8gYmUgc2VudCBsYXRlci4gRmFsc2UgaWYgc2VuZCBmYWlsZWQuXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChtZXNzYWdlKSB7XG4gICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnKSBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSAxKSB7XG4gICAgICAgIC8vIFdlIGFyZSBjb25uZWN0ZWRcbiAgICAgICAgdGhpcy5zb2NrLnNlbmQobWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGFyZSBub3QgY29ubmVjdGVkXG4gICAgICBpZiAodGhpcy5fY29ubmVjdGlvbkNvdW50ID09PSAwKSB7XG4gICAgICAgIC8vIFdlIGhhdmUgbmV2ZXIgYmVlbiBjb25uZWN0ZWRcbiAgICAgICAgdGhpcy5fbWVzc2FnZVF1ZS5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmxvZyhbJ21lc3NhZ2UgcXVlZCcsIG1lc3NhZ2VdKTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgdHJpZWQgdG8gc2VuZCwgYnV0IHRoZSBjb25uZWN0aW9uIHdhcyBicm9rZW5cbiAgICAgIHRoaXMubG9nKHsgcmVhc29uOiAnc2VuZCBmYWlsZWQgYmVjYXVzZSB0aGUgY29ubmVjdGlvbiB3YXMgYnJva2VuOicsIG1zZzogbWVzc2FnZSB9KTtcbiAgICAgIHRoaXMubG9nKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5lbWl0KCdzZW5kRXJyb3InLCBtZXNzYWdlKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0YXRlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICghdGhpcy5zb2NrKSByZXR1cm4gMztcblxuICAgICAgcmV0dXJuIHRoaXMuc29jay5yZWFkeVN0YXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25uZWN0aW9uO1xufShfZXZlbnRlbWl0dGVyMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29ubmVjdGlvbjtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9ldmVudGVtaXR0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX2V2ZW50ZW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudGVtaXR0ZXIpO1xuXG52YXIgX2tlZmlyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9rZWZpcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZWZpcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4qIEJhc2UgZm9yIGNsYXNzZXMgdGhhdCByZXNwb25kIHRvIGEgc3RyZWFtLlxuKlxuKiBFeHRlbmRpbmcgRW5kcG9pbnQgZ2l2ZSB1cyB0aGUgYWJpbGl0eSBtYWtlIHJlbW90ZSBwcm9jZWVkdXJlIGNhbGxzIG9uIGNsYXNzXG4qIGluc3RhbmNlcyBieSBzZW5kaW5nIG1zZyBvYmplY3RzIHRvIGEgS2VmaXIuc3RyZWFtLiBFeHRlbnNpb24gY2xhc3NlcyBkZWZpbmVcbiogbWV0aG9kcyB0aGF0IGNhbiBiZSBjYWxsZWQgYnkgc2VuZGluZyBtZXNzYWdlcyB0byB0aGUgc3RyZWFtLlxuKlxuKiBBbiBlbmRwb2ludCBpbnN0YW5jZSBtYXkgb25seSBsaXN0ZW4gdG8gb25lIGNsYXNzIGF0IGEgdGltZVxuKi9cbnZhciBFbmRwb2ludCA9IGZ1bmN0aW9uIChfRW1pdHRlcikge1xuICBfaW5oZXJpdHMoRW5kcG9pbnQsIF9FbWl0dGVyKTtcblxuICAvKipcbiAgKiBDcmVhdGUgYW4gRW5kcG9pbnQuIFVzdWFsbHkgdGhpcyB3aWxsIGJlIGNhbGxlZCB2aWEgc3VwZXIoKVxuICAqL1xuICBmdW5jdGlvbiBFbmRwb2ludCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW5kcG9pbnQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVuZHBvaW50Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRW5kcG9pbnQpKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLl9zdWJzY2lwdGlvbiA9IG51bGw7XG4gICAgX3RoaXMuX2lucHV0U3RyZWFtID0gbnVsbDtcbiAgICBfdGhpcy5fdW5oYW5kbGVkU3RyZWFtID0gbnVsbDtcbiAgICBfdGhpcy51bmhhbmRsZWQgPSBuZXcgX2tlZmlyMi5kZWZhdWx0LlBvb2woKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgKiBMaXN0ZW4gZm9yIGluY29taW5nIHJwYyBjYWxscyBvbiBhIHN0cmVhbS4gQSBjbGFzcyBpbnN0YW5jZSBtYXkgb25seSBsaXN0ZW5cbiAgKiB0byBvbmUgc3RyZWFtIGF0IGEgdGltZS4gVG8gdW5zdWJzY3JpYmUgZnJvbSB0aGUgY3VycmVudCBzdHJlYW0gY2FsbFxuICAqIHN1YnNjcmliZSgpIHdpdGggbm8gYXJndW1lbnRcbiAgKlxuICAqIEBhcmcge1tLZWZpci5zdHJlYW1dfSBzdHJlYW0gLSB0aGUgc3RyZWFtIHRvIHN1YnNjcmliZSB0by4gSWYgd2UgYXJlXG4gICogICAgICBzdWJzY3JpYmVkIHRvIGFub3RoZXIgc3RyZWFtLCB1bnN1YnNjcmliZSBmcm9tIGl0LiBNZXNzYWdlcyBvbiB0aGVcbiAgKiAgICAgIHN0cmVhbSBhcmUgZXhwZWN0ZWQgdG8gaW5jbHVkZSBhIHttZXRob2Q6ICdtZXRob2ROYW1lJ30gcGFyYW1ldGVyLiBUaGVcbiAgKiAgICAgIG1ldGhvZE5hbWUgc2hvdWxkIG1hdGNoIGEgbWV0aG9kIG9uIHRoZSBjbGFzcy4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aFxuICAqICAgICAgdGhlIGVudGlyZSBtZXNzYWdlIGFzIHRoZSBvbmx5IGFyZ3VtZW50LlxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEVuZHBvaW50LCBbe1xuICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShzdHJlYW0pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fc3Vic2NpcHRpb24pIHRoaXMuX3N1YnNjaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGlmICh0aGlzLl91bmhhbmRsZWRTdHJlYW0pIHRoaXMub3V0cHV0LnVucGx1Zyh0aGlzLl91bmhhbmRsZWRTdHJlYW0pO1xuXG4gICAgICBzdHJlYW0gPSBzdHJlYW0gfHwgbnVsbDtcbiAgICAgIHRoaXMuX2lucHV0U3RyZWFtID0gc3RyZWFtO1xuXG4gICAgICBpZiAoIXN0cmVhbSkgcmV0dXJuO1xuXG4gICAgICAvLyBXZSBub3cgY3JlYXRlIHR3byBkZXJpdmF0aXZlIHN0cmVhbXMuIFRoZSBmaXJzdCBoYW5kbGVzIG1lc3NhZ2VzIGlmIHRoaXNcbiAgICAgIC8vIGNsYXNzIGhhcyBhbiBhcHByb3ByaWF0ZSBoYW5kbGVyIGdpdmVuIHRoZSBtZXNzYWdlJ3MgJy5tZXRob2QnIHBhcmFtZXRlci5cbiAgICAgIC8vIFdlIG9ic2VydmUgdGhpcyBzdHJlYW0sIGFuZCBsZWF2ZSBhIHJlZmVyZW5jZSB0byB0aGUgc3Vic2NyaXB0aW9uIHNvIHdlXG4gICAgICAvLyBjYW4gdW5zdWJzY3JpYmUgaWYgd2UgYXJlIHBhc3NlZCBkaWZmZXJlbnQgc3RyZWFtIHRvIG1vbml0b3IuXG4gICAgICB0aGlzLl9zdWJzY2lwdGlvbiA9IHN0cmVhbS5maWx0ZXIoZnVuY3Rpb24gKG1zZykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIF90aGlzMlttc2cubWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIH0pLm9ic2VydmUoe1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobXNnKSB7XG4gICAgICAgICAgX3RoaXMyW21zZy5tZXRob2RdKG1zZyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcihtc2cpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZDogZnVuY3Rpb24gZW5kKG1zZykge1xuICAgICAgICAgIGNvbnNvbGUud2Fybihtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gVGhlIHNlY29uZCBkZXJpdmF0aXZlIHN0cmVhbSBwYXNzZXMgdW5oYW5kbGVkIG1lc3NhZ2VzIHRvIHRoZSBlbmRwb2ludCdzXG4gICAgICAvLyAub3V0cHV0IHN0cmVhbS4gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgdW5oYW5kbGVkIHN0cmVhbSBzbyB3ZSBjYW4gdW5wbHVnXG4gICAgICAvLyBpdCBmcm9tIHRoZSBvdXRwdXQgcG9vbCB3aGVuIHdlIHN1YnNjcmliZSB0byBhIG5ldyBzdHJlYW0uXG4gICAgICB0aGlzLl91bmhhbmRsZWRTdHJlYW0gPSBzdHJlYW0uZmlsdGVyKGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBfdGhpczJbbXNnLm1ldGhvZF0gIT09ICdmdW5jdGlvbic7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudW5oYW5kbGVkLnBsdWcodGhpcy5fdW5oYW5kbGVkU3RyZWFtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldCB0aGUgc3RyZWFtIG9mIG91ciBjdXJyZW50IHN1YnNjcmlwdGlvbi5cbiAgICAqIEByZWFkb25seVxuICAgICogQHJldHVybnMge0tlZmlyLnN0cmVhbX0gLSBjdXJyZW50IHN1YnNjcmlwdGlvbi4gbnVsbCBpZiBub3Qgc3Vic2NyaWJlZC5cbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzdHJlYW0nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lucHV0U3RyZWFtO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFbmRwb2ludDtcbn0oX2V2ZW50ZW1pdHRlcjIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVuZHBvaW50O1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogRGVmYXVsdCBMZWFmIG9iamVjdC4gSWYgYW4gb2JqZWN0IGlzIGNyZWF0ZWQgb24gXG4gKi9cbnZhciBMZWFmID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBvYmplY3RzIGtleVxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgLSB0aGUgb2JqZWN0cyBpbml0aWFsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3luay1qcy5PYmplY3RzfSBzeW5rT2JqZWN0cyAtIHRoZSBwYXJlbnQgc3luay1qcyBPYmplY3RzIGNvbnRhaW5lclxuICAgKi9cbiAgZnVuY3Rpb24gTGVhZihrZXksIHN0YXRlLCBzeW5rT2JqZWN0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMZWFmKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLnN5bmtPYmplY3RzID0gc3lua09iamVjdHM7XG4gICAgdGhpcy51cGRhdGUoc3RhdGUpO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGUgaXMgY2FsbGVkIHdoZW4gdGhlIHNlcnZlciBjaGFuZ2VzIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R9IGRpZmYgLSBjaGFuZ2VzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIG9iamVjdFxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhMZWFmLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShkaWZmKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIGRpZmYpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBvYmplY3Qgd2lsbCBiZSBkZXN0cm95ZWQgb3IgcmVtb3ZlcyBmcm9tIHRoZSBjdXJyZW50XG4gICAgICogc3Vic2NyaXB0aW9uLiBZb3VyIGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gbXVzdCByZW1vdmUgcmVmZXJlbmNlc1xuICAgICAqIHRvIHRoZSBvYmplY3QgZnJvbSB5b3VyIHByb2plY3Qgc28gdGhhdCB0aGUgb2JqZWN0IHdpbGwgYmUgZ2FyYmFnZVxuICAgICAqIGNvbGxlY3RlZCBjb3JyZWN0bHkuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3RlYXJkb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgICBjb25zb2xlLmxvZygndGVhcmRvd246JywgdGhpcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExlYWY7XG59KCk7XG5cbi8qKlxuICogQnJhbmNoIGlzIHBhcnQgb2YgYSB0cmVlLWxpa2UgRGF0YSBzdHJ1Y3R1cmUuIEVhY2ggYnJhbmNoIGNvbnRhaW5zIGFueSBudW1iZXJcbiAqIG9mIGNoaWxkcmVuLiBFYWNoIGNoaWxkIGlzIGVpdGhlciBhIEJyYW5jaCBvciBhIExlYWYuIEVhY2ggY2hpbGQgaXNcbiAqIGlkZW50aWZpZWQgYnkgYSBuYW1lIHN0cmluZy4gSW4gdGhpcyBpbXBsZW1lbnRhdGlvbiwgTGVhdmVzIGFyZSBhbnlcbiAqIGphdmFzY3JpcHQgT2JqZWN0IHRoYXQgc2F0aXNmeSB0aGUgTGVhZiBpbnRlcmZhY2UgYWJvdmUuXG4gKlxuICogRWFjaCBCcmFuY2ggaGFzIGEgc3BlY2lhbCBwcm9wZXJ0eSBjYWxsZWQgJ2NsYXNzJy4gVGhpcyBpcyB0aGUgcmVjb21tZW5kZWRcbiAqIGNsYXNzIGZvciBMZWFmIG9iamVjdHMuIExlYWYgb2JqZWN0cyBtYXkgb3IgbWF5IG5vdCBiZSBjcmVhdGVkIHdpdGggdGhlXG4gKiByZWNvbW1lbmRlZCBjbGFzcy4gV2hlbiB3ZSBjcmVhdGUgbmV3IEJyYW5jaGVzIHdpdGggYGIuY3JlYXRlKC4uLilgLCBjaGlsZFxuICogYnJhbmNoZXMgaW5oZXJpdCB0aGUgcGFyZW50J3MgJ2NsYXNzJyBwcm9wZXJ0eS5cbiAqL1xuXG5cbnZhciBCcmFuY2ggPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0NsYXNzfSBbY2xzXSAtIE9wdGlvbmFsIGNsYXNzLiBEZWZhdWx0IGlzIE9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIEJyYW5jaChjbHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJhbmNoKTtcblxuICAgIHRoaXMuYnJhbmNoZXMgPSB7fTtcbiAgICB0aGlzLmxlYXZlcyA9IHt9O1xuICAgIHRoaXMuX2NsYXNzID0gY2xzIHx8IExlYWY7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIHJlY29tbWVuZGVkIGNsYXNzIGZvciBjaGlsZCBsZWF2ZXMgYXR0YWNoZWQgdG8gdGhpcyBvYmplY3QuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEJyYW5jaCwgW3tcbiAgICBrZXk6ICdjcmVhdGVCcmFuY2gnLFxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBCcmFuY2ggb3IgaWRlbnRpZmllZCBieSBhIG5hbWUuIFRoZSBleGFtcGxlIGJlbG93IHJldHVybnNcbiAgICAgKiB0aGUgY2hpbGQgaWRlbnRpZmllZCBieSB0aGUgbmFtZSAnYWxpY2UnLiBJZiAnYWxpY2UnIGRvZXMgbm90IGV4aXN0IG9uIHRoZVxuICAgICAqIEJyYW5jaCwgYSBuZXcgY2hpbGQgQnJhbmNoIGNhbGxlZCAnYWxpY2UnIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqIGBiLmdldCgnYWxpY2UnKSBcXFxcIHJldHVybnMgdGhlIGJyYW5jaCBvciBjaGlsZCBuYW1lZCBhbGljZWBcbiAgICAgKlxuICAgICAqIEEgbG9uZ2VyIGFkZHJlc3MgY2FuIGJlIHNwZWNpZmllZCBpbiB0aGUgZm9ybWF0IGJlbG93LiBUaGlzIHdpbGwgY3JlYXRlIG5ld1xuICAgICAqIEJyYW5jaGVzIGFuZCBzdWItQnJhbmNoZXMgaWYgbmVlZGVkOlxuICAgICAqXG4gICAgICogYGIuZ2V0KCdhbGljZScsICdpY2UgY3JlYW0nICdvdGhlcicpYFxuICAgICAqXG4gICAgICogSW4gYW55IGZvcm1hdCwgdGhlIGxhc3QgbmFtZSBzcGVjaWZpZWQgbWF5IGJlIHRoZSBuYW1lIG9mIGFuIGV4aXN0aW5nIExlYWYuXG4gICAgICogQWxsIHByZWNlZWRpbmcgbmFtZXMgbXVzdCBiZSBCcmFuY2ggbmFtZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbjEgLSB0aGUgbmFtZSB3ZSBhcmUgdHJ5aW5nIHRvIGdldC5cbiAgICAgKiBAcGFyYW0gey4uLlN0cmluZ30gbjIgLSByZW1haW5pbmcgc3ViIGJyYW5jaCBuYW1lcy5cbiAgICAgKiBAcmV0dXJucyB7QnJhbmNofSAtIHRoZSBCcmFuY2ggb3IgTGVhZiB3ZSByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJyYW5jaChuMSkge1xuICAgICAgdmFyIF9icmFuY2hlcyRuO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbjIgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIG4yW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgaWYgKG4xID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuYnJhbmNoZXMuaGFzT3duUHJvcGVydHkobjEpKSB7XG4gICAgICAgIC8vIFdlIG5vdyBrbm93IHRoYXQgdGhlIHZhbHVlIGF0IHRoaXNbbjFdIGlzIG5vdCBvdXIgJ293bicgcHJvcGVydHkuXG4gICAgICAgIC8vIEl0IGlzIGVpdGhlciBub3QgcHJlc2VudCwgb3IgbjEgaXMgbm90IGEgdmFsaWQgbmFtZS5cbiAgICAgICAgaWYgKHRoaXMuYnJhbmNoZXNbbjFdID09PSB1bmRlZmluZWQpIHRoaXMuYnJhbmNoZXNbbjFdID0gbmV3IEJyYW5jaCh0aGlzLmNsYXNzKTtlbHNlIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBicmFuY2ggbmFtZTogJyArIG4xKTtcbiAgICAgIH1cblxuICAgICAgLy8gV2Uga25vdyBuMSBleGlzdHMsIGFuZCBpcyBhIHZhbGlkIG5hbWUuXG4gICAgICBpZiAoIW4yIHx8ICFuMi5sZW5ndGgpIHJldHVybiB0aGlzLmJyYW5jaGVzW24xXTtcblxuICAgICAgcmV0dXJuIChfYnJhbmNoZXMkbiA9IHRoaXMuYnJhbmNoZXNbbjFdKS5jcmVhdGVCcmFuY2guYXBwbHkoX2JyYW5jaGVzJG4sIG4yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBzdGVwIHRocm91Z2ggdGhlIHRyZWUuIElmIGFueSBCcmFuY2ggaXMgZm91bmQgdGhhdCBoYXMgbm9cbiAgICAgKiBsZWF2ZXMsIHJlbW92ZSB0aGF0IGJyYW5jaC5cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSAtIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyB0aGF0IHdlcmUgcmVtb3ZlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndHJpbScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gT2JqZWN0LmtleXModGhpcy5icmFuY2hlcylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIGNvdW50ID0gY291bnQgKyB0aGlzLmJyYW5jaGVzW25hbWVdLnRyaW0oKTtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuYnJhbmNoZXNbbmFtZV0ubGVhdmVzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJyYW5jaGVzW25hbWVdO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgaXRlcmF0ZSBvdmVyIHRoaXMgYnJhbmNoLCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggbGVhZi4gVGhlXG4gICAgICogZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgaW4gdGhlIGZvcm1hdDpcbiAgICAgKlxuICAgICAqIGBmKGxlYWYsIC4uLmFyZ3MpYFxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZiAtIHByZWRpY2F0ZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIGVhY2ggbGVhZlxuICAgICAqIEBwYXJhbSB7Li4uYW55fSBhcmdzIC0gYWRkaXRpb25hbCBhcmd1bWVudHMgdG8gdGhlIHByZWRpY2F0ZSBmdW5jdGlvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmb3JFYWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yRWFjaChmKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gT2JqZWN0LmtleXModGhpcy5icmFuY2hlcylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgX2JyYW5jaGVzJG5hbWU7XG5cbiAgICAgICAgICB2YXIgbmFtZSA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICAgIChfYnJhbmNoZXMkbmFtZSA9IHRoaXMuYnJhbmNoZXNbbmFtZV0pLmZvckVhY2guYXBwbHkoX2JyYW5jaGVzJG5hbWUsIFtmXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gT2JqZWN0LmtleXModGhpcy5sZWF2ZXMpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIF9uYW1lID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICAgICAgZi5hcHBseSh1bmRlZmluZWQsIFt0aGlzLmxlYXZlc1tfbmFtZV1dLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSBhIGJyYW5jaCBieSBpdHMgYWRkcmVzcy4gRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBiLmdldCgnYWxpY2UnLCAnYm9iJywgJ2NhdCcpOyAvLyBHZXQgdGhpcy5hbGljZS5ib2IuY2F0YFxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5TdHJpbmd9IGFsbCAtIHRoZSBhZGRyZXNzIG9mIEJyYW5jaCB0byBnZXQuXG4gICAgICogQHJldHVybnMge0JyYW5jaHxPYmplY3R8bnVsbH0gLSBBIEJyYW5jaCBvciBMZWFmLiBOdWxsIGlmIG5vdCBmb3VuZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRCcmFuY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCcmFuY2goKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFsbCA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFsbFtfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFsbCB8fCBhbGwubGVuZ3RoID09PSAwKSByZXR1cm4gdGhpcztlbHNlIGlmIChhbGwubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJyYW5jaGVzLmhhc093blByb3BlcnR5KGFsbFswXSkpIHJldHVybiB0aGlzLmJyYW5jaGVzW2FsbFswXV07XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaXJzdCA9IHRoaXMuYnJhbmNoZXNbYWxsWzBdXTtcblxuICAgICAgaWYgKGZpcnN0IGluc3RhbmNlb2YgQnJhbmNoKSByZXR1cm4gZmlyc3QuZ2V0QnJhbmNoLmFwcGx5KGZpcnN0LCBfdG9Db25zdW1hYmxlQXJyYXkoYWxsLnNsaWNlKDEpKSk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGNoaWxkIEJyYW5jaCBmcm9tIHRoaXMgYnJhbmNoLiBJZiB3ZSBzcGVjaWZ5IGEgbG9uZ2VyIGFkZHJlc3MsXG4gICAgICogb25seSB0aGUgdGlwIG9mIHRoZSBhZGRyZXNzIHNwZWNpZmllZCB3aWxsIGJlIHJlbW92ZWQuIFRoZSBleGFtcGxlIGJlbG93XG4gICAgICogcmVtb3ZlcyAnY2F0JyBmcm9tICdib2InLCBidXQgZG9lcyBub3QgcmVtb3ZlICdib2InIGZyb20gJ2FsaWNlJy5cbiAgICAgKlxuICAgICAqIGBiLnJlbW92ZSgnYWxpY2UnLCAnYm9iJywgJ2NhdCcpYFxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5TdHJpbmd9IGFsbCAtIHRoZSBhZGRyZXNzIG9mIHRoZSBCcmFuY2ggb3IgTGVhZiB3ZSB3YW50IHRvXG4gICAgICogICAgICAgIHJlbW92ZS4gVGhlIHBhcmVudCBvZiB0aGlzIG9iamVjdCBtdXN0IGJlIGEgQnJhbmNoLlxuICAgICAqIEByZXR1cm5zIHtCcmFuY2h8bnVsbH0gLSBUaGUgQnJhbmNoIHRoYXQgd2FzIHJlbW92ZWQuIE51bGwgaWYgbm90IGZvdW5kLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVCcmFuY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVCcmFuY2goKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdm9pZCAwO1xuXG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFsbCA9IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFsbFtfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWxsLmxlbmd0aCA9PT0gMSkgcGFyZW50ID0gdGhpcztlbHNlIHBhcmVudCA9IHRoaXMuZ2V0QnJhbmNoLmFwcGx5KHRoaXMsIF90b0NvbnN1bWFibGVBcnJheShhbGwuc2xpY2UoMCwgLTEpKSk7XG5cbiAgICAgIGlmICghcGFyZW50KSByZXR1cm4gbnVsbDtcblxuICAgICAgdmFyIG5hbWUgPSBhbGxbYWxsLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIXBhcmVudC5icmFuY2hlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgIHZhciBvYmogPSBwYXJlbnQuYnJhbmNoZXNbbmFtZV07XG5cbiAgICAgIGRlbGV0ZSBwYXJlbnQuYnJhbmNoZXNbbmFtZV07XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm9uIHJlY3Vyc2l2ZSBsZWFmIHJldHJldmlhbC4gUmV0dXJucyBudWxsIGlmIHRoZSBicmFuY2ggaGFzIG5vIGNoaWxkcmVuXG4gICAgICogd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgT1IgaWYgdGhlIG5hbWUgcG9pbnRzIHRvIGFub3RoZXIgYnJhbmNoXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gbmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBsZWFmIHdlIGFyZSBsb29raW5nIGZvcjtcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IC0gbnVsbCBpZiB0aGlzIGRvZXMgbm90IGhhdmUgYSBicmFuY2hcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TGVhZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExlYWYobmFtZSkge1xuICAgICAgaWYgKHRoaXMubGVhdmVzLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm4gdGhpcy5sZWF2ZXNbbmFtZV07XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIExlYWYgaW4gdGhpcyBicmFuY2guXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBvYmplY3Qgd2UgYXJlIGludGVyZXN0ZWQgaW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gT2JqZWN0IHdlIGFyZSBzZXR0aW5nLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRMZWFmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TGVhZihuYW1lLCBvYmopIHtcbiAgICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHRoaXMucmVtb3ZlTGVhZihuYW1lKTtlbHNlIHRoaXMubGVhdmVzW25hbWVdID0gb2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0ga2V5IG5hbWUgb2YgdGhlIGxlYWYgdG8gcmVtb3ZlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUxlYWYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVMZWFmKG5hbWUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxlYXZlc1tuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGFzcycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2xhc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBCcmFuY2hlcyBjbGFzcy4gVGhyb3cgaWYgdiBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB2IC0gdGhlIGNvbnN0cnVjdGFibGUgZnVuY3Rpb25cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgaWYgKHR5cGVvZiB2ICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgdGhpcy5fY2xhc3MgPSB2O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCcmFuY2g7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJyYW5jaDtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9FbmRwb2ludDIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX0VuZHBvaW50MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuZHBvaW50Mik7XG5cbnZhciBfQnJhbmNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9CcmFuY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnJhbmNoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBTdG9yZSBhIGNvbGxlY3Rpb24gb2Ygb2JqZWN0cyB0aGF0IHdpbGwgYmUgc3luY2hyb25pemVkIHdpdGggdGhlIHNlcnZlci5cbiAqIFRoZSBsaWZlY3ljbGUgb2YgYW4gb2JqZWN0IGlzXG4gKiAxLiByZWNlaXZlIGFkZE9iaiBtZXNzYWdlIGZyb20gc2VydmVyXG4gKiAgICAgLSBjcmVhdGUgYG5ldyBjb25zdHJ1Y3RvcihrZXksIHN0YXRlLCB0aGlzKWBcbiAqICAgICAtIGFkZCB0byBvYmplY3RzIC5ieUtleSBhbiAuYnlTS2V5IGJyYW5jaGVzXG4gKiAgICAgLSBlbWl0KCdhZGQnLCBvYmosIGFkZE9iak1lc3NhZ2UpXG4gKiAyLiByZWNlaXZlIG1vZE9iaiBtZXNzYWdlIGZyb20gc2VydmVyICgwIG9yIG1vcmUgdGltZXMpXG4gKiAgIElmIHRoZSBvYmplY3QgaXMgbm90IG1vdmluZyBodW5rc1xuICogICAgIC0gY2FsbCBvYmplY3RzIC51cGRhdGUoc3RhdGUpIG1ldGhvZFxuICogICAgIC0gZW1pdCgnbW9kJywgb2JqLCBtc2cpXG4gKiAgIE9yIGlmIHRoZSBvYmplY3QgaXMgbW92aW5nIHRvIGEgaHVuayB3ZSBhcmUgc3Vic2NyaWJlZCB0b1xuICogICAgIC0gbW92ZSB0aGUgb2JqZWN0IHRvIGEgZGlmZmVyZW50IHN1YnNjcmlwdGlvbiBrZXlcbiAqICAgICAtIGNhbGwgb2JqZWN0cyAudXBkYXRlKHN0YXRlKSBtZXRob2RcbiAqICAgICAtIGVtaXQoJ21vZCcsIG9iaiwgbXNnKVxuICogICBPciBpZiB0aGUgb2JqZWN0IGlzIG1vdmluZyB0byBhIGFyZWEgd2UgYXJlIG5vdCBzdWJzY3JpYmVkIHRvXG4gKiAgICAgLSByZW1vdmUgdGhlIG9iamVjdFxuICogICAgIC0gZW1pdCgncmVtJywgb2JqLCBtc2cpXG4gKiAgICAgLSBvYmoudGVhcmRvd24oKSBtZXRob2RcbiAqIDMuIHJlY2VpdmUgcmVtT2JqIG1lc3NhZ2UgZnJvbSBzZXJ2ZXIgT1IgdW5zdWJzY3JpYmUgZnJvbSBodW5rXG4gKiAgICAtIHJlbW92ZSBvYmplY3RcbiAqICAgIC0gZW1pdCgncmVtJywgb2JqLCBtc2cpIC8vIG1zZyB3aWxsIGJlIG51bGwgaWYgd2UgdW5zdWJzY3JpYmVkXG4gKiAgICAtIG9iai50ZWFyZG93bigpXG4gKlxuICogTk9URTpcbiAqIC0gV2hlbiBhZGRpbmcgYW4gb2JqZWN0IGZpcnN0IHdlIGNyZWF0ZSBpdCwgdGhlbiB3ZSBlbWl0IGl0XG4gKiAtIFdoZW4gcmVtb3ZpbmcgYW4gb2JqZWN0IGZpcnN0IHdlIGVtaXQgaXQsIHRoZW4gd2UgLnRlYXJkb3duKClcbiAqXG4gKiAgQGV2ZW50IGFkZFxuICogIEBldmVudCBtb2RcbiAqICBAZXZlbnQgcmVtXG4gKi9cbnZhciBPYmplY3RzID0gZnVuY3Rpb24gKF9FbmRwb2ludCkge1xuICBfaW5oZXJpdHMoT2JqZWN0cywgX0VuZHBvaW50KTtcblxuICAvKipcbiAgICogQHBhcmFtIHtBcHB9IGFwcCAtIHRoZSBhZXRoZXIgQXBwIHRoaXMgb2JqZWN0IGlzIGJ1aWx0IG9uXG4gICAqL1xuICBmdW5jdGlvbiBPYmplY3RzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPYmplY3RzKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPYmplY3RzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0cykpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuYnlTS2V5ID0gbmV3IF9CcmFuY2gyLmRlZmF1bHQoKTtcbiAgICBfdGhpcy5ieUtleSA9IG5ldyBfQnJhbmNoMi5kZWZhdWx0KCk7XG4gICAgX3RoaXMuYnlJZCA9IHt9O1xuXG4gICAgLy8gcXVldWVkTWVzc2FnZXMgaXMgZm9yIHN0b3JpbmcgbWVzc2FnZXMgdGhhdCB0YXJnZXQgYW4gb2JqZWN0IHRoYXQgd2UgaGF2ZVxuICAgIC8vIG5vdCB5ZXQgcmVjZWl2ZWQuIE1lc3NhZ2VzIHRoYXQgYXJyaXZlIG91dCBvZiBvcmRlciBhZnRlciBhZGRPYmogaGFzIGJlZW5cbiAgICAvLyByZWNlaXZlZCBzaG91bGQgYmUgc3RvcmVkIG9uIHRoZSBvYmplY3QgaXRzZWxmLCBzbyB0aGV5IGNhbiBiZSBnYXJiYWdlXG4gICAgLy8gY29sbGVjdGVkIGNvcnJlY3RseS5cbiAgICAvLyBBcyBvZiBOb3ZlbWJlciA1LCAyMDE3LCB1bm9yZGVyZWQgbW9kIG1lc3NhZ2VzIHRoYXQgYXJyaXZlIGFmdGVyIGFkZE9ialxuICAgIC8vIGFyZSBub3Qgc3VwcG9ydGVkLiBIb3dldmVyLCBzdXBwb3J0IG1heSBiZSBhZGRlZCBpbiB0aGUgZnV0dXJlLlxuICAgIF90aGlzLnF1ZXVlZE1lc3NhZ2VzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgc2V0IG9mIGtleXMgdGhhdCB3ZSBhcmUgc3Vic2NyaWJlZCB0by5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgaXMgdXN1YWxseSBjYWxsZWQgZnJvbSBjbGllbnQgdmlhIHRoZSBzeW5rLnJlc29sdmUoKSBtZXRob2QuXG4gICAqIFdlIHNob3VsZCBiZSBhYmxlIHRvIGNhbGwgdGhpcyBmcm9tIHRoZSBzZXJ2ZXIsIGJ1dCB0aGlzIGJlaGF2aW9yIGlzXG4gICAqIHVudGVzdGVkLiBJIGhhdmUgbm90IHRob3VnaHQgdGhyb3VnaCB0aGUgbG9naWMgb2YgaG93IHRoaXMgY291bGQgYmUgY2FsbGVkXG4gICAqIGZyb20gdGhlIHNlcnZlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZVN1YnNjcmlwdGlvbk1zZyAtIE9iamVjdCBjb250YWluaW5nIHN1YnNjcmlwdGlvblxuICAgKiAgICAgICAgY2hhbmdlLiBUaGUgb2JqZWN0IG11c3QgaGF2ZSB0d28gYXJyYXlzIG9mIHN0cmluZ3M6IC5hZGQgYW5kIC5yZW1vdmVcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoT2JqZWN0cywgW3tcbiAgICBrZXk6ICd1cGRhdGVLZXlzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlS2V5cyh1cGRhdGVTdWJzY3JpcHRpb25Nc2cpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbXNnID0gdXBkYXRlU3Vic2NyaXB0aW9uTXNnO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNnLnJlbW92ZSkgfHwgIUFycmF5LmlzQXJyYXkobXNnLmFkZCkpIGNvbnNvbGUuZXJyb3IoJ09iamVjdHMudXBkYXRlS2V5cyByZWNlaXZlZCBpbnZhbGlkIG1lc3NhZ2U6JywgbXNnKTtcblxuICAgICAgLy8gV2hlbiB3ZSB1bnN1YnNjcmliZSBmcm9tIGEgY2h1bmssIHdlIG5lZWQgdG8gcmVtb3ZlIGFuZCB0ZWFyZG93biBhbGwgdGhlXG4gICAgICAvLyBvYmplY3RzIGluIHRoYXQgY2h1bmsuXG4gICAgICBtc2cucmVtb3ZlLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBlbnR1cmUgY2h1bmtcbiAgICAgICAgX3RoaXMyLmJ5U0tleS5yZW1vdmVCcmFuY2gocCkuZm9yRWFjaChmdW5jdGlvbiAobGVhZikge1xuICAgICAgICAgIHZhciBfYnlLZXk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgZWFjaCBvYmplY3QgZnJvbSBpdHMgY29sbGVjdGlvblxuICAgICAgICAgIHZhciBwYXJ0cyA9IGxlYWYudC5zcGxpdCgnOicpO1xuICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gKF9ieUtleSA9IF90aGlzMi5ieUtleSkuZ2V0QnJhbmNoLmFwcGx5KF9ieUtleSwgX3RvQ29uc3VtYWJsZUFycmF5KHBhcnRzKSk7IC8vIFRoZSBncm91cCBvZiBvYmplY3RzIGluIHRoYXQgdHlwZVxuXG4gICAgICAgICAgLy8gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndCBleGlzdCwgd2UgaGF2ZSBidWdcbiAgICAgICAgICBpZiAoIWNvbGxlY3Rpb24pIGNvbnNvbGUuZXJyb3IoJ1Vuc3Vic2NyaWJlZCBmcm9tIGNodW5rLCBidXQgY29sbGVjdGlvbiBub3QgZm91bmQ6ICcgKyBsZWFmLnQpO1xuXG4gICAgICAgICAgX3RoaXMyLnJlbW92ZU9iamVjdChsZWFmLCBjb2xsZWN0aW9uLCBudWxsLCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgbXNnLmFkZC5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIF90aGlzMi5ieVNLZXkuY3JlYXRlQnJhbmNoKHApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFuIG9iamVjdCBmcm9tIHRoaXMgc3luayBjb2xsZWN0aW9uLiBUaGlzIG1heSByZXR1cm4gbnVsbCBpZiB0aGUgb2JqZWN0XG4gICAgICogd2FzIG5vdCBmb3VuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUgZnVsbCBrZXkgb2YgdGhlIG9iamVjdCB3ZSB3YW50ICd0eXBlOmtleTppZCdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IC0gdGhlIG9iamVjdCBpZiBpdCBleGlzdHMsIG9yIG51bGxcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgdmFyIF9ieUtleTI7XG5cbiAgICAgIHZhciBvYmogPSB0aGlzLmJ5SWRba2V5XTtcblxuICAgICAgaWYgKG9iaikgcmV0dXJuIG9iajtcblxuICAgICAgdmFyIHBhcnRzID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgaWQgPSBwYXJ0cy5wb3AoKTtcbiAgICAgIHZhciBjb2xsZWN0aW9uID0gKF9ieUtleTIgPSB0aGlzLmJ5S2V5KS5nZXRCcmFuY2guYXBwbHkoX2J5S2V5MiwgX3RvQ29uc3VtYWJsZUFycmF5KHBhcnRzKSk7XG5cbiAgICAgIGlmICghY29sbGVjdGlvbikgcmV0dXJuIG51bGw7XG5cbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLmdldExlYWYoaWQpIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3luayBPYmplY3RzIGRvZXMgbm90IGFzc3VtZSB0aGF0IG1lc3NhZ2VzIHdpbGwgYXJyaXZlIGluIHRoZSBjb3JyZWN0XG4gICAgICogb3JkZXIuIFdoZW4gd2UgcmVjaWV2ZSBhIG1lc3NhZ2UsIGl0IGlzIHBvc3NpYmxlIHRoYXQgd2UgaGF2ZSBub3QgeWV0XG4gICAgICogcmVjZWl2ZWQgdGhlIHNzb2NpYXRlZCBhZGRPYmogbWVzc2FnZS4gSXQgaXMgYWxzbyBwb3NzaWJsZSB0aGF0IHdlIGRvXG4gICAgICpcbiAgICAgKiBBcHBlbmQgYSBtZXNzYWdlIHRvIHRoZSBxdWV1ZSBmb3IgYSBnaXZlbiBvYmplY3QuIFdoZW5ldmVyIGFuIG9iamVjdCBpc1xuICAgICAqIGFkZGVkIE9SIGEgbW9kaWZpY2F0aW9uIGlzIGFwcGxpZWQuIFdlIHdpbGwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZVxuICAgICAqIHF1ZXVlZCBtZXNzYWdlcyB0aGF0IHNob3VsZCBiZSByZXBsYXllZC5cbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHByb2JhYmx5IG5ldmVyIGJlIGNhbGxlZCBleGNlcHQgYnkgbWV0aG9kcyBvZiB0aGVcbiAgICAgKiBPYmplY3RzIGNsYXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZyAtIG1vZCBtZXNzYWdlLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBhbHNvIHN1cHBvcnRcbiAgICAgKiAgICAgICAgcmVtIG1lc3NhZ2VzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdxdWV1ZU1lc3NhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWV1ZU1lc3NhZ2UobXNnKSB7XG4gICAgICB2YXIgcXVldWUgPSB2b2lkIDA7XG4gICAgICB2YXIgaWQgPSBtc2cua2V5IHx8IG1zZy5pZDtcblxuICAgICAgaWYgKHRoaXMucXVldWVkTWVzc2FnZXMuaGFzT3duUHJvcGVydHkoaWQpKSBxdWV1ZSA9IHRoaXMucXVldWVkTWVzc2FnZXNbaWRdO2Vsc2Uge1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXVlZE1lc3NhZ2VzW2lkXSA9IHF1ZXVlO1xuICAgICAgfVxuXG4gICAgICBxdWV1ZS5wdXNoKG1zZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYWxsIHBvc3NpYmxlIG1lc3NhZ2VzIGZyb20gdGhlIHF1ZXVlLlxuICAgICAqXG4gICAgICogSWYgYW55IG1lc3NhZ2VzIGFyZSBmb3VuZCB0byBiZSBvYnNvbGV0ZSBiZWZvcmUgcmVhZGluZyBhIGFwcGxpY2FibGVcbiAgICAgKiBtZXNzYWdlLCBkaXNjYXJkIHRob3NlIG1lc3NhZ2VzLlxuICAgICAqXG4gICAgICogT25jZSBhbnkgbWVzc2FnZXMgYXJlIGFwcGxpZWQsIElGIHRoZSBxdWV1ZSBpcyBlbXB0eSBkZWxldGUgaXQncyBsaXN0IGZyb21cbiAgICAgKiB0aGlzLnF1ZXVlZE1lc3NhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhpcyBpcyBhIHN5bmsgb2JqZWN0IHdpdGggdXBkYXRlKHN0YXRlKSBhbmRcbiAgICAgKiAgICAgICAgdGVhcmRvd24oKSBtZXRob2RzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhcHBseVF1ZXVlZE1lc3NhZ2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwbHlRdWV1ZWRNZXNzYWdlcyhvYmopIHtcbiAgICAgIHZhciBpZCA9IG9iai5rZXkgfHwgb2JqLmlkO1xuXG4gICAgICBpZiAoIXRoaXMucXVldWVkTWVzc2FnZXMuaGFzT3duUHJvcGVydHkoaWQpKSByZXR1cm47XG4gICAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlZE1lc3NhZ2VzW2lkXS5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgcmV0dXJuIG0udiA+IG9iai52O1xuICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS52IC0gYi52O1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucXVldWVkTWVzc2FnZXNbaWRdID0gcXVldWU7XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBxdWV1ZS5lbnRyaWVzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIF9zdGVwJHZhbHVlID0gX3NsaWNlZFRvQXJyYXkoX3N0ZXAudmFsdWUsIDIpLFxuICAgICAgICAgICAgICBpID0gX3N0ZXAkdmFsdWVbMF0sXG4gICAgICAgICAgICAgIG1zZyA9IF9zdGVwJHZhbHVlWzFdO1xuXG4gICAgICAgICAgdmFyIHRhcmdldCA9IG9iai52ICsgMTtcblxuICAgICAgICAgIGlmIChtc2cudiA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGFjdHVhbGx5IHByZXR0eSBzbmVha3kuIE5vcm1hbGx5IHdlIGNhbm5vdCBtb2RpZnkgYW4gYXJyYXlcbiAgICAgICAgICAgIC8vIHdoaWxlIGl0ZXJhdGluZyBvdmVyIGl0LiBIb3dldmVyLCBpbiB0aGlzIGNhc2Ugd2Ugb25seSByZW1vdmUgdGhlXG4gICAgICAgICAgICAvLyBGSVJTVCBtYXRjaCwgYW5kIHRoZW4gYnJlYWsgb3V0IG9mIHRoZSBsb29wIC0tIHNvIGl0IHNob3VsZCBiZSBva2F5LlxuICAgICAgICAgICAgaWYgKG1zZy5tZXRob2QgPT09ICdtb2QnKSB0aGlzLm1vZChtc2cpO2Vsc2UgdGhpcy5tb2RPYmoobXNnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1zZy52ID49IHRhcmdldCkge1xuICAgICAgICAgICAgcXVldWUuc3BsaWNlKDAsIGkpOyAvLyBsZWF2ZSBvbmx5IHVuYXBwbGllZCBtZXNzYWdlcy5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RBTkdFUjogZmFpbGVkIHRvIHJlcGxheSBhbGwgbW9kT2JqIG1lc3NhZ2VzOicsIHF1ZXVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLnF1ZXVlZE1lc3NhZ2VzW2lkXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgb2JqZWN0LiBUeXBpY2FsbHkgY2FsbGVkIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB3aGVuIHdlIGFkZCBhbiBvYmplY3QsIHRoZSAuaWQgLnQgYW5kIC52IHByb3BlcnRpZXMgYXJlXG4gICAgICogYXV0b21hdGljYWxseSBzZXQuIFRoZSBPYmplY3RzIGNsYXNzIGRlcGVuZHMgb24gdGhlc2UgYmVpbmcgYXZhaWxhYmxlXG4gICAgICogd2hlbiByZW1vdmluZyB0aGUgb2JqZWN0LCBzbyB0aGV5IHNob3VsZCBub3QgYmUgY2hhbmdlZCBieSBjbGllbnQgY29kZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgLSBjb250YWlucyAudiAuaWQsIC5zdGF0ZSwgLnNLZXkuIFRoZSBwcmVzZW5jZSBvZlxuICAgICAqICAgICAgICAucHNLZXkgaW5kaWNhdGVzIHRoaXMgb2JqZWN0IG1vdmVkIGhlcmUgZnJvbSBhbm90aGVyIGNodW5rLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQobXNnKSB7XG4gICAgICB2YXIgX2J5S2V5MztcblxuICAgICAgaWYgKHR5cGVvZiBtc2cuc0tleSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIG1zZy5pZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWl2ZWQgaW52YWxpZCBhZGQgbWVzc2FnZScsIG1zZyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2h1bmsgPSB0aGlzLmJ5U0tleS5nZXRCcmFuY2gobXNnLnNLZXkpO1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSAoX2J5S2V5MyA9IHRoaXMuYnlLZXkpLmNyZWF0ZUJyYW5jaC5hcHBseShfYnlLZXkzLCBfdG9Db25zdW1hYmxlQXJyYXkobXNnLnQuc3BsaXQoJzonKSkpO1xuXG4gICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgc3Vic2NyaWJlZFxuICAgICAgaWYgKCFjaHVuaykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1JlY2VpdmVkIFwiYWRkXCIgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIsIHdoaWxlIG5vdCAnICsgJ3N1YnNjcmliZWQgdG8gdGhlIG9iamVjdFxcJ3Mgc3Vic2NyaXB0aW9uIGtleScpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIHRoaXMgb2JqZWN0XG4gICAgICB2YXIgb2JqID0gY29sbGVjdGlvbi5nZXRMZWFmKG1zZy5pZCk7XG5cbiAgICAgIGlmIChvYmopIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHNlcnZlciBzZW50IHVzIGFuIGFkZCBtZXNzYWdlLCBidXQgd2UgYWxyZWR5IGhhZCAnICsgKCd0aGUgb2JqZWN0IGxvY2FsbHk6ICcgKyBtc2cuaWQpKTtcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIHdlIHJlbW92ZSBhbmQgdGVhcmRvd24gYyBpbnRlYWQgb2YgdGhyb3dpbmcgYW4gZXJyb3I/P1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RPRE86IHJlbW92ZSBhbmQgdGVhcmRvd24gYycpO1xuICAgICAgfVxuXG4gICAgICBvYmogPSBuZXcgY29sbGVjdGlvbi5jbGFzcyhtc2cuaWQsIG1zZy5zdGF0ZSwgdGhpcywgbXNnLnQpO1xuICAgICAgb2JqLmlkID0gbXNnLmlkO1xuICAgICAgb2JqLnQgPSBtc2cudDtcbiAgICAgIG9iai52ID0gbXNnLnY7XG5cbiAgICAgIGNodW5rLnNldExlYWYobXNnLmlkLCBvYmopO1xuICAgICAgY29sbGVjdGlvbi5zZXRMZWFmKG1zZy5pZCwgb2JqKTtcbiAgICAgIHRoaXMuYnlJZFtvYmouaWRdID0gb2JqO1xuXG4gICAgICB0aGlzLmVtaXQoJ2FkZCcsIG9iaiwgbXNnKTtcbiAgICAgIHRoaXMuYXBwbHlRdWV1ZWRNZXNzYWdlcyhvYmopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbiBvYmplY3QuIFVzdWFsbHkgY2FsbGVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZyAtIG9iaiBjb250YWluaW5nIC5pZCAudCBhbmQgLnNLZXlcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtKG1zZykge1xuICAgICAgdmFyIF9ieUtleTQ7XG5cbiAgICAgIGlmICh0eXBlb2YgbXNnLnNLZXkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtc2cuaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpdmVkIGludmFsaWQgcmVtT2JqIG1lc3NhZ2UnLCBtc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnRzID0gbXNnLnQuc3BsaXQoJzonKTtcbiAgICAgIHZhciBpZCA9IG1zZy5pZDtcbiAgICAgIHZhciBjaHVuayA9IHRoaXMuYnlTS2V5LmdldEJyYW5jaChtc2cuc0tleSk7IC8vIGN1cnJlbnQgY2h1bmtcbiAgICAgIHZhciBjb2xsZWN0aW9uID0gKF9ieUtleTQgPSB0aGlzLmJ5S2V5KS5nZXRCcmFuY2guYXBwbHkoX2J5S2V5NCwgX3RvQ29uc3VtYWJsZUFycmF5KHBhcnRzKSk7XG4gICAgICB2YXIgb2JqID0gY29sbGVjdGlvbi5nZXRMZWFmKGlkKTtcblxuICAgICAgaWYgKCFjaHVuaykgY29uc29sZS5lcnJvcignVHJpZWQgdG8gcmVtb3ZlICcgKyBtc2cuc0tleSArICcsIGJ1dCBjb3VsZCBub3QgZmluZCBvYmplY3RzIGF0ICcgKyBwYXJ0cyk7XG5cbiAgICAgIGlmICghY29sbGVjdGlvbikgY29uc29sZS5lcnJvcignVHJpZWQgdG8gcmVtb3ZlICcgKyBpZCArICcgYnV0IGNvdWxkIG5vdCBmaW5kICcgKyBwYXJ0cyArICcgaW4gLmJ5S2V5Jyk7XG5cbiAgICAgIGlmIChvYmopIHRoaXMucmVtb3ZlT2JqZWN0KG9iaiwgY2h1bmssIGNvbGxlY3Rpb24sIG1zZyk7ZWxzZSBjb25zb2xlLmVycm9yKCdEQU5HRVI6IFRyaWVkIHRvIHJlbW92ZSAnICsgbXNnLmlkICsgJywgYnV0IGNvdWxkIG5vdCBmaW5kIG9iamVjdCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vZGlmeSBhbiBvYmplY3QuIFVzdWFsbHkgY2FsbGVkIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnIGNvbnRhaW5pbmcgLmlkIC5zS2V5IC50IC52IGFuZCAuZGlmZi4gdGhlIHByZXNlbnNlIG9mXG4gICAgICogICAgICAgIC5uc0tleSBpbmRpY2F0ZXMgdGhhdCB0aGUgb2JqZWN0IGlzIG1vdmluZyB0byBhIG5ldyBzdWJzY3JpcHRpb24ga2V5XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ21vZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vZChtc2cpIHtcbiAgICAgIHZhciBfYnlLZXk1O1xuXG4gICAgICBpZiAodHlwZW9mIG1zZy5zS2V5ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgbXNnLmlkICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBpbnZhbGlkIG1vZCBtZXNzYWdlJywgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpZCA9IG1zZy5pZDtcbiAgICAgIHZhciBvYmogPSB0aGlzLmdldChpZCk7XG4gICAgICB2YXIgY2h1bmsgPSB0aGlzLmJ5U0tleS5nZXRCcmFuY2gobXNnLnNLZXkpOyAvLyBjdXJyZW50IGNodW5rXG5cbiAgICAgIC8vIERvIHNvbWUgc2FuaXR5IGNoZWNrcy4uLlxuXG4gICAgICBpZiAoIW9iaikge1xuICAgICAgICBpZiAoY2h1bmspIHRoaXMucXVldWVNZXNzYWdlKG1zZyk7ZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBqdXN0IGEgd2FybmluZywgYmVjYXVzZSBpdCB3aWxsIGp1c3QgaGFwcGVuIG9jY2FzaW9uYWxseS5cbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1dlIHJlY2VpdmVkIGEgbW9kT2JqIHJlcXVlc3QuIFdlIGNvdWxkIG5vdCBmaW5kIHRoZSAnICsgKCdvYmplY3QgbG9jYWxseTogJyArIGlkICsgJy4gQW5kIHRoZSBtZXNzYWdlIHRhcmdldHMgYW4gU0tleSB3ZSAnKSArICdhcmUgbm90IHN1YnNjcmliZWQgdG8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnRzID0gb2JqLnQuc3BsaXQoJzonKTtcbiAgICAgIHZhciBjb2xsZWN0aW9uID0gKF9ieUtleTUgPSB0aGlzLmJ5S2V5KS5jcmVhdGVCcmFuY2guYXBwbHkoX2J5S2V5NSwgX3RvQ29uc3VtYWJsZUFycmF5KHBhcnRzKSk7XG5cbiAgICAgIGlmIChjaHVuay5nZXRMZWFmKG1zZy5pZCkgIT09IG9iaikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCBtb2RPYmouIFRoZSBvYmplY3Qgd2FzIGZvdW5kIG9uIHRoZSAnICsgcGFydHMgKyAnICcgKyAoJ2NvbGxlY3Rpb24sIGJ1dCBub3QgdGhlICcgKyBtc2cuc0tleSArICcgY2h1bmsuJykpO1xuICAgICAgICAvLyBLZWVwIHRyeWluZyB0byBtb3ZlIHRoZSBvYmplY3QuLi5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBtc2cudiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWl2ZWQgbW9kT2JqIG1lc3NhZ2Ugd2l0aCBhIGJhZCB2ZXJzaW9uOiAnICsgbXNnLnYpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlIG1lc3NhZ2UgaXMgYXJyaXZpbmcgYXQgdGhlIHJpZ2h0IHRpbWUuIElmIG91ciBtZXNzYWdlXG4gICAgICAvLyBpcyBvYnNvbGV0ZSwgZGlzY2FyZCBpdC5cbiAgICAgIGlmIChtc2cudiA8PSBvYmoudikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Rpc2NhcmRlZCBvYnNvbGV0ZSBtZXNzYWdlOicsIG1zZyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobXNnLnYgPiBvYmoudiArIDEpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignREFOR0VSOiBPdXQgb2Ygb3JkZXIgbWVzc2FnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYWZ0ZXIgcmVjZWlldmVpbmcgYWRkT2JqJywgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIGFyZSBkZWZpbml0ZWx5IGdvaW5nIHRvIG1vZGlmeSB0aGUgb2JqZWN0LiBXZSBrbm93IHRoYXQgdGhlIG1zZydzXG4gICAgICAvLyB2ZXJzaW9uIGlzIGV4YWN0bHkgb25lIG1vcmUgdGhhbiB0aGUgb2JqZWN0J3MgdmVyc2lvbi5cbiAgICAgIG9iai52Kys7XG5cbiAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIFRoZXJlIGFyZSAzIHBvc3NpYmxpdGllc1xuICAgICAgLy8gLSB3ZSBhcmUgbW92aW5nIHdpdGhpbiBhIGNodW5rLiBFYXN5IC0tIGp1c3QgdXBkYXRlXG4gICAgICAvLyAtIHdlIGFyZSBtb3ZpbmcgdG8gYSBuZXcgY2h1bmsuIFJlbW92ZSB0aGlzIG9uZSBjaHVuaywgYWRkIHRvIGFub3RoZXJcbiAgICAgIC8vIC0gd2UgYXJlIG1vdmluZyB0byBhIGNodW5rLCBhbmQgYXJlIG5vdCBzdWJzY3JpYmVkIHRvIHRoYXQgY2h1bmtcblxuICAgICAgLy8gQXJlIHdlIG1vZGlmeWluZyB3aXRoaW4gYSBjaHVuaz9cbiAgICAgIGlmICghbXNnLm5zS2V5KSB7XG4gICAgICAgIG9iai51cGRhdGUobXNnLmRpZmYpO1xuICAgICAgICB0aGlzLmVtaXQoJ21vZCcsIG9iaiwgbXNnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBvYmplY3QgbXVzdCBiZSBtb3ZlZCBvdXQgb2YgdGhlIGN1cnJlbnQgY2h1bmsuIElmIHdlIGFyZSBzdWJzY3JpYmVkXG4gICAgICAvLyB0byB0aGUgbmV3IGNodW5rLCBtb3ZlIHRoZSBvYmplY3QgdGhlcmUuIElmIHdlIGFyZSBub3Qgc3Vic2NyaWJlZCxcbiAgICAgIC8vIHJlbW92ZSBhbmQgdGVhcmRvd24oKSB0aGUgb2JqZWN0LlxuICAgICAgdmFyIG5ld0NodW5rID0gdGhpcy5ieVNLZXkuZ2V0QnJhbmNoKG1zZy5uc0tleSk7XG5cbiAgICAgIGlmIChuZXdDaHVuaykge1xuICAgICAgICBjaHVuay5yZW1vdmVMZWFmKGlkKTtcbiAgICAgICAgbmV3Q2h1bmsuc2V0TGVhZihpZCwgb2JqKTtcbiAgICAgICAgb2JqLnVwZGF0ZShtc2cuZGlmZik7XG4gICAgICAgIHRoaXMuZW1pdCgnbW9kJywgb2JqLCBtc2cpO1xuICAgICAgfSBlbHNlIHRoaXMucmVtb3ZlT2JqZWN0KG9iaiwgY29sbGVjdGlvbiwgY2h1bmssIG1zZyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgb2JqZWN0IGZyb20gdXAgdG8gdHdvIGJyYW5jaGVzXG4gICAgICogLSBDYXVzZXMgdGVhcmRvd24oKVxuICAgICAqIC0gZW1pdHMgJ3JlbScsIG9iaiwgbXNnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gb2JqZWN0IHRvIHJlbW92ZSB3aXRoIC5pZFxuICAgICAqIEBwYXJhbSB7W0JyYW5jaF19IGJyYW5jaDEgLSBPcHRpb25hbCBmaXJzdCBicmFuY2hcbiAgICAgKiBAcGFyYW0ge1tCcmFuY2hdfSBicmFuY2gyIC0gT3B0aW9uYWwgc2Vjb25kIGJyYW5jaFxuICAgICAqIEBwYXJhbSB7W09iamVjdF19IG1zZyAtIFRoZSBtc2cgdGhhdCB0cmlnZ2VyZWQgdGhlIHJlbW92YWwuIElmIHByb3ZpZGVkXG4gICAgICogICAgICAgIHRoaXMgd2lsbCBlbWl0IGFsb25nIHdpdGggdGhlIG9iamVjdFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVPYmplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVPYmplY3Qob2JqLCBicmFuY2gxLCBicmFuY2gyLCBtc2cpIHtcbiAgICAgIGlmIChicmFuY2gxKSBicmFuY2gxLnJlbW92ZUxlYWYob2JqLmlkKTtcbiAgICAgIGlmIChicmFuY2gyKSBicmFuY2gyLnJlbW92ZUxlYWYob2JqLmlkKTtcblxuICAgICAgZGVsZXRlIHRoaXMuYnlJZFtvYmouaWRdO1xuXG4gICAgICB0aGlzLmVtaXQoJ3JlbScsIG9iaiwgbXNnKTtcblxuICAgICAgb2JqLnRlYXJkb3duKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9iamVjdHM7XG59KF9FbmRwb2ludDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE9iamVjdHM7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TeW5rID0gZXhwb3J0cy5PYmplY3RzID0gZXhwb3J0cy5CcmFuY2ggPSBleHBvcnRzLkVuZHBvaW50ID0gZXhwb3J0cy5Db25uZWN0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX0Nvbm5lY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Nvbm5lY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29ubmVjdGlvbik7XG5cbnZhciBfRW5kcG9pbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX0VuZHBvaW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuZHBvaW50KTtcblxudmFyIF9CcmFuY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX0JyYW5jaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CcmFuY2gpO1xuXG52YXIgX09iamVjdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX09iamVjdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT2JqZWN0cyk7XG5cbnZhciBfU3luayA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfU3luazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TeW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Db25uZWN0aW9uID0gX0Nvbm5lY3Rpb24yLmRlZmF1bHQ7XG5leHBvcnRzLkVuZHBvaW50ID0gX0VuZHBvaW50Mi5kZWZhdWx0O1xuZXhwb3J0cy5CcmFuY2ggPSBfQnJhbmNoMi5kZWZhdWx0O1xuZXhwb3J0cy5PYmplY3RzID0gX09iamVjdHMyLmRlZmF1bHQ7XG5leHBvcnRzLlN5bmsgPSBfU3luazIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfT2JqZWN0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfT2JqZWN0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PYmplY3RzKTtcblxudmFyIF9Db25uZWN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9Db25uZWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nvbm5lY3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFN5bmsgcmVwcmVzZW50cyBhIGNvbm5lY3Rpb24gdG8gdGhlIHN5bmsgc2VydmVyLiBJdHMgcmVzcG9uc2liaWxpdGllczpcbiAqIC0gY3JlYXRlIGEgY29ubmVjdGlvbiB0byB0aGUgc2VydmVyXG4gKiAtIHRyYWNrIGEgc2V0IG9mIHN1YnNjcmlwdGlvbnMga2V5c1xuICogLSBzdG9yZSBvYmplY3RzIHJldHJpZXZlZCBmcm9tIHRoZSBzZXJ2ZXJcbiAqXG4gKiBUaGUgb2JqZWN0cyBzdG9yZWQgaW4gdGhpcy5vYmplY3RzIHdpbGwgc3RheSB1cC10by1kYXRlIHdpdGggdGhlIGNvcGllcyBvblxuICogdGhlIHNlcnZlci5cbiAqL1xudmFyIFN5bmsgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAYXJnIHtzdHJpbmd9IHVybCAtIHRoZSB3ZWJzb2NrZXQgdXJsIHRvIGNvbm5lY3QgdG9cbiAgICovXG4gIGZ1bmN0aW9uIFN5bmsodXJsKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTeW5rKTtcblxuICAgIHRoaXMub2JqZWN0cyA9IG5ldyBfT2JqZWN0czIuZGVmYXVsdCgpO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBfQ29ubmVjdGlvbjIuZGVmYXVsdCh1cmwpO1xuXG4gICAgdGhpcy5vYmplY3RzLnN1YnNjcmliZSh0aGlzLmNvbm5lY3Rpb24uc3RyZWFtKTtcblxuICAgIHRoaXMuYWN0aXZlID0ge307IC8vIGN1cnJlbnRseSBhY3RpdmUgc3Vic2NyaXB0aW9uc1xuICAgIHRoaXMucGVuZGluZ0FkZCA9IHt9O1xuICAgIHRoaXMucGVuZGluZ1JlbW92ZSA9IHt9O1xuXG4gICAgdGhpcy5jb25uZWN0aW9uLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE91ciBjb25uZWN0aW9uIGlzIGNsb3NlZCwgUHJlcGFyZSBmb3IgdGhlIGNvbm5lY3Rpb24gdG8gcmUtb3Blbi4gQ2FjaGVcbiAgICAgIC8vIHRoZSBzdWJzY3JpcHRpb24ga2V5cyB3ZSBhcmUgY3VycmVudGx5IHN1YnNjcmliZWQgdG8sIGFuZCB0ZWFyZG93biBhbGxcbiAgICAgIC8vIGV4aXN0aW5nIG9iamVjdHMuXG4gICAgICB2YXIgY3VycmVudCA9IF90aGlzLmFjdGl2ZTtcblxuICAgICAgX3RoaXMub2JqZWN0cy51cGRhdGVLZXlzKHtcbiAgICAgICAgcmVtb3ZlOiBPYmplY3Qua2V5cyhfdGhpcy5hY3RpdmUpLFxuICAgICAgICBhZGQ6IFtdXG4gICAgICB9KTtcbiAgICAgIF90aGlzLmFjdGl2ZSA9IHt9O1xuXG4gICAgICAvLyBXaGVuIHdlIHJlLW9wZW4sIHdlIHdhbnQgdG8gcmUtc3Vic2NyaWJlIHRvIHRoZSBjb3JyZWN0IGNvbGxlY3Rpb24gb2ZcbiAgICAgIC8vIGtleXMuIFJlc29sdmUgdGhlIC5wZW5kaW5nQWRkIGFuZCAucGVuZGluZ1JlbW92ZSBvYmplY3RzLlxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IE9iamVjdC5rZXlzKF90aGlzLnBlbmRpbmdSZW1vdmUpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KGtleSkpIGRlbGV0ZSBjdXJyZW50W2tleV07XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IE9iamVjdC5rZXlzKF90aGlzLnBlbmRpbmdBZGQpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIF9rZXkgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgICBjdXJyZW50W19rZXldID0gdHJ1ZTtcbiAgICAgICAgfSAvLyBXZSBrbm93IHRoZSBjb2xsZWN0aW9uIG9mIGtleXMgdGhhdCB3ZSB3b3VsZCBsaWtlIHRvIGJlIHN1YnNjcmliZWQgdG8uXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnBlbmRpbmdBZGQgPSBjdXJyZW50O1xuICAgICAgX3RoaXMucGVuZGluZ1JlbW92ZSA9IHt9O1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25uZWN0aW9uLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgc2V0IG9mIGtleXMgdGhhdCB3ZSB3YW50IHRvIHN1YnNjcmliZSB0bywgY2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlXG4gICAqIGJldHdlZW4gdGhlIGN1cnJlbnRseSBhY3RpdmUgc3Vic2NyaXB0aW9uIGFuZCB0aGUgbmV3IGRlc2lyZWQgc3Vic2NyaXB0aW9uLlxuICAgKiBTdG9yZSB0aGUgcmVzdWx0IGluIHRoaXMucGVuZGluZ0FkZCBhbmQgdGhpcy5wZW5kaW5nUmVtb3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIC0gYWxsIHRoZSBrZXlzIHRoYXQgd2Ugd2FudCB0byBzdWJzY3JpYmUgdG8uXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFN5bmssIFt7XG4gICAga2V5OiAnc2V0U3Vic2NyaXB0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U3Vic2NyaXB0aW9uKGtleXMpIHtcbiAgICAgIHRoaXMucGVuZGluZ0FkZCA9IHt9O1xuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZlID0ge307XG5cbiAgICAgIHZhciBuZXdLZXlzID0ge307XG5cbiAgICAgIC8vIGNvbnZlcnQga2V5cyBhcnJheSB0byBvYmplY3RcbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0ga2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBrZXkgPSBfc3RlcDMudmFsdWU7XG4gICAgICAgICAgbmV3S2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgfSAvLyBmb3IgZWFjaCBjdXJyZW50IGtleSwgY2hlY2sgaWYgd2Ugd2FudCB0byB1bnN1YnNjcmliZVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBhY3RpdmVLZXkgPSBfc3RlcDQudmFsdWU7XG5cbiAgICAgICAgICBpZiAoIW5ld0tleXMuaGFzT3duUHJvcGVydHkoYWN0aXZlS2V5KSkge1xuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIGtleSB0aGF0IHdlIGRvIG5vdCB3YW50LlxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZlW2FjdGl2ZUtleV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciBlYWNoIG5ldyBrZXksIGNoZWNrIGlmIHdlIGhhdmUgdG8gYWRkIGl0XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3I0LnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I0KSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I1ID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I1ID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I1ID0ga2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNTsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IChfc3RlcDUgPSBfaXRlcmF0b3I1Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBuZXdLZXkgPSBfc3RlcDUudmFsdWU7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlLmhhc093blByb3BlcnR5KG5ld0tleSkpIHtcbiAgICAgICAgICAgIC8vIGEga2V5IG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdBZGRbbmV3S2V5XSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I1ID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3I1ID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ICYmIF9pdGVyYXRvcjUucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3I1LnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I1KSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ5IHRvIHJlc29sdmUgdGhlIHN1YnNjcmlwdGlvbi4gSWYgc29ja2V0IGlzIG5vdCBvcGVuLCB0aGlzIHdpbGwgaGF2ZSBub1xuICAgICAqIGVmZmVjdC4gTm90ZSB0aGF0IHJlc29sdmUgaXMgYWx3YXlzIGNhbGxlZCB3aGVuIHRoZSBjb25uZWN0aW9uIG9wZW5zIG9yIHJlLVxuICAgICAqIG9wZW5zLlxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2x9IC0gdHJ1ZSBpZiB0aGUgbWVzc2FnZSB3YXMgc2VudCBvciBubyBjaGFuZ2UgaXMgbmVlZGVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3Jlc29sdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlKCkge1xuICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgbWV0aG9kOiAndXBkYXRlU3Vic2NyaXB0aW9uJyxcbiAgICAgICAgYWRkOiBPYmplY3Qua2V5cyh0aGlzLnBlbmRpbmdBZGQpLFxuICAgICAgICByZW1vdmU6IE9iamVjdC5rZXlzKHRoaXMucGVuZGluZ1JlbW92ZSlcbiAgICAgIH07XG5cbiAgICAgIC8vIElmIG1zZy5hZGQgYW5kIG1zZy5yZW1vdmUgYXJlIGVtcHR5LCBvdXIgam9iIGlzIGRvbmUuXG4gICAgICBpZiAobXNnLmFkZC5sZW5ndGggPT09IDAgJiYgbXNnLnJlbW92ZS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuXG4gICAgICAvLyBJZiB0aGUgY29ubmVjdGlvbiBpcyBub3Qgb3BlbiwgZG8gbm90aGluZyAod2FpdCBmb3Igb3BlbiBldmVudClcbiAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24uc3RhdGUgIT09IDEpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIFRoZSBjb25uZWN0aW9uIGlzIGtub3duIHRvIGJlIG9wZW5cblxuICAgICAgdGhpcy5vYmplY3RzLnVwZGF0ZUtleXMobXNnKTtcbiAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kKG1zZyk7XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I2ID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I2ID0gbXNnLmFkZFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiA9IChfc3RlcDYgPSBfaXRlcmF0b3I2Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBrZXkgPSBfc3RlcDYudmFsdWU7XG5cbiAgICAgICAgICB0aGlzLmFjdGl2ZVtrZXldID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yNiA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yNiA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiAmJiBfaXRlcmF0b3I2LnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yNi5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I2O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNyA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yNyA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNyA9IG1zZy5yZW1vdmVbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDc7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSAoX3N0ZXA3ID0gX2l0ZXJhdG9yNy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgX2tleTIgPSBfc3RlcDcudmFsdWU7XG5cbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmUuaGFzT3duUHJvcGVydHkoX2tleTIpKSBkZWxldGUgdGhpcy5hY3RpdmVbX2tleTJdO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I3ID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3I3ID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb243ICYmIF9pdGVyYXRvcjcucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3I3LnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I3KSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGVuZGluZ0FkZCA9IHt9O1xuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZlID0ge307XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTeW5rO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTeW5rO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2NoYXJsZXMvcHJvamVjdHMvbm9kZWpzL3N5bmstanMvZGlzdC9zeW5rLmpzIiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCAnLi9qcy9zdGFydC5qcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUHJldmVudCB1cyBmcm9tIGJlaW5nIGFibGUgdG8gc2Nyb2xsIHBhc3QgdGhlIGVuZCBvZiB0aGUgcGFnZSAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNyb290IHtcXG4gIGNvbG9yOiByZ2IoMjU1LCA1MiwgNTIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubm90ZSB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBmbGV4LWdyb3c7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBMaWJyYXJpZXNcbmltcG9ydCBFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0IEtlZmlyIGZyb20gJ2tlZmlyJztcblxuLy8gTG9jYWxcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanMnO1xuXG4vLyBMaWJzXG53aW5kb3cuS2VmaXIgPSBLZWZpcjtcbndpbmRvdy5FbWl0dGVyID0gRW1pdHRlcjtcblxuLy8gQWV0aGVyIExpYnNcbndpbmRvdy5BcHAgPSBBcHA7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IHdpbmRvdy5hcHAgPSBuZXcgQXBwKCk7XG4gIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgaWYgKCFoYXNoIHx8IGhhc2ggPT09ICcnKSBoYXNoID0gJ21haW4nO1xuXG4gIGFwcC5zeW5rLnNldFN1YnNjcmlwdGlvbihbYHBpYW5vOiR7aGFzaH1gXSk7XG4gIGFwcC5zeW5rLnJlc29sdmUoKTtcbn07XG5cbmNvbnN0IHByZXZlbnRDb250ZXh0TWVudSA9ICgpID0+IHtcbiAgd2luZG93Lm9uY29udGV4dG1lbnUgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zdGFydC5qcyIsImltcG9ydCB7IFN5bmsgfSAgZnJvbSAnc3luay1qcyc7XG5pbXBvcnQgQXBwRW5kcG9pbnQgZnJvbSAnLi9BcHBFbmRwb2ludC5qcyc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL05vdGUuanMnO1xuaW1wb3J0IE1pZGllciBmcm9tICcuL01pZGllci5qcyc7XG5cbi8qKlxuKiBIaWdoIGxldmVsIEFldGhlciBBcHBsaWNhdGlvblxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhbiBBcHBcbiAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgaHR0cHMgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cHMnKTtcbiAgICBjb25zdCB1cmwgPSAgYCR7aHR0cHMgPyAnd3NzJyA6ICd3cyd9Oi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vd3NgO1xuXG4gICAgdGhpcy5zeW5rID0gbmV3IFN5bmsodXJsKTtcbiAgICB0aGlzLmVuZHBvaW50ID0gbmV3IEFwcEVuZHBvaW50KHRoaXMpO1xuICAgIHRoaXMubWlkaWVyID0gbmV3IE1pZGllcigpO1xuXG4gICAgdGhpcy5taWRpZXIub24oJ25vdGVPbicsIChuLCB2LCBjKSA9PiB7XG4gICAgICB0aGlzLnN5bmsuY29ubmVjdGlvbi5zZW5kKHtcbiAgICAgICAgbWV0aG9kOiAnbm90ZScsXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICBuLCB2LCBjLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1pZGllci5vbignbm90ZU9mZicsIChuLCB2LCBjKSA9PiB7XG4gICAgICB0aGlzLnN5bmsuY29ubmVjdGlvbi5zZW5kKHtcbiAgICAgICAgbWV0aG9kOiAnbm90ZScsXG4gICAgICAgIG9uOiBmYWxzZSxcbiAgICAgICAgbiwgdiwgYyxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5taWRpZXIub24oJ3BlZGFsJywgKGRvd24sIGMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdwZWRhbCBkb3duPycsIGRvd24sIGMpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsIG1lc3NhZ2VzIGZyb20gdGhlIHNlcnZlciB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZW5kcG9pbnQuIFRoYW5rcyB0b1xuICAgIC8vIHRoZSBjb25uZWN0aW9uIG9iamVjdCwgZXZlbiBpZiB3ZSBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3QsIGluY29taW5nXG4gICAgLy8gbWVzc2FnZXMgd2lsbCBzdGlsbCBiZSBwYXNzZWQgdGhyb3VnaCB0byB0aGlzLmVuZHBvaW50LlxuICAgIHRoaXMuZW5kcG9pbnQuc3Vic2NyaWJlKHRoaXMuc3luay5jb25uZWN0aW9uLnN0cmVhbSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgY2xhc3MgZm9yIENoYXJhY3RlcnNcbiAgICB0aGlzLnN5bmsub2JqZWN0cy5ieUtleS5jcmVhdGVCcmFuY2goJ24nKS5jbGFzcyA9IE5vdGU7XG5cbiAgICB0aGlzLnN5bmsub2JqZWN0cy5vbignYWRkJywgKG9iaiwgbXNnKSA9PiB7fSk7XG4gICAgdGhpcy5zeW5rLm9iamVjdHMub24oJ21vZCcsIChvYmosIG1zZykgPT4ge30pO1xuICAgIHRoaXMuc3luay5vYmplY3RzLm9uKCdyZW0nLCAob2JqLCBtc2cpID0+IHt9KTtcblxuICAgIC8vIFdlIGNvdWxkIHJlcGxhY2UgJ2Nsb3NlJyB3aXRoIHJlY29ubmVjdCdcbiAgICB0aGlzLnN5bmsuY29ubmVjdGlvbi5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdGlvbiBjbG9zZSBieVNLZXkuYnJhbmNoZXM6JywgT2JqZWN0LmtleXModGhpcy5zeW5rLm9iamVjdHMuYnlTS2V5LmJyYW5jaGVzKSk7XG4gICAgfSk7XG4gICAgdGhpcy5zeW5rLmNvbm5lY3Rpb24ub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdGlvbiBvcGVuIGJ5U0tleS5icmFuY2hlczogJywgT2JqZWN0LmtleXModGhpcy5zeW5rLm9iamVjdHMuYnlTS2V5LmJyYW5jaGVzKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9BcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtCb29sZWFufSBleGlzdHMgT25seSBjaGVjayBpZiB0aGVyZSBhcmUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0FycmF5fEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCwgZXhpc3RzKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBhdmFpbGFibGUgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoZXhpc3RzKSByZXR1cm4gISFhdmFpbGFibGU7XG4gIGlmICghYXZhaWxhYmxlKSByZXR1cm4gW107XG4gIGlmIChhdmFpbGFibGUuZm4pIHJldHVybiBbYXZhaWxhYmxlLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGF2YWlsYWJsZS5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBhdmFpbGFibGVbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFN5bWJvbH0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IHRoaXMpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHRoaXMuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIHRoaXMuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XS5mbikgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgdGhpcy5fZXZlbnRzW2V2dF0gPSBbdGhpcy5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzLCB0cnVlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCB0aGlzLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghdGhpcy5fZXZlbnRzW2V2dF0uZm4pIHRoaXMuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIHRoaXMuX2V2ZW50c1tldnRdID0gW3RoaXMuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm5cbiAgICAgICYmICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSlcbiAgICAgICYmICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgICBlbHNlIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmblxuICAgICAgICB8fCAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpXG4gICAgICAgIHx8IChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSB7XG4gICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgICAgZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFwcGx5IGFueW1vcmUuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9jaGFybGVzL3Byb2plY3RzL25vZGVqcy9zeW5rLWpzL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiEgS2VmaXIuanMgdjMuNy4yXG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL3Jwb21pbm92L2tlZmlyXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuXHQoZmFjdG9yeSgoZ2xvYmFsLktlZmlyID0gZ2xvYmFsLktlZmlyIHx8IHt9KSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVPYmoocHJvdG8pIHtcbiAgdmFyIEYgPSBmdW5jdGlvbiAoKSB7fTtcbiAgRi5wcm90b3R5cGUgPSBwcm90bztcbiAgcmV0dXJuIG5ldyBGKCk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQgLyosIG1peGluMSwgbWl4aW4yLi4uKi8pIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICBpID0gdm9pZCAwLFxuICAgICAgcHJvcCA9IHZvaWQgMDtcbiAgZm9yIChpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChwcm9wIGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgdGFyZ2V0W3Byb3BdID0gYXJndW1lbnRzW2ldW3Byb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBpbmhlcml0KENoaWxkLCBQYXJlbnQgLyosIG1peGluMSwgbWl4aW4yLi4uKi8pIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICBpID0gdm9pZCAwO1xuICBDaGlsZC5wcm90b3R5cGUgPSBjcmVhdGVPYmooUGFyZW50LnByb3RvdHlwZSk7XG4gIENoaWxkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENoaWxkO1xuICBmb3IgKGkgPSAyOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBleHRlbmQoQ2hpbGQucHJvdG90eXBlLCBhcmd1bWVudHNbaV0pO1xuICB9XG4gIHJldHVybiBDaGlsZDtcbn1cblxudmFyIE5PVEhJTkcgPSBbJzxub3RoaW5nPiddO1xudmFyIEVORCA9ICdlbmQnO1xudmFyIFZBTFVFID0gJ3ZhbHVlJztcbnZhciBFUlJPUiA9ICdlcnJvcic7XG52YXIgQU5ZID0gJ2FueSc7XG5cbmZ1bmN0aW9uIGNvbmNhdChhLCBiKSB7XG4gIHZhciByZXN1bHQgPSB2b2lkIDAsXG4gICAgICBsZW5ndGggPSB2b2lkIDAsXG4gICAgICBpID0gdm9pZCAwLFxuICAgICAgaiA9IHZvaWQgMDtcbiAgaWYgKGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGI7XG4gIH1cbiAgaWYgKGIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgaiA9IDA7XG4gIHJlc3VsdCA9IG5ldyBBcnJheShhLmxlbmd0aCArIGIubGVuZ3RoKTtcbiAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKywgaisrKSB7XG4gICAgcmVzdWx0W2pdID0gYVtpXTtcbiAgfVxuICBsZW5ndGggPSBiLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrLCBqKyspIHtcbiAgICByZXN1bHRbal0gPSBiW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbmQoYXJyLCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBmaW5kQnlQcmVkKGFyciwgcHJlZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkKGFycltpXSkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGNsb25lQXJyYXkoaW5wdXQpIHtcbiAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpLFxuICAgICAgaSA9IHZvaWQgMDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2ldID0gaW5wdXRbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGlucHV0LCBpbmRleCkge1xuICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gdm9pZCAwLFxuICAgICAgaSA9IHZvaWQgMCxcbiAgICAgIGogPSB2b2lkIDA7XG4gIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIHJlc3VsdFtqXSA9IGlucHV0W2ldO1xuICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcChpbnB1dCwgZm4pIHtcbiAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpLFxuICAgICAgaSA9IHZvaWQgMDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2ldID0gZm4oaW5wdXRbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goYXJyLCBmbikge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGZuKGFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbEFycmF5KGFyciwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGgsXG4gICAgICBpID0gdm9pZCAwO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIHZhbHVlKSB7XG4gIHJldHVybiBmaW5kKGFyciwgdmFsdWUpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gc2xpZGUoY3VyLCBuZXh0LCBtYXgpIHtcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKG1heCwgY3VyLmxlbmd0aCArIDEpLFxuICAgICAgb2Zmc2V0ID0gY3VyLmxlbmd0aCAtIGxlbmd0aCArIDEsXG4gICAgICByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKSxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIGZvciAoaSA9IG9mZnNldDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2kgLSBvZmZzZXRdID0gY3VyW2ldO1xuICB9XG4gIHJlc3VsdFtsZW5ndGggLSAxXSA9IG5leHQ7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyKHR5cGUsIGZuLCBldmVudCkge1xuICBpZiAodHlwZSA9PT0gQU5ZKSB7XG4gICAgZm4oZXZlbnQpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IGV2ZW50LnR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gVkFMVUUgfHwgdHlwZSA9PT0gRVJST1IpIHtcbiAgICAgIGZuKGV2ZW50LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgdGhpcy5faXRlbXMgPSBbXTtcbiAgdGhpcy5fc3BpZXMgPSBbXTtcbiAgdGhpcy5faW5Mb29wID0gMDtcbiAgdGhpcy5fcmVtb3ZlZEl0ZW1zID0gbnVsbDtcbn1cblxuZXh0ZW5kKERpc3BhdGNoZXIucHJvdG90eXBlLCB7XG4gIGFkZDogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgdGhpcy5faXRlbXMgPSBjb25jYXQodGhpcy5faXRlbXMsIFt7IHR5cGU6IHR5cGUsIGZuOiBmbiB9XSk7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiAodHlwZSwgZm4pIHtcbiAgICB2YXIgaW5kZXggPSBmaW5kQnlQcmVkKHRoaXMuX2l0ZW1zLCBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHgudHlwZSA9PT0gdHlwZSAmJiB4LmZuID09PSBmbjtcbiAgICB9KTtcblxuICAgIC8vIGlmIHdlJ3JlIGN1cnJlbnRseSBpbiBhIG5vdGlmaWNhdGlvbiBsb29wLFxuICAgIC8vIHJlbWVtYmVyIHRoaXMgc3Vic2NyaWJlciB3YXMgcmVtb3ZlZFxuICAgIGlmICh0aGlzLl9pbkxvb3AgIT09IDAgJiYgaW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAodGhpcy5fcmVtb3ZlZEl0ZW1zID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZWRJdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVtb3ZlZEl0ZW1zLnB1c2godGhpcy5faXRlbXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pdGVtcyA9IHJlbW92ZSh0aGlzLl9pdGVtcywgaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gIH0sXG4gIGFkZFNweTogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5fc3BpZXMgPSBjb25jYXQodGhpcy5fc3BpZXMsIFtmbl0pO1xuICAgIHJldHVybiB0aGlzLl9zcGllcy5sZW5ndGg7XG4gIH0sXG5cblxuICAvLyBCZWNhdXNlIHNwaWVzIGFyZSBvbmx5IGV2ZXIgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm0gbG9nZ2luZyBhc1xuICAvLyB0aGVpciBvbmx5IHNpZGUgZWZmZWN0LCB3ZSBkb24ndCBuZWVkIHRoZSBzYW1lIGNvbXBsaWNhdGVkXG4gIC8vIHJlbW92YWwgbG9naWMgbGlrZSBpbiByZW1vdmUoKVxuICByZW1vdmVTcHk6IGZ1bmN0aW9uIChmbikge1xuICAgIHRoaXMuX3NwaWVzID0gcmVtb3ZlKHRoaXMuX3NwaWVzLCB0aGlzLl9zcGllcy5pbmRleE9mKGZuKSk7XG4gICAgcmV0dXJuIHRoaXMuX3NwaWVzLmxlbmd0aDtcbiAgfSxcbiAgZGlzcGF0Y2g6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuX2luTG9vcCsrO1xuICAgIGZvciAodmFyIGkgPSAwLCBzcGllcyA9IHRoaXMuX3NwaWVzOyB0aGlzLl9zcGllcyAhPT0gbnVsbCAmJiBpIDwgc3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNwaWVzW2ldKGV2ZW50KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDAsIGl0ZW1zID0gdGhpcy5faXRlbXM7IF9pIDwgaXRlbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAvLyBjbGVhbnVwIHdhcyBjYWxsZWRcbiAgICAgIGlmICh0aGlzLl9pdGVtcyA9PT0gbnVsbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcyBzdWJzY3JpYmVyIHdhcyByZW1vdmVkXG4gICAgICBpZiAodGhpcy5fcmVtb3ZlZEl0ZW1zICE9PSBudWxsICYmIGNvbnRhaW5zKHRoaXMuX3JlbW92ZWRJdGVtcywgaXRlbXNbX2ldKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2FsbFN1YnNjcmliZXIoaXRlbXNbX2ldLnR5cGUsIGl0ZW1zW19pXS5mbiwgZXZlbnQpO1xuICAgIH1cbiAgICB0aGlzLl9pbkxvb3AtLTtcbiAgICBpZiAodGhpcy5faW5Mb29wID09PSAwKSB7XG4gICAgICB0aGlzLl9yZW1vdmVkSXRlbXMgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgY2xlYW51cDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2l0ZW1zID0gbnVsbDtcbiAgICB0aGlzLl9zcGllcyA9IG51bGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBPYnNlcnZhYmxlKCkge1xuICB0aGlzLl9kaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKTtcbiAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gIHRoaXMuX2FsaXZlID0gdHJ1ZTtcbiAgdGhpcy5fYWN0aXZhdGluZyA9IGZhbHNlO1xuICB0aGlzLl9sb2dIYW5kbGVycyA9IG51bGw7XG4gIHRoaXMuX3NweUhhbmRsZXJzID0gbnVsbDtcbn1cblxuZXh0ZW5kKE9ic2VydmFibGUucHJvdG90eXBlLCB7XG4gIF9uYW1lOiAnb2JzZXJ2YWJsZScsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge30sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge30sXG4gIF9zZXRBY3RpdmU6IGZ1bmN0aW9uIChhY3RpdmUpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGlvbigpO1xuICAgICAgICB0aGlzLl9hY3RpdmF0aW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbkRlYWN0aXZhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fc2V0QWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLl9kaXNwYXRjaGVyLmNsZWFudXAoKTtcbiAgICB0aGlzLl9kaXNwYXRjaGVyID0gbnVsbDtcbiAgICB0aGlzLl9sb2dIYW5kbGVycyA9IG51bGw7XG4gIH0sXG4gIF9lbWl0OiBmdW5jdGlvbiAodHlwZSwgeCkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBWQUxVRTpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgIHJldHVybiB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgICBjYXNlIEVORDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH0sXG4gIF9lbWl0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IFZBTFVFLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgfVxuICB9LFxuICBfZW1pdEVycm9yOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuZGlzcGF0Y2goeyB0eXBlOiBFUlJPUiwgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH1cbiAgfSxcbiAgX2VtaXRFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX2FsaXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogRU5EIH0pO1xuICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICB9XG4gIH0sXG4gIF9vbjogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaGVyLmFkZCh0eXBlLCBmbik7XG4gICAgICB0aGlzLl9zZXRBY3RpdmUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxTdWJzY3JpYmVyKHR5cGUsIGZuLCB7IHR5cGU6IEVORCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIF9vZmY6IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdmFyIGNvdW50ID0gdGhpcy5fZGlzcGF0Y2hlci5yZW1vdmUodHlwZSwgZm4pO1xuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBvblZhbHVlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb24oVkFMVUUsIGZuKTtcbiAgfSxcbiAgb25FcnJvcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uKEVSUk9SLCBmbik7XG4gIH0sXG4gIG9uRW5kOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb24oRU5ELCBmbik7XG4gIH0sXG4gIG9uQW55OiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb24oQU5ZLCBmbik7XG4gIH0sXG4gIG9mZlZhbHVlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb2ZmKFZBTFVFLCBmbik7XG4gIH0sXG4gIG9mZkVycm9yOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb2ZmKEVSUk9SLCBmbik7XG4gIH0sXG4gIG9mZkVuZDogZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZihFTkQsIGZuKTtcbiAgfSxcbiAgb2ZmQW55OiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb2ZmKEFOWSwgZm4pO1xuICB9LFxuICBvYnNlcnZlOiBmdW5jdGlvbiAob2JzZXJ2ZXJPck9uVmFsdWUsIG9uRXJyb3IsIG9uRW5kKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgY2xvc2VkID0gZmFsc2U7XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSAhb2JzZXJ2ZXJPck9uVmFsdWUgfHwgdHlwZW9mIG9ic2VydmVyT3JPblZhbHVlID09PSAnZnVuY3Rpb24nID8geyB2YWx1ZTogb2JzZXJ2ZXJPck9uVmFsdWUsIGVycm9yOiBvbkVycm9yLCBlbmQ6IG9uRW5kIH0gOiBvYnNlcnZlck9yT25WYWx1ZTtcblxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gVkFMVUUgJiYgb2JzZXJ2ZXIudmFsdWUpIHtcbiAgICAgICAgb2JzZXJ2ZXIudmFsdWUoZXZlbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBFUlJPUiAmJiBvYnNlcnZlci5lcnJvcikge1xuICAgICAgICBvYnNlcnZlci5lcnJvcihldmVudC52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IEVORCAmJiBvYnNlcnZlci5lbmQpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZW5kKGV2ZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vbkFueShoYW5kbGVyKTtcblxuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWNsb3NlZCkge1xuICAgICAgICAgIF90aGlzLm9mZkFueShoYW5kbGVyKTtcbiAgICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQgY2xvc2VkKCkge1xuICAgICAgICByZXR1cm4gY2xvc2VkO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cblxuICAvLyBBIGFuZCBCIG11c3QgYmUgc3ViY2xhc3NlcyBvZiBTdHJlYW0gYW5kIFByb3BlcnR5IChvcmRlciBkb2Vzbid0IG1hdHRlcilcbiAgX29mU2FtZVR5cGU6IGZ1bmN0aW9uIChBLCBCKSB7XG4gICAgcmV0dXJuIEEucHJvdG90eXBlLmdldFR5cGUoKSA9PT0gdGhpcy5nZXRUeXBlKCkgPyBBIDogQjtcbiAgfSxcbiAgc2V0TmFtZTogZnVuY3Rpb24gKHNvdXJjZU9icyAvKiBvcHRpb25hbCAqLywgc2VsZk5hbWUpIHtcbiAgICB0aGlzLl9uYW1lID0gc2VsZk5hbWUgPyBzb3VyY2VPYnMuX25hbWUgKyAnLicgKyBzZWxmTmFtZSA6IHNvdXJjZU9icztcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgbG9nOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMudG9TdHJpbmcoKTtcblxuICAgIHZhciBpc0N1cnJlbnQgPSB2b2lkIDA7XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciB0eXBlID0gJzwnICsgZXZlbnQudHlwZSArIChpc0N1cnJlbnQgPyAnOmN1cnJlbnQnIDogJycpICsgJz4nO1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEVORCkge1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB0eXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHR5cGUsIGV2ZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICBpZiAoIXRoaXMuX2xvZ0hhbmRsZXJzKSB7XG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXJzID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLl9sb2dIYW5kbGVycy5wdXNoKHsgbmFtZTogbmFtZSwgaGFuZGxlcjogaGFuZGxlciB9KTtcbiAgICB9XG5cbiAgICBpc0N1cnJlbnQgPSB0cnVlO1xuICAgIHRoaXMub25BbnkoaGFuZGxlcik7XG4gICAgaXNDdXJyZW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgb2ZmTG9nOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMudG9TdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLl9sb2dIYW5kbGVycykge1xuICAgICAgdmFyIGhhbmRsZXJJbmRleCA9IGZpbmRCeVByZWQodGhpcy5fbG9nSGFuZGxlcnMsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai5uYW1lID09PSBuYW1lO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFuZGxlckluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLm9mZkFueSh0aGlzLl9sb2dIYW5kbGVyc1toYW5kbGVySW5kZXhdLmhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9sb2dIYW5kbGVycy5zcGxpY2UoaGFuZGxlckluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgc3B5OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMudG9TdHJpbmcoKTtcblxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgdHlwZSA9ICc8JyArIGV2ZW50LnR5cGUgKyAnPic7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgdHlwZSwgZXZlbnQudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICBpZiAoIXRoaXMuX3NweUhhbmRsZXJzKSB7XG4gICAgICAgIHRoaXMuX3NweUhhbmRsZXJzID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLl9zcHlIYW5kbGVycy5wdXNoKHsgbmFtZTogbmFtZSwgaGFuZGxlcjogaGFuZGxlciB9KTtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuYWRkU3B5KGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgb2ZmU3B5OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMudG9TdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLl9zcHlIYW5kbGVycykge1xuICAgICAgdmFyIGhhbmRsZXJJbmRleCA9IGZpbmRCeVByZWQodGhpcy5fc3B5SGFuZGxlcnMsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai5uYW1lID09PSBuYW1lO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFuZGxlckluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLnJlbW92ZVNweSh0aGlzLl9zcHlIYW5kbGVyc1toYW5kbGVySW5kZXhdLmhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9zcHlIYW5kbGVycy5zcGxpY2UoaGFuZGxlckluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0pO1xuXG4vLyBleHRlbmQoKSBjYW4ndCBoYW5kbGUgYHRvU3RyaW5nYCBpbiBJRThcbk9ic2VydmFibGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ1snICsgdGhpcy5fbmFtZSArICddJztcbn07XG5cbmZ1bmN0aW9uIFN0cmVhbSgpIHtcbiAgT2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xufVxuXG5pbmhlcml0KFN0cmVhbSwgT2JzZXJ2YWJsZSwge1xuICBfbmFtZTogJ3N0cmVhbScsXG5cbiAgZ2V0VHlwZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnc3RyZWFtJztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIFByb3BlcnR5KCkge1xuICBPYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gIHRoaXMuX2N1cnJlbnRFdmVudCA9IG51bGw7XG59XG5cbmluaGVyaXQoUHJvcGVydHksIE9ic2VydmFibGUsIHtcbiAgX25hbWU6ICdwcm9wZXJ0eScsXG5cbiAgX2VtaXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50RXZlbnQgPSB7IHR5cGU6IFZBTFVFLCB2YWx1ZTogdmFsdWUgfTtcbiAgICAgIGlmICghdGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogVkFMVUUsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9lbWl0RXJyb3I6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fY3VycmVudEV2ZW50ID0geyB0eXBlOiBFUlJPUiwgdmFsdWU6IHZhbHVlIH07XG4gICAgICBpZiAoIXRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IEVSUk9SLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfZW1pdEVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fYWxpdmUgPSBmYWxzZTtcbiAgICAgIGlmICghdGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogRU5EIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICB9XG4gIH0sXG4gIF9vbjogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaGVyLmFkZCh0eXBlLCBmbik7XG4gICAgICB0aGlzLl9zZXRBY3RpdmUodHJ1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jdXJyZW50RXZlbnQgIT09IG51bGwpIHtcbiAgICAgIGNhbGxTdWJzY3JpYmVyKHR5cGUsIGZuLCB0aGlzLl9jdXJyZW50RXZlbnQpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2FsaXZlKSB7XG4gICAgICBjYWxsU3Vic2NyaWJlcih0eXBlLCBmbiwgeyB0eXBlOiBFTkQgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBnZXRUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdwcm9wZXJ0eSc7XG4gIH1cbn0pO1xuXG52YXIgbmV2ZXJTID0gbmV3IFN0cmVhbSgpO1xubmV2ZXJTLl9lbWl0RW5kKCk7XG5uZXZlclMuX25hbWUgPSAnbmV2ZXInO1xuXG5mdW5jdGlvbiBuZXZlcigpIHtcbiAgcmV0dXJuIG5ldmVyUztcbn1cblxuZnVuY3Rpb24gdGltZUJhc2VkKG1peGluKSB7XG4gIGZ1bmN0aW9uIEFub255bW91c1N0cmVhbSh3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIFN0cmVhbS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3dhaXQgPSB3YWl0O1xuICAgIHRoaXMuX2ludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuXyRvblRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX29uVGljaygpO1xuICAgIH07XG4gICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIGluaGVyaXQoQW5vbnltb3VzU3RyZWFtLCBTdHJlYW0sIHtcbiAgICBfaW5pdDogZnVuY3Rpb24gKCkge30sXG4gICAgX2ZyZWU6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF9vblRpY2s6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2ludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLl8kb25UaWNrLCB0aGlzLl93YWl0KTtcbiAgICB9LFxuICAgIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX2ludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElkKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLl8kb25UaWNrID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZyZWUoKTtcbiAgICB9XG4gIH0sIG1peGluKTtcblxuICByZXR1cm4gQW5vbnltb3VzU3RyZWFtO1xufVxuXG52YXIgUyA9IHRpbWVCYXNlZCh7XG4gIF9uYW1lOiAnbGF0ZXInLFxuXG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB4ID0gX3JlZi54O1xuXG4gICAgdGhpcy5feCA9IHg7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5feCA9IG51bGw7XG4gIH0sXG4gIF9vblRpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5feCk7XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbGF0ZXIod2FpdCwgeCkge1xuICByZXR1cm4gbmV3IFMod2FpdCwgeyB4OiB4IH0pO1xufVxuXG52YXIgUyQxID0gdGltZUJhc2VkKHtcbiAgX25hbWU6ICdpbnRlcnZhbCcsXG5cbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHggPSBfcmVmLng7XG5cbiAgICB0aGlzLl94ID0geDtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl94ID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl94KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGludGVydmFsKHdhaXQsIHgpIHtcbiAgcmV0dXJuIG5ldyBTJDEod2FpdCwgeyB4OiB4IH0pO1xufVxuXG52YXIgUyQyID0gdGltZUJhc2VkKHtcbiAgX25hbWU6ICdzZXF1ZW50aWFsbHknLFxuXG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB4cyA9IF9yZWYueHM7XG5cbiAgICB0aGlzLl94cyA9IGNsb25lQXJyYXkoeHMpO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3hzID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl94cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl94c1swXSk7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl94cy5zaGlmdCgpKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzZXF1ZW50aWFsbHkod2FpdCwgeHMpIHtcbiAgcmV0dXJuIHhzLmxlbmd0aCA9PT0gMCA/IG5ldmVyKCkgOiBuZXcgUyQyKHdhaXQsIHsgeHM6IHhzIH0pO1xufVxuXG52YXIgUyQzID0gdGltZUJhc2VkKHtcbiAgX25hbWU6ICdmcm9tUG9sbCcsXG5cbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfb25UaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdGhpcy5fZW1pdFZhbHVlKGZuKCkpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJvbVBvbGwod2FpdCwgZm4pIHtcbiAgcmV0dXJuIG5ldyBTJDMod2FpdCwgeyBmbjogZm4gfSk7XG59XG5cbmZ1bmN0aW9uIGVtaXR0ZXIob2JzKSB7XG4gIGZ1bmN0aW9uIHZhbHVlKHgpIHtcbiAgICBvYnMuX2VtaXRWYWx1ZSh4KTtcbiAgICByZXR1cm4gb2JzLl9hY3RpdmU7XG4gIH1cblxuICBmdW5jdGlvbiBlcnJvcih4KSB7XG4gICAgb2JzLl9lbWl0RXJyb3IoeCk7XG4gICAgcmV0dXJuIG9icy5fYWN0aXZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5kKCkge1xuICAgIG9icy5fZW1pdEVuZCgpO1xuICAgIHJldHVybiBvYnMuX2FjdGl2ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50KGUpIHtcbiAgICBvYnMuX2VtaXQoZS50eXBlLCBlLnZhbHVlKTtcbiAgICByZXR1cm4gb2JzLl9hY3RpdmU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBlcnJvcjogZXJyb3IsXG4gICAgZW5kOiBlbmQsXG4gICAgZXZlbnQ6IGV2ZW50LFxuXG4gICAgLy8gbGVnYWN5XG4gICAgZW1pdDogdmFsdWUsXG4gICAgZW1pdEV2ZW50OiBldmVudFxuICB9O1xufVxuXG52YXIgUyQ0ID0gdGltZUJhc2VkKHtcbiAgX25hbWU6ICd3aXRoSW50ZXJ2YWwnLFxuXG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBlbWl0dGVyKHRoaXMpO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgICB0aGlzLl9lbWl0dGVyID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24gKCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIGZuKHRoaXMuX2VtaXR0ZXIpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gd2l0aEludGVydmFsKHdhaXQsIGZuKSB7XG4gIHJldHVybiBuZXcgUyQ0KHdhaXQsIHsgZm46IGZuIH0pO1xufVxuXG5mdW5jdGlvbiBTJDUoZm4pIHtcbiAgU3RyZWFtLmNhbGwodGhpcyk7XG4gIHRoaXMuX2ZuID0gZm47XG4gIHRoaXMuX3Vuc3Vic2NyaWJlID0gbnVsbDtcbn1cblxuaW5oZXJpdChTJDUsIFN0cmVhbSwge1xuICBfbmFtZTogJ3N0cmVhbScsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IGZuKGVtaXR0ZXIodGhpcykpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdHlwZW9mIHVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nID8gdW5zdWJzY3JpYmUgOiBudWxsO1xuXG4gICAgLy8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS9ycG9taW5vdi9rZWZpci9pc3N1ZXMvMzVcbiAgICBpZiAoIXRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fY2FsbFVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9LFxuICBfY2FsbFVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3Vuc3Vic2NyaWJlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fY2FsbFVuc3Vic2NyaWJlKCk7XG4gIH0sXG4gIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyZWFtKGZuKSB7XG4gIHJldHVybiBuZXcgUyQ1KGZuKTtcbn1cblxuZnVuY3Rpb24gZnJvbUNhbGxiYWNrKGNhbGxiYWNrQ29uc3VtZXIpIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gIHJldHVybiBzdHJlYW0oZnVuY3Rpb24gKGVtaXR0ZXIpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGJhY2tDb25zdW1lcihmdW5jdGlvbiAoeCkge1xuICAgICAgICBlbWl0dGVyLmVtaXQoeCk7XG4gICAgICAgIGVtaXR0ZXIuZW5kKCk7XG4gICAgICB9KTtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfVxuICB9KS5zZXROYW1lKCdmcm9tQ2FsbGJhY2snKTtcbn1cblxuZnVuY3Rpb24gZnJvbU5vZGVDYWxsYmFjayhjYWxsYmFja0NvbnN1bWVyKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcblxuICByZXR1cm4gc3RyZWFtKGZ1bmN0aW9uIChlbWl0dGVyKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxiYWNrQ29uc3VtZXIoZnVuY3Rpb24gKGVycm9yLCB4KSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGVtaXR0ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVtaXR0ZXIuZW1pdCh4KTtcbiAgICAgICAgfVxuICAgICAgICBlbWl0dGVyLmVuZCgpO1xuICAgICAgfSk7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSkuc2V0TmFtZSgnZnJvbU5vZGVDYWxsYmFjaycpO1xufVxuXG5mdW5jdGlvbiBzcHJlYWQoZm4sIGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0pO1xuICAgICAgfTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0sIGFbMV0pO1xuICAgICAgfTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgfTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhKTtcbiAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHkoZm4sIGMsIGEpIHtcbiAgdmFyIGFMZW5ndGggPSBhID8gYS5sZW5ndGggOiAwO1xuICBpZiAoYyA9PSBudWxsKSB7XG4gICAgc3dpdGNoIChhTGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gZm4oYVswXSk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBmbihhWzBdLCBhWzFdKTtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gZm4oYVswXSwgYVsxXSwgYVsyXSwgYVszXSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYUxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gZm4uY2FsbChjKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmbi5hcHBseShjLCBhKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbVN1YlVuc3ViKHN1YiwgdW5zdWIsIHRyYW5zZm9ybWVyIC8qIEZ1bmN0aW9uIHwgZmFsc2V5ICovKSB7XG4gIHJldHVybiBzdHJlYW0oZnVuY3Rpb24gKGVtaXR0ZXIpIHtcbiAgICB2YXIgaGFuZGxlciA9IHRyYW5zZm9ybWVyID8gZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KGFwcGx5KHRyYW5zZm9ybWVyLCB0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9IDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCh4KTtcbiAgICB9O1xuXG4gICAgc3ViKGhhbmRsZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5zdWIoaGFuZGxlcik7XG4gICAgfTtcbiAgfSkuc2V0TmFtZSgnZnJvbVN1YlVuc3ViJyk7XG59XG5cbnZhciBwYWlycyA9IFtbJ2FkZEV2ZW50TGlzdGVuZXInLCAncmVtb3ZlRXZlbnRMaXN0ZW5lciddLCBbJ2FkZExpc3RlbmVyJywgJ3JlbW92ZUxpc3RlbmVyJ10sIFsnb24nLCAnb2ZmJ11dO1xuXG5mdW5jdGlvbiBmcm9tRXZlbnRzKHRhcmdldCwgZXZlbnROYW1lLCB0cmFuc2Zvcm1lcikge1xuICB2YXIgc3ViID0gdm9pZCAwLFxuICAgICAgdW5zdWIgPSB2b2lkIDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0W3BhaXJzW2ldWzBdXSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdGFyZ2V0W3BhaXJzW2ldWzFdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc3ViID0gcGFpcnNbaV1bMF07XG4gICAgICB1bnN1YiA9IHBhaXJzW2ldWzFdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1YiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidGFyZ2V0IGRvbid0IHN1cHBvcnQgYW55IG9mIFwiICsgJ2FkZEV2ZW50TGlzdGVuZXIvcmVtb3ZlRXZlbnRMaXN0ZW5lciwgYWRkTGlzdGVuZXIvcmVtb3ZlTGlzdGVuZXIsIG9uL29mZiBtZXRob2QgcGFpcicpO1xuICB9XG5cbiAgcmV0dXJuIGZyb21TdWJVbnN1YihmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIHJldHVybiB0YXJnZXRbc3ViXShldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9LCBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIHJldHVybiB0YXJnZXRbdW5zdWJdKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH0sIHRyYW5zZm9ybWVyKS5zZXROYW1lKCdmcm9tRXZlbnRzJyk7XG59XG5cbi8vIEhBQ0s6XG4vLyAgIFdlIGRvbid0IGNhbGwgcGFyZW50IENsYXNzIGNvbnN0cnVjdG9yLCBidXQgaW5zdGVhZCBwdXR0aW5nIGFsbCBuZWNlc3Nhcnlcbi8vICAgcHJvcGVydGllcyBpbnRvIHByb3RvdHlwZSB0byBzaW11bGF0ZSBlbmRlZCBQcm9wZXJ0eVxuLy8gICAoc2VlIFByb3BwZXJ0eSBhbmQgT2JzZXJ2YWJsZSBjbGFzc2VzKS5cblxuZnVuY3Rpb24gUCh2YWx1ZSkge1xuICB0aGlzLl9jdXJyZW50RXZlbnQgPSB7IHR5cGU6ICd2YWx1ZScsIHZhbHVlOiB2YWx1ZSwgY3VycmVudDogdHJ1ZSB9O1xufVxuXG5pbmhlcml0KFAsIFByb3BlcnR5LCB7XG4gIF9uYW1lOiAnY29uc3RhbnQnLFxuICBfYWN0aXZlOiBmYWxzZSxcbiAgX2FjdGl2YXRpbmc6IGZhbHNlLFxuICBfYWxpdmU6IGZhbHNlLFxuICBfZGlzcGF0Y2hlcjogbnVsbCxcbiAgX2xvZ0hhbmRsZXJzOiBudWxsXG59KTtcblxuZnVuY3Rpb24gY29uc3RhbnQoeCkge1xuICByZXR1cm4gbmV3IFAoeCk7XG59XG5cbi8vIEhBQ0s6XG4vLyAgIFdlIGRvbid0IGNhbGwgcGFyZW50IENsYXNzIGNvbnN0cnVjdG9yLCBidXQgaW5zdGVhZCBwdXR0aW5nIGFsbCBuZWNlc3Nhcnlcbi8vICAgcHJvcGVydGllcyBpbnRvIHByb3RvdHlwZSB0byBzaW11bGF0ZSBlbmRlZCBQcm9wZXJ0eVxuLy8gICAoc2VlIFByb3BwZXJ0eSBhbmQgT2JzZXJ2YWJsZSBjbGFzc2VzKS5cblxuZnVuY3Rpb24gUCQxKHZhbHVlKSB7XG4gIHRoaXMuX2N1cnJlbnRFdmVudCA9IHsgdHlwZTogJ2Vycm9yJywgdmFsdWU6IHZhbHVlLCBjdXJyZW50OiB0cnVlIH07XG59XG5cbmluaGVyaXQoUCQxLCBQcm9wZXJ0eSwge1xuICBfbmFtZTogJ2NvbnN0YW50RXJyb3InLFxuICBfYWN0aXZlOiBmYWxzZSxcbiAgX2FjdGl2YXRpbmc6IGZhbHNlLFxuICBfYWxpdmU6IGZhbHNlLFxuICBfZGlzcGF0Y2hlcjogbnVsbCxcbiAgX2xvZ0hhbmRsZXJzOiBudWxsXG59KTtcblxuZnVuY3Rpb24gY29uc3RhbnRFcnJvcih4KSB7XG4gIHJldHVybiBuZXcgUCQxKHgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb25zdHJ1Y3RvcihCYXNlQ2xhc3MsIG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEFub255bW91c09ic2VydmFibGUoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIEJhc2VDbGFzcy5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLl9uYW1lID0gc291cmNlLl9uYW1lICsgJy4nICsgbmFtZTtcbiAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgIHRoaXMuXyRoYW5kbGVBbnkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlQW55KGV2ZW50KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDbGFzc01ldGhvZHMoQmFzZUNsYXNzKSB7XG4gIHJldHVybiB7XG4gICAgX2luaXQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF9mcmVlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSxcbiAgICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgfSxcbiAgICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfSxcbiAgICBfaGFuZGxlQW55OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlIFZBTFVFOlxuICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVWYWx1ZShldmVudC52YWx1ZSk7XG4gICAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGV2ZW50LnZhbHVlKTtcbiAgICAgICAgY2FzZSBFTkQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVuZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fc291cmNlLm9uQW55KHRoaXMuXyRoYW5kbGVBbnkpO1xuICAgIH0sXG4gICAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9zb3VyY2Uub2ZmQW55KHRoaXMuXyRoYW5kbGVBbnkpO1xuICAgIH0sXG4gICAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICBCYXNlQ2xhc3MucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgICAgIHRoaXMuXyRoYW5kbGVBbnkgPSBudWxsO1xuICAgICAgdGhpcy5fZnJlZSgpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyZWFtKG5hbWUsIG1peGluKSB7XG4gIHZhciBTID0gY3JlYXRlQ29uc3RydWN0b3IoU3RyZWFtLCBuYW1lKTtcbiAgaW5oZXJpdChTLCBTdHJlYW0sIGNyZWF0ZUNsYXNzTWV0aG9kcyhTdHJlYW0pLCBtaXhpbik7XG4gIHJldHVybiBTO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eShuYW1lLCBtaXhpbikge1xuICB2YXIgUCA9IGNyZWF0ZUNvbnN0cnVjdG9yKFByb3BlcnR5LCBuYW1lKTtcbiAgaW5oZXJpdChQLCBQcm9wZXJ0eSwgY3JlYXRlQ2xhc3NNZXRob2RzKFByb3BlcnR5KSwgbWl4aW4pO1xuICByZXR1cm4gUDtcbn1cblxudmFyIFAkMiA9IGNyZWF0ZVByb3BlcnR5KCd0b1Byb3BlcnR5Jywge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZ2V0SW5pdGlhbEN1cnJlbnQgPSBmbjtcbiAgfSxcbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9nZXRJbml0aWFsQ3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgdmFyIGdldEluaXRpYWwgPSB0aGlzLl9nZXRJbml0aWFsQ3VycmVudDtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShnZXRJbml0aWFsKCkpO1xuICAgIH1cbiAgICB0aGlzLl9zb3VyY2Uub25BbnkodGhpcy5fJGhhbmRsZUFueSk7IC8vIGNvcGllZCBmcm9tIHBhdHRlcm5zL29uZS1zb3VyY2VcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRvUHJvcGVydHkob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuICBpZiAoZm4gIT09IG51bGwgJiYgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3Ugc2hvdWxkIGNhbGwgdG9Qcm9wZXJ0eSgpIHdpdGggYSBmdW5jdGlvbiBvciBubyBhcmd1bWVudHMuJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBQJDIob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIFMkNiA9IGNyZWF0ZVN0cmVhbSgnY2hhbmdlcycsIHtcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICghdGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICghdGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKHgpO1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZXMob2JzKSB7XG4gIHJldHVybiBuZXcgUyQ2KG9icyk7XG59XG5cbmZ1bmN0aW9uIGZyb21Qcm9taXNlKHByb21pc2UpIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gIHZhciByZXN1bHQgPSBzdHJlYW0oZnVuY3Rpb24gKGVtaXR0ZXIpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdmFyIG9uVmFsdWUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBlbWl0dGVyLmVtaXQoeCk7XG4gICAgICAgIGVtaXR0ZXIuZW5kKCk7XG4gICAgICB9O1xuICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBlbWl0dGVyLmVycm9yKHgpO1xuICAgICAgICBlbWl0dGVyLmVuZCgpO1xuICAgICAgfTtcbiAgICAgIHZhciBfcHJvbWlzZSA9IHByb21pc2UudGhlbihvblZhbHVlLCBvbkVycm9yKTtcblxuICAgICAgLy8gcHJldmVudCBsaWJyYXJpZXMgbGlrZSAnUScgb3IgJ3doZW4nIGZyb20gc3dhbGxvd2luZyBleGNlcHRpb25zXG4gICAgICBpZiAoX3Byb21pc2UgJiYgdHlwZW9mIF9wcm9taXNlLmRvbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX3Byb21pc2UuZG9uZSgpO1xuICAgICAgfVxuXG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRvUHJvcGVydHkocmVzdWx0LCBudWxsKS5zZXROYW1lKCdmcm9tUHJvbWlzZScpO1xufVxuXG5mdW5jdGlvbiBnZXRHbG9kYWxQcm9taXNlKCkge1xuICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gUHJvbWlzZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpc24ndCBkZWZhdWx0IFByb21pc2UsIHVzZSBzaGltIG9yIHBhcmFtZXRlclwiKTtcbiAgfVxufVxuXG52YXIgdG9Qcm9taXNlID0gZnVuY3Rpb24gKG9icykge1xuICB2YXIgUHJvbWlzZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZ2V0R2xvZGFsUHJvbWlzZSgpO1xuXG4gIHZhciBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBvYnMub25BbnkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EICYmIGxhc3QgIT09IG51bGwpIHtcbiAgICAgICAgKGxhc3QudHlwZSA9PT0gVkFMVUUgPyByZXNvbHZlIDogcmVqZWN0KShsYXN0LnZhbHVlKTtcbiAgICAgICAgbGFzdCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0ID0gZXZlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIHBvbnlmaWxsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsO1xuZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIF9TeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIF9TeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoX1N5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdF9TeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxufSk7XG5cbnZhciBpbmRleCQxID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5cblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHBvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTtcbn1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGNvbW1vbmpzR2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gY29tbW9uanNHbG9iYWw7XG59IGVsc2Uge1xuICByb290ID0gbW9kdWxlO1xufVxuXG52YXIgcmVzdWx0ID0gKDAsIF9wb255ZmlsbDJbJ2RlZmF1bHQnXSkocm9vdCk7XG5leHBvcnRzWydkZWZhdWx0J10gPSByZXN1bHQ7XG59KTtcblxudmFyIGluZGV4ID0gaW5kZXgkMTtcblxuLy8gdGhpcyBmaWxlIGNvbnRhaW5zIHNvbWUgaG90IEpTIG1vZHVsZXMgc3lzdGVtcyBzdHVmZlxuXG52YXIgJCRvYnNlcnZhYmxlID0gaW5kZXguZGVmYXVsdCA/IGluZGV4LmRlZmF1bHQgOiBpbmRleDtcblxuZnVuY3Rpb24gZnJvbUVTT2JzZXJ2YWJsZShfb2JzZXJ2YWJsZSkge1xuICB2YXIgb2JzZXJ2YWJsZSA9IF9vYnNlcnZhYmxlWyQkb2JzZXJ2YWJsZV0gPyBfb2JzZXJ2YWJsZVskJG9ic2VydmFibGVdKCkgOiBfb2JzZXJ2YWJsZTtcbiAgcmV0dXJuIHN0cmVhbShmdW5jdGlvbiAoZW1pdHRlcikge1xuICAgIHZhciB1bnN1YiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZW1pdHRlci5lcnJvcihlcnJvcik7XG4gICAgICAgIGVtaXR0ZXIuZW5kKCk7XG4gICAgICB9LFxuICAgICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGVtaXR0ZXIuZW1pdCh2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZW1pdHRlci5lbmQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bnN1Yi51bnN1YnNjcmliZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdW5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bnN1YjtcbiAgICB9XG4gIH0pLnNldE5hbWUoJ2Zyb21FU09ic2VydmFibGUnKTtcbn1cblxuZnVuY3Rpb24gRVNPYnNlcnZhYmxlKG9ic2VydmFibGUpIHtcbiAgdGhpcy5fb2JzZXJ2YWJsZSA9IG9ic2VydmFibGUudGFrZUVycm9ycygxKTtcbn1cblxuZXh0ZW5kKEVTT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiAob2JzZXJ2ZXJPck9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSB0eXBlb2Ygb2JzZXJ2ZXJPck9uTmV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHsgbmV4dDogb2JzZXJ2ZXJPck9uTmV4dCwgZXJyb3I6IG9uRXJyb3IsIGNvbXBsZXRlOiBvbkNvbXBsZXRlIH0gOiBvYnNlcnZlck9yT25OZXh0O1xuXG4gICAgdmFyIGZuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSAmJiBvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZXZlbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBFUlJPUiAmJiBvYnNlcnZlci5lcnJvcikge1xuICAgICAgICBvYnNlcnZlci5lcnJvcihldmVudC52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IEVORCAmJiBvYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZShldmVudC52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX29ic2VydmFibGUub25BbnkoZm4pO1xuICAgIHZhciBjbG9zZWQgPSBmYWxzZTtcblxuICAgIHZhciBzdWJzY3JpcHRpb24gPSB7XG4gICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBfdGhpcy5fb2JzZXJ2YWJsZS5vZmZBbnkoZm4pO1xuICAgICAgfSxcbiAgICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgIHJldHVybiBjbG9zZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG59KTtcblxuLy8gTmVlZCB0byBhc3NpZ24gZGlyZWN0bHkgYi9jIFN5bWJvbHMgYXJlbid0IGVudW1lcmFibGUuXG5FU09ic2VydmFibGUucHJvdG90eXBlWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gdG9FU09ic2VydmFibGUoKSB7XG4gIHJldHVybiBuZXcgRVNPYnNlcnZhYmxlKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0KHNvdXJjZSwga2V5cywgdmFsdWVzKSB7XG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgdmFsdWVzLnB1c2goc291cmNlW3Byb3BdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdEVycm9yc0NvbWJpbmF0b3IoZXJyb3JzKSB7XG4gIHZhciBsYXRlc3RFcnJvciA9IHZvaWQgMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZXJyb3JzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChsYXRlc3RFcnJvciA9PT0gdW5kZWZpbmVkIHx8IGxhdGVzdEVycm9yLmluZGV4IDwgZXJyb3JzW2ldLmluZGV4KSB7XG4gICAgICAgIGxhdGVzdEVycm9yID0gZXJyb3JzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbGF0ZXN0RXJyb3IuZXJyb3I7XG59XG5cbmZ1bmN0aW9uIENvbWJpbmUoYWN0aXZlLCBwYXNzaXZlLCBjb21iaW5hdG9yKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgU3RyZWFtLmNhbGwodGhpcyk7XG4gIHRoaXMuX2FjdGl2ZUNvdW50ID0gYWN0aXZlLmxlbmd0aDtcbiAgdGhpcy5fc291cmNlcyA9IGNvbmNhdChhY3RpdmUsIHBhc3NpdmUpO1xuICB0aGlzLl9jb21iaW5hdG9yID0gY29tYmluYXRvcjtcbiAgdGhpcy5fYWxpdmVDb3VudCA9IDA7XG4gIHRoaXMuX2xhdGVzdFZhbHVlcyA9IG5ldyBBcnJheSh0aGlzLl9zb3VyY2VzLmxlbmd0aCk7XG4gIHRoaXMuX2xhdGVzdEVycm9ycyA9IG5ldyBBcnJheSh0aGlzLl9zb3VyY2VzLmxlbmd0aCk7XG4gIGZpbGxBcnJheSh0aGlzLl9sYXRlc3RWYWx1ZXMsIE5PVEhJTkcpO1xuICB0aGlzLl9lbWl0QWZ0ZXJBY3RpdmF0aW9uID0gZmFsc2U7XG4gIHRoaXMuX2VuZEFmdGVyQWN0aXZhdGlvbiA9IGZhbHNlO1xuICB0aGlzLl9sYXRlc3RFcnJvckluZGV4ID0gMDtcblxuICB0aGlzLl8kaGFuZGxlcnMgPSBbXTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoaSkge1xuICAgIF90aGlzLl8kaGFuZGxlcnMucHVzaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlQW55KGksIGV2ZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICBfbG9vcChpKTtcbiAgfVxufVxuXG5pbmhlcml0KENvbWJpbmUsIFN0cmVhbSwge1xuICBfbmFtZTogJ2NvbWJpbmUnLFxuXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9hbGl2ZUNvdW50ID0gdGhpcy5fYWN0aXZlQ291bnQ7XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHN1c2NyaWJlIHRvIF9wYXNzaXZlXyBzb3VyY2VzIGJlZm9yZSBfYWN0aXZlX1xuICAgIC8vIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Jwb21pbm92L2tlZmlyL2lzc3Vlcy85OClcbiAgICBmb3IgKHZhciBpID0gdGhpcy5fYWN0aXZlQ291bnQ7IGkgPCB0aGlzLl9zb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9uQW55KHRoaXMuXyRoYW5kbGVyc1tpXSk7XG4gICAgfVxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLl9hY3RpdmVDb3VudDsgX2krKykge1xuICAgICAgdGhpcy5fc291cmNlc1tfaV0ub25BbnkodGhpcy5fJGhhbmRsZXJzW19pXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VtaXRBZnRlckFjdGl2YXRpb24pIHtcbiAgICAgIHRoaXMuX2VtaXRBZnRlckFjdGl2YXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VtaXRJZkZ1bGwoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuZEFmdGVyQWN0aXZhdGlvbikge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuX3NvdXJjZXMubGVuZ3RoLFxuICAgICAgICBpID0gdm9pZCAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fc291cmNlc1tpXS5vZmZBbnkodGhpcy5fJGhhbmRsZXJzW2ldKTtcbiAgICB9XG4gIH0sXG4gIF9lbWl0SWZGdWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhc0FsbFZhbHVlcyA9IHRydWU7XG4gICAgdmFyIGhhc0Vycm9ycyA9IGZhbHNlO1xuICAgIHZhciBsZW5ndGggPSB0aGlzLl9sYXRlc3RWYWx1ZXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXNDb3B5ID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgdmFyIGVycm9yc0NvcHkgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc0NvcHlbaV0gPSB0aGlzLl9sYXRlc3RWYWx1ZXNbaV07XG4gICAgICBlcnJvcnNDb3B5W2ldID0gdGhpcy5fbGF0ZXN0RXJyb3JzW2ldO1xuXG4gICAgICBpZiAodmFsdWVzQ29weVtpXSA9PT0gTk9USElORykge1xuICAgICAgICBoYXNBbGxWYWx1ZXMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yc0NvcHlbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNBbGxWYWx1ZXMpIHtcbiAgICAgIHZhciBjb21iaW5hdG9yID0gdGhpcy5fY29tYmluYXRvcjtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShjb21iaW5hdG9yKHZhbHVlc0NvcHkpKTtcbiAgICB9XG4gICAgaWYgKGhhc0Vycm9ycykge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKGRlZmF1bHRFcnJvcnNDb21iaW5hdG9yKGVycm9yc0NvcHkpKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVBbnk6IGZ1bmN0aW9uIChpLCBldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSB8fCBldmVudC50eXBlID09PSBFUlJPUikge1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFZBTFVFKSB7XG4gICAgICAgIHRoaXMuX2xhdGVzdFZhbHVlc1tpXSA9IGV2ZW50LnZhbHVlO1xuICAgICAgICB0aGlzLl9sYXRlc3RFcnJvcnNbaV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRVJST1IpIHtcbiAgICAgICAgdGhpcy5fbGF0ZXN0VmFsdWVzW2ldID0gTk9USElORztcbiAgICAgICAgdGhpcy5fbGF0ZXN0RXJyb3JzW2ldID0ge1xuICAgICAgICAgIGluZGV4OiB0aGlzLl9sYXRlc3RFcnJvckluZGV4KyssXG4gICAgICAgICAgZXJyb3I6IGV2ZW50LnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDwgdGhpcy5fYWN0aXZlQ291bnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgICAgICB0aGlzLl9lbWl0QWZ0ZXJBY3RpdmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lbWl0SWZGdWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRU5EXG5cbiAgICAgIGlmIChpIDwgdGhpcy5fYWN0aXZlQ291bnQpIHtcbiAgICAgICAgdGhpcy5fYWxpdmVDb3VudC0tO1xuICAgICAgICBpZiAodGhpcy5fYWxpdmVDb3VudCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9lbmRBZnRlckFjdGl2YXRpb24gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICBTdHJlYW0ucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZXMgPSBudWxsO1xuICAgIHRoaXMuX2xhdGVzdFZhbHVlcyA9IG51bGw7XG4gICAgdGhpcy5fbGF0ZXN0RXJyb3JzID0gbnVsbDtcbiAgICB0aGlzLl9jb21iaW5hdG9yID0gbnVsbDtcbiAgICB0aGlzLl8kaGFuZGxlcnMgPSBudWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gY29tYmluZUFzQXJyYXkoYWN0aXZlKSB7XG4gIHZhciBwYXNzaXZlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcbiAgdmFyIGNvbWJpbmF0b3IgPSBhcmd1bWVudHNbMl07XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhc3NpdmUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb21iaW5lIGNhbiBvbmx5IGNvbWJpbmUgYWN0aXZlIGFuZCBwYXNzaXZlIGNvbGxlY3Rpb25zIG9mIHRoZSBzYW1lIHR5cGUuJyk7XG4gIH1cblxuICBjb21iaW5hdG9yID0gY29tYmluYXRvciA/IHNwcmVhZChjb21iaW5hdG9yLCBhY3RpdmUubGVuZ3RoICsgcGFzc2l2ZS5sZW5ndGgpIDogZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbiAgcmV0dXJuIGFjdGl2ZS5sZW5ndGggPT09IDAgPyBuZXZlcigpIDogbmV3IENvbWJpbmUoYWN0aXZlLCBwYXNzaXZlLCBjb21iaW5hdG9yKTtcbn1cblxuZnVuY3Rpb24gY29tYmluZUFzT2JqZWN0KGFjdGl2ZSkge1xuICB2YXIgcGFzc2l2ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBjb21iaW5hdG9yID0gYXJndW1lbnRzWzJdO1xuXG4gIGlmICh0eXBlb2YgcGFzc2l2ZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShwYXNzaXZlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29tYmluZSBjYW4gb25seSBjb21iaW5lIGFjdGl2ZSBhbmQgcGFzc2l2ZSBjb2xsZWN0aW9ucyBvZiB0aGUgc2FtZSB0eXBlLicpO1xuICB9XG5cbiAgdmFyIGtleXMgPSBbXSxcbiAgICAgIGFjdGl2ZU9ic2VydmFibGVzID0gW10sXG4gICAgICBwYXNzaXZlT2JzZXJ2YWJsZXMgPSBbXTtcblxuICBjb2xsZWN0KGFjdGl2ZSwga2V5cywgYWN0aXZlT2JzZXJ2YWJsZXMpO1xuICBjb2xsZWN0KHBhc3NpdmUsIGtleXMsIHBhc3NpdmVPYnNlcnZhYmxlcyk7XG5cbiAgdmFyIG9iamVjdGlmeSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICB2YXIgZXZlbnQgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gdmFsdWVzLmxlbmd0aCAtIDE7IDAgPD0gaTsgaS0tKSB7XG4gICAgICBldmVudFtrZXlzW2ldXSA9IHZhbHVlc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbWJpbmF0b3IgPyBjb21iaW5hdG9yKGV2ZW50KSA6IGV2ZW50O1xuICB9O1xuXG4gIHJldHVybiBhY3RpdmVPYnNlcnZhYmxlcy5sZW5ndGggPT09IDAgPyBuZXZlcigpIDogbmV3IENvbWJpbmUoYWN0aXZlT2JzZXJ2YWJsZXMsIHBhc3NpdmVPYnNlcnZhYmxlcywgb2JqZWN0aWZ5KTtcbn1cblxuZnVuY3Rpb24gY29tYmluZShhY3RpdmUsIHBhc3NpdmUsIGNvbWJpbmF0b3IpIHtcbiAgaWYgKHR5cGVvZiBwYXNzaXZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29tYmluYXRvciA9IHBhc3NpdmU7XG4gICAgcGFzc2l2ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFjdGl2ZSkgPyBjb21iaW5lQXNBcnJheShhY3RpdmUsIHBhc3NpdmUsIGNvbWJpbmF0b3IpIDogY29tYmluZUFzT2JqZWN0KGFjdGl2ZSwgcGFzc2l2ZSwgY29tYmluYXRvcik7XG59XG5cbnZhciBPYnNlcnZhYmxlJDIgPSB7XG4gIGVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldmVyKCk7XG4gIH0sXG5cblxuICAvLyBNb25vaWQgYmFzZWQgb24gbWVyZ2UoKSBzZWVtcyBtb3JlIHVzZWZ1bCB0aGFuIG9uZSBiYXNlZCBvbiBjb25jYXQoKS5cbiAgY29uY2F0OiBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLm1lcmdlKGIpO1xuICB9LFxuICBvZjogZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gY29uc3RhbnQoeCk7XG4gIH0sXG4gIG1hcDogZnVuY3Rpb24gKGZuLCBvYnMpIHtcbiAgICByZXR1cm4gb2JzLm1hcChmbik7XG4gIH0sXG4gIGJpbWFwOiBmdW5jdGlvbiAoZm5FcnIsIGZuVmFsLCBvYnMpIHtcbiAgICByZXR1cm4gb2JzLm1hcEVycm9ycyhmbkVycikubWFwKGZuVmFsKTtcbiAgfSxcblxuXG4gIC8vIFRoaXMgYXAgc3RyaWN0bHkgc3BlYWtpbmcgaW5jb21wYXRpYmxlIHdpdGggY2hhaW4uIElmIHdlIGRlcml2ZSBhcCBmcm9tIGNoYWluIHdlIGdldFxuICAvLyBkaWZmZXJlbnQgKG5vdCB2ZXJ5IHVzZWZ1bCkgYmVoYXZpb3IuIEJ1dCBzcGVjIHJlcXVpcmVzIHRoYXQgaWYgbWV0aG9kIGNhbiBiZSBkZXJpdmVkXG4gIC8vIGl0IG11c3QgaGF2ZSB0aGUgc2FtZSBiZWhhdmlvciBhcyBoYW5kLXdyaXR0ZW4gbWV0aG9kLiBXZSBpbnRlbnRpb25hbGx5IHZpb2xhdGUgdGhlIHNwZWNcbiAgLy8gaW4gaG9wZSB0aGF0IGl0IHdvbid0IGNhdXNlIG1hbnkgdHJvdWJsZXMgaW4gcHJhY3RpY2UuIEFuZCBpbiByZXR1cm4gd2UgaGF2ZSBtb3JlIHVzZWZ1bCB0eXBlLlxuICBhcDogZnVuY3Rpb24gKG9ic0ZuLCBvYnNWYWwpIHtcbiAgICByZXR1cm4gY29tYmluZShbb2JzRm4sIG9ic1ZhbF0sIGZ1bmN0aW9uIChmbiwgdmFsKSB7XG4gICAgICByZXR1cm4gZm4odmFsKTtcbiAgICB9KTtcbiAgfSxcbiAgY2hhaW46IGZ1bmN0aW9uIChmbiwgb2JzKSB7XG4gICAgcmV0dXJuIG9icy5mbGF0TWFwKGZuKTtcbiAgfVxufTtcblxuXG5cbnZhciBzdGF0aWNMYW5kID0gT2JqZWN0LmZyZWV6ZSh7XG5cdE9ic2VydmFibGU6IE9ic2VydmFibGUkMlxufSk7XG5cbnZhciBtaXhpbiA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdGhpcy5fZW1pdFZhbHVlKGZuKHgpKTtcbiAgfVxufTtcblxudmFyIFMkNyA9IGNyZWF0ZVN0cmVhbSgnbWFwJywgbWl4aW4pO1xudmFyIFAkMyA9IGNyZWF0ZVByb3BlcnR5KCdtYXAnLCBtaXhpbik7XG5cbnZhciBpZCA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gbWFwJDEob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogaWQ7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkNywgUCQzKSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDEgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIGlmIChmbih4KSkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkOCA9IGNyZWF0ZVN0cmVhbSgnZmlsdGVyJywgbWl4aW4kMSk7XG52YXIgUCQ0ID0gY3JlYXRlUHJvcGVydHkoJ2ZpbHRlcicsIG1peGluJDEpO1xuXG52YXIgaWQkMSA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gZmlsdGVyKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkJDE7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkOCwgUCQ0KSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDIgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuID0gX3JlZi5uO1xuXG4gICAgdGhpcy5fbiA9IG47XG4gICAgaWYgKG4gPD0gMCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX24tLTtcbiAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgaWYgKHRoaXMuX24gPT09IDApIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDkgPSBjcmVhdGVTdHJlYW0oJ3Rha2UnLCBtaXhpbiQyKTtcbnZhciBQJDUgPSBjcmVhdGVQcm9wZXJ0eSgndGFrZScsIG1peGluJDIpO1xuXG5mdW5jdGlvbiB0YWtlKG9icywgbikge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQ5LCBQJDUpKShvYnMsIHsgbjogbiB9KTtcbn1cblxudmFyIG1peGluJDMgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuID0gX3JlZi5uO1xuXG4gICAgdGhpcy5fbiA9IG47XG4gICAgaWYgKG4gPD0gMCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX24tLTtcbiAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgaWYgKHRoaXMuX24gPT09IDApIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDEwID0gY3JlYXRlU3RyZWFtKCd0YWtlRXJyb3JzJywgbWl4aW4kMyk7XG52YXIgUCQ2ID0gY3JlYXRlUHJvcGVydHkoJ3Rha2VFcnJvcnMnLCBtaXhpbiQzKTtcblxuZnVuY3Rpb24gdGFrZUVycm9ycyhvYnMsIG4pIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTAsIFAkNikpKG9icywgeyBuOiBuIH0pO1xufVxuXG52YXIgbWl4aW4kNCA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKGZuKHgpKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDExID0gY3JlYXRlU3RyZWFtKCd0YWtlV2hpbGUnLCBtaXhpbiQ0KTtcbnZhciBQJDcgPSBjcmVhdGVQcm9wZXJ0eSgndGFrZVdoaWxlJywgbWl4aW4kNCk7XG5cbnZhciBpZCQyID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5mdW5jdGlvbiB0YWtlV2hpbGUob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogaWQkMjtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQxMSwgUCQ3KSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDUgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fbGFzdFZhbHVlID0gTk9USElORztcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9sYXN0VmFsdWUgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fbGFzdFZhbHVlID0geDtcbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9sYXN0VmFsdWUgIT09IE5PVEhJTkcpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl9sYXN0VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH1cbn07XG5cbnZhciBTJDEyID0gY3JlYXRlU3RyZWFtKCdsYXN0JywgbWl4aW4kNSk7XG52YXIgUCQ4ID0gY3JlYXRlUHJvcGVydHkoJ2xhc3QnLCBtaXhpbiQ1KTtcblxuZnVuY3Rpb24gbGFzdChvYnMpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTIsIFAkOCkpKG9icyk7XG59XG5cbnZhciBtaXhpbiQ2ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbiA9IF9yZWYubjtcblxuICAgIHRoaXMuX24gPSBNYXRoLm1heCgwLCBuKTtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9uID09PSAwKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX24tLTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDEzID0gY3JlYXRlU3RyZWFtKCdza2lwJywgbWl4aW4kNik7XG52YXIgUCQ5ID0gY3JlYXRlUHJvcGVydHkoJ3NraXAnLCBtaXhpbiQ2KTtcblxuZnVuY3Rpb24gc2tpcChvYnMsIG4pIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTMsIFAkOSkpKG9icywgeyBuOiBuIH0pO1xufVxuXG52YXIgbWl4aW4kNyA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKHRoaXMuX2ZuICE9PSBudWxsICYmICFmbih4KSkge1xuICAgICAgdGhpcy5fZm4gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZm4gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDE0ID0gY3JlYXRlU3RyZWFtKCdza2lwV2hpbGUnLCBtaXhpbiQ3KTtcbnZhciBQJDEwID0gY3JlYXRlUHJvcGVydHkoJ3NraXBXaGlsZScsIG1peGluJDcpO1xuXG52YXIgaWQkMyA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gc2tpcFdoaWxlKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkJDM7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTQsIFAkMTApKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgbWl4aW4kOCA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fcHJldiA9IE5PVEhJTkc7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKHRoaXMuX3ByZXYgPT09IE5PVEhJTkcgfHwgIWZuKHRoaXMuX3ByZXYsIHgpKSB7XG4gICAgICB0aGlzLl9wcmV2ID0geDtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDE1ID0gY3JlYXRlU3RyZWFtKCdza2lwRHVwbGljYXRlcycsIG1peGluJDgpO1xudmFyIFAkMTEgPSBjcmVhdGVQcm9wZXJ0eSgnc2tpcER1cGxpY2F0ZXMnLCBtaXhpbiQ4KTtcblxudmFyIGVxID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5mdW5jdGlvbiBza2lwRHVwbGljYXRlcyhvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBlcTtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQxNSwgUCQxMSkpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQ5ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuLFxuICAgICAgICBzZWVkID0gX3JlZi5zZWVkO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9wcmV2ID0gc2VlZDtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9wcmV2ID0gbnVsbDtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodGhpcy5fcHJldiAhPT0gTk9USElORykge1xuICAgICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoZm4odGhpcy5fcHJldiwgeCkpO1xuICAgIH1cbiAgICB0aGlzLl9wcmV2ID0geDtcbiAgfVxufTtcblxudmFyIFMkMTYgPSBjcmVhdGVTdHJlYW0oJ2RpZmYnLCBtaXhpbiQ5KTtcbnZhciBQJDEyID0gY3JlYXRlUHJvcGVydHkoJ2RpZmYnLCBtaXhpbiQ5KTtcblxuZnVuY3Rpb24gZGVmYXVsdEZuKGEsIGIpIHtcbiAgcmV0dXJuIFthLCBiXTtcbn1cblxuZnVuY3Rpb24gZGlmZihvYnMsIGZuKSB7XG4gIHZhciBzZWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBOT1RISU5HO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDE2LCBQJDEyKSkob2JzLCB7IGZuOiBmbiB8fCBkZWZhdWx0Rm4sIHNlZWQ6IHNlZWQgfSk7XG59XG5cbnZhciBQJDEzID0gY3JlYXRlUHJvcGVydHkoJ3NjYW4nLCB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm4sXG4gICAgICAgIHNlZWQgPSBfcmVmLnNlZWQ7XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX3NlZWQgPSBzZWVkO1xuICAgIGlmIChzZWVkICE9PSBOT1RISU5HKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoc2VlZCk7XG4gICAgfVxuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgICB0aGlzLl9zZWVkID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIGlmICh0aGlzLl9jdXJyZW50RXZlbnQgPT09IG51bGwgfHwgdGhpcy5fY3VycmVudEV2ZW50LnR5cGUgPT09IEVSUk9SKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5fc2VlZCA9PT0gTk9USElORyA/IHggOiBmbih0aGlzLl9zZWVkLCB4KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShmbih0aGlzLl9jdXJyZW50RXZlbnQudmFsdWUsIHgpKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzY2FuKG9icywgZm4pIHtcbiAgdmFyIHNlZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IE5PVEhJTkc7XG5cbiAgcmV0dXJuIG5ldyBQJDEzKG9icywgeyBmbjogZm4sIHNlZWQ6IHNlZWQgfSk7XG59XG5cbnZhciBtaXhpbiQxMCA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdmFyIHhzID0gZm4oeCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHhzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDE3ID0gY3JlYXRlU3RyZWFtKCdmbGF0dGVuJywgbWl4aW4kMTApO1xuXG52YXIgaWQkNCA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gZmxhdHRlbihvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBpZCQ0O1xuXG4gIHJldHVybiBuZXcgUyQxNyhvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgRU5EX01BUktFUiA9IHt9O1xuXG52YXIgbWl4aW4kMTEgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgd2FpdCA9IF9yZWYud2FpdDtcblxuICAgIHRoaXMuX3dhaXQgPSBNYXRoLm1heCgwLCB3YWl0KTtcbiAgICB0aGlzLl9idWZmID0gW107XG4gICAgdGhpcy5fJHNoaWZ0QnVmZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLl9idWZmLnNoaWZ0KCk7XG4gICAgICBpZiAodmFsdWUgPT09IEVORF9NQVJLRVIpIHtcbiAgICAgICAgX3RoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9lbWl0VmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYnVmZiA9IG51bGw7XG4gICAgdGhpcy5fJHNoaWZ0QnVmZiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idWZmLnB1c2goeCk7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuXyRzaGlmdEJ1ZmYsIHRoaXMuX3dhaXQpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1ZmYucHVzaChFTkRfTUFSS0VSKTtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5fJHNoaWZ0QnVmZiwgdGhpcy5fd2FpdCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQxOCA9IGNyZWF0ZVN0cmVhbSgnZGVsYXknLCBtaXhpbiQxMSk7XG52YXIgUCQxNCA9IGNyZWF0ZVByb3BlcnR5KCdkZWxheScsIG1peGluJDExKTtcblxuZnVuY3Rpb24gZGVsYXkob2JzLCB3YWl0KSB7XG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDE4LCBQJDE0KSkob2JzLCB7IHdhaXQ6IHdhaXQgfSk7XG59XG5cbnZhciBub3cgPSBEYXRlLm5vdyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIERhdGUubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG52YXIgbWl4aW4kMTIgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgd2FpdCA9IF9yZWYud2FpdCxcbiAgICAgICAgbGVhZGluZyA9IF9yZWYubGVhZGluZyxcbiAgICAgICAgdHJhaWxpbmcgPSBfcmVmLnRyYWlsaW5nO1xuXG4gICAgdGhpcy5fd2FpdCA9IE1hdGgubWF4KDAsIHdhaXQpO1xuICAgIHRoaXMuX2xlYWRpbmcgPSBsZWFkaW5nO1xuICAgIHRoaXMuX3RyYWlsaW5nID0gdHJhaWxpbmc7XG4gICAgdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICB0aGlzLl9lbmRMYXRlciA9IGZhbHNlO1xuICAgIHRoaXMuX2xhc3RDYWxsVGltZSA9IDA7XG4gICAgdGhpcy5fJHRyYWlsaW5nQ2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fdHJhaWxpbmdDYWxsKCk7XG4gICAgfTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl8kdHJhaWxpbmdDYWxsID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjdXJUaW1lID0gbm93KCk7XG4gICAgICBpZiAodGhpcy5fbGFzdENhbGxUaW1lID09PSAwICYmICF0aGlzLl9sZWFkaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDYWxsVGltZSA9IGN1clRpbWU7XG4gICAgICB9XG4gICAgICB2YXIgcmVtYWluaW5nID0gdGhpcy5fd2FpdCAtIChjdXJUaW1lIC0gdGhpcy5fbGFzdENhbGxUaW1lKTtcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICB0aGlzLl9jYW5jZWxUcmFpbGluZygpO1xuICAgICAgICB0aGlzLl9sYXN0Q2FsbFRpbWUgPSBjdXJUaW1lO1xuICAgICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3RyYWlsaW5nKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbFRyYWlsaW5nKCk7XG4gICAgICAgIHRoaXMuX3RyYWlsaW5nVmFsdWUgPSB4O1xuICAgICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuXyR0cmFpbGluZ0NhbGwsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3RpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl9lbmRMYXRlciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfY2FuY2VsVHJhaWxpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fdGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dElkKTtcbiAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICB9LFxuICBfdHJhaWxpbmdDYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX3RyYWlsaW5nVmFsdWUpO1xuICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fbGFzdENhbGxUaW1lID0gIXRoaXMuX2xlYWRpbmcgPyAwIDogbm93KCk7XG4gICAgaWYgKHRoaXMuX2VuZExhdGVyKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQxOSA9IGNyZWF0ZVN0cmVhbSgndGhyb3R0bGUnLCBtaXhpbiQxMik7XG52YXIgUCQxNSA9IGNyZWF0ZVByb3BlcnR5KCd0aHJvdHRsZScsIG1peGluJDEyKTtcblxuZnVuY3Rpb24gdGhyb3R0bGUob2JzLCB3YWl0KSB7XG4gIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmMiRsZWFkaW5nID0gX3JlZjIubGVhZGluZyxcbiAgICAgIGxlYWRpbmcgPSBfcmVmMiRsZWFkaW5nID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZjIkbGVhZGluZyxcbiAgICAgIF9yZWYyJHRyYWlsaW5nID0gX3JlZjIudHJhaWxpbmcsXG4gICAgICB0cmFpbGluZyA9IF9yZWYyJHRyYWlsaW5nID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZjIkdHJhaWxpbmc7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTksIFAkMTUpKShvYnMsIHsgd2FpdDogd2FpdCwgbGVhZGluZzogbGVhZGluZywgdHJhaWxpbmc6IHRyYWlsaW5nIH0pO1xufVxuXG52YXIgbWl4aW4kMTMgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgd2FpdCA9IF9yZWYud2FpdCxcbiAgICAgICAgaW1tZWRpYXRlID0gX3JlZi5pbW1lZGlhdGU7XG5cbiAgICB0aGlzLl93YWl0ID0gTWF0aC5tYXgoMCwgd2FpdCk7XG4gICAgdGhpcy5faW1tZWRpYXRlID0gaW1tZWRpYXRlO1xuICAgIHRoaXMuX2xhc3RBdHRlbXB0ID0gMDtcbiAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMuX2xhdGVyVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX2VuZExhdGVyID0gZmFsc2U7XG4gICAgdGhpcy5fJGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9sYXRlcigpO1xuICAgIH07XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fbGF0ZXJWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fJGxhdGVyID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xhc3RBdHRlbXB0ID0gbm93KCk7XG4gICAgICBpZiAodGhpcy5faW1tZWRpYXRlICYmICF0aGlzLl90aW1lb3V0SWQpIHtcbiAgICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl90aW1lb3V0SWQpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dElkID0gc2V0VGltZW91dCh0aGlzLl8kbGF0ZXIsIHRoaXMuX3dhaXQpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5fbGF0ZXJWYWx1ZSA9IHg7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3RpbWVvdXRJZCAmJiAhdGhpcy5faW1tZWRpYXRlKSB7XG4gICAgICAgIHRoaXMuX2VuZExhdGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9sYXRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0ID0gbm93KCkgLSB0aGlzLl9sYXN0QXR0ZW1wdDtcbiAgICBpZiAobGFzdCA8IHRoaXMuX3dhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuXyRsYXRlciwgdGhpcy5fd2FpdCAtIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9pbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2xhdGVyVmFsdWUpO1xuICAgICAgICB0aGlzLl9sYXRlclZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9lbmRMYXRlcikge1xuICAgICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQyMCA9IGNyZWF0ZVN0cmVhbSgnZGVib3VuY2UnLCBtaXhpbiQxMyk7XG52YXIgUCQxNiA9IGNyZWF0ZVByb3BlcnR5KCdkZWJvdW5jZScsIG1peGluJDEzKTtcblxuZnVuY3Rpb24gZGVib3VuY2Uob2JzLCB3YWl0KSB7XG4gIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmMiRpbW1lZGlhdGUgPSBfcmVmMi5pbW1lZGlhdGUsXG4gICAgICBpbW1lZGlhdGUgPSBfcmVmMiRpbW1lZGlhdGUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZjIkaW1tZWRpYXRlO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDIwLCBQJDE2KSkob2JzLCB7IHdhaXQ6IHdhaXQsIGltbWVkaWF0ZTogaW1tZWRpYXRlIH0pO1xufVxuXG52YXIgbWl4aW4kMTQgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIHRoaXMuX2VtaXRFcnJvcihmbih4KSk7XG4gIH1cbn07XG5cbnZhciBTJDIxID0gY3JlYXRlU3RyZWFtKCdtYXBFcnJvcnMnLCBtaXhpbiQxNCk7XG52YXIgUCQxNyA9IGNyZWF0ZVByb3BlcnR5KCdtYXBFcnJvcnMnLCBtaXhpbiQxNCk7XG5cbnZhciBpZCQ1ID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5mdW5jdGlvbiBtYXBFcnJvcnMob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogaWQkNTtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQyMSwgUCQxNykpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQxNSA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKGZuKHgpKSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQyMiA9IGNyZWF0ZVN0cmVhbSgnZmlsdGVyRXJyb3JzJywgbWl4aW4kMTUpO1xudmFyIFAkMTggPSBjcmVhdGVQcm9wZXJ0eSgnZmlsdGVyRXJyb3JzJywgbWl4aW4kMTUpO1xuXG52YXIgaWQkNiA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gZmlsdGVyRXJyb3JzKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkJDY7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjIsIFAkMTgpKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgbWl4aW4kMTYgPSB7XG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKCkge31cbn07XG5cbnZhciBTJDIzID0gY3JlYXRlU3RyZWFtKCdpZ25vcmVWYWx1ZXMnLCBtaXhpbiQxNik7XG52YXIgUCQxOSA9IGNyZWF0ZVByb3BlcnR5KCdpZ25vcmVWYWx1ZXMnLCBtaXhpbiQxNik7XG5cbmZ1bmN0aW9uIGlnbm9yZVZhbHVlcyhvYnMpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjMsIFAkMTkpKShvYnMpO1xufVxuXG52YXIgbWl4aW4kMTcgPSB7XG4gIF9oYW5kbGVFcnJvcjogZnVuY3Rpb24gKCkge31cbn07XG5cbnZhciBTJDI0ID0gY3JlYXRlU3RyZWFtKCdpZ25vcmVFcnJvcnMnLCBtaXhpbiQxNyk7XG52YXIgUCQyMCA9IGNyZWF0ZVByb3BlcnR5KCdpZ25vcmVFcnJvcnMnLCBtaXhpbiQxNyk7XG5cbmZ1bmN0aW9uIGlnbm9yZUVycm9ycyhvYnMpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjQsIFAkMjApKShvYnMpO1xufVxuXG52YXIgbWl4aW4kMTggPSB7XG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uICgpIHt9XG59O1xuXG52YXIgUyQyNSA9IGNyZWF0ZVN0cmVhbSgnaWdub3JlRW5kJywgbWl4aW4kMTgpO1xudmFyIFAkMjEgPSBjcmVhdGVQcm9wZXJ0eSgnaWdub3JlRW5kJywgbWl4aW4kMTgpO1xuXG5mdW5jdGlvbiBpZ25vcmVFbmQob2JzKSB7XG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDI1LCBQJDIxKSkob2JzKTtcbn1cblxudmFyIG1peGluJDE5ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICB0aGlzLl9lbWl0VmFsdWUoZm4oKSk7XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59O1xuXG52YXIgUyQyNiA9IGNyZWF0ZVN0cmVhbSgnYmVmb3JlRW5kJywgbWl4aW4kMTkpO1xudmFyIFAkMjIgPSBjcmVhdGVQcm9wZXJ0eSgnYmVmb3JlRW5kJywgbWl4aW4kMTkpO1xuXG5mdW5jdGlvbiBiZWZvcmVFbmQob2JzLCBmbikge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQyNiwgUCQyMikpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQyMCA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG1pbiA9IF9yZWYubWluLFxuICAgICAgICBtYXggPSBfcmVmLm1heDtcblxuICAgIHRoaXMuX21heCA9IG1heDtcbiAgICB0aGlzLl9taW4gPSBtaW47XG4gICAgdGhpcy5fYnVmZiA9IFtdO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2J1ZmYgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fYnVmZiA9IHNsaWRlKHRoaXMuX2J1ZmYsIHgsIHRoaXMuX21heCk7XG4gICAgaWYgKHRoaXMuX2J1ZmYubGVuZ3RoID49IHRoaXMuX21pbikge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2J1ZmYpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMjcgPSBjcmVhdGVTdHJlYW0oJ3NsaWRpbmdXaW5kb3cnLCBtaXhpbiQyMCk7XG52YXIgUCQyMyA9IGNyZWF0ZVByb3BlcnR5KCdzbGlkaW5nV2luZG93JywgbWl4aW4kMjApO1xuXG5mdW5jdGlvbiBzbGlkaW5nV2luZG93KG9icywgbWF4KSB7XG4gIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjcsIFAkMjMpKShvYnMsIHsgbWluOiBtaW4sIG1heDogbWF4IH0pO1xufVxuXG52YXIgbWl4aW4kMjEgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm4sXG4gICAgICAgIGZsdXNoT25FbmQgPSBfcmVmLmZsdXNoT25FbmQ7XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX2ZsdXNoT25FbmQgPSBmbHVzaE9uRW5kO1xuICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9idWZmID0gbnVsbDtcbiAgfSxcbiAgX2ZsdXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmYgIT09IG51bGwgJiYgdGhpcy5fYnVmZi5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl9idWZmKTtcbiAgICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB0aGlzLl9idWZmLnB1c2goeCk7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKCFmbih4KSkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fZmx1c2hPbkVuZCkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59O1xuXG52YXIgUyQyOCA9IGNyZWF0ZVN0cmVhbSgnYnVmZmVyV2hpbGUnLCBtaXhpbiQyMSk7XG52YXIgUCQyNCA9IGNyZWF0ZVByb3BlcnR5KCdidWZmZXJXaGlsZScsIG1peGluJDIxKTtcblxudmFyIGlkJDcgPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geDtcbn07XG5cbmZ1bmN0aW9uIGJ1ZmZlcldoaWxlKG9icywgZm4pIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgIF9yZWYyJGZsdXNoT25FbmQgPSBfcmVmMi5mbHVzaE9uRW5kLFxuICAgICAgZmx1c2hPbkVuZCA9IF9yZWYyJGZsdXNoT25FbmQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmMiRmbHVzaE9uRW5kO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDI4LCBQJDI0KSkob2JzLCB7IGZuOiBmbiB8fCBpZCQ3LCBmbHVzaE9uRW5kOiBmbHVzaE9uRW5kIH0pO1xufVxuXG52YXIgbWl4aW4kMjIgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjb3VudCA9IF9yZWYuY291bnQsXG4gICAgICAgIGZsdXNoT25FbmQgPSBfcmVmLmZsdXNoT25FbmQ7XG5cbiAgICB0aGlzLl9jb3VudCA9IGNvdW50O1xuICAgIHRoaXMuX2ZsdXNoT25FbmQgPSBmbHVzaE9uRW5kO1xuICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9idWZmID0gbnVsbDtcbiAgfSxcbiAgX2ZsdXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmYgIT09IG51bGwgJiYgdGhpcy5fYnVmZi5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl9idWZmKTtcbiAgICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB0aGlzLl9idWZmLnB1c2goeCk7XG4gICAgaWYgKHRoaXMuX2J1ZmYubGVuZ3RoID49IHRoaXMuX2NvdW50KSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9mbHVzaE9uRW5kKSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH1cbn07XG5cbnZhciBTJDI5ID0gY3JlYXRlU3RyZWFtKCdidWZmZXJXaXRoQ291bnQnLCBtaXhpbiQyMik7XG52YXIgUCQyNSA9IGNyZWF0ZVByb3BlcnR5KCdidWZmZXJXaXRoQ291bnQnLCBtaXhpbiQyMik7XG5cbmZ1bmN0aW9uIGJ1ZmZlcldoaWxlJDEob2JzLCBjb3VudCkge1xuICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9LFxuICAgICAgX3JlZjIkZmx1c2hPbkVuZCA9IF9yZWYyLmZsdXNoT25FbmQsXG4gICAgICBmbHVzaE9uRW5kID0gX3JlZjIkZmx1c2hPbkVuZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYyJGZsdXNoT25FbmQ7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjksIFAkMjUpKShvYnMsIHsgY291bnQ6IGNvdW50LCBmbHVzaE9uRW5kOiBmbHVzaE9uRW5kIH0pO1xufVxuXG52YXIgbWl4aW4kMjMgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgd2FpdCA9IF9yZWYud2FpdCxcbiAgICAgICAgY291bnQgPSBfcmVmLmNvdW50LFxuICAgICAgICBmbHVzaE9uRW5kID0gX3JlZi5mbHVzaE9uRW5kO1xuXG4gICAgdGhpcy5fd2FpdCA9IHdhaXQ7XG4gICAgdGhpcy5fY291bnQgPSBjb3VudDtcbiAgICB0aGlzLl9mbHVzaE9uRW5kID0gZmx1c2hPbkVuZDtcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcbiAgICB0aGlzLl8kb25UaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9mbHVzaCgpO1xuICAgIH07XG4gICAgdGhpcy5fYnVmZiA9IFtdO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuXyRvblRpY2sgPSBudWxsO1xuICAgIHRoaXMuX2J1ZmYgPSBudWxsO1xuICB9LFxuICBfZmx1c2g6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYnVmZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2J1ZmYpO1xuICAgICAgdGhpcy5fYnVmZiA9IFtdO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgICBpZiAodGhpcy5fYnVmZi5sZW5ndGggPj0gdGhpcy5fY291bnQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxJZCk7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuXyRvblRpY2ssIHRoaXMuX3dhaXQpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9mbHVzaE9uRW5kICYmIHRoaXMuX2J1ZmYubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH0sXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5fJG9uVGljaywgdGhpcy5fd2FpdCk7XG4gICAgdGhpcy5fc291cmNlLm9uQW55KHRoaXMuXyRoYW5kbGVBbnkpOyAvLyBjb3BpZWQgZnJvbSBwYXR0ZXJucy9vbmUtc291cmNlXG4gIH0sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbElkICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSWQpO1xuICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX3NvdXJjZS5vZmZBbnkodGhpcy5fJGhhbmRsZUFueSk7IC8vIGNvcGllZCBmcm9tIHBhdHRlcm5zL29uZS1zb3VyY2VcbiAgfVxufTtcblxudmFyIFMkMzAgPSBjcmVhdGVTdHJlYW0oJ2J1ZmZlcldpdGhUaW1lT3JDb3VudCcsIG1peGluJDIzKTtcbnZhciBQJDI2ID0gY3JlYXRlUHJvcGVydHkoJ2J1ZmZlcldpdGhUaW1lT3JDb3VudCcsIG1peGluJDIzKTtcblxuZnVuY3Rpb24gYnVmZmVyV2l0aFRpbWVPckNvdW50KG9icywgd2FpdCwgY291bnQpIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fSxcbiAgICAgIF9yZWYyJGZsdXNoT25FbmQgPSBfcmVmMi5mbHVzaE9uRW5kLFxuICAgICAgZmx1c2hPbkVuZCA9IF9yZWYyJGZsdXNoT25FbmQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmMiRmbHVzaE9uRW5kO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDMwLCBQJDI2KSkob2JzLCB7IHdhaXQ6IHdhaXQsIGNvdW50OiBjb3VudCwgZmx1c2hPbkVuZDogZmx1c2hPbkVuZCB9KTtcbn1cblxuZnVuY3Rpb24geGZvcm1Gb3JPYnMob2JzKSB7XG4gIHJldHVybiB7XG4gICAgJ0BAdHJhbnNkdWNlci9zdGVwJzogZnVuY3Rpb24gKHJlcywgaW5wdXQpIHtcbiAgICAgIG9icy5fZW1pdFZhbHVlKGlucHV0KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgJ0BAdHJhbnNkdWNlci9yZXN1bHQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBvYnMuX2VtaXRFbmQoKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIG1peGluJDI0ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNkdWNlciA9IF9yZWYudHJhbnNkdWNlcjtcblxuICAgIHRoaXMuX3hmb3JtID0gdHJhbnNkdWNlcih4Zm9ybUZvck9icyh0aGlzKSk7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5feGZvcm0gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgaWYgKHRoaXMuX3hmb3JtWydAQHRyYW5zZHVjZXIvc3RlcCddKG51bGwsIHgpICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl94Zm9ybVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKG51bGwpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3hmb3JtWydAQHRyYW5zZHVjZXIvcmVzdWx0J10obnVsbCk7XG4gIH1cbn07XG5cbnZhciBTJDMxID0gY3JlYXRlU3RyZWFtKCd0cmFuc2R1Y2UnLCBtaXhpbiQyNCk7XG52YXIgUCQyNyA9IGNyZWF0ZVByb3BlcnR5KCd0cmFuc2R1Y2UnLCBtaXhpbiQyNCk7XG5cbmZ1bmN0aW9uIHRyYW5zZHVjZShvYnMsIHRyYW5zZHVjZXIpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMzEsIFAkMjcpKShvYnMsIHsgdHJhbnNkdWNlcjogdHJhbnNkdWNlciB9KTtcbn1cblxudmFyIG1peGluJDI1ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5faGFuZGxlciA9IGZuO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBlbWl0dGVyKHRoaXMpO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2hhbmRsZXIgPSBudWxsO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlQW55OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLl9oYW5kbGVyKHRoaXMuX2VtaXR0ZXIsIGV2ZW50KTtcbiAgfVxufTtcblxudmFyIFMkMzIgPSBjcmVhdGVTdHJlYW0oJ3dpdGhIYW5kbGVyJywgbWl4aW4kMjUpO1xudmFyIFAkMjggPSBjcmVhdGVQcm9wZXJ0eSgnd2l0aEhhbmRsZXInLCBtaXhpbiQyNSk7XG5cbmZ1bmN0aW9uIHdpdGhIYW5kbGVyKG9icywgZm4pIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMzIsIFAkMjgpKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gWmlwKHNvdXJjZXMsIGNvbWJpbmF0b3IpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcblxuICB0aGlzLl9idWZmZXJzID0gbWFwKHNvdXJjZXMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaXNBcnJheShzb3VyY2UpID8gY2xvbmVBcnJheShzb3VyY2UpIDogW107XG4gIH0pO1xuICB0aGlzLl9zb3VyY2VzID0gbWFwKHNvdXJjZXMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaXNBcnJheShzb3VyY2UpID8gbmV2ZXIoKSA6IHNvdXJjZTtcbiAgfSk7XG5cbiAgdGhpcy5fY29tYmluYXRvciA9IGNvbWJpbmF0b3IgPyBzcHJlYWQoY29tYmluYXRvciwgdGhpcy5fc291cmNlcy5sZW5ndGgpIDogZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbiAgdGhpcy5fYWxpdmVDb3VudCA9IDA7XG5cbiAgdGhpcy5fJGhhbmRsZXJzID0gW107XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICBfdGhpcy5fJGhhbmRsZXJzLnB1c2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMuX2hhbmRsZUFueShpLCBldmVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgX2xvb3AoaSk7XG4gIH1cbn1cblxuaW5oZXJpdChaaXAsIFN0cmVhbSwge1xuICBfbmFtZTogJ3ppcCcsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmIGFsbCBzb3VyY2VzIGFyZSBhcnJheXNcbiAgICB3aGlsZSAodGhpcy5faXNGdWxsKCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoKTtcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fc291cmNlcy5sZW5ndGg7XG4gICAgdGhpcy5fYWxpdmVDb3VudCA9IGxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aCAmJiB0aGlzLl9hY3RpdmU7IGkrKykge1xuICAgICAgdGhpcy5fc291cmNlc1tpXS5vbkFueSh0aGlzLl8kaGFuZGxlcnNbaV0pO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9mZkFueSh0aGlzLl8kaGFuZGxlcnNbaV0pO1xuICAgIH1cbiAgfSxcbiAgX2VtaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KHRoaXMuX2J1ZmZlcnMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2J1ZmZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IHRoaXMuX2J1ZmZlcnNbaV0uc2hpZnQoKTtcbiAgICB9XG4gICAgdmFyIGNvbWJpbmF0b3IgPSB0aGlzLl9jb21iaW5hdG9yO1xuICAgIHRoaXMuX2VtaXRWYWx1ZShjb21iaW5hdG9yKHZhbHVlcykpO1xuICB9LFxuICBfaXNGdWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9idWZmZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fYnVmZmVyc1tpXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgX2hhbmRsZUFueTogZnVuY3Rpb24gKGksIGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFZBTFVFKSB7XG4gICAgICB0aGlzLl9idWZmZXJzW2ldLnB1c2goZXZlbnQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2lzRnVsbCgpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IEVSUk9SKSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoZXZlbnQudmFsdWUpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICB0aGlzLl9hbGl2ZUNvdW50LS07XG4gICAgICBpZiAodGhpcy5fYWxpdmVDb3VudCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICBTdHJlYW0ucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZXMgPSBudWxsO1xuICAgIHRoaXMuX2J1ZmZlcnMgPSBudWxsO1xuICAgIHRoaXMuX2NvbWJpbmF0b3IgPSBudWxsO1xuICAgIHRoaXMuXyRoYW5kbGVycyA9IG51bGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB6aXAob2JzZXJ2YWJsZXMsIGNvbWJpbmF0b3IgLyogRnVuY3Rpb24gfCBmYWxzZXkgKi8pIHtcbiAgcmV0dXJuIG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMCA/IG5ldmVyKCkgOiBuZXcgWmlwKG9ic2VydmFibGVzLCBjb21iaW5hdG9yKTtcbn1cblxudmFyIGlkJDggPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geDtcbn07XG5cbmZ1bmN0aW9uIEFic3RyYWN0UG9vbCgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJHF1ZXVlTGltID0gX3JlZi5xdWV1ZUxpbSxcbiAgICAgIHF1ZXVlTGltID0gX3JlZiRxdWV1ZUxpbSA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkcXVldWVMaW0sXG4gICAgICBfcmVmJGNvbmN1ckxpbSA9IF9yZWYuY29uY3VyTGltLFxuICAgICAgY29uY3VyTGltID0gX3JlZiRjb25jdXJMaW0gPT09IHVuZGVmaW5lZCA/IC0xIDogX3JlZiRjb25jdXJMaW0sXG4gICAgICBfcmVmJGRyb3AgPSBfcmVmLmRyb3AsXG4gICAgICBkcm9wID0gX3JlZiRkcm9wID09PSB1bmRlZmluZWQgPyAnbmV3JyA6IF9yZWYkZHJvcDtcblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcblxuICB0aGlzLl9xdWV1ZUxpbSA9IHF1ZXVlTGltIDwgMCA/IC0xIDogcXVldWVMaW07XG4gIHRoaXMuX2NvbmN1ckxpbSA9IGNvbmN1ckxpbSA8IDAgPyAtMSA6IGNvbmN1ckxpbTtcbiAgdGhpcy5fZHJvcCA9IGRyb3A7XG4gIHRoaXMuX3F1ZXVlID0gW107XG4gIHRoaXMuX2N1clNvdXJjZXMgPSBbXTtcbiAgdGhpcy5fJGhhbmRsZVN1YkFueSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBfdGhpcy5faGFuZGxlU3ViQW55KGV2ZW50KTtcbiAgfTtcbiAgdGhpcy5fJGVuZEhhbmRsZXJzID0gW107XG4gIHRoaXMuX2N1cnJlbnRseUFkZGluZyA9IG51bGw7XG5cbiAgaWYgKHRoaXMuX2NvbmN1ckxpbSA9PT0gMCkge1xuICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgfVxufVxuXG5pbmhlcml0KEFic3RyYWN0UG9vbCwgU3RyZWFtLCB7XG4gIF9uYW1lOiAnYWJzdHJhY3RQb29sJyxcblxuICBfYWRkOiBmdW5jdGlvbiAob2JqLCB0b09icyAvKiBGdW5jdGlvbiB8IGZhbHNleSAqLykge1xuICAgIHRvT2JzID0gdG9PYnMgfHwgaWQkODtcbiAgICBpZiAodGhpcy5fY29uY3VyTGltID09PSAtMSB8fCB0aGlzLl9jdXJTb3VyY2VzLmxlbmd0aCA8IHRoaXMuX2NvbmN1ckxpbSkge1xuICAgICAgdGhpcy5fYWRkVG9DdXIodG9PYnMob2JqKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9xdWV1ZUxpbSA9PT0gLTEgfHwgdGhpcy5fcXVldWUubGVuZ3RoIDwgdGhpcy5fcXVldWVMaW0pIHtcbiAgICAgICAgdGhpcy5fYWRkVG9RdWV1ZSh0b09icyhvYmopKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZHJvcCA9PT0gJ29sZCcpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlT2xkZXN0KCk7XG4gICAgICAgIHRoaXMuX2FkZChvYmosIHRvT2JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9hZGRBbGw6IGZ1bmN0aW9uIChvYnNzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBmb3JFYWNoKG9ic3MsIGZ1bmN0aW9uIChvYnMpIHtcbiAgICAgIHJldHVybiBfdGhpczIuX2FkZChvYnMpO1xuICAgIH0pO1xuICB9LFxuICBfcmVtb3ZlOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgaWYgKHRoaXMuX3JlbW92ZUN1cihvYnMpID09PSAtMSkge1xuICAgICAgdGhpcy5fcmVtb3ZlUXVldWUob2JzKTtcbiAgICB9XG4gIH0sXG4gIF9hZGRUb1F1ZXVlOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgdGhpcy5fcXVldWUgPSBjb25jYXQodGhpcy5fcXVldWUsIFtvYnNdKTtcbiAgfSxcbiAgX2FkZFRvQ3VyOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgLy8gSEFDSzpcbiAgICAgIC8vXG4gICAgICAvLyBXZSBoYXZlIHR3byBvcHRpbWl6YXRpb25zIGZvciBjYXNlcyB3aGVuIGBvYnNgIGlzIGVuZGVkLiBXZSBkb24ndCB3YW50XG4gICAgICAvLyB0byBhZGQgc3VjaCBvYnNlcnZhYmxlIHRvIHRoZSBsaXN0LCBidXQgb25seSB3YW50IHRvIGVtaXQgZXZlbnRzXG4gICAgICAvLyBmcm9tIGl0IChpZiBpdCBoYXMgc29tZSkuXG4gICAgICAvL1xuICAgICAgLy8gSW5zdGVhZCBvZiB0aGlzIGhhY2tzLCB3ZSBjb3VsZCBqdXN0IGRpZCBmb2xsb3dpbmcsXG4gICAgICAvLyBidXQgaXQgd291bGQgYmUgNS04IHRpbWVzIHNsb3dlcjpcbiAgICAgIC8vXG4gICAgICAvLyAgICAgdGhpcy5fY3VyU291cmNlcyA9IGNvbmNhdCh0aGlzLl9jdXJTb3VyY2VzLCBbb2JzXSk7XG4gICAgICAvLyAgICAgdGhpcy5fc3Vic2NyaWJlKG9icyk7XG4gICAgICAvL1xuXG4gICAgICAvLyAjMVxuICAgICAgLy8gVGhpcyBvbmUgZm9yIGNhc2VzIHdoZW4gYG9ic2AgYWxyZWFkeSBlbmRlZFxuICAgICAgLy8gZS5nLiwgS2VmaXIuY29uc3RhbnQoKSBvciBLZWZpci5uZXZlcigpXG4gICAgICBpZiAoIW9icy5fYWxpdmUpIHtcbiAgICAgICAgaWYgKG9icy5fY3VycmVudEV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5fZW1pdChvYnMuX2N1cnJlbnRFdmVudC50eXBlLCBvYnMuX2N1cnJlbnRFdmVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyAjMlxuICAgICAgLy8gVGhpcyBvbmUgaXMgZm9yIGNhc2VzIHdoZW4gYG9ic2AgZ29pbmcgdG8gZW5kIHN5bmNocm9ub3VzbHkgb25cbiAgICAgIC8vIGZpcnN0IHN1YnNjcmliZXIgZS5nLiwgS2VmaXIuc3RyZWFtKGVtID0+IHtlbS5lbWl0KDEpOyBlbS5lbmQoKX0pXG4gICAgICB0aGlzLl9jdXJyZW50bHlBZGRpbmcgPSBvYnM7XG4gICAgICBvYnMub25BbnkodGhpcy5fJGhhbmRsZVN1YkFueSk7XG4gICAgICB0aGlzLl9jdXJyZW50bHlBZGRpbmcgPSBudWxsO1xuICAgICAgaWYgKG9icy5fYWxpdmUpIHtcbiAgICAgICAgdGhpcy5fY3VyU291cmNlcyA9IGNvbmNhdCh0aGlzLl9jdXJTb3VyY2VzLCBbb2JzXSk7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLl9zdWJUb0VuZChvYnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2N1clNvdXJjZXMgPSBjb25jYXQodGhpcy5fY3VyU291cmNlcywgW29ic10pO1xuICAgIH1cbiAgfSxcbiAgX3N1YlRvRW5kOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMzLl9yZW1vdmVDdXIob2JzKTtcbiAgICB9O1xuICAgIHRoaXMuXyRlbmRIYW5kbGVycy5wdXNoKHsgb2JzOiBvYnMsIGhhbmRsZXI6IG9uRW5kIH0pO1xuICAgIG9icy5vbkVuZChvbkVuZCk7XG4gIH0sXG4gIF9zdWJzY3JpYmU6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICBvYnMub25BbnkodGhpcy5fJGhhbmRsZVN1YkFueSk7XG5cbiAgICAvLyBpdCBjYW4gYmVjb21lIGluYWN0aXZlIGluIHJlc3BvbmNlIG9mIHN1YnNjcmliaW5nIHRvIGBvYnMub25BbnlgIGFib3ZlXG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fc3ViVG9FbmQob2JzKTtcbiAgICB9XG4gIH0sXG4gIF91bnN1YnNjcmliZTogZnVuY3Rpb24gKG9icykge1xuICAgIG9icy5vZmZBbnkodGhpcy5fJGhhbmRsZVN1YkFueSk7XG5cbiAgICB2YXIgb25FbmRJID0gZmluZEJ5UHJlZCh0aGlzLl8kZW5kSGFuZGxlcnMsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmoub2JzID09PSBvYnM7XG4gICAgfSk7XG4gICAgaWYgKG9uRW5kSSAhPT0gLTEpIHtcbiAgICAgIG9icy5vZmZFbmQodGhpcy5fJGVuZEhhbmRsZXJzW29uRW5kSV0uaGFuZGxlcik7XG4gICAgICB0aGlzLl8kZW5kSGFuZGxlcnMuc3BsaWNlKG9uRW5kSSwgMSk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlU3ViQW55OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gVkFMVUUpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShldmVudC52YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBFUlJPUikge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKGV2ZW50LnZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIF9yZW1vdmVRdWV1ZTogZnVuY3Rpb24gKG9icykge1xuICAgIHZhciBpbmRleCA9IGZpbmQodGhpcy5fcXVldWUsIG9icyk7XG4gICAgdGhpcy5fcXVldWUgPSByZW1vdmUodGhpcy5fcXVldWUsIGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG4gIF9yZW1vdmVDdXI6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZShvYnMpO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBmaW5kKHRoaXMuX2N1clNvdXJjZXMsIG9icyk7XG4gICAgdGhpcy5fY3VyU291cmNlcyA9IHJlbW92ZSh0aGlzLl9jdXJTb3VyY2VzLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLl9wdWxsUXVldWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VyU291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fb25FbXB0eSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG4gIF9yZW1vdmVPbGRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9yZW1vdmVDdXIodGhpcy5fY3VyU291cmNlc1swXSk7XG4gIH0sXG4gIF9wdWxsUXVldWU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLl9xdWV1ZSA9IGNsb25lQXJyYXkodGhpcy5fcXVldWUpO1xuICAgICAgdGhpcy5fYWRkVG9DdXIodGhpcy5fcXVldWUuc2hpZnQoKSk7XG4gICAgfVxuICB9LFxuICBfb25BY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHNvdXJjZXMgPSB0aGlzLl9jdXJTb3VyY2VzOyBpIDwgc291cmNlcy5sZW5ndGggJiYgdGhpcy5fYWN0aXZlOyBpKyspIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZShzb3VyY2VzW2ldKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBzb3VyY2VzID0gdGhpcy5fY3VyU291cmNlczsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKHNvdXJjZXNbaV0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VycmVudGx5QWRkaW5nICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZSh0aGlzLl9jdXJyZW50bHlBZGRpbmcpO1xuICAgIH1cbiAgfSxcbiAgX2lzRW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VyU291cmNlcy5sZW5ndGggPT09IDA7XG4gIH0sXG4gIF9vbkVtcHR5OiBmdW5jdGlvbiAoKSB7fSxcbiAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgU3RyZWFtLnByb3RvdHlwZS5fY2xlYXIuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9xdWV1ZSA9IG51bGw7XG4gICAgdGhpcy5fY3VyU291cmNlcyA9IG51bGw7XG4gICAgdGhpcy5fJGhhbmRsZVN1YkFueSA9IG51bGw7XG4gICAgdGhpcy5fJGVuZEhhbmRsZXJzID0gbnVsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIE1lcmdlKHNvdXJjZXMpIHtcbiAgQWJzdHJhY3RQb29sLmNhbGwodGhpcyk7XG4gIHRoaXMuX2FkZEFsbChzb3VyY2VzKTtcbiAgdGhpcy5faW5pdGlhbGlzZWQgPSB0cnVlO1xufVxuXG5pbmhlcml0KE1lcmdlLCBBYnN0cmFjdFBvb2wsIHtcbiAgX25hbWU6ICdtZXJnZScsXG5cbiAgX29uRW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGlzZWQpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtZXJnZShvYnNlcnZhYmxlcykge1xuICByZXR1cm4gb2JzZXJ2YWJsZXMubGVuZ3RoID09PSAwID8gbmV2ZXIoKSA6IG5ldyBNZXJnZShvYnNlcnZhYmxlcyk7XG59XG5cbmZ1bmN0aW9uIFMkMzMoZ2VuZXJhdG9yKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgU3RyZWFtLmNhbGwodGhpcyk7XG4gIHRoaXMuX2dlbmVyYXRvciA9IGdlbmVyYXRvcjtcbiAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgdGhpcy5faW5Mb29wID0gZmFsc2U7XG4gIHRoaXMuX2l0ZXJhdGlvbiA9IDA7XG4gIHRoaXMuXyRoYW5kbGVBbnkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gX3RoaXMuX2hhbmRsZUFueShldmVudCk7XG4gIH07XG59XG5cbmluaGVyaXQoUyQzMywgU3RyZWFtLCB7XG4gIF9uYW1lOiAncmVwZWF0JyxcblxuICBfaGFuZGxlQW55OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgICAgdGhpcy5fZ2V0U291cmNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnQudHlwZSwgZXZlbnQudmFsdWUpO1xuICAgIH1cbiAgfSxcbiAgX2dldFNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5faW5Mb29wKSB7XG4gICAgICB0aGlzLl9pbkxvb3AgPSB0cnVlO1xuICAgICAgdmFyIGdlbmVyYXRvciA9IHRoaXMuX2dlbmVyYXRvcjtcbiAgICAgIHdoaWxlICh0aGlzLl9zb3VyY2UgPT09IG51bGwgJiYgdGhpcy5fYWxpdmUgJiYgdGhpcy5fYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX3NvdXJjZSA9IGdlbmVyYXRvcih0aGlzLl9pdGVyYXRpb24rKyk7XG4gICAgICAgIGlmICh0aGlzLl9zb3VyY2UpIHtcbiAgICAgICAgICB0aGlzLl9zb3VyY2Uub25BbnkodGhpcy5fJGhhbmRsZUFueSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9pbkxvb3AgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fc291cmNlKSB7XG4gICAgICB0aGlzLl9zb3VyY2Uub25BbnkodGhpcy5fJGhhbmRsZUFueSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dldFNvdXJjZSgpO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3NvdXJjZSkge1xuICAgICAgdGhpcy5fc291cmNlLm9mZkFueSh0aGlzLl8kaGFuZGxlQW55KTtcbiAgICB9XG4gIH0sXG4gIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZ2VuZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuXyRoYW5kbGVBbnkgPSBudWxsO1xuICB9XG59KTtcblxudmFyIHJlcGVhdCA9IGZ1bmN0aW9uIChnZW5lcmF0b3IpIHtcbiAgcmV0dXJuIG5ldyBTJDMzKGdlbmVyYXRvcik7XG59O1xuXG5mdW5jdGlvbiBjb25jYXQkMShvYnNlcnZhYmxlcykge1xuICByZXR1cm4gcmVwZWF0KGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBvYnNlcnZhYmxlcy5sZW5ndGggPiBpbmRleCA/IG9ic2VydmFibGVzW2luZGV4XSA6IGZhbHNlO1xuICB9KS5zZXROYW1lKCdjb25jYXQnKTtcbn1cblxuZnVuY3Rpb24gUG9vbCgpIHtcbiAgQWJzdHJhY3RQb29sLmNhbGwodGhpcyk7XG59XG5cbmluaGVyaXQoUG9vbCwgQWJzdHJhY3RQb29sLCB7XG4gIF9uYW1lOiAncG9vbCcsXG5cbiAgcGx1ZzogZnVuY3Rpb24gKG9icykge1xuICAgIHRoaXMuX2FkZChvYnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICB1bnBsdWc6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICB0aGlzLl9yZW1vdmUob2JzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIEZsYXRNYXAoc291cmNlLCBmbiwgb3B0aW9ucykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIEFic3RyYWN0UG9vbC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICB0aGlzLl9zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMuX2ZuID0gZm47XG4gIHRoaXMuX21haW5FbmRlZCA9IGZhbHNlO1xuICB0aGlzLl9sYXN0Q3VycmVudCA9IG51bGw7XG4gIHRoaXMuXyRoYW5kbGVNYWluID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIF90aGlzLl9oYW5kbGVNYWluKGV2ZW50KTtcbiAgfTtcbn1cblxuaW5oZXJpdChGbGF0TWFwLCBBYnN0cmFjdFBvb2wsIHtcbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIEFic3RyYWN0UG9vbC5wcm90b3R5cGUuX29uQWN0aXZhdGlvbi5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX3NvdXJjZS5vbkFueSh0aGlzLl8kaGFuZGxlTWFpbik7XG4gICAgfVxuICB9LFxuICBfb25EZWFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICBBYnN0cmFjdFBvb2wucHJvdG90eXBlLl9vbkRlYWN0aXZhdGlvbi5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZS5vZmZBbnkodGhpcy5fJGhhbmRsZU1haW4pO1xuICAgIHRoaXMuX2hhZE5vRXZTaW5jZURlYWN0ID0gdHJ1ZTtcbiAgfSxcbiAgX2hhbmRsZU1haW46IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSkge1xuICAgICAgLy8gSXMgbGF0ZXN0IHZhbHVlIGJlZm9yZSBkZWFjdGl2YXRpb24gc3Vydml2ZWQsIGFuZCBub3cgaXMgJ2N1cnJlbnQnIG9uIHRoaXMgYWN0aXZhdGlvbj9cbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gaGFuZGxlIHN1Y2ggdmFsdWVzLCB0byBwcmV2ZW50IHRvIGNvbnN0YW50bHkgYWRkXG4gICAgICAvLyBzYW1lIG9ic2VydmFsZSBvbiBlYWNoIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIHdoZW4gb3VyIG1haW4gc291cmNlXG4gICAgICAvLyBpcyBhIGBLZWZpci5jb25hdGFudCgpYCBmb3IgZXhhbXBsZS5cbiAgICAgIHZhciBzYW1lQ3VyciA9IHRoaXMuX2FjdGl2YXRpbmcgJiYgdGhpcy5faGFkTm9FdlNpbmNlRGVhY3QgJiYgdGhpcy5fbGFzdEN1cnJlbnQgPT09IGV2ZW50LnZhbHVlO1xuICAgICAgaWYgKCFzYW1lQ3Vycikge1xuICAgICAgICB0aGlzLl9hZGQoZXZlbnQudmFsdWUsIHRoaXMuX2ZuKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RDdXJyZW50ID0gZXZlbnQudmFsdWU7XG4gICAgICB0aGlzLl9oYWROb0V2U2luY2VEZWFjdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSBFUlJPUikge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKGV2ZW50LnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICBpZiAodGhpcy5faXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21haW5FbmRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfb25FbXB0eTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9tYWluRW5kZWQpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH0sXG4gIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgIEFic3RyYWN0UG9vbC5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0Q3VycmVudCA9IG51bGw7XG4gICAgdGhpcy5fJGhhbmRsZU1haW4gPSBudWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gRmxhdE1hcEVycm9ycyhzb3VyY2UsIGZuKSB7XG4gIEZsYXRNYXAuY2FsbCh0aGlzLCBzb3VyY2UsIGZuKTtcbn1cblxuaW5oZXJpdChGbGF0TWFwRXJyb3JzLCBGbGF0TWFwLCB7XG4gIC8vIFNhbWUgYXMgaW4gRmxhdE1hcCwgb25seSBWQUxVRS9FUlJPUiBmbGlwcGVkXG4gIF9oYW5kbGVNYWluOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRVJST1IpIHtcbiAgICAgIHZhciBzYW1lQ3VyciA9IHRoaXMuX2FjdGl2YXRpbmcgJiYgdGhpcy5faGFkTm9FdlNpbmNlRGVhY3QgJiYgdGhpcy5fbGFzdEN1cnJlbnQgPT09IGV2ZW50LnZhbHVlO1xuICAgICAgaWYgKCFzYW1lQ3Vycikge1xuICAgICAgICB0aGlzLl9hZGQoZXZlbnQudmFsdWUsIHRoaXMuX2ZuKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RDdXJyZW50ID0gZXZlbnQudmFsdWU7XG4gICAgICB0aGlzLl9oYWROb0V2U2luY2VEZWFjdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICBpZiAodGhpcy5faXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21haW5FbmRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlQ29uc3RydWN0b3IkMShCYXNlQ2xhc3MsIG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEFub255bW91c09ic2VydmFibGUocHJpbWFyeSwgc2Vjb25kYXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIEJhc2VDbGFzcy5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3ByaW1hcnkgPSBwcmltYXJ5O1xuICAgIHRoaXMuX3NlY29uZGFyeSA9IHNlY29uZGFyeTtcbiAgICB0aGlzLl9uYW1lID0gcHJpbWFyeS5fbmFtZSArICcuJyArIG5hbWU7XG4gICAgdGhpcy5fbGFzdFNlY29uZGFyeSA9IE5PVEhJTkc7XG4gICAgdGhpcy5fJGhhbmRsZVNlY29uZGFyeUFueSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9oYW5kbGVTZWNvbmRhcnlBbnkoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5fJGhhbmRsZVByaW1hcnlBbnkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlUHJpbWFyeUFueShldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDbGFzc01ldGhvZHMkMShCYXNlQ2xhc3MpIHtcbiAgcmV0dXJuIHtcbiAgICBfaW5pdDogZnVuY3Rpb24gKCkge30sXG4gICAgX2ZyZWU6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF9oYW5kbGVQcmltYXJ5VmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSxcbiAgICBfaGFuZGxlUHJpbWFyeUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKHgpO1xuICAgIH0sXG4gICAgX2hhbmRsZVByaW1hcnlFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9LFxuICAgIF9oYW5kbGVTZWNvbmRhcnlWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX2xhc3RTZWNvbmRhcnkgPSB4O1xuICAgIH0sXG4gICAgX2hhbmRsZVNlY29uZGFyeUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKHgpO1xuICAgIH0sXG4gICAgX2hhbmRsZVNlY29uZGFyeUVuZDogZnVuY3Rpb24gKCkge30sXG4gICAgX2hhbmRsZVByaW1hcnlBbnk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgVkFMVUU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVByaW1hcnlWYWx1ZShldmVudC52YWx1ZSk7XG4gICAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVByaW1hcnlFcnJvcihldmVudC52YWx1ZSk7XG4gICAgICAgIGNhc2UgRU5EOlxuICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVQcmltYXJ5RW5kKGV2ZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9oYW5kbGVTZWNvbmRhcnlBbnk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgVkFMVUU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVNlY29uZGFyeVZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICAgICAgY2FzZSBFUlJPUjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlU2Vjb25kYXJ5RXJyb3IoZXZlbnQudmFsdWUpO1xuICAgICAgICBjYXNlIEVORDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVTZWNvbmRhcnlFbmQoZXZlbnQudmFsdWUpO1xuICAgICAgICAgIHRoaXMuX3JlbW92ZVNlY29uZGFyeSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgX3JlbW92ZVNlY29uZGFyeTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX3NlY29uZGFyeSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9zZWNvbmRhcnkub2ZmQW55KHRoaXMuXyRoYW5kbGVTZWNvbmRhcnlBbnkpO1xuICAgICAgICB0aGlzLl8kaGFuZGxlU2Vjb25kYXJ5QW55ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc2Vjb25kYXJ5ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9zZWNvbmRhcnkgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc2Vjb25kYXJ5Lm9uQW55KHRoaXMuXyRoYW5kbGVTZWNvbmRhcnlBbnkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLl9wcmltYXJ5Lm9uQW55KHRoaXMuXyRoYW5kbGVQcmltYXJ5QW55KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX3NlY29uZGFyeSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9zZWNvbmRhcnkub2ZmQW55KHRoaXMuXyRoYW5kbGVTZWNvbmRhcnlBbnkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcHJpbWFyeS5vZmZBbnkodGhpcy5fJGhhbmRsZVByaW1hcnlBbnkpO1xuICAgIH0sXG4gICAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICBCYXNlQ2xhc3MucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5fcHJpbWFyeSA9IG51bGw7XG4gICAgICB0aGlzLl9zZWNvbmRhcnkgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFNlY29uZGFyeSA9IG51bGw7XG4gICAgICB0aGlzLl8kaGFuZGxlU2Vjb25kYXJ5QW55ID0gbnVsbDtcbiAgICAgIHRoaXMuXyRoYW5kbGVQcmltYXJ5QW55ID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZyZWUoKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmVhbSQxKG5hbWUsIG1peGluKSB7XG4gIHZhciBTID0gY3JlYXRlQ29uc3RydWN0b3IkMShTdHJlYW0sIG5hbWUpO1xuICBpbmhlcml0KFMsIFN0cmVhbSwgY3JlYXRlQ2xhc3NNZXRob2RzJDEoU3RyZWFtKSwgbWl4aW4pO1xuICByZXR1cm4gUztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvcGVydHkkMShuYW1lLCBtaXhpbikge1xuICB2YXIgUCA9IGNyZWF0ZUNvbnN0cnVjdG9yJDEoUHJvcGVydHksIG5hbWUpO1xuICBpbmhlcml0KFAsIFByb3BlcnR5LCBjcmVhdGVDbGFzc01ldGhvZHMkMShQcm9wZXJ0eSksIG1peGluKTtcbiAgcmV0dXJuIFA7XG59XG5cbnZhciBtaXhpbiQyNiA9IHtcbiAgX2hhbmRsZVByaW1hcnlWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodGhpcy5fbGFzdFNlY29uZGFyeSAhPT0gTk9USElORyAmJiB0aGlzLl9sYXN0U2Vjb25kYXJ5KSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlU2Vjb25kYXJ5RW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2xhc3RTZWNvbmRhcnkgPT09IE5PVEhJTkcgfHwgIXRoaXMuX2xhc3RTZWNvbmRhcnkpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDM0ID0gY3JlYXRlU3RyZWFtJDEoJ2ZpbHRlckJ5JywgbWl4aW4kMjYpO1xudmFyIFAkMjkgPSBjcmVhdGVQcm9wZXJ0eSQxKCdmaWx0ZXJCeScsIG1peGluJDI2KTtcblxuZnVuY3Rpb24gZmlsdGVyQnkocHJpbWFyeSwgc2Vjb25kYXJ5KSB7XG4gIHJldHVybiBuZXcgKHByaW1hcnkuX29mU2FtZVR5cGUoUyQzNCwgUCQyOSkpKHByaW1hcnksIHNlY29uZGFyeSk7XG59XG5cbnZhciBpZDIgPSBmdW5jdGlvbiAoXywgeCkge1xuICByZXR1cm4geDtcbn07XG5cbmZ1bmN0aW9uIHNhbXBsZWRCeShwYXNzaXZlLCBhY3RpdmUsIGNvbWJpbmF0b3IpIHtcbiAgdmFyIF9jb21iaW5hdG9yID0gY29tYmluYXRvciA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGNvbWJpbmF0b3IoYiwgYSk7XG4gIH0gOiBpZDI7XG4gIHJldHVybiBjb21iaW5lKFthY3RpdmVdLCBbcGFzc2l2ZV0sIF9jb21iaW5hdG9yKS5zZXROYW1lKHBhc3NpdmUsICdzYW1wbGVkQnknKTtcbn1cblxudmFyIG1peGluJDI3ID0ge1xuICBfaGFuZGxlUHJpbWFyeVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9sYXN0U2Vjb25kYXJ5ICE9PSBOT1RISU5HKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlU2Vjb25kYXJ5RW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2xhc3RTZWNvbmRhcnkgPT09IE5PVEhJTkcpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDM1ID0gY3JlYXRlU3RyZWFtJDEoJ3NraXBVbnRpbEJ5JywgbWl4aW4kMjcpO1xudmFyIFAkMzAgPSBjcmVhdGVQcm9wZXJ0eSQxKCdza2lwVW50aWxCeScsIG1peGluJDI3KTtcblxuZnVuY3Rpb24gc2tpcFVudGlsQnkocHJpbWFyeSwgc2Vjb25kYXJ5KSB7XG4gIHJldHVybiBuZXcgKHByaW1hcnkuX29mU2FtZVR5cGUoUyQzNSwgUCQzMCkpKHByaW1hcnksIHNlY29uZGFyeSk7XG59XG5cbnZhciBtaXhpbiQyOCA9IHtcbiAgX2hhbmRsZVNlY29uZGFyeVZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59O1xuXG52YXIgUyQzNiA9IGNyZWF0ZVN0cmVhbSQxKCd0YWtlVW50aWxCeScsIG1peGluJDI4KTtcbnZhciBQJDMxID0gY3JlYXRlUHJvcGVydHkkMSgndGFrZVVudGlsQnknLCBtaXhpbiQyOCk7XG5cbmZ1bmN0aW9uIHRha2VVbnRpbEJ5KHByaW1hcnksIHNlY29uZGFyeSkge1xuICByZXR1cm4gbmV3IChwcmltYXJ5Ll9vZlNhbWVUeXBlKFMkMzYsIFAkMzEpKShwcmltYXJ5LCBzZWNvbmRhcnkpO1xufVxuXG52YXIgbWl4aW4kMjkgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJGZsdXNoT25FbmQgPSBfcmVmLmZsdXNoT25FbmQsXG4gICAgICAgIGZsdXNoT25FbmQgPSBfcmVmJGZsdXNoT25FbmQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGZsdXNoT25FbmQ7XG5cbiAgICB0aGlzLl9idWZmID0gW107XG4gICAgdGhpcy5fZmx1c2hPbkVuZCA9IGZsdXNoT25FbmQ7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYnVmZiA9IG51bGw7XG4gIH0sXG4gIF9mbHVzaDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9idWZmICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5fYnVmZik7XG4gICAgICB0aGlzLl9idWZmID0gW107XG4gICAgfVxuICB9LFxuICBfaGFuZGxlUHJpbWFyeUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9mbHVzaE9uRW5kKSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH0sXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9wcmltYXJ5Lm9uQW55KHRoaXMuXyRoYW5kbGVQcmltYXJ5QW55KTtcbiAgICBpZiAodGhpcy5fYWxpdmUgJiYgdGhpcy5fc2Vjb25kYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9zZWNvbmRhcnkub25BbnkodGhpcy5fJGhhbmRsZVNlY29uZGFyeUFueSk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlUHJpbWFyeVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgfSxcbiAgX2hhbmRsZVNlY29uZGFyeVZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZmx1c2goKTtcbiAgfSxcbiAgX2hhbmRsZVNlY29uZGFyeUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fZmx1c2hPbkVuZCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMzcgPSBjcmVhdGVTdHJlYW0kMSgnYnVmZmVyQnknLCBtaXhpbiQyOSk7XG52YXIgUCQzMiA9IGNyZWF0ZVByb3BlcnR5JDEoJ2J1ZmZlckJ5JywgbWl4aW4kMjkpO1xuXG5mdW5jdGlvbiBidWZmZXJCeShwcmltYXJ5LCBzZWNvbmRhcnksIG9wdGlvbnMgLyogb3B0aW9uYWwgKi8pIHtcbiAgcmV0dXJuIG5ldyAocHJpbWFyeS5fb2ZTYW1lVHlwZShTJDM3LCBQJDMyKSkocHJpbWFyeSwgc2Vjb25kYXJ5LCBvcHRpb25zKTtcbn1cblxudmFyIG1peGluJDMwID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgX3JlZiRmbHVzaE9uRW5kID0gX3JlZi5mbHVzaE9uRW5kLFxuICAgICAgICBmbHVzaE9uRW5kID0gX3JlZiRmbHVzaE9uRW5kID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZiRmbHVzaE9uRW5kLFxuICAgICAgICBfcmVmJGZsdXNoT25DaGFuZ2UgPSBfcmVmLmZsdXNoT25DaGFuZ2UsXG4gICAgICAgIGZsdXNoT25DaGFuZ2UgPSBfcmVmJGZsdXNoT25DaGFuZ2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRmbHVzaE9uQ2hhbmdlO1xuXG4gICAgdGhpcy5fYnVmZiA9IFtdO1xuICAgIHRoaXMuX2ZsdXNoT25FbmQgPSBmbHVzaE9uRW5kO1xuICAgIHRoaXMuX2ZsdXNoT25DaGFuZ2UgPSBmbHVzaE9uQ2hhbmdlO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2J1ZmYgPSBudWxsO1xuICB9LFxuICBfZmx1c2g6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYnVmZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2J1ZmYpO1xuICAgICAgdGhpcy5fYnVmZiA9IFtdO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVByaW1hcnlFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fZmx1c2hPbkVuZCkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9LFxuICBfaGFuZGxlUHJpbWFyeVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgICBpZiAodGhpcy5fbGFzdFNlY29uZGFyeSAhPT0gTk9USElORyAmJiAhdGhpcy5fbGFzdFNlY29uZGFyeSkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVTZWNvbmRhcnlFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX2ZsdXNoT25FbmQgJiYgKHRoaXMuX2xhc3RTZWNvbmRhcnkgPT09IE5PVEhJTkcgfHwgdGhpcy5fbGFzdFNlY29uZGFyeSkpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVTZWNvbmRhcnlWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodGhpcy5fZmx1c2hPbkNoYW5nZSAmJiAheCkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG5cbiAgICAvLyBmcm9tIGRlZmF1bHQgX2hhbmRsZVNlY29uZGFyeVZhbHVlXG4gICAgdGhpcy5fbGFzdFNlY29uZGFyeSA9IHg7XG4gIH1cbn07XG5cbnZhciBTJDM4ID0gY3JlYXRlU3RyZWFtJDEoJ2J1ZmZlcldoaWxlQnknLCBtaXhpbiQzMCk7XG52YXIgUCQzMyA9IGNyZWF0ZVByb3BlcnR5JDEoJ2J1ZmZlcldoaWxlQnknLCBtaXhpbiQzMCk7XG5cbmZ1bmN0aW9uIGJ1ZmZlcldoaWxlQnkocHJpbWFyeSwgc2Vjb25kYXJ5LCBvcHRpb25zIC8qIG9wdGlvbmFsICovKSB7XG4gIHJldHVybiBuZXcgKHByaW1hcnkuX29mU2FtZVR5cGUoUyQzOCwgUCQzMykpKHByaW1hcnksIHNlY29uZGFyeSwgb3B0aW9ucyk7XG59XG5cbnZhciBmID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZmFsc2U7XG59O1xudmFyIHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gYXdhaXRpbmcoYSwgYikge1xuICB2YXIgcmVzdWx0ID0gbWVyZ2UoW21hcCQxKGEsIHQpLCBtYXAkMShiLCBmKV0pO1xuICByZXN1bHQgPSBza2lwRHVwbGljYXRlcyhyZXN1bHQpO1xuICByZXN1bHQgPSB0b1Byb3BlcnR5KHJlc3VsdCwgZik7XG4gIHJldHVybiByZXN1bHQuc2V0TmFtZShhLCAnYXdhaXRpbmcnKTtcbn1cblxudmFyIG1peGluJDMxID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICB2YXIgcmVzdWx0ID0gZm4oeCk7XG4gICAgaWYgKHJlc3VsdC5jb252ZXJ0KSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IocmVzdWx0LmVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMzkgPSBjcmVhdGVTdHJlYW0oJ3ZhbHVlc1RvRXJyb3JzJywgbWl4aW4kMzEpO1xudmFyIFAkMzQgPSBjcmVhdGVQcm9wZXJ0eSgndmFsdWVzVG9FcnJvcnMnLCBtaXhpbiQzMSk7XG5cbnZhciBkZWZGbiA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB7IGNvbnZlcnQ6IHRydWUsIGVycm9yOiB4IH07XG59O1xuXG5mdW5jdGlvbiB2YWx1ZXNUb0Vycm9ycyhvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZGbjtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQzOSwgUCQzNCkpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQzMiA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdmFyIHJlc3VsdCA9IGZuKHgpO1xuICAgIGlmIChyZXN1bHQuY29udmVydCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHJlc3VsdC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXRFcnJvcih4KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDQwID0gY3JlYXRlU3RyZWFtKCdlcnJvcnNUb1ZhbHVlcycsIG1peGluJDMyKTtcbnZhciBQJDM1ID0gY3JlYXRlUHJvcGVydHkoJ2Vycm9yc1RvVmFsdWVzJywgbWl4aW4kMzIpO1xuXG52YXIgZGVmRm4kMSA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB7IGNvbnZlcnQ6IHRydWUsIHZhbHVlOiB4IH07XG59O1xuXG5mdW5jdGlvbiBlcnJvcnNUb1ZhbHVlcyhvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZGbiQxO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDQwLCBQJDM1KSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDMzID0ge1xuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fZW1pdEVycm9yKHgpO1xuICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgfVxufTtcblxudmFyIFMkNDEgPSBjcmVhdGVTdHJlYW0oJ2VuZE9uRXJyb3InLCBtaXhpbiQzMyk7XG52YXIgUCQzNiA9IGNyZWF0ZVByb3BlcnR5KCdlbmRPbkVycm9yJywgbWl4aW4kMzMpO1xuXG5mdW5jdGlvbiBlbmRPbkVycm9yKG9icykge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQ0MSwgUCQzNikpKG9icyk7XG59XG5cbi8vIENyZWF0ZSBhIHN0cmVhbVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKCkgLT4gU3RyZWFtXG4vLyAobnVtYmVyLCBhbnkpIC0+IFN0cmVhbVxuLy8gKG51bWJlciwgYW55KSAtPiBTdHJlYW1cbi8vIChudW1iZXIsIEFycmF5PGFueT4pIC0+IFN0cmVhbVxuLy8gKG51bWJlciwgRnVuY3Rpb24pIC0+IFN0cmVhbVxuLy8gKG51bWJlciwgRnVuY3Rpb24pIC0+IFN0cmVhbVxuLy8gKEZ1bmN0aW9uKSAtPiBTdHJlYW1cbi8vIChGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyBUYXJnZXQgPSB7YWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lcn18e2FkZExpc3RlbmVyLCByZW1vdmVMaXN0ZW5lcn18e29uLCBvZmZ9XG4vLyAoVGFyZ2V0LCBzdHJpbmcsIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoRnVuY3Rpb24pIC0+IFN0cmVhbVxuLy8gQ3JlYXRlIGEgcHJvcGVydHlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIChhbnkpIC0+IFByb3BlcnR5XG4vLyAoYW55KSAtPiBQcm9wZXJ0eVxuLy8gQ29udmVydCBvYnNlcnZhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9Qcm9wZXJ0eSA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gdG9Qcm9wZXJ0eSh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtfFByb3BlcnR5KSAtPiBTdHJlYW1cbk9ic2VydmFibGUucHJvdG90eXBlLmNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjaGFuZ2VzKHRoaXMpO1xufTtcblxuLy8gSW50ZXJvcGVyYXRpb24gd2l0aCBvdGhlciBpbXBsaW1lbnRhdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIChQcm9taXNlKSAtPiBQcm9wZXJ0eVxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9taXNlXG5PYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAoUHJvbWlzZSkge1xuICByZXR1cm4gdG9Qcm9taXNlKHRoaXMsIFByb21pc2UpO1xufTtcblxuLy8gKEVTT2JzZXJ2YWJsZSkgLT4gU3RyZWFtXG4vLyAoU3RyZWFtfFByb3BlcnR5KSAtPiBFUzcgT2JzZXJ2YWJsZVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9FU09ic2VydmFibGUgPSB0b0VTT2JzZXJ2YWJsZTtcbk9ic2VydmFibGUucHJvdG90eXBlWyQkb2JzZXJ2YWJsZV0gPSB0b0VTT2JzZXJ2YWJsZTtcblxuLy8gTW9kaWZ5IGFuIG9ic2VydmFibGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbWFwJDEodGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmaWx0ZXIodGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudGFrZSA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiB0YWtlKHRoaXMsIG4pO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudGFrZUVycm9ycyA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiB0YWtlRXJyb3JzKHRoaXMsIG4pO1xufTtcblxuLy8gKFN0cmVhbSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudGFrZVdoaWxlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiB0YWtlV2hpbGUodGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbGFzdCh0aGlzKTtcbn07XG5cbi8vIChTdHJlYW0sIG51bWJlcikgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIG51bWJlcikgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnNraXAgPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gc2tpcCh0aGlzLCBuKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnNraXBXaGlsZSA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gc2tpcFdoaWxlKHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnNraXBEdXBsaWNhdGVzID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBza2lwRHVwbGljYXRlcyh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnxmYWxzZXksIGFueXx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnxmYWxzZXksIGFueXx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKGZuLCBzZWVkKSB7XG4gIHJldHVybiBkaWZmKHRoaXMsIGZuLCBzZWVkKTtcbn07XG5cbi8vIChTdHJlYW18UHJvcGVydHksIEZ1bmN0aW9uLCBhbnl8dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2NhbiA9IGZ1bmN0aW9uIChmbiwgc2VlZCkge1xuICByZXR1cm4gc2Nhbih0aGlzLCBmbiwgc2VlZCk7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmbGF0dGVuKHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW0sIG51bWJlcikgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIG51bWJlcikgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gKHdhaXQpIHtcbiAgcmV0dXJuIGRlbGF5KHRoaXMsIHdhaXQpO1xufTtcblxuLy8gT3B0aW9ucyA9IHtsZWFkaW5nOiBib29sZWFufHVuZGVmaW5lZCwgdHJhaWxpbmc6IGJvb2xlYW58dW5kZWZpbmVkfVxuLy8gKFN0cmVhbSwgbnVtYmVyLCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIG51bWJlciwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS50aHJvdHRsZSA9IGZ1bmN0aW9uICh3YWl0LCBvcHRpb25zKSB7XG4gIHJldHVybiB0aHJvdHRsZSh0aGlzLCB3YWl0LCBvcHRpb25zKTtcbn07XG5cbi8vIE9wdGlvbnMgPSB7aW1tZWRpYXRlOiBib29sZWFufHVuZGVmaW5lZH1cbi8vIChTdHJlYW0sIG51bWJlciwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBudW1iZXIsIE9wdGlvbnN8dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZGVib3VuY2UgPSBmdW5jdGlvbiAod2FpdCwgb3B0aW9ucykge1xuICByZXR1cm4gZGVib3VuY2UodGhpcywgd2FpdCwgb3B0aW9ucyk7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5tYXBFcnJvcnMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG1hcEVycm9ycyh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5maWx0ZXJFcnJvcnMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZpbHRlckVycm9ycyh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmlnbm9yZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlnbm9yZVZhbHVlcyh0aGlzKTtcbn07XG5cbi8vIChTdHJlYW0pIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5KSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuaWdub3JlRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaWdub3JlRXJyb3JzKHRoaXMpO1xufTtcblxuLy8gKFN0cmVhbSkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5pZ25vcmVFbmQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpZ25vcmVFbmQodGhpcyk7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9uKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYmVmb3JlRW5kID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBiZWZvcmVFbmQodGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyLCBudW1iZXJ8dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyLCBudW1iZXJ8dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2xpZGluZ1dpbmRvdyA9IGZ1bmN0aW9uIChtYXgsIG1pbikge1xuICByZXR1cm4gc2xpZGluZ1dpbmRvdyh0aGlzLCBtYXgsIG1pbik7XG59O1xuXG4vLyBPcHRpb25zID0ge2ZsdXNoT25FbmQ6IGJvb2xlYW58dW5kZWZpbmVkfVxuLy8gKFN0cmVhbSwgRnVuY3Rpb258ZmFsc2V5LCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufGZhbHNleSwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5idWZmZXJXaGlsZSA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xuICByZXR1cm4gYnVmZmVyV2hpbGUodGhpcywgZm4sIG9wdGlvbnMpO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYnVmZmVyV2l0aENvdW50ID0gZnVuY3Rpb24gKGNvdW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBidWZmZXJXaGlsZSQxKHRoaXMsIGNvdW50LCBvcHRpb25zKTtcbn07XG5cbi8vIE9wdGlvbnMgPSB7Zmx1c2hPbkVuZDogYm9vbGVhbnx1bmRlZmluZWR9XG4vLyAoU3RyZWFtLCBudW1iZXIsIG51bWJlciwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBudW1iZXIsIG51bWJlciwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5idWZmZXJXaXRoVGltZU9yQ291bnQgPSBmdW5jdGlvbiAod2FpdCwgY291bnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJ1ZmZlcldpdGhUaW1lT3JDb3VudCh0aGlzLCB3YWl0LCBjb3VudCwgb3B0aW9ucyk7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9uKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudHJhbnNkdWNlID0gZnVuY3Rpb24gKHRyYW5zZHVjZXIpIHtcbiAgcmV0dXJuIHRyYW5zZHVjZSh0aGlzLCB0cmFuc2R1Y2VyKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9uKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb24pIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS53aXRoSGFuZGxlciA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gd2l0aEhhbmRsZXIodGhpcywgZm4pO1xufTtcblxuLy8gQ29tYmluZSBvYnNlcnZhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKEFycmF5PFN0cmVhbXxQcm9wZXJ0eT4sIEZ1bmN0aW9ufHVuZGVmaWVuZCkgLT4gU3RyZWFtXG4vLyAoQXJyYXk8U3RyZWFtfFByb3BlcnR5PiwgQXJyYXk8U3RyZWFtfFByb3BlcnR5PiwgRnVuY3Rpb258dW5kZWZpZW5kKSAtPiBTdHJlYW1cbk9ic2VydmFibGUucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbiAob3RoZXIsIGNvbWJpbmF0b3IpIHtcbiAgcmV0dXJuIGNvbWJpbmUoW3RoaXMsIG90aGVyXSwgY29tYmluYXRvcik7XG59O1xuXG4vLyAoQXJyYXk8U3RyZWFtfFByb3BlcnR5PiwgRnVuY3Rpb258dW5kZWZpZW5kKSAtPiBTdHJlYW1cbk9ic2VydmFibGUucHJvdG90eXBlLnppcCA9IGZ1bmN0aW9uIChvdGhlciwgY29tYmluYXRvcikge1xuICByZXR1cm4gemlwKFt0aGlzLCBvdGhlcl0sIGNvbWJpbmF0b3IpO1xufTtcblxuLy8gKEFycmF5PFN0cmVhbXxQcm9wZXJ0eT4pIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgcmV0dXJuIG1lcmdlKFt0aGlzLCBvdGhlcl0pO1xufTtcblxuLy8gKEFycmF5PFN0cmVhbXxQcm9wZXJ0eT4pIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gIHJldHVybiBjb25jYXQkMShbdGhpcywgb3RoZXJdKTtcbn07XG5cbi8vICgpIC0+IFBvb2xcbnZhciBwb29sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvb2woKTtcbn07XG5cbi8vIChGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyBPcHRpb25zID0ge2NvbmN1ckxpbTogbnVtYmVyfHVuZGVmaW5lZCwgcXVldWVMaW06IG51bWJlcnx1bmRlZmluZWQsIGRyb3A6ICdvbGQnfCduZXcnfHVuZGVmaWVuZH1cbi8vIChTdHJlYW18UHJvcGVydHksIEZ1bmN0aW9ufGZhbHNleSwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IEZsYXRNYXAodGhpcywgZm4pLnNldE5hbWUodGhpcywgJ2ZsYXRNYXAnKTtcbn07XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwTGF0ZXN0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgRmxhdE1hcCh0aGlzLCBmbiwgeyBjb25jdXJMaW06IDEsIGRyb3A6ICdvbGQnIH0pLnNldE5hbWUodGhpcywgJ2ZsYXRNYXBMYXRlc3QnKTtcbn07XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwRmlyc3QgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBGbGF0TWFwKHRoaXMsIGZuLCB7IGNvbmN1ckxpbTogMSB9KS5zZXROYW1lKHRoaXMsICdmbGF0TWFwRmlyc3QnKTtcbn07XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwQ29uY2F0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgRmxhdE1hcCh0aGlzLCBmbiwgeyBxdWV1ZUxpbTogLTEsIGNvbmN1ckxpbTogMSB9KS5zZXROYW1lKHRoaXMsICdmbGF0TWFwQ29uY2F0Jyk7XG59O1xuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcENvbmN1ckxpbWl0ID0gZnVuY3Rpb24gKGZuLCBsaW1pdCkge1xuICByZXR1cm4gbmV3IEZsYXRNYXAodGhpcywgZm4sIHsgcXVldWVMaW06IC0xLCBjb25jdXJMaW06IGxpbWl0IH0pLnNldE5hbWUodGhpcywgJ2ZsYXRNYXBDb25jdXJMaW1pdCcpO1xufTtcblxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb258ZmFsc2V5KSAtPiBTdHJlYW1cbk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBFcnJvcnMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBGbGF0TWFwRXJyb3JzKHRoaXMsIGZuKS5zZXROYW1lKHRoaXMsICdmbGF0TWFwRXJyb3JzJyk7XG59O1xuXG4vLyBDb21iaW5lIHR3byBvYnNlcnZhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKFN0cmVhbSwgU3RyZWFtfFByb3BlcnR5KSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5KSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmlsdGVyQnkgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgcmV0dXJuIGZpbHRlckJ5KHRoaXMsIG90aGVyKTtcbn07XG5cbi8vIChTdHJlYW0sIFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpZW5kKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmllbmQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5zYW1wbGVkQnkgPSBmdW5jdGlvbiAob3RoZXIsIGNvbWJpbmF0b3IpIHtcbiAgcmV0dXJuIHNhbXBsZWRCeSh0aGlzLCBvdGhlciwgY29tYmluYXRvcik7XG59O1xuXG4vLyAoU3RyZWFtLCBTdHJlYW18UHJvcGVydHkpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBTdHJlYW18UHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5za2lwVW50aWxCeSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICByZXR1cm4gc2tpcFVudGlsQnkodGhpcywgb3RoZXIpO1xufTtcblxuLy8gKFN0cmVhbSwgU3RyZWFtfFByb3BlcnR5KSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5KSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudGFrZVVudGlsQnkgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgcmV0dXJuIHRha2VVbnRpbEJ5KHRoaXMsIG90aGVyKTtcbn07XG5cbi8vIE9wdGlvbnMgPSB7Zmx1c2hPbkVuZDogYm9vbGVhbnx1bmRlZmluZWR9XG4vLyAoU3RyZWFtLCBTdHJlYW18UHJvcGVydHksIE9wdGlvbnN8dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5LCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmJ1ZmZlckJ5ID0gZnVuY3Rpb24gKG90aGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBidWZmZXJCeSh0aGlzLCBvdGhlciwgb3B0aW9ucyk7XG59O1xuXG4vLyBPcHRpb25zID0ge2ZsdXNoT25FbmQ6IGJvb2xlYW58dW5kZWZpbmVkfVxuLy8gKFN0cmVhbSwgU3RyZWFtfFByb3BlcnR5LCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIFN0cmVhbXxQcm9wZXJ0eSwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5idWZmZXJXaGlsZUJ5ID0gZnVuY3Rpb24gKG90aGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBidWZmZXJXaGlsZUJ5KHRoaXMsIG90aGVyLCBvcHRpb25zKTtcbn07XG5cbi8vIERlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBERVBSRUNBVElPTl9XQVJOSU5HUyA9IHRydWU7XG5mdW5jdGlvbiBkaXNzYWJsZURlcHJlY2F0aW9uV2FybmluZ3MoKSB7XG4gIERFUFJFQ0FUSU9OX1dBUk5JTkdTID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gIGlmIChERVBSRUNBVElPTl9XQVJOSU5HUyAmJiBjb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLndhcm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbXNnMiA9ICdcXG5IZXJlIGlzIGFuIEVycm9yIG9iamVjdCBmb3IgeW91IGNvbnRhaW5pbmcgdGhlIGNhbGwgc3RhY2s6JztcbiAgICBjb25zb2xlLndhcm4obXNnLCBtc2cyLCBuZXcgRXJyb3IoKSk7XG4gIH1cbn1cblxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5KSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYXdhaXRpbmcgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgd2FybignWW91IGFyZSB1c2luZyBkZXByZWNhdGVkIC5hd2FpdGluZygpIG1ldGhvZCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ycG9taW5vdi9rZWZpci9pc3N1ZXMvMTQ1Jyk7XG4gIHJldHVybiBhd2FpdGluZyh0aGlzLCBvdGhlcik7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS52YWx1ZXNUb0Vycm9ycyA9IGZ1bmN0aW9uIChmbikge1xuICB3YXJuKCdZb3UgYXJlIHVzaW5nIGRlcHJlY2F0ZWQgLnZhbHVlc1RvRXJyb3JzKCkgbWV0aG9kLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Jwb21pbm92L2tlZmlyL2lzc3Vlcy8xNDknKTtcbiAgcmV0dXJuIHZhbHVlc1RvRXJyb3JzKHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmVycm9yc1RvVmFsdWVzID0gZnVuY3Rpb24gKGZuKSB7XG4gIHdhcm4oJ1lvdSBhcmUgdXNpbmcgZGVwcmVjYXRlZCAuZXJyb3JzVG9WYWx1ZXMoKSBtZXRob2QsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcnBvbWlub3Yva2VmaXIvaXNzdWVzLzE0OScpO1xuICByZXR1cm4gZXJyb3JzVG9WYWx1ZXModGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5lbmRPbkVycm9yID0gZnVuY3Rpb24gKCkge1xuICB3YXJuKCdZb3UgYXJlIHVzaW5nIGRlcHJlY2F0ZWQgLmVuZE9uRXJyb3IoKSBtZXRob2QsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcnBvbWlub3Yva2VmaXIvaXNzdWVzLzE1MCcpO1xuICByZXR1cm4gZW5kT25FcnJvcih0aGlzKTtcbn07XG5cbi8vIEV4cG9ydHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBLZWZpciA9IHtcbiAgT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZSxcbiAgU3RyZWFtOiBTdHJlYW0sXG4gIFByb3BlcnR5OiBQcm9wZXJ0eSxcbiAgbmV2ZXI6IG5ldmVyLFxuICBsYXRlcjogbGF0ZXIsXG4gIGludGVydmFsOiBpbnRlcnZhbCxcbiAgc2VxdWVudGlhbGx5OiBzZXF1ZW50aWFsbHksXG4gIGZyb21Qb2xsOiBmcm9tUG9sbCxcbiAgd2l0aEludGVydmFsOiB3aXRoSW50ZXJ2YWwsXG4gIGZyb21DYWxsYmFjazogZnJvbUNhbGxiYWNrLFxuICBmcm9tTm9kZUNhbGxiYWNrOiBmcm9tTm9kZUNhbGxiYWNrLFxuICBmcm9tRXZlbnRzOiBmcm9tRXZlbnRzLFxuICBzdHJlYW06IHN0cmVhbSxcbiAgY29uc3RhbnQ6IGNvbnN0YW50LFxuICBjb25zdGFudEVycm9yOiBjb25zdGFudEVycm9yLFxuICBmcm9tUHJvbWlzZTogZnJvbVByb21pc2UsXG4gIGZyb21FU09ic2VydmFibGU6IGZyb21FU09ic2VydmFibGUsXG4gIGNvbWJpbmU6IGNvbWJpbmUsXG4gIHppcDogemlwLFxuICBtZXJnZTogbWVyZ2UsXG4gIGNvbmNhdDogY29uY2F0JDEsXG4gIFBvb2w6IFBvb2wsXG4gIHBvb2w6IHBvb2wsXG4gIHJlcGVhdDogcmVwZWF0LFxuICBzdGF0aWNMYW5kOiBzdGF0aWNMYW5kXG59O1xuXG5LZWZpci5LZWZpciA9IEtlZmlyO1xuXG5leHBvcnRzLmRpc3NhYmxlRGVwcmVjYXRpb25XYXJuaW5ncyA9IGRpc3NhYmxlRGVwcmVjYXRpb25XYXJuaW5ncztcbmV4cG9ydHMuS2VmaXIgPSBLZWZpcjtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG5leHBvcnRzLlN0cmVhbSA9IFN0cmVhbTtcbmV4cG9ydHMuUHJvcGVydHkgPSBQcm9wZXJ0eTtcbmV4cG9ydHMubmV2ZXIgPSBuZXZlcjtcbmV4cG9ydHMubGF0ZXIgPSBsYXRlcjtcbmV4cG9ydHMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbmV4cG9ydHMuc2VxdWVudGlhbGx5ID0gc2VxdWVudGlhbGx5O1xuZXhwb3J0cy5mcm9tUG9sbCA9IGZyb21Qb2xsO1xuZXhwb3J0cy53aXRoSW50ZXJ2YWwgPSB3aXRoSW50ZXJ2YWw7XG5leHBvcnRzLmZyb21DYWxsYmFjayA9IGZyb21DYWxsYmFjaztcbmV4cG9ydHMuZnJvbU5vZGVDYWxsYmFjayA9IGZyb21Ob2RlQ2FsbGJhY2s7XG5leHBvcnRzLmZyb21FdmVudHMgPSBmcm9tRXZlbnRzO1xuZXhwb3J0cy5zdHJlYW0gPSBzdHJlYW07XG5leHBvcnRzLmNvbnN0YW50ID0gY29uc3RhbnQ7XG5leHBvcnRzLmNvbnN0YW50RXJyb3IgPSBjb25zdGFudEVycm9yO1xuZXhwb3J0cy5mcm9tUHJvbWlzZSA9IGZyb21Qcm9taXNlO1xuZXhwb3J0cy5mcm9tRVNPYnNlcnZhYmxlID0gZnJvbUVTT2JzZXJ2YWJsZTtcbmV4cG9ydHMuY29tYmluZSA9IGNvbWJpbmU7XG5leHBvcnRzLnppcCA9IHppcDtcbmV4cG9ydHMubWVyZ2UgPSBtZXJnZTtcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0JDE7XG5leHBvcnRzLlBvb2wgPSBQb29sO1xuZXhwb3J0cy5wb29sID0gcG9vbDtcbmV4cG9ydHMucmVwZWF0ID0gcmVwZWF0O1xuZXhwb3J0cy5zdGF0aWNMYW5kID0gc3RhdGljTGFuZDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEtlZmlyO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2NoYXJsZXMvcHJvamVjdHMvbm9kZWpzL3N5bmstanMvbm9kZV9tb2R1bGVzL2tlZmlyL2Rpc3Qva2VmaXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFbmRwb2ludCB9IGZyb20gJ3N5bmstanMnO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIG1haW4gaW50ZXJmYWNlIHRoYXQgcmVjZWl2ZXMgUlBDcyBmcm9tIHRoZSBzZXJ2ZXIuIEFwcEVuZHBvaW50XG4gKiBtdXN0IGJlIGNyZWF0ZWQgYnkgYW4gQXBwIGluc3RhbmNlIGluIHRoZSBBcHAgY29uc3RydWN0b3IuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEVuZHBvaW50IGV4dGVuZHMgRW5kcG9pbnQge1xuICAvKipcbiAgICogQHBhcmFtIHtBcHB9IGFwcCAtIFRoZSBhZXRoZXIgYXBwIHRoYXQgd2UgYXJlIGxpc3RlbmluZyB0b1xuICAgKi9cbiAgY29uc3RydWN0b3IoYXBwKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0FwcEVuZHBvaW50LmpzIiwiLyoqXG4gKiBFeGFtcGxlIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBwcm92aWRlZCBieSBzeW5rIHNlcnZlclxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgLSBpbml0aWFsIHN0YXRlIHByb3ZpZGVkIGJ5IHN5bmsgc2VydmVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihrZXksIHN0YXRlLCBzeW5rT2JqZWN0cykge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudFByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRQcmUpO1xuICAgIHRoaXMuZWxlbWVudENvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2RlJyk7XG4gICAgdGhpcy5lbGVtZW50UHJlLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudENvZGUpO1xuICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBrZXksIHR5cGU6ICdOb3RlJyB9O1xuXG4gICAgbGV0IHYgPSBzdGF0ZS52ZWxvY2l0eSArIDU7XG5cbiAgICB2ID0gdiA8IDAgPyAwIDogdjtcbiAgICB2ID0gdiA+IDEyNyA/IDEyNyA6IHY7XG4gICAgdiA9IE1hdGguZmxvb3IodiAqIDIpO1xuICAgIHYgPSB2LnRvU3RyaW5nKDE2KTtcblxuICAgIHRoaXMuY29sb3IgPSBgIzAwMDAke3Z9YDtcblxuICAgIC8vIFNldCBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHByb3ZpZGVkIGJ5IHRoZSAnc3RhdGUnIGFyZ3VtZW50XG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQpIHRoaXMudXBkYXRlKHN0YXRlKTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSAtIGRpZmYgcGFzc2VkIGJ5IHRoZSBzeW5rIHNlcnZlclxuICAgKi9cbiAgdXBkYXRlKHN0YXRlKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBzdGF0ZSk7XG5cbiAgICAvLyB1cGRhdGUgY29sb3JcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoJ251bWJlcicpKSB0aGlzLm51bWJlciA9IHN0YXRlLm51bWJlcjtcblxuICAgIC8vIHVwZGF0ZSB0ZXh0XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUsIG51bGwsICcgICcpO1xuXG4gICAgLy8gdGhpcy5lbGVtZW50Q29kZS5pbm5lclRleHQgPSBgJHtqc29ufVxcbiR7dGhpcy5jb2xvcn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoaXMgb2JqZWN0IGxlYXZlcyBvdXIgc3Vic2NyaXB0aW9uIGFyZWEsIG9yIGlzIHJlbW92ZWQgZnJvbVxuICAgKiB0aGUgc3luayBzZXJ2ZXIuXG4gICAqL1xuICB0ZWFyZG93bigpIHtcbiAgICB0aGlzLmNvbG9yID0gJyMwMDAwMDAnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4R3JvdyA9IDAuMDAwMDAxO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9LCA0MDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvci5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2YWwgLSBzdHJpbmcgcmVwcmVzZW50aW5nIGNvbG9yLCBvciBycmdnYmIgaW50ZWdlclxuICAgKiAgICAgICAgbnVtYmVyXG4gICAqL1xuICBzZXQgY29sb3IodmFsKSB7XG4gICAgbGV0IGNvbG9yO1xuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSBjb2xvciA9IHZhbDtcbiAgICBlbHNlIHJldHVybjsgLy8gZG8gbm90aGluZyBpZiB2YWwgaXMgbm90IHN0cmluZyBvciBudW1iZXI7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIH1cblxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9Ob3RlLmpzIiwiaW1wb3J0IGhlbHAgZnJvbSAnbWlkaS1oZWxwJztcbmltcG9ydCBFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgYXJvdW5kIG1pZGkgQVBJLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaWRpZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhICdNaWRpZXInIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vayA9IGZhbHNlO1xuICAgIHRoaXMubWlkaSA9IG51bGw7XG4gICAgdGhpcy5zdGF0dXMgPSAnbWlkaSBub3Qgc3VwcG9ydGVkJztcbiAgICB0aGlzLnBhcnNlcnMgPSBbXTtcbiAgICB0aGlzLmlucHV0cyA9IFtdO1xuXG4gICAgaWYgKCFuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3MpIHJldHVybjtcblxuICAgIG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2VzcygpLnRoZW4oKG1pZGkpID0+IHtcbiAgICAgIHRoaXMub2sgPSB0cnVlO1xuICAgICAgdGhpcy5taWRpID0gbWlkaTtcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3JlYWR5JztcbiAgICAgIHRoaXMucGVkYWwgPSBmYWxzZTsgLy8gb25seSBvbmUgcGVkYWwgZm9yIG1hbnkgY2hhbm5lbHMvZGV2aWNlc1xuXG4gICAgICBmb3IgKGNvbnN0IFtpZCwgaW5wdXRdIG9mIG1pZGkuaW5wdXRzKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBoZWxwLk1pZGlQYXJzZXIoKTtcblxuICAgICAgICBpbnB1dC5vbm1pZGltZXNzYWdlID0gKG1zZykgPT4ge1xuICAgICAgICAgIHBhcnNlci5wYXJzZUFycmF5KG1zZy5kYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBwYXJzZXIub24oJ25vdGVPbicsIChuLCB2LCBjKSA9PiB7XG4gICAgICAgICAgaWYgKHYgPT09IDApIHRoaXMuZW1pdCgnbm90ZU9mZicsIG4sIHYsIGMpO1xuICAgICAgICAgIGVsc2UgdGhpcy5lbWl0KCdub3RlT24nLCBuLCB2LCBjKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFyc2VyLm9uKCdub3RlT2ZmJywgKG4sIHYsIGMpID0+IHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ25vdGVPZmYnLCBuLCB2LCBjKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFyc2VyLm9uKCdjYycsIChuLCB2LCBjKSA9PiB7XG4gICAgICAgICAgaWYgKG4gPT09IDY0KSB7XG4gICAgICAgICAgICBpZiAodiA+PSA2NCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wZWRhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3BlZGFsJywgdHJ1ZSwgYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnBlZGFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZWRhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncGVkYWwnLCBmYWxzZSwgYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFyc2Vycy5wdXNoKHBhcnNlcik7XG4gICAgICAgIHRoaXMuaW5wdXRzLnB1c2goaW5wdXQpOyAgXG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCdtaWRpIGlzIHJlYWR5IScpO1xuICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzID0gcmVhc29uO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvTWlkaWVyLmpzIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgTWlkaVBhcnNlciwgYnlTdGF0dXMsIGV2ZW50cywgbWlkaVR5cGVzLFxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG4gIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuXG4gIG1pZGlUeXBlcyA9IHJlcXVpcmUoJy4vbWlkaS10eXBlcycpO1xuXG4gIGJ5U3RhdHVzID0gbWlkaVR5cGVzLmJ5U3RhdHVzO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbWlkaVR5cGVzO1xuXG4gIE1pZGlQYXJzZXIgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1pZGlQYXJzZXIsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBNaWRpUGFyc2VyKCkge1xuICAgICAgdGhpcy5fbWlkaU1zZ1R5cGUgPSB2b2lkIDA7XG4gICAgICB0aGlzLl9zeXNleCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWlkaSA9IHtcbiAgICAgICAgc2l6ZTogdm9pZCAwLFxuICAgICAgICBuaWJibGUxOiB2b2lkIDAsXG4gICAgICAgIG5pYmJsZTI6IHZvaWQgMCxcbiAgICAgICAgc3RhdHVzOiB2b2lkIDAsXG4gICAgICAgIGZpcnN0Qnl0ZTogdm9pZCAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIE1pZGlQYXJzZXIucHJvdG90eXBlLnBhcnNlQnl0ZSA9IGZ1bmN0aW9uKGJ5dGUpIHtcbiAgICAgIGlmIChieXRlICYgMTI4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZVN0YXR1cyhieXRlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbWlkaS5maXJzdEJ5dGUgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VGaXJzdChieXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZVNlY29uZChieXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTWlkaVBhcnNlci5wcm90b3R5cGUucGFyc2VBcnJheSA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICB2YXIgYnl0ZSwgX2ksIF9sZW4sIF9yZXN1bHRzO1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gaW5wdXQubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgYnl0ZSA9IGlucHV0W19pXTtcbiAgICAgICAgX3Jlc3VsdHMucHVzaCh0aGlzLnBhcnNlQnl0ZShieXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgfTtcblxuICAgIE1pZGlQYXJzZXIucHJvdG90eXBlLnBhcnNlQnl0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBieXRlLCBfaSwgX2xlbiwgX3Jlc3VsdHM7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgYnl0ZSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5wYXJzZUJ5dGUoYnl0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBNaWRpUGFyc2VyLnByb3RvdHlwZS5fcGFyc2VTdGF0dXMgPSBmdW5jdGlvbihieXRlKSB7XG4gICAgICB0aGlzLl9taWRpLnN0YXR1cyA9IGJ5dGU7XG4gICAgICB0aGlzLl9taWRpLm5pYmJsZTEgPSBieXRlICYgMHhGMDtcbiAgICAgIHRoaXMuX21pZGkubmliYmxlMiA9IGJ5dGUgJiAweDBGO1xuICAgICAgdGhpcy5fbWlkaU1zZ1R5cGUgPSBieVN0YXR1c1t0aGlzLl9taWRpLm5pYmJsZTFdO1xuICAgICAgaWYgKCF0aGlzLl9taWRpTXNnVHlwZSkge1xuICAgICAgICB0aGlzLl9taWRpTXNnVHlwZSA9IGJ5U3RhdHVzW2J5dGVdO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWlkaS5maXJzdEJ5dGUgPSB2b2lkIDA7XG4gICAgICBpZiAoIXRoaXMuX21pZGlNc2dUeXBlKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnbXlzdGVyeVN0YXR1c0J5dGUnLCBieXRlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX21pZGlNc2dUeXBlLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCh0aGlzLl9taWRpTXNnVHlwZS5uYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTWlkaVBhcnNlci5wcm90b3R5cGUuX3BhcnNlRmlyc3QgPSBmdW5jdGlvbihieXRlKSB7XG4gICAgICBpZiAoIXRoaXMuX21pZGlNc2dUeXBlKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnbXlzdGVyeURhdGFCeXRlJywgYnl0ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9taWRpTXNnVHlwZS5zaXplID09PSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9taWRpTXNnVHlwZS5oYXNDaGFubmVsKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KHRoaXMuX21pZGlNc2dUeXBlLm5hbWUsIGJ5dGUsIHRoaXMuX21pZGkubmliYmxlMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21pZGkuc3RhdHVzID0gdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pZGkuZmlyc3RCeXRlID0gYnl0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTWlkaVBhcnNlci5wcm90b3R5cGUuX3BhcnNlU2Vjb25kID0gZnVuY3Rpb24oYnl0ZSkge1xuICAgICAgaWYgKHRoaXMuX21pZGlNc2dUeXBlLmlzRm91cnRlZW5CaXQpIHtcbiAgICAgICAgdGhpcy5lbWl0KHRoaXMuX21pZGlNc2dUeXBlLm5hbWUsIHRoaXMuX21pZGkuZmlyc3RCeXRlICsgKGJ5dGUgKiAxMjgpLCB0aGlzLl9taWRpTXNnVHlwZS5oYXNDaGFubmVsID8gdGhpcy5fbWlkaS5uaWJibGUyIDogdm9pZCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLl9taWRpTXNnVHlwZS5uYW1lLCB0aGlzLl9taWRpLmZpcnN0Qnl0ZSwgYnl0ZSwgdGhpcy5fbWlkaS5uaWJibGUyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21pZGkuc3RhdHVzID0gdm9pZCAwO1xuICAgICAgcmV0dXJuIHRoaXMuX21pZGkuZmlyc3RCeXRlID0gdm9pZCAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gTWlkaVBhcnNlcjtcblxuICB9KShldmVudHMuRXZlbnRFbWl0dGVyKTtcblxuICBtb2R1bGUuZXhwb3J0cy5NaWRpUGFyc2VyID0gTWlkaVBhcnNlcjtcblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21pZGktaGVscC9vdXQvbGliL21pZGktaGVscC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgTWlkaU1zZ1R5cGUsIGJ5U3RhdHVzLCBuYW1lLCB0eXBlLCB0eXBlcztcblxuICBtb2R1bGUuZXhwb3J0cy5ieVN0YXR1cyA9IGJ5U3RhdHVzID0gW107XG5cbiAgbW9kdWxlLmV4cG9ydHMudHlwZXMgPSB0eXBlcyA9IHt9O1xuXG4gIE1pZGlNc2dUeXBlID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIE1pZGlNc2dUeXBlKG5hbWUsIHNpemUsIGhhc0NoYW5uZWwsIHN0YXR1cywgaXNGb3VydGVlbkJpdCkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICB0aGlzLmhhc0NoYW5uZWwgPSBoYXNDaGFubmVsO1xuICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICB0aGlzLmlzRm91cnRlZW5CaXQgPSBpc0ZvdXJ0ZWVuQml0ICE9IG51bGwgPyBpc0ZvdXJ0ZWVuQml0IDogZmFsc2U7XG4gICAgICBieVN0YXR1c1tzdGF0dXNdID0gdGhpcztcbiAgICAgIHR5cGVzW25hbWVdID0gdGhpcztcbiAgICB9XG5cbiAgICBNaWRpTXNnVHlwZS5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uKG9uZSwgdHdvLCB0aHJlZSkge1xuICAgICAgaWYgKHRoaXMuaXNGb3VydGVlbkJpdCkge1xuICAgICAgICBvbmUgPSBvbmUgfHwgODE5MjtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1cyArICh0d28gfHwgMCksIG9uZSAlIDEyOCwgTWF0aC5mbG9vcihvbmUgLyAxMjgpXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1cyArICh0aHJlZSB8fCAwKSwgb25lLCB0d29dO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMSkge1xuICAgICAgICBpZiAodGhpcy5oYXNDaGFubmVsKSB7XG4gICAgICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1cyArICh0d28gfHwgMCksIG9uZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1cywgb25lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuc3RhdHVzXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIE1pZGlNc2dUeXBlO1xuXG4gIH0pKCk7XG5cbiAgbmV3IE1pZGlNc2dUeXBlKCdub3RlT24nLCAyLCB0cnVlLCAweDkwKTtcblxuICBuZXcgTWlkaU1zZ1R5cGUoJ25vdGVPZmYnLCAyLCB0cnVlLCAweDgwKTtcblxuICBuZXcgTWlkaU1zZ1R5cGUoJ3BpdGNoQmVuZCcsIDIsIHRydWUsIDB4RTAsIHRydWUpO1xuXG4gIG5ldyBNaWRpTXNnVHlwZSgnY2MnLCAyLCB0cnVlLCAweEIwKTtcblxuICBuZXcgTWlkaU1zZ1R5cGUoJ2NoYW5uZWxQcmVzc3VyZScsIDEsIHRydWUsIDB4RDApO1xuXG4gIG5ldyBNaWRpTXNnVHlwZSgnY2xvY2snLCAwLCBmYWxzZSwgMHhGOCk7XG5cbiAgbmV3IE1pZGlNc2dUeXBlKCdzdGFydCcsIDAsIGZhbHNlLCAweEZBKTtcblxuICBuZXcgTWlkaU1zZ1R5cGUoJ3N0b3AnLCAwLCBmYWxzZSwgMHhGQyk7XG5cbiAgbmV3IE1pZGlNc2dUeXBlKCdjb250aW51ZScsIDAsIGZhbHNlLCAweGZCKTtcblxuICBuZXcgTWlkaU1zZ1R5cGUoJ3NvbmdQb3NpdGlvbicsIDIsIGZhbHNlLCAweEYyLCB0cnVlKTtcblxuICBmb3IgKG5hbWUgaW4gdHlwZXMpIHtcbiAgICB0eXBlID0gdHlwZXNbbmFtZV07XG4gICAgbW9kdWxlLmV4cG9ydHNbbmFtZV0gPSB0eXBlLnRvQXJyYXkuYmluZCh0eXBlKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWlkaS1oZWxwL291dC9saWIvbWlkaS10eXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==