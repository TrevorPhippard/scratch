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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: add, reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n  function add () {\n    console.log('add was called')\n    return {\n      type: 'ADD'\n    }\n  }\n  function reduce () {\n    return {\n      type: 'REDUCE'\n    }\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzP2Y0MGIiXSwic291cmNlc0NvbnRlbnQiOlsiICBleHBvcnQgZnVuY3Rpb24gYWRkICgpIHtcbiAgICBjb25zb2xlLmxvZygnYWRkIHdhcyBjYWxsZWQnKVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnQUREJ1xuICAgIH1cbiAgfVxuICBleHBvcnQgZnVuY3Rpb24gcmVkdWNlICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1JFRFVDRSdcbiAgICB9XG4gIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/actions/index.js\n");

/***/ }),

/***/ "./src/components/AddButton.js":
/*!*************************************!*\
  !*** ./src/components/AddButton.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ \"./src/components/component.js\");\n/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/index.js */ \"./src/actions/index.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store.js */ \"./src/store.js\");\n\n\n\n\nclass AddButton extends _component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(props) {\n      super(props)\n      this.id = 'button'\n    }\n  \n    handleAdd() {\n      _store_js__WEBPACK_IMPORTED_MODULE_2__[\"store\"].dispatch(Object(_actions_index_js__WEBPACK_IMPORTED_MODULE_1__[\"add\"])())\n      this.reRender()\n    }\n  \n    render() {\n        const num = _store_js__WEBPACK_IMPORTED_MODULE_2__[\"store\"].getState().num\n        return `<button id=\"btn\">${num}</button>`\n    }\n  }\n\n  /* harmony default export */ __webpack_exports__[\"default\"] = (AddButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRCdXR0b24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRCdXR0b24uanM/ZDc0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZS5qcyc7XG5cbmNsYXNzIEFkZEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgdGhpcy5pZCA9ICdidXR0b24nXG4gICAgfVxuICBcbiAgICBoYW5kbGVBZGQoKSB7XG4gICAgICBzdG9yZS5kaXNwYXRjaChhZGQoKSlcbiAgICAgIHRoaXMucmVSZW5kZXIoKVxuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBudW0gPSBzdG9yZS5nZXRTdGF0ZSgpLm51bVxuICAgICAgICByZXR1cm4gYDxidXR0b24gaWQ9XCJidG5cIj4ke251bX08L2J1dHRvbj5gXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgQWRkQnV0dG9uO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AddButton.js\n");

/***/ }),

/***/ "./src/components/component.js":
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Component {\n  constructor(props = {}) {\n    this.props = props\n  }\n\n  createDOM(domString) {\n    const div = document.createElement(\"div\")\n    div.innerHTML = domString\n    return div\n  }\n\n  reRender() {\n    const oDom = this.domElement\n    this.domElement = this._render()\n    this.wrapper.insertBefore(this.domElement, oDom)\n    this.wrapper.removeChild(oDom)\n  }\n\n  _render(wrapper) {\n    if (wrapper) this.wrapper = wrapper\n    this.domElement = this.createDOM(this.render())\n    this.domElement.addEventListener(\"click\", () => {\n      this.handleAdd()\n    }, false)\n\n    return this.domElement\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnQuanM/ZmQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gIH1cblxuICBjcmVhdGVET00oZG9tU3RyaW5nKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5pbm5lckhUTUwgPSBkb21TdHJpbmdcbiAgICByZXR1cm4gZGl2XG4gIH1cblxuICByZVJlbmRlcigpIHtcbiAgICBjb25zdCBvRG9tID0gdGhpcy5kb21FbGVtZW50XG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5fcmVuZGVyKClcbiAgICB0aGlzLndyYXBwZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgb0RvbSlcbiAgICB0aGlzLndyYXBwZXIucmVtb3ZlQ2hpbGQob0RvbSlcbiAgfVxuXG4gIF9yZW5kZXIod3JhcHBlcikge1xuICAgIGlmICh3cmFwcGVyKSB0aGlzLndyYXBwZXIgPSB3cmFwcGVyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET00odGhpcy5yZW5kZXIoKSlcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQWRkKClcbiAgICB9LCBmYWxzZSlcblxuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/component.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AddButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AddButton.js */ \"./src/components/AddButton.js\");\n\n\nconst ReactDom = {\n  render(component, wrapper) {\n    wrapper.appendChild(component._render(wrapper));\n  }\n};\n\nwindow.onload = function() {\n  ReactDom.render(new _components_AddButton_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), document.getElementById(\"root\"));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQWRkQnV0dG9uLmpzXCI7XG5cbmNvbnN0IFJlYWN0RG9tID0ge1xuICByZW5kZXIoY29tcG9uZW50LCB3cmFwcGVyKSB7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb21wb25lbnQuX3JlbmRlcih3cmFwcGVyKSk7XG4gIH1cbn07XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgUmVhY3REb20ucmVuZGVyKG5ldyBBZGRCdXR0b24oKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\nfunction reducers (state, action) {\n    switch (action.type) {\n      case 'ADD':\n        return {\n          ...state,\n          num: state.num + 1\n        }\n      case 'REDUCE':\n        return {\n          ...state,\n          num: state.num - 1\n        }\n      default:\n        return state\n    }\n  }\n\nfunction createStore (initStore = {}, reducer) {\n    let state = initStore\n    const registeredListeners = []\n  \n    const getState = () => state\n  \n    const dispatch = (action) => {\n      state = reducer(state, action)\n      registeredListeners.forEach((listener) => {\n        listener(state)\n      })\n    }\n  \n    const subscribe = (fn) => {\n      registeredListeners.push(fn)\n      return function unsubscribe () {\n        registeredListeners = registeredListeners.filter((listener) => fn !== listener)\n      }\n    }\n  \n    return {\n      getState,\n      dispatch,\n      subscribe\n    }\n  }\n\nconst initStore = {\n    num: 0\n}\n\nlet store = createStore(initStore, reducers)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanM/YzBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZWR1Y2VycyAoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0FERCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbnVtOiBzdGF0ZS5udW0gKyAxXG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ1JFRFVDRSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbnVtOiBzdGF0ZS5udW0gLSAxXG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZSAoaW5pdFN0b3JlID0ge30sIHJlZHVjZXIpIHtcbiAgICBsZXQgc3RhdGUgPSBpbml0U3RvcmVcbiAgICBjb25zdCByZWdpc3RlcmVkTGlzdGVuZXJzID0gW11cbiAgXG4gICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZVxuICBcbiAgICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxuICAgICAgcmVnaXN0ZXJlZExpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICBsaXN0ZW5lcihzdGF0ZSlcbiAgICAgIH0pXG4gICAgfVxuICBcbiAgICBjb25zdCBzdWJzY3JpYmUgPSAoZm4pID0+IHtcbiAgICAgIHJlZ2lzdGVyZWRMaXN0ZW5lcnMucHVzaChmbilcbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSAoKSB7XG4gICAgICAgIHJlZ2lzdGVyZWRMaXN0ZW5lcnMgPSByZWdpc3RlcmVkTGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IGZuICE9PSBsaXN0ZW5lcilcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBnZXRTdGF0ZSxcbiAgICAgIGRpc3BhdGNoLFxuICAgICAgc3Vic2NyaWJlXG4gICAgfVxuICB9XG5cbmNvbnN0IGluaXRTdG9yZSA9IHtcbiAgICBudW06IDBcbn1cblxuZXhwb3J0IGxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGluaXRTdG9yZSwgcmVkdWNlcnMpXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ })

/******/ });