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
/* 2 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	var sfx;
	
	sfx = {};
	
	module.exports = sfx;


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
	    LEVELS: __webpack_require__(6),
	    SFX: __webpack_require__(7)
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

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
	
	Terrain = __webpack_require__(3);
	
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
	
	Text = __webpack_require__(1);
	
	StateMachine = __webpack_require__(26);
	
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
	    this.text = new Text(this.game, this.game_state, 'got me');
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

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

	var Digit, Integer, Text,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Text = __webpack_require__(1);
	
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
	    for (d = i = 0; i <= 9; d = ++i) {
	      this.left_digits[d] = new Digit(this.game, this.game_state, d, this.x, this.y);
	    }
	    this.right_digits = {};
	    for (d = j = 0; j <= 9; d = ++j) {
	      this.right_digits[d] = new Digit(this.game, this.game_state, d, this.x + 32, this.y);
	    }
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
	    return this.left_digit.hide();
	  };
	
	  Integer.prototype.hideRight = function() {
	    return this.right_digit.hide();
	  };
	
	  Integer.prototype.showLeft = function() {
	    return this.left_digit.show();
	  };
	
	  Integer.prototype.showRight = function() {
	    return this.right_digit.show();
	  };
	
	  Integer.prototype.hide = function() {
	    this.hideLeft();
	    return this.hideRight();
	  };
	
	  Integer.prototype.show = function() {
	    this.showLeft();
	    return this.showRight();
	  };
	
	  Integer.prototype.setValue = function(val) {
	    if (val == null) {
	      val = this.start_value;
	    }
	    this.value = val;
	    if (this.value < 10) {
	      this.left_digit = this.left_digits[0];
	      return this.right_digit = this.right_digits[String(this.value).split('')[0]];
	    } else {
	      this.left_digit = this.left_digits[String(this.value).split('')[0]];
	      return this.right_digit = this.right_digits[String(this.value).split('')[1]];
	    }
	  };
	
	  Integer.prototype.resetValue = function(val) {
	    return setValue(this.start_value);
	  };
	
	  Integer.prototype.inc = function(n) {
	    if (n == null) {
	      n = 1;
	    }
	    return increment(n);
	  };
	
	  Integer.prototype.dec = function(n) {
	    if (n == null) {
	      n = 1;
	    }
	    return decrement(n);
	  };
	
	  Integer.prototype.increment = function(n) {
	    if (n == null) {
	      n = 1;
	    }
	    return setValue(this.value + n);
	  };
	
	  Integer.prototype.decrement = function(n) {
	    if (n == null) {
	      n = 1;
	    }
	    return setValue(this.value - n);
	  };
	
	  return Integer;
	
	})();
	
	module.exports = Integer;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var CACTUS_POSITIONS, Cactus, POSITIONS, TREE_POSITIONS, TerrainGroup, Tree,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Cactus = __webpack_require__(11);
	
	Tree = __webpack_require__(17);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var Terrain, Tree,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Terrain = __webpack_require__(3);
	
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

	var Ceiling, Cowboy, Floor, Game, Integer, NO_AMMO_COUNTDOWN, STARTING_TIME, TerrainGroup, Text, WALL_OFFSET, Wagon, Wall;
	
	Floor = __webpack_require__(14);
	
	Ceiling = __webpack_require__(12);
	
	Wall = __webpack_require__(19);
	
	WALL_OFFSET = 275;
	
	Text = __webpack_require__(1);
	
	Integer = __webpack_require__(15);
	
	Cowboy = __webpack_require__(13);
	
	TerrainGroup = __webpack_require__(16);
	
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
	    this.text_gun_fight = new Text(this.game, this, 'gun fight', 408, 250);
	    this.text_get_ready = new Text(this.game, this, 'get ready', 408, 250);
	    this.text_insert_coin = new Text(this.game, this, 'insert coin', 700, 771);
	    this.text_draw = new Text(this.game, this, 'draw', 466, 250);
	    this.text_game = new Text(this.game, this, 'game', 370, 5);
	    this.text_over = new Text(this.game, this, 'over', 599, 5);
	    this.hud_score_player_one = new Integer(this.game, this, 0, 200, 5);
	    this.hud_score_player_two = new Integer(this.game, this, 0, 830, 5);
	    this.hud_time = new Integer(this.game, this, 70, 644, 5);
	    this.hud_countdown = new Integer(this.game, this, 10, 400, 5);
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
	      this.game.debug.body(this.right_wall);
	      this.game.debug.body(this.player_one);
	      return this.game.debug.body(this.player_two);
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
	    atlas_data = __webpack_require__(5);
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2MxZDc2ZTQ1MDg0ZGNhNzNkYTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1RleHQuY29mZmVlIiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvdGVycmFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvYXRsYXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2xldmVscy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvc2Z4LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2xhdW5jaC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0FtbW8uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9CdWxsZXRzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ2FjdHVzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ2VpbGluZy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0Nvd2JveS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0Zsb29yLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvSW50ZWdlci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1RlcnJhaW5Hcm91cC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1RyZWUuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9XYWdvbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1dhbGwuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2Jvb3QuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2dhbWUuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2ludHJvLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9wcmVsb2FkLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9tYWluLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9+L2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9zdGF0ZS1tYWNoaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzIF5cXC5cXC8uKlxcLmNvZmZlZSQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0dBQUE7OztBQUFNOzs7R0FDUyxjQUFDLElBQUQsRUFBUSxVQUFSLEVBQXFCLEtB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Y0FDRTtTQUFBLEtBQUssRUFBTDtTQUNBLEtBQUssRUFETDtRQWJGO01BREY7S0FnQkEsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqQkY7S0FnQ0EsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqQ0Y7S0FnREEsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqREY7S0FnRUEsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqRUY7S0FnRkEsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqRkY7S0FnR0EsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqR0Y7S0FnSEEsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqSEY7S0FnSUEsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqSUY7S0FnSkEsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqSkY7S0FnS0EsYUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqS0Y7S0FnTEEsYUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqTEY7S0FnTUEsa0JBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01Bak1GO0tBZ05BLGVBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBREY7T0FLQSxXQUFXLEtBTFg7T0FNQSxXQUFXLEtBTlg7T0FPQSxvQkFDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQVJGO09BWUEsY0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssRUFETDtRQWJGO01Bak5GO0tBZ09BLGtCQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssQ0FBTDtTQUNBLEtBQUssRUFETDtTQUVBLEtBQUssR0FGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpPRjtLQWdQQSxvQkFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqUEY7S0FnUUEsYUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqUUY7S0FnUkEsUUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEVBREw7U0FFQSxLQUFLLEdBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxHQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFqUkY7S0FnU0EsVUFDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEVBREw7U0FFQSxLQUFLLENBRkw7U0FHQSxLQUFLLENBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxDQUZMO1NBR0EsS0FBSyxDQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1FBYkY7TUFqU0Y7S0FnVEEsa0JBQ0U7T0FBQSxTQUNFO1NBQUEsS0FBSyxHQUFMO1NBQ0EsS0FBSyxFQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxF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RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLHFCQUFxQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7QUNsT0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qYXZhc2NyaXB0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNjMWQ3NmU0NTA4NGRjYTczZGEzXG4gKiovIiwiIyBEUkFXLCBHQU1FLCBHRVRfUkVBRFksIEdPVF9NRSwgR1VOX0ZJR0hULCBJTlNFUlRfQ09JTiwgT1ZFUlxuXG5jbGFzcyBUZXh0IGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgZnJhbWUsIHg9MCwgeT0wKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9IFN0cmluZyBmcmFtZVxuICAgIHN1cGVyIEBnYW1lLCB4LCB5LCBrZXksIFwidGV4dC8je2ZyYW1lLnJlcGxhY2UoJyAnLCdfJykudG9VcHBlckNhc2UoKX1cIlxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG4gICAgQGhpZGUoKVxuXG4gIHBsYWNlOiAoeCwgeSkgLT5cbiAgICBAeCA9IHhcbiAgICBAeSA9IHlcblxuICBzaG93OiAtPiBAcmVzZXQgQHgsIEB5XG5cbiAgaGlkZTogLT4gQGtpbGwoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1RleHQuY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJjbGFzcyBUZXJyYWluIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTAsIGZyYW1lPSdjYWN0dXMnKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9IFwidGVycmFpbi8je2ZyYW1lfVwiXG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgZnJhbWVcblxuICAgICMgc2V0IHBoeXNpY3MgYm9keVxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG4gICAgIyBhZGQgY3JvcCByZWN0XG4gICAgQGNyb3BSZWN0ID0gQGdhbWUuYWRkLmdyYXBoaWNzKClcblxuICAgIHJldHVybiBAXG5cbiAgZGVmb3JtOiAoY29sbGlzaW9uX3kpIC0+XG4gICAgaGVpZ2h0ID0gY29sbGlzaW9uX3kgLSBAeVxuICAgICMgZGVmb3JtIGJvZHlcbiAgICBAYm9keS5zZXRTaXplIEB3aWR0aCwgQGhlaWdodCAtIGhlaWdodCwgMCwgaGVpZ2h0XG4gICAgQGRyYXdSZWN0IGhlaWdodFxuXG4gIHJlbG9hZDogLT4gQGNyb3BSZWN0LmNsZWFyKClcblxuICBkcmF3UmVjdDogKGhlaWdodCkgLT5cbiAgICBAY3JvcFJlY3QubGluZVN0eWxlIDBcbiAgICBAY3JvcFJlY3QuYmVnaW5GaWxsIFwiMHgwMDAwMDBcIlxuICAgIEBjcm9wUmVjdC5kcmF3UmVjdCBAeCwgQHksIEB3aWR0aCwgaGVpZ2h0XG4gICAgQGNyb3BSZWN0LmVuZEZpbGwoKVxuICAgIEBnYW1lLndvcmxkLmJyaW5nVG9Ub3AgQGNyb3BSZWN0XG5cbm1vZHVsZS5leHBvcnRzID0gVGVycmFpblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvdGVycmFpbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwialF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJhdGxhcyA9XG4gICdmcmFtZXMnOlxuICAgICd0ZXh0LzAnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NDJcbiAgICAgICAgJ3knOiAxNzZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICd0ZXh0LzEnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0OTRcbiAgICAgICAgJ3knOiAyXG4gICAgICAgICd3JzogMTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDE2XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC8yJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDY4XG4gICAgICAgICd5JzogMTc2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC8zJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDQyXG4gICAgICAgICd5JzogMjE4XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC80JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDY4XG4gICAgICAgICd5JzogMjE4XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC81JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMTc0XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC82JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMjE2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC83JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMjU4XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC84JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMzAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC85JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzI4XG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9EUkFXJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzM2XG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxNTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR0FNRSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEzMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR0VUX1JFQURZJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDQ0XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9HT1RfTUUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyNzZcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyMTJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR1VOX0ZJR0hUJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9JTlNFUlRfQ09JTic6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAyXG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDMzMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9PVkVSJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjU0XG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAnYW1tbyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDI3NlxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDE4MFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAnYnVsbGV0JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDkwXG4gICAgICAgICd5JzogNDRcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOFxuICAgICAgICAnaCc6IDhcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICd0ZXJyYWluL2NhY3R1cyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ1OFxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDMyXG4gICAgICAgICdoJzogODhcbiAgICAnY293Ym95L2RlYWQvaGl0JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTk4XG4gICAgICAgICd5JzogNTg0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTMyXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAnY293Ym95L2RlYWQvcmlwJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjhcbiAgICAgICAgJ2gnOiA0NFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgJ2Nvd2JveS9oaWdoL2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTMyXG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2hpZ2gvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDE3NFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9oaWdoL3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAzMTJcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjMwXG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy9vbmUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMjhcbiAgICAgICAgJ3knOiAyMzhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEyNlxuICAgICAgICAneSc6IDMwOFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWQvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyMjRcbiAgICAgICAgJ3knOiAzMDhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkL29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDMyMlxuICAgICAgICAneSc6IDM3NlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWQvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogNDQ2XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNDUwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTk4XG4gICAgICAgICd5JzogNDQ2XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjk2XG4gICAgICAgICd5JzogNTE0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDM5NFxuICAgICAgICAneSc6IDUxNFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRsb3cvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogNTg0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNTg4XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAndGVycmFpbi90cmVlJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzc2XG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDY0XG4gICAgICAgICdoJzogMTA4XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAnd2Fnb24nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0MjBcbiAgICAgICAgJ3knOiAzNzZcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiA5NlxuICAnbWV0YSc6XG4gICAgJ2FwcCc6ICdodHRwOi8vd3d3LmNvZGVhbmR3ZWIuY29tL3RleHR1cmVwYWNrZXInXG4gICAgJ3ZlcnNpb24nOiAnMS4wJ1xuICAgICdpbWFnZSc6ICdhdGxhcy5wbmcnXG4gICAgJ2Zvcm1hdCc6ICdSR0JBODg4OCdcbiAgICAnc2l6ZSc6XG4gICAgICAndyc6IDUxMlxuICAgICAgJ2gnOiAxMDI0XG4gICAgJ3NjYWxlJzogJzEnXG4gICAgJ3NtYXJ0dXBkYXRlJzogJyRUZXh0dXJlUGFja2VyOlNtYXJ0VXBkYXRlOjEwNmI3YzI3MTZjNDIzNTU5MzUzZjE0YjQ0MTNkMjQzOmVmMzA3YjBhYmQxMjA3OTg4MTFhMzVkYjVlODYwNmNmOmNiY2U2YjUzZjBmNDllMGJmMTUxNzNjMjVjNDFmODc2JCdcblxubW9kdWxlLmV4cG9ydHMgPSBhdGxhc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWVcbiAqKi8iLCJsZXZlbHMgPSB7XG4gIDE6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgbnVtX2NhY3R1czogMVxuICAyOlxuICAgIHdhZ29uOiBmYWxzZVxuICAgIG51bV9jYWN0dXM6IDJcbiAgMzpcbiAgICB3YWdvbjogZmFsc2VcbiAgICBudW1fY2FjdHVzOiAzXG4gIDQ6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgbnVtX2NhY3R1czogNFxuICA1OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogNFxuICA2OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogNVxuICA3OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgbnVtX2NhY3R1czogMlxuICAgIG51bV90cmVlOiAxXG4gIDg6XG4gICAgd2Fnb246IHRydWVcbiAgICBudW1fY2FjdHVzOiAxXG4gICAgbnVtX3RyZWU6IDJcbiAgOTpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDJcbiAgICBudW1fdHJlZTogMlxuICAxMDpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDNcbiAgICBudW1fdHJlZTogMlxuICAxMTpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDRcbiAgICBudW1fdHJlZTogMlxuICAxMjpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIG51bV9jYWN0dXM6IDNcbiAgICBudW1fdHJlZTogM1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxldmVsc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMuY29mZmVlXG4gKiovIiwic2Z4ID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBzZnhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvc2Z4LmNvZmZlZVxuICoqLyIsIiR3aW5kb3cgPSAkKHdpbmRvdylcblxuIyBtb2JpbGUgZmxhZ1xuaXNNb2JpbGUgPSAtPlxuICBpZiggL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIClcbiAgICB0cnVlXG4gIGVsc2VcbiAgICBmYWxzZVxuXG5sYXVuY2ggPSAoY2RuPVwiL1wiLCB2ZXJzaW9uPVwiP3Y9MC4wLjBcIikgLT5cblxuICAjIDQ6M1xuICBnYW1lX3dpZHRoID0gMTA4OFxuICBnYW1lX2hlaWdodCA9IDgxNlxuXG4gICMgQ29uc3RydWN0IEdhbWVcbiAgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcbiAgICBnYW1lX3dpZHRoLCAgICMgd2lkdGhcbiAgICBnYW1lX2hlaWdodCwgICMgaGVpZ2h0XG4gICAgUGhhc2VyLkFVVE8sICAjIHJlbmRlcmVyXG4gICAgJ2dhbWUnLCAgICAgICAjIElEIG9mIHBhcmVudCBlbGVtZW50XG4gICAgJ2Jvb3QnLCAgICAgICAjIHN0YXRlXG4gICAgZmFsc2UsICAgICAgICAjIHRyYW5zcGFyZW50XG4gICAgZmFsc2UsICAgICAgICAjIGFudGlhbGlhc1xuICAgIG51bGwgICAgICAgICAgIyBwaHlzaWNzQ29uZmlnXG4gIClcblxuICAjIGNkblxuICBnYW1lLmNkbiA9IGNkblxuICBnYW1lLmhvc3R1cmwgPSB1bmRlZmluZWQgI2hvc3R1cmxcblxuICAjIGdhbWUgdmVyc2lvblxuICBnYW1lLnZlcnNpb24gPSB2ZXJzaW9uXG5cbiAgIyBkZWJ1Z1xuICBnYW1lLmRlYnVnTW9kZSA9IGZhbHNlXG4gIGdhbWUuZGVidWdNb2RlID0gdHJ1ZVxuXG4gIGdhbWUuZW5hYmxlTXVzaWMgPSAhZ2FtZS5kZWJ1Z01vZGVcbiAgZ2FtZS5lbmFibGVTRlggPSAhZ2FtZS5kZWJ1Z01vZGVcblxuICAjIGNvbnN0YW50c1xuICBnYW1lLmNvbnN0YW50cyA9XG4gICAgU1RBVEVTOiBbJ2Jvb3QnLCAncHJlbG9hZCcsICdpbnRybycsICdnYW1lJywgJ3Jlc2V0J11cbiAgICBMRVZFTFM6IHJlcXVpcmUgJ2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvbGV2ZWxzJ1xuICAgIFNGWDogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZngnXG5cbiAgIyBkZWZhdWx0IGxldmVsXG4gIGdhbWUubGV2ZWwgPSAxXG5cbiAgIyBrZWVwIHRoZSBnYW1lIHdpdGhpbiB0aGUgcGFnZVxuICBnYW1lLnNjYWxlciA9IC0+XG4gICAgJGdhbWUgPSAkKFwiI2dhbWVcIilcbiAgICAkY2FudmFzID0gJChcImNhbnZhc1wiKVxuICAgICR3aW5kb3cgPSAkKHdpbmRvdylcblxuICAgIGlmICFpc01vYmlsZSgpXG4gICAgICAkZ2FtZSA9ICQoXCIjZ2FtZVwiKVxuICAgICAgJGNhbnZhcyA9ICQoXCJjYW52YXNcIilcbiAgICAgICR3aW5kb3cgPSAkKHdpbmRvdylcblxuICAgICAgaWYgJGdhbWUuaGVpZ2h0KCkgPiAkd2luZG93LmhlaWdodCgpIC0gMTUwXG4gICAgICAgICRnYW1lLmNzcyhcIm1heC1oZWlnaHRcIiwgKCR3aW5kb3cuaGVpZ2h0KCkgLSAxNTApICsgXCJweFwiKVxuICAgICAgZWxzZVxuICAgICAgICAkZ2FtZS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwiYXV0b1wiKVxuXG4gICMgcmVxdWlyZSBzdGF0ZXMgYW5kIGJvb3QhXG4gIGdhbWUuc3RhdGUuYWRkIHN0YXRlLCByZXF1aXJlKFwiLi9zdGF0ZXMvI3tzdGF0ZX0uY29mZmVlXCIpIGZvciBzdGF0ZSBpbiBnYW1lLmNvbnN0YW50cy5TVEFURVNcbiAgZ2FtZS5zdGF0ZS5zdGFydCAnYm9vdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsYXVuY2hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9sYXVuY2guY29mZmVlXG4gKiovIiwiY2xhc3MgQW1tbyBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBwbGF5ZXIpIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gJ2FtbW8nXG4gICAgeCA9IGlmIEBwbGF5ZXIuaXNfcGxheWVyX29uZSB0aGVuIDkyIGVsc2UgODE2XG4gICAgeSA9IEBnYW1lLmhlaWdodCAtIDQ1XG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgZnJhbWVcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG4gICAgIyBhZGQgY3JvcCByZWN0XG4gICAgQGNyb3BSZWN0ID0gQGdhbWUuYWRkLmdyYXBoaWNzKClcblxuICAgIHJldHVybiBAXG5cbiAgY3JvcDogLT5cbiAgICB3aWR0aCA9IEB3aWR0aCAtIEBwbGF5ZXIubnVtX2J1bGxldHMgLyA2ICogQHdpZHRoXG4gICAgQGRyYXdSZWN0IHdpZHRoXG5cbiAgcmVsb2FkOiAtPiBAY3JvcFJlY3QuY2xlYXIoKVxuXG4gIGRyYXdSZWN0OiAod2lkdGgpIC0+XG4gICAgQGNyb3BSZWN0LmxpbmVTdHlsZSAwXG4gICAgQGNyb3BSZWN0LmJlZ2luRmlsbCBcIjB4MDAwMDAwXCJcbiAgICBAY3JvcFJlY3QuZHJhd1JlY3QgQHgsIEB5LCB3aWR0aCwgQGhlaWdodFxuICAgIEBjcm9wUmVjdC5lbmRGaWxsKClcblxubW9kdWxlLmV4cG9ydHMgPSBBbW1vXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9BbW1vLmNvZmZlZVxuICoqLyIsIiMgYnVsbGV0IHBvc2l0aW9uIGNvbmZpZ1xuR1VOX1BPU19DT05GSUcgPVxuICBoaWdoOiAgICB7eDogNDUsIHk6IDE1LCBkZWc6IC01Mn1cbiAgbWVkaGlnaDoge3g6IDUwLCB5OiAzNSwgZGVnOiAtMjZ9XG4gIG1lZDogICAgIHt4OiA1NSwgeTogNDYsIGRlZzogMH1cbiAgbWVkbG93OiAge3g6IDUwLCB5OiA3NSwgZGVnOiAyMn1cbiAgbG93OiAgICAge3g6IDQ1LCB5OiA4OCwgZGVnOiA0Mn1cblxuIyBzcGVlZCBvZiBmaXJlZCBidWxsZXRcblNQRUVEID0gMTAwMFxuXG5jbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSAtPlxuICAgIGtleSA9ICdhdGxhcydcbiAgICBmcmFtZSA9ICdidWxsZXQnXG4gICAgc3VwZXIgQGdhbWUsIEBwbGF5ZXIuYm9keS54LCBAcGxheWVyLmJvZHkueSwga2V5LCBmcmFtZVxuXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQFxuXG4gICAgIyB2aXNpYmlsaXR5IHZhclxuICAgIEB0aW1lID0gRGF0ZS5ub3coKVxuXG4gICAgIyBib3VuY2Ugb2ZmIHN1cmZhY2VzXG4gICAgQGJvZHkuYm91bmNlLnNldCAxXG5cbiAgICAjIHBsYXllclxuICAgIEBpc19wbGF5ZXJfb25lID0gQHBsYXllci5pc19wbGF5ZXJfb25lXG5cbiAgICAjIGJvdW5kc1xuICAgIEBvdXRPZkJvdW5kc0tpbGwgPSB0cnVlXG5cbiAgICAjIGNsZWFuIHVwXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcbiAgICBAa2lsbCgpXG5cbiAgICByZXR1cm4gQFxuXG4gIHNob290OiAtPlxuICAgIGd1bl9wb3MgPSBAcGxheWVyLmd1bl9wb3NbQHBsYXllci5ndW5fcG9zX2luZGV4XVxuICAgIHBvcyA9IEdVTl9QT1NfQ09ORklHW2d1bl9wb3NdXG4gICAgeCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gQHBsYXllci5ib2R5LnJpZ2h0ICsgcG9zLnggZWxzZSBAcGxheWVyLmJvZHkueCAtIHBvcy54XG4gICAgeSA9IEBwbGF5ZXIuYm9keS55ICsgcG9zLnlcbiAgICBhbmdsZSA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gcG9zLmRlZyBlbHNlIDE4MCAtIHBvcy5kZWdcbiAgICAjIHJldml2ZSB0aGUgYnVsbGV0XG4gICAgQHJlc2V0IHgsIHlcbiAgICAjIHNldCB2ZWxvY2l0eVxuICAgIEBnYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlIGFuZ2xlLCBTUEVFRCwgQGJvZHkudmVsb2NpdHlcblxuY2xhc3MgQnVsbGV0cyBleHRlbmRzIFBoYXNlci5Hcm91cFxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHBsYXllcikgLT5cbiAgICBzdXBlciBAZ2FtZSwgbnVsbCwgJ2J1bGxldHMnLCBmYWxzZSwgdHJ1ZSwgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHlcbiAgICBAYWRkIG5ldyBCdWxsZXQoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSBmb3IgbiBpbiBbMS4uQHBsYXllci5udW1fYnVsbGV0c11cblxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cbiAgc2hvb3Q6IC0+IEBnZXRGaXJzdERlYWQoKS5zaG9vdCgpXG5cbm1vZHVsZS5leHBvcnRzID0gQnVsbGV0c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQnVsbGV0cy5jb2ZmZWVcbiAqKi8iLCJUZXJyYWluID0gcmVxdWlyZSAnLi90ZXJyYWluLmNvZmZlZSdcblxuY2xhc3MgQ2FjdHVzIGV4dGVuZHMgVGVycmFpblxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIEBnYW1lX3N0YXRlLCB4LCB5LCAnY2FjdHVzJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhY3R1c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQ2FjdHVzLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ2VpbGluZyBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgeV9vZmZzZXQ9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgMCwgeV9vZmZzZXRcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICBAYm9keS5zZXRTaXplIEBnYW1lLndvcmxkLndpZHRoLCA1LCAwLCAwXG4gICAgQGJvZHkuYWxsb3dHcmF2aXR5ID0gZmFsc2VcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0NlaWxpbmcuY29mZmVlXG4gKiovIiwiQnVsbGV0cyA9IHJlcXVpcmUgJy4vQnVsbGV0cy5jb2ZmZWUnXG5BbW1vID0gcmVxdWlyZSAnLi9BbW1vLmNvZmZlZSdcblRleHQgPSByZXF1aXJlICcuL1RleHQuY29mZmVlJ1xuU3RhdGVNYWNoaW5lID0gcmVxdWlyZSAnamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lJ1xuXG4jIFBPU0lUSU9OIENPTlNUQU5UU1xuUExBWUVSX09ORV9YID0gMjAwXG5QTEFZRVJfT05FX1kgPSA0OTVcblBMQVlFUl9UV09fWCA9IDg4OFxuUExBWUVSX1RXT19ZID0gNDk1XG5cbiMgTU9WRU1FTlQgQ09OU1RBTlRTXG5TUEVFRCA9IDYwXG5ERUxUQSA9IDE1XG5GUkFNRVJBVEUgPSA3XG5cbiMgQ09OVFJPTCBDT05TVEFOVFNcblBMQVlFUl9PTkVfQ09OVFJPTFMgPVxuICBtb3ZlX3VwOiAnVydcbiAgbW92ZV9kb3duOiAnUydcbiAgbW92ZV9sZWZ0OiAnQSdcbiAgbW92ZV9yaWdodDogJ0QnXG4gIGFpbV91cDogJ1EnXG4gIGFpbV9kb3duOiAnRSdcbiAgc2hvb3Q6ICdGJ1xuXG5QTEFZRVJfVFdPX0NPTlRST0xTID1cbiAgbW92ZV91cDogJ0knXG4gIG1vdmVfZG93bjogJ0snXG4gIG1vdmVfbGVmdDogJ0onXG4gIG1vdmVfcmlnaHQ6ICdMJ1xuICBhaW1fdXA6ICdPJ1xuICBhaW1fZG93bjogJ1UnXG4gIHNob290OiAnSCdcblxuY2xhc3MgQ293Ym95IGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQGlzX3BsYXllcl9vbmU9dHJ1ZSkgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnY293Ym95L21lZC90d28nXG4gICAgeCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gUExBWUVSX09ORV9YIGVsc2UgUExBWUVSX1RXT19YXG4gICAgeSA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gUExBWUVSX09ORV9ZIGVsc2UgUExBWUVSX1RXT19ZXG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgZnJhbWVcblxuICAgICMgZW5hYmxlIGFyY2FkZSBwaHlzaWNzXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgIyBzYXZlIHdpZHRoIGFuZCBoZWlnaHQgb2Ygc3ByaXRlIGJvZHlcbiAgICBAd2lkdGggPSBAYm9keS53aWR0aFxuICAgIEBoZWlnaHQgPSBAYm9keS5oZWlnaHRcbiAgICAjIGNoYW5nZSBib2R5IHNpemUgZm9yIG1vcmUgYWNjdXJhdGUgaGl0IGNvbGxpc2lvblxuICAgIEBib2R5LnNldFNpemUgNDUsIDEzNiwgMjUsIDBcbiAgICBAYm9keS5zZXRTaXplIDQ1LCAxMzYsIC0yNSwgMCBpZiBAaXNfcGxheWVyX29uZVxuICAgICMgY29sbGlkZSB3aXRoIHdvcmxkXG4gICAgQGJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZVxuICAgICMgZG9uJ3QgbGV0IGJ1bGxldCBwaHlzaWNzIHB1c2ggeWEgYmFja1xuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICAjIHNldCBhbmNob3IgdG8gaG9yaXpvbnRhbCBjZW50ZXIgc28gc3ByaXRlIGZsaXBzIGFyb3VuZCBpdHMgbWlkZGxlXG4gICAgQGFuY2hvci5zZXRUbyAuNSwgMVxuICAgICMgZmxpcCBzcHJpdGUgaWYgaXMgcGxheWVyIHR3b1xuICAgIEBzY2FsZS54ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiAtMSBlbHNlIDFcblxuICAgICMgZGlyZWN0aW9uIG9iamVjdFxuICAgIEBkaXJlY3Rpb24gPVxuICAgICAgdXA6IGZhbHNlXG4gICAgICBkb3duOiBmYWxzZVxuICAgICAgbGVmdDogZmFsc2VcbiAgICAgIHJpZ2h0OiBmYWxzZVxuXG4gICAgIyBhaW0gb2JqZWN0XG4gICAgQGFpbSA9XG4gICAgICB1cDogZmFsc2VcbiAgICAgIGRvd246IGZhbHNlXG5cbiAgICAjIG1vdmVtZW50IHZhcnNcbiAgICBAdGltZSA9IERhdGUubm93KClcbiAgICBAbW92aW5nID0gZmFsc2VcbiAgICBAZGVhZCA9IGZhbHNlXG4gICAgQGlucHV0X2Rpc2FibGVkID0gdHJ1ZVxuXG4gICAgIyBmcmFtZSB2YXJzXG4gICAgQGd1bl9wb3MgPSBbJ2xvdycsJ21lZGxvdycsJ21lZCcsJ21lZGhpZ2gnLCdoaWdoJ11cbiAgICBAbGVnX3BvcyA9IFsndHdvJywnb25lJywnY3Jvc3MnXVxuICAgIEBndW5fcG9zX2luZGV4ID0gMlxuICAgIEBsZWdfcG9zX2luZGV4ID0gMVxuXG4gICAgIyBodWQgdmFyc1xuICAgIEB3aW5zID0gMFxuICAgIEBudW1fYnVsbGV0cyA9IDZcbiAgICBAYnVsbGV0cyA9IG5ldyBCdWxsZXRzIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQFxuICAgIEBhbW1vID0gbmV3IEFtbW8gQGdhbWUsIEBnYW1lX3N0YXRlLCBAXG5cbiAgICAjIHRleHQgZm9yIGRpZSBzdGF0ZVxuICAgIEB0ZXh0ID0gbmV3IFRleHQgQGdhbWUsIEBnYW1lX3N0YXRlLCAnZ290IG1lJ1xuXG4gICAgIyBzZXR1cCBjb250cm9sc1xuICAgIEBzZXR1cENvbnRyb2xzKClcbiAgICAjIHNldHVwIGFuaW1hdGlvbnNcbiAgICBAc2V0dXBBbmltYXRpb25zKClcbiAgICAjIGNyZWF0ZSBzdGF0ZSBtYWNoaW5lXG4gICAgQGNyZWF0ZVN0YXRlTWFjaGluZSgpXG5cbiAgICAjIGNsZWFuIHVwXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcbiAgICAjIEBraWxsKClcblxuICAgIHJldHVybiBAXG5cbiAgdXBkYXRlOiAtPlxuICAgICMgaGFuZGxlIGluY3JlbWVudGFsIG1vdmVtZW50XG4gICAgaWYgQHN0YXRlLmN1cnJlbnQgIT0gJ2R5aW5nJyBhbmQgIUBpbnB1dF9kaXNhYmxlZFxuICAgICAgY3VycmVudF90aW1lID0gRGF0ZS5ub3coKVxuICAgICAgaWYgY3VycmVudF90aW1lIC0gQHRpbWUgPiBTUEVFRFxuICAgICAgICBAYm9keS55IC09IERFTFRBIGlmIEBkaXJlY3Rpb24udXAgICAgYW5kIEBib2R5LnkgPiBAZ2FtZV9zdGF0ZS5jZWlsaW5nLnlcbiAgICAgICAgQGJvZHkueSArPSBERUxUQSBpZiBAZGlyZWN0aW9uLmRvd24gIGFuZCBAYm9keS55IDwgQGdhbWVfc3RhdGUuZmxvb3IueSAtIEBib2R5LmhlaWdodFxuICAgICAgICBpZiBAaXNfcGxheWVyX29uZVxuICAgICAgICAgIEBib2R5LnggLT0gREVMVEEgaWYgQGRpcmVjdGlvbi5sZWZ0ICBhbmQgQGJvZHkueCA+IEBnYW1lX3N0YXRlLmxlZnRfd2FsbF9vdXRlci5ib2R5LnhcbiAgICAgICAgICBAYm9keS54ICs9IERFTFRBIGlmIEBkaXJlY3Rpb24ucmlnaHQgYW5kIEBib2R5LnJpZ2h0IDwgQGdhbWVfc3RhdGUubGVmdF93YWxsLmJvZHkueFxuICAgICAgICBlbHNlXG4gICAgICAgICAgQGJvZHkueCAtPSBERUxUQSBpZiBAZGlyZWN0aW9uLmxlZnQgIGFuZCBAYm9keS54ID4gQGdhbWVfc3RhdGUucmlnaHRfd2FsbC5ib2R5LnhcbiAgICAgICAgICBAYm9keS54ICs9IERFTFRBIGlmIEBkaXJlY3Rpb24ucmlnaHQgYW5kIEBib2R5LnJpZ2h0IDwgQGdhbWVfc3RhdGUucmlnaHRfd2FsbF9vdXRlci5ib2R5LnhcbiAgICAgICAgIyBAYW5pbWF0ZV9haW1fdXAoKSAgaWYgQGFpbS51cFxuICAgICAgICAjIEBhbmltYXRlX2FpbV9kb3duKCkgaWYgQGFpbS5kb3duXG4gICAgICAgIEB0aW1lID0gY3VycmVudF90aW1lXG5cbiAgICAgICMgaXMgdGhlIHBsYXllciBtb3Zpbmc/XG4gICAgICBAbW92aW5nID0gZmFsc2UgdW5sZXNzIEBkaXJlY3Rpb24udXAgfHwgQGRpcmVjdGlvbi5kb3duIHx8IEBkaXJlY3Rpb24ubGVmdCB8fCBAZGlyZWN0aW9uLnJpZ2h0XG5cbiAgICAgICMgdHJpZ2dlciBtb3ZlIGFuaW1hdGlvblxuICAgICAgQG1vdmUoKSBpZiAgQG1vdmluZyBhbmQgQHN0YXRlLmN1cnJlbnQgIT0gJ21vdmluZydcbiAgICAgIEBpZGxlKCkgaWYgIUBtb3ZpbmcgYW5kIEBzdGF0ZS5jdXJyZW50ICE9ICdpZGxlJ1xuXG4gICAgIyBoYW5kbGUgZHlpbmcgc2VxdWVuY2VcbiAgICBlbHNlXG4gICAgICAjIHNob3cgXCJHT1QgTUUhXCIgdGV4dFxuICAgICAgY3VycmVudF9mcmFtZSA9IEBhbmltYXRpb25zLmN1cnJlbnRGcmFtZS5uYW1lXG4gICAgICBpZiBjdXJyZW50X2ZyYW1lIGlzICdjb3dib3kvZGVhZC9yaXAnIGFuZCAhQHRleHQudmlzaWJsZVxuICAgICAgICB4ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBAYm9keS5yaWdodCAtIEB0ZXh0LndpZHRoIC8gMiBlbHNlIEBib2R5LnggLSBAdGV4dC53aWR0aCAvIDJcbiAgICAgICAgeSA9IEBib2R5LnlcbiAgICAgICAgQHRleHQucGxhY2UgeCwgeVxuICAgICAgICBAdGV4dC5zaG93KClcblxuICAgICAgIyByZXNldCB0aGUgcGxheWVyc1xuXG4gICMgZGlzYWJsZSAvIGVuYWJsZSBtb3ZlbWVudFxuICBlbmFibGVJbnB1dDogLT4gQGlucHV0X2Rpc2FibGVkID0gZmFsc2VcbiAgZGlzYWJsZUlucHV0OiAtPiBAaW5wdXRfZGlzYWJsZWQgPSB0cnVlXG4gIHRvZ2dsZUlucHV0OiAtPiBAaW5wdXRfZGlzYWJsZWQgPSAhQGlucHV0X2Rpc2FibGVkXG5cbiAgIyBjaGFuZ2Ugc3RhdGVcbiAgbW92ZTogICAgICAgICAgIC0+IEBzdGF0ZS5fbW92ZSgpXG4gIGlkbGU6ICAgICAgICAgICAtPiBAc3RhdGUuX2lkbGUoKVxuICBkaWU6ICAgICAgICAgICAgLT4gQHN0YXRlLl9kaWUoKVxuXG4gICMgY29udHJvbCBkaXJlY3Rpb25cbiAgbW92ZV91cDogICAgICAgIC0+IEBkaXJlY3Rpb24udXAgICAgPSB0cnVlXG4gIG1vdmVfbGVmdDogICAgICAtPiBAZGlyZWN0aW9uLmxlZnQgID0gdHJ1ZVxuICBtb3ZlX3JpZ2h0OiAgICAgLT4gQGRpcmVjdGlvbi5yaWdodCA9IHRydWVcbiAgbW92ZV9kb3duOiAgICAgIC0+IEBkaXJlY3Rpb24uZG93biAgPSB0cnVlXG4gIG1vdmVfdXBfb2ZmOiAgICAtPiBAZGlyZWN0aW9uLnVwICAgID0gZmFsc2VcbiAgbW92ZV9sZWZ0X29mZjogIC0+IEBkaXJlY3Rpb24ubGVmdCAgPSBmYWxzZVxuICBtb3ZlX3JpZ2h0X29mZjogLT4gQGRpcmVjdGlvbi5yaWdodCA9IGZhbHNlXG4gIG1vdmVfZG93bl9vZmY6ICAtPiBAZGlyZWN0aW9uLmRvd24gID0gZmFsc2VcblxuICBhaW1fdXA6ICAgICAgICAgLT4gQGFuaW1hdGVfYWltX3VwKClcbiAgYWltX2Rvd246ICAgICAgIC0+IEBhbmltYXRlX2FpbV9kb3duKClcbiAgIyBhaW1fdXA6ICAgICAgICAgLT4gQGFpbS51cCAgICAgICAgICA9IHRydWVcbiAgIyBhaW1fZG93bjogICAgICAgLT4gQGFpbS5kb3duICAgICAgICA9IHRydWVcbiAgIyBhaW1fdXBfb2ZmOiAgICAgLT4gQGFpbS51cCAgICAgICAgICA9IGZhbHNlXG4gICMgYWltX2Rvd25fb2ZmOiAgIC0+IEBhaW0uZG93biAgICAgICAgPSBmYWxzZVxuXG4gICMgZnVsbCBhbW1vIVxuICByZWxvYWQ6IC0+XG4gICAgQG51bV9idWxsZXRzID0gNlxuICAgIEBhbW1vLnJlbG9hZCgpXG5cbiAgIyBoYW5kbGUgYWltaW5nIGFuaW1hdGlvbnNcbiAgYW5pbWF0ZV9haW1fdXA6IC0+XG4gICAgY3VycmVudF9mcmFtZSA9IEBhbmltYXRpb25zLmN1cnJlbnRGcmFtZS5uYW1lXG4gICAgQGd1bl9wb3NfaW5kZXggKz0gMSBpZiBAZ3VuX3Bvc19pbmRleCA8IEBndW5fcG9zLmxlbmd0aCAtIDFcblxuICAgIGZvciBwb3MsIGluZGV4IGluIEBsZWdfcG9zXG4gICAgICBAbGVnX3Bvc19pbmRleCA9IGluZGV4XG4gICAgICBicmVhayBpZiBjdXJyZW50X2ZyYW1lLm1hdGNoIHBvc1xuXG4gICAgQGFuaW1hdGlvbnMuc3RvcCgpXG4gICAgQGFuaW1hdGlvbnMucGxheSBcIm1vdmUtI3tAZ3VuX3Bvc1tAZ3VuX3Bvc19pbmRleF19XCJcbiAgICBAYW5pbWF0aW9ucy5uZXh0IEBsZWdfcG9zX2luZGV4XG5cbiAgYW5pbWF0ZV9haW1fZG93bjogLT5cbiAgICBjdXJyZW50X2ZyYW1lID0gQGFuaW1hdGlvbnMuY3VycmVudEZyYW1lLm5hbWVcbiAgICBAZ3VuX3Bvc19pbmRleCAtPSAxIGlmIEBndW5fcG9zX2luZGV4ID4gMFxuXG4gICAgZm9yIHBvcywgaW5kZXggaW4gQGxlZ19wb3NcbiAgICAgIEBsZWdfcG9zX2luZGV4ID0gaW5kZXhcbiAgICAgIGJyZWFrIGlmIGN1cnJlbnRfZnJhbWUubWF0Y2ggcG9zXG5cbiAgICBAYW5pbWF0aW9ucy5zdG9wKClcbiAgICBAYW5pbWF0aW9ucy5wbGF5IFwibW92ZS0je0BndW5fcG9zW0BndW5fcG9zX2luZGV4XX1cIlxuICAgIEBhbmltYXRpb25zLm5leHQgQGxlZ19wb3NfaW5kZXhcblxuICAjIHNob290IVxuICBzaG9vdDogLT5cbiAgICBpZiBAbnVtX2J1bGxldHMgPiAwIGFuZCAhQGlucHV0X2Rpc2FibGVkXG4gICAgICBAbnVtX2J1bGxldHMgLT0gMVxuICAgICAgQGFtbW8uY3JvcCgpXG4gICAgICBAYnVsbGV0cy5zaG9vdCgpXG5cbiAgc2V0dXBDb250cm9sczogLT5cbiAgICAjIG1hcCBjb250cm9sIGtleXNcbiAgICBjb250cm9scyA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gUExBWUVSX09ORV9DT05UUk9MUyBlbHNlIFBMQVlFUl9UV09fQ09OVFJPTFNcbiAgICBfLmVhY2ggY29udHJvbHMsIChrZXksIGFjdGlvbikgPT5cbiAgICAgIGlucHV0ID0gQGdhbWVfc3RhdGUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5IFBoYXNlci5LZXlib2FyZFtrZXldXG4gICAgICBpbnB1dC5vbkRvd24uYWRkID0+IEBbYWN0aW9uXSgpXG4gICAgICBpbnB1dC5vbkRvd24uYWRkID0+IEBtb3ZpbmcgPSB0cnVlIGlmIGFjdGlvbi5tYXRjaCAnbW92ZSdcbiAgICAgIGlucHV0Lm9uVXAuYWRkICAgPT4gQFtcIiN7YWN0aW9ufV9vZmZcIl0oKSBpZiBhY3Rpb24ubWF0Y2ggJ21vdmUnXG4gICAgICAjIGlucHV0Lm9uVXAuYWRkICAgPT4gQFtcIiN7YWN0aW9ufV9vZmZcIl0oKVxuXG4gIHNldHVwQW5pbWF0aW9uczogLT5cbiAgICAjIGRpZSBhbmltYXRpb25cbiAgICBAYW5pbWF0aW9ucy5hZGQgJ2RpZScsIFtcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9yaXAnXG4gICAgICAnY293Ym95L2RlYWQvcmlwJ1xuICAgICAgJ2Nvd2JveS9kZWFkL3JpcCdcbiAgICBdLCBGUkFNRVJBVEUsIGZhbHNlXG5cbiAgICAjIG1vdmUgYW5pbWF0aW5vc1xuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1oaWdoJywgW1xuICAgICAgJ2Nvd2JveS9oaWdoL3R3bydcbiAgICAgICdjb3dib3kvaGlnaC9vbmUnXG4gICAgICAnY293Ym95L2hpZ2gvY3Jvc3MnXG4gICAgICAnY293Ym95L2hpZ2gvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1sb3cnLCBbXG4gICAgICAnY293Ym95L2xvdy90d28nXG4gICAgICAnY293Ym95L2xvdy9vbmUnXG4gICAgICAnY293Ym95L2xvdy9jcm9zcydcbiAgICAgICdjb3dib3kvbG93L29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbWVkaGlnaCcsIFtcbiAgICAgICdjb3dib3kvbWVkaGlnaC90d28nXG4gICAgICAnY293Ym95L21lZGhpZ2gvb25lJ1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbWVkbG93JywgW1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvdHdvJ1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvb25lJ1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvY3Jvc3MnXG4gICAgICAnY293Ym95L21lZGxvdy9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLW1lZCcsIFtcbiAgICAgICdjb3dib3kvbWVkL3R3bydcbiAgICAgICdjb3dib3kvbWVkL29uZSdcbiAgICAgICdjb3dib3kvbWVkL2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9tZWQvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuXG4gIGNyZWF0ZVN0YXRlTWFjaGluZTogLT5cbiAgICBAc3RhdGUgPSBTdGF0ZU1hY2hpbmUuY3JlYXRlXG4gICAgICBpbml0aWFsOiAnX2lkbGUnXG4gICAgICBldmVudHM6IFtcbiAgICAgICAgeyBuYW1lOiAnX2lkbGUnLCBmcm9tOiAnKicsIHRvOiAnaWRsaW5nJyB9XG4gICAgICAgIHsgbmFtZTogJ19tb3ZlJywgZnJvbTogJyonLCB0bzogJ21vdmluZycgfVxuICAgICAgICB7IG5hbWU6ICdfZGllJywgIGZyb206ICcqJywgdG86ICdkeWluZycgIH0gXVxuICAgICAgY2FsbGJhY2tzOlxuICAgICAgICBvbl9pZGxlOiAoZXZlbnQsIGZyb20sIHRvKSA9PiBAYW5pbWF0aW9ucy5zdG9wIG51bGwsIHRydWVcbiAgICAgICAgb25fbW92ZTogKGV2ZW50LCBmcm9tLCB0bykgPT4gQHBsYXkgXCJtb3ZlLSN7QGd1bl9wb3NbQGd1bl9wb3NfaW5kZXhdfVwiXG4gICAgICAgIG9uX2RpZTogKGV2ZW50LCBmcm9tLCB0bykgID0+IEBwbGF5IFwiZGllXCJcblxubW9kdWxlLmV4cG9ydHMgPSBDb3dib3lcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0Nvd2JveS5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEZsb29yIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCB5X29mZnNldD0wKSAtPlxuICAgIHN1cGVyIEBnYW1lLCAwLCBAZ2FtZS5oZWlnaHQgKyB5X29mZnNldFxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgIEBib2R5LnNldFNpemUgQGdhbWUud29ybGQud2lkdGgsIDUsIDAsIDBcbiAgICBAYm9keS5hbGxvd0dyYXZpdHkgPSBmYWxzZVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvRmxvb3IuY29mZmVlXG4gKiovIiwiVGV4dCA9IHJlcXVpcmUgJy4vVGV4dC5jb2ZmZWUnXG5cbmNsYXNzIERpZ2l0IGV4dGVuZHMgVGV4dFxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgZnJhbWUsIHg9MCwgeT0wKSAtPlxuICAgIHN1cGVyIEBnYW1lLCBAZ2FtZV9zdGF0ZSwgZnJhbWUsIHgsIHlcblxuY2xhc3MgSW50ZWdlclxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHN0YXJ0X3ZhbHVlPTAsIEB4PTAsIEB5PTApIC0+XG4gICAgQHZhbHVlID0gQHN0YXJ0X3ZhbHVlXG5cbiAgICBAbGVmdF9kaWdpdHMgPSB7fVxuICAgIEBsZWZ0X2RpZ2l0c1tkXSA9IG5ldyBEaWdpdCBAZ2FtZSwgQGdhbWVfc3RhdGUsIGQsIEB4LCBAeSBmb3IgZCBpbiBbMC4uOV1cblxuICAgIEByaWdodF9kaWdpdHMgPSB7fVxuICAgIEByaWdodF9kaWdpdHNbZF0gPSBuZXcgRGlnaXQgQGdhbWUsIEBnYW1lX3N0YXRlLCBkLCBAeCArIDMyLCBAeSBmb3IgZCBpbiBbMC4uOV1cblxuICAgIEBzZXRWYWx1ZSgpXG5cbiAgICAjIEBzaG93KClcblxuICBoaWRlQWxsTGVmdDogLT4gQGxlZnRfZGlnaXRzW2RdLmhpZGUoKSBmb3IgZCBpbiBbMC4uOV1cbiAgaGlkZUFsbFJpZ2h0OiAtPiBAcmlnaHRfZGlnaXRzW2RdLmhpZGUoKSBmb3IgZCBpbiBbMC4uOV1cblxuICBoaWRlTGVmdDogLT4gQGxlZnRfZGlnaXQuaGlkZSgpXG4gIGhpZGVSaWdodDogLT4gQHJpZ2h0X2RpZ2l0LmhpZGUoKVxuXG4gIHNob3dMZWZ0OiAtPiBAbGVmdF9kaWdpdC5zaG93KClcbiAgc2hvd1JpZ2h0OiAtPiBAcmlnaHRfZGlnaXQuc2hvdygpXG5cbiAgaGlkZTogLT5cbiAgICBAaGlkZUxlZnQoKVxuICAgIEBoaWRlUmlnaHQoKVxuXG4gIHNob3c6IC0+XG4gICAgQHNob3dMZWZ0KClcbiAgICBAc2hvd1JpZ2h0KClcblxuICBzZXRWYWx1ZTogKHZhbD1Ac3RhcnRfdmFsdWUpIC0+XG4gICAgQHZhbHVlID0gdmFsXG4gICAgIyBoYW5kbGUgc2luZ2xlIGRpZ2l0IHN0YXJ0IHZhbHVlXG4gICAgaWYgQHZhbHVlIDwgMTBcbiAgICAgIEBsZWZ0X2RpZ2l0ID0gQGxlZnRfZGlnaXRzWzBdXG4gICAgICBAcmlnaHRfZGlnaXQgPSBAcmlnaHRfZGlnaXRzW1N0cmluZyhAdmFsdWUpLnNwbGl0KCcnKVswXV1cbiAgICBlbHNlXG4gICAgICBAbGVmdF9kaWdpdCA9IEBsZWZ0X2RpZ2l0c1tTdHJpbmcoQHZhbHVlKS5zcGxpdCgnJylbMF1dXG4gICAgICBAcmlnaHRfZGlnaXQgPSBAcmlnaHRfZGlnaXRzW1N0cmluZyhAdmFsdWUpLnNwbGl0KCcnKVsxXV1cblxuICByZXNldFZhbHVlOiAodmFsKSAtPiBzZXRWYWx1ZShAc3RhcnRfdmFsdWUpXG4gIGluYzogKG49MSkgLT4gaW5jcmVtZW50KG4pXG4gIGRlYzogKG49MSkgLT4gZGVjcmVtZW50KG4pXG4gIGluY3JlbWVudDogKG49MSkgLT4gc2V0VmFsdWUoQHZhbHVlICsgbilcbiAgZGVjcmVtZW50OiAobj0xKSAtPiBzZXRWYWx1ZShAdmFsdWUgLSBuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVnZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0ludGVnZXIuY29mZmVlXG4gKiovIiwiQ2FjdHVzID0gcmVxdWlyZSAnLi9DYWN0dXMuY29mZmVlJ1xuVHJlZSA9IHJlcXVpcmUgJy4vVHJlZS5jb2ZmZWUnXG5cbiMgZ2FtZSB3aWR0aCwgaGVpZ2h0ID0gMTA4OCwgODE2XG4jIGNhY3R1cyB3aWR0aCwgaGVpZ2h0ID0gMzIsIDg4XG4jIHRyZWUgd2lkdGgsIGhlaWdodCA9IDY0LCAxMDhcblxuQ0FDVFVTX1BPU0lUSU9OUyA9XG4gIHRvcF9sZWZ0OiB7IHg6IDMyOCwgeTogMTAwIH1cbiAgdG9wX3JpZ2h0OiB7IHg6IDcxNCwgeTogMTAwIH1cbiAgY2VudGVyX2xlZnQ6IHsgeDogNDM2LCB5OiAzNTAgfVxuICBjZW50ZXI6IHsgeDogNTI4LCB5OiAzNTAgfVxuICBjZW50ZXJfcmlnaHQ6IHsgeDogNjE0LCB5OiAzNTAgfVxuICBib3R0b21fbGVmdDogeyB4OiAzMjgsIHk6IDYwMCB9XG4gIGJvdHRvbV9yaWdodDogeyB4OiA3MTQsIHk6IDYwMCB9XG5cblRSRUVfUE9TSVRJT05TID1cbiAgdG9wX2xlZnQ6IHsgeDogMzI4LCB5OiAxNTAgfVxuICB0b3BfcmlnaHQ6IHsgeDogNzE0LCB5OiAxNTAgfVxuICBib3R0b21fbGVmdDogeyB4OiAzMjgsIHk6IDU1MCB9XG4gIGJvdHRvbV9yaWdodDogeyB4OiA3MTQsIHk6IDU1MCB9XG5cblBPU0lUSU9OUyA9IFtcbiAgXCJ0b3BfbGVmdFwiXG4gIFwidG9wX3JpZ2h0XCJcbiAgXCJib3R0b21fbGVmdFwiXG4gIFwiYm90dG9tX3JpZ2h0XCJcbl1cblxuY2xhc3MgVGVycmFpbkdyb3VwIGV4dGVuZHMgUGhhc2VyLkdyb3VwXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAbGV2ZWxfZGF0YT17fSkgLT5cbiAgICBzdXBlciBAZ2FtZSwgbnVsbCwgJ1RlcnJhaW5Hcm91cCdcbiAgICBAYnVpbGQoKVxuXG4gICAgIyBhZGQgdG8gZ2FtZVxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cbiAgIyByZW1vdmUgdGVycmFpbiBzcHJpdGVzXG4gIHJlc2V0OiAtPiBAcmVtb3ZlQ2hpbGRyZW4oKVxuXG4gICMgYnVpbGQgYSBuZXcgc2V0IG9mIHRlcnJhaW4gc3ByaXRlc1xuICBidWlsZDogKGxldmVsX2RhdGE9QGxldmVsX2RhdGEpIC0+XG4gICAgIyBvdmVyd3JpdGUgdGhlIGxldmVsX2RhdGFcbiAgICBAbGV2ZWxfZGF0YSA9IGxldmVsX2RhdGFcbiAgICAjIGRldGVybWluZSBpZiBsZXZlbCBoYXMgYSB3YWdvblxuICAgIEBpc193YWdvbiA9IEBsZXZlbF9kYXRhLndhZ29uXG4gICAgQG51bV9jYWN0dXMgPSBAbGV2ZWxfZGF0YS5udW1fY2FjdHVzXG4gICAgQG51bV90cmVlID0gQGxldmVsX2RhdGEubnVtX3RyZWVcbiAgICAjIGRldGVybWluZSBwb3NpdGlvbnMgdG8gcGx1Y2sgZnJvbVxuICAgIEBwb3NpdGlvbnMgPSBfLnNodWZmbGUgUE9TSVRJT05TXG4gICAgQGNhY3R1c19wb3NpdGlvbnMgPSBpZiBAaXNfd2Fnb24gdGhlbiBbJ2NlbnRlcl9sZWZ0JywgJ2NlbnRlcl9yaWdodCddIGVsc2UgWydjZW50ZXInXVxuICAgICMgYWRkIHRlcnJhaW4gY2hpbGRyZW4gdG8gdGhlIGdyb3VwXG4gICAgQGFkZENhY3R1cygpIGZvciBjYWN0dXMgaW4gWzAuLi5AbnVtX2NhY3R1c11cbiAgICBAYWRkVHJlZSgpICAgZm9yIHRyZWUgaW4gWzAuLi5AbnVtX3RyZWVdXG5cbiAgYWRkQ2FjdHVzOiAtPlxuICAgIHBvcyA9IEBnZXRUZXJyYWluUG9zaXRpb24gJ2NhY3R1cydcbiAgICBAYWRkIG5ldyBDYWN0dXMgQGdhbWUsIEBnYW1lX3N0YXRlLCBwb3MueCwgcG9zLnlcblxuICBhZGRUcmVlOiAtPlxuICAgIHBvcyA9IEBnZXRUZXJyYWluUG9zaXRpb24gJ3RyZWUnXG4gICAgQGFkZCBuZXcgVHJlZSBAZ2FtZSwgQGdhbWVfc3RhdGUsIHBvcy54LCBwb3MueVxuXG4gIGdldFRlcnJhaW5Qb3NpdGlvbjogKGtleSkgLT5cbiAgICBwb3MgPSB1bmRlZmluZWRcbiAgICBzd2l0Y2gga2V5XG4gICAgICB3aGVuICdjYWN0dXMnXG4gICAgICAgIGlmIEBjYWN0dXNfcG9zaXRpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICBwb3Nfa2V5ID0gQGNhY3R1c19wb3NpdGlvbnMucG9wKClcbiAgICAgICAgICBwb3MgPSBDQUNUVVNfUE9TSVRJT05TW3Bvc19rZXldXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwb3Nfa2V5ID0gQHBvc2l0aW9ucy5wb3AoKVxuICAgICAgICAgIHBvcyA9IENBQ1RVU19QT1NJVElPTlNbcG9zX2tleV1cbiAgICAgIHdoZW4gJ3RyZWUnXG4gICAgICAgIHBvc19rZXkgPSBAcG9zaXRpb25zLnBvcCgpXG4gICAgICAgIHBvcyA9IFRSRUVfUE9TSVRJT05TW3Bvc19rZXldXG4gICAgcmV0dXJuIHBvc1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcnJhaW5Hcm91cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvVGVycmFpbkdyb3VwLmNvZmZlZVxuICoqLyIsIlRlcnJhaW4gPSByZXF1aXJlICcuL3RlcnJhaW4uY29mZmVlJ1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgVGVycmFpblxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgeD0wLCB5PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIEBnYW1lX3N0YXRlLCB4LCB5LCAndHJlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBUcmVlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9UcmVlLmNvZmZlZVxuICoqLyIsIlNQRUVEID0gMzAwXG5ERUxUQSA9IDE1XG5cbmNsYXNzIFdhZ29uIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSkgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnd2Fnb24nXG4gICAgIyBzdXBlciBAZ2FtZSwgNTAwLCA4MTYgLSA5NlxuICAgIHN1cGVyIEBnYW1lLCA1MDAsIDY3NSwga2V5LCBmcmFtZVxuXG4gICAgIyBzZXQgcGh5c2ljcyBib2R5XG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuaW1tb3ZhYmxlID0gdHJ1ZVxuXG4gICAgQHJvbGxpbmcgPSBmYWxzZVxuICAgIEBkaXJlY3Rpb24gPSAndXAnXG4gICAgQHRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAjIGNsZWFuIHVwXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcbiAgICBAa2lsbCgpXG5cbiAgICByZXR1cm4gQFxuXG4gIHJldml2ZTogLT4gQHJlc2V0IDUwMCwgNjc1XG5cbiAgcm9sbDogLT4gQHJvbGxpbmcgPSB0cnVlXG5cbiAgc3RvcDogLT4gQHJvbGxpbmcgPSBmYWxzZVxuXG4gIHN0YXJ0OiAtPlxuICAgIEByZXZpdmUoKVxuICAgIEByb2xsKClcblxuICB1cGRhdGU6IC0+XG4gICAgY3VycmVudF90aW1lID0gRGF0ZS5ub3coKVxuICAgIGlmIEByb2xsaW5nIGFuZCAoY3VycmVudF90aW1lIC0gQHRpbWUpID4gU1BFRURcbiAgICAgIEBkaXJlY3Rpb24gPSAndXAnIGlmIEBkaXJlY3Rpb24gaXMgJ2Rvd24nIGFuZCBAYm9keS55ID49IDY3NVxuICAgICAgQGRpcmVjdGlvbiA9ICdkb3duJyBpZiBAZGlyZWN0aW9uIGlzICd1cCcgYW5kIEBib2R5LnkgPD0gNDVcbiAgICAgIHNpZ24gPSBpZiBAZGlyZWN0aW9uIGlzICd1cCcgdGhlbiAtMSBlbHNlIDFcblxuICAgICAgQGJvZHkueSArPSBzaWduICogREVMVEFcblxuICAgICAgIyBjb25zb2xlLmxvZyBAdGltZVxuICAgICAgQHRpbWUgPSBjdXJyZW50X3RpbWVcblxubW9kdWxlLmV4cG9ydHMgPSBXYWdvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvV2Fnb24uY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXYWxsIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCB4X29mZnNldD0wKSAtPlxuICAgIHN1cGVyIEBnYW1lLCB4X29mZnNldCwgMFxuICAgIEBnYW1lLnBoeXNpY3MuZW5hYmxlIEAsIFBoYXNlci5QaHlzaWNzLkFSQ0FERVxuICAgIEBib2R5LnNldFNpemUgMSwgQGdhbWUud29ybGQuaGVpZ2h0LCAwLCAwXG4gICAgQGJvZHkuYWxsb3dHcmF2aXR5ID0gZmFsc2VcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1dhbGwuY29mZmVlXG4gKiovIiwiY2xhc3MgQm9vdFxuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgIyBzZXQgYmFja2dyb3VuZCBjb2xvciB0byBibGFja1xuICAgIEBnYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwMDAwJ1xuXG4gICAgIyBTY2FsZSB0aGUgZ2FtZSBpbiB0aGUgYnJvd3NlclxuICAgIEBzY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlXG4gICAgQHNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTExcblxuICAgICMgc3RhcnQgcHJlbG9hZFxuICAgIEBzdGF0ZS5zdGFydCAncHJlbG9hZCdcblxuICBwcmVsb2FkOiAtPlxuICAgICMgc2V0IGludGlhbCBzY2FsZVxuICAgIEBnYW1lLnNjYWxlcigpXG5cbm1vZHVsZS5leHBvcnRzID0gQm9vdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9ib290LmNvZmZlZVxuICoqLyIsIiMgQk9VTkRTXG5GbG9vciAgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvRmxvb3IuY29mZmVlJ1xuQ2VpbGluZyAgPSByZXF1aXJlICcuLi9zcHJpdGVzL0NlaWxpbmcuY29mZmVlJ1xuV2FsbCAgICAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1dhbGwuY29mZmVlJ1xuV0FMTF9PRkZTRVQgPSAyNzVcblxuIyBIVURcblRleHQgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RleHQuY29mZmVlJ1xuSW50ZWdlciA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvSW50ZWdlci5jb2ZmZWUnXG5cbiMgU1BSSVRFU1xuQ293Ym95ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9Db3dib3kuY29mZmVlJ1xuVGVycmFpbkdyb3VwID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9UZXJyYWluR3JvdXAuY29mZmVlJ1xuV2Fnb24gID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9XYWdvbi5jb2ZmZWUnXG5cblNUQVJUSU5HX1RJTUUgPSA3MCAjc2Vjb25kc1xuTk9fQU1NT19DT1VOVERPV04gPSAxMCAjc2Vjb25kc1xuXG5jbGFzcyBHYW1lXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICAjIGNyZWF0ZSB0aGUgYm91bmRzXG4gICAgQGNlaWxpbmcgICAgPSBuZXcgQ2VpbGluZyBAZ2FtZSwgNDVcbiAgICBAZmxvb3IgICAgICA9IG5ldyBGbG9vciBAZ2FtZSwgLTQ1XG4gICAgQGxlZnRfd2FsbF9vdXRlciA9IG5ldyBXYWxsIEBnYW1lLCA5MlxuICAgIEBsZWZ0X3dhbGwgID0gbmV3IFdhbGwgQGdhbWUsIEBnYW1lLndvcmxkLndpZHRoIC8gMiAtIFdBTExfT0ZGU0VUXG4gICAgQHJpZ2h0X3dhbGxfb3V0ZXIgPSBuZXcgV2FsbCBAZ2FtZSwgOTk2XG4gICAgQHJpZ2h0X3dhbGwgPSBuZXcgV2FsbCBAZ2FtZSwgQGdhbWUud29ybGQud2lkdGggLyAyICArIFdBTExfT0ZGU0VUXG5cbiAgICAjIHNldHVwIHRoZSB0ZXh0XG4gICAgQHRleHRfZ3VuX2ZpZ2h0ID0gICBuZXcgVGV4dCBAZ2FtZSwgQCwgJ2d1biBmaWdodCcsIDQwOCwgMjUwXG4gICAgQHRleHRfZ2V0X3JlYWR5ID0gICBuZXcgVGV4dCBAZ2FtZSwgQCwgJ2dldCByZWFkeScsIDQwOCwgMjUwXG4gICAgQHRleHRfaW5zZXJ0X2NvaW4gPSBuZXcgVGV4dCBAZ2FtZSwgQCwgJ2luc2VydCBjb2luJywgNzAwLCA3NzFcbiAgICBAdGV4dF9kcmF3ID0gICAgICAgIG5ldyBUZXh0IEBnYW1lLCBALCAnZHJhdycsIDQ2NiwgMjUwXG4gICAgQHRleHRfZ2FtZSA9ICAgICAgICBuZXcgVGV4dCBAZ2FtZSwgQCwgJ2dhbWUnLCAzNzAsIDVcbiAgICBAdGV4dF9vdmVyID0gICAgICAgIG5ldyBUZXh0IEBnYW1lLCBALCAnb3ZlcicsIDU5OSwgNVxuXG4gICAgIyBzZXR1cCB0aGUgaHVkXG4gICAgQGh1ZF9zY29yZV9wbGF5ZXJfb25lID0gbmV3IEludGVnZXIgQGdhbWUsIEAsIDAsIDIwMCwgNVxuICAgIEBodWRfc2NvcmVfcGxheWVyX3R3byA9IG5ldyBJbnRlZ2VyIEBnYW1lLCBALCAwLCA4MzAsIDVcbiAgICBAaHVkX3RpbWUgICAgICAgICAgICAgPSBuZXcgSW50ZWdlciBAZ2FtZSwgQCwgNzAsIDY0NCwgNVxuICAgIEBodWRfY291bnRkb3duICAgICAgICA9IG5ldyBJbnRlZ2VyIEBnYW1lLCBALCAxMCwgNDAwLCA1XG5cbiAgICAjIGNyZWF0ZSB0aGUgcGxheWVyc1xuICAgIEBwbGF5ZXJfb25lID0gbmV3IENvd2JveSBAZ2FtZSwgQFxuICAgIEBwbGF5ZXJfdHdvID0gbmV3IENvd2JveSBAZ2FtZSwgQCwgZmFsc2VcblxuICAgICMgY29sbGlzaW9uIGVsZW1lbnRzXG4gICAgQGJ1bGxldHMgID0gWyBAcGxheWVyX29uZS5idWxsZXRzLCBAcGxheWVyX3R3by5idWxsZXRzIF1cbiAgICBAd2FsbHMgICAgPSBbIEBsZWZ0X3dhbGwsIEByaWdodF93YWxsIF1cbiAgICBAc3VyZmFjZXMgPSBbIEBjZWlsaW5nLCBAZmxvb3IgXVxuICAgIEBwbGF5ZXJzICA9IFsgQHBsYXllcl9vbmUsIEBwbGF5ZXJfdHdvIF1cbiAgICBAd2Fnb24gPSBuZXcgV2Fnb24gQGdhbWUsIEBnYW1lX3N0YXRlXG4gICAgQHRlcnJhaW4gPSB1bmRlZmluZWQgIyBpbnN0YW50aWF0ZSBpbiBzZXR1cExldmVsKClcblxuICAgICMgc3RhcnQgdGhlIGdhbWVcbiAgICBAc3RhcnQoKVxuXG4gIHN0YXJ0OiAtPlxuICAgICMgaW50cm8gdGhlIGxldmVsLCBwbGFjZSB0ZXJyYWluIG9uIHRoZSBtYXBcbiAgICBAc2V0dXBMZXZlbCgpXG4gICAgIyBlbmFibGUgbW92ZW1lbnRcbiAgICBAcGxheWVyX29uZS5lbmFibGVJbnB1dCgpXG4gICAgQHBsYXllcl90d28uZW5hYmxlSW5wdXQoKVxuXG4gIHVwZGF0ZTogLT5cbiAgICAjIHNldCBib3VuY2Ugc3VyZmFjZXMgZm9yIGJ1bGxldHNcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlIEBidWxsZXRzLCBAc3VyZmFjZXNcblxuICAgICMgc2V0IHBsYXllciwgYnVsbGV0IGNvbGxpc2lvbnNcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlIEBidWxsZXRzLCBAcGxheWVycywgKHBsYXllciwgYnVsbGV0KSA9PlxuICAgICAgIyBkaXNhYmxlIGlucHV0c1xuICAgICAgQHBsYXllcl9vbmUuZGlzYWJsZUlucHV0KClcbiAgICAgIEBwbGF5ZXJfdHdvLmRpc2FibGVJbnB1dCgpXG4gICAgICAjIGtpbGwgYWxsIGJ1bGxldHMgaW4gdGhlIGZpZWxkXG4gICAgICBAcGxheWVyX29uZS5idWxsZXRzLmZvckVhY2hBbGl2ZSAoYikgLT4gYi5raWxsKClcbiAgICAgIEBwbGF5ZXJfdHdvLmJ1bGxldHMuZm9yRWFjaEFsaXZlIChiKSAtPiBiLmtpbGwoKVxuICAgICAgIyBpbmNyZWFzZSBzY29yZSBvZiB3aW5uaW5nIHBsYXllclxuICAgICAgYnVsbGV0LnBsYXllci5pZGxlKClcbiAgICAgIGJ1bGxldC5wbGF5ZXIud2lucyArPSAxXG4gICAgICAjIGluY3JlYXNlIGdhbWUncyBsZXZlbFxuICAgICAgQGdhbWUubGV2ZWwgKz0gMVxuICAgICAgIyB0cmlnZ2VyIHBsYXllciBkZWF0aFxuICAgICAgcGxheWVyLmRpZSgpXG5cbiAgICAjIHNldCB0ZXJyYWluLCBidWxsZXQgY29sbGlzaW9uc1xuICAgIEBnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUgQGJ1bGxldHMsIEB0ZXJyYWluLCAoYnVsbGV0LCB0ZXJyYWluKSA9PlxuICAgICAgY29sbGlzaW9uX3kgPSBidWxsZXQueSArIGJ1bGxldC5oZWlnaHRcbiAgICAgIGJ1bGxldC5raWxsKClcbiAgICAgIHRlcnJhaW4uZGVmb3JtIGNvbGxpc2lvbl95XG5cbiAgICAjIHNldCB3YWdvbiwgYnVsbGV0IGNvbGxpc2lvbnNcbiAgICBAZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlIEBidWxsZXRzLCBAd2Fnb24sICh3YWdvbiwgYnVsbGV0KSA9PlxuICAgICAgYnVsbGV0LmtpbGwoKVxuXG4gIHJlbmRlcjogLT5cbiAgICBpZiBAZ2FtZS5kZWJ1Z01vZGVcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQGNlaWxpbmdcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQGZsb29yXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBsZWZ0X3dhbGxcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHJpZ2h0X3dhbGxcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl9vbmVcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl90d29cbiAgICAgICMgQGdhbWUuZGVidWcuYm9keSBAcGxheWVyX29uZS5idWxsZXRzXG4gICAgICAjIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl90d28uYnVsbGV0c1xuICAgICAgIyBAZ2FtZS5kZWJ1Zy5ib2R5IEB3YWdvblxuXG4gIHNldHVwTGV2ZWw6IC0+XG4gICAgbGV2ZWxfbnVtID0gQGdhbWUubGV2ZWxcbiAgICBsZXZlbCA9IEBnYW1lLmNvbnN0YW50cy5MRVZFTFNbXCIje2xldmVsX251bX1cIl1cbiAgICBAdGVycmFpbiA9IG5ldyBUZXJyYWluR3JvdXAgQGdhbWUsIEAsIGxldmVsXG4gICAgQHdhZ29uLnN0YXJ0KCkgaWYgbGV2ZWwud2Fnb25cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2dhbWUuY29mZmVlXG4gKiovIiwiIyBTUFJJVEVTXG4jIENvd2JveSA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ293Ym95LmNvZmZlZSdcbiMgQnVsbGV0ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9CdWxsZXQuY29mZmVlJ1xuIyBDYWN0dXMgPSByZXF1aXJlICcuLi9zcHJpdGVzL0NhY3R1cy5jb2ZmZWUnXG4jIFRyZWUgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVHJlZS5jb2ZmZWUnXG4jIFdhZ29uICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2Fnb24uY29mZmVlJ1xuXG4jIEhVRFxuIyBUaW1lciAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RpbWVyLmNvZmZlZSdcbiMgQW1tbyAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9BbW1vLmNvZmZlZSdcblxuXG5jbGFzcyBJbnRyb1xuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgY29uc29sZS5sb2cgJ2ludHJvJ1xuXG5cbiAgc3RhcnQ6IC0+XG5cbiAgdXBkYXRlOiAtPlxuXG5tb2R1bGUuZXhwb3J0cyA9IEludHJvXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2ludHJvLmNvZmZlZVxuICoqLyIsImNsYXNzIFByZWxvYWRcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgcHJlbG9hZDogLT5cbiAgICBAbG9hZC5jcm9zc09yaWdpbiA9IEBnYW1lLmhvc3R1cmwgdW5sZXNzIEBnYW1lLmNkbiBpcyAnLydcblxuICAgICMgTE9BRCBTVFVGRlNcbiAgICBDRE4gPSBAZ2FtZS5jZG5cbiAgICAjIFNQUklURVNcbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgdGV4dHVyZV91cmwgPSBcIiN7Q0ROfWltYWdlcy9hdGxhcy5wbmdcIlxuICAgIGF0bGFzX2RhdGEgPSByZXF1aXJlICcuLi9jb25zdGFudHMvYXRsYXMuY29mZmVlJ1xuICAgIEBsb2FkLmF0bGFzSlNPTkhhc2gga2V5LCB0ZXh0dXJlX3VybCwgbnVsbCwgYXRsYXNfZGF0YVxuXG4gICAgIyBTRlhcbiAgICBfLmVhY2ggQGdhbWUuY29uc3RhbnRzLlNGWCwgKHNmeCkgPT5cbiAgICAgIGFzc2V0ID0gQGxvYWQuYXVkaW8gc2Z4LFxuICAgICAgW1wiI3tDRE59YXVkaW8vI3tzZnh9Lm1wMyN7QGdhbWUudmVyc2lvbn1cIixcbiAgICAgIFwiI3tDRE59YXVkaW8vI3tzZnh9Lm9nZyN7QGdhbWUudmVyc2lvbn1cIl1cbiAgICAgIGFzc2V0LmNyb3NzT3JpZ2luID0gQGxvYWQuY3Jvc3NPcmlnaW4gIHVubGVzcyBAZ2FtZS5jZG4gaXMgJy8nXG5cbiAgdXBkYXRlOiAtPlxuICAgIGlmIEBnYW1lLmRlYnVnTW9kZVxuICAgICAgQHN0YXRlLnN0YXJ0ICdnYW1lJ1xuICAgIGVsc2VcbiAgICAgIEBzdGF0ZS5zdGFydCAnaW50cm8nXG5cbm1vZHVsZS5leHBvcnRzID0gUHJlbG9hZFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9wcmVsb2FkLmNvZmZlZVxuICoqLyIsIkxhdW5jaEdhbWUgPSByZXF1aXJlICcuL2dhbWUvbGF1bmNoLmNvZmZlZSdcblxuI3JlYWR5XG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuXG5cdGNvbnNvbGUubG9nICdhbGwgcmVhZHknXG5cdExhdW5jaEdhbWUoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9tYWluLmNvZmZlZVxuICoqLyIsIi8qXG5cbiAgSmF2YXNjcmlwdCBTdGF0ZSBNYWNoaW5lIExpYnJhcnkgLSBodHRwczovL2dpdGh1Yi5jb20vamFrZXNnb3Jkb24vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lXG5cbiAgQ29weXJpZ2h0IChjKSAyMDEyLCAyMDEzLCAyMDE0LCAyMDE1LCBKYWtlIEdvcmRvbiBhbmQgY29udHJpYnV0b3JzXG4gIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlc2dvcmRvbi9qYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gIHZhciBTdGF0ZU1hY2hpbmUgPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgVkVSU0lPTjogXCIyLjMuNVwiLFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFJlc3VsdDoge1xuICAgICAgU1VDQ0VFREVEOiAgICAxLCAvLyB0aGUgZXZlbnQgdHJhbnNpdGlvbmVkIHN1Y2Nlc3NmdWxseSBmcm9tIG9uZSBzdGF0ZSB0byBhbm90aGVyXG4gICAgICBOT1RSQU5TSVRJT046IDIsIC8vIHRoZSBldmVudCB3YXMgc3VjY2Vzc2Z1bGwgYnV0IG5vIHN0YXRlIHRyYW5zaXRpb24gd2FzIG5lY2Vzc2FyeVxuICAgICAgQ0FOQ0VMTEVEOiAgICAzLCAvLyB0aGUgZXZlbnQgd2FzIGNhbmNlbGxlZCBieSB0aGUgY2FsbGVyIGluIGEgYmVmb3JlRXZlbnQgY2FsbGJhY2tcbiAgICAgIFBFTkRJTkc6ICAgICAgNCAgLy8gdGhlIGV2ZW50IGlzIGFzeW5jaHJvbm91cyBhbmQgdGhlIGNhbGxlciBpcyBpbiBjb250cm9sIG9mIHdoZW4gdGhlIHRyYW5zaXRpb24gb2NjdXJzXG4gICAgfSxcblxuICAgIEVycm9yOiB7XG4gICAgICBJTlZBTElEX1RSQU5TSVRJT046IDEwMCwgLy8gY2FsbGVyIHRyaWVkIHRvIGZpcmUgYW4gZXZlbnQgdGhhdCB3YXMgaW5uYXByb3ByaWF0ZSBpbiB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgUEVORElOR19UUkFOU0lUSU9OOiAyMDAsIC8vIGNhbGxlciB0cmllZCB0byBmaXJlIGFuIGV2ZW50IHdoaWxlIGFuIGFzeW5jIHRyYW5zaXRpb24gd2FzIHN0aWxsIHBlbmRpbmdcbiAgICAgIElOVkFMSURfQ0FMTEJBQ0s6ICAgMzAwIC8vIGNhbGxlciBwcm92aWRlZCBjYWxsYmFjayBmdW5jdGlvbiB0aHJldyBhbiBleGNlcHRpb25cbiAgICB9LFxuXG4gICAgV0lMRENBUkQ6ICcqJyxcbiAgICBBU1lOQzogJ2FzeW5jJyxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKGNmZywgdGFyZ2V0KSB7XG5cbiAgICAgIHZhciBpbml0aWFsICAgICAgPSAodHlwZW9mIGNmZy5pbml0aWFsID09ICdzdHJpbmcnKSA/IHsgc3RhdGU6IGNmZy5pbml0aWFsIH0gOiBjZmcuaW5pdGlhbDsgLy8gYWxsb3cgZm9yIGEgc2ltcGxlIHN0cmluZywgb3IgYW4gb2JqZWN0IHdpdGggeyBzdGF0ZTogJ2ZvbycsIGV2ZW50OiAnc2V0dXAnLCBkZWZlcjogdHJ1ZXxmYWxzZSB9XG4gICAgICB2YXIgdGVybWluYWwgICAgID0gY2ZnLnRlcm1pbmFsIHx8IGNmZ1snZmluYWwnXTtcbiAgICAgIHZhciBmc20gICAgICAgICAgPSB0YXJnZXQgfHwgY2ZnLnRhcmdldCAgfHwge307XG4gICAgICB2YXIgZXZlbnRzICAgICAgID0gY2ZnLmV2ZW50cyB8fCBbXTtcbiAgICAgIHZhciBjYWxsYmFja3MgICAgPSBjZmcuY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgdmFyIG1hcCAgICAgICAgICA9IHt9OyAvLyB0cmFjayBzdGF0ZSB0cmFuc2l0aW9ucyBhbGxvd2VkIGZvciBhbiBldmVudCB7IGV2ZW50OiB7IGZyb206IFsgdG8gXSB9IH1cbiAgICAgIHZhciB0cmFuc2l0aW9ucyAgPSB7fTsgLy8gdHJhY2sgZXZlbnRzIGFsbG93ZWQgZnJvbSBhIHN0YXRlICAgICAgICAgICAgeyBzdGF0ZTogWyBldmVudCBdIH1cblxuICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGZyb20gPSAoZS5mcm9tIGluc3RhbmNlb2YgQXJyYXkpID8gZS5mcm9tIDogKGUuZnJvbSA/IFtlLmZyb21dIDogW1N0YXRlTWFjaGluZS5XSUxEQ0FSRF0pOyAvLyBhbGxvdyAnd2lsZGNhcmQnIHRyYW5zaXRpb24gaWYgJ2Zyb20nIGlzIG5vdCBzcGVjaWZpZWRcbiAgICAgICAgbWFwW2UubmFtZV0gPSBtYXBbZS5uYW1lXSB8fCB7fTtcbiAgICAgICAgZm9yICh2YXIgbiA9IDAgOyBuIDwgZnJvbS5sZW5ndGggOyBuKyspIHtcbiAgICAgICAgICB0cmFuc2l0aW9uc1tmcm9tW25dXSA9IHRyYW5zaXRpb25zW2Zyb21bbl1dIHx8IFtdO1xuICAgICAgICAgIHRyYW5zaXRpb25zW2Zyb21bbl1dLnB1c2goZS5uYW1lKTtcblxuICAgICAgICAgIG1hcFtlLm5hbWVdW2Zyb21bbl1dID0gZS50byB8fCBmcm9tW25dOyAvLyBhbGxvdyBuby1vcCB0cmFuc2l0aW9uIGlmICd0bycgaXMgbm90IHNwZWNpZmllZFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICBpbml0aWFsLmV2ZW50ID0gaW5pdGlhbC5ldmVudCB8fCAnc3RhcnR1cCc7XG4gICAgICAgIGFkZCh7IG5hbWU6IGluaXRpYWwuZXZlbnQsIGZyb206ICdub25lJywgdG86IGluaXRpYWwuc3RhdGUgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvcih2YXIgbiA9IDAgOyBuIDwgZXZlbnRzLmxlbmd0aCA7IG4rKylcbiAgICAgICAgYWRkKGV2ZW50c1tuXSk7XG5cbiAgICAgIGZvcih2YXIgbmFtZSBpbiBtYXApIHtcbiAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICBmc21bbmFtZV0gPSBTdGF0ZU1hY2hpbmUuYnVpbGRFdmVudChuYW1lLCBtYXBbbmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBmb3IodmFyIG5hbWUgaW4gY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChjYWxsYmFja3MuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgICAgZnNtW25hbWVdID0gY2FsbGJhY2tzW25hbWVdXG4gICAgICB9XG5cbiAgICAgIGZzbS5jdXJyZW50ICAgICA9ICdub25lJztcbiAgICAgIGZzbS5pcyAgICAgICAgICA9IGZ1bmN0aW9uKHN0YXRlKSB7IHJldHVybiAoc3RhdGUgaW5zdGFuY2VvZiBBcnJheSkgPyAoc3RhdGUuaW5kZXhPZih0aGlzLmN1cnJlbnQpID49IDApIDogKHRoaXMuY3VycmVudCA9PT0gc3RhdGUpOyB9O1xuICAgICAgZnNtLmNhbiAgICAgICAgID0gZnVuY3Rpb24oZXZlbnQpIHsgcmV0dXJuICF0aGlzLnRyYW5zaXRpb24gJiYgKG1hcFtldmVudF0uaGFzT3duUHJvcGVydHkodGhpcy5jdXJyZW50KSB8fCBtYXBbZXZlbnRdLmhhc093blByb3BlcnR5KFN0YXRlTWFjaGluZS5XSUxEQ0FSRCkpOyB9XG4gICAgICBmc20uY2Fubm90ICAgICAgPSBmdW5jdGlvbihldmVudCkgeyByZXR1cm4gIXRoaXMuY2FuKGV2ZW50KTsgfTtcbiAgICAgIGZzbS50cmFuc2l0aW9ucyA9IGZ1bmN0aW9uKCkgICAgICB7IHJldHVybiB0cmFuc2l0aW9uc1t0aGlzLmN1cnJlbnRdOyB9O1xuICAgICAgZnNtLmlzRmluaXNoZWQgID0gZnVuY3Rpb24oKSAgICAgIHsgcmV0dXJuIHRoaXMuaXModGVybWluYWwpOyB9O1xuICAgICAgZnNtLmVycm9yICAgICAgID0gY2ZnLmVycm9yIHx8IGZ1bmN0aW9uKG5hbWUsIGZyb20sIHRvLCBhcmdzLCBlcnJvciwgbXNnLCBlKSB7IHRocm93IGUgfHwgbXNnOyB9OyAvLyBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVucyBpcyB0byB0aHJvdyBhbiBleGNlcHRpb24sIGJ1dCBjYWxsZXIgY2FuIG92ZXJyaWRlIHRoaXMgYmVoYXZpb3IgaWYgZGVzaXJlZCAoc2VlIGdpdGh1YiBpc3N1ZSAjMyBhbmQgIzE3KVxuXG4gICAgICBpZiAoaW5pdGlhbCAmJiAhaW5pdGlhbC5kZWZlcilcbiAgICAgICAgZnNtW2luaXRpYWwuZXZlbnRdKCk7XG5cbiAgICAgIHJldHVybiBmc207XG5cbiAgICB9LFxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGRvQ2FsbGJhY2s6IGZ1bmN0aW9uKGZzbSwgZnVuYywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoZnNtLCBbbmFtZSwgZnJvbSwgdG9dLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBmc20uZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5JTlZBTElEX0NBTExCQUNLLCBcImFuIGV4Y2VwdGlvbiBvY2N1cnJlZCBpbiBhIGNhbGxlci1wcm92aWRlZCBjYWxsYmFjayBmdW5jdGlvblwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBiZWZvcmVBbnlFdmVudDogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmJlZm9yZWV2ZW50J10sICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgYWZ0ZXJBbnlFdmVudDogICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25hZnRlcmV2ZW50J10gfHwgZnNtWydvbmV2ZW50J10sICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGxlYXZlQW55U3RhdGU6ICAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29ubGVhdmVzdGF0ZSddLCAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBlbnRlckFueVN0YXRlOiAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmVudGVyc3RhdGUnXSB8fCBmc21bJ29uc3RhdGUnXSwgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgY2hhbmdlU3RhdGU6ICAgICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25jaGFuZ2VzdGF0ZSddLCAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuXG4gICAgYmVmb3JlVGhpc0V2ZW50OiBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25iZWZvcmUnICsgbmFtZV0sICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGFmdGVyVGhpc0V2ZW50OiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uYWZ0ZXInICArIG5hbWVdIHx8IGZzbVsnb24nICsgbmFtZV0sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBsZWF2ZVRoaXNTdGF0ZTogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmxlYXZlJyAgKyBmcm9tXSwgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgZW50ZXJUaGlzU3RhdGU6ICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25lbnRlcicgICsgdG9dICAgfHwgZnNtWydvbicgKyB0b10sICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuXG4gICAgYmVmb3JlRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIGlmICgoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVUaGlzRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykpIHx8XG4gICAgICAgICAgKGZhbHNlID09PSBTdGF0ZU1hY2hpbmUuYmVmb3JlQW55RXZlbnQoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBhZnRlckV2ZW50OiBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7XG4gICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJUaGlzRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJBbnlFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgfSxcblxuICAgIGxlYXZlU3RhdGU6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIHZhciBzcGVjaWZpYyA9IFN0YXRlTWFjaGluZS5sZWF2ZVRoaXNTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSxcbiAgICAgICAgICBnZW5lcmFsICA9IFN0YXRlTWFjaGluZS5sZWF2ZUFueVN0YXRlKCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIGlmICgoZmFsc2UgPT09IHNwZWNpZmljKSB8fCAoZmFsc2UgPT09IGdlbmVyYWwpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBlbHNlIGlmICgoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBzcGVjaWZpYykgfHwgKFN0YXRlTWFjaGluZS5BU1lOQyA9PT0gZ2VuZXJhbCkpXG4gICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuQVNZTkM7XG4gICAgfSxcblxuICAgIGVudGVyU3RhdGU6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIFN0YXRlTWFjaGluZS5lbnRlclRoaXNTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIFN0YXRlTWFjaGluZS5lbnRlckFueVN0YXRlKCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGJ1aWxkRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIG1hcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBmcm9tICA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdmFyIHRvICAgID0gbWFwW2Zyb21dIHx8IG1hcFtTdGF0ZU1hY2hpbmUuV0lMRENBUkRdIHx8IGZyb207XG4gICAgICAgIHZhciBhcmdzICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7IC8vIHR1cm4gYXJndW1lbnRzIGludG8gcHVyZSBhcnJheVxuXG4gICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb24pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5QRU5ESU5HX1RSQU5TSVRJT04sIFwiZXZlbnQgXCIgKyBuYW1lICsgXCIgaW5hcHByb3ByaWF0ZSBiZWNhdXNlIHByZXZpb3VzIHRyYW5zaXRpb24gZGlkIG5vdCBjb21wbGV0ZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5jYW5ub3QobmFtZSkpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IobmFtZSwgZnJvbSwgdG8sIGFyZ3MsIFN0YXRlTWFjaGluZS5FcnJvci5JTlZBTElEX1RSQU5TSVRJT04sIFwiZXZlbnQgXCIgKyBuYW1lICsgXCIgaW5hcHByb3ByaWF0ZSBpbiBjdXJyZW50IHN0YXRlIFwiICsgdGhpcy5jdXJyZW50KTtcblxuICAgICAgICBpZiAoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVFdmVudCh0aGlzLCBuYW1lLCBmcm9tLCB0bywgYXJncykpXG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuQ0FOQ0VMTEVEO1xuXG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KHRoaXMsIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5OT1RSQU5TSVRJT047XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmVwYXJlIGEgdHJhbnNpdGlvbiBtZXRob2QgZm9yIHVzZSBFSVRIRVIgbG93ZXIgZG93biwgb3IgYnkgY2FsbGVyIGlmIHRoZXkgd2FudCBhbiBhc3luYyB0cmFuc2l0aW9uIChpbmRpY2F0ZWQgYnkgYW4gQVNZTkMgcmV0dXJuIHZhbHVlIGZyb20gbGVhdmVTdGF0ZSlcbiAgICAgICAgdmFyIGZzbSA9IHRoaXM7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZzbS50cmFuc2l0aW9uID0gbnVsbDsgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgZXZlciBiZSBjYWxsZWQgb25jZVxuICAgICAgICAgIGZzbS5jdXJyZW50ID0gdG87XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmVudGVyU3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5jaGFuZ2VTdGF0ZShmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICBTdGF0ZU1hY2hpbmUuYWZ0ZXJFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuU1VDQ0VFREVEO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24uY2FuY2VsID0gZnVuY3Rpb24oKSB7IC8vIHByb3ZpZGUgYSB3YXkgZm9yIGNhbGxlciB0byBjYW5jZWwgYXN5bmMgdHJhbnNpdGlvbiBpZiBkZXNpcmVkIChpc3N1ZSAjMjIpXG4gICAgICAgICAgZnNtLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlYXZlID0gU3RhdGVNYWNoaW5lLmxlYXZlU3RhdGUodGhpcywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICBpZiAoZmFsc2UgPT09IGxlYXZlKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5DQU5DRUxMRUQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBsZWF2ZSkge1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0LlBFTkRJTkc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbikgLy8gbmVlZCB0byBjaGVjayBpbiBjYXNlIHVzZXIgbWFudWFsbHkgY2FsbGVkIHRyYW5zaXRpb24oKSBidXQgZm9yZ290IHRvIHJldHVybiBTdGF0ZU1hY2hpbmUuQVNZTkNcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuICAgIH1cblxuICB9OyAvLyBTdGF0ZU1hY2hpbmVcblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vPT09PT09XG4gIC8vIE5PREVcbiAgLy89PT09PT1cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU3RhdGVNYWNoaW5lO1xuICAgIH1cbiAgICBleHBvcnRzLlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuICAvLz09PT09PT09PT09PVxuICAvLyBBTUQvUkVRVUlSRVxuICAvLz09PT09PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkgeyByZXR1cm4gU3RhdGVNYWNoaW5lOyB9KTtcbiAgfVxuICAvLz09PT09PT09XG4gIC8vIEJST1dTRVJcbiAgLy89PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5TdGF0ZU1hY2hpbmUgPSBTdGF0ZU1hY2hpbmU7XG4gIH1cbiAgLy89PT09PT09PT09PVxuICAvLyBXRUIgV09SS0VSXG4gIC8vPT09PT09PT09PT1cbiAgZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2VsZi5TdGF0ZU1hY2hpbmUgPSBTdGF0ZU1hY2hpbmU7XG4gIH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9zdGF0ZS1tYWNoaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9ib290LmNvZmZlZVwiOiAyMCxcblx0XCIuL2dhbWUuY29mZmVlXCI6IDIxLFxuXHRcIi4vaW50cm8uY29mZmVlXCI6IDIyLFxuXHRcIi4vcHJlbG9hZC5jb2ZmZWVcIjogMjMsXG5cdFwiLi9yZXNldC5jb2ZmZWVcIjogMjRcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMgXlxcLlxcLy4qXFwuY29mZmVlJFxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9