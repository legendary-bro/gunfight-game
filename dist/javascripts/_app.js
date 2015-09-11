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

	module.exports = __webpack_require__(24);


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
/* 6 */
/***/ function(module, exports) {

	var sfx;
	
	sfx = {};
	
	module.exports = sfx;


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
	    game.state.add(state, __webpack_require__(26)("./" + state + ".coffee"));
	  }
	  return game.state.start('boot');
	};
	
	module.exports = launch;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var Ammo, Bullets, Cowboy, DELTA, FRAMERATE, PLAYER_ONE_CONTROLS, PLAYER_ONE_X, PLAYER_ONE_Y, PLAYER_TWO_CONTROLS, PLAYER_TWO_X, PLAYER_TWO_Y, SPEED, StateMachine, Text,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Bullets = __webpack_require__(9);
	
	Ammo = __webpack_require__(8);
	
	Text = __webpack_require__(15);
	
	StateMachine = __webpack_require__(25);
	
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
	    this.input_disabled = true;
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
	    if (this.state.current !== 'dying' && !this.input_disabled) {
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var CACTUS_POSITIONS, Cactus, POSITIONS, TREE_POSITIONS, TerrainGroup, Tree,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Cactus = __webpack_require__(10);
	
	Tree = __webpack_require__(16);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var Ceiling, Cowboy, Floor, Game, NO_AMMO_COUNTDOWN, STARTING_TIME, TerrainGroup, WALL_OFFSET, Wagon, Wall;
	
	Floor = __webpack_require__(13);
	
	Ceiling = __webpack_require__(11);
	
	Wall = __webpack_require__(18);
	
	WALL_OFFSET = 275;
	
	Cowboy = __webpack_require__(12);
	
	TerrainGroup = __webpack_require__(14);
	
	Wagon = __webpack_require__(17);
	
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
	    this.setupLevel();
	    this.player_one.enableInput();
	    return this.player_two.enableInput();
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
	        _this.game.level += 1;
	        return player.die();
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
	
	  Game.prototype.render = function() {
	    if (this.game.debugMode) {
	      this.game.debug.body(this.ceiling);
	      this.game.debug.body(this.floor);
	      this.game.debug.body(this.left_wall);
	      return this.game.debug.body(this.right_wall);
	    }
	  };
	
	  Game.prototype.setupLevel = function() {
	    var level, level_num;
	    level_num = this.game.level;
	    level = this.game.constants.LEVELS["" + level_num];
	    this.terrain = new TerrainGroup(this.game, this, level);
	    if (level.wagon) {
	      return this.wagon.start();
	    }
	  };
	
	  return Game;
	
	})();
	
	module.exports = Game;


/***/ },
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports) {

	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var LaunchGame;
	
	LaunchGame = __webpack_require__(7);
	
	$(document).ready(function() {
	  console.log('all ready');
	  return LaunchGame();
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./boot.coffee": 19,
		"./game.coffee": 20,
		"./intro.coffee": 21,
		"./preload.coffee": 22,
		"./reset.coffee": 23
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
	webpackContext.id = 26;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTA5NTdjYWYwOGIyNDQ5NmQ2ZTkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy90ZXJyYWluLmNvZmZlZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvbGV2ZWxzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZnguY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvbGF1bmNoLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQW1tby5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0J1bGxldHMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DYWN0dXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DZWlsaW5nLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ293Ym95LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvRmxvb3IuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXJyYWluR3JvdXAuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXh0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvVHJlZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1dhZ29uLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvV2FsbC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvYm9vdC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvZ2FtZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvaW50cm8uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL3ByZWxvYWQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL21haW4uY29mZmVlIiwid2VicGFjazovLy8uL34vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lL3N0YXRlLW1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMgXlxcLlxcLy4qXFwuY29mZmVlJCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Esb0I7Ozs7OztBQ0FBO0dBQUE7OztBQUFNOzs7R0FDUyxpQkFBQyxJQUFELEVBQVEsVUFBUixFQUFxQixDQUFyQixFQUEwQixDQUExQixFQUErQixLQUEvQjtBQUNYO0tBRFksSUFBQyxRQUFE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LEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakRGO0tBZ0VBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakVGO0tBZ0ZBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakZGO0tBZ0dBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakdGO0tBZ0hBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakhGO0tBZ0lBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BaklGO0tBZ0pBLEtBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxHQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BakpGO0tBZ0tBLGFBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFE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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7OztBQ2xPRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2phdmFzY3JpcHRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYTA5NTdjYWYwOGIyNDQ5NmQ2ZTlcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9cIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNsYXNzIFRlcnJhaW4gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCB4PTAsIHk9MCwgZnJhbWU9J2NhY3R1cycpIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gXCJ0ZXJyYWluLyN7ZnJhbWV9XCJcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBmcmFtZVxuXG4gICAgIyBzZXQgcGh5c2ljcyBib2R5XG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cbiAgICAjIGFkZCBjcm9wIHJlY3RcbiAgICBAY3JvcFJlY3QgPSBAZ2FtZS5hZGQuZ3JhcGhpY3MoKVxuXG4gICAgcmV0dXJuIEBcblxuICBkZWZvcm06IChjb2xsaXNpb25feSkgLT5cbiAgICBoZWlnaHQgPSBjb2xsaXNpb25feSAtIEB5XG4gICAgIyBkZWZvcm0gYm9keVxuICAgIEBib2R5LnNldFNpemUgQHdpZHRoLCBAaGVpZ2h0IC0gaGVpZ2h0LCAwLCBoZWlnaHRcbiAgICBAZHJhd1JlY3QgaGVpZ2h0XG5cbiAgcmVsb2FkOiAtPiBAY3JvcFJlY3QuY2xlYXIoKVxuXG4gIGRyYXdSZWN0OiAoaGVpZ2h0KSAtPlxuICAgIEBjcm9wUmVjdC5saW5lU3R5bGUgMFxuICAgIEBjcm9wUmVjdC5iZWdpbkZpbGwgXCIweDAwMDAwMFwiXG4gICAgQGNyb3BSZWN0LmRyYXdSZWN0IEB4LCBAeSwgQHdpZHRoLCBoZWlnaHRcbiAgICBAY3JvcFJlY3QuZW5kRmlsbCgpXG4gICAgQGdhbWUud29ybGQuYnJpbmdUb1RvcCBAY3JvcFJlY3RcblxubW9kdWxlLmV4cG9ydHMgPSBUZXJyYWluXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy90ZXJyYWluLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqUXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImF0bGFzID1cbiAgJ2ZyYW1lcyc6XG4gICAgJzAnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NDJcbiAgICAgICAgJ3knOiAxNzZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICcxJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDk0XG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDE2XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDE2XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxNlxuICAgICAgICAnaCc6IDQwXG4gICAgJzInOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NjhcbiAgICAgICAgJ3knOiAxNzZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICczJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDQyXG4gICAgICAgICd5JzogMjE4XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnNCc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ2OFxuICAgICAgICAneSc6IDIxOFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAxNzRcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc2JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMjE2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnNyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEwMFxuICAgICAgICAneSc6IDI1OFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzgnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAzMDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc5JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzI4XG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9EUkFXJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzM2XG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxNTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR0FNRSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEzMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR0VUX1JFQURZJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDQ0XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9HT1RfTUUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyNzZcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyMTJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR1VOX0ZJR0hUJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9JTlNFUlRfQ09JTic6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAyXG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDMzMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9PVkVSJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjU0XG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAnYW1tbyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDI3NlxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDE4MFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAnYnVsbGV0JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDkwXG4gICAgICAgICd5JzogNDRcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOFxuICAgICAgICAnaCc6IDhcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICd0ZXJyYWluL2NhY3R1cyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ1OFxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDMyXG4gICAgICAgICdoJzogODhcbiAgICAnY293Ym95L2RlYWQvaGl0JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTk4XG4gICAgICAgICd5JzogNTg0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTMyXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAnY293Ym95L2RlYWQvcmlwJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjhcbiAgICAgICAgJ2gnOiA0NFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgJ2Nvd2JveS9oaWdoL2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTMyXG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2hpZ2gvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDE3NFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9oaWdoL3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAzMTJcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjMwXG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy9vbmUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMjhcbiAgICAgICAgJ3knOiAyMzhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEyNlxuICAgICAgICAneSc6IDMwOFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWQvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyMjRcbiAgICAgICAgJ3knOiAzMDhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkL29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDMyMlxuICAgICAgICAneSc6IDM3NlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWQvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogNDQ2XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNDUwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTk4XG4gICAgICAgICd5JzogNDQ2XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjk2XG4gICAgICAgICd5JzogNTE0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDM5NFxuICAgICAgICAneSc6IDUxNFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRsb3cvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogNTg0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNTg4XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAndGVycmFpbi90cmVlJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzc2XG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDY0XG4gICAgICAgICdoJzogMTA4XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAnd2Fnb24nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0MjBcbiAgICAgICAgJ3knOiAzNzZcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiA5NlxuICAnbWV0YSc6XG4gICAgJ2FwcCc6ICdodHRwOi8vd3d3LmNvZGVhbmR3ZWIuY29tL3RleHR1cmVwYWNrZXInXG4gICAgJ3ZlcnNpb24nOiAnMS4wJ1xuICAgICdpbWFnZSc6ICdhdGxhcy5wbmcnXG4gICAgJ2Zvcm1hdCc6ICdSR0JBODg4OCdcbiAgICAnc2l6ZSc6XG4gICAgICAndyc6IDUxMlxuICAgICAgJ2gnOiAxMDI0XG4gICAgJ3NjYWxlJzogJzEnXG4gICAgJ3NtYXJ0dXBkYXRlJzogJyRUZXh0dXJlUGFja2VyOlNtYXJ0VXBkYXRlOjEwNmI3YzI3MTZjNDIzNTU5MzUzZjE0YjQ0MTNkMjQzOmVmMzA3YjBhYmQxMjA3OTg4MTFhMzVkYjVlODYwNmNmOmNiY2U2YjUzZjBmNDllMGJmMTUxNzNjMjVjNDFmODc2JCdcblxubW9kdWxlLmV4cG9ydHMgPSBhdGxhc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWVcbiAqKi8iLCJsZXZlbHMgPSB7XG4gIDE6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgbnVtX2NhY3R1czogMVxuICAyOlxuICAgIHdhZ29uOiBmYWxzZVxuICAgIG51bV9jYWN0dXM6IDJcbiAgMzpcbiAgICB3YWdvbjogZmFsc2VcbiAgICBudW1fY2FjdHVzOiAzXG4gIDQ6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgbnVtX2NhY3R1czogNFxuICA1OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogNFxuICA2OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogNVxuICA3OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogMlxuICAgIG51bV90cmVlOiAxXG4gIDg6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiAxXG4gICAgbnVtX3RyZWU6IDJcbiAgOTpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDJcbiAgICBudW1fdHJlZTogMlxuICAxMDpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDNcbiAgICBudW1fdHJlZTogMlxuICAxMTpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDRcbiAgICBudW1fdHJlZTogMlxuICAxMjpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDNcbiAgICBudW1fdHJlZTogM1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxldmVsc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMuY29mZmVlXG4gKiovIiwic2Z4ID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBzZnhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvc2Z4LmNvZmZlZVxuICoqLyIsIiR3aW5kb3cgPSAkKHdpbmRvdylcblxuIyBtb2JpbGUgZmxhZ1xuaXNNb2JpbGUgPSAtPlxuICBpZiggL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIClcbiAgICB0cnVlXG4gIGVsc2VcbiAgICBmYWxzZVxuXG5sYXVuY2ggPSAoY2RuPVwiL1wiLCB2ZXJzaW9uPVwiP3Y9MC4wLjBcIikgLT5cblxuICAjIDQ6M1xuICBnYW1lX3dpZHRoID0gMTA4OFxuICBnYW1lX2hlaWdodCA9IDgxNlxuXG4gICMgQ29uc3RydWN0IEdhbWVcbiAgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcbiAgICBnYW1lX3dpZHRoLCAgICMgd2lkdGhcbiAgICBnYW1lX2hlaWdodCwgICMgaGVpZ2h0XG4gICAgUGhhc2VyLkFVVE8sICAjIHJlbmRlcmVyXG4gICAgJ2dhbWUnLCAgICAgICAjIElEIG9mIHBhcmVudCBlbGVtZW50XG4gICAgJ2Jvb3QnLCAgICAgICAjIHN0YXRlXG4gICAgZmFsc2UsICAgICAgICAjIHRyYW5zcGFyZW50XG4gICAgZmFsc2UsICAgICAgICAjIGFudGlhbGlhc1xuICAgIG51bGwgICAgICAgICAgIyBwaHlzaWNzQ29uZmlnXG4gIClcblxuICAjIGNkblxuICBnYW1lLmNkbiA9IGNkblxuICBnYW1lLmhvc3R1cmwgPSB1bmRlZmluZWQgI2hvc3R1cmxcblxuICAjIGdhbWUgdmVyc2lvblxuICBnYW1lLnZlcnNpb24gPSB2ZXJzaW9uXG5cbiAgIyBkZWJ1Z1xuICBnYW1lLmRlYnVnTW9kZSA9IGZhbHNlXG4gIGdhbWUuZGVidWdNb2RlID0gdHJ1ZVxuXG4gIGdhbWUuZW5hYmxlTXVzaWMgPSAhZ2FtZS5kZWJ1Z01vZGVcbiAgZ2FtZS5lbmFibGVTRlggPSAhZ2FtZS5kZWJ1Z01vZGVcblxuICAjIGNvbnN0YW50c1xuICBnYW1lLmNvbnN0YW50cyA9XG4gICAgU1RBVEVTOiBbJ2Jvb3QnLCAncHJlbG9hZCcsICdpbnRybycsICdnYW1lJywgJ3Jlc2V0J11cbiAgICBMRVZFTFM6IHJlcXVpcmUgJ2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvbGV2ZWxzJ1xuICAgIFNGWDogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZngnXG5cbiAgIyBkZWZhdWx0IGxldmVsXG4gIGdhbWUubGV2ZWwgPSAxXG5cbiAgIyBrZWVwIHRoZSBnYW1lIHdpdGhpbiB0aGUgcGFnZVxuICBnYW1lLnNjYWxlciA9IC0+XG4gICAgJGdhbWUgPSAkKFwiI2dhbWVcIilcbiAgICAkY2FudmFzID0gJChcImNhbnZhc1wiKVxuICAgICR3aW5kb3cgPSAkKHdpbmRvdylcblxuICAgIGlmICFpc01vYmlsZSgpXG4gICAgICAkZ2FtZSA9ICQoXCIjZ2FtZVwiKVxuICAgICAgJGNhbnZhcyA9ICQoXCJjYW52YXNcIilcbiAgICAgICR3aW5kb3cgPSAkKHdpbmRvdylcblxuICAgICAgaWYgJGdhbWUuaGVpZ2h0KCkgPiAkd2luZG93LmhlaWdodCgpIC0gMTUwXG4gICAgICAgICRnYW1lLmNzcyhcIm1heC1oZWlnaHRcIiwgKCR3aW5kb3cuaGVpZ2h0KCkgLSAxNTApICsgXCJweFwiKVxuICAgICAgZWxzZVxuICAgICAgICAkZ2FtZS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwiYXV0b1wiKVxuXG4gICMgcmVxdWlyZSBzdGF0ZXMgYW5kIGJvb3QhXG4gIGdhbWUuc3RhdGUuYWRkIHN0YXRlLCByZXF1aXJlKFwiLi9zdGF0ZXMvI3tzdGF0ZX0uY29mZmVlXCIpIGZvciBzdGF0ZSBpbiBnYW1lLmNvbnN0YW50cy5TVEFURVNcbiAgZ2FtZS5zdGF0ZS5zdGFydCAnYm9vdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsYXVuY2hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9sYXVuY2guY29mZmVlXG4gKiovIiwiY2xhc3MgQW1tbyBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBwbGF5ZXIpIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gJ2FtbW8nXG4gICAgeCA9IGlmIEBwbGF5ZXIuaXNfcGxheWVyX29uZSB0aGVuIDkyIGVsc2UgODE2XG4gICAgeSA9IEBnYW1lLmhlaWdodCAtIDQ1XG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgZnJhbWVcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG4gICAgIyBhZGQgY3JvcCByZWN0XG4gICAgQGNyb3BSZWN0ID0gQGdhbWUuYWRkLmdyYXBoaWNzKClcblxuICAgIHJldHVybiBAXG5cbiAgY3JvcDogLT5cbiAgICB3aWR0aCA9IEB3aWR0aCAtIEBwbGF5ZXIubnVtX2J1bGxldHMgLyA2ICogQHdpZHRoXG4gICAgQGRyYXdSZWN0IHdpZHRoXG5cbiAgcmVsb2FkOiAtPiBAY3JvcFJlY3QuY2xlYXIoKVxuXG4gIGRyYXdSZWN0OiAod2lkdGgpIC0+XG4gICAgQGNyb3BSZWN0LmxpbmVTdHlsZSAwXG4gICAgQGNyb3BSZWN0LmJlZ2luRmlsbCBcIjB4MDAwMDAwXCJcbiAgICBAY3JvcFJlY3QuZHJhd1JlY3QgQHgsIEB5LCB3aWR0aCwgQGhlaWdodFxuICAgIEBjcm9wUmVjdC5lbmRGaWxsKClcblxubW9kdWxlLmV4cG9ydHMgPSBBbW1vXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9BbW1vLmNvZmZlZVxuICoqLyIsIiMgYnVsbGV0IHBvc2l0aW9uIGNvbmZpZ1xuR1VOX1BPU19DT05GSUcgPVxuICBoaWdoOiAgICB7eDogNDUsIHk6IDE1LCBkZWc6IC01Mn1cbiAgbWVkaGlnaDoge3g6IDUwLCB5OiAzNSwgZGVnOiAtMjZ9XG4gIG1lZDogICAgIHt4OiA1NSwgeTogNDYsIGRlZzogMH1cbiAgbWVkbG93OiAge3g6IDUwLCB5OiA3NSwgZGVnOiAyMn1cbiAgbG93OiAgICAge3g6IDQ1LCB5OiA4OCwgZGVnOiA0Mn1cblxuIyBzcGVlZCBvZiBmaXJlZCBidWxsZXRcblNQRUVEID0gMTAwMFxuXG5jbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9ICdidWxsZXQnXG4gICAgc3VwZXIgQGdhbWUsIEBwbGF5ZXIuYm9keS54LCBAcGxheWVyLmJvZHkueSwga2V5LCBmcmFtZVxuXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQFxuXG4gICAgIyB2aXNpYmlsaXR5IHZhclxuICAgIEB0aW1lID0gRGF0ZS5ub3coKVxuXG4gICAgIyBib3VuY2Ugb2ZmIHN1cmZhY2VzXG4gICAgQGJvZHkuYm91bmNlLnNldCAxXG5cbiAgICAjIHBsYXllclxuICAgIEBpc19wbGF5ZXJfb25lID0gQHBsYXllci5pc19wbGF5ZXJfb25lXG5cbiAgICAjIGJvdW5kc1xuICAgIEBvdXRPZkJvdW5kc0tpbGwgPSB0cnVlXG5cbiAgICAjIGNsZWFuIHVwXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcbiAgICBAa2lsbCgpXG5cbiAgICByZXR1cm4gQFxuXG4gIHNob290OiAtPlxuICAgIGd1bl9wb3MgPSBAcGxheWVyLmd1bl9wb3NbQHBsYXllci5ndW5fcG9zX2luZGV4XVxuICAgIHBvcyA9IEdVTl9QT1NfQ09ORklHW2d1bl9wb3NdXG4gICAgeCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gQHBsYXllci5ib2R5LnJpZ2h0ICsgcG9zLnggZWxzZSBAcGxheWVyLmJvZHkueCAtIHBvcy54XG4gICAgeSA9IEBwbGF5ZXIuYm9keS55ICsgcG9zLnlcbiAgICBhbmdsZSA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gcG9zLmRlZyBlbHNlIDE4MCAtIHBvcy5kZWdcbiAgICAjIHJldml2ZSB0aGUgYnVsbGV0XG4gICAgQHJlc2V0IHgsIHlcbiAgICAjIHNldCB2ZWxvY2l0eVxuICAgIEBnYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlIGFuZ2xlLCBTUEVFRCwgQGJvZHkudmVsb2NpdHlcblxuY2xhc3MgQnVsbGV0cyBleHRlbmRzIFBoYXNlci5Hcm91cFxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHBsYXllcikgLT5cbiAgICBzdXBlciBAZ2FtZSwgbnVsbCwgJ2J1bGxldHMnLCBmYWxzZSwgdHJ1ZSwgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHlcbiAgICBAYWRkIG5ldyBCdWxsZXQoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSBmb3IgbiBpbiBbMS4uQHBsYXllci5udW1fYnVsbGV0c11cblxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cbiAgc2hvb3Q6IC0+IEBnZXRGaXJzdERlYWQoKS5zaG9vdCgpXG5cbm1vZHVsZS5leHBvcnRzID0gQnVsbGV0c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQnVsbGV0cy5jb2ZmZWVcbiAqKi8iLCJUZXJyYWluID0gcmVxdWlyZSAnLi90ZXJyYWluLmNvZmZlZSdcblxuY2xhc3MgQ2FjdHVzIGV4dGVuZHMgVGVycmFpblxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIEBnYW1lX3N0YXRlLCB4LCB5LCAnY2FjdHVzJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhY3R1c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ2FjdHVzLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ2VpbGluZyBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgeV9vZmZzZXQ9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgMCwgeV9vZmZzZXRcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICBAYm9keS5zZXRTaXplIEBnYW1lLndvcmxkLndpZHRoLCA1LCAwLCAwXG4gICAgQGJvZHkuYWxsb3dHcmF2aXR5ID0gZmFsc2VcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0NlaWxpbmcuY29mZmVlXG4gKiovIiwiQnVsbGV0cyA9IHJlcXVpcmUgJy4vQnVsbGV0cy5jb2ZmZWUnXG5BbW1vID0gcmVxdWlyZSAnLi9BbW1vLmNvZmZlZSdcblRleHQgPSByZXF1aXJlICcuL1RleHQuY29mZmVlJ1xuU3RhdGVNYWNoaW5lID0gcmVxdWlyZSAnamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lJ1xuXG4jIFBPU0lUSU9OIENPTlNUQU5UU1xuUExBWUVSX09ORV9YID0gMjAwXG5QTEFZRVJfT05FX1kgPSA0OTVcblBMQVlFUl9UV09fWCA9IDg4OFxuUExBWUVSX1RXT19ZID0gNDk1XG5cbiMgTU9WRU1FTlQgQ09OU1RBTlRTXG5TUEVFRCA9IDYwXG5ERUxUQSA9IDE1XG5GUkFNRVJBVEUgPSA3XG5cbiMgQ09OVFJPTCBDT05TVEFOVFNcblBMQVlFUl9PTkVfQ09OVFJPTFMgPVxuICBtb3ZlX3VwOiAnVydcbiAgbW92ZV9kb3duOiAnUydcbiAgbW92ZV9sZWZ0OiAnQSdcbiAgbW92ZV9yaWdodDogJ0QnXG4gIGFpbV91cDogJ1EnXG4gIGFpbV9kb3duOiAnRSdcbiAgc2hvb3Q6ICdGJ1xuXG5QTEFZRVJfVFdPX0NPTlRST0xTID1cbiAgbW92ZV91cDogJ0knXG4gIG1vdmVfZG93bjogJ0snXG4gIG1vdmVfbGVmdDogJ0onXG4gIG1vdmVfcmlnaHQ6ICdMJ1xuICBhaW1fdXA6ICdPJ1xuICBhaW1fZG93bjogJ1UnXG4gIHNob290OiAnSCdcblxuY2xhc3MgQ293Ym95IGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQGlzX3BsYXllcl9vbmU9dHJ1ZSkgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnY293Ym95L21lZC90d28nXG4gICAgeCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gUExBWUVSX09ORV9YIGVsc2UgUExBWUVSX1RXT19YXG4gICAgeSA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gUExBWUVSX09ORV9ZIGVsc2UgUExBWUVSX1RXT19ZXG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgZnJhbWVcblxuICAgICMgZW5hYmxlIGFyY2FkZSBwaHlzaWNzXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgIyBzYXZlIHdpZHRoIGFuZCBoZWlnaHQgb2Ygc3ByaXRlIGJvZHlcbiAgICBAd2lkdGggPSBAYm9keS53aWR0aFxuICAgIEBoZWlnaHQgPSBAYm9keS5oZWlnaHRcbiAgICAjIGNoYW5nZSBib2R5IHNpemUgZm9yIG1vcmUgYWNjdXJhdGUgaGl0IGNvbGxpc2lvblxuICAgIEBib2R5LnNldFNpemUgNDUsIDEzNiwgMjUsIDBcbiAgICBAYm9keS5zZXRTaXplIDQ1LCAxMzYsIC0yNSwgMCBpZiBAaXNfcGxheWVyX29uZVxuICAgICMgY29sbGlkZSB3aXRoIHdvcmxkXG4gICAgQGJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZVxuICAgICMgZG9uJ3QgbGV0IGJ1bGxldCBwaHlzaWNzIHB1c2ggeWEgYmFja1xuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICAjIHNldCBhbmNob3IgdG8gaG9yaXpvbnRhbCBjZW50ZXIgc28gc3ByaXRlIGZsaXBzIGFyb3VuZCBpdHMgbWlkZGxlXG4gICAgQGFuY2hvci5zZXRUbyAuNSwgMVxuICAgICMgZmxpcCBzcHJpdGUgaWYgaXMgcGxheWVyIHR3b1xuICAgIEBzY2FsZS54ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiAtMSBlbHNlIDFcblxuICAgICMgZGlyZWN0aW9uIG9iamVjdFxuICAgIEBkaXJlY3Rpb24gPVxuICAgICAgdXA6IGZhbHNlXG4gICAgICBkb3duOiBmYWxzZVxuICAgICAgbGVmdDogZmFsc2VcbiAgICAgIHJpZ2h0OiBmYWxzZVxuXG4gICAgIyBhaW0gb2JqZWN0XG4gICAgQGFpbSA9XG4gICAgICB1cDogZmFsc2VcbiAgICAgIGRvd246IGZhbHNlXG5cbiAgICAjIG1vdmVtZW50IHZhcnNcbiAgICBAdGltZSA9IERhdGUubm93KClcbiAgICBAbW92aW5nID0gZmFsc2VcbiAgICBAZGVhZCA9IGZhbHNlXG4gICAgQGlucHV0X2Rpc2FibGVkID0gdHJ1ZVxuXG4gICAgIyBmcmFtZSB2YXJzXG4gICAgQGd1bl9wb3MgPSBbJ2xvdycsJ21lZGxvdycsJ21lZCcsJ21lZGhpZ2gnLCdoaWdoJ11cbiAgICBAbGVnX3BvcyA9IFsndHdvJywnb25lJywnY3Jvc3MnXVxuICAgIEBndW5fcG9zX2luZGV4ID0gMlxuICAgIEBsZWdfcG9zX2luZGV4ID0gMVxuXG4gICAgIyBodWQgdmFyc1xuICAgIEB3aW5zID0gMFxuICAgIEBudW1fYnVsbGV0cyA9IDZcbiAgICBAYnVsbGV0cyA9IG5ldyBCdWxsZXRzIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQFxuICAgIEBhbW1vID0gbmV3IEFtbW8gQGdhbWUsIEBnYW1lX3N0YXRlLCBAXG5cbiAgICAjIHRleHQgZm9yIGRpZSBzdGF0ZVxuICAgIEB0ZXh0ID0gbmV3IFRleHQgQGdhbWUsICdHT1RfTUUnXG5cbiAgICAjIHNldHVwIGNvbnRyb2xzXG4gICAgQHNldHVwQ29udHJvbHMoKVxuICAgICMgc2V0dXAgYW5pbWF0aW9uc1xuICAgIEBzZXR1cEFuaW1hdGlvbnMoKVxuICAgICMgY3JlYXRlIHN0YXRlIG1hY2hpbmVcbiAgICBAY3JlYXRlU3RhdGVNYWNoaW5lKClcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgICMgQGtpbGwoKVxuXG4gICAgcmV0dXJuIEBcblxuICB1cGRhdGU6IC0+XG4gICAgIyBoYW5kbGUgaW5jcmVtZW50YWwgbW92ZW1lbnRcbiAgICBpZiBAc3RhdGUuY3VycmVudCAhPSAnZHlpbmcnIGFuZCAhQGlucHV0X2Rpc2FibGVkXG4gICAgICBjdXJyZW50X3RpbWUgPSBEYXRlLm5vdygpXG4gICAgICBpZiBjdXJyZW50X3RpbWUgLSBAdGltZSA+IFNQRUVEXG4gICAgICAgIEBib2R5LnkgLT0gREVMVEEgaWYgQGRpcmVjdGlvbi51cCAgICBhbmQgQGJvZHkueSA+IEBnYW1lX3N0YXRlLmNlaWxpbmcueVxuICAgICAgICBAYm9keS55ICs9IERFTFRBIGlmIEBkaXJlY3Rpb24uZG93biAgYW5kIEBib2R5LnkgPCBAZ2FtZV9zdGF0ZS5mbG9vci55IC0gQGJvZHkuaGVpZ2h0XG4gICAgICAgIGlmIEBpc19wbGF5ZXJfb25lXG4gICAgICAgICAgQGJvZHkueCAtPSBERUxUQSBpZiBAZGlyZWN0aW9uLmxlZnQgIGFuZCBAYm9keS54ID4gQGdhbWVfc3RhdGUubGVmdF93YWxsX291dGVyLmJvZHkueFxuICAgICAgICAgIEBib2R5LnggKz0gREVMVEEgaWYgQGRpcmVjdGlvbi5yaWdodCBhbmQgQGJvZHkucmlnaHQgPCBAZ2FtZV9zdGF0ZS5sZWZ0X3dhbGwuYm9keS54XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBAYm9keS54IC09IERFTFRBIGlmIEBkaXJlY3Rpb24ubGVmdCAgYW5kIEBib2R5LnggPiBAZ2FtZV9zdGF0ZS5yaWdodF93YWxsLmJvZHkueFxuICAgICAgICAgIEBib2R5LnggKz0gREVMVEEgaWYgQGRpcmVjdGlvbi5yaWdodCBhbmQgQGJvZHkucmlnaHQgPCBAZ2FtZV9zdGF0ZS5yaWdodF93YWxsX291dGVyLmJvZHkueFxuICAgICAgICAjIEBhbmltYXRlX2FpbV91cCgpICBpZiBAYWltLnVwXG4gICAgICAgICMgQGFuaW1hdGVfYWltX2Rvd24oKSBpZiBAYWltLmRvd25cbiAgICAgICAgQHRpbWUgPSBjdXJyZW50X3RpbWVcblxuICAgICAgIyBpcyB0aGUgcGxheWVyIG1vdmluZz9cbiAgICAgIEBtb3ZpbmcgPSBmYWxzZSB1bmxlc3MgQGRpcmVjdGlvbi51cCB8fCBAZGlyZWN0aW9uLmRvd24gfHwgQGRpcmVjdGlvbi5sZWZ0IHx8IEBkaXJlY3Rpb24ucmlnaHRcblxuICAgICAgIyB0cmlnZ2VyIG1vdmUgYW5pbWF0aW9uXG4gICAgICBAbW92ZSgpIGlmICBAbW92aW5nIGFuZCBAc3RhdGUuY3VycmVudCAhPSAnbW92aW5nJ1xuICAgICAgQGlkbGUoKSBpZiAhQG1vdmluZyBhbmQgQHN0YXRlLmN1cnJlbnQgIT0gJ2lkbGUnXG5cbiAgICAjIGhhbmRsZSBkeWluZyBzZXF1ZW5jZVxuICAgIGVsc2VcbiAgICAgICMgc2hvdyBcIkdPVCBNRSFcIiB0ZXh0XG4gICAgICBjdXJyZW50X2ZyYW1lID0gQGFuaW1hdGlvbnMuY3VycmVudEZyYW1lLm5hbWVcbiAgICAgIGlmIGN1cnJlbnRfZnJhbWUgaXMgJ2Nvd2JveS9kZWFkL3JpcCcgYW5kICFAdGV4dC52aXNpYmxlXG4gICAgICAgIHggPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIEBib2R5LnJpZ2h0IC0gQHRleHQud2lkdGggLyAyIGVsc2UgQGJvZHkueCAtIEB0ZXh0LndpZHRoIC8gMlxuICAgICAgICB5ID0gQGJvZHkueVxuICAgICAgICBAdGV4dC5wbGFjZSB4LCB5XG4gICAgICAgIEB0ZXh0LnNob3coKVxuXG4gICAgICAjIHJlc2V0IHRoZSBwbGF5ZXJzXG5cbiAgIyBkaXNhYmxlIC8gZW5hYmxlIG1vdmVtZW50XG4gIGVuYWJsZUlucHV0OiAtPiBAaW5wdXRfZGlzYWJsZWQgPSBmYWxzZVxuICBkaXNhYmxlSW5wdXQ6IC0+IEBpbnB1dF9kaXNhYmxlZCA9IHRydWVcbiAgdG9nZ2xlSW5wdXQ6IC0+IEBpbnB1dF9kaXNhYmxlZCA9ICFAaW5wdXRfZGlzYWJsZWRcblxuICAjIGNoYW5nZSBzdGF0ZVxuICBtb3ZlOiAgICAgICAgICAgLT4gQHN0YXRlLl9tb3ZlKClcbiAgaWRsZTogICAgICAgICAgIC0+IEBzdGF0ZS5faWRsZSgpXG4gIGRpZTogICAgICAgICAgICAtPiBAc3RhdGUuX2RpZSgpXG5cbiAgIyBjb250cm9sIGRpcmVjdGlvblxuICBtb3ZlX3VwOiAgICAgICAgLT4gQGRpcmVjdGlvbi51cCAgICA9IHRydWVcbiAgbW92ZV9sZWZ0OiAgICAgIC0+IEBkaXJlY3Rpb24ubGVmdCAgPSB0cnVlXG4gIG1vdmVfcmlnaHQ6ICAgICAtPiBAZGlyZWN0aW9uLnJpZ2h0ID0gdHJ1ZVxuICBtb3ZlX2Rvd246ICAgICAgLT4gQGRpcmVjdGlvbi5kb3duICA9IHRydWVcbiAgbW92ZV91cF9vZmY6ICAgIC0+IEBkaXJlY3Rpb24udXAgICAgPSBmYWxzZVxuICBtb3ZlX2xlZnRfb2ZmOiAgLT4gQGRpcmVjdGlvbi5sZWZ0ICA9IGZhbHNlXG4gIG1vdmVfcmlnaHRfb2ZmOiAtPiBAZGlyZWN0aW9uLnJpZ2h0ID0gZmFsc2VcbiAgbW92ZV9kb3duX29mZjogIC0+IEBkaXJlY3Rpb24uZG93biAgPSBmYWxzZVxuXG4gIGFpbV91cDogICAgICAgICAtPiBAYW5pbWF0ZV9haW1fdXAoKVxuICBhaW1fZG93bjogICAgICAgLT4gQGFuaW1hdGVfYWltX2Rvd24oKVxuICAjIGFpbV91cDogICAgICAgICAtPiBAYWltLnVwICAgICAgICAgID0gdHJ1ZVxuICAjIGFpbV9kb3duOiAgICAgICAtPiBAYWltLmRvd24gICAgICAgID0gdHJ1ZVxuICAjIGFpbV91cF9vZmY6ICAgICAtPiBAYWltLnVwICAgICAgICAgID0gZmFsc2VcbiAgIyBhaW1fZG93bl9vZmY6ICAgLT4gQGFpbS5kb3duICAgICAgICA9IGZhbHNlXG5cbiAgIyBmdWxsIGFtbW8hXG4gIHJlbG9hZDogLT5cbiAgICBAbnVtX2J1bGxldHMgPSA2XG4gICAgQGFtbW8ucmVsb2FkKClcblxuICAjIGhhbmRsZSBhaW1pbmcgYW5pbWF0aW9uc1xuICBhbmltYXRlX2FpbV91cDogLT5cbiAgICBjdXJyZW50X2ZyYW1lID0gQGFuaW1hdGlvbnMuY3VycmVudEZyYW1lLm5hbWVcbiAgICBAZ3VuX3Bvc19pbmRleCArPSAxIGlmIEBndW5fcG9zX2luZGV4IDwgQGd1bl9wb3MubGVuZ3RoIC0gMVxuXG4gICAgZm9yIHBvcywgaW5kZXggaW4gQGxlZ19wb3NcbiAgICAgIEBsZWdfcG9zX2luZGV4ID0gaW5kZXhcbiAgICAgIGJyZWFrIGlmIGN1cnJlbnRfZnJhbWUubWF0Y2ggcG9zXG5cbiAgICBAYW5pbWF0aW9ucy5zdG9wKClcbiAgICBAYW5pbWF0aW9ucy5wbGF5IFwibW92ZS0je0BndW5fcG9zW0BndW5fcG9zX2luZGV4XX1cIlxuICAgIEBhbmltYXRpb25zLm5leHQgQGxlZ19wb3NfaW5kZXhcblxuICBhbmltYXRlX2FpbV9kb3duOiAtPlxuICAgIGN1cnJlbnRfZnJhbWUgPSBAYW5pbWF0aW9ucy5jdXJyZW50RnJhbWUubmFtZVxuICAgIEBndW5fcG9zX2luZGV4IC09IDEgaWYgQGd1bl9wb3NfaW5kZXggPiAwXG5cbiAgICBmb3IgcG9zLCBpbmRleCBpbiBAbGVnX3Bvc1xuICAgICAgQGxlZ19wb3NfaW5kZXggPSBpbmRleFxuICAgICAgYnJlYWsgaWYgY3VycmVudF9mcmFtZS5tYXRjaCBwb3NcblxuICAgIEBhbmltYXRpb25zLnN0b3AoKVxuICAgIEBhbmltYXRpb25zLnBsYXkgXCJtb3ZlLSN7QGd1bl9wb3NbQGd1bl9wb3NfaW5kZXhdfVwiXG4gICAgQGFuaW1hdGlvbnMubmV4dCBAbGVnX3Bvc19pbmRleFxuXG4gICMgc2hvb3QhXG4gIHNob290OiAtPlxuICAgIGlmIEBudW1fYnVsbGV0cyA+IDAgYW5kICFAaW5wdXRfZGlzYWJsZWRcbiAgICAgIEBudW1fYnVsbGV0cyAtPSAxXG4gICAgICBAYW1tby5jcm9wKClcbiAgICAgIEBidWxsZXRzLnNob290KClcblxuICBzZXR1cENvbnRyb2xzOiAtPlxuICAgICMgbWFwIGNvbnRyb2wga2V5c1xuICAgIGNvbnRyb2xzID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBQTEFZRVJfT05FX0NPTlRST0xTIGVsc2UgUExBWUVSX1RXT19DT05UUk9MU1xuICAgIF8uZWFjaCBjb250cm9scywgKGtleSwgYWN0aW9uKSA9PlxuICAgICAgaW5wdXQgPSBAZ2FtZV9zdGF0ZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkgUGhhc2VyLktleWJvYXJkW2tleV1cbiAgICAgIGlucHV0Lm9uRG93bi5hZGQgPT4gQFthY3Rpb25dKClcbiAgICAgIGlucHV0Lm9uRG93bi5hZGQgPT4gQG1vdmluZyA9IHRydWUgaWYgYWN0aW9uLm1hdGNoICdtb3ZlJ1xuICAgICAgaW5wdXQub25VcC5hZGQgICA9PiBAW1wiI3thY3Rpb259X29mZlwiXSgpIGlmIGFjdGlvbi5tYXRjaCAnbW92ZSdcbiAgICAgICMgaW5wdXQub25VcC5hZGQgICA9PiBAW1wiI3thY3Rpb259X29mZlwiXSgpXG5cbiAgc2V0dXBBbmltYXRpb25zOiAtPlxuICAgICMgZGllIGFuaW1hdGlvblxuICAgIEBhbmltYXRpb25zLmFkZCAnZGllJywgW1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL3JpcCdcbiAgICAgICdjb3dib3kvZGVhZC9yaXAnXG4gICAgICAnY293Ym95L2RlYWQvcmlwJ1xuICAgIF0sIEZSQU1FUkFURSwgZmFsc2VcblxuICAgICMgbW92ZSBhbmltYXRpbm9zXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLWhpZ2gnLCBbXG4gICAgICAnY293Ym95L2hpZ2gvdHdvJ1xuICAgICAgJ2Nvd2JveS9oaWdoL29uZSdcbiAgICAgICdjb3dib3kvaGlnaC9jcm9zcydcbiAgICAgICdjb3dib3kvaGlnaC9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLWxvdycsIFtcbiAgICAgICdjb3dib3kvbG93L3R3bydcbiAgICAgICdjb3dib3kvbG93L29uZSdcbiAgICAgICdjb3dib3kvbG93L2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9sb3cvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1tZWRoaWdoJywgW1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL3R3bydcbiAgICAgICdjb3dib3kvbWVkaGlnaC9vbmUnXG4gICAgICAnY293Ym95L21lZGhpZ2gvY3Jvc3MnXG4gICAgICAnY293Ym95L21lZGhpZ2gvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1tZWRsb3cnLCBbXG4gICAgICAnY293Ym95L21lZGxvdy90d28nXG4gICAgICAnY293Ym95L21lZGxvdy9vbmUnXG4gICAgICAnY293Ym95L21lZGxvdy9jcm9zcydcbiAgICAgICdjb3dib3kvbWVkbG93L29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbWVkJywgW1xuICAgICAgJ2Nvd2JveS9tZWQvdHdvJ1xuICAgICAgJ2Nvd2JveS9tZWQvb25lJ1xuICAgICAgJ2Nvd2JveS9tZWQvY3Jvc3MnXG4gICAgICAnY293Ym95L21lZC9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG5cbiAgY3JlYXRlU3RhdGVNYWNoaW5lOiAtPlxuICAgIEBzdGF0ZSA9IFN0YXRlTWFjaGluZS5jcmVhdGVcbiAgICAgIGluaXRpYWw6ICdfaWRsZSdcbiAgICAgIGV2ZW50czogW1xuICAgICAgICB7IG5hbWU6ICdfaWRsZScsIGZyb206ICcqJywgdG86ICdpZGxpbmcnIH1cbiAgICAgICAgeyBuYW1lOiAnX21vdmUnLCBmcm9tOiAnKicsIHRvOiAnbW92aW5nJyB9XG4gICAgICAgIHsgbmFtZTogJ19kaWUnLCAgZnJvbTogJyonLCB0bzogJ2R5aW5nJyAgfSBdXG4gICAgICBjYWxsYmFja3M6XG4gICAgICAgIG9uX2lkbGU6IChldmVudCwgZnJvbSwgdG8pID0+IEBhbmltYXRpb25zLnN0b3AgbnVsbCwgdHJ1ZVxuICAgICAgICBvbl9tb3ZlOiAoZXZlbnQsIGZyb20sIHRvKSA9PiBAcGxheSBcIm1vdmUtI3tAZ3VuX3Bvc1tAZ3VuX3Bvc19pbmRleF19XCJcbiAgICAgICAgb25fZGllOiAoZXZlbnQsIGZyb20sIHRvKSAgPT4gQHBsYXkgXCJkaWVcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IENvd2JveVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ293Ym95LmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRmxvb3IgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIHlfb2Zmc2V0PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIDAsIEBnYW1lLmhlaWdodCArIHlfb2Zmc2V0XG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuc2V0U2l6ZSBAZ2FtZS53b3JsZC53aWR0aCwgNSwgMCwgMFxuICAgIEBib2R5LmFsbG93R3Jhdml0eSA9IGZhbHNlXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9GbG9vci5jb2ZmZWVcbiAqKi8iLCJDYWN0dXMgPSByZXF1aXJlICcuL0NhY3R1cy5jb2ZmZWUnXG5UcmVlID0gcmVxdWlyZSAnLi9UcmVlLmNvZmZlZSdcblxuIyBnYW1lIHdpZHRoLCBoZWlnaHQgPSAxMDg4LCA4MTZcbiMgY2FjdHVzIHdpZHRoLCBoZWlnaHQgPSAzMiwgODhcbiMgdHJlZSB3aWR0aCwgaGVpZ2h0ID0gNjQsIDEwOFxuXG5DQUNUVVNfUE9TSVRJT05TID1cbiAgdG9wX2xlZnQ6IHsgeDogMzI4LCB5OiAxMDAgfVxuICB0b3BfcmlnaHQ6IHsgeDogNzE0LCB5OiAxMDAgfVxuICBjZW50ZXJfbGVmdDogeyB4OiA0MzYsIHk6IDM1MCB9XG4gIGNlbnRlcjogeyB4OiA1MjgsIHk6IDM1MCB9XG4gIGNlbnRlcl9yaWdodDogeyB4OiA2MTQsIHk6IDM1MCB9XG4gIGJvdHRvbV9sZWZ0OiB7IHg6IDMyOCwgeTogNjAwIH1cbiAgYm90dG9tX3JpZ2h0OiB7IHg6IDcxNCwgeTogNjAwIH1cblxuVFJFRV9QT1NJVElPTlMgPVxuICB0b3BfbGVmdDogeyB4OiAzMjgsIHk6IDE1MCB9XG4gIHRvcF9yaWdodDogeyB4OiA3MTQsIHk6IDE1MCB9XG4gIGJvdHRvbV9sZWZ0OiB7IHg6IDMyOCwgeTogNTUwIH1cbiAgYm90dG9tX3JpZ2h0OiB7IHg6IDcxNCwgeTogNTUwIH1cblxuUE9TSVRJT05TID0gW1xuICBcInRvcF9sZWZ0XCJcbiAgXCJ0b3BfcmlnaHRcIlxuICBcImJvdHRvbV9sZWZ0XCJcbiAgXCJib3R0b21fcmlnaHRcIlxuXVxuXG5jbGFzcyBUZXJyYWluR3JvdXAgZXh0ZW5kcyBQaGFzZXIuR3JvdXBcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBsZXZlbF9kYXRhPXt9KSAtPlxuICAgIHN1cGVyIEBnYW1lLCBudWxsLCAnVGVycmFpbkdyb3VwJ1xuICAgIEBidWlsZCgpXG5cbiAgICAjIGFkZCB0byBnYW1lXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuICAjIHJlbW92ZSB0ZXJyYWluIHNwcml0ZXNcbiAgcmVzZXQ6IC0+IEByZW1vdmVDaGlsZHJlbigpXG5cbiAgIyBidWlsZCBhIG5ldyBzZXQgb2YgdGVycmFpbiBzcHJpdGVzXG4gIGJ1aWxkOiAobGV2ZWxfZGF0YT1AbGV2ZWxfZGF0YSkgLT5cbiAgICAjIG92ZXJ3cml0ZSB0aGUgbGV2ZWxfZGF0YVxuICAgIEBsZXZlbF9kYXRhID0gbGV2ZWxfZGF0YVxuICAgICMgZGV0ZXJtaW5lIGlmIGxldmVsIGhhcyBhIHdhZ29uXG4gICAgQGlzX3dhZ29uID0gQGxldmVsX2RhdGEud2Fnb25cbiAgICBAbnVtX2NhY3R1cyA9IEBsZXZlbF9kYXRhLm51bV9jYWN0dXNcbiAgICBAbnVtX3RyZWUgPSBAbGV2ZWxfZGF0YS5udW1fdHJlZVxuICAgICMgZGV0ZXJtaW5lIHBvc2l0aW9ucyB0byBwbHVjayBmcm9tXG4gICAgQHBvc2l0aW9ucyA9IF8uc2h1ZmZsZSBQT1NJVElPTlNcbiAgICBAY2FjdHVzX3Bvc2l0aW9ucyA9IGlmIEBpc193YWdvbiB0aGVuIFsnY2VudGVyX2xlZnQnLCAnY2VudGVyX3JpZ2h0J10gZWxzZSBbJ2NlbnRlciddXG4gICAgIyBhZGQgdGVycmFpbiBjaGlsZHJlbiB0byB0aGUgZ3JvdXBcbiAgICBAYWRkQ2FjdHVzKCkgZm9yIGNhY3R1cyBpbiBbMC4uLkBudW1fY2FjdHVzXVxuICAgIEBhZGRUcmVlKCkgICBmb3IgdHJlZSBpbiBbMC4uLkBudW1fdHJlZV1cblxuICBhZGRDYWN0dXM6IC0+XG4gICAgcG9zID0gQGdldFRlcnJhaW5Qb3NpdGlvbiAnY2FjdHVzJ1xuICAgIEBhZGQgbmV3IENhY3R1cyBAZ2FtZSwgQGdhbWVfc3RhdGUsIHBvcy54LCBwb3MueVxuXG4gIGFkZFRyZWU6IC0+XG4gICAgcG9zID0gQGdldFRlcnJhaW5Qb3NpdGlvbiAndHJlZSdcbiAgICBAYWRkIG5ldyBUcmVlIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgcG9zLngsIHBvcy55XG5cbiAgZ2V0VGVycmFpblBvc2l0aW9uOiAoa2V5KSAtPlxuICAgIHBvcyA9IHVuZGVmaW5lZFxuICAgIHN3aXRjaCBrZXlcbiAgICAgIHdoZW4gJ2NhY3R1cydcbiAgICAgICAgaWYgQGNhY3R1c19wb3NpdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgIHBvc19rZXkgPSBAY2FjdHVzX3Bvc2l0aW9ucy5wb3AoKVxuICAgICAgICAgIHBvcyA9IENBQ1RVU19QT1NJVElPTlNbcG9zX2tleV1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHBvc19rZXkgPSBAcG9zaXRpb25zLnBvcCgpXG4gICAgICAgICAgcG9zID0gQ0FDVFVTX1BPU0lUSU9OU1twb3Nfa2V5XVxuICAgICAgd2hlbiAndHJlZSdcbiAgICAgICAgcG9zX2tleSA9IEBwb3NpdGlvbnMucG9wKClcbiAgICAgICAgcG9zID0gVFJFRV9QT1NJVElPTlNbcG9zX2tleV1cbiAgICByZXR1cm4gcG9zXG5cbm1vZHVsZS5leHBvcnRzID0gVGVycmFpbkdyb3VwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXJyYWluR3JvdXAuY29mZmVlXG4gKiovIiwiY2xhc3MgVGV4dCBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgZnJhbWUsIHg9MCwgeT0wKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBcInRleHQvI3tmcmFtZX1cIlxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG4gICAgQGhpZGUoKVxuXG4gICAgcmV0dXJuIEBcblxuICBwbGFjZTogKHgsIHkpIC0+XG4gICAgQHggPSB4XG4gICAgQHkgPSB5XG5cbiAgc2hvdzogLT4gQHJlc2V0IEB4LCBAeVxuXG4gIGhpZGU6IC0+IEBraWxsKClcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXh0LmNvZmZlZVxuICoqLyIsIlRlcnJhaW4gPSByZXF1aXJlICcuL3RlcnJhaW4uY29mZmVlJ1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgVGVycmFpblxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIEBnYW1lX3N0YXRlLCB4LCB5LCAndHJlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBUcmVlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UcmVlLmNvZmZlZVxuICoqLyIsIlNQRUVEID0gMzAwXG5ERUxUQSA9IDE1XG5cbmNsYXNzIFdhZ29uIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSkgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnd2Fnb24nXG4gICAgIyBzdXBlciBAZ2FtZSwgNTAwLCA4MTYgLSA5NlxuICAgIHN1cGVyIEBnYW1lLCA1MDAsIDY3NSwga2V5LCBmcmFtZVxuXG4gICAgIyBzZXQgcGh5c2ljcyBib2R5XG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuXG4gICAgQHJvbGxpbmcgPSBmYWxzZVxuICAgIEBkaXJlY3Rpb24gPSAndXAnXG4gICAgQHRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAjIGNsZWFuIHVwXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcbiAgICBAa2lsbCgpXG5cbiAgICByZXR1cm4gQFxuXG4gIHJldml2ZTogLT4gQHJlc2V0IDUwMCwgNjc1XG5cbiAgcm9sbDogLT4gQHJvbGxpbmcgPSB0cnVlXG5cbiAgc3RvcDogLT4gQHJvbGxpbmcgPSBmYWxzZVxuXG4gIHN0YXJ0OiAtPlxuICAgIEByZXZpdmUoKVxuICAgIEByb2xsKClcblxuICB1cGRhdGU6IC0+XG4gICAgY3VycmVudF90aW1lID0gRGF0ZS5ub3coKVxuICAgIGlmIEByb2xsaW5nIGFuZCAoY3VycmVudF90aW1lIC0gQHRpbWUpID4gU1BFRURcbiAgICAgIEBkaXJlY3Rpb24gPSAndXAnIGlmIEBkaXJlY3Rpb24gaXMgJ2Rvd24nIGFuZCBAYm9keS55ID49IDY3NVxuICAgICAgQGRpcmVjdGlvbiA9ICdkb3duJyBpZiBAZGlyZWN0aW9uIGlzICd1cCcgYW5kIEBib2R5LnkgPD0gNDVcbiAgICAgIHNpZ24gPSBpZiBAZGlyZWN0aW9uIGlzICd1cCcgdGhlbiAtMSBlbHNlIDFcblxuICAgICAgQGJvZHkueSArPSBzaWduICogREVMVEFcblxuICAgICAgIyBjb25zb2xlLmxvZyBAdGltZVxuICAgICAgQHRpbWUgPSBjdXJyZW50X3RpbWVcblxubW9kdWxlLmV4cG9ydHMgPSBXYWdvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvV2Fnb24uY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXYWxsIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCB4X29mZnNldD0wKSAtPlxuICAgIHN1cGVyIEBnYW1lLCB4X29mZnNldCwgMFxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgIEBib2R5LnNldFNpemUgMSwgQGdhbWUud29ybGQuaGVpZ2h0LCAwLCAwXG4gICAgQGJvZHkuYWxsb3dHcmF2aXR5ID0gZmFsc2VcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1dhbGwuY29mZmVlXG4gKiovIiwiY2xhc3MgQm9vdFxuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgIyBzZXQgYmFja2dyb3VuZCBjb2xvciB0byBibGFja1xuICAgIEBnYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwMDAwJ1xuXG4gICAgIyBTY2FsZSB0aGUgZ2FtZSBpbiB0aGUgYnJvd3NlclxuICAgIEBzY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlXG4gICAgQHNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTExcblxuICAgICMgc3RhcnQgcHJlbG9hZFxuICAgIEBzdGF0ZS5zdGFydCAncHJlbG9hZCdcblxuICBwcmVsb2FkOiAtPlxuICAgICMgc2V0IGludGlhbCBzY2FsZVxuICAgIEBnYW1lLnNjYWxlcigpXG5cbm1vZHVsZS5leHBvcnRzID0gQm9vdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9ib290LmNvZmZlZVxuICoqLyIsIiMgQk9VTkRTXG5GbG9vciAgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvRmxvb3IuY29mZmVlJ1xuQ2VpbGluZyAgPSByZXF1aXJlICcuLi9zcHJpdGVzL0NlaWxpbmcuY29mZmVlJ1xuV2FsbCAgICAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1dhbGwuY29mZmVlJ1xuV0FMTF9PRkZTRVQgPSAyNzVcblxuIyBIVURcbiMgVGltZXIgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9UaW1lci5jb2ZmZWUnXG4jIFNjb3JlICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvU2NvcmUuY29mZmVlJ1xuXG4jIFNQUklURVNcbkNvd2JveSA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ293Ym95LmNvZmZlZSdcblRlcnJhaW5Hcm91cCA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVGVycmFpbkdyb3VwLmNvZmZlZSdcbldhZ29uICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2Fnb24uY29mZmVlJ1xuXG5TVEFSVElOR19USU1FID0gNzAgI3NlY29uZHNcbk5PX0FNTU9fQ09VTlRET1dOID0gMTAgI3NlY29uZHNcblxuY2xhc3MgR2FtZVxuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgIyBjcmVhdGUgdGhlIGJvdW5kc1xuICAgIEBjZWlsaW5nICAgID0gbmV3IENlaWxpbmcgQGdhbWUsIDQ1XG4gICAgQGZsb29yICAgICAgPSBuZXcgRmxvb3IgQGdhbWUsIC00NVxuICAgIEBsZWZ0X3dhbGxfb3V0ZXIgPSBuZXcgV2FsbCBAZ2FtZSwgOTJcbiAgICBAbGVmdF93YWxsICA9IG5ldyBXYWxsIEBnYW1lLCBAZ2FtZS53b3JsZC53aWR0aCAvIDIgLSBXQUxMX09GRlNFVFxuICAgIEByaWdodF93YWxsX291dGVyID0gbmV3IFdhbGwgQGdhbWUsIDk5NlxuICAgIEByaWdodF93YWxsID0gbmV3IFdhbGwgQGdhbWUsIEBnYW1lLndvcmxkLndpZHRoIC8gMiAgKyBXQUxMX09GRlNFVFxuXG4gICAgIyBzZXR1cCB0aGUgaHVkXG5cblxuICAgICMgY3JlYXRlIHRoZSBwbGF5ZXJzXG4gICAgQHBsYXllcl9vbmUgPSBuZXcgQ293Ym95IEBnYW1lLCBAXG4gICAgQHBsYXllcl90d28gPSBuZXcgQ293Ym95IEBnYW1lLCBALCBmYWxzZVxuXG4gICAgIyBjb2xsaXNpb24gZWxlbWVudHNcbiAgICBAYnVsbGV0cyAgPSBbIEBwbGF5ZXJfb25lLmJ1bGxldHMsIEBwbGF5ZXJfdHdvLmJ1bGxldHMgXVxuICAgIEB3YWxscyAgICA9IFsgQGxlZnRfd2FsbCwgQHJpZ2h0X3dhbGwgXVxuICAgIEBzdXJmYWNlcyA9IFsgQGNlaWxpbmcsIEBmbG9vciBdXG4gICAgQHBsYXllcnMgID0gWyBAcGxheWVyX29uZSwgQHBsYXllcl90d28gXVxuICAgIEB3YWdvbiA9IG5ldyBXYWdvbiBAZ2FtZSwgQGdhbWVfc3RhdGVcbiAgICBAdGVycmFpbiA9IHVuZGVmaW5lZCAjIGluc3RhbnRpYXRlIGluIHNldHVwTGV2ZWwoKVxuXG4gICAgIyBzdGFydCB0aGUgZ2FtZVxuICAgIEBzdGFydCgpXG5cbiAgc3RhcnQ6IC0+XG4gICAgIyBpbnRybyB0aGUgbGV2ZWwsIHBsYWNlIHRlcnJhaW4gb24gdGhlIG1hcFxuICAgIEBzZXR1cExldmVsKClcbiAgICAjIGVuYWJsZSBtb3ZlbWVudFxuICAgIEBwbGF5ZXJfb25lLmVuYWJsZUlucHV0KClcbiAgICBAcGxheWVyX3R3by5lbmFibGVJbnB1dCgpXG5cbiAgdXBkYXRlOiAtPlxuICAgICMgc2V0IGJvdW5jZSBzdXJmYWNlcyBmb3IgYnVsbGV0c1xuICAgIEBnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUgQGJ1bGxldHMsIEBzdXJmYWNlc1xuXG4gICAgIyBzZXQgcGxheWVyLCBidWxsZXQgY29sbGlzaW9uc1xuICAgIEBnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUgQGJ1bGxldHMsIEBwbGF5ZXJzLCAocGxheWVyLCBidWxsZXQpID0+XG4gICAgICAjIGRpc2FibGUgaW5wdXRzXG4gICAgICBAcGxheWVyX29uZS5kaXNhYmxlSW5wdXQoKVxuICAgICAgQHBsYXllcl90d28uZGlzYWJsZUlucHV0KClcbiAgICAgICMga2lsbCBhbGwgYnVsbGV0cyBpbiB0aGUgZmllbGRcbiAgICAgIEBwbGF5ZXJfb25lLmJ1bGxldHMuZm9yRWFjaEFsaXZlIChiKSAtPiBiLmtpbGwoKVxuICAgICAgQHBsYXllcl90d28uYnVsbGV0cy5mb3JFYWNoQWxpdmUgKGIpIC0+IGIua2lsbCgpXG4gICAgICAjIGluY3JlYXNlIHNjb3JlIG9mIHdpbm5pbmcgcGxheWVyXG4gICAgICBidWxsZXQucGxheWVyLmlkbGUoKVxuICAgICAgYnVsbGV0LnBsYXllci53aW5zICs9IDFcbiAgICAgICMgaW5jcmVhc2UgZ2FtZSdzIGxldmVsXG4gICAgICBAZ2FtZS5sZXZlbCArPSAxXG4gICAgICAjIHRyaWdnZXIgcGxheWVyIGRlYXRoXG4gICAgICBwbGF5ZXIuZGllKClcblxuICAgICMgc2V0IHRlcnJhaW4sIGJ1bGxldCBjb2xsaXNpb25zXG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSBAYnVsbGV0cywgQHRlcnJhaW4sIChidWxsZXQsIHRlcnJhaW4pID0+XG4gICAgICBjb2xsaXNpb25feSA9IGJ1bGxldC55ICsgYnVsbGV0LmhlaWdodFxuICAgICAgYnVsbGV0LmtpbGwoKVxuICAgICAgdGVycmFpbi5kZWZvcm0gY29sbGlzaW9uX3lcblxuICAgICMgc2V0IHdhZ29uLCBidWxsZXQgY29sbGlzaW9uc1xuICAgIEBnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUgQGJ1bGxldHMsIEB3YWdvbiwgKHdhZ29uLCBidWxsZXQpID0+XG4gICAgICBidWxsZXQua2lsbCgpXG5cbiAgcmVuZGVyOiAtPlxuICAgIGlmIEBnYW1lLmRlYnVnTW9kZVxuICAgICAgQGdhbWUuZGVidWcuYm9keSBAY2VpbGluZ1xuICAgICAgQGdhbWUuZGVidWcuYm9keSBAZmxvb3JcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQGxlZnRfd2FsbFxuICAgICAgQGdhbWUuZGVidWcuYm9keSBAcmlnaHRfd2FsbFxuICAgICAgIyBAZ2FtZS5kZWJ1Zy5ib2R5IEBwbGF5ZXJfb25lXG4gICAgICAjIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl90d29cbiAgICAgICMgQGdhbWUuZGVidWcuYm9keSBAcGxheWVyX29uZS5idWxsZXRzXG4gICAgICAjIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl90d28uYnVsbGV0c1xuICAgICAgIyBAZ2FtZS5kZWJ1Zy5ib2R5IEB3YWdvblxuXG4gIHNldHVwTGV2ZWw6IC0+XG4gICAgbGV2ZWxfbnVtID0gQGdhbWUubGV2ZWxcbiAgICBsZXZlbCA9IEBnYW1lLmNvbnN0YW50cy5MRVZFTFNbXCIje2xldmVsX251bX1cIl1cbiAgICBAdGVycmFpbiA9IG5ldyBUZXJyYWluR3JvdXAgQGdhbWUsIEAsIGxldmVsXG4gICAgQHdhZ29uLnN0YXJ0KCkgaWYgbGV2ZWwud2Fnb25cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2dhbWUuY29mZmVlXG4gKiovIiwiIyBTUFJJVEVTXG4jIENvd2JveSA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ293Ym95LmNvZmZlZSdcbiMgQnVsbGV0ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9CdWxsZXQuY29mZmVlJ1xuIyBDYWN0dXMgPSByZXF1aXJlICcuLi9zcHJpdGVzL0NhY3R1cy5jb2ZmZWUnXG4jIFRyZWUgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVHJlZS5jb2ZmZWUnXG4jIFdhZ29uICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2Fnb24uY29mZmVlJ1xuXG4jIEhVRFxuIyBUaW1lciAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RpbWVyLmNvZmZlZSdcbiMgQW1tbyAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9BbW1vLmNvZmZlZSdcblxuXG5jbGFzcyBJbnRyb1xuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgY29uc29sZS5sb2cgJ2ludHJvJ1xuXG5cbiAgc3RhcnQ6IC0+XG5cbiAgdXBkYXRlOiAtPlxuXG5tb2R1bGUuZXhwb3J0cyA9IEludHJvXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2ludHJvLmNvZmZlZVxuICoqLyIsImNsYXNzIFByZWxvYWRcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgcHJlbG9hZDogLT5cbiAgICBAbG9hZC5jcm9zc09yaWdpbiA9IEBnYW1lLmhvc3R1cmwgdW5sZXNzIEBnYW1lLmNkbiBpcyAnLydcblxuICAgICMgTE9BRCBTVFVGRlNcbiAgICBDRE4gPSBAZ2FtZS5jZG5cbiAgICAjIFNQUklURVNcbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgdGV4dHVyZV91cmwgPSBcIiN7Q0ROfWltYWdlcy9hdGxhcy5wbmdcIlxuICAgIGF0bGFzX2RhdGEgPSByZXF1aXJlICcuLi9jb25zdGFudHMvYXRsYXMuY29mZmVlJ1xuICAgIEBsb2FkLmF0bGFzSlNPTkhhc2gga2V5LCB0ZXh0dXJlX3VybCwgbnVsbCwgYXRsYXNfZGF0YVxuXG4gICAgIyBTRlhcbiAgICBfLmVhY2ggQGdhbWUuY29uc3RhbnRzLlNGWCwgKHNmeCkgPT5cbiAgICAgIGFzc2V0ID0gQGxvYWQuYXVkaW8gc2Z4LFxuICAgICAgW1wiI3tDRE59YXVkaW8vI3tzZnh9Lm1wMyN7QGdhbWUudmVyc2lvbn1cIixcbiAgICAgIFwiI3tDRE59YXVkaW8vI3tzZnh9Lm9nZyN7QGdhbWUudmVyc2lvbn1cIl1cbiAgICAgIGFzc2V0LmNyb3NzT3JpZ2luID0gQGxvYWQuY3Jvc3NPcmlnaW4gIHVubGVzcyBAZ2FtZS5jZG4gaXMgJy8nXG5cbiAgdXBkYXRlOiAtPlxuICAgIGlmIEBnYW1lLmRlYnVnTW9kZVxuICAgICAgQHN0YXRlLnN0YXJ0ICdnYW1lJ1xuICAgIGVsc2VcbiAgICAgIEBzdGF0ZS5zdGFydCAnaW50cm8nXG5cbm1vZHVsZS5leHBvcnRzID0gUHJlbG9hZFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9wcmVsb2FkLmNvZmZlZVxuICoqLyIsIkxhdW5jaEdhbWUgPSByZXF1aXJlICcuL2dhbWUvbGF1bmNoLmNvZmZlZSdcblxuI3JlYWR5XG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuXG5cdGNvbnNvbGUubG9nICdhbGwgcmVhZHknXG5cdExhdW5jaEdhbWUoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9tYWluLmNvZmZlZVxuICoqLyIsIi8qXG5cbiAgSmF2YXNjcmlwdCBTdGF0ZSBNYWNoaW5lIExpYnJhcnkgLSBodHRwczovL2dpdGh1Yi5jb20vamFrZXNnb3Jkb24vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lXG5cbiAgQ29weXJpZ2h0IChjKSAyMDEyLCAyMDEzLCAyMDE0LCAyMDE1LCBKYWtlIEdvcmRvbiBhbmQgY29udHJpYnV0b3JzXG4gIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlc2dvcmRvbi9qYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gIHZhciBTdGF0ZU1hY2hpbmUgPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgVkVSU0lPTjogXCIyLjMuNVwiLFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFJlc3VsdDoge1xuICAgICAgU1VDQ0VFREVEOiAgICAxLCAvLyB0aGUgZXZlbnQgdHJhbnNpdGlvbmVkIHN1Y2Nlc3NmdWxseSBmcm9tIG9uZSBzdGF0ZSB0byBhbm90aGVyXG4gICAgICBOT1RSQU5TSVRJT046IDIsIC8vIHRoZSBldmVudCB3YXMgc3VjY2Vzc2Z1bGwgYnV0IG5vIHN0YXRlIHRyYW5zaXRpb24gd2FzIG5lY2Vzc2FyeVxuICAgICAgQ0FOQ0VMTEVEOiAgICAzLCAvLyB0aGUgZXZlbnQgd2FzIGNhbmNlbGxlZCBieSB0aGUgY2FsbGVyIGluIGEgYmVmb3JlRXZlbnQgY2FsbGJhY2tcbiAgICAgIFBFTkRJTkc6ICAgICAgNCAgLy8gdGhlIGV2ZW50IGlzIGFzeW5jaHJvbm91cyBhbmQgdGhlIGNhbGxlciBpcyBpbiBjb250cm9sIG9mIHdoZW4gdGhlIHRyYW5zaXRpb24gb2NjdXJzXG4gICAgfSxcblxuICAgIEVycm9yOiB7XG4gICAgICBJTlZBTElEX1RSQU5TSVRJT046IDEwMCwgLy8gY2FsbGVyIHRyaWVkIHRvIGZpcmUgYW4gZXZlbnQgdGhhdCB3YXMgaW5uYXByb3ByaWF0ZSBpbiB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgUEVORElOR19UUkFOU0lUSU9OOiAyMDAsIC8vIGNhbGxlciB0cmllZCB0byBmaXJlIGFuIGV2ZW50IHdoaWxlIGFuIGFzeW5jIHRyYW5zaXRpb24gd2FzIHN0aWxsIHBlbmRpbmdcbiAgICAgIElOVkFMSURfQ0FMTEJBQ0s6ICAgMzAwIC8vIGNhbGxlciBwcm92aWRlZCBjYWxsYmFjayBmdW5jdGlvbiB0aHJldyBhbiBleGNlcHRpb25cbiAgICB9LFxuXG4gICAgV0lMRENBUkQ6ICcqJyxcbiAgICBBU1lOQzogJ2FzeW5jJyxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKGNmZywgdGFyZ2V0KSB7XG5cbiAgICAgIHZhciBpbml0aWFsICAgICAgPSAodHlwZW9mIGNmZy5pbml0aWFsID09ICdzdHJpbmcnKSA/IHsgc3RhdGU6IGNmZy5pbml0aWFsIH0gOiBjZmcuaW5pdGlhbDsgLy8gYWxsb3cgZm9yIGEgc2ltcGxlIHN0cmluZywgb3IgYW4gb2JqZWN0IHdpdGggeyBzdGF0ZTogJ2ZvbycsIGV2ZW50OiAnc2V0dXAnLCBkZWZlcjogdHJ1ZXxmYWxzZSB9XG4gICAgICB2YXIgdGVybWluYWwgICAgID0gY2ZnLnRlcm1pbmFsIHx8IGNmZ1snZmluYWwnXTtcbiAgICAgIHZhciBmc20gICAgICAgICAgPSB0YXJnZXQgfHwgY2ZnLnRhcmdldCAgfHwge307XG4gICAgICB2YXIgZXZlbnRzICAgICAgID0gY2ZnLmV2ZW50cyB8fCBbXTtcbiAgICAgIHZhciBjYWxsYmFja3MgICAgPSBjZmcuY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgdmFyIG1hcCAgICAgICAgICA9IHt9OyAvLyB0cmFjayBzdGF0ZSB0cmFuc2l0aW9ucyBhbGxvd2VkIGZvciBhbiBldmVudCB7IGV2ZW50OiB7IGZyb206IFsgdG8gXSB9IH1cbiAgICAgIHZhciB0cmFuc2l0aW9ucyAgPSB7fTsgLy8gdHJhY2sgZXZlbnRzIGFsbG93ZWQgZnJvbSBhIHN0YXRlICAgICAgICAgICAgeyBzdGF0ZTogWyBldmVudCBdIH1cblxuICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGZyb20gPSAoZS5mcm9tIGluc3RhbmNlb2YgQXJyYXkpID8gZS5mcm9tIDogKGUuZnJvbSA/IFtlLmZyb21dIDogW1N0YXRlTWFjaGluZS5XSUxEQ0FSRF0pOyAvLyBhbGxvdyAnd2lsZGNhcmQnIHRyYW5zaXRpb24gaWYgJ2Zyb20nIGlzIG5vdCBzcGVjaWZpZWRcbiAgICAgICAgbWFwW2UubmFtZV0gPSBtYXBbZS5uYW1lXSB8fCB7fTtcbiAgICAgICAgZm9yICh2YXIgbiA9IDAgOyBuIDwgZnJvbS5sZW5ndGggOyBuKyspIHtcbiAgICAgICAgICB0cmFuc2l0aW9uc1tmcm9tW25dXSA9IHRyYW5zaXRpb25zW2Zyb21bbl1dIHx8IFtdO1xuICAgICAgICAgIHRyYW5zaXRpb25zW2Zyb21bbl1dLnB1c2goZS5uYW1lKTtcblxuICAgICAgICAgIG1hcFtlLm5hbWVdW2Zyb21bbl1dID0gZS50byB8fCBmcm9tW25dOyAvLyBhbGxvdyBuby1vcCB0cmFuc2l0aW9uIGlmICd0bycgaXMgbm90IHNwZWNpZmllZFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICBpbml0aWFsLmV2ZW50ID0gaW5pdGlhbC5ldmVudCB8fCAnc3RhcnR1cCc7XG4gICAgICAgIGFkZCh7IG5hbWU6IGluaXRpYWwuZXZlbnQsIGZyb206ICdub25lJywgdG86IGluaXRpYWwuc3RhdGUgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvcih2YXIgbiA9IDAgOyBuIDwgZXZlbnRzLmxlbmd0aCA7IG4rKylcbiAgICAgICAgYWRkKGV2ZW50c1tuXSk7XG5cbiAgICAgIGZvcih2YXIgbmFtZSBpbiBtYXApIHtcbiAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICBmc21bbmFtZV0gPSBTdGF0ZU1hY2hpbmUuYnVpbGRFdmVudChuYW1lLCBtYXBbbmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBmb3IodmFyIG5hbWUgaW4gY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChjYWxsYmFja3MuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgICAgZnNtW25hbWVdID0gY2FsbGJhY2tzW25hbWVdXG4gICAgICB9XG5cbiAgICAgIGZzbS5jdXJyZW50ICAgICA9ICdub25lJztcbiAgICAgIGZzbS5pcyAgICAgICAgICA9IGZ1bmN0aW9uKHN0YXRlKSB7IHJldHVybiAoc3RhdGUgaW5zdGFuY2VvZiBBcnJheSkgPyAoc3RhdGUuaW5kZXhPZih0aGlzLmN1cnJlbnQpID49IDApIDogKHRoaXMuY3VycmVudCA9PT0gc3RhdGUpOyB9O1xuICAgICAgZnNtLmNhbiAgICAgICAgID0gZnVuY3Rpb24oZXZlbnQpIHsgcmV0dXJuICF0aGlzLnRyYW5zaXRpb24gJiYgKG1hcFtldmVudF0uaGFzT3duUHJvcGVydHkodGhpcy5jdXJyZW50KSB8fCBtYXBbZXZlbnRdLmhhc093blByb3BlcnR5KFN0YXRlTWFjaGluZS5XSUxEQ0FSRCkpOyB9XG4gICAgICBmc20uY2Fubm90ICAgICAgPSBmdW5jdGlvbihldmVudCkgeyByZXR1cm4gIXRoaXMuY2FuKGV2ZW50KTsgfTtcbiAgICAgIGZzbS50cmFuc2l0aW9ucyA9IGZ1bmN0aW9uKCkgICAgICB7IHJldHVybiB0cmFuc2l0aW9uc1t0aGlzLmN1cnJlbnRdOyB9O1xuICAgICAgZnNtLmlzRmluaXNoZWQgID0gZnVuY3Rpb24oKSAgICAgIHsgcmV0dXJuIHRoaXMuaXModGVybWluYWwpOyB9O1xuICAgICAgZnNtLmVycm9yICAgICAgID0gY2ZnLmVycm9yIHx8IGZ1bmN0aW9uKG5hbWUsIGZyb20sIHRvLCBhcmdzLCBlcnJvciwgbXNnLCBlKSB7IHRocm93IGUgfHwgbXNnOyB9OyAvLyBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVucyBpcyB0byB0aHJvdyBhbiBleGNlcHRpb24sIGJ1dCBjYWxsZXIgY2FuIG92ZXJyaWRlIHRoaXMgYmVoYXZpb3IgaWYgZGVzaXJlZCAoc2VlIGdpdGh1YiBpc3N1ZSAjMyBhbmQgIzE3KVxuXG4gICAgICBpZiAoaW5pdGlhbCAmJiAhaW5pdGlhbC5kZWZlcilcbiAgICAgICAgZnNtW2luaXRpYWwuZXZlbnRdKCk7XG5cbiAgICAgIHJldHVybiBmc207XG5cbiAgICB9LFxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGRvQ2FsbGJhY2s6IGZ1bmN0aW9uKGZzbSwgZnVuYywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoZnNtLCBbbmFtZSwgZnJvbSwgdG9dLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBmc20uZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5JTlZBTElEX0NBTExCQUNLLCBcImFuIGV4Y2VwdGlvbiBvY2N1cnJlZCBpbiBhIGNhbGxlci1wcm92aWRlZCBjYWxsYmFjayBmdW5jdGlvblwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBiZWZvcmVBbnlFdmVudDogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmJlZm9yZWV2ZW50J10sICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgYWZ0ZXJBbnlFdmVudDogICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25hZnRlcmV2ZW50J10gfHwgZnNtWydvbmV2ZW50J10sICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGxlYXZlQW55U3RhdGU6ICAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29ubGVhdmVzdGF0ZSddLCAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBlbnRlckFueVN0YXRlOiAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmVudGVyc3RhdGUnXSB8fCBmc21bJ29uc3RhdGUnXSwgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgY2hhbmdlU3RhdGU6ICAgICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25jaGFuZ2VzdGF0ZSddLCAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuXG4gICAgYmVmb3JlVGhpc0V2ZW50OiBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25iZWZvcmUnICsgbmFtZV0sICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGFmdGVyVGhpc0V2ZW50OiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uYWZ0ZXInICArIG5hbWVdIHx8IGZzbVsnb24nICsgbmFtZV0sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBsZWF2ZVRoaXNTdGF0ZTogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmxlYXZlJyAgKyBmcm9tXSwgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgZW50ZXJUaGlzU3RhdGU6ICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25lbnRlcicgICsgdG9dICAgfHwgZnNtWydvbicgKyB0b10sICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuXG4gICAgYmVmb3JlRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIGlmICgoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVUaGlzRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykpIHx8XG4gICAgICAgICAgKGZhbHNlID09PSBTdGF0ZU1hY2hpbmUuYmVmb3JlQW55RXZlbnQoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBhZnRlckV2ZW50OiBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7XG4gICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJUaGlzRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJBbnlFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgfSxcblxuICAgIGxlYXZlU3RhdGU6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIHZhciBzcGVjaWZpYyA9IFN0YXRlTWFjaGluZS5sZWF2ZVRoaXNTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSxcbiAgICAgICAgICBnZW5lcmFsICA9IFN0YXRlTWFjaGluZS5sZWF2ZUFueVN0YXRlKCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIGlmICgoZmFsc2UgPT09IHNwZWNpZmljKSB8fCAoZmFsc2UgPT09IGdlbmVyYWwpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBlbHNlIGlmICgoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBzcGVjaWZpYykgfHwgKFN0YXRlTWFjaGluZS5BU1lOQyA9PT0gZ2VuZXJhbCkpXG4gICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuQVNZTkM7XG4gICAgfSxcblxuICAgIGVudGVyU3RhdGU6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIFN0YXRlTWFjaGluZS5lbnRlclRoaXNTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIFN0YXRlTWFjaGluZS5lbnRlckFueVN0YXRlKCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGJ1aWxkRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIG1hcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBmcm9tICA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdmFyIHRvICAgID0gbWFwW2Zyb21dIHx8IG1hcFtTdGF0ZU1hY2hpbmUuV0lMRENBUkRdIHx8IGZyb207XG4gICAgICAgIHZhciBhcmdzICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7IC8vIHR1cm4gYXJndW1lbnRzIGludG8gcHVyZSBhcnJheVxuXG4gICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb24pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5QRU5ESU5HX1RSQU5TSVRJT04sIFwiZXZlbnQgXCIgKyBuYW1lICsgXCIgaW5hcHByb3ByaWF0ZSBiZWNhdXNlIHByZXZpb3VzIHRyYW5zaXRpb24gZGlkIG5vdCBjb21wbGV0ZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5jYW5ub3QobmFtZSkpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5JTlZBTElEX1RSQU5TSVRJT04sIFwiZXZlbnQgXCIgKyBuYW1lICsgXCIgaW5hcHByb3ByaWF0ZSBpbiBjdXJyZW50IHN0YXRlIFwiICsgdGhpcy5jdXJyZW50KTtcblxuICAgICAgICBpZiAoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVFdmVudCh0aGlzLCBuYW1lLCBmcm9tLCB0bywgYXJncykpXG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuQ0FOQ0VMTEVEO1xuXG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KHRoaXMsIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5OT1RSQU5TSVRJT047XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmVwYXJlIGEgdHJhbnNpdGlvbiBtZXRob2QgZm9yIHVzZSBFSVRIRVIgbG93ZXIgZG93biwgb3IgYnkgY2FsbGVyIGlmIHRoZXkgd2FudCBhbiBhc3luYyB0cmFuc2l0aW9uIChpbmRpY2F0ZWQgYnkgYW4gQVNZTkMgcmV0dXJuIHZhbHVlIGZyb20gbGVhdmVTdGF0ZSlcbiAgICAgICAgdmFyIGZzbSA9IHRoaXM7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZzbS50cmFuc2l0aW9uID0gbnVsbDsgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgZXZlciBiZSBjYWxsZWQgb25jZVxuICAgICAgICAgIGZzbS5jdXJyZW50ID0gdG87XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmVudGVyU3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5jaGFuZ2VTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuU1VDQ0VFREVEO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24uY2FuY2VsID0gZnVuY3Rpb24oKSB7IC8vIHByb3ZpZGUgYSB3YXkgZm9yIGNhbGxlciB0byBjYW5jZWwgYXN5bmMgdHJhbnNpdGlvbiBpZiBkZXNpcmVkIChpc3N1ZSAjMjIpXG4gICAgICAgICAgZnNtLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlYXZlID0gU3RhdGVNYWNoaW5lLmxlYXZlU3RhdGUodGhpcywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICBpZiAoZmFsc2UgPT09IGxlYXZlKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5DQU5DRUxMRUQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBsZWF2ZSkge1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0LlBFTkRJTkc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbikgLy8gbmVlZCB0byBjaGVjayBpbiBjYXNlIHVzZXIgbWFudWFsbHkgY2FsbGVkIHRyYW5zaXRpb24oKSBidXQgZm9yZ290IHRvIHJldHVybiBTdGF0ZU1hY2hpbmUuQVNZTkNcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuICAgIH1cblxuICB9OyAvLyBTdGF0ZU1hY2hpbmVcblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vPT09PT09XG4gIC8vIE5PREVcbiAgLy89PT09PT1cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU3RhdGVNYWNoaW5lO1xuICAgIH1cbiAgICBleHBvcnRzLlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuICAvLz09PT09PT09PT09PVxuICAvLyBBTUQvUkVRVUlSRVxuICAvLz09PT09PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkgeyByZXR1cm4gU3RhdGVNYWNoaW5lOyB9KTtcbiAgfVxuICAvLz09PT09PT09XG4gIC8vIEJST1dTRVJcbiAgLy89PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5TdGF0ZU1hY2hpbmUgPSBTdGF0ZU1hY2hpbmU7XG4gIH1cbiAgLy89PT09PT09PT09PVxuICAvLyBXRUIgV09SS0VSXG4gIC8vPT09PT09PT09PT1cbiAgZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2VsZi5TdGF0ZU1hY2hpbmUgPSBTdGF0ZU1hY2hpbmU7XG4gIH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9zdGF0ZS1tYWNoaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9ib290LmNvZmZlZVwiOiAxOSxcblx0XCIuL2dhbWUuY29mZmVlXCI6IDIwLFxuXHRcIi4vaW50cm8uY29mZmVlXCI6IDIxLFxuXHRcIi4vcHJlbG9hZC5jb2ZmZWVcIjogMjIsXG5cdFwiLi9yZXNldC5jb2ZmZWVcIjogMjNcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjY7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMgXlxcLlxcLy4qXFwuY29mZmVlJFxuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9