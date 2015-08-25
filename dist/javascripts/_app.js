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

	module.exports = __webpack_require__(19);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = _;

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
	    '0': {
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
	    '1': {
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
	    '2': {
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
	    '3': {
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
	    '4': {
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
	    '5': {
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
	    '6': {
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
	    '7': {
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
	    '8': {
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
	    '9': {
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
	    'DRAW': {
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
	    'GAME': {
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
	    'GET_READY': {
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
	    'GOT_ME': {
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
	    'GUN_FIGHT': {
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
	    'INSERT_COIN': {
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
	    'OVER': {
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
	    'cactus': {
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
	    'dead/hit': {
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
	    'dead/rip': {
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
	    'tree': {
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
/* 4 */
/***/ function(module, exports) {

	var levels;
	
	levels = {};
	
	module.exports = levels;


/***/ },
/* 5 */
/***/ function(module, exports) {

	var sfx;
	
	sfx = {};
	
	module.exports = sfx;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var sprites;
	
	sprites = {};
	
	module.exports = sprites;


/***/ },
/* 7 */
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
	    SPRITES: __webpack_require__(6),
	    LEVELS: __webpack_require__(4),
	    SFX: __webpack_require__(5)
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
	    game.state.add(state, __webpack_require__(21)("./" + state + ".coffee"));
	  }
	  return game.state.start('boot');
	};
	
	module.exports = launch;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 8 */
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
	    x = this.player.is_player_one ? 92 : 816;
	    y = this.game.height - 45;
	    Ammo.__super__.constructor.call(this, this.game, x, y, key, frame);
	    this.cropRect = this.game.add.graphics(0, 0);
	    this.cropRect.lineStyle(0);
	    this.cropRect.beginFill("0xFF0000");
	    this.cropRect.drawRect(x, y, 0, this.height);
	    this.cropRect.endFill();
	    this.game.add.existing(this);
	    return this;
	  }
	
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
	    this.cropRect.beginFill("0xFF0000");
	    this.cropRect.drawRect(this.x, this.y, width, this.height);
	    return this.cropRect.endFill();
	  };
	
	  return Ammo;
	
	})(Phaser.Sprite);
	
	module.exports = Ammo;


/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var Ammo, Bullets, Cowboy, DELTA, FRAMERATE, PLAYER_ONE_CONTROLS, PLAYER_ONE_X, PLAYER_ONE_Y, PLAYER_TWO_CONTROLS, PLAYER_TWO_X, PLAYER_TWO_Y, SPEED, StateMachine,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Bullets = __webpack_require__(9);
	
	Ammo = __webpack_require__(8);
	
	StateMachine = __webpack_require__(20);
	
	PLAYER_ONE_X = 200;
	
	PLAYER_ONE_Y = 450;
	
	PLAYER_TWO_X = 888;
	
	PLAYER_TWO_Y = 450;
	
	SPEED = 60;
	
	DELTA = 15;
	
	FRAMERATE = 7;
	
	PLAYER_ONE_CONTROLS = {
	  move_up: 'W',
	  move_down: 'S',
	  move_left: 'A',
	  move_right: 'D',
	  aim_up: 'E',
	  aim_down: 'C',
	  shoot: 'F'
	};
	
	PLAYER_TWO_CONTROLS = {
	  move_up: 'I',
	  move_down: 'K',
	  move_left: 'J',
	  move_right: 'L',
	  aim_up: 'U',
	  aim_down: 'N',
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
	    this.body.collideWorldBounds = true;
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
	    this.gun_pos = ['low', 'medlow', 'med', 'medhigh', 'high'];
	    this.leg_pos = ['two', 'one', 'cross'];
	    this.gun_pos_index = 2;
	    this.leg_pos_index = 1;
	    this.wins = 0;
	    this.num_bullets = 6;
	    this.bullets = new Bullets(this.game, this.game_state, this);
	    this.ammo = new Ammo(this.game, this.game_state, this);
	    this.setupControls();
	    this.setupAnimations();
	    this.createStateMachine();
	    this.game.add.existing(this);
	    return this;
	  }
	
	  Cowboy.prototype.update = function() {
	    var current_time;
	    current_time = Date.now();
	    if (current_time - this.time > SPEED && !this.dead) {
	      if (this.direction.up && this.body.y > this.game_state.ceiling.y) {
	        this.body.y -= DELTA;
	      }
	      if (this.direction.down && this.body.y < this.game_state.floor.y - this.body.height) {
	        this.body.y += DELTA;
	      }
	      if (this.is_player_one) {
	        if (this.direction.left && this.body.x > 0) {
	          this.body.x -= DELTA;
	        }
	        if (this.direction.right && this.body.right < this.game_state.left_wall.body.x) {
	          this.body.x += DELTA;
	        }
	      } else {
	        if (this.direction.left && this.body.x > this.game_state.right_wall.body.x) {
	          this.body.x -= DELTA;
	        }
	        if (this.direction.right && this.body.x < this.game.width - this.body.width) {
	          this.body.x += DELTA;
	        }
	      }
	      this.time = current_time;
	    }
	    if (!(this.direction.up || this.direction.down || this.direction.left || this.direction.right)) {
	      this.moving = false;
	    }
	    if (this.moving && this.state.current !== 'moving' && !this.dead) {
	      this.move();
	    }
	    if (!this.moving && this.state.current !== 'idle' && !this.dead) {
	      return this.idle();
	    }
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
	    this.num_bullets = 6;
	    return this.ammo.reload;
	  };
	
	  Cowboy.prototype.animate_aim_up = function() {
	    var current_frame, i, index, len, pos, ref;
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
	  };
	
	  Cowboy.prototype.animate_aim_down = function() {
	    var current_frame, i, index, len, pos, ref;
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
	  };
	
	  Cowboy.prototype.shoot = function() {
	    if (this.num_bullets > 0) {
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
	    this.animations.add('die', [], FRAMERATE, false);
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
	            return _this.dead = false;
	          };
	        })(this)
	      }
	    });
	  };
	
	  return Cowboy;
	
	})(Phaser.Sprite);
	
	module.exports = Cowboy;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Ceiling, Cowboy, Floor, Game, WALL_OFFSET, Wall;
	
	Floor = __webpack_require__(12);
	
	Ceiling = __webpack_require__(10);
	
	Wall = __webpack_require__(13);
	
	WALL_OFFSET = 275;
	
	Cowboy = __webpack_require__(11);
	
	Game = (function() {
	  function Game() {}
	
	  Game.prototype.create = function() {
	    this.ceiling = new Ceiling(this.game, 45);
	    this.floor = new Floor(this.game, -45);
	    this.left_wall = new Wall(this.game, this.game.world.width / 2 - WALL_OFFSET);
	    this.right_wall = new Wall(this.game, this.game.world.width / 2 + WALL_OFFSET);
	    this.player_one = new Cowboy(this.game, this);
	    this.player_two = new Cowboy(this.game, this, false);
	    this.bullets = [this.player_one.bullets, this.player_two.bullets];
	    this.walls = [this.left_wall, this.right_wall];
	    this.surfaces = [this.ceiling, this.floor];
	    this.players = [this.player_one, this.player_two];
	    return this.start();
	  };
	
	  Game.prototype.start = function() {};
	
	  Game.prototype.update = function() {
	    this.game.physics.arcade.collide(this.bullets, this.surfaces);
	    return this.game.physics.arcade.collide(this.bullets, this.players, (function(_this) {
	      return function(player, bullet) {
	        var b, i, j, len, len1, ref, ref1;
	        ref = _this.player_one.bullets.children;
	        for (i = 0, len = ref.length; i < len; i++) {
	          b = ref[i];
	          b.kill();
	        }
	        ref1 = _this.player_two.bullets.children;
	        for (j = 0, len1 = ref1.length; j < len1; j++) {
	          b = ref1[j];
	          b.kill();
	        }
	        return player.die();
	      };
	    })(this));
	  };
	
	  Game.prototype.render = function() {
	    if (this.game.debugMode) {
	      this.game.debug.body(this.ceiling);
	      this.game.debug.body(this.floor);
	      this.game.debug.body(this.left_wall);
	      this.game.debug.body(this.right_wall);
	      this.game.debug.body(this.player_one);
	      this.game.debug.body(this.player_two);
	      this.game.debug.body(this.player_one.bullets);
	      return this.game.debug.body(this.player_two.bullets);
	    }
	  };
	
	  Game.prototype.setupLevel = function() {};
	
	  return Game;
	
	})();
	
	module.exports = Game;


/***/ },
/* 16 */
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
/* 17 */
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
	    atlas_data = __webpack_require__(3);
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var LaunchGame;
	
	LaunchGame = __webpack_require__(7);
	
	$(document).ready(function() {
	  console.log('all ready');
	  return LaunchGame();
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./boot.coffee": 14,
		"./game.coffee": 15,
		"./intro.coffee": 16,
		"./preload.coffee": 17,
		"./reset.coffee": 18
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
	webpackContext.id = 21;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWIwMjhhZTg4ZTg4YzBiNzA4MzciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2F0bGFzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3NmeC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvc3ByaXRlcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9sYXVuY2guY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9BbW1vLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQnVsbGV0cy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0NlaWxpbmcuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9Db3dib3kuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9GbG9vci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1dhbGwuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2Jvb3QuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2dhbWUuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2ludHJvLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9wcmVsb2FkLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9tYWluLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9+L2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9zdGF0ZS1tYWNoaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzIF5cXC5cXC8uKlxcLmNvZmZlZSQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG9COzs7Ozs7QUNBQSx5Qjs7Ozs7O0FDQUE7O0FBQUEsU0FDRTtHQUFBLFVBQ0U7S0FBQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQURGO0tBZ0JBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakJGO0tBZ0NBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakNGO0tBZ0RBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakRGO0tBZ0VBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakVGO0tBZ0ZBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakZGO0tBZ0dBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakdGO0tBZ0hBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakhGO0tBZ0lBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BaklGO0tBZ0pBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakpGO0tBZ0tBLFFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BaktGO0tBZ0xBLFFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakxGO0tBZ01BLGFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01Bak1GO0tBZ05BLFVBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01Bak5GO0tBZ09BLGFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01Bak9GO0tBZ1BBLGVBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BalBGO0tBZ1FBLFFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BalFGO0tBZ1JBLFFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BalJGO0tBZ1NBLFVBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxDQUZMO1NBR0EsS0FBSyxDQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssQ0FGTDtTQUdBLEtBQUssQ0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtRQWJGO01BalNGO0tBZ1RBLFVBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BalRGO0tB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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qYXZhc2NyaXB0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGFiMDI4YWU4OGU4OGMwYjcwODM3XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwialF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhdGxhcyA9XG4gICdmcmFtZXMnOlxuICAgICcwJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDQyXG4gICAgICAgICd5JzogMTc2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnMSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ5NFxuICAgICAgICAneSc6IDJcbiAgICAgICAgJ3cnOiAxNlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxNlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICcyJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDY4XG4gICAgICAgICd5JzogMTc2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnMyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ0MlxuICAgICAgICAneSc6IDIxOFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzQnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NjhcbiAgICAgICAgJ3knOiAyMThcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc1JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMTc0XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnNic6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEwMFxuICAgICAgICAneSc6IDIxNlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAyNThcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc4JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMzAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnOSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDMyOFxuICAgICAgICAneSc6IDE3MFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJ0RSQVcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMzZcbiAgICAgICAgJ3knOiAyXG4gICAgICAgICd3JzogMTU2XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTU2XG4gICAgICAgICdoJzogNDBcbiAgICAnR0FNRSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEzMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgJ0dFVF9SRUFEWSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgJ0dPVF9NRSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDI3NlxuICAgICAgICAneSc6IDQ0XG4gICAgICAgICd3JzogMjEyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjEyXG4gICAgICAgICdoJzogNDBcbiAgICAnR1VOX0ZJR0hUJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAnSU5TRVJUX0NPSU4nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDMzMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAzMzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDMzMlxuICAgICAgICAnaCc6IDQwXG4gICAgJ09WRVInOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyNTRcbiAgICAgICAgJ3knOiAxMjhcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICdhbW1vJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjc2XG4gICAgICAgICd5JzogODZcbiAgICAgICAgJ3cnOiAxODBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxODBcbiAgICAgICAgJ2gnOiA0MFxuICAgICdidWxsZXQnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0OTBcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDhcbiAgICAgICAgJ2gnOiA4XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDhcbiAgICAgICAgJ2gnOiA4XG4gICAgJ2NhY3R1cyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ1OFxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDMyXG4gICAgICAgICdoJzogODhcbiAgICAnZGVhZC9oaXQnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxOThcbiAgICAgICAgJ3knOiA1ODRcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzMlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzMlxuICAgICdkZWFkL3JpcCc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAxMjhcbiAgICAgICAgJ3cnOiAxMjhcbiAgICAgICAgJ2gnOiA0NFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTI4XG4gICAgICAgICdoJzogNDRcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxMjhcbiAgICAgICAgJ2gnOiA0NFxuICAgICdjb3dib3kvaGlnaC9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEzMlxuICAgICAgICAneSc6IDE3MFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9oaWdoL29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAxNzRcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvaGlnaC90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogMzEyXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDIzMFxuICAgICAgICAneSc6IDE3MFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9sb3cvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzI4XG4gICAgICAgICd5JzogMjM4XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMjZcbiAgICAgICAgJ3knOiAzMDhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkL2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjI0XG4gICAgICAgICd5JzogMzA4XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZC9vbmUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMjJcbiAgICAgICAgJ3knOiAzNzZcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkL3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEwMFxuICAgICAgICAneSc6IDQ0NlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRoaWdoL2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDQ1MFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRoaWdoL29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDE5OFxuICAgICAgICAneSc6IDQ0NlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRoaWdoL3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDI5NlxuICAgICAgICAneSc6IDUxNFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRsb3cvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzOTRcbiAgICAgICAgJ3knOiA1MTRcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkbG93L29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEwMFxuICAgICAgICAneSc6IDU4NFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRsb3cvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDU4OFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ3RyZWUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzNzZcbiAgICAgICAgJ3knOiAxMjhcbiAgICAgICAgJ3cnOiA2NFxuICAgICAgICAnaCc6IDEwOFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA2NFxuICAgICAgICAnaCc6IDEwOFxuICAgICd3YWdvbic6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQyMFxuICAgICAgICAneSc6IDM3NlxuICAgICAgICAndyc6IDg4XG4gICAgICAgICdoJzogOTZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDg4XG4gICAgICAgICdoJzogOTZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICdtZXRhJzpcbiAgICAnYXBwJzogJ2h0dHA6Ly93d3cuY29kZWFuZHdlYi5jb20vdGV4dHVyZXBhY2tlcidcbiAgICAndmVyc2lvbic6ICcxLjAnXG4gICAgJ2ltYWdlJzogJ2F0bGFzLnBuZydcbiAgICAnZm9ybWF0JzogJ1JHQkE4ODg4J1xuICAgICdzaXplJzpcbiAgICAgICd3JzogNTEyXG4gICAgICAnaCc6IDEwMjRcbiAgICAnc2NhbGUnOiAnMSdcbiAgICAnc21hcnR1cGRhdGUnOiAnJFRleHR1cmVQYWNrZXI6U21hcnRVcGRhdGU6MTA2YjdjMjcxNmM0MjM1NTkzNTNmMTRiNDQxM2QyNDM6ZWYzMDdiMGFiZDEyMDc5ODgxMWEzNWRiNWU4NjA2Y2Y6Y2JjZTZiNTNmMGY0OWUwYmYxNTE3M2MyNWM0MWY4NzYkJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF0bGFzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2F0bGFzLmNvZmZlZVxuICoqLyIsImxldmVscyA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gbGV2ZWxzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2xldmVscy5jb2ZmZWVcbiAqKi8iLCJzZnggPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNmeFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZnguY29mZmVlXG4gKiovIiwic3ByaXRlcyA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlcyBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvc3ByaXRlcy5jb2ZmZWVcbiAqKi8iLCIkd2luZG93ID0gJCh3aW5kb3cpXG5cbiMgbW9iaWxlIGZsYWdcbmlzTW9iaWxlID0gLT5cbiAgaWYoIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApXG4gICAgdHJ1ZVxuICBlbHNlXG4gICAgZmFsc2VcblxubGF1bmNoID0gKGNkbj1cIi9cIiwgdmVyc2lvbj1cIj92PTAuMC4wXCIpIC0+XG5cbiAgIyA0OjNcbiAgZ2FtZV93aWR0aCA9IDEwODhcbiAgZ2FtZV9oZWlnaHQgPSA4MTZcblxuICAjIENvbnN0cnVjdCBHYW1lXG4gIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXG4gICAgZ2FtZV93aWR0aCwgICAjIHdpZHRoXG4gICAgZ2FtZV9oZWlnaHQsICAjIGhlaWdodFxuICAgIFBoYXNlci5BVVRPLCAgIyByZW5kZXJlclxuICAgICdnYW1lJywgICAgICAgIyBJRCBvZiBwYXJlbnQgZWxlbWVudFxuICAgICdib290JywgICAgICAgIyBzdGF0ZVxuICAgIGZhbHNlLCAgICAgICAgIyB0cmFuc3BhcmVudFxuICAgIGZhbHNlLCAgICAgICAgIyBhbnRpYWxpYXNcbiAgICBudWxsICAgICAgICAgICMgcGh5c2ljc0NvbmZpZ1xuICApXG5cbiAgIyBjZG5cbiAgZ2FtZS5jZG4gPSBjZG5cbiAgZ2FtZS5ob3N0dXJsID0gdW5kZWZpbmVkICNob3N0dXJsXG5cbiAgIyBnYW1lIHZlcnNpb25cbiAgZ2FtZS52ZXJzaW9uID0gdmVyc2lvblxuXG4gICMgZGVidWdcbiAgZ2FtZS5kZWJ1Z01vZGUgPSBmYWxzZVxuICBnYW1lLmRlYnVnTW9kZSA9IHRydWVcblxuICBnYW1lLmVuYWJsZU11c2ljID0gIWdhbWUuZGVidWdNb2RlXG4gIGdhbWUuZW5hYmxlU0ZYID0gIWdhbWUuZGVidWdNb2RlXG5cbiAgIyBjb25zdGFudHNcbiAgZ2FtZS5jb25zdGFudHMgPVxuICAgIFNUQVRFUzogWydib290JywgJ3ByZWxvYWQnLCAnaW50cm8nLCAnZ2FtZScsICdyZXNldCddXG4gICAgU1BSSVRFUzogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zcHJpdGVzJ1xuICAgIExFVkVMUzogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMnXG4gICAgU0ZYOiByZXF1aXJlICdjb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3NmeCdcblxuICAjIGRlZmF1bHQgbGV2ZWxcbiAgZ2FtZS5sZXZlbCA9IDFcblxuICAjIGtlZXAgdGhlIGdhbWUgd2l0aGluIHRoZSBwYWdlXG4gIGdhbWUuc2NhbGVyID0gLT5cbiAgICAkZ2FtZSA9ICQoXCIjZ2FtZVwiKVxuICAgICRjYW52YXMgPSAkKFwiY2FudmFzXCIpXG4gICAgJHdpbmRvdyA9ICQod2luZG93KVxuXG4gICAgaWYgIWlzTW9iaWxlKClcbiAgICAgICRnYW1lID0gJChcIiNnYW1lXCIpXG4gICAgICAkY2FudmFzID0gJChcImNhbnZhc1wiKVxuICAgICAgJHdpbmRvdyA9ICQod2luZG93KVxuXG4gICAgICBpZiAkZ2FtZS5oZWlnaHQoKSA+ICR3aW5kb3cuaGVpZ2h0KCkgLSAxNTBcbiAgICAgICAgJGdhbWUuY3NzKFwibWF4LWhlaWdodFwiLCAoJHdpbmRvdy5oZWlnaHQoKSAtIDE1MCkgKyBcInB4XCIpXG4gICAgICBlbHNlXG4gICAgICAgICRnYW1lLmNzcyhcIm1heC1oZWlnaHRcIiwgXCJhdXRvXCIpXG5cbiAgIyByZXF1aXJlIHN0YXRlcyBhbmQgYm9vdCFcbiAgZ2FtZS5zdGF0ZS5hZGQgc3RhdGUsIHJlcXVpcmUoXCIuL3N0YXRlcy8je3N0YXRlfS5jb2ZmZWVcIikgZm9yIHN0YXRlIGluIGdhbWUuY29uc3RhbnRzLlNUQVRFU1xuICBnYW1lLnN0YXRlLnN0YXJ0ICdib290J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxhdW5jaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2xhdW5jaC5jb2ZmZWVcbiAqKi8iLCJjbGFzcyBBbW1vIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHBsYXllcikgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnYW1tbydcbiAgICB4ID0gaWYgQHBsYXllci5pc19wbGF5ZXJfb25lIHRoZW4gOTIgZWxzZSA4MTZcbiAgICB5ID0gQGdhbWUuaGVpZ2h0IC0gNDVcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBmcmFtZVxuXG4gICAgIyBkcmF3IGNyb3AgcmVjdFxuICAgIEBjcm9wUmVjdCA9IEBnYW1lLmFkZC5ncmFwaGljcyAwLCAwXG4gICAgQGNyb3BSZWN0LmxpbmVTdHlsZSAwXG4gICAgQGNyb3BSZWN0LmJlZ2luRmlsbCBcIjB4RkYwMDAwXCJcbiAgICBAY3JvcFJlY3QuZHJhd1JlY3QgeCwgeSwgMCwgQGhlaWdodFxuICAgIEBjcm9wUmVjdC5lbmRGaWxsKClcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG4gICAgcmV0dXJuIEBcblxuICBjcm9wOiAtPlxuICAgIHdpZHRoID0gQHdpZHRoIC0gQHBsYXllci5udW1fYnVsbGV0cyAvIDYgKiBAd2lkdGhcbiAgICBAZHJhd1JlY3Qgd2lkdGhcblxuICByZWxvYWQ6IC0+IEBjcm9wUmVjdC5jbGVhcigpXG5cbiAgZHJhd1JlY3Q6ICh3aWR0aCkgLT5cbiAgICBAY3JvcFJlY3QubGluZVN0eWxlIDBcbiAgICBAY3JvcFJlY3QuYmVnaW5GaWxsIFwiMHhGRjAwMDBcIlxuICAgIEBjcm9wUmVjdC5kcmF3UmVjdCBAeCwgQHksIHdpZHRoLCBAaGVpZ2h0XG4gICAgQGNyb3BSZWN0LmVuZEZpbGwoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFtbW9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0FtbW8uY29mZmVlXG4gKiovIiwiIyBidWxsZXQgcG9zaXRpb24gY29uZmlnXG5HVU5fUE9TX0NPTkZJRyA9XG4gIGhpZ2g6ICAgIHt4OiA0NSwgeTogMTUsIGRlZzogLTUyfVxuICBtZWRoaWdoOiB7eDogNTAsIHk6IDM1LCBkZWc6IC0yNn1cbiAgbWVkOiAgICAge3g6IDU1LCB5OiA0NiwgZGVnOiAwfVxuICBtZWRsb3c6ICB7eDogNTAsIHk6IDc1LCBkZWc6IDIyfVxuICBsb3c6ICAgICB7eDogNDUsIHk6IDg4LCBkZWc6IDQyfVxuXG4jIHNwZWVkIG9mIGZpcmVkIGJ1bGxldFxuU1BFRUQgPSAxMDAwXG5cbmNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBwbGF5ZXIpIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gJ2J1bGxldCdcbiAgICBzdXBlciBAZ2FtZSwgQHBsYXllci5ib2R5LngsIEBwbGF5ZXIuYm9keS55LCBrZXksIGZyYW1lXG5cbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBAXG5cbiAgICAjIHZpc2liaWxpdHkgdmFyXG4gICAgQHRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAjIGJvdW5jZSBvZmYgc3VyZmFjZXNcbiAgICBAYm9keS5ib3VuY2Uuc2V0IDFcblxuICAgICMgcGxheWVyXG4gICAgQGlzX3BsYXllcl9vbmUgPSBAcGxheWVyLmlzX3BsYXllcl9vbmVcblxuICAgICMgYm91bmRzXG4gICAgQG91dE9mQm91bmRzS2lsbCA9IHRydWVcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgIEBraWxsKClcblxuICAgIHJldHVybiBAXG5cbiAgc2hvb3Q6IC0+XG4gICAgZ3VuX3BvcyA9IEBwbGF5ZXIuZ3VuX3Bvc1tAcGxheWVyLmd1bl9wb3NfaW5kZXhdXG4gICAgcG9zID0gR1VOX1BPU19DT05GSUdbZ3VuX3Bvc11cbiAgICB4ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBAcGxheWVyLmJvZHkucmlnaHQgKyBwb3MueCBlbHNlIEBwbGF5ZXIuYm9keS54IC0gcG9zLnhcbiAgICB5ID0gQHBsYXllci5ib2R5LnkgKyBwb3MueVxuICAgIGFuZ2xlID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBwb3MuZGVnIGVsc2UgMTgwIC0gcG9zLmRlZ1xuICAgICMgcmV2aXZlIHRoZSBidWxsZXRcbiAgICBAcmVzZXQgeCwgeVxuICAgICMgc2V0IHZlbG9jaXR5XG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUudmVsb2NpdHlGcm9tQW5nbGUgYW5nbGUsIFNQRUVELCBAYm9keS52ZWxvY2l0eVxuXG5jbGFzcyBCdWxsZXRzIGV4dGVuZHMgUGhhc2VyLkdyb3VwXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSAtPlxuICAgIHN1cGVyIEBnYW1lLCBudWxsLCAnYnVsbGV0cycsIGZhbHNlLCB0cnVlLCBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keVxuICAgIEBhZGQgbmV3IEJ1bGxldChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBwbGF5ZXIpIGZvciBuIGluIFsxLi5AcGxheWVyLm51bV9idWxsZXRzXVxuXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuICBzaG9vdDogLT4gQGdldEZpcnN0RGVhZCgpLnNob290KClcblxubW9kdWxlLmV4cG9ydHMgPSBCdWxsZXRzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9CdWxsZXRzLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ2VpbGluZyBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgeV9vZmZzZXQ9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgMCwgeV9vZmZzZXRcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICBAYm9keS5zZXRTaXplIEBnYW1lLndvcmxkLndpZHRoLCA1LCAwLCAwXG4gICAgQGJvZHkuYWxsb3dHcmF2aXR5ID0gZmFsc2VcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0NlaWxpbmcuY29mZmVlXG4gKiovIiwiQnVsbGV0cyA9IHJlcXVpcmUgJy4vQnVsbGV0cy5jb2ZmZWUnXG5BbW1vID0gcmVxdWlyZSAnLi9BbW1vLmNvZmZlZSdcblN0YXRlTWFjaGluZSA9IHJlcXVpcmUgJ2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZSdcblxuIyBQT1NJVElPTiBDT05TVEFOVFNcblBMQVlFUl9PTkVfWCA9IDIwMFxuUExBWUVSX09ORV9ZID0gNDUwXG5QTEFZRVJfVFdPX1ggPSA4ODhcblBMQVlFUl9UV09fWSA9IDQ1MFxuXG4jIE1PVkVNRU5UIENPTlNUQU5UU1xuU1BFRUQgPSA2MFxuREVMVEEgPSAxNVxuRlJBTUVSQVRFID0gN1xuXG4jIENPTlRST0wgQ09OU1RBTlRTXG5QTEFZRVJfT05FX0NPTlRST0xTID1cbiAgbW92ZV91cDogJ1cnXG4gIG1vdmVfZG93bjogJ1MnXG4gIG1vdmVfbGVmdDogJ0EnXG4gIG1vdmVfcmlnaHQ6ICdEJ1xuICBhaW1fdXA6ICdFJ1xuICBhaW1fZG93bjogJ0MnXG4gIHNob290OiAnRidcblxuUExBWUVSX1RXT19DT05UUk9MUyA9XG4gIG1vdmVfdXA6ICdJJ1xuICBtb3ZlX2Rvd246ICdLJ1xuICBtb3ZlX2xlZnQ6ICdKJ1xuICBtb3ZlX3JpZ2h0OiAnTCdcbiAgYWltX3VwOiAnVSdcbiAgYWltX2Rvd246ICdOJ1xuICBzaG9vdDogJ0gnXG5cbmNsYXNzIENvd2JveSBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBpc19wbGF5ZXJfb25lPXRydWUpIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gJ2Nvd2JveS9tZWQvdHdvJ1xuICAgIHggPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIFBMQVlFUl9PTkVfWCBlbHNlIFBMQVlFUl9UV09fWFxuICAgIHkgPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIFBMQVlFUl9PTkVfWSBlbHNlIFBMQVlFUl9UV09fWVxuICAgIHN1cGVyIEBnYW1lLCB4LCB5LCBrZXksIGZyYW1lXG5cbiAgICAjIGVuYWJsZSBhcmNhZGUgcGh5c2ljc1xuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgICMgc2F2ZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHNwcml0ZSBib2R5XG4gICAgQHdpZHRoID0gQGJvZHkud2lkdGhcbiAgICBAaGVpZ2h0ID0gQGJvZHkuaGVpZ2h0XG4gICAgIyBjaGFuZ2UgYm9keSBzaXplIGZvciBtb3JlIGFjY3VyYXRlIGhpdCBjb2xsaXNpb25cbiAgICBAYm9keS5zZXRTaXplIDQ1LCAxMzYsIDI1LCAwXG4gICAgQGJvZHkuc2V0U2l6ZSA0NSwgMTM2LCAtMjUsIDAgaWYgQGlzX3BsYXllcl9vbmVcbiAgICAjIGNvbGxpZGUgd2l0aCB3b3JsZFxuICAgIEBib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWVcbiAgICAjIGRvbid0IGxldCBidWxsZXQgcGh5c2ljcyBwdXNoIHlhIGJhY2tcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgIyBzZXQgYW5jaG9yIHRvIGhvcml6b250YWwgY2VudGVyIHNvIHNwcml0ZSBmbGlwcyBhcm91bmQgaXRzIG1pZGRsZVxuICAgIEBhbmNob3Iuc2V0VG8gLjUsIDFcbiAgICAjIGZsaXAgc3ByaXRlIGlmIGlzIHBsYXllciB0d29cbiAgICBAc2NhbGUueCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gLTEgZWxzZSAxXG5cbiAgICAjIGRpcmVjdGlvbiBvYmplY3RcbiAgICBAZGlyZWN0aW9uID1cbiAgICAgIHVwOiBmYWxzZVxuICAgICAgZG93bjogZmFsc2VcbiAgICAgIGxlZnQ6IGZhbHNlXG4gICAgICByaWdodDogZmFsc2VcblxuICAgICMgYWltIG9iamVjdFxuICAgIEBhaW0gPVxuICAgICAgdXA6IGZhbHNlXG4gICAgICBkb3duOiBmYWxzZVxuXG4gICAgIyBtb3ZlbWVudCB2YXJzXG4gICAgQHRpbWUgPSBEYXRlLm5vdygpXG4gICAgQG1vdmluZyA9IGZhbHNlXG4gICAgQGRlYWQgPSBmYWxzZVxuXG4gICAgIyBmcmFtZSB2YXJzXG4gICAgQGd1bl9wb3MgPSBbJ2xvdycsJ21lZGxvdycsJ21lZCcsJ21lZGhpZ2gnLCdoaWdoJ11cbiAgICBAbGVnX3BvcyA9IFsndHdvJywnb25lJywnY3Jvc3MnXVxuICAgIEBndW5fcG9zX2luZGV4ID0gMlxuICAgIEBsZWdfcG9zX2luZGV4ID0gMVxuXG4gICAgIyBodWQgdmFyc1xuICAgIEB3aW5zID0gMFxuICAgIEBudW1fYnVsbGV0cyA9IDZcbiAgICBAYnVsbGV0cyA9IG5ldyBCdWxsZXRzIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQFxuICAgIEBhbW1vID0gbmV3IEFtbW8gQGdhbWUsIEBnYW1lX3N0YXRlLCBAXG5cbiAgICAjIHNldHVwIGNvbnRyb2xzXG4gICAgQHNldHVwQ29udHJvbHMoKVxuICAgICMgc2V0dXAgYW5pbWF0aW9uc1xuICAgIEBzZXR1cEFuaW1hdGlvbnMoKVxuICAgICMgY3JlYXRlIHN0YXRlIG1hY2hpbmVcbiAgICBAY3JlYXRlU3RhdGVNYWNoaW5lKClcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgICMgQGtpbGwoKVxuXG4gICAgcmV0dXJuIEBcblxuICB1cGRhdGU6IC0+XG4gICAgIyBoYW5kbGUgaW5jcmVtZW50YWwgbW92ZW1lbnRcbiAgICBjdXJyZW50X3RpbWUgPSBEYXRlLm5vdygpXG4gICAgaWYgY3VycmVudF90aW1lIC0gQHRpbWUgPiBTUEVFRCBhbmQgIUBkZWFkXG4gICAgICBAYm9keS55IC09IERFTFRBIGlmIEBkaXJlY3Rpb24udXAgICAgYW5kIEBib2R5LnkgPiBAZ2FtZV9zdGF0ZS5jZWlsaW5nLnlcbiAgICAgIEBib2R5LnkgKz0gREVMVEEgaWYgQGRpcmVjdGlvbi5kb3duICBhbmQgQGJvZHkueSA8IEBnYW1lX3N0YXRlLmZsb29yLnkgLSBAYm9keS5oZWlnaHRcbiAgICAgIGlmIEBpc19wbGF5ZXJfb25lXG4gICAgICAgIEBib2R5LnggLT0gREVMVEEgaWYgQGRpcmVjdGlvbi5sZWZ0ICBhbmQgQGJvZHkueCA+IDBcbiAgICAgICAgQGJvZHkueCArPSBERUxUQSBpZiBAZGlyZWN0aW9uLnJpZ2h0IGFuZCBAYm9keS5yaWdodCA8IEBnYW1lX3N0YXRlLmxlZnRfd2FsbC5ib2R5LnhcbiAgICAgIGVsc2VcbiAgICAgICAgQGJvZHkueCAtPSBERUxUQSBpZiBAZGlyZWN0aW9uLmxlZnQgIGFuZCBAYm9keS54ID4gQGdhbWVfc3RhdGUucmlnaHRfd2FsbC5ib2R5LnhcbiAgICAgICAgQGJvZHkueCArPSBERUxUQSBpZiBAZGlyZWN0aW9uLnJpZ2h0IGFuZCBAYm9keS54IDwgQGdhbWUud2lkdGggLSBAYm9keS53aWR0aFxuICAgICAgIyBAYW5pbWF0ZV9haW1fdXAoKSAgaWYgQGFpbS51cFxuICAgICAgIyBAYW5pbWF0ZV9haW1fZG93bigpIGlmIEBhaW0uZG93blxuICAgICAgQHRpbWUgPSBjdXJyZW50X3RpbWVcblxuICAgICMgaXMgdGhlIHBsYXllciBtb3Zpbmc/XG4gICAgQG1vdmluZyA9IGZhbHNlIHVubGVzcyBAZGlyZWN0aW9uLnVwIHx8IEBkaXJlY3Rpb24uZG93biB8fCBAZGlyZWN0aW9uLmxlZnQgfHwgQGRpcmVjdGlvbi5yaWdodFxuXG4gICAgIyB0cmlnZ2VyIG1vdmUgYW5pbWF0aW9uXG4gICAgQG1vdmUoKSBpZiAgQG1vdmluZyBhbmQgQHN0YXRlLmN1cnJlbnQgIT0gJ21vdmluZycgYW5kICFAZGVhZFxuICAgIEBpZGxlKCkgaWYgIUBtb3ZpbmcgYW5kIEBzdGF0ZS5jdXJyZW50ICE9ICdpZGxlJyAgIGFuZCAhQGRlYWRcblxuICAjIGNoYW5nZSBzdGF0ZVxuICBtb3ZlOiAgICAgICAgICAgLT4gQHN0YXRlLl9tb3ZlKClcbiAgaWRsZTogICAgICAgICAgIC0+IEBzdGF0ZS5faWRsZSgpXG4gIGRpZTogICAgICAgICAgICAtPiBAc3RhdGUuX2RpZSgpXG5cbiAgIyBjb250cm9sIGRpcmVjdGlvblxuICBtb3ZlX3VwOiAgICAgICAgLT4gQGRpcmVjdGlvbi51cCAgICA9IHRydWVcbiAgbW92ZV9sZWZ0OiAgICAgIC0+IEBkaXJlY3Rpb24ubGVmdCAgPSB0cnVlXG4gIG1vdmVfcmlnaHQ6ICAgICAtPiBAZGlyZWN0aW9uLnJpZ2h0ID0gdHJ1ZVxuICBtb3ZlX2Rvd246ICAgICAgLT4gQGRpcmVjdGlvbi5kb3duICA9IHRydWVcbiAgbW92ZV91cF9vZmY6ICAgIC0+IEBkaXJlY3Rpb24udXAgICAgPSBmYWxzZVxuICBtb3ZlX2xlZnRfb2ZmOiAgLT4gQGRpcmVjdGlvbi5sZWZ0ICA9IGZhbHNlXG4gIG1vdmVfcmlnaHRfb2ZmOiAtPiBAZGlyZWN0aW9uLnJpZ2h0ID0gZmFsc2VcbiAgbW92ZV9kb3duX29mZjogIC0+IEBkaXJlY3Rpb24uZG93biAgPSBmYWxzZVxuXG4gIGFpbV91cDogICAgICAgICAtPiBAYW5pbWF0ZV9haW1fdXAoKVxuICBhaW1fZG93bjogICAgICAgLT4gQGFuaW1hdGVfYWltX2Rvd24oKVxuICAjIGFpbV91cDogICAgICAgICAtPiBAYWltLnVwICAgICAgICAgID0gdHJ1ZVxuICAjIGFpbV9kb3duOiAgICAgICAtPiBAYWltLmRvd24gICAgICAgID0gdHJ1ZVxuICAjIGFpbV91cF9vZmY6ICAgICAtPiBAYWltLnVwICAgICAgICAgID0gZmFsc2VcbiAgIyBhaW1fZG93bl9vZmY6ICAgLT4gQGFpbS5kb3duICAgICAgICA9IGZhbHNlXG5cbiAgIyBmdWxsIGFtbW8hXG4gIHJlbG9hZDogLT5cbiAgICBAbnVtX2J1bGxldHMgPSA2XG4gICAgQGFtbW8ucmVsb2FkXG5cbiAgIyBoYW5kbGUgYWltaW5nIGFuaW1hdGlvbnNcbiAgYW5pbWF0ZV9haW1fdXA6IC0+XG4gICAgY3VycmVudF9mcmFtZSA9IEBhbmltYXRpb25zLmN1cnJlbnRGcmFtZS5uYW1lXG4gICAgQGd1bl9wb3NfaW5kZXggKz0gMSBpZiBAZ3VuX3Bvc19pbmRleCA8IEBndW5fcG9zLmxlbmd0aCAtIDFcblxuICAgIGZvciBwb3MsIGluZGV4IGluIEBsZWdfcG9zXG4gICAgICBAbGVnX3Bvc19pbmRleCA9IGluZGV4XG4gICAgICBicmVhayBpZiBjdXJyZW50X2ZyYW1lLm1hdGNoIHBvc1xuXG4gICAgQGFuaW1hdGlvbnMuc3RvcCgpXG4gICAgQGFuaW1hdGlvbnMucGxheSBcIm1vdmUtI3tAZ3VuX3Bvc1tAZ3VuX3Bvc19pbmRleF19XCJcbiAgICBAYW5pbWF0aW9ucy5uZXh0IEBsZWdfcG9zX2luZGV4XG5cbiAgYW5pbWF0ZV9haW1fZG93bjogLT5cbiAgICBjdXJyZW50X2ZyYW1lID0gQGFuaW1hdGlvbnMuY3VycmVudEZyYW1lLm5hbWVcbiAgICBAZ3VuX3Bvc19pbmRleCAtPSAxIGlmIEBndW5fcG9zX2luZGV4ID4gMFxuXG4gICAgZm9yIHBvcywgaW5kZXggaW4gQGxlZ19wb3NcbiAgICAgIEBsZWdfcG9zX2luZGV4ID0gaW5kZXhcbiAgICAgIGJyZWFrIGlmIGN1cnJlbnRfZnJhbWUubWF0Y2ggcG9zXG5cbiAgICBAYW5pbWF0aW9ucy5zdG9wKClcbiAgICBAYW5pbWF0aW9ucy5wbGF5IFwibW92ZS0je0BndW5fcG9zW0BndW5fcG9zX2luZGV4XX1cIlxuICAgIEBhbmltYXRpb25zLm5leHQgQGxlZ19wb3NfaW5kZXhcblxuICAjIHNob290IVxuICBzaG9vdDogLT5cbiAgICBpZiBAbnVtX2J1bGxldHMgPiAwXG4gICAgICBAbnVtX2J1bGxldHMgLT0gMVxuICAgICAgQGFtbW8uY3JvcCgpXG4gICAgICBAYnVsbGV0cy5zaG9vdCgpXG5cbiAgc2V0dXBDb250cm9sczogLT5cbiAgICAjIG1hcCBjb250cm9sIGtleXNcbiAgICBjb250cm9scyA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gUExBWUVSX09ORV9DT05UUk9MUyBlbHNlIFBMQVlFUl9UV09fQ09OVFJPTFNcbiAgICBfLmVhY2ggY29udHJvbHMsIChrZXksIGFjdGlvbikgPT5cbiAgICAgIGlucHV0ID0gQGdhbWVfc3RhdGUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5IFBoYXNlci5LZXlib2FyZFtrZXldXG4gICAgICBpbnB1dC5vbkRvd24uYWRkID0+IEBbYWN0aW9uXSgpXG4gICAgICBpbnB1dC5vbkRvd24uYWRkID0+IEBtb3ZpbmcgPSB0cnVlIGlmIGFjdGlvbi5tYXRjaCAnbW92ZSdcbiAgICAgIGlucHV0Lm9uVXAuYWRkICAgPT4gQFtcIiN7YWN0aW9ufV9vZmZcIl0oKSBpZiBhY3Rpb24ubWF0Y2ggJ21vdmUnXG4gICAgICAjIGlucHV0Lm9uVXAuYWRkICAgPT4gQFtcIiN7YWN0aW9ufV9vZmZcIl0oKVxuXG4gIHNldHVwQW5pbWF0aW9uczogLT5cbiAgICAjIGRpZSBhbmltYXRpb25zXG4gICAgQGFuaW1hdGlvbnMuYWRkICdkaWUnLCBbXG5cbiAgICBdLCBGUkFNRVJBVEUsIGZhbHNlXG5cbiAgICAjIG1vdmUgYW5pbWF0aW5vc1xuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1oaWdoJywgW1xuICAgICAgJ2Nvd2JveS9oaWdoL3R3bydcbiAgICAgICdjb3dib3kvaGlnaC9vbmUnXG4gICAgICAnY293Ym95L2hpZ2gvY3Jvc3MnXG4gICAgICAnY293Ym95L2hpZ2gvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1sb3cnLCBbXG4gICAgICAnY293Ym95L2xvdy90d28nXG4gICAgICAnY293Ym95L2xvdy9vbmUnXG4gICAgICAnY293Ym95L2xvdy9jcm9zcydcbiAgICAgICdjb3dib3kvbG93L29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbWVkaGlnaCcsIFtcbiAgICAgICdjb3dib3kvbWVkaGlnaC90d28nXG4gICAgICAnY293Ym95L21lZGhpZ2gvb25lJ1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbWVkbG93JywgW1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvdHdvJ1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvb25lJ1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvY3Jvc3MnXG4gICAgICAnY293Ym95L21lZGxvdy9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLW1lZCcsIFtcbiAgICAgICdjb3dib3kvbWVkL3R3bydcbiAgICAgICdjb3dib3kvbWVkL29uZSdcbiAgICAgICdjb3dib3kvbWVkL2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9tZWQvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuXG4gIGNyZWF0ZVN0YXRlTWFjaGluZTogLT5cbiAgICBAc3RhdGUgPSBTdGF0ZU1hY2hpbmUuY3JlYXRlXG4gICAgICBpbml0aWFsOiAnX2lkbGUnXG4gICAgICBldmVudHM6IFtcbiAgICAgICAgeyBuYW1lOiAnX2lkbGUnLCBmcm9tOiAnKicsIHRvOiAnaWRsaW5nJyB9XG4gICAgICAgIHsgbmFtZTogJ19tb3ZlJywgZnJvbTogJyonLCB0bzogJ21vdmluZycgfVxuICAgICAgICB7IG5hbWU6ICdfZGllJywgIGZyb206ICcqJywgdG86ICdkeWluZycgIH0gXVxuICAgICAgY2FsbGJhY2tzOlxuICAgICAgICBvbl9pZGxlOiAoZXZlbnQsIGZyb20sIHRvKSA9PiBAYW5pbWF0aW9ucy5zdG9wIG51bGwsIHRydWVcbiAgICAgICAgb25fbW92ZTogKGV2ZW50LCBmcm9tLCB0bykgPT4gQHBsYXkgXCJtb3ZlLSN7QGd1bl9wb3NbQGd1bl9wb3NfaW5kZXhdfVwiXG4gICAgICAgIG9uX2RpZTogKGV2ZW50LCBmcm9tLCB0bykgPT4gQGRlYWQgPSBmYWxzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvd2JveVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ293Ym95LmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRmxvb3IgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIHlfb2Zmc2V0PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIDAsIEBnYW1lLmhlaWdodCArIHlfb2Zmc2V0XG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuc2V0U2l6ZSBAZ2FtZS53b3JsZC53aWR0aCwgNSwgMCwgMFxuICAgIEBib2R5LmFsbG93R3Jhdml0eSA9IGZhbHNlXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9GbG9vci5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhbGwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIHhfb2Zmc2V0PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIHhfb2Zmc2V0LCAwXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuc2V0U2l6ZSAxLCBAZ2FtZS53b3JsZC5oZWlnaHQsIDAsIDBcbiAgICBAYm9keS5hbGxvd0dyYXZpdHkgPSBmYWxzZVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvV2FsbC5jb2ZmZWVcbiAqKi8iLCJjbGFzcyBCb290XG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICAjIHNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIGJsYWNrXG4gICAgQGdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAwMDAnXG5cbiAgICAjIFNjYWxlIHRoZSBnYW1lIGluIHRoZSBicm93c2VyXG4gICAgQHNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWVcbiAgICBAc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTFxuXG4gICAgIyBzdGFydCBwcmVsb2FkXG4gICAgQHN0YXRlLnN0YXJ0ICdwcmVsb2FkJ1xuXG4gIHByZWxvYWQ6IC0+XG4gICAgIyBzZXQgaW50aWFsIHNjYWxlXG4gICAgQGdhbWUuc2NhbGVyKClcblxubW9kdWxlLmV4cG9ydHMgPSBCb290XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2Jvb3QuY29mZmVlXG4gKiovIiwiIyBCT1VORFNcbkZsb29yICAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9GbG9vci5jb2ZmZWUnXG5DZWlsaW5nICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ2VpbGluZy5jb2ZmZWUnXG5XYWxsICAgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2FsbC5jb2ZmZWUnXG5XQUxMX09GRlNFVCA9IDI3NVxuXG4jIEhVRFxuIyBUaW1lciAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RpbWVyLmNvZmZlZSdcbiMgU2NvcmUgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9TY29yZS5jb2ZmZWUnXG5cbiMgU1BSSVRFU1xuQ293Ym95ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9Db3dib3kuY29mZmVlJ1xuIyBDYWN0dXMgPSByZXF1aXJlICcuLi9zcHJpdGVzL0NhY3R1cy5jb2ZmZWUnXG4jIFRyZWUgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVHJlZS5jb2ZmZWUnXG4jIFdhZ29uICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2Fnb24uY29mZmVlJ1xuXG5jbGFzcyBHYW1lXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICAjIGNyZWF0ZSB0aGUgYm91bmRzXG4gICAgQGNlaWxpbmcgICAgPSBuZXcgQ2VpbGluZyBAZ2FtZSwgNDVcbiAgICBAZmxvb3IgICAgICA9IG5ldyBGbG9vciBAZ2FtZSwgLTQ1XG4gICAgQGxlZnRfd2FsbCAgPSBuZXcgV2FsbCBAZ2FtZSwgQGdhbWUud29ybGQud2lkdGggLyAyIC0gV0FMTF9PRkZTRVRcbiAgICBAcmlnaHRfd2FsbCA9IG5ldyBXYWxsIEBnYW1lLCBAZ2FtZS53b3JsZC53aWR0aCAvIDIgICsgV0FMTF9PRkZTRVRcblxuICAgICMgc2V0dXAgdGhlIGh1ZFxuXG4gICAgIyBjcmVhdGUgdGhlIHBsYXllcnNcbiAgICBAcGxheWVyX29uZSA9IG5ldyBDb3dib3kgQGdhbWUsIEBcbiAgICBAcGxheWVyX3R3byA9IG5ldyBDb3dib3kgQGdhbWUsIEAsIGZhbHNlXG5cbiAgICAjIGNvbGxpc2lvbiBlbGVtZW50c1xuICAgIEBidWxsZXRzICA9IFsgQHBsYXllcl9vbmUuYnVsbGV0cywgQHBsYXllcl90d28uYnVsbGV0cyBdXG4gICAgQHdhbGxzICAgID0gWyBAbGVmdF93YWxsLCBAcmlnaHRfd2FsbCBdXG4gICAgQHN1cmZhY2VzID0gWyBAY2VpbGluZywgQGZsb29yIF1cbiAgICBAcGxheWVycyAgPSBbIEBwbGF5ZXJfb25lLCBAcGxheWVyX3R3byBdXG5cbiAgICAjIHN0YXJ0IHRoZSBnYW1lXG4gICAgQHN0YXJ0KClcblxuICBzdGFydDogLT5cblxuICB1cGRhdGU6IC0+XG4gICAgIyBzZXQgYm91bmNlIHN1cmZhY2VzIGZvciBidWxsZXRzXG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSBAYnVsbGV0cywgQHN1cmZhY2VzXG5cbiAgICAjIHNldCBwbGF5ZXIsIGJ1bGxldCBjb2xsaXNpb25zXG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSBAYnVsbGV0cywgQHBsYXllcnMsIChwbGF5ZXIsIGJ1bGxldCkgPT5cbiAgICAgICMga2lsbCBhbGwgYnVsbGV0c1xuICAgICAgYi5raWxsKCkgZm9yIGIgaW4gQHBsYXllcl9vbmUuYnVsbGV0cy5jaGlsZHJlblxuICAgICAgYi5raWxsKCkgZm9yIGIgaW4gQHBsYXllcl90d28uYnVsbGV0cy5jaGlsZHJlblxuICAgICAgIyB0cmlnZ2VyIHBsYXllciBkZWF0aFxuICAgICAgcGxheWVyLmRpZSgpXG5cbiAgcmVuZGVyOiAtPlxuICAgIGlmIEBnYW1lLmRlYnVnTW9kZVxuICAgICAgQGdhbWUuZGVidWcuYm9keSBAY2VpbGluZ1xuICAgICAgQGdhbWUuZGVidWcuYm9keSBAZmxvb3JcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQGxlZnRfd2FsbFxuICAgICAgQGdhbWUuZGVidWcuYm9keSBAcmlnaHRfd2FsbFxuICAgICAgQGdhbWUuZGVidWcuYm9keSBAcGxheWVyX29uZVxuICAgICAgQGdhbWUuZGVidWcuYm9keSBAcGxheWVyX3R3b1xuICAgICAgQGdhbWUuZGVidWcuYm9keSBAcGxheWVyX29uZS5idWxsZXRzXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBwbGF5ZXJfdHdvLmJ1bGxldHNcblxuICBzZXR1cExldmVsOiAtPlxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvZ2FtZS5jb2ZmZWVcbiAqKi8iLCIjIFNQUklURVNcbiMgQ293Ym95ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9Db3dib3kuY29mZmVlJ1xuIyBCdWxsZXQgPSByZXF1aXJlICcuLi9zcHJpdGVzL0J1bGxldC5jb2ZmZWUnXG4jIENhY3R1cyA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ2FjdHVzLmNvZmZlZSdcbiMgVHJlZSAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9UcmVlLmNvZmZlZSdcbiMgV2Fnb24gID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9XYWdvbi5jb2ZmZWUnXG5cbiMgSFVEXG4jIFRpbWVyICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVGltZXIuY29mZmVlJ1xuIyBBbW1vICAgPSByZXF1aXJlICcuLi9zcHJpdGVzL0FtbW8uY29mZmVlJ1xuXG5cbmNsYXNzIEludHJvXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICBjb25zb2xlLmxvZyAnaW50cm8nXG5cblxuICBzdGFydDogLT5cblxuICB1cGRhdGU6IC0+XG5cbm1vZHVsZS5leHBvcnRzID0gSW50cm9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvaW50cm8uY29mZmVlXG4gKiovIiwiY2xhc3MgUHJlbG9hZFxuICBjb25zdHJ1Y3RvcjogLT5cblxuICBwcmVsb2FkOiAtPlxuICAgIEBsb2FkLmNyb3NzT3JpZ2luID0gQGdhbWUuaG9zdHVybCB1bmxlc3MgQGdhbWUuY2RuIGlzICcvJ1xuXG4gICAgIyBMT0FEIFNUVUZGU1xuICAgIENETiA9IEBnYW1lLmNkblxuICAgICMgU1BSSVRFU1xuICAgIGtleSA9ICdhdGxhcydcbiAgICB0ZXh0dXJlX3VybCA9IFwiI3tDRE59aW1hZ2VzL2F0bGFzLnBuZ1wiXG4gICAgYXRsYXNfZGF0YSA9IHJlcXVpcmUgJy4uL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWUnXG4gICAgQGxvYWQuYXRsYXNKU09OSGFzaCBrZXksIHRleHR1cmVfdXJsLCBudWxsLCBhdGxhc19kYXRhXG5cbiAgICAjIFNGWFxuICAgIF8uZWFjaCBAZ2FtZS5jb25zdGFudHMuU0ZYLCAoc2Z4KSA9PlxuICAgICAgYXNzZXQgPSBAbG9hZC5hdWRpbyBzZngsXG4gICAgICBbXCIje0NETn1hdWRpby8je3NmeH0ubXAzI3tAZ2FtZS52ZXJzaW9ufVwiLFxuICAgICAgXCIje0NETn1hdWRpby8je3NmeH0ub2dnI3tAZ2FtZS52ZXJzaW9ufVwiXVxuICAgICAgYXNzZXQuY3Jvc3NPcmlnaW4gPSBAbG9hZC5jcm9zc09yaWdpbiAgdW5sZXNzIEBnYW1lLmNkbiBpcyAnLydcblxuICB1cGRhdGU6IC0+XG4gICAgaWYgQGdhbWUuZGVidWdNb2RlXG4gICAgICBAc3RhdGUuc3RhcnQgJ2dhbWUnXG4gICAgZWxzZVxuICAgICAgQHN0YXRlLnN0YXJ0ICdpbnRybydcblxubW9kdWxlLmV4cG9ydHMgPSBQcmVsb2FkXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL3ByZWxvYWQuY29mZmVlXG4gKiovIiwiTGF1bmNoR2FtZSA9IHJlcXVpcmUgJy4vZ2FtZS9sYXVuY2guY29mZmVlJ1xuXG4jcmVhZHlcbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG5cblx0Y29uc29sZS5sb2cgJ2FsbCByZWFkeSdcblx0TGF1bmNoR2FtZSgpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL21haW4uY29mZmVlXG4gKiovIiwiLypcblxuICBKYXZhc2NyaXB0IFN0YXRlIE1hY2hpbmUgTGlicmFyeSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlc2dvcmRvbi9qYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmVcblxuICBDb3B5cmlnaHQgKGMpIDIwMTIsIDIwMTMsIDIwMTQsIDIwMTUsIEpha2UgR29yZG9uIGFuZCBjb250cmlidXRvcnNcbiAgUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIC0gaHR0cHM6Ly9naXRodWIuY29tL2pha2VzZ29yZG9uL2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIFN0YXRlTWFjaGluZSA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBWRVJTSU9OOiBcIjIuMy41XCIsXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgUmVzdWx0OiB7XG4gICAgICBTVUNDRUVERUQ6ICAgIDEsIC8vIHRoZSBldmVudCB0cmFuc2l0aW9uZWQgc3VjY2Vzc2Z1bGx5IGZyb20gb25lIHN0YXRlIHRvIGFub3RoZXJcbiAgICAgIE5PVFJBTlNJVElPTjogMiwgLy8gdGhlIGV2ZW50IHdhcyBzdWNjZXNzZnVsbCBidXQgbm8gc3RhdGUgdHJhbnNpdGlvbiB3YXMgbmVjZXNzYXJ5XG4gICAgICBDQU5DRUxMRUQ6ICAgIDMsIC8vIHRoZSBldmVudCB3YXMgY2FuY2VsbGVkIGJ5IHRoZSBjYWxsZXIgaW4gYSBiZWZvcmVFdmVudCBjYWxsYmFja1xuICAgICAgUEVORElORzogICAgICA0ICAvLyB0aGUgZXZlbnQgaXMgYXN5bmNocm9ub3VzIGFuZCB0aGUgY2FsbGVyIGlzIGluIGNvbnRyb2wgb2Ygd2hlbiB0aGUgdHJhbnNpdGlvbiBvY2N1cnNcbiAgICB9LFxuXG4gICAgRXJyb3I6IHtcbiAgICAgIElOVkFMSURfVFJBTlNJVElPTjogMTAwLCAvLyBjYWxsZXIgdHJpZWQgdG8gZmlyZSBhbiBldmVudCB0aGF0IHdhcyBpbm5hcHJvcHJpYXRlIGluIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICBQRU5ESU5HX1RSQU5TSVRJT046IDIwMCwgLy8gY2FsbGVyIHRyaWVkIHRvIGZpcmUgYW4gZXZlbnQgd2hpbGUgYW4gYXN5bmMgdHJhbnNpdGlvbiB3YXMgc3RpbGwgcGVuZGluZ1xuICAgICAgSU5WQUxJRF9DQUxMQkFDSzogICAzMDAgLy8gY2FsbGVyIHByb3ZpZGVkIGNhbGxiYWNrIGZ1bmN0aW9uIHRocmV3IGFuIGV4Y2VwdGlvblxuICAgIH0sXG5cbiAgICBXSUxEQ0FSRDogJyonLFxuICAgIEFTWU5DOiAnYXN5bmMnLFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNyZWF0ZTogZnVuY3Rpb24oY2ZnLCB0YXJnZXQpIHtcblxuICAgICAgdmFyIGluaXRpYWwgICAgICA9ICh0eXBlb2YgY2ZnLmluaXRpYWwgPT0gJ3N0cmluZycpID8geyBzdGF0ZTogY2ZnLmluaXRpYWwgfSA6IGNmZy5pbml0aWFsOyAvLyBhbGxvdyBmb3IgYSBzaW1wbGUgc3RyaW5nLCBvciBhbiBvYmplY3Qgd2l0aCB7IHN0YXRlOiAnZm9vJywgZXZlbnQ6ICdzZXR1cCcsIGRlZmVyOiB0cnVlfGZhbHNlIH1cbiAgICAgIHZhciB0ZXJtaW5hbCAgICAgPSBjZmcudGVybWluYWwgfHwgY2ZnWydmaW5hbCddO1xuICAgICAgdmFyIGZzbSAgICAgICAgICA9IHRhcmdldCB8fCBjZmcudGFyZ2V0ICB8fCB7fTtcbiAgICAgIHZhciBldmVudHMgICAgICAgPSBjZmcuZXZlbnRzIHx8IFtdO1xuICAgICAgdmFyIGNhbGxiYWNrcyAgICA9IGNmZy5jYWxsYmFja3MgfHwge307XG4gICAgICB2YXIgbWFwICAgICAgICAgID0ge307IC8vIHRyYWNrIHN0YXRlIHRyYW5zaXRpb25zIGFsbG93ZWQgZm9yIGFuIGV2ZW50IHsgZXZlbnQ6IHsgZnJvbTogWyB0byBdIH0gfVxuICAgICAgdmFyIHRyYW5zaXRpb25zICA9IHt9OyAvLyB0cmFjayBldmVudHMgYWxsb3dlZCBmcm9tIGEgc3RhdGUgICAgICAgICAgICB7IHN0YXRlOiBbIGV2ZW50IF0gfVxuXG4gICAgICB2YXIgYWRkID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZnJvbSA9IChlLmZyb20gaW5zdGFuY2VvZiBBcnJheSkgPyBlLmZyb20gOiAoZS5mcm9tID8gW2UuZnJvbV0gOiBbU3RhdGVNYWNoaW5lLldJTERDQVJEXSk7IC8vIGFsbG93ICd3aWxkY2FyZCcgdHJhbnNpdGlvbiBpZiAnZnJvbScgaXMgbm90IHNwZWNpZmllZFxuICAgICAgICBtYXBbZS5uYW1lXSA9IG1hcFtlLm5hbWVdIHx8IHt9O1xuICAgICAgICBmb3IgKHZhciBuID0gMCA7IG4gPCBmcm9tLmxlbmd0aCA7IG4rKykge1xuICAgICAgICAgIHRyYW5zaXRpb25zW2Zyb21bbl1dID0gdHJhbnNpdGlvbnNbZnJvbVtuXV0gfHwgW107XG4gICAgICAgICAgdHJhbnNpdGlvbnNbZnJvbVtuXV0ucHVzaChlLm5hbWUpO1xuXG4gICAgICAgICAgbWFwW2UubmFtZV1bZnJvbVtuXV0gPSBlLnRvIHx8IGZyb21bbl07IC8vIGFsbG93IG5vLW9wIHRyYW5zaXRpb24gaWYgJ3RvJyBpcyBub3Qgc3BlY2lmaWVkXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgIGluaXRpYWwuZXZlbnQgPSBpbml0aWFsLmV2ZW50IHx8ICdzdGFydHVwJztcbiAgICAgICAgYWRkKHsgbmFtZTogaW5pdGlhbC5ldmVudCwgZnJvbTogJ25vbmUnLCB0bzogaW5pdGlhbC5zdGF0ZSB9KTtcbiAgICAgIH1cblxuICAgICAgZm9yKHZhciBuID0gMCA7IG4gPCBldmVudHMubGVuZ3RoIDsgbisrKVxuICAgICAgICBhZGQoZXZlbnRzW25dKTtcblxuICAgICAgZm9yKHZhciBuYW1lIGluIG1hcCkge1xuICAgICAgICBpZiAobWFwLmhhc093blByb3BlcnR5KG5hbWUpKVxuICAgICAgICAgIGZzbVtuYW1lXSA9IFN0YXRlTWFjaGluZS5idWlsZEV2ZW50KG5hbWUsIG1hcFtuYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGZvcih2YXIgbmFtZSBpbiBjYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICBmc21bbmFtZV0gPSBjYWxsYmFja3NbbmFtZV1cbiAgICAgIH1cblxuICAgICAgZnNtLmN1cnJlbnQgICAgID0gJ25vbmUnO1xuICAgICAgZnNtLmlzICAgICAgICAgID0gZnVuY3Rpb24oc3RhdGUpIHsgcmV0dXJuIChzdGF0ZSBpbnN0YW5jZW9mIEFycmF5KSA/IChzdGF0ZS5pbmRleE9mKHRoaXMuY3VycmVudCkgPj0gMCkgOiAodGhpcy5jdXJyZW50ID09PSBzdGF0ZSk7IH07XG4gICAgICBmc20uY2FuICAgICAgICAgPSBmdW5jdGlvbihldmVudCkgeyByZXR1cm4gIXRoaXMudHJhbnNpdGlvbiAmJiAobWFwW2V2ZW50XS5oYXNPd25Qcm9wZXJ0eSh0aGlzLmN1cnJlbnQpIHx8IG1hcFtldmVudF0uaGFzT3duUHJvcGVydHkoU3RhdGVNYWNoaW5lLldJTERDQVJEKSk7IH1cbiAgICAgIGZzbS5jYW5ub3QgICAgICA9IGZ1bmN0aW9uKGV2ZW50KSB7IHJldHVybiAhdGhpcy5jYW4oZXZlbnQpOyB9O1xuICAgICAgZnNtLnRyYW5zaXRpb25zID0gZnVuY3Rpb24oKSAgICAgIHsgcmV0dXJuIHRyYW5zaXRpb25zW3RoaXMuY3VycmVudF07IH07XG4gICAgICBmc20uaXNGaW5pc2hlZCAgPSBmdW5jdGlvbigpICAgICAgeyByZXR1cm4gdGhpcy5pcyh0ZXJtaW5hbCk7IH07XG4gICAgICBmc20uZXJyb3IgICAgICAgPSBjZmcuZXJyb3IgfHwgZnVuY3Rpb24obmFtZSwgZnJvbSwgdG8sIGFyZ3MsIGVycm9yLCBtc2csIGUpIHsgdGhyb3cgZSB8fCBtc2c7IH07IC8vIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBzb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5zIGlzIHRvIHRocm93IGFuIGV4Y2VwdGlvbiwgYnV0IGNhbGxlciBjYW4gb3ZlcnJpZGUgdGhpcyBiZWhhdmlvciBpZiBkZXNpcmVkIChzZWUgZ2l0aHViIGlzc3VlICMzIGFuZCAjMTcpXG5cbiAgICAgIGlmIChpbml0aWFsICYmICFpbml0aWFsLmRlZmVyKVxuICAgICAgICBmc21baW5pdGlhbC5ldmVudF0oKTtcblxuICAgICAgcmV0dXJuIGZzbTtcblxuICAgIH0sXG5cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZG9DYWxsYmFjazogZnVuY3Rpb24oZnNtLCBmdW5jLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZnVuYy5hcHBseShmc20sIFtuYW1lLCBmcm9tLCB0b10uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZzbS5lcnJvcihuYW1lLCBmcm9tLCB0bywgYXJncywgU3RhdGVNYWNoaW5lLkVycm9yLklOVkFMSURfQ0FMTEJBQ0ssIFwiYW4gZXhjZXB0aW9uIG9jY3VycmVkIGluIGEgY2FsbGVyLXByb3ZpZGVkIGNhbGxiYWNrIGZ1bmN0aW9uXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZUFueUV2ZW50OiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uYmVmb3JlZXZlbnQnXSwgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBhZnRlckFueUV2ZW50OiAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmFmdGVyZXZlbnQnXSB8fCBmc21bJ29uZXZlbnQnXSwgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgbGVhdmVBbnlTdGF0ZTogICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25sZWF2ZXN0YXRlJ10sICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGVudGVyQW55U3RhdGU6ICAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uZW50ZXJzdGF0ZSddIHx8IGZzbVsnb25zdGF0ZSddLCAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBjaGFuZ2VTdGF0ZTogICAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmNoYW5nZXN0YXRlJ10sICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG5cbiAgICBiZWZvcmVUaGlzRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmJlZm9yZScgKyBuYW1lXSwgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgYWZ0ZXJUaGlzRXZlbnQ6ICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25hZnRlcicgICsgbmFtZV0gfHwgZnNtWydvbicgKyBuYW1lXSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGxlYXZlVGhpc1N0YXRlOiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29ubGVhdmUnICArIGZyb21dLCAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBlbnRlclRoaXNTdGF0ZTogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmVudGVyJyAgKyB0b10gICB8fCBmc21bJ29uJyArIHRvXSwgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG5cbiAgICBiZWZvcmVFdmVudDogZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgaWYgKChmYWxzZSA9PT0gU3RhdGVNYWNoaW5lLmJlZm9yZVRoaXNFdmVudChmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSkgfHxcbiAgICAgICAgICAoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVBbnlFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIGFmdGVyRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIFN0YXRlTWFjaGluZS5hZnRlclRoaXNFdmVudChmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIFN0YXRlTWFjaGluZS5hZnRlckFueUV2ZW50KCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgbGVhdmVTdGF0ZTogZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgdmFyIHNwZWNpZmljID0gU3RhdGVNYWNoaW5lLmxlYXZlVGhpc1N0YXRlKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpLFxuICAgICAgICAgIGdlbmVyYWwgID0gU3RhdGVNYWNoaW5lLmxlYXZlQW55U3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgaWYgKChmYWxzZSA9PT0gc3BlY2lmaWMpIHx8IChmYWxzZSA9PT0gZ2VuZXJhbCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGVsc2UgaWYgKChTdGF0ZU1hY2hpbmUuQVNZTkMgPT09IHNwZWNpZmljKSB8fCAoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBnZW5lcmFsKSlcbiAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5BU1lOQztcbiAgICB9LFxuXG4gICAgZW50ZXJTdGF0ZTogZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgU3RhdGVNYWNoaW5lLmVudGVyVGhpc1N0YXRlKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgU3RhdGVNYWNoaW5lLmVudGVyQW55U3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgIH0sXG5cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgYnVpbGRFdmVudDogZnVuY3Rpb24obmFtZSwgbWFwKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGZyb20gID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB2YXIgdG8gICAgPSBtYXBbZnJvbV0gfHwgbWFwW1N0YXRlTWFjaGluZS5XSUxEQ0FSRF0gfHwgZnJvbTtcbiAgICAgICAgdmFyIGFyZ3MgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTsgLy8gdHVybiBhcmd1bWVudHMgaW50byBwdXJlIGFycmF5XG5cbiAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbilcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihuYW1lLCBmcm9tLCB0bywgYXJncywgU3RhdGVNYWNoaW5lLkVycm9yLlBFTkRJTkdfVFJBTlNJVElPTiwgXCJldmVudCBcIiArIG5hbWUgKyBcIiBpbmFwcHJvcHJpYXRlIGJlY2F1c2UgcHJldmlvdXMgdHJhbnNpdGlvbiBkaWQgbm90IGNvbXBsZXRlXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbm5vdChuYW1lKSlcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihuYW1lLCBmcm9tLCB0bywgYXJncywgU3RhdGVNYWNoaW5lLkVycm9yLklOVkFMSURfVFJBTlNJVElPTiwgXCJldmVudCBcIiArIG5hbWUgKyBcIiBpbmFwcHJvcHJpYXRlIGluIGN1cnJlbnQgc3RhdGUgXCIgKyB0aGlzLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmIChmYWxzZSA9PT0gU3RhdGVNYWNoaW5lLmJlZm9yZUV2ZW50KHRoaXMsIG5hbWUsIGZyb20sIHRvLCBhcmdzKSlcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5DQU5DRUxMRUQ7XG5cbiAgICAgICAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmFmdGVyRXZlbnQodGhpcywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0Lk5PVFJBTlNJVElPTjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXBhcmUgYSB0cmFuc2l0aW9uIG1ldGhvZCBmb3IgdXNlIEVJVEhFUiBsb3dlciBkb3duLCBvciBieSBjYWxsZXIgaWYgdGhleSB3YW50IGFuIGFzeW5jIHRyYW5zaXRpb24gKGluZGljYXRlZCBieSBhbiBBU1lOQyByZXR1cm4gdmFsdWUgZnJvbSBsZWF2ZVN0YXRlKVxuICAgICAgICB2YXIgZnNtID0gdGhpcztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZnNtLnRyYW5zaXRpb24gPSBudWxsOyAvLyB0aGlzIG1ldGhvZCBzaG91bGQgb25seSBldmVyIGJlIGNhbGxlZCBvbmNlXG4gICAgICAgICAgZnNtLmN1cnJlbnQgPSB0bztcbiAgICAgICAgICBTdGF0ZU1hY2hpbmUuZW50ZXJTdGF0ZSggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmNoYW5nZVN0YXRlKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5TVUNDRUVERUQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5jYW5jZWwgPSBmdW5jdGlvbigpIHsgLy8gcHJvdmlkZSBhIHdheSBmb3IgY2FsbGVyIHRvIGNhbmNlbCBhc3luYyB0cmFuc2l0aW9uIGlmIGRlc2lyZWQgKGlzc3VlICMyMilcbiAgICAgICAgICBmc20udHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmFmdGVyRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVhdmUgPSBTdGF0ZU1hY2hpbmUubGVhdmVTdGF0ZSh0aGlzLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbGVhdmUpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0LkNBTkNFTExFRDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTdGF0ZU1hY2hpbmUuQVNZTkMgPT09IGxlYXZlKSB7XG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuUEVORElORztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy50cmFuc2l0aW9uKSAvLyBuZWVkIHRvIGNoZWNrIGluIGNhc2UgdXNlciBtYW51YWxseSBjYWxsZWQgdHJhbnNpdGlvbigpIGJ1dCBmb3Jnb3QgdG8gcmV0dXJuIFN0YXRlTWFjaGluZS5BU1lOQ1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgIH07XG4gICAgfVxuXG4gIH07IC8vIFN0YXRlTWFjaGluZVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLy89PT09PT1cbiAgLy8gTk9ERVxuICAvLz09PT09PVxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTdGF0ZU1hY2hpbmU7XG4gICAgfVxuICAgIGV4cG9ydHMuU3RhdGVNYWNoaW5lID0gU3RhdGVNYWNoaW5lO1xuICB9XG4gIC8vPT09PT09PT09PT09XG4gIC8vIEFNRC9SRVFVSVJFXG4gIC8vPT09PT09PT09PT09XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbihyZXF1aXJlKSB7IHJldHVybiBTdGF0ZU1hY2hpbmU7IH0pO1xuICB9XG4gIC8vPT09PT09PT1cbiAgLy8gQlJPV1NFUlxuICAvLz09PT09PT09XG4gIGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuICAvLz09PT09PT09PT09XG4gIC8vIFdFQiBXT1JLRVJcbiAgLy89PT09PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzZWxmLlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lL3N0YXRlLW1hY2hpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2Jvb3QuY29mZmVlXCI6IDE0LFxuXHRcIi4vZ2FtZS5jb2ZmZWVcIjogMTUsXG5cdFwiLi9pbnRyby5jb2ZmZWVcIjogMTYsXG5cdFwiLi9wcmVsb2FkLmNvZmZlZVwiOiAxNyxcblx0XCIuL3Jlc2V0LmNvZmZlZVwiOiAxOFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyMTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcyBeXFwuXFwvLipcXC5jb2ZmZWUkXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=