"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Review-Approve_OPCR_Ratings_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.js");
/* harmony import */ var _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Filter */ "./resources/js/Shared/Filter.vue");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _Shared_ModalDynamicTitle2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle2 */ "./resources/js/Shared/ModalDynamicTitle2.vue");
/* harmony import */ var _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/PrintModal */ "./resources/js/Shared/PrintModal.vue");
/* harmony import */ var _Shared_ModalDynamicTitle22__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle22 */ "./resources/js/Shared/ModalDynamicTitle22.vue");
/* harmony import */ var _Shared_PrintModal1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/PrintModal1 */ "./resources/js/Shared/PrintModal1.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








// import ModalAccomplishmentMOV from "@/Shared/ModalDynamicTitle";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    auth: Object,
    data: Object,
    mode_1: String,
    source: String,
    disk: String
  },
  data: function data() {
    return {
      displayModal: false,
      displayModal2: false,
      displaySideModal: false,
      displayPrintModal: false,
      displayModalAccomplishmentMOV: false,
      mov_accomplishment: [],
      opcr_data: [],
      status_val: -3,
      opcr_current: [],
      remarks: "",
      mode: "",
      form: (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        remarks: "",
        opcr_list_id: ""
      }),
      can_submit: false,
      submit_attempt: false,
      show_all_not_clicked: false,
      currentRatingType: 0,
      modal_mode: 'Review',
      print_link: "",
      opcrListId: "",
      file_name: "",
      paps_current: [],
      unsavedPpdoRemarks: {},
      unsavedFinalRemark: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    // auto-resize all rendered textareas on initial load
    this.$nextTick(function () {
      _this.$refs.remarksTextarea.forEach(function (ta) {
        ta.style.height = "auto";
        ta.style.height = ta.scrollHeight + "px";
      });
    });
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },
  updated: function updated() {
    var _this2 = this;
    // auto-resize whenever data changes after updates
    this.$nextTick(function () {
      if (_this2.$refs.remarksTextarea) {
        _this2.$refs.remarksTextarea.forEach(function (ta) {
          ta.style.height = "auto";
          ta.style.height = ta.scrollHeight + "px";
        });
      }
    });
  },
  components: {
    Pagination: _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"],
    Filtering: _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__["default"],
    Modal: _Shared_ModalDynamicTitle2__WEBPACK_IMPORTED_MODULE_3__["default"],
    Modal2: _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    SideModal: _Shared_PrintModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    PrintModal: _Shared_ModalDynamicTitle22__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalAccomplishmentMOV: _Shared_PrintModal1__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: {
    // First computed: sum of the three category averages
    // ppdototalOfAverages() {
    //     // const avgQ = this.categoryAverage('q');
    //     // const avgE = this.categoryAverage('e');
    //     // const avgT = this.categoryAverage('t');
    //     return
    // },
    // // Second computed: mean of the three category averages
    // ppdoaverageOfAverages() {
    //     const avgQ = this.categoryAverage('q');
    //     const avgE = this.categoryAverage('e');
    //     const avgT = this.categoryAverage('t');
    //     return (avgQ + avgE + avgT) / 3;
    // }
  },
  methods: {
    // START OF PRINTING
    viewlink: function viewlink(opcr_id1, FFUNCCOD1) {
      var tot = this.getTotalAverage();
      var ave = this.getAverageAll();
      // var linkt = "abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-";
      var linkt = "https://";
      var jasper_ip = this.jasper_ip;

      // https://paps.davaodeoro.gov.ph/jasperserver/flow.html??pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FOPCR_ForApproval_PA&standAlone=true&opcr_id=116&FFUNCCOD=8751-1&total=0&average=0&output=pdf
      // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2FOPCR_Rating&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';
      // var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA%2CSales%7Cpa1%3DSweden&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2Fopcr_rating_revised&standAlone=true&fbclid=IwAR1PZD2108LiuvPwxw4IoCBioYDFnY-NdpOVtDe7XKRWoKYcR5bANaX7x1M&standAlone=true&decorate=no&output=pdf';
      // jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fplanning_system&reportUnit=%2Freports%2Fplanning_system%2Fopcr_standard&standAlone=true&decorate=no&output=pdf';
      var jasper_link = 'jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2FOPCR_AIP&reportUnit=%2Freports%2FOPCR_AIP%2FOPCR_ForApproval_PA&standAlone=true&output=pdf';
      var params = '&opcr_id=' + opcr_id1 + '&FFUNCCOD=' + FFUNCCOD1 + '&total=' + 0 + '&average=' + 0;
      var linkl = linkt + jasper_ip + jasper_link + params;
      this.report_link = linkl;
      return linkl;
    },
    viewPrintModal: function viewPrintModal(opcr_id, FFUNCCOD) {
      // this.status_val = status
      // this.opcr_current = opcr
      // var url = "/review-approve/ratings/" + opcr_id + "/view/opcr/rating/submission"
      // axios.get(url, {
      //     params: {
      //         type: this.mode_1
      //     }
      // }).then((response) => {
      //     this.opcr_data = response.data;
      //     // alert(JSON.stringify(this.opcr_data))
      // }).catch((error) => {
      //     console.error(error);
      // });
      this.print_link = this.viewlink(opcr_id, FFUNCCOD);
      this.displayPrintModal = true;
    },
    hidePrintModal: function hidePrintModal() {
      this.displayPrintModal = false;
    },
    handleBeforeUnload: function handleBeforeUnload(event) {
      var hasUnsaved = this.displayModal && (Object.keys(this.unsavedPpdoRemarks).length > 0 || this.unsavedFinalRemark);
      if (hasUnsaved) {
        event.preventDefault();
        event.returnValue = '';
        return '';
      }
    },
    markPpdoRemarksUnsaved: function markPpdoRemarksUnsaved(opcr_rating_id) {
      if (!opcr_rating_id) return;
      this.unsavedPpdoRemarks = _objectSpread(_objectSpread({}, this.unsavedPpdoRemarks), {}, _defineProperty({}, opcr_rating_id, true));
    },
    markFinalRemarkUnsaved: function markFinalRemarkUnsaved() {
      this.unsavedFinalRemark = true;
    },
    clearUnsavedRemarks: function clearUnsavedRemarks() {
      this.unsavedPpdoRemarks = {};
      this.unsavedFinalRemark = false;
    },
    //END OF PRINTING
    updateMOVisVisible: function updateMOVisVisible(mov_is_visible, index) {
      this.opcr_data[index].mov_is_visible = !mov_is_visible;
    },
    formatFileSize: function formatFileSize(size) {
      if (size < 1024) return size + ' B';else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';else return (size / (1024 * 1024)).toFixed(2) + ' MB';
    },
    deleteSectoral: function deleteSectoral(id) {
      var text = "WARNING!\nAre you sure you want to delete the Societal Goals?" + id;
      if (confirm(text) == true) {
        this.$inertia["delete"]("/Societal/" + id);
      }
    },
    getPercent: function getPercent(accomp, targqty) {
      var accSum = 0;
      accomp.forEach(myFunction);
      function myFunction(item) {
        accSum += parseFloat(item.accomplishment_qty);
      }
      var percentt = accSum / targqty * 100;
      percentt = this.format_number(percentt, 2, true);
      return percentt;
    },
    viewModal: function viewModal(opcr_id, status, opcr) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var url;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              // alert('View Modal');
              _this3.status_val = status;
              // alert(this.status_val)
              _this3.opcr_current = opcr;
              _this3.opcrListId = opcr_id;
              url = "/review-approve/ratings/" + opcr_id + "/view/opcr/rating/submission";
              _context.n = 1;
              return axios.get(url, {
                params: {
                  type: _this3.mode_1
                }
              }).then(function (response) {
                _this3.opcr_data = response.data;
              })["catch"](function (error) {
                console.error(error);
              });
            case 1:
              _this3.displayModal = true;
              _this3.currentRatingType = _this3.opcr_current.rating_type;
              _this3.clearUnsavedRemarks();
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    hideModal: function hideModal() {
      this.displayModal = false;
      this.displayModal2 = false;
      this.submit_attempt = false;
      this.clearUnsavedRemarks();
    },
    showModal2: function showModal2(md) {
      this.hideModal();
      this.displayModal2 = true;
      if (md === 'v') {
        this.mode = "Review";
      } else if (md === 'a') {
        this.mode = "Approve";
      } else if (md === 'r') {
        this.mode = "Return";
      }
    },
    backTo: function backTo() {
      this.hideModal();
      this.viewModal(this.opcr_current.id, this.opcr_current.status_val, this.opcr_current);
    },
    confirmSubmission: function confirmSubmission() {},
    reviewSubmit: function reviewSubmit() {
      // var opcr_list_id_here = this.opcr_current.id;
      this.submit_attempt = true;
      var cansub = this.canSubmit();
      if (cansub) {
        // alert(cansub+ " true")
        var url = '/review-approve/ratings/' + this.opcr_current.id + '/review';
        this.form.opcr_list_id = this.opcr_current.id;
        var text = "WARNING!\nAre you sure you want to review the OPCR?";
        if (confirm(text) == true) {
          this.form.get(url, this.form);
        }
        this.hideModal();
        this.clearForm();
      } else {
        // alert(cansub+ " false")
        alert("⚠️ Review blocked: Some required items have not been scored. Please complete all scores before proceeding.");
      }
    },
    approveSubmit: function approveSubmit() {
      var url = '/review-approve/ratings/approve/' + this.opcr_current.id + '/opcr';
      this.form.opcr_list_id = this.opcr_current.id;
      var text = "WARNING!\nAre you sure you want to approve the IPCR?";
      // alert(url)
      if (confirm(text) == true) {
        this.form.post(url, this.form);
      }
      this.hideModal();
      this.clearForm();
    },
    returnSubmit: function returnSubmit() {
      // /return/remarks / { opcr_list_id } / opcr
      var url = '/review-approve/ratings/return/remarks/' + this.opcr_current.id + '/opcr';
      this.form.opcr_list_id = this.opcr_current.id;
      var text = "WARNING!\nAre you sure you want to return the selected OPCR?";
      // alert(url)
      if (confirm(text) == true) {
        this.form.post(url, this.form);
      }
      this.hideModal();
      this.clearForm();
    },
    clearForm: function clearForm() {
      this.form.remarks = "";
      this.form.opcr_list_id = "";
    },
    saveRating: function saveRating(rating, opcr_rating_id, column) {
      var _this4 = this;
      // alert("rating: "+ rating + " \n"+"opcr_rating_id: "+opcr_rating_id)
      // review-approve/ratings/sub/mit/opcr/{opcr_rating_id}/{item_score}
      // @change="saveRating(opcr_data[index].q1, opcr_data[index].opcr_rating_id, 'q1')"
      if (!rating) {
        rating = "rating is null";
      }
      var url = "/review-approve/ratings/submit/opcr/" + column + "/" + opcr_rating_id + "/" + rating;
      axios.post(url).then(function (response) {
        if (column === 'ppdo_remarks' && opcr_rating_id) {
          if (_this4.unsavedPpdoRemarks[opcr_rating_id]) {
            var _this4$unsavedPpdoRem = _this4.unsavedPpdoRemarks,
              removed = _this4$unsavedPpdoRem[opcr_rating_id],
              rest = _objectWithoutProperties(_this4$unsavedPpdoRem, [opcr_rating_id].map(_toPropertyKey));
            _this4.unsavedPpdoRemarks = rest;
          }
        }
      })["finally"](function (response) {})["catch"](function (error) {});
    },
    saveRemarks: function saveRemarks() {
      var _this$opcr_current,
        _this5 = this;
      if (!((_this$opcr_current = this.opcr_current) !== null && _this$opcr_current !== void 0 && _this$opcr_current.id)) {
        return;
      }
      var payload = {
        ppdo_remarks: this.opcr_data.map(function (item) {
          return {
            opcr_rating_id: item.opcr_rating_id,
            ppdo_remarks: item.ppdo_remarks || ''
          };
        }),
        final_remark: this.form.remarks || ''
      };
      var url = "/review-approve/ratings/save-remarks/".concat(this.opcr_current.id);
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router.patch(url, payload, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          // alert('Remarks saved successfully.');
          _this5.clearUnsavedRemarks();
        },
        onError: function onError(errors) {
          console.error('Failed to save remarks', errors);
        }
      });
    },
    deleteRemark: function deleteRemark(remarkId) {
      var _this6 = this;
      if (!remarkId) return;
      if (!confirm('Are you sure you want to delete this remark?')) {
        return;
      }
      axios["delete"]("/review-approve/ratings/remark/".concat(remarkId)).then(function () {
        _this6.opcr_current.opcr_remarks = _this6.opcr_current.opcr_remarks.filter(function (remark) {
          return remark.id !== remarkId;
        });
      })["catch"](function (error) {
        console.error('Failed to delete remark', error);
      });
    },
    canSubmit: function canSubmit() {
      // loop through each row in opcr_data
      var _iterator = _createForOfIteratorHelper(this.opcr_data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          // define the mappings of score fields to their standards
          // { score: row.q1, standard: 'Yes'},
          //     { score: row.q2, standard: 'Yes'},
          //     { score: row.q3, standard: 'Yes'},
          //     { score: row.e1, standard: row.e1_standard },
          //     { score: row.e2, standard: row.e2_standard },
          //     { score: row.e3, standard: row.e3_standard },
          //     { score: row.t1, standard: row.t1_standard },
          var checks = [{
            score: row.ppdo_q1,
            standard: 'Yes'
          }, {
            score: row.ppdo_q2,
            standard: 'Yes'
          }, {
            score: row.ppdo_q3,
            standard: 'Yes'
          }, {
            score: row.ppdo_e1,
            standard: row.e1_standard
          }, {
            score: row.ppdo_e2,
            standard: row.e2_standard
          }, {
            score: row.ppdo_e3,
            standard: row.e3_standard
          }, {
            score: row.ppdo_t1,
            standard: row.t1_standard
          }];
          console.log(checks);
          for (var _i = 0, _checks = checks; _i < _checks.length; _i++) {
            var _checks$_i = _checks[_i],
              score = _checks$_i.score,
              standard = _checks$_i.standard;
            if (standard === "Yes") {
              // check if score is not null/empty and between 1–5
              if (score === null || score === "" || isNaN(score) || Number(score) < 0 || Number(score) > 5) {
                // alert("null ang score "+score)
                return false;
              }
            } else {
              // alert("No")
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    },
    autoResize: function autoResize(event) {
      var textarea = event.target;
      textarea.style.height = "auto"; // reset first to recalc
      textarea.style.height = textarea.scrollHeight + "px"; // fit content
    },
    previewFile: function previewFile(file) {
      var imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
      var multimediaTypes = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'mp3'];
      // alert("previewFile " + this.disk + " "+file.file_type)
      // console.log(this.fileBaseUrl)
      this.current_filepath = file.filepath;
      if (this.disk === 'public') {
        var _file$file_type, _file$file_type2;
        // alert("PUBLIC")
        this.view_link = window.location.origin + "/storage/" + file.filepath;
        if (imageTypes.includes((_file$file_type = file.file_type) === null || _file$file_type === void 0 ? void 0 : _file$file_type.toLowerCase()) || multimediaTypes.includes((_file$file_type2 = file.file_type) === null || _file$file_type2 === void 0 ? void 0 : _file$file_type2.toLowerCase())) {
          // Directly open images in a new tab
          // this.openImageModal()
          // this.displaySideModal = true
          window.open(this.view_link, '_blank');
          //
          return;
        }
        if (this.isPreviewable(file.file_type)) {
          this.displaySideModal = true;
          this.file_extension = file.file_type;
          // this.view_link = "http://122.53.120.18:8067/images/"+file.filepath
          // window.open(file.file_url, '_blank')
        } else {
          alert('This file type cannot be previewed.');
        }
      } else {
        var _file$file_type3, _file$file_type4;
        if (imageTypes.includes((_file$file_type3 = file.file_type) === null || _file$file_type3 === void 0 ? void 0 : _file$file_type3.toLowerCase()) || multimediaTypes.includes((_file$file_type4 = file.file_type) === null || _file$file_type4 === void 0 ? void 0 : _file$file_type4.toLowerCase())) {
          // Directly open images in a new tab
          window.open("http://122.53.120.18:8067/images/".concat(file.filepath), '_blank');
          return;
        }
        if (this.isPreviewable(file.file_type)) {
          // this.displaySideModal = true
          this.view_link = "http://122.53.120.18:8067/images/" + file.filepath;
          window.open(this.view_link, '_blank');
          this.file_extension = file.file_type;

          // window.open(file.file_url, '_blank')
        } else {
          alert('This file type cannot be previewed.');
        }
      }
    },
    toggleAllMovVisibility: function toggleAllMovVisibility(value) {
      // Ensure value is a boolean
      var newValue = Boolean(value);
      this.show_all_not_clicked = !this.show_all_not_clicked;
      // Loop through each item in opcr_data and update mov_is_visible
      this.opcr_data.forEach(function (item) {
        item.mov_is_visible = newValue;
      });
    },
    //SPAN******************************************* APPLICABLE FOR APPROVAL ONLY************************************
    getRowspan: function getRowspan(row, ind) {
      var count = 1;
      var index = ind;
      for (var i = parseFloat(index) + 1; i < this.opcr_data.length; i++) {
        if (this.opcr_data[i].mfo_desc === row) {
          //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
          count = parseFloat(count) + 1;
        } else {
          break;
        }
      }
      return count;
    },
    getRowspan2: function getRowspan2(row, ind) {
      var count = 1;
      var index = ind;
      for (var i = parseFloat(index) + 1; i < this.opcr_data.length; i++) {
        if (this.opcr_data[i].office_accountable === row) {
          //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
          count = parseFloat(count) + 1;
        } else {
          break;
        }
      }
      return count;
    },
    getRowspanIndicator: function getRowspanIndicator(row, ind) {
      var count = 1;
      var index = ind;
      for (var i = parseFloat(index) + 1; i < this.opcr_data.length; i++) {
        if (this.opcr_data[i].success_indicator === row) {
          //alert('equal '+this.opcrs[i].mfo_desc + '\n row: '+ row.mfo_length);
          count = parseFloat(count) + 1;
        } else {
          break;
        }
      }
      return count;
    },
    //***********************************************AVERAGES/TOTALS / FOR APPROVAL ONLY*****************************
    getTotalAverage: function getTotalAverage() {
      var total = 0;
      for (var i = 0; i < this.opcr_data.length; i++) {
        var rat_e = this.opcr_data[i].rating_e;
        var rat_q = this.opcr_data[i].rating_q;
        var rat_t = this.opcr_data[i].rating_t;
        var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t);
        // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
        var div = 0;
        if (parseFloat(rat_e) >= 1) {
          div = div + 1;
        }
        if (parseFloat(rat_q) >= 1) {
          div = div + 1;
        }
        if (parseFloat(rat_t) >= 1) {
          div = div + 1;
        }
        if (div == 0) {
          div = 1;
        }
        total = total + avee / div;
      }
      // total = "44.44555555";
      // this.total_ave = total;
      return this.format_number_conv(total, 2, true);
    },
    getTotalAverage2: function getTotalAverage2() {
      var _this7 = this;
      var total = 0;
      this.opcr_data.forEach(function (item) {
        var divisor = 0;
        var qAvg = _this7.average([item.q1, item.q2, item.q3]);
        var eAvg = _this7.average([item.e1, item.e2, item.e3]);
        var tAvg = _this7.average([item.t1]);
        if (parseFloat(qAvg) > 0) {
          divisor += 1;
        }
        if (parseFloat(eAvg) > 0) {
          divisor += 1;
        }
        if (parseFloat(tAvg) > 0) {
          divisor += 1;
        }
        if (divisor == 0) {
          divisor = 1;
        }
        total += (qAvg + eAvg + tAvg) / divisor;
      });
      return Number(total.toFixed(2));
    },
    computeRowAverage: function computeRowAverage(opcr) {
      var values = [opcr.rating_q, opcr.rating_e, opcr.rating_t];
      var validValues = values.filter(function (v) {
        return v > 0;
      });
      if (validValues.length === 0) {
        return 0;
      }
      var sum = validValues.reduce(function (a, b) {
        return a + b;
      }, 0);
      return sum / validValues.length;
    },
    computeAverage: function computeAverage(opcr) {
      // extract the values
      var values = [opcr.rating_q, opcr.rating_e, opcr.rating_t];

      // filter out zero or null
      var validValues = values.filter(function (v) {
        return v > 0;
      });
      if (validValues.length === 0) {
        return 0; // or '' if you want it blank
      }

      // compute average
      var sum = validValues.reduce(function (a, b) {
        return a + b;
      }, 0);
      return (sum / validValues.length).toFixed(2); // keep 2 decimals
    },
    getAverageAll: function getAverageAll() {
      var _this8 = this;
      // compute averages for all rows
      var rowAverages = this.opcr_data.map(function (opcr) {
        return _this8.computeRowAverage(opcr);
      });

      // filter out rows that are 0
      var validAverages = rowAverages.filter(function (avg) {
        return avg > 0;
      });
      if (validAverages.length === 0) {
        return 0; // or '' if you want blank
      }
      var total = validAverages.reduce(function (a, b) {
        return a + b;
      }, 0);
      return (total / validAverages.length).toFixed(2); // keep 2 decimals
    },
    getAverageAll2: function getAverageAll2() {
      var _this9 = this;
      // let total = 0;
      // let count = 0;

      // this.opcr_data.forEach(item => {
      //     const qAvg = this.average([
      //         item.q1,
      //         item.q2,
      //         item.q3
      //     ]);

      //     const eAvg = this.average([
      //         item.e1,
      //         item.e2,
      //         item.e3
      //     ]);

      //     const tAvg = this.average([
      //         item.t1
      //     ]);

      //     [qAvg, eAvg, tAvg].forEach(avg => {
      //         if (avg > 0) {
      //             total += avg;
      //             count++;
      //         }
      //     });
      // });

      // const divisor = count || 1; // Avoid division by zero
      // return Number((total / divisor).toFixed(2));
      var total = 0;
      var count = 0;
      var d1 = 1;
      var d2 = 1;
      var d3 = 1;
      var divisor = 0;
      this.opcr_data.forEach(function (item) {
        var qAvg = _this9.average([item.q1, item.q2, item.q3]);
        var eAvg = _this9.average([item.e1, item.e2, item.e3]);
        var tAvg = _this9.average([item.t1]);
        if (qAvg > 0) {
          d1 = 1;
        } else {
          d1 = 0;
        }
        if (eAvg > 0) {
          d2 = 1;
        } else {
          d2 = 0;
        }
        if (tAvg > 0) {
          d3 = 1;
        } else {
          d3 = 0;
        }
        divisor = d1 + d2 + d3;
        if (divisor < 1) {
          divisor = 1;
        } else {
          count++;
        }
        total += (qAvg + eAvg + tAvg) / divisor;
        // [qAvg, eAvg, tAvg].forEach(avg => {
        //     if (avg > 0) {
        //         total += avg;
        //         count++;
        //     }
        // });
      });
      return count ? Number((total / count).toFixed(2)) : 0;
    },
    // *********************************************AVERAGE -DPCR SCORES *********************************************
    computeAverageScore: function computeAverageScore(monthly_ratings) {
      if (!monthly_ratings || _typeof(monthly_ratings) !== 'object') {
        return 0;
      }
      var values = Object.values(monthly_ratings).filter(function (v) {
        return typeof v === 'number' && v > 0;
      });
      if (values.length === 0) {
        return 0;
      }
      var sum = values.reduce(function (total, v) {
        return total + v;
      }, 0);
      return Number((sum / values.length).toFixed(2));
    },
    computeAverageByType: function computeAverageByType(monthly_ratings, type) {
      if (!monthly_ratings || _typeof(monthly_ratings) !== 'object') {
        return 0;
      }
      var map = {
        q: ['q1', 'q2', 'q3'],
        e: ['e1', 'e2', 'e3']
      };
      if (!map[type]) {
        return 0;
      }
      var values = map[type].map(function (key) {
        return monthly_ratings[key];
      }).filter(function (v) {
        return typeof v === 'number' && v > 0;
      });
      if (values.length === 0) {
        return 0;
      }
      var sum = values.reduce(function (total, v) {
        return total + v;
      }, 0);
      return Number((sum / values.length).toFixed(2));
    },
    computeAverageQET: function computeAverageQET(q, e, t) {
      var values = [q, e, t].filter(function (v) {
        return Number(v) > 0;
      });
      if (values.length === 0) {
        return 0;
      }
      var sum = values.reduce(function (total, val) {
        return total + Number(val);
      }, 0);
      return sum / values.length;
    },
    // ===============================
    // TOTAL of DPCR (sum of row averages)
    // ===============================
    computeDPCRTotal: function computeDPCRTotal(rows) {
      var _this0 = this;
      if (!Array.isArray(rows)) {
        // console.log("zero cya")
        return 0;
      }
      var total = 0;
      rows.forEach(function (row) {
        var ratings = row === null || row === void 0 ? void 0 : row.monthly_targets;
        console.log(row.month);
        if (!ratings || _typeof(ratings) !== 'object') {
          return;
        }
        var q = _this0.computeAverageByType(ratings, 'q');
        var e = _this0.computeAverageByType(ratings, 'e');
        var t = Number(ratings === null || ratings === void 0 ? void 0 : ratings.t1) > 0 ? Number(ratings.t1) : 0;
        var rowAverage = _this0.computeAverageQET(q, e, t);
        console.log(rowAverage);
        if (rowAverage > 0) {
          total += rowAverage;
        }
      });
      return Number(total.toFixed(2));
    },
    // ===============================
    // AVERAGE of DPCR (ignore zero rows)
    // ===============================
    computeDPCRAverage: function computeDPCRAverage(rows) {
      var _this1 = this;
      if (!Array.isArray(rows)) {
        return 0;
      }
      var rowAverages = [];
      rows.forEach(function (row) {
        var ratings = row === null || row === void 0 ? void 0 : row.monthly_targets;
        if (!ratings || _typeof(ratings) !== 'object') {
          return;
        }
        var q = _this1.computeAverageByType(ratings, 'q');
        var e = _this1.computeAverageByType(ratings, 'e');
        var t = Number(ratings === null || ratings === void 0 ? void 0 : ratings.t1) > 0 ? Number(ratings.t1) : 0;
        var rowAverage = _this1.computeAverageQET(q, e, t);
        if (rowAverage > 0) {
          rowAverages.push(rowAverage);
        }
      });
      if (rowAverages.length === 0) {
        return 0;
      }
      var sum = rowAverages.reduce(function (total, val) {
        return total + val;
      }, 0);
      return Number((sum / rowAverages.length).toFixed(2));
    },
    // _______________________________
    // SET RATING TYPE
    // ===============================
    setRatingType: function setRatingType(rating_type, id) {
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router.patch("/review-approve/ratings/set/rating/type/".concat(rating_type, "/").concat(id), {}, {
        onSuccess: function onSuccess() {
          console.log("Rating type ".concat(type, " updated for ID ").concat(id));
        },
        onError: function onError(errors) {
          console.error(errors);
        }
      });
    },
    // DOWNLOAD EXCEL
    downloadExcel: function downloadExcel(opcr_id) {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var file_name, response, url, link, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              // opcr_list_id must be available, e.g., from a prop or data
              // const opcrListId = this.opcr_list_id; // adjust to your variable
              file_name = _this10.opcr_current.semester + " - " + _this10.opcr_current.year + " - " + _this10.opcr_current.office.FFUNCTION + ".xlsx";
              _context2.p = 1;
              _context2.n = 2;
              return axios.get("/review-approve-ratings/".concat(opcr_id, "/view/opcr/rating/submission"), {
                responseType: 'blob'
              } // important for file download
              );
            case 2:
              response = _context2.v;
              // Create a blob URL and trigger download
              url = window.URL.createObjectURL(new Blob([response.data]));
              link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', file_name);
              document.body.appendChild(link);
              link.click();

              // Clean up
              link.remove();
              window.URL.revokeObjectURL(url);
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              console.error('Download failed:', _t);
              // Handle error (e.g., show a notification)
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3]]);
      }))();
    },
    //FLEXIBLE TOTAL
    // // AVERAGE
    // // Method 1: returns sum of the three averages
    // categoryAverage(type) {
    //     const values = [];
    //     this.rows.forEach(row => {
    //         if (type === 't') {
    //         // Only one 't' column per row
    //         const val = row.ppdo_t1;
    //         if (val != null && Number(val) !== 0) {
    //             values.push(Number(val));
    //         }
    //         } else {
    //         // For 'q' or 'e': three columns (1, 2, 3)
    //         for (let i = 1; i <= 3; i++) {
    //             const key = `ppdo_${type}${i}`;
    //             const val = row[key];
    //             if (val != null && Number(val) !== 0) {
    //             values.push(Number(val));
    //             }
    //         }
    //         }
    //     });
    //     if (values.length === 0) return 0;
    //     const sum = values.reduce((s, v) => s + v, 0);
    //     return sum / values.length;
    // },
    //     /**
    //     * Method 1: Total of the three category averages
    //     * returns avgQ + avgE + avgT
    //     */
    // ppdototalOfAverages() {
    //     const avgQ = this.categoryAverage('q');
    //     const avgE = this.categoryAverage('e');
    //     const avgT = this.categoryAverage('t');
    //     return avgQ + avgE + avgT;
    // },
    //     /**
    //     * Method 2: Average of the three category averages
    //     * returns (avgQ + avgE + avgT) / 3
    //     */
    // ppdoaverageOfAverages() {
    //     const avgQ = this.categoryAverage('q');
    //     const avgE = this.categoryAverage('e');
    //     const avgT = this.categoryAverage('t');
    //     return (avgQ + avgE + avgT) / 3;
    // }
    average: function average(values) {
      var valid = values.map(Number).filter(function (v) {
        return !isNaN(v) && v > 0;
      });
      if (!valid.length) return 0;
      return valid.reduce(function (sum, val) {
        return sum + val;
      }, 0) / valid.length;
    },
    // Sum of the averages of all OPCR items
    calculatePpdoTotal: function calculatePpdoTotal() {
      var _this11 = this;
      var total = 0;
      this.opcr_data.forEach(function (item) {
        var divisor = 0;
        var qAvg = _this11.average([item.ppdo_q1, item.ppdo_q2, item.ppdo_q3]);
        var eAvg = _this11.average([item.ppdo_e1, item.ppdo_e2, item.ppdo_e3]);
        var tAvg = _this11.average([item.ppdo_t1]);
        if (parseFloat(qAvg) > 0) {
          divisor += 1;
        }
        if (parseFloat(eAvg) > 0) {
          divisor += 1;
        }
        if (parseFloat(tAvg) > 0) {
          divisor += 1;
        }
        if (divisor < 1) {
          divisor = 1;
        }
        total += (qAvg + eAvg + tAvg) / divisor;
      });
      return Number(total.toFixed(2));
    },
    calculatePpdoTotal2: function calculatePpdoTotal2() {
      var total = 0;
      for (var i = 0; i < this.opcr_data.length; i++) {
        var rat_e = this.opcr_data[i].ppdo_rating_e;
        var rat_q = this.opcr_data[i].ppdo_rating_q;
        var rat_t = this.opcr_data[i].ppdo_rating_t;
        var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t);
        // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
        var div = 0;
        if (parseFloat(rat_e) >= 1) {
          div = div + 1;
        }
        if (parseFloat(rat_q) >= 1) {
          div = div + 1;
        }
        if (parseFloat(rat_t) >= 1) {
          div = div + 1;
        }
        if (div == 0) {
          div = 1;
        }
        total = total + avee / div;
      }
      // total = "44.44555555";
      // this.total_ave = total;
      return this.format_number_conv(total, 2, true);
    },
    // getTotalAverage2() {
    //     var total = 0;
    //     for (let i = 0; i < this.opcr_data.length; i++) {
    //         var rat_e = this.opcr_data[i].rating_e;
    //         var rat_q = this.opcr_data[i].rating_q;
    //         var rat_t = this.opcr_data[i].rating_t;
    //         var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t)
    //         // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
    //         var div = 0;
    //         if (parseFloat(rat_e) >= 1) {
    //             div = div + 1;
    //         }
    //         if (parseFloat(rat_q) >= 1) {
    //             div = div + 1;
    //         }
    //         if (parseFloat(rat_t) >= 1) {
    //             div = div + 1;
    //         }
    //         if (div == 0) {
    //             div = 1;
    //         }
    //         total = total + (avee / div);
    //     }
    //     // total = "44.44555555";
    //     // this.total_ave = total;
    //     return this.format_number_conv(total, 2, true);
    // },
    // Average of all averages across the entire OPCR data
    calculatePpdoAverage: function calculatePpdoAverage() {
      var _this12 = this;
      var total = 0;
      var count = 0;
      var d1 = 1;
      var d2 = 1;
      var d3 = 1;
      var divisor = 0;
      this.opcr_data.forEach(function (item) {
        var qAvg = _this12.average([item.ppdo_q1, item.ppdo_q2, item.ppdo_q3]);
        var eAvg = _this12.average([item.ppdo_e1, item.ppdo_e2, item.ppdo_e3]);
        var tAvg = _this12.average([item.ppdo_t1]);
        if (qAvg > 0) {
          d1 = 1;
        } else {
          d1 = 0;
        }
        if (eAvg > 0) {
          d2 = 1;
        } else {
          d2 = 0;
        }
        if (tAvg > 0) {
          d3 = 1;
        } else {
          d3 = 0;
        }
        divisor = d1 + d2 + d3;
        if (divisor < 1) {
          divisor = 1;
        } else {
          count++;
        }
        total += (qAvg + eAvg + tAvg) / divisor;
        // [qAvg, eAvg, tAvg].forEach(avg => {
        //     if (avg > 0) {
        //         total += avg;
        //         count++;
        //     }
        // });
      });
      return count ? Number((total / count).toFixed(2)) : 0;
    },
    calculatePpdoAverage2: function calculatePpdoAverage2() {
      var total = 0;
      var counter = 0;
      for (var i = 0; i < this.opcr_data.length; i++) {
        var rat_e = this.opcr_data[i].ppdo_rating_e;
        var rat_q = this.opcr_data[i].ppdo_rating_q;
        var rat_t = this.opcr_data[i].ppdo_rating_t;
        var avee = parseFloat(rat_e) + parseFloat(rat_q) + parseFloat(rat_t);
        // var ave = parseFloat(this.opcrs[ind].rating_e) + parseFloat(this.opcrs[ind].rating_q) + parseFloat(this.opcrs[ind].rating_t);
        var div = 0;
        if (parseFloat(rat_e) >= 1) {
          div = div + 1;
        }
        if (parseFloat(rat_q) >= 1) {
          div = div + 1;
        }
        if (parseFloat(rat_t) >= 1) {
          div = div + 1;
        }
        if (div == 0) {
          div = 1;
        }
        total = total + avee / div;
        if (total > 0) {
          counter += 1;
        }
      }
      // total = "44.44555555";
      // this.total_ave = total;
      if (counter < 0) {
        counter = 1;
      }
      var ave = total / counter;
      return this.format_number_conv(ave, 2, true);
    },
    // ACCOMPLISHMENT MOV
    showModalAccomplishmentMOV: function showModalAccomplishmentMOV(idpaps, department_code, year, semester, paps_param) {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this13.displayModalAccomplishmentMOV = true;
              _this13.displayModal = false;
              // Optional: clear previous data
              _this13.mov_accomplishment = [];
              // this.opcr_current = opcr;
              _this13.paps_current = paps_param;
              _context3.p = 1;
              _context3.n = 2;
              return axios.get('/api/opcr-mov-api', {
                params: {
                  ppa_id: idpaps,
                  year: year,
                  semester: semester,
                  department_id: department_code
                }
              });
            case 2:
              response = _context3.v;
              _this13.mov_accomplishment = response.data;
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              console.error('Failed to fetch MOV accomplishment:', _t2);
              _this13.mov_accomplishment = [];
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }))();
    },
    closeDisplayModalAccomplishmentMOV: function closeDisplayModalAccomplishmentMOV() {
      this.displayModalAccomplishmentMOV = false;
      this.displayModal = true;
      // alert(this.displayModal);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    //userId: Object,
    title: String,
    zIndex: {
      type: [Number, String],
      "default": 1055
    },
    backdrop: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      //my_id: this.props.userId,
      value: null
      //   options: [
      //       'Batman',
      //       'Robin',
      //       'Joker',
      //       ],
    };
  },
  mounted: function mounted() {},
  methods: {
    logU_ID: function logU_ID() {},
    closeModal: function closeModal() {
      this.$emit('close-modal-event');
    },
    saveChanges: function saveChanges() {
      this.closeModal();
    },
    loadPermissions: function loadPermissions() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    //userId: Object,
    title: String,
    zIndex: {
      type: [Number, String],
      "default": 1055
    }
  },
  data: function data() {
    return {
      //my_id: this.props.userId,
      value: null
      //   options: [
      //       'Batman',
      //       'Robin',
      //       'Joker',
      //       ],
    };
  },
  mounted: function mounted() {},
  methods: {
    logU_ID: function logU_ID() {},
    closeModal: function closeModal() {
      this.$emit('close-modal-event');
    },
    saveChanges: function saveChanges() {
      this.closeModal();
    },
    loadPermissions: function loadPermissions() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    prev: String,
    next: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    //userId: Object,
  },
  data: function data() {
    return {
      //my_id: this.props.userId,
      value: null,
      options: ['Batman', 'Robin', 'Joker']
    };
  },
  mounted: function mounted() {},
  methods: {
    logU_ID: function logU_ID() {},
    closeModal: function closeModal() {
      this.$emit('close-modal-event');
    },
    saveChanges: function saveChanges() {
      this.closeModal();
    },
    loadPermissions: function loadPermissions() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    //userId: Object,
    zIndex: {
      type: [Number, String],
      "default": 1060
    },
    backdrop: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      //my_id: this.props.userId,
      value: null,
      options: ['Batman', 'Robin', 'Joker']
    };
  },
  mounted: function mounted() {},
  methods: {
    logU_ID: function logU_ID() {},
    closeModal: function closeModal() {
      this.$emit('close-modal-event');
    },
    saveChanges: function saveChanges() {
      this.closeModal();
    },
    loadPermissions: function loadPermissions() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "row gap-20 masonry pos-r"
};
var _hoisted_2 = {
  "class": "masonry-item w-100"
};
var _hoisted_3 = {
  "class": "toolbar-card"
};
var _hoisted_4 = {
  "class": "toolbar-row toolbar-actions"
};
var _hoisted_5 = {
  "class": "toolbar-right"
};
var _hoisted_6 = {
  "class": "toolbar-row toolbar-filters"
};
var _hoisted_7 = {
  "class": "filter-group filter-group-grow"
};
var _hoisted_8 = {
  "class": "search-wrapper"
};
var _hoisted_9 = {
  key: 0,
  "class": "masonry-item w-100"
};
var _hoisted_10 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_11 = {
  "class": "d-flex justify-content-between align-items-center mb-4"
};
var _hoisted_12 = {
  "class": "text-muted small"
};
var _hoisted_13 = {
  "class": "table-responsive"
};
var _hoisted_14 = {
  "class": "table table-hover align-middle"
};
var _hoisted_15 = {
  "class": "text-center"
};
var _hoisted_16 = {
  "class": "dropdown dropstart"
};
var _hoisted_17 = {
  "class": "dropdown-menu action-dropdown",
  "aria-labelledby": "dropdownMenuButton1"
};
var _hoisted_18 = ["onClick"];
var _hoisted_19 = ["onClick"];
var _hoisted_20 = {
  "class": "row justify-content-center"
};
var _hoisted_21 = {
  "class": "col-md-12"
};
var _hoisted_22 = {
  "class": "sticky-header modal-summary-card"
};
var _hoisted_23 = {
  "class": "d-flex justify-content-end mb-2"
};
var _hoisted_24 = {
  key: 0
};
var _hoisted_25 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_26 = {
  "class": "table-responsive w-100",
  style: {
    "max-width": "100%",
    "overflow-x": "auto"
  }
};
var _hoisted_27 = {
  "class": "table table-sm table-bordered border-dark table-striped table-hover modern-rating-table",
  style: {
    "table-layout": "fixed"
  }
};
var _hoisted_28 = {
  rowspan: "3",
  "class": "review-col-mfo"
};
var _hoisted_29 = {
  rowspan: "3",
  "class": "review-col-paps"
};
var _hoisted_30 = {
  rowspan: "3",
  "class": "review-col-accomplishment"
};
var _hoisted_31 = {
  "class": "review-col-rating"
};
var _hoisted_32 = {
  "class": "review-col-rating"
};
var _hoisted_33 = {
  "class": "review-col-rating"
};
var _hoisted_34 = {
  rowspan: "2",
  "class": "review-col-remarks"
};
var _hoisted_35 = ["onUpdate:modelValue", "onChange"];
var _hoisted_36 = {
  rowspan: "2",
  "class": "review-col-mov"
};
var _hoisted_37 = ["onClick"];
var _hoisted_38 = ["onClick"];
var _hoisted_39 = {
  "class": "review-col-rating"
};
var _hoisted_40 = ["onUpdate:modelValue", "onChange"];
var _hoisted_41 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_42 = {
  "class": "review-col-rating"
};
var _hoisted_43 = ["onUpdate:modelValue", "onChange"];
var _hoisted_44 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_45 = {
  "class": "review-col-rating"
};
var _hoisted_46 = ["onUpdate:modelValue", "onChange"];
var _hoisted_47 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_48 = {
  "class": "review-col-rating"
};
var _hoisted_49 = ["onUpdate:modelValue", "onChange"];
var _hoisted_50 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_51 = {
  "class": "review-col-rating"
};
var _hoisted_52 = ["onUpdate:modelValue", "onChange"];
var _hoisted_53 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_54 = {
  "class": "review-col-rating"
};
var _hoisted_55 = ["onUpdate:modelValue", "onChange"];
var _hoisted_56 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_57 = {
  "class": "review-col-rating"
};
var _hoisted_58 = ["onUpdate:modelValue", "onChange"];
var _hoisted_59 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_60 = {
  "class": "review-col-rating"
};
var _hoisted_61 = ["onUpdate:modelValue", "onChange"];
var _hoisted_62 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_63 = {
  "class": "review-col-rating"
};
var _hoisted_64 = ["onUpdate:modelValue", "onChange"];
var _hoisted_65 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_66 = {
  "class": "review-col-rating"
};
var _hoisted_67 = ["onUpdate:modelValue", "onChange"];
var _hoisted_68 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_69 = {
  "class": "review-col-rating"
};
var _hoisted_70 = ["onUpdate:modelValue", "onChange", "disabled"];
var _hoisted_71 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_72 = {
  "class": "review-col-rating"
};
var _hoisted_73 = ["onUpdate:modelValue", "onChange", "disabled"];
var _hoisted_74 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_75 = {
  "class": "review-col-rating"
};
var _hoisted_76 = ["onUpdate:modelValue", "onChange", "disabled"];
var _hoisted_77 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_78 = {
  "class": "review-col-rating"
};
var _hoisted_79 = ["onUpdate:modelValue", "onChange", "disabled"];
var _hoisted_80 = {
  key: 0,
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_81 = {
  rowspan: "1",
  "class": "review-col-remarks"
};
var _hoisted_82 = ["onUpdate:modelValue", "onInput", "onChange"];
var _hoisted_83 = {
  rowspan: "1",
  "class": "review-col-mov"
};
var _hoisted_84 = {
  "class": "d-flex justify-content-center px-2"
};
var _hoisted_85 = ["onClick"];
var _hoisted_86 = {
  key: 0
};
var _hoisted_87 = {
  "class": "bg-secondary text-white"
};
var _hoisted_88 = {
  key: 0
};
var _hoisted_89 = {
  key: 1
};
var _hoisted_90 = ["src"];
var _hoisted_91 = ["href"];
var _hoisted_92 = ["onClick"];
var _hoisted_93 = {
  key: 2
};
var _hoisted_94 = {
  "class": "table-summary-row"
};
var _hoisted_95 = {
  "class": "table-summary-row"
};
var _hoisted_96 = {
  key: 1
};
var _hoisted_97 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_98 = {
  "class": "table-responsive w-100",
  style: {
    "max-width": "100%",
    "overflow-x": "auto"
  }
};
var _hoisted_99 = {
  "class": "table table-sm table-bordered border-dark table-striped table-hover modern-rating-table",
  style: {
    "table-layout": "fixed"
  }
};
var _hoisted_100 = {
  "class": "bg-secondary text-white"
};
var _hoisted_101 = {
  colspan: "4"
};
var _hoisted_102 = ["checked"];
var _hoisted_103 = {
  colspan: "4"
};
var _hoisted_104 = ["checked"];
var _hoisted_105 = ["rowspan"];
var _hoisted_106 = ["rowspan"];
var _hoisted_107 = ["rowspan"];
var _hoisted_108 = ["onUpdate:modelValue"];
var _hoisted_109 = ["onClick"];
var _hoisted_110 = ["onClick"];
var _hoisted_111 = {
  "class": "table-summary-row"
};
var _hoisted_112 = {
  "class": "table-summary-row"
};
var _hoisted_113 = {
  key: 2,
  "class": "table table-sm table-bordered border-dark table-striped table-hover modern-rating-table",
  style: {
    "table-layout": "fixed"
  }
};
var _hoisted_114 = {
  key: 0
};
var _hoisted_115 = ["onClick"];
var _hoisted_116 = {
  "class": "d-flex justify-content-center align-items-center gap-2"
};
var _hoisted_117 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_118 = {
  key: 0
};
var _hoisted_119 = {
  key: 0
};
var _hoisted_120 = ["src"];
var _hoisted_121 = ["src"];
var _hoisted_122 = {
  key: 2
};
var _hoisted_123 = ["src"];
var _hoisted_124 = {
  key: 1
};
var _hoisted_125 = {
  key: 0
};
var _hoisted_126 = ["src"];
var _hoisted_127 = {
  key: 1
};
var _hoisted_128 = ["src"];
var _hoisted_129 = {
  key: 2
};
var _hoisted_130 = ["src"];
var _hoisted_131 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_132 = ["src"];
var _hoisted_133 = {
  "class": "sticky-header modal-summary-card"
};
var _hoisted_134 = {
  "class": "table table-bordered table-striped accomplishment-modal-table"
};
var _hoisted_135 = {
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_136 = {
  "class": "d-flex flex-wrap"
};
var _hoisted_137 = ["src"];
var _hoisted_138 = ["src"];
var _hoisted_139 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  var _component_SideModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideModal");
  var _component_PrintModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrintModal");
  var _component_ModalAccomplishmentMOV = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalAccomplishmentMOV");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[15] || (_cache[15] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Home", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p style=\"text-align: justify;\">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.\n    </p>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p class=\"text-center\"> "), _cache[116] || (_cache[116] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "text-center"
  }, "Review/Approve ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </p> "), _cache[117] || (_cache[117] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "peers fxw-nw jc-sb ai-c"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "peers"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "OPCR (Rating)")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link :href=\"'/Sectoral'\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\">\n                    <path fill-rule=\"evenodd\" d=\"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z\"/>\n                    <path fill-rule=\"evenodd\" d=\"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z\"/>\n                </svg>\n            </Link> ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FILTERING SECTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Top Row: Actions "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "toolbar-left"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "toolbar-label"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sliders-h"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" FILTER PANEL ")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link class=\"tool-btn tool-btn-primary\" :href=\"`/Societal/create`\">\n                            <i class=\"fas fa-plus\"></i> Add Societal Goals\n                        </Link> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" test displayModal: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.displayModal), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Divider "), _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "toolbar-divider"
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Bottom Row: Filters "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Search "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "filter-label"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-search"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Search ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-search search-icon"
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.search = $event;
    }),
    type: "text",
    "class": "filter-input",
    placeholder: "Search ratings..."
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.search]])])])])])]), _cache[118] || (_cache[118] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "masonry-sizer col-md-6"
  }, null, -1 /* CACHED */)), !$data.displayModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table Header with Title and Stats "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "text-primary mb-0"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-list-ul me-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" OPCR Ratings List ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, " Showing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.from) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.to) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.total) + " entries ", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Responsive Table Container "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_14, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
    "class": "table-head-sticky"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-0 fw-semibold text-primary"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-building me-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Office ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-0 fw-semibold text-primary"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-calendar me-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Semester ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-0 fw-semibold text-primary"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-calendar-alt me-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Period Covered ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-0 fw-semibold text-primary"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-info-circle me-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Status ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-0 fw-semibold text-primary text-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-cogs me-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Actions ")])])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.data, function (dat) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.office.FFUNCTION) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat.id }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.semester) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat.rating_status }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.opcr_date), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getStatus(dat.rating_status)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-secondary btn-sm action-btn",
      type: "button",
      id: "dropdownMenuButton1",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "false"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      "class": "bi bi-three-dots",
      viewBox: "0 0 16 16"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
      d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    })])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link class=\"dropdown-item\" :href=\"`/Societal/${dat.id}/edit`\">Edit</Link> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.viewModal(dat.id, dat.rating_status, dat);
      }
    }, " View ", 8 /* PROPS */, _hoisted_18)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.viewPrintModal(dat.id, dat.office.FFUNCCOD);
      }
    }, " Print ", 8 /* PROPS */, _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link class=\"text-danger dropdown-item\" @click=\"deleteSectoral(dat.id)\">\n                                                Delete</Link> ")])])])])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pagination, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    next: $props.data.next_page_url,
    prev: $props.data.prev_page_url
  }, $props.source === 'ppdo_approval' ? {
    source: $props.source
  } : {}), null, 16 /* FULL_PROPS */, ["next", "prev"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ data }} ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> "), $data.displayModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    key: 1,
    onCloseModalEvent: $options.hideModal,
    title: "".concat($props.mode_1),
    "z-index": 1055
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$data$opcr_current$o, _$data$opcr_current, _$data$opcr_current2;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"masonry-item w-100\" v-if=\"displayModal\">\n            <div class=\"bgc-white p-20 bd\">\n\n            <div class=\"d-flex justify-content-end\">\n                <button\n                    type=\"button\"\n                    class=\"btn-close\"\n                    aria-label=\"Close\"\n                    @click=\"hideModal\">\n                </button>\n            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr_current }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LABEL CARD  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-success text-white shadow-sm",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $options.downloadExcel($data.opcrListId);
        })
      }, _toConsumableArray(_cache[23] || (_cache[23] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        "class": "fas fa-file-excel me-2"
      }, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Export to Excel ", -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "OFFICE: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$opcr_current$o = (_$data$opcr_current = $data.opcr_current) === null || _$data$opcr_current === void 0 || (_$data$opcr_current = _$data$opcr_current.office) === null || _$data$opcr_current === void 0 ? void 0 : _$data$opcr_current.FFUNCTION) !== null && _$data$opcr_current$o !== void 0 ? _$data$opcr_current$o : '-'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "SEMESTER: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_current.semester), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PERIOD COVERED: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_current.opcr_date), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "STATUS: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getStatus($data.opcr_current.rating_status)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button @click=\"downloadExcel(opcrListId)\">Export Excel</button> "), $props.mode_1 === 'Review' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [!$data.show_all_not_clicked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $options.toggleAllMovVisibility(false);
        }),
        "class": "btn btn-link p-0"
      }, " Collapse All ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $options.toggleAllMovVisibility(true);
        }),
        "class": "btn btn-link p-0"
      }, " Expand all ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <iframe :src=\"my_link\" style=\"width:100%; height:500px\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr_data }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" d-flex justify-content-center  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" class=\"sticky-header\" "), _cache[75] || (_cache[75] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "text-white",
        style: {
          "background-color": "#026673"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "MFO")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "PAPS")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Accomplishments")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "7",
        rowspan: "1",
        style: {
          "text-align": "center"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Rating")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Remarks")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "MOVs")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "text-white",
        style: {
          "background-color": "#026673"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Q1")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Q2")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Q3")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "E1")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "E2")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "E3")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "T1")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th></th> ")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.opcr_data, function (dat, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MFO, PAPS, ACCOMPLISHMENTS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            '--bs-table-accent-bg': $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            fontWeight: $data.opcr_data[index].mov_is_visible ? 'bold' : 'normal'
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MFO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.mfo_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PAPS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.paps_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Actual Accomplishments "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.accomplishments) + " ", 1 /* TEXT */), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "DPCR Score: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.computeAverageScore(dat.monthly_targets)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.q1_standard), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{  dat }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.q2_standard), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.q3_standard), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E1 "), _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": "review-col-rating"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  width: 2.5em; "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Standard Response Time"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"opcr_data[index].e1\" type=\"number\" class=\"form-select\" style=\"width: 4.2em; text-align: center;\"\n                                                @change=\"saveRating(opcr_data[index].e1, opcr_data[index].opcr_rating_id, 'e1')\"\n                                                :disabled=\"dat.e1_standard === 'No'\"\n                                                :style=\"dat.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\"\n                                            >\n                                                <option>1</option>\n                                                <option>2</option>\n                                                <option>3</option>\n                                                <option>4</option>\n                                                <option>5</option>\n                                            </select>\n                                            <div v-if=\"submit_attempt==true && dat.e1_standard === 'Yes' && !dat.e1\" style=\"color: red; font-weight: bold\">\n                                                Rating for this field is required to proceed with submission.\n                                            </div> ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E2 "), _cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": "review-col-rating"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Quantity Based"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"opcr_data[index].e2\" type=\"number\" class=\"form-select\" style=\"width: 4.2em; text-align: center;\"\n                                                @change=\"saveRating(opcr_data[index].e2, opcr_data[index].opcr_rating_id, 'e2')\"\n                                                :disabled=\"dat.e2_standard === 'No'\"\n                                                :style=\"dat.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\"\n                                            >\n                                                <option>1</option>\n                                                <option>2</option>\n                                                <option>3</option>\n                                                <option>4</option>\n                                                <option>5</option>\n                                            </select>\n                                            <div v-if=\"submit_attempt==true && dat.e2_standard === 'Yes' && !dat.e2\" style=\"color: red; font-weight: bold\">\n                                                Rating for this field is required to proceed with submission.\n                                            </div> ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E3 "), _cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": "review-col-rating"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"width: 2.5em; text-align: center;\"   "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Optimum use of resources"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"opcr_data[index].e3\" class=\"form-select\" style=\"width: 4.2em; text-align: center;\" type=\"number\"\n                                                @change=\"saveRating(opcr_data[index].e3, opcr_data[index].opcr_rating_id, 'e3')\"\n                                                :disabled=\"dat.e3_standard === 'No'\"\n                                                :style=\"dat.e3_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\"\n                                            >\n                                                <option>1</option>\n                                                <option>2</option>\n                                                <option>3</option>\n                                                <option>4</option>\n                                                <option>5</option>\n                                            </select>\n                                            <div v-if=\"submit_attempt==true && dat.e3_standard === 'Yes' && !dat.e3\" style=\"color: red; font-weight: bold\">\n                                                Rating for this field is required to proceed with submission.\n                                            </div> ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" T1 "), _cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": "review-col-rating"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Timeliness (Deadline)"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" t1_standard: {{ dat.t1_standard }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :disabled=\"dat.t1_standard !== 'Yes'\"\n                                                :style=\"dat.t1_standard !== 'Yes' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"opcr_data[index].t1\" type=\"number\" class=\"form-select\" style=\"width: 4.2em; text-align: center;\"\n                                                @change=\"saveRating(opcr_data[index].t1, opcr_data[index].opcr_rating_id, 't1')\"\n\n                                                :disabled=\"\n                                                    dat.t1_standard === 'No' ||\n                                                    dat.t1_standard === null ||\n                                                    dat.t1_standard === undefined ||\n                                                    Number.isNaN(dat.t1_standard)\n                                                \"\n                                                :style=\"\n                                                    dat.t1_standard === 'No' ||\n                                                    dat.t1_standard === null ||\n                                                    dat.t1_standard === undefined ||\n                                                    Number.isNaN(dat.t1_standard)\n                                                        ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;'\n                                                        : ''\n                                                \"\n                                            >\n                                                <option>1</option>\n                                                <option>2</option>\n                                                <option>3</option>\n                                                <option>4</option>\n                                                <option>5</option>\n                                            </select>\n                                            <div v-if=\"submit_attempt==true && dat.t1_standard === 'Yes' && !dat.t1\" style=\"color: red; font-weight: bold\">\n                                                Rating for this field is required to proceed with submission.\n                                            </div> ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td></td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" REMARKS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" @input=\"autoResize($event)\" ref=\"remarksTextarea\""), _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Office Remarks")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].remarks = $event;
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].remarks, $data.opcr_data[index].opcr_rating_id, 'remarks');
          },
          style: {
            "background-color": "#ABB3BFFF",
            "color": "#212427FF"
          },
          disabled: ""
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_35), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.opcr_data[index].remarks]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOVS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("opcr_data[index].mov_is_visible: {{ opcr_data[index].mov_is_visible }}\n                                            count_movs: {{ opcr_data[index].count_movs }}\n                                            :disabled=\"!dat.movs\"\n                                                :style=\"!dat.movs ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\" "), !$data.opcr_data[index].mov_is_visible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          onClick: function onClick($event) {
            return $options.updateMOVisVisible($data.opcr_data[index].mov_is_visible, index);
          },
          "class": "p-1 rounded bg-transparent hover:bg-blue-100 border-0",
          title: "View MOVs"
        }, _toConsumableArray(_cache[31] || (_cache[31] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          fill: "blue",
          "class": "bi bi-eye-fill",
          viewBox: "0 0 16 16"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
        })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_37)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          onClick: function onClick($event) {
            return $options.updateMOVisVisible($data.opcr_data[index].mov_is_visible, index);
          },
          "class": "p-1 rounded bg-transparent hover:bg-blue-100 border-0",
          title: "View MOVs"
        }, _toConsumableArray(_cache[32] || (_cache[32] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          fill: "currentColor",
          "class": "bi bi-eye-slash-fill",
          viewBox: "0 0 16 16"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"
        })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_38))])], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SELF RATING "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            '--bs-table-accent-bg': $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            fontWeight: $data.opcr_data[index].mov_is_visible ? 'bold' : 'normal'
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].q1 = $event;
          },
          type: "number",
          "class": "form-select",
          style: {
            "width": "4.2em",
            "text-align": "center"
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].q1, $data.opcr_data[index].opcr_rating_id, 'q1');
          },
          disabled: ""
        }, _toConsumableArray(_cache[37] || (_cache[37] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_40), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].q1]]), $data.submit_attempt == true && !dat.q1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{  dat }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].q2 = $event;
          },
          type: "number",
          "class": "form-select",
          style: {
            "width": "4.2em",
            "text-align": "center"
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].q2, $data.opcr_data[index].opcr_rating_id, 'q2');
          },
          disabled: ""
        }, _toConsumableArray(_cache[38] || (_cache[38] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_43), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].q2]]), $data.submit_attempt == true && !dat.q2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_44, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Q3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].q3 = $event;
          },
          type: "number",
          "class": "form-select",
          style: {
            "width": "4.2em",
            "text-align": "center"
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].q3, $data.opcr_data[index].opcr_rating_id, 'q3');
          },
          disabled: ""
        }, _toConsumableArray(_cache[39] || (_cache[39] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_46), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].q3]]), $data.submit_attempt == true && !dat.q3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_47, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  width: 2.5em; "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].e1 = $event;
          },
          type: "number",
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].e1, $data.opcr_data[index].opcr_rating_id, 'e1');
          },
          disabled: ""
        }, _toConsumableArray(_cache[40] || (_cache[40] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_49), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].e1]]), $data.submit_attempt == true && dat.e1_standard === 'Yes' && !dat.e1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" width: 2.5em;  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].e2 = $event;
          },
          type: "number",
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].e2, $data.opcr_data[index].opcr_rating_id, 'e2');
          },
          disabled: ""
        }, _toConsumableArray(_cache[41] || (_cache[41] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_52), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].e2]]), $data.submit_attempt == true && dat.e2_standard === 'Yes' && !dat.e2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_53, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" E3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"width: 2.5em; text-align: center;\"   "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].e3 = $event;
          },
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.e3_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          type: "number",
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].e3, $data.opcr_data[index].opcr_rating_id, 'e3');
          },
          disabled: ""
        }, _toConsumableArray(_cache[42] || (_cache[42] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_55), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].e3]]), $data.submit_attempt == true && dat.e3_standard === 'Yes' && !dat.e3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_56, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" T1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" t1_standard: {{ dat.t1_standard }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :disabled=\"dat.t1_standard !== 'Yes'\"\n                                                :style=\"dat.t1_standard !== 'Yes' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : ''\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :disabled=\"\n                                                    dat.t1_standard === 'No' ||\n                                                    dat.t1_standard === null ||\n                                                    dat.t1_standard === undefined ||\n                                                    Number.isNaN(dat.t1_standard)\n                                                \" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].t1 = $event;
          },
          type: "number",
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.t1_standard === 'No' || dat.t1_standard === null || dat.t1_standard === undefined || Number.isNaN(dat.t1_standard) ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].t1, $data.opcr_data[index].opcr_rating_id, 't1');
          },
          disabled: ""
        }, _toConsumableArray(_cache[43] || (_cache[43] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_58), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].t1]]), $data.submit_attempt == true && dat.t1_standard === 'Yes' && !dat.t1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_59, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO Ratings "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            '--bs-table-accent-bg': $data.opcr_data[index].mov_is_visible ? '#b8f5fc' : '#fff5d9',
            fontWeight: $data.opcr_data[index].mov_is_visible ? 'bold' : 'normal'
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO Q1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].ppdo_q1 = $event;
          },
          type: "number",
          "class": "form-select",
          style: {
            "width": "4.2em",
            "text-align": "center"
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].ppdo_q1, $data.opcr_data[index].opcr_rating_id, 'ppdo_q1');
          }
        }, _toConsumableArray(_cache[44] || (_cache[44] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "0", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_61), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].ppdo_q1]]), $data.submit_attempt == true && !dat.ppdo_q1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_62, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO Q2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].ppdo_q2 = $event;
          },
          type: "number",
          "class": "form-select",
          style: {
            "width": "4.2em",
            "text-align": "center"
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].ppdo_q2, $data.opcr_data[index].opcr_rating_id, 'ppdo_q2');
          }
        }, _toConsumableArray(_cache[45] || (_cache[45] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "0", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_64), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].ppdo_q2]]), $data.submit_attempt == true && !dat.ppdo_q2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_65, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO Q3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].ppdo_q3 = $event;
          },
          type: "number",
          "class": "form-select",
          style: {
            "width": "4.2em",
            "text-align": "center"
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].ppdo_q3, $data.opcr_data[index].opcr_rating_id, 'ppdo_q3');
          }
        }, _toConsumableArray(_cache[46] || (_cache[46] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "0", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_67), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].ppdo_q3]]), $data.submit_attempt == true && !dat.ppdo_q3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_68, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO E1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].ppdo_e1 = $event;
          },
          type: "number",
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.e1_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].ppdo_e1, $data.opcr_data[index].opcr_rating_id, 'ppdo_e1');
          },
          disabled: dat.e1_standard === 'No'
        }, _toConsumableArray(_cache[47] || (_cache[47] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "0", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_70), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].ppdo_e1]]), $data.submit_attempt == true && dat.e1_standard === 'Yes' && !dat.ppdo_e1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_71, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO E2 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].ppdo_e2 = $event;
          },
          type: "number",
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.e2_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].ppdo_e2, $data.opcr_data[index].opcr_rating_id, 'ppdo_e2');
          },
          disabled: dat.e2_standard === 'No'
        }, _toConsumableArray(_cache[48] || (_cache[48] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "0", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_73), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].ppdo_e2]]), $data.submit_attempt == true && dat.e2_standard === 'Yes' && !dat.ppdo_e2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_74, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO E3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" rating e3: {{ dat.rating_e }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].ppdo_e3 = $event;
          },
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.e3_standard === 'No' ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          type: "number",
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].ppdo_e3, $data.opcr_data[index].opcr_rating_id, 'ppdo_e3');
          },
          disabled: dat.e3_standard === 'No'
        }, _toConsumableArray(_cache[49] || (_cache[49] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "0", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_76), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].ppdo_e3]]), $data.submit_attempt == true && dat.e3_standard === 'Yes' && !dat.ppdo_e3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_77, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO T1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" dat.ppdo_t1_standard: {{ dat.ppdo_t1_standard }} --\n                                            dat.t1_standard: {{ dat.t1_standard }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].ppdo_t1 = $event;
          },
          type: "number",
          "class": "form-select",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
            "width": "4.2em",
            "text-align": "center"
          }, dat.t1_standard === 'No' || dat.t1_standard === null || dat.t1_standard === undefined || Number.isNaN(dat.ppdo_t1_standard) ? 'background-color: #ABB3BFFF; color: #212427FF; cursor: not-allowed;' : '']),
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].ppdo_t1, $data.opcr_data[index].opcr_rating_id, 'ppdo_t1');
          },
          disabled: dat.t1_standard === 'No' || dat.t1_standard === null || dat.t1_standard === undefined || Number.isNaN(dat.ppdo_t1_standard)
        }, _toConsumableArray(_cache[50] || (_cache[50] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "0", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "1", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "2", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "3", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "4", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "5", -1 /* CACHED */)])), 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_79), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.opcr_data[index].ppdo_t1]]), $data.submit_attempt == true && dat.t1_standard === 'Yes' && !dat.ppdo_t1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_80, " Rating for this field is required to proceed with submission. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" REMARKS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_81, [_cache[51] || (_cache[51] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PPDO Remarks")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" @input=\"autoResize($event)\" ref=\"remarksTextarea\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].ppdo_remarks = $event;
          },
          onInput: function onInput($event) {
            return $options.markPpdoRemarksUnsaved($data.opcr_data[index].opcr_rating_id);
          },
          onChange: function onChange($event) {
            return $options.saveRating($data.opcr_data[index].ppdo_remarks, $data.opcr_data[index].opcr_rating_id, 'ppdo_remarks');
          }
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_82), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.opcr_data[index].ppdo_remarks]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOVS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.showModalAccomplishmentMOV(dat.idpaps, dat.department_code, dat.year, dat.sem, dat);
          },
          "class": "btn btn-sm btn-primary mov-btn text-white",
          title: "View MOVs"
        }, _toConsumableArray(_cache[52] || (_cache[52] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
          "class": "fas fa-folder-open me-1"
        }, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" SHOW MOV ", -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_85)])])], 4 /* STYLE */), $data.opcr_data[index].mov_is_visible && parseFloat($data.opcr_data[index].count_movs) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_86, [_cache[53] || (_cache[53] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          "class": "bg-secondary text-white"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" class=\"no-stripe-bg\" ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FILES LABEL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_87, [parseFloat($data.opcr_data[index].count_movs) > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_88, "Files")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_89, "File"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DOWNLOAD LABEL "), _cache[54] || (_cache[54] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          "class": "bg-secondary text-white"
        }, " Download ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" VIEW LABEL "), _cache[55] || (_cache[55] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          "class": "bg-secondary text-white"
        }, " View ", -1 /* CACHED */)), _cache[56] || (_cache[56] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          colspan: "7",
          "class": "bg-secondary text-white"
        }, null, -1 /* CACHED */)), _cache[57] || (_cache[57] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
          "class": "bg-secondary text-white"
        }, null, -1 /* CACHED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.opcr_data[index].mov_is_visible && parseFloat($data.opcr_data[index].count_movs) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: 1
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.movs, function (file) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [_cache[62] || (_cache[62] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
            "class": "no-stripe-bg"
          }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FILENAME "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            src: _ctx.getPreUploadFileIcon(file.filename.split('.').pop()),
            alt: "file preview",
            style: {
              "width": "30px",
              "height": "30px",
              "object-fit": "cover"
            }
          }, null, 8 /* PROPS */, _hoisted_90), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.filename), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOV ICON "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
            href: "/movs/download/".concat(file.id),
            "class": "inline-flex items-center",
            title: "Download",
            target: "_blank"
          }, _toConsumableArray(_cache[58] || (_cache[58] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "green",
            "class": "bi bi-cloud-arrow-down-fill",
            viewBox: "0 0 16 16"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
            d: "M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"
          })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_91), _cache[59] || (_cache[59] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PREVIEW "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            onClick: function onClick($event) {
              return $options.previewFile(file);
            },
            "class": "p-1 rounded bg-transparent hover:bg-blue-100 border-0",
            title: "Preview"
          }, _toConsumableArray(_cache[60] || (_cache[60] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "blue",
            "class": "bi bi-eye-fill",
            viewBox: "0 0 16 16"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
            d: "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
            d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
          })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_92), _cache[61] || (_cache[61] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */))]), _cache[63] || (_cache[63] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
            colspan: "7"
          }, null, -1 /* CACHED */)), _cache[64] || (_cache[64] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))]);
        }), 256 /* UNKEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.opcr_data[index].mov_is_visible && parseFloat($data.opcr_data[index].count_movs) < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_93, _toConsumableArray(_cache[65] || (_cache[65] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          colspan: "11"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("         "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": "d-inline-block px-3 py-2 bg-danger bg-opacity-10 border border-danger rounded"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": "text-danger fw-bold"
        }, "No MOVs uploaded!!!")])], -1 /* CACHED */)])))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
      }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_94, [_cache[66] || (_cache[66] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "1"
      }, null, -1 /* CACHED */)), _cache[67] || (_cache[67] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "TOTAL RATING (Office)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getTotalAverage2()), 1 /* TEXT */), _cache[68] || (_cache[68] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "TOTAL RATING (PPDO)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculatePpdoTotal()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td colspan=\"3\">TOTAL RATING (DPCR)</td>\n                                    <td>{{ computeDPCRTotal(opcr_data) }}</td> "), _cache[69] || (_cache[69] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td></td> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_95, [_cache[70] || (_cache[70] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "2"
      }, null, -1 /* CACHED */)), _cache[71] || (_cache[71] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "FINAL AVERAGE RATING (Office)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getAverageAll2()), 1 /* TEXT */), _cache[72] || (_cache[72] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "FINAL AVERAGE RATING (PPDO)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculatePpdoAverage()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td colspan=\"3\">FINAL AVERAGE RATING (DPCR)</td>\n                                    <td>{{ computeDPCRAverage(opcr_data) }}</td> "), _cache[73] || (_cache[73] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[74] || (_cache[74] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.mode_1 === 'Approve' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <table class=\"table table-hover table-bordered border-dark\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" class=\"sticky-header\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_100, [_cache[78] || (_cache[78] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Major Final Output", -1 /* CACHED */)), _cache[79] || (_cache[79] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Success Indicators (Targets + Measures)", -1 /* CACHED */)), _cache[80] || (_cache[80] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Alloted Budget", -1 /* CACHED */)), _cache[81] || (_cache[81] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Accountable Division", -1 /* CACHED */)), _cache[82] || (_cache[82] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Actual Accomplishments", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "radio",
        name: "rating",
        checked: $data.currentRatingType === '0',
        onChange: _cache[4] || (_cache[4] = function ($event) {
          return $options.setRatingType('ppdo', $data.opcr_current.id);
        })
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_102), _cache[76] || (_cache[76] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rating (Self Rating) ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" -{{ opcr_current.id }} -ratingxcxv type - {{ currentRatingType }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" @change=\"setRatingType('dpcr', opcr_current.id)\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "radio",
        name: "rating",
        checked: $data.opcr_current.year < 2026 ? $data.currentRatingType === '1' : $data.currentRatingType === '2',
        onChange: _cache[5] || (_cache[5] = function ($event) {
          return $options.setRatingType('ppdo_verification', $data.opcr_current.id);
        })
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_104), _cache[77] || (_cache[77] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rating (PPDO Score) ", -1 /* CACHED */))]), _cache[83] || (_cache[83] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Remarks", -1 /* CACHED */)), _cache[84] || (_cache[84] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "MOV", -1 /* CACHED */))]), _cache[85] || (_cache[85] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "bg-secondary text-white"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quality"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Efficiency"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Timeliness"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Average"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quality"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Efficiency"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Timeliness"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Average")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr class=\"bg-secondary text-white\">\n                                    <th>Quality</th>\n                                    <th>Efficiency</th>\n                                    <th>Timeliness</th>\n                                    <th>Average</th>\n                                </tr> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.opcr_data, function (opcr, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [index === 0 || opcr.mfo_desc !== $data.opcr_data[index - 1].mfo_desc ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 0,
          rowspan: $options.getRowspan(opcr.mfo_desc, index),
          style: {
            "vertical-align": "middle"
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.mfo_desc), 9 /* TEXT, PROPS */, _hoisted_105)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), index === 0 || opcr.success_indicator !== $data.opcr_data[index - 1].success_indicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 1,
          rowspan: $options.getRowspanIndicator(opcr.success_indicator, index),
          style: {
            "vertical-align": "middle"
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.target_success_indicator), 9 /* TEXT, PROPS */, _hoisted_106)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[87] || (_cache[87] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), index === 0 || opcr.office_accountable !== $data.opcr_data[index - 1].office_accountable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 2,
          rowspan: $options.getRowspan2(opcr.office_accountable, index),
          style: {
            "vertical-align": "middle"
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.office_accountable), 9 /* TEXT, PROPS */, _hoisted_107)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <textarea v-model=\"opcr_data[index].accomplishments\"\n                                            style=\"height: inherit\"></textarea> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_data[index].accomplishments), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SELF RATING ********************************************* "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input v-model=\"opcr_data[index].rating_q\" class=\"centered-input\" type=\"number\"\n                                            min=\"0\" max=\"5\" step=\"1\" disabled> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_data[index].rating_q), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_data[index].rating_e), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input v-model=\"opcr_data[index].rating_t\" class=\"centered-input\" type=\"number\"\n                                            min=\"0\" max=\"5\" step=\"1\" disabled> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_data[index].rating_t), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input :value=\"computeAverage(opcr_data[index])\" class=\"centered-input\" type=\"number\"\n                                        min=\"0\" max=\"5\" step=\"1\" disabled\n                                        > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.computeAverage($data.opcr_data[index])), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PPDO RATING ************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($options.average([opcr.ppdo_q1, opcr.ppdo_q2, opcr.ppdo_q3]), 2, true)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($options.average([opcr.ppdo_e1, opcr.ppdo_e2, opcr.ppdo_e3]), 2, true)) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ computeAverageByType(opcr_data[index].monthly_targets,\"e\") }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opcr.ppdo_t1) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr_data[index].monthly_targets.t1 }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input :value=\"computeAverage(opcr_data[index])\" class=\"centered-input\" type=\"number\"\n                                       min=\"0\" max=\"5\" step=\"1\" disabled\n                                    > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($options.computeAverageQET($options.average([opcr.ppdo_q1, opcr.ppdo_q2, opcr.ppdo_q3]), $options.average([opcr.ppdo_e1, opcr.ppdo_e2, opcr.ppdo_e3]), opcr.ppdo_t1), 2, true)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.opcr_data[index].remarks = $event;
          },
          "class": "form-control",
          style: {
            "height": "inherit"
          }
        }, null, 8 /* PROPS */, _hoisted_108), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.opcr_data[index].remarks]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          type: "button",
          "class": "btn btn-primary text-white",
          onClick: function onClick($event) {
            return _ctx.showModalMOV($data.opcr_data[index].id);
          }
        }, "Upload MOVs ", 8 /* PROPS */, _hoisted_109), _cache[86] || (_cache[86] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.showModalAccomplishmentMOV(opcr.idpaps, opcr.department_code, opcr.year, opcr.sem, opcr);
          },
          "class": "btn btn-primary text-white",
          title: "View MOVs"
        }, " SHOW MOV ", 8 /* PROPS */, _hoisted_110)])]);
      }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTALS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_111, [_cache[88] || (_cache[88] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "5"
      }, null, -1 /* CACHED */)), _cache[89] || (_cache[89] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "TOTAL RATING (Self Rating)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getTotalAverage2()), 1 /* TEXT */), _cache[90] || (_cache[90] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "TOTAL RATING (PPDO)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculatePpdoTotal()) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("DPCR {{ computeDPCRTotal(opcr_data) }} ")]), _cache[91] || (_cache[91] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[92] || (_cache[92] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AVERAGES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_112, [_cache[93] || (_cache[93] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "5"
      }, null, -1 /* CACHED */)), _cache[94] || (_cache[94] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "FINAL AVERAGE RATING (Self Rating)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getAverageAll2()), 1 /* TEXT */), _cache[95] || (_cache[95] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, "FINAL AVERAGE RATING (PPDO)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculatePpdoAverage()) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DPCR "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ computeDPCRAverage(opcr_data) }} ")]), _cache[96] || (_cache[96] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[97] || (_cache[97] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <table>\n                <tr v-for=\"(item, index) in opcr_data\" :key=\"index\">\n                    <td>Q:\n                            {{ average([\n                            item.ppdo_q1,\n                            item.ppdo_q2,\n                            item.ppdo_q3\n                        ]) }}\n                    </td>\n                    <td>E:\n                        {{\n                            average([\n                                    item.ppdo_e1,\n                                    item.ppdo_e2,\n                                    item.ppdo_e3\n                                ])\n                        }}\n                    </td>\n\n                    <td>T:\n                        {{\n                            average([\n                                    item.ppdo_t1\n                                ])\n                        }}\n                    </td>\n                    <td>\n                        Row:\n                        {{\n                            (() => {\n                                const qAvg = average([\n                                    item.ppdo_q1,\n                                    item.ppdo_q2,\n                                    item.ppdo_q3\n                                ]);\n\n                                const eAvg = average([\n                                    item.ppdo_e1,\n                                    item.ppdo_e2,\n                                    item.ppdo_e3\n                                ]);\n\n                                const tAvg = average([\n                                    item.ppdo_t1\n                                ]);\n\n                                let divisor = 0;\n\n                                if (parseFloat(qAvg) > 0) divisor++;\n                                if (parseFloat(eAvg) > 0) divisor++;\n                                if (parseFloat(tAvg) > 0) divisor++;\n\n                                return divisor > 0\n                                    ? ((qAvg + eAvg + tAvg) / divisor).toFixed(2)\n                                    : '0.00';\n                            })()\n                        }}\n                    </td>\n                    <td>TOTAL: {{ calculatePpdoTotal() }}</td>\n                </tr>\n            </table> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ opcr_data }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" opcr remarks "), _ctx.hasOpcrRemarks ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_113, [_cache[98] || (_cache[98] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Remarks"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Created at"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$data$opcr_current2 = $data.opcr_current) === null || _$data$opcr_current2 === void 0 ? void 0 : _$data$opcr_current2.opcr_remarks, function (remark) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: remark.id
        }, [remark.remarks && remark.remarks.trim() !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(remark.remarks), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(remark.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-sm btn-danger",
          type: "button",
          onClick: function onClick($event) {
            return $options.deleteRemark(remark.id);
          }
        }, " Delete ", 8 /* PROPS */, _hoisted_115)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
      }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [_cache[99] || (_cache[99] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "mb-0"
      }, "REMARKS:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.form.remarks = $event;
        }),
        type: "text",
        onInput: _cache[7] || (_cache[7] = function () {
          return $options.markFinalRemarkUnsaved && $options.markFinalRemarkUnsaved.apply($options, arguments);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.remarks]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-secondary text-white",
        onClick: _cache[8] || (_cache[8] = function () {
          return $options.saveRemarks && $options.saveRemarks.apply($options, arguments);
        })
      }, "Save Remarks")]), _cache[102] || (_cache[102] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [$data.opcr_current.rating_status == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[9] || (_cache[9] = function ($event) {
          return $options.reviewSubmit();
        }),
        "class": "btn btn-primary text-white"
      }, "Review")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[100] || (_cache[100] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), $data.opcr_current.rating_status == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        onClick: _cache[10] || (_cache[10] = function ($event) {
          return $options.approveSubmit();
        }),
        "class": "btn btn-success text-white"
      }, "Approve")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[101] || (_cache[101] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return $options.returnSubmit();
        }),
        "class": "btn btn-danger text-white"
      }, "Return")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div>\n        </div> ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent", "title"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.displaySideModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SideModal, {
    key: 2,
    onCloseModalEvent: _cache[14] || (_cache[14] = function ($event) {
      return $data.displaySideModal = false;
    }),
    style: {
      "z-index": "9999"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_cache[105] || (_cache[105] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
        "class": "text-lg font-semibold"
      }, "Preview SideModal", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" file_extension: {{ file_extension }} -- {{ view_link }} -- {{ disk }} "), $props.disk === 'public' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <iframe v-if=\"file_extension === 'pdf'\"\n                    :src=\"`/storage/${current_filepath}`\"\n                    width=\"100%\"\n                    height=\"500px\">\n                </iframe> "), _ctx.file_extension === 'pdf' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: _ctx.view_link,
        width: "100%",
        height: "500px"
      }, null, 8 /* PROPS */, _hoisted_120)])) : _ctx.imageTypes.includes(_ctx.file_extension) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .toLowerCase() "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[103] || (_cache[103] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Image siya ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.view_link,
        alt: "preview",
        "class": "max-w-full max-h-[500px] cursor-pointer",
        onClick: _cache[12] || (_cache[12] = function () {
          return _ctx.openModal && _ctx.openModal.apply(_ctx, arguments);
        })
      }, null, 8 /* PROPS */, _hoisted_121)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: "https://docs.google.com/gview?url=".concat(encodeURIComponent(_ctx.view_link), "&embedded=true"),
        width: "100%",
        height: "600"
      }, null, 8 /* PROPS */, _hoisted_123)]))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_124, [_ctx.file_extension === 'pdf' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: _ctx.view_link,
        width: "100%",
        height: "500px"
      }, null, 8 /* PROPS */, _hoisted_126)])) : _ctx.imageTypes.includes(_ctx.file_extension.toLowerCase()) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_127, [_cache[104] || (_cache[104] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Image siya ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.view_link,
        alt: "preview",
        "class": "max-w-full max-h-[500px] cursor-pointer",
        onClick: _cache[13] || (_cache[13] = function () {
          return _ctx.openModal && _ctx.openModal.apply(_ctx, arguments);
        })
      }, null, 8 /* PROPS */, _hoisted_128)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: "https://docs.google.com/gview?url=".concat(encodeURIComponent(_ctx.view_link), "&embedded=true"),
        width: "100%",
        height: "600"
      }, null, 8 /* PROPS */, _hoisted_130)]))])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <br>\n            <iframe :src=\"`/storage/${current_filepath}`\"></iframe>\n            <br>\n            <a :href=\"`/storage/${current_filepath}`\" target=\"_blank\">\n                Open File\n            </a> ")];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.displayPrintModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PrintModal, {
    key: 3,
    onCloseModalEvent: $options.hidePrintModal,
    title: "PRINTING"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ my_link }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: $data.print_link,
        style: {
          "width": "100%",
          "height": "400px"
        }
      }, null, 8 /* PROPS */, _hoisted_132)])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACCOMPLISHMENT MOV MODAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" title=\"Accomplishment MOV\" "), $data.displayModalAccomplishmentMOV ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ModalAccomplishmentMOV, {
    key: 4,
    onCloseModalEvent: $options.closeDisplayModalAccomplishmentMOV,
    "z-index": 1100,
    style: {
      "z-index": "1100"
    },
    backdrop: false
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$data$paps_current, _$data$paps_current2, _$data$paps_current3, _$data$opcr_current$o2, _$data$opcr_current3;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"d-flex justify-content-end mb-2\">\n                    <button\n                        type=\"button\"\n                        class=\"btn btn-success text-white shadow-sm\"\n                        @click=\"downloadExcel(opcrListId)\">\n                        <i class=\"fas fa-file-excel me-2\"></i>\n                        Export to Excel\n                    </button>\n                </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" paps_cuirrent: {{ paps_current }} "), _cache[106] || (_cache[106] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PPA: ", -1 /* CACHED */)), _cache[107] || (_cache[107] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$paps_current = $data.paps_current) === null || _$data$paps_current === void 0 ? void 0 : _$data$paps_current.paps_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[108] || (_cache[108] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "MFO: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$paps_current2 = $data.paps_current) === null || _$data$paps_current2 === void 0 ? void 0 : _$data$paps_current2.mfo_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[109] || (_cache[109] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Accomplishments: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$paps_current3 = $data.paps_current) === null || _$data$paps_current3 === void 0 ? void 0 : _$data$paps_current3.accomplishments), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[110] || (_cache[110] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "OFFICE: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$opcr_current$o2 = (_$data$opcr_current3 = $data.opcr_current) === null || _$data$opcr_current3 === void 0 || (_$data$opcr_current3 = _$data$opcr_current3.office) === null || _$data$opcr_current3 === void 0 ? void 0 : _$data$opcr_current3.FFUNCTION) !== null && _$data$opcr_current$o2 !== void 0 ? _$data$opcr_current$o2 : '-'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[111] || (_cache[111] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "SEMESTER: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_current.semester), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[112] || (_cache[112] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PERIOD COVERED: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.opcr_current.opcr_date), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[113] || (_cache[113] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "STATUS: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getStatus($data.opcr_current.rating_status)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_134, [_cache[115] || (_cache[115] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        width: "10%"
      }, "Date"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        width: "20%"
      }, "Title of Accomplishment"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        width: "25%"
      }, "Brief Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        width: "20%"
      }, "Scope"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        width: "25%"
      }, "Images")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.mov_accomplishment, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title_of_accomplishment), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.brief_description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_135, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.scope), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [item.image1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
          key: 0,
          src: item.image1,
          "class": "img-thumbnail mr-2 mb-2",
          style: {
            "max-width": "180px",
            "max-height": "180px"
          }
        }, null, 8 /* PROPS */, _hoisted_137)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.image2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
          key: 1,
          src: item.image2,
          "class": "img-thumbnail mb-2",
          style: {
            "max-width": "180px",
            "max-height": "180px"
          }
        }, null, 8 /* PROPS */, _hoisted_138)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
      }), 128 /* KEYED_FRAGMENT */)), $data.mov_accomplishment.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_139, _toConsumableArray(_cache[114] || (_cache[114] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "5",
        "class": "text-center"
      }, " No accomplishments found. ", -1 /* CACHED */)])))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n        <Modal2 v-if=\"displayModal2\" @close-modal-event=\"hideModal\">\n            <button @click=\"backTo()\" class=\"btn btn-light\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                    class=\"bi bi-box-arrow-in-left\" viewBox=\"0 0 16 16\">\n                    <path fill-rule=\"evenodd\"\n                        d=\"M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z\" />\n                    <path fill-rule=\"evenodd\"\n                        d=\"M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z\" />\n                </svg>\n            </button>\n            {{ mode }} Remarks:\n            <input class=\"form-control\" v-model=\"remarks\" type=\"text\" />\n            viewModal(opcr_id, status, opcr)\n            &nbsp;v-if=\"auth.user.office.department_code == '04'\"\n            <button @click=\"confirmSubmission()\" class=\"btn btn-primary text-white\">Done</button>&nbsp;\n            <button @click=\"hideModal()\" class=\"btn btn-danger text-white\">Cancel</button>\n        </Modal2> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ auth }}\n        {{ auth.user.office.department_code }}\n        ")])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "sidebar-wrapper",
  "class": "sidebar-nav nav navbar-inverse"
};
var _hoisted_2 = {
  "class": "row",
  style: {
    "width": "380px"
  }
};
var _hoisted_3 = {
  "class": "bgc-white"
};
var _hoisted_4 = {
  "class": "modal-header"
};
var _hoisted_5 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
    "class": "modal-title",
    id: "exampleModalLiveLabel"
  }, "Filtering", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-close",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('closeFilter');
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "modal-dialog custom-modal"
};
var _hoisted_2 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_3 = {
  "class": "modal-content",
  style: {
    "width": "100% !important",
    "height": "40% !important"
  }
};
var _hoisted_4 = {
  "class": "modal-header",
  style: {
    "background-color": "#030014"
  }
};
var _hoisted_5 = {
  "class": "modal-title",
  style: {
    "color": "#ffe819",
    "text-align": "center !important"
  }
};
var _hoisted_6 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["permissions-modal", {
      'no-backdrop': !$props.backdrop
    }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: $props.zIndex
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal",
    tabindex: "-1",
    role: "dialog",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: Number($props.zIndex) + 5
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    style: {
      "font-weight": "bold",
      "color": "white"
    },
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "aria-hidden": "true"
  }, "×", -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>Modal body text goes here.</p>\n                        <multiselect v-model=\"value\" :options=\"options\" mode=\"tags\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button type=\"button\" class=\"btn btn-primary\" @click=\"saveChanges\">Save changes</button>\n                        <button type=\"button\" class=\"btn btn-secondary\" @click=\"closeModal\">Close</button>")], -1 /* CACHED */))])])])], 4 /* STYLE */)], 6 /* CLASS, STYLE */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=template&id=c13ac08c&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=template&id=c13ac08c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "modal-dialog custom-modal"
};
var _hoisted_2 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_3 = {
  "class": "modal-content",
  style: {
    "width": "100% !important",
    "height": "40% !important"
  }
};
var _hoisted_4 = {
  "class": "modal-header",
  style: {
    "background-color": "#030014"
  }
};
var _hoisted_5 = {
  "class": "modal-title",
  style: {
    "color": "#ffe819",
    "text-align": "center !important"
  }
};
var _hoisted_6 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "permissions-modal",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: $props.zIndex
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal",
    tabindex: "-1",
    role: "dialog",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: Number($props.zIndex) + 5
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    style: {
      "font-weight": "bold",
      "color": "white"
    },
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "aria-hidden": "true"
  }, "×", -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>Modal body text goes here.</p>\r\n                        <multiselect v-model=\"value\" :options=\"options\" mode=\"tags\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button type=\"button\" class=\"btn btn-primary\" @click=\"saveChanges\">Save changes</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" @click=\"closeModal\">Close</button>")], -1 /* CACHED */))])])])], 4 /* STYLE */)], 4 /* STYLE */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "pagination"
};
var _hoisted_2 = {
  "class": "page-item"
};
var _hoisted_3 = {
  "class": "page-item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\r\n            I intend to recreate a simple pagination [simplePaginate()] for performance purpose\r\n            read https://laravel.com/docs/8.x/pagination#simple-pagination\r\n\r\n            If you think you will not have huge dataset in the future you can use\r\n            the paginate() by uncommenting below and in the actual component.\r\n        "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Component\r\n            :is=\"link.url ? 'Link' : 'span'\"\r\n            v-for=\"link in links\"\r\n            :href=\"link.url\"\r\n            v-html=\"link.label\"\r\n            class=\"p-3 text-decoration-none\"\r\n            :class=\"{'text-muted' : !link.url, 'fw-bold' : link.active}\"\r\n        /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_2, [$props.prev ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": "page-link",
    href: $props.prev,
    "preserve-scroll": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Previous", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.prev
    }])
  }, "Previous", 2 /* CLASS */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_3, [$props.next ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": "page-link",
    href: $props.next,
    "preserve-scroll": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Next", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.next
    }])
  }, "Next", 2 /* CLASS */))])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "permissions-modal"
};
var _hoisted_2 = {
  "class": "modal",
  tabindex: "-1",
  role: "dialog"
};
var _hoisted_3 = {
  "class": "modal-dialog modal-xl"
};
var _hoisted_4 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_5 = {
  "class": "modal-content",
  style: {
    "width": "100% !important",
    "height": "40% !important"
  }
};
var _hoisted_6 = {
  "class": "modal-header",
  style: {
    "background-color": "#030014"
  }
};
var _hoisted_7 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "modal-title",
    style: {
      "color": "#ffe819",
      "text-align": "center !important"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PRINT PREVIEW")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    style: {
      "font-weight": "bold",
      "color": "white"
    },
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "aria-hidden": "true"
  }, "×", -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>Modal body text goes here.</p>\r\n                        <multiselect v-model=\"value\" :options=\"options\" mode=\"tags\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button type=\"button\" class=\"btn btn-primary\" @click=\"saveChanges\">Save changes</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" @click=\"closeModal\">Close</button>")], -1 /* CACHED */))])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=template&id=2fde0df6&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=template&id=2fde0df6&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "modal-dialog modal-xl"
};
var _hoisted_2 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_3 = {
  "class": "modal-content",
  style: {
    "width": "100% !important",
    "height": "40% !important"
  }
};
var _hoisted_4 = {
  "class": "modal-header",
  style: {
    "background-color": "#030014"
  }
};
var _hoisted_5 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["permissions-modal", {
      'no-backdrop': !$props.backdrop
    }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: $props.zIndex
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal",
    tabindex: "-1",
    role: "dialog",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: Number($props.zIndex) + 5
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "modal-title",
    style: {
      "color": "#ffe819",
      "text-align": "center !important"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "PRINT PREVIEW")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    style: {
      "font-weight": "bold",
      "color": "white"
    },
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "aria-hidden": "true"
  }, "×", -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>Modal body text goes here.</p>\n                        <multiselect v-model=\"value\" :options=\"options\" mode=\"tags\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button type=\"button\" class=\"btn btn-primary\" @click=\"saveChanges\">Save changes</button>\n                        <button type=\"button\" class=\"btn btn-secondary\" @click=\"closeModal\">Close</button>")], -1 /* CACHED */))])])])], 4 /* STYLE */)], 6 /* CLASS, STYLE */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sticky-header[data-v-76431a50] {\n  position: sticky;\n  top: 0;\n  background: linear-gradient(135deg, #f6fcfd 0%, #ebf8fb 100%);\n  z-index: 2;\n  border: 1px solid #d8eef2;\n  border-radius: 0.75rem;\n  padding: 0.9rem 1rem;\n  box-shadow: 0 4px 16px rgba(2, 102, 115, 0.08);\n}\n.modal-summary-card[data-v-76431a50] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n    margin-bottom: 1rem;\n}\n.modal-summary-card div[data-v-76431a50] {\n    color: #0d4b54;\n    font-size: 0.95rem;\n}\n\n/* .modern-rating-table thead.sticky-header {\n    position: sticky;\n    top: 6rem;\n    z-index: 3;\n    background: transparent;\n    border: none;\n    border-radius: 0;\n    padding: 0;\n} */\n.modal-summary-card.sticky-header[data-v-76431a50] {\n    position: sticky;\n    top: 0;\n    z-index: 2;\n}\n.modern-rating-table[data-v-76431a50] {\n    border-collapse: separate;\n    border-spacing: 0;\n    background: #fff;\n    border-radius: 0.75rem;\n    overflow: hidden;\n    box-shadow: 0 8px 24px rgba(2, 49, 58, 0.08);\n}\n.modern-rating-table thead th[data-v-76431a50] {\n    background: linear-gradient(135deg, #026673 0%, #038695 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    letter-spacing: 0.04em;\n    text-transform: uppercase;\n    padding: 0.7rem 0.55rem;\n    vertical-align: middle;\n    border-color: #02595f;\n}\n.modern-rating-table tbody td[data-v-76431a50],\n.modern-rating-table tbody th[data-v-76431a50] {\n    padding: 0.6rem 0.55rem;\n    vertical-align: top;\n    border-color: #e2ebee;\n}\n.modern-rating-table tbody tr[data-v-76431a50]:nth-child(even) {\n    background-color: #fcfdfd;\n}\n.modern-rating-table tbody tr[data-v-76431a50]:hover {\n    background-color: #eef8fb !important;\n}\n.modern-rating-table .form-select[data-v-76431a50],\n.modern-rating-table .form-control[data-v-76431a50],\n.modern-rating-table textarea[data-v-76431a50] {\n    border: 1px solid #cde2e6;\n    border-radius: 0.5rem;\n    background-color: #fff;\n    font-size: 0.86rem;\n    box-shadow: none;\n}\n.modern-rating-table .form-select[data-v-76431a50]:focus,\n.modern-rating-table .form-control[data-v-76431a50]:focus,\n.modern-rating-table textarea[data-v-76431a50]:focus {\n    border-color: #026673;\n    box-shadow: 0 0 0 0.2rem rgba(2, 102, 115, 0.16);\n}\n.table-summary-row td[data-v-76431a50] {\n    background-color: #f2fafb;\n    color: #02454d;\n    font-weight: 600;\n}\n.accomplishment-modal-table[data-v-76431a50] {\n    border-collapse: separate;\n    border-spacing: 0;\n    overflow: hidden;\n    box-shadow: 0 8px 24px rgba(2, 49, 58, 0.08);\n}\n.accomplishment-modal-table thead th[data-v-76431a50] {\n    background: linear-gradient(135deg, #026673 0%, #038695 100%);\n    color: #fff;\n}\n.accomplishment-modal-table tbody td[data-v-76431a50] {\n    vertical-align: top;\n}\n.accomplishment-modal-table img[data-v-76431a50] {\n    border-radius: 0.5rem;\n}\n.review-col-mfo[data-v-76431a50],\n.review-col-paps[data-v-76431a50],\n.review-col-accomplishment[data-v-76431a50],\n.review-col-remarks[data-v-76431a50],\n.review-col-mov[data-v-76431a50],\n.review-col-rating[data-v-76431a50] {\n    vertical-align: top;\n    white-space: normal;\n    word-break: break-word;\n    overflow-wrap: anywhere;\n}\n.review-col-mfo[data-v-76431a50] {\n    min-width: 180px;\n    max-width: 220px;\n    width: 180px;\n}\n.review-col-paps[data-v-76431a50] {\n    min-width: 180px;\n    max-width: 220px;\n    width: 180px;\n}\n.review-col-accomplishment[data-v-76431a50] {\n    min-width: 260px;\n    max-width: 320px;\n    width: 260px;\n}\n.review-col-remarks[data-v-76431a50] {\n    min-width: 180px;\n    max-width: 220px;\n    width: 180px;\n}\n.review-col-mov[data-v-76431a50] {\n    min-width: 110px;\n    max-width: 130px;\n    width: 110px;\n    text-align: center;\n}\n.mov-btn[data-v-76431a50] {\n    white-space: nowrap;\n    border-radius: 999px;\n    padding: 0.35rem 0.8rem;\n    font-weight: 600;\n    transition: all 0.2s ease-in-out;\n}\n.mov-btn[data-v-76431a50]:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 10px rgba(2, 102, 115, 0.16);\n}\n.review-col-rating[data-v-76431a50] {\n    min-width: 95px;\n    max-width: 110px;\n    width: 95px;\n}\n.row-centered[data-v-76431a50] {\n    text-align: center;\n}\n.col-centered[data-v-76431a50] {\n    display: inline-block;\n    float: none;\n    text-align: left;\n    margin-right: -4px;\n}\n.pos[data-v-76431a50] {\n    position: top;\n    top: 240px;\n}\n.force-white[data-v-76431a50] {\n  background-color: red !important;\n}\n.no-stripe-bg[data-v-76431a50] {\n  background-color: white !important;\n  --bs-table-accent-bg: white !important;\n  position: relative;\n  z-index: 1;\n}\n/* .btn-link-style {\n  background: none;\n  border: none;\n  color: #007bff;  Bootstrap primary link color\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.btn-link-style:hover {\n  color: #0056b3; Darker on hover\n  text-decoration: none;\n} */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#sidebar-wrapper {\r\n        width: auto;\r\n        margin-top: -9px;\r\n        z-index: 1000;\r\n        position: fixed;\r\n        right: 250px;\r\n        height: 100%;\r\n        margin-right: -250px;\r\n        overflow-y: auto;\r\n        transition: all 0.5s ease;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-modal[data-v-8a5e42b0] {\n  max-width: 80% !important; /* width of modal */\n  width: 80% !important;\n}\n.permissions-modal[data-v-8a5e42b0] {\n    position: fixed;\n    inset: 0;\n    overflow-y: auto;\n    padding: 20px 0;\n    background-color: rgba(0, 0, 0, 0.15);\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n.permissions-modal.no-backdrop[data-v-8a5e42b0] {\n    background-color: transparent;\n    pointer-events: none;\n}\n.permissions-modal.no-backdrop .modal[data-v-8a5e42b0] {\n    pointer-events: auto;\n    margin: 0 auto;\n}\n    /* Override default value of 'none' */\n.modal[data-v-8a5e42b0] {\n      display: block !important;\n      position: relative;\n      width: 100%;\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-modal[data-v-c13ac08c] {\r\n  max-width: 80% !important; /* width of modal */\r\n  width: 80% !important;\n}\n.permissions-modal[data-v-c13ac08c] {\r\n    position: fixed;\r\n    inset: 0;\r\n    overflow-y: auto;\r\n    padding: 20px 0;\r\n    background-color: rgba(0, 0, 0, 0.15);\n}\r\n    /* Override default value of 'none' */\n.modal[data-v-c13ac08c] {\r\n      display: block !important;\r\n      position: relative;\r\n      width: 100%;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* Override default value of 'none' */\n.modal[data-v-e8c5b748] {\r\n      display: block;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.permissions-modal[data-v-2fde0df6] {\n      position: fixed;\n      inset: 0;\n      overflow-y: auto;\n      padding: 20px 0;\n      background-color: rgba(0, 0, 0, 0.15);\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n}\n.permissions-modal.no-backdrop[data-v-2fde0df6] {\n      background-color: transparent;\n      pointer-events: none;\n}\n.permissions-modal.no-backdrop .modal[data-v-2fde0df6] {\n      pointer-events: auto;\n      margin: 0 auto;\n}\n    /* Override default value of 'none' */\n.modal[data-v-2fde0df6] {\n      display: block !important;\n      position: relative;\n      width: 100%;\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle22_vue_vue_type_style_index_0_id_c13ac08c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle22_vue_vue_type_style_index_0_id_c13ac08c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle22_vue_vue_type_style_index_0_id_c13ac08c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal1_vue_vue_type_style_index_0_id_2fde0df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal1_vue_vue_type_style_index_0_id_2fde0df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal1_vue_vue_type_style_index_0_id_2fde0df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_76431a50_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=76431a50&scoped=true */ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css */ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_76431a50_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-76431a50"],['__file',"resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Filter.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Filter.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter.vue?vue&type=template&id=09f80c58 */ "./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58");
/* harmony import */ var _Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.vue?vue&type=script&lang=js */ "./resources/js/Shared/Filter.vue?vue&type=script&lang=js");
/* harmony import */ var _Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Filter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue":
/*!****************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true */ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true");
/* harmony import */ var _ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalDynamicTitle2.vue?vue&type=script&lang=js */ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css */ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-8a5e42b0"],['__file',"resources/js/Shared/ModalDynamicTitle2.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle22.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle22.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalDynamicTitle22_vue_vue_type_template_id_c13ac08c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalDynamicTitle22.vue?vue&type=template&id=c13ac08c&scoped=true */ "./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=template&id=c13ac08c&scoped=true");
/* harmony import */ var _ModalDynamicTitle22_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalDynamicTitle22.vue?vue&type=script&lang=js */ "./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalDynamicTitle22_vue_vue_type_style_index_0_id_c13ac08c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css */ "./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitle22_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitle22_vue_vue_type_template_id_c13ac08c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-c13ac08c"],['__file',"resources/js/Shared/ModalDynamicTitle22.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/Pagination.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/PrintModal.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true */ "./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true");
/* harmony import */ var _PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js");
/* harmony import */ var _PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css */ "./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-e8c5b748"],['__file',"resources/js/Shared/PrintModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/PrintModal1.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/PrintModal1.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrintModal1_vue_vue_type_template_id_2fde0df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintModal1.vue?vue&type=template&id=2fde0df6&scoped=true */ "./resources/js/Shared/PrintModal1.vue?vue&type=template&id=2fde0df6&scoped=true");
/* harmony import */ var _PrintModal1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintModal1.vue?vue&type=script&lang=js */ "./resources/js/Shared/PrintModal1.vue?vue&type=script&lang=js");
/* harmony import */ var _PrintModal1_vue_vue_type_style_index_0_id_2fde0df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css */ "./resources/js/Shared/PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PrintModal1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PrintModal1_vue_vue_type_template_id_2fde0df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2fde0df6"],['__file',"resources/js/Shared/PrintModal1.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle22_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle22_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle22.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/PrintModal1.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/PrintModal1.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_76431a50_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_76431a50_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=76431a50&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=template&id=76431a50&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=template&id=09f80c58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_template_id_8a5e42b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=template&id=8a5e42b0&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=template&id=c13ac08c&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=template&id=c13ac08c&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle22_vue_vue_type_template_id_c13ac08c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle22_vue_vue_type_template_id_c13ac08c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle22.vue?vue&type=template&id=c13ac08c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=template&id=c13ac08c&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");


/***/ }),

/***/ "./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_template_id_e8c5b748_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=template&id=e8c5b748&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/PrintModal1.vue?vue&type=template&id=2fde0df6&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/Shared/PrintModal1.vue?vue&type=template&id=2fde0df6&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal1_vue_vue_type_template_id_2fde0df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal1_vue_vue_type_template_id_2fde0df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal1.vue?vue&type=template&id=2fde0df6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=template&id=2fde0df6&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_76431a50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Review-Approve/OPCR/Ratings/Index.vue?vue&type=style&index=0&id=76431a50&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle2_vue_vue_type_style_index_0_id_8a5e42b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle2.vue?vue&type=style&index=0&id=8a5e42b0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle22_vue_vue_type_style_index_0_id_c13ac08c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle22.vue?vue&type=style&index=0&id=c13ac08c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal_vue_vue_type_style_index_0_id_e8c5b748_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal.vue?vue&type=style&index=0&id=e8c5b748&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Shared/PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Shared/PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrintModal1_vue_vue_type_style_index_0_id_2fde0df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PrintModal1.vue?vue&type=style&index=0&id=2fde0df6&scoped=true&lang=css");


/***/ })

}]);