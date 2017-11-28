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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(0);
module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 16 */
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
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTk4MzkyOTNkYTY2M2Q2ODE4MGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tlZmlyL2Rpc3Qva2VmaXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR3ZWVuanMvdHdlZW4uanMvc3JjL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFZLDJCQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsV0FBVyxFQUFFO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RUQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLENBQUMsNEJBQTRCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHdCQUF3QixPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxvREFBb0QsU0FBUztBQUM3RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSx3QkFBd0IsU0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FB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QUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxTQUFTO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdEQUFnRCxTQUFTO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTs7QUFFQSxpREFBaUQsbUNBQW1DO0FBQ3BGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpREFBaUQsU0FBUztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlEQUFpRCxTQUFTO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELFNBQVM7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLCtDQUErQyxvQ0FBb0M7QUFDbkY7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLCtDQUErQyxvQkFBb0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUEsaURBQWlELFNBQVM7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUEsaURBQWlELFNBQVM7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0NBQXNDLEVBQUUsNEJBQTRCLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0QkFBNEI7QUFDNUQ7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQSxnQ0FBZ0MsNkJBQTZCO0FBQzdEO0FBQ0E7QUFDQSxnQ0FBZ0MsaUNBQWlDO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxjQUFjOztBQUU1RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcG1IRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDJEQUEyRCxzQkFBc0I7QUFDakY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBLDZEQUE2RCxzQkFBc0I7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7O0FBRUgsRUFBRTs7QUFFRjtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7OztBQ2ozQkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJ2ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cbiBcdFx0aWYoZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0XHRmb3IoaT0wOyBpIDwgZXhlY3V0ZU1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZXhlY3V0ZU1vZHVsZXNbaV0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTk4MzkyOTNkYTY2M2Q2ODE4MGUiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgcHJlZml4ID0gJ34nO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIHN0b3JhZ2UgZm9yIG91ciBgRUVgIG9iamVjdHMuXG4gKiBBbiBgRXZlbnRzYCBpbnN0YW5jZSBpcyBhIHBsYWluIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBldmVudCBuYW1lcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFdmVudHMoKSB7fVxuXG4vL1xuLy8gV2UgdHJ5IHRvIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLiBJbiBzb21lIGVuZ2luZXMgY3JlYXRpbmcgYW5cbi8vIGluc3RhbmNlIGluIHRoaXMgd2F5IGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgYE9iamVjdC5jcmVhdGUobnVsbClgIGRpcmVjdGx5LlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGNoYXJhY3RlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdFxuLy8gb3ZlcnJpZGRlbiBvciB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vL1xuaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy9cbiAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgLy8gc29tZSBvbGQgYnJvd3NlcnMgbGlrZSBBbmRyb2lkIDQsIGlQaG9uZSA1LjEsIE9wZXJhIDExIGFuZCBTYWZhcmkgNS5cbiAgLy9cbiAgaWYgKCFuZXcgRXZlbnRzKCkuX19wcm90b19fKSBwcmVmaXggPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gICAgLCBldmVudHNcbiAgICAsIG5hbWU7XG5cbiAgaWYgKHRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIChldmVudHMgPSB0aGlzLl9ldmVudHMpKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXhpc3RzIE9ubHkgY2hlY2sgaWYgdGhlcmUgYXJlIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtBcnJheXxCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQsIGV4aXN0cykge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgYXZhaWxhYmxlID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGV4aXN0cykgcmV0dXJuICEhYXZhaWxhYmxlO1xuICBpZiAoIWF2YWlsYWJsZSkgcmV0dXJuIFtdO1xuICBpZiAoYXZhaWxhYmxlLmZuKSByZXR1cm4gW2F2YWlsYWJsZS5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdmFpbGFibGUubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gYXZhaWxhYmxlW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyLCBhMyk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFN5bWJvbH0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCB0aGlzLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghdGhpcy5fZXZlbnRzW2V2dF0uZm4pIHRoaXMuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIHRoaXMuX2V2ZW50c1tldnRdID0gW3RoaXMuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZCBhIG9uZS10aW1lIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFN5bWJvbH0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgdGhpcywgdHJ1ZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgdGhpcy5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgdGhpcy5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIXRoaXMuX2V2ZW50c1tldnRdLmZuKSB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSB0aGlzLl9ldmVudHNbZXZ0XSA9IFt0aGlzLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGxpc3RlbmVycyBvZiBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFN5bWJvbH0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG4gIGlmICghZm4pIHtcbiAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIGVsc2UgZGVsZXRlIHRoaXMuX2V2ZW50c1tldnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAoXG4gICAgICAgICBsaXN0ZW5lcnMuZm4gPT09IGZuXG4gICAgICAmJiAoIW9uY2UgfHwgbGlzdGVuZXJzLm9uY2UpXG4gICAgICAmJiAoIWNvbnRleHQgfHwgbGlzdGVuZXJzLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgKSB7XG4gICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgICAgZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm5cbiAgICAgICAgfHwgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKVxuICAgICAgICB8fCAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAgIC8vXG4gICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICBlbHNlIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dDtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICh0aGlzLl9ldmVudHNbZXZ0XSkge1xuICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICAgIGVsc2UgZGVsZXRlIHRoaXMuX2V2ZW50c1tldnRdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIFRoaXMgZnVuY3Rpb24gZG9lc24ndCBhcHBseSBhbnltb3JlLlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBBbGxvdyBgRXZlbnRFbWl0dGVyYCB0byBiZSBpbXBvcnRlZCBhcyBtb2R1bGUgbmFtZXNwYWNlLlxuLy9cbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qISBLZWZpci5qcyB2My43LjJcbiAqICBodHRwczovL2dpdGh1Yi5jb20vcnBvbWlub3Yva2VmaXJcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG5cdChmYWN0b3J5KChnbG9iYWwuS2VmaXIgPSBnbG9iYWwuS2VmaXIgfHwge30pKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iaihwcm90bykge1xuICB2YXIgRiA9IGZ1bmN0aW9uICgpIHt9O1xuICBGLnByb3RvdHlwZSA9IHByb3RvO1xuICByZXR1cm4gbmV3IEYoKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCAvKiwgbWl4aW4xLCBtaXhpbjIuLi4qLykge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIGkgPSB2b2lkIDAsXG4gICAgICBwcm9wID0gdm9pZCAwO1xuICBmb3IgKGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHByb3AgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICB0YXJnZXRbcHJvcF0gPSBhcmd1bWVudHNbaV1bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXQoQ2hpbGQsIFBhcmVudCAvKiwgbWl4aW4xLCBtaXhpbjIuLi4qLykge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIENoaWxkLnByb3RvdHlwZSA9IGNyZWF0ZU9iaihQYXJlbnQucHJvdG90eXBlKTtcbiAgQ2hpbGQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2hpbGQ7XG4gIGZvciAoaSA9IDI7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGV4dGVuZChDaGlsZC5wcm90b3R5cGUsIGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgcmV0dXJuIENoaWxkO1xufVxuXG52YXIgTk9USElORyA9IFsnPG5vdGhpbmc+J107XG52YXIgRU5EID0gJ2VuZCc7XG52YXIgVkFMVUUgPSAndmFsdWUnO1xudmFyIEVSUk9SID0gJ2Vycm9yJztcbnZhciBBTlkgPSAnYW55JztcblxuZnVuY3Rpb24gY29uY2F0KGEsIGIpIHtcbiAgdmFyIHJlc3VsdCA9IHZvaWQgMCxcbiAgICAgIGxlbmd0aCA9IHZvaWQgMCxcbiAgICAgIGkgPSB2b2lkIDAsXG4gICAgICBqID0gdm9pZCAwO1xuICBpZiAoYS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZiAoYi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBqID0gMDtcbiAgcmVzdWx0ID0gbmV3IEFycmF5KGEubGVuZ3RoICsgYi5sZW5ndGgpO1xuICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrLCBqKyspIHtcbiAgICByZXN1bHRbal0gPSBhW2ldO1xuICB9XG4gIGxlbmd0aCA9IGIubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyssIGorKykge1xuICAgIHJlc3VsdFtqXSA9IGJbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmluZChhcnIsIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoLFxuICAgICAgaSA9IHZvaWQgMDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycltpXSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGZpbmRCeVByZWQoYXJyLCBwcmVkKSB7XG4gIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoLFxuICAgICAgaSA9IHZvaWQgMDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByZWQoYXJyW2ldKSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gY2xvbmVBcnJheShpbnB1dCkge1xuICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCksXG4gICAgICBpID0gdm9pZCAwO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBpbnB1dFtpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZW1vdmUoaW5wdXQsIGluZGV4KSB7XG4gIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSB2b2lkIDAsXG4gICAgICBpID0gdm9pZCAwLFxuICAgICAgaiA9IHZvaWQgMDtcbiAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGggLSAxKTtcbiAgICAgIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgcmVzdWx0W2pdID0gaW5wdXRbaV07XG4gICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwKGlucHV0LCBmbikge1xuICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCksXG4gICAgICBpID0gdm9pZCAwO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBmbihpbnB1dFtpXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaChhcnIsIGZuKSB7XG4gIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoLFxuICAgICAgaSA9IHZvaWQgMDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZm4oYXJyW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWxsQXJyYXkoYXJyLCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCxcbiAgICAgIGkgPSB2b2lkIDA7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFycltpXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgdmFsdWUpIHtcbiAgcmV0dXJuIGZpbmQoYXJyLCB2YWx1ZSkgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBzbGlkZShjdXIsIG5leHQsIG1heCkge1xuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4obWF4LCBjdXIubGVuZ3RoICsgMSksXG4gICAgICBvZmZzZXQgPSBjdXIubGVuZ3RoIC0gbGVuZ3RoICsgMSxcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpLFxuICAgICAgaSA9IHZvaWQgMDtcbiAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaSAtIG9mZnNldF0gPSBjdXJbaV07XG4gIH1cbiAgcmVzdWx0W2xlbmd0aCAtIDFdID0gbmV4dDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2FsbFN1YnNjcmliZXIodHlwZSwgZm4sIGV2ZW50KSB7XG4gIGlmICh0eXBlID09PSBBTlkpIHtcbiAgICBmbihldmVudCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gZXZlbnQudHlwZSkge1xuICAgIGlmICh0eXBlID09PSBWQUxVRSB8fCB0eXBlID09PSBFUlJPUikge1xuICAgICAgZm4oZXZlbnQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBEaXNwYXRjaGVyKCkge1xuICB0aGlzLl9pdGVtcyA9IFtdO1xuICB0aGlzLl9zcGllcyA9IFtdO1xuICB0aGlzLl9pbkxvb3AgPSAwO1xuICB0aGlzLl9yZW1vdmVkSXRlbXMgPSBudWxsO1xufVxuXG5leHRlbmQoRGlzcGF0Y2hlci5wcm90b3R5cGUsIHtcbiAgYWRkOiBmdW5jdGlvbiAodHlwZSwgZm4pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGNvbmNhdCh0aGlzLl9pdGVtcywgW3sgdHlwZTogdHlwZSwgZm46IGZuIH1dKTtcbiAgICByZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgIHZhciBpbmRleCA9IGZpbmRCeVByZWQodGhpcy5faXRlbXMsIGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geC50eXBlID09PSB0eXBlICYmIHguZm4gPT09IGZuO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgd2UncmUgY3VycmVudGx5IGluIGEgbm90aWZpY2F0aW9uIGxvb3AsXG4gICAgLy8gcmVtZW1iZXIgdGhpcyBzdWJzY3JpYmVyIHdhcyByZW1vdmVkXG4gICAgaWYgKHRoaXMuX2luTG9vcCAhPT0gMCAmJiBpbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmICh0aGlzLl9yZW1vdmVkSXRlbXMgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlZEl0ZW1zID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW1vdmVkSXRlbXMucHVzaCh0aGlzLl9pdGVtc1tpbmRleF0pO1xuICAgIH1cblxuICAgIHRoaXMuX2l0ZW1zID0gcmVtb3ZlKHRoaXMuX2l0ZW1zLCBpbmRleCk7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgfSxcbiAgYWRkU3B5OiBmdW5jdGlvbiAoZm4pIHtcbiAgICB0aGlzLl9zcGllcyA9IGNvbmNhdCh0aGlzLl9zcGllcywgW2ZuXSk7XG4gICAgcmV0dXJuIHRoaXMuX3NwaWVzLmxlbmd0aDtcbiAgfSxcblxuXG4gIC8vIEJlY2F1c2Ugc3BpZXMgYXJlIG9ubHkgZXZlciBhIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybSBsb2dnaW5nIGFzXG4gIC8vIHRoZWlyIG9ubHkgc2lkZSBlZmZlY3QsIHdlIGRvbid0IG5lZWQgdGhlIHNhbWUgY29tcGxpY2F0ZWRcbiAgLy8gcmVtb3ZhbCBsb2dpYyBsaWtlIGluIHJlbW92ZSgpXG4gIHJlbW92ZVNweTogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5fc3BpZXMgPSByZW1vdmUodGhpcy5fc3BpZXMsIHRoaXMuX3NwaWVzLmluZGV4T2YoZm4pKTtcbiAgICByZXR1cm4gdGhpcy5fc3BpZXMubGVuZ3RoO1xuICB9LFxuICBkaXNwYXRjaDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5faW5Mb29wKys7XG4gICAgZm9yICh2YXIgaSA9IDAsIHNwaWVzID0gdGhpcy5fc3BpZXM7IHRoaXMuX3NwaWVzICE9PSBudWxsICYmIGkgPCBzcGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgc3BpZXNbaV0oZXZlbnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMCwgaXRlbXMgPSB0aGlzLl9pdGVtczsgX2kgPCBpdGVtcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIC8vIGNsZWFudXAgd2FzIGNhbGxlZFxuICAgICAgaWYgKHRoaXMuX2l0ZW1zID09PSBudWxsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIHN1YnNjcmliZXIgd2FzIHJlbW92ZWRcbiAgICAgIGlmICh0aGlzLl9yZW1vdmVkSXRlbXMgIT09IG51bGwgJiYgY29udGFpbnModGhpcy5fcmVtb3ZlZEl0ZW1zLCBpdGVtc1tfaV0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjYWxsU3Vic2NyaWJlcihpdGVtc1tfaV0udHlwZSwgaXRlbXNbX2ldLmZuLCBldmVudCk7XG4gICAgfVxuICAgIHRoaXMuX2luTG9vcC0tO1xuICAgIGlmICh0aGlzLl9pbkxvb3AgPT09IDApIHtcbiAgICAgIHRoaXMuX3JlbW92ZWRJdGVtcyA9IG51bGw7XG4gICAgfVxuICB9LFxuICBjbGVhbnVwOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5faXRlbXMgPSBudWxsO1xuICAgIHRoaXMuX3NwaWVzID0gbnVsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIE9ic2VydmFibGUoKSB7XG4gIHRoaXMuX2Rpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcigpO1xuICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgdGhpcy5fYWxpdmUgPSB0cnVlO1xuICB0aGlzLl9hY3RpdmF0aW5nID0gZmFsc2U7XG4gIHRoaXMuX2xvZ0hhbmRsZXJzID0gbnVsbDtcbiAgdGhpcy5fc3B5SGFuZGxlcnMgPSBudWxsO1xufVxuXG5leHRlbmQoT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcbiAgX25hbWU6ICdvYnNlcnZhYmxlJyxcblxuICBfb25BY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7fSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7fSxcbiAgX3NldEFjdGl2ZTogZnVuY3Rpb24gKGFjdGl2ZSkge1xuICAgIGlmICh0aGlzLl9hY3RpdmUgIT09IGFjdGl2ZSkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fb25BY3RpdmF0aW9uKCk7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29uRGVhY3RpdmF0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9zZXRBY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIuY2xlYW51cCgpO1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIgPSBudWxsO1xuICAgIHRoaXMuX2xvZ0hhbmRsZXJzID0gbnVsbDtcbiAgfSxcbiAgX2VtaXQ6IGZ1bmN0aW9uICh0eXBlLCB4KSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFZBTFVFOlxuICAgICAgICByZXR1cm4gdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgICAgY2FzZSBFUlJPUjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXRFcnJvcih4KTtcbiAgICAgIGNhc2UgRU5EOlxuICAgICAgICByZXR1cm4gdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfSxcbiAgX2VtaXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogVkFMVUUsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH0sXG4gIF9lbWl0RXJyb3I6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IEVSUk9SLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgfVxuICB9LFxuICBfZW1pdEVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fYWxpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuZGlzcGF0Y2goeyB0eXBlOiBFTkQgfSk7XG4gICAgICB0aGlzLl9jbGVhcigpO1xuICAgIH1cbiAgfSxcbiAgX29uOiBmdW5jdGlvbiAodHlwZSwgZm4pIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuYWRkKHR5cGUsIGZuKTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbFN1YnNjcmliZXIodHlwZSwgZm4sIHsgdHlwZTogRU5EIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgX29mZjogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB2YXIgY291bnQgPSB0aGlzLl9kaXNwYXRjaGVyLnJlbW92ZSh0eXBlLCBmbik7XG4gICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5fc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIG9uVmFsdWU6IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiB0aGlzLl9vbihWQUxVRSwgZm4pO1xuICB9LFxuICBvbkVycm9yOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb24oRVJST1IsIGZuKTtcbiAgfSxcbiAgb25FbmQ6IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiB0aGlzLl9vbihFTkQsIGZuKTtcbiAgfSxcbiAgb25Bbnk6IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiB0aGlzLl9vbihBTlksIGZuKTtcbiAgfSxcbiAgb2ZmVmFsdWU6IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiB0aGlzLl9vZmYoVkFMVUUsIGZuKTtcbiAgfSxcbiAgb2ZmRXJyb3I6IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiB0aGlzLl9vZmYoRVJST1IsIGZuKTtcbiAgfSxcbiAgb2ZmRW5kOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fb2ZmKEVORCwgZm4pO1xuICB9LFxuICBvZmZBbnk6IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiB0aGlzLl9vZmYoQU5ZLCBmbik7XG4gIH0sXG4gIG9ic2VydmU6IGZ1bmN0aW9uIChvYnNlcnZlck9yT25WYWx1ZSwgb25FcnJvciwgb25FbmQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBjbG9zZWQgPSBmYWxzZTtcblxuICAgIHZhciBvYnNlcnZlciA9ICFvYnNlcnZlck9yT25WYWx1ZSB8fCB0eXBlb2Ygb2JzZXJ2ZXJPck9uVmFsdWUgPT09ICdmdW5jdGlvbicgPyB7IHZhbHVlOiBvYnNlcnZlck9yT25WYWx1ZSwgZXJyb3I6IG9uRXJyb3IsIGVuZDogb25FbmQgfSA6IG9ic2VydmVyT3JPblZhbHVlO1xuXG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSBFTkQpIHtcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSAmJiBvYnNlcnZlci52YWx1ZSkge1xuICAgICAgICBvYnNlcnZlci52YWx1ZShldmVudC52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IEVSUk9SICYmIG9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKGV2ZW50LnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gRU5EICYmIG9ic2VydmVyLmVuZCkge1xuICAgICAgICBvYnNlcnZlci5lbmQoZXZlbnQudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9uQW55KGhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghY2xvc2VkKSB7XG4gICAgICAgICAgX3RoaXMub2ZmQW55KGhhbmRsZXIpO1xuICAgICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgIHJldHVybiBjbG9zZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuXG4gIC8vIEEgYW5kIEIgbXVzdCBiZSBzdWJjbGFzc2VzIG9mIFN0cmVhbSBhbmQgUHJvcGVydHkgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyKVxuICBfb2ZTYW1lVHlwZTogZnVuY3Rpb24gKEEsIEIpIHtcbiAgICByZXR1cm4gQS5wcm90b3R5cGUuZ2V0VHlwZSgpID09PSB0aGlzLmdldFR5cGUoKSA/IEEgOiBCO1xuICB9LFxuICBzZXROYW1lOiBmdW5jdGlvbiAoc291cmNlT2JzIC8qIG9wdGlvbmFsICovLCBzZWxmTmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBzZWxmTmFtZSA/IHNvdXJjZU9icy5fbmFtZSArICcuJyArIHNlbGZOYW1lIDogc291cmNlT2JzO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBsb2c6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy50b1N0cmluZygpO1xuXG4gICAgdmFyIGlzQ3VycmVudCA9IHZvaWQgMDtcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHR5cGUgPSAnPCcgKyBldmVudC50eXBlICsgKGlzQ3VycmVudCA/ICc6Y3VycmVudCcgOiAnJykgKyAnPic7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gRU5EKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgdHlwZSwgZXZlbnQudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIGlmICghdGhpcy5fbG9nSGFuZGxlcnMpIHtcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlcnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZ0hhbmRsZXJzLnB1c2goeyBuYW1lOiBuYW1lLCBoYW5kbGVyOiBoYW5kbGVyIH0pO1xuICAgIH1cblxuICAgIGlzQ3VycmVudCA9IHRydWU7XG4gICAgdGhpcy5vbkFueShoYW5kbGVyKTtcbiAgICBpc0N1cnJlbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBvZmZMb2c6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy50b1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMuX2xvZ0hhbmRsZXJzKSB7XG4gICAgICB2YXIgaGFuZGxlckluZGV4ID0gZmluZEJ5UHJlZCh0aGlzLl9sb2dIYW5kbGVycywgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLm5hbWUgPT09IG5hbWU7XG4gICAgICB9KTtcbiAgICAgIGlmIChoYW5kbGVySW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMub2ZmQW55KHRoaXMuX2xvZ0hhbmRsZXJzW2hhbmRsZXJJbmRleF0uaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXJzLnNwbGljZShoYW5kbGVySW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzcHk6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy50b1N0cmluZygpO1xuXG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciB0eXBlID0gJzwnICsgZXZlbnQudHlwZSArICc+JztcbiAgICAgIGlmIChldmVudC50eXBlID09PSBFTkQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgdHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB0eXBlLCBldmVudC52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIGlmICghdGhpcy5fc3B5SGFuZGxlcnMpIHtcbiAgICAgICAgdGhpcy5fc3B5SGFuZGxlcnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NweUhhbmRsZXJzLnB1c2goeyBuYW1lOiBuYW1lLCBoYW5kbGVyOiBoYW5kbGVyIH0pO1xuICAgICAgdGhpcy5fZGlzcGF0Y2hlci5hZGRTcHkoaGFuZGxlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBvZmZTcHk6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy50b1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMuX3NweUhhbmRsZXJzKSB7XG4gICAgICB2YXIgaGFuZGxlckluZGV4ID0gZmluZEJ5UHJlZCh0aGlzLl9zcHlIYW5kbGVycywgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLm5hbWUgPT09IG5hbWU7XG4gICAgICB9KTtcbiAgICAgIGlmIChoYW5kbGVySW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIucmVtb3ZlU3B5KHRoaXMuX3NweUhhbmRsZXJzW2hhbmRsZXJJbmRleF0uaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX3NweUhhbmRsZXJzLnNwbGljZShoYW5kbGVySW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5cbi8vIGV4dGVuZCgpIGNhbid0IGhhbmRsZSBgdG9TdHJpbmdgIGluIElFOFxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnWycgKyB0aGlzLl9uYW1lICsgJ10nO1xufTtcblxuZnVuY3Rpb24gU3RyZWFtKCkge1xuICBPYnNlcnZhYmxlLmNhbGwodGhpcyk7XG59XG5cbmluaGVyaXQoU3RyZWFtLCBPYnNlcnZhYmxlLCB7XG4gIF9uYW1lOiAnc3RyZWFtJyxcblxuICBnZXRUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdzdHJlYW0nO1xuICB9XG59KTtcblxuZnVuY3Rpb24gUHJvcGVydHkoKSB7XG4gIE9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgdGhpcy5fY3VycmVudEV2ZW50ID0gbnVsbDtcbn1cblxuaW5oZXJpdChQcm9wZXJ0eSwgT2JzZXJ2YWJsZSwge1xuICBfbmFtZTogJ3Byb3BlcnR5JyxcblxuICBfZW1pdFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRFdmVudCA9IHsgdHlwZTogVkFMVUUsIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgaWYgKCF0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuZGlzcGF0Y2goeyB0eXBlOiBWQUxVRSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2VtaXRFcnJvcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50RXZlbnQgPSB7IHR5cGU6IEVSUk9SLCB2YWx1ZTogdmFsdWUgfTtcbiAgICAgIGlmICghdGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogRVJST1IsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9lbWl0RW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9hbGl2ZSA9IGZhbHNlO1xuICAgICAgaWYgKCF0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuZGlzcGF0Y2goeyB0eXBlOiBFTkQgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jbGVhcigpO1xuICAgIH1cbiAgfSxcbiAgX29uOiBmdW5jdGlvbiAodHlwZSwgZm4pIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuYWRkKHR5cGUsIGZuKTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZSh0cnVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRFdmVudCAhPT0gbnVsbCkge1xuICAgICAgY2FsbFN1YnNjcmliZXIodHlwZSwgZm4sIHRoaXMuX2N1cnJlbnRFdmVudCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fYWxpdmUpIHtcbiAgICAgIGNhbGxTdWJzY3JpYmVyKHR5cGUsIGZuLCB7IHR5cGU6IEVORCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGdldFR5cGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ3Byb3BlcnR5JztcbiAgfVxufSk7XG5cbnZhciBuZXZlclMgPSBuZXcgU3RyZWFtKCk7XG5uZXZlclMuX2VtaXRFbmQoKTtcbm5ldmVyUy5fbmFtZSA9ICduZXZlcic7XG5cbmZ1bmN0aW9uIG5ldmVyKCkge1xuICByZXR1cm4gbmV2ZXJTO1xufVxuXG5mdW5jdGlvbiB0aW1lQmFzZWQobWl4aW4pIHtcbiAgZnVuY3Rpb24gQW5vbnltb3VzU3RyZWFtKHdhaXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgU3RyZWFtLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fd2FpdCA9IHdhaXQ7XG4gICAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgdGhpcy5fJG9uVGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fb25UaWNrKCk7XG4gICAgfTtcbiAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgaW5oZXJpdChBbm9ueW1vdXNTdHJlYW0sIFN0cmVhbSwge1xuICAgIF9pbml0OiBmdW5jdGlvbiAoKSB7fSxcbiAgICBfZnJlZTogZnVuY3Rpb24gKCkge30sXG4gICAgX29uVGljazogZnVuY3Rpb24gKCkge30sXG4gICAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuXyRvblRpY2ssIHRoaXMuX3dhaXQpO1xuICAgIH0sXG4gICAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5faW50ZXJ2YWxJZCAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSWQpO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgU3RyZWFtLnByb3RvdHlwZS5fY2xlYXIuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuXyRvblRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5fZnJlZSgpO1xuICAgIH1cbiAgfSwgbWl4aW4pO1xuXG4gIHJldHVybiBBbm9ueW1vdXNTdHJlYW07XG59XG5cbnZhciBTID0gdGltZUJhc2VkKHtcbiAgX25hbWU6ICdsYXRlcicsXG5cbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHggPSBfcmVmLng7XG5cbiAgICB0aGlzLl94ID0geDtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl94ID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl94KTtcbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsYXRlcih3YWl0LCB4KSB7XG4gIHJldHVybiBuZXcgUyh3YWl0LCB7IHg6IHggfSk7XG59XG5cbnZhciBTJDEgPSB0aW1lQmFzZWQoe1xuICBfbmFtZTogJ2ludGVydmFsJyxcblxuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgeCA9IF9yZWYueDtcblxuICAgIHRoaXMuX3ggPSB4O1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3ggPSBudWxsO1xuICB9LFxuICBfb25UaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX3gpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gaW50ZXJ2YWwod2FpdCwgeCkge1xuICByZXR1cm4gbmV3IFMkMSh3YWl0LCB7IHg6IHggfSk7XG59XG5cbnZhciBTJDIgPSB0aW1lQmFzZWQoe1xuICBfbmFtZTogJ3NlcXVlbnRpYWxseScsXG5cbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHhzID0gX3JlZi54cztcblxuICAgIHRoaXMuX3hzID0gY2xvbmVBcnJheSh4cyk7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5feHMgPSBudWxsO1xuICB9LFxuICBfb25UaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3hzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX3hzWzBdKTtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX3hzLnNoaWZ0KCkpO1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHNlcXVlbnRpYWxseSh3YWl0LCB4cykge1xuICByZXR1cm4geHMubGVuZ3RoID09PSAwID8gbmV2ZXIoKSA6IG5ldyBTJDIod2FpdCwgeyB4czogeHMgfSk7XG59XG5cbnZhciBTJDMgPSB0aW1lQmFzZWQoe1xuICBfbmFtZTogJ2Zyb21Qb2xsJyxcblxuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9vblRpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICB0aGlzLl9lbWl0VmFsdWUoZm4oKSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcm9tUG9sbCh3YWl0LCBmbikge1xuICByZXR1cm4gbmV3IFMkMyh3YWl0LCB7IGZuOiBmbiB9KTtcbn1cblxuZnVuY3Rpb24gZW1pdHRlcihvYnMpIHtcbiAgZnVuY3Rpb24gdmFsdWUoeCkge1xuICAgIG9icy5fZW1pdFZhbHVlKHgpO1xuICAgIHJldHVybiBvYnMuX2FjdGl2ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVycm9yKHgpIHtcbiAgICBvYnMuX2VtaXRFcnJvcih4KTtcbiAgICByZXR1cm4gb2JzLl9hY3RpdmU7XG4gIH1cblxuICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgb2JzLl9lbWl0RW5kKCk7XG4gICAgcmV0dXJuIG9icy5fYWN0aXZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnQoZSkge1xuICAgIG9icy5fZW1pdChlLnR5cGUsIGUudmFsdWUpO1xuICAgIHJldHVybiBvYnMuX2FjdGl2ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBlbmQ6IGVuZCxcbiAgICBldmVudDogZXZlbnQsXG5cbiAgICAvLyBsZWdhY3lcbiAgICBlbWl0OiB2YWx1ZSxcbiAgICBlbWl0RXZlbnQ6IGV2ZW50XG4gIH07XG59XG5cbnZhciBTJDQgPSB0aW1lQmFzZWQoe1xuICBfbmFtZTogJ3dpdGhJbnRlcnZhbCcsXG5cbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXIodGhpcyk7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBudWxsO1xuICB9LFxuICBfb25UaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgZm4odGhpcy5fZW1pdHRlcik7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB3aXRoSW50ZXJ2YWwod2FpdCwgZm4pIHtcbiAgcmV0dXJuIG5ldyBTJDQod2FpdCwgeyBmbjogZm4gfSk7XG59XG5cbmZ1bmN0aW9uIFMkNShmbikge1xuICBTdHJlYW0uY2FsbCh0aGlzKTtcbiAgdGhpcy5fZm4gPSBmbjtcbiAgdGhpcy5fdW5zdWJzY3JpYmUgPSBudWxsO1xufVxuXG5pbmhlcml0KFMkNSwgU3RyZWFtLCB7XG4gIF9uYW1lOiAnc3RyZWFtJyxcblxuICBfb25BY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gZm4oZW1pdHRlcih0aGlzKSk7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB0eXBlb2YgdW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicgPyB1bnN1YnNjcmliZSA6IG51bGw7XG5cbiAgICAvLyBmaXggaHR0cHM6Ly9naXRodWIuY29tL3Jwb21pbm92L2tlZmlyL2lzc3Vlcy8zNVxuICAgIGlmICghdGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9jYWxsVW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH0sXG4gIF9jYWxsVW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fdW5zdWJzY3JpYmUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZSA9IG51bGw7XG4gICAgfVxuICB9LFxuICBfb25EZWFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9jYWxsVW5zdWJzY3JpYmUoKTtcbiAgfSxcbiAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgU3RyZWFtLnByb3RvdHlwZS5fY2xlYXIuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJlYW0oZm4pIHtcbiAgcmV0dXJuIG5ldyBTJDUoZm4pO1xufVxuXG5mdW5jdGlvbiBmcm9tQ2FsbGJhY2soY2FsbGJhY2tDb25zdW1lcikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHN0cmVhbShmdW5jdGlvbiAoZW1pdHRlcikge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsYmFja0NvbnN1bWVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGVtaXR0ZXIuZW1pdCh4KTtcbiAgICAgICAgZW1pdHRlci5lbmQoKTtcbiAgICAgIH0pO1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pLnNldE5hbWUoJ2Zyb21DYWxsYmFjaycpO1xufVxuXG5mdW5jdGlvbiBmcm9tTm9kZUNhbGxiYWNrKGNhbGxiYWNrQ29uc3VtZXIpIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gIHJldHVybiBzdHJlYW0oZnVuY3Rpb24gKGVtaXR0ZXIpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGJhY2tDb25zdW1lcihmdW5jdGlvbiAoZXJyb3IsIHgpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZW1pdHRlci5lcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW1pdHRlci5lbWl0KHgpO1xuICAgICAgICB9XG4gICAgICAgIGVtaXR0ZXIuZW5kKCk7XG4gICAgICB9KTtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfVxuICB9KS5zZXROYW1lKCdmcm9tTm9kZUNhbGxiYWNrJyk7XG59XG5cbmZ1bmN0aW9uIHNwcmVhZChmbiwgbGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9O1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gZm4oYVswXSk7XG4gICAgICB9O1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gZm4oYVswXSwgYVsxXSk7XG4gICAgICB9O1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gZm4oYVswXSwgYVsxXSwgYVsyXSk7XG4gICAgICB9O1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gZm4oYVswXSwgYVsxXSwgYVsyXSwgYVszXSk7XG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGEpO1xuICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseShmbiwgYywgYSkge1xuICB2YXIgYUxlbmd0aCA9IGEgPyBhLmxlbmd0aCA6IDA7XG4gIGlmIChjID09IG51bGwpIHtcbiAgICBzd2l0Y2ggKGFMZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBmbihhWzBdKTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIGZuKGFbMF0sIGFbMV0pO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gZm4oYVswXSwgYVsxXSwgYVsyXSk7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiBmbihhWzBdLCBhWzFdLCBhWzJdLCBhWzNdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhTGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBmbi5jYWxsKGMpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGMsIGEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tU3ViVW5zdWIoc3ViLCB1bnN1YiwgdHJhbnNmb3JtZXIgLyogRnVuY3Rpb24gfCBmYWxzZXkgKi8pIHtcbiAgcmV0dXJuIHN0cmVhbShmdW5jdGlvbiAoZW1pdHRlcikge1xuICAgIHZhciBoYW5kbGVyID0gdHJhbnNmb3JtZXIgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoYXBwbHkodHJhbnNmb3JtZXIsIHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH0gOiBmdW5jdGlvbiAoeCkge1xuICAgICAgZW1pdHRlci5lbWl0KHgpO1xuICAgIH07XG5cbiAgICBzdWIoaGFuZGxlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bnN1YihoYW5kbGVyKTtcbiAgICB9O1xuICB9KS5zZXROYW1lKCdmcm9tU3ViVW5zdWInKTtcbn1cblxudmFyIHBhaXJzID0gW1snYWRkRXZlbnRMaXN0ZW5lcicsICdyZW1vdmVFdmVudExpc3RlbmVyJ10sIFsnYWRkTGlzdGVuZXInLCAncmVtb3ZlTGlzdGVuZXInXSwgWydvbicsICdvZmYnXV07XG5cbmZ1bmN0aW9uIGZyb21FdmVudHModGFyZ2V0LCBldmVudE5hbWUsIHRyYW5zZm9ybWVyKSB7XG4gIHZhciBzdWIgPSB2b2lkIDAsXG4gICAgICB1bnN1YiA9IHZvaWQgMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRbcGFpcnNbaV1bMF1dID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB0YXJnZXRbcGFpcnNbaV1bMV1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzdWIgPSBwYWlyc1tpXVswXTtcbiAgICAgIHVuc3ViID0gcGFpcnNbaV1bMV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3ViID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0YXJnZXQgZG9uJ3Qgc3VwcG9ydCBhbnkgb2YgXCIgKyAnYWRkRXZlbnRMaXN0ZW5lci9yZW1vdmVFdmVudExpc3RlbmVyLCBhZGRMaXN0ZW5lci9yZW1vdmVMaXN0ZW5lciwgb24vb2ZmIG1ldGhvZCBwYWlyJyk7XG4gIH1cblxuICByZXR1cm4gZnJvbVN1YlVuc3ViKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRhcmdldFtzdWJdKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH0sIGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRhcmdldFt1bnN1Yl0oZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfSwgdHJhbnNmb3JtZXIpLnNldE5hbWUoJ2Zyb21FdmVudHMnKTtcbn1cblxuLy8gSEFDSzpcbi8vICAgV2UgZG9uJ3QgY2FsbCBwYXJlbnQgQ2xhc3MgY29uc3RydWN0b3IsIGJ1dCBpbnN0ZWFkIHB1dHRpbmcgYWxsIG5lY2Vzc2FyeVxuLy8gICBwcm9wZXJ0aWVzIGludG8gcHJvdG90eXBlIHRvIHNpbXVsYXRlIGVuZGVkIFByb3BlcnR5XG4vLyAgIChzZWUgUHJvcHBlcnR5IGFuZCBPYnNlcnZhYmxlIGNsYXNzZXMpLlxuXG5mdW5jdGlvbiBQKHZhbHVlKSB7XG4gIHRoaXMuX2N1cnJlbnRFdmVudCA9IHsgdHlwZTogJ3ZhbHVlJywgdmFsdWU6IHZhbHVlLCBjdXJyZW50OiB0cnVlIH07XG59XG5cbmluaGVyaXQoUCwgUHJvcGVydHksIHtcbiAgX25hbWU6ICdjb25zdGFudCcsXG4gIF9hY3RpdmU6IGZhbHNlLFxuICBfYWN0aXZhdGluZzogZmFsc2UsXG4gIF9hbGl2ZTogZmFsc2UsXG4gIF9kaXNwYXRjaGVyOiBudWxsLFxuICBfbG9nSGFuZGxlcnM6IG51bGxcbn0pO1xuXG5mdW5jdGlvbiBjb25zdGFudCh4KSB7XG4gIHJldHVybiBuZXcgUCh4KTtcbn1cblxuLy8gSEFDSzpcbi8vICAgV2UgZG9uJ3QgY2FsbCBwYXJlbnQgQ2xhc3MgY29uc3RydWN0b3IsIGJ1dCBpbnN0ZWFkIHB1dHRpbmcgYWxsIG5lY2Vzc2FyeVxuLy8gICBwcm9wZXJ0aWVzIGludG8gcHJvdG90eXBlIHRvIHNpbXVsYXRlIGVuZGVkIFByb3BlcnR5XG4vLyAgIChzZWUgUHJvcHBlcnR5IGFuZCBPYnNlcnZhYmxlIGNsYXNzZXMpLlxuXG5mdW5jdGlvbiBQJDEodmFsdWUpIHtcbiAgdGhpcy5fY3VycmVudEV2ZW50ID0geyB0eXBlOiAnZXJyb3InLCB2YWx1ZTogdmFsdWUsIGN1cnJlbnQ6IHRydWUgfTtcbn1cblxuaW5oZXJpdChQJDEsIFByb3BlcnR5LCB7XG4gIF9uYW1lOiAnY29uc3RhbnRFcnJvcicsXG4gIF9hY3RpdmU6IGZhbHNlLFxuICBfYWN0aXZhdGluZzogZmFsc2UsXG4gIF9hbGl2ZTogZmFsc2UsXG4gIF9kaXNwYXRjaGVyOiBudWxsLFxuICBfbG9nSGFuZGxlcnM6IG51bGxcbn0pO1xuXG5mdW5jdGlvbiBjb25zdGFudEVycm9yKHgpIHtcbiAgcmV0dXJuIG5ldyBQJDEoeCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnN0cnVjdG9yKEJhc2VDbGFzcywgbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gQW5vbnltb3VzT2JzZXJ2YWJsZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgQmFzZUNsYXNzLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuX25hbWUgPSBzb3VyY2UuX25hbWUgKyAnLicgKyBuYW1lO1xuICAgIHRoaXMuX2luaXQob3B0aW9ucyk7XG4gICAgdGhpcy5fJGhhbmRsZUFueSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9oYW5kbGVBbnkoZXZlbnQpO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzTWV0aG9kcyhCYXNlQ2xhc3MpIHtcbiAgcmV0dXJuIHtcbiAgICBfaW5pdDogZnVuY3Rpb24gKCkge30sXG4gICAgX2ZyZWU6IGZ1bmN0aW9uICgpIHt9LFxuICAgIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9LFxuICAgIF9oYW5kbGVFcnJvcjogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX2VtaXRFcnJvcih4KTtcbiAgICB9LFxuICAgIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9LFxuICAgIF9oYW5kbGVBbnk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgVkFMVUU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICAgICAgY2FzZSBFUlJPUjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXZlbnQudmFsdWUpO1xuICAgICAgICBjYXNlIEVORDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRW5kKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBfb25BY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9zb3VyY2Uub25BbnkodGhpcy5fJGhhbmRsZUFueSk7XG4gICAgfSxcbiAgICBfb25EZWFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3NvdXJjZS5vZmZBbnkodGhpcy5fJGhhbmRsZUFueSk7XG4gICAgfSxcbiAgICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIEJhc2VDbGFzcy5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgICAgdGhpcy5fJGhhbmRsZUFueSA9IG51bGw7XG4gICAgICB0aGlzLl9mcmVlKCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJlYW0obmFtZSwgbWl4aW4pIHtcbiAgdmFyIFMgPSBjcmVhdGVDb25zdHJ1Y3RvcihTdHJlYW0sIG5hbWUpO1xuICBpbmhlcml0KFMsIFN0cmVhbSwgY3JlYXRlQ2xhc3NNZXRob2RzKFN0cmVhbSksIG1peGluKTtcbiAgcmV0dXJuIFM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG1peGluKSB7XG4gIHZhciBQID0gY3JlYXRlQ29uc3RydWN0b3IoUHJvcGVydHksIG5hbWUpO1xuICBpbmhlcml0KFAsIFByb3BlcnR5LCBjcmVhdGVDbGFzc01ldGhvZHMoUHJvcGVydHkpLCBtaXhpbik7XG4gIHJldHVybiBQO1xufVxuXG52YXIgUCQyID0gY3JlYXRlUHJvcGVydHkoJ3RvUHJvcGVydHknLCB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9nZXRJbml0aWFsQ3VycmVudCA9IGZuO1xuICB9LFxuICBfb25BY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2dldEluaXRpYWxDdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICB2YXIgZ2V0SW5pdGlhbCA9IHRoaXMuX2dldEluaXRpYWxDdXJyZW50O1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKGdldEluaXRpYWwoKSk7XG4gICAgfVxuICAgIHRoaXMuX3NvdXJjZS5vbkFueSh0aGlzLl8kaGFuZGxlQW55KTsgLy8gY29waWVkIGZyb20gcGF0dGVybnMvb25lLXNvdXJjZVxuICB9XG59KTtcblxuZnVuY3Rpb24gdG9Qcm9wZXJ0eShvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuXG4gIGlmIChmbiAhPT0gbnVsbCAmJiB0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBzaG91bGQgY2FsbCB0b1Byb3BlcnR5KCkgd2l0aCBhIGZ1bmN0aW9uIG9yIG5vIGFyZ3VtZW50cy4nKTtcbiAgfVxuICByZXR1cm4gbmV3IFAkMihvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgUyQ2ID0gY3JlYXRlU3RyZWFtKCdjaGFuZ2VzJywge1xuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgaWYgKCF0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgaWYgKCF0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gY2hhbmdlcyhvYnMpIHtcbiAgcmV0dXJuIG5ldyBTJDYob2JzKTtcbn1cblxuZnVuY3Rpb24gZnJvbVByb21pc2UocHJvbWlzZSkge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG5cbiAgdmFyIHJlc3VsdCA9IHN0cmVhbShmdW5jdGlvbiAoZW1pdHRlcikge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB2YXIgb25WYWx1ZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGVtaXR0ZXIuZW1pdCh4KTtcbiAgICAgICAgZW1pdHRlci5lbmQoKTtcbiAgICAgIH07XG4gICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGVtaXR0ZXIuZXJyb3IoeCk7XG4gICAgICAgIGVtaXR0ZXIuZW5kKCk7XG4gICAgICB9O1xuICAgICAgdmFyIF9wcm9taXNlID0gcHJvbWlzZS50aGVuKG9uVmFsdWUsIG9uRXJyb3IpO1xuXG4gICAgICAvLyBwcmV2ZW50IGxpYnJhcmllcyBsaWtlICdRJyBvciAnd2hlbicgZnJvbSBzd2FsbG93aW5nIGV4Y2VwdGlvbnNcbiAgICAgIGlmIChfcHJvbWlzZSAmJiB0eXBlb2YgX3Byb21pc2UuZG9uZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBfcHJvbWlzZS5kb25lKCk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdG9Qcm9wZXJ0eShyZXN1bHQsIG51bGwpLnNldE5hbWUoJ2Zyb21Qcm9taXNlJyk7XG59XG5cbmZ1bmN0aW9uIGdldEdsb2RhbFByb21pc2UoKSB7XG4gIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBQcm9taXNlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzbid0IGRlZmF1bHQgUHJvbWlzZSwgdXNlIHNoaW0gb3IgcGFyYW1ldGVyXCIpO1xuICB9XG59XG5cbnZhciB0b1Byb21pc2UgPSBmdW5jdGlvbiAob2JzKSB7XG4gIHZhciBQcm9taXNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBnZXRHbG9kYWxQcm9taXNlKCk7XG5cbiAgdmFyIGxhc3QgPSBudWxsO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIG9icy5vbkFueShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSBFTkQgJiYgbGFzdCAhPT0gbnVsbCkge1xuICAgICAgICAobGFzdC50eXBlID09PSBWQUxVRSA/IHJlc29sdmUgOiByZWplY3QpKGxhc3QudmFsdWUpO1xuICAgICAgICBsYXN0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3QgPSBldmVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgcG9ueWZpbGwgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG59KTtcblxudmFyIGluZGV4JDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cblxuXG52YXIgX3BvbnlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocG9ueWZpbGwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9O1xufVxuXG52YXIgcm9vdDsgLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgY29tbW9uanNHbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBjb21tb25qc0dsb2JhbDtcbn0gZWxzZSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMlsnZGVmYXVsdCddKShyb290KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc3VsdDtcbn0pO1xuXG52YXIgaW5kZXggPSBpbmRleCQxO1xuXG4vLyB0aGlzIGZpbGUgY29udGFpbnMgc29tZSBob3QgSlMgbW9kdWxlcyBzeXN0ZW1zIHN0dWZmXG5cbnZhciAkJG9ic2VydmFibGUgPSBpbmRleC5kZWZhdWx0ID8gaW5kZXguZGVmYXVsdCA6IGluZGV4O1xuXG5mdW5jdGlvbiBmcm9tRVNPYnNlcnZhYmxlKF9vYnNlcnZhYmxlKSB7XG4gIHZhciBvYnNlcnZhYmxlID0gX29ic2VydmFibGVbJCRvYnNlcnZhYmxlXSA/IF9vYnNlcnZhYmxlWyQkb2JzZXJ2YWJsZV0oKSA6IF9vYnNlcnZhYmxlO1xuICByZXR1cm4gc3RyZWFtKGZ1bmN0aW9uIChlbWl0dGVyKSB7XG4gICAgdmFyIHVuc3ViID0gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBlbWl0dGVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgZW1pdHRlci5lbmQoKTtcbiAgICAgIH0sXG4gICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZW1pdHRlci5lbWl0KHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBlbWl0dGVyLmVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuc3ViLnVuc3Vic2NyaWJlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB1bnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuc3ViO1xuICAgIH1cbiAgfSkuc2V0TmFtZSgnZnJvbUVTT2JzZXJ2YWJsZScpO1xufVxuXG5mdW5jdGlvbiBFU09ic2VydmFibGUob2JzZXJ2YWJsZSkge1xuICB0aGlzLl9vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZS50YWtlRXJyb3JzKDEpO1xufVxuXG5leHRlbmQoRVNPYnNlcnZhYmxlLnByb3RvdHlwZSwge1xuICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChvYnNlcnZlck9yT25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBvYnNlcnZlciA9IHR5cGVvZiBvYnNlcnZlck9yT25OZXh0ID09PSAnZnVuY3Rpb24nID8geyBuZXh0OiBvYnNlcnZlck9yT25OZXh0LCBlcnJvcjogb25FcnJvciwgY29tcGxldGU6IG9uQ29tcGxldGUgfSA6IG9ic2VydmVyT3JPbk5leHQ7XG5cbiAgICB2YXIgZm4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSBFTkQpIHtcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFZBTFVFICYmIG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChldmVudC52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IEVSUk9SICYmIG9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKGV2ZW50LnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gRU5EICYmIG9ic2VydmVyLmNvbXBsZXRlKSB7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKGV2ZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5fb2JzZXJ2YWJsZS5vbkFueShmbik7XG4gICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuXG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHtcbiAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLl9vYnNlcnZhYmxlLm9mZkFueShmbik7XG4gICAgICB9LFxuICAgICAgZ2V0IGNsb3NlZCgpIHtcbiAgICAgICAgcmV0dXJuIGNsb3NlZDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH1cbn0pO1xuXG4vLyBOZWVkIHRvIGFzc2lnbiBkaXJlY3RseSBiL2MgU3ltYm9scyBhcmVuJ3QgZW51bWVyYWJsZS5cbkVTT2JzZXJ2YWJsZS5wcm90b3R5cGVbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiB0b0VTT2JzZXJ2YWJsZSgpIHtcbiAgcmV0dXJuIG5ldyBFU09ic2VydmFibGUodGhpcyk7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3Qoc291cmNlLCBrZXlzLCB2YWx1ZXMpIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBrZXlzLnB1c2gocHJvcCk7XG4gICAgICB2YWx1ZXMucHVzaChzb3VyY2VbcHJvcF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0RXJyb3JzQ29tYmluYXRvcihlcnJvcnMpIHtcbiAgdmFyIGxhdGVzdEVycm9yID0gdm9pZCAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlcnJvcnNbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGxhdGVzdEVycm9yID09PSB1bmRlZmluZWQgfHwgbGF0ZXN0RXJyb3IuaW5kZXggPCBlcnJvcnNbaV0uaW5kZXgpIHtcbiAgICAgICAgbGF0ZXN0RXJyb3IgPSBlcnJvcnNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBsYXRlc3RFcnJvci5lcnJvcjtcbn1cblxuZnVuY3Rpb24gQ29tYmluZShhY3RpdmUsIHBhc3NpdmUsIGNvbWJpbmF0b3IpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbiAgdGhpcy5fYWN0aXZlQ291bnQgPSBhY3RpdmUubGVuZ3RoO1xuICB0aGlzLl9zb3VyY2VzID0gY29uY2F0KGFjdGl2ZSwgcGFzc2l2ZSk7XG4gIHRoaXMuX2NvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xuICB0aGlzLl9hbGl2ZUNvdW50ID0gMDtcbiAgdGhpcy5fbGF0ZXN0VmFsdWVzID0gbmV3IEFycmF5KHRoaXMuX3NvdXJjZXMubGVuZ3RoKTtcbiAgdGhpcy5fbGF0ZXN0RXJyb3JzID0gbmV3IEFycmF5KHRoaXMuX3NvdXJjZXMubGVuZ3RoKTtcbiAgZmlsbEFycmF5KHRoaXMuX2xhdGVzdFZhbHVlcywgTk9USElORyk7XG4gIHRoaXMuX2VtaXRBZnRlckFjdGl2YXRpb24gPSBmYWxzZTtcbiAgdGhpcy5fZW5kQWZ0ZXJBY3RpdmF0aW9uID0gZmFsc2U7XG4gIHRoaXMuX2xhdGVzdEVycm9ySW5kZXggPSAwO1xuXG4gIHRoaXMuXyRoYW5kbGVycyA9IFtdO1xuXG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgX3RoaXMuXyRoYW5kbGVycy5wdXNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9oYW5kbGVBbnkoaSwgZXZlbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgIF9sb29wKGkpO1xuICB9XG59XG5cbmluaGVyaXQoQ29tYmluZSwgU3RyZWFtLCB7XG4gIF9uYW1lOiAnY29tYmluZScsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2FsaXZlQ291bnQgPSB0aGlzLl9hY3RpdmVDb3VudDtcblxuICAgIC8vIHdlIG5lZWQgdG8gc3VzY3JpYmUgdG8gX3Bhc3NpdmVfIHNvdXJjZXMgYmVmb3JlIF9hY3RpdmVfXG4gICAgLy8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vcnBvbWlub3Yva2VmaXIvaXNzdWVzLzk4KVxuICAgIGZvciAodmFyIGkgPSB0aGlzLl9hY3RpdmVDb3VudDsgaSA8IHRoaXMuX3NvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3NvdXJjZXNbaV0ub25BbnkodGhpcy5fJGhhbmRsZXJzW2ldKTtcbiAgICB9XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMuX2FjdGl2ZUNvdW50OyBfaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW19pXS5vbkFueSh0aGlzLl8kaGFuZGxlcnNbX2ldKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZW1pdEFmdGVyQWN0aXZhdGlvbikge1xuICAgICAgdGhpcy5fZW1pdEFmdGVyQWN0aXZhdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW1pdElmRnVsbCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5kQWZ0ZXJBY3RpdmF0aW9uKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfVxuICB9LFxuICBfb25EZWFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGkgPSB2b2lkIDA7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9mZkFueSh0aGlzLl8kaGFuZGxlcnNbaV0pO1xuICAgIH1cbiAgfSxcbiAgX2VtaXRJZkZ1bGw6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFzQWxsVmFsdWVzID0gdHJ1ZTtcbiAgICB2YXIgaGFzRXJyb3JzID0gZmFsc2U7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuX2xhdGVzdFZhbHVlcy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlc0NvcHkgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICB2YXIgZXJyb3JzQ29weSA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzQ29weVtpXSA9IHRoaXMuX2xhdGVzdFZhbHVlc1tpXTtcbiAgICAgIGVycm9yc0NvcHlbaV0gPSB0aGlzLl9sYXRlc3RFcnJvcnNbaV07XG5cbiAgICAgIGlmICh2YWx1ZXNDb3B5W2ldID09PSBOT1RISU5HKSB7XG4gICAgICAgIGhhc0FsbFZhbHVlcyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3JzQ29weVtpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGhhc0Vycm9ycyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc0FsbFZhbHVlcykge1xuICAgICAgdmFyIGNvbWJpbmF0b3IgPSB0aGlzLl9jb21iaW5hdG9yO1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKGNvbWJpbmF0b3IodmFsdWVzQ29weSkpO1xuICAgIH1cbiAgICBpZiAoaGFzRXJyb3JzKSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoZGVmYXVsdEVycm9yc0NvbWJpbmF0b3IoZXJyb3JzQ29weSkpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUFueTogZnVuY3Rpb24gKGksIGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFZBTFVFIHx8IGV2ZW50LnR5cGUgPT09IEVSUk9SKSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gVkFMVUUpIHtcbiAgICAgICAgdGhpcy5fbGF0ZXN0VmFsdWVzW2ldID0gZXZlbnQudmFsdWU7XG4gICAgICAgIHRoaXMuX2xhdGVzdEVycm9yc1tpXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC50eXBlID09PSBFUlJPUikge1xuICAgICAgICB0aGlzLl9sYXRlc3RWYWx1ZXNbaV0gPSBOT1RISU5HO1xuICAgICAgICB0aGlzLl9sYXRlc3RFcnJvcnNbaV0gPSB7XG4gICAgICAgICAgaW5kZXg6IHRoaXMuX2xhdGVzdEVycm9ySW5kZXgrKyxcbiAgICAgICAgICBlcnJvcjogZXZlbnQudmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPCB0aGlzLl9hY3RpdmVDb3VudCkge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICAgIHRoaXMuX2VtaXRBZnRlckFjdGl2YXRpb24gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2VtaXRJZkZ1bGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBFTkRcblxuICAgICAgaWYgKGkgPCB0aGlzLl9hY3RpdmVDb3VudCkge1xuICAgICAgICB0aGlzLl9hbGl2ZUNvdW50LS07XG4gICAgICAgIGlmICh0aGlzLl9hbGl2ZUNvdW50ID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2VuZEFmdGVyQWN0aXZhdGlvbiA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc291cmNlcyA9IG51bGw7XG4gICAgdGhpcy5fbGF0ZXN0VmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLl9sYXRlc3RFcnJvcnMgPSBudWxsO1xuICAgIHRoaXMuX2NvbWJpbmF0b3IgPSBudWxsO1xuICAgIHRoaXMuXyRoYW5kbGVycyA9IG51bGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjb21iaW5lQXNBcnJheShhY3RpdmUpIHtcbiAgdmFyIHBhc3NpdmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICB2YXIgY29tYmluYXRvciA9IGFyZ3VtZW50c1syXTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkocGFzc2l2ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbWJpbmUgY2FuIG9ubHkgY29tYmluZSBhY3RpdmUgYW5kIHBhc3NpdmUgY29sbGVjdGlvbnMgb2YgdGhlIHNhbWUgdHlwZS4nKTtcbiAgfVxuXG4gIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yID8gc3ByZWFkKGNvbWJpbmF0b3IsIGFjdGl2ZS5sZW5ndGggKyBwYXNzaXZlLmxlbmd0aCkgOiBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9O1xuICByZXR1cm4gYWN0aXZlLmxlbmd0aCA9PT0gMCA/IG5ldmVyKCkgOiBuZXcgQ29tYmluZShhY3RpdmUsIHBhc3NpdmUsIGNvbWJpbmF0b3IpO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lQXNPYmplY3QoYWN0aXZlKSB7XG4gIHZhciBwYXNzaXZlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIGNvbWJpbmF0b3IgPSBhcmd1bWVudHNbMl07XG5cbiAgaWYgKHR5cGVvZiBwYXNzaXZlICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHBhc3NpdmUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb21iaW5lIGNhbiBvbmx5IGNvbWJpbmUgYWN0aXZlIGFuZCBwYXNzaXZlIGNvbGxlY3Rpb25zIG9mIHRoZSBzYW1lIHR5cGUuJyk7XG4gIH1cblxuICB2YXIga2V5cyA9IFtdLFxuICAgICAgYWN0aXZlT2JzZXJ2YWJsZXMgPSBbXSxcbiAgICAgIHBhc3NpdmVPYnNlcnZhYmxlcyA9IFtdO1xuXG4gIGNvbGxlY3QoYWN0aXZlLCBrZXlzLCBhY3RpdmVPYnNlcnZhYmxlcyk7XG4gIGNvbGxlY3QocGFzc2l2ZSwga2V5cywgcGFzc2l2ZU9ic2VydmFibGVzKTtcblxuICB2YXIgb2JqZWN0aWZ5ID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHZhciBldmVudCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSB2YWx1ZXMubGVuZ3RoIC0gMTsgMCA8PSBpOyBpLS0pIHtcbiAgICAgIGV2ZW50W2tleXNbaV1dID0gdmFsdWVzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gY29tYmluYXRvciA/IGNvbWJpbmF0b3IoZXZlbnQpIDogZXZlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIGFjdGl2ZU9ic2VydmFibGVzLmxlbmd0aCA9PT0gMCA/IG5ldmVyKCkgOiBuZXcgQ29tYmluZShhY3RpdmVPYnNlcnZhYmxlcywgcGFzc2l2ZU9ic2VydmFibGVzLCBvYmplY3RpZnkpO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lKGFjdGl2ZSwgcGFzc2l2ZSwgY29tYmluYXRvcikge1xuICBpZiAodHlwZW9mIHBhc3NpdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb21iaW5hdG9yID0gcGFzc2l2ZTtcbiAgICBwYXNzaXZlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYWN0aXZlKSA/IGNvbWJpbmVBc0FycmF5KGFjdGl2ZSwgcGFzc2l2ZSwgY29tYmluYXRvcikgOiBjb21iaW5lQXNPYmplY3QoYWN0aXZlLCBwYXNzaXZlLCBjb21iaW5hdG9yKTtcbn1cblxudmFyIE9ic2VydmFibGUkMiA9IHtcbiAgZW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV2ZXIoKTtcbiAgfSxcblxuXG4gIC8vIE1vbm9pZCBiYXNlZCBvbiBtZXJnZSgpIHNlZW1zIG1vcmUgdXNlZnVsIHRoYW4gb25lIGJhc2VkIG9uIGNvbmNhdCgpLlxuICBjb25jYXQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEubWVyZ2UoYik7XG4gIH0sXG4gIG9mOiBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBjb25zdGFudCh4KTtcbiAgfSxcbiAgbWFwOiBmdW5jdGlvbiAoZm4sIG9icykge1xuICAgIHJldHVybiBvYnMubWFwKGZuKTtcbiAgfSxcbiAgYmltYXA6IGZ1bmN0aW9uIChmbkVyciwgZm5WYWwsIG9icykge1xuICAgIHJldHVybiBvYnMubWFwRXJyb3JzKGZuRXJyKS5tYXAoZm5WYWwpO1xuICB9LFxuXG5cbiAgLy8gVGhpcyBhcCBzdHJpY3RseSBzcGVha2luZyBpbmNvbXBhdGlibGUgd2l0aCBjaGFpbi4gSWYgd2UgZGVyaXZlIGFwIGZyb20gY2hhaW4gd2UgZ2V0XG4gIC8vIGRpZmZlcmVudCAobm90IHZlcnkgdXNlZnVsKSBiZWhhdmlvci4gQnV0IHNwZWMgcmVxdWlyZXMgdGhhdCBpZiBtZXRob2QgY2FuIGJlIGRlcml2ZWRcbiAgLy8gaXQgbXVzdCBoYXZlIHRoZSBzYW1lIGJlaGF2aW9yIGFzIGhhbmQtd3JpdHRlbiBtZXRob2QuIFdlIGludGVudGlvbmFsbHkgdmlvbGF0ZSB0aGUgc3BlY1xuICAvLyBpbiBob3BlIHRoYXQgaXQgd29uJ3QgY2F1c2UgbWFueSB0cm91YmxlcyBpbiBwcmFjdGljZS4gQW5kIGluIHJldHVybiB3ZSBoYXZlIG1vcmUgdXNlZnVsIHR5cGUuXG4gIGFwOiBmdW5jdGlvbiAob2JzRm4sIG9ic1ZhbCkge1xuICAgIHJldHVybiBjb21iaW5lKFtvYnNGbiwgb2JzVmFsXSwgZnVuY3Rpb24gKGZuLCB2YWwpIHtcbiAgICAgIHJldHVybiBmbih2YWwpO1xuICAgIH0pO1xuICB9LFxuICBjaGFpbjogZnVuY3Rpb24gKGZuLCBvYnMpIHtcbiAgICByZXR1cm4gb2JzLmZsYXRNYXAoZm4pO1xuICB9XG59O1xuXG5cblxudmFyIHN0YXRpY0xhbmQgPSBPYmplY3QuZnJlZXplKHtcblx0T2JzZXJ2YWJsZTogT2JzZXJ2YWJsZSQyXG59KTtcblxudmFyIG1peGluID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICB0aGlzLl9lbWl0VmFsdWUoZm4oeCkpO1xuICB9XG59O1xuXG52YXIgUyQ3ID0gY3JlYXRlU3RyZWFtKCdtYXAnLCBtaXhpbik7XG52YXIgUCQzID0gY3JlYXRlUHJvcGVydHkoJ21hcCcsIG1peGluKTtcblxudmFyIGlkID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5mdW5jdGlvbiBtYXAkMShvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBpZDtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQ3LCBQJDMpKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgbWl4aW4kMSA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKGZuKHgpKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQ4ID0gY3JlYXRlU3RyZWFtKCdmaWx0ZXInLCBtaXhpbiQxKTtcbnZhciBQJDQgPSBjcmVhdGVQcm9wZXJ0eSgnZmlsdGVyJywgbWl4aW4kMSk7XG5cbnZhciBpZCQxID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogaWQkMTtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQ4LCBQJDQpKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgbWl4aW4kMiA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG4gPSBfcmVmLm47XG5cbiAgICB0aGlzLl9uID0gbjtcbiAgICBpZiAobiA8PSAwKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fbi0tO1xuICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICBpZiAodGhpcy5fbiA9PT0gMCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkOSA9IGNyZWF0ZVN0cmVhbSgndGFrZScsIG1peGluJDIpO1xudmFyIFAkNSA9IGNyZWF0ZVByb3BlcnR5KCd0YWtlJywgbWl4aW4kMik7XG5cbmZ1bmN0aW9uIHRha2Uob2JzLCBuKSB7XG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDksIFAkNSkpKG9icywgeyBuOiBuIH0pO1xufVxuXG52YXIgbWl4aW4kMyA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG4gPSBfcmVmLm47XG5cbiAgICB0aGlzLl9uID0gbjtcbiAgICBpZiAobiA8PSAwKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fbi0tO1xuICAgIHRoaXMuX2VtaXRFcnJvcih4KTtcbiAgICBpZiAodGhpcy5fbiA9PT0gMCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMTAgPSBjcmVhdGVTdHJlYW0oJ3Rha2VFcnJvcnMnLCBtaXhpbiQzKTtcbnZhciBQJDYgPSBjcmVhdGVQcm9wZXJ0eSgndGFrZUVycm9ycycsIG1peGluJDMpO1xuXG5mdW5jdGlvbiB0YWtlRXJyb3JzKG9icywgbikge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQxMCwgUCQ2KSkob2JzLCB7IG46IG4gfSk7XG59XG5cbnZhciBtaXhpbiQ0ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICBpZiAoZm4oeCkpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMTEgPSBjcmVhdGVTdHJlYW0oJ3Rha2VXaGlsZScsIG1peGluJDQpO1xudmFyIFAkNyA9IGNyZWF0ZVByb3BlcnR5KCd0YWtlV2hpbGUnLCBtaXhpbiQ0KTtcblxudmFyIGlkJDIgPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geDtcbn07XG5cbmZ1bmN0aW9uIHRha2VXaGlsZShvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBpZCQyO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDExLCBQJDcpKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgbWl4aW4kNSA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9sYXN0VmFsdWUgPSBOT1RISU5HO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2xhc3RWYWx1ZSA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB0aGlzLl9sYXN0VmFsdWUgPSB4O1xuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2xhc3RWYWx1ZSAhPT0gTk9USElORykge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2xhc3RWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgfVxufTtcblxudmFyIFMkMTIgPSBjcmVhdGVTdHJlYW0oJ2xhc3QnLCBtaXhpbiQ1KTtcbnZhciBQJDggPSBjcmVhdGVQcm9wZXJ0eSgnbGFzdCcsIG1peGluJDUpO1xuXG5mdW5jdGlvbiBsYXN0KG9icykge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQxMiwgUCQ4KSkob2JzKTtcbn1cblxudmFyIG1peGluJDYgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuID0gX3JlZi5uO1xuXG4gICAgdGhpcy5fbiA9IE1hdGgubWF4KDAsIG4pO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgaWYgKHRoaXMuX24gPT09IDApIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbi0tO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMTMgPSBjcmVhdGVTdHJlYW0oJ3NraXAnLCBtaXhpbiQ2KTtcbnZhciBQJDkgPSBjcmVhdGVQcm9wZXJ0eSgnc2tpcCcsIG1peGluJDYpO1xuXG5mdW5jdGlvbiBza2lwKG9icywgbikge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQxMywgUCQ5KSkob2JzLCB7IG46IG4gfSk7XG59XG5cbnZhciBtaXhpbiQ3ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICBpZiAodGhpcy5fZm4gIT09IG51bGwgJiYgIWZuKHgpKSB7XG4gICAgICB0aGlzLl9mbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9mbiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMTQgPSBjcmVhdGVTdHJlYW0oJ3NraXBXaGlsZScsIG1peGluJDcpO1xudmFyIFAkMTAgPSBjcmVhdGVQcm9wZXJ0eSgnc2tpcFdoaWxlJywgbWl4aW4kNyk7XG5cbnZhciBpZCQzID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5mdW5jdGlvbiBza2lwV2hpbGUob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogaWQkMztcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQxNCwgUCQxMCkpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQ4ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9wcmV2ID0gTk9USElORztcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICBpZiAodGhpcy5fcHJldiA9PT0gTk9USElORyB8fCAhZm4odGhpcy5fcHJldiwgeCkpIHtcbiAgICAgIHRoaXMuX3ByZXYgPSB4O1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMTUgPSBjcmVhdGVTdHJlYW0oJ3NraXBEdXBsaWNhdGVzJywgbWl4aW4kOCk7XG52YXIgUCQxMSA9IGNyZWF0ZVByb3BlcnR5KCdza2lwRHVwbGljYXRlcycsIG1peGluJDgpO1xuXG52YXIgZXEgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIHNraXBEdXBsaWNhdGVzKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGVxO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDE1LCBQJDExKSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDkgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm4sXG4gICAgICAgIHNlZWQgPSBfcmVmLnNlZWQ7XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX3ByZXYgPSBzZWVkO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9wcmV2ICE9PSBOT1RISU5HKSB7XG4gICAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShmbih0aGlzLl9wcmV2LCB4KSk7XG4gICAgfVxuICAgIHRoaXMuX3ByZXYgPSB4O1xuICB9XG59O1xuXG52YXIgUyQxNiA9IGNyZWF0ZVN0cmVhbSgnZGlmZicsIG1peGluJDkpO1xudmFyIFAkMTIgPSBjcmVhdGVQcm9wZXJ0eSgnZGlmZicsIG1peGluJDkpO1xuXG5mdW5jdGlvbiBkZWZhdWx0Rm4oYSwgYikge1xuICByZXR1cm4gW2EsIGJdO1xufVxuXG5mdW5jdGlvbiBkaWZmKG9icywgZm4pIHtcbiAgdmFyIHNlZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IE5PVEhJTkc7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTYsIFAkMTIpKShvYnMsIHsgZm46IGZuIHx8IGRlZmF1bHRGbiwgc2VlZDogc2VlZCB9KTtcbn1cblxudmFyIFAkMTMgPSBjcmVhdGVQcm9wZXJ0eSgnc2NhbicsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbixcbiAgICAgICAgc2VlZCA9IF9yZWYuc2VlZDtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fc2VlZCA9IHNlZWQ7XG4gICAgaWYgKHNlZWQgIT09IE5PVEhJTkcpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZShzZWVkKTtcbiAgICB9XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICAgIHRoaXMuX3NlZWQgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRFdmVudCA9PT0gbnVsbCB8fCB0aGlzLl9jdXJyZW50RXZlbnQudHlwZSA9PT0gRVJST1IpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl9zZWVkID09PSBOT1RISU5HID8geCA6IGZuKHRoaXMuX3NlZWQsIHgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKGZuKHRoaXMuX2N1cnJlbnRFdmVudC52YWx1ZSwgeCkpO1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHNjYW4ob2JzLCBmbikge1xuICB2YXIgc2VlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogTk9USElORztcblxuICByZXR1cm4gbmV3IFAkMTMob2JzLCB7IGZuOiBmbiwgc2VlZDogc2VlZCB9KTtcbn1cblxudmFyIG1peGluJDEwID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICB2YXIgeHMgPSBmbih4KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeHNbaV0pO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMTcgPSBjcmVhdGVTdHJlYW0oJ2ZsYXR0ZW4nLCBtaXhpbiQxMCk7XG5cbnZhciBpZCQ0ID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5mdW5jdGlvbiBmbGF0dGVuKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkJDQ7XG5cbiAgcmV0dXJuIG5ldyBTJDE3KG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBFTkRfTUFSS0VSID0ge307XG5cbnZhciBtaXhpbiQxMSA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB3YWl0ID0gX3JlZi53YWl0O1xuXG4gICAgdGhpcy5fd2FpdCA9IE1hdGgubWF4KDAsIHdhaXQpO1xuICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgICB0aGlzLl8kc2hpZnRCdWZmID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuX2J1ZmYuc2hpZnQoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gRU5EX01BUktFUikge1xuICAgICAgICBfdGhpcy5fZW1pdEVuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX2VtaXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9idWZmID0gbnVsbDtcbiAgICB0aGlzLl8kc2hpZnRCdWZmID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmF0aW5nKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5fJHNoaWZ0QnVmZiwgdGhpcy5fd2FpdCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnVmZi5wdXNoKEVORF9NQVJLRVIpO1xuICAgICAgc2V0VGltZW91dCh0aGlzLl8kc2hpZnRCdWZmLCB0aGlzLl93YWl0KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDE4ID0gY3JlYXRlU3RyZWFtKCdkZWxheScsIG1peGluJDExKTtcbnZhciBQJDE0ID0gY3JlYXRlUHJvcGVydHkoJ2RlbGF5JywgbWl4aW4kMTEpO1xuXG5mdW5jdGlvbiBkZWxheShvYnMsIHdhaXQpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMTgsIFAkMTQpKShvYnMsIHsgd2FpdDogd2FpdCB9KTtcbn1cblxudmFyIG5vdyA9IERhdGUubm93ID8gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRGF0ZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbnZhciBtaXhpbiQxMiA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB3YWl0ID0gX3JlZi53YWl0LFxuICAgICAgICBsZWFkaW5nID0gX3JlZi5sZWFkaW5nLFxuICAgICAgICB0cmFpbGluZyA9IF9yZWYudHJhaWxpbmc7XG5cbiAgICB0aGlzLl93YWl0ID0gTWF0aC5tYXgoMCwgd2FpdCk7XG4gICAgdGhpcy5fbGVhZGluZyA9IGxlYWRpbmc7XG4gICAgdGhpcy5fdHJhaWxpbmcgPSB0cmFpbGluZztcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMuX2VuZExhdGVyID0gZmFsc2U7XG4gICAgdGhpcy5fbGFzdENhbGxUaW1lID0gMDtcbiAgICB0aGlzLl8kdHJhaWxpbmdDYWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLl90cmFpbGluZ0NhbGwoKTtcbiAgICB9O1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3RyYWlsaW5nVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuXyR0cmFpbGluZ0NhbGwgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGN1clRpbWUgPSBub3coKTtcbiAgICAgIGlmICh0aGlzLl9sYXN0Q2FsbFRpbWUgPT09IDAgJiYgIXRoaXMuX2xlYWRpbmcpIHtcbiAgICAgICAgdGhpcy5fbGFzdENhbGxUaW1lID0gY3VyVGltZTtcbiAgICAgIH1cbiAgICAgIHZhciByZW1haW5pbmcgPSB0aGlzLl93YWl0IC0gKGN1clRpbWUgLSB0aGlzLl9sYXN0Q2FsbFRpbWUpO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbFRyYWlsaW5nKCk7XG4gICAgICAgIHRoaXMuX2xhc3RDYWxsVGltZSA9IGN1clRpbWU7XG4gICAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHJhaWxpbmcpIHtcbiAgICAgICAgdGhpcy5fY2FuY2VsVHJhaWxpbmcoKTtcbiAgICAgICAgdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IHg7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IHNldFRpbWVvdXQodGhpcy5fJHRyYWlsaW5nQ2FsbCwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fdGltZW91dElkKSB7XG4gICAgICAgIHRoaXMuX2VuZExhdGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9jYW5jZWxUcmFpbGluZzogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl90aW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0SWQpO1xuICAgICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIF90cmFpbGluZ0NhbGw6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5fdHJhaWxpbmdWYWx1ZSk7XG4gICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0Q2FsbFRpbWUgPSAhdGhpcy5fbGVhZGluZyA/IDAgOiBub3coKTtcbiAgICBpZiAodGhpcy5fZW5kTGF0ZXIpIHtcbiAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDE5ID0gY3JlYXRlU3RyZWFtKCd0aHJvdHRsZScsIG1peGluJDEyKTtcbnZhciBQJDE1ID0gY3JlYXRlUHJvcGVydHkoJ3Rocm90dGxlJywgbWl4aW4kMTIpO1xuXG5mdW5jdGlvbiB0aHJvdHRsZShvYnMsIHdhaXQpIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgIF9yZWYyJGxlYWRpbmcgPSBfcmVmMi5sZWFkaW5nLFxuICAgICAgbGVhZGluZyA9IF9yZWYyJGxlYWRpbmcgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmMiRsZWFkaW5nLFxuICAgICAgX3JlZjIkdHJhaWxpbmcgPSBfcmVmMi50cmFpbGluZyxcbiAgICAgIHRyYWlsaW5nID0gX3JlZjIkdHJhaWxpbmcgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmMiR0cmFpbGluZztcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQxOSwgUCQxNSkpKG9icywgeyB3YWl0OiB3YWl0LCBsZWFkaW5nOiBsZWFkaW5nLCB0cmFpbGluZzogdHJhaWxpbmcgfSk7XG59XG5cbnZhciBtaXhpbiQxMyA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB3YWl0ID0gX3JlZi53YWl0LFxuICAgICAgICBpbW1lZGlhdGUgPSBfcmVmLmltbWVkaWF0ZTtcblxuICAgIHRoaXMuX3dhaXQgPSBNYXRoLm1heCgwLCB3YWl0KTtcbiAgICB0aGlzLl9pbW1lZGlhdGUgPSBpbW1lZGlhdGU7XG4gICAgdGhpcy5fbGFzdEF0dGVtcHQgPSAwO1xuICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgdGhpcy5fbGF0ZXJWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fZW5kTGF0ZXIgPSBmYWxzZTtcbiAgICB0aGlzLl8kbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX2xhdGVyKCk7XG4gICAgfTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9sYXRlclZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl8kbGF0ZXIgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2YXRpbmcpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGFzdEF0dGVtcHQgPSBub3coKTtcbiAgICAgIGlmICh0aGlzLl9pbW1lZGlhdGUgJiYgIXRoaXMuX3RpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX3RpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuXyRsYXRlciwgdGhpcy5fd2FpdCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2ltbWVkaWF0ZSkge1xuICAgICAgICB0aGlzLl9sYXRlclZhbHVlID0geDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fdGltZW91dElkICYmICF0aGlzLl9pbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5fZW5kTGF0ZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2xhdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxhc3QgPSBub3coKSAtIHRoaXMuX2xhc3RBdHRlbXB0O1xuICAgIGlmIChsYXN0IDwgdGhpcy5fd2FpdCAmJiBsYXN0ID49IDApIHtcbiAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IHNldFRpbWVvdXQodGhpcy5fJGxhdGVyLCB0aGlzLl93YWl0IC0gbGFzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuX2ltbWVkaWF0ZSkge1xuICAgICAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5fbGF0ZXJWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2xhdGVyVmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2VuZExhdGVyKSB7XG4gICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDIwID0gY3JlYXRlU3RyZWFtKCdkZWJvdW5jZScsIG1peGluJDEzKTtcbnZhciBQJDE2ID0gY3JlYXRlUHJvcGVydHkoJ2RlYm91bmNlJywgbWl4aW4kMTMpO1xuXG5mdW5jdGlvbiBkZWJvdW5jZShvYnMsIHdhaXQpIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgIF9yZWYyJGltbWVkaWF0ZSA9IF9yZWYyLmltbWVkaWF0ZSxcbiAgICAgIGltbWVkaWF0ZSA9IF9yZWYyJGltbWVkaWF0ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmMiRpbW1lZGlhdGU7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjAsIFAkMTYpKShvYnMsIHsgd2FpdDogd2FpdCwgaW1tZWRpYXRlOiBpbW1lZGlhdGUgfSk7XG59XG5cbnZhciBtaXhpbiQxNCA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbjtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIGZuID0gdGhpcy5fZm47XG4gICAgdGhpcy5fZW1pdEVycm9yKGZuKHgpKTtcbiAgfVxufTtcblxudmFyIFMkMjEgPSBjcmVhdGVTdHJlYW0oJ21hcEVycm9ycycsIG1peGluJDE0KTtcbnZhciBQJDE3ID0gY3JlYXRlUHJvcGVydHkoJ21hcEVycm9ycycsIG1peGluJDE0KTtcblxudmFyIGlkJDUgPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geDtcbn07XG5cbmZ1bmN0aW9uIG1hcEVycm9ycyhvYnMpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBpZCQ1O1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDIxLCBQJDE3KSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDE1ID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVFcnJvcjogZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICBpZiAoZm4oeCkpIHtcbiAgICAgIHRoaXMuX2VtaXRFcnJvcih4KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTJDIyID0gY3JlYXRlU3RyZWFtKCdmaWx0ZXJFcnJvcnMnLCBtaXhpbiQxNSk7XG52YXIgUCQxOCA9IGNyZWF0ZVByb3BlcnR5KCdmaWx0ZXJFcnJvcnMnLCBtaXhpbiQxNSk7XG5cbnZhciBpZCQ2ID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXJFcnJvcnMob2JzKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogaWQkNjtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQyMiwgUCQxOCkpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBtaXhpbiQxNiA9IHtcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoKSB7fVxufTtcblxudmFyIFMkMjMgPSBjcmVhdGVTdHJlYW0oJ2lnbm9yZVZhbHVlcycsIG1peGluJDE2KTtcbnZhciBQJDE5ID0gY3JlYXRlUHJvcGVydHkoJ2lnbm9yZVZhbHVlcycsIG1peGluJDE2KTtcblxuZnVuY3Rpb24gaWdub3JlVmFsdWVzKG9icykge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQyMywgUCQxOSkpKG9icyk7XG59XG5cbnZhciBtaXhpbiQxNyA9IHtcbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAoKSB7fVxufTtcblxudmFyIFMkMjQgPSBjcmVhdGVTdHJlYW0oJ2lnbm9yZUVycm9ycycsIG1peGluJDE3KTtcbnZhciBQJDIwID0gY3JlYXRlUHJvcGVydHkoJ2lnbm9yZUVycm9ycycsIG1peGluJDE3KTtcblxuZnVuY3Rpb24gaWdub3JlRXJyb3JzKG9icykge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQyNCwgUCQyMCkpKG9icyk7XG59XG5cbnZhciBtaXhpbiQxOCA9IHtcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge31cbn07XG5cbnZhciBTJDI1ID0gY3JlYXRlU3RyZWFtKCdpZ25vcmVFbmQnLCBtaXhpbiQxOCk7XG52YXIgUCQyMSA9IGNyZWF0ZVByb3BlcnR5KCdpZ25vcmVFbmQnLCBtaXhpbiQxOCk7XG5cbmZ1bmN0aW9uIGlnbm9yZUVuZChvYnMpIHtcbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjUsIFAkMjEpKShvYnMpO1xufVxuXG52YXIgbWl4aW4kMTkgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIHRoaXMuX2VtaXRWYWx1ZShmbigpKTtcbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH1cbn07XG5cbnZhciBTJDI2ID0gY3JlYXRlU3RyZWFtKCdiZWZvcmVFbmQnLCBtaXhpbiQxOSk7XG52YXIgUCQyMiA9IGNyZWF0ZVByb3BlcnR5KCdiZWZvcmVFbmQnLCBtaXhpbiQxOSk7XG5cbmZ1bmN0aW9uIGJlZm9yZUVuZChvYnMsIGZuKSB7XG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDI2LCBQJDIyKSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDIwID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbWluID0gX3JlZi5taW4sXG4gICAgICAgIG1heCA9IF9yZWYubWF4O1xuXG4gICAgdGhpcy5fbWF4ID0gbWF4O1xuICAgIHRoaXMuX21pbiA9IG1pbjtcbiAgICB0aGlzLl9idWZmID0gW107XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYnVmZiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICB0aGlzLl9idWZmID0gc2xpZGUodGhpcy5fYnVmZiwgeCwgdGhpcy5fbWF4KTtcbiAgICBpZiAodGhpcy5fYnVmZi5sZW5ndGggPj0gdGhpcy5fbWluKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5fYnVmZik7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQyNyA9IGNyZWF0ZVN0cmVhbSgnc2xpZGluZ1dpbmRvdycsIG1peGluJDIwKTtcbnZhciBQJDIzID0gY3JlYXRlUHJvcGVydHkoJ3NsaWRpbmdXaW5kb3cnLCBtaXhpbiQyMCk7XG5cbmZ1bmN0aW9uIHNsaWRpbmdXaW5kb3cob2JzLCBtYXgpIHtcbiAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMDtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQyNywgUCQyMykpKG9icywgeyBtaW46IG1pbiwgbWF4OiBtYXggfSk7XG59XG5cbnZhciBtaXhpbiQyMSA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZuID0gX3JlZi5mbixcbiAgICAgICAgZmx1c2hPbkVuZCA9IF9yZWYuZmx1c2hPbkVuZDtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fZmx1c2hPbkVuZCA9IGZsdXNoT25FbmQ7XG4gICAgdGhpcy5fYnVmZiA9IFtdO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2J1ZmYgPSBudWxsO1xuICB9LFxuICBfZmx1c2g6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYnVmZiAhPT0gbnVsbCAmJiB0aGlzLl9idWZmLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2J1ZmYpO1xuICAgICAgdGhpcy5fYnVmZiA9IFtdO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICBpZiAoIWZuKHgpKSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9mbHVzaE9uRW5kKSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH1cbn07XG5cbnZhciBTJDI4ID0gY3JlYXRlU3RyZWFtKCdidWZmZXJXaGlsZScsIG1peGluJDIxKTtcbnZhciBQJDI0ID0gY3JlYXRlUHJvcGVydHkoJ2J1ZmZlcldoaWxlJywgbWl4aW4kMjEpO1xuXG52YXIgaWQkNyA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gYnVmZmVyV2hpbGUob2JzLCBmbikge1xuICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9LFxuICAgICAgX3JlZjIkZmx1c2hPbkVuZCA9IF9yZWYyLmZsdXNoT25FbmQsXG4gICAgICBmbHVzaE9uRW5kID0gX3JlZjIkZmx1c2hPbkVuZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYyJGZsdXNoT25FbmQ7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMjgsIFAkMjQpKShvYnMsIHsgZm46IGZuIHx8IGlkJDcsIGZsdXNoT25FbmQ6IGZsdXNoT25FbmQgfSk7XG59XG5cbnZhciBtaXhpbiQyMiA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGNvdW50ID0gX3JlZi5jb3VudCxcbiAgICAgICAgZmx1c2hPbkVuZCA9IF9yZWYuZmx1c2hPbkVuZDtcblxuICAgIHRoaXMuX2NvdW50ID0gY291bnQ7XG4gICAgdGhpcy5fZmx1c2hPbkVuZCA9IGZsdXNoT25FbmQ7XG4gICAgdGhpcy5fYnVmZiA9IFtdO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2J1ZmYgPSBudWxsO1xuICB9LFxuICBfZmx1c2g6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fYnVmZiAhPT0gbnVsbCAmJiB0aGlzLl9idWZmLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKHRoaXMuX2J1ZmYpO1xuICAgICAgdGhpcy5fYnVmZiA9IFtdO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgICBpZiAodGhpcy5fYnVmZi5sZW5ndGggPj0gdGhpcy5fY291bnQpIHtcbiAgICAgIHRoaXMuX2ZsdXNoKCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2ZsdXNoT25FbmQpIHtcbiAgICAgIHRoaXMuX2ZsdXNoKCk7XG4gICAgfVxuICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgfVxufTtcblxudmFyIFMkMjkgPSBjcmVhdGVTdHJlYW0oJ2J1ZmZlcldpdGhDb3VudCcsIG1peGluJDIyKTtcbnZhciBQJDI1ID0gY3JlYXRlUHJvcGVydHkoJ2J1ZmZlcldpdGhDb3VudCcsIG1peGluJDIyKTtcblxuZnVuY3Rpb24gYnVmZmVyV2hpbGUkMShvYnMsIGNvdW50KSB7XG4gIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmMiRmbHVzaE9uRW5kID0gX3JlZjIuZmx1c2hPbkVuZCxcbiAgICAgIGZsdXNoT25FbmQgPSBfcmVmMiRmbHVzaE9uRW5kID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZjIkZmx1c2hPbkVuZDtcblxuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQyOSwgUCQyNSkpKG9icywgeyBjb3VudDogY291bnQsIGZsdXNoT25FbmQ6IGZsdXNoT25FbmQgfSk7XG59XG5cbnZhciBtaXhpbiQyMyA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB3YWl0ID0gX3JlZi53YWl0LFxuICAgICAgICBjb3VudCA9IF9yZWYuY291bnQsXG4gICAgICAgIGZsdXNoT25FbmQgPSBfcmVmLmZsdXNoT25FbmQ7XG5cbiAgICB0aGlzLl93YWl0ID0gd2FpdDtcbiAgICB0aGlzLl9jb3VudCA9IGNvdW50O1xuICAgIHRoaXMuX2ZsdXNoT25FbmQgPSBmbHVzaE9uRW5kO1xuICAgIHRoaXMuX2ludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuXyRvblRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX2ZsdXNoKCk7XG4gICAgfTtcbiAgICB0aGlzLl9idWZmID0gW107XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fJG9uVGljayA9IG51bGw7XG4gICAgdGhpcy5fYnVmZiA9IG51bGw7XG4gIH0sXG4gIF9mbHVzaDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9idWZmICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5fYnVmZik7XG4gICAgICB0aGlzLl9idWZmID0gW107XG4gICAgfVxuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fYnVmZi5wdXNoKHgpO1xuICAgIGlmICh0aGlzLl9idWZmLmxlbmd0aCA+PSB0aGlzLl9jb3VudCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElkKTtcbiAgICAgIHRoaXMuX2ZsdXNoKCk7XG4gICAgICB0aGlzLl9pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5fJG9uVGljaywgdGhpcy5fd2FpdCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2ZsdXNoT25FbmQgJiYgdGhpcy5fYnVmZi5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuX2ZsdXNoKCk7XG4gICAgfVxuICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgfSxcbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLl8kb25UaWNrLCB0aGlzLl93YWl0KTtcbiAgICB0aGlzLl9zb3VyY2Uub25BbnkodGhpcy5fJGhhbmRsZUFueSk7IC8vIGNvcGllZCBmcm9tIHBhdHRlcm5zL29uZS1zb3VyY2VcbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxJZCk7XG4gICAgICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fc291cmNlLm9mZkFueSh0aGlzLl8kaGFuZGxlQW55KTsgLy8gY29waWVkIGZyb20gcGF0dGVybnMvb25lLXNvdXJjZVxuICB9XG59O1xuXG52YXIgUyQzMCA9IGNyZWF0ZVN0cmVhbSgnYnVmZmVyV2l0aFRpbWVPckNvdW50JywgbWl4aW4kMjMpO1xudmFyIFAkMjYgPSBjcmVhdGVQcm9wZXJ0eSgnYnVmZmVyV2l0aFRpbWVPckNvdW50JywgbWl4aW4kMjMpO1xuXG5mdW5jdGlvbiBidWZmZXJXaXRoVGltZU9yQ291bnQob2JzLCB3YWl0LCBjb3VudCkge1xuICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9LFxuICAgICAgX3JlZjIkZmx1c2hPbkVuZCA9IF9yZWYyLmZsdXNoT25FbmQsXG4gICAgICBmbHVzaE9uRW5kID0gX3JlZjIkZmx1c2hPbkVuZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYyJGZsdXNoT25FbmQ7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkMzAsIFAkMjYpKShvYnMsIHsgd2FpdDogd2FpdCwgY291bnQ6IGNvdW50LCBmbHVzaE9uRW5kOiBmbHVzaE9uRW5kIH0pO1xufVxuXG5mdW5jdGlvbiB4Zm9ybUZvck9icyhvYnMpIHtcbiAgcmV0dXJuIHtcbiAgICAnQEB0cmFuc2R1Y2VyL3N0ZXAnOiBmdW5jdGlvbiAocmVzLCBpbnB1dCkge1xuICAgICAgb2JzLl9lbWl0VmFsdWUoaW5wdXQpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICAnQEB0cmFuc2R1Y2VyL3Jlc3VsdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9icy5fZW1pdEVuZCgpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbWl4aW4kMjQgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB0cmFuc2R1Y2VyID0gX3JlZi50cmFuc2R1Y2VyO1xuXG4gICAgdGhpcy5feGZvcm0gPSB0cmFuc2R1Y2VyKHhmb3JtRm9yT2JzKHRoaXMpKTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl94Zm9ybSA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAodGhpcy5feGZvcm1bJ0BAdHJhbnNkdWNlci9zdGVwJ10obnVsbCwgeCkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3hmb3JtWydAQHRyYW5zZHVjZXIvcmVzdWx0J10obnVsbCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5feGZvcm1bJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShudWxsKTtcbiAgfVxufTtcblxudmFyIFMkMzEgPSBjcmVhdGVTdHJlYW0oJ3RyYW5zZHVjZScsIG1peGluJDI0KTtcbnZhciBQJDI3ID0gY3JlYXRlUHJvcGVydHkoJ3RyYW5zZHVjZScsIG1peGluJDI0KTtcblxuZnVuY3Rpb24gdHJhbnNkdWNlKG9icywgdHJhbnNkdWNlcikge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQzMSwgUCQyNykpKG9icywgeyB0cmFuc2R1Y2VyOiB0cmFuc2R1Y2VyIH0pO1xufVxuXG52YXIgbWl4aW4kMjUgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9oYW5kbGVyID0gZm47XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXIodGhpcyk7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5faGFuZGxlciA9IG51bGw7XG4gICAgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVBbnk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuX2hhbmRsZXIodGhpcy5fZW1pdHRlciwgZXZlbnQpO1xuICB9XG59O1xuXG52YXIgUyQzMiA9IGNyZWF0ZVN0cmVhbSgnd2l0aEhhbmRsZXInLCBtaXhpbiQyNSk7XG52YXIgUCQyOCA9IGNyZWF0ZVByb3BlcnR5KCd3aXRoSGFuZGxlcicsIG1peGluJDI1KTtcblxuZnVuY3Rpb24gd2l0aEhhbmRsZXIob2JzLCBmbikge1xuICByZXR1cm4gbmV3IChvYnMuX29mU2FtZVR5cGUoUyQzMiwgUCQyOCkpKG9icywgeyBmbjogZm4gfSk7XG59XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBaaXAoc291cmNlcywgY29tYmluYXRvcikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuX2J1ZmZlcnMgPSBtYXAoc291cmNlcywgZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIHJldHVybiBpc0FycmF5KHNvdXJjZSkgPyBjbG9uZUFycmF5KHNvdXJjZSkgOiBbXTtcbiAgfSk7XG4gIHRoaXMuX3NvdXJjZXMgPSBtYXAoc291cmNlcywgZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIHJldHVybiBpc0FycmF5KHNvdXJjZSkgPyBuZXZlcigpIDogc291cmNlO1xuICB9KTtcblxuICB0aGlzLl9jb21iaW5hdG9yID0gY29tYmluYXRvciA/IHNwcmVhZChjb21iaW5hdG9yLCB0aGlzLl9zb3VyY2VzLmxlbmd0aCkgOiBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9O1xuICB0aGlzLl9hbGl2ZUNvdW50ID0gMDtcblxuICB0aGlzLl8kaGFuZGxlcnMgPSBbXTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoaSkge1xuICAgIF90aGlzLl8kaGFuZGxlcnMucHVzaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlQW55KGksIGV2ZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICBfbG9vcChpKTtcbiAgfVxufVxuXG5pbmhlcml0KFppcCwgU3RyZWFtLCB7XG4gIF9uYW1lOiAnemlwJyxcblxuICBfb25BY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYgYWxsIHNvdXJjZXMgYXJlIGFycmF5c1xuICAgIHdoaWxlICh0aGlzLl9pc0Z1bGwoKSkge1xuICAgICAgdGhpcy5fZW1pdCgpO1xuICAgIH1cblxuICAgIHZhciBsZW5ndGggPSB0aGlzLl9zb3VyY2VzLmxlbmd0aDtcbiAgICB0aGlzLl9hbGl2ZUNvdW50ID0gbGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoICYmIHRoaXMuX2FjdGl2ZTsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9uQW55KHRoaXMuXyRoYW5kbGVyc1tpXSk7XG4gICAgfVxuICB9LFxuICBfb25EZWFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3NvdXJjZXNbaV0ub2ZmQW55KHRoaXMuXyRoYW5kbGVyc1tpXSk7XG4gICAgfVxuICB9LFxuICBfZW1pdDogZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkodGhpcy5fYnVmZmVycy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fYnVmZmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gdGhpcy5fYnVmZmVyc1tpXS5zaGlmdCgpO1xuICAgIH1cbiAgICB2YXIgY29tYmluYXRvciA9IHRoaXMuX2NvbWJpbmF0b3I7XG4gICAgdGhpcy5fZW1pdFZhbHVlKGNvbWJpbmF0b3IodmFsdWVzKSk7XG4gIH0sXG4gIF9pc0Z1bGw6IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2J1ZmZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9idWZmZXJzW2ldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBfaGFuZGxlQW55OiBmdW5jdGlvbiAoaSwgZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gVkFMVUUpIHtcbiAgICAgIHRoaXMuX2J1ZmZlcnNbaV0ucHVzaChldmVudC52YWx1ZSk7XG4gICAgICBpZiAodGhpcy5faXNGdWxsKCkpIHtcbiAgICAgICAgdGhpcy5fZW1pdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gRVJST1IpIHtcbiAgICAgIHRoaXMuX2VtaXRFcnJvcihldmVudC52YWx1ZSk7XG4gICAgfVxuICAgIGlmIChldmVudC50eXBlID09PSBFTkQpIHtcbiAgICAgIHRoaXMuX2FsaXZlQ291bnQtLTtcbiAgICAgIGlmICh0aGlzLl9hbGl2ZUNvdW50ID09PSAwKSB7XG4gICAgICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc291cmNlcyA9IG51bGw7XG4gICAgdGhpcy5fYnVmZmVycyA9IG51bGw7XG4gICAgdGhpcy5fY29tYmluYXRvciA9IG51bGw7XG4gICAgdGhpcy5fJGhhbmRsZXJzID0gbnVsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHppcChvYnNlcnZhYmxlcywgY29tYmluYXRvciAvKiBGdW5jdGlvbiB8IGZhbHNleSAqLykge1xuICByZXR1cm4gb2JzZXJ2YWJsZXMubGVuZ3RoID09PSAwID8gbmV2ZXIoKSA6IG5ldyBaaXAob2JzZXJ2YWJsZXMsIGNvbWJpbmF0b3IpO1xufVxuXG52YXIgaWQkOCA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gQWJzdHJhY3RQb29sKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIF9yZWYkcXVldWVMaW0gPSBfcmVmLnF1ZXVlTGltLFxuICAgICAgcXVldWVMaW0gPSBfcmVmJHF1ZXVlTGltID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRxdWV1ZUxpbSxcbiAgICAgIF9yZWYkY29uY3VyTGltID0gX3JlZi5jb25jdXJMaW0sXG4gICAgICBjb25jdXJMaW0gPSBfcmVmJGNvbmN1ckxpbSA9PT0gdW5kZWZpbmVkID8gLTEgOiBfcmVmJGNvbmN1ckxpbSxcbiAgICAgIF9yZWYkZHJvcCA9IF9yZWYuZHJvcCxcbiAgICAgIGRyb3AgPSBfcmVmJGRyb3AgPT09IHVuZGVmaW5lZCA/ICduZXcnIDogX3JlZiRkcm9wO1xuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuX3F1ZXVlTGltID0gcXVldWVMaW0gPCAwID8gLTEgOiBxdWV1ZUxpbTtcbiAgdGhpcy5fY29uY3VyTGltID0gY29uY3VyTGltIDwgMCA/IC0xIDogY29uY3VyTGltO1xuICB0aGlzLl9kcm9wID0gZHJvcDtcbiAgdGhpcy5fcXVldWUgPSBbXTtcbiAgdGhpcy5fY3VyU291cmNlcyA9IFtdO1xuICB0aGlzLl8kaGFuZGxlU3ViQW55ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIF90aGlzLl9oYW5kbGVTdWJBbnkoZXZlbnQpO1xuICB9O1xuICB0aGlzLl8kZW5kSGFuZGxlcnMgPSBbXTtcbiAgdGhpcy5fY3VycmVudGx5QWRkaW5nID0gbnVsbDtcblxuICBpZiAodGhpcy5fY29uY3VyTGltID09PSAwKSB7XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59XG5cbmluaGVyaXQoQWJzdHJhY3RQb29sLCBTdHJlYW0sIHtcbiAgX25hbWU6ICdhYnN0cmFjdFBvb2wnLFxuXG4gIF9hZGQ6IGZ1bmN0aW9uIChvYmosIHRvT2JzIC8qIEZ1bmN0aW9uIHwgZmFsc2V5ICovKSB7XG4gICAgdG9PYnMgPSB0b09icyB8fCBpZCQ4O1xuICAgIGlmICh0aGlzLl9jb25jdXJMaW0gPT09IC0xIHx8IHRoaXMuX2N1clNvdXJjZXMubGVuZ3RoIDwgdGhpcy5fY29uY3VyTGltKSB7XG4gICAgICB0aGlzLl9hZGRUb0N1cih0b09icyhvYmopKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3F1ZXVlTGltID09PSAtMSB8fCB0aGlzLl9xdWV1ZS5sZW5ndGggPCB0aGlzLl9xdWV1ZUxpbSkge1xuICAgICAgICB0aGlzLl9hZGRUb1F1ZXVlKHRvT2JzKG9iaikpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9kcm9wID09PSAnb2xkJykge1xuICAgICAgICB0aGlzLl9yZW1vdmVPbGRlc3QoKTtcbiAgICAgICAgdGhpcy5fYWRkKG9iaiwgdG9PYnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2FkZEFsbDogZnVuY3Rpb24gKG9ic3MpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGZvckVhY2gob2JzcywgZnVuY3Rpb24gKG9icykge1xuICAgICAgcmV0dXJuIF90aGlzMi5fYWRkKG9icyk7XG4gICAgfSk7XG4gIH0sXG4gIF9yZW1vdmU6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICBpZiAodGhpcy5fcmVtb3ZlQ3VyKG9icykgPT09IC0xKSB7XG4gICAgICB0aGlzLl9yZW1vdmVRdWV1ZShvYnMpO1xuICAgIH1cbiAgfSxcbiAgX2FkZFRvUXVldWU6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICB0aGlzLl9xdWV1ZSA9IGNvbmNhdCh0aGlzLl9xdWV1ZSwgW29ic10pO1xuICB9LFxuICBfYWRkVG9DdXI6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICAvLyBIQUNLOlxuICAgICAgLy9cbiAgICAgIC8vIFdlIGhhdmUgdHdvIG9wdGltaXphdGlvbnMgZm9yIGNhc2VzIHdoZW4gYG9ic2AgaXMgZW5kZWQuIFdlIGRvbid0IHdhbnRcbiAgICAgIC8vIHRvIGFkZCBzdWNoIG9ic2VydmFibGUgdG8gdGhlIGxpc3QsIGJ1dCBvbmx5IHdhbnQgdG8gZW1pdCBldmVudHNcbiAgICAgIC8vIGZyb20gaXQgKGlmIGl0IGhhcyBzb21lKS5cbiAgICAgIC8vXG4gICAgICAvLyBJbnN0ZWFkIG9mIHRoaXMgaGFja3MsIHdlIGNvdWxkIGp1c3QgZGlkIGZvbGxvd2luZyxcbiAgICAgIC8vIGJ1dCBpdCB3b3VsZCBiZSA1LTggdGltZXMgc2xvd2VyOlxuICAgICAgLy9cbiAgICAgIC8vICAgICB0aGlzLl9jdXJTb3VyY2VzID0gY29uY2F0KHRoaXMuX2N1clNvdXJjZXMsIFtvYnNdKTtcbiAgICAgIC8vICAgICB0aGlzLl9zdWJzY3JpYmUob2JzKTtcbiAgICAgIC8vXG5cbiAgICAgIC8vICMxXG4gICAgICAvLyBUaGlzIG9uZSBmb3IgY2FzZXMgd2hlbiBgb2JzYCBhbHJlYWR5IGVuZGVkXG4gICAgICAvLyBlLmcuLCBLZWZpci5jb25zdGFudCgpIG9yIEtlZmlyLm5ldmVyKClcbiAgICAgIGlmICghb2JzLl9hbGl2ZSkge1xuICAgICAgICBpZiAob2JzLl9jdXJyZW50RXZlbnQpIHtcbiAgICAgICAgICB0aGlzLl9lbWl0KG9icy5fY3VycmVudEV2ZW50LnR5cGUsIG9icy5fY3VycmVudEV2ZW50LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vICMyXG4gICAgICAvLyBUaGlzIG9uZSBpcyBmb3IgY2FzZXMgd2hlbiBgb2JzYCBnb2luZyB0byBlbmQgc3luY2hyb25vdXNseSBvblxuICAgICAgLy8gZmlyc3Qgc3Vic2NyaWJlciBlLmcuLCBLZWZpci5zdHJlYW0oZW0gPT4ge2VtLmVtaXQoMSk7IGVtLmVuZCgpfSlcbiAgICAgIHRoaXMuX2N1cnJlbnRseUFkZGluZyA9IG9icztcbiAgICAgIG9icy5vbkFueSh0aGlzLl8kaGFuZGxlU3ViQW55KTtcbiAgICAgIHRoaXMuX2N1cnJlbnRseUFkZGluZyA9IG51bGw7XG4gICAgICBpZiAob2JzLl9hbGl2ZSkge1xuICAgICAgICB0aGlzLl9jdXJTb3VyY2VzID0gY29uY2F0KHRoaXMuX2N1clNvdXJjZXMsIFtvYnNdKTtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuX3N1YlRvRW5kKG9icyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VyU291cmNlcyA9IGNvbmNhdCh0aGlzLl9jdXJTb3VyY2VzLCBbb2JzXSk7XG4gICAgfVxuICB9LFxuICBfc3ViVG9FbmQ6IGZ1bmN0aW9uIChvYnMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczMuX3JlbW92ZUN1cihvYnMpO1xuICAgIH07XG4gICAgdGhpcy5fJGVuZEhhbmRsZXJzLnB1c2goeyBvYnM6IG9icywgaGFuZGxlcjogb25FbmQgfSk7XG4gICAgb2JzLm9uRW5kKG9uRW5kKTtcbiAgfSxcbiAgX3N1YnNjcmliZTogZnVuY3Rpb24gKG9icykge1xuICAgIG9icy5vbkFueSh0aGlzLl8kaGFuZGxlU3ViQW55KTtcblxuICAgIC8vIGl0IGNhbiBiZWNvbWUgaW5hY3RpdmUgaW4gcmVzcG9uY2Ugb2Ygc3Vic2NyaWJpbmcgdG8gYG9icy5vbkFueWAgYWJvdmVcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9zdWJUb0VuZChvYnMpO1xuICAgIH1cbiAgfSxcbiAgX3Vuc3Vic2NyaWJlOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgb2JzLm9mZkFueSh0aGlzLl8kaGFuZGxlU3ViQW55KTtcblxuICAgIHZhciBvbkVuZEkgPSBmaW5kQnlQcmVkKHRoaXMuXyRlbmRIYW5kbGVycywgZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iai5vYnMgPT09IG9icztcbiAgICB9KTtcbiAgICBpZiAob25FbmRJICE9PSAtMSkge1xuICAgICAgb2JzLm9mZkVuZCh0aGlzLl8kZW5kSGFuZGxlcnNbb25FbmRJXS5oYW5kbGVyKTtcbiAgICAgIHRoaXMuXyRlbmRIYW5kbGVycy5zcGxpY2Uob25FbmRJLCAxKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVTdWJBbnk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSBWQUxVRSkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IEVSUk9SKSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoZXZlbnQudmFsdWUpO1xuICAgIH1cbiAgfSxcbiAgX3JlbW92ZVF1ZXVlOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgdmFyIGluZGV4ID0gZmluZCh0aGlzLl9xdWV1ZSwgb2JzKTtcbiAgICB0aGlzLl9xdWV1ZSA9IHJlbW92ZSh0aGlzLl9xdWV1ZSwgaW5kZXgpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfSxcbiAgX3JlbW92ZUN1cjogZnVuY3Rpb24gKG9icykge1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKG9icyk7XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGZpbmQodGhpcy5fY3VyU291cmNlcywgb2JzKTtcbiAgICB0aGlzLl9jdXJTb3VyY2VzID0gcmVtb3ZlKHRoaXMuX2N1clNvdXJjZXMsIGluZGV4KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuX3B1bGxRdWV1ZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJTb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9vbkVtcHR5KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfSxcbiAgX3JlbW92ZU9sZGVzdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3JlbW92ZUN1cih0aGlzLl9jdXJTb3VyY2VzWzBdKTtcbiAgfSxcbiAgX3B1bGxRdWV1ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9xdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuX3F1ZXVlID0gY2xvbmVBcnJheSh0aGlzLl9xdWV1ZSk7XG4gICAgICB0aGlzLl9hZGRUb0N1cih0aGlzLl9xdWV1ZS5zaGlmdCgpKTtcbiAgICB9XG4gIH0sXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgc291cmNlcyA9IHRoaXMuX2N1clNvdXJjZXM7IGkgPCBzb3VyY2VzLmxlbmd0aCAmJiB0aGlzLl9hY3RpdmU7IGkrKykge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlKHNvdXJjZXNbaV0pO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHNvdXJjZXMgPSB0aGlzLl9jdXJTb3VyY2VzOyBpIDwgc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoc291cmNlc1tpXSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jdXJyZW50bHlBZGRpbmcgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKHRoaXMuX2N1cnJlbnRseUFkZGluZyk7XG4gICAgfVxuICB9LFxuICBfaXNFbXB0eTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJTb3VyY2VzLmxlbmd0aCA9PT0gMDtcbiAgfSxcbiAgX29uRW1wdHk6IGZ1bmN0aW9uICgpIHt9LFxuICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICBTdHJlYW0ucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3F1ZXVlID0gbnVsbDtcbiAgICB0aGlzLl9jdXJTb3VyY2VzID0gbnVsbDtcbiAgICB0aGlzLl8kaGFuZGxlU3ViQW55ID0gbnVsbDtcbiAgICB0aGlzLl8kZW5kSGFuZGxlcnMgPSBudWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gTWVyZ2Uoc291cmNlcykge1xuICBBYnN0cmFjdFBvb2wuY2FsbCh0aGlzKTtcbiAgdGhpcy5fYWRkQWxsKHNvdXJjZXMpO1xuICB0aGlzLl9pbml0aWFsaXNlZCA9IHRydWU7XG59XG5cbmluaGVyaXQoTWVyZ2UsIEFic3RyYWN0UG9vbCwge1xuICBfbmFtZTogJ21lcmdlJyxcblxuICBfb25FbXB0eTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXNlZCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1lcmdlKG9ic2VydmFibGVzKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlcy5sZW5ndGggPT09IDAgPyBuZXZlcigpIDogbmV3IE1lcmdlKG9ic2VydmFibGVzKTtcbn1cblxuZnVuY3Rpb24gUyQzMyhnZW5lcmF0b3IpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbiAgdGhpcy5fZ2VuZXJhdG9yID0gZ2VuZXJhdG9yO1xuICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICB0aGlzLl9pbkxvb3AgPSBmYWxzZTtcbiAgdGhpcy5faXRlcmF0aW9uID0gMDtcbiAgdGhpcy5fJGhhbmRsZUFueSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBfdGhpcy5faGFuZGxlQW55KGV2ZW50KTtcbiAgfTtcbn1cblxuaW5oZXJpdChTJDMzLCBTdHJlYW0sIHtcbiAgX25hbWU6ICdyZXBlYXQnLFxuXG4gIF9oYW5kbGVBbnk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSBFTkQpIHtcbiAgICAgIHRoaXMuX3NvdXJjZSA9IG51bGw7XG4gICAgICB0aGlzLl9nZXRTb3VyY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdChldmVudC50eXBlLCBldmVudC52YWx1ZSk7XG4gICAgfVxuICB9LFxuICBfZ2V0U291cmNlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9pbkxvb3ApIHtcbiAgICAgIHRoaXMuX2luTG9vcCA9IHRydWU7XG4gICAgICB2YXIgZ2VuZXJhdG9yID0gdGhpcy5fZ2VuZXJhdG9yO1xuICAgICAgd2hpbGUgKHRoaXMuX3NvdXJjZSA9PT0gbnVsbCAmJiB0aGlzLl9hbGl2ZSAmJiB0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fc291cmNlID0gZ2VuZXJhdG9yKHRoaXMuX2l0ZXJhdGlvbisrKTtcbiAgICAgICAgaWYgKHRoaXMuX3NvdXJjZSkge1xuICAgICAgICAgIHRoaXMuX3NvdXJjZS5vbkFueSh0aGlzLl8kaGFuZGxlQW55KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2luTG9vcCA9IGZhbHNlO1xuICAgIH1cbiAgfSxcbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9zb3VyY2UpIHtcbiAgICAgIHRoaXMuX3NvdXJjZS5vbkFueSh0aGlzLl8kaGFuZGxlQW55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ2V0U291cmNlKCk7XG4gICAgfVxuICB9LFxuICBfb25EZWFjdGl2YXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fc291cmNlKSB7XG4gICAgICB0aGlzLl9zb3VyY2Uub2ZmQW55KHRoaXMuXyRoYW5kbGVBbnkpO1xuICAgIH1cbiAgfSxcbiAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgU3RyZWFtLnByb3RvdHlwZS5fY2xlYXIuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9nZW5lcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX3NvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5fJGhhbmRsZUFueSA9IG51bGw7XG4gIH1cbn0pO1xuXG52YXIgcmVwZWF0ID0gZnVuY3Rpb24gKGdlbmVyYXRvcikge1xuICByZXR1cm4gbmV3IFMkMzMoZ2VuZXJhdG9yKTtcbn07XG5cbmZ1bmN0aW9uIGNvbmNhdCQxKG9ic2VydmFibGVzKSB7XG4gIHJldHVybiByZXBlYXQoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVzLmxlbmd0aCA+IGluZGV4ID8gb2JzZXJ2YWJsZXNbaW5kZXhdIDogZmFsc2U7XG4gIH0pLnNldE5hbWUoJ2NvbmNhdCcpO1xufVxuXG5mdW5jdGlvbiBQb29sKCkge1xuICBBYnN0cmFjdFBvb2wuY2FsbCh0aGlzKTtcbn1cblxuaW5oZXJpdChQb29sLCBBYnN0cmFjdFBvb2wsIHtcbiAgX25hbWU6ICdwb29sJyxcblxuICBwbHVnOiBmdW5jdGlvbiAob2JzKSB7XG4gICAgdGhpcy5fYWRkKG9icyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHVucGx1ZzogZnVuY3Rpb24gKG9icykge1xuICAgIHRoaXMuX3JlbW92ZShvYnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gRmxhdE1hcChzb3VyY2UsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgQWJzdHJhY3RQb29sLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gIHRoaXMuX3NvdXJjZSA9IHNvdXJjZTtcbiAgdGhpcy5fZm4gPSBmbjtcbiAgdGhpcy5fbWFpbkVuZGVkID0gZmFsc2U7XG4gIHRoaXMuX2xhc3RDdXJyZW50ID0gbnVsbDtcbiAgdGhpcy5fJGhhbmRsZU1haW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gX3RoaXMuX2hhbmRsZU1haW4oZXZlbnQpO1xuICB9O1xufVxuXG5pbmhlcml0KEZsYXRNYXAsIEFic3RyYWN0UG9vbCwge1xuICBfb25BY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgQWJzdHJhY3RQb29sLnByb3RvdHlwZS5fb25BY3RpdmF0aW9uLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fc291cmNlLm9uQW55KHRoaXMuXyRoYW5kbGVNYWluKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIEFic3RyYWN0UG9vbC5wcm90b3R5cGUuX29uRGVhY3RpdmF0aW9uLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc291cmNlLm9mZkFueSh0aGlzLl8kaGFuZGxlTWFpbik7XG4gICAgdGhpcy5faGFkTm9FdlNpbmNlRGVhY3QgPSB0cnVlO1xuICB9LFxuICBfaGFuZGxlTWFpbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFZBTFVFKSB7XG4gICAgICAvLyBJcyBsYXRlc3QgdmFsdWUgYmVmb3JlIGRlYWN0aXZhdGlvbiBzdXJ2aXZlZCwgYW5kIG5vdyBpcyAnY3VycmVudCcgb24gdGhpcyBhY3RpdmF0aW9uP1xuICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBoYW5kbGUgc3VjaCB2YWx1ZXMsIHRvIHByZXZlbnQgdG8gY29uc3RhbnRseSBhZGRcbiAgICAgIC8vIHNhbWUgb2JzZXJ2YWxlIG9uIGVhY2ggYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gd2hlbiBvdXIgbWFpbiBzb3VyY2VcbiAgICAgIC8vIGlzIGEgYEtlZmlyLmNvbmF0YW50KClgIGZvciBleGFtcGxlLlxuICAgICAgdmFyIHNhbWVDdXJyID0gdGhpcy5fYWN0aXZhdGluZyAmJiB0aGlzLl9oYWROb0V2U2luY2VEZWFjdCAmJiB0aGlzLl9sYXN0Q3VycmVudCA9PT0gZXZlbnQudmFsdWU7XG4gICAgICBpZiAoIXNhbWVDdXJyKSB7XG4gICAgICAgIHRoaXMuX2FkZChldmVudC52YWx1ZSwgdGhpcy5fZm4pO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdEN1cnJlbnQgPSBldmVudC52YWx1ZTtcbiAgICAgIHRoaXMuX2hhZE5vRXZTaW5jZURlYWN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IEVSUk9SKSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoZXZlbnQudmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSBFTkQpIHtcbiAgICAgIGlmICh0aGlzLl9pc0VtcHR5KCkpIHtcbiAgICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFpbkVuZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9vbkVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX21haW5FbmRlZCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfSxcbiAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgQWJzdHJhY3RQb29sLnByb3RvdHlwZS5fY2xlYXIuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuX2xhc3RDdXJyZW50ID0gbnVsbDtcbiAgICB0aGlzLl8kaGFuZGxlTWFpbiA9IG51bGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBGbGF0TWFwRXJyb3JzKHNvdXJjZSwgZm4pIHtcbiAgRmxhdE1hcC5jYWxsKHRoaXMsIHNvdXJjZSwgZm4pO1xufVxuXG5pbmhlcml0KEZsYXRNYXBFcnJvcnMsIEZsYXRNYXAsIHtcbiAgLy8gU2FtZSBhcyBpbiBGbGF0TWFwLCBvbmx5IFZBTFVFL0VSUk9SIGZsaXBwZWRcbiAgX2hhbmRsZU1haW46IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSBFUlJPUikge1xuICAgICAgdmFyIHNhbWVDdXJyID0gdGhpcy5fYWN0aXZhdGluZyAmJiB0aGlzLl9oYWROb0V2U2luY2VEZWFjdCAmJiB0aGlzLl9sYXN0Q3VycmVudCA9PT0gZXZlbnQudmFsdWU7XG4gICAgICBpZiAoIXNhbWVDdXJyKSB7XG4gICAgICAgIHRoaXMuX2FkZChldmVudC52YWx1ZSwgdGhpcy5fZm4pO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdEN1cnJlbnQgPSBldmVudC52YWx1ZTtcbiAgICAgIHRoaXMuX2hhZE5vRXZTaW5jZURlYWN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFZBTFVFKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSBFTkQpIHtcbiAgICAgIGlmICh0aGlzLl9pc0VtcHR5KCkpIHtcbiAgICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFpbkVuZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVDb25zdHJ1Y3RvciQxKEJhc2VDbGFzcywgbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gQW5vbnltb3VzT2JzZXJ2YWJsZShwcmltYXJ5LCBzZWNvbmRhcnksIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgQmFzZUNsYXNzLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fcHJpbWFyeSA9IHByaW1hcnk7XG4gICAgdGhpcy5fc2Vjb25kYXJ5ID0gc2Vjb25kYXJ5O1xuICAgIHRoaXMuX25hbWUgPSBwcmltYXJ5Ll9uYW1lICsgJy4nICsgbmFtZTtcbiAgICB0aGlzLl9sYXN0U2Vjb25kYXJ5ID0gTk9USElORztcbiAgICB0aGlzLl8kaGFuZGxlU2Vjb25kYXJ5QW55ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMuX2hhbmRsZVNlY29uZGFyeUFueShldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLl8kaGFuZGxlUHJpbWFyeUFueSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLl9oYW5kbGVQcmltYXJ5QW55KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuX2luaXQob3B0aW9ucyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzTWV0aG9kcyQxKEJhc2VDbGFzcykge1xuICByZXR1cm4ge1xuICAgIF9pbml0OiBmdW5jdGlvbiAoKSB7fSxcbiAgICBfZnJlZTogZnVuY3Rpb24gKCkge30sXG4gICAgX2hhbmRsZVByaW1hcnlWYWx1ZTogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9LFxuICAgIF9oYW5kbGVQcmltYXJ5RXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgfSxcbiAgICBfaGFuZGxlUHJpbWFyeUVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH0sXG4gICAgX2hhbmRsZVNlY29uZGFyeVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fbGFzdFNlY29uZGFyeSA9IHg7XG4gICAgfSxcbiAgICBfaGFuZGxlU2Vjb25kYXJ5RXJyb3I6IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgfSxcbiAgICBfaGFuZGxlU2Vjb25kYXJ5RW5kOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBfaGFuZGxlUHJpbWFyeUFueTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSBWQUxVRTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlUHJpbWFyeVZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICAgICAgY2FzZSBFUlJPUjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlUHJpbWFyeUVycm9yKGV2ZW50LnZhbHVlKTtcbiAgICAgICAgY2FzZSBFTkQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVByaW1hcnlFbmQoZXZlbnQudmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgX2hhbmRsZVNlY29uZGFyeUFueTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSBWQUxVRTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlU2Vjb25kYXJ5VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgICAgICBjYXNlIEVSUk9SOlxuICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVTZWNvbmRhcnlFcnJvcihldmVudC52YWx1ZSk7XG4gICAgICAgIGNhc2UgRU5EOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVNlY29uZGFyeUVuZChldmVudC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlU2Vjb25kYXJ5KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBfcmVtb3ZlU2Vjb25kYXJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5fc2Vjb25kYXJ5ICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3NlY29uZGFyeS5vZmZBbnkodGhpcy5fJGhhbmRsZVNlY29uZGFyeUFueSk7XG4gICAgICAgIHRoaXMuXyRoYW5kbGVTZWNvbmRhcnlBbnkgPSBudWxsO1xuICAgICAgICB0aGlzLl9zZWNvbmRhcnkgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX3NlY29uZGFyeSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9zZWNvbmRhcnkub25BbnkodGhpcy5fJGhhbmRsZVNlY29uZGFyeUFueSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX3ByaW1hcnkub25BbnkodGhpcy5fJGhhbmRsZVByaW1hcnlBbnkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5fc2Vjb25kYXJ5ICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3NlY29uZGFyeS5vZmZBbnkodGhpcy5fJGhhbmRsZVNlY29uZGFyeUFueSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wcmltYXJ5Lm9mZkFueSh0aGlzLl8kaGFuZGxlUHJpbWFyeUFueSk7XG4gICAgfSxcbiAgICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIEJhc2VDbGFzcy5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLl9wcmltYXJ5ID0gbnVsbDtcbiAgICAgIHRoaXMuX3NlY29uZGFyeSA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0U2Vjb25kYXJ5ID0gbnVsbDtcbiAgICAgIHRoaXMuXyRoYW5kbGVTZWNvbmRhcnlBbnkgPSBudWxsO1xuICAgICAgdGhpcy5fJGhhbmRsZVByaW1hcnlBbnkgPSBudWxsO1xuICAgICAgdGhpcy5fZnJlZSgpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyZWFtJDEobmFtZSwgbWl4aW4pIHtcbiAgdmFyIFMgPSBjcmVhdGVDb25zdHJ1Y3RvciQxKFN0cmVhbSwgbmFtZSk7XG4gIGluaGVyaXQoUywgU3RyZWFtLCBjcmVhdGVDbGFzc01ldGhvZHMkMShTdHJlYW0pLCBtaXhpbik7XG4gIHJldHVybiBTO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eSQxKG5hbWUsIG1peGluKSB7XG4gIHZhciBQID0gY3JlYXRlQ29uc3RydWN0b3IkMShQcm9wZXJ0eSwgbmFtZSk7XG4gIGluaGVyaXQoUCwgUHJvcGVydHksIGNyZWF0ZUNsYXNzTWV0aG9kcyQxKFByb3BlcnR5KSwgbWl4aW4pO1xuICByZXR1cm4gUDtcbn1cblxudmFyIG1peGluJDI2ID0ge1xuICBfaGFuZGxlUHJpbWFyeVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9sYXN0U2Vjb25kYXJ5ICE9PSBOT1RISU5HICYmIHRoaXMuX2xhc3RTZWNvbmRhcnkpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVTZWNvbmRhcnlFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fbGFzdFNlY29uZGFyeSA9PT0gTk9USElORyB8fCAhdGhpcy5fbGFzdFNlY29uZGFyeSkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMzQgPSBjcmVhdGVTdHJlYW0kMSgnZmlsdGVyQnknLCBtaXhpbiQyNik7XG52YXIgUCQyOSA9IGNyZWF0ZVByb3BlcnR5JDEoJ2ZpbHRlckJ5JywgbWl4aW4kMjYpO1xuXG5mdW5jdGlvbiBmaWx0ZXJCeShwcmltYXJ5LCBzZWNvbmRhcnkpIHtcbiAgcmV0dXJuIG5ldyAocHJpbWFyeS5fb2ZTYW1lVHlwZShTJDM0LCBQJDI5KSkocHJpbWFyeSwgc2Vjb25kYXJ5KTtcbn1cblxudmFyIGlkMiA9IGZ1bmN0aW9uIChfLCB4KSB7XG4gIHJldHVybiB4O1xufTtcblxuZnVuY3Rpb24gc2FtcGxlZEJ5KHBhc3NpdmUsIGFjdGl2ZSwgY29tYmluYXRvcikge1xuICB2YXIgX2NvbWJpbmF0b3IgPSBjb21iaW5hdG9yID8gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gY29tYmluYXRvcihiLCBhKTtcbiAgfSA6IGlkMjtcbiAgcmV0dXJuIGNvbWJpbmUoW2FjdGl2ZV0sIFtwYXNzaXZlXSwgX2NvbWJpbmF0b3IpLnNldE5hbWUocGFzc2l2ZSwgJ3NhbXBsZWRCeScpO1xufVxuXG52YXIgbWl4aW4kMjcgPSB7XG4gIF9oYW5kbGVQcmltYXJ5VmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgaWYgKHRoaXMuX2xhc3RTZWNvbmRhcnkgIT09IE5PVEhJTkcpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh4KTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVTZWNvbmRhcnlFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fbGFzdFNlY29uZGFyeSA9PT0gTk9USElORykge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkMzUgPSBjcmVhdGVTdHJlYW0kMSgnc2tpcFVudGlsQnknLCBtaXhpbiQyNyk7XG52YXIgUCQzMCA9IGNyZWF0ZVByb3BlcnR5JDEoJ3NraXBVbnRpbEJ5JywgbWl4aW4kMjcpO1xuXG5mdW5jdGlvbiBza2lwVW50aWxCeShwcmltYXJ5LCBzZWNvbmRhcnkpIHtcbiAgcmV0dXJuIG5ldyAocHJpbWFyeS5fb2ZTYW1lVHlwZShTJDM1LCBQJDMwKSkocHJpbWFyeSwgc2Vjb25kYXJ5KTtcbn1cblxudmFyIG1peGluJDI4ID0ge1xuICBfaGFuZGxlU2Vjb25kYXJ5VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH1cbn07XG5cbnZhciBTJDM2ID0gY3JlYXRlU3RyZWFtJDEoJ3Rha2VVbnRpbEJ5JywgbWl4aW4kMjgpO1xudmFyIFAkMzEgPSBjcmVhdGVQcm9wZXJ0eSQxKCd0YWtlVW50aWxCeScsIG1peGluJDI4KTtcblxuZnVuY3Rpb24gdGFrZVVudGlsQnkocHJpbWFyeSwgc2Vjb25kYXJ5KSB7XG4gIHJldHVybiBuZXcgKHByaW1hcnkuX29mU2FtZVR5cGUoUyQzNiwgUCQzMSkpKHByaW1hcnksIHNlY29uZGFyeSk7XG59XG5cbnZhciBtaXhpbiQyOSA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIF9yZWYkZmx1c2hPbkVuZCA9IF9yZWYuZmx1c2hPbkVuZCxcbiAgICAgICAgZmx1c2hPbkVuZCA9IF9yZWYkZmx1c2hPbkVuZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkZmx1c2hPbkVuZDtcblxuICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgICB0aGlzLl9mbHVzaE9uRW5kID0gZmx1c2hPbkVuZDtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9idWZmID0gbnVsbDtcbiAgfSxcbiAgX2ZsdXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmYgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZSh0aGlzLl9idWZmKTtcbiAgICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVQcmltYXJ5RW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2ZsdXNoT25FbmQpIHtcbiAgICAgIHRoaXMuX2ZsdXNoKCk7XG4gICAgfVxuICAgIHRoaXMuX2VtaXRFbmQoKTtcbiAgfSxcbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3ByaW1hcnkub25BbnkodGhpcy5fJGhhbmRsZVByaW1hcnlBbnkpO1xuICAgIGlmICh0aGlzLl9hbGl2ZSAmJiB0aGlzLl9zZWNvbmRhcnkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlY29uZGFyeS5vbkFueSh0aGlzLl8kaGFuZGxlU2Vjb25kYXJ5QW55KTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVQcmltYXJ5VmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fYnVmZi5wdXNoKHgpO1xuICB9LFxuICBfaGFuZGxlU2Vjb25kYXJ5VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbHVzaCgpO1xuICB9LFxuICBfaGFuZGxlU2Vjb25kYXJ5RW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9mbHVzaE9uRW5kKSB7XG4gICAgICB0aGlzLl9lbWl0RW5kKCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQzNyA9IGNyZWF0ZVN0cmVhbSQxKCdidWZmZXJCeScsIG1peGluJDI5KTtcbnZhciBQJDMyID0gY3JlYXRlUHJvcGVydHkkMSgnYnVmZmVyQnknLCBtaXhpbiQyOSk7XG5cbmZ1bmN0aW9uIGJ1ZmZlckJ5KHByaW1hcnksIHNlY29uZGFyeSwgb3B0aW9ucyAvKiBvcHRpb25hbCAqLykge1xuICByZXR1cm4gbmV3IChwcmltYXJ5Ll9vZlNhbWVUeXBlKFMkMzcsIFAkMzIpKShwcmltYXJ5LCBzZWNvbmRhcnksIG9wdGlvbnMpO1xufVxuXG52YXIgbWl4aW4kMzAgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJGZsdXNoT25FbmQgPSBfcmVmLmZsdXNoT25FbmQsXG4gICAgICAgIGZsdXNoT25FbmQgPSBfcmVmJGZsdXNoT25FbmQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGZsdXNoT25FbmQsXG4gICAgICAgIF9yZWYkZmx1c2hPbkNoYW5nZSA9IF9yZWYuZmx1c2hPbkNoYW5nZSxcbiAgICAgICAgZmx1c2hPbkNoYW5nZSA9IF9yZWYkZmx1c2hPbkNoYW5nZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGZsdXNoT25DaGFuZ2U7XG5cbiAgICB0aGlzLl9idWZmID0gW107XG4gICAgdGhpcy5fZmx1c2hPbkVuZCA9IGZsdXNoT25FbmQ7XG4gICAgdGhpcy5fZmx1c2hPbkNoYW5nZSA9IGZsdXNoT25DaGFuZ2U7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYnVmZiA9IG51bGw7XG4gIH0sXG4gIF9mbHVzaDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9idWZmICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUodGhpcy5fYnVmZik7XG4gICAgICB0aGlzLl9idWZmID0gW107XG4gICAgfVxuICB9LFxuICBfaGFuZGxlUHJpbWFyeUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9mbHVzaE9uRW5kKSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RW5kKCk7XG4gIH0sXG4gIF9oYW5kbGVQcmltYXJ5VmFsdWU6IGZ1bmN0aW9uICh4KSB7XG4gICAgdGhpcy5fYnVmZi5wdXNoKHgpO1xuICAgIGlmICh0aGlzLl9sYXN0U2Vjb25kYXJ5ICE9PSBOT1RISU5HICYmICF0aGlzLl9sYXN0U2Vjb25kYXJ5KSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVNlY29uZGFyeUVuZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fZmx1c2hPbkVuZCAmJiAodGhpcy5fbGFzdFNlY29uZGFyeSA9PT0gTk9USElORyB8fCB0aGlzLl9sYXN0U2Vjb25kYXJ5KSkge1xuICAgICAgdGhpcy5fZW1pdEVuZCgpO1xuICAgIH1cbiAgfSxcbiAgX2hhbmRsZVNlY29uZGFyeVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0aGlzLl9mbHVzaE9uQ2hhbmdlICYmICF4KSB7XG4gICAgICB0aGlzLl9mbHVzaCgpO1xuICAgIH1cblxuICAgIC8vIGZyb20gZGVmYXVsdCBfaGFuZGxlU2Vjb25kYXJ5VmFsdWVcbiAgICB0aGlzLl9sYXN0U2Vjb25kYXJ5ID0geDtcbiAgfVxufTtcblxudmFyIFMkMzggPSBjcmVhdGVTdHJlYW0kMSgnYnVmZmVyV2hpbGVCeScsIG1peGluJDMwKTtcbnZhciBQJDMzID0gY3JlYXRlUHJvcGVydHkkMSgnYnVmZmVyV2hpbGVCeScsIG1peGluJDMwKTtcblxuZnVuY3Rpb24gYnVmZmVyV2hpbGVCeShwcmltYXJ5LCBzZWNvbmRhcnksIG9wdGlvbnMgLyogb3B0aW9uYWwgKi8pIHtcbiAgcmV0dXJuIG5ldyAocHJpbWFyeS5fb2ZTYW1lVHlwZShTJDM4LCBQJDMzKSkocHJpbWFyeSwgc2Vjb25kYXJ5LCBvcHRpb25zKTtcbn1cblxudmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG52YXIgdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBhd2FpdGluZyhhLCBiKSB7XG4gIHZhciByZXN1bHQgPSBtZXJnZShbbWFwJDEoYSwgdCksIG1hcCQxKGIsIGYpXSk7XG4gIHJlc3VsdCA9IHNraXBEdXBsaWNhdGVzKHJlc3VsdCk7XG4gIHJlc3VsdCA9IHRvUHJvcGVydHkocmVzdWx0LCBmKTtcbiAgcmV0dXJuIHJlc3VsdC5zZXROYW1lKGEsICdhd2FpdGluZycpO1xufVxuXG52YXIgbWl4aW4kMzEgPSB7XG4gIF9pbml0OiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBmbiA9IF9yZWYuZm47XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbiAoeCkge1xuICAgIHZhciBmbiA9IHRoaXMuX2ZuO1xuICAgIHZhciByZXN1bHQgPSBmbih4KTtcbiAgICBpZiAocmVzdWx0LmNvbnZlcnQpIHtcbiAgICAgIHRoaXMuX2VtaXRFcnJvcihyZXN1bHQuZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUoeCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgUyQzOSA9IGNyZWF0ZVN0cmVhbSgndmFsdWVzVG9FcnJvcnMnLCBtaXhpbiQzMSk7XG52YXIgUCQzNCA9IGNyZWF0ZVByb3BlcnR5KCd2YWx1ZXNUb0Vycm9ycycsIG1peGluJDMxKTtcblxudmFyIGRlZkZuID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHsgY29udmVydDogdHJ1ZSwgZXJyb3I6IHggfTtcbn07XG5cbmZ1bmN0aW9uIHZhbHVlc1RvRXJyb3JzKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZkZuO1xuXG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDM5LCBQJDM0KSkob2JzLCB7IGZuOiBmbiB9KTtcbn1cblxudmFyIG1peGluJDMyID0ge1xuICBfaW5pdDogZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZm4gPSBfcmVmLmZuO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVFcnJvcjogZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9mbjtcbiAgICB2YXIgcmVzdWx0ID0gZm4oeCk7XG4gICAgaWYgKHJlc3VsdC5jb252ZXJ0KSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWUocmVzdWx0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW1pdEVycm9yKHgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFMkNDAgPSBjcmVhdGVTdHJlYW0oJ2Vycm9yc1RvVmFsdWVzJywgbWl4aW4kMzIpO1xudmFyIFAkMzUgPSBjcmVhdGVQcm9wZXJ0eSgnZXJyb3JzVG9WYWx1ZXMnLCBtaXhpbiQzMik7XG5cbnZhciBkZWZGbiQxID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHsgY29udmVydDogdHJ1ZSwgdmFsdWU6IHggfTtcbn07XG5cbmZ1bmN0aW9uIGVycm9yc1RvVmFsdWVzKG9icykge1xuICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZkZuJDE7XG5cbiAgcmV0dXJuIG5ldyAob2JzLl9vZlNhbWVUeXBlKFMkNDAsIFAkMzUpKShvYnMsIHsgZm46IGZuIH0pO1xufVxuXG52YXIgbWl4aW4kMzMgPSB7XG4gIF9oYW5kbGVFcnJvcjogZnVuY3Rpb24gKHgpIHtcbiAgICB0aGlzLl9lbWl0RXJyb3IoeCk7XG4gICAgdGhpcy5fZW1pdEVuZCgpO1xuICB9XG59O1xuXG52YXIgUyQ0MSA9IGNyZWF0ZVN0cmVhbSgnZW5kT25FcnJvcicsIG1peGluJDMzKTtcbnZhciBQJDM2ID0gY3JlYXRlUHJvcGVydHkoJ2VuZE9uRXJyb3InLCBtaXhpbiQzMyk7XG5cbmZ1bmN0aW9uIGVuZE9uRXJyb3Iob2JzKSB7XG4gIHJldHVybiBuZXcgKG9icy5fb2ZTYW1lVHlwZShTJDQxLCBQJDM2KSkob2JzKTtcbn1cblxuLy8gQ3JlYXRlIGEgc3RyZWFtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAoKSAtPiBTdHJlYW1cbi8vIChudW1iZXIsIGFueSkgLT4gU3RyZWFtXG4vLyAobnVtYmVyLCBhbnkpIC0+IFN0cmVhbVxuLy8gKG51bWJlciwgQXJyYXk8YW55PikgLT4gU3RyZWFtXG4vLyAobnVtYmVyLCBGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyAobnVtYmVyLCBGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyAoRnVuY3Rpb24pIC0+IFN0cmVhbVxuLy8gKEZ1bmN0aW9uKSAtPiBTdHJlYW1cbi8vIFRhcmdldCA9IHthZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyfXx7YWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyfXx7b24sIG9mZn1cbi8vIChUYXJnZXQsIHN0cmluZywgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChGdW5jdGlvbikgLT4gU3RyZWFtXG4vLyBDcmVhdGUgYSBwcm9wZXJ0eVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKGFueSkgLT4gUHJvcGVydHlcbi8vIChhbnkpIC0+IFByb3BlcnR5XG4vLyBDb252ZXJ0IG9ic2VydmFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAoU3RyZWFtfFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb3BlcnR5ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiB0b1Byb3BlcnR5KHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW18UHJvcGVydHkpIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuY2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNoYW5nZXModGhpcyk7XG59O1xuXG4vLyBJbnRlcm9wZXJhdGlvbiB3aXRoIG90aGVyIGltcGxpbWVudGF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKFByb21pc2UpIC0+IFByb3BlcnR5XG4vLyAoU3RyZWFtfFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb21pc2Vcbk9ic2VydmFibGUucHJvdG90eXBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChQcm9taXNlKSB7XG4gIHJldHVybiB0b1Byb21pc2UodGhpcywgUHJvbWlzZSk7XG59O1xuXG4vLyAoRVNPYnNlcnZhYmxlKSAtPiBTdHJlYW1cbi8vIChTdHJlYW18UHJvcGVydHkpIC0+IEVTNyBPYnNlcnZhYmxlXG5PYnNlcnZhYmxlLnByb3RvdHlwZS50b0VTT2JzZXJ2YWJsZSA9IHRvRVNPYnNlcnZhYmxlO1xuT2JzZXJ2YWJsZS5wcm90b3R5cGVbJCRvYnNlcnZhYmxlXSA9IHRvRVNPYnNlcnZhYmxlO1xuXG4vLyBNb2RpZnkgYW4gb2JzZXJ2YWJsZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gKFN0cmVhbSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBtYXAkMSh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZpbHRlcih0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtLCBudW1iZXIpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBudW1iZXIpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS50YWtlID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIHRha2UodGhpcywgbik7XG59O1xuXG4vLyAoU3RyZWFtLCBudW1iZXIpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBudW1iZXIpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS50YWtlRXJyb3JzID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIHRha2VFcnJvcnModGhpcywgbik7XG59O1xuXG4vLyAoU3RyZWFtLCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS50YWtlV2hpbGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIHRha2VXaGlsZSh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBsYXN0KHRoaXMpO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2tpcCA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBza2lwKHRoaXMsIG4pO1xufTtcblxuLy8gKFN0cmVhbSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2tpcFdoaWxlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBza2lwV2hpbGUodGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2tpcER1cGxpY2F0ZXMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIHNraXBEdXBsaWNhdGVzKHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufGZhbHNleSwgYW55fHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufGZhbHNleSwgYW55fHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmRpZmYgPSBmdW5jdGlvbiAoZm4sIHNlZWQpIHtcbiAgcmV0dXJuIGRpZmYodGhpcywgZm4sIHNlZWQpO1xufTtcblxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb24sIGFueXx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5zY2FuID0gZnVuY3Rpb24gKGZuLCBzZWVkKSB7XG4gIHJldHVybiBzY2FuKHRoaXMsIGZuLCBzZWVkKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZsYXR0ZW4odGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSwgbnVtYmVyKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbiAod2FpdCkge1xuICByZXR1cm4gZGVsYXkodGhpcywgd2FpdCk7XG59O1xuXG4vLyBPcHRpb25zID0ge2xlYWRpbmc6IGJvb2xlYW58dW5kZWZpbmVkLCB0cmFpbGluZzogYm9vbGVhbnx1bmRlZmluZWR9XG4vLyAoU3RyZWFtLCBudW1iZXIsIE9wdGlvbnN8dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgbnVtYmVyLCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnRocm90dGxlID0gZnVuY3Rpb24gKHdhaXQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRocm90dGxlKHRoaXMsIHdhaXQsIG9wdGlvbnMpO1xufTtcblxuLy8gT3B0aW9ucyA9IHtpbW1lZGlhdGU6IGJvb2xlYW58dW5kZWZpbmVkfVxuLy8gKFN0cmVhbSwgbnVtYmVyLCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIG51bWJlciwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5kZWJvdW5jZSA9IGZ1bmN0aW9uICh3YWl0LCBvcHRpb25zKSB7XG4gIHJldHVybiBkZWJvdW5jZSh0aGlzLCB3YWl0LCBvcHRpb25zKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLm1hcEVycm9ycyA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbWFwRXJyb3JzKHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmZpbHRlckVycm9ycyA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZmlsdGVyRXJyb3JzKHRoaXMsIGZuKTtcbn07XG5cbi8vIChTdHJlYW0pIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5KSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuaWdub3JlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaWdub3JlVmFsdWVzKHRoaXMpO1xufTtcblxuLy8gKFN0cmVhbSkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5pZ25vcmVFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpZ25vcmVFcnJvcnModGhpcyk7XG59O1xuXG4vLyAoU3RyZWFtKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmlnbm9yZUVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlnbm9yZUVuZCh0aGlzKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9uKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb24pIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5iZWZvcmVFbmQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGJlZm9yZUVuZCh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtLCBudW1iZXIsIG51bWJlcnx1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBudW1iZXIsIG51bWJlcnx1bmRlZmluZWQpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5zbGlkaW5nV2luZG93ID0gZnVuY3Rpb24gKG1heCwgbWluKSB7XG4gIHJldHVybiBzbGlkaW5nV2luZG93KHRoaXMsIG1heCwgbWluKTtcbn07XG5cbi8vIE9wdGlvbnMgPSB7Zmx1c2hPbkVuZDogYm9vbGVhbnx1bmRlZmluZWR9XG4vLyAoU3RyZWFtLCBGdW5jdGlvbnxmYWxzZXksIE9wdGlvbnN8dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb258ZmFsc2V5LCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmJ1ZmZlcldoaWxlID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zKSB7XG4gIHJldHVybiBidWZmZXJXaGlsZSh0aGlzLCBmbiwgb3B0aW9ucyk7XG59O1xuXG4vLyAoU3RyZWFtLCBudW1iZXIpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBudW1iZXIpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5idWZmZXJXaXRoQ291bnQgPSBmdW5jdGlvbiAoY291bnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJ1ZmZlcldoaWxlJDEodGhpcywgY291bnQsIG9wdGlvbnMpO1xufTtcblxuLy8gT3B0aW9ucyA9IHtmbHVzaE9uRW5kOiBib29sZWFufHVuZGVmaW5lZH1cbi8vIChTdHJlYW0sIG51bWJlciwgbnVtYmVyLCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIG51bWJlciwgbnVtYmVyLCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmJ1ZmZlcldpdGhUaW1lT3JDb3VudCA9IGZ1bmN0aW9uICh3YWl0LCBjb3VudCwgb3B0aW9ucykge1xuICByZXR1cm4gYnVmZmVyV2l0aFRpbWVPckNvdW50KHRoaXMsIHdhaXQsIGNvdW50LCBvcHRpb25zKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9uKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb24pIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS50cmFuc2R1Y2UgPSBmdW5jdGlvbiAodHJhbnNkdWNlcikge1xuICByZXR1cm4gdHJhbnNkdWNlKHRoaXMsIHRyYW5zZHVjZXIpO1xufTtcblxuLy8gKFN0cmVhbSwgRnVuY3Rpb24pIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBGdW5jdGlvbikgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLndpdGhIYW5kbGVyID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiB3aXRoSGFuZGxlcih0aGlzLCBmbik7XG59O1xuXG4vLyBDb21iaW5lIG9ic2VydmFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAoQXJyYXk8U3RyZWFtfFByb3BlcnR5PiwgRnVuY3Rpb258dW5kZWZpZW5kKSAtPiBTdHJlYW1cbi8vIChBcnJheTxTdHJlYW18UHJvcGVydHk+LCBBcnJheTxTdHJlYW18UHJvcGVydHk+LCBGdW5jdGlvbnx1bmRlZmllbmQpIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChvdGhlciwgY29tYmluYXRvcikge1xuICByZXR1cm4gY29tYmluZShbdGhpcywgb3RoZXJdLCBjb21iaW5hdG9yKTtcbn07XG5cbi8vIChBcnJheTxTdHJlYW18UHJvcGVydHk+LCBGdW5jdGlvbnx1bmRlZmllbmQpIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuemlwID0gZnVuY3Rpb24gKG90aGVyLCBjb21iaW5hdG9yKSB7XG4gIHJldHVybiB6aXAoW3RoaXMsIG90aGVyXSwgY29tYmluYXRvcik7XG59O1xuXG4vLyAoQXJyYXk8U3RyZWFtfFByb3BlcnR5PikgLT4gU3RyZWFtXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICByZXR1cm4gbWVyZ2UoW3RoaXMsIG90aGVyXSk7XG59O1xuXG4vLyAoQXJyYXk8U3RyZWFtfFByb3BlcnR5PikgLT4gU3RyZWFtXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgcmV0dXJuIGNvbmNhdCQxKFt0aGlzLCBvdGhlcl0pO1xufTtcblxuLy8gKCkgLT4gUG9vbFxudmFyIHBvb2wgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9vbCgpO1xufTtcblxuLy8gKEZ1bmN0aW9uKSAtPiBTdHJlYW1cbi8vIE9wdGlvbnMgPSB7Y29uY3VyTGltOiBudW1iZXJ8dW5kZWZpbmVkLCBxdWV1ZUxpbTogbnVtYmVyfHVuZGVmaW5lZCwgZHJvcDogJ29sZCd8J25ldyd8dW5kZWZpZW5kfVxuLy8gKFN0cmVhbXxQcm9wZXJ0eSwgRnVuY3Rpb258ZmFsc2V5LCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gU3RyZWFtXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgRmxhdE1hcCh0aGlzLCBmbikuc2V0TmFtZSh0aGlzLCAnZmxhdE1hcCcpO1xufTtcbk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBMYXRlc3QgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBGbGF0TWFwKHRoaXMsIGZuLCB7IGNvbmN1ckxpbTogMSwgZHJvcDogJ29sZCcgfSkuc2V0TmFtZSh0aGlzLCAnZmxhdE1hcExhdGVzdCcpO1xufTtcbk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBGaXJzdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IEZsYXRNYXAodGhpcywgZm4sIHsgY29uY3VyTGltOiAxIH0pLnNldE5hbWUodGhpcywgJ2ZsYXRNYXBGaXJzdCcpO1xufTtcbk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBDb25jYXQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBGbGF0TWFwKHRoaXMsIGZuLCB7IHF1ZXVlTGltOiAtMSwgY29uY3VyTGltOiAxIH0pLnNldE5hbWUodGhpcywgJ2ZsYXRNYXBDb25jYXQnKTtcbn07XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwQ29uY3VyTGltaXQgPSBmdW5jdGlvbiAoZm4sIGxpbWl0KSB7XG4gIHJldHVybiBuZXcgRmxhdE1hcCh0aGlzLCBmbiwgeyBxdWV1ZUxpbTogLTEsIGNvbmN1ckxpbTogbGltaXQgfSkuc2V0TmFtZSh0aGlzLCAnZmxhdE1hcENvbmN1ckxpbWl0Jyk7XG59O1xuXG4vLyAoU3RyZWFtfFByb3BlcnR5LCBGdW5jdGlvbnxmYWxzZXkpIC0+IFN0cmVhbVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcEVycm9ycyA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IEZsYXRNYXBFcnJvcnModGhpcywgZm4pLnNldE5hbWUodGhpcywgJ2ZsYXRNYXBFcnJvcnMnKTtcbn07XG5cbi8vIENvbWJpbmUgdHdvIG9ic2VydmFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAoU3RyZWFtLCBTdHJlYW18UHJvcGVydHkpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBTdHJlYW18UHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5maWx0ZXJCeSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICByZXR1cm4gZmlsdGVyQnkodGhpcywgb3RoZXIpO1xufTtcblxuLy8gKFN0cmVhbSwgU3RyZWFtfFByb3BlcnR5LCBGdW5jdGlvbnx1bmRlZmllbmQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBTdHJlYW18UHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaWVuZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnNhbXBsZWRCeSA9IGZ1bmN0aW9uIChvdGhlciwgY29tYmluYXRvcikge1xuICByZXR1cm4gc2FtcGxlZEJ5KHRoaXMsIG90aGVyLCBjb21iaW5hdG9yKTtcbn07XG5cbi8vIChTdHJlYW0sIFN0cmVhbXxQcm9wZXJ0eSkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIFN0cmVhbXxQcm9wZXJ0eSkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnNraXBVbnRpbEJ5ID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gIHJldHVybiBza2lwVW50aWxCeSh0aGlzLCBvdGhlcik7XG59O1xuXG4vLyAoU3RyZWFtLCBTdHJlYW18UHJvcGVydHkpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBTdHJlYW18UHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS50YWtlVW50aWxCeSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICByZXR1cm4gdGFrZVVudGlsQnkodGhpcywgb3RoZXIpO1xufTtcblxuLy8gT3B0aW9ucyA9IHtmbHVzaE9uRW5kOiBib29sZWFufHVuZGVmaW5lZH1cbi8vIChTdHJlYW0sIFN0cmVhbXxQcm9wZXJ0eSwgT3B0aW9uc3x1bmRlZmluZWQpIC0+IFN0cmVhbVxuLy8gKFByb3BlcnR5LCBTdHJlYW18UHJvcGVydHksIE9wdGlvbnN8dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYnVmZmVyQnkgPSBmdW5jdGlvbiAob3RoZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJ1ZmZlckJ5KHRoaXMsIG90aGVyLCBvcHRpb25zKTtcbn07XG5cbi8vIE9wdGlvbnMgPSB7Zmx1c2hPbkVuZDogYm9vbGVhbnx1bmRlZmluZWR9XG4vLyAoU3RyZWFtLCBTdHJlYW18UHJvcGVydHksIE9wdGlvbnN8dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgU3RyZWFtfFByb3BlcnR5LCBPcHRpb25zfHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmJ1ZmZlcldoaWxlQnkgPSBmdW5jdGlvbiAob3RoZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJ1ZmZlcldoaWxlQnkodGhpcywgb3RoZXIsIG9wdGlvbnMpO1xufTtcblxuLy8gRGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIERFUFJFQ0FUSU9OX1dBUk5JTkdTID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc3NhYmxlRGVwcmVjYXRpb25XYXJuaW5ncygpIHtcbiAgREVQUkVDQVRJT05fV0FSTklOR1MgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgaWYgKERFUFJFQ0FUSU9OX1dBUk5JTkdTICYmIGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUud2FybiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBtc2cyID0gJ1xcbkhlcmUgaXMgYW4gRXJyb3Igb2JqZWN0IGZvciB5b3UgY29udGFpbmluZyB0aGUgY2FsbCBzdGFjazonO1xuICAgIGNvbnNvbGUud2Fybihtc2csIG1zZzIsIG5ldyBFcnJvcigpKTtcbiAgfVxufVxuXG4vLyAoU3RyZWFtfFByb3BlcnR5LCBTdHJlYW18UHJvcGVydHkpIC0+IFByb3BlcnR5XG5PYnNlcnZhYmxlLnByb3RvdHlwZS5hd2FpdGluZyA9IGZ1bmN0aW9uIChvdGhlcikge1xuICB3YXJuKCdZb3UgYXJlIHVzaW5nIGRlcHJlY2F0ZWQgLmF3YWl0aW5nKCkgbWV0aG9kLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Jwb21pbm92L2tlZmlyL2lzc3Vlcy8xNDUnKTtcbiAgcmV0dXJuIGF3YWl0aW5nKHRoaXMsIG90aGVyKTtcbn07XG5cbi8vIChTdHJlYW0sIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gU3RyZWFtXG4vLyAoUHJvcGVydHksIEZ1bmN0aW9ufHVuZGVmaW5lZCkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLnZhbHVlc1RvRXJyb3JzID0gZnVuY3Rpb24gKGZuKSB7XG4gIHdhcm4oJ1lvdSBhcmUgdXNpbmcgZGVwcmVjYXRlZCAudmFsdWVzVG9FcnJvcnMoKSBtZXRob2QsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcnBvbWlub3Yva2VmaXIvaXNzdWVzLzE0OScpO1xuICByZXR1cm4gdmFsdWVzVG9FcnJvcnModGhpcywgZm4pO1xufTtcblxuLy8gKFN0cmVhbSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSwgRnVuY3Rpb258dW5kZWZpbmVkKSAtPiBQcm9wZXJ0eVxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZXJyb3JzVG9WYWx1ZXMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgd2FybignWW91IGFyZSB1c2luZyBkZXByZWNhdGVkIC5lcnJvcnNUb1ZhbHVlcygpIG1ldGhvZCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ycG9taW5vdi9rZWZpci9pc3N1ZXMvMTQ5Jyk7XG4gIHJldHVybiBlcnJvcnNUb1ZhbHVlcyh0aGlzLCBmbik7XG59O1xuXG4vLyAoU3RyZWFtKSAtPiBTdHJlYW1cbi8vIChQcm9wZXJ0eSkgLT4gUHJvcGVydHlcbk9ic2VydmFibGUucHJvdG90eXBlLmVuZE9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gIHdhcm4oJ1lvdSBhcmUgdXNpbmcgZGVwcmVjYXRlZCAuZW5kT25FcnJvcigpIG1ldGhvZCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ycG9taW5vdi9rZWZpci9pc3N1ZXMvMTUwJyk7XG4gIHJldHVybiBlbmRPbkVycm9yKHRoaXMpO1xufTtcblxuLy8gRXhwb3J0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIEtlZmlyID0ge1xuICBPYnNlcnZhYmxlOiBPYnNlcnZhYmxlLFxuICBTdHJlYW06IFN0cmVhbSxcbiAgUHJvcGVydHk6IFByb3BlcnR5LFxuICBuZXZlcjogbmV2ZXIsXG4gIGxhdGVyOiBsYXRlcixcbiAgaW50ZXJ2YWw6IGludGVydmFsLFxuICBzZXF1ZW50aWFsbHk6IHNlcXVlbnRpYWxseSxcbiAgZnJvbVBvbGw6IGZyb21Qb2xsLFxuICB3aXRoSW50ZXJ2YWw6IHdpdGhJbnRlcnZhbCxcbiAgZnJvbUNhbGxiYWNrOiBmcm9tQ2FsbGJhY2ssXG4gIGZyb21Ob2RlQ2FsbGJhY2s6IGZyb21Ob2RlQ2FsbGJhY2ssXG4gIGZyb21FdmVudHM6IGZyb21FdmVudHMsXG4gIHN0cmVhbTogc3RyZWFtLFxuICBjb25zdGFudDogY29uc3RhbnQsXG4gIGNvbnN0YW50RXJyb3I6IGNvbnN0YW50RXJyb3IsXG4gIGZyb21Qcm9taXNlOiBmcm9tUHJvbWlzZSxcbiAgZnJvbUVTT2JzZXJ2YWJsZTogZnJvbUVTT2JzZXJ2YWJsZSxcbiAgY29tYmluZTogY29tYmluZSxcbiAgemlwOiB6aXAsXG4gIG1lcmdlOiBtZXJnZSxcbiAgY29uY2F0OiBjb25jYXQkMSxcbiAgUG9vbDogUG9vbCxcbiAgcG9vbDogcG9vbCxcbiAgcmVwZWF0OiByZXBlYXQsXG4gIHN0YXRpY0xhbmQ6IHN0YXRpY0xhbmRcbn07XG5cbktlZmlyLktlZmlyID0gS2VmaXI7XG5cbmV4cG9ydHMuZGlzc2FibGVEZXByZWNhdGlvbldhcm5pbmdzID0gZGlzc2FibGVEZXByZWNhdGlvbldhcm5pbmdzO1xuZXhwb3J0cy5LZWZpciA9IEtlZmlyO1xuZXhwb3J0cy5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTtcbmV4cG9ydHMuU3RyZWFtID0gU3RyZWFtO1xuZXhwb3J0cy5Qcm9wZXJ0eSA9IFByb3BlcnR5O1xuZXhwb3J0cy5uZXZlciA9IG5ldmVyO1xuZXhwb3J0cy5sYXRlciA9IGxhdGVyO1xuZXhwb3J0cy5pbnRlcnZhbCA9IGludGVydmFsO1xuZXhwb3J0cy5zZXF1ZW50aWFsbHkgPSBzZXF1ZW50aWFsbHk7XG5leHBvcnRzLmZyb21Qb2xsID0gZnJvbVBvbGw7XG5leHBvcnRzLndpdGhJbnRlcnZhbCA9IHdpdGhJbnRlcnZhbDtcbmV4cG9ydHMuZnJvbUNhbGxiYWNrID0gZnJvbUNhbGxiYWNrO1xuZXhwb3J0cy5mcm9tTm9kZUNhbGxiYWNrID0gZnJvbU5vZGVDYWxsYmFjaztcbmV4cG9ydHMuZnJvbUV2ZW50cyA9IGZyb21FdmVudHM7XG5leHBvcnRzLnN0cmVhbSA9IHN0cmVhbTtcbmV4cG9ydHMuY29uc3RhbnQgPSBjb25zdGFudDtcbmV4cG9ydHMuY29uc3RhbnRFcnJvciA9IGNvbnN0YW50RXJyb3I7XG5leHBvcnRzLmZyb21Qcm9taXNlID0gZnJvbVByb21pc2U7XG5leHBvcnRzLmZyb21FU09ic2VydmFibGUgPSBmcm9tRVNPYnNlcnZhYmxlO1xuZXhwb3J0cy5jb21iaW5lID0gY29tYmluZTtcbmV4cG9ydHMuemlwID0gemlwO1xuZXhwb3J0cy5tZXJnZSA9IG1lcmdlO1xuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQkMTtcbmV4cG9ydHMuUG9vbCA9IFBvb2w7XG5leHBvcnRzLnBvb2wgPSBwb29sO1xuZXhwb3J0cy5yZXBlYXQgPSByZXBlYXQ7XG5leHBvcnRzLnN0YXRpY0xhbmQgPSBzdGF0aWNMYW5kO1xuZXhwb3J0c1snZGVmYXVsdCddID0gS2VmaXI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9rZWZpci9kaXN0L2tlZmlyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBUd2Vlbi5qcyAtIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanMvZ3JhcGhzL2NvbnRyaWJ1dG9ycyBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBjb250cmlidXRvcnMuXG4gKiBUaGFuayB5b3UgYWxsLCB5b3UncmUgYXdlc29tZSFcbiAqL1xuXG52YXIgVFdFRU4gPSBUV0VFTiB8fCAoZnVuY3Rpb24gKCkge1xuXG5cdHZhciBfdHdlZW5zID0gW107XG5cblx0cmV0dXJuIHtcblxuXHRcdGdldEFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gX3R3ZWVucztcblxuXHRcdH0sXG5cblx0XHRyZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0X3R3ZWVucyA9IFtdO1xuXG5cdFx0fSxcblxuXHRcdGFkZDogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cblx0XHRcdF90d2VlbnMucHVzaCh0d2Vlbik7XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbiAodHdlZW4pIHtcblxuXHRcdFx0dmFyIGkgPSBfdHdlZW5zLmluZGV4T2YodHdlZW4pO1xuXG5cdFx0XHRpZiAoaSAhPT0gLTEpIHtcblx0XHRcdFx0X3R3ZWVucy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAodGltZSwgcHJlc2VydmUpIHtcblxuXHRcdFx0aWYgKF90d2VlbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHR0aW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6IFRXRUVOLm5vdygpO1xuXG5cdFx0XHR3aGlsZSAoaSA8IF90d2VlbnMubGVuZ3RoKSB7XG5cblx0XHRcdFx0aWYgKF90d2VlbnNbaV0udXBkYXRlKHRpbWUpIHx8IHByZXNlcnZlKSB7XG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF90d2VlbnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHR9XG5cdH07XG5cbn0pKCk7XG5cblxuLy8gSW5jbHVkZSBhIHBlcmZvcm1hbmNlLm5vdyBwb2x5ZmlsbC5cbi8vIEluIG5vZGUuanMsIHVzZSBwcm9jZXNzLmhydGltZS5cbmlmICh0eXBlb2YgKHdpbmRvdykgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAocHJvY2VzcykgIT09ICd1bmRlZmluZWQnKSB7XG5cdFRXRUVOLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG5cblx0XHQvLyBDb252ZXJ0IFtzZWNvbmRzLCBuYW5vc2Vjb25kc10gdG8gbWlsbGlzZWNvbmRzLlxuXHRcdHJldHVybiB0aW1lWzBdICogMTAwMCArIHRpbWVbMV0gLyAxMDAwMDAwO1xuXHR9O1xufVxuLy8gSW4gYSBicm93c2VyLCB1c2Ugd2luZG93LnBlcmZvcm1hbmNlLm5vdyBpZiBpdCBpcyBhdmFpbGFibGUuXG5lbHNlIGlmICh0eXBlb2YgKHdpbmRvdykgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICB3aW5kb3cucGVyZm9ybWFuY2UgIT09IHVuZGVmaW5lZCAmJlxuXHRcdCB3aW5kb3cucGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQpIHtcblx0Ly8gVGhpcyBtdXN0IGJlIGJvdW5kLCBiZWNhdXNlIGRpcmVjdGx5IGFzc2lnbmluZyB0aGlzIGZ1bmN0aW9uXG5cdC8vIGxlYWRzIHRvIGFuIGludm9jYXRpb24gZXhjZXB0aW9uIGluIENocm9tZS5cblx0VFdFRU4ubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHdpbmRvdy5wZXJmb3JtYW5jZSk7XG59XG4vLyBVc2UgRGF0ZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAoRGF0ZS5ub3cgIT09IHVuZGVmaW5lZCkge1xuXHRUV0VFTi5ub3cgPSBEYXRlLm5vdztcbn1cbi8vIE90aGVyd2lzZSwgdXNlICduZXcgRGF0ZSgpLmdldFRpbWUoKScuXG5lbHNlIHtcblx0VFdFRU4ubm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fTtcbn1cblxuXG5UV0VFTi5Ud2VlbiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcblxuXHR2YXIgX29iamVjdCA9IG9iamVjdDtcblx0dmFyIF92YWx1ZXNTdGFydCA9IHt9O1xuXHR2YXIgX3ZhbHVlc0VuZCA9IHt9O1xuXHR2YXIgX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHZhciBfZHVyYXRpb24gPSAxMDAwO1xuXHR2YXIgX3JlcGVhdCA9IDA7XG5cdHZhciBfcmVwZWF0RGVsYXlUaW1lO1xuXHR2YXIgX3lveW8gPSBmYWxzZTtcblx0dmFyIF9pc1BsYXlpbmcgPSBmYWxzZTtcblx0dmFyIF9yZXZlcnNlZCA9IGZhbHNlO1xuXHR2YXIgX2RlbGF5VGltZSA9IDA7XG5cdHZhciBfc3RhcnRUaW1lID0gbnVsbDtcblx0dmFyIF9lYXNpbmdGdW5jdGlvbiA9IFRXRUVOLkVhc2luZy5MaW5lYXIuTm9uZTtcblx0dmFyIF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLkxpbmVhcjtcblx0dmFyIF9jaGFpbmVkVHdlZW5zID0gW107XG5cdHZhciBfb25TdGFydENhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXHR2YXIgX29uVXBkYXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uQ29tcGxldGVDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25TdG9wQ2FsbGJhY2sgPSBudWxsO1xuXG5cdHRoaXMudG8gPSBmdW5jdGlvbiAocHJvcGVydGllcywgZHVyYXRpb24pIHtcblxuXHRcdF92YWx1ZXNFbmQgPSBwcm9wZXJ0aWVzO1xuXG5cdFx0aWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdF9kdXJhdGlvbiA9IGR1cmF0aW9uO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5zdGFydCA9IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHRUV0VFTi5hZGQodGhpcyk7XG5cblx0XHRfaXNQbGF5aW5nID0gdHJ1ZTtcblxuXHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXG5cdFx0X3N0YXJ0VGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiBUV0VFTi5ub3coKTtcblx0XHRfc3RhcnRUaW1lICs9IF9kZWxheVRpbWU7XG5cblx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBfdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIENoZWNrIGlmIGFuIEFycmF5IHdhcyBwcm92aWRlZCBhcyBwcm9wZXJ0eSB2YWx1ZVxuXHRcdFx0aWYgKF92YWx1ZXNFbmRbcHJvcGVydHldIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuXHRcdFx0XHRpZiAoX3ZhbHVlc0VuZFtwcm9wZXJ0eV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcblx0XHRcdFx0X3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSBbX29iamVjdFtwcm9wZXJ0eV1dLmNvbmNhdChfdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYHRvKClgIHNwZWNpZmllcyBhIHByb3BlcnR5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdCxcblx0XHRcdC8vIHdlIHNob3VsZCBub3Qgc2V0IHRoYXQgcHJvcGVydHkgaW4gdGhlIG9iamVjdFxuXHRcdFx0aWYgKF9vYmplY3RbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNhdmUgdGhlIHN0YXJ0aW5nIHZhbHVlLlxuXHRcdFx0X3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IF9vYmplY3RbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoKF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gKj0gMS4wOyAvLyBFbnN1cmVzIHdlJ3JlIHVzaW5nIG51bWJlcnMsIG5vdCBzdHJpbmdzXG5cdFx0XHR9XG5cblx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSBfdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmICghX2lzUGxheWluZykge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0VFdFRU4ucmVtb3ZlKHRoaXMpO1xuXHRcdF9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmIChfb25TdG9wQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdF9vblN0b3BDYWxsYmFjay5jYWxsKF9vYmplY3QsIF9vYmplY3QpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcENoYWluZWRUd2VlbnMoKTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuZW5kID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy51cGRhdGUoX3N0YXJ0VGltZSArIF9kdXJhdGlvbik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnN0b3BDaGFpbmVkVHdlZW5zID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcblx0XHRcdF9jaGFpbmVkVHdlZW5zW2ldLnN0b3AoKTtcblx0XHR9XG5cblx0fTtcblxuXHR0aGlzLmRlbGF5ID0gZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0X2RlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMucmVwZWF0ID0gZnVuY3Rpb24gKHRpbWVzKSB7XG5cblx0XHRfcmVwZWF0ID0gdGltZXM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0X3JlcGVhdERlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMueW95byA9IGZ1bmN0aW9uICh5b3lvKSB7XG5cblx0XHRfeW95byA9IHlveW87XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXG5cdHRoaXMuZWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuXG5cdFx0X2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5pbnRlcnBvbGF0aW9uID0gZnVuY3Rpb24gKGludGVycG9sYXRpb24pIHtcblxuXHRcdF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBpbnRlcnBvbGF0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5jaGFpbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdF9jaGFpbmVkVHdlZW5zID0gYXJndW1lbnRzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vblN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25TdGFydENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25Db21wbGV0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uU3RvcCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0X29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cdFx0dmFyIGVsYXBzZWQ7XG5cdFx0dmFyIHZhbHVlO1xuXG5cdFx0aWYgKHRpbWUgPCBfc3RhcnRUaW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoX29uU3RhcnRDYWxsYmFja0ZpcmVkID09PSBmYWxzZSkge1xuXG5cdFx0XHRpZiAoX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHRfb25TdGFydENhbGxiYWNrLmNhbGwoX29iamVjdCwgX29iamVjdCk7XG5cdFx0XHR9XG5cblx0XHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0ZWxhcHNlZCA9ICh0aW1lIC0gX3N0YXJ0VGltZSkgLyBfZHVyYXRpb247XG5cdFx0ZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XG5cblx0XHR2YWx1ZSA9IF9lYXNpbmdGdW5jdGlvbihlbGFwc2VkKTtcblxuXHRcdGZvciAocHJvcGVydHkgaW4gX3ZhbHVlc0VuZCkge1xuXG5cdFx0XHQvLyBEb24ndCB1cGRhdGUgcHJvcGVydGllcyB0aGF0IGRvIG5vdCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdFxuXHRcdFx0aWYgKF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHN0YXJ0ID0gX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xuXHRcdFx0dmFyIGVuZCA9IF92YWx1ZXNFbmRbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoZW5kIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuXHRcdFx0XHRfb2JqZWN0W3Byb3BlcnR5XSA9IF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24oZW5kLCB2YWx1ZSk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxuXHRcdFx0XHRpZiAodHlwZW9mIChlbmQpID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRcdFx0aWYgKGVuZC5jaGFyQXQoMCkgPT09ICcrJyB8fCBlbmQuY2hhckF0KDApID09PSAnLScpIHtcblx0XHRcdFx0XHRcdGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBwYXJzZUZsb2F0KGVuZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0X29iamVjdFtwcm9wZXJ0eV0gPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoX29uVXBkYXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdF9vblVwZGF0ZUNhbGxiYWNrLmNhbGwoX29iamVjdCwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChlbGFwc2VkID09PSAxKSB7XG5cblx0XHRcdGlmIChfcmVwZWF0ID4gMCkge1xuXG5cdFx0XHRcdGlmIChpc0Zpbml0ZShfcmVwZWF0KSkge1xuXHRcdFx0XHRcdF9yZXBlYXQtLTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlYXNzaWduIHN0YXJ0aW5nIHZhbHVlcywgcmVzdGFydCBieSBtYWtpbmcgc3RhcnRUaW1lID0gbm93XG5cdFx0XHRcdGZvciAocHJvcGVydHkgaW4gX3ZhbHVlc1N0YXJ0UmVwZWF0KSB7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIChfdmFsdWVzRW5kW3Byb3BlcnR5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSArIHBhcnNlRmxvYXQoX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChfeW95bykge1xuXHRcdFx0XHRcdFx0dmFyIHRtcCA9IF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSBfdmFsdWVzRW5kW3Byb3BlcnR5XTtcblx0XHRcdFx0XHRcdF92YWx1ZXNFbmRbcHJvcGVydHldID0gdG1wO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSBfdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoX3lveW8pIHtcblx0XHRcdFx0XHRfcmV2ZXJzZWQgPSAhX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKF9yZXBlYXREZWxheVRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdF9zdGFydFRpbWUgPSB0aW1lICsgX3JlcGVhdERlbGF5VGltZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc3RhcnRUaW1lID0gdGltZSArIF9kZWxheVRpbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoX29uQ29tcGxldGVDYWxsYmFjayAhPT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0X29uQ29tcGxldGVDYWxsYmFjay5jYWxsKF9vYmplY3QsIF9vYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcblx0XHRcdFx0XHQvLyBNYWtlIHRoZSBjaGFpbmVkIHR3ZWVucyBzdGFydCBleGFjdGx5IGF0IHRoZSB0aW1lIHRoZXkgc2hvdWxkLFxuXHRcdFx0XHRcdC8vIGV2ZW4gaWYgdGhlIGB1cGRhdGUoKWAgbWV0aG9kIHdhcyBjYWxsZWQgd2F5IHBhc3QgdGhlIGR1cmF0aW9uIG9mIHRoZSB0d2VlblxuXHRcdFx0XHRcdF9jaGFpbmVkVHdlZW5zW2ldLnN0YXJ0KF9zdGFydFRpbWUgKyBfZHVyYXRpb24pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9O1xuXG59O1xuXG5cblRXRUVOLkVhc2luZyA9IHtcblxuXHRMaW5lYXI6IHtcblxuXHRcdE5vbmU6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhZHJhdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiAoMiAtIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC0gMC41ICogKC0tayAqIChrIC0gMikgLSAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEN1YmljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFydGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtICgtLWsgKiBrICogayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgLSAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1aW50aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrICogayArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0U2ludXNvaWRhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5jb3MoayAqIE1hdGguUEkgLyAyKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNpbihrICogTWF0aC5QSSAvIDIpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RXhwb25lbnRpYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLSAxMCAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIGsgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgtIE1hdGgucG93KDIsIC0gMTAgKiAoayAtIDEpKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q2lyY3VsYXI6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gKC0tayAqIGspKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLSAwLjUgKiAoTWF0aC5zcXJ0KDEgLSBrICogaykgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChrIC09IDIpICogaykgKyAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEVsYXN0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIGspICogTWF0aC5zaW4oKGsgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRrICo9IDI7XG5cblx0XHRcdGlmIChrIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKGsgLSAxKSkgKiBNYXRoLnNpbigoayAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG5cblx0XHR9XG5cblx0fSxcblxuXHRCYWNrOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiAoayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJvdW5jZToge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoMSAtIGspO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPCAoMSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblx0XHRcdH0gZWxzZSBpZiAoayA8ICgyIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgxLjUgLyAyLjc1KSkgKiBrICsgMC43NTtcblx0XHRcdH0gZWxzZSBpZiAoayA8ICgyLjUgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuMjUgLyAyLjc1KSkgKiBrICsgMC45Mzc1O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgyLjYyNSAvIDIuNzUpKSAqIGsgKyAwLjk4NDM3NTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPCAwLjUpIHtcblx0XHRcdFx0cmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuSW4oayAqIDIpICogMC41O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoayAqIDIgLSAxKSAqIDAuNSArIDAuNTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cblRXRUVOLkludGVycG9sYXRpb24gPSB7XG5cblx0TGluZWFyOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIGYgPSBtICogaztcblx0XHR2YXIgaSA9IE1hdGguZmxvb3IoZik7XG5cdFx0dmFyIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5MaW5lYXI7XG5cblx0XHRpZiAoayA8IDApIHtcblx0XHRcdHJldHVybiBmbih2WzBdLCB2WzFdLCBmKTtcblx0XHR9XG5cblx0XHRpZiAoayA+IDEpIHtcblx0XHRcdHJldHVybiBmbih2W21dLCB2W20gLSAxXSwgbSAtIGYpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbih2W2ldLCB2W2kgKyAxID4gbSA/IG0gOiBpICsgMV0sIGYgLSBpKTtcblxuXHR9LFxuXG5cdEJlemllcjogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBiID0gMDtcblx0XHR2YXIgbiA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgcHcgPSBNYXRoLnBvdztcblx0XHR2YXIgYm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkJlcm5zdGVpbjtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IG47IGkrKykge1xuXHRcdFx0YiArPSBwdygxIC0gaywgbiAtIGkpICogcHcoaywgaSkgKiB2W2ldICogYm4obiwgaSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGI7XG5cblx0fSxcblxuXHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIGYgPSBtICogaztcblx0XHR2YXIgaSA9IE1hdGguZmxvb3IoZik7XG5cdFx0dmFyIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5DYXRtdWxsUm9tO1xuXG5cdFx0aWYgKHZbMF0gPT09IHZbbV0pIHtcblxuXHRcdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRcdGkgPSBNYXRoLmZsb29yKGYgPSBtICogKDEgKyBrKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbih2WyhpIC0gMSArIG0pICUgbV0sIHZbaV0sIHZbKGkgKyAxKSAlIG1dLCB2WyhpICsgMikgJSBtXSwgZiAtIGkpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRcdHJldHVybiB2WzBdIC0gKGZuKHZbMF0sIHZbMF0sIHZbMV0sIHZbMV0sIC1mKSAtIHZbMF0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA+IDEpIHtcblx0XHRcdFx0cmV0dXJuIHZbbV0gLSAoZm4odlttXSwgdlttXSwgdlttIC0gMV0sIHZbbSAtIDFdLCBmIC0gbSkgLSB2W21dKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuKHZbaSA/IGkgLSAxIDogMF0sIHZbaV0sIHZbbSA8IGkgKyAxID8gbSA6IGkgKyAxXSwgdlttIDwgaSArIDIgPyBtIDogaSArIDJdLCBmIC0gaSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRVdGlsczoge1xuXG5cdFx0TGluZWFyOiBmdW5jdGlvbiAocDAsIHAxLCB0KSB7XG5cblx0XHRcdHJldHVybiAocDEgLSBwMCkgKiB0ICsgcDA7XG5cblx0XHR9LFxuXG5cdFx0QmVybnN0ZWluOiBmdW5jdGlvbiAobiwgaSkge1xuXG5cdFx0XHR2YXIgZmMgPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkZhY3RvcmlhbDtcblxuXHRcdFx0cmV0dXJuIGZjKG4pIC8gZmMoaSkgLyBmYyhuIC0gaSk7XG5cblx0XHR9LFxuXG5cdFx0RmFjdG9yaWFsOiAoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgYSA9IFsxXTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChuKSB7XG5cblx0XHRcdFx0dmFyIHMgPSAxO1xuXG5cdFx0XHRcdGlmIChhW25dKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFbbl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBpID0gbjsgaSA+IDE7IGktLSkge1xuXHRcdFx0XHRcdHMgKj0gaTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFbbl0gPSBzO1xuXHRcdFx0XHRyZXR1cm4gcztcblxuXHRcdFx0fTtcblxuXHRcdH0pKCksXG5cblx0XHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHQpIHtcblxuXHRcdFx0dmFyIHYwID0gKHAyIC0gcDApICogMC41O1xuXHRcdFx0dmFyIHYxID0gKHAzIC0gcDEpICogMC41O1xuXHRcdFx0dmFyIHQyID0gdCAqIHQ7XG5cdFx0XHR2YXIgdDMgPSB0ICogdDI7XG5cblx0XHRcdHJldHVybiAoMiAqIHAxIC0gMiAqIHAyICsgdjAgKyB2MSkgKiB0MyArICgtIDMgKiBwMSArIDMgKiBwMiAtIDIgKiB2MCAtIHYxKSAqIHQyICsgdjAgKiB0ICsgcDE7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG4vLyBVTUQgKFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbilcbihmdW5jdGlvbiAocm9vdCkge1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblxuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIFRXRUVOO1xuXHRcdH0pO1xuXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cblx0XHQvLyBOb2RlLmpzXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBUV0VFTjtcblxuXHR9IGVsc2UgaWYgKHJvb3QgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0Ly8gR2xvYmFsIHZhcmlhYmxlXG5cdFx0cm9vdC5UV0VFTiA9IFRXRUVOO1xuXG5cdH1cblxufSkodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AdHdlZW5qcy90d2Vlbi5qcy9zcmMvVHdlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=