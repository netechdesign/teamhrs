(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./resources/js/App/components/AnimatedModal.js":
/*!******************************************************!*\
  !*** ./resources/js/App/components/AnimatedModal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_animated_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-animated-modal */ "./node_modules/react-animated-modal/build/index.js");
/* harmony import */ var react_animated_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_animated_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
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





var AnimatedModal = /*#__PURE__*/function (_React$Component) {
  _inherits(AnimatedModal, _React$Component);

  var _super = _createSuper(AnimatedModal);

  function AnimatedModal() {
    _classCallCheck(this, AnimatedModal);

    return _super.apply(this, arguments);
  }

  _createClass(AnimatedModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        visible: this.props.showModal,
        closemodal: this.props.modalClosed,
        type: this.props.animation
      }, this.props.children));
    }
  }]);

  return AnimatedModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimatedModal);

/***/ }),

/***/ "./resources/js/Back-Office/User/edit.js":
/*!***********************************************!*\
  !*** ./resources/js/Back-Office/User/edit.js ***!
  \***********************************************/
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _App_components_AnimatedModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../App/components/AnimatedModal */ "./resources/js/App/components/AnimatedModal.js");
/* harmony import */ var _HttpFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../HttpFunctions */ "./resources/js/HttpFunctions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
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


















function successDesktopPNotify() {
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_11__["default"].success({
    title: 'Success',
    text: "User updated successfully",
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {});
}

var Trrow = function Trrow(property) {
  var pageName = property.rows.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      key: index
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      name: value.name,
      label: value.page_name,
      id: property.index + '_' + value.name,
      value: value.Ischeck,
      onChange: property.onchildChange
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    name: property.parent,
    label: property.parent.toUpperCase(),
    onChange: property.onparentChange,
    id: property.index
  })), pageName);
};

var Dropdown = function Dropdown(property) {
  var pageName = property.rows.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      key: index
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      name: value.name,
      label: value.page_name,
      id: property.index + '_' + value.name,
      value: value.Ischeck,
      onChange: property.onchildChange
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    name: property.parent,
    label: property.parent.toUpperCase(),
    onChange: property.onparentChange,
    id: property.index
  })), pageName);
};

var baseurl = window.location.origin;

var edit = /*#__PURE__*/function (_React$Component) {
  _inherits(edit, _React$Component);

  var _super = _createSuper(edit);

  function edit() {
    var _this;

    _classCallCheck(this, edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      name: "",
      id: _this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role_id: '',
      role_name: '',
      role_list: [],
      chkCustom: false,
      permission: [],
      pageArray: [],
      visible: true,
      formSubmitting: false,
      buttonName: 'Save'
    });

    _defineProperty(_assertThisInitialized(_this), "RoleList", function (e) {
      var id = _this.state.id;
      document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';

      var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          auth_token = _ref.auth_token;

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(baseurl + '/api/roledropdown', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          _this.setState({
            role_list: res.data.data
          });

          document.getElementById("requestLoder").innerHTML = '';
          /*
          this.state.permission.map((val,index)=>{
                console.log(val[Object.keys(val)[0]]);
          })
          */
        } else {}
      })["catch"](function (err) {
        console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "chageParent", function (e, value) {
      // e.target.checked=true;
      var checkValue = e.target.checked;
      var parentname = e.target.name;
      var parentIndex = e.target.id;

      var permission = _toConsumableArray(_this.state.permission);

      if (permission[parentIndex][parentname]) {
        permission[parentIndex][parentname].map(function (vl, ind) {
          vl.Ischeck = checkValue;
        });
      }

      _this.setState({
        permission: permission
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCheckboxChange", function (e, value) {
      var ckname = e.target.name;
      var parentIndex = e.target.id.split("_")[0];
      var checkValue = e.target.checked;

      var permission = _toConsumableArray(_this.state.permission);

      var parentname = Object.keys(permission[parentIndex]);

      if (permission[parentIndex][parentname]) {
        permission[parentIndex][parentname].filter(function (vl, i) {
          if (vl.name == ckname) {
            vl.Ischeck = checkValue;
          }
        });

        _this.setState({
          permission: permission
        });
      }
      /*    
      if(permission[parentIndex][parentname]){
           permission[parentIndex][parentname].map((vl,ind)=>{
               vl.Ischeck = checkValue;
           })
          }
          this.setState({permission})
          */

    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      var str = e.target.value;
      str = str.replace(/\s/g, '-');

      _this.setState({
        slug: str
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e, formData, inputs) {
      e.preventDefault();

      _this.setState({
        formSubmitting: true
      });

      _this.setState({
        buttonName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "spinner-grow spinner-grow-sm mr-1",
          role: "status"
        }), "Loading")
      });

      var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          id = _ref2.id,
          auth_token = _ref2.auth_token;

      var data = new FormData();
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(baseurl + '/api/user/' + _this.state.id, {
        _method: 'PUT',
        name: _this.state.firstName,
        lastName: _this.state.lastName,
        email: _this.state.email,
        password: _this.state.password,
        roles: _this.state.role_id,
        permission: _this.state.permission
      }, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          // console.log(res.data.data);
          successDesktopPNotify();
          var history = _this.props.history;
          history.push('/user');
        } else {
          if (res.data.errors) {
            res.data.message = res.data.errors.name;
          }

          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_11__["default"].error({
            title: "System Error",
            text: res.data.errors.name
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Edit'
          });
        }
      })["catch"](function (err) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_11__["default"].error({
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
      }); //  this.props.history.push('/role');
    });

    _defineProperty(_assertThisInitialized(_this), "handleErrorSubmit", function (e, formData, errorInputs) {//console.log(errorInputs);
    });

    _defineProperty(_assertThisInitialized(_this), "defaultPemission", function (e) {
      document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';
      Object(_HttpFunctions__WEBPACK_IMPORTED_MODULE_9__["Pemissionlist"])().then(function (res) {
        if (res.data.success) {
          //console.log(res.data.data);
          _this.setState({
            permission: res.data.data
          });

          document.getElementById("requestLoder").innerHTML = '';
          /*
          this.state.permission.map((val,index)=>{
                console.log(val[Object.keys(val)[0]]);
          })
          */
        } else {}
      })["catch"](function (err) {
        console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "PemissionGet", function (e) {
      var id = _this.state.id;
      document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="' + baseurl + '/images/ajax_loader_gray_512.gif"></img>';

      var _ref3 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          auth_token = _ref3.auth_token;

      var data = new FormData();
      data.append('name', _this.state.name);
      data.append('permission', _this.state.permission);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(baseurl + '/api/user/' + id + '/edit', {
        headers: {
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          var parmissions = res.data.data.parmissions;

          if (parmissions) {
            _this.setState({
              permission: parmissions
            });
          } else {
            _this.defaultPemission();
          }

          _this.setState({
            role_name: res.data.data.role_name,
            firstName: res.data.data.name,
            lastName: res.data.data.lastName,
            email: res.data.data.email,
            role_id: res.data.data.roles
          });

          document.getElementById("requestLoder").innerHTML = '';
          /*
          this.state.permission.map((val,index)=>{
                console.log(val[Object.keys(val)[0]]);
          })
          */
        } else {}
      })["catch"](function (err) {
        console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "RoleChange", function (e) {
      _this.setState({
        role_id: e.value
      });

      var curPermission = _this.state.role_list.filter(function (vl, idx) {
        return vl.value === e.value;
      });

      if (curPermission) {
        _this.setState({
          permission: curPermission[0].permission
        });
      }
    });

    return _this;
  }

  _createClass(edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      Object(_HttpFunctions__WEBPACK_IMPORTED_MODULE_9__["CheckPermission"])('user', 'edit', history);
      this.PemissionGet();
      this.RoleList();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var addPage = [];
      var _this$props2 = this.props,
          match = _this$props2.match,
          location = _this$props2.location,
          history = _this$props2.history;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
        as: "h5"
      }, "Edit User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "btn-sm",
        style: {
          'float': 'right'
        },
        onClick: function onClick() {
          history.goBack();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-chevron-left"
      }), "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationForm"], {
        onSubmit: this.handleSubmit,
        onErrorSubmit: this.handleErrorSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "firstName"
      }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
        name: "firstName",
        id: "firstName",
        placeholder: "First Name",
        required: true,
        value: this.state.firstName,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "lastName"
      }, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
        name: "lastName",
        id: "lastName",
        placeholder: "Last Name",
        minLength: "4",
        value: this.state.lastName,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "email"
      }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
        name: "email",
        id: "email",
        type: "email",
        placeholder: "Email Address",
        validator: validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmail,
        errorMessage: {
          validator: "Please enter a valid email"
        },
        value: this.state.email,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "password"
      }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
        name: "password",
        id: "password",
        type: "password",
        placeholder: "Password",
        pattern: "(?=.*[A-Z]).{6,}",
        errorMessage: {
          required: "Password is required",
          pattern: "Password should be at least 6 characters and contains at least one upper case letter"
        },
        value: this.state.password,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "confirmPassword"
      }, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
        name: "confirmPassword",
        id: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        validator: this.matchPassword,
        errorMessage: {
          required: "Confirm password is required",
          validator: "Password does not match"
        },
        value: this.state.confirmPassword,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "firstName"
      }, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onChange: this.RoleChange,
        className: "basic-single",
        classNamePrefix: "select",
        name: "role_id",
        defaultValue: {
          label: this.state.role_name,
          value: this.state.role_id
        },
        value: this.state.role_id,
        options: this.state.role_list,
        placeholder: "Select Role"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Permission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "requestLoder",
        style: {
          'textAlign': 'center'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        className: "table table-condensed",
        id: "data-table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        id: "listdata"
      }, this.state.permission.map(function (val, index) {
        //  console.log(val[Object.keys(val)[0]]);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Trrow, {
          key: index,
          index: index,
          parent: Object.keys(val)[0],
          onparentChange: _this2.chageParent,
          rows: val[Object.keys(val)[0]],
          onchildChange: _this2.handleCheckboxChange
        });
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        sm: 12,
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: this.state.formSubmitting,
        type: "submit"
      }, " ", this.state.buttonName)))))))));
    }
  }]);

  return edit;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./resources/js/HttpFunctions.js":
/*!***************************************!*\
  !*** ./resources/js/HttpFunctions.js ***!
  \***************************************/
/*! exports provided: baseurl, CheckPermission, Login, ChangePasswordurl, Pemissionlist, RoleAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseurl", function() { return baseurl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPermission", function() { return CheckPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordurl", function() { return ChangePasswordurl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pemissionlist", function() { return Pemissionlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAdd", function() { return RoleAdd; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/js/config.js");
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");



/**
 *  baseurl  get baseurl
 */

var baseurl = window.location.origin;
/**
 * Login api request
 * @param {*} user for send Credentials
 */

var CheckPermission = function CheckPermission(page, page_name, history) {
  var redirect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
      id = _ref.id,
      parmissions = _ref.parmissions,
      is_one_time_password = _ref.is_one_time_password;

  if (is_one_time_password == 0) {
    history.push('/change-password');
  }

  var pages = parmissions.filter(function (vl, idx) {
    if (Object.keys(vl)[0] == page) {
      return vl;
    }
  });

  if (pages.length > 0) {
    var Ischeck = pages[0][page].filter(function (v, i) {
      if (v['page_name'] == page_name) {
        if (v['Ischeck']) {
          return v;
        }
      }
    });

    if (Ischeck.length == 0) {
      if (redirect) {
        var notget = history.goBack();

        if (!notget) {
          history.push({
            pathname: '/'
          });
        }
      }

      pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].error({
        title: "Permission Error",
        text: _config__WEBPACK_IMPORTED_MODULE_1__["default"].AccessDeniedMessage
      });
      return 1;
    }
  } else {
    history.goBack();
  }
};
var Login = function Login(user) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseurl + '/api/user/login', {
    email: user.email,
    password: user.password,
    remember_me: user.remember
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
var ChangePasswordurl = function ChangePasswordurl(user) {
  var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
      id = _ref2.id,
      auth_token = _ref2.auth_token;

  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseurl + '/api/user/changepassword', {
    user_id: id,
    new_password: user.new_password,
    confirm_password: user.confirm_password,
    current_password: user.current_password
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    }
  });
};
var Pemissionlist = function Pemissionlist(parameter) {
  var _ref3 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
      id = _ref3.id,
      auth_token = _ref3.auth_token;

  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseurl + '/api/parmission/list', {
    'id': id
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    }
  });
};
var RoleAdd = function RoleAdd(role) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseurl + '/api/role', {
    email: role.email,
    password: role.password,
    remember_me: role.remember
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

/***/ })

}]);