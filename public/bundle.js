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
	var EpisodeCount = __webpack_require__(3);

	var dummyEpisodes = [{
	  seasonNum: "1",
	  episodeNum: "1",
	  title: "Homers Episode"
	}, {
	  seasonNum: "2",
	  episodeNum: "2",
	  title: "Marge's Episode"
	}, {
	  seasonNum: "3",
	  episodeNum: "3",
	  title: "Hank Scorpios Episode"
	}, {
	  seasonNum: "4",
	  episodeNum: "4",
	  title: "Moes Episode"
	}];

	var EpisodeSelect = React.createClass({
	  displayName: 'EpisodeSelect',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'episodeSelect' },
	      React.createElement(EpisodeCount, { episode: dummyEpisodes }),
	      React.createElement(EpisodeList, { episode: dummyEpisodes })
	    );
	  }
	});

	module.exports = EpisodeSelect;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Episode = __webpack_require__(4);

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Episode = __webpack_require__(4);

	var EpisodeCount = React.createClass({
	  displayName: 'EpisodeCount',

	  render: function render() {
	    var list = this.props.episode.map(function (episode, i) {
	      return React.createElement(Episode, { key: i });
	    });

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'p',
	        null,
	        'Your search returned ',
	        list.length,
	        ' episodes'
	      )
	    );
	  }
	});

	module.exports = EpisodeCount;

/***/ },
/* 4 */
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

/***/ }
/******/ ]);