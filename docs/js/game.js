/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"game": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/vue-solution/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/index.js?!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/_regenerator-runtime@0.13.3@regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _fly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fly */ \"./src/game/fly.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background */ \"./src/game/background.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bullet */ \"./src/game/bullet.js\");\n/* harmony import */ var _mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mp3 */ \"./src/game/mp3.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ \"./src/game/utils.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      bird: null,\n      bg: null,\n      gun: null,\n      timeout: null,\n      isGameOver: true\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    return Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _this.init();\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  methods: {\n    muteAudio: function muteAudio() {\n      _mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"][_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].status]();\n    },\n    init: function init() {\n      var _this2 = this;\n\n      return Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2() {\n        var canvas, context;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                /** @type {HTMLCanvasElement} */\n                canvas = document.getElementById('games');\n                context = canvas.getContext('2d');\n                canvas.width = document.body.clientWidth;\n                canvas.height = document.body.clientHeight - 50;\n                _this2.bird = new _fly__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context);\n                _this2.bg = new _background__WEBPACK_IMPORTED_MODULE_3__[\"default\"](context, canvas.width, canvas.height);\n                _context2.next = 8;\n                return _this2.bg.draw();\n\n              case 8:\n                _context2.next = 10;\n                return _this2.bird.draw();\n\n              case 10:\n                _mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].init();\n\n                _this2.fillText('按住屏幕角色上移，松开角色下移', '3rem');\n\n                _this2.gun = new _bullet__WEBPACK_IMPORTED_MODULE_4__[\"default\"](context);\n\n                _this2.addEvent(canvas);\n\n              case 14:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    addEvent: function addEvent(canvas) {\n      var _this3 = this;\n\n      var downEvent = '',\n          upEvent = '';\n\n      if (_utils__WEBPACK_IMPORTED_MODULE_6__[\"isMobile\"]) {\n        downEvent = 'touchstart';\n        upEvent = 'touchend';\n      } else {\n        downEvent = 'mousedown';\n        upEvent = 'mouseup';\n      }\n\n      canvas.addEventListener(downEvent, function () {\n        _this3.bird.up();\n      });\n      canvas.addEventListener(upEvent, function () {\n        _this3.bird.down();\n      });\n    },\n    fillText: function fillText(txt) {\n      var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '30px';\n      var canvas = document.getElementById('games');\n      var ctx = canvas.getContext('2d');\n      ctx.font = \"\".concat(fontSize, \" Comic Sans MS\");\n      ctx.fillStyle = \"red\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(txt, canvas.width / 2, canvas.height / 2);\n    },\n    gameOver: function gameOver() {\n      this.fillText('Game Over!');\n      this.isGameOver = true;\n      _mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].pause();\n    },\n    clear: function clear() {\n      var canvas = document.getElementById('games');\n      var context = canvas.getContext('2d');\n      context.clearRect(0, 0, canvas.width, canvas.height);\n    },\n    stop: function stop() {\n      this.gameOver();\n      clearTimeout(this.timeout);\n      this.bird.stopMove();\n      this.gun.stopFire();\n      this.bg.stopMove();\n    },\n    refresh: function refresh() {\n      var _this4 = this;\n\n      return Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3() {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _this4.clear();\n\n                _context3.next = 3;\n                return _this4.bg.draw();\n\n              case 3:\n                _context3.next = 5;\n                return _this4.bird.draw();\n\n              case 5:\n                _this4.gun.refresh(_this4.bird, _this4.bg.xtotal);\n\n                if (!(!_this4.bird.stop || !_this4.gun.stop)) {\n                  _context3.next = 10;\n                  break;\n                }\n\n                _this4.gameOver();\n\n                _this4.stop();\n\n                return _context3.abrupt(\"return\");\n\n              case 10:\n                _this4.timeout = setTimeout(function () {\n                  _this4.refresh();\n                }, 1000 / 60);\n\n              case 11:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    drawImage: function drawImage() {\n      if (this.isGameOver) {\n        var canvas = document.getElementById('games');\n        var ctx = canvas.getContext('2d');\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n      }\n\n      _mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].play();\n      this.isGameOver = false;\n      this.bird.init();\n      this.bg.move();\n      this.bird.move();\n      this.gun.fire();\n      this.refresh();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/game/index.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./webpack-plu-loader/i18nloader.js");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"782d5a0c-vue-loader-template\"}!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/index.js?!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=template&id=64dae68e&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"782d5a0c-vue-loader-template"}!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=template&id=64dae68e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"game\", attrs: { id: \"app\" } }, [\n    _c(\"canvas\", { attrs: { id: \"games\", width: \"800\", height: \"500\" } }),\n    _c(\"br\"),\n    _c(\"audio\", {\n      attrs: {\n        src: __webpack_require__(/*! ./video/heartbeat2.mp3 */ \"./src/game/video/heartbeat2.mp3\"),\n        preload: \"\",\n        id: \"music\",\n        loop: \"\",\n        hidden: \"\"\n      }\n    }),\n    _vm.isGameOver\n      ? _c(\n          \"button\",\n          { staticClass: \"play-button\", on: { click: _vm.drawImage } },\n          [_vm._v(\"开始\")]\n        )\n      : _c(\"button\", { staticClass: \"play-button\", on: { click: _vm.stop } }, [\n          _vm._v(\"结束\")\n        ]),\n    _c(\"button\", { staticClass: \"play-button\", on: { click: _vm.muteAudio } }, [\n      _vm._v(\"静音\")\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/game/index.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22782d5a0c-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./webpack-plu-loader/i18nloader.js");

/***/ }),

/***/ "./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/index.js?!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body, html {\\n  height: 100%;\\n  margin: 0;\\n}\\n.game {\\n  height: 100%;\\n  -webkit-overflow-scrolling: touch;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  text-align: center;\\n}\\n.game button {\\n  background: 0 0;\\n  background-image: none;\\n  outline: 0;\\n  border: 0;\\n  cursor: pointer;\\n  padding: 0;\\n}\\n.game .play-button {\\n  width: 100px;\\n  height: 45px;\\n  line-height: 45px;\\n  border-radius: 30px;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  position: relative;\\n  -webkit-transition: background-color 0.2s;\\n  transition: background-color 0.2s;\\n  color: #fff;\\n}\\n.game .play-button:hover {\\n  background-color: rgba(0, 0, 0, 0.5);\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/game/index.vue?./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./webpack-plu-loader/i18nloader.js");

/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/index.js?!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!../../webpack-plu-loader/i18nloader.js!./index.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/index.js?!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=style&index=0&lang=scss&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ \"./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"1375e0ec\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/game/index.vue?./node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./webpack-plu-loader/i18nloader.js");

/***/ }),

/***/ "./src/game/background.js":
/*!********************************!*\
  !*** ./src/game/background.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/_regenerator-runtime@0.13.3@regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _imgs_bg6_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/bg6.jpg */ \"./src/game/imgs/bg6.jpg\");\n/* harmony import */ var _imgs_bg6_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_bg6_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./src/game/utils.js\");\n\n\n\n\n\n\n\nvar Background =\n/*#__PURE__*/\nfunction () {\n  function Background(context) {\n    Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Background);\n\n    this.context = context;\n    this.speed = 5;\n    this.x = 0;\n    this.xvelocity = 9;\n    this.width = this.context.canvas.width;\n    this.height = this.context.canvas.height;\n    this.stop = null;\n    this.img = null;\n    this.xtotal = 0;\n  }\n\n  Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Background, [{\n    key: \"move\",\n    value: function move() {\n      var _this = this;\n\n      this.xtotal = this.speed + this.xtotal;\n      this.x = this.xtotal % this.width;\n      this.stop = setTimeout(function () {\n        _this.move();\n      }, 100);\n    }\n  }, {\n    key: \"draw\",\n    value: function () {\n      var _draw = Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (this.img) {\n                  _context.next = 4;\n                  break;\n                }\n\n                _context.next = 3;\n                return Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"getImage\"])(_imgs_bg6_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);\n\n              case 3:\n                this.img = _context.sent;\n\n              case 4:\n                this.context.drawImage(this.img, -this.x, 0, this.width, this.height);\n                this.context.drawImage(this.img, this.width - this.x, 0, this.width, this.height);\n                this.context.font = \"30px Comic Sans MS\";\n                this.context.fillText(this.xtotal, this.width * 0.9, this.height - 10);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function draw() {\n        return _draw.apply(this, arguments);\n      }\n\n      return draw;\n    }()\n  }, {\n    key: \"stopMove\",\n    value: function stopMove() {\n      clearTimeout(this.stop);\n      this.stop = null;\n      this.xtotal = 0;\n    }\n  }]);\n\n  return Background;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/background.js?");

/***/ }),

/***/ "./src/game/bullet.js":
/*!****************************!*\
  !*** ./src/game/bullet.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gun; });\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/_regenerator-runtime@0.13.3@regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ \"./src/game/utils.js\");\n/* harmony import */ var _imgs_bullet_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/bullet.png */ \"./src/game/imgs/bullet.png\");\n/* harmony import */ var _imgs_bullet_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_imgs_bullet_png__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar Bullet =\n/*#__PURE__*/\nfunction () {\n  function Bullet(context) {\n    Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, Bullet);\n\n    this.speed = 8;\n    this.context = context;\n    this.x = this.context.canvas.width - 10;\n    this.y = Math.floor(Math.random() * this.context.canvas.height + 1);\n    this.stop = null;\n    this.bulletHeight = 20;\n    this.bulletWidth = 60;\n    this.img = null;\n    this.acspeed = 1;\n  }\n\n  Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Bullet, [{\n    key: \"draw\",\n    value: function () {\n      var _draw = Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (this.img) {\n                  _context.next = 4;\n                  break;\n                }\n\n                _context.next = 3;\n                return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getImage\"])(_imgs_bullet_png__WEBPACK_IMPORTED_MODULE_7___default.a);\n\n              case 3:\n                this.img = _context.sent;\n\n              case 4:\n                this.context.drawImage(this.img, this.x, this.y);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function draw() {\n        return _draw.apply(this, arguments);\n      }\n\n      return draw;\n    }()\n  }, {\n    key: \"move\",\n    value: function move() {\n      var _this = this;\n\n      this.x = this.x - this.speed * this.acspeed;\n      this.stop = setTimeout(function () {\n        _this.move();\n      }, 20);\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      clearTimeout(this.stop);\n      this.context = null;\n    }\n  }]);\n\n  return Bullet;\n}();\n\nvar Gun =\n/*#__PURE__*/\nfunction () {\n  function Gun(context) {\n    Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, Gun);\n\n    this.context = context;\n    this.rate = 1;\n    this.init();\n  }\n\n  Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Gun, [{\n    key: \"init\",\n    value: function init() {\n      this.list && this.list.forEach(function (bullet) {\n        bullet.destroy();\n      });\n      this.list = [];\n      this.stop = null;\n    }\n  }, {\n    key: \"fire\",\n    value: function fire() {\n      var _this2 = this;\n\n      var bullet = new Bullet(this.context);\n      this.list.push(bullet);\n      bullet.move();\n      this.stop = setTimeout(function () {\n        _this2.fire();\n      }, 800);\n    }\n  }, {\n    key: \"stopFire\",\n    value: function stopFire() {\n      clearTimeout(this.stop);\n      this.init();\n    }\n  }, {\n    key: \"refresh\",\n    value: function refresh(position, rate) {\n      this.rate = rate;\n\n      if (this.detection(position)) {\n        this.stopFire();\n        return;\n      }\n\n      var update = [];\n      this.list.forEach(\n      /*#__PURE__*/\n      function () {\n        var _ref = Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee2(bullet) {\n          return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  if (!(bullet.x < 0)) {\n                    _context2.next = 4;\n                    break;\n                  }\n\n                  bullet.destroy();\n                  _context2.next = 8;\n                  break;\n\n                case 4:\n                  bullet.acspeed = Math.round(rate / 300) + 1;\n                  _context2.next = 7;\n                  return bullet.draw();\n\n                case 7:\n                  update.push(bullet);\n\n                case 8:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n      this.list = update;\n    }\n  }, {\n    key: \"detection\",\n    value: function detection(position) {\n      for (var i = 0; i < this.list.length; i++) {\n        var _bullet = this.list[i];\n\n        if (position.y > _bullet.y + _bullet.bulletHeight) {\n          continue;\n        }\n\n        if (_bullet.y > position.y + position.birdHeight) {\n          continue;\n        }\n\n        if (position.x > _bullet.x + _bullet.bulletWidth) {\n          continue;\n        }\n\n        if (position.x + position.birdWidth < _bullet.x) {\n          continue;\n        }\n\n        return true;\n      }\n\n      return false;\n    }\n  }]);\n\n  return Gun;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/bullet.js?");

/***/ }),

/***/ "./src/game/fly.js":
/*!*************************!*\
  !*** ./src/game/fly.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/_regenerator-runtime@0.13.3@regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _imgs_dingding_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/dingding.png */ \"./src/game/imgs/dingding.png\");\n/* harmony import */ var _imgs_dingding_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_dingding_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./src/game/utils.js\");\n\n\n\n\n\n\n\nvar Bird =\n/*#__PURE__*/\nfunction () {\n  function Bird(context) {\n    Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Bird);\n\n    this.a = 0.95;\n    this.context = context;\n    this.img = null;\n    this.direction = 1;\n    this.init();\n  }\n\n  Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Bird, [{\n    key: \"init\",\n    value: function init() {\n      this.x = this.context.canvas.width / 4;\n      this.y = 100;\n      this.speed = 5;\n      this.stop = null;\n      this.birdHeight = 60;\n      this.birdWidth = 40;\n    } //向上加速speed = speed + at,t=1s\n\n  }, {\n    key: \"up\",\n    value: function up() {\n      this.direction = -1;\n\n      if (this.speed > 0) {\n        this.speed = 0;\n      }\n\n      this.changeSpeed();\n    }\n  }, {\n    key: \"down\",\n    value: function down() {\n      this.direction = 1;\n\n      if (this.speed < 0) {\n        this.speed = 0;\n      }\n\n      this.changeSpeed();\n    }\n  }, {\n    key: \"changeSpeed\",\n    value: function changeSpeed() {\n      this.speed = this.speed + this.direction * this.a;\n      this.speed = this.direction * Math.abs(this.speed);\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      var _this = this;\n\n      this.y = this.speed * 1 + this.y;\n\n      if (this.detection()) {\n        this.stopMove();\n        return;\n      }\n\n      this.stop = setTimeout(function () {\n        _this.move();\n\n        _this.changeSpeed();\n      }, 50);\n    }\n  }, {\n    key: \"stopMove\",\n    value: function stopMove() {\n      clearTimeout(this.stop);\n      this.stop = null;\n    }\n  }, {\n    key: \"draw\",\n    value: function () {\n      var _draw = Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (this.img) {\n                  _context.next = 4;\n                  break;\n                }\n\n                _context.next = 3;\n                return Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"getImage\"])(_imgs_dingding_png__WEBPACK_IMPORTED_MODULE_4___default.a);\n\n              case 3:\n                this.img = _context.sent;\n\n              case 4:\n                this.context.drawImage(this.img, this.x, this.y);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function draw() {\n        return _draw.apply(this, arguments);\n      }\n\n      return draw;\n    }() //碰撞检测\n\n  }, {\n    key: \"detection\",\n    value: function detection() {\n      return this.y > this.context.canvas.height - this.birdHeight / 2 || this.y < 0;\n    }\n  }]);\n\n  return Bird;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/fly.js?");

/***/ }),

/***/ "./src/game/imgs/bg6.jpg":
/*!*******************************!*\
  !*** ./src/game/imgs/bg6.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bg6.b1039677.jpg\";\n\n//# sourceURL=webpack:///./src/game/imgs/bg6.jpg?");

/***/ }),

/***/ "./src/game/imgs/bullet.png":
/*!**********************************!*\
  !*** ./src/game/imgs/bullet.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAaCAYAAADv/O9kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDBDNkYxQUU3MzI0MTFFQUI1QjRCREQyODlGNjJEOTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDBDNkYxQUY3MzI0MTFFQUI1QjRCREQyODlGNjJEOTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MEM2RjFBQzczMjQxMUVBQjVCNEJERDI4OUY2MkQ5OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MEM2RjFBRDczMjQxMUVBQjVCNEJERDI4OUY2MkQ5OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsKd1qIAAAiKSURBVHja7FhbbBxnFf5mZndn1muvvXFiezepE6VpaBzn0qTNxYWoaeJWKCgofUBV1QcShAp9KYgHJBCoggfEA33kASHgCR5QQSAo0ERNCiVKYqSkaS6oECe+3733mdm5/Xz/v+vUCaS5NJEshVkd73pn9v/Pd875vnNmNCEEHsZDx0N6xOSfI1/6Kvr7n8Gxt0/AtiuIRBzxuIbR4RFs6N2Ii+cvoqOrHYlEEkND72PThj24cGkAW7ftWJlIGN35fCmhG/oDKx0RRcEHF86lrvz72g/y+el1/Kp2twm2kjG8cOjF18JQ/+V14Pdw7KO9NDDw553xeHFdNptIBIGIHlh6NGDN6pjIZs2YEKvkv3f+U0NHIe9C08o4e/bE65s3P3uMX0/fDfA0rZ/26rWR3+ze+oSRzBdszM1q6N+XozOREUUPUi80sKoIQLu7kuZvpmYdDJwaQRTkH7t8+YNXex7vfT12h4C/MDV58cjyjvLu/v40VnRmEfk6yhUXf3l7BKUSkFuZhu+HS47LGl/dj6QwdLUKL2Ci5ke/AvT+NHYb/r94/tyxr2/oEdu2bGlDV2cOvhdRB0J4wkNraxOWtZqYmHLQs7ETjuvLvCwp4IKveDyGbdu7MT41h7ZMqXNsfOylWwHfMzn9z+92r57b9+zelRS2FkSRjsBnKWs+kloE3RUIgxCdXU2Ymqwg1ZxCwgzVRkvuoEvrP9WMrn+0o+ZWMD09euhm4Enat4qld7/2uQNdzZs3baGiMoe6ruAEBOo4ZHPowdd0eGHACJoYHZ2HrhnItFkMEJYk8GQygU293RgbG6P/k72LgecuXTr9s61bKs+//PImtLS0QNMNJJviSlA8L4BjS3X0CS5EEIbkdAAzoaNWC1gNQCbTQiqEWIqHacbQ07sSJ04kYVmF5gXgHW/86Pu//uwBq+/p3ZuohCZi5EWquYm9OwbX9RAyy14tVAHwPB9uzYNNC0Kf5wKKhoO1j4LcF4C29IDLRLUts9BESjY1Fep9/MyZk9/Zt1/r69u1ipnTCdaAYRgE5KNS8VjePuyKw88uzUG1WoNNq/KzYzsQbOFT00Wey8Cp+ksSuKZrkLVoWXFWaawOXEQTL+zcsZVgBAUqIpd9gqNMVfmZLcqlWssyt6sErt5rBGmrQPi8VlDsHFaFPCeV/X4PL/dDL3VdUxO67DrSZwU8lkgW7aqXSxhxqp4g8EhNhWHAsiaPXTfg98yyXbdq1VHvkuPUPdUrPU9Wga2uvZ5xgY/P/uLzFNFYzGAQhRJRlpGiW0i1jMIIhl6/UDR+c30LySzt1ssvBK0OXFPYNDqtgNec1l+dOjn5veeeW03nPSVmUSgF7EbgjuOpbEt+yx0XNpTvNWa8KivAj1RLk1OcmrIaGRNC/NfUJf8VDe+kQ1c+nEJuVYZcTKnz01MFXB2cxeMbsyzPONdkG6XgSmqJRgQkIBEtNFFxA2qxKLAKuNBUsgyjATyXW/nj4+++f7AjO/7kmu4Msxko4D4zLi+U5SuB12pSyCK1aB0DA8TVRahB3qNMTeUxeGVOAZTZM60Ypzqba2kUygRqVHzpvDTZJjNtJqpOoDi39tEVGBqewbWhGTy5cx3m58s4f3aEc0Ir8hTOwcFh7hMhm02jWHI5NXoUYWD58hYUizZ9DNCStlQCfM4b0r1srgVdXW2s3EiBrbGSqo6j9l5Q9bnt25/58p/+ePq3u/oqa9asTqNSZrYJVPLBp5IrwLKotUVRpPmRzG6MEY1QKlY5HBQpjnFFgcCPlKiYpgF7xoacaA2eyHDiQzzA8NA8K0qgfXkTq8pBczqJ4eEC/vbXD+E6NVaBQGZZkr7YKJUd/hYYujaDkIGPGowdGZ7luhEpIRhYT9EimYqzOlmlnsUKdei7gBHTMJdnUCRlnfCG+fLc4cPf+Pw774iBE8cHqeJl/rhKB9i3w3qZ3swl+b/r1u+AhB6yvfkw2NflqqJhZspAc6vFOVnWXaTo4/pck07HkzqslK54PTNfUeB0tWZNiZDsvQYD6gU1VlD9JkUwcEbcUP6wcikNGqykiWXtSdWJpC7EDBop4VTYlQi8ys4jAzkxXoGcsCplPbx5sD6/Z8+Bg36w+ydHj81Fcyw302RZxG8huHTYrkrOMOuiprqBbIUeNYC30HReoFLyuGFBbSi5KGNXLLAyJsqcoQmC5Vopu7h8YYLOBVi7Po3uNa0wk4YK+PhYBTPTFZa5HJJIC4sBi8tx2Vd7qPeQgSLlotBXVi459IUBrrkUYleJcdWuYnK8DC0mKdw2/L9m9UnaKwcPffN3R99+89tXB6/0PbYuTi41Q1a75M/iXpMv+Ugxq77rqnOWyV5Jzkq50dDghaZf1x2t0VbqihwiZnHRMFJiGGfQajZ1JJBiRFVPaChQI2TAOjuaYDVpDWGTU+KNrgvhI53WF/VAuWVE0LaiXaHEJFC4A9Khffn6ox93K/XW4SOv7c90PX/4X4Or3/v7yTxVtkKuROrpTMzQFFC7HLHMDKXKSrREhI80tvES9fdIRNfFbeFaCdhs0tGVM+lQnI56GB0m2FCKk6msM2uyzEPV5sIwVCPz4nUW1pI6VLfGdWG9FWpaiImJGpMiMD2T8Ldu2fXz292PO7RfdHZueLNYyu0dGpl55erV0U+3r6ikeUvO9mWoWb2jI6GCIcv29o/4xC2/00kdtFGYbME1TY6Wsq1+JKb38mCUVIftaqiWmSjPJW3X/oFfn7rTJzBl2u+l7Xj6i0+dOfXeoapd2T8yOvhU9yMGCsVQtYz7ciMlVOUjXwxon3xkC6kD05MctBjB8fG4/cS2nT+cn5+9p2duA9J6eva+say9p+/48bd2nT4zC0XE+zWlUhPqlPmkY78Ic9nulGVZn4FebrWsVfJB42m1x/+fqz9kx38EGAD1Zd2EpBRn2wAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/game/imgs/bullet.png?");

/***/ }),

/***/ "./src/game/imgs/dingding.png":
/*!************************************!*\
  !*** ./src/game/imgs/dingding.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/dingding.7420ebad.png\";\n\n//# sourceURL=webpack:///./src/game/imgs/dingding.png?");

/***/ }),

/***/ "./src/game/index.vue":
/*!****************************!*\
  !*** ./src/game/index.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_64dae68e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=64dae68e& */ \"./src/game/index.vue?vue&type=template&id=64dae68e&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/game/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ \"./src/game/index.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_15_9_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.0@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.0@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_64dae68e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_64dae68e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/game/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/game/index.vue?");

/***/ }),

/***/ "./src/game/index.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/game/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_babel-loader@8.0.6@babel-loader/lib!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!../../webpack-plu-loader/i18nloader.js!./index.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/index.js?!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/game/index.vue?");

/***/ }),

/***/ "./src/game/index.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************!*\
  !*** ./src/game/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!../../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!../../webpack-plu-loader/i18nloader.js!./index.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/index.js?!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/game/index.vue?");

/***/ }),

/***/ "./src/game/index.vue?vue&type=template&id=64dae68e&":
/*!***********************************************************!*\
  !*** ./src/game/index.vue?vue&type=template&id=64dae68e& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_782d5a0c_vue_loader_template_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_template_id_64dae68e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"782d5a0c-vue-loader-template\"}!../../node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!../../webpack-plu-loader/i18nloader.js!./index.vue?vue&type=template&id=64dae68e& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"782d5a0c-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.0@vue-loader/lib/index.js?!./webpack-plu-loader/i18nloader.js!./src/game/index.vue?vue&type=template&id=64dae68e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_782d5a0c_vue_loader_template_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_template_id_64dae68e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_782d5a0c_vue_loader_template_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_webpack_plu_loader_i18nloader_js_index_vue_vue_type_template_id_64dae68e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/game/index.vue?");

/***/ }),

/***/ "./src/game/main.js":
/*!**************************!*\
  !*** ./src/game/main.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/_core-js@3.6.4@core-js/modules/es.array.iterator.js */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.array.iterator.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_core-js@3.6.4@core-js/modules/es.promise.js */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.promise.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/_core-js@3.6.4@core-js/modules/es.object.assign.js */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.object.assign.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/_core-js@3.6.4@core-js/modules/es.promise.finally.js */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.promise.finally.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(E_front_blog_vue_solution_node_modules_core_js_3_6_4_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/_vue@2.6.11@vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.vue */ \"./src/game/index.vue\");\n\n\n\n\n\n\ndocument.title = '钉Game';\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  render: function render(h) {\n    return h(_index_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/game/main.js?");

/***/ }),

/***/ "./src/game/mp3.js":
/*!*************************!*\
  !*** ./src/game/mp3.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Music; });\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nvar Music =\n/*#__PURE__*/\nfunction () {\n  function Music() {\n    Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Music);\n  }\n\n  Object(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Music, null, [{\n    key: \"init\",\n    value: function init() {\n      Music.audio = document.getElementById(\"music\");\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      Music.pause();\n      Music.audio = null;\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      Music.audio.pause();\n      Music.status = 'play'; //Music.audio.load();\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      Music.audio.play();\n      Music.status = 'pause';\n    }\n  }]);\n\n  return Music;\n}();\n\nObject(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Music, \"audio\", null);\n\nObject(E_front_blog_vue_solution_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Music, \"status\", 'play');\n\n\n\n//# sourceURL=webpack:///./src/game/mp3.js?");

/***/ }),

/***/ "./src/game/utils.js":
/*!***************************!*\
  !*** ./src/game/utils.js ***!
  \***************************/
/*! exports provided: getImage, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImage\", function() { return getImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getImage = function getImage(source) {\n  var img = new Image();\n  img.src = source;\n  return new Promise(function (resolve, reject) {\n    img.onload = function () {\n      resolve(img);\n    };\n  });\n};\nvar isMobile = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);\n\n//# sourceURL=webpack:///./src/game/utils.js?");

/***/ }),

/***/ "./src/game/video/heartbeat2.mp3":
/*!***************************************!*\
  !*** ./src/game/video/heartbeat2.mp3 ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"media/heartbeat2.78ea9b7f.mp3\";\n\n//# sourceURL=webpack:///./src/game/video/heartbeat2.mp3?");

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** multi ./src/game/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! E:\\front-blog\\vue-solution\\src\\game\\main.js */\"./src/game/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/game/main.js?");

/***/ })

/******/ });