(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "./node_modules/react-loki/es/LokiStep.js":
/*!************************************************!*\
  !*** ./node_modules/react-loki/es/LokiStep.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var LokiStep = function LokiStep(_ref) {
  var currentStep = _ref.currentStep,
      stepsDone = _ref.stepsDone,
      totalSteps = _ref.totalSteps,
      step = _ref.step,
      isLokiComplete = _ref.isLokiComplete,
      goTo = _ref.goTo;

  var isActive = currentStep === step.index;
  var isComplete = currentStep > step.index;
  var isDisabled = !isActive && !isComplete;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "li",
    {
      className: "LokiStep " + (isActive && "LokiStep-Active") + " " + ((isComplete || isLokiComplete) && "LokiStep-Complete")
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "a",
      {
        href: "#",
        onClick: function onClick(event) {
          event.preventDefault();

          if (isDisabled) {
            return;
          }

          goTo(step.index);
        },
        className: "LokiStep-Link " + (isDisabled && "disabled"),
        disabled: isDisabled
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        { className: "LokiStep-Icon" },
        step.icon || step.index
      )
    )
  );
};

LokiStep.propTypes =  true ? {
  currentStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  totalSteps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  isLokiComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (LokiStep);

/***/ }),

/***/ "./node_modules/react-loki/es/LokiStepContainer.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-loki/es/LokiStepContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LokiStepContainer = function LokiStepContainer(_ref) {
    var children = _ref.children;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "ol",
        { className: "LokiSteps" },
        children
    );
};

/* harmony default export */ __webpack_exports__["default"] = (LokiStepContainer);

/***/ }),

/***/ "./node_modules/react-loki/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-loki/es/index.js ***!
  \*********************************************/
/*! exports provided: default, LokiStepContainer, LokiStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loki; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LokiStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LokiStep */ "./node_modules/react-loki/es/LokiStep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LokiStep", function() { return _LokiStep__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LokiStepContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LokiStepContainer */ "./node_modules/react-loki/es/LokiStepContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LokiStepContainer", function() { return _LokiStepContainer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Loki = (_temp2 = _class = function (_Component) {
  _inherits(Loki, _Component);

  function Loki() {
    var _temp, _this, _ret;

    _classCallCheck(this, Loki);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      currentStep: 1,
      stepsDone: [],
      complete: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Loki.prototype._back = function _back(data) {
    this.props.onBack && this.props.onBack(data);
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  Loki.prototype._next = function _next(data) {
    if (this.state.currentStep === this.props.steps.length) {
      this.props.onFinish(data);
      return this.setState({ complete: true });
    }

    this.props.onNext && this.props.onNext(data);
    this.setState({
      currentStep: this.state.currentStep + 1,
      stepsDone: this.state.stepsDone.concat([this.state.currentStep])
    });
  };

  Loki.prototype._lokiData = function _lokiData() {
    return {
      currentStep: this.state.currentStep,
      stepIndex: this.state.currentStep - 1,
      cantBack: this.state.currentStep === 1,
      isInFinalStep: this.state.currentStep === this.props.steps.length,
      backHandler: this._back.bind(this),
      nextHandler: this._next.bind(this)
    };
  };

  Loki.prototype._renderSteps = function _renderSteps() {
    var _this2 = this;

    if (!this.props.steps) {
      return;
    }

    if (this.props.renderSteps) {
      return this.props.renderSteps(this._lokiData());
    }

    var steps = this.props.steps.map(function (step, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LokiStep__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        stepsDone: _this2.state.stepsDone,
        currentStep: _this2.state.currentStep,
        totalSteps: _this2.props.steps.length,
        step: _extends({}, step, { index: index + 1 }),
        goTo: function goTo(newStep) {
          return _this2.setState({ currentStep: newStep });
        },
        isLokiComplete: _this2.state.complete
      });
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _LokiStepContainer__WEBPACK_IMPORTED_MODULE_3__["default"],
      null,
      steps
    );
  };

  Loki.prototype._renderComponents = function _renderComponents() {
    if (!this.props.steps) {
      return;
    }

    if (this.props.renderComponents) {
      return this.props.renderComponents(this._lokiData());
    }

    var _lokiData2 = this._lokiData(),
        stepIndex = _lokiData2.stepIndex,
        cantBack = _lokiData2.cantBack,
        isInFinalStep = _lokiData2.isInFinalStep,
        backHandler = _lokiData2.backHandler,
        nextHandler = _lokiData2.nextHandler;

    var component = this.props.steps[stepIndex].component;

    if (this.props.noActions) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(component, {
        isComplete: this.state.complete,
        backLabel: this.props.backLabel,
        nextLabel: isInFinalStep ? this.props.finishLabel : this.props.nextLabel,
        cantBack: cantBack,
        isInFinalStep: isInFinalStep,
        onBack: backHandler,
        onNext: nextHandler
      });
    }

    return component;
  };

  Loki.prototype._renderActions = function _renderActions() {
    // If we don't want the buttons we do not render them
    if (!this.props.steps || this.props.noActions) {
      return;
    }

    var cantBack = this.state.currentStep === 1;
    var isInFinalStep = this.state.currentStep === this.props.steps.length;

    // If we want custom actions we render them
    if (this.props.renderActions) {
      return this.props.renderActions(this._lokiData());
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      { className: "Loki-Actions" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "button",
        {
          type: "button",
          onClick: this._back.bind(this),
          disabled: cantBack || this.state.complete
        },
        this.props.backLabel
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "button",
        {
          type: "button",
          onClick: this._next.bind(this),
          disabled: this.state.complete
        },
        isInFinalStep ? this.props.finishLabel : this.props.nextLabel
      )
    );
  };

  Loki.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      { className: "Loki" },
      this._renderSteps(),
      this._renderComponents(),
      this._renderActions()
    );
  };

  return Loki;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = {
  backLabel: "Back",
  nextLabel: "Next",
  finishLabel: "Finish"
}, _temp2);


Loki.propTypes =  true ? {
  steps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onFinish: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
} : undefined;



/***/ }),

/***/ "./resources/js/front-end/thankstosubmit.js":
/*!**************************************************!*\
  !*** ./resources/js/front-end/thankstosubmit.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/styles.scss */ "./resources/js/front-end/assets/css/styles.scss");
/* harmony import */ var _assets_css_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/app.scss */ "./resources/js/front-end/assets/css/app.scss");
/* harmony import */ var _assets_css_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/constant */ "./resources/js/store/constant.js");
/* harmony import */ var _App_layout_AdminLayout_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App/layout/AdminLayout/Breadcrumb */ "./resources/js/App/layout/AdminLayout/Breadcrumb/index.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_loki__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loki */ "./node_modules/react-loki/es/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-full-screen */ "./node_modules/react-full-screen/dist/index.js");
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_full_screen__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-signature-canvas */ "./node_modules/react-signature-canvas/build/index.js");
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_signature_canvas__WEBPACK_IMPORTED_MODULE_23__);
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




window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;





















var baseurl = window.location.origin;

var Thankstosubmit = /*#__PURE__*/function (_React$Component) {
  _inherits(Thankstosubmit, _React$Component);

  var _super = _createSuper(Thankstosubmit);

  function Thankstosubmit() {
    _classCallCheck(this, Thankstosubmit);

    return _super.apply(this, arguments);
  }

  _createClass(Thankstosubmit, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var capitalize = function capitalize(s) {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_layout_AdminLayout_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top past-main",
        role: "navigation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        style: {
          marginLeft: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "",
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          width: '70%'
        },
        src: _store_constant__WEBPACK_IMPORTED_MODULE_6__["default"].logo_url,
        alt: "Team Hr"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " navbar-collapse",
        id: "navbarSupportedContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav mr-auto"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        style: {
          position: 'absolute',
          top: '5px',
          right: '30px'
        },
        className: "navbar-nav my-2 my-lg-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: _store_constant__WEBPACK_IMPORTED_MODULE_6__["default"].BLANK_LINK
      }, "Login")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main",
        id: "main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-section app-hero"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-content app-hero-content text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "wow fadeInUp",
        "data-wow-delay": "0s"
      }, "Thank you ", capitalize(this.props.location.state.user_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "wow fadeInUp",
        "data-wow-delay": "0.2s"
      }, "We are still in the process of reviewing applications and anticipate beginning the interview process shortly.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        className: "hidden-xs"
      }), " If you are selected to move forward with the interview process, you will hear from our HR department."))))))))));
    }
  }]);

  return Thankstosubmit;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Thankstosubmit);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);