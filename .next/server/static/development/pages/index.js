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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/data-example"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Data")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: layoutStyle
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_0__["default"], null), this.props.children);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); //can be used interchangeably?

/*
const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)
*/


/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-gsap */ "react-gsap");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_gif_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-gif-player */ "react-gif-player");
/* harmony import */ var react_gif_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_gif_player__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 //import Background from '../images/irene450.jpg';

 //import Gif from 'react-gif'; (react-gif is broken) (it needs you to download react@15.0.0)

 //testing scrollmagic vs react-scrollmagic (i think react-scroll magic is glitchier/less smooth)
//import ScrollMagic from 'scrollmagic'; DOESNT WORK

var backgroundStyle = {
  width: '100vw',
  height: '100vh',
  //backgroundImage: 'url(https://reedart.files.wordpress.com/2015/11/tumblr_np1rsmwqah1uwpbczo1_500.gif)',
  //backgroundImage: 'url(https://reedart.files.wordpress.com/2015/11/tumblr_np1rsmwqah1uwpbczo1_500.gif)',
  backgroundImage: 'url(https://66.media.tumblr.com/834d72ef32d84b400266a4aa6661ff31/tumblr_n26039VliX1r3nnfeo1_500.gif)',
  color: 'white',
  position: 'fixed',
  backgroundColor: 'blue',
  backgroundSize: 'cover',
  transition: "all 0.5s ease-in-out"
};
var myRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
var way = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
var background = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
var rain = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
var radio = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
var text = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
var white = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      eyesClosed: false,
      eyesClosing: false,
      radioOn: false,
      radioTurningOn: false,
      isOff: 'https://i.imgur.com/RgIKa2q.gif',
      turningOn: 'https://i.imgur.com/ninXOrz.gif',
      isOn: 'https://i.imgur.com/GoJz4P2.gif',
      offset: -200
    }; //YOU NEED TO DO THIS PART FOR EVERY METHOD DEFINED

    _this.closeEyes = _this.closeEyes.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.turnOnRadio = _this.turnOnRadio.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      white.current.style.opacity = 0;
      setTimeout(function () {
        _this2.hideWhite();
      }, 1000);
    }
  }, {
    key: "hideWhite",
    value: function hideWhite() {
      white.current.style.display = 'none';
    }
  }, {
    key: "play",
    value: function play() {
      rain.current.play();
      console.log("waypoint entered");
      console.log(way);
      console.log(background.current);
    }
  }, {
    key: "closeEyes",
    value: function closeEyes() {
      var _this3 = this;

      rain.current.play();
      rain.current.pause(); //the difference between this.state.eyesClosed = true and this.setState is that setState reRenders

      this.setState({
        'eyesClosing': true
      });
      console.log(radio.current);
      console.log(this.state.eyesClosing);
      setTimeout(function () {
        _this3.setState({
          'eyesClosed': true
        });
      }, 4000);
    }
  }, {
    key: "turnOnRadio",
    value: function turnOnRadio() {
      var _this4 = this;

      this.setState({
        radioTurningOn: true
      });
      radio.current.toggle();
      setTimeout(function () {
        _this4.setState({
          'radioOn': true
        });
      }, 2100);
      setTimeout(function () {
        _this4.closeEyes();
      }, 1500);
    }
  }, {
    key: "Main",
    value: function Main(eyesClosed) {
      if (eyesClosed) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__["Controller"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__["Scene"], {
          duration: 1500,
          pin: true,
          triggerHook: "onLeave"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            color: 'white'
          }
        }, "1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_4___default.a, {
          onEnter: this.play
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__["Controller"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__["Scene"], {
          duration: 2500,
          pin: true,
          triggerHook: "onLeave"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Timeline"], {
          style: {
            position: 'relative'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Tween"], {
          from: {
            opacity: 1
          },
          to: {
            opacity: 0
          },
          duration: 1500
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            width: '100vw',
            height: '150vh',
            backgroundColor: 'black',
            color: 'white',
            position: 'absolute',
            zIndex: 0
          }
        }, "2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Tween"], {
          from: {
            filter: 'blur(30px)'
          },
          to: {
            filter: 'blur(0px)'
          },
          duration: 2500,
          delay: -1500
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url(https://66.media.tumblr.com/834d72ef32d84b400266a4aa6661ff31/tumblr_n26039VliX1r3nnfeo1_500.gif)',
            color: 'white',
            position: 'absolute',
            backgroundSize: 'cover',
            zIndex: -1
          }
        }, "2"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: text,
          style: {
            backgroundColor: 'blue',
            width: '80vw',
            height: '100px',
            padding: '10vw',
            zIndex: 1
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__["Controller"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__["Scene"], {
          duration: 2000,
          pin: true,
          triggerHook: "onEnter",
          offset: -500
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Timeline"], {
          target: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["SplitLetters"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              display: 'inline-block',
              fontSize: '40px',
              color: 'white'
            }
          }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit n voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.pppppppppppp"))
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Tween"], {
          duration: 10,
          from: {
            opacity: 1
          },
          to: {
            opacity: 0
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Tween"], {
          duration: 10
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Tween"], {
          duration: 100,
          from: {
            y: '0'
          },
          to: {
            y: '-1100'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Tween"], {
          staggerFrom: {
            opacity: 0
          },
          staggerTo: {
            opacity: 1
          },
          stagger: 0.2,
          duration: 0.1
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Tween"], {
          duration: 10,
          from: {
            opacity: 1
          },
          to: {
            opacity: 0
          }
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            width: '100vw',
            height: '100vh',
            backgroundColor: 'blue'
          }
        })));
      }
    }
  }, {
    key: "Radio",
    value: function Radio(eyesClosing, eyesClosed) {
      if (!eyesClosed) {
        if (eyesClosing) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Timeline"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Tween"], {
            from: {
              opacity: 0
            },
            to: {
              opacity: 1
            },
            duration: 6
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              width: '100vw',
              height: '100vh',
              backgroundColor: 'black',
              color: 'white',
              position: 'absolute',
              zIndex: 2
            }
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_3__["Tween"], {
            from: {
              filter: 'blur(0px)'
            },
            to: {
              filter: 'blur(30px)'
            },
            duration: 6,
            delay: -6
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              width: '100vw',
              height: '100vh',
              position: 'absolute',
              backgroundColor: 'black',
              backgroundImage: "url(".concat(this.state.isOn, ")"),
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              zIndex: 1
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: this.closeEyes,
            type: "button"
          }, "close"))));
        } else if (this.state.radioOn) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              width: '100vw',
              height: '100vh',
              position: 'absolute',
              backgroundColor: 'black',
              backgroundImage: "url(".concat(this.state.isOn, ")"),
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: this.turnOnRadio,
            type: "button"
          }, "close"));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gif_player__WEBPACK_IMPORTED_MODULE_5___default.a, {
            ref: radio,
            style: {
              width: '100vw',
              height: '100vh',
              position: 'absolute',
              objectFit: 'cover'
            },
            gif: this.state.turningOn,
            still: this.state.isOff,
            playing: true
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            style: {
              position: 'absolute'
            },
            onClick: this.turnOnRadio,
            type: "button"
          }, "close"));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var blackHeight = '100vh';

      if (this.state.eyesClosed) {
        blackHeight = '2500px';
      }

      var eyesClosing = this.state.eyesClosing;
      var eyesClosed = this.state.eyesClosed;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginTop: '-8px',
          marginLeft: '-8px',
          backgroundColor: 'black',
          width: '100vw',
          height: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: backgroundStyle,
        ref: background
      }, "sdfklfda;l", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
        ref: rain,
        loop: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: "https://rainymood.com/audio1110/0.m4a",
        type: "video/mp4"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          backgroundColor: 'black',
          backgroundImage: "url(".concat(this.state.isOn, ")"),
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }
      }), this.Radio(eyesClosing, eyesClosed), this.Main(eyesClosed), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: white,
        style: {
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          backgroundColor: 'white',
          transition: 'opacity 1s ease-out'
        }
      }, "white"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/*
const Index = () => (
  this is a function!  wow
  <div style={{marginTop: '-20px', marginLeft: '-8px', backgroundColor: 'black', width: '100vw', height: '100%'}}>
    <div style={backgroundStyle}>
          sdfklfda;l
    </div> 
    <Layout>  
      <Controller>
        <Scene duration={6000} pin>
          <div style={{width: 100, height: 100, backgroundColor: 'blue', color: 'white'}}>
            1
            <audio ref={myRef} controls loop autoPlay>
              <source src="https://rainymood.com/audio1110/0.m4a" type="video/mp4" />
            </audio>
            <button onClick={play} type="button">hi</button>
          </div>
        </Scene>
      </Controller> 
      <Waypoint onEnter={play}>
        <div style={{color: 'white'}}>Waypoint Here</div>
    </Waypoint>
      <Controller>
        <Scene duration={6000} pin>
          <div style={{width: 100, height: 100, backgroundColor: 'blue', color: 'white'}}>
            2
          </div>
        </Scene>
      </Controller> 
      <Controller>
        <Scene duration={6000} pin>
          <div style={{width: 100, height: 100, backgroundColor: 'blue', color: 'white'}}>
            3
          </div>
        </Scene>
      </Controller>       
    </Layout>
  </div>
)
*/


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

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-gif-player":
/*!***********************************!*\
  !*** external "react-gif-player" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-gif-player");

/***/ }),

/***/ "react-gsap":
/*!*****************************!*\
  !*** external "react-gsap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-gsap");

/***/ }),

/***/ "react-scrollmagic":
/*!************************************!*\
  !*** external "react-scrollmagic" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollmagic");

/***/ }),

/***/ "react-waypoint":
/*!*********************************!*\
  !*** external "react-waypoint" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map