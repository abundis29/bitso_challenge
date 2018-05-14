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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions. In /Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/babel-preset-react/lib/index.js\\n    at createDescriptor (/Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/config-descriptors.js:181:11)\\n    at /Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/config-descriptors.js:106:12\\n    at Array.map (<anonymous>)\\n    at createDescriptors (/Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/config-descriptors.js:105:27)\\n    at createPresetDescriptors (/Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/config-descriptors.js:97:10)\\n    at /Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/config-descriptors.js:69:19\\n    at presets (/Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/config-descriptors.js:59:25)\\n    at mergeChainOpts (/Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/config-chain.js:371:68)\\n    at /Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/config-chain.js:324:7\\n    at buildRootChain (/Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/config-chain.js:136:21)\\n    at loadPrivatePartialConfig (/Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/partial.js:51:53)\\n    at loadFullConfig (/Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/config/full.js:43:37)\\n    at /Users/abundis/Documents/Projects/challenges/bitso_challenge/front/node_modules/@babel/core/lib/transform.js:28:33\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanN4LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.jsx\n");

/***/ })

/******/ });