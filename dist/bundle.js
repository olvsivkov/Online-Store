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

/***/ "./src/controller/basket.ts":
/*!**********************************!*\
  !*** ./src/controller/basket.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"products\": () => (/* binding */ products),\n/* harmony export */   \"putInBasket\": () => (/* binding */ putInBasket)\n/* harmony export */ });\nvar products = document.querySelector('.products');\r\nvar counter = 0;\r\nfunction putInBasket() {\r\n    console.log('BASKET');\r\n    products.addEventListener('click', function (event) {\r\n        var target = event.target;\r\n        var BTN = target.closest('button'); // тыкаем ли мы по кнопке ?\r\n        if (BTN) { // Если да, то...\r\n            target.classList.toggle('into-basket');\r\n            if (target.classList.contains('buy-now-BTN')) {\r\n                target.innerHTML = 'in basket';\r\n                counter--;\r\n            }\r\n            if (!target.classList.contains('into-basket')) {\r\n                target.innerHTML = 'Buy now';\r\n                counter++;\r\n            }\r\n        }\r\n    });\r\n    console.log(counter);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/controller/basket.ts?");

/***/ }),

/***/ "./src/controller/goodsCouter.ts":
/*!***************************************!*\
  !*** ./src/controller/goodsCouter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterGoods\": () => (/* binding */ counterGoods)\n/* harmony export */ });\nfunction counterGoods(event) {\r\n    var target = event.target;\r\n    if (target.classList.contains('counter-minus')) {\r\n        console.log('minus');\r\n    }\r\n    else if (target.classList.contains('counter-plus')) {\r\n        console.log('plus');\r\n    }\r\n    else {\r\n        console.log('no');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/controller/goodsCouter.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_getBackendProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/getBackendProducts */ \"./src/model/getBackendProducts.ts\");\n/* harmony import */ var _controller_basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/basket */ \"./src/controller/basket.ts\");\n/* harmony import */ var _view_goodsCardsEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/goodsCardsEvents */ \"./src/view/goodsCardsEvents.ts\");\n\r\n\r\n\r\n(0,_model_getBackendProducts__WEBPACK_IMPORTED_MODULE_0__.getListProducts)(); // формирует список товаров на странице браузера\r\n(0,_controller_basket__WEBPACK_IMPORTED_MODULE_1__.putInBasket)(); // положить товар в корзину (пока реализована смена классов в кнопке Buy now)\r\n(0,_view_goodsCardsEvents__WEBPACK_IMPORTED_MODULE_2__.counterG)(); // выбор колличества товара (пока реализовано делегирование события клика на + и -)\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/model/getBackendProducts.ts":
/*!*****************************************!*\
  !*** ./src/model/getBackendProducts.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getListProducts\": () => (/* binding */ getListProducts)\n/* harmony export */ });\n/* harmony import */ var _view_createGoodsCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/createGoodsCart */ \"./src/view/createGoodsCart.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar url = 'https://dummyjson.com/products?limit=100';\r\nfunction getListProducts() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var res, data, err_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 3, , 4]);\r\n                    return [4 /*yield*/, fetch(url)];\r\n                case 1:\r\n                    res = _a.sent();\r\n                    return [4 /*yield*/, res.json()];\r\n                case 2:\r\n                    data = _a.sent();\r\n                    (0,_view_createGoodsCart__WEBPACK_IMPORTED_MODULE_0__.getData)(data); // создает карточку товара на странице\r\n                    return [3 /*break*/, 4];\r\n                case 3:\r\n                    err_1 = _a.sent();\r\n                    console.log(err_1);\r\n                    return [3 /*break*/, 4];\r\n                case 4: return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\n/*\r\n\r\nexport function getListProducts() {\r\n  fetch('https://dummyjson.com/products?limit=100')\r\n    .then(response => response.json())\r\n    .then(data => getData(data))\r\n    .catch(err => console.error(err.message));\r\n\r\n  function getData(arg: Argument): void {\r\n    for(let i = 0; i < 10; i ++){\r\n      const divTitle = <HTMLDivElement>document.createElement('div');\r\n      divTitle.classList.add('product-title');\r\n      const divPrice = <HTMLDivElement>document.createElement('div');\r\n      divPrice.classList.add('product-price');\r\n      const productWrapper = <HTMLDivElement>document.createElement('div');\r\n      productWrapper.classList.add('product-wrapper');\r\n      const img = <HTMLImageElement>document.createElement('img');\r\n      img.classList.add('product-img');\r\n      const putIntoBTN = document.createElement('button');\r\n      putIntoBTN.classList.add('buy-now-BTN');\r\n\r\n\r\n      divTitle.innerHTML = arg.products[i].title;\r\n      divPrice.innerHTML = `Price $ ${arg.products[i].price}`;\r\n      putIntoBTN.innerHTML = 'Buy now';\r\n      img.src = arg.products[i].thumbnail;\r\n      app.appendChild(productWrapper);\r\n      productWrapper.appendChild(img);\r\n      productWrapper.appendChild(divTitle);\r\n      productWrapper.appendChild(divPrice);\r\n      productWrapper.appendChild(putIntoBTN);\r\n    }\r\n  }\r\n}\r\ngetListProducts();\r\n*/ \r\n\n\n//# sourceURL=webpack:///./src/model/getBackendProducts.ts?");

/***/ }),

/***/ "./src/view/createGoodsCart.ts":
/*!*************************************!*\
  !*** ./src/view/createGoodsCart.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/*\r\nproducts {\r\n  //brand: \"Apple\"\r\n  //category: \"smartphones\"\r\n  //description: \"An apple mobile which is nothing like apple\"\r\n  //discountPercentage: 12.96\r\n  //id: 1\r\n  //images: (5) ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg',  'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.  com/data/products/1/thumbnail.jpg']\r\n  //price: 549\r\n  //rating: 4.69\r\n  //stock: 94\r\n  //thumbnail: \"https://i.dummyjson.com/data/products/1/thumbnail.jpg\"\r\n  //title: \"iPhone 9\"\r\n}\r\n*/\r\nvar app = document.querySelector('.products');\r\nfunction getData(arg) {\r\n    for (var i = 0; i < 10; i++) {\r\n        var productWrapper = \"\\n    <div class=\\\"product-wrapper\\\">\\n      <img class=\\\"product-img\\\" src=\".concat(arg.products[i].thumbnail, \">\\n      <div class=\\\"product-title\\\">\").concat(arg.products[i].title, \"</div>\\n      <div class=\\\"product-stock\\\">\").concat(arg.products[i].stock, \" units</div>\\n      <div class=\\\"product-price-counter\\\">\\n        <div class=\\\"product-price\\\">Price $ \").concat(arg.products[i].price, \"</div>\\n        <div class=\\\"counter-wrapper\\\">\\n          <div class=\\\"counter-minus\\\">-</div>\\n          <div class=\\\"counter-value\\\">1</div>\\n          <div class=\\\"counter-plus\\\">+</div>\\n        </div>\\n      </div>\\n      <button class=\\\"buy-now-BTN\\\">Buy now</button>\\n    </div>\");\r\n        app.insertAdjacentHTML('beforeend', productWrapper);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/view/createGoodsCart.ts?");

/***/ }),

/***/ "./src/view/goodsCardsEvents.ts":
/*!**************************************!*\
  !*** ./src/view/goodsCardsEvents.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterG\": () => (/* binding */ counterG)\n/* harmony export */ });\n/* harmony import */ var _controller_basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/basket */ \"./src/controller/basket.ts\");\n/* harmony import */ var _controller_goodsCouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/goodsCouter */ \"./src/controller/goodsCouter.ts\");\n\r\n\r\nfunction counterG() { _controller_basket__WEBPACK_IMPORTED_MODULE_0__.products.addEventListener('click', _controller_goodsCouter__WEBPACK_IMPORTED_MODULE_1__.counterGoods); } // клик по + или - на карточке товара\r\n/*\r\nfunction counterGoods(event: Event  & { target: Element }): void {\r\n  const target = event.target;\r\n  if(target.classList.contains('counter-minus')) { console.log('minus');}\r\n  else if(target.classList.contains('counter-plus')) { console.log('plus');}\r\n  else  { console.log('no');}\r\n}\r\n*/\r\n\n\n//# sourceURL=webpack:///./src/view/goodsCardsEvents.ts?");

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