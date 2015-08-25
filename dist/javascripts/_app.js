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

	module.exports = __webpack_require__(20);


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
/* 4 */
/***/ function(module, exports) {

	var levels;
	
	levels = {
	  1: {
	    wagon: false,
	    terrain: [
	      {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }
	    ]
	  },
	  2: {
	    wagon: false,
	    terrain: [
	      {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }
	    ]
	  },
	  3: {
	    wagon: false,
	    terrain: [
	      {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }
	    ]
	  },
	  4: {
	    wagon: false,
	    terrain: [
	      {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }
	    ]
	  },
	  5: {
	    wagon: true,
	    terrain: [
	      {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }
	    ]
	  },
	  6: {
	    wagon: true,
	    terrain: [
	      {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }
	    ]
	  },
	  7: {
	    wagon: true,
	    terrain: [
	      {
	        key: 'tree',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }
	    ]
	  },
	  8: {
	    wagon: true,
	    terrain: [
	      {
	        key: 'tree',
	        x: 0,
	        y: 0
	      }, {
	        key: 'cactus',
	        x: 0,
	        y: 0
	      }, {
	        key: 'tree',
	        x: 0,
	        y: 0
	      }
	    ]
	  }
	};
	
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
	    game.state.add(state, __webpack_require__(22)("./" + state + ".coffee"));
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
	    this.game.add.existing(this);
	    this.cropRect = this.game.add.graphics(0, 0);
	    this.cropRect.lineStyle(0);
	    this.cropRect.beginFill("0x000000");
	    this.cropRect.drawRect(x, y, 0, this.height);
	    this.cropRect.endFill();
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

	/* WEBPACK VAR INJECTION */(function(_) {var Ammo, Bullets, Cowboy, DELTA, FRAMERATE, PLAYER_ONE_CONTROLS, PLAYER_ONE_X, PLAYER_ONE_Y, PLAYER_TWO_CONTROLS, PLAYER_TWO_X, PLAYER_TWO_Y, SPEED, StateMachine, Text,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Bullets = __webpack_require__(9);
	
	Ammo = __webpack_require__(8);
	
	Text = __webpack_require__(13);
	
	StateMachine = __webpack_require__(21);
	
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var Ceiling, Cowboy, Floor, Game, NO_AMMO_COUNTDOWN, STARTING_TIME, WALL_OFFSET, Wall;
	
	Floor = __webpack_require__(12);
	
	Ceiling = __webpack_require__(10);
	
	Wall = __webpack_require__(14);
	
	WALL_OFFSET = 275;
	
	Cowboy = __webpack_require__(11);
	
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
	    return this.start();
	  };
	
	  Game.prototype.start = function() {
	    return this.setupLevel();
	  };
	
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
	        bullet.player.idle();
	        bullet.player.wins += 1;
	        _this.game.level += 1;
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
	
	  Game.prototype.setupLevel = function() {
	    var level, level_num;
	    level_num = this.game.level;
	    level = this.game.constants.LEVELS["" + level_num];
	    return console.log(level);
	  };
	
	  return Game;
	
	})();
	
	module.exports = Game;


/***/ },
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports) {

	


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var LaunchGame;
	
	LaunchGame = __webpack_require__(7);
	
	$(document).ready(function() {
	  console.log('all ready');
	  return LaunchGame();
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./boot.coffee": 15,
		"./game.coffee": 16,
		"./intro.coffee": 17,
		"./preload.coffee": 18,
		"./reset.coffee": 19
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
	webpackContext.id = 22;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDUzNTk1NzVlZTc1NGQ3NjE0N2IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2F0bGFzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3NmeC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvc3ByaXRlcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9sYXVuY2guY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9BbW1vLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvQnVsbGV0cy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0NlaWxpbmcuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9Db3dib3kuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9GbG9vci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL1RleHQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9XYWxsLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9ib290LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9nYW1lLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcy9pbnRyby5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvcHJlbG9hZC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZmZlZXNjcmlwdHMvbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vfi9qYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmUvc3RhdGUtbWFjaGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcyBeXFwuXFwvLipcXC5jb2ZmZWUkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQSxvQjs7Ozs7O0FDQUEseUI7Ozs7OztBQ0FBOztBQUFBLFNBQ0U7R0FBQSxVQUNFO0tBQUEsS0FDRTtPQUFBLFNBQ0U7U0FBQSxLQUFLLEdBQUw7U0FDQSxLQUFLLEdBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFERjtPQUtBLFdBQVcsS0FMWDtPQU1BLFdBQVcsS0FOWDtPQU9BLG9CQUNFO1NBQUEsS0FBSyxDQUFMO1NBQ0EsS0FBSyxDQURMO1NBRUEsS0FBSyxFQUZMO1NBR0EsS0FBSyxFQUhMO1FBUkY7T0FZQSxjQUNFO1NBQUEsS0FBSyxFQUFMO1NBQ0EsS0FBSyxFQURMO1FBYkY7TUFERjtLQWdCQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssQ0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpCRjtLQWdDQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpDRjtLQWdEQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpERjtLQWdFQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpFRjtLQWdGQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpGRjtLQWdHQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpHRjtLQWdIQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FFQSxLQUFLLEVBRkw7U0FHQSxLQUFLLEVBSEw7UUFSRjtPQVlBLGNBQ0U7U0FBQSxLQUFLLEVBQUw7U0FDQSxLQUFLLEVBREw7UUFiRjtNQWpIRjtLQWdJQSxLQUNFO09BQUEsU0FDRTtTQUFBLEtBQUssR0FBTDtTQUNBLEtBQUssR0FETDtTQUVBLEtBQUssRUFGTDtTQUdBLEtBQUssRUFITDtRQURGO09BS0EsV0FBVyxLQUxYO09BTUEsV0FBVyxLQU5YO09BT0Esb0JBQ0U7U0FBQSxLQUFLLENBQUw7U0FDQSxLQUFLLENBREw7U0FF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OztBQUVBO0FBQ0E7QUFDQSwyREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIscUJBQXFCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7OztBQ2xPRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2phdmFzY3JpcHRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDUzNTk1NzVlZTc1NGQ3NjE0N2JcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9cIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqUXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImF0bGFzID1cbiAgJ2ZyYW1lcyc6XG4gICAgJzAnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NDJcbiAgICAgICAgJ3knOiAxNzZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICcxJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDk0XG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDE2XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDE2XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAxNlxuICAgICAgICAnaCc6IDQwXG4gICAgJzInOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0NjhcbiAgICAgICAgJ3knOiAxNzZcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICczJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDQyXG4gICAgICAgICd5JzogMjE4XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnNCc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ2OFxuICAgICAgICAneSc6IDIxOFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAxNzRcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc2JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogMjE2XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAnNyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEwMFxuICAgICAgICAneSc6IDI1OFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgJzgnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAxMDBcbiAgICAgICAgJ3knOiAzMDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyNFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICc5JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzI4XG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMjRcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDI0XG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9EUkFXJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzM2XG4gICAgICAgICd5JzogMlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxNTZcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDE1NlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR0FNRSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEzMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjBcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR0VUX1JFQURZJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDQ0XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9HT1RfTUUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyNzZcbiAgICAgICAgJ3knOiA0NFxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAyMTJcbiAgICAgICAgJ2gnOiA0MFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDIxMlxuICAgICAgICAnaCc6IDQwXG4gICAgJ3RleHQvR1VOX0ZJR0hUJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDI3MlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMjcyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9JTlNFUlRfQ09JTic6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAyXG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDMzMlxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMzMyXG4gICAgICAgICdoJzogNDBcbiAgICAndGV4dC9PVkVSJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjU0XG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDEyMFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTIwXG4gICAgICAgICdoJzogNDBcbiAgICAnYW1tbyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDI3NlxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDE4MFxuICAgICAgICAnaCc6IDQwXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogMTgwXG4gICAgICAgICdoJzogNDBcbiAgICAnYnVsbGV0JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogNDkwXG4gICAgICAgICd5JzogNDRcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOFxuICAgICAgICAnaCc6IDhcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA4XG4gICAgICAgICdoJzogOFxuICAgICd0ZXJyYWluL2NhY3R1cyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDQ1OFxuICAgICAgICAneSc6IDg2XG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogMzJcbiAgICAgICAgJ2gnOiA4OFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDMyXG4gICAgICAgICdoJzogODhcbiAgICAnY293Ym95L2RlYWQvaGl0JzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTk4XG4gICAgICAgICd5JzogNTg0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTMyXG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzJcbiAgICAnY293Ym95L2RlYWQvcmlwJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDEyOFxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiAxMjhcbiAgICAgICAgJ2gnOiA0NFxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDEyOFxuICAgICAgICAnaCc6IDQ0XG4gICAgJ2Nvd2JveS9oaWdoL2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTMyXG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2hpZ2gvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMlxuICAgICAgICAneSc6IDE3NFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9oaWdoL3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDJcbiAgICAgICAgJ3knOiAzMTJcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L2Nyb3NzJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjMwXG4gICAgICAgICd5JzogMTcwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L2xvdy9vbmUnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAzMjhcbiAgICAgICAgJ3knOiAyMzhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbG93L3R3byc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDEyNlxuICAgICAgICAneSc6IDMwOFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWQvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyMjRcbiAgICAgICAgJ3knOiAzMDhcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3JvdGF0ZWQnOiBmYWxzZVxuICAgICAgJ3RyaW1tZWQnOiBmYWxzZVxuICAgICAgJ3Nwcml0ZVNvdXJjZVNpemUnOlxuICAgICAgICAneCc6IDBcbiAgICAgICAgJ3knOiAwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdzb3VyY2VTaXplJzpcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICdjb3dib3kvbWVkL29uZSc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDMyMlxuICAgICAgICAneSc6IDM3NlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWQvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogNDQ2XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvY3Jvc3MnOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNDUwXG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTk4XG4gICAgICAgICd5JzogNDQ2XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGhpZ2gvdHdvJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMjk2XG4gICAgICAgICd5JzogNTE0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy9jcm9zcyc6XG4gICAgICAnZnJhbWUnOlxuICAgICAgICAneCc6IDM5NFxuICAgICAgICAneSc6IDUxNFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA5NlxuICAgICAgICAnaCc6IDEzNlxuICAgICAgJ3NvdXJjZVNpemUnOlxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgJ2Nvd2JveS9tZWRsb3cvb25lJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMTAwXG4gICAgICAgICd5JzogNTg0XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAnY293Ym95L21lZGxvdy90d28nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiAyXG4gICAgICAgICd5JzogNTg4XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDk2XG4gICAgICAgICdoJzogMTM2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogOTZcbiAgICAgICAgJ2gnOiAxMzZcbiAgICAndGVycmFpbi90cmVlJzpcbiAgICAgICdmcmFtZSc6XG4gICAgICAgICd4JzogMzc2XG4gICAgICAgICd5JzogMTI4XG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAgICdyb3RhdGVkJzogZmFsc2VcbiAgICAgICd0cmltbWVkJzogZmFsc2VcbiAgICAgICdzcHJpdGVTb3VyY2VTaXplJzpcbiAgICAgICAgJ3gnOiAwXG4gICAgICAgICd5JzogMFxuICAgICAgICAndyc6IDY0XG4gICAgICAgICdoJzogMTA4XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogNjRcbiAgICAgICAgJ2gnOiAxMDhcbiAgICAnd2Fnb24nOlxuICAgICAgJ2ZyYW1lJzpcbiAgICAgICAgJ3gnOiA0MjBcbiAgICAgICAgJ3knOiAzNzZcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAncm90YXRlZCc6IGZhbHNlXG4gICAgICAndHJpbW1lZCc6IGZhbHNlXG4gICAgICAnc3ByaXRlU291cmNlU2l6ZSc6XG4gICAgICAgICd4JzogMFxuICAgICAgICAneSc6IDBcbiAgICAgICAgJ3cnOiA4OFxuICAgICAgICAnaCc6IDk2XG4gICAgICAnc291cmNlU2l6ZSc6XG4gICAgICAgICd3JzogODhcbiAgICAgICAgJ2gnOiA5NlxuICAnbWV0YSc6XG4gICAgJ2FwcCc6ICdodHRwOi8vd3d3LmNvZGVhbmR3ZWIuY29tL3RleHR1cmVwYWNrZXInXG4gICAgJ3ZlcnNpb24nOiAnMS4wJ1xuICAgICdpbWFnZSc6ICdhdGxhcy5wbmcnXG4gICAgJ2Zvcm1hdCc6ICdSR0JBODg4OCdcbiAgICAnc2l6ZSc6XG4gICAgICAndyc6IDUxMlxuICAgICAgJ2gnOiAxMDI0XG4gICAgJ3NjYWxlJzogJzEnXG4gICAgJ3NtYXJ0dXBkYXRlJzogJyRUZXh0dXJlUGFja2VyOlNtYXJ0VXBkYXRlOjEwNmI3YzI3MTZjNDIzNTU5MzUzZjE0YjQ0MTNkMjQzOmVmMzA3YjBhYmQxMjA3OTg4MTFhMzVkYjVlODYwNmNmOmNiY2U2YjUzZjBmNDllMGJmMTUxNzNjMjVjNDFmODc2JCdcblxubW9kdWxlLmV4cG9ydHMgPSBhdGxhc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWVcbiAqKi8iLCJsZXZlbHMgPSB7XG4gIDE6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgdGVycmFpbjogW1xuICAgICAgeyBrZXk6ICdjYWN0dXMnLCB4OiAwLCB5OiAwIH1cbiAgICBdXG4gIDI6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgdGVycmFpbjogW1xuICAgICAgeyBrZXk6ICdjYWN0dXMnLCB4OiAwLCB5OiAwIH1cbiAgICAgIHsga2V5OiAnY2FjdHVzJywgeDogMCwgeTogMCB9XG4gICAgXVxuICAzOlxuICAgIHdhZ29uOiBmYWxzZVxuICAgIHRlcnJhaW46IFtcbiAgICAgIHsga2V5OiAnY2FjdHVzJywgeDogMCwgeTogMCB9XG4gICAgICB7IGtleTogJ2NhY3R1cycsIHg6IDAsIHk6IDAgfVxuICAgICAgeyBrZXk6ICdjYWN0dXMnLCB4OiAwLCB5OiAwIH1cbiAgICBdXG4gIDQ6XG4gICAgd2Fnb246IGZhbHNlXG4gICAgdGVycmFpbjogW1xuICAgICAgeyBrZXk6ICdjYWN0dXMnLCB4OiAwLCB5OiAwIH1cbiAgICAgIHsga2V5OiAnY2FjdHVzJywgeDogMCwgeTogMCB9XG4gICAgICB7IGtleTogJ2NhY3R1cycsIHg6IDAsIHk6IDAgfVxuICAgICAgeyBrZXk6ICdjYWN0dXMnLCB4OiAwLCB5OiAwIH1cbiAgICBdXG4gIDU6XG4gICAgd2Fnb246IHRydWVcbiAgICB0ZXJyYWluOiBbXG4gICAgICB7IGtleTogJ2NhY3R1cycsIHg6IDAsIHk6IDAgfVxuICAgICAgeyBrZXk6ICdjYWN0dXMnLCB4OiAwLCB5OiAwIH1cbiAgICAgIHsga2V5OiAnY2FjdHVzJywgeDogMCwgeTogMCB9XG4gICAgICB7IGtleTogJ2NhY3R1cycsIHg6IDAsIHk6IDAgfVxuICAgIF1cbiAgNjpcbiAgICB3YWdvbjogdHJ1ZVxuICAgIHRlcnJhaW46IFtcbiAgICAgIHsga2V5OiAnY2FjdHVzJywgeDogMCwgeTogMCB9XG4gICAgICB7IGtleTogJ2NhY3R1cycsIHg6IDAsIHk6IDAgfVxuICAgICAgeyBrZXk6ICdjYWN0dXMnLCB4OiAwLCB5OiAwIH1cbiAgICAgIHsga2V5OiAnY2FjdHVzJywgeDogMCwgeTogMCB9XG4gICAgXVxuICA3OlxuICAgIHdhZ29uOiB0cnVlXG4gICAgdGVycmFpbjogW1xuICAgICAgeyBrZXk6ICd0cmVlJywgeDogMCwgeTogMCB9XG4gICAgICB7IGtleTogJ2NhY3R1cycsIHg6IDAsIHk6IDAgfVxuICAgICAgeyBrZXk6ICdjYWN0dXMnLCB4OiAwLCB5OiAwIH1cbiAgICBdXG4gIDg6XG4gICAgd2Fnb246IHRydWVcbiAgICB0ZXJyYWluOiBbXG4gICAgICB7IGtleTogJ3RyZWUnLCB4OiAwLCB5OiAwIH1cbiAgICAgIHsga2V5OiAnY2FjdHVzJywgeDogMCwgeTogMCB9XG4gICAgICB7IGtleTogJ3RyZWUnLCB4OiAwLCB5OiAwIH1cbiAgICBdXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGV2ZWxzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL2xldmVscy5jb2ZmZWVcbiAqKi8iLCJzZnggPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNmeFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zZnguY29mZmVlXG4gKiovIiwic3ByaXRlcyA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gc3ByaXRlcyBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9jb25zdGFudHMvc3ByaXRlcy5jb2ZmZWVcbiAqKi8iLCIkd2luZG93ID0gJCh3aW5kb3cpXG5cbiMgbW9iaWxlIGZsYWdcbmlzTW9iaWxlID0gLT5cbiAgaWYoIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApXG4gICAgdHJ1ZVxuICBlbHNlXG4gICAgZmFsc2VcblxubGF1bmNoID0gKGNkbj1cIi9cIiwgdmVyc2lvbj1cIj92PTAuMC4wXCIpIC0+XG5cbiAgIyA0OjNcbiAgZ2FtZV93aWR0aCA9IDEwODhcbiAgZ2FtZV9oZWlnaHQgPSA4MTZcblxuICAjIENvbnN0cnVjdCBHYW1lXG4gIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXG4gICAgZ2FtZV93aWR0aCwgICAjIHdpZHRoXG4gICAgZ2FtZV9oZWlnaHQsICAjIGhlaWdodFxuICAgIFBoYXNlci5BVVRPLCAgIyByZW5kZXJlclxuICAgICdnYW1lJywgICAgICAgIyBJRCBvZiBwYXJlbnQgZWxlbWVudFxuICAgICdib290JywgICAgICAgIyBzdGF0ZVxuICAgIGZhbHNlLCAgICAgICAgIyB0cmFuc3BhcmVudFxuICAgIGZhbHNlLCAgICAgICAgIyBhbnRpYWxpYXNcbiAgICBudWxsICAgICAgICAgICMgcGh5c2ljc0NvbmZpZ1xuICApXG5cbiAgIyBjZG5cbiAgZ2FtZS5jZG4gPSBjZG5cbiAgZ2FtZS5ob3N0dXJsID0gdW5kZWZpbmVkICNob3N0dXJsXG5cbiAgIyBnYW1lIHZlcnNpb25cbiAgZ2FtZS52ZXJzaW9uID0gdmVyc2lvblxuXG4gICMgZGVidWdcbiAgZ2FtZS5kZWJ1Z01vZGUgPSBmYWxzZVxuICBnYW1lLmRlYnVnTW9kZSA9IHRydWVcblxuICBnYW1lLmVuYWJsZU11c2ljID0gIWdhbWUuZGVidWdNb2RlXG4gIGdhbWUuZW5hYmxlU0ZYID0gIWdhbWUuZGVidWdNb2RlXG5cbiAgIyBjb25zdGFudHNcbiAgZ2FtZS5jb25zdGFudHMgPVxuICAgIFNUQVRFUzogWydib290JywgJ3ByZWxvYWQnLCAnaW50cm8nLCAnZ2FtZScsICdyZXNldCddXG4gICAgU1BSSVRFUzogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9zcHJpdGVzJ1xuICAgIExFVkVMUzogcmVxdWlyZSAnY29mZmVlc2NyaXB0cy9nYW1lL2NvbnN0YW50cy9sZXZlbHMnXG4gICAgU0ZYOiByZXF1aXJlICdjb2ZmZWVzY3JpcHRzL2dhbWUvY29uc3RhbnRzL3NmeCdcblxuICAjIGRlZmF1bHQgbGV2ZWxcbiAgZ2FtZS5sZXZlbCA9IDFcblxuICAjIGtlZXAgdGhlIGdhbWUgd2l0aGluIHRoZSBwYWdlXG4gIGdhbWUuc2NhbGVyID0gLT5cbiAgICAkZ2FtZSA9ICQoXCIjZ2FtZVwiKVxuICAgICRjYW52YXMgPSAkKFwiY2FudmFzXCIpXG4gICAgJHdpbmRvdyA9ICQod2luZG93KVxuXG4gICAgaWYgIWlzTW9iaWxlKClcbiAgICAgICRnYW1lID0gJChcIiNnYW1lXCIpXG4gICAgICAkY2FudmFzID0gJChcImNhbnZhc1wiKVxuICAgICAgJHdpbmRvdyA9ICQod2luZG93KVxuXG4gICAgICBpZiAkZ2FtZS5oZWlnaHQoKSA+ICR3aW5kb3cuaGVpZ2h0KCkgLSAxNTBcbiAgICAgICAgJGdhbWUuY3NzKFwibWF4LWhlaWdodFwiLCAoJHdpbmRvdy5oZWlnaHQoKSAtIDE1MCkgKyBcInB4XCIpXG4gICAgICBlbHNlXG4gICAgICAgICRnYW1lLmNzcyhcIm1heC1oZWlnaHRcIiwgXCJhdXRvXCIpXG5cbiAgIyByZXF1aXJlIHN0YXRlcyBhbmQgYm9vdCFcbiAgZ2FtZS5zdGF0ZS5hZGQgc3RhdGUsIHJlcXVpcmUoXCIuL3N0YXRlcy8je3N0YXRlfS5jb2ZmZWVcIikgZm9yIHN0YXRlIGluIGdhbWUuY29uc3RhbnRzLlNUQVRFU1xuICBnYW1lLnN0YXRlLnN0YXJ0ICdib290J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxhdW5jaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL2xhdW5jaC5jb2ZmZWVcbiAqKi8iLCJjbGFzcyBBbW1vIGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQHBsYXllcikgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnYW1tbydcbiAgICB4ID0gaWYgQHBsYXllci5pc19wbGF5ZXJfb25lIHRoZW4gOTIgZWxzZSA4MTZcbiAgICB5ID0gQGdhbWUuaGVpZ2h0IC0gNDVcbiAgICBzdXBlciBAZ2FtZSwgeCwgeSwga2V5LCBmcmFtZVxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG5cbiAgICAjIGRyYXcgY3JvcCByZWN0XG4gICAgQGNyb3BSZWN0ID0gQGdhbWUuYWRkLmdyYXBoaWNzIDAsIDBcbiAgICBAY3JvcFJlY3QubGluZVN0eWxlIDBcbiAgICBAY3JvcFJlY3QuYmVnaW5GaWxsIFwiMHgwMDAwMDBcIlxuICAgIEBjcm9wUmVjdC5kcmF3UmVjdCB4LCB5LCAwLCBAaGVpZ2h0XG4gICAgQGNyb3BSZWN0LmVuZEZpbGwoKVxuXG4gICAgcmV0dXJuIEBcblxuICBjcm9wOiAtPlxuICAgIHdpZHRoID0gQHdpZHRoIC0gQHBsYXllci5udW1fYnVsbGV0cyAvIDYgKiBAd2lkdGhcbiAgICBAZHJhd1JlY3Qgd2lkdGhcblxuICByZWxvYWQ6IC0+IEBjcm9wUmVjdC5jbGVhcigpXG5cbiAgZHJhd1JlY3Q6ICh3aWR0aCkgLT5cbiAgICBAY3JvcFJlY3QubGluZVN0eWxlIDBcbiAgICBAY3JvcFJlY3QuYmVnaW5GaWxsIFwiMHgwMDAwMDBcIlxuICAgIEBjcm9wUmVjdC5kcmF3UmVjdCBAeCwgQHksIHdpZHRoLCBAaGVpZ2h0XG4gICAgQGNyb3BSZWN0LmVuZEZpbGwoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFtbW9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0FtbW8uY29mZmVlXG4gKiovIiwiIyBidWxsZXQgcG9zaXRpb24gY29uZmlnXG5HVU5fUE9TX0NPTkZJRyA9XG4gIGhpZ2g6ICAgIHt4OiA0NSwgeTogMTUsIGRlZzogLTUyfVxuICBtZWRoaWdoOiB7eDogNTAsIHk6IDM1LCBkZWc6IC0yNn1cbiAgbWVkOiAgICAge3g6IDU1LCB5OiA0NiwgZGVnOiAwfVxuICBtZWRsb3c6ICB7eDogNTAsIHk6IDc1LCBkZWc6IDIyfVxuICBsb3c6ICAgICB7eDogNDUsIHk6IDg4LCBkZWc6IDQyfVxuXG4jIHNwZWVkIG9mIGZpcmVkIGJ1bGxldFxuU1BFRUQgPSAxMDAwXG5cbmNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBwbGF5ZXIpIC0+XG4gICAga2V5ID0gJ2F0bGFzJ1xuICAgIGZyYW1lID0gJ2J1bGxldCdcbiAgICBzdXBlciBAZ2FtZSwgQHBsYXllci5ib2R5LngsIEBwbGF5ZXIuYm9keS55LCBrZXksIGZyYW1lXG5cbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBAXG5cbiAgICAjIHZpc2liaWxpdHkgdmFyXG4gICAgQHRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAjIGJvdW5jZSBvZmYgc3VyZmFjZXNcbiAgICBAYm9keS5ib3VuY2Uuc2V0IDFcblxuICAgICMgcGxheWVyXG4gICAgQGlzX3BsYXllcl9vbmUgPSBAcGxheWVyLmlzX3BsYXllcl9vbmVcblxuICAgICMgYm91bmRzXG4gICAgQG91dE9mQm91bmRzS2lsbCA9IHRydWVcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgIEBraWxsKClcblxuICAgIHJldHVybiBAXG5cbiAgc2hvb3Q6IC0+XG4gICAgZ3VuX3BvcyA9IEBwbGF5ZXIuZ3VuX3Bvc1tAcGxheWVyLmd1bl9wb3NfaW5kZXhdXG4gICAgcG9zID0gR1VOX1BPU19DT05GSUdbZ3VuX3Bvc11cbiAgICB4ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBAcGxheWVyLmJvZHkucmlnaHQgKyBwb3MueCBlbHNlIEBwbGF5ZXIuYm9keS54IC0gcG9zLnhcbiAgICB5ID0gQHBsYXllci5ib2R5LnkgKyBwb3MueVxuICAgIGFuZ2xlID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiBwb3MuZGVnIGVsc2UgMTgwIC0gcG9zLmRlZ1xuICAgICMgcmV2aXZlIHRoZSBidWxsZXRcbiAgICBAcmVzZXQgeCwgeVxuICAgICMgc2V0IHZlbG9jaXR5XG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUudmVsb2NpdHlGcm9tQW5nbGUgYW5nbGUsIFNQRUVELCBAYm9keS52ZWxvY2l0eVxuXG5jbGFzcyBCdWxsZXRzIGV4dGVuZHMgUGhhc2VyLkdyb3VwXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIEBnYW1lX3N0YXRlLCBAcGxheWVyKSAtPlxuICAgIHN1cGVyIEBnYW1lLCBudWxsLCAnYnVsbGV0cycsIGZhbHNlLCB0cnVlLCBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keVxuICAgIEBhZGQgbmV3IEJ1bGxldChAZ2FtZSwgQGdhbWVfc3RhdGUsIEBwbGF5ZXIpIGZvciBuIGluIFsxLi5AcGxheWVyLm51bV9idWxsZXRzXVxuXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuICBzaG9vdDogLT4gQGdldEZpcnN0RGVhZCgpLnNob290KClcblxubW9kdWxlLmV4cG9ydHMgPSBCdWxsZXRzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9CdWxsZXRzLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ2VpbGluZyBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgeV9vZmZzZXQ9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgMCwgeV9vZmZzZXRcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICBAYm9keS5zZXRTaXplIEBnYW1lLndvcmxkLndpZHRoLCA1LCAwLCAwXG4gICAgQGJvZHkuYWxsb3dHcmF2aXR5ID0gZmFsc2VcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0NlaWxpbmcuY29mZmVlXG4gKiovIiwiQnVsbGV0cyA9IHJlcXVpcmUgJy4vQnVsbGV0cy5jb2ZmZWUnXG5BbW1vID0gcmVxdWlyZSAnLi9BbW1vLmNvZmZlZSdcblRleHQgPSByZXF1aXJlICcuL1RleHQuY29mZmVlJ1xuU3RhdGVNYWNoaW5lID0gcmVxdWlyZSAnamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lJ1xuXG4jIFBPU0lUSU9OIENPTlNUQU5UU1xuUExBWUVSX09ORV9YID0gMjAwXG5QTEFZRVJfT05FX1kgPSA0NTBcblBMQVlFUl9UV09fWCA9IDg4OFxuUExBWUVSX1RXT19ZID0gNDUwXG5cbiMgTU9WRU1FTlQgQ09OU1RBTlRTXG5TUEVFRCA9IDYwXG5ERUxUQSA9IDE1XG5GUkFNRVJBVEUgPSA3XG5cbiMgQ09OVFJPTCBDT05TVEFOVFNcblBMQVlFUl9PTkVfQ09OVFJPTFMgPVxuICBtb3ZlX3VwOiAnVydcbiAgbW92ZV9kb3duOiAnUydcbiAgbW92ZV9sZWZ0OiAnQSdcbiAgbW92ZV9yaWdodDogJ0QnXG4gIGFpbV91cDogJ1EnXG4gIGFpbV9kb3duOiAnRSdcbiAgc2hvb3Q6ICdGJ1xuXG5QTEFZRVJfVFdPX0NPTlRST0xTID1cbiAgbW92ZV91cDogJ0knXG4gIG1vdmVfZG93bjogJ0snXG4gIG1vdmVfbGVmdDogJ0onXG4gIG1vdmVfcmlnaHQ6ICdMJ1xuICBhaW1fdXA6ICdPJ1xuICBhaW1fZG93bjogJ1UnXG4gIHNob290OiAnSCdcblxuY2xhc3MgQ293Ym95IGV4dGVuZHMgUGhhc2VyLlNwcml0ZVxuICBjb25zdHJ1Y3RvcjogKEBnYW1lLCBAZ2FtZV9zdGF0ZSwgQGlzX3BsYXllcl9vbmU9dHJ1ZSkgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgZnJhbWUgPSAnY293Ym95L21lZC90d28nXG4gICAgeCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gUExBWUVSX09ORV9YIGVsc2UgUExBWUVSX1RXT19YXG4gICAgeSA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gUExBWUVSX09ORV9ZIGVsc2UgUExBWUVSX1RXT19ZXG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgZnJhbWVcblxuICAgICMgZW5hYmxlIGFyY2FkZSBwaHlzaWNzXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgIyBzYXZlIHdpZHRoIGFuZCBoZWlnaHQgb2Ygc3ByaXRlIGJvZHlcbiAgICBAd2lkdGggPSBAYm9keS53aWR0aFxuICAgIEBoZWlnaHQgPSBAYm9keS5oZWlnaHRcbiAgICAjIGNoYW5nZSBib2R5IHNpemUgZm9yIG1vcmUgYWNjdXJhdGUgaGl0IGNvbGxpc2lvblxuICAgIEBib2R5LnNldFNpemUgNDUsIDEzNiwgMjUsIDBcbiAgICBAYm9keS5zZXRTaXplIDQ1LCAxMzYsIC0yNSwgMCBpZiBAaXNfcGxheWVyX29uZVxuICAgICMgY29sbGlkZSB3aXRoIHdvcmxkXG4gICAgQGJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZVxuICAgICMgZG9uJ3QgbGV0IGJ1bGxldCBwaHlzaWNzIHB1c2ggeWEgYmFja1xuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICAjIHNldCBhbmNob3IgdG8gaG9yaXpvbnRhbCBjZW50ZXIgc28gc3ByaXRlIGZsaXBzIGFyb3VuZCBpdHMgbWlkZGxlXG4gICAgQGFuY2hvci5zZXRUbyAuNSwgMVxuICAgICMgZmxpcCBzcHJpdGUgaWYgaXMgcGxheWVyIHR3b1xuICAgIEBzY2FsZS54ID0gaWYgQGlzX3BsYXllcl9vbmUgdGhlbiAtMSBlbHNlIDFcblxuICAgICMgZGlyZWN0aW9uIG9iamVjdFxuICAgIEBkaXJlY3Rpb24gPVxuICAgICAgdXA6IGZhbHNlXG4gICAgICBkb3duOiBmYWxzZVxuICAgICAgbGVmdDogZmFsc2VcbiAgICAgIHJpZ2h0OiBmYWxzZVxuXG4gICAgIyBhaW0gb2JqZWN0XG4gICAgQGFpbSA9XG4gICAgICB1cDogZmFsc2VcbiAgICAgIGRvd246IGZhbHNlXG5cbiAgICAjIG1vdmVtZW50IHZhcnNcbiAgICBAdGltZSA9IERhdGUubm93KClcbiAgICBAbW92aW5nID0gZmFsc2VcbiAgICBAZGVhZCA9IGZhbHNlXG5cbiAgICAjIGZyYW1lIHZhcnNcbiAgICBAZ3VuX3BvcyA9IFsnbG93JywnbWVkbG93JywnbWVkJywnbWVkaGlnaCcsJ2hpZ2gnXVxuICAgIEBsZWdfcG9zID0gWyd0d28nLCdvbmUnLCdjcm9zcyddXG4gICAgQGd1bl9wb3NfaW5kZXggPSAyXG4gICAgQGxlZ19wb3NfaW5kZXggPSAxXG5cbiAgICAjIGh1ZCB2YXJzXG4gICAgQHdpbnMgPSAwXG4gICAgQG51bV9idWxsZXRzID0gNlxuICAgIEBidWxsZXRzID0gbmV3IEJ1bGxldHMgQGdhbWUsIEBnYW1lX3N0YXRlLCBAXG4gICAgQGFtbW8gPSBuZXcgQW1tbyBAZ2FtZSwgQGdhbWVfc3RhdGUsIEBcblxuICAgICMgdGV4dCBmb3IgZGllIHN0YXRlXG4gICAgQHRleHQgPSBuZXcgVGV4dCBAZ2FtZSwgJ0dPVF9NRSdcblxuICAgICMgc2V0dXAgY29udHJvbHNcbiAgICBAc2V0dXBDb250cm9scygpXG4gICAgIyBzZXR1cCBhbmltYXRpb25zXG4gICAgQHNldHVwQW5pbWF0aW9ucygpXG4gICAgIyBjcmVhdGUgc3RhdGUgbWFjaGluZVxuICAgIEBjcmVhdGVTdGF0ZU1hY2hpbmUoKVxuXG4gICAgIyBjbGVhbiB1cFxuICAgIEBnYW1lLmFkZC5leGlzdGluZyBAXG4gICAgIyBAa2lsbCgpXG5cbiAgICByZXR1cm4gQFxuXG4gIHVwZGF0ZTogLT5cbiAgICAjIGhhbmRsZSBpbmNyZW1lbnRhbCBtb3ZlbWVudFxuICAgIGlmIEBzdGF0ZS5jdXJyZW50ICE9ICdkeWluZydcbiAgICAgIGN1cnJlbnRfdGltZSA9IERhdGUubm93KClcbiAgICAgIGlmIGN1cnJlbnRfdGltZSAtIEB0aW1lID4gU1BFRURcbiAgICAgICAgQGJvZHkueSAtPSBERUxUQSBpZiBAZGlyZWN0aW9uLnVwICAgIGFuZCBAYm9keS55ID4gQGdhbWVfc3RhdGUuY2VpbGluZy55XG4gICAgICAgIEBib2R5LnkgKz0gREVMVEEgaWYgQGRpcmVjdGlvbi5kb3duICBhbmQgQGJvZHkueSA8IEBnYW1lX3N0YXRlLmZsb29yLnkgLSBAYm9keS5oZWlnaHRcbiAgICAgICAgaWYgQGlzX3BsYXllcl9vbmVcbiAgICAgICAgICBAYm9keS54IC09IERFTFRBIGlmIEBkaXJlY3Rpb24ubGVmdCAgYW5kIEBib2R5LnggPiBAZ2FtZV9zdGF0ZS5sZWZ0X3dhbGxfb3V0ZXIuYm9keS54XG4gICAgICAgICAgQGJvZHkueCArPSBERUxUQSBpZiBAZGlyZWN0aW9uLnJpZ2h0IGFuZCBAYm9keS5yaWdodCA8IEBnYW1lX3N0YXRlLmxlZnRfd2FsbC5ib2R5LnhcbiAgICAgICAgZWxzZVxuICAgICAgICAgIEBib2R5LnggLT0gREVMVEEgaWYgQGRpcmVjdGlvbi5sZWZ0ICBhbmQgQGJvZHkueCA+IEBnYW1lX3N0YXRlLnJpZ2h0X3dhbGwuYm9keS54XG4gICAgICAgICAgQGJvZHkueCArPSBERUxUQSBpZiBAZGlyZWN0aW9uLnJpZ2h0IGFuZCBAYm9keS5yaWdodCA8IEBnYW1lX3N0YXRlLnJpZ2h0X3dhbGxfb3V0ZXIuYm9keS54XG4gICAgICAgICMgQGFuaW1hdGVfYWltX3VwKCkgIGlmIEBhaW0udXBcbiAgICAgICAgIyBAYW5pbWF0ZV9haW1fZG93bigpIGlmIEBhaW0uZG93blxuICAgICAgICBAdGltZSA9IGN1cnJlbnRfdGltZVxuXG4gICAgICAjIGlzIHRoZSBwbGF5ZXIgbW92aW5nP1xuICAgICAgQG1vdmluZyA9IGZhbHNlIHVubGVzcyBAZGlyZWN0aW9uLnVwIHx8IEBkaXJlY3Rpb24uZG93biB8fCBAZGlyZWN0aW9uLmxlZnQgfHwgQGRpcmVjdGlvbi5yaWdodFxuXG4gICAgICAjIHRyaWdnZXIgbW92ZSBhbmltYXRpb25cbiAgICAgIEBtb3ZlKCkgaWYgIEBtb3ZpbmcgYW5kIEBzdGF0ZS5jdXJyZW50ICE9ICdtb3ZpbmcnXG4gICAgICBAaWRsZSgpIGlmICFAbW92aW5nIGFuZCBAc3RhdGUuY3VycmVudCAhPSAnaWRsZSdcblxuICAgICMgaGFuZGxlIGR5aW5nIHNlcXVlbmNlXG4gICAgZWxzZVxuICAgICAgIyBzaG93IFwiR09UIE1FIVwiIHRleHRcbiAgICAgIGN1cnJlbnRfZnJhbWUgPSBAYW5pbWF0aW9ucy5jdXJyZW50RnJhbWUubmFtZVxuICAgICAgaWYgY3VycmVudF9mcmFtZSBpcyAnY293Ym95L2RlYWQvcmlwJyBhbmQgIUB0ZXh0LnZpc2libGVcbiAgICAgICAgeCA9IGlmIEBpc19wbGF5ZXJfb25lIHRoZW4gQGJvZHkucmlnaHQgLSBAdGV4dC53aWR0aCAvIDIgZWxzZSBAYm9keS54IC0gQHRleHQud2lkdGggLyAyXG4gICAgICAgIHkgPSBAYm9keS55XG4gICAgICAgIEB0ZXh0LnBsYWNlIHgsIHlcbiAgICAgICAgQHRleHQuc2hvdygpXG5cbiAgICAgICMgcmVzZXQgdGhlIHBsYXllcnNcblxuXG4gICMgY2hhbmdlIHN0YXRlXG4gIG1vdmU6ICAgICAgICAgICAtPiBAc3RhdGUuX21vdmUoKVxuICBpZGxlOiAgICAgICAgICAgLT4gQHN0YXRlLl9pZGxlKClcbiAgZGllOiAgICAgICAgICAgIC0+IEBzdGF0ZS5fZGllKClcblxuICAjIGNvbnRyb2wgZGlyZWN0aW9uXG4gIG1vdmVfdXA6ICAgICAgICAtPiBAZGlyZWN0aW9uLnVwICAgID0gdHJ1ZVxuICBtb3ZlX2xlZnQ6ICAgICAgLT4gQGRpcmVjdGlvbi5sZWZ0ICA9IHRydWVcbiAgbW92ZV9yaWdodDogICAgIC0+IEBkaXJlY3Rpb24ucmlnaHQgPSB0cnVlXG4gIG1vdmVfZG93bjogICAgICAtPiBAZGlyZWN0aW9uLmRvd24gID0gdHJ1ZVxuICBtb3ZlX3VwX29mZjogICAgLT4gQGRpcmVjdGlvbi51cCAgICA9IGZhbHNlXG4gIG1vdmVfbGVmdF9vZmY6ICAtPiBAZGlyZWN0aW9uLmxlZnQgID0gZmFsc2VcbiAgbW92ZV9yaWdodF9vZmY6IC0+IEBkaXJlY3Rpb24ucmlnaHQgPSBmYWxzZVxuICBtb3ZlX2Rvd25fb2ZmOiAgLT4gQGRpcmVjdGlvbi5kb3duICA9IGZhbHNlXG5cbiAgYWltX3VwOiAgICAgICAgIC0+IEBhbmltYXRlX2FpbV91cCgpXG4gIGFpbV9kb3duOiAgICAgICAtPiBAYW5pbWF0ZV9haW1fZG93bigpXG4gICMgYWltX3VwOiAgICAgICAgIC0+IEBhaW0udXAgICAgICAgICAgPSB0cnVlXG4gICMgYWltX2Rvd246ICAgICAgIC0+IEBhaW0uZG93biAgICAgICAgPSB0cnVlXG4gICMgYWltX3VwX29mZjogICAgIC0+IEBhaW0udXAgICAgICAgICAgPSBmYWxzZVxuICAjIGFpbV9kb3duX29mZjogICAtPiBAYWltLmRvd24gICAgICAgID0gZmFsc2VcblxuICAjIGZ1bGwgYW1tbyFcbiAgcmVsb2FkOiAtPlxuICAgIEBudW1fYnVsbGV0cyA9IDZcbiAgICBAYW1tby5yZWxvYWQoKVxuXG4gICMgaGFuZGxlIGFpbWluZyBhbmltYXRpb25zXG4gIGFuaW1hdGVfYWltX3VwOiAtPlxuICAgIGN1cnJlbnRfZnJhbWUgPSBAYW5pbWF0aW9ucy5jdXJyZW50RnJhbWUubmFtZVxuICAgIEBndW5fcG9zX2luZGV4ICs9IDEgaWYgQGd1bl9wb3NfaW5kZXggPCBAZ3VuX3Bvcy5sZW5ndGggLSAxXG5cbiAgICBmb3IgcG9zLCBpbmRleCBpbiBAbGVnX3Bvc1xuICAgICAgQGxlZ19wb3NfaW5kZXggPSBpbmRleFxuICAgICAgYnJlYWsgaWYgY3VycmVudF9mcmFtZS5tYXRjaCBwb3NcblxuICAgIEBhbmltYXRpb25zLnN0b3AoKVxuICAgIEBhbmltYXRpb25zLnBsYXkgXCJtb3ZlLSN7QGd1bl9wb3NbQGd1bl9wb3NfaW5kZXhdfVwiXG4gICAgQGFuaW1hdGlvbnMubmV4dCBAbGVnX3Bvc19pbmRleFxuXG4gIGFuaW1hdGVfYWltX2Rvd246IC0+XG4gICAgY3VycmVudF9mcmFtZSA9IEBhbmltYXRpb25zLmN1cnJlbnRGcmFtZS5uYW1lXG4gICAgQGd1bl9wb3NfaW5kZXggLT0gMSBpZiBAZ3VuX3Bvc19pbmRleCA+IDBcblxuICAgIGZvciBwb3MsIGluZGV4IGluIEBsZWdfcG9zXG4gICAgICBAbGVnX3Bvc19pbmRleCA9IGluZGV4XG4gICAgICBicmVhayBpZiBjdXJyZW50X2ZyYW1lLm1hdGNoIHBvc1xuXG4gICAgQGFuaW1hdGlvbnMuc3RvcCgpXG4gICAgQGFuaW1hdGlvbnMucGxheSBcIm1vdmUtI3tAZ3VuX3Bvc1tAZ3VuX3Bvc19pbmRleF19XCJcbiAgICBAYW5pbWF0aW9ucy5uZXh0IEBsZWdfcG9zX2luZGV4XG5cbiAgIyBzaG9vdCFcbiAgc2hvb3Q6IC0+XG4gICAgaWYgQG51bV9idWxsZXRzID4gMFxuICAgICAgQG51bV9idWxsZXRzIC09IDFcbiAgICAgIEBhbW1vLmNyb3AoKVxuICAgICAgQGJ1bGxldHMuc2hvb3QoKVxuXG4gIHNldHVwQ29udHJvbHM6IC0+XG4gICAgIyBtYXAgY29udHJvbCBrZXlzXG4gICAgY29udHJvbHMgPSBpZiBAaXNfcGxheWVyX29uZSB0aGVuIFBMQVlFUl9PTkVfQ09OVFJPTFMgZWxzZSBQTEFZRVJfVFdPX0NPTlRST0xTXG4gICAgXy5lYWNoIGNvbnRyb2xzLCAoa2V5LCBhY3Rpb24pID0+XG4gICAgICBpbnB1dCA9IEBnYW1lX3N0YXRlLmlucHV0LmtleWJvYXJkLmFkZEtleSBQaGFzZXIuS2V5Ym9hcmRba2V5XVxuICAgICAgaW5wdXQub25Eb3duLmFkZCA9PiBAW2FjdGlvbl0oKVxuICAgICAgaW5wdXQub25Eb3duLmFkZCA9PiBAbW92aW5nID0gdHJ1ZSBpZiBhY3Rpb24ubWF0Y2ggJ21vdmUnXG4gICAgICBpbnB1dC5vblVwLmFkZCAgID0+IEBbXCIje2FjdGlvbn1fb2ZmXCJdKCkgaWYgYWN0aW9uLm1hdGNoICdtb3ZlJ1xuICAgICAgIyBpbnB1dC5vblVwLmFkZCAgID0+IEBbXCIje2FjdGlvbn1fb2ZmXCJdKClcblxuICBzZXR1cEFuaW1hdGlvbnM6IC0+XG4gICAgIyBkaWUgYW5pbWF0aW9uXG4gICAgQGFuaW1hdGlvbnMuYWRkICdkaWUnLCBbXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvaGl0J1xuICAgICAgJ2Nvd2JveS9kZWFkL2hpdCdcbiAgICAgICdjb3dib3kvZGVhZC9oaXQnXG4gICAgICAnY293Ym95L2RlYWQvcmlwJ1xuICAgICAgJ2Nvd2JveS9kZWFkL3JpcCdcbiAgICAgICdjb3dib3kvZGVhZC9yaXAnXG4gICAgXSwgRlJBTUVSQVRFLCBmYWxzZVxuXG4gICAgIyBtb3ZlIGFuaW1hdGlub3NcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtaGlnaCcsIFtcbiAgICAgICdjb3dib3kvaGlnaC90d28nXG4gICAgICAnY293Ym95L2hpZ2gvb25lJ1xuICAgICAgJ2Nvd2JveS9oaWdoL2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9oaWdoL29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcbiAgICBAYW5pbWF0aW9ucy5hZGQgJ21vdmUtbG93JywgW1xuICAgICAgJ2Nvd2JveS9sb3cvdHdvJ1xuICAgICAgJ2Nvd2JveS9sb3cvb25lJ1xuICAgICAgJ2Nvd2JveS9sb3cvY3Jvc3MnXG4gICAgICAnY293Ym95L2xvdy9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLW1lZGhpZ2gnLCBbXG4gICAgICAnY293Ym95L21lZGhpZ2gvdHdvJ1xuICAgICAgJ2Nvd2JveS9tZWRoaWdoL29uZSdcbiAgICAgICdjb3dib3kvbWVkaGlnaC9jcm9zcydcbiAgICAgICdjb3dib3kvbWVkaGlnaC9vbmUnXG4gICAgXSwgRlJBTUVSQVRFLCB0cnVlXG4gICAgQGFuaW1hdGlvbnMuYWRkICdtb3ZlLW1lZGxvdycsIFtcbiAgICAgICdjb3dib3kvbWVkbG93L3R3bydcbiAgICAgICdjb3dib3kvbWVkbG93L29uZSdcbiAgICAgICdjb3dib3kvbWVkbG93L2Nyb3NzJ1xuICAgICAgJ2Nvd2JveS9tZWRsb3cvb25lJ1xuICAgIF0sIEZSQU1FUkFURSwgdHJ1ZVxuICAgIEBhbmltYXRpb25zLmFkZCAnbW92ZS1tZWQnLCBbXG4gICAgICAnY293Ym95L21lZC90d28nXG4gICAgICAnY293Ym95L21lZC9vbmUnXG4gICAgICAnY293Ym95L21lZC9jcm9zcydcbiAgICAgICdjb3dib3kvbWVkL29uZSdcbiAgICBdLCBGUkFNRVJBVEUsIHRydWVcblxuICBjcmVhdGVTdGF0ZU1hY2hpbmU6IC0+XG4gICAgQHN0YXRlID0gU3RhdGVNYWNoaW5lLmNyZWF0ZVxuICAgICAgaW5pdGlhbDogJ19pZGxlJ1xuICAgICAgZXZlbnRzOiBbXG4gICAgICAgIHsgbmFtZTogJ19pZGxlJywgZnJvbTogJyonLCB0bzogJ2lkbGluZycgfVxuICAgICAgICB7IG5hbWU6ICdfbW92ZScsIGZyb206ICcqJywgdG86ICdtb3ZpbmcnIH1cbiAgICAgICAgeyBuYW1lOiAnX2RpZScsICBmcm9tOiAnKicsIHRvOiAnZHlpbmcnICB9IF1cbiAgICAgIGNhbGxiYWNrczpcbiAgICAgICAgb25faWRsZTogKGV2ZW50LCBmcm9tLCB0bykgPT4gQGFuaW1hdGlvbnMuc3RvcCBudWxsLCB0cnVlXG4gICAgICAgIG9uX21vdmU6IChldmVudCwgZnJvbSwgdG8pID0+IEBwbGF5IFwibW92ZS0je0BndW5fcG9zW0BndW5fcG9zX2luZGV4XX1cIlxuICAgICAgICBvbl9kaWU6IChldmVudCwgZnJvbSwgdG8pICA9PiBAcGxheSBcImRpZVwiXG5cbm1vZHVsZS5leHBvcnRzID0gQ293Ym95XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3ByaXRlcy9Db3dib3kuY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGbG9vciBleHRlbmRzIFBoYXNlci5TcHJpdGVcbiAgY29uc3RydWN0b3I6IChAZ2FtZSwgeV9vZmZzZXQ9MCkgLT5cbiAgICBzdXBlciBAZ2FtZSwgMCwgQGdhbWUuaGVpZ2h0ICsgeV9vZmZzZXRcbiAgICBAZ2FtZS5waHlzaWNzLmVuYWJsZSBALCBQaGFzZXIuUGh5c2ljcy5BUkNBREVcbiAgICBAYm9keS5zZXRTaXplIEBnYW1lLndvcmxkLndpZHRoLCA1LCAwLCAwXG4gICAgQGJvZHkuYWxsb3dHcmF2aXR5ID0gZmFsc2VcbiAgICBAYm9keS5pbW1vdmFibGUgPSB0cnVlXG4gICAgQGdhbWUuYWRkLmV4aXN0aW5nIEBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zcHJpdGVzL0Zsb29yLmNvZmZlZVxuICoqLyIsImNsYXNzIFRleHQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIGZyYW1lLCB4PTAsIHk9MCkgLT5cbiAgICBrZXkgPSAnYXRsYXMnXG4gICAgc3VwZXIgQGdhbWUsIHgsIHksIGtleSwgXCJ0ZXh0LyN7ZnJhbWV9XCJcblxuICAgICMgY2xlYW4gdXBcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuICAgIEBoaWRlKClcblxuICAgIHJldHVybiBAXG5cbiAgcGxhY2U6ICh4LCB5KSAtPlxuICAgIEB4ID0geFxuICAgIEB5ID0geVxuXG4gIHNob3c6IC0+IEByZXNldCBAeCwgQHlcblxuICBoaWRlOiAtPiBAa2lsbCgpXG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvVGV4dC5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhbGwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlXG4gIGNvbnN0cnVjdG9yOiAoQGdhbWUsIHhfb2Zmc2V0PTApIC0+XG4gICAgc3VwZXIgQGdhbWUsIHhfb2Zmc2V0LCAwXG4gICAgQGdhbWUucGh5c2ljcy5lbmFibGUgQCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFXG4gICAgQGJvZHkuc2V0U2l6ZSAxLCBAZ2FtZS53b3JsZC5oZWlnaHQsIDAsIDBcbiAgICBAYm9keS5hbGxvd0dyYXZpdHkgPSBmYWxzZVxuICAgIEBib2R5LmltbW92YWJsZSA9IHRydWVcbiAgICBAZ2FtZS5hZGQuZXhpc3RpbmcgQFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3Nwcml0ZXMvV2FsbC5jb2ZmZWVcbiAqKi8iLCJjbGFzcyBCb290XG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICAjIHNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIGJsYWNrXG4gICAgQGdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAwMDAnXG5cbiAgICAjIFNjYWxlIHRoZSBnYW1lIGluIHRoZSBicm93c2VyXG4gICAgQHNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWVcbiAgICBAc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTFxuXG4gICAgIyBzdGFydCBwcmVsb2FkXG4gICAgQHN0YXRlLnN0YXJ0ICdwcmVsb2FkJ1xuXG4gIHByZWxvYWQ6IC0+XG4gICAgIyBzZXQgaW50aWFsIHNjYWxlXG4gICAgQGdhbWUuc2NhbGVyKClcblxubW9kdWxlLmV4cG9ydHMgPSBCb290XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL2Jvb3QuY29mZmVlXG4gKiovIiwiIyBCT1VORFNcbkZsb29yICAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9GbG9vci5jb2ZmZWUnXG5DZWlsaW5nICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ2VpbGluZy5jb2ZmZWUnXG5XYWxsICAgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2FsbC5jb2ZmZWUnXG5XQUxMX09GRlNFVCA9IDI3NVxuXG4jIEhVRFxuIyBUaW1lciAgPSByZXF1aXJlICcuLi9zcHJpdGVzL1RpbWVyLmNvZmZlZSdcbiMgU2NvcmUgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9TY29yZS5jb2ZmZWUnXG5cbiMgU1BSSVRFU1xuQ293Ym95ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9Db3dib3kuY29mZmVlJ1xuIyBDYWN0dXMgPSByZXF1aXJlICcuLi9zcHJpdGVzL0NhY3R1cy5jb2ZmZWUnXG4jIFRyZWUgICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVHJlZS5jb2ZmZWUnXG4jIFdhZ29uICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvV2Fnb24uY29mZmVlJ1xuXG5TVEFSVElOR19USU1FID0gNzBcbk5PX0FNTU9fQ09VTlRET1dOID0gMTBcblxuY2xhc3MgR2FtZVxuICBjb25zdHJ1Y3RvcjogLT5cblxuICBjcmVhdGU6IC0+XG4gICAgIyBjcmVhdGUgdGhlIGJvdW5kc1xuICAgIEBjZWlsaW5nICAgID0gbmV3IENlaWxpbmcgQGdhbWUsIDQ1XG4gICAgQGZsb29yICAgICAgPSBuZXcgRmxvb3IgQGdhbWUsIC00NVxuICAgIEBsZWZ0X3dhbGxfb3V0ZXIgPSBuZXcgV2FsbCBAZ2FtZSwgOTJcbiAgICBAbGVmdF93YWxsICA9IG5ldyBXYWxsIEBnYW1lLCBAZ2FtZS53b3JsZC53aWR0aCAvIDIgLSBXQUxMX09GRlNFVFxuICAgIEByaWdodF93YWxsX291dGVyID0gbmV3IFdhbGwgQGdhbWUsIDk5NlxuICAgIEByaWdodF93YWxsID0gbmV3IFdhbGwgQGdhbWUsIEBnYW1lLndvcmxkLndpZHRoIC8gMiAgKyBXQUxMX09GRlNFVFxuXG4gICAgIyBzZXR1cCB0aGUgaHVkXG5cblxuICAgICMgY3JlYXRlIHRoZSBwbGF5ZXJzXG4gICAgQHBsYXllcl9vbmUgPSBuZXcgQ293Ym95IEBnYW1lLCBAXG4gICAgQHBsYXllcl90d28gPSBuZXcgQ293Ym95IEBnYW1lLCBALCBmYWxzZVxuXG4gICAgIyBjb2xsaXNpb24gZWxlbWVudHNcbiAgICBAYnVsbGV0cyAgPSBbIEBwbGF5ZXJfb25lLmJ1bGxldHMsIEBwbGF5ZXJfdHdvLmJ1bGxldHMgXVxuICAgIEB3YWxscyAgICA9IFsgQGxlZnRfd2FsbCwgQHJpZ2h0X3dhbGwgXVxuICAgIEBzdXJmYWNlcyA9IFsgQGNlaWxpbmcsIEBmbG9vciBdXG4gICAgQHBsYXllcnMgID0gWyBAcGxheWVyX29uZSwgQHBsYXllcl90d28gXVxuXG4gICAgIyBzdGFydCB0aGUgZ2FtZVxuICAgIEBzdGFydCgpXG5cbiAgc3RhcnQ6IC0+XG4gICAgIyBpbnRybyB0aGUgbGV2ZWwsIHBsYWNlIHRlcnJhaW4gb24gdGhlIG1hcFxuICAgIEBzZXR1cExldmVsKClcblxuICB1cGRhdGU6IC0+XG4gICAgIyBzZXQgYm91bmNlIHN1cmZhY2VzIGZvciBidWxsZXRzXG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSBAYnVsbGV0cywgQHN1cmZhY2VzXG5cbiAgICAjIHNldCBwbGF5ZXIsIGJ1bGxldCBjb2xsaXNpb25zXG4gICAgQGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSBAYnVsbGV0cywgQHBsYXllcnMsIChwbGF5ZXIsIGJ1bGxldCkgPT5cbiAgICAgICMgZGlzYWJsZSBpbnB1dHNcbiAgICAgICMgQGlucHV0XG4gICAgICAjIGtpbGwgYWxsIGJ1bGxldHMgaW4gdGhlIGZpZWxkXG4gICAgICBiLmtpbGwoKSBmb3IgYiBpbiBAcGxheWVyX29uZS5idWxsZXRzLmNoaWxkcmVuXG4gICAgICBiLmtpbGwoKSBmb3IgYiBpbiBAcGxheWVyX3R3by5idWxsZXRzLmNoaWxkcmVuXG4gICAgICAjIGluY3JlYXNlIHNjb3JlIG9mIHdpbm5pbmcgcGxheWVyXG4gICAgICBidWxsZXQucGxheWVyLmlkbGUoKVxuICAgICAgYnVsbGV0LnBsYXllci53aW5zICs9IDFcbiAgICAgICMgaW5jcmVhc2UgZ2FtZSdzIGxldmVsXG4gICAgICBAZ2FtZS5sZXZlbCArPSAxXG4gICAgICAjIHRyaWdnZXIgcGxheWVyIGRlYXRoXG4gICAgICBwbGF5ZXIuZGllKClcblxuICByZW5kZXI6IC0+XG4gICAgaWYgQGdhbWUuZGVidWdNb2RlXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBjZWlsaW5nXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBmbG9vclxuICAgICAgQGdhbWUuZGVidWcuYm9keSBAbGVmdF93YWxsXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEByaWdodF93YWxsXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBwbGF5ZXJfb25lXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBwbGF5ZXJfdHdvXG4gICAgICBAZ2FtZS5kZWJ1Zy5ib2R5IEBwbGF5ZXJfb25lLmJ1bGxldHNcbiAgICAgIEBnYW1lLmRlYnVnLmJvZHkgQHBsYXllcl90d28uYnVsbGV0c1xuXG4gIHNldHVwTGV2ZWw6IC0+XG4gICAgbGV2ZWxfbnVtID0gQGdhbWUubGV2ZWxcbiAgICBsZXZlbCA9IEBnYW1lLmNvbnN0YW50cy5MRVZFTFNbXCIje2xldmVsX251bX1cIl1cbiAgICBjb25zb2xlLmxvZyBsZXZlbFxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvZ2FtZS5jb2ZmZWVcbiAqKi8iLCIjIFNQUklURVNcbiMgQ293Ym95ID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9Db3dib3kuY29mZmVlJ1xuIyBCdWxsZXQgPSByZXF1aXJlICcuLi9zcHJpdGVzL0J1bGxldC5jb2ZmZWUnXG4jIENhY3R1cyA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvQ2FjdHVzLmNvZmZlZSdcbiMgVHJlZSAgID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9UcmVlLmNvZmZlZSdcbiMgV2Fnb24gID0gcmVxdWlyZSAnLi4vc3ByaXRlcy9XYWdvbi5jb2ZmZWUnXG5cbiMgSFVEXG4jIFRpbWVyICA9IHJlcXVpcmUgJy4uL3Nwcml0ZXMvVGltZXIuY29mZmVlJ1xuIyBBbW1vICAgPSByZXF1aXJlICcuLi9zcHJpdGVzL0FtbW8uY29mZmVlJ1xuXG5cbmNsYXNzIEludHJvXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gIGNyZWF0ZTogLT5cbiAgICBjb25zb2xlLmxvZyAnaW50cm8nXG5cblxuICBzdGFydDogLT5cblxuICB1cGRhdGU6IC0+XG5cbm1vZHVsZS5leHBvcnRzID0gSW50cm9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvZmZlZXNjcmlwdHMvZ2FtZS9zdGF0ZXMvaW50cm8uY29mZmVlXG4gKiovIiwiY2xhc3MgUHJlbG9hZFxuICBjb25zdHJ1Y3RvcjogLT5cblxuICBwcmVsb2FkOiAtPlxuICAgIEBsb2FkLmNyb3NzT3JpZ2luID0gQGdhbWUuaG9zdHVybCB1bmxlc3MgQGdhbWUuY2RuIGlzICcvJ1xuXG4gICAgIyBMT0FEIFNUVUZGU1xuICAgIENETiA9IEBnYW1lLmNkblxuICAgICMgU1BSSVRFU1xuICAgIGtleSA9ICdhdGxhcydcbiAgICB0ZXh0dXJlX3VybCA9IFwiI3tDRE59aW1hZ2VzL2F0bGFzLnBuZ1wiXG4gICAgYXRsYXNfZGF0YSA9IHJlcXVpcmUgJy4uL2NvbnN0YW50cy9hdGxhcy5jb2ZmZWUnXG4gICAgQGxvYWQuYXRsYXNKU09OSGFzaCBrZXksIHRleHR1cmVfdXJsLCBudWxsLCBhdGxhc19kYXRhXG5cbiAgICAjIFNGWFxuICAgIF8uZWFjaCBAZ2FtZS5jb25zdGFudHMuU0ZYLCAoc2Z4KSA9PlxuICAgICAgYXNzZXQgPSBAbG9hZC5hdWRpbyBzZngsXG4gICAgICBbXCIje0NETn1hdWRpby8je3NmeH0ubXAzI3tAZ2FtZS52ZXJzaW9ufVwiLFxuICAgICAgXCIje0NETn1hdWRpby8je3NmeH0ub2dnI3tAZ2FtZS52ZXJzaW9ufVwiXVxuICAgICAgYXNzZXQuY3Jvc3NPcmlnaW4gPSBAbG9hZC5jcm9zc09yaWdpbiAgdW5sZXNzIEBnYW1lLmNkbiBpcyAnLydcblxuICB1cGRhdGU6IC0+XG4gICAgaWYgQGdhbWUuZGVidWdNb2RlXG4gICAgICBAc3RhdGUuc3RhcnQgJ2dhbWUnXG4gICAgZWxzZVxuICAgICAgQHN0YXRlLnN0YXJ0ICdpbnRybydcblxubW9kdWxlLmV4cG9ydHMgPSBQcmVsb2FkXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL2dhbWUvc3RhdGVzL3ByZWxvYWQuY29mZmVlXG4gKiovIiwiTGF1bmNoR2FtZSA9IHJlcXVpcmUgJy4vZ2FtZS9sYXVuY2guY29mZmVlJ1xuXG4jcmVhZHlcbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG5cblx0Y29uc29sZS5sb2cgJ2FsbCByZWFkeSdcblx0TGF1bmNoR2FtZSgpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb2ZmZWVzY3JpcHRzL21haW4uY29mZmVlXG4gKiovIiwiLypcblxuICBKYXZhc2NyaXB0IFN0YXRlIE1hY2hpbmUgTGlicmFyeSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlc2dvcmRvbi9qYXZhc2NyaXB0LXN0YXRlLW1hY2hpbmVcblxuICBDb3B5cmlnaHQgKGMpIDIwMTIsIDIwMTMsIDIwMTQsIDIwMTUsIEpha2UgR29yZG9uIGFuZCBjb250cmlidXRvcnNcbiAgUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIC0gaHR0cHM6Ly9naXRodWIuY29tL2pha2VzZ29yZG9uL2phdmFzY3JpcHQtc3RhdGUtbWFjaGluZS9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIFN0YXRlTWFjaGluZSA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBWRVJTSU9OOiBcIjIuMy41XCIsXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgUmVzdWx0OiB7XG4gICAgICBTVUNDRUVERUQ6ICAgIDEsIC8vIHRoZSBldmVudCB0cmFuc2l0aW9uZWQgc3VjY2Vzc2Z1bGx5IGZyb20gb25lIHN0YXRlIHRvIGFub3RoZXJcbiAgICAgIE5PVFJBTlNJVElPTjogMiwgLy8gdGhlIGV2ZW50IHdhcyBzdWNjZXNzZnVsbCBidXQgbm8gc3RhdGUgdHJhbnNpdGlvbiB3YXMgbmVjZXNzYXJ5XG4gICAgICBDQU5DRUxMRUQ6ICAgIDMsIC8vIHRoZSBldmVudCB3YXMgY2FuY2VsbGVkIGJ5IHRoZSBjYWxsZXIgaW4gYSBiZWZvcmVFdmVudCBjYWxsYmFja1xuICAgICAgUEVORElORzogICAgICA0ICAvLyB0aGUgZXZlbnQgaXMgYXN5bmNocm9ub3VzIGFuZCB0aGUgY2FsbGVyIGlzIGluIGNvbnRyb2wgb2Ygd2hlbiB0aGUgdHJhbnNpdGlvbiBvY2N1cnNcbiAgICB9LFxuXG4gICAgRXJyb3I6IHtcbiAgICAgIElOVkFMSURfVFJBTlNJVElPTjogMTAwLCAvLyBjYWxsZXIgdHJpZWQgdG8gZmlyZSBhbiBldmVudCB0aGF0IHdhcyBpbm5hcHJvcHJpYXRlIGluIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICBQRU5ESU5HX1RSQU5TSVRJT046IDIwMCwgLy8gY2FsbGVyIHRyaWVkIHRvIGZpcmUgYW4gZXZlbnQgd2hpbGUgYW4gYXN5bmMgdHJhbnNpdGlvbiB3YXMgc3RpbGwgcGVuZGluZ1xuICAgICAgSU5WQUxJRF9DQUxMQkFDSzogICAzMDAgLy8gY2FsbGVyIHByb3ZpZGVkIGNhbGxiYWNrIGZ1bmN0aW9uIHRocmV3IGFuIGV4Y2VwdGlvblxuICAgIH0sXG5cbiAgICBXSUxEQ0FSRDogJyonLFxuICAgIEFTWU5DOiAnYXN5bmMnLFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNyZWF0ZTogZnVuY3Rpb24oY2ZnLCB0YXJnZXQpIHtcblxuICAgICAgdmFyIGluaXRpYWwgICAgICA9ICh0eXBlb2YgY2ZnLmluaXRpYWwgPT0gJ3N0cmluZycpID8geyBzdGF0ZTogY2ZnLmluaXRpYWwgfSA6IGNmZy5pbml0aWFsOyAvLyBhbGxvdyBmb3IgYSBzaW1wbGUgc3RyaW5nLCBvciBhbiBvYmplY3Qgd2l0aCB7IHN0YXRlOiAnZm9vJywgZXZlbnQ6ICdzZXR1cCcsIGRlZmVyOiB0cnVlfGZhbHNlIH1cbiAgICAgIHZhciB0ZXJtaW5hbCAgICAgPSBjZmcudGVybWluYWwgfHwgY2ZnWydmaW5hbCddO1xuICAgICAgdmFyIGZzbSAgICAgICAgICA9IHRhcmdldCB8fCBjZmcudGFyZ2V0ICB8fCB7fTtcbiAgICAgIHZhciBldmVudHMgICAgICAgPSBjZmcuZXZlbnRzIHx8IFtdO1xuICAgICAgdmFyIGNhbGxiYWNrcyAgICA9IGNmZy5jYWxsYmFja3MgfHwge307XG4gICAgICB2YXIgbWFwICAgICAgICAgID0ge307IC8vIHRyYWNrIHN0YXRlIHRyYW5zaXRpb25zIGFsbG93ZWQgZm9yIGFuIGV2ZW50IHsgZXZlbnQ6IHsgZnJvbTogWyB0byBdIH0gfVxuICAgICAgdmFyIHRyYW5zaXRpb25zICA9IHt9OyAvLyB0cmFjayBldmVudHMgYWxsb3dlZCBmcm9tIGEgc3RhdGUgICAgICAgICAgICB7IHN0YXRlOiBbIGV2ZW50IF0gfVxuXG4gICAgICB2YXIgYWRkID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZnJvbSA9IChlLmZyb20gaW5zdGFuY2VvZiBBcnJheSkgPyBlLmZyb20gOiAoZS5mcm9tID8gW2UuZnJvbV0gOiBbU3RhdGVNYWNoaW5lLldJTERDQVJEXSk7IC8vIGFsbG93ICd3aWxkY2FyZCcgdHJhbnNpdGlvbiBpZiAnZnJvbScgaXMgbm90IHNwZWNpZmllZFxuICAgICAgICBtYXBbZS5uYW1lXSA9IG1hcFtlLm5hbWVdIHx8IHt9O1xuICAgICAgICBmb3IgKHZhciBuID0gMCA7IG4gPCBmcm9tLmxlbmd0aCA7IG4rKykge1xuICAgICAgICAgIHRyYW5zaXRpb25zW2Zyb21bbl1dID0gdHJhbnNpdGlvbnNbZnJvbVtuXV0gfHwgW107XG4gICAgICAgICAgdHJhbnNpdGlvbnNbZnJvbVtuXV0ucHVzaChlLm5hbWUpO1xuXG4gICAgICAgICAgbWFwW2UubmFtZV1bZnJvbVtuXV0gPSBlLnRvIHx8IGZyb21bbl07IC8vIGFsbG93IG5vLW9wIHRyYW5zaXRpb24gaWYgJ3RvJyBpcyBub3Qgc3BlY2lmaWVkXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgIGluaXRpYWwuZXZlbnQgPSBpbml0aWFsLmV2ZW50IHx8ICdzdGFydHVwJztcbiAgICAgICAgYWRkKHsgbmFtZTogaW5pdGlhbC5ldmVudCwgZnJvbTogJ25vbmUnLCB0bzogaW5pdGlhbC5zdGF0ZSB9KTtcbiAgICAgIH1cblxuICAgICAgZm9yKHZhciBuID0gMCA7IG4gPCBldmVudHMubGVuZ3RoIDsgbisrKVxuICAgICAgICBhZGQoZXZlbnRzW25dKTtcblxuICAgICAgZm9yKHZhciBuYW1lIGluIG1hcCkge1xuICAgICAgICBpZiAobWFwLmhhc093blByb3BlcnR5KG5hbWUpKVxuICAgICAgICAgIGZzbVtuYW1lXSA9IFN0YXRlTWFjaGluZS5idWlsZEV2ZW50KG5hbWUsIG1hcFtuYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGZvcih2YXIgbmFtZSBpbiBjYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICBmc21bbmFtZV0gPSBjYWxsYmFja3NbbmFtZV1cbiAgICAgIH1cblxuICAgICAgZnNtLmN1cnJlbnQgICAgID0gJ25vbmUnO1xuICAgICAgZnNtLmlzICAgICAgICAgID0gZnVuY3Rpb24oc3RhdGUpIHsgcmV0dXJuIChzdGF0ZSBpbnN0YW5jZW9mIEFycmF5KSA/IChzdGF0ZS5pbmRleE9mKHRoaXMuY3VycmVudCkgPj0gMCkgOiAodGhpcy5jdXJyZW50ID09PSBzdGF0ZSk7IH07XG4gICAgICBmc20uY2FuICAgICAgICAgPSBmdW5jdGlvbihldmVudCkgeyByZXR1cm4gIXRoaXMudHJhbnNpdGlvbiAmJiAobWFwW2V2ZW50XS5oYXNPd25Qcm9wZXJ0eSh0aGlzLmN1cnJlbnQpIHx8IG1hcFtldmVudF0uaGFzT3duUHJvcGVydHkoU3RhdGVNYWNoaW5lLldJTERDQVJEKSk7IH1cbiAgICAgIGZzbS5jYW5ub3QgICAgICA9IGZ1bmN0aW9uKGV2ZW50KSB7IHJldHVybiAhdGhpcy5jYW4oZXZlbnQpOyB9O1xuICAgICAgZnNtLnRyYW5zaXRpb25zID0gZnVuY3Rpb24oKSAgICAgIHsgcmV0dXJuIHRyYW5zaXRpb25zW3RoaXMuY3VycmVudF07IH07XG4gICAgICBmc20uaXNGaW5pc2hlZCAgPSBmdW5jdGlvbigpICAgICAgeyByZXR1cm4gdGhpcy5pcyh0ZXJtaW5hbCk7IH07XG4gICAgICBmc20uZXJyb3IgICAgICAgPSBjZmcuZXJyb3IgfHwgZnVuY3Rpb24obmFtZSwgZnJvbSwgdG8sIGFyZ3MsIGVycm9yLCBtc2csIGUpIHsgdGhyb3cgZSB8fCBtc2c7IH07IC8vIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBzb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5zIGlzIHRvIHRocm93IGFuIGV4Y2VwdGlvbiwgYnV0IGNhbGxlciBjYW4gb3ZlcnJpZGUgdGhpcyBiZWhhdmlvciBpZiBkZXNpcmVkIChzZWUgZ2l0aHViIGlzc3VlICMzIGFuZCAjMTcpXG5cbiAgICAgIGlmIChpbml0aWFsICYmICFpbml0aWFsLmRlZmVyKVxuICAgICAgICBmc21baW5pdGlhbC5ldmVudF0oKTtcblxuICAgICAgcmV0dXJuIGZzbTtcblxuICAgIH0sXG5cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZG9DYWxsYmFjazogZnVuY3Rpb24oZnNtLCBmdW5jLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZnVuYy5hcHBseShmc20sIFtuYW1lLCBmcm9tLCB0b10uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZzbS5lcnJvcihuYW1lLCBmcm9tLCB0bywgYXJncywgU3RhdGVNYWNoaW5lLkVycm9yLklOVkFMSURfQ0FMTEJBQ0ssIFwiYW4gZXhjZXB0aW9uIG9jY3VycmVkIGluIGEgY2FsbGVyLXByb3ZpZGVkIGNhbGxiYWNrIGZ1bmN0aW9uXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZUFueUV2ZW50OiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uYmVmb3JlZXZlbnQnXSwgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBhZnRlckFueUV2ZW50OiAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmFmdGVyZXZlbnQnXSB8fCBmc21bJ29uZXZlbnQnXSwgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgbGVhdmVBbnlTdGF0ZTogICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25sZWF2ZXN0YXRlJ10sICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGVudGVyQW55U3RhdGU6ICAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29uZW50ZXJzdGF0ZSddIHx8IGZzbVsnb25zdGF0ZSddLCAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBjaGFuZ2VTdGF0ZTogICAgIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmNoYW5nZXN0YXRlJ10sICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG5cbiAgICBiZWZvcmVUaGlzRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmJlZm9yZScgKyBuYW1lXSwgICAgICAgICAgICAgICAgICAgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG4gICAgYWZ0ZXJUaGlzRXZlbnQ6ICBmdW5jdGlvbihmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSB7IHJldHVybiBTdGF0ZU1hY2hpbmUuZG9DYWxsYmFjayhmc20sIGZzbVsnb25hZnRlcicgICsgbmFtZV0gfHwgZnNtWydvbicgKyBuYW1lXSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpOyB9LFxuICAgIGxlYXZlVGhpc1N0YXRlOiAgZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykgeyByZXR1cm4gU3RhdGVNYWNoaW5lLmRvQ2FsbGJhY2soZnNtLCBmc21bJ29ubGVhdmUnICArIGZyb21dLCAgICAgICAgICAgICAgICAgICAgIG5hbWUsIGZyb20sIHRvLCBhcmdzKTsgfSxcbiAgICBlbnRlclRoaXNTdGF0ZTogIGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHsgcmV0dXJuIFN0YXRlTWFjaGluZS5kb0NhbGxiYWNrKGZzbSwgZnNtWydvbmVudGVyJyAgKyB0b10gICB8fCBmc21bJ29uJyArIHRvXSwgICBuYW1lLCBmcm9tLCB0bywgYXJncyk7IH0sXG5cbiAgICBiZWZvcmVFdmVudDogZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgaWYgKChmYWxzZSA9PT0gU3RhdGVNYWNoaW5lLmJlZm9yZVRoaXNFdmVudChmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKSkgfHxcbiAgICAgICAgICAoZmFsc2UgPT09IFN0YXRlTWFjaGluZS5iZWZvcmVBbnlFdmVudCggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIGFmdGVyRXZlbnQ6IGZ1bmN0aW9uKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpIHtcbiAgICAgIFN0YXRlTWFjaGluZS5hZnRlclRoaXNFdmVudChmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgIFN0YXRlTWFjaGluZS5hZnRlckFueUV2ZW50KCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgbGVhdmVTdGF0ZTogZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgdmFyIHNwZWNpZmljID0gU3RhdGVNYWNoaW5lLmxlYXZlVGhpc1N0YXRlKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpLFxuICAgICAgICAgIGdlbmVyYWwgID0gU3RhdGVNYWNoaW5lLmxlYXZlQW55U3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgaWYgKChmYWxzZSA9PT0gc3BlY2lmaWMpIHx8IChmYWxzZSA9PT0gZ2VuZXJhbCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGVsc2UgaWYgKChTdGF0ZU1hY2hpbmUuQVNZTkMgPT09IHNwZWNpZmljKSB8fCAoU3RhdGVNYWNoaW5lLkFTWU5DID09PSBnZW5lcmFsKSlcbiAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5BU1lOQztcbiAgICB9LFxuXG4gICAgZW50ZXJTdGF0ZTogZnVuY3Rpb24oZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncykge1xuICAgICAgU3RhdGVNYWNoaW5lLmVudGVyVGhpc1N0YXRlKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgU3RhdGVNYWNoaW5lLmVudGVyQW55U3RhdGUoIGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgIH0sXG5cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgYnVpbGRFdmVudDogZnVuY3Rpb24obmFtZSwgbWFwKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGZyb20gID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB2YXIgdG8gICAgPSBtYXBbZnJvbV0gfHwgbWFwW1N0YXRlTWFjaGluZS5XSUxEQ0FSRF0gfHwgZnJvbTtcbiAgICAgICAgdmFyIGFyZ3MgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTsgLy8gdHVybiBhcmd1bWVudHMgaW50byBwdXJlIGFycmF5XG5cbiAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbilcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihuYW1lLCBmcm9tLCB0bywgYXJncywgU3RhdGVNYWNoaW5lLkVycm9yLlBFTkRJTkdfVFJBTlNJVElPTiwgXCJldmVudCBcIiArIG5hbWUgKyBcIiBpbmFwcHJvcHJpYXRlIGJlY2F1c2UgcHJldmlvdXMgdHJhbnNpdGlvbiBkaWQgbm90IGNvbXBsZXRlXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbm5vdChuYW1lKSlcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihuYW1lLCBmcm9tLCB0bywgYXJncywgU3RhdGVNYWNoaW5lLkVycm9yLklOVkFMSURfVFJBTlNJVElPTiwgXCJldmVudCBcIiArIG5hbWUgKyBcIiBpbmFwcHJvcHJpYXRlIGluIGN1cnJlbnQgc3RhdGUgXCIgKyB0aGlzLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmIChmYWxzZSA9PT0gU3RhdGVNYWNoaW5lLmJlZm9yZUV2ZW50KHRoaXMsIG5hbWUsIGZyb20sIHRvLCBhcmdzKSlcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5DQU5DRUxMRUQ7XG5cbiAgICAgICAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmFmdGVyRXZlbnQodGhpcywgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0Lk5PVFJBTlNJVElPTjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXBhcmUgYSB0cmFuc2l0aW9uIG1ldGhvZCBmb3IgdXNlIEVJVEhFUiBsb3dlciBkb3duLCBvciBieSBjYWxsZXIgaWYgdGhleSB3YW50IGFuIGFzeW5jIHRyYW5zaXRpb24gKGluZGljYXRlZCBieSBhbiBBU1lOQyByZXR1cm4gdmFsdWUgZnJvbSBsZWF2ZVN0YXRlKVxuICAgICAgICB2YXIgZnNtID0gdGhpcztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZnNtLnRyYW5zaXRpb24gPSBudWxsOyAvLyB0aGlzIG1ldGhvZCBzaG91bGQgb25seSBldmVyIGJlIGNhbGxlZCBvbmNlXG4gICAgICAgICAgZnNtLmN1cnJlbnQgPSB0bztcbiAgICAgICAgICBTdGF0ZU1hY2hpbmUuZW50ZXJTdGF0ZSggZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmNoYW5nZVN0YXRlKGZzbSwgbmFtZSwgZnJvbSwgdG8sIGFyZ3MpO1xuICAgICAgICAgIFN0YXRlTWFjaGluZS5hZnRlckV2ZW50KCBmc20sIG5hbWUsIGZyb20sIHRvLCBhcmdzKTtcbiAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lLlJlc3VsdC5TVUNDRUVERUQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5jYW5jZWwgPSBmdW5jdGlvbigpIHsgLy8gcHJvdmlkZSBhIHdheSBmb3IgY2FsbGVyIHRvIGNhbmNlbCBhc3luYyB0cmFuc2l0aW9uIGlmIGRlc2lyZWQgKGlzc3VlICMyMilcbiAgICAgICAgICBmc20udHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgICAgU3RhdGVNYWNoaW5lLmFmdGVyRXZlbnQoZnNtLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVhdmUgPSBTdGF0ZU1hY2hpbmUubGVhdmVTdGF0ZSh0aGlzLCBuYW1lLCBmcm9tLCB0bywgYXJncyk7XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbGVhdmUpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmUuUmVzdWx0LkNBTkNFTExFRDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTdGF0ZU1hY2hpbmUuQVNZTkMgPT09IGxlYXZlKSB7XG4gICAgICAgICAgcmV0dXJuIFN0YXRlTWFjaGluZS5SZXN1bHQuUEVORElORztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy50cmFuc2l0aW9uKSAvLyBuZWVkIHRvIGNoZWNrIGluIGNhc2UgdXNlciBtYW51YWxseSBjYWxsZWQgdHJhbnNpdGlvbigpIGJ1dCBmb3Jnb3QgdG8gcmV0dXJuIFN0YXRlTWFjaGluZS5BU1lOQ1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgIH07XG4gICAgfVxuXG4gIH07IC8vIFN0YXRlTWFjaGluZVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLy89PT09PT1cbiAgLy8gTk9ERVxuICAvLz09PT09PVxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTdGF0ZU1hY2hpbmU7XG4gICAgfVxuICAgIGV4cG9ydHMuU3RhdGVNYWNoaW5lID0gU3RhdGVNYWNoaW5lO1xuICB9XG4gIC8vPT09PT09PT09PT09XG4gIC8vIEFNRC9SRVFVSVJFXG4gIC8vPT09PT09PT09PT09XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbihyZXF1aXJlKSB7IHJldHVybiBTdGF0ZU1hY2hpbmU7IH0pO1xuICB9XG4gIC8vPT09PT09PT1cbiAgLy8gQlJPV1NFUlxuICAvLz09PT09PT09XG4gIGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuICAvLz09PT09PT09PT09XG4gIC8vIFdFQiBXT1JLRVJcbiAgLy89PT09PT09PT09PVxuICBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzZWxmLlN0YXRlTWFjaGluZSA9IFN0YXRlTWFjaGluZTtcbiAgfVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vamF2YXNjcmlwdC1zdGF0ZS1tYWNoaW5lL3N0YXRlLW1hY2hpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2Jvb3QuY29mZmVlXCI6IDE1LFxuXHRcIi4vZ2FtZS5jb2ZmZWVcIjogMTYsXG5cdFwiLi9pbnRyby5jb2ZmZWVcIjogMTcsXG5cdFwiLi9wcmVsb2FkLmNvZmZlZVwiOiAxOCxcblx0XCIuL3Jlc2V0LmNvZmZlZVwiOiAxOVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyMjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29mZmVlc2NyaXB0cy9nYW1lL3N0YXRlcyBeXFwuXFwvLipcXC5jb2ZmZWUkXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=