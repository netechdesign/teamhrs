(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./resources/js/Demo/Dashboard/Crypto.js":
/*!***********************************************!*\
  !*** ./resources/js/Demo/Dashboard/Crypto.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/constant */ "./resources/js/store/constant.js");
/* harmony import */ var _Widget_Chart_AmChartStatistics1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Widget/Chart/AmChartStatistics1 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics1.js");
/* harmony import */ var _Widget_Chart_AmChartWorldUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Widget/Chart/AmChartWorldUser */ "./resources/js/Demo/Widget/Chart/AmChartWorldUser.js");
/* harmony import */ var _Widget_Chart_AmChartStatistics8__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Widget/Chart/AmChartStatistics8 */ "./resources/js/Demo/Widget/Chart/AmChartStatistics8.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Crypto = /*#__PURE__*/function (_React$Component) {
  _inherits(Crypto, _React$Component);

  var _super = _createSuper(Crypto);

  function Crypto() {
    _classCallCheck(this, Crypto);

    return _super.apply(this, arguments);
  }

  _createClass(Crypto, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "theme-bg bitcoin-wallet"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white mb-2"
      }, "Bitcoin Wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "text-white mb-3 f-w-300"
      }, "$9,302"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-white d-block"
      }, "Ratings by Market Capitalization"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-btc f-70 text-white"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "theme-bg2 bitcoin-wallet"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white mb-2"
      }, "Bitcoin Wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "text-white mb-3 f-w-300"
      }, "$8,101"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-white d-block"
      }, "Ratings by Market Capitalization"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-dollar f-70 text-white"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 12,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "bg-c-blue bitcoin-wallet"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-white mb-2"
      }, "Bitcoin Wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "text-white mb-3 f-w-300"
      }, "$7,501"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-white d-block"
      }, "Ratings by Market Capitalization"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-gbp f-70 text-white"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget_Chart_AmChartStatistics1__WEBPACK_IMPORTED_MODULE_4__["default"], {
        height: "330px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "note-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Notifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "media friendlist-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mr-3 photo-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-bell f-30"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "New order received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "f-12 float-right text-muted"
      }, "12.56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted m-0"
      }, "2 unread notification"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "media friendlist-box border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mr-3 photo-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-bell f-30"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "New user register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "f-12 float-right text-muted"
      }, "12.36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted m-0"
      }, "xx messages"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
        className: "media friendlist-box border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mr-3 photo-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-bell f-30"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "New order register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "f-12 float-right text-muted"
      }, "11.45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted m-0"
      }, "2 read notification"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media friendlist-box border-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mr-3 photo-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-bell f-30"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "New order prepend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "f-12 float-right text-muted"
      }, "9.39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted m-0"
      }, "xx messages")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 8,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Users From United States")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget_Chart_AmChartWorldUser__WEBPACK_IMPORTED_MODULE_5__["default"], {
        height: "350px"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 4,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "f-w-300"
      }, "$894.39")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Widget_Chart_AmChartStatistics8__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: "310px"
      }))))));
    }
  }]);

  return Crypto;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Crypto);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics1.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics1.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/serial */ "./node_modules/amcharts3/amcharts/serial.js");
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amcharts3/amcharts/themes/light */ "./node_modules/amcharts3/amcharts/themes/light.js");
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts3-react */ "./node_modules/@amcharts/amcharts3-react/index.js");
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var AmChartStatistics1 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics1, _Component);

  var _super = _createSuper(AmChartStatistics1);

  function AmChartStatistics1() {
    _classCallCheck(this, AmChartStatistics1);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartStatistics1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("line-area2", {
        "type": "serial",
        "theme": "light",
        "marginTop": 10,
        "marginRight": 0,
        "dataProvider": [{
          "year": "Jan",
          "value": 5,
          "value2": 80
        }, {
          "year": "Feb",
          "value": 30,
          "value2": 95
        }, {
          "year": "Mar",
          "value": 25,
          "value2": 87
        }, {
          "year": "Apr",
          "value": 55,
          "value2": 155
        }, {
          "year": "May",
          "value": 45,
          "value2": 140
        }, {
          "year": "Jun",
          "value": 65,
          "value2": 147
        }, {
          "year": "Jul",
          "value": 60,
          "value2": 130
        }, {
          "year": "Aug",
          "value": 105,
          "value2": 180
        }, {
          "year": "Sep",
          "value": 80,
          "value2": 160
        }, {
          "year": "Oct",
          "value": 110,
          "value2": 175
        }, {
          "year": "Nov",
          "value": 120,
          "value2": 165
        }, {
          "year": "Dec",
          "value": 150,
          "value2": 200
        }],
        "valueAxes": [{
          "axisAlpha": 0,
          "position": "left"
        }],
        "graphs": [{
          "id": "g1",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "round",
          "lineColor": "#1de9b6",
          "lineThickness": 3,
          "negativeLineColor": "#1de9b6",
          "valueField": "value"
        }, {
          "id": "g2",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "round",
          "lineColor": "#10adf5",
          "lineThickness": 3,
          "negativeLineColor": "#10adf5",
          "valueField": "value2"
        }],
        "chartCursor": {
          "cursorAlpha": 0,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "valueLineAlpha": 0.3,
          "fullWidth": true
        },
        "categoryField": "year",
        "categoryAxis": {
          "minorGridAlpha": 0,
          "minorGridEnabled": true,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0
        },
        "legend": {
          "useGraphSettings": true,
          "position": "top"
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "line-area2",
        className: "lineAreaDashboard",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartStatistics1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics1);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartStatistics8.js":
/*!**************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartStatistics8.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_amcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/serial */ "./node_modules/amcharts3/amcharts/serial.js");
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amcharts3/amcharts/themes/light */ "./node_modules/amcharts3/amcharts/themes/light.js");
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts3-react */ "./node_modules/@amcharts/amcharts3-react/index.js");
/* harmony import */ var _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AmChartStatistics8 = /*#__PURE__*/function (_Component) {
  _inherits(AmChartStatistics8, _Component);

  var _super = _createSuper(AmChartStatistics8);

  function AmChartStatistics8() {
    var _this;

    _classCallCheck(this, AmChartStatistics8);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dataum: [{
        "year": "1999",
        "value": 30
      }, {
        "year": "2000",
        "value": 55
      }, {
        "year": "2001",
        "value": 80
      }, {
        "year": "2002",
        "value": 60
      }, {
        "year": "2003",
        "value": 70
      }, {
        "year": "2004",
        "value": 70
      }, {
        "year": "2005",
        "value": 110
      }, {
        "year": "2006",
        "value": 90
      }, {
        "year": "2007",
        "value": 130
      }]
    });

    return _this;
  }

  _createClass(AmChartStatistics8, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var chartm = _amcharts_amcharts3_react__WEBPACK_IMPORTED_MODULE_4___default.a.makeChart("earnings-chart", {
        "type": "serial",
        "addClassNames": true,
        "defs": {
          "filter": [{
            "x": "-50%",
            "y": "-50%",
            "width": "200%",
            "height": "200%",
            "id": "blur",
            "feGaussianBlur": {
              "in": "SourceGraphic",
              "stdDeviation": "30"
            }
          }, {
            "id": "shadow",
            "x": "-10%",
            "y": "-10%",
            "width": "120%",
            "height": "120%",
            "feOffset": {
              "result": "offOut",
              "in": "SourceAlpha",
              "dx": "0",
              "dy": "20"
            },
            "feGaussianBlur": {
              "result": "blurOut",
              "in": "offOut",
              "stdDeviation": "10"
            },
            "feColorMatrix": {
              "result": "blurOut",
              "type": "matrix",
              "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"
            },
            "feBlend": {
              "in": "SourceGraphic",
              "in2": "blurOut",
              "mode": "normal"
            }
          }]
        },
        "fontSize": 15,
        "dataProvider": this.state.dataum,
        "dataDateFormat": "YYYY",
        "autoMarginOffset": 0,
        "marginRight": -1,
        "marginBottom": -2,
        "categoryField": "year",
        "categoryAxis": {
          "color": '#fff',
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0,
          "offset": -20,
          "inside": true,
          "parseDates": true,
          "minPeriod": "YYYY"
        },
        "chartCursor": {
          "valueLineEnabled": false,
          "valueLineBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false,
          "cursorColor": "#fff",
          "categoryBalloonColor": "#88dcef",
          "valueZoomable": false,
          "valueLineAlpha": 0
        },
        "valueAxes": [{
          "fontSize": 0,
          "inside": true,
          "gridAlpha": 0,
          "axisAlpha": 0,
          "lineAlpha": 0
        }],
        "graphs": [{
          "id": "g1",
          "type": "line",
          "valueField": "value",
          "fillColors": ["#1dc4e9", "#A389D4"],
          "lineColor": "#1dc4e9",
          "balloon": {
            "drop": true,
            "adjustBorderColor": false,
            "color": "#ffffff",
            "type": "smoothedLine"
          },
          "lineAlpha": 1,
          "lineThickness": 5,
          "fillAlphas": 0.9,
          "showBalloon": true
        }]
      });
      setTimeout(function () {
        chartm.zoomToIndexes(1, _this2.state.dataum.length - 2);
      }, 400);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "earnings-chart",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartStatistics8;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartStatistics8);

/***/ }),

/***/ "./resources/js/Demo/Widget/Chart/AmChartWorldUser.js":
/*!************************************************************!*\
  !*** ./resources/js/Demo/Widget/Chart/AmChartWorldUser.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ "./node_modules/@amcharts/amcharts4/maps.js");
/* harmony import */ var _amcharts_amcharts4_geodata_continentsLow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/continentsLow */ "./node_modules/@amcharts/amcharts4-geodata/continentsLow.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);

var AmChartWorldUser = /*#__PURE__*/function (_Component) {
  _inherits(AmChartWorldUser, _Component);

  var _super = _createSuper(AmChartWorldUser);

  function AmChartWorldUser() {
    _classCallCheck(this, AmChartWorldUser);

    return _super.apply(this, arguments);
  }

  _createClass(AmChartWorldUser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("world-low", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_3__["MapChart"]);
      chart.geodata = _amcharts_amcharts4_geodata_continentsLow__WEBPACK_IMPORTED_MODULE_4__["default"];
      chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_3__["projections"].Miller();
      var polygonSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_3__["MapPolygonSeries"]());
      polygonSeries.exclude = ["antarctica"];
      polygonSeries.useGeodata = true;
      var pieSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_3__["MapImageSeries"]());
      var pieTemplate = pieSeries.mapImages.template;
      pieTemplate.propertyFields.latitude = "latitude";
      pieTemplate.propertyFields.longitude = "longitude";
      var pieChartTemplate = pieTemplate.createChild(_amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"]);
      pieChartTemplate.adapter.add("data", function (data, target) {
        if (target.dataItem) {
          return target.dataItem.dataContext.pieData;
        } else {
          return [];
        }
      });
      pieChartTemplate.propertyFields.width = "width";
      pieChartTemplate.propertyFields.height = "height";
      pieChartTemplate.horizontalCenter = "middle";
      pieChartTemplate.verticalCenter = "middle";
      var pieTitle = pieChartTemplate.titles.create();
      pieTitle.text = "{title}";
      var pieSeriesTemplate = pieChartTemplate.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
      pieSeriesTemplate.dataFields.category = "category";
      pieSeriesTemplate.dataFields.value = "value";
      pieSeriesTemplate.labels.template.disabled = true;
      pieSeriesTemplate.ticks.template.disabled = true;
      pieSeries.data = [{
        "title": "North America",
        "latitude": 39.563353,
        "longitude": -99.316406,
        "width": 100,
        "height": 100,
        "pieData": [{
          "category": "Category #1",
          "value": 1200,
          "fill": 'red'
        }, {
          "category": "Category #2",
          "value": 500
        }, {
          "category": "Category #3",
          "value": 765
        }, {
          "category": "Category #4",
          "value": 260
        }]
      }, {
        "title": "Europe",
        "latitude": 50.896104,
        "longitude": 19.160156,
        "width": 50,
        "height": 50,
        "pieData": [{
          "category": "Category #1",
          "value": 200
        }, {
          "category": "Category #2",
          "value": 600
        }, {
          "category": "Category #3",
          "value": 350
        }]
      }, {
        "title": "Asia",
        "latitude": 47.212106,
        "longitude": 103.183594,
        "width": 80,
        "height": 80,
        "pieData": [{
          "category": "Category #1",
          "value": 352
        }, {
          "category": "Category #2",
          "value": 266
        }, {
          "category": "Category #3",
          "value": 512
        }, {
          "category": "Category #4",
          "value": 199
        }]
      }, {
        "title": "Africa",
        "latitude": 11.081385,
        "longitude": 21.621094,
        "width": 50,
        "height": 50,
        "pieData": [{
          "category": "Category #1",
          "value": 200
        }, {
          "category": "Category #2",
          "value": 300
        }, {
          "category": "Category #3",
          "value": 599
        }, {
          "category": "Category #4",
          "value": 512
        }]
      }];
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "world-low",
        style: {
          width: '100%',
          height: this.props.height
        }
      });
    }
  }]);

  return AmChartWorldUser;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AmChartWorldUser);

/***/ })

}]);