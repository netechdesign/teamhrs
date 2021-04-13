(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./resources/js/Authentication/SignIn/SignIn.js":
/*!******************************************************!*\
  !*** ./resources/js/Authentication/SignIn/SignIn.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/scss/style.scss */ "./resources/js/assets/scss/style.scss");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _App_layout_AdminLayout_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../App/layout/AdminLayout/Breadcrumb */ "./resources/js/App/layout/AdminLayout/Breadcrumb/index.js");
/* harmony import */ var _assets_images_bg_images_login_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/bg-images/login.jpeg */ "./resources/js/assets/images/bg-images/login.jpeg");
/* harmony import */ var _assets_images_bg_images_login_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_bg_images_login_jpeg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HttpFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../HttpFunctions */ "./resources/js/HttpFunctions.js");
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













var SignIn = /*#__PURE__*/function (_React$Component) {
  _inherits(SignIn, _React$Component);

  var _super = _createSuper(SignIn);

  function SignIn(props) {
    var _this;

    _classCallCheck(this, SignIn);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.setState({
        disabled: true
      });

      _this.setState({
        loading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "spinner-grow spinner-grow-sm mr-1",
          role: "status"
        }), "Loading")
      });

      Object(_HttpFunctions__WEBPACK_IMPORTED_MODULE_10__["Login"])({
        'email': _this.state.email,
        'password': _this.state.password,
        'remember': _this.state.remember
      }).then(function (res) {
        if (res.data.success) {
          var appState = {
            isLoggedIn: true,
            user: res.data.data,
            application_forms_id: res.data.data.application_forms_id
          };
          localStorage.setItem('userData', JSON.stringify(appState));
          var lyout = 'vertical';

          if (res.data.data.roles != 1) {
            lyout = 'horizontal';
          }

          _this.props.saveUserdata(lyout);

          _this.props.history.push('/');
        } else {
          var errorshow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
            variant: "danger"
          }, res.data.data.message);

          _this.setState({
            error: errorshow
          });

          _this.setState({
            disabled: false
          });

          _this.setState({
            loading: 'Login'
          });

          setTimeout(function () {
            this.setState({
              error: ''
            });
          }.bind(_assertThisInitialized(_this)), 2000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    });

    _this.state = {
      email: "",
      password: '',
      remember: false,
      error: '',
      visible: true,
      formSubmitting: false,
      loading: 'Login',
      redirect: props.location
    };
    return _this;
  }

  _createClass(SignIn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$state$redirect$ = this.state.redirect.state,
          state = _this$state$redirect$ === void 0 ? {} : _this$state$redirect$;

      var _ref = state ? state : '',
          error = _ref.error;

      if (error) {
        var errorshow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
          variant: "danger"
        }, error);
        this.setState({
          error: errorshow
        });
        setTimeout(function () {
          this.setState({
            error: ''
          });
        }.bind(this), 2000);
      }

      var appState = localStorage["userData"];
      var isLoggedIn = false;

      if (appState) {
        var AppState = JSON.parse(appState);
        isLoggedIn = AppState.isLoggedIn;
      }

      console.log(this.state.redirect.state);

      var _ref2 = this.state.redirect.state || {
        prevLocation: {
          pathname: '/dashboard'
        }
      },
          prevLocation = _ref2.prevLocation;

      if (prevLocation && isLoggedIn) {
        return this.props.history.push(prevLocation);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_layout_AdminLayout_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row align-items-center w-100 align-items-stretch bg-white"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-none d-lg-flex col-lg-8 aut-bg-img align-items-center d-flex justify-content-center",
        style: {
          backgroundImage: "url(".concat(_assets_images_bg_images_login_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a, ")"),
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "text-white mb-5"
      }, "Login in ", this.props.companyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-white"
      }, "Delivering safe customer and consumer outcomes \u2013 doing what it takes."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 align-items-stret h-100 align-items-center d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " auth-content text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationForm"], {
        onSubmit: this.handleSubmit,
        onErrorSubmit: this.handleErrorSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb-12"
      }, this.state.error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-unlock auth-icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "mb-4"
      }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
        name: "email",
        id: "email",
        type: "email",
        placeholder: "Email Address",
        validator: validator__WEBPACK_IMPORTED_MODULE_5___default.a.isEmail,
        errorMessage: {
          validator: "Please enter a valid email"
        },
        value: this.state.email,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
        name: "password",
        id: "password",
        type: "password",
        placeholder: "Password",
        required: true,
        errorMessage: {
          required: "Password is required"
        },
        value: this.state.password,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group text-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkbox checkbox-fill d-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "checkbox-fill-1",
        id: "checkbox-fill-a1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "checkbox-fill-a1",
        className: "cr"
      }, " Save credentials"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        disabled: this.state.formSubmitting,
        className: "btn btn-primary"
      }, this.state.loading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mb-2 text-muted"
      }, "Forgot password? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: "/auth/reset-password-2"
      }, "Reset")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mb-0 text-muted"
      }, "Don\u2019t have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: "/auth/signup-2"
      }, "Signup"))))))));
    }
  }]);

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    companyName: state.companyName,
    layout: 'horizontal'
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveUserdata: function saveUserdata(userlayout) {
      dispatch({
        type: 'USER_LOGIN',
        layout: userlayout
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SignIn));

/***/ })

}]);