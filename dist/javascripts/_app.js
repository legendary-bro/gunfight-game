/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/javascripts/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Text,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Text = (function(superClass) {
	  extend(Text, superClass);
	
	  function Text(game, game_state, frame, x, y) {
	    var key;
	    this.game = game;
	    this.game_state = game_state;
	    if (x == null) {
	      x = 0;
	    }
	    if (y == null) {
	      y = 0;
	    }
	    key = 'atlas';
	    frame = String(frame);
	    Text.__super__.constructor.call(this, this.game, x, y, key, "text/" + (frame.replace(' ', '_').toUpperCase()));
	    this.game.add.existing(this);
	    this.hide();
	  }
	
	  Text.prototype.place = function(x, y) {
	    this.x = x;
	    return this.y = y;
	  };
	
	  Text.prototype.show = function() {
	    return this.reset(this.x, this.y);
	  };
	
	  Text.prototype.hide = function() {
	    return this.kill();
	  };
	
	  return Text;
	
	})(Phaser.Sprite);
	
	module.exports = Text;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
		/*jshint maxcomplexity:6*/
	
		// Sniff "best" async scheduling option
		// Prefer process.nextTick or MutationObserver, then check for
		// setTimeout, and finally vertx, since its the only env that doesn't
		// have setTimeout
	
		var MutationObs;
		var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;
	
		// Default env
		var setTimer = function(f, ms) { return setTimeout(f, ms); };
		var clearTimer = function(t) { return clearTimeout(t); };
		var asap = function (f) { return capturedSetTimeout(f, 0); };
	
		// Detect specific env
		if (isNode()) { // Node
			asap = function (f) { return process.nextTick(f); };
	
		} else if (MutationObs = hasMutationObserver()) { // Modern browser
			asap = initMutationObserver(MutationObs);
	
		} else if (!capturedSetTimeout) { // vert.x
			var vertxRequire = require;
			var vertx = __webpack_require__(48);
			setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
			clearTimer = vertx.cancelTimer;
			asap = vertx.runOnLoop || vertx.runOnContext;
		}
	
		return {
			setTimer: setTimer,
			clearTimer: clearTimer,
			asap: asap
		};
	
		function isNode () {
			return typeof process !== 'undefined' &&
				Object.prototype.toString.call(process) === '[object process]';
		}
	
		function hasMutationObserver () {
			return (typeof MutationObserver === 'function' && MutationObserver) ||
				(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver);
		}
	
		function initMutationObserver(MutationObserver) {
			var scheduled;
			var node = document.createTextNode('');
			var o = new MutationObserver(run);
			o.observe(node, { characterData: true });
	
			function run() {
				var f = scheduled;
				scheduled = void 0;
				f();
			}
	
			var i = 0;
			return function (f) {
				scheduled = f;
				node.data = (i ^= 1);
			};
		}
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 5 */
/***/ function(module, exports) {

	var Terrain,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Terrain = (function(superClass) {
	  extend(Terrain, superClass);
	
	  function Terrain(game, game_state, x, y, frame) {
	    var key;
	    this.game = game;
	    this.game_state = game_state;
	    if (x == null) {
	      x = 0;
	    }
	    if (y == null) {
	      y = 0;
	    }
	    if (frame == null) {
	      frame = 'cactus';
	    }
	    key = 'atlas';
	    frame = "terrain/" + frame;
	    Terrain.__super__.constructor.call(this, this.game, x, y, key, frame);
	    this.game.physics.enable(this, Phaser.Physics.ARCADE);
	    this.body.immovable = true;
	    this.game.add.existing(this);
	    this.cropRect = this.game.add.graphics();
	    return this;
	  }
	
	  Terrain.prototype.deform = function(collision_y) {
	    var height;
	    height = collision_y - this.y;
	    this.body.setSize(this.width, this.height - height, 0, height);
	    return this.drawRect(height);
	  };
	
	  Terrain.prototype.reload = function() {
	    return this.cropRect.clear();
	  };
	
	  Terrain.prototype.drawRect = function(height) {
	    this.cropRect.lineStyle(0);
	    this.cropRect.beginFill("0x000000");
	    this.cropRect.drawRect(this.x, this.y, this.width, height);
	    this.cropRect.endFill();
	    return this.game.world.bringToTop(this.cropRect);
	  };
	
	  return Terrain;
	
	})(Phaser.Sprite);
	
	module.exports = Terrain;


/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		/**
		 * Custom error type for promises rejected by promise.timeout
		 * @param {string} message
		 * @constructor
		 */
		function TimeoutError (message) {
			Error.call(this);
			this.message = message;
			this.name = TimeoutError.name;
			if (typeof Error.captureStackTrace === 'function') {
				Error.captureStackTrace(this, TimeoutError);
			}
		}
	
		TimeoutError.prototype = Object.create(Error.prototype);
		TimeoutError.prototype.constructor = TimeoutError;
	
		return TimeoutError;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		makeApply.tryCatchResolve = tryCatchResolve;
	
		return makeApply;
	
		function makeApply(Promise, call) {
			if(arguments.length < 2) {
				call = tryCatchResolve;
			}
	
			return apply;
	
			function apply(f, thisArg, args) {
				var p = Promise._defer();
				var l = args.length;
				var params = new Array(l);
				callAndResolve({ f:f, thisArg:thisArg, args:args, params:params, i:l-1, call:call }, p._handler);
	
				return p;
			}
	
			function callAndResolve(c, h) {
				if(c.i < 0) {
					return call(c.f, c.thisArg, c.params, h);
				}
	
				var handler = Promise._handler(c.args[c.i]);
				handler.fold(callAndResolveNext, c, void 0, h);
			}
	
			function callAndResolveNext(c, x, h) {
				c.params[c.i] = x;
				c.i -= 1;
				callAndResolve(c, h);
			}
		}
	
		function tryCatchResolve(f, thisArg, args, resolver) {
			try {
				resolver.resolve(f.apply(thisArg, args));
			} catch(e) {
				resolver.reject(e);
			}
		}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));
	
	


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return {
			pending: toPendingState,
			fulfilled: toFulfilledState,
			rejected: toRejectedState,
			inspect: inspect
		};
	
		function toPendingState() {
			return { state: 'pending' };
		}
	
		function toRejectedState(e) {
			return { state: 'rejected', reason: e };
		}
	
		function toFulfilledState(x) {
			return { state: 'fulfilled', value: x };
		}
	
		function inspect(handler) {
			var state = handler.state();
			return state === 0 ? toPendingState()
				 : state > 0   ? toFulfilledState(handler.value)
				               : toRejectedState(handler.value);
		}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var atlas;
	
	atlas = {
	  'frames': {
	    'text/0': {
	      'frame': {
	        'x': 442,
	        'y': 176,
	        'w': 24,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 24,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 24,
	        'h': 40
	      }
	    },
	    'text/1': {
	      'frame': {
	        'x': 494,
	        'y': 2,
	        'w': 16,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 16,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 16,
	        'h': 40
	      }
	    },
	    'text/2': {
	      'frame': {
	        'x': 468,
	        'y': 176,
	        'w': 24,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 24,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 24,
	        'h': 40
	      }
	    },
	    'text/3': {
	      'frame': {
	        'x': 442,
	        'y': 218,
	        'w': 24,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 24,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 24,
	        'h': 40
	      }
	    },
	    'text/4': {
	      'frame': {
	        'x': 468,
	        'y': 218,
	        'w': 24,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 24,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 24,
	        'h': 40
	      }
	    },
	    'text/5': {
	      'frame': {
	        'x': 100,
	        'y': 174,
	        'w': 24,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 24,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 24,
	        'h': 40
	      }
	    },
	    'text/6': {
	      'frame': {
	        'x': 100,
	        'y': 216,
	        'w': 24,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 24,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 24,
	        'h': 40
	      }
	    },
	    'text/7': {
	      'frame': {
	        'x': 100,
	        'y': 258,
	        'w': 24,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 24,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 24,
	        'h': 40
	      }
	    },
	    'text/8': {
	      'frame': {
	        'x': 100,
	        'y': 300,
	        'w': 24,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 24,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 24,
	        'h': 40
	      }
	    },
	    'text/9': {
	      'frame': {
	        'x': 328,
	        'y': 170,
	        'w': 24,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 24,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 24,
	        'h': 40
	      }
	    },
	    'text/DRAW': {
	      'frame': {
	        'x': 336,
	        'y': 2,
	        'w': 156,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 156,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 156,
	        'h': 40
	      }
	    },
	    'text/GAME': {
	      'frame': {
	        'x': 132,
	        'y': 128,
	        'w': 120,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 120,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 120,
	        'h': 40
	      }
	    },
	    'text/GET_READY': {
	      'frame': {
	        'x': 2,
	        'y': 44,
	        'w': 272,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 272,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 272,
	        'h': 40
	      }
	    },
	    'text/GOT_ME': {
	      'frame': {
	        'x': 276,
	        'y': 44,
	        'w': 212,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 212,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 212,
	        'h': 40
	      }
	    },
	    'text/GUN_FIGHT': {
	      'frame': {
	        'x': 2,
	        'y': 86,
	        'w': 272,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 272,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 272,
	        'h': 40
	      }
	    },
	    'text/INSERT_COIN': {
	      'frame': {
	        'x': 2,
	        'y': 2,
	        'w': 332,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 332,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 332,
	        'h': 40
	      }
	    },
	    'text/OVER': {
	      'frame': {
	        'x': 254,
	        'y': 128,
	        'w': 120,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 120,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 120,
	        'h': 40
	      }
	    },
	    'ammo': {
	      'frame': {
	        'x': 276,
	        'y': 86,
	        'w': 180,
	        'h': 40
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 180,
	        'h': 40
	      },
	      'sourceSize': {
	        'w': 180,
	        'h': 40
	      }
	    },
	    'bullet': {
	      'frame': {
	        'x': 490,
	        'y': 44,
	        'w': 8,
	        'h': 8
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 8,
	        'h': 8
	      },
	      'sourceSize': {
	        'w': 8,
	        'h': 8
	      }
	    },
	    'terrain/cactus': {
	      'frame': {
	        'x': 458,
	        'y': 86,
	        'w': 32,
	        'h': 88
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 32,
	        'h': 88
	      },
	      'sourceSize': {
	        'w': 32,
	        'h': 88
	      }
	    },
	    'cowboy/dead/hit': {
	      'frame': {
	        'x': 198,
	        'y': 584,
	        'w': 96,
	        'h': 132
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 132
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 132
	      }
	    },
	    'cowboy/dead/rip': {
	      'frame': {
	        'x': 2,
	        'y': 128,
	        'w': 128,
	        'h': 44
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 128,
	        'h': 44
	      },
	      'sourceSize': {
	        'w': 128,
	        'h': 44
	      }
	    },
	    'cowboy/high/cross': {
	      'frame': {
	        'x': 132,
	        'y': 170,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/high/one': {
	      'frame': {
	        'x': 2,
	        'y': 174,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/high/two': {
	      'frame': {
	        'x': 2,
	        'y': 312,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/low/cross': {
	      'frame': {
	        'x': 230,
	        'y': 170,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/low/one': {
	      'frame': {
	        'x': 328,
	        'y': 238,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/low/two': {
	      'frame': {
	        'x': 126,
	        'y': 308,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/med/cross': {
	      'frame': {
	        'x': 224,
	        'y': 308,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/med/one': {
	      'frame': {
	        'x': 322,
	        'y': 376,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/med/two': {
	      'frame': {
	        'x': 100,
	        'y': 446,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/medhigh/cross': {
	      'frame': {
	        'x': 2,
	        'y': 450,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/medhigh/one': {
	      'frame': {
	        'x': 198,
	        'y': 446,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/medhigh/two': {
	      'frame': {
	        'x': 296,
	        'y': 514,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/medlow/cross': {
	      'frame': {
	        'x': 394,
	        'y': 514,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/medlow/one': {
	      'frame': {
	        'x': 100,
	        'y': 584,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'cowboy/medlow/two': {
	      'frame': {
	        'x': 2,
	        'y': 588,
	        'w': 96,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 96,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 96,
	        'h': 136
	      }
	    },
	    'terrain/tree': {
	      'frame': {
	        'x': 376,
	        'y': 128,
	        'w': 64,
	        'h': 108
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 64,
	        'h': 108
	      },
	      'sourceSize': {
	        'w': 64,
	        'h': 108
	      }
	    },
	    'wagon': {
	      'frame': {
	        'x': 420,
	        'y': 376,
	        'w': 88,
	        'h': 96
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 88,
	        'h': 96
	      },
	      'sourceSize': {
	        'w': 88,
	        'h': 96
	      }
	    }
	  },
	  'meta': {
	    'app': 'http://www.codeandweb.com/texturepacker',
	    'version': '1.0',
	    'image': 'atlas.png',
	    'format': 'RGBA8888',
	    'size': {
	      'w': 512,
	      'h': 1024
	    },
	    'scale': '1',
	    'smartupdate': '$TexturePacker:SmartUpdate:106b7c2716c423559353f14b4413d243:ef307b0abd120798811a35db5e8606cf:cbce6b53f0f49e0bf15173c25c41f876$'
	  }
	};
	
	module.exports = atlas;


/***/ },
/* 12 */
/***/ function(module, exports) {

	var levels;
	
	levels = {
	  1: {
	    wagon: false,
	    num_cactus: 1
	  },
	  2: {
	    wagon: false,
	    num_cactus: 2
	  },
	  3: {
	    wagon: false,
	    num_cactus: 3
	  },
	  4: {
	    wagon: false,
	    num_cactus: 4
	  },
	  5: {
	    wagon: true,
	    num_cactus: 4
	  },
	  6: {
	    wagon: true,
	    num_cactus: 5
	  },
	  7: {
	    wagon: true,
	    num_cactus: 2,
	    num_tree: 1
	  },
	  8: {
	    wagon: true,
	    num_cactus: 1,
	    num_tree: 2
	  },
	  9: {
	    wagon: true,
	    num_cactus: 2,
	    num_tree: 2
	  },
	  10: {
	    wagon: true,
	    num_cactus: 3,
	    num_tree: 2
	  },
	  11: {
	    wagon: true,
	    num_cactus: 4,
	    num_tree: 2
	  },
	  12: {
	    wagon: true,
	    num_cactus: 3,
	    num_tree: 3
	  }
	};
	
	module.exports = levels;


/***/ },
/* 13 */
/***/ function(module, exports) {

	var sfx;
	
	sfx = {};
	
	module.exports = sfx;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var $window, isMobile, launch;
	
	$window = $(window);
	
	isMobile = function() {
	  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	    return true;
	  } else {
	    return false;
	  }
	};
	
	launch = function(cdn, version) {
	  var game, game_height, game_width, i, len, ref, state;
	  if (cdn == null) {
	    cdn = "/";
	  }
	  if (version == null) {
	    version = "?v=0.0.0";
	  }
	  game_width = 1088;
	  game_height = 816;
	  game = new Phaser.Game(game_width, game_height, Phaser.AUTO, 'game', 'boot', false, false, null);
	  game.cdn = cdn;
	  game.hosturl = void 0;
	  game.version = version;
	  game.debugMode = false;
	  game.debugMode = true;
	  game.enableMusic = !game.debugMode;
	  game.enableSFX = !game.debugMode;
	  game.constants = {
	    STATES: ['boot', 'preload', 'intro', 'game', 'reset'],
	    LEVELS: __webpack_require__(12),
	    SFX: __webpack_require__(13)
	  };
	  game.level = 1;
	  game.scaler = function() {
	    var $canvas, $game;
	    $game = $("#game");
	    $canvas = $("canvas");
	    $window = $(window);
	    if (!isMobile()) {
	      $game = $("#game");
	      $canvas = $("canvas");
	      $window = $(window);
	      if ($game.height() > $window.height() - 150) {
	        return $game.css("max-height", ($window.height() - 150) + "px");
	      } else {
	        return $game.css("max-height", "auto");
	      }
	    }
	  };
	  ref = game.constants.STATES;
	  for (i = 0, len = ref.length; i < len; i++) {
	    state = ref[i];
	    game.state.add(state, __webpack_require__(47)("./" + state + ".coffee"));
	  }
	  return game.state.start('boot');
	};
	
	module.exports = launch;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	var Ammo,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Ammo = (function(superClass) {
	  extend(Ammo, superClass);
	
	  function Ammo(game, game_state, player) {
	    var frame, key, x, y;
	    this.game = game;
	    this.game_state = game_state;
	    this.player = player;
	    key = 'atlas';
	    frame = 'ammo';
	    x = this.player.is_player_one ? 94 : 816;
	    y = this.game.height - 45;
	    Ammo.__super__.constructor.call(this, this.game, x, y, key, frame);
	    this.game.add.existing(this);
	    this.hide();
	    this.cropRect = this.game.add.graphics();
	    return this;
	  }
	
	  Ammo.prototype.show = function() {
	    return this.reset(this.x, this.y);
	  };
	
	  Ammo.prototype.hide = function() {
	    return this.kill();
	  };
	
	  Ammo.prototype.crop = function() {
	    var width;
	    width = this.width - this.player.num_bullets / 6 * this.width;
	    return this.drawRect(width);
	  };
	
	  Ammo.prototype.reload = function() {
	    return this.cropRect.clear();
	  };
	
	  Ammo.prototype.drawRect = function(width) {
	    this.cropRect.lineStyle(0);
	    this.cropRect.beginFill("0x000000");
	    this.cropRect.drawRect(this.x, this.y, width, this.height);
	    return this.cropRect.endFill();
	  };
	
	  return Ammo;
	
	})(Phaser.Sprite);
	
	module.exports = Ammo;


/***/ },
/* 16 */
/***/ function(module, exports) {

	var Bullet, Bullets, GUN_POS_CONFIG, SPEED,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	GUN_POS_CONFIG = {
	  high: {
	    x: 45,
	    y: 15,
	    deg: -52
	  },
	  medhigh: {
	    x: 50,
	    y: 35,
	    deg: -26
	  },
	  med: {
	    x: 55,
	    y: 46,
	    deg: 0
	  },
	  medlow: {
	    x: 50,
	    y: 75,
	    deg: 22
	  },
	  low: {
	    x: 45,
	    y: 88,
	    deg: 42
	  }
	};
	
	SPEED = 1000;
	
	Bullet = (function(superClass) {
	  extend(Bullet, superClass);
	
	  function Bullet(game, game_state, player) {
	    var frame, key;
	    this.game = game;
	    this.game_state = game_state;
	    this.player = player;
	    key = 'atlas';
	    frame = 'bullet';
	    Bullet.__super__.constructor.call(this, this.game, this.player.body.x, this.player.body.y, key, frame);
	    this.game.physics.enable(this);
	    this.time = Date.now();
	    this.body.bounce.set(1);
	    this.is_player_one = this.player.is_player_one;
	    this.outOfBoundsKill = true;
	    this.game.add.existing(this);
	    this.kill();
	    return this;
	  }
	
	  Bullet.prototype.shoot = function() {
	    var angle, gun_pos, pos, x, y;
	    gun_pos = this.player.gun_pos[this.player.gun_pos_index];
	    pos = GUN_POS_CONFIG[gun_pos];
	    x = this.is_player_one ? this.player.body.right + pos.x : this.player.body.x - pos.x;
	    y = this.player.body.y + pos.y;
	    angle = this.is_player_one ? pos.deg : 180 - pos.deg;
	    this.reset(x, y);
	    return this.game.physics.arcade.velocityFromAngle(angle, SPEED, this.body.velocity);
	  };
	
	  return Bullet;
	
	})(Phaser.Sprite);
	
	Bullets = (function(superClass) {
	  extend(Bullets, superClass);
	
	  function Bullets(game, game_state, player) {
	    var i, n, ref;
	    this.game = game;
	    this.game_state = game_state;
	    this.player = player;
	    Bullets.__super__.constructor.call(this, this.game, null, 'bullets', false, true, Phaser.Physics.Arcade.Body);
	    for (n = i = 1, ref = this.player.num_bullets; 1 <= ref ? i <= ref : i >= ref; n = 1 <= ref ? ++i : --i) {
	      this.add(new Bullet(this.game, this.game_state, this.player));
	    }
	    this.game.add.existing(this);
	  }
	
	  Bullets.prototype.shoot = function() {
	    return this.getFirstDead().shoot();
	  };
	
	  return Bullets;
	
	})(Phaser.Group);
	
	module.exports = Bullets;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var Cactus, Terrain,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Terrain = __webpack_require__(5);
	
	Cactus = (function(superClass) {
	  extend(Cactus, superClass);
	
	  function Cactus(game, game_state, x, y) {
	    this.game = game;
	    this.game_state = game_state;
	    if (x == null) {
	      x = 0;
	    }
	    if (y == null) {
	      y = 0;
	    }
	    Cactus.__super__.constructor.call(this, this.game, this.game_state, x, y, 'cactus');
	  }
	
	  return Cactus;
	
	})(Terrain);
	
	module.exports = Cactus;


/***/ },
/* 18 */
/***/ function(module, exports) {

	var Ceiling,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	module.exports = Ceiling = (function(superClass) {
	  extend(Ceiling, superClass);
	
	  function Ceiling(game, y_offset) {
	    this.game = game;
	    if (y_offset == null) {
	      y_offset = 0;
	    }
	    Ceiling.__super__.constructor.call(this, this.game, 0, y_offset);
	    this.game.physics.enable(this, Phaser.Physics.ARCADE);
	    this.body.setSize(this.game.world.width, 5, 0, 0);
	    this.body.allowGravity = false;
	    this.body.immovable = true;
	    this.game.add.existing(this);
	  }
	
	  return Ceiling;
	
	})(Phaser.Sprite);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var Ammo, Bullets, Cowboy, DELTA, FRAMERATE, PLAYER_ONE_CONTROLS, PLAYER_ONE_X, PLAYER_ONE_Y, PLAYER_TWO_CONTROLS, PLAYER_TWO_X, PLAYER_TWO_Y, SPEED, StateMachine, Text, When,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	When = __webpack_require__(46);
	
	Bullets = __webpack_require__(16);
	
	Ammo = __webpack_require__(15);
	
	Text = __webpack_require__(2);
	
	StateMachine = __webpack_require__(32);
	
	PLAYER_ONE_X = 200;
	
	PLAYER_ONE_Y = 495;
	
	PLAYER_TWO_X = 888;
	
	PLAYER_TWO_Y = 495;
	
	SPEED = 60;
	
	DELTA = 15;
	
	FRAMERATE = 7;
	
	PLAYER_ONE_CONTROLS = {
	  move_up: 'W',
	  move_down: 'S',
	  move_left: 'A',
	  move_right: 'D',
	  aim_up: 'Q',
	  aim_down: 'E',
	  shoot: 'F'
	};
	
	PLAYER_TWO_CONTROLS = {
	  move_up: 'I',
	  move_down: 'K',
	  move_left: 'J',
	  move_right: 'L',
	  aim_up: 'O',
	  aim_down: 'U',
	  shoot: 'H'
	};
	
	Cowboy = (function(superClass) {
	  extend(Cowboy, superClass);
	
	  function Cowboy(game, game_state, is_player_one) {
	    var frame, key, x, y;
	    this.game = game;
	    this.game_state = game_state;
	    this.is_player_one = is_player_one != null ? is_player_one : true;
	    key = 'atlas';
	    frame = 'cowboy/med/two';
	    x = this.is_player_one ? PLAYER_ONE_X : PLAYER_TWO_X;
	    y = this.is_player_one ? PLAYER_ONE_Y : PLAYER_TWO_Y;
	    Cowboy.__super__.constructor.call(this, this.game, x, y, key, frame);
	    this.game.physics.enable(this, Phaser.Physics.ARCADE);
	    this.width = this.body.width;
	    this.height = this.body.height;
	    this.body.setSize(45, 136, 25, 0);
	    if (this.is_player_one) {
	      this.body.setSize(45, 136, -25, 0);
	    }
	    this.body.immovable = true;
	    this.anchor.setTo(.5, 1);
	    this.scale.x = this.is_player_one ? -1 : 1;
	    this.direction = {
	      up: false,
	      down: false,
	      left: false,
	      right: false
	    };
	    this.aim = {
	      up: false,
	      down: false
	    };
	    this.time = Date.now();
	    this.moving = false;
	    this.dead = false;
	    this.input_disabled = true;
	    this.gun_pos = ['low', 'medlow', 'med', 'medhigh', 'high'];
	    this.leg_pos = ['two', 'one', 'cross'];
	    this.gun_pos_index = 2;
	    this.leg_pos_index = 1;
	    this.wins = 0;
	    this.num_bullets = 6;
	    this.bullets = new Bullets(this.game, this.game_state, this);
	    this.ammo = new Ammo(this.game, this.game_state, this);
	    this.text = new Text(this.game, this.game_state, 'got me');
	    this.setupControls();
	    this.setupAnimations();
	    this.createStateMachine();
	    this.game.add.existing(this);
	    this.kill();
	    return this;
	  }
	
	  Cowboy.prototype.runIntro = function(cb) {
	    this.intro_callback = cb;
	    this.reload();
	    this.kill();
	    this.in_intro_cutscene = true;
	    if (this.is_player_one) {
	      this.reset(-48, PLAYER_ONE_Y);
	      this.direction.right = true;
	    } else {
	      this.reset(1136, PLAYER_TWO_Y);
	      this.direction.left = true;
	    }
	    this.gun_pos_index = 2;
	    return this.moving = true;
	  };
	
	  Cowboy.prototype.update = function() {
	    var current_frame, current_time, x, y;
	    if (this.state.current !== 'dying' && (!this.input_disabled || this.in_intro_cutscene)) {
	      current_time = Date.now();
	      if (current_time - this.time > SPEED) {
	        if (this.direction.up && this.body.y > this.game_state.ceiling.y && !this.in_intro_cutscene) {
	          this.body.y -= DELTA;
	        }
	        if (this.direction.down && this.body.y < this.game_state.floor.y - this.body.height && !this.in_intro_cutscene) {
	          this.body.y += DELTA;
	        }
	        if (this.is_player_one) {
	          if (this.direction.left && this.body.x > this.game_state.left_wall_outer.body.x) {
	            this.body.x -= DELTA;
	          }
	          if (this.direction.right && this.body.right < this.game_state.left_wall.body.x) {
	            this.body.x += DELTA;
	          }
	          if (this.in_intro_cutscene && this.body.right >= PLAYER_ONE_X) {
	            this.in_intro_cutscene = false;
	            this.direction.right = false;
	          }
	        } else {
	          if (this.direction.left && this.body.x > this.game_state.right_wall.body.x) {
	            this.body.x -= DELTA;
	          }
	          if (this.direction.right && this.body.right < this.game_state.right_wall_outer.body.x) {
	            this.body.x += DELTA;
	          }
	          if (this.in_intro_cutscene && this.body.x <= PLAYER_TWO_X) {
	            this.in_intro_cutscene = false;
	            this.direction.left = false;
	            this.intro_callback();
	          }
	        }
	        this.time = current_time;
	      }
	      if (!(this.direction.up || this.direction.down || this.direction.left || this.direction.right)) {
	        this.moving = false;
	      }
	      if (this.moving && this.state.current !== 'moving') {
	        this.move();
	      }
	      if (!this.moving && this.state.current !== 'idle') {
	        return this.idle();
	      }
	    } else {
	      current_frame = this.animations.currentFrame.name;
	      if (current_frame === 'cowboy/dead/rip' && !this.text.visible) {
	        x = this.is_player_one ? this.body.right - this.text.width / 2 : this.body.x - this.text.width / 2;
	        y = this.body.y;
	        this.text.place(x, y);
	        return this.text.show();
	      }
	    }
	  };
	
	  Cowboy.prototype.enableInput = function() {
	    return this.input_disabled = false;
	  };
	
	  Cowboy.prototype.disableInput = function() {
	    return this.input_disabled = true;
	  };
	
	  Cowboy.prototype.toggleInput = function() {
	    return this.input_disabled = !this.input_disabled;
	  };
	
	  Cowboy.prototype.move = function() {
	    return this.state._move();
	  };
	
	  Cowboy.prototype.idle = function() {
	    return this.state._idle();
	  };
	
	  Cowboy.prototype.die = function() {
	    return this.state._die();
	  };
	
	  Cowboy.prototype.move_up = function() {
	    return this.direction.up = true;
	  };
	
	  Cowboy.prototype.move_left = function() {
	    return this.direction.left = true;
	  };
	
	  Cowboy.prototype.move_right = function() {
	    return this.direction.right = true;
	  };
	
	  Cowboy.prototype.move_down = function() {
	    return this.direction.down = true;
	  };
	
	  Cowboy.prototype.move_up_off = function() {
	    return this.direction.up = false;
	  };
	
	  Cowboy.prototype.move_left_off = function() {
	    return this.direction.left = false;
	  };
	
	  Cowboy.prototype.move_right_off = function() {
	    return this.direction.right = false;
	  };
	
	  Cowboy.prototype.move_down_off = function() {
	    return this.direction.down = false;
	  };
	
	  Cowboy.prototype.aim_up = function() {
	    return this.animate_aim_up();
	  };
	
	  Cowboy.prototype.aim_down = function() {
	    return this.animate_aim_down();
	  };
	
	  Cowboy.prototype.reload = function() {
	    var b, i, len, ref, results;
	    this.num_bullets = 6;
	    this.ammo.reload();
	    ref = this.bullets.children;
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      b = ref[i];
	      results.push(b.kill());
	    }
	    return results;
	  };
	
	  Cowboy.prototype.animate_aim_up = function() {
	    var current_frame, i, index, len, pos, ref;
	    if (!this.in_intro_cutscene) {
	      current_frame = this.animations.currentFrame.name;
	      if (this.gun_pos_index < this.gun_pos.length - 1) {
	        this.gun_pos_index += 1;
	      }
	      ref = this.leg_pos;
	      for (index = i = 0, len = ref.length; i < len; index = ++i) {
	        pos = ref[index];
	        this.leg_pos_index = index;
	        if (current_frame.match(pos)) {
	          break;
	        }
	      }
	      this.animations.stop();
	      this.animations.play("move-" + this.gun_pos[this.gun_pos_index]);
	      return this.animations.next(this.leg_pos_index);
	    }
	  };
	
	  Cowboy.prototype.animate_aim_down = function() {
	    var current_frame, i, index, len, pos, ref;
	    if (!this.in_intro_cutscene) {
	      current_frame = this.animations.currentFrame.name;
	      if (this.gun_pos_index > 0) {
	        this.gun_pos_index -= 1;
	      }
	      ref = this.leg_pos;
	      for (index = i = 0, len = ref.length; i < len; index = ++i) {
	        pos = ref[index];
	        this.leg_pos_index = index;
	        if (current_frame.match(pos)) {
	          break;
	        }
	      }
	      this.animations.stop();
	      this.animations.play("move-" + this.gun_pos[this.gun_pos_index]);
	      return this.animations.next(this.leg_pos_index);
	    }
	  };
	
	  Cowboy.prototype.shoot = function() {
	    if (this.num_bullets > 0 && !this.input_disabled) {
	      this.num_bullets -= 1;
	      this.ammo.crop();
	      return this.bullets.shoot();
	    }
	  };
	
	  Cowboy.prototype.setupControls = function() {
	    var controls;
	    controls = this.is_player_one ? PLAYER_ONE_CONTROLS : PLAYER_TWO_CONTROLS;
	    return _.each(controls, (function(_this) {
	      return function(key, action) {
	        var input;
	        input = _this.game_state.input.keyboard.addKey(Phaser.Keyboard[key]);
	        input.onDown.add(function() {
	          return _this[action]();
	        });
	        input.onDown.add(function() {
	          if (action.match('move')) {
	            return _this.moving = true;
	          }
	        });
	        return input.onUp.add(function() {
	          if (action.match('move')) {
	            return _this[action + "_off"]();
	          }
	        });
	      };
	    })(this));
	  };
	
	  Cowboy.prototype.setupAnimations = function() {
	    this.animations.add('die', ['cowboy/dead/hit', 'cowboy/dead/hit', 'cowboy/dead/hit', 'cowboy/dead/hit', 'cowboy/dead/hit', 'cowboy/dead/hit', 'cowboy/dead/rip', 'cowboy/dead/rip', 'cowboy/dead/rip'], FRAMERATE, false);
	    this.animations.add('move-high', ['cowboy/high/two', 'cowboy/high/one', 'cowboy/high/cross', 'cowboy/high/one'], FRAMERATE, true);
	    this.animations.add('move-low', ['cowboy/low/two', 'cowboy/low/one', 'cowboy/low/cross', 'cowboy/low/one'], FRAMERATE, true);
	    this.animations.add('move-medhigh', ['cowboy/medhigh/two', 'cowboy/medhigh/one', 'cowboy/medhigh/cross', 'cowboy/medhigh/one'], FRAMERATE, true);
	    this.animations.add('move-medlow', ['cowboy/medlow/two', 'cowboy/medlow/one', 'cowboy/medlow/cross', 'cowboy/medlow/one'], FRAMERATE, true);
	    return this.animations.add('move-med', ['cowboy/med/two', 'cowboy/med/one', 'cowboy/med/cross', 'cowboy/med/one'], FRAMERATE, true);
	  };
	
	  Cowboy.prototype.createStateMachine = function() {
	    return this.state = StateMachine.create({
	      initial: '_idle',
	      events: [
	        {
	          name: '_idle',
	          from: '*',
	          to: 'idling'
	        }, {
	          name: '_move',
	          from: '*',
	          to: 'moving'
	        }, {
	          name: '_die',
	          from: '*',
	          to: 'dying'
	        }
	      ],
	      callbacks: {
	        on_idle: (function(_this) {
	          return function(event, from, to) {
	            return _this.animations.stop(null, true);
	          };
	        })(this),
	        on_move: (function(_this) {
	          return function(event, from, to) {
	            return _this.play("move-" + _this.gun_pos[_this.gun_pos_index]);
	          };
	        })(this),
	        on_die: (function(_this) {
	          return function(event, from, to) {
	            return _this.play("die");
	          };
	        })(this)
	      }
	    });
	  };
	
	  return Cowboy;
	
	})(Phaser.Sprite);
	
	module.exports = Cowboy;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	var Floor,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	module.exports = Floor = (function(superClass) {
	  extend(Floor, superClass);
	
	  function Floor(game, y_offset) {
	    this.game = game;
	    if (y_offset == null) {
	      y_offset = 0;
	    }
	    Floor.__super__.constructor.call(this, this.game, 0, this.game.height + y_offset);
	    this.game.physics.enable(this, Phaser.Physics.ARCADE);
	    this.body.setSize(this.game.world.width, 5, 0, 0);
	    this.body.allowGravity = false;
	    this.body.immovable = true;
	    this.game.add.existing(this);
	  }
	
	  return Floor;
	
	})(Phaser.Sprite);


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var Digit, Integer, Text,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Text = __webpack_require__(2);
	
	Digit = (function(superClass) {
	  extend(Digit, superClass);
	
	  function Digit(game, game_state, frame, x, y) {
	    this.game = game;
	    this.game_state = game_state;
	    if (x == null) {
	      x = 0;
	    }
	    if (y == null) {
	      y = 0;
	    }
	    Digit.__super__.constructor.call(this, this.game, this.game_state, frame, x, y);
	  }
	
	  return Digit;
	
	})(Text);
	
	Integer = (function() {
	  function Integer(game, game_state, start_value, x1, y1) {
	    var d, i, j;
	    this.game = game;
	    this.game_state = game_state;
	    this.start_value = start_value != null ? start_value : 0;
	    this.x = x1 != null ? x1 : 0;
	    this.y = y1 != null ? y1 : 0;
	    this.value = this.start_value;
	    this.left_digits = {};
	    for (d = i = 1; i <= 9; d = ++i) {
	      this.left_digits[d] = new Digit(this.game, this.game_state, d, this.x, this.y);
	    }
	    this.right_digits = {};
	    for (d = j = 0; j <= 9; d = ++j) {
	      this.right_digits[d] = new Digit(this.game, this.game_state, d, this.x + 32, this.y);
	    }
	    this.left_digit = void 0;
	    this.right_digit = void 0;
	    this.hidden = true;
	    this.setValue();
	  }
	
	  Integer.prototype.hideAllLeft = function() {
	    var d, i, results;
	    results = [];
	    for (d = i = 0; i <= 9; d = ++i) {
	      results.push(this.left_digits[d].hide());
	    }
	    return results;
	  };
	
	  Integer.prototype.hideAllRight = function() {
	    var d, i, results;
	    results = [];
	    for (d = i = 0; i <= 9; d = ++i) {
	      results.push(this.right_digits[d].hide());
	    }
	    return results;
	  };
	
	  Integer.prototype.hideLeft = function() {
	    if (this.left_digit) {
	      return this.left_digit.hide();
	    }
	  };
	
	  Integer.prototype.hideRight = function() {
	    return this.right_digit.hide();
	  };
	
	  Integer.prototype.showLeft = function() {
	    if (this.left_digit) {
	      return this.left_digit.show();
	    }
	  };
	
	  Integer.prototype.showRight = function() {
	    return this.right_digit.show();
	  };
	
	  Integer.prototype.hide = function() {
	    this.hidden = true;
	    this.hideLeft();
	    return this.hideRight();
	  };
	
	  Integer.prototype.show = function() {
	    this.hidden = false;
	    this.showLeft();
	    return this.showRight();
	  };
	
	  Integer.prototype.setValue = function(val) {
	    if (val == null) {
	      val = this.start_value;
	    }
	    this.value = val;
	    if (this.left_digit) {
	      this.left_digit.hide();
	    }
	    if (this.right_digit) {
	      this.right_digit.hide();
	    }
	    if (this.value < 0) {
	      this.left_digit = this.undefined;
	      this.right_digit = this.right_digits[0];
	    } else if (this.value < 10) {
	      this.left_digit = this.undefined;
	      this.right_digit = this.right_digits[String(this.value).split('')[0]];
	    } else {
	      this.left_digit = this.left_digits[String(this.value).split('')[0]];
	      this.right_digit = this.right_digits[String(this.value).split('')[1]];
	    }
	    if (!this.hidden) {
	      return this.show();
	    }
	  };
	
	  Integer.prototype.resetValue = function() {
	    return this.setValue(this.start_value);
	  };
	
	  Integer.prototype.inc = function(n) {
	    if (n == null) {
	      n = 1;
	    }
	    return this.increment(n);
	  };
	
	  Integer.prototype.dec = function(n) {
	    if (n == null) {
	      n = 1;
	    }
	    return this.decrement(n);
	  };
	
	  Integer.prototype.increment = function(n) {
	    if (n == null) {
	      n = 1;
	    }
	    return this.setValue(this.value + n);
	  };
	
	  Integer.prototype.decrement = function(n) {
	    if (n == null) {
	      n = 1;
	    }
	    return this.setValue(this.value - n);
	  };
	
	  return Integer;
	
	})();
	
	module.exports = Integer;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var CACTUS_POSITIONS, Cactus, POSITIONS, TREE_POSITIONS, TerrainGroup, Tree,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Cactus = __webpack_require__(17);
	
	Tree = __webpack_require__(23);
	
	CACTUS_POSITIONS = {
	  top_left: {
	    x: 328,
	    y: 100
	  },
	  top_right: {
	    x: 714,
	    y: 100
	  },
	  center_left: {
	    x: 436,
	    y: 350
	  },
	  center: {
	    x: 528,
	    y: 350
	  },
	  center_right: {
	    x: 614,
	    y: 350
	  },
	  bottom_left: {
	    x: 328,
	    y: 600
	  },
	  bottom_right: {
	    x: 714,
	    y: 600
	  }
	};
	
	TREE_POSITIONS = {
	  top_left: {
	    x: 328,
	    y: 150
	  },
	  top_right: {
	    x: 714,
	    y: 150
	  },
	  bottom_left: {
	    x: 328,
	    y: 550
	  },
	  bottom_right: {
	    x: 714,
	    y: 550
	  }
	};
	
	POSITIONS = ["top_left", "top_right", "bottom_left", "bottom_right"];
	
	TerrainGroup = (function(superClass) {
	  extend(TerrainGroup, superClass);
	
	  function TerrainGroup(game, game_state, level_data1) {
	    this.game = game;
	    this.game_state = game_state;
	    this.level_data = level_data1 != null ? level_data1 : {};
	    TerrainGroup.__super__.constructor.call(this, this.game, null, 'TerrainGroup');
	    this.build();
	    this.game.add.existing(this);
	  }
	
	  TerrainGroup.prototype.reset = function() {
	    return this.removeChildren();
	  };
	
	  TerrainGroup.prototype.build = function(level_data) {
	    var cactus, i, j, ref, ref1, results, tree;
	    if (level_data == null) {
	      level_data = this.level_data;
	    }
	    this.level_data = level_data;
	    this.is_wagon = this.level_data.wagon;
	    this.num_cactus = this.level_data.num_cactus;
	    this.num_tree = this.level_data.num_tree;
	    this.positions = _.shuffle(POSITIONS);
	    this.cactus_positions = this.is_wagon ? ['center_left', 'center_right'] : ['center'];
	    for (cactus = i = 0, ref = this.num_cactus; 0 <= ref ? i < ref : i > ref; cactus = 0 <= ref ? ++i : --i) {
	      this.addCactus();
	    }
	    results = [];
	    for (tree = j = 0, ref1 = this.num_tree; 0 <= ref1 ? j < ref1 : j > ref1; tree = 0 <= ref1 ? ++j : --j) {
	      results.push(this.addTree());
	    }
	    return results;
	  };
	
	  TerrainGroup.prototype.addCactus = function() {
	    var pos;
	    pos = this.getTerrainPosition('cactus');
	    return this.add(new Cactus(this.game, this.game_state, pos.x, pos.y));
	  };
	
	  TerrainGroup.prototype.addTree = function() {
	    var pos;
	    pos = this.getTerrainPosition('tree');
	    return this.add(new Tree(this.game, this.game_state, pos.x, pos.y));
	  };
	
	  TerrainGroup.prototype.getTerrainPosition = function(key) {
	    var pos, pos_key;
	    pos = void 0;
	    switch (key) {
	      case 'cactus':
	        if (this.cactus_positions.length > 0) {
	          pos_key = this.cactus_positions.pop();
	          pos = CACTUS_POSITIONS[pos_key];
	        } else {
	          pos_key = this.positions.pop();
	          pos = CACTUS_POSITIONS[pos_key];
	        }
	        break;
	      case 'tree':
	        pos_key = this.positions.pop();
	        pos = TREE_POSITIONS[pos_key];
	    }
	    return pos;
	  };
	
	  return TerrainGroup;
	
	})(Phaser.Group);
	
	module.exports = TerrainGroup;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Terrain, Tree,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Terrain = __webpack_require__(5);
	
	Tree = (function(superClass) {
	  extend(Tree, superClass);
	
	  function Tree(game, game_state, x, y) {
	    this.game = game;
	    this.game_state = game_state;
	    if (x == null) {
	      x = 0;
	    }
	    if (y == null) {
	      y = 0;
	    }
	    Tree.__super__.constructor.call(this, this.game, this.game_state, x, y, 'tree');
	  }
	
	  return Tree;
	
	})(Terrain);
	
	module.exports = Tree;


/***/ },
/* 24 */
/***/ function(module, exports) {

	var DELTA, SPEED, Wagon,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	SPEED = 300;
	
	DELTA = 15;
	
	Wagon = (function(superClass) {
	  extend(Wagon, superClass);
	
	  function Wagon(game, game_state) {
	    var frame, key;
	    this.game = game;
	    this.game_state = game_state;
	    key = 'atlas';
	    frame = 'wagon';
	    Wagon.__super__.constructor.call(this, this.game, 500, 675, key, frame);
	    this.game.physics.enable(this, Phaser.Physics.ARCADE);
	    this.body.immovable = true;
	    this.rolling = false;
	    this.direction = 'up';
	    this.time = Date.now();
	    this.game.add.existing(this);
	    this.kill();
	    return this;
	  }
	
	  Wagon.prototype.revive = function() {
	    return this.reset(500, 675);
	  };
	
	  Wagon.prototype.roll = function() {
	    return this.rolling = true;
	  };
	
	  Wagon.prototype.stop = function() {
	    return this.rolling = false;
	  };
	
	  Wagon.prototype.start = function() {
	    this.revive();
	    return this.roll();
	  };
	
	  Wagon.prototype.update = function() {
	    var current_time, sign;
	    current_time = Date.now();
	    if (this.rolling && (current_time - this.time) > SPEED) {
	      if (this.direction === 'down' && this.body.y >= 675) {
	        this.direction = 'up';
	      }
	      if (this.direction === 'up' && this.body.y <= 45) {
	        this.direction = 'down';
	      }
	      sign = this.direction === 'up' ? -1 : 1;
	      this.body.y += sign * DELTA;
	      return this.time = current_time;
	    }
	  };
	
	  return Wagon;
	
	})(Phaser.Sprite);
	
	module.exports = Wagon;


/***/ },
/* 25 */
/***/ function(module, exports) {

	var Wall,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	module.exports = Wall = (function(superClass) {
	  extend(Wall, superClass);
	
	  function Wall(game, x_offset) {
	    this.game = game;
	    if (x_offset == null) {
	      x_offset = 0;
	    }
	    Wall.__super__.constructor.call(this, this.game, x_offset, 0);
	    this.game.physics.enable(this, Phaser.Physics.ARCADE);
	    this.body.setSize(1, this.game.world.height, 0, 0);
	    this.body.allowGravity = false;
	    this.body.immovable = true;
	    this.game.add.existing(this);
	  }
	
	  return Wall;
	
	})(Phaser.Sprite);


/***/ },
/* 26 */
/***/ function(module, exports) {

	var Boot;
	
	Boot = (function() {
	  function Boot() {}
	
	  Boot.prototype.create = function() {
	    this.game.stage.backgroundColor = '#000000';
	    this.scale.pageAlignHorizontally = true;
	    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    return this.state.start('preload');
	  };
	
	  Boot.prototype.preload = function() {
	    return this.game.scaler();
	  };
	
	  return Boot;
	
	})();
	
	module.exports = Boot;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var Ceiling, Cowboy, Floor, Game, Integer, NO_AMMO_COUNTDOWN, STARTING_TIME, TerrainGroup, Text, WALL_OFFSET, Wagon, Wall;
	
	Floor = __webpack_require__(20);
	
	Ceiling = __webpack_require__(18);
	
	Wall = __webpack_require__(25);
	
	WALL_OFFSET = 275;
	
	Text = __webpack_require__(2);
	
	Integer = __webpack_require__(21);
	
	Cowboy = __webpack_require__(19);
	
	TerrainGroup = __webpack_require__(22);
	
	Wagon = __webpack_require__(24);
	
	STARTING_TIME = 70;
	
	NO_AMMO_COUNTDOWN = 10;
	
	Game = (function() {
	  function Game() {}
	
	  Game.prototype.create = function() {
	    this.ceiling = new Ceiling(this.game, 45);
	    this.floor = new Floor(this.game, -45);
	    this.left_wall_outer = new Wall(this.game, 92);
	    this.left_wall = new Wall(this.game, this.game.world.width / 2 - WALL_OFFSET);
	    this.right_wall_outer = new Wall(this.game, 996);
	    this.right_wall = new Wall(this.game, this.game.world.width / 2 + WALL_OFFSET);
	    this.text_gun_fight = new Text(this.game, this, 'gun fight', 408, 250);
	    this.text_get_ready = new Text(this.game, this, 'get ready', 408, 250);
	    this.text_insert_coin = new Text(this.game, this, 'insert coin', 700, 771);
	    this.text_draw = new Text(this.game, this, 'draw', 466, 250);
	    this.text_game = new Text(this.game, this, 'game', 370, 5);
	    this.text_over = new Text(this.game, this, 'over', 599, 5);
	    this.hud_score_player_one = new Integer(this.game, this, 0, 200, 5);
	    this.hud_score_player_two = new Integer(this.game, this, 0, 830, 5);
	    this.hud_timer = new Integer(this.game, this, 70, 644, 5);
	    this.hud_countdown = new Integer(this.game, this, 10, 400, 5);
	    this.timer = this.game.time.create(false);
	    this.countdown = this.game.time.create(false);
	    this.player_one = new Cowboy(this.game, this);
	    this.player_two = new Cowboy(this.game, this, false);
	    this.bullets = [this.player_one.bullets, this.player_two.bullets];
	    this.walls = [this.left_wall, this.right_wall];
	    this.surfaces = [this.ceiling, this.floor];
	    this.players = [this.player_one, this.player_two];
	    this.wagon = new Wagon(this.game, this.game_state);
	    this.terrain = void 0;
	    return this.start();
	  };
	
	  Game.prototype.start = function() {
	    var i, len, player, ref;
	    this.setupLevel();
	    this.hud_timer.show();
	    ref = this.players;
	    for (i = 0, len = ref.length; i < len; i++) {
	      player = ref[i];
	      player.ammo.show();
	    }
	    this.text_get_ready.show();
	    return this.runIntro((function(_this) {
	      return function() {
	        _this.text_get_ready.hide();
	        _this.text_draw.show();
	        return setTimeout(function() {
	          var j, len1, ref1;
	          _this.text_draw.hide();
	          ref1 = _this.players;
	          for (j = 0, len1 = ref1.length; j < len1; j++) {
	            player = ref1[j];
	            player.enableInput();
	          }
	          _this.game.time.events.loop(1000, _this.updateTimer, _this).autoDestroy = true;
	          _this.game.time.events.loop(1000, _this.updateCountdown, _this).autoDestroy = true;
	          _this.timer.start();
	          return _this.countdown.start();
	        }, 700);
	      };
	    })(this));
	  };
	
	  Game.prototype.update = function() {
	    this.game.physics.arcade.collide(this.bullets, this.surfaces);
	    this.game.physics.arcade.collide(this.bullets, this.players, (function(_this) {
	      return function(player, bullet) {
	        _this.player_one.disableInput();
	        _this.player_two.disableInput();
	        _this.player_one.bullets.forEachAlive(function(b) {
	          return b.kill();
	        });
	        _this.player_two.bullets.forEachAlive(function(b) {
	          return b.kill();
	        });
	        bullet.player.idle();
	        bullet.player.wins += 1;
	        if (bullet.player.is_player_one) {
	          _this.hud_score_player_one.inc();
	        } else {
	          _this.hud_score_player_two.inc();
	        }
	        _this.game.level += 1;
	        player.die();
	        return setTimeout(function() {
	          if (!_this.game_over) {
	            return _this.nextLevel();
	          }
	        }, 2000);
	      };
	    })(this));
	    this.game.physics.arcade.collide(this.bullets, this.terrain, (function(_this) {
	      return function(bullet, terrain) {
	        var collision_y;
	        collision_y = bullet.y + bullet.height;
	        bullet.kill();
	        return terrain.deform(collision_y);
	      };
	    })(this));
	    return this.game.physics.arcade.collide(this.bullets, this.wagon, (function(_this) {
	      return function(wagon, bullet) {
	        return bullet.kill();
	      };
	    })(this));
	  };
	
	  Game.prototype.render = function() {};
	
	  Game.prototype.updateTimer = function() {
	    if (this.hud_timer.value > 0) {
	      this.hud_timer.dec();
	    }
	    if (this.hud_timer.value === 0) {
	      return this.gameOver();
	    }
	  };
	
	  Game.prototype.updateCountdown = function() {
	    if (!this.game_over) {
	      if (this.player_one.num_bullets === 0 || this.player_two.num_bullets === 0) {
	        this.hud_countdown.show();
	        if (this.hud_countdown.value > 0) {
	          this.hud_countdown.dec();
	        }
	        if (this.hud_countdown.value === 0) {
	          this.nextLevel();
	        }
	      }
	      if (this.player_one.num_bullets === 0 && this.player_two.num_bullets === 0) {
	        return this.nextLevel();
	      }
	    }
	  };
	
	  Game.prototype.setupLevel = function() {
	    var level, level_num;
	    level_num = this.game.level;
	    level = this.game.constants.LEVELS[level_num];
	    if (this.terrain) {
	      this.terrain.destroy();
	    }
	    this.terrain = new TerrainGroup(this.game, this, level);
	    this.showHud();
	    if (level.wagon) {
	      return this.wagon.start();
	    }
	  };
	
	  Game.prototype.nextLevel = function() {
	    var i, len, levels_length, player, ref;
	    levels_length = Object.keys(this.game.constants.LEVELS).length;
	    this.game.level += levels_length > this.game.level ? 1 : 0;
	    ref = this.players;
	    for (i = 0, len = ref.length; i < len; i++) {
	      player = ref[i];
	      player.text.hide();
	      player.reload();
	      player.idle();
	      player.disableInput();
	    }
	    this.hud_countdown.hide();
	    this.hud_countdown.resetValue();
	    this.setupLevel();
	    this.text_get_ready.show();
	    return this.runIntro((function(_this) {
	      return function() {
	        _this.text_get_ready.hide();
	        _this.text_draw.show();
	        return setTimeout(function() {
	          var j, len1, ref1, results;
	          _this.text_draw.hide();
	          ref1 = _this.players;
	          results = [];
	          for (j = 0, len1 = ref1.length; j < len1; j++) {
	            player = ref1[j];
	            results.push(player.enableInput());
	          }
	          return results;
	        }, 700);
	      };
	    })(this));
	  };
	
	  Game.prototype.gameOver = function() {
	    var i, len, player, ref;
	    this.game_over = true;
	    this.hideHud();
	    this.terrain.destroy();
	    this.wagon.destoy();
	    ref = this.players;
	    for (i = 0, len = ref.length; i < len; i++) {
	      player = ref[i];
	      player.ammo.destroy();
	      player.destroy();
	    }
	    this.text_game.show();
	    return this.text_over.show();
	  };
	
	  Game.prototype.runIntro = function(cb) {
	    var i, len, player, ref, results;
	    ref = this.players;
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      player = ref[i];
	      results.push(player.runIntro(cb));
	    }
	    return results;
	  };
	
	  Game.prototype.showHud = function() {
	    this.hud_score_player_one.show();
	    this.hud_score_player_two.show();
	    return this.hud_timer.show();
	  };
	
	  Game.prototype.hideHud = function() {
	    var i, len, player, ref, results;
	    this.hud_timer.hide();
	    this.hud_countdown.hide();
	    ref = this.players;
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      player = ref[i];
	      results.push(player.text.hide());
	    }
	    return results;
	  };
	
	  return Game;
	
	})();
	
	module.exports = Game;


/***/ },
/* 28 */
/***/ function(module, exports) {

	var Intro;
	
	Intro = (function() {
	  function Intro() {}
	
	  Intro.prototype.create = function() {
	    return console.log('intro');
	  };
	
	  Intro.prototype.start = function() {};
	
	  Intro.prototype.update = function() {};
	
	  return Intro;
	
	})();
	
	module.exports = Intro;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var Preload;
	
	Preload = (function() {
	  function Preload() {}
	
	  Preload.prototype.preload = function() {
	    var CDN, atlas_data, key, texture_url;
	    if (this.game.cdn !== '/') {
	      this.load.crossOrigin = this.game.hosturl;
	    }
	    CDN = this.game.cdn;
	    key = 'atlas';
	    texture_url = CDN + "images/atlas.png";
	    atlas_data = __webpack_require__(11);
	    this.load.atlasJSONHash(key, texture_url, null, atlas_data);
	    return _.each(this.game.constants.SFX, (function(_this) {
	      return function(sfx) {
	        var asset;
	        asset = _this.load.audio(sfx, [CDN + "audio/" + sfx + ".mp3" + _this.game.version, CDN + "audio/" + sfx + ".ogg" + _this.game.version]);
	        if (_this.game.cdn !== '/') {
	          return asset.crossOrigin = _this.load.crossOrigin;
	        }
	      };
	    })(this));
	  };
	
	  Preload.prototype.update = function() {
	    if (this.game.debugMode) {
	      return this.state.start('game');
	    } else {
	      return this.state.start('intro');
	    }
	  };
	
	  return Preload;
	
	})();
	
	module.exports = Preload;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var LaunchGame;
	
	LaunchGame = __webpack_require__(14);
	
	$(document).ready(function() {
	  console.log('all ready');
	  return LaunchGame();
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*
	
	  Javascript State Machine Library - https://github.com/jakesgordon/javascript-state-machine
	
	  Copyright (c) 2012, 2013, 2014, 2015, Jake Gordon and contributors
	  Released under the MIT license - https://github.com/jakesgordon/javascript-state-machine/blob/master/LICENSE
	
	*/
	
	(function () {
	
	  var StateMachine = {
	
	    //---------------------------------------------------------------------------
	
	    VERSION: "2.3.5",
	
	    //---------------------------------------------------------------------------
	
	    Result: {
	      SUCCEEDED:    1, // the event transitioned successfully from one state to another
	      NOTRANSITION: 2, // the event was successfull but no state transition was necessary
	      CANCELLED:    3, // the event was cancelled by the caller in a beforeEvent callback
	      PENDING:      4  // the event is asynchronous and the caller is in control of when the transition occurs
	    },
	
	    Error: {
	      INVALID_TRANSITION: 100, // caller tried to fire an event that was innapropriate in the current state
	      PENDING_TRANSITION: 200, // caller tried to fire an event while an async transition was still pending
	      INVALID_CALLBACK:   300 // caller provided callback function threw an exception
	    },
	
	    WILDCARD: '*',
	    ASYNC: 'async',
	
	    //---------------------------------------------------------------------------
	
	    create: function(cfg, target) {
	
	      var initial      = (typeof cfg.initial == 'string') ? { state: cfg.initial } : cfg.initial; // allow for a simple string, or an object with { state: 'foo', event: 'setup', defer: true|false }
	      var terminal     = cfg.terminal || cfg['final'];
	      var fsm          = target || cfg.target  || {};
	      var events       = cfg.events || [];
	      var callbacks    = cfg.callbacks || {};
	      var map          = {}; // track state transitions allowed for an event { event: { from: [ to ] } }
	      var transitions  = {}; // track events allowed from a state            { state: [ event ] }
	
	      var add = function(e) {
	        var from = (e.from instanceof Array) ? e.from : (e.from ? [e.from] : [StateMachine.WILDCARD]); // allow 'wildcard' transition if 'from' is not specified
	        map[e.name] = map[e.name] || {};
	        for (var n = 0 ; n < from.length ; n++) {
	          transitions[from[n]] = transitions[from[n]] || [];
	          transitions[from[n]].push(e.name);
	
	          map[e.name][from[n]] = e.to || from[n]; // allow no-op transition if 'to' is not specified
	        }
	      };
	
	      if (initial) {
	        initial.event = initial.event || 'startup';
	        add({ name: initial.event, from: 'none', to: initial.state });
	      }
	
	      for(var n = 0 ; n < events.length ; n++)
	        add(events[n]);
	
	      for(var name in map) {
	        if (map.hasOwnProperty(name))
	          fsm[name] = StateMachine.buildEvent(name, map[name]);
	      }
	
	      for(var name in callbacks) {
	        if (callbacks.hasOwnProperty(name))
	          fsm[name] = callbacks[name]
	      }
	
	      fsm.current     = 'none';
	      fsm.is          = function(state) { return (state instanceof Array) ? (state.indexOf(this.current) >= 0) : (this.current === state); };
	      fsm.can         = function(event) { return !this.transition && (map[event].hasOwnProperty(this.current) || map[event].hasOwnProperty(StateMachine.WILDCARD)); }
	      fsm.cannot      = function(event) { return !this.can(event); };
	      fsm.transitions = function()      { return transitions[this.current]; };
	      fsm.isFinished  = function()      { return this.is(terminal); };
	      fsm.error       = cfg.error || function(name, from, to, args, error, msg, e) { throw e || msg; }; // default behavior when something unexpected happens is to throw an exception, but caller can override this behavior if desired (see github issue #3 and #17)
	
	      if (initial && !initial.defer)
	        fsm[initial.event]();
	
	      return fsm;
	
	    },
	
	    //===========================================================================
	
	    doCallback: function(fsm, func, name, from, to, args) {
	      if (func) {
	        try {
	          return func.apply(fsm, [name, from, to].concat(args));
	        }
	        catch(e) {
	          return fsm.error(name, from, to, args, StateMachine.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", e);
	        }
	      }
	    },
	
	    beforeAnyEvent:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onbeforeevent'],                       name, from, to, args); },
	    afterAnyEvent:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onafterevent'] || fsm['onevent'],      name, from, to, args); },
	    leaveAnyState:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onleavestate'],                        name, from, to, args); },
	    enterAnyState:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onenterstate'] || fsm['onstate'],      name, from, to, args); },
	    changeState:     function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onchangestate'],                       name, from, to, args); },
	
	    beforeThisEvent: function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onbefore' + name],                     name, from, to, args); },
	    afterThisEvent:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onafter'  + name] || fsm['on' + name], name, from, to, args); },
	    leaveThisState:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onleave'  + from],                     name, from, to, args); },
	    enterThisState:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onenter'  + to]   || fsm['on' + to],   name, from, to, args); },
	
	    beforeEvent: function(fsm, name, from, to, args) {
	      if ((false === StateMachine.beforeThisEvent(fsm, name, from, to, args)) ||
	          (false === StateMachine.beforeAnyEvent( fsm, name, from, to, args)))
	        return false;
	    },
	
	    afterEvent: function(fsm, name, from, to, args) {
	      StateMachine.afterThisEvent(fsm, name, from, to, args);
	      StateMachine.afterAnyEvent( fsm, name, from, to, args);
	    },
	
	    leaveState: function(fsm, name, from, to, args) {
	      var specific = StateMachine.leaveThisState(fsm, name, from, to, args),
	          general  = StateMachine.leaveAnyState( fsm, name, from, to, args);
	      if ((false === specific) || (false === general))
	        return false;
	      else if ((StateMachine.ASYNC === specific) || (StateMachine.ASYNC === general))
	        return StateMachine.ASYNC;
	    },
	
	    enterState: function(fsm, name, from, to, args) {
	      StateMachine.enterThisState(fsm, name, from, to, args);
	      StateMachine.enterAnyState( fsm, name, from, to, args);
	    },
	
	    //===========================================================================
	
	    buildEvent: function(name, map) {
	      return function() {
	
	        var from  = this.current;
	        var to    = map[from] || map[StateMachine.WILDCARD] || from;
	        var args  = Array.prototype.slice.call(arguments); // turn arguments into pure array
	
	        if (this.transition)
	          return this.error(name, from, to, args, StateMachine.Error.PENDING_TRANSITION, "event " + name + " inappropriate because previous transition did not complete");
	
	        if (this.cannot(name))
	          return this.error(name, from, to, args, StateMachine.Error.INVALID_TRANSITION, "event " + name + " inappropriate in current state " + this.current);
	
	        if (false === StateMachine.beforeEvent(this, name, from, to, args))
	          return StateMachine.Result.CANCELLED;
	
	        if (from === to) {
	          StateMachine.afterEvent(this, name, from, to, args);
	          return StateMachine.Result.NOTRANSITION;
	        }
	
	        // prepare a transition method for use EITHER lower down, or by caller if they want an async transition (indicated by an ASYNC return value from leaveState)
	        var fsm = this;
	        this.transition = function() {
	          fsm.transition = null; // this method should only ever be called once
	          fsm.current = to;
	          StateMachine.enterState( fsm, name, from, to, args);
	          StateMachine.changeState(fsm, name, from, to, args);
	          StateMachine.afterEvent( fsm, name, from, to, args);
	          return StateMachine.Result.SUCCEEDED;
	        };
	        this.transition.cancel = function() { // provide a way for caller to cancel async transition if desired (issue #22)
	          fsm.transition = null;
	          StateMachine.afterEvent(fsm, name, from, to, args);
	        }
	
	        var leave = StateMachine.leaveState(this, name, from, to, args);
	        if (false === leave) {
	          this.transition = null;
	          return StateMachine.Result.CANCELLED;
	        }
	        else if (StateMachine.ASYNC === leave) {
	          return StateMachine.Result.PENDING;
	        }
	        else {
	          if (this.transition) // need to check in case user manually called transition() but forgot to return StateMachine.ASYNC
	            return this.transition();
	        }
	
	      };
	    }
	
	  }; // StateMachine
	
	  //===========================================================================
	
	  //======
	  // NODE
	  //======
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = StateMachine;
	    }
	    exports.StateMachine = StateMachine;
	  }
	  //============
	  // AMD/REQUIRE
	  //============
	  else if (typeof define === 'function' && define.amd) {
	    define(function(require) { return StateMachine; });
	  }
	  //========
	  // BROWSER
	  //========
	  else if (typeof window !== 'undefined') {
	    window.StateMachine = StateMachine;
	  }
	  //===========
	  // WEB WORKER
	  //===========
	  else if (typeof self !== 'undefined') {
	    self.StateMachine = StateMachine;
	  }
	
	}());


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
		var makePromise = __webpack_require__(45);
		var Scheduler = __webpack_require__(34);
		var async = __webpack_require__(3).asap;
	
		return makePromise({
			scheduler: new Scheduler(async)
		});
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(1));


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		// Credit to Twisol (https://github.com/Twisol) for suggesting
		// this type of extensible queue + trampoline approach for next-tick conflation.
	
		/**
		 * Async task scheduler
		 * @param {function} async function to schedule a single async function
		 * @constructor
		 */
		function Scheduler(async) {
			this._async = async;
			this._running = false;
	
			this._queue = this;
			this._queueLen = 0;
			this._afterQueue = {};
			this._afterQueueLen = 0;
	
			var self = this;
			this.drain = function() {
				self._drain();
			};
		}
	
		/**
		 * Enqueue a task
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.enqueue = function(task) {
			this._queue[this._queueLen++] = task;
			this.run();
		};
	
		/**
		 * Enqueue a task to run after the main task queue
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.afterQueue = function(task) {
			this._afterQueue[this._afterQueueLen++] = task;
			this.run();
		};
	
		Scheduler.prototype.run = function() {
			if (!this._running) {
				this._running = true;
				this._async(this.drain);
			}
		};
	
		/**
		 * Drain the handler queue entirely, and then the after queue
		 */
		Scheduler.prototype._drain = function() {
			var i = 0;
			for (; i < this._queueLen; ++i) {
				this._queue[i].run();
				this._queue[i] = void 0;
			}
	
			this._queueLen = 0;
			this._running = false;
	
			for (i = 0; i < this._afterQueueLen; ++i) {
				this._afterQueue[i].run();
				this._afterQueue[i] = void 0;
			}
	
			this._afterQueueLen = 0;
		};
	
		return Scheduler;
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
	
		var state = __webpack_require__(9);
		var applier = __webpack_require__(8);
	
		return function array(Promise) {
	
			var applyFold = applier(Promise);
			var toPromise = Promise.resolve;
			var all = Promise.all;
	
			var ar = Array.prototype.reduce;
			var arr = Array.prototype.reduceRight;
			var slice = Array.prototype.slice;
	
			// Additional array combinators
	
			Promise.any = any;
			Promise.some = some;
			Promise.settle = settle;
	
			Promise.map = map;
			Promise.filter = filter;
			Promise.reduce = reduce;
			Promise.reduceRight = reduceRight;
	
			/**
			 * When this promise fulfills with an array, do
			 * onFulfilled.apply(void 0, array)
			 * @param {function} onFulfilled function to apply
			 * @returns {Promise} promise for the result of applying onFulfilled
			 */
			Promise.prototype.spread = function(onFulfilled) {
				return this.then(all).then(function(array) {
					return onFulfilled.apply(this, array);
				});
			};
	
			return Promise;
	
			/**
			 * One-winner competitive race.
			 * Return a promise that will fulfill when one of the promises
			 * in the input array fulfills, or will reject when all promises
			 * have rejected.
			 * @param {array} promises
			 * @returns {Promise} promise for the first fulfilled value
			 */
			function any(promises) {
				var p = Promise._defer();
				var resolver = p._handler;
				var l = promises.length>>>0;
	
				var pending = l;
				var errors = [];
	
				for (var h, x, i = 0; i < l; ++i) {
					x = promises[i];
					if(x === void 0 && !(i in promises)) {
						--pending;
						continue;
					}
	
					h = Promise._handler(x);
					if(h.state() > 0) {
						resolver.become(h);
						Promise._visitRemaining(promises, i, h);
						break;
					} else {
						h.visit(resolver, handleFulfill, handleReject);
					}
				}
	
				if(pending === 0) {
					resolver.reject(new RangeError('any(): array must not be empty'));
				}
	
				return p;
	
				function handleFulfill(x) {
					/*jshint validthis:true*/
					errors = null;
					this.resolve(x); // this === resolver
				}
	
				function handleReject(e) {
					/*jshint validthis:true*/
					if(this.resolved) { // this === resolver
						return;
					}
	
					errors.push(e);
					if(--pending === 0) {
						this.reject(errors);
					}
				}
			}
	
			/**
			 * N-winner competitive race
			 * Return a promise that will fulfill when n input promises have
			 * fulfilled, or will reject when it becomes impossible for n
			 * input promises to fulfill (ie when promises.length - n + 1
			 * have rejected)
			 * @param {array} promises
			 * @param {number} n
			 * @returns {Promise} promise for the earliest n fulfillment values
			 *
			 * @deprecated
			 */
			function some(promises, n) {
				/*jshint maxcomplexity:7*/
				var p = Promise._defer();
				var resolver = p._handler;
	
				var results = [];
				var errors = [];
	
				var l = promises.length>>>0;
				var nFulfill = 0;
				var nReject;
				var x, i; // reused in both for() loops
	
				// First pass: count actual array items
				for(i=0; i<l; ++i) {
					x = promises[i];
					if(x === void 0 && !(i in promises)) {
						continue;
					}
					++nFulfill;
				}
	
				// Compute actual goals
				n = Math.max(n, 0);
				nReject = (nFulfill - n + 1);
				nFulfill = Math.min(n, nFulfill);
	
				if(n > nFulfill) {
					resolver.reject(new RangeError('some(): array must contain at least '
					+ n + ' item(s), but had ' + nFulfill));
				} else if(nFulfill === 0) {
					resolver.resolve(results);
				}
	
				// Second pass: observe each array item, make progress toward goals
				for(i=0; i<l; ++i) {
					x = promises[i];
					if(x === void 0 && !(i in promises)) {
						continue;
					}
	
					Promise._handler(x).visit(resolver, fulfill, reject, resolver.notify);
				}
	
				return p;
	
				function fulfill(x) {
					/*jshint validthis:true*/
					if(this.resolved) { // this === resolver
						return;
					}
	
					results.push(x);
					if(--nFulfill === 0) {
						errors = null;
						this.resolve(results);
					}
				}
	
				function reject(e) {
					/*jshint validthis:true*/
					if(this.resolved) { // this === resolver
						return;
					}
	
					errors.push(e);
					if(--nReject === 0) {
						results = null;
						this.reject(errors);
					}
				}
			}
	
			/**
			 * Apply f to the value of each promise in a list of promises
			 * and return a new list containing the results.
			 * @param {array} promises
			 * @param {function(x:*, index:Number):*} f mapping function
			 * @returns {Promise}
			 */
			function map(promises, f) {
				return Promise._traverse(f, promises);
			}
	
			/**
			 * Filter the provided array of promises using the provided predicate.  Input may
			 * contain promises and values
			 * @param {Array} promises array of promises and values
			 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
			 *  Must return truthy (or promise for truthy) for items to retain.
			 * @returns {Promise} promise that will fulfill with an array containing all items
			 *  for which predicate returned truthy.
			 */
			function filter(promises, predicate) {
				var a = slice.call(promises);
				return Promise._traverse(predicate, a).then(function(keep) {
					return filterSync(a, keep);
				});
			}
	
			function filterSync(promises, keep) {
				// Safe because we know all promises have fulfilled if we've made it this far
				var l = keep.length;
				var filtered = new Array(l);
				for(var i=0, j=0; i<l; ++i) {
					if(keep[i]) {
						filtered[j++] = Promise._handler(promises[i]).value;
					}
				}
				filtered.length = j;
				return filtered;
	
			}
	
			/**
			 * Return a promise that will always fulfill with an array containing
			 * the outcome states of all input promises.  The returned promise
			 * will never reject.
			 * @param {Array} promises
			 * @returns {Promise} promise for array of settled state descriptors
			 */
			function settle(promises) {
				return all(promises.map(settleOne));
			}
	
			function settleOne(p) {
				var h = Promise._handler(p);
				if(h.state() === 0) {
					return toPromise(p).then(state.fulfilled, state.rejected);
				}
	
				h._unreport();
				return state.inspect(h);
			}
	
			/**
			 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
			 * input may contain promises and/or values, and reduceFunc
			 * may return either a value or a promise, *and* initialValue may
			 * be a promise for the starting value.
			 * @param {Array|Promise} promises array or promise for an array of anything,
			 *      may contain a mix of promises and values.
			 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
			 * @returns {Promise} that will resolve to the final reduced value
			 */
			function reduce(promises, f /*, initialValue */) {
				return arguments.length > 2 ? ar.call(promises, liftCombine(f), arguments[2])
						: ar.call(promises, liftCombine(f));
			}
	
			/**
			 * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
			 * input may contain promises and/or values, and reduceFunc
			 * may return either a value or a promise, *and* initialValue may
			 * be a promise for the starting value.
			 * @param {Array|Promise} promises array or promise for an array of anything,
			 *      may contain a mix of promises and values.
			 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
			 * @returns {Promise} that will resolve to the final reduced value
			 */
			function reduceRight(promises, f /*, initialValue */) {
				return arguments.length > 2 ? arr.call(promises, liftCombine(f), arguments[2])
						: arr.call(promises, liftCombine(f));
			}
	
			function liftCombine(f) {
				return function(z, x, i) {
					return applyFold(f, void 0, [z,x,i]);
				};
			}
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function flow(Promise) {
	
			var resolve = Promise.resolve;
			var reject = Promise.reject;
			var origCatch = Promise.prototype['catch'];
	
			/**
			 * Handle the ultimate fulfillment value or rejection reason, and assume
			 * responsibility for all errors.  If an error propagates out of result
			 * or handleFatalError, it will be rethrown to the host, resulting in a
			 * loud stack track on most platforms and a crash on some.
			 * @param {function?} onResult
			 * @param {function?} onError
			 * @returns {undefined}
			 */
			Promise.prototype.done = function(onResult, onError) {
				this._handler.visit(this._handler.receiver, onResult, onError);
			};
	
			/**
			 * Add Error-type and predicate matching to catch.  Examples:
			 * promise.catch(TypeError, handleTypeError)
			 *   .catch(predicate, handleMatchedErrors)
			 *   .catch(handleRemainingErrors)
			 * @param onRejected
			 * @returns {*}
			 */
			Promise.prototype['catch'] = Promise.prototype.otherwise = function(onRejected) {
				if (arguments.length < 2) {
					return origCatch.call(this, onRejected);
				}
	
				if(typeof onRejected !== 'function') {
					return this.ensure(rejectInvalidPredicate);
				}
	
				return origCatch.call(this, createCatchFilter(arguments[1], onRejected));
			};
	
			/**
			 * Wraps the provided catch handler, so that it will only be called
			 * if the predicate evaluates truthy
			 * @param {?function} handler
			 * @param {function} predicate
			 * @returns {function} conditional catch handler
			 */
			function createCatchFilter(handler, predicate) {
				return function(e) {
					return evaluatePredicate(e, predicate)
						? handler.call(this, e)
						: reject(e);
				};
			}
	
			/**
			 * Ensures that onFulfilledOrRejected will be called regardless of whether
			 * this promise is fulfilled or rejected.  onFulfilledOrRejected WILL NOT
			 * receive the promises' value or reason.  Any returned value will be disregarded.
			 * onFulfilledOrRejected may throw or return a rejected promise to signal
			 * an additional error.
			 * @param {function} handler handler to be called regardless of
			 *  fulfillment or rejection
			 * @returns {Promise}
			 */
			Promise.prototype['finally'] = Promise.prototype.ensure = function(handler) {
				if(typeof handler !== 'function') {
					return this;
				}
	
				return this.then(function(x) {
					return runSideEffect(handler, this, identity, x);
				}, function(e) {
					return runSideEffect(handler, this, reject, e);
				});
			};
	
			function runSideEffect (handler, thisArg, propagate, value) {
				var result = handler.call(thisArg);
				return maybeThenable(result)
					? propagateValue(result, propagate, value)
					: propagate(value);
			}
	
			function propagateValue (result, propagate, x) {
				return resolve(result).then(function () {
					return propagate(x);
				});
			}
	
			/**
			 * Recover from a failure by returning a defaultValue.  If defaultValue
			 * is a promise, it's fulfillment value will be used.  If defaultValue is
			 * a promise that rejects, the returned promise will reject with the
			 * same reason.
			 * @param {*} defaultValue
			 * @returns {Promise} new promise
			 */
			Promise.prototype['else'] = Promise.prototype.orElse = function(defaultValue) {
				return this.then(void 0, function() {
					return defaultValue;
				});
			};
	
			/**
			 * Shortcut for .then(function() { return value; })
			 * @param  {*} value
			 * @return {Promise} a promise that:
			 *  - is fulfilled if value is not a promise, or
			 *  - if value is a promise, will fulfill with its value, or reject
			 *    with its reason.
			 */
			Promise.prototype['yield'] = function(value) {
				return this.then(function() {
					return value;
				});
			};
	
			/**
			 * Runs a side effect when this promise fulfills, without changing the
			 * fulfillment value.
			 * @param {function} onFulfilledSideEffect
			 * @returns {Promise}
			 */
			Promise.prototype.tap = function(onFulfilledSideEffect) {
				return this.then(onFulfilledSideEffect)['yield'](this);
			};
	
			return Promise;
		};
	
		function rejectInvalidPredicate() {
			throw new TypeError('catch predicate must be a function');
		}
	
		function evaluatePredicate(e, predicate) {
			return isError(predicate) ? e instanceof predicate : predicate(e);
		}
	
		function isError(predicate) {
			return predicate === Error
				|| (predicate != null && predicate.prototype instanceof Error);
		}
	
		function maybeThenable(x) {
			return (typeof x === 'object' || typeof x === 'function') && x !== null;
		}
	
		function identity(x) {
			return x;
		}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	/** @author Jeff Escalante */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function fold(Promise) {
	
			Promise.prototype.fold = function(f, z) {
				var promise = this._beget();
	
				this._handler.fold(function(z, x, to) {
					Promise._handler(z).fold(function(x, z, to) {
						to.resolve(f.call(this, z, x));
					}, x, this, to);
				}, z, promise._handler.receiver, promise._handler);
	
				return promise;
			};
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
	
		var inspect = __webpack_require__(9).inspect;
	
		return function inspection(Promise) {
	
			Promise.prototype.inspect = function() {
				return inspect(Promise._handler(this));
			};
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function generate(Promise) {
	
			var resolve = Promise.resolve;
	
			Promise.iterate = iterate;
			Promise.unfold = unfold;
	
			return Promise;
	
			/**
			 * @deprecated Use github.com/cujojs/most streams and most.iterate
			 * Generate a (potentially infinite) stream of promised values:
			 * x, f(x), f(f(x)), etc. until condition(x) returns true
			 * @param {function} f function to generate a new x from the previous x
			 * @param {function} condition function that, given the current x, returns
			 *  truthy when the iterate should stop
			 * @param {function} handler function to handle the value produced by f
			 * @param {*|Promise} x starting value, may be a promise
			 * @return {Promise} the result of the last call to f before
			 *  condition returns true
			 */
			function iterate(f, condition, handler, x) {
				return unfold(function(x) {
					return [x, f(x)];
				}, condition, handler, x);
			}
	
			/**
			 * @deprecated Use github.com/cujojs/most streams and most.unfold
			 * Generate a (potentially infinite) stream of promised values
			 * by applying handler(generator(seed)) iteratively until
			 * condition(seed) returns true.
			 * @param {function} unspool function that generates a [value, newSeed]
			 *  given a seed.
			 * @param {function} condition function that, given the current seed, returns
			 *  truthy when the unfold should stop
			 * @param {function} handler function to handle the value produced by unspool
			 * @param x {*|Promise} starting value, may be a promise
			 * @return {Promise} the result of the last value produced by unspool before
			 *  condition returns true
			 */
			function unfold(unspool, condition, handler, x) {
				return resolve(x).then(function(seed) {
					return resolve(condition(seed)).then(function(done) {
						return done ? seed : resolve(unspool(seed)).spread(next);
					});
				});
	
				function next(item, newSeed) {
					return resolve(handler(item)).then(function() {
						return unfold(unspool, condition, handler, newSeed);
					});
				}
			}
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function progress(Promise) {
	
			/**
			 * @deprecated
			 * Register a progress handler for this promise
			 * @param {function} onProgress
			 * @returns {Promise}
			 */
			Promise.prototype.progress = function(onProgress) {
				return this.then(void 0, void 0, onProgress);
			};
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
	
		var env = __webpack_require__(3);
		var TimeoutError = __webpack_require__(7);
	
		function setTimeout(f, ms, x, y) {
			return env.setTimer(function() {
				f(x, y, ms);
			}, ms);
		}
	
		return function timed(Promise) {
			/**
			 * Return a new promise whose fulfillment value is revealed only
			 * after ms milliseconds
			 * @param {number} ms milliseconds
			 * @returns {Promise}
			 */
			Promise.prototype.delay = function(ms) {
				var p = this._beget();
				this._handler.fold(handleDelay, ms, void 0, p._handler);
				return p;
			};
	
			function handleDelay(ms, x, h) {
				setTimeout(resolveDelay, ms, x, h);
			}
	
			function resolveDelay(x, h) {
				h.resolve(x);
			}
	
			/**
			 * Return a new promise that rejects after ms milliseconds unless
			 * this promise fulfills earlier, in which case the returned promise
			 * fulfills with the same value.
			 * @param {number} ms milliseconds
			 * @param {Error|*=} reason optional rejection reason to use, defaults
			 *   to a TimeoutError if not provided
			 * @returns {Promise}
			 */
			Promise.prototype.timeout = function(ms, reason) {
				var p = this._beget();
				var h = p._handler;
	
				var t = setTimeout(onTimeout, ms, reason, p._handler);
	
				this._handler.visit(h,
					function onFulfill(x) {
						env.clearTimer(t);
						this.resolve(x); // this = h
					},
					function onReject(x) {
						env.clearTimer(t);
						this.reject(x); // this = h
					},
					h.notify);
	
				return p;
			};
	
			function onTimeout(reason, h, ms) {
				var e = typeof reason === 'undefined'
					? new TimeoutError('timed out after ' + ms + 'ms')
					: reason;
				h.reject(e);
			}
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
	
		var setTimer = __webpack_require__(3).setTimer;
		var format = __webpack_require__(44);
	
		return function unhandledRejection(Promise) {
	
			var logError = noop;
			var logInfo = noop;
			var localConsole;
	
			if(typeof console !== 'undefined') {
				// Alias console to prevent things like uglify's drop_console option from
				// removing console.log/error. Unhandled rejections fall into the same
				// category as uncaught exceptions, and build tools shouldn't silence them.
				localConsole = console;
				logError = typeof localConsole.error !== 'undefined'
					? function (e) { localConsole.error(e); }
					: function (e) { localConsole.log(e); };
	
				logInfo = typeof localConsole.info !== 'undefined'
					? function (e) { localConsole.info(e); }
					: function (e) { localConsole.log(e); };
			}
	
			Promise.onPotentiallyUnhandledRejection = function(rejection) {
				enqueue(report, rejection);
			};
	
			Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
				enqueue(unreport, rejection);
			};
	
			Promise.onFatalRejection = function(rejection) {
				enqueue(throwit, rejection.value);
			};
	
			var tasks = [];
			var reported = [];
			var running = null;
	
			function report(r) {
				if(!r.handled) {
					reported.push(r);
					logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
				}
			}
	
			function unreport(r) {
				var i = reported.indexOf(r);
				if(i >= 0) {
					reported.splice(i, 1);
					logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
				}
			}
	
			function enqueue(f, x) {
				tasks.push(f, x);
				if(running === null) {
					running = setTimer(flush, 0);
				}
			}
	
			function flush() {
				running = null;
				while(tasks.length > 0) {
					tasks.shift()(tasks.shift());
				}
			}
	
			return Promise;
		};
	
		function throwit(e) {
			throw e;
		}
	
		function noop() {}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function addWith(Promise) {
			/**
			 * Returns a promise whose handlers will be called with `this` set to
			 * the supplied receiver.  Subsequent promises derived from the
			 * returned promise will also have their handlers called with receiver
			 * as `this`. Calling `with` with undefined or no arguments will return
			 * a promise whose handlers will again be called in the usual Promises/A+
			 * way (no `this`) thus safely undoing any previous `with` in the
			 * promise chain.
			 *
			 * WARNING: Promises returned from `with`/`withThis` are NOT Promises/A+
			 * compliant, specifically violating 2.2.5 (http://promisesaplus.com/#point-41)
			 *
			 * @param {object} receiver `this` value for all handlers attached to
			 *  the returned promise.
			 * @returns {Promise}
			 */
			Promise.prototype['with'] = Promise.prototype.withThis = function(receiver) {
				var p = this._beget();
				var child = p._handler;
				child.receiver = receiver;
				this._handler.chain(child, receiver);
				return p;
			};
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));
	


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return {
			formatError: formatError,
			formatObject: formatObject,
			tryStringify: tryStringify
		};
	
		/**
		 * Format an error into a string.  If e is an Error and has a stack property,
		 * it's returned.  Otherwise, e is formatted using formatObject, with a
		 * warning added about e not being a proper Error.
		 * @param {*} e
		 * @returns {String} formatted string, suitable for output to developers
		 */
		function formatError(e) {
			var s = typeof e === 'object' && e !== null && e.stack ? e.stack : formatObject(e);
			return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
		}
	
		/**
		 * Format an object, detecting "plain" objects and running them through
		 * JSON.stringify if possible.
		 * @param {Object} o
		 * @returns {string}
		 */
		function formatObject(o) {
			var s = String(o);
			if(s === '[object Object]' && typeof JSON !== 'undefined') {
				s = tryStringify(o, s);
			}
			return s;
		}
	
		/**
		 * Try to return the result of JSON.stringify(x).  If that fails, return
		 * defaultValue
		 * @param {*} x
		 * @param {*} defaultValue
		 * @returns {String|*} JSON.stringify(x) or defaultValue
		 */
		function tryStringify(x, defaultValue) {
			try {
				return JSON.stringify(x);
			} catch(e) {
				return defaultValue;
			}
		}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function makePromise(environment) {
	
			var tasks = environment.scheduler;
			var emitRejection = initEmitRejection();
	
			var objectCreate = Object.create ||
				function(proto) {
					function Child() {}
					Child.prototype = proto;
					return new Child();
				};
	
			/**
			 * Create a promise whose fate is determined by resolver
			 * @constructor
			 * @returns {Promise} promise
			 * @name Promise
			 */
			function Promise(resolver, handler) {
				this._handler = resolver === Handler ? handler : init(resolver);
			}
	
			/**
			 * Run the supplied resolver
			 * @param resolver
			 * @returns {Pending}
			 */
			function init(resolver) {
				var handler = new Pending();
	
				try {
					resolver(promiseResolve, promiseReject, promiseNotify);
				} catch (e) {
					promiseReject(e);
				}
	
				return handler;
	
				/**
				 * Transition from pre-resolution state to post-resolution state, notifying
				 * all listeners of the ultimate fulfillment or rejection
				 * @param {*} x resolution value
				 */
				function promiseResolve (x) {
					handler.resolve(x);
				}
				/**
				 * Reject this promise with reason, which will be used verbatim
				 * @param {Error|*} reason rejection reason, strongly suggested
				 *   to be an Error type
				 */
				function promiseReject (reason) {
					handler.reject(reason);
				}
	
				/**
				 * @deprecated
				 * Issue a progress event, notifying all progress listeners
				 * @param {*} x progress event payload to pass to all listeners
				 */
				function promiseNotify (x) {
					handler.notify(x);
				}
			}
	
			// Creation
	
			Promise.resolve = resolve;
			Promise.reject = reject;
			Promise.never = never;
	
			Promise._defer = defer;
			Promise._handler = getHandler;
	
			/**
			 * Returns a trusted promise. If x is already a trusted promise, it is
			 * returned, otherwise returns a new trusted Promise which follows x.
			 * @param  {*} x
			 * @return {Promise} promise
			 */
			function resolve(x) {
				return isPromise(x) ? x
					: new Promise(Handler, new Async(getHandler(x)));
			}
	
			/**
			 * Return a reject promise with x as its reason (x is used verbatim)
			 * @param {*} x
			 * @returns {Promise} rejected promise
			 */
			function reject(x) {
				return new Promise(Handler, new Async(new Rejected(x)));
			}
	
			/**
			 * Return a promise that remains pending forever
			 * @returns {Promise} forever-pending promise.
			 */
			function never() {
				return foreverPendingPromise; // Should be frozen
			}
	
			/**
			 * Creates an internal {promise, resolver} pair
			 * @private
			 * @returns {Promise}
			 */
			function defer() {
				return new Promise(Handler, new Pending());
			}
	
			// Transformation and flow control
	
			/**
			 * Transform this promise's fulfillment value, returning a new Promise
			 * for the transformed result.  If the promise cannot be fulfilled, onRejected
			 * is called with the reason.  onProgress *may* be called with updates toward
			 * this promise's fulfillment.
			 * @param {function=} onFulfilled fulfillment handler
			 * @param {function=} onRejected rejection handler
			 * @param {function=} onProgress @deprecated progress handler
			 * @return {Promise} new promise
			 */
			Promise.prototype.then = function(onFulfilled, onRejected, onProgress) {
				var parent = this._handler;
				var state = parent.join().state();
	
				if ((typeof onFulfilled !== 'function' && state > 0) ||
					(typeof onRejected !== 'function' && state < 0)) {
					// Short circuit: value will not change, simply share handler
					return new this.constructor(Handler, parent);
				}
	
				var p = this._beget();
				var child = p._handler;
	
				parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);
	
				return p;
			};
	
			/**
			 * If this promise cannot be fulfilled due to an error, call onRejected to
			 * handle the error. Shortcut for .then(undefined, onRejected)
			 * @param {function?} onRejected
			 * @return {Promise}
			 */
			Promise.prototype['catch'] = function(onRejected) {
				return this.then(void 0, onRejected);
			};
	
			/**
			 * Creates a new, pending promise of the same type as this promise
			 * @private
			 * @returns {Promise}
			 */
			Promise.prototype._beget = function() {
				return begetFrom(this._handler, this.constructor);
			};
	
			function begetFrom(parent, Promise) {
				var child = new Pending(parent.receiver, parent.join().context);
				return new Promise(Handler, child);
			}
	
			// Array combinators
	
			Promise.all = all;
			Promise.race = race;
			Promise._traverse = traverse;
	
			/**
			 * Return a promise that will fulfill when all promises in the
			 * input array have fulfilled, or will reject when one of the
			 * promises rejects.
			 * @param {array} promises array of promises
			 * @returns {Promise} promise for array of fulfillment values
			 */
			function all(promises) {
				return traverseWith(snd, null, promises);
			}
	
			/**
			 * Array<Promise<X>> -> Promise<Array<f(X)>>
			 * @private
			 * @param {function} f function to apply to each promise's value
			 * @param {Array} promises array of promises
			 * @returns {Promise} promise for transformed values
			 */
			function traverse(f, promises) {
				return traverseWith(tryCatch2, f, promises);
			}
	
			function traverseWith(tryMap, f, promises) {
				var handler = typeof f === 'function' ? mapAt : settleAt;
	
				var resolver = new Pending();
				var pending = promises.length >>> 0;
				var results = new Array(pending);
	
				for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
					x = promises[i];
	
					if (x === void 0 && !(i in promises)) {
						--pending;
						continue;
					}
	
					traverseAt(promises, handler, i, x, resolver);
				}
	
				if(pending === 0) {
					resolver.become(new Fulfilled(results));
				}
	
				return new Promise(Handler, resolver);
	
				function mapAt(i, x, resolver) {
					if(!resolver.resolved) {
						traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
					}
				}
	
				function settleAt(i, x, resolver) {
					results[i] = x;
					if(--pending === 0) {
						resolver.become(new Fulfilled(results));
					}
				}
			}
	
			function traverseAt(promises, handler, i, x, resolver) {
				if (maybeThenable(x)) {
					var h = getHandlerMaybeThenable(x);
					var s = h.state();
	
					if (s === 0) {
						h.fold(handler, i, void 0, resolver);
					} else if (s > 0) {
						handler(i, h.value, resolver);
					} else {
						resolver.become(h);
						visitRemaining(promises, i+1, h);
					}
				} else {
					handler(i, x, resolver);
				}
			}
	
			Promise._visitRemaining = visitRemaining;
			function visitRemaining(promises, start, handler) {
				for(var i=start; i<promises.length; ++i) {
					markAsHandled(getHandler(promises[i]), handler);
				}
			}
	
			function markAsHandled(h, handler) {
				if(h === handler) {
					return;
				}
	
				var s = h.state();
				if(s === 0) {
					h.visit(h, void 0, h._unreport);
				} else if(s < 0) {
					h._unreport();
				}
			}
	
			/**
			 * Fulfill-reject competitive race. Return a promise that will settle
			 * to the same state as the earliest input promise to settle.
			 *
			 * WARNING: The ES6 Promise spec requires that race()ing an empty array
			 * must return a promise that is pending forever.  This implementation
			 * returns a singleton forever-pending promise, the same singleton that is
			 * returned by Promise.never(), thus can be checked with ===
			 *
			 * @param {array} promises array of promises to race
			 * @returns {Promise} if input is non-empty, a promise that will settle
			 * to the same outcome as the earliest input promise to settle. if empty
			 * is empty, returns a promise that will never settle.
			 */
			function race(promises) {
				if(typeof promises !== 'object' || promises === null) {
					return reject(new TypeError('non-iterable passed to race()'));
				}
	
				// Sigh, race([]) is untestable unless we return *something*
				// that is recognizable without calling .then() on it.
				return promises.length === 0 ? never()
					 : promises.length === 1 ? resolve(promises[0])
					 : runRace(promises);
			}
	
			function runRace(promises) {
				var resolver = new Pending();
				var i, x, h;
				for(i=0; i<promises.length; ++i) {
					x = promises[i];
					if (x === void 0 && !(i in promises)) {
						continue;
					}
	
					h = getHandler(x);
					if(h.state() !== 0) {
						resolver.become(h);
						visitRemaining(promises, i+1, h);
						break;
					} else {
						h.visit(resolver, resolver.resolve, resolver.reject);
					}
				}
				return new Promise(Handler, resolver);
			}
	
			// Promise internals
			// Below this, everything is @private
	
			/**
			 * Get an appropriate handler for x, without checking for cycles
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandler(x) {
				if(isPromise(x)) {
					return x._handler.join();
				}
				return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
			}
	
			/**
			 * Get a handler for thenable x.
			 * NOTE: You must only call this if maybeThenable(x) == true
			 * @param {object|function|Promise} x
			 * @returns {object} handler
			 */
			function getHandlerMaybeThenable(x) {
				return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
			}
	
			/**
			 * Get a handler for potentially untrusted thenable x
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandlerUntrusted(x) {
				try {
					var untrustedThen = x.then;
					return typeof untrustedThen === 'function'
						? new Thenable(untrustedThen, x)
						: new Fulfilled(x);
				} catch(e) {
					return new Rejected(e);
				}
			}
	
			/**
			 * Handler for a promise that is pending forever
			 * @constructor
			 */
			function Handler() {}
	
			Handler.prototype.when
				= Handler.prototype.become
				= Handler.prototype.notify // deprecated
				= Handler.prototype.fail
				= Handler.prototype._unreport
				= Handler.prototype._report
				= noop;
	
			Handler.prototype._state = 0;
	
			Handler.prototype.state = function() {
				return this._state;
			};
	
			/**
			 * Recursively collapse handler chain to find the handler
			 * nearest to the fully resolved value.
			 * @returns {object} handler nearest the fully resolved value
			 */
			Handler.prototype.join = function() {
				var h = this;
				while(h.handler !== void 0) {
					h = h.handler;
				}
				return h;
			};
	
			Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
				this.when({
					resolver: to,
					receiver: receiver,
					fulfilled: fulfilled,
					rejected: rejected,
					progress: progress
				});
			};
	
			Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
				this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
			};
	
			Handler.prototype.fold = function(f, z, c, to) {
				this.when(new Fold(f, z, c, to));
			};
	
			/**
			 * Handler that invokes fail() on any handler it becomes
			 * @constructor
			 */
			function FailIfRejected() {}
	
			inherit(Handler, FailIfRejected);
	
			FailIfRejected.prototype.become = function(h) {
				h.fail();
			};
	
			var failIfRejected = new FailIfRejected();
	
			/**
			 * Handler that manages a queue of consumers waiting on a pending promise
			 * @constructor
			 */
			function Pending(receiver, inheritedContext) {
				Promise.createContext(this, inheritedContext);
	
				this.consumers = void 0;
				this.receiver = receiver;
				this.handler = void 0;
				this.resolved = false;
			}
	
			inherit(Handler, Pending);
	
			Pending.prototype._state = 0;
	
			Pending.prototype.resolve = function(x) {
				this.become(getHandler(x));
			};
	
			Pending.prototype.reject = function(x) {
				if(this.resolved) {
					return;
				}
	
				this.become(new Rejected(x));
			};
	
			Pending.prototype.join = function() {
				if (!this.resolved) {
					return this;
				}
	
				var h = this;
	
				while (h.handler !== void 0) {
					h = h.handler;
					if (h === this) {
						return this.handler = cycle();
					}
				}
	
				return h;
			};
	
			Pending.prototype.run = function() {
				var q = this.consumers;
				var handler = this.handler;
				this.handler = this.handler.join();
				this.consumers = void 0;
	
				for (var i = 0; i < q.length; ++i) {
					handler.when(q[i]);
				}
			};
	
			Pending.prototype.become = function(handler) {
				if(this.resolved) {
					return;
				}
	
				this.resolved = true;
				this.handler = handler;
				if(this.consumers !== void 0) {
					tasks.enqueue(this);
				}
	
				if(this.context !== void 0) {
					handler._report(this.context);
				}
			};
	
			Pending.prototype.when = function(continuation) {
				if(this.resolved) {
					tasks.enqueue(new ContinuationTask(continuation, this.handler));
				} else {
					if(this.consumers === void 0) {
						this.consumers = [continuation];
					} else {
						this.consumers.push(continuation);
					}
				}
			};
	
			/**
			 * @deprecated
			 */
			Pending.prototype.notify = function(x) {
				if(!this.resolved) {
					tasks.enqueue(new ProgressTask(x, this));
				}
			};
	
			Pending.prototype.fail = function(context) {
				var c = typeof context === 'undefined' ? this.context : context;
				this.resolved && this.handler.join().fail(c);
			};
	
			Pending.prototype._report = function(context) {
				this.resolved && this.handler.join()._report(context);
			};
	
			Pending.prototype._unreport = function() {
				this.resolved && this.handler.join()._unreport();
			};
	
			/**
			 * Wrap another handler and force it into a future stack
			 * @param {object} handler
			 * @constructor
			 */
			function Async(handler) {
				this.handler = handler;
			}
	
			inherit(Handler, Async);
	
			Async.prototype.when = function(continuation) {
				tasks.enqueue(new ContinuationTask(continuation, this));
			};
	
			Async.prototype._report = function(context) {
				this.join()._report(context);
			};
	
			Async.prototype._unreport = function() {
				this.join()._unreport();
			};
	
			/**
			 * Handler that wraps an untrusted thenable and assimilates it in a future stack
			 * @param {function} then
			 * @param {{then: function}} thenable
			 * @constructor
			 */
			function Thenable(then, thenable) {
				Pending.call(this);
				tasks.enqueue(new AssimilateTask(then, thenable, this));
			}
	
			inherit(Pending, Thenable);
	
			/**
			 * Handler for a fulfilled promise
			 * @param {*} x fulfillment value
			 * @constructor
			 */
			function Fulfilled(x) {
				Promise.createContext(this);
				this.value = x;
			}
	
			inherit(Handler, Fulfilled);
	
			Fulfilled.prototype._state = 1;
	
			Fulfilled.prototype.fold = function(f, z, c, to) {
				runContinuation3(f, z, this, c, to);
			};
	
			Fulfilled.prototype.when = function(cont) {
				runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
			};
	
			var errorId = 0;
	
			/**
			 * Handler for a rejected promise
			 * @param {*} x rejection reason
			 * @constructor
			 */
			function Rejected(x) {
				Promise.createContext(this);
	
				this.id = ++errorId;
				this.value = x;
				this.handled = false;
				this.reported = false;
	
				this._report();
			}
	
			inherit(Handler, Rejected);
	
			Rejected.prototype._state = -1;
	
			Rejected.prototype.fold = function(f, z, c, to) {
				to.become(this);
			};
	
			Rejected.prototype.when = function(cont) {
				if(typeof cont.rejected === 'function') {
					this._unreport();
				}
				runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
			};
	
			Rejected.prototype._report = function(context) {
				tasks.afterQueue(new ReportTask(this, context));
			};
	
			Rejected.prototype._unreport = function() {
				if(this.handled) {
					return;
				}
				this.handled = true;
				tasks.afterQueue(new UnreportTask(this));
			};
	
			Rejected.prototype.fail = function(context) {
				this.reported = true;
				emitRejection('unhandledRejection', this);
				Promise.onFatalRejection(this, context === void 0 ? this.context : context);
			};
	
			function ReportTask(rejection, context) {
				this.rejection = rejection;
				this.context = context;
			}
	
			ReportTask.prototype.run = function() {
				if(!this.rejection.handled && !this.rejection.reported) {
					this.rejection.reported = true;
					emitRejection('unhandledRejection', this.rejection) ||
						Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
				}
			};
	
			function UnreportTask(rejection) {
				this.rejection = rejection;
			}
	
			UnreportTask.prototype.run = function() {
				if(this.rejection.reported) {
					emitRejection('rejectionHandled', this.rejection) ||
						Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
				}
			};
	
			// Unhandled rejection hooks
			// By default, everything is a noop
	
			Promise.createContext
				= Promise.enterContext
				= Promise.exitContext
				= Promise.onPotentiallyUnhandledRejection
				= Promise.onPotentiallyUnhandledRejectionHandled
				= Promise.onFatalRejection
				= noop;
	
			// Errors and singletons
	
			var foreverPendingHandler = new Handler();
			var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);
	
			function cycle() {
				return new Rejected(new TypeError('Promise cycle'));
			}
	
			// Task runners
	
			/**
			 * Run a single consumer
			 * @constructor
			 */
			function ContinuationTask(continuation, handler) {
				this.continuation = continuation;
				this.handler = handler;
			}
	
			ContinuationTask.prototype.run = function() {
				this.handler.join().when(this.continuation);
			};
	
			/**
			 * Run a queue of progress handlers
			 * @constructor
			 */
			function ProgressTask(value, handler) {
				this.handler = handler;
				this.value = value;
			}
	
			ProgressTask.prototype.run = function() {
				var q = this.handler.consumers;
				if(q === void 0) {
					return;
				}
	
				for (var c, i = 0; i < q.length; ++i) {
					c = q[i];
					runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
				}
			};
	
			/**
			 * Assimilate a thenable, sending it's value to resolver
			 * @param {function} then
			 * @param {object|function} thenable
			 * @param {object} resolver
			 * @constructor
			 */
			function AssimilateTask(then, thenable, resolver) {
				this._then = then;
				this.thenable = thenable;
				this.resolver = resolver;
			}
	
			AssimilateTask.prototype.run = function() {
				var h = this.resolver;
				tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);
	
				function _resolve(x) { h.resolve(x); }
				function _reject(x)  { h.reject(x); }
				function _notify(x)  { h.notify(x); }
			};
	
			function tryAssimilate(then, thenable, resolve, reject, notify) {
				try {
					then.call(thenable, resolve, reject, notify);
				} catch (e) {
					reject(e);
				}
			}
	
			/**
			 * Fold a handler value with z
			 * @constructor
			 */
			function Fold(f, z, c, to) {
				this.f = f; this.z = z; this.c = c; this.to = to;
				this.resolver = failIfRejected;
				this.receiver = this;
			}
	
			Fold.prototype.fulfilled = function(x) {
				this.f.call(this.c, this.z, x, this.to);
			};
	
			Fold.prototype.rejected = function(x) {
				this.to.reject(x);
			};
	
			Fold.prototype.progress = function(x) {
				this.to.notify(x);
			};
	
			// Other helpers
	
			/**
			 * @param {*} x
			 * @returns {boolean} true iff x is a trusted Promise
			 */
			function isPromise(x) {
				return x instanceof Promise;
			}
	
			/**
			 * Test just enough to rule out primitives, in order to take faster
			 * paths in some code
			 * @param {*} x
			 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
			 */
			function maybeThenable(x) {
				return (typeof x === 'object' || typeof x === 'function') && x !== null;
			}
	
			function runContinuation1(f, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}
	
				Promise.enterContext(h);
				tryCatchReject(f, h.value, receiver, next);
				Promise.exitContext();
			}
	
			function runContinuation3(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}
	
				Promise.enterContext(h);
				tryCatchReject3(f, x, h.value, receiver, next);
				Promise.exitContext();
			}
	
			/**
			 * @deprecated
			 */
			function runNotify(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.notify(x);
				}
	
				Promise.enterContext(h);
				tryCatchReturn(f, x, receiver, next);
				Promise.exitContext();
			}
	
			function tryCatch2(f, a, b) {
				try {
					return f(a, b);
				} catch(e) {
					return reject(e);
				}
			}
	
			/**
			 * Return f.call(thisArg, x), or if it throws return a rejected promise for
			 * the thrown exception
			 */
			function tryCatchReject(f, x, thisArg, next) {
				try {
					next.become(getHandler(f.call(thisArg, x)));
				} catch(e) {
					next.become(new Rejected(e));
				}
			}
	
			/**
			 * Same as above, but includes the extra argument parameter.
			 */
			function tryCatchReject3(f, x, y, thisArg, next) {
				try {
					f.call(thisArg, x, y, next);
				} catch(e) {
					next.become(new Rejected(e));
				}
			}
	
			/**
			 * @deprecated
			 * Return f.call(thisArg, x), or if it throws, *return* the exception
			 */
			function tryCatchReturn(f, x, thisArg, next) {
				try {
					next.notify(f.call(thisArg, x));
				} catch(e) {
					next.notify(e);
				}
			}
	
			function inherit(Parent, Child) {
				Child.prototype = objectCreate(Parent.prototype);
				Child.prototype.constructor = Child;
			}
	
			function snd(x, y) {
				return y;
			}
	
			function noop() {}
	
			function initEmitRejection() {
				/*global process, self, CustomEvent*/
				if(typeof process !== 'undefined' && process !== null
					&& typeof process.emit === 'function') {
					// Returning falsy here means to call the default
					// onPotentiallyUnhandledRejection API.  This is safe even in
					// browserify since process.emit always returns falsy in browserify:
					// https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
					return function(type, rejection) {
						return type === 'unhandledRejection'
							? process.emit(type, rejection.value, rejection)
							: process.emit(type, rejection);
					};
				} else if(typeof self !== 'undefined' && typeof CustomEvent === 'function') {
					return (function(noop, self, CustomEvent) {
						var hasCustomEvent = false;
						try {
							var ev = new CustomEvent('unhandledRejection');
							hasCustomEvent = ev instanceof CustomEvent;
						} catch (e) {}
	
						return !hasCustomEvent ? noop : function(type, rejection) {
							var ev = new CustomEvent(type, {
								detail: {
									reason: rejection.value,
									key: rejection
								},
								bubbles: false,
								cancelable: true
							});
	
							return !self.dispatchEvent(ev);
						};
					}(noop, self, CustomEvent));
				}
	
				return noop;
			}
	
			return Promise;
		};
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(1)));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	
	/**
	 * Promises/A+ and when() implementation
	 * when is part of the cujoJS family of libraries (http://cujojs.com/)
	 * @author Brian Cavalier
	 * @author John Hann
	 */
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
		var timed = __webpack_require__(41);
		var array = __webpack_require__(35);
		var flow = __webpack_require__(36);
		var fold = __webpack_require__(37);
		var inspect = __webpack_require__(38);
		var generate = __webpack_require__(39);
		var progress = __webpack_require__(40);
		var withThis = __webpack_require__(43);
		var unhandledRejection = __webpack_require__(42);
		var TimeoutError = __webpack_require__(7);
	
		var Promise = [array, flow, fold, generate, progress,
			inspect, withThis, timed, unhandledRejection]
			.reduce(function(Promise, feature) {
				return feature(Promise);
			}, __webpack_require__(33));
	
		var apply = __webpack_require__(8)(Promise);
	
		// Public API
	
		when.promise     = promise;              // Create a pending promise
		when.resolve     = Promise.resolve;      // Create a resolved promise
		when.reject      = Promise.reject;       // Create a rejected promise
	
		when.lift        = lift;                 // lift a function to return promises
		when['try']      = attempt;              // call a function and return a promise
		when.attempt     = attempt;              // alias for when.try
	
		when.iterate     = Promise.iterate;      // DEPRECATED (use cujojs/most streams) Generate a stream of promises
		when.unfold      = Promise.unfold;       // DEPRECATED (use cujojs/most streams) Generate a stream of promises
	
		when.join        = join;                 // Join 2 or more promises
	
		when.all         = all;                  // Resolve a list of promises
		when.settle      = settle;               // Settle a list of promises
	
		when.any         = lift(Promise.any);    // One-winner race
		when.some        = lift(Promise.some);   // Multi-winner race
		when.race        = lift(Promise.race);   // First-to-settle race
	
		when.map         = map;                  // Array.map() for promises
		when.filter      = filter;               // Array.filter() for promises
		when.reduce      = lift(Promise.reduce);       // Array.reduce() for promises
		when.reduceRight = lift(Promise.reduceRight);  // Array.reduceRight() for promises
	
		when.isPromiseLike = isPromiseLike;      // Is something promise-like, aka thenable
	
		when.Promise     = Promise;              // Promise constructor
		when.defer       = defer;                // Create a {promise, resolve, reject} tuple
	
		// Error types
	
		when.TimeoutError = TimeoutError;
	
		/**
		 * Get a trusted promise for x, or by transforming x with onFulfilled
		 *
		 * @param {*} x
		 * @param {function?} onFulfilled callback to be called when x is
		 *   successfully fulfilled.  If promiseOrValue is an immediate value, callback
		 *   will be invoked immediately.
		 * @param {function?} onRejected callback to be called when x is
		 *   rejected.
		 * @param {function?} onProgress callback to be called when progress updates
		 *   are issued for x. @deprecated
		 * @returns {Promise} a new promise that will fulfill with the return
		 *   value of callback or errback or the completion value of promiseOrValue if
		 *   callback and/or errback is not supplied.
		 */
		function when(x, onFulfilled, onRejected, onProgress) {
			var p = Promise.resolve(x);
			if (arguments.length < 2) {
				return p;
			}
	
			return p.then(onFulfilled, onRejected, onProgress);
		}
	
		/**
		 * Creates a new promise whose fate is determined by resolver.
		 * @param {function} resolver function(resolve, reject, notify)
		 * @returns {Promise} promise whose fate is determine by resolver
		 */
		function promise(resolver) {
			return new Promise(resolver);
		}
	
		/**
		 * Lift the supplied function, creating a version of f that returns
		 * promises, and accepts promises as arguments.
		 * @param {function} f
		 * @returns {Function} version of f that returns promises
		 */
		function lift(f) {
			return function() {
				for(var i=0, l=arguments.length, a=new Array(l); i<l; ++i) {
					a[i] = arguments[i];
				}
				return apply(f, this, a);
			};
		}
	
		/**
		 * Call f in a future turn, with the supplied args, and return a promise
		 * for the result.
		 * @param {function} f
		 * @returns {Promise}
		 */
		function attempt(f /*, args... */) {
			/*jshint validthis:true */
			for(var i=0, l=arguments.length-1, a=new Array(l); i<l; ++i) {
				a[i] = arguments[i+1];
			}
			return apply(f, this, a);
		}
	
		/**
		 * Creates a {promise, resolver} pair, either or both of which
		 * may be given out safely to consumers.
		 * @return {{promise: Promise, resolve: function, reject: function, notify: function}}
		 */
		function defer() {
			return new Deferred();
		}
	
		function Deferred() {
			var p = Promise._defer();
	
			function resolve(x) { p._handler.resolve(x); }
			function reject(x) { p._handler.reject(x); }
			function notify(x) { p._handler.notify(x); }
	
			this.promise = p;
			this.resolve = resolve;
			this.reject = reject;
			this.notify = notify;
			this.resolver = { resolve: resolve, reject: reject, notify: notify };
		}
	
		/**
		 * Determines if x is promise-like, i.e. a thenable object
		 * NOTE: Will return true for *any thenable object*, and isn't truly
		 * safe, since it may attempt to access the `then` property of x (i.e.
		 *  clever/malicious getters may do weird things)
		 * @param {*} x anything
		 * @returns {boolean} true if x is promise-like
		 */
		function isPromiseLike(x) {
			return x && typeof x.then === 'function';
		}
	
		/**
		 * Return a promise that will resolve only once all the supplied arguments
		 * have resolved. The resolution value of the returned promise will be an array
		 * containing the resolution values of each of the arguments.
		 * @param {...*} arguments may be a mix of promises and values
		 * @returns {Promise}
		 */
		function join(/* ...promises */) {
			return Promise.all(arguments);
		}
	
		/**
		 * Return a promise that will fulfill once all input promises have
		 * fulfilled, or reject when any one input promise rejects.
		 * @param {array|Promise} promises array (or promise for an array) of promises
		 * @returns {Promise}
		 */
		function all(promises) {
			return when(promises, Promise.all);
		}
	
		/**
		 * Return a promise that will always fulfill with an array containing
		 * the outcome states of all input promises.  The returned promise
		 * will only reject if `promises` itself is a rejected promise.
		 * @param {array|Promise} promises array (or promise for an array) of promises
		 * @returns {Promise} promise for array of settled state descriptors
		 */
		function settle(promises) {
			return when(promises, Promise.settle);
		}
	
		/**
		 * Promise-aware array map function, similar to `Array.prototype.map()`,
		 * but input array may contain promises or values.
		 * @param {Array|Promise} promises array of anything, may contain promises and values
		 * @param {function(x:*, index:Number):*} mapFunc map function which may
		 *  return a promise or value
		 * @returns {Promise} promise that will fulfill with an array of mapped values
		 *  or reject if any input promise rejects.
		 */
		function map(promises, mapFunc) {
			return when(promises, function(promises) {
				return Promise.map(promises, mapFunc);
			});
		}
	
		/**
		 * Filter the provided array of promises using the provided predicate.  Input may
		 * contain promises and values
		 * @param {Array|Promise} promises array of promises and values
		 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
		 *  Must return truthy (or promise for truthy) for items to retain.
		 * @returns {Promise} promise that will fulfill with an array containing all items
		 *  for which predicate returned truthy.
		 */
		function filter(promises, predicate) {
			return when(promises, function(promises) {
				return Promise.filter(promises, predicate);
			});
		}
	
		return when;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(1));


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./boot.coffee": 26,
		"./game.coffee": 27,
		"./intro.coffee": 28,
		"./preload.coffee": 29,
		"./reset.coffee": 30
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 47;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzAxNTNmMDZlMDU3ODUyZGE0YTQiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1RleHQuY29mZmVlIiwid2VicGFjazovLy8uL34vd2hlbi9saWIvZW52LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvdGVycmFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vd2hlbi9saWIvVGltZW91dEVycm9yLmpzIiwid2VicGFjazovLy8uL34vd2hlbi9saWIvYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvbGV2ZWxzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZnguY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvbGF1bmNoLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQW1tby5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0J1bGxldHMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DYWN0dXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DZWlsaW5nLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ293Ym95LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvRmxvb3IuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9JbnRlZ2VyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvVGVycmFpbkdyb3VwLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvVHJlZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1dhZ29uLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvV2FsbC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvYm9vdC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvZ2FtZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvaW50cm8uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL3ByZWxvYWQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL21haW4uY29mZmVlIiwid2VicGFjazovLy8uL34vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lL3N0YXRlLW1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vd2hlbi9saWIvU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL34vd2hlbi9saWIvZGVjb3JhdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL2RlY29yYXRvcnMvZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL2RlY29yYXRvcnMvZm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL2RlY29yYXRvcnMvaW5zcGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL2RlY29yYXRvcnMvaXRlcmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL2RlY29yYXRvcnMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL3RpbWVkLmpzIiwid2VicGFjazovLy8uL34vd2hlbi9saWIvZGVjb3JhdG9ycy91bmhhbmRsZWRSZWplY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL3dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9tYWtlUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3doZW4vd2hlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcyBeXFwuXFwvLipcXC5jb2ZmZWUkIiwid2VicGFjazovLy92ZXJ0eCAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLDhCQUE2QixtREFBbUQ7Ozs7Ozs7QUNFaEY7R0FBQTs7O0FBQU07OztHQUNTLGNBQUMs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QUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpCRjtLQWdDQSxVQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpDRjtLQWdEQSxVQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpERjtLQWdFQSxVQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpFRjtLQWdGQSxVQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpGRjtLQWdHQSxVQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpHRjtLQWdIQSxVQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpIRjtLQWdJQSxVQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpJRjtLQWdKQSxVQUNFO09BQUEsU0FD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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxTQUFTO0FBQ3RCLGVBQWMsZ0JBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FB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QTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLGNBQWM7QUFDMUIsYUFBWSxvQ0FBb0M7QUFDaEQ7QUFDQSxlQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUM7QUFDRCxFQUFDLHdCQUFpSDs7Ozs7OztBQ25PbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkEsZ0IiLCJmaWxlIjoiX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qYXZhc2NyaXB0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDMwMTUzZjA2ZTA1Nzg1MmRhNGE0XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIjIERSQVcsIEdBTUUsIEdFVF9SRUFEWSwgR09UX01FLCBHVU5fRklHSFQsIElOU0VSVF9DT0lOLCBPVkVSXG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBmcmFtZSwgeD0wLCB5PTApIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gU3RyaW5nIGZyYW1lXG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgXCJ0ZXh0LyN7ZnJhbWUucmVwbGFjZSgnICcsJ18nKS50b1VwcGVyQ2FzZSgpfVwiXG5cbiAgICAjIGNsZWFuIHVwXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcbiAgICBAaGlkZSgpXG5cbiAgcGxhY2U6ICh4LCB5KSAtPlxuICAgIEB4ID0geFxuICAgIEB5ID0geVxuXG4gIHNob3c6IC0+IEByZXNldCBAeCwgQHlcblxuICBoaWRlOiAtPiBAa2lsbCgpXG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvVGV4dC5jb2ZmZWVcbiAqKi8iLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuLypnbG9iYWwgcHJvY2Vzcyxkb2N1bWVudCxzZXRUaW1lb3V0LGNsZWFyVGltZW91dCxNdXRhdGlvbk9ic2VydmVyLFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIqL1xuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkge1xuXHQvKmpzaGludCBtYXhjb21wbGV4aXR5OjYqL1xuXG5cdC8vIFNuaWZmIFwiYmVzdFwiIGFzeW5jIHNjaGVkdWxpbmcgb3B0aW9uXG5cdC8vIFByZWZlciBwcm9jZXNzLm5leHRUaWNrIG9yIE11dGF0aW9uT2JzZXJ2ZXIsIHRoZW4gY2hlY2sgZm9yXG5cdC8vIHNldFRpbWVvdXQsIGFuZCBmaW5hbGx5IHZlcnR4LCBzaW5jZSBpdHMgdGhlIG9ubHkgZW52IHRoYXQgZG9lc24ndFxuXHQvLyBoYXZlIHNldFRpbWVvdXRcblxuXHR2YXIgTXV0YXRpb25PYnM7XG5cdHZhciBjYXB0dXJlZFNldFRpbWVvdXQgPSB0eXBlb2Ygc2V0VGltZW91dCAhPT0gJ3VuZGVmaW5lZCcgJiYgc2V0VGltZW91dDtcblxuXHQvLyBEZWZhdWx0IGVudlxuXHR2YXIgc2V0VGltZXIgPSBmdW5jdGlvbihmLCBtcykgeyByZXR1cm4gc2V0VGltZW91dChmLCBtcyk7IH07XG5cdHZhciBjbGVhclRpbWVyID0gZnVuY3Rpb24odCkgeyByZXR1cm4gY2xlYXJUaW1lb3V0KHQpOyB9O1xuXHR2YXIgYXNhcCA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBjYXB0dXJlZFNldFRpbWVvdXQoZiwgMCk7IH07XG5cblx0Ly8gRGV0ZWN0IHNwZWNpZmljIGVudlxuXHRpZiAoaXNOb2RlKCkpIHsgLy8gTm9kZVxuXHRcdGFzYXAgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmKTsgfTtcblxuXHR9IGVsc2UgaWYgKE11dGF0aW9uT2JzID0gaGFzTXV0YXRpb25PYnNlcnZlcigpKSB7IC8vIE1vZGVybiBicm93c2VyXG5cdFx0YXNhcCA9IGluaXRNdXRhdGlvbk9ic2VydmVyKE11dGF0aW9uT2JzKTtcblxuXHR9IGVsc2UgaWYgKCFjYXB0dXJlZFNldFRpbWVvdXQpIHsgLy8gdmVydC54XG5cdFx0dmFyIHZlcnR4UmVxdWlyZSA9IHJlcXVpcmU7XG5cdFx0dmFyIHZlcnR4ID0gdmVydHhSZXF1aXJlKCd2ZXJ0eCcpO1xuXHRcdHNldFRpbWVyID0gZnVuY3Rpb24gKGYsIG1zKSB7IHJldHVybiB2ZXJ0eC5zZXRUaW1lcihtcywgZik7IH07XG5cdFx0Y2xlYXJUaW1lciA9IHZlcnR4LmNhbmNlbFRpbWVyO1xuXHRcdGFzYXAgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzZXRUaW1lcjogc2V0VGltZXIsXG5cdFx0Y2xlYXJUaW1lcjogY2xlYXJUaW1lcixcblx0XHRhc2FwOiBhc2FwXG5cdH07XG5cblx0ZnVuY3Rpb24gaXNOb2RlICgpIHtcblx0XHRyZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0XHRPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcblx0fVxuXG5cdGZ1bmN0aW9uIGhhc011dGF0aW9uT2JzZXJ2ZXIgKCkge1xuXHRcdHJldHVybiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicgJiYgTXV0YXRpb25PYnNlcnZlcikgfHxcblx0XHRcdCh0eXBlb2YgV2ViS2l0TXV0YXRpb25PYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBXZWJLaXRNdXRhdGlvbk9ic2VydmVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXRNdXRhdGlvbk9ic2VydmVyKE11dGF0aW9uT2JzZXJ2ZXIpIHtcblx0XHR2YXIgc2NoZWR1bGVkO1xuXHRcdHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRcdHZhciBvID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocnVuKTtcblx0XHRvLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG5cdFx0ZnVuY3Rpb24gcnVuKCkge1xuXHRcdFx0dmFyIGYgPSBzY2hlZHVsZWQ7XG5cdFx0XHRzY2hlZHVsZWQgPSB2b2lkIDA7XG5cdFx0XHRmKCk7XG5cdFx0fVxuXG5cdFx0dmFyIGkgPSAwO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoZikge1xuXHRcdFx0c2NoZWR1bGVkID0gZjtcblx0XHRcdG5vZGUuZGF0YSA9IChpIF49IDEpO1xuXHRcdH07XG5cdH1cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKTsgfSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd2hlbi9saWIvZW52LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJjbGFzcyBUZXJyYWluIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTAsIGZyYW1lPSdjYWN0dXMnKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9IFwidGVycmFpbi8je2ZyYW1lfVwiXG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgZnJhbWVcblxuICAgICMgc2V0IHBoeXNpY3MgYm9keVxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG4gICAgIyBhZGQgY3JvcCByZWN0XG4gICAgQGNyb3BSZWN0ID0gQGdhbWUuYWRkLmdyYXBoaWNzKClcblxuICAgIHJldHVybiBAXG5cbiAgZGVmb3JtOiAoY29sbGlzaW9uX3kpIC0+XG4gICAgaGVpZ2h0ID0gY29sbGlzaW9uX3kgLSBAeVxuICAgICMgZGVmb3JtIGJvZHlcbiAgICBAYm9keS5zZXRTaXplIEB3aWR0aCwgQGhlaWdodCAtIGhlaWdodCwgMCwgaGVpZ2h0XG4gICAgQGRyYXdSZWN0IGhlaWdodFxuXG4gIHJlbG9hZDogLT4gQGNyb3BSZWN0LmNsZWFyKClcblxuICBkcmF3UmVjdDogKGhlaWdodCkgLT5cbiAgICBAY3JvcFJlY3QubGluZVN0eWxlIDBcbiAgICBAY3JvcFJlY3QuYmVnaW5GaWxsIFwiMHgwMDAwMDBcIlxuICAgIEBjcm9wUmVjdC5kcmF3UmVjdCBAeCwgQHksIEB3aWR0aCwgaGVpZ2h0XG4gICAgQGNyb3BSZWN0LmVuZEZpbGwoKVxuICAgIEBnYW1lLndvcmxkLmJyaW5nVG9Ub3AgQGNyb3BSZWN0XG5cbm1vZHVsZS5leHBvcnRzID0gVGVycmFpblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvdGVycmFpbi5jb2ZmZWVcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24oKSB7XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBlcnJvciB0eXBlIGZvciBwcm9taXNlcyByZWplY3RlZCBieSBwcm9taXNlLnRpbWVvdXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRmdW5jdGlvbiBUaW1lb3V0RXJyb3IgKG1lc3NhZ2UpIHtcblx0XHRFcnJvci5jYWxsKHRoaXMpO1xuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdFx0dGhpcy5uYW1lID0gVGltZW91dEVycm9yLm5hbWU7XG5cdFx0aWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgVGltZW91dEVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRUaW1lb3V0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuXHRUaW1lb3V0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGltZW91dEVycm9yO1xuXG5cdHJldHVybiBUaW1lb3V0RXJyb3I7XG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgfSkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3doZW4vbGliL1RpbWVvdXRFcnJvci5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbigpIHtcblxuXHRtYWtlQXBwbHkudHJ5Q2F0Y2hSZXNvbHZlID0gdHJ5Q2F0Y2hSZXNvbHZlO1xuXG5cdHJldHVybiBtYWtlQXBwbHk7XG5cblx0ZnVuY3Rpb24gbWFrZUFwcGx5KFByb21pc2UsIGNhbGwpIHtcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuXHRcdFx0Y2FsbCA9IHRyeUNhdGNoUmVzb2x2ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXBwbHk7XG5cblx0XHRmdW5jdGlvbiBhcHBseShmLCB0aGlzQXJnLCBhcmdzKSB7XG5cdFx0XHR2YXIgcCA9IFByb21pc2UuX2RlZmVyKCk7XG5cdFx0XHR2YXIgbCA9IGFyZ3MubGVuZ3RoO1xuXHRcdFx0dmFyIHBhcmFtcyA9IG5ldyBBcnJheShsKTtcblx0XHRcdGNhbGxBbmRSZXNvbHZlKHsgZjpmLCB0aGlzQXJnOnRoaXNBcmcsIGFyZ3M6YXJncywgcGFyYW1zOnBhcmFtcywgaTpsLTEsIGNhbGw6Y2FsbCB9LCBwLl9oYW5kbGVyKTtcblxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2FsbEFuZFJlc29sdmUoYywgaCkge1xuXHRcdFx0aWYoYy5pIDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gY2FsbChjLmYsIGMudGhpc0FyZywgYy5wYXJhbXMsIGgpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaGFuZGxlciA9IFByb21pc2UuX2hhbmRsZXIoYy5hcmdzW2MuaV0pO1xuXHRcdFx0aGFuZGxlci5mb2xkKGNhbGxBbmRSZXNvbHZlTmV4dCwgYywgdm9pZCAwLCBoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjYWxsQW5kUmVzb2x2ZU5leHQoYywgeCwgaCkge1xuXHRcdFx0Yy5wYXJhbXNbYy5pXSA9IHg7XG5cdFx0XHRjLmkgLT0gMTtcblx0XHRcdGNhbGxBbmRSZXNvbHZlKGMsIGgpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRyeUNhdGNoUmVzb2x2ZShmLCB0aGlzQXJnLCBhcmdzLCByZXNvbHZlcikge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXNvbHZlci5yZXNvbHZlKGYuYXBwbHkodGhpc0FyZywgYXJncykpO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0cmVzb2x2ZXIucmVqZWN0KGUpO1xuXHRcdH1cblx0fVxuXG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgfSkpO1xuXG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3doZW4vbGliL2FwcGx5LmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdHJldHVybiB7XG5cdFx0cGVuZGluZzogdG9QZW5kaW5nU3RhdGUsXG5cdFx0ZnVsZmlsbGVkOiB0b0Z1bGZpbGxlZFN0YXRlLFxuXHRcdHJlamVjdGVkOiB0b1JlamVjdGVkU3RhdGUsXG5cdFx0aW5zcGVjdDogaW5zcGVjdFxuXHR9O1xuXG5cdGZ1bmN0aW9uIHRvUGVuZGluZ1N0YXRlKCkge1xuXHRcdHJldHVybiB7IHN0YXRlOiAncGVuZGluZycgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvUmVqZWN0ZWRTdGF0ZShlKSB7XG5cdFx0cmV0dXJuIHsgc3RhdGU6ICdyZWplY3RlZCcsIHJlYXNvbjogZSB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9GdWxmaWxsZWRTdGF0ZSh4KSB7XG5cdFx0cmV0dXJuIHsgc3RhdGU6ICdmdWxmaWxsZWQnLCB2YWx1ZTogeCB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5zcGVjdChoYW5kbGVyKSB7XG5cdFx0dmFyIHN0YXRlID0gaGFuZGxlci5zdGF0ZSgpO1xuXHRcdHJldHVybiBzdGF0ZSA9PT0gMCA/IHRvUGVuZGluZ1N0YXRlKClcblx0XHRcdCA6IHN0YXRlID4gMCAgID8gdG9GdWxmaWxsZWRTdGF0ZShoYW5kbGVyLnZhbHVlKVxuXHRcdFx0ICAgICAgICAgICAgICAgOiB0b1JlamVjdGVkU3RhdGUoaGFuZGxlci52YWx1ZSk7XG5cdH1cblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3doZW4vbGliL3N0YXRlLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpRdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImF0bGFzID1cbiAgJ2ZyYW1lcyc6XG4gICAgJ3RleHQvMCc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ0MlxuICAgICAgICAneSc6IDE3NlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvMSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ5NFxuICAgICAgICAneSc6IDJcbiAgICAgICAgJ3cnOiAxNlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxNlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0LzInOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NjhcbiAgICAgICAgJ3knOiAxNzZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0LzMnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NDJcbiAgICAgICAgJ3knOiAyMThcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0LzQnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NjhcbiAgICAgICAgJ3knOiAyMThcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0LzUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAxNzRcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0LzYnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAyMTZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0LzcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAyNThcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0LzgnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAzMDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0LzknOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMjhcbiAgICAgICAgJ3knOiAxNzBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L0RSQVcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMzZcbiAgICAgICAgJ3knOiAyXG4gICAgICAgICd3JzogMTU2XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTU2XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9HQU1FJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTMyXG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9HRVRfUkVBRFknOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNDRcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L0dPVF9NRSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDI3NlxuICAgICAgICAneSc6IDQ0XG4gICAgICAgICd3JzogMjEyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjEyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9HVU5fRklHSFQnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogODZcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L0lOU0VSVF9DT0lOJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDJcbiAgICAgICAgJ3cnOiAzMzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAzMzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L09WRVInOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyNTRcbiAgICAgICAgJ3knOiAxMjhcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICdhbW1vJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjc2XG4gICAgICAgICd5JzogODZcbiAgICAgICAgJ3cnOiAxODBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxODBcbiAgICAgICAgJ2gnOiA0MFxuICAgICdidWxsZXQnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0OTBcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDhcbiAgICAgICAgJ2gnOiA4XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDhcbiAgICAgICAgJ2gnOiA4XG4gICAgJ3RlcnJhaW4vY2FjdHVzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDU4XG4gICAgICAgICd5JzogODZcbiAgICAgICAgJ3cnOiAzMlxuICAgICAgICAnaCc6IDg4XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAzMlxuICAgICAgICAnaCc6IDg4XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICdjb3dib3kvZGVhZC9oaXQnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxOThcbiAgICAgICAgJ3knOiA1ODRcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzMlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzMlxuICAgICdjb3dib3kvZGVhZC9yaXAnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogMTI4XG4gICAgICAgICdoJzogNDRcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTI4XG4gICAgICAgICdoJzogNDRcbiAgICAnY293Ym95L2hpZ2gvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMzJcbiAgICAgICAgJ3knOiAxNzBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvaGlnaC9vbmUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogMTc0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2hpZ2gvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDMxMlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9sb3cvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyMzBcbiAgICAgICAgJ3knOiAxNzBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDMyOFxuICAgICAgICAneSc6IDIzOFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9sb3cvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTI2XG4gICAgICAgICd5JzogMzA4XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZC9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDIyNFxuICAgICAgICAneSc6IDMwOFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWQvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzIyXG4gICAgICAgICd5JzogMzc2XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZC90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiA0NDZcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkaGlnaC9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiA0NTBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkaGlnaC9vbmUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxOThcbiAgICAgICAgJ3knOiA0NDZcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkaGlnaC90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyOTZcbiAgICAgICAgJ3knOiA1MTRcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkbG93L2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzk0XG4gICAgICAgICd5JzogNTE0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy9vbmUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiA1ODRcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkbG93L3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiA1ODhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICd0ZXJyYWluL3RyZWUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzNzZcbiAgICAgICAgJ3knOiAxMjhcbiAgICAgICAgJ3cnOiA2NFxuICAgICAgICAnaCc6IDEwOFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA2NFxuICAgICAgICAnaCc6IDEwOFxuICAgICd3YWdvbic6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQyMFxuICAgICAgICAneSc6IDM3NlxuICAgICAgICAndyc6IDg4XG4gICAgICAgICdoJzogOTZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDg4XG4gICAgICAgICdoJzogOTZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICdtZXRhJzpcbiAgICAnYXBwJzogJ2h0dHA6Ly93d3cuY29kZWFuZHdlYi5jb20vdGV4dHVyZXBhY2tlcidcbiAgICAndmVyc2lvbic6ICcxLjAnXG4gICAgJ2ltYWdlJzogJ2F0bGFzLnBuZydcbiAgICAnZm9ybWF0JzogJ1JHQkE4ODg4J1xuICAgICdzaXplJzpcbiAgICAgICd3JzogNTEyXG4gICAgICAnaCc6IDEwMjRcbiAgICAnc2NhbGUnOiAnMSdcbiAgICAnc21hcnR1cGRhdGUnOiAnJFRleHR1cmVQYWNrZXI6U21hcnRVcGRhdGU6MTA2YjdjMjcxNmM0MjM1NTkzNTNmMTRiNDQxM2QyNDM6ZWYzMDdiMGFiZDEyMDc5ODgxMWEzNWRiNWU4NjA2Y2Y6Y2JjZTZiNTNmMGY0OWUwYmYxNTE3M2MyNWM0MWY4NzYkJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF0bGFzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2F0bGFzLmNvZmZlZVxuICoqLyIsImxldmVscyA9IHtcbiAgMTpcbiAgICB3YWdvbjogZmFsc2VcbiAgICBudW1fY2FjdHVzOiAxXG4gIDI6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgbnVtX2NhY3R1czogMlxuICAzOlxuICAgIHdhZ29uOiBmYWxzZVxuICAgIG51bV9jYWN0dXM6IDNcbiAgNDpcbiAgICB3YWdvbjogZmFsc2VcbiAgICBudW1fY2FjdHVzOiA0XG4gIDU6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiA0XG4gIDY6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiA1XG4gIDc6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiAyXG4gICAgbnVtX3RyZWU6IDFcbiAgODpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDFcbiAgICBudW1fdHJlZTogMlxuICA5OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogMlxuICAgIG51bV90cmVlOiAyXG4gIDEwOlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogM1xuICAgIG51bV90cmVlOiAyXG4gIDExOlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogNFxuICAgIG51bV90cmVlOiAyXG4gIDEyOlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogM1xuICAgIG51bV90cmVlOiAzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGV2ZWxzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2xldmVscy5jb2ZmZWVcbiAqKi8iLCJzZnggPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNmeFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZnguY29mZmVlXG4gKiovIiwiJHdpbmRvdyA9ICQod2luZG93KVxuXG4jIG1vYmlsZSBmbGFnXG5pc01vYmlsZSA9IC0+XG4gIGlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKVxuICAgIHRydWVcbiAgZWxzZVxuICAgIGZhbHNlXG5cbmxhdW5jaCA9IChjZG49XCIvXCIsIHZlcnNpb249XCI/dj0wLjAuMFwiKSAtPlxuXG4gICMgNDozXG4gIGdhbWVfd2lkdGggPSAxMDg4XG4gIGdhbWVfaGVpZ2h0ID0gODE2XG5cbiAgIyBDb25zdHJ1Y3QgR2FtZVxuICBnYW1lID0gbmV3IFBoYXNlci5HYW1lKFxuICAgIGdhbWVfd2lkdGgsICAgIyB3aWR0aFxuICAgIGdhbWVfaGVpZ2h0LCAgIyBoZWlnaHRcbiAgICBQaGFzZXIuQVVUTywgICMgcmVuZGVyZXJcbiAgICAnZ2FtZScsICAgICAgICMgSUQgb2YgcGFyZW50IGVsZW1lbnRcbiAgICAnYm9vdCcsICAgICAgICMgc3RhdGVcbiAgICBmYWxzZSwgICAgICAgICMgdHJhbnNwYXJlbnRcbiAgICBmYWxzZSwgICAgICAgICMgYW50aWFsaWFzXG4gICAgbnVsbCAgICAgICAgICAjIHBoeXNpY3NDb25maWdcbiAgKVxuXG4gICMgY2RuXG4gIGdhbWUuY2RuID0gY2RuXG4gIGdhbWUuaG9zdHVybCA9IHVuZGVmaW5lZCAjaG9zdHVybFxuXG4gICMgZ2FtZSB2ZXJzaW9uXG4gIGdhbWUudmVyc2lvbiA9IHZlcnNpb25cblxuICAjIGRlYnVnXG4gIGdhbWUuZGVidWdNb2RlID0gZmFsc2VcbiAgZ2FtZS5kZWJ1Z01vZGUgPSB0cnVlXG5cbiAgZ2FtZS5lbmFibGVNdXNpYyA9ICFnYW1lLmRlYnVnTW9kZVxuICBnYW1lLmVuYWJsZVNGWCA9ICFnYW1lLmRlYnVnTW9kZVxuXG4gICMgY29uc3RhbnRzXG4gIGdhbWUuY29uc3RhbnRzID1cbiAgICBTVEFURVM6IFsnYm9vdCcsICdwcmVsb2FkJywgJ2ludHJvJywgJ2dhbWUnLCAncmVzZXQnXVxuICAgIExFVkVMUzogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMnXG4gICAgU0ZYOiByZXF1aXJlICdjb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3NmeCdcblxuICAjIGRlZmF1bHQgbGV2ZWxcbiAgZ2FtZS5sZXZlbCA9IDFcblxuICAjIGtlZXAgdGhlIGdhbWUgd2l0aGluIHRoZSBwYWdlXG4gIGdhbWUuc2NhbGVyID0gLT5cbiAgICAkZ2FtZSA9ICQoXCIjZ2FtZVwiKVxuICAgICRjYW52YXMgPSAkKFwiY2FudmFzXCIpXG4gICAgJHdpbmRvdyA9ICQod2luZG93KVxuXG4gICAgaWYgIWlzTW9iaWxlKClcbiAgICAgICRnYW1lID0gJChcIiNnYW1lXCIpXG4gICAgICAkY2FudmFzID0gJChcImNhbnZhc1wiKVxuICAgICAgJHdpbmRvdyA9ICQod2luZG93KVxuXG4gICAgICBpZiAkZ2FtZS5oZWlnaHQoKSA+ICR3aW5kb3cuaGVpZ2h0KCkgLSAxNTBcbiAgICAgICAgJGdhbWUuY3NzKFwibWF4LWhlaWdodFwiLCAoJHdpbmRvdy5oZWlnaHQoKSAtIDE1MCkgKyBcInB4XCIpXG4gICAgICBlbHNlXG4gICAgICAgICRnYW1lLmNzcyhcIm1heC1oZWlnaHRcIiwgXCJhdXRvXCIpXG5cbiAgIyByZXF1aXJlIHN0YXRlcyBhbmQgYm9vdCFcbiAgZ2FtZS5zdGF0ZS5hZGQgc3RhdGUsIHJlcXVpcmUoXCIuL3N0YXRlcy8je3N0YXRlfS5jb2ZmZWVcIikgZm9yIHN0YXRlIGluIGdhbWUuY29uc3RhbnRzLlNUQVRFU1xuICBnYW1lLnN0YXRlLnN0YXJ0ICdib290J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxhdW5jaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2xhdW5jaC5jb2ZmZWVcbiAqKi8iLCJjbGFzcyBBbW1vIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHBsYXllcikgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnYW1tbydcbiAgICB4ID0gaWYgQHBsYXllci5pc19wbGF5ZXJfb25lIHRoZW4gOTQgZWxzZSA4MTZcbiAgICB5ID0gQGdhbWUuaGVpZ2h0IC0gNDVcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBmcmFtZVxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG4gICAgQGhpZGUoKVxuXG4gICAgIyBhZGQgY3JvcCByZWN0XG4gICAgQGNyb3BSZWN0ID0gQGdhbWUuYWRkLmdyYXBoaWNzKClcblxuICAgIHJldHVybiBAXG5cbiAgc2hvdzogLT4gQHJlc2V0IEB4LCBAeVxuICBoaWRlOiAtPiBAa2lsbCgpXG5cbiAgY3JvcDogLT5cbiAgICB3aWR0aCA9IEB3aWR0aCAtIEBwbGF5ZXIubnVtX2J1bGxldHMgLyA2ICogQHdpZHRoXG4gICAgQGRyYXdSZWN0IHdpZHRoXG5cbiAgcmVsb2FkOiAtPiBAY3JvcFJlY3QuY2xlYXIoKVxuXG4gIGRyYXdSZWN0OiAod2lkdGgpIC0+XG4gICAgQGNyb3BSZWN0LmxpbmVTdHlsZSAwXG4gICAgQGNyb3BSZWN0LmJlZ2luRmlsbCBcIjB4MDAwMDAwXCJcbiAgICBAY3JvcFJlY3QuZHJhd1JlY3QgQHgsIEB5LCB3aWR0aCwgQGhlaWdodFxuICAgIEBjcm9wUmVjdC5lbmRGaWxsKClcblxubW9kdWxlLmV4cG9ydHMgPSBBbW1vXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9BbW1vLmNvZmZlZVxuICoqLyIsIiMgYnVsbGV0IHBvc2l0aW9uIGNvbmZpZ1xuR1VOX1BPU19DT05GSUcgPVxuICBoaWdoOiAgICB7eDogNDUsIHk6IDE1LCBkZWc6IC01Mn1cbiAgbWVkaGlnaDoge3g6IDUwLCB5OiAzNSwgZGVnOiAtMjZ9XG4gIG1lZDogICAgIHt4OiA1NSwgeTogNDYsIGRlZzogMH1cbiAgbWVkbG93OiAge3g6IDUwLCB5OiA3NSwgZGVnOiAyMn1cbiAgbG93OiAgICAge3g6IDQ1LCB5OiA4OCwgZGVnOiA0Mn1cblxuIyBzcGVlZCBvZiBmaXJlZCBidWxsZXRcblNQRUVEID0gMTAwMFxuXG5jbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9ICdidWxsZXQnXG4gICAgc3VwZXIgQGdhbWUsIEBwbGF5ZXIuYm9keS54LCBAcGxheWVyLmJvZHkueSwga2V5LCBmcmFtZVxuXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQFxuXG4gICAgIyB2aXNpYmlsaXR5IHZhclxuICAgIEB0aW1lID0gRGF0ZS5ub3coKVxuXG4gICAgIyBib3VuY2Ugb2ZmIHN1cmZhY2VzXG4gICAgQGJvZHkuYm91bmNlLnNldCAxXG5cbiAgICAjIHBsYXllclxuICAgIEBpc19wbGF5ZXJfb25lID0gQHBsYXllci5pc19wbGF5ZXJfb25lXG5cbiAgICAjIGJvdW5kc1xuICAgIEBvdXRPZkJvdW5kc0tpbGwgPSB0cnVlXG5cbiAgICAjIGNsZWFuIHVwXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcbiAgICBAa2lsbCgpXG5cbiAgICByZXR1cm4gQFxuXG4gIHNob290OiAtPlxuICAgIGd1bl9wb3MgPSBAcGxheWVyLmd1bl9wb3NbQHBsYXllci5ndW5fcG9zX2luZGV4XVxuICAgIHBvcyA9IEdVTl9QT1NfQ09ORklHW2d1bl9wb3NdXG4gICAgeCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gQHBsYXllci5ib2R5LnJpZ2h0ICsgcG9zLnggZWxzZSBAcGxheWVyLmJvZHkueCAtIHBvcy54XG4gICAgeSA9IEBwbGF5ZXIuYm9keS55ICsgcG9zLnlcbiAgICBhbmdsZSA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gcG9zLmRlZyBlbHNlIDE4MCAtIHBvcy5kZWdcbiAgICAjIHJldml2ZSB0aGUgYnVsbGV0XG4gICAgQHJlc2V0IHgsIHlcbiAgICAjIHNldCB2ZWxvY2l0eVxuICAgIEBnYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlIGFuZ2xlLCBTUEVFRCwgQGJvZHkudmVsb2NpdHlcblxuY2xhc3MgQnVsbGV0cyBleHRlbmRzIFBoYXNlci5Hcm91cFxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHBsYXllcikgLT5cbiAgICBzdXBlciBAZ2FtZSwgbnVsbCwgJ2J1bGxldHMnLCBmYWxzZSwgdHJ1ZSwgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHlcbiAgICBAYWRkIG5ldyBCdWxsZXQoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSBmb3IgbiBpbiBbMS4uQHBsYXllci5udW1fYnVsbGV0c11cblxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cbiAgc2hvb3Q6IC0+IEBnZXRGaXJzdERlYWQoKS5zaG9vdCgpXG5cbm1vZHVsZS5leHBvcnRzID0gQnVsbGV0c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQnVsbGV0cy5jb2ZmZWVcbiAqKi8iLCJUZXJyYWluID0gcmVxdWlyZSAnLi90ZXJyYWluLmNvZmZlZSdcblxuY2xhc3MgQ2FjdHVzIGV4dGVuZHMgVGVycmFpblxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIEBnYW1lX3N0YXRlLCB4LCB5LCAnY2FjdHVzJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhY3R1c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ2FjdHVzLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ2VpbGluZyBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgeV9vZmZzZXQ9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgMCwgeV9vZmZzZXRcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICBAYm9keS5zZXRTaXplIEBnYW1lLndvcmxkLndpZHRoLCA1LCAwLCAwXG4gICAgQGJvZHkuYWxsb3dHcmF2aXR5ID0gZmFsc2VcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0NlaWxpbmcuY29mZmVlXG4gKiovIiwiV2hlbiA9IHJlcXVpcmUgJ3doZW4nXG5CdWxsZXRzID0gcmVxdWlyZSAnLi9CdWxsZXRzLmNvZmZlZSdcbkFtbW8gPSByZXF1aXJlICcuL0FtbW8uY29mZmVlJ1xuVGV4dCA9IHJlcXVpcmUgJy4vVGV4dC5jb2ZmZWUnXG5TdGF0ZU1hY2hpbmUgPSByZXF1aXJlICdqYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmUnXG5cbiMgUE9TSVRJT04gQ09OU1RBTlRTXG5QTEFZRVJfT05FX1ggPSAyMDBcblBMQVlFUl9PTkVfWSA9IDQ5NVxuUExBWUVSX1RXT19YID0gODg4XG5QTEFZRVJfVFdPX1kgPSA0OTVcblxuIyBNT1ZFTUVOVCBDT05TVEFOVFNcblNQRUVEID0gNjBcbkRFTFRBID0gMTVcbkZSQU1FUkFURSA9IDdcblxuIyBDT05UUk9MIENPTlNUQU5UU1xuUExBWUVSX09ORV9DT05UUk9MUyA9XG4gIG1vdmVfdXA6ICdXJ1xuICBtb3ZlX2Rvd246ICdTJ1xuICBtb3ZlX2xlZnQ6ICdBJ1xuICBtb3ZlX3JpZ2h0OiAnRCdcbiAgYWltX3VwOiAnUSdcbiAgYWltX2Rvd246ICdFJ1xuICBzaG9vdDogJ0YnXG5cblBMQVlFUl9UV09fQ09OVFJPTFMgPVxuICBtb3ZlX3VwOiAnSSdcbiAgbW92ZV9kb3duOiAnSydcbiAgbW92ZV9sZWZ0OiAnSidcbiAgbW92ZV9yaWdodDogJ0wnXG4gIGFpbV91cDogJ08nXG4gIGFpbV9kb3duOiAnVSdcbiAgc2hvb3Q6ICdIJ1xuXG5jbGFzcyBDb3dib3kgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAaXNfcGxheWVyX29uZT10cnVlKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9ICdjb3dib3kvbWVkL3R3bydcbiAgICB4ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBQTEFZRVJfT05FX1ggZWxzZSBQTEFZRVJfVFdPX1hcbiAgICB5ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBQTEFZRVJfT05FX1kgZWxzZSBQTEFZRVJfVFdPX1lcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBmcmFtZVxuXG4gICAgIyBlbmFibGUgYXJjYWRlIHBoeXNpY3NcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICAjIHNhdmUgd2lkdGggYW5kIGhlaWdodCBvZiBzcHJpdGUgYm9keVxuICAgIEB3aWR0aCA9IEBib2R5LndpZHRoXG4gICAgQGhlaWdodCA9IEBib2R5LmhlaWdodFxuICAgICMgY2hhbmdlIGJvZHkgc2l6ZSBmb3IgbW9yZSBhY2N1cmF0ZSBoaXQgY29sbGlzaW9uXG4gICAgQGJvZHkuc2V0U2l6ZSA0NSwgMTM2LCAyNSwgMFxuICAgIEBib2R5LnNldFNpemUgNDUsIDEzNiwgLTI1LCAwIGlmIEBpc19wbGF5ZXJfb25lXG4gICAgIyBkb24ndCBsZXQgYnVsbGV0IHBoeXNpY3MgcHVzaCB5YSBiYWNrXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuICAgICMgc2V0IGFuY2hvciB0byBob3Jpem9udGFsIGNlbnRlciBzbyBzcHJpdGUgZmxpcHMgYXJvdW5kIGl0cyBtaWRkbGVcbiAgICBAYW5jaG9yLnNldFRvIC41LCAxXG4gICAgIyBmbGlwIHNwcml0ZSBpZiBpcyBwbGF5ZXIgdHdvXG4gICAgQHNjYWxlLnggPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIC0xIGVsc2UgMVxuXG4gICAgIyBkaXJlY3Rpb24gb2JqZWN0XG4gICAgQGRpcmVjdGlvbiA9XG4gICAgICB1cDogZmFsc2VcbiAgICAgIGRvd246IGZhbHNlXG4gICAgICBsZWZ0OiBmYWxzZVxuICAgICAgcmlnaHQ6IGZhbHNlXG5cbiAgICAjIGFpbSBvYmplY3RcbiAgICBAYWltID1cbiAgICAgIHVwOiBmYWxzZVxuICAgICAgZG93bjogZmFsc2VcblxuICAgICMgbW92ZW1lbnQgdmFyc1xuICAgIEB0aW1lID0gRGF0ZS5ub3coKVxuICAgIEBtb3ZpbmcgPSBmYWxzZVxuICAgIEBkZWFkID0gZmFsc2VcbiAgICBAaW5wdXRfZGlzYWJsZWQgPSB0cnVlXG5cbiAgICAjIGZyYW1lIHZhcnNcbiAgICBAZ3VuX3BvcyA9IFsnbG93JywnbWVkbG93JywnbWVkJywnbWVkaGlnaCcsJ2hpZ2gnXVxuICAgIEBsZWdfcG9zID0gWyd0d28nLCdvbmUnLCdjcm9zcyddXG4gICAgQGd1bl9wb3NfaW5kZXggPSAyXG4gICAgQGxlZ19wb3NfaW5kZXggPSAxXG5cbiAgICAjIGh1ZCB2YXJzXG4gICAgQHdpbnMgPSAwXG4gICAgQG51bV9idWxsZXRzID0gNlxuICAgIEBidWxsZXRzID0gbmV3IEJ1bGxldHMgQGdhbWUsIEBnYW1lX3N0YXRlLCBAXG4gICAgQGFtbW8gPSBuZXcgQW1tbyBAZ2FtZSwgQGdhbWVfc3RhdGUsIEBcblxuICAgICMgdGV4dCBmb3IgZGllIHN0YXRlXG4gICAgQHRleHQgPSBuZXcgVGV4dCBAZ2FtZSwgQGdhbWVfc3RhdGUsICdnb3QgbWUnXG5cbiAgICAjIHNldHVwIGNvbnRyb2xzXG4gICAgQHNldHVwQ29udHJvbHMoKVxuICAgICMgc2V0dXAgYW5pbWF0aW9uc1xuICAgIEBzZXR1cEFuaW1hdGlvbnMoKVxuICAgICMgY3JlYXRlIHN0YXRlIG1hY2hpbmVcbiAgICBAY3JlYXRlU3RhdGVNYWNoaW5lKClcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgIEBraWxsKClcblxuICAgIHJldHVybiBAXG5cbiAgcnVuSW50cm86IChjYikgLT5cbiAgICBAaW50cm9fY2FsbGJhY2sgPSBjYlxuICAgIEByZWxvYWQoKVxuICAgIEBraWxsKClcbiAgICBAaW5faW50cm9fY3V0c2NlbmUgPSB0cnVlXG4gICAgaWYgQGlzX3BsYXllcl9vbmVcbiAgICAgIEByZXNldCgtNDgsIFBMQVlFUl9PTkVfWSlcbiAgICAgIEBkaXJlY3Rpb24ucmlnaHQgPSB0cnVlXG4gICAgZWxzZVxuICAgICAgQHJlc2V0KDExMzYgLCBQTEFZRVJfVFdPX1kpXG4gICAgICBAZGlyZWN0aW9uLmxlZnQgPSB0cnVlXG4gICAgQGd1bl9wb3NfaW5kZXggPSAyXG4gICAgQG1vdmluZyA9IHRydWVcblxuICB1cGRhdGU6IC0+XG4gICAgIyBoYW5kbGUgaW5jcmVtZW50YWwgbW92ZW1lbnRcbiAgICBpZiBAc3RhdGUuY3VycmVudCAhPSAnZHlpbmcnIGFuZCAoIUBpbnB1dF9kaXNhYmxlZCBvciBAaW5faW50cm9fY3V0c2NlbmUpXG4gICAgICBjdXJyZW50X3RpbWUgPSBEYXRlLm5vdygpXG4gICAgICBpZiBjdXJyZW50X3RpbWUgLSBAdGltZSA+IFNQRUVEXG4gICAgICAgIEBib2R5LnkgLT0gREVMVEEgaWYgQGRpcmVjdGlvbi51cCAgICBhbmQgQGJvZHkueSA+IEBnYW1lX3N0YXRlLmNlaWxpbmcueSBhbmQgIUBpbl9pbnRyb19jdXRzY2VuZVxuICAgICAgICBAYm9keS55ICs9IERFTFRBIGlmIEBkaXJlY3Rpb24uZG93biAgYW5kIEBib2R5LnkgPCBAZ2FtZV9zdGF0ZS5mbG9vci55IC0gQGJvZHkuaGVpZ2h0IGFuZCAhQGluX2ludHJvX2N1dHNjZW5lXG4gICAgICAgIGlmIEBpc19wbGF5ZXJfb25lXG4gICAgICAgICAgQGJvZHkueCAtPSBERUxUQSBpZiBAZGlyZWN0aW9uLmxlZnQgIGFuZCBAYm9keS54ID4gQGdhbWVfc3RhdGUubGVmdF93YWxsX291dGVyLmJvZHkueFxuICAgICAgICAgIEBib2R5LnggKz0gREVMVEEgaWYgQGRpcmVjdGlvbi5yaWdodCBhbmQgQGJvZHkucmlnaHQgPCBAZ2FtZV9zdGF0ZS5sZWZ0X3dhbGwuYm9keS54XG4gICAgICAgICAgaWYgQGluX2ludHJvX2N1dHNjZW5lIGFuZCBAYm9keS5yaWdodCA+PSBQTEFZRVJfT05FX1hcbiAgICAgICAgICAgIEBpbl9pbnRyb19jdXRzY2VuZSA9IGZhbHNlXG4gICAgICAgICAgICBAZGlyZWN0aW9uLnJpZ2h0ID0gZmFsc2VcbiAgICAgICAgZWxzZVxuICAgICAgICAgIEBib2R5LnggLT0gREVMVEEgaWYgQGRpcmVjdGlvbi5sZWZ0ICBhbmQgQGJvZHkueCA+IEBnYW1lX3N0YXRlLnJpZ2h0X3dhbGwuYm9keS54XG4gICAgICAgICAgQGJvZHkueCArPSBERUxUQSBpZiBAZGlyZWN0aW9uLnJpZ2h0IGFuZCBAYm9keS5yaWdodCA8IEBnYW1lX3N0YXRlLnJpZ2h0X3dhbGxfb3V0ZXIuYm9keS54XG4gICAgICAgICAgaWYgQGluX2ludHJvX2N1dHNjZW5lIGFuZCBAYm9keS54IDw9IFBMQVlFUl9UV09fWFxuICAgICAgICAgICAgQGluX2ludHJvX2N1dHNjZW5lID0gZmFsc2VcbiAgICAgICAgICAgIEBkaXJlY3Rpb24ubGVmdCA9IGZhbHNlXG4gICAgICAgICAgICBAaW50cm9fY2FsbGJhY2soKSAjIGNhbGwgdGhlIGludHJvIGNhbGxiYWNrXG4gICAgICAgICMgQGFuaW1hdGVfYWltX3VwKCkgIGlmIEBhaW0udXBcbiAgICAgICAgIyBAYW5pbWF0ZV9haW1fZG93bigpIGlmIEBhaW0uZG93blxuICAgICAgICBAdGltZSA9IGN1cnJlbnRfdGltZVxuXG4gICAgICAjIGlzIHRoZSBwbGF5ZXIgbW92aW5nP1xuICAgICAgQG1vdmluZyA9IGZhbHNlIHVubGVzcyBAZGlyZWN0aW9uLnVwIHx8IEBkaXJlY3Rpb24uZG93biB8fCBAZGlyZWN0aW9uLmxlZnQgfHwgQGRpcmVjdGlvbi5yaWdodFxuXG4gICAgICAjIHRyaWdnZXIgbW92ZSBhbmltYXRpb25cbiAgICAgIEBtb3ZlKCkgaWYgIEBtb3ZpbmcgYW5kIEBzdGF0ZS5jdXJyZW50ICE9ICdtb3ZpbmcnXG4gICAgICBAaWRsZSgpIGlmICFAbW92aW5nIGFuZCBAc3RhdGUuY3VycmVudCAhPSAnaWRsZSdcblxuICAgICMgaGFuZGxlIGR5aW5nIHNlcXVlbmNlXG4gICAgZWxzZVxuICAgICAgIyBzaG93IFwiR09UIE1FIVwiIHRleHRcbiAgICAgIGN1cnJlbnRfZnJhbWUgPSBAYW5pbWF0aW9ucy5jdXJyZW50RnJhbWUubmFtZVxuICAgICAgaWYgY3VycmVudF9mcmFtZSBpcyAnY293Ym95L2RlYWQvcmlwJyBhbmQgIUB0ZXh0LnZpc2libGVcbiAgICAgICAgeCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gQGJvZHkucmlnaHQgLSBAdGV4dC53aWR0aCAvIDIgZWxzZSBAYm9keS54IC0gQHRleHQud2lkdGggLyAyXG4gICAgICAgIHkgPSBAYm9keS55XG4gICAgICAgIEB0ZXh0LnBsYWNlIHgsIHlcbiAgICAgICAgQHRleHQuc2hvdygpXG5cbiAgICAgICMgcmVzZXQgdGhlIHBsYXllcnNcblxuICAjIGRpc2FibGUgLyBlbmFibGUgbW92ZW1lbnRcbiAgZW5hYmxlSW5wdXQ6IC0+IEBpbnB1dF9kaXNhYmxlZCA9IGZhbHNlXG4gIGRpc2FibGVJbnB1dDogLT4gQGlucHV0X2Rpc2FibGVkID0gdHJ1ZVxuICB0b2dnbGVJbnB1dDogLT4gQGlucHV0X2Rpc2FibGVkID0gIUBpbnB1dF9kaXNhYmxlZFxuXG4gICMgY2hhbmdlIHN0YXRlXG4gIG1vdmU6ICAgICAgICAgICAtPiBAc3RhdGUuX21vdmUoKVxuICBpZGxlOiAgICAgICAgICAgLT4gQHN0YXRlLl9pZGxlKClcbiAgZGllOiAgICAgICAgICAgIC0+IEBzdGF0ZS5fZGllKClcblxuICAjIGNvbnRyb2wgZGlyZWN0aW9uXG4gIG1vdmVfdXA6ICAgICAgICAtPiBAZGlyZWN0aW9uLnVwICAgID0gdHJ1ZVxuICBtb3ZlX2xlZnQ6ICAgICAgLT4gQGRpcmVjdGlvbi5sZWZ0ICA9IHRydWVcbiAgbW92ZV9yaWdodDogICAgIC0+IEBkaXJlY3Rpb24ucmlnaHQgPSB0cnVlXG4gIG1vdmVfZG93bjogICAgICAtPiBAZGlyZWN0aW9uLmRvd24gID0gdHJ1ZVxuICBtb3ZlX3VwX29mZjogICAgLT4gQGRpcmVjdGlvbi51cCAgICA9IGZhbHNlXG4gIG1vdmVfbGVmdF9vZmY6ICAtPiBAZGlyZWN0aW9uLmxlZnQgID0gZmFsc2VcbiAgbW92ZV9yaWdodF9vZmY6IC0+IEBkaXJlY3Rpb24ucmlnaHQgPSBmYWxzZVxuICBtb3ZlX2Rvd25fb2ZmOiAgLT4gQGRpcmVjdGlvbi5kb3duICA9IGZhbHNlXG5cbiAgYWltX3VwOiAgICAgICAgIC0+IEBhbmltYXRlX2FpbV91cCgpXG4gIGFpbV9kb3duOiAgICAgICAtPiBAYW5pbWF0ZV9haW1fZG93bigpXG4gICMgYWltX3VwOiAgICAgICAgIC0+IEBhaW0udXAgICAgICAgICAgPSB0cnVlXG4gICMgYWltX2Rvd246ICAgICAgIC0+IEBhaW0uZG93biAgICAgICAgPSB0cnVlXG4gICMgYWltX3VwX29mZjogICAgIC0+IEBhaW0udXAgICAgICAgICAgPSBmYWxzZVxuICAjIGFpbV9kb3duX29mZjogICAtPiBAYWltLmRvd24gICAgICAgID0gZmFsc2VcblxuICAjIGZ1bGwgYW1tbyFcbiAgcmVsb2FkOiAtPlxuICAgIEBudW1fYnVsbGV0cyA9IDZcbiAgICBAYW1tby5yZWxvYWQoKVxuICAgIGIua2lsbCgpIGZvciBiIGluIEBidWxsZXRzLmNoaWxkcmVuXG5cbiAgIyBoYW5kbGUgYWltaW5nIGFuaW1hdGlvbnNcbiAgYW5pbWF0ZV9haW1fdXA6IC0+XG4gICAgdW5sZXNzIEBpbl9pbnRyb19jdXRzY2VuZVxuICAgICAgY3VycmVudF9mcmFtZSA9IEBhbmltYXRpb25zLmN1cnJlbnRGcmFtZS5uYW1lXG4gICAgICBAZ3VuX3Bvc19pbmRleCArPSAxIGlmIEBndW5fcG9zX2luZGV4IDwgQGd1bl9wb3MubGVuZ3RoIC0gMVxuXG4gICAgICBmb3IgcG9zLCBpbmRleCBpbiBAbGVnX3Bvc1xuICAgICAgICBAbGVnX3Bvc19pbmRleCA9IGluZGV4XG4gICAgICAgIGJyZWFrIGlmIGN1cnJlbnRfZnJhbWUubWF0Y2ggcG9zXG5cbiAgICAgIEBhbmltYXRpb25zLnN0b3AoKVxuICAgICAgQGFuaW1hdGlvbnMucGxheSBcIm1vdmUtI3tAZ3VuX3Bvc1tAZ3VuX3Bvc19pbmRleF19XCJcbiAgICAgIEBhbmltYXRpb25zLm5leHQgQGxlZ19wb3NfaW5kZXhcblxuICBhbmltYXRlX2FpbV9kb3duOiAtPlxuICAgIHVubGVzcyBAaW5faW50cm9fY3V0c2NlbmVcbiAgICAgIGN1cnJlbnRfZnJhbWUgPSBAYW5pbWF0aW9ucy5jdXJyZW50RnJhbWUubmFtZVxuICAgICAgQGd1bl9wb3NfaW5kZXggLT0gMSBpZiBAZ3VuX3Bvc19pbmRleCA+IDBcblxuICAgICAgZm9yIHBvcywgaW5kZXggaW4gQGxlZ19wb3NcbiAgICAgICAgQGxlZ19wb3NfaW5kZXggPSBpbmRleFxuICAgICAgICBicmVhayBpZiBjdXJyZW50X2ZyYW1lLm1hdGNoIHBvc1xuXG4gICAgICBAYW5pbWF0aW9ucy5zdG9wKClcbiAgICAgIEBhbmltYXRpb25zLnBsYXkgXCJtb3ZlLSN7QGd1bl9wb3NbQGd1bl9wb3NfaW5kZXhdfVwiXG4gICAgICBAYW5pbWF0aW9ucy5uZXh0IEBsZWdfcG9zX2luZGV4XG5cbiAgIyBzaG9vdCFcbiAgc2hvb3Q6IC0+XG4gICAgaWYgQG51bV9idWxsZXRzID4gMCBhbmQgIUBpbnB1dF9kaXNhYmxlZFxuICAgICAgQG51bV9idWxsZXRzIC09IDFcbiAgICAgIEBhbW1vLmNyb3AoKVxuICAgICAgQGJ1bGxldHMuc2hvb3QoKVxuXG4gIHNldHVwQ29udHJvbHM6IC0+XG4gICAgIyBtYXAgY29udHJvbCBrZXlzXG4gICAgY29udHJvbHMgPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIFBMQVlFUl9PTkVfQ09OVFJPTFMgZWxzZSBQTEFZRVJfVFdPX0NPTlRST0xTXG4gICAgXy5lYWNoIGNvbnRyb2xzLCAoa2V5LCBhY3Rpb24pID0+XG4gICAgICBpbnB1dCA9IEBnYW1lX3N0YXRlLmlucHV0LmtleWJvYXJkLmFkZEtleSBQaGFzZXIuS2V5Ym9hcmRba2V5XVxuICAgICAgaW5wdXQub25Eb3duLmFkZCA9PiBAW2FjdGlvbl0oKVxuICAgICAgaW5wdXQub25Eb3duLmFkZCA9PiBAbW92aW5nID0gdHJ1ZSBpZiBhY3Rpb24ubWF0Y2ggJ21vdmUnXG4gICAgICBpbnB1dC5vblVwLmFkZCAgID0+IEBbXCIje2FjdGlvbn1fb2ZmXCJdKCkgaWYgYWN0aW9uLm1hdGNoICdtb3ZlJ1xuICAgICAgIyBpbnB1dC5vblVwLmFkZCAgID0+IEBbXCIje2FjdGlvbn1fb2ZmXCJdKClcblxuICBzZXR1cEFuaW1hdGlvbnM6IC0+XG4gICAgIyBkaWUgYW5pbWF0aW9uXG4gICAgQGFuaW1hdGlvbnMuYWRkICdkaWUnLCBbXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvcmlwJ1xuICAgICAgJ2Nvd2JveS9kZWFkL3JpcCdcbiAgICAgICdjb3dib3kvZGVhZC9yaXAnXG4gICAgXSwgRlJBTUVSQVRFLCBmYWxzZVxuXG4gICAgIyBtb3ZlIGFuaW1hdGlub3NcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtaGlnaCcsIFtcbiAgICAgICdjb3dib3kvaGlnaC90d28nXG4gICAgICAnY293Ym95L2hpZ2gvb25lJ1xuICAgICAgJ2Nvd2JveS9oaWdoL2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9oaWdoL29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbG93JywgW1xuICAgICAgJ2Nvd2JveS9sb3cvdHdvJ1xuICAgICAgJ2Nvd2JveS9sb3cvb25lJ1xuICAgICAgJ2Nvd2JveS9sb3cvY3Jvc3MnXG4gICAgICAnY293Ym95L2xvdy9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLW1lZGhpZ2gnLCBbXG4gICAgICAnY293Ym95L21lZGhpZ2gvdHdvJ1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL29uZSdcbiAgICAgICdjb3dib3kvbWVkaGlnaC9jcm9zcydcbiAgICAgICdjb3dib3kvbWVkaGlnaC9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLW1lZGxvdycsIFtcbiAgICAgICdjb3dib3kvbWVkbG93L3R3bydcbiAgICAgICdjb3dib3kvbWVkbG93L29uZSdcbiAgICAgICdjb3dib3kvbWVkbG93L2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1tZWQnLCBbXG4gICAgICAnY293Ym95L21lZC90d28nXG4gICAgICAnY293Ym95L21lZC9vbmUnXG4gICAgICAnY293Ym95L21lZC9jcm9zcydcbiAgICAgICdjb3dib3kvbWVkL29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcblxuICBjcmVhdGVTdGF0ZU1hY2hpbmU6IC0+XG4gICAgQHN0YXRlID0gU3RhdGVNYWNoaW5lLmNyZWF0ZVxuICAgICAgaW5pdGlhbDogJ19pZGxlJ1xuICAgICAgZXZlbnRzOiBbXG4gICAgICAgIHsgbmFtZTogJ19pZGxlJywgZnJvbTogJyonLCB0bzogJ2lkbGluZycgfVxuICAgICAgICB7IG5hbWU6ICdfbW92ZScsIGZyb206ICcqJywgdG86ICdtb3ZpbmcnIH1cbiAgICAgICAgeyBuYW1lOiAnX2RpZScsICBmcm9tOiAnKicsIHRvOiAnZHlpbmcnICB9IF1cbiAgICAgIGNhbGxiYWNrczpcbiAgICAgICAgb25faWRsZTogKGV2ZW50LCBmcm9tLCB0bykgPT4gQGFuaW1hdGlvbnMuc3RvcCBudWxsLCB0cnVlXG4gICAgICAgIG9uX21vdmU6IChldmVudCwgZnJvbSwgdG8pID0+IEBwbGF5IFwibW92ZS0je0BndW5fcG9zW0BndW5fcG9zX2luZGV4XX1cIlxuICAgICAgICBvbl9kaWU6IChldmVudCwgZnJvbSwgdG8pICA9PiBAcGxheSBcImRpZVwiXG5cbm1vZHVsZS5leHBvcnRzID0gQ293Ym95XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9Db3dib3kuY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGbG9vciBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgeV9vZmZzZXQ9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgMCwgQGdhbWUuaGVpZ2h0ICsgeV9vZmZzZXRcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICBAYm9keS5zZXRTaXplIEBnYW1lLndvcmxkLndpZHRoLCA1LCAwLCAwXG4gICAgQGJvZHkuYWxsb3dHcmF2aXR5ID0gZmFsc2VcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0Zsb29yLmNvZmZlZVxuICoqLyIsIlRleHQgPSByZXF1aXJlICcuL1RleHQuY29mZmVlJ1xuXG5jbGFzcyBEaWdpdCBleHRlbmRzIFRleHRcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIGZyYW1lLCB4PTAsIHk9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgQGdhbWVfc3RhdGUsIGZyYW1lLCB4LCB5XG5cbmNsYXNzIEludGVnZXJcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBzdGFydF92YWx1ZT0wLCBAeD0wLCBAeT0wKSAtPlxuICAgIEB2YWx1ZSA9IEBzdGFydF92YWx1ZVxuXG4gICAgQGxlZnRfZGlnaXRzID0ge31cbiAgICBAbGVmdF9kaWdpdHNbZF0gPSBuZXcgRGlnaXQgQGdhbWUsIEBnYW1lX3N0YXRlLCBkLCBAeCwgQHkgZm9yIGQgaW4gWzEuLjldXG4gICAgIyBAbGVmdF9kaWdpdHNbMF0uZXhpc3RzID0gZmFsc2UgIyBibGFuayBvdXQgdGhlIHplcm9cblxuICAgIEByaWdodF9kaWdpdHMgPSB7fVxuICAgIEByaWdodF9kaWdpdHNbZF0gPSBuZXcgRGlnaXQgQGdhbWUsIEBnYW1lX3N0YXRlLCBkLCBAeCArIDMyLCBAeSBmb3IgZCBpbiBbMC4uOV1cblxuICAgIEBsZWZ0X2RpZ2l0ID0gdW5kZWZpbmVkXG4gICAgQHJpZ2h0X2RpZ2l0ID0gdW5kZWZpbmVkXG5cbiAgICBAaGlkZGVuID0gdHJ1ZVxuICAgIEBzZXRWYWx1ZSgpXG5cbiAgaGlkZUFsbExlZnQ6IC0+IEBsZWZ0X2RpZ2l0c1tkXS5oaWRlKCkgZm9yIGQgaW4gWzAuLjldXG4gIGhpZGVBbGxSaWdodDogLT4gQHJpZ2h0X2RpZ2l0c1tkXS5oaWRlKCkgZm9yIGQgaW4gWzAuLjldXG5cbiAgaGlkZUxlZnQ6IC0+IEBsZWZ0X2RpZ2l0LmhpZGUoKSBpZiBAbGVmdF9kaWdpdFxuICBoaWRlUmlnaHQ6IC0+IEByaWdodF9kaWdpdC5oaWRlKClcblxuICBzaG93TGVmdDogLT4gQGxlZnRfZGlnaXQuc2hvdygpIGlmIEBsZWZ0X2RpZ2l0XG4gIHNob3dSaWdodDogLT4gQHJpZ2h0X2RpZ2l0LnNob3coKVxuXG4gIGhpZGU6IC0+XG4gICAgQGhpZGRlbiA9IHRydWVcbiAgICBAaGlkZUxlZnQoKVxuICAgIEBoaWRlUmlnaHQoKVxuXG4gIHNob3c6IC0+XG4gICAgQGhpZGRlbiA9IGZhbHNlXG4gICAgQHNob3dMZWZ0KClcbiAgICBAc2hvd1JpZ2h0KClcblxuICBzZXRWYWx1ZTogKHZhbD1Ac3RhcnRfdmFsdWUpIC0+XG4gICAgQHZhbHVlID0gdmFsXG4gICAgQGxlZnRfZGlnaXQuaGlkZSgpIGlmIEBsZWZ0X2RpZ2l0XG4gICAgQHJpZ2h0X2RpZ2l0LmhpZGUoKSBpZiBAcmlnaHRfZGlnaXRcbiAgICAjIGhhbmRsZSBzaW5nbGUgZGlnaXQgc3RhcnQgdmFsdWVcbiAgICBpZiBAdmFsdWUgPCAwXG4gICAgICBAbGVmdF9kaWdpdCA9IEB1bmRlZmluZWRcbiAgICAgIEByaWdodF9kaWdpdCA9IEByaWdodF9kaWdpdHNbMF1cbiAgICBlbHNlIGlmIEB2YWx1ZSA8IDEwXG4gICAgICBAbGVmdF9kaWdpdCA9IEB1bmRlZmluZWRcbiAgICAgIEByaWdodF9kaWdpdCA9IEByaWdodF9kaWdpdHNbU3RyaW5nKEB2YWx1ZSkuc3BsaXQoJycpWzBdXVxuICAgIGVsc2VcbiAgICAgIEBsZWZ0X2RpZ2l0ID0gQGxlZnRfZGlnaXRzW1N0cmluZyhAdmFsdWUpLnNwbGl0KCcnKVswXV1cbiAgICAgIEByaWdodF9kaWdpdCA9IEByaWdodF9kaWdpdHNbU3RyaW5nKEB2YWx1ZSkuc3BsaXQoJycpWzFdXVxuICAgIEBzaG93KCkgdW5sZXNzIEBoaWRkZW5cblxuICByZXNldFZhbHVlOiAoKSAtPiBAc2V0VmFsdWUoQHN0YXJ0X3ZhbHVlKVxuICBpbmM6IChuPTEpIC0+IEBpbmNyZW1lbnQobilcbiAgZGVjOiAobj0xKSAtPiBAZGVjcmVtZW50KG4pXG4gIGluY3JlbWVudDogKG49MSkgLT4gQHNldFZhbHVlKEB2YWx1ZSArIG4pXG4gIGRlY3JlbWVudDogKG49MSkgLT4gQHNldFZhbHVlKEB2YWx1ZSAtIG4pXG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZWdlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvSW50ZWdlci5jb2ZmZWVcbiAqKi8iLCJDYWN0dXMgPSByZXF1aXJlICcuL0NhY3R1cy5jb2ZmZWUnXG5UcmVlID0gcmVxdWlyZSAnLi9UcmVlLmNvZmZlZSdcblxuIyBnYW1lIHdpZHRoLCBoZWlnaHQgPSAxMDg4LCA4MTZcbiMgY2FjdHVzIHdpZHRoLCBoZWlnaHQgPSAzMiwgODhcbiMgdHJlZSB3aWR0aCwgaGVpZ2h0ID0gNjQsIDEwOFxuXG5DQUNUVVNfUE9TSVRJT05TID1cbiAgdG9wX2xlZnQ6IHsgeDogMzI4LCB5OiAxMDAgfVxuICB0b3BfcmlnaHQ6IHsgeDogNzE0LCB5OiAxMDAgfVxuICBjZW50ZXJfbGVmdDogeyB4OiA0MzYsIHk6IDM1MCB9XG4gIGNlbnRlcjogeyB4OiA1MjgsIHk6IDM1MCB9XG4gIGNlbnRlcl9yaWdodDogeyB4OiA2MTQsIHk6IDM1MCB9XG4gIGJvdHRvbV9sZWZ0OiB7IHg6IDMyOCwgeTogNjAwIH1cbiAgYm90dG9tX3JpZ2h0OiB7IHg6IDcxNCwgeTogNjAwIH1cblxuVFJFRV9QT1NJVElPTlMgPVxuICB0b3BfbGVmdDogeyB4OiAzMjgsIHk6IDE1MCB9XG4gIHRvcF9yaWdodDogeyB4OiA3MTQsIHk6IDE1MCB9XG4gIGJvdHRvbV9sZWZ0OiB7IHg6IDMyOCwgeTogNTUwIH1cbiAgYm90dG9tX3JpZ2h0OiB7IHg6IDcxNCwgeTogNTUwIH1cblxuUE9TSVRJT05TID0gW1xuICBcInRvcF9sZWZ0XCJcbiAgXCJ0b3BfcmlnaHRcIlxuICBcImJvdHRvbV9sZWZ0XCJcbiAgXCJib3R0b21fcmlnaHRcIlxuXVxuXG5jbGFzcyBUZXJyYWluR3JvdXAgZXh0ZW5kcyBQaGFzZXIuR3JvdXBcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBsZXZlbF9kYXRhPXt9KSAtPlxuICAgIHN1cGVyIEBnYW1lLCBudWxsLCAnVGVycmFpbkdyb3VwJ1xuICAgIEBidWlsZCgpXG5cbiAgICAjIGFkZCB0byBnYW1lXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuICAjIHJlbW92ZSB0ZXJyYWluIHNwcml0ZXNcbiAgcmVzZXQ6IC0+IEByZW1vdmVDaGlsZHJlbigpXG5cbiAgIyBidWlsZCBhIG5ldyBzZXQgb2YgdGVycmFpbiBzcHJpdGVzXG4gIGJ1aWxkOiAobGV2ZWxfZGF0YT1AbGV2ZWxfZGF0YSkgLT5cbiAgICAjIG92ZXJ3cml0ZSB0aGUgbGV2ZWxfZGF0YVxuICAgIEBsZXZlbF9kYXRhID0gbGV2ZWxfZGF0YVxuICAgICMgZGV0ZXJtaW5lIGlmIGxldmVsIGhhcyBhIHdhZ29uXG4gICAgQGlzX3dhZ29uID0gQGxldmVsX2RhdGEud2Fnb25cbiAgICBAbnVtX2NhY3R1cyA9IEBsZXZlbF9kYXRhLm51bV9jYWN0dXNcbiAgICBAbnVtX3RyZWUgPSBAbGV2ZWxfZGF0YS5udW1fdHJlZVxuICAgICMgZGV0ZXJtaW5lIHBvc2l0aW9ucyB0byBwbHVjayBmcm9tXG4gICAgQHBvc2l0aW9ucyA9IF8uc2h1ZmZsZSBQT1NJVElPTlNcbiAgICBAY2FjdHVzX3Bvc2l0aW9ucyA9IGlmIEBpc193YWdvbiB0aGVuIFsnY2VudGVyX2xlZnQnLCAnY2VudGVyX3JpZ2h0J10gZWxzZSBbJ2NlbnRlciddXG4gICAgIyBhZGQgdGVycmFpbiBjaGlsZHJlbiB0byB0aGUgZ3JvdXBcbiAgICBAYWRkQ2FjdHVzKCkgZm9yIGNhY3R1cyBpbiBbMC4uLkBudW1fY2FjdHVzXVxuICAgIEBhZGRUcmVlKCkgICBmb3IgdHJlZSBpbiBbMC4uLkBudW1fdHJlZV1cblxuICBhZGRDYWN0dXM6IC0+XG4gICAgcG9zID0gQGdldFRlcnJhaW5Qb3NpdGlvbiAnY2FjdHVzJ1xuICAgIEBhZGQgbmV3IENhY3R1cyBAZ2FtZSwgQGdhbWVfc3RhdGUsIHBvcy54LCBwb3MueVxuXG4gIGFkZFRyZWU6IC0+XG4gICAgcG9zID0gQGdldFRlcnJhaW5Qb3NpdGlvbiAndHJlZSdcbiAgICBAYWRkIG5ldyBUcmVlIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgcG9zLngsIHBvcy55XG5cbiAgZ2V0VGVycmFpblBvc2l0aW9uOiAoa2V5KSAtPlxuICAgIHBvcyA9IHVuZGVmaW5lZFxuICAgIHN3aXRjaCBrZXlcbiAgICAgIHdoZW4gJ2NhY3R1cydcbiAgICAgICAgaWYgQGNhY3R1c19wb3NpdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgIHBvc19rZXkgPSBAY2FjdHVzX3Bvc2l0aW9ucy5wb3AoKVxuICAgICAgICAgIHBvcyA9IENBQ1RVU19QT1NJVElPTlNbcG9zX2tleV1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHBvc19rZXkgPSBAcG9zaXRpb25zLnBvcCgpXG4gICAgICAgICAgcG9zID0gQ0FDVFVTX1BPU0lUSU9OU1twb3Nfa2V5XVxuICAgICAgd2hlbiAndHJlZSdcbiAgICAgICAgcG9zX2tleSA9IEBwb3NpdGlvbnMucG9wKClcbiAgICAgICAgcG9zID0gVFJFRV9QT1NJVElPTlNbcG9zX2tleV1cbiAgICByZXR1cm4gcG9zXG5cbm1vZHVsZS5leHBvcnRzID0gVGVycmFpbkdyb3VwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXJyYWluR3JvdXAuY29mZmVlXG4gKiovIiwiVGVycmFpbiA9IHJlcXVpcmUgJy4vdGVycmFpbi5jb2ZmZWUnXG5cbmNsYXNzIFRyZWUgZXh0ZW5kcyBUZXJyYWluXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCB4PTAsIHk9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgQGdhbWVfc3RhdGUsIHgsIHksICd0cmVlJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyZWVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1RyZWUuY29mZmVlXG4gKiovIiwiU1BFRUQgPSAzMDBcbkRFTFRBID0gMTVcblxuY2xhc3MgV2Fnb24gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9ICd3YWdvbidcbiAgICAjIHN1cGVyIEBnYW1lLCA1MDAsIDgxNiAtIDk2XG4gICAgc3VwZXIgQGdhbWUsIDUwMCwgNjc1LCBrZXksIGZyYW1lXG5cbiAgICAjIHNldCBwaHlzaWNzIGJvZHlcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG5cbiAgICBAcm9sbGluZyA9IGZhbHNlXG4gICAgQGRpcmVjdGlvbiA9ICd1cCdcbiAgICBAdGltZSA9IERhdGUubm93KClcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgIEBraWxsKClcblxuICAgIHJldHVybiBAXG5cbiAgcmV2aXZlOiAtPiBAcmVzZXQgNTAwLCA2NzVcblxuICByb2xsOiAtPiBAcm9sbGluZyA9IHRydWVcblxuICBzdG9wOiAtPiBAcm9sbGluZyA9IGZhbHNlXG5cbiAgc3RhcnQ6IC0+XG4gICAgQHJldml2ZSgpXG4gICAgQHJvbGwoKVxuXG4gIHVwZGF0ZTogLT5cbiAgICBjdXJyZW50X3RpbWUgPSBEYXRlLm5vdygpXG4gICAgaWYgQHJvbGxpbmcgYW5kIChjdXJyZW50X3RpbWUgLSBAdGltZSkgPiBTUEVFRFxuICAgICAgQGRpcmVjdGlvbiA9ICd1cCcgaWYgQGRpcmVjdGlvbiBpcyAnZG93bicgYW5kIEBib2R5LnkgPj0gNjc1XG4gICAgICBAZGlyZWN0aW9uID0gJ2Rvd24nIGlmIEBkaXJlY3Rpb24gaXMgJ3VwJyBhbmQgQGJvZHkueSA8PSA0NVxuICAgICAgc2lnbiA9IGlmIEBkaXJlY3Rpb24gaXMgJ3VwJyB0aGVuIC0xIGVsc2UgMVxuXG4gICAgICBAYm9keS55ICs9IHNpZ24gKiBERUxUQVxuXG4gICAgICAjIGNvbnNvbGUubG9nIEB0aW1lXG4gICAgICBAdGltZSA9IGN1cnJlbnRfdGltZVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhZ29uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9XYWdvbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhbGwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIHhfb2Zmc2V0PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIHhfb2Zmc2V0LCAwXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuc2V0U2l6ZSAxLCBAZ2FtZS53b3JsZC5oZWlnaHQsIDAsIDBcbiAgICBAYm9keS5hbGxvd0dyYXZpdHkgPSBmYWxzZVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvV2FsbC5jb2ZmZWVcbiAqKi8iLCJjbGFzcyBCb290XG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICAjIHNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIGJsYWNrXG4gICAgQGdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAwMDAnXG5cbiAgICAjIFNjYWxlIHRoZSBnYW1lIGluIHRoZSBicm93c2VyXG4gICAgQHNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWVcbiAgICBAc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTFxuXG4gICAgIyBzdGFydCBwcmVsb2FkXG4gICAgQHN0YXRlLnN0YXJ0ICdwcmVsb2FkJ1xuXG4gIHByZWxvYWQ6IC0+XG4gICAgIyBzZXQgaW50aWFsIHNjYWxlXG4gICAgQGdhbWUuc2NhbGVyKClcblxubW9kdWxlLmV4cG9ydHMgPSBCb290XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2Jvb3QuY29mZmVlXG4gKiovIiwiIyBCT1VORFNcbkZsb29yICAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9GbG9vci5jb2ZmZWUnXG5DZWlsaW5nICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ2VpbGluZy5jb2ZmZWUnXG5XYWxsICAgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2FsbC5jb2ZmZWUnXG5XQUxMX09GRlNFVCA9IDI3NVxuXG4jIEhVRFxuVGV4dCA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVGV4dC5jb2ZmZWUnXG5JbnRlZ2VyID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9JbnRlZ2VyLmNvZmZlZSdcblxuIyBTUFJJVEVTXG5Db3dib3kgPSByZXF1aXJlICcuLi9zcHJpdGVzL0Nvd2JveS5jb2ZmZWUnXG5UZXJyYWluR3JvdXAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RlcnJhaW5Hcm91cC5jb2ZmZWUnXG5XYWdvbiAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1dhZ29uLmNvZmZlZSdcblxuU1RBUlRJTkdfVElNRSA9IDcwICNzZWNvbmRzXG5OT19BTU1PX0NPVU5URE9XTiA9IDEwICNzZWNvbmRzXG5cbmNsYXNzIEdhbWVcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgY3JlYXRlOiAtPlxuICAgICMgY3JlYXRlIHRoZSBib3VuZHNcbiAgICBAY2VpbGluZyAgICA9IG5ldyBDZWlsaW5nIEBnYW1lLCA0NVxuICAgIEBmbG9vciAgICAgID0gbmV3IEZsb29yIEBnYW1lLCAtNDVcbiAgICBAbGVmdF93YWxsX291dGVyID0gbmV3IFdhbGwgQGdhbWUsIDkyXG4gICAgQGxlZnRfd2FsbCAgPSBuZXcgV2FsbCBAZ2FtZSwgQGdhbWUud29ybGQud2lkdGggLyAyIC0gV0FMTF9PRkZTRVRcbiAgICBAcmlnaHRfd2FsbF9vdXRlciA9IG5ldyBXYWxsIEBnYW1lLCA5OTZcbiAgICBAcmlnaHRfd2FsbCA9IG5ldyBXYWxsIEBnYW1lLCBAZ2FtZS53b3JsZC53aWR0aCAvIDIgICsgV0FMTF9PRkZTRVRcblxuICAgICMgc2V0dXAgdGhlIHRleHRcbiAgICBAdGV4dF9ndW5fZmlnaHQgPSAgIG5ldyBUZXh0IEBnYW1lLCBALCAnZ3VuIGZpZ2h0JywgNDA4LCAyNTBcbiAgICBAdGV4dF9nZXRfcmVhZHkgPSAgIG5ldyBUZXh0IEBnYW1lLCBALCAnZ2V0IHJlYWR5JywgNDA4LCAyNTBcbiAgICBAdGV4dF9pbnNlcnRfY29pbiA9IG5ldyBUZXh0IEBnYW1lLCBALCAnaW5zZXJ0IGNvaW4nLCA3MDAsIDc3MVxuICAgIEB0ZXh0X2RyYXcgPSAgICAgICAgbmV3IFRleHQgQGdhbWUsIEAsICdkcmF3JywgNDY2LCAyNTBcbiAgICBAdGV4dF9nYW1lID0gICAgICAgIG5ldyBUZXh0IEBnYW1lLCBALCAnZ2FtZScsIDM3MCwgNVxuICAgIEB0ZXh0X292ZXIgPSAgICAgICAgbmV3IFRleHQgQGdhbWUsIEAsICdvdmVyJywgNTk5LCA1XG5cbiAgICAjIHNldHVwIHRoZSBodWRcbiAgICBAaHVkX3Njb3JlX3BsYXllcl9vbmUgPSBuZXcgSW50ZWdlciBAZ2FtZSwgQCwgMCwgMjAwLCA1XG4gICAgQGh1ZF9zY29yZV9wbGF5ZXJfdHdvID0gbmV3IEludGVnZXIgQGdhbWUsIEAsIDAsIDgzMCwgNVxuICAgIEBodWRfdGltZXIgICAgICAgICAgICA9IG5ldyBJbnRlZ2VyIEBnYW1lLCBALCA3MCwgNjQ0LCA1XG4gICAgQGh1ZF9jb3VudGRvd24gICAgICAgID0gbmV3IEludGVnZXIgQGdhbWUsIEAsIDEwLCA0MDAsIDVcblxuICAgICMgdGltZXJzXG4gICAgQHRpbWVyID0gQGdhbWUudGltZS5jcmVhdGUoZmFsc2UpXG4gICAgQGNvdW50ZG93biA9IEBnYW1lLnRpbWUuY3JlYXRlKGZhbHNlKVxuXG4gICAgIyBjcmVhdGUgdGhlIHBsYXllcnNcbiAgICBAcGxheWVyX29uZSA9IG5ldyBDb3dib3kgQGdhbWUsIEBcbiAgICBAcGxheWVyX3R3byA9IG5ldyBDb3dib3kgQGdhbWUsIEAsIGZhbHNlXG5cbiAgICAjIGNvbGxpc2lvbiBlbGVtZW50c1xuICAgIEBidWxsZXRzICA9IFsgQHBsYXllcl9vbmUuYnVsbGV0cywgQHBsYXllcl90d28uYnVsbGV0cyBdXG4gICAgQHdhbGxzICAgID0gWyBAbGVmdF93YWxsLCBAcmlnaHRfd2FsbCBdXG4gICAgQHN1cmZhY2VzID0gWyBAY2VpbGluZywgQGZsb29yIF1cbiAgICBAcGxheWVycyAgPSBbIEBwbGF5ZXJfb25lLCBAcGxheWVyX3R3byBdXG4gICAgQHdhZ29uID0gbmV3IFdhZ29uIEBnYW1lLCBAZ2FtZV9zdGF0ZVxuICAgIEB0ZXJyYWluID0gdW5kZWZpbmVkICMgaW5zdGFudGlhdGUgaW4gc2V0dXBMZXZlbCgpXG5cbiAgICAjIHN0YXJ0IHRoZSBnYW1lXG4gICAgQHN0YXJ0KClcblxuICBzdGFydDogLT5cbiAgICBAc2V0dXBMZXZlbCgpICMgc2V0dXAgYW5kIHNob3cgdGVycmFpblxuICAgIEBodWRfdGltZXIuc2hvdygpICMgc2hvdyB0aW1lclxuICAgIHBsYXllci5hbW1vLnNob3coKSBmb3IgcGxheWVyIGluIEBwbGF5ZXJzXG4gICAgQHRleHRfZ2V0X3JlYWR5LnNob3coKVxuICAgIEBydW5JbnRybyA9PlxuICAgICAgQHRleHRfZ2V0X3JlYWR5LmhpZGUoKVxuICAgICAgQHRleHRfZHJhdy5zaG93KClcbiAgICAgIHNldFRpbWVvdXQgKCkgPT5cbiAgICAgICAgQHRleHRfZHJhdy5oaWRlKCkgIyBoaWRlIGRyYXchXG4gICAgICAgIHBsYXllci5lbmFibGVJbnB1dCgpIGZvciBwbGF5ZXIgaW4gQHBsYXllcnMgIyBlbmFiZWwgbW92ZW1lbnRcbiAgICAgICAgIyBzdGFydCB0aW1lcnNcbiAgICAgICAgQGdhbWUudGltZS5ldmVudHMubG9vcCgxMDAwLCBAdXBkYXRlVGltZXIsIEApLmF1dG9EZXN0cm95ID0gdHJ1ZVxuICAgICAgICBAZ2FtZS50aW1lLmV2ZW50cy5sb29wKDEwMDAsIEB1cGRhdGVDb3VudGRvd24sIEApLmF1dG9EZXN0cm95ID0gdHJ1ZVxuICAgICAgICBAdGltZXIuc3RhcnQoKVxuICAgICAgICBAY291bnRkb3duLnN0YXJ0KClcbiAgICAgICwgNzAwXG5cblxuICB1cGRhdGU6IC0+XG4gICAgIyBzZXQgYm91bmNlIHN1cmZhY2VzIGZvciBidWxsZXRzXG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSBAYnVsbGV0cywgQHN1cmZhY2VzXG5cbiAgICAjIHNldCBwbGF5ZXIsIGJ1bGxldCBjb2xsaXNpb25zXG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSBAYnVsbGV0cywgQHBsYXllcnMsIChwbGF5ZXIsIGJ1bGxldCkgPT5cbiAgICAgICMgZGlzYWJsZSBpbnB1dHNcbiAgICAgIEBwbGF5ZXJfb25lLmRpc2FibGVJbnB1dCgpXG4gICAgICBAcGxheWVyX3R3by5kaXNhYmxlSW5wdXQoKVxuICAgICAgIyBraWxsIGFsbCBidWxsZXRzIGluIHRoZSBmaWVsZFxuICAgICAgQHBsYXllcl9vbmUuYnVsbGV0cy5mb3JFYWNoQWxpdmUgKGIpIC0+IGIua2lsbCgpXG4gICAgICBAcGxheWVyX3R3by5idWxsZXRzLmZvckVhY2hBbGl2ZSAoYikgLT4gYi5raWxsKClcbiAgICAgICMgaW5jcmVhc2Ugc2NvcmUgb2Ygd2lubmluZyBwbGF5ZXJcbiAgICAgIGJ1bGxldC5wbGF5ZXIuaWRsZSgpXG4gICAgICBidWxsZXQucGxheWVyLndpbnMgKz0gMVxuICAgICAgaWYgYnVsbGV0LnBsYXllci5pc19wbGF5ZXJfb25lXG4gICAgICAgIEBodWRfc2NvcmVfcGxheWVyX29uZS5pbmMoKVxuICAgICAgZWxzZVxuICAgICAgICBAaHVkX3Njb3JlX3BsYXllcl90d28uaW5jKClcbiAgICAgICMgaW5jcmVhc2UgZ2FtZSdzIGxldmVsXG4gICAgICBAZ2FtZS5sZXZlbCArPSAxXG4gICAgICAjIHRyaWdnZXIgcGxheWVyIGRlYXRoXG4gICAgICBwbGF5ZXIuZGllKClcbiAgICAgIHNldFRpbWVvdXQgKCkgPT5cbiAgICAgICAgQG5leHRMZXZlbCgpIHVubGVzcyBAZ2FtZV9vdmVyXG4gICAgICAsIDIwMDBcblxuICAgICMgc2V0IHRlcnJhaW4sIGJ1bGxldCBjb2xsaXNpb25zXG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSBAYnVsbGV0cywgQHRlcnJhaW4sIChidWxsZXQsIHRlcnJhaW4pID0+XG4gICAgICBjb2xsaXNpb25feSA9IGJ1bGxldC55ICsgYnVsbGV0LmhlaWdodFxuICAgICAgYnVsbGV0LmtpbGwoKVxuICAgICAgdGVycmFpbi5kZWZvcm0gY29sbGlzaW9uX3lcblxuICAgICMgc2V0IHdhZ29uLCBidWxsZXQgY29sbGlzaW9uc1xuICAgIEBnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUgQGJ1bGxldHMsIEB3YWdvbiwgKHdhZ29uLCBidWxsZXQpID0+XG4gICAgICBidWxsZXQua2lsbCgpXG5cbiAgcmVuZGVyOiAtPlxuICAgICMgaWYgQGdhbWUuZGVidWdNb2RlXG4gICAgIyAgIEBnYW1lLmRlYnVnLmJvZHkgQGNlaWxpbmdcbiAgICAjICAgQGdhbWUuZGVidWcuYm9keSBAZmxvb3JcbiAgICAjICAgQGdhbWUuZGVidWcuYm9keSBAbGVmdF93YWxsXG4gICAgIyAgIEBnYW1lLmRlYnVnLmJvZHkgQHJpZ2h0X3dhbGxcbiAgICAjICAgQGdhbWUuZGVidWcuYm9keSBAcGxheWVyX29uZVxuICAgICMgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBwbGF5ZXJfdHdvXG4gICAgIyAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl9vbmUuYnVsbGV0c1xuICAgICMgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBwbGF5ZXJfdHdvLmJ1bGxldHNcbiAgICAjICAgQGdhbWUuZGVidWcuYm9keSBAd2Fnb25cblxuICB1cGRhdGVUaW1lcjogLT5cbiAgICBAaHVkX3RpbWVyLmRlYygpIGlmIEBodWRfdGltZXIudmFsdWUgPiAwXG4gICAgQGdhbWVPdmVyKCkgaWYgQGh1ZF90aW1lci52YWx1ZSBpcyAwXG5cbiAgdXBkYXRlQ291bnRkb3duOiAtPlxuICAgIHVubGVzcyBAZ2FtZV9vdmVyXG4gICAgICBpZiBAcGxheWVyX29uZS5udW1fYnVsbGV0cyBpcyAwIG9yIEBwbGF5ZXJfdHdvLm51bV9idWxsZXRzIGlzIDBcbiAgICAgICAgQGh1ZF9jb3VudGRvd24uc2hvdygpXG4gICAgICAgIEBodWRfY291bnRkb3duLmRlYygpIGlmIEBodWRfY291bnRkb3duLnZhbHVlID4gMFxuICAgICAgICBAbmV4dExldmVsKCkgaWYgQGh1ZF9jb3VudGRvd24udmFsdWUgaXMgMFxuICAgICAgQG5leHRMZXZlbCgpIGlmIEBwbGF5ZXJfb25lLm51bV9idWxsZXRzIGlzIDAgYW5kIEBwbGF5ZXJfdHdvLm51bV9idWxsZXRzIGlzIDBcblxuICBzZXR1cExldmVsOiAtPlxuICAgIGxldmVsX251bSA9IEBnYW1lLmxldmVsXG4gICAgbGV2ZWwgPSBAZ2FtZS5jb25zdGFudHMuTEVWRUxTW2xldmVsX251bV1cbiAgICBAdGVycmFpbi5kZXN0cm95KCkgaWYgQHRlcnJhaW5cbiAgICBAdGVycmFpbiA9IG5ldyBUZXJyYWluR3JvdXAgQGdhbWUsIEAsIGxldmVsXG4gICAgQHNob3dIdWQoKVxuICAgIEB3YWdvbi5zdGFydCgpIGlmIGxldmVsLndhZ29uXG5cbiAgbmV4dExldmVsOiAtPlxuICAgIGxldmVsc19sZW5ndGggPSBPYmplY3Qua2V5cyhAZ2FtZS5jb25zdGFudHMuTEVWRUxTKS5sZW5ndGhcbiAgICBAZ2FtZS5sZXZlbCArPSBpZiAobGV2ZWxzX2xlbmd0aCA+IEBnYW1lLmxldmVsKSB0aGVuIDEgZWxzZSAwXG4gICAgZm9yIHBsYXllciBpbiBAcGxheWVyc1xuICAgICAgcGxheWVyLnRleHQuaGlkZSgpXG4gICAgICBwbGF5ZXIucmVsb2FkKClcbiAgICAgIHBsYXllci5pZGxlKClcbiAgICAgIHBsYXllci5kaXNhYmxlSW5wdXQoKVxuICAgIEBodWRfY291bnRkb3duLmhpZGUoKVxuICAgIEBodWRfY291bnRkb3duLnJlc2V0VmFsdWUoKVxuICAgIEBzZXR1cExldmVsKClcbiAgICBAdGV4dF9nZXRfcmVhZHkuc2hvdygpXG4gICAgQHJ1bkludHJvID0+XG4gICAgICBAdGV4dF9nZXRfcmVhZHkuaGlkZSgpXG4gICAgICBAdGV4dF9kcmF3LnNob3coKVxuICAgICAgc2V0VGltZW91dCAoKSA9PlxuICAgICAgICBAdGV4dF9kcmF3LmhpZGUoKSAjIGhpZGUgZHJhdyFcbiAgICAgICAgcGxheWVyLmVuYWJsZUlucHV0KCkgZm9yIHBsYXllciBpbiBAcGxheWVycyAjIGVuYWJsZSBtb3ZlbWVudFxuICAgICAgLCA3MDBcblxuICBnYW1lT3ZlcjogLT5cbiAgICBAZ2FtZV9vdmVyID0gdHJ1ZVxuICAgIEBoaWRlSHVkKClcbiAgICBAdGVycmFpbi5kZXN0cm95KClcbiAgICBAd2Fnb24uZGVzdG95KClcbiAgICBmb3IgcGxheWVyIGluIEBwbGF5ZXJzXG4gICAgICBwbGF5ZXIuYW1tby5kZXN0cm95KClcbiAgICAgIHBsYXllci5kZXN0cm95KClcbiAgICBAdGV4dF9nYW1lLnNob3coKVxuICAgIEB0ZXh0X292ZXIuc2hvdygpXG4gICAgIyBzZXRUaW1lb3V0ICgpID0+XG4gICAgIyAgIEBzdGF0ZS5zdGFydCAnaW50cm8nXG4gICAgIyAsIDEwMDBcblxuICBydW5JbnRybzogKGNiKSAtPiBwbGF5ZXIucnVuSW50cm8oY2IpIGZvciBwbGF5ZXIgaW4gQHBsYXllcnNcblxuICBzaG93SHVkOiAtPlxuICAgIEBodWRfc2NvcmVfcGxheWVyX29uZS5zaG93KClcbiAgICBAaHVkX3Njb3JlX3BsYXllcl90d28uc2hvdygpXG4gICAgQGh1ZF90aW1lci5zaG93KClcblxuICBoaWRlSHVkOiAtPlxuICAgIEBodWRfdGltZXIuaGlkZSgpXG4gICAgQGh1ZF9jb3VudGRvd24uaGlkZSgpXG4gICAgcGxheWVyLnRleHQuaGlkZSgpIGZvciBwbGF5ZXIgaW4gQHBsYXllcnNcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2dhbWUuY29mZmVlXG4gKiovIiwiIyBTUFJJVEVTXG4jIENvd2JveSA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ293Ym95LmNvZmZlZSdcbiMgQnVsbGV0ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9CdWxsZXQuY29mZmVlJ1xuIyBDYWN0dXMgPSByZXF1aXJlICcuLi9zcHJpdGVzL0NhY3R1cy5jb2ZmZWUnXG4jIFRyZWUgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVHJlZS5jb2ZmZWUnXG4jIFdhZ29uICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2Fnb24uY29mZmVlJ1xuXG4jIEhVRFxuIyBUaW1lciAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RpbWVyLmNvZmZlZSdcbiMgQW1tbyAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9BbW1vLmNvZmZlZSdcblxuXG5jbGFzcyBJbnRyb1xuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgY29uc29sZS5sb2cgJ2ludHJvJ1xuXG5cbiAgc3RhcnQ6IC0+XG5cbiAgdXBkYXRlOiAtPlxuXG5tb2R1bGUuZXhwb3J0cyA9IEludHJvXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2ludHJvLmNvZmZlZVxuICoqLyIsImNsYXNzIFByZWxvYWRcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgcHJlbG9hZDogLT5cbiAgICBAbG9hZC5jcm9zc09yaWdpbiA9IEBnYW1lLmhvc3R1cmwgdW5sZXNzIEBnYW1lLmNkbiBpcyAnLydcblxuICAgICMgTE9BRCBTVFVGRlNcbiAgICBDRE4gPSBAZ2FtZS5jZG5cbiAgICAjIFNQUklURVNcbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgdGV4dHVyZV91cmwgPSBcIiN7Q0ROfWltYWdlcy9hdGxhcy5wbmdcIlxuICAgIGF0bGFzX2RhdGEgPSByZXF1aXJlICcuLi9jb25zdGFudHMvYXRsYXMuY29mZmVlJ1xuICAgIEBsb2FkLmF0bGFzSlNPTkhhc2gga2V5LCB0ZXh0dXJlX3VybCwgbnVsbCwgYXRsYXNfZGF0YVxuXG4gICAgIyBTRlhcbiAgICBfLmVhY2ggQGdhbWUuY29uc3RhbnRzLlNGWCwgKHNmeCkgPT5cbiAgICAgIGFzc2V0ID0gQGxvYWQuYXVkaW8gc2Z4LFxuICAgICAgW1wiI3tDRE59YXVkaW8vI3tzZnh9Lm1wMyN7QGdhbWUudmVyc2lvbn1cIixcbiAgICAgIFwiI3tDRE59YXVkaW8vI3tzZnh9Lm9nZyN7QGdhbWUudmVyc2lvbn1cIl1cbiAgICAgIGFzc2V0LmNyb3NzT3JpZ2luID0gQGxvYWQuY3Jvc3NPcmlnaW4gIHVubGVzcyBAZ2FtZS5jZG4gaXMgJy8nXG5cbiAgdXBkYXRlOiAtPlxuICAgIGlmIEBnYW1lLmRlYnVnTW9kZVxuICAgICAgQHN0YXRlLnN0YXJ0ICdnYW1lJ1xuICAgIGVsc2VcbiAgICAgIEBzdGF0ZS5zdGFydCAnaW50cm8nXG5cbm1vZHVsZS5leHBvcnRzID0gUHJlbG9hZFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9wcmVsb2FkLmNvZmZlZVxuICoqLyIsIkxhdW5jaEdhbWUgPSByZXF1aXJlICcuL2dhbWUvbGF1bmNoLmNvZmZlZSdcblxuI3JlYWR5XG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuXG5cdGNvbnNvbGUubG9nICdhbGwgcmVhZHknXG5cdExhdW5jaEdhbWUoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9tYWluLmNvZmZlZVxuICoqLyIsIi8qXG5cbiAgSmF2YXNjcmlwdCBTdGF0ZSBNYWNoaW5lIExpYnJhcnkgLSBodHRwczovL2dpdGh1Yi5jb20vamFrZXNnb3Jkb24vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lXG5cbiAgQ29weXJpZ2h0IChjKSAyMDEyLCAyMDEzLCAyMDE0LCAyMDE1LCBKYWtlIEdvcmRvbiBhbmQgY29udHJpYnV0b3JzXG4gIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlc2dvcmRvbi9qYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gIHZhciBTdGF0ZU1hY2hpbmUgPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgVkVSU0lPTjogXCIyLjMuNVwiLFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFJlc3VsdDoge1xuICAgICAgU1VDQ0VFREVEOiAgICAxLCAvLyB0aGUgZXZlbnQgdHJhbnNpdGlvbmVkIHN1Y2Nlc3NmdWxseSBmcm9tIG9uZSBzdGF0ZSB0byBhbm90aGVyXG4gICAgICBOT1RSQU5TSVRJT046IDIsIC8vIHRoZSBldmVudCB3YXMgc3VjY2Vzc2Z1bGwgYnV0IG5vIHN0YXRlIHRyYW5zaXRpb24gd2FzIG5lY2Vzc2FyeVxuICAgICAgQ0FOQ0VMTEVEOiAgICAzLCAvLyB0aGUgZXZlbnQgd2FzIGNhbmNlbGxlZCBieSB0aGUgY2FsbGVyIGluIGEgYmVmb3JlRXZlbnQgY2FsbGJhY2tcbiAgICAgIFBFTkRJTkc6ICAgICAgNCAgLy8gdGhlIGV2ZW50IGlzIGFzeW5jaHJvbm91cyBhbmQgdGhlIGNhbGxlciBpcyBpbiBjb250cm9sIG9mIHdoZW4gdGhlIHRyYW5zaXRpb24gb2NjdXJzXG4gICAgfSxcblxuICAgIEVycm9yOiB7XG4gICAgICBJTlZBTElEX1RSQU5TSVRJT046IDEwMCwgLy8gY2FsbGVyIHRyaWVkIHRvIGZpcmUgYW4gZXZlbnQgdGhhdCB3YXMgaW5uYXByb3ByaWF0ZSBpbiB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgUEVORElOR19UUkFOU0lUSU9OOiAyMDAsIC8vIGNhbGxlciB0cmllZCB0byBmaXJlIGFuIGV2ZW50IHdoaWxlIGFuIGFzeW5jIHRyYW5zaXRpb24gd2FzIHN0aWxsIHBlbmRpbmdcbiAgICAgIElOVkFMSURfQ0FMTEJBQ0s6ICAgMzAwIC8vIGNhbGxlciBwcm92aWRlZCBjYWxsYmFjayBmdW5jdGlvbiB0aHJldyBhbiBleGNlcHRpb25cbiAgICB9LFxuXG4gICAgV0lMRENBUkQ6ICcqJyxcbiAgICBBU1lOQzogJ2FzeW5jJyxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKGNmZywgdGFyZ2V0KSB7XG5cbiAgICAgIHZhciBpbml0aWFsICAgICAgPSAodHlwZW9mIGNmZy5pbml0aWFsID09ICdzdHJpbmcnKSA/IHsgc3RhdGU6IGNmZy5pbml0aWFsIH0gOiBjZmcuaW5pdGlhbDsgLy8gYWxsb3cgZm9yIGEgc2ltcGxlIHN0cmluZywgb3IgYW4gb2JqZWN0IHdpdGggeyBzdGF0ZTogJ2ZvbycsIGV2ZW50OiAnc2V0dXAnLCBkZWZlcjogdHJ1ZXxmYWxzZSB9XG4gICAgICB2YXIgdGVybWluYWwgICAgID0gY2ZnLnRlcm1pbmFsIHx8IGNmZ1snZmluYWwnXTtcbiAgICAgIHZhciBmc20gICAgICAgICAgPSB0YXJnZXQgfHwgY2ZnLnRhcmdldCAgfHwge307XG4gICAgICB2YXIgZXZlbnRzICAgICAgID0gY2ZnLmV2ZW50cyB8fCBbXTtcbiAgICAgIHZhciBjYWxsYmFja3MgICAgPSBjZmcuY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgdmFyIG1hcCAgICAgICAgICA9IHt9OyAvLyB0cmFjayBzdGF0ZSB0cmFuc2l0aW9ucyBhbGxvd2VkIGZvciBhbiBldmVudCB7IGV2ZW50OiB7IGZyb206IFsgdG8gXSB9IH1cbiAgICAgIHZhciB0cmFuc2l0aW9ucyAgPSB7fTsgLy8gdHJhY2sgZXZlbnRzIGFsbG93ZWQgZnJvbSBhIHN0YXRlICAgICAgICAgICAgeyBzdGF0ZTogWyBldmVudCBdIH1cblxuICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGZyb20gPSAoZS5mcm9tIGluc3RhbmNlb2YgQXJyYXkpID8gZS5mcm9tIDogKGUuZnJvbSA/IFtlLmZyb21dIDogW1N0YXRlTWFjaGluZS5XSUxEQ0FSRF0pOyAvLyBhbGxvdyAnd2lsZGNhcmQnIHRyYW5zaXRpb24gaWYgJ2Zyb20nIGlzIG5vdCBzcGVjaWZpZWRcbiAgICAgICAgbWFwW2UubmFtZV0gPSBtYXBbZS5uYW1lXSB8fCB7fTtcbiAgICAgICAgZm9yICh2YXIgbiA9IDAgOyBuIDwgZnJvbS5sZW5ndGggOyBuKyspIHtcbiAgICAgICAgICB0cmFuc2l0aW9uc1tmcm9tW25dXSA9IHRyYW5zaXRpb25zW2Zyb21bbl1dIHx8IFtdO1xuICAgICAgICAgIHRyYW5zaXRpb25zW2Zyb21bbl1dLnB1c2goZS5uYW1lKTtcblxuICAgICAgICAgIG1hcFtlLm5hbWVdW2Zyb21bbl1dID0gZS50byB8fCBmcm9tW25dOyAvLyBhbGxvdyBuby1vcCB0cmFuc2l0aW9uIGlmICd0bycgaXMgbm90IHNwZWNpZmllZFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICBpbml0aWFsLmV2ZW50ID0gaW5pdGlhbC5ldmVudCB8fCAnc3RhcnR1cCc7XG4gICAgICAgIGFkZCh7IG5hbWU6IGluaXRpYWwuZXZlbnQsIGZyb206ICdub25lJywgdG86IGluaXRpYWwuc3RhdGUgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvcih2YXIgbiA9IDAgOyBuIDwgZXZlbnRzLmxlbmd0aCA7IG4rKylcbiAgICAgICAgYWRkKGV2ZW50c1tuXSk7XG5cbiAgICAgIGZvcih2YXIgbmFtZSBpbiBtYXApIHtcbiAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICBmc21bbmFtZV0gPSBTdGF0ZU1hY2hpbmUuYnVpbGRFdmVudChuYW1lLCBtYXBbbmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBmb3IodmFyIG5hbWUgaW4gY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChjYWxsYmFja3MuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgICAgZnNtW25hbWVdID0gY2FsbGJhY2tzW25hbWVdXG4gICAgICB9XG5cbiAgICAgIGZzbS5jdXJyZW50ICAgICA9ICdub25lJztcbiAgICAgIGZzbS5pcyAgICAgICAgICA9IGZ1bmN0aW9uKHN0YXRlKSB7IHJldHVybiAoc3RhdGUgaW5zdGFuY2VvZiBBcnJheSkgPyAoc3RhdGUuaW5kZXhPZih0aGlzLmN1cnJlbnQpID49IDApIDogKHRoaXMuY3VycmVudCA9PT0gc3RhdGUpOyB9O1xuICAgICAgZnNtLmNhbiAgICAgICAgID0gZnVuY3Rpb24oZXZlbnQpIHsgcmV0dXJuICF0aGlzLnRyYW5zaXRpb24gJiYgKG1hcFtldmVudF0uaGFzT3duUHJvcGVydHkodGhpcy5jdXJyZW50KSB8fCBtYXBbZXZlbnRdLmhhc093blByb3BlcnR5KFN0YXRlTWFjaGluZS5XSUxEQ0FSRCkpOyB9XG4gICAgICBmc20uY2Fubm90ICAgICAgPSBmdW5jdGlvbihldmVudCkgeyByZXR1cm4gIXRoaXMuY2FuKGV2ZW50KTsgfTtcbiAgICAgIGZzbS50cmFuc2l0aW9ucyA9IGZ1bmN0aW9uKCkgICAgICB7IHJldHVybiB0cmFuc2l0aW9uc1t0aGlzLmN1cnJlbnRdOyB9O1xuICAgICAgZnNtLmlzRmluaXNoZWQgID0gZnVuY3Rpb24oKSAgICAgIHsgcmV0dXJuIHRoaXMuaXModGVybWluYWwpOyB9O1xuICAgICAgZnNtLmVycm9yICAgICAgID0gY2ZnLmVycm9yIHx8IGZ1bmN0aW9uKG5hbWUsIGZyb20sIHRvLCBhcmdzLCBlcnJvciwgbXNnLCBlKSB7IHRocm93IGUgfHwgbXNnOyB9OyAvLyBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVucyBpcyB0byB0aHJvdyBhbiBleGNlcHRpb24sIGJ1dCBjYWxsZXIgY2FuIG92ZXJyaWRlIHRoaXMgYmVoYXZpb3IgaWYgZGVzaXJlZCAoc2VlIGdpdGh1YiBpc3N1ZSAjMyBhbmQgIzE3KVxuXG4gICAgICBpZiAoaW5pdGlhbCAmJiAhaW5pdGlhbC5kZWZlcilcbiAgICAgICAgZnNtW2luaXRpYWwuZXZlbnRdKCk7XG5cbiAgICAgIHJldHVybiBmc207XG5cbiAgICB9LFxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGRvQ2FsbGJhY2s6IGZ1bmN0aW9uKGZzbSwgZnVuYywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoZnNtLCBbbmFtZSwgZnJvbSwgdG9dLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBmc20uZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5JTlZBTElEX0NBTExCQUNLLCBcImFuIGV4Y2VwdGlvbiBvY2N1cnJlZCBpbiBhIGNhbGxlci1wcm92aWRlZCBjYWxsYmFjayBmdW5jdGlvblwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBiZWZvcmVBbnlFdmVudDogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmJlZm9yZWV2ZW50J10sICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgYWZ0ZXJBbnlFdmVudDogICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25hZnRlcmV2ZW50J10gfHwgZnNtWydvbmV2ZW50J10sICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGxlYXZlQW55U3RhdGU6ICAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29ubGVhdmVzdGF0ZSddLCAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBlbnRlckFueVN0YXRlOiAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmVudGVyc3RhdGUnXSB8fCBmc21bJ29uc3RhdGUnXSwgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgY2hhbmdlU3RhdGU6ICAgICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25jaGFuZ2VzdGF0ZSddLCAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuXG4gICAgYmVmb3JlVGhpc0V2ZW50OiBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25iZWZvcmUnICsgbmFtZV0sICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGFmdGVyVGhpc0V2ZW50OiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uYWZ0ZXInICArIG5hbWVdIHx8IGZzbVsnb24nICsgbmFtZV0sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBsZWF2ZVRoaXNTdGF0ZTogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmxlYXZlJyAgKyBmcm9tXSwgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgZW50ZXJUaGlzU3RhdGU6ICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25lbnRlcicgICsgdG9dICAgfHwgZnNtWydvbicgKyB0b10sICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuXG4gICAgYmVmb3JlRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIGlmICgoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVUaGlzRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykpIHx8XG4gICAgICAgICAgKGZhbHNlID09PSBTdGF0ZU1hY2hpbmUuYmVmb3JlQW55RXZlbnQoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBhZnRlckV2ZW50OiBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7XG4gICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJUaGlzRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJBbnlFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgfSxcblxuICAgIGxlYXZlU3RhdGU6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIHZhciBzcGVjaWZpYyA9IFN0YXRlTWFjaGluZS5sZWF2ZVRoaXNTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSxcbiAgICAgICAgICBnZW5lcmFsICA9IFN0YXRlTWFjaGluZS5sZWF2ZUFueVN0YXRlKCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIGlmICgoZmFsc2UgPT09IHNwZWNpZmljKSB8fCAoZmFsc2UgPT09IGdlbmVyYWwpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBlbHNlIGlmICgoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBzcGVjaWZpYykgfHwgKFN0YXRlTWFjaGluZS5BU1lOQyA9PT0gZ2VuZXJhbCkpXG4gICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuQVNZTkM7XG4gICAgfSxcblxuICAgIGVudGVyU3RhdGU6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIFN0YXRlTWFjaGluZS5lbnRlclRoaXNTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIFN0YXRlTWFjaGluZS5lbnRlckFueVN0YXRlKCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGJ1aWxkRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIG1hcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBmcm9tICA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdmFyIHRvICAgID0gbWFwW2Zyb21dIHx8IG1hcFtTdGF0ZU1hY2hpbmUuV0lMRENBUkRdIHx8IGZyb207XG4gICAgICAgIHZhciBhcmdzICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7IC8vIHR1cm4gYXJndW1lbnRzIGludG8gcHVyZSBhcnJheVxuXG4gICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb24pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5QRU5ESU5HX1RSQU5TSVRJT04sIFwiZXZlbnQgXCIgKyBuYW1lICsgXCIgaW5hcHByb3ByaWF0ZSBiZWNhdXNlIHByZXZpb3VzIHRyYW5zaXRpb24gZGlkIG5vdCBjb21wbGV0ZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5jYW5ub3QobmFtZSkpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5JTlZBTElEX1RSQU5TSVRJT04sIFwiZXZlbnQgXCIgKyBuYW1lICsgXCIgaW5hcHByb3ByaWF0ZSBpbiBjdXJyZW50IHN0YXRlIFwiICsgdGhpcy5jdXJyZW50KTtcblxuICAgICAgICBpZiAoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVFdmVudCh0aGlzLCBuYW1lLCBmcm9tLCB0bywgYXJncykpXG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuQ0FOQ0VMTEVEO1xuXG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KHRoaXMsIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5OT1RSQU5TSVRJT047XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmVwYXJlIGEgdHJhbnNpdGlvbiBtZXRob2QgZm9yIHVzZSBFSVRIRVIgbG93ZXIgZG93biwgb3IgYnkgY2FsbGVyIGlmIHRoZXkgd2FudCBhbiBhc3luYyB0cmFuc2l0aW9uIChpbmRpY2F0ZWQgYnkgYW4gQVNZTkMgcmV0dXJuIHZhbHVlIGZyb20gbGVhdmVTdGF0ZSlcbiAgICAgICAgdmFyIGZzbSA9IHRoaXM7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZzbS50cmFuc2l0aW9uID0gbnVsbDsgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgZXZlciBiZSBjYWxsZWQgb25jZVxuICAgICAgICAgIGZzbS5jdXJyZW50ID0gdG87XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmVudGVyU3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5jaGFuZ2VTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuU1VDQ0VFREVEO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24uY2FuY2VsID0gZnVuY3Rpb24oKSB7IC8vIHByb3ZpZGUgYSB3YXkgZm9yIGNhbGxlciB0byBjYW5jZWwgYXN5bmMgdHJhbnNpdGlvbiBpZiBkZXNpcmVkIChpc3N1ZSAjMjIpXG4gICAgICAgICAgZnNtLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlYXZlID0gU3RhdGVNYWNoaW5lLmxlYXZlU3RhdGUodGhpcywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICBpZiAoZmFsc2UgPT09IGxlYXZlKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5DQU5DRUxMRUQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBsZWF2ZSkge1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0LlBFTkRJTkc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbikgLy8gbmVlZCB0byBjaGVjayBpbiBjYXNlIHVzZXIgbWFudWFsbHkgY2FsbGVkIHRyYW5zaXRpb24oKSBidXQgZm9yZ290IHRvIHJldHVybiBTdGF0ZU1hY2hpbmUuQVNZTkNcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuICAgIH1cblxuICB9OyAvLyBTdGF0ZU1hY2hpbmVcblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vPT09PT09XG4gIC8vIE5PREVcbiAgLy89PT09PT1cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU3RhdGVNYWNoaW5lO1xuICAgIH1cbiAgICBleHBvcnRzLlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuICAvLz09PT09PT09PT09PVxuICAvLyBBTUQvUkVRVUlSRVxuICAvLz09PT09PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkgeyByZXR1cm4gU3RhdGVNYWNoaW5lOyB9KTtcbiAgfVxuICAvLz09PT09PT09XG4gIC8vIEJST1dTRVJcbiAgLy89PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5TdGF0ZU1hY2hpbmUgPSBTdGF0ZU1hY2hpbmU7XG4gIH1cbiAgLy89PT09PT09PT09PVxuICAvLyBXRUIgV09SS0VSXG4gIC8vPT09PT09PT09PT1cbiAgZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2VsZi5TdGF0ZU1hY2hpbmUgPSBTdGF0ZU1hY2hpbmU7XG4gIH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9zdGF0ZS1tYWNoaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbiAocmVxdWlyZSkge1xuXG5cdHZhciBtYWtlUHJvbWlzZSA9IHJlcXVpcmUoJy4vbWFrZVByb21pc2UnKTtcblx0dmFyIFNjaGVkdWxlciA9IHJlcXVpcmUoJy4vU2NoZWR1bGVyJyk7XG5cdHZhciBhc3luYyA9IHJlcXVpcmUoJy4vZW52JykuYXNhcDtcblxuXHRyZXR1cm4gbWFrZVByb21pc2Uoe1xuXHRcdHNjaGVkdWxlcjogbmV3IFNjaGVkdWxlcihhc3luYylcblx0fSk7XG5cbn0pO1xufSkodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24gKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUpOyB9KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3doZW4vbGliL1Byb21pc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdC8vIENyZWRpdCB0byBUd2lzb2wgKGh0dHBzOi8vZ2l0aHViLmNvbS9Ud2lzb2wpIGZvciBzdWdnZXN0aW5nXG5cdC8vIHRoaXMgdHlwZSBvZiBleHRlbnNpYmxlIHF1ZXVlICsgdHJhbXBvbGluZSBhcHByb2FjaCBmb3IgbmV4dC10aWNrIGNvbmZsYXRpb24uXG5cblx0LyoqXG5cdCAqIEFzeW5jIHRhc2sgc2NoZWR1bGVyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGFzeW5jIGZ1bmN0aW9uIHRvIHNjaGVkdWxlIGEgc2luZ2xlIGFzeW5jIGZ1bmN0aW9uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0ZnVuY3Rpb24gU2NoZWR1bGVyKGFzeW5jKSB7XG5cdFx0dGhpcy5fYXN5bmMgPSBhc3luYztcblx0XHR0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG5cblx0XHR0aGlzLl9xdWV1ZSA9IHRoaXM7XG5cdFx0dGhpcy5fcXVldWVMZW4gPSAwO1xuXHRcdHRoaXMuX2FmdGVyUXVldWUgPSB7fTtcblx0XHR0aGlzLl9hZnRlclF1ZXVlTGVuID0gMDtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLmRyYWluID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLl9kcmFpbigpO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogRW5xdWV1ZSBhIHRhc2tcblx0ICogQHBhcmFtIHt7IHJ1bjpmdW5jdGlvbiB9fSB0YXNrXG5cdCAqL1xuXHRTY2hlZHVsZXIucHJvdG90eXBlLmVucXVldWUgPSBmdW5jdGlvbih0YXNrKSB7XG5cdFx0dGhpcy5fcXVldWVbdGhpcy5fcXVldWVMZW4rK10gPSB0YXNrO1xuXHRcdHRoaXMucnVuKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEVucXVldWUgYSB0YXNrIHRvIHJ1biBhZnRlciB0aGUgbWFpbiB0YXNrIHF1ZXVlXG5cdCAqIEBwYXJhbSB7eyBydW46ZnVuY3Rpb24gfX0gdGFza1xuXHQgKi9cblx0U2NoZWR1bGVyLnByb3RvdHlwZS5hZnRlclF1ZXVlID0gZnVuY3Rpb24odGFzaykge1xuXHRcdHRoaXMuX2FmdGVyUXVldWVbdGhpcy5fYWZ0ZXJRdWV1ZUxlbisrXSA9IHRhc2s7XG5cdFx0dGhpcy5ydW4oKTtcblx0fTtcblxuXHRTY2hlZHVsZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy5fcnVubmluZykge1xuXHRcdFx0dGhpcy5fcnVubmluZyA9IHRydWU7XG5cdFx0XHR0aGlzLl9hc3luYyh0aGlzLmRyYWluKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIERyYWluIHRoZSBoYW5kbGVyIHF1ZXVlIGVudGlyZWx5LCBhbmQgdGhlbiB0aGUgYWZ0ZXIgcXVldWVcblx0ICovXG5cdFNjaGVkdWxlci5wcm90b3R5cGUuX2RyYWluID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdGZvciAoOyBpIDwgdGhpcy5fcXVldWVMZW47ICsraSkge1xuXHRcdFx0dGhpcy5fcXVldWVbaV0ucnVuKCk7XG5cdFx0XHR0aGlzLl9xdWV1ZVtpXSA9IHZvaWQgMDtcblx0XHR9XG5cblx0XHR0aGlzLl9xdWV1ZUxlbiA9IDA7XG5cdFx0dGhpcy5fcnVubmluZyA9IGZhbHNlO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMuX2FmdGVyUXVldWVMZW47ICsraSkge1xuXHRcdFx0dGhpcy5fYWZ0ZXJRdWV1ZVtpXS5ydW4oKTtcblx0XHRcdHRoaXMuX2FmdGVyUXVldWVbaV0gPSB2b2lkIDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5fYWZ0ZXJRdWV1ZUxlbiA9IDA7XG5cdH07XG5cblx0cmV0dXJuIFNjaGVkdWxlcjtcblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3doZW4vbGliL1NjaGVkdWxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkge1xuXG5cdHZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uL3N0YXRlJyk7XG5cdHZhciBhcHBsaWVyID0gcmVxdWlyZSgnLi4vYXBwbHknKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gYXJyYXkoUHJvbWlzZSkge1xuXG5cdFx0dmFyIGFwcGx5Rm9sZCA9IGFwcGxpZXIoUHJvbWlzZSk7XG5cdFx0dmFyIHRvUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZTtcblx0XHR2YXIgYWxsID0gUHJvbWlzZS5hbGw7XG5cblx0XHR2YXIgYXIgPSBBcnJheS5wcm90b3R5cGUucmVkdWNlO1xuXHRcdHZhciBhcnIgPSBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQ7XG5cdFx0dmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG5cdFx0Ly8gQWRkaXRpb25hbCBhcnJheSBjb21iaW5hdG9yc1xuXG5cdFx0UHJvbWlzZS5hbnkgPSBhbnk7XG5cdFx0UHJvbWlzZS5zb21lID0gc29tZTtcblx0XHRQcm9taXNlLnNldHRsZSA9IHNldHRsZTtcblxuXHRcdFByb21pc2UubWFwID0gbWFwO1xuXHRcdFByb21pc2UuZmlsdGVyID0gZmlsdGVyO1xuXHRcdFByb21pc2UucmVkdWNlID0gcmVkdWNlO1xuXHRcdFByb21pc2UucmVkdWNlUmlnaHQgPSByZWR1Y2VSaWdodDtcblxuXHRcdC8qKlxuXHRcdCAqIFdoZW4gdGhpcyBwcm9taXNlIGZ1bGZpbGxzIHdpdGggYW4gYXJyYXksIGRvXG5cdFx0ICogb25GdWxmaWxsZWQuYXBwbHkodm9pZCAwLCBhcnJheSlcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkZ1bGZpbGxlZCBmdW5jdGlvbiB0byBhcHBseVxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSBwcm9taXNlIGZvciB0aGUgcmVzdWx0IG9mIGFwcGx5aW5nIG9uRnVsZmlsbGVkXG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGUuc3ByZWFkID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnRoZW4oYWxsKS50aGVuKGZ1bmN0aW9uKGFycmF5KSB7XG5cdFx0XHRcdHJldHVybiBvbkZ1bGZpbGxlZC5hcHBseSh0aGlzLCBhcnJheSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFByb21pc2U7XG5cblx0XHQvKipcblx0XHQgKiBPbmUtd2lubmVyIGNvbXBldGl0aXZlIHJhY2UuXG5cdFx0ICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgZnVsZmlsbCB3aGVuIG9uZSBvZiB0aGUgcHJvbWlzZXNcblx0XHQgKiBpbiB0aGUgaW5wdXQgYXJyYXkgZnVsZmlsbHMsIG9yIHdpbGwgcmVqZWN0IHdoZW4gYWxsIHByb21pc2VzXG5cdFx0ICogaGF2ZSByZWplY3RlZC5cblx0XHQgKiBAcGFyYW0ge2FycmF5fSBwcm9taXNlc1xuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSBwcm9taXNlIGZvciB0aGUgZmlyc3QgZnVsZmlsbGVkIHZhbHVlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gYW55KHByb21pc2VzKSB7XG5cdFx0XHR2YXIgcCA9IFByb21pc2UuX2RlZmVyKCk7XG5cdFx0XHR2YXIgcmVzb2x2ZXIgPSBwLl9oYW5kbGVyO1xuXHRcdFx0dmFyIGwgPSBwcm9taXNlcy5sZW5ndGg+Pj4wO1xuXG5cdFx0XHR2YXIgcGVuZGluZyA9IGw7XG5cdFx0XHR2YXIgZXJyb3JzID0gW107XG5cblx0XHRcdGZvciAodmFyIGgsIHgsIGkgPSAwOyBpIDwgbDsgKytpKSB7XG5cdFx0XHRcdHggPSBwcm9taXNlc1tpXTtcblx0XHRcdFx0aWYoeCA9PT0gdm9pZCAwICYmICEoaSBpbiBwcm9taXNlcykpIHtcblx0XHRcdFx0XHQtLXBlbmRpbmc7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoID0gUHJvbWlzZS5faGFuZGxlcih4KTtcblx0XHRcdFx0aWYoaC5zdGF0ZSgpID4gMCkge1xuXHRcdFx0XHRcdHJlc29sdmVyLmJlY29tZShoKTtcblx0XHRcdFx0XHRQcm9taXNlLl92aXNpdFJlbWFpbmluZyhwcm9taXNlcywgaSwgaCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aC52aXNpdChyZXNvbHZlciwgaGFuZGxlRnVsZmlsbCwgaGFuZGxlUmVqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihwZW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdHJlc29sdmVyLnJlamVjdChuZXcgUmFuZ2VFcnJvcignYW55KCk6IGFycmF5IG11c3Qgbm90IGJlIGVtcHR5JykpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcDtcblxuXHRcdFx0ZnVuY3Rpb24gaGFuZGxlRnVsZmlsbCh4KSB7XG5cdFx0XHRcdC8qanNoaW50IHZhbGlkdGhpczp0cnVlKi9cblx0XHRcdFx0ZXJyb3JzID0gbnVsbDtcblx0XHRcdFx0dGhpcy5yZXNvbHZlKHgpOyAvLyB0aGlzID09PSByZXNvbHZlclxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBoYW5kbGVSZWplY3QoZSkge1xuXHRcdFx0XHQvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSovXG5cdFx0XHRcdGlmKHRoaXMucmVzb2x2ZWQpIHsgLy8gdGhpcyA9PT0gcmVzb2x2ZXJcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlcnJvcnMucHVzaChlKTtcblx0XHRcdFx0aWYoLS1wZW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5yZWplY3QoZXJyb3JzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIE4td2lubmVyIGNvbXBldGl0aXZlIHJhY2Vcblx0XHQgKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCBmdWxmaWxsIHdoZW4gbiBpbnB1dCBwcm9taXNlcyBoYXZlXG5cdFx0ICogZnVsZmlsbGVkLCBvciB3aWxsIHJlamVjdCB3aGVuIGl0IGJlY29tZXMgaW1wb3NzaWJsZSBmb3IgblxuXHRcdCAqIGlucHV0IHByb21pc2VzIHRvIGZ1bGZpbGwgKGllIHdoZW4gcHJvbWlzZXMubGVuZ3RoIC0gbiArIDFcblx0XHQgKiBoYXZlIHJlamVjdGVkKVxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IHByb21pc2VzXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG5cblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSBmb3IgdGhlIGVhcmxpZXN0IG4gZnVsZmlsbG1lbnQgdmFsdWVzXG5cdFx0ICpcblx0XHQgKiBAZGVwcmVjYXRlZFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHNvbWUocHJvbWlzZXMsIG4pIHtcblx0XHRcdC8qanNoaW50IG1heGNvbXBsZXhpdHk6NyovXG5cdFx0XHR2YXIgcCA9IFByb21pc2UuX2RlZmVyKCk7XG5cdFx0XHR2YXIgcmVzb2x2ZXIgPSBwLl9oYW5kbGVyO1xuXG5cdFx0XHR2YXIgcmVzdWx0cyA9IFtdO1xuXHRcdFx0dmFyIGVycm9ycyA9IFtdO1xuXG5cdFx0XHR2YXIgbCA9IHByb21pc2VzLmxlbmd0aD4+PjA7XG5cdFx0XHR2YXIgbkZ1bGZpbGwgPSAwO1xuXHRcdFx0dmFyIG5SZWplY3Q7XG5cdFx0XHR2YXIgeCwgaTsgLy8gcmV1c2VkIGluIGJvdGggZm9yKCkgbG9vcHNcblxuXHRcdFx0Ly8gRmlyc3QgcGFzczogY291bnQgYWN0dWFsIGFycmF5IGl0ZW1zXG5cdFx0XHRmb3IoaT0wOyBpPGw7ICsraSkge1xuXHRcdFx0XHR4ID0gcHJvbWlzZXNbaV07XG5cdFx0XHRcdGlmKHggPT09IHZvaWQgMCAmJiAhKGkgaW4gcHJvbWlzZXMpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0KytuRnVsZmlsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcHV0ZSBhY3R1YWwgZ29hbHNcblx0XHRcdG4gPSBNYXRoLm1heChuLCAwKTtcblx0XHRcdG5SZWplY3QgPSAobkZ1bGZpbGwgLSBuICsgMSk7XG5cdFx0XHRuRnVsZmlsbCA9IE1hdGgubWluKG4sIG5GdWxmaWxsKTtcblxuXHRcdFx0aWYobiA+IG5GdWxmaWxsKSB7XG5cdFx0XHRcdHJlc29sdmVyLnJlamVjdChuZXcgUmFuZ2VFcnJvcignc29tZSgpOiBhcnJheSBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgJ1xuXHRcdFx0XHQrIG4gKyAnIGl0ZW0ocyksIGJ1dCBoYWQgJyArIG5GdWxmaWxsKSk7XG5cdFx0XHR9IGVsc2UgaWYobkZ1bGZpbGwgPT09IDApIHtcblx0XHRcdFx0cmVzb2x2ZXIucmVzb2x2ZShyZXN1bHRzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2Vjb25kIHBhc3M6IG9ic2VydmUgZWFjaCBhcnJheSBpdGVtLCBtYWtlIHByb2dyZXNzIHRvd2FyZCBnb2Fsc1xuXHRcdFx0Zm9yKGk9MDsgaTxsOyArK2kpIHtcblx0XHRcdFx0eCA9IHByb21pc2VzW2ldO1xuXHRcdFx0XHRpZih4ID09PSB2b2lkIDAgJiYgIShpIGluIHByb21pc2VzKSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0UHJvbWlzZS5faGFuZGxlcih4KS52aXNpdChyZXNvbHZlciwgZnVsZmlsbCwgcmVqZWN0LCByZXNvbHZlci5ub3RpZnkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcDtcblxuXHRcdFx0ZnVuY3Rpb24gZnVsZmlsbCh4KSB7XG5cdFx0XHRcdC8qanNoaW50IHZhbGlkdGhpczp0cnVlKi9cblx0XHRcdFx0aWYodGhpcy5yZXNvbHZlZCkgeyAvLyB0aGlzID09PSByZXNvbHZlclxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdHMucHVzaCh4KTtcblx0XHRcdFx0aWYoLS1uRnVsZmlsbCA9PT0gMCkge1xuXHRcdFx0XHRcdGVycm9ycyA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy5yZXNvbHZlKHJlc3VsdHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHJlamVjdChlKSB7XG5cdFx0XHRcdC8qanNoaW50IHZhbGlkdGhpczp0cnVlKi9cblx0XHRcdFx0aWYodGhpcy5yZXNvbHZlZCkgeyAvLyB0aGlzID09PSByZXNvbHZlclxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVycm9ycy5wdXNoKGUpO1xuXHRcdFx0XHRpZigtLW5SZWplY3QgPT09IDApIHtcblx0XHRcdFx0XHRyZXN1bHRzID0gbnVsbDtcblx0XHRcdFx0XHR0aGlzLnJlamVjdChlcnJvcnMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQXBwbHkgZiB0byB0aGUgdmFsdWUgb2YgZWFjaCBwcm9taXNlIGluIGEgbGlzdCBvZiBwcm9taXNlc1xuXHRcdCAqIGFuZCByZXR1cm4gYSBuZXcgbGlzdCBjb250YWluaW5nIHRoZSByZXN1bHRzLlxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IHByb21pc2VzXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbih4OiosIGluZGV4Ok51bWJlcik6Kn0gZiBtYXBwaW5nIGZ1bmN0aW9uXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gbWFwKHByb21pc2VzLCBmKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5fdHJhdmVyc2UoZiwgcHJvbWlzZXMpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEZpbHRlciB0aGUgcHJvdmlkZWQgYXJyYXkgb2YgcHJvbWlzZXMgdXNpbmcgdGhlIHByb3ZpZGVkIHByZWRpY2F0ZS4gIElucHV0IG1heVxuXHRcdCAqIGNvbnRhaW4gcHJvbWlzZXMgYW5kIHZhbHVlc1xuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHByb21pc2VzIGFycmF5IG9mIHByb21pc2VzIGFuZCB2YWx1ZXNcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9uKHg6KiwgaW5kZXg6TnVtYmVyKTpib29sZWFufSBwcmVkaWNhdGUgZmlsdGVyaW5nIHByZWRpY2F0ZS5cblx0XHQgKiAgTXVzdCByZXR1cm4gdHJ1dGh5IChvciBwcm9taXNlIGZvciB0cnV0aHkpIGZvciBpdGVtcyB0byByZXRhaW4uXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IHByb21pc2UgdGhhdCB3aWxsIGZ1bGZpbGwgd2l0aCBhbiBhcnJheSBjb250YWluaW5nIGFsbCBpdGVtc1xuXHRcdCAqICBmb3Igd2hpY2ggcHJlZGljYXRlIHJldHVybmVkIHRydXRoeS5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBmaWx0ZXIocHJvbWlzZXMsIHByZWRpY2F0ZSkge1xuXHRcdFx0dmFyIGEgPSBzbGljZS5jYWxsKHByb21pc2VzKTtcblx0XHRcdHJldHVybiBQcm9taXNlLl90cmF2ZXJzZShwcmVkaWNhdGUsIGEpLnRoZW4oZnVuY3Rpb24oa2VlcCkge1xuXHRcdFx0XHRyZXR1cm4gZmlsdGVyU3luYyhhLCBrZWVwKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZpbHRlclN5bmMocHJvbWlzZXMsIGtlZXApIHtcblx0XHRcdC8vIFNhZmUgYmVjYXVzZSB3ZSBrbm93IGFsbCBwcm9taXNlcyBoYXZlIGZ1bGZpbGxlZCBpZiB3ZSd2ZSBtYWRlIGl0IHRoaXMgZmFyXG5cdFx0XHR2YXIgbCA9IGtlZXAubGVuZ3RoO1xuXHRcdFx0dmFyIGZpbHRlcmVkID0gbmV3IEFycmF5KGwpO1xuXHRcdFx0Zm9yKHZhciBpPTAsIGo9MDsgaTxsOyArK2kpIHtcblx0XHRcdFx0aWYoa2VlcFtpXSkge1xuXHRcdFx0XHRcdGZpbHRlcmVkW2orK10gPSBQcm9taXNlLl9oYW5kbGVyKHByb21pc2VzW2ldKS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZmlsdGVyZWQubGVuZ3RoID0gajtcblx0XHRcdHJldHVybiBmaWx0ZXJlZDtcblxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGFsd2F5cyBmdWxmaWxsIHdpdGggYW4gYXJyYXkgY29udGFpbmluZ1xuXHRcdCAqIHRoZSBvdXRjb21lIHN0YXRlcyBvZiBhbGwgaW5wdXQgcHJvbWlzZXMuICBUaGUgcmV0dXJuZWQgcHJvbWlzZVxuXHRcdCAqIHdpbGwgbmV2ZXIgcmVqZWN0LlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHByb21pc2VzXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IHByb21pc2UgZm9yIGFycmF5IG9mIHNldHRsZWQgc3RhdGUgZGVzY3JpcHRvcnNcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBzZXR0bGUocHJvbWlzZXMpIHtcblx0XHRcdHJldHVybiBhbGwocHJvbWlzZXMubWFwKHNldHRsZU9uZSkpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNldHRsZU9uZShwKSB7XG5cdFx0XHR2YXIgaCA9IFByb21pc2UuX2hhbmRsZXIocCk7XG5cdFx0XHRpZihoLnN0YXRlKCkgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHRvUHJvbWlzZShwKS50aGVuKHN0YXRlLmZ1bGZpbGxlZCwgc3RhdGUucmVqZWN0ZWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRoLl91bnJlcG9ydCgpO1xuXHRcdFx0cmV0dXJuIHN0YXRlLmluc3BlY3QoaCk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogVHJhZGl0aW9uYWwgcmVkdWNlIGZ1bmN0aW9uLCBzaW1pbGFyIHRvIGBBcnJheS5wcm90b3R5cGUucmVkdWNlKClgLCBidXRcblx0XHQgKiBpbnB1dCBtYXkgY29udGFpbiBwcm9taXNlcyBhbmQvb3IgdmFsdWVzLCBhbmQgcmVkdWNlRnVuY1xuXHRcdCAqIG1heSByZXR1cm4gZWl0aGVyIGEgdmFsdWUgb3IgYSBwcm9taXNlLCAqYW5kKiBpbml0aWFsVmFsdWUgbWF5XG5cdFx0ICogYmUgYSBwcm9taXNlIGZvciB0aGUgc3RhcnRpbmcgdmFsdWUuXG5cdFx0ICogQHBhcmFtIHtBcnJheXxQcm9taXNlfSBwcm9taXNlcyBhcnJheSBvciBwcm9taXNlIGZvciBhbiBhcnJheSBvZiBhbnl0aGluZyxcblx0XHQgKiAgICAgIG1heSBjb250YWluIGEgbWl4IG9mIHByb21pc2VzIGFuZCB2YWx1ZXMuXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbihhY2N1bXVsYXRlZDoqLCB4OiosIGluZGV4Ok51bWJlcik6Kn0gZiByZWR1Y2UgZnVuY3Rpb25cblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIGZpbmFsIHJlZHVjZWQgdmFsdWVcblx0XHQgKi9cblx0XHRmdW5jdGlvbiByZWR1Y2UocHJvbWlzZXMsIGYgLyosIGluaXRpYWxWYWx1ZSAqLykge1xuXHRcdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXIuY2FsbChwcm9taXNlcywgbGlmdENvbWJpbmUoZiksIGFyZ3VtZW50c1syXSlcblx0XHRcdFx0XHQ6IGFyLmNhbGwocHJvbWlzZXMsIGxpZnRDb21iaW5lKGYpKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBUcmFkaXRpb25hbCByZWR1Y2UgZnVuY3Rpb24sIHNpbWlsYXIgdG8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodCgpYCwgYnV0XG5cdFx0ICogaW5wdXQgbWF5IGNvbnRhaW4gcHJvbWlzZXMgYW5kL29yIHZhbHVlcywgYW5kIHJlZHVjZUZ1bmNcblx0XHQgKiBtYXkgcmV0dXJuIGVpdGhlciBhIHZhbHVlIG9yIGEgcHJvbWlzZSwgKmFuZCogaW5pdGlhbFZhbHVlIG1heVxuXHRcdCAqIGJlIGEgcHJvbWlzZSBmb3IgdGhlIHN0YXJ0aW5nIHZhbHVlLlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl8UHJvbWlzZX0gcHJvbWlzZXMgYXJyYXkgb3IgcHJvbWlzZSBmb3IgYW4gYXJyYXkgb2YgYW55dGhpbmcsXG5cdFx0ICogICAgICBtYXkgY29udGFpbiBhIG1peCBvZiBwcm9taXNlcyBhbmQgdmFsdWVzLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb24oYWNjdW11bGF0ZWQ6KiwgeDoqLCBpbmRleDpOdW1iZXIpOip9IGYgcmVkdWNlIGZ1bmN0aW9uXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSBmaW5hbCByZWR1Y2VkIHZhbHVlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gcmVkdWNlUmlnaHQocHJvbWlzZXMsIGYgLyosIGluaXRpYWxWYWx1ZSAqLykge1xuXHRcdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJyLmNhbGwocHJvbWlzZXMsIGxpZnRDb21iaW5lKGYpLCBhcmd1bWVudHNbMl0pXG5cdFx0XHRcdFx0OiBhcnIuY2FsbChwcm9taXNlcywgbGlmdENvbWJpbmUoZikpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGxpZnRDb21iaW5lKGYpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbih6LCB4LCBpKSB7XG5cdFx0XHRcdHJldHVybiBhcHBseUZvbGQoZiwgdm9pZCAwLCBbeix4LGldKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xuXG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSk7IH0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3doZW4vbGliL2RlY29yYXRvcnMvYXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdHJldHVybiBmdW5jdGlvbiBmbG93KFByb21pc2UpIHtcblxuXHRcdHZhciByZXNvbHZlID0gUHJvbWlzZS5yZXNvbHZlO1xuXHRcdHZhciByZWplY3QgPSBQcm9taXNlLnJlamVjdDtcblx0XHR2YXIgb3JpZ0NhdGNoID0gUHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ107XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGUgdGhlIHVsdGltYXRlIGZ1bGZpbGxtZW50IHZhbHVlIG9yIHJlamVjdGlvbiByZWFzb24sIGFuZCBhc3N1bWVcblx0XHQgKiByZXNwb25zaWJpbGl0eSBmb3IgYWxsIGVycm9ycy4gIElmIGFuIGVycm9yIHByb3BhZ2F0ZXMgb3V0IG9mIHJlc3VsdFxuXHRcdCAqIG9yIGhhbmRsZUZhdGFsRXJyb3IsIGl0IHdpbGwgYmUgcmV0aHJvd24gdG8gdGhlIGhvc3QsIHJlc3VsdGluZyBpbiBhXG5cdFx0ICogbG91ZCBzdGFjayB0cmFjayBvbiBtb3N0IHBsYXRmb3JtcyBhbmQgYSBjcmFzaCBvbiBzb21lLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb24/fSBvblJlc3VsdFxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb24/fSBvbkVycm9yXG5cdFx0ICogQHJldHVybnMge3VuZGVmaW5lZH1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24ob25SZXN1bHQsIG9uRXJyb3IpIHtcblx0XHRcdHRoaXMuX2hhbmRsZXIudmlzaXQodGhpcy5faGFuZGxlci5yZWNlaXZlciwgb25SZXN1bHQsIG9uRXJyb3IpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBZGQgRXJyb3ItdHlwZSBhbmQgcHJlZGljYXRlIG1hdGNoaW5nIHRvIGNhdGNoLiAgRXhhbXBsZXM6XG5cdFx0ICogcHJvbWlzZS5jYXRjaChUeXBlRXJyb3IsIGhhbmRsZVR5cGVFcnJvcilcblx0XHQgKiAgIC5jYXRjaChwcmVkaWNhdGUsIGhhbmRsZU1hdGNoZWRFcnJvcnMpXG5cdFx0ICogICAuY2F0Y2goaGFuZGxlUmVtYWluaW5nRXJyb3JzKVxuXHRcdCAqIEBwYXJhbSBvblJlamVjdGVkXG5cdFx0ICogQHJldHVybnMgeyp9XG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBQcm9taXNlLnByb3RvdHlwZS5vdGhlcndpc2UgPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcblx0XHRcdFx0cmV0dXJuIG9yaWdDYXRjaC5jYWxsKHRoaXMsIG9uUmVqZWN0ZWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0eXBlb2Ygb25SZWplY3RlZCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbnN1cmUocmVqZWN0SW52YWxpZFByZWRpY2F0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvcmlnQ2F0Y2guY2FsbCh0aGlzLCBjcmVhdGVDYXRjaEZpbHRlcihhcmd1bWVudHNbMV0sIG9uUmVqZWN0ZWQpKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogV3JhcHMgdGhlIHByb3ZpZGVkIGNhdGNoIGhhbmRsZXIsIHNvIHRoYXQgaXQgd2lsbCBvbmx5IGJlIGNhbGxlZFxuXHRcdCAqIGlmIHRoZSBwcmVkaWNhdGUgZXZhbHVhdGVzIHRydXRoeVxuXHRcdCAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBoYW5kbGVyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcHJlZGljYXRlXG5cdFx0ICogQHJldHVybnMge2Z1bmN0aW9ufSBjb25kaXRpb25hbCBjYXRjaCBoYW5kbGVyXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gY3JlYXRlQ2F0Y2hGaWx0ZXIoaGFuZGxlciwgcHJlZGljYXRlKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbHVhdGVQcmVkaWNhdGUoZSwgcHJlZGljYXRlKVxuXHRcdFx0XHRcdD8gaGFuZGxlci5jYWxsKHRoaXMsIGUpXG5cdFx0XHRcdFx0OiByZWplY3QoZSk7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEVuc3VyZXMgdGhhdCBvbkZ1bGZpbGxlZE9yUmVqZWN0ZWQgd2lsbCBiZSBjYWxsZWQgcmVnYXJkbGVzcyBvZiB3aGV0aGVyXG5cdFx0ICogdGhpcyBwcm9taXNlIGlzIGZ1bGZpbGxlZCBvciByZWplY3RlZC4gIG9uRnVsZmlsbGVkT3JSZWplY3RlZCBXSUxMIE5PVFxuXHRcdCAqIHJlY2VpdmUgdGhlIHByb21pc2VzJyB2YWx1ZSBvciByZWFzb24uICBBbnkgcmV0dXJuZWQgdmFsdWUgd2lsbCBiZSBkaXNyZWdhcmRlZC5cblx0XHQgKiBvbkZ1bGZpbGxlZE9yUmVqZWN0ZWQgbWF5IHRocm93IG9yIHJldHVybiBhIHJlamVjdGVkIHByb21pc2UgdG8gc2lnbmFsXG5cdFx0ICogYW4gYWRkaXRpb25hbCBlcnJvci5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHJlZ2FyZGxlc3Mgb2Zcblx0XHQgKiAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IFByb21pc2UucHJvdG90eXBlLmVuc3VyZSA9IGZ1bmN0aW9uKGhhbmRsZXIpIHtcblx0XHRcdGlmKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHgpIHtcblx0XHRcdFx0cmV0dXJuIHJ1blNpZGVFZmZlY3QoaGFuZGxlciwgdGhpcywgaWRlbnRpdHksIHgpO1xuXHRcdFx0fSwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRyZXR1cm4gcnVuU2lkZUVmZmVjdChoYW5kbGVyLCB0aGlzLCByZWplY3QsIGUpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHJ1blNpZGVFZmZlY3QgKGhhbmRsZXIsIHRoaXNBcmcsIHByb3BhZ2F0ZSwgdmFsdWUpIHtcblx0XHRcdHZhciByZXN1bHQgPSBoYW5kbGVyLmNhbGwodGhpc0FyZyk7XG5cdFx0XHRyZXR1cm4gbWF5YmVUaGVuYWJsZShyZXN1bHQpXG5cdFx0XHRcdD8gcHJvcGFnYXRlVmFsdWUocmVzdWx0LCBwcm9wYWdhdGUsIHZhbHVlKVxuXHRcdFx0XHQ6IHByb3BhZ2F0ZSh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcHJvcGFnYXRlVmFsdWUgKHJlc3VsdCwgcHJvcGFnYXRlLCB4KSB7XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZShyZXN1bHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcHJvcGFnYXRlKHgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUmVjb3ZlciBmcm9tIGEgZmFpbHVyZSBieSByZXR1cm5pbmcgYSBkZWZhdWx0VmFsdWUuICBJZiBkZWZhdWx0VmFsdWVcblx0XHQgKiBpcyBhIHByb21pc2UsIGl0J3MgZnVsZmlsbG1lbnQgdmFsdWUgd2lsbCBiZSB1c2VkLiAgSWYgZGVmYXVsdFZhbHVlIGlzXG5cdFx0ICogYSBwcm9taXNlIHRoYXQgcmVqZWN0cywgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCByZWplY3Qgd2l0aCB0aGVcblx0XHQgKiBzYW1lIHJlYXNvbi5cblx0XHQgKiBAcGFyYW0geyp9IGRlZmF1bHRWYWx1ZVxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSBuZXcgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdFByb21pc2UucHJvdG90eXBlWydlbHNlJ10gPSBQcm9taXNlLnByb3RvdHlwZS5vckVsc2UgPSBmdW5jdGlvbihkZWZhdWx0VmFsdWUpIHtcblx0XHRcdHJldHVybiB0aGlzLnRoZW4odm9pZCAwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBTaG9ydGN1dCBmb3IgLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiB2YWx1ZTsgfSlcblx0XHQgKiBAcGFyYW0gIHsqfSB2YWx1ZVxuXHRcdCAqIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB0aGF0OlxuXHRcdCAqICAtIGlzIGZ1bGZpbGxlZCBpZiB2YWx1ZSBpcyBub3QgYSBwcm9taXNlLCBvclxuXHRcdCAqICAtIGlmIHZhbHVlIGlzIGEgcHJvbWlzZSwgd2lsbCBmdWxmaWxsIHdpdGggaXRzIHZhbHVlLCBvciByZWplY3Rcblx0XHQgKiAgICB3aXRoIGl0cyByZWFzb24uXG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGVbJ3lpZWxkJ10gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgYSBzaWRlIGVmZmVjdCB3aGVuIHRoaXMgcHJvbWlzZSBmdWxmaWxscywgd2l0aG91dCBjaGFuZ2luZyB0aGVcblx0XHQgKiBmdWxmaWxsbWVudCB2YWx1ZS5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFNpZGVFZmZlY3Rcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZS50YXAgPSBmdW5jdGlvbihvbkZ1bGZpbGxlZFNpZGVFZmZlY3QpIHtcblx0XHRcdHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWRTaWRlRWZmZWN0KVsneWllbGQnXSh0aGlzKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFByb21pc2U7XG5cdH07XG5cblx0ZnVuY3Rpb24gcmVqZWN0SW52YWxpZFByZWRpY2F0ZSgpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdjYXRjaCBwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBldmFsdWF0ZVByZWRpY2F0ZShlLCBwcmVkaWNhdGUpIHtcblx0XHRyZXR1cm4gaXNFcnJvcihwcmVkaWNhdGUpID8gZSBpbnN0YW5jZW9mIHByZWRpY2F0ZSA6IHByZWRpY2F0ZShlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzRXJyb3IocHJlZGljYXRlKSB7XG5cdFx0cmV0dXJuIHByZWRpY2F0ZSA9PT0gRXJyb3Jcblx0XHRcdHx8IChwcmVkaWNhdGUgIT0gbnVsbCAmJiBwcmVkaWNhdGUucHJvdG90eXBlIGluc3RhbmNlb2YgRXJyb3IpO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWF5YmVUaGVuYWJsZSh4KSB7XG5cdFx0cmV0dXJuICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHggPT09ICdmdW5jdGlvbicpICYmIHggIT09IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBpZGVudGl0eSh4KSB7XG5cdFx0cmV0dXJuIHg7XG5cdH1cblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3doZW4vbGliL2RlY29yYXRvcnMvZmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cbi8qKiBAYXV0aG9yIEplZmYgRXNjYWxhbnRlICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdHJldHVybiBmdW5jdGlvbiBmb2xkKFByb21pc2UpIHtcblxuXHRcdFByb21pc2UucHJvdG90eXBlLmZvbGQgPSBmdW5jdGlvbihmLCB6KSB7XG5cdFx0XHR2YXIgcHJvbWlzZSA9IHRoaXMuX2JlZ2V0KCk7XG5cblx0XHRcdHRoaXMuX2hhbmRsZXIuZm9sZChmdW5jdGlvbih6LCB4LCB0bykge1xuXHRcdFx0XHRQcm9taXNlLl9oYW5kbGVyKHopLmZvbGQoZnVuY3Rpb24oeCwgeiwgdG8pIHtcblx0XHRcdFx0XHR0by5yZXNvbHZlKGYuY2FsbCh0aGlzLCB6LCB4KSk7XG5cdFx0XHRcdH0sIHgsIHRoaXMsIHRvKTtcblx0XHRcdH0sIHosIHByb21pc2UuX2hhbmRsZXIucmVjZWl2ZXIsIHByb21pc2UuX2hhbmRsZXIpO1xuXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFByb21pc2U7XG5cdH07XG5cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyB9KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL2ZvbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKHJlcXVpcmUpIHtcblxuXHR2YXIgaW5zcGVjdCA9IHJlcXVpcmUoJy4uL3N0YXRlJykuaW5zcGVjdDtcblxuXHRyZXR1cm4gZnVuY3Rpb24gaW5zcGVjdGlvbihQcm9taXNlKSB7XG5cblx0XHRQcm9taXNlLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gaW5zcGVjdChQcm9taXNlLl9oYW5kbGVyKHRoaXMpKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFByb21pc2U7XG5cdH07XG5cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKTsgfSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd2hlbi9saWIvZGVjb3JhdG9ycy9pbnNwZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbigpIHtcblxuXHRyZXR1cm4gZnVuY3Rpb24gZ2VuZXJhdGUoUHJvbWlzZSkge1xuXG5cdFx0dmFyIHJlc29sdmUgPSBQcm9taXNlLnJlc29sdmU7XG5cblx0XHRQcm9taXNlLml0ZXJhdGUgPSBpdGVyYXRlO1xuXHRcdFByb21pc2UudW5mb2xkID0gdW5mb2xkO1xuXG5cdFx0cmV0dXJuIFByb21pc2U7XG5cblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZCBVc2UgZ2l0aHViLmNvbS9jdWpvanMvbW9zdCBzdHJlYW1zIGFuZCBtb3N0Lml0ZXJhdGVcblx0XHQgKiBHZW5lcmF0ZSBhIChwb3RlbnRpYWxseSBpbmZpbml0ZSkgc3RyZWFtIG9mIHByb21pc2VkIHZhbHVlczpcblx0XHQgKiB4LCBmKHgpLCBmKGYoeCkpLCBldGMuIHVudGlsIGNvbmRpdGlvbih4KSByZXR1cm5zIHRydWVcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgbmV3IHggZnJvbSB0aGUgcHJldmlvdXMgeFxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbmRpdGlvbiBmdW5jdGlvbiB0aGF0LCBnaXZlbiB0aGUgY3VycmVudCB4LCByZXR1cm5zXG5cdFx0ICogIHRydXRoeSB3aGVuIHRoZSBpdGVyYXRlIHNob3VsZCBzdG9wXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgdGhlIHZhbHVlIHByb2R1Y2VkIGJ5IGZcblx0XHQgKiBAcGFyYW0geyp8UHJvbWlzZX0geCBzdGFydGluZyB2YWx1ZSwgbWF5IGJlIGEgcHJvbWlzZVxuXHRcdCAqIEByZXR1cm4ge1Byb21pc2V9IHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgY2FsbCB0byBmIGJlZm9yZVxuXHRcdCAqICBjb25kaXRpb24gcmV0dXJucyB0cnVlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gaXRlcmF0ZShmLCBjb25kaXRpb24sIGhhbmRsZXIsIHgpIHtcblx0XHRcdHJldHVybiB1bmZvbGQoZnVuY3Rpb24oeCkge1xuXHRcdFx0XHRyZXR1cm4gW3gsIGYoeCldO1xuXHRcdFx0fSwgY29uZGl0aW9uLCBoYW5kbGVyLCB4KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZCBVc2UgZ2l0aHViLmNvbS9jdWpvanMvbW9zdCBzdHJlYW1zIGFuZCBtb3N0LnVuZm9sZFxuXHRcdCAqIEdlbmVyYXRlIGEgKHBvdGVudGlhbGx5IGluZmluaXRlKSBzdHJlYW0gb2YgcHJvbWlzZWQgdmFsdWVzXG5cdFx0ICogYnkgYXBwbHlpbmcgaGFuZGxlcihnZW5lcmF0b3Ioc2VlZCkpIGl0ZXJhdGl2ZWx5IHVudGlsXG5cdFx0ICogY29uZGl0aW9uKHNlZWQpIHJldHVybnMgdHJ1ZS5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSB1bnNwb29sIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIGEgW3ZhbHVlLCBuZXdTZWVkXVxuXHRcdCAqICBnaXZlbiBhIHNlZWQuXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY29uZGl0aW9uIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIHRoZSBjdXJyZW50IHNlZWQsIHJldHVybnNcblx0XHQgKiAgdHJ1dGh5IHdoZW4gdGhlIHVuZm9sZCBzaG91bGQgc3RvcFxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSB2YWx1ZSBwcm9kdWNlZCBieSB1bnNwb29sXG5cdFx0ICogQHBhcmFtIHggeyp8UHJvbWlzZX0gc3RhcnRpbmcgdmFsdWUsIG1heSBiZSBhIHByb21pc2Vcblx0XHQgKiBAcmV0dXJuIHtQcm9taXNlfSB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IHZhbHVlIHByb2R1Y2VkIGJ5IHVuc3Bvb2wgYmVmb3JlXG5cdFx0ICogIGNvbmRpdGlvbiByZXR1cm5zIHRydWVcblx0XHQgKi9cblx0XHRmdW5jdGlvbiB1bmZvbGQodW5zcG9vbCwgY29uZGl0aW9uLCBoYW5kbGVyLCB4KSB7XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZSh4KS50aGVuKGZ1bmN0aW9uKHNlZWQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmUoY29uZGl0aW9uKHNlZWQpKS50aGVuKGZ1bmN0aW9uKGRvbmUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZG9uZSA/IHNlZWQgOiByZXNvbHZlKHVuc3Bvb2woc2VlZCkpLnNwcmVhZChuZXh0KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZnVuY3Rpb24gbmV4dChpdGVtLCBuZXdTZWVkKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlKGhhbmRsZXIoaXRlbSkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHVuZm9sZCh1bnNwb29sLCBjb25kaXRpb24sIGhhbmRsZXIsIG5ld1NlZWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyB9KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL2l0ZXJhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdHJldHVybiBmdW5jdGlvbiBwcm9ncmVzcyhQcm9taXNlKSB7XG5cblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZFxuXHRcdCAqIFJlZ2lzdGVyIGEgcHJvZ3Jlc3MgaGFuZGxlciBmb3IgdGhpcyBwcm9taXNlXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gb25Qcm9ncmVzc1xuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHRcdCAqL1xuXHRcdFByb21pc2UucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24ob25Qcm9ncmVzcykge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsIHZvaWQgMCwgb25Qcm9ncmVzcyk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBQcm9taXNlO1xuXHR9O1xuXG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgfSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd2hlbi9saWIvZGVjb3JhdG9ycy9wcm9ncmVzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkge1xuXG5cdHZhciBlbnYgPSByZXF1aXJlKCcuLi9lbnYnKTtcblx0dmFyIFRpbWVvdXRFcnJvciA9IHJlcXVpcmUoJy4uL1RpbWVvdXRFcnJvcicpO1xuXG5cdGZ1bmN0aW9uIHNldFRpbWVvdXQoZiwgbXMsIHgsIHkpIHtcblx0XHRyZXR1cm4gZW52LnNldFRpbWVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0Zih4LCB5LCBtcyk7XG5cdFx0fSwgbXMpO1xuXHR9XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHRpbWVkKFByb21pc2UpIHtcblx0XHQvKipcblx0XHQgKiBSZXR1cm4gYSBuZXcgcHJvbWlzZSB3aG9zZSBmdWxmaWxsbWVudCB2YWx1ZSBpcyByZXZlYWxlZCBvbmx5XG5cdFx0ICogYWZ0ZXIgbXMgbWlsbGlzZWNvbmRzXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1zIG1pbGxpc2Vjb25kc1xuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHRcdCAqL1xuXHRcdFByb21pc2UucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24obXMpIHtcblx0XHRcdHZhciBwID0gdGhpcy5fYmVnZXQoKTtcblx0XHRcdHRoaXMuX2hhbmRsZXIuZm9sZChoYW5kbGVEZWxheSwgbXMsIHZvaWQgMCwgcC5faGFuZGxlcik7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlRGVsYXkobXMsIHgsIGgpIHtcblx0XHRcdHNldFRpbWVvdXQocmVzb2x2ZURlbGF5LCBtcywgeCwgaCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcmVzb2x2ZURlbGF5KHgsIGgpIHtcblx0XHRcdGgucmVzb2x2ZSh4KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm4gYSBuZXcgcHJvbWlzZSB0aGF0IHJlamVjdHMgYWZ0ZXIgbXMgbWlsbGlzZWNvbmRzIHVubGVzc1xuXHRcdCAqIHRoaXMgcHJvbWlzZSBmdWxmaWxscyBlYXJsaWVyLCBpbiB3aGljaCBjYXNlIHRoZSByZXR1cm5lZCBwcm9taXNlXG5cdFx0ICogZnVsZmlsbHMgd2l0aCB0aGUgc2FtZSB2YWx1ZS5cblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbXMgbWlsbGlzZWNvbmRzXG5cdFx0ICogQHBhcmFtIHtFcnJvcnwqPX0gcmVhc29uIG9wdGlvbmFsIHJlamVjdGlvbiByZWFzb24gdG8gdXNlLCBkZWZhdWx0c1xuXHRcdCAqICAgdG8gYSBUaW1lb3V0RXJyb3IgaWYgbm90IHByb3ZpZGVkXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uKG1zLCByZWFzb24pIHtcblx0XHRcdHZhciBwID0gdGhpcy5fYmVnZXQoKTtcblx0XHRcdHZhciBoID0gcC5faGFuZGxlcjtcblxuXHRcdFx0dmFyIHQgPSBzZXRUaW1lb3V0KG9uVGltZW91dCwgbXMsIHJlYXNvbiwgcC5faGFuZGxlcik7XG5cblx0XHRcdHRoaXMuX2hhbmRsZXIudmlzaXQoaCxcblx0XHRcdFx0ZnVuY3Rpb24gb25GdWxmaWxsKHgpIHtcblx0XHRcdFx0XHRlbnYuY2xlYXJUaW1lcih0KTtcblx0XHRcdFx0XHR0aGlzLnJlc29sdmUoeCk7IC8vIHRoaXMgPSBoXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZ1bmN0aW9uIG9uUmVqZWN0KHgpIHtcblx0XHRcdFx0XHRlbnYuY2xlYXJUaW1lcih0KTtcblx0XHRcdFx0XHR0aGlzLnJlamVjdCh4KTsgLy8gdGhpcyA9IGhcblx0XHRcdFx0fSxcblx0XHRcdFx0aC5ub3RpZnkpO1xuXG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gb25UaW1lb3V0KHJlYXNvbiwgaCwgbXMpIHtcblx0XHRcdHZhciBlID0gdHlwZW9mIHJlYXNvbiA9PT0gJ3VuZGVmaW5lZCdcblx0XHRcdFx0PyBuZXcgVGltZW91dEVycm9yKCd0aW1lZCBvdXQgYWZ0ZXIgJyArIG1zICsgJ21zJylcblx0XHRcdFx0OiByZWFzb247XG5cdFx0XHRoLnJlamVjdChlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZTtcblx0fTtcblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUpOyB9KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL3RpbWVkLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbihyZXF1aXJlKSB7XG5cblx0dmFyIHNldFRpbWVyID0gcmVxdWlyZSgnLi4vZW52Jykuc2V0VGltZXI7XG5cdHZhciBmb3JtYXQgPSByZXF1aXJlKCcuLi9mb3JtYXQnKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdW5oYW5kbGVkUmVqZWN0aW9uKFByb21pc2UpIHtcblxuXHRcdHZhciBsb2dFcnJvciA9IG5vb3A7XG5cdFx0dmFyIGxvZ0luZm8gPSBub29wO1xuXHRcdHZhciBsb2NhbENvbnNvbGU7XG5cblx0XHRpZih0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIEFsaWFzIGNvbnNvbGUgdG8gcHJldmVudCB0aGluZ3MgbGlrZSB1Z2xpZnkncyBkcm9wX2NvbnNvbGUgb3B0aW9uIGZyb21cblx0XHRcdC8vIHJlbW92aW5nIGNvbnNvbGUubG9nL2Vycm9yLiBVbmhhbmRsZWQgcmVqZWN0aW9ucyBmYWxsIGludG8gdGhlIHNhbWVcblx0XHRcdC8vIGNhdGVnb3J5IGFzIHVuY2F1Z2h0IGV4Y2VwdGlvbnMsIGFuZCBidWlsZCB0b29scyBzaG91bGRuJ3Qgc2lsZW5jZSB0aGVtLlxuXHRcdFx0bG9jYWxDb25zb2xlID0gY29uc29sZTtcblx0XHRcdGxvZ0Vycm9yID0gdHlwZW9mIGxvY2FsQ29uc29sZS5lcnJvciAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdFx0PyBmdW5jdGlvbiAoZSkgeyBsb2NhbENvbnNvbGUuZXJyb3IoZSk7IH1cblx0XHRcdFx0OiBmdW5jdGlvbiAoZSkgeyBsb2NhbENvbnNvbGUubG9nKGUpOyB9O1xuXG5cdFx0XHRsb2dJbmZvID0gdHlwZW9mIGxvY2FsQ29uc29sZS5pbmZvICE9PSAndW5kZWZpbmVkJ1xuXHRcdFx0XHQ/IGZ1bmN0aW9uIChlKSB7IGxvY2FsQ29uc29sZS5pbmZvKGUpOyB9XG5cdFx0XHRcdDogZnVuY3Rpb24gKGUpIHsgbG9jYWxDb25zb2xlLmxvZyhlKTsgfTtcblx0XHR9XG5cblx0XHRQcm9taXNlLm9uUG90ZW50aWFsbHlVbmhhbmRsZWRSZWplY3Rpb24gPSBmdW5jdGlvbihyZWplY3Rpb24pIHtcblx0XHRcdGVucXVldWUocmVwb3J0LCByZWplY3Rpb24pO1xuXHRcdH07XG5cblx0XHRQcm9taXNlLm9uUG90ZW50aWFsbHlVbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkID0gZnVuY3Rpb24ocmVqZWN0aW9uKSB7XG5cdFx0XHRlbnF1ZXVlKHVucmVwb3J0LCByZWplY3Rpb24pO1xuXHRcdH07XG5cblx0XHRQcm9taXNlLm9uRmF0YWxSZWplY3Rpb24gPSBmdW5jdGlvbihyZWplY3Rpb24pIHtcblx0XHRcdGVucXVldWUodGhyb3dpdCwgcmVqZWN0aW9uLnZhbHVlKTtcblx0XHR9O1xuXG5cdFx0dmFyIHRhc2tzID0gW107XG5cdFx0dmFyIHJlcG9ydGVkID0gW107XG5cdFx0dmFyIHJ1bm5pbmcgPSBudWxsO1xuXG5cdFx0ZnVuY3Rpb24gcmVwb3J0KHIpIHtcblx0XHRcdGlmKCFyLmhhbmRsZWQpIHtcblx0XHRcdFx0cmVwb3J0ZWQucHVzaChyKTtcblx0XHRcdFx0bG9nRXJyb3IoJ1BvdGVudGlhbGx5IHVuaGFuZGxlZCByZWplY3Rpb24gWycgKyByLmlkICsgJ10gJyArIGZvcm1hdC5mb3JtYXRFcnJvcihyLnZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdW5yZXBvcnQocikge1xuXHRcdFx0dmFyIGkgPSByZXBvcnRlZC5pbmRleE9mKHIpO1xuXHRcdFx0aWYoaSA+PSAwKSB7XG5cdFx0XHRcdHJlcG9ydGVkLnNwbGljZShpLCAxKTtcblx0XHRcdFx0bG9nSW5mbygnSGFuZGxlZCBwcmV2aW91cyByZWplY3Rpb24gWycgKyByLmlkICsgJ10gJyArIGZvcm1hdC5mb3JtYXRPYmplY3Qoci52YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGVucXVldWUoZiwgeCkge1xuXHRcdFx0dGFza3MucHVzaChmLCB4KTtcblx0XHRcdGlmKHJ1bm5pbmcgPT09IG51bGwpIHtcblx0XHRcdFx0cnVubmluZyA9IHNldFRpbWVyKGZsdXNoLCAwKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmbHVzaCgpIHtcblx0XHRcdHJ1bm5pbmcgPSBudWxsO1xuXHRcdFx0d2hpbGUodGFza3MubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0YXNrcy5zaGlmdCgpKHRhc2tzLnNoaWZ0KCkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHRocm93aXQoZSkge1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHRmdW5jdGlvbiBub29wKCkge31cblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUpOyB9KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL3VuaGFuZGxlZFJlamVjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24oKSB7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIGFkZFdpdGgoUHJvbWlzZSkge1xuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgYSBwcm9taXNlIHdob3NlIGhhbmRsZXJzIHdpbGwgYmUgY2FsbGVkIHdpdGggYHRoaXNgIHNldCB0b1xuXHRcdCAqIHRoZSBzdXBwbGllZCByZWNlaXZlci4gIFN1YnNlcXVlbnQgcHJvbWlzZXMgZGVyaXZlZCBmcm9tIHRoZVxuXHRcdCAqIHJldHVybmVkIHByb21pc2Ugd2lsbCBhbHNvIGhhdmUgdGhlaXIgaGFuZGxlcnMgY2FsbGVkIHdpdGggcmVjZWl2ZXJcblx0XHQgKiBhcyBgdGhpc2AuIENhbGxpbmcgYHdpdGhgIHdpdGggdW5kZWZpbmVkIG9yIG5vIGFyZ3VtZW50cyB3aWxsIHJldHVyblxuXHRcdCAqIGEgcHJvbWlzZSB3aG9zZSBoYW5kbGVycyB3aWxsIGFnYWluIGJlIGNhbGxlZCBpbiB0aGUgdXN1YWwgUHJvbWlzZXMvQStcblx0XHQgKiB3YXkgKG5vIGB0aGlzYCkgdGh1cyBzYWZlbHkgdW5kb2luZyBhbnkgcHJldmlvdXMgYHdpdGhgIGluIHRoZVxuXHRcdCAqIHByb21pc2UgY2hhaW4uXG5cdFx0ICpcblx0XHQgKiBXQVJOSU5HOiBQcm9taXNlcyByZXR1cm5lZCBmcm9tIGB3aXRoYC9gd2l0aFRoaXNgIGFyZSBOT1QgUHJvbWlzZXMvQStcblx0XHQgKiBjb21wbGlhbnQsIHNwZWNpZmljYWxseSB2aW9sYXRpbmcgMi4yLjUgKGh0dHA6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNDEpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gcmVjZWl2ZXIgYHRoaXNgIHZhbHVlIGZvciBhbGwgaGFuZGxlcnMgYXR0YWNoZWQgdG9cblx0XHQgKiAgdGhlIHJldHVybmVkIHByb21pc2UuXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGVbJ3dpdGgnXSA9IFByb21pc2UucHJvdG90eXBlLndpdGhUaGlzID0gZnVuY3Rpb24ocmVjZWl2ZXIpIHtcblx0XHRcdHZhciBwID0gdGhpcy5fYmVnZXQoKTtcblx0XHRcdHZhciBjaGlsZCA9IHAuX2hhbmRsZXI7XG5cdFx0XHRjaGlsZC5yZWNlaXZlciA9IHJlY2VpdmVyO1xuXHRcdFx0dGhpcy5faGFuZGxlci5jaGFpbihjaGlsZCwgcmVjZWl2ZXIpO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblxuXHRcdHJldHVybiBQcm9taXNlO1xuXHR9O1xuXG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgfSkpO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL3dpdGguanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdHJldHVybiB7XG5cdFx0Zm9ybWF0RXJyb3I6IGZvcm1hdEVycm9yLFxuXHRcdGZvcm1hdE9iamVjdDogZm9ybWF0T2JqZWN0LFxuXHRcdHRyeVN0cmluZ2lmeTogdHJ5U3RyaW5naWZ5XG5cdH07XG5cblx0LyoqXG5cdCAqIEZvcm1hdCBhbiBlcnJvciBpbnRvIGEgc3RyaW5nLiAgSWYgZSBpcyBhbiBFcnJvciBhbmQgaGFzIGEgc3RhY2sgcHJvcGVydHksXG5cdCAqIGl0J3MgcmV0dXJuZWQuICBPdGhlcndpc2UsIGUgaXMgZm9ybWF0dGVkIHVzaW5nIGZvcm1hdE9iamVjdCwgd2l0aCBhXG5cdCAqIHdhcm5pbmcgYWRkZWQgYWJvdXQgZSBub3QgYmVpbmcgYSBwcm9wZXIgRXJyb3IuXG5cdCAqIEBwYXJhbSB7Kn0gZVxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBmb3JtYXR0ZWQgc3RyaW5nLCBzdWl0YWJsZSBmb3Igb3V0cHV0IHRvIGRldmVsb3BlcnNcblx0ICovXG5cdGZ1bmN0aW9uIGZvcm1hdEVycm9yKGUpIHtcblx0XHR2YXIgcyA9IHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiBlICE9PSBudWxsICYmIGUuc3RhY2sgPyBlLnN0YWNrIDogZm9ybWF0T2JqZWN0KGUpO1xuXHRcdHJldHVybiBlIGluc3RhbmNlb2YgRXJyb3IgPyBzIDogcyArICcgKFdBUk5JTkc6IG5vbi1FcnJvciB1c2VkKSc7XG5cdH1cblxuXHQvKipcblx0ICogRm9ybWF0IGFuIG9iamVjdCwgZGV0ZWN0aW5nIFwicGxhaW5cIiBvYmplY3RzIGFuZCBydW5uaW5nIHRoZW0gdGhyb3VnaFxuXHQgKiBKU09OLnN0cmluZ2lmeSBpZiBwb3NzaWJsZS5cblx0ICogQHBhcmFtIHtPYmplY3R9IG9cblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZ1bmN0aW9uIGZvcm1hdE9iamVjdChvKSB7XG5cdFx0dmFyIHMgPSBTdHJpbmcobyk7XG5cdFx0aWYocyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgdHlwZW9mIEpTT04gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRzID0gdHJ5U3RyaW5naWZ5KG8sIHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUcnkgdG8gcmV0dXJuIHRoZSByZXN1bHQgb2YgSlNPTi5zdHJpbmdpZnkoeCkuICBJZiB0aGF0IGZhaWxzLCByZXR1cm5cblx0ICogZGVmYXVsdFZhbHVlXG5cdCAqIEBwYXJhbSB7Kn0geFxuXHQgKiBAcGFyYW0geyp9IGRlZmF1bHRWYWx1ZVxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfCp9IEpTT04uc3RyaW5naWZ5KHgpIG9yIGRlZmF1bHRWYWx1ZVxuXHQgKi9cblx0ZnVuY3Rpb24gdHJ5U3RyaW5naWZ5KHgsIGRlZmF1bHRWYWx1ZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoeCk7XG5cdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xuXHRcdH1cblx0fVxuXG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgfSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd2hlbi9saWIvZm9ybWF0LmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbigpIHtcblxuXHRyZXR1cm4gZnVuY3Rpb24gbWFrZVByb21pc2UoZW52aXJvbm1lbnQpIHtcblxuXHRcdHZhciB0YXNrcyA9IGVudmlyb25tZW50LnNjaGVkdWxlcjtcblx0XHR2YXIgZW1pdFJlamVjdGlvbiA9IGluaXRFbWl0UmVqZWN0aW9uKCk7XG5cblx0XHR2YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fFxuXHRcdFx0ZnVuY3Rpb24ocHJvdG8pIHtcblx0XHRcdFx0ZnVuY3Rpb24gQ2hpbGQoKSB7fVxuXHRcdFx0XHRDaGlsZC5wcm90b3R5cGUgPSBwcm90bztcblx0XHRcdFx0cmV0dXJuIG5ldyBDaGlsZCgpO1xuXHRcdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZSBhIHByb21pc2Ugd2hvc2UgZmF0ZSBpcyBkZXRlcm1pbmVkIGJ5IHJlc29sdmVyXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IHByb21pc2Vcblx0XHQgKiBAbmFtZSBQcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlciwgaGFuZGxlcikge1xuXHRcdFx0dGhpcy5faGFuZGxlciA9IHJlc29sdmVyID09PSBIYW5kbGVyID8gaGFuZGxlciA6IGluaXQocmVzb2x2ZXIpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFJ1biB0aGUgc3VwcGxpZWQgcmVzb2x2ZXJcblx0XHQgKiBAcGFyYW0gcmVzb2x2ZXJcblx0XHQgKiBAcmV0dXJucyB7UGVuZGluZ31cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBpbml0KHJlc29sdmVyKSB7XG5cdFx0XHR2YXIgaGFuZGxlciA9IG5ldyBQZW5kaW5nKCk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc29sdmVyKHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0LCBwcm9taXNlTm90aWZ5KTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cHJvbWlzZVJlamVjdChlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGhhbmRsZXI7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVHJhbnNpdGlvbiBmcm9tIHByZS1yZXNvbHV0aW9uIHN0YXRlIHRvIHBvc3QtcmVzb2x1dGlvbiBzdGF0ZSwgbm90aWZ5aW5nXG5cdFx0XHQgKiBhbGwgbGlzdGVuZXJzIG9mIHRoZSB1bHRpbWF0ZSBmdWxmaWxsbWVudCBvciByZWplY3Rpb25cblx0XHRcdCAqIEBwYXJhbSB7Kn0geCByZXNvbHV0aW9uIHZhbHVlXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIHByb21pc2VSZXNvbHZlICh4KSB7XG5cdFx0XHRcdGhhbmRsZXIucmVzb2x2ZSh4KTtcblx0XHRcdH1cblx0XHRcdC8qKlxuXHRcdFx0ICogUmVqZWN0IHRoaXMgcHJvbWlzZSB3aXRoIHJlYXNvbiwgd2hpY2ggd2lsbCBiZSB1c2VkIHZlcmJhdGltXG5cdFx0XHQgKiBAcGFyYW0ge0Vycm9yfCp9IHJlYXNvbiByZWplY3Rpb24gcmVhc29uLCBzdHJvbmdseSBzdWdnZXN0ZWRcblx0XHRcdCAqICAgdG8gYmUgYW4gRXJyb3IgdHlwZVxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBwcm9taXNlUmVqZWN0IChyZWFzb24pIHtcblx0XHRcdFx0aGFuZGxlci5yZWplY3QocmVhc29uKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAZGVwcmVjYXRlZFxuXHRcdFx0ICogSXNzdWUgYSBwcm9ncmVzcyBldmVudCwgbm90aWZ5aW5nIGFsbCBwcm9ncmVzcyBsaXN0ZW5lcnNcblx0XHRcdCAqIEBwYXJhbSB7Kn0geCBwcm9ncmVzcyBldmVudCBwYXlsb2FkIHRvIHBhc3MgdG8gYWxsIGxpc3RlbmVyc1xuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBwcm9taXNlTm90aWZ5ICh4KSB7XG5cdFx0XHRcdGhhbmRsZXIubm90aWZ5KHgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENyZWF0aW9uXG5cblx0XHRQcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdFByb21pc2UucmVqZWN0ID0gcmVqZWN0O1xuXHRcdFByb21pc2UubmV2ZXIgPSBuZXZlcjtcblxuXHRcdFByb21pc2UuX2RlZmVyID0gZGVmZXI7XG5cdFx0UHJvbWlzZS5faGFuZGxlciA9IGdldEhhbmRsZXI7XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIGEgdHJ1c3RlZCBwcm9taXNlLiBJZiB4IGlzIGFscmVhZHkgYSB0cnVzdGVkIHByb21pc2UsIGl0IGlzXG5cdFx0ICogcmV0dXJuZWQsIG90aGVyd2lzZSByZXR1cm5zIGEgbmV3IHRydXN0ZWQgUHJvbWlzZSB3aGljaCBmb2xsb3dzIHguXG5cdFx0ICogQHBhcmFtICB7Kn0geFxuXHRcdCAqIEByZXR1cm4ge1Byb21pc2V9IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiByZXNvbHZlKHgpIHtcblx0XHRcdHJldHVybiBpc1Byb21pc2UoeCkgPyB4XG5cdFx0XHRcdDogbmV3IFByb21pc2UoSGFuZGxlciwgbmV3IEFzeW5jKGdldEhhbmRsZXIoeCkpKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm4gYSByZWplY3QgcHJvbWlzZSB3aXRoIHggYXMgaXRzIHJlYXNvbiAoeCBpcyB1c2VkIHZlcmJhdGltKVxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSByZWplY3RlZCBwcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gcmVqZWN0KHgpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShIYW5kbGVyLCBuZXcgQXN5bmMobmV3IFJlamVjdGVkKHgpKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlbWFpbnMgcGVuZGluZyBmb3JldmVyXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IGZvcmV2ZXItcGVuZGluZyBwcm9taXNlLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIG5ldmVyKCkge1xuXHRcdFx0cmV0dXJuIGZvcmV2ZXJQZW5kaW5nUHJvbWlzZTsgLy8gU2hvdWxkIGJlIGZyb3plblxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYW4gaW50ZXJuYWwge3Byb21pc2UsIHJlc29sdmVyfSBwYWlyXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBkZWZlcigpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShIYW5kbGVyLCBuZXcgUGVuZGluZygpKTtcblx0XHR9XG5cblx0XHQvLyBUcmFuc2Zvcm1hdGlvbiBhbmQgZmxvdyBjb250cm9sXG5cblx0XHQvKipcblx0XHQgKiBUcmFuc2Zvcm0gdGhpcyBwcm9taXNlJ3MgZnVsZmlsbG1lbnQgdmFsdWUsIHJldHVybmluZyBhIG5ldyBQcm9taXNlXG5cdFx0ICogZm9yIHRoZSB0cmFuc2Zvcm1lZCByZXN1bHQuICBJZiB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLCBvblJlamVjdGVkXG5cdFx0ICogaXMgY2FsbGVkIHdpdGggdGhlIHJlYXNvbi4gIG9uUHJvZ3Jlc3MgKm1heSogYmUgY2FsbGVkIHdpdGggdXBkYXRlcyB0b3dhcmRcblx0XHQgKiB0aGlzIHByb21pc2UncyBmdWxmaWxsbWVudC5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9uPX0gb25GdWxmaWxsZWQgZnVsZmlsbG1lbnQgaGFuZGxlclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb249fSBvblJlamVjdGVkIHJlamVjdGlvbiBoYW5kbGVyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbj19IG9uUHJvZ3Jlc3MgQGRlcHJlY2F0ZWQgcHJvZ3Jlc3MgaGFuZGxlclxuXHRcdCAqIEByZXR1cm4ge1Byb21pc2V9IG5ldyBwcm9taXNlXG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzKSB7XG5cdFx0XHR2YXIgcGFyZW50ID0gdGhpcy5faGFuZGxlcjtcblx0XHRcdHZhciBzdGF0ZSA9IHBhcmVudC5qb2luKCkuc3RhdGUoKTtcblxuXHRcdFx0aWYgKCh0eXBlb2Ygb25GdWxmaWxsZWQgIT09ICdmdW5jdGlvbicgJiYgc3RhdGUgPiAwKSB8fFxuXHRcdFx0XHQodHlwZW9mIG9uUmVqZWN0ZWQgIT09ICdmdW5jdGlvbicgJiYgc3RhdGUgPCAwKSkge1xuXHRcdFx0XHQvLyBTaG9ydCBjaXJjdWl0OiB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UsIHNpbXBseSBzaGFyZSBoYW5kbGVyXG5cdFx0XHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihIYW5kbGVyLCBwYXJlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcCA9IHRoaXMuX2JlZ2V0KCk7XG5cdFx0XHR2YXIgY2hpbGQgPSBwLl9oYW5kbGVyO1xuXG5cdFx0XHRwYXJlbnQuY2hhaW4oY2hpbGQsIHBhcmVudC5yZWNlaXZlciwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MpO1xuXG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogSWYgdGhpcyBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQgZHVlIHRvIGFuIGVycm9yLCBjYWxsIG9uUmVqZWN0ZWQgdG9cblx0XHQgKiBoYW5kbGUgdGhlIGVycm9yLiBTaG9ydGN1dCBmb3IgLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb24/fSBvblJlamVjdGVkXG5cdFx0ICogQHJldHVybiB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnRoZW4odm9pZCAwLCBvblJlamVjdGVkKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIG5ldywgcGVuZGluZyBwcm9taXNlIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBwcm9taXNlXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZS5fYmVnZXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBiZWdldEZyb20odGhpcy5faGFuZGxlciwgdGhpcy5jb25zdHJ1Y3Rvcik7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGJlZ2V0RnJvbShwYXJlbnQsIFByb21pc2UpIHtcblx0XHRcdHZhciBjaGlsZCA9IG5ldyBQZW5kaW5nKHBhcmVudC5yZWNlaXZlciwgcGFyZW50LmpvaW4oKS5jb250ZXh0KTtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShIYW5kbGVyLCBjaGlsZCk7XG5cdFx0fVxuXG5cdFx0Ly8gQXJyYXkgY29tYmluYXRvcnNcblxuXHRcdFByb21pc2UuYWxsID0gYWxsO1xuXHRcdFByb21pc2UucmFjZSA9IHJhY2U7XG5cdFx0UHJvbWlzZS5fdHJhdmVyc2UgPSB0cmF2ZXJzZTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGZ1bGZpbGwgd2hlbiBhbGwgcHJvbWlzZXMgaW4gdGhlXG5cdFx0ICogaW5wdXQgYXJyYXkgaGF2ZSBmdWxmaWxsZWQsIG9yIHdpbGwgcmVqZWN0IHdoZW4gb25lIG9mIHRoZVxuXHRcdCAqIHByb21pc2VzIHJlamVjdHMuXG5cdFx0ICogQHBhcmFtIHthcnJheX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXNcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSBmb3IgYXJyYXkgb2YgZnVsZmlsbG1lbnQgdmFsdWVzXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG5cdFx0XHRyZXR1cm4gdHJhdmVyc2VXaXRoKHNuZCwgbnVsbCwgcHJvbWlzZXMpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEFycmF5PFByb21pc2U8WD4+IC0+IFByb21pc2U8QXJyYXk8ZihYKT4+XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggcHJvbWlzZSdzIHZhbHVlXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXNcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSBmb3IgdHJhbnNmb3JtZWQgdmFsdWVzXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gdHJhdmVyc2UoZiwgcHJvbWlzZXMpIHtcblx0XHRcdHJldHVybiB0cmF2ZXJzZVdpdGgodHJ5Q2F0Y2gyLCBmLCBwcm9taXNlcyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJhdmVyc2VXaXRoKHRyeU1hcCwgZiwgcHJvbWlzZXMpIHtcblx0XHRcdHZhciBoYW5kbGVyID0gdHlwZW9mIGYgPT09ICdmdW5jdGlvbicgPyBtYXBBdCA6IHNldHRsZUF0O1xuXG5cdFx0XHR2YXIgcmVzb2x2ZXIgPSBuZXcgUGVuZGluZygpO1xuXHRcdFx0dmFyIHBlbmRpbmcgPSBwcm9taXNlcy5sZW5ndGggPj4+IDA7XG5cdFx0XHR2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShwZW5kaW5nKTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIHg7IGkgPCBwcm9taXNlcy5sZW5ndGggJiYgIXJlc29sdmVyLnJlc29sdmVkOyArK2kpIHtcblx0XHRcdFx0eCA9IHByb21pc2VzW2ldO1xuXG5cdFx0XHRcdGlmICh4ID09PSB2b2lkIDAgJiYgIShpIGluIHByb21pc2VzKSkge1xuXHRcdFx0XHRcdC0tcGVuZGluZztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyYXZlcnNlQXQocHJvbWlzZXMsIGhhbmRsZXIsIGksIHgsIHJlc29sdmVyKTtcblx0XHRcdH1cblxuXHRcdFx0aWYocGVuZGluZyA9PT0gMCkge1xuXHRcdFx0XHRyZXNvbHZlci5iZWNvbWUobmV3IEZ1bGZpbGxlZChyZXN1bHRzKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShIYW5kbGVyLCByZXNvbHZlcik7XG5cblx0XHRcdGZ1bmN0aW9uIG1hcEF0KGksIHgsIHJlc29sdmVyKSB7XG5cdFx0XHRcdGlmKCFyZXNvbHZlci5yZXNvbHZlZCkge1xuXHRcdFx0XHRcdHRyYXZlcnNlQXQocHJvbWlzZXMsIHNldHRsZUF0LCBpLCB0cnlNYXAoZiwgeCwgaSksIHJlc29sdmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBzZXR0bGVBdChpLCB4LCByZXNvbHZlcikge1xuXHRcdFx0XHRyZXN1bHRzW2ldID0geDtcblx0XHRcdFx0aWYoLS1wZW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZXIuYmVjb21lKG5ldyBGdWxmaWxsZWQocmVzdWx0cykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJhdmVyc2VBdChwcm9taXNlcywgaGFuZGxlciwgaSwgeCwgcmVzb2x2ZXIpIHtcblx0XHRcdGlmIChtYXliZVRoZW5hYmxlKHgpKSB7XG5cdFx0XHRcdHZhciBoID0gZ2V0SGFuZGxlck1heWJlVGhlbmFibGUoeCk7XG5cdFx0XHRcdHZhciBzID0gaC5zdGF0ZSgpO1xuXG5cdFx0XHRcdGlmIChzID09PSAwKSB7XG5cdFx0XHRcdFx0aC5mb2xkKGhhbmRsZXIsIGksIHZvaWQgMCwgcmVzb2x2ZXIpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHMgPiAwKSB7XG5cdFx0XHRcdFx0aGFuZGxlcihpLCBoLnZhbHVlLCByZXNvbHZlcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZXIuYmVjb21lKGgpO1xuXHRcdFx0XHRcdHZpc2l0UmVtYWluaW5nKHByb21pc2VzLCBpKzEsIGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVyKGksIHgsIHJlc29sdmVyKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRQcm9taXNlLl92aXNpdFJlbWFpbmluZyA9IHZpc2l0UmVtYWluaW5nO1xuXHRcdGZ1bmN0aW9uIHZpc2l0UmVtYWluaW5nKHByb21pc2VzLCBzdGFydCwgaGFuZGxlcikge1xuXHRcdFx0Zm9yKHZhciBpPXN0YXJ0OyBpPHByb21pc2VzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdG1hcmtBc0hhbmRsZWQoZ2V0SGFuZGxlcihwcm9taXNlc1tpXSksIGhhbmRsZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG1hcmtBc0hhbmRsZWQoaCwgaGFuZGxlcikge1xuXHRcdFx0aWYoaCA9PT0gaGFuZGxlcikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzID0gaC5zdGF0ZSgpO1xuXHRcdFx0aWYocyA9PT0gMCkge1xuXHRcdFx0XHRoLnZpc2l0KGgsIHZvaWQgMCwgaC5fdW5yZXBvcnQpO1xuXHRcdFx0fSBlbHNlIGlmKHMgPCAwKSB7XG5cdFx0XHRcdGguX3VucmVwb3J0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogRnVsZmlsbC1yZWplY3QgY29tcGV0aXRpdmUgcmFjZS4gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgc2V0dGxlXG5cdFx0ICogdG8gdGhlIHNhbWUgc3RhdGUgYXMgdGhlIGVhcmxpZXN0IGlucHV0IHByb21pc2UgdG8gc2V0dGxlLlxuXHRcdCAqXG5cdFx0ICogV0FSTklORzogVGhlIEVTNiBQcm9taXNlIHNwZWMgcmVxdWlyZXMgdGhhdCByYWNlKClpbmcgYW4gZW1wdHkgYXJyYXlcblx0XHQgKiBtdXN0IHJldHVybiBhIHByb21pc2UgdGhhdCBpcyBwZW5kaW5nIGZvcmV2ZXIuICBUaGlzIGltcGxlbWVudGF0aW9uXG5cdFx0ICogcmV0dXJucyBhIHNpbmdsZXRvbiBmb3JldmVyLXBlbmRpbmcgcHJvbWlzZSwgdGhlIHNhbWUgc2luZ2xldG9uIHRoYXQgaXNcblx0XHQgKiByZXR1cm5lZCBieSBQcm9taXNlLm5ldmVyKCksIHRodXMgY2FuIGJlIGNoZWNrZWQgd2l0aCA9PT1cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IHByb21pc2VzIGFycmF5IG9mIHByb21pc2VzIHRvIHJhY2Vcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gaWYgaW5wdXQgaXMgbm9uLWVtcHR5LCBhIHByb21pc2UgdGhhdCB3aWxsIHNldHRsZVxuXHRcdCAqIHRvIHRoZSBzYW1lIG91dGNvbWUgYXMgdGhlIGVhcmxpZXN0IGlucHV0IHByb21pc2UgdG8gc2V0dGxlLiBpZiBlbXB0eVxuXHRcdCAqIGlzIGVtcHR5LCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgbmV2ZXIgc2V0dGxlLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHJhY2UocHJvbWlzZXMpIHtcblx0XHRcdGlmKHR5cGVvZiBwcm9taXNlcyAhPT0gJ29iamVjdCcgfHwgcHJvbWlzZXMgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdub24taXRlcmFibGUgcGFzc2VkIHRvIHJhY2UoKScpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2lnaCwgcmFjZShbXSkgaXMgdW50ZXN0YWJsZSB1bmxlc3Mgd2UgcmV0dXJuICpzb21ldGhpbmcqXG5cdFx0XHQvLyB0aGF0IGlzIHJlY29nbml6YWJsZSB3aXRob3V0IGNhbGxpbmcgLnRoZW4oKSBvbiBpdC5cblx0XHRcdHJldHVybiBwcm9taXNlcy5sZW5ndGggPT09IDAgPyBuZXZlcigpXG5cdFx0XHRcdCA6IHByb21pc2VzLmxlbmd0aCA9PT0gMSA/IHJlc29sdmUocHJvbWlzZXNbMF0pXG5cdFx0XHRcdCA6IHJ1blJhY2UocHJvbWlzZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJ1blJhY2UocHJvbWlzZXMpIHtcblx0XHRcdHZhciByZXNvbHZlciA9IG5ldyBQZW5kaW5nKCk7XG5cdFx0XHR2YXIgaSwgeCwgaDtcblx0XHRcdGZvcihpPTA7IGk8cHJvbWlzZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0eCA9IHByb21pc2VzW2ldO1xuXHRcdFx0XHRpZiAoeCA9PT0gdm9pZCAwICYmICEoaSBpbiBwcm9taXNlcykpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGggPSBnZXRIYW5kbGVyKHgpO1xuXHRcdFx0XHRpZihoLnN0YXRlKCkgIT09IDApIHtcblx0XHRcdFx0XHRyZXNvbHZlci5iZWNvbWUoaCk7XG5cdFx0XHRcdFx0dmlzaXRSZW1haW5pbmcocHJvbWlzZXMsIGkrMSwgaCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aC52aXNpdChyZXNvbHZlciwgcmVzb2x2ZXIucmVzb2x2ZSwgcmVzb2x2ZXIucmVqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKEhhbmRsZXIsIHJlc29sdmVyKTtcblx0XHR9XG5cblx0XHQvLyBQcm9taXNlIGludGVybmFsc1xuXHRcdC8vIEJlbG93IHRoaXMsIGV2ZXJ5dGhpbmcgaXMgQHByaXZhdGVcblxuXHRcdC8qKlxuXHRcdCAqIEdldCBhbiBhcHByb3ByaWF0ZSBoYW5kbGVyIGZvciB4LCB3aXRob3V0IGNoZWNraW5nIGZvciBjeWNsZXNcblx0XHQgKiBAcGFyYW0geyp9IHhcblx0XHQgKiBAcmV0dXJucyB7b2JqZWN0fSBoYW5kbGVyXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0SGFuZGxlcih4KSB7XG5cdFx0XHRpZihpc1Byb21pc2UoeCkpIHtcblx0XHRcdFx0cmV0dXJuIHguX2hhbmRsZXIuam9pbigpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1heWJlVGhlbmFibGUoeCkgPyBnZXRIYW5kbGVyVW50cnVzdGVkKHgpIDogbmV3IEZ1bGZpbGxlZCh4KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBHZXQgYSBoYW5kbGVyIGZvciB0aGVuYWJsZSB4LlxuXHRcdCAqIE5PVEU6IFlvdSBtdXN0IG9ubHkgY2FsbCB0aGlzIGlmIG1heWJlVGhlbmFibGUoeCkgPT0gdHJ1ZVxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufFByb21pc2V9IHhcblx0XHQgKiBAcmV0dXJucyB7b2JqZWN0fSBoYW5kbGVyXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0SGFuZGxlck1heWJlVGhlbmFibGUoeCkge1xuXHRcdFx0cmV0dXJuIGlzUHJvbWlzZSh4KSA/IHguX2hhbmRsZXIuam9pbigpIDogZ2V0SGFuZGxlclVudHJ1c3RlZCh4KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBHZXQgYSBoYW5kbGVyIGZvciBwb3RlbnRpYWxseSB1bnRydXN0ZWQgdGhlbmFibGUgeFxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9IGhhbmRsZXJcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBnZXRIYW5kbGVyVW50cnVzdGVkKHgpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciB1bnRydXN0ZWRUaGVuID0geC50aGVuO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHVudHJ1c3RlZFRoZW4gPT09ICdmdW5jdGlvbidcblx0XHRcdFx0XHQ/IG5ldyBUaGVuYWJsZSh1bnRydXN0ZWRUaGVuLCB4KVxuXHRcdFx0XHRcdDogbmV3IEZ1bGZpbGxlZCh4KTtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJlamVjdGVkKGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXIgZm9yIGEgcHJvbWlzZSB0aGF0IGlzIHBlbmRpbmcgZm9yZXZlclxuXHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIEhhbmRsZXIoKSB7fVxuXG5cdFx0SGFuZGxlci5wcm90b3R5cGUud2hlblxuXHRcdFx0PSBIYW5kbGVyLnByb3RvdHlwZS5iZWNvbWVcblx0XHRcdD0gSGFuZGxlci5wcm90b3R5cGUubm90aWZ5IC8vIGRlcHJlY2F0ZWRcblx0XHRcdD0gSGFuZGxlci5wcm90b3R5cGUuZmFpbFxuXHRcdFx0PSBIYW5kbGVyLnByb3RvdHlwZS5fdW5yZXBvcnRcblx0XHRcdD0gSGFuZGxlci5wcm90b3R5cGUuX3JlcG9ydFxuXHRcdFx0PSBub29wO1xuXG5cdFx0SGFuZGxlci5wcm90b3R5cGUuX3N0YXRlID0gMDtcblxuXHRcdEhhbmRsZXIucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fc3RhdGU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlY3Vyc2l2ZWx5IGNvbGxhcHNlIGhhbmRsZXIgY2hhaW4gdG8gZmluZCB0aGUgaGFuZGxlclxuXHRcdCAqIG5lYXJlc3QgdG8gdGhlIGZ1bGx5IHJlc29sdmVkIHZhbHVlLlxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9IGhhbmRsZXIgbmVhcmVzdCB0aGUgZnVsbHkgcmVzb2x2ZWQgdmFsdWVcblx0XHQgKi9cblx0XHRIYW5kbGVyLnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaCA9IHRoaXM7XG5cdFx0XHR3aGlsZShoLmhhbmRsZXIgIT09IHZvaWQgMCkge1xuXHRcdFx0XHRoID0gaC5oYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGg7XG5cdFx0fTtcblxuXHRcdEhhbmRsZXIucHJvdG90eXBlLmNoYWluID0gZnVuY3Rpb24odG8sIHJlY2VpdmVyLCBmdWxmaWxsZWQsIHJlamVjdGVkLCBwcm9ncmVzcykge1xuXHRcdFx0dGhpcy53aGVuKHtcblx0XHRcdFx0cmVzb2x2ZXI6IHRvLFxuXHRcdFx0XHRyZWNlaXZlcjogcmVjZWl2ZXIsXG5cdFx0XHRcdGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuXHRcdFx0XHRyZWplY3RlZDogcmVqZWN0ZWQsXG5cdFx0XHRcdHByb2dyZXNzOiBwcm9ncmVzc1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdEhhbmRsZXIucHJvdG90eXBlLnZpc2l0ID0gZnVuY3Rpb24ocmVjZWl2ZXIsIGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzKSB7XG5cdFx0XHR0aGlzLmNoYWluKGZhaWxJZlJlamVjdGVkLCByZWNlaXZlciwgZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3MpO1xuXHRcdH07XG5cblx0XHRIYW5kbGVyLnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24oZiwgeiwgYywgdG8pIHtcblx0XHRcdHRoaXMud2hlbihuZXcgRm9sZChmLCB6LCBjLCB0bykpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVyIHRoYXQgaW52b2tlcyBmYWlsKCkgb24gYW55IGhhbmRsZXIgaXQgYmVjb21lc1xuXHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIEZhaWxJZlJlamVjdGVkKCkge31cblxuXHRcdGluaGVyaXQoSGFuZGxlciwgRmFpbElmUmVqZWN0ZWQpO1xuXG5cdFx0RmFpbElmUmVqZWN0ZWQucHJvdG90eXBlLmJlY29tZSA9IGZ1bmN0aW9uKGgpIHtcblx0XHRcdGguZmFpbCgpO1xuXHRcdH07XG5cblx0XHR2YXIgZmFpbElmUmVqZWN0ZWQgPSBuZXcgRmFpbElmUmVqZWN0ZWQoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXIgdGhhdCBtYW5hZ2VzIGEgcXVldWUgb2YgY29uc3VtZXJzIHdhaXRpbmcgb24gYSBwZW5kaW5nIHByb21pc2Vcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBQZW5kaW5nKHJlY2VpdmVyLCBpbmhlcml0ZWRDb250ZXh0KSB7XG5cdFx0XHRQcm9taXNlLmNyZWF0ZUNvbnRleHQodGhpcywgaW5oZXJpdGVkQ29udGV4dCk7XG5cblx0XHRcdHRoaXMuY29uc3VtZXJzID0gdm9pZCAwO1xuXHRcdFx0dGhpcy5yZWNlaXZlciA9IHJlY2VpdmVyO1xuXHRcdFx0dGhpcy5oYW5kbGVyID0gdm9pZCAwO1xuXHRcdFx0dGhpcy5yZXNvbHZlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGluaGVyaXQoSGFuZGxlciwgUGVuZGluZyk7XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5fc3RhdGUgPSAwO1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uKHgpIHtcblx0XHRcdHRoaXMuYmVjb21lKGdldEhhbmRsZXIoeCkpO1xuXHRcdH07XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbih4KSB7XG5cdFx0XHRpZih0aGlzLnJlc29sdmVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5iZWNvbWUobmV3IFJlamVjdGVkKHgpKTtcblx0XHR9O1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCF0aGlzLnJlc29sdmVkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaCA9IHRoaXM7XG5cblx0XHRcdHdoaWxlIChoLmhhbmRsZXIgIT09IHZvaWQgMCkge1xuXHRcdFx0XHRoID0gaC5oYW5kbGVyO1xuXHRcdFx0XHRpZiAoaCA9PT0gdGhpcykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmhhbmRsZXIgPSBjeWNsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBoO1xuXHRcdH07XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBxID0gdGhpcy5jb25zdW1lcnM7XG5cdFx0XHR2YXIgaGFuZGxlciA9IHRoaXMuaGFuZGxlcjtcblx0XHRcdHRoaXMuaGFuZGxlciA9IHRoaXMuaGFuZGxlci5qb2luKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWVycyA9IHZvaWQgMDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBxLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGhhbmRsZXIud2hlbihxW2ldKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUuYmVjb21lID0gZnVuY3Rpb24oaGFuZGxlcikge1xuXHRcdFx0aWYodGhpcy5yZXNvbHZlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucmVzb2x2ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcblx0XHRcdGlmKHRoaXMuY29uc3VtZXJzICE9PSB2b2lkIDApIHtcblx0XHRcdFx0dGFza3MuZW5xdWV1ZSh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5jb250ZXh0ICE9PSB2b2lkIDApIHtcblx0XHRcdFx0aGFuZGxlci5fcmVwb3J0KHRoaXMuY29udGV4dCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdFBlbmRpbmcucHJvdG90eXBlLndoZW4gPSBmdW5jdGlvbihjb250aW51YXRpb24pIHtcblx0XHRcdGlmKHRoaXMucmVzb2x2ZWQpIHtcblx0XHRcdFx0dGFza3MuZW5xdWV1ZShuZXcgQ29udGludWF0aW9uVGFzayhjb250aW51YXRpb24sIHRoaXMuaGFuZGxlcikpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodGhpcy5jb25zdW1lcnMgPT09IHZvaWQgMCkge1xuXHRcdFx0XHRcdHRoaXMuY29uc3VtZXJzID0gW2NvbnRpbnVhdGlvbl07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jb25zdW1lcnMucHVzaChjb250aW51YXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEBkZXByZWNhdGVkXG5cdFx0ICovXG5cdFx0UGVuZGluZy5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24oeCkge1xuXHRcdFx0aWYoIXRoaXMucmVzb2x2ZWQpIHtcblx0XHRcdFx0dGFza3MuZW5xdWV1ZShuZXcgUHJvZ3Jlc3NUYXNrKHgsIHRoaXMpKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0XHRcdHZhciBjID0gdHlwZW9mIGNvbnRleHQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5jb250ZXh0IDogY29udGV4dDtcblx0XHRcdHRoaXMucmVzb2x2ZWQgJiYgdGhpcy5oYW5kbGVyLmpvaW4oKS5mYWlsKGMpO1xuXHRcdH07XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5fcmVwb3J0ID0gZnVuY3Rpb24oY29udGV4dCkge1xuXHRcdFx0dGhpcy5yZXNvbHZlZCAmJiB0aGlzLmhhbmRsZXIuam9pbigpLl9yZXBvcnQoY29udGV4dCk7XG5cdFx0fTtcblxuXHRcdFBlbmRpbmcucHJvdG90eXBlLl91bnJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5yZXNvbHZlZCAmJiB0aGlzLmhhbmRsZXIuam9pbigpLl91bnJlcG9ydCgpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBXcmFwIGFub3RoZXIgaGFuZGxlciBhbmQgZm9yY2UgaXQgaW50byBhIGZ1dHVyZSBzdGFja1xuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBoYW5kbGVyXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gQXN5bmMoaGFuZGxlcikge1xuXHRcdFx0dGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcblx0XHR9XG5cblx0XHRpbmhlcml0KEhhbmRsZXIsIEFzeW5jKTtcblxuXHRcdEFzeW5jLnByb3RvdHlwZS53aGVuID0gZnVuY3Rpb24oY29udGludWF0aW9uKSB7XG5cdFx0XHR0YXNrcy5lbnF1ZXVlKG5ldyBDb250aW51YXRpb25UYXNrKGNvbnRpbnVhdGlvbiwgdGhpcykpO1xuXHRcdH07XG5cblx0XHRBc3luYy5wcm90b3R5cGUuX3JlcG9ydCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0XHRcdHRoaXMuam9pbigpLl9yZXBvcnQoY29udGV4dCk7XG5cdFx0fTtcblxuXHRcdEFzeW5jLnByb3RvdHlwZS5fdW5yZXBvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuam9pbigpLl91bnJlcG9ydCgpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVyIHRoYXQgd3JhcHMgYW4gdW50cnVzdGVkIHRoZW5hYmxlIGFuZCBhc3NpbWlsYXRlcyBpdCBpbiBhIGZ1dHVyZSBzdGFja1xuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZW5cblx0XHQgKiBAcGFyYW0ge3t0aGVuOiBmdW5jdGlvbn19IHRoZW5hYmxlXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gVGhlbmFibGUodGhlbiwgdGhlbmFibGUpIHtcblx0XHRcdFBlbmRpbmcuY2FsbCh0aGlzKTtcblx0XHRcdHRhc2tzLmVucXVldWUobmV3IEFzc2ltaWxhdGVUYXNrKHRoZW4sIHRoZW5hYmxlLCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aW5oZXJpdChQZW5kaW5nLCBUaGVuYWJsZSk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVyIGZvciBhIGZ1bGZpbGxlZCBwcm9taXNlXG5cdFx0ICogQHBhcmFtIHsqfSB4IGZ1bGZpbGxtZW50IHZhbHVlXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gRnVsZmlsbGVkKHgpIHtcblx0XHRcdFByb21pc2UuY3JlYXRlQ29udGV4dCh0aGlzKTtcblx0XHRcdHRoaXMudmFsdWUgPSB4O1xuXHRcdH1cblxuXHRcdGluaGVyaXQoSGFuZGxlciwgRnVsZmlsbGVkKTtcblxuXHRcdEZ1bGZpbGxlZC5wcm90b3R5cGUuX3N0YXRlID0gMTtcblxuXHRcdEZ1bGZpbGxlZC5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uKGYsIHosIGMsIHRvKSB7XG5cdFx0XHRydW5Db250aW51YXRpb24zKGYsIHosIHRoaXMsIGMsIHRvKTtcblx0XHR9O1xuXG5cdFx0RnVsZmlsbGVkLnByb3RvdHlwZS53aGVuID0gZnVuY3Rpb24oY29udCkge1xuXHRcdFx0cnVuQ29udGludWF0aW9uMShjb250LmZ1bGZpbGxlZCwgdGhpcywgY29udC5yZWNlaXZlciwgY29udC5yZXNvbHZlcik7XG5cdFx0fTtcblxuXHRcdHZhciBlcnJvcklkID0gMDtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXIgZm9yIGEgcmVqZWN0ZWQgcHJvbWlzZVxuXHRcdCAqIEBwYXJhbSB7Kn0geCByZWplY3Rpb24gcmVhc29uXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gUmVqZWN0ZWQoeCkge1xuXHRcdFx0UHJvbWlzZS5jcmVhdGVDb250ZXh0KHRoaXMpO1xuXG5cdFx0XHR0aGlzLmlkID0gKytlcnJvcklkO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHg7XG5cdFx0XHR0aGlzLmhhbmRsZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMucmVwb3J0ZWQgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5fcmVwb3J0KCk7XG5cdFx0fVxuXG5cdFx0aW5oZXJpdChIYW5kbGVyLCBSZWplY3RlZCk7XG5cblx0XHRSZWplY3RlZC5wcm90b3R5cGUuX3N0YXRlID0gLTE7XG5cblx0XHRSZWplY3RlZC5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uKGYsIHosIGMsIHRvKSB7XG5cdFx0XHR0by5iZWNvbWUodGhpcyk7XG5cdFx0fTtcblxuXHRcdFJlamVjdGVkLnByb3RvdHlwZS53aGVuID0gZnVuY3Rpb24oY29udCkge1xuXHRcdFx0aWYodHlwZW9mIGNvbnQucmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5fdW5yZXBvcnQoKTtcblx0XHRcdH1cblx0XHRcdHJ1bkNvbnRpbnVhdGlvbjEoY29udC5yZWplY3RlZCwgdGhpcywgY29udC5yZWNlaXZlciwgY29udC5yZXNvbHZlcik7XG5cdFx0fTtcblxuXHRcdFJlamVjdGVkLnByb3RvdHlwZS5fcmVwb3J0ID0gZnVuY3Rpb24oY29udGV4dCkge1xuXHRcdFx0dGFza3MuYWZ0ZXJRdWV1ZShuZXcgUmVwb3J0VGFzayh0aGlzLCBjb250ZXh0KSk7XG5cdFx0fTtcblxuXHRcdFJlamVjdGVkLnByb3RvdHlwZS5fdW5yZXBvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRoaXMuaGFuZGxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhhbmRsZWQgPSB0cnVlO1xuXHRcdFx0dGFza3MuYWZ0ZXJRdWV1ZShuZXcgVW5yZXBvcnRUYXNrKHRoaXMpKTtcblx0XHR9O1xuXG5cdFx0UmVqZWN0ZWQucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbihjb250ZXh0KSB7XG5cdFx0XHR0aGlzLnJlcG9ydGVkID0gdHJ1ZTtcblx0XHRcdGVtaXRSZWplY3Rpb24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIHRoaXMpO1xuXHRcdFx0UHJvbWlzZS5vbkZhdGFsUmVqZWN0aW9uKHRoaXMsIGNvbnRleHQgPT09IHZvaWQgMCA/IHRoaXMuY29udGV4dCA6IGNvbnRleHQpO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBSZXBvcnRUYXNrKHJlamVjdGlvbiwgY29udGV4dCkge1xuXHRcdFx0dGhpcy5yZWplY3Rpb24gPSByZWplY3Rpb247XG5cdFx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdH1cblxuXHRcdFJlcG9ydFRhc2sucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIXRoaXMucmVqZWN0aW9uLmhhbmRsZWQgJiYgIXRoaXMucmVqZWN0aW9uLnJlcG9ydGVkKSB7XG5cdFx0XHRcdHRoaXMucmVqZWN0aW9uLnJlcG9ydGVkID0gdHJ1ZTtcblx0XHRcdFx0ZW1pdFJlamVjdGlvbigndW5oYW5kbGVkUmVqZWN0aW9uJywgdGhpcy5yZWplY3Rpb24pIHx8XG5cdFx0XHRcdFx0UHJvbWlzZS5vblBvdGVudGlhbGx5VW5oYW5kbGVkUmVqZWN0aW9uKHRoaXMucmVqZWN0aW9uLCB0aGlzLmNvbnRleHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBVbnJlcG9ydFRhc2socmVqZWN0aW9uKSB7XG5cdFx0XHR0aGlzLnJlamVjdGlvbiA9IHJlamVjdGlvbjtcblx0XHR9XG5cblx0XHRVbnJlcG9ydFRhc2sucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGhpcy5yZWplY3Rpb24ucmVwb3J0ZWQpIHtcblx0XHRcdFx0ZW1pdFJlamVjdGlvbigncmVqZWN0aW9uSGFuZGxlZCcsIHRoaXMucmVqZWN0aW9uKSB8fFxuXHRcdFx0XHRcdFByb21pc2Uub25Qb3RlbnRpYWxseVVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQodGhpcy5yZWplY3Rpb24pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBVbmhhbmRsZWQgcmVqZWN0aW9uIGhvb2tzXG5cdFx0Ly8gQnkgZGVmYXVsdCwgZXZlcnl0aGluZyBpcyBhIG5vb3BcblxuXHRcdFByb21pc2UuY3JlYXRlQ29udGV4dFxuXHRcdFx0PSBQcm9taXNlLmVudGVyQ29udGV4dFxuXHRcdFx0PSBQcm9taXNlLmV4aXRDb250ZXh0XG5cdFx0XHQ9IFByb21pc2Uub25Qb3RlbnRpYWxseVVuaGFuZGxlZFJlamVjdGlvblxuXHRcdFx0PSBQcm9taXNlLm9uUG90ZW50aWFsbHlVbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkXG5cdFx0XHQ9IFByb21pc2Uub25GYXRhbFJlamVjdGlvblxuXHRcdFx0PSBub29wO1xuXG5cdFx0Ly8gRXJyb3JzIGFuZCBzaW5nbGV0b25zXG5cblx0XHR2YXIgZm9yZXZlclBlbmRpbmdIYW5kbGVyID0gbmV3IEhhbmRsZXIoKTtcblx0XHR2YXIgZm9yZXZlclBlbmRpbmdQcm9taXNlID0gbmV3IFByb21pc2UoSGFuZGxlciwgZm9yZXZlclBlbmRpbmdIYW5kbGVyKTtcblxuXHRcdGZ1bmN0aW9uIGN5Y2xlKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWplY3RlZChuZXcgVHlwZUVycm9yKCdQcm9taXNlIGN5Y2xlJykpO1xuXHRcdH1cblxuXHRcdC8vIFRhc2sgcnVubmVyc1xuXG5cdFx0LyoqXG5cdFx0ICogUnVuIGEgc2luZ2xlIGNvbnN1bWVyXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gQ29udGludWF0aW9uVGFzayhjb250aW51YXRpb24sIGhhbmRsZXIpIHtcblx0XHRcdHRoaXMuY29udGludWF0aW9uID0gY29udGludWF0aW9uO1xuXHRcdFx0dGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcblx0XHR9XG5cblx0XHRDb250aW51YXRpb25UYXNrLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuaGFuZGxlci5qb2luKCkud2hlbih0aGlzLmNvbnRpbnVhdGlvbik7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJ1biBhIHF1ZXVlIG9mIHByb2dyZXNzIGhhbmRsZXJzXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gUHJvZ3Jlc3NUYXNrKHZhbHVlLCBoYW5kbGVyKSB7XG5cdFx0XHR0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdFByb2dyZXNzVGFzay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcSA9IHRoaXMuaGFuZGxlci5jb25zdW1lcnM7XG5cdFx0XHRpZihxID09PSB2b2lkIDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBjLCBpID0gMDsgaSA8IHEubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0YyA9IHFbaV07XG5cdFx0XHRcdHJ1bk5vdGlmeShjLnByb2dyZXNzLCB0aGlzLnZhbHVlLCB0aGlzLmhhbmRsZXIsIGMucmVjZWl2ZXIsIGMucmVzb2x2ZXIpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBc3NpbWlsYXRlIGEgdGhlbmFibGUsIHNlbmRpbmcgaXQncyB2YWx1ZSB0byByZXNvbHZlclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZW5cblx0XHQgKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gdGhlbmFibGVcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gcmVzb2x2ZXJcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBBc3NpbWlsYXRlVGFzayh0aGVuLCB0aGVuYWJsZSwgcmVzb2x2ZXIpIHtcblx0XHRcdHRoaXMuX3RoZW4gPSB0aGVuO1xuXHRcdFx0dGhpcy50aGVuYWJsZSA9IHRoZW5hYmxlO1xuXHRcdFx0dGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHRcdH1cblxuXHRcdEFzc2ltaWxhdGVUYXNrLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoID0gdGhpcy5yZXNvbHZlcjtcblx0XHRcdHRyeUFzc2ltaWxhdGUodGhpcy5fdGhlbiwgdGhpcy50aGVuYWJsZSwgX3Jlc29sdmUsIF9yZWplY3QsIF9ub3RpZnkpO1xuXG5cdFx0XHRmdW5jdGlvbiBfcmVzb2x2ZSh4KSB7IGgucmVzb2x2ZSh4KTsgfVxuXHRcdFx0ZnVuY3Rpb24gX3JlamVjdCh4KSAgeyBoLnJlamVjdCh4KTsgfVxuXHRcdFx0ZnVuY3Rpb24gX25vdGlmeSh4KSAgeyBoLm5vdGlmeSh4KTsgfVxuXHRcdH07XG5cblx0XHRmdW5jdGlvbiB0cnlBc3NpbWlsYXRlKHRoZW4sIHRoZW5hYmxlLCByZXNvbHZlLCByZWplY3QsIG5vdGlmeSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhlbi5jYWxsKHRoZW5hYmxlLCByZXNvbHZlLCByZWplY3QsIG5vdGlmeSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJlamVjdChlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBGb2xkIGEgaGFuZGxlciB2YWx1ZSB3aXRoIHpcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBGb2xkKGYsIHosIGMsIHRvKSB7XG5cdFx0XHR0aGlzLmYgPSBmOyB0aGlzLnogPSB6OyB0aGlzLmMgPSBjOyB0aGlzLnRvID0gdG87XG5cdFx0XHR0aGlzLnJlc29sdmVyID0gZmFpbElmUmVqZWN0ZWQ7XG5cdFx0XHR0aGlzLnJlY2VpdmVyID0gdGhpcztcblx0XHR9XG5cblx0XHRGb2xkLnByb3RvdHlwZS5mdWxmaWxsZWQgPSBmdW5jdGlvbih4KSB7XG5cdFx0XHR0aGlzLmYuY2FsbCh0aGlzLmMsIHRoaXMueiwgeCwgdGhpcy50byk7XG5cdFx0fTtcblxuXHRcdEZvbGQucHJvdG90eXBlLnJlamVjdGVkID0gZnVuY3Rpb24oeCkge1xuXHRcdFx0dGhpcy50by5yZWplY3QoeCk7XG5cdFx0fTtcblxuXHRcdEZvbGQucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24oeCkge1xuXHRcdFx0dGhpcy50by5ub3RpZnkoeCk7XG5cdFx0fTtcblxuXHRcdC8vIE90aGVyIGhlbHBlcnNcblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmZiB4IGlzIGEgdHJ1c3RlZCBQcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gaXNQcm9taXNlKHgpIHtcblx0XHRcdHJldHVybiB4IGluc3RhbmNlb2YgUHJvbWlzZTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBUZXN0IGp1c3QgZW5vdWdoIHRvIHJ1bGUgb3V0IHByaW1pdGl2ZXMsIGluIG9yZGVyIHRvIHRha2UgZmFzdGVyXG5cdFx0ICogcGF0aHMgaW4gc29tZSBjb2RlXG5cdFx0ICogQHBhcmFtIHsqfSB4XG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IGZhbHNlIGlmZiB4IGlzIGd1YXJhbnRlZWQgKm5vdCogdG8gYmUgYSB0aGVuYWJsZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIG1heWJlVGhlbmFibGUoeCkge1xuXHRcdFx0cmV0dXJuICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHggPT09ICdmdW5jdGlvbicpICYmIHggIT09IG51bGw7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcnVuQ29udGludWF0aW9uMShmLCBoLCByZWNlaXZlciwgbmV4dCkge1xuXHRcdFx0aWYodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmV0dXJuIG5leHQuYmVjb21lKGgpO1xuXHRcdFx0fVxuXG5cdFx0XHRQcm9taXNlLmVudGVyQ29udGV4dChoKTtcblx0XHRcdHRyeUNhdGNoUmVqZWN0KGYsIGgudmFsdWUsIHJlY2VpdmVyLCBuZXh0KTtcblx0XHRcdFByb21pc2UuZXhpdENvbnRleHQoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBydW5Db250aW51YXRpb24zKGYsIHgsIGgsIHJlY2VpdmVyLCBuZXh0KSB7XG5cdFx0XHRpZih0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRyZXR1cm4gbmV4dC5iZWNvbWUoaCk7XG5cdFx0XHR9XG5cblx0XHRcdFByb21pc2UuZW50ZXJDb250ZXh0KGgpO1xuXHRcdFx0dHJ5Q2F0Y2hSZWplY3QzKGYsIHgsIGgudmFsdWUsIHJlY2VpdmVyLCBuZXh0KTtcblx0XHRcdFByb21pc2UuZXhpdENvbnRleHQoKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHJ1bk5vdGlmeShmLCB4LCBoLCByZWNlaXZlciwgbmV4dCkge1xuXHRcdFx0aWYodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmV0dXJuIG5leHQubm90aWZ5KHgpO1xuXHRcdFx0fVxuXG5cdFx0XHRQcm9taXNlLmVudGVyQ29udGV4dChoKTtcblx0XHRcdHRyeUNhdGNoUmV0dXJuKGYsIHgsIHJlY2VpdmVyLCBuZXh0KTtcblx0XHRcdFByb21pc2UuZXhpdENvbnRleHQoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cnlDYXRjaDIoZiwgYSwgYikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIGYoYSwgYik7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdChlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm4gZi5jYWxsKHRoaXNBcmcsIHgpLCBvciBpZiBpdCB0aHJvd3MgcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSBmb3Jcblx0XHQgKiB0aGUgdGhyb3duIGV4Y2VwdGlvblxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHRyeUNhdGNoUmVqZWN0KGYsIHgsIHRoaXNBcmcsIG5leHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG5leHQuYmVjb21lKGdldEhhbmRsZXIoZi5jYWxsKHRoaXNBcmcsIHgpKSk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0bmV4dC5iZWNvbWUobmV3IFJlamVjdGVkKGUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTYW1lIGFzIGFib3ZlLCBidXQgaW5jbHVkZXMgdGhlIGV4dHJhIGFyZ3VtZW50IHBhcmFtZXRlci5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiB0cnlDYXRjaFJlamVjdDMoZiwgeCwgeSwgdGhpc0FyZywgbmV4dCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Zi5jYWxsKHRoaXNBcmcsIHgsIHksIG5leHQpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdG5leHQuYmVjb21lKG5ldyBSZWplY3RlZChlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQGRlcHJlY2F0ZWRcblx0XHQgKiBSZXR1cm4gZi5jYWxsKHRoaXNBcmcsIHgpLCBvciBpZiBpdCB0aHJvd3MsICpyZXR1cm4qIHRoZSBleGNlcHRpb25cblx0XHQgKi9cblx0XHRmdW5jdGlvbiB0cnlDYXRjaFJldHVybihmLCB4LCB0aGlzQXJnLCBuZXh0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRuZXh0Lm5vdGlmeShmLmNhbGwodGhpc0FyZywgeCkpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdG5leHQubm90aWZ5KGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGluaGVyaXQoUGFyZW50LCBDaGlsZCkge1xuXHRcdFx0Q2hpbGQucHJvdG90eXBlID0gb2JqZWN0Q3JlYXRlKFBhcmVudC5wcm90b3R5cGUpO1xuXHRcdFx0Q2hpbGQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2hpbGQ7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gc25kKHgsIHkpIHtcblx0XHRcdHJldHVybiB5O1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gaW5pdEVtaXRSZWplY3Rpb24oKSB7XG5cdFx0XHQvKmdsb2JhbCBwcm9jZXNzLCBzZWxmLCBDdXN0b21FdmVudCovXG5cdFx0XHRpZih0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2VzcyAhPT0gbnVsbFxuXHRcdFx0XHQmJiB0eXBlb2YgcHJvY2Vzcy5lbWl0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIFJldHVybmluZyBmYWxzeSBoZXJlIG1lYW5zIHRvIGNhbGwgdGhlIGRlZmF1bHRcblx0XHRcdFx0Ly8gb25Qb3RlbnRpYWxseVVuaGFuZGxlZFJlamVjdGlvbiBBUEkuICBUaGlzIGlzIHNhZmUgZXZlbiBpblxuXHRcdFx0XHQvLyBicm93c2VyaWZ5IHNpbmNlIHByb2Nlc3MuZW1pdCBhbHdheXMgcmV0dXJucyBmYWxzeSBpbiBicm93c2VyaWZ5OlxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZGVmdW5jdHpvbWJpZS9ub2RlLXByb2Nlc3MvYmxvYi9tYXN0ZXIvYnJvd3Nlci5qcyNMNDAtTDQ2XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih0eXBlLCByZWplY3Rpb24pIHtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZSA9PT0gJ3VuaGFuZGxlZFJlamVjdGlvbidcblx0XHRcdFx0XHRcdD8gcHJvY2Vzcy5lbWl0KHR5cGUsIHJlamVjdGlvbi52YWx1ZSwgcmVqZWN0aW9uKVxuXHRcdFx0XHRcdFx0OiBwcm9jZXNzLmVtaXQodHlwZSwgcmVqZWN0aW9uKTtcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJldHVybiAoZnVuY3Rpb24obm9vcCwgc2VsZiwgQ3VzdG9tRXZlbnQpIHtcblx0XHRcdFx0XHR2YXIgaGFzQ3VzdG9tRXZlbnQgPSBmYWxzZTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dmFyIGV2ID0gbmV3IEN1c3RvbUV2ZW50KCd1bmhhbmRsZWRSZWplY3Rpb24nKTtcblx0XHRcdFx0XHRcdGhhc0N1c3RvbUV2ZW50ID0gZXYgaW5zdGFuY2VvZiBDdXN0b21FdmVudDtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRcdFx0cmV0dXJuICFoYXNDdXN0b21FdmVudCA/IG5vb3AgOiBmdW5jdGlvbih0eXBlLCByZWplY3Rpb24pIHtcblx0XHRcdFx0XHRcdHZhciBldiA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG5cdFx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHRcdHJlYXNvbjogcmVqZWN0aW9uLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdGtleTogcmVqZWN0aW9uXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGJ1YmJsZXM6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuICFzZWxmLmRpc3BhdGNoRXZlbnQoZXYpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0obm9vcCwgc2VsZiwgQ3VzdG9tRXZlbnQpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5vb3A7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2U7XG5cdH07XG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgfSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd2hlbi9saWIvbWFrZVByb21pc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG5cbi8qKlxuICogUHJvbWlzZXMvQSsgYW5kIHdoZW4oKSBpbXBsZW1lbnRhdGlvblxuICogd2hlbiBpcyBwYXJ0IG9mIHRoZSBjdWpvSlMgZmFtaWx5IG9mIGxpYnJhcmllcyAoaHR0cDovL2N1am9qcy5jb20vKVxuICogQGF1dGhvciBCcmlhbiBDYXZhbGllclxuICogQGF1dGhvciBKb2huIEhhbm5cbiAqL1xuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUpIHtcblxuXHR2YXIgdGltZWQgPSByZXF1aXJlKCcuL2xpYi9kZWNvcmF0b3JzL3RpbWVkJyk7XG5cdHZhciBhcnJheSA9IHJlcXVpcmUoJy4vbGliL2RlY29yYXRvcnMvYXJyYXknKTtcblx0dmFyIGZsb3cgPSByZXF1aXJlKCcuL2xpYi9kZWNvcmF0b3JzL2Zsb3cnKTtcblx0dmFyIGZvbGQgPSByZXF1aXJlKCcuL2xpYi9kZWNvcmF0b3JzL2ZvbGQnKTtcblx0dmFyIGluc3BlY3QgPSByZXF1aXJlKCcuL2xpYi9kZWNvcmF0b3JzL2luc3BlY3QnKTtcblx0dmFyIGdlbmVyYXRlID0gcmVxdWlyZSgnLi9saWIvZGVjb3JhdG9ycy9pdGVyYXRlJyk7XG5cdHZhciBwcm9ncmVzcyA9IHJlcXVpcmUoJy4vbGliL2RlY29yYXRvcnMvcHJvZ3Jlc3MnKTtcblx0dmFyIHdpdGhUaGlzID0gcmVxdWlyZSgnLi9saWIvZGVjb3JhdG9ycy93aXRoJyk7XG5cdHZhciB1bmhhbmRsZWRSZWplY3Rpb24gPSByZXF1aXJlKCcuL2xpYi9kZWNvcmF0b3JzL3VuaGFuZGxlZFJlamVjdGlvbicpO1xuXHR2YXIgVGltZW91dEVycm9yID0gcmVxdWlyZSgnLi9saWIvVGltZW91dEVycm9yJyk7XG5cblx0dmFyIFByb21pc2UgPSBbYXJyYXksIGZsb3csIGZvbGQsIGdlbmVyYXRlLCBwcm9ncmVzcyxcblx0XHRpbnNwZWN0LCB3aXRoVGhpcywgdGltZWQsIHVuaGFuZGxlZFJlamVjdGlvbl1cblx0XHQucmVkdWNlKGZ1bmN0aW9uKFByb21pc2UsIGZlYXR1cmUpIHtcblx0XHRcdHJldHVybiBmZWF0dXJlKFByb21pc2UpO1xuXHRcdH0sIHJlcXVpcmUoJy4vbGliL1Byb21pc2UnKSk7XG5cblx0dmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9saWIvYXBwbHknKShQcm9taXNlKTtcblxuXHQvLyBQdWJsaWMgQVBJXG5cblx0d2hlbi5wcm9taXNlICAgICA9IHByb21pc2U7ICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBwZW5kaW5nIHByb21pc2Vcblx0d2hlbi5yZXNvbHZlICAgICA9IFByb21pc2UucmVzb2x2ZTsgICAgICAvLyBDcmVhdGUgYSByZXNvbHZlZCBwcm9taXNlXG5cdHdoZW4ucmVqZWN0ICAgICAgPSBQcm9taXNlLnJlamVjdDsgICAgICAgLy8gQ3JlYXRlIGEgcmVqZWN0ZWQgcHJvbWlzZVxuXG5cdHdoZW4ubGlmdCAgICAgICAgPSBsaWZ0OyAgICAgICAgICAgICAgICAgLy8gbGlmdCBhIGZ1bmN0aW9uIHRvIHJldHVybiBwcm9taXNlc1xuXHR3aGVuWyd0cnknXSAgICAgID0gYXR0ZW1wdDsgICAgICAgICAgICAgIC8vIGNhbGwgYSBmdW5jdGlvbiBhbmQgcmV0dXJuIGEgcHJvbWlzZVxuXHR3aGVuLmF0dGVtcHQgICAgID0gYXR0ZW1wdDsgICAgICAgICAgICAgIC8vIGFsaWFzIGZvciB3aGVuLnRyeVxuXG5cdHdoZW4uaXRlcmF0ZSAgICAgPSBQcm9taXNlLml0ZXJhdGU7ICAgICAgLy8gREVQUkVDQVRFRCAodXNlIGN1am9qcy9tb3N0IHN0cmVhbXMpIEdlbmVyYXRlIGEgc3RyZWFtIG9mIHByb21pc2VzXG5cdHdoZW4udW5mb2xkICAgICAgPSBQcm9taXNlLnVuZm9sZDsgICAgICAgLy8gREVQUkVDQVRFRCAodXNlIGN1am9qcy9tb3N0IHN0cmVhbXMpIEdlbmVyYXRlIGEgc3RyZWFtIG9mIHByb21pc2VzXG5cblx0d2hlbi5qb2luICAgICAgICA9IGpvaW47ICAgICAgICAgICAgICAgICAvLyBKb2luIDIgb3IgbW9yZSBwcm9taXNlc1xuXG5cdHdoZW4uYWxsICAgICAgICAgPSBhbGw7ICAgICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBhIGxpc3Qgb2YgcHJvbWlzZXNcblx0d2hlbi5zZXR0bGUgICAgICA9IHNldHRsZTsgICAgICAgICAgICAgICAvLyBTZXR0bGUgYSBsaXN0IG9mIHByb21pc2VzXG5cblx0d2hlbi5hbnkgICAgICAgICA9IGxpZnQoUHJvbWlzZS5hbnkpOyAgICAvLyBPbmUtd2lubmVyIHJhY2Vcblx0d2hlbi5zb21lICAgICAgICA9IGxpZnQoUHJvbWlzZS5zb21lKTsgICAvLyBNdWx0aS13aW5uZXIgcmFjZVxuXHR3aGVuLnJhY2UgICAgICAgID0gbGlmdChQcm9taXNlLnJhY2UpOyAgIC8vIEZpcnN0LXRvLXNldHRsZSByYWNlXG5cblx0d2hlbi5tYXAgICAgICAgICA9IG1hcDsgICAgICAgICAgICAgICAgICAvLyBBcnJheS5tYXAoKSBmb3IgcHJvbWlzZXNcblx0d2hlbi5maWx0ZXIgICAgICA9IGZpbHRlcjsgICAgICAgICAgICAgICAvLyBBcnJheS5maWx0ZXIoKSBmb3IgcHJvbWlzZXNcblx0d2hlbi5yZWR1Y2UgICAgICA9IGxpZnQoUHJvbWlzZS5yZWR1Y2UpOyAgICAgICAvLyBBcnJheS5yZWR1Y2UoKSBmb3IgcHJvbWlzZXNcblx0d2hlbi5yZWR1Y2VSaWdodCA9IGxpZnQoUHJvbWlzZS5yZWR1Y2VSaWdodCk7ICAvLyBBcnJheS5yZWR1Y2VSaWdodCgpIGZvciBwcm9taXNlc1xuXG5cdHdoZW4uaXNQcm9taXNlTGlrZSA9IGlzUHJvbWlzZUxpa2U7ICAgICAgLy8gSXMgc29tZXRoaW5nIHByb21pc2UtbGlrZSwgYWthIHRoZW5hYmxlXG5cblx0d2hlbi5Qcm9taXNlICAgICA9IFByb21pc2U7ICAgICAgICAgICAgICAvLyBQcm9taXNlIGNvbnN0cnVjdG9yXG5cdHdoZW4uZGVmZXIgICAgICAgPSBkZWZlcjsgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEge3Byb21pc2UsIHJlc29sdmUsIHJlamVjdH0gdHVwbGVcblxuXHQvLyBFcnJvciB0eXBlc1xuXG5cdHdoZW4uVGltZW91dEVycm9yID0gVGltZW91dEVycm9yO1xuXG5cdC8qKlxuXHQgKiBHZXQgYSB0cnVzdGVkIHByb21pc2UgZm9yIHgsIG9yIGJ5IHRyYW5zZm9ybWluZyB4IHdpdGggb25GdWxmaWxsZWRcblx0ICpcblx0ICogQHBhcmFtIHsqfSB4XG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24/fSBvbkZ1bGZpbGxlZCBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB4IGlzXG5cdCAqICAgc3VjY2Vzc2Z1bGx5IGZ1bGZpbGxlZC4gIElmIHByb21pc2VPclZhbHVlIGlzIGFuIGltbWVkaWF0ZSB2YWx1ZSwgY2FsbGJhY2tcblx0ICogICB3aWxsIGJlIGludm9rZWQgaW1tZWRpYXRlbHkuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24/fSBvblJlamVjdGVkIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHggaXNcblx0ICogICByZWplY3RlZC5cblx0ICogQHBhcmFtIHtmdW5jdGlvbj99IG9uUHJvZ3Jlc3MgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gcHJvZ3Jlc3MgdXBkYXRlc1xuXHQgKiAgIGFyZSBpc3N1ZWQgZm9yIHguIEBkZXByZWNhdGVkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBhIG5ldyBwcm9taXNlIHRoYXQgd2lsbCBmdWxmaWxsIHdpdGggdGhlIHJldHVyblxuXHQgKiAgIHZhbHVlIG9mIGNhbGxiYWNrIG9yIGVycmJhY2sgb3IgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgcHJvbWlzZU9yVmFsdWUgaWZcblx0ICogICBjYWxsYmFjayBhbmQvb3IgZXJyYmFjayBpcyBub3Qgc3VwcGxpZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiB3aGVuKHgsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzKSB7XG5cdFx0dmFyIHAgPSBQcm9taXNlLnJlc29sdmUoeCk7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcC50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IHByb21pc2Ugd2hvc2UgZmF0ZSBpcyBkZXRlcm1pbmVkIGJ5IHJlc29sdmVyLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlciBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QsIG5vdGlmeSlcblx0ICogQHJldHVybnMge1Byb21pc2V9IHByb21pc2Ugd2hvc2UgZmF0ZSBpcyBkZXRlcm1pbmUgYnkgcmVzb2x2ZXJcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2UocmVzb2x2ZXIpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZXIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExpZnQgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBjcmVhdGluZyBhIHZlcnNpb24gb2YgZiB0aGF0IHJldHVybnNcblx0ICogcHJvbWlzZXMsIGFuZCBhY2NlcHRzIHByb21pc2VzIGFzIGFyZ3VtZW50cy5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZlxuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb259IHZlcnNpb24gb2YgZiB0aGF0IHJldHVybnMgcHJvbWlzZXNcblx0ICovXG5cdGZ1bmN0aW9uIGxpZnQoZikge1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGZvcih2YXIgaT0wLCBsPWFyZ3VtZW50cy5sZW5ndGgsIGE9bmV3IEFycmF5KGwpOyBpPGw7ICsraSkge1xuXHRcdFx0XHRhW2ldID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFwcGx5KGYsIHRoaXMsIGEpO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ2FsbCBmIGluIGEgZnV0dXJlIHR1cm4sIHdpdGggdGhlIHN1cHBsaWVkIGFyZ3MsIGFuZCByZXR1cm4gYSBwcm9taXNlXG5cdCAqIGZvciB0aGUgcmVzdWx0LlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0ZnVuY3Rpb24gYXR0ZW1wdChmIC8qLCBhcmdzLi4uICovKSB7XG5cdFx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0XHRmb3IodmFyIGk9MCwgbD1hcmd1bWVudHMubGVuZ3RoLTEsIGE9bmV3IEFycmF5KGwpOyBpPGw7ICsraSkge1xuXHRcdFx0YVtpXSA9IGFyZ3VtZW50c1tpKzFdO1xuXHRcdH1cblx0XHRyZXR1cm4gYXBwbHkoZiwgdGhpcywgYSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHtwcm9taXNlLCByZXNvbHZlcn0gcGFpciwgZWl0aGVyIG9yIGJvdGggb2Ygd2hpY2hcblx0ICogbWF5IGJlIGdpdmVuIG91dCBzYWZlbHkgdG8gY29uc3VtZXJzLlxuXHQgKiBAcmV0dXJuIHt7cHJvbWlzZTogUHJvbWlzZSwgcmVzb2x2ZTogZnVuY3Rpb24sIHJlamVjdDogZnVuY3Rpb24sIG5vdGlmeTogZnVuY3Rpb259fVxuXHQgKi9cblx0ZnVuY3Rpb24gZGVmZXIoKSB7XG5cdFx0cmV0dXJuIG5ldyBEZWZlcnJlZCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gRGVmZXJyZWQoKSB7XG5cdFx0dmFyIHAgPSBQcm9taXNlLl9kZWZlcigpO1xuXG5cdFx0ZnVuY3Rpb24gcmVzb2x2ZSh4KSB7IHAuX2hhbmRsZXIucmVzb2x2ZSh4KTsgfVxuXHRcdGZ1bmN0aW9uIHJlamVjdCh4KSB7IHAuX2hhbmRsZXIucmVqZWN0KHgpOyB9XG5cdFx0ZnVuY3Rpb24gbm90aWZ5KHgpIHsgcC5faGFuZGxlci5ub3RpZnkoeCk7IH1cblxuXHRcdHRoaXMucHJvbWlzZSA9IHA7XG5cdFx0dGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHR0aGlzLnJlamVjdCA9IHJlamVjdDtcblx0XHR0aGlzLm5vdGlmeSA9IG5vdGlmeTtcblx0XHR0aGlzLnJlc29sdmVyID0geyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCwgbm90aWZ5OiBub3RpZnkgfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIGlmIHggaXMgcHJvbWlzZS1saWtlLCBpLmUuIGEgdGhlbmFibGUgb2JqZWN0XG5cdCAqIE5PVEU6IFdpbGwgcmV0dXJuIHRydWUgZm9yICphbnkgdGhlbmFibGUgb2JqZWN0KiwgYW5kIGlzbid0IHRydWx5XG5cdCAqIHNhZmUsIHNpbmNlIGl0IG1heSBhdHRlbXB0IHRvIGFjY2VzcyB0aGUgYHRoZW5gIHByb3BlcnR5IG9mIHggKGkuZS5cblx0ICogIGNsZXZlci9tYWxpY2lvdXMgZ2V0dGVycyBtYXkgZG8gd2VpcmQgdGhpbmdzKVxuXHQgKiBAcGFyYW0geyp9IHggYW55dGhpbmdcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgeCBpcyBwcm9taXNlLWxpa2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzUHJvbWlzZUxpa2UoeCkge1xuXHRcdHJldHVybiB4ICYmIHR5cGVvZiB4LnRoZW4gPT09ICdmdW5jdGlvbic7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbmx5IG9uY2UgYWxsIHRoZSBzdXBwbGllZCBhcmd1bWVudHNcblx0ICogaGF2ZSByZXNvbHZlZC4gVGhlIHJlc29sdXRpb24gdmFsdWUgb2YgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSBhbiBhcnJheVxuXHQgKiBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIHZhbHVlcyBvZiBlYWNoIG9mIHRoZSBhcmd1bWVudHMuXG5cdCAqIEBwYXJhbSB7Li4uKn0gYXJndW1lbnRzIG1heSBiZSBhIG1peCBvZiBwcm9taXNlcyBhbmQgdmFsdWVzXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0ZnVuY3Rpb24gam9pbigvKiAuLi5wcm9taXNlcyAqLykge1xuXHRcdHJldHVybiBQcm9taXNlLmFsbChhcmd1bWVudHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGZ1bGZpbGwgb25jZSBhbGwgaW5wdXQgcHJvbWlzZXMgaGF2ZVxuXHQgKiBmdWxmaWxsZWQsIG9yIHJlamVjdCB3aGVuIGFueSBvbmUgaW5wdXQgcHJvbWlzZSByZWplY3RzLlxuXHQgKiBAcGFyYW0ge2FycmF5fFByb21pc2V9IHByb21pc2VzIGFycmF5IChvciBwcm9taXNlIGZvciBhbiBhcnJheSkgb2YgcHJvbWlzZXNcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcblx0XHRyZXR1cm4gd2hlbihwcm9taXNlcywgUHJvbWlzZS5hbGwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGFsd2F5cyBmdWxmaWxsIHdpdGggYW4gYXJyYXkgY29udGFpbmluZ1xuXHQgKiB0aGUgb3V0Y29tZSBzdGF0ZXMgb2YgYWxsIGlucHV0IHByb21pc2VzLiAgVGhlIHJldHVybmVkIHByb21pc2Vcblx0ICogd2lsbCBvbmx5IHJlamVjdCBpZiBgcHJvbWlzZXNgIGl0c2VsZiBpcyBhIHJlamVjdGVkIHByb21pc2UuXG5cdCAqIEBwYXJhbSB7YXJyYXl8UHJvbWlzZX0gcHJvbWlzZXMgYXJyYXkgKG9yIHByb21pc2UgZm9yIGFuIGFycmF5KSBvZiBwcm9taXNlc1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSBmb3IgYXJyYXkgb2Ygc2V0dGxlZCBzdGF0ZSBkZXNjcmlwdG9yc1xuXHQgKi9cblx0ZnVuY3Rpb24gc2V0dGxlKHByb21pc2VzKSB7XG5cdFx0cmV0dXJuIHdoZW4ocHJvbWlzZXMsIFByb21pc2Uuc2V0dGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9taXNlLWF3YXJlIGFycmF5IG1hcCBmdW5jdGlvbiwgc2ltaWxhciB0byBgQXJyYXkucHJvdG90eXBlLm1hcCgpYCxcblx0ICogYnV0IGlucHV0IGFycmF5IG1heSBjb250YWluIHByb21pc2VzIG9yIHZhbHVlcy5cblx0ICogQHBhcmFtIHtBcnJheXxQcm9taXNlfSBwcm9taXNlcyBhcnJheSBvZiBhbnl0aGluZywgbWF5IGNvbnRhaW4gcHJvbWlzZXMgYW5kIHZhbHVlc1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKHg6KiwgaW5kZXg6TnVtYmVyKToqfSBtYXBGdW5jIG1hcCBmdW5jdGlvbiB3aGljaCBtYXlcblx0ICogIHJldHVybiBhIHByb21pc2Ugb3IgdmFsdWVcblx0ICogQHJldHVybnMge1Byb21pc2V9IHByb21pc2UgdGhhdCB3aWxsIGZ1bGZpbGwgd2l0aCBhbiBhcnJheSBvZiBtYXBwZWQgdmFsdWVzXG5cdCAqICBvciByZWplY3QgaWYgYW55IGlucHV0IHByb21pc2UgcmVqZWN0cy5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcChwcm9taXNlcywgbWFwRnVuYykge1xuXHRcdHJldHVybiB3aGVuKHByb21pc2VzLCBmdW5jdGlvbihwcm9taXNlcykge1xuXHRcdFx0cmV0dXJuIFByb21pc2UubWFwKHByb21pc2VzLCBtYXBGdW5jKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaWx0ZXIgdGhlIHByb3ZpZGVkIGFycmF5IG9mIHByb21pc2VzIHVzaW5nIHRoZSBwcm92aWRlZCBwcmVkaWNhdGUuICBJbnB1dCBtYXlcblx0ICogY29udGFpbiBwcm9taXNlcyBhbmQgdmFsdWVzXG5cdCAqIEBwYXJhbSB7QXJyYXl8UHJvbWlzZX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXMgYW5kIHZhbHVlc1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uKHg6KiwgaW5kZXg6TnVtYmVyKTpib29sZWFufSBwcmVkaWNhdGUgZmlsdGVyaW5nIHByZWRpY2F0ZS5cblx0ICogIE11c3QgcmV0dXJuIHRydXRoeSAob3IgcHJvbWlzZSBmb3IgdHJ1dGh5KSBmb3IgaXRlbXMgdG8gcmV0YWluLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSB0aGF0IHdpbGwgZnVsZmlsbCB3aXRoIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIGl0ZW1zXG5cdCAqICBmb3Igd2hpY2ggcHJlZGljYXRlIHJldHVybmVkIHRydXRoeS5cblx0ICovXG5cdGZ1bmN0aW9uIGZpbHRlcihwcm9taXNlcywgcHJlZGljYXRlKSB7XG5cdFx0cmV0dXJuIHdoZW4ocHJvbWlzZXMsIGZ1bmN0aW9uKHByb21pc2VzKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5maWx0ZXIocHJvbWlzZXMsIHByZWRpY2F0ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gd2hlbjtcbn0pO1xufSkodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24gKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUpOyB9KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3doZW4vd2hlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYm9vdC5jb2ZmZWVcIjogMjYsXG5cdFwiLi9nYW1lLmNvZmZlZVwiOiAyNyxcblx0XCIuL2ludHJvLmNvZmZlZVwiOiAyOCxcblx0XCIuL3ByZWxvYWQuY29mZmVlXCI6IDI5LFxuXHRcIi4vcmVzZXQuY29mZmVlXCI6IDMwXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDQ3O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzIF5cXC5cXC8uKlxcLmNvZmZlZSRcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogKGlnbm9yZWQpICovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiB2ZXJ0eCAoaWdub3JlZClcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==