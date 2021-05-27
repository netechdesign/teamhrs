(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./resources/js/front-end/index.js":
/*!*****************************************!*\
  !*** ./resources/js/front-end/index.js ***!
  \*****************************************/
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
  var message = "Application Form submitted successfully";

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

var Home = /*#__PURE__*/function (_React$Component) {
  _inherits(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleCheckboxChange", function (e, value) {
      _this.setState(_defineProperty({}, e.target.name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      if (e.target.name == 'selected_interview') {
        e.target.value == 'NO' ? _this.setState({
          disability: ''
        }) : '';
      }

      if (e.target.name == 'medical_condition') {
        e.target.value == 'NO' ? _this.setState({
          medical_condition_reasonable: ''
        }) : '';
      }

      if (e.target.name == 'any_convictions') {
        e.target.value == 'NO' ? _this.setState({
          any_convictions_yes: ''
        }) : '';
      }
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
      data.append('position_applied_for', _this.state.position_applied_for);
      data.append('title', _this.state.title);
      data.append('fore_name', _this.state.fore_name);
      data.append('surname', _this.state.surname);
      data.append('email', _this.state.email);
      data.append('telephone_number', _this.state.telephone_number);
      data.append('getaddress_id', _this.state.getaddress_id);
      data.append('address', _this.state.address);
      data.append('postcode', _this.state.postcode);
      data.append('selected_interview', _this.state.selected_interview);
      data.append('disability', _this.state.disability);
      data.append('medical_condition', _this.state.medical_condition);
      data.append('medical_condition_reasonable', _this.state.medical_condition_reasonable);
      data.append('any_convictions', _this.state.any_convictions);
      data.append('any_convictions_yes', _this.state.any_convictions_yes);
      data.append('work_permit_uk', _this.state.work_permit_uk);
      data.append('qualifications', _this.state.qualifications);
      data.append('user_cv', _this.state.user_cv);
      data.append('employment_history', JSON.stringify(_this.state.employment_history));
      data.append('employment_references', JSON.stringify(_this.state.employment_references));
      data.append('unavailable_for_interview', _this.state.unavailable_for_interview);
      data.append('confirm_employee_name', _this.state.confirm_employee_name);
      data.append('confirm_employee_signature', _this.state.confirm_employee_signature);
      data.append('confirm_Date', _this.state.confirm_Date);
      data.append('information_provided_name', _this.state.information_provided_name);
      data.append('information_provided_signature', _this.state.information_provided_signature);
      data.append('information_provided_Date', _this.state.information_provided_Date);
      var urlid = '';

      if (_this.state.id != '') {
        urlid = '/' + _this.state.id;
      }

      axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(baseurl + '/api/submitapplication' + urlid, data, {
        headers: {
          'Accept': 'application/json',
          'content-type': 'multipart/form-data'
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

    _defineProperty(_assertThisInitialized(_this), "locationChange", function (e) {
      var currentCar = parseInt(e.target.value.length) + 1;

      if (currentCar > 2) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#addressList').html('<li class="list-group-item">Loading...</li>');
        var currentVal = e.target.value;

        if (ajaxabort && ajaxabort.readyState != 4) {
          ajaxabort.abort();
        }

        var self = _assertThisInitialized(_this);

        ajaxabort = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
          dataType: 'json',
          method: 'get',
          url: "https://api.getaddress.io/autocomplete/" + currentVal + "?api-key=XrOjpdAkTEiMj4o5WV_uSQ26499&all=true",
          beforeSend: function beforeSend() {
            // setting a timeout
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#addressList').html('<li class="list-group-item">Loading...</li>');
          },
          success: function success(data) {
            var listData = '';

            if (data.suggestions.length > 0) {
              jquery__WEBPACK_IMPORTED_MODULE_2___default.a.each(data.suggestions, function (key, val) {
                listData += '<li class="list-group-item getArress" data-id="' + val.id + '">' + val.address + '</li>';
              });
              jquery__WEBPACK_IMPORTED_MODULE_2___default()('#addressList').html(listData).show();
              jquery__WEBPACK_IMPORTED_MODULE_2___default()('.getArress').click(function () {
                var id = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('data-id');
                self.getAddress(id);
              });
            } else {
              listData += '<li class="list-group-item">Address not found</li>';
              jquery__WEBPACK_IMPORTED_MODULE_2___default()('#addressList').html(listData);
            }
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAddress", function (id) {
      var self = _assertThisInitialized(_this);

      jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
        dataType: 'json',
        method: 'get',
        url: "https://api.getAddress.io/get/" + id + "?api-key=XrOjpdAkTEiMj4o5WV_uSQ26499",
        success: function success(data) {
          var fullAddress = '';

          if (data.formatted_address) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default.a.each(data.formatted_address, function (k, vl) {
              if (vl != '') {
                fullAddress += vl + ', ';
              }
            });
          }

          var houseno = data.building_number + ' ' + data.building_name;
          self.setState({
            house_no: houseno
          });
          var street_line = '';

          if (data.line_1 != '') {
            street_line = data.line_1;
          }

          if (data.line_2 != '') {//  street_line +=' ,'+data.line_2;
          }

          if (data.line_3 != '') {
            street_line += ' ,' + data.line_3;
          }

          if (data.line_4 != '') {
            street_line += ' ,' + data.line_4;
          }

          self.setState({
            street: street_line
          });
          self.setState({
            city: data.town_or_city
          });
          self.setState({
            county: data.county
          });
          self.setState({
            postcode: data.postcode
          });
          self.setState({
            getaddress_id: id
          });
          self.setState({
            address: fullAddress + ' ' + data.postcode
          }); // data.latitude data.longitude

          jquery__WEBPACK_IMPORTED_MODULE_2___default()("#location").val('');
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('#addressList').html('').hide();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#addressList').html('').hide(); //$('#location').val('');
    });

    _defineProperty(_assertThisInitialized(_this), "employment_historyChange", function (element) {
      var index = element.target.id;

      if (element.target.name == 'name') {
        _this.state.employment_history[index].name = element.target.value;
      }

      if (element.target.name == 'position') {
        _this.state.employment_history[index].position = element.target.value;
      }

      if (element.target.name == 'reason_for_leaving') {
        _this.state.employment_history[index].reason_for_leaving = element.target.value;
      }

      _this.setState({
        employment_history: _this.state.employment_history
      });
    });

    _defineProperty(_assertThisInitialized(_this), "employment_historyDelete", function (element) {
      var index = element.target.id;

      if (index !== -1) {
        var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_22___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_21___default.a);
        MySwal.fire({
          title: 'Are you sure?',
          type: 'warning',
          showCloseButton: true,
          showCancelButton: true
        }).then(function (willDelete) {
          if (willDelete.value) {
            var employment_history = _this.state.employment_history;
            employment_history.splice(index, 1);

            _this.setState({
              employment_history: employment_history
            });
          } else {}
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addEmployment", function () {
      var employment_history = {
        name: '',
        position: '',
        reason_for_leaving: ''
      };

      if (_this.state.employment_history.length < 5) {
        _this.setState(function (previousState) {
          return {
            employment_history: [].concat(_toConsumableArray(previousState.employment_history), [employment_history])
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "employment_referencesChange", function (element) {
      var index = element.target.id;

      if (element.target.name == 'company_name') {
        _this.state.employment_references[index].company_name = element.target.value;
      }

      if (element.target.name == 'name') {
        _this.state.employment_references[index].name = element.target.value;
      }

      if (element.target.name == 'position') {
        _this.state.employment_references[index].position = element.target.value;
      }

      if (element.target.name == 'telephone_no') {
        _this.state.employment_references[index].telephone_no = element.target.value;
      }

      if (element.target.name == 'email') {
        _this.state.employment_references[index].email = element.target.value;
      }

      _this.setState({
        employment_references: _this.state.employment_references
      });
    });

    _defineProperty(_assertThisInitialized(_this), "confirm_employee", {});

    _defineProperty(_assertThisInitialized(_this), "confirm_employee_trim", function () {
      _this.setState({
        confirm_employee_signature: _this.confirm_employee.getTrimmedCanvas().toDataURL('image/png')
      });

      _this.setState({
        confirm_employee_signature_show: _this.state.confirm_employee_signature
      });
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
      });

      _this.setState({
        information_provided_signature_show: _this.state.information_provided_signature
      });
    });

    _defineProperty(_assertThisInitialized(_this), "information_provided_clear", function () {
      _this.information_provided.clear();
    });

    _defineProperty(_assertThisInitialized(_this), "information_providedChange", function (e) {
      _this.setState({
        information_provided_Date: e
      });
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

    _this.state = {
      _method: '',
      id: "",
      position_applied_for: "",
      title: "",
      fore_name: "",
      surname: "",
      email: "",
      telephone_number: '',
      getaddress_id: '',
      address: '',
      postcode: '',
      selected_interview: '',
      disability: '',
      medical_condition: '',
      medical_condition_reasonable: '',
      any_convictions: '',
      any_convictions_yes: '',
      work_permit_uk: '',
      qualifications: '',
      user_cv: null,
      employment_history: [{
        name: '',
        position: '',
        reason_for_leaving: ''
      }],
      employment_references: [{
        company_name: '',
        name: '',
        position: '',
        telephone_no: '',
        email: ''
      }, {
        company_name: '',
        name: '',
        position: '',
        telephone_no: '',
        email: ''
      }],
      unavailable_for_interview: '',
      confirm_employee_name: '',
      confirm_employee_signature: null,
      confirm_employee_signature_show: null,
      confirm_Date: todaydate,
      information_provided_name: '',
      information_provided_signature: null,
      information_provided_signature_show: null,
      information_provided_Date: todaydate,
      chkBasic: false,
      chkCustom: false,
      checkMeSwitch: false,
      showModal: false,
      visible: true,
      formSubmitting: false,
      buttonName: 'Submit'
    }; // preserve the initial state in a new object

    _this.baseState = _this.state;
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          name = _ref2.name,
          email = _ref2.email;

      var emailaddress = email;
      this.setState({
        first_name: name,
        confirm_employee_name: name,
        information_provided_name: name
      });
      this.setState({
        email: emailaddress
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement,
          _React$createElement2;

      var employmenthistoryList = this.state.employment_history.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Tr"], {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Td"], {
          style: {
            padding: '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
          name: "name",
          value: item.name,
          id: index,
          onChange: function onChange(e) {
            return _this2.employment_historyChange(e);
          },
          placeholder: "Company Name",
          required: index != 0 ? true : false,
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Td"], {
          style: {
            padding: '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
          name: "position",
          value: item.position,
          id: index,
          onChange: function onChange(e) {
            return _this2.employment_historyChange(e);
          },
          placeholder: "Position",
          required: index != 0 ? true : false,
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Td"], {
          style: {
            padding: '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
          name: "reason_for_leaving",
          value: item.reason_for_leaving,
          id: index,
          onChange: function onChange(e) {
            return _this2.employment_historyChange(e);
          },
          placeholder: "Reason for leaving",
          required: index != 0 ? true : false,
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Td"], {
          style: {
            padding: '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: "outline-danger",
          style: {
            display: index == 0 ? 'none' : ''
          },
          id: index,
          onClick: function onClick(e) {
            return _this2.employment_historyDelete(e);
          },
          size: "sm"
        }, "X"), index == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: "secondary",
          onClick: _this2.addEmployment,
          size: "sm"
        }, "+Add") : ''));
      });
      var referencesList = this.state.employment_references.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Tr"], {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Td"], {
          style: {
            padding: '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
          name: "company_name",
          value: item.company_name,
          id: index,
          onChange: function onChange(e) {
            return _this2.employment_referencesChange(e);
          },
          placeholder: "Company Name",
          required: index != 1 ? true : false,
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Td"], {
          style: {
            padding: '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
          name: "name",
          value: item.name,
          id: index,
          onChange: function onChange(e) {
            return _this2.employment_referencesChange(e);
          },
          placeholder: "Name",
          required: index != 1 ? true : false,
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Td"], {
          style: {
            padding: '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
          name: "position",
          value: item.position,
          id: index,
          onChange: function onChange(e) {
            return _this2.employment_referencesChange(e);
          },
          placeholder: "Position",
          required: index != 1 ? true : false,
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Td"], {
          style: {
            padding: '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
          name: "telephone_no",
          value: item.telephone_no,
          id: index,
          onChange: function onChange(e) {
            return _this2.employment_referencesChange(e);
          },
          placeholder: "Telephone No",
          required: index != 1 ? true : false,
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Td"], {
          style: {
            padding: '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
          name: "email",
          value: item.email,
          id: index,
          onChange: function onChange(e) {
            return _this2.employment_referencesChange(e);
          },
          placeholder: "Email",
          required: index != 1 ? true : false,
          autoComplete: "off"
        })));
      });
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
      }, "Application Form")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["ValidationForm"], {
        autoComplete: "off",
        id: "formid",
        onSubmit: this.handleSubmit,
        onErrorSubmit: this.handleErrorSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "position_applied_for"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "POSITION APPLIED FOR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "position_applied_for",
        id: "position_applied_for",
        placeholder: "Position applied for",
        required: true,
        value: this.state.position_applied_for,
        onChange: this.handleChange,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "PERSONAL DETAILS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "first_name"
      }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "title",
        id: "title",
        placeholder: "Title",
        required: true,
        value: this.state.title,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "asm_name"
      }, "Forename"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "fore_name",
        id: "fore_name",
        type: "text",
        placeholder: "Forename",
        value: this.state.fore_name,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "surname"
      }, "Surname"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "surname",
        id: "surname",
        placeholder: "Surname",
        value: this.state.surname,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "email"
      }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "email",
        id: "email",
        type: "text",
        placeholder: "Email",
        onChange: this.handleChange,
        required: true,
        value: this.state.email,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "telephone_number"
      }, "Telephone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "telephone_number",
        id: "telephone_number",
        type: "text",
        placeholder: "Telephone Number",
        onChange: this.handleChange,
        required: true,
        value: this.state.telephone_number,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "mobile_number"
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        style: {
          marginBottom: '0px'
        },
        name: "location",
        id: "location",
        type: "text",
        placeholder: "Search Address",
        onChange: this.locationChange,
        autoComplete: "off"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-group",
        id: "addressList",
        style: {
          display: 'none',
          position: 'absolute',
          zIndex: '100',
          height: '600%',
          overflowY: 'overlay'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "mobile_number"
      }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "address",
        id: "address",
        type: "text",
        placeholder: "Address",
        onChange: this.handleChange,
        required: true,
        value: this.state.address,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "mobile_number"
      }, "Postcode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "postcode",
        id: "postcode",
        type: "text",
        placeholder: "Postcode",
        onChange: this.handleChange,
        required: true,
        value: this.state.postcode,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "selected_interview"
      }, "If selected for interview, do you require any reasonable adjustments to be made on account of a disability?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioGroup, {
        name: "selected_interview",
        required: true,
        valueSelected: this.state.selected_interview,
        inline: true,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioItem, {
        id: "selected_interview4",
        label: "YES",
        value: "YES"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioItem, {
        id: "selected_interview5",
        label: "NO",
        value: "NO"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "selected_interview"
      }, "Please tell us if there are any \u2018reasonable adjustments\u2019 we can make to assist you in your application or with our recruitment process\u2026\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "disability",
        id: "disability",
        type: "text",
        placeholder: "",
        onChange: this.handleChange,
        readOnly: this.state.selected_interview == "YES" ? false : true,
        value: this.state.disability,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "selected_interview"
      }, "If selected for interview, do you require any reasonable adjustments to be made on account of a medical condition?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioGroup, {
        name: "medical_condition",
        required: true,
        valueSelected: this.state.medical_condition,
        inline: true,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioItem, {
        id: "medical_condition4",
        label: "YES",
        value: "YES"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioItem, {
        id: "medical_condition5",
        label: "NO",
        value: "NO"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "selected_interview"
      }, "Please tell us if there are any \u2018reasonable adjustments\u2019 we can make to assist you in your application or with our recruitment process\u2026\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "medical_condition_reasonable",
        id: "medical_condition_reasonable",
        type: "text",
        placeholder: "",
        onChange: this.handleChange,
        readOnly: this.state.medical_condition == "YES" ? false : true,
        value: this.state.medical_condition_reasonable,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "selected_interview"
      }, "Have you any convictions that are not spent under the rehabilitation of offenders act?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioGroup, {
        name: "any_convictions",
        required: true,
        valueSelected: this.state.any_convictions,
        inline: true,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioItem, {
        id: "any_convictions4",
        label: "YES",
        value: "YES"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioItem, {
        id: "any_convictions5",
        label: "NO",
        value: "NO"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "any_convictions"
      }, "If Yes, please provide further details:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "any_convictions_yes",
        id: "any_convictions_yes",
        type: "text",
        placeholder: "",
        onChange: this.handleChange,
        readOnly: this.state.any_convictions == "YES" ? false : true,
        value: this.state.any_convictions_yes,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "selected_interview"
      }, "Do you need a work permit to be employed in the UK?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioGroup, {
        name: "work_permit_uk",
        required: true,
        valueSelected: this.state.work_permit_uk,
        inline: true,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioItem, {
        id: "work_permit_uk4",
        label: "YES",
        value: "YES"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["Radio"].RadioItem, {
        id: "work_permit_uk5",
        label: "NO",
        value: "NO"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "QUALIFICATIONS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, (_React$createElement = {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12",
        xs: 12
      }, _defineProperty(_React$createElement, "xs", 12), _defineProperty(_React$createElement, "sm", 12), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "first_name"
      }, "I confirm that I have the minimum required qualifications for the role I am applying for, please specify below:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "qualifications",
        id: "qualifications",
        placeholder: "",
        multiline: true,
        required: true,
        value: this.state.qualifications,
        onChange: this.handleChange,
        rows: "3",
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, (_React$createElement2 = {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "4",
        xs: 12
      }, _defineProperty(_React$createElement2, "xs", 12), _defineProperty(_React$createElement2, "sm", 12), _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "upload_avatar"
      }, "Upload CV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-file"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["FileInput"], {
        name: "user_cv",
        id: "user_cv",
        fileType: ["pdf", "docx", "xlsx", "jpeg", "jpg"] // maxFileSize="10000 kb"
        ,
        errorMessage: {
          required: "Please upload a file",
          fileType: "Only pdf and word file is allowed" // maxFileSize: "Max file size is 10000 kb"

        },
        onChange: this.onUploadCv
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "EMPLOYMENT HISTORY (5YEARS)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Thead"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Tr"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Th"], {
        width: "20%"
      }, "Company Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Th"], {
        width: "30%"
      }, "Position"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Th"], {
        width: "40%"
      }, "Reason for leaving"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Th"], {
        width: "10%"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Tbody"], null, employmenthistoryList)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "REFERENCES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please provide details of two referees, one should be your most recent employer. By providing their details, you consent to us contacting them.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Thead"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Tr"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Th"], {
        width: "20%"
      }, "Company Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Th"], {
        width: "20%"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Th"], {
        width: "20%"
      }, "Position"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Th"], {
        width: "20%"
      }, "Telephone No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Th"], {
        width: "20%"
      }, "Email"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_24__["Tbody"], null, referencesList))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "first_name"
      }, "Please tell us if there are any dates that you would be unavailable for interview\u2026\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "unavailable_for_interview",
        id: "unavailable_for_interview",
        placeholder: "",
        multiline: true,
        required: true,
        value: this.state.unavailable_for_interview,
        onChange: this.handleChange,
        rows: "3",
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, "I confirm that the information I have provided on this form is correct and I accept that providing deliberately false information could result in my dismissal."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "confirm_employee_name"
      }, "Applicant Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "confirm_employee_name",
        id: "confirm_employee_name",
        placeholder: "Employee Name",
        required: true,
        value: this.state.fore_name + " " + this.state.surname,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_signature_canvas__WEBPACK_IMPORTED_MODULE_23___default.a, {
        penColor: "black",
        dotSize: function dotSize() {
          return (_this2.minWidth + _this2.maxWidth) / 5;
        },
        canvasProps: {
          width: 300,
          height: 100,
          className: 'sigCanvas'
        },
        ref: function ref(_ref3) {
          _this2.confirm_employee = _ref3;
        },
        onEnd: this.confirm_employee_trim
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        style: {
          position: 'absolute',
          bottom: '6px'
        },
        onClick: this.confirm_employee_clear
      }, "Clear")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, this.state.confirm_employee_signature_show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.confirm_employee_signature_show
      }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "region"
      }, "Signature Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, {
        closeOnSelect: true,
        onChange: this.confirmChange,
        value: this.state.confirm_Date,
        dateFormat: "D/M/Y",
        timeFormat: false,
        maxDate: new Date(),
        inputProps: {
          required: 'required',
          name: "confirm_Date",
          placeholder: 'Select Date',
          autoComplete: 'off'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "12"
      }, "I hereby give my consent for the contact information provided on this form to be held on computer or other relevant filing systems and to be shared with other accredited organisations or agencies for recruitment opportunities."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "information provided_name"
      }, "Applicant Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        name: "information_provided_name",
        id: "information_provided_name",
        placeholder: "Applicant Name",
        required: true,
        value: this.state.fore_name + " " + this.state.surname,
        onChange: this.handleChange,
        autoComplete: "off"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_signature_canvas__WEBPACK_IMPORTED_MODULE_23___default.a, {
        penColor: "black",
        dotSize: function dotSize() {
          return (_this2.minWidth + _this2.maxWidth) / 5;
        },
        canvasProps: {
          width: 300,
          height: 100,
          className: 'sigCanvas'
        },
        ref: function ref(_ref4) {
          _this2.information_provided = _ref4;
        },
        onEnd: this.information_provided_trim
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        style: {
          position: 'absolute',
          bottom: '6px'
        },
        onClick: this.information_provided_clear
      }, "Clear")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, this.state.information_provided_signature_show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.information_provided_signature_show
      }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        htmlFor: "region"
      }, "Signature Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, {
        closeOnSelect: true,
        onChange: this.information_providedChange,
        value: this.state.information_provided_Date,
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

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var style = {
  rowline: {
    borderBottom: 'solid 1px #f8f9fa',
    marginBottom: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);