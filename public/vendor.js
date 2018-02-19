/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 2:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(0);
module.exports = __webpack_require__(23);


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

var TWEEN = TWEEN || (function () {

	var _tweens = [];

	return {

		getAll: function () {

			return _tweens;

		},

		removeAll: function () {

			_tweens = [];

		},

		add: function (tween) {

			_tweens.push(tween);

		},

		remove: function (tween) {

			var i = _tweens.indexOf(tween);

			if (i !== -1) {
				_tweens.splice(i, 1);
			}

		},

		update: function (time, preserve) {

			if (_tweens.length === 0) {
				return false;
			}

			var i = 0;

			time = time !== undefined ? time : TWEEN.now();

			while (i < _tweens.length) {

				if (_tweens[i].update(time) || preserve) {
					i++;
				} else {
					_tweens.splice(i, 1);
				}

			}

			return true;

		}
	};

})();


// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof (window) === 'undefined' && typeof (process) !== 'undefined') {
	TWEEN.now = function () {
		var time = process.hrtime();

		// Convert [seconds, nanoseconds] to milliseconds.
		return time[0] * 1000 + time[1] / 1000000;
	};
}
// In a browser, use window.performance.now if it is available.
else if (typeof (window) !== 'undefined' &&
         window.performance !== undefined &&
		 window.performance.now !== undefined) {
	// This must be bound, because directly assigning this function
	// leads to an invocation exception in Chrome.
	TWEEN.now = window.performance.now.bind(window.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
	TWEEN.now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
	TWEEN.now = function () {
		return new Date().getTime();
	};
}


TWEEN.Tween = function (object) {

	var _object = object;
	var _valuesStart = {};
	var _valuesEnd = {};
	var _valuesStartRepeat = {};
	var _duration = 1000;
	var _repeat = 0;
	var _repeatDelayTime;
	var _yoyo = false;
	var _isPlaying = false;
	var _reversed = false;
	var _delayTime = 0;
	var _startTime = null;
	var _easingFunction = TWEEN.Easing.Linear.None;
	var _interpolationFunction = TWEEN.Interpolation.Linear;
	var _chainedTweens = [];
	var _onStartCallback = null;
	var _onStartCallbackFired = false;
	var _onUpdateCallback = null;
	var _onCompleteCallback = null;
	var _onStopCallback = null;

	this.to = function (properties, duration) {

		_valuesEnd = properties;

		if (duration !== undefined) {
			_duration = duration;
		}

		return this;

	};

	this.start = function (time) {

		TWEEN.add(this);

		_isPlaying = true;

		_onStartCallbackFired = false;

		_startTime = time !== undefined ? time : TWEEN.now();
		_startTime += _delayTime;

		for (var property in _valuesEnd) {

			// Check if an Array was provided as property value
			if (_valuesEnd[property] instanceof Array) {

				if (_valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);

			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (_object[property] === undefined) {
				continue;
			}

			// Save the starting value.
			_valuesStart[property] = _object[property];

			if ((_valuesStart[property] instanceof Array) === false) {
				_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			_valuesStartRepeat[property] = _valuesStart[property] || 0;

		}

		return this;

	};

	this.stop = function () {

		if (!_isPlaying) {
			return this;
		}

		TWEEN.remove(this);
		_isPlaying = false;

		if (_onStopCallback !== null) {
			_onStopCallback.call(_object, _object);
		}

		this.stopChainedTweens();
		return this;

	};

	this.end = function () {

		this.update(_startTime + _duration);
		return this;

	};

	this.stopChainedTweens = function () {

		for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
			_chainedTweens[i].stop();
		}

	};

	this.delay = function (amount) {

		_delayTime = amount;
		return this;

	};

	this.repeat = function (times) {

		_repeat = times;
		return this;

	};

	this.repeatDelay = function (amount) {

		_repeatDelayTime = amount;
		return this;

	};

	this.yoyo = function (yoyo) {

		_yoyo = yoyo;
		return this;

	};


	this.easing = function (easing) {

		_easingFunction = easing;
		return this;

	};

	this.interpolation = function (interpolation) {

		_interpolationFunction = interpolation;
		return this;

	};

	this.chain = function () {

		_chainedTweens = arguments;
		return this;

	};

	this.onStart = function (callback) {

		_onStartCallback = callback;
		return this;

	};

	this.onUpdate = function (callback) {

		_onUpdateCallback = callback;
		return this;

	};

	this.onComplete = function (callback) {

		_onCompleteCallback = callback;
		return this;

	};

	this.onStop = function (callback) {

		_onStopCallback = callback;
		return this;

	};

	this.update = function (time) {

		var property;
		var elapsed;
		var value;

		if (time < _startTime) {
			return true;
		}

		if (_onStartCallbackFired === false) {

			if (_onStartCallback !== null) {
				_onStartCallback.call(_object, _object);
			}

			_onStartCallbackFired = true;
		}

		elapsed = (time - _startTime) / _duration;
		elapsed = elapsed > 1 ? 1 : elapsed;

		value = _easingFunction(elapsed);

		for (property in _valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (_valuesStart[property] === undefined) {
				continue;
			}

			var start = _valuesStart[property] || 0;
			var end = _valuesEnd[property];

			if (end instanceof Array) {

				_object[property] = _interpolationFunction(end, value);

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof (end) === 'string') {

					if (end.charAt(0) === '+' || end.charAt(0) === '-') {
						end = start + parseFloat(end);
					} else {
						end = parseFloat(end);
					}
				}

				// Protect against non numeric properties.
				if (typeof (end) === 'number') {
					_object[property] = start + (end - start) * value;
				}

			}

		}

		if (_onUpdateCallback !== null) {
			_onUpdateCallback.call(_object, value);
		}

		if (elapsed === 1) {

			if (_repeat > 0) {

				if (isFinite(_repeat)) {
					_repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in _valuesStartRepeat) {

					if (typeof (_valuesEnd[property]) === 'string') {
						_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property]);
					}

					if (_yoyo) {
						var tmp = _valuesStartRepeat[property];

						_valuesStartRepeat[property] = _valuesEnd[property];
						_valuesEnd[property] = tmp;
					}

					_valuesStart[property] = _valuesStartRepeat[property];

				}

				if (_yoyo) {
					_reversed = !_reversed;
				}

				if (_repeatDelayTime !== undefined) {
					_startTime = time + _repeatDelayTime;
				} else {
					_startTime = time + _delayTime;
				}

				return true;

			} else {

				if (_onCompleteCallback !== null) {

					_onCompleteCallback.call(_object, _object);
				}

				for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					_chainedTweens[i].start(_startTime + _duration);
				}

				return false;

			}

		}

		return true;

	};

};


TWEEN.Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

		},

		Out: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			k *= 2;

			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}

			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

	},

	Bezier: function (v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;

	},

	CatmullRom: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

		}

	},

	Utils: {

		Linear: function (p0, p1, t) {

			return (p1 - p0) * t + p0;

		},

		Bernstein: function (n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);

		},

		Factorial: (function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;

			};

		})(),

		CatmullRom: function (p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	if (true) {

		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return TWEEN;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	} else if (typeof module !== 'undefined' && typeof exports === 'object') {

		// Node.js
		module.exports = TWEEN;

	} else if (root !== undefined) {

		// Global variable
		root.TWEEN = TWEEN;

	}

})(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzA3NDIxMWYxYjM3MDY3ZTU2OWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tlZmlyL2Rpc3Qva2VmaXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR3ZWVuanMvdHdlZW4uanMvc3JjL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFZLDJCQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsV0FBVyxFQUFFO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0NBQStDLG9DQUFvQztBQUNuRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQSxpREFBaUQsU0FBUztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQSxpREFBaUQsU0FBUztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQ0FBc0MsRUFBRSw0QkFBNEIsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRCQUE0QjtBQUM1RDtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBLGdDQUFnQyw2QkFBNkI7QUFDN0Q7QUFDQTtBQUNBLGdDQUFnQyxpQ0FBaUM7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLGNBQWM7O0FBRTVELENBQUM7Ozs7Ozs7OztBQ3BtSEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDJEQUEyRCxzQkFBc0I7QUFDakY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBLDZEQUE2RCxzQkFBc0I7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7O0FBRUgsRUFBRTs7QUFFRjtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7QUNqM0JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUiLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG4gXHRcdGlmKGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdFx0Zm9yKGk9MDsgaSA8IGV4ZWN1dGVNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGV4ZWN1dGVNb2R1bGVzW2ldKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMwNzQyMTFmMWIzNzA2N2U1NjllIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZWZpeCA9ICd+JztcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvbmNlPWZhbHNlXSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIE1pbmltYWwgYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFN5bWJvbH0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGV4aXN0cyBPbmx5IGNoZWNrIGlmIHRoZXJlIGFyZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7QXJyYXl8Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50LCBleGlzdHMpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGF2YWlsYWJsZSA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChleGlzdHMpIHJldHVybiAhIWF2YWlsYWJsZTtcbiAgaWYgKCFhdmFpbGFibGUpIHJldHVybiBbXTtcbiAgaWYgKGF2YWlsYWJsZS5mbikgcmV0dXJuIFthdmFpbGFibGUuZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXZhaWxhYmxlLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGF2YWlsYWJsZVtpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGV2ZW50IGhhZCBsaXN0ZW5lcnMsIGVsc2UgYGZhbHNlYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMiwgYTMpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgdGhpcylcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgdGhpcy5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgdGhpcy5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIXRoaXMuX2V2ZW50c1tldnRdLmZuKSB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSB0aGlzLl9ldmVudHNbZXZ0XSA9IFt0aGlzLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IHRoaXMsIHRydWUpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHRoaXMuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIHRoaXMuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XS5mbikgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgdGhpcy5fZXZlbnRzW2V2dF0gPSBbdGhpcy5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgb2YgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBjb250ZXh0IE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmUtdGltZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICBpZiAoIWZuKSB7XG4gICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgICAgbGlzdGVuZXJzLmZuID09PSBmblxuICAgICAgJiYgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKVxuICAgICAgJiYgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICAgIGVsc2UgZGVsZXRlIHRoaXMuX2V2ZW50c1tldnRdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuXG4gICAgICAgIHx8IChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSlcbiAgICAgICAgfHwgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIGVsc2UgZGVsZXRlIHRoaXMuX2V2ZW50c1tldnRdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBvciB0aG9zZSBvZiB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFN5bWJvbH0gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIHtcbiAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgICBlbHNlIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBUaGlzIGZ1bmN0aW9uIGRvZXNuJ3QgYXBwbHkgYW55bW9yZS5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gQWxsb3cgYEV2ZW50RW1pdHRlcmAgdG8gYmUgaW1wb3J0ZWQgYXMgbW9kdWxlIG5hbWVzcGFjZS5cbi8vXG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiEgS2VmaXIuanMgdjMuNy4yXG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL3Jwb21pbm92L2tlZmlyXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuXHQoZmFjdG9yeSgoZ2xvYmFsLktlZmlyID0gZ2xvYmFsLktlZmlyIHx8IHt9KSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVPYmoocHJvdG8pIHtcbiAgdmFyIEYgPSBmdW5jdGlvbiAoKSB7fTtcbiAgRi5wcm90b3R5cGUgPSBwcm90bztcbiAgcmV0dXJuIG5ldyBGKCk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQgLyosIG1peGluMSwgbWl4aW4yLi4uKi8pIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICBpID0gdm9pZCAwLFxuICAgICAgcHJvcCA9IHZvaWQgMDtcbiAgZm9yIChpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChwcm9wIGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgdGFyZ2V0W3Byb3BdID0gYXJndW1lbnRzW2ldW3Byb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBpbmhlcml0KENoaWxkLCBQYXJlbnQgLyosIG1peGluMSwgbWl4aW4yLi4uKi8pIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICBpID0gdm9pZCAwO1xuICBDaGlsZC5wcm90b3R5cGUgPSBjcmVhdGVPYmooUGFyZW50LnByb3RvdHlwZSk7XG4gIENoaWxkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENoaWxkO1xuICBmb3IgKGkgPSAyOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBleHRlbmQoQ2hpbGQucHJvdG90eXBlLCBhcmd1bWVudHNbaV0pO1xuICB9XG4gIHJldHVybiBDaGlsZDtcbn1cblxudmFyIE5PVEhJTkcgPSBbJzxub3RoaW5nPiddO1xudmFyIEVORCA9ICdlbmQnO1xudmFyIFZBTFVFID0gJ3ZhbHVlJztcbnZhciBFUlJPUiA9ICdlcnJvcic7XG52YXIgQU5ZID0gJ2FueSc7XG5cbmZ1bmN0aW9uIGNvbmNhdChhLCBiKSB7XG4gIHZhciByZXN1bHQgPSB2b2lkIDAsXG4gICAgICBsZW5ndGggPSB2b2lkIDAsXG4gICAgICBpID0gdm9pZCAwLFxuICAgICAgaiA9IHZvaWQgMDtcbiAgaWYgKGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGI7XG4gIH1cbiAgaWYgKGIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgaiA9IDA7XG4gIHJlc3VsdCA9IG5ldyBBcnJheShhLmxlbmd0aCArIGIubGVuZ3RoKTtcbiAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKywgaisrKSB7XG4gICAgcmVzdWx0W2pdID0gYVtpXTtcbiAgfVxuICBsZW5ndGggPSBiLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrLCBqKyspIHtcbiAgICByZXN1bHRbal0gPSBiW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbmQoYXJyLCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBmaW5kQnlQcmVkKGFyciwgcHJlZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkKGFycltpXSkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGNsb25lQXJyYXkoaW5wdXQpIHtcbiAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpLFxuICAgICAgaSA9IHZvaWQgMDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2ldID0gaW5wdXRbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGlucHV0LCBpbmRleCkge1xuICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gdm9pZCAwLFxuICAgICAgaSA9IHZvaWQgMCxcbiAgICAgIGogPSB2b2lkIDA7XG4gIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIHJlc3VsdFtqXSA9IGlucHV0W2ldO1xuICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcChpbnB1dCwgZm4pIHtcbiAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpLFxuICAgICAgaSA9IHZvaWQgMDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2ldID0gZm4oaW5wdXRbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goYXJyLCBmbikge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGZuKGFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbEFycmF5KGFyciwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGgsXG4gICAgICBpID0gdm9pZCAwO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIHZhbHVlKSB7XG4gIHJldHVybiBmaW5kKGFyciwgdmFsdWUpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gc2xpZGUoY3VyLCBuZXh0LCBtYXgpIHtcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKG1heCwgY3VyLmxlbmd0aCArIDEpLFxuICAgICAgb2Zmc2V0ID0gY3VyLmxlbmd0aCAtIGxlbmd0aCArIDEsXG4gICAgICByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKSxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIGZvciAoaSA9IG9mZnNldDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2kgLSBvZmZzZXRdID0gY3VyW2ldO1xuICB9XG4gIHJlc3VsdFtsZW5ndGggLSAxXSA9IG5leHQ7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyKHR5cGUsIGZuLCBldmVudCkge1xuICBpZiAodHlwZSA9PT0gQU5ZKSB7XG4gICAgZm4oZXZlbnQpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IGV2ZW50LnR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gVkFMVUUgfHwgdHlwZSA9PT0gRVJST1IpIHtcbiAgICAgIGZuKGV2ZW50LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgdGhpcy5faXRlbXMgPSBbXTtcbiAgdGhpcy5fc3BpZXMgPSBbXTtcbiAgdGhpcy5faW5Mb29wID0gMDtcbiAgdGhpcy5fcmVtb3ZlZEl0ZW1zID0gbnVsbDtcbn1cblxuZXh0ZW5kKERpc3BhdGNoZXIucHJvdG90eXBlLCB7XG4gIGFkZDogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgdGhpcy5faXRlbXMgPSBjb25jYXQodGhpcy5faXRlbXMsIFt7IHR5cGU6IHR5cGUsIGZuOiBmbiB9XSk7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiAodHlwZSwgZm4pIHtcbiAgICB2YXIgaW5kZXggPSBmaW5kQnlQcmVkKHRoaXMuX2l0ZW1zLCBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHgudHlwZSA9PT0gdHlwZSAmJiB4LmZuID09PSBmbjtcbiAgICB9KTtcblxuICAgIC8vIGlmIHdlJ3JlIGN1cnJlbnRseSBpbiBhIG5vdGlmaWNhdGlvbiBsb29wLFxuICAgIC8vIHJlbWVtYmVyIHRoaXMgc3Vic2NyaWJlciB3YXMgcmVtb3ZlZFxuICAgIGlmICh0aGlzLl9pbkxvb3AgIT09IDAgJiYgaW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAodGhpcy5fcmVtb3ZlZEl0ZW1zID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZWRJdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVtb3ZlZEl0ZW1zLnB1c2godGhpcy5faXRlbXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pdGVtcyA9IHJlbW92ZSh0aGlzLl9pdGVtcywgaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gIH0sXG4gIGFkZFNweTogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5fc3BpZXMgPSBjb25jYXQodGhpcy5fc3BpZXMsIFtmbl0pO1xuICAgIHJldHVybiB0aGlzLl9zcGllcy5sZW5ndGg7XG4gIH0sXG5cblxuICAvLyBCZWNhdXNlIHNwaWVzIGFyZSBvbmx5IGV2ZXIgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm0gbG9nZ2luZyBhc1xuICAvLyB0aGVpciBvbmx5IHNpZGUgZWZmZWN0LCB3ZSBkb24ndCBuZWVkIHRoZSBzYW1lIGNvbXBsaWNhdGVkXG4gIC8vIHJlbW92YWwgbG9naWMgbGlrZSBpbiByZW1vdmUoKVxuICByZW1vdmVTcHk6IGZ1bmN0aW9uIChmbikge1xuICAgIHRoaXMuX3NwaWVzID0gcmVtb3ZlKHRoaXMuX3NwaWVzLCB0aGlzLl9zcGllcy5pbmRleE9mKGZuKSk7XG4gICAgcmV0dXJuIHRoaXMuX3NwaWVzLmxlbmd0aDtcbiAgfSxcbiAgZGlzcGF0Y2g6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuX2luTG9vcCsrO1xuICAgIGZvciAodmFyIGkgPSAwLCBzcGllcyA9IHRoaXMuX3NwaWVzOyB0aGlzLl9zcGllcyAhPT0gbnVsbCAmJiBpIDwgc3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNwaWVzW2ldKGV2ZW50KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDAsIGl0ZW1zID0gdGhpcy5faXRlbXM7IF9pIDwgaXRlbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAvLyBjbGVhbnVwIHdhcyBjYWxsZWRcbiAgICAgIGlmICh0aGlzLl9pdGVtcyA9PT0gbnVsbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcyBzdWJzY3JpYmVyIHdhcyByZW1vdmVkXG4gICAgICBpZiAodGhpcy5fcmVtb3ZlZEl0ZW1zICE9PSBudWxsICYmIGNvbnRhaW5zKHRoaXMuX3JlbW92ZWRJdGVtcywgaXRlbXNbX2ldKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2FsbFN1YnNjcmliZXIoaXRlbXNbX2ldLnR5cGUsIGl0ZW1zW19pXS5mbiwgZXZlbnQpO1xuICAgIH1cbiAgICB0aGlzLl9pbkxvb3AtLTtcbiAgICBpZiAodGhpcy5faW5Mb29wID09PSAwKSB7XG4gICAgICB0aGlzLl9yZW1vdmVkSXRlbXMgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgY2xlYW51cDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2l0ZW1zID0gbnVsbDtcbiAgICB0aGlzLl9zcGllcyA9IG51bGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBPYnNlcnZhYmxlKCkge1xuICB0aGlzLl9kaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKTtcbiAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gIHRoaXMuX2FsaXZlID0gdHJ1ZTtcbiAgdGhpcy5fYWN0aXZhdGluZyA9IGZhbHNlO1xuICB0aGlzLl9sb2dIYW5kbGVycyA9IG51bGw7XG4gIHRoaXMuX3NweUhhbmRsZXJzID0gbnVsbDtcbn1cblxuZXh0ZW5kKE9ic2VydmFibGUucHJvdG90eXBlLCB7XG4gIF9uYW1lOiAnb2JzZXJ2YWJsZScsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge30sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge30sXG4gIF9zZXRBY3RpdmU6IGZ1bmN0aW9uIChhY3RpdmUpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGlvbigpO1xuICAgICAgICB0aGlzLl9hY3RpdmF0aW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbkRlYWN0aXZhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fc2V0QWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLl9kaXNwYXRjaGVyLmNsZWFudXAoKTtcbiAgICB0aGlzLl9kaXNwYXRjaGVyID0gbnVsbDtcbiAgICB0aGlzLl9sb2dIYW5kbGVycyA9IG51bGw7XG4gIH0sXG4gIF9lbWl0OiBmdW5jdGlvbiAodHlwZSwgeCkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBWQUxVRTpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgIHJldHVybiB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgICBjYXNlIEVORDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH0sXG4gIF9lbWl0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IFZBTFVFLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgfVxuICB9LFxuICBfZW1pdEVycm9yOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuZGlzcGF0Y2goeyB0eXBlOiBFUlJPUiwgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH1cbiAgfSxcbiAgX2VtaXRFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX2FsaXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogRU5EIH0pO1xuICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICB9XG4gIH0sXG4gIF9vbjogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaGVyLmFkZCh0eXBlLCBmbik7XG4gICAgICB0aGlzLl9zZXRBY3RpdmUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxTdWJzY3JpYmVyKHR5cGUsIGZuLCB7IHR5cGU6IEVORCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIF9vZmY6IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdmFyIGNvdW50ID0gdGhpcy5fZGlzcGF0Y2hlci5yZW1vdmUodHlwZSwgZm4pO1xuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBvblZhbHVlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb24oVkFMVUUsIGZuKTtcbiAgfSxcbiAgb25FcnJvcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uKEVSUk9SLCBmbik7XG4gIH0sXG4gIG9uRW5kOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb24oRU5ELCBmbik7XG4gIH0sXG4gIG9uQW55OiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb24oQU5ZLCBmbik7XG4gIH0sXG4gIG9mZlZhbHVlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb2ZmKFZBTFVFLCBmbik7XG4gIH0sXG4gIG9mZkVycm9yOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb2ZmKEVSUk9SLCBmbik7XG4gIH0sXG4gIG9mZkVuZDogZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZihFTkQsIGZuKTtcbiAgfSxcbiAgb2ZmQW55OiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb2ZmKEFOWSwgZm4pO1xuICB9LFxuICBvYnNlcnZlOiBmdW5jdGlvbiAob2JzZXJ2ZXJPck9uVmFsdWUsIG9uRXJyb3IsIG9uRW5kKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgY2xvc2VkID0gZmFsc2U7XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSAhb2JzZXJ2ZXJPck9uVmFsdWUgfHwgdHlwZW9mIG9ic2VydmVyT3JPblZhbHVlID09PSAnZnVuY3Rpb24nID8geyB2YWx1ZTogb2JzZXJ2ZXJPck9uVmFsdWUsIGVycm9yOiBvbkVycm9yLCBlbmQ6IG9uRW5kIH0gOiBvYnNlcnZlck9yT25WYWx1ZTtcblxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gVkFMVUUgJiYgb2JzZXJ2ZXIudmFsdWUpIHtcbiAgICAgICAgb2JzZXJ2ZXIudmFsdWUoZXZlbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBFUlJPUiAmJiBvYnNlcnZlci5lcnJvcikge1xuICAgICAgICBvYnNlcnZlci5lcnJvcihldmVudC52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IEVORCAmJiBvYnNlcnZlci5lbmQpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZW5kKGV2ZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vbkFueShoYW5kbGVyKTtcblxuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWNsb3NlZCkge1xuICAgICAgICAgIF90aGlzLm9mZkFueShoYW5kbGVyKTtcbiAgICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQgY2xvc2VkKCkge1xuICAgICAgICByZXR1cm4gY2xvc2VkO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cblxuICAvLyBBIGFuZCBCIG11c3QgYmUgc3ViY2xhc3NlcyBvZiBTdHJlYW0gYW5kIFByb3BlcnR5IChvcmRlciBkb2Vzbid0IG1hdHRlcilcbiAgX29mU2FtZVR5cGU6IGZ1bmN0aW9uIChBLCBCKSB7XG4gICAgcmV0dXJuIEEucHJvdG90eXBlLmdldFR5cGUoKSA9PT0gdGhpcy5nZXRUeXBlKCkgPyBBIDogQjtcbiAgfSxcbiAgc2V0TmFtZTogZnVuY3Rpb24gKHNvdXJjZU9icyAvKiBvcHRpb25hbCAqLywgc2VsZk5hbWUpIHtcbiAgICB0aGlzLl9uYW1lID0gc2VsZk5hbWUgPyBzb3VyY2VPYnMuX25hbWUgKyAnLicgKyBzZWxmTmFtZSA6IHNvdXJjZU9icztcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgbG9nOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMudG9TdHJpbmcoKTtcblxuICAgIHZhciBpc0N1cnJlbnQgPSB2b2lkIDA7XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciB0eXBlID0gJzwnICsgZXZlbnQudHlwZSArIChpc0N1cnJlbnQgPyAnOmN1cnJlbnQnIDogJycpICsgJz4nO1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEVORCkge1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB0eXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHR5cGUsIGV2ZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICBpZiAoIXRoaXMuX2xvZ0hhbmRsZXJzKSB7XG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXJzID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLl9sb2dIYW5kbGVycy5wdXNoKHsgbmFtZTogbmFtZSwgaGFuZGxlcjogaGFuZGxlciB9KTtcbiAgICB9XG5cbiAgICBpc0N1cnJlbnQgPSB0cnVlO1xuICAgIHRoaXMub25BbnkoaGFuZGxlcik7XG4gICAgaXNDdXJyZW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgb2ZmTG9nOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMudG9TdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLl9sb2dIYW5kbGVycykge1xuICAgICAgdmFyIGhhbmRsZXJJbmRleCA9IGZpbmRCeVByZWQodGhpcy5fbG9nSGFuZGxlcnMsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai5uYW1lID09PSBuYW1lO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFuZGxlckluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLm9mZkFueSh0aGlzLl9sb2dIYW5kbGVyc1toYW5kbGVySW5kZXhdLmhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9sb2dIYW5kbGVycy5zcGxpY2UoaGFuZGxlckluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgc3B5OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMudG9TdHJpbmcoKTtcblxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgdHlwZSA9ICc8JyArIGV2ZW50LnR5cGUgKyAnPic7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgdHlwZSwgZXZlbnQudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICBpZiAoIXRoaXMuX3NweUhhbmRsZXJzKSB7XG4gICAgICAgIHRoaXMuX3NweUhhbmRsZXJzID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLl9zcHlIYW5kbGVycy5wdXNoKHsgbmFtZTogbmFtZSwgaGFuZGxlcjogaGFuZGxlciB9KTtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuYWRkU3B5KGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgb2ZmU3B5OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMudG9TdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLl9zcHlIYW5kbGVycykge1xuICAgICAgdmFyIGhhbmRsZXJJbmRleCA9IGZpbmRCeVByZWQodGhpcy5fc3B5SGFuZGxlcnMsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai5uYW1lID09PSBuYW1lO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFuZGxlckluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLnJlbW92ZVNweSh0aGlzLl9zcHlIYW5kbGVyc1toYW5kbGVySW5kZXhdLmhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9zcHlIYW5kbGVycy5zcGxpY2UoaGFuZGxlckluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0pO1xuXG4vLyBleHRlbmQoKSBjYW4ndCBoYW5kbGUgYHRvU3RyaW5nYCBpbiBJRThcbk9ic2VydmFibGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ1snICsgdGhpcy5fbmFtZSArICddJztcbn07XG5cbmZ1bmN0aW9uIFN0cmVhbSgpIHtcbiAgT2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xufVxuXG5pbmhlcml0KFN0cmVhbSwgT2JzZXJ2YWJsZSwge1xuICBfbmFtZTogJ3N0cmVhbScsXG5cbiAgZ2V0VHlwZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnc3RyZWFtJztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIFByb3BlcnR5KCkge1xuICBPYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gIHRoaXMuX2N1cnJlbnRFdmVudCA9IG51bGw7XG59XG5cbmluaGVyaXQoUHJvcGVydHksIE9ic2VydmFibGUsIHtcbiAgX25hbWU6ICdwcm9wZXJ0eScsXG5cbiAgX2VtaXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50RXZlbnQgPSB7IHR5cGU6IFZBTFVFLCB2YWx1ZTogdmFsdWUgfTtcbiAgICAgIGlmICghdGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogVkFMVUUsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9lbWl0RXJyb3I6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fY3VycmVudEV2ZW50ID0geyB0eXBlOiBFUlJPUiwgdmFsdWU6IHZhbHVlIH07XG4gICAgICBpZiAoIXRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IEVSUk9SLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfZW1pdEVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fYWxpdmUgPSBmYWxzZTtcbiAgICAgIGlmICghdGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogRU5EIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICB9XG4gIH0sXG4gIF9vbjogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaGVyLmFkZCh0eXBlLCBmbik7XG4gICAgICB0aGlzLl9zZXRBY3RpdmUodHJ1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jdXJyZW50RXZlbnQgIT09IG51bGwpIHtcbiAgICAgIGNhbGxTdWJzY3JpYmVyKHR5cGUsIGZuLCB0aGlzLl9jdXJyZW50RXZlbnQpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2FsaXZlKSB7XG4gICAgICBjYWxsU3Vic2NyaWJlcih0eXBlLCBmbiwgeyB0eXBlOiBFTkQgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBnZXRUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdwcm9wZXJ0eSc7XG4gIH1cbn0pO1xuXG52YXIgbmV2ZXJTID0gbmV3IFN0cmVhbSgpO1xubmV2ZXJTLl9lbWl0RW5kKCk7XG5uZXZlclMuX25hbWUgPSAnbmV2ZXInO1xuXG5mdW5jdGlvbiBuZXZlcigpIHtcbiAgcmV0dXJuIG5ldmVyUztcbn1cblxuZnVuY3Rpb24gdGltZUJhc2VkKG1peGluKSB7XG4gIGZ1bmN0aW9uIEFub255bW91c1N0cmVhbSh3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIFN0cmVhbS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3dhaXQgPSB3YWl0O1xuICAgIHRoaXMuX2ludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuXyRvblRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX29uVGljaygpO1xuICAgIH07XG4gICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIGluaGVyaXQoQW5vbnltb3VzU3RyZWFtLCBTdHJlYW0sIHtcbiAgICBfaW5pdDogZnVuY3Rpb24gKCkge30sXG4gICAgX2ZyZWU6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF9vblRpY2s6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2ludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLl8kb25UaWNrLCB0aGlzLl93YWl0KTtcbiAgICB9LFxuICAgIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX2ludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElkKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLl8kb25UaWNrID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZyZWUoKTtcbiAgICB9XG4gIH0sIG1peGluKTtcblxuICByZXR1cm4gQW5vbnltb3VzU3RyZWFtO1xufVxuXG52YXIgUyA9IHRpbWVCYXNlZCh7XG4gIF9uYW1lOiAnbGF0ZXInLFxuXG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB4ID0gX3JlZi54O1xuXG4gICAgdGhpcy5feCA9IHg7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5feCA9IG51bGw7XG4gIH0sXG4gIF9vblRpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5feCk7XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbGF0ZXIod2FpdCwgeCkge1xuICByZXR1cm4gbmV3IFMod2FpdCwgeyB4OiB4IH0pO1xufVxuXG52YXIgUyQxID0gdGltZUJhc2VkKHtcbiAgX25hbWU6ICdpbnRlcnZhbCcsXG5cbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHggPSBfcmVmLng7XG5cbiAgICB0aGlzLl94ID0geDtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl94ID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl94KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGludGVydmFsKHdhaXQsIHgpIHtcbiAgcmV0dXJuIG5ldyBTJDEod2FpdCwgeyB4OiB4IH0pO1xufVxuXG52YXIgUyQyID0gdGltZUJhc2VkKHtcbiAgX25hbWU6ICdzZXF1ZW50aWFsbHknLFxuXG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB4cyA9IF9yZWYueHM7XG5cbiAgICB0aGlzLl94cyA9IGNsb25lQXJyYXkoeHMpO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3hzID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl94cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl94c1swXSk7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl94cy5zaGlmdCgpKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzZXF1ZW50aWFsbHkod2FpdCwgeHMpIHtcbiAgcmV0dXJuIHhzLmxlbmd0aCA9PT0gMCA/IG5ldmVyKCkgOiBuZXcgUyQyKHdhaXQsIHsgeHM6IHhzIH0pO1xufVxuXG52YXIgUyQzID0gdGltZUJhc2VkKHtcbiAgX25hbWU6ICdmcm9tUG9sbCcsXG5cbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfb25UaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdGhpcy5fZW1pdFZhbHVlKGZuKCkpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJvbVBvbGwod2FpdCwgZm4pIHtcbiAgcmV0dXJuIG5ldyBTJDMod2FpdCwgeyBmbjogZm4gfSk7XG59XG5cbmZ1bmN0aW9uIGVtaXR0ZXIob2JzKSB7XG4gIGZ1bmN0aW9uIHZhbHVlKHgpIHtcbiAgICBvYnMuX2VtaXRWYWx1ZSh4KTtcbiAgICByZXR1cm4gb2JzLl9hY3RpdmU7XG4gIH1cblxuICBmdW5jdGlvbiBlcnJvcih4KSB7XG4gICAgb2JzLl9lbWl0RXJyb3IoeCk7XG4gICAgcmV0dXJuIG9icy5fYWN0aXZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5kKCkge1xuICAgIG9icy5fZW1pdEVuZCgpO1xuICAgIHJldHVybiBvYnMuX2FjdGl2ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50KGUpIHtcbiAgICBvYnMuX2VtaXQoZS50eXBlLCBlLnZhbHVlKTtcbiAgICByZXR1cm4gb2JzLl9hY3RpdmU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBlcnJvcjogZXJyb3IsXG4gICAgZW5kOiBlbmQsXG4gICAgZXZlbnQ6IGV2ZW50LFxuXG4gICAgLy8gbGVnYWN5XG4gICAgZW1pdDogdmFsdWUsXG4gICAgZW1pdEV2ZW50OiBldmVudFxuICB9O1xufVxuXG52YXIgUyQ0ID0gdGltZUJhc2VkKHtcbiAgX25hbWU6ICd3aXRoSW50ZXJ2YWwnLFxuXG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBlbWl0dGVyKHRoaXMpO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgICB0aGlzLl9lbWl0dGVyID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24gKCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIGZuKHRoaXMuX2VtaXR0ZXIpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gd2l0aEludGVydmFsKHdhaXQsIGZuKSB7XG4gIHJldHVybiBuZXcgUyQ0KHdhaXQsIHsgZm46IGZuIH0pO1xufVxuXG5mdW5jdGlvbiBTJDUoZm4pIHtcbiAgU3RyZWFtLmNhbGwodGhpcyk7XG4gIHRoaXMuX2ZuID0gZm47XG4gIHRoaXMuX3Vuc3Vic2NyaWJlID0gbnVsbDtcbn1cblxuaW5oZXJpdChTJDUsIFN0cmVhbSwge1xuICBfbmFtZTogJ3N0cmVhbScsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IGZuKGVtaXR0ZXIodGhpcykpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdHlwZW9mIHVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nID8gdW5zdWJzY3JpYmUgOiBudWxsO1xuXG4gICAgLy8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS9ycG9taW5vdi9rZWZpci9pc3N1ZXMvMzVcbiAgICBpZiAoIXRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fY2FsbFVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9LFxuICBfY2FsbFVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3Vuc3Vic2NyaWJlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fY2FsbFVuc3Vic2NyaWJlKCk7XG4gIH0sXG4gIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyZWFtKGZuKSB7XG4gIHJldHVybiBuZXcgUyQ1KGZuKTtcbn1cblxuZnVuY3Rpb24gZnJvbUNhbGxiYWNrKGNhbGxiYWNrQ29uc3VtZXIpIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gIHJldHVybiBzdHJlYW0oZnVuY3Rpb24gKGVtaXR0ZXIpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGJhY2tDb25zdW1lcihmdW5jdGlvbiAoeCkge1xuICAgICAgICBlbWl0dGVyLmVtaXQoeCk7XG4gICAgICAgIGVtaXR0ZXIuZW5kKCk7XG4gICAgICB9KTtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfVxuICB9KS5zZXROYW1lKCdmcm9tQ2FsbGJhY2snKTtcbn1cblxuZnVuY3Rpb24gZnJvbU5vZGVDYWxsYmFjayhjYWxsYmFja0NvbnN1bWVyKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcblxuICByZXR1cm4gc3RyZWFtKGZ1bmN0aW9uIChlbWl0dGVyKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxiYWNrQ29uc3VtZXIoZnVuY3Rpb24gKGVycm9yLCB4KSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGVtaXR0ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVtaXR0ZXIuZW1pdCh4KTtcbiAgICAgICAgfVxuICAgICAgICBlbWl0dGVyLmVuZCgpO1xuICAgICAgfSk7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSkuc2V0TmFtZSgnZnJvbU5vZGVDYWxsYmFjaycpO1xufVxuXG5mdW5jdGlvbiBzcHJlYWQoZm4sIGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0pO1xuICAgICAgfTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0sIGFbMV0pO1xuICAgICAgfTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgfTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhKTtcbiAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHkoZm4sIGMsIGEpIHtcbiAgdmFyIGFMZW5ndGggPSBhID8gYS5sZW5ndGggOiAwO1xuICBpZiAoYyA9PSBudWxsKSB7XG4gICAgc3dpdGNoIChhTGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gZm4oYVswXSk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBmbihhWzBdLCBhWzFdKTtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gZm4oYVswXSwgYVsxXSwgYVsyXSwgYVszXSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYUxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gZm4uY2FsbChjKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmbi5hcHBseShjLCBhKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbVN1YlVuc3ViKHN1YiwgdW5zdWIsIHRyYW5zZm9ybWVyIC8qIEZ1bmN0aW9uIHwgZmFsc2V5ICovKSB7XG4gIHJldHVybiBzdHJlYW0oZnVuY3Rpb24gKGVtaXR0ZXIpIHtcbiAgICB2YXIgaGFuZGxlciA9IHRyYW5zZm9ybWVyID8gZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KGFwcGx5KHRyYW5zZm9ybWVyLCB0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9IDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCh4KTtcbiAgICB9O1xuXG4gICAgc3ViKGhhbmRsZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5zdWIoaGFuZGxlcik7XG4gICAgfTtcbiAgfSkuc2V0TmFtZSgnZnJvbVN1YlVuc3ViJyk7XG59XG5cbnZhciBwYWlycyA9IFtbJ2FkZEV2ZW50TGlzdGVuZXInLCAncmVtb3ZlRXZlbnRMaXN0ZW5lciddLCBbJ2FkZExpc3RlbmVyJywgJ3JlbW92ZUxpc3RlbmVyJ10sIFsnb24nLCAnb2ZmJ11dO1xuXG5mdW5jdGlvbiBmcm9tRXZlbnRzKHRhcmdldCwgZXZlbnROYW1lLCB0cmFuc2Zvcm1lcikge1xuICB2YXIgc3ViID0gdm9pZCAwLFxuICAgICAgdW5zdWIgPSB2b2lkIDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0W3BhaXJzW2ldWzBdXSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdGFyZ2V0W3BhaXJzW2ldWzFdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc3ViID0gcGFpcnNbaV1bMF07XG4gICAgICB1bnN1YiA9IHBhaXJzW2ldWzFdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1YiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidGFyZ2V0IGRvbid0IHN1cHBvcnQgYW55IG9mIFwiICsgJ2FkZEV2ZW50TGlzdGVuZXIvcmVtb3ZlRXZlbnRMaXN0ZW5lciwgYWRkTGlzdGVuZXIvcmVtb3ZlTGlzdGVuZXIsIG9uL29mZiBtZXRob2QgcGFpcicpO1xuICB9XG5cbiAgcmV0dXJuIGZyb21TdWJVbnN1YihmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIHJldHVybiB0YXJnZXRbc3ViXShldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9LCBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIHJldHVybiB0YXJnZXRbdW5zdWJdKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH0sIHRyYW5zZm9ybWVyKS5zZXROYW1lKCdmcm9tRXZlbnRzJyk7XG59XG5cbi8vIEhBQ0s6XG4vLyAgIFdlIGRvbid0IGNhbGwgcGFyZW50IENsYXNzIGNvbnN0cnVjdG9yLCBidXQgaW5zdGVhZCBwdXR0aW5nIGFsbCBuZWNlc3Nhcnlcbi8vICAgcHJvcGVydGllcyBpbnRvIHByb3RvdHlwZSB0byBzaW11bGF0ZSBlbmRlZCBQcm9wZXJ0eVxuLy8gICAoc2VlIFByb3BwZXJ0eSBhbmQgT2JzZXJ2YWJsZSBjbGFzc2VzKS5cblxuZnVuY3Rpb24gUCh2YWx1ZSkge1xuICB0aGlzLl9jdXJyZW50RXZlbnQgPSB7IHR5cGU6ICd2YWx1ZScsIHZhbHVlOiB2YWx1ZSwgY3VycmVudDogdHJ1ZSB9O1xufVxuXG5pbmhlcml0KFAsIFByb3BlcnR5LCB7XG4gIF9uYW1lOiAnY29uc3RhbnQnLFxuICBfYWN0aXZlOiBmYWxzZSxcbiAgX2FjdGl2YXRpbmc6IGZhbHNlLFxuICBfYWxpdmU6IGZhbHNlLFxuICBfZGlzcGF0Y2hlcjogbnVsbCxcbiAgX2xvZ0hhbmRsZXJzOiBudWxsXG59KTtcblxuZnVuY3Rpb24gY29uc3RhbnQoeCkge1xuICByZXR1cm4gbmV3IFAoeCk7XG59XG5cbi8vIEhBQ0s6XG4vLyAgIFdlIGRvbid0IGNhbGwgcGFyZW50IENsYXNzIGNvbnN0cnVjdG9yLCBidXQgaW5zdGVhZCBwdXR0aW5nIGFsbCBuZWNlc3Nhcnlcbi8vICAgcHJvcGVydGllcyBpbnRvIHByb3RvdHlwZSB0byBzaW11bGF0ZSBlbmRlZCBQcm9wZXJ0eVxuLy8gICAoc2VlIFByb3BwZXJ0eSBhbmQgT2JzZXJ2YWJsZSBjbGFzc2VzKS5cblxuZnVuY3Rpb24gUCQxKHZhbHVlKSB7XG4gIHRoaXMuX2N1cnJlbnRFdmVudCA9IHsgdHlwZTogJ2Vycm9yJywgdmFsdWU6IHZhbHVlLCBjdXJyZW50OiB0cnVlIH07XG59XG5cbmluaGVyaXQoUCQxLCBQcm9wZXJ0eSwge1xuICBfbmFtZTogJ2NvbnN0YW50RXJyb3InLFxuICBfYWN0aXZlOiBmYWxzZSxcbiAgX2FjdGl2YXRpbmc6IGZhbHNlLFxuICBfYWxpdmU6IGZhbHNlLFxuICBfZGlzcGF0Y2hlcjogbnVsbCxcbiAgX2xvZ0hhbmRsZXJzOiBudWxsXG59KTtcblxuZnVuY3Rpb24gY29uc3RhbnRFcnJvcih4KSB7XG4gIHJldHVybiBuZXcgUCQxKHgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb25zdHJ1Y3RvcihCYXNlQ2xhc3MsIG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEFub255bW91c09ic2VydmFibGUoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIEJhc2VDbGFzcy5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLl9uYW1lID0gc291cmNlLl9uYW1lICsgJy4nICsgbmFtZTtcbiAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgIHRoaXMuXyRoYW5kbGVBbnkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlQW55KGV2ZW50KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDbGFzc01ldGhvZHMoQmFzZUNsYXNzKSB7XG4gIHJldHVybiB7XG4gICAgX2luaXQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF9mcmVlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSxcbiAgICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgfSxcbiAgICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfSxcbiAgICBfaGFuZGxlQW55OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlIFZBTFVFOlxuICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVWYWx1ZShldmVudC52YWx1ZSk7XG4gICAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGV2ZW50LnZhbHVlKTtcbiAgICAgICAgY2FzZSBFTkQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVuZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fc291cmNlLm9uQW55KHRoaXMuXyRoYW5kbGVBbnkpO1xuICAgIH0sXG4gICAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9zb3VyY2Uub2ZmQW55KHRoaXMuXyRoYW5kbGVBbnkpO1xuICAgIH0sXG4gICAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICBCYXNlQ2xhc3MucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgICAgIHRoaXMuXyRoYW5kbGVBbnkgPSBudWxsO1xuICAgICAgdGhpcy5fZnJlZSgpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyZWFtKG5hbWUsIG1peGluKSB7XG4gIHZhciBTID0gY3JlYXRlQ29uc3RydWN0b3IoU3RyZWFtLCBuYW1lKTtcbiAgaW5oZXJpdChTLCBTdHJlYW0sIGNyZWF0ZUNsYXNzTWV0aG9kcyhTdHJlYW0pLCBtaXhpbik7XG4gIHJldHVybiBTO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eShuYW1lLCBtaXhpbikge1xuICB2YXIgUCA9IGNyZWF0ZUNvbnN0cnVjdG9yKFByb3BlcnR5LCBuYW1lKTtcbiAgaW5oZXJpdChQLCBQcm9wZXJ0eSwgY3JlYXRlQ2xhc3NNZXRob2RzKFByb3BlcnR5KSwgbWl4aW4pO1xuICByZXR1cm4gUDtcbn1cblxudmFyIFAkMiA9IGNyZWF0ZVByb3BlcnR5KCd0b1Byb3BlcnR5Jywge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZ2V0SW5pdGlhbEN1cnJlbnQgPSBmbjtcbiAgfSxcbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9nZXRJbml0aWFsQ3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgdmFyIGdldEluaXRpYWwgPSB0aGlzLl9nZXRJbml0aWFsQ3VycmVudDtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShnZXRJbml0aWFsKCkpO1xuICAgIH1cbiAgICB0aGlzLl9zb3VyY2Uub25BbnkodGhpcy5fJGhhbmRsZUFueSk7IC8vIGNvcGllZCBmcm9tIHBhdHRlcm5zL29uZS1zb3VyY2VcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRvUHJvcGVydHkob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuICBpZiAoZm4gIT09IG51bGwgJiYgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3Ugc2hvdWxkIGNhbGwgdG9Qcm9wZXJ0eSgpIHdpdGggYSBmdW5jdGlvbiBvciBubyBhcmd1bWVudHMuJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBQJDIob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIFMkNiA9IGNyZWF0ZVN0cmVhbSgnY2hhbmdlcycsIHtcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICghdGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICghdGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKHgpO1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZXMob2JzKSB7XG4gIHJldHVybiBuZXcgUyQ2KG9icyk7XG59XG5cbmZ1bmN0aW9uIGZyb21Qcm9taXNlKHByb21pc2UpIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gIHZhciByZXN1bHQgPSBzdHJlYW0oZnVuY3Rpb24gKGVtaXR0ZXIpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdmFyIG9uVmFsdWUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBlbWl0dGVyLmVtaXQoeCk7XG4gICAgICAgIGVtaXR0ZXIuZW5kKCk7XG4gICAgICB9O1xuICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBlbWl0dGVyLmVycm9yKHgpO1xuICAgICAgICBlbWl0dGVyLmVuZCgpO1xuICAgICAgfTtcbiAgICAgIHZhciBfcHJvbWlzZSA9IHByb21pc2UudGhlbihvblZhbHVlLCBvbkVycm9yKTtcblxuICAgICAgLy8gcHJldmVudCBsaWJyYXJpZXMgbGlrZSAnUScgb3IgJ3doZW4nIGZyb20gc3dhbGxvd2luZyBleGNlcHRpb25zXG4gICAgICBpZiAoX3Byb21pc2UgJiYgdHlwZW9mIF9wcm9taXNlLmRvbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX3Byb21pc2UuZG9uZSgpO1xuICAgICAgfVxuXG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRvUHJvcGVydHkocmVzdWx0LCBudWxsKS5zZXROYW1lKCdmcm9tUHJvbWlzZScpO1xufVxuXG5mdW5jdGlvbiBnZXRHbG9kYWxQcm9taXNlKCkge1xuICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gUHJvbWlzZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpc24ndCBkZWZhdWx0IFByb21pc2UsIHVzZSBzaGltIG9yIHBhcmFtZXRlclwiKTtcbiAgfVxufVxuXG52YXIgdG9Qcm9taXNlID0gZnVuY3Rpb24gKG9icykge1xuICB2YXIgUHJvbWlzZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZ2V0R2xvZGFsUHJvbWlzZSgpO1xuXG4gIHZhciBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBvYnMub25BbnkoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EICYmIGxhc3QgIT09IG51bGwpIHtcbiAgICAgICAgKGxhc3QudHlwZSA9PT0gVkFMVUUgPyByZXNvbHZlIDogcmVqZWN0KShsYXN0LnZhbHVlKTtcbiAgICAgICAgbGFzdCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0ID0gZXZlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIHBvbnlmaWxsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsO1xuZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIF9TeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIF9TeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoX1N5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdF9TeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxufSk7XG5cbnZhciBpbmRleCQxID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5cblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHBvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTtcbn1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGNvbW1vbmpzR2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gY29tbW9uanNHbG9iYWw7XG59IGVsc2Uge1xuICByb290ID0gbW9kdWxlO1xufVxuXG52YXIgcmVzdWx0ID0gKDAsIF9wb255ZmlsbDJbJ2RlZmF1bHQnXSkocm9vdCk7XG5leHBvcnRzWydkZWZhdWx0J10gPSByZXN1bHQ7XG59KTtcblxudmFyIGluZGV4ID0gaW5kZXgkMTtcblxuLy8gdGhpcyBmaWxlIGNvbnRhaW5zIHNvbWUgaG90IEpTIG1vZHVsZXMgc3lzdGVtcyBzdHVmZlxuXG52YXIgJCRvYnNlcnZhYmxlID0gaW5kZXguZGVmYXVsdCA/IGluZGV4LmRlZmF1bHQgOiBpbmRleDtcblxuZnVuY3Rpb24gZnJvbUVTT2JzZXJ2YWJsZShfb2JzZXJ2YWJsZSkge1xuICB2YXIgb2JzZXJ2YWJsZSA9IF9vYnNlcnZhYmxlWyQkb2JzZXJ2YWJsZV0gPyBfb2JzZXJ2YWJsZVskJG9ic2VydmFibGVdKCkgOiBfb2JzZXJ2YWJsZTtcbiAgcmV0dXJuIHN0cmVhbShmdW5jdGlvbiAoZW1pdHRlcikge1xuICAgIHZhciB1bnN1YiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZW1pdHRlci5lcnJvcihlcnJvcik7XG4gICAgICAgIGVtaXR0ZXIuZW5kKCk7XG4gICAgICB9LFxuICAgICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGVtaXR0ZXIuZW1pdCh2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZW1pdHRlci5lbmQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bnN1Yi51bnN1YnNjcmliZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdW5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bnN1YjtcbiAgICB9XG4gIH0pLnNldE5hbWUoJ2Zyb21FU09ic2VydmFibGUnKTtcbn1cblxuZnVuY3Rpb24gRVNPYnNlcnZhYmxlKG9ic2VydmFibGUpIHtcbiAgdGhpcy5fb2JzZXJ2YWJsZSA9IG9ic2VydmFibGUudGFrZUVycm9ycygxKTtcbn1cblxuZXh0ZW5kKEVTT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiAob2JzZXJ2ZXJPck9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSB0eXBlb2Ygb2JzZXJ2ZXJPck9uTmV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHsgbmV4dDogb2JzZXJ2ZXJPck9uTmV4dCwgZXJyb3I6IG9uRXJyb3IsIGNvbXBsZXRlOiBvbkNvbXBsZXRlIH0gOiBvYnNlcnZlck9yT25OZXh0O1xuXG4gICAgdmFyIGZuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSAmJiBvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZXZlbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBFUlJPUiAmJiBvYnNlcnZlci5lcnJvcikge1xuICAgICAgICBvYnNlcnZlci5lcnJvcihldmVudC52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IEVORCAmJiBvYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZShldmVudC52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX29ic2VydmFibGUub25BbnkoZm4pO1xuICAgIHZhciBjbG9zZWQgPSBmYWxzZTtcblxuICAgIHZhciBzdWJzY3JpcHRpb24gPSB7XG4gICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBfdGhpcy5fb2JzZXJ2YWJsZS5vZmZBbnkoZm4pO1xuICAgICAgfSxcbiAgICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgIHJldHVybiBjbG9zZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG59KTtcblxuLy8gTmVlZCB0byBhc3NpZ24gZGlyZWN0bHkgYi9jIFN5bWJvbHMgYXJlbid0IGVudW1lcmFibGUuXG5FU09ic2VydmFibGUucHJvdG90eXBlWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gdG9FU09ic2VydmFibGUoKSB7XG4gIHJldHVybiBuZXcgRVNPYnNlcnZhYmxlKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0KHNvdXJjZSwga2V5cywgdmFsdWVzKSB7XG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgdmFsdWVzLnB1c2goc291cmNlW3Byb3BdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdEVycm9yc0NvbWJpbmF0b3IoZXJyb3JzKSB7XG4gIHZhciBsYXRlc3RFcnJvciA9IHZvaWQgMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZXJyb3JzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChsYXRlc3RFcnJvciA9PT0gdW5kZWZpbmVkIHx8IGxhdGVzdEVycm9yLmluZGV4IDwgZXJyb3JzW2ldLmluZGV4KSB7XG4gICAgICAgIGxhdGVzdEVycm9yID0gZXJyb3JzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbGF0ZXN0RXJyb3IuZXJyb3I7XG59XG5cbmZ1bmN0aW9uIENvbWJpbmUoYWN0aXZlLCBwYXNzaXZlLCBjb21iaW5hdG9yKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgU3RyZWFtLmNhbGwodGhpcyk7XG4gIHRoaXMuX2FjdGl2ZUNvdW50ID0gYWN0aXZlLmxlbmd0aDtcbiAgdGhpcy5fc291cmNlcyA9IGNvbmNhdChhY3RpdmUsIHBhc3NpdmUpO1xuICB0aGlzLl9jb21iaW5hdG9yID0gY29tYmluYXRvcjtcbiAgdGhpcy5fYWxpdmVDb3VudCA9IDA7XG4gIHRoaXMuX2xhdGVzdFZhbHVlcyA9IG5ldyBBcnJheSh0aGlzLl9zb3VyY2VzLmxlbmd0aCk7XG4gIHRoaXMuX2xhdGVzdEVycm9ycyA9IG5ldyBBcnJheSh0aGlzLl9zb3VyY2VzLmxlbmd0aCk7XG4gIGZpbGxBcnJheSh0aGlzLl9sYXRlc3RWYWx1ZXMsIE5PVEhJTkcpO1xuICB0aGlzLl9lbWl0QWZ0ZXJBY3RpdmF0aW9uID0gZmFsc2U7XG4gIHRoaXMuX2VuZEFmdGVyQWN0aXZhdGlvbiA9IGZhbHNlO1xuICB0aGlzLl9sYXRlc3RFcnJvckluZGV4ID0gMDtcblxuICB0aGlzLl8kaGFuZGxlcnMgPSBbXTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoaSkge1xuICAgIF90aGlzLl8kaGFuZGxlcnMucHVzaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlQW55KGksIGV2ZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICBfbG9vcChpKTtcbiAgfVxufVxuXG5pbmhlcml0KENvbWJpbmUsIFN0cmVhbSwge1xuICBfbmFtZTogJ2NvbWJpbmUnLFxuXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9hbGl2ZUNvdW50ID0gdGhpcy5fYWN0aXZlQ291bnQ7XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHN1c2NyaWJlIHRvIF9wYXNzaXZlXyBzb3VyY2VzIGJlZm9yZSBfYWN0aXZlX1xuICAgIC8vIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Jwb21pbm92L2tlZmlyL2lzc3Vlcy85OClcbiAgICBmb3IgKHZhciBpID0gdGhpcy5fYWN0aXZlQ291bnQ7IGkgPCB0aGlzLl9zb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9uQW55KHRoaXMuXyRoYW5kbGVyc1tpXSk7XG4gICAgfVxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLl9hY3RpdmVDb3VudDsgX2krKykge1xuICAgICAgdGhpcy5fc291cmNlc1tfaV0ub25BbnkodGhpcy5fJGhhbmRsZXJzW19pXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VtaXRBZnRlckFjdGl2YXRpb24pIHtcbiAgICAgIHRoaXMuX2VtaXRBZnRlckFjdGl2YXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VtaXRJZkZ1bGwoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuZEFmdGVyQWN0aXZhdGlvbikge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuX3NvdXJjZXMubGVuZ3RoLFxuICAgICAgICBpID0gdm9pZCAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fc291cmNlc1tpXS5vZmZBbnkodGhpcy5fJGhhbmRsZXJzW2ldKTtcbiAgICB9XG4gIH0sXG4gIF9lbWl0SWZGdWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhc0FsbFZhbHVlcyA9IHRydWU7XG4gICAgdmFyIGhhc0Vycm9ycyA9IGZhbHNlO1xuICAgIHZhciBsZW5ndGggPSB0aGlzLl9sYXRlc3RWYWx1ZXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXNDb3B5ID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgdmFyIGVycm9yc0NvcHkgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc0NvcHlbaV0gPSB0aGlzLl9sYXRlc3RWYWx1ZXNbaV07XG4gICAgICBlcnJvcnNDb3B5W2ldID0gdGhpcy5fbGF0ZXN0RXJyb3JzW2ldO1xuXG4gICAgICBpZiAodmFsdWVzQ29weVtpXSA9PT0gTk9USElORykge1xuICAgICAgICBoYXNBbGxWYWx1ZXMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yc0NvcHlbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNBbGxWYWx1ZXMpIHtcbiAgICAgIHZhciBjb21iaW5hdG9yID0gdGhpcy5fY29tYmluYXRvcjtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShjb21iaW5hdG9yKHZhbHVlc0NvcHkpKTtcbiAgICB9XG4gICAgaWYgKGhhc0Vycm9ycykge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKGRlZmF1bHRFcnJvcnNDb21iaW5hdG9yKGVycm9yc0NvcHkpKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVBbnk6IGZ1bmN0aW9uIChpLCBldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSB8fCBldmVudC50eXBlID09PSBFUlJPUikge1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFZBTFVFKSB7XG4gICAgICAgIHRoaXMuX2xhdGVzdFZhbHVlc1tpXSA9IGV2ZW50LnZhbHVlO1xuICAgICAgICB0aGlzLl9sYXRlc3RFcnJvcnNbaV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRVJST1IpIHtcbiAgICAgICAgdGhpcy5fbGF0ZXN0VmFsdWVzW2ldID0gTk9USElORztcbiAgICAgICAgdGhpcy5fbGF0ZXN0RXJyb3JzW2ldID0ge1xuICAgICAgICAgIGluZGV4OiB0aGlzLl9sYXRlc3RFcnJvckluZGV4KyssXG4gICAgICAgICAgZXJyb3I6IGV2ZW50LnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDwgdGhpcy5fYWN0aXZlQ291bnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgICAgICB0aGlzLl9lbWl0QWZ0ZXJBY3RpdmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lbWl0SWZGdWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRU5EXG5cbiAgICAgIGlmIChpIDwgdGhpcy5fYWN0aXZlQ291bnQpIHtcbiAgICAgICAgdGhpcy5fYWxpdmVDb3VudC0tO1xuICAgICAgICBpZiAodGhpcy5fYWxpdmVDb3VudCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9lbmRBZnRlckFjdGl2YXRpb24gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICBTdHJlYW0ucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZXMgPSBudWxsO1xuICAgIHRoaXMuX2xhdGVzdFZhbHVlcyA9IG51bGw7XG4gICAgdGhpcy5fbGF0ZXN0RXJyb3JzID0gbnVsbDtcbiAgICB0aGlzLl9jb21iaW5hdG9yID0gbnVsbDtcbiAgICB0aGlzLl8kaGFuZGxlcnMgPSBudWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gY29tYmluZUFzQXJyYXkoYWN0aXZlKSB7XG4gIHZhciBwYXNzaXZlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcbiAgdmFyIGNvbWJpbmF0b3IgPSBhcmd1bWVudHNbMl07XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhc3NpdmUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb21iaW5lIGNhbiBvbmx5IGNvbWJpbmUgYWN0aXZlIGFuZCBwYXNzaXZlIGNvbGxlY3Rpb25zIG9mIHRoZSBzYW1lIHR5cGUuJyk7XG4gIH1cblxuICBjb21iaW5hdG9yID0gY29tYmluYXRvciA/IHNwcmVhZChjb21iaW5hdG9yLCBhY3RpdmUubGVuZ3RoICsgcGFzc2l2ZS5sZW5ndGgpIDogZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbiAgcmV0dXJuIGFjdGl2ZS5sZW5ndGggPT09IDAgPyBuZXZlcigpIDogbmV3IENvbWJpbmUoYWN0aXZlLCBwYXNzaXZlLCBjb21iaW5hdG9yKTtcbn1cblxuZnVuY3Rpb24gY29tYmluZUFzT2JqZWN0KGFjdGl2ZSkge1xuICB2YXIgcGFzc2l2ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBjb21iaW5hdG9yID0gYXJndW1lbnRzWzJdO1xuXG4gIGlmICh0eXBlb2YgcGFzc2l2ZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShwYXNzaXZlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29tYmluZSBjYW4gb25seSBjb21iaW5lIGFjdGl2ZSBhbmQgcGFzc2l2ZSBjb2xsZWN0aW9ucyBvZiB0aGUgc2FtZSB0eXBlLicpO1xuICB9XG5cbiAgdmFyIGtleXMgPSBbXSxcbiAgICAgIGFjdGl2ZU9ic2VydmFibGVzID0gW10sXG4gICAgICBwYXNzaXZlT2JzZXJ2YWJsZXMgPSBbXTtcblxuICBjb2xsZWN0KGFjdGl2ZSwga2V5cywgYWN0aXZlT2JzZXJ2YWJsZXMpO1xuICBjb2xsZWN0KHBhc3NpdmUsIGtleXMsIHBhc3NpdmVPYnNlcnZhYmxlcyk7XG5cbiAgdmFyIG9iamVjdGlmeSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICB2YXIgZXZlbnQgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gdmFsdWVzLmxlbmd0aCAtIDE7IDAgPD0gaTsgaS0tKSB7XG4gICAgICBldmVudFtrZXlzW2ldXSA9IHZhbHVlc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbWJpbmF0b3IgPyBjb21iaW5hdG9yKGV2ZW50KSA6IGV2ZW50O1xuICB9O1xuXG4gIHJldHVybiBhY3RpdmVPYnNlcnZhYmxlcy5sZW5ndGggPT09IDAgPyBuZXZlcigpIDogbmV3IENvbWJpbmUoYWN0aXZlT2JzZXJ2YWJsZXMsIHBhc3NpdmVPYnNlcnZhYmxlcywgb2JqZWN0aWZ5KTtcbn1cblxuZnVuY3Rpb24gY29tYmluZShhY3RpdmUsIHBhc3NpdmUsIGNvbWJpbmF0b3IpIHtcbiAgaWYgKHR5cGVvZiBwYXNzaXZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29tYmluYXRvciA9IHBhc3NpdmU7XG4gICAgcGFzc2l2ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFjdGl2ZSkgPyBjb21iaW5lQXNBcnJheShhY3RpdmUsIHBhc3NpdmUsIGNvbWJpbmF0b3IpIDogY29tYmluZUFzT2JqZWN0KGFjdGl2ZSwgcGFzc2l2ZSwgY29tYmluYXRvcik7XG59XG5cbnZhciBPYnNlcnZhYmxlJDIgPSB7XG4gIGVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldmVyKCk7XG4gIH0sXG5cblxuICAvLyBNb25vaWQgYmFzZWQgb24gbWVyZ2UoKSBzZWVtcyBtb3JlIHVzZWZ1bCB0aGFuIG9uZSBiYXNlZCBvbiBjb25jYXQoKS5cbiAgY29uY2F0OiBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLm1lcmdlKGIpO1xuICB9LFxuICBvZjogZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gY29uc3RhbnQoeCk7XG4gIH0sXG4gIG1hcDogZnVuY3Rpb24gKGZuLCBvYnMpIHtcbiAgICByZXR1cm4gb2JzLm1hcChmbik7XG4gIH0sXG4gIGJpbWFwOiBmdW5jdGlvbiAoZm5FcnIsIGZuVmFsLCBvYnMpIHtcbiAgICByZXR1cm4gb2JzLm1hcEVycm9ycyhmbkVycikubWFwKGZuVmFsKTtcbiAgfSxcblxuXG4gIC8vIFRoaXMgYXAgc3RyaWN0bHkgc3BlYWtpbmcgaW5jb21wYXRpYmxlIHdpdGggY2hhaW4uIElmIHdlIGRlcml2ZSBhcCBmcm9tIGNoYWluIHdlIGdldFxuICAvLyBkaWZmZXJlbnQgKG5vdCB2ZXJ5IHVzZWZ1bCkgYmVoYXZpb3IuIEJ1dCBzcGVjIHJlcXVpcmVzIHRoYXQgaWYgbWV0aG9kIGNhbiBiZSBkZXJpdmVkXG4gIC8vIGl0IG11c3QgaGF2ZSB0aGUgc2FtZSBiZWhhdmlvciBhcyBoYW5kLXdyaXR0ZW4gbWV0aG9kLiBXZSBpbnRlbnRpb25hbGx5IHZpb2xhdGUgdGhlIHNwZWNcbiAgLy8gaW4gaG9wZSB0aGF0IGl0IHdvbid0IGNhdXNlIG1hbnkgdHJvdWJsZXMgaW4gcHJhY3RpY2UuIEFuZCBpbiByZXR1cm4gd2UgaGF2ZSBtb3JlIHVzZWZ1bCB0eXBlLlxuICBhcDogZnVuY3Rpb24gKG9ic0ZuLCBvYnNWYWwpIHtcbiAgICByZXR1cm4gY29tYmluZShbb2JzRm4sIG9ic1ZhbF0sIGZ1bmN0aW9uIChmbiwgdmFsKSB7XG4gICAgICByZXR1cm4gZm4odmFsKTtcbiAgICB9KTtcbiAgfSxcbiAgY2hhaW46IGZ1bmN0aW9uIChmbiwgb2JzKSB7XG4gICAgcmV0dXJuIG9icy5mbGF0TWFwKGZuKTtcbiAgfVxufTtcblxuXG5cbnZhciBzdGF0aWNMYW5kID0gT2JqZWN0LmZyZWV6ZSh7XG5cdE9ic2VydmFibGU6IE9ic2VydmFibGUkMlxufSk7XG5cbnZhciBtaXhpbiA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdGhpcy5fZW1pdFZhbHVlKGZuKHgpKTtcbiAgfVxufTtcblxudmFyIFMkNyA9IGNyZWF0ZVN0cmVhbSgnbWFwJywgbWl4aW4pO1xudmFyIFAkMyA9IGNyZWF0ZVByb3BlcnR5KCdtYXAnLCBtaXhpbik7XG5cbnZhciBpZCA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gbWFwJDEob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogaWQ7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkNywgUCQzKSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDEgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIGlmIChmbih4KSkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkOCA9IGNyZWF0ZVN0cmVhbSgnZmlsdGVyJywgbWl4aW4kMSk7XG52YXIgUCQ0ID0gY3JlYXRlUHJvcGVydHkoJ2ZpbHRlcicsIG1peGluJDEpO1xuXG52YXIgaWQkMSA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gZmlsdGVyKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkJDE7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkOCwgUCQ0KSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDIgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuID0gX3JlZi5uO1xuXG4gICAgdGhpcy5fbiA9IG47XG4gICAgaWYgKG4gPD0gMCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX24tLTtcbiAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgaWYgKHRoaXMuX24gPT09IDApIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDkgPSBjcmVhdGVTdHJlYW0oJ3Rha2UnLCBtaXhpbiQyKTtcbnZhciBQJDUgPSBjcmVhdGVQcm9wZXJ0eSgndGFrZScsIG1peGluJDIpO1xuXG5mdW5jdGlvbiB0YWtlKG9icywgbikge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQ5LCBQJDUpKShvYnMsIHsgbjogbiB9KTtcbn1cblxudmFyIG1peGluJDMgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuID0gX3JlZi5uO1xuXG4gICAgdGhpcy5fbiA9IG47XG4gICAgaWYgKG4gPD0gMCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX24tLTtcbiAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgaWYgKHRoaXMuX24gPT09IDApIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDEwID0gY3JlYXRlU3RyZWFtKCd0YWtlRXJyb3JzJywgbWl4aW4kMyk7XG52YXIgUCQ2ID0gY3JlYXRlUHJvcGVydHkoJ3Rha2VFcnJvcnMnLCBtaXhpbiQzKTtcblxuZnVuY3Rpb24gdGFrZUVycm9ycyhvYnMsIG4pIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTAsIFAkNikpKG9icywgeyBuOiBuIH0pO1xufVxuXG52YXIgbWl4aW4kNCA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKGZuKHgpKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDExID0gY3JlYXRlU3RyZWFtKCd0YWtlV2hpbGUnLCBtaXhpbiQ0KTtcbnZhciBQJDcgPSBjcmVhdGVQcm9wZXJ0eSgndGFrZVdoaWxlJywgbWl4aW4kNCk7XG5cbnZhciBpZCQyID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5mdW5jdGlvbiB0YWtlV2hpbGUob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogaWQkMjtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQxMSwgUCQ3KSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDUgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fbGFzdFZhbHVlID0gTk9USElORztcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9sYXN0VmFsdWUgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fbGFzdFZhbHVlID0geDtcbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9sYXN0VmFsdWUgIT09IE5PVEhJTkcpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl9sYXN0VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH1cbn07XG5cbnZhciBTJDEyID0gY3JlYXRlU3RyZWFtKCdsYXN0JywgbWl4aW4kNSk7XG52YXIgUCQ4ID0gY3JlYXRlUHJvcGVydHkoJ2xhc3QnLCBtaXhpbiQ1KTtcblxuZnVuY3Rpb24gbGFzdChvYnMpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTIsIFAkOCkpKG9icyk7XG59XG5cbnZhciBtaXhpbiQ2ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbiA9IF9yZWYubjtcblxuICAgIHRoaXMuX24gPSBNYXRoLm1heCgwLCBuKTtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9uID09PSAwKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX24tLTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDEzID0gY3JlYXRlU3RyZWFtKCdza2lwJywgbWl4aW4kNik7XG52YXIgUCQ5ID0gY3JlYXRlUHJvcGVydHkoJ3NraXAnLCBtaXhpbiQ2KTtcblxuZnVuY3Rpb24gc2tpcChvYnMsIG4pIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTMsIFAkOSkpKG9icywgeyBuOiBuIH0pO1xufVxuXG52YXIgbWl4aW4kNyA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKHRoaXMuX2ZuICE9PSBudWxsICYmICFmbih4KSkge1xuICAgICAgdGhpcy5fZm4gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZm4gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDE0ID0gY3JlYXRlU3RyZWFtKCdza2lwV2hpbGUnLCBtaXhpbiQ3KTtcbnZhciBQJDEwID0gY3JlYXRlUHJvcGVydHkoJ3NraXBXaGlsZScsIG1peGluJDcpO1xuXG52YXIgaWQkMyA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gc2tpcFdoaWxlKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkJDM7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTQsIFAkMTApKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgbWl4aW4kOCA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fcHJldiA9IE5PVEhJTkc7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKHRoaXMuX3ByZXYgPT09IE5PVEhJTkcgfHwgIWZuKHRoaXMuX3ByZXYsIHgpKSB7XG4gICAgICB0aGlzLl9wcmV2ID0geDtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDE1ID0gY3JlYXRlU3RyZWFtKCdza2lwRHVwbGljYXRlcycsIG1peGluJDgpO1xudmFyIFAkMTEgPSBjcmVhdGVQcm9wZXJ0eSgnc2tpcER1cGxpY2F0ZXMnLCBtaXhpbiQ4KTtcblxudmFyIGVxID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5mdW5jdGlvbiBza2lwRHVwbGljYXRlcyhvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBlcTtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQxNSwgUCQxMSkpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQ5ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuLFxuICAgICAgICBzZWVkID0gX3JlZi5zZWVkO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9wcmV2ID0gc2VlZDtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9wcmV2ID0gbnVsbDtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodGhpcy5fcHJldiAhPT0gTk9USElORykge1xuICAgICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoZm4odGhpcy5fcHJldiwgeCkpO1xuICAgIH1cbiAgICB0aGlzLl9wcmV2ID0geDtcbiAgfVxufTtcblxudmFyIFMkMTYgPSBjcmVhdGVTdHJlYW0oJ2RpZmYnLCBtaXhpbiQ5KTtcbnZhciBQJDEyID0gY3JlYXRlUHJvcGVydHkoJ2RpZmYnLCBtaXhpbiQ5KTtcblxuZnVuY3Rpb24gZGVmYXVsdEZuKGEsIGIpIHtcbiAgcmV0dXJuIFthLCBiXTtcbn1cblxuZnVuY3Rpb24gZGlmZihvYnMsIGZuKSB7XG4gIHZhciBzZWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBOT1RISU5HO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDE2LCBQJDEyKSkob2JzLCB7IGZuOiBmbiB8fCBkZWZhdWx0Rm4sIHNlZWQ6IHNlZWQgfSk7XG59XG5cbnZhciBQJDEzID0gY3JlYXRlUHJvcGVydHkoJ3NjYW4nLCB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm4sXG4gICAgICAgIHNlZWQgPSBfcmVmLnNlZWQ7XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX3NlZWQgPSBzZWVkO1xuICAgIGlmIChzZWVkICE9PSBOT1RISU5HKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoc2VlZCk7XG4gICAgfVxuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgICB0aGlzLl9zZWVkID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIGlmICh0aGlzLl9jdXJyZW50RXZlbnQgPT09IG51bGwgfHwgdGhpcy5fY3VycmVudEV2ZW50LnR5cGUgPT09IEVSUk9SKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5fc2VlZCA9PT0gTk9USElORyA/IHggOiBmbih0aGlzLl9zZWVkLCB4KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShmbih0aGlzLl9jdXJyZW50RXZlbnQudmFsdWUsIHgpKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzY2FuKG9icywgZm4pIHtcbiAgdmFyIHNlZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IE5PVEhJTkc7XG5cbiAgcmV0dXJuIG5ldyBQJDEzKG9icywgeyBmbjogZm4sIHNlZWQ6IHNlZWQgfSk7XG59XG5cbnZhciBtaXhpbiQxMCA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdmFyIHhzID0gZm4oeCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHhzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDE3ID0gY3JlYXRlU3RyZWFtKCdmbGF0dGVuJywgbWl4aW4kMTApO1xuXG52YXIgaWQkNCA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gZmxhdHRlbihvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBpZCQ0O1xuXG4gIHJldHVybiBuZXcgUyQxNyhvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgRU5EX01BUktFUiA9IHt9O1xuXG52YXIgbWl4aW4kMTEgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgd2FpdCA9IF9yZWYud2FpdDtcblxuICAgIHRoaXMuX3dhaXQgPSBNYXRoLm1heCgwLCB3YWl0KTtcbiAgICB0aGlzLl9idWZmID0gW107XG4gICAgdGhpcy5fJHNoaWZ0QnVmZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLl9idWZmLnNoaWZ0KCk7XG4gICAgICBpZiAodmFsdWUgPT09IEVORF9NQVJLRVIpIHtcbiAgICAgICAgX3RoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9lbWl0VmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYnVmZiA9IG51bGw7XG4gICAgdGhpcy5fJHNoaWZ0QnVmZiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idWZmLnB1c2goeCk7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuXyRzaGlmdEJ1ZmYsIHRoaXMuX3dhaXQpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1ZmYucHVzaChFTkRfTUFSS0VSKTtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5fJHNoaWZ0QnVmZiwgdGhpcy5fd2FpdCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQxOCA9IGNyZWF0ZVN0cmVhbSgnZGVsYXknLCBtaXhpbiQxMSk7XG52YXIgUCQxNCA9IGNyZWF0ZVByb3BlcnR5KCdkZWxheScsIG1peGluJDExKTtcblxuZnVuY3Rpb24gZGVsYXkob2JzLCB3YWl0KSB7XG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDE4LCBQJDE0KSkob2JzLCB7IHdhaXQ6IHdhaXQgfSk7XG59XG5cbnZhciBub3cgPSBEYXRlLm5vdyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIERhdGUubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG52YXIgbWl4aW4kMTIgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgd2FpdCA9IF9yZWYud2FpdCxcbiAgICAgICAgbGVhZGluZyA9IF9yZWYubGVhZGluZyxcbiAgICAgICAgdHJhaWxpbmcgPSBfcmVmLnRyYWlsaW5nO1xuXG4gICAgdGhpcy5fd2FpdCA9IE1hdGgubWF4KDAsIHdhaXQpO1xuICAgIHRoaXMuX2xlYWRpbmcgPSBsZWFkaW5nO1xuICAgIHRoaXMuX3RyYWlsaW5nID0gdHJhaWxpbmc7XG4gICAgdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICB0aGlzLl9lbmRMYXRlciA9IGZhbHNlO1xuICAgIHRoaXMuX2xhc3RDYWxsVGltZSA9IDA7XG4gICAgdGhpcy5fJHRyYWlsaW5nQ2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fdHJhaWxpbmdDYWxsKCk7XG4gICAgfTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl8kdHJhaWxpbmdDYWxsID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjdXJUaW1lID0gbm93KCk7XG4gICAgICBpZiAodGhpcy5fbGFzdENhbGxUaW1lID09PSAwICYmICF0aGlzLl9sZWFkaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDYWxsVGltZSA9IGN1clRpbWU7XG4gICAgICB9XG4gICAgICB2YXIgcmVtYWluaW5nID0gdGhpcy5fd2FpdCAtIChjdXJUaW1lIC0gdGhpcy5fbGFzdENhbGxUaW1lKTtcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICB0aGlzLl9jYW5jZWxUcmFpbGluZygpO1xuICAgICAgICB0aGlzLl9sYXN0Q2FsbFRpbWUgPSBjdXJUaW1lO1xuICAgICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3RyYWlsaW5nKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbFRyYWlsaW5nKCk7XG4gICAgICAgIHRoaXMuX3RyYWlsaW5nVmFsdWUgPSB4O1xuICAgICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuXyR0cmFpbGluZ0NhbGwsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3RpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl9lbmRMYXRlciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfY2FuY2VsVHJhaWxpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fdGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dElkKTtcbiAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICB9LFxuICBfdHJhaWxpbmdDYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX3RyYWlsaW5nVmFsdWUpO1xuICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fbGFzdENhbGxUaW1lID0gIXRoaXMuX2xlYWRpbmcgPyAwIDogbm93KCk7XG4gICAgaWYgKHRoaXMuX2VuZExhdGVyKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQxOSA9IGNyZWF0ZVN0cmVhbSgndGhyb3R0bGUnLCBtaXhpbiQxMik7XG52YXIgUCQxNSA9IGNyZWF0ZVByb3BlcnR5KCd0aHJvdHRsZScsIG1peGluJDEyKTtcblxuZnVuY3Rpb24gdGhyb3R0bGUob2JzLCB3YWl0KSB7XG4gIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmMiRsZWFkaW5nID0gX3JlZjIubGVhZGluZyxcbiAgICAgIGxlYWRpbmcgPSBfcmVmMiRsZWFkaW5nID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZjIkbGVhZGluZyxcbiAgICAgIF9yZWYyJHRyYWlsaW5nID0gX3JlZjIudHJhaWxpbmcsXG4gICAgICB0cmFpbGluZyA9IF9yZWYyJHRyYWlsaW5nID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZjIkdHJhaWxpbmc7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTksIFAkMTUpKShvYnMsIHsgd2FpdDogd2FpdCwgbGVhZGluZzogbGVhZGluZywgdHJhaWxpbmc6IHRyYWlsaW5nIH0pO1xufVxuXG52YXIgbWl4aW4kMTMgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgd2FpdCA9IF9yZWYud2FpdCxcbiAgICAgICAgaW1tZWRpYXRlID0gX3JlZi5pbW1lZGlhdGU7XG5cbiAgICB0aGlzLl93YWl0ID0gTWF0aC5tYXgoMCwgd2FpdCk7XG4gICAgdGhpcy5faW1tZWRpYXRlID0gaW1tZWRpYXRlO1xuICAgIHRoaXMuX2xhc3RBdHRlbXB0ID0gMDtcbiAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMuX2xhdGVyVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX2VuZExhdGVyID0gZmFsc2U7XG4gICAgdGhpcy5fJGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9sYXRlcigpO1xuICAgIH07XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fbGF0ZXJWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fJGxhdGVyID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xhc3RBdHRlbXB0ID0gbm93KCk7XG4gICAgICBpZiAodGhpcy5faW1tZWRpYXRlICYmICF0aGlzLl90aW1lb3V0SWQpIHtcbiAgICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl90aW1lb3V0SWQpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dElkID0gc2V0VGltZW91dCh0aGlzLl8kbGF0ZXIsIHRoaXMuX3dhaXQpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5fbGF0ZXJWYWx1ZSA9IHg7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3RpbWVvdXRJZCAmJiAhdGhpcy5faW1tZWRpYXRlKSB7XG4gICAgICAgIHRoaXMuX2VuZExhdGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9sYXRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0ID0gbm93KCkgLSB0aGlzLl9sYXN0QXR0ZW1wdDtcbiAgICBpZiAobGFzdCA8IHRoaXMuX3dhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuXyRsYXRlciwgdGhpcy5fd2FpdCAtIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9pbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2xhdGVyVmFsdWUpO1xuICAgICAgICB0aGlzLl9sYXRlclZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9lbmRMYXRlcikge1xuICAgICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQyMCA9IGNyZWF0ZVN0cmVhbSgnZGVib3VuY2UnLCBtaXhpbiQxMyk7XG52YXIgUCQxNiA9IGNyZWF0ZVByb3BlcnR5KCdkZWJvdW5jZScsIG1peGluJDEzKTtcblxuZnVuY3Rpb24gZGVib3VuY2Uob2JzLCB3YWl0KSB7XG4gIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmMiRpbW1lZGlhdGUgPSBfcmVmMi5pbW1lZGlhdGUsXG4gICAgICBpbW1lZGlhdGUgPSBfcmVmMiRpbW1lZGlhdGUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZjIkaW1tZWRpYXRlO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDIwLCBQJDE2KSkob2JzLCB7IHdhaXQ6IHdhaXQsIGltbWVkaWF0ZTogaW1tZWRpYXRlIH0pO1xufVxuXG52YXIgbWl4aW4kMTQgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIHRoaXMuX2VtaXRFcnJvcihmbih4KSk7XG4gIH1cbn07XG5cbnZhciBTJDIxID0gY3JlYXRlU3RyZWFtKCdtYXBFcnJvcnMnLCBtaXhpbiQxNCk7XG52YXIgUCQxNyA9IGNyZWF0ZVByb3BlcnR5KCdtYXBFcnJvcnMnLCBtaXhpbiQxNCk7XG5cbnZhciBpZCQ1ID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5mdW5jdGlvbiBtYXBFcnJvcnMob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogaWQkNTtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQyMSwgUCQxNykpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQxNSA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKGZuKHgpKSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQyMiA9IGNyZWF0ZVN0cmVhbSgnZmlsdGVyRXJyb3JzJywgbWl4aW4kMTUpO1xudmFyIFAkMTggPSBjcmVhdGVQcm9wZXJ0eSgnZmlsdGVyRXJyb3JzJywgbWl4aW4kMTUpO1xuXG52YXIgaWQkNiA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gZmlsdGVyRXJyb3JzKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkJDY7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjIsIFAkMTgpKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgbWl4aW4kMTYgPSB7XG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKCkge31cbn07XG5cbnZhciBTJDIzID0gY3JlYXRlU3RyZWFtKCdpZ25vcmVWYWx1ZXMnLCBtaXhpbiQxNik7XG52YXIgUCQxOSA9IGNyZWF0ZVByb3BlcnR5KCdpZ25vcmVWYWx1ZXMnLCBtaXhpbiQxNik7XG5cbmZ1bmN0aW9uIGlnbm9yZVZhbHVlcyhvYnMpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjMsIFAkMTkpKShvYnMpO1xufVxuXG52YXIgbWl4aW4kMTcgPSB7XG4gIF9oYW5kbGVFcnJvcjogZnVuY3Rpb24gKCkge31cbn07XG5cbnZhciBTJDI0ID0gY3JlYXRlU3RyZWFtKCdpZ25vcmVFcnJvcnMnLCBtaXhpbiQxNyk7XG52YXIgUCQyMCA9IGNyZWF0ZVByb3BlcnR5KCdpZ25vcmVFcnJvcnMnLCBtaXhpbiQxNyk7XG5cbmZ1bmN0aW9uIGlnbm9yZUVycm9ycyhvYnMpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjQsIFAkMjApKShvYnMpO1xufVxuXG52YXIgbWl4aW4kMTggPSB7XG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uICgpIHt9XG59O1xuXG52YXIgUyQyNSA9IGNyZWF0ZVN0cmVhbSgnaWdub3JlRW5kJywgbWl4aW4kMTgpO1xudmFyIFAkMjEgPSBjcmVhdGVQcm9wZXJ0eSgnaWdub3JlRW5kJywgbWl4aW4kMTgpO1xuXG5mdW5jdGlvbiBpZ25vcmVFbmQob2JzKSB7XG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDI1LCBQJDIxKSkob2JzKTtcbn1cblxudmFyIG1peGluJDE5ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICB0aGlzLl9lbWl0VmFsdWUoZm4oKSk7XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59O1xuXG52YXIgUyQyNiA9IGNyZWF0ZVN0cmVhbSgnYmVmb3JlRW5kJywgbWl4aW4kMTkpO1xudmFyIFAkMjIgPSBjcmVhdGVQcm9wZXJ0eSgnYmVmb3JlRW5kJywgbWl4aW4kMTkpO1xuXG5mdW5jdGlvbiBiZWZvcmVFbmQob2JzLCBmbikge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQyNiwgUCQyMikpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQyMCA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG1pbiA9IF9yZWYubWluLFxuICAgICAgICBtYXggPSBfcmVmLm1heDtcblxuICAgIHRoaXMuX21heCA9IG1heDtcbiAgICB0aGlzLl9taW4gPSBtaW47XG4gICAgdGhpcy5fYnVmZiA9IFtdO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2J1ZmYgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fYnVmZiA9IHNsaWRlKHRoaXMuX2J1ZmYsIHgsIHRoaXMuX21heCk7XG4gICAgaWYgKHRoaXMuX2J1ZmYubGVuZ3RoID49IHRoaXMuX21pbikge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2J1ZmYpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMjcgPSBjcmVhdGVTdHJlYW0oJ3NsaWRpbmdXaW5kb3cnLCBtaXhpbiQyMCk7XG52YXIgUCQyMyA9IGNyZWF0ZVByb3BlcnR5KCdzbGlkaW5nV2luZG93JywgbWl4aW4kMjApO1xuXG5mdW5jdGlvbiBzbGlkaW5nV2luZG93KG9icywgbWF4KSB7XG4gIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjcsIFAkMjMpKShvYnMsIHsgbWluOiBtaW4sIG1heDogbWF4IH0pO1xufVxuXG52YXIgbWl4aW4kMjEgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm4sXG4gICAgICAgIGZsdXNoT25FbmQgPSBfcmVmLmZsdXNoT25FbmQ7XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX2ZsdXNoT25FbmQgPSBmbHVzaE9uRW5kO1xuICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9idWZmID0gbnVsbDtcbiAgfSxcbiAgX2ZsdXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmYgIT09IG51bGwgJiYgdGhpcy5fYnVmZi5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl9idWZmKTtcbiAgICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB0aGlzLl9idWZmLnB1c2goeCk7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKCFmbih4KSkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fZmx1c2hPbkVuZCkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59O1xuXG52YXIgUyQyOCA9IGNyZWF0ZVN0cmVhbSgnYnVmZmVyV2hpbGUnLCBtaXhpbiQyMSk7XG52YXIgUCQyNCA9IGNyZWF0ZVByb3BlcnR5KCdidWZmZXJXaGlsZScsIG1peGluJDIxKTtcblxudmFyIGlkJDcgPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geDtcbn07XG5cbmZ1bmN0aW9uIGJ1ZmZlcldoaWxlKG9icywgZm4pIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgIF9yZWYyJGZsdXNoT25FbmQgPSBfcmVmMi5mbHVzaE9uRW5kLFxuICAgICAgZmx1c2hPbkVuZCA9IF9yZWYyJGZsdXNoT25FbmQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmMiRmbHVzaE9uRW5kO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDI4LCBQJDI0KSkob2JzLCB7IGZuOiBmbiB8fCBpZCQ3LCBmbHVzaE9uRW5kOiBmbHVzaE9uRW5kIH0pO1xufVxuXG52YXIgbWl4aW4kMjIgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjb3VudCA9IF9yZWYuY291bnQsXG4gICAgICAgIGZsdXNoT25FbmQgPSBfcmVmLmZsdXNoT25FbmQ7XG5cbiAgICB0aGlzLl9jb3VudCA9IGNvdW50O1xuICAgIHRoaXMuX2ZsdXNoT25FbmQgPSBmbHVzaE9uRW5kO1xuICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9idWZmID0gbnVsbDtcbiAgfSxcbiAgX2ZsdXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmYgIT09IG51bGwgJiYgdGhpcy5fYnVmZi5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl9idWZmKTtcbiAgICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB0aGlzLl9idWZmLnB1c2goeCk7XG4gICAgaWYgKHRoaXMuX2J1ZmYubGVuZ3RoID49IHRoaXMuX2NvdW50KSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9mbHVzaE9uRW5kKSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH1cbn07XG5cbnZhciBTJDI5ID0gY3JlYXRlU3RyZWFtKCdidWZmZXJXaXRoQ291bnQnLCBtaXhpbiQyMik7XG52YXIgUCQyNSA9IGNyZWF0ZVByb3BlcnR5KCdidWZmZXJXaXRoQ291bnQnLCBtaXhpbiQyMik7XG5cbmZ1bmN0aW9uIGJ1ZmZlcldoaWxlJDEob2JzLCBjb3VudCkge1xuICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9LFxuICAgICAgX3JlZjIkZmx1c2hPbkVuZCA9IF9yZWYyLmZsdXNoT25FbmQsXG4gICAgICBmbHVzaE9uRW5kID0gX3JlZjIkZmx1c2hPbkVuZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYyJGZsdXNoT25FbmQ7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjksIFAkMjUpKShvYnMsIHsgY291bnQ6IGNvdW50LCBmbHVzaE9uRW5kOiBmbHVzaE9uRW5kIH0pO1xufVxuXG52YXIgbWl4aW4kMjMgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgd2FpdCA9IF9yZWYud2FpdCxcbiAgICAgICAgY291bnQgPSBfcmVmLmNvdW50LFxuICAgICAgICBmbHVzaE9uRW5kID0gX3JlZi5mbHVzaE9uRW5kO1xuXG4gICAgdGhpcy5fd2FpdCA9IHdhaXQ7XG4gICAgdGhpcy5fY291bnQgPSBjb3VudDtcbiAgICB0aGlzLl9mbHVzaE9uRW5kID0gZmx1c2hPbkVuZDtcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcbiAgICB0aGlzLl8kb25UaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9mbHVzaCgpO1xuICAgIH07XG4gICAgdGhpcy5fYnVmZiA9IFtdO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuXyRvblRpY2sgPSBudWxsO1xuICAgIHRoaXMuX2J1ZmYgPSBudWxsO1xuICB9LFxuICBfZmx1c2g6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYnVmZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2J1ZmYpO1xuICAgICAgdGhpcy5fYnVmZiA9IFtdO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgICBpZiAodGhpcy5fYnVmZi5sZW5ndGggPj0gdGhpcy5fY291bnQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxJZCk7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuXyRvblRpY2ssIHRoaXMuX3dhaXQpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9mbHVzaE9uRW5kICYmIHRoaXMuX2J1ZmYubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH0sXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5fJG9uVGljaywgdGhpcy5fd2FpdCk7XG4gICAgdGhpcy5fc291cmNlLm9uQW55KHRoaXMuXyRoYW5kbGVBbnkpOyAvLyBjb3BpZWQgZnJvbSBwYXR0ZXJucy9vbmUtc291cmNlXG4gIH0sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbElkICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSWQpO1xuICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX3NvdXJjZS5vZmZBbnkodGhpcy5fJGhhbmRsZUFueSk7IC8vIGNvcGllZCBmcm9tIHBhdHRlcm5zL29uZS1zb3VyY2VcbiAgfVxufTtcblxudmFyIFMkMzAgPSBjcmVhdGVTdHJlYW0oJ2J1ZmZlcldpdGhUaW1lT3JDb3VudCcsIG1peGluJDIzKTtcbnZhciBQJDI2ID0gY3JlYXRlUHJvcGVydHkoJ2J1ZmZlcldpdGhUaW1lT3JDb3VudCcsIG1peGluJDIzKTtcblxuZnVuY3Rpb24gYnVmZmVyV2l0aFRpbWVPckNvdW50KG9icywgd2FpdCwgY291bnQpIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fSxcbiAgICAgIF9yZWYyJGZsdXNoT25FbmQgPSBfcmVmMi5mbHVzaE9uRW5kLFxuICAgICAgZmx1c2hPbkVuZCA9IF9yZWYyJGZsdXNoT25FbmQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmMiRmbHVzaE9uRW5kO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDMwLCBQJDI2KSkob2JzLCB7IHdhaXQ6IHdhaXQsIGNvdW50OiBjb3VudCwgZmx1c2hPbkVuZDogZmx1c2hPbkVuZCB9KTtcbn1cblxuZnVuY3Rpb24geGZvcm1Gb3JPYnMob2JzKSB7XG4gIHJldHVybiB7XG4gICAgJ0BAdHJhbnNkdWNlci9zdGVwJzogZnVuY3Rpb24gKHJlcywgaW5wdXQpIHtcbiAgICAgIG9icy5fZW1pdFZhbHVlKGlucHV0KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgJ0BAdHJhbnNkdWNlci9yZXN1bHQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBvYnMuX2VtaXRFbmQoKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIG1peGluJDI0ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNkdWNlciA9IF9yZWYudHJhbnNkdWNlcjtcblxuICAgIHRoaXMuX3hmb3JtID0gdHJhbnNkdWNlcih4Zm9ybUZvck9icyh0aGlzKSk7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5feGZvcm0gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgaWYgKHRoaXMuX3hmb3JtWydAQHRyYW5zZHVjZXIvc3RlcCddKG51bGwsIHgpICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl94Zm9ybVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKG51bGwpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3hmb3JtWydAQHRyYW5zZHVjZXIvcmVzdWx0J10obnVsbCk7XG4gIH1cbn07XG5cbnZhciBTJDMxID0gY3JlYXRlU3RyZWFtKCd0cmFuc2R1Y2UnLCBtaXhpbiQyNCk7XG52YXIgUCQyNyA9IGNyZWF0ZVByb3BlcnR5KCd0cmFuc2R1Y2UnLCBtaXhpbiQyNCk7XG5cbmZ1bmN0aW9uIHRyYW5zZHVjZShvYnMsIHRyYW5zZHVjZXIpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMzEsIFAkMjcpKShvYnMsIHsgdHJhbnNkdWNlcjogdHJhbnNkdWNlciB9KTtcbn1cblxudmFyIG1peGluJDI1ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5faGFuZGxlciA9IGZuO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBlbWl0dGVyKHRoaXMpO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2hhbmRsZXIgPSBudWxsO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlQW55OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLl9oYW5kbGVyKHRoaXMuX2VtaXR0ZXIsIGV2ZW50KTtcbiAgfVxufTtcblxudmFyIFMkMzIgPSBjcmVhdGVTdHJlYW0oJ3dpdGhIYW5kbGVyJywgbWl4aW4kMjUpO1xudmFyIFAkMjggPSBjcmVhdGVQcm9wZXJ0eSgnd2l0aEhhbmRsZXInLCBtaXhpbiQyNSk7XG5cbmZ1bmN0aW9uIHdpdGhIYW5kbGVyKG9icywgZm4pIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMzIsIFAkMjgpKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gWmlwKHNvdXJjZXMsIGNvbWJpbmF0b3IpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcblxuICB0aGlzLl9idWZmZXJzID0gbWFwKHNvdXJjZXMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaXNBcnJheShzb3VyY2UpID8gY2xvbmVBcnJheShzb3VyY2UpIDogW107XG4gIH0pO1xuICB0aGlzLl9zb3VyY2VzID0gbWFwKHNvdXJjZXMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaXNBcnJheShzb3VyY2UpID8gbmV2ZXIoKSA6IHNvdXJjZTtcbiAgfSk7XG5cbiAgdGhpcy5fY29tYmluYXRvciA9IGNvbWJpbmF0b3IgPyBzcHJlYWQoY29tYmluYXRvciwgdGhpcy5fc291cmNlcy5sZW5ndGgpIDogZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbiAgdGhpcy5fYWxpdmVDb3VudCA9IDA7XG5cbiAgdGhpcy5fJGhhbmRsZXJzID0gW107XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICBfdGhpcy5fJGhhbmRsZXJzLnB1c2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMuX2hhbmRsZUFueShpLCBldmVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgX2xvb3AoaSk7XG4gIH1cbn1cblxuaW5oZXJpdChaaXAsIFN0cmVhbSwge1xuICBfbmFtZTogJ3ppcCcsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmIGFsbCBzb3VyY2VzIGFyZSBhcnJheXNcbiAgICB3aGlsZSAodGhpcy5faXNGdWxsKCkpIHtcbiAgICAgIHRoaXMuX2VtaXQoKTtcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fc291cmNlcy5sZW5ndGg7XG4gICAgdGhpcy5fYWxpdmVDb3VudCA9IGxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aCAmJiB0aGlzLl9hY3RpdmU7IGkrKykge1xuICAgICAgdGhpcy5fc291cmNlc1tpXS5vbkFueSh0aGlzLl8kaGFuZGxlcnNbaV0pO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9mZkFueSh0aGlzLl8kaGFuZGxlcnNbaV0pO1xuICAgIH1cbiAgfSxcbiAgX2VtaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KHRoaXMuX2J1ZmZlcnMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2J1ZmZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IHRoaXMuX2J1ZmZlcnNbaV0uc2hpZnQoKTtcbiAgICB9XG4gICAgdmFyIGNvbWJpbmF0b3IgPSB0aGlzLl9jb21iaW5hdG9yO1xuICAgIHRoaXMuX2VtaXRWYWx1ZShjb21iaW5hdG9yKHZhbHVlcykpO1xuICB9LFxuICBfaXNGdWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9idWZmZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fYnVmZmVyc1tpXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgX2hhbmRsZUFueTogZnVuY3Rpb24gKGksIGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFZBTFVFKSB7XG4gICAgICB0aGlzLl9idWZmZXJzW2ldLnB1c2goZXZlbnQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2lzRnVsbCgpKSB7XG4gICAgICAgIHRoaXMuX2VtaXQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IEVSUk9SKSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoZXZlbnQudmFsdWUpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICB0aGlzLl9hbGl2ZUNvdW50LS07XG4gICAgICBpZiAodGhpcy5fYWxpdmVDb3VudCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICBTdHJlYW0ucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZXMgPSBudWxsO1xuICAgIHRoaXMuX2J1ZmZlcnMgPSBudWxsO1xuICAgIHRoaXMuX2NvbWJpbmF0b3IgPSBudWxsO1xuICAgIHRoaXMuXyRoYW5kbGVycyA9IG51bGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB6aXAob2JzZXJ2YWJsZXMsIGNvbWJpbmF0b3IgLyogRnVuY3Rpb24gfCBmYWxzZXkgKi8pIHtcbiAgcmV0dXJuIG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMCA/IG5ldmVyKCkgOiBuZXcgWmlwKG9ic2VydmFibGVzLCBjb21iaW5hdG9yKTtcbn1cblxudmFyIGlkJDggPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geDtcbn07XG5cbmZ1bmN0aW9uIEFic3RyYWN0UG9vbCgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJHF1ZXVlTGltID0gX3JlZi5xdWV1ZUxpbSxcbiAgICAgIHF1ZXVlTGltID0gX3JlZiRxdWV1ZUxpbSA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkcXVldWVMaW0sXG4gICAgICBfcmVmJGNvbmN1ckxpbSA9IF9yZWYuY29uY3VyTGltLFxuICAgICAgY29uY3VyTGltID0gX3JlZiRjb25jdXJMaW0gPT09IHVuZGVmaW5lZCA/IC0xIDogX3JlZiRjb25jdXJMaW0sXG4gICAgICBfcmVmJGRyb3AgPSBfcmVmLmRyb3AsXG4gICAgICBkcm9wID0gX3JlZiRkcm9wID09PSB1bmRlZmluZWQgPyAnbmV3JyA6IF9yZWYkZHJvcDtcblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcblxuICB0aGlzLl9xdWV1ZUxpbSA9IHF1ZXVlTGltIDwgMCA/IC0xIDogcXVldWVMaW07XG4gIHRoaXMuX2NvbmN1ckxpbSA9IGNvbmN1ckxpbSA8IDAgPyAtMSA6IGNvbmN1ckxpbTtcbiAgdGhpcy5fZHJvcCA9IGRyb3A7XG4gIHRoaXMuX3F1ZXVlID0gW107XG4gIHRoaXMuX2N1clNvdXJjZXMgPSBbXTtcbiAgdGhpcy5fJGhhbmRsZVN1YkFueSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBfdGhpcy5faGFuZGxlU3ViQW55KGV2ZW50KTtcbiAgfTtcbiAgdGhpcy5fJGVuZEhhbmRsZXJzID0gW107XG4gIHRoaXMuX2N1cnJlbnRseUFkZGluZyA9IG51bGw7XG5cbiAgaWYgKHRoaXMuX2NvbmN1ckxpbSA9PT0gMCkge1xuICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgfVxufVxuXG5pbmhlcml0KEFic3RyYWN0UG9vbCwgU3RyZWFtLCB7XG4gIF9uYW1lOiAnYWJzdHJhY3RQb29sJyxcblxuICBfYWRkOiBmdW5jdGlvbiAob2JqLCB0b09icyAvKiBGdW5jdGlvbiB8IGZhbHNleSAqLykge1xuICAgIHRvT2JzID0gdG9PYnMgfHwgaWQkODtcbiAgICBpZiAodGhpcy5fY29uY3VyTGltID09PSAtMSB8fCB0aGlzLl9jdXJTb3VyY2VzLmxlbmd0aCA8IHRoaXMuX2NvbmN1ckxpbSkge1xuICAgICAgdGhpcy5fYWRkVG9DdXIodG9PYnMob2JqKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9xdWV1ZUxpbSA9PT0gLTEgfHwgdGhpcy5fcXVldWUubGVuZ3RoIDwgdGhpcy5fcXVldWVMaW0pIHtcbiAgICAgICAgdGhpcy5fYWRkVG9RdWV1ZSh0b09icyhvYmopKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZHJvcCA9PT0gJ29sZCcpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlT2xkZXN0KCk7XG4gICAgICAgIHRoaXMuX2FkZChvYmosIHRvT2JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9hZGRBbGw6IGZ1bmN0aW9uIChvYnNzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBmb3JFYWNoKG9ic3MsIGZ1bmN0aW9uIChvYnMpIHtcbiAgICAgIHJldHVybiBfdGhpczIuX2FkZChvYnMpO1xuICAgIH0pO1xuICB9LFxuICBfcmVtb3ZlOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgaWYgKHRoaXMuX3JlbW92ZUN1cihvYnMpID09PSAtMSkge1xuICAgICAgdGhpcy5fcmVtb3ZlUXVldWUob2JzKTtcbiAgICB9XG4gIH0sXG4gIF9hZGRUb1F1ZXVlOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgdGhpcy5fcXVldWUgPSBjb25jYXQodGhpcy5fcXVldWUsIFtvYnNdKTtcbiAgfSxcbiAgX2FkZFRvQ3VyOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgLy8gSEFDSzpcbiAgICAgIC8vXG4gICAgICAvLyBXZSBoYXZlIHR3byBvcHRpbWl6YXRpb25zIGZvciBjYXNlcyB3aGVuIGBvYnNgIGlzIGVuZGVkLiBXZSBkb24ndCB3YW50XG4gICAgICAvLyB0byBhZGQgc3VjaCBvYnNlcnZhYmxlIHRvIHRoZSBsaXN0LCBidXQgb25seSB3YW50IHRvIGVtaXQgZXZlbnRzXG4gICAgICAvLyBmcm9tIGl0IChpZiBpdCBoYXMgc29tZSkuXG4gICAgICAvL1xuICAgICAgLy8gSW5zdGVhZCBvZiB0aGlzIGhhY2tzLCB3ZSBjb3VsZCBqdXN0IGRpZCBmb2xsb3dpbmcsXG4gICAgICAvLyBidXQgaXQgd291bGQgYmUgNS04IHRpbWVzIHNsb3dlcjpcbiAgICAgIC8vXG4gICAgICAvLyAgICAgdGhpcy5fY3VyU291cmNlcyA9IGNvbmNhdCh0aGlzLl9jdXJTb3VyY2VzLCBbb2JzXSk7XG4gICAgICAvLyAgICAgdGhpcy5fc3Vic2NyaWJlKG9icyk7XG4gICAgICAvL1xuXG4gICAgICAvLyAjMVxuICAgICAgLy8gVGhpcyBvbmUgZm9yIGNhc2VzIHdoZW4gYG9ic2AgYWxyZWFkeSBlbmRlZFxuICAgICAgLy8gZS5nLiwgS2VmaXIuY29uc3RhbnQoKSBvciBLZWZpci5uZXZlcigpXG4gICAgICBpZiAoIW9icy5fYWxpdmUpIHtcbiAgICAgICAgaWYgKG9icy5fY3VycmVudEV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5fZW1pdChvYnMuX2N1cnJlbnRFdmVudC50eXBlLCBvYnMuX2N1cnJlbnRFdmVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyAjMlxuICAgICAgLy8gVGhpcyBvbmUgaXMgZm9yIGNhc2VzIHdoZW4gYG9ic2AgZ29pbmcgdG8gZW5kIHN5bmNocm9ub3VzbHkgb25cbiAgICAgIC8vIGZpcnN0IHN1YnNjcmliZXIgZS5nLiwgS2VmaXIuc3RyZWFtKGVtID0+IHtlbS5lbWl0KDEpOyBlbS5lbmQoKX0pXG4gICAgICB0aGlzLl9jdXJyZW50bHlBZGRpbmcgPSBvYnM7XG4gICAgICBvYnMub25BbnkodGhpcy5fJGhhbmRsZVN1YkFueSk7XG4gICAgICB0aGlzLl9jdXJyZW50bHlBZGRpbmcgPSBudWxsO1xuICAgICAgaWYgKG9icy5fYWxpdmUpIHtcbiAgICAgICAgdGhpcy5fY3VyU291cmNlcyA9IGNvbmNhdCh0aGlzLl9jdXJTb3VyY2VzLCBbb2JzXSk7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLl9zdWJUb0VuZChvYnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2N1clNvdXJjZXMgPSBjb25jYXQodGhpcy5fY3VyU291cmNlcywgW29ic10pO1xuICAgIH1cbiAgfSxcbiAgX3N1YlRvRW5kOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMzLl9yZW1vdmVDdXIob2JzKTtcbiAgICB9O1xuICAgIHRoaXMuXyRlbmRIYW5kbGVycy5wdXNoKHsgb2JzOiBvYnMsIGhhbmRsZXI6IG9uRW5kIH0pO1xuICAgIG9icy5vbkVuZChvbkVuZCk7XG4gIH0sXG4gIF9zdWJzY3JpYmU6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICBvYnMub25BbnkodGhpcy5fJGhhbmRsZVN1YkFueSk7XG5cbiAgICAvLyBpdCBjYW4gYmVjb21lIGluYWN0aXZlIGluIHJlc3BvbmNlIG9mIHN1YnNjcmliaW5nIHRvIGBvYnMub25BbnlgIGFib3ZlXG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fc3ViVG9FbmQob2JzKTtcbiAgICB9XG4gIH0sXG4gIF91bnN1YnNjcmliZTogZnVuY3Rpb24gKG9icykge1xuICAgIG9icy5vZmZBbnkodGhpcy5fJGhhbmRsZVN1YkFueSk7XG5cbiAgICB2YXIgb25FbmRJID0gZmluZEJ5UHJlZCh0aGlzLl8kZW5kSGFuZGxlcnMsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmoub2JzID09PSBvYnM7XG4gICAgfSk7XG4gICAgaWYgKG9uRW5kSSAhPT0gLTEpIHtcbiAgICAgIG9icy5vZmZFbmQodGhpcy5fJGVuZEhhbmRsZXJzW29uRW5kSV0uaGFuZGxlcik7XG4gICAgICB0aGlzLl8kZW5kSGFuZGxlcnMuc3BsaWNlKG9uRW5kSSwgMSk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlU3ViQW55OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gVkFMVUUpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShldmVudC52YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBFUlJPUikge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKGV2ZW50LnZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIF9yZW1vdmVRdWV1ZTogZnVuY3Rpb24gKG9icykge1xuICAgIHZhciBpbmRleCA9IGZpbmQodGhpcy5fcXVldWUsIG9icyk7XG4gICAgdGhpcy5fcXVldWUgPSByZW1vdmUodGhpcy5fcXVldWUsIGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG4gIF9yZW1vdmVDdXI6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZShvYnMpO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBmaW5kKHRoaXMuX2N1clNvdXJjZXMsIG9icyk7XG4gICAgdGhpcy5fY3VyU291cmNlcyA9IHJlbW92ZSh0aGlzLl9jdXJTb3VyY2VzLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLl9wdWxsUXVldWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VyU291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fb25FbXB0eSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG4gIF9yZW1vdmVPbGRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9yZW1vdmVDdXIodGhpcy5fY3VyU291cmNlc1swXSk7XG4gIH0sXG4gIF9wdWxsUXVldWU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLl9xdWV1ZSA9IGNsb25lQXJyYXkodGhpcy5fcXVldWUpO1xuICAgICAgdGhpcy5fYWRkVG9DdXIodGhpcy5fcXVldWUuc2hpZnQoKSk7XG4gICAgfVxuICB9LFxuICBfb25BY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHNvdXJjZXMgPSB0aGlzLl9jdXJTb3VyY2VzOyBpIDwgc291cmNlcy5sZW5ndGggJiYgdGhpcy5fYWN0aXZlOyBpKyspIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZShzb3VyY2VzW2ldKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBzb3VyY2VzID0gdGhpcy5fY3VyU291cmNlczsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKHNvdXJjZXNbaV0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VycmVudGx5QWRkaW5nICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZSh0aGlzLl9jdXJyZW50bHlBZGRpbmcpO1xuICAgIH1cbiAgfSxcbiAgX2lzRW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VyU291cmNlcy5sZW5ndGggPT09IDA7XG4gIH0sXG4gIF9vbkVtcHR5OiBmdW5jdGlvbiAoKSB7fSxcbiAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgU3RyZWFtLnByb3RvdHlwZS5fY2xlYXIuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9xdWV1ZSA9IG51bGw7XG4gICAgdGhpcy5fY3VyU291cmNlcyA9IG51bGw7XG4gICAgdGhpcy5fJGhhbmRsZVN1YkFueSA9IG51bGw7XG4gICAgdGhpcy5fJGVuZEhhbmRsZXJzID0gbnVsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIE1lcmdlKHNvdXJjZXMpIHtcbiAgQWJzdHJhY3RQb29sLmNhbGwodGhpcyk7XG4gIHRoaXMuX2FkZEFsbChzb3VyY2VzKTtcbiAgdGhpcy5faW5pdGlhbGlzZWQgPSB0cnVlO1xufVxuXG5pbmhlcml0KE1lcmdlLCBBYnN0cmFjdFBvb2wsIHtcbiAgX25hbWU6ICdtZXJnZScsXG5cbiAgX29uRW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGlzZWQpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtZXJnZShvYnNlcnZhYmxlcykge1xuICByZXR1cm4gb2JzZXJ2YWJsZXMubGVuZ3RoID09PSAwID8gbmV2ZXIoKSA6IG5ldyBNZXJnZShvYnNlcnZhYmxlcyk7XG59XG5cbmZ1bmN0aW9uIFMkMzMoZ2VuZXJhdG9yKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgU3RyZWFtLmNhbGwodGhpcyk7XG4gIHRoaXMuX2dlbmVyYXRvciA9IGdlbmVyYXRvcjtcbiAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgdGhpcy5faW5Mb29wID0gZmFsc2U7XG4gIHRoaXMuX2l0ZXJhdGlvbiA9IDA7XG4gIHRoaXMuXyRoYW5kbGVBbnkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gX3RoaXMuX2hhbmRsZUFueShldmVudCk7XG4gIH07XG59XG5cbmluaGVyaXQoUyQzMywgU3RyZWFtLCB7XG4gIF9uYW1lOiAncmVwZWF0JyxcblxuICBfaGFuZGxlQW55OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgICAgdGhpcy5fZ2V0U291cmNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXQoZXZlbnQudHlwZSwgZXZlbnQudmFsdWUpO1xuICAgIH1cbiAgfSxcbiAgX2dldFNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5faW5Mb29wKSB7XG4gICAgICB0aGlzLl9pbkxvb3AgPSB0cnVlO1xuICAgICAgdmFyIGdlbmVyYXRvciA9IHRoaXMuX2dlbmVyYXRvcjtcbiAgICAgIHdoaWxlICh0aGlzLl9zb3VyY2UgPT09IG51bGwgJiYgdGhpcy5fYWxpdmUgJiYgdGhpcy5fYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX3NvdXJjZSA9IGdlbmVyYXRvcih0aGlzLl9pdGVyYXRpb24rKyk7XG4gICAgICAgIGlmICh0aGlzLl9zb3VyY2UpIHtcbiAgICAgICAgICB0aGlzLl9zb3VyY2Uub25BbnkodGhpcy5fJGhhbmRsZUFueSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9pbkxvb3AgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fc291cmNlKSB7XG4gICAgICB0aGlzLl9zb3VyY2Uub25BbnkodGhpcy5fJGhhbmRsZUFueSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dldFNvdXJjZSgpO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3NvdXJjZSkge1xuICAgICAgdGhpcy5fc291cmNlLm9mZkFueSh0aGlzLl8kaGFuZGxlQW55KTtcbiAgICB9XG4gIH0sXG4gIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZ2VuZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuXyRoYW5kbGVBbnkgPSBudWxsO1xuICB9XG59KTtcblxudmFyIHJlcGVhdCA9IGZ1bmN0aW9uIChnZW5lcmF0b3IpIHtcbiAgcmV0dXJuIG5ldyBTJDMzKGdlbmVyYXRvcik7XG59O1xuXG5mdW5jdGlvbiBjb25jYXQkMShvYnNlcnZhYmxlcykge1xuICByZXR1cm4gcmVwZWF0KGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBvYnNlcnZhYmxlcy5sZW5ndGggPiBpbmRleCA/IG9ic2VydmFibGVzW2luZGV4XSA6IGZhbHNlO1xuICB9KS5zZXROYW1lKCdjb25jYXQnKTtcbn1cblxuZnVuY3Rpb24gUG9vbCgpIHtcbiAgQWJzdHJhY3RQb29sLmNhbGwodGhpcyk7XG59XG5cbmluaGVyaXQoUG9vbCwgQWJzdHJhY3RQb29sLCB7XG4gIF9uYW1lOiAncG9vbCcsXG5cbiAgcGx1ZzogZnVuY3Rpb24gKG9icykge1xuICAgIHRoaXMuX2FkZChvYnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICB1bnBsdWc6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICB0aGlzLl9yZW1vdmUob2JzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIEZsYXRNYXAoc291cmNlLCBmbiwgb3B0aW9ucykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIEFic3RyYWN0UG9vbC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICB0aGlzLl9zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMuX2ZuID0gZm47XG4gIHRoaXMuX21haW5FbmRlZCA9IGZhbHNlO1xuICB0aGlzLl9sYXN0Q3VycmVudCA9IG51bGw7XG4gIHRoaXMuXyRoYW5kbGVNYWluID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIF90aGlzLl9oYW5kbGVNYWluKGV2ZW50KTtcbiAgfTtcbn1cblxuaW5oZXJpdChGbGF0TWFwLCBBYnN0cmFjdFBvb2wsIHtcbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIEFic3RyYWN0UG9vbC5wcm90b3R5cGUuX29uQWN0aXZhdGlvbi5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX3NvdXJjZS5vbkFueSh0aGlzLl8kaGFuZGxlTWFpbik7XG4gICAgfVxuICB9LFxuICBfb25EZWFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICBBYnN0cmFjdFBvb2wucHJvdG90eXBlLl9vbkRlYWN0aXZhdGlvbi5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZS5vZmZBbnkodGhpcy5fJGhhbmRsZU1haW4pO1xuICAgIHRoaXMuX2hhZE5vRXZTaW5jZURlYWN0ID0gdHJ1ZTtcbiAgfSxcbiAgX2hhbmRsZU1haW46IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSkge1xuICAgICAgLy8gSXMgbGF0ZXN0IHZhbHVlIGJlZm9yZSBkZWFjdGl2YXRpb24gc3Vydml2ZWQsIGFuZCBub3cgaXMgJ2N1cnJlbnQnIG9uIHRoaXMgYWN0aXZhdGlvbj9cbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gaGFuZGxlIHN1Y2ggdmFsdWVzLCB0byBwcmV2ZW50IHRvIGNvbnN0YW50bHkgYWRkXG4gICAgICAvLyBzYW1lIG9ic2VydmFsZSBvbiBlYWNoIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIHdoZW4gb3VyIG1haW4gc291cmNlXG4gICAgICAvLyBpcyBhIGBLZWZpci5jb25hdGFudCgpYCBmb3IgZXhhbXBsZS5cbiAgICAgIHZhciBzYW1lQ3VyciA9IHRoaXMuX2FjdGl2YXRpbmcgJiYgdGhpcy5faGFkTm9FdlNpbmNlRGVhY3QgJiYgdGhpcy5fbGFzdEN1cnJlbnQgPT09IGV2ZW50LnZhbHVlO1xuICAgICAgaWYgKCFzYW1lQ3Vycikge1xuICAgICAgICB0aGlzLl9hZGQoZXZlbnQudmFsdWUsIHRoaXMuX2ZuKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RDdXJyZW50ID0gZXZlbnQudmFsdWU7XG4gICAgICB0aGlzLl9oYWROb0V2U2luY2VEZWFjdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSBFUlJPUikge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKGV2ZW50LnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICBpZiAodGhpcy5faXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21haW5FbmRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfb25FbXB0eTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9tYWluRW5kZWQpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH0sXG4gIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgIEFic3RyYWN0UG9vbC5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc291cmNlID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0Q3VycmVudCA9IG51bGw7XG4gICAgdGhpcy5fJGhhbmRsZU1haW4gPSBudWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gRmxhdE1hcEVycm9ycyhzb3VyY2UsIGZuKSB7XG4gIEZsYXRNYXAuY2FsbCh0aGlzLCBzb3VyY2UsIGZuKTtcbn1cblxuaW5oZXJpdChGbGF0TWFwRXJyb3JzLCBGbGF0TWFwLCB7XG4gIC8vIFNhbWUgYXMgaW4gRmxhdE1hcCwgb25seSBWQUxVRS9FUlJPUiBmbGlwcGVkXG4gIF9oYW5kbGVNYWluOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRVJST1IpIHtcbiAgICAgIHZhciBzYW1lQ3VyciA9IHRoaXMuX2FjdGl2YXRpbmcgJiYgdGhpcy5faGFkTm9FdlNpbmNlRGVhY3QgJiYgdGhpcy5fbGFzdEN1cnJlbnQgPT09IGV2ZW50LnZhbHVlO1xuICAgICAgaWYgKCFzYW1lQ3Vycikge1xuICAgICAgICB0aGlzLl9hZGQoZXZlbnQudmFsdWUsIHRoaXMuX2ZuKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RDdXJyZW50ID0gZXZlbnQudmFsdWU7XG4gICAgICB0aGlzLl9oYWROb0V2U2luY2VEZWFjdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICBpZiAodGhpcy5faXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21haW5FbmRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlQ29uc3RydWN0b3IkMShCYXNlQ2xhc3MsIG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEFub255bW91c09ic2VydmFibGUocHJpbWFyeSwgc2Vjb25kYXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIEJhc2VDbGFzcy5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3ByaW1hcnkgPSBwcmltYXJ5O1xuICAgIHRoaXMuX3NlY29uZGFyeSA9IHNlY29uZGFyeTtcbiAgICB0aGlzLl9uYW1lID0gcHJpbWFyeS5fbmFtZSArICcuJyArIG5hbWU7XG4gICAgdGhpcy5fbGFzdFNlY29uZGFyeSA9IE5PVEhJTkc7XG4gICAgdGhpcy5fJGhhbmRsZVNlY29uZGFyeUFueSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9oYW5kbGVTZWNvbmRhcnlBbnkoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5fJGhhbmRsZVByaW1hcnlBbnkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlUHJpbWFyeUFueShldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDbGFzc01ldGhvZHMkMShCYXNlQ2xhc3MpIHtcbiAgcmV0dXJuIHtcbiAgICBfaW5pdDogZnVuY3Rpb24gKCkge30sXG4gICAgX2ZyZWU6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF9oYW5kbGVQcmltYXJ5VmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSxcbiAgICBfaGFuZGxlUHJpbWFyeUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKHgpO1xuICAgIH0sXG4gICAgX2hhbmRsZVByaW1hcnlFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9LFxuICAgIF9oYW5kbGVTZWNvbmRhcnlWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX2xhc3RTZWNvbmRhcnkgPSB4O1xuICAgIH0sXG4gICAgX2hhbmRsZVNlY29uZGFyeUVycm9yOiBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKHgpO1xuICAgIH0sXG4gICAgX2hhbmRsZVNlY29uZGFyeUVuZDogZnVuY3Rpb24gKCkge30sXG4gICAgX2hhbmRsZVByaW1hcnlBbnk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgVkFMVUU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVByaW1hcnlWYWx1ZShldmVudC52YWx1ZSk7XG4gICAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVByaW1hcnlFcnJvcihldmVudC52YWx1ZSk7XG4gICAgICAgIGNhc2UgRU5EOlxuICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVQcmltYXJ5RW5kKGV2ZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9oYW5kbGVTZWNvbmRhcnlBbnk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgVkFMVUU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVNlY29uZGFyeVZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICAgICAgY2FzZSBFUlJPUjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlU2Vjb25kYXJ5RXJyb3IoZXZlbnQudmFsdWUpO1xuICAgICAgICBjYXNlIEVORDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVTZWNvbmRhcnlFbmQoZXZlbnQudmFsdWUpO1xuICAgICAgICAgIHRoaXMuX3JlbW92ZVNlY29uZGFyeSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgX3JlbW92ZVNlY29uZGFyeTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX3NlY29uZGFyeSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9zZWNvbmRhcnkub2ZmQW55KHRoaXMuXyRoYW5kbGVTZWNvbmRhcnlBbnkpO1xuICAgICAgICB0aGlzLl8kaGFuZGxlU2Vjb25kYXJ5QW55ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc2Vjb25kYXJ5ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9zZWNvbmRhcnkgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc2Vjb25kYXJ5Lm9uQW55KHRoaXMuXyRoYW5kbGVTZWNvbmRhcnlBbnkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLl9wcmltYXJ5Lm9uQW55KHRoaXMuXyRoYW5kbGVQcmltYXJ5QW55KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX3NlY29uZGFyeSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9zZWNvbmRhcnkub2ZmQW55KHRoaXMuXyRoYW5kbGVTZWNvbmRhcnlBbnkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcHJpbWFyeS5vZmZBbnkodGhpcy5fJGhhbmRsZVByaW1hcnlBbnkpO1xuICAgIH0sXG4gICAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICBCYXNlQ2xhc3MucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5fcHJpbWFyeSA9IG51bGw7XG4gICAgICB0aGlzLl9zZWNvbmRhcnkgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFNlY29uZGFyeSA9IG51bGw7XG4gICAgICB0aGlzLl8kaGFuZGxlU2Vjb25kYXJ5QW55ID0gbnVsbDtcbiAgICAgIHRoaXMuXyRoYW5kbGVQcmltYXJ5QW55ID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZyZWUoKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmVhbSQxKG5hbWUsIG1peGluKSB7XG4gIHZhciBTID0gY3JlYXRlQ29uc3RydWN0b3IkMShTdHJlYW0sIG5hbWUpO1xuICBpbmhlcml0KFMsIFN0cmVhbSwgY3JlYXRlQ2xhc3NNZXRob2RzJDEoU3RyZWFtKSwgbWl4aW4pO1xuICByZXR1cm4gUztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvcGVydHkkMShuYW1lLCBtaXhpbikge1xuICB2YXIgUCA9IGNyZWF0ZUNvbnN0cnVjdG9yJDEoUHJvcGVydHksIG5hbWUpO1xuICBpbmhlcml0KFAsIFByb3BlcnR5LCBjcmVhdGVDbGFzc01ldGhvZHMkMShQcm9wZXJ0eSksIG1peGluKTtcbiAgcmV0dXJuIFA7XG59XG5cbnZhciBtaXhpbiQyNiA9IHtcbiAgX2hhbmRsZVByaW1hcnlWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodGhpcy5fbGFzdFNlY29uZGFyeSAhPT0gTk9USElORyAmJiB0aGlzLl9sYXN0U2Vjb25kYXJ5KSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlU2Vjb25kYXJ5RW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2xhc3RTZWNvbmRhcnkgPT09IE5PVEhJTkcgfHwgIXRoaXMuX2xhc3RTZWNvbmRhcnkpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDM0ID0gY3JlYXRlU3RyZWFtJDEoJ2ZpbHRlckJ5JywgbWl4aW4kMjYpO1xudmFyIFAkMjkgPSBjcmVhdGVQcm9wZXJ0eSQxKCdmaWx0ZXJCeScsIG1peGluJDI2KTtcblxuZnVuY3Rpb24gZmlsdGVyQnkocHJpbWFyeSwgc2Vjb25kYXJ5KSB7XG4gIHJldHVybiBuZXcgKHByaW1hcnkuX29mU2FtZVR5cGUoUyQzNCwgUCQyOSkpKHByaW1hcnksIHNlY29uZGFyeSk7XG59XG5cbnZhciBpZDIgPSBmdW5jdGlvbiAoXywgeCkge1xuICByZXR1cm4geDtcbn07XG5cbmZ1bmN0aW9uIHNhbXBsZWRCeShwYXNzaXZlLCBhY3RpdmUsIGNvbWJpbmF0b3IpIHtcbiAgdmFyIF9jb21iaW5hdG9yID0gY29tYmluYXRvciA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGNvbWJpbmF0b3IoYiwgYSk7XG4gIH0gOiBpZDI7XG4gIHJldHVybiBjb21iaW5lKFthY3RpdmVdLCBbcGFzc2l2ZV0sIF9jb21iaW5hdG9yKS5zZXROYW1lKHBhc3NpdmUsICdzYW1wbGVkQnknKTtcbn1cblxudmFyIG1peGluJDI3ID0ge1xuICBfaGFuZGxlUHJpbWFyeVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9sYXN0U2Vjb25kYXJ5ICE9PSBOT1RISU5HKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlU2Vjb25kYXJ5RW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2xhc3RTZWNvbmRhcnkgPT09IE5PVEhJTkcpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDM1ID0gY3JlYXRlU3RyZWFtJDEoJ3NraXBVbnRpbEJ5JywgbWl4aW4kMjcpO1xudmFyIFAkMzAgPSBjcmVhdGVQcm9wZXJ0eSQxKCdza2lwVW50aWxCeScsIG1peGluJDI3KTtcblxuZnVuY3Rpb24gc2tpcFVudGlsQnkocHJpbWFyeSwgc2Vjb25kYXJ5KSB7XG4gIHJldHVybiBuZXcgKHByaW1hcnkuX29mU2FtZVR5cGUoUyQzNSwgUCQzMCkpKHByaW1hcnksIHNlY29uZGFyeSk7XG59XG5cbnZhciBtaXhpbiQyOCA9IHtcbiAgX2hhbmRsZVNlY29uZGFyeVZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59O1xuXG52YXIgUyQzNiA9IGNyZWF0ZVN0cmVhbSQxKCd0YWtlVW50aWxCeScsIG1peGluJDI4KTtcbnZhciBQJDMxID0gY3JlYXRlUHJvcGVydHkkMSgndGFrZVVudGlsQnknLCBtaXhpbiQyOCk7XG5cbmZ1bmN0aW9uIHRha2VVbnRpbEJ5KHByaW1hcnksIHNlY29uZGFyeSkge1xuICByZXR1cm4gbmV3IChwcmltYXJ5Ll9vZlNhbWVUeXBlKFMkMzYsIFAkMzEpKShwcmltYXJ5LCBzZWNvbmRhcnkpO1xufVxuXG52YXIgbWl4aW4kMjkgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJGZsdXNoT25FbmQgPSBfcmVmLmZsdXNoT25FbmQsXG4gICAgICAgIGZsdXNoT25FbmQgPSBfcmVmJGZsdXNoT25FbmQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGZsdXNoT25FbmQ7XG5cbiAgICB0aGlzLl9idWZmID0gW107XG4gICAgdGhpcy5fZmx1c2hPbkVuZCA9IGZsdXNoT25FbmQ7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYnVmZiA9IG51bGw7XG4gIH0sXG4gIF9mbHVzaDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9idWZmICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5fYnVmZik7XG4gICAgICB0aGlzLl9idWZmID0gW107XG4gICAgfVxuICB9LFxuICBfaGFuZGxlUHJpbWFyeUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9mbHVzaE9uRW5kKSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH0sXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9wcmltYXJ5Lm9uQW55KHRoaXMuXyRoYW5kbGVQcmltYXJ5QW55KTtcbiAgICBpZiAodGhpcy5fYWxpdmUgJiYgdGhpcy5fc2Vjb25kYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9zZWNvbmRhcnkub25BbnkodGhpcy5fJGhhbmRsZVNlY29uZGFyeUFueSk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlUHJpbWFyeVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgfSxcbiAgX2hhbmRsZVNlY29uZGFyeVZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZmx1c2goKTtcbiAgfSxcbiAgX2hhbmRsZVNlY29uZGFyeUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fZmx1c2hPbkVuZCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMzcgPSBjcmVhdGVTdHJlYW0kMSgnYnVmZmVyQnknLCBtaXhpbiQyOSk7XG52YXIgUCQzMiA9IGNyZWF0ZVByb3BlcnR5JDEoJ2J1ZmZlckJ5JywgbWl4aW4kMjkpO1xuXG5mdW5jdGlvbiBidWZmZXJCeShwcmltYXJ5LCBzZWNvbmRhcnksIG9wdGlvbnMgLyogb3B0aW9uYWwgKi8pIHtcbiAgcmV0dXJuIG5ldyAocHJpbWFyeS5fb2ZTYW1lVHlwZShTJDM3LCBQJDMyKSkocHJpbWFyeSwgc2Vjb25kYXJ5LCBvcHRpb25zKTtcbn1cblxudmFyIG1peGluJDMwID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgX3JlZiRmbHVzaE9uRW5kID0gX3JlZi5mbHVzaE9uRW5kLFxuICAgICAgICBmbHVzaE9uRW5kID0gX3JlZiRmbHVzaE9uRW5kID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZiRmbHVzaE9uRW5kLFxuICAgICAgICBfcmVmJGZsdXNoT25DaGFuZ2UgPSBfcmVmLmZsdXNoT25DaGFuZ2UsXG4gICAgICAgIGZsdXNoT25DaGFuZ2UgPSBfcmVmJGZsdXNoT25DaGFuZ2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRmbHVzaE9uQ2hhbmdlO1xuXG4gICAgdGhpcy5fYnVmZiA9IFtdO1xuICAgIHRoaXMuX2ZsdXNoT25FbmQgPSBmbHVzaE9uRW5kO1xuICAgIHRoaXMuX2ZsdXNoT25DaGFuZ2UgPSBmbHVzaE9uQ2hhbmdlO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2J1ZmYgPSBudWxsO1xuICB9LFxuICBfZmx1c2g6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYnVmZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2J1ZmYpO1xuICAgICAgdGhpcy5fYnVmZiA9IFtdO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVByaW1hcnlFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fZmx1c2hPbkVuZCkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9LFxuICBfaGFuZGxlUHJpbWFyeVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgICBpZiAodGhpcy5fbGFzdFNlY29uZGFyeSAhPT0gTk9USElORyAmJiAhdGhpcy5fbGFzdFNlY29uZGFyeSkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVTZWNvbmRhcnlFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX2ZsdXNoT25FbmQgJiYgKHRoaXMuX2xhc3RTZWNvbmRhcnkgPT09IE5PVEhJTkcgfHwgdGhpcy5fbGFzdFNlY29uZGFyeSkpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVTZWNvbmRhcnlWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodGhpcy5fZmx1c2hPbkNoYW5nZSAmJiAheCkge1xuICAgICAgdGhpcy5fZmx1c2goKTtcbiAgICB9XG5cbiAgICAvLyBmcm9tIGRlZmF1bHQgX2hhbmRsZVNlY29uZGFyeVZhbHVlXG4gICAgdGhpcy5fbGFzdFNlY29uZGFyeSA9IHg7XG4gIH1cbn07XG5cbnZhciBTJDM4ID0gY3JlYXRlU3RyZWFtJDEoJ2J1ZmZlcldoaWxlQnknLCBtaXhpbiQzMCk7XG52YXIgUCQzMyA9IGNyZWF0ZVByb3BlcnR5JDEoJ2J1ZmZlcldoaWxlQnknLCBtaXhpbiQzMCk7XG5cbmZ1bmN0aW9uIGJ1ZmZlcldoaWxlQnkocHJpbWFyeSwgc2Vjb25kYXJ5LCBvcHRpb25zIC8qIG9wdGlvbmFsICovKSB7XG4gIHJldHVybiBuZXcgKHByaW1hcnkuX29mU2FtZVR5cGUoUyQzOCwgUCQzMykpKHByaW1hcnksIHNlY29uZGFyeSwgb3B0aW9ucyk7XG59XG5cbnZhciBmID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZmFsc2U7XG59O1xudmFyIHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gYXdhaXRpbmcoYSwgYikge1xuICB2YXIgcmVzdWx0ID0gbWVyZ2UoW21hcCQxKGEsIHQpLCBtYXAkMShiLCBmKV0pO1xuICByZXN1bHQgPSBza2lwRHVwbGljYXRlcyhyZXN1bHQpO1xuICByZXN1bHQgPSB0b1Byb3BlcnR5KHJlc3VsdCwgZik7XG4gIHJldHVybiByZXN1bHQuc2V0TmFtZShhLCAnYXdhaXRpbmcnKTtcbn1cblxudmFyIG1peGluJDMxID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICB2YXIgcmVzdWx0ID0gZm4oeCk7XG4gICAgaWYgKHJlc3VsdC5jb252ZXJ0KSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IocmVzdWx0LmVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMzkgPSBjcmVhdGVTdHJlYW0oJ3ZhbHVlc1RvRXJyb3JzJywgbWl4aW4kMzEpO1xudmFyIFAkMzQgPSBjcmVhdGVQcm9wZXJ0eSgndmFsdWVzVG9FcnJvcnMnLCBtaXhpbiQzMSk7XG5cbnZhciBkZWZGbiA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB7IGNvbnZlcnQ6IHRydWUsIGVycm9yOiB4IH07XG59O1xuXG5mdW5jdGlvbiB2YWx1ZXNUb0Vycm9ycyhvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZGbjtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQzOSwgUCQzNCkpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQzMiA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdmFyIHJlc3VsdCA9IGZuKHgpO1xuICAgIGlmIChyZXN1bHQuY29udmVydCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHJlc3VsdC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VtaXRFcnJvcih4KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDQwID0gY3JlYXRlU3RyZWFtKCdlcnJvcnNUb1ZhbHVlcycsIG1peGluJDMyKTtcbnZhciBQJDM1ID0gY3JlYXRlUHJvcGVydHkoJ2Vycm9yc1RvVmFsdWVzJywgbWl4aW4kMzIpO1xuXG52YXIgZGVmRm4kMSA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB7IGNvbnZlcnQ6IHRydWUsIHZhbHVlOiB4IH07XG59O1xuXG5mdW5jdGlvbiBlcnJvcnNUb1ZhbHVlcyhvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZGbiQxO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDQwLCBQJDM1KSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDMzID0ge1xuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fZW1pdEVycm9yKHgpO1xuICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgfVxufTtcblxudmFyIFMkNDEgPSBjcmVhdGVTdHJlYW0oJ2VuZE9uRXJyb3InLCBtaXhpbiQzMyk7XG52YXIgUCQzNiA9IGNyZWF0ZVByb3BlcnR5KCdlbmRPbkVycm9yJywgbWl4aW4kMzMpO1xuXG5mdW5jdGlvbiBlbmRPbkVycm9yKG9icykge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQ0MSwgUCQzNikpKG9icyk7XG59XG5cbi8vIENyZWF0ZSBhIHN0cmVhbVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKCkgLT4gU3RyZWFtXG4vLyAobnVtYmVyLCBhbnkpIC0+IFN0cmVhbVxuLy8gKG51bWJlciwgYW55KSAtPiBTdHJlYW1cbi8vIChudW1iZXIsIEFycmF5PGFueT4pIC0+IFN0cmVhbVxuLy8gKG51bWJlciwgRnVuY3Rpb24pIC0+IFN0cmVhbVxuLy8gKG51bWJlciwgRnVuY3Rpb24pIC0+IFN0cmVhbVxuLy8gKEZ1bmN0aW9uKSAtPiBTdHJlYW1cbi8vIChGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyBUYXJnZXQgPSB7YWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lcn18e2FkZExpc3RlbmVyLCByZW1vdmVMaXN0ZW5lcn18e29uLCBvZmZ9XG4vLyAoVGFyZ2V0LCBzdHJpbmcsIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoRnVuY3Rpb24pIC0+IFN0cmVhbVxuLy8gQ3JlYXRlIGEgcHJvcGVydHlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIChhbnkpIC0+IFByb3BlcnR5XG4vLyAoYW55KSAtPiBQcm9wZXJ0eVxuLy8gQ29udmVydCBvYnNlcnZhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9Qcm9wZXJ0eSA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gdG9Qcm9wZXJ0eSh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtfFByb3BlcnR5KSAtPiBTdHJlYW1cbk9ic2VydmFibGUucHJvdG90eXBlLmNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjaGFuZ2VzKHRoaXMpO1xufTtcblxuLy8gSW50ZXJvcGVyYXRpb24gd2l0aCBvdGhlciBpbXBsaW1lbnRhdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIChQcm9taXNlKSAtPiBQcm9wZXJ0eVxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9taXNlXG5PYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAoUHJvbWlzZSkge1xuICByZXR1cm4gdG9Qcm9taXNlKHRoaXMsIFByb21pc2UpO1xufTtcblxuLy8gKEVTT2JzZXJ2YWJsZSkgLT4gU3RyZWFtXG4vLyAoU3RyZWFtfFByb3BlcnR5KSAtPiBFUzcgT2JzZXJ2YWJsZVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9FU09ic2VydmFibGUgPSB0b0VTT2JzZXJ2YWJsZTtcbk9ic2VydmFibGUucHJvdG90eXBlWyQkb2JzZXJ2YWJsZV0gPSB0b0VTT2JzZXJ2YWJsZTtcblxuLy8gTW9kaWZ5IGFuIG9ic2VydmFibGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbWFwJDEodGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmaWx0ZXIodGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudGFrZSA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiB0YWtlKHRoaXMsIG4pO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudGFrZUVycm9ycyA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiB0YWtlRXJyb3JzKHRoaXMsIG4pO1xufTtcblxuLy8gKFN0cmVhbSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudGFrZVdoaWxlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiB0YWtlV2hpbGUodGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbGFzdCh0aGlzKTtcbn07XG5cbi8vIChTdHJlYW0sIG51bWJlcikgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIG51bWJlcikgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnNraXAgPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gc2tpcCh0aGlzLCBuKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnNraXBXaGlsZSA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gc2tpcFdoaWxlKHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnNraXBEdXBsaWNhdGVzID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBza2lwRHVwbGljYXRlcyh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnxmYWxzZXksIGFueXx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnxmYWxzZXksIGFueXx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKGZuLCBzZWVkKSB7XG4gIHJldHVybiBkaWZmKHRoaXMsIGZuLCBzZWVkKTtcbn07XG5cbi8vIChTdHJlYW18UHJvcGVydHksIEZ1bmN0aW9uLCBhbnl8dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2NhbiA9IGZ1bmN0aW9uIChmbiwgc2VlZCkge1xuICByZXR1cm4gc2Nhbih0aGlzLCBmbiwgc2VlZCk7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmbGF0dGVuKHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW0sIG51bWJlcikgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIG51bWJlcikgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gKHdhaXQpIHtcbiAgcmV0dXJuIGRlbGF5KHRoaXMsIHdhaXQpO1xufTtcblxuLy8gT3B0aW9ucyA9IHtsZWFkaW5nOiBib29sZWFufHVuZGVmaW5lZCwgdHJhaWxpbmc6IGJvb2xlYW58dW5kZWZpbmVkfVxuLy8gKFN0cmVhbSwgbnVtYmVyLCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIG51bWJlciwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS50aHJvdHRsZSA9IGZ1bmN0aW9uICh3YWl0LCBvcHRpb25zKSB7XG4gIHJldHVybiB0aHJvdHRsZSh0aGlzLCB3YWl0LCBvcHRpb25zKTtcbn07XG5cbi8vIE9wdGlvbnMgPSB7aW1tZWRpYXRlOiBib29sZWFufHVuZGVmaW5lZH1cbi8vIChTdHJlYW0sIG51bWJlciwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBudW1iZXIsIE9wdGlvbnN8dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZGVib3VuY2UgPSBmdW5jdGlvbiAod2FpdCwgb3B0aW9ucykge1xuICByZXR1cm4gZGVib3VuY2UodGhpcywgd2FpdCwgb3B0aW9ucyk7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5tYXBFcnJvcnMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG1hcEVycm9ycyh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5maWx0ZXJFcnJvcnMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZpbHRlckVycm9ycyh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmlnbm9yZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlnbm9yZVZhbHVlcyh0aGlzKTtcbn07XG5cbi8vIChTdHJlYW0pIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5KSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuaWdub3JlRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaWdub3JlRXJyb3JzKHRoaXMpO1xufTtcblxuLy8gKFN0cmVhbSkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5pZ25vcmVFbmQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpZ25vcmVFbmQodGhpcyk7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9uKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYmVmb3JlRW5kID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBiZWZvcmVFbmQodGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyLCBudW1iZXJ8dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyLCBudW1iZXJ8dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2xpZGluZ1dpbmRvdyA9IGZ1bmN0aW9uIChtYXgsIG1pbikge1xuICByZXR1cm4gc2xpZGluZ1dpbmRvdyh0aGlzLCBtYXgsIG1pbik7XG59O1xuXG4vLyBPcHRpb25zID0ge2ZsdXNoT25FbmQ6IGJvb2xlYW58dW5kZWZpbmVkfVxuLy8gKFN0cmVhbSwgRnVuY3Rpb258ZmFsc2V5LCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufGZhbHNleSwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5idWZmZXJXaGlsZSA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xuICByZXR1cm4gYnVmZmVyV2hpbGUodGhpcywgZm4sIG9wdGlvbnMpO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYnVmZmVyV2l0aENvdW50ID0gZnVuY3Rpb24gKGNvdW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBidWZmZXJXaGlsZSQxKHRoaXMsIGNvdW50LCBvcHRpb25zKTtcbn07XG5cbi8vIE9wdGlvbnMgPSB7Zmx1c2hPbkVuZDogYm9vbGVhbnx1bmRlZmluZWR9XG4vLyAoU3RyZWFtLCBudW1iZXIsIG51bWJlciwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBudW1iZXIsIG51bWJlciwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5idWZmZXJXaXRoVGltZU9yQ291bnQgPSBmdW5jdGlvbiAod2FpdCwgY291bnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJ1ZmZlcldpdGhUaW1lT3JDb3VudCh0aGlzLCB3YWl0LCBjb3VudCwgb3B0aW9ucyk7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9uKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudHJhbnNkdWNlID0gZnVuY3Rpb24gKHRyYW5zZHVjZXIpIHtcbiAgcmV0dXJuIHRyYW5zZHVjZSh0aGlzLCB0cmFuc2R1Y2VyKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9uKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb24pIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS53aXRoSGFuZGxlciA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gd2l0aEhhbmRsZXIodGhpcywgZm4pO1xufTtcblxuLy8gQ29tYmluZSBvYnNlcnZhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKEFycmF5PFN0cmVhbXxQcm9wZXJ0eT4sIEZ1bmN0aW9ufHVuZGVmaWVuZCkgLT4gU3RyZWFtXG4vLyAoQXJyYXk8U3RyZWFtfFByb3BlcnR5PiwgQXJyYXk8U3RyZWFtfFByb3BlcnR5PiwgRnVuY3Rpb258dW5kZWZpZW5kKSAtPiBTdHJlYW1cbk9ic2VydmFibGUucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbiAob3RoZXIsIGNvbWJpbmF0b3IpIHtcbiAgcmV0dXJuIGNvbWJpbmUoW3RoaXMsIG90aGVyXSwgY29tYmluYXRvcik7XG59O1xuXG4vLyAoQXJyYXk8U3RyZWFtfFByb3BlcnR5PiwgRnVuY3Rpb258dW5kZWZpZW5kKSAtPiBTdHJlYW1cbk9ic2VydmFibGUucHJvdG90eXBlLnppcCA9IGZ1bmN0aW9uIChvdGhlciwgY29tYmluYXRvcikge1xuICByZXR1cm4gemlwKFt0aGlzLCBvdGhlcl0sIGNvbWJpbmF0b3IpO1xufTtcblxuLy8gKEFycmF5PFN0cmVhbXxQcm9wZXJ0eT4pIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgcmV0dXJuIG1lcmdlKFt0aGlzLCBvdGhlcl0pO1xufTtcblxuLy8gKEFycmF5PFN0cmVhbXxQcm9wZXJ0eT4pIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gIHJldHVybiBjb25jYXQkMShbdGhpcywgb3RoZXJdKTtcbn07XG5cbi8vICgpIC0+IFBvb2xcbnZhciBwb29sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvb2woKTtcbn07XG5cbi8vIChGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyBPcHRpb25zID0ge2NvbmN1ckxpbTogbnVtYmVyfHVuZGVmaW5lZCwgcXVldWVMaW06IG51bWJlcnx1bmRlZmluZWQsIGRyb3A6ICdvbGQnfCduZXcnfHVuZGVmaWVuZH1cbi8vIChTdHJlYW18UHJvcGVydHksIEZ1bmN0aW9ufGZhbHNleSwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IEZsYXRNYXAodGhpcywgZm4pLnNldE5hbWUodGhpcywgJ2ZsYXRNYXAnKTtcbn07XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwTGF0ZXN0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgRmxhdE1hcCh0aGlzLCBmbiwgeyBjb25jdXJMaW06IDEsIGRyb3A6ICdvbGQnIH0pLnNldE5hbWUodGhpcywgJ2ZsYXRNYXBMYXRlc3QnKTtcbn07XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwRmlyc3QgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBGbGF0TWFwKHRoaXMsIGZuLCB7IGNvbmN1ckxpbTogMSB9KS5zZXROYW1lKHRoaXMsICdmbGF0TWFwRmlyc3QnKTtcbn07XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwQ29uY2F0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgRmxhdE1hcCh0aGlzLCBmbiwgeyBxdWV1ZUxpbTogLTEsIGNvbmN1ckxpbTogMSB9KS5zZXROYW1lKHRoaXMsICdmbGF0TWFwQ29uY2F0Jyk7XG59O1xuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcENvbmN1ckxpbWl0ID0gZnVuY3Rpb24gKGZuLCBsaW1pdCkge1xuICByZXR1cm4gbmV3IEZsYXRNYXAodGhpcywgZm4sIHsgcXVldWVMaW06IC0xLCBjb25jdXJMaW06IGxpbWl0IH0pLnNldE5hbWUodGhpcywgJ2ZsYXRNYXBDb25jdXJMaW1pdCcpO1xufTtcblxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb258ZmFsc2V5KSAtPiBTdHJlYW1cbk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBFcnJvcnMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBGbGF0TWFwRXJyb3JzKHRoaXMsIGZuKS5zZXROYW1lKHRoaXMsICdmbGF0TWFwRXJyb3JzJyk7XG59O1xuXG4vLyBDb21iaW5lIHR3byBvYnNlcnZhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKFN0cmVhbSwgU3RyZWFtfFByb3BlcnR5KSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5KSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmlsdGVyQnkgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgcmV0dXJuIGZpbHRlckJ5KHRoaXMsIG90aGVyKTtcbn07XG5cbi8vIChTdHJlYW0sIFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpZW5kKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmllbmQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5zYW1wbGVkQnkgPSBmdW5jdGlvbiAob3RoZXIsIGNvbWJpbmF0b3IpIHtcbiAgcmV0dXJuIHNhbXBsZWRCeSh0aGlzLCBvdGhlciwgY29tYmluYXRvcik7XG59O1xuXG4vLyAoU3RyZWFtLCBTdHJlYW18UHJvcGVydHkpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBTdHJlYW18UHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5za2lwVW50aWxCeSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICByZXR1cm4gc2tpcFVudGlsQnkodGhpcywgb3RoZXIpO1xufTtcblxuLy8gKFN0cmVhbSwgU3RyZWFtfFByb3BlcnR5KSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5KSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudGFrZVVudGlsQnkgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgcmV0dXJuIHRha2VVbnRpbEJ5KHRoaXMsIG90aGVyKTtcbn07XG5cbi8vIE9wdGlvbnMgPSB7Zmx1c2hPbkVuZDogYm9vbGVhbnx1bmRlZmluZWR9XG4vLyAoU3RyZWFtLCBTdHJlYW18UHJvcGVydHksIE9wdGlvbnN8dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5LCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmJ1ZmZlckJ5ID0gZnVuY3Rpb24gKG90aGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBidWZmZXJCeSh0aGlzLCBvdGhlciwgb3B0aW9ucyk7XG59O1xuXG4vLyBPcHRpb25zID0ge2ZsdXNoT25FbmQ6IGJvb2xlYW58dW5kZWZpbmVkfVxuLy8gKFN0cmVhbSwgU3RyZWFtfFByb3BlcnR5LCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIFN0cmVhbXxQcm9wZXJ0eSwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5idWZmZXJXaGlsZUJ5ID0gZnVuY3Rpb24gKG90aGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBidWZmZXJXaGlsZUJ5KHRoaXMsIG90aGVyLCBvcHRpb25zKTtcbn07XG5cbi8vIERlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBERVBSRUNBVElPTl9XQVJOSU5HUyA9IHRydWU7XG5mdW5jdGlvbiBkaXNzYWJsZURlcHJlY2F0aW9uV2FybmluZ3MoKSB7XG4gIERFUFJFQ0FUSU9OX1dBUk5JTkdTID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gIGlmIChERVBSRUNBVElPTl9XQVJOSU5HUyAmJiBjb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLndhcm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbXNnMiA9ICdcXG5IZXJlIGlzIGFuIEVycm9yIG9iamVjdCBmb3IgeW91IGNvbnRhaW5pbmcgdGhlIGNhbGwgc3RhY2s6JztcbiAgICBjb25zb2xlLndhcm4obXNnLCBtc2cyLCBuZXcgRXJyb3IoKSk7XG4gIH1cbn1cblxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5KSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYXdhaXRpbmcgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgd2FybignWW91IGFyZSB1c2luZyBkZXByZWNhdGVkIC5hd2FpdGluZygpIG1ldGhvZCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ycG9taW5vdi9rZWZpci9pc3N1ZXMvMTQ1Jyk7XG4gIHJldHVybiBhd2FpdGluZyh0aGlzLCBvdGhlcik7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS52YWx1ZXNUb0Vycm9ycyA9IGZ1bmN0aW9uIChmbikge1xuICB3YXJuKCdZb3UgYXJlIHVzaW5nIGRlcHJlY2F0ZWQgLnZhbHVlc1RvRXJyb3JzKCkgbWV0aG9kLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Jwb21pbm92L2tlZmlyL2lzc3Vlcy8xNDknKTtcbiAgcmV0dXJuIHZhbHVlc1RvRXJyb3JzKHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmVycm9yc1RvVmFsdWVzID0gZnVuY3Rpb24gKGZuKSB7XG4gIHdhcm4oJ1lvdSBhcmUgdXNpbmcgZGVwcmVjYXRlZCAuZXJyb3JzVG9WYWx1ZXMoKSBtZXRob2QsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcnBvbWlub3Yva2VmaXIvaXNzdWVzLzE0OScpO1xuICByZXR1cm4gZXJyb3JzVG9WYWx1ZXModGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5lbmRPbkVycm9yID0gZnVuY3Rpb24gKCkge1xuICB3YXJuKCdZb3UgYXJlIHVzaW5nIGRlcHJlY2F0ZWQgLmVuZE9uRXJyb3IoKSBtZXRob2QsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcnBvbWlub3Yva2VmaXIvaXNzdWVzLzE1MCcpO1xuICByZXR1cm4gZW5kT25FcnJvcih0aGlzKTtcbn07XG5cbi8vIEV4cG9ydHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBLZWZpciA9IHtcbiAgT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZSxcbiAgU3RyZWFtOiBTdHJlYW0sXG4gIFByb3BlcnR5OiBQcm9wZXJ0eSxcbiAgbmV2ZXI6IG5ldmVyLFxuICBsYXRlcjogbGF0ZXIsXG4gIGludGVydmFsOiBpbnRlcnZhbCxcbiAgc2VxdWVudGlhbGx5OiBzZXF1ZW50aWFsbHksXG4gIGZyb21Qb2xsOiBmcm9tUG9sbCxcbiAgd2l0aEludGVydmFsOiB3aXRoSW50ZXJ2YWwsXG4gIGZyb21DYWxsYmFjazogZnJvbUNhbGxiYWNrLFxuICBmcm9tTm9kZUNhbGxiYWNrOiBmcm9tTm9kZUNhbGxiYWNrLFxuICBmcm9tRXZlbnRzOiBmcm9tRXZlbnRzLFxuICBzdHJlYW06IHN0cmVhbSxcbiAgY29uc3RhbnQ6IGNvbnN0YW50LFxuICBjb25zdGFudEVycm9yOiBjb25zdGFudEVycm9yLFxuICBmcm9tUHJvbWlzZTogZnJvbVByb21pc2UsXG4gIGZyb21FU09ic2VydmFibGU6IGZyb21FU09ic2VydmFibGUsXG4gIGNvbWJpbmU6IGNvbWJpbmUsXG4gIHppcDogemlwLFxuICBtZXJnZTogbWVyZ2UsXG4gIGNvbmNhdDogY29uY2F0JDEsXG4gIFBvb2w6IFBvb2wsXG4gIHBvb2w6IHBvb2wsXG4gIHJlcGVhdDogcmVwZWF0LFxuICBzdGF0aWNMYW5kOiBzdGF0aWNMYW5kXG59O1xuXG5LZWZpci5LZWZpciA9IEtlZmlyO1xuXG5leHBvcnRzLmRpc3NhYmxlRGVwcmVjYXRpb25XYXJuaW5ncyA9IGRpc3NhYmxlRGVwcmVjYXRpb25XYXJuaW5ncztcbmV4cG9ydHMuS2VmaXIgPSBLZWZpcjtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG5leHBvcnRzLlN0cmVhbSA9IFN0cmVhbTtcbmV4cG9ydHMuUHJvcGVydHkgPSBQcm9wZXJ0eTtcbmV4cG9ydHMubmV2ZXIgPSBuZXZlcjtcbmV4cG9ydHMubGF0ZXIgPSBsYXRlcjtcbmV4cG9ydHMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbmV4cG9ydHMuc2VxdWVudGlhbGx5ID0gc2VxdWVudGlhbGx5O1xuZXhwb3J0cy5mcm9tUG9sbCA9IGZyb21Qb2xsO1xuZXhwb3J0cy53aXRoSW50ZXJ2YWwgPSB3aXRoSW50ZXJ2YWw7XG5leHBvcnRzLmZyb21DYWxsYmFjayA9IGZyb21DYWxsYmFjaztcbmV4cG9ydHMuZnJvbU5vZGVDYWxsYmFjayA9IGZyb21Ob2RlQ2FsbGJhY2s7XG5leHBvcnRzLmZyb21FdmVudHMgPSBmcm9tRXZlbnRzO1xuZXhwb3J0cy5zdHJlYW0gPSBzdHJlYW07XG5leHBvcnRzLmNvbnN0YW50ID0gY29uc3RhbnQ7XG5leHBvcnRzLmNvbnN0YW50RXJyb3IgPSBjb25zdGFudEVycm9yO1xuZXhwb3J0cy5mcm9tUHJvbWlzZSA9IGZyb21Qcm9taXNlO1xuZXhwb3J0cy5mcm9tRVNPYnNlcnZhYmxlID0gZnJvbUVTT2JzZXJ2YWJsZTtcbmV4cG9ydHMuY29tYmluZSA9IGNvbWJpbmU7XG5leHBvcnRzLnppcCA9IHppcDtcbmV4cG9ydHMubWVyZ2UgPSBtZXJnZTtcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0JDE7XG5leHBvcnRzLlBvb2wgPSBQb29sO1xuZXhwb3J0cy5wb29sID0gcG9vbDtcbmV4cG9ydHMucmVwZWF0ID0gcmVwZWF0O1xuZXhwb3J0cy5zdGF0aWNMYW5kID0gc3RhdGljTGFuZDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEtlZmlyO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMva2VmaXIvZGlzdC9rZWZpci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBUd2Vlbi5qcyAtIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanMvZ3JhcGhzL2NvbnRyaWJ1dG9ycyBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBjb250cmlidXRvcnMuXG4gKiBUaGFuayB5b3UgYWxsLCB5b3UncmUgYXdlc29tZSFcbiAqL1xuXG52YXIgVFdFRU4gPSBUV0VFTiB8fCAoZnVuY3Rpb24gKCkge1xuXG5cdHZhciBfdHdlZW5zID0gW107XG5cblx0cmV0dXJuIHtcblxuXHRcdGdldEFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gX3R3ZWVucztcblxuXHRcdH0sXG5cblx0XHRyZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0X3R3ZWVucyA9IFtdO1xuXG5cdFx0fSxcblxuXHRcdGFkZDogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cblx0XHRcdF90d2VlbnMucHVzaCh0d2Vlbik7XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbiAodHdlZW4pIHtcblxuXHRcdFx0dmFyIGkgPSBfdHdlZW5zLmluZGV4T2YodHdlZW4pO1xuXG5cdFx0XHRpZiAoaSAhPT0gLTEpIHtcblx0XHRcdFx0X3R3ZWVucy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAodGltZSwgcHJlc2VydmUpIHtcblxuXHRcdFx0aWYgKF90d2VlbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHR0aW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6IFRXRUVOLm5vdygpO1xuXG5cdFx0XHR3aGlsZSAoaSA8IF90d2VlbnMubGVuZ3RoKSB7XG5cblx0XHRcdFx0aWYgKF90d2VlbnNbaV0udXBkYXRlKHRpbWUpIHx8IHByZXNlcnZlKSB7XG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF90d2VlbnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHR9XG5cdH07XG5cbn0pKCk7XG5cblxuLy8gSW5jbHVkZSBhIHBlcmZvcm1hbmNlLm5vdyBwb2x5ZmlsbC5cbi8vIEluIG5vZGUuanMsIHVzZSBwcm9jZXNzLmhydGltZS5cbmlmICh0eXBlb2YgKHdpbmRvdykgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAocHJvY2VzcykgIT09ICd1bmRlZmluZWQnKSB7XG5cdFRXRUVOLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG5cblx0XHQvLyBDb252ZXJ0IFtzZWNvbmRzLCBuYW5vc2Vjb25kc10gdG8gbWlsbGlzZWNvbmRzLlxuXHRcdHJldHVybiB0aW1lWzBdICogMTAwMCArIHRpbWVbMV0gLyAxMDAwMDAwO1xuXHR9O1xufVxuLy8gSW4gYSBicm93c2VyLCB1c2Ugd2luZG93LnBlcmZvcm1hbmNlLm5vdyBpZiBpdCBpcyBhdmFpbGFibGUuXG5lbHNlIGlmICh0eXBlb2YgKHdpbmRvdykgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICB3aW5kb3cucGVyZm9ybWFuY2UgIT09IHVuZGVmaW5lZCAmJlxuXHRcdCB3aW5kb3cucGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQpIHtcblx0Ly8gVGhpcyBtdXN0IGJlIGJvdW5kLCBiZWNhdXNlIGRpcmVjdGx5IGFzc2lnbmluZyB0aGlzIGZ1bmN0aW9uXG5cdC8vIGxlYWRzIHRvIGFuIGludm9jYXRpb24gZXhjZXB0aW9uIGluIENocm9tZS5cblx0VFdFRU4ubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHdpbmRvdy5wZXJmb3JtYW5jZSk7XG59XG4vLyBVc2UgRGF0ZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAoRGF0ZS5ub3cgIT09IHVuZGVmaW5lZCkge1xuXHRUV0VFTi5ub3cgPSBEYXRlLm5vdztcbn1cbi8vIE90aGVyd2lzZSwgdXNlICduZXcgRGF0ZSgpLmdldFRpbWUoKScuXG5lbHNlIHtcblx0VFdFRU4ubm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fTtcbn1cblxuXG5UV0VFTi5Ud2VlbiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcblxuXHR2YXIgX29iamVjdCA9IG9iamVjdDtcblx0dmFyIF92YWx1ZXNTdGFydCA9IHt9O1xuXHR2YXIgX3ZhbHVlc0VuZCA9IHt9O1xuXHR2YXIgX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHZhciBfZHVyYXRpb24gPSAxMDAwO1xuXHR2YXIgX3JlcGVhdCA9IDA7XG5cdHZhciBfcmVwZWF0RGVsYXlUaW1lO1xuXHR2YXIgX3lveW8gPSBmYWxzZTtcblx0dmFyIF9pc1BsYXlpbmcgPSBmYWxzZTtcblx0dmFyIF9yZXZlcnNlZCA9IGZhbHNlO1xuXHR2YXIgX2RlbGF5VGltZSA9IDA7XG5cdHZhciBfc3RhcnRUaW1lID0gbnVsbDtcblx0dmFyIF9lYXNpbmdGdW5jdGlvbiA9IFRXRUVOLkVhc2luZy5MaW5lYXIuTm9uZTtcblx0dmFyIF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLkxpbmVhcjtcblx0dmFyIF9jaGFpbmVkVHdlZW5zID0gW107XG5cdHZhciBfb25TdGFydENhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXHR2YXIgX29uVXBkYXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uQ29tcGxldGVDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25TdG9wQ2FsbGJhY2sgPSBudWxsO1xuXG5cdHRoaXMudG8gPSBmdW5jdGlvbiAocHJvcGVydGllcywgZHVyYXRpb24pIHtcblxuXHRcdF92YWx1ZXNFbmQgPSBwcm9wZXJ0aWVzO1xuXG5cdFx0aWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdF9kdXJhdGlvbiA9IGR1cmF0aW9uO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5zdGFydCA9IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHRUV0VFTi5hZGQodGhpcyk7XG5cblx0XHRfaXNQbGF5aW5nID0gdHJ1ZTtcblxuXHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXG5cdFx0X3N0YXJ0VGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiBUV0VFTi5ub3coKTtcblx0XHRfc3RhcnRUaW1lICs9IF9kZWxheVRpbWU7XG5cblx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBfdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIENoZWNrIGlmIGFuIEFycmF5IHdhcyBwcm92aWRlZCBhcyBwcm9wZXJ0eSB2YWx1ZVxuXHRcdFx0aWYgKF92YWx1ZXNFbmRbcHJvcGVydHldIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuXHRcdFx0XHRpZiAoX3ZhbHVlc0VuZFtwcm9wZXJ0eV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcblx0XHRcdFx0X3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSBbX29iamVjdFtwcm9wZXJ0eV1dLmNvbmNhdChfdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYHRvKClgIHNwZWNpZmllcyBhIHByb3BlcnR5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdCxcblx0XHRcdC8vIHdlIHNob3VsZCBub3Qgc2V0IHRoYXQgcHJvcGVydHkgaW4gdGhlIG9iamVjdFxuXHRcdFx0aWYgKF9vYmplY3RbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNhdmUgdGhlIHN0YXJ0aW5nIHZhbHVlLlxuXHRcdFx0X3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IF9vYmplY3RbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoKF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gKj0gMS4wOyAvLyBFbnN1cmVzIHdlJ3JlIHVzaW5nIG51bWJlcnMsIG5vdCBzdHJpbmdzXG5cdFx0XHR9XG5cblx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSBfdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmICghX2lzUGxheWluZykge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0VFdFRU4ucmVtb3ZlKHRoaXMpO1xuXHRcdF9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmIChfb25TdG9wQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdF9vblN0b3BDYWxsYmFjay5jYWxsKF9vYmplY3QsIF9vYmplY3QpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcENoYWluZWRUd2VlbnMoKTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuZW5kID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy51cGRhdGUoX3N0YXJ0VGltZSArIF9kdXJhdGlvbik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnN0b3BDaGFpbmVkVHdlZW5zID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcblx0XHRcdF9jaGFpbmVkVHdlZW5zW2ldLnN0b3AoKTtcblx0XHR9XG5cblx0fTtcblxuXHR0aGlzLmRlbGF5ID0gZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0X2RlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMucmVwZWF0ID0gZnVuY3Rpb24gKHRpbWVzKSB7XG5cblx0XHRfcmVwZWF0ID0gdGltZXM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0X3JlcGVhdERlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMueW95byA9IGZ1bmN0aW9uICh5b3lvKSB7XG5cblx0XHRfeW95byA9IHlveW87XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXG5cdHRoaXMuZWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuXG5cdFx0X2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5pbnRlcnBvbGF0aW9uID0gZnVuY3Rpb24gKGludGVycG9sYXRpb24pIHtcblxuXHRcdF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBpbnRlcnBvbGF0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5jaGFpbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdF9jaGFpbmVkVHdlZW5zID0gYXJndW1lbnRzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vblN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25TdGFydENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25Db21wbGV0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uU3RvcCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0X29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cdFx0dmFyIGVsYXBzZWQ7XG5cdFx0dmFyIHZhbHVlO1xuXG5cdFx0aWYgKHRpbWUgPCBfc3RhcnRUaW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoX29uU3RhcnRDYWxsYmFja0ZpcmVkID09PSBmYWxzZSkge1xuXG5cdFx0XHRpZiAoX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHRfb25TdGFydENhbGxiYWNrLmNhbGwoX29iamVjdCwgX29iamVjdCk7XG5cdFx0XHR9XG5cblx0XHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0ZWxhcHNlZCA9ICh0aW1lIC0gX3N0YXJ0VGltZSkgLyBfZHVyYXRpb247XG5cdFx0ZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XG5cblx0XHR2YWx1ZSA9IF9lYXNpbmdGdW5jdGlvbihlbGFwc2VkKTtcblxuXHRcdGZvciAocHJvcGVydHkgaW4gX3ZhbHVlc0VuZCkge1xuXG5cdFx0XHQvLyBEb24ndCB1cGRhdGUgcHJvcGVydGllcyB0aGF0IGRvIG5vdCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdFxuXHRcdFx0aWYgKF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHN0YXJ0ID0gX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xuXHRcdFx0dmFyIGVuZCA9IF92YWx1ZXNFbmRbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoZW5kIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuXHRcdFx0XHRfb2JqZWN0W3Byb3BlcnR5XSA9IF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24oZW5kLCB2YWx1ZSk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxuXHRcdFx0XHRpZiAodHlwZW9mIChlbmQpID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRcdFx0aWYgKGVuZC5jaGFyQXQoMCkgPT09ICcrJyB8fCBlbmQuY2hhckF0KDApID09PSAnLScpIHtcblx0XHRcdFx0XHRcdGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBwYXJzZUZsb2F0KGVuZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0X29iamVjdFtwcm9wZXJ0eV0gPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoX29uVXBkYXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdF9vblVwZGF0ZUNhbGxiYWNrLmNhbGwoX29iamVjdCwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChlbGFwc2VkID09PSAxKSB7XG5cblx0XHRcdGlmIChfcmVwZWF0ID4gMCkge1xuXG5cdFx0XHRcdGlmIChpc0Zpbml0ZShfcmVwZWF0KSkge1xuXHRcdFx0XHRcdF9yZXBlYXQtLTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlYXNzaWduIHN0YXJ0aW5nIHZhbHVlcywgcmVzdGFydCBieSBtYWtpbmcgc3RhcnRUaW1lID0gbm93XG5cdFx0XHRcdGZvciAocHJvcGVydHkgaW4gX3ZhbHVlc1N0YXJ0UmVwZWF0KSB7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIChfdmFsdWVzRW5kW3Byb3BlcnR5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSArIHBhcnNlRmxvYXQoX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChfeW95bykge1xuXHRcdFx0XHRcdFx0dmFyIHRtcCA9IF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSBfdmFsdWVzRW5kW3Byb3BlcnR5XTtcblx0XHRcdFx0XHRcdF92YWx1ZXNFbmRbcHJvcGVydHldID0gdG1wO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSBfdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoX3lveW8pIHtcblx0XHRcdFx0XHRfcmV2ZXJzZWQgPSAhX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKF9yZXBlYXREZWxheVRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdF9zdGFydFRpbWUgPSB0aW1lICsgX3JlcGVhdERlbGF5VGltZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc3RhcnRUaW1lID0gdGltZSArIF9kZWxheVRpbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoX29uQ29tcGxldGVDYWxsYmFjayAhPT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0X29uQ29tcGxldGVDYWxsYmFjay5jYWxsKF9vYmplY3QsIF9vYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcblx0XHRcdFx0XHQvLyBNYWtlIHRoZSBjaGFpbmVkIHR3ZWVucyBzdGFydCBleGFjdGx5IGF0IHRoZSB0aW1lIHRoZXkgc2hvdWxkLFxuXHRcdFx0XHRcdC8vIGV2ZW4gaWYgdGhlIGB1cGRhdGUoKWAgbWV0aG9kIHdhcyBjYWxsZWQgd2F5IHBhc3QgdGhlIGR1cmF0aW9uIG9mIHRoZSB0d2VlblxuXHRcdFx0XHRcdF9jaGFpbmVkVHdlZW5zW2ldLnN0YXJ0KF9zdGFydFRpbWUgKyBfZHVyYXRpb24pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9O1xuXG59O1xuXG5cblRXRUVOLkVhc2luZyA9IHtcblxuXHRMaW5lYXI6IHtcblxuXHRcdE5vbmU6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhZHJhdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiAoMiAtIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC0gMC41ICogKC0tayAqIChrIC0gMikgLSAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEN1YmljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFydGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtICgtLWsgKiBrICogayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgLSAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1aW50aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrICogayArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0U2ludXNvaWRhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5jb3MoayAqIE1hdGguUEkgLyAyKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNpbihrICogTWF0aC5QSSAvIDIpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RXhwb25lbnRpYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLSAxMCAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIGsgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgtIE1hdGgucG93KDIsIC0gMTAgKiAoayAtIDEpKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q2lyY3VsYXI6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gKC0tayAqIGspKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLSAwLjUgKiAoTWF0aC5zcXJ0KDEgLSBrICogaykgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChrIC09IDIpICogaykgKyAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEVsYXN0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIGspICogTWF0aC5zaW4oKGsgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRrICo9IDI7XG5cblx0XHRcdGlmIChrIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKGsgLSAxKSkgKiBNYXRoLnNpbigoayAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG5cblx0XHR9XG5cblx0fSxcblxuXHRCYWNrOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiAoayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJvdW5jZToge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoMSAtIGspO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPCAoMSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblx0XHRcdH0gZWxzZSBpZiAoayA8ICgyIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgxLjUgLyAyLjc1KSkgKiBrICsgMC43NTtcblx0XHRcdH0gZWxzZSBpZiAoayA8ICgyLjUgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuMjUgLyAyLjc1KSkgKiBrICsgMC45Mzc1O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgyLjYyNSAvIDIuNzUpKSAqIGsgKyAwLjk4NDM3NTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPCAwLjUpIHtcblx0XHRcdFx0cmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuSW4oayAqIDIpICogMC41O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoayAqIDIgLSAxKSAqIDAuNSArIDAuNTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cblRXRUVOLkludGVycG9sYXRpb24gPSB7XG5cblx0TGluZWFyOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIGYgPSBtICogaztcblx0XHR2YXIgaSA9IE1hdGguZmxvb3IoZik7XG5cdFx0dmFyIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5MaW5lYXI7XG5cblx0XHRpZiAoayA8IDApIHtcblx0XHRcdHJldHVybiBmbih2WzBdLCB2WzFdLCBmKTtcblx0XHR9XG5cblx0XHRpZiAoayA+IDEpIHtcblx0XHRcdHJldHVybiBmbih2W21dLCB2W20gLSAxXSwgbSAtIGYpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbih2W2ldLCB2W2kgKyAxID4gbSA/IG0gOiBpICsgMV0sIGYgLSBpKTtcblxuXHR9LFxuXG5cdEJlemllcjogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBiID0gMDtcblx0XHR2YXIgbiA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgcHcgPSBNYXRoLnBvdztcblx0XHR2YXIgYm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkJlcm5zdGVpbjtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IG47IGkrKykge1xuXHRcdFx0YiArPSBwdygxIC0gaywgbiAtIGkpICogcHcoaywgaSkgKiB2W2ldICogYm4obiwgaSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGI7XG5cblx0fSxcblxuXHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIGYgPSBtICogaztcblx0XHR2YXIgaSA9IE1hdGguZmxvb3IoZik7XG5cdFx0dmFyIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5DYXRtdWxsUm9tO1xuXG5cdFx0aWYgKHZbMF0gPT09IHZbbV0pIHtcblxuXHRcdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRcdGkgPSBNYXRoLmZsb29yKGYgPSBtICogKDEgKyBrKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbih2WyhpIC0gMSArIG0pICUgbV0sIHZbaV0sIHZbKGkgKyAxKSAlIG1dLCB2WyhpICsgMikgJSBtXSwgZiAtIGkpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRcdHJldHVybiB2WzBdIC0gKGZuKHZbMF0sIHZbMF0sIHZbMV0sIHZbMV0sIC1mKSAtIHZbMF0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA+IDEpIHtcblx0XHRcdFx0cmV0dXJuIHZbbV0gLSAoZm4odlttXSwgdlttXSwgdlttIC0gMV0sIHZbbSAtIDFdLCBmIC0gbSkgLSB2W21dKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuKHZbaSA/IGkgLSAxIDogMF0sIHZbaV0sIHZbbSA8IGkgKyAxID8gbSA6IGkgKyAxXSwgdlttIDwgaSArIDIgPyBtIDogaSArIDJdLCBmIC0gaSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRVdGlsczoge1xuXG5cdFx0TGluZWFyOiBmdW5jdGlvbiAocDAsIHAxLCB0KSB7XG5cblx0XHRcdHJldHVybiAocDEgLSBwMCkgKiB0ICsgcDA7XG5cblx0XHR9LFxuXG5cdFx0QmVybnN0ZWluOiBmdW5jdGlvbiAobiwgaSkge1xuXG5cdFx0XHR2YXIgZmMgPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkZhY3RvcmlhbDtcblxuXHRcdFx0cmV0dXJuIGZjKG4pIC8gZmMoaSkgLyBmYyhuIC0gaSk7XG5cblx0XHR9LFxuXG5cdFx0RmFjdG9yaWFsOiAoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgYSA9IFsxXTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChuKSB7XG5cblx0XHRcdFx0dmFyIHMgPSAxO1xuXG5cdFx0XHRcdGlmIChhW25dKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFbbl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBpID0gbjsgaSA+IDE7IGktLSkge1xuXHRcdFx0XHRcdHMgKj0gaTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFbbl0gPSBzO1xuXHRcdFx0XHRyZXR1cm4gcztcblxuXHRcdFx0fTtcblxuXHRcdH0pKCksXG5cblx0XHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHQpIHtcblxuXHRcdFx0dmFyIHYwID0gKHAyIC0gcDApICogMC41O1xuXHRcdFx0dmFyIHYxID0gKHAzIC0gcDEpICogMC41O1xuXHRcdFx0dmFyIHQyID0gdCAqIHQ7XG5cdFx0XHR2YXIgdDMgPSB0ICogdDI7XG5cblx0XHRcdHJldHVybiAoMiAqIHAxIC0gMiAqIHAyICsgdjAgKyB2MSkgKiB0MyArICgtIDMgKiBwMSArIDMgKiBwMiAtIDIgKiB2MCAtIHYxKSAqIHQyICsgdjAgKiB0ICsgcDE7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG4vLyBVTUQgKFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbilcbihmdW5jdGlvbiAocm9vdCkge1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblxuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIFRXRUVOO1xuXHRcdH0pO1xuXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cblx0XHQvLyBOb2RlLmpzXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBUV0VFTjtcblxuXHR9IGVsc2UgaWYgKHJvb3QgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0Ly8gR2xvYmFsIHZhcmlhYmxlXG5cdFx0cm9vdC5UV0VFTiA9IFRXRUVOO1xuXG5cdH1cblxufSkodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AdHdlZW5qcy90d2Vlbi5qcy9zcmMvVHdlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=