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

/***/ "./src/getBackendProducts.ts":
/*!***********************************!*\
  !*** ./src/getBackendProducts.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getListProducts\": () => (/* binding */ getListProducts)\n/* harmony export */ });\nvar app = document.querySelector('.products');\r\nfunction getListProducts() {\r\n    fetch('https://dummyjson.com/products?limit=100')\r\n        .then(function (response) { return response.json(); })\r\n        .then(function (data) { return getData(data); })\r\n        .catch(function (err) { return console.error(err.message); });\r\n    function getData(arg) {\r\n        for (var i = 35; i < 77; i++) {\r\n            var divTitle = document.createElement('div');\r\n            divTitle.classList.add('product-title');\r\n            var divPrice = document.createElement('div');\r\n            divPrice.classList.add('product-price');\r\n            var productWrapper = document.createElement('div');\r\n            productWrapper.classList.add('product-wrapper');\r\n            var img = document.createElement('img');\r\n            img.classList.add('product-img');\r\n            var putIntoBTN = document.createElement('button');\r\n            putIntoBTN.classList.add('buy-now-BTN');\r\n            divTitle.innerHTML = arg.products[i].title;\r\n            divPrice.innerHTML = \"Price $ \".concat(arg.products[i].price);\r\n            putIntoBTN.innerHTML = 'Buy now';\r\n            img.src = arg.products[i].thumbnail;\r\n            app.appendChild(productWrapper);\r\n            productWrapper.appendChild(img);\r\n            productWrapper.appendChild(divTitle);\r\n            productWrapper.appendChild(divPrice);\r\n            productWrapper.appendChild(putIntoBTN);\r\n        }\r\n    }\r\n}\r\ngetListProducts();\r\n\n\n//# sourceURL=webpack:///./src/getBackendProducts.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getBackendProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBackendProducts */ \"./src/getBackendProducts.ts\");\nconsole.log('HI');\r\n\r\n_getBackendProducts__WEBPACK_IMPORTED_MODULE_0__.getListProducts;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;