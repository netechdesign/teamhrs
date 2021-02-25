(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
        history.goBack();
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

/***/ }),

/***/ "./resources/js/employee/ApplicationForm/List.js":
/*!*******************************************************!*\
  !*** ./resources/js/employee/ApplicationForm/List.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var _HttpFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../HttpFunctions */ "./resources/js/HttpFunctions.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-super-responsive-table */ "./node_modules/react-super-responsive-table/dist/index.js");
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-super-responsive-table/dist/SuperResponsiveTableStyle.css */ "./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css");
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_17__);
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



















window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;
jquery__WEBPACK_IMPORTED_MODULE_5___default.a.DataTable = __webpack_require__(/*! datatables.net-bs */ "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js");

__webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js"); //require('pdfmake/build/pdfmake.js');
//require('pdfmake/build/vfs_fonts.js');


__webpack_require__(/*! datatables.net-autofill */ "./node_modules/datatables.net-autofill/js/dataTables.autoFill.js");

__webpack_require__(/*! datatables.net-buttons-bs */ "./node_modules/datatables.net-buttons-bs/js/buttons.bootstrap.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.colVis.js */ "./node_modules/datatables.net-buttons/js/buttons.colVis.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.flash.js */ "./node_modules/datatables.net-buttons/js/buttons.flash.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.html5.js */ "./node_modules/datatables.net-buttons/js/buttons.html5.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.print.js */ "./node_modules/datatables.net-buttons/js/buttons.print.js");

__webpack_require__(/*! datatables.net-colreorder */ "./node_modules/datatables.net-colreorder/js/dataTables.colReorder.js");

__webpack_require__(/*! datatables.net-keytable */ "./node_modules/datatables.net-keytable/js/dataTables.keyTable.js");

__webpack_require__(/*! datatables.net-responsive-bs */ "./node_modules/datatables.net-responsive-bs/js/responsive.bootstrap.js");

__webpack_require__(/*! datatables.net-rowgroup */ "./node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.js");

__webpack_require__(/*! datatables.net-rowreorder */ "./node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.js");

__webpack_require__(/*! datatables.net-scroller */ "./node_modules/datatables.net-scroller/js/dataTables.scroller.js");

__webpack_require__(/*! datatables.net-select */ "./node_modules/datatables.net-select/js/dataTables.select.js");

__webpack_require__(/*! datatables.net-fixedcolumns */ "./node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.js");

__webpack_require__(/*! datatables.net-fixedheader */ "./node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.js");

var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

function telephoneQuestionsAlert(id) {
  var message = "Telephone pre answers save successfully";
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__["default"].success({
    title: 'Success',
    text: message,
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {});
}

function request_certificationAlert(id) {
  var message = "Certificate request send successfully";
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__["default"].success({
    title: 'Success',
    text: message,
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {});
}

var oTable = "";

function atable() {
  var _$$DataTable;

  var tableResponsive = '#data-table-responsive';
  oTable = jquery__WEBPACK_IMPORTED_MODULE_5___default()(tableResponsive).DataTable((_$$DataTable = {
    "bStateSave": true,
    "processing": true,
    "bPaginate": true,
    "serverSide": true,
    "bProcessing": true,
    "iDisplayLength": 10,
    "bServerSide": true,
    "sAjaxSource": window.location.origin + '/api/application_form'
  }, _defineProperty(_$$DataTable, "bPaginate", true), _defineProperty(_$$DataTable, "fnServerParams", function fnServerParams(aoData) {
    var acolumns = this.fnSettings().aoColumns,
        columns = [];
    jquery__WEBPACK_IMPORTED_MODULE_5___default.a.each(acolumns, function (i, item) {
      columns.push(item.data);
    });
    aoData.push({
      name: 'columns',
      value: columns
    });

    if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('input[name="role_name"]').val() != '') {
      aoData.push({
        name: 'role_name',
        value: jquery__WEBPACK_IMPORTED_MODULE_5___default()('input[name="role_name"]').val()
      });
    }
    /*  if($('#status').val()!='') {
          aoData.push({name: 'is_active', value: $('#status').val()});
      }
    */

  }), _defineProperty(_$$DataTable, "columns", [{
    "data": "created_at_date"
  }, {
    "data": "position_applied_for"
  }, {
    "data": "information_provided_name"
  }, {
    "data": "email"
  }, {
    "data": "telephone_number"
  }, {
    "data": "id"
  }]), _defineProperty(_$$DataTable, "responsive", {
    responsive: {
      details: {
        display: jquery__WEBPACK_IMPORTED_MODULE_5___default.a.fn.dataTable.Responsive.display.childRowImmediate,
        type: ''
      }
    }
  }), _defineProperty(_$$DataTable, "order", [[0, "desc"]]), _defineProperty(_$$DataTable, "lengthMenu", [[10, 25, 50, 100], [10, 25, 50, 100]]), _defineProperty(_$$DataTable, "oLanguage", {
    "sLengthMenu": "_MENU_",
    "oPaginate": {
      "sNext": '<span aria-hidden="true">»</span>',
      "sPrevious": '<span aria-hidden="true">«</span>'
    } // sProcessing: "<img width='33px' src='"+BASE_URL+"assets/layouts/layout/img/ajax-loading.gif'>"

  }), _defineProperty(_$$DataTable, "fnInitComplete", function fnInitComplete() {//oTable.fnAdjustColumnSizing();
  }), _defineProperty(_$$DataTable, 'fnServerData', function fnServerData(sSource, aoData, fnCallback) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
      'dataType': 'json',
      'type': 'GET',
      'url': sSource,
      'data': aoData,
      'headers': {
        Authorization: "Bearer " + auth_token
      },
      'success': fnCallback
    });
  }), _defineProperty(_$$DataTable, "fnDrawCallback", function fnDrawCallback() {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').css('min-height', jquery__WEBPACK_IMPORTED_MODULE_5___default()('#data-table-responsive tr').length * 50 + 200);
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).trigger('resize');
  }), _defineProperty(_$$DataTable, "columnDefs", [{
    "render": function render(data, type, row) {
      var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="' + row.id + '" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';

      if (row.is_viewed == 1) {
        str_buttons += '<span class="label label-danger is_viewed' + row.id + '" style="font-size: 8px;">NEW</span>';
      }

      if (row.is_ts_done == 1) {
        str_buttons += '<span class="label label-danger is_ts_done' + row.id + '" style="font-size: 8px;">TS PENDING</span>';
      }

      return [str_buttons].join('');
    },
    "targets": jquery__WEBPACK_IMPORTED_MODULE_5___default()('#data-table-responsive th#action').index(),
    "orderable": false,
    "searchable": false
  }, {
    "targets": 0,
    "orderable": false
  }]), _$$DataTable));
}

var baseurl = window.location.origin;

var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper(List);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleCheckboxChange", function (e, value) {
      _this.setState(_defineProperty({}, e.target.name, value));

      if (e.target.name == 'is_other_documents') {
        if (value) {
          var other_documents = {
            document_name: ''
          };

          _this.setState({
            other_documents: [other_documents]
          });
        } else {
          _this.setState({
            other_documents: []
          });
        }
      }
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
        var other_documents = _this.state.other_documents;
        other_documents.splice(index, 1);

        _this.setState({
          other_documents: other_documents
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "document_nameChange", function (element) {
      var index = element.target.id;

      if (element.target.name == 'document_name') {
        _this.state.other_documents[index].document_name = element.target.value;
      }

      _this.setState({
        other_documents: _this.state.other_documents
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applicationShow", function (application_id) {
      _this.setState({
        isLarge: true,
        apiload: true,
        application_Forms: [],
        key: 'home',
        suitability_offered_for: '',
        suitability_offered_comments: '',
        other_documents: [],
        cma_1: false,
        met_1: false,
        single_phase: false,
        single_off_multi: false,
        driving_licence_code: false,
        is_other_documents: false
      });

      var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          auth_token = _ref2.auth_token;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(baseurl + '/api/application_form/' + application_id, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          _this.setState({
            application_Forms: res.data.application_data,
            apiload: false
          });

          if (res.data.application_data.telephone_pre_answers) {
            _this.setState({
              formSubmitting: res.data.application_data.telephone_pre_answers.length > 0 ? true : false,
              certification: res.data.application_data.telephone_pre_answers.length > 0 ? false : true,
              certificationButton: res.data.application_data.telephone_pre_answers.length > 0 ? false : true
            });

            res.data.application_data.telephone_pre_answers.filter(function (vl) {
              if (vl.telephone_pre_questions == 'suitability_offered_for') {
                _this.setState({
                  suitability_offered_for: vl.telephone_pre_answers
                });
              }

              if (vl.telephone_pre_questions == 'suitability_offered_comments') {
                _this.setState({
                  suitability_offered_comments: vl.telephone_pre_answers
                });
              }
            });
          }
        } else {
          var errorMassage = '';

          if (res.data.errors) {
            errorMassage = res.data.errors.name;
          } else {
            errorMassage = res.data.email;
          }
        }
      })["catch"](function (err) {
        console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "tabSelect", function (key) {
      _this.setState({
        key: key
      });

      if (key === 'telephone') {
        _this.setState({
          telephone_questions: []
        });

        var _ref3 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
            _auth_token = _ref3.auth_token;

        _this.setState({
          apiload: true
        });

        axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(baseurl + '/api/telephone_questions', {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + _auth_token
          }
        }).then(function (res) {
          if (res.data.success) {
            _this.setState({
              telephone_questions: res.data.data,
              apiload: false
            });
          }
        })["catch"](function (err) {
          console.log(err);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "telephoneQuestionsSubmit", function (e, formData, inputs) {
      e.preventDefault();

      _this.setState({
        formSubmitting: true,
        apiload: true
      });

      _this.setState({
        buttonName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "spinner-grow spinner-grow-sm mr-1",
          role: "status"
        }), "Loading")
      });

      var _ref4 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          id = _ref4.id,
          auth_token = _ref4.auth_token; //const data = new FormData()
      //data.append('name', this.state.name);


      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(baseurl + '/api/telephone_pre_answers', _this.state, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          telephoneQuestionsAlert();

          _this.setState({
            key: 'home'
          }); // console.log(res.data.data);


          _this.setState({
            formSubmitting: false,
            apiload: false,
            certification: false
          });

          if (_this.state.application_Forms.id) {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('.is_ts_done' + _this.state.application_Forms.id).hide();

            _this.applicationShow(_this.state.application_Forms.id);
          }

          _this.setState({
            buttonName: 'Save'
          });
        } else {
          var errorMassage = '';

          if (res.data.errors) {
            errorMassage = res.data.errors.name;
          } else {
            errorMassage = res.data.email;
          }

          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__["default"].error({
            title: "System Error",
            text: errorMassage
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Save'
          });
        }
      })["catch"](function (err) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__["default"].error({
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

    _defineProperty(_assertThisInitialized(_this), "telephoneQuestionsChange", function (element) {
      var index = element.target.id;
      _this.state.telephone_questions[index].temperory_comment = element.target.value;

      _this.setState({
        telephone_questions: _this.state.telephone_questions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checktelephoneAnswers", function (row) {
      if (_this.state.application_Forms.telephone_pre_answers) {
        var chdata = _this.state.application_Forms.telephone_pre_answers.filter(function (vl) {
          if (vl.telephone_pre_questions_id == row.id) {
            row.temperory_comment = vl.telephone_pre_answers;
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "submitProofCertification", function (e) {
      e.preventDefault();

      _this.setState({
        certificationButton: true,
        apiload: true
      });

      var _ref5 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          id = _ref5.id,
          auth_token = _ref5.auth_token; //const data = new FormData()
      //data.append('name', this.state.name);


      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(baseurl + '/api/request_certification', _this.state, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          request_certificationAlert();

          _this.setState({
            key: 'home'
          }); // console.log(res.data.data);


          if (_this.state.application_Forms.id) {
            _this.applicationShow(_this.state.application_Forms.id);
          }
        } else {
          var errorMassage = '';

          if (res.data.errors) {
            errorMassage = res.data.errors.name;
          } else {
            errorMassage = res.data.email;
          }

          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__["default"].error({
            title: "System Error",
            text: errorMassage
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Save'
          });
        }
      })["catch"](function (err) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__["default"].error({
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

    _defineProperty(_assertThisInitialized(_this), "submitOtherProofCertification", function (e) {
      e.preventDefault();

      _this.setState({
        certificationButton: true,
        apiload: true
      });

      var _ref6 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          id = _ref6.id,
          auth_token = _ref6.auth_token; //const data = new FormData()
      //data.append('name', this.state.name);


      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(baseurl + '/api/request_other_certification', _this.state, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          request_certificationAlert();

          _this.setState({
            key: 'home'
          }); // console.log(res.data.data);


          if (_this.state.application_Forms.id) {
            _this.applicationShow(_this.state.application_Forms.id);
          }
        } else {
          var errorMassage = '';

          if (res.data.errors) {
            errorMassage = res.data.errors.name;
          } else {
            errorMassage = res.data.email;
          }

          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__["default"].error({
            title: "System Error",
            text: errorMassage
          });

          _this.setState({
            formSubmitting: false
          });

          _this.setState({
            buttonName: 'Save'
          });
        }
      })["catch"](function (err) {
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__["default"].error({
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

    _defineProperty(_assertThisInitialized(_this), "documentResend", function () {
      _this.setState({
        key: 'resendrequest'
      });
    });

    _this.state = {
      isLarge: false,
      apiload: false,
      application_Forms: [],
      telephone_questions: [],
      suitability_offered_for: '',
      suitability_offered_comments: '',
      formSubmitting: false,
      buttonName: 'Save',
      key: 'home',
      certification: true,
      certificationButton: false,
      other_documents: [],
      cma_1: false,
      met_1: false,
      single_phase: false,
      single_off_multi: false,
      driving_licence_code: false,
      is_other_documents: false
    };
    return _this;
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* test */
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      Object(_HttpFunctions__WEBPACK_IMPORTED_MODULE_4__["CheckPermission"])('user', 'show', history);
      atable();
      var self = this;
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#data-table-responsive tbody').on('click', '.edit', function () {
        var id = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('data-id');
        self.applicationShow(id);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('.is_viewed' + id).hide(); // history.push('/application/edit/'+id);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      var telephone_questions = this.state.telephone_questions.length > 0 ? this.state.telephone_questions.map(function (vl, inx) {
        _this2.checktelephoneAnswers(vl);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
          style: style.rowline
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
          md: "12"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
          style: style.title,
          htmlFor: "first_name"
        }, vl.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, "Comments:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["TextInput"], {
          name: "temperory_comment",
          id: inx,
          placeholder: "",
          multiline: true,
          required: true,
          value: vl.temperory_comment,
          onChange: function onChange(e) {
            return _this2.telephoneQuestionsChange(e);
          },
          rows: "3",
          autoComplete: "off"
        })));
      }) : "";
      var other_documents = this.state.other_documents.length > 0 ? this.state.other_documents.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
          md: "6"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["TextInput"], {
          name: "document_name",
          value: item.document_name,
          id: index,
          onChange: function onChange(e) {
            return _this2.document_nameChange(e);
          },
          placeholder: "Document Name",
          required: true,
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
          md: "2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "outline-danger",
          style: {
            display: index == 0 ? 'none' : ''
          },
          id: index,
          onClick: function onClick(e) {
            return _this2.other_documentDelete(e);
          },
          size: "sm"
        }, "X"), index == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "secondary",
          onClick: _this2.addOtherdocuments,
          size: "sm"
        }, "+Add") : ''));
      }) : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        size: "xl",
        show: this.state.isLarge,
        onHide: function onHide() {
          return _this2.setState({
            isLarge: false
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        closeButton: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
        as: "h5"
      }, this.state.application_Forms.fore_name, " ", this.state.application_Forms.surname != '' ? this.state.application_Forms.surname : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
        defaultActiveKey: "home",
        activeKey: this.state.key,
        onSelect: this.tabSelect
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        eventKey: "home",
        title: "Application"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "text-center",
        style: {
          display: this.state.apiload ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "spinner-border",
        role: "status"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "sr-only"
      }, "Loading..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: this.state.apiload ? 'none' : '',
          color: 'black'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-2",
        style: style.title
      }, "Created at:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-10"
      }, this.state.application_Forms.created_at_date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px',
          background: '#f7f7f7'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-2",
        style: style.title
      }, "Position applied for:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-10"
      }, this.state.application_Forms.position_applied_for)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-2",
        style: style.title
      }, "Title:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-10"
      }, this.state.application_Forms.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px',
          background: '#f7f7f7'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-2",
        style: style.title
      }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-10"
      }, this.state.application_Forms.fore_name, " ", this.state.application_Forms.surname != '' ? this.state.application_Forms.surname : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-2",
        style: style.title
      }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-10"
      }, this.state.application_Forms.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px',
          background: '#f7f7f7'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-2",
        style: style.title
      }, "Telephone Number:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-10"
      }, this.state.application_Forms.telephone_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-2",
        style: style.title
      }, "Address:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-10"
      }, this.state.application_Forms.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px',
          background: '#f7f7f7'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-10",
        style: style.title
      }, "If selected for interview, do you require any reasonable adjustments to be made on account of a disability?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-2"
      }, this.state.application_Forms.selected_interview), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        style: {
          display: this.state.application_Forms.selected_interview != 'YES' ? 'none' : ''
        },
        className: "col-sm-10"
      }, "Please tell us if there are any \u2018reasonable adjustments\u2019 we can make to assist you in your application or with our recruitment process\u2026\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        style: {
          display: this.state.application_Forms.selected_interview != 'YES' ? 'none' : ''
        },
        className: "col-sm-10"
      }, this.state.application_Forms.disability)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-10",
        style: style.title
      }, "If selected for interview, do you require any reasonable adjustments to be made on account of a medical condition?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-2"
      }, this.state.application_Forms.medical_condition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        style: {
          display: this.state.application_Forms.medical_condition != 'YES' ? 'none' : ''
        },
        className: "col-sm-10"
      }, "Please tell us if there are any \u2018reasonable adjustments\u2019 we can make to assist you in your application or with our recruitment process\u2026\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        style: {
          display: this.state.application_Forms.medical_condition != 'YES' ? 'none' : ''
        },
        className: "col-sm-10"
      }, this.state.application_Forms.medical_condition_reasonable)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px',
          background: '#f7f7f7'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-10",
        style: style.title
      }, "Have you any convictions that are not spent under the rehabilitation of offenders act?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-2"
      }, this.state.application_Forms.any_convictions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        style: {
          display: this.state.application_Forms.any_convictions != 'YES' ? 'none' : ''
        },
        className: "col-sm-10"
      }, "If Yes, please provide further details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        style: {
          display: this.state.application_Forms.any_convictions != 'YES' ? 'none' : ''
        },
        className: "col-sm-2"
      }, this.state.application_Forms.any_convictions_yes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-10",
        style: style.title
      }, "Do you need a work permit to be employed in the UK? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-2"
      }, this.state.application_Forms.work_permit_uk)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px',
          background: '#f7f7f7'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-12",
        style: style.title
      }, "I confirm that I have the minimum required qualifications for the role I am applying for, please specify below"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-12"
      }, this.state.application_Forms.qualifications), this.state.application_Forms.is_cv_attached ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: baseurl + '/uploaded/' + this.state.application_Forms.cv_path
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "feather icon-file-text"
      }), " view cv")) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-12",
        style: {
          lineHeight: '2.5',
          paddingLeft: '10px',
          background: '#dcebf3'
        }
      }, "Employment history"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmploymentHistory, {
        employment_history: this.state.application_Forms.employment_historys
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-12",
        style: {
          lineHeight: '2.5',
          paddingLeft: '10px',
          background: '#dcebf3'
        }
      }, "References"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmploymentReferences, {
        employment_references: this.state.application_Forms.employment_references
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
        style: {
          marginBottom: '0',
          paddingTop: '5px'
        },
        className: "dl-horizontal row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
        className: "col-sm-12",
        style: style.title
      }, "Please tell us if there are any dates that you would be unavailable for interview\u2026\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
        className: "col-sm-12"
      }, this.state.application_Forms.unavailable_for_interview)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        eventKey: "telephone",
        title: "Telephone Pre-Screen Questions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "text-center",
        style: {
          display: this.state.apiload ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "spinner-border",
        role: "status"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "sr-only"
      }, "Loading..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["ValidationForm"], {
        onSubmit: this.telephoneQuestionsSubmit,
        onErrorSubmit: this.handleErrorSubmit
      }, telephone_questions, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        style: {
          display: this.state.apiload ? 'none' : 'block'
        },
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        htmlFor: "custom"
      }, "Suitability to be offered employment:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style.title,
        className: "custom-controls-stacked radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Radio"].RadioGroup, {
        name: "suitability_offered_for",
        required: true,
        valueSelected: this.state.suitability_offered_for,
        inline: false,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Radio"].RadioItem, {
        id: "radio1",
        label: "The applicant is not suited to this job. I would not recommend for employment.",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Radio"].RadioItem, {
        id: "radio2",
        label: "The applicant might do well in this job but I cannot recommend without reservations.",
        value: "2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Radio"].RadioItem, {
        id: "radio3",
        label: "The applicant should do well in this job and I would recommend for an interview.",
        value: "3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Radio"].RadioItem, {
        id: "radio4",
        label: "The applicant should be excellent in this job and I would recommend with confidence. Interview to be arranged.",
        value: "4"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        style: {
          display: this.state.apiload ? 'none' : 'block'
        },
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, "Comments:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["TextInput"], {
        name: "suitability_offered_comments",
        id: "suitability_offered_comments",
        placeholder: "",
        multiline: true,
        required: true,
        value: this.state.suitability_offered_comments,
        onChange: this.handleChange,
        rows: "3",
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        style: {
          display: this.state.apiload ? 'none' : 'block'
        },
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        sm: 12,
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: this.state.formSubmitting,
        type: "submit"
      }, " ", this.state.buttonName))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        eventKey: "certification",
        disabled: this.state.certification,
        title: "Certification"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "text-center",
        style: {
          display: this.state.apiload ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "spinner-border",
        role: "status"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "sr-only"
      }, "Loading..."))), this.state.application_Forms.documents ? this.state.application_Forms.documents.length == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["ValidationForm"], {
        onSubmit: this.submitProofCertification,
        onErrorSubmit: this.handleErrorSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        sm: 12,
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, "Request to submit proof of certification to candidate \xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: this.state.certificationButton,
        type: "submit"
      }, " ", this.state.application_Forms.is_document_request == 1 ? 'Send' : 'Re-Send')))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DocumentsList, {
        resendClick: this.documentResend,
        documents_list: this.state.application_Forms.documents
      }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        eventKey: "resendrequest",
        tabClassName: "d-none",
        disabled: this.state.certification,
        title: "resendrequest"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "text-center",
        style: {
          display: this.state.apiload ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "spinner-border",
        role: "status"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "sr-only"
      }, "Loading..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["ValidationForm"], {
        onSubmit: this.submitOtherProofCertification,
        onErrorSubmit: this.handleErrorSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, (_React$createElement = {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
        style: {
          width: '100%',
          marginBottom: '0rem'
        }
      }, _defineProperty(_React$createElement, "as", react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"]), _defineProperty(_React$createElement, "sm", 12), _defineProperty(_React$createElement, "className", "mt-3"), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        column: true,
        sm: 2
      }, "Certificates:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 10
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
        name: "cma_1",
        label: "CMA 1",
        id: "cma_1",
        value: this.state.cma_1,
        onChange: this.handleCheckboxChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
        name: "met_1",
        label: "MET 1",
        id: "met_1",
        value: this.state.met_1,
        onChange: this.handleCheckboxChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
        name: "single_phase",
        label: "Single Phase",
        id: "single_phase",
        value: this.state.single_phase,
        onChange: this.handleCheckboxChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
        name: "single_off_multi",
        label: "single off multi",
        id: "single_off_multi",
        value: this.state.single_off_multi,
        onChange: this.handleCheckboxChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
        name: "driving_licence_code",
        label: "Driving licence code",
        id: "driving_licence_code",
        value: this.state.driving_licence_code,
        onChange: this.handleCheckboxChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
        name: "is_other_documents",
        label: "Other",
        id: "Other_documents",
        value: this.state.is_other_documents,
        onChange: this.handleCheckboxChange
      }))))), other_documents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
        sm: 12,
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: this.state.certificationButton,
        type: "submit"
      }, "Send")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
        as: "h5"
      }, "Applications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        className: "table table-condensed",
        id: "data-table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "created_at_date"
      }, "Created at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "position_applied_for"
      }, "Position applied for"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "information_provided_name"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "email"
      }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "telephone_number"
      }, "Telephone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "created_at_date"
      }, "Created at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "position_applied_for"
      }, "Position applied for"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "information_provided_name"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "email"
      }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "telephone_number"
      }, "Telephone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action")))))))));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var DocumentsList = /*#__PURE__*/function (_React$Component2) {
  _inherits(DocumentsList, _React$Component2);

  var _super2 = _createSuper(DocumentsList);

  function DocumentsList() {
    var _this3;

    _classCallCheck(this, DocumentsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "dateFormate", function (e) {
      var today = new Date(e);
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var hrs = today.getHours();
      var mint = today.getMinutes();
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      return dd + '/' + mm + '/' + yyyy + ' ' + hrs + ':' + mint;
    });

    return _this3;
  }

  _createClass(DocumentsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.documents_list) {
        if (this.props.documents_list.length > 0) {
          var documents_List = this.props.documents_list.map(function (item, index) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tr"], {
              key: index,
              style: {
                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                borderTop: '1px solid rgba(0, 0, 0, 0.125)'
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
              style: {
                padding: '5px'
              }
            }, item.document_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
              style: {
                padding: '5px'
              }
            }, _this4.dateFormate(item.created_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
              style: {
                padding: '5px'
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              target: "_blank",
              href: baseurl + '/uploaded/' + item.document_path
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              "class": "feather icon-file-text"
            }), " view")));
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            onClick: this.props.resendClick,
            type: "button"
          }, "Re-Send"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tbody"], null, documents_List)));
        }
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "documents_list"));
      }
    }
  }]);

  return DocumentsList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var EmploymentHistory = /*#__PURE__*/function (_React$Component3) {
  _inherits(EmploymentHistory, _React$Component3);

  var _super3 = _createSuper(EmploymentHistory);

  function EmploymentHistory() {
    _classCallCheck(this, EmploymentHistory);

    return _super3.apply(this, arguments);
  }

  _createClass(EmploymentHistory, [{
    key: "render",
    value: function render() {
      if (this.props.employment_history) {
        if (this.props.employment_history.length > 0) {
          var employmenthistoryList = this.props.employment_history.map(function (item, index) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tr"], {
              key: index,
              style: {
                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                borderTop: '1px solid rgba(0, 0, 0, 0.125)'
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
              style: {
                padding: '5px'
              }
            }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
              style: {
                padding: '5px'
              }
            }, item.position), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
              style: {
                padding: '5px'
              }
            }, item.reason_for_leaving));
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Thead"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tr"], {
            style: {
              lineHeight: 2.5
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], {
            width: "20%"
          }, "Company Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], {
            width: "30%"
          }, "Position"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], {
            width: "40%"
          }, "Reason for leaving"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tbody"], null, employmenthistoryList)));
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tbody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tr"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], null, "Record not found.")))));
        }
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Employment history"));
      }
    }
  }]);

  return EmploymentHistory;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var EmploymentReferences = /*#__PURE__*/function (_React$Component4) {
  _inherits(EmploymentReferences, _React$Component4);

  var _super4 = _createSuper(EmploymentReferences);

  function EmploymentReferences() {
    _classCallCheck(this, EmploymentReferences);

    return _super4.apply(this, arguments);
  }

  _createClass(EmploymentReferences, [{
    key: "render",
    value: function render() {
      if (this.props.employment_references) {
        if (this.props.employment_references.length > 0) {
          var employment_referencesList = this.props.employment_references.map(function (item, index) {
            if (item.company_name != '') {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tr"], {
                key: index,
                style: {
                  borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                  borderTop: '1px solid rgba(0, 0, 0, 0.125)'
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
                style: {
                  padding: '5px'
                }
              }, item.company_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
                style: {
                  padding: '5px'
                }
              }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
                style: {
                  padding: '5px'
                }
              }, item.position), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
                style: {
                  padding: '5px'
                }
              }, item.telephone_no), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Td"], {
                style: {
                  padding: '5px'
                }
              }, item.email));
            }
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Thead"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tr"], {
            style: {
              lineHeight: 2.5
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], {
            width: "20%"
          }, "Company Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], {
            width: "20%"
          }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], {
            width: "20%"
          }, "Position"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], {
            width: "20%"
          }, "Telephone No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], {
            width: "20%"
          }, "Email"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tbody"], null, employment_referencesList)));
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tbody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Tr"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_16__["Th"], null, "Record not found.")))));
        }
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Employment history"));
      }
    }
  }]);

  return EmploymentReferences;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var style = {
  title: {
    color: '#215f75'
  },
  rowline: {
    borderBottom: '1px dotted hsl(216deg 70% 86% / 60%)'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (List);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);