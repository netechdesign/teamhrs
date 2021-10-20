(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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

/***/ "./resources/js/Back-Office/Pages/Holiday/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/Back-Office/Pages/Holiday/index.js ***!
  \*********************************************************/
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./resources/js/hoc/_Aux/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _employee_Holiday_Outstanding_entitlement__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../employee/Holiday/Outstanding_entitlement */ "./resources/js/employee/Holiday/Outstanding_entitlement.js");
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-super-responsive-table/dist/SuperResponsiveTableStyle.css */ "./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css");
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_17__);
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

__webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js"); //require('pdfmake/build/pdfmake.js'); test
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
var selectedYear = '';
var ajaxabort;
var oTable = "";
var user_id = "";

var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

function atable() {
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

    if (user_id != "") {
      aoData.push({
        name: 'user_id',
        value: user_id
      });
    }

    if (selectedYear != '') {
      aoData.push({
        name: 'selectedYear',
        value: selectedYear
      });
    }
  }), _defineProperty(_$$DataTable, "columns", [{
    "data": "user_name"
  }, {
    "data": "from_date"
  }, {
    "data": "to_date"
  }, {
    "data": "time_off"
  }, {
    "data": "notes"
  }, {
    "data": "is_approved"
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
      var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="' + row.id + '" ><i style="margin:0px !important;" class="feather icon-edit"></i></button><button type="button" class="deletefile btn btn-danger btn-sm" data-id="' + row.id + '" ><i style="margin:0px !important;" class="feather icon-x"></i></button>';

      if (row.is_withdraw == 1) {
        var is_withdraw = '<button type="button" class="is_withdraw btn btn-warning btn-sm" data-id="' + row.id + '" ><i style="margin:0px !important;" class="feather icon-edit"></i> Withdraw</button>';
      } else if (row.is_withdraw == 2) {
        var is_withdraw = '<span class="mr-1 badge badge-success" style="padding: 10px;">Withdraw approved</span>';
      } else {
        var is_withdraw = '';
      }

      return [str_buttons, is_withdraw].join('');
    },
    "targets": $('#data-table-responsive th#action').index(),
    "orderable": false,
    "searchable": false
  }, {
    "render": function render(data, type, row) {
      var str_buttons = 'pending';

      if (row.is_approved == null) {
        str_buttons = '<span class="mr-1 badge badge-warning">Pending</span>';
      } else if (row.is_approved == 'yes') {
        str_buttons = '<span class="mr-1 badge badge-success">Yes</span>';
      } else if (row.is_approved == 'no') {
        str_buttons = '<span class="mr-1 badge badge-danger">No</span>';
      }

      return [str_buttons].join('');
    },
    "targets": $('#data-table-responsive th#is_approved').index(),
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
      holidayYearOptions: [],
      holiday_year: '',
      selected_year: {},
      outstanding_entitlement: [],
      search: '',
      iDisplayStart: 0,
      iDisplayLength: 1,
      aaData: [],
      cuttentPage: '',
      iTotalDisplayRecords: '',
      iTotalRecords: '',
      totalPage: 0,
      full_name: ' ',
      user_id: '',
      role_id: '',
      role_list: [],
      location_id: '',
      previous_link: 0,
      next_link: 0
    });

    _defineProperty(_assertThisInitialized(_this), "employeeList", function (page_no) {
      _this.setState({
        apiload: true
      });

      var _ref2 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          id = _ref2.id,
          auth_token = _ref2.auth_token;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(baseurl + '/api/employee_details', {
        params: {
          iDisplayStart: _this.state.iDisplayStart,
          iDisplayLength: _this.state.iDisplayLength,
          page: page_no,
          sSearch: _this.state.search
        },
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          _this.setState({
            apiload: false
          });

          _this.setState(res.data, function () {
            if (_this.state.aaData.length > 0) {
              _this.setState({
                full_name: _this.state.aaData[0].full_name,
                user_id: _this.state.aaData[0].user_id
              }, function () {
                _this.Outstanding_entitlement(_this.state.user_id);
              });
            }
          });
        } else {
          var errorMassage = '';

          if (res.data.errors) {
            errorMassage = res.data.errors.name;
          } else {
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
            buttonName: 'Save'
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
          buttonName: 'Add'
        });

        _this.setState({
          selectedFile: null
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "holidayYearchange", function (e) {
      var Engineers = _this.state.holidayYearOptions.filter(function (vl, index) {
        return vl.value == e.value;
      });

      if (Engineers) {
        var _ref3 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
            _id = _ref3.id,
            name = _ref3.name,
            email = _ref3.email;

        if (_id) {
          _this.setState({
            selected_year: {
              label: Engineers[0].label,
              value: Engineers[0].value
            }
          }, function () {
            _this.Outstanding_entitlement(_this.state.user_id);
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getYears", function () {
      var oneYearFromNow = new Date();
      var current_year = oneYearFromNow.getFullYear();
      var next_year = parseInt(current_year) + 1;
      var current_year_text = current_year; //current_year+'_'+next_year;

      var next_year = parseInt(current_year) + 1;
      var next_two_years = next_year + 1;
      var next_year_text = next_year + '_' + next_two_years;
      var last_year = parseInt(current_year) - 1;
      var last_year_text = last_year + '_' + current_year;
      var last_two_year = parseInt(last_year) - 1;
      var last_two_year_text = last_two_year + '_' + last_year;
      var yearsList = [{
        value: next_year_text,
        label: 'Next holiday year',
        color: '#00B8D9'
      }, {
        value: current_year_text,
        label: 'This holiday year',
        color: '#00B8D9'
      }, {
        value: last_year_text,
        label: 'Last holiday year',
        color: '#00B8D9'
      }, {
        value: last_two_year_text,
        label: 'Apr 01 ' + last_two_year + ' - Mar 31 ' + last_year,
        color: '#00B8D9'
      }];

      _this.setState({
        holidayYearOptions: yearsList,
        selected_year: yearsList[1]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sweetConfirmHandler", function (id) {
      var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_15___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a);
      MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Approved!',
        cancelButtonText: 'not Approved!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then(function (willDelete) {
        if (willDelete.value) {
          var _ref4 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
              _auth_token = _ref4.auth_token;

          var _baseurl = window.location.origin;
          axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_baseurl + '/api/holiday_withdraw_request/' + id, {
            is_withdraw: 2
          }, {
            headers: {
              'Authorization': 'Bearer ' + _auth_token
            }
          }).then(function (res) {
            if (res.data.success) {
              _this.Outstanding_entitlement(_this.state.user_id);

              return MySwal.fire('', 'Holiday withdraw request has been approved!', 'success');
            }
          });
        } else {
          var _ref5 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
              _auth_token2 = _ref5.auth_token;

          var _baseurl2 = window.location.origin;
          axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_baseurl2 + '/api/holiday_withdraw_request/' + id, {
            is_withdraw: 3
          }, {
            headers: {
              'Authorization': 'Bearer ' + _auth_token2
            }
          }).then(function (res) {
            if (res.data.success) {
              _this.Outstanding_entitlement(_this.state.user_id);

              return MySwal.fire('', 'Holiday withdraw request has been not approved!', 'error');
            }
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "Outstanding_entitlement", function (userid) {
      var _ref6 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          auth_token = _ref6.auth_token;

      var oneYearFromNow = new Date();
      var current_year = oneYearFromNow.getFullYear();
      var next_year = parseInt(current_year) + 1;
      var selected_year = current_year;

      if (Object.keys(_this.state.selected_year).length > 0) {
        selected_year = _this.state.selected_year['value'];
      }

      selectedYear = selected_year;
      user_id = userid;

      if (oTable == '') {
        atable();
      } else {
        oTable.draw();
      }

      var _this$props = _this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;

      var self = _assertThisInitialized(_this); //is_withdraw


      $('#data-table-responsive tbody').on('click', '.is_withdraw', function () {
        var id = $(this).attr('data-id');
        self.sweetConfirmHandler(id);
      }); //Edit

      $('#data-table-responsive tbody').on('click', '.edit', function () {
        var id = $(this).attr('data-id');
        history.push('/Holiday/edit/' + id);
      }); //Delete

      $('#data-table-responsive tbody').on('click', '.deletefile', function () {
        var id = $(this).attr('data-id');
        var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_15___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a);
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
            var _ref7 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
                _auth_token3 = _ref7.auth_token;

            var _baseurl3 = window.location.origin;
            axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_baseurl3 + '/api/holiday/' + id, {
              _method: 'delete'
            }, {
              headers: {
                'Authorization': 'Bearer ' + _auth_token3
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
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(baseurl + '/api/outstanding_entitlement', {
        user_id: user_id,
        selected_year: selected_year
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
          _this.setState({
            outstanding_entitlement: []
          });

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
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_9__["default"].error({
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

    _defineProperty(_assertThisInitialized(_this), "RoleList", function (e) {
      var _ref8 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          auth_token = _ref8.auth_token;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(baseurl + '/api/roledropdown', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + auth_token
        }
      }).then(function (res) {
        if (res.data.success) {
          _this.setState({
            role_list: res.data.data
          }); // document.getElementById("requestLoder").innerHTML = '';

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

    return _this;
  }

  _createClass(Holiday, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (oTable != '') {
        oTable = '';
      }

      this.RoleList();
      this.employeeList(1);
      this.getYears();

      var _ref9 = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
          name = _ref9.name,
          email = _ref9.email;

      var self = this;
      $('.next_link').on('click', function () {
        self.employeeList(self.state.next_link);
      });
      $('.previous_link').on('click', function () {
        self.employeeList(self.state.previous_link);
      }); // $('#data-table-responsive tbody').on('click', '.edit', function () {
      //     var id =  $(this).attr('data-id');
      //     history.push('/user/edit/'+id);
      // })
    }
  }, {
    key: "render",
    value: function render() {
      var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "feather icon-more-vertical"
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        style: {
          padding: '5px 25px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h5",
        style: {
          marginTop: '15px'
        }
      }, "Holiday Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        style: {
          'float': 'right'
        },
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
        to: "/Holiday/Calendar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        "class": "feather icon-calendar"
      }), " Calendar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
        style: style.rowline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        name: "location_id",
        value: this.state.location_id,
        options: this.state.holidayYearOptions,
        placeholder: "Select Location",
        onChange: this.holidayYearchange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        name: "role_id",
        value: this.state.role_id,
        options: this.state.role_list,
        placeholder: "Select Department",
        onChange: this.holidayYearchange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        name: "user_id",
        value: this.state.user_id,
        options: this.state.holidayYearOptions,
        placeholder: "Select Engineer",
        onChange: this.holidayYearchange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        name: "holiday_year",
        value: this.state.selected_year,
        options: this.state.holidayYearOptions,
        placeholder: "Select year",
        onChange: this.holidayYearchange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
        md: "4",
        style: {
          margin: '-5px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          "float": 'right'
        }
      }, this.state.previous_link > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:;",
        "class": "previous_link btn btn-link"
      }, "\xAB Previous") : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.state.full_name), this.state.next_link > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:;",
        "class": "next_link btn btn-link"
      }, "Next \xBB") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        "class": "btn btn-link"
      }, "\xA0")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_employee_Holiday_Outstanding_entitlement__WEBPACK_IMPORTED_MODULE_16__["default"], {
        user_id: this.state.user_id,
        entitlement: this.state.outstanding_entitlement
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        ref: "tbl",
        striped: true,
        hover: true,
        responsive: true,
        className: "table table-condensed",
        id: "data-table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "user_name"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "from_date"
      }, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "to_date"
      }, "To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "time_off"
      }, "Time Off"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "notes"
      }, "Notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "is_approved"
      }, "Approved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "user_name"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "from_date"
      }, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "to_date"
      }, "To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "time_off"
      }, "Time Off"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "notes"
      }, "Notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "is_approved"
      }, "Approved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        id: "action"
      }, "Action"))))))))));
    }
  }]);

  return Holiday;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var style = {
  rowline: {
    margin: '-30px -25px 10px',
    paddingTop: '15px',
    borderBottom: 'solid 2px #f8f9fa'
  },
  nextprebutton: {
    backgroundColor: '#f1f1f1',
    color: 'black',
    padding: '7px',
    margin: '10px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Holiday);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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