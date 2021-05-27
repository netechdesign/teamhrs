(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

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

/***/ "./resources/js/Back-Office/Employee/Tab/Holiday.js":
/*!**********************************************************!*\
  !*** ./resources/js/Back-Office/Employee/Tab/Holiday.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _employee_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../employee.css */ "./resources/js/Back-Office/Employee/employee.css");
/* harmony import */ var _employee_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_employee_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-super-responsive-table/dist/SuperResponsiveTableStyle.css */ "./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css");
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_16__);
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


















window.jQuery = $;
window.$ = $;
global.jQuery = $;
$.DataTable = __webpack_require__(/*! datatables.net-bs */ "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js");

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

var baseurl = window.location.origin;
var ajaxabort;
var oTable = "";

var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

function atable(user_id) {
  var _$$DataTable;

  var tableResponsive = '#data-table-responsive';
  oTable = $(tableResponsive).DataTable((_$$DataTable = {
    "bStateSave": true,
    "processing": true,
    "bPaginate": true,
    "serverSide": true,
    "bProcessing": true,
    "iDisplayLength": 10,
    "bServerSide": true,
    "sAjaxSource": window.location.origin + '/api/holiday'
  }, _defineProperty(_$$DataTable, "bPaginate", true), _defineProperty(_$$DataTable, "fnServerParams", function fnServerParams(aoData) {
    var acolumns = this.fnSettings().aoColumns,
        columns = [];
    $.each(acolumns, function (i, item) {
      columns.push(item.data);
    });
    aoData.push({
      name: 'columns',
      value: columns
    });
    aoData.push({
      name: 'user_id',
      value: user_id
    });

    if ($('input[name="role_name"]').val() != '') {
      aoData.push({
        name: 'role_name',
        value: $('input[name="role_name"]').val()
      });
    }
    /*  if($('#status').val()!='') {
          aoData.push({name: 'is_active', value: $('#status').val()});
      }
    */

  }), _defineProperty(_$$DataTable, "columns", [{
    "data": "from_date"
  }, {
    "data": "to_date"
  }, {
    "data": "time_off"
  }, {
    "data": "notes"
  }, {
    "data": "id"
  }]), _defineProperty(_$$DataTable, "responsive", {
    responsive: {
      details: {
        display: $.fn.dataTable.Responsive.display.childRowImmediate,
        type: ''
      }
    }
  }), _defineProperty(_$$DataTable, "order", [[0, "desc"]]), _defineProperty(_$$DataTable, "lengthMenu", [[5, 10, 25, 50, 100], [5, 10, 25, 50, 100]]), _defineProperty(_$$DataTable, "oLanguage", {
    "sLengthMenu": "_MENU_",
    "oPaginate": {
      "sNext": '<span aria-hidden="true">»</span>',
      "sPrevious": '<span aria-hidden="true">«</span>'
    } // sProcessing: "<img width='33px' src='"+BASE_URL+"assets/layouts/layout/img/ajax-loading.gif'>"

  }), _defineProperty(_$$DataTable, "fnInitComplete", function fnInitComplete() {//oTable.fnAdjustColumnSizing();
  }), _defineProperty(_$$DataTable, 'fnServerData', function fnServerData(sSource, aoData, fnCallback) {
    $.ajax({
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
    $('body').css('min-height', $('#data-table-responsive tr').length * 50 + 200);
    $(window).trigger('resize');
  }), _defineProperty(_$$DataTable, "columnDefs", [{
    "render": function render(data, type, row) {
      var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="' + row.id + '" ><i style="margin:0px !important;" class="feather icon-edit"></i></button><button type="button" class="deletefile btn btn-danger btn-sm" data-id="' + row.id + '" ><i style="margin:0px !important;" class="feather icon-x"></button>';
      return [str_buttons].join('');
    },
    "targets": $('#data-table-responsive th#action').index(),
    "orderable": false,
    "searchable": false
  }, {
    "targets": 0,
    "orderable": false
  }]), _$$DataTable));
}

var Holiday = /*#__PURE__*/function (_React$Component) {
  _inherits(Holiday, _React$Component);

  var _super = _createSuper(Holiday);

  function Holiday() {
    var _this;

    _classCallCheck(this, Holiday);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      apiload: false,
      employee_details: [],
      userId: ''
    });

    return _this;
  }

  _createClass(Holiday, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          name = _ref2.name,
          email = _ref2.email;

      if (this.props.location.state.userId) {
        atable(this.props.location.state.userId);
        this.setState({
          userId: this.props.location.state.userId
        });
      }

      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      var self = this;
      $('#data-table-responsive tbody').on('click', '.edit', function () {
        var id = $(this).attr('data-id');
        history.push('/employee-Detail/Holiday/edit/' + id);
      }); //Delete

      $('#data-table-responsive tbody').on('click', '.deletefile', function () {
        var id = $(this).attr('data-id');
        var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_14___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a);
        var Permission = 0; //CheckPermission('File','Delete Uploaded Data',history,false);

        if (Permission == 1) {
          return false;
        }

        MySwal.fire({
          title: 'Are you sure?',
          // text: 'Once deleted, you will not be able to recover this data!',
          type: 'warning',
          showCloseButton: true,
          showCancelButton: true
        }).then(function (willDelete) {
          if (willDelete.value) {
            var _ref3 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
                _auth_token = _ref3.auth_token;

            var _baseurl = window.location.origin;
            axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_baseurl + '/api/holiday/' + id, {
              _method: 'delete'
            }, {
              headers: {
                'Authorization': 'Bearer ' + _auth_token
              }
            }).then(function (res) {
              if (res.data.success) {
                oTable.draw();
                return MySwal.fire('', 'Holiday has been deleted!', 'success');
              }
            });
          } else {// return MySwal.fire('', 'Your imaginary file is safe!', 'error');
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-more-vertical"
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        style: {
          padding: '0px 10px',
          borderLeft: 'solid 2px #04a9f5'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 10,
        xl: 10,
        style: {
          paddingTop: '15px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Holiday")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 2,
        xl: 2,
        style: {
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
        alignRight: true,
        style: {
          "float": 'right',
          border: 'none'
        },
        title: title,
        variant: 'outline-secondary',
        id: "dropdown-variants-secondary",
        key: 'secondary',
        className: "drp-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
        eventKey: "1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: {
          pathname: '/employee-Detail/Holiday/Add',
          state: {
            userId: this.state.userId
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "feather icon-plus"
      }), " Add"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "row view-basic-card "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        className: "table table-condensed",
        id: "data-table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "from_date"
      }, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "to_date"
      }, "To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "time_off"
      }, "time_off"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "notes"
      }, "notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "from_date"
      }, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "to_date"
      }, "To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "time_off"
      }, "Time Off"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "notes"
      }, "notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action")))))));
    }
  }]);

  return Holiday;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var style = {
  rowline: {
    borderBottom: 'solid 1px #f8f9fa',
    marginBottom: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Holiday);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);