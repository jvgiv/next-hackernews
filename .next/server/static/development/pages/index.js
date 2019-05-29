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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      backButton = _ref.backButton;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2560580303"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2560580303"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-2560580303"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2560580303" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2560580303"
  }, backButton && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
    },
    className: "jsx-2560580303" + " " + "back-button"
  }, "\u2B05"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2560580303"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2560580303" + " " + "main-title"
  }, "Hacker Next")))), children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "350122247",
    css: ".container.jsx-2560580303{max-width:800px;margin:0 auto;background:#f6f6ef;}nav.jsx-2560580303{background:#f60;padding:1em;}nav.jsx-2560580303>*.jsx-2560580303{display:inline-block;color:black;}nav.jsx-2560580303 a.jsx-2560580303{-webkit-text-decoration:none;text-decoration:none;}nav.jsx-2560580303 .main-title.jsx-2560580303{font-weight:bold;}nav.jsx-2560580303 .back-button.jsx-2560580303{font-size:0.9rem;padding-right:1em;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcR2l0SHViUHJvamVjdFN0dWZmXFxuZXh0LWhhY2tlcm5ld3NcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBR2lDLEFBS0EsQUFJSyxBQUlBLEFBR0osQUFHQSxnQkFsQkgsQUFLRixDQVdoQixBQUdzQixJQVZOLE9BSGhCLEVBTHVCLEdBU3ZCLEVBVW1CLGNBbEJuQixDQVdBLEFBUUEiLCJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxHaXRIdWJQcm9qZWN0U3R1ZmZcXG5leHQtaGFja2VybmV3c1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGRlc2NyaXB0aW9uLCBiYWNrQnV0dG9uIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICB7YmFja0J1dHRvbiAmJiA8c3BhbiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIuYmFjaygpfSBjbGFzc05hbWU9XCJiYWNrLWJ1dHRvblwiPiYjeDJiMDU7PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5IYWNrZXIgTmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZlZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2MDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYgPiAqIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmF2IC5tYWluLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hdiAuYmFjay1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=C:\\Users\\user\\Desktop\\GitHubProjectStuff\\next-hackernews\\components\\Layout.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3811727041",
    css: "body{background:white;font-family:Verdana,Geneva,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcR2l0SHViUHJvamVjdFN0dWZmXFxuZXh0LWhhY2tlcm5ld3NcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRDJCLEFBR2tDLGlCQUN1QixzQ0FDNUMiLCJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxHaXRIdWJQcm9qZWN0U3R1ZmZcXG5leHQtaGFja2VybmV3c1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGRlc2NyaXB0aW9uLCBiYWNrQnV0dG9uIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICB7YmFja0J1dHRvbiAmJiA8c3BhbiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIuYmFjaygpfSBjbGFzc05hbWU9XCJiYWNrLWJ1dHRvblwiPiYjeDJiMDU7PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5IYWNrZXIgTmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZlZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2MDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYgPiAqIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmF2IC5tYWluLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hdiAuYmFjay1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=C:\\Users\\user\\Desktop\\GitHubProjectStuff\\next-hackernews\\components\\Layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3042506596" + " " + "story-list"
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-3042506596" + " " + "story"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3042506596" + " " + "story-title"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-3042506596"
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3042506596" + " " + "story-details"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3042506596"
    }, story.points || 0, " points"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3042506596"
    }, story.comments_count || 0, " comments"))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3042506596",
    css: ".story-list.jsx-3042506596{padding:0 1em;}.story.jsx-3042506596{padding:1em 0;}.story-title.jsx-3042506596{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-3042506596 a.jsx-3042506596{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3042506596 a.jsx-3042506596:hover,.story-details.jsx-3042506596 a.jsx-3042506596:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-3042506596{font-size:0.8rem;font-weight:bold;}.story-details.jsx-3042506596 span.jsx-3042506596{margin-right:1em;}.story-details.jsx-3042506596 a.jsx-3042506596{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcR2l0SHViUHJvamVjdFN0dWZmXFxuZXh0LWhhY2tlcm5ld3NcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQm9CLEFBRytCLEFBR0EsQUFHQyxBQU1KLEFBSWUsQUFHVCxBQUlBLEFBR0gsV0FiTyxHQVp6QixBQUdBLEFBdUJ5QixDQXBCTCxFQWFDLEFBSXJCLGNBaEJhLEdBYWIsTUFad0Isb0JBQ3hCLEFBT0EsQ0FIQSxHQWNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcR2l0SHViUHJvamVjdFN0dWZmXFxuZXh0LWhhY2tlcm5ld3NcXGNvbXBvbmVudHNcXFN0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1saXN0XCI+XHJcbiAgICAgICAge3N0b3JpZXMubWFwKHN0b3J5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICggIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeVwiIGtleT17c3RvcnkuaWR9ID5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c3RvcnkudXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdG9yeS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+PHNwYW4+e3N0b3J5LnBvaW50cyB8fCAwfSBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57c3RvcnkuY29tbWVudHNfY291bnQgfHwgMH0gY29tbWVudHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnN0b3J5LWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3J5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdG9yeS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3J5LXRpdGxlIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3J5LXRpdGxlIGE6aG92ZXIsIC5zdG9yeS1kZXRhaWxzIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3J5LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3RvcnktZGV0YWlscyBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjAwZmY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlMaXN0Il19 */\n/*@ sourceURL=C:\\Users\\user\\Desktop\\GitHubProjectStuff\\next-hackernews\\components\\StoryList.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_StoryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StoryList */ "./components/StoryList.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
          console.log('SW Reg Success', registration);
        }).catch(function (err) {
          console.log('sw reg failure', err.message);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          page = _this$props.page,
          stories = _this$props.stories;

      if (stories.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {
          statusCode: 503
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Hacker Next Clone",
        description: "A Hacker News clone made with NextJS"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_StoryList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        stories: stories
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
        className: "jsx-715424901"
      }, page === 1 ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/?page=".concat(page - 1)
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-715424901"
      }, "Previous Page (", page - 1, ")")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/?page=".concat(page + 1)
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-715424901"
      }, "Next Page (", page + 1, ")"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "715424901",
        css: "footer.jsx-715424901{padding:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}footer.jsx-715424901 a.jsx-715424901{font-weight:bold;-webkit-text-decoration:none;text-decoration:none;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcR2l0SHViUHJvamVjdFN0dWZmXFxuZXh0LWhhY2tlcm5ld3NcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRDRCLEFBR3FDLEFBS0ssWUFKSixLQUtRLGtEQUNULFlBQ2hCLE9BTmlDLDJIQUNqQyIsImZpbGUiOiJDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXEdpdEh1YlByb2plY3RTdHVmZlxcbmV4dC1oYWNrZXJuZXdzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXHJcbmltcG9ydCBTdG9yeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9TdG9yeUxpc3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcmVzLCBxdWVyeSB9KSB7XHJcbiAgICAgICAgbGV0IHN0b3JpZXM7XHJcbiAgICAgICAgbGV0IHBhZ2U7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHBhZ2UgPSBOdW1iZXIocXVlcnkucGFnZSkgfHwgMTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vbmV3cz9wYWdlPSR7cGFnZX1gKTtcclxuICAgICAgICAgICAgc3RvcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgc3RvcmllcyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7IHBhZ2UsIHN0b3JpZXMgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcclxuICAgICAgICAgICAgICAgIC5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NXIFJlZyBTdWNjZXNzJywgcmVnaXN0cmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdyByZWcgZmFpbHVyZScsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZSwgc3RvcmllcyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBpZiAoc3Rvcmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs1MDN9IC8+XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiSGFja2VyIE5leHQgQ2xvbmVcIiBkZXNjcmlwdGlvbj1cIkEgSGFja2VyIE5ld3MgY2xvbmUgbWFkZSB3aXRoIE5leHRKU1wiPlxyXG4gICAgICAgICAgICAgICAgPFN0b3J5TGlzdCBzdG9yaWVzPXtzdG9yaWVzfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhZ2UgPT09IDEgPyBudWxsIDogXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8/cGFnZT0ke3BhZ2UgLSAxfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5QcmV2aW91cyBQYWdlICh7cGFnZSAtIDF9KTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvP3BhZ2U9JHtwYWdlICsgMX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+TmV4dCBQYWdlICh7cGFnZSArIDF9KTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=C:\\Users\\user\\Desktop\\GitHubProjectStuff\\next-hackernews\\pages\\index.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, stories, page, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                _context.prev = 1;
                page = Number(query.page) || 1;
                _context.next = 5;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("https://node-hnapi.herokuapp.com/news?page=".concat(page));

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                stories = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                stories = [];

              case 15:
                return _context.abrupt("return", {
                  page: page,
                  stories: stories
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map