(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/react-super-responsive-table/dist/components/Table.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/components/Table.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _tableContext = __webpack_require__(/*! ../utils/tableContext */ "./node_modules/react-super-responsive-table/dist/utils/tableContext.js");

var _allowed = _interopRequireDefault(__webpack_require__(/*! ../utils/allowed */ "./node_modules/react-super-responsive-table/dist/utils/allowed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);
    _this.state = {
      headers: {}
    };
    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var headers = this.state.headers;
      var _this$props = this.props,
          className = _this$props.className,
          forwardedRef = _this$props.forwardedRef;
      var classes = "".concat(className || '', " responsiveTable");
      return /*#__PURE__*/_react["default"].createElement(_tableContext.Provider, {
        value: headers
      }, /*#__PURE__*/_react["default"].createElement("table", _extends({
        "data-testid": "table"
      }, (0, _allowed["default"])(this.props), {
        className: classes,
        ref: forwardedRef
      })));
    }
  }]);

  return Table;
}(_react["default"].Component);

Table.propTypes = {
  className: _propTypes["default"].string,
  forwardedRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].instanceOf(global.Element)
  })])
};
Table.defaultProps = {
  className: undefined,
  forwardedRef: undefined
};

var TableForwardRef = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Table, _extends({}, props, {
    forwardedRef: ref
  }));
});

TableForwardRef.displayName = Table.name;
var _default = TableForwardRef;
exports["default"] = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/components/Tbody.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/components/Tbody.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _allowed = _interopRequireDefault(__webpack_require__(/*! ../utils/allowed */ "./node_modules/react-super-responsive-table/dist/utils/allowed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tbody = function Tbody(props) {
  return /*#__PURE__*/_react["default"].createElement("tbody", _extends({
    "data-testid": "tbody"
  }, (0, _allowed["default"])(props)));
};

var _default = Tbody;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/components/Td.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/components/Td.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _tableContext = __webpack_require__(/*! ../utils/tableContext */ "./node_modules/react-super-responsive-table/dist/utils/tableContext.js");

var _TdInner = _interopRequireDefault(__webpack_require__(/*! ./TdInner */ "./node_modules/react-super-responsive-table/dist/components/TdInner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Td = function Td(props) {
  return /*#__PURE__*/_react["default"].createElement(_tableContext.Consumer, null, function (headers) {
    return /*#__PURE__*/_react["default"].createElement(_TdInner["default"], _extends({}, props, {
      headers: headers
    }));
  });
};

var _default = Td;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/components/TdInner.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/components/TdInner.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _allowed = _interopRequireDefault(__webpack_require__(/*! ../utils/allowed */ "./node_modules/react-super-responsive-table/dist/utils/allowed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TdInner = function TdInner(props) {
  var headers = props.headers,
      children = props.children,
      columnKey = props.columnKey,
      className = props.className,
      colSpan = props.colSpan;
  var classes = "".concat(className || '', " pivoted");

  if (colSpan) {
    return /*#__PURE__*/_react["default"].createElement("td", _extends({
      "data-testid": "td"
    }, (0, _allowed["default"])(props)));
  }

  return /*#__PURE__*/_react["default"].createElement("td", _extends({
    "data-testid": "td"
  }, (0, _allowed["default"])(props), {
    className: classes
  }), /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "td-before",
    className: "tdBefore"
  }, headers[columnKey]), children !== null && children !== void 0 ? children : /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"));
};

TdInner.propTypes = {
  children: _propTypes["default"].node,
  headers: _propTypes["default"].shape({}),
  columnKey: _propTypes["default"].number,
  className: _propTypes["default"].string,
  colSpan: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
};
TdInner.defaultProps = {
  children: undefined,
  headers: undefined,
  columnKey: undefined,
  className: undefined,
  colSpan: undefined
};
var _default = TdInner;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/components/Th.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/components/Th.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _allowed = _interopRequireDefault(__webpack_require__(/*! ../utils/allowed */ "./node_modules/react-super-responsive-table/dist/utils/allowed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Th = function Th(props) {
  return /*#__PURE__*/_react["default"].createElement("th", _extends({
    "data-testid": "th"
  }, (0, _allowed["default"])(props)));
};

var _default = Th;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/components/Thead.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/components/Thead.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _allowed = _interopRequireDefault(__webpack_require__(/*! ../utils/allowed */ "./node_modules/react-super-responsive-table/dist/utils/allowed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Thead = function Thead(props) {
  var children = props.children;
  return /*#__PURE__*/_react["default"].createElement("thead", _extends({
    "data-testid": "thead"
  }, (0, _allowed["default"])(props)), /*#__PURE__*/_react["default"].cloneElement(children, {
    inHeader: true
  }));
};

Thead.propTypes = {
  children: _propTypes["default"].node
};
Thead.defaultProps = {
  children: undefined
};
var _default = Thead;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/components/Tr.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/components/Tr.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _tableContext = __webpack_require__(/*! ../utils/tableContext */ "./node_modules/react-super-responsive-table/dist/utils/tableContext.js");

var _TrInner = _interopRequireDefault(__webpack_require__(/*! ./TrInner */ "./node_modules/react-super-responsive-table/dist/components/TrInner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tr = function Tr(props) {
  return /*#__PURE__*/_react["default"].createElement(_tableContext.Consumer, null, function (headers) {
    return /*#__PURE__*/_react["default"].createElement(_TrInner["default"], _extends({}, props, {
      headers: headers
    }));
  });
};

var _default = Tr;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/components/TrInner.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/components/TrInner.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _allowed = _interopRequireDefault(__webpack_require__(/*! ../utils/allowed */ "./node_modules/react-super-responsive-table/dist/utils/allowed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TrInner = /*#__PURE__*/function (_React$Component) {
  _inherits(TrInner, _React$Component);

  var _super = _createSuper(TrInner);

  function TrInner(props) {
    var _this;

    _classCallCheck(this, TrInner);

    _this = _super.call(this, props);
    var headers = props.headers;

    if (headers && props.inHeader) {
      _react["default"].Children.map(props.children, function (child, i) {
        if (child) {
          headers[i] = child.props.children;
        }
      });
    }

    return _this;
  }

  _createClass(TrInner, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement("tr", _extends({
        "data-testid": "tr"
      }, (0, _allowed["default"])(this.props)), children && _react["default"].Children.map(children, function (child, i) {
        return child && /*#__PURE__*/_react["default"].cloneElement(child, {
          // eslint-disable-next-line react/no-array-index-key
          key: i,
          columnKey: i
        });
      }));
    }
  }]);

  return TrInner;
}(_react["default"].Component);

TrInner.propTypes = {
  children: _propTypes["default"].node,
  headers: _propTypes["default"].shape({}),
  inHeader: _propTypes["default"].bool
};
TrInner.defaultProps = {
  children: undefined,
  headers: undefined,
  inHeader: undefined
};
var _default = TrInner;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function get() {
    return _Table["default"];
  }
});
Object.defineProperty(exports, "Tbody", {
  enumerable: true,
  get: function get() {
    return _Tbody["default"];
  }
});
Object.defineProperty(exports, "Td", {
  enumerable: true,
  get: function get() {
    return _Td["default"];
  }
});
Object.defineProperty(exports, "Th", {
  enumerable: true,
  get: function get() {
    return _Th["default"];
  }
});
Object.defineProperty(exports, "Thead", {
  enumerable: true,
  get: function get() {
    return _Thead["default"];
  }
});
Object.defineProperty(exports, "Tr", {
  enumerable: true,
  get: function get() {
    return _Tr["default"];
  }
});

var _Table = _interopRequireDefault(__webpack_require__(/*! ./components/Table */ "./node_modules/react-super-responsive-table/dist/components/Table.js"));

var _Tbody = _interopRequireDefault(__webpack_require__(/*! ./components/Tbody */ "./node_modules/react-super-responsive-table/dist/components/Tbody.js"));

var _Td = _interopRequireDefault(__webpack_require__(/*! ./components/Td */ "./node_modules/react-super-responsive-table/dist/components/Td.js"));

var _Th = _interopRequireDefault(__webpack_require__(/*! ./components/Th */ "./node_modules/react-super-responsive-table/dist/components/Th.js"));

var _Thead = _interopRequireDefault(__webpack_require__(/*! ./components/Thead */ "./node_modules/react-super-responsive-table/dist/components/Thead.js"));

var _Tr = _interopRequireDefault(__webpack_require__(/*! ./components/Tr */ "./node_modules/react-super-responsive-table/dist/components/Tr.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/utils/allowed.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/utils/allowed.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var omit = function omit(obj, omitProps) {
  return Object.keys(obj).filter(function (key) {
    return omitProps.indexOf(key) === -1;
  }).reduce(function (returnObj, key) {
    return _objectSpread(_objectSpread({}, returnObj), {}, _defineProperty({}, key, obj[key]));
  }, {});
};

var allowed = function allowed(props) {
  return omit(props, ['inHeader', 'columnKey', 'headers', 'forwardedRef']);
};

var _default = allowed;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/utils/tableContext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/utils/tableContext.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _React$createContext = /*#__PURE__*/_react["default"].createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.Consumer = Consumer;
exports.Provider = Provider;

/***/ })

}]);