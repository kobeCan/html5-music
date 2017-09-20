/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _music = __webpack_require__(6);

var _music2 = _interopRequireDefault(_music);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var music = new _music2.default({
	canvas: 'can',
	width: 800,
	height: 300
});
// 表单选择文件
chooseFile('selectBtn', 'formFile', function (files) {
	music.setFiles(files);
});

// 拖拽文件
dragFile('dragContainer', {
	dragenter: function dragenter() {},
	dragleave: function dragleave() {},
	dragover: function dragover() {},
	drop: function drop(files) {
		music.setFiles(files);
	}
});

function chooseFile(btnId, inputId, callback) {
	var btnEl = document.getElementById(btnId);
	var fileEl = document.getElementById(inputId);

	btnEl.addEventListener('click', function () {
		fileEl.click();
	});
	fileEl.addEventListener('change', function (e) {
		// new Visualizer(e.target.files);
		callback && callback(e.target.files);
		e.target.value = '';
	});
}

function dragFile(containerId, events) {
	var dragEl = document.getElementById(containerId);
	var paragraph = dragEl.querySelector('p');
	dragEl.addEventListener('dragenter', function (e) {
		paragraph.textContent = 'please drop';
		events.dragenter && events.dragenter(e);
	});
	dragEl.addEventListener('dragover', function (e) {
		e.stopPropagation();
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
		paragraph.textContent = 'please drop';
		events.dragenter && events.dragenter(e);
	});

	dragEl.addEventListener('dragleave', function (e) {
		paragraph.textContent = 'please drag a song file into this rectangle';
		events.dragleave && events.dragleave(e);
	});

	dragEl.addEventListener('drop', function (e) {
		e.stopPropagation();
		e.preventDefault();
		paragraph.textContent = 'You have added a song.';
		events.drop && events.drop(e.dataTransfer.files);
	});
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\nbody, html {\n  height: 100%;\n  position: relative;\n  background-color: #607d8b;\n  overflow: hidden; }\n\n.title {\n  position: absolute;\n  color: #fff;\n  font-size: 2em;\n  -moz-transform: rotate(-90deg);\n       transform: rotate(-90deg);\n  top: 200px; }\n\n.music-wrapper {\n  width: 800px;\n  margin: 20px auto; }\n  .music-wrapper form {\n    display: none; }\n\n.music-select button {\n  border: none;\n  background-color: #fff;\n  color: #333;\n  border-radius: 6px;\n  outline: none;\n  padding: .5em;\n  cursor: pointer; }\n  .music-select button:hover {\n    background-color: #435760;\n    color: #fff; }\n\n.music-select span {\n  border-bottom: 1px dashed #fff;\n  color: #143747;\n  cursor: default; }\n\n.music-select p {\n  color: #607d8b; }\n\n.music-select > section {\n  margin-top: 1em;\n  width: 800px;\n  height: 100px;\n  line-height: 100px;\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  background-color: #fff;\n  cursor: default; }\n\n.music-select > section.canvasContainer {\n  background-color: transparent;\n  height: 300px; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var defaultOpt = {
	width: 800,
	height: 300
};

var Music = function Music(options) {
	this.options = options || defaultOpt;
	this._prepareAPI();
};

Music.prototype = {
	constructor: Music,
	_prepareAPI: function _prepareAPI() {
		var AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
		try {
			this.audioCtx = new AudioContext();
		} catch (e) {
			console.error("The AudioContext Object is not supported in your browser!");
		}
	},
	setFiles: function setFiles(files) {
		var _this = this;

		if (files.length != 0) {
			var file = files[0];
			var fileName = file.name;

			var reader = new FileReader();
			reader.onload = function (e) {
				var fileRes = e.target.result;
				// 解码文件
				_this.audioCtx.decodeAudioData(fileRes, function (buffer) {
					_this._play(buffer);
				}, function (e) {
					console.log("文件解码失败！");
				});
			};
			reader.readAsArrayBuffer(file);
		}
	},
	_play: function _play(buffer) {
		var audioCtx = this.audioCtx;
		// 创建BufferSource
		var source = audioCtx.createBufferSource();
		// 创建分析器
		var analyser = audioCtx.createAnalyser();
		// 将分析器与BufferSource相连
		source.connect(analyser);
		//分析器与扬声器相连
		analyser.connect(audioCtx.destination);

		source.buffer = buffer;
		source.start(0);
		if (this.options.canvas) {
			this._drawRectangleSpectrum(analyser);
		}
	},
	_drawLineSpectrum: function _drawLineSpectrum(analyser) {
		var opts = this.options,
		    can = document.getElementById(opts.canvas),
		    ctx = can.getContext('2d'),
		    canvasW = opts.width,
		    canvasH = opts.height;

		can.width = canvasW;
		can.height = canvasH;

		var gradient = ctx.createLinearGradient(0, 0, 0, 300);
		gradient.addColorStop(1, '#0f0');
		gradient.addColorStop(0.5, '#ff0');
		gradient.addColorStop(0, '#f00');
		ctx.fillStyle = gradient;

		var cat = new Uint8Array(canvasW);

		function draw() {
			var arr = new Uint8Array(analyser.frequencyBinCount);
			analyser.getByteFrequencyData(arr);

			can.height = canvasH;
			for (var i = 0, j = analyser.frequencyBinCount / 2; i < j; i++) {
				ctx.moveTo(i, canvasH);
				ctx.lineTo(i, canvasH - arr[i * 2]);
				ctx.stroke();
			}
			requestAnimationFrame(draw);
		}
		draw();
	},
	_drawRectangleSpectrum: function _drawRectangleSpectrum(analyser) {
		var opts = this.options,
		    can = document.getElementById(opts.canvas),
		    ctx = can.getContext('2d'),
		    canvasW = opts.width,
		    canvasH = opts.height,
		    lineNum = canvasW / 12; // 计算多少柱形

		can.width = canvasW;
		can.height = canvasH;

		var gradient = ctx.createLinearGradient(0, 0, 0, 300);
		gradient.addColorStop(1, '#0f0');
		gradient.addColorStop(0.5, '#ff0');
		gradient.addColorStop(0, '#f00');

		var cat = new Uint8Array(lineNum);

		function draw() {
			var arr = new Uint8Array(analyser.frequencyBinCount);
			analyser.getByteFrequencyData(arr);
			// 步长
			var step = Math.floor(analyser.frequencyBinCount / lineNum);
			ctx.clearRect(0, 0, canvasW, canvasH);

			for (var i = 0; i < lineNum; i++) {
				var index = i * step;
				var value = arr[index];
				// 比较帽头的值与柱形的高
				if (cat[i] <= value) {
					cat[i] = value; //立即被柱形顶上去
				} else {
					cat[i] -= 1; // 缓慢降落
				}
				ctx.fillStyle = gradient;
				ctx.fillRect(12 * i, canvasH - 5 - value, 10, canvasW);
				ctx.fillStyle = '#000';
				ctx.fillRect(12 * i, canvasH - 10 - cat[i], 10, 5);
			}
			requestAnimationFrame(draw);
		}
		draw();
	}
};

exports.default = Music;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjI3ZjdkYzVmMzdmY2RjZjA3MmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzP2UwM2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbXVzaWMuanMiXSwibmFtZXMiOlsibXVzaWMiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNob29zZUZpbGUiLCJzZXRGaWxlcyIsImZpbGVzIiwiZHJhZ0ZpbGUiLCJkcmFnZW50ZXIiLCJkcmFnbGVhdmUiLCJkcmFnb3ZlciIsImRyb3AiLCJidG5JZCIsImlucHV0SWQiLCJjYWxsYmFjayIsImJ0bkVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbGVFbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGljayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnRhaW5lcklkIiwiZXZlbnRzIiwiZHJhZ0VsIiwicGFyYWdyYXBoIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJkYXRhVHJhbnNmZXIiLCJkcm9wRWZmZWN0IiwiZGVmYXVsdE9wdCIsIk11c2ljIiwib3B0aW9ucyIsIl9wcmVwYXJlQVBJIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJtb3pBdWRpb0NvbnRleHQiLCJtc0F1ZGlvQ29udGV4dCIsImF1ZGlvQ3R4IiwiY29uc29sZSIsImVycm9yIiwibGVuZ3RoIiwiZmlsZSIsImZpbGVOYW1lIiwibmFtZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJmaWxlUmVzIiwicmVzdWx0IiwiZGVjb2RlQXVkaW9EYXRhIiwiYnVmZmVyIiwiX3BsYXkiLCJsb2ciLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImFuYWx5c2VyIiwiY3JlYXRlQW5hbHlzZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJzdGFydCIsIl9kcmF3UmVjdGFuZ2xlU3BlY3RydW0iLCJfZHJhd0xpbmVTcGVjdHJ1bSIsIm9wdHMiLCJjYW4iLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzVyIsImNhbnZhc0giLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiY2F0IiwiVWludDhBcnJheSIsImRyYXciLCJhcnIiLCJmcmVxdWVuY3lCaW5Db3VudCIsImdldEJ5dGVGcmVxdWVuY3lEYXRhIiwiaSIsImoiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsaW5lTnVtIiwic3RlcCIsIk1hdGgiLCJmbG9vciIsImNsZWFyUmVjdCIsImluZGV4IiwiZmlsbFJlY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FB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Q0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDL1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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LFFBQUlqQixJQUFJTSxDQUFKLEtBQVVoRSxLQUFkLEVBQXFCO0FBQ3BCMEQsU0FBSU0sQ0FBSixJQUFTaEUsS0FBVCxDQURvQixDQUNMO0FBQ2YsS0FGRCxNQUVPO0FBQ04wRCxTQUFJTSxDQUFKLEtBQVUsQ0FBVixDQURNLENBQ007QUFDWjtBQUNEZCxRQUFJTyxTQUFKLEdBQWdCSCxRQUFoQjtBQUNBSixRQUFJMEIsUUFBSixDQUFhLEtBQUtaLENBQWxCLEVBQXFCWCxVQUFVLENBQVYsR0FBY3JELEtBQW5DLEVBQTBDLEVBQTFDLEVBQThDb0QsT0FBOUM7QUFDQUYsUUFBSU8sU0FBSixHQUFnQixNQUFoQjtBQUNBUCxRQUFJMEIsUUFBSixDQUFhLEtBQUtaLENBQWxCLEVBQXFCWCxVQUFVLEVBQVYsR0FBZUssSUFBSU0sQ0FBSixDQUFwQyxFQUE0QyxFQUE1QyxFQUFnRCxDQUFoRDtBQUNBO0FBQ0RLLHlCQUFzQlQsSUFBdEI7QUFDQTtBQUNEQTtBQUNBO0FBdkhnQixDQUFsQjs7a0JBMEhlaEQsSyIsImZpbGUiOiJqcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYyN2Y3ZGM1ZjM3ZmNkY2YwNzJiIiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IE11c2ljIGZyb20gJy4vanMvbXVzaWMnO1xyXG5cclxuY29uc3QgbXVzaWMgPSBuZXcgTXVzaWMoe1xyXG5cdGNhbnZhczogJ2NhbicsXHJcblx0d2lkdGg6IDgwMCxcclxuXHRoZWlnaHQ6IDMwMFxyXG59KTtcclxuLy8g6KGo5Y2V6YCJ5oup5paH5Lu2XHJcbmNob29zZUZpbGUoJ3NlbGVjdEJ0bicsICdmb3JtRmlsZScsIGZpbGVzID0+IHtcclxuXHRtdXNpYy5zZXRGaWxlcyhmaWxlcyk7XHJcbn0pO1xyXG5cclxuLy8g5ouW5ou95paH5Lu2XHJcbmRyYWdGaWxlKCdkcmFnQ29udGFpbmVyJywge1xyXG5cdGRyYWdlbnRlcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHJcblx0fSxcclxuXHRkcmFnbGVhdmU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFxyXG5cdH0sXHJcblx0ZHJhZ292ZXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFxyXG5cdH0sXHJcblx0ZHJvcDogZnVuY3Rpb24gKGZpbGVzKSB7XHJcblx0XHRtdXNpYy5zZXRGaWxlcyhmaWxlcyk7XHJcblx0fVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hvb3NlRmlsZSAoYnRuSWQsIGlucHV0SWQsIGNhbGxiYWNrKSB7XHJcblx0bGV0IGJ0bkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuSWQpO1xyXG5cdGxldCBmaWxlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuXHJcblx0YnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRmaWxlRWwuY2xpY2soKTtcclxuXHR9KTtcclxuXHRmaWxlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdC8vIG5ldyBWaXN1YWxpemVyKGUudGFyZ2V0LmZpbGVzKTtcclxuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKGUudGFyZ2V0LmZpbGVzKTtcclxuXHRcdGUudGFyZ2V0LnZhbHVlID0gJyc7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdGaWxlIChjb250YWluZXJJZCwgZXZlbnRzKSB7XHJcblx0bGV0IGRyYWdFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcclxuXHRsZXQgcGFyYWdyYXBoID0gZHJhZ0VsLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuXHRkcmFnRWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBwbGVhc2UgZHJvcGA7XHJcblx0XHRldmVudHMuZHJhZ2VudGVyICYmIGV2ZW50cy5kcmFnZW50ZXIoZSk7XHJcblx0fSk7XHJcblx0ZHJhZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xyXG5cdFx0cGFyYWdyYXBoLnRleHRDb250ZW50ID0gYHBsZWFzZSBkcm9wYDtcclxuXHRcdGV2ZW50cy5kcmFnZW50ZXIgJiYgZXZlbnRzLmRyYWdlbnRlcihlKTtcclxuXHR9KTtcclxuXHJcblx0ZHJhZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAncGxlYXNlIGRyYWcgYSBzb25nIGZpbGUgaW50byB0aGlzIHJlY3RhbmdsZSc7XHJcblx0XHRldmVudHMuZHJhZ2xlYXZlICYmIGV2ZW50cy5kcmFnbGVhdmUoZSk7XHJcblx0fSk7XHJcblxyXG5cdGRyYWdFbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgWW91IGhhdmUgYWRkZWQgYSBzb25nLmA7XHJcblx0XHRldmVudHMuZHJvcCAmJiBldmVudHMuZHJvcChlLmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcblx0fSk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnRpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB0b3A6IDIwMHB4OyB9XFxuXFxuLm11c2ljLXdyYXBwZXIge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87IH1cXG4gIC5tdXNpYy13cmFwcGVyIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLm11c2ljLXNlbGVjdCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IC41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5tdXNpYy1zZWxlY3QgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNTc2MDtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4ubXVzaWMtc2VsZWN0IHNwYW4ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZmZmO1xcbiAgY29sb3I6ICMxNDM3NDc7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4ubXVzaWMtc2VsZWN0IHAge1xcbiAgY29sb3I6ICM2MDdkOGI7IH1cXG5cXG4ubXVzaWMtc2VsZWN0ID4gc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4ubXVzaWMtc2VsZWN0ID4gc2VjdGlvbi5jYW52YXNDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDMwMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyP3tcImJyb3dzZXJzXCI6W1wibGFzdCAyIHZlcnNpb25cIixcIkZpcmVmb3ggMTVcIl19IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkZWZhdWx0T3B0ID0ge1xyXG5cdHdpZHRoOiA4MDAsXHJcblx0aGVpZ2h0OiAzMDBcclxufVxyXG5cclxuY29uc3QgTXVzaWMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdE9wdDtcclxuXHR0aGlzLl9wcmVwYXJlQVBJKCk7XHJcbn1cclxuXHJcbk11c2ljLnByb3RvdHlwZSA9IHtcclxuXHRjb25zdHJ1Y3RvcjogTXVzaWMsXHJcblx0X3ByZXBhcmVBUEk6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCB8fCB3aW5kb3cubW96QXVkaW9Db250ZXh0IHx8IHdpbmRvdy5tc0F1ZGlvQ29udGV4dDtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMuYXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJUaGUgQXVkaW9Db250ZXh0IE9iamVjdCBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgYnJvd3NlciFcIik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzZXRGaWxlczogZnVuY3Rpb24gKGZpbGVzKSB7XHJcblx0XHRpZiAoZmlsZXMubGVuZ3RoICE9IDApIHtcclxuXHRcdFx0bGV0IGZpbGUgPSBmaWxlc1swXTtcclxuXHRcdFx0bGV0IGZpbGVOYW1lID0gZmlsZS5uYW1lO1xyXG5cclxuXHRcdFx0bGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblx0XHRcdHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG5cdFx0XHRcdGxldCBmaWxlUmVzID0gZS50YXJnZXQucmVzdWx0O1xyXG5cdFx0XHRcdC8vIOino+eggeaWh+S7tlxyXG5cdFx0XHRcdHRoaXMuYXVkaW9DdHguZGVjb2RlQXVkaW9EYXRhKGZpbGVSZXMsIChidWZmZXIpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX3BsYXkoYnVmZmVyKTtcclxuXHRcdFx0XHR9LCAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLmlofku7bop6PnoIHlpLHotKXvvIFcIik7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRfcGxheTogZnVuY3Rpb24gKGJ1ZmZlcikge1xyXG5cdFx0dmFyIGF1ZGlvQ3R4ID0gdGhpcy5hdWRpb0N0eDtcclxuXHRcdC8vIOWIm+W7ukJ1ZmZlclNvdXJjZVxyXG5cdFx0dmFyIHNvdXJjZSA9IGF1ZGlvQ3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xyXG5cdFx0Ly8g5Yib5bu65YiG5p6Q5ZmoXHJcblx0XHR2YXIgYW5hbHlzZXIgPSBhdWRpb0N0eC5jcmVhdGVBbmFseXNlcigpO1xyXG5cdFx0Ly8g5bCG5YiG5p6Q5Zmo5LiOQnVmZmVyU291cmNl55u46L+eXHJcblx0XHRzb3VyY2UuY29ubmVjdChhbmFseXNlcik7XHJcblx0XHQvL+WIhuaekOWZqOS4juaJrOWjsOWZqOebuOi/nlxyXG5cdFx0YW5hbHlzZXIuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XHJcblxyXG5cdFx0c291cmNlLmJ1ZmZlciA9IGJ1ZmZlcjtcclxuXHRcdHNvdXJjZS5zdGFydCgwKTtcclxuXHRcdGlmICh0aGlzLm9wdGlvbnMuY2FudmFzKSB7XHJcblx0XHRcdHRoaXMuX2RyYXdSZWN0YW5nbGVTcGVjdHJ1bShhbmFseXNlcik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRfZHJhd0xpbmVTcGVjdHJ1bTogZnVuY3Rpb24gKGFuYWx5c2VyKSB7XHJcblx0XHRsZXQgb3B0cyA9IHRoaXMub3B0aW9ucyxcclxuXHRcdFx0Y2FuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5jYW52YXMpLFxyXG5cdFx0XHRjdHggPSBjYW4uZ2V0Q29udGV4dCgnMmQnKSxcclxuXHRcdFx0Y2FudmFzVyA9IG9wdHMud2lkdGgsXHJcblx0XHRcdGNhbnZhc0ggPSBvcHRzLmhlaWdodDtcclxuXHRcdFxyXG5cdFx0Y2FuLndpZHRoID0gY2FudmFzVztcclxuXHRcdGNhbi5oZWlnaHQgPSBjYW52YXNIO1xyXG5cclxuXHRcdGxldCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAzMDApO1xyXG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICcjMGYwJyk7XHJcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCAnI2ZmMCcpO1xyXG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjZjAwJyk7XHJcblx0XHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblxyXG5cdFx0bGV0IGNhdCA9IG5ldyBVaW50OEFycmF5KGNhbnZhc1cpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRyYXcgKCkge1xyXG5cdFx0XHR2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xyXG5cdFx0XHRhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShhcnIpO1xyXG5cclxuXHRcdFx0Y2FuLmhlaWdodCA9IGNhbnZhc0g7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwLCBqID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQgLyAyOyBpIDwgajsgaSsrKSB7XHJcblx0XHRcdFx0Y3R4Lm1vdmVUbyhpLCBjYW52YXNIKTtcclxuXHRcdFx0XHRjdHgubGluZVRvKGksIGNhbnZhc0ggLSBhcnJbaSAqIDJdKTtcclxuXHRcdFx0XHRjdHguc3Ryb2tlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cdFx0fVxyXG5cdFx0ZHJhdygpO1xyXG5cdH0sXHJcblx0X2RyYXdSZWN0YW5nbGVTcGVjdHJ1bTogZnVuY3Rpb24gKGFuYWx5c2VyKSB7XHJcblx0XHRsZXQgb3B0cyA9IHRoaXMub3B0aW9ucyxcclxuXHRcdFx0Y2FuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5jYW52YXMpLFxyXG5cdFx0XHRjdHggPSBjYW4uZ2V0Q29udGV4dCgnMmQnKSxcclxuXHRcdFx0Y2FudmFzVyA9IG9wdHMud2lkdGgsXHJcblx0XHRcdGNhbnZhc0ggPSBvcHRzLmhlaWdodCxcclxuXHRcdFx0bGluZU51bSA9IGNhbnZhc1cgLyAxMjsgLy8g6K6h566X5aSa5bCR5p+x5b2iXHJcblx0XHRcclxuXHRcdGNhbi53aWR0aCA9IGNhbnZhc1c7XHJcblx0XHRjYW4uaGVpZ2h0ID0gY2FudmFzSDtcclxuXHJcblx0XHRsZXQgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgMzAwKTtcclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnIzBmMCcpO1xyXG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNSwgJyNmZjAnKTtcclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnI2YwMCcpO1xyXG5cclxuXHRcdGxldCBjYXQgPSBuZXcgVWludDhBcnJheShsaW5lTnVtKTtcclxuXHJcblx0XHRmdW5jdGlvbiBkcmF3ICgpIHtcclxuXHRcdFx0dmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcclxuXHRcdFx0YW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoYXJyKTtcclxuXHRcdFx0Ly8g5q2l6ZW/XHJcblx0XHRcdHZhciBzdGVwID0gTWF0aC5mbG9vcihhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCAvIGxpbmVOdW0pO1xyXG5cdFx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1csIGNhbnZhc0gpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lTnVtOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgaW5kZXggPSBpICogc3RlcDtcclxuXHRcdFx0XHR2YXIgdmFsdWUgPSBhcnJbaW5kZXhdO1xyXG5cdFx0XHRcdC8vIOavlOi+g+W4veWktOeahOWAvOS4juafseW9oueahOmrmFxyXG5cdFx0XHRcdGlmIChjYXRbaV0gPD0gdmFsdWUpIHtcclxuXHRcdFx0XHRcdGNhdFtpXSA9IHZhbHVlOy8v56uL5Y2z6KKr5p+x5b2i6aG25LiK5Y67XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNhdFtpXSAtPSAxOy8vIOe8k+aFoumZjeiQvVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHRcdFx0Y3R4LmZpbGxSZWN0KDEyICogaSwgY2FudmFzSCAtIDUgLSB2YWx1ZSwgMTAsIGNhbnZhc1cpO1xyXG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XHJcblx0XHRcdFx0Y3R4LmZpbGxSZWN0KDEyICogaSwgY2FudmFzSCAtIDEwIC0gY2F0W2ldLCAxMCwgNSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cdFx0fVxyXG5cdFx0ZHJhdygpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVzaWM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL211c2ljLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==