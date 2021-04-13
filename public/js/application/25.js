(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./resources/js/Demo/Forms/FormsSelect.js":
/*!************************************************!*\
  !*** ./resources/js/Demo/Forms/FormsSelect.js ***!
  \************************************************/
/*! exports provided: colourOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colourOptions", function() { return colourOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select/lib/Creatable */ "./node_modules/react-select/lib/Creatable.js");
/* harmony import */ var react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select_lib_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select/lib/animated */ "./node_modules/react-select/lib/animated/index.js");
/* harmony import */ var react_select_lib_animated__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_animated__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _list_box_BasicExample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-box/BasicExample */ "./resources/js/Demo/Forms/list-box/BasicExample.js");
/* harmony import */ var _list_box_OptGroupExample__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-box/OptGroupExample */ "./resources/js/Demo/Forms/list-box/OptGroupExample.js");
/* harmony import */ var _list_box_FilterExample__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-box/FilterExample */ "./resources/js/Demo/Forms/list-box/FilterExample.js");
/* harmony import */ var _list_box_AlignTopExample__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-box/AlignTopExample */ "./resources/js/Demo/Forms/list-box/AlignTopExample.js");
/* harmony import */ var _list_box_DisabledExample__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-box/DisabledExample */ "./resources/js/Demo/Forms/list-box/DisabledExample.js");
/* harmony import */ var _list_box_PreserveSelectOrderExample__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-box/PreserveSelectOrderExample */ "./resources/js/Demo/Forms/list-box/PreserveSelectOrderExample.js");
/* harmony import */ var _list_box_AllowDuplicatesExample__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-box/AllowDuplicatesExample */ "./resources/js/Demo/Forms/list-box/AllowDuplicatesExample.js");
/* harmony import */ var _list_box_RestrictAvailableExample__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-box/RestrictAvailableExample */ "./resources/js/Demo/Forms/list-box/RestrictAvailableExample.js");
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var colourOptions = [{
  value: 'ocean',
  label: 'Ocean',
  color: '#00B8D9'
}, {
  value: 'blue',
  label: 'Blue',
  color: '#0052CC',
  isDisabled: true
}, {
  value: 'purple',
  label: 'Purple',
  color: '#5243AA'
}, {
  value: 'red',
  label: 'Red',
  color: '#FF5630',
  isFixed: true
}, {
  value: 'orange',
  label: 'Orange',
  color: '#FF8B00'
}, {
  value: 'yellow',
  label: 'Yellow',
  color: '#FFC400'
}, {
  value: 'green',
  label: 'Green',
  color: '#36B37E',
  isFixed: true
}, {
  value: 'forest',
  label: 'Forest',
  color: '#00875A'
}, {
  value: 'slate',
  label: 'Slate',
  color: '#253858'
}, {
  value: 'silver',
  label: 'Silver',
  color: '#666666'
}];

var dot = function dot() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ccc';
  return {
    alignItems: 'center',
    display: 'flex',
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10
    }
  };
};

var colourStylesSingle = {
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: 'white'
    });
  },
  option: function option(styles, _ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    var color = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(data.color);
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled ? '#ccc' : isSelected ? chroma_js__WEBPACK_IMPORTED_MODULE_5___default.a.contrast(color, 'white') > 2 ? 'white' : 'black' : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default'
    });
  },
  input: function input(styles) {
    return _objectSpread(_objectSpread({}, styles), dot());
  },
  placeholder: function placeholder(styles) {
    return _objectSpread(_objectSpread({}, styles), dot());
  },
  singleValue: function singleValue(styles, _ref2) {
    var data = _ref2.data;
    return _objectSpread(_objectSpread({}, styles), dot(data.color));
  }
};
var colourStylesMulti = {
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: 'white'
    });
  },
  option: function option(styles, _ref3) {
    var data = _ref3.data,
        isDisabled = _ref3.isDisabled,
        isFocused = _ref3.isFocused,
        isSelected = _ref3.isSelected;
    var color = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(data.color);
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled ? '#ccc' : isSelected ? chroma_js__WEBPACK_IMPORTED_MODULE_5___default.a.contrast(color, 'white') > 2 ? 'white' : 'black' : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default'
    });
  },
  multiValue: function multiValue(styles, _ref4) {
    var data = _ref4.data;
    var color = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(data.color);
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: color.alpha(0.1).css()
    });
  },
  multiValueLabel: function multiValueLabel(styles, _ref5) {
    var data = _ref5.data;
    return _objectSpread(_objectSpread({}, styles), {}, {
      color: data.color
    });
  },
  multiValueRemove: function multiValueRemove(styles, _ref6) {
    var data = _ref6.data;
    return _objectSpread(_objectSpread({}, styles), {}, {
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white'
      }
    });
  }
};
var styles = {
  multiValue: function multiValue(base, state) {
    return state.data.isFixed ? _objectSpread(_objectSpread({}, base), {}, {
      backgroundColor: 'gray'
    }) : base;
  },
  multiValueLabel: function multiValueLabel(base, state) {
    return state.data.isFixed ? _objectSpread(_objectSpread({}, base), {}, {
      fontWeight: 'bold',
      color: 'white',
      paddingRight: 6
    }) : base;
  },
  multiValueRemove: function multiValueRemove(base, state) {
    return state.data.isFixed ? _objectSpread(_objectSpread({}, base), {}, {
      display: 'none'
    }) : base;
  }
};

var orderOptions = function orderOptions(values) {
  return values.filter(function (v) {
    return v.isFixed;
  }).concat(values.filter(function (v) {
    return !v.isFixed;
  }));
};

var FormsSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(FormsSelect, _React$Component);

  var _super = _createSuper(FormsSelect);

  function FormsSelect(props) {
    var _this;

    _classCallCheck(this, FormsSelect);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.state = {
      value: orderOptions([colourOptions[3], colourOptions[6], colourOptions[8]])
    };
    return _this;
  }

  _createClass(FormsSelect, [{
    key: "onChange",
    value: function onChange(value, _ref7) {
      var action = _ref7.action,
          removedValue = _ref7.removedValue;

      switch (action) {
        case 'remove-value':
        case 'pop-value':
          if (removedValue.isFixed) {
            return;
          }

          break;

        case 'clear':
          value = colourOptions.filter(function (v) {
            return v.isFixed;
          });
          break;

        default:
          break;
      }

      value = orderOptions(value);
      this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Single Select")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        defaultValue: colourOptions[0],
        name: "color",
        options: colourOptions
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Multi Select")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        defaultValue: [colourOptions[2], colourOptions[3]],
        isMulti: true,
        name: "colors",
        options: colourOptions,
        className: "basic-multi-select",
        classNamePrefix: "select"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "With Placeholder")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        name: "color",
        options: colourOptions,
        placeholder: "Which is your favourite colour?"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Tagging Support")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_lib_Creatable__WEBPACK_IMPORTED_MODULE_3___default.a, {
        isMulti: true,
        options: colourOptions,
        pageSize: 3
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Clear Selection")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        defaultValue: colourOptions[0],
        name: "color",
        options: colourOptions,
        isClearable: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Searchable")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        defaultValue: [colourOptions[2], colourOptions[3]],
        isMulti: true,
        name: "colors",
        options: colourOptions,
        className: "basic-multi-select",
        classNamePrefix: "select",
        isSearchable: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Disabled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        defaultValue: colourOptions[0],
        name: "color",
        options: colourOptions,
        isDisabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "RTL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        defaultValue: [colourOptions[2], colourOptions[3]],
        isMulti: true,
        name: "colors",
        options: colourOptions,
        className: "basic-multi-select",
        classNamePrefix: "select",
        isRtl: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Animation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        closeMenuOnSelect: false,
        components: react_select_lib_animated__WEBPACK_IMPORTED_MODULE_4___default()(),
        defaultValue: [colourOptions[4], colourOptions[5]],
        isMulti: true,
        options: colourOptions
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Custom Style Single")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        defaultValue: colourOptions[2],
        label: "Single select",
        options: colourOptions,
        styles: colourStylesSingle
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Custom Style Multi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        closeMenuOnSelect: false,
        defaultValue: [colourOptions[0], colourOptions[1]],
        isMulti: true,
        options: colourOptions,
        styles: colourStylesMulti
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 6,
        xl: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Custom Style Multi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.state.value,
        isMulti: true,
        styles: styles,
        isClearable: this.state.value.some(function (v) {
          return !v.isFixed;
        }),
        name: "colors",
        className: "basic-multi-select",
        classNamePrefix: "select",
        onChange: this.onChange,
        options: colourOptions
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, " Basic Listbox ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_box_BasicExample__WEBPACK_IMPORTED_MODULE_7__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, " Option Groups ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_box_OptGroupExample__WEBPACK_IMPORTED_MODULE_8__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, " Filter/Searchable ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_box_FilterExample__WEBPACK_IMPORTED_MODULE_9__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, " Align Actions to Top ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_box_AlignTopExample__WEBPACK_IMPORTED_MODULE_10__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, " Preserve Select Order ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_box_PreserveSelectOrderExample__WEBPACK_IMPORTED_MODULE_12__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, " Allow Duplicates Items ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_box_AllowDuplicatesExample__WEBPACK_IMPORTED_MODULE_13__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, " Restrict Available ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_box_RestrictAvailableExample__WEBPACK_IMPORTED_MODULE_14__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, " Disabled ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_box_DisabledExample__WEBPACK_IMPORTED_MODULE_11__["default"], null))))));
    }
  }]);

  return FormsSelect;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FormsSelect);

/***/ }),

/***/ "./resources/js/Demo/Forms/list-box/AlignTopExample.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Forms/list-box/AlignTopExample.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js");
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__);
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



var options = [{
  label: 'Earth',
  options: [{
    value: 'luna',
    label: 'Moon'
  }]
}, {
  label: 'Mars',
  options: [{
    value: 'phobos',
    label: 'Phobos'
  }, {
    value: 'deimos',
    label: 'Deimos'
  }]
}, {
  label: 'Jupiter',
  options: [{
    value: 'io',
    label: 'Io'
  }, {
    value: 'europa',
    label: 'Europa'
  }, {
    value: 'ganymede',
    label: 'Ganymede'
  }, {
    value: 'callisto',
    label: 'Callisto'
  }]
}];

var AlignTopExample = /*#__PURE__*/function (_React$Component) {
  _inherits(AlignTopExample, _React$Component);

  var _super = _createSuper(AlignTopExample);

  function AlignTopExample() {
    var _this;

    _classCallCheck(this, AlignTopExample);

    _this = _super.call(this);
    _this.state = {
      selected: ['luna', 'io']
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AlignTopExample, [{
    key: "onChange",
    value: function onChange(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
        alignActions: "top",
        canFilter: true,
        name: "moons",
        options: options,
        selected: selected,
        onChange: this.onChange
      });
    }
  }]);

  return AlignTopExample;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AlignTopExample);

/***/ }),

/***/ "./resources/js/Demo/Forms/list-box/AllowDuplicatesExample.js":
/*!********************************************************************!*\
  !*** ./resources/js/Demo/Forms/list-box/AllowDuplicatesExample.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js");
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__);
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



var options = [{
  label: 'Earth',
  options: [{
    value: 'luna',
    label: 'Moon'
  }]
}, {
  label: 'Mars',
  options: [{
    value: 'phobos',
    label: 'Phobos'
  }, {
    value: 'deimos',
    label: 'Deimos'
  }]
}, {
  label: 'Jupiter',
  options: [{
    value: 'io',
    label: 'Io'
  }, {
    value: 'europa',
    label: 'Europa'
  }, {
    value: 'ganymede',
    label: 'Ganymede'
  }, {
    value: 'callisto',
    label: 'Callisto'
  }]
}];

var AllowDuplicatesExample = /*#__PURE__*/function (_React$Component) {
  _inherits(AllowDuplicatesExample, _React$Component);

  var _super = _createSuper(AllowDuplicatesExample);

  function AllowDuplicatesExample() {
    var _this;

    _classCallCheck(this, AllowDuplicatesExample);

    _this = _super.call(this);
    _this.state = {
      selected: ['luna', 'io']
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AllowDuplicatesExample, [{
    key: "onChange",
    value: function onChange(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
        allowDuplicates: true,
        name: "moons",
        options: options,
        preserveSelectOrder: true,
        selected: selected,
        onChange: this.onChange
      });
    }
  }]);

  return AllowDuplicatesExample;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AllowDuplicatesExample);

/***/ }),

/***/ "./resources/js/Demo/Forms/list-box/BasicExample.js":
/*!**********************************************************!*\
  !*** ./resources/js/Demo/Forms/list-box/BasicExample.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js");
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__);
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



var options = [{
  value: 'luna',
  label: 'Moon'
}, {
  value: 'phobos',
  label: 'Phobos'
}, {
  value: 'deimos',
  label: 'Deimos'
}, {
  value: 'io',
  label: 'Io'
}, {
  value: 'europa',
  label: 'Europa'
}, {
  value: 'ganymede',
  label: 'Ganymede'
}, {
  value: 'callisto',
  label: 'Callisto'
}, {
  value: 'mimas',
  label: 'Mimas'
}, {
  value: 'enceladus',
  label: 'Enceladus'
}, {
  value: 'tethys',
  label: 'Tethys'
}, {
  value: 'rhea',
  label: 'Rhea'
}, {
  value: 'titan',
  label: 'Titan'
}, {
  value: 'iapetus',
  label: 'Iapetus'
}];

var BasicExample = /*#__PURE__*/function (_React$Component) {
  _inherits(BasicExample, _React$Component);

  var _super = _createSuper(BasicExample);

  function BasicExample() {
    var _this;

    _classCallCheck(this, BasicExample);

    _this = _super.call(this);
    _this.state = {
      selected: ['phobos', 'titan']
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BasicExample, [{
    key: "onChange",
    value: function onChange(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
        options: options,
        selected: selected,
        onChange: this.onChange
      });
    }
  }]);

  return BasicExample;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BasicExample);

/***/ }),

/***/ "./resources/js/Demo/Forms/list-box/DisabledExample.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Forms/list-box/DisabledExample.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js");
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__);
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



var options = [{
  label: 'Earth',
  options: [{
    value: 'luna',
    label: 'Moon'
  }]
}, {
  label: 'Mars',
  options: [{
    value: 'phobos',
    label: 'Phobos'
  }, {
    value: 'deimos',
    label: 'Deimos'
  }]
}, {
  label: 'Jupiter',
  options: [{
    value: 'io',
    label: 'Io'
  }, {
    value: 'europa',
    label: 'Europa'
  }, {
    value: 'ganymede',
    label: 'Ganymede'
  }, {
    value: 'callisto',
    label: 'Callisto'
  }]
}];

var DisabledExample = /*#__PURE__*/function (_React$Component) {
  _inherits(DisabledExample, _React$Component);

  var _super = _createSuper(DisabledExample);

  function DisabledExample() {
    var _this;

    _classCallCheck(this, DisabledExample);

    _this = _super.call(this);
    _this.state = {
      selected: ['luna', 'io']
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DisabledExample, [{
    key: "onChange",
    value: function onChange(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
        canFilter: true,
        disabled: true,
        name: "moons",
        options: options,
        selected: selected,
        onChange: this.onChange
      });
    }
  }]);

  return DisabledExample;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DisabledExample);

/***/ }),

/***/ "./resources/js/Demo/Forms/list-box/FilterExample.js":
/*!***********************************************************!*\
  !*** ./resources/js/Demo/Forms/list-box/FilterExample.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js");
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__);
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



var options = [{
  label: 'Earth',
  options: [{
    value: 'luna',
    label: 'Moon'
  }]
}, {
  label: 'Mars',
  options: [{
    value: 'phobos',
    label: 'Phobos'
  }, {
    value: 'deimos',
    label: 'Deimos'
  }]
}, {
  label: 'Jupiter',
  options: [{
    value: 'io',
    label: 'Io'
  }, {
    value: 'europa',
    label: 'Europa'
  }, {
    value: 'ganymede',
    label: 'Ganymede'
  }, {
    value: 'callisto',
    label: 'Callisto'
  }]
}];

var FilterExample = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterExample, _React$Component);

  var _super = _createSuper(FilterExample);

  function FilterExample() {
    var _this;

    _classCallCheck(this, FilterExample);

    _this = _super.call(this);
    _this.state = {
      selected: ['luna', 'io']
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterExample, [{
    key: "onChange",
    value: function onChange(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
        canFilter: true,
        name: "moons",
        options: options,
        selected: selected,
        onChange: this.onChange
      });
    }
  }]);

  return FilterExample;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilterExample);

/***/ }),

/***/ "./resources/js/Demo/Forms/list-box/OptGroupExample.js":
/*!*************************************************************!*\
  !*** ./resources/js/Demo/Forms/list-box/OptGroupExample.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js");
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__);
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



var options = [{
  label: 'Earth',
  options: [{
    value: 'luna',
    label: 'Moon'
  }]
}, {
  label: 'Mars',
  options: [{
    value: 'phobos',
    label: 'Phobos'
  }, {
    value: 'deimos',
    label: 'Deimos'
  }]
}, {
  label: 'Jupiter',
  options: [{
    value: 'io',
    label: 'Io'
  }, {
    value: 'europa',
    label: 'Europa'
  }, {
    value: 'ganymede',
    label: 'Ganymede'
  }, {
    value: 'callisto',
    label: 'Callisto'
  }]
}];

var OptGroupExample = /*#__PURE__*/function (_React$Component) {
  _inherits(OptGroupExample, _React$Component);

  var _super = _createSuper(OptGroupExample);

  function OptGroupExample() {
    var _this;

    _classCallCheck(this, OptGroupExample);

    _this = _super.call(this);
    _this.state = {
      selected: ['luna', 'io']
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OptGroupExample, [{
    key: "onChange",
    value: function onChange(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
        name: "moons",
        options: options,
        selected: selected,
        onChange: this.onChange
      });
    }
  }]);

  return OptGroupExample;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OptGroupExample);

/***/ }),

/***/ "./resources/js/Demo/Forms/list-box/PreserveSelectOrderExample.js":
/*!************************************************************************!*\
  !*** ./resources/js/Demo/Forms/list-box/PreserveSelectOrderExample.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js");
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1__);
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



var options = [{
  label: 'Earth',
  options: [{
    value: 'luna',
    label: 'Moon'
  }]
}, {
  label: 'Mars',
  options: [{
    value: 'phobos',
    label: 'Phobos'
  }, {
    value: 'deimos',
    label: 'Deimos'
  }]
}, {
  label: 'Jupiter',
  options: [{
    value: 'io',
    label: 'Io'
  }, {
    value: 'europa',
    label: 'Europa'
  }, {
    value: 'ganymede',
    label: 'Ganymede'
  }, {
    value: 'callisto',
    label: 'Callisto'
  }]
}];

var PreserveSelectOrderExample = /*#__PURE__*/function (_React$Component) {
  _inherits(PreserveSelectOrderExample, _React$Component);

  var _super = _createSuper(PreserveSelectOrderExample);

  function PreserveSelectOrderExample() {
    var _this;

    _classCallCheck(this, PreserveSelectOrderExample);

    _this = _super.call(this);
    _this.state = {
      selected: ['io', 'luna', 'europa']
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PreserveSelectOrderExample, [{
    key: "onChange",
    value: function onChange(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dual_listbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
        name: "moons",
        options: options,
        preserveSelectOrder: true,
        selected: selected,
        showOrderButtons: true,
        onChange: this.onChange
      });
    }
  }]);

  return PreserveSelectOrderExample;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PreserveSelectOrderExample);

/***/ }),

/***/ "./resources/js/Demo/Forms/list-box/RestrictAvailableExample.js":
/*!**********************************************************************!*\
  !*** ./resources/js/Demo/Forms/list-box/RestrictAvailableExample.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js");
/* harmony import */ var react_dual_listbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dual_listbox__WEBPACK_IMPORTED_MODULE_2__);
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




var options = [{
  value: 'luna',
  label: 'Moon'
}, {
  value: 'phobos',
  label: 'Phobos'
}, {
  value: 'deimos',
  label: 'Deimos'
}, {
  value: 'io',
  label: 'Io'
}, {
  value: 'europa',
  label: 'Europa'
}, {
  value: 'ganymede',
  label: 'Ganymede'
}, {
  value: 'callisto',
  label: 'Callisto'
}, {
  value: 'mimas',
  label: 'Mimas'
}, {
  value: 'enceladus',
  label: 'Enceladus'
}, {
  value: 'tethys',
  label: 'Tethys'
}, {
  value: 'rhea',
  label: 'Rhea'
}, {
  value: 'titan',
  label: 'Titan'
}, {
  value: 'iapetus',
  label: 'Iapetus'
}];
var planets = {
  earth: {
    name: 'Earth',
    moons: ['luna']
  },
  mars: {
    name: 'Mars',
    moons: ['phobos', 'deimos']
  },
  jupiter: {
    name: 'Jupiter',
    moons: ['io', 'europa', 'ganymede', 'callisto']
  },
  saturn: {
    name: 'Saturn',
    moons: ['mimas', 'enceladus', 'tehys', 'rhea', 'titan', 'iapetus']
  }
};

var RestrictAvailableExample = /*#__PURE__*/function (_React$Component) {
  _inherits(RestrictAvailableExample, _React$Component);

  var _super = _createSuper(RestrictAvailableExample);

  function RestrictAvailableExample() {
    var _this;

    _classCallCheck(this, RestrictAvailableExample);

    _this = _super.call(this);
    _this.state = {
      planet: 'jupiter',
      selected: ['phobos', 'titan']
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onPlanetChange = _this.onPlanetChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RestrictAvailableExample, [{
    key: "onChange",
    value: function onChange(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "onPlanetChange",
    value: function onPlanetChange(event) {
      var planet = event.currentTarget.value;
      this.setState({
        planet: planet
      });
    }
  }, {
    key: "renderPlanets",
    value: function renderPlanets() {
      var _this2 = this;

      var selectedPlanet = this.state.planet;
      return Object.keys(planets).map(function (planet) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
          key: planet,
          className: "d-inline"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "radio d-inline radio-primary"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
          type: "radio",
          name: "planets",
          id: planet,
          value: planet,
          defaultChecked: planet === selectedPlanet,
          onChange: _this2.onPlanetChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
          htmlFor: planet,
          className: "cr"
        }, planets[planet].name)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          selected = _this$state.selected,
          planet = _this$state.planet;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "restrict-available-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "moons mb-3"
      }, this.renderPlanets()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dual_listbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
        available: planets[planet].moons,
        options: options,
        selected: selected,
        onChange: this.onChange
      }));
    }
  }]);

  return RestrictAvailableExample;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RestrictAvailableExample);

/***/ })

}]);