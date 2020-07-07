module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/samlak/project/nextjs/components/User.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nconst user = props => __jsx(\"div\", {\n  className: \"jsx-735088722\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }\n}, __jsx(\"h1\", {\n  className: \"jsx-735088722\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }\n}, props.name), __jsx(\"p\", {\n  className: \"jsx-735088722\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }\n}, \"Age: \", props.age), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"735088722\",\n  __self: undefined\n}, \"div.jsx-735088722{border:1px solid #eee;box-shadow:0 2px 3px #ccc;padding:20px;text-align:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbWxhay9wcm9qZWN0L25leHRqcy9jb21wb25lbnRzL1VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9CLEFBR3VDLHNCQUNJLDBCQUNiLGFBQ0ssa0JBQ3RCIiwiZmlsZSI6Ii9ob21lL3NhbWxhay9wcm9qZWN0L25leHRqcy9jb21wb25lbnRzL1VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VyID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgxPntwcm9wcy5uYW1lfTwvaDE+XG4gICAgICAgIDxwPkFnZToge3Byb3BzLmFnZX08L3A+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggI2NjYztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlcjsiXX0= */\\n/*@ sourceURL=/home/samlak/project/nextjs/components/User.js */\"));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (user);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanM/NTY1OCJdLCJuYW1lcyI6WyJ1c2VyIiwicHJvcHMiLCJuYW1lIiwiYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFLQSxLQUFLLENBQUNDLElBQVgsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFTRCxLQUFLLENBQUNFLEdBQWYsQ0FGSjtBQUFBO0FBQUE7QUFBQSxtaUNBREo7O0FBZWVILG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Vc2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT57cHJvcHMubmFtZX08L2gxPlxuICAgICAgICA8cD5BZ2U6IHtwcm9wcy5hZ2V9PC9wPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4ICNjY2M7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/User */ \"./components/User.js\");\nvar _jsxFileName = \"/home/samlak/project/nextjs/pages/auth/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst authIndexPage = props => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }\n}, \"The Auth Index Page - \", props.appName, \" \"), __jsx(_components_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  name: \"Max\",\n  age: 28,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }\n}));\n\nauthIndexPage.getInitialProps = context => {\n  const promise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve({\n        appName: 'Super App'\n      });\n    }, 1000);\n  });\n  return promise;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authIndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2luZGV4LmpzPzZjNTUiXSwibmFtZXMiOlsiYXV0aEluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBSUMsS0FBRCxJQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBMkJBLEtBQUssQ0FBQ0MsT0FBakMsTUFESixFQUVJLE1BQUMsd0RBQUQ7QUFBTSxNQUFJLEVBQUMsS0FBWDtBQUFpQixLQUFHLEVBQUUsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZKLENBREo7O0FBT0FGLGFBQWEsQ0FBQ0csZUFBZCxHQUFnQ0MsT0FBTyxJQUFJO0FBQ3ZDLFFBQU1DLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQzdDQyxjQUFVLENBQUMsTUFBTTtBQUNiRixhQUFPLENBQUM7QUFBQ0wsZUFBTyxFQUFFO0FBQVYsT0FBRCxDQUFQO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEdBSmUsQ0FBaEI7QUFLQSxTQUFPRyxPQUFQO0FBQ0gsQ0FQRDs7QUFTZUwsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXNlcic7XG5cbmNvbnN0IGF1dGhJbmRleFBhZ2UgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8aDE+VGhlIEF1dGggSW5kZXggUGFnZSAtIHtwcm9wcy5hcHBOYW1lfSA8L2gxPlxuICAgICAgICA8VXNlciBuYW1lPVwiTWF4XCIgYWdlPXsyOH0gLz5cbiAgICA8L2Rpdj5cbik7XG5cbmF1dGhJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gY29udGV4dCA9PiB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHthcHBOYW1lOiAnU3VwZXIgQXBwJ30pXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhJbmRleFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/index.js\n");

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/auth/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/samlak/project/nextjs/pages/auth/index.js */"./pages/auth/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });