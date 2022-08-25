/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/Ancients/index.js":
/*!**********************************!*\
  !*** ./assets/Ancients/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Azathoth_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Azathoth.png */ \"./assets/Ancients/Azathoth.png\");\n/* harmony import */ var _Cthulthu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cthulthu.png */ \"./assets/Ancients/Cthulthu.png\");\n/* harmony import */ var _IogSothoth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IogSothoth.png */ \"./assets/Ancients/IogSothoth.png\");\n/* harmony import */ var _ShubNiggurath_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShubNiggurath.png */ \"./assets/Ancients/ShubNiggurath.png\");\n\n\n\n\n\nconst ancients = {\n  azathoth: _Azathoth_png__WEBPACK_IMPORTED_MODULE_0__,\n  cthulhu: _Cthulthu_png__WEBPACK_IMPORTED_MODULE_1__,\n  iogSothoth: _IogSothoth_png__WEBPACK_IMPORTED_MODULE_2__,\n  shubNiggurath: _ShubNiggurath_png__WEBPACK_IMPORTED_MODULE_3__\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ancients);\n\n//# sourceURL=webpack://codejam-eldritch/./assets/Ancients/index.js?");

/***/ }),

/***/ "./data/ancients.js":
/*!**************************!*\
  !*** ./data/ancients.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Ancients/index */ \"./assets/Ancients/index.js\");\n\n\n\nconst ancientsData = [\n  {\n    id: 'azathoth',\n    name: 'azathoth',\n    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].azathoth,\n    firstStage: {\n      greenCards: 1,\n      blueCards: 1,\n      brownCards: 2,\n    },\n    secondStage: {\n      greenCards: 2,\n      blueCards: 1,\n      brownCards: 3,\n    },\n    thirdStage: {\n      greenCards: 2,\n      blueCards: 0,\n      brownCards: 4,\n    },\n  },\n  {\n    id: 'cthulhu',\n    name: 'cthulhu',\n    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cthulhu,\n    firstStage: {\n      greenCards: 0,\n      blueCards: 2,\n      brownCards: 2,\n    },\n    secondStage: {\n      greenCards: 1,\n      blueCards: 0,\n      brownCards: 3,\n    },\n    thirdStage: {\n      greenCards: 3,\n      blueCards: 0,\n      brownCards: 4,\n    },\n  },\n  {\n    id: 'iogSothoth',\n    name: 'iogSothoth',\n    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].iogSothoth,\n    firstStage: {\n      greenCards: 0,\n      blueCards: 1,\n      brownCards: 2,\n    },\n    secondStage: {\n      greenCards: 2,\n      blueCards: 1,\n      brownCards: 3,\n    },\n    thirdStage: {\n      greenCards: 3,\n      blueCards: 0,\n      brownCards: 4,\n    },\n  },\n  {\n    id: 'shubNiggurath',\n    name: 'shubNiggurath',\n    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shubNiggurath,\n    firstStage: {\n      greenCards: 1,\n      blueCards: 1,\n      brownCards: 2,\n    },\n    secondStage: {\n      greenCards: 3,\n      blueCards: 1,\n      brownCards: 2,\n    },\n    thirdStage: {\n      greenCards: 2,\n      blueCards: 0,\n      brownCards: 4,\n    },\n  },\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ancientsData);\n\n//# sourceURL=webpack://codejam-eldritch/./data/ancients.js?");

/***/ }),

/***/ "./data/difficulties.js":
/*!******************************!*\
  !*** ./data/difficulties.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst difficulties = [\n  {\n    id: 'veryEasy',\n    name: 'Very easy'\n  },\n  {\n    id: 'easy',\n    name: 'Easy'\n  },\n  {\n    id: 'normal',\n    name: 'Normal'\n  },\n  {\n    id: 'hard',\n    name: 'Hard'\n  },\n  {\n    id: 'veryHard',\n    name: 'Very hard'\n  }\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (difficulties);\n\n//# sourceURL=webpack://codejam-eldritch/./data/difficulties.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_ancients_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/ancients.js */ \"./data/ancients.js\");\n/* harmony import */ var _data_difficulties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/difficulties.js */ \"./data/difficulties.js\");\n\n\nconsole.log(_data_ancients_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconsole.log(_data_difficulties_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n\n//# sourceURL=webpack://codejam-eldritch/./script.js?");

/***/ }),

/***/ "./assets/Ancients/Azathoth.png":
/*!**************************************!*\
  !*** ./assets/Ancients/Azathoth.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e76cc60e6f2b9bb167ce.png\";\n\n//# sourceURL=webpack://codejam-eldritch/./assets/Ancients/Azathoth.png?");

/***/ }),

/***/ "./assets/Ancients/Cthulthu.png":
/*!**************************************!*\
  !*** ./assets/Ancients/Cthulthu.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7bfd029744dc9f87c1a.png\";\n\n//# sourceURL=webpack://codejam-eldritch/./assets/Ancients/Cthulthu.png?");

/***/ }),

/***/ "./assets/Ancients/IogSothoth.png":
/*!****************************************!*\
  !*** ./assets/Ancients/IogSothoth.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5b7717bff973cda27be.png\";\n\n//# sourceURL=webpack://codejam-eldritch/./assets/Ancients/IogSothoth.png?");

/***/ }),

/***/ "./assets/Ancients/ShubNiggurath.png":
/*!*******************************************!*\
  !*** ./assets/Ancients/ShubNiggurath.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68c4272e00c9596e65b1.png\";\n\n//# sourceURL=webpack://codejam-eldritch/./assets/Ancients/ShubNiggurath.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;