(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

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

/***/ "./resources/js/Back-Office/Pages/Mandatory_documents/add.js":
/*!*******************************************************************!*\
  !*** ./resources/js/Back-Office/Pages/Mandatory_documents/add.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loki__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loki */ "./node_modules/react-loki/es/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-signature-canvas */ "./node_modules/react-signature-canvas/build/index.js");
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_signature_canvas__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-super-responsive-table */ "./node_modules/react-super-responsive-table/dist/index.js");
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__);
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




window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;













var baseurl = window.location.origin;

var ajaxabort;

function successDesktopPNotify(id) {
  var message = "Document added successfully";

  if (id != '') {
    message = "Document updated successfully";
  }

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_9__["default"].success({
    title: 'Success',
    text: message,
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {});
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

var yyyy = today.getFullYear();
var todaydate = dd + '/' + mm + '/' + yyyy;

var submitCertification = /*#__PURE__*/function (_React$Component) {
  _inherits(submitCertification, _React$Component);

  var _super = _createSuper(submitCertification);

  function submitCertification(props) {
    var _this;

    _classCallCheck(this, submitCertification);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleCheckboxChange", function (e, value) {
      _this.setState(_defineProperty({}, e.target.name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
      /*test */

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

      var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          id = _ref.id,
          auth_token = _ref.auth_token;

      var data = new FormData(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#documentUpload')[0]);
      data.append('id', _this.props.match.params.id); // let formdata = this.state;
      // data.append('user_cv', this.state.user_cv);

      var urlid = '';

      if (_this.state.id != '') {
        urlid = '/' + _this.state.id;
      }

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(baseurl + '/api/mandatory_documents', data, {
        headers: {
          'Accept': 'application/json',
          'content-type': 'multipart/form-data',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          // console.log(res.data.data);
          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Submit'
          });

          successDesktopPNotify(_this.state.id);

          _this.props.history.push({
            pathname: '/Mandatory-Documents'
          });

          _this.setState(_this.baseState); // this.props.history.push('/application');

        } else {
          var errorMassage = '';

          if (res.data.message) {
            errorMassage = res.data.message;
          }

          if (res.data.errors) {
            errorMassage = res.data.errors.name;
          } //tes


          if (res.data.email) {
            errorMassage = res.data.email;
          }

          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_9__["default"].error({
            title: "System Error",
            text: errorMassage
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Submit'
          });
        }
      })["catch"](function (err) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_9__["default"].error({
          title: "System Error",
          text: err
        });

        _this.setState({
          formSubmitting: false
        });

        _this.setState({
          buttonName: 'Submit'
        });

        _this.setState({
          selectedFile: null
        });
      }); //  this.props.history.push('/role');
    });

    _defineProperty(_assertThisInitialized(_this), "handleErrorSubmit", function (e, formData, errorInputs) {//console.log(errorInputs);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#addressList').html('').hide(); //$('#location').val('');
    });

    _defineProperty(_assertThisInitialized(_this), "onUploadCv", function (event) {
      var file = event.target.files[0];

      if (_this.validateSize(event)) {
        // if return true allow to setState
        _this.setState({
          user_cv: file
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "validateSize", function (event) {
      var file = event.target.files[0];
      var size = 30000000;
      var err = '';
      console.log(file.size);

      if (file.size > size) {
        err = file.type + 'is too large, please pick a smaller file\n';
        alert(err); //  toast.error(err);
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "addOtherdocuments", function () {
      var other_documents = {
        document_name: ''
      };

      _this.setState(function (previousState) {
        return {
          other_documents: [].concat(_toConsumableArray(previousState.other_documents), [other_documents])
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "other_documentDelete", function (element) {
      var index = element.target.id;

      if (index !== -1) {
        var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_14___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a);
        MySwal.fire({
          title: 'Are you sure?',
          type: 'warning',
          showCloseButton: true,
          showCancelButton: true
        }).then(function (willDelete) {
          if (willDelete.value) {
            var other_documents = _this.state.other_documents;
            other_documents.splice(index, 1);

            _this.setState({
              other_documents: other_documents
            });
          } else {}
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleHandler", function () {
      _this.setState(function (prevState) {
        return {
          eusr_card_not_issued: !prevState.eusr_card_not_issued
        };
      });
    });

    _this.state = {
      id: '',
      other_documents: [{
        document_name: ''
      }],
      chkBasic: false,
      chkCustom: false,
      checkMeSwitch: false,
      showModal: false,
      visible: true,
      formSubmitting: false,
      buttonName: 'Save'
    }; // preserve the initial state in a new object

    _this.baseState = _this.state;
    return _this;
  }

  _createClass(submitCertification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.match.params.id);
    } //cv upload function

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      var other_documents = this.state.other_documents.map(function (item, index) {
        var dltBtn = index > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: "outline-danger",
          style: {
            'marginTop': '15px'
          },
          id: index,
          onClick: function onClick(e) {
            return _this2.other_documentDelete(e);
          },
          size: "sm"
        }, "X") : '';
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
          style: style.rowline
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
          md: "6"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
          name: "document_name[]",
          id: index,
          placeholder: "Document Name",
          required: true,
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
          md: "4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "custom-file"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__["FileInput"], {
          name: "othersfile[]",
          required: true // maxFileSize="10000 kb"
          ,
          errorMessage: {
            required: "Please upload a file",
            fileType: "Only pdf and word file is allowed" // maxFileSize: "Max file size is 10000 kb"

          },
          onChange: _this2.onUploadCv
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
          md: "2"
        }, dltBtn));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Mandatory Documents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          'float': 'right'
        },
        onClick: function onClick() {
          history.goBack();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "feather icon-chevron-left"
      }), "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationForm"], {
        autoComplete: "off",
        id: "documentUpload",
        onSubmit: this.handleSubmit,
        onErrorSubmit: this.handleErrorSubmit
      }, other_documents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "secondary",
        style: {
          marginLeft: '10px'
        },
        onClick: this.addOtherdocuments,
        size: "sm"
      }, "+ Add Documents"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        sm: 12,
        style: {
          textAlign: 'center'
        },
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        disabled: this.state.formSubmitting,
        type: "submit"
      }, " ", this.state.buttonName)))))))));
    }
  }]);

  return submitCertification;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var style = {
  rowline: {
    borderBottom: 'solid 1px #f8f9fa',
    marginBottom: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (submitCertification);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);