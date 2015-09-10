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
	    game.state.add(state, __webpack_require__(26)("./" + state + ".coffee"));
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
	
	StateMachine = __webpack_require__(25);
	
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

	/* WEBPACK VAR INJECTION */(function(_) {var CACTUS_POSITIONS, Cactus, POSITIONS, TREE_POSITIONS, TerrainGroup, Tree,
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
	    x: 0,
	    y: 0
	  },
	  center: {
	    x: 528,
	    y: 300
	  },
	  center_right: {
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
	
	TREE_POSITIONS = {
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
	    this.positions = POSITIONS;
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

	var Ceiling, Cowboy, Floor, Game, NO_AMMO_COUNTDOWN, STARTING_TIME, TerrainGroup, WALL_OFFSET, Wall;
	
	Floor = __webpack_require__(14);
	
	Ceiling = __webpack_require__(12);
	
	Wall = __webpack_require__(18);
	
	WALL_OFFSET = 275;
	
	Cowboy = __webpack_require__(13);
	
	TerrainGroup = __webpack_require__(15);
	
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
	
	LaunchGame = __webpack_require__(8);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDhmOGRkOTk0Y2I2M2ZkZDIyYzciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy90ZXJyYWluLmNvZmZlZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvbGV2ZWxzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZnguY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3Nwcml0ZXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvbGF1bmNoLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQW1tby5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0J1bGxldHMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DYWN0dXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DZWlsaW5nLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ293Ym95LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvRmxvb3IuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXJyYWluR3JvdXAuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXh0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvVHJlZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1dhbGwuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2Jvb3QuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2dhbWUuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2ludHJvLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9wcmVsb2FkLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9tYWluLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9+L2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9zdGF0ZS1tYWNoaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzIF5cXC5cXC8uKlxcLmNvZmZlZSQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG9COzs7Ozs7QUNBQTtHQUFBOzs7QUFBTTs7O0dBQ1MsaUJBQUMsSUFBRCxFQUFRLFVBQVIsRUFBcUIsQ0FBckIsRUFBMEIsQ0FBMUIsRUFBK0IsS0FBL0I7QUFDWDtLQURZLElBQUMs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U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpERjtLQWdFQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpFRjtLQWdGQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpGRjtLQWdHQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpHRjtLQWdIQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpIRjtLQWdJQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpJRjtLQWdKQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpKRjtLQWdLQSxhQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFL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aEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLHFCQUFxQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7QUNsT0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qYXZhc2NyaXB0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGQ4ZjhkZDk5NGNiNjNmZGQyMmM3XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJjbGFzcyBUZXJyYWluIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTAsIGZyYW1lPSdjYWN0dXMnKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9IFwidGVycmFpbi8je2ZyYW1lfVwiXG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgZnJhbWVcblxuICAgICMgc2V0IHBoeXNpY3MgYm9keVxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG4gICAgIyBhZGQgY3JvcCByZWN0XG4gICAgQGNyb3BSZWN0ID0gQGdhbWUuYWRkLmdyYXBoaWNzKClcblxuICAgIHJldHVybiBAXG5cbiAgZGVmb3JtOiAoY29sbGlzaW9uX3kpIC0+XG4gICAgaGVpZ2h0ID0gY29sbGlzaW9uX3kgLSBAeVxuICAgICMgZGVmb3JtIGJvZHlcbiAgICBAYm9keS5zZXRTaXplIEB3aWR0aCwgQGhlaWdodCAtIGhlaWdodCwgMCwgaGVpZ2h0XG4gICAgQGRyYXdSZWN0IGhlaWdodFxuXG4gIHJlbG9hZDogLT4gQGNyb3BSZWN0LmNsZWFyKClcblxuICBkcmF3UmVjdDogKGhlaWdodCkgLT5cbiAgICBAY3JvcFJlY3QubGluZVN0eWxlIDBcbiAgICBAY3JvcFJlY3QuYmVnaW5GaWxsIFwiMHgwMDAwMDBcIlxuICAgIEBjcm9wUmVjdC5kcmF3UmVjdCBAeCwgQHksIEB3aWR0aCwgaGVpZ2h0XG4gICAgQGNyb3BSZWN0LmVuZEZpbGwoKVxuICAgIEBnYW1lLndvcmxkLmJyaW5nVG9Ub3AgQGNyb3BSZWN0XG5cbm1vZHVsZS5leHBvcnRzID0gVGVycmFpblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvdGVycmFpbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwialF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhdGxhcyA9XG4gICdmcmFtZXMnOlxuICAgICcwJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDQyXG4gICAgICAgICd5JzogMTc2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnMSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ5NFxuICAgICAgICAneSc6IDJcbiAgICAgICAgJ3cnOiAxNlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxNlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICcyJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDY4XG4gICAgICAgICd5JzogMTc2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnMyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ0MlxuICAgICAgICAneSc6IDIxOFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzQnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NjhcbiAgICAgICAgJ3knOiAyMThcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc1JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMTc0XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnNic6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEwMFxuICAgICAgICAneSc6IDIxNlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzcnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAyNThcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc4JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMzAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnOSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDMyOFxuICAgICAgICAneSc6IDE3MFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvRFJBVyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDMzNlxuICAgICAgICAneSc6IDJcbiAgICAgICAgJ3cnOiAxNTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTU2XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxNTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L0dBTUUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMzJcbiAgICAgICAgJ3knOiAxMjhcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L0dFVF9SRUFEWSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR09UX01FJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjc2XG4gICAgICAgICd5JzogNDRcbiAgICAgICAgJ3cnOiAyMTJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjEyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyMTJcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0L0dVTl9GSUdIVCc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiA4NlxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvSU5TRVJUX0NPSU4nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDMzMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAzMzJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDMzMlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvT1ZFUic6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDI1NFxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgJ2FtbW8nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyNzZcbiAgICAgICAgJ3knOiA4NlxuICAgICAgICAndyc6IDE4MFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxODBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDE4MFxuICAgICAgICAnaCc6IDQwXG4gICAgJ2J1bGxldCc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ5MFxuICAgICAgICAneSc6IDQ0XG4gICAgICAgICd3JzogOFxuICAgICAgICAnaCc6IDhcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDhcbiAgICAgICAgJ2gnOiA4XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOFxuICAgICAgICAnaCc6IDhcbiAgICAndGVycmFpbi9jYWN0dXMnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NThcbiAgICAgICAgJ3knOiA4NlxuICAgICAgICAndyc6IDMyXG4gICAgICAgICdoJzogODhcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDMyXG4gICAgICAgICdoJzogODhcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAzMlxuICAgICAgICAnaCc6IDg4XG4gICAgJ2Nvd2JveS9kZWFkL2hpdCc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDE5OFxuICAgICAgICAneSc6IDU4NFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTMyXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzMlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTMyXG4gICAgJ2Nvd2JveS9kZWFkL3JpcCc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAxMjhcbiAgICAgICAgJ3cnOiAxMjhcbiAgICAgICAgJ2gnOiA0NFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTI4XG4gICAgICAgICdoJzogNDRcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxMjhcbiAgICAgICAgJ2gnOiA0NFxuICAgICdjb3dib3kvaGlnaC9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEzMlxuICAgICAgICAneSc6IDE3MFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9oaWdoL29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAxNzRcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvaGlnaC90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogMzEyXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDIzMFxuICAgICAgICAneSc6IDE3MFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9sb3cvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzI4XG4gICAgICAgICd5JzogMjM4XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMjZcbiAgICAgICAgJ3knOiAzMDhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkL2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjI0XG4gICAgICAgICd5JzogMzA4XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZC9vbmUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMjJcbiAgICAgICAgJ3knOiAzNzZcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkL3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEwMFxuICAgICAgICAneSc6IDQ0NlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRoaWdoL2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDQ1MFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRoaWdoL29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDE5OFxuICAgICAgICAneSc6IDQ0NlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRoaWdoL3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDI5NlxuICAgICAgICAneSc6IDUxNFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRsb3cvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzOTRcbiAgICAgICAgJ3knOiA1MTRcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkbG93L29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEwMFxuICAgICAgICAneSc6IDU4NFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRsb3cvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDU4OFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ3RlcnJhaW4vdHJlZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDM3NlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDY0XG4gICAgICAgICdoJzogMTA4XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA2NFxuICAgICAgICAnaCc6IDEwOFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDY0XG4gICAgICAgICdoJzogMTA4XG4gICAgJ3dhZ29uJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDIwXG4gICAgICAgICd5JzogMzc2XG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiA5NlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiA5NlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDg4XG4gICAgICAgICdoJzogOTZcbiAgJ21ldGEnOlxuICAgICdhcHAnOiAnaHR0cDovL3d3dy5jb2RlYW5kd2ViLmNvbS90ZXh0dXJlcGFja2VyJ1xuICAgICd2ZXJzaW9uJzogJzEuMCdcbiAgICAnaW1hZ2UnOiAnYXRsYXMucG5nJ1xuICAgICdmb3JtYXQnOiAnUkdCQTg4ODgnXG4gICAgJ3NpemUnOlxuICAgICAgJ3cnOiA1MTJcbiAgICAgICdoJzogMTAyNFxuICAgICdzY2FsZSc6ICcxJ1xuICAgICdzbWFydHVwZGF0ZSc6ICckVGV4dHVyZVBhY2tlcjpTbWFydFVwZGF0ZToxMDZiN2MyNzE2YzQyMzU1OTM1M2YxNGI0NDEzZDI0MzplZjMwN2IwYWJkMTIwNzk4ODExYTM1ZGI1ZTg2MDZjZjpjYmNlNmI1M2YwZjQ5ZTBiZjE1MTczYzI1YzQxZjg3NiQnXG5cbm1vZHVsZS5leHBvcnRzID0gYXRsYXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvYXRsYXMuY29mZmVlXG4gKiovIiwibGV2ZWxzID0ge1xuICAxOlxuICAgIHdhZ29uOiBmYWxzZVxuICAgIG51bV9jYWN0dXM6IDFcbiAgMjpcbiAgICB3YWdvbjogZmFsc2VcbiAgICBudW1fY2FjdHVzOiAyXG4gIDM6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgbnVtX2NhY3R1czogM1xuICA0OlxuICAgIHdhZ29uOiBmYWxzZVxuICAgIG51bV9jYWN0dXM6IDRcbiAgNTpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDRcbiAgNjpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDVcbiAgNzpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDJcbiAgICBudW1fdHJlZTogMVxuICA4OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogMVxuICAgIG51bV90cmVlOiAyXG4gIDk6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiAyXG4gICAgbnVtX3RyZWU6IDJcbiAgMTA6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiAzXG4gICAgbnVtX3RyZWU6IDJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsZXZlbHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvbGV2ZWxzLmNvZmZlZVxuICoqLyIsInNmeCA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gc2Z4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3NmeC5jb2ZmZWVcbiAqKi8iLCJzcHJpdGVzID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBzcHJpdGVzIFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zcHJpdGVzLmNvZmZlZVxuICoqLyIsIiR3aW5kb3cgPSAkKHdpbmRvdylcblxuIyBtb2JpbGUgZmxhZ1xuaXNNb2JpbGUgPSAtPlxuICBpZiggL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIClcbiAgICB0cnVlXG4gIGVsc2VcbiAgICBmYWxzZVxuXG5sYXVuY2ggPSAoY2RuPVwiL1wiLCB2ZXJzaW9uPVwiP3Y9MC4wLjBcIikgLT5cblxuICAjIDQ6M1xuICBnYW1lX3dpZHRoID0gMTA4OFxuICBnYW1lX2hlaWdodCA9IDgxNlxuXG4gICMgQ29uc3RydWN0IEdhbWVcbiAgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcbiAgICBnYW1lX3dpZHRoLCAgICMgd2lkdGhcbiAgICBnYW1lX2hlaWdodCwgICMgaGVpZ2h0XG4gICAgUGhhc2VyLkFVVE8sICAjIHJlbmRlcmVyXG4gICAgJ2dhbWUnLCAgICAgICAjIElEIG9mIHBhcmVudCBlbGVtZW50XG4gICAgJ2Jvb3QnLCAgICAgICAjIHN0YXRlXG4gICAgZmFsc2UsICAgICAgICAjIHRyYW5zcGFyZW50XG4gICAgZmFsc2UsICAgICAgICAjIGFudGlhbGlhc1xuICAgIG51bGwgICAgICAgICAgIyBwaHlzaWNzQ29uZmlnXG4gIClcblxuICAjIGNkblxuICBnYW1lLmNkbiA9IGNkblxuICBnYW1lLmhvc3R1cmwgPSB1bmRlZmluZWQgI2hvc3R1cmxcblxuICAjIGdhbWUgdmVyc2lvblxuICBnYW1lLnZlcnNpb24gPSB2ZXJzaW9uXG5cbiAgIyBkZWJ1Z1xuICBnYW1lLmRlYnVnTW9kZSA9IGZhbHNlXG4gIGdhbWUuZGVidWdNb2RlID0gdHJ1ZVxuXG4gIGdhbWUuZW5hYmxlTXVzaWMgPSAhZ2FtZS5kZWJ1Z01vZGVcbiAgZ2FtZS5lbmFibGVTRlggPSAhZ2FtZS5kZWJ1Z01vZGVcblxuICAjIGNvbnN0YW50c1xuICBnYW1lLmNvbnN0YW50cyA9XG4gICAgU1RBVEVTOiBbJ2Jvb3QnLCAncHJlbG9hZCcsICdpbnRybycsICdnYW1lJywgJ3Jlc2V0J11cbiAgICBTUFJJVEVTOiByZXF1aXJlICdjb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3Nwcml0ZXMnXG4gICAgTEVWRUxTOiByZXF1aXJlICdjb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2xldmVscydcbiAgICBTRlg6IHJlcXVpcmUgJ2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvc2Z4J1xuXG4gICMgZGVmYXVsdCBsZXZlbFxuICBnYW1lLmxldmVsID0gMVxuXG4gICMga2VlcCB0aGUgZ2FtZSB3aXRoaW4gdGhlIHBhZ2VcbiAgZ2FtZS5zY2FsZXIgPSAtPlxuICAgICRnYW1lID0gJChcIiNnYW1lXCIpXG4gICAgJGNhbnZhcyA9ICQoXCJjYW52YXNcIilcbiAgICAkd2luZG93ID0gJCh3aW5kb3cpXG5cbiAgICBpZiAhaXNNb2JpbGUoKVxuICAgICAgJGdhbWUgPSAkKFwiI2dhbWVcIilcbiAgICAgICRjYW52YXMgPSAkKFwiY2FudmFzXCIpXG4gICAgICAkd2luZG93ID0gJCh3aW5kb3cpXG5cbiAgICAgIGlmICRnYW1lLmhlaWdodCgpID4gJHdpbmRvdy5oZWlnaHQoKSAtIDE1MFxuICAgICAgICAkZ2FtZS5jc3MoXCJtYXgtaGVpZ2h0XCIsICgkd2luZG93LmhlaWdodCgpIC0gMTUwKSArIFwicHhcIilcbiAgICAgIGVsc2VcbiAgICAgICAgJGdhbWUuY3NzKFwibWF4LWhlaWdodFwiLCBcImF1dG9cIilcblxuICAjIHJlcXVpcmUgc3RhdGVzIGFuZCBib290IVxuICBnYW1lLnN0YXRlLmFkZCBzdGF0ZSwgcmVxdWlyZShcIi4vc3RhdGVzLyN7c3RhdGV9LmNvZmZlZVwiKSBmb3Igc3RhdGUgaW4gZ2FtZS5jb25zdGFudHMuU1RBVEVTXG4gIGdhbWUuc3RhdGUuc3RhcnQgJ2Jvb3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbGF1bmNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvbGF1bmNoLmNvZmZlZVxuICoqLyIsImNsYXNzIEFtbW8gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9ICdhbW1vJ1xuICAgIHggPSBpZiBAcGxheWVyLmlzX3BsYXllcl9vbmUgdGhlbiA5MiBlbHNlIDgxNlxuICAgIHkgPSBAZ2FtZS5oZWlnaHQgLSA0NVxuICAgIHN1cGVyIEBnYW1lLCB4LCB5LCBrZXksIGZyYW1lXG5cbiAgICAjIGNsZWFuIHVwXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuICAgICMgYWRkIGNyb3AgcmVjdFxuICAgIEBjcm9wUmVjdCA9IEBnYW1lLmFkZC5ncmFwaGljcygpXG5cbiAgICByZXR1cm4gQFxuXG4gIGNyb3A6IC0+XG4gICAgd2lkdGggPSBAd2lkdGggLSBAcGxheWVyLm51bV9idWxsZXRzIC8gNiAqIEB3aWR0aFxuICAgIEBkcmF3UmVjdCB3aWR0aFxuXG4gIHJlbG9hZDogLT4gQGNyb3BSZWN0LmNsZWFyKClcblxuICBkcmF3UmVjdDogKHdpZHRoKSAtPlxuICAgIEBjcm9wUmVjdC5saW5lU3R5bGUgMFxuICAgIEBjcm9wUmVjdC5iZWdpbkZpbGwgXCIweDAwMDAwMFwiXG4gICAgQGNyb3BSZWN0LmRyYXdSZWN0IEB4LCBAeSwgd2lkdGgsIEBoZWlnaHRcbiAgICBAY3JvcFJlY3QuZW5kRmlsbCgpXG5cbm1vZHVsZS5leHBvcnRzID0gQW1tb1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQW1tby5jb2ZmZWVcbiAqKi8iLCIjIGJ1bGxldCBwb3NpdGlvbiBjb25maWdcbkdVTl9QT1NfQ09ORklHID1cbiAgaGlnaDogICAge3g6IDQ1LCB5OiAxNSwgZGVnOiAtNTJ9XG4gIG1lZGhpZ2g6IHt4OiA1MCwgeTogMzUsIGRlZzogLTI2fVxuICBtZWQ6ICAgICB7eDogNTUsIHk6IDQ2LCBkZWc6IDB9XG4gIG1lZGxvdzogIHt4OiA1MCwgeTogNzUsIGRlZzogMjJ9XG4gIGxvdzogICAgIHt4OiA0NSwgeTogODgsIGRlZzogNDJ9XG5cbiMgc3BlZWQgb2YgZmlyZWQgYnVsbGV0XG5TUEVFRCA9IDEwMDBcblxuY2xhc3MgQnVsbGV0IGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHBsYXllcikgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnYnVsbGV0J1xuICAgIHN1cGVyIEBnYW1lLCBAcGxheWVyLmJvZHkueCwgQHBsYXllci5ib2R5LnksIGtleSwgZnJhbWVcblxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEBcblxuICAgICMgdmlzaWJpbGl0eSB2YXJcbiAgICBAdGltZSA9IERhdGUubm93KClcblxuICAgICMgYm91bmNlIG9mZiBzdXJmYWNlc1xuICAgIEBib2R5LmJvdW5jZS5zZXQgMVxuXG4gICAgIyBwbGF5ZXJcbiAgICBAaXNfcGxheWVyX29uZSA9IEBwbGF5ZXIuaXNfcGxheWVyX29uZVxuXG4gICAgIyBib3VuZHNcbiAgICBAb3V0T2ZCb3VuZHNLaWxsID0gdHJ1ZVxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG4gICAgQGtpbGwoKVxuXG4gICAgcmV0dXJuIEBcblxuICBzaG9vdDogLT5cbiAgICBndW5fcG9zID0gQHBsYXllci5ndW5fcG9zW0BwbGF5ZXIuZ3VuX3Bvc19pbmRleF1cbiAgICBwb3MgPSBHVU5fUE9TX0NPTkZJR1tndW5fcG9zXVxuICAgIHggPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIEBwbGF5ZXIuYm9keS5yaWdodCArIHBvcy54IGVsc2UgQHBsYXllci5ib2R5LnggLSBwb3MueFxuICAgIHkgPSBAcGxheWVyLmJvZHkueSArIHBvcy55XG4gICAgYW5nbGUgPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIHBvcy5kZWcgZWxzZSAxODAgLSBwb3MuZGVnXG4gICAgIyByZXZpdmUgdGhlIGJ1bGxldFxuICAgIEByZXNldCB4LCB5XG4gICAgIyBzZXQgdmVsb2NpdHlcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21BbmdsZSBhbmdsZSwgU1BFRUQsIEBib2R5LnZlbG9jaXR5XG5cbmNsYXNzIEJ1bGxldHMgZXh0ZW5kcyBQaGFzZXIuR3JvdXBcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBwbGF5ZXIpIC0+XG4gICAgc3VwZXIgQGdhbWUsIG51bGwsICdidWxsZXRzJywgZmFsc2UsIHRydWUsIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5XG4gICAgQGFkZCBuZXcgQnVsbGV0KEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHBsYXllcikgZm9yIG4gaW4gWzEuLkBwbGF5ZXIubnVtX2J1bGxldHNdXG5cbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG4gIHNob290OiAtPiBAZ2V0Rmlyc3REZWFkKCkuc2hvb3QoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1bGxldHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0J1bGxldHMuY29mZmVlXG4gKiovIiwiVGVycmFpbiA9IHJlcXVpcmUgJy4vdGVycmFpbi5jb2ZmZWUnXG5cbmNsYXNzIENhY3R1cyBleHRlbmRzIFRlcnJhaW5cbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIHg9MCwgeT0wKSAtPlxuICAgIHN1cGVyIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeCwgeSwgJ2NhY3R1cydcblxubW9kdWxlLmV4cG9ydHMgPSBDYWN0dXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0NhY3R1cy5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENlaWxpbmcgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIHlfb2Zmc2V0PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIDAsIHlfb2Zmc2V0XG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuc2V0U2l6ZSBAZ2FtZS53b3JsZC53aWR0aCwgNSwgMCwgMFxuICAgIEBib2R5LmFsbG93R3Jhdml0eSA9IGZhbHNlXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9DZWlsaW5nLmNvZmZlZVxuICoqLyIsIkJ1bGxldHMgPSByZXF1aXJlICcuL0J1bGxldHMuY29mZmVlJ1xuQW1tbyA9IHJlcXVpcmUgJy4vQW1tby5jb2ZmZWUnXG5UZXh0ID0gcmVxdWlyZSAnLi9UZXh0LmNvZmZlZSdcblN0YXRlTWFjaGluZSA9IHJlcXVpcmUgJ2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZSdcblxuIyBQT1NJVElPTiBDT05TVEFOVFNcblBMQVlFUl9PTkVfWCA9IDIwMFxuUExBWUVSX09ORV9ZID0gNDUwXG5QTEFZRVJfVFdPX1ggPSA4ODhcblBMQVlFUl9UV09fWSA9IDQ1MFxuXG4jIE1PVkVNRU5UIENPTlNUQU5UU1xuU1BFRUQgPSA2MFxuREVMVEEgPSAxNVxuRlJBTUVSQVRFID0gN1xuXG4jIENPTlRST0wgQ09OU1RBTlRTXG5QTEFZRVJfT05FX0NPTlRST0xTID1cbiAgbW92ZV91cDogJ1cnXG4gIG1vdmVfZG93bjogJ1MnXG4gIG1vdmVfbGVmdDogJ0EnXG4gIG1vdmVfcmlnaHQ6ICdEJ1xuICBhaW1fdXA6ICdRJ1xuICBhaW1fZG93bjogJ0UnXG4gIHNob290OiAnRidcblxuUExBWUVSX1RXT19DT05UUk9MUyA9XG4gIG1vdmVfdXA6ICdJJ1xuICBtb3ZlX2Rvd246ICdLJ1xuICBtb3ZlX2xlZnQ6ICdKJ1xuICBtb3ZlX3JpZ2h0OiAnTCdcbiAgYWltX3VwOiAnTydcbiAgYWltX2Rvd246ICdVJ1xuICBzaG9vdDogJ0gnXG5cbmNsYXNzIENvd2JveSBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBpc19wbGF5ZXJfb25lPXRydWUpIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gJ2Nvd2JveS9tZWQvdHdvJ1xuICAgIHggPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIFBMQVlFUl9PTkVfWCBlbHNlIFBMQVlFUl9UV09fWFxuICAgIHkgPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIFBMQVlFUl9PTkVfWSBlbHNlIFBMQVlFUl9UV09fWVxuICAgIHN1cGVyIEBnYW1lLCB4LCB5LCBrZXksIGZyYW1lXG5cbiAgICAjIGVuYWJsZSBhcmNhZGUgcGh5c2ljc1xuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgICMgc2F2ZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHNwcml0ZSBib2R5XG4gICAgQHdpZHRoID0gQGJvZHkud2lkdGhcbiAgICBAaGVpZ2h0ID0gQGJvZHkuaGVpZ2h0XG4gICAgIyBjaGFuZ2UgYm9keSBzaXplIGZvciBtb3JlIGFjY3VyYXRlIGhpdCBjb2xsaXNpb25cbiAgICBAYm9keS5zZXRTaXplIDQ1LCAxMzYsIDI1LCAwXG4gICAgQGJvZHkuc2V0U2l6ZSA0NSwgMTM2LCAtMjUsIDAgaWYgQGlzX3BsYXllcl9vbmVcbiAgICAjIGNvbGxpZGUgd2l0aCB3b3JsZFxuICAgIEBib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWVcbiAgICAjIGRvbid0IGxldCBidWxsZXQgcGh5c2ljcyBwdXNoIHlhIGJhY2tcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgIyBzZXQgYW5jaG9yIHRvIGhvcml6b250YWwgY2VudGVyIHNvIHNwcml0ZSBmbGlwcyBhcm91bmQgaXRzIG1pZGRsZVxuICAgIEBhbmNob3Iuc2V0VG8gLjUsIDFcbiAgICAjIGZsaXAgc3ByaXRlIGlmIGlzIHBsYXllciB0d29cbiAgICBAc2NhbGUueCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gLTEgZWxzZSAxXG5cbiAgICAjIGRpcmVjdGlvbiBvYmplY3RcbiAgICBAZGlyZWN0aW9uID1cbiAgICAgIHVwOiBmYWxzZVxuICAgICAgZG93bjogZmFsc2VcbiAgICAgIGxlZnQ6IGZhbHNlXG4gICAgICByaWdodDogZmFsc2VcblxuICAgICMgYWltIG9iamVjdFxuICAgIEBhaW0gPVxuICAgICAgdXA6IGZhbHNlXG4gICAgICBkb3duOiBmYWxzZVxuXG4gICAgIyBtb3ZlbWVudCB2YXJzXG4gICAgQHRpbWUgPSBEYXRlLm5vdygpXG4gICAgQG1vdmluZyA9IGZhbHNlXG4gICAgQGRlYWQgPSBmYWxzZVxuXG4gICAgIyBmcmFtZSB2YXJzXG4gICAgQGd1bl9wb3MgPSBbJ2xvdycsJ21lZGxvdycsJ21lZCcsJ21lZGhpZ2gnLCdoaWdoJ11cbiAgICBAbGVnX3BvcyA9IFsndHdvJywnb25lJywnY3Jvc3MnXVxuICAgIEBndW5fcG9zX2luZGV4ID0gMlxuICAgIEBsZWdfcG9zX2luZGV4ID0gMVxuXG4gICAgIyBodWQgdmFyc1xuICAgIEB3aW5zID0gMFxuICAgIEBudW1fYnVsbGV0cyA9IDZcbiAgICBAYnVsbGV0cyA9IG5ldyBCdWxsZXRzIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQFxuICAgIEBhbW1vID0gbmV3IEFtbW8gQGdhbWUsIEBnYW1lX3N0YXRlLCBAXG5cbiAgICAjIHRleHQgZm9yIGRpZSBzdGF0ZVxuICAgIEB0ZXh0ID0gbmV3IFRleHQgQGdhbWUsICdHT1RfTUUnXG5cbiAgICAjIHNldHVwIGNvbnRyb2xzXG4gICAgQHNldHVwQ29udHJvbHMoKVxuICAgICMgc2V0dXAgYW5pbWF0aW9uc1xuICAgIEBzZXR1cEFuaW1hdGlvbnMoKVxuICAgICMgY3JlYXRlIHN0YXRlIG1hY2hpbmVcbiAgICBAY3JlYXRlU3RhdGVNYWNoaW5lKClcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgICMgQGtpbGwoKVxuXG4gICAgcmV0dXJuIEBcblxuICB1cGRhdGU6IC0+XG4gICAgIyBoYW5kbGUgaW5jcmVtZW50YWwgbW92ZW1lbnRcbiAgICBpZiBAc3RhdGUuY3VycmVudCAhPSAnZHlpbmcnXG4gICAgICBjdXJyZW50X3RpbWUgPSBEYXRlLm5vdygpXG4gICAgICBpZiBjdXJyZW50X3RpbWUgLSBAdGltZSA+IFNQRUVEXG4gICAgICAgIEBib2R5LnkgLT0gREVMVEEgaWYgQGRpcmVjdGlvbi51cCAgICBhbmQgQGJvZHkueSA+IEBnYW1lX3N0YXRlLmNlaWxpbmcueVxuICAgICAgICBAYm9keS55ICs9IERFTFRBIGlmIEBkaXJlY3Rpb24uZG93biAgYW5kIEBib2R5LnkgPCBAZ2FtZV9zdGF0ZS5mbG9vci55IC0gQGJvZHkuaGVpZ2h0XG4gICAgICAgIGlmIEBpc19wbGF5ZXJfb25lXG4gICAgICAgICAgQGJvZHkueCAtPSBERUxUQSBpZiBAZGlyZWN0aW9uLmxlZnQgIGFuZCBAYm9keS54ID4gQGdhbWVfc3RhdGUubGVmdF93YWxsX291dGVyLmJvZHkueFxuICAgICAgICAgIEBib2R5LnggKz0gREVMVEEgaWYgQGRpcmVjdGlvbi5yaWdodCBhbmQgQGJvZHkucmlnaHQgPCBAZ2FtZV9zdGF0ZS5sZWZ0X3dhbGwuYm9keS54XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBAYm9keS54IC09IERFTFRBIGlmIEBkaXJlY3Rpb24ubGVmdCAgYW5kIEBib2R5LnggPiBAZ2FtZV9zdGF0ZS5yaWdodF93YWxsLmJvZHkueFxuICAgICAgICAgIEBib2R5LnggKz0gREVMVEEgaWYgQGRpcmVjdGlvbi5yaWdodCBhbmQgQGJvZHkucmlnaHQgPCBAZ2FtZV9zdGF0ZS5yaWdodF93YWxsX291dGVyLmJvZHkueFxuICAgICAgICAjIEBhbmltYXRlX2FpbV91cCgpICBpZiBAYWltLnVwXG4gICAgICAgICMgQGFuaW1hdGVfYWltX2Rvd24oKSBpZiBAYWltLmRvd25cbiAgICAgICAgQHRpbWUgPSBjdXJyZW50X3RpbWVcblxuICAgICAgIyBpcyB0aGUgcGxheWVyIG1vdmluZz9cbiAgICAgIEBtb3ZpbmcgPSBmYWxzZSB1bmxlc3MgQGRpcmVjdGlvbi51cCB8fCBAZGlyZWN0aW9uLmRvd24gfHwgQGRpcmVjdGlvbi5sZWZ0IHx8IEBkaXJlY3Rpb24ucmlnaHRcblxuICAgICAgIyB0cmlnZ2VyIG1vdmUgYW5pbWF0aW9uXG4gICAgICBAbW92ZSgpIGlmICBAbW92aW5nIGFuZCBAc3RhdGUuY3VycmVudCAhPSAnbW92aW5nJ1xuICAgICAgQGlkbGUoKSBpZiAhQG1vdmluZyBhbmQgQHN0YXRlLmN1cnJlbnQgIT0gJ2lkbGUnXG5cbiAgICAjIGhhbmRsZSBkeWluZyBzZXF1ZW5jZVxuICAgIGVsc2VcbiAgICAgICMgc2hvdyBcIkdPVCBNRSFcIiB0ZXh0XG4gICAgICBjdXJyZW50X2ZyYW1lID0gQGFuaW1hdGlvbnMuY3VycmVudEZyYW1lLm5hbWVcbiAgICAgIGlmIGN1cnJlbnRfZnJhbWUgaXMgJ2Nvd2JveS9kZWFkL3JpcCcgYW5kICFAdGV4dC52aXNpYmxlXG4gICAgICAgIHggPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIEBib2R5LnJpZ2h0IC0gQHRleHQud2lkdGggLyAyIGVsc2UgQGJvZHkueCAtIEB0ZXh0LndpZHRoIC8gMlxuICAgICAgICB5ID0gQGJvZHkueVxuICAgICAgICBAdGV4dC5wbGFjZSB4LCB5XG4gICAgICAgIEB0ZXh0LnNob3coKVxuXG4gICAgICAjIHJlc2V0IHRoZSBwbGF5ZXJzXG5cblxuICAjIGNoYW5nZSBzdGF0ZVxuICBtb3ZlOiAgICAgICAgICAgLT4gQHN0YXRlLl9tb3ZlKClcbiAgaWRsZTogICAgICAgICAgIC0+IEBzdGF0ZS5faWRsZSgpXG4gIGRpZTogICAgICAgICAgICAtPiBAc3RhdGUuX2RpZSgpXG5cbiAgIyBjb250cm9sIGRpcmVjdGlvblxuICBtb3ZlX3VwOiAgICAgICAgLT4gQGRpcmVjdGlvbi51cCAgICA9IHRydWVcbiAgbW92ZV9sZWZ0OiAgICAgIC0+IEBkaXJlY3Rpb24ubGVmdCAgPSB0cnVlXG4gIG1vdmVfcmlnaHQ6ICAgICAtPiBAZGlyZWN0aW9uLnJpZ2h0ID0gdHJ1ZVxuICBtb3ZlX2Rvd246ICAgICAgLT4gQGRpcmVjdGlvbi5kb3duICA9IHRydWVcbiAgbW92ZV91cF9vZmY6ICAgIC0+IEBkaXJlY3Rpb24udXAgICAgPSBmYWxzZVxuICBtb3ZlX2xlZnRfb2ZmOiAgLT4gQGRpcmVjdGlvbi5sZWZ0ICA9IGZhbHNlXG4gIG1vdmVfcmlnaHRfb2ZmOiAtPiBAZGlyZWN0aW9uLnJpZ2h0ID0gZmFsc2VcbiAgbW92ZV9kb3duX29mZjogIC0+IEBkaXJlY3Rpb24uZG93biAgPSBmYWxzZVxuXG4gIGFpbV91cDogICAgICAgICAtPiBAYW5pbWF0ZV9haW1fdXAoKVxuICBhaW1fZG93bjogICAgICAgLT4gQGFuaW1hdGVfYWltX2Rvd24oKVxuICAjIGFpbV91cDogICAgICAgICAtPiBAYWltLnVwICAgICAgICAgID0gdHJ1ZVxuICAjIGFpbV9kb3duOiAgICAgICAtPiBAYWltLmRvd24gICAgICAgID0gdHJ1ZVxuICAjIGFpbV91cF9vZmY6ICAgICAtPiBAYWltLnVwICAgICAgICAgID0gZmFsc2VcbiAgIyBhaW1fZG93bl9vZmY6ICAgLT4gQGFpbS5kb3duICAgICAgICA9IGZhbHNlXG5cbiAgIyBmdWxsIGFtbW8hXG4gIHJlbG9hZDogLT5cbiAgICBAbnVtX2J1bGxldHMgPSA2XG4gICAgQGFtbW8ucmVsb2FkKClcblxuICAjIGhhbmRsZSBhaW1pbmcgYW5pbWF0aW9uc1xuICBhbmltYXRlX2FpbV91cDogLT5cbiAgICBjdXJyZW50X2ZyYW1lID0gQGFuaW1hdGlvbnMuY3VycmVudEZyYW1lLm5hbWVcbiAgICBAZ3VuX3Bvc19pbmRleCArPSAxIGlmIEBndW5fcG9zX2luZGV4IDwgQGd1bl9wb3MubGVuZ3RoIC0gMVxuXG4gICAgZm9yIHBvcywgaW5kZXggaW4gQGxlZ19wb3NcbiAgICAgIEBsZWdfcG9zX2luZGV4ID0gaW5kZXhcbiAgICAgIGJyZWFrIGlmIGN1cnJlbnRfZnJhbWUubWF0Y2ggcG9zXG5cbiAgICBAYW5pbWF0aW9ucy5zdG9wKClcbiAgICBAYW5pbWF0aW9ucy5wbGF5IFwibW92ZS0je0BndW5fcG9zW0BndW5fcG9zX2luZGV4XX1cIlxuICAgIEBhbmltYXRpb25zLm5leHQgQGxlZ19wb3NfaW5kZXhcblxuICBhbmltYXRlX2FpbV9kb3duOiAtPlxuICAgIGN1cnJlbnRfZnJhbWUgPSBAYW5pbWF0aW9ucy5jdXJyZW50RnJhbWUubmFtZVxuICAgIEBndW5fcG9zX2luZGV4IC09IDEgaWYgQGd1bl9wb3NfaW5kZXggPiAwXG5cbiAgICBmb3IgcG9zLCBpbmRleCBpbiBAbGVnX3Bvc1xuICAgICAgQGxlZ19wb3NfaW5kZXggPSBpbmRleFxuICAgICAgYnJlYWsgaWYgY3VycmVudF9mcmFtZS5tYXRjaCBwb3NcblxuICAgIEBhbmltYXRpb25zLnN0b3AoKVxuICAgIEBhbmltYXRpb25zLnBsYXkgXCJtb3ZlLSN7QGd1bl9wb3NbQGd1bl9wb3NfaW5kZXhdfVwiXG4gICAgQGFuaW1hdGlvbnMubmV4dCBAbGVnX3Bvc19pbmRleFxuXG4gICMgc2hvb3QhXG4gIHNob290OiAtPlxuICAgIGlmIEBudW1fYnVsbGV0cyA+IDBcbiAgICAgIEBudW1fYnVsbGV0cyAtPSAxXG4gICAgICBAYW1tby5jcm9wKClcbiAgICAgIEBidWxsZXRzLnNob290KClcblxuICBzZXR1cENvbnRyb2xzOiAtPlxuICAgICMgbWFwIGNvbnRyb2wga2V5c1xuICAgIGNvbnRyb2xzID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBQTEFZRVJfT05FX0NPTlRST0xTIGVsc2UgUExBWUVSX1RXT19DT05UUk9MU1xuICAgIF8uZWFjaCBjb250cm9scywgKGtleSwgYWN0aW9uKSA9PlxuICAgICAgaW5wdXQgPSBAZ2FtZV9zdGF0ZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkgUGhhc2VyLktleWJvYXJkW2tleV1cbiAgICAgIGlucHV0Lm9uRG93bi5hZGQgPT4gQFthY3Rpb25dKClcbiAgICAgIGlucHV0Lm9uRG93bi5hZGQgPT4gQG1vdmluZyA9IHRydWUgaWYgYWN0aW9uLm1hdGNoICdtb3ZlJ1xuICAgICAgaW5wdXQub25VcC5hZGQgICA9PiBAW1wiI3thY3Rpb259X29mZlwiXSgpIGlmIGFjdGlvbi5tYXRjaCAnbW92ZSdcbiAgICAgICMgaW5wdXQub25VcC5hZGQgICA9PiBAW1wiI3thY3Rpb259X29mZlwiXSgpXG5cbiAgc2V0dXBBbmltYXRpb25zOiAtPlxuICAgICMgZGllIGFuaW1hdGlvblxuICAgIEBhbmltYXRpb25zLmFkZCAnZGllJywgW1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL3JpcCdcbiAgICAgICdjb3dib3kvZGVhZC9yaXAnXG4gICAgICAnY293Ym95L2RlYWQvcmlwJ1xuICAgIF0sIEZSQU1FUkFURSwgZmFsc2VcblxuICAgICMgbW92ZSBhbmltYXRpbm9zXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLWhpZ2gnLCBbXG4gICAgICAnY293Ym95L2hpZ2gvdHdvJ1xuICAgICAgJ2Nvd2JveS9oaWdoL29uZSdcbiAgICAgICdjb3dib3kvaGlnaC9jcm9zcydcbiAgICAgICdjb3dib3kvaGlnaC9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLWxvdycsIFtcbiAgICAgICdjb3dib3kvbG93L3R3bydcbiAgICAgICdjb3dib3kvbG93L29uZSdcbiAgICAgICdjb3dib3kvbG93L2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9sb3cvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1tZWRoaWdoJywgW1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL3R3bydcbiAgICAgICdjb3dib3kvbWVkaGlnaC9vbmUnXG4gICAgICAnY293Ym95L21lZGhpZ2gvY3Jvc3MnXG4gICAgICAnY293Ym95L21lZGhpZ2gvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1tZWRsb3cnLCBbXG4gICAgICAnY293Ym95L21lZGxvdy90d28nXG4gICAgICAnY293Ym95L21lZGxvdy9vbmUnXG4gICAgICAnY293Ym95L21lZGxvdy9jcm9zcydcbiAgICAgICdjb3dib3kvbWVkbG93L29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbWVkJywgW1xuICAgICAgJ2Nvd2JveS9tZWQvdHdvJ1xuICAgICAgJ2Nvd2JveS9tZWQvb25lJ1xuICAgICAgJ2Nvd2JveS9tZWQvY3Jvc3MnXG4gICAgICAnY293Ym95L21lZC9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG5cbiAgY3JlYXRlU3RhdGVNYWNoaW5lOiAtPlxuICAgIEBzdGF0ZSA9IFN0YXRlTWFjaGluZS5jcmVhdGVcbiAgICAgIGluaXRpYWw6ICdfaWRsZSdcbiAgICAgIGV2ZW50czogW1xuICAgICAgICB7IG5hbWU6ICdfaWRsZScsIGZyb206ICcqJywgdG86ICdpZGxpbmcnIH1cbiAgICAgICAgeyBuYW1lOiAnX21vdmUnLCBmcm9tOiAnKicsIHRvOiAnbW92aW5nJyB9XG4gICAgICAgIHsgbmFtZTogJ19kaWUnLCAgZnJvbTogJyonLCB0bzogJ2R5aW5nJyAgfSBdXG4gICAgICBjYWxsYmFja3M6XG4gICAgICAgIG9uX2lkbGU6IChldmVudCwgZnJvbSwgdG8pID0+IEBhbmltYXRpb25zLnN0b3AgbnVsbCwgdHJ1ZVxuICAgICAgICBvbl9tb3ZlOiAoZXZlbnQsIGZyb20sIHRvKSA9PiBAcGxheSBcIm1vdmUtI3tAZ3VuX3Bvc1tAZ3VuX3Bvc19pbmRleF19XCJcbiAgICAgICAgb25fZGllOiAoZXZlbnQsIGZyb20sIHRvKSAgPT4gQHBsYXkgXCJkaWVcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IENvd2JveVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ293Ym95LmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRmxvb3IgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIHlfb2Zmc2V0PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIDAsIEBnYW1lLmhlaWdodCArIHlfb2Zmc2V0XG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuc2V0U2l6ZSBAZ2FtZS53b3JsZC53aWR0aCwgNSwgMCwgMFxuICAgIEBib2R5LmFsbG93R3Jhdml0eSA9IGZhbHNlXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9GbG9vci5jb2ZmZWVcbiAqKi8iLCJDYWN0dXMgPSByZXF1aXJlICcuL0NhY3R1cy5jb2ZmZWUnXG5UcmVlID0gcmVxdWlyZSAnLi9UcmVlLmNvZmZlZSdcblxuIyBnYW1lIHdpZHRoLCBoZWlnaHQgPSAxMDg4LCA4MTZcbiMgY2FjdHVzIHdpZHRoLCBoZWlnaHQgPSAzMiwgODhcbiMgdHJlZSB3aWR0aCwgaGVpZ2h0ID0gNjQsIDEwOFxuXG5DQUNUVVNfUE9TSVRJT05TID1cbiAgdG9wX2xlZnQ6IHsgeDogMCwgeTogMCB9XG4gIHRvcF9yaWdodDogeyB4OiAwLCB5OiAwIH1cbiAgY2VudGVyX2xlZnQ6IHsgeDogMCwgeTogMCB9XG4gIGNlbnRlcjogeyB4OiA1MjgsIHk6IDMwMCB9XG4gIGNlbnRlcl9yaWdodDogeyB4OiAwLCB5OiAwIH1cbiAgYm90dG9tX2xlZnQ6IHsgeDogMCwgeTogMCB9XG4gIGJvdHRvbV9yaWdodDogeyB4OiAwLCB5OiAwIH1cblxuVFJFRV9QT1NJVElPTlMgPVxuICB0b3BfbGVmdDogeyB4OiAwLCB5OiAwIH1cbiAgdG9wX3JpZ2h0OiB7IHg6IDAsIHk6IDAgfVxuICBib3R0b21fbGVmdDogeyB4OiAwLCB5OiAwIH1cbiAgYm90dG9tX3JpZ2h0OiB7IHg6IDAsIHk6IDAgfVxuXG5QT1NJVElPTlMgPSBbXG4gIFwidG9wX2xlZnRcIlxuICBcInRvcF9yaWdodFwiXG4gIFwiYm90dG9tX2xlZnRcIlxuICBcImJvdHRvbV9yaWdodFwiXG5dXG5cbmNsYXNzIFRlcnJhaW5Hcm91cCBleHRlbmRzIFBoYXNlci5Hcm91cFxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQGxldmVsX2RhdGE9e30pIC0+XG4gICAgc3VwZXIgQGdhbWUsIG51bGwsICdUZXJyYWluR3JvdXAnXG4gICAgQGJ1aWxkKClcblxuICAgICMgYWRkIHRvIGdhbWVcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG4gICMgcmVtb3ZlIHRlcnJhaW4gc3ByaXRlc1xuICByZXNldDogLT4gQHJlbW92ZUNoaWxkcmVuKClcblxuICAjIGJ1aWxkIGEgbmV3IHNldCBvZiB0ZXJyYWluIHNwcml0ZXNcbiAgYnVpbGQ6IChsZXZlbF9kYXRhPUBsZXZlbF9kYXRhKSAtPlxuICAgICMgb3ZlcndyaXRlIHRoZSBsZXZlbF9kYXRhXG4gICAgQGxldmVsX2RhdGEgPSBsZXZlbF9kYXRhXG4gICAgIyBkZXRlcm1pbmUgaWYgbGV2ZWwgaGFzIGEgd2Fnb25cbiAgICBAaXNfd2Fnb24gPSBAbGV2ZWxfZGF0YS53YWdvblxuICAgIEBudW1fY2FjdHVzID0gQGxldmVsX2RhdGEubnVtX2NhY3R1c1xuICAgIEBudW1fdHJlZSA9IEBsZXZlbF9kYXRhLm51bV90cmVlXG4gICAgIyBkZXRlcm1pbmUgcG9zaXRpb25zIHRvIHBsdWNrIGZyb21cbiAgICBAcG9zaXRpb25zID0gUE9TSVRJT05TXG4gICAgXy5zaHVmZmxlIEBwb3NpdGlvbnNcbiAgICBAY2FjdHVzX3Bvc2l0aW9ucyA9IGlmIEBpc193YWdvbiB0aGVuIFsnY2VudGVyX2xlZnQnLCAnY2VudGVyX3JpZ2h0J10gZWxzZSBbJ2NlbnRlciddXG4gICAgXy5zaHVmZmxlIEBjYWN0dXNfcG9zaXRpb25zXG4gICAgIyBhZGQgdGVycmFpbiBjaGlsZHJlbiB0byB0aGUgZ3JvdXBcbiAgICBAYWRkQ2FjdHVzKCkgZm9yIGNhY3R1cyBpbiBbMC4uLkBudW1fY2FjdHVzXVxuICAgIEBhZGRUcmVlKCkgICBmb3IgdHJlZSBpbiBbMC4uLkBudW1fdHJlZV1cblxuICBhZGRDYWN0dXM6IC0+XG4gICAgcG9zID0gQGdldFRlcnJhaW5Qb3NpdGlvbiAnY2FjdHVzJ1xuICAgIEBhZGQgbmV3IENhY3R1cyBAZ2FtZSwgQGdhbWVfc3RhdGUsIHBvcy54LCBwb3MueVxuXG4gIGFkZFRyZWU6IC0+XG4gICAgcG9zID0gQGdldFRlcnJhaW5Qb3NpdGlvbiAndHJlZSdcbiAgICBAYWRkIG5ldyBUcmVlIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgcG9zLngsIHBvcy55XG5cbiAgZ2V0VGVycmFpblBvc2l0aW9uOiAoa2V5KSAtPlxuICAgIHBvcyA9IHVuZGVmaW5lZFxuICAgIHN3aXRjaCBrZXlcbiAgICAgIHdoZW4gJ2NhY3R1cydcbiAgICAgICAgaWYgQGNhY3R1c19wb3NpdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgIHBvc19rZXkgPSBAY2FjdHVzX3Bvc2l0aW9ucy5wb3AoKVxuICAgICAgICAgIHBvcyA9IENBQ1RVU19QT1NJVElPTlNbcG9zX2tleV1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHBvc19rZXkgPSBAcG9zaXRpb25zLnBvcCgpXG4gICAgICAgICAgcG9zID0gUE9TSVRJT05TW3Bvc19rZXldXG4gICAgICB3aGVuICd0cmVlJ1xuICAgICAgICBwb3Nfa2V5ID0gQHBvc2l0aW9ucy5wb3AoKVxuICAgICAgICBwb3MgPSBQT1NJVElPTlNbcG9zX2tleV1cbiAgICByZXR1cm4gcG9zXG5cbm1vZHVsZS5leHBvcnRzID0gVGVycmFpbkdyb3VwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXJyYWluR3JvdXAuY29mZmVlXG4gKiovIiwiY2xhc3MgVGV4dCBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgZnJhbWUsIHg9MCwgeT0wKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBcInRleHQvI3tmcmFtZX1cIlxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG4gICAgQGhpZGUoKVxuXG4gICAgcmV0dXJuIEBcblxuICBwbGFjZTogKHgsIHkpIC0+XG4gICAgQHggPSB4XG4gICAgQHkgPSB5XG5cbiAgc2hvdzogLT4gQHJlc2V0IEB4LCBAeVxuXG4gIGhpZGU6IC0+IEBraWxsKClcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UZXh0LmNvZmZlZVxuICoqLyIsIlRlcnJhaW4gPSByZXF1aXJlICcuL3RlcnJhaW4uY29mZmVlJ1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgVGVycmFpblxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIEBnYW1lX3N0YXRlLCB4LCB5LCAndHJlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBUcmVlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UcmVlLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgV2FsbCBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgeF9vZmZzZXQ9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgeF9vZmZzZXQsIDBcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICBAYm9keS5zZXRTaXplIDEsIEBnYW1lLndvcmxkLmhlaWdodCwgMCwgMFxuICAgIEBib2R5LmFsbG93R3Jhdml0eSA9IGZhbHNlXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9XYWxsLmNvZmZlZVxuICoqLyIsImNsYXNzIEJvb3RcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgY3JlYXRlOiAtPlxuICAgICMgc2V0IGJhY2tncm91bmQgY29sb3IgdG8gYmxhY2tcbiAgICBAZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMDAwMCdcblxuICAgICMgU2NhbGUgdGhlIGdhbWUgaW4gdGhlIGJyb3dzZXJcbiAgICBAc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZVxuICAgIEBzY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMXG5cbiAgICAjIHN0YXJ0IHByZWxvYWRcbiAgICBAc3RhdGUuc3RhcnQgJ3ByZWxvYWQnXG5cbiAgcHJlbG9hZDogLT5cbiAgICAjIHNldCBpbnRpYWwgc2NhbGVcbiAgICBAZ2FtZS5zY2FsZXIoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvb3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvYm9vdC5jb2ZmZWVcbiAqKi8iLCIjIEJPVU5EU1xuRmxvb3IgICAgPSByZXF1aXJlICcuLi9zcHJpdGVzL0Zsb29yLmNvZmZlZSdcbkNlaWxpbmcgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9DZWlsaW5nLmNvZmZlZSdcbldhbGwgICAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9XYWxsLmNvZmZlZSdcbldBTExfT0ZGU0VUID0gMjc1XG5cbiMgSFVEXG4jIFRpbWVyICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVGltZXIuY29mZmVlJ1xuIyBTY29yZSAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1Njb3JlLmNvZmZlZSdcblxuIyBTUFJJVEVTXG5Db3dib3kgPSByZXF1aXJlICcuLi9zcHJpdGVzL0Nvd2JveS5jb2ZmZWUnXG5UZXJyYWluR3JvdXAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RlcnJhaW5Hcm91cC5jb2ZmZWUnXG4jIFdhZ29uICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2Fnb24uY29mZmVlJ1xuXG5TVEFSVElOR19USU1FID0gNzAgI3NlY29uZHNcbk5PX0FNTU9fQ09VTlRET1dOID0gMTAgI3NlY29uZHNcblxuY2xhc3MgR2FtZVxuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgIyBjcmVhdGUgdGhlIGJvdW5kc1xuICAgIEBjZWlsaW5nICAgID0gbmV3IENlaWxpbmcgQGdhbWUsIDQ1XG4gICAgQGZsb29yICAgICAgPSBuZXcgRmxvb3IgQGdhbWUsIC00NVxuICAgIEBsZWZ0X3dhbGxfb3V0ZXIgPSBuZXcgV2FsbCBAZ2FtZSwgOTJcbiAgICBAbGVmdF93YWxsICA9IG5ldyBXYWxsIEBnYW1lLCBAZ2FtZS53b3JsZC53aWR0aCAvIDIgLSBXQUxMX09GRlNFVFxuICAgIEByaWdodF93YWxsX291dGVyID0gbmV3IFdhbGwgQGdhbWUsIDk5NlxuICAgIEByaWdodF93YWxsID0gbmV3IFdhbGwgQGdhbWUsIEBnYW1lLndvcmxkLndpZHRoIC8gMiAgKyBXQUxMX09GRlNFVFxuXG4gICAgIyBzZXR1cCB0aGUgaHVkXG5cblxuICAgICMgY3JlYXRlIHRoZSBwbGF5ZXJzXG4gICAgQHBsYXllcl9vbmUgPSBuZXcgQ293Ym95IEBnYW1lLCBAXG4gICAgQHBsYXllcl90d28gPSBuZXcgQ293Ym95IEBnYW1lLCBALCBmYWxzZVxuXG4gICAgIyBjb2xsaXNpb24gZWxlbWVudHNcbiAgICBAYnVsbGV0cyAgPSBbIEBwbGF5ZXJfb25lLmJ1bGxldHMsIEBwbGF5ZXJfdHdvLmJ1bGxldHMgXVxuICAgIEB3YWxscyAgICA9IFsgQGxlZnRfd2FsbCwgQHJpZ2h0X3dhbGwgXVxuICAgIEBzdXJmYWNlcyA9IFsgQGNlaWxpbmcsIEBmbG9vciBdXG4gICAgQHBsYXllcnMgID0gWyBAcGxheWVyX29uZSwgQHBsYXllcl90d28gXVxuICAgIEB0ZXJyYWluID0gdW5kZWZpbmVkICMgaW5zdGFudGlhdGUgaW4gc2V0dXBMZXZlbCgpXG5cbiAgICAjIHN0YXJ0IHRoZSBnYW1lXG4gICAgQHN0YXJ0KClcblxuICBzdGFydDogLT5cbiAgICAjIGludHJvIHRoZSBsZXZlbCwgcGxhY2UgdGVycmFpbiBvbiB0aGUgbWFwXG4gICAgQHNldHVwTGV2ZWwoKVxuXG4gIHVwZGF0ZTogLT5cbiAgICAjIHNldCBib3VuY2Ugc3VyZmFjZXMgZm9yIGJ1bGxldHNcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlIEBidWxsZXRzLCBAc3VyZmFjZXNcblxuICAgICMgc2V0IHBsYXllciwgYnVsbGV0IGNvbGxpc2lvbnNcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlIEBidWxsZXRzLCBAcGxheWVycywgKHBsYXllciwgYnVsbGV0KSA9PlxuICAgICAgIyBkaXNhYmxlIGlucHV0c1xuICAgICAgIyBAaW5wdXRcbiAgICAgICMga2lsbCBhbGwgYnVsbGV0cyBpbiB0aGUgZmllbGRcbiAgICAgIGIua2lsbCgpIGZvciBiIGluIEBwbGF5ZXJfb25lLmJ1bGxldHMuY2hpbGRyZW5cbiAgICAgIGIua2lsbCgpIGZvciBiIGluIEBwbGF5ZXJfdHdvLmJ1bGxldHMuY2hpbGRyZW5cbiAgICAgICMgaW5jcmVhc2Ugc2NvcmUgb2Ygd2lubmluZyBwbGF5ZXJcbiAgICAgIGJ1bGxldC5wbGF5ZXIuaWRsZSgpXG4gICAgICBidWxsZXQucGxheWVyLndpbnMgKz0gMVxuICAgICAgIyBpbmNyZWFzZSBnYW1lJ3MgbGV2ZWxcbiAgICAgIEBnYW1lLmxldmVsICs9IDFcbiAgICAgICMgdHJpZ2dlciBwbGF5ZXIgZGVhdGhcbiAgICAgIHBsYXllci5kaWUoKVxuXG4gICAgIyBzZXQgdGVycmFpbiwgYnVsbGV0IGNvbGxpc2lvbnNcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlIEBidWxsZXRzLCBAdGVycmFpbiwgKGJ1bGxldCwgdGVycmFpbikgPT5cbiAgICAgIGNvbGxpc2lvbl95ID0gYnVsbGV0LnkgKyBidWxsZXQuaGVpZ2h0XG4gICAgICBidWxsZXQua2lsbCgpXG4gICAgICB0ZXJyYWluLmRlZm9ybSBjb2xsaXNpb25feVxuXG4gIHJlbmRlcjogLT5cbiAgICBpZiBAZ2FtZS5kZWJ1Z01vZGVcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQGNlaWxpbmdcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQGZsb29yXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBsZWZ0X3dhbGxcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHJpZ2h0X3dhbGxcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl9vbmVcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl90d29cbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl9vbmUuYnVsbGV0c1xuICAgICAgQGdhbWUuZGVidWcuYm9keSBAcGxheWVyX3R3by5idWxsZXRzXG4gICAgICAjIEBnYW1lLmRlYnVnLmJvZHkgQHRlcnJhaW4uY2hpbGRyZW5bMF1cblxuICBzZXR1cExldmVsOiAtPlxuICAgIGxldmVsX251bSA9IEBnYW1lLmxldmVsXG4gICAgbGV2ZWwgPSBAZ2FtZS5jb25zdGFudHMuTEVWRUxTW1wiI3tsZXZlbF9udW19XCJdXG4gICAgQHRlcnJhaW4gPSBuZXcgVGVycmFpbkdyb3VwIEBnYW1lLCBALCBsZXZlbFxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvZ2FtZS5jb2ZmZWVcbiAqKi8iLCIjIFNQUklURVNcbiMgQ293Ym95ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9Db3dib3kuY29mZmVlJ1xuIyBCdWxsZXQgPSByZXF1aXJlICcuLi9zcHJpdGVzL0J1bGxldC5jb2ZmZWUnXG4jIENhY3R1cyA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ2FjdHVzLmNvZmZlZSdcbiMgVHJlZSAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9UcmVlLmNvZmZlZSdcbiMgV2Fnb24gID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9XYWdvbi5jb2ZmZWUnXG5cbiMgSFVEXG4jIFRpbWVyICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVGltZXIuY29mZmVlJ1xuIyBBbW1vICAgPSByZXF1aXJlICcuLi9zcHJpdGVzL0FtbW8uY29mZmVlJ1xuXG5cbmNsYXNzIEludHJvXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICBjb25zb2xlLmxvZyAnaW50cm8nXG5cblxuICBzdGFydDogLT5cblxuICB1cGRhdGU6IC0+XG5cbm1vZHVsZS5leHBvcnRzID0gSW50cm9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvaW50cm8uY29mZmVlXG4gKiovIiwiY2xhc3MgUHJlbG9hZFxuICBjb25zdHJ1Y3RvcjogLT5cblxuICBwcmVsb2FkOiAtPlxuICAgIEBsb2FkLmNyb3NzT3JpZ2luID0gQGdhbWUuaG9zdHVybCB1bmxlc3MgQGdhbWUuY2RuIGlzICcvJ1xuXG4gICAgIyBMT0FEIFNUVUZGU1xuICAgIENETiA9IEBnYW1lLmNkblxuICAgICMgU1BSSVRFU1xuICAgIGtleSA9ICdhdGxhcydcbiAgICB0ZXh0dXJlX3VybCA9IFwiI3tDRE59aW1hZ2VzL2F0bGFzLnBuZ1wiXG4gICAgYXRsYXNfZGF0YSA9IHJlcXVpcmUgJy4uL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWUnXG4gICAgQGxvYWQuYXRsYXNKU09OSGFzaCBrZXksIHRleHR1cmVfdXJsLCBudWxsLCBhdGxhc19kYXRhXG5cbiAgICAjIFNGWFxuICAgIF8uZWFjaCBAZ2FtZS5jb25zdGFudHMuU0ZYLCAoc2Z4KSA9PlxuICAgICAgYXNzZXQgPSBAbG9hZC5hdWRpbyBzZngsXG4gICAgICBbXCIje0NETn1hdWRpby8je3NmeH0ubXAzI3tAZ2FtZS52ZXJzaW9ufVwiLFxuICAgICAgXCIje0NETn1hdWRpby8je3NmeH0ub2dnI3tAZ2FtZS52ZXJzaW9ufVwiXVxuICAgICAgYXNzZXQuY3Jvc3NPcmlnaW4gPSBAbG9hZC5jcm9zc09yaWdpbiAgdW5sZXNzIEBnYW1lLmNkbiBpcyAnLydcblxuICB1cGRhdGU6IC0+XG4gICAgaWYgQGdhbWUuZGVidWdNb2RlXG4gICAgICBAc3RhdGUuc3RhcnQgJ2dhbWUnXG4gICAgZWxzZVxuICAgICAgQHN0YXRlLnN0YXJ0ICdpbnRybydcblxubW9kdWxlLmV4cG9ydHMgPSBQcmVsb2FkXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL3ByZWxvYWQuY29mZmVlXG4gKiovIiwiTGF1bmNoR2FtZSA9IHJlcXVpcmUgJy4vZ2FtZS9sYXVuY2guY29mZmVlJ1xuXG4jcmVhZHlcbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG5cblx0Y29uc29sZS5sb2cgJ2FsbCByZWFkeSdcblx0TGF1bmNoR2FtZSgpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL21haW4uY29mZmVlXG4gKiovIiwiLypcblxuICBKYXZhc2NyaXB0IFN0YXRlIE1hY2hpbmUgTGlicmFyeSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlc2dvcmRvbi9qYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmVcblxuICBDb3B5cmlnaHQgKGMpIDIwMTIsIDIwMTMsIDIwMTQsIDIwMTUsIEpha2UgR29yZG9uIGFuZCBjb250cmlidXRvcnNcbiAgUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIC0gaHR0cHM6Ly9naXRodWIuY29tL2pha2VzZ29yZG9uL2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIFN0YXRlTWFjaGluZSA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBWRVJTSU9OOiBcIjIuMy41XCIsXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgUmVzdWx0OiB7XG4gICAgICBTVUNDRUVERUQ6ICAgIDEsIC8vIHRoZSBldmVudCB0cmFuc2l0aW9uZWQgc3VjY2Vzc2Z1bGx5IGZyb20gb25lIHN0YXRlIHRvIGFub3RoZXJcbiAgICAgIE5PVFJBTlNJVElPTjogMiwgLy8gdGhlIGV2ZW50IHdhcyBzdWNjZXNzZnVsbCBidXQgbm8gc3RhdGUgdHJhbnNpdGlvbiB3YXMgbmVjZXNzYXJ5XG4gICAgICBDQU5DRUxMRUQ6ICAgIDMsIC8vIHRoZSBldmVudCB3YXMgY2FuY2VsbGVkIGJ5IHRoZSBjYWxsZXIgaW4gYSBiZWZvcmVFdmVudCBjYWxsYmFja1xuICAgICAgUEVORElORzogICAgICA0ICAvLyB0aGUgZXZlbnQgaXMgYXN5bmNocm9ub3VzIGFuZCB0aGUgY2FsbGVyIGlzIGluIGNvbnRyb2wgb2Ygd2hlbiB0aGUgdHJhbnNpdGlvbiBvY2N1cnNcbiAgICB9LFxuXG4gICAgRXJyb3I6IHtcbiAgICAgIElOVkFMSURfVFJBTlNJVElPTjogMTAwLCAvLyBjYWxsZXIgdHJpZWQgdG8gZmlyZSBhbiBldmVudCB0aGF0IHdhcyBpbm5hcHJvcHJpYXRlIGluIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICBQRU5ESU5HX1RSQU5TSVRJT046IDIwMCwgLy8gY2FsbGVyIHRyaWVkIHRvIGZpcmUgYW4gZXZlbnQgd2hpbGUgYW4gYXN5bmMgdHJhbnNpdGlvbiB3YXMgc3RpbGwgcGVuZGluZ1xuICAgICAgSU5WQUxJRF9DQUxMQkFDSzogICAzMDAgLy8gY2FsbGVyIHByb3ZpZGVkIGNhbGxiYWNrIGZ1bmN0aW9uIHRocmV3IGFuIGV4Y2VwdGlvblxuICAgIH0sXG5cbiAgICBXSUxEQ0FSRDogJyonLFxuICAgIEFTWU5DOiAnYXN5bmMnLFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNyZWF0ZTogZnVuY3Rpb24oY2ZnLCB0YXJnZXQpIHtcblxuICAgICAgdmFyIGluaXRpYWwgICAgICA9ICh0eXBlb2YgY2ZnLmluaXRpYWwgPT0gJ3N0cmluZycpID8geyBzdGF0ZTogY2ZnLmluaXRpYWwgfSA6IGNmZy5pbml0aWFsOyAvLyBhbGxvdyBmb3IgYSBzaW1wbGUgc3RyaW5nLCBvciBhbiBvYmplY3Qgd2l0aCB7IHN0YXRlOiAnZm9vJywgZXZlbnQ6ICdzZXR1cCcsIGRlZmVyOiB0cnVlfGZhbHNlIH1cbiAgICAgIHZhciB0ZXJtaW5hbCAgICAgPSBjZmcudGVybWluYWwgfHwgY2ZnWydmaW5hbCddO1xuICAgICAgdmFyIGZzbSAgICAgICAgICA9IHRhcmdldCB8fCBjZmcudGFyZ2V0ICB8fCB7fTtcbiAgICAgIHZhciBldmVudHMgICAgICAgPSBjZmcuZXZlbnRzIHx8IFtdO1xuICAgICAgdmFyIGNhbGxiYWNrcyAgICA9IGNmZy5jYWxsYmFja3MgfHwge307XG4gICAgICB2YXIgbWFwICAgICAgICAgID0ge307IC8vIHRyYWNrIHN0YXRlIHRyYW5zaXRpb25zIGFsbG93ZWQgZm9yIGFuIGV2ZW50IHsgZXZlbnQ6IHsgZnJvbTogWyB0byBdIH0gfVxuICAgICAgdmFyIHRyYW5zaXRpb25zICA9IHt9OyAvLyB0cmFjayBldmVudHMgYWxsb3dlZCBmcm9tIGEgc3RhdGUgICAgICAgICAgICB7IHN0YXRlOiBbIGV2ZW50IF0gfVxuXG4gICAgICB2YXIgYWRkID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZnJvbSA9IChlLmZyb20gaW5zdGFuY2VvZiBBcnJheSkgPyBlLmZyb20gOiAoZS5mcm9tID8gW2UuZnJvbV0gOiBbU3RhdGVNYWNoaW5lLldJTERDQVJEXSk7IC8vIGFsbG93ICd3aWxkY2FyZCcgdHJhbnNpdGlvbiBpZiAnZnJvbScgaXMgbm90IHNwZWNpZmllZFxuICAgICAgICBtYXBbZS5uYW1lXSA9IG1hcFtlLm5hbWVdIHx8IHt9O1xuICAgICAgICBmb3IgKHZhciBuID0gMCA7IG4gPCBmcm9tLmxlbmd0aCA7IG4rKykge1xuICAgICAgICAgIHRyYW5zaXRpb25zW2Zyb21bbl1dID0gdHJhbnNpdGlvbnNbZnJvbVtuXV0gfHwgW107XG4gICAgICAgICAgdHJhbnNpdGlvbnNbZnJvbVtuXV0ucHVzaChlLm5hbWUpO1xuXG4gICAgICAgICAgbWFwW2UubmFtZV1bZnJvbVtuXV0gPSBlLnRvIHx8IGZyb21bbl07IC8vIGFsbG93IG5vLW9wIHRyYW5zaXRpb24gaWYgJ3RvJyBpcyBub3Qgc3BlY2lmaWVkXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgIGluaXRpYWwuZXZlbnQgPSBpbml0aWFsLmV2ZW50IHx8ICdzdGFydHVwJztcbiAgICAgICAgYWRkKHsgbmFtZTogaW5pdGlhbC5ldmVudCwgZnJvbTogJ25vbmUnLCB0bzogaW5pdGlhbC5zdGF0ZSB9KTtcbiAgICAgIH1cblxuICAgICAgZm9yKHZhciBuID0gMCA7IG4gPCBldmVudHMubGVuZ3RoIDsgbisrKVxuICAgICAgICBhZGQoZXZlbnRzW25dKTtcblxuICAgICAgZm9yKHZhciBuYW1lIGluIG1hcCkge1xuICAgICAgICBpZiAobWFwLmhhc093blByb3BlcnR5KG5hbWUpKVxuICAgICAgICAgIGZzbVtuYW1lXSA9IFN0YXRlTWFjaGluZS5idWlsZEV2ZW50KG5hbWUsIG1hcFtuYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGZvcih2YXIgbmFtZSBpbiBjYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICBmc21bbmFtZV0gPSBjYWxsYmFja3NbbmFtZV1cbiAgICAgIH1cblxuICAgICAgZnNtLmN1cnJlbnQgICAgID0gJ25vbmUnO1xuICAgICAgZnNtLmlzICAgICAgICAgID0gZnVuY3Rpb24oc3RhdGUpIHsgcmV0dXJuIChzdGF0ZSBpbnN0YW5jZW9mIEFycmF5KSA/IChzdGF0ZS5pbmRleE9mKHRoaXMuY3VycmVudCkgPj0gMCkgOiAodGhpcy5jdXJyZW50ID09PSBzdGF0ZSk7IH07XG4gICAgICBmc20uY2FuICAgICAgICAgPSBmdW5jdGlvbihldmVudCkgeyByZXR1cm4gIXRoaXMudHJhbnNpdGlvbiAmJiAobWFwW2V2ZW50XS5oYXNPd25Qcm9wZXJ0eSh0aGlzLmN1cnJlbnQpIHx8IG1hcFtldmVudF0uaGFzT3duUHJvcGVydHkoU3RhdGVNYWNoaW5lLldJTERDQVJEKSk7IH1cbiAgICAgIGZzbS5jYW5ub3QgICAgICA9IGZ1bmN0aW9uKGV2ZW50KSB7IHJldHVybiAhdGhpcy5jYW4oZXZlbnQpOyB9O1xuICAgICAgZnNtLnRyYW5zaXRpb25zID0gZnVuY3Rpb24oKSAgICAgIHsgcmV0dXJuIHRyYW5zaXRpb25zW3RoaXMuY3VycmVudF07IH07XG4gICAgICBmc20uaXNGaW5pc2hlZCAgPSBmdW5jdGlvbigpICAgICAgeyByZXR1cm4gdGhpcy5pcyh0ZXJtaW5hbCk7IH07XG4gICAgICBmc20uZXJyb3IgICAgICAgPSBjZmcuZXJyb3IgfHwgZnVuY3Rpb24obmFtZSwgZnJvbSwgdG8sIGFyZ3MsIGVycm9yLCBtc2csIGUpIHsgdGhyb3cgZSB8fCBtc2c7IH07IC8vIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBzb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5zIGlzIHRvIHRocm93IGFuIGV4Y2VwdGlvbiwgYnV0IGNhbGxlciBjYW4gb3ZlcnJpZGUgdGhpcyBiZWhhdmlvciBpZiBkZXNpcmVkIChzZWUgZ2l0aHViIGlzc3VlICMzIGFuZCAjMTcpXG5cbiAgICAgIGlmIChpbml0aWFsICYmICFpbml0aWFsLmRlZmVyKVxuICAgICAgICBmc21baW5pdGlhbC5ldmVudF0oKTtcblxuICAgICAgcmV0dXJuIGZzbTtcblxuICAgIH0sXG5cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZG9DYWxsYmFjazogZnVuY3Rpb24oZnNtLCBmdW5jLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZnVuYy5hcHBseShmc20sIFtuYW1lLCBmcm9tLCB0b10uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZzbS5lcnJvcihuYW1lLCBmcm9tLCB0bywgYXJncywgU3RhdGVNYWNoaW5lLkVycm9yLklOVkFMSURfQ0FMTEJBQ0ssIFwiYW4gZXhjZXB0aW9uIG9jY3VycmVkIGluIGEgY2FsbGVyLXByb3ZpZGVkIGNhbGxiYWNrIGZ1bmN0aW9uXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZUFueUV2ZW50OiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uYmVmb3JlZXZlbnQnXSwgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBhZnRlckFueUV2ZW50OiAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmFmdGVyZXZlbnQnXSB8fCBmc21bJ29uZXZlbnQnXSwgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgbGVhdmVBbnlTdGF0ZTogICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25sZWF2ZXN0YXRlJ10sICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGVudGVyQW55U3RhdGU6ICAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uZW50ZXJzdGF0ZSddIHx8IGZzbVsnb25zdGF0ZSddLCAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBjaGFuZ2VTdGF0ZTogICAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmNoYW5nZXN0YXRlJ10sICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG5cbiAgICBiZWZvcmVUaGlzRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmJlZm9yZScgKyBuYW1lXSwgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgYWZ0ZXJUaGlzRXZlbnQ6ICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25hZnRlcicgICsgbmFtZV0gfHwgZnNtWydvbicgKyBuYW1lXSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGxlYXZlVGhpc1N0YXRlOiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29ubGVhdmUnICArIGZyb21dLCAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBlbnRlclRoaXNTdGF0ZTogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmVudGVyJyAgKyB0b10gICB8fCBmc21bJ29uJyArIHRvXSwgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG5cbiAgICBiZWZvcmVFdmVudDogZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgaWYgKChmYWxzZSA9PT0gU3RhdGVNYWNoaW5lLmJlZm9yZVRoaXNFdmVudChmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSkgfHxcbiAgICAgICAgICAoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVBbnlFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIGFmdGVyRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIFN0YXRlTWFjaGluZS5hZnRlclRoaXNFdmVudChmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIFN0YXRlTWFjaGluZS5hZnRlckFueUV2ZW50KCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgbGVhdmVTdGF0ZTogZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgdmFyIHNwZWNpZmljID0gU3RhdGVNYWNoaW5lLmxlYXZlVGhpc1N0YXRlKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpLFxuICAgICAgICAgIGdlbmVyYWwgID0gU3RhdGVNYWNoaW5lLmxlYXZlQW55U3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgaWYgKChmYWxzZSA9PT0gc3BlY2lmaWMpIHx8IChmYWxzZSA9PT0gZ2VuZXJhbCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGVsc2UgaWYgKChTdGF0ZU1hY2hpbmUuQVNZTkMgPT09IHNwZWNpZmljKSB8fCAoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBnZW5lcmFsKSlcbiAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5BU1lOQztcbiAgICB9LFxuXG4gICAgZW50ZXJTdGF0ZTogZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgU3RhdGVNYWNoaW5lLmVudGVyVGhpc1N0YXRlKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgU3RhdGVNYWNoaW5lLmVudGVyQW55U3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgIH0sXG5cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgYnVpbGRFdmVudDogZnVuY3Rpb24obmFtZSwgbWFwKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGZyb20gID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB2YXIgdG8gICAgPSBtYXBbZnJvbV0gfHwgbWFwW1N0YXRlTWFjaGluZS5XSUxEQ0FSRF0gfHwgZnJvbTtcbiAgICAgICAgdmFyIGFyZ3MgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTsgLy8gdHVybiBhcmd1bWVudHMgaW50byBwdXJlIGFycmF5XG5cbiAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbilcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihuYW1lLCBmcm9tLCB0bywgYXJncywgU3RhdGVNYWNoaW5lLkVycm9yLlBFTkRJTkdfVFJBTlNJVElPTiwgXCJldmVudCBcIiArIG5hbWUgKyBcIiBpbmFwcHJvcHJpYXRlIGJlY2F1c2UgcHJldmlvdXMgdHJhbnNpdGlvbiBkaWQgbm90IGNvbXBsZXRlXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbm5vdChuYW1lKSlcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihuYW1lLCBmcm9tLCB0bywgYXJncywgU3RhdGVNYWNoaW5lLkVycm9yLklOVkFMSURfVFJBTlNJVElPTiwgXCJldmVudCBcIiArIG5hbWUgKyBcIiBpbmFwcHJvcHJpYXRlIGluIGN1cnJlbnQgc3RhdGUgXCIgKyB0aGlzLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmIChmYWxzZSA9PT0gU3RhdGVNYWNoaW5lLmJlZm9yZUV2ZW50KHRoaXMsIG5hbWUsIGZyb20sIHRvLCBhcmdzKSlcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5DQU5DRUxMRUQ7XG5cbiAgICAgICAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmFmdGVyRXZlbnQodGhpcywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0Lk5PVFJBTlNJVElPTjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXBhcmUgYSB0cmFuc2l0aW9uIG1ldGhvZCBmb3IgdXNlIEVJVEhFUiBsb3dlciBkb3duLCBvciBieSBjYWxsZXIgaWYgdGhleSB3YW50IGFuIGFzeW5jIHRyYW5zaXRpb24gKGluZGljYXRlZCBieSBhbiBBU1lOQyByZXR1cm4gdmFsdWUgZnJvbSBsZWF2ZVN0YXRlKVxuICAgICAgICB2YXIgZnNtID0gdGhpcztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZnNtLnRyYW5zaXRpb24gPSBudWxsOyAvLyB0aGlzIG1ldGhvZCBzaG91bGQgb25seSBldmVyIGJlIGNhbGxlZCBvbmNlXG4gICAgICAgICAgZnNtLmN1cnJlbnQgPSB0bztcbiAgICAgICAgICBTdGF0ZU1hY2hpbmUuZW50ZXJTdGF0ZSggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmNoYW5nZVN0YXRlKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5TVUNDRUVERUQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5jYW5jZWwgPSBmdW5jdGlvbigpIHsgLy8gcHJvdmlkZSBhIHdheSBmb3IgY2FsbGVyIHRvIGNhbmNlbCBhc3luYyB0cmFuc2l0aW9uIGlmIGRlc2lyZWQgKGlzc3VlICMyMilcbiAgICAgICAgICBmc20udHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmFmdGVyRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVhdmUgPSBTdGF0ZU1hY2hpbmUubGVhdmVTdGF0ZSh0aGlzLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbGVhdmUpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0LkNBTkNFTExFRDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTdGF0ZU1hY2hpbmUuQVNZTkMgPT09IGxlYXZlKSB7XG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuUEVORElORztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy50cmFuc2l0aW9uKSAvLyBuZWVkIHRvIGNoZWNrIGluIGNhc2UgdXNlciBtYW51YWxseSBjYWxsZWQgdHJhbnNpdGlvbigpIGJ1dCBmb3Jnb3QgdG8gcmV0dXJuIFN0YXRlTWFjaGluZS5BU1lOQ1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgIH07XG4gICAgfVxuXG4gIH07IC8vIFN0YXRlTWFjaGluZVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLy89PT09PT1cbiAgLy8gTk9ERVxuICAvLz09PT09PVxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTdGF0ZU1hY2hpbmU7XG4gICAgfVxuICAgIGV4cG9ydHMuU3RhdGVNYWNoaW5lID0gU3RhdGVNYWNoaW5lO1xuICB9XG4gIC8vPT09PT09PT09PT09XG4gIC8vIEFNRC9SRVFVSVJFXG4gIC8vPT09PT09PT09PT09XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbihyZXF1aXJlKSB7IHJldHVybiBTdGF0ZU1hY2hpbmU7IH0pO1xuICB9XG4gIC8vPT09PT09PT1cbiAgLy8gQlJPV1NFUlxuICAvLz09PT09PT09XG4gIGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuICAvLz09PT09PT09PT09XG4gIC8vIFdFQiBXT1JLRVJcbiAgLy89PT09PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzZWxmLlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lL3N0YXRlLW1hY2hpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2Jvb3QuY29mZmVlXCI6IDE5LFxuXHRcIi4vZ2FtZS5jb2ZmZWVcIjogMjAsXG5cdFwiLi9pbnRyby5jb2ZmZWVcIjogMjEsXG5cdFwiLi9wcmVsb2FkLmNvZmZlZVwiOiAyMixcblx0XCIuL3Jlc2V0LmNvZmZlZVwiOiAyM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcyBeXFwuXFwvLipcXC5jb2ZmZWUkXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=