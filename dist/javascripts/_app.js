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

	module.exports = __webpack_require__(25);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	var levels;
	
	levels = {
	  1: {
	    wagon: true,
	    num_cactus: 3,
	    num_tree: 2
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
	  }
	};
	
	module.exports = levels;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var sfx;
	
	sfx = {};
	
	module.exports = sfx;


/***/ },
/* 7 */
/***/ function(module, exports) {

	var sprites;
	
	sprites = {};
	
	module.exports = sprites;


/***/ },
/* 8 */
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
	    SPRITES: __webpack_require__(7),
	    LEVELS: __webpack_require__(5),
	    SFX: __webpack_require__(6)
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
	    game.state.add(state, __webpack_require__(27)("./" + state + ".coffee"));
	  }
	  return game.state.start('boot');
	};
	
	module.exports = launch;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
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
	    this.game.add.existing(this);
	    this.cropRect = this.game.add.graphics();
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
	    this.cropRect.beginFill("0x000000");
	    this.cropRect.drawRect(this.x, this.y, width, this.height);
	    return this.cropRect.endFill();
	  };
	
	  return Ammo;
	
	})(Phaser.Sprite);
	
	module.exports = Ammo;


/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var Cactus, Terrain,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Terrain = __webpack_require__(2);
	
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var Ammo, Bullets, Cowboy, DELTA, FRAMERATE, PLAYER_ONE_CONTROLS, PLAYER_ONE_X, PLAYER_ONE_Y, PLAYER_TWO_CONTROLS, PLAYER_TWO_X, PLAYER_TWO_Y, SPEED, StateMachine, Text,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Bullets = __webpack_require__(10);
	
	Ammo = __webpack_require__(9);
	
	Text = __webpack_require__(16);
	
	StateMachine = __webpack_require__(26);
	
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
	    this.text = new Text(this.game, 'GOT_ME');
	    this.setupControls();
	    this.setupAnimations();
	    this.createStateMachine();
	    this.game.add.existing(this);
	    return this;
	  }
	
	  Cowboy.prototype.update = function() {
	    var current_frame, current_time, x, y;
	    if (this.state.current !== 'dying') {
	      current_time = Date.now();
	      if (current_time - this.time > SPEED) {
	        if (this.direction.up && this.body.y > this.game_state.ceiling.y) {
	          this.body.y -= DELTA;
	        }
	        if (this.direction.down && this.body.y < this.game_state.floor.y - this.body.height) {
	          this.body.y += DELTA;
	        }
	        if (this.is_player_one) {
	          if (this.direction.left && this.body.x > this.game_state.left_wall_outer.body.x) {
	            this.body.x -= DELTA;
	          }
	          if (this.direction.right && this.body.right < this.game_state.left_wall.body.x) {
	            this.body.x += DELTA;
	          }
	        } else {
	          if (this.direction.left && this.body.x > this.game_state.right_wall.body.x) {
	            this.body.x -= DELTA;
	          }
	          if (this.direction.right && this.body.right < this.game_state.right_wall_outer.body.x) {
	            this.body.x += DELTA;
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
	    return this.ammo.reload();
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var CACTUS_POSITIONS, Cactus, POSITIONS, POSITION_KEYS, TerrainGroup, Tree,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Cactus = __webpack_require__(11);
	
	Tree = __webpack_require__(17);
	
	CACTUS_POSITIONS = {
	  top_left: {
	    x: 0,
	    y: 0
	  },
	  top_right: {
	    x: 0,
	    y: 0
	  },
	  center_left: {
	    x: 500,
	    y: 300
	  },
	  center: {
	    x: 528,
	    y: 300
	  },
	  center_right: {
	    x: 600,
	    y: 300
	  },
	  bottom_left: {
	    x: 0,
	    y: 0
	  },
	  bottom_right: {
	    x: 0,
	    y: 0
	  }
	};
	
	POSITIONS = {
	  top_left: {
	    x: 0,
	    y: 0
	  },
	  top_right: {
	    x: 0,
	    y: 0
	  },
	  bottom_left: {
	    x: 0,
	    y: 0
	  },
	  bottom_right: {
	    x: 0,
	    y: 0
	  }
	};
	
	POSITION_KEYS = ["top_left", "top_right", "bottom_left", "bottom_right"];
	
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
	    this.positions = POSITION_KEYS;
	    _.shuffle(this.positions);
	    this.cactus_positions = this.is_wagon ? ['center_left', 'center_right'] : ['center'];
	    _.shuffle(this.cactus_positions);
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
	          pos = POSITIONS[pos_key];
	        }
	        break;
	      case 'tree':
	        pos_key = this.positions.pop();
	        pos = POSITIONS[pos_key];
	    }
	    return pos;
	  };
	
	  return TerrainGroup;
	
	})(Phaser.Group);
	
	module.exports = TerrainGroup;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	var Text,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Text = (function(superClass) {
	  extend(Text, superClass);
	
	  function Text(game, frame, x, y) {
	    var key;
	    this.game = game;
	    if (x == null) {
	      x = 0;
	    }
	    if (y == null) {
	      y = 0;
	    }
	    key = 'atlas';
	    Text.__super__.constructor.call(this, this.game, x, y, key, "text/" + frame);
	    this.game.add.existing(this);
	    this.hide();
	    return this;
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var Terrain, Tree,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Terrain = __webpack_require__(2);
	
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
/* 18 */
/***/ function(module, exports) {

	var Wagon,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Wagon = (function(superClass) {
	  extend(Wagon, superClass);
	
	  function Wagon(game, game_state) {
	    var frame, key;
	    this.game = game;
	    this.game_state = game_state;
	    key = 'atlas';
	    frame = 'wagon';
	    Wagon.__super__.constructor.call(this, this.game, 500, 816 - 96);
	    this.game.physics.enable(this, Phaser.Physics.ARCADE);
	    this.body.immovable = true;
	    this.game.add.existing(this);
	    return this;
	  }
	
	  Wagon.prototype.revive = function() {
	    return this.reset(500, 816 - 96);
	  };
	
	  Wagon.prototype.roll = function() {};
	
	  Wagon.prototype.stop = function() {};
	
	  return Wagon;
	
	})(Phaser.Sprite);
	
	module.exports = Wagon;


/***/ },
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var Ceiling, Cowboy, Floor, Game, NO_AMMO_COUNTDOWN, STARTING_TIME, TerrainGroup, WALL_OFFSET, Wagon, Wall;
	
	Floor = __webpack_require__(14);
	
	Ceiling = __webpack_require__(12);
	
	Wall = __webpack_require__(19);
	
	WALL_OFFSET = 275;
	
	Cowboy = __webpack_require__(13);
	
	TerrainGroup = __webpack_require__(15);
	
	Wagon = __webpack_require__(18);
	
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
	    return this.setupLevel();
	  };
	
	  Game.prototype.update = function() {
	    this.game.physics.arcade.collide(this.bullets, this.surfaces);
	    this.game.physics.arcade.collide(this.bullets, this.players, (function(_this) {
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
	        bullet.player.idle();
	        bullet.player.wins += 1;
	        _this.game.level += 1;
	        return player.die();
	      };
	    })(this));
	    return this.game.physics.arcade.collide(this.bullets, this.terrain, (function(_this) {
	      return function(bullet, terrain) {
	        var collision_y;
	        collision_y = bullet.y + bullet.height;
	        bullet.kill();
	        return terrain.deform(collision_y);
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
	
	  Game.prototype.setupLevel = function() {
	    var level, level_num;
	    level_num = this.game.level;
	    level = this.game.constants.LEVELS["" + level_num];
	    return this.terrain = new TerrainGroup(this.game, this, level);
	  };
	
	  return Game;
	
	})();
	
	module.exports = Game;


/***/ },
/* 22 */
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
/* 23 */
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
	    atlas_data = __webpack_require__(4);
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
/* 24 */
/***/ function(module, exports) {

	


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var LaunchGame;
	
	LaunchGame = __webpack_require__(8);
	
	$(document).ready(function() {
	  console.log('all ready');
	  return LaunchGame();
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./boot.coffee": 20,
		"./game.coffee": 21,
		"./intro.coffee": 22,
		"./preload.coffee": 23,
		"./reset.coffee": 24
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
	webpackContext.id = 27;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTE0NjlhZThiYzljMjcwMmM5ZTgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy90ZXJyYWluLmNvZmZlZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvbGV2ZWxzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZnguY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3Nwcml0ZXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvbGF1bmNoLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQW1tby5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0J1bGxldHMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DYWN0dXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DZWlsaW5nLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ293Ym95LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvRmxvb3IuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXJyYWluR3JvdXAuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXh0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvVHJlZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1dhZ29uLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvV2FsbC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvYm9vdC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvZ2FtZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvaW50cm8uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL3ByZWxvYWQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL21haW4uY29mZmVlIiwid2VicGFjazovLy8uL34vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lL3N0YXRlLW1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMgXlxcLlxcLy4qXFwuY29mZmVlJCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Esb0I7Ozs7OztBQ0FBO0dBQUE7OztBQUFNOzs7R0FDUyxpQkFBQyxJQUFELEVBQVEsVUFBUixFQUFxQixDQUFyQixFQUEwQixDQUExQixFQUErQixLQUEvQjtBQUNYO0tBRFksSUFBQyxRQUFEO0tBQU8sSUFBQyxjQUFEOztPQUFhLElBQUU7OztPQUFHLElBQUU7OztPQUFHLFFBQU07O0tBQ2hELE1BQU07S0FDTixRQUFRLGFBQVc7S0FDbkIseUNBQU0sSUFBQyxLQUFQLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixHQUFuQixFQUF3QixLQUF4QjtLQUdBLElBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFkLENBQXFCLElBQXJCLEVBQXdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBdkM7S0FDQSxJQUFDLEtBQUksQ0FBQyxTQUFOLEdBQWtCO0tBR2xCLElBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFWLENBQW1CLElBQW5CO0tBR0EsSUFBQyxTQUFELEdBQVksSUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVY7QUFFWixZQUFPO0dBZkk7O3FCQWlCYixTQUFRLFNBQUMsV0FBRDtBQUNOO0tBQUEsU0FBUyxjQUFjLElBQUM7S0FFeEIsSUFBQyxLQUFJLENBQUMsT0FBTixDQUFjLElBQUMsTUFBZixFQUFzQixJQUFDLE9BQUQsR0FBVSxNQUFoQyxFQUF3QyxDQUF4QyxFQUEyQyxNQUEzQztZQUNBLElBQUMsU0FBRCxDQUFVLE1BQVY7R0FKTTs7cUJBTVIsU0FBUTtZQUFHLElBQUMsU0FBUSxDQUFDLEtBQVY7R0FBSDs7cUJBRVIsV0FBVSxTQUFDLE1BQUQ7S0FDUixJQUFDLFNBQVEsQ0FBQyxTQUFWLENBQW9CLENBQXBCO0tBQ0EsSUFBQyxTQUFRLENBQUMsU0FBVixDQUFvQixVQUFwQjtLQUNBLElBQUMsU0FBUSxDQUFDLFFBQVYsQ0FBbUIsSUFBQyxFQUFwQixFQUF1QixJQUFDLEVBQXhCLEVBQTJCLElBQUMsTUFBNUIsRUFBbUMsTUFBbkM7S0FDQSxJQUFDLFNBQVEsQ0FBQyxPQUFWO1lBQ0EsSUFBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVosQ0FBdUIsSUFBQyxTQUF4QjtHQUxROzs7O0lBMUJVLE1BQU0sQ0FBQzs7QUFpQzdCLE9BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7Ozs7O0FDakNqQix5Qjs7Ozs7O0FDQUE7O0FBQUEsU0FDRTtHQUFBLFVBQ0U7S0FBQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQURGO0tBZ0JBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakJGO0tBZ0NBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakNGO0tBZ0RBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakRGO0tBZ0VBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakVGO0tBZ0ZBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakZGO0tBZ0dBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakdGO0tBZ0hBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakhGO0tBZ0lBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BaklGO0tBZ0pBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakpGO0tBZ0tBLGFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BaktGO0tBZ0xBLGFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakxGO0tBZ01BLGtCQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssRUFETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpNRjtLQWdOQSxlQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpORjtLQWdPQSxrQkFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLEVBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqT0Y7S0FnUEEsb0JBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BalBGO0tBZ1FBLGFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BalFGO0tBZ1JBLFFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BalJGO0tBZ1NBLFVBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxDQUZMO1NBR0EsS0FBSyxDQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssQ0FGTDtTQUdBLEtBQUssQ0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtRQWJGO01BalNGO0tBZ1RBLGtCQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpURjtLQWdVQSxtQkFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEdBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxHQURMO1FBYkY7TUFqVUY7S0FnVkEsbUJBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BalZGO0tBZ1dBLHFCQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEdBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEdBREw7UUFiRjtNQWpXRjtLQWdYQSxtQkFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEdBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxHQURMO1FBYkY7TUFqWEY7S0FnWUEsbUJBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssR0FETDtRQWJGO01BallGO0tBZ1pBLG9CQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEdBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEdBREw7UUFiRjtNQWpaRjtLQWdhQSxrQkFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEdBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxHQURMO1FBYkY7TUFqYUY7S0FnYkEsa0JBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssR0FETDtRQWJGO01BamJGO0tBZ2NBLG9CQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEdBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEdBREw7UUFiRjtNQWpjRjtLQWdkQSxrQkFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEdBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxHQURMO1FBYkY7TUFqZEY7S0FnZUEsa0JBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssR0FETDtRQWJGO01BamVGO0tBZ2ZBLHdCQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEdBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEdBREw7UUFiRjtNQWpmRjtLQWdnQkEsc0JBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssR0FETDtRQWJGO01BamdCRjtLQWdoQkEsc0JBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssR0FETDtRQWJGO01BamhCRjtLQWdpQkEsdUJBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssR0FETDtRQWJGO01BamlCRjtLQWdqQkEscUJBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssR0FETDtRQWJGO01BampCRjtLQWdrQkEscUJBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssR0FETDtRQWJGO01BamtCRjtLQWdsQkEsZ0JBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxHQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssR0FITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssR0FETDtRQWJGO01BamxCRjtLQWdtQkEsU0FDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqbUJGO0lBREY7R0FpbkJBLFFBQ0U7S0FBQSxPQUFPLHlDQUFQO0tBQ0EsV0FBVyxLQURYO0tBRUEsU0FBUyxXQUZUO0tBR0EsVUFBVSxVQUhWO0tBSUEsUUFDRTtPQUFBLEtBQUssR0FBTDtPQUNBLEtBQUssSUFETDtNQUxGO0tBT0EsU0FBUyxHQVBUO0tBUUEsZUFBZSxnSUFSZjtJQWxuQkY7OztBQTRuQkYsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7QUM3bkJqQjs7QUFBQSxVQUFTO0dBSVAsR0FDRTtLQUFBLE9BQU8sSUFBUDtLQUNBLFlBQVksQ0FEWjtLQUVBLFVBQVUsQ0FGVjtJQUxLO0dBUVAsR0FDRTtLQUFBLE9BQU8sS0FBUDtLQUNBLFlBQVksQ0FEWjtJQVRLO0dBV1AsR0FDRTtLQUFBLE9BQU8sS0FBUDtLQUNBLFlBQVksQ0FEWjtJQVpLO0dBY1AsR0FDRTtLQUFBLE9BQU8sS0FBUDtLQUNBLFlBQVksQ0FEWjtJQWZLO0dBaUJQLEdBQ0U7S0FBQSxPQUFPLElBQVA7S0FDQSxZQUFZLENBRFo7SUFsQks7R0FvQlAsR0FDRTtLQUFBLE9BQU8sSUFBUDtLQUNBLFlBQVksQ0FEWjtJQXJCSztHQXVCUCxHQUNFO0tBQUEsT0FBTyxJQUFQO0tBQ0EsWUFBWSxDQURaO0tBRUEsVUFBVSxDQUZWO0lBeEJLO0dBMkJQLEdBQ0U7S0FBQSxPQUFPLElBQVA7S0FDQSxZQUFZLENBRFo7S0FFQSxVQUFVLENBRlY7SUE1Qks7R0ErQlAsR0FDRTtLQUFBLE9BQU8sSUFBUDtLQUNBLFlBQVksQ0FEWjtLQUVBLFVBQVUsQ0FGVjtJQWhDSztHQW1DUCxJQUNFO0tBQUEsT0FBTyxJQUFQO0tBQ0EsWUFBWSxDQURaO0tBRUEsVUFBVSxDQUZWO0lBcENLOzs7QUF5Q1QsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7QUN6Q2pCOztBQUFBLE9BQU07O0FBRU4sT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7QUNGakI7O0FBQUEsV0FBVTs7QUFFVixPQUFNLENBQUMsT0FBUCxHQUFpQjs7Ozs7OztBQ0ZqQjs7QUFBQSxXQUFVLEVBQUUsTUFBRjs7QUFHVixZQUFXO0dBQ1QsSUFBSSxnRUFBZ0UsQ0FBQyxJQUFqRSxDQUFzRSxTQUFTLENBQUMsU0FBaEYsQ0FBSjtZQUNFLEtBREY7SUFBQTtZQUdFLE1BSEY7O0FBRFM7O0FBTVgsVUFBUyxTQUFDLEdBQUQsRUFBVSxPQUFWO0FBR1A7O0tBSFEsTUFBSTs7O0tBQUssVUFBUTs7R0FHekIsYUFBYTtHQUNiLGNBQWM7R0FHZCxPQUFXLFVBQU0sQ0FBQyxJQUFQLENBQ1QsVUFEUyxFQUVULFdBRlMsRUFHVCxNQUFNLENBQUMsSUFIRSxFQUlULE1BSlMsRUFLVCxNQUxTLEVBTVQsS0FOUyxFQU9ULEtBUFMsRUFRVCxJQVJTO0dBWVgsSUFBSSxDQUFDLEdBQUwsR0FBVztHQUNYLElBQUksQ0FBQyxPQUFMLEdBQWU7R0FHZixJQUFJLENBQUMsT0FBTCxHQUFlO0dBR2YsSUFBSSxDQUFDLFNBQUwsR0FBaUI7R0FDakIsSUFBSSxDQUFDLFNBQUwsR0FBaUI7R0FFakIsSUFBSSxDQUFDLFdBQUwsR0FBbUIsQ0FBQyxJQUFJLENBQUM7R0FDekIsSUFBSSxDQUFDLFNBQUwsR0FBaUIsQ0FBQyxJQUFJLENBQUM7R0FHdkIsSUFBSSxDQUFDLFNBQUwsR0FDRTtLQUFBLFFBQVEsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixPQUFwQixFQUE2QixNQUE3QixFQUFxQyxPQUFyQyxDQUFSO0tBQ0EsU0FBUyxvQkFBUSxDQUFSLENBRFQ7S0FFQSxRQUFRLG9CQUFRLENBQVIsQ0FGUjtLQUdBLEtBQUssb0JBQVEsQ0FBUixDQUhMOztHQU1GLElBQUksQ0FBQyxLQUFMLEdBQWE7R0FHYixJQUFJLENBQUMsTUFBTCxHQUFjO0FBQ1o7S0FBQSxRQUFRLEVBQUUsT0FBRjtLQUNSLFVBQVUsRUFBRSxRQUFGO0tBQ1YsVUFBVSxFQUFFLE1BQUY7S0FFVixJQUFHLENBQUMsVUFBSjtPQUNFLFFBQVEsRUFBRSxPQUFGO09BQ1IsVUFBVSxFQUFFLFFBQUY7T0FDVixVQUFVLEVBQUUsTUFBRjtPQUVWLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBaUIsT0FBTyxDQUFDLE1BQVIsS0FBbUIsR0FBdkM7Z0JBQ0UsS0FBSyxDQUFDLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLENBQUMsT0FBTyxDQUFDLE1BQVIsS0FBbUIsR0FBcEIsSUFBMkIsSUFBbkQsRUFERjtRQUFBO2dCQUdFLEtBQUssQ0FBQyxHQUFOLENBQVUsWUFBVixFQUF3QixNQUF4QixFQUhGO1FBTEY7O0dBTFk7QUFnQmQ7QUFBQTs7S0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQVgsQ0FBZSxLQUFmLEVBQXNCLDRCQUFRLEdBQVksS0FBWixHQUFrQixTQUExQixDQUF0QjtBQUFBO1VBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFYLENBQWlCLE1BQWpCO0FBNURPOztBQThEVCxPQUFNLENBQUMsT0FBUCxHQUFpQjs7Ozs7Ozs7QUN2RWpCO0dBQUE7OztBQUFNOzs7R0FDUyxjQUFDLElBQUQsRUFBUSxVQUFSLEVBQXFCLE1BQXJCO0FBQ1g7S0FEWSxJQUFDLFFBQUQ7S0FBTyxJQUFDLGNBQUQ7S0FBYSxJQUFDLFVBQUQ7S0FDaEMsTUFBTTtLQUNOLFFBQVE7S0FDUixJQUFPLElBQUMsT0FBTSxDQUFDLGFBQVgsR0FBOEIsRUFBOUIsR0FBc0M7S0FDMUMsSUFBSSxJQUFDLEtBQUksQ0FBQyxNQUFOLEdBQWU7S0FDbkIsc0NBQU0sSUFBQyxLQUFQLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixHQUFuQixFQUF3QixLQUF4QjtLQUdBLElBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFWLENBQW1CLElBQW5CO0tBR0EsSUFBQyxTQUFELEdBQVksSUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVY7QUFFWixZQUFPO0dBYkk7O2tCQWViLE9BQU07QUFDSjtLQUFBLFFBQVEsSUFBQyxNQUFELEdBQVMsSUFBQyxPQUFNLENBQUMsV0FBUixHQUFzQixDQUF0QixHQUEwQixJQUFDO1lBQzVDLElBQUMsU0FBRCxDQUFVLEtBQVY7R0FGSTs7a0JBSU4sU0FBUTtZQUFHLElBQUMsU0FBUSxDQUFDLEtBQVY7R0FBSDs7a0JBRVIsV0FBVSxTQUFDLEtBQUQ7S0FDUixJQUFDLFNBQVEsQ0FBQyxTQUFWLENBQW9CLENBQXBCO0tBQ0EsSUFBQyxTQUFRLENBQUMsU0FBVixDQUFvQixVQUFwQjtLQUNBLElBQUMsU0FBUSxDQUFDLFFBQVYsQ0FBbUIsSUFBQyxFQUFwQixFQUF1QixJQUFDLEVBQXhCLEVBQTJCLEtBQTNCLEVBQWtDLElBQUMsT0FBbkM7WUFDQSxJQUFDLFNBQVEsQ0FBQyxPQUFWO0dBSlE7Ozs7SUF0Qk8sTUFBTSxDQUFDOztBQTRCMUIsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7QUMzQmpCO0dBQUE7OztBQUFBLGtCQUNFO0dBQUEsTUFBUztLQUFDLEdBQUcsRUFBSjtLQUFRLEdBQUcsRUFBWDtLQUFlLEtBQUssQ0FBQyxFQUFyQjtJQUFUO0dBQ0EsU0FBUztLQUFDLEdBQUcsRUFBSjtLQUFRLEdBQUcsRUFBWDtLQUFlLEtBQUssQ0FBQyxFQUFyQjtJQURUO0dBRUEsS0FBUztLQUFDLEdBQUcsRUFBSjtLQUFRLEdBQUcsRUFBWDtLQUFlLEtBQUssQ0FBcEI7SUFGVDtHQUdBLFFBQVM7S0FBQyxHQUFHLEVBQUo7S0FBUSxHQUFHLEVBQVg7S0FBZSxLQUFLLEVBQXBCO0lBSFQ7R0FJQSxLQUFTO0tBQUMsR0FBRyxFQUFKO0tBQVEsR0FBRyxFQUFYO0tBQWUsS0FBSyxFQUFwQjtJQUpUOzs7QUFPRixTQUFROztBQUVGOzs7R0FDUyxnQkFBQyxJQUFELEVBQVEsVUFBUixFQUFxQixNQUFyQjtBQUNYO0tBRFksSUFBQyxRQUFEO0tBQU8sSUFBQyxjQUFEO0tBQWEsSUFBQyxVQUFEO0tBQ2hDLE1BQU07S0FDTixRQUFRO0tBQ1Isd0NBQU0sSUFBQyxLQUFQLEVBQWEsSUFBQyxPQUFNLENBQUMsSUFBSSxDQUFDLENBQTFCLEVBQTZCLElBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUExQyxFQUE2QyxHQUE3QyxFQUFrRCxLQUFsRDtLQUVBLElBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFkLENBQXFCLElBQXJCO0tBR0EsSUFBQyxLQUFELEdBQVEsSUFBSSxDQUFDLEdBQUw7S0FHUixJQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBYixDQUFpQixDQUFqQjtLQUdBLElBQUMsY0FBRCxHQUFpQixJQUFDLE9BQU0sQ0FBQztLQUd6QixJQUFDLGdCQUFELEdBQW1CO0tBR25CLElBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFWLENBQW1CLElBQW5CO0tBQ0EsSUFBQyxLQUFEO0FBRUEsWUFBTztHQXZCSTs7b0JBeUJiLFFBQU87QUFDTDtLQUFBLFVBQVUsSUFBQyxPQUFNLENBQUMsT0FBUSxLQUFDLE9BQU0sQ0FBQyxhQUFSO0tBQzFCLE1BQU0sY0FBZTtLQUNyQixJQUFPLElBQUMsY0FBSixHQUF1QixJQUFDLE9BQU0sQ0FBQyxJQUFJLENBQUMsS0FBYixHQUFxQixHQUFHLENBQUMsQ0FBaEQsR0FBdUQsSUFBQyxPQUFNLENBQUMsSUFBSSxDQUFDLENBQWIsR0FBaUIsR0FBRyxDQUFDO0tBQ2hGLElBQUksSUFBQyxPQUFNLENBQUMsSUFBSSxDQUFDLENBQWIsR0FBaUIsR0FBRyxDQUFDO0tBQ3pCLFFBQVcsSUFBQyxjQUFKLEdBQXVCLEdBQUcsQ0FBQyxHQUEzQixHQUFvQyxNQUFNLEdBQUcsQ0FBQztLQUV0RCxJQUFDLE1BQUQsQ0FBTyxDQUFQLEVBQVUsQ0FBVjtZQUVBLElBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQXJCLENBQXVDLEtBQXZDLEVBQThDLEtBQTlDLEVBQXFELElBQUMsS0FBSSxDQUFDLFFBQTNEO0dBVEs7Ozs7SUExQlksTUFBTSxDQUFDOztBQXFDdEI7OztHQUNTLGlCQUFDLElBQUQsRUFBUSxVQUFSLEVBQXFCLE1BQXJCO0FBQ1g7S0FEWSxJQUFDLFFBQUQ7S0FBTyxJQUFDLGNBQUQ7S0FBYSxJQUFDLFVBQUQ7S0FDaEMseUNBQU0sSUFBQyxLQUFQLEVBQWEsSUFBYixFQUFtQixTQUFuQixFQUE4QixLQUE5QixFQUFxQyxJQUFyQyxFQUEyQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFqRTtBQUNBLFVBQXNELGtHQUF0RDtPQUFBLElBQUMsSUFBRCxDQUFTLFdBQU8sSUFBQyxLQUFSLEVBQWMsSUFBQyxXQUFmLEVBQTJCLElBQUMsT0FBNUIsQ0FBVDtBQUFBO0tBRUEsSUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVYsQ0FBbUIsSUFBbkI7R0FKVzs7cUJBTWIsUUFBTztZQUFHLElBQUMsYUFBRCxFQUFlLENBQUMsS0FBaEI7R0FBSDs7OztJQVBhLE1BQU0sQ0FBQzs7QUFTN0IsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7QUN6RGpCO0dBQUE7OztBQUFBLFdBQVUsb0JBQVEsQ0FBUjs7QUFFSjs7O0dBQ1MsZ0JBQUMsSUFBRCxFQUFRLFVBQVIsRUFBcUIsQ0FBckIsRUFBMEIsQ0FBMUI7S0FBQyxJQUFDLFFBQUQ7S0FBTyxJQUFDLGNBQUQ7O09BQWEsSUFBRTs7O09BQUcsSUFBRTs7S0FDdkMsd0NBQU0sSUFBQyxLQUFQLEVBQWEsSUFBQyxXQUFkLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDLFFBQWhDO0dBRFc7Ozs7SUFETTs7QUFJckIsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7QUNOakI7R0FBQTs7O0FBQUEsT0FBTSxDQUFDLE9BQVAsR0FBdUI7OztHQUNSLGlCQUFDLElBQUQsRUFBUSxRQUFSO0tBQUMsSUFBQyxRQUFEOztPQUFPLFdBQVM7O0tBQzVCLHlDQUFNLElBQUMsS0FBUCxFQUFhLENBQWIsRUFBZ0IsUUFBaEI7S0FDQSxJQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBZCxDQUFxQixJQUFyQixFQUF3QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXZDO0tBQ0EsSUFBQyxLQUFJLENBQUMsT0FBTixDQUFjLElBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUExQixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxFQUF1QyxDQUF2QztLQUNBLElBQUMsS0FBSSxDQUFDLFlBQU4sR0FBcUI7S0FDckIsSUFBQyxLQUFJLENBQUMsU0FBTixHQUFrQjtLQUNsQixJQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBVixDQUFtQixJQUFuQjtHQU5XOzs7O0lBRHdCLE1BQU0sQ0FBQzs7Ozs7OztBQ0E5QztHQUFBOzs7QUFBQSxXQUFVLG9CQUFRLEVBQVI7O0FBQ1YsUUFBTyxvQkFBUSxDQUFSOztBQUNQLFFBQU8sb0JBQVEsRUFBUjs7QUFDUCxnQkFBZSxvQkFBUSxFQUFSOztBQUdmLGdCQUFlOztBQUNmLGdCQUFlOztBQUNmLGdCQUFlOztBQUNmLGdCQUFlOztBQUdmLFNBQVE7O0FBQ1IsU0FBUTs7QUFDUixhQUFZOztBQUdaLHVCQUNFO0dBQUEsU0FBUyxHQUFUO0dBQ0EsV0FBVyxHQURYO0dBRUEsV0FBVyxHQUZYO0dBR0EsWUFBWSxHQUhaO0dBSUEsUUFBUSxHQUpSO0dBS0EsVUFBVSxHQUxWO0dBTUEsT0FBTyxHQU5QOzs7QUFRRix1QkFDRTtHQUFBLFNBQVMsR0FBVDtHQUNBLFdBQVcsR0FEWDtHQUVBLFdBQVcsR0FGWDtHQUdBLFlBQVksR0FIWjtHQUlBLFFBQVEsR0FKUjtHQUtBLFVBQVUsR0FMVjtHQU1BLE9BQU8sR0FOUDs7O0FBUUk7OztHQUNTLGdCQUFDLElBQUQsRUFBUSxVQUFSLEVBQXFCLGFBQXJCO0FBQ1g7S0FEWSxJQUFDLFFBQUQ7S0FBTyxJQUFDLGNBQUQ7S0FBYSxJQUFDLHlDQUFELGdCQUFlO0tBQy9DLE1BQU07S0FDTixRQUFRO0tBQ1IsSUFBTyxJQUFDLGNBQUosR0FBdUIsWUFBdkIsR0FBeUM7S0FDN0MsSUFBTyxJQUFDLGNBQUosR0FBdUIsWUFBdkIsR0FBeUM7S0FDN0Msd0NBQU0sSUFBQyxLQUFQLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixHQUFuQixFQUF3QixLQUF4QjtLQUdBLElBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFkLENBQXFCLElBQXJCLEVBQXdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBdkM7S0FFQSxJQUFDLE1BQUQsR0FBUyxJQUFDLEtBQUksQ0FBQztLQUNmLElBQUMsT0FBRCxHQUFVLElBQUMsS0FBSSxDQUFDO0tBRWhCLElBQUMsS0FBSSxDQUFDLE9BQU4sQ0FBYyxFQUFkLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLENBQTNCO0tBQ0EsSUFBaUMsSUFBQyxjQUFsQztPQUFBLElBQUMsS0FBSSxDQUFDLE9BQU4sQ0FBYyxFQUFkLEVBQWtCLEdBQWxCLEVBQXVCLENBQUMsRUFBeEIsRUFBNEIsQ0FBNUI7O0tBRUEsSUFBQyxLQUFJLENBQUMsa0JBQU4sR0FBMkI7S0FFM0IsSUFBQyxLQUFJLENBQUMsU0FBTixHQUFrQjtLQUVsQixJQUFDLE9BQU0sQ0FBQyxLQUFSLENBQWMsRUFBZCxFQUFrQixDQUFsQjtLQUVBLElBQUMsTUFBSyxDQUFDLENBQVAsR0FBYyxJQUFDLGNBQUosR0FBdUIsQ0FBQyxDQUF4QixHQUErQjtLQUcxQyxJQUFDLFVBQUQsR0FDRTtPQUFBLElBQUksS0FBSjtPQUNBLE1BQU0sS0FETjtPQUVBLE1BQU0sS0FGTjtPQUdBLE9BQU8sS0FIUDs7S0FNRixJQUFDLElBQUQsR0FDRTtPQUFBLElBQUksS0FBSjtPQUNBLE1BQU0sS0FETjs7S0FJRixJQUFDLEtBQUQsR0FBUSxJQUFJLENBQUMsR0FBTDtLQUNSLElBQUMsT0FBRCxHQUFVO0tBQ1YsSUFBQyxLQUFELEdBQVE7S0FHUixJQUFDLFFBQUQsR0FBVyxDQUFDLEtBQUQsRUFBTyxRQUFQLEVBQWdCLEtBQWhCLEVBQXNCLFNBQXRCLEVBQWdDLE1BQWhDO0tBQ1gsSUFBQyxRQUFELEdBQVcsQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLE9BQWI7S0FDWCxJQUFDLGNBQUQsR0FBaUI7S0FDakIsSUFBQyxjQUFELEdBQWlCO0tBR2pCLElBQUMsS0FBRCxHQUFRO0tBQ1IsSUFBQyxZQUFELEdBQWU7S0FDZixJQUFDLFFBQUQsR0FBZSxZQUFRLElBQUMsS0FBVCxFQUFlLElBQUMsV0FBaEIsRUFBNEIsSUFBNUI7S0FDZixJQUFDLEtBQUQsR0FBWSxTQUFLLElBQUMsS0FBTixFQUFZLElBQUMsV0FBYixFQUF5QixJQUF6QjtLQUdaLElBQUMsS0FBRCxHQUFZLFNBQUssSUFBQyxLQUFOLEVBQVksUUFBWjtLQUdaLElBQUMsY0FBRDtLQUVBLElBQUMsZ0JBQUQ7S0FFQSxJQUFDLG1CQUFEO0tBR0EsSUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVYsQ0FBbUIsSUFBbkI7QUFHQSxZQUFPO0dBbkVJOztvQkFxRWIsU0FBUTtBQUVOO0tBQUEsSUFBRyxJQUFDLE1BQUssQ0FBQyxPQUFQLEtBQWtCLE9BQXJCO09BQ0UsZUFBZSxJQUFJLENBQUMsR0FBTDtPQUNmLElBQUcsZUFBZSxJQUFDLEtBQWhCLEdBQXVCLEtBQTFCO1NBQ0UsSUFBb0IsSUFBQyxVQUFTLENBQUMsRUFBWCxJQUFxQixJQUFDLEtBQUksQ0FBQyxDQUFOLEdBQVUsSUFBQyxXQUFVLENBQUMsT0FBTyxDQUFDLENBQXZFO1dBQUEsSUFBQyxLQUFJLENBQUMsQ0FBTixJQUFXLE1BQVg7O1NBQ0EsSUFBb0IsSUFBQyxVQUFTLENBQUMsSUFBWCxJQUFxQixJQUFDLEtBQUksQ0FBQyxDQUFOLEdBQVUsSUFBQyxXQUFVLENBQUMsS0FBSyxDQUFDLENBQWxCLEdBQXNCLElBQUMsS0FBSSxDQUFDLE1BQS9FO1dBQUEsSUFBQyxLQUFJLENBQUMsQ0FBTixJQUFXLE1BQVg7O1NBQ0EsSUFBRyxJQUFDLGNBQUo7V0FDRSxJQUFvQixJQUFDLFVBQVMsQ0FBQyxJQUFYLElBQXFCLElBQUMsS0FBSSxDQUFDLENBQU4sR0FBVSxJQUFDLFdBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQXBGO2FBQUEsSUFBQyxLQUFJLENBQUMsQ0FBTixJQUFXLE1BQVg7O1dBQ0EsSUFBb0IsSUFBQyxVQUFTLENBQUMsS0FBWCxJQUFxQixJQUFDLEtBQUksQ0FBQyxLQUFOLEdBQWMsSUFBQyxXQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFsRjthQUFBLElBQUMsS0FBSSxDQUFDLENBQU4sSUFBVyxNQUFYO1lBRkY7VUFBQTtXQUlFLElBQW9CLElBQUMsVUFBUyxDQUFDLElBQVgsSUFBcUIsSUFBQyxLQUFJLENBQUMsQ0FBTixHQUFVLElBQUMsV0FBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBL0U7YUFBQSxJQUFDLEtBQUksQ0FBQyxDQUFOLElBQVcsTUFBWDs7V0FDQSxJQUFvQixJQUFDLFVBQVMsQ0FBQyxLQUFYLElBQXFCLElBQUMsS0FBSSxDQUFDLEtBQU4sR0FBYyxJQUFDLFdBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBekY7YUFBQSxJQUFDLEtBQUksQ0FBQyxDQUFOLElBQVcsTUFBWDtZQUxGOztTQVFBLElBQUMsS0FBRCxHQUFRLGFBWFY7O09BY0EsTUFBdUIsSUFBQyxVQUFTLENBQUMsRUFBWCxJQUFpQixJQUFDLFVBQVMsQ0FBQyxJQUE1QixJQUFvQyxJQUFDLFVBQVMsQ0FBQyxJQUEvQyxJQUF1RCxJQUFDLFVBQVMsQ0FBQyxLQUF6RjtTQUFBLElBQUMsT0FBRCxHQUFVLE1BQVY7O09BR0EsSUFBWSxJQUFDLE9BQUQsSUFBWSxJQUFDLE1BQUssQ0FBQyxPQUFQLEtBQWtCLFFBQTFDO1NBQUEsSUFBQyxLQUFEOztPQUNBLElBQVcsQ0FBQyxJQUFDLE9BQUYsSUFBYSxJQUFDLE1BQUssQ0FBQyxPQUFQLEtBQWtCLE1BQTFDO2dCQUFBLElBQUMsS0FBRDtRQXBCRjtNQUFBO09BeUJFLGdCQUFnQixJQUFDLFdBQVUsQ0FBQyxZQUFZLENBQUM7T0FDekMsSUFBRyxrQkFBaUIsaUJBQWpCLElBQXVDLENBQUMsSUFBQyxLQUFJLENBQUMsT0FBakQ7U0FDRSxJQUFPLElBQUMsY0FBSixHQUF1QixJQUFDLEtBQUksQ0FBQyxLQUFOLEdBQWMsSUFBQyxLQUFJLENBQUMsS0FBTixHQUFjLENBQW5ELEdBQTBELElBQUMsS0FBSSxDQUFDLENBQU4sR0FBVSxJQUFDLEtBQUksQ0FBQyxLQUFOLEdBQWM7U0FDdEYsSUFBSSxJQUFDLEtBQUksQ0FBQztTQUNWLElBQUMsS0FBSSxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBZjtnQkFDQSxJQUFDLEtBQUksQ0FBQyxJQUFOLEdBSkY7UUExQkY7O0dBRk07O29CQXNDUixPQUFnQjtZQUFHLElBQUMsTUFBSyxDQUFDLEtBQVA7R0FBSDs7b0JBQ2hCLE9BQWdCO1lBQUcsSUFBQyxNQUFLLENBQUMsS0FBUDtHQUFIOztvQkFDaEIsTUFBZ0I7WUFBRyxJQUFDLE1BQUssQ0FBQyxJQUFQO0dBQUg7O29CQUdoQixVQUFnQjtZQUFHLElBQUMsVUFBUyxDQUFDLEVBQVgsR0FBbUI7R0FBdEI7O29CQUNoQixZQUFnQjtZQUFHLElBQUMsVUFBUyxDQUFDLElBQVgsR0FBbUI7R0FBdEI7O29CQUNoQixhQUFnQjtZQUFHLElBQUMsVUFBUyxDQUFDLEtBQVgsR0FBbUI7R0FBdEI7O29CQUNoQixZQUFnQjtZQUFHLElBQUMsVUFBUyxDQUFDLElBQVgsR0FBbUI7R0FBdEI7O29CQUNoQixjQUFnQjtZQUFHLElBQUMsVUFBUyxDQUFDLEVBQVgsR0FBbUI7R0FBdEI7O29CQUNoQixnQkFBZ0I7WUFBRyxJQUFDLFVBQVMsQ0FBQyxJQUFYLEdBQW1CO0dBQXRCOztvQkFDaEIsaUJBQWdCO1lBQUcsSUFBQyxVQUFTLENBQUMsS0FBWCxHQUFtQjtHQUF0Qjs7b0JBQ2hCLGdCQUFnQjtZQUFHLElBQUMsVUFBUyxDQUFDLElBQVgsR0FBbUI7R0FBdEI7O29CQUVoQixTQUFnQjtZQUFHLElBQUMsZUFBRDtHQUFIOztvQkFDaEIsV0FBZ0I7WUFBRyxJQUFDLGlCQUFEO0dBQUg7O29CQU9oQixTQUFRO0tBQ04sSUFBQyxZQUFELEdBQWU7WUFDZixJQUFDLEtBQUksQ0FBQyxNQUFOO0dBRk07O29CQUtSLGlCQUFnQjtBQUNkO0tBQUEsZ0JBQWdCLElBQUMsV0FBVSxDQUFDLFlBQVksQ0FBQztLQUN6QyxJQUF1QixJQUFDLGNBQUQsR0FBaUIsSUFBQyxRQUFPLENBQUMsTUFBVCxHQUFrQixDQUExRDtPQUFBLElBQUMsY0FBRCxJQUFrQixFQUFsQjs7QUFFQTtBQUFBOztPQUNFLElBQUMsY0FBRCxHQUFpQjtPQUNqQixJQUFTLGFBQWEsQ0FBQyxLQUFkLENBQW9CLEdBQXBCLENBQVQ7QUFBQTs7QUFGRjtLQUlBLElBQUMsV0FBVSxDQUFDLElBQVo7S0FDQSxJQUFDLFdBQVUsQ0FBQyxJQUFaLENBQWlCLFVBQVEsSUFBQyxRQUFRLEtBQUMsY0FBRCxDQUFsQztZQUNBLElBQUMsV0FBVSxDQUFDLElBQVosQ0FBaUIsSUFBQyxjQUFsQjtHQVZjOztvQkFZaEIsbUJBQWtCO0FBQ2hCO0tBQUEsZ0JBQWdCLElBQUMsV0FBVSxDQUFDLFlBQVksQ0FBQztLQUN6QyxJQUF1QixJQUFDLGNBQUQsR0FBaUIsQ0FBeEM7T0FBQSxJQUFDLGNBQUQsSUFBa0IsRUFBbEI7O0FBRUE7QUFBQTs7T0FDRSxJQUFDLGNBQUQsR0FBaUI7T0FDakIsSUFBUyxhQUFhLENBQUMsS0FBZCxDQUFvQixHQUFwQixDQUFUO0FBQUE7O0FBRkY7S0FJQSxJQUFDLFdBQVUsQ0FBQyxJQUFaO0tBQ0EsSUFBQyxXQUFVLENBQUMsSUFBWixDQUFpQixVQUFRLElBQUMsUUFBUSxLQUFDLGNBQUQsQ0FBbEM7WUFDQSxJQUFDLFdBQVUsQ0FBQyxJQUFaLENBQWlCLElBQUMsY0FBbEI7R0FWZ0I7O29CQWFsQixRQUFPO0tBQ0wsSUFBRyxJQUFDLFlBQUQsR0FBZSxDQUFsQjtPQUNFLElBQUMsWUFBRCxJQUFnQjtPQUNoQixJQUFDLEtBQUksQ0FBQyxJQUFOO2NBQ0EsSUFBQyxRQUFPLENBQUMsS0FBVCxHQUhGOztHQURLOztvQkFNUCxnQkFBZTtBQUViO0tBQUEsV0FBYyxJQUFDLGNBQUosR0FBdUIsbUJBQXZCLEdBQWdEO1lBQzNELENBQUMsQ0FBQyxJQUFGLENBQU8sUUFBUCxFQUFpQjtjQUFBLFNBQUMsR0FBRCxFQUFNLE1BQU47QUFDZjtTQUFBLFFBQVEsS0FBQyxXQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUEzQixDQUFrQyxNQUFNLENBQUMsUUFBUyxLQUFsRDtTQUNSLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBYixDQUFpQjtrQkFBRyxLQUFFLFFBQUY7U0FBSCxDQUFqQjtTQUNBLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBYixDQUFpQjtXQUFHLElBQWtCLE1BQU0sQ0FBQyxLQUFQLENBQWEsTUFBYixDQUFsQjtvQkFBQSxLQUFDLE9BQUQsR0FBVSxLQUFWOztTQUFILENBQWpCO2dCQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBWCxDQUFpQjtXQUFHLElBQXdCLE1BQU0sQ0FBQyxLQUFQLENBQWEsTUFBYixDQUF4QjtvQkFBQSxLQUFFLENBQUcsTUFBRCxHQUFRLE1BQVYsQ0FBRjs7U0FBSCxDQUFqQjtPQUplO0tBQUEsUUFBakI7R0FIYTs7b0JBVWYsa0JBQWlCO0tBRWYsSUFBQyxXQUFVLENBQUMsR0FBWixDQUFnQixLQUFoQixFQUF1QixDQUNyQixpQkFEcUIsRUFFckIsaUJBRnFCLEVBR3JCLGlCQUhxQixFQUlyQixpQkFKcUIsRUFLckIsaUJBTHFCLEVBTXJCLGlCQU5xQixFQU9yQixpQkFQcUIsRUFRckIsaUJBUnFCLEVBU3JCLGlCQVRxQixDQUF2QixFQVVHLFNBVkgsRUFVYyxLQVZkO0tBYUEsSUFBQyxXQUFVLENBQUMsR0FBWixDQUFnQixXQUFoQixFQUE2QixDQUMzQixpQkFEMkIsRUFFM0IsaUJBRjJCLEVBRzNCLG1CQUgyQixFQUkzQixpQkFKMkIsQ0FBN0IsRUFLRyxTQUxILEVBS2MsSUFMZDtLQU1BLElBQUMsV0FBVSxDQUFDLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEIsQ0FDMUIsZ0JBRDBCLEVBRTFCLGdCQUYwQixFQUcxQixrQkFIMEIsRUFJMUIsZ0JBSjBCLENBQTVCLEVBS0csU0FMSCxFQUtjLElBTGQ7S0FNQSxJQUFDLFdBQVUsQ0FBQyxHQUFaLENBQWdCLGNBQWhCLEVBQWdDLENBQzlCLG9CQUQ4QixFQUU5QixvQkFGOEIsRUFHOUIsc0JBSDhCLEVBSTlCLG9CQUo4QixDQUFoQyxFQUtHLFNBTEgsRUFLYyxJQUxkO0tBTUEsSUFBQyxXQUFVLENBQUMsR0FBWixDQUFnQixhQUFoQixFQUErQixDQUM3QixtQkFENkIsRUFFN0IsbUJBRjZCLEVBRzdCLHFCQUg2QixFQUk3QixtQkFKNkIsQ0FBL0IsRUFLRyxTQUxILEVBS2MsSUFMZDtZQU1BLElBQUMsV0FBVSxDQUFDLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEIsQ0FDMUIsZ0JBRDBCLEVBRTFCLGdCQUYwQixFQUcxQixrQkFIMEIsRUFJMUIsZ0JBSjBCLENBQTVCLEVBS0csU0FMSCxFQUtjLElBTGQ7R0F2Q2U7O29CQThDakIscUJBQW9CO1lBQ2xCLElBQUMsTUFBRCxHQUFTLFlBQVksQ0FBQyxNQUFiLENBQ1A7T0FBQSxTQUFTLE9BQVQ7T0FDQSxRQUFRO1NBQ047V0FBRSxNQUFNLE9BQVI7V0FBaUIsTUFBTSxHQUF2QjtXQUE0QixJQUFJLFFBQWhDO1VBRE0sRUFFTjtXQUFFLE1BQU0sT0FBUjtXQUFpQixNQUFNLEdBQXZCO1dBQTRCLElBQUksUUFBaEM7VUFGTSxFQUdOO1dBQUUsTUFBTSxNQUFSO1dBQWlCLE1BQU0sR0FBdkI7V0FBNEIsSUFBSSxPQUFoQztVQUhNO1FBRFI7T0FLQSxXQUNFO1NBQUEsU0FBUztrQkFBQSxTQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsRUFBZDtvQkFBcUIsS0FBQyxXQUFVLENBQUMsSUFBWixDQUFpQixJQUFqQixFQUF1QixJQUF2QjtXQUFyQjtTQUFBLFFBQVQ7U0FDQSxTQUFTO2tCQUFBLFNBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxFQUFkO29CQUFxQixLQUFDLEtBQUQsQ0FBTSxVQUFRLEtBQUMsUUFBUSxNQUFDLGNBQUQsQ0FBdkI7V0FBckI7U0FBQSxRQURUO1NBRUEsUUFBUTtrQkFBQSxTQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsRUFBZDtvQkFBc0IsS0FBQyxLQUFELENBQU0sS0FBTjtXQUF0QjtTQUFBLFFBRlI7UUFORjtNQURPO0dBRFM7Ozs7SUE5TkQsTUFBTSxDQUFDOztBQTBPNUIsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7O0FDN1FqQjtHQUFBOzs7QUFBQSxPQUFNLENBQUMsT0FBUCxHQUF1Qjs7O0dBQ1IsZUFBQyxJQUFELEVBQVEsUUFBUjtLQUFDLElBQUMsUUFBRDs7T0FBTyxXQUFTOztLQUM1Qix1Q0FBTSxJQUFDLEtBQVAsRUFBYSxDQUFiLEVBQWdCLElBQUMsS0FBSSxDQUFDLE1BQU4sR0FBZSxRQUEvQjtLQUNBLElBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFkLENBQXFCLElBQXJCLEVBQXdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBdkM7S0FDQSxJQUFDLEtBQUksQ0FBQyxPQUFOLENBQWMsSUFBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQTFCLEVBQWlDLENBQWpDLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDO0tBQ0EsSUFBQyxLQUFJLENBQUMsWUFBTixHQUFxQjtLQUNyQixJQUFDLEtBQUksQ0FBQyxTQUFOLEdBQWtCO0tBQ2xCLElBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFWLENBQW1CLElBQW5CO0dBTlc7Ozs7SUFEc0IsTUFBTSxDQUFDOzs7Ozs7O0FDQTVDO0dBQUE7OztBQUFBLFVBQVMsb0JBQVEsRUFBUjs7QUFDVCxRQUFPLG9CQUFRLEVBQVI7O0FBTVAsb0JBQ0U7R0FBQSxVQUFVO0tBQUUsR0FBRyxDQUFMO0tBQVEsR0FBRyxDQUFYO0lBQVY7R0FDQSxXQUFXO0tBQUUsR0FBRyxDQUFMO0tBQVEsR0FBRyxDQUFYO0lBRFg7R0FFQSxhQUFhO0tBQUUsR0FBRyxHQUFMO0tBQVUsR0FBRyxHQUFiO0lBRmI7R0FHQSxRQUFRO0tBQUUsR0FBRyxHQUFMO0tBQVUsR0FBRyxHQUFiO0lBSFI7R0FJQSxjQUFjO0tBQUUsR0FBRyxHQUFMO0tBQVUsR0FBRyxHQUFiO0lBSmQ7R0FLQSxhQUFhO0tBQUUsR0FBRyxDQUFMO0tBQVEsR0FBRyxDQUFYO0lBTGI7R0FNQSxjQUFjO0tBQUUsR0FBRyxDQUFMO0tBQVEsR0FBRyxDQUFYO0lBTmQ7OztBQVFGLGFBQ0U7R0FBQSxVQUFVO0tBQUUsR0FBRyxDQUFMO0tBQVEsR0FBRyxDQUFYO0lBQVY7R0FDQSxXQUFXO0tBQUUsR0FBRyxDQUFMO0tBQVEsR0FBRyxDQUFYO0lBRFg7R0FFQSxhQUFhO0tBQUUsR0FBRyxDQUFMO0tBQVEsR0FBRyxDQUFYO0lBRmI7R0FHQSxjQUFjO0tBQUUsR0FBRyxDQUFMO0tBQVEsR0FBRyxDQUFYO0lBSGQ7OztBQUtGLGlCQUFnQixDQUNkLFVBRGMsRUFFZCxXQUZjLEVBR2QsYUFIYyxFQUlkLGNBSmM7O0FBT1Y7OztHQUNTLHNCQUFDLElBQUQsRUFBUSxVQUFSLEVBQXFCLFdBQXJCO0tBQUMsSUFBQyxRQUFEO0tBQU8sSUFBQyxjQUFEO0tBQWEsSUFBQyxvQ0FBRCxjQUFZO0tBQzVDLDhDQUFNLElBQUMsS0FBUCxFQUFhLElBQWIsRUFBbUIsY0FBbkI7S0FDQSxJQUFDLE1BQUQ7S0FHQSxJQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBVixDQUFtQixJQUFuQjtHQUxXOzswQkFRYixRQUFPO1lBQUcsSUFBQyxlQUFEO0dBQUg7OzBCQUdQLFFBQU8sU0FBQyxVQUFEO0FBRUw7O09BRk0sYUFBVyxJQUFDOztLQUVsQixJQUFDLFdBQUQsR0FBYztLQUVkLElBQUMsU0FBRCxHQUFZLElBQUMsV0FBVSxDQUFDO0tBQ3hCLElBQUMsV0FBRCxHQUFjLElBQUMsV0FBVSxDQUFDO0tBQzFCLElBQUMsU0FBRCxHQUFZLElBQUMsV0FBVSxDQUFDO0tBRXhCLElBQUMsVUFBRCxHQUFhO0tBQ2IsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxJQUFDLFVBQVg7S0FDQSxJQUFDLGlCQUFELEdBQXVCLElBQUMsU0FBSixHQUFrQixDQUFDLGFBQUQsRUFBZ0IsY0FBaEIsQ0FBbEIsR0FBdUQsQ0FBQyxRQUFEO0tBQzNFLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBQyxpQkFBWDtBQUVBLFVBQTJCLGtHQUEzQjtPQUFBLElBQUMsVUFBRDtBQUFBO0FBQ0E7VUFBeUIsaUdBQXpCO29CQUFBLElBQUMsUUFBRDtBQUFBOztHQWRLOzswQkFnQlAsWUFBVztBQUNUO0tBQUEsTUFBTSxJQUFDLG1CQUFELENBQW9CLFFBQXBCO1lBQ04sSUFBQyxJQUFELENBQVMsV0FBTyxJQUFDLEtBQVIsRUFBYyxJQUFDLFdBQWYsRUFBMkIsR0FBRyxDQUFDLENBQS9CLEVBQWtDLEdBQUcsQ0FBQyxDQUF0QyxDQUFUO0dBRlM7OzBCQUlYLFVBQVM7QUFDUDtLQUFBLE1BQU0sSUFBQyxtQkFBRCxDQUFvQixNQUFwQjtZQUNOLElBQUMsSUFBRCxDQUFTLFNBQUssSUFBQyxLQUFOLEVBQVksSUFBQyxXQUFiLEVBQXlCLEdBQUcsQ0FBQyxDQUE3QixFQUFnQyxHQUFHLENBQUMsQ0FBcEMsQ0FBVDtHQUZPOzswQkFJVCxxQkFBb0IsU0FBQyxHQUFEO0FBQ2xCO0tBQUEsTUFBTTtBQUNOLGFBQU8sR0FBUDtBQUFBLFlBQ08sUUFEUDtTQUVJLElBQUcsSUFBQyxpQkFBZ0IsQ0FBQyxNQUFsQixHQUEyQixDQUE5QjtXQUNFLFVBQVUsSUFBQyxpQkFBZ0IsQ0FBQyxHQUFsQjtXQUNWLE1BQU0sZ0JBQWlCLFVBRnpCO1VBQUE7V0FJRSxVQUFVLElBQUMsVUFBUyxDQUFDLEdBQVg7V0FDVixNQUFNLFNBQVUsVUFMbEI7O0FBREc7QUFEUCxZQVFPLE1BUlA7U0FTSSxVQUFVLElBQUMsVUFBUyxDQUFDLEdBQVg7U0FDVixNQUFNLFNBQVU7QUFWcEI7QUFXQSxZQUFPO0dBYlc7Ozs7SUFwQ0ssTUFBTSxDQUFDOztBQW1EbEMsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7O0FDaEZqQjtHQUFBOzs7QUFBTTs7O0dBQ1MsY0FBQyxJQUFELEVBQVEsS0FBUixFQUFlLENBQWYsRUFBb0IsQ0FBcEI7QUFDWDtLQURZLElBQUMsUUFBRDs7T0FBYyxJQUFFOzs7T0FBRyxJQUFFOztLQUNqQyxNQUFNO0tBQ04sc0NBQU0sSUFBQyxLQUFQLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixHQUFuQixFQUF3QixVQUFRLEtBQWhDO0tBR0EsSUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVYsQ0FBbUIsSUFBbkI7S0FDQSxJQUFDLEtBQUQ7QUFFQSxZQUFPO0dBUkk7O2tCQVViLFFBQU8sU0FBQyxDQUFELEVBQUksQ0FBSjtLQUNMLElBQUMsRUFBRCxHQUFLO1lBQ0wsSUFBQyxFQUFELEdBQUs7R0FGQTs7a0JBSVAsT0FBTTtZQUFHLElBQUMsTUFBRCxDQUFPLElBQUMsRUFBUixFQUFXLElBQUMsRUFBWjtHQUFIOztrQkFFTixPQUFNO1lBQUcsSUFBQyxLQUFEO0dBQUg7Ozs7SUFqQlcsTUFBTSxDQUFDOztBQW1CMUIsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7QUNuQmpCO0dBQUE7OztBQUFBLFdBQVUsb0JBQVEsQ0FBUjs7QUFFSjs7O0dBQ1MsY0FBQyxJQUFELEVBQVEsVUFBUixFQUFxQixDQUFyQixFQUEwQixDQUExQjtLQUFDLElBQUMsUUFBRDtLQUFPLElBQUMsY0FBRDs7T0FBYSxJQUFFOzs7T0FBRyxJQUFFOztLQUN2QyxzQ0FBTSxJQUFDLEtBQVAsRUFBYSxJQUFDLFdBQWQsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsTUFBaEM7R0FEVzs7OztJQURJOztBQUluQixPQUFNLENBQUMsT0FBUCxHQUFpQjs7Ozs7OztBQ05qQjtHQUFBOzs7QUFBTTs7O0dBQ1MsZUFBQyxJQUFELEVBQVEsVUFBUjtBQUNYO0tBRFksSUFBQyxRQUFEO0tBQU8sSUFBQyxjQUFEO0tBQ25CLE1BQU07S0FDTixRQUFRO0tBQ1IsdUNBQU0sSUFBQyxLQUFQLEVBQWEsR0FBYixFQUFrQixNQUFNLEVBQXhCO0tBR0EsSUFBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQWQsQ0FBcUIsSUFBckIsRUFBd0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF2QztLQUNBLElBQUMsS0FBSSxDQUFDLFNBQU4sR0FBa0I7S0FHbEIsSUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVYsQ0FBbUIsSUFBbkI7QUFHQSxZQUFPO0dBYkk7O21CQWViLFNBQVE7WUFBRyxJQUFDLE1BQUQsQ0FBTyxHQUFQLEVBQVksTUFBTSxFQUFsQjtHQUFIOzttQkFFUixPQUFNOzttQkFFTixPQUFNOzs7O0lBcEJZLE1BQU0sQ0FBQzs7QUFzQjNCLE9BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7Ozs7O0FDdEJqQjtHQUFBOzs7QUFBQSxPQUFNLENBQUMsT0FBUCxHQUF1Qjs7O0dBQ1IsY0FBQyxJQUFELEVBQVEsUUFBUjtLQUFDLElBQUMsUUFBRDs7T0FBTyxXQUFTOztLQUM1QixzQ0FBTSxJQUFDLEtBQVAsRUFBYSxRQUFiLEVBQXVCLENBQXZCO0tBQ0EsSUFBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQWQsQ0FBcUIsSUFBckIsRUFBd0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF2QztLQUNBLElBQUMsS0FBSSxDQUFDLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLElBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUE3QixFQUFxQyxDQUFyQyxFQUF3QyxDQUF4QztLQUNBLElBQUMsS0FBSSxDQUFDLFlBQU4sR0FBcUI7S0FDckIsSUFBQyxLQUFJLENBQUMsU0FBTixHQUFrQjtLQUNsQixJQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBVixDQUFtQixJQUFuQjtHQU5XOzs7O0lBRHFCLE1BQU0sQ0FBQzs7Ozs7OztBQ0EzQzs7QUFBTTtHQUNTOztrQkFFYixTQUFRO0tBRU4sSUFBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGVBQVosR0FBOEI7S0FHOUIsSUFBQyxNQUFLLENBQUMscUJBQVAsR0FBK0I7S0FDL0IsSUFBQyxNQUFLLENBQUMsU0FBUCxHQUFtQixNQUFNLENBQUMsWUFBWSxDQUFDO1lBR3ZDLElBQUMsTUFBSyxDQUFDLEtBQVAsQ0FBYSxTQUFiO0dBVE07O2tCQVdSLFVBQVM7WUFFUCxJQUFDLEtBQUksQ0FBQyxNQUFOO0dBRk87Ozs7OztBQUlYLE9BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7Ozs7O0FDakJqQjs7QUFBQSxTQUFXLG9CQUFRLEVBQVI7O0FBQ1gsV0FBVyxvQkFBUSxFQUFSOztBQUNYLFFBQVcsb0JBQVEsRUFBUjs7QUFDWCxlQUFjOztBQU9kLFVBQVMsb0JBQVEsRUFBUjs7QUFDVCxnQkFBZSxvQkFBUSxFQUFSOztBQUNmLFNBQVMsb0JBQVEsRUFBUjs7QUFFVCxpQkFBZ0I7O0FBQ2hCLHFCQUFvQjs7QUFFZDtHQUNTOztrQkFFYixTQUFRO0tBRU4sSUFBQyxRQUFELEdBQWtCLFlBQVEsSUFBQyxLQUFULEVBQWUsRUFBZjtLQUNsQixJQUFDLE1BQUQsR0FBa0IsVUFBTSxJQUFDLEtBQVAsRUFBYSxDQUFDLEVBQWQ7S0FDbEIsSUFBQyxnQkFBRCxHQUF1QixTQUFLLElBQUMsS0FBTixFQUFZLEVBQVo7S0FDdkIsSUFBQyxVQUFELEdBQWtCLFNBQUssSUFBQyxLQUFOLEVBQVksSUFBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQVosR0FBb0IsQ0FBcEIsR0FBd0IsV0FBcEM7S0FDbEIsSUFBQyxpQkFBRCxHQUF3QixTQUFLLElBQUMsS0FBTixFQUFZLEdBQVo7S0FDeEIsSUFBQyxXQUFELEdBQWtCLFNBQUssSUFBQyxLQUFOLEVBQVksSUFBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQVosR0FBb0IsQ0FBcEIsR0FBeUIsV0FBckM7S0FNbEIsSUFBQyxXQUFELEdBQWtCLFdBQU8sSUFBQyxLQUFSLEVBQWMsSUFBZDtLQUNsQixJQUFDLFdBQUQsR0FBa0IsV0FBTyxJQUFDLEtBQVIsRUFBYyxJQUFkLEVBQWlCLEtBQWpCO0tBR2xCLElBQUMsUUFBRCxHQUFZLENBQUUsSUFBQyxXQUFVLENBQUMsT0FBZCxFQUF1QixJQUFDLFdBQVUsQ0FBQyxPQUFuQztLQUNaLElBQUMsTUFBRCxHQUFZLENBQUUsSUFBQyxVQUFILEVBQWMsSUFBQyxXQUFmO0tBQ1osSUFBQyxTQUFELEdBQVksQ0FBRSxJQUFDLFFBQUgsRUFBWSxJQUFDLE1BQWI7S0FDWixJQUFDLFFBQUQsR0FBWSxDQUFFLElBQUMsV0FBSCxFQUFlLElBQUMsV0FBaEI7S0FDWixJQUFDLE1BQUQsR0FBYSxVQUFNLElBQUMsS0FBUCxFQUFhLElBQUMsV0FBZDtLQUNiLElBQUMsUUFBRCxHQUFXO1lBR1gsSUFBQyxNQUFEO0dBekJNOztrQkEyQlIsUUFBTztZQUVMLElBQUMsV0FBRDtHQUZLOztrQkFJUCxTQUFRO0tBRU4sSUFBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFyQixDQUE2QixJQUFDLFFBQTlCLEVBQXVDLElBQUMsU0FBeEM7S0FHQSxJQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQXJCLENBQTZCLElBQUMsUUFBOUIsRUFBdUMsSUFBQyxRQUF4QyxFQUFpRDtjQUFBLFNBQUMsTUFBRCxFQUFTLE1BQVQ7QUFJL0M7QUFBQTtBQUFBOztXQUFBLENBQUMsQ0FBQyxJQUFGO0FBQUE7QUFDQTtBQUFBOztXQUFBLENBQUMsQ0FBQyxJQUFGO0FBQUE7U0FFQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWQ7U0FDQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWQsSUFBc0I7U0FFdEIsS0FBQyxLQUFJLENBQUMsS0FBTixJQUFlO2dCQUVmLE1BQU0sQ0FBQyxHQUFQO09BWitDO0tBQUEsUUFBakQ7WUFlQSxJQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQXJCLENBQTZCLElBQUMsUUFBOUIsRUFBdUMsSUFBQyxRQUF4QyxFQUFpRDtjQUFBLFNBQUMsTUFBRCxFQUFTLE9BQVQ7QUFDL0M7U0FBQSxjQUFjLE1BQU0sQ0FBQyxDQUFQLEdBQVcsTUFBTSxDQUFDO1NBQ2hDLE1BQU0sQ0FBQyxJQUFQO2dCQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsV0FBZjtPQUgrQztLQUFBLFFBQWpEO0dBcEJNOztrQkF5QlIsU0FBUTtLQUNOLElBQUcsSUFBQyxLQUFJLENBQUMsU0FBVDtPQUNFLElBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFaLENBQWlCLElBQUMsUUFBbEI7T0FDQSxJQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBWixDQUFpQixJQUFDLE1BQWxCO09BQ0EsSUFBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQVosQ0FBaUIsSUFBQyxVQUFsQjtPQUNBLElBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFaLENBQWlCLElBQUMsV0FBbEI7T0FDQSxJQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBWixDQUFpQixJQUFDLFdBQWxCO09BQ0EsSUFBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQVosQ0FBaUIsSUFBQyxXQUFsQjtPQUNBLElBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFaLENBQWlCLElBQUMsV0FBVSxDQUFDLE9BQTdCO2NBQ0EsSUFBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQVosQ0FBaUIsSUFBQyxXQUFVLENBQUMsT0FBN0IsRUFSRjs7R0FETTs7a0JBV1IsYUFBWTtBQUNWO0tBQUEsWUFBWSxJQUFDLEtBQUksQ0FBQztLQUNsQixRQUFRLElBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFPLE1BQUcsU0FBSDtZQUMvQixJQUFDLFFBQUQsR0FBZSxpQkFBYSxJQUFDLEtBQWQsRUFBb0IsSUFBcEIsRUFBdUIsS0FBdkI7R0FITDs7Ozs7O0FBS2QsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7QUNqRmpCOztBQUFNO0dBQ1M7O21CQUViLFNBQVE7WUFDTixPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7R0FETTs7bUJBSVIsUUFBTzs7bUJBRVAsU0FBUTs7Ozs7O0FBRVYsT0FBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7Ozs7QUN2QmpCOztBQUFNO0dBQ1M7O3FCQUViLFVBQVM7QUFDUDtLQUFBLElBQXlDLElBQUMsS0FBSSxDQUFDLEdBQU4sS0FBYSxHQUF0RDtPQUFBLElBQUMsS0FBSSxDQUFDLFdBQU4sR0FBb0IsSUFBQyxLQUFJLENBQUMsUUFBMUI7O0tBR0EsTUFBTSxJQUFDLEtBQUksQ0FBQztLQUVaLE1BQU07S0FDTixjQUFpQixHQUFELEdBQUs7S0FDckIsYUFBYSxvQkFBUSxDQUFSO0tBQ2IsSUFBQyxLQUFJLENBQUMsYUFBTixDQUFvQixHQUFwQixFQUF5QixXQUF6QixFQUFzQyxJQUF0QyxFQUE0QyxVQUE1QztZQUdBLENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQXZCLEVBQTRCO2NBQUEsU0FBQyxHQUFEO0FBQzFCO1NBQUEsUUFBUSxLQUFDLEtBQUksQ0FBQyxLQUFOLENBQVksR0FBWixFQUNSLENBQUksR0FBRCxHQUFLLFFBQUwsR0FBYSxHQUFiLEdBQWlCLE1BQWpCLEdBQXVCLEtBQUMsS0FBSSxDQUFDLE9BQWhDLEVBQ0csR0FBRCxHQUFLLFFBQUwsR0FBYSxHQUFiLEdBQWlCLE1BQWpCLEdBQXVCLEtBQUMsS0FBSSxDQUFDLE9BRC9CLENBRFE7U0FHUixJQUE4QyxLQUFDLEtBQUksQ0FBQyxHQUFOLEtBQWEsR0FBM0Q7a0JBQUEsS0FBSyxDQUFDLFdBQU4sR0FBb0IsS0FBQyxLQUFJLENBQUMsWUFBMUI7O09BSjBCO0tBQUEsUUFBNUI7R0FaTzs7cUJBa0JULFNBQVE7S0FDTixJQUFHLElBQUMsS0FBSSxDQUFDLFNBQVQ7Y0FDRSxJQUFDLE1BQUssQ0FBQyxLQUFQLENBQWEsTUFBYixFQURGO01BQUE7Y0FHRSxJQUFDLE1BQUssQ0FBQyxLQUFQLENBQWEsT0FBYixFQUhGOztHQURNOzs7Ozs7QUFNVixPQUFNLENBQUMsT0FBUCxHQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDM0JqQjs7QUFBQSxjQUFhLG9CQUFRLENBQVI7O0FBR2IsR0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCO0dBRWpCLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWjtVQUNBO0FBSGlCLEVBQWxCOzs7Ozs7OztBQ0hBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsOERBQTZELHFCQUFxQixlQUFlLGtEQUFrRDtBQUNuSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixrREFBa0QsU0FBUyxlQUFlO0FBQ3RHLDZCQUE0QixrREFBa0Q7O0FBRTlFO0FBQ0EsdUdBQXNHO0FBQ3RHO0FBQ0EseUJBQXdCLGtCQUFrQjtBQUMxQztBQUNBOztBQUVBLGtEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLHVEQUF1RDtBQUNwRTs7QUFFQSxzQkFBcUIsb0JBQW9CO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLGlHQUFpRztBQUMxSSwwQ0FBeUMsMEhBQTBIO0FBQ25LLDBDQUF5Qyx5QkFBeUI7QUFDbEUsMENBQXlDLGtDQUFrQztBQUMzRSwwQ0FBeUMsMEJBQTBCO0FBQ25FLHFGQUFvRixnQkFBZ0IsR0FBRzs7QUFFdkc7QUFDQTs7QUFFQTs7QUFFQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUwsMkRBQTBELHVHQUF1RyxFQUFFO0FBQ25LLDJEQUEwRCx1R0FBdUcsRUFBRTtBQUNuSywyREFBMEQsdUdBQXVHLEVBQUU7QUFDbkssMkRBQTBELHVHQUF1RyxFQUFFO0FBQ25LLDJEQUEwRCx1R0FBdUcsRUFBRTs7QUFFbkssMkRBQTBELHVHQUF1RyxFQUFFO0FBQ25LLDJEQUEwRCx1R0FBdUcsRUFBRTtBQUNuSywyREFBMEQsdUdBQXVHLEVBQUU7QUFDbkssMkRBQTBELHVHQUF1RyxFQUFFOztBQUVuSztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIscUJBQXFCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7OztBQ2xPRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2phdmFzY3JpcHRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOTE0NjlhZThiYzljMjcwMmM5ZThcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9cIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNsYXNzIFRlcnJhaW4gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCB4PTAsIHk9MCwgZnJhbWU9J2NhY3R1cycpIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gXCJ0ZXJyYWluLyN7ZnJhbWV9XCJcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBmcmFtZVxuXG4gICAgIyBzZXQgcGh5c2ljcyBib2R5XG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cbiAgICAjIGFkZCBjcm9wIHJlY3RcbiAgICBAY3JvcFJlY3QgPSBAZ2FtZS5hZGQuZ3JhcGhpY3MoKVxuXG4gICAgcmV0dXJuIEBcblxuICBkZWZvcm06IChjb2xsaXNpb25feSkgLT5cbiAgICBoZWlnaHQgPSBjb2xsaXNpb25feSAtIEB5XG4gICAgIyBkZWZvcm0gYm9keVxuICAgIEBib2R5LnNldFNpemUgQHdpZHRoLCBAaGVpZ2h0IC0gaGVpZ2h0LCAwLCBoZWlnaHRcbiAgICBAZHJhd1JlY3QgaGVpZ2h0XG5cbiAgcmVsb2FkOiAtPiBAY3JvcFJlY3QuY2xlYXIoKVxuXG4gIGRyYXdSZWN0OiAoaGVpZ2h0KSAtPlxuICAgIEBjcm9wUmVjdC5saW5lU3R5bGUgMFxuICAgIEBjcm9wUmVjdC5iZWdpbkZpbGwgXCIweDAwMDAwMFwiXG4gICAgQGNyb3BSZWN0LmRyYXdSZWN0IEB4LCBAeSwgQHdpZHRoLCBoZWlnaHRcbiAgICBAY3JvcFJlY3QuZW5kRmlsbCgpXG4gICAgQGdhbWUud29ybGQuYnJpbmdUb1RvcCBAY3JvcFJlY3RcblxubW9kdWxlLmV4cG9ydHMgPSBUZXJyYWluXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy90ZXJyYWluLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqUXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImF0bGFzID1cbiAgJ2ZyYW1lcyc6XG4gICAgJzAnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NDJcbiAgICAgICAgJ3knOiAxNzZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICcxJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDk0XG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDE2XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDE2XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxNlxuICAgICAgICAnaCc6IDQwXG4gICAgJzInOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NjhcbiAgICAgICAgJ3knOiAxNzZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICczJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDQyXG4gICAgICAgICd5JzogMjE4XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnNCc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ2OFxuICAgICAgICAneSc6IDIxOFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAxNzRcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc2JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMjE2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnNyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEwMFxuICAgICAgICAneSc6IDI1OFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzgnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAzMDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc5JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzI4XG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9EUkFXJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzM2XG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxNTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR0FNRSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEzMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR0VUX1JFQURZJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDQ0XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9HT1RfTUUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyNzZcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyMTJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR1VOX0ZJR0hUJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9JTlNFUlRfQ09JTic6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAyXG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDMzMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9PVkVSJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjU0XG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAnYW1tbyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDI3NlxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDE4MFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAnYnVsbGV0JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDkwXG4gICAgICAgICd5JzogNDRcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOFxuICAgICAgICAnaCc6IDhcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICd0ZXJyYWluL2NhY3R1cyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ1OFxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDMyXG4gICAgICAgICdoJzogODhcbiAgICAnY293Ym95L2RlYWQvaGl0JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTk4XG4gICAgICAgICd5JzogNTg0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTMyXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAnY293Ym95L2RlYWQvcmlwJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjhcbiAgICAgICAgJ2gnOiA0NFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgJ2Nvd2JveS9oaWdoL2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTMyXG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2hpZ2gvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDE3NFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9oaWdoL3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAzMTJcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjMwXG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy9vbmUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMjhcbiAgICAgICAgJ3knOiAyMzhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEyNlxuICAgICAgICAneSc6IDMwOFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWQvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyMjRcbiAgICAgICAgJ3knOiAzMDhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkL29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDMyMlxuICAgICAgICAneSc6IDM3NlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWQvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogNDQ2XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNDUwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTk4XG4gICAgICAgICd5JzogNDQ2XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjk2XG4gICAgICAgICd5JzogNTE0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDM5NFxuICAgICAgICAneSc6IDUxNFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRsb3cvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogNTg0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNTg4XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAndGVycmFpbi90cmVlJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzc2XG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDY0XG4gICAgICAgICdoJzogMTA4XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAnd2Fnb24nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0MjBcbiAgICAgICAgJ3knOiAzNzZcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiA5NlxuICAnbWV0YSc6XG4gICAgJ2FwcCc6ICdodHRwOi8vd3d3LmNvZGVhbmR3ZWIuY29tL3RleHR1cmVwYWNrZXInXG4gICAgJ3ZlcnNpb24nOiAnMS4wJ1xuICAgICdpbWFnZSc6ICdhdGxhcy5wbmcnXG4gICAgJ2Zvcm1hdCc6ICdSR0JBODg4OCdcbiAgICAnc2l6ZSc6XG4gICAgICAndyc6IDUxMlxuICAgICAgJ2gnOiAxMDI0XG4gICAgJ3NjYWxlJzogJzEnXG4gICAgJ3NtYXJ0dXBkYXRlJzogJyRUZXh0dXJlUGFja2VyOlNtYXJ0VXBkYXRlOjEwNmI3YzI3MTZjNDIzNTU5MzUzZjE0YjQ0MTNkMjQzOmVmMzA3YjBhYmQxMjA3OTg4MTFhMzVkYjVlODYwNmNmOmNiY2U2YjUzZjBmNDllMGJmMTUxNzNjMjVjNDFmODc2JCdcblxubW9kdWxlLmV4cG9ydHMgPSBhdGxhc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWVcbiAqKi8iLCJsZXZlbHMgPSB7XG4gICMgMTpcbiAgIyAgIHdhZ29uOiBmYWxzZVxuICAjICAgbnVtX2NhY3R1czogMVxuICAxOlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogM1xuICAgIG51bV90cmVlOiAyXG4gIDI6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgbnVtX2NhY3R1czogMlxuICAzOlxuICAgIHdhZ29uOiBmYWxzZVxuICAgIG51bV9jYWN0dXM6IDNcbiAgNDpcbiAgICB3YWdvbjogZmFsc2VcbiAgICBudW1fY2FjdHVzOiA0XG4gIDU6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiA0XG4gIDY6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiA1XG4gIDc6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiAyXG4gICAgbnVtX3RyZWU6IDFcbiAgODpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDFcbiAgICBudW1fdHJlZTogMlxuICA5OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogMlxuICAgIG51bV90cmVlOiAyXG4gIDEwOlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogM1xuICAgIG51bV90cmVlOiAyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGV2ZWxzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2xldmVscy5jb2ZmZWVcbiAqKi8iLCJzZnggPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNmeFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZnguY29mZmVlXG4gKiovIiwic3ByaXRlcyA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlcyBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvc3ByaXRlcy5jb2ZmZWVcbiAqKi8iLCIkd2luZG93ID0gJCh3aW5kb3cpXG5cbiMgbW9iaWxlIGZsYWdcbmlzTW9iaWxlID0gLT5cbiAgaWYoIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApXG4gICAgdHJ1ZVxuICBlbHNlXG4gICAgZmFsc2VcblxubGF1bmNoID0gKGNkbj1cIi9cIiwgdmVyc2lvbj1cIj92PTAuMC4wXCIpIC0+XG5cbiAgIyA0OjNcbiAgZ2FtZV93aWR0aCA9IDEwODhcbiAgZ2FtZV9oZWlnaHQgPSA4MTZcblxuICAjIENvbnN0cnVjdCBHYW1lXG4gIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXG4gICAgZ2FtZV93aWR0aCwgICAjIHdpZHRoXG4gICAgZ2FtZV9oZWlnaHQsICAjIGhlaWdodFxuICAgIFBoYXNlci5BVVRPLCAgIyByZW5kZXJlclxuICAgICdnYW1lJywgICAgICAgIyBJRCBvZiBwYXJlbnQgZWxlbWVudFxuICAgICdib290JywgICAgICAgIyBzdGF0ZVxuICAgIGZhbHNlLCAgICAgICAgIyB0cmFuc3BhcmVudFxuICAgIGZhbHNlLCAgICAgICAgIyBhbnRpYWxpYXNcbiAgICBudWxsICAgICAgICAgICMgcGh5c2ljc0NvbmZpZ1xuICApXG5cbiAgIyBjZG5cbiAgZ2FtZS5jZG4gPSBjZG5cbiAgZ2FtZS5ob3N0dXJsID0gdW5kZWZpbmVkICNob3N0dXJsXG5cbiAgIyBnYW1lIHZlcnNpb25cbiAgZ2FtZS52ZXJzaW9uID0gdmVyc2lvblxuXG4gICMgZGVidWdcbiAgZ2FtZS5kZWJ1Z01vZGUgPSBmYWxzZVxuICBnYW1lLmRlYnVnTW9kZSA9IHRydWVcblxuICBnYW1lLmVuYWJsZU11c2ljID0gIWdhbWUuZGVidWdNb2RlXG4gIGdhbWUuZW5hYmxlU0ZYID0gIWdhbWUuZGVidWdNb2RlXG5cbiAgIyBjb25zdGFudHNcbiAgZ2FtZS5jb25zdGFudHMgPVxuICAgIFNUQVRFUzogWydib290JywgJ3ByZWxvYWQnLCAnaW50cm8nLCAnZ2FtZScsICdyZXNldCddXG4gICAgU1BSSVRFUzogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zcHJpdGVzJ1xuICAgIExFVkVMUzogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMnXG4gICAgU0ZYOiByZXF1aXJlICdjb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3NmeCdcblxuICAjIGRlZmF1bHQgbGV2ZWxcbiAgZ2FtZS5sZXZlbCA9IDFcblxuICAjIGtlZXAgdGhlIGdhbWUgd2l0aGluIHRoZSBwYWdlXG4gIGdhbWUuc2NhbGVyID0gLT5cbiAgICAkZ2FtZSA9ICQoXCIjZ2FtZVwiKVxuICAgICRjYW52YXMgPSAkKFwiY2FudmFzXCIpXG4gICAgJHdpbmRvdyA9ICQod2luZG93KVxuXG4gICAgaWYgIWlzTW9iaWxlKClcbiAgICAgICRnYW1lID0gJChcIiNnYW1lXCIpXG4gICAgICAkY2FudmFzID0gJChcImNhbnZhc1wiKVxuICAgICAgJHdpbmRvdyA9ICQod2luZG93KVxuXG4gICAgICBpZiAkZ2FtZS5oZWlnaHQoKSA+ICR3aW5kb3cuaGVpZ2h0KCkgLSAxNTBcbiAgICAgICAgJGdhbWUuY3NzKFwibWF4LWhlaWdodFwiLCAoJHdpbmRvdy5oZWlnaHQoKSAtIDE1MCkgKyBcInB4XCIpXG4gICAgICBlbHNlXG4gICAgICAgICRnYW1lLmNzcyhcIm1heC1oZWlnaHRcIiwgXCJhdXRvXCIpXG5cbiAgIyByZXF1aXJlIHN0YXRlcyBhbmQgYm9vdCFcbiAgZ2FtZS5zdGF0ZS5hZGQgc3RhdGUsIHJlcXVpcmUoXCIuL3N0YXRlcy8je3N0YXRlfS5jb2ZmZWVcIikgZm9yIHN0YXRlIGluIGdhbWUuY29uc3RhbnRzLlNUQVRFU1xuICBnYW1lLnN0YXRlLnN0YXJ0ICdib290J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxhdW5jaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2xhdW5jaC5jb2ZmZWVcbiAqKi8iLCJjbGFzcyBBbW1vIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHBsYXllcikgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnYW1tbydcbiAgICB4ID0gaWYgQHBsYXllci5pc19wbGF5ZXJfb25lIHRoZW4gOTIgZWxzZSA4MTZcbiAgICB5ID0gQGdhbWUuaGVpZ2h0IC0gNDVcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBmcmFtZVxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cbiAgICAjIGFkZCBjcm9wIHJlY3RcbiAgICBAY3JvcFJlY3QgPSBAZ2FtZS5hZGQuZ3JhcGhpY3MoKVxuXG4gICAgcmV0dXJuIEBcblxuICBjcm9wOiAtPlxuICAgIHdpZHRoID0gQHdpZHRoIC0gQHBsYXllci5udW1fYnVsbGV0cyAvIDYgKiBAd2lkdGhcbiAgICBAZHJhd1JlY3Qgd2lkdGhcblxuICByZWxvYWQ6IC0+IEBjcm9wUmVjdC5jbGVhcigpXG5cbiAgZHJhd1JlY3Q6ICh3aWR0aCkgLT5cbiAgICBAY3JvcFJlY3QubGluZVN0eWxlIDBcbiAgICBAY3JvcFJlY3QuYmVnaW5GaWxsIFwiMHgwMDAwMDBcIlxuICAgIEBjcm9wUmVjdC5kcmF3UmVjdCBAeCwgQHksIHdpZHRoLCBAaGVpZ2h0XG4gICAgQGNyb3BSZWN0LmVuZEZpbGwoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFtbW9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0FtbW8uY29mZmVlXG4gKiovIiwiIyBidWxsZXQgcG9zaXRpb24gY29uZmlnXG5HVU5fUE9TX0NPTkZJRyA9XG4gIGhpZ2g6ICAgIHt4OiA0NSwgeTogMTUsIGRlZzogLTUyfVxuICBtZWRoaWdoOiB7eDogNTAsIHk6IDM1LCBkZWc6IC0yNn1cbiAgbWVkOiAgICAge3g6IDU1LCB5OiA0NiwgZGVnOiAwfVxuICBtZWRsb3c6ICB7eDogNTAsIHk6IDc1LCBkZWc6IDIyfVxuICBsb3c6ICAgICB7eDogNDUsIHk6IDg4LCBkZWc6IDQyfVxuXG4jIHNwZWVkIG9mIGZpcmVkIGJ1bGxldFxuU1BFRUQgPSAxMDAwXG5cbmNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBwbGF5ZXIpIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gJ2J1bGxldCdcbiAgICBzdXBlciBAZ2FtZSwgQHBsYXllci5ib2R5LngsIEBwbGF5ZXIuYm9keS55LCBrZXksIGZyYW1lXG5cbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBAXG5cbiAgICAjIHZpc2liaWxpdHkgdmFyXG4gICAgQHRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAjIGJvdW5jZSBvZmYgc3VyZmFjZXNcbiAgICBAYm9keS5ib3VuY2Uuc2V0IDFcblxuICAgICMgcGxheWVyXG4gICAgQGlzX3BsYXllcl9vbmUgPSBAcGxheWVyLmlzX3BsYXllcl9vbmVcblxuICAgICMgYm91bmRzXG4gICAgQG91dE9mQm91bmRzS2lsbCA9IHRydWVcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgIEBraWxsKClcblxuICAgIHJldHVybiBAXG5cbiAgc2hvb3Q6IC0+XG4gICAgZ3VuX3BvcyA9IEBwbGF5ZXIuZ3VuX3Bvc1tAcGxheWVyLmd1bl9wb3NfaW5kZXhdXG4gICAgcG9zID0gR1VOX1BPU19DT05GSUdbZ3VuX3Bvc11cbiAgICB4ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBAcGxheWVyLmJvZHkucmlnaHQgKyBwb3MueCBlbHNlIEBwbGF5ZXIuYm9keS54IC0gcG9zLnhcbiAgICB5ID0gQHBsYXllci5ib2R5LnkgKyBwb3MueVxuICAgIGFuZ2xlID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBwb3MuZGVnIGVsc2UgMTgwIC0gcG9zLmRlZ1xuICAgICMgcmV2aXZlIHRoZSBidWxsZXRcbiAgICBAcmVzZXQgeCwgeVxuICAgICMgc2V0IHZlbG9jaXR5XG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUudmVsb2NpdHlGcm9tQW5nbGUgYW5nbGUsIFNQRUVELCBAYm9keS52ZWxvY2l0eVxuXG5jbGFzcyBCdWxsZXRzIGV4dGVuZHMgUGhhc2VyLkdyb3VwXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSAtPlxuICAgIHN1cGVyIEBnYW1lLCBudWxsLCAnYnVsbGV0cycsIGZhbHNlLCB0cnVlLCBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keVxuICAgIEBhZGQgbmV3IEJ1bGxldChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBwbGF5ZXIpIGZvciBuIGluIFsxLi5AcGxheWVyLm51bV9idWxsZXRzXVxuXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuICBzaG9vdDogLT4gQGdldEZpcnN0RGVhZCgpLnNob290KClcblxubW9kdWxlLmV4cG9ydHMgPSBCdWxsZXRzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9CdWxsZXRzLmNvZmZlZVxuICoqLyIsIlRlcnJhaW4gPSByZXF1aXJlICcuL3RlcnJhaW4uY29mZmVlJ1xuXG5jbGFzcyBDYWN0dXMgZXh0ZW5kcyBUZXJyYWluXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCB4PTAsIHk9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgQGdhbWVfc3RhdGUsIHgsIHksICdjYWN0dXMnXG5cbm1vZHVsZS5leHBvcnRzID0gQ2FjdHVzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DYWN0dXMuY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDZWlsaW5nIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCB5X29mZnNldD0wKSAtPlxuICAgIHN1cGVyIEBnYW1lLCAwLCB5X29mZnNldFxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgIEBib2R5LnNldFNpemUgQGdhbWUud29ybGQud2lkdGgsIDUsIDAsIDBcbiAgICBAYm9keS5hbGxvd0dyYXZpdHkgPSBmYWxzZVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ2VpbGluZy5jb2ZmZWVcbiAqKi8iLCJCdWxsZXRzID0gcmVxdWlyZSAnLi9CdWxsZXRzLmNvZmZlZSdcbkFtbW8gPSByZXF1aXJlICcuL0FtbW8uY29mZmVlJ1xuVGV4dCA9IHJlcXVpcmUgJy4vVGV4dC5jb2ZmZWUnXG5TdGF0ZU1hY2hpbmUgPSByZXF1aXJlICdqYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmUnXG5cbiMgUE9TSVRJT04gQ09OU1RBTlRTXG5QTEFZRVJfT05FX1ggPSAyMDBcblBMQVlFUl9PTkVfWSA9IDQ1MFxuUExBWUVSX1RXT19YID0gODg4XG5QTEFZRVJfVFdPX1kgPSA0NTBcblxuIyBNT1ZFTUVOVCBDT05TVEFOVFNcblNQRUVEID0gNjBcbkRFTFRBID0gMTVcbkZSQU1FUkFURSA9IDdcblxuIyBDT05UUk9MIENPTlNUQU5UU1xuUExBWUVSX09ORV9DT05UUk9MUyA9XG4gIG1vdmVfdXA6ICdXJ1xuICBtb3ZlX2Rvd246ICdTJ1xuICBtb3ZlX2xlZnQ6ICdBJ1xuICBtb3ZlX3JpZ2h0OiAnRCdcbiAgYWltX3VwOiAnUSdcbiAgYWltX2Rvd246ICdFJ1xuICBzaG9vdDogJ0YnXG5cblBMQVlFUl9UV09fQ09OVFJPTFMgPVxuICBtb3ZlX3VwOiAnSSdcbiAgbW92ZV9kb3duOiAnSydcbiAgbW92ZV9sZWZ0OiAnSidcbiAgbW92ZV9yaWdodDogJ0wnXG4gIGFpbV91cDogJ08nXG4gIGFpbV9kb3duOiAnVSdcbiAgc2hvb3Q6ICdIJ1xuXG5jbGFzcyBDb3dib3kgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAaXNfcGxheWVyX29uZT10cnVlKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9ICdjb3dib3kvbWVkL3R3bydcbiAgICB4ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBQTEFZRVJfT05FX1ggZWxzZSBQTEFZRVJfVFdPX1hcbiAgICB5ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBQTEFZRVJfT05FX1kgZWxzZSBQTEFZRVJfVFdPX1lcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBmcmFtZVxuXG4gICAgIyBlbmFibGUgYXJjYWRlIHBoeXNpY3NcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICAjIHNhdmUgd2lkdGggYW5kIGhlaWdodCBvZiBzcHJpdGUgYm9keVxuICAgIEB3aWR0aCA9IEBib2R5LndpZHRoXG4gICAgQGhlaWdodCA9IEBib2R5LmhlaWdodFxuICAgICMgY2hhbmdlIGJvZHkgc2l6ZSBmb3IgbW9yZSBhY2N1cmF0ZSBoaXQgY29sbGlzaW9uXG4gICAgQGJvZHkuc2V0U2l6ZSA0NSwgMTM2LCAyNSwgMFxuICAgIEBib2R5LnNldFNpemUgNDUsIDEzNiwgLTI1LCAwIGlmIEBpc19wbGF5ZXJfb25lXG4gICAgIyBjb2xsaWRlIHdpdGggd29ybGRcbiAgICBAYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlXG4gICAgIyBkb24ndCBsZXQgYnVsbGV0IHBoeXNpY3MgcHVzaCB5YSBiYWNrXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuICAgICMgc2V0IGFuY2hvciB0byBob3Jpem9udGFsIGNlbnRlciBzbyBzcHJpdGUgZmxpcHMgYXJvdW5kIGl0cyBtaWRkbGVcbiAgICBAYW5jaG9yLnNldFRvIC41LCAxXG4gICAgIyBmbGlwIHNwcml0ZSBpZiBpcyBwbGF5ZXIgdHdvXG4gICAgQHNjYWxlLnggPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIC0xIGVsc2UgMVxuXG4gICAgIyBkaXJlY3Rpb24gb2JqZWN0XG4gICAgQGRpcmVjdGlvbiA9XG4gICAgICB1cDogZmFsc2VcbiAgICAgIGRvd246IGZhbHNlXG4gICAgICBsZWZ0OiBmYWxzZVxuICAgICAgcmlnaHQ6IGZhbHNlXG5cbiAgICAjIGFpbSBvYmplY3RcbiAgICBAYWltID1cbiAgICAgIHVwOiBmYWxzZVxuICAgICAgZG93bjogZmFsc2VcblxuICAgICMgbW92ZW1lbnQgdmFyc1xuICAgIEB0aW1lID0gRGF0ZS5ub3coKVxuICAgIEBtb3ZpbmcgPSBmYWxzZVxuICAgIEBkZWFkID0gZmFsc2VcblxuICAgICMgZnJhbWUgdmFyc1xuICAgIEBndW5fcG9zID0gWydsb3cnLCdtZWRsb3cnLCdtZWQnLCdtZWRoaWdoJywnaGlnaCddXG4gICAgQGxlZ19wb3MgPSBbJ3R3bycsJ29uZScsJ2Nyb3NzJ11cbiAgICBAZ3VuX3Bvc19pbmRleCA9IDJcbiAgICBAbGVnX3Bvc19pbmRleCA9IDFcblxuICAgICMgaHVkIHZhcnNcbiAgICBAd2lucyA9IDBcbiAgICBAbnVtX2J1bGxldHMgPSA2XG4gICAgQGJ1bGxldHMgPSBuZXcgQnVsbGV0cyBAZ2FtZSwgQGdhbWVfc3RhdGUsIEBcbiAgICBAYW1tbyA9IG5ldyBBbW1vIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQFxuXG4gICAgIyB0ZXh0IGZvciBkaWUgc3RhdGVcbiAgICBAdGV4dCA9IG5ldyBUZXh0IEBnYW1lLCAnR09UX01FJ1xuXG4gICAgIyBzZXR1cCBjb250cm9sc1xuICAgIEBzZXR1cENvbnRyb2xzKClcbiAgICAjIHNldHVwIGFuaW1hdGlvbnNcbiAgICBAc2V0dXBBbmltYXRpb25zKClcbiAgICAjIGNyZWF0ZSBzdGF0ZSBtYWNoaW5lXG4gICAgQGNyZWF0ZVN0YXRlTWFjaGluZSgpXG5cbiAgICAjIGNsZWFuIHVwXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcbiAgICAjIEBraWxsKClcblxuICAgIHJldHVybiBAXG5cbiAgdXBkYXRlOiAtPlxuICAgICMgaGFuZGxlIGluY3JlbWVudGFsIG1vdmVtZW50XG4gICAgaWYgQHN0YXRlLmN1cnJlbnQgIT0gJ2R5aW5nJ1xuICAgICAgY3VycmVudF90aW1lID0gRGF0ZS5ub3coKVxuICAgICAgaWYgY3VycmVudF90aW1lIC0gQHRpbWUgPiBTUEVFRFxuICAgICAgICBAYm9keS55IC09IERFTFRBIGlmIEBkaXJlY3Rpb24udXAgICAgYW5kIEBib2R5LnkgPiBAZ2FtZV9zdGF0ZS5jZWlsaW5nLnlcbiAgICAgICAgQGJvZHkueSArPSBERUxUQSBpZiBAZGlyZWN0aW9uLmRvd24gIGFuZCBAYm9keS55IDwgQGdhbWVfc3RhdGUuZmxvb3IueSAtIEBib2R5LmhlaWdodFxuICAgICAgICBpZiBAaXNfcGxheWVyX29uZVxuICAgICAgICAgIEBib2R5LnggLT0gREVMVEEgaWYgQGRpcmVjdGlvbi5sZWZ0ICBhbmQgQGJvZHkueCA+IEBnYW1lX3N0YXRlLmxlZnRfd2FsbF9vdXRlci5ib2R5LnhcbiAgICAgICAgICBAYm9keS54ICs9IERFTFRBIGlmIEBkaXJlY3Rpb24ucmlnaHQgYW5kIEBib2R5LnJpZ2h0IDwgQGdhbWVfc3RhdGUubGVmdF93YWxsLmJvZHkueFxuICAgICAgICBlbHNlXG4gICAgICAgICAgQGJvZHkueCAtPSBERUxUQSBpZiBAZGlyZWN0aW9uLmxlZnQgIGFuZCBAYm9keS54ID4gQGdhbWVfc3RhdGUucmlnaHRfd2FsbC5ib2R5LnhcbiAgICAgICAgICBAYm9keS54ICs9IERFTFRBIGlmIEBkaXJlY3Rpb24ucmlnaHQgYW5kIEBib2R5LnJpZ2h0IDwgQGdhbWVfc3RhdGUucmlnaHRfd2FsbF9vdXRlci5ib2R5LnhcbiAgICAgICAgIyBAYW5pbWF0ZV9haW1fdXAoKSAgaWYgQGFpbS51cFxuICAgICAgICAjIEBhbmltYXRlX2FpbV9kb3duKCkgaWYgQGFpbS5kb3duXG4gICAgICAgIEB0aW1lID0gY3VycmVudF90aW1lXG5cbiAgICAgICMgaXMgdGhlIHBsYXllciBtb3Zpbmc/XG4gICAgICBAbW92aW5nID0gZmFsc2UgdW5sZXNzIEBkaXJlY3Rpb24udXAgfHwgQGRpcmVjdGlvbi5kb3duIHx8IEBkaXJlY3Rpb24ubGVmdCB8fCBAZGlyZWN0aW9uLnJpZ2h0XG5cbiAgICAgICMgdHJpZ2dlciBtb3ZlIGFuaW1hdGlvblxuICAgICAgQG1vdmUoKSBpZiAgQG1vdmluZyBhbmQgQHN0YXRlLmN1cnJlbnQgIT0gJ21vdmluZydcbiAgICAgIEBpZGxlKCkgaWYgIUBtb3ZpbmcgYW5kIEBzdGF0ZS5jdXJyZW50ICE9ICdpZGxlJ1xuXG4gICAgIyBoYW5kbGUgZHlpbmcgc2VxdWVuY2VcbiAgICBlbHNlXG4gICAgICAjIHNob3cgXCJHT1QgTUUhXCIgdGV4dFxuICAgICAgY3VycmVudF9mcmFtZSA9IEBhbmltYXRpb25zLmN1cnJlbnRGcmFtZS5uYW1lXG4gICAgICBpZiBjdXJyZW50X2ZyYW1lIGlzICdjb3dib3kvZGVhZC9yaXAnIGFuZCAhQHRleHQudmlzaWJsZVxuICAgICAgICB4ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBAYm9keS5yaWdodCAtIEB0ZXh0LndpZHRoIC8gMiBlbHNlIEBib2R5LnggLSBAdGV4dC53aWR0aCAvIDJcbiAgICAgICAgeSA9IEBib2R5LnlcbiAgICAgICAgQHRleHQucGxhY2UgeCwgeVxuICAgICAgICBAdGV4dC5zaG93KClcblxuICAgICAgIyByZXNldCB0aGUgcGxheWVyc1xuXG5cbiAgIyBjaGFuZ2Ugc3RhdGVcbiAgbW92ZTogICAgICAgICAgIC0+IEBzdGF0ZS5fbW92ZSgpXG4gIGlkbGU6ICAgICAgICAgICAtPiBAc3RhdGUuX2lkbGUoKVxuICBkaWU6ICAgICAgICAgICAgLT4gQHN0YXRlLl9kaWUoKVxuXG4gICMgY29udHJvbCBkaXJlY3Rpb25cbiAgbW92ZV91cDogICAgICAgIC0+IEBkaXJlY3Rpb24udXAgICAgPSB0cnVlXG4gIG1vdmVfbGVmdDogICAgICAtPiBAZGlyZWN0aW9uLmxlZnQgID0gdHJ1ZVxuICBtb3ZlX3JpZ2h0OiAgICAgLT4gQGRpcmVjdGlvbi5yaWdodCA9IHRydWVcbiAgbW92ZV9kb3duOiAgICAgIC0+IEBkaXJlY3Rpb24uZG93biAgPSB0cnVlXG4gIG1vdmVfdXBfb2ZmOiAgICAtPiBAZGlyZWN0aW9uLnVwICAgID0gZmFsc2VcbiAgbW92ZV9sZWZ0X29mZjogIC0+IEBkaXJlY3Rpb24ubGVmdCAgPSBmYWxzZVxuICBtb3ZlX3JpZ2h0X29mZjogLT4gQGRpcmVjdGlvbi5yaWdodCA9IGZhbHNlXG4gIG1vdmVfZG93bl9vZmY6ICAtPiBAZGlyZWN0aW9uLmRvd24gID0gZmFsc2VcblxuICBhaW1fdXA6ICAgICAgICAgLT4gQGFuaW1hdGVfYWltX3VwKClcbiAgYWltX2Rvd246ICAgICAgIC0+IEBhbmltYXRlX2FpbV9kb3duKClcbiAgIyBhaW1fdXA6ICAgICAgICAgLT4gQGFpbS51cCAgICAgICAgICA9IHRydWVcbiAgIyBhaW1fZG93bjogICAgICAgLT4gQGFpbS5kb3duICAgICAgICA9IHRydWVcbiAgIyBhaW1fdXBfb2ZmOiAgICAgLT4gQGFpbS51cCAgICAgICAgICA9IGZhbHNlXG4gICMgYWltX2Rvd25fb2ZmOiAgIC0+IEBhaW0uZG93biAgICAgICAgPSBmYWxzZVxuXG4gICMgZnVsbCBhbW1vIVxuICByZWxvYWQ6IC0+XG4gICAgQG51bV9idWxsZXRzID0gNlxuICAgIEBhbW1vLnJlbG9hZCgpXG5cbiAgIyBoYW5kbGUgYWltaW5nIGFuaW1hdGlvbnNcbiAgYW5pbWF0ZV9haW1fdXA6IC0+XG4gICAgY3VycmVudF9mcmFtZSA9IEBhbmltYXRpb25zLmN1cnJlbnRGcmFtZS5uYW1lXG4gICAgQGd1bl9wb3NfaW5kZXggKz0gMSBpZiBAZ3VuX3Bvc19pbmRleCA8IEBndW5fcG9zLmxlbmd0aCAtIDFcblxuICAgIGZvciBwb3MsIGluZGV4IGluIEBsZWdfcG9zXG4gICAgICBAbGVnX3Bvc19pbmRleCA9IGluZGV4XG4gICAgICBicmVhayBpZiBjdXJyZW50X2ZyYW1lLm1hdGNoIHBvc1xuXG4gICAgQGFuaW1hdGlvbnMuc3RvcCgpXG4gICAgQGFuaW1hdGlvbnMucGxheSBcIm1vdmUtI3tAZ3VuX3Bvc1tAZ3VuX3Bvc19pbmRleF19XCJcbiAgICBAYW5pbWF0aW9ucy5uZXh0IEBsZWdfcG9zX2luZGV4XG5cbiAgYW5pbWF0ZV9haW1fZG93bjogLT5cbiAgICBjdXJyZW50X2ZyYW1lID0gQGFuaW1hdGlvbnMuY3VycmVudEZyYW1lLm5hbWVcbiAgICBAZ3VuX3Bvc19pbmRleCAtPSAxIGlmIEBndW5fcG9zX2luZGV4ID4gMFxuXG4gICAgZm9yIHBvcywgaW5kZXggaW4gQGxlZ19wb3NcbiAgICAgIEBsZWdfcG9zX2luZGV4ID0gaW5kZXhcbiAgICAgIGJyZWFrIGlmIGN1cnJlbnRfZnJhbWUubWF0Y2ggcG9zXG5cbiAgICBAYW5pbWF0aW9ucy5zdG9wKClcbiAgICBAYW5pbWF0aW9ucy5wbGF5IFwibW92ZS0je0BndW5fcG9zW0BndW5fcG9zX2luZGV4XX1cIlxuICAgIEBhbmltYXRpb25zLm5leHQgQGxlZ19wb3NfaW5kZXhcblxuICAjIHNob290IVxuICBzaG9vdDogLT5cbiAgICBpZiBAbnVtX2J1bGxldHMgPiAwXG4gICAgICBAbnVtX2J1bGxldHMgLT0gMVxuICAgICAgQGFtbW8uY3JvcCgpXG4gICAgICBAYnVsbGV0cy5zaG9vdCgpXG5cbiAgc2V0dXBDb250cm9sczogLT5cbiAgICAjIG1hcCBjb250cm9sIGtleXNcbiAgICBjb250cm9scyA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gUExBWUVSX09ORV9DT05UUk9MUyBlbHNlIFBMQVlFUl9UV09fQ09OVFJPTFNcbiAgICBfLmVhY2ggY29udHJvbHMsIChrZXksIGFjdGlvbikgPT5cbiAgICAgIGlucHV0ID0gQGdhbWVfc3RhdGUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5IFBoYXNlci5LZXlib2FyZFtrZXldXG4gICAgICBpbnB1dC5vbkRvd24uYWRkID0+IEBbYWN0aW9uXSgpXG4gICAgICBpbnB1dC5vbkRvd24uYWRkID0+IEBtb3ZpbmcgPSB0cnVlIGlmIGFjdGlvbi5tYXRjaCAnbW92ZSdcbiAgICAgIGlucHV0Lm9uVXAuYWRkICAgPT4gQFtcIiN7YWN0aW9ufV9vZmZcIl0oKSBpZiBhY3Rpb24ubWF0Y2ggJ21vdmUnXG4gICAgICAjIGlucHV0Lm9uVXAuYWRkICAgPT4gQFtcIiN7YWN0aW9ufV9vZmZcIl0oKVxuXG4gIHNldHVwQW5pbWF0aW9uczogLT5cbiAgICAjIGRpZSBhbmltYXRpb25cbiAgICBAYW5pbWF0aW9ucy5hZGQgJ2RpZScsIFtcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9yaXAnXG4gICAgICAnY293Ym95L2RlYWQvcmlwJ1xuICAgICAgJ2Nvd2JveS9kZWFkL3JpcCdcbiAgICBdLCBGUkFNRVJBVEUsIGZhbHNlXG5cbiAgICAjIG1vdmUgYW5pbWF0aW5vc1xuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1oaWdoJywgW1xuICAgICAgJ2Nvd2JveS9oaWdoL3R3bydcbiAgICAgICdjb3dib3kvaGlnaC9vbmUnXG4gICAgICAnY293Ym95L2hpZ2gvY3Jvc3MnXG4gICAgICAnY293Ym95L2hpZ2gvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1sb3cnLCBbXG4gICAgICAnY293Ym95L2xvdy90d28nXG4gICAgICAnY293Ym95L2xvdy9vbmUnXG4gICAgICAnY293Ym95L2xvdy9jcm9zcydcbiAgICAgICdjb3dib3kvbG93L29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbWVkaGlnaCcsIFtcbiAgICAgICdjb3dib3kvbWVkaGlnaC90d28nXG4gICAgICAnY293Ym95L21lZGhpZ2gvb25lJ1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbWVkbG93JywgW1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvdHdvJ1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvb25lJ1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvY3Jvc3MnXG4gICAgICAnY293Ym95L21lZGxvdy9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLW1lZCcsIFtcbiAgICAgICdjb3dib3kvbWVkL3R3bydcbiAgICAgICdjb3dib3kvbWVkL29uZSdcbiAgICAgICdjb3dib3kvbWVkL2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9tZWQvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuXG4gIGNyZWF0ZVN0YXRlTWFjaGluZTogLT5cbiAgICBAc3RhdGUgPSBTdGF0ZU1hY2hpbmUuY3JlYXRlXG4gICAgICBpbml0aWFsOiAnX2lkbGUnXG4gICAgICBldmVudHM6IFtcbiAgICAgICAgeyBuYW1lOiAnX2lkbGUnLCBmcm9tOiAnKicsIHRvOiAnaWRsaW5nJyB9XG4gICAgICAgIHsgbmFtZTogJ19tb3ZlJywgZnJvbTogJyonLCB0bzogJ21vdmluZycgfVxuICAgICAgICB7IG5hbWU6ICdfZGllJywgIGZyb206ICcqJywgdG86ICdkeWluZycgIH0gXVxuICAgICAgY2FsbGJhY2tzOlxuICAgICAgICBvbl9pZGxlOiAoZXZlbnQsIGZyb20sIHRvKSA9PiBAYW5pbWF0aW9ucy5zdG9wIG51bGwsIHRydWVcbiAgICAgICAgb25fbW92ZTogKGV2ZW50LCBmcm9tLCB0bykgPT4gQHBsYXkgXCJtb3ZlLSN7QGd1bl9wb3NbQGd1bl9wb3NfaW5kZXhdfVwiXG4gICAgICAgIG9uX2RpZTogKGV2ZW50LCBmcm9tLCB0bykgID0+IEBwbGF5IFwiZGllXCJcblxubW9kdWxlLmV4cG9ydHMgPSBDb3dib3lcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0Nvd2JveS5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEZsb29yIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCB5X29mZnNldD0wKSAtPlxuICAgIHN1cGVyIEBnYW1lLCAwLCBAZ2FtZS5oZWlnaHQgKyB5X29mZnNldFxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgIEBib2R5LnNldFNpemUgQGdhbWUud29ybGQud2lkdGgsIDUsIDAsIDBcbiAgICBAYm9keS5hbGxvd0dyYXZpdHkgPSBmYWxzZVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvRmxvb3IuY29mZmVlXG4gKiovIiwiQ2FjdHVzID0gcmVxdWlyZSAnLi9DYWN0dXMuY29mZmVlJ1xuVHJlZSA9IHJlcXVpcmUgJy4vVHJlZS5jb2ZmZWUnXG5cbiMgZ2FtZSB3aWR0aCwgaGVpZ2h0ID0gMTA4OCwgODE2XG4jIGNhY3R1cyB3aWR0aCwgaGVpZ2h0ID0gMzIsIDg4XG4jIHRyZWUgd2lkdGgsIGhlaWdodCA9IDY0LCAxMDhcblxuQ0FDVFVTX1BPU0lUSU9OUyA9XG4gIHRvcF9sZWZ0OiB7IHg6IDAsIHk6IDAgfVxuICB0b3BfcmlnaHQ6IHsgeDogMCwgeTogMCB9XG4gIGNlbnRlcl9sZWZ0OiB7IHg6IDUwMCwgeTogMzAwIH1cbiAgY2VudGVyOiB7IHg6IDUyOCwgeTogMzAwIH1cbiAgY2VudGVyX3JpZ2h0OiB7IHg6IDYwMCwgeTogMzAwIH1cbiAgYm90dG9tX2xlZnQ6IHsgeDogMCwgeTogMCB9XG4gIGJvdHRvbV9yaWdodDogeyB4OiAwLCB5OiAwIH1cblxuUE9TSVRJT05TID1cbiAgdG9wX2xlZnQ6IHsgeDogMCwgeTogMCB9XG4gIHRvcF9yaWdodDogeyB4OiAwLCB5OiAwIH1cbiAgYm90dG9tX2xlZnQ6IHsgeDogMCwgeTogMCB9XG4gIGJvdHRvbV9yaWdodDogeyB4OiAwLCB5OiAwIH1cblxuUE9TSVRJT05fS0VZUyA9IFtcbiAgXCJ0b3BfbGVmdFwiXG4gIFwidG9wX3JpZ2h0XCJcbiAgXCJib3R0b21fbGVmdFwiXG4gIFwiYm90dG9tX3JpZ2h0XCJcbl1cblxuY2xhc3MgVGVycmFpbkdyb3VwIGV4dGVuZHMgUGhhc2VyLkdyb3VwXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAbGV2ZWxfZGF0YT17fSkgLT5cbiAgICBzdXBlciBAZ2FtZSwgbnVsbCwgJ1RlcnJhaW5Hcm91cCdcbiAgICBAYnVpbGQoKVxuXG4gICAgIyBhZGQgdG8gZ2FtZVxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cbiAgIyByZW1vdmUgdGVycmFpbiBzcHJpdGVzXG4gIHJlc2V0OiAtPiBAcmVtb3ZlQ2hpbGRyZW4oKVxuXG4gICMgYnVpbGQgYSBuZXcgc2V0IG9mIHRlcnJhaW4gc3ByaXRlc1xuICBidWlsZDogKGxldmVsX2RhdGE9QGxldmVsX2RhdGEpIC0+XG4gICAgIyBvdmVyd3JpdGUgdGhlIGxldmVsX2RhdGFcbiAgICBAbGV2ZWxfZGF0YSA9IGxldmVsX2RhdGFcbiAgICAjIGRldGVybWluZSBpZiBsZXZlbCBoYXMgYSB3YWdvblxuICAgIEBpc193YWdvbiA9IEBsZXZlbF9kYXRhLndhZ29uXG4gICAgQG51bV9jYWN0dXMgPSBAbGV2ZWxfZGF0YS5udW1fY2FjdHVzXG4gICAgQG51bV90cmVlID0gQGxldmVsX2RhdGEubnVtX3RyZWVcbiAgICAjIGRldGVybWluZSBwb3NpdGlvbnMgdG8gcGx1Y2sgZnJvbVxuICAgIEBwb3NpdGlvbnMgPSBQT1NJVElPTl9LRVlTXG4gICAgXy5zaHVmZmxlIEBwb3NpdGlvbnNcbiAgICBAY2FjdHVzX3Bvc2l0aW9ucyA9IGlmIEBpc193YWdvbiB0aGVuIFsnY2VudGVyX2xlZnQnLCAnY2VudGVyX3JpZ2h0J10gZWxzZSBbJ2NlbnRlciddXG4gICAgXy5zaHVmZmxlIEBjYWN0dXNfcG9zaXRpb25zXG4gICAgIyBhZGQgdGVycmFpbiBjaGlsZHJlbiB0byB0aGUgZ3JvdXBcbiAgICBAYWRkQ2FjdHVzKCkgZm9yIGNhY3R1cyBpbiBbMC4uLkBudW1fY2FjdHVzXVxuICAgIEBhZGRUcmVlKCkgICBmb3IgdHJlZSBpbiBbMC4uLkBudW1fdHJlZV1cblxuICBhZGRDYWN0dXM6IC0+XG4gICAgcG9zID0gQGdldFRlcnJhaW5Qb3NpdGlvbiAnY2FjdHVzJ1xuICAgIEBhZGQgbmV3IENhY3R1cyBAZ2FtZSwgQGdhbWVfc3RhdGUsIHBvcy54LCBwb3MueVxuXG4gIGFkZFRyZWU6IC0+XG4gICAgcG9zID0gQGdldFRlcnJhaW5Qb3NpdGlvbiAndHJlZSdcbiAgICBAYWRkIG5ldyBUcmVlIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgcG9zLngsIHBvcy55XG5cbiAgZ2V0VGVycmFpblBvc2l0aW9uOiAoa2V5KSAtPlxuICAgIHBvcyA9IHVuZGVmaW5lZFxuICAgIHN3aXRjaCBrZXlcbiAgICAgIHdoZW4gJ2NhY3R1cydcbiAgICAgICAgaWYgQGNhY3R1c19wb3NpdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgIHBvc19rZXkgPSBAY2FjdHVzX3Bvc2l0aW9ucy5wb3AoKVxuICAgICAgICAgIHBvcyA9IENBQ1RVU19QT1NJVElPTlNbcG9zX2tleV1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHBvc19rZXkgPSBAcG9zaXRpb25zLnBvcCgpXG4gICAgICAgICAgcG9zID0gUE9TSVRJT05TW3Bvc19rZXldXG4gICAgICB3aGVuICd0cmVlJ1xuICAgICAgICBwb3Nfa2V5ID0gQHBvc2l0aW9ucy5wb3AoKVxuICAgICAgICBwb3MgPSBQT1NJVElPTlNbcG9zX2tleV1cbiAgICByZXR1cm4gcG9zXG5cbm1vZHVsZS5leHBvcnRzID0gVGVycmFpbkdyb3VwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXJyYWluR3JvdXAuY29mZmVlXG4gKiovIiwiY2xhc3MgVGV4dCBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgZnJhbWUsIHg9MCwgeT0wKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBcInRleHQvI3tmcmFtZX1cIlxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG4gICAgQGhpZGUoKVxuXG4gICAgcmV0dXJuIEBcblxuICBwbGFjZTogKHgsIHkpIC0+XG4gICAgQHggPSB4XG4gICAgQHkgPSB5XG5cbiAgc2hvdzogLT4gQHJlc2V0IEB4LCBAeVxuXG4gIGhpZGU6IC0+IEBraWxsKClcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXh0LmNvZmZlZVxuICoqLyIsIlRlcnJhaW4gPSByZXF1aXJlICcuL3RlcnJhaW4uY29mZmVlJ1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgVGVycmFpblxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIEBnYW1lX3N0YXRlLCB4LCB5LCAndHJlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBUcmVlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UcmVlLmNvZmZlZVxuICoqLyIsImNsYXNzIFdhZ29uIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSkgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnd2Fnb24nXG4gICAgc3VwZXIgQGdhbWUsIDUwMCwgODE2IC0gOTZcblxuICAgICMgc2V0IHBoeXNpY3MgYm9keVxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgICMgQGtpbGwoKVxuXG4gICAgcmV0dXJuIEBcblxuICByZXZpdmU6IC0+IEByZXNldCA1MDAsIDgxNiAtIDk2XG5cbiAgcm9sbDogLT5cblxuICBzdG9wOiAtPlxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhZ29uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9XYWdvbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhbGwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIHhfb2Zmc2V0PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIHhfb2Zmc2V0LCAwXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuc2V0U2l6ZSAxLCBAZ2FtZS53b3JsZC5oZWlnaHQsIDAsIDBcbiAgICBAYm9keS5hbGxvd0dyYXZpdHkgPSBmYWxzZVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvV2FsbC5jb2ZmZWVcbiAqKi8iLCJjbGFzcyBCb290XG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICAjIHNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIGJsYWNrXG4gICAgQGdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAwMDAnXG5cbiAgICAjIFNjYWxlIHRoZSBnYW1lIGluIHRoZSBicm93c2VyXG4gICAgQHNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWVcbiAgICBAc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTFxuXG4gICAgIyBzdGFydCBwcmVsb2FkXG4gICAgQHN0YXRlLnN0YXJ0ICdwcmVsb2FkJ1xuXG4gIHByZWxvYWQ6IC0+XG4gICAgIyBzZXQgaW50aWFsIHNjYWxlXG4gICAgQGdhbWUuc2NhbGVyKClcblxubW9kdWxlLmV4cG9ydHMgPSBCb290XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2Jvb3QuY29mZmVlXG4gKiovIiwiIyBCT1VORFNcbkZsb29yICAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9GbG9vci5jb2ZmZWUnXG5DZWlsaW5nICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ2VpbGluZy5jb2ZmZWUnXG5XYWxsICAgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2FsbC5jb2ZmZWUnXG5XQUxMX09GRlNFVCA9IDI3NVxuXG4jIEhVRFxuIyBUaW1lciAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RpbWVyLmNvZmZlZSdcbiMgU2NvcmUgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9TY29yZS5jb2ZmZWUnXG5cbiMgU1BSSVRFU1xuQ293Ym95ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9Db3dib3kuY29mZmVlJ1xuVGVycmFpbkdyb3VwID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9UZXJyYWluR3JvdXAuY29mZmVlJ1xuV2Fnb24gID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9XYWdvbi5jb2ZmZWUnXG5cblNUQVJUSU5HX1RJTUUgPSA3MCAjc2Vjb25kc1xuTk9fQU1NT19DT1VOVERPV04gPSAxMCAjc2Vjb25kc1xuXG5jbGFzcyBHYW1lXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICAjIGNyZWF0ZSB0aGUgYm91bmRzXG4gICAgQGNlaWxpbmcgICAgPSBuZXcgQ2VpbGluZyBAZ2FtZSwgNDVcbiAgICBAZmxvb3IgICAgICA9IG5ldyBGbG9vciBAZ2FtZSwgLTQ1XG4gICAgQGxlZnRfd2FsbF9vdXRlciA9IG5ldyBXYWxsIEBnYW1lLCA5MlxuICAgIEBsZWZ0X3dhbGwgID0gbmV3IFdhbGwgQGdhbWUsIEBnYW1lLndvcmxkLndpZHRoIC8gMiAtIFdBTExfT0ZGU0VUXG4gICAgQHJpZ2h0X3dhbGxfb3V0ZXIgPSBuZXcgV2FsbCBAZ2FtZSwgOTk2XG4gICAgQHJpZ2h0X3dhbGwgPSBuZXcgV2FsbCBAZ2FtZSwgQGdhbWUud29ybGQud2lkdGggLyAyICArIFdBTExfT0ZGU0VUXG5cbiAgICAjIHNldHVwIHRoZSBodWRcblxuXG4gICAgIyBjcmVhdGUgdGhlIHBsYXllcnNcbiAgICBAcGxheWVyX29uZSA9IG5ldyBDb3dib3kgQGdhbWUsIEBcbiAgICBAcGxheWVyX3R3byA9IG5ldyBDb3dib3kgQGdhbWUsIEAsIGZhbHNlXG5cbiAgICAjIGNvbGxpc2lvbiBlbGVtZW50c1xuICAgIEBidWxsZXRzICA9IFsgQHBsYXllcl9vbmUuYnVsbGV0cywgQHBsYXllcl90d28uYnVsbGV0cyBdXG4gICAgQHdhbGxzICAgID0gWyBAbGVmdF93YWxsLCBAcmlnaHRfd2FsbCBdXG4gICAgQHN1cmZhY2VzID0gWyBAY2VpbGluZywgQGZsb29yIF1cbiAgICBAcGxheWVycyAgPSBbIEBwbGF5ZXJfb25lLCBAcGxheWVyX3R3byBdXG4gICAgQHdhZ29uID0gbmV3IFdhZ29uIEBnYW1lLCBAZ2FtZV9zdGF0ZVxuICAgIEB0ZXJyYWluID0gdW5kZWZpbmVkICMgaW5zdGFudGlhdGUgaW4gc2V0dXBMZXZlbCgpXG5cbiAgICAjIHN0YXJ0IHRoZSBnYW1lXG4gICAgQHN0YXJ0KClcblxuICBzdGFydDogLT5cbiAgICAjIGludHJvIHRoZSBsZXZlbCwgcGxhY2UgdGVycmFpbiBvbiB0aGUgbWFwXG4gICAgQHNldHVwTGV2ZWwoKVxuXG4gIHVwZGF0ZTogLT5cbiAgICAjIHNldCBib3VuY2Ugc3VyZmFjZXMgZm9yIGJ1bGxldHNcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlIEBidWxsZXRzLCBAc3VyZmFjZXNcblxuICAgICMgc2V0IHBsYXllciwgYnVsbGV0IGNvbGxpc2lvbnNcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlIEBidWxsZXRzLCBAcGxheWVycywgKHBsYXllciwgYnVsbGV0KSA9PlxuICAgICAgIyBkaXNhYmxlIGlucHV0c1xuICAgICAgIyBAaW5wdXRcbiAgICAgICMga2lsbCBhbGwgYnVsbGV0cyBpbiB0aGUgZmllbGRcbiAgICAgIGIua2lsbCgpIGZvciBiIGluIEBwbGF5ZXJfb25lLmJ1bGxldHMuY2hpbGRyZW5cbiAgICAgIGIua2lsbCgpIGZvciBiIGluIEBwbGF5ZXJfdHdvLmJ1bGxldHMuY2hpbGRyZW5cbiAgICAgICMgaW5jcmVhc2Ugc2NvcmUgb2Ygd2lubmluZyBwbGF5ZXJcbiAgICAgIGJ1bGxldC5wbGF5ZXIuaWRsZSgpXG4gICAgICBidWxsZXQucGxheWVyLndpbnMgKz0gMVxuICAgICAgIyBpbmNyZWFzZSBnYW1lJ3MgbGV2ZWxcbiAgICAgIEBnYW1lLmxldmVsICs9IDFcbiAgICAgICMgdHJpZ2dlciBwbGF5ZXIgZGVhdGhcbiAgICAgIHBsYXllci5kaWUoKVxuXG4gICAgIyBzZXQgdGVycmFpbiwgYnVsbGV0IGNvbGxpc2lvbnNcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlIEBidWxsZXRzLCBAdGVycmFpbiwgKGJ1bGxldCwgdGVycmFpbikgPT5cbiAgICAgIGNvbGxpc2lvbl95ID0gYnVsbGV0LnkgKyBidWxsZXQuaGVpZ2h0XG4gICAgICBidWxsZXQua2lsbCgpXG4gICAgICB0ZXJyYWluLmRlZm9ybSBjb2xsaXNpb25feVxuXG4gIHJlbmRlcjogLT5cbiAgICBpZiBAZ2FtZS5kZWJ1Z01vZGVcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQGNlaWxpbmdcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQGZsb29yXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBsZWZ0X3dhbGxcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHJpZ2h0X3dhbGxcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl9vbmVcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl90d29cbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl9vbmUuYnVsbGV0c1xuICAgICAgQGdhbWUuZGVidWcuYm9keSBAcGxheWVyX3R3by5idWxsZXRzXG5cbiAgc2V0dXBMZXZlbDogLT5cbiAgICBsZXZlbF9udW0gPSBAZ2FtZS5sZXZlbFxuICAgIGxldmVsID0gQGdhbWUuY29uc3RhbnRzLkxFVkVMU1tcIiN7bGV2ZWxfbnVtfVwiXVxuICAgIEB0ZXJyYWluID0gbmV3IFRlcnJhaW5Hcm91cCBAZ2FtZSwgQCwgbGV2ZWxcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2dhbWUuY29mZmVlXG4gKiovIiwiIyBTUFJJVEVTXG4jIENvd2JveSA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ293Ym95LmNvZmZlZSdcbiMgQnVsbGV0ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9CdWxsZXQuY29mZmVlJ1xuIyBDYWN0dXMgPSByZXF1aXJlICcuLi9zcHJpdGVzL0NhY3R1cy5jb2ZmZWUnXG4jIFRyZWUgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVHJlZS5jb2ZmZWUnXG4jIFdhZ29uICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2Fnb24uY29mZmVlJ1xuXG4jIEhVRFxuIyBUaW1lciAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RpbWVyLmNvZmZlZSdcbiMgQW1tbyAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9BbW1vLmNvZmZlZSdcblxuXG5jbGFzcyBJbnRyb1xuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgY29uc29sZS5sb2cgJ2ludHJvJ1xuXG5cbiAgc3RhcnQ6IC0+XG5cbiAgdXBkYXRlOiAtPlxuXG5tb2R1bGUuZXhwb3J0cyA9IEludHJvXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2ludHJvLmNvZmZlZVxuICoqLyIsImNsYXNzIFByZWxvYWRcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgcHJlbG9hZDogLT5cbiAgICBAbG9hZC5jcm9zc09yaWdpbiA9IEBnYW1lLmhvc3R1cmwgdW5sZXNzIEBnYW1lLmNkbiBpcyAnLydcblxuICAgICMgTE9BRCBTVFVGRlNcbiAgICBDRE4gPSBAZ2FtZS5jZG5cbiAgICAjIFNQUklURVNcbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgdGV4dHVyZV91cmwgPSBcIiN7Q0ROfWltYWdlcy9hdGxhcy5wbmdcIlxuICAgIGF0bGFzX2RhdGEgPSByZXF1aXJlICcuLi9jb25zdGFudHMvYXRsYXMuY29mZmVlJ1xuICAgIEBsb2FkLmF0bGFzSlNPTkhhc2gga2V5LCB0ZXh0dXJlX3VybCwgbnVsbCwgYXRsYXNfZGF0YVxuXG4gICAgIyBTRlhcbiAgICBfLmVhY2ggQGdhbWUuY29uc3RhbnRzLlNGWCwgKHNmeCkgPT5cbiAgICAgIGFzc2V0ID0gQGxvYWQuYXVkaW8gc2Z4LFxuICAgICAgW1wiI3tDRE59YXVkaW8vI3tzZnh9Lm1wMyN7QGdhbWUudmVyc2lvbn1cIixcbiAgICAgIFwiI3tDRE59YXVkaW8vI3tzZnh9Lm9nZyN7QGdhbWUudmVyc2lvbn1cIl1cbiAgICAgIGFzc2V0LmNyb3NzT3JpZ2luID0gQGxvYWQuY3Jvc3NPcmlnaW4gIHVubGVzcyBAZ2FtZS5jZG4gaXMgJy8nXG5cbiAgdXBkYXRlOiAtPlxuICAgIGlmIEBnYW1lLmRlYnVnTW9kZVxuICAgICAgQHN0YXRlLnN0YXJ0ICdnYW1lJ1xuICAgIGVsc2VcbiAgICAgIEBzdGF0ZS5zdGFydCAnaW50cm8nXG5cbm1vZHVsZS5leHBvcnRzID0gUHJlbG9hZFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9wcmVsb2FkLmNvZmZlZVxuICoqLyIsIkxhdW5jaEdhbWUgPSByZXF1aXJlICcuL2dhbWUvbGF1bmNoLmNvZmZlZSdcblxuI3JlYWR5XG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuXG5cdGNvbnNvbGUubG9nICdhbGwgcmVhZHknXG5cdExhdW5jaEdhbWUoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9tYWluLmNvZmZlZVxuICoqLyIsIi8qXG5cbiAgSmF2YXNjcmlwdCBTdGF0ZSBNYWNoaW5lIExpYnJhcnkgLSBodHRwczovL2dpdGh1Yi5jb20vamFrZXNnb3Jkb24vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lXG5cbiAgQ29weXJpZ2h0IChjKSAyMDEyLCAyMDEzLCAyMDE0LCAyMDE1LCBKYWtlIEdvcmRvbiBhbmQgY29udHJpYnV0b3JzXG4gIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlc2dvcmRvbi9qYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gIHZhciBTdGF0ZU1hY2hpbmUgPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgVkVSU0lPTjogXCIyLjMuNVwiLFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFJlc3VsdDoge1xuICAgICAgU1VDQ0VFREVEOiAgICAxLCAvLyB0aGUgZXZlbnQgdHJhbnNpdGlvbmVkIHN1Y2Nlc3NmdWxseSBmcm9tIG9uZSBzdGF0ZSB0byBhbm90aGVyXG4gICAgICBOT1RSQU5TSVRJT046IDIsIC8vIHRoZSBldmVudCB3YXMgc3VjY2Vzc2Z1bGwgYnV0IG5vIHN0YXRlIHRyYW5zaXRpb24gd2FzIG5lY2Vzc2FyeVxuICAgICAgQ0FOQ0VMTEVEOiAgICAzLCAvLyB0aGUgZXZlbnQgd2FzIGNhbmNlbGxlZCBieSB0aGUgY2FsbGVyIGluIGEgYmVmb3JlRXZlbnQgY2FsbGJhY2tcbiAgICAgIFBFTkRJTkc6ICAgICAgNCAgLy8gdGhlIGV2ZW50IGlzIGFzeW5jaHJvbm91cyBhbmQgdGhlIGNhbGxlciBpcyBpbiBjb250cm9sIG9mIHdoZW4gdGhlIHRyYW5zaXRpb24gb2NjdXJzXG4gICAgfSxcblxuICAgIEVycm9yOiB7XG4gICAgICBJTlZBTElEX1RSQU5TSVRJT046IDEwMCwgLy8gY2FsbGVyIHRyaWVkIHRvIGZpcmUgYW4gZXZlbnQgdGhhdCB3YXMgaW5uYXByb3ByaWF0ZSBpbiB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgUEVORElOR19UUkFOU0lUSU9OOiAyMDAsIC8vIGNhbGxlciB0cmllZCB0byBmaXJlIGFuIGV2ZW50IHdoaWxlIGFuIGFzeW5jIHRyYW5zaXRpb24gd2FzIHN0aWxsIHBlbmRpbmdcbiAgICAgIElOVkFMSURfQ0FMTEJBQ0s6ICAgMzAwIC8vIGNhbGxlciBwcm92aWRlZCBjYWxsYmFjayBmdW5jdGlvbiB0aHJldyBhbiBleGNlcHRpb25cbiAgICB9LFxuXG4gICAgV0lMRENBUkQ6ICcqJyxcbiAgICBBU1lOQzogJ2FzeW5jJyxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKGNmZywgdGFyZ2V0KSB7XG5cbiAgICAgIHZhciBpbml0aWFsICAgICAgPSAodHlwZW9mIGNmZy5pbml0aWFsID09ICdzdHJpbmcnKSA/IHsgc3RhdGU6IGNmZy5pbml0aWFsIH0gOiBjZmcuaW5pdGlhbDsgLy8gYWxsb3cgZm9yIGEgc2ltcGxlIHN0cmluZywgb3IgYW4gb2JqZWN0IHdpdGggeyBzdGF0ZTogJ2ZvbycsIGV2ZW50OiAnc2V0dXAnLCBkZWZlcjogdHJ1ZXxmYWxzZSB9XG4gICAgICB2YXIgdGVybWluYWwgICAgID0gY2ZnLnRlcm1pbmFsIHx8IGNmZ1snZmluYWwnXTtcbiAgICAgIHZhciBmc20gICAgICAgICAgPSB0YXJnZXQgfHwgY2ZnLnRhcmdldCAgfHwge307XG4gICAgICB2YXIgZXZlbnRzICAgICAgID0gY2ZnLmV2ZW50cyB8fCBbXTtcbiAgICAgIHZhciBjYWxsYmFja3MgICAgPSBjZmcuY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgdmFyIG1hcCAgICAgICAgICA9IHt9OyAvLyB0cmFjayBzdGF0ZSB0cmFuc2l0aW9ucyBhbGxvd2VkIGZvciBhbiBldmVudCB7IGV2ZW50OiB7IGZyb206IFsgdG8gXSB9IH1cbiAgICAgIHZhciB0cmFuc2l0aW9ucyAgPSB7fTsgLy8gdHJhY2sgZXZlbnRzIGFsbG93ZWQgZnJvbSBhIHN0YXRlICAgICAgICAgICAgeyBzdGF0ZTogWyBldmVudCBdIH1cblxuICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGZyb20gPSAoZS5mcm9tIGluc3RhbmNlb2YgQXJyYXkpID8gZS5mcm9tIDogKGUuZnJvbSA/IFtlLmZyb21dIDogW1N0YXRlTWFjaGluZS5XSUxEQ0FSRF0pOyAvLyBhbGxvdyAnd2lsZGNhcmQnIHRyYW5zaXRpb24gaWYgJ2Zyb20nIGlzIG5vdCBzcGVjaWZpZWRcbiAgICAgICAgbWFwW2UubmFtZV0gPSBtYXBbZS5uYW1lXSB8fCB7fTtcbiAgICAgICAgZm9yICh2YXIgbiA9IDAgOyBuIDwgZnJvbS5sZW5ndGggOyBuKyspIHtcbiAgICAgICAgICB0cmFuc2l0aW9uc1tmcm9tW25dXSA9IHRyYW5zaXRpb25zW2Zyb21bbl1dIHx8IFtdO1xuICAgICAgICAgIHRyYW5zaXRpb25zW2Zyb21bbl1dLnB1c2goZS5uYW1lKTtcblxuICAgICAgICAgIG1hcFtlLm5hbWVdW2Zyb21bbl1dID0gZS50byB8fCBmcm9tW25dOyAvLyBhbGxvdyBuby1vcCB0cmFuc2l0aW9uIGlmICd0bycgaXMgbm90IHNwZWNpZmllZFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICBpbml0aWFsLmV2ZW50ID0gaW5pdGlhbC5ldmVudCB8fCAnc3RhcnR1cCc7XG4gICAgICAgIGFkZCh7IG5hbWU6IGluaXRpYWwuZXZlbnQsIGZyb206ICdub25lJywgdG86IGluaXRpYWwuc3RhdGUgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvcih2YXIgbiA9IDAgOyBuIDwgZXZlbnRzLmxlbmd0aCA7IG4rKylcbiAgICAgICAgYWRkKGV2ZW50c1tuXSk7XG5cbiAgICAgIGZvcih2YXIgbmFtZSBpbiBtYXApIHtcbiAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICBmc21bbmFtZV0gPSBTdGF0ZU1hY2hpbmUuYnVpbGRFdmVudChuYW1lLCBtYXBbbmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBmb3IodmFyIG5hbWUgaW4gY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChjYWxsYmFja3MuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgICAgZnNtW25hbWVdID0gY2FsbGJhY2tzW25hbWVdXG4gICAgICB9XG5cbiAgICAgIGZzbS5jdXJyZW50ICAgICA9ICdub25lJztcbiAgICAgIGZzbS5pcyAgICAgICAgICA9IGZ1bmN0aW9uKHN0YXRlKSB7IHJldHVybiAoc3RhdGUgaW5zdGFuY2VvZiBBcnJheSkgPyAoc3RhdGUuaW5kZXhPZih0aGlzLmN1cnJlbnQpID49IDApIDogKHRoaXMuY3VycmVudCA9PT0gc3RhdGUpOyB9O1xuICAgICAgZnNtLmNhbiAgICAgICAgID0gZnVuY3Rpb24oZXZlbnQpIHsgcmV0dXJuICF0aGlzLnRyYW5zaXRpb24gJiYgKG1hcFtldmVudF0uaGFzT3duUHJvcGVydHkodGhpcy5jdXJyZW50KSB8fCBtYXBbZXZlbnRdLmhhc093blByb3BlcnR5KFN0YXRlTWFjaGluZS5XSUxEQ0FSRCkpOyB9XG4gICAgICBmc20uY2Fubm90ICAgICAgPSBmdW5jdGlvbihldmVudCkgeyByZXR1cm4gIXRoaXMuY2FuKGV2ZW50KTsgfTtcbiAgICAgIGZzbS50cmFuc2l0aW9ucyA9IGZ1bmN0aW9uKCkgICAgICB7IHJldHVybiB0cmFuc2l0aW9uc1t0aGlzLmN1cnJlbnRdOyB9O1xuICAgICAgZnNtLmlzRmluaXNoZWQgID0gZnVuY3Rpb24oKSAgICAgIHsgcmV0dXJuIHRoaXMuaXModGVybWluYWwpOyB9O1xuICAgICAgZnNtLmVycm9yICAgICAgID0gY2ZnLmVycm9yIHx8IGZ1bmN0aW9uKG5hbWUsIGZyb20sIHRvLCBhcmdzLCBlcnJvciwgbXNnLCBlKSB7IHRocm93IGUgfHwgbXNnOyB9OyAvLyBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVucyBpcyB0byB0aHJvdyBhbiBleGNlcHRpb24sIGJ1dCBjYWxsZXIgY2FuIG92ZXJyaWRlIHRoaXMgYmVoYXZpb3IgaWYgZGVzaXJlZCAoc2VlIGdpdGh1YiBpc3N1ZSAjMyBhbmQgIzE3KVxuXG4gICAgICBpZiAoaW5pdGlhbCAmJiAhaW5pdGlhbC5kZWZlcilcbiAgICAgICAgZnNtW2luaXRpYWwuZXZlbnRdKCk7XG5cbiAgICAgIHJldHVybiBmc207XG5cbiAgICB9LFxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGRvQ2FsbGJhY2s6IGZ1bmN0aW9uKGZzbSwgZnVuYywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoZnNtLCBbbmFtZSwgZnJvbSwgdG9dLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBmc20uZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5JTlZBTElEX0NBTExCQUNLLCBcImFuIGV4Y2VwdGlvbiBvY2N1cnJlZCBpbiBhIGNhbGxlci1wcm92aWRlZCBjYWxsYmFjayBmdW5jdGlvblwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBiZWZvcmVBbnlFdmVudDogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmJlZm9yZWV2ZW50J10sICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgYWZ0ZXJBbnlFdmVudDogICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25hZnRlcmV2ZW50J10gfHwgZnNtWydvbmV2ZW50J10sICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGxlYXZlQW55U3RhdGU6ICAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29ubGVhdmVzdGF0ZSddLCAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBlbnRlckFueVN0YXRlOiAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmVudGVyc3RhdGUnXSB8fCBmc21bJ29uc3RhdGUnXSwgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgY2hhbmdlU3RhdGU6ICAgICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25jaGFuZ2VzdGF0ZSddLCAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuXG4gICAgYmVmb3JlVGhpc0V2ZW50OiBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25iZWZvcmUnICsgbmFtZV0sICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGFmdGVyVGhpc0V2ZW50OiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uYWZ0ZXInICArIG5hbWVdIHx8IGZzbVsnb24nICsgbmFtZV0sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBsZWF2ZVRoaXNTdGF0ZTogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmxlYXZlJyAgKyBmcm9tXSwgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgZW50ZXJUaGlzU3RhdGU6ICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25lbnRlcicgICsgdG9dICAgfHwgZnNtWydvbicgKyB0b10sICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuXG4gICAgYmVmb3JlRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIGlmICgoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVUaGlzRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykpIHx8XG4gICAgICAgICAgKGZhbHNlID09PSBTdGF0ZU1hY2hpbmUuYmVmb3JlQW55RXZlbnQoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBhZnRlckV2ZW50OiBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7XG4gICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJUaGlzRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJBbnlFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgfSxcblxuICAgIGxlYXZlU3RhdGU6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIHZhciBzcGVjaWZpYyA9IFN0YXRlTWFjaGluZS5sZWF2ZVRoaXNTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSxcbiAgICAgICAgICBnZW5lcmFsICA9IFN0YXRlTWFjaGluZS5sZWF2ZUFueVN0YXRlKCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIGlmICgoZmFsc2UgPT09IHNwZWNpZmljKSB8fCAoZmFsc2UgPT09IGdlbmVyYWwpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBlbHNlIGlmICgoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBzcGVjaWZpYykgfHwgKFN0YXRlTWFjaGluZS5BU1lOQyA9PT0gZ2VuZXJhbCkpXG4gICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuQVNZTkM7XG4gICAgfSxcblxuICAgIGVudGVyU3RhdGU6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIFN0YXRlTWFjaGluZS5lbnRlclRoaXNTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIFN0YXRlTWFjaGluZS5lbnRlckFueVN0YXRlKCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGJ1aWxkRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIG1hcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBmcm9tICA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdmFyIHRvICAgID0gbWFwW2Zyb21dIHx8IG1hcFtTdGF0ZU1hY2hpbmUuV0lMRENBUkRdIHx8IGZyb207XG4gICAgICAgIHZhciBhcmdzICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7IC8vIHR1cm4gYXJndW1lbnRzIGludG8gcHVyZSBhcnJheVxuXG4gICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb24pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5QRU5ESU5HX1RSQU5TSVRJT04sIFwiZXZlbnQgXCIgKyBuYW1lICsgXCIgaW5hcHByb3ByaWF0ZSBiZWNhdXNlIHByZXZpb3VzIHRyYW5zaXRpb24gZGlkIG5vdCBjb21wbGV0ZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5jYW5ub3QobmFtZSkpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5JTlZBTElEX1RSQU5TSVRJT04sIFwiZXZlbnQgXCIgKyBuYW1lICsgXCIgaW5hcHByb3ByaWF0ZSBpbiBjdXJyZW50IHN0YXRlIFwiICsgdGhpcy5jdXJyZW50KTtcblxuICAgICAgICBpZiAoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVFdmVudCh0aGlzLCBuYW1lLCBmcm9tLCB0bywgYXJncykpXG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuQ0FOQ0VMTEVEO1xuXG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KHRoaXMsIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5OT1RSQU5TSVRJT047XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmVwYXJlIGEgdHJhbnNpdGlvbiBtZXRob2QgZm9yIHVzZSBFSVRIRVIgbG93ZXIgZG93biwgb3IgYnkgY2FsbGVyIGlmIHRoZXkgd2FudCBhbiBhc3luYyB0cmFuc2l0aW9uIChpbmRpY2F0ZWQgYnkgYW4gQVNZTkMgcmV0dXJuIHZhbHVlIGZyb20gbGVhdmVTdGF0ZSlcbiAgICAgICAgdmFyIGZzbSA9IHRoaXM7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZzbS50cmFuc2l0aW9uID0gbnVsbDsgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgZXZlciBiZSBjYWxsZWQgb25jZVxuICAgICAgICAgIGZzbS5jdXJyZW50ID0gdG87XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmVudGVyU3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5jaGFuZ2VTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuU1VDQ0VFREVEO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24uY2FuY2VsID0gZnVuY3Rpb24oKSB7IC8vIHByb3ZpZGUgYSB3YXkgZm9yIGNhbGxlciB0byBjYW5jZWwgYXN5bmMgdHJhbnNpdGlvbiBpZiBkZXNpcmVkIChpc3N1ZSAjMjIpXG4gICAgICAgICAgZnNtLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlYXZlID0gU3RhdGVNYWNoaW5lLmxlYXZlU3RhdGUodGhpcywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICBpZiAoZmFsc2UgPT09IGxlYXZlKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5DQU5DRUxMRUQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBsZWF2ZSkge1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0LlBFTkRJTkc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbikgLy8gbmVlZCB0byBjaGVjayBpbiBjYXNlIHVzZXIgbWFudWFsbHkgY2FsbGVkIHRyYW5zaXRpb24oKSBidXQgZm9yZ290IHRvIHJldHVybiBTdGF0ZU1hY2hpbmUuQVNZTkNcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuICAgIH1cblxuICB9OyAvLyBTdGF0ZU1hY2hpbmVcblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vPT09PT09XG4gIC8vIE5PREVcbiAgLy89PT09PT1cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU3RhdGVNYWNoaW5lO1xuICAgIH1cbiAgICBleHBvcnRzLlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuICAvLz09PT09PT09PT09PVxuICAvLyBBTUQvUkVRVUlSRVxuICAvLz09PT09PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkgeyByZXR1cm4gU3RhdGVNYWNoaW5lOyB9KTtcbiAgfVxuICAvLz09PT09PT09XG4gIC8vIEJST1dTRVJcbiAgLy89PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5TdGF0ZU1hY2hpbmUgPSBTdGF0ZU1hY2hpbmU7XG4gIH1cbiAgLy89PT09PT09PT09PVxuICAvLyBXRUIgV09SS0VSXG4gIC8vPT09PT09PT09PT1cbiAgZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2VsZi5TdGF0ZU1hY2hpbmUgPSBTdGF0ZU1hY2hpbmU7XG4gIH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9zdGF0ZS1tYWNoaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9ib290LmNvZmZlZVwiOiAyMCxcblx0XCIuL2dhbWUuY29mZmVlXCI6IDIxLFxuXHRcIi4vaW50cm8uY29mZmVlXCI6IDIyLFxuXHRcIi4vcHJlbG9hZC5jb2ZmZWVcIjogMjMsXG5cdFwiLi9yZXNldC5jb2ZmZWVcIjogMjRcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMgXlxcLlxcLy4qXFwuY29mZmVlJFxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9