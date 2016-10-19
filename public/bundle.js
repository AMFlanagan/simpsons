/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EpisodeSelect = __webpack_require__(1);

	ReactDOM.render(React.createElement(EpisodeSelect, null), document.getElementById('container'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EpisodeList = __webpack_require__(2);
	var EpisodeCount = __webpack_require__(4);
	var CharacterList = __webpack_require__(5);
	var Resetit = __webpack_require__(14);
	var remainingEps = [];
	var remainingChars = [];

	var dummyEpisodes = [{
	  seasonNum: "3",
	  episodeNum: "1",
	  title: "Stark Raving Dad",
	  character: ["Bart", "MJ", "Lisa"]
	}, {
	  seasonNum: "3",
	  episodeNum: "2",
	  title: "Mr. Lisa Goes to washington",
	  character: ["Lisa"]
	}, {
	  seasonNum: "3",
	  episodeNum: "3",
	  title: "When Flanders Failed",
	  character: ["Flanders", "Homer"]
	}, {
	  seasonNum: "3",
	  episodeNum: "4",
	  title: "Bart The Murderer",
	  character: ["Bart", "FatTony"]
	}, {
	  seasonNum: "3",
	  episodeNum: "5",
	  title: "Homer Defined",
	  character: ["Homer", "Bart", "Millhouse"]
	}, {
	  seasonNum: "3",
	  episodeNum: "6",
	  title: "Like Farther Like Clown",
	  character: ["Bart", "lisa", "Krusty"]
	}, {
	  seasonNum: "3",
	  episodeNum: "7",
	  title: "TreeHouse of Horror II",
	  character: ["Homer", "Burns", "Bart"]
	}, {
	  seasonNum: "3",
	  episodeNum: "8",
	  title: "Lisas Pony",
	  character: ["Lisa"]
	}, {
	  seasonNum: "3",
	  episodeNum: "9",
	  title: "Saturdays of Thunder",
	  character: ["Bart", "Martin", "Nelson"]
	}, {
	  seasonNum: "3",
	  episodeNum: "10",
	  title: "Flaming Moe's",
	  character: ["Moe", "Homer"]
	}, {
	  seasonNum: "3",
	  episodeNum: "11",
	  title: "Burns Verkaufen der Kraftwerk",
	  character: ["Burns", "Homer"]
	}, {
	  seasonNum: "3",
	  episodeNum: "12",
	  title: "I married Marge",
	  character: ["Homer", "Marge"]
	}];

	var dummyCharacters = [{
	  character: "Homer",
	  picture: "./public/images/Homer.jpg"
	}, {
	  character: "Marge",
	  picture: "./public/images/Marge.jpg"
	}, {
	  character: "Bart",
	  picture: "public/images/Bart.jpg"
	}, {
	  character: "Lisa",
	  picture: "./public/images/Lisa.jpg"
	}, {
	  character: "Flanders",
	  picture: "./public/images/Flanders.jpg"
	}, {
	  character: "Millhouse",
	  picture: "./public/images/Millhouse.jpg"
	}, {
	  character: "Martin",
	  picture: "./public/images/Martin.jpg"
	}, {
	  character: "Nelson",
	  picture: "./public/images/Nelson.jpg"
	}, {
	  character: "Burns",
	  picture: "./public/images/Burns.jpg"
	}, {
	  character: "MJ",
	  picture: "./public/images/MJ.jpg"
	}, {
	  character: "Moe",
	  picture: "./public/images/Moe.jpg"
	}, {
	  character: "FatTony",
	  picture: "./public/images/FatTony.jpg"
	}];

	var EpisodeSelect = React.createClass({
	  displayName: 'EpisodeSelect',


	  getInitialState: function getInitialState() {
	    return {
	      selected: []
	    };
	  },

	  handleClick: function handleClick(character) {

	    var tryit = this.state.selected;

	    if (this.state.selected.indexOf(character) < 0 && this.state.selected.length < 3) {
	      tryit.push(character);

	      this.setState({
	        selected: tryit
	      });

	      console.log(this.state.selected);

	      this.episodeRidder(dummyEpisodes);
	    }
	  },

	  handleReset: function handleReset() {

	    this.setState({
	      selected: []

	    });

	    this.episodeRidder();

	    // console.log(this.state.selected)
	  },

	  episodeRidder: function episodeRidder(episodes) {
	    var remainingEps = [];

	    for (var i in episodes) {
	      var num = 0;
	      for (var j in episodes[i].character) {
	        for (var k in this.state.selected) {
	          if (this.state.selected[k] === episodes[i].character[j]) {
	            num++;
	          }
	        }
	        if (num === this.state.selected.length) {
	          remainingEps.push(episodes[i]);
	          var num = 0;
	        }
	      }
	    }

	    this.setState({
	      remainingEps: remainingEps
	    });

	    console.log(remainingEps);

	    var names = [];

	    for (var i in remainingEps) {
	      for (var j in remainingEps[i].character) {
	        if (names.indexOf(remainingEps[i].character[j]) < 0) names.push(remainingEps[i].character[j]);
	      }
	    }

	    var remainingChars = [];

	    for (var i in names) {
	      for (var j in dummyCharacters) {
	        if (names[i] == dummyCharacters[j].character) {
	          remainingChars.push(dummyCharacters[j]);
	        }
	      }
	    }

	    this.setState({
	      remainingChars: remainingChars
	    });
	    console.log(remainingChars);
	    console.log(names);
	  },

	  render: function render() {

	    if (this.state.remainingEps) {
	      return React.createElement(
	        'div',
	        { className: 'episodeSelect' },
	        React.createElement(CharacterList, { characters: this.state.remainingChars, handleClick: this.handleClick }),
	        React.createElement('br', null),
	        React.createElement(Resetit, { handleReset: this.handleReset }),
	        React.createElement('br', null),
	        React.createElement(EpisodeCount, { episode: this.state.remainingEps }),
	        React.createElement('br', null),
	        React.createElement(EpisodeList, { episode: this.state.remainingEps })
	      );
	    } else {
	      return React.createElement(
	        'div',
	        { className: 'episodeSelect' },
	        React.createElement(CharacterList, { characters: dummyCharacters, handleClick: this.handleClick }),
	        React.createElement('br', null),
	        React.createElement(Resetit, { handleReset: this.handleReset }),
	        React.createElement('br', null)
	      );
	    }
	  }

	});

	module.exports = EpisodeSelect;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Episode = __webpack_require__(3);

	var EpisodeList = React.createClass({
	  displayName: "EpisodeList",

	  render: function render() {
	    var list = this.props.episode.map(function (episode, i) {
	      return React.createElement(Episode, { key: i, season: episode.seasonNum,
	        episode: episode.episodeNum,
	        title: episode.title });
	    });

	    return React.createElement(
	      "div",
	      { className: "episodes" },
	      list
	    );
	  }
	});

	module.exports = EpisodeList;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var Episode = React.createClass({
	  displayName: "Episode",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "episode" },
	      React.createElement(
	        "div",
	        { className: "seasonNum" },
	        React.createElement(
	          "p",
	          null,
	          "Season: ",
	          this.props.season
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "episodeNum" },
	        React.createElement(
	          "p",
	          null,
	          "Episode: ",
	          this.props.episode
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "title" },
	        React.createElement(
	          "p",
	          null,
	          "Title: ",
	          this.props.title
	        )
	      )
	    );
	  }
	});

	module.exports = Episode;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Episode = __webpack_require__(3);

	var EpisodeCount = React.createClass({
	  displayName: "EpisodeCount",

	  render: function render() {
	    var list = this.props.episode.map(function (episode, i) {
	      return React.createElement(Episode, { key: i });
	    });

	    return React.createElement(
	      "p",
	      { className: "count" },
	      "Your search returned ",
	      list.length,
	      " episodes"
	    );
	  }
	});

	module.exports = EpisodeCount;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Character = __webpack_require__(6);

	var CharacterList = React.createClass({
	  displayName: "CharacterList",


	  render: function render() {
	    var self = this;
	    var list = this.props.characters.map(function (character, i) {
	      return React.createElement(Character, { key: i, character: character.character, picture: character.picture, handleClick: self.props.handleClick });
	    });

	    return React.createElement(
	      "div",
	      { className: "characters" },
	      list
	    );
	  }
	});

	module.exports = CharacterList;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var update = __webpack_require__(7);
	var Character = React.createClass({
	  displayName: "Character",


	  getInitialState: function getInitialState() {
	    console.log("init");
	    return {
	      selected: []
	    };
	  },

	  handleClick: function handleClick() {

	    this.props.handleClick(this.props.character);
	  },

	  render: function render() {

	    return React.createElement(
	      "div",
	      { className: "character" },
	      React.createElement("img", { src: this.props.picture, className: "ChaPic", onClick: this.handleClick })
	    );
	  }
	});

	module.exports = Character;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var _prodInvariant = __webpack_require__(10),
	    _assign = __webpack_require__(11);

	var keyOf = __webpack_require__(12);
	var invariant = __webpack_require__(13);
	var hasOwnProperty = {}.hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return _assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });

	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
	}

	/**
	 * Returns a updated shallow copy of an object without mutating the original.
	 * See https://facebook.github.io/react/docs/update.html for details.
	 */
	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
	    _assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	var Resetit = React.createClass({
	  displayName: "Resetit",


	  handleReset: function handleReset() {

	    this.props.handleReset();
	  },

	  render: function render() {
	    return React.createElement("input", { type: "button", value: "Reset", className: "reset", onClick: this.props.handleReset });
	  }
	});

	module.exports = Resetit;

/***/ }
/******/ ]);