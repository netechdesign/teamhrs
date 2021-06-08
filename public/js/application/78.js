(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/Back-Office/Employee/employee.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/Back-Office/Employee/employee.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hovereffect:hover {\r\n    background: #e1f1fd;\r\n}\r\n\r\n.employeedetails .nav-pills .nav-link.active{\r\n    color: #fff;\r\n    background: linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) !important;\r\n    box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%) !important;\r\n}\r\n.pmd-list-subtitle{\r\n    color: #1dc4e9;\r\n    font-weight: bold;\r\n}\r\n.pmd-list-title{\r\n    color: #222222;\r\n}\r\n.dropdown-toggle{\r\n    border: none !important;\r\n    margin:0px !important;\r\n}\r\n\r\n#loader {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    z-index: 1;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: -76px 0 0 -76px;\r\n    border: 10px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 10px solid #3498db;\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  \r\n ", ""]);
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

/***/ "./resources/js/Back-Office/Employee/employee.css":
/*!********************************************************!*\
  !*** ./resources/js/Back-Office/Employee/employee.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./employee.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/Back-Office/Employee/employee.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/Back-Office/Employee/index.js":
/*!****************************************************!*\
  !*** ./resources/js/Back-Office/Employee/index.js ***!
  \****************************************************/
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
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-signature-canvas */ "./node_modules/react-signature-canvas/build/index.js");
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_signature_canvas__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap4-form-validation */ "./node_modules/react-bootstrap4-form-validation/lib/index.js");
/* harmony import */ var react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap4_form_validation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-super-responsive-table */ "./node_modules/react-super-responsive-table/dist/index.js");
/* harmony import */ var react_super_responsive_table__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-super-responsive-table/dist/SuperResponsiveTableStyle.css */ "./node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css");
/* harmony import */ var react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_super_responsive_table_dist_SuperResponsiveTableStyle_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_images_user_avatar_6_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/images/user/avatar-6.png */ "./resources/js/assets/images/user/avatar-6.png");
/* harmony import */ var _assets_images_user_avatar_6_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_6_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _employee_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./employee.css */ "./resources/js/Back-Office/Employee/employee.css");
/* harmony import */ var _employee_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_employee_css__WEBPACK_IMPORTED_MODULE_21__);
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





















window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_6___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_6___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_6___default.a;


jquery__WEBPACK_IMPORTED_MODULE_6___default.a.DataTable = __webpack_require__(/*! datatables.net-bs */ "./node_modules/datatables.net-bs/js/dataTables.bootstrap.js");

var _ref = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user : 'Null',
    id = _ref.id,
    auth_token = _ref.auth_token;

function telephoneQuestionsAlert(id) {
  var message = "Telephone pre answers save successfully";
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_14__["default"].success({
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
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_14__["default"].success({
    title: 'Success',
    text: message,
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {});
}

function offerletterapproveAlert(id) {
  var message = "offer letter has been approved successfully";
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_14__["default"].success({
    title: 'Success',
    text: message,
    modules: {
      Desktop: {
        desktop: true
      }
    }
  }).on('click', function (e) {});
}

function sendOfferLetterAlert(id) {
  var message = "offer letter has been sent successfully";
  pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_14__["default"].success({
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
var baseurl = window.location.origin;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

var yyyy = today.getFullYear();
var todaydate = dd + '/' + mm + '/' + yyyy;

var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper(List);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleErrorSubmit", function (e, formData, errorInputs) {
      console.log(e, formData, errorInputs);
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

          _this.setState(res.data);
        } else {
          var errorMassage = '';

          if (res.data.errors) {
            errorMassage = res.data.errors.name;
          } else {
            errorMassage = res.data.email;
          }

          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_14__["default"].error({
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
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_14__["default"].error({
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

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _this.formRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      apiload: false,
      search: '',
      iDisplayStart: 0,
      iDisplayLength: 12,
      aaData: [],
      cuttentPage: '',
      iTotalDisplayRecords: '',
      iTotalRecords: '',
      totalPage: 0,
      setFocusOnError: true,
      clearInputOnReset: false
    };
    return _this;
  }

  _createClass(List, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.search !== this.state.search) {
        this.employeeList(1);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      /* test */
      var _this$props = this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;
      Object(_HttpFunctions__WEBPACK_IMPORTED_MODULE_4__["CheckPermission"])('application_form', 'show', history);
      this.employeeList(1);
      var self = this;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pages = [];

      for (var i = 1; i <= this.state.totalPage; i++) {
        var pagehtml = this.state.cuttentPage == i ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          "class": "page-link"
        }, i) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          "class": "page-link",
          onClick: function onClick(element) {
            var id = element.target.id;

            _this2.employeeList(id);
          },
          role: "button",
          id: i,
          href: "javascript:;"
        }, i);
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "page-item  " + (this.state.cuttentPage == i ? 'active' : '')
        }, pagehtml));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
        as: "h5"
      }, "Employee")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shadow-sm p-3 mb-5 bg-white rounded"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        style: {
          background: 'white'
        },
        className: "input-group",
        sm: 12,
        md: 6,
        xl: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "search",
        onChange: this.handleChange,
        placeholder: "Search.."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary btn-icon",
        type: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-search"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: 'absolute',
          zIndex: '99999',
          background: 'rgba(255, 255, 255, 0.57)',
          width: '99%',
          height: '65%',
          textAlign: 'center',
          display: this.state.apiload ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "loader"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Employee, {
        data: this.state.aaData
      })), this.state.aaData.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12,
        md: 6,
        xl: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        "class": "pagination"
      }, pages))) : '')))));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Employee = /*#__PURE__*/function (_React$Component2) {
  _inherits(Employee, _React$Component2);

  var _super2 = _createSuper(Employee);

  function Employee() {
    _classCallCheck(this, Employee);

    return _super2.apply(this, arguments);
  }

  _createClass(Employee, [{
    key: "render",
    value: function render() {
      var baseurl = window.location.origin;
      var employee = this.props.data.length > 0 ? this.props.data.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          sm: 12,
          md: 6,
          xl: 3
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: {
            pathname: "/employee-Detail",
            state: {
              userId: item.user_id
            }
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          className: "hovereffect"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          sm: 12,
          md: 6,
          xl: 4
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.passport_style_photograph ? baseurl + '/uploaded/' + item.passport_style_photograph : _assets_images_user_avatar_6_png__WEBPACK_IMPORTED_MODULE_20___default.a,
          width: "100%",
          className: "mb-4",
          style: {
            borderRadius: '10%'
          },
          alt: "User-Profile"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          sm: 12,
          md: 6,
          xl: 8
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
          style: {
            color: '#04a9f5'
          }
        }, item.full_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            margin: '0px',
            color: '#3f4d67',
            fontSize: '12px',
            fontWeight: 'bold'
          }
        }, item.position_applied_for), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            margin: '0px',
            color: '#3f4d67',
            fontSize: '11px',
            fontWeight: 'bold'
          }
        }, item.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            margin: '0px',
            color: '#3f4d67',
            fontSize: '11px',
            fontWeight: 'bold'
          }
        }, item.telephone_number))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
          style: {
            fontSize: '12px',
            color: '#3f4d67'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Address:"), " ", item.address)))));
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12,
        md: 6,
        xl: 3
      }, "Sorry Employee not found");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, employee);
    }
  }]);

  return Employee;
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