(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* inspired by: https://css-tricks.com/responsive-data-tables/ */\n.responsiveTable {\n  width: 100%;\n}\n\n.responsiveTable td .tdBefore {\n  display: none;\n}\n\n@media screen and (max-width: 40em) {\n  /*\n    Force table elements to not behave like tables anymore\n    Hide table headers (but not display: none;, for accessibility)\n  */\n\n  .responsiveTable table,\n  .responsiveTable thead,\n  .responsiveTable tbody,\n  .responsiveTable th,\n  .responsiveTable td,\n  .responsiveTable tr {\n    display: block;\n  }\n\n  .responsiveTable thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n    border-bottom: 2px solid #333;\n  }\n\n  .responsiveTable tbody tr {\n    border: 1px solid #000;\n    padding: .25em;\n  }\n\n  .responsiveTable td.pivoted {\n    /* Behave like a \"row\" */\n    border: none !important;\n    position: relative;\n    padding-left: calc(50% + 10px) !important;\n    text-align: left !important;\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n  }\n\n  .responsiveTable td .tdBefore {\n    /* Now like a table header */\n    position: absolute;\n    display: block;\n\n    /* Top/left values mimic padding */\n    left: 1rem;\n    width: calc(50% - 20px);\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n    text-align: left !important;\n    font-weight: 600;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--6-1!../../postcss-loader/src??ref--6-2!./SuperResponsiveTableStyle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/Back-Office/Employee/Tab/AddHoliday.js":
/*!*************************************************************!*\
  !*** ./resources/js/Back-Office/Employee/Tab/AddHoliday.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _employee_Holiday_Outstanding_entitlement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../employee/Holiday/Outstanding_entitlement */ "./resources/js/employee/Holiday/Outstanding_entitlement.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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













var id = '';
var baseurl = window.location.origin;

function successDesktopPNotify() {
  var edit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var message = edit != '' ? "Holiday edited successfully" : "Holiday added successfully";
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_7__["default"].success({
    title: 'Success',
    text: message,
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {});
}

var AddHoliday = /*#__PURE__*/function (_React$Component) {
  _inherits(AddHoliday, _React$Component);

  var _super = _createSuper(AddHoliday);

  function AddHoliday(props) {
    var _this;

    _classCallCheck(this, AddHoliday);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.setState({
        apiload: true
      });

      _this.setState({
        buttonName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "spinner-grow spinner-grow-sm mr-1",
          role: "status"
        }), "Loading")
      });

      var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          auth_token = _ref.auth_token;

      var Id = '';

      if (_this.props.match.params.id) {
        Id = '/' + _this.props.match.params.id;
      }

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(baseurl + '/api/holiday' + Id, _this.state, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          // console.log(res.data.data);
          _this.setState({
            apiload: false
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Add'
          });

          if (res.data.updated) {
            successDesktopPNotify('edit');

            _this.props.history.push({
              pathname: '/employee-Detail/Holiday',
              state: {
                userId: _this.state.user_id
              }
            });

            _this.setState({
              buttonName: 'Edit'
            });
          } else {
            successDesktopPNotify();

            _this.props.history.push({
              pathname: '/employee-Detail/Holiday',
              state: {
                userId: _this.state.user_id
              }
            });
          }
        } else {
          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_7__["default"].error({
            title: "Alert",
            text: res.data.message
          });

          _this.setState({
            apiload: false
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Add'
          });
        }
      })["catch"](function (err) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_7__["default"].error({
          title: "System Error",
          text: err
        });

        _this.setState({
          formSubmitting: false
        });

        _this.setState({
          buttonName: 'add'
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getData", function (id) {
      _this.setState({
        formSubmitting: true
      });

      _this.setState({
        apiload: true
      });

      _this.setState({
        buttonName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "spinner-grow spinner-grow-sm mr-1",
          role: "status"
        }), "Loading")
      });

      var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          auth_token = _ref2.auth_token; //const data = new FormData()
      //data.append('name', this.state.name);


      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(baseurl + '/api/holiday/' + id, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          _this.setState(res.data.Holidays);

          _this.setState({
            dates: res.data.Holidays_dates
          });

          _this.Outstanding_entitlement(res.data.Holidays.user_id);

          _this.setState({
            apiload: false
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Edit'
          });
        } else {
          var errorMassage = '';

          if (res.data.errors) {
            errorMassage = res.data.errors.name;
          } else {
            errorMassage = res.data.email;
          }

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Save'
          });
        }
      })["catch"](function (err) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_7__["default"].error({
          title: "System Error",
          text: err
        });

        _this.setState({
          formSubmitting: false
        });

        _this.setState({
          buttonName: 'Add'
        });

        _this.setState({
          selectedFile: null
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fromDateChange", function (e) {
      var today = new Date(e);
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      var today = dd + '/' + mm + '/' + yyyy;

      _this.setState({
        from_date: e
      });

      _this.setState({
        from_date_text: today
      });

      _this.setState({
        dateChangedCheck: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toDateChange", function (e) {
      var dates = []; //to avoid modifying the original date

      _this.setState({
        to_date: e
      });

      var theDate = new Date(_this.state.from_date);
      var dys = 0;

      while (theDate <= e) {
        var dt = new Date(theDate);
        var dy = dt.getDay();

        if (dy == 0 || dy == 6) {
          dys = dys + 1;

          var getdt = _this.getDate(theDate);

          console.log(getdt);
        } else {
          // sunday 0  saturday 6 
          var array_v = {
            dates: _this.getDate(new Date(theDate)),
            times: ''
          };
          dates = [].concat(_toConsumableArray(dates), [array_v]);
        }

        theDate.setDate(theDate.getDate() + 1);
      }

      var timediff = e - _this.state.from_date;
      var second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24,
          week = day * 7;
      var totalDays = Math.floor(timediff / day) + 1;
      totalDays = totalDays - dys;

      _this.setState({
        dates: dates,
        time_off: totalDays
      });

      var today = new Date(e);
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      var today = dd + '/' + mm + '/' + yyyy;

      _this.setState({
        to_date_text: today
      });

      _this.setState({
        dateChangedCheck: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDate", function (e) {
      var today = new Date(e);
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      return dd + '/' + mm + '/' + yyyy;
    });

    _defineProperty(_assertThisInitialized(_this), "holidaytime", function (e) {
      var changetime = _this.state.dates[e.target.name];
      changetime['times'] = e.target.value;

      _this.setState({
        dates: _this.state.dates
      });
    });

    _defineProperty(_assertThisInitialized(_this), "noteChange", function (e) {
      var id = e.target.name;
      id = id.match(/\d+/)[0];
      var changetime = _this.state.dates[id];
      changetime['notes'] = e.target.value;

      _this.setState({
        dates: _this.state.dates
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangedApproved", function (e) {
      var id = e.target.name;
      id = id.match(/\d+/)[0];
      var changeapprove = _this.state.dates[id];
      changeapprove['is_approved'] = e.target.value;

      if (e.target.value == 'no') {
        changeapprove['add_note'] = 1;
      } else {
        changeapprove['add_note'] = 0;
      }

      _this.setState({
        dates: _this.state.dates
      });
    });

    _defineProperty(_assertThisInitialized(_this), "Changeheading", function (e) {
      _this.setState({
        heading: e.target.value
      });

      var dates = _this.state.dates;
      dates.map(function (itm, inx) {
        itm.is_approved = '';

        if (e.target.value == 1) {
          itm.times = 'Full day';
        } else if (e.target.value == 2) {
          itm.times = 'Morning only';
        } else if (e.target.value == 3) {
          itm.times = 'Afternoon only';
        }
      });

      _this.setState({
        dates: dates
      });
    });

    _defineProperty(_assertThisInitialized(_this), "approvedChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      var dates = _this.state.dates;
      dates.map(function (itm, inx) {
        itm.is_approved = e.target.value;
      });

      _this.setState({
        dates: dates,
        no_approved_notes: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "Outstanding_entitlement", function (user_id) {
      var _ref3 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          auth_token = _ref3.auth_token;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(baseurl + '/api/outstanding_entitlement', {
        user_id: user_id
      }, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          _this.setState({
            outstanding_entitlement: res.data.result
          });
        } else {
          var errorMassage = '';

          if (res.data.errors) {
            errorMassage = res.data.errors.name;
          } else {
            errorMassage = res.data.email;
          }

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Save'
          });
        }
      })["catch"](function (err) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_7__["default"].error({
          title: "System Error",
          text: err
        });

        _this.setState({
          formSubmitting: false
        });

        _this.setState({
          buttonName: 'Add'
        });

        _this.setState({
          selectedFile: null
        });
      });
    });

    _this.state = {
      _method: '',
      user_id: '',
      from_date: '',
      from_date_text: '',
      to_date: '',
      to_date_text: '',
      buttonName: 'Add',
      apiload: false,
      totalDays: '',
      dates: [],
      heading: '',
      time_off: '',
      notes: '',
      dateChangedCheck: 0,
      day_off_start: '',
      day_off_end: '',
      is_approved: '',
      no_approved_notes: '',
      outstanding_entitlement: []
    };

    if (_this.props.location.state) {
      id = _this.props.location.state.userId;
    }

    return _this;
  }

  _createClass(AddHoliday, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.location.state) {
        this.setState({
          user_id: this.props.location.state.userId
        });
      }

      if (this.props.match.params.id) {
        this.getData(this.props.match.params.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          padding: '0px 10px',
          borderLeft: 'solid 2px #04a9f5'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: 12,
        xl: 12,
        style: {
          paddingTop: '15px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, this.props.match.params.id ? 'Edit' : 'Add', " Holiday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "invoice-lable text-right",
        style: {
          position: 'absolute',
          top: '10px',
          right: '5px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: {
          pathname: '/employee-Detail/Holiday',
          state: {
            userId: this.state.user_id
          }
        },
        className: "shadow-5 btn-sm btn-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "fa fa-mail-reply"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "details-tab",
        style: {
          borderTop: 'solid 1px #ebeff1',
          padding: '10px 20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: 'absolute',
          zIndex: '99999',
          background: 'rgba(255, 255, 255, 0.57)',
          top: '15%',
          left: '50%',
          display: this.state.apiload ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "loader"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_employee_Holiday_Outstanding_entitlement__WEBPACK_IMPORTED_MODULE_11__["default"], {
        user_id: this.state.user_id,
        entitlement: this.state.outstanding_entitlement
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationForm"], {
        autoComplete: "off",
        id: "formid",
        onSubmit: this.handleSubmit,
        onErrorSubmit: this.handleErrorSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        xm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "region"
      }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, {
        closeOnSelect: true,
        onChange: this.fromDateChange,
        value: this.state.from_date,
        dateFormat: "D/M/Y",
        timeFormat: false,
        maxDate: new Date(),
        inputProps: {
          required: 'required',
          name: "from_date",
          placeholder: 'Select Date',
          autoComplete: 'off'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '0px',
          'marginTop': '10px'
        },
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioGroup, {
        name: "day_off_start",
        required: true,
        valueSelected: this.state.day_off_start,
        inline: true,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: 'start_full',
        label: "Full day",
        value: "Full day"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: 'start_Morning',
        label: "Morning only",
        value: "Morning only"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: 'start_Afternoon',
        label: "Afternoon only",
        value: "Afternoon only"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "1",
        style: {
          paddingTop: '37px',
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "region"
      }, "To")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        xm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "region"
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, {
        closeOnSelect: true,
        onChange: this.toDateChange,
        value: this.state.to_date,
        dateFormat: "D/M/Y",
        timeFormat: false,
        maxDate: new Date(),
        inputProps: {
          required: 'required',
          name: "to_date",
          placeholder: 'Select Date',
          autoComplete: 'off'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '0px',
          'marginTop': '10px'
        },
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioGroup, {
        name: "day_off_end",
        required: true,
        valueSelected: this.state.day_off_end,
        inline: true,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: 'end_full',
        label: "Full day",
        value: "Full day"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: 'end_Morning',
        label: "Morning only",
        value: "Morning only"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: 'end_Afternoon',
        label: "Afternoon only",
        value: "Afternoon only"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "time_off"
      }, "Time Off"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
        name: "time_off",
        type: "number",
        id: "time_off",
        readonly: true,
        placeholder: "Time Off",
        required: true,
        value: this.state.time_off,
        autoComplete: "off"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          "float": 'right',
          marginTop: '-31px',
          paddingRight: '10px'
        }
      }, "Day")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "first_name"
      }, "Notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
        name: "notes",
        id: "notes",
        placeholder: "Notes",
        multiline: true,
        required: true,
        value: this.state.notes,
        onChange: this.handleChange,
        rows: "3",
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '0px'
        },
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        "class": "form-check-label",
        "for": "approved_yes",
        style: {
          marginRight: '10px',
          "float": 'left'
        }
      }, "Approved: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioGroup, {
        name: "is_approved",
        valueSelected: this.state.is_approved,
        inline: true,
        onChange: this.approvedChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: "approved_yes",
        label: "Yes",
        value: "yes"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: "approved_no",
        label: "No",
        value: "no"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "8"
      }, this.state.is_approved == 'no' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "first_name"
      }, "Notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
        name: "no_approved_notes",
        id: "notes",
        placeholder: "Notes",
        multiline: true,
        required: true,
        value: this.state.no_approved_notes,
        onChange: this.handleChange,
        rows: "3",
        autoComplete: "off"
      })) : '', "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        sm: 12,
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: this.state.formSubmitting,
        type: "submit"
      }, " ", this.state.buttonName))))));
    }
  }]);

  return AddHoliday;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var SelectTime = /*#__PURE__*/function (_React$Component2) {
  _inherits(SelectTime, _React$Component2);

  var _super2 = _createSuper(SelectTime);

  function SelectTime() {
    var _this2;

    _classCallCheck(this, SelectTime);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      display: 'none',
      times: ''
    });

    return _this2;
  }

  _createClass(SelectTime, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var display = this.props.fromdate.length > 0 ? 'block' : 'none';
      var is_approved = '';
      var approved = '';
      var addNote = '';
      var dateList = this.props.fromdate.length > 0 ? this.props.fromdate.map(function (item, inx) {
        if (_this3.props.checkedit == 'PUT') {
          is_approved = 'Approve';

          if (item.is_approved == 'no') {
            item.add_note = 1;
          }

          approved = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              padding: '0px'
            },
            className: "custom-controls-stacked radio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioGroup, {
            name: inx + 'a',
            valueSelected: item.is_approved,
            inline: true,
            onChange: _this3.props.handleChangeApproved
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
            id: inx + 'a_yes',
            label: "Yes",
            value: "yes"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
            id: inx + 'a_no',
            label: "No",
            value: "no"
          }))));
          addNote = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.add_note == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
            name: inx + 'notes',
            id: "notes",
            placeholder: "Notes",
            multiline: true,
            required: true,
            value: item.notes,
            onChange: _this3.props.noteChange,
            rows: "3",
            autoComplete: "off"
          }) : '');
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: inx
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.dates), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            padding: '0px'
          },
          className: "custom-controls-stacked radio"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioGroup, {
          name: inx,
          required: true,
          valueSelected: item.times,
          inline: true,
          onChange: _this3.props.handleChange
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
          id: inx + '_full',
          label: "Full day",
          value: "Full day"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
          id: inx + '_Morning',
          label: "Morning only",
          value: "Morning only"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
          id: inx + '_Afternoon',
          label: "Afternoon only",
          value: "Afternoon only"
        })))), approved, addNote);
      }) : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        style: {
          display: display
        },
        responsive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '0px'
        },
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioGroup, {
        name: "date_time",
        valueSelected: this.props.heading,
        inline: true,
        onChange: this.props.Changeheading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: 'heading_1',
        label: "Full day",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: 'heading_2',
        label: "Morning only",
        value: "2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Radio"].RadioItem, {
        id: 'heading_3',
        label: "Afternoon only",
        value: "3"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, is_approved)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, dateList)));
    }
  }]);

  return SelectTime;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var style = {
  rowline: {
    borderBottom: 'solid 1px #f8f9fa',
    marginBottom: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AddHoliday);

/***/ }),

/***/ "./resources/js/employee/Holiday/Outstanding_entitlement.js":
/*!******************************************************************!*\
  !*** ./resources/js/employee/Holiday/Outstanding_entitlement.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-super-responsive-table */ "./node_modules/react-super-responsive-table/dist/index.js");
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-super-responsive-table/dist/SuperResponsiveTableStyle.css */ "./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css");
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_7__);
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









var baseurl = window.location.origin;

var Outstanding_entitlement = /*#__PURE__*/function (_React$Component) {
  _inherits(Outstanding_entitlement, _React$Component);

  var _super = _createSuper(Outstanding_entitlement);

  function Outstanding_entitlement(props) {
    var _this;

    _classCallCheck(this, Outstanding_entitlement);

    _this = _super.call(this, props);
    _this.state = {
      user_id: ''
    };
    return _this;
  }

  _createClass(Outstanding_entitlement, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        xm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Thead"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Tr"], {
        style: {
          background: '#3f4d67',
          color: '#f5f3f3'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Th"], {
        style: {
          padding: '10px'
        },
        width: "10%"
      }, "Holiday Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Th"], {
        width: "20%"
      }, "Paid Entitlement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Th"], {
        width: "35%"
      }, "Hols taken / requested"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Th"], {
        width: "35%"
      }, "Outstanding entitlement"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Tbody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Tr"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Td"], {
        valign: "top",
        style: {
          padding: '5px 10px'
        }
      }, "Apr 01 and ends on Mar 31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Td"], {
        style: {
          padding: '5px 10px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "f/t entitlement:"), this.props.entitlement.entitlement_day_period ? this.props.entitlement.entitlement_day_period : '', " days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "p/t %:"), this.props.entitlement.part_time_percentage ? this.props.entitlement.part_time_percentage : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "View entitlement summary")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Holidays:"), "Not included")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Td"], {
        style: {
          padding: '5px 10px'
        },
        valign: "top"
      }, this.props.entitlement.days_taken ? this.props.entitlement.days_taken : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_6__["Td"], {
        style: {
          padding: '5px 10px'
        },
        valign: "top"
      }, this.props.entitlement.outstanding_entitlement ? this.props.entitlement.outstanding_entitlement : '')))))));
    }
  }]);

  return Outstanding_entitlement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var style = {
  rowline: {
    borderBottom: 'solid 2px #f8f9fa',
    marginBottom: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Outstanding_entitlement);

/***/ })

}]);