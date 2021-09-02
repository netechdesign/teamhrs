(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./resources/js/front-end/OfferLetter.js":
/*!***********************************************!*\
  !*** ./resources/js/front-end/OfferLetter.js ***!
  \***********************************************/
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
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-super-responsive-table */ "./node_modules/react-super-responsive-table/dist/index.js");
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-super-responsive-table/dist/SuperResponsiveTableStyle.css */ "./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css");
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_25__);
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




window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;





















var baseurl = window.location.origin;


var ajaxabort;

function successDesktopPNotify(id) {
  var message = "Appication Form Send successfully";

  if (id != '') {
    message = "Application Form updated successfully";
  }

  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_17__["default"].success({
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

var OfferLetter = /*#__PURE__*/function (_React$Component) {
  _inherits(OfferLetter, _React$Component);

  var _super = _createSuper(OfferLetter);

  function OfferLetter(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, OfferLetter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleCheckboxChange", function (e, value) {
      _this.setState(_defineProperty({}, e.target.name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
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

      var data = new FormData(); //data.append('name', this.state.name);

      var formdata = _this.state;
      var urlid = '';

      if (_this.state.id != '') {
        urlid = '/' + _this.state.id;
      }

      axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(baseurl + '/api/submitofferletter' + urlid, formdata, {
        headers: {
          'Accept': 'application/json'
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
          var userData = JSON.parse(localStorage.getItem('userData'));
          userData.application_forms_id = 1;
          localStorage.setItem('userData', JSON.stringify(userData));

          _this.props.history.push({
            pathname: '/thanks',
            state: {
              user_name: _this.state.fore_name
            }
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

          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_17__["default"].error({
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
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_17__["default"].error({
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

    _defineProperty(_assertThisInitialized(_this), "confirm_employee", {});

    _defineProperty(_assertThisInitialized(_this), "confirm_employee_trim", function () {
      _this.setState({
        confirm_employee_signature: _this.confirm_employee.getTrimmedCanvas().toDataURL('image/png')
      }); // this.setState({confirm_employee_signature_show: this.state.confirm_employee_signature })

    });

    _defineProperty(_assertThisInitialized(_this), "confirm_employee_clear", function () {
      _this.confirm_employee.clear();
    });

    _defineProperty(_assertThisInitialized(_this), "confirmChange", function (e) {
      _this.setState({
        confirm_Date: e
      });
    });

    _defineProperty(_assertThisInitialized(_this), "information_provided", {});

    _defineProperty(_assertThisInitialized(_this), "information_provided_trim", function () {
      _this.setState({
        information_provided_signature: _this.information_provided.getTrimmedCanvas().toDataURL('image/png')
      }); //  this.setState({information_provided_signature_show: this.state.information_provided_signature })

    });

    _defineProperty(_assertThisInitialized(_this), "information_provided_clear", function () {
      _this.information_provided.clear();
    });

    _defineProperty(_assertThisInitialized(_this), "confirm_employee_dateChange", function (e) {
      _this.setState({
        confirm_employee_date: e
      });
    });

    _defineProperty(_assertThisInitialized(_this), "information_providedChange", function (e) {
      _this.setState({
        information_provided_date: e
      });
    });

    _defineProperty(_assertThisInitialized(_this), "place_of_employment", function (place_of_employment) {
      if (place_of_employment == 1) {
        return 'Your place of employment shall not be fixed. Your region will be allocated in line with the Employer’s assessment of business conditions.';
      } else if (place_of_employment == 2) {
        return 'Your line manager will allocate your region of management responsibility with your agreed assessment of business conditionsThe Employer reserves the right, subject to prior discussion with you, to alter the size or nature of this region or to reassign the region, in line with the Company’s assessment of business conditions.';
      } else if (place_of_employment == 3) {
        return 'Bespoke Metering Solutions, Unit 6, Glover Network Centre, Spire Road, Washington, NE37 3HB';
      } else if (place_of_employment == 4) {
        return 'Bespoke Metering Solutions, Gateway House, Gateway West, Newburn Riverside, Newcastle upon Tyne NE15 8NX';
      } else if (place_of_employment == 5) {
        return 'Bespoke Metering Solutions, Unit 7, Grovewood Business Centre, Strathclyde Business Park, Bellhill, ML4 3NQ';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hours_of_work", function (hours_of_work) {
      if (hours_of_work == 1) {
        return '45 hours per week, between Monday to Sunday to be worked between the hours of 8am and 10pm. You may be required as part of your role to attend out of hours and emergency callouts as requested by the Employer';
      } else if (hours_of_work == 4) {
        return '40 hours per week, between Monday to Sunday to be worked between the hours of 8am and 10pm. You may be required as part of your role to attend out of hours and emergency callouts as requested by the Employer';
      } else if (hours_of_work == 2) {
        return 'Your normal working hours will be 40 hours per week between 08.00 and 18.00 Monday to Friday. You are, however, expected to work without additional pay for additional hours according to the requirements of the Company';
      } else if (hours_of_work == 3) {
        return 'Manually';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getaddist", function (vl) {
      if (vl != "") {
        return vl;
      }
    });

    _this.state = (_this$state = {
      _method: '',
      application_forms_id: '',
      confirm_employee_signature: '',
      confirm_employee_date: todaydate,
      information_provided_signature: '',
      information_provided_date: todaydate,
      showModal: false,
      visible: true,
      formSubmitting: false,
      buttonName: 'Submit',
      basic: '',
      remuneration_and_benefits: '',
      bonus: "",
      confirm_Date: "",
      dbscheck: "",
      fore_name: "",
      hours_of_work: "",
      id: '',
      job_title: "",
      job_title_text: '',
      place_of_employment: ""
    }, _defineProperty(_this$state, "remuneration_and_benefits", ""), _defineProperty(_this$state, "surname", ""), _defineProperty(_this$state, "title", ""), _defineProperty(_this$state, "line_1", ''), _defineProperty(_this$state, "line_2", ''), _defineProperty(_this$state, "line_3", ''), _defineProperty(_this$state, "line_4", ''), _defineProperty(_this$state, "town_or_city", ''), _defineProperty(_this$state, "postcode", ''), _defineProperty(_this$state, "offerletterlist_id", ''), _defineProperty(_this$state, "created_at", ''), _defineProperty(_this$state, "showofferletter", 'none'), _defineProperty(_this$state, "alreadyalert", 'none'), _this$state); // preserve the initial state in a new object

    _this.baseState = _this.state;
    return _this;
  }

  _createClass(OfferLetter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.match.params.id) {
        var data = JSON.parse(atob(this.props.match.params.id));
        this.setState({
          offerletterlist_id: data['offerletterlist_id']
        }); //offerletters_id = offerletterlist_id

        this.setState({
          basic: data['basic']
        });
        this.setState({
          bonus: data['bonus']
        });
        this.setState({
          remuneration_and_benefits: data['remuneration_and_benefits']
        });
        this.setState({
          confirm_Date: data['confirm_Date']
        });
        this.setState({
          dbscheck: data['dbscheck']
        });
        this.setState({
          fore_name: data['fore_name']
        });
        this.setState({
          hours_of_work: data['hours_of_work']
        });
        this.setState({
          application_forms_id: data['application_Forms_id']
        }); //application_Forms_id =id

        this.setState({
          job_title: data['job_title']
        });
        this.setState({
          place_of_employment: data['place_of_employment']
        });
        this.setState({
          surname: data['surname']
        });
        this.setState({
          title: data['title']
        });

        if (data['address_details']) {
          this.setState({
            line_1: data['address_details']['line_1']
          });
          this.setState({
            line_2: data['address_details']['line_2']
          });
          this.setState({
            line_3: data['address_details']['line_3']
          });
          this.setState({
            line_4: data['address_details']['line_4']
          });
          this.setState({
            postcode: data['address_details']['postcode']
          });
          this.setState({
            town_or_city: data['address_details']['town_or_city']
          });
        }

        if (data['line_1']) {
          this.setState({
            line_1: data['line_1']
          });
          this.setState({
            line_2: data['line_2']
          });
          this.setState({
            line_3: data['line_3']
          });
          this.setState({
            line_4: data['line_4']
          });
          this.setState({
            postcode: data['postcode']
          });
          this.setState({
            town_or_city: data['town_or_city']
          });
        }

        this.setState({
          created_at: data['created_at']
        });
        axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(baseurl + '/api/applicant_send_offer_letter/' + data['offerletterlist_id']).then(function (res) {
          if (res.data.success) {
            if (res.data.data == 1) {
              _this2.setState({
                formSubmitting: true,
                showofferletter: 'none',
                alreadyalert: ''
              });

              pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_17__["default"].error({
                title: "Sorry",
                text: 'Your offer letter has been already sent.'
              });
            } else {
              _this2.setState({
                showofferletter: ''
              });
            } // this.setState({job_title_text:res.data.data.name});

          } else {
            var errorMassage = '';

            if (res.data.message) {
              errorMassage = res.data.message;
            }

            pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_17__["default"].error({
              title: "System Error",
              text: errorMassage
            });
          }
        })["catch"](function (err) {
          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_17__["default"].error({
            title: "System Error",
            text: err
          });
        });
        axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(baseurl + '/api/getjobtitle/' + data['job_title']).then(function (res) {
          if (res.data.success) {
            _this2.setState({
              job_title_text: res.data.data.name
            }); // console.log(res.data.data);

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

            pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_17__["default"].error({
              title: "System Error",
              text: errorMassage
            });
          }
        })["catch"](function (err) {
          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_17__["default"].error({
            title: "System Error",
            text: err
          });
        });
      }
    } //confirm

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var basic = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Basic: "), "\xA3", this.state.basic, " per annum");
      var dbscheck = this.state.dbscheck == 'Yes' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "DBS Check: "), "Basic required") : '';
      var bonus = this.state.bonus == 'Yes' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Bonus: "), "You will be paid bonus in accordance with the rules and rates set out in the Bonus Policy relevant to you as amended from time to time") : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_full_screen__WEBPACK_IMPORTED_MODULE_12___default.a, {
        enabled: this.props.isFullScreen
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_layout_AdminLayout_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        className: "pcoded-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pcoded-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pcoded-inner-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5"
      }, "Offer Letter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: this.state.alreadyalert
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          color: 'red',
          fontSize: '20px'
        }
      }, "Your offer letter has been already sent.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["ValidationForm"], {
        style: {
          display: this.state.showofferletter
        },
        autoComplete: "off",
        id: "formid",
        onSubmit: this.handleSubmit,
        onErrorSubmit: this.handleErrorSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Private & Confidential")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.state.title, " ", this.state.fore_name, " ", this.state.surname, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.state.line_1, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.getaddist(this.state.line_2), this.getaddist(this.state.line_3), this.getaddist(this.state.line_4), this.state.town_or_city, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.state.postcode, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "DATE ", this.state.created_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dear ", this.state.fore_name, ",")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Employment with Bespoke Metering Solutions Limited. ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As discussed, we are delighted to offer you employment as ", this.state.job_title_text, ". This offer is conditional upon Bespoke Metering Solutions Limited receiving satisfactory results from necessary pre-employment checks and assessments, which may include a basic DBS check depending on the nature of your role."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Employment with the Bespoke Metering Solutions Limited will commence on the date shown in the Schedule. The first six months of your contract will be treated as a probationary period during which time Bespoke Metering Solutions Limited or yourself may terminate your employment by the notice period stated in your contract."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your basic remuneration at the commencement of your employment is as shown in the Schedule. Your entitlement to salary accrues daily, payable monthly in arrears on the last working day of the month, directly into your bank or building society account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your paid holiday entitlement will be at the rate of 31 days per year, inclusive of statutory bank holidays. Your holiday accrues daily. If you work part-time your holiday entitlement will be on a pro-rata basis."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Full terms of employment are available in the Employee Handbook, which will be made available to you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "It\u2019s a pleasure to welcome you fully on board and I am confident you will make a valuable contribution to the Company."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Yours Sincerely,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          width: '10%'
        },
        src: window.location.origin + '/images/offerletter_sign.png'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Gareth McKenna", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Operations Director")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: '22px',
          textAlign: 'center'
        }
      }, "Bespoke Metering Solutions Limited"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: '22px',
          textAlign: 'center'
        }
      }, "And"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: '22px',
          textAlign: 'center'
        }
      }, this.state.fore_name, " ", this.state.surname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: '22px',
          textAlign: 'center'
        }
      }, "Contract of Employment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: '22px',
          textAlign: 'center'
        }
      }, "Dated ", this.state.confirm_Date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "This is your contract of employment and contains a statement of the applicable terms and conditions of your employment as required by section 1 of the Employment Rights Act 1996. The Schedule attached to the Contract forms part of the Contract.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "You are referred to the Employee Handbook and Employer Policies which detail the Employer\u2019s employment policies and procedures. These policies and procedures may be changed from time to time and are not contractual. Although they do not form part of your Contract you are required by this Contract to abide by those policies and procedures that apply to you and to carry out any instructions and directions given to you by the Employer.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Parties\u2019 details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The parties to the Contract are the employer (\u201CEmployer\u201D/\u201Dus\u201D/\u201Dour\u201D/\u201Dwe\u201D) and the employee (\u201CEmployee\u201D/\u201Dyou\u201D/\u201Dyour\u201D) both of whose details are set out in the Schedule hereto."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Date of commencement of employment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Your employment with the Employer will commence on the date shown in the Schedule. No employment with a previous employer shall be regarded as part of a period of continuous employment with the Employer unless otherwise stated."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You warrant that you are entitled to work in the UK without any additional approvals and will notify the Employer immediately if you cease to be so entitled at any time during your employment."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Job Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Your position with the Employer is shown in the Schedule."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You are required to undertake the duties as set out in your job description, which is attached."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You may be required from time to time to undertake such other duties as the Employer may reasonably require."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "During your employment you will take instructions from such persons as are notified to you by us from time to time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You shall not work for anyone else while you are employed by the Employer."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Place of employment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Your place of work is as shown in the Schedule or at such other location or locations within the United Kingdom as the Employer may from time to time direct. You may be required to travel to any location within the United Kingdom for the performance of your duties."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The Employer reserves the right, subject to prior discussion with you, to alter your place of work in line with the Employer\u2019s assessment of business conditions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You will not be paid any expenses incurred or time spent by you travelling to your normal place of work."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "References and criminal convictions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Your employment is conditional upon receipt of references deemed satisfactory by the Employer. Whilst every effort will be made to obtain all such references as quickly as possible, your employment may start before some or all your references are received. If so, you agree that the Employer may terminate your employment either with or without notice, or by making a payment in lieu of notice, depending upon the circumstances if any reference fails to meet Employer requirements. The Employer\u2019s decision is final as to whether your references meet the required standard."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "If your position requires you to have a satisfactory DBS check as a condition of employment this will be stated in the Schedule and by signing this contract you will be agreeing that:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "we may conduct this check at our expense; and"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "we may conduct further DBS checks as we require from time to time and on an annual basis at our expense; and"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "should your DBS status change you are required to inform us as soon as possible; and"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "should your DBS check reveal a status that is not consistent with you carrying out your duties your employment may be terminated, either with or without notice, depending upon the circumstances."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Remuneration and benefits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Your basic remuneration is as shown in the Schedule. Your entitlement to salary accrues daily, payable monthly in arrears on the last working day of the month, directly into your bank or building society account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We may, in our absolute discretion, pay you a bonus and any bonus that is applicable to you will be set out in the Schedule. However, you have no right to a bonus. Any bonus will be subject to the terms of the policy which applies to it from time to time, it may be withdrawn at any time and the basis upon which it is paid may be varied at any time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Your salary will be reviewed annually and may be changed from time to time at the discretion of the Employer without affecting the other terms of your employment. There is no obligation to award an increase. There will be no review of salary after notice has been given by either party to terminate your employment."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "If at any time money is owed and payable by you to the Employer, the Employer may lawfully deduct the sum or sums owing to it, from your salary or from any other payment due to be made to you by the Employer. Such deductions may include, but are not limited to, overpayments, loans or advances made to you by the Employer, the costs of repairing any damage or loss to the Employer\u2019s property caused by you, any losses suffered by the Employer as a result of any negligence or breach of duty by you, and any other sums due."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You will be reimbursed on a monthly basis for all reasonable expenses relating to travel, accommodation, entertainment and other out-of-pocket expenses incurred on authorised business in the proper performance of your duties subject to production of all receipts or other evidence as the Employer may require and provided that you comply with the terms of the Employer\u2019s expenses policy."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Hours of work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Your normal working hours are shown in the Schedule."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You agree that your weekly working hours may be in excess of those prescribed by law (\u201Cthe Waiver\u201D). The Waiver will remain in force indefinitely, but you may give the Employer not less than three months\u2019 notice in writing of your intention to terminate the Waiver."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The Employer reserves the right to alter working hours as necessary."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You are required to comply with policies and procedures in force from time to time including those contained in the Employee Handbook, a copy of which will be made available to you."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Driving"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Should your role require you to drive, your employment will be conditional upon you having a full current UK Driving Licence with the appropriate accreditations required for driving within your role. You are required to notify the Employer if you lose these accreditations, if a court fines you and \u2018endorses\u2019 your driving license with penalty points or you have your driving licence withdrawn as a result of a criminal conviction. Any failure to comply will be a disciplinary offence that may result in dismissal."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Increasing Health and Safety and duty of care requirements mean that the Employer has a corporate responsibility to check the validity of driving licences for employees who are provided with a company vehicle, drive on company business using their own vehicle or are covered under the company insurance. The Employer requires you to submit your driving licence to carry out the necessary checks"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Holiday and holiday pay"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The holiday year runs from 1st April to 31st March. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "From the commencement of your employment, your paid holiday entitlement will be at the rate of 31 days per year, inclusive of statutory bank holidays. Your holiday accrues daily. If you work part-time your holiday entitlement will be on a pro-rata basis."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Holiday may be taken only at times convenient to the Employer as previously arranged by notice. Further details of the notice arrangements can be found in the Employer's Holiday Policy which is contained in the Employee Handbook."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Holiday not taken by 31st March may not be carried forward to the following holiday year without the Employer's written permission. Payment will not be made for holiday not taken."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "On termination of your employment, any holiday entitlement untaken but accrued in the current holiday year, will be paid by the Employer. The amount of such sum shall be 1/260th of your full-time equivalent normal basic remuneration for each day accrued but untaken. Any holiday taken in excess of your pro rata entitlement will be deducted from your final salary payment."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Pensions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We will comply with the employer pension duties applicable to you under Part 1 of the Pensions Act 2008. Further details will be made available to you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The Employer\u2019s pension arrangement is subject to HM Revenue and Customers rules and the terms may change in the future in order to comply with government legislation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "If you do not want to be a pension scheme member, you can choose to opt out of saving towards your retirement altogether, although we do recommend you think carefully before you do so."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Absence due to sickness or injury "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "A self-certification system operates for absence from work due to sickness or injury not exceeding seven days."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " If you cannot attend work because of sickness or injury you must, unless there is some good reason to the contrary, follow absence reporting procedures. Failure to do so may result in sickness pay not being paid."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Immediately on your return to work you must obtain, complete and return a return-to-work form and a self- certification form or doctor's fit note for periods exceeding seven days."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Sickness or injury absence exceeding seven days must be covered by a doctor's fit note."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "All sickness or injury absence will be entered on your employment record."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "If you are absent from work for four or more days by reason of sickness or injury, you are entitled to statutory sick pay (SSP); as per SSP rules the first 3 qualifying days are not paid for each period of absence."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Sick pay is subject to the usual deductions for PAYE, national insurance, etc."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The Employer reserves the right to require you to undergo a medical examination at its request after 12 weeks' absence due to sickness. The Employer will pay the cost of any such examination and all information given in connection with it and any report on it shall be fully disclosed to the Employer."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Probation period"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "There is a probationary period of 6 months for new employees, during which time you shall be entitled to notice. The Employer's disciplinary scheme shall not apply. The Employer reserves the right to extend this period as appropriate."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The probation period will come to an end when confirmed in writing by the Employer."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Notice to terminate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Should your position require you to have a satisfactory DBS check as a condition of employment and you have for any reason not disclosed any information or an unsatisfactory DBS is received, then your contract will be terminated with immediate effect."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Once the probationary period is completed, save in cases of gross misconduct, this contract may be terminated at any time by the following periods of notice."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The Employer's notice to employees with continuous service from one month up to two years will be one week. Thereafter, employees are entitled to receive one additional week's notice for each year of continuous employment up to a maximum of 12 weeks' notice."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Employees' notice to the Employer will be 4 weeks\u2019 notice in writing."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We may at our discretion terminate your employment without notice and make a payment in of basic salary in lieu of notice."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We shall be entitled to dismiss you at any time without notice or payment in lieu of notice if you commit a serious breach of your obligations as an employee, or if you cease to be entitled to work in the United Kingdom."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Collective Agreements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "There are no collective agreements governing your terms and conditions of employment."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Disciplinary and grievance procedures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " The disciplinary and grievance procedures applicable to your employment are contained in the employee handbook, a copy of which will be made available to you. They are for guidance only and do not form part of your contract of employment."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "If you wish to appeal against a disciplinary decision, you may apply in writing in accordance with the disciplinary procedure."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We reserve the right to suspend you with pay for a reasonable period for the purposes of investigating any allegation of misconduct or neglect against you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "If you wish to raise a grievance, you may apply in writing in accordance with the grievance procedure."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Confidential Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " You shall not use or disclose to any person either during or at any time after your employment with the Employer any confidential information about the business or affairs of the Employer or any of its business contacts, or about any other matters which may come to your knowledge in the course of your employment. For the purposes of this agreement, Confidential Information means any information or matter which is not in the public domain and which relates to the affairs of the Employer or any of its business contacts."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The restriction in clause 14.1 does not apply to:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "prevent you from making a protected disclosure within the meaning of section 43A of the Employment Rights Act 1996; or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "use or disclosure that has been authorised by the Employer, is required by law or by your employment."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Data Protection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You confirm that you have read and understood the data protection policy of the Employer, a copy of which is contained in the employee handbook. The Employer is entitled to make changes to its data protection policy and will notify employees in writing of any such changes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You shall comply with the data protection policy when processing personal data during your employment including personal data relating to any employee, customer, client, supplier or agent of the Employer."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You consent to the Employer processing data relating to you for legal, personnel, administrative and management purposes and in particular to the processing of any sensitive personal data (as defined in the General Data Protection Regulations Act 2016) relating to you, including, as appropriate:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "information about your physical or mental health or condition in order to monitor sick leave and take decisions as to your fitness for work; or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "your racial or ethnic origin or religious or similar information in order to monitor compliance with equal opportunities legislation; or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "information relating to any criminal proceedings in which you have been involved for insurance purposes and in order to comply with legal requirements and obligations to third parties."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The Employer may make such information available to those who provide products or services to the Employer (such as advisers and payroll administrators), regulatory authorities, potential or future employers, governmental or quasi-governmental organisations and potential purchasers of the business or the business in which you work."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Changes to your employment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We reserve the right to make reasonable adjustments to any terms of employment. You will be notified in writing of any changes as soon as possible and in event within one month of the change."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "If there is a temporary shortage of work for any reason, we will try to maintain your continuity of employment even if this necessitates placing you on short time working, or alternatively, lay-off. If you are placed on short time working, your pay will be reduced according to time worked. If you are placed on lay-off, you will receive no pay other than statutory guarantee pay if you qualify for this."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Employer\u2019s property"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "All documents, manuals, hardware and software provided for your use by the Employer, and any data or documents (including copies) produced, maintained or stored on our computer systems or other electronic equipment (including mobile phones), remain the property of the Employer."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Any property of the Employer in your possession and any original or copy documents obtained by you in the course of your employment shall be returned to the Employer at any time on request and in any event prior to the termination of your employment with the Employer."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Use of communications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You consent to the Employer monitoring, checking, recording and reviewing telephone calls, computer files, records and emails and to carry out any other compliance, security or risk analysis checks the Employer considers necessary on Employer's property."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You understand and accept that you have no expectation of privacy in respect of any electronic, telephone or other communications made at work using or stored on Employer's property."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        style: {
          fontSize: '24px'
        }
      }, "Schedule")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Parties: ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "The Employer: "), "Bespoke Metering Solutions Limited incorporated and registered in England and Wales with company number 10670768 whose registered office is at Unit 6, Glover Network Centre, Spire Road, Washington, NE37 3HB (\u201CEmployer\u201D/\u201Dus\u201D/\u201Dour\u201D/\u201Dwe\u201D)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "The Employee: "), this.state.fore_name, ", ", this.state.surname, ",", this.state.line_1, ",", this.state.line_2 != '' ? this.state.line_2 : '', ",", this.state.town_or_city, ",", this.state.postcode, "  (\u201CEmployee\u201D/\u201D you\u201D/\u201D your\u201D)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Date of Commencement: "), this.state.confirm_Date, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Job Title: "), " ", this.state.job_title_text, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Place of Employment: "), this.place_of_employment(this.state.place_of_employment)), dbscheck, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Remuneration and Benefits: "), this.state.remuneration_and_benefits), basic, bonus, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Hours of Work: "), " ", this.hours_of_work(this.state.hours_of_work)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Signed by Gareth McKenna for and on behalf of Bespoke Metering Solutions Limited: "), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          width: '10%'
        },
        src: window.location.origin + '/images/offerletter_sign.png'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Date: "), this.state.confirm_Date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Signed by the Employee: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_signature_canvas__WEBPACK_IMPORTED_MODULE_23___default.a, {
        penColor: "black",
        dotSize: function dotSize() {
          return (_this3.minWidth + _this3.maxWidth) / 5;
        },
        canvasProps: {
          width: 300,
          height: 100,
          className: 'sigCanvas'
        },
        ref: function ref(_ref2) {
          _this3.information_provided = _ref2;
        },
        onEnd: this.information_provided_trim
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.information_provided_clear
      }, "Clear"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Date: "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, {
        closeOnSelect: true,
        onChange: this.information_providedChange,
        value: this.state.information_provided_date,
        dateFormat: "D/M/Y",
        timeFormat: false,
        maxDate: new Date(),
        inputProps: {
          required: 'required',
          name: "confirm_Date",
          placeholder: 'Select Date',
          autoComplete: 'off'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        sm: 12,
        style: {
          textAlign: 'center'
        },
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        disabled: this.state.formSubmitting,
        type: "submit"
      }, " ", this.state.buttonName)))))))))))))))));
    }
  }]);

  return OfferLetter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var style = {
  rowline: {
    borderBottom: 'solid 1px #f8f9fa',
    marginBottom: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (OfferLetter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);