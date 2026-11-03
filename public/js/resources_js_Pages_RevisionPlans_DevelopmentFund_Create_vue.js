"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RevisionPlans_DevelopmentFund_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.js");
/* harmony import */ var _Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/PlacesShared */ "./resources/js/Shared/PlacesShared.vue");
/* harmony import */ var _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle */ "./resources/js/Shared/ModalDynamicTitle.vue");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






//import BootstrapModalNoJquery from './BootstrapModalNoJquery.vue';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    auth: Object,
    editData: Object,
    paps: Object,
    mfos: Object,
    chief_agenda: Object,
    socio_economic: Object,
    sustainable: Object,
    executive_legislative: Object,
    research: Object,
    idmfo: String,
    functions: Object,
    popsp_agencies: Object,
    comments: Object,
    implementation: Object,
    id: String,
    rev: Object,
    ccet_codes: Object
  },
  components: {
    Places: function Places() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(_Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }, 2000);
      });
    },
    StrategyModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_2__["default"],
    ActivityModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_2__["default"],
    ExpectedOutputModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _useForm;
    return {
      filter: false,
      from_mfo: false,
      submitted: false,
      rev: [],
      form: (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)((_useForm = {
        paps_desc: "",
        type: "",
        FFUNCCOD: "",
        idmfo: "",
        MOV: "",
        sector: "",
        chief_executive_agenda: "",
        socio_economic_agenda: "",
        sust_devt_goal: "",
        executive_legislative_agenda: "",
        research_agenda: ""
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_useForm, "sector", ""), "subsector", ""), "source_of_funds", ""), "source_others_specify", ""), "funding_agency", ""), "popsp", 0), "focus_area", ""), "is_mother_program", 0), "mother_program_id", null), "aip_code", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_useForm, "agency_name", ""), "date_start", ""), "date_end", ""), "aip_code", ""), "id", null), "activity", {
        description: "",
        ps_q1: 0,
        ps_q2: 0,
        ps_q3: 0,
        ps_q4: 0,
        mooee_q1: 0,
        mooee_q2: 0,
        mooee_q3: 0,
        mooee_q4: 0,
        co_q1: 0,
        co_q2: 0,
        co_q3: 0,
        co_q4: 0,
        fe_q1: 0,
        fe_q2: 0,
        fe_q3: 0,
        fe_q4: 0,
        ccet_code: "",
        responsible: "",
        expected_revised_outputs: {
          description: "",
          ccet_code: ""
        }
      }))),
      year_values: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050", "2051", "2052", "2053", "2054", "2055", "2056", "2057", "2058", "2059", "2060", "2061", "2062", "2063", "2064", "2065", "2066", "2067", "2068", "2069", "2070", "2071", "2072", "2073", "2074", "2075", "2076", "2077", "2078", "2079", "2080", "2081", "2082", "2083", "2084", "2085", "2086", "2087", "2088", "2089", "2090", "2091", "2092", "2093", "2094", "2095", "2096", "2097", "2098", "2099", "2100"],
      mfos_data: [],
      motherPAPS: [],
      pageTitle: "",
      //STRATEGIES**************
      StrategyModalVisible: false,
      strategies: [],
      // ACTIVITIES****************
      strategy_id: 0,
      /*Parent strategy of the activity */
      ActivityModalVisible: false,
      activities: [],
      activity_description_current: '',
      // PAPS Specific **************
      paps_specific: [],
      //EXPECTED OUTPUTS *******************************
      ExpectedOutputModalVisible: false,
      expected_outputs_current: [],
      expected_outputs_new: [],
      activity_id: 0,
      activity_project_id: 0,
      // EDITS
      unsaved: false
    };
  },
  computed: {
    formattedMFOs: function formattedMFOs() {
      var dataMFO = this.mfos;
      var selectedFFUNCCOD = this.form.FFUNCCOD;
      console.log('Selected FFUNNCOD: ', selectedFFUNCCOD);
      if (this.form.FFUNCCOD) {
        dataMFO = this.mfos.filter(function (mfo) {
          return mfo.FFUNCCOD === selectedFFUNCCOD;
        });
      }
      console.log('Filtered Data:', dataMFO);
      // if (this.form.FFUNCCOD) {
      //     dataMFO = dataMFO.filter((mfo) => mfo.FFUNCCOD === this.form.FFUNCCOD);
      // }
      // value: program.recid,
      //     label: program.FPROGRAM,
      return dataMFO.map(function (mfo) {
        return {
          mfo_desc: mfo.mfo_desc,
          FFUNCCOD: mfo.FFUNCCOD,
          id: mfo.id
        };
      });
      // return dataPrograms.map((program) => ({
      //     value: program.recid,
      //     label: program.FPROGRAM,
      //     raaotype: program.ftype,
      //     FFUNCCOD: program.FFUNCCOD,
      //     raohsid: program.raohsid
      // }));
      // get() {

      // },
      // set() { }
    },
    ccet_computed: function ccet_computed() {
      var ccet_code_c = Array.isArray(this.ccet_codes) ? this.ccet_codes : [];

      // return ccet_code_c.map(ccet => ({
      //     value: ccet.ccet_code,
      //     label: `${ccet.ccet_code} - ${ccet.description}`,
      //     _raw: ccet
      // }));
      // Map existing options
      var options = ccet_code_c.map(function (ccet) {
        return {
          value: ccet.ccet_code,
          label: "".concat(ccet.ccet_code, " - ").concat(ccet.description),
          _raw: ccet
        };
      });

      // Prepend default "Select CCET Code" option
      options.unshift({
        value: null,
        label: "Select CCET Code",
        _raw: null
      });
      return options;
    }
  },
  mounted: function mounted() {
    if (this.idmfo !== undefined) {
      this.from_mfo = true;
    }
    if (this.form.id == null) {
      this.form.source_of_funds = 'dev';
    }
    this.paps_specific = this.paps;
    this.form.idmfo = this.idmfo;
    if (this.editData && Object.keys(this.editData).length > 0) {
      var _this$editData$revisi, _ref, _this$rev$date_start, _this$rev, _this$editData$revisi2, _ref2, _this$rev$date_end, _this$rev2, _this$editData$revisi3, _ref3, _this$rev$aip_code, _this$rev3;
      this.rev = ((_this$editData$revisi = this.editData.revision_plan) === null || _this$editData$revisi === void 0 ? void 0 : _this$editData$revisi[0]) || [];
      this.pageTitle = "Edit";
      this.form.paps_desc = this.editData.paps_desc;
      this.form.MOV = this.editData.MOV;
      this.form.type = this.editData.type;
      this.form.FFUNCCOD = this.editData.FFUNCCOD;
      this.form.idmfo = this.editData.idmfo;
      this.form.chief_executive_agenda = this.editData.chief_executive_agenda;
      this.form.socio_economic_agenda = this.editData.socio_economic_agenda;
      this.form.sust_devt_goal = this.editData.sust_devt_goal;
      this.form.executive_legislative_agenda = this.editData.executive_legislative_agenda;
      this.form.research_agenda = this.editData.research_agenda;
      this.form.sector = this.editData.sector;
      this.form.subsector = this.editData.subsector;
      this.form.source_of_funds = this.editData.source_of_funds;
      this.form.source_others_specify = this.editData.source_others_specify;
      this.form.funding_agency = this.editData.funding_agency;
      this.form.popsp = this.editData.popsp;
      this.form.focus_area = this.editData.focus_area;
      this.form.is_mother_program = this.editData.is_mother_program;
      this.form.aip_code = this.editData.aip_code;
      this.form.agency_name = this.editData.agency_name;
      this.form.id = this.editData.id;
      this.form.activity = this.editData.activity || this.form.activity;
      this.filterMFOs();
      this.loadPAPS();
      // set dates and AIP code from the revision (`rev`) when available, otherwise fallback to editData
      this.form.date_start = (_ref = (_this$rev$date_start = (_this$rev = this.rev) === null || _this$rev === void 0 ? void 0 : _this$rev.date_start) !== null && _this$rev$date_start !== void 0 ? _this$rev$date_start : this.editData.revision_plan && ((_this$editData$revisi2 = this.editData.revision_plan[0]) === null || _this$editData$revisi2 === void 0 ? void 0 : _this$editData$revisi2.date_start)) !== null && _ref !== void 0 ? _ref : this.form.date_start;
      this.form.date_end = (_ref2 = (_this$rev$date_end = (_this$rev2 = this.rev) === null || _this$rev2 === void 0 ? void 0 : _this$rev2.date_end) !== null && _this$rev$date_end !== void 0 ? _this$rev$date_end : this.editData.revision_plan && ((_this$editData$revisi3 = this.editData.revision_plan[0]) === null || _this$editData$revisi3 === void 0 ? void 0 : _this$editData$revisi3.date_end)) !== null && _ref2 !== void 0 ? _ref2 : this.form.date_end;
      this.form.aip_code = (_ref3 = (_this$rev$aip_code = (_this$rev3 = this.rev) === null || _this$rev3 === void 0 ? void 0 : _this$rev3.aip_code) !== null && _this$rev$aip_code !== void 0 ? _this$rev$aip_code : this.editData.revision_plan.aip_code) !== null && _ref3 !== void 0 ? _ref3 : this.form.aip_code;
      this.form.mother_program_id = this.editData.mother_program_id;
    } else {
      this.pageTitle = "Create";
      if (this.idmfo != undefined) {
        this.form.idmfo = this.idmfo;
        this.from_mfo = true;
      }
      this.setselect();
    }
  },
  methods: {
    limitWordCount: function limitWordCount() {
      // Get the words from the input text
      var words = this.form.MOV.split(/\s+/);

      // Limit the input to 50 words
      if (words.length > 50) {
        // If the word count exceeds 50, truncate the input
        this.form.MOV = words.slice(0, 50).join(' ');
      }
    },
    submit: function submit() {
      if (this.form.type == "GAS") {
        this.form.idmfo = "0";
      } else {
        if (this.form.idmfo == "0") {
          this.form.idmfo = null;
        }
      }
      this.form.target_qty = parseFloat(this.form.target_qty1) + parseFloat(this.form.target_qty2) + parseFloat(this.form.target_qty3) + parseFloat(this.form.target_qty4);
      if (this.editData !== undefined && this.id != 0) {
        // update existing
        this.form.patch("/development-fund/update/" + this.form.id, {
          // onSuccess: () => {
          // window.location.reload();
          // }
        });
      } else {
        // create new
        this.form.id = null;
        this.form.post("/development-fund/store", {
          onSuccess: function onSuccess() {
            window.location.reload();
          }
        });
      }
    },
    setselect: function setselect() {
      var now = new Date();
      var year_now = now.getFullYear();
      this.form.plan_period_from = year_now;
      this.form.plan_period_to = year_now;
    },
    filterMFOs: function filterMFOs() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var my_url, response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.mfos_data = [];
              _this.motherPAPS = [];
              // await axios.post("/paps/major/final/outputs/filter", { FFUNCCOD: this.form.FFUNCCOD }).then((response) => {
              //     this.mfos_data = response.data.data
              // });
              _context.p = 1;
              my_url = "/paps/major/final/outputs/filter/" + _this.form.FFUNCCOD;
              _context.n = 2;
              return axios.get(my_url, {
                FFUNCCOD: _this.form.FFUNCCOD
              });
            case 2:
              response = _context.v;
              _this.mfos_data = response.data.data;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error("Error fetching MFOs:", _t);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }))();
    },
    loadPAPS: function loadPAPS() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var my_url, response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this2.motherPAPS = [];
              // await axios.post("/paps/mother/paps/filter", { idmfo: this.form.idmfo }).then((response) => {
              //     this.motherPAPS = response.data.data
              // });
              _context2.p = 1;
              my_url = "/paps/mother/paps/filter/" + _this2.form.idmfo; // alert(my_url);
              _context2.n = 2;
              return axios.get(my_url, {
                idmfo: _this2.form.idmfo
              });
            case 2:
              response = _context2.v;
              _this2.motherPAPS = response.data.data;
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              console.error("Error fetching PAPS:", _t2);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3]]);
      }))();
    },
    goBack: function goBack() {
      // Navigate back to the previous page
      window.history.back();
    },
    // **************************COMMENTS******************************************************//
    can_view_comment: function can_view_comment() {
      var can_comment_here = false;
      if (this.auth.user.department_code == '04') {
        can_comment_here = true;
      }
      return can_comment_here;
    },
    has_comment: function has_comment(section, subtitle, data, column, table, obj, comments_obj) {
      var has_comm = false;
      console.log("comments object ************");
      console.log(comments_obj);
      console.trace();
      // if(this.auth.user.department_code==='04'){
      //     has_comm=false
      // }else{
      var count = Array.isArray(comments_obj) ? comments_obj.filter(function (comment) {
        return comment.table_name === table && comment.column_name === column && comment.comment_status === "0";
      }).length : 0;
      if (count > 0) {
        has_comm = true;
      }
      // }

      return has_comm;
    },
    handleClick: function handleClick(section, subtitle, data, column, table, obj, comments_obj) {
      this.comment_section = section;
      this.comment_subtitle = subtitle;
      this.comment_data = data;
      this.comment_column = column;
      this.comment_table = table;
      this.comment_reference_object = obj;
      // this.comments = comments_obj;

      this.comments = comments_obj.filter(function (comment) {
        return comment.table_name === table && comment.column_name === column;
      });
      this.show_comment_modal = true;
    },
    // STRATEGIES ***************************************************************************************************
    showStrategyModal: function showStrategyModal() {
      this.StrategyModalVisible = true;
      this.addStrategy();
    },
    closeStrategyModal: function closeStrategyModal() {
      this.StrategyModalVisible = false;
      this.strategies = [];
    },
    addStrategy: function addStrategy() {
      var nextYear = new Date().getFullYear() + 1; // current year + 1
      // Create a new sub-object with default values
      var newStrategy = {
        id: null,
        // will be auto-generated by backend
        description: null,
        idpaps: this.paps_specific.id,
        // inherit from paps_specific
        idmfo: this.paps_specific.idmfo,
        // inherit from paps_specific
        FFUNCCOD: this.paps_specific.FFUNCCOD,
        // inherit from paps_specific
        year_period: nextYear
      };
      this.strategies.push(newStrategy);
    },
    removeStrategy: function removeStrategy(index) {
      this.strategies.splice(index, 1);
    },
    saveStrategies: function saveStrategies() {
      // Validation: ensure description and year_period are not null
      var invalid = this.strategies.some(function (s) {
        return !s.description || !s.year_period;
      });
      if (invalid) {
        alert("Please fill out all Description and Year Period fields before saving.");
        return;
      }
      // Save current scroll position before reload
      var scrollPosition = window.scrollY;
      sessionStorage.setItem('scrollPosition', scrollPosition);

      // Proceed to save (e.g., emit event or call API)
      axios.post('/implementation-workplan/strategies', {
        strategies: this.strategies,
        project_id: this.id,
        paps_id: this.paps_specific.id
      }, {
        preserveScroll: true,
        preserveState: true
      }).then(function (response) {
        console.log('Saved successfully:', response.data);
        // ✅ Save scroll position
        // sessionStorage.setItem('scrollPosition', window.scrollY);
        window.location.reload();
        // Optionally clear the strategies array or show a success message
      })["catch"](function (error) {
        console.error('Error saving strategies:', error);
      });

      // Optionally, close modal after save
      this.closeStrategyModal();
    },
    // ACTIVITIES ***************************************************************************************************
    showActivityModal: function showActivityModal(strategy_id) {
      this.strategy_id = strategy_id;
      this.ActivityModalVisible = true;
    },
    closeActivityModal: function closeActivityModal() {
      this.ActivityModalVisible = false;
      this.activities = [];
    },
    getDefaultActivityRow: function getDefaultActivityRow() {
      return {
        // activities table fields
        description: '',
        strategy_id: this.strategy_id,
        // activity_projects fields (NO ID)
        project_id: this.rev.id,
        target_indicator: '',
        date_from: "".concat(new Date().getFullYear(), "-01-01"),
        date_to: "".concat(new Date().getFullYear(), "-12-31"),
        ps_q1: 0,
        ps_q2: 0,
        ps_q3: 0,
        ps_q4: 0,
        mooe_q1: 0,
        mooe_q2: 0,
        mooe_q3: 0,
        mooe_q4: 0,
        co_q1: 0,
        co_q2: 0,
        co_q3: 0,
        co_q4: 0,
        fe_q1: 0,
        fe_q2: 0,
        fe_q3: 0,
        fe_q4: 0,
        gad_issue: null,
        ccet_code: null,
        responsible: null,
        is_active: 1
      };
    },
    addActivity: function addActivity() {
      this.activities.push(this.getDefaultActivityRow());
    },
    removeActivity: function removeActivity(index) {
      this.activities.splice(index, 1);
    },
    saveActivities: function saveActivities() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios.post('/implementation-workplan/strategies/activities', {
                activities: _this3.activities,
                strategy_id: _this3.strategy_id
              }, {
                preserveScroll: true,
                preserveState: true
              }).then(function (response) {
                // ✅ Save scroll position
                sessionStorage.setItem('scrollPosition', window.scrollY);
                window.location.reload({
                  preserveScroll: true,
                  preserveState: true
                });
              });
            case 1:
              response = _context3.v;
              alert('Activities saved successfully!');
              _this3.closeActivityModal();
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error(_t3);
              alert('Error saving activities.');
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    //IMPLEMENTATION SCHEDULE/WORKPLAN
    getPairedOutputs: function getPairedOutputs(activityProject) {
      var output = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.expected_output) || [];
      var outcome = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.expected_outcome) || [];
      var max_output = Math.max(output.length);
      var max_outcome = Math.max(outcome.length);
      var q1 = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.physical_q1) || 0;
      var q2 = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.physical_q2) || 0;
      var q3 = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.physical_q3) || 0;
      var q4 = (activityProject === null || activityProject === void 0 ? void 0 : activityProject.physical_q4) || 0;
      var quant = parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4);
      var rr1 = Array.from({
        length: max_output
      }, function (_, i) {
        var _output$i, _output$i2, _output$i3, _output$i4, _output$i5, _output$i6, _output$i7, _output$i8;
        return {
          id: ((_output$i = output[i]) === null || _output$i === void 0 ? void 0 : _output$i.id) || '',
          target_indicator: ((_output$i2 = output[i]) === null || _output$i2 === void 0 ? void 0 : _output$i2.target_indicator) || '',
          outcome_description: '',
          output_description: ((_output$i3 = output[i]) === null || _output$i3 === void 0 ? void 0 : _output$i3.description) || '',
          table: 'expected_revised_outputs',
          quantity: parseFloat(((_output$i4 = output[i]) === null || _output$i4 === void 0 ? void 0 : _output$i4.physical_q1) || 0) + parseFloat(((_output$i5 = output[i]) === null || _output$i5 === void 0 ? void 0 : _output$i5.physical_q2) || 0) + parseFloat(((_output$i6 = output[i]) === null || _output$i6 === void 0 ? void 0 : _output$i6.physical_q3) || 0) + parseFloat(((_output$i7 = output[i]) === null || _output$i7 === void 0 ? void 0 : _output$i7.physical_q4) || 0),
          comments: ((_output$i8 = output[i]) === null || _output$i8 === void 0 ? void 0 : _output$i8.comments) || []
        };
      });
      // { length: max },
      var rr2 = Array.from({
        length: max_outcome
      }, function (_, i) {
        var _outcome$i, _outcome$i2, _outcome$i3;
        return {
          id: ((_outcome$i = outcome[i]) === null || _outcome$i === void 0 ? void 0 : _outcome$i.id) || '',
          target_indicator: '',
          outcome_description: ((_outcome$i2 = outcome[i]) === null || _outcome$i2 === void 0 ? void 0 : _outcome$i2.description) || '',
          output_description: '',
          table: 'expected_revised_outcomes',
          quantity: 0,
          comments: ((_outcome$i3 = outcome[i]) === null || _outcome$i3 === void 0 ? void 0 : _outcome$i3.comments) || []
        };
      });
      return rr1.concat(rr2);
    },
    // CCET CODES *********************************************\
    updateCCET: function updateCCET(code_ccet) {
      var selectedEmp = this.ccet_codes.find(function (ccet) {
        return String(ccet.ccet_code) === String(code_ccet);
      });
    },
    //EXPECTED OUTPUT ******************************************
    showExpectedOutputModal: function showExpectedOutputModal(activity, activity_id, activity_project_id, activity_desc) {
      this.activity_id = activity_id;
      this.activity_project_id = activity_project_id;
      this.expected_outputs_new = [];
      this.expected_outputs_current = activity;
      this.ExpectedOutputModalVisible = true;
      this.activity_description_current = activity_desc;
    },
    hideExpectedOutputModal: function hideExpectedOutputModal() {
      // this.ExpectedOutputModalVisible=false;
      // window.location.reload()
      this.ExpectedOutputModalVisible = false;

      // Save scroll position
      localStorage.setItem('scrollPosition', window.scrollY);
      window.location.reload({
        preserveScroll: true,
        preserveState: true
      });
    },
    addExpectedOutput: function addExpectedOutput() {
      this.expected_outputs_new.push({
        id: null,
        description: '',
        strategy_id: null,
        strategy_project_id: null,
        activity_id: this.activity_id,
        activity_project_id: this.activity_project_id,
        is_strategy_outcome: 0,
        project_id: this.activity_project_id,
        target_indicator: '',
        date_from: null,
        date_to: null,
        physical_q1: 0,
        physical_q2: 0,
        physical_q3: 0,
        physical_q4: 0,
        ps_q1: 0,
        ps_q2: 0,
        ps_q3: 0,
        ps_q4: 0,
        mooe_q1: 0,
        mooe_q2: 0,
        mooe_q3: 0,
        mooe_q4: 0,
        co_q1: 0,
        co_q2: 0,
        co_q3: 0,
        co_q4: 0,
        gad_issue: '',
        ccet_code: '',
        responsible: '',
        is_active: 1,
        is_strategy_output: 0
      });
    },
    removeExpectedOutput: function removeExpectedOutput(index) {
      this.expected_outputs_new.splice(index, 1);
    },
    saveExpectedOutputs: function saveExpectedOutputs() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _this4$expected_outpu, response, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios.post('/revision/streamlined/expected/revised/outputs', {
                expected_outputs: _this4.expected_outputs_new
              });
            case 1:
              response = _context4.v;
              alert('Saved successfully!');
              (_this4$expected_outpu = _this4.expected_outputs_current).push.apply(_this4$expected_outpu, _toConsumableArray(_this4.expected_outputs_new));
              _this4.expected_outputs_new = []; // Clear table after save
              _this4.$emit('close-modal-event'); // Close modal
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error(_t4);
              alert('Error saving expected outputs.');
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    deleteExpectedOutput: function deleteExpectedOutput(id, table, title, index) {
      var _this5 = this;
      var text = "WARNING!\nAre you sure you want to delete a row from " + table + " with title " + title + "?";
      if (confirm(text) == true) {
        this.$inertia["delete"]("/revision/streamlined/".concat(id, "/").concat(table), {
          onSuccess: function onSuccess() {
            // Only runs if backend deletion succeeds
            _this5.expected_outputs_current.splice(index, 1);
          },
          onError: function onError() {
            alert("Delete failed! Please try again.");
          }
        });
      }
    },
    // *********************************************************
    // UPDATE Revision Plans*******************************************/
    updateRevisionPlans: lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(/*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(table_name, column_name, id, new_data) {
        var nonNegativeColumns, value, confirmed, payload, response, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              // Columns that must be >= 0
              nonNegativeColumns = ['ps_q1', 'ps_q2', 'ps_q3', 'ps_q4', 'mooe_q1', 'mooe_q2', 'mooe_q3', 'mooe_q4', 'fe_q1', 'fe_q2', 'fe_q3', 'fe_q4', 'co_q1', 'co_q2', 'co_q3', 'co_q4']; // Validate value
              if (!nonNegativeColumns.includes(column_name)) {
                _context5.n = 1;
                break;
              }
              value = parseFloat(new_data);
              if (!(isNaN(value) || value < 0)) {
                _context5.n = 1;
                break;
              }
              alert("Value must be greater than or equal to 0.");
              return _context5.a(2);
            case 1:
              if (!(column_name === 'ccet_code' && (!new_data || new_data.trim() === ''))) {
                _context5.n = 2;
                break;
              }
              confirmed = confirm("Are you sure you want to remove the CCET code?");
              if (confirmed) {
                _context5.n = 2;
                break;
              }
              return _context5.a(2);
            case 2:
              payload = {
                table_name: table_name,
                column_name: column_name,
                id: id,
                new_data: encodeURIComponent(new_data)
              };
              _context5.p = 3;
              _context5.n = 4;
              return axios.patch("/revision/streamlined/".concat(id, "/update"), payload);
            case 4:
              response = _context5.v;
              console.log(response.data);
              this.setUnsaved(false);
              _context5.n = 6;
              break;
            case 5:
              _context5.p = 5;
              _t5 = _context5.v;
              console.error("Error updating ".concat(table_name, " (").concat(column_name, ")"), _t5);
            case 6:
              return _context5.a(2);
          }
        }, _callee5, this, [[3, 5]]);
      }));
      return function (_x, _x2, _x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }(), 1000),
    // 🔥 Delay here (1s or 300ms)
    //EDITS***********************************************************
    setUnsaved: function setUnsaved(status) {
      this.unsaved = status;
    },
    handleBeforeUnload: function handleBeforeUnload(event) {
      if (this.unsaved) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    },
    // GENERAL DELETION ************************************************
    deleteData: function deleteData(id, table, title) {
      //alert(this.idpaps);
      var text = "WARNING!\nAre you sure you want to delete a row from " + table + " with title " + title + "?";
      if (confirm(text) == true) {
        this.$inertia["delete"]("/revision/streamlined/" + id + "/" + table, {
          preserveScroll: true
        });
      }
    },
    // DELETE STRATEGY OR ACTIVITY
    deleteDataActivityOrStrat: function deleteDataActivityOrStrat(id, table, title, project_id) {
      //alert(this.idpaps);
      var text = "WARNING!\nAre you sure you want to delete a row from " + table + " with title " + title + "? strat/act /revision/streamlined/" + id + "/" + table + "/" + project_id;
      if (confirm(text) == true) {
        this.$inertia["delete"]("/revision/streamlined/" + id + "/" + table + "/" + project_id, {
          preserveScroll: true
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    //userId: Object,
    title: String
  },
  data: function data() {
    return {
      value: null
    };
  },
  mounted: function mounted() {
    this.makeDraggable();
    this.makeResizable();
  },
  methods: {
    logU_ID: function logU_ID() {},
    closeModal: function closeModal() {
      this.$emit('close-modal-event');
    },
    saveChanges: function saveChanges() {
      this.closeModal();
    },
    makeDraggable: function makeDraggable() {
      var dialog = this.$refs.dialog;
      var header = this.$refs.header;
      var isDragging = false;
      var startX = 0;
      var startY = 0;
      var currentX = 0;
      var currentY = 0;
      header.style.cursor = 'move';
      header.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;
        document.body.style.userSelect = 'none';
      });
      document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        dialog.style.transform = "translate(".concat(currentX, "px, ").concat(currentY, "px)");
      });
      document.addEventListener('mouseup', function () {
        isDragging = false;
        document.body.style.userSelect = '';
      });
    },
    /* ======================
    RESIZABLE
    ====================== */
    makeResizable: function makeResizable() {
      var content = this.$refs.content;
      var handle = this.$refs.resizeHandle;
      var startX, startY, startWidth, startHeight;
      handle.addEventListener('mousedown', function (e) {
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        startWidth = content.offsetWidth;
        startHeight = content.offsetHeight;
        document.body.style.userSelect = 'none';
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', _stopResize);
      });
      var resize = function resize(e) {
        var newWidth = startWidth + (e.clientX - startX);
        var newHeight = startHeight + (e.clientY - startY);
        content.style.width = Math.max(newWidth, 500) + 'px';
        content.style.height = Math.max(newHeight, 300) + 'px';
      };
      var _stopResize = function stopResize() {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', _stopResize);
        document.body.style.userSelect = '';
      };
    },
    loadPermissions: function loadPermissions() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    mun: Array
    // bar: Array,
  },
  data: function data() {
    return {
      mun_code: "",
      barsel: "",
      munsel: "",
      bar: []
    };
  },
  computed: {
    my_mun: function my_mun() {
      return this.mun_code;
    },
    my_bar: function my_bar() {
      return this.bar;
    }
  },
  mounted: function mounted() {
    //this.bar=[];
  },
  watch: {},
  methods: {
    loadBar: function loadBar() {
      var _this = this;
      alert(this.munsel);
      if (this.munsel === "") {} else {
        axios.post("/places/bar", {
          mun: this.munsel
        }).then(function (response) {
          _this.bar = response.data.data;
        });
      }
    },
    showMun: function showMun() {
      alert(this.mun_code);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=template&id=c803d818":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=template&id=c803d818 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "relative row gap-20 masonry pos-r"
};
var _hoisted_2 = {
  "class": "peers fxw-nw jc-sb ai-c"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 1
};
var _hoisted_5 = {
  "class": "peers"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-md-6"
};
var _hoisted_8 = {
  "class": "d-none"
};
var _hoisted_9 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_10 = ["value"];
var _hoisted_11 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_12 = ["value"];
var _hoisted_13 = {
  key: 1,
  "class": "fs-6 c-red-500"
};
var _hoisted_14 = {
  "for": ""
};
var _hoisted_15 = ["value"];
var _hoisted_16 = {
  key: 2,
  "class": "fs-6 c-red-500"
};
var _hoisted_17 = {
  key: 3,
  "class": "fs-6 c-red-500"
};
var _hoisted_18 = ["value"];
var _hoisted_19 = {
  key: 4,
  "class": "fs-6 c-red-500"
};
var _hoisted_20 = {
  key: 5,
  "class": "fs-6 c-red-500"
};
var _hoisted_21 = {
  key: 6,
  "class": "fs-6 c-red-500"
};
var _hoisted_22 = {
  key: 7,
  "class": "fs-6 c-red-500"
};
var _hoisted_23 = {
  key: 8,
  "class": "fs-6 c-red-500"
};
var _hoisted_24 = {
  key: 9,
  "class": "fs-6 c-red-500"
};
var _hoisted_25 = {
  "class": "col-md-6"
};
var _hoisted_26 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_27 = ["value"];
var _hoisted_28 = {
  key: 1,
  "class": "fs-6 c-red-500"
};
var _hoisted_29 = {
  key: 2,
  "class": "fs-6 c-red-500"
};
var _hoisted_30 = {
  key: 3,
  "class": "fs-6 c-red-500"
};
var _hoisted_31 = {
  key: 4
};
var _hoisted_32 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_33 = {
  key: 5
};
var _hoisted_34 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_35 = ["disabled"];
var _hoisted_36 = {
  "class": "col-md-12"
};
var _hoisted_37 = {
  key: 0
};
var _hoisted_38 = {
  id: "implementation_workplan"
};
var _hoisted_39 = {
  key: 1,
  style: {
    "overflow-x": "auto",
    "width": "100%"
  }
};
var _hoisted_40 = {
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_41 = {
  key: 0,
  style: {
    "background-color": "lightgrey",
    "font-weight": "bold"
  }
};
var _hoisted_42 = ["onClick"];
var _hoisted_43 = ["onClick"];
var _hoisted_44 = ["onUpdate:modelValue", "onChange"];
var _hoisted_45 = {
  key: 0
};
var _hoisted_46 = {
  key: 0
};
var _hoisted_47 = {
  key: 0
};
var _hoisted_48 = {
  key: 0
};
var _hoisted_49 = {
  key: 1
};
var _hoisted_50 = {
  key: 2
};
var _hoisted_51 = {
  key: 0
};
var _hoisted_52 = {
  key: 0
};
var _hoisted_53 = {
  key: 0
};
var _hoisted_54 = {
  key: 0
};
var _hoisted_55 = {
  key: 0
};
var _hoisted_56 = {
  "class": "text-end"
};
var _hoisted_57 = {
  key: 0
};
var _hoisted_58 = {
  key: 0
};
var _hoisted_59 = {
  key: 0
};
var _hoisted_60 = ["id"];
var _hoisted_61 = ["onUpdate:modelValue", "onChange"];
var _hoisted_62 = {
  "class": "d-flex justify-content-between align-items-center w-100"
};
var _hoisted_63 = ["onUpdate:modelValue", "onChange"];
var _hoisted_64 = ["onClick"];
var _hoisted_65 = ["onClick"];
var _hoisted_66 = ["onClick"];
var _hoisted_67 = ["onClick"];
var _hoisted_68 = {
  key: 0,
  style: {
    "height": "100%"
  }
};
var _hoisted_69 = ["onUpdate:modelValue", "onChange"];
var _hoisted_70 = ["id"];
var _hoisted_71 = ["onUpdate:modelValue", "onChange"];
var _hoisted_72 = ["onClick"];
var _hoisted_73 = ["onClick"];
var _hoisted_74 = {
  colspan: "4",
  style: {
    "width": "32%",
    "padding": "0",
    "border": "1px solid #000",
    "vertical-align": "top"
  }
};
var _hoisted_75 = {
  style: {
    "display": "flex",
    "flex-direction": "column",
    "height": "100%",
    "min-height": "100%"
  }
};
var _hoisted_76 = {
  key: 0,
  "class": "m-0",
  style: {
    "border-collapse": "collapse",
    "width": "100%",
    "height": "100%",
    "table-layout": "fixed",
    "flex": "1 1 auto"
  }
};
var _hoisted_77 = ["id"];
var _hoisted_78 = {
  key: 0
};
var _hoisted_79 = ["id", "onUpdate:modelValue", "onChange"];
var _hoisted_80 = {
  key: 0
};
var _hoisted_81 = ["onClick"];
var _hoisted_82 = ["onClick"];
var _hoisted_83 = ["id", "rowspan"];
var _hoisted_84 = {
  key: 0
};
var _hoisted_85 = ["onUpdate:modelValue", "onChange"];
var _hoisted_86 = ["onClick"];
var _hoisted_87 = ["onClick"];
var _hoisted_88 = ["rowspan"];
var _hoisted_89 = {
  key: 0
};
var _hoisted_90 = ["onUpdate:modelValue", "id", "onChange"];
var _hoisted_91 = ["onClick"];
var _hoisted_92 = ["onClick"];
var _hoisted_93 = ["onUpdate:modelValue", "onChange", "id"];
var _hoisted_94 = ["onClick"];
var _hoisted_95 = ["onClick"];
var _hoisted_96 = {
  "class": "align-top",
  style: {
    "width": "25%",
    "border": "1px solid #000",
    "padding": "4px"
  }
};
var _hoisted_97 = ["id", "onUpdate:modelValue", "onChange"];
var _hoisted_98 = ["onClick"];
var _hoisted_99 = ["onClick"];
var _hoisted_100 = ["id"];
var _hoisted_101 = ["onUpdate:modelValue", "onChange"];
var _hoisted_102 = ["onClick"];
var _hoisted_103 = ["onClick"];
var _hoisted_104 = {
  "class": "m-0",
  style: {
    "border-collapse": "collapse",
    "width": "100%",
    "height": "100%",
    "table-layout": "fixed"
  }
};
var _hoisted_105 = ["id", "rowspan"];
var _hoisted_106 = {
  key: 0
};
var _hoisted_107 = ["onUpdate:modelValue", "onChange"];
var _hoisted_108 = ["onClick"];
var _hoisted_109 = ["onClick"];
var _hoisted_110 = ["rowspan"];
var _hoisted_111 = {
  key: 0
};
var _hoisted_112 = ["id"];
var _hoisted_113 = ["onUpdate:modelValue", "onChange"];
var _hoisted_114 = ["onClick"];
var _hoisted_115 = ["onClick"];
var _hoisted_116 = {
  key: 1
};
var _hoisted_117 = ["id"];
var _hoisted_118 = ["onUpdate:modelValue", "onChange"];
var _hoisted_119 = ["onClick"];
var _hoisted_120 = ["onClick"];
var _hoisted_121 = ["id"];
var _hoisted_122 = {
  key: 0
};
var _hoisted_123 = ["onUpdate:modelValue", "onChange"];
var _hoisted_124 = ["onUpdate:modelValue", "onChange"];
var _hoisted_125 = ["onUpdate:modelValue", "onChange"];
var _hoisted_126 = ["onUpdate:modelValue", "onChange"];
var _hoisted_127 = ["onClick"];
var _hoisted_128 = ["onClick"];
var _hoisted_129 = ["id"];
var _hoisted_130 = {
  key: 0
};
var _hoisted_131 = ["onUpdate:modelValue", "onChange"];
var _hoisted_132 = ["onUpdate:modelValue", "onChange"];
var _hoisted_133 = ["onUpdate:modelValue", "onChange"];
var _hoisted_134 = ["onUpdate:modelValue", "onChange"];
var _hoisted_135 = ["onClick"];
var _hoisted_136 = ["onClick"];
var _hoisted_137 = ["id"];
var _hoisted_138 = {
  key: 0
};
var _hoisted_139 = ["onUpdate:modelValue", "onChange"];
var _hoisted_140 = ["onUpdate:modelValue", "onChange"];
var _hoisted_141 = ["onUpdate:modelValue", "onChange"];
var _hoisted_142 = ["onUpdate:modelValue", "onChange"];
var _hoisted_143 = ["onClick"];
var _hoisted_144 = ["onClick"];
var _hoisted_145 = ["id"];
var _hoisted_146 = {
  key: 0
};
var _hoisted_147 = ["onUpdate:modelValue", "onChange"];
var _hoisted_148 = ["onUpdate:modelValue", "onChange"];
var _hoisted_149 = ["onUpdate:modelValue", "onChange"];
var _hoisted_150 = ["onUpdate:modelValue", "onChange"];
var _hoisted_151 = ["onClick"];
var _hoisted_152 = ["onClick"];
var _hoisted_153 = ["value"];
var _hoisted_154 = ["value"];
var _hoisted_155 = ["value"];
var _hoisted_156 = ["value"];
var _hoisted_157 = ["id"];
var _hoisted_158 = {
  key: 0
};
var _hoisted_159 = ["onClick"];
var _hoisted_160 = ["onClick"];
var _hoisted_161 = ["id"];
var _hoisted_162 = {
  key: 0
};
var _hoisted_163 = ["onUpdate:modelValue", "onChange"];
var _hoisted_164 = ["onClick"];
var _hoisted_165 = ["onClick"];
var _hoisted_166 = ["onClick"];
var _hoisted_167 = ["onClick"];
var _hoisted_168 = ["onClick"];
var _hoisted_169 = ["onClick"];
var _hoisted_170 = {
  "class": "table table-sm table-borderless table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};
var _hoisted_171 = ["onUpdate:modelValue"];
var _hoisted_172 = ["onUpdate:modelValue"];
var _hoisted_173 = ["onClick"];
var _hoisted_174 = {
  "class": "table table-sm table-bordered table-hover"
};
var _hoisted_175 = ["onUpdate:modelValue"];
var _hoisted_176 = ["onUpdate:modelValue"];
var _hoisted_177 = ["onUpdate:modelValue"];
var _hoisted_178 = ["onUpdate:modelValue"];
var _hoisted_179 = ["onUpdate:modelValue"];
var _hoisted_180 = ["onUpdate:modelValue"];
var _hoisted_181 = ["onUpdate:modelValue"];
var _hoisted_182 = ["onUpdate:modelValue"];
var _hoisted_183 = ["onUpdate:modelValue"];
var _hoisted_184 = ["onUpdate:modelValue"];
var _hoisted_185 = ["onUpdate:modelValue"];
var _hoisted_186 = ["onUpdate:modelValue"];
var _hoisted_187 = ["onUpdate:modelValue"];
var _hoisted_188 = ["onUpdate:modelValue"];
var _hoisted_189 = ["onUpdate:modelValue"];
var _hoisted_190 = ["onUpdate:modelValue"];
var _hoisted_191 = ["onUpdate:modelValue"];
var _hoisted_192 = ["onUpdate:modelValue"];
var _hoisted_193 = ["onUpdate:modelValue"];
var _hoisted_194 = ["onUpdate:modelValue"];
var _hoisted_195 = ["onUpdate:modelValue"];
var _hoisted_196 = ["onClick"];
var _hoisted_197 = {
  "class": "mt-3 d-flex justify-content-between"
};
var _hoisted_198 = {
  style: {
    "border": "none !important",
    "border-collapse": "collapse !important"
  }
};
var _hoisted_199 = {
  style: {
    "border": "none !important"
  }
};
var _hoisted_200 = {
  key: 0
};
var _hoisted_201 = {
  "class": "mb-3"
};
var _hoisted_202 = {
  "class": "table table-bordered"
};
var _hoisted_203 = ["onUpdate:modelValue"];
var _hoisted_204 = ["onUpdate:modelValue"];
var _hoisted_205 = ["onUpdate:modelValue"];
var _hoisted_206 = ["onUpdate:modelValue"];
var _hoisted_207 = ["onUpdate:modelValue"];
var _hoisted_208 = ["onUpdate:modelValue"];
var _hoisted_209 = ["onClick"];
var _hoisted_210 = {
  "class": "mt-3"
};
var _hoisted_211 = {
  "class": "table table-bordered"
};
var _hoisted_212 = ["onUpdate:modelValue", "onChange"];
var _hoisted_213 = ["onUpdate:modelValue", "onChange"];
var _hoisted_214 = ["onUpdate:modelValue", "onChange"];
var _hoisted_215 = ["onUpdate:modelValue", "onChange"];
var _hoisted_216 = ["onUpdate:modelValue", "onChange"];
var _hoisted_217 = ["onUpdate:modelValue", "onChange"];
var _hoisted_218 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("multiselect");
  var _component_StrategyModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StrategyModal");
  var _component_ActivityModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityModal");
  var _component_ExpectedOutputModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExpectedOutputModal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " Engineering PPAs", 1 /* TEXT */), $data.from_mfo == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: $options.goBack
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :href=\"`/paps/${idmfo}`\" "), _cache[64] || (_cache[64] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        fill: "currentColor",
        "class": "bi bi-x-lg",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        "fill-rule": "evenodd",
        d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        "fill-rule": "evenodd",
        d: "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
      })], -1 /* CACHED */))];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: $options.goBack
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[65] || (_cache[65] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        fill: "currentColor",
        "class": "bi bi-x-lg",
        viewBox: "0 0 16 16"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        "fill-rule": "evenodd",
        d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        "fill-rule": "evenodd",
        d: "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
      })], -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PROGRAMS AND PROJECTS (PAPS) ******************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FIRST COLUMN "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_cache[71] || (_cache[71] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    required: ""
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[66] || (_cache[66] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "ID", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]]), $data.form.errors.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.idooe), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _cache[72] || (_cache[72] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Office", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<input type=\"number\" v-model=\"form.FFUNCCOD\" class=\"form-control\" autocomplete=\"chrome-off\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.FFUNCCOD = $event;
    }),
    onChange: _cache[2] || (_cache[2] = function () {
      return $options.filterMFOs && $options.filterMFOs.apply($options, arguments);
    })
  }, [_cache[67] || (_cache[67] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: ""
  }, null, -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.functions, function (functional) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: functional.FFUNCCOD
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(functional.FFUNCTION), 9 /* TEXT, PROPS */, _hoisted_10);
  }), 256 /* UNKEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.FFUNCCOD]]), $data.form.errors.FFUNCCOD ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.FFUNCCOD), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MFOs "), _cache[73] || (_cache[73] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Major Final Outputs ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control form-select",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.idmfo = $event;
    }),
    onChange: _cache[4] || (_cache[4] = function () {
      return $options.loadPAPS && $options.loadPAPS.apply($options, arguments);
    })
  }, [_cache[68] || (_cache[68] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.mfos_data, function (mfo) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: mfo.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(mfo.mfo_desc), 9 /* TEXT, PROPS */, _hoisted_12);
  }), 256 /* UNKEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.idmfo]]), $data.form.errors.idmfo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.idmfo), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Program and Projects (PAPS) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_14, "Parent Program and Projects (if any -0" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.mother_program_id) + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control form-select",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.mother_program_id = $event;
    })
  }, [_cache[69] || (_cache[69] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.motherPAPS, function (mfo) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: mfo.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(mfo.paps_desc), 9 /* TEXT, PROPS */, _hoisted_15);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.mother_program_id]]), $data.form.errors.mother_program_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.mother_program_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AIP COde "), _cache[74] || (_cache[74] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "AIP Code ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.aip_code = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.aip_code]]), $data.form.errors.aip_code ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.aip_code), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" POPSP Agency "), _cache[75] || (_cache[75] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Agency (For POPSP Programs Only)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control form-select",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.agency_name = $event;
    })
  }, [_cache[70] || (_cache[70] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.popsp_agencies, function (popsp) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: popsp.agency_code
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(popsp.agency_name), 9 /* TEXT, PROPS */, _hoisted_18);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.agency_name]]), $data.form.errors.agency_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.agency_name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.is_mother_program = $event;
    }),
    "true-value": 1,
    "false-value": 0
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.is_mother_program]]), _cache[76] || (_cache[76] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Is Mother PAPS ", -1 /* CACHED */)), _cache[77] || (_cache[77] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), $data.form.errors.with_gad_training ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.with_gad_training), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[78] || (_cache[78] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Program and Projects (PAPS) Description ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.paps_desc = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.paps_desc]]), $data.form.errors.paps_desc ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.paps_desc), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[79] || (_cache[79] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Description", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "4",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.MOV = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.MOV]]), $data.form.errors.MOV ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.MOV), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[80] || (_cache[80] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Date Start", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.form.date_start = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_start]]), $data.form.errors.date_start ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.date_start), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[81] || (_cache[81] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Date End", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.form.date_end = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_end]]), $data.form.errors.date_end ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.date_end), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SECOND COLUMN "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_cache[91] || (_cache[91] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Type", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control form-select",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.form.type = $event;
    })
  }, _toConsumableArray(_cache[82] || (_cache[82] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "GAS", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Activity", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Program", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Project", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.type]]), $data.form.errors.type ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.type), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[92] || (_cache[92] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Sectors", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.form.sector = $event;
    }),
    "class": "form-control form-select"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.sectors, function (subsectors, sector) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: sector,
      value: sector
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(sector), 9 /* TEXT, PROPS */, _hoisted_27);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.sector]]), $data.form.errors.sector ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.sector), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ sectors }} "), _cache[93] || (_cache[93] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Sub-sectors", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.form.subsector = $event;
    }),
    "class": "form-control form-select"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.sectors[$data.form.sector], function (subsector) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: subsector
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subsector), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.subsector]]), $data.form.errors.subsector ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.subsector), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SOURCE OF FUNDS "), _cache[94] || (_cache[94] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Source of Funds", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ form.source_of_funds }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control form-select",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.form.source_of_funds = $event;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <option value=\"\"></option> "), _cache[83] || (_cache[83] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "gen_fund"
  }, "General Fund", -1 /* CACHED */)), _cache[84] || (_cache[84] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "ldrrmf"
  }, "Local Disaster Risk Reduction Management Fund (LDRRMF)", -1 /* CACHED */)), _cache[85] || (_cache[85] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "dev"
  }, "20% Development Fund", -1 /* CACHED */)), _cache[86] || (_cache[86] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "other"
  }, "Other Sources", -1 /* CACHED */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.source_of_funds]]), $data.form.errors.source_of_funds ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.source_of_funds), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("SOURCE OF FUNDS OTHERS SPECIFY "), $data.form.source_of_funds === 'other' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, [_cache[87] || (_cache[87] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Please Specify Other Source of Funds", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.form.source_others_specify = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.source_others_specify]]), $data.form.errors.source_others_specify ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.source_others_specify), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FUNDING AGENCY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label for=\"\">Funding Agency</label>\r\n                        <input type=\"text\" v-model=\"form.funding_agency\" class=\"form-control\" autocomplete=\"chrome-off\">\r\n                        <div class=\"fs-6 c-red-500\" v-if=\"form.errors.funding_agency\">{{ form.errors.funding_agency }}</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" POPSP SECTORS"), $data.form.sector === 'General Public Services Sector' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.form.popsp = $event;
    }),
    "true-value": 1,
    "false-value": 0
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.popsp]]), _cache[89] || (_cache[89] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "popsp"
  }, "POPSP", -1 /* CACHED */)), _cache[90] || (_cache[90] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Focus Area (POPSP)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control form-select",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $data.form.focus_area = $event;
    })
  }, _toConsumableArray(_cache[88] || (_cache[88] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Crime and Disorder", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Conflict", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Threat to environment and human security", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Public Safety", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.focus_area]]), $data.form.errors.focus_area ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.focus_area), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label for=\"\">Chief Executive Agenda</label>\r\n                        <select class=\"form-control form-select\" v-model=\"form.chief_executive_agenda\">\r\n                            <option value=\"\"></option>\r\n                            <option v-for=\"chief_agenda in chief_agenda\" :value=\"chief_agenda.id\">\r\n                                {{ chief_agenda.agenda_description }}\r\n                            </option>\r\n                        </select>\r\n                        <div class=\"fs-6 c-red-500\" v-if=\"form.errors.chief_executive_agenda\">{{ form.errors.chief_executive_agenda\r\n                        }}</div>\r\n\r\n                        <label for=\"\">Socio-Economic Agenda</label>\r\n                        <select class=\"form-control form-select\" v-model=\"form.socio_economic_agenda\">\r\n                            <option value=\"\"></option>\r\n                            <option v-for=\"socio_economic in socio_economic\" :value=\"socio_economic.id\">\r\n                                {{ socio_economic.agenda_description }}\r\n                            </option>\r\n                        </select>\r\n                        <div class=\"fs-6 c-red-500\" v-if=\"form.errors.socio_economic_agenda\">{{ form.errors.socio_economic_agenda }}\r\n                        </div>\r\n\r\n                        <label for=\"\">Sustainable Development Goals</label>\r\n                        <select class=\"form-control form-select\" v-model=\"form.sust_devt_goal\">\r\n                            <option value=\"\"></option>\r\n                            <option v-for=\"sustainable in sustainable\" :value=\"sustainable.id\">\r\n                                {{ sustainable.goal_description }}\r\n                            </option>\r\n                        </select>\r\n                        <div class=\"fs-6 c-red-500\" v-if=\"form.errors.sust_devt_goal\">{{ form.errors.sust_devt_goal }}</div>\r\n\r\n                        <label for=\"\">Executive Legislative Agenda</label>\r\n                        <select class=\"form-control form-select\" v-model=\"form.executive_legislative_agenda\">\r\n                            <option value=\"\"></option>\r\n                            <option v-for=\"executive_legislative in executive_legislative\" :value=\"executive_legislative.id\">\r\n                                {{ executive_legislative.agenda_description }}\r\n                            </option>\r\n                        </select>\r\n                        <div class=\"fs-6 c-red-500\" v-if=\"form.errors.executive_legislative_agenda\">{{\r\n                            form.errors.executive_legislative_agenda }}</div>\r\n\r\n                        <label for=\"\">Research Agenda</label>\r\n                        <select class=\"form-control form-select\" v-model=\"form.research_agenda\">\r\n                            <option value=\"\"></option>\r\n                            <option v-for=\"research in research\" :value=\"research.id\">\r\n                                {{ research.agenda_description }}\r\n                            </option>\r\n                        </select>\r\n                        <div class=\"fs-6 c-red-500\" v-if=\"form.errors.research_agenda\">{{ form.errors.research_agenda }}</div>\r\n\r\n                        <label for=\"\">AIP Code</label>\r\n                        <input type=\"text\" v-model=\"form.aip_code\" class=\"form-control\" autocomplete=\"chrome-off\">\r\n                        <div class=\"fs-6 c-red-500\" v-if=\"form.errors.aip_code\">{{ form.errors.aip_code }}</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.form.id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" THIRD COLUMN -ACTIVITIES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps}} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary mt-3 text-white",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, " Save changes ", 8 /* PROPS */, _hoisted_35)], 32 /* NEED_HYDRATION */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IMPLEMENTATION SCHEDULE/WORKPLAN -STRATEGIES AND ACTIVITIES ************************************"), $props.paps ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /strategies-and-activities/${dat.id} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/strategies-and-activities/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[95] || (_cache[95] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Implementation Schedule/Workplan ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[23] || (_cache[23] = function ($event) {
      return $options.showStrategyModal();
    })
  }, " Add Strategies ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_39, [_cache[129] || (_cache[129] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Use the "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "numeric SEQ#"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to order strategies and activities from lowest to highest. After making changes, click outside the field and refresh the page ("), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Ctrl+R"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(") to apply them.")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ rev }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_40, [_cache[128] || (_cache[128] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "SEQ#"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "12%",
      "text-align": "center"
    }
  }, "Strategies/Activities"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Performance Target Indicators"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Gender Issues to be Addressed"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Timeline"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Expected Output"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Personnel Services"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "MOOE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Financial Expenses"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Capital Outlay"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Budget"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Climate Change Topology Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Person Responsible"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.implementation, function (dat, index) {
    var _dat$strategyProject$, _dat$strategyProject$2;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: dat.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" STRATEGIES***************************************************************************************************** "), $data.rev.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(), 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_42)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_43)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": "form-control transparent-bg",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return dat.description = $event;
      },
      type: "text",
      onInput: _cache[24] || (_cache[24] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('strategies', 'description', dat.id, dat.description);
      }
    }, "                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description) + "\r\n                                    ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_44), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, dat.description]])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'target_indicator', 'strategy_projects', dat, dat.comments)
      })
    }, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.target_indicator), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.gad_issue), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_47, [dat.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_from)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_from && dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_49, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_to)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_51, [dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_dat$strategyProject$ = dat.strategyProject[0]) === null || _dat$strategyProject$ === void 0 ? void 0 : _dat$strategyProject$.expected_output) || [], function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1 /* TEXT */), _cache[96] || (_cache[96] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_dat$strategyProject$2 = dat.strategyProject[0]) === null || _dat$strategyProject$2 === void 0 ? void 0 : _dat$strategyProject$2.expected_outcome) || [], function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1 /* TEXT */), _cache[97] || (_cache[97] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_55)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_56, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total) + parseFloat(dat.mooe_total) + parseFloat(dat.co_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.ccet_code), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.responsible), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: 1,
      id: dat.strategy_id + '_strategy_projects_strategy',
      style: {
        "background-color": "lightgrey",
        "font-weight": "bold"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SEQUENCE NUMBER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "number",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return dat.seq_no = $event;
      },
      style: {
        "width": "8ch"
      },
      onInput: _cache[25] || (_cache[25] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('strategy_projects', 'seq_no', dat.strategy_id, dat.seq_no);
      }
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_61), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, dat.seq_no]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      }),
      colspan: "12"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": "form-control transparent-bg",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return dat.description = $event;
      },
      type: "text",
      onInput: _cache[26] || (_cache[26] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('strategies', 'description', dat.id, dat.description);
      }
    }, "                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description) + "\r\n                                        ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_63), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, dat.description]])])]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_64)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_65)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-primary btn-sm text-white",
      onClick: function onClick($event) {
        return $options.showActivityModal(dat.id);
      }
    }, " Add Activities ", 8 /* PROPS */, _hoisted_66), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" @click=\"deleteData(dat.id, 'strategies', dat.description)\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteDataActivityOrStrat(dat.id, 'strategies', dat.description, $data.rev.id);
      }
    }, " 🗑 Delete Strategy ", 8 /* PROPS */, _hoisted_67)])], 8 /* PROPS */, _hoisted_60)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACTIVITIES **************************************************************************************************** "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((dat.activity || []).filter(function (a) {
      return a;
    }), function (act, subIndex) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: subIndex
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr>\r\n                                    <td>{{ dat.activity }} ----- {{ rev.is_strategy_based }}  ----- {{ act.is_active }} ---  {{ act }}</td>\r\n                                </tr> "), dat.activity && $data.rev.is_strategy_based == 0 && act.is_active === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SEQUENCE NUMBER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.seq_no = $event;
        },
        style: {
          "width": "8ch"
        },
        onInput: _cache[27] || (_cache[27] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'seq_no', act.activity_id, act.seq_no);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_69), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.seq_no]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DESCRIPTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_activities'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{act}}\r\n                                        {{ act.id }}_activity_projects_activities "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.description = $event;
        },
        type: "text",
        onInput: _cache[28] || (_cache[28] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activities', 'description', act.id, act.description);
        }
      }, "                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.description) + "\r\n                                        ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_71), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.description]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_72)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_73)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_70), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET/INDICATORs, EXPECTED OUTPUTS, GAD ISSUE, IMPLEMENTATION DATES"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF THE ACTIVITY HAS OUTCOMES OR OUTPUTS "), $options.getPairedOutputs(act.activityProject[0]) && $options.getPairedOutputs(act.activityProject[0]).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_76, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getPairedOutputs(act.activityProject[0]), function (pair, i) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: i,
          style: {
            "height": "100%"
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Target Indicator "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": "align-top",
          style: {
            "width": "25%",
            "height": "100%",
            "border": "1px solid #000",
            "padding": "4px"
          },
          id: pair.id + '_activity_projects_target_indicator'
        }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          id: pair.id + '_target_indicator',
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return pair.target_indicator = $event;
          },
          type: "text",
          onInput: _cache[29] || (_cache[29] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'target_indicator', pair.id, pair.target_indicator);
          }
        }, "                                                                ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_79), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pair.target_indicator]]), pair.quantity > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_80, " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[98] || (_cache[98] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[99] || (_cache[99] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_81)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_82)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_77), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
            'text-danger': $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments)
          }]),
          id: act.activity_id + '_activity_projects_gad_issue',
          style: {
            "width": "25%",
            "border": "1px solid #000",
            "padding": "4px"
          },
          rowspan: $options.getPairedOutputs(act.activityProject[0]).length
        }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.gad_issue = $event;
          },
          type: "text",
          onInput: _cache[30] || (_cache[30] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('activity_projects', 'gad_issue', act.activity_id, act.gad_issue);
          }
        }, "                                                                        " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + "\r\n                                                                ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_85), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.gad_issue]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_86)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_87)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_83)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
          key: 1,
          style: {
            "width": "25%",
            "border": "1px solid #000",
            "padding": "4px"
          },
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
            'text-danger': $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) || $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments)
          }]),
          rowspan: $options.getPairedOutputs(act.activityProject[0]).length
        }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"act.date_from\"  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-control",
          type: "date",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_from = $event;
          },
          id: act.activity_id + '_activity_projects_date_from',
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('activity_projects', 'date_from', act.activity_id, act.date_from);
          }
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_90), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_from]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_91)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_92)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"act.date_from && act.date_to\" "), _cache[100] || (_cache[100] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " to ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"act.date_to\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-control",
          type: "date",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_to = $event;
          },
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('activity_projects', 'date_to', act.activity_id, act.date_to);
          },
          id: act.activity_id + '_activity_projects_date_to'
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_93), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_to]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_94)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_95)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_88)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outputs/Outcomes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTPUTS*********************************************************************** "), pair.output_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) || $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments)
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          id: pair.id + '_expected_revised_outputs',
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return pair.output_description = $event;
          },
          type: "text",
          onInput: _cache[31] || (_cache[31] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'description', pair.id, pair.output_description);
          }
        }, "                                                                    ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_97), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pair.output_description]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-if=\"pair.quantity>0\" > {{ pair.quantity }} </span> {{ pair.output_description }} gfhfghfghgfhgfh "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_98)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_99)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTCOMES*********************************************************************** "), pair.outcome_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 1,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) || $options.has_comment('Implementation Plan', 'outcome_description', pair.output_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments)
          }),
          id: pair.id + '_expected_revised_outcomes'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return pair.outcome_description = $event;
          },
          type: "text",
          onInput: _cache[32] || (_cache[32] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outcomes', 'description', pair.id, pair.outcome_description);
          }
        }, "                                                                ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_101), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pair.outcome_description]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_102)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_103)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_100)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
      }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF THE ACTIVITY HAS NO OUTCOMES OR OUTPUTS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[101] || (_cache[101] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{act}} ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
          'text-danger': $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments)
        }]),
        id: dat.id + '_activity_projects_gad_issue',
        style: {
          "width": "25%",
          "border": "1px solid #000",
          "padding": "4px"
        },
        rowspan: $options.getPairedOutputs(act.activityProject[0]).length
      }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.gad_issue = $event;
        },
        type: "text",
        onInput: _cache[33] || (_cache[33] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'gad_issue', act.activity_id, act.gad_issue);
        }
      }, "                                                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + "\r\n                                                                    ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_107), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.gad_issue]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_108)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_109)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_105), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "width": "25%",
          "border": "1px solid #000",
          "padding": "4px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
          'text-danger': $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) || $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments)
        }]),
        rowspan: $options.getPairedOutputs(act.activityProject[0]).length
      }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_111, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 0,
        id: dat.id + '_activity_projects_date_from'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "date",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.date_from = $event;
        },
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'date_from', act.activity_id, act.date_from);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_113), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_from]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_114)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_115)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_112)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_116, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 2,
        id: dat.id + '_activity_projects_date_to'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "date",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.date_to = $event;
        },
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'date_to', act.activity_id, act.date_to);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_118), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_to]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_119)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_120)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_117)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_110), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outcome "), _cache[102] || (_cache[102] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))])])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSONNEL SERVICES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ps_total'
      }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[103] || (_cache[103] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q1 = $event;
        },
        onInput: _cache[34] || (_cache[34] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q1', act.activity_id, act.ps_q1);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_123), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[104] || (_cache[104] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q2 = $event;
        },
        onInput: _cache[35] || (_cache[35] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q2', act.activity_id, act.ps_q2);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_124), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[105] || (_cache[105] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q3 = $event;
        },
        onInput: _cache[36] || (_cache[36] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q3', act.activity_id, act.ps_q3);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_125), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[106] || (_cache[106] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q4 = $event;
        },
        onInput: _cache[37] || (_cache[37] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q4', act.activity_id, act.ps_q4);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_126), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.ps_q2) + parseFloat(act.ps_q3) + parseFloat(act.ps_q4), 2, true)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat.id + '_activity_projects_ps_total' }} "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_127)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_128)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_121), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAINTENANCE, OPERATING, AND OTHER EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments)
        }),
        id: dat.id + '_activity_projects_mooe_total'
      }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[107] || (_cache[107] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q1 = $event;
        },
        onInput: _cache[38] || (_cache[38] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q1', act.activity_id, act.mooe_q1);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_131), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[108] || (_cache[108] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q2 = $event;
        },
        onInput: _cache[39] || (_cache[39] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q2', act.activity_id, act.mooe_q2);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_132), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[109] || (_cache[109] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q3 = $event;
        },
        onInput: _cache[40] || (_cache[40] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q3', act.activity_id, act.mooe_q3);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_133), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[110] || (_cache[110] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q4 = $event;
        },
        onInput: _cache[41] || (_cache[41] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q4', act.activity_id, act.mooe_q4);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_134), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_q1) + parseFloat(act.mooe_q2) + parseFloat(act.mooe_q3) + parseFloat(act.mooe_q4), 2, true)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_135)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_136)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_129), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FINANCIAL EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments)
        }),
        id: dat.id + '_activity_projects_fe_total'
      }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_138, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[111] || (_cache[111] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q1 = $event;
        },
        onInput: _cache[42] || (_cache[42] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q1', act.activity_id, act.fe_q1);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_139), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[112] || (_cache[112] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q2 = $event;
        },
        onInput: _cache[43] || (_cache[43] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q2', act.activity_id, act.fe_q2);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_140), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[113] || (_cache[113] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q3 = $event;
        },
        onInput: _cache[44] || (_cache[44] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q3', act.activity_id, act.fe_q3);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_141), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[114] || (_cache[114] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q4 = $event;
        },
        onInput: _cache[45] || (_cache[45] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q4', act.activity_id, act.fe_q4);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_142), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_q1) + parseFloat(act.fe_q2) + parseFloat(act.fe_q3) + parseFloat(act.fe_q4), 2, true)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_143)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_144)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_137), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_co_total'
      }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_146, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[115] || (_cache[115] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q1 = $event;
        },
        onInput: _cache[46] || (_cache[46] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q1', act.activity_id, act.co_q1);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_147), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[116] || (_cache[116] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q2 = $event;
        },
        onInput: _cache[47] || (_cache[47] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q2', act.activity_id, act.co_q2);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_148), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[117] || (_cache[117] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q3 = $event;
        },
        onInput: _cache[48] || (_cache[48] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q3', act.activity_id, act.co_q3);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_149), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[118] || (_cache[118] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q4 = $event;
        },
        onInput: _cache[49] || (_cache[49] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q4', act.activity_id, act.co_q4);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_150), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_q1) + parseFloat(act.co_q2) + parseFloat(act.co_q3) + parseFloat(act.co_q4), 2, true)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_151)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_152)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_145), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-if=\"paps.is_strategy_based==0\">{{ format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total)+ parseFloat(act.co_total),2,true) }}</span> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[119] || (_cache[119] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q1) + parseFloat(act.mooe_q1) + parseFloat(act.fe_q1) + parseFloat(act.co_q1),
        disabled: ""
      }, null, 8 /* PROPS */, _hoisted_153)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[120] || (_cache[120] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q2) + parseFloat(act.mooe_q2) + parseFloat(act.fe_q2) + parseFloat(act.co_q2),
        disabled: ""
      }, null, 8 /* PROPS */, _hoisted_154)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[121] || (_cache[121] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q3) + parseFloat(act.mooe_q3) + parseFloat(act.fe_q3) + parseFloat(act.co_q3),
        disabled: ""
      }, null, 8 /* PROPS */, _hoisted_155)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[122] || (_cache[122] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q4) + parseFloat(act.mooe_q4) + parseFloat(act.fe_q4) + parseFloat(act.co_q4),
        disabled: ""
      }, null, 8 /* PROPS */, _hoisted_156)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SUM OF ALL 16 VALUES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.mooe_q1) + parseFloat(act.fe_q1) + parseFloat(act.co_q1) + parseFloat(act.ps_q2) + parseFloat(act.mooe_q2) + parseFloat(act.fe_q2) + parseFloat(act.co_q2) + parseFloat(act.ps_q3) + parseFloat(act.mooe_q3) + parseFloat(act.fe_q3) + parseFloat(act.co_q3) + parseFloat(act.ps_q4) + parseFloat(act.mooe_q4) + parseFloat(act.fe_q4) + parseFloat(act.co_q4), 2, true)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ccet_code'
      }, [$data.rev.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
        "class": "form-select dynamic-width",
        options: $options.ccet_computed,
        searchable: true,
        label: "label",
        "track-by": "label",
        reduce: function reduce(act) {
          return act.ccet_code;
        },
        modelValue: act.ccet_code,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ccet_code = $event;
        },
        onInput: function onInput(newVal) {
          return $options.updateRevisionPlans('activity_projects', 'ccet_code', act.activity_id, newVal);
        }
      }, null, 8 /* PROPS */, ["options", "reduce", "modelValue", "onUpdate:modelValue", "onInput"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <textarea\r\n                                                class=\"form-control transparent-bg \"\r\n                                                v-model=\"act.ccet_code\"\r\n                                                type=\"text\"\r\n                                                @input=\"setUnsaved(true)\"\r\n                                                @input=\"updateCCET($event)\"\r\n                                                @change=\"updateRevisionPlans('activity_projects', 'ccet_code', act.activity_id, act.ccet_code)\">\r\n                                                    {{ act.ccet_code }}\r\n                                            </textarea> ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_159)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_160)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_157), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RESPONSIBLE INDIVIDUAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_responsible'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.responsible = $event;
        },
        type: "text",
        onInput: _cache[50] || (_cache[50] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'responsible', act.activity_id, act.responsible);
        }
      }, "                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.ccet_code) + "\r\n                                            ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_163), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.responsible]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_164)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_165)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_161), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Actions"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" activity_id {{ act.activityProject[0].activity_id }}\r\n                                        activity_project_id: {{ act.activityProject[0].id }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-sm text-white",
        onClick: function onClick($event) {
          return $options.showExpectedOutputModal(act.activityProject[0].expected_output, act.activityProject[0].activity_id, act.activityProject[0].id, act.description);
        }
      }, " Expected Outputs ", 8 /* PROPS */, _hoisted_166), _cache[123] || (_cache[123] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-sm text-white",
        onClick: function onClick($event) {
          return _ctx.showExpectedOutcomeModal(act.activityProject[0].expected_outcome, act.activityProject[0].activity_id, act.activityProject[0].id);
        }
      }, " Expected Outcomes ", 8 /* PROPS */, _hoisted_167), _cache[124] || (_cache[124] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-sm text-white",
        onClick: function onClick($event) {
          return _ctx.showExpectedOutcomesModal(act.id);
        }
      }, " Edit Activity ", 8 /* PROPS */, _hoisted_168), _cache[125] || (_cache[125] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-danger btn-sm text-white",
        onClick: function onClick($event) {
          return $options.deleteDataActivityOrStrat(act.id, 'activities', dat.description, $data.rev.id);
        }
      }, " 🗑 Delete Activity ", 8 /* PROPS */, _hoisted_169), _cache[126] || (_cache[126] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTALS*********************************************************************************** "), _cache[127] || (_cache[127] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td></td>\r\n                                <td colspan=\"5\">TOTAL</td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\r\n                                    'text-danger': has_comment('Implementation Plan',\r\n                                    format_number_conv(v_imp_ps,2,true),\r\n                                    format_number_conv(v_imp_ps,2,true),\r\n                                    'imp_ps',\r\n                                    'revision_plans',\r\n                                    paps,\r\n                                    paps.comments)\r\n                                }\"\r\n                                :id=\"paps.id+'_revision_plans_imp_ps'\">\r\n                                    ₱ {{ totalImplementationPS.toLocaleString() }}\r\n                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                        format_number_conv(v_imp_ps,2,true),\r\n                                        format_number_conv(v_imp_ps,2,true),\r\n                                        'imp_ps',\r\n                                        'revision_plans',\r\n                                        paps,\r\n                                        paps.comments)\">*\r\n                                    </button>\r\n                                    <button v-if=\"has_comment('Implementation Plan',\r\n                                            format_number_conv(v_imp_ps,2,true),\r\n                                            format_number_conv(v_imp_ps,2,true),\r\n                                            'imp_ps',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                            format_number_conv(v_imp_ps,2,true),\r\n                                            format_number_conv(v_imp_ps,2,true),\r\n                                            'imp_ps',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\">*\r\n                                    </button>\r\n                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\r\n                                    'text-danger': has_comment('Implementation Plan',\r\n                                    format_number_conv(v_imp_mooe,2,true),\r\n                                    format_number_conv(v_imp_mooe,2,true),\r\n                                    'imp_mooe',\r\n                                    'revision_plans',\r\n                                    paps,\r\n                                    paps.comments)\r\n                                }\"\r\n                                :id=\"paps.id+'_revision_plans_imp_mooe'\"\r\n                                > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ₱ {{ totalImplementationMOOE.toLocaleString() }}\r\n                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                            format_number_conv(v_imp_mooe,2,true),\r\n                                            format_number_conv(v_imp_mooe,2,true),\r\n                                            'imp_mooe',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\">*\r\n                                    </button>\r\n                                    <button v-if=\"has_comment('Implementation Plan',\r\n                                            format_number_conv(v_imp_mooe,2,true),\r\n                                            format_number_conv(v_imp_mooe,2,true),\r\n                                            'imp_mooe',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                            format_number_conv(v_imp_mooe,2,true),\r\n                                            format_number_conv(v_imp_mooe,2,true),\r\n                                            'imp_mooe',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\">*\r\n                                    </button>\r\n                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\r\n                                    'text-danger': has_comment('Implementation Plan',\r\n                                    format_number_conv(v_imp_fe,2,true),\r\n                                    format_number_conv(v_imp_fe,2,true),\r\n                                    'imp_fe',\r\n                                    'revision_plans',\r\n                                    paps,\r\n                                    paps.comments)\r\n                                }\"\r\n                                :id=\"paps.id+'_revision_plans_imp_fe'\"\r\n                                > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_fe,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ₱ {{ totalImplementationFE.toLocaleString() }}\r\n                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                            format_number_conv(v_imp_fe,2,true),\r\n                                            format_number_conv(v_imp_fe,2,true),\r\n                                            'imp_fe',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\">*\r\n                                    </button>\r\n                                    <button v-if=\"has_comment('Implementation Plan',\r\n                                            format_number_conv(v_imp_fe,2,true),\r\n                                            format_number_conv(v_imp_fe,2,true),\r\n                                            'imp_fe',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                            format_number_conv(v_imp_fe,2,true),\r\n                                            format_number_conv(v_imp_fe,2,true),\r\n                                            'imp_fe',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\">*\r\n                                    </button>\r\n                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\r\n                                    'text-danger': has_comment('Implementation Plan',\r\n                                    format_number_conv(v_imp_co,2,true),\r\n                                    format_number_conv(v_imp_co,2,true),\r\n                                    'imp_co',\r\n                                    'revision_plans',\r\n                                    paps,\r\n                                    paps.comments)\r\n                                }\"\r\n                                :id=\"paps.id+'_revision_plans_imp_fe'\"\r\n                                > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_co,2,true)}} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ₱ {{ totalImplementationCO.toLocaleString() }}\r\n                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                            format_number_conv(v_imp_co,2,true),\r\n                                            format_number_conv(v_imp_co,2,true),\r\n                                            'imp_co',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\">*\r\n                                    </button>\r\n                                    <button v-if=\"has_comment('Implementation Plan',\r\n                                            format_number_conv(v_imp_co,2,true),\r\n                                            format_number_conv(v_imp_co,2,true),\r\n                                            'imp_co',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                            format_number_conv(v_imp_co,2,true),\r\n                                            format_number_conv(v_imp_co,2,true),\r\n                                            'imp_co',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\">*\r\n                                    </button>\r\n                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td class=\"text-end\"\r\n                                    :class=\"{\r\n                                        'text-danger': has_comment('Implementation Plan',\r\n                                        format_number_conv(imp_amount,2,true),\r\n                                        format_number_conv(imp_amount,2,true),\r\n                                        'total_imp_amount',\r\n                                        'revision_plans',\r\n                                        paps,\r\n                                        paps.comments)\r\n                                    }\"\r\n                                > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(imp_amount,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ₱ {{ totalImplementationAll.toLocaleString() }}\r\n                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                            format_number_conv(imp_amount,2,true),\r\n                                            format_number_conv(imp_amount,2,true),\r\n                                            'total_imp_amount',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\">*\r\n                                    </button>\r\n                                    <button v-if=\"has_comment('Implementation Plan',\r\n                                            format_number_conv(imp_amount,2,true),\r\n                                            format_number_conv(imp_amount,2,true),\r\n                                            'total_imp_amount',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\" class=\"superscript-btn\"\r\n                                        @click=\"handleClick('Implementation Plan',\r\n                                            format_number_conv(imp_amount,2,true),\r\n                                            format_number_conv(imp_amount,2,true),\r\n                                            'total_imp_amount',\r\n                                            'revision_plans',\r\n                                            paps,\r\n                                            paps.comments)\">*\r\n                                    </button>\r\n                                </td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td></td> ")], -1 /* CACHED */))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{  form }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" mfos_data: {{ mfos_data }}\r\n        <br /><br /><br />\r\n        FFUNCCOD: {{ form.FFUNCCOD }}<br />\r\n        dataMFO: {{ formattedMFOs }}\r\n        <br />\r\n        <br />\r\n        <br />\r\n        {{ mfos }} "), $data.StrategyModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StrategyModal, {
    key: 0,
    onCloseModalEvent: $options.closeStrategyModal,
    title: "STRATEGIES MODAL"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_170, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.strategies, function (strategy, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index,
          "class": "strategy-item mb-2"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return strategy.description = $event;
          },
          placeholder: "Description",
          type: "text",
          "class": "form-control mb-1"
        }, null, 8 /* PROPS */, _hoisted_171), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return strategy.year_period = $event;
          },
          placeholder: "Year Period",
          type: "number",
          "class": "form-control mb-1"
        }, null, 8 /* PROPS */, _hoisted_172), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.year_period]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeStrategy(index);
          },
          "class": "btn btn-danger btn-sm",
          style: {
            "background-color": "#dc3545",
            "color": "#fff",
            "border": "none"
          }
        }, " X", 8 /* PROPS */, _hoisted_173)])]);
      }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[51] || (_cache[51] = function () {
          return $options.addStrategy && $options.addStrategy.apply($options, arguments);
        }),
        "class": "btn btn-primary mt-2"
      }, "Add Row"), _cache[130] || (_cache[130] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[52] || (_cache[52] = function () {
          return $options.saveStrategies && $options.saveStrategies.apply($options, arguments);
        }),
        "class": "btn btn-success mt-2"
      }, "Save"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{strategies}} ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ActivityModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityModal, {
    key: 1,
    onCloseModalEvent: $options.closeActivityModal,
    title: "ACTIVITIES MODAL"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_174, [_cache[133] || (_cache[133] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Gender Issues"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Timeline"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Period"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "text-center bg-light"
      }, "PS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "text-center bg-light"
      }, "MOOE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "text-center bg-light"
      }, "CO"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "text-center bg-light"
      }, "FE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "CCET"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Responsible"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.activities, function (act, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.description = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_175), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.gad_issue = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_176), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.gad_issue]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_from = $event;
          },
          type: "date",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_177), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_from]]), _cache[131] || (_cache[131] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "to", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_to = $event;
          },
          type: "date",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_178), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_to]])])]), _cache[132] || (_cache[132] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          value: "Q1",
          "class": "form-control",
          disabled: ""
        })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          value: "Q2",
          "class": "form-control",
          disabled: ""
        })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          value: "Q3",
          "class": "form-control",
          disabled: ""
        })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          value: "Q4",
          "class": "form-control",
          disabled: ""
        })])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_179), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_180), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_181), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_182), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.ps_q2) + parseFloat(act.ps_q3) + parseFloat(act.ps_q4), 2, true)) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_183), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_184), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_185), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_186), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_q1) + parseFloat(act.mooe_q2) + parseFloat(act.mooe_q3) + parseFloat(act.mooe_q4), 2, true)) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_187), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_188), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_189), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_190), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_q1) + parseFloat(act.co_q2) + parseFloat(act.co_q3) + parseFloat(act.co_q4), 2, true)) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_191), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_192), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_193), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_194), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_q1) + parseFloat(act.fe_q2) + parseFloat(act.fe_q3) + parseFloat(act.fe_q4), 2, true)) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input v-model=\"act.ccet_code\" class=\"form-control\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"act.ccet_code\" class=\"form-select\" >\r\n                                <option value=\"\">Select CCET</option>\r\n                                <option v-for=\"ccet in ccet_codes\" :key=\"ccet.ccet_code\" :value=\"ccet.ccet_code\">\r\n                                    {{ ccet.ccet_code }} - {{ ccet.description }}\r\n                                </option>\r\n                            </select> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
          "class": "form-select dynamic-width",
          options: $options.ccet_computed,
          searchable: true,
          label: "label",
          "track-by": "label",
          reduce: function reduce(act) {
            return act.ccet_code;
          },
          modelValue: act.ccet_code,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ccet_code = $event;
          },
          onInput: _cache[53] || (_cache[53] = function ($event) {
            return $options.updateCCET($event);
          })
        }, null, 8 /* PROPS */, ["options", "reduce", "modelValue", "onUpdate:modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSON RESPONSIBLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.responsible = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_195), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.responsible]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm",
          onClick: function onClick($event) {
            return $options.removeActivity(index);
          }
        }, " X ", 8 /* PROPS */, _hoisted_196)])]);
      }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_197, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary text-white",
        onClick: _cache[54] || (_cache[54] = function () {
          return $options.addActivity && $options.addActivity.apply($options, arguments);
        })
      }, "Add Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-success text-white",
        onClick: _cache[55] || (_cache[55] = function () {
          return $options.saveActivities && $options.saveActivities.apply($options, arguments);
        })
      }, "Save")])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ExpectedOutputModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ExpectedOutputModal, {
    key: 2,
    onCloseModalEvent: $options.hideExpectedOutputModal,
    title: "EXPECTED OUTPUTS"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h3><p><b>Activity: </b><u>{{activity_description_current}}</u></p></h3> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_198, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[134] || (_cache[134] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "border": "none !important"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Activity: ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_199, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.activity_description_current), 1 /* TEXT */)])])])]), _cache[137] || (_cache[137] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Expected Outputs", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ expected_outputs_current }}\r\n            activity_id: {{ activity_id }}\r\n            activity_project_id: {{ activity_project_id }} "), $data.expected_outputs_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_200, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_202, [_cache[135] || (_cache[135] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "table table-secondary text-center align-middle"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "3"
      }, "Expected Output Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "3"
      }, "Target/Indicator"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "4"
      }, "Physical"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "3"
      }, "Actions")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "table table-secondary text-center align-middle"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "4"
      }, "Timeline/Duration")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "table table-secondary text-center align-middle"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "1st Quarter"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "2nd Quarter"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "3rd Quarter"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "4th Quarter")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.expected_outputs_new, function (output, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.description = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_203), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.target_indicator = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_204), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.target_indicator]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q1 = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_205), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q2 = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_206), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q3 = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_207), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q4 = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_208), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeExpectedOutput(index);
          },
          "class": "btn btn-danger btn-sm"
        }, "Remove", 8 /* PROPS */, _hoisted_209)])]);
      }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_210, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[56] || (_cache[56] = function () {
          return $options.addExpectedOutput && $options.addExpectedOutput.apply($options, arguments);
        }),
        "class": "btn btn-primary"
      }, "Add Row"), $data.expected_outputs_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[57] || (_cache[57] = function () {
          return $options.saveExpectedOutputs && $options.saveExpectedOutputs.apply($options, arguments);
        }),
        "class": "btn btn-success"
      }, "Save")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_211, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr> "), _cache[136] || (_cache[136] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "table table-secondary text-center align-middle"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "3"
      }, "Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "3"
      }, "Target/Indicator"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "4"
      }, "Physical"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "3"
      }, "Actions")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "table table-secondary text-center align-middle"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "4"
      }, "Timeline/Duration")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "table table-secondary text-center align-middle"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "1st Quarter"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "2nd Quarter"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "3rd Quarter"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "4th Quarter")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.expected_outputs_current, function (exp) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.description = $event;
          },
          type: "text",
          onInput: _cache[58] || (_cache[58] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'description', exp.id, exp.description);
          }
        }, "\r\n                                ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_212), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.target_indicator = $event;
          },
          type: "text",
          onInput: _cache[59] || (_cache[59] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'target_indicator', exp.id, exp.target_indicator);
          }
        }, "\r\n                                ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_213), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.target_indicator]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q1 = $event;
          },
          type: "text",
          onInput: _cache[60] || (_cache[60] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q1', exp.id, exp.physical_q1);
          }
        }, "                                ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_214), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q2 = $event;
          },
          type: "text",
          onInput: _cache[61] || (_cache[61] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q2', exp.id, exp.physical_q2);
          }
        }, "                                ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_215), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q3 = $event;
          },
          type: "text",
          onInput: _cache[62] || (_cache[62] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q3', exp.id, exp.physical_q3);
          }
        }, "                                ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_216), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q4 = $event;
          },
          type: "text",
          onInput: _cache[63] || (_cache[63] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q4', exp.id, exp.physical_q4);
          }
        }, "                                ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_217), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm text-white",
          onClick: function onClick($event) {
            return $options.deleteExpectedOutput(exp.id, 'expected_revised_outputs', exp.description, _ctx.index);
          }
        }, " 🗑 Delete ", 8 /* PROPS */, _hoisted_218)])]);
      }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </tr> ")])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" id:{{ id }}\r\n        <br />\r\n        editData: {{editData}}\r\n        <br />\r\n        form: {{form}} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{id}}\r\n        {{ rev }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ implementation }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ ccet_codes }} ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "modal-dialog modal-xl draggable-dialog",
  ref: "dialog"
};
var _hoisted_4 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_5 = {
  "class": "modal-content resizable-content",
  ref: "content"
};
var _hoisted_6 = {
  "class": "modal-header draggable-header",
  style: {
    "background-color": "#030014"
  },
  ref: "header"
};
var _hoisted_7 = {
  "class": "modal-title",
  style: {
    "color": "#ffe819",
    "text-align": "center !important"
  }
};
var _hoisted_8 = {
  "class": "modal-body"
};
var _hoisted_9 = {
  "class": "resize-handle",
  ref: "resizeHandle"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"width: 100% !important; height: 40% !important; \" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
  }, "×", -1 /* CACHED */)])))], 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 🔽 Resize handle "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, null, 512 /* NEED_PATCH */)], 512 /* NEED_PATCH */)])], 512 /* NEED_PATCH */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "masonry-item w-100"
};
var _hoisted_2 = {
  "class": "row gap-20"
};
var _hoisted_3 = {
  "class": "col-md-3 col-6"
};
var _hoisted_4 = {
  "class": "layers bd bgc-white p-20"
};
var _hoisted_5 = {
  "class": "layer w-100 mB-10"
};
var _hoisted_6 = {
  "class": "lh-1"
};
var _hoisted_7 = {
  "class": "layer w-100"
};
var _hoisted_8 = {
  "class": "peers ai-sb fxw-nw"
};
var _hoisted_9 = {
  "class": "layers bd bgc-white p-20"
};
var _hoisted_10 = {
  "class": "layer w-100"
};
var _hoisted_11 = {
  "class": "peers ai-sb fxw-nw"
};
var _hoisted_12 = {
  "class": "form-control"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_6, "Municipalities " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.my_mun), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "peer peer-greed"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "sparklinedash"
  })], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.munsel = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.loadBar && $options.loadBar.apply($options, arguments);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.mun, function (munn) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(munn.citymunDesc), 1 /* TEXT */);
  }), 256 /* UNKEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.munsel]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "layer w-100 mB-10"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
    "class": "lh-1"
  }, "Barangay")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "peer peer-greed"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "sparklinedash"
  })], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_12, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.bar, function (barr) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(barr.brgyDesc), 1 /* TEXT */);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=style&index=0&id=c803d818&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=style&index=0&id=c803d818&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntd, th {\r\n  border: 1px solid #000 !important;\n}\ntable {\r\n  border-collapse: collapse !important;\n}\n.th {\r\n    background-color: #929292 !important;\n}\n.superscript-btn {\r\n  /* font-size: 0.6em; */\r\n  /* vertical-align: super; */\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  margin-left: 4px;\r\n  cursor: pointer;\r\n  color: #df280c;\n}\n.action-btn {\r\n  width: 100%;\n}\n.no-border-table td,\r\n.no-border-table th {\r\n  border: none !important;\n}\n.no-border-table {\r\n  border-collapse: collapse !important;\n}\n.signatory-grid {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem; /* space between cards */\n}\n.signatory-card {\r\n  flex: 0 0 calc(50% - 0.5rem); /* 2 per row with spacing */\r\n  border: 0px solid #ccc;\r\n  padding: 1rem;\r\n  border-radius: 8px;\n}\n.signatory-card-full {\r\n  width: 100%; /* each card full width */\r\n  margin-bottom: 1rem;\n}\n.sticky-comments {\r\n    position: fixed;\r\n    top: 70px;\r\n    right: 20px;\r\n    width: 450px;\r\n    z-index: 10;\n}\n.scrollable-text {\r\n    height: 300px;           /*define the height you want*/\r\n    overflow-y: auto;        /*vertical scrollbar if content exceeds height*/\r\n    /*padding: 0px;           optional padding*/\r\n    /*border: 1px solid #ccc;  optional border*/\r\n    background-color: #fff;  /*optional background*/\r\n    /*line-height: 1.6;        improve readability*/\n}\n.sticky-comments .comments-header {\r\n    display: flex;\r\n    justify-content: space-between; /* Push h4 left and button right */\r\n    align-items: center;            /* Vertical alignment */\r\n    margin-bottom: 10px;            /* Space below the header */\n}\n.sticky-comments .close-btn {\r\n    background: transparent;\r\n    border: none;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    line-height: 1;\r\n    padding: 0;\r\n    color: #333;\n}\n.highlight-target {\r\n    animation: highlightFlash 2s ease-out;\n}\n@keyframes highlightFlash {\n0% { background-color: #46ff18ff;\n}\n100% { background-color: transparent;\n}\n}\n.comment-approved {\r\n    color: darkgreen;\r\n    padding: 3px 6px;\r\n    border-radius: 4px;\r\n    transition: color .2s;\n}\n.comment-approved:hover {\r\n    color: #00AEEF; /* sky blue */\n}\n.comment-rejected {\r\n    color: red;\r\n    padding: 3px 6px;\r\n    border-radius: 4px;\r\n    transition: color .2s;\n}\n.comment-rejected:hover {\r\n    color: #CC7722; /* golden ochre */\n}\n.transparent-bg {\r\n    background-color: transparent !important;\n}\r\n/* TAB DESIGN *******************************************************************************************************************/\r\n/* Style the tab */\r\n/* .tab {\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  background-color: #f1f1f1;\r\n  color: #000 !important\r\n} */\r\n\r\n/* Style the buttons that are used to open the tab content */\r\n/* .tab button {\r\n  background-color: inherit;\r\n  color: red;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n/* .tab button:hover {\r\n  background-color: #ddd;\r\n} */\r\n\r\n/* Create an active/current tablink class */\r\n/* .tab button.active {\r\n  background-color: #ccc;\r\n  color: #df280c\r\n} */\r\n\r\n/* Style the tab content */\r\n/*.tabcontent {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  border: 1px solid #ccc;\r\n  border-top: none;\r\n}\r\n\r\n.tablinks {\r\n    color: red;\r\n\r\n} */\n.comment-rejected:hover {\r\n    color: #CC7722; /* golden ochre */\n}\n.blink {\r\n    color: red;\r\n    animation: blinker 1s linear infinite;\n}\n@keyframes blinker {\n0%, 100% { color: red;\n}\n50% { color: #f8d823;\n} /* paler red */\n}\r\n\r\n/* HIDING QUILL EDITOR */\r\n/* Hide only the .ql-editor inside this wrapper */\n:deep([ref=\"beneficiariesEditorWrapper\"]) .ql-editor {\r\n  display: none;\n}\r\n/* .jump-arrow {\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 12px solid transparent;\r\n    border-bottom: 12px solid transparent;\r\n    border-right: 18px solid red;\r\n    z-index: 9999;\r\n    animation: fadeOut 2s forwards;\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% { opacity: 1; }\r\n    70% { opacity: 1; }\r\n    100% { opacity: 0; }\r\n} */\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* Override default value of 'none' */\n.modal[data-v-0e4809fa] {\r\n      display: block;\n}\n.modal[data-v-0e4809fa] {\r\n        z-index: 9999 !important;\n}\n.modal[data-v-0e4809fa] {\r\n        display: block;\r\n        z-index: 9999 !important;\n}\n.draggable-header[data-v-0e4809fa] {\r\n        cursor: move;\n}\n.draggable-dialog[data-v-0e4809fa] {\r\n        transition: none;\n}\n.resizable-content[data-v-0e4809fa] {\r\n        position: relative;\r\n        min-width: 500px;\r\n        min-height: 300px;\n}\r\n\r\n    /* .draggable-header {\r\n        cursor: move;\r\n    } */\n.resize-handle[data-v-0e4809fa] {\r\n        position: absolute;\r\n        width: 16px;\r\n        height: 16px;\r\n        right: 0;\r\n        bottom: 0;\r\n        cursor: se-resize;\r\n        background: transparent;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=style&index=0&id=c803d818&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=style&index=0&id=c803d818&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_c803d818_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=style&index=0&id=c803d818&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=style&index=0&id=c803d818&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_c803d818_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_c803d818_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_c803d818__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=c803d818 */ "./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=template&id=c803d818");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=script&lang=js");
/* harmony import */ var _Create_vue_vue_type_style_index_0_id_c803d818_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=c803d818&lang=css */ "./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=style&index=0&id=c803d818&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_c803d818__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle.vue":
/*!***************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true */ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true");
/* harmony import */ var _ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalDynamicTitle.vue?vue&type=script&lang=js */ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css */ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0e4809fa"],['__file',"resources/js/Shared/ModalDynamicTitle.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/PlacesShared.vue":
/*!**********************************************!*\
  !*** ./resources/js/Shared/PlacesShared.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlacesShared.vue?vue&type=template&id=ee3222a6 */ "./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6");
/* harmony import */ var _PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlacesShared.vue?vue&type=script&lang=js */ "./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/PlacesShared.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlacesShared.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=template&id=c803d818":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=template&id=c803d818 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_c803d818__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_c803d818__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=c803d818 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=template&id=c803d818");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=template&id=0e4809fa&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlacesShared.vue?vue&type=template&id=ee3222a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/PlacesShared.vue?vue&type=template&id=ee3222a6");


/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=style&index=0&id=c803d818&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=style&index=0&id=c803d818&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_c803d818_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=style&index=0&id=c803d818&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/DevelopmentFund/Create.vue?vue&type=style&index=0&id=c803d818&lang=css");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css");


/***/ })

}]);