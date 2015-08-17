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
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Phaser;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var atlas;
	
	atlas = {
	  'frames': {
	    'ammo.png': {
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
	    'bullet.png': {
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
	    'cowboy/dead/hit.png': {
	      'frame': {
	        'x': 230,
	        'y': 170,
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
	    'cowboy/dead/rip.png': {
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
	    'cowboy/high/cross.png': {
	      'frame': {
	        'x': 422,
	        'y': 260,
	        'w': 88,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 88,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 88,
	        'h': 136
	      }
	    },
	    'cowboy/high/one.png': {
	      'frame': {
	        'x': 418,
	        'y': 398,
	        'w': 88,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 88,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 88,
	        'h': 136
	      }
	    },
	    'cowboy/high/two.png': {
	      'frame': {
	        'x': 126,
	        'y': 308,
	        'w': 88,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 88,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 88,
	        'h': 136
	      }
	    },
	    'cowboy/low/cross.png': {
	      'frame': {
	        'x': 2,
	        'y': 450,
	        'w': 84,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 84,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 84,
	        'h': 136
	      }
	    },
	    'cowboy/low/one.png': {
	      'frame': {
	        'x': 88,
	        'y': 544,
	        'w': 84,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 84,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 84,
	        'h': 136
	      }
	    },
	    'cowboy/low/two.png': {
	      'frame': {
	        'x': 2,
	        'y': 588,
	        'w': 84,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 84,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 84,
	        'h': 136
	      }
	    },
	    'cowboy/med/cross.png': {
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
	    'cowboy/med/one.png': {
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
	    'cowboy/med/two.png': {
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
	    'cowboy/medhigh/cross.png': {
	      'frame': {
	        'x': 328,
	        'y': 238,
	        'w': 92,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 92,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 92,
	        'h': 136
	      }
	    },
	    'cowboy/medhigh/one.png': {
	      'frame': {
	        'x': 230,
	        'y': 304,
	        'w': 92,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 92,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 92,
	        'h': 136
	      }
	    },
	    'cowboy/medhigh/two.png': {
	      'frame': {
	        'x': 324,
	        'y': 376,
	        'w': 92,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 92,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 92,
	        'h': 136
	      }
	    },
	    'cowboy/medlow/cross.png': {
	      'frame': {
	        'x': 216,
	        'y': 442,
	        'w': 88,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 88,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 88,
	        'h': 136
	      }
	    },
	    'cowboy/medlow/one.png': {
	      'frame': {
	        'x': 306,
	        'y': 514,
	        'w': 88,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 88,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 88,
	        'h': 136
	      }
	    },
	    'cowboy/medlow/two.png': {
	      'frame': {
	        'x': 396,
	        'y': 536,
	        'w': 88,
	        'h': 136
	      },
	      'rotated': false,
	      'trimmed': false,
	      'spriteSourceSize': {
	        'x': 0,
	        'y': 0,
	        'w': 88,
	        'h': 136
	      },
	      'sourceSize': {
	        'w': 88,
	        'h': 136
	      }
	    },
	    'digits/0.png': {
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
	    'digits/1.png': {
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
	    'digits/2.png': {
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
	    'digits/3.png': {
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
	    'digits/4.png': {
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
	    'digits/5.png': {
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
	    'digits/6.png': {
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
	    'digits/7.png': {
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
	    'digits/8.png': {
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
	    'digits/9.png': {
	      'frame': {
	        'x': 100,
	        'y': 342,
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
	    'obstacles/cactus.png': {
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
	    'obstacles/tree.png': {
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
	    'obstacles/wagon.png': {
	      'frame': {
	        'x': 100,
	        'y': 446,
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
	    },
	    'text/DRAW.png': {
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
	    'text/GAME.png': {
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
	    'text/GET_READY.png': {
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
	    'text/GOT_ME.png': {
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
	    'text/GUN_FIGHT.png': {
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
	    'text/INSERT_COIN.png': {
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
	    'text/OVER.png': {
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
	    'smartupdate': '$TexturePacker:SmartUpdate:f05a3ac5007047e65c9c16cedce63cc7:4f348404f7af83f4f0e31193d6291c33:cbce6b53f0f49e0bf15173c25c41f876$'
	  }
	};
	
	module.exports = atlas;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {};


/***/ },
/* 5 */
4,
/* 6 */
4,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var $window, Phaser, isMobile, launch;
	
	Phaser = __webpack_require__(1);
	
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
	  game_width = 800;
	  game_height = 600;
	  game = new Phaser.Game(game_width, game_height, Phaser.AUTO, 'game', 'boot', true, false, null);
	  game.cdn = cdn;
	  game.hosturl = hosturl;
	  game.version = version;
	  game.debugMode = false;
	  game.enableMusic = !game.debugMode;
	  game.enableSFX = !game.debugMode;
	  game.constants = {
	    STATES: ['boot', 'preload', 'intro', 'game', 'reset'],
	    SPRITES: __webpack_require__(6),
	    LEVELS: __webpack_require__(4),
	    SFX: __webpack_require__(5)
	  };
	  game.level = 1;
	  ref = game.constants.STATES;
	  for (i = 0, len = ref.length; i < len; i++) {
	    state = ref[i];
	    game.state.add(state, __webpack_require__(15)("./" + state + ".coffee"));
	  }
	  return game.state.start('boot');
	};
	
	module.exports = launch;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Phaser) {var Cowboy,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Cowboy = (function(superClass) {
	  extend(Cowboy, superClass);
	
	  function Cowboy() {}
	
	  Cowboy.prototype.create = function() {};
	
	  return Cowboy;
	
	})(Phaser.Sprite);
	
	module.exports = Cowboy;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Phaser) {var Boot;
	
	Boot = (function() {
	  function Boot() {}
	
	  Boot.prototype.create = function() {
	    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    this.state.start('preload');
	    return this.scale.refresh();
	  };
	
	  Boot.prototype.preload = function() {
	    return this.game.scaler();
	  };
	
	  return Boot;
	
	})();
	
	module.exports = Boot;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Cowboy, Game;
	
	Cowboy = __webpack_require__(8);
	
	Game = (function() {
	  function Game() {}
	
	  Game.prototype.create = function() {};
	
	  Game.prototype.start = function() {};
	
	  Game.prototype.update = function() {};
	
	  Game.prototype.setupLevel = function() {};
	
	  return Game;

	})();


/***/ },
/* 11 */
/***/ function(module, exports) {

	


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var Preload;
	
	Preload = (function() {
	  function Preload() {}
	
	  Preload.prototype.create = function() {
	    var CDN, atlas_data, texture_url;
	    if (this.game.cdn !== '/') {
	      this.load.crossOrigin = this.game.hosturl;
	    }
	    CDN = this.game.cdn;
	    texture_url = '../../../images/atlas.png';
	    atlas_data = __webpack_require__(3);
	    this.load.atlasJSONHash('atlas', texture_url, null, atlas_data);
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 13 */
11,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var LaunchGame;
	
	LaunchGame = __webpack_require__(7);
	
	$(document).ready(function() {
	  return LaunchGame();
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./boot.coffee": 9,
		"./game.coffee": 10,
		"./intro.coffee": 11,
		"./preload.coffee": 12,
		"./reset.coffee": 13
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
	webpackContext.id = 15;


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = _;

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmJkYjM1Nzk2MWY3MTY0MGQzZDkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUGhhc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvYXRsYXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2xldmVscy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9sYXVuY2guY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9Db3dib3kuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2Jvb3QuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2dhbWUuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL3ByZWxvYWQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL21haW4uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzIF5cXC5cXC8uKlxcLmNvZmZlZSQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBQyxHQUFOLEtBQWEsR0FBM0Q7a0JBQUEsS0FBSyxDQUFDLFdBQU4sR0FBb0IsS0FBQyxLQUFJLENBQUMsWUFBMUI7O09BSjBCO0tBQUEsUUFBNUI7R0FwQk07O3FCQTBCUixTQUFRO0tBQ04sSUFBRyxJQUFDLEtBQUksQ0FBQyxTQUFUO2NBQ0UsSUFBQyxNQUFLLENBQUMsS0FBUCxDQUFhLE1BQWIsRUFERjtNQUFBO2NBR0UsSUFBQyxNQUFLLENBQUMsS0FBUCxDQUFhLE9BQWIsRUFIRjs7R0FETTs7Ozs7O0FBTVYsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7Ozs7QUNuQ2pCOztBQUFBLGNBQWEsb0JBQVEsQ0FBUjs7QUFHYixHQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0I7VUFDakI7QUFEaUIsRUFBbEI7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkEsb0IiLCJmaWxlIjoiX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qYXZhc2NyaXB0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGJiZGIzNTc5NjFmNzE2NDBkM2Q5XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBQaGFzZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlBoYXNlclwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpRdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiYXRsYXMgPVxuICAnZnJhbWVzJzpcbiAgICAnYW1tby5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyNzZcbiAgICAgICAgJ3knOiA4NlxuICAgICAgICAndyc6IDE4MFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxODBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDE4MFxuICAgICAgICAnaCc6IDQwXG4gICAgJ2J1bGxldC5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0OTBcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDhcbiAgICAgICAgJ2gnOiA4XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDhcbiAgICAgICAgJ2gnOiA4XG4gICAgJ2Nvd2JveS9kZWFkL2hpdC5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyMzBcbiAgICAgICAgJ3knOiAxNzBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzMlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzMlxuICAgICdjb3dib3kvZGVhZC9yaXAucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjhcbiAgICAgICAgJ2gnOiA0NFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgJ2Nvd2JveS9oaWdoL2Nyb3NzLnBuZyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQyMlxuICAgICAgICAneSc6IDI2MFxuICAgICAgICAndyc6IDg4XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDg4XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9oaWdoL29uZS5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0MThcbiAgICAgICAgJ3knOiAzOThcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvaGlnaC90d28ucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTI2XG4gICAgICAgICd5JzogMzA4XG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDg4XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy9jcm9zcy5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNDUwXG4gICAgICAgICd3JzogODRcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDg0XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogODRcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy9vbmUucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogODhcbiAgICAgICAgJ3knOiA1NDRcbiAgICAgICAgJ3cnOiA4NFxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogODRcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4NFxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L3R3by5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNTg4XG4gICAgICAgICd3JzogODRcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDg0XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogODRcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZC9jcm9zcy5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMzJcbiAgICAgICAgJ3knOiAxNzBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkL29uZS5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogMTc0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZC90d28ucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDMxMlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRoaWdoL2Nyb3NzLnBuZyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDMyOFxuICAgICAgICAneSc6IDIzOFxuICAgICAgICAndyc6IDkyXG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5MlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDkyXG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRoaWdoL29uZS5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyMzBcbiAgICAgICAgJ3knOiAzMDRcbiAgICAgICAgJ3cnOiA5MlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTJcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5MlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkaGlnaC90d28ucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzI0XG4gICAgICAgICd5JzogMzc2XG4gICAgICAgICd3JzogOTJcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDkyXG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTJcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy9jcm9zcy5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyMTZcbiAgICAgICAgJ3knOiA0NDJcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkbG93L29uZS5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMDZcbiAgICAgICAgJ3knOiA1MTRcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkbG93L3R3by5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzOTZcbiAgICAgICAgJ3knOiA1MzZcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDEzNlxuICAgICdkaWdpdHMvMC5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NDJcbiAgICAgICAgJ3knOiAxNzZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICdkaWdpdHMvMS5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0OTRcbiAgICAgICAgJ3knOiAyXG4gICAgICAgICd3JzogMTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDE2XG4gICAgICAgICdoJzogNDBcbiAgICAnZGlnaXRzLzIucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDY4XG4gICAgICAgICd5JzogMTc2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnZGlnaXRzLzMucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDQyXG4gICAgICAgICd5JzogMjE4XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnZGlnaXRzLzQucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDY4XG4gICAgICAgICd5JzogMjE4XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnZGlnaXRzLzUucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMTc0XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnZGlnaXRzLzYucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMjE2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnZGlnaXRzLzcucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMjU4XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnZGlnaXRzLzgucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMzAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnZGlnaXRzLzkucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMzQyXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnb2JzdGFjbGVzL2NhY3R1cy5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NThcbiAgICAgICAgJ3knOiA4NlxuICAgICAgICAndyc6IDMyXG4gICAgICAgICdoJzogODhcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDMyXG4gICAgICAgICdoJzogODhcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAzMlxuICAgICAgICAnaCc6IDg4XG4gICAgJ29ic3RhY2xlcy90cmVlLnBuZyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDM3NlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDY0XG4gICAgICAgICdoJzogMTA4XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA2NFxuICAgICAgICAnaCc6IDEwOFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDY0XG4gICAgICAgICdoJzogMTA4XG4gICAgJ29ic3RhY2xlcy93YWdvbi5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiA0NDZcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiA5NlxuICAgICd0ZXh0L0RSQVcucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzM2XG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxNTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR0FNRS5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMzJcbiAgICAgICAgJ3knOiAxMjhcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L0dFVF9SRUFEWS5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNDRcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L0dPVF9NRS5wbmcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyNzZcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyMTJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR1VOX0ZJR0hULnBuZyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiA4NlxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvSU5TRVJUX0NPSU4ucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDJcbiAgICAgICAgJ3cnOiAzMzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAzMzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L09WRVIucG5nJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjU0XG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgJ21ldGEnOlxuICAgICdhcHAnOiAnaHR0cDovL3d3dy5jb2RlYW5kd2ViLmNvbS90ZXh0dXJlcGFja2VyJ1xuICAgICd2ZXJzaW9uJzogJzEuMCdcbiAgICAnaW1hZ2UnOiAnYXRsYXMucG5nJ1xuICAgICdmb3JtYXQnOiAnUkdCQTg4ODgnXG4gICAgJ3NpemUnOlxuICAgICAgJ3cnOiA1MTJcbiAgICAgICdoJzogMTAyNFxuICAgICdzY2FsZSc6ICcxJ1xuICAgICdzbWFydHVwZGF0ZSc6ICckVGV4dHVyZVBhY2tlcjpTbWFydFVwZGF0ZTpmMDVhM2FjNTAwNzA0N2U2NWM5YzE2Y2VkY2U2M2NjNzo0ZjM0ODQwNGY3YWY4M2Y0ZjBlMzExOTNkNjI5MWMzMzpjYmNlNmI1M2YwZjQ5ZTBiZjE1MTczYzI1YzQxZjg3NiQnXG5cbm1vZHVsZS5leHBvcnRzID0gYXRsYXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvYXRsYXMuY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMuY29mZmVlXG4gKiovIiwiUGhhc2VyID0gcmVxdWlyZSBcInBoYXNlclwiXG5cbiR3aW5kb3cgPSAkKHdpbmRvdylcblxuIyBtb2JpbGUgZmxhZ1xuaXNNb2JpbGUgPSAtPlxuICBpZiggL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIClcbiAgICB0cnVlXG4gIGVsc2VcbiAgICBmYWxzZVxuXG5sYXVuY2ggPSAoY2RuPVwiL1wiLCB2ZXJzaW9uPVwiP3Y9MC4wLjBcIiktPlxuXG4gICMgNDozXG4gIGdhbWVfd2lkdGggPSA4MDBcbiAgZ2FtZV9oZWlnaHQgPSA2MDBcblxuICAjIENvbnN0cnVjdCBHYW1lXG4gIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXG4gICAgZ2FtZV93aWR0aCwgICAjIHdpZHRoXG4gICAgZ2FtZV9oZWlnaHQsICAjIGhlaWdodFxuICAgIFBoYXNlci5BVVRPLCAgIyByZW5kZXJlclxuICAgICdnYW1lJywgICAgICAgIyBJRCBvZiBwYXJlbnQgZWxlbWVudFxuICAgICdib290JywgICAgICAgIyBzdGF0ZVxuICAgIHRydWUsICAgICAgICAgIyB0cmFuc3BhcmVudFxuICAgIGZhbHNlLCAgICAgICAgIyBhbnRpYWxpYXNcbiAgICBudWxsICAgICAgICAgICMgcGh5c2ljc0NvbmZpZ1xuICApXG5cbiAgIyBjZG5cbiAgZ2FtZS5jZG4gPSBjZG5cbiAgZ2FtZS5ob3N0dXJsID0gaG9zdHVybFxuXG4gICMgZ2FtZSB2ZXJzaW9uXG4gIGdhbWUudmVyc2lvbiA9IHZlcnNpb25cblxuICAjIGRlYnVnXG4gIGdhbWUuZGVidWdNb2RlID0gZmFsc2VcbiAgIyBnYW1lLmRlYnVnTW9kZSA9IHRydWVcblxuICBnYW1lLmVuYWJsZU11c2ljID0gIWdhbWUuZGVidWdNb2RlXG4gIGdhbWUuZW5hYmxlU0ZYID0gIWdhbWUuZGVidWdNb2RlXG5cbiAgIyBjb25zdGFudHNcbiAgZ2FtZS5jb25zdGFudHMgPVxuICAgIFNUQVRFUzogWydib290JywgJ3ByZWxvYWQnLCAnaW50cm8nLCAnZ2FtZScsICdyZXNldCddXG4gICAgU1BSSVRFUzogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zcHJpdGVzJ1xuICAgIExFVkVMUzogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMnXG4gICAgU0ZYOiByZXF1aXJlICdjb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3NmeCdcblxuICAjIGRlZmF1bHQgbGV2ZWxcbiAgZ2FtZS5sZXZlbCA9IDFcblxuICAjIHJlcXVpcmUgc3RhdGVzIGFuZCBib290IVxuICBnYW1lLnN0YXRlLmFkZCBzdGF0ZSwgcmVxdWlyZShcIi4vc3RhdGVzLyN7c3RhdGV9LmNvZmZlZVwiKSBmb3Igc3RhdGUgaW4gZ2FtZS5jb25zdGFudHMuU1RBVEVTXG4gIGdhbWUuc3RhdGUuc3RhcnQgJ2Jvb3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGF1bmNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvbGF1bmNoLmNvZmZlZVxuICoqLyIsImNsYXNzIENvd2JveSBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgY3JlYXRlOiAtPlxuXG5cbm1vZHVsZS5leHBvcnRzID0gQ293Ym95XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9Db3dib3kuY29mZmVlXG4gKiovIiwiY2xhc3MgQm9vdFxuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgI0BzY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLkVYQUNUX0ZJVFxuICAgICNAc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkVcbiAgICBAc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTFxuXG4gICAgIyBzdGFydCBwcmVsb2FkXG4gICAgQHN0YXRlLnN0YXJ0ICdwcmVsb2FkJ1xuICAgIEBzY2FsZS5yZWZyZXNoKClcblxuICBwcmVsb2FkOiAtPlxuICAgICMgc2V0IGludGlhbCBzY2FsZVxuICAgIEBnYW1lLnNjYWxlcigpXG5cbm1vZHVsZS5leHBvcnRzID0gQm9vdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9ib290LmNvZmZlZVxuICoqLyIsIiMgU1BSSVRFU1xuQ293Ym95ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9Db3dib3kuY29mZmVlJ1xuIyBCdWxsZXQgPSByZXF1aXJlICcuLi9zcHJpdGVzL0J1bGxldC5jb2ZmZWUnXG4jIENhY3R1cyA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ2FjdHVzLmNvZmZlZSdcbiMgVHJlZSAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9UcmVlLmNvZmZlZSdcbiMgV2Fnb24gID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9XYWdvbi5jb2ZmZWUnXG5cbiMgSFVEXG4jIFRpbWVyICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVGltZXIuY29mZmVlJ1xuIyBBbW1vICAgPSByZXF1aXJlICcuLi9zcHJpdGVzL0FtbW8uY29mZmVlJ1xuXG5cbmNsYXNzIEdhbWVcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgY3JlYXRlOiAtPlxuICAgIFxuXG4gIHN0YXJ0OiAtPlxuXG4gIHVwZGF0ZTogLT5cblxuICBzZXR1cExldmVsOiAtPlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9nYW1lLmNvZmZlZVxuICoqLyIsImNsYXNzIFByZWxvYWRcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgY3JlYXRlOiAtPlxuICAgIEBsb2FkLmNyb3NzT3JpZ2luID0gQGdhbWUuaG9zdHVybCAgdW5sZXNzIEBnYW1lLmNkbiBpcyAnLydcblxuICAgICMgTE9BRCBTVFVGRlNcbiAgICBDRE4gPSBAZ2FtZS5jZG5cbiAgICAjIFNQUklURVNcbiAgICAjIGF0bGFzKGtleSwgdGV4dHVyZVVSTCwgYXRsYXNVUkwsIGF0bGFzRGF0YSwgZm9ybWF0KVxuICAgIHRleHR1cmVfdXJsID0gJy4uLy4uLy4uL2ltYWdlcy9hdGxhcy5wbmcnXG4gICAgYXRsYXNfZGF0YSA9IHJlcXVpcmUgJy4uL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWUnXG4gICAgIyBqc29uQXRsYXMgPSBKU09OLnN0cmluZ2lmeSBhdGxhc0RhdGFcbiAgICBAbG9hZC5hdGxhc0pTT05IYXNoICdhdGxhcycsIHRleHR1cmVfdXJsLCBudWxsLCBhdGxhc19kYXRhXG5cbiAgICAjIF8uZWFjaCBAZ2FtZS5jb25zdGFudHMuU1BSSVRFUywgKHNwcml0ZSkgPT5cbiAgICAjICAga2V5ID0gc3ByaXRlLmtleVxuICAgICMgICBhdGxhc191cmwgPSBcIiN7Q0ROfSN7c3ByaXRlLmF0bGFzX3VybH1cIlxuICAgICMgICBhdGxhc19kYXRhID0gc3ByaXRlLmF0bGFzX2RhdGFcbiAgICAjICAgIyBhdGxhc0pTT05IYXNoKGtleSwgdGV4dHVyZVVSTCwgYXRsYXNVUkwsIGF0bGFzRGF0YSlcbiAgICAjICAgYXNzZXQgPSBAbG9hZC5hdGxhc0pTT05IYXNoIGtleSwgbnVsbCwgYXRsYXNfdXJsLCBhdGxhc19kYXRhXG5cbiAgICAjIFNGWFxuICAgIF8uZWFjaCBAZ2FtZS5jb25zdGFudHMuU0ZYLCAoc2Z4KSA9PlxuICAgICAgYXNzZXQgPSBAbG9hZC5hdWRpbyBzZngsXG4gICAgICBbXCIje0NETn1hdWRpby8je3NmeH0ubXAzI3tAZ2FtZS52ZXJzaW9ufVwiLFxuICAgICAgXCIje0NETn1hdWRpby8je3NmeH0ub2dnI3tAZ2FtZS52ZXJzaW9ufVwiXVxuICAgICAgYXNzZXQuY3Jvc3NPcmlnaW4gPSBAbG9hZC5jcm9zc09yaWdpbiAgdW5sZXNzIEBnYW1lLmNkbiBpcyAnLydcblxuICB1cGRhdGU6IC0+XG4gICAgaWYgQGdhbWUuZGVidWdNb2RlXG4gICAgICBAc3RhdGUuc3RhcnQgJ2dhbWUnXG4gICAgZWxzZVxuICAgICAgQHN0YXRlLnN0YXJ0ICdpbnRybydcblxubW9kdWxlLmV4cG9ydHMgPSBQcmVsb2FkXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL3ByZWxvYWQuY29mZmVlXG4gKiovIiwiTGF1bmNoR2FtZSA9IHJlcXVpcmUgJy4vZ2FtZS9sYXVuY2guY29mZmVlJ1xuXG4jcmVhZHlcbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG5cdExhdW5jaEdhbWUoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9tYWluLmNvZmZlZVxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9ib290LmNvZmZlZVwiOiA5LFxuXHRcIi4vZ2FtZS5jb2ZmZWVcIjogMTAsXG5cdFwiLi9pbnRyby5jb2ZmZWVcIjogMTEsXG5cdFwiLi9wcmVsb2FkLmNvZmZlZVwiOiAxMixcblx0XCIuL3Jlc2V0LmNvZmZlZVwiOiAxM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxNTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcyBeXFwuXFwvLipcXC5jb2ZmZWUkXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX1wiXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=