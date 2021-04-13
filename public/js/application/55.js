(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./resources/js/Back-Office/Employee/Tab/Documents.js":
/*!************************************************************!*\
  !*** ./resources/js/Back-Office/Employee/Tab/Documents.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_13__);
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















var baseurl = window.location.origin;
var ajaxabort;

var Documents = /*#__PURE__*/function (_React$Component) {
  _inherits(Documents, _React$Component);

  var _super = _createSuper(Documents);

  function Documents() {
    var _this;

    _classCallCheck(this, Documents);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      apiload: true,
      Documents: [],
      proof_of_identifications: ''
    });

    _defineProperty(_assertThisInitialized(_this), "alreadyAdded", function (id) {
      _this.setState({
        buttonName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "spinner-grow spinner-grow-sm mr-1",
          role: "status"
        }), "Loading")
      });

      var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          auth_token = _ref.auth_token;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(baseurl + '/api/documents', {
        params: {
          user_id: id
        },
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          // this.getAddress(res.data.Employee_details.getaddress_id);
          var _Documents2 = res.data.Documents; // let proof_of_identifications = res.data.Proof_of_identifications;

          _this.setState({
            Documents: _Documents2
          }); //this.setState({proof_of_identifications:proof_of_identifications});


          _this.setState({
            apiload: false
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

    return _this;
  }

  _createClass(Documents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          name = _ref2.name,
          email = _ref2.email;

      if (this.props.location.state) {
        this.alreadyAdded(this.props.location.state.userId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-more-vertical"
      });
      var re = /(?:\.([^.]+))?$/;
      var document = this.state.Documents.length > 0 ? this.state.Documents.map(function (item, index) {
        var ext = re.exec(item.document_path)[1];

        if (ext == 'pdf') {
          ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            "class": "fa fa-file-pdf-o"
          });
        } else if (ext == 'jpeg') {
          ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            "class": "fa fa-file-photo-o"
          });
        } else if (ext == 'xlsx') {
          ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            "class": "fa fa-file-excel-o"
          });
        } else if (ext == 'docx') {
          ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            "class": "fa fa-file-word-o"
          });
        } else {
          ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            "class": "fa fa-file-text-o"
          });
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, ext), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, item.document_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: "btn-sm",
          style: {
            width: '20%',
            padding: '5px 0px'
          },
          variant: "secondary"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          style: {
            marginRight: '0px'
          },
          "class": "fa fa-eye"
        }))));
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Document not found"));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Documents")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
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
      }, "Edit")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        "class": "row view-basic-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "col-12 col-md-12 col-lg-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        className: "table table-condensed",
        id: "data-table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, document))))));
    }
  }]);

  return Documents;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var style = {
  rowline: {
    borderBottom: 'solid 1px #f8f9fa',
    marginBottom: '15px'
  }
};

var Proofofidentification = /*#__PURE__*/function (_React$Component2) {
  _inherits(Proofofidentification, _React$Component2);

  var _super2 = _createSuper(Proofofidentification);

  function Proofofidentification() {
    var _this2;

    _classCallCheck(this, Proofofidentification);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "getExt", function (document_path) {
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(document_path)[1];

      if (ext == 'pdf') {
        ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          "class": "fa fa-file-pdf-o"
        });
      } else if (ext == 'jpeg') {
        ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          "class": "fa fa-file-photo-o"
        });
      } else if (ext == 'xlsx') {
        ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          "class": "fa fa-file-excel-o"
        });
      } else if (ext == 'docx') {
        ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          "class": "fa fa-file-word-o"
        });
      } else {
        ext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          "class": "fa fa-file-text-o"
        });
      }

      return ext;
    });

    return _this2;
  }

  _createClass(Proofofidentification, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_11__["default"], null, this.props.data.birth_certificate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, this.getExt(this.props.data.birth_certificate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Birth Certificate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          width: '20%',
          padding: '5px 0px'
        },
        variant: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0px'
        },
        "class": "fa fa-eye"
      })))) : '', this.props.data.driving_licence_front ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, this.getExt(this.props.data.driving_licence_front)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Driving Licence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          width: '20%',
          padding: '5px 0px'
        },
        variant: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0px'
        },
        "class": "fa fa-eye"
      })))) : '', this.props.data.national_insurance_number ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, this.getExt(this.props.data.national_insurance_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "National Insurance Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          width: '20%',
          padding: '5px 0px'
        },
        variant: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0px'
        },
        "class": "fa fa-eye"
      })))) : '', this.props.data.p45form ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, this.getExt(this.props.data.p45form)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "p45 Form"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          width: '20%',
          padding: '5px 0px'
        },
        variant: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0px'
        },
        "class": "fa fa-eye"
      })))) : '', this.props.data.passport_style_photograph ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, this.getExt(this.props.data.passport_style_photograph)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Passport style Photograph"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          width: '20%',
          padding: '5px 0px'
        },
        variant: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0px'
        },
        "class": "fa fa-eye"
      })))) : '', this.props.data.passport_inside ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, this.getExt(this.props.data.passport_inside)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Passport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          width: '20%',
          padding: '5px 0px'
        },
        variant: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0px'
        },
        "class": "fa fa-eye"
      })))) : '', this.props.data.proof_of_address ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, this.getExt(this.props.data.proof_of_address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Proof of Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          width: '20%',
          padding: '5px 0px'
        },
        variant: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0px'
        },
        "class": "fa fa-eye"
      })))) : '', this.props.data.right_to_work ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, this.getExt(this.props.data.right_to_work)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Right to work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-sm",
        style: {
          width: '20%',
          padding: '5px 0px'
        },
        variant: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0px'
        },
        "class": "fa fa-eye"
      })))) : '');
    }
  }]);

  return Proofofidentification;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Documents);

/***/ })

}]);